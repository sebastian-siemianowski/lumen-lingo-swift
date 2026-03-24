import Foundation
import ClerkKit
import UIKit
import AuthenticationServices

// MARK: - Auth State Notification

extension Notification.Name {
    static let authStateDidChange = Notification.Name("authStateDidChange")
}

// MARK: - ClerkAuthService

@Observable
final class ClerkAuthService: AuthServiceProtocol, @unchecked Sendable {

    private(set) var currentUser: AppUser?
    private(set) var isAuthenticated: Bool = false
    private(set) var isLoading: Bool = false
    private(set) var isGuestMode: Bool = false
    private(set) var sessionExpiredReason: SessionExpiredReason?
    private(set) var isMigrating: Bool = false
    private(set) var lastSignInMethod: AuthProvider?
    private(set) var linkedIdentities: Set<AuthProvider> = []

    /// Non-nil if Clerk SDK initialization failed (e.g., invalid key format).
    /// Views can observe this to display a diagnostic banner in Debug builds.
    private(set) var initializationError: (any Error)?

    /// The pending sign-in object used for OTP verification (set after requestOTP, consumed by verifyOTP).
    private var pendingSignIn: SignIn?
    /// The destination for the pending OTP (phone or email) — used for rate limiting.
    private var pendingOTPKey: String?

    /// Guards concurrent sign-in operations — first-in wins.
    private var activeSignInOperation: String?

    private nonisolated(unsafe) static var isConfigured = false

    @MainActor
    init() {
        guard !Self.isConfigured else {
            Log.warning("ClerkAuthService initialized more than once — ignoring duplicate")
            return
        }

        let config = EnvironmentConfig.current
        Clerk.configure(publishableKey: config.clerkPublishableKey)
        Self.isConfigured = true
        Log.info("Clerk SDK initialized for environment: \(config.environment.displayName)")
    }

    func login() async throws {
        throw AuthError.useSpecificMethod
    }

    @MainActor
    func logout() async {
        // Logout always wins — clear any in-progress sign-in
        activeSignInOperation = nil
        pendingSignIn = nil
        pendingOTPKey = nil

        isLoading = true
        defer {
            isLoading = false
            postAuthStateNotification()
        }

        do {
            try await Clerk.shared.auth.signOut()
        } catch {
            Log.error("Clerk sign-out failed: \(error.localizedDescription)")
        }

        currentUser = nil
        isAuthenticated = false
        sessionExpiredReason = nil
        lastSignInMethod = nil
        linkedIdentities = []
    }

    func continueAsGuest() {
        isAuthenticated = false
        currentUser = nil
        isGuestMode = true
        sessionExpiredReason = nil
        AuthAnalytics.track(.authSkipped, properties: ["is_first_launch": String(!UserDefaults.standard.bool(forKey: "hasSeenWelcomeAnimation"))])
    }

    @MainActor
    func checkAuthState() async {
        isLoading = true
        defer {
            isLoading = false
            postAuthStateNotification()
        }

        let clerk = Clerk.shared

        guard let session = clerk.session else {
            // No cached session at all
            isAuthenticated = false
            currentUser = nil
            sessionExpiredReason = nil
            AuthAnalytics.track(.sessionRestoreFailed, properties: ["reason": "no_session"])
            return
        }

        switch session.status {
        case .active:
            if let user = clerk.user {
                currentUser = mapUser(user)
                updateLinkedIdentities(from: user)
            }
            isAuthenticated = true
            sessionExpiredReason = nil
            AuthAnalytics.track(.sessionRestored)
            Log.info("Session restored (active)")

        case .expired:
            // Clerk's polling will attempt refresh; for now mark expired
            isAuthenticated = false
            currentUser = nil
            sessionExpiredReason = .tokenExpired
            Log.info("Session expired — user will need to re-authenticate")

        case .revoked, .removed, .ended:
            isAuthenticated = false
            currentUser = nil
            sessionExpiredReason = .serverRevoked
            AuthAnalytics.track(.forcedLogout, properties: ["reason": "revoked"])
            Log.info("Session revoked/ended — user will need to re-authenticate")

        default:
            isAuthenticated = false
            currentUser = nil
            sessionExpiredReason = nil
            Log.info("Session in unexpected state: \(session.status)")
        }
    }

    // MARK: - Provider-Specific Sign-In

    @MainActor
    func signInWithApple() async throws {
        guard activeSignInOperation == nil else {
            Log.warning("Sign-in already in progress (\(activeSignInOperation!)) — ignoring Apple sign-in")
            return
        }
        activeSignInOperation = "apple"
        isLoading = true
        defer {
            isLoading = false
            activeSignInOperation = nil
            postAuthStateNotification()
        }

        AuthAnalytics.track(.appleStarted)

        do {
            let result = try await Clerk.shared.auth.signInWithApple(
                requestedScopes: [.email, .fullName]
            )

            let isNewUser: Bool
            switch result {
            case .signIn(let signIn):
                isNewUser = false
                Log.info("Apple sign-in completed (existing user, sessionId: \(signIn.createdSessionId ?? "nil"))")
            case .signUp(let signUp):
                isNewUser = true
                Log.info("Apple sign-up completed (new user, sessionId: \(signUp.createdSessionId ?? "nil"))")
            }

            // Clerk updates its shared state after sign-in; read from it
            if let user = Clerk.shared.user {
                currentUser = mapUser(user)
                updateLinkedIdentities(from: user)
            }

            let hasPrivateEmail = currentUser?.isPrivateRelayEmail ?? false
            AuthAnalytics.track(.appleSucceeded, properties: [
                "is_new_user": String(isNewUser),
                "has_private_email": String(hasPrivateEmail)
            ])

            lastSignInMethod = .apple
            isAuthenticated = true
        } catch let error as ASAuthorizationError where error.code == .canceled {
            Log.info("Apple sign-in cancelled by user")
            AuthAnalytics.track(.appleSheetCancelled)
            throw AuthError.cancelled
        } catch let error as ClerkClientError {
            Log.error("Apple sign-in client error: \(error.message ?? "unknown")")
            AuthAnalytics.track(.appleFailed, properties: [
                "error_code": "client_error",
                "error_domain": "ClerkClientError"
            ])
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch let error as ClerkAPIError {
            Log.error("Apple sign-in API error: \(error.message ?? error.code)")
            AuthAnalytics.track(.appleFailed, properties: [
                "error_code": error.code,
                "error_domain": "ClerkAPIError"
            ])
            if error.code == "identifier_already_signed_in" || error.code == "external_account_exists" {
                throw AuthError.accountConflict
            }
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch {
            Log.error("Apple sign-in failed: \(error.localizedDescription)")
            AuthAnalytics.track(.appleFailed, properties: [
                "error_code": String(describing: type(of: error)),
                "error_domain": (error as NSError).domain
            ])
            throw AuthError.clerkError(underlying: error.localizedDescription)
        }
    }

    @MainActor
    func signInWithGoogle(presenting: UIViewController) async throws {
        guard activeSignInOperation == nil else {
            Log.warning("Sign-in already in progress (\(activeSignInOperation!)) — ignoring Google sign-in")
            return
        }
        activeSignInOperation = "google"
        isLoading = true
        defer {
            isLoading = false
            activeSignInOperation = nil
            postAuthStateNotification()
        }

        AuthAnalytics.track(.googleStarted)

        do {
            let result = try await Clerk.shared.auth.signInWithOAuth(provider: .google)

            let isNewUser: Bool
            switch result {
            case .signIn(let signIn):
                isNewUser = false
                Log.info("Google sign-in completed (existing user, sessionId: \(signIn.createdSessionId ?? "nil"))")
            case .signUp(let signUp):
                isNewUser = true
                Log.info("Google sign-up completed (new user, sessionId: \(signUp.createdSessionId ?? "nil"))")
            }

            if let user = Clerk.shared.user {
                currentUser = mapUser(user)
                updateLinkedIdentities(from: user)
            }

            let hasAvatar = currentUser?.avatarURL != nil
            AuthAnalytics.track(.googleSucceeded, properties: [
                "is_new_user": String(isNewUser),
                "has_avatar": String(hasAvatar)
            ])

            lastSignInMethod = .google
            isAuthenticated = true
        } catch let error as ClerkClientError {
            if error.message?.contains("cancelled") == true || error.message?.contains("canceled") == true {
                Log.info("Google sign-in cancelled by user")
                AuthAnalytics.track(.googlePickerCancelled)
                throw AuthError.cancelled
            }
            Log.error("Google sign-in client error: \(error.message ?? "unknown")")
            AuthAnalytics.track(.googleFailed, properties: ["error_code": "client_error"])
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch let error as ClerkAPIError {
            Log.error("Google sign-in API error: \(error.message ?? error.code)")
            AuthAnalytics.track(.googleFailed, properties: ["error_code": error.code])
            if error.code == "identifier_already_signed_in" || error.code == "external_account_exists" {
                throw AuthError.accountConflict
            }
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch let error as NSError where error.domain == "com.apple.AuthenticationServices.WebAuthenticationSession" && error.code == 1 {
            // ASWebAuthenticationSession cancellation
            Log.info("Google sign-in cancelled by user (ASWebAuthenticationSession)")
            AuthAnalytics.track(.googlePickerCancelled)
            throw AuthError.cancelled
        } catch {
            Log.error("Google sign-in failed: \(error.localizedDescription)")
            AuthAnalytics.track(.googleFailed, properties: [
                "error_code": String(describing: type(of: error))
            ])
            throw AuthError.clerkError(underlying: error.localizedDescription)
        }
    }

    @MainActor
    func requestOTP(to destination: OTPDestination) async throws {
        isLoading = true
        defer { isLoading = false }

        let method: String
        switch destination {
        case .phone: method = "phone"
        case .email: method = "email"
        }

        AuthAnalytics.track(.otpRequested, properties: ["method": method])

        do {
            let signIn: SignIn
            switch destination {
            case .phone(let phoneNumber):
                signIn = try await Clerk.shared.auth.signInWithPhoneCode(phoneNumber: phoneNumber)
                Log.info("OTP sent to phone")
            case .email(let emailAddress):
                signIn = try await Clerk.shared.auth.signInWithEmailCode(emailAddress: emailAddress)
                Log.info("OTP sent to email")
            }
            pendingSignIn = signIn
            pendingOTPKey = method
        } catch let error as ClerkAPIError {
            Log.error("OTP request API error: \(error.message ?? error.code)")
            AuthAnalytics.track(.otpFailed, properties: [
                "method": method,
                "error_type": error.code
            ])
            if error.code == "too_many_requests" || error.code == "rate_limit_exceeded" {
                throw AuthError.rateLimited(retryAfter: 60)
            }
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch let error as ClerkClientError {
            Log.error("OTP request client error: \(error.message ?? "unknown")")
            AuthAnalytics.track(.otpFailed, properties: [
                "method": method,
                "error_type": "client_error"
            ])
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch {
            Log.error("OTP request failed: \(error.localizedDescription)")
            AuthAnalytics.track(.otpFailed, properties: [
                "method": method,
                "error_type": "unknown"
            ])
            throw AuthError.clerkError(underlying: error.localizedDescription)
        }
    }

    @MainActor
    func verifyOTP(code: String) async throws {
        guard let signIn = pendingSignIn else {
            throw AuthError.clerkError(underlying: "No pending OTP verification")
        }

        // Rate limiting
        let key = pendingOTPKey ?? "unknown"
        let delay = OTPRateLimiter.shared.requiredDelay(for: key)
        if delay > 0 {
            throw AuthError.clerkError(underlying: "Too many attempts. Try again in \(Int(delay)) seconds.")
        }
        guard OTPRateLimiter.shared.recordAttempt(for: key) else {
            throw AuthError.clerkError(underlying: "Too many attempts. Please wait before trying again.")
        }

        isLoading = true
        defer {
            isLoading = false
            postAuthStateNotification()
        }

        AuthAnalytics.track(.otpEntered)

        do {
            let result = try await signIn.verifyCode(code)
            pendingSignIn = nil
            OTPRateLimiter.shared.recordSuccess(for: key)

            if result.status == .complete {
                if let user = Clerk.shared.user {
                    currentUser = mapUser(user)
                    updateLinkedIdentities(from: user)
                }
                lastSignInMethod = .email
                isAuthenticated = true

                AuthAnalytics.track(.otpSucceeded, properties: [
                    "is_new_user": "false"
                ])
                Log.info("OTP verification succeeded")
            } else {
                Log.warning("OTP verification returned status: \(result.status)")
                throw AuthError.clerkError(underlying: "Verification incomplete")
            }
        } catch let error as ClerkAPIError {
            Log.error("OTP verify API error: \(error.message ?? error.code)")
            if error.code == "verification_failed" || error.code == "incorrect_code" {
                AuthAnalytics.track(.otpFailed, properties: ["error_type": "wrong"])
                throw AuthError.invalidOTP
            }
            if error.code == "verification_expired" {
                AuthAnalytics.track(.otpFailed, properties: ["error_type": "expired"])
                throw AuthError.expiredOTP
            }
            AuthAnalytics.track(.otpFailed, properties: ["error_type": error.code])
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch let error as ClerkClientError {
            Log.error("OTP verify client error: \(error.message ?? "unknown")")
            AuthAnalytics.track(.otpFailed, properties: ["error_type": "client_error"])
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch let authError as AuthError {
            throw authError
        } catch {
            Log.error("OTP verification failed: \(error.localizedDescription)")
            AuthAnalytics.track(.otpFailed, properties: ["error_type": "unknown"])
            throw AuthError.clerkError(underlying: error.localizedDescription)
        }
    }

    /// Resend the OTP code for the current pending sign-in.
    @MainActor
    func resendOTP(to destination: OTPDestination) async throws {
        guard let signIn = pendingSignIn else {
            throw AuthError.clerkError(underlying: "No pending OTP to resend")
        }

        let method: String
        switch destination {
        case .phone: method = "phone"
        case .email: method = "email"
        }

        do {
            let updated: SignIn
            switch destination {
            case .phone:
                updated = try await signIn.sendPhoneCode()
            case .email:
                updated = try await signIn.sendEmailCode()
            }
            pendingSignIn = updated
            AuthAnalytics.track(.otpResend, properties: ["method": method])
            Log.info("OTP resent")
        } catch let error as ClerkAPIError {
            Log.error("OTP resend API error: \(error.message ?? error.code)")
            if error.code == "too_many_requests" || error.code == "rate_limit_exceeded" {
                throw AuthError.rateLimited(retryAfter: 60)
            }
            throw AuthError.clerkError(underlying: error.message ?? error.localizedDescription)
        } catch {
            Log.error("OTP resend failed: \(error.localizedDescription)")
            throw AuthError.clerkError(underlying: error.localizedDescription)
        }
    }

    // MARK: - Private

    private func mapUser(_ user: ClerkKit.User) -> AppUser {
        let name = [user.firstName, user.lastName]
            .compactMap { $0 }
            .joined(separator: " ")
        let email = user.primaryEmailAddress?.emailAddress ?? ""
        let avatarURL = URL(string: user.imageUrl)

        return AppUser(id: user.id, name: name, email: email, avatarURL: avatarURL)
    }

    private func updateLinkedIdentities(from user: ClerkKit.User) {
        var identities = Set<AuthProvider>()

        for account in user.externalAccounts {
            switch account.provider {
            case "apple": identities.insert(.apple)
            case "google": identities.insert(.google)
            default: break
            }
        }
        if !user.phoneNumbers.isEmpty { identities.insert(.phone) }
        if !user.emailAddresses.isEmpty { identities.insert(.email) }

        linkedIdentities = identities
    }

    private func postAuthStateNotification() {
        NotificationCenter.default.post(name: .authStateDidChange, object: nil)
    }
}

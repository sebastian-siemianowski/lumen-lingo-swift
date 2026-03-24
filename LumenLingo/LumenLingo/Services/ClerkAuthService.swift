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
        isLoading = true
        defer {
            isLoading = false
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

    func signInWithGoogle(presenting: UIViewController) async throws {
        // Real implementation in Epic 3
        throw AuthError.notSupported
    }

    func requestOTP(to destination: OTPDestination) async throws {
        // Real implementation in Epic 4
        throw AuthError.notSupported
    }

    func verifyOTP(code: String) async throws {
        // Real implementation in Epic 4
        throw AuthError.notSupported
    }

    // MARK: - Private

    private func mapUser(_ user: ClerkKit.User) -> AppUser {
        let name = [user.firstName, user.lastName]
            .compactMap { $0 }
            .joined(separator: " ")
        let email = user.primaryEmailAddress?.emailAddress ?? ""
        let avatarURL = URL(string: user.imageUrl)

        return AppUser(name: name, email: email, avatarURL: avatarURL)
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

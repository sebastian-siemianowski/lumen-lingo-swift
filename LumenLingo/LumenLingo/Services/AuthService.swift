import Foundation
import SwiftUI
import UIKit

// MARK: - Auth Provider

/// Authentication providers supported by the app.
/// Used for identity linking and sign-in method tracking.
enum AuthProvider: String, CaseIterable, Identifiable, Codable, Hashable {
    case apple
    case google
    case phone
    case email

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .apple:  return "Apple"
        case .google: return "Google"
        case .phone:  return "Phone"
        case .email:  return "Email"
        }
    }

    var iconName: String {
        switch self {
        case .apple:  return "apple.logo"
        case .google: return "globe"
        case .phone:  return "phone.fill"
        case .email:  return "envelope.fill"
        }
    }
}

// MARK: - OTP Destination

enum OTPDestination: Equatable {
    case phone(String)   // E.164 format, e.g. "+44 7700 900000"
    case email(String)   // RFC 5322 format
}

// MARK: - Auth Error

/// Error types for authentication operations.
/// Used by both MockAuthService and ClerkAuthService.
enum AuthError: Error, Equatable {
    case networkUnavailable
    case rateLimited(retryAfter: TimeInterval)
    case accountSuspended(reason: String)
    case accountDeleted
    case invalidOTP
    case expiredOTP
    case clerkUnavailable
    case accountConflict
    case useSpecificMethod
    case notSupported
    case cancelled
    case clerkError(underlying: String)
    case unknown(String)

    var localizedDescription: String {
        switch self {
        case .networkUnavailable:
            return "No internet connection. Please check your network and try again."
        case .rateLimited(let retryAfter):
            return "Too many attempts. Please wait \(Int(retryAfter)) seconds and try again."
        case .accountSuspended(let reason):
            return "Your account has been suspended: \(reason)"
        case .accountDeleted:
            return "This account has been deleted."
        case .invalidOTP:
            return "The code you entered is incorrect. Please try again."
        case .expiredOTP:
            return "This code has expired. Please request a new one."
        case .clerkUnavailable:
            return "Authentication service is temporarily unavailable. Please try again later."
        case .accountConflict:
            return "This identity is already linked to another account."
        case .useSpecificMethod:
            return "Please use a specific sign-in method (Apple, Google, or OTP)."
        case .notSupported:
            return "This sign-in method is not available."
        case .cancelled:
            return "Sign-in was cancelled."
        case .clerkError(let underlying):
            return "Authentication failed: \(underlying)"
        case .unknown(let message):
            return message
        }
    }
}

// MARK: - Session Expired Reason

enum SessionExpiredReason: String, Equatable {
    case tokenExpired
    case serverRevoked
}

// MARK: - Auth Service Protocol

/// Protocol for authentication service. Designed for easy swap from mock to
/// Firebase Auth, Sign in with Apple, or any other provider.
protocol AuthServiceProtocol: Observable, Sendable {
    var currentUser: AppUser? { get }
    var isAuthenticated: Bool { get }
    var isLoading: Bool { get }
    var isGuestMode: Bool { get }
    var sessionExpiredReason: SessionExpiredReason? { get }
    var isMigrating: Bool { get }
    var lastSignInMethod: AuthProvider? { get }
    var linkedIdentities: Set<AuthProvider> { get }

    func login() async throws
    func logout() async
    func checkAuthState() async

    func signInWithApple() async throws
    func signInWithGoogle(presenting: UIViewController) async throws
    func requestOTP(to destination: OTPDestination) async throws
    func verifyOTP(code: String) async throws
}

// MARK: - Default Implementations

extension AuthServiceProtocol {
    func signInWithApple() async throws {
        throw AuthError.notSupported
    }

    func signInWithGoogle(presenting: UIViewController) async throws {
        throw AuthError.notSupported
    }

    func requestOTP(to destination: OTPDestination) async throws {
        throw AuthError.notSupported
    }

    func verifyOTP(code: String) async throws {
        throw AuthError.notSupported
    }
}

// MARK: - Mock Auth Service

/// Mock authentication service that reads from DebugAuthController in DEBUG builds.
/// Swap this for a real implementation (Clerk, etc.) by conforming to `AuthServiceProtocol`.
@Observable
final class MockAuthService: AuthServiceProtocol, @unchecked Sendable {
    private(set) var currentUser: AppUser? = .mock
    private(set) var isAuthenticated: Bool = true
    private(set) var isLoading: Bool = false
    private(set) var isGuestMode: Bool = false
    private(set) var sessionExpiredReason: SessionExpiredReason? = nil
    private(set) var isMigrating: Bool = false
    private(set) var lastSignInMethod: AuthProvider? = nil
    private(set) var linkedIdentities: Set<AuthProvider> = [.apple]

    #if DEBUG
    private var lastAppliedUser: AppUser?

    @MainActor
    func syncFromDebugController() {
        let controller = DebugAuthController.shared
        let override = controller.activeOverride

        switch override {
        case .none, .authenticated:
            let mockAppUser = controller.mockUser.asAppUser
            isAuthenticated = true
            currentUser = mockAppUser
            isGuestMode = false
            sessionExpiredReason = nil
            isMigrating = false
            lastSignInMethod = controller.mockUser.signInMethod
            linkedIdentities = controller.mockUser.linkedProviders

        case .unauthenticated:
            isAuthenticated = false
            currentUser = nil
            isGuestMode = false
            sessionExpiredReason = nil
            isMigrating = false

        case .guestMode:
            isAuthenticated = false
            currentUser = nil
            isGuestMode = true
            sessionExpiredReason = nil
            isMigrating = false

        case .sessionExpired:
            isAuthenticated = false
            // Retain last user for re-auth prompt
            sessionExpiredReason = .tokenExpired
            isGuestMode = false
            isMigrating = false

        case .sessionRevoked:
            isAuthenticated = false
            currentUser = nil
            sessionExpiredReason = .serverRevoked
            isGuestMode = false
            isMigrating = false

        case .networkError, .rateLimited, .clerkUnavailable,
             .accountSuspended, .accountDeleted:
            isAuthenticated = false
            isLoading = false

        case .migrationPending:
            isAuthenticated = true
            currentUser = controller.mockUser.asAppUser
            isMigrating = true
            sessionExpiredReason = nil
            isGuestMode = false
            lastSignInMethod = controller.mockUser.signInMethod
            linkedIdentities = controller.mockUser.linkedProviders
        }
    }
    #endif

    func login() async throws {
        isLoading = true

        #if DEBUG
        let latency = await DebugAuthController.shared.simulatedLatency
        if latency > 0 {
            try await Task.sleep(for: .seconds(latency))
        } else {
            try await Task.sleep(for: .milliseconds(500))
        }

        let override = await DebugAuthController.shared.activeOverride
        switch override {
        case .networkError:
            isLoading = false
            throw AuthError.networkUnavailable
        case .rateLimited:
            isLoading = false
            throw AuthError.rateLimited(retryAfter: 30)
        case .accountSuspended:
            isLoading = false
            throw AuthError.accountSuspended(reason: "Policy violation")
        case .accountDeleted:
            isLoading = false
            throw AuthError.accountDeleted
        default:
            await syncFromDebugController()
            isLoading = false
        }
        #else
        try await Task.sleep(for: .milliseconds(500))
        currentUser = .mock
        isAuthenticated = true
        isLoading = false
        #endif
    }

    func logout() async {
        isLoading = true
        try? await Task.sleep(for: .milliseconds(300))
        isAuthenticated = false
        currentUser = nil
        isGuestMode = false
        sessionExpiredReason = nil
        isMigrating = false
        isLoading = false
    }

    func checkAuthState() async {
        isLoading = true
        try? await Task.sleep(for: .milliseconds(200))

        #if DEBUG
        let override = await DebugAuthController.shared.activeOverride
        if override == .clerkUnavailable {
            // Graceful offline fallback — keep whatever state we had
            isLoading = false
            return
        }
        await syncFromDebugController()
        isLoading = false
        #else
        currentUser = .mock
        isAuthenticated = true
        isLoading = false
        #endif
    }
}

// MARK: - Auth Service Environment Key

private struct AuthServiceKey: EnvironmentKey {
    static let defaultValue: any AuthServiceProtocol = MockAuthService()
}

extension EnvironmentValues {
    var authService: any AuthServiceProtocol {
        get { self[AuthServiceKey.self] }
        set { self[AuthServiceKey.self] = newValue }
    }
}

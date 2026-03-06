import Foundation

// MARK: - Auth Service Protocol

/// Protocol for authentication service. Designed for easy swap from mock to
/// Firebase Auth, Sign in with Apple, or any other provider.
protocol AuthServiceProtocol: Observable {
    var currentUser: AppUser? { get }
    var isAuthenticated: Bool { get }
    var isLoading: Bool { get }

    func login() async throws
    func logout() async
    func checkAuthState() async
}

// MARK: - Mock Auth Service

/// Mock authentication service that returns a hardcoded user.
/// Swap this for a real implementation (Firebase, Sign in with Apple, etc.)
/// by conforming to `AuthServiceProtocol`.
@Observable
final class MockAuthService: AuthServiceProtocol {
    private(set) var currentUser: AppUser? = .mock
    private(set) var isAuthenticated: Bool = true
    private(set) var isLoading: Bool = false

    func login() async throws {
        isLoading = true
        // Simulate network delay
        try await Task.sleep(for: .milliseconds(500))
        currentUser = .mock
        isAuthenticated = true
        isLoading = false
    }

    func logout() async {
        isLoading = true
        try? await Task.sleep(for: .milliseconds(300))
        // In mock mode, we keep the user "logged in" but this is where
        // real logout would happen
        isLoading = false
    }

    func checkAuthState() async {
        isLoading = true
        try? await Task.sleep(for: .milliseconds(200))
        currentUser = .mock
        isAuthenticated = true
        isLoading = false
    }
}

#if DEBUG
import Foundation

/// Mock token manager for QA testing (Story 0.6).
/// Provides fake JWT-like strings with configurable expiry times.
/// Follows the same async pattern that real Clerk token refresh will use.
@MainActor @Observable
final class MockTokenManager {
    static let shared = MockTokenManager()

    private(set) var lastRefreshDate: Date? = nil
    private(set) var isRefreshing: Bool = false
    private(set) var lastRefreshError: String? = nil

    /// Multi-device simulation state
    var otherDeviceSignedIn: Bool = false
    var allSessionsRevoked: Bool = false

    private var expiryTimer: Task<Void, Never>?

    private init() {}

    /// Generate a fake JWT-like token string.
    func currentToken() -> String {
        let controller = DebugAuthController.shared
        guard controller.tokenState != .expired else { return "" }
        let header = Data("{\"alg\":\"RS256\",\"typ\":\"JWT\"}".utf8).base64EncodedString()
        let payload = Data("{\"sub\":\"mock_\(controller.mockUser.displayName)\",\"iat\":\(Int(Date.now.timeIntervalSince1970)),\"exp\":\(Int((controller.mockTokenExpiry ?? Date.distantFuture).timeIntervalSince1970))}".utf8).base64EncodedString()
        let signature = Data("mock_signature".utf8).base64EncodedString()
        return "\(header).\(payload).\(signature)"
    }

    /// Refresh the mock token. Follows the same async pattern as real Clerk.
    func refreshToken() async throws -> String {
        let controller = DebugAuthController.shared
        isRefreshing = true
        lastRefreshError = nil

        let latency = max(controller.simulatedLatency, 0.5)
        try await Task.sleep(for: .seconds(latency))

        if controller.failNextTokenRefresh || controller.shouldSimulateTokenRefreshFailure {
            isRefreshing = false
            controller.failNextTokenRefresh = false
            let error = "Token refresh failed: Network unavailable"
            lastRefreshError = error
            throw AuthError.networkUnavailable
        }

        // Refresh successful — extend expiry by 1 hour
        controller.mockTokenExpiry = Date.now.addingTimeInterval(3600)
        lastRefreshDate = Date.now
        isRefreshing = false
        return currentToken()
    }

    /// Expire the token now and trigger the refresh flow.
    func expireAndRefresh() async {
        DebugAuthController.shared.expireTokenNow()
        do {
            _ = try await refreshToken()
        } catch {
            // Error already captured in lastRefreshError
        }
    }

    /// Start a countdown timer to expire the token.
    func startExpiryCountdown(seconds: TimeInterval) {
        DebugAuthController.shared.expireTokenAfter(seconds)
        expiryTimer?.cancel()
        expiryTimer = Task {
            try? await Task.sleep(for: .seconds(seconds))
            guard !Task.isCancelled else { return }
            // Token has expired, trigger notification
            NotificationCenter.default.post(name: .mockTokenExpired, object: nil)
        }
    }

    /// Simulate session revocation from server.
    func revokeSession() {
        let controller = DebugAuthController.shared
        controller.activeOverride = .sessionRevoked
        controller.mockTokenExpiry = Date.now.addingTimeInterval(-1)
        NotificationCenter.default.post(name: .mockSessionRevoked, object: nil)
    }

    /// Simulate sign-in from another device.
    func simulateOtherDeviceSignIn() {
        otherDeviceSignedIn = true
        NotificationCenter.default.post(name: .mockOtherDeviceSignIn, object: nil)
    }

    /// Simulate all sessions revoked.
    func simulateAllSessionsRevoked() {
        allSessionsRevoked = true
        DebugAuthController.shared.activeOverride = .sessionRevoked
        NotificationCenter.default.post(name: .mockAllSessionsRevoked, object: nil)
    }

    func reset() {
        expiryTimer?.cancel()
        expiryTimer = nil
        lastRefreshDate = nil
        isRefreshing = false
        lastRefreshError = nil
        otherDeviceSignedIn = false
        allSessionsRevoked = false
    }
}

// MARK: - Notification Names

extension Notification.Name {
    static let mockTokenExpired = Notification.Name("mockTokenExpired")
    static let mockSessionRevoked = Notification.Name("mockSessionRevoked")
    static let mockOtherDeviceSignIn = Notification.Name("mockOtherDeviceSignIn")
    static let mockAllSessionsRevoked = Notification.Name("mockAllSessionsRevoked")
}
#endif

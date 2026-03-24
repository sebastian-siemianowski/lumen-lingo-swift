import Foundation

// MARK: - OTP Rate Limiter

/// Client-side rate limiter for OTP verification attempts.
/// Prevents brute-force attacks by progressively adding delays.
/// State is in-memory only — app restart resets it.
@MainActor
final class OTPRateLimiter {
    static let shared = OTPRateLimiter()

    /// Attempts tracked per destination (phone number or email).
    private var attempts: [String: DestinationState] = [:]

    private struct DestinationState {
        var count: Int = 0
        var lastAttempt: Date = .distantPast
        var lockedUntil: Date?
    }

    private init() {}

    /// Check whether the given destination is currently locked.
    /// Returns the remaining lockout duration, or nil if attempts are allowed.
    func lockoutRemaining(for destination: String) -> TimeInterval? {
        guard let state = attempts[destination],
              let lockedUntil = state.lockedUntil,
              lockedUntil > Date() else {
            return nil
        }
        return lockedUntil.timeIntervalSinceNow
    }

    /// Required delay before the next attempt is allowed.
    /// Returns 0 if no delay is needed.
    func requiredDelay(for destination: String) -> TimeInterval {
        guard let state = attempts[destination] else { return 0 }

        // Check lockout first
        if let lockedUntil = state.lockedUntil, lockedUntil > Date() {
            return lockedUntil.timeIntervalSinceNow
        }

        switch state.count {
        case 0...3: return 0
        case 4...5: return 5     // 5-second delay
        case 6...8: return 30    // 30-second delay
        default: return 300      // 5-minute lockout
        }
    }

    /// Record a verification attempt for the given destination.
    /// Returns true if the attempt is allowed, false if rate-limited.
    func recordAttempt(for destination: String) -> Bool {
        var state = attempts[destination] ?? DestinationState()

        // Check lockout
        if let lockedUntil = state.lockedUntil, lockedUntil > Date() {
            return false
        }

        // Reset if inactive for 30 minutes
        if state.lastAttempt.timeIntervalSinceNow < -1800 {
            state = DestinationState()
        }

        state.count += 1
        state.lastAttempt = Date()

        // Set lockout at 9+ attempts
        if state.count >= 9 {
            state.lockedUntil = Date().addingTimeInterval(300) // 5 minutes
        }

        attempts[destination] = state
        return true
    }

    /// Record a successful verification — resets the counter.
    func recordSuccess(for destination: String) {
        attempts.removeValue(forKey: destination)
    }

    /// Reset all rate limit state (e.g., for testing).
    func reset() {
        attempts.removeAll()
    }
}

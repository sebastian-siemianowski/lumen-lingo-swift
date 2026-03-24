import LocalAuthentication

// MARK: - Biometric Auth Service

/// Prompts for Face ID / Touch ID / device passcode before sensitive operations.
enum BiometricAuthService {

    enum BiometricResult {
        case success
        case failed(Error)
        case unavailable
    }

    /// Prompt the user for biometric or passcode authentication.
    /// - Parameter reason: User-facing reason string (e.g., "Authenticate to delete your account").
    /// - Returns: The result of the biometric evaluation.
    @MainActor
    static func authenticate(reason: String) async -> BiometricResult {
        let context = LAContext()
        var error: NSError?

        // Use deviceOwnerAuthentication (biometric + passcode fallback)
        guard context.canEvaluatePolicy(.deviceOwnerAuthentication, error: &error) else {
            return .unavailable
        }

        do {
            let success = try await context.evaluatePolicy(
                .deviceOwnerAuthentication,
                localizedReason: reason
            )
            return success ? .success : .failed(AuthError.biometricFailed)
        } catch {
            return .failed(error)
        }
    }
}

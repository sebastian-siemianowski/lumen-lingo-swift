import Foundation

// MARK: - Feature Flag Service

/// Lightweight feature flag service for gradual feature rollout.
/// Reads flags from UserDefaults (populated by remote config at launch)
/// with environment-aware fallback defaults.
///
/// Flags are checked **once at launch** and cached — they do not toggle mid-session.
enum FeatureFlagService {

    // MARK: - Flag Keys

    private enum Key: String {
        case clerkAuthEnabled = "ff_clerk_auth_enabled"
    }

    // MARK: - Public API

    /// Whether Clerk authentication is enabled for this session.
    /// Checked once at launch and cached for the session lifetime.
    static let clerkAuthEnabled: Bool = {
        resolve(.clerkAuthEnabled)
    }()

    // MARK: - Resolution

    /// Resolves a flag value: UserDefaults override > environment default.
    private static func resolve(_ key: Key) -> Bool {
        let defaults = UserDefaults.standard

        // Check if there's an explicit override stored (from remote config or debug panel)
        if defaults.object(forKey: key.rawValue) != nil {
            return defaults.bool(forKey: key.rawValue)
        }

        // Environment-aware default
        return defaultValue(for: key)
    }

    private static func defaultValue(for key: Key) -> Bool {
        switch key {
        case .clerkAuthEnabled:
            // Dev/QA: always enabled for testing
            // UAT: enabled for integration testing
            // PreProd/Prod: disabled until gradual rollout
            let env = EnvironmentConfig.current.environment
            switch env {
            case .dev, .qa, .uat:
                return true
            case .preprod, .prod:
                return false
            }
        }
    }

    // MARK: - Remote Config Update

    /// Update a flag from remote config response.
    /// Takes effect on next app launch (flags are cached per-session).
    static func setRemoteValue(_ value: Bool, for key: String) {
        UserDefaults.standard.set(value, forKey: key)
    }

    /// Clear a remote override, reverting to environment default on next launch.
    static func clearOverride(for key: String) {
        UserDefaults.standard.removeObject(forKey: key)
    }
}

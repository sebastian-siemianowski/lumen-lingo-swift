import Foundation
import os.log

// MARK: - Device Integrity Service

/// Lightweight device integrity check for jailbreak detection.
/// Runs on launch. In Release builds, logs a warning but does not block.
/// In Debug builds, shows a warning banner.
enum DeviceIntegrityService {

    private static let logger = Logger(subsystem: Bundle.main.bundleIdentifier ?? "com.lumenlingo", category: "Security")

    /// Result of the integrity check.
    struct IntegrityResult {
        let isCompromised: Bool
        let indicators: [String]
    }

    /// Run all integrity checks and return the result.
    static func check() -> IntegrityResult {
        var indicators: [String] = []

        #if targetEnvironment(simulator)
        // Skip all checks on simulator — always clean
        return IntegrityResult(isCompromised: false, indicators: [])
        #else

        // Check 1: Known jailbreak paths
        let suspiciousPaths = [
            "/Applications/Cydia.app",
            "/Library/MobileSubstrate/MobileSubstrate.dylib",
            "/usr/sbin/sshd",
            "/usr/bin/sshd",
            "/etc/apt",
            "/private/var/lib/apt/",
            "/private/var/stash"
        ]
        for path in suspiciousPaths {
            if FileManager.default.fileExists(atPath: path) {
                indicators.append("path:\(path)")
            }
        }

        // Check 2: Can write outside sandbox
        let testPath = "/private/jailbreak_test_\(UUID().uuidString)"
        if FileManager.default.createFile(atPath: testPath, contents: Data("test".utf8)) {
            try? FileManager.default.removeItem(atPath: testPath)
            indicators.append("writable_system")
        }

        // Check 3: Can open Cydia URL scheme
        // (Skipped — requires UIApplication which isn't available from a service enum)

        let isCompromised = !indicators.isEmpty

        if isCompromised {
            logger.warning("Device integrity check: compromised indicators=\(indicators.joined(separator: ","), privacy: .public)")
            AuthAnalytics.track(.integrityWarning, properties: [
                "indicators": indicators.joined(separator: ",")
            ])
        } else {
            logger.info("Device integrity check: clean")
        }

        return IntegrityResult(isCompromised: isCompromised, indicators: indicators)
        #endif
    }
}

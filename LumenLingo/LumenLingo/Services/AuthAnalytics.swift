import Foundation
import UIKit

// MARK: - Auth Analytics

/// Fire-and-forget analytics events for authentication flows.
/// Currently logs via `Log` — will be wired to a real analytics backend later.
enum AuthAnalytics {

    // MARK: - Event Types

    enum Event: String {
        // Apple
        case appleStarted = "auth_apple_started"
        case appleSheetPresented = "auth_apple_sheet_presented"
        case appleSheetCancelled = "auth_apple_sheet_cancelled"
        case appleSucceeded = "auth_apple_succeeded"
        case appleFailed = "auth_apple_failed"

        // Google
        case googleStarted = "auth_google_started"
        case googlePickerPresented = "auth_google_picker_presented"
        case googlePickerCancelled = "auth_google_picker_cancelled"
        case googleSucceeded = "auth_google_succeeded"
        case googleFailed = "auth_google_failed"

        // OTP
        case otpRequested = "auth_otp_requested"
        case otpEntered = "auth_otp_entered"
        case otpSucceeded = "auth_otp_succeeded"
        case otpFailed = "auth_otp_failed"
        case otpResend = "auth_otp_resend"
        case otpMethodSwitch = "auth_otp_method_switch"

        // Skip auth
        case authSkipped = "auth_skipped"

        // Session lifecycle
        case forcedLogout = "auth_forced_logout"
        case sessionRestored = "session_restored"
        case sessionRestoreFailed = "session_restore_failed"
        case tokenRefreshSuccess = "token_refresh_success"
        case tokenRefreshFailed = "token_refresh_failed"

        // Security
        case integrityWarning = "security_integrity_warning"
    }

    // MARK: - Standard Context

    private static var standardContext: [String: String] {
        [
            "app_version": Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String ?? "unknown",
            "os_version": UIDevice.current.systemVersion,
            "device_model": deviceModel,
            "environment": EnvironmentConfig.current.environment.rawValue
        ]
    }

    private static var deviceModel: String {
        var systemInfo = utsname()
        uname(&systemInfo)
        return withUnsafePointer(to: &systemInfo.machine) {
            $0.withMemoryRebound(to: CChar.self, capacity: 1) {
                String(validatingCString: $0) ?? "unknown"
            }
        }
    }

    // MARK: - Track

    /// Fire-and-forget event tracking. Never blocks the auth flow.
    static func track(_ event: Event, properties: [String: String] = [:]) {
        var merged = standardContext
        for (key, value) in properties {
            merged[key] = value
        }

        // Fire-and-forget — analytics failures never block auth
        Log.info("[\(event.rawValue)] \(merged)")
    }
}

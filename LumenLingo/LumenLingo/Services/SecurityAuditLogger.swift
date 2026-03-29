import Foundation
import SwiftData
import SwiftUI
import UIKit

// MARK: - Security Event Model

@Model
final class SecurityEvent {
    var timestamp: Date
    var eventType: String
    var method: String?
    var deviceInfo: String
    var success: Bool
    var metadata: String?

    init(
        eventType: String,
        method: String? = nil,
        success: Bool = true,
        metadata: String? = nil
    ) {
        self.timestamp = Date()
        self.eventType = eventType
        self.method = method
        self.deviceInfo = Self.currentDeviceInfo()
        self.success = success
        self.metadata = metadata
    }

    private static func currentDeviceInfo() -> String {
        let device = UIDevice.current
        return "\(device.model), \(device.systemName) \(device.systemVersion)"
    }
}

// MARK: - Security Audit Logger

/// Logs security-relevant events to a local SwiftData store.
/// Events are pruned to 90 days on each app launch.
enum SecurityAuditLogger {

    // Known event types
    static let signIn = "sign_in"
    static let signInFailed = "sign_in_failed"
    static let signOut = "sign_out"
    static let forcedSignOut = "forced_sign_out"
    static let accountDeleted = "account_deleted"
    static let integrityWarning = "integrity_warning"
    static let tokenRefreshFailed = "token_refresh_failed"
    static let otpRateLimited = "otp_rate_limited"
    static let biometricSuccess = "biometric_success"
    static let biometricFailed = "biometric_failed"

    /// Log a security event.
    @MainActor
    static func log(
        _ eventType: String,
        method: String? = nil,
        success: Bool = true,
        metadata: String? = nil,
        in context: ModelContext
    ) {
        let event = SecurityEvent(
            eventType: eventType,
            method: method,
            success: success,
            metadata: metadata
        )
        context.insert(event)
    }

    /// Prune events older than 90 days.
    @MainActor
    static func pruneOldEvents(in context: ModelContext) {
        let cutoff = Calendar.current.date(byAdding: .day, value: -90, to: Date()) ?? Date()
        let predicate = #Predicate<SecurityEvent> { $0.timestamp < cutoff }
        let descriptor = FetchDescriptor<SecurityEvent>(predicate: predicate)

        do {
            let oldEvents = try context.fetch(descriptor)
            for event in oldEvents {
                context.delete(event)
            }
            if !oldEvents.isEmpty {
                Log.info("Pruned \(oldEvents.count) security events older than 90 days")
            }
        } catch {
            Log.error("Failed to prune security events: \(error.localizedDescription)")
        }
    }
}

// MARK: - Security Event Pruning View Modifier

/// Prunes security events older than 90 days on app launch, using the app's
/// existing SwiftData model context from the environment.
private struct SecurityEventPruningModifier: ViewModifier {
    @Environment(\.modelContext) private var modelContext

    func body(content: Content) -> some View {
        content
            .task {
                SecurityAuditLogger.pruneOldEvents(in: modelContext)
            }
    }
}

extension View {
    func pruneSecurityEvents() -> some View {
        modifier(SecurityEventPruningModifier())
    }
}

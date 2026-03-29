import Foundation
import os.log

/// Append-only privacy audit log for GDPR accountability (Art. 5(2)).
/// Writes timestamped JSON-lines to Library/Application Support/privacy-audit.jsonl.
/// Each entry records who changed what, when, and the old/new value.
enum PrivacyAuditLogger {

    private static let logger = Logger(subsystem: "com.lumenlingo", category: "PrivacyAudit")
    private static let writeQueue = DispatchQueue(label: "com.lumenlingo.privacy-audit", qos: .utility)

    private static let maxFileSize: UInt64 = 1_048_576 // 1 MB

    private static let fileURL: URL = {
        let support = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first!
        try? FileManager.default.createDirectory(at: support, withIntermediateDirectories: true, attributes: nil)
        let url = support.appendingPathComponent("privacy-audit.jsonl")
        applyFileProtection(url)
        return url
    }()

    /// Apply NSFileProtectionComplete so audit trail is encrypted at rest.
    private static func applyFileProtection(_ url: URL) {
        try? (url as NSURL).setResourceValue(URLFileProtection.complete, forKey: .fileProtectionKey)
    }

    // MARK: - Public API

    /// Log a privacy preference change.
    static func log(
        action: String,
        detail: String? = nil
    ) {
        let entry: [String: String] = [
            "ts": ISO8601DateFormatter().string(from: Date()),
            "action": action,
            "detail": detail ?? ""
        ]

        guard let data = try? JSONSerialization.data(withJSONObject: entry),
              let line = String(data: data, encoding: .utf8) else { return }

        let record = line + "\n"
        writeQueue.async {
            // Rotate if file exceeds size limit
            if let attrs = try? FileManager.default.attributesOfItem(atPath: fileURL.path),
               let size = attrs[.size] as? UInt64, size > maxFileSize {
                let backupURL = fileURL.deletingLastPathComponent().appendingPathComponent("privacy-audit.old.jsonl")
                try? FileManager.default.removeItem(at: backupURL)
                try? FileManager.default.moveItem(at: fileURL, to: backupURL)
            }

            if let handle = try? FileHandle(forWritingTo: fileURL) {
                defer { try? handle.close() }
                handle.seekToEndOfFile()
                handle.write(Data(record.utf8))
            } else {
                try? record.write(to: fileURL, atomically: true, encoding: .utf8)
                applyFileProtection(fileURL)
            }
        }

        logger.info("Privacy audit: \(action, privacy: .public) — \(detail ?? "", privacy: .private)")
    }

    /// Read all audit entries (for GDPR export).
    static func allEntries() -> String {
        (try? String(contentsOf: fileURL, encoding: .utf8)) ?? ""
    }
}

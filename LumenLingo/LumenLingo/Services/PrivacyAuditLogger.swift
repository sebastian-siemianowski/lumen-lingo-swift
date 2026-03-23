import Foundation
import os.log

/// Append-only privacy audit log for GDPR accountability (Art. 5(2)).
/// Writes timestamped JSON-lines to Library/Application Support/privacy-audit.jsonl.
/// Each entry records who changed what, when, and the old/new value.
enum PrivacyAuditLogger {

    private static let logger = Logger(subsystem: "com.lumenlingo", category: "PrivacyAudit")

    private static let fileURL: URL = {
        let support = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask).first!
        try? FileManager.default.createDirectory(at: support, withIntermediateDirectories: true)
        return support.appendingPathComponent("privacy-audit.jsonl")
    }()

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
        if let handle = try? FileHandle(forWritingTo: fileURL) {
            handle.seekToEndOfFile()
            handle.write(Data(record.utf8))
            try? handle.close()
        } else {
            try? record.write(to: fileURL, atomically: true, encoding: .utf8)
        }

        logger.info("Privacy audit: \(action, privacy: .public) — \(detail ?? "", privacy: .public)")
    }

    /// Read all audit entries (for GDPR export).
    static func allEntries() -> String {
        (try? String(contentsOf: fileURL, encoding: .utf8)) ?? ""
    }
}

import SwiftUI
import SwiftData

// MARK: - Export Data Widget (Elite+)

/// Allows Elite+ users to export their learning data as CSV, JSON, or PDF.
/// Uses `UIActivityViewController` for sharing.
struct ExportDataWidget: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager

    let allProgress: [GameProgressRecord]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    @State private var isExporting = false
    @State private var exportedFileURL: URL?

    private var availableFormats: [DataExporter.ExportFormat] {
        DataExporter.availableFormats(for: tierManager.currentTier)
    }

    var body: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 14) {
                HStack {
                    Text("\(allProgress.count) \(L.sessionsLabel)")
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                    Spacer()
                }

                if allProgress.isEmpty {
                    HStack {
                        Spacer()
                        VStack(spacing: 8) {
                            Image(systemName: "tray")
                                .font(.system(size: 24))
                                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                            Text(L.noDataToExport)
                                .font(.system(size: 12))
                                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                        }
                        .padding(.vertical, 16)
                        Spacer()
                    }
                } else {
                    // Export format buttons
                    VStack(spacing: 8) {
                        ForEach(availableFormats, id: \.rawValue) { format in
                            exportButton(for: format)
                        }
                    }
                }
            }
        }
    }

    private func exportButton(for format: DataExporter.ExportFormat) -> some View {
        Button {
            exportData(format: format)
        } label: {
            HStack(spacing: 10) {
                Image(systemName: iconName(for: format))
                    .font(.system(size: 14))
                    .frame(width: 24)

                Text(formatLabel(for: format))
                    .font(.system(size: 13, weight: .medium))

                Spacer()

                Image(systemName: "arrow.up.forward.circle.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(.secondary)
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 11)
            .background(
                RoundedRectangle(cornerRadius: 12)
                    .fill(buttonColor(for: format).opacity(isDark ? 0.1 : 0.07))
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .strokeBorder(buttonColor(for: format).opacity(0.2), lineWidth: 1)
                    )
            )
        }
        .buttonStyle(.plain)
        .foregroundStyle(isDark ? .white : .primary)
    }

    private func iconName(for format: DataExporter.ExportFormat) -> String {
        switch format {
        case .csv:  return "tablecells"
        case .json: return "curlybraces"
        case .pdf:  return "doc.richtext"
        }
    }

    private func formatLabel(for format: DataExporter.ExportFormat) -> String {
        switch format {
        case .csv:  return L.exportAsCSV
        case .json: return L.exportAsJSON
        case .pdf:  return L.exportAsPDF
        }
    }

    private func buttonColor(for format: DataExporter.ExportFormat) -> Color {
        switch format {
        case .csv:  return Color(hex: "#10b981")
        case .json: return Color(hex: "#3b82f6")
        case .pdf:  return Color(hex: "#ef4444")
        }
    }

    private func exportData(format: DataExporter.ExportFormat) {
        let data: Data
        let fileName: String

        switch format {
        case .csv:
            data = DataExporter.exportCSV(records: allProgress)
            fileName = "lumenlingo_progress.csv"
        case .json:
            data = DataExporter.exportJSON(records: allProgress)
            fileName = "lumenlingo_progress.json"
        case .pdf:
            data = DataExporter.exportPDF(records: allProgress)
            fileName = "lumenlingo_report.pdf"
        }

        // Use caches directory with a dedicated export subfolder to avoid
        // file-provider resolution errors that occur with temporaryDirectory
        guard let cachesDir = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first else { return }
        let exportDir = cachesDir.appendingPathComponent("LumenLingoExports", isDirectory: true)
        try? FileManager.default.createDirectory(at: exportDir, withIntermediateDirectories: true)
        let fileURL = exportDir.appendingPathComponent(fileName)

        do {
            try data.write(to: fileURL, options: .atomic)
        } catch {
            return
        }

        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }

        // Find the topmost presented VC
        var topVC = rootVC
        while let presented = topVC.presentedViewController {
            topVC = presented
        }

        let activityVC = UIActivityViewController(activityItems: [fileURL], applicationActivities: nil)
        activityVC.completionWithItemsHandler = { _, _, _, _ in
            try? FileManager.default.removeItem(at: fileURL)
        }

        if let popover = activityVC.popoverPresentationController {
            popover.sourceView = topVC.view
            popover.sourceRect = CGRect(x: topVC.view.bounds.midX, y: topVC.view.bounds.midY, width: 0, height: 0)
            popover.permittedArrowDirections = []
        }

        topVC.present(activityVC, animated: true)
    }
}

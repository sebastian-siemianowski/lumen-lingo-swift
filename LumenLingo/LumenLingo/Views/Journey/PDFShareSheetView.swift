import SwiftUI
import PDFKit
import UniformTypeIdentifiers

// MARK: - PDF Share Sheet (Story 5)

/// Branded half-height share sheet with quick actions and PDF header info.
/// Precedes the system UIActivityViewController for streamlined sharing.
struct PDFShareSheetView: View {
    let pdfData: Data
    let document: PDFDocument
    let tierColors: [Color]
    let onSaveSuccess: () -> Void
    let onPrintSuccess: () -> Void
    let onShareComplete: () -> Void
    @Binding var isPresented: Bool

    @Environment(\.colorScheme) private var colorScheme
    @State private var showDocumentPicker = false
    @State private var showActivitySheet = false

    private var isDark: Bool { colorScheme == .dark }

    private var fileSizeString: String {
        ByteCountFormatter.string(fromByteCount: Int64(pdfData.count), countStyle: .file)
    }

    private var generationDate: String {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none
        return formatter.string(from: Date())
    }

    var body: some View {
        VStack(spacing: 0) {
            // Tier accent line
            LinearGradient(colors: tierColors, startPoint: .leading, endPoint: .trailing)
                .frame(height: 2)

            VStack(spacing: 20) {
                // Header: thumbnail + file info
                headerSection
                    .padding(.top, 20)

                // Quick actions
                HStack(spacing: 16) {
                    quickAction(icon: "folder.badge.plus", label: "Save") {
                        PDFHapticService.shared.buttonTap()
                        showDocumentPicker = true
                    }

                    quickAction(icon: "antenna.radiowaves.left.and.right", label: "AirDrop") {
                        PDFHapticService.shared.buttonTap()
                        shareViaAirDrop()
                    }

                    quickAction(icon: "printer", label: "Print") {
                        PDFHapticService.shared.buttonTap()
                        printPDF()
                    }
                }
                .padding(.horizontal, 24)

                // More Options
                Button {
                    PDFHapticService.shared.buttonTap()
                    showActivitySheet = true
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "ellipsis.circle")
                            .font(.system(size: 14))
                        Text("More Options…")
                            .font(.system(size: 14, weight: .medium))
                    }
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .background(
                        RoundedRectangle(cornerRadius: 12)
                            .fill(isDark ? Color.white.opacity(0.04) : Color.black.opacity(0.03))
                    )
                }
                .padding(.horizontal, 24)

                Spacer()
            }
        }
        .background(.ultraThinMaterial)
        .presentationDetents([.medium])
        .presentationDragIndicator(.visible)
        .sheet(isPresented: $showDocumentPicker) {
            DocumentExportPicker(pdfData: pdfData) { success in
                if success {
                    isPresented = false
                    onSaveSuccess()
                }
            }
        }
        .sheet(isPresented: $showActivitySheet) {
            ActivityViewWrapper(items: [writeTempFile()]) { success in
                if success {
                    isPresented = false
                    onShareComplete()
                }
            }
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        HStack(spacing: 12) {
            // Page 1 thumbnail
            if let page = document.page(at: 0) {
                Image(uiImage: page.thumbnail(of: CGSize(width: 104, height: 134), for: .mediaBox))
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 52, height: 67)
                    .clipShape(RoundedRectangle(cornerRadius: 6))
                    .overlay(
                        RoundedRectangle(cornerRadius: 6)
                            .strokeBorder(isDark ? Color.white.opacity(0.1) : Color.black.opacity(0.08), lineWidth: 1)
                    )
            }

            VStack(alignment: .leading, spacing: 3) {
                Text("LumenLingo Report")
                    .font(.system(size: 15, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white : .primary)

                Text(fileSizeString)
                    .font(.system(size: 12, weight: .regular))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)

                Text(generationDate)
                    .font(.system(size: 11, weight: .regular))
                    .foregroundStyle(isDark ? .white.opacity(0.35) : .secondary.opacity(0.6))
            }

            Spacer()
        }
        .padding(.horizontal, 24)
    }

    // MARK: - Quick Action Button

    private func quickAction(icon: String, label: String, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            VStack(spacing: 8) {
                ZStack {
                    Circle()
                        .fill(.ultraThinMaterial)
                        .frame(width: 44, height: 44)

                    Image(systemName: icon)
                        .font(.system(size: 18, weight: .medium))
                        .foregroundStyle(
                            LinearGradient(colors: tierColors, startPoint: .topLeading, endPoint: .bottomTrailing)
                        )
                }

                Text(label)
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .primary)
            }
            .frame(width: 96)
        }
        .accessibilityLabel(label)
    }

    // MARK: - Actions

    private func shareViaAirDrop() {
        let url = writeTempFile()
        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }
        var topVC = rootVC
        while let presented = topVC.presentedViewController { topVC = presented }

        let activityVC = UIActivityViewController(activityItems: [url], applicationActivities: nil)
        // Show only AirDrop by excluding nothing — system will show AirDrop prominent
        activityVC.excludedActivityTypes = [
            .addToReadingList, .assignToContact, .copyToPasteboard, .mail,
            .message, .postToFacebook, .postToFlickr, .postToTencentWeibo,
            .postToTwitter, .postToVimeo, .postToWeibo, .print, .saveToCameraRoll,
            .markupAsPDF, .openInIBooks
        ]
        activityVC.completionWithItemsHandler = { _, completed, _, _ in
            try? FileManager.default.removeItem(at: url)
            if completed {
                isPresented = false
                DispatchQueue.main.async { onShareComplete() }
            }
        }
        if let popover = activityVC.popoverPresentationController {
            popover.sourceView = topVC.view
            popover.sourceRect = CGRect(x: topVC.view.bounds.midX, y: topVC.view.bounds.midY, width: 0, height: 0)
            popover.permittedArrowDirections = []
        }
        topVC.present(activityVC, animated: true)
    }

    private func printPDF() {
        let printController = UIPrintInteractionController.shared
        let printInfo = UIPrintInfo.printInfo()
        printInfo.outputType = .general
        printInfo.jobName = "LumenLingo Report"
        printController.printInfo = printInfo
        printController.printingItem = pdfData
        printController.present(animated: true) { _, completed, _ in
            if completed {
                isPresented = false
                DispatchQueue.main.async { onPrintSuccess() }
            }
        }
    }

    private func writeTempFile() -> URL {
        let dir = FileManager.default.temporaryDirectory
        let fileName = PDFFileNamer.generateFileName()
        let url = dir.appendingPathComponent(fileName)
        try? pdfData.write(to: url, options: .atomic)
        return url
    }
}

// MARK: - Document Export Picker

/// UIDocumentPickerViewController wrapper for saving PDF to Files.
struct DocumentExportPicker: UIViewControllerRepresentable {
    let pdfData: Data
    let onCompletion: (Bool) -> Void

    func makeCoordinator() -> Coordinator { Coordinator(onCompletion: onCompletion) }

    func makeUIViewController(context: Context) -> UIDocumentPickerViewController {
        let dir = FileManager.default.temporaryDirectory
        let fileName = PDFFileNamer.generateFileName()
        let url = dir.appendingPathComponent(fileName)
        try? pdfData.write(to: url, options: .atomic)

        let picker = UIDocumentPickerViewController(forExporting: [url], asCopy: true)
        picker.delegate = context.coordinator
        return picker
    }

    func updateUIViewController(_ uiViewController: UIDocumentPickerViewController, context: Context) {}

    final class Coordinator: NSObject, UIDocumentPickerDelegate {
        let onCompletion: (Bool) -> Void
        init(onCompletion: @escaping (Bool) -> Void) { self.onCompletion = onCompletion }

        func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
            onCompletion(true)
        }
        func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {
            onCompletion(false)
        }
    }
}

// MARK: - Activity View Wrapper

struct ActivityViewWrapper: UIViewControllerRepresentable {
    let items: [Any]
    let onCompletion: (Bool) -> Void

    func makeUIViewController(context: Context) -> UIActivityViewController {
        let vc = UIActivityViewController(activityItems: items, applicationActivities: nil)
        vc.completionWithItemsHandler = { _, completed, _, _ in
            onCompletion(completed)
        }
        return vc
    }
    func updateUIViewController(_ uiViewController: UIActivityViewController, context: Context) {}
}

// MARK: - Smart File Naming (Story 7)

enum PDFFileNamer {
    static func generateFileName(date: Date = Date()) -> String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "en_US")
        formatter.dateFormat = "MMMM yyyy"
        let monthYear = formatter.string(from: date)
        return "LumenLingo Report — \(monthYear).pdf"
    }
}

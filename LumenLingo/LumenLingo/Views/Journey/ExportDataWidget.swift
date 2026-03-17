import SwiftUI
import SwiftData
import PDFKit

// MARK: - Export Data Widget (Elite+)

/// Premium export panel with glassmorphic format cards, PDF preview,
/// achievement card sharing, and per-card loading states.
struct ExportDataWidget: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager

    let allProgress: [GameProgressRecord]
    var profile: UserProfile? = nil

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    @State private var exportingFormat: DataExporter.ExportFormat?
    @State private var completedFormat: DataExporter.ExportFormat?
    @State private var showPDFPreview = false
    @State private var previewPDFData: Data?
    @State private var cachedPDFData: Data?
    @State private var showAchievementShare = false

    private var allFormats: [DataExporter.ExportFormat] { DataExporter.ExportFormat.allCases }
    private var availableFormats: [DataExporter.ExportFormat] {
        DataExporter.availableFormats(for: tierManager.currentTier)
    }

    private var isPDFAvailable: Bool {
        availableFormats.contains(.pdf)
    }

    var body: some View {
        GlassPanelWrapper {
            VStack(spacing: 14) {
                // Section header
                HStack {
                    Text("\(allProgress.count) \(L.sessionsLabel)")
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                    Spacer()
                }

                if allProgress.isEmpty {
                    emptyState
                } else {
                    VStack(spacing: 10) {
                        // Hero: PDF card, full width
                        pdfHeroCard

                        // Secondary row: CSV + JSON
                        HStack(spacing: 10) {
                            exportFormatCard(for: .csv)
                            exportFormatCard(for: .json)
                        }

                        // CTA: Achievement card
                        achievementCardBar
                    }
                }
            }
        }
        .fullScreenCover(isPresented: $showPDFPreview) {
            PDFPreviewView(
                pdfData: previewPDFData,
                tierColors: tierManager.currentTier.gradientColors,
                tier: tierManager.currentTier,
                onDismiss: { showPDFPreview = false },
                userName: profile?.firstName ?? "",
                allProgress: allProgress
            )
        }
    }

    // MARK: - PDF Hero Card (Story 10)

    private var pdfHeroCard: some View {
        let isExporting = exportingFormat == .pdf
        let hasCached = cachedPDFData != nil

        return Button {
            guard isPDFAvailable, !isExporting else { return }
            if hasCached {
                previewPDFData = cachedPDFData
                showPDFPreview = true
            } else {
                startPDFPreview()
            }
        } label: {
            HStack(spacing: 12) {
                // Thumbnail / placeholder
                ZStack {
                    if isExporting {
                        RoundedRectangle(cornerRadius: 6)
                            .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04))
                            .frame(width: 48, height: 62)
                            .overlay(
                                ProgressView()
                                    .scaleEffect(0.6)
                                    .tint(Color(hex: "#f97316"))
                            )
                    } else if let data = cachedPDFData, let doc = PDFDocument(data: data),
                              let page = doc.page(at: 0) {
                        Image(uiImage: page.thumbnail(of: CGSize(width: 96, height: 124), for: .mediaBox))
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                            .frame(width: 48, height: 62)
                            .clipShape(RoundedRectangle(cornerRadius: 6))
                            .overlay(
                                RoundedRectangle(cornerRadius: 6)
                                    .strokeBorder(isDark ? Color.white.opacity(0.1) : Color.black.opacity(0.06), lineWidth: 0.5)
                            )
                    } else {
                        RoundedRectangle(cornerRadius: 6)
                            .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04))
                            .frame(width: 48, height: 62)
                            .overlay(
                                Image(systemName: "doc.richtext")
                                    .font(.system(size: 20))
                                    .foregroundStyle(
                                        LinearGradient(
                                            colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                        )
                                    )
                            )
                    }
                }

                VStack(alignment: .leading, spacing: 4) {
                    HStack(spacing: 5) {
                        Text("PDF Report")
                            .font(.system(size: 16, weight: .bold, design: .rounded))
                            .foregroundStyle(isDark ? .white : .primary)

                        // Inline premium badge
                        HStack(spacing: 2) {
                            Image(systemName: "sparkles")
                                .font(.system(size: 6, weight: .bold))
                            Text("Premium")
                                .font(.system(size: 7, weight: .bold))
                        }
                        .foregroundStyle(.white)
                        .padding(.horizontal, 5)
                        .padding(.vertical, 2)
                        .background(
                            Capsule()
                                .fill(LinearGradient(
                                    colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                                    startPoint: .leading, endPoint: .trailing
                                ))
                        )
                    }

                    Text("Branded report with charts, stats & insights")
                        .font(.system(size: 11))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                        .lineLimit(2)

                    Spacer().frame(height: 4)

                    // CTA pill
                    Text(hasCached ? "View Report" : "Generate Report")
                        .font(.system(size: 13, weight: .semibold, design: .rounded))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 14)
                        .padding(.vertical, 6)
                        .background(
                            Capsule()
                                .fill(LinearGradient(
                                    colors: tierManager.currentTier.gradientColors,
                                    startPoint: .leading, endPoint: .trailing
                                ))
                        )
                }

                Spacer()
            }
            .padding(14)
            .frame(maxWidth: .infinity, minHeight: 100)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.02))
                    .overlay(
                        // Tier gradient tint
                        RoundedRectangle(cornerRadius: 14)
                            .fill(
                                LinearGradient(
                                    colors: tierManager.currentTier.gradientColors.map { $0.opacity(0.04) },
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(
                                LinearGradient(
                                    colors: [Color(hex: "#fbbf24").opacity(0.5), Color(hex: "#f97316").opacity(0.3)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 1.2
                            )
                    )
            )
            .overlay {
                if !isPDFAvailable {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(isDark ? .black.opacity(0.5) : .white.opacity(0.6))
                        .overlay {
                            VStack(spacing: 4) {
                                Image(systemName: "lock.fill")
                                    .font(.system(size: 20))
                                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                                Text("Royal")
                                    .font(.system(size: 9, weight: .bold))
                                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                            }
                        }
                }
            }
        }
        .buttonStyle(LumenPressStyle())
        .disabled(!isPDFAvailable)
    }

    // MARK: - Achievement Card Bar (Story 10)

    private var achievementCardBar: some View {
        Button {
            shareAchievementCard()
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "camera.filters")
                    .font(.system(size: 16))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tierManager.currentTier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                Text("Share Achievement Card")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .primary)

                Spacer()

                Image(systemName: "arrow.right")
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
            }
            .padding(.horizontal, 14)
            .frame(maxWidth: .infinity, minHeight: 44)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.02))
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(
                                LinearGradient(
                                    colors: tierManager.currentTier.gradientColors.map { $0.opacity(isDark ? 0.15 : 0.1) },
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 0.8
                            )
                    )
            )
        }
        .buttonStyle(LumenPressStyle())
    }

    // MARK: - Empty State

    private var emptyState: some View {
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
    }

    // MARK: - Format Card

    private func exportFormatCard(for format: DataExporter.ExportFormat) -> some View {
        let isAvailable = availableFormats.contains(format)
        let isExporting = exportingFormat == format
        let isCompleted = completedFormat == format

        return Button {
            guard isAvailable, !isExporting else { return }
            if format == .pdf {
                startPDFPreview()
            } else {
                exportData(format: format)
            }
        } label: {
            VStack(spacing: 8) {
                ZStack {
                    if isExporting {
                        ProgressView()
                            .scaleEffect(0.8)
                            .tint(cardColor(for: format))
                    } else if isCompleted {
                        Image(systemName: "checkmark.circle.fill")
                            .font(.system(size: 28))
                            .foregroundStyle(Color(hex: "#10b981"))
                            .transition(.scale.combined(with: .opacity))
                    } else {
                        Image(systemName: iconName(for: format))
                            .font(.system(size: 28))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: gradientColors(for: format),
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }
                }
                .frame(height: 32)

                Text(formatName(for: format))
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)

                Text(formatDescription(for: format))
                    .font(.system(size: 10, weight: .regular))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                    .multilineTextAlignment(.center)
                    .lineLimit(2)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .padding(.horizontal, 8)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.02))
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(
                                format == .pdf
                                    ? LinearGradient(
                                        colors: [Color(hex: "#fbbf24").opacity(0.5), Color(hex: "#f97316").opacity(0.3)],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                    : LinearGradient(
                                        colors: [cardColor(for: format).opacity(isDark ? 0.2 : 0.15), cardColor(for: format).opacity(0.08)],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    ),
                                lineWidth: format == .pdf ? 1.2 : 0.8
                            )
                    )
            )
            .overlay(alignment: .topTrailing) {
                // Premium badge for PDF
                if format == .pdf {
                    HStack(spacing: 2) {
                        Image(systemName: "sparkles")
                            .font(.system(size: 7, weight: .bold))
                        Text("Premium")
                            .font(.system(size: 7, weight: .bold))
                    }
                    .foregroundStyle(.white)
                    .padding(.horizontal, 6)
                    .padding(.vertical, 3)
                    .background(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    )
                    .offset(x: -4, y: 4)
                }
            }
            .overlay {
                // Lock overlay for tier-gated formats
                if !isAvailable {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(isDark ? .black.opacity(0.5) : .white.opacity(0.6))
                        .overlay {
                            VStack(spacing: 4) {
                                Image(systemName: "lock.fill")
                                    .font(.system(size: 16))
                                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                                Text(requiredTierName(for: format))
                                    .font(.system(size: 9, weight: .bold))
                                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                            }
                        }
                }
            }
        }
        .buttonStyle(LumenPressStyle())
        .disabled(!isAvailable)
        .animation(.spring(response: 0.35, dampingFraction: 0.7), value: isCompleted)
    }

    // MARK: - Achievement Card Button

    private var achievementCardButton: some View {
        Button {
            shareAchievementCard()
        } label: {
            VStack(spacing: 8) {
                Image(systemName: "camera.filters")
                    .font(.system(size: 28))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tierManager.currentTier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(height: 32)

                Text("Share Stats")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)

                Text("Achievement card")
                    .font(.system(size: 10, weight: .regular))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                    .multilineTextAlignment(.center)
                    .lineLimit(2)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .padding(.horizontal, 8)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.02))
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(
                                LinearGradient(
                                    colors: tierManager.currentTier.gradientColors.map { $0.opacity(isDark ? 0.2 : 0.15) },
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 0.8
                            )
                    )
            )
        }
        .buttonStyle(LumenPressStyle())
    }

    // MARK: - Card Helpers

    private func iconName(for format: DataExporter.ExportFormat) -> String {
        switch format {
        case .csv:  return "tablecells"
        case .json: return "curlybraces"
        case .pdf:  return "doc.richtext"
        }
    }

    private func formatName(for format: DataExporter.ExportFormat) -> String {
        switch format {
        case .csv:  return "CSV"
        case .json: return "JSON"
        case .pdf:  return "PDF"
        }
    }

    private func formatDescription(for format: DataExporter.ExportFormat) -> String {
        switch format {
        case .csv:  return "Spreadsheet data"
        case .json: return "Developer format"
        case .pdf:  return "Branded report"
        }
    }

    private func cardColor(for format: DataExporter.ExportFormat) -> Color {
        switch format {
        case .csv:  return Color(hex: "#10b981")
        case .json: return Color(hex: "#3b82f6")
        case .pdf:  return Color(hex: "#f97316")
        }
    }

    private func gradientColors(for format: DataExporter.ExportFormat) -> [Color] {
        switch format {
        case .csv:  return [Color(hex: "#10b981"), Color(hex: "#06b6d4")]
        case .json: return [Color(hex: "#3b82f6"), Color(hex: "#6366f1")]
        case .pdf:  return [Color(hex: "#fbbf24"), Color(hex: "#f97316")]
        }
    }

    private func requiredTierName(for format: DataExporter.ExportFormat) -> String {
        switch format {
        case .csv:  return "Elite"
        case .json, .pdf: return "Royal"
        }
    }

    // MARK: - Export Actions

    private func startPDFPreview() {
        exportingFormat = .pdf
        showPDFPreview = true
        Task.detached(priority: .userInitiated) {
            let userName = await MainActor.run { profile?.firstName ?? "" }
            let tier = await MainActor.run { tierManager.currentTier }
            let isDark = await MainActor.run { self.isDark }
            let records = await MainActor.run { allProgress }
            let data = DataExporter.exportPDF(
                records: records,
                userName: userName,
                tier: tier,
                isDarkMode: isDark
            )
            await MainActor.run {
                previewPDFData = data
                cachedPDFData = data
                exportingFormat = nil
            }
        }
    }

    private func exportData(format: DataExporter.ExportFormat) {
        exportingFormat = format
        Task.detached(priority: .userInitiated) {
            let records = await MainActor.run { allProgress }
            let data: Data
            let fileName: String

            switch format {
            case .csv:
                data = DataExporter.exportCSV(records: records)
                fileName = "lumenlingo_progress.csv"
            case .json:
                data = DataExporter.exportJSON(records: records)
                fileName = "lumenlingo_progress.json"
            case .pdf:
                let userName = await MainActor.run { profile?.firstName ?? "" }
                let tier = await MainActor.run { tierManager.currentTier }
                let isDark = await MainActor.run { self.isDark }
                data = DataExporter.exportPDF(records: records, userName: userName, tier: tier, isDarkMode: isDark)
                fileName = "lumenlingo_report.pdf"
            }

            await MainActor.run {
                exportingFormat = nil
                completedFormat = format
                shareFile(data: data, fileName: fileName)

                // Reset checkmark after delay
                DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                    withAnimation { completedFormat = nil }
                }
            }
        }
    }

    private func shareAchievementCard() {
        let totalXP = allProgress.reduce(0) { $0 + $1.score }
        let totalCorrect = allProgress.reduce(0) { $0 + $1.correctAnswers }
        let totalQuestions = allProgress.reduce(0) { $0 + $1.totalQuestions }
        let accuracy = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0

        let cardView = SharableAchievementCard(
            userName: profile?.firstName ?? "",
            totalXP: totalXP,
            sessionCount: allProgress.count,
            accuracy: accuracy,
            streak: profile?.dailyStreak ?? 0,
            tier: tierManager.currentTier
        )

        let renderer = ImageRenderer(content: cardView)
        renderer.scale = 3 // @3x for high quality
        guard let image = renderer.uiImage else { return }
        guard let data = image.pngData() else { return }
        shareFile(data: data, fileName: "lumenlingo_achievement.png")
    }

    @MainActor
    private func shareFile(data: Data, fileName: String) {
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

// MARK: - PDF Preview View (Stories 2, 3, 7, 8)

/// Luxury full-screen PDF preview with cinematic reveal, floating frost toolbar,
/// page thumbnails, branded share sheet, theme toggle, direct save, and success celebrations.
struct PDFPreviewView: View {
    let pdfData: Data?
    let tierColors: [Color]
    let tier: MembershipTier
    let onDismiss: () -> Void

    // For theme toggle regeneration
    var userName: String = ""
    var allProgress: [GameProgressRecord] = []

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { previewIsDark ?? (colorScheme == .dark) }

    // MARK: - State

    @State private var document: PDFDocument?
    @State private var activePDFData: Data?

    // Reveal animation
    @State private var revealPhase: RevealPhase = .loading
    @State private var documentScale: CGFloat = 0.92
    @State private var documentOpacity: CGFloat = 0
    @State private var glowOpacity: CGFloat = 0

    // Chrome
    @State private var showToolbar = true
    @State private var toolbarHideTask: Task<Void, Never>?
    @State private var showPageIndicator = false
    @State private var pageIndicatorHideTask: Task<Void, Never>?
    @State private var currentPageIndex = 0
    @State private var totalPages = 1

    // Thumbnail rail
    @State private var showThumbnailRail = false

    // Share
    @State private var showShareSheet = false

    // Save
    @State private var showDocumentPicker = false

    // Success overlay
    @State private var showSuccess = false
    @State private var successAction: PDFSuccessAction = .saved

    // Theme toggle
    @State private var previewIsDark: Bool?
    @State private var isRegenerating = false

    // Page change observation
    @State private var pdfViewRef: PDFView?

    private var pageCount: Int { document?.pageCount ?? 1 }
    private var isMultiPage: Bool { pageCount > 1 }

    enum RevealPhase {
        case loading, revealing, ready
    }

    var body: some View {
        ZStack {
            // Layer 0: Tier gradient mesh background
            backgroundLayer
                .ignoresSafeArea()

            // Layer 1: Content
            if revealPhase == .loading {
                PDFGeneratingView(tierColors: tierColors)
                    .transition(.opacity)
            } else {
                documentLayer
            }

            // Layer 2: Floating toolbar + page indicator
            if revealPhase == .ready {
                chromeOverlay
            }

            // Layer 3: Thumbnail rail
            if showThumbnailRail, let doc = document {
                VStack {
                    Spacer()
                    PDFThumbnailRailView(
                        document: doc,
                        currentPageIndex: currentPageIndex,
                        tierColors: tierColors,
                        onPageTap: { index in goToPage(index) },
                        onDismiss: { withAnimation(.spring(response: 0.3)) { showThumbnailRail = false } }
                    )
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .padding(.bottom, 8)
                    .padding(.horizontal, 8)
                }
            }

            // Layer 4: Success overlay
            if showSuccess {
                PDFSuccessOverlayView(
                    action: successAction,
                    tierColors: tierColors,
                    onDismiss: {
                        showSuccess = false
                        resetToolbarTimer()
                    }
                )
                .transition(.opacity)
            }
        }
        .statusBarHidden(revealPhase == .ready && !showToolbar)
        .onAppear { handleDataArrival() }
        .onChange(of: pdfData) { _, _ in handleDataArrival() }
        .sheet(isPresented: $showShareSheet) {
            if let data = activePDFData, let doc = document {
                PDFShareSheetView(
                    pdfData: data,
                    document: doc,
                    tierColors: tierColors,
                    onSaveSuccess: { showSuccessOverlay(.saved) },
                    onPrintSuccess: { showSuccessOverlay(.printed) },
                    onShareComplete: { showSuccessOverlay(.shared) },
                    isPresented: $showShareSheet
                )
            }
        }
        .sheet(isPresented: $showDocumentPicker) {
            if let data = activePDFData {
                DocumentExportPicker(pdfData: data) { success in
                    if success { showSuccessOverlay(.saved) }
                }
            }
        }
    }

    // MARK: - Background Layer

    private var backgroundLayer: some View {
        ZStack {
            (isDark ? Color.black : Color(UIColor.systemGroupedBackground))

            // Tier gradient mesh
            LinearGradient(
                colors: tierColors.map { $0.opacity(isDark ? 0.12 : 0.08) },
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            // Radial glow
            RadialGradient(
                colors: [tierColors.first?.opacity(isDark ? 0.08 : 0.05) ?? .clear, .clear],
                center: .center,
                startRadius: 50,
                endRadius: 400
            )
        }
    }

    // MARK: - Document Layer

    private var documentLayer: some View {
        ZStack {
            if let doc = document {
                PDFKitView(document: doc, onPageChange: onPageChanged, pdfViewRef: $pdfViewRef)
                    .padding(16)
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .strokeBorder(
                                LinearGradient(colors: tierColors, startPoint: .topLeading, endPoint: .bottomTrailing),
                                lineWidth: 1
                            )
                            .padding(16)
                    )
                    .shadow(color: tierColors.first?.opacity(isDark ? 0.15 : 0.08) ?? .clear, radius: 20, y: 4)
                    .scaleEffect(documentScale)
                    .opacity(documentOpacity)

                // Glow pulse on reveal
                if glowOpacity > 0 {
                    RoundedRectangle(cornerRadius: 8)
                        .fill(.clear)
                        .overlay(
                            RoundedRectangle(cornerRadius: 8)
                                .stroke(
                                    LinearGradient(colors: tierColors, startPoint: .topLeading, endPoint: .bottomTrailing),
                                    lineWidth: 2
                                )
                                .blur(radius: 8)
                        )
                        .padding(16)
                        .opacity(glowOpacity)
                }
            }
        }
        .onTapGesture { toggleToolbar() }
    }

    // MARK: - Chrome Overlay

    private var chromeOverlay: some View {
        ZStack {
            // Top toolbar
            if showToolbar {
                VStack {
                    floatingToolbar
                        .transition(.move(edge: .top).combined(with: .opacity))
                    Spacer()
                }
            }

            // Bottom page indicator
            if showPageIndicator && !showThumbnailRail {
                VStack {
                    Spacer()
                    pageIndicatorCapsule
                        .transition(.opacity)
                        .padding(.bottom, showThumbnailRail ? 88 : 16)
                }
            }

            // Regenerating label
            if isRegenerating {
                VStack {
                    Spacer().frame(height: 72)
                    Text("Regenerating…")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                        .transition(.opacity)
                    Spacer()
                }
            }
        }
        .animation(.easeInOut(duration: 0.25), value: showToolbar)
        .animation(.easeInOut(duration: 0.2), value: showPageIndicator)
        .animation(.easeInOut(duration: 0.2), value: isRegenerating)
    }

    // MARK: - Floating Toolbar

    private var floatingToolbar: some View {
        HStack(spacing: 12) {
            // Close
            frostedButton(icon: "xmark") {
                PDFHapticService.shared.buttonTap()
                onDismiss()
            }
            .accessibilityLabel("Close")
            .accessibilityHint("Dismiss the preview")

            // Pages (multi-page only)
            if isMultiPage {
                frostedButton(icon: "book") {
                    PDFHapticService.shared.buttonTap()
                    withAnimation(.spring(response: 0.3)) { showThumbnailRail.toggle() }
                }
                .accessibilityLabel("Pages")
                .accessibilityHint("Show page thumbnails")
            }

            Spacer()

            // Title
            Text("Learning Report")
                .font(.system(size: 13, weight: .semibold, design: .rounded))
                .tracking(0.5)
                .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)

            Spacer()

            // Save
            frostedButton(icon: "arrow.down.to.line") {
                PDFHapticService.shared.buttonTap()
                showDocumentPicker = true
            }
            .accessibilityLabel("Save")
            .accessibilityHint("Save report to Files")

            // Theme toggle
            frostedButton(icon: isDark ? "sun.max" : "moon.fill") {
                PDFHapticService.shared.buttonTap()
                toggleTheme()
            }
            .disabled(isRegenerating)
            .opacity(isRegenerating ? 0.5 : 1)
            .accessibilityLabel(isDark ? "Switch to light mode" : "Switch to dark mode")

            // Share
            frostedButton(icon: "arrow.up") {
                PDFHapticService.shared.sheetPresent()
                showShareSheet = true
            }
            .accessibilityLabel("Share")
            .accessibilityHint("Open share options")
        }
        .padding(.horizontal, 16)
        .padding(.top, 8)
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Report Actions")
    }

    private func frostedButton(icon: String, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Image(systemName: icon)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(isDark ? .white : .primary)
                .frame(width: 32, height: 32)
                .background(
                    Circle()
                        .fill(.ultraThinMaterial)
                        .shadow(color: .black.opacity(0.1), radius: 4, y: 2)
                )
        }
    }

    // MARK: - Page Indicator

    private var pageIndicatorCapsule: some View {
        Text("\(currentPageIndex + 1) of \(totalPages)")
            .font(.system(size: 11, weight: .medium, design: .rounded))
            .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
            .padding(.horizontal, 12)
            .padding(.vertical, 5)
            .background(
                Capsule().fill(.ultraThinMaterial)
            )
            .accessibilityLabel("Page \(currentPageIndex + 1) of \(totalPages)")
    }

    // MARK: - Data Handling & Reveal

    private func handleDataArrival() {
        guard let data = pdfData else { return }
        activePDFData = data
        guard let doc = PDFDocument(data: data) else { return }
        document = doc
        totalPages = doc.pageCount

        PDFHapticService.shared.prepare()

        // Begin reveal
        if revealPhase == .loading {
            startRevealAnimation()
        }
    }

    private func startRevealAnimation() {
        let reduceMotion = UIAccessibility.isReduceMotionEnabled

        withAnimation(.easeOut(duration: 0.2)) {
            revealPhase = .revealing
        }

        if reduceMotion {
            documentScale = 1.0
            documentOpacity = 1.0
            revealPhase = .ready
            showToolbar = true
            resetToolbarTimer()
            PDFHapticService.shared.documentReveal()
            return
        }

        // Phase 1: Fade in + scale up (0.5s)
        withAnimation(.spring(response: 0.5, dampingFraction: 0.8)) {
            documentScale = 1.0
            documentOpacity = 1.0
        }

        // Phase 2: Glow pulse (0.3s → 0.6s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            PDFHapticService.shared.documentReveal()
            withAnimation(.easeInOut(duration: 0.4)) {
                glowOpacity = 0.6
            }
        }

        // Phase 3: Fade glow + transition to ready
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.7) {
            withAnimation(.easeOut(duration: 0.4)) {
                glowOpacity = 0
            }
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
            withAnimation(.easeInOut(duration: 0.25)) {
                revealPhase = .ready
                showToolbar = true
            }
            resetToolbarTimer()
        }
    }

    // MARK: - Toolbar Auto-Hide

    private func resetToolbarTimer() {
        let reduceMotion = UIAccessibility.isReduceMotionEnabled
        toolbarHideTask?.cancel()
        guard !reduceMotion else { return } // Keep always visible for Reduce Motion

        toolbarHideTask = Task { @MainActor in
            try? await Task.sleep(for: .seconds(3))
            guard !Task.isCancelled else { return }
            withAnimation(.easeInOut(duration: 0.25)) { showToolbar = false }
        }
    }

    private func toggleToolbar() {
        withAnimation(.easeInOut(duration: 0.25)) { showToolbar.toggle() }
        if showToolbar { resetToolbarTimer() }
    }

    // MARK: - Page Changes

    private func onPageChanged(pageIndex: Int) {
        currentPageIndex = pageIndex
        PDFHapticService.shared.pageTurn()

        withAnimation { showPageIndicator = true }
        pageIndicatorHideTask?.cancel()
        pageIndicatorHideTask = Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            guard !Task.isCancelled else { return }
            withAnimation { showPageIndicator = false }
        }
    }

    private func goToPage(_ index: Int) {
        guard let doc = document, let page = doc.page(at: index) else { return }
        pdfViewRef?.go(to: page)
        currentPageIndex = index
    }

    // MARK: - Theme Toggle

    private func toggleTheme() {
        guard !isRegenerating else { return }
        let newIsDark = !isDark
        isRegenerating = true

        // Preserve current page
        let savedPage = currentPageIndex

        Task.detached(priority: .userInitiated) {
            let records = await MainActor.run { allProgress }
            let name = await MainActor.run { userName }
            let t = await MainActor.run { tier }
            let data = DataExporter.exportPDF(records: records, userName: name, tier: t, isDarkMode: newIsDark)

            await MainActor.run {
                previewIsDark = newIsDark
                activePDFData = data
                let newDoc = PDFDocument(data: data)
                withAnimation(.easeInOut(duration: 0.3)) {
                    document = newDoc
                    totalPages = newDoc?.pageCount ?? 1
                }
                isRegenerating = false

                // Restore page position
                if let doc = newDoc, savedPage < doc.pageCount {
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                        goToPage(savedPage)
                    }
                }
            }
        }
    }

    // MARK: - Success

    private func showSuccessOverlay(_ action: PDFSuccessAction) {
        successAction = action
        withAnimation(.easeOut(duration: 0.2)) {
            showSuccess = true
            showToolbar = true
        }
    }
}

// MARK: - PDFKitView

/// UIViewRepresentable wrapper for PDFKit.PDFView with page change observation.
struct PDFKitView: UIViewRepresentable {
    let document: PDFDocument
    var onPageChange: ((Int) -> Void)?
    @Binding var pdfViewRef: PDFView?

    init(document: PDFDocument, onPageChange: ((Int) -> Void)? = nil, pdfViewRef: Binding<PDFView?> = .constant(nil)) {
        self.document = document
        self.onPageChange = onPageChange
        self._pdfViewRef = pdfViewRef
    }

    func makeCoordinator() -> Coordinator { Coordinator(onPageChange: onPageChange) }

    func makeUIView(context: Context) -> PDFView {
        let pdfView = PDFView()
        pdfView.document = document
        pdfView.autoScales = true
        pdfView.displayMode = .singlePageContinuous
        pdfView.displayDirection = .vertical
        pdfView.backgroundColor = .clear

        context.coordinator.observe(pdfView: pdfView, document: document)

        DispatchQueue.main.async { pdfViewRef = pdfView }
        return pdfView
    }

    func updateUIView(_ pdfView: PDFView, context: Context) {
        if pdfView.document !== document {
            pdfView.document = document
            context.coordinator.observe(pdfView: pdfView, document: document)
        }
    }

    final class Coordinator: NSObject {
        var onPageChange: ((Int) -> Void)?
        private var observation: NSObjectProtocol?

        init(onPageChange: ((Int) -> Void)?) {
            self.onPageChange = onPageChange
        }

        func observe(pdfView: PDFView, document: PDFDocument) {
            if let old = observation { NotificationCenter.default.removeObserver(old) }
            observation = NotificationCenter.default.addObserver(
                forName: .PDFViewPageChanged,
                object: pdfView,
                queue: .main
            ) { [weak self] _ in
                guard let currentPage = pdfView.currentPage else { return }
                let index = document.index(for: currentPage)
                self?.onPageChange?(index)
            }
        }

        deinit {
            if let obs = observation { NotificationCenter.default.removeObserver(obs) }
        }
    }
}

// MARK: - Sharable Achievement Card (Story 4.4)

/// 1080×1080 SwiftUI view for social media sharing with tier gradient,
/// stats, and LumenLingo branding.
struct SharableAchievementCard: View {
    let userName: String
    let totalXP: Int
    let sessionCount: Int
    let accuracy: Double
    let streak: Int
    let tier: MembershipTier

    private let cardSize: CGFloat = 360 // Logical points, rendered @3x = 1080px

    var body: some View {
        ZStack {
            // Tier gradient background
            LinearGradient(
                colors: backgroundGradient,
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            // Subtle radial glow
            RadialGradient(
                colors: [.white.opacity(0.12), .clear],
                center: .center,
                startRadius: 20,
                endRadius: 200
            )

            // Content
            VStack(spacing: 0) {
                Spacer().frame(height: 40)

                // Logo
                Text("LumenLingo")
                    .font(.system(size: 16, weight: .black, design: .rounded))
                    .foregroundStyle(.white.opacity(0.7))
                    .tracking(2)

                Spacer().frame(height: 10)

                // Tier icon
                Image(systemName: tier.iconName)
                    .font(.system(size: 48, weight: .bold))
                    .foregroundStyle(.white)
                    .shadow(color: .black.opacity(0.3), radius: 10)

                Spacer().frame(height: 8)

                // User name or tier name
                if !userName.isEmpty {
                    Text(userName)
                        .font(.system(size: 22, weight: .bold, design: .rounded))
                        .foregroundStyle(.white)
                }

                // Tier badge
                Text(tier.displayName)
                    .font(.system(size: 12, weight: .bold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.8))
                    .tracking(1.5)
                    .textCase(.uppercase)
                    .padding(.top, 2)

                Spacer().frame(height: 24)

                // Stats grid
                HStack(spacing: 0) {
                    statPill(value: formatXP(totalXP), label: "Total XP")
                    divider
                    statPill(value: "\(sessionCount)", label: "Sessions")
                }
                .padding(.horizontal, 24)

                Spacer().frame(height: 12)

                HStack(spacing: 0) {
                    statPill(value: String(format: "%.0f%%", accuracy), label: "Accuracy")
                    divider
                    statPill(value: "\(streak)", label: "Day Streak")
                }
                .padding(.horizontal, 24)

                Spacer()

                // Footer branding
                HStack(spacing: 4) {
                    Image(systemName: "globe")
                        .font(.system(size: 9))
                    Text("lumenlingo.app")
                        .font(.system(size: 10, weight: .medium))
                }
                .foregroundStyle(.white.opacity(0.4))
                .padding(.bottom, 28)
            }
        }
        .frame(width: cardSize, height: cardSize)
        .clipShape(RoundedRectangle(cornerRadius: 0))
    }

    private var backgroundGradient: [Color] {
        let base = tier.gradientColors
        // Add deeper colors for richer background
        return [
            Color.black.opacity(0.3),
            base.first ?? .purple,
            base.last ?? .pink,
            Color.black.opacity(0.4)
        ]
    }

    private func statPill(value: String, label: String) -> some View {
        VStack(spacing: 3) {
            Text(value)
                .font(.system(size: 28, weight: .bold, design: .rounded))
                .foregroundStyle(.white)
                .minimumScaleFactor(0.6)
            Text(label)
                .font(.system(size: 10, weight: .medium))
                .foregroundStyle(.white.opacity(0.6))
                .textCase(.uppercase)
                .tracking(0.5)
        }
        .frame(maxWidth: .infinity)
    }

    private var divider: some View {
        Rectangle()
            .fill(.white.opacity(0.15))
            .frame(width: 1, height: 40)
    }

    private func formatXP(_ xp: Int) -> String {
        if xp >= 10000 { return String(format: "%.1fK", Double(xp) / 1000) }
        return "\(xp)"
    }
}

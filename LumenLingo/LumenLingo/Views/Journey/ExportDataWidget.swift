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
    @State private var showAchievementShare = false

    private var allFormats: [DataExporter.ExportFormat] { DataExporter.ExportFormat.allCases }
    private var availableFormats: [DataExporter.ExportFormat] {
        DataExporter.availableFormats(for: tierManager.currentTier)
    }

    var body: some View {
        GlassPanelWrapper {
            VStack(spacing: 14) {
                // Session count subtitle
                HStack {
                    Text("\(allProgress.count) \(L.sessionsLabel)")
                        .font(.system(size: 11, weight: .medium, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                    Spacer()
                }

                if allProgress.isEmpty {
                    emptyState
                } else {
                    // Format cards grid
                    LazyVGrid(columns: [
                        GridItem(.flexible(), spacing: 10),
                        GridItem(.flexible(), spacing: 10)
                    ], spacing: 10) {
                        ForEach(allFormats, id: \.rawValue) { format in
                            exportFormatCard(for: format)
                        }

                        // Achievement card button
                        achievementCardButton
                    }
                }
            }
        }
        .fullScreenCover(isPresented: $showPDFPreview) {
            PDFPreviewView(
                pdfData: previewPDFData,
                onDismiss: { showPDFPreview = false },
                onShare: { shareFile(data: previewPDFData ?? Data(), fileName: "lumenlingo_report.pdf") }
            )
        }
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
                exportingFormat = nil
                showPDFPreview = true
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

// MARK: - PDF Preview View (Story 4.3)

/// Full-screen PDF preview with PDFKit, pinch-to-zoom, and share button.
struct PDFPreviewView: View {
    let pdfData: Data?
    let onDismiss: () -> Void
    let onShare: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        NavigationStack {
            ZStack {
                (isDark ? Color.black : Color(UIColor.systemGroupedBackground))
                    .ignoresSafeArea()

                if let data = pdfData, let document = PDFDocument(data: data) {
                    PDFKitView(document: document)
                        .ignoresSafeArea(edges: .bottom)
                } else {
                    // Loading shimmer
                    VStack(spacing: 16) {
                        ProgressView()
                            .scaleEffect(1.2)
                            .tint(isDark ? .white : .primary)
                        Text("Generating your report...")
                            .font(.system(size: 14, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                    }
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button("Cancel") { onDismiss() }
                }
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button {
                        onShare()
                    } label: {
                        Image(systemName: "square.and.arrow.up")
                    }
                    .disabled(pdfData == nil)
                }
            }
        }
    }
}

/// UIViewRepresentable wrapper for PDFKit.PDFView.
struct PDFKitView: UIViewRepresentable {
    let document: PDFDocument

    func makeUIView(context: Context) -> PDFView {
        let pdfView = PDFView()
        pdfView.document = document
        pdfView.autoScales = true
        pdfView.displayMode = .singlePageContinuous
        pdfView.displayDirection = .vertical
        pdfView.backgroundColor = .clear
        return pdfView
    }

    func updateUIView(_ pdfView: PDFView, context: Context) {
        if pdfView.document !== document {
            pdfView.document = document
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

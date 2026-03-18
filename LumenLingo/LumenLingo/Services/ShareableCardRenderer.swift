import UIKit
import SwiftUI

/// Renders a beautiful shareable achievement card as a UIImage using SwiftUI ImageRenderer.
/// Produces a 1080×1080 social-ready card with premium visual design.
struct ShareableCardRenderer {

    // MARK: - Card Data

    struct CardData {
        let score: Int
        let correctAnswers: Int
        let totalQuestions: Int
        let accuracy: Double
        let gameType: GameType
        let categoryName: String
        let tier: MembershipTier
        let timeSpent: Int
        let xpMultiplier: Double
    }

    // MARK: - Constants

    private static let cardSize: CGFloat = 540 // Points; rendered at 2× = 1080px
    private static let renderScale: CGFloat = 2

    // MARK: - Performance Tier

    fileprivate enum PerfTier {
        case excellent, great, good, keepGoing

        var title: String {
            switch self {
            case .excellent: "Excellent!"
            case .great: "Great Job!"
            case .good: "Good Work"
            case .keepGoing: "Keep Going"
            }
        }

        var subtitle: String {
            switch self {
            case .excellent: "Outstanding performance"
            case .great: "Really impressive"
            case .good: "Solid progress"
            case .keepGoing: "Every step counts"
            }
        }

        var icon: String {
            switch self {
            case .excellent: "trophy.fill"
            case .great: "star.fill"
            case .good: "hand.thumbsup.fill"
            case .keepGoing: "heart.fill"
            }
        }

        var color: Color {
            switch self {
            case .excellent: .yellow
            case .great: .green
            case .good: .cyan
            case .keepGoing: .orange
            }
        }

        var gradientColors: [Color] {
            switch self {
            case .excellent: [Color(hex: "#f59e0b"), Color(hex: "#d97706"), Color(hex: "#b45309")]
            case .great: [Color(hex: "#10b981"), Color(hex: "#059669"), Color(hex: "#047857")]
            case .good: [Color(hex: "#06b6d4"), Color(hex: "#0891b2"), Color(hex: "#0e7490")]
            case .keepGoing: [Color(hex: "#f97316"), Color(hex: "#ea580c"), Color(hex: "#c2410c")]
            }
        }
    }

    fileprivate static func performanceTier(for accuracy: Double) -> PerfTier {
        if accuracy >= 90 { return .excellent }
        if accuracy >= 75 { return .great }
        if accuracy >= 60 { return .good }
        return .keepGoing
    }

    // MARK: - Render

    /// Renders the shareable card image using SwiftUI ImageRenderer.
    @MainActor
    static func render(data: CardData) -> UIImage {
        let perf = performanceTier(for: data.accuracy)
        let cardView = ShareCardView(data: data, perf: perf)

        let renderer = ImageRenderer(content: cardView.frame(width: cardSize, height: cardSize))
        renderer.scale = renderScale
        renderer.isOpaque = true

        if let cgImage = renderer.cgImage {
            return UIImage(cgImage: cgImage, scale: renderScale, orientation: .up)
        }
        // Fallback: return a 1×1 pixel image so callers never crash
        return UIImage()
    }

    // MARK: - Share

    /// Renders the card and presents a share sheet with image and text.
    @MainActor
    static func shareCard(data: CardData) {
        let image = render(data: data)

        let shareText = "I just scored \(data.score) on \(data.categoryName) in LumenLingo! 🎯"

        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }

        var topVC = rootVC
        while let presented = topVC.presentedViewController {
            topVC = presented
        }

        let activityVC = UIActivityViewController(
            activityItems: [image, shareText],
            applicationActivities: nil
        )

        if let popover = activityVC.popoverPresentationController {
            popover.sourceView = topVC.view
            popover.sourceRect = CGRect(
                x: topVC.view.bounds.midX,
                y: topVC.view.bounds.midY,
                width: 0,
                height: 0
            )
            popover.permittedArrowDirections = []
        }

        topVC.present(activityVC, animated: true)
    }
}

// MARK: - Share Card SwiftUI View

/// A self-contained 1080×1080 share card rendered entirely in SwiftUI.
private struct ShareCardView: View {
    let data: ShareableCardRenderer.CardData
    let perf: ShareableCardRenderer.PerfTier

    private var finalXP: Int {
        data.xpMultiplier > 1.0 ? Int(Double(data.score) * data.xpMultiplier) : data.score
    }

    private var displayScore: Int {
        data.xpMultiplier > 1.0 ? finalXP : data.score
    }

    private func formatTime(_ seconds: Int) -> String {
        let mins = seconds / 60
        let secs = seconds % 60
        return mins > 0 ? "\(mins)m \(secs)s" : "\(secs)s"
    }

    var body: some View {
        ZStack {
            // Deep cosmic background
            background

            // Content
            VStack(spacing: 0) {
                // Top bar: branding + tier badge
                topBar
                    .padding(.top, 32)
                    .padding(.horizontal, 36)

                Spacer(minLength: 20)

                // Hero performance section
                heroSection

                Spacer(minLength: 16)

                // Score
                scoreSection

                Spacer(minLength: 20)

                // Stats row
                statsRow
                    .padding(.horizontal, 36)

                Spacer(minLength: 20)

                // Category & game info
                categoryBar
                    .padding(.horizontal, 36)

                Spacer(minLength: 24)

                // Footer branding
                footerBar
                    .padding(.horizontal, 36)
                    .padding(.bottom, 28)
            }
        }
        .frame(width: 540, height: 540)
        .environment(\.colorScheme, .dark)
    }

    // MARK: - Background

    private var background: some View {
        ZStack {
            // Base gradient
            LinearGradient(
                colors: [
                    Color(red: 0.05, green: 0.05, blue: 0.12),
                    Color(red: 0.02, green: 0.02, blue: 0.08)
                ],
                startPoint: .top,
                endPoint: .bottom
            )

            // Performance tier radial glow
            RadialGradient(
                colors: [
                    perf.color.opacity(0.12),
                    perf.color.opacity(0.04),
                    .clear
                ],
                center: .center,
                startRadius: 20,
                endRadius: 280
            )

            // Tier accent glow top-right
            RadialGradient(
                colors: [
                    (data.tier.gradientColors.first ?? .purple).opacity(0.08),
                    .clear
                ],
                center: UnitPoint(x: 0.85, y: 0.1),
                startRadius: 10,
                endRadius: 180
            )

            // Subtle noise-like texture via overlapping gradients
            LinearGradient(
                colors: [.white.opacity(0.015), .clear, .white.opacity(0.01)],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            // Border
            RoundedRectangle(cornerRadius: 32)
                .strokeBorder(
                    LinearGradient(
                        colors: [
                            .white.opacity(0.15),
                            perf.color.opacity(0.2),
                            .white.opacity(0.05)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: 1
                )
        }
        .clipShape(RoundedRectangle(cornerRadius: 32))
    }

    // MARK: - Top Bar

    private var topBar: some View {
        HStack {
            // App branding
            HStack(spacing: 6) {
                Image(systemName: "sparkle")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple, .cyan],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                Text("LumenLingo")
                    .font(.system(size: 14, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.5))
            }

            Spacer()

            // Tier badge
            if data.tier != .free {
                HStack(spacing: 5) {
                    Image(systemName: data.tier.iconName)
                        .font(.system(size: 10, weight: .bold))
                    Text(data.tier.displayName)
                        .font(.system(size: 11, weight: .bold))
                }
                .foregroundStyle(.white)
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .background {
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: data.tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .overlay(
                            Capsule()
                                .strokeBorder(.white.opacity(0.2), lineWidth: 0.5)
                        )
                }
            }
        }
    }

    // MARK: - Hero Section

    private var heroSection: some View {
        ZStack {
            // Radial glow behind icon
            Circle()
                .fill(
                    RadialGradient(
                        colors: [
                            perf.color.opacity(0.2),
                            perf.color.opacity(0.05),
                            .clear
                        ],
                        center: .center,
                        startRadius: 10,
                        endRadius: 80
                    )
                )
                .frame(width: 160, height: 160)

            // Orbital ring
            Circle()
                .strokeBorder(
                    AngularGradient(
                        colors: [
                            perf.color.opacity(0.4),
                            .clear,
                            perf.color.opacity(0.2),
                            .clear,
                            perf.color.opacity(0.3),
                            .clear,
                        ],
                        center: .center
                    ),
                    lineWidth: 1
                )
                .frame(width: 90, height: 90)

            // Glass circle
            Circle()
                .fill(.white.opacity(0.06))
                .frame(width: 64, height: 64)
                .overlay(
                    Circle()
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    .white.opacity(0.3),
                                    perf.color.opacity(0.2),
                                    .white.opacity(0.1)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.8
                        )
                )

            // Icon
            Image(systemName: perf.icon)
                .font(.system(size: 28, weight: .light))
                .foregroundStyle(
                    LinearGradient(
                        colors: [perf.color, perf.color.opacity(0.7)],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
        }
    }

    // MARK: - Score Section

    private var scoreSection: some View {
        VStack(spacing: 6) {
            Text(perf.title)
                .font(.system(size: 28, weight: .bold, design: .rounded))
                .foregroundStyle(
                    LinearGradient(
                        colors: perf.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            HStack(alignment: .firstTextBaseline, spacing: 6) {
                Text("\(displayScore)")
                    .font(.system(size: 52, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [perf.color, perf.color.opacity(0.6)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )

                Text(data.xpMultiplier > 1.0 ? "XP" : "POINTS")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(.white.opacity(0.35))
                    .textCase(.uppercase)
                    .tracking(2)
            }

            Text(perf.subtitle)
                .font(.system(size: 14))
                .foregroundStyle(.white.opacity(0.4))
        }
    }

    // MARK: - Stats Row

    private var statsRow: some View {
        HStack(spacing: 0) {
            shareStatColumn(value: "\(Int(data.accuracy))%", label: "ACCURACY", color: perf.color)

            Capsule()
                .fill(.white.opacity(0.08))
                .frame(width: 1, height: 32)

            shareStatColumn(value: "\(data.correctAnswers)", label: "CORRECT", color: .green)

            Capsule()
                .fill(.white.opacity(0.08))
                .frame(width: 1, height: 32)

            shareStatColumn(
                value: "\(data.totalQuestions - data.correctAnswers)",
                label: "TO REVIEW",
                color: .orange
            )
        }
        .padding(.vertical, 18)
        .padding(.horizontal, 8)
        .background {
            RoundedRectangle(cornerRadius: 20)
                .fill(.white.opacity(0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            LinearGradient(
                                colors: [.white.opacity(0.12), .white.opacity(0.04)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.5
                        )
                )
        }
    }

    private func shareStatColumn(value: String, label: String, color: Color) -> some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.system(size: 22, weight: .bold, design: .rounded))
                .foregroundStyle(.white)
            Text(label)
                .font(.system(size: 9, weight: .semibold))
                .foregroundStyle(.white.opacity(0.35))
                .tracking(0.8)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Category Bar

    private var categoryBar: some View {
        HStack(spacing: 8) {
            Image(systemName: data.gameType.iconName)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(data.gameType.gradientColors.first?.opacity(0.6) ?? .white.opacity(0.4))

            Text("\(data.gameType.displayName) · \(data.categoryName)")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(.white.opacity(0.45))
                .lineLimit(1)

            Spacer()

            Text(formatTime(data.timeSpent))
                .font(.system(size: 12, weight: .medium))
                .foregroundStyle(.white.opacity(0.3))
        }
    }

    // MARK: - Footer

    private var footerBar: some View {
        HStack {
            // XP multiplier indicator
            if data.xpMultiplier > 1.0 {
                HStack(spacing: 4) {
                    Image(systemName: "bolt.fill")
                        .font(.system(size: 10, weight: .semibold))
                    Text("\(String(format: "%.1f", data.xpMultiplier))× XP")
                        .font(.system(size: 11, weight: .semibold))
                }
                .foregroundStyle(
                    LinearGradient(
                        colors: data.tier.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
            }

            Spacer()

            // Decorative accent dots
            HStack(spacing: 3) {
                ForEach(0..<3, id: \.self) { i in
                    Circle()
                        .fill(perf.gradientColors[i % perf.gradientColors.count].opacity(0.4))
                        .frame(width: 4, height: 4)
                }
            }
        }
    }
}

// MARK: - MembershipTier helpers used by renderer

private extension ShareableCardRenderer.PerfTier {
    // Allows ShareCardView to access PerfTier properties
}

// MARK: - UIFont Rounded Helper

private extension UIFont {
    func rounded() -> UIFont {
        guard let descriptor = fontDescriptor.withDesign(.rounded) else { return self }
        return UIFont(descriptor: descriptor, size: pointSize)
    }
}

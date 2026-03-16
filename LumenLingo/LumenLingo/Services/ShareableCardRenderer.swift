import UIKit
import SwiftUI

/// Renders a beautiful shareable achievement card as a UIImage.
/// The card displays session results with a premium feel and an optional tier badge.
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

    private static let cardWidth: CGFloat = 390
    private static let cardHeight: CGFloat = 520
    private static let cornerRadius: CGFloat = 28
    private static let scale: CGFloat = 3 // Retina quality

    // MARK: - Render

    /// Renders the shareable card image at 3× scale.
    static func render(data: CardData) -> UIImage {
        let size = CGSize(width: cardWidth, height: cardHeight)
        let renderer = UIGraphicsImageRenderer(
            size: size,
            format: {
                let f = UIGraphicsImageRendererFormat()
                f.scale = scale
                return f
            }()
        )

        return renderer.image { ctx in
            let rect = CGRect(origin: .zero, size: size)
            let gc = ctx.cgContext

            // MARK: Background
            drawBackground(in: rect, ctx: gc, tier: data.tier)

            // MARK: App Branding (top-left)
            drawBranding(in: rect, ctx: gc)

            // MARK: Performance Icon
            let perfTier = performanceTier(for: data.accuracy)
            drawPerformanceHero(in: rect, ctx: gc, perf: perfTier)

            // MARK: Title
            drawTitle(in: rect, ctx: gc, perf: perfTier)

            // MARK: Score Highlight
            drawScore(in: rect, ctx: gc, score: data.score, xpMultiplier: data.xpMultiplier, perf: perfTier)

            // MARK: Stats Row
            drawStatsRow(in: rect, ctx: gc, data: data, perf: perfTier)

            // MARK: Category & Game Type
            drawCategoryBar(in: rect, ctx: gc, data: data)

            // MARK: Tier Badge (Pro+ only)
            if data.tier != .free {
                drawTierBadge(in: rect, ctx: gc, tier: data.tier)
            }
        }
    }

    // MARK: - Share

    /// Renders the card and presents a share sheet.
    @MainActor
    static func shareCard(data: CardData) {
        let image = render(data: data)

        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let rootVC = windowScene.windows.first?.rootViewController else { return }

        var topVC = rootVC
        while let presented = topVC.presentedViewController {
            topVC = presented
        }

        let activityVC = UIActivityViewController(
            activityItems: [image],
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

    // MARK: - Drawing Helpers

    private static func drawBackground(in rect: CGRect, ctx: CGContext, tier: MembershipTier) {
        // Deep dark gradient background
        let path = UIBezierPath(roundedRect: rect, cornerRadius: cornerRadius)
        ctx.saveGState()
        path.addClip()

        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let topColor = UIColor(red: 0.06, green: 0.06, blue: 0.12, alpha: 1.0).cgColor
        let bottomColor = UIColor(red: 0.03, green: 0.03, blue: 0.08, alpha: 1.0).cgColor

        if let gradient = CGGradient(colorsSpace: colorSpace, colors: [topColor, bottomColor] as CFArray, locations: [0, 1]) {
            ctx.drawLinearGradient(gradient, start: .zero, end: CGPoint(x: 0, y: rect.height), options: [])
        }

        // Subtle radial glow at center-top using tier accent
        let tierColors = tier.gradientColors
        if let first = tierColors.first {
            let uiColor = UIColor(first)
            var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
            uiColor.getRed(&r, green: &g, blue: &b, alpha: &a)
            let glowCenter = UIColor(red: r, green: g, blue: b, alpha: 0.08).cgColor
            let glowEdge = UIColor(red: r, green: g, blue: b, alpha: 0.0).cgColor
            if let radial = CGGradient(colorsSpace: colorSpace, colors: [glowCenter, glowEdge] as CFArray, locations: [0, 1]) {
                ctx.drawRadialGradient(
                    radial,
                    startCenter: CGPoint(x: rect.midX, y: rect.height * 0.35),
                    startRadius: 0,
                    endCenter: CGPoint(x: rect.midX, y: rect.height * 0.35),
                    endRadius: rect.width * 0.6,
                    options: []
                )
            }
        }

        // Thin border
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.12).cgColor)
        ctx.setLineWidth(1.0)
        UIBezierPath(roundedRect: rect.insetBy(dx: 0.5, dy: 0.5), cornerRadius: cornerRadius).stroke()

        ctx.restoreGState()
    }

    private static func drawBranding(in rect: CGRect, ctx: CGContext) {
        // App name top-left
        let brandFont = UIFont.systemFont(ofSize: 13, weight: .semibold)
        let brandAttrs: [NSAttributedString.Key: Any] = [
            .font: brandFont,
            .foregroundColor: UIColor.white.withAlphaComponent(0.35),
        ]
        let brandText = "LumenLingo" as NSString
        brandText.draw(at: CGPoint(x: 24, y: 22), withAttributes: brandAttrs)
    }

    private static func drawPerformanceHero(in rect: CGRect, ctx: CGContext, perf: PerfTier) {
        // Circle aura
        let centerX = rect.midX
        let centerY: CGFloat = 130
        let auraRect = CGRect(x: centerX - 50, y: centerY - 50, width: 100, height: 100)

        ctx.saveGState()
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let perfUIColor = UIColor(perf.color)
        var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
        perfUIColor.getRed(&r, green: &g, blue: &b, alpha: &a)

        let innerGlow = UIColor(red: r, green: g, blue: b, alpha: 0.2).cgColor
        let outerGlow = UIColor(red: r, green: g, blue: b, alpha: 0.0).cgColor
        if let radial = CGGradient(colorsSpace: colorSpace, colors: [innerGlow, outerGlow] as CFArray, locations: [0, 1]) {
            ctx.drawRadialGradient(radial, startCenter: CGPoint(x: centerX, y: centerY), startRadius: 0,
                                   endCenter: CGPoint(x: centerX, y: centerY), endRadius: 70, options: [])
        }

        // Glass circle
        let circlePath = UIBezierPath(ovalIn: auraRect.insetBy(dx: 10, dy: 10))
        ctx.setFillColor(UIColor.white.withAlphaComponent(0.06).cgColor)
        circlePath.fill()
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.15).cgColor)
        ctx.setLineWidth(0.5)
        circlePath.stroke()

        // SF Symbol icon
        let config = UIImage.SymbolConfiguration(pointSize: 32, weight: .light)
        if let symbol = UIImage(systemName: perf.icon, withConfiguration: config) {
            let tinted = symbol.withTintColor(perfUIColor, renderingMode: .alwaysOriginal)
            let iconSize = tinted.size
            let iconRect = CGRect(
                x: centerX - iconSize.width / 2,
                y: centerY - iconSize.height / 2,
                width: iconSize.width,
                height: iconSize.height
            )
            tinted.draw(in: iconRect)
        }

        ctx.restoreGState()
    }

    private static func drawTitle(in rect: CGRect, ctx: CGContext, perf: PerfTier) {
        let perfUIColor = UIColor(perf.color)
        let titleFont = UIFont.systemFont(ofSize: 28, weight: .bold).rounded()
        let titleAttrs: [NSAttributedString.Key: Any] = [
            .font: titleFont,
            .foregroundColor: perfUIColor,
        ]
        let titleText = perf.title as NSString
        let titleSize = titleText.size(withAttributes: titleAttrs)
        titleText.draw(
            at: CGPoint(x: rect.midX - titleSize.width / 2, y: 195),
            withAttributes: titleAttrs
        )
    }

    private static func drawScore(in rect: CGRect, ctx: CGContext, score: Int, xpMultiplier: Double, perf: PerfTier) {
        let perfUIColor = UIColor(perf.color)
        let finalXP = xpMultiplier > 1.0 ? Int(Double(score) * xpMultiplier) : score
        let displayScore = xpMultiplier > 1.0 ? finalXP : score

        // Big score number
        let scoreFont = UIFont.systemFont(ofSize: 48, weight: .bold).rounded()
        let scoreAttrs: [NSAttributedString.Key: Any] = [
            .font: scoreFont,
            .foregroundColor: perfUIColor,
        ]
        let scoreText = "\(displayScore)" as NSString
        let scoreSize = scoreText.size(withAttributes: scoreAttrs)
        scoreText.draw(
            at: CGPoint(x: rect.midX - scoreSize.width / 2, y: 240),
            withAttributes: scoreAttrs
        )

        // "points" label
        let labelFont = UIFont.systemFont(ofSize: 11, weight: .medium)
        let labelAttrs: [NSAttributedString.Key: Any] = [
            .font: labelFont,
            .foregroundColor: UIColor.white.withAlphaComponent(0.35),
        ]
        let label = (xpMultiplier > 1.0 ? "XP" : "POINTS") as NSString
        let labelSize = label.size(withAttributes: labelAttrs)
        label.draw(
            at: CGPoint(x: rect.midX - labelSize.width / 2, y: 296),
            withAttributes: labelAttrs
        )
    }

    private static func drawStatsRow(in rect: CGRect, ctx: CGContext, data: CardData, perf: PerfTier) {
        // Glass card background for stats
        let statsY: CGFloat = 330
        let statsHeight: CGFloat = 72
        let statsRect = CGRect(x: 28, y: statsY, width: rect.width - 56, height: statsHeight)
        let statsPath = UIBezierPath(roundedRect: statsRect, cornerRadius: 18)

        ctx.setFillColor(UIColor.white.withAlphaComponent(0.06).cgColor)
        statsPath.fill()
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.1).cgColor)
        ctx.setLineWidth(0.5)
        statsPath.stroke()

        let colWidth = statsRect.width / 3
        let perfUIColor = UIColor(perf.color)

        // Accuracy
        drawStatColumn(
            in: CGRect(x: statsRect.minX, y: statsY, width: colWidth, height: statsHeight),
            value: "\(Int(data.accuracy))%",
            label: "ACCURACY",
            color: perfUIColor
        )

        // Divider
        let divX1 = statsRect.minX + colWidth
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.08).cgColor)
        ctx.setLineWidth(1)
        ctx.move(to: CGPoint(x: divX1, y: statsY + 18))
        ctx.addLine(to: CGPoint(x: divX1, y: statsY + statsHeight - 18))
        ctx.strokePath()

        // Correct
        drawStatColumn(
            in: CGRect(x: statsRect.minX + colWidth, y: statsY, width: colWidth, height: statsHeight),
            value: "\(data.correctAnswers)",
            label: "CORRECT",
            color: UIColor.systemGreen
        )

        // Divider
        let divX2 = statsRect.minX + colWidth * 2
        ctx.move(to: CGPoint(x: divX2, y: statsY + 18))
        ctx.addLine(to: CGPoint(x: divX2, y: statsY + statsHeight - 18))
        ctx.strokePath()

        // To Review
        drawStatColumn(
            in: CGRect(x: statsRect.minX + colWidth * 2, y: statsY, width: colWidth, height: statsHeight),
            value: "\(data.totalQuestions - data.correctAnswers)",
            label: "TO REVIEW",
            color: UIColor.systemOrange
        )
    }

    private static func drawStatColumn(in rect: CGRect, value: String, label: String, color: UIColor) {
        let valueFont = UIFont.systemFont(ofSize: 20, weight: .bold).rounded()
        let valueAttrs: [NSAttributedString.Key: Any] = [
            .font: valueFont,
            .foregroundColor: UIColor.white,
        ]
        let valueText = value as NSString
        let valueSize = valueText.size(withAttributes: valueAttrs)
        valueText.draw(
            at: CGPoint(x: rect.midX - valueSize.width / 2, y: rect.minY + 14),
            withAttributes: valueAttrs
        )

        let labelFont = UIFont.systemFont(ofSize: 9, weight: .semibold)
        let labelAttrs: [NSAttributedString.Key: Any] = [
            .font: labelFont,
            .foregroundColor: UIColor.white.withAlphaComponent(0.35),
        ]
        let labelText = label as NSString
        let labelSize = labelText.size(withAttributes: labelAttrs)
        labelText.draw(
            at: CGPoint(x: rect.midX - labelSize.width / 2, y: rect.minY + 44),
            withAttributes: labelAttrs
        )
    }

    private static func drawCategoryBar(in rect: CGRect, ctx: CGContext, data: CardData) {
        let barY: CGFloat = 425
        // Game type icon + category name
        let config = UIImage.SymbolConfiguration(pointSize: 14, weight: .medium)
        let gameUIColor = UIColor(data.gameType.gradientColors.first ?? .white)
        if let symbol = UIImage(systemName: data.gameType.iconName, withConfiguration: config) {
            let tinted = symbol.withTintColor(gameUIColor.withAlphaComponent(0.6), renderingMode: .alwaysOriginal)
            tinted.draw(at: CGPoint(x: 30, y: barY))
        }

        let catFont = UIFont.systemFont(ofSize: 13, weight: .semibold)
        let catAttrs: [NSAttributedString.Key: Any] = [
            .font: catFont,
            .foregroundColor: UIColor.white.withAlphaComponent(0.55),
        ]
        let catText = "\(data.gameType.displayName) · \(data.categoryName)" as NSString
        catText.draw(at: CGPoint(x: 52, y: barY + 1), withAttributes: catAttrs)

        // Time spent
        let timeFont = UIFont.systemFont(ofSize: 12, weight: .medium)
        let timeAttrs: [NSAttributedString.Key: Any] = [
            .font: timeFont,
            .foregroundColor: UIColor.white.withAlphaComponent(0.35),
        ]
        let mins = data.timeSpent / 60
        let secs = data.timeSpent % 60
        let timeStr = mins > 0 ? "\(mins)m \(secs)s" : "\(secs)s"
        let timeText = timeStr as NSString
        let timeSize = timeText.size(withAttributes: timeAttrs)
        timeText.draw(
            at: CGPoint(x: rect.width - 28 - timeSize.width, y: barY + 2),
            withAttributes: timeAttrs
        )
    }

    private static func drawTierBadge(in rect: CGRect, ctx: CGContext, tier: MembershipTier) {
        let badgePadding: CGFloat = 8
        let badgeHeight: CGFloat = 26
        let iconSize: CGFloat = 12
        let fontSize: CGFloat = 11

        // Measure text
        let nameFont = UIFont.systemFont(ofSize: fontSize, weight: .bold)
        let nameAttrs: [NSAttributedString.Key: Any] = [
            .font: nameFont,
            .foregroundColor: UIColor.white,
        ]
        let nameText = tier.displayName as NSString
        let nameSize = nameText.size(withAttributes: nameAttrs)

        let badgeWidth = 10 + iconSize + 5 + nameSize.width + 10

        let badgeX = rect.width - badgePadding - badgeWidth
        let badgeY = rect.height - badgePadding - badgeHeight - 24 // above bottom with category bar spacing
        let badgeRect = CGRect(x: badgeX, y: badgeY, width: badgeWidth, height: badgeHeight)
        let badgePath = UIBezierPath(roundedRect: badgeRect, cornerRadius: badgeHeight / 2)

        ctx.saveGState()

        // Gradient fill
        badgePath.addClip()
        let colors = tier.gradientColors.map { UIColor($0).cgColor }
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let locs: [CGFloat] = colors.count == 2 ? [0, 1] : [0, 0.5, 1]
        if let gradient = CGGradient(colorsSpace: colorSpace, colors: colors as CFArray, locations: locs) {
            ctx.drawLinearGradient(gradient, start: CGPoint(x: badgeRect.minX, y: badgeRect.midY),
                                   end: CGPoint(x: badgeRect.maxX, y: badgeRect.midY), options: [])
        }

        // White border
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.2).cgColor)
        ctx.setLineWidth(0.5)
        badgePath.stroke()

        ctx.restoreGState()

        // Tier icon
        let symbolConfig = UIImage.SymbolConfiguration(pointSize: iconSize, weight: .bold)
        if let symbol = UIImage(systemName: tier.iconName, withConfiguration: symbolConfig) {
            let tinted = symbol.withTintColor(.white, renderingMode: .alwaysOriginal)
            let symSize = tinted.size
            tinted.draw(at: CGPoint(
                x: badgeRect.minX + 10,
                y: badgeRect.midY - symSize.height / 2
            ))
        }

        // Tier name
        nameText.draw(
            at: CGPoint(
                x: badgeRect.minX + 10 + iconSize + 5,
                y: badgeRect.midY - nameSize.height / 2
            ),
            withAttributes: nameAttrs
        )

        // Shadow effect (draw behind by rendering badge area)
        // Shadow is handled by the gradient glow in the background
    }

    // MARK: - Performance Tier Mapping

    private enum PerfTier {
        case excellent, great, good, keepGoing

        var title: String {
            switch self {
            case .excellent: "Excellent!"
            case .great: "Great Job!"
            case .good: "Good Work"
            case .keepGoing: "Keep Going"
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
    }

    private static func performanceTier(for accuracy: Double) -> PerfTier {
        if accuracy >= 90 { return .excellent }
        if accuracy >= 75 { return .great }
        if accuracy >= 60 { return .good }
        return .keepGoing
    }
}

// MARK: - UIFont Rounded Helper

private extension UIFont {
    func rounded() -> UIFont {
        guard let descriptor = fontDescriptor.withDesign(.rounded) else { return self }
        return UIFont(descriptor: descriptor, size: pointSize)
    }
}

import Foundation
import UIKit

// MARK: - Data Exporter

/// Exports `GameProgressRecord` data as CSV, JSON, or PDF.
/// Generates files on-device with no network dependency.
final class DataExporter {

    /// Supported export formats, gated by tier.
    enum ExportFormat: String, CaseIterable {
        case csv
        case json
        case pdf
    }

    /// Returns the export formats available for the given tier.
    static func availableFormats(for tier: MembershipTier) -> [ExportFormat] {
        switch tier {
        case .elite:          return [.csv]
        case .royal, .trial:  return [.csv, .json, .pdf]
        default:              return []
        }
    }

    // MARK: - CSV Export

    /// Generates a CSV file from game progress records.
    static func exportCSV(records: [GameProgressRecord]) -> Data {
        var lines: [String] = []
        lines.append("Date,Game Type,Category,Score,Correct,Total,Accuracy %,Time (s),Source Language,Target Language")

        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withFullDate, .withTime, .withColonSeparatorInTime]

        for record in records.sorted(by: { $0.createdDate < $1.createdDate }) {
            let date = formatter.string(from: record.createdDate)
            let gameType = csvEscape(record.gameType)
            let category = csvEscape(record.categoryName)
            let accuracy = record.totalQuestions > 0
                ? String(format: "%.1f", record.accuracy)
                : "0.0"
            let line = "\(date),\(gameType),\(category),\(record.score),\(record.correctAnswers),\(record.totalQuestions),\(accuracy),\(record.timeSpent),\(csvEscape(record.sourceLanguage)),\(csvEscape(record.targetLanguage))"
            lines.append(line)
        }

        return lines.joined(separator: "\n").data(using: .utf8) ?? Data()
    }

    // MARK: - JSON Export

    /// Generates a structured JSON file from game progress records.
    static func exportJSON(records: [GameProgressRecord]) -> Data {
        let sessions: [[String: Any]] = records
            .sorted(by: { $0.createdDate < $1.createdDate })
            .map { record in
                [
                    "date": ISO8601DateFormatter().string(from: record.createdDate),
                    "gameType": record.gameType,
                    "category": record.categoryName,
                    "score": record.score,
                    "correctAnswers": record.correctAnswers,
                    "totalQuestions": record.totalQuestions,
                    "accuracy": record.totalQuestions > 0 ? round(record.accuracy * 10) / 10 : 0.0,
                    "timeSpentSeconds": record.timeSpent,
                    "sourceLanguage": record.sourceLanguage,
                    "targetLanguage": record.targetLanguage
                ] as [String: Any]
            }

        let totalCorrect = records.reduce(0) { $0 + $1.correctAnswers }
        let totalQuestions = records.reduce(0) { $0 + $1.totalQuestions }
        let totalXP = records.reduce(0) { $0 + $1.score }

        let payload: [String: Any] = [
            "exportDate": ISO8601DateFormatter().string(from: .now),
            "totalSessions": records.count,
            "totalXP": totalXP,
            "overallAccuracy": totalQuestions > 0 ? round(Double(totalCorrect) / Double(totalQuestions) * 1000) / 10 : 0.0,
            "sessions": sessions
        ]

        let data = try? JSONSerialization.data(withJSONObject: payload, options: [.prettyPrinted, .sortedKeys])
        return data ?? Data()
    }

    // MARK: - PDF Export

    /// Generates a premium branded PDF report with card-based layout,
    /// tier gradients, circular accuracy rings, and elegant typography.
    static func exportPDF(
        records: [GameProgressRecord],
        userName: String = "",
        tier: MembershipTier = .royal,
        isDarkMode: Bool = true
    ) -> Data {
        let builder = PDFReportBuilder(
            records: records,
            userName: userName,
            tier: tier,
            isDarkMode: isDarkMode
        )
        return builder.build()
    }

    // MARK: - Helpers

    private static func csvEscape(_ value: String) -> String {
        if value.contains(",") || value.contains("\"") || value.contains("\n") {
            return "\"\(value.replacingOccurrences(of: "\"", with: "\"\""))\""
        }
        return value
    }
}

// MARK: - PDF Report Builder

/// Premium card-based PDF report generator with tier gradients,
/// circular progress rings, and dark/light mode support.
final class PDFReportBuilder {
    // MARK: - Configuration

    private let records: [GameProgressRecord]
    private let userName: String
    private let tier: MembershipTier
    private let isDark: Bool

    private let pageWidth: CGFloat = 612   // US Letter
    private let pageHeight: CGFloat = 792
    private let margin: CGFloat = 40
    private let cardPadding: CGFloat = 16
    private let cardCornerRadius: CGFloat = 16
    private let footerHeight: CGFloat = 36

    private var contentWidth: CGFloat { pageWidth - margin * 2 }
    private var safeBottom: CGFloat { pageHeight - margin - footerHeight }

    // MARK: - Theme Colors (UIColor for Core Graphics)

    private var pageBg: UIColor { isDark ? UIColor(red: 0.04, green: 0.03, blue: 0.09, alpha: 1) : UIColor(red: 0.97, green: 0.96, blue: 0.98, alpha: 1) }
    private var cardBg: UIColor { isDark ? UIColor(red: 0.08, green: 0.06, blue: 0.16, alpha: 1) : .white }
    private var cardBorder: UIColor { isDark ? UIColor.white.withAlphaComponent(0.08) : UIColor.black.withAlphaComponent(0.06) }
    private var primaryText: UIColor { isDark ? .white : UIColor(red: 0.12, green: 0.08, blue: 0.20, alpha: 1) }
    private var secondaryText: UIColor { isDark ? UIColor.white.withAlphaComponent(0.55) : UIColor(red: 0.39, green: 0.23, blue: 0.39, alpha: 1) }
    private var tertiaryText: UIColor { isDark ? UIColor.white.withAlphaComponent(0.35) : UIColor.black.withAlphaComponent(0.4) }

    private var tierUIColors: [UIColor] {
        tierHexColors.map { UIColor(cgColor: $0) }
    }

    /// CGColors for gradient drawing from the tier's gradient hex values.
    private var tierHexColors: [CGColor] {
        switch tier {
        case .trial: return [
            UIColor(red: 0.98, green: 0.75, blue: 0.14, alpha: 1).cgColor,
            UIColor(red: 0.66, green: 0.33, blue: 0.97, alpha: 1).cgColor,
            UIColor(red: 0.93, green: 0.29, blue: 0.60, alpha: 1).cgColor
        ]
        case .free: return [
            UIColor(red: 0.58, green: 0.64, blue: 0.72, alpha: 1).cgColor,
            UIColor(red: 0.39, green: 0.45, blue: 0.55, alpha: 1).cgColor
        ]
        case .pro: return [
            UIColor(red: 0.66, green: 0.33, blue: 0.97, alpha: 1).cgColor,
            UIColor(red: 0.85, green: 0.27, blue: 0.94, alpha: 1).cgColor,
            UIColor(red: 0.93, green: 0.29, blue: 0.60, alpha: 1).cgColor
        ]
        case .elite: return [
            UIColor(red: 0.49, green: 0.23, blue: 0.93, alpha: 1).cgColor,
            UIColor(red: 0.58, green: 0.20, blue: 0.92, alpha: 1).cgColor,
            UIColor(red: 0.64, green: 0.11, blue: 0.69, alpha: 1).cgColor
        ]
        case .royal: return [
            UIColor(red: 0.98, green: 0.75, blue: 0.14, alpha: 1).cgColor,
            UIColor(red: 0.98, green: 0.45, blue: 0.09, alpha: 1).cgColor,
            UIColor(red: 0.96, green: 0.25, blue: 0.37, alpha: 1).cgColor
        ]
        }
    }

    private var pageNumber = 0

    /// PDF-safe tier label (no emoji — Core Graphics can't render emoji in PDFs)
    private var tierLabel: String {
        switch tier {
        case .trial: return "Trial"
        case .free:  return "Free"
        case .pro:   return "Pro"
        case .elite: return "Elite"
        case .royal: return "Royal"
        }
    }

    // MARK: - Computed Stats

    private lazy var totalXP: Int = records.reduce(0) { $0 + $1.score }
    private lazy var totalCorrect: Int = records.reduce(0) { $0 + $1.correctAnswers }
    private lazy var totalQuestions: Int = records.reduce(0) { $0 + $1.totalQuestions }
    private lazy var avgAccuracy: Double = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0
    private lazy var totalTime: Int = records.reduce(0) { $0 + $1.timeSpent }
    private lazy var grouped: [(String, [GameProgressRecord])] = {
        Dictionary(grouping: records) { $0.gameType }
            .sorted { $0.key < $1.key }
    }()

    // MARK: - Init

    init(records: [GameProgressRecord], userName: String, tier: MembershipTier, isDarkMode: Bool) {
        self.records = records
        self.userName = userName
        self.tier = tier
        self.isDark = isDarkMode
    }

    // MARK: - Build

    func build() -> Data {
        let renderer = UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: pageWidth, height: pageHeight))

        return renderer.pdfData { context in
            pageNumber = 0
            beginNewPage(context: context)
            var y = margin

            // Header card (first page only)
            y = drawHeader(context: context, y: y)
            y += 14

            // Summary stats card
            y = ensureSpace(needed: 130, y: y, context: context)
            y = drawSummaryCard(context: context, y: y)
            y += 14

            // Game breakdown card with gradient bars
            let gameCardHeight = CGFloat(grouped.count) * 44 + 70
            y = ensureSpace(needed: min(gameCardHeight, 280), y: y, context: context)
            y = drawGameBreakdownCard(context: context, y: y)
            y += 14

            // Accuracy rings card
            let ringsRows = ceil(Double(grouped.count) / 3.0)
            let ringsCardHeight = ringsRows * 108 + 52
            y = ensureSpace(needed: min(CGFloat(ringsCardHeight), 340), y: y, context: context)
            y = drawAccuracyRingsCard(context: context, y: y)
            y += 14

            // Recent sessions card
            y = ensureSpace(needed: 200, y: y, context: context)
            y = drawRecentSessionsCard(context: context, y: y)

            // Draw footer on all pages
            drawFooter(context: context)
        }
    }

    // MARK: - Page Management

    private func beginNewPage(context: UIGraphicsPDFRendererContext) {
        // Draw footer on previous page if not first
        if pageNumber > 0 {
            drawFooter(context: context)
        }
        context.beginPage()
        pageNumber += 1
        fillPageBackground()
    }

    private func fillPageBackground() {
        guard let ctx = UIGraphicsGetCurrentContext() else { return }
        ctx.setFillColor(pageBg.cgColor)
        ctx.fill(CGRect(x: 0, y: 0, width: pageWidth, height: pageHeight))
    }

    private func ensureSpace(needed: CGFloat, y: CGFloat, context: UIGraphicsPDFRendererContext) -> CGFloat {
        if y + needed > safeBottom {
            beginNewPage(context: context)
            return margin + 10 // Small top margin on continuation pages
        }
        return y
    }

    // MARK: - Header

    private func drawHeader(context: UIGraphicsPDFRendererContext, y: CGFloat) -> CGFloat {
        guard let ctx = UIGraphicsGetCurrentContext() else { return y }
        let isRoyal = tier == .royal
        let cardHeight: CGFloat = 170
        let cardRect = CGRect(x: margin, y: y, width: contentWidth, height: cardHeight)

        // Full gradient card background with tier colors
        drawGradientCard(in: cardRect, context: ctx)

        // Royal: gold shimmer bands (diagonal light streaks)
        if isRoyal {
            ctx.saveGState()
            let clipPath = UIBezierPath(roundedRect: cardRect, cornerRadius: cardCornerRadius)
            ctx.addPath(clipPath.cgPath)
            ctx.clip()
            let goldShimmer = UIColor(red: 1.0, green: 0.92, blue: 0.6, alpha: 1).cgColor
            for i in 0..<3 {
                let bandX = cardRect.minX + CGFloat(i) * 180 + 80
                ctx.saveGState()
                ctx.setFillColor(UIColor(cgColor: goldShimmer).withAlphaComponent(0.04).cgColor)
                let bandPath = CGMutablePath()
                bandPath.move(to: CGPoint(x: bandX, y: cardRect.minY))
                bandPath.addLine(to: CGPoint(x: bandX + 40, y: cardRect.minY))
                bandPath.addLine(to: CGPoint(x: bandX - 30, y: cardRect.maxY))
                bandPath.addLine(to: CGPoint(x: bandX - 70, y: cardRect.maxY))
                bandPath.closeSubpath()
                ctx.addPath(bandPath)
                ctx.fillPath()
                ctx.restoreGState()
            }
            ctx.restoreGState()
        }

        // Decorative concentric arcs — top-right corner (astrolabe motif)
        ctx.saveGState()
        let arcClip = UIBezierPath(roundedRect: cardRect, cornerRadius: cardCornerRadius)
        ctx.addPath(arcClip.cgPath)
        ctx.clip()
        let arcCenter = CGPoint(x: cardRect.maxX - 30, y: cardRect.minY + 30)
        let arcCount = isRoyal ? 6 : 4
        for i in 0..<arcCount {
            let r: CGFloat = 40 + CGFloat(i) * 28
            let alpha: CGFloat = isRoyal
                ? 0.10 - CGFloat(i) * 0.014
                : 0.06 - CGFloat(i) * 0.012
            ctx.setStrokeColor(UIColor.white.withAlphaComponent(max(alpha, 0.01)).cgColor)
            ctx.setLineWidth(isRoyal ? 1.0 : 0.8)
            ctx.addArc(center: arcCenter, radius: r, startAngle: .pi * 0.6, endAngle: .pi * 1.2, clockwise: false)
            ctx.strokePath()
        }
        ctx.restoreGState()

        // Decorative thin line — top-left accent
        let ornY = cardRect.minY + 20
        let ornAlpha: CGFloat = isRoyal ? 0.30 : 0.18
        ctx.saveGState()
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(ornAlpha).cgColor)
        ctx.setLineWidth(0.5)
        ctx.move(to: CGPoint(x: cardRect.minX + cardPadding, y: ornY))
        ctx.addLine(to: CGPoint(x: cardRect.minX + cardPadding + 50, y: ornY))
        ctx.strokePath()
        ctx.restoreGState()

        // Small diamond separator
        let diamondAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 6, weight: .regular),
            .foregroundColor: UIColor.white.withAlphaComponent(isRoyal ? 0.5 : 0.3)
        ]
        let diamondStr = NSAttributedString(string: "\u{25C6}", attributes: diamondAttrs)
        let diamondSize = diamondStr.size()
        diamondStr.draw(at: CGPoint(x: cardRect.minX + cardPadding + 56, y: ornY - diamondSize.height / 2))

        ctx.saveGState()
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(ornAlpha).cgColor)
        ctx.setLineWidth(0.5)
        ctx.move(to: CGPoint(x: cardRect.minX + cardPadding + 68, y: ornY))
        ctx.addLine(to: CGPoint(x: cardRect.minX + cardPadding + 118, y: ornY))
        ctx.strokePath()
        ctx.restoreGState()

        // Logo — bold and prominent
        let logoAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 30, weight: .heavy),
            .foregroundColor: UIColor.white,
            .kern: -0.5 as NSNumber
        ]
        "LumenLingo".draw(at: CGPoint(x: cardRect.minX + cardPadding, y: cardRect.minY + 30), withAttributes: logoAttrs)

        // Subtitle — track-spaced, muted white
        let subtitleAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 10, weight: .semibold),
            .foregroundColor: UIColor.white.withAlphaComponent(0.45),
            .kern: 4.0 as NSNumber
        ]
        "LEARNING REPORT".draw(at: CGPoint(x: cardRect.minX + cardPadding + 2, y: cardRect.minY + 66), withAttributes: subtitleAttrs)

        // Tier badge pill — top-right
        if isRoyal {
            // Royal: golden badge with glow
            let royalBadgeText = "ROYAL"
            let royalBadgeAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 11, weight: .heavy),
                .foregroundColor: UIColor(red: 0.15, green: 0.08, blue: 0.02, alpha: 1),
                .kern: 1.5 as NSNumber
            ]
            let royalStr = NSAttributedString(string: royalBadgeText, attributes: royalBadgeAttrs)
            let royalSize = royalStr.size()
            let rPadH: CGFloat = 22
            let rPadV: CGFloat = 8
            let rW = royalSize.width + rPadH
            let rH = royalSize.height + rPadV
            let royalRect = CGRect(
                x: cardRect.maxX - cardPadding - rW,
                y: cardRect.minY + 34,
                width: rW,
                height: rH
            )
            // Gold glow behind badge
            ctx.saveGState()
            ctx.setShadow(offset: .zero, blur: 10, color: UIColor(red: 0.98, green: 0.82, blue: 0.2, alpha: 0.4).cgColor)
            let royalPath = UIBezierPath(roundedRect: royalRect, cornerRadius: rH / 2)
            ctx.setFillColor(UIColor(red: 0.98, green: 0.82, blue: 0.2, alpha: 1).cgColor)
            ctx.addPath(royalPath.cgPath)
            ctx.fillPath()
            ctx.restoreGState()
            // Gold gradient fill
            ctx.saveGState()
            ctx.addPath(royalPath.cgPath)
            ctx.clip()
            let goldCS = CGColorSpaceCreateDeviceRGB()
            let goldColors: [CGColor] = [
                UIColor(red: 1.0, green: 0.92, blue: 0.55, alpha: 1).cgColor,
                UIColor(red: 0.96, green: 0.78, blue: 0.18, alpha: 1).cgColor,
                UIColor(red: 0.90, green: 0.68, blue: 0.12, alpha: 1).cgColor
            ]
            if let goldGrad = CGGradient(colorsSpace: goldCS, colors: goldColors as CFArray, locations: [0, 0.5, 1]) {
                ctx.drawLinearGradient(goldGrad, start: royalRect.origin, end: CGPoint(x: royalRect.maxX, y: royalRect.maxY), options: [])
            }
            ctx.restoreGState()
            royalStr.draw(at: CGPoint(x: royalRect.minX + rPadH / 2, y: royalRect.minY + rPadV / 2))
        } else {
            let badgeAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 10, weight: .bold),
                .foregroundColor: UIColor.white,
                .kern: 0.8 as NSNumber
            ]
            let badgeStr = NSAttributedString(string: tierLabel.uppercased(), attributes: badgeAttrs)
            let badgeSize = badgeStr.size()
            let badgePadH: CGFloat = 18
            let badgePadV: CGFloat = 7
            let badgeW = badgeSize.width + badgePadH
            let badgeH = badgeSize.height + badgePadV
            let badgeRect = CGRect(
                x: cardRect.maxX - cardPadding - badgeW,
                y: cardRect.minY + 36,
                width: badgeW,
                height: badgeH
            )
            ctx.saveGState()
            let badgePath = UIBezierPath(roundedRect: badgeRect, cornerRadius: badgeH / 2)
            ctx.setFillColor(UIColor.white.withAlphaComponent(0.15).cgColor)
            ctx.addPath(badgePath.cgPath)
            ctx.fillPath()
            ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.25).cgColor)
            ctx.setLineWidth(0.5)
            ctx.addPath(badgePath.cgPath)
            ctx.strokePath()
            ctx.restoreGState()
            badgeStr.draw(at: CGPoint(x: badgeRect.minX + badgePadH / 2, y: badgeRect.minY + badgePadV / 2))
        }

        // Bottom info strip — frosted panel at the bottom of the gradient card
        let stripH: CGFloat = 44
        let stripRect = CGRect(x: cardRect.minX, y: cardRect.maxY - stripH, width: cardRect.width, height: stripH)
        ctx.saveGState()
        let stripClip = UIBezierPath(roundedRect: cardRect, cornerRadius: cardCornerRadius)
        ctx.addPath(stripClip.cgPath)
        ctx.clip()
        ctx.setFillColor(UIColor.black.withAlphaComponent(isRoyal ? 0.22 : 0.18).cgColor)
        ctx.fill(stripRect)
        // Thin separator line at top of strip
        let sepColor = isRoyal
            ? UIColor(red: 0.98, green: 0.82, blue: 0.2, alpha: 0.2)
            : UIColor.white.withAlphaComponent(0.1)
        ctx.setStrokeColor(sepColor.cgColor)
        ctx.setLineWidth(0.5)
        ctx.move(to: CGPoint(x: stripRect.minX + cardPadding, y: stripRect.minY))
        ctx.addLine(to: CGPoint(x: stripRect.maxX - cardPadding, y: stripRect.minY))
        ctx.strokePath()
        ctx.restoreGState()

        // Strip left: "PREPARED FOR" + user name
        if !userName.isEmpty {
            let labelAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 7, weight: .medium),
                .foregroundColor: UIColor.white.withAlphaComponent(0.4),
                .kern: 1.5 as NSNumber
            ]
            "PREPARED FOR".draw(at: CGPoint(x: cardRect.minX + cardPadding, y: stripRect.minY + 8), withAttributes: labelAttrs)

            let nameAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 14, weight: .semibold),
                .foregroundColor: UIColor.white.withAlphaComponent(0.92)
            ]
            userName.draw(at: CGPoint(x: cardRect.minX + cardPadding + 88, y: stripRect.minY + 6), withAttributes: nameAttrs)
        }

        // Strip right: date + session count
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .long
        let dateAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 10, weight: .medium),
            .foregroundColor: UIColor.white.withAlphaComponent(0.55)
        ]
        let dateStr = NSAttributedString(string: dateFormatter.string(from: .now), attributes: dateAttrs)
        let dateSize = dateStr.size()
        dateStr.draw(at: CGPoint(x: cardRect.maxX - cardPadding - dateSize.width, y: stripRect.minY + 6))

        let countAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 8, weight: .regular),
            .foregroundColor: UIColor.white.withAlphaComponent(0.35),
            .kern: 0.5 as NSNumber
        ]
        let countStr = NSAttributedString(string: "\(records.count) sessions recorded", attributes: countAttrs)
        let countSize = countStr.size()
        countStr.draw(at: CGPoint(x: cardRect.maxX - cardPadding - countSize.width, y: stripRect.minY + 22))

        return y + cardHeight + 12
    }

    // MARK: - Summary Card

    private func drawSummaryCard(context: UIGraphicsPDFRendererContext, y: CGFloat) -> CGFloat {
        guard let ctx = UIGraphicsGetCurrentContext() else { return y }
        let cardHeight: CGFloat = 110
        let cardRect = CGRect(x: margin, y: y, width: contentWidth, height: cardHeight)

        drawCard(in: cardRect, context: ctx)
        drawCardTitle("Your Progress at a Glance", in: cardRect, context: ctx)

        // 4-column single row — KPI dashboard strip
        let gridY = cardRect.minY + 42
        let cellGap: CGFloat = 10
        let innerWidth = contentWidth - cardPadding * 2
        let cellW = (innerWidth - cellGap * 3) / 4
        let cellH: CGFloat = 54

        let stats: [(String, String, UIColor)] = [
            ("\(totalXP)", "Total XP", accuracyColor(for: 100)),
            ("\(records.count)", "Sessions", UIColor(cgColor: tierHexColors[0])),
            (String(format: "%.1f%%", avgAccuracy), "Accuracy", accuracyColor(for: avgAccuracy)),
            (formatTime(totalTime), "Study Time", UIColor(cgColor: tierHexColors.last ?? tierHexColors[0]))
        ]

        for (i, stat) in stats.enumerated() {
            let x = cardRect.minX + cardPadding + CGFloat(i) * (cellW + cellGap)

            // Subtle cell background
            let cellRect = CGRect(x: x, y: gridY, width: cellW, height: cellH)
            ctx.saveGState()
            let cellBg = isDark ? UIColor.white.withAlphaComponent(0.04) : UIColor.black.withAlphaComponent(0.025)
            ctx.setFillColor(cellBg.cgColor)
            let cellPath = UIBezierPath(roundedRect: cellRect, cornerRadius: 10)
            ctx.addPath(cellPath.cgPath)
            ctx.fillPath()
            ctx.restoreGState()

            // Top accent line (2px gradient at top of cell)
            let accentRect = CGRect(x: x + 12, y: gridY, width: cellW - 24, height: 2)
            drawHorizontalGradient(in: accentRect, colors: [stat.2.cgColor, stat.2.withAlphaComponent(0.3).cgColor], cornerRadius: 1, context: ctx)

            // Stat value — centered in cell
            let valueAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 20, weight: .bold),
                .foregroundColor: stat.2
            ]
            let valueStr = NSAttributedString(string: stat.0, attributes: valueAttrs)
            let valueSize = valueStr.size()
            valueStr.draw(at: CGPoint(x: x + (cellW - valueSize.width) / 2, y: gridY + 10))

            // Stat label — centered
            let labelAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 9, weight: .semibold),
                .foregroundColor: secondaryText,
                .kern: 0.5 as NSNumber
            ]
            let labelStr = NSAttributedString(string: stat.1.uppercased(), attributes: labelAttrs)
            let labelSize = labelStr.size()
            labelStr.draw(at: CGPoint(x: x + (cellW - labelSize.width) / 2, y: gridY + 34))
        }

        return y + cardHeight
    }

    // MARK: - Game Breakdown Card

    private func drawGameBreakdownCard(context: UIGraphicsPDFRendererContext, y: CGFloat) -> CGFloat {
        guard let ctx = UIGraphicsGetCurrentContext() else { return y }
        let barRowH: CGFloat = 44
        let cardHeight = CGFloat(grouped.count) * barRowH + 56
        let cardRect = CGRect(x: margin, y: y, width: contentWidth, height: cardHeight)

        drawCard(in: cardRect, context: ctx)
        drawCardTitle("Game Performance", in: cardRect, context: ctx)

        let barStartX = cardRect.minX + cardPadding + 110
        let barMaxWidth = contentWidth - cardPadding * 2 - 110 - 54
        let barHeight: CGFloat = 16
        var rowY = cardRect.minY + 44

        for (gameType, gameRecords) in grouped {
            let gc = gameRecords.reduce(0) { $0 + $1.correctAnswers }
            let gq = gameRecords.reduce(0) { $0 + $1.totalQuestions }
            let gAcc = gq > 0 ? Double(gc) / Double(gq) * 100 : 0

            // Game type label
            let labelAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 12, weight: .semibold),
                .foregroundColor: primaryText
            ]
            gameType.capitalized.draw(at: CGPoint(x: cardRect.minX + cardPadding, y: rowY - 1), withAttributes: labelAttrs)

            // Session count below game name
            let countAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 9, weight: .regular),
                .foregroundColor: tertiaryText
            ]
            "\(gameRecords.count) sessions".draw(at: CGPoint(x: cardRect.minX + cardPadding, y: rowY + 14), withAttributes: countAttrs)

            // Bar background
            let barBg = CGRect(x: barStartX, y: rowY + 3, width: barMaxWidth, height: barHeight)
            ctx.saveGState()
            ctx.setFillColor((isDark ? UIColor.white.withAlphaComponent(0.06) : UIColor.black.withAlphaComponent(0.04)).cgColor)
            let bgPath = UIBezierPath(roundedRect: barBg, cornerRadius: barHeight / 2)
            ctx.addPath(bgPath.cgPath)
            ctx.fillPath()
            ctx.restoreGState()

            // Bar fill with game-specific gradient
            let fillWidth = max(0, barMaxWidth * CGFloat(gAcc / 100))
            if fillWidth > 2 {
                let fillRect = CGRect(x: barStartX, y: rowY + 3, width: fillWidth, height: barHeight)
                let gameColors = gameGradientColors(for: gameType)
                drawHorizontalGradient(in: fillRect, colors: gameColors, cornerRadius: barHeight / 2, context: ctx)
            }

            // Accuracy percentage
            let pctAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 11, weight: .bold),
                .foregroundColor: accuracyColor(for: gAcc)
            ]
            let pctStr = String(format: "%.0f%%", gAcc)
            pctStr.draw(at: CGPoint(x: barStartX + barMaxWidth + 8, y: rowY + 2), withAttributes: pctAttrs)

            rowY += barRowH

            // Page break within card if needed
            if rowY > safeBottom - 20 {
                drawCard(in: CGRect(x: margin, y: y, width: contentWidth, height: rowY - y + cardPadding), context: ctx)
                beginNewPage(context: context)
                rowY = margin + 10
            }
        }

        return y + cardHeight
    }

    // MARK: - Accuracy Rings Card

    private func drawAccuracyRingsCard(context: UIGraphicsPDFRendererContext, y: CGFloat) -> CGFloat {
        guard let ctx = UIGraphicsGetCurrentContext() else { return y }
        guard !grouped.isEmpty else { return y }

        let ringsPerRow = 3
        let ringDiameter: CGFloat = 68
        let cellWidth = (contentWidth - cardPadding * 2) / CGFloat(min(ringsPerRow, grouped.count))
        let rowHeight: CGFloat = 108
        let titleAreaH: CGFloat = 44
        let numRows = Int(ceil(Double(grouped.count) / Double(ringsPerRow)))
        let cardHeight = titleAreaH + CGFloat(numRows) * rowHeight + 8

        let cardRect = CGRect(x: margin, y: y, width: contentWidth, height: cardHeight)
        drawCard(in: cardRect, context: ctx)
        drawCardTitle("Accuracy by Category", in: cardRect, context: ctx)

        var ringY = cardRect.minY + titleAreaH

        for (i, (gameType, gameRecords)) in grouped.enumerated() {
            let col = i % ringsPerRow
            let gc = gameRecords.reduce(0) { $0 + $1.correctAnswers }
            let gq = gameRecords.reduce(0) { $0 + $1.totalQuestions }
            let gAcc = gq > 0 ? Double(gc) / Double(gq) * 100 : 0
            let rowCellWidth = (contentWidth - cardPadding * 2) / CGFloat(min(ringsPerRow, grouped.count - (i / ringsPerRow) * ringsPerRow))
            let activeCellWidth = (i / ringsPerRow < numRows - 1) ? cellWidth : rowCellWidth

            let centerX = cardRect.minX + cardPadding + activeCellWidth * CGFloat(col) + activeCellWidth / 2
            let centerY = ringY + ringDiameter / 2

            // Subtle circular glow behind ring
            let glowColor = accuracyColor(for: gAcc).withAlphaComponent(isDark ? 0.08 : 0.05)
            ctx.saveGState()
            ctx.setFillColor(glowColor.cgColor)
            let glowPath = UIBezierPath(ovalIn: CGRect(x: centerX - ringDiameter / 2 - 6, y: centerY - ringDiameter / 2 - 6, width: ringDiameter + 12, height: ringDiameter + 12))
            ctx.addPath(glowPath.cgPath)
            ctx.fillPath()
            ctx.restoreGState()

            // Draw circular progress ring
            drawProgressRing(
                center: CGPoint(x: centerX, y: centerY),
                radius: ringDiameter / 2,
                progress: gAcc / 100,
                color: accuracyColor(for: gAcc),
                context: ctx
            )

            // Accuracy text inside ring
            let accAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 14, weight: .bold),
                .foregroundColor: primaryText
            ]
            let accStr = String(format: "%.0f%%", gAcc)
            let accSize = NSAttributedString(string: accStr, attributes: accAttrs).size()
            accStr.draw(at: CGPoint(x: centerX - accSize.width / 2, y: centerY - accSize.height / 2), withAttributes: accAttrs)

            // Category label below ring
            let catAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 10, weight: .semibold),
                .foregroundColor: primaryText
            ]
            let catStr = gameType.capitalized
            let catSize = NSAttributedString(string: catStr, attributes: catAttrs).size()
            catStr.draw(at: CGPoint(x: centerX - catSize.width / 2, y: centerY + ringDiameter / 2 + 8), withAttributes: catAttrs)

            // Question count below category
            let qCountAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 8, weight: .regular),
                .foregroundColor: tertiaryText
            ]
            let qStr = "\(gq) questions"
            let qSize = NSAttributedString(string: qStr, attributes: qCountAttrs).size()
            qStr.draw(at: CGPoint(x: centerX - qSize.width / 2, y: centerY + ringDiameter / 2 + 22), withAttributes: qCountAttrs)

            // Move to next row
            if col == ringsPerRow - 1 {
                ringY += rowHeight
            }
        }

        return y + cardHeight
    }

    // MARK: - Recent Sessions Card

    private func drawRecentSessionsCard(context: UIGraphicsPDFRendererContext, y: CGFloat) -> CGFloat {
        guard let ctx = UIGraphicsGetCurrentContext() else { return y }

        let recentRecords = records.sorted(by: { $0.createdDate > $1.createdDate }).prefix(12)
        let rowHeight: CGFloat = 22
        let headerH: CGFloat = 54
        let cardHeight = headerH + CGFloat(recentRecords.count) * rowHeight + cardPadding + 4

        var cardRect = CGRect(x: margin, y: y, width: contentWidth, height: cardHeight)

        // Check if card fits on current page
        if y + cardHeight > safeBottom {
            beginNewPage(context: context)
            cardRect = CGRect(x: margin, y: margin + 10, width: contentWidth, height: cardHeight)
        }

        drawCard(in: cardRect, context: ctx)

        // Title with record count
        let titleText = records.count > 12 ? "Recent Sessions  ·  showing 12 of \(records.count)" : "Recent Sessions"
        drawCardTitle(titleText, in: cardRect, context: ctx)

        // Table header
        let headerAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 9, weight: .bold),
            .foregroundColor: secondaryText,
            .kern: 0.8 as NSNumber
        ]
        let columns: [(String, CGFloat)] = [
            ("DATE", cardRect.minX + cardPadding),
            ("GAME", cardRect.minX + cardPadding + 115),
            ("SCORE", cardRect.minX + cardPadding + 228),
            ("ACCURACY", cardRect.minX + cardPadding + 295),
            ("TIME", cardRect.minX + cardPadding + 380)
        ]
        let tableHeaderY = cardRect.minY + 40
        for (label, x) in columns {
            label.draw(at: CGPoint(x: x, y: tableHeaderY), withAttributes: headerAttrs)
        }

        // Header separator — gradient
        drawThinGradientLine(at: CGPoint(x: cardRect.minX + cardPadding, y: tableHeaderY + 15), width: contentWidth - cardPadding * 2, context: ctx)

        // Table rows
        let dateF = DateFormatter()
        dateF.dateFormat = "MMM d, yyyy"
        let rowAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 10, weight: .regular),
            .foregroundColor: primaryText
        ]
        let scoreAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.monospacedDigitSystemFont(ofSize: 10, weight: .medium),
            .foregroundColor: primaryText
        ]

        var rowY = tableHeaderY + 20
        for (idx, record) in recentRecords.enumerated() {
            // Zebra striping
            if idx % 2 == 0 {
                let stripeBg = isDark ? UIColor.white.withAlphaComponent(0.025) : UIColor.black.withAlphaComponent(0.018)
                ctx.saveGState()
                ctx.setFillColor(stripeBg.cgColor)
                let stripeRect = CGRect(x: cardRect.minX + cardPadding / 2, y: rowY - 2, width: contentWidth - cardPadding, height: rowHeight)
                let stripePath = UIBezierPath(roundedRect: stripeRect, cornerRadius: 4)
                ctx.addPath(stripePath.cgPath)
                ctx.fillPath()
                ctx.restoreGState()
            }

            // Date
            dateF.string(from: record.createdDate).draw(at: CGPoint(x: columns[0].1, y: rowY), withAttributes: rowAttrs)
            // Game
            record.gameType.capitalized.draw(at: CGPoint(x: columns[1].1, y: rowY), withAttributes: rowAttrs)
            // Score
            "\(record.score)".draw(at: CGPoint(x: columns[2].1, y: rowY), withAttributes: scoreAttrs)
            // Accuracy — colored
            let accAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.monospacedDigitSystemFont(ofSize: 10, weight: .semibold),
                .foregroundColor: accuracyColor(for: record.accuracy)
            ]
            String(format: "%.0f%%", record.accuracy).draw(at: CGPoint(x: columns[3].1, y: rowY), withAttributes: accAttrs)
            // Time
            formatTime(record.timeSpent).draw(at: CGPoint(x: columns[4].1, y: rowY), withAttributes: rowAttrs)

            rowY += rowHeight
        }

        return cardRect.minY + cardHeight
    }

    // MARK: - Footer

    private func drawFooter(context: UIGraphicsPDFRendererContext) {
        guard let ctx = UIGraphicsGetCurrentContext() else { return }
        let footerY = pageHeight - margin - 6

        // Subtle centered text only — minimal, no decorative line
        let footerAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 8, weight: .regular),
            .foregroundColor: tertiaryText,
            .kern: 0.5 as NSNumber
        ]
        let footerText = "LumenLingo  \u{00B7}  \(tierLabel) Membership  \u{00B7}  Page \(pageNumber)"
        let footerStr = NSAttributedString(string: footerText, attributes: footerAttrs)
        let footerSize = footerStr.size()
        footerStr.draw(at: CGPoint(x: pageWidth / 2 - footerSize.width / 2, y: footerY))
    }

    // MARK: - Drawing Helpers

    /// Draws a card background with rounded corners, fill, and subtle border.
    private func drawCard(in rect: CGRect, context: CGContext) {
        let path = UIBezierPath(roundedRect: rect, cornerRadius: cardCornerRadius)

        // Card shadow
        context.saveGState()
        context.setShadow(offset: CGSize(width: 0, height: 3), blur: 10, color: UIColor.black.withAlphaComponent(isDark ? 0.4 : 0.08).cgColor)
        context.setFillColor(cardBg.cgColor)
        context.addPath(path.cgPath)
        context.fillPath()
        context.restoreGState()

        // Subtle gradient overlay on card (tier tint at 5% opacity)
        context.saveGState()
        context.addPath(path.cgPath)
        context.clip()
        let tintColor = UIColor(cgColor: tierHexColors[0]).withAlphaComponent(isDark ? 0.04 : 0.03)
        context.setFillColor(tintColor.cgColor)
        context.fill(rect)
        context.restoreGState()

        // Border
        context.saveGState()
        context.setStrokeColor(cardBorder.cgColor)
        context.setLineWidth(0.5)
        context.addPath(path.cgPath)
        context.strokePath()
        context.restoreGState()
    }

    /// Draws a gradient-filled card (used for the header).
    private func drawGradientCard(in rect: CGRect, context: CGContext) {
        let path = UIBezierPath(roundedRect: rect, cornerRadius: cardCornerRadius)

        // Shadow
        context.saveGState()
        context.setShadow(offset: CGSize(width: 0, height: 4), blur: 16, color: UIColor(cgColor: tierHexColors[0]).withAlphaComponent(0.3).cgColor)
        context.setFillColor(UIColor.black.cgColor)
        context.addPath(path.cgPath)
        context.fillPath()
        context.restoreGState()

        // Gradient fill
        context.saveGState()
        context.addPath(path.cgPath)
        context.clip()

        let colorSpace = CGColorSpaceCreateDeviceRGB()
        if let gradient = CGGradient(colorsSpace: colorSpace, colors: tierHexColors as CFArray, locations: nil) {
            context.drawLinearGradient(
                gradient,
                start: CGPoint(x: rect.minX, y: rect.minY),
                end: CGPoint(x: rect.maxX, y: rect.maxY),
                options: []
            )
        }
        context.restoreGState()

    }

    /// Draws a card section title with a gradient accent bar.
    private func drawCardTitle(_ title: String, in cardRect: CGRect, context: CGContext) {
        // Gradient accent bar (pill shape)
        let barWidth: CGFloat = 3
        let barHeight: CGFloat = 16
        let barRect = CGRect(
            x: cardRect.minX + cardPadding,
            y: cardRect.minY + cardPadding + 1,
            width: barWidth,
            height: barHeight
        )
        context.saveGState()
        let barPath = UIBezierPath(roundedRect: barRect, cornerRadius: barWidth / 2)
        context.addPath(barPath.cgPath)
        context.clip()
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        if let gradient = CGGradient(colorsSpace: colorSpace, colors: tierHexColors as CFArray, locations: nil) {
            context.drawLinearGradient(gradient, start: barRect.origin, end: CGPoint(x: barRect.minX, y: barRect.maxY), options: [])
        }
        context.restoreGState()

        // Title text
        let titleAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 14, weight: .bold),
            .foregroundColor: primaryText
        ]
        title.draw(at: CGPoint(x: cardRect.minX + cardPadding + barWidth + 10, y: cardRect.minY + cardPadding), withAttributes: titleAttrs)
    }

    /// Draws a circular progress ring using Core Graphics arcs.
    private func drawProgressRing(center: CGPoint, radius: CGFloat, progress: Double, color: UIColor, context: CGContext) {
        let lineWidth: CGFloat = 5
        let r = radius - lineWidth / 2

        // Track ring (background)
        context.saveGState()
        context.setStrokeColor((isDark ? UIColor.white.withAlphaComponent(0.1) : UIColor.black.withAlphaComponent(0.07)).cgColor)
        context.setLineWidth(lineWidth)
        context.setLineCap(.round)
        context.addArc(center: center, radius: r, startAngle: 0, endAngle: .pi * 2, clockwise: false)
        context.strokePath()
        context.restoreGState()

        // Progress arc
        if progress > 0 {
            context.saveGState()
            context.setStrokeColor(color.cgColor)
            context.setLineWidth(lineWidth)
            context.setLineCap(.round)
            let startAngle: CGFloat = -.pi / 2
            let endAngle = startAngle + .pi * 2 * CGFloat(min(progress, 1.0))
            context.addArc(center: center, radius: r, startAngle: startAngle, endAngle: endAngle, clockwise: false)
            context.strokePath()
            context.restoreGState()
        }
    }

    /// Draws a horizontal gradient in a rounded rect.
    private func drawHorizontalGradient(in rect: CGRect, colors: [CGColor], cornerRadius: CGFloat, context: CGContext) {
        context.saveGState()
        let path = UIBezierPath(roundedRect: rect, cornerRadius: cornerRadius)
        context.addPath(path.cgPath)
        context.clip()
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        if let gradient = CGGradient(colorsSpace: colorSpace, colors: colors as CFArray, locations: nil) {
            context.drawLinearGradient(gradient, start: CGPoint(x: rect.minX, y: rect.midY), end: CGPoint(x: rect.maxX, y: rect.midY), options: [])
        }
        context.restoreGState()
    }

    /// Draws a thin decorative gradient line.
    private func drawThinGradientLine(at point: CGPoint, width: CGFloat, context: CGContext) {
        let lineH: CGFloat = 0.5
        let rect = CGRect(x: point.x, y: point.y, width: width, height: lineH)
        drawHorizontalGradient(in: rect, colors: tierHexColors, cornerRadius: 0, context: context)
    }

    // MARK: - Color Helpers

    private func accuracyColor(for accuracy: Double) -> UIColor {
        if accuracy >= 80 { return UIColor(red: 0.16, green: 0.80, blue: 0.45, alpha: 1) }     // Green
        if accuracy >= 60 { return UIColor(red: 0.96, green: 0.62, blue: 0.04, alpha: 1) }     // Amber
        return UIColor(red: 0.94, green: 0.27, blue: 0.27, alpha: 1)                            // Red
    }

    private func gameGradientColors(for gameType: String) -> [CGColor] {
        switch gameType.lowercased() {
        case "flashcards":
            return [
                UIColor(red: 0.24, green: 0.51, blue: 0.96, alpha: 1).cgColor,
                UIColor(red: 0.06, green: 0.72, blue: 0.83, alpha: 1).cgColor
            ]
        case "grammar":
            return [
                UIColor(red: 0.93, green: 0.29, blue: 0.60, alpha: 1).cgColor,
                UIColor(red: 0.98, green: 0.42, blue: 0.52, alpha: 1).cgColor
            ]
        case "wordbuilder", "word_builder":
            return [
                UIColor(red: 0.98, green: 0.75, blue: 0.14, alpha: 1).cgColor,
                UIColor(red: 0.98, green: 0.55, blue: 0.09, alpha: 1).cgColor
            ]
        default:
            return [
                UIColor(red: 0.40, green: 0.73, blue: 0.42, alpha: 1).cgColor,
                UIColor(red: 0.06, green: 0.72, blue: 0.83, alpha: 1).cgColor
            ]
        }
    }

    private func formatTime(_ seconds: Int) -> String {
        if seconds < 60 { return "\(seconds)s" }
        let mins = seconds / 60
        if mins < 60 { return "\(mins)m" }
        let hrs = mins / 60
        let remainMins = mins % 60
        return "\(hrs)h \(remainMins)m"
    }
}

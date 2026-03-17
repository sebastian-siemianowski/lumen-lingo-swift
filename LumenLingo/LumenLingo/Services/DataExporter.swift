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
        let cardHeight: CGFloat = 116
        let cardRect = CGRect(x: margin, y: y, width: contentWidth, height: cardHeight)

        // Draw gradient header card
        drawGradientCard(in: cardRect, context: ctx)

        // Decorative diamond accent ◆ before logo
        let diamondAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 10, weight: .regular),
            .foregroundColor: UIColor.white.withAlphaComponent(0.6)
        ]
        "◆".draw(at: CGPoint(x: cardRect.minX + cardPadding, y: cardRect.minY + 20), withAttributes: diamondAttrs)

        // Logo text
        let logoAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 26, weight: .black, width: .expanded),
            .foregroundColor: UIColor.white
        ]
        "LumenLingo".draw(at: CGPoint(x: cardRect.minX + cardPadding + 18, y: cardRect.minY + 14), withAttributes: logoAttrs)

        // Tier badge pill — right of logo on same line
        let badgeText = "\(tier.emoji) \(tier.displayName)"
        let badgeAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 9, weight: .bold),
            .foregroundColor: UIColor.white
        ]
        let badgeStr = NSAttributedString(string: badgeText, attributes: badgeAttrs)
        let badgeSize = badgeStr.size()
        let badgeRect = CGRect(
            x: cardRect.maxX - cardPadding - badgeSize.width - 14,
            y: cardRect.minY + 18,
            width: badgeSize.width + 14,
            height: badgeSize.height + 6
        )
        ctx.saveGState()
        ctx.setFillColor(UIColor.white.withAlphaComponent(0.18).cgColor)
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.25).cgColor)
        ctx.setLineWidth(0.5)
        let badgePath = UIBezierPath(roundedRect: badgeRect, cornerRadius: badgeRect.height / 2)
        ctx.addPath(badgePath.cgPath)
        ctx.drawPath(using: .fillStroke)
        ctx.restoreGState()
        badgeStr.draw(at: CGPoint(x: badgeRect.minX + 7, y: badgeRect.minY + 3))

        // Subtitle with letter-spacing
        let subtitleAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 10, weight: .medium),
            .foregroundColor: UIColor.white.withAlphaComponent(0.55),
            .kern: 3.0 as NSNumber
        ]
        "LEARNING REPORT".draw(at: CGPoint(x: cardRect.minX + cardPadding + 18, y: cardRect.minY + 48), withAttributes: subtitleAttrs)

        // Thin white divider line
        let dividerY = cardRect.minY + 66
        ctx.saveGState()
        ctx.setStrokeColor(UIColor.white.withAlphaComponent(0.15).cgColor)
        ctx.setLineWidth(0.5)
        ctx.move(to: CGPoint(x: cardRect.minX + cardPadding, y: dividerY))
        ctx.addLine(to: CGPoint(x: cardRect.maxX - cardPadding, y: dividerY))
        ctx.strokePath()
        ctx.restoreGState()

        // Bottom row: user name on left, date on right
        let bottomRowY = dividerY + 12
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .long

        if !userName.isEmpty {
            let nameAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 12, weight: .semibold),
                .foregroundColor: UIColor.white.withAlphaComponent(0.9)
            ]
            let nameStr = NSAttributedString(string: "Prepared for \(userName)", attributes: nameAttrs)
            nameStr.draw(at: CGPoint(x: cardRect.minX + cardPadding, y: bottomRowY))
        }

        let dateAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 10, weight: .regular),
            .foregroundColor: UIColor.white.withAlphaComponent(0.55)
        ]
        let dateStr = NSAttributedString(string: dateFormatter.string(from: .now), attributes: dateAttrs)
        let dateSize = dateStr.size()
        dateStr.draw(at: CGPoint(x: cardRect.maxX - cardPadding - dateSize.width, y: bottomRowY + 1))

        // Thin gradient line below header
        drawThinGradientLine(at: CGPoint(x: margin + 20, y: y + cardHeight + 5), width: contentWidth - 40, context: ctx)

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
        let footerY = pageHeight - margin - 14

        // Thin gradient line
        drawThinGradientLine(at: CGPoint(x: margin + 20, y: footerY - 8), width: contentWidth - 40, context: ctx)

        // Page number centered in a subtle pill
        let pageText = "Page \(pageNumber)"
        let pageAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 9, weight: .medium),
            .foregroundColor: tertiaryText
        ]
        let pageStr = NSAttributedString(string: pageText, attributes: pageAttrs)
        let pageSize = pageStr.size()
        pageStr.draw(at: CGPoint(x: pageWidth / 2 - pageSize.width / 2, y: footerY))

        // Branding on left — slightly larger
        let brandAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 9, weight: .regular),
            .foregroundColor: tertiaryText
        ]
        "LumenLingo".draw(at: CGPoint(x: margin, y: footerY), withAttributes: brandAttrs)

        // Tier indicator on right
        let tierAttrs: [NSAttributedString.Key: Any] = [
            .font: UIFont.systemFont(ofSize: 9, weight: .medium),
            .foregroundColor: tertiaryText
        ]
        let tierStr = NSAttributedString(string: "\(tier.emoji) \(tier.displayName)", attributes: tierAttrs)
        let tierSize = tierStr.size()
        tierStr.draw(at: CGPoint(x: pageWidth - margin - tierSize.width, y: footerY))
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

        // Subtle white highlight at top
        context.saveGState()
        context.addPath(path.cgPath)
        context.clip()
        let highlightRect = CGRect(x: rect.minX, y: rect.minY, width: rect.width, height: rect.height * 0.4)
        context.setFillColor(UIColor.white.withAlphaComponent(0.08).cgColor)
        context.fill(highlightRect)
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

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

    /// Generates a PDF report from game progress records.
    static func exportPDF(records: [GameProgressRecord]) -> Data {
        let pageWidth: CGFloat = 612 // US Letter
        let pageHeight: CGFloat = 792
        let margin: CGFloat = 50
        let contentWidth = pageWidth - margin * 2

        let renderer = UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: pageWidth, height: pageHeight))

        return renderer.pdfData { context in
            context.beginPage()
            var y: CGFloat = margin

            // Title
            let titleAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 24, weight: .bold),
                .foregroundColor: UIColor.label
            ]
            let title = "LumenLingo Learning Report"
            title.draw(at: CGPoint(x: margin, y: y), withAttributes: titleAttrs)
            y += 36

            // Date
            let dateFormatter = DateFormatter()
            dateFormatter.dateStyle = .long
            let dateStr = "Generated: \(dateFormatter.string(from: .now))"
            let dateAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 12),
                .foregroundColor: UIColor.secondaryLabel
            ]
            dateStr.draw(at: CGPoint(x: margin, y: y), withAttributes: dateAttrs)
            y += 30

            // Summary stats
            let totalXP = records.reduce(0) { $0 + $1.score }
            let totalCorrect = records.reduce(0) { $0 + $1.correctAnswers }
            let totalQuestions = records.reduce(0) { $0 + $1.totalQuestions }
            let avgAccuracy = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0
            let totalTime = records.reduce(0) { $0 + $1.timeSpent }

            let headingAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 16, weight: .semibold),
                .foregroundColor: UIColor.label
            ]
            let bodyAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.systemFont(ofSize: 12),
                .foregroundColor: UIColor.label
            ]

            "Summary".draw(at: CGPoint(x: margin, y: y), withAttributes: headingAttrs)
            y += 24

            let summaryLines = [
                "Total Sessions: \(records.count)",
                "Total XP: \(totalXP)",
                "Average Accuracy: \(String(format: "%.1f", avgAccuracy))%",
                "Total Time: \(totalTime / 60) minutes"
            ]
            for line in summaryLines {
                line.draw(at: CGPoint(x: margin + 10, y: y), withAttributes: bodyAttrs)
                y += 18
            }
            y += 16

            // Game type breakdown
            "Performance by Game Type".draw(at: CGPoint(x: margin, y: y), withAttributes: headingAttrs)
            y += 24

            let grouped = Dictionary(grouping: records) { $0.gameType }
            for (gameType, gameRecords) in grouped.sorted(by: { $0.key < $1.key }) {
                let gc = gameRecords.reduce(0) { $0 + $1.correctAnswers }
                let gq = gameRecords.reduce(0) { $0 + $1.totalQuestions }
                let gAcc = gq > 0 ? Double(gc) / Double(gq) * 100 : 0
                let gXP = gameRecords.reduce(0) { $0 + $1.score }

                let line = "\(gameType.capitalized): \(gameRecords.count) sessions, \(gXP) XP, \(String(format: "%.1f", gAcc))% accuracy"
                line.draw(at: CGPoint(x: margin + 10, y: y), withAttributes: bodyAttrs)
                y += 18

                if y > pageHeight - margin - 40 {
                    context.beginPage()
                    y = margin
                }
            }
            y += 16

            // Accuracy bar chart
            if y + 120 > pageHeight - margin {
                context.beginPage()
                y = margin
            }

            "Accuracy by Game Type".draw(at: CGPoint(x: margin, y: y), withAttributes: headingAttrs)
            y += 24

            let barHeight: CGFloat = 16
            let barSpacing: CGFloat = 6
            let maxBarWidth = contentWidth - 120

            for (gameType, gameRecords) in grouped.sorted(by: { $0.key < $1.key }) {
                let gc = gameRecords.reduce(0) { $0 + $1.correctAnswers }
                let gq = gameRecords.reduce(0) { $0 + $1.totalQuestions }
                let gAcc = gq > 0 ? Double(gc) / Double(gq) * 100 : 0

                // Label
                let label = gameType.capitalized
                label.draw(at: CGPoint(x: margin + 10, y: y), withAttributes: bodyAttrs)

                // Bar background
                let barX = margin + 100
                let bgRect = CGRect(x: barX, y: y + 2, width: maxBarWidth, height: barHeight)
                UIColor.systemGray5.setFill()
                UIBezierPath(roundedRect: bgRect, cornerRadius: 3).fill()

                // Bar fill
                let fillWidth = max(0, maxBarWidth * CGFloat(gAcc / 100))
                let fillRect = CGRect(x: barX, y: y + 2, width: fillWidth, height: barHeight)
                let barColor: UIColor = gAcc >= 80 ? .systemGreen : gAcc >= 60 ? .systemOrange : .systemRed
                barColor.setFill()
                UIBezierPath(roundedRect: fillRect, cornerRadius: 3).fill()

                // Percentage
                let pctStr = "\(String(format: "%.0f", gAcc))%"
                let pctAttrs: [NSAttributedString.Key: Any] = [
                    .font: UIFont.systemFont(ofSize: 10, weight: .medium),
                    .foregroundColor: UIColor.label
                ]
                pctStr.draw(at: CGPoint(x: barX + fillWidth + 6, y: y + 2), withAttributes: pctAttrs)

                y += barHeight + barSpacing

                if y > pageHeight - margin - 40 {
                    context.beginPage()
                    y = margin
                }
            }

            // Session table (recent)
            y += 16
            if y + 40 > pageHeight - margin {
                context.beginPage()
                y = margin
            }

            "Recent Sessions".draw(at: CGPoint(x: margin, y: y), withAttributes: headingAttrs)
            y += 24

            let smallAttrs: [NSAttributedString.Key: Any] = [
                .font: UIFont.monospacedSystemFont(ofSize: 9, weight: .regular),
                .foregroundColor: UIColor.label
            ]
            let headerStr = "Date                    Game         Score  Acc    Time"
            headerStr.draw(at: CGPoint(x: margin + 10, y: y), withAttributes: smallAttrs)
            y += 16

            let dateF = DateFormatter()
            dateF.dateFormat = "yyyy-MM-dd HH:mm"

            for record in records.sorted(by: { $0.createdDate > $1.createdDate }).prefix(20) {
                let d = dateF.string(from: record.createdDate)
                let g = record.gameType.padding(toLength: 12, withPad: " ", startingAt: 0)
                let s = String(record.score).padding(toLength: 6, withPad: " ", startingAt: 0)
                let a = String(format: "%.0f%%", record.accuracy).padding(toLength: 6, withPad: " ", startingAt: 0)
                let t = "\(record.timeSpent)s"
                let row = "\(d)  \(g)  \(s)\(a)  \(t)"
                row.draw(at: CGPoint(x: margin + 10, y: y), withAttributes: smallAttrs)
                y += 14

                if y > pageHeight - margin - 20 {
                    context.beginPage()
                    y = margin
                }
            }
        }
    }

    // MARK: - Helpers

    private static func csvEscape(_ value: String) -> String {
        if value.contains(",") || value.contains("\"") || value.contains("\n") {
            return "\"\(value.replacingOccurrences(of: "\"", with: "\"\""))\""
        }
        return value
    }
}

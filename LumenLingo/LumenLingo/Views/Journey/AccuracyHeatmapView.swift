import SwiftUI
import SwiftData

// MARK: - Accuracy Heatmap (Elite+)

/// Grid of game categories colour-coded by accuracy percentage.
/// Gated to Elite tier and above.
struct AccuracyHeatmapView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let allProgress: [GameProgressRecord]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private struct CategoryAccuracy: Identifiable {
        let id: String
        let name: String
        let accuracy: Double
        let sessions: Int
    }

    private var categories: [CategoryAccuracy] {
        let grouped = Dictionary(grouping: allProgress) { $0.categoryKey }
        return grouped.map { key, records in
            let totalCorrect = records.reduce(0) { $0 + $1.correctAnswers }
            let totalQuestions = records.reduce(0) { $0 + $1.totalQuestions }
            let accuracy = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0
            let name = key
                .replacingOccurrences(of: "_", with: " ")
                .split(separator: " ")
                .map { $0.prefix(1).uppercased() + $0.dropFirst() }
                .joined(separator: " ")
            return CategoryAccuracy(id: key, name: name, accuracy: accuracy, sessions: records.count)
        }
        .sorted { $0.accuracy > $1.accuracy }
    }

    private func accuracyColor(_ accuracy: Double) -> Color {
        if accuracy >= 90 { return Color(hex: "#10b981") }
        if accuracy >= 75 { return Color(hex: "#06b6d4") }
        if accuracy >= 60 { return Color(hex: "#f59e0b") }
        if accuracy >= 40 { return Color(hex: "#f97316") }
        return Color(hex: "#ef4444")
    }

    var body: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                Text(L.accuracyByCategory)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

                if categories.isEmpty {
                    Text(L.playSessionsToSeeData)
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .padding(.vertical, 20)
                } else {
                    LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 8) {
                        ForEach(categories) { cat in
                            heatmapCell(cat)
                        }
                    }
                }

                // Legend
                HStack(spacing: 12) {
                    legendDot(color: Color(hex: "#10b981"), label: "90%+")
                    legendDot(color: Color(hex: "#06b6d4"), label: "75%+")
                    legendDot(color: Color(hex: "#f59e0b"), label: "60%+")
                    legendDot(color: Color(hex: "#ef4444"), label: "<60%")
                }
                .frame(maxWidth: .infinity, alignment: .center)
                .padding(.top, 4)
            }
        }
    }

    private func heatmapCell(_ cat: CategoryAccuracy) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(cat.name)
                .font(.system(size: 11, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.85) : .caribbeanInk)
                .lineLimit(1)

            HStack(spacing: 4) {
                Text("\(Int(cat.accuracy))%")
                    .font(.system(size: 18, weight: .bold, design: .rounded))
                    .foregroundStyle(accuracyColor(cat.accuracy))

                Spacer()

                Text("\(cat.sessions)")
                    .font(.system(size: 10, weight: .medium, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                + Text(" " + L.sessions.lowercased())
                    .font(.system(size: 9))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
            }
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(accuracyColor(cat.accuracy).opacity(isDark ? 0.12 : 0.08))
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .strokeBorder(accuracyColor(cat.accuracy).opacity(0.2), lineWidth: 1)
                )
        )
    }

    private func legendDot(color: Color, label: String) -> some View {
        HStack(spacing: 3) {
            Circle()
                .fill(color)
                .frame(width: 6, height: 6)
            Text(label)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
        }
    }
}

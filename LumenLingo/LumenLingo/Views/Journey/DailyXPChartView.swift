import SwiftUI
import SwiftData

// MARK: - Daily XP Chart (Pro+)

/// Bar chart showing XP earned over the last 7 days.
/// Gated to Pro tier and above.
struct DailyXPChartView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let allProgress: [GameProgressRecord]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private var dailyData: [(label: String, xp: Int)] {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: .now)
        let formatter = DateFormatter()
        formatter.dateFormat = "EEE"

        return (0..<7).reversed().map { daysAgo in
            let date = calendar.date(byAdding: .day, value: -daysAgo, to: today)!
            let nextDate = calendar.date(byAdding: .day, value: 1, to: date)!
            let dayXP = allProgress
                .filter { $0.createdDate >= date && $0.createdDate < nextDate }
                .reduce(0) { $0 + $1.score }
            return (formatter.string(from: date), dayXP)
        }
    }

    private var maxXP: Int { max(dailyData.map(\.xp).max() ?? 1, 1) }

    var body: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                Text(L.last7Days)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

                HStack(alignment: .bottom, spacing: 8) {
                    ForEach(Array(dailyData.enumerated()), id: \.offset) { _, day in
                        VStack(spacing: 4) {
                            Text("\(day.xp)")
                                .font(.system(size: 9, weight: .bold, design: .rounded))
                                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                                .frame(height: 14)

                            ZStack(alignment: .bottom) {
                                // Track trough — frost recessed base
                                if !isDark {
                                    RoundedRectangle(cornerRadius: 4)
                                        .fill(Color(red: 0.92, green: 0.93, blue: 0.95))
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 4)
                                                .fill(
                                                    LinearGradient(
                                                        colors: [
                                                            Color(red: 0.78, green: 0.80, blue: 0.85).opacity(0.25),
                                                            Color.clear,
                                                            Color.white.opacity(0.10)
                                                        ],
                                                        startPoint: .top,
                                                        endPoint: .bottom
                                                    )
                                                )
                                        )
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 4)
                                                .strokeBorder(.white.opacity(0.50), lineWidth: 0.5)
                                        )
                                }

                                // Bar fill
                                RoundedRectangle(cornerRadius: 4)
                                    .fill(
                                        LinearGradient(
                                            colors: [Color(hex: "#667eea"), Color(hex: "#a855f7")],
                                            startPoint: .bottom,
                                            endPoint: .top
                                        )
                                    )
                                    .frame(height: max(4, CGFloat(day.xp) / CGFloat(maxXP) * 100))
                                    .overlay(
                                        // Top highlight band for 3D pop
                                        VStack {
                                            RoundedRectangle(cornerRadius: 4)
                                                .fill(
                                                    LinearGradient(
                                                        colors: [.white.opacity(isDark ? 0 : 0.35), .clear],
                                                        startPoint: .top,
                                                        endPoint: .center
                                                    )
                                                )
                                                .frame(height: 6)
                                            Spacer()
                                        }
                                        .clipShape(RoundedRectangle(cornerRadius: 4))
                                    )
                                    .shadow(color: isDark ? .clear : Color(hex: "#667eea").opacity(0.28), radius: 5, y: 2)
                            }

                            Text(day.label)
                                .font(.system(size: 9, weight: .medium))
                                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                        }
                        .frame(maxWidth: .infinity)
                    }
                }
                .frame(height: 140)
                .padding(.top, 4)
            }
        }
    }
}

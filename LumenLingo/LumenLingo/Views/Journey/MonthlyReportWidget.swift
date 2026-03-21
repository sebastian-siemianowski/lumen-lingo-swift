import SwiftUI
import SwiftData

// MARK: - Monthly Report Widget (Royal)

/// Summary card with key metrics and percentage changes over the last 30 days.
/// Gated to Royal tier.
struct MonthlyReportWidget: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let allProgress: [GameProgressRecord]
    let profile: UserProfile?

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private struct MonthMetrics {
        let totalXP: Int
        let sessionsPlayed: Int
        let avgAccuracy: Double
        let activeDays: Int
    }

    private func metrics(daysAgo offset: Int, days: Int) -> MonthMetrics {
        let calendar = Calendar.current
        let startOfToday = calendar.startOfDay(for: .now)
        let start = calendar.date(byAdding: .day, value: -(offset + days), to: startOfToday)!
        // When offset is 0 (current period), use the actual current time so today's sessions are included
        let end: Date = offset == 0 ? .now : calendar.date(byAdding: .day, value: -offset, to: startOfToday)!

        let records = allProgress.filter { $0.createdDate >= start && $0.createdDate <= end }
        let totalXP = records.reduce(0) { $0 + $1.score }
        let totalCorrect = records.reduce(0) { $0 + $1.correctAnswers }
        let totalQuestions = records.reduce(0) { $0 + $1.totalQuestions }
        let avgAcc = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0
        let uniqueDays = Set(records.map { calendar.startOfDay(for: $0.createdDate) }).count

        return MonthMetrics(totalXP: totalXP, sessionsPlayed: records.count, avgAccuracy: avgAcc, activeDays: uniqueDays)
    }

    private var thisMonth: MonthMetrics { metrics(daysAgo: 0, days: 30) }
    private var lastMonth: MonthMetrics { metrics(daysAgo: 30, days: 30) }

    private func change(_ current: Int, _ previous: Int) -> Int {
        guard previous > 0 else { return current > 0 ? 100 : 0 }
        return Int(Double(current - previous) / Double(previous) * 100)
    }

    private func changeDouble(_ current: Double, _ previous: Double) -> Int {
        guard previous > 0 else { return current > 0 ? 100 : 0 }
        return Int((current - previous) / previous * 100)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
                Text(L.last30Days)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                    metricCard(
                        icon: "bolt.fill",
                        value: "\(thisMonth.totalXP)",
                        label: L.totalXP,
                        change: change(thisMonth.totalXP, lastMonth.totalXP),
                        color: .cyan
                    )
                    metricCard(
                        icon: "play.circle.fill",
                        value: "\(thisMonth.sessionsPlayed)",
                        label: L.sessions,
                        change: change(thisMonth.sessionsPlayed, lastMonth.sessionsPlayed),
                        color: .green
                    )
                    metricCard(
                        icon: "target",
                        value: "\(Int(thisMonth.avgAccuracy))%",
                        label: L.accuracy,
                        change: changeDouble(thisMonth.avgAccuracy, lastMonth.avgAccuracy),
                        color: Color(hex: "#f59e0b")
                    )
                    metricCard(
                        icon: "calendar",
                        value: "\(thisMonth.activeDays)",
                        label: L.activeDaysLabel,
                        change: change(thisMonth.activeDays, lastMonth.activeDays),
                        color: Color(hex: "#8b5cf6")
                    )
                }
            }
    }

    private func metricCard(icon: String, value: String, label: String, change: Int, color: Color) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack(spacing: 4) {
                Image(systemName: icon)
                    .font(.system(size: 12))
                    .foregroundStyle(color)
                Spacer()
                if change != 0 {
                    HStack(spacing: 1) {
                        Image(systemName: change > 0 ? "arrow.up.right" : "arrow.down.right")
                            .font(.system(size: 8, weight: .bold))
                        Text("\(abs(change))%")
                            .font(.system(size: 9, weight: .bold, design: .rounded))
                    }
                    .foregroundStyle(change > 0 ? .green : .red)
                }
            }

            Text(value)
                .font(.system(size: 20, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white : .caribbeanInk)

            Text(label)
                .font(.system(size: 10))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
        }
        .padding(10)
        .background {
            if isDark {
                RoundedRectangle(cornerRadius: 12)
                    .fill(color.opacity(0.08))
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .strokeBorder(color.opacity(0.15), lineWidth: 1)
                    )
            } else {
                // Frost trough — recessed glass card with accent tint
                ZStack {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    RoundedRectangle(cornerRadius: 12)
                        .fill(color.opacity(0.05))
                    RoundedRectangle(cornerRadius: 12)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.80, green: 0.82, blue: 0.87).opacity(0.22),
                                    Color.clear,
                                    Color.white.opacity(0.15)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    RoundedRectangle(cornerRadius: 12)
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Color.white.opacity(0.65),
                                    Color.white.opacity(0.30),
                                    Color.white.opacity(0.45)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                    VStack(spacing: 0) {
                        Rectangle()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.45), .white.opacity(0.10), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(height: 14)
                        Spacer(minLength: 0)
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 12))
                }
                .shadow(color: color.opacity(0.08), radius: 4, y: 2)
            }
        }
    }
}

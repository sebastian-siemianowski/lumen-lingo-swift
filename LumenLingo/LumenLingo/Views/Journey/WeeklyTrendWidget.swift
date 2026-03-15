import SwiftUI
import SwiftData

// MARK: - Weekly Trend Widget (Elite+)

/// Line chart comparing this week's daily XP to last week's.
/// Gated to Elite tier and above.
struct WeeklyTrendWidget: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let allProgress: [GameProgressRecord]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private struct WeekData {
        let days: [Int] // 7 values (Mon..Sun or day 0..6)
        var total: Int { days.reduce(0, +) }
    }

    private var thisWeek: WeekData {
        weekData(weeksAgo: 0)
    }

    private var lastWeek: WeekData {
        weekData(weeksAgo: 1)
    }

    private func weekData(weeksAgo: Int) -> WeekData {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: .now)
        let weekStart = calendar.date(byAdding: .day, value: -(calendar.component(.weekday, from: today) - calendar.firstWeekday + 7) % 7 - weeksAgo * 7, to: today)!

        let days: [Int] = (0..<7).map { dayOffset in
            let date = calendar.date(byAdding: .day, value: dayOffset, to: weekStart)!
            let nextDate = calendar.date(byAdding: .day, value: 1, to: date)!
            return allProgress
                .filter { $0.createdDate >= date && $0.createdDate < nextDate }
                .reduce(0) { $0 + $1.score }
        }
        return WeekData(days: days)
    }

    private var maxVal: Int {
        max((thisWeek.days + lastWeek.days).max() ?? 1, 1)
    }

    private var changePercent: Int {
        guard lastWeek.total > 0 else { return thisWeek.total > 0 ? 100 : 0 }
        return Int(Double(thisWeek.total - lastWeek.total) / Double(lastWeek.total) * 100)
    }

    var body: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "chart.xyaxis.line")
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                    Text(L.weeklyTrend)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )

                    Spacer()

                    // Change indicator
                    HStack(spacing: 2) {
                        Image(systemName: changePercent >= 0 ? "arrow.up.right" : "arrow.down.right")
                            .font(.system(size: 10, weight: .bold))
                        Text("\(abs(changePercent))%")
                            .font(.system(size: 12, weight: .bold, design: .rounded))
                    }
                    .foregroundStyle(changePercent >= 0 ? .green : .red)
                }

                Text(L.thisWeekVsLastWeek)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

                // Dual line chart
                GeometryReader { geo in
                    let w = geo.size.width
                    let h = geo.size.height

                    // Last week (dimmed)
                    linePath(data: lastWeek.days, width: w, height: h)
                        .stroke(
                            isDark ? Color.white.opacity(0.15) : Color.black.opacity(0.1),
                            style: StrokeStyle(lineWidth: 2, lineCap: .round, lineJoin: .round, dash: [4, 4])
                        )

                    // This week (vivid)
                    linePath(data: thisWeek.days, width: w, height: h)
                        .stroke(
                            LinearGradient(
                                colors: [Color(hex: "#10b981"), Color(hex: "#06b6d4")],
                                startPoint: .leading,
                                endPoint: .trailing
                            ),
                            style: StrokeStyle(lineWidth: 2.5, lineCap: .round, lineJoin: .round)
                        )

                    // Dots for this week
                    ForEach(0..<7, id: \.self) { i in
                        let x = w * CGFloat(i) / 6
                        let y = h - (CGFloat(thisWeek.days[i]) / CGFloat(maxVal) * h)
                        Circle()
                            .fill(Color(hex: "#10b981"))
                            .frame(width: 6, height: 6)
                            .position(x: x, y: y)
                    }
                }
                .frame(height: 80)
                .padding(.top, 4)

                // Legend
                HStack(spacing: 16) {
                    legendItem(color: Color(hex: "#10b981"), label: L.thisWeekLabel, dashed: false)
                    legendItem(color: isDark ? .white.opacity(0.3) : .black.opacity(0.2), label: L.lastWeekLabel, dashed: true)

                    Spacer()

                    VStack(alignment: .trailing, spacing: 1) {
                        Text("\(thisWeek.total) XP")
                            .font(.system(size: 11, weight: .bold, design: .rounded))
                            .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                        Text(L.totalThisWeek)
                            .font(.system(size: 9))
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    }
                }
            }
        }
    }

    private func linePath(data: [Int], width: CGFloat, height: CGFloat) -> Path {
        Path { path in
            for (i, val) in data.enumerated() {
                let x = width * CGFloat(i) / 6
                let y = height - (CGFloat(val) / CGFloat(maxVal) * height)
                if i == 0 {
                    path.move(to: CGPoint(x: x, y: y))
                } else {
                    path.addLine(to: CGPoint(x: x, y: y))
                }
            }
        }
    }

    private func legendItem(color: Color, label: String, dashed: Bool) -> some View {
        HStack(spacing: 4) {
            if dashed {
                Rectangle()
                    .fill(color)
                    .frame(width: 12, height: 2)
            } else {
                Circle()
                    .fill(color)
                    .frame(width: 6, height: 6)
            }
            Text(label)
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
        }
    }
}

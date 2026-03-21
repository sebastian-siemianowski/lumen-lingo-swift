import SwiftUI
import SwiftData

// MARK: - Learning Insights Dashboard (Royal)

/// Deep analytics dashboard showing optimal practice times, category mastery,
/// retention curve, and fluency timeline. Royal tier only.
struct InsightsDashboardWidget: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let allProgress: [GameProgressRecord]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    // Computed insights, cached per render
    private var insights: LearningInsights {
        LearningInsights(records: allProgress)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
                if allProgress.count < 3 {
                    needMoreDataView
                } else {
                    optimalTimesSection
                    categoryMasterySection
                    retentionCurveSection
                    fluencyTimelineSection
                }
            }
    }

    // MARK: - Need More Data

    private var needMoreDataView: some View {
        HStack {
            Spacer()
            VStack(spacing: 8) {
                Image(systemName: "chart.bar.doc.horizontal")
                    .font(.system(size: 24))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                Text(L.needMoreData)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }
            .padding(.vertical, 16)
            Spacer()
        }
    }

    // MARK: - Optimal Practice Times

    private var optimalTimesSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            sectionHeader(icon: "clock.fill", title: L.optimalPracticeTimes, color: Color(hex: "#8b5cf6"))

            Text(L.bestTimeToLearn)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            HStack(spacing: 6) {
                ForEach(insights.timeSlotPerformance, id: \.slot) { item in
                    timeSlotCard(item: item)
                }
            }
        }
        .padding(12)
        .background {
            if !isDark {
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(hex: "#8b5cf6").opacity(0.03))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.80, green: 0.82, blue: 0.87).opacity(0.18),
                                    Color.clear,
                                    Color.white.opacity(0.12)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(
                            LinearGradient(
                                colors: [.white.opacity(0.60), .white.opacity(0.25), .white.opacity(0.40)],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                    VStack(spacing: 0) {
                        Rectangle()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.40), .white.opacity(0.08), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(height: 16)
                        Spacer(minLength: 0)
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 14))
                }
                .shadow(color: Color(hex: "#8b5cf6").opacity(0.06), radius: 4, y: 2)
            }
        }
    }

    private func timeSlotCard(item: LearningInsights.TimeSlotPerformance) -> some View {
        let isBest = item.slot == insights.bestTimeSlot
        let color: Color = isBest ? Color(hex: "#8b5cf6") : (isDark ? .white.opacity(0.3) : .secondary)

        return VStack(spacing: 4) {
            Image(systemName: item.slot.icon)
                .font(.system(size: 14))
                .foregroundStyle(color)

            Text(timeSlotName(item.slot))
                .font(.system(size: 9, weight: .medium))
                .foregroundStyle(color)

            Text("\(Int(item.avgAccuracy))%")
                .font(.system(size: 16, weight: .bold, design: .rounded))
                .foregroundStyle(isBest ? Color(hex: "#8b5cf6") : (isDark ? .white : .primary))

            Text("\(item.sessionCount)")
                .font(.system(size: 9))
                .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 8)
        .background {
            if isDark {
                RoundedRectangle(cornerRadius: 10)
                    .fill(isBest ? Color(hex: "#8b5cf6").opacity(0.15) : .clear)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .strokeBorder(
                                isBest ? Color(hex: "#8b5cf6").opacity(0.3) : .white.opacity(0.06),
                                lineWidth: 1
                            )
                    )
            } else if isBest {
                // Frost trough — highlighted best time slot
                ZStack {
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color(hex: "#8b5cf6").opacity(0.06))
                    RoundedRectangle(cornerRadius: 10)
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
                    RoundedRectangle(cornerRadius: 10)
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
                            .frame(height: 10)
                        Spacer(minLength: 0)
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 10))
                }
                .shadow(color: Color(hex: "#8b5cf6").opacity(0.08), radius: 4, y: 2)
            } else {
                // Frost trough — subtle recessed card
                ZStack {
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color(red: 0.95, green: 0.96, blue: 0.97))
                    RoundedRectangle(cornerRadius: 10)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.82, green: 0.84, blue: 0.88).opacity(0.15),
                                    Color.clear,
                                    Color.white.opacity(0.10)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    RoundedRectangle(cornerRadius: 10)
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Color.white.opacity(0.55),
                                    Color.white.opacity(0.25),
                                    Color.white.opacity(0.35)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                }
            }
        }
    }

    private func timeSlotName(_ slot: LearningInsights.TimeSlot) -> String {
        switch slot {
        case .morning:   return L.morning
        case .afternoon: return L.afternoon
        case .evening:   return L.evening
        case .night:     return L.night
        }
    }

    // MARK: - Category Mastery

    private var categoryMasterySection: some View {
        VStack(alignment: .leading, spacing: 8) {
            sectionHeader(icon: "chart.pie.fill", title: L.categoryMastery, color: Color(hex: "#06b6d4"))

            Text(L.masteryByCategory)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            let categories = insights.categoryAccuracies.prefix(6)
            if categories.isEmpty {
                Text(L.needMoreData)
                    .font(.system(size: 11))
                    .foregroundStyle(.secondary)
            } else {
                VStack(spacing: 6) {
                    ForEach(Array(categories.enumerated()), id: \.offset) { _, cat in
                        masteryBar(name: cat.name, accuracy: cat.accuracy)
                    }
                }
            }
        }
        .padding(12)
        .background {
            if !isDark {
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(hex: "#06b6d4").opacity(0.03))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.80, green: 0.82, blue: 0.87).opacity(0.18),
                                    Color.clear,
                                    Color.white.opacity(0.12)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(
                            LinearGradient(
                                colors: [.white.opacity(0.60), .white.opacity(0.25), .white.opacity(0.40)],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                    VStack(spacing: 0) {
                        Rectangle()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.40), .white.opacity(0.08), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(height: 16)
                        Spacer(minLength: 0)
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 14))
                }
                .shadow(color: Color(hex: "#06b6d4").opacity(0.06), radius: 4, y: 2)
            }
        }
    }

    private func masteryBar(name: String, accuracy: Double) -> some View {
        HStack(spacing: 8) {
            Text(name)
                .font(.system(size: 11, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .primary)
                .frame(width: 90, alignment: .leading)
                .lineLimit(1)

            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    RoundedRectangle(cornerRadius: 4)
                        .fill(isDark ? Color.white.opacity(0.06) : Color(red: 0.91, green: 0.92, blue: 0.94))
                        .overlay(
                            Group {
                                if !isDark {
                                    RoundedRectangle(cornerRadius: 4)
                                        .fill(
                                            LinearGradient(
                                                colors: [
                                                    Color(red: 0.82, green: 0.84, blue: 0.88).opacity(0.20),
                                                    Color.clear
                                                ],
                                                startPoint: .top,
                                                endPoint: .bottom
                                            )
                                        )
                                }
                            }
                        )

                    RoundedRectangle(cornerRadius: 4)
                        .fill(masteryColor(accuracy))
                        .frame(width: max(0, geo.size.width * CGFloat(accuracy / 100)))
                        .overlay(
                            Group {
                                if !isDark {
                                    VStack(spacing: 0) {
                                        Rectangle()
                                            .fill(
                                                LinearGradient(
                                                    colors: [.white.opacity(0.35), .clear],
                                                    startPoint: .top,
                                                    endPoint: .bottom
                                                )
                                            )
                                            .frame(height: 4)
                                        Spacer(minLength: 0)
                                    }
                                    .clipShape(RoundedRectangle(cornerRadius: 4))
                                }
                            }
                        )
                        .shadow(color: isDark ? .clear : masteryColor(accuracy).opacity(0.20), radius: 3, y: 1)
                }
            }
            .frame(height: 10)

            Text("\(Int(accuracy))%")
                .font(.system(size: 10, weight: .bold, design: .rounded))
                .foregroundStyle(masteryColor(accuracy))
                .frame(width: 34, alignment: .trailing)
        }
    }

    private func masteryColor(_ accuracy: Double) -> Color {
        if accuracy >= 90 { return Color(hex: "#10b981") }
        if accuracy >= 75 { return Color(hex: "#06b6d4") }
        if accuracy >= 60 { return Color(hex: "#f59e0b") }
        if accuracy >= 40 { return Color(hex: "#f97316") }
        return Color(hex: "#ef4444")
    }

    // MARK: - Retention Curve

    private var retentionCurveSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            sectionHeader(icon: "chart.line.uptrend.xyaxis", title: L.retentionCurve, color: Color(hex: "#10b981"))

            Text(L.retentionOverTime)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            let points = insights.weeklyAccuracyTrend
            if points.count < 2 {
                Text(L.needMoreData)
                    .font(.system(size: 11))
                    .foregroundStyle(.secondary)
            } else {
                retentionChart(points: points)
                    .frame(height: 80)
            }
        }
        .padding(12)
        .background {
            if !isDark {
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(hex: "#10b981").opacity(0.03))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.80, green: 0.82, blue: 0.87).opacity(0.18),
                                    Color.clear,
                                    Color.white.opacity(0.12)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(
                            LinearGradient(
                                colors: [.white.opacity(0.60), .white.opacity(0.25), .white.opacity(0.40)],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                    VStack(spacing: 0) {
                        Rectangle()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.40), .white.opacity(0.08), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(height: 16)
                        Spacer(minLength: 0)
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 14))
                }
                .shadow(color: Color(hex: "#10b981").opacity(0.06), radius: 4, y: 2)
            }
        }
    }

    private func retentionChart(points: [LearningInsights.WeeklyPoint]) -> some View {
        GeometryReader { geo in
            let maxVal = max(points.map(\.accuracy).max() ?? 100, 100)
            let minVal = max(0, (points.map(\.accuracy).min() ?? 0) - 10)
            let range = max(maxVal - minVal, 1)

            ZStack {
                // Grid lines
                ForEach([0.25, 0.5, 0.75], id: \.self) { frac in
                    Path { path in
                        let y = geo.size.height * (1 - CGFloat(frac))
                        path.move(to: CGPoint(x: 0, y: y))
                        path.addLine(to: CGPoint(x: geo.size.width, y: y))
                    }
                    .stroke(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04), lineWidth: 1)
                }

                // Area fill
                Path { path in
                    for (i, point) in points.enumerated() {
                        let x = geo.size.width * CGFloat(i) / CGFloat(max(points.count - 1, 1))
                        let y = geo.size.height * (1 - CGFloat((point.accuracy - minVal) / range))
                        if i == 0 { path.move(to: CGPoint(x: x, y: y)) }
                        else { path.addLine(to: CGPoint(x: x, y: y)) }
                    }
                    path.addLine(to: CGPoint(x: geo.size.width, y: geo.size.height))
                    path.addLine(to: CGPoint(x: 0, y: geo.size.height))
                    path.closeSubpath()
                }
                .fill(
                    LinearGradient(
                        colors: [Color(hex: "#10b981").opacity(0.3), Color(hex: "#10b981").opacity(0.02)],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )

                // Line
                Path { path in
                    for (i, point) in points.enumerated() {
                        let x = geo.size.width * CGFloat(i) / CGFloat(max(points.count - 1, 1))
                        let y = geo.size.height * (1 - CGFloat((point.accuracy - minVal) / range))
                        if i == 0 { path.move(to: CGPoint(x: x, y: y)) }
                        else { path.addLine(to: CGPoint(x: x, y: y)) }
                    }
                }
                .stroke(
                    LinearGradient(
                        colors: [Color(hex: "#10b981"), Color(hex: "#059669")],
                        startPoint: .leading,
                        endPoint: .trailing
                    ),
                    lineWidth: 2
                )

                // Dots
                ForEach(Array(points.enumerated()), id: \.offset) { i, point in
                    let x = geo.size.width * CGFloat(i) / CGFloat(max(points.count - 1, 1))
                    let y = geo.size.height * (1 - CGFloat((point.accuracy - minVal) / range))
                    Circle()
                        .fill(Color(hex: "#10b981"))
                        .frame(width: 6, height: 6)
                        .position(x: x, y: y)
                }
            }
        }
    }

    // MARK: - Fluency Timeline

    private var fluencyTimelineSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            sectionHeader(icon: "flag.checkered", title: L.fluencyTimeline, color: Color(hex: "#ec4899"))

            Text(L.predictedMilestones)
                .font(.system(size: 11))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            let milestones = insights.fluencyMilestones
            if milestones.isEmpty {
                Text(L.needMoreData)
                    .font(.system(size: 11))
                    .foregroundStyle(.secondary)
            } else {
                VStack(spacing: 0) {
                    ForEach(Array(milestones.enumerated()), id: \.offset) { i, milestone in
                        HStack(spacing: 12) {
                            // Timeline dot and line
                            VStack(spacing: 0) {
                                Circle()
                                    .fill(milestone.reached
                                          ? Color(hex: "#10b981")
                                          : Color(hex: "#ec4899").opacity(0.5))
                                    .frame(width: 10, height: 10)
                                if i < milestones.count - 1 {
                                    Rectangle()
                                        .fill(isDark ? Color.white.opacity(0.08) : Color(red: 0.88, green: 0.89, blue: 0.92))
                                        .frame(width: 2, height: 24)
                                }
                            }

                            VStack(alignment: .leading, spacing: 2) {
                                Text(milestone.title)
                                    .font(.system(size: 12, weight: .medium))
                                    .foregroundStyle(isDark ? .white : .primary)

                                Text(milestone.dateString)
                                    .font(.system(size: 10))
                                    .foregroundStyle(milestone.reached
                                                     ? Color(hex: "#10b981")
                                                     : (isDark ? .white.opacity(0.4) : .secondary))
                            }

                            Spacer()

                            if milestone.reached {
                                Image(systemName: "checkmark.circle.fill")
                                    .foregroundStyle(Color(hex: "#10b981"))
                                    .font(.system(size: 14))
                            }
                        }
                    }
                }
            }
        }
        .padding(12)
        .background {
            if !isDark {
                ZStack {
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(Color(hex: "#ec4899").opacity(0.03))
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.80, green: 0.82, blue: 0.87).opacity(0.18),
                                    Color.clear,
                                    Color.white.opacity(0.12)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(
                            LinearGradient(
                                colors: [.white.opacity(0.60), .white.opacity(0.25), .white.opacity(0.40)],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 0.5
                        )
                    VStack(spacing: 0) {
                        Rectangle()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.40), .white.opacity(0.08), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .frame(height: 16)
                        Spacer(minLength: 0)
                    }
                    .clipShape(RoundedRectangle(cornerRadius: 14))
                }
                .shadow(color: Color(hex: "#ec4899").opacity(0.06), radius: 4, y: 2)
            }
        }
    }

    // MARK: - Shared

    private func sectionHeader(icon: String, title: String, color: Color) -> some View {
        HStack(spacing: 6) {
            Image(systemName: icon)
                .font(.system(size: 12))
                .foregroundStyle(color)
            Text(title)
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(color)
        }
    }
}

// MARK: - Learning Insights Model

/// Pure computation model — takes records and computes all insights.
/// Runs synchronously; callers can dispatch to background if needed.
struct LearningInsights {

    let records: [GameProgressRecord]

    // MARK: - Time Slots

    enum TimeSlot: String, CaseIterable {
        case morning   // 6-12
        case afternoon // 12-18
        case evening   // 18-22
        case night     // 22-6

        var icon: String {
            switch self {
            case .morning:   return "sun.max.fill"
            case .afternoon: return "sun.haze.fill"
            case .evening:   return "moon.haze.fill"
            case .night:     return "moon.stars.fill"
            }
        }

        static func from(hour: Int) -> TimeSlot {
            switch hour {
            case 6..<12:  return .morning
            case 12..<18: return .afternoon
            case 18..<22: return .evening
            default:      return .night
            }
        }
    }

    struct TimeSlotPerformance {
        let slot: TimeSlot
        let avgAccuracy: Double
        let sessionCount: Int
    }

    var timeSlotPerformance: [TimeSlotPerformance] {
        let calendar = Calendar.current
        var slotRecords: [TimeSlot: [GameProgressRecord]] = [:]
        for slot in TimeSlot.allCases { slotRecords[slot] = [] }

        for record in records {
            let hour = calendar.component(.hour, from: record.createdDate)
            let slot = TimeSlot.from(hour: hour)
            slotRecords[slot, default: []].append(record)
        }

        return TimeSlot.allCases.map { slot in
            let recs = slotRecords[slot] ?? []
            let totalCorrect = recs.reduce(0) { $0 + $1.correctAnswers }
            let totalQuestions = recs.reduce(0) { $0 + $1.totalQuestions }
            let avg = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0
            return TimeSlotPerformance(slot: slot, avgAccuracy: avg, sessionCount: recs.count)
        }
    }

    var bestTimeSlot: TimeSlot? {
        timeSlotPerformance
            .filter { $0.sessionCount >= 1 }
            .max(by: { $0.avgAccuracy < $1.avgAccuracy })?
            .slot
    }

    // MARK: - Category Mastery

    struct CategoryAccuracy {
        let name: String
        let accuracy: Double
    }

    var categoryAccuracies: [CategoryAccuracy] {
        let grouped = Dictionary(grouping: records) { $0.categoryName }
        return grouped.map { (name, recs) in
            let correct = recs.reduce(0) { $0 + $1.correctAnswers }
            let total = recs.reduce(0) { $0 + $1.totalQuestions }
            let acc = total > 0 ? Double(correct) / Double(total) * 100 : 0
            return CategoryAccuracy(name: name, accuracy: acc)
        }
        .sorted { $0.accuracy > $1.accuracy }
    }

    // MARK: - Weekly Accuracy Trend (Retention)

    struct WeeklyPoint {
        let weekIndex: Int
        let accuracy: Double
    }

    var weeklyAccuracyTrend: [WeeklyPoint] {
        guard !records.isEmpty else { return [] }
        let calendar = Calendar.current
        let now = Date.now

        // Group records by week offset from now
        var weekBuckets: [Int: [GameProgressRecord]] = [:]
        for record in records {
            let days = calendar.dateComponents([.day], from: record.createdDate, to: now).day ?? 0
            let week = days / 7
            weekBuckets[week, default: []].append(record)
        }

        let maxWeek = min(weekBuckets.keys.max() ?? 0, 7) // up to 8 weeks
        var points: [WeeklyPoint] = []

        for w in stride(from: maxWeek, through: 0, by: -1) {
            if let recs = weekBuckets[w], !recs.isEmpty {
                let correct = recs.reduce(0) { $0 + $1.correctAnswers }
                let total = recs.reduce(0) { $0 + $1.totalQuestions }
                let acc = total > 0 ? Double(correct) / Double(total) * 100 : 0
                points.append(WeeklyPoint(weekIndex: maxWeek - w, accuracy: acc))
            }
        }

        return points
    }

    // MARK: - Fluency Milestones

    struct FluencyMilestone {
        let title: String
        let dateString: String
        let reached: Bool
    }

    var fluencyMilestones: [FluencyMilestone] {
        guard !records.isEmpty else { return [] }

        let totalXP = records.reduce(0) { $0 + $1.score }
        let calendar = Calendar.current
        let sortedRecords = records.sorted { $0.createdDate < $1.createdDate }

        guard let firstDate = sortedRecords.first?.createdDate else { return [] }
        let daysSinceStart = max(1, calendar.dateComponents([.day], from: firstDate, to: .now).day ?? 1)
        let dailyXPRate = Double(totalXP) / Double(daysSinceStart)

        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .medium

        let milestoneTargets: [(String, Int)] = [
            ("100 XP", 100),
            ("500 XP", 500),
            ("1,000 XP", 1000),
            ("2,500 XP", 2500),
            ("5,000 XP", 5000),
            ("10,000 XP", 10000)
        ]

        return milestoneTargets.compactMap { (title, target) in
            if totalXP >= target {
                return FluencyMilestone(title: title, dateString: "✓", reached: true)
            } else if dailyXPRate > 0 {
                let daysNeeded = Int(ceil(Double(target - totalXP) / dailyXPRate))
                if let predictedDate = calendar.date(byAdding: .day, value: daysNeeded, to: .now) {
                    return FluencyMilestone(
                        title: title,
                        dateString: dateFormatter.string(from: predictedDate),
                        reached: false
                    )
                }
            }
            return nil
        }
    }
}

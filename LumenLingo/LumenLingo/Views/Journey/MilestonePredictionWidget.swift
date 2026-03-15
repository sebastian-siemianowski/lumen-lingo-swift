import SwiftUI
import SwiftData

// MARK: - Milestone Prediction Widget (Royal)

/// Estimates dates for next milestones based on the user's current XP pace.
/// Gated to Royal tier.
struct MilestonePredictionWidget: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    let allProgress: [GameProgressRecord]
    let profile: UserProfile?
    let milestones: [JourneyMilestone]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private var dailyXPRate: Double {
        let calendar = Calendar.current
        let today = calendar.startOfDay(for: .now)
        let thirtyDaysAgo = calendar.date(byAdding: .day, value: -30, to: today)!
        let recentXP = allProgress
            .filter { $0.createdDate >= thirtyDaysAgo }
            .reduce(0) { $0 + $1.score }
        return max(Double(recentXP) / 30.0, 1.0)
    }

    private struct PredictedMilestone: Identifiable {
        let id: String
        let title: String
        let icon: String
        let color: Color
        let xpRequired: Int
        let estimatedDate: Date?
        let daysRemaining: Int
    }

    private var predictions: [PredictedMilestone] {
        let currentXP = profile?.totalXP ?? 0
        let rate = dailyXPRate

        return milestones
            .filter { $0.xpRequired > currentXP }
            .prefix(3)
            .map { m in
                let xpNeeded = m.xpRequired - currentXP
                let daysNeeded = Int(ceil(Double(xpNeeded) / rate))
                let date = Calendar.current.date(byAdding: .day, value: daysNeeded, to: .now)
                return PredictedMilestone(
                    id: m.title,
                    title: m.title,
                    icon: m.icon,
                    color: m.color,
                    xpRequired: m.xpRequired,
                    estimatedDate: date,
                    daysRemaining: daysNeeded
                )
            }
    }

    var body: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "wand.and.stars")
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#f59e0b"), Color(hex: "#ec4899")],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                    Text(L.milestonePredictionsTitle)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [Color(hex: "#f59e0b"), Color(hex: "#ec4899")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                }

                Text(L.basedOnYourPace)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

                // Daily rate badge
                HStack(spacing: 4) {
                    Image(systemName: "speedometer")
                        .font(.system(size: 10))
                    Text("\(Int(dailyXPRate)) XP/\(L.days.lowercased().prefix(3))")
                        .font(.system(size: 11, weight: .semibold, design: .rounded))
                }
                .foregroundStyle(Color(hex: "#f59e0b"))
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .background(
                    Capsule()
                        .fill(Color(hex: "#f59e0b").opacity(isDark ? 0.15 : 0.1))
                )

                if predictions.isEmpty {
                    Text(L.allMilestonesReached)
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .padding(.vertical, 10)
                } else {
                    ForEach(predictions) { pred in
                        predictionRow(pred)
                    }
                }
            }
        }
    }

    private func predictionRow(_ pred: PredictedMilestone) -> some View {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .none

        return HStack(spacing: 10) {
            ZStack {
                Circle()
                    .fill(pred.color.opacity(0.15))
                    .frame(width: 32, height: 32)
                Image(systemName: pred.icon)
                    .font(.system(size: 13))
                    .foregroundStyle(pred.color)
            }

            VStack(alignment: .leading, spacing: 2) {
                Text(pred.title)
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.85) : .caribbeanInk)

                if let date = pred.estimatedDate {
                    Text(formatter.string(from: date))
                        .font(.system(size: 10))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                }
            }

            Spacer()

            VStack(alignment: .trailing, spacing: 1) {
                Text("~\(pred.daysRemaining)")
                    .font(.system(size: 16, weight: .bold, design: .rounded))
                    .foregroundStyle(pred.color)
                Text(L.days.lowercased())
                    .font(.system(size: 9))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
            }
        }
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(pred.color.opacity(isDark ? 0.06 : 0.04))
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .strokeBorder(pred.color.opacity(0.12), lineWidth: 1)
                )
        )
    }
}

// MARK: - Shared Milestone Model

/// Shared milestone data used by JourneyView and MilestonePredictionWidget.
struct JourneyMilestone {
    let title: String
    let icon: String
    let color: Color
    let xpRequired: Int
}

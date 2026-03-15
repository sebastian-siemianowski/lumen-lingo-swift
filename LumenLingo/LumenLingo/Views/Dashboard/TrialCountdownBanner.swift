import SwiftUI
import SwiftData

// MARK: - Trial Countdown Banner

/// Dashboard banner showing remaining trial days. Uses the trial gradient
/// for >3 days and an urgent orange→red gradient for ≤3 days with a pulsing animation.
struct TrialCountdownBanner: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(TierManager.self) private var tierManager
    @Query private var profiles: [UserProfile]

    @State private var pulse = false
    @State private var showMembership = false

    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private var daysRemaining: Int {
        profile?.trialDaysRemaining ?? 0
    }

    private var isUrgent: Bool { daysRemaining <= 3 }

    private var normalGradient: [Color] {
        [Color(hex: "#fbbf24"), Color(hex: "#a855f7"), Color(hex: "#ec4899")]
    }

    private var urgentGradient: [Color] {
        [Color(hex: "#f97316"), Color(hex: "#ef4444"), Color(hex: "#dc2626")]
    }

    private var gradient: [Color] {
        isUrgent ? urgentGradient : normalGradient
    }

    var body: some View {
        if tierManager.currentTier == .trial {
            Button {
                AudioService.shared.playTierSelect()
                HapticsService.shared.buttonPress()
                showMembership = true
            } label: {
                HStack(spacing: 12) {
                    // Crown icon
                    Image(systemName: "crown.fill")
                        .font(.title3)
                        .foregroundStyle(.white)
                        .shadow(color: .black.opacity(0.2), radius: 2, y: 1)

                    VStack(alignment: .leading, spacing: 2) {
                        Text(L.trialBannerTitle)
                            .font(.subheadline.bold())
                            .foregroundStyle(.white)

                        Text(daysRemainingText)
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.85))
                    }

                    Spacer()

                    // Chevron
                    Image(systemName: "chevron.right")
                        .font(.caption.bold())
                        .foregroundStyle(.white.opacity(0.7))
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: gradient,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .shadow(color: gradient.first!.opacity(0.3), radius: 12, y: 4)
                )
                .opacity(isUrgent && pulse ? 0.85 : 1.0)
            }
            .buttonStyle(.plain)
            .sheet(isPresented: $showMembership) {
                NavigationStack { MembershipView(isSheet: true) }
            }
            .onAppear {
                if isUrgent {
                    withAnimation(.easeInOut(duration: 1.0).repeatForever()) {
                        pulse = true
                    }
                }
            }
            .onChange(of: isUrgent) { _, urgent in
                if urgent {
                    withAnimation(.easeInOut(duration: 1.0).repeatForever()) {
                        pulse = true
                    }
                }
            }
        }
    }

    private var daysRemainingText: String {
        if daysRemaining == 0 {
            return L.trialExpiringToday
        } else if daysRemaining == 1 {
            return L.trialOneDayLeft
        } else {
            return "\(daysRemaining) \(L.trialDaysLeft)"
        }
    }
}

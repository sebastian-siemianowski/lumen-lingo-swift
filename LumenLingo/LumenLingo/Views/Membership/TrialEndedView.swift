import SwiftUI
import SwiftData

// MARK: - Trial Ended View

/// Full-screen cover presented once when the Royal Trial expires.
/// Shows a warm summary of what the user experienced, their progress,
/// and a CTA to choose a paid plan.
struct TrialEndedView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Query private var profiles: [UserProfile]

    @State private var showContent = false
    @State private var navigateToMembership = false

    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    private let trialGradient: [Color] = [
        Color(hex: "#fbbf24"),
        Color(hex: "#a855f7"),
        Color(hex: "#ec4899")
    ]

    var body: some View {
        NavigationStack {
            ScrollView(showsIndicators: false) {
                VStack(spacing: 28) {
                    Spacer(minLength: 30)

                    // Sunset hero
                    heroSection

                    // Title
                    titleSection

                    // Stats summary
                    statsCard

                    // What you keep
                    freeFeatures

                    // CTA
                    ctaSection

                    Spacer(minLength: 40)
                }
                .padding(.horizontal, 24)
            }
            .background(
                LinearGradient(
                    colors: isDark
                        ? [Color(hex: "#0a0a1a"), Color(hex: "#1a0a2e"), Color(hex: "#0a0a1a")]
                        : [Color(hex: "#fef3c7"), Color(hex: "#fce7f3"), Color(hex: "#f5f3ff")],
                    startPoint: .top,
                    endPoint: .bottom
                )
                .ignoresSafeArea()
            )
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        dismissAndMark()
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .font(.title3)
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                    }
                }
            }
            .navigationDestination(isPresented: $navigateToMembership) {
                MembershipView()
            }
        }
        .onAppear {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.75).delay(0.15)) {
                showContent = true
            }
        }
    }

    // MARK: - Hero

    private var heroSection: some View {
        ZStack {
            // Dimmed glow
            Circle()
                .fill(
                    RadialGradient(
                        colors: [trialGradient[0].opacity(0.15), .clear],
                        center: .center,
                        startRadius: 30,
                        endRadius: 80
                    )
                )
                .frame(width: 160, height: 160)

            // Circle with sunset gradient
            Circle()
                .fill(
                    LinearGradient(
                        colors: [Color(hex: "#94a3b8"), Color(hex: "#64748b")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 90, height: 90)

            // Hourglass icon
            Image(systemName: "hourglass.bottomhalf.filled")
                .font(.system(size: 38))
                .foregroundStyle(.white.opacity(0.9))
        }
        .scaleEffect(showContent ? 1.0 : 0.5)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Title

    private var titleSection: some View {
        VStack(spacing: 10) {
            Text(L.trialEndedTitle)
                .font(.system(size: 28, weight: .black))
                .foregroundStyle(isDark ? .white : .primary)

            Text(L.trialEndedSubtitle)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                .multilineTextAlignment(.center)
        }
        .offset(y: showContent ? 0 : 15)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Stats

    private var statsCard: some View {
        VStack(spacing: 0) {
            // Header
            HStack {
                Image(systemName: "chart.bar.fill")
                    .foregroundStyle(trialGradient[1])
                Text(L.trialYourProgress)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .primary)
                Spacer()
            }
            .padding(.horizontal, 16)
            .padding(.top, 14)
            .padding(.bottom, 10)

            Divider()
                .overlay(isDark ? Color.white.opacity(0.06) : Color.clear)

            // Stats
            HStack(spacing: 0) {
                statCell(
                    value: "\(profile?.totalXP ?? 0)",
                    label: "XP",
                    icon: "star.fill",
                    color: .orange
                )
                statDivider
                statCell(
                    value: "\(profile?.currentLevel ?? 1)",
                    label: L.trialLevel,
                    icon: "arrow.up.circle.fill",
                    color: .purple
                )
                statDivider
                statCell(
                    value: "\(profile?.streakDays ?? 0)",
                    label: L.trialStreak,
                    icon: "flame.fill",
                    color: .orange
                )
            }
            .padding(.vertical, 14)
        }
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                )
        )
        .offset(y: showContent ? 0 : 20)
        .opacity(showContent ? 1 : 0)
    }

    private func statCell(value: String, label: String, icon: String, color: Color) -> some View {
        VStack(spacing: 4) {
            Image(systemName: icon)
                .font(.caption)
                .foregroundStyle(color)
            Text(value)
                .font(.title3.bold())
                .foregroundStyle(isDark ? .white : .primary)
            Text(label)
                .font(.caption2)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
        }
        .frame(maxWidth: .infinity)
    }

    private var statDivider: some View {
        Rectangle()
            .fill(isDark ? Color.white.opacity(0.06) : Color.gray.opacity(0.2))
            .frame(width: 1, height: 40)
    }

    // MARK: - Free Features

    private var freeFeatures: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(spacing: 8) {
                Image(systemName: "gift.fill")
                    .foregroundStyle(.green)
                Text(L.trialYouStillHave)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white : .primary)
            }

            VStack(alignment: .leading, spacing: 8) {
                featureRow("3 Language Pairs", icon: "globe")
                featureRow("All Game Modes", icon: "gamecontroller.fill")
                featureRow("30 min/day Practice", icon: "clock.fill")
                featureRow("All Your Progress & Data", icon: "chart.line.uptrend.xyaxis")
            }
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(.green.opacity(isDark ? 0.06 : 0.08))
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(.green.opacity(0.15), lineWidth: 1)
                )
        )
        .offset(y: showContent ? 0 : 20)
        .opacity(showContent ? 1 : 0)
    }

    private func featureRow(_ text: String, icon: String) -> some View {
        HStack(spacing: 10) {
            Image(systemName: icon)
                .font(.caption)
                .foregroundStyle(.green.opacity(0.7))
                .frame(width: 20)
            Text(text)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.75) : .primary)
        }
    }

    // MARK: - CTA

    private var ctaSection: some View {
        VStack(spacing: 14) {
            PremiumCTAButton(
                title: L.trialChoosePlan,
                tier: .pro,
                action: { navigateToMembership = true }
            )

            Button {
                dismissAndMark()
            } label: {
                Text(L.trialContinueFree)
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }
        }
        .scaleEffect(showContent ? 1.0 : 0.95)
        .opacity(showContent ? 1 : 0)
    }

    // MARK: - Dismiss

    private func dismissAndMark() {
        profile?.trialExpiredShown = true
        dismiss()
    }
}

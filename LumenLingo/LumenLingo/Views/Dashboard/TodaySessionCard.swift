import SwiftUI

// MARK: - Today Session Card

/// The hero "smart session" card on the Dashboard.
/// Shows the engine's recommendation with a daily progress ring,
/// motivational text, and a prominent CTA.
struct TodaySessionCard: View {
    let recommendation: SessionRecommendation?
    let roundsCompleted: Int
    let dailyGoal: Int
    let dailyProgress: Double
    let isDailyGoalComplete: Bool
    let isPracticeExpired: Bool
    let resetTime: String?
    let onStart: () -> Void
    let onExpiredTap: () -> Void
    var onShuffle: (() -> Void)? = nil

    @Environment(\.colorScheme) private var colorScheme
    @State private var appeared = false
    @State private var ringAnimated = false
    @State private var pulseGlow = false
    @State private var shimmerPhase: CGFloat = 0
    @State private var shuffleRotation: Double = 0
    @State private var shuffleScale: CGFloat = 1.0
    @State private var shuffleBounce: Bool = false

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 0) {
            if isDailyGoalComplete {
                goalCompleteContent
            } else if isPracticeExpired {
                expiredContent
            } else if let rec = recommendation {
                recommendationContent(rec)
            } else {
                loadingContent
            }
        }
        .background(cardBackground)
        .clipShape(RoundedRectangle(cornerRadius: 26))
        .overlay(borderOverlay)
        .shadow(color: shadowColor, radius: isDark ? 30 : 20, y: isDark ? 12 : 8)
        .shadow(color: secondaryShadow, radius: 8, y: 4)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 30)
        .onAppear {
            withAnimation(.spring(response: 0.7, dampingFraction: 0.75).delay(0.05)) {
                appeared = true
            }
            withAnimation(.easeInOut(duration: 0.8).delay(0.3)) {
                ringAnimated = true
            }
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                pulseGlow = true
            }
        }
    }

    // MARK: - Recommendation Content

    private func recommendationContent(_ rec: SessionRecommendation) -> some View {
        VStack(alignment: .leading, spacing: 0) {
            // Top: Daily progress + round counter + shuffle
            HStack(spacing: 14) {
                dailyProgressRing

                VStack(alignment: .leading, spacing: 3) {
                    Text("Today's Session")
                        .font(.system(size: 13, weight: .bold))
                        .tracking(0.5)
                        .textCase(.uppercase)
                        .foregroundStyle(
                            isDark
                            ? .white.opacity(0.5)
                            : Color.caribbeanPlum.opacity(0.6)
                        )

                    HStack(spacing: 6) {
                        Text("Round \(roundsCompleted + 1) of \(dailyGoal)")
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundStyle(isDark ? .white.opacity(0.9) : Color.caribbeanInk)

                        reasonBadge(rec.reason)
                    }
                }

                Spacer()

                if onShuffle != nil {
                    shuffleButton(rec)
                }
            }
            .padding(.top, 22)
            .padding(.horizontal, 20)

            // Category info
            VStack(alignment: .leading, spacing: 8) {
                HStack(spacing: 10) {
                    gameTypeIcon(rec)

                    VStack(alignment: .leading, spacing: 2) {
                        Text(rec.categoryName)
                            .font(.system(size: 22, weight: .bold))
                            .foregroundStyle(
                                isDark
                                ? AnyShapeStyle(LinearGradient(
                                    colors: rec.reason.accentColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                ))
                                : AnyShapeStyle(Color.caribbeanInk)
                            )

                        Text(rec.gameType.displayName)
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.55) : Color.caribbeanPlum)
                    }
                }

                // Progress bar
                if rec.progress.total > 0 {
                    categoryProgressBar(rec)
                }
            }
            .padding(.top, 18)
            .padding(.horizontal, 20)

            // CTA Button
            ctaButton(rec)
                .padding(.top, 16)
                .padding(.horizontal, 20)
                .padding(.bottom, 22)
        }
    }

    // MARK: - Goal Complete State

    private var goalCompleteContent: some View {
        VStack(spacing: 14) {
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [Color(hex: "#34d399").opacity(0.3), Color.clear],
                            center: .center, startRadius: 0, endRadius: 40
                        )
                    )
                    .frame(width: 80, height: 80)

                Image(systemName: "checkmark.seal.fill")
                    .font(.system(size: 40))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#34d399"), Color(hex: "#10b981")],
                            startPoint: .top, endPoint: .bottom
                        )
                    )
            }

            Text("Daily Goal Complete!")
                .font(.system(size: 20, weight: .bold))
                .foregroundStyle(
                    isDark
                    ? AnyShapeStyle(LinearGradient(
                        colors: [Color(hex: "#34d399"), Color(hex: "#10b981")],
                        startPoint: .leading, endPoint: .trailing
                    ))
                    : AnyShapeStyle(Color.caribbeanInk)
                )

            Text("You crushed all \(dailyGoal) rounds today. Come back tomorrow!")
                .font(.system(size: 14, weight: .medium))
                .multilineTextAlignment(.center)
                .foregroundStyle(isDark ? .white.opacity(0.6) : Color.caribbeanPlum)
                .padding(.horizontal, 32)

            // Still allow playing more
            Button {
                onStart()
            } label: {
                Text("Keep Practicing")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : Color.caribbeanPlum)
                    .padding(.horizontal, 20)
                    .padding(.vertical, 10)
                    .background(
                        Capsule()
                            .fill(isDark ? .white.opacity(0.08) : Color.caribbeanOcean.opacity(0.08))
                    )
                    .overlay(Capsule().strokeBorder(isDark ? .white.opacity(0.15) : Color.caribbeanOcean.opacity(0.15)))
            }
            .buttonStyle(.plain)
        }
        .padding(.vertical, 28)
    }

    // MARK: - Expired State

    private var expiredContent: some View {
        VStack(spacing: 12) {
            Image(systemName: "hourglass.circle.fill")
                .font(.system(size: 38))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.orange, Color(hex: "#f97316")],
                        startPoint: .top, endPoint: .bottom
                    )
                )

            Text("Practice Time's Up")
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(isDark ? .white : Color.caribbeanInk)

            if let reset = resetTime {
                Text(reset)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(.orange)
            }

            Button {
                onExpiredTap()
            } label: {
                Text("Unlock Unlimited")
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 24)
                    .padding(.vertical, 12)
                    .background(
                        Capsule()
                            .fill(LinearGradient(
                                colors: [Color(hex: "#f59e0b"), Color(hex: "#f97316")],
                                startPoint: .leading, endPoint: .trailing
                            ))
                    )
            }
            .buttonStyle(.plain)
        }
        .padding(.vertical, 28)
    }

    // MARK: - Loading State

    private var loadingContent: some View {
        VStack(spacing: 12) {
            ProgressView()
                .tint(isDark ? .white.opacity(0.5) : Color.caribbeanOcean)

            Text("Preparing your session…")
                .font(.system(size: 14, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.5) : Color.caribbeanPlum)
        }
        .frame(height: 160)
    }

    // MARK: - Components

    private var dailyProgressRing: some View {
        ZStack {
            // Track
            Circle()
                .stroke(
                    isDark ? .white.opacity(0.08) : Color.caribbeanOcean.opacity(0.1),
                    lineWidth: 4
                )

            // Progress
            Circle()
                .trim(from: 0, to: ringAnimated ? dailyProgress : 0)
                .stroke(
                    AngularGradient(
                        colors: dailyRingColors,
                        center: .center,
                        startAngle: .degrees(0),
                        endAngle: .degrees(360 * dailyProgress)
                    ),
                    style: StrokeStyle(lineWidth: 4, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))

            // Center text
            VStack(spacing: 0) {
                Text("\(roundsCompleted)")
                    .font(.system(size: 16, weight: .black, design: .rounded))
                    .foregroundStyle(isDark ? .white : Color.caribbeanInk)

                Text("/\(dailyGoal)")
                    .font(.system(size: 9, weight: .bold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : Color.caribbeanPlum.opacity(0.5))
            }
        }
        .frame(width: 52, height: 52)
    }

    private var dailyRingColors: [Color] {
        if dailyProgress >= 1.0 {
            return [Color(hex: "#34d399"), Color(hex: "#10b981")]
        }
        return isDark
            ? [Color(hex: "#8b5cf6"), Color(hex: "#d946ef"), Color(hex: "#06b6d4")]
            : [Color.caribbeanOcean, Color.caribbeanLagoon, Color.caribbeanReef]
    }

    private func reasonBadge(_ reason: RecommendationReason) -> some View {
        HStack(spacing: 3) {
            Image(systemName: reason.icon)
                .font(.system(size: 8, weight: .bold))
            Text(reason.rawValue)
                .font(.system(size: 9, weight: .bold))
                .textCase(.uppercase)
        }
        .foregroundStyle(
            isDark
            ? reason.accentColors.first ?? .white
            : Color.caribbeanOcean
        )
        .padding(.horizontal, 7)
        .padding(.vertical, 3)
        .background(
            Capsule()
                .fill(
                    isDark
                    ? (reason.accentColors.first ?? .white).opacity(0.12)
                    : Color.caribbeanOcean.opacity(0.08)
                )
        )
    }

    private func gameTypeIcon(_ rec: SessionRecommendation) -> some View {
        let colors = GameCardColorScheme.forType(rec.gameType)
        return ZStack {
            RoundedRectangle(cornerRadius: 14)
                .fill(
                    isDark
                    ? LinearGradient(colors: colors.gradient, startPoint: .topLeading, endPoint: .bottomTrailing)
                    : LinearGradient(colors: colors.caribbeanTint, startPoint: .topLeading, endPoint: .bottomTrailing)
                )
                .frame(width: 48, height: 48)

            Image(systemName: rec.categoryIcon)
                .font(.system(size: 20, weight: .semibold))
                .foregroundStyle(.white)
                .shadow(color: .black.opacity(0.2), radius: 2, y: 1)
        }
        .shadow(color: (isDark ? colors.primary : colors.caribbeanTint.first ?? colors.primary).opacity(0.3), radius: 8, y: 3)
    }

    private func shuffleButton(_ rec: SessionRecommendation) -> some View {
        let accentColors = rec.reason.accentColors
        let baseColor = isDark
            ? (accentColors.first ?? .purple)
            : Color.caribbeanOcean

        return Button {
            // Tactile animation cascade
            withAnimation(.spring(response: 0.25, dampingFraction: 0.5)) {
                shuffleScale = 0.8
                shuffleBounce = true
            }
            withAnimation(.interpolatingSpring(stiffness: 300, damping: 12).delay(0.08)) {
                shuffleRotation += 360
                shuffleScale = 1.15
            }
            withAnimation(.spring(response: 0.3, dampingFraction: 0.65).delay(0.22)) {
                shuffleScale = 1.0
                shuffleBounce = false
            }

            onShuffle?()
        } label: {
            ZStack {
                // Outer glow ring
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                baseColor.opacity(shuffleBounce ? 0.25 : 0.08),
                                baseColor.opacity(0)
                            ],
                            center: .center, startRadius: 0, endRadius: 26
                        )
                    )
                    .frame(width: 52, height: 52)

                // Glass circle
                Circle()
                    .fill(
                        isDark
                        ? .ultraThinMaterial
                        : .thinMaterial
                    )
                    .frame(width: 40, height: 40)
                    .overlay(
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: isDark
                                        ? [.white.opacity(0.25), .white.opacity(0.06)]
                                        : [baseColor.opacity(0.3), baseColor.opacity(0.08)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                ),
                                lineWidth: 1
                            )
                    )

                // Icon with rotation
                Image(systemName: "shuffle")
                    .font(.system(size: 16, weight: .bold))
                    .foregroundStyle(
                        isDark
                        ? AnyShapeStyle(LinearGradient(
                            colors: accentColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ))
                        : AnyShapeStyle(baseColor)
                    )
                    .rotationEffect(.degrees(shuffleRotation))
            }
            .scaleEffect(shuffleScale)
        }
        .buttonStyle(.plain)
        .accessibilityLabel("Shuffle recommendation")
    }

    private func categoryProgressBar(_ rec: SessionRecommendation) -> some View {
        let colors = GameCardColorScheme.forType(rec.gameType)
        return VStack(alignment: .leading, spacing: 4) {
            HStack {
                Text("\(rec.progress.mastered)/\(rec.progress.total) mastered")
                    .font(.system(size: 11, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.45) : Color.caribbeanPlum.opacity(0.55))
                Spacer()
                Text("\(Int(rec.progress.percentage))%")
                    .font(.system(size: 11, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        isDark
                        ? colors.primary.opacity(0.8)
                        : (colors.caribbeanTint.first ?? colors.primary).opacity(0.8)
                    )
            }

            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    RoundedRectangle(cornerRadius: 3)
                        .fill(isDark ? .white.opacity(0.06) : Color.caribbeanOcean.opacity(0.08))

                    RoundedRectangle(cornerRadius: 3)
                        .fill(
                            isDark
                            ? LinearGradient(colors: colors.gradient, startPoint: .leading, endPoint: .trailing)
                            : LinearGradient(colors: colors.caribbeanTint, startPoint: .leading, endPoint: .trailing)
                        )
                        .frame(width: geo.size.width * min(1, rec.progress.percentage / 100))
                }
            }
            .frame(height: 5)
        }
    }

    private func ctaButton(_ rec: SessionRecommendation) -> some View {
        let colors = GameCardColorScheme.forType(rec.gameType)
        return Button {
            onStart()
        } label: {
            HStack(spacing: 10) {
                Image(systemName: "play.fill")
                    .font(.system(size: 14, weight: .bold))

                Text("Start Session")
                    .font(.system(size: 16, weight: .bold))

                Spacer()

                Image(systemName: "arrow.right")
                    .font(.system(size: 14, weight: .bold))
            }
            .foregroundStyle(.white)
            .padding(.horizontal, 22)
            .padding(.vertical, 15)
            .background(
                ZStack {
                    Capsule()
                        .fill(
                            isDark
                            ? LinearGradient(
                                colors: colors.gradient,
                                startPoint: .leading, endPoint: .trailing
                            )
                            : LinearGradient(
                                colors: colors.caribbeanTint,
                                startPoint: .leading, endPoint: .trailing
                            )
                        )

                    // Top shine
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.3), .clear],
                                startPoint: .top, endPoint: .center
                            )
                        )

                    // Border
                    Capsule()
                        .strokeBorder(.white.opacity(0.25), lineWidth: 1)
                }
            )
            .shadow(color: (isDark ? colors.primary : colors.caribbeanTint.first ?? colors.primary).opacity(0.4),
                    radius: 16, y: 6)
            .shadow(color: (isDark ? colors.secondary : colors.caribbeanTint.last ?? colors.secondary).opacity(0.2),
                    radius: 6, y: 3)
        }
        .buttonStyle(.plain)
    }

    // MARK: - Card Background

    private var cardBackground: some View {
        ZStack {
            if isDark {
                darkBackground
            } else {
                lightBackground
            }
        }
    }

    private var darkBackground: some View {
        ZStack {
            // Deep frosted glass
            RoundedRectangle(cornerRadius: 26)
                .fill(.ultraThinMaterial)

            // Subtle gradient overlay
            RoundedRectangle(cornerRadius: 26)
                .fill(
                    LinearGradient(
                        colors: [.white.opacity(0.08), .clear, .white.opacity(0.03)],
                        startPoint: .top, endPoint: .bottom
                    )
                )

            // Accent tint from recommendation
            if let rec = recommendation {
                let colors = rec.reason.accentColors
                RoundedRectangle(cornerRadius: 26)
                    .fill(
                        RadialGradient(
                            colors: [
                                (colors.first ?? .purple).opacity(0.08),
                                Color.clear
                            ],
                            center: .topLeading,
                            startRadius: 0, endRadius: 300
                        )
                    )
            }

            // Ambient glow pulse
            if pulseGlow, let rec = recommendation {
                let color = rec.reason.accentColors.first ?? .purple
                RoundedRectangle(cornerRadius: 26)
                    .fill(color.opacity(pulseGlow ? 0.04 : 0.01))
                    .animation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true), value: pulseGlow)
            }
        }
    }

    private var lightBackground: some View {
        ZStack {
            // Caribbean elevated base
            RoundedRectangle(cornerRadius: 26)
                .fill(Color.caribbeanElevated)

            // Thin material
            RoundedRectangle(cornerRadius: 26)
                .fill(.thinMaterial)
                .opacity(0.35)

            // Sea-glass wash
            RoundedRectangle(cornerRadius: 26)
                .fill(
                    RadialGradient(
                        colors: [
                            Color.caribbeanLagoon.opacity(0.05),
                            Color.caribbeanOcean.opacity(0.03),
                            Color.clear
                        ],
                        center: .center, startRadius: 0, endRadius: 300
                    )
                )

            // Top luminance
            VStack(spacing: 0) {
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [.white.opacity(0.5), .white.opacity(0.1), .clear],
                            startPoint: .top, endPoint: .bottom
                        )
                    )
                    .frame(height: 40)
                Spacer(minLength: 0)
            }
            .clipShape(RoundedRectangle(cornerRadius: 26))

            // Inner glow
            RoundedRectangle(cornerRadius: 25.5)
                .strokeBorder(.white.opacity(0.55), lineWidth: 0.5)
                .padding(0.5)
        }
        .background(
            RoundedRectangle(cornerRadius: 28)
                .fill(
                    RadialGradient(
                        colors: [
                            Color.caribbeanOcean.opacity(0.08),
                            Color.caribbeanLagoon.opacity(0.04),
                            Color.clear
                        ],
                        center: .center, startRadius: 0, endRadius: 220
                    )
                )
                .blur(radius: 10)
                .offset(y: 3)
        )
    }

    // MARK: - Border Overlay

    private var borderOverlay: some View {
        Group {
            if isDark {
                RoundedRectangle(cornerRadius: 26)
                    .strokeBorder(
                        LinearGradient(
                            colors: [
                                .white.opacity(0.15),
                                .white.opacity(0.05),
                                (recommendation?.reason.accentColors.first ?? .purple).opacity(0.12),
                                .white.opacity(0.08)
                            ],
                            startPoint: .topLeading, endPoint: .bottomTrailing
                        ),
                        lineWidth: 1
                    )
            } else {
                RoundedRectangle(cornerRadius: 26)
                    .strokeBorder(
                        Color.caribbeanOcean.opacity(0.14),
                        lineWidth: 0.5
                    )
            }
        }
    }

    // MARK: - Shadows

    private var shadowColor: Color {
        if isDark {
            return (recommendation?.reason.accentColors.first ?? .purple).opacity(0.2)
        } else {
            return Color.caribbeanOcean.opacity(0.1)
        }
    }

    private var secondaryShadow: Color {
        isDark ? .black.opacity(0.15) : Color.caribbeanSand.opacity(0.05)
    }
}

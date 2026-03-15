import SwiftUI

// MARK: - Practice Time Ring

/// Circular progress ring for the dashboard showing daily practice time usage.
/// Free tier: shows remaining minutes with green→yellow→red color gradient.
/// Paid tiers: shows an infinity symbol with tier gradient.
struct PracticeTimeRing: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(TierManager.self) private var tierManager
    @Environment(PracticeTimeTracker.self) private var tracker

    @State private var animatedProgress: Double = 0
    @State private var pulseScale: CGFloat = 1.0

    private var isDark: Bool { colorScheme == .dark }

    private var isUnlimited: Bool {
        !tracker.isLimited(for: tierManager.currentTier)
    }

    private var progress: Double {
        tracker.dailyProgress
    }

    private var remainingMinutes: Int {
        (tracker.remainingSeconds(for: tierManager.currentTier) ?? 0) / 60
    }

    private var ringColor: Color {
        if progress < 0.5 { return .green }
        if progress < 0.75 { return .yellow }
        return .red
    }

    private var ringGradient: AngularGradient {
        AngularGradient(
            colors: [ringColor.opacity(0.6), ringColor],
            center: .center,
            startAngle: .degrees(0),
            endAngle: .degrees(360 * animatedProgress)
        )
    }

    var body: some View {
        if isUnlimited {
            unlimitedBadge
        } else {
            limitedRing
        }
    }

    // MARK: - Unlimited Badge

    private var unlimitedBadge: some View {
        ZStack {
            Circle()
                .fill(
                    LinearGradient(
                        colors: tierManager.tierGradientColors,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ).opacity(0.15)
                )
                .frame(width: 44, height: 44)

            Image(systemName: "infinity")
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(
                    LinearGradient(
                        colors: tierManager.tierGradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
        }
    }

    // MARK: - Limited Ring

    private var limitedRing: some View {
        ZStack {
            // Background track
            Circle()
                .stroke(
                    isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.06),
                    lineWidth: 4
                )
                .frame(width: 44, height: 44)

            // Progress arc
            Circle()
                .trim(from: 0, to: animatedProgress)
                .stroke(
                    ringColor,
                    style: StrokeStyle(lineWidth: 4, lineCap: .round)
                )
                .frame(width: 44, height: 44)
                .rotationEffect(.degrees(-90))

            // Center text
            VStack(spacing: 0) {
                if tracker.isExpired {
                    Image(systemName: "moon.zzz.fill")
                        .font(.system(size: 12))
                        .foregroundStyle(ringColor)
                } else {
                    Text("\(remainingMinutes)")
                        .font(.system(size: 13, weight: .bold))
                        .foregroundStyle(isDark ? .white : .primary)
                    Text("min")
                        .font(.system(size: 7, weight: .medium))
                        .foregroundStyle(.secondary)
                }
            }
        }
        .scaleEffect(pulseScale)
        .onAppear {
            withAnimation(.easeOut(duration: 0.8)) {
                animatedProgress = progress
            }
            // Pulse when under 5 minutes remaining
            if remainingMinutes < 5 && !tracker.isExpired {
                withAnimation(.easeInOut(duration: 1.2).repeatForever(autoreverses: true)) {
                    pulseScale = 1.08
                }
            }
        }
        .onChange(of: tracker.usedSecondsToday) { _, _ in
            withAnimation(.easeOut(duration: 0.3)) {
                animatedProgress = progress
            }
        }
    }
}

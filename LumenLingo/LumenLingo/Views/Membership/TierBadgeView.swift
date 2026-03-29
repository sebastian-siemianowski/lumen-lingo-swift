import SwiftUI
import SwiftData

// MARK: - Tier Badge View

/// A polished capsule badge showing the user's current membership tier.
/// Sources tier from RevenueCat-backed TierManager. Displays tier icon, name,
/// gradient background, trial countdown, and tier-specific ambient animations.
/// Navigates to MembershipView on tap.
struct TierBadgeView: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    /// Whether the badge should animate in on appear.
    var animated: Bool = true
    /// Compact mode for tight spaces (icon only).
    var compact: Bool = false
    /// Prominent mode for membership tab (larger with glow).
    var prominent: Bool = false

    @State private var appeared = false
    @State private var isPressed = false
    @State private var shimmerPhase: CGFloat = -1
    // Ambient animation states
    @State private var pulsePhase: CGFloat = 0.4
    @State private var shimmerLoop: CGFloat = -0.3
    @State private var glowIntensity: CGFloat = 0.3
    @State private var countdownRingProgress: CGFloat = 0
    // Story 7.2: Badge bloom glow after upgrade
    @State private var bloomGlowOpacity: CGFloat = 0
    @State private var bloomGlowScale: CGFloat = 0.8
    // Story 7.2: Micro-bounce during afterglow window
    @State private var microBounceScale: CGFloat = 1.0

    private var isDark: Bool { colorScheme == .dark }
    private var tier: MembershipTier { tierManager.currentTier }
    private var isTrial: Bool { tier == .trial }
    private var isFree: Bool { tier == .free }
    private var trialDays: Int? { profile?.trialDaysRemaining }

    private var iconSize: CGFloat {
        prominent ? 14 : (compact ? 10 : 11)
    }
    private var textSize: CGFloat {
        prominent ? 13 : 11
    }

    var body: some View {
        if isFree && !prominent {
            // Free tier: subtle muted label (not shown in most places)
            freeLabel
        } else {
            badgeContent
        }
    }

    // MARK: - Free Label

    private var freeLabel: some View {
        HStack(spacing: 3) {
            Image(systemName: "globe")
                .font(.system(size: 9, weight: .medium))
            if !compact {
                Text("Free")
                    .font(.system(size: 10, weight: .medium))
            }
        }
        .foregroundStyle(isDark ? .white.opacity(0.35) : .secondary.opacity(0.6))
        .accessibilityLabel("Free plan")
        .accessibilityHint("Double tap to view membership options")
    }

    // MARK: - Badge Content

    private var badgeContent: some View {
        ZStack {
            // Ambient glow behind badge (tier-specific)
            if !reduceMotion && !compact {
                ambientGlow
            }

            // Trial countdown ring overlay
            if isTrial && !compact {
                countdownRing
            }

            // Main capsule badge
            mainCapsule

            // Story 5.2: Amber warning dot during billing issues
            if subscriptionManager.hasBillingIssue && !compact {
                Circle()
                    .fill(Color(red: 0.95, green: 0.70, blue: 0.15))
                    .frame(width: 8, height: 8)
                    .overlay(
                        Circle()
                            .strokeBorder(.white, lineWidth: 1.5)
                    )
                    .offset(x: prominent ? 18 : 14, y: prominent ? -12 : -10)
            }
        }
        .scaleEffect(microBounceScale)
        .scaleEffect(isPressed ? 0.92 : 1.0)
        .scaleEffect(appeared ? 1.0 : 0.6)
        .opacity(appeared ? 1.0 : 0)
        .overlay {
            // Story 7.2: Bloom glow ring on first appearance after upgrade
            if bloomGlowOpacity > 0 {
                RoundedRectangle(cornerRadius: prominent ? 14 : 10)
                    .stroke(tier.accentColor, lineWidth: 2)
                    .scaleEffect(bloomGlowScale)
                    .opacity(bloomGlowOpacity)
                    .allowsHitTesting(false)
            }
        }
        .animation(.spring(response: 0.4, dampingFraction: 0.65), value: appeared)
        .animation(.spring(response: 0.2, dampingFraction: 0.6), value: isPressed)
        .animation(.spring(response: 0.15, dampingFraction: 0.6), value: microBounceScale)
        .onAppear(perform: handleAppear)
        .onLongPressGesture(minimumDuration: .infinity, pressing: { pressing in
            isPressed = pressing
        }, perform: {})
        .accessibilityLabel(accessibilityText)
        .accessibilityHint("Double tap to manage subscription")
    }

    // MARK: - Main Capsule

    private var mainCapsule: some View {
        VStack(spacing: (isTrial || subscriptionManager.isCancelling) && !compact ? 1 : 0) {
            HStack(spacing: prominent ? 6 : 5) {
                Image(systemName: tier.iconName)
                    .font(.system(size: iconSize, weight: .bold))
                    .foregroundStyle(.white)
                    .contentTransition(.symbolEffect(.replace))

                if !compact {
                    Text(isTrial ? "Royal" : tier.displayName)
                        .font(.system(size: textSize, weight: .bold))
                        .foregroundStyle(.white)
                        .lineLimit(1)
                }
            }

            // Trial sub-label with remaining days
            if isTrial && !compact, let days = trialDays {
                Text("Trial · \(days) day\(days == 1 ? "" : "s") left")
                    .font(.system(size: prominent ? 9 : 8, weight: .semibold))
                    .foregroundStyle(.white.opacity(0.75))
                    .lineLimit(1)
            }

            // Story 5.3: Cancelling sub-label
            if !isTrial && subscriptionManager.isCancelling && !compact {
                Text("Cancelling")
                    .font(.system(size: prominent ? 9 : 8, weight: .semibold))
                    .foregroundStyle(.white.opacity(0.6))
                    .lineLimit(1)
            }
        }
        .padding(.horizontal, compact ? 8 : (prominent ? 14 : 10))
        .padding(.vertical, prominent ? 8 : ((isTrial || subscriptionManager.isCancelling) && !compact ? 6 : 5))
        .background(
            Capsule()
                .fill(
                    LinearGradient(
                        colors: displayGradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .overlay(
                    // Shimmer highlight
                    Capsule()
                        .fill(
                            LinearGradient(
                                stops: shimmerStops,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .allowsHitTesting(false)
                )
                .overlay(
                    Capsule()
                        .strokeBorder(.white.opacity(0.2), lineWidth: 0.5)
                )
        )
        .shadow(
            color: (displayGradientColors.first ?? .purple).opacity(prominent ? 0.5 : 0.35),
            radius: prominent ? 10 : 6, y: prominent ? 3 : 2
        )
    }

    // MARK: - Ambient Animations

    /// Tier-specific ambient glow behind the badge capsule.
    private var ambientGlow: some View {
        Group {
            switch tier {
            case .pro:
                // Pro: gentle blue pulse
                Capsule()
                    .fill(Color.blue.opacity(Double(pulsePhase) * 0.3))
                    .blur(radius: 8)
                    .scaleEffect(1.0 + pulsePhase * 0.15)

            case .elite:
                // Elite: slow purple shimmer sweep
                Capsule()
                    .fill(
                        LinearGradient(
                            stops: [
                                .init(color: .clear, location: max(0, Double(shimmerLoop) - 0.2)),
                                .init(color: Color.purple.opacity(0.35), location: Double(shimmerLoop)),
                                .init(color: .clear, location: min(1, Double(shimmerLoop) + 0.2))
                            ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .blur(radius: 6)
                    .scaleEffect(1.1)

            case .royal:
                // Royal: warm golden glow
                Capsule()
                    .fill(Color.orange.opacity(Double(glowIntensity) * 0.4))
                    .blur(radius: 10)
                    .scaleEffect(1.0 + glowIntensity * 0.1)

            case .trial:
                // Trial: golden glow (same as royal since trial = royal-level)
                Capsule()
                    .fill(Color.orange.opacity(Double(glowIntensity) * 0.35))
                    .blur(radius: 10)
                    .scaleEffect(1.0 + glowIntensity * 0.1)

            default:
                EmptyView()
            }
        }
        .allowsHitTesting(false)
    }

    /// Trial countdown ring — a thin circular progress around the badge.
    private var countdownRing: some View {
        let progress: CGFloat = {
            guard let days = trialDays else { return 0 }
            return CGFloat(days) / 14.0  // 14-day trial
        }()

        return Capsule()
            .strokeBorder(
                AngularGradient(
                    stops: [
                        .init(color: Color.orange.opacity(0.6), location: 0),
                        .init(color: Color.yellow.opacity(0.8), location: progress),
                        .init(color: .clear, location: progress + 0.01),
                        .init(color: .clear, location: 1.0)
                    ],
                    center: .center,
                    startAngle: .degrees(-90),
                    endAngle: .degrees(270)
                ),
                lineWidth: 2
            )
            .scaleEffect(1.15)
            .opacity(Double(countdownRingProgress))
            .allowsHitTesting(false)
    }

    // MARK: - Display Helpers

    private var displayGradientColors: [Color] {
        if isTrial {
            return MembershipTier.royal.gradientColors
        }
        return tier.gradientColors
    }

    private var shimmerStops: [Gradient.Stop] {
        let p = min(max(shimmerPhase, 0), 1)
        return [
            .init(color: .clear, location: max(0, p - 0.15)),
            .init(color: .white.opacity(0.25), location: p),
            .init(color: .clear, location: min(1, p + 0.15)),
        ]
    }

    // MARK: - VoiceOver

    private var accessibilityText: String {
        var label = "Your current plan: \(tier.displayName)."
        if isTrial, let days = trialDays {
            label += " Trial: \(days) day\(days == 1 ? "" : "s") remaining."
        }
        if subscriptionManager.isCancelling, let expiry = subscriptionManager.cancellationExpiryDateString {
            label += " Cancelling. Access until \(expiry)."
        }
        label += " Tap to manage."
        return label
    }

    // MARK: - Lifecycle

    private func handleAppear() {
        if animated {
            withAnimation(.spring(response: 0.5, dampingFraction: 0.65).delay(0.3)) {
                appeared = true
            }
            // Delayed entry shimmer
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.9) {
                withAnimation(.easeInOut(duration: 0.8)) {
                    shimmerPhase = 1.2
                }
            }
        } else {
            appeared = true
        }

        guard !reduceMotion else { return }
        startAmbientAnimations()

        // Story 7.2: Afterglow micro-interactions
        if tierManager.isWithinUpgradeAfterglowWindow {
            triggerBloomGlow()
            triggerMicroBounce()
        }
    }

    // MARK: - Story 7.2: Afterglow Animations

    /// Bloom glow ring on first appearance after upgrade.
    private func triggerBloomGlow() {
        withAnimation(.easeOut(duration: 0.4)) {
            bloomGlowOpacity = 0.8
            bloomGlowScale = 1.3
        }
        withAnimation(.easeOut(duration: 0.6).delay(0.4)) {
            bloomGlowOpacity = 0
            bloomGlowScale = 1.6
        }
    }

    /// Micro-bounce: scale 1.0 → 1.08 → 1.0 over 300ms each time badge becomes visible.
    private func triggerMicroBounce() {
        withAnimation(.spring(response: 0.15, dampingFraction: 0.5)) {
            microBounceScale = 1.08
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) {
            withAnimation(.spring(response: 0.15, dampingFraction: 0.7)) {
                microBounceScale = 1.0
            }
        }
    }

    private func startAmbientAnimations() {
        switch tier {
        case .pro:
            // Gentle blue pulse: 2.5s breathe
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                pulsePhase = 1.0
            }
        case .elite:
            // Slow purple shimmer sweep: 3s loop
            withAnimation(.linear(duration: 3.0).repeatForever(autoreverses: false)) {
                shimmerLoop = 1.3
            }
        case .royal, .trial:
            // Warm golden glow: 3s breathe
            withAnimation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true)) {
                glowIntensity = 0.8
            }
            // Trial: fade in countdown ring
            if isTrial {
                withAnimation(.easeOut(duration: 1.0).delay(0.5)) {
                    countdownRingProgress = 1.0
                }
            }
        default:
            break
        }
    }
}

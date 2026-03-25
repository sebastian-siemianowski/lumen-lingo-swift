import SwiftUI

// MARK: - Feature Gate Modifier

/// A view modifier that overlays a frosted glass lock when the user's tier
/// doesn't grant access to the specified feature.
/// Tapping the locked overlay presents the paywall in `.featureGate` context.
///
/// Transition animations:
/// - **Unlock:** Frosted glass cracks → shatters into sparkle particles → content blooms → glow ring
/// - **Lock:** Content desaturates → frost crystallises inward → lock icon fades in
/// - **Reduce Motion:** Instant opacity change (no particles or shattering)
///
/// Usage: `.featureGate(.soundscapes)`
struct FeatureGateModifier: ViewModifier {
    let feature: PremiumFeature
    @Environment(TierManager.self) private var tierManager
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var showPaywall = false

    // Transition animation state
    @State private var wasLocked: Bool?
    @State private var unlockPhase: UnlockPhase = .idle
    @State private var lockPhase: LockPhase = .idle
    @State private var fractureSeed: UInt64 = 0

    private var isLocked: Bool {
        !tierManager.hasAccess(to: feature)
    }

    private var lockIconName: String {
        feature.minimumTier.iconName
    }

    private var lockColor: Color {
        feature.minimumTier.accentColor
    }

    // MARK: - Unlock Phases

    enum UnlockPhase {
        case idle
        case cracking      // 0–200ms: fracture lines spread
        case shattering    // 200–500ms: pieces fly outward as sparkle particles
        case blooming      // 500–800ms: content blooms to full saturation
        case glowRing      // 800–1000ms: glow ring expands and fades
    }

    // MARK: - Lock Phases

    enum LockPhase {
        case idle
        case desaturating  // 0–500ms: content desaturates
        case frosting      // 500–800ms: frost crystallises inward
        case locked        // 800–1000ms: lock icon fades in with rotation
    }

    func body(content: Content) -> some View {
        content
            // Desaturation during lock transition
            .saturation(lockPhase == .desaturating || lockPhase == .frosting || lockPhase == .locked ? 0.3 : 1.0)
            .overlay {
                if isLocked && unlockPhase == .idle {
                    lockedOverlay
                        .transition(reduceMotion ? .opacity : .opacity)
                } else if unlockPhase == .cracking || unlockPhase == .shattering {
                    crackingOverlay
                } else if unlockPhase == .shattering {
                    sparkleParticles
                }
            }
            .overlay {
                if unlockPhase == .glowRing {
                    glowRingOverlay
                }
            }
            .animation(reduceMotion ? .none : .spring(response: 0.5, dampingFraction: 0.7), value: isLocked)
            .animation(reduceMotion ? .none : .easeInOut(duration: 0.3), value: unlockPhase)
            .animation(reduceMotion ? .none : .easeInOut(duration: 0.3), value: lockPhase)
            .onChange(of: isLocked) { oldValue, newValue in
                handleLockStateChange(wasLocked: oldValue, isNowLocked: newValue)
            }
            .onAppear {
                wasLocked = isLocked
            }
            .sheet(isPresented: $showPaywall) {
                PaywallView(context: .featureGate(feature))
            }
    }

    // MARK: - Lock State Change Handler

    private func handleLockStateChange(wasLocked: Bool, isNowLocked: Bool) {
        guard wasLocked != isNowLocked else { return }

        if wasLocked && !isNowLocked {
            startUnlockAnimation()
        } else if !wasLocked && isNowLocked {
            startLockAnimation()
        }
    }

    // MARK: - Unlock Animation Sequence

    private func startUnlockAnimation() {
        guard !reduceMotion else {
            announceUnlock()
            return
        }

        fractureSeed = UInt64.random(in: 0..<UInt64.max)

        // Phase 1: Cracking (0–200ms)
        withAnimation(.easeIn(duration: 0.2)) {
            unlockPhase = .cracking
        }

        // Phase 2: Shattering (200–500ms)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
            withAnimation(.easeOut(duration: 0.3)) {
                unlockPhase = .shattering
            }
        }

        // Phase 3: Blooming (500–800ms)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.6)) {
                unlockPhase = .blooming
            }
        }

        // Phase 4: Glow ring (800–1000ms)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
            withAnimation(.easeOut(duration: 0.2)) {
                unlockPhase = .glowRing
            }
        }

        // Reset to idle
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            unlockPhase = .idle
        }

        announceUnlock()
    }

    // MARK: - Lock Animation Sequence

    private func startLockAnimation() {
        guard !reduceMotion else { return }

        // Phase 1: Desaturating (0–500ms)
        withAnimation(.easeOut(duration: 0.5)) {
            lockPhase = .desaturating
        }

        // Phase 2: Frosting (500–800ms)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            withAnimation(.easeIn(duration: 0.3)) {
                lockPhase = .frosting
            }
        }

        // Phase 3: Lock icon appears (800–1000ms)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
            withAnimation(.spring(response: 0.2, dampingFraction: 0.5)) {
                lockPhase = .locked
            }
        }

        // Reset to idle (lock overlay takes over)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            lockPhase = .idle
        }
    }

    // MARK: - VoiceOver

    private func announceUnlock() {
        let message = "Feature unlocked: \(feature.displayName)"
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            UIAccessibility.post(notification: .announcement,
                                 argument: NSString(string: message))
        }
    }

    // MARK: - Locked Overlay

    private var lockedOverlay: some View {
        ZStack {
            Rectangle()
                .fill(.ultraThinMaterial)
                .overlay {
                    Rectangle()
                        .fill(lockColor.opacity(0.05))
                }

            VStack(spacing: 8) {
                Image(systemName: lockIconName)
                    .font(.system(size: 28, weight: .semibold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: feature.minimumTier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse.byLayer, options: .repeating.speed(0.3))

                Text(feature.minimumTier.displayName)
                    .font(.caption2)
                    .fontWeight(.semibold)
                    .foregroundStyle(lockColor.opacity(0.8))
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .contentShape(Rectangle())
        .onTapGesture {
            showPaywall = true
        }
        .accessibilityLabel("\(feature.displayName) is locked. Requires \(feature.minimumTier.displayName) plan. Tap to view plans.")
        .accessibilityAddTraits(.isButton)
    }

    // MARK: - Cracking Overlay (Unlock Phase 1-2)

    private var crackingOverlay: some View {
        GeometryReader { geo in
            Canvas { context, size in
                let center = CGPoint(x: size.width / 2, y: size.height / 2)
                let maxRadius = hypot(size.width, size.height) / 2

                // Procedural fracture: 5-8 radial cracks from center
                var rng = SeededRNG(seed: fractureSeed)
                let crackCount = Int.random(in: 5...8, using: &rng)
                let progress: CGFloat = unlockPhase == .shattering ? 1.0 : 0.6

                for i in 0..<crackCount {
                    let baseAngle = (CGFloat(i) / CGFloat(crackCount)) * .pi * 2
                    let angleJitter = CGFloat.random(in: -0.3...0.3, using: &rng)
                    let angle = baseAngle + angleJitter
                    let length = maxRadius * progress * CGFloat.random(in: 0.6...1.0, using: &rng)

                    let endPoint = CGPoint(
                        x: center.x + cos(angle) * length,
                        y: center.y + sin(angle) * length
                    )

                    // Main crack line
                    var path = Path()
                    path.move(to: center)

                    // Add slight zigzag for natural look
                    let segments = 4
                    for seg in 1...segments {
                        let t = CGFloat(seg) / CGFloat(segments)
                        let midX = center.x + (endPoint.x - center.x) * t
                        let midY = center.y + (endPoint.y - center.y) * t
                        let jitterX = CGFloat.random(in: -3...3, using: &rng)
                        let jitterY = CGFloat.random(in: -3...3, using: &rng)
                        path.addLine(to: CGPoint(x: midX + jitterX, y: midY + jitterY))
                    }

                    context.stroke(
                        path,
                        with: .color(.white.opacity(0.7)),
                        lineWidth: unlockPhase == .shattering ? 1.0 : 1.5
                    )

                    // Branch cracks
                    if progress > 0.4 {
                        let branchCount = Int.random(in: 1...2, using: &rng)
                        for _ in 0..<branchCount {
                            let branchT = CGFloat.random(in: 0.3...0.8, using: &rng)
                            let branchStart = CGPoint(
                                x: center.x + (endPoint.x - center.x) * branchT,
                                y: center.y + (endPoint.y - center.y) * branchT
                            )
                            let branchAngle = angle + CGFloat.random(in: -0.8...0.8, using: &rng)
                            let branchLength = length * 0.3 * CGFloat.random(in: 0.5...1.0, using: &rng)
                            let branchEnd = CGPoint(
                                x: branchStart.x + cos(branchAngle) * branchLength,
                                y: branchStart.y + sin(branchAngle) * branchLength
                            )
                            var branchPath = Path()
                            branchPath.move(to: branchStart)
                            branchPath.addLine(to: branchEnd)
                            context.stroke(
                                branchPath,
                                with: .color(.white.opacity(0.4)),
                                lineWidth: 0.8
                            )
                        }
                    }
                }
            }
            .opacity(unlockPhase == .shattering ? 0.0 : 1.0)
            .background {
                // Semi-transparent frost behind cracks
                Rectangle()
                    .fill(.ultraThinMaterial)
                    .opacity(unlockPhase == .shattering ? 0.0 : 0.8)
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .allowsHitTesting(false)
    }

    // MARK: - Sparkle Particles (Unlock Phase 2)

    private var sparkleParticles: some View {
        GeometryReader { geo in
            let tierColors = feature.minimumTier.gradientColors
            TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
                Canvas { context, size in
                    let t = timeline.date.timeIntervalSinceReferenceDate
                    var rng = SeededRNG(seed: fractureSeed &+ 42)
                    let center = CGPoint(x: size.width / 2, y: size.height / 2)

                    for i in 0..<16 {
                        let angle = CGFloat.random(in: 0...(.pi * 2), using: &rng)
                        let speed = CGFloat.random(in: 40...120, using: &rng)
                        let particleAge = CGFloat(t).truncatingRemainder(dividingBy: 0.5)
                        let distance = speed * particleAge

                        let x = center.x + cos(angle) * distance
                        let y = center.y + sin(angle) * distance - particleAge * 20 // float up

                        let alpha = max(0, 1.0 - particleAge * 3.0)
                        let dotSize = CGFloat.random(in: 1.5...4.0, using: &rng) * (1.0 - particleAge)
                        let color = tierColors[i % tierColors.count]

                        let rect = CGRect(x: x - dotSize/2, y: y - dotSize/2,
                                          width: dotSize, height: dotSize)
                        context.opacity = alpha
                        context.fill(Circle().path(in: rect), with: .color(color))
                    }
                }
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .allowsHitTesting(false)
        .drawingGroup()
    }

    // MARK: - Glow Ring (Unlock Phase 4)

    private var glowRingOverlay: some View {
        GeometryReader { geo in
            let maxDim = max(geo.size.width, geo.size.height) * 1.2
            Circle()
                .strokeBorder(
                    lockColor.opacity(0.4),
                    lineWidth: 3
                )
                .frame(width: maxDim, height: maxDim)
                .position(x: geo.size.width / 2, y: geo.size.height / 2)
                .opacity(0.0)
        }
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .allowsHitTesting(false)
    }
}

// MARK: - Seeded Random Number Generator

/// Deterministic RNG for procedural fracture patterns — each unlock looks
/// slightly different but is reproducible within the same unlock event.
private struct SeededRNG: RandomNumberGenerator {
    private var state: UInt64

    init(seed: UInt64) {
        state = seed
    }

    mutating func next() -> UInt64 {
        // xorshift64
        state ^= state << 13
        state ^= state >> 7
        state ^= state << 17
        return state
    }
}

// MARK: - View Extension

extension View {
    /// Applies a frosted glass lock overlay when the user's tier doesn't grant access.
    /// Tapping the overlay presents the paywall for the required tier.
    /// Includes animated transition effects when lock state changes.
    func featureGate(_ feature: PremiumFeature) -> some View {
        modifier(FeatureGateModifier(feature: feature))
    }
}

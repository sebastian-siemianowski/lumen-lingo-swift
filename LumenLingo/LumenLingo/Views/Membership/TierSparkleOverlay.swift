import SwiftUI

// MARK: - Tier Sparkle Overlay

/// Story 7.2: A decorative overlay that shows tier-coloured sparkle particles
/// trailing the user's scroll gesture for 3 seconds after a tier upgrade.
/// Applied as an overlay on the main content view.
struct TierSparkleOverlay: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var particles: [SparkleParticle] = []
    @State private var isActive = false
    @State private var lastDragLocation: CGPoint = .zero

    private var tier: MembershipTier { tierManager.currentTier }

    var body: some View {
        if isActive && !reduceMotion {
            TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { timeline in
                Canvas { context, size in
                    let now = timeline.date.timeIntervalSinceReferenceDate
                    for particle in particles {
                        let age = now - particle.birthTime
                        guard age < particle.lifetime else { continue }
                        let progress = age / particle.lifetime
                        let alpha = 1.0 - progress
                        let scale = 1.0 - progress * 0.5
                        let x = particle.position.x + particle.velocity.x * age
                        let y = particle.position.y + particle.velocity.y * age + 20 * age * age

                        var ctx = context
                        ctx.opacity = alpha * particle.opacity
                        let rect = CGRect(
                            x: x - particle.size * scale / 2,
                            y: y - particle.size * scale / 2,
                            width: particle.size * scale,
                            height: particle.size * scale
                        )
                        let path = StarPath.path(in: rect, points: 4)
                        ctx.fill(path, with: .color(particle.color))
                    }
                }
                .allowsHitTesting(false)
                .onChange(of: timeline.date) { _, _ in
                    pruneParticles()
                }
            }
            .allowsHitTesting(false)
            .onAppear { scheduleDeactivation() }
        }
    }

    /// Activates the sparkle overlay for 3 seconds.
    func activate(at location: CGPoint) {
        guard tierManager.isWithinUpgradeAfterglowWindow else { return }
        guard !reduceMotion else { return }
        isActive = true
        emitParticles(at: location, count: Int.random(in: 5...10))
        scheduleDeactivation()
    }

    private func emitParticles(at location: CGPoint, count: Int) {
        let colors = tierSparkleColors
        let now = Date().timeIntervalSinceReferenceDate
        for _ in 0..<count {
            let particle = SparkleParticle(
                position: CGPoint(
                    x: location.x + CGFloat.random(in: -15...15),
                    y: location.y + CGFloat.random(in: -15...15)
                ),
                velocity: CGPoint(
                    x: CGFloat.random(in: -30...30),
                    y: CGFloat.random(in: -60 ... -20)
                ),
                size: CGFloat.random(in: 4...8),
                color: colors.randomElement() ?? .white,
                opacity: Double.random(in: 0.6...1.0),
                lifetime: Double.random(in: 0.8...1.5),
                birthTime: now
            )
            particles.append(particle)
        }
    }

    private func pruneParticles() {
        let now = Date().timeIntervalSinceReferenceDate
        particles.removeAll { now - $0.birthTime > $0.lifetime }
        if particles.isEmpty && isActive {
            isActive = false
        }
    }

    private func scheduleDeactivation() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
            // Stop emitting — remaining particles will fade naturally
        }
    }

    private var tierSparkleColors: [Color] {
        switch tier {
        case .pro:    return [.blue, .cyan, .white.opacity(0.8)]
        case .elite:  return [.purple, .indigo, .white.opacity(0.8)]
        case .royal, .trial: return [.yellow, .orange, .white.opacity(0.8)]
        case .free:   return [.gray, .white.opacity(0.6)]
        }
    }
}

// MARK: - Feature Unlock Sparkle

/// Story 7.2: A small sparkle burst that emits from a feature icon
/// the first time a newly unlocked feature is used in the session.
struct FeatureUnlockSparkle: ViewModifier {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    let feature: PremiumFeature

    @State private var showSparkle = false
    @State private var sparkleScale: CGFloat = 0.1
    @State private var sparkleOpacity: Double = 1.0

    func body(content: Content) -> some View {
        content
            .overlay {
                if showSparkle && !reduceMotion {
                    sparkleEffect
                }
            }
            .onAppear {
                if tierManager.shouldShowFeatureSparkle(for: feature) {
                    triggerSparkle()
                }
            }
    }

    private var sparkleEffect: some View {
        ZStack {
            ForEach(0..<5, id: \.self) { i in
                let angle = Double(i) * (2 * .pi / 5)
                let radius: CGFloat = 18 * sparkleScale
                Circle()
                    .fill(tierManager.currentTier.accentColor)
                    .frame(width: 4, height: 4)
                    .offset(
                        x: cos(angle) * radius,
                        y: sin(angle) * radius
                    )
            }
        }
        .scaleEffect(sparkleScale)
        .opacity(sparkleOpacity)
        .allowsHitTesting(false)
    }

    private func triggerSparkle() {
        showSparkle = true
        withAnimation(.spring(response: 0.4, dampingFraction: 0.5)) {
            sparkleScale = 1.0
        }
        withAnimation(.easeOut(duration: 0.8).delay(0.3)) {
            sparkleOpacity = 0
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) {
            showSparkle = false
            sparkleScale = 0.1
            sparkleOpacity = 1.0
        }
    }
}

extension View {
    /// Story 7.2: Adds a sparkle burst on the first use of a newly unlocked feature.
    func featureUnlockSparkle(for feature: PremiumFeature) -> some View {
        modifier(FeatureUnlockSparkle(feature: feature))
    }
}

// MARK: - Supporting Types

private struct SparkleParticle {
    let position: CGPoint
    let velocity: CGPoint
    let size: CGFloat
    let color: Color
    let opacity: Double
    let lifetime: TimeInterval
    let birthTime: TimeInterval
}

/// Simple 4-point star path for sparkle particles.
private enum StarPath {
    static func path(in rect: CGRect, points: Int) -> Path {
        let center = CGPoint(x: rect.midX, y: rect.midY)
        let outerRadius = min(rect.width, rect.height) / 2
        let innerRadius = outerRadius * 0.4
        var path = Path()
        let totalPoints = points * 2
        for i in 0..<totalPoints {
            let angle = (Double(i) * .pi / Double(points)) - .pi / 2
            let radius = i.isMultiple(of: 2) ? outerRadius : innerRadius
            let point = CGPoint(
                x: center.x + CGFloat(cos(angle)) * radius,
                y: center.y + CGFloat(sin(angle)) * radius
            )
            if i == 0 {
                path.move(to: point)
            } else {
                path.addLine(to: point)
            }
        }
        path.closeSubpath()
        return path
    }
}

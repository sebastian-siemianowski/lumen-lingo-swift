import SwiftUI

// MARK: - Category Completion Celebration (Story 6.3.1)

/// Warm overlay shown when a user completes all words in a category.
/// Caribbean confetti burst, trophy with rotating glow, stats summary, XP badge.
struct CategoryCompletionCelebrationView: View {
    let categoryName: String
    let masteredCount: Int
    let totalCount: Int
    let accuracy: Double
    let bestStreak: Int
    let xpEarned: Int
    let onDismiss: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var showCard = false
    @State private var showIcon = false
    @State private var showTitle = false
    @State private var showStats = false
    @State private var showXP = false
    @State private var showButton = false
    @State private var dismissing = false
    @State private var particlePhase: CGFloat = 0
    @State private var glowPulse: CGFloat = 0
    @State private var ringRotation: Double = 0

    private var isDark: Bool { colorScheme == .dark }

    // Caribbean island confetti colors (turquoise, coral, sand gold, palm green, lavender)
    private var confettiColors: [Color] {
        isDark
            ? [.yellow, .orange, .green, .cyan, .pink, .purple, .mint]
            : [
                .caribbeanOcean,
                Color(hex: "#FB7185"),
                .caribbeanSand,
                Color(hex: "#10b981"),
                Color(hex: "#a78bfa"),
            ]
    }

    var body: some View {
        GeometryReader { geo in
            ZStack {
                // Dimming layer
                Color(isDark ? .black : .caribbeanInk)
                    .opacity(dismissing ? 0 : (isDark ? 0.7 : 0.30))
                    .ignoresSafeArea()
                    .onTapGesture { dismissCelebration() }

                // Confetti canvas
                confettiCanvas(size: geo.size)

                // Central card
                celebrationCard
                    .frame(maxWidth: 320)
                    .scaleEffect(showCard ? 1.0 : 0.3)
                    .opacity(showCard ? 1 : 0)
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            .opacity(dismissing ? 0 : 1)
        }
        .ignoresSafeArea()
        .onAppear { startSequence() }
    }

    // MARK: - Card

    private var celebrationCard: some View {
        VStack(spacing: 16) {
            // Trophy icon with glow ring
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                (isDark ? Color.yellow : .caribbeanSand).opacity(0.35),
                                (isDark ? Color.yellow : .caribbeanSand).opacity(0.08),
                                .clear
                            ],
                            center: .center,
                            startRadius: 5,
                            endRadius: 70
                        )
                    )
                    .frame(width: 140, height: 140)
                    .scaleEffect(0.9 + glowPulse * 0.15)
                    .opacity(showIcon ? 0.9 : 0)

                Circle()
                    .strokeBorder(
                        AngularGradient(
                            colors: [
                                (isDark ? Color.yellow : .caribbeanSand).opacity(0.5),
                                .clear,
                                (isDark ? Color.orange : .caribbeanCoral).opacity(0.3),
                                .clear
                            ],
                            center: .center
                        ),
                        lineWidth: 1.5
                    )
                    .frame(width: 80, height: 80)
                    .rotationEffect(.degrees(ringRotation))

                Image(systemName: "trophy.fill")
                    .font(.system(size: 64, weight: .bold))
                    .foregroundStyle(
                        isDark
                            ? AnyShapeStyle(LinearGradient(colors: [.yellow, .orange], startPoint: .top, endPoint: .bottom))
                            : AnyShapeStyle(LinearGradient.caribbeanGradientSand)
                    )
                    .scaleEffect(showIcon ? 1.0 : 0.01)
                    .opacity(showIcon ? 1 : 0)
                    .shadow(color: (isDark ? Color.yellow : .caribbeanSand).opacity(0.6), radius: 20, y: 2)
            }
            .padding(.top, 24)

            // Title
            Text("Category Complete!")
                .font(.system(size: 24, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white : .caribbeanInk)
                .opacity(showTitle ? 1 : 0)
                .offset(y: showTitle ? 0 : 8)

            // Category name
            Text(categoryName)
                .font(.system(size: 20, weight: .semibold, design: .rounded))
                .foregroundStyle(
                    isDark
                        ? AnyShapeStyle(LinearGradient(colors: [.orange, .yellow], startPoint: .leading, endPoint: .trailing))
                        : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                )
                .opacity(showTitle ? 1 : 0)
                .offset(y: showTitle ? 0 : 6)

            // Stats
            VStack(spacing: 8) {
                statRow(icon: "checkmark.circle.fill", text: "\(masteredCount)/\(totalCount) words mastered")
                statRow(icon: "target", text: "\(Int(accuracy))% accuracy")
                statRow(icon: "flame.fill", text: "Best streak: \(bestStreak)")
            }
            .opacity(showStats ? 1 : 0)
            .offset(y: showStats ? 0 : 10)

            // XP earned badge
            HStack(spacing: 6) {
                Image(systemName: "star.fill")
                    .font(.system(size: 14))
                Text("+\(xpEarned) XP")
                    .font(.system(size: 16, weight: .bold, design: .rounded))
            }
            .foregroundStyle(.white)
            .padding(.horizontal, 20)
            .padding(.vertical, 10)
            .background(
                Capsule()
                    .fill(
                        isDark
                            ? LinearGradient(colors: [.orange, .yellow], startPoint: .leading, endPoint: .trailing)
                            : LinearGradient.caribbeanGradientSand
                    )
            )
            .scaleEffect(showXP ? 1.0 : 0.5)
            .opacity(showXP ? 1 : 0)

            // Continue button
            Button {
                dismissCelebration()
            } label: {
                Text("Continue")
                    .font(.system(size: 16, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(
                        RoundedRectangle(cornerRadius: 14)
                            .fill(
                                isDark
                                    ? LinearGradient(colors: [Color(hex: "#667eea"), Color(hex: "#06b6d4")], startPoint: .leading, endPoint: .trailing)
                                    : LinearGradient.caribbeanGradientOcean
                            )
                    )
            }
            .opacity(showButton ? 1 : 0)
            .offset(y: showButton ? 0 : 8)
            .padding(.horizontal, 20)
            .padding(.bottom, 24)
        }
        .background(
            RoundedRectangle(cornerRadius: 24)
                .fill(isDark ? .ultraThinMaterial : .regularMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 24)
                        .strokeBorder(
                            LinearGradient(
                                colors: isDark
                                    ? [.white.opacity(0.15), .clear]
                                    : [.caribbeanSand.opacity(0.4), .caribbeanOcean.opacity(0.2), .clear],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 1
                        )
                )
        )
        .shadow(color: (isDark ? Color.black : .caribbeanInk).opacity(0.15), radius: 30, y: 10)
    }

    private func statRow(icon: String, text: String) -> some View {
        HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 14))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum.opacity(0.6))
            Text(text)
                .font(.system(size: 15, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanPlum)
        }
    }

    // MARK: - Confetti Canvas

    private func confettiCanvas(size: CGSize) -> some View {
        Canvas { context, canvasSize in
            let cx = canvasSize.width / 2
            let cy = canvasSize.height * 0.35
            let phase = Double(particlePhase)
            let colors = confettiColors

            // 40 particles — tropical flower petals drifting in a warm breeze
            for i in 0..<40 {
                let seed = Double(i) * 137.508
                let color = colors[i % colors.count]

                let baseW = CGFloat(4.0 + seed.truncatingRemainder(dividingBy: 7))
                let baseH = baseW * CGFloat(1.0 + (seed * 0.37).truncatingRemainder(dividingBy: 1.5))

                let tumbleFreq = 2.0 + seed.truncatingRemainder(dividingBy: 3.0)
                let tumbleW = baseW * CGFloat(0.3 + 0.7 * abs(cos(phase * tumbleFreq + seed)))

                let burstAngle = (seed * 2.399).truncatingRemainder(dividingBy: .pi * 2)
                let burstRadius = 30.0 + seed.truncatingRemainder(dividingBy: 200.0)
                let burstT = min(phase * 2.5, 1.0)

                let bx = cos(burstAngle) * burstRadius * burstT
                let by = sin(burstAngle) * burstRadius * burstT
                let sway = sin(phase * .pi * 2.0 + seed * 0.4) * 20.0

                let gravityT = max(0, phase - 0.25)
                let gravitySpeed = 0.3 + seed.truncatingRemainder(dividingBy: 0.5)
                let gravityDrop = gravityT * gravityT * Double(canvasSize.height) * 0.6 * gravitySpeed

                let x = cx + bx + sway
                let y = cy + by + gravityDrop

                guard y < canvasSize.height + 20 && x > -20 && x < canvasSize.width + 20 else { continue }

                var alpha: Double = 0.85
                if phase < 0.06 { alpha = (phase / 0.06) * 0.85 }
                if phase > 0.7 { alpha = (1.0 - (phase - 0.7) / 0.3) * 0.85 }

                let rect = CGRect(
                    x: x - Double(tumbleW) / 2,
                    y: y - Double(baseH) / 2,
                    width: Double(tumbleW),
                    height: Double(baseH)
                )
                context.opacity = alpha
                context.fill(
                    RoundedRectangle(cornerRadius: min(tumbleW, baseH) * 0.3).path(in: rect),
                    with: .color(color)
                )
            }
        }
        .allowsHitTesting(false)
        .drawingGroup()
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        // Haptic: notificationSuccess + rigid (celebratory double-tap)
        HapticsService.shared.success()
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.15) {
            HapticsService.shared.rigid()
        }

        guard !reduceMotion else {
            showCard = true; showIcon = true; showTitle = true
            showStats = true; showXP = true; showButton = true
            return
        }

        withAnimation(.spring(response: 0.6, dampingFraction: 0.7).delay(0.05)) {
            showCard = true
        }
        withAnimation(.spring(response: 0.4, dampingFraction: 0.6).delay(0.2)) {
            showIcon = true
        }
        withAnimation(.easeInOut(duration: 1.8).repeatForever(autoreverses: true).delay(0.3)) {
            glowPulse = 1.0
        }
        withAnimation(.linear(duration: 12).repeatForever(autoreverses: false).delay(0.3)) {
            ringRotation = 360
        }
        withAnimation(.easeOut(duration: 0.5).delay(0.5)) {
            showTitle = true
        }
        withAnimation(.easeOut(duration: 0.5).delay(0.8)) {
            showStats = true
        }
        withAnimation(.spring(response: 0.4, dampingFraction: 0.65).delay(1.1)) {
            showXP = true
        }
        withAnimation(.easeOut(duration: 0.4).delay(1.4)) {
            showButton = true
        }

        // Confetti burst — 1.5s gravity-affected animation
        withAnimation(.easeOut(duration: 1.5)) {
            particlePhase = 1.0
        }

        // Auto-dismiss after 5s if un-interacted
        DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
            dismissCelebration()
        }
    }

    private func dismissCelebration() {
        guard !dismissing else { return }
        withAnimation(.easeOut(duration: 0.4)) {
            dismissing = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
            onDismiss()
        }
    }
}

// MARK: - Milestone Achievement Celebration (Story 6.3.2)

/// Full-screen celebration shown when a user reaches a journey milestone.
/// Animated gradient background, spring badge entrance, floating particles, motivational message.
struct MilestoneAchievementCelebrationView: View {
    let milestoneName: String
    let milestoneIcon: String
    let milestoneColor: Color
    let motivationalMessage: String
    let onDismiss: () -> Void
    let onShare: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var showBadge = false
    @State private var showTitle = false
    @State private var showMessage = false
    @State private var showButtons = false
    @State private var dismissing = false
    @State private var gradientPhase: CGFloat = 0
    @State private var particlePhase: CGFloat = 0
    @State private var badgeGlow: CGFloat = 0

    private var isDark: Bool { colorScheme == .dark }

    // Caribbean floating orb colors
    private var orbColors: [Color] {
        isDark
            ? [.cyan.opacity(0.3), .purple.opacity(0.3), .yellow.opacity(0.2), .mint.opacity(0.2)]
            : [
                .caribbeanOcean.opacity(0.25),
                Color(hex: "#FB7185").opacity(0.2),
                .caribbeanSand.opacity(0.2),
                Color(hex: "#10b981").opacity(0.2),
            ]
    }

    var body: some View {
        GeometryReader { geo in
            ZStack {
                // Animated "golden hour" background gradient
                animatedBackground
                    .ignoresSafeArea()

                // Floating ambient orbs
                if !reduceMotion {
                    floatingParticles(size: geo.size)
                }

                // Content
                VStack(spacing: 0) {
                    Spacer()

                    // Badge — scale-up spring (0 → 1.1 → 1.0)
                    badgeView
                        .scaleEffect(showBadge ? 1.0 : 0.01)
                        .opacity(showBadge ? 1 : 0)

                    Spacer().frame(height: 32)

                    Text("Milestone Unlocked!")
                        .font(.system(size: 28, weight: .bold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                        .opacity(showTitle ? 1 : 0)
                        .offset(y: showTitle ? 0 : 12)

                    Spacer().frame(height: 8)

                    Text(milestoneName)
                        .font(.system(size: 22, weight: .semibold, design: .rounded))
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(LinearGradient(colors: [.orange, .yellow], startPoint: .leading, endPoint: .trailing))
                                : AnyShapeStyle(LinearGradient.caribbeanGradientSunset)
                        )
                        .opacity(showTitle ? 1 : 0)
                        .offset(y: showTitle ? 0 : 8)

                    Spacer().frame(height: 20)

                    // Motivational message — italic serif
                    Text(motivationalMessage)
                        .font(.system(size: 16, weight: .regular, design: .serif))
                        .italic()
                        .foregroundStyle(isDark ? .white.opacity(0.85) : .caribbeanPlum)
                        .multilineTextAlignment(.center)
                        .lineSpacing(4)
                        .padding(.horizontal, 40)
                        .opacity(showMessage ? 1 : 0)
                        .offset(y: showMessage ? 0 : 8)

                    Spacer().frame(height: 40)

                    // Buttons
                    VStack(spacing: 12) {
                        Button {
                            onShare()
                        } label: {
                            HStack(spacing: 8) {
                                Image(systemName: "square.and.arrow.up")
                                Text("Share Achievement")
                            }
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 14)
                            .background(
                                RoundedRectangle(cornerRadius: 14)
                                    .strokeBorder(
                                        isDark ? Color.white.opacity(0.2) : .caribbeanBorderSubtle,
                                        lineWidth: 1
                                    )
                            )
                        }

                        Button {
                            dismissCelebration()
                        } label: {
                            Text("Dive Back In")
                                .font(.system(size: 16, weight: .semibold, design: .rounded))
                                .foregroundStyle(.white)
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 14)
                                .background(
                                    RoundedRectangle(cornerRadius: 14)
                                        .fill(
                                            isDark
                                                ? LinearGradient(colors: [Color(hex: "#667eea"), Color(hex: "#06b6d4")], startPoint: .leading, endPoint: .trailing)
                                                : LinearGradient.caribbeanGradientOcean
                                        )
                                )
                        }
                    }
                    .padding(.horizontal, 32)
                    .opacity(showButtons ? 1 : 0)
                    .offset(y: showButtons ? 0 : 10)

                    Spacer()
                }
            }
            .opacity(dismissing ? 0 : 1)
        }
        .ignoresSafeArea()
        .onAppear { startSequence() }
    }

    // MARK: - Badge (80pt, gradient-filled, with particles)

    private var badgeView: some View {
        ZStack {
            // Radial glow
            Circle()
                .fill(
                    RadialGradient(
                        colors: [
                            milestoneColor.opacity(0.3),
                            milestoneColor.opacity(0.05),
                            .clear
                        ],
                        center: .center,
                        startRadius: 20,
                        endRadius: 100
                    )
                )
                .frame(width: 200, height: 200)
                .scaleEffect(0.9 + badgeGlow * 0.15)

            // Badge circle
            Circle()
                .fill(
                    LinearGradient(
                        colors: [milestoneColor, milestoneColor.opacity(0.7)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 80, height: 80)
                .shadow(color: milestoneColor.opacity(0.5), radius: 20, y: 4)

            Image(systemName: milestoneIcon)
                .font(.system(size: 36, weight: .bold))
                .foregroundStyle(.white)
        }
    }

    // MARK: - Animated "Golden Hour" Background

    private var animatedBackground: some View {
        let lightColors: [Color] = [
            Color(hex: "#FDF2F8"),
            Color(hex: "#FFF7ED"),
            Color(hex: "#F0FDFA"),
            Color(hex: "#FFFBEB"),
        ]
        let darkColors: [Color] = [
            Color(hex: "#1a1a2e"),
            Color(hex: "#16213e"),
            Color(hex: "#0f3460"),
        ]
        let phase = Double(gradientPhase)

        return LinearGradient(
            colors: isDark ? darkColors : lightColors,
            startPoint: UnitPoint(x: 0.3 + 0.2 * Foundation.sin(phase * .pi * 2), y: 0),
            endPoint: UnitPoint(x: 0.7 - 0.2 * Foundation.sin(phase * .pi * 2), y: 1)
        )
    }

    // MARK: - Floating Particles (20 orbs, 8-12s drift)

    private func floatingParticles(size: CGSize) -> some View {
        Canvas { context, canvasSize in
            let phase = Double(particlePhase)
            let colors = orbColors

            for i in 0..<20 {
                let seed = Double(i) * 73.7
                let color = colors[i % colors.count]

                let driftSpeed = 0.08 + seed.truncatingRemainder(dividingBy: 0.04)
                let x = canvasSize.width * (0.1 + (seed * 0.07).truncatingRemainder(dividingBy: 0.8))
                    + Foundation.sin(phase * driftSpeed * .pi * 2 + seed) * 30
                let y = canvasSize.height * (0.1 + (seed * 0.13).truncatingRemainder(dividingBy: 0.8))
                    + Foundation.cos(phase * driftSpeed * .pi * 2 + seed * 0.7) * 25

                let orbSize = CGFloat(8 + seed.truncatingRemainder(dividingBy: 20))
                let alpha = 0.3 + Foundation.sin(phase * .pi + seed * 0.5) * 0.15

                // Main orb
                let rect = CGRect(
                    x: x - Double(orbSize) / 2,
                    y: y - Double(orbSize) / 2,
                    width: Double(orbSize),
                    height: Double(orbSize)
                )
                context.opacity = alpha
                context.fill(Circle().path(in: rect), with: .color(color))

                // Soft blur ring for depth
                let blurRect = rect.insetBy(dx: -Double(orbSize) * 0.3, dy: -Double(orbSize) * 0.3)
                context.opacity = alpha * 0.3
                context.fill(Circle().path(in: blurRect), with: .color(color))
            }
        }
        .allowsHitTesting(false)
        .drawingGroup()
    }

    // MARK: - Animation Sequence

    private func startSequence() {
        HapticsService.shared.levelUp()

        guard !reduceMotion else {
            showBadge = true; showTitle = true
            showMessage = true; showButtons = true
            return
        }

        // Badge spring entrance: 0 → 1.1 → 1.0
        withAnimation(.spring(response: 0.5, dampingFraction: 0.55).delay(0.1)) {
            showBadge = true
        }
        withAnimation(.easeInOut(duration: 2.0).repeatForever(autoreverses: true).delay(0.3)) {
            badgeGlow = 1.0
        }

        // Background gradient slow shift
        withAnimation(.linear(duration: 8).repeatForever(autoreverses: true)) {
            gradientPhase = 1.0
        }
        // Floating particles slow drift
        withAnimation(.linear(duration: 12).repeatForever(autoreverses: true)) {
            particlePhase = 1.0
        }

        withAnimation(.easeOut(duration: 0.6).delay(0.5)) {
            showTitle = true
        }
        withAnimation(.easeOut(duration: 0.6).delay(1.0)) {
            showMessage = true
        }
        withAnimation(.easeOut(duration: 0.5).delay(1.5)) {
            showButtons = true
        }
    }

    private func dismissCelebration() {
        guard !dismissing else { return }
        withAnimation(.easeOut(duration: 0.5)) {
            dismissing = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            onDismiss()
        }
    }
}

// MARK: - Milestone Motivational Messages

enum MilestoneMessages {
    static func message(for milestoneName: String) -> String {
        let messages: [String: String] = [
            "First Steps": "Every journey begins with a single step. You've taken yours.",
            "Getting Started": "100 XP earned. Your vocabulary is taking root.",
            "Dedicated Learner": "500 words of knowledge. You're building something real.",
            "Rising Star": "1,500 XP — you're shining brighter with every word you learn.",
            "Word Warrior": "3,000 XP. Your dedication is truly remarkable.",
            "Knowledge Seeker": "You've mastered 5,000 XP of vocabulary. That's the foundation of a confident traveler.",
            "Sentence Crafter": "8,000 XP. You don't just know words — you weave them into meaning.",
            "Grammar Guardian": "12,000 XP of linguistic mastery. The rules of language bow to you.",
            "Vocabulary Virtuoso": "18,000 XP. Your word collection rivals a seasoned linguist.",
            "Language Master": "25,000 XP. You've earned a title few can claim.",
            "Fluency Pioneer": "35,000 XP. You're charting territory most only dream of.",
            "Polyglot Legend": "50,000 XP. You are a legend. Languages are your playground.",
        ]
        return messages[milestoneName] ?? "You've reached a new milestone. Keep going — greatness awaits."
    }
}

import SwiftUI
import SwiftData

// MARK: - Tier Onboarding Flow

/// A gorgeous 4-screen introduction to membership tiers shown on first launch.
/// Screen 1: "Learn for Free" — Free tier features with animated demo.
/// Screen 2: "Level Up" — Pro tier deep-dive with benefits.
/// Screen 3: "Go Elite" — Elite tier deep-dive with benefits.
/// Screen 4: "Try Royal for Free" — 14-day Royal Trial CTA.
struct TierOnboardingFlow: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    @State private var currentPage = 0
    @State private var appeared = false

    // Story 9.4 — per-page entrance animation phase (0 = hidden, increments to reveal each element)
    @State private var pageAnimPhase: [Int] = [0, 0, 0, 0]
    @State private var pageHasAppeared: [Bool] = [false, false, false, false]

    var body: some View {
        ZStack {
            // Background
            backgroundGradient

            VStack(spacing: 0) {
                // Skip button — pinned outside scroll (Story 9.1 AC5)
                HStack {
                    Spacer()
                    Button {
                        completeOnboarding(startTrial: false)
                    } label: {
                        Text("Skip")
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(.white.opacity(0.6))
                            .padding(.horizontal, 16)
                            .padding(.vertical, 8)
                    }
                }
                .padding(.top, 8)
                .padding(.trailing, 8)

                // Page content
                TabView(selection: $currentPage) {
                    learnForFreePage.tag(0)
                    levelUpProPage.tag(1)
                    goElitePage.tag(2)
                    tryRoyalPage.tag(3)
                }
                .tabViewStyle(.page(indexDisplayMode: .never))
                .animation(.spring(response: 0.4, dampingFraction: 0.85), value: currentPage)

                // Page indicator — pinned outside scroll (Story 9.1 AC4)
                pageIndicator
                    .padding(.bottom, 32)
            }
        }
        .opacity(appeared ? 1 : 0)
        .onAppear {
            withAnimation(.easeOut(duration: 0.5)) {
                appeared = true
            }
            // Trigger entrance animation for first page
            triggerPageAnimation(0)
        }
        .onChange(of: currentPage) { _, newPage in
            triggerPageAnimation(newPage)
        }
        .preferredColorScheme(.dark)
    }

    // MARK: - Entrance Animation (Story 9.4)

    /// Triggers staggered entrance animation for a page if it hasn't appeared yet.
    private func triggerPageAnimation(_ page: Int) {
        guard page >= 0, page < 4, !pageHasAppeared[page] else { return }
        pageHasAppeared[page] = true

        // Phase 1: icon (0.0s), Phase 2: title (0.1s), Phase 3: subtitle/badge (0.15s),
        // Phase 4: bullets (0.25s), Phase 5: CTA (0.45s)
        let delays: [Double] = [0.0, 0.1, 0.15, 0.25, 0.45]
        for (i, delay) in delays.enumerated() {
            let phase = i + 1
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
                withAnimation(.spring(duration: 0.5, bounce: 0.2)) {
                    pageAnimPhase[page] = phase
                }
            }
        }
    }

    /// Returns opacity and offset for a given element phase on a specific page.
    private func entranceOpacity(page: Int, phase: Int) -> Double {
        pageAnimPhase[page] >= phase ? 1.0 : 0.0
    }

    private func entranceOffset(page: Int, phase: Int) -> CGFloat {
        pageAnimPhase[page] >= phase ? 0 : 20
    }

    // MARK: - Background

    private var backgroundGradient: some View {
        LinearGradient(
            colors: backgroundColors,
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
        .ignoresSafeArea()
        .animation(.easeInOut(duration: 0.6), value: currentPage)
    }

    private var backgroundColors: [Color] {
        switch currentPage {
        case 0:
            return [
                Color(red: 15/255, green: 12/255, blue: 41/255),
                Color(red: 48/255, green: 15/255, blue: 85/255),
                Color(red: 20/255, green: 10/255, blue: 50/255)
            ]
        case 1:
            return [
                Color(red: 25/255, green: 10/255, blue: 55/255),
                Color(red: 60/255, green: 15/255, blue: 90/255),
                Color(red: 18/255, green: 8/255, blue: 42/255)
            ]
        case 2:
            return [
                Color(red: 15/255, green: 12/255, blue: 65/255),
                Color(red: 50/255, green: 10/255, blue: 110/255),
                Color(red: 12/255, green: 8/255, blue: 45/255)
            ]
        default:
            return [
                Color(red: 30/255, green: 15/255, blue: 10/255),
                Color(red: 80/255, green: 30/255, blue: 15/255),
                Color(red: 25/255, green: 12/255, blue: 35/255)
            ]
        }
    }

    // MARK: - Page 1: Learn for Free

    private var learnForFreePage: some View {
        GeometryReader { geo in
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 28) {
                    Spacer(minLength: 20)

                    // Animated icon — responsive sizing (Story 9.2)
                    let iconSize = min(geo.size.height * 0.22, 160.0)
                    ZStack {
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#667eea").opacity(0.3),
                                        Color(hex: "#764ba2").opacity(0.1),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: iconSize * 0.125,
                                    endRadius: iconSize * 0.5
                                )
                            )
                            .frame(width: iconSize, height: iconSize)

                        Image(systemName: "globe")
                            .font(.system(size: iconSize * 0.4, weight: .light))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .symbolEffect(.pulse, options: .repeating)
                    }
                    .opacity(entranceOpacity(page: 0, phase: 1))
                    .offset(y: entranceOffset(page: 0, phase: 1))

                    VStack(spacing: 12) {
                        Text("Learn for Free")
                            .font(.system(size: 32, weight: .bold, design: .rounded))
                            .foregroundStyle(.white)
                            .minimumScaleFactor(0.8)

                        Text("Start your language journey today")
                            .font(.system(size: 17, weight: .medium))
                            .foregroundStyle(.white.opacity(0.7))
                            .multilineTextAlignment(.center)
                    }
                    .opacity(entranceOpacity(page: 0, phase: 2))
                    .offset(y: entranceOffset(page: 0, phase: 2))

                    // Feature bullets (Story 9.3 — adaptive, multiline-safe)
                    VStack(spacing: 14) {
                        featureBullet(
                            icon: "gamecontroller.fill",
                            text: "All 3 game modes",
                            detail: "Flashcards, Grammar & Word Builder",
                            colors: [.cyan, .blue]
                        )
                        featureBullet(
                            icon: "globe",
                            text: "3 language pairs",
                            detail: "Spanish, French & German",
                            colors: [.green, .teal]
                        )
                        featureBullet(
                            icon: "clock.fill",
                            text: "30 minutes daily practice",
                            detail: "Build a consistent learning habit",
                            colors: [.orange, .yellow]
                        )
                    }
                    .padding(.horizontal, 24)
                    .opacity(entranceOpacity(page: 0, phase: 4))
                    .offset(y: entranceOffset(page: 0, phase: 4))

                    Spacer(minLength: 20)

                    // CTA
                    Button {
                        completeOnboarding(startTrial: false)
                    } label: {
                        Text("Continue with Free")
                            .font(.system(size: 17, weight: .semibold))
                            .foregroundStyle(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 16)
                            .background(
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: MembershipTier.free.gradientColors,
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                            )
                    }
                    .buttonStyle(LumenCTAPressStyle(glowColor: MembershipTier.free.gradientColors.first ?? .blue))
                    .padding(.horizontal, 32)
                    .opacity(entranceOpacity(page: 0, phase: 5))
                    .offset(y: entranceOffset(page: 0, phase: 5))

                    // "Or see what's available" link
                    Button {
                        withAnimation { currentPage = 1 }
                    } label: {
                        Text("See what's available →")
                            .font(.system(size: 14, weight: .medium))
                            .foregroundStyle(.white.opacity(0.5))
                    }
                    .padding(.bottom, 16)
                    .opacity(entranceOpacity(page: 0, phase: 5))
                }
                .frame(minHeight: geo.size.height)
            }
        }
    }

    // MARK: - Page 2: Level Up (Pro)

    private var levelUpProPage: some View {
        GeometryReader { geo in
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 24) {
                    Spacer(minLength: 20)

                    // Hero — bolt icon with responsive radial glow
                    let iconSize = min(geo.size.height * 0.22, 160.0)
                    ZStack {
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#a855f7").opacity(0.35),
                                        Color(hex: "#ec4899").opacity(0.15),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: iconSize * 0.1,
                                    endRadius: iconSize * 0.5
                                )
                            )
                            .frame(width: iconSize, height: iconSize)

                        Image(systemName: "bolt.fill")
                            .font(.system(size: iconSize * 0.35, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .symbolEffect(.bounce, options: .repeating.speed(0.3))
                    }
                    .opacity(entranceOpacity(page: 1, phase: 1))
                    .offset(y: entranceOffset(page: 1, phase: 1))

                    VStack(spacing: 8) {
                        Text("Level Up")
                            .font(.system(size: 32, weight: .bold, design: .rounded))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .minimumScaleFactor(0.8)

                        Text("Ditch the timer & unlock your first soundscape")
                            .font(.system(size: 16, weight: .medium))
                            .foregroundStyle(.white.opacity(0.7))
                            .multilineTextAlignment(.center)
                            .fixedSize(horizontal: false, vertical: true)
                            .padding(.horizontal, 24)
                    }
                    .opacity(entranceOpacity(page: 1, phase: 2))
                    .offset(y: entranceOffset(page: 1, phase: 2))

                    // Price badge
                    tierPriceBadge(tier: .pro)
                        .opacity(entranceOpacity(page: 1, phase: 3))
                        .offset(y: entranceOffset(page: 1, phase: 3))

                    // Feature bullets
                    VStack(spacing: 14) {
                        featureBullet(
                            icon: "infinity",
                            text: "Unlimited Practice",
                            detail: "No daily time limits — learn at your own pace",
                            colors: [Color(hex: "#a855f7"), Color(hex: "#d946ef")]
                        )
                        featureBullet(
                            icon: "headphones",
                            text: "1 Soundscape",
                            detail: "Focus-enhancing ambient audio while you learn",
                            colors: [Color(hex: "#ec4899"), Color(hex: "#f43f5e")]
                        )
                        featureBullet(
                            icon: "globe",
                            text: "7 Language Pairs",
                            detail: "More languages to explore and master",
                            colors: [.green, .teal]
                        )
                        featureBullet(
                            icon: "scope",
                            text: "Breathing Orbs",
                            detail: "Beautiful mindful learning animations",
                            colors: [.cyan, .blue]
                        )
                    }
                    .padding(.horizontal, 24)
                    .opacity(entranceOpacity(page: 1, phase: 4))
                    .offset(y: entranceOffset(page: 1, phase: 4))

                    Spacer(minLength: 20)

                    // Next page CTA
                    Button {
                        withAnimation { currentPage = 2 }
                    } label: {
                        Text("See Elite →")
                            .font(.system(size: 17, weight: .semibold))
                            .foregroundStyle(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 16)
                            .background(
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: MembershipTier.pro.gradientColors,
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                    .shadow(color: Color(hex: "#a855f7").opacity(0.35), radius: 12, y: 4)
                            )
                    }
                    .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#a855f7")))
                    .padding(.horizontal, 32)
                    .opacity(entranceOpacity(page: 1, phase: 5))
                    .offset(y: entranceOffset(page: 1, phase: 5))

                    // Continue with Free
                    Button {
                        completeOnboarding(startTrial: false)
                    } label: {
                        Text("Continue with Free")
                            .font(.system(size: 14, weight: .medium))
                            .foregroundStyle(.white.opacity(0.5))
                    }
                    .padding(.bottom, 16)
                    .opacity(entranceOpacity(page: 1, phase: 5))
                }
                .frame(minHeight: geo.size.height)
            }
        }
    }

    // MARK: - Page 3: Go Elite

    private var goElitePage: some View {
        GeometryReader { geo in
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 24) {
                    Spacer(minLength: 16)

                    // Hero — sparkles icon with responsive radial glow
                    let iconSize = min(geo.size.height * 0.22, 160.0)
                    ZStack {
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#7c3aed").opacity(0.35),
                                        Color(hex: "#06b6d4").opacity(0.15),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: iconSize * 0.1,
                                    endRadius: iconSize * 0.5
                                )
                            )
                            .frame(width: iconSize, height: iconSize)

                        Image(systemName: "sparkles")
                            .font(.system(size: iconSize * 0.35, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#7c3aed"), Color(hex: "#06b6d4")],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .symbolEffect(.pulse, options: .repeating)
                    }
                    .opacity(entranceOpacity(page: 2, phase: 1))
                    .offset(y: entranceOffset(page: 2, phase: 1))

                    VStack(spacing: 8) {
                        HStack(spacing: 6) {
                            Text("Go")
                            Text("Elite")
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: [Color(hex: "#7c3aed"), Color(hex: "#06b6d4")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        }
                        .font(.system(size: 32, weight: .bold, design: .rounded))
                        .foregroundStyle(.white)
                        .minimumScaleFactor(0.8)

                        Text("Full creative suite — visuals, sounds\n& every language")
                            .font(.system(size: 16, weight: .medium))
                            .foregroundStyle(.white.opacity(0.7))
                            .multilineTextAlignment(.center)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    .opacity(entranceOpacity(page: 2, phase: 2))
                    .offset(y: entranceOffset(page: 2, phase: 2))

                    // Popular + price badge
                    HStack(spacing: 12) {
                        Text("MOST POPULAR")
                            .font(.system(size: 11, weight: .heavy, design: .rounded))
                            .tracking(0.8)
                            .foregroundStyle(.white)
                            .padding(.horizontal, 12)
                            .padding(.vertical, 6)
                            .background(
                                Capsule()
                                    .fill(
                                        LinearGradient(
                                            colors: MembershipTier.elite.gradientColors,
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                            )

                        tierPriceBadge(tier: .elite)
                    }
                    .opacity(entranceOpacity(page: 2, phase: 3))
                    .offset(y: entranceOffset(page: 2, phase: 3))

                    // Feature bullets
                    VStack(spacing: 14) {
                        featureBullet(
                            icon: "headphones",
                            text: "8 Soundscapes",
                            detail: "Complete immersive ambient library",
                            colors: [Color(hex: "#7c3aed"), Color(hex: "#9333ea")]
                        )
                        featureBullet(
                            icon: "globe",
                            text: "25+ Language Pairs",
                            detail: "Every language pair we offer",
                            colors: [.green, .teal]
                        )
                        featureBullet(
                            icon: "waveform.path.ecg",
                            text: "Quantum Flow",
                            detail: "Mesmerising particle visualisations",
                            colors: [.cyan, .blue]
                        )
                        featureBullet(
                            icon: "cloud.fog.fill",
                            text: "Nebula Drift",
                            detail: "Stunning nebula backgrounds that evolve",
                            colors: [Color(hex: "#8b5cf6"), Color(hex: "#a78bfa")]
                        )
                        featureBullet(
                            icon: "wifi.slash",
                            text: "Offline Mode",
                            detail: "Learn anywhere, even without internet",
                            colors: [.orange, .yellow]
                        )
                    }
                    .padding(.horizontal, 24)
                    .opacity(entranceOpacity(page: 2, phase: 4))
                    .offset(y: entranceOffset(page: 2, phase: 4))

                    Spacer(minLength: 20)

                    // Next page CTA
                    Button {
                        withAnimation { currentPage = 3 }
                    } label: {
                        HStack(spacing: 8) {
                            Image(systemName: "crown.fill")
                                .font(.system(size: 14))
                            Text("See Royal Trial")
                                .font(.system(size: 17, weight: .semibold))
                        }
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: MembershipTier.elite.gradientColors,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .shadow(color: Color(hex: "#7c3aed").opacity(0.35), radius: 12, y: 4)
                        )
                    }
                    .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#7c3aed")))
                    .padding(.horizontal, 32)
                    .opacity(entranceOpacity(page: 2, phase: 5))
                    .offset(y: entranceOffset(page: 2, phase: 5))

                    // Continue with Free
                    Button {
                        completeOnboarding(startTrial: false)
                    } label: {
                        Text("Continue with Free")
                            .font(.system(size: 14, weight: .medium))
                            .foregroundStyle(.white.opacity(0.5))
                    }
                    .padding(.bottom, 16)
                    .opacity(entranceOpacity(page: 2, phase: 5))
                }
                .frame(minHeight: geo.size.height)
            }
        }
    }

    // MARK: - Page 4: Try Royal

    private var tryRoyalPage: some View {
        GeometryReader { geo in
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 24) {
                    Spacer(minLength: 16)

                    // Crown with responsive glow
                    let iconSize = min(geo.size.height * 0.22, 160.0)
                    ZStack {
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#fbbf24").opacity(0.35),
                                        Color(hex: "#f97316").opacity(0.15),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: iconSize * 0.1,
                                    endRadius: iconSize * 0.5
                                )
                            )
                            .frame(width: iconSize, height: iconSize)

                        Image(systemName: "crown.fill")
                            .font(.system(size: iconSize * 0.35, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .symbolEffect(.bounce, options: .repeating.speed(0.3))
                    }
                    .opacity(entranceOpacity(page: 3, phase: 1))
                    .offset(y: entranceOffset(page: 3, phase: 1))

                    VStack(spacing: 8) {
                        Text("Try Royal for Free")
                            .font(.system(size: 32, weight: .bold, design: .rounded))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .minimumScaleFactor(0.8)

                        Text("14 days of everything, completely free")
                            .font(.system(size: 16, weight: .medium))
                            .foregroundStyle(.white.opacity(0.7))
                            .multilineTextAlignment(.center)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    .opacity(entranceOpacity(page: 3, phase: 2))
                    .offset(y: entranceOffset(page: 3, phase: 2))

                    // Trial countdown badge
                    HStack(spacing: 8) {
                        Image(systemName: "clock.badge.checkmark.fill")
                            .font(.system(size: 16))
                            .foregroundStyle(.orange)

                        Text("14 DAY FREE TRIAL")
                            .font(.system(size: 13, weight: .heavy, design: .rounded))
                            .tracking(1)
                            .foregroundStyle(.white.opacity(0.9))
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 10)
                    .background(
                        Capsule()
                            .fill(.white.opacity(0.1))
                            .overlay(
                                Capsule()
                                    .strokeBorder(
                                        LinearGradient(
                                            colors: [Color(hex: "#fbbf24").opacity(0.5), Color(hex: "#f97316").opacity(0.3)],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        ),
                                        lineWidth: 1
                                    )
                            )
                    )
                    .opacity(entranceOpacity(page: 3, phase: 3))
                    .offset(y: entranceOffset(page: 3, phase: 3))

                    // Royal features list
                    VStack(spacing: 10) {
                        royalFeature(icon: "headphones", text: "All 12 Soundscapes")
                        royalFeature(icon: "globe", text: "25+ Language Pairs")
                        royalFeature(icon: "infinity", text: "Unlimited Practice")
                        royalFeature(icon: "scope", text: "6 Breathing Orb Themes")
                        royalFeature(icon: "waveform.path.ecg", text: "6 Quantum Flow Scenes")
                        royalFeature(icon: "cloud.fog.fill", text: "6 Nebula Drift Presets")
                        royalFeature(icon: "wifi.slash", text: "Offline Mode")
                    }
                    .padding(.horizontal, 32)
                    .opacity(entranceOpacity(page: 3, phase: 4))
                    .offset(y: entranceOffset(page: 3, phase: 4))

                    Spacer(minLength: 20)

                    // Start Trial CTA
                    Button {
                        completeOnboarding(startTrial: true)
                    } label: {
                        HStack(spacing: 8) {
                            Image(systemName: "crown.fill")
                                .font(.system(size: 15))
                            Text("Start Free Trial")
                                .font(.system(size: 17, weight: .bold))
                        }
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: MembershipTier.royal.gradientColors,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                                .shadow(color: Color(hex: "#fbbf24").opacity(0.4), radius: 12, y: 4)
                        )
                    }
                    .buttonStyle(LumenCTAPressStyle(glowColor: Color(hex: "#fbbf24")))
                    .padding(.horizontal, 32)
                    .opacity(entranceOpacity(page: 3, phase: 5))
                    .offset(y: entranceOffset(page: 3, phase: 5))

                    // Continue with Free
                    Button {
                        completeOnboarding(startTrial: false)
                    } label: {
                        Text("Continue with Free")
                            .font(.system(size: 14, weight: .medium))
                            .foregroundStyle(.white.opacity(0.5))
                    }
                    .padding(.bottom, 16)
                    .opacity(entranceOpacity(page: 3, phase: 5))
                }
                .frame(minHeight: geo.size.height)
            }
        }
    }

    // MARK: - Shared Components

    private func featureBullet(icon: String, text: String, detail: String, colors: [Color]) -> some View {
        HStack(spacing: 14) {
            Image(systemName: icon)
                .font(.system(size: 18, weight: .semibold))
                .foregroundStyle(
                    LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                )
                .frame(width: 36, height: 36)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(colors[0].opacity(0.15))
                )

            VStack(alignment: .leading, spacing: 2) {
                Text(text)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(.white)
                    .fixedSize(horizontal: false, vertical: true)
                Text(detail)
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(.white.opacity(0.5))
                    .fixedSize(horizontal: false, vertical: true)
            }

            Spacer()
        }
    }

    private func royalFeature(icon: String, text: String) -> some View {
        HStack(spacing: 10) {
            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 14))
                .foregroundStyle(Color(hex: "#fbbf24"))

            Image(systemName: icon)
                .font(.system(size: 13, weight: .medium))
                .foregroundStyle(.white.opacity(0.6))
                .frame(width: 20)

            Text(text)
                .font(.system(size: 14, weight: .medium))
                .foregroundStyle(.white.opacity(0.85))

            Spacer()
        }
    }

    private func tierPriceBadge(tier: MembershipTier) -> some View {
        let priceStr = NumberFormatter.localizedString(
            from: tier.monthlyPrice as NSDecimalNumber,
            number: .currency
        )
        return Text(priceStr + "/mo")
            .font(.system(size: 13, weight: .semibold, design: .rounded))
            .foregroundStyle(.white.opacity(0.9))
            .padding(.horizontal, 14)
            .padding(.vertical, 6)
            .background(
                Capsule()
                    .fill(.white.opacity(0.1))
                    .overlay(
                        Capsule()
                            .strokeBorder(.white.opacity(0.15), lineWidth: 1)
                    )
            )
    }

    // MARK: - Page Indicator

    private var pageIndicator: some View {
        HStack(spacing: 8) {
            ForEach(0..<4, id: \.self) { index in
                Capsule()
                    .fill(
                        currentPage == index
                            ? LinearGradient(
                                colors: pageIndicatorColors(for: index),
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                            : LinearGradient(
                                colors: [.white.opacity(0.25)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                    )
                    .frame(width: currentPage == index ? 24 : 8, height: 8)
                    .animation(.spring(response: 0.35, dampingFraction: 0.7), value: currentPage)
            }
        }
    }

    private func pageIndicatorColors(for index: Int) -> [Color] {
        switch index {
        case 0: return MembershipTier.free.gradientColors
        case 1: return MembershipTier.pro.gradientColors
        case 2: return MembershipTier.elite.gradientColors
        default: return MembershipTier.royal.gradientColors
        }
    }

    // MARK: - Actions

    private func completeOnboarding(startTrial: Bool) {
        if startTrial {
            tierManager.startTrial(profile: profile)
        }
        UserDefaults.standard.set(true, forKey: "hasSeenTierOnboarding")
        dismiss()
    }
}

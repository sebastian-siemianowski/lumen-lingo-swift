import SwiftUI
import SwiftData

// MARK: - Tier Onboarding Flow

/// A gorgeous 3-screen introduction to membership tiers shown on first launch.
/// Screen 1: "Learn for Free" — Free tier features with animated demo.
/// Screen 2: "Go Further" — Pro/Elite comparison cards.
/// Screen 3: "Try Royal for Free" — 14-day Royal Trial CTA.
struct TierOnboardingFlow: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    @State private var currentPage = 0
    @State private var appeared = false
    @State private var confettiTrigger = false

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack {
            // Background
            backgroundGradient

            VStack(spacing: 0) {
                // Skip button
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
                    goFurtherPage.tag(1)
                    tryRoyalPage.tag(2)
                }
                .tabViewStyle(.page(indexDisplayMode: .never))
                .animation(.spring(response: 0.4, dampingFraction: 0.85), value: currentPage)

                // Page indicator
                pageIndicator
                    .padding(.bottom, 32)
            }
        }
        .opacity(appeared ? 1 : 0)
        .onAppear {
            withAnimation(.easeOut(duration: 0.5)) {
                appeared = true
            }
        }
        .preferredColorScheme(.dark)
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
                Color(red: 20/255, green: 10/255, blue: 60/255),
                Color(red: 72/255, green: 12/255, blue: 120/255),
                Color(red: 15/255, green: 8/255, blue: 40/255)
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
        VStack(spacing: 28) {
            Spacer()

            // Animated icon
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
                            startRadius: 20,
                            endRadius: 80
                        )
                    )
                    .frame(width: 160, height: 160)

                Image(systemName: "globe")
                    .font(.system(size: 64, weight: .light))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse, options: .repeating)
            }

            VStack(spacing: 12) {
                Text("Learn for Free")
                    .font(.system(size: 32, weight: .bold, design: .rounded))
                    .foregroundStyle(.white)

                Text("Start your language journey today")
                    .font(.system(size: 17, weight: .medium))
                    .foregroundStyle(.white.opacity(0.7))
            }

            // Feature bullets
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
            .padding(.horizontal, 32)

            Spacer()

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
            .padding(.horizontal, 32)

            // "Or see what's available" link
            Button {
                withAnimation { currentPage = 1 }
            } label: {
                Text("See what's available →")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(.white.opacity(0.5))
            }
            .padding(.bottom, 16)
        }
    }

    // MARK: - Page 2: Go Further

    private var goFurtherPage: some View {
        VStack(spacing: 20) {
            Spacer(minLength: 8)

            // Hero visual — animated sparkles with radial glow
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(hex: "#a855f7").opacity(0.35),
                                Color(hex: "#7c3aed").opacity(0.15),
                                .clear
                            ],
                            center: .center,
                            startRadius: 15,
                            endRadius: 80
                        )
                    )
                    .frame(width: 140, height: 140)

                Image(systemName: "sparkles")
                    .font(.system(size: 52, weight: .medium))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse, options: .repeating)
            }

            VStack(spacing: 8) {
                Text("Go Further")
                    .font(.system(size: 32, weight: .bold, design: .rounded))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#a855f7"), Color(hex: "#ec4899")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )

                Text("Every tier builds on the last — upgrade\nwhenever you're ready")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(.white.opacity(0.7))
                    .multilineTextAlignment(.center)
            }

            // Vertical tier progression
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 14) {
                    tierProgressionCard(
                        tier: .pro,
                        badge: "GREAT VALUE",
                        tagline: "Unlock your first soundscape & ditch the timer",
                        features: [
                            (icon: "headphones", text: "1 Soundscape", detail: "Focus-enhancing ambient audio"),
                            (icon: "infinity", text: "Unlimited Practice", detail: "No daily time limits"),
                            (icon: "globe", text: "7 Language Pairs", detail: "More languages to explore"),
                            (icon: "scope", text: "Breathing Orbs", detail: "Mindful learning animations"),
                        ]
                    )

                    tierProgressionCard(
                        tier: .elite,
                        badge: "MOST POPULAR",
                        tagline: "Full creative suite — visuals, sounds & every language",
                        features: [
                            (icon: "headphones", text: "8 Soundscapes", detail: "Complete ambient library"),
                            (icon: "globe", text: "25+ Language Pairs", detail: "Every pair we offer"),
                            (icon: "waveform.path.ecg", text: "Quantum Flow", detail: "Mesmerising particle scenes"),
                            (icon: "cloud.fog.fill", text: "Nebula Drift", detail: "Evolving nebula backgrounds"),
                            (icon: "wifi.slash", text: "Offline Mode", detail: "Learn anywhere, no internet needed"),
                        ]
                    )
                }
                .padding(.horizontal, 24)
            }

            // CTA: See Royal Trial
            Button {
                withAnimation { currentPage = 2 }
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
                                colors: [Color(hex: "#7c3aed"), Color(hex: "#a21caf")],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .shadow(color: Color(hex: "#a855f7").opacity(0.35), radius: 12, y: 4)
                )
            }
            .padding(.horizontal, 32)

            // Continue with Free
            Button {
                completeOnboarding(startTrial: false)
            } label: {
                Text("Continue with Free")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(.white.opacity(0.5))
            }
            .padding(.bottom, 16)
        }
    }

    // MARK: - Page 3: Try Royal

    private var tryRoyalPage: some View {
        VStack(spacing: 24) {
            Spacer()

            // Crown with glow
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
                            startRadius: 15,
                            endRadius: 80
                        )
                    )
                    .frame(width: 160, height: 160)

                Image(systemName: "crown.fill")
                    .font(.system(size: 56, weight: .medium))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(hex: "#fbbf24"), Color(hex: "#f97316")],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                    .symbolEffect(.bounce, options: .repeating.speed(0.3))
            }

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

                Text("14 days of everything, completely free")
                    .font(.system(size: 16, weight: .medium))
                    .foregroundStyle(.white.opacity(0.7))
            }

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
            .padding(.horizontal, 40)

            Spacer()

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
            .padding(.horizontal, 32)

            // Continue with Free
            Button {
                completeOnboarding(startTrial: false)
            } label: {
                Text("Continue with Free")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(.white.opacity(0.5))
            }
            .padding(.bottom, 16)
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
                Text(detail)
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(.white.opacity(0.5))
            }

            Spacer()
        }
    }

    private func tierProgressionCard(
        tier: MembershipTier,
        badge: String,
        tagline: String,
        features: [(icon: String, text: String, detail: String)]
    ) -> some View {
        VStack(spacing: 14) {
            // Badge + tier header
            HStack(spacing: 10) {
                Text(badge)
                    .font(.system(size: 10, weight: .heavy, design: .rounded))
                    .tracking(0.8)
                    .foregroundStyle(.white)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 4)
                    .background(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: tier.gradientColors,
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    )

                Spacer()

                let priceStr = NumberFormatter.localizedString(
                    from: tier.monthlyPrice as NSDecimalNumber,
                    number: .currency
                )
                Text(priceStr + "/mo")
                    .font(.system(size: 13, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.6))
            }

            // Tier name + tagline
            HStack(spacing: 10) {
                Image(systemName: tier.iconName)
                    .font(.system(size: 24, weight: .semibold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                VStack(alignment: .leading, spacing: 2) {
                    Text(tier.displayName)
                        .font(.system(size: 20, weight: .bold))
                        .foregroundStyle(.white)
                    Text(tagline)
                        .font(.system(size: 13, weight: .medium))
                        .foregroundStyle(.white.opacity(0.55))
                        .lineLimit(2)
                }

                Spacer(minLength: 0)
            }

            Divider()
                .overlay(
                    LinearGradient(
                        colors: tier.gradientColors.map { $0.opacity(0.4) },
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            // Features
            VStack(alignment: .leading, spacing: 10) {
                ForEach(Array(features.enumerated()), id: \.offset) { _, feature in
                    HStack(spacing: 10) {
                        Image(systemName: feature.icon)
                            .font(.system(size: 13, weight: .semibold))
                            .foregroundStyle(tier.accentColor)
                            .frame(width: 22)

                        VStack(alignment: .leading, spacing: 1) {
                            Text(feature.text)
                                .font(.system(size: 14, weight: .semibold))
                                .foregroundStyle(.white.opacity(0.9))
                            Text(feature.detail)
                                .font(.system(size: 11, weight: .medium))
                                .foregroundStyle(.white.opacity(0.45))
                        }

                        Spacer()
                    }
                }
            }
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(.white.opacity(0.07))
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            LinearGradient(
                                colors: tier.gradientColors.map { $0.opacity(0.45) },
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 1
                        )
                )
                .shadow(color: tier.gradientColors[0].opacity(0.2), radius: 16, y: 6)
        )
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

    // MARK: - Page Indicator

    private var pageIndicator: some View {
        HStack(spacing: 8) {
            ForEach(0..<3, id: \.self) { index in
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
        case 1: return MembershipTier.elite.gradientColors
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

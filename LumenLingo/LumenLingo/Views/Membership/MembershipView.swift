import SwiftUI

// MARK: - Membership View

/// Pricing / subscription page with 4 tiers, billing toggle, comparison table, and FAQ.
/// This is a mock UI — no actual IAP. Matches the React component's layout and visual richness.
struct MembershipView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var showComparison = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 32) {
                heroSection
                tiersSection

                comparisonToggle
                if showComparison { comparisonTable }

                Spacer(minLength: 80)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .background(
            Group {
                if isDark {
                    LinearGradient(
                        colors: [Color(hex: "#0a0a1a"), Color(hex: "#0d1530"), Color(hex: "#0a0a1a")],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                } else {
                    LinearGradient(
                        colors: [Color(hex: "#C494FC"), Color(hex: "#F472B6"), Color(hex: "#FB923C")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                }
            }
            .ignoresSafeArea()
        )
        .navigationBarTitleDisplayMode(.inline)
        .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
    }

    // MARK: - Hero

    private var heroSection: some View {
        VStack(spacing: 12) {
            Text(L.plansAndPricing)
                .font(.caption.bold())
                .tracking(1.5)
                .textCase(.uppercase)
                .foregroundStyle(.purple.opacity(0.8))
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(
                    Capsule()
                        .fill(.purple.opacity(0.12))
                        .overlay(Capsule().strokeBorder(.purple.opacity(0.25), lineWidth: 1))
                )

            VStack(spacing: 4) {
                Text(L.investInYour)
                    .font(.system(size: 36, weight: .black))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple, .pink],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                Text(L.languageMastery)
                    .font(.system(size: 36, weight: .black))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple, .pink, .orange],
                            startPoint: .leading, endPoint: .trailing
                        )
                    )
            }

            Text(L.membershipSubtitle)
                .multilineTextAlignment(.center)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.65) : .caribbeanPlum)
                .padding(.top, 4)
        }
    }

    // MARK: - Tiers

    private var tiersSection: some View {
        VStack(spacing: 14) {
            ForEach(Array(tiers.enumerated()), id: \.element.id) { index, tier in
                TierCardView(
                    tier: tier,
                    index: index
                )
            }
        }
    }

    // MARK: - Comparison Toggle

    private var comparisonToggle: some View {
        Button {
            withAnimation(.spring(response: 0.4)) { showComparison.toggle() }
        } label: {
            HStack {
                Text(L.featureComparison)
                    .font(.subheadline.bold())
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk)
                Image(systemName: showComparison ? "chevron.up" : "chevron.down")
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
            }
            .padding(.vertical, 10)
            .padding(.horizontal, 20)
            .background(
                Capsule().fill(.white.opacity(0.06))
                    .overlay(Capsule().strokeBorder(.white.opacity(0.06), lineWidth: 1))
            )
        }
        .buttonStyle(LumenPressStyle(weight: .medium))
    }

    // MARK: - Comparison Table

    private var comparisonTable: some View {
        VStack(spacing: 0) {
            // Header row
            HStack(spacing: 0) {
                Text(L.feature)
                    .font(.caption2.bold())
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                    .frame(maxWidth: .infinity, alignment: .leading)
                ForEach([L.free, L.pro, L.elite, L.royal], id: \.self) { name in
                    Text(name)
                        .font(.caption2.bold())
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                        .frame(maxWidth: .infinity)
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)

            Divider().background(.white.opacity(0.08))

            ForEach(Array(Self.comparisonFeatures.enumerated()), id: \.offset) { idx, feature in
                HStack(spacing: 0) {
                    Text(feature.name)
                        .font(.caption2)
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk)
                        .frame(maxWidth: .infinity, alignment: .leading)

                    ForEach(feature.values, id: \.self) { val in
                        Group {
                            if val == "✓" {
                                Image(systemName: "checkmark")
                                    .font(.caption2)
                                    .foregroundStyle(.green)
                            } else if val == "—" {
                                Text("—")
                                    .font(.caption2)
                                    .foregroundStyle(isDark ? .white.opacity(0.2) : .caribbeanMist.opacity(0.5))
                            } else {
                                Text(val)
                                    .font(.caption2)
                                    .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                            }
                        }
                        .frame(maxWidth: .infinity)
                    }
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 8)
                .background(idx.isMultiple(of: 2) ? .white.opacity(0.02) : .clear)
            }
        }
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 18)
                        .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                )
        )
        .transition(.opacity.combined(with: .move(edge: .top)))
    }

    // MARK: - Data

    struct TierData: Identifiable {
        let id: String
        let name: String
        let icon: String
        let gradientColors: [Color]
        let priceMonthly: Double
        let tagline: String
        let benefits: [(text: String, impact: String)]
        let cta: String
        let isCurrent: Bool
        let isHighlighted: Bool
    }

    private var tiers: [TierData] {
        [
            TierData(
                id: "free", name: L.starter, icon: "globe",
                gradientColors: [Color(hex: "#94a3b8"), Color(hex: "#64748b")],
                priceMonthly: 0,
                tagline: L.beginYourJourney,
                benefits: [
                    ("3 language pairs", "core"),
                    ("All game modes", "core"),
                    ("30 min/day practice", "limited"),
                    ("Basic analytics", "limited")
                ],
                cta: L.currentPlan, isCurrent: true, isHighlighted: false
            ),
            TierData(
                id: "pro", name: L.pro, icon: "bolt.fill",
                gradientColors: [Color(hex: "#a855f7"), Color(hex: "#d946ef"), Color(hex: "#ec4899")],
                priceMonthly: 9.99,
                tagline: L.masterLanguagesFaster,
                benefits: [
                    ("7 language pairs", "premium"),
                    ("Unlimited practice", "premium"),
                    ("Advanced analytics", "premium"),
                    ("3 Breathing Orbs", "delight"),
                    ("Offline access", "premium")
                ],
                cta: L.startPro, isCurrent: false, isHighlighted: false
            ),
            TierData(
                id: "elite", name: L.elite, icon: "sparkles",
                gradientColors: [Color(hex: "#7c3aed"), Color(hex: "#9333ea"), Color(hex: "#a21caf")],
                priceMonthly: 19.99,
                tagline: L.unlockFullPotential,
                benefits: [
                    ("Everything in Pro", "inherit"),
                    ("25+ language pairs", "exclusive"),
                    ("4 Quantum scenes", "exclusive"),
                    ("4 Nebula presets", "exclusive"),
                    ("Early feature access", "exclusive")
                ],
                cta: L.upgradeToElite, isCurrent: false, isHighlighted: true
            ),
            TierData(
                id: "royal", name: L.royal, icon: "crown.fill",
                gradientColors: [Color(hex: "#fbbf24"), Color(hex: "#f97316"), Color(hex: "#f43f5e")],
                priceMonthly: 99.99,
                tagline: L.ultimateExperience,
                benefits: [
                    ("Everything in Elite", "inherit"),
                    ("6 Breathing Orbs (all)", "ultimate"),
                    ("6 Quantum scenes", "ultimate"),
                    ("6 Nebula presets", "ultimate")
                ],
                cta: L.ascendToRoyal, isCurrent: false, isHighlighted: false
            )
        ]
    }

    struct ComparisonFeature {
        let name: String
        let values: [String]
    }

    static let comparisonFeatures: [ComparisonFeature] = [
        .init(name: "Language Pairs", values: ["3 pairs", "12 pairs", "25 pairs", "25 pairs"]),
        .init(name: "Practice Time", values: ["30 min/day", "Unlimited", "Unlimited", "Unlimited"]),
        .init(name: "Game Modes", values: ["All 3", "All 3", "All 3", "All 3"]),
        .init(name: "Progress Tracking", values: ["Basic", "Advanced", "Advanced", "Advanced"]),
        .init(name: "Breathing Orbs", values: ["—", "6 schemes", "6 schemes", "6 schemes"]),
        .init(name: "Quantum Flow", values: ["—", "—", "4 scenes", "6 scenes"]),
        .init(name: "Nebula Drift", values: ["—", "—", "4 presets", "6 presets"]),
        .init(name: "Animation Controls", values: ["—", "—", "Full", "Full"]),
        .init(name: "Offline Mode", values: ["—", "✓", "✓", "✓"]),
    ]
}

// MARK: - Tier Card

struct TierCardView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    let tier: MembershipView.TierData
    let index: Int

    @State private var isHovered = false
    @State private var ctaPressed = false

    private var price: Double {
        tier.priceMonthly
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            // Header
            HStack {
                Image(systemName: tier.icon)
                    .font(.title3)
                    .foregroundStyle(
                        LinearGradient(
                            colors: tier.gradientColors,
                            startPoint: .topLeading, endPoint: .bottomTrailing
                        )
                    )

                VStack(alignment: .leading, spacing: 2) {
                    Text(tier.name)
                        .font(.headline)
                        .foregroundStyle(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                    Text(tier.tagline)
                        .font(.caption)
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
                }

                Spacer()

                if tier.isHighlighted {
                    Text(L.popular)
                        .font(.system(size: 9, weight: .heavy))
                        .tracking(1)
                        .foregroundStyle(.white)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                        )
                }
            }

            // Price
            HStack(alignment: .firstTextBaseline, spacing: 4) {
                if price == 0 {
                    Text(L.free)
                        .font(.system(size: 28, weight: .black))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                } else {
                    Text("£\(String(format: "%.2f", price))")
                        .font(.system(size: 28, weight: .black))
                        .foregroundStyle(
                            LinearGradient(
                                colors: tier.gradientColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                    Text("/\(L.perMonth)")
                        .font(.subheadline)
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                }
            }

            // Benefits
            VStack(alignment: .leading, spacing: 6) {
                ForEach(Array(tier.benefits.enumerated()), id: \.offset) { _, benefit in
                    HStack(spacing: 8) {
                        Image(systemName: benefitIcon(benefit.impact))
                            .font(.caption2)
                            .foregroundStyle(benefitColor(benefit.impact))
                        Text(benefit.text)
                            .font(.subheadline)
                            .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                    }
                }
            }

            // CTA button
            Text(tier.cta)
                .font(.subheadline.bold())
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(
                    Capsule()
                        .fill(
                            tier.isCurrent
                                ? AnyShapeStyle(.white.opacity(0.08))
                                : AnyShapeStyle(
                                    LinearGradient(
                                        colors: tier.gradientColors,
                                        startPoint: .leading, endPoint: .trailing
                                    )
                                )
                        )
                )
                .scaleEffect(ctaPressed ? 0.93 : 1.0)
                .brightness(ctaPressed ? -0.06 : 0)
                .shadow(
                    color: (tier.gradientColors.first ?? .purple).opacity(ctaPressed ? 0.50 : 0.15),
                    radius: ctaPressed ? 22 : 8,
                    y: ctaPressed ? 2 : 4
                )
                .saturation(ctaPressed ? 1.12 : 1.0)
                .animation(.spring(response: 0.25, dampingFraction: 0.55), value: ctaPressed)
                .contentShape(Capsule())
                .onTapGesture {
                    guard !tier.isCurrent else { return }
                    // Press-in
                    withAnimation(.spring(response: 0.08, dampingFraction: 0.80)) {
                        ctaPressed = true
                    }
                    let g = UIImpactFeedbackGenerator(style: .medium)
                    g.impactOccurred()
                    // Spring-back
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.10) {
                        withAnimation(.spring(response: 0.30, dampingFraction: 0.50)) {
                            ctaPressed = false
                        }
                    }
                }
                .opacity(tier.isCurrent ? 0.5 : 1.0)
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 22)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 22)
                        .strokeBorder(
                            tier.isHighlighted
                                ? LinearGradient(colors: tier.gradientColors, startPoint: .topLeading, endPoint: .bottomTrailing)
                                : LinearGradient(colors: [.white.opacity(0.06)], startPoint: .top, endPoint: .bottom),
                            lineWidth: tier.isHighlighted ? 1.5 : 1
                        )
                )
                .shadow(
                    color: tier.isHighlighted ? tier.gradientColors.first!.opacity(0.2) : .clear,
                    radius: 20, y: 8
                )
        )
    }

    private func benefitIcon(_ impact: String) -> String {
        switch impact {
        case "core": "checkmark.circle.fill"
        case "limited": "minus.circle.fill"
        case "premium": "star.fill"
        case "delight": "paintpalette.fill"
        case "exclusive": "sparkle"
        case "inherit": "arrow.right.circle.fill"
        case "ultimate": "crown.fill"
        default: "checkmark"
        }
    }

    private func benefitColor(_ impact: String) -> Color {
        switch impact {
        case "core": .green
        case "limited": .yellow.opacity(0.7)
        case "premium": .purple
        case "delight": .pink
        case "exclusive": .cyan
        case "inherit": .white.opacity(0.4)
        case "ultimate": .orange
        default: .white.opacity(0.5)
        }
    }
}

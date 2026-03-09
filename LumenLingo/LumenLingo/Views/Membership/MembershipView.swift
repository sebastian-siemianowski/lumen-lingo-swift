import SwiftUI

// MARK: - Membership View

/// Pricing / subscription page with 4 tiers, billing toggle, comparison table, and FAQ.
/// This is a mock UI — no actual IAP. Matches the React component's layout and visual richness.
struct MembershipView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @State private var billingCycle: BillingCycle = .monthly
    @State private var expandedFaq: Int? = nil
    @State private var showComparison = false

    private var L: AppStrings { localization.strings }

    enum BillingCycle { case monthly, yearly }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 32) {
                heroSection
                billingToggle
                tiersSection

                comparisonToggle
                if showComparison { comparisonTable }

                faqSection
                trustIndicators
                Spacer(minLength: 80)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .background(
            LinearGradient(
                colors: [Color(hex: "#0a0a1a"), Color(hex: "#0d1530"), Color(hex: "#0a0a1a")],
                startPoint: .top,
                endPoint: .bottom
            )
            .ignoresSafeArea()
        )
        .navigationTitle(L.membership)
        .navigationBarTitleDisplayMode(.large)
        .toolbarColorScheme(.dark, for: .navigationBar)
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
                    .foregroundStyle(.white)
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
                .foregroundStyle(.white.opacity(0.65))
                .padding(.top, 4)
        }
    }

    // MARK: - Billing Toggle

    private var billingToggle: some View {
        HStack(spacing: 0) {
            toggleButton(L.monthly, isSelected: billingCycle == .monthly) {
                withAnimation(.spring(response: 0.35)) { billingCycle = .monthly }
            }
            toggleButton(L.yearlyDiscount, isSelected: billingCycle == .yearly) {
                withAnimation(.spring(response: 0.35)) { billingCycle = .yearly }
            }
        }
        .padding(3)
        .background(
            Capsule().fill(.white.opacity(0.06))
        )
    }

    private func toggleButton(_ label: String, isSelected: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Text(label)
                .font(.subheadline.bold())
                .foregroundStyle(isSelected ? .white : .white.opacity(0.5))
                .padding(.horizontal, 20)
                .padding(.vertical, 8)
                .background(
                    Capsule()
                        .fill(isSelected
                            ? AnyShapeStyle(LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .leading, endPoint: .trailing
                            ))
                            : AnyShapeStyle(.clear)
                        )
                )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Tiers

    private var tiersSection: some View {
        VStack(spacing: 14) {
            ForEach(Array(tiers.enumerated()), id: \.element.id) { index, tier in
                TierCardView(
                    tier: tier,
                    billingCycle: billingCycle,
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
                    .foregroundStyle(.white.opacity(0.7))
                Image(systemName: showComparison ? "chevron.up" : "chevron.down")
                    .foregroundStyle(.white.opacity(0.5))
            }
            .padding(.vertical, 10)
            .padding(.horizontal, 20)
            .background(
                Capsule().fill(.white.opacity(0.06))
                    .overlay(Capsule().strokeBorder(.white.opacity(0.06), lineWidth: 1))
            )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Comparison Table

    private var comparisonTable: some View {
        VStack(spacing: 0) {
            // Header row
            HStack(spacing: 0) {
                Text(L.feature)
                    .font(.caption2.bold())
                    .foregroundStyle(.white.opacity(0.5))
                    .frame(maxWidth: .infinity, alignment: .leading)
                ForEach([L.free, L.pro, L.elite, L.royal], id: \.self) { name in
                    Text(name)
                        .font(.caption2.bold())
                        .foregroundStyle(.white.opacity(0.6))
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
                        .foregroundStyle(.white.opacity(0.7))
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
                                    .foregroundStyle(.white.opacity(0.2))
                            } else {
                                Text(val)
                                    .font(.caption2)
                                    .foregroundStyle(.white.opacity(0.6))
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

    // MARK: - FAQ

    private var faqSection: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack(spacing: 6) {
                Image(systemName: "questionmark.circle.fill")
                    .foregroundStyle(.purple)
                Text(L.faq)
                    .font(.headline)
                    .foregroundStyle(.white)
            }

            ForEach(Array(Self.faqs.enumerated()), id: \.offset) { idx, faq in
                VStack(alignment: .leading, spacing: 0) {
                    Button {
                        withAnimation(.spring(response: 0.35)) {
                            expandedFaq = expandedFaq == idx ? nil : idx
                        }
                    } label: {
                        HStack {
                            Text(faq.question)
                                .font(.subheadline.bold())
                                .foregroundStyle(.white)
                                .multilineTextAlignment(.leading)
                            Spacer()
                            Image(systemName: expandedFaq == idx ? "chevron.up" : "chevron.down")
                                .font(.caption)
                                .foregroundStyle(.white.opacity(0.4))
                        }
                        .padding(14)
                    }
                    .buttonStyle(.plain)

                    if expandedFaq == idx {
                        Text(faq.answer)
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.6))
                            .padding(.horizontal, 14)
                            .padding(.bottom, 14)
                            .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                }
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .fill(.white.opacity(0.04))
                        .overlay(
                            RoundedRectangle(cornerRadius: 14)
                                .strokeBorder(.white.opacity(0.04), lineWidth: 1)
                        )
                )
            }
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 22)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 22)
                        .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                )
        )
    }

    // MARK: - Trust

    private var trustIndicators: some View {
        VStack(spacing: 10) {
            HStack(spacing: 16) {
                trustBadge(icon: "lock.fill", text: L.secure)
                trustBadge(icon: "arrow.uturn.backward.circle.fill", text: L.dayRefund)
                trustBadge(icon: "xmark.circle.fill", text: L.cancelAnytime)
            }

            Text(L.pricesShownUSD)
                .font(.caption2)
                .foregroundStyle(.white.opacity(0.3))
        }
        .padding(.vertical, 8)
    }

    private func trustBadge(icon: String, text: String) -> some View {
        VStack(spacing: 4) {
            Image(systemName: icon)
                .font(.caption)
                .foregroundStyle(.green.opacity(0.7))
            Text(text)
                .font(.caption2)
                .foregroundStyle(.white.opacity(0.4))
        }
    }

    // MARK: - Data

    struct TierData: Identifiable {
        let id: String
        let name: String
        let icon: String
        let gradientColors: [Color]
        let priceMonthly: Double
        let priceYearly: Double
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
                priceMonthly: 0, priceYearly: 0,
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
                priceMonthly: 9.99, priceYearly: 99.99,
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
                priceMonthly: 19.99, priceYearly: 199.99,
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
                priceMonthly: 99.99, priceYearly: 999.99,
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
        .init(name: "Language Pairs", values: ["3 core", "7 core", "25+ beta", "25+ beta"]),
        .init(name: "Practice Time", values: ["30 min/day", "Unlimited", "Unlimited", "Unlimited"]),
        .init(name: "Game Modes", values: ["All 3", "All 3", "All 3", "All 3"]),
        .init(name: "Progress Tracking", values: ["Basic", "Advanced", "Advanced", "Advanced"]),
        .init(name: "Breathing Orbs", values: ["—", "6 schemes", "6 schemes", "6 schemes"]),
        .init(name: "Quantum Flow", values: ["—", "—", "4 scenes", "6 scenes"]),
        .init(name: "Nebula Drift", values: ["—", "—", "4 presets", "6 presets"]),
        .init(name: "Animation Controls", values: ["—", "—", "Full", "Full"]),
        .init(name: "Offline Mode", values: ["—", "✓", "✓", "✓"]),
    ]

    struct FaqItem {
        let question: String
        let answer: String
    }

    static let faqs: [FaqItem] = [
        .init(
            question: "Can I cancel anytime?",
            answer: "Yes! You can cancel your subscription at any time from your profile settings. Your access continues until the end of the billing period."
        ),
        .init(
            question: "Which languages are available?",
            answer: "We support 9 languages (English, Spanish, French, German, Italian, Portuguese, Polish, Czech, Catalan) with 7 built-in pairs and additional beta pairs for higher tiers."
        ),
        .init(
            question: "Can I switch plans?",
            answer: "Absolutely. You can upgrade or downgrade at any time. When upgrading, you'll be charged the prorated difference. When downgrading, changes apply at the next billing cycle."
        ),
        .init(
            question: "What's your refund policy?",
            answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund — no questions asked."
        )
    ]
}

// MARK: - Tier Card

struct TierCardView: View {
    @Environment(\.localization) private var localization
    private var L: AppStrings { localization.strings }

    let tier: MembershipView.TierData
    let billingCycle: MembershipView.BillingCycle
    let index: Int

    @State private var isHovered = false

    private var price: Double {
        billingCycle == .monthly ? tier.priceMonthly : tier.priceYearly
    }

    private var monthlyEquiv: Double {
        billingCycle == .yearly && tier.priceYearly > 0
            ? tier.priceYearly / 12.0
            : tier.priceMonthly
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
                        .foregroundStyle(.white)
                    Text(tier.tagline)
                        .font(.caption)
                        .foregroundStyle(.white.opacity(0.5))
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
                        .foregroundStyle(.white)
                } else {
                    Text("$\(String(format: "%.2f", price))")
                        .font(.system(size: 28, weight: .black))
                        .foregroundStyle(.white)
                    Text("/\(billingCycle == .monthly ? L.perMonth : L.perYear)")
                        .font(.subheadline)
                        .foregroundStyle(.white.opacity(0.4))
                }

                Spacer()

                if billingCycle == .yearly && tier.priceYearly > 0 {
                    Text("$\(String(format: "%.2f", monthlyEquiv))/\(L.perMonth)")
                        .font(.caption2)
                        .foregroundStyle(.white.opacity(0.4))
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
                            .foregroundStyle(.white.opacity(0.8))
                    }
                }
            }

            // CTA button
            Button {
                // Mock — no IAP
            } label: {
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
            }
            .buttonStyle(.plain)
            .disabled(tier.isCurrent)
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

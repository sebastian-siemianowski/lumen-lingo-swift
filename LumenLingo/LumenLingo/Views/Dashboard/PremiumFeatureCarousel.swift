import SwiftUI

// MARK: - Premium Feature Carousel

/// A subtle, horizontally scrollable carousel of premium feature cards.
/// Only visible for Free tier users. Auto-rotates every 5 seconds.
/// Tapping a card opens the feature's upgrade prompt.
/// Includes a "Don't show again" dismissal option.
struct PremiumFeatureCarousel: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(UpgradePromptManager.self) private var promptManager
    @Environment(\.colorScheme) private var colorScheme

    @State private var currentPage = 0
    @State private var autoScrollTimer: Timer?
    @State private var appeared = false
    @State private var showUpgradeSheet = false
    @State private var selectedFeature: PremiumFeature = .soundscapes
    @State private var showDismissConfirm = false

    private var isDark: Bool { colorScheme == .dark }
    private let features = PremiumFeature.carouselFeatures

    /// Whether this carousel should be visible.
    private var isVisible: Bool {
        tierManager.currentTier == .free && !promptManager.isCarouselHiddenForever
    }

    var body: some View {
        if isVisible {
            VStack(spacing: 12) {
                // Section header
                HStack {
                    HStack(spacing: 6) {
                        Image(systemName: "sparkles")
                            .font(.system(size: 13, weight: .semibold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#a855f7"), Color(hex: "#d946ef")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                        Text("Unlock Premium")
                            .font(.system(size: 15, weight: .bold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#a855f7"), Color(hex: "#d946ef")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    }

                    Spacer()

                    // Don't show again
                    Button {
                        showDismissConfirm = true
                    } label: {
                        Image(systemName: "xmark")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                            .padding(6)
                            .background(Circle().fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                    }
                }

                // Feature cards with paging
                TabView(selection: $currentPage) {
                    ForEach(Array(features.enumerated()), id: \.element) { index, feature in
                        PremiumFeatureCard(feature: feature) {
                            selectedFeature = feature
                            promptManager.markPromptShown(for: feature)
                            showUpgradeSheet = true
                        }
                        .tag(index)
                    }
                }
                .tabViewStyle(.page(indexDisplayMode: .never))
                .frame(height: 100)

                // Page indicator dots
                HStack(spacing: 6) {
                    ForEach(0..<features.count, id: \.self) { index in
                        Circle()
                            .fill(
                                index == currentPage
                                    ? AnyShapeStyle(LinearGradient(
                                        colors: features[index].minimumTier.gradientColors,
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    ))
                                    : AnyShapeStyle(isDark ? Color.white.opacity(0.2) : Color.black.opacity(0.15))
                            )
                            .frame(width: index == currentPage ? 8 : 6, height: index == currentPage ? 8 : 6)
                            .animation(.spring(response: 0.3), value: currentPage)
                    }
                }
            }
            .padding(16)
            .background(GlassCardBackground())
            .opacity(appeared ? 1 : 0)
            .offset(y: appeared ? 0 : 30)
            .onAppear {
                withAnimation(.spring(response: 0.6, dampingFraction: 0.8).delay(0.3)) {
                    appeared = true
                }
                startAutoScroll()
            }
            .onDisappear {
                stopAutoScroll()
            }
            .sheet(isPresented: $showUpgradeSheet) {
                UpgradePromptView(feature: selectedFeature)
            }
            .confirmationDialog("Hide premium feature carousel?", isPresented: $showDismissConfirm, titleVisibility: .visible) {
                Button("Don't Show Again", role: .destructive) {
                    withAnimation(.easeOut(duration: 0.3)) {
                        promptManager.isCarouselHiddenForever = true
                    }
                }
                Button("Cancel", role: .cancel) {}
            }
        }
    }

    // MARK: - Auto Scroll

    private func startAutoScroll() {
        autoScrollTimer = Timer.scheduledTimer(withTimeInterval: 5.0, repeats: true) { _ in
            Task { @MainActor in
                withAnimation(.easeInOut(duration: 0.5)) {
                    currentPage = (currentPage + 1) % features.count
                }
            }
        }
    }

    private func stopAutoScroll() {
        autoScrollTimer?.invalidate()
        autoScrollTimer = nil
    }
}

// MARK: - Premium Feature Card

/// Individual card within the carousel. Shows feature icon, name,
/// one-line benefit, and minimum tier badge.
struct PremiumFeatureCard: View {
    let feature: PremiumFeature
    let onTap: () -> Void
    @Environment(\.colorScheme) private var colorScheme

    private var isDark: Bool { colorScheme == .dark }
    private var minTier: MembershipTier { feature.minimumTier }

    var body: some View {
        Button(action: onTap) {
            HStack(spacing: 14) {
                // Feature icon
                ZStack {
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: minTier.gradientColors,
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 48, height: 48)
                        .shadow(color: minTier.accentColor.opacity(0.3), radius: 8)

                    Image(systemName: feature.iconName)
                        .font(.system(size: 20, weight: .semibold))
                        .foregroundStyle(.white)
                }

                // Text content
                VStack(alignment: .leading, spacing: 4) {
                    Text(feature.displayName)
                        .font(.system(size: 15, weight: .bold))
                        .foregroundStyle(isDark ? .white : .primary)

                    Text(feature.benefitText)
                        .font(.system(size: 12))
                        .foregroundStyle(.secondary)
                        .lineLimit(2)

                    // Tier badge
                    PremiumFeatureBadge(tier: minTier, style: .outlined)
                }

                Spacer(minLength: 0)

                // Arrow
                Image(systemName: "chevron.right")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .buttonStyle(LumenPressStyle(weight: .soft))
    }
}

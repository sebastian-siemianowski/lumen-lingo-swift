import SwiftUI

// MARK: - Tooltip Manager

/// Tracks which contextual tooltips have been shown to the user.
/// Each tooltip is shown exactly once, stored in UserDefaults.
@MainActor
@Observable
final class TooltipManager {
    private let shownKey = "shownTooltips"

    /// Returns `true` if the tooltip for the given key hasn't been shown yet.
    func shouldShow(for key: String) -> Bool {
        let shown = UserDefaults.standard.stringArray(forKey: shownKey) ?? []
        return !shown.contains(key)
    }

    /// Marks the tooltip as shown so it won't appear again.
    func markShown(for key: String) {
        var shown = UserDefaults.standard.stringArray(forKey: shownKey) ?? []
        guard !shown.contains(key) else { return }
        shown.append(key)
        UserDefaults.standard.set(shown, forKey: shownKey)
    }

    /// Resets all tooltip state (useful for testing).
    func resetAll() {
        UserDefaults.standard.removeObject(forKey: shownKey)
    }
}

// MARK: - Tooltip Keys

/// Well-known tooltip identifiers for each feature section.
enum TooltipKey {
    static let soundscapes = "tooltip_soundscapes"
    static let breathingOrbs = "tooltip_breathingOrbs"
    static let practiceTime = "tooltip_practiceTime"
    static let offlineMode = "tooltip_offlineMode"
}

// MARK: - Tooltip Content

/// Defines the content and minimum tier for a tooltip.
struct TooltipContent {
    let text: String
    let minimumTier: MembershipTier?
    let icon: String

    static let all: [String: TooltipContent] = [
        TooltipKey.soundscapes: TooltipContent(
            text: "Soundscapes let you learn with ambient music",
            minimumTier: .pro,
            icon: "headphones"
        ),
        TooltipKey.breathingOrbs: TooltipContent(
            text: "Breathing Orbs add mesmerising visual backgrounds",
            minimumTier: .pro,
            icon: "scope"
        ),
        TooltipKey.practiceTime: TooltipContent(
            text: "Track your daily practice time here",
            minimumTier: nil,
            icon: "clock.fill"
        ),
        TooltipKey.offlineMode: TooltipContent(
            text: "Download content to learn without internet",
            minimumTier: .pro,
            icon: "wifi.slash"
        ),
    ]
}

// MARK: - Feature Tooltip View

/// A polished tooltip bubble with optional tier badge that auto-dismisses.
/// Shows once per key, then never again.
struct FeatureTooltip: View {
    let key: String
    @Environment(TierManager.self) private var tierManager
    @Environment(\.colorScheme) private var colorScheme

    @State private var isVisible = false
    @State private var tooltipManager = TooltipManager()

    private var isDark: Bool { colorScheme == .dark }

    private var content: TooltipContent? {
        TooltipContent.all[key]
    }

    var body: some View {
        if let content, isVisible {
            tooltipBubble(content: content)
                .transition(.asymmetric(
                    insertion: .scale(scale: 0.8).combined(with: .opacity),
                    removal: .opacity
                ))
                .onTapGesture {
                    dismissTooltip()
                }
                .onAppear {
                    // Auto-dismiss after 5 seconds
                    DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                        dismissTooltip()
                    }
                }
        }
    }

    private func tooltipBubble(content: TooltipContent) -> some View {
        HStack(spacing: 10) {
            Image(systemName: content.icon)
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.cyan, .purple],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(width: 32, height: 32)
                .background(
                    RoundedRectangle(cornerRadius: 8)
                        .fill(isDark ? .white.opacity(0.1) : Color(hex: "#4338ca").opacity(0.1))
                )

            VStack(alignment: .leading, spacing: 3) {
                Text(content.text)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.9) : .primary)
                    .lineLimit(2)

                // Tier badge if locked
                if let minTier = content.minimumTier, !tierManager.hasAccess(to: featureForTier(minTier)) {
                    HStack(spacing: 4) {
                        Image(systemName: "lock.fill")
                            .font(.system(size: 8))
                        Text("\(minTier.displayName)+")
                            .font(.system(size: 10, weight: .semibold))
                    }
                    .foregroundStyle(minTier.accentColor)
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2)
                    .background(
                        Capsule()
                            .fill(minTier.accentColor.opacity(0.15))
                    )
                }
            }

            Spacer(minLength: 0)
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(isDark ? Color(red: 20/255, green: 16/255, blue: 40/255) : .white)
                .shadow(color: .black.opacity(isDark ? 0.3 : 0.12), radius: 12, y: 4)
                .overlay(
                    RoundedRectangle(cornerRadius: 14)
                        .strokeBorder(
                            isDark ? .white.opacity(0.1) : .black.opacity(0.06),
                            lineWidth: 1
                        )
                )
        )
        .padding(.horizontal, 16)
    }

    /// Show the tooltip if it hasn't been seen before.
    func checkAndShow() {
        if tooltipManager.shouldShow(for: key) {
            withAnimation(.spring(response: 0.4, dampingFraction: 0.75)) {
                isVisible = true
            }
            tooltipManager.markShown(for: key)
        }
    }

    private func dismissTooltip() {
        withAnimation(.easeOut(duration: 0.25)) {
            isVisible = false
        }
    }

    /// Maps a minimum tier to a PremiumFeature for access checking.
    private func featureForTier(_ tier: MembershipTier) -> PremiumFeature {
        switch key {
        case TooltipKey.soundscapes: return .soundscapes
        case TooltipKey.breathingOrbs: return .breathingOrbs
        case TooltipKey.offlineMode: return .offlineMode
        default: return .soundscapes
        }
    }
}

// MARK: - Feature Tooltip ViewModifier

/// Attach a tooltip to any view. It shows once on first appearance.
struct FeatureTooltipModifier: ViewModifier {
    let key: String
    @State private var showTooltip = false
    @State private var tooltipManager = TooltipManager()

    func body(content: Content) -> some View {
        content
            .overlay(alignment: .top) {
                if showTooltip {
                    FeatureTooltip(key: key)
                        .offset(y: -8)
                        .transition(.asymmetric(
                            insertion: .move(edge: .top).combined(with: .opacity),
                            removal: .opacity
                        ))
                        .zIndex(100)
                }
            }
            .onAppear {
                if tooltipManager.shouldShow(for: key) {
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
                        withAnimation(.spring(response: 0.4, dampingFraction: 0.75)) {
                            showTooltip = true
                        }
                        tooltipManager.markShown(for: key)

                        // Auto-dismiss after 5 seconds
                        DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                            withAnimation(.easeOut(duration: 0.25)) {
                                showTooltip = false
                            }
                        }
                    }
                }
            }
            .onTapGesture {
                if showTooltip {
                    withAnimation(.easeOut(duration: 0.25)) {
                        showTooltip = false
                    }
                }
            }
    }
}

extension View {
    /// Adds a one-time contextual tooltip that appears on first visit and auto-dismisses.
    func featureTooltip(key: String) -> some View {
        modifier(FeatureTooltipModifier(key: key))
    }
}

import SwiftUI

// MARK: - Post-Session Nudge

/// A subtle, non-modal upgrade nudge shown below the session summary
/// after every 3rd completed session for Free tier users.
/// Shows a rotating premium benefit with a "Learn More" link.
/// Can be permanently hidden via user preference.
struct PostSessionNudge: View {
    @Environment(TierManager.self) private var tierManager
    @Environment(UpgradePromptManager.self) private var promptManager
    @Environment(\.colorScheme) private var colorScheme

    @State private var appeared = false
    @State private var showMembershipSheet = false
    @State private var showHideOption = false

    private var isDark: Bool { colorScheme == .dark }

    /// Whether this nudge should be visible.
    var isVisible: Bool {
        tierManager.currentTier == .free
        && !promptManager.isNudgeHiddenForever
        && promptManager.recordCompletedSession()
    }

    var body: some View {
        if isVisible {
            VStack(spacing: 0) {
                HStack(spacing: 12) {
                    // Sparkle icon
                    ZStack {
                        Circle()
                            .fill(
                                LinearGradient(
                                    colors: [Color(hex: "#a855f7").opacity(0.2), Color(hex: "#d946ef").opacity(0.15)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .frame(width: 36, height: 36)

                        Image(systemName: "sparkles")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#a855f7"), Color(hex: "#d946ef")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    }

                    // Benefit text
                    VStack(alignment: .leading, spacing: 3) {
                        Text(promptManager.nudgeBenefits[promptManager.nudgeBenefitIndex])
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.85) : .primary)
                            .lineLimit(2)

                        Button {
                            showMembershipSheet = true
                        } label: {
                            Text("Learn More")
                                .font(.system(size: 12, weight: .semibold))
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: [Color(hex: "#a855f7"), Color(hex: "#d946ef")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        }
                    }

                    Spacer(minLength: 0)

                    // Close / hide
                    Button {
                        showHideOption = true
                    } label: {
                        Image(systemName: "xmark")
                            .font(.system(size: 9, weight: .bold))
                            .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                            .padding(5)
                            .background(Circle().fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04)))
                    }
                }
                .padding(14)
                .background(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.03))
                        .overlay(
                            RoundedRectangle(cornerRadius: 16, style: .continuous)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [Color(hex: "#a855f7").opacity(0.2), Color(hex: "#d946ef").opacity(0.1)],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    ),
                                    lineWidth: 1
                                )
                        )
                )
            }
            .padding(.horizontal, 28)
            .padding(.top, 16)
            .opacity(appeared ? 1 : 0)
            .offset(y: appeared ? 0 : 12)
            .onAppear {
                withAnimation(.easeOut(duration: 0.5).delay(0.5)) {
                    appeared = true
                }
            }
            .sheet(isPresented: $showMembershipSheet) {
                NavigationStack { MembershipView() }
            }
            .confirmationDialog("Hide upgrade suggestions?", isPresented: $showHideOption, titleVisibility: .visible) {
                Button("Hide Forever", role: .destructive) {
                    withAnimation(.easeOut(duration: 0.3)) {
                        promptManager.isNudgeHiddenForever = true
                    }
                }
                Button("Cancel", role: .cancel) {}
            }
        }
    }
}

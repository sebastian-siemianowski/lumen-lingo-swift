import SwiftUI
import SwiftData

// MARK: - Practice Expired View

/// Full-screen view shown when a free-tier user exhausts their 30-minute
/// daily practice limit. Displays today's stats, a countdown to midnight
/// reset, and an upgrade CTA — all in a warm, encouraging tone.
struct PracticeExpiredView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(PracticeTimeTracker.self) private var tracker

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    let score: Int
    let correctAnswers: Int
    let totalAnswered: Int
    var onUpgradeTap: () -> Void = {}
    var onDismiss: () -> Void = {}

    @State private var appeared = false
    @State private var countdownText: String = ""
    @State private var confettiPhase: CGFloat = 0
    @State private var refreshTimer: Timer?

    private var isDark: Bool { colorScheme == .dark }

    private var accuracy: Int {
        guard totalAnswered > 0 else { return 0 }
        return Int(Double(correctAnswers) / Double(totalAnswered) * 100)
    }

    var body: some View {
        VStack(spacing: 0) {
            ScrollView {
                VStack(spacing: 28) {
                    Spacer(minLength: 40)

                    // Celebration header
                    celebrationHeader
                        .scaleEffect(appeared ? 1.0 : 0.85)
                        .opacity(appeared ? 1.0 : 0)

                    // Today's stats
                    statsCard
                        .offset(y: appeared ? 0 : 30)
                        .opacity(appeared ? 1.0 : 0)

                    // Countdown to reset
                    resetCountdown
                        .offset(y: appeared ? 0 : 20)
                        .opacity(appeared ? 1.0 : 0)

                    // Upgrade CTA
                    upgradeCTA
                        .offset(y: appeared ? 0 : 20)
                        .opacity(appeared ? 1.0 : 0)

                    // Dismiss link
                    Button {
                        onDismiss()
                    } label: {
                        Text("Back to Dashboard")
                            .font(.system(size: 15, weight: .medium))
                            .foregroundStyle(.secondary)
                    }
                    .padding(.top, 4)

                    Spacer(minLength: 60)
                }
                .padding(.horizontal, 24)
            }
        }
        .cosmicBackground()
        .onAppear {
            updateCountdown()
            refreshTimer = Timer.scheduledTimer(withTimeInterval: 60, repeats: true) { _ in
                updateCountdown()
            }
            withAnimation(.spring(response: 0.7, dampingFraction: 0.75).delay(0.1)) {
                appeared = true
            }
        }
        .onDisappear {
            refreshTimer?.invalidate()
            refreshTimer = nil
        }
    }

    // MARK: - Celebration Header

    private var celebrationHeader: some View {
        VStack(spacing: 16) {
            // Animated sun/star icon
            ZStack {
                // Outer glow rings
                ForEach(0..<3, id: \.self) { i in
                    Circle()
                        .stroke(
                            LinearGradient(
                                colors: [
                                    Color(hex: "#f59e0b").opacity(0.3 - Double(i) * 0.1),
                                    Color(hex: "#d946ef").opacity(0.2 - Double(i) * 0.06)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 2
                        )
                        .frame(width: CGFloat(80 + i * 20), height: CGFloat(80 + i * 20))
                        .scaleEffect(1.0 + confettiPhase * CGFloat(0.05 + Double(i) * 0.02))
                        .opacity(0.6 - Double(i) * 0.15)
                }

                Circle()
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#f59e0b"), Color(hex: "#f97316")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 64, height: 64)
                    .shadow(color: Color(hex: "#f59e0b").opacity(0.5), radius: 20)

                Image(systemName: "sparkles")
                    .font(.system(size: 28, weight: .semibold))
                    .foregroundStyle(.white)
            }
            .onAppear {
                withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                    confettiPhase = 1
                }
            }

            Text("Great Session!")
                .font(.system(size: 28, weight: .bold))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#f59e0b"), Color(hex: "#f97316"), Color(hex: "#d946ef")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            Text("You've used your daily practice time.\nCome back tomorrow for more learning!")
                .font(.system(size: 15))
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
                .lineSpacing(2)
        }
    }

    // MARK: - Stats Card

    private var statsCard: some View {
        VStack(spacing: 16) {
            HStack {
                Text("Today's Progress")
                    .font(.system(size: 16, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)
                Spacer()
            }

            HStack(spacing: 12) {
                statPill(
                    icon: "bolt.fill",
                    value: "+\(score)",
                    label: "XP Earned",
                    color: .cyan
                )

                statPill(
                    icon: "checkmark.circle.fill",
                    value: "\(correctAnswers)",
                    label: "Correct",
                    color: .green
                )

                statPill(
                    icon: "target",
                    value: "\(accuracy)%",
                    label: "Accuracy",
                    color: .orange
                )
            }
        }
        .padding(20)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(isDark ? .white.opacity(0.06) : .white.opacity(0.7))
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(isDark ? .white.opacity(0.1) : .black.opacity(0.06), lineWidth: 1)
                )
                .shadow(color: .black.opacity(0.08), radius: 12, y: 4)
        )
    }

    private func statPill(icon: String, value: String, label: String, color: Color) -> some View {
        VStack(spacing: 8) {
            ZStack {
                Circle()
                    .fill(color.opacity(0.15))
                    .frame(width: 40, height: 40)

                Image(systemName: icon)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(color)
            }

            Text(value)
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(isDark ? .white : .primary)

            Text(label)
                .font(.system(size: 11))
                .foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Reset Countdown

    private var resetCountdown: some View {
        HStack(spacing: 14) {
            ZStack {
                Circle()
                    .fill(Color(hex: "#667eea").opacity(0.15))
                    .frame(width: 44, height: 44)

                Image(systemName: "clock.arrow.circlepath")
                    .font(.system(size: 18, weight: .semibold))
                    .foregroundStyle(Color(hex: "#667eea"))
            }

            VStack(alignment: .leading, spacing: 2) {
                Text("Resets in \(countdownText)")
                    .font(.system(size: 15, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)

                Text("Your daily practice time refreshes at midnight")
                    .font(.system(size: 12))
                    .foregroundStyle(.secondary)
            }

            Spacer()
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(isDark ? .white.opacity(0.06) : .white.opacity(0.7))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(Color(hex: "#667eea").opacity(0.2), lineWidth: 1)
                )
        )
    }

    // MARK: - Upgrade CTA

    private var upgradeCTA: some View {
        Button {
            HapticsService.shared.buttonPress()
            onUpgradeTap()
        } label: {
            HStack(spacing: 10) {
                Image(systemName: "infinity")
                    .font(.system(size: 18, weight: .bold))

                VStack(alignment: .leading, spacing: 2) {
                    Text("Unlock Unlimited Practice")
                        .font(.system(size: 16, weight: .bold))

                    Text("Learn without limits — upgrade to Pro")
                        .font(.system(size: 12))
                        .opacity(0.8)
                }

                Spacer()

                Image(systemName: "arrow.right")
                    .font(.system(size: 14, weight: .bold))
            }
            .foregroundStyle(.white)
            .padding(18)
            .background(
                RoundedRectangle(cornerRadius: 18)
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#8b5cf6"), Color(hex: "#d946ef"), Color(hex: "#7c3aed")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 18)
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.15), .clear],
                                    startPoint: .top,
                                    endPoint: .center
                                )
                            )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 18)
                            .strokeBorder(.white.opacity(0.2), lineWidth: 1)
                    )
            )
            .shadow(color: Color(hex: "#8b5cf6").opacity(0.4), radius: 16, y: 6)
        }
        .buttonStyle(.plain)
    }

    // MARK: - Helpers

    private func updateCountdown() {
        countdownText = tracker.resetCountdownDisplay
    }
}

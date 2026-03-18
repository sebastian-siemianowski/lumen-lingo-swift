import SwiftUI

// MARK: - Practice Time Banner

/// Non-intrusive top banner shown when a free-tier user has 5 minutes
/// of daily practice time remaining. Features countdown, "Go Unlimited"
/// CTA, and swipe-up dismiss.
struct PracticeTimeBanner: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(PracticeTimeTracker.self) private var tracker

    let remainingSeconds: Int
    var onUpgradeTap: () -> Void = {}
    var onDismiss: () -> Void = {}

    @State private var dragOffset: CGFloat = 0

    private var isDark: Bool { colorScheme == .dark }

    private var displayMinutes: Int { max(0, remainingSeconds / 60) }
    private var displaySeconds: Int { max(0, remainingSeconds % 60) }

    private var timeText: String {
        if displayMinutes > 0 {
            return "\(displayMinutes) min remaining today"
        } else if displaySeconds > 0 {
            return "\(displaySeconds)s remaining today"
        } else {
            return "Time's up for today"
        }
    }

    private var progressColor: Color {
        let remaining = Double(remainingSeconds)
        let limit = Double(PracticeTimeTracker.dailyLimitSeconds)
        let ratio = remaining / limit
        if ratio > 0.15 { return .yellow }
        if ratio > 0.05 { return .orange }
        return .red
    }

    var body: some View {
        HStack(spacing: 12) {
            // Timer icon with pulsing glow
            ZStack {
                Circle()
                    .fill(progressColor.opacity(0.2))
                    .frame(width: 36, height: 36)

                Image(systemName: "timer")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(progressColor)
            }

            VStack(alignment: .leading, spacing: 2) {
                Text(timeText)
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)

                Text("Daily practice limit")
                    .font(.system(size: 11))
                    .foregroundStyle(.secondary)
            }

            Spacer()

            // "Go Unlimited" CTA
            Button {
                HapticsService.shared.buttonPress()
                onUpgradeTap()
            } label: {
                Text("Go Unlimited")
                    .font(.system(size: 12, weight: .bold))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 14)
                    .padding(.vertical, 8)
                    .background(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [Color(hex: "#8b5cf6"), Color(hex: "#d946ef")],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    )
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(isDark ? Color(red: 20/255, green: 15/255, blue: 40/255).opacity(0.95) : .white.opacity(0.95))
                .shadow(color: progressColor.opacity(0.3), radius: 12, y: 4)
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(progressColor.opacity(0.3), lineWidth: 1)
                )
        )
        .padding(.horizontal, 16)
        .offset(y: dragOffset)
        .gesture(
            DragGesture()
                .onChanged { value in
                    if value.translation.height < 0 {
                        dragOffset = value.translation.height
                    }
                }
                .onEnded { value in
                    if value.translation.height < -40 {
                        withAnimation(.spring(response: 0.3)) {
                            dragOffset = -200
                        }
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                            onDismiss()
                        }
                    } else {
                        withAnimation(.spring(response: 0.3)) {
                            dragOffset = 0
                        }
                    }
                }
        )
        .transition(.move(edge: .top).combined(with: .opacity))
    }
}

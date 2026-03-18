import SwiftUI

// MARK: - PDF Success Overlay (Story 6)

/// Celebratory overlay shown after a successful save, share, or print.
/// Features an animated tier-gradient checkmark ring, contextual message, and haptics.
struct PDFSuccessOverlayView: View {
    let action: PDFSuccessAction
    let tierColors: [Color]
    let onDismiss: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @State private var ringProgress: CGFloat = 0
    @State private var checkmarkScale: CGFloat = 0.5
    @State private var showCheckmark = false
    @State private var showMessage = false
    @State private var showHint = false

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ZStack {
            // Scrim
            (isDark ? Color.black.opacity(0.4) : Color.white.opacity(0.5))
                .ignoresSafeArea()
                .onTapGesture { dismiss() }

            VStack(spacing: 20) {
                // Checkmark ring
                ZStack {
                    // Track
                    Circle()
                        .stroke(isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.06), lineWidth: 4)
                        .frame(width: 72, height: 72)

                    // Animated tier ring
                    Circle()
                        .trim(from: 0, to: ringProgress)
                        .stroke(
                            AngularGradient(
                                colors: tierColors + [tierColors.first ?? .white],
                                center: .center
                            ),
                            style: StrokeStyle(lineWidth: 4, lineCap: .round)
                        )
                        .frame(width: 72, height: 72)
                        .rotationEffect(.degrees(-90))

                    // Checkmark
                    if showCheckmark {
                        Image(systemName: "checkmark")
                            .font(.system(size: 30, weight: .bold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: tierColors,
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .scaleEffect(checkmarkScale)
                    }
                }

                // Message
                if showMessage {
                    Text(action.message)
                        .font(.system(size: 18, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white : .primary)
                        .transition(.opacity)
                }

                // Hint
                if showHint {
                    Text("Tap anywhere to continue")
                        .font(.system(size: 12, weight: .regular))
                        .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                        .transition(.opacity)
                }
            }
        }
        .accessibilityAddTraits(.isModal)
        .accessibilityLabel(action.message)
        .onAppear { startAnimation() }
    }

    private func startAnimation() {
        let reduceMotion = UIAccessibility.isReduceMotionEnabled

        if reduceMotion {
            ringProgress = 1
            showCheckmark = true
            checkmarkScale = 1.0
            showMessage = true
            showHint = true
            PDFHapticService.shared.actionSuccess()
            scheduleAutoDismiss()
            return
        }

        // Phase 1: Draw ring (0 → 0.5s)
        withAnimation(.easeInOut(duration: 0.5)) {
            ringProgress = 1
        }

        // Phase 2: Show checkmark at 0.35s
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) {
            showCheckmark = true
            PDFHapticService.shared.actionSuccess()
            withAnimation(.spring(response: 0.35, dampingFraction: 0.6)) {
                checkmarkScale = 1.0
            }
        }

        // Phase 3: Message at 0.55s
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.55) {
            withAnimation(.easeOut(duration: 0.25)) {
                showMessage = true
            }
        }

        // Phase 4: Hint at 1.0s
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            withAnimation(.easeOut(duration: 0.25)) {
                showHint = true
            }
        }

        scheduleAutoDismiss()
    }

    private func scheduleAutoDismiss() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
            dismiss()
        }
    }

    private func dismiss() {
        withAnimation(.easeOut(duration: 0.25)) {
            onDismiss()
        }
    }
}

// MARK: - Success Action

enum PDFSuccessAction {
    case saved
    case shared
    case printed
    case sent

    var message: String {
        switch self {
        case .saved:   return "Report Saved"
        case .shared:  return "Report Shared"
        case .printed: return "Sent to Printer"
        case .sent:    return "Report Sent"
        }
    }
}

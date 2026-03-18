import SwiftUI

/// Capsule badge showing the XP multiplier with tier gradient.
/// For Royal tier, includes a pulsing glow animation.
struct XPMultiplierBadge: View {
    let multiplier: Double
    let tier: MembershipTier

    @State private var glowPhase: CGFloat = 0

    private var isRoyal: Bool { tier == .royal || tier == .trial }

    private var multiplierText: String {
        if multiplier == floor(multiplier) {
            return "\(Int(multiplier))×"
        }
        return String(format: "%.2g×", multiplier)
    }

    var body: some View {
        HStack(spacing: 4) {
            Image(systemName: "bolt.fill")
                .font(.system(size: 10, weight: .bold))
            Text("\(multiplierText) XP")
                .font(.system(size: 12, weight: .bold, design: .rounded))
        }
        .foregroundStyle(.white)
        .padding(.horizontal, 10)
        .padding(.vertical, 5)
        .background {
            Capsule()
                .fill(
                    LinearGradient(
                        colors: tier.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
        }
        .shadow(
            color: isRoyal
                ? tier.gradientColors.first?.opacity(0.3 + 0.2 * sin(Double(glowPhase))) ?? .clear
                : .clear,
            radius: isRoyal ? 8 : 0
        )
        .onAppear {
            if isRoyal {
                withAnimation(.easeInOut(duration: 2.0).repeatForever(autoreverses: true)) {
                    glowPhase = .pi * 2
                }
            }
        }
    }
}

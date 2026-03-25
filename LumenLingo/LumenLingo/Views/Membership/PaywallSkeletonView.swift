import SwiftUI

// MARK: - Paywall Skeleton (Story 2.7)

/// Shimmer skeleton placeholder shown while offerings are loading.
struct PaywallSkeletonView: View {
    @Environment(\.colorScheme) private var colorScheme
    @State private var shimmerPhase: CGFloat = -1

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 24) {
            // Headline placeholder
            shimmerRect(width: 200, height: 28)
                .padding(.top, 8)

            // Three tier card placeholders
            ForEach(0..<3, id: \.self) { _ in
                tierCardSkeleton
            }
        }
        .padding(.horizontal, 16)
        .onAppear {
            withAnimation(
                .linear(duration: 1.5)
                .repeatForever(autoreverses: false)
            ) {
                shimmerPhase = 1
            }
        }
        .accessibilityLabel("Loading subscription plans")
    }

    private var tierCardSkeleton: some View {
        VStack(alignment: .leading, spacing: 14) {
            // Tier name
            shimmerRect(width: 100, height: 20)

            // Price
            HStack(spacing: 8) {
                shimmerRect(width: 80, height: 32)
                shimmerRect(width: 60, height: 14)
            }

            // Tagline
            shimmerRect(width: .infinity, height: 14)

            // Features (3 lines)
            ForEach(0..<3, id: \.self) { i in
                HStack(spacing: 8) {
                    shimmerCircle(size: 16)
                    shimmerRect(width: CGFloat(180 - i * 20), height: 12)
                }
            }

            // CTA button
            shimmerRect(width: .infinity, height: 44)
                .clipShape(Capsule())
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 22)
                .fill(.ultraThinMaterial)
        )
    }

    private func shimmerRect(width: CGFloat, height: CGFloat) -> some View {
        let baseColor = isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.06)
        let shimmerColor = isDark ? Color.white.opacity(0.15) : Color.black.opacity(0.12)

        return RoundedRectangle(cornerRadius: 6)
            .fill(baseColor)
            .frame(maxWidth: width == .infinity ? .infinity : width, minHeight: height, maxHeight: height)
            .overlay(
                LinearGradient(
                    colors: [.clear, shimmerColor, .clear],
                    startPoint: .leading,
                    endPoint: .trailing
                )
                .offset(x: shimmerPhase * 300)
                .clipped()
            )
            .clipShape(RoundedRectangle(cornerRadius: 6))
    }

    private func shimmerCircle(size: CGFloat) -> some View {
        let baseColor = isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.06)

        return Circle()
            .fill(baseColor)
            .frame(width: size, height: size)
    }
}

// MARK: - Paywall Error View (Story 2.7)

/// Friendly error state when offerings fail to load.
struct PaywallErrorView: View {
    let message: String
    let isOffline: Bool
    let onRetry: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @State private var isRetrying = false
    @State private var rotationAngle: Double = 0

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 20) {
            // Cosmic-themed illustration
            Image(systemName: isOffline ? "wifi.slash" : "exclamationmark.icloud")
                .font(.system(size: 56))
                .foregroundStyle(
                    isDark
                        ? .white.opacity(0.3)
                        : .secondary
                )
                .symbolEffect(.pulse, options: .repeating.speed(0.5))

            Text(isOffline
                 ? "You\u{2019}re offline"
                 : "Couldn\u{2019}t load plans")
                .font(.title3.bold())
                .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)

            Text(isOffline
                 ? "Connect to the internet to view subscription plans."
                 : "Check your connection and try again.")
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .multilineTextAlignment(.center)

            Button {
                isRetrying = true
                withAnimation(.linear(duration: 0.6).repeatForever(autoreverses: false)) {
                    rotationAngle = 360
                }
                onRetry()
                // Reset after delay
                DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                    isRetrying = false
                    rotationAngle = 0
                }
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "arrow.clockwise")
                        .rotationEffect(.degrees(rotationAngle))
                    Text("Try Again")
                }
                .font(.subheadline.bold())
                .foregroundStyle(.white)
                .padding(.horizontal, 24)
                .padding(.vertical, 12)
                .background(
                    Capsule().fill(
                        LinearGradient(
                            colors: [.purple, .cyan],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                )
            }
            .disabled(isRetrying)
            .opacity(isRetrying ? 0.6 : 1)
        }
        .padding(32)
        .frame(maxWidth: .infinity, minHeight: 300)
        .accessibilityElement(children: .contain)
        .onAppear {
            // Auto-retry after 3 seconds
            DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                if !isRetrying {
                    onRetry()
                }
            }
        }
    }
}

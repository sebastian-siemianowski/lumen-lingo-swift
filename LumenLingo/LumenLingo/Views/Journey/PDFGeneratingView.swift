import SwiftUI

// MARK: - PDF Generating View (Story 1)

/// Skeleton loading view with tier-gradient shimmer and stage labels
/// shown while the PDF report is being generated.
struct PDFGeneratingView: View {
    let tierColors: [Color]

    @Environment(\.colorScheme) private var colorScheme
    @State private var stageIndex = 0
    @State private var shimmerOffset: CGFloat = -1.0
    @State private var progressFraction: CGFloat = 0

    private var isDark: Bool { colorScheme == .dark }

    private let stages = [
        "Analyzing your sessions…",
        "Building your charts…",
        "Applying your theme…",
        "Polishing the details…"
    ]

    var body: some View {
        VStack(spacing: 24) {
            Spacer()

            // Skeleton page — US Letter 8.5:11 aspect ratio
            GeometryReader { geo in
                let maxW = max(geo.size.width - 48, 100)
                let maxH = max(geo.size.height * 0.65, 100)
                let w = max(min(maxW, maxH * (8.5 / 11)), 100)
                let h = max(w * (11 / 8.5), 100)

                skeletonPage(width: w, height: h)
                    .frame(width: w, height: h)
                    .clipShape(RoundedRectangle(cornerRadius: 12))
                    .shadow(color: .black.opacity(0.18), radius: 16, y: 6)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
            }

            // Stage label
            Text(stages[stageIndex])
                .font(.system(size: 14, weight: .medium, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                .contentTransition(.opacity)
                .animation(.easeInOut(duration: 0.3), value: stageIndex)
                .accessibilityAddTraits(.updatesFrequently)
                .accessibilityLabel(stages[stageIndex])

            // Progress bar
            progressBar
                .padding(.horizontal, 60)

            Spacer().frame(height: 40)
        }
        .onAppear {
            startShimmer()
            startStageCycling()
            startProgress()
        }
    }

    // MARK: - Skeleton Page

    private func skeletonPage(width: CGFloat, height: CGFloat) -> some View {
        let pad: CGFloat = 16
        return ZStack {
            // Page background
            RoundedRectangle(cornerRadius: 12)
                .fill(isDark ? Color(white: 0.08) : .white)

            VStack(alignment: .leading, spacing: 10) {
                // Header bar
                shimmerBlock(width: width - pad * 2, height: 40)

                Spacer().frame(height: 4)

                // Summary row: 4 small blocks
                HStack(spacing: 8) {
                    ForEach(0..<4, id: \.self) { _ in
                        shimmerBlock(width: (width - pad * 2 - 24) / 4, height: 28)
                    }
                }

                Spacer().frame(height: 6)

                // Two chart areas
                HStack(spacing: 8) {
                    shimmerBlock(width: (width - pad * 2 - 8) / 2, height: 60)
                    shimmerBlock(width: (width - pad * 2 - 8) / 2, height: 60)
                }

                Spacer().frame(height: 6)

                // Table lines
                ForEach(0..<6, id: \.self) { _ in
                    shimmerBlock(width: width - pad * 2, height: 8)
                }

                Spacer()
            }
            .padding(pad)
        }
    }

    private func shimmerBlock(width: CGFloat, height: CGFloat) -> some View {
        let reduceMotion = UIAccessibility.isReduceMotionEnabled
        return RoundedRectangle(cornerRadius: 4)
            .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04))
            .frame(width: width, height: height)
            .overlay(
                Group {
                    if !reduceMotion {
                        LinearGradient(
                            colors: [
                                .clear,
                                tierColors.first?.opacity(0.15) ?? .white.opacity(0.08),
                                tierColors.last?.opacity(0.12) ?? .white.opacity(0.06),
                                .clear
                            ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                        .rotationEffect(.degrees(25))
                        .offset(x: shimmerOffset * width * 1.5)
                    }
                }
            )
            .clipShape(RoundedRectangle(cornerRadius: 4))
    }

    // MARK: - Progress Bar

    private var progressBar: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                Capsule()
                    .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04))

                Capsule()
                    .fill(
                        LinearGradient(
                            colors: tierColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: geo.size.width * progressFraction)
            }
        }
        .frame(height: 3)
    }

    // MARK: - Animations

    private func startShimmer() {
        guard !UIAccessibility.isReduceMotionEnabled else { return }
        withAnimation(.linear(duration: 1.2).repeatForever(autoreverses: false)) {
            shimmerOffset = 1.0
        }
    }

    private func startStageCycling() {
        // Cycle stages every 0.45s
        Timer.scheduledTimer(withTimeInterval: 0.45, repeats: true) { timer in
            let next = stageIndex + 1
            if next < stages.count {
                withAnimation { stageIndex = next }
                PDFHapticService.shared.stageProgress()
            } else {
                timer.invalidate()
            }
        }
    }

    private func startProgress() {
        withAnimation(.easeInOut(duration: 1.8)) {
            progressFraction = 1.0
        }
    }
}

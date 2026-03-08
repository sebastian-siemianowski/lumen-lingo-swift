import SwiftUI

// MARK: - Liquid Glass Pagination Panel

/// A floating glassmorphic pagination bar with morphing dot indicators,
/// a progress track, page counter, and navigation arrows.
/// Matches the liquid glass design language used across LumenLingo.
struct LiquidGlassPagination: View {
    let currentPage: Int
    let totalPages: Int
    let accentColors: [Color]
    let onPageChange: (Int) -> Void

    @Namespace private var dotNamespace

    /// Maximum number of dot indicators visible at once
    private let maxVisibleDots = 7

    var body: some View {
        if totalPages > 1 {
            VStack(spacing: 8) {
                // Progress track
                progressTrack

                HStack(spacing: 16) {
                    // Previous arrow
                    paginationArrow(direction: .backward)

                    // Morphing dot indicators
                    dotIndicators

                    // Next arrow
                    paginationArrow(direction: .forward)
                }

                // Page counter
                pageCounter
            }
            .padding(.horizontal, 20)
            .padding(.vertical, 12)
            .glassEffect(.regular.tint(accentColors[0].opacity(0.15)), in: .rect(cornerRadius: 22))
            .padding(.horizontal, 24)
        }
    }

    // MARK: - Progress Track

    private var progressTrack: some View {
        GeometryReader { geo in
            let progress = totalPages > 1
                ? CGFloat(currentPage) / CGFloat(totalPages - 1)
                : 1.0
            let fillWidth = max(8, geo.size.width * progress)

            ZStack(alignment: .leading) {
                // Track background
                Capsule()
                    .fill(.white.opacity(0.06))
                    .overlay(
                        Capsule()
                            .strokeBorder(.white.opacity(0.04), lineWidth: 0.5)
                    )

                // Fill
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: accentColors,
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: fillWidth)
                    .overlay(
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [.white.opacity(0.3), .clear],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .padding(.horizontal, 1)
                            .padding(.vertical, 0.5)
                    )
                    .clipShape(Capsule())
                    .shadow(color: accentColors[0].opacity(0.3), radius: 4)
            }
        }
        .frame(height: 3)
    }

    // MARK: - Dot Indicators

    private var dotIndicators: some View {
        let visible = visiblePageRange

        return HStack(spacing: 6) {
            ForEach(visible, id: \.self) { page in
                dotView(for: page)
            }
        }
    }

    private func dotView(for page: Int) -> some View {
        let isActive = page == currentPage

        return Button {
            guard page != currentPage else { return }
            HapticsService.light()
            onPageChange(page)
        } label: {
            ZStack {
                if isActive {
                    // Active: wide gradient pill
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: accentColors,
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .frame(width: 28, height: 8)
                        .overlay(
                            Capsule()
                                .fill(
                                    LinearGradient(
                                        colors: [.white.opacity(0.35), .clear],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                                .padding(0.5)
                        )
                        .overlay(
                            Capsule()
                                .strokeBorder(.white.opacity(0.2), lineWidth: 0.5)
                        )
                        .shadow(color: accentColors[0].opacity(0.5), radius: 6)
                        .matchedGeometryEffect(id: "activeDot", in: dotNamespace)
                } else {
                    // Inactive: small translucent circle
                    Circle()
                        .fill(.white.opacity(0.2))
                        .frame(width: 8, height: 8)
                        .overlay(
                            Circle()
                                .strokeBorder(.white.opacity(0.08), lineWidth: 0.5)
                        )
                }
            }
        }
        .buttonStyle(.plain)
    }

    // MARK: - Arrows

    private func paginationArrow(direction: ArrowDirection) -> some View {
        let isEnabled = direction == .backward ? currentPage > 0 : currentPage < totalPages - 1

        return Button {
            guard isEnabled else { return }
            HapticsService.light()
            let newPage = direction == .backward ? currentPage - 1 : currentPage + 1
            onPageChange(newPage)
        } label: {
            Image(systemName: direction == .backward ? "chevron.left" : "chevron.right")
                .font(.system(size: 13, weight: .bold))
                .foregroundStyle(.white.opacity(isEnabled ? 0.75 : 0.2))
                .frame(width: 34, height: 34)
                .background(
                    Circle()
                        .fill(.white.opacity(isEnabled ? 0.10 : 0.04))
                )
                .contentShape(Circle())
        }
        .buttonStyle(.plain)
        .disabled(!isEnabled)
    }

    // MARK: - Page Counter

    private var pageCounter: some View {
        Text("\(currentPage + 1) / \(totalPages)")
            .font(.system(size: 11, weight: .semibold, design: .rounded))
            .foregroundStyle(.white.opacity(0.45))
            .contentTransition(.numericText())
    }

    // MARK: - Helpers

    /// Returns the range of page indices for the visible dot indicators,
    /// using a sliding window centered on the current page.
    private var visiblePageRange: [Int] {
        guard totalPages > maxVisibleDots else {
            return Array(0..<totalPages)
        }

        let half = maxVisibleDots / 2
        var start = currentPage - half
        var end = currentPage + half

        if start < 0 {
            end -= start
            start = 0
        }
        if end >= totalPages {
            start -= (end - totalPages + 1)
            end = totalPages - 1
        }
        start = max(0, start)

        return Array(start...end)
    }

    enum ArrowDirection {
        case backward, forward
    }
}

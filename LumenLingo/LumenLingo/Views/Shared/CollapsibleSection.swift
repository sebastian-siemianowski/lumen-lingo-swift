import SwiftUI

// MARK: - Collapsible Section

/// Reusable glassmorphic collapsible section used across Journey, Profile, and other screens.
/// Provides a tappable header with gradient icon, title, optional subtitle, and animated chevron.
/// When collapsed, shows a compact glass pill. When expanded, reveals content with a gradient accent line.
struct CollapsibleSection<Content: View>: View {
    let title: String
    let icon: String
    let colors: [Color]
    @Binding var isCollapsed: Bool
    var subtitle: String? = nil
    var cornerRadius: CGFloat = 18
    var shadowRadius: CGFloat = 8
    @ViewBuilder let content: () -> Content

    @Environment(\.colorScheme) private var colorScheme
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 0) {
            Button {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                    isCollapsed.toggle()
                }
                HapticsService.shared.toggleSwitch()
            } label: {
                HStack(spacing: 10) {
                    // Gradient icon circle
                    ZStack {
                        Circle()
                            .fill(
                                LinearGradient(
                                    colors: colors.map { $0.opacity(isDark ? 0.2 : 0.15) },
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                            .frame(width: 30, height: 30)

                        Image(systemName: icon)
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: colors,
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing
                                )
                            )
                    }

                    Text(title)
                        .font(.system(size: 15, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.9) : .caribbeanInk)

                    if let subtitle, isCollapsed {
                        Text(subtitle)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                            .lineLimit(1)
                            .transition(.opacity.combined(with: .scale(scale: 0.8)))
                    }

                    Spacer()

                    // Pill chevron
                    ZStack {
                        Capsule()
                            .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                            .frame(width: 28, height: 20)

                        Image(systemName: "chevron.right")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(
                                isCollapsed
                                    ? AnyShapeStyle(LinearGradient(colors: colors, startPoint: .leading, endPoint: .trailing))
                                    : AnyShapeStyle(isDark ? Color.white.opacity(0.3) : Color.caribbeanMist)
                            )
                            .rotationEffect(.degrees(isCollapsed ? 0 : 90))
                    }
                }
                .padding(.horizontal, 14)
                .padding(.vertical, isCollapsed ? 14 : 10)
                .background {
                    if isCollapsed {
                        RoundedRectangle(cornerRadius: cornerRadius)
                            .fill(.ultraThinMaterial)
                            .opacity(isDark ? 1.0 : 0.55)
                            .overlay(
                                Group {
                                    if !isDark {
                                        RoundedRectangle(cornerRadius: cornerRadius)
                                            .fill(
                                                LinearGradient(
                                                    colors: [
                                                        colors[0].opacity(0.08),
                                                        colors.last!.opacity(0.05)
                                                    ],
                                                    startPoint: .leading,
                                                    endPoint: .trailing
                                                )
                                            )
                                    }
                                }
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: cornerRadius)
                                    .strokeBorder(
                                        LinearGradient(
                                            colors: isDark
                                                ? [colors[0].opacity(0.25), colors.last!.opacity(0.1)]
                                                : [colors[0].opacity(0.3), colors.last!.opacity(0.15)],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        ),
                                        lineWidth: isDark ? 0.75 : 0.5
                                    )
                            )
                            .shadow(
                                color: colors[0].opacity(isDark ? 0.12 : 0.08),
                                radius: shadowRadius, y: 4
                            )
                    }
                }
            }
            .buttonStyle(CollapsibleHeaderButtonStyle())

            if !isCollapsed {
                // Gradient accent line connecting header to content
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [.clear, colors[0].opacity(0.3), colors.last!.opacity(0.2), .clear],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(height: 1)
                    .padding(.horizontal, 24)
                    .padding(.top, 2)
                    .padding(.bottom, 6)

                content()
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }
}

// MARK: - Collapsible Header Button Style

/// Provides press feedback — subtle scale + opacity shift — for section headers.
struct CollapsibleHeaderButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.97 : 1.0)
            .opacity(configuration.isPressed ? 0.85 : 1.0)
            .animation(.easeOut(duration: 0.15), value: configuration.isPressed)
    }
}

import SwiftUI

// MARK: - Scheme Card

/// Reusable preset/scheme selection card matching React's SchemeCard component.
/// Shows a gradient preview, name, description, and selected checkmark.
struct SchemeCardView: View {
    let name: String
    let description: String
    let previewColors: [Color]
    let isSelected: Bool
    let previewHeight: CGFloat
    let onSelect: () -> Void
    var onFullscreen: (() -> Void)? = nil

    @Environment(\.colorScheme) private var colorScheme

    init(
        name: String,
        description: String = "",
        previewColors: [Color],
        isSelected: Bool,
        previewHeight: CGFloat = 80,
        onSelect: @escaping () -> Void,
        onFullscreen: (() -> Void)? = nil
    ) {
        self.name = name
        self.description = description
        self.previewColors = previewColors
        self.isSelected = isSelected
        self.previewHeight = previewHeight
        self.onSelect = onSelect
        self.onFullscreen = onFullscreen
    }

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        Button(action: onSelect) {
            VStack(spacing: 0) {
                // Gradient preview area
                previewSection

                // Name + description
                infoSection
            }
            .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .strokeBorder(
                        isSelected
                            ? LinearGradient(
                                colors: [
                                    .purple.opacity(0.9),
                                    .indigo.opacity(0.6),
                                    .purple.opacity(0.4)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                              )
                            : LinearGradient(
                                colors: [
                                    Color.white.opacity(isDark ? 0.14 : 0.30),
                                    Color.white.opacity(isDark ? 0.06 : 0.15)
                                ],
                                startPoint: .top,
                                endPoint: .bottom
                              ),
                        lineWidth: isSelected ? 2 : 1
                    )
            )
            .shadow(color: isSelected ? .purple.opacity(isDark ? 0.45 : 0.25) : .black.opacity(0.06), radius: 12, y: 4)
            .shadow(color: isSelected ? .purple.opacity(0.20) : .clear, radius: 6, y: 2)
            .scaleEffect(isSelected ? 1.02 : 1.0)
            .animation(.spring(response: 0.35, dampingFraction: 0.7), value: isSelected)
        }
        .buttonStyle(SchemeCardButtonStyle())
    }

    // MARK: - Preview Section

    private var previewSection: some View {
        ZStack {
            // Gradient preview
            LinearGradient(
                colors: previewColors,
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .frame(height: previewHeight)
            .overlay(
                // Subtle inner top glow
                LinearGradient(
                    colors: [.white.opacity(0.15), .clear],
                    startPoint: .top,
                    endPoint: .center
                )
            )

            // Top row: fullscreen button (leading) + checkmark (trailing)
            VStack {
                HStack {
                    // Fullscreen preview button (only when onFullscreen is provided)
                    if let fullscreen = onFullscreen {
                        Button {
                            fullscreen()
                        } label: {
                            Image(systemName: "arrow.up.left.and.arrow.down.right")
                                .font(.system(size: 10, weight: .bold))
                                .foregroundStyle(.white)
                                .frame(width: 26, height: 26)
                                .background(
                                    Circle()
                                        .fill(.black.opacity(0.35))
                                        .background(
                                            Circle()
                                                .fill(.ultraThinMaterial)
                                        )
                                        .clipShape(Circle())
                                )
                                .overlay(
                                    Circle()
                                        .strokeBorder(.white.opacity(0.25), lineWidth: 0.5)
                                )
                        }
                        .buttonStyle(LumenPressStyle(weight: .soft))
                    }

                    Spacer()

                    // Selected checkmark
                    if isSelected {
                        ZStack {
                            Circle()
                                .fill(.purple.opacity(0.3))
                                .frame(width: 32, height: 32)
                                .blur(radius: 5)

                            Circle()
                                .fill(.white)
                                .frame(width: 24, height: 24)
                                .overlay(
                                    Image(systemName: "checkmark")
                                        .font(.system(size: 12, weight: .bold))
                                        .foregroundStyle(.purple)
                                )
                                .shadow(color: .purple.opacity(0.5), radius: 6)
                        }
                        .transition(.scale.combined(with: .opacity))
                    }
                }
                .padding(8)

                Spacer()
            }
        }
    }

    // MARK: - Info Section

    private var infoSection: some View {
        VStack(spacing: 4) {
            Text(name)
                .font(.system(size: 13, weight: .bold))
                .foregroundStyle(isSelected
                    ? (isDark ? .white : .caribbeanInk)
                    : (isDark ? .white.opacity(0.7) : .caribbeanMist)
                )
                // Neon glow on selected name
                .shadow(color: isSelected && isDark ? .purple.opacity(0.5) : .clear, radius: 4)
                .lineLimit(1)

            if !description.isEmpty {
                Text(description)
                    .font(.system(size: 10))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanMist)
                    .lineLimit(2)
                    .multilineTextAlignment(.center)
            }
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 10)
        .frame(maxWidth: .infinity)
        .background {
            // Solid fill replacing ultraThinMaterial for performance
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [
                            isDark
                                ? Color(red: 30/255, green: 25/255, blue: 50/255).opacity(isSelected ? 0.95 : 0.85)
                                : Color(red: 245/255, green: 242/255, blue: 250/255).opacity(isSelected ? 0.95 : 0.90),
                            isDark
                                ? Color(red: 25/255, green: 20/255, blue: 45/255).opacity(isSelected ? 0.90 : 0.80)
                                : Color(red: 240/255, green: 238/255, blue: 248/255).opacity(isSelected ? 0.90 : 0.85)
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    )
                )
        }
    }
}

// MARK: - Preview

#Preview {
    HStack(spacing: 12) {
        SchemeCardView(
            name: "Barcelona Nights",
            description: "Twilight breathes Gaudí's forms",
            previewColors: [.indigo, .pink, .amber],
            isSelected: true
        ) {}

        SchemeCardView(
            name: "Tokyo Sunset",
            description: "Cherry-hued clouds dissolve",
            previewColors: [.red, .orange, .pink],
            isSelected: false
        ) {}
    }
    .padding()
    .background(Color.black)
}

// MARK: - Scheme Card Button Style

/// Custom button style that provides press feedback without blocking scroll gestures.
/// Uses SwiftUI's built-in isPressed which cooperates with ScrollView.
private struct SchemeCardButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .brightness(configuration.isPressed ? -0.03 : 0)
            .animation(.spring(response: 0.25, dampingFraction: 0.65), value: configuration.isPressed)
            .onChange(of: configuration.isPressed) { _, pressed in
                if pressed {
                    let g = UIImpactFeedbackGenerator(style: .soft)
                    g.impactOccurred(intensity: 0.5)
                }
            }
    }
}

// Amber color helper
private extension Color {
    static let amber = Color(red: 251/255, green: 191/255, blue: 36/255)
}

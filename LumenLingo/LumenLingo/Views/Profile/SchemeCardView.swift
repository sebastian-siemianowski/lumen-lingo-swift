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

    @Environment(\.colorScheme) private var colorScheme
    @State private var isPressed = false

    init(
        name: String,
        description: String = "",
        previewColors: [Color],
        isSelected: Bool,
        previewHeight: CGFloat = 80,
        onSelect: @escaping () -> Void
    ) {
        self.name = name
        self.description = description
        self.previewColors = previewColors
        self.isSelected = isSelected
        self.previewHeight = previewHeight
        self.onSelect = onSelect
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
            .scaleEffect(isPressed ? 0.96 : (isSelected ? 1.02 : 1.0))
            .animation(.spring(response: 0.35, dampingFraction: 0.7), value: isSelected)
            .animation(.spring(response: 0.2, dampingFraction: 0.8), value: isPressed)
        }
        .buttonStyle(.plain)
        .simultaneousGesture(
            DragGesture(minimumDistance: 0)
                .onChanged { _ in isPressed = true }
                .onEnded { _ in isPressed = false }
        )
    }

    // MARK: - Preview Section

    private var previewSection: some View {
        ZStack(alignment: .topTrailing) {
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

            // Selected checkmark
            if isSelected {
                ZStack {
                    // Glow behind checkmark
                    Circle()
                        .fill(.purple.opacity(0.3))
                        .frame(width: 36, height: 36)
                        .blur(radius: 6)

                    Circle()
                        .fill(.white)
                        .frame(width: 28, height: 28)
                        .overlay(
                            Image(systemName: "checkmark.circle.fill")
                                .font(.system(size: 24))
                                .foregroundStyle(.purple)
                        )
                        .shadow(color: .purple.opacity(0.5), radius: 8)
                }
                .padding(8)
                .transition(.scale.combined(with: .opacity))
            }
        }
    }

    // MARK: - Info Section

    private var infoSection: some View {
        VStack(spacing: 4) {
            Text(name)
                .font(.system(size: 13, weight: .bold))
                .foregroundStyle(isSelected
                    ? (isDark ? .white : .primary)
                    : (isDark ? .white.opacity(0.7) : .secondary)
                )
                // Neon glow on selected name
                .shadow(color: isSelected && isDark ? .purple.opacity(0.5) : .clear, radius: 4)
                .lineLimit(1)

            if !description.isEmpty {
                Text(description)
                    .font(.system(size: 10))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
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

// Amber color helper
private extension Color {
    static let amber = Color(red: 251/255, green: 191/255, blue: 36/255)
}

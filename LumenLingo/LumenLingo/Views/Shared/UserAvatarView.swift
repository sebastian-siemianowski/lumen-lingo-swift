import SwiftUI

// MARK: - User Avatar View

/// Reusable avatar component that renders the highest-priority available avatar.
/// Priority: Google/Clerk image URL → generated placeholder (initials or cosmic icon).
struct UserAvatarView: View {
    let user: AppUser?
    let size: CGFloat

    var body: some View {
        Group {
            if let url = user?.avatarURL {
                AsyncImage(url: url) { phase in
                    switch phase {
                    case .success(let image):
                        image
                            .resizable()
                            .scaledToFill()
                    default:
                        placeholderView
                    }
                }
            } else {
                placeholderView
            }
        }
        .frame(width: size, height: size)
        .clipShape(Circle())
        .overlay(
            Circle()
                .strokeBorder(.white.opacity(0.3), lineWidth: 1)
        )
    }

    @ViewBuilder
    private var placeholderView: some View {
        let initials = userInitials
        if initials.isEmpty {
            // No name available — show cosmic orb icon
            ZStack {
                gradientBackground
                Image(systemName: "sparkle")
                    .font(.system(size: size * 0.4, weight: .medium))
                    .foregroundStyle(.white.opacity(0.8))
            }
        } else {
            ZStack {
                gradientBackground
                Text(initials)
                    .font(.system(size: size * 0.4, weight: .bold))
                    .foregroundStyle(.white)
            }
        }
    }

    private var gradientBackground: some View {
        let colors = gradientColors(for: user?.name ?? "")
        return Circle()
            .fill(LinearGradient(colors: colors, startPoint: .topLeading, endPoint: .bottomTrailing))
    }

    private var userInitials: String {
        guard let name = user?.name, !name.isEmpty else { return "" }
        let parts = name.components(separatedBy: " ").filter { !$0.isEmpty }
        if parts.count >= 2 {
            return String(parts[0].prefix(1) + parts[1].prefix(1)).uppercased()
        }
        return String(parts.first?.prefix(1) ?? "").uppercased()
    }

    /// Deterministic gradient from name hash — 8 cosmic palette pairs.
    private func gradientColors(for name: String) -> [Color] {
        let palettes: [[Color]] = [
            [Color(red: 0.4, green: 0.2, blue: 0.8), Color(red: 0.6, green: 0.3, blue: 0.9)],
            [Color(red: 0.2, green: 0.3, blue: 0.8), Color(red: 0.4, green: 0.5, blue: 0.9)],
            [Color(red: 0.1, green: 0.5, blue: 0.7), Color(red: 0.3, green: 0.7, blue: 0.8)],
            [Color(red: 0.5, green: 0.2, blue: 0.6), Color(red: 0.7, green: 0.3, blue: 0.7)],
            [Color(red: 0.3, green: 0.1, blue: 0.7), Color(red: 0.5, green: 0.2, blue: 0.9)],
            [Color(red: 0.2, green: 0.4, blue: 0.6), Color(red: 0.3, green: 0.6, blue: 0.8)],
            [Color(red: 0.4, green: 0.3, blue: 0.7), Color(red: 0.6, green: 0.4, blue: 0.8)],
            [Color(red: 0.1, green: 0.3, blue: 0.6), Color(red: 0.2, green: 0.5, blue: 0.8)],
        ]
        let hash = abs(name.hashValue)
        return palettes[hash % palettes.count]
    }
}

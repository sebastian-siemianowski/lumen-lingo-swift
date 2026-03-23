import SwiftUI
import SwiftData

/// Displays a transparent summary of all personal data stored by LumenLingo.
/// GDPR Art. 15 — Right of Access.
struct ViewMyDataView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(LocalizationManager.self) private var localization

    @Query private var profiles: [UserProfile]
    @Query private var records: [GameProgressRecord]
    @Query private var mastered: [MasteredContent]
    @Query private var favorites: [FavoriteCategory]
    @Query private var langPrefs: [LanguagePreference]

    private var profile: UserProfile? { profiles.first }
    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(spacing: 16) {
                headerSection

                dataRow(
                    icon: "person.crop.circle.fill",
                    color: .cyan,
                    title: L.dataProfileInfo,
                    detail: profileDetail
                )

                dataRow(
                    icon: "gamecontroller.fill",
                    color: .purple,
                    title: L.dataGameRecords,
                    detail: "\(records.count)"
                )

                dataRow(
                    icon: "star.fill",
                    color: .yellow,
                    title: L.dataMasteredItems,
                    detail: "\(mastered.count)"
                )

                dataRow(
                    icon: "heart.fill",
                    color: .pink,
                    title: L.dataFavorites,
                    detail: "\(favorites.count)"
                )

                dataRow(
                    icon: "icloud.fill",
                    color: .blue,
                    title: L.dataICloudSync,
                    detail: (profile?.offlineModeEnabled == false) ? L.dataEnabled : L.dataDisabled
                )

                dataRow(
                    icon: "internaldrive.fill",
                    color: .green,
                    title: L.dataStorageEstimate,
                    detail: estimatedStorage
                )

                Spacer(minLength: 40)
            }
            .padding(.horizontal, 16)
            .padding(.top, 10)
        }
        .cosmicBackground()
        .navigationTitle(L.viewMyDataTitle)
        .navigationBarTitleDisplayMode(.inline)
    }

    // MARK: - Header

    private var headerSection: some View {
        VStack(spacing: 6) {
            Image(systemName: "shield.checkered")
                .font(.system(size: 36, weight: .light))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.cyan, .purple],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            Text(L.viewMyDataDesc)
                .font(.system(size: 13))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .multilineTextAlignment(.center)
        }
        .padding(.vertical, 12)
    }

    // MARK: - Data Row

    private func dataRow(icon: String, color: Color, title: String, detail: String) -> some View {
        GlassPanelWrapper(cornerRadius: 16) {
            HStack(spacing: 14) {
                Image(systemName: icon)
                    .font(.system(size: 18, weight: .semibold))
                    .foregroundStyle(color)
                    .frame(width: 32)

                Text(title)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)

                Spacer()

                Text(detail)
                    .font(.system(size: 14, weight: .semibold, design: .rounded))
                    .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 16)
        }
    }

    // MARK: - Computed Details

    private var profileDetail: String {
        guard let p = profile else { return "—" }
        var parts: [String] = []
        if !p.firstName.isEmpty { parts.append(p.firstName) }
        if !p.email.isEmpty { parts.append(p.email) }
        if parts.isEmpty { parts.append("Anonymous") }
        return parts.joined(separator: ", ")
    }

    private var estimatedStorage: String {
        let profileBytes = 512  // rough estimate per profile
        let recordBytes = records.count * 128
        let masteredBytes = mastered.count * 96
        let favBytes = favorites.count * 64
        let total = profileBytes + recordBytes + masteredBytes + favBytes

        if total < 1024 {
            return "\(total) B"
        } else if total < 1024 * 1024 {
            return String(format: "%.1f KB", Double(total) / 1024.0)
        } else {
            return String(format: "%.1f MB", Double(total) / (1024.0 * 1024.0))
        }
    }
}

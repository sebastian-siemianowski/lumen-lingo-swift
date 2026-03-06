import SwiftUI
import SwiftData

// MARK: - Profile View

/// User profile screen with avatar, stats overview, preferences,
/// visual settings (background/orb/quantum selection), and account info.
struct ProfileView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]
    @Query(sort: \GameProgressRecord.createdDate, order: .reverse)
    private var allProgress: [GameProgressRecord]

    private var profile: UserProfile? { profiles.first }
    private var user: AppUser { .mock }

    @State private var showLanguageSelector = false
    @State private var selectedNebulaPreset: NebulaPreset = .lagoonNebula
    @State private var selectedOrbScheme: BreathingOrbScheme = .barcelonaNights
    @State private var selectedQuantumScene: QuantumFlowScene = .auroraBorealis

    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                // Avatar section
                avatarSection

                // Account info
                accountSection

                // Learning stats
                statsSection

                // Visual settings
                visualSettingsSection

                // Language pair
                languageSection

                // App info
                appInfoSection

                Spacer(minLength: 80)
            }
            .padding(.horizontal, 16)
            .padding(.top, 12)
        }
        .cosmicBackground(
            preset: selectedNebulaPreset,
            orbScheme: selectedOrbScheme,
            quantumScene: selectedQuantumScene
        )
        .navigationTitle("Profile")
        .navigationBarTitleDisplayMode(.large)
        .toolbarColorScheme(.dark, for: .navigationBar)
        .onAppear { loadSettings() }
        .sheet(isPresented: $showLanguageSelector) {
            LanguageSelectionView()
        }
    }

    // MARK: - Avatar

    private var avatarSection: some View {
        VStack(spacing: 12) {
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 88, height: 88)
                    .shadow(color: Color(hex: "#764ba2").opacity(0.4), radius: 20)

                Image(systemName: "person.fill")
                    .font(.system(size: 36))
                    .foregroundStyle(.white)
            }

            Text(user.name)
                .font(.title2.bold())
                .foregroundStyle(.white)

            Text("Level \(profile?.currentLevel ?? 1) Learner")
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.6))
        }
        .padding(.top, 10)
    }

    // MARK: - Account

    private var accountSection: some View {
        VStack(spacing: 12) {
            Text("Account")
                .font(.headline)
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)

            profileRow(icon: "envelope.fill", color: .cyan, title: "Email", value: user.email)
            profileRow(icon: "person.fill", color: .purple, title: "Name", value: user.name)
            profileRow(icon: "crown.fill", color: .yellow, title: "Membership", value: "Free Tier")
        }
        .padding(18)
        .background(glassCard)
    }

    // MARK: - Stats

    private var statsSection: some View {
        VStack(spacing: 12) {
            Text("Statistics")
                .font(.headline)
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                miniStat(icon: "star.fill", value: "\(profile?.currentLevel ?? 1)", label: "Level", color: .yellow)
                miniStat(icon: "bolt.fill", value: "\(profile?.totalXP ?? 0)", label: "Total XP", color: .cyan)
                miniStat(icon: "flame.fill", value: "\(profile?.streakDays ?? 0)", label: "Streak", color: .orange)
                miniStat(icon: "play.circle.fill", value: "\(allProgress.count)", label: "Sessions", color: .green)
            }
        }
        .padding(18)
        .background(glassCard)
    }

    private func miniStat(icon: String, value: String, label: String, color: Color) -> some View {
        VStack(spacing: 6) {
            Image(systemName: icon)
                .foregroundStyle(color)
            Text(value)
                .font(.headline)
                .foregroundStyle(.white)
            Text(label)
                .font(.caption2)
                .foregroundStyle(.white.opacity(0.5))
        }
        .frame(maxWidth: .infinity)
        .padding(10)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(color.opacity(0.06))
        )
    }

    // MARK: - Visual Settings

    private var visualSettingsSection: some View {
        VStack(spacing: 14) {
            Text("Visual Theme")
                .font(.headline)
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)

            // Nebula preset
            VStack(alignment: .leading, spacing: 8) {
                Text("Nebula Background")
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))

                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 10) {
                        ForEach(NebulaPreset.allCases, id: \.self) { preset in
                            presetChip(
                                title: preset.displayName,
                                isSelected: selectedNebulaPreset == preset
                            ) {
                                withAnimation { selectedNebulaPreset = preset }
                                saveVisualSettings()
                            }
                        }
                    }
                }
            }

            // Orb scheme
            VStack(alignment: .leading, spacing: 8) {
                Text("Breathing Orbs")
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))

                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 10) {
                        ForEach(BreathingOrbScheme.allCases, id: \.self) { scheme in
                            presetChip(
                                title: scheme.displayName,
                                isSelected: selectedOrbScheme == scheme
                            ) {
                                withAnimation { selectedOrbScheme = scheme }
                                saveVisualSettings()
                            }
                        }
                    }
                }
            }

            // Quantum scene
            VStack(alignment: .leading, spacing: 8) {
                Text("Quantum Flow")
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))

                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 10) {
                        ForEach(QuantumFlowScene.allCases, id: \.self) { scene in
                            presetChip(
                                title: scene.displayName,
                                isSelected: selectedQuantumScene == scene
                            ) {
                                withAnimation { selectedQuantumScene = scene }
                                saveVisualSettings()
                            }
                        }
                    }
                }
            }
        }
        .padding(18)
        .background(glassCard)
    }

    private func presetChip(title: String, isSelected: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Text(title)
                .font(.caption.bold())
                .foregroundStyle(isSelected ? .white : .white.opacity(0.6))
                .padding(.horizontal, 12)
                .padding(.vertical, 7)
                .background(
                    Capsule()
                        .fill(isSelected
                            ? AnyShapeStyle(LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .leading, endPoint: .trailing
                            ))
                            : AnyShapeStyle(.white.opacity(0.08))
                        )
                )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Language

    private var languageSection: some View {
        VStack(spacing: 12) {
            Text("Language")
                .font(.headline)
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity, alignment: .leading)

            let langPref = languagePrefs.first
            Button {
                showLanguageSelector = true
            } label: {
                HStack {
                    Image(systemName: "globe")
                        .foregroundStyle(.cyan)

                    VStack(alignment: .leading, spacing: 2) {
                        Text("Current Pair")
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.5))
                        Text("\(langPref?.sourceLanguageEnum.displayName ?? "English") → \(langPref?.targetLanguageEnum.displayName ?? "Spanish")")
                            .font(.subheadline.bold())
                            .foregroundStyle(.white)
                    }

                    Spacer()

                    Image(systemName: "chevron.right")
                        .foregroundStyle(.white.opacity(0.4))
                }
                .padding(14)
                .background(
                    RoundedRectangle(cornerRadius: 16)
                        .fill(.white.opacity(0.06))
                        .overlay(
                            RoundedRectangle(cornerRadius: 16)
                                .strokeBorder(.white.opacity(0.06), lineWidth: 1)
                        )
                )
            }
            .buttonStyle(.plain)
        }
        .padding(18)
        .background(glassCard)
    }

    // MARK: - App Info

    private var appInfoSection: some View {
        VStack(spacing: 8) {
            Text("LumenLingo")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.5))
            Text("Version 1.0.0")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.3))
            Text("Made with ❤️ for language learners")
                .font(.caption)
                .foregroundStyle(.white.opacity(0.3))
        }
        .padding(16)
    }

    // MARK: - Helpers

    private func profileRow(icon: String, color: Color, title: String, value: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .foregroundStyle(color)
                .frame(width: 24)

            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.5))
                Text(value)
                    .font(.subheadline)
                    .foregroundStyle(.white)
            }

            Spacer()
        }
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 14)
                .fill(.white.opacity(0.04))
        )
    }

    private var glassCard: some View {
        RoundedRectangle(cornerRadius: 22)
            .fill(.ultraThinMaterial)
            .overlay(
                RoundedRectangle(cornerRadius: 22)
                    .strokeBorder(.white.opacity(colorScheme == .dark ? 0.08 : 0.15), lineWidth: 1)
            )
            .shadow(color: .black.opacity(0.1), radius: 15, y: 5)
    }

    private func loadSettings() {
        if let p = profile {
            selectedNebulaPreset = p.nebulaPresetEnum
            selectedOrbScheme = p.orbScheme
            selectedQuantumScene = p.quantumScene
        }
    }

    private func saveVisualSettings() {
        if let p = profile {
            p.nebulaPresetEnum = selectedNebulaPreset
            p.orbScheme = selectedOrbScheme
            p.quantumScene = selectedQuantumScene
        }
    }
}

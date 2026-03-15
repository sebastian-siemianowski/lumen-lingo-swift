import SwiftUI
import SwiftData

// MARK: - LumenLingo App Entry Point

@main
struct LumenLingoApp: App {
    @State private var themeManager = ThemeManager()
    @State private var localizationManager = LocalizationManager()
    @State private var tierManager = TierManager()
    @State private var practiceTimeTracker = PracticeTimeTracker()
    @State private var networkMonitor = NetworkMonitor()

    private var debugBackgroundOnly: Bool {
        ProcessInfo.processInfo.environment["LL_DEBUG_BACKGROUND_ONLY"] == "1"
    }

    private var debugForcedNebula: NebulaPreset {
        guard let raw = ProcessInfo.processInfo.environment["LL_DEBUG_FORCE_NEBULA"],
              let preset = NebulaPreset(rawValue: raw) else {
            return .starburstRing
        }
        return preset
    }

    var body: some Scene {
        WindowGroup {
            Group {
                if debugBackgroundOnly {
                    Color.clear
                        .cosmicBackground(preset: debugForcedNebula)
                } else {
                    ContentView()
                }
            }
            .environment(themeManager)
            .environment(tierManager)
            .environment(practiceTimeTracker)
            .environment(networkMonitor)
            .environment(\.localization, localizationManager)
            .preferredColorScheme(themeManager.colorScheme)
        }
        .modelContainer(for: [
            UserProfile.self,
            GameProgressRecord.self,
            LanguagePreference.self,
            FavoriteCategory.self,
            MasteredContent.self,
        ])
    }
}

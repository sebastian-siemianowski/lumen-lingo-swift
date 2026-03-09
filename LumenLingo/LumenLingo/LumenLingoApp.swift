import SwiftUI
import SwiftData

// MARK: - LumenLingo App Entry Point

@main
struct LumenLingoApp: App {
    @State private var themeManager = ThemeManager()
    @State private var localizationManager = LocalizationManager()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(themeManager)
                .environment(\.localization, localizationManager)
                .preferredColorScheme(themeManager.colorScheme)
        }
        .modelContainer(for: [
            UserProfile.self,
            GameProgressRecord.self,
            LanguagePreference.self,
            FavoriteCategory.self,
            MasteredContent.self,
            EnabledBetaPair.self,
        ])
    }
}

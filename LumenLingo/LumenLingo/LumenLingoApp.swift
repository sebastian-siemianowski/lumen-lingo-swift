import SwiftUI
import SwiftData

// MARK: - LumenLingo App Entry Point

@main
struct LumenLingoApp: App {
    @State private var themeManager = ThemeManager()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(themeManager)
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

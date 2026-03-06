import SwiftUI
import SwiftData

// MARK: - LumenLingo App Entry Point

@main
struct LumenLingoApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
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

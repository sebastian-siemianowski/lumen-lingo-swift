import SwiftUI
import SwiftData

// MARK: - Theme Manager

/// Central dark/light mode manager matching React's DarkModeContext.
/// Persists preference to UserProfile's `darkMode` field and provides
/// a reactive binding for `.preferredColorScheme()`.
@Observable
final class ThemeManager {
    var isDarkMode: Bool = true
    var isTransitioning: Bool = false

    /// The ColorScheme to apply at root level.
    var colorScheme: ColorScheme {
        isDarkMode ? .dark : .light
    }

    /// Toggle dark mode with smooth transition.
    func toggleDarkMode(profile: UserProfile?) {
        guard !isTransitioning else { return }
        isTransitioning = true
        withAnimation(.smooth(duration: 0.65)) {
            isDarkMode.toggle()
        }
        profile?.darkMode = isDarkMode
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.75) { [weak self] in
            self?.isTransitioning = false
        }
    }

    /// Sync from UserProfile on appear.
    func syncFromProfile(_ profile: UserProfile?) {
        if let profile {
            isDarkMode = profile.darkMode
        }
    }
}

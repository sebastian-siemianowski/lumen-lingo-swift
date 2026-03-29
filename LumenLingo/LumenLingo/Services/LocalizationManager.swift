import SwiftUI
import SwiftData

// MARK: - Localization Manager

/// Observable object that provides the current `AppStrings` based on the user's source language.
/// Injected into the environment so all views can access translated strings via `@Environment`.
@Observable
final class LocalizationManager: @unchecked Sendable {
    var sourceLanguage: SupportedLanguage = .english

    var strings: AppStrings {
        AppStrings.forLanguage(sourceLanguage)
    }

    func update(from preferences: [LanguagePreference]) {
        if let pref = preferences.first {
            sourceLanguage = pref.sourceLanguageEnum
        }
    }
}

// MARK: - Environment Key

private struct LocalizationManagerKey: EnvironmentKey {
    static let defaultValue = LocalizationManager()
}

extension EnvironmentValues {
    var localization: LocalizationManager {
        get { self[LocalizationManagerKey.self] }
        set { self[LocalizationManagerKey.self] = newValue }
    }
}

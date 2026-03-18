import SwiftUI

/// A reusable badge displaying a language pair with flag icons or short codes.
/// Supports `.compact` (flag icons) and `.full` ("English → Spanish") display modes.
struct LanguagePairBadge: View {
    let sourceLanguage: String
    let targetLanguage: String
    var displayMode: DisplayMode = .compact

    enum DisplayMode {
        case compact
        case full
    }

    private var source: SupportedLanguage? { SupportedLanguage(rawValue: sourceLanguage) }
    private var target: SupportedLanguage? { SupportedLanguage(rawValue: targetLanguage) }

    var body: some View {
        HStack(spacing: 3) {
            switch displayMode {
            case .compact:
                if let src = source, let tgt = target {
                    CountryFlagView(countryCode: src.countryCode, size: 10)
                    Image(systemName: "arrow.right")
                        .font(.system(size: 7, weight: .medium))
                        .foregroundStyle(.secondary)
                    CountryFlagView(countryCode: tgt.countryCode, size: 10)
                } else {
                    Text("\(codeFor(sourceLanguage))→\(codeFor(targetLanguage))")
                        .font(.system(size: 10, weight: .medium))
                        .foregroundStyle(.secondary)
                }
            case .full:
                if let src = source, let tgt = target {
                    Text("\(src.englishName) → \(tgt.englishName)")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(.secondary)
                } else {
                    Text("\(sourceLanguage.capitalized) → \(targetLanguage.capitalized)")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(.secondary)
                }
            }
        }
        .padding(.horizontal, 6)
        .padding(.vertical, 2)
        .background(Capsule().fill(.ultraThinMaterial))
        .accessibilityLabel("\(source?.englishName ?? sourceLanguage) to \(target?.englishName ?? targetLanguage)")
    }

    private func codeFor(_ lang: String) -> String {
        SupportedLanguage(rawValue: lang)?.countryCode ?? lang.prefix(2).uppercased()
    }
}

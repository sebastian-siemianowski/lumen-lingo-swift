import SwiftUI
import SwiftData

// MARK: - Beta Languages View

/// React-parity Beta Languages tab.
/// Shows core (top) and experimental language pairs with enable/disable toggles.
/// Pairs persist via SwiftData `EnabledBetaPair`.
struct BetaLanguagesView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Query private var enabledPairs: [EnabledBetaPair]

    @State private var showExperimental = false

    private var isDark: Bool { colorScheme == .dark }

    // Core pairs — React's TOP_LANGUAGE_PAIRS
    private let corePairs: [LanguagePair] = [
        .init(source: .english, target: .spanish),
        .init(source: .spanish, target: .english),
        .init(source: .polish, target: .english),
        .init(source: .polish, target: .spanish),
        .init(source: .polish, target: .german),
        .init(source: .german, target: .english),
        .init(source: .german, target: .spanish),
    ]

    // Experimental pairs — all remaining combos
    private var experimentalPairs: [LanguagePair] {
        LanguagePair.allAvailable.filter { pair in
            !corePairs.contains(pair)
        }
    }

    var body: some View {
        VStack(spacing: 20) {
            // Header
            headerSection

            // Beta disclaimer
            betaDisclaimer

            // Core languages section
            languageSection(
                title: "Core Languages",
                subtitle: "Fully supported language pairs",
                icon: "star.fill",
                color: .yellow,
                pairs: corePairs
            )

            // Experimental languages section (collapsible)
            experimentalSection
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        HStack(spacing: 12) {
            Image(systemName: "flask.fill")
                .font(.system(size: 20))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.green, .cyan],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )

            VStack(alignment: .leading, spacing: 2) {
                Text("Beta Languages")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                Text("Enable additional language pairs")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            }

            Spacer()

            // Count badge
            Text("\(enabledPairs.count)")
                .font(.system(size: 12, weight: .bold, design: .rounded))
                .foregroundStyle(.white)
                .padding(.horizontal, 8)
                .padding(.vertical, 4)
                .background(
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.green, .cyan],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                )
        }
    }

    // MARK: - Beta Disclaimer

    private var betaDisclaimer: some View {
        HStack(spacing: 8) {
            Image(systemName: "lightbulb.fill")
                .font(.system(size: 14))
                .foregroundStyle(.orange)

            Text("Beta languages may have limited content or occasional translation quirks.")
                .font(.system(size: 12))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
        }
        .padding(12)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(.orange.opacity(isDark ? 0.08 : 0.06))
                .overlay(
                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                        .strokeBorder(.orange.opacity(0.15), lineWidth: 0.5)
                )
        )
    }

    // MARK: - Language Section

    private func languageSection(
        title: String,
        subtitle: String,
        icon: String,
        color: Color,
        pairs: [LanguagePair]
    ) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 6) {
                Image(systemName: icon)
                    .font(.system(size: 13))
                    .foregroundStyle(color)
                Text(title)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(isDark ? .white : .primary)
                Spacer()
                Text(subtitle)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }

            ForEach(pairs, id: \.key) { pair in
                languagePairRow(pair)
            }
        }
    }

    // MARK: - Language Pair Row

    private func languagePairRow(_ pair: LanguagePair) -> some View {
        let isEnabled = enabledPairs.contains { $0.sourceLanguage == pair.source.rawValue && $0.targetLanguage == pair.target.rawValue }

        return HStack(spacing: 12) {
            // Flags
            HStack(spacing: 4) {
                Text(pair.source.flag)
                    .font(.system(size: 20))
                Image(systemName: "arrow.right")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                Text(pair.target.flag)
                    .font(.system(size: 20))
            }

            // Label
            VStack(alignment: .leading, spacing: 1) {
                Text("\(pair.source.englishName) → \(pair.target.englishName)")
                    .font(.system(size: 14, weight: .medium))
                    .foregroundStyle(isDark ? .white : .primary)
                if pair.isBuiltIn {
                    Text("Built-in")
                        .font(.system(size: 10, weight: .medium))
                        .foregroundStyle(.green.opacity(0.8))
                }
            }

            Spacer()

            if isEnabled {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 20))
                    .foregroundStyle(.green)
                    .transition(.scale.combined(with: .opacity))
            } else {
                Image(systemName: "circle")
                    .font(.system(size: 20))
                    .foregroundStyle(isDark ? .white.opacity(0.2) : .gray.opacity(0.3))
                    .transition(.scale.combined(with: .opacity))
            }
        }
        .padding(.vertical, 6)
        .padding(.horizontal, 12)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(isEnabled
                      ? (isDark ? .green.opacity(0.06) : .green.opacity(0.04))
                      : (isDark ? .white.opacity(0.03) : .white.opacity(0.15))
                )
        )
        .contentShape(Rectangle())
        .onTapGesture {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                togglePair(pair)
            }
        }
    }

    // MARK: - Experimental Section

    private var experimentalSection: some View {
        VStack(spacing: 10) {
            Button {
                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                    showExperimental.toggle()
                }
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "sparkles")
                        .font(.system(size: 13))
                        .foregroundStyle(.purple)
                    Text("Experimental Languages")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(isDark ? .white : .primary)

                    Spacer()

                    Image(systemName: "chevron.down")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                        .rotationEffect(.degrees(showExperimental ? 180 : 0))
                }
                .padding(.vertical, 8)
            }
            .buttonStyle(.plain)

            if showExperimental {
                ForEach(experimentalPairs, id: \.key) { pair in
                    languagePairRow(pair)
                }
                .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }

    // MARK: - Toggle Logic

    private func togglePair(_ pair: LanguagePair) {
        if let existing = enabledPairs.first(where: {
            $0.sourceLanguage == pair.source.rawValue && $0.targetLanguage == pair.target.rawValue
        }) {
            modelContext.delete(existing)
        } else {
            let newPair = EnabledBetaPair(
                sourceLanguage: pair.source.rawValue,
                targetLanguage: pair.target.rawValue
            )
            modelContext.insert(newPair)
        }
    }
}

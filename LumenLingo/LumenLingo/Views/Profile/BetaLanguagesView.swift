import SwiftUI
import SwiftData

// MARK: - Beta Languages View

/// React-parity Beta Languages tab.
/// Shows core (top, always-active) and experimental (toggleable) language pairs.
/// Pairs persist via SwiftData `EnabledBetaPair`.
struct BetaLanguagesView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Query private var enabledPairs: [EnabledBetaPair]

    private var isDark: Bool { colorScheme == .dark }

    // Two-column adaptive grid
    private let columns = [
        GridItem(.flexible(), spacing: 10),
        GridItem(.flexible(), spacing: 10)
    ]

    // Core pairs — React's TOP_LANGUAGE_PAIRS (always on)
    private let corePairs: [LanguagePair] = [
        .init(source: .english, target: .spanish),
        .init(source: .spanish, target: .english),
        .init(source: .polish, target: .english),
        .init(source: .polish, target: .spanish),
        .init(source: .polish, target: .german),
        .init(source: .german, target: .english),
        .init(source: .german, target: .spanish),
    ]

    // Experimental pairs — all remaining combos (toggleable)
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

            // Core languages section (always on)
            coreLanguagesSection

            // Experimental languages section (toggleable)
            experimentalLanguagesSection
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        HStack(spacing: 12) {
            // Icon container matching React's 44x44 rounded box
            ZStack {
                RoundedRectangle(cornerRadius: 14, style: .continuous)
                    .fill(
                        LinearGradient(
                            colors: isDark
                                ? [Color.cyan.opacity(0.35), Color.teal.opacity(0.35)]
                                : [Color.cyan.opacity(0.3), Color.teal.opacity(0.3)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 14, style: .continuous)
                            .strokeBorder(
                                Color.cyan.opacity(isDark ? 0.35 : 0.4),
                                lineWidth: 1
                            )
                    )
                    .frame(width: 44, height: 44)
                    .shadow(color: .cyan.opacity(0.15), radius: 10)

                Image(systemName: "flask.fill")
                    .font(.system(size: 22))
                    .foregroundStyle(.cyan)
            }

            VStack(alignment: .leading, spacing: 4) {
                Text("Beta Languages")
                    .font(.system(size: 17, weight: .bold))
                    .foregroundStyle(.white)
                Text("Experimental language pairs")
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .white.opacity(0.6))
            }

            Spacer()
        }
    }

    // MARK: - Beta Disclaimer

    private var betaDisclaimer: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: "lightbulb.fill")
                .font(.system(size: 16))
                .foregroundStyle(.yellow)

            VStack(alignment: .leading, spacing: 4) {
                Text("Experimental Features")
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(isDark ? Color(red: 0.996, green: 0.941, blue: 0.541) : .white)
                Text("Beta languages may have limited content or occasional translation quirks.")
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? Color(red: 0.996, green: 0.941, blue: 0.541).opacity(0.7) : .white.opacity(0.9))
            }
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(
                    LinearGradient(
                        colors: isDark
                            ? [Color.yellow.opacity(0.12), Color.orange.opacity(0.08)]
                            : [Color.yellow.opacity(0.25), Color.orange.opacity(0.2)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 18, style: .continuous)
                        .strokeBorder(
                            isDark ? Color.yellow.opacity(0.3) : .white.opacity(0.4),
                            lineWidth: 1
                        )
                )
        )
    }

    // MARK: - Core Languages Section

    private var coreLanguagesSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            // Section header
            HStack(spacing: 8) {
                Image(systemName: "star.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .yellow : .white)

                Text("Core Languages")
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(.white)

                // "Always on" badge
                Text("Always on")
                    .font(.system(size: 10, weight: .bold))
                    .foregroundStyle(isDark ? Color.green.opacity(0.9) : .white)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(
                        Capsule()
                            .fill(
                                isDark
                                    ? LinearGradient(
                                        colors: [Color.green.opacity(0.2), Color.teal.opacity(0.2)],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                      )
                                    : LinearGradient(
                                        colors: [Color.white.opacity(0.25)],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                      )
                            )
                            .overlay(
                                Capsule()
                                    .strokeBorder(
                                        isDark ? Color.green.opacity(0.3) : .white.opacity(0.35),
                                        lineWidth: 1
                                    )
                            )
                    )

                Spacer()
            }

            // 2-column grid of core pair cards
            LazyVGrid(columns: columns, spacing: 10) {
                ForEach(Array(corePairs.enumerated()), id: \.element.key) { index, pair in
                    corePairCard(pair, index: index)
                }
            }
        }
    }

    // MARK: - Core Pair Card (Non-Toggleable)

    private func corePairCard(_ pair: LanguagePair, index: Int) -> some View {
        HStack(spacing: 10) {
            // Globe icon container
            ZStack {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(
                        isDark
                            ? LinearGradient(
                                colors: [Color.green.opacity(0.2), Color.teal.opacity(0.15)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                              )
                            : LinearGradient(
                                colors: [Color.white.opacity(0.25)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                              )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 10, style: .continuous)
                            .strokeBorder(
                                isDark ? Color.green.opacity(0.3) : .white.opacity(0.45),
                                lineWidth: 1
                            )
                    )
                    .frame(width: 36, height: 36)

                Image(systemName: "globe")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundStyle(isDark ? .green.opacity(0.8) : .white)
            }

            // Pair label
            Text("\(pair.source.englishName) → \(pair.target.englishName)")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? Color(red: 0.86, green: 0.99, blue: 0.91) : .white)
                .lineLimit(1)
                .minimumScaleFactor(0.8)

            Spacer(minLength: 4)

            // Active indicator
            VStack(spacing: 2) {
                Image(systemName: "checkmark.circle.fill")
                    .font(.system(size: 18))
                    .foregroundStyle(isDark ? .green : .white)

                Text("Active")
                    .font(.system(size: 9, weight: .bold))
                    .foregroundStyle(isDark ? Color.green.opacity(0.8) : .white)
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 12)
        .background(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(
                    isDark
                        ? (index % 2 == 0 ? Color.white.opacity(0.05) : Color.white.opacity(0.08))
                        : (index % 2 == 0 ? Color.white.opacity(0.06) : Color.white.opacity(0.1))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 18, style: .continuous)
                        .strokeBorder(
                            isDark ? Color.green.opacity(0.35) : .white.opacity(0.2),
                            lineWidth: 1
                        )
                )
        )
    }

    // MARK: - Experimental Languages Section

    private var experimentalLanguagesSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            // Section header
            HStack(spacing: 8) {
                Image(systemName: "flask.fill")
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .cyan : .white)

                Text("Experimental Languages")
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(isDark ? Color(red: 0.65, green: 0.95, blue: 0.99) : .white)

                Spacer()
            }

            // 2-column grid of experimental pair cards
            LazyVGrid(columns: columns, spacing: 10) {
                ForEach(Array(experimentalPairs.enumerated()), id: \.element.key) { index, pair in
                    experimentalPairCard(pair, index: index)
                }
            }
        }
    }

    // MARK: - Experimental Pair Card (Toggleable)

    private func iconGradient(isEnabled: Bool) -> LinearGradient {
        if isEnabled {
            return isDark
                ? LinearGradient(colors: [Color.purple.opacity(0.25), Color.purple.opacity(0.2)], startPoint: .topLeading, endPoint: .bottomTrailing)
                : LinearGradient(colors: [Color.white.opacity(0.3)], startPoint: .topLeading, endPoint: .bottomTrailing)
        } else {
            return isDark
                ? LinearGradient(colors: [Color.white.opacity(0.03)], startPoint: .topLeading, endPoint: .bottomTrailing)
                : LinearGradient(colors: [Color.white.opacity(0.12)], startPoint: .topLeading, endPoint: .bottomTrailing)
        }
    }

    private func cardFillColor(isEnabled: Bool, index: Int) -> Color {
        if isEnabled {
            return isDark ? Color.white.opacity(0.1) : Color.white.opacity(0.12)
        } else if isDark {
            return index % 2 == 0 ? Color.white.opacity(0.05) : Color.white.opacity(0.08)
        } else {
            return index % 2 == 0 ? Color.white.opacity(0.06) : Color.white.opacity(0.1)
        }
    }

    private func experimentalPairCard(_ pair: LanguagePair, index: Int) -> some View {
        let isEnabled = enabledPairs.contains {
            $0.sourceLanguage == pair.source.rawValue && $0.targetLanguage == pair.target.rawValue
        }

        let iconBorderColor: Color = isEnabled
            ? (isDark ? Color.purple.opacity(0.4) : .white.opacity(0.5))
            : (isDark ? Color.white.opacity(0.08) : .white.opacity(0.3))

        let globeColor: Color = isEnabled
            ? (isDark ? Color.purple.opacity(0.8) : .white)
            : (isDark ? Color(red: 0.81, green: 0.79, blue: 0.84) : .white.opacity(0.6))

        let labelColor: Color = isEnabled
            ? (isDark ? Color(red: 0.95, green: 0.91, blue: 1.0) : .white)
            : (isDark ? Color.white.opacity(0.75) : .white.opacity(0.7))

        let toggleColor: Color = isEnabled
            ? (isDark ? .purple : .white)
            : (isDark ? Color(red: 0.81, green: 0.79, blue: 0.84) : .white.opacity(0.6))

        let toggleLabelColor: Color = isEnabled
            ? (isDark ? Color.purple.opacity(0.85) : .white)
            : (isDark ? Color.white.opacity(0.75) : .white.opacity(0.7))

        let cardBorderColor: Color = isEnabled
            ? (isDark ? Color.purple.opacity(0.4) : .white.opacity(0.35))
            : (isDark ? Color.purple.opacity(0.35) : .white.opacity(0.15))

        let cardContent = HStack(spacing: 10) {
            // Globe icon container
            pairGlobeIcon(
                isEnabled: isEnabled,
                borderColor: iconBorderColor,
                globeColor: globeColor
            )

            // Pair label
            Text("\(pair.source.englishName) → \(pair.target.englishName)")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(labelColor)
                .lineLimit(1)
                .minimumScaleFactor(0.8)

            Spacer(minLength: 4)

            // Toggle indicator
            pairToggleIndicator(
                isEnabled: isEnabled,
                toggleColor: toggleColor,
                labelColor: toggleLabelColor
            )
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 12)

        let cardBackground = RoundedRectangle(cornerRadius: 18, style: .continuous)
            .fill(cardFillColor(isEnabled: isEnabled, index: index))
            .overlay(
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .strokeBorder(cardBorderColor, lineWidth: 1)
            )

        return cardContent
            .background(cardBackground)
            .contentShape(Rectangle())
            .onTapGesture {
                withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                    togglePair(pair)
                }
            }
    }

    private func pairGlobeIcon(isEnabled: Bool, borderColor: Color, globeColor: Color) -> some View {
        ZStack {
            RoundedRectangle(cornerRadius: 10, style: .continuous)
                .fill(iconGradient(isEnabled: isEnabled))
                .overlay(
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .strokeBorder(borderColor, lineWidth: 1)
                )
                .frame(width: 36, height: 36)

            Image(systemName: "globe")
                .font(.system(size: 16, weight: .semibold))
                .foregroundStyle(globeColor)
        }
    }

    private func pairToggleIndicator(isEnabled: Bool, toggleColor: Color, labelColor: Color) -> some View {
        VStack(spacing: 2) {
            Image(systemName: isEnabled ? "checkmark.circle.fill" : "xmark.circle")
                .font(.system(size: 18))
                .foregroundStyle(toggleColor)

            Text(isEnabled ? "On" : "Off")
                .font(.system(size: 9, weight: .bold))
                .foregroundStyle(labelColor)
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

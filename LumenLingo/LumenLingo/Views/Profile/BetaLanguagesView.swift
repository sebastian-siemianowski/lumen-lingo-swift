import SwiftUI
import SwiftData

// MARK: - Beta Languages View

/// Beta Languages tab — groups all language pairs by source language.
/// Core pairs (always-on) are marked with a seal; experimental pairs are toggleable.
/// Pairs persist via SwiftData `EnabledBetaPair`.
struct BetaLanguagesView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Query private var enabledPairs: [EnabledBetaPair]

    /// Tracks which source-language groups are expanded
    @State private var expandedSources: Set<SupportedLanguage> = []
    @State private var hasInitialized = false

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    // Core pairs — always on, matching LanguagePair.builtIn
    private let corePairs: [LanguagePair] = LanguagePair.builtIn

    // MARK: - Data

    /// All pairs grouped by source, sorted: core/builtIn first within each group
    private var groupedPairs: [(source: SupportedLanguage, pairs: [LanguagePair])] {
        let allPairs = LanguagePair.allAvailable
        let grouped = Dictionary(grouping: allPairs) { $0.source }
        return SupportedLanguage.allCases.compactMap { lang in
            guard let pairs = grouped[lang], !pairs.isEmpty else { return nil }
            let sorted = pairs.sorted { a, b in
                let aCore = corePairs.contains(a)
                let bCore = corePairs.contains(b)
                if aCore != bCore { return aCore }
                let aBuilt = a.isBuiltIn
                let bBuilt = b.isBuiltIn
                if aBuilt != bBuilt { return aBuilt }
                return a.target.name(in: localization.sourceLanguage)
                    < b.target.name(in: localization.sourceLanguage)
            }
            return (source: lang, pairs: sorted)
        }
    }

    /// Sources that have at least one active (core or enabled) pair — auto-expand on first load
    private var sourcesWithActivePairs: Set<SupportedLanguage> {
        var result = Set<SupportedLanguage>()
        for pair in corePairs { result.insert(pair.source) }
        for ep in enabledPairs {
            if let lang = SupportedLanguage(rawValue: ep.sourceLanguage) {
                result.insert(lang)
            }
        }
        return result
    }

    private func isCorePair(_ pair: LanguagePair) -> Bool {
        corePairs.contains(pair)
    }

    private func isPairEnabled(_ pair: LanguagePair) -> Bool {
        enabledPairs.contains {
            $0.sourceLanguage == pair.source.rawValue && $0.targetLanguage == pair.target.rawValue
        }
    }

    // MARK: - Body

    var body: some View {
        VStack(spacing: 24) {
            headerSection
            betaDisclaimer

            // Language groups
            VStack(spacing: 16) {
                ForEach(groupedPairs, id: \.source) { group in
                    sourceLanguageSection(group.source, pairs: group.pairs)
                }
            }
        }
        .onAppear {
            if !hasInitialized {
                expandedSources = sourcesWithActivePairs
                hasInitialized = true
            }
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        HStack(spacing: 12) {
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
                Text(L.betaLanguages)
                    .font(.system(size: 17, weight: .bold))
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                Text(L.experimentalLanguagePairs)
                    .font(.system(size: 13))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
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
                Text(L.experimentalFeatures)
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(isDark ? Color(red: 0.996, green: 0.941, blue: 0.541) : .caribbeanInk)
                Text(L.betaLimitedContent)
                    .font(.system(size: 12))
                    .foregroundStyle(isDark ? Color(red: 0.996, green: 0.941, blue: 0.541).opacity(0.7) : .caribbeanPlum)
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

    // MARK: - Source Language Section (Collapsible)

    private func sourceLanguageSection(_ source: SupportedLanguage, pairs: [LanguagePair]) -> some View {
        let isExpanded = expandedSources.contains(source)
        let coreCount = pairs.filter { isCorePair($0) }.count
        let enabledCount = pairs.filter { isPairEnabled($0) }.count
        let activeCount = coreCount + enabledCount
        let hasActive = activeCount > 0

        return VStack(alignment: .leading, spacing: 0) {
            // Section header — tap to expand/collapse
            Button {
                withAnimation(.easeInOut(duration: 0.3)) {
                    if expandedSources.contains(source) {
                        expandedSources.remove(source)
                    } else {
                        expandedSources.insert(source)
                    }
                }
            } label: {
                HStack(spacing: 12) {
                    // Source flag
                    CountryFlagView(countryCode: source.countryCode, size: 22)

                    // Source language name
                    Text(source.name(in: localization.sourceLanguage))
                        .font(.system(size: 15, weight: .bold))
                        .foregroundStyle(isDark ? .white : .caribbeanInk)

                    Spacer()

                    // Active count pill
                    if hasActive {
                        Text("\(activeCount) \(L.active.lowercased())")
                            .font(.system(size: 10, weight: .bold, design: .rounded))
                            .foregroundStyle(isDark ? .green.opacity(0.9) : .white.opacity(0.85))
                            .padding(.horizontal, 8)
                            .padding(.vertical, 3)
                            .background(
                                Capsule()
                                    .fill(isDark ? .green.opacity(0.12) : .white.opacity(0.15))
                                    .overlay(
                                        Capsule()
                                            .strokeBorder(isDark ? .green.opacity(0.2) : .white.opacity(0.2), lineWidth: 0.5)
                                    )
                            )
                    }

                    // Total count
                    Text("\(pairs.count)")
                        .font(.system(size: 11, weight: .semibold, design: .rounded))
                        .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)

                    // Disclosure chevron
                    Image(systemName: "chevron.right")
                        .font(.system(size: 11, weight: .bold))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
                        .rotationEffect(.degrees(isExpanded ? 90 : 0))
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 14)
            }
            .buttonStyle(LumenPressStyle(weight: .soft))

            // Expanded content — height-clipped for smooth collapse
            VStack(spacing: 4) {
                ForEach(pairs, id: \.key) { pair in
                    targetCard(pair)
                }
            }
            .padding(.top, 6)
            .padding(.leading, 8)
            .frame(maxHeight: isExpanded ? .infinity : 0, alignment: .top)
            .clipped()
            .opacity(isExpanded ? 1 : 0)
        }
        .padding(.vertical, 2)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(
                    hasActive
                        ? (isDark ? Color.white.opacity(0.05) : Color.white.opacity(0.07))
                        : (isDark ? Color.white.opacity(0.025) : Color.white.opacity(0.04))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 16, style: .continuous)
                        .strokeBorder(
                            hasActive
                                ? (isDark ? Color.white.opacity(0.07) : .white.opacity(0.1))
                                : (isDark ? Color.white.opacity(0.03) : .white.opacity(0.06)),
                            lineWidth: 0.5
                        )
                )
        )
    }

    // MARK: - Target Card (Unified)

    private func targetCard(_ pair: LanguagePair) -> some View {
        let core = isCorePair(pair)
        let enabled = isPairEnabled(pair)
        let active = core || enabled

        let labelColor: Color = active
            ? (isDark ? .white.opacity(0.9) : .caribbeanInk)
            : (isDark ? .white.opacity(0.45) : .caribbeanMist)

        return HStack(spacing: 12) {
            // Target flag
            CountryFlagView(countryCode: pair.target.countryCode, size: 18)

            // Target name
            Text(pair.target.name(in: localization.sourceLanguage))
                .font(.system(size: 14, weight: active ? .semibold : .regular))
                .foregroundStyle(labelColor)

            // Core badge
            if core {
                Text(L.alwaysOn)
                    .font(.system(size: 9, weight: .bold))
                    .foregroundStyle(isDark ? .green.opacity(0.8) : .white.opacity(0.8))
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2)
                    .background(
                        Capsule()
                            .fill(isDark ? .green.opacity(0.12) : .white.opacity(0.12))
                    )
            } else if pair.isBuiltIn && !enabled {
                // Subtle "available" indicator for built-in pairs
                Circle()
                    .fill(isDark ? .cyan.opacity(0.3) : .white.opacity(0.3))
                    .frame(width: 5, height: 5)
            }

            Spacer(minLength: 4)

            // Status icon
            if core {
                Image(systemName: "checkmark.seal.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(isDark ? .green.opacity(0.8) : .white.opacity(0.85))
            } else {
                Image(systemName: enabled ? "checkmark.circle.fill" : "circle")
                    .font(.system(size: 18))
                    .foregroundStyle(
                        enabled
                            ? (isDark ? .purple.opacity(0.9) : .white.opacity(0.9))
                            : (isDark ? .white.opacity(0.15) : .white.opacity(0.25))
                    )
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(
            RoundedRectangle(cornerRadius: 10, style: .continuous)
                .fill(
                    active
                        ? (isDark ? Color.white.opacity(0.04) : Color.white.opacity(0.07))
                        : Color.clear
                )
        )
        .contentShape(Rectangle())
        .onTapGesture {
            if !core {
                withAnimation(.spring(response: 0.3, dampingFraction: 0.75)) {
                    togglePair(pair)
                }
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

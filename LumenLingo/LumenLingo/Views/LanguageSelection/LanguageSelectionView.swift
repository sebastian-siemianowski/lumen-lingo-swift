import SwiftUI
import SwiftData

// MARK: - SwiftUI-Drawn Country Flag

/// Draws simplified country flags using SwiftUI shapes and colors.
/// Avoids emoji rendering entirely — works on all simulators and devices
/// regardless of whether the Apple Color Emoji font includes flag glyphs.
struct CountryFlagView: View {
    let countryCode: String
    var size: CGFloat = 24

    var body: some View {
        flagContent
            .frame(width: size * 1.5, height: size)
            .clipShape(RoundedRectangle(cornerRadius: size * 0.15))
            .overlay(
                RoundedRectangle(cornerRadius: size * 0.15)
                    .strokeBorder(.white.opacity(0.2), lineWidth: 0.5)
            )
    }

    @ViewBuilder
    private var flagContent: some View {
        switch countryCode {
        case "GB": gbFlag
        case "ES": triStripe(.red, Color(hex: "#FFC400"), .red, ratios: [1, 2, 1])
        case "FR": vStripe(Color(hex: "#002395"), .white, Color(hex: "#ED2939"))
        case "DE": triStripe(.black, Color(hex: "#DD0000"), Color(hex: "#FFCC00"))
        case "PL": biStripe(.white, Color(hex: "#DC143C"))
        case "SA": saFlag
        case "CN": cnFlag
        case "JP": jpFlag
        case "UA": biStripe(Color(hex: "#005BBB"), Color(hex: "#FFD500"))
        default: fallbackFlag
        }
    }

    // MARK: - Flag Patterns

    private func biStripe(_ top: Color, _ bottom: Color) -> some View {
        VStack(spacing: 0) {
            top
            bottom
        }
    }

    private func triStripe(_ c1: Color, _ c2: Color, _ c3: Color, ratios: [CGFloat] = [1, 1, 1]) -> some View {
        GeometryReader { geo in
            let total = ratios.reduce(0, +)
            VStack(spacing: 0) {
                c1.frame(height: geo.size.height * ratios[0] / total)
                c2.frame(height: geo.size.height * ratios[1] / total)
                c3.frame(height: geo.size.height * ratios[2] / total)
            }
        }
    }

    private func vStripe(_ c1: Color, _ c2: Color, _ c3: Color) -> some View {
        HStack(spacing: 0) {
            c1
            c2
            c3
        }
    }

    // MARK: - GB — Simplified Union Jack

    private var gbFlag: some View {
        ZStack {
            Color(hex: "#012169")
            diagonalStripes(color: .white, width: 0.14)
            diagonalStripes(color: Color(hex: "#C8102E"), width: 0.06)
            cross(color: .white, widthRatio: 0.22)
            cross(color: Color(hex: "#C8102E"), widthRatio: 0.13)
        }
    }

    private func cross(color: Color, widthRatio: CGFloat) -> some View {
        GeometryReader { geo in
            let w = geo.size.width
            let h = geo.size.height
            Path { p in
                // Horizontal bar
                p.addRect(CGRect(x: 0, y: h * (0.5 - widthRatio / 2),
                                 width: w, height: h * widthRatio))
                // Vertical bar
                let vw = w * widthRatio * (h / w)
                p.addRect(CGRect(x: (w - vw) / 2, y: 0,
                                 width: vw, height: h))
            }
            .fill(color)
        }
    }

    private func diagonalStripes(color: Color, width: CGFloat) -> some View {
        GeometryReader { geo in
            let w = geo.size.width
            let h = geo.size.height
            let t = min(w, h) * width
            Path { p in
                // Top-left to bottom-right
                p.move(to: CGPoint(x: -t, y: 0))
                p.addLine(to: CGPoint(x: t, y: 0))
                p.addLine(to: CGPoint(x: w + t, y: h))
                p.addLine(to: CGPoint(x: w - t, y: h))
                p.closeSubpath()
                // Top-right to bottom-left
                p.move(to: CGPoint(x: w + t, y: 0))
                p.addLine(to: CGPoint(x: w - t, y: 0))
                p.addLine(to: CGPoint(x: -t, y: h))
                p.addLine(to: CGPoint(x: t, y: h))
                p.closeSubpath()
            }
            .fill(color)
        }
    }

    // MARK: - SA — Green with white symbol

    private var saFlag: some View {
        ZStack {
            Color(hex: "#006C35")
            HStack(spacing: 2) {
                Image(systemName: "line.diagonal")
                    .font(.system(size: size * 0.25, weight: .bold))
                    .rotationEffect(.degrees(180))
                Image(systemName: "character")
                    .font(.system(size: size * 0.3, weight: .medium))
            }
            .foregroundStyle(.white)
        }
    }

    // MARK: - CN — Red with yellow star

    private var cnFlag: some View {
        ZStack {
            Color(hex: "#DE2910")
            GeometryReader { geo in
                let starSize = min(geo.size.width, geo.size.height) * 0.35
                Image(systemName: "star.fill")
                    .font(.system(size: starSize))
                    .foregroundStyle(Color(hex: "#FFDE00"))
                    .position(x: geo.size.width * 0.28, y: geo.size.height * 0.38)
            }
        }
    }

    // MARK: - JP — White with red circle

    private var jpFlag: some View {
        ZStack {
            Color.white
            Circle()
                .fill(Color(hex: "#BC002D"))
                .padding(size * 0.2)
        }
    }

    // MARK: - Fallback — Shows country code text

    private var fallbackFlag: some View {
        ZStack {
            Color.gray.opacity(0.3)
            Text(countryCode)
                .font(.system(size: size * 0.35, weight: .bold, design: .rounded))
                .foregroundStyle(.white)
        }
    }
}

// MARK: - Language Selection View

/// Full-screen language pair picker.
/// Source language on the left, target on the right, with beta-pair toggle.
struct LanguageSelectionView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    @Query private var languagePrefs: [LanguagePreference]
    @Query private var betaPairs: [EnabledBetaPair]

    @State private var selectedSource: SupportedLanguage = .english
    @State private var selectedTarget: SupportedLanguage = .spanish
    @State private var showBeta = false

    private var currentPref: LanguagePreference? { languagePrefs.first }
    private var isDark: Bool { colorScheme == .dark }

    /// Only show languages that appear as a source in at least one built-in pair.
    private var availableSources: [SupportedLanguage] {
        SupportedLanguage.allCases.filter { lang in
            LanguagePair.builtIn.contains { $0.source == lang }
        }
    }

    /// Targets where the pair (either direction) is built-in – always visible.
    private var builtInTargets: [SupportedLanguage] {
        SupportedLanguage.allCases.filter { target in
            guard target != selectedSource else { return false }
            let pair = LanguagePair(source: selectedSource, target: target)
            let pairReverse = LanguagePair(source: target, target: selectedSource)
            return pair.isBuiltIn || pairReverse.isBuiltIn
        }
    }

    /// Targets that are NOT built-in but have content or are explicitly enabled.
    private var betaTargets: [SupportedLanguage] {
        SupportedLanguage.allCases.filter { target in
            guard target != selectedSource else { return false }
            let pair = LanguagePair(source: selectedSource, target: target)
            let pairReverse = LanguagePair(source: target, target: selectedSource)
            if pair.isBuiltIn || pairReverse.isBuiltIn { return false }
            let hasContent = Bundle.main.url(forResource: "flashcards_\(pair.key)", withExtension: "json") != nil
                || Bundle.main.url(forResource: "grammar_\(pair.key)", withExtension: "json") != nil
                || Bundle.main.url(forResource: "flashcards_\(pair.key)", withExtension: "json", subdirectory: "Content/\(pair.key)") != nil
            if hasContent { return true }
            return betaPairs.contains {
                $0.sourceLanguage == selectedSource.rawValue && $0.targetLanguage == target.rawValue
            }
        }
    }



    var body: some View {
        NavigationStack {
            ZStack {
                // Background
                Group {
                    if isDark {
                        LinearGradient(
                            colors: [Color(hex: "#0a0a1a"), Color(hex: "#0d1530"), Color(hex: "#0a0a1a")],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    } else {
                        LinearGradient(
                            colors: [Color(hex: "#C494FC"), Color(hex: "#F472B6"), Color(hex: "#FB923C")],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    }
                }
                .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: 28) {
                        headerSection
                        sourceLanguageSection
                        directionArrow
                        targetLanguageSection
                        betaToggleSection
                        if showBeta {
                            betaTargetSection
                                .transition(.opacity.combined(with: .move(edge: .top)))
                        }
                        confirmButton
                        Spacer(minLength: 80)
                    }
                    .animation(.easeInOut(duration: 0.3), value: showBeta)
                    .padding(.horizontal, 16)
                    .padding(.top, 12)
                }
            }
            .navigationTitle(L.languages)
            .navigationBarTitleDisplayMode(.inline)
            .toolbarColorScheme(isDark ? .dark : .light, for: .navigationBar)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button(L.cancel) { dismiss() }
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                }
            }
            .onAppear { loadCurrent() }
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        VStack(spacing: 8) {
            Image(systemName: "globe")
                .font(.system(size: 36))
                .foregroundStyle(
                    LinearGradient(
                        colors: [.cyan, .purple],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
            Text(L.chooseYourLanguages)
                .font(.title3.bold())
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#6366f1"), Color(hex: "#a855f7")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
            Text(L.selectWhatYouKnow)
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanPlum)
        }
        .padding(.top, 8)
    }

    // MARK: - Source Language

    private var sourceLanguageSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label(L.iSpeak, systemImage: "person.wave.2.fill")
                .font(.headline)
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#6366f1"), Color(hex: "#8b5cf6")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                ForEach(availableSources, id: \.self) { lang in
                    languageCard(lang, isSelected: lang == selectedSource) {
                        withAnimation(.spring(response: 0.35)) {
                            selectedSource = lang
                            // Reset target if same as source
                            if selectedTarget == lang {
                                selectedTarget = SupportedLanguage.allCases.first { $0 != lang } ?? .spanish
                            }
                        }
                    }
                }
            }
        }
        .padding(18)
        .background(glassCard)
    }

    // MARK: - Arrow

    private var directionArrow: some View {
        Image(systemName: "arrow.down.circle.fill")
            .font(.system(size: 32))
            .foregroundStyle(
                LinearGradient(
                    colors: [.cyan, .purple],
                    startPoint: .top,
                    endPoint: .bottom
                )
            )
            .shadow(color: .cyan.opacity(0.3), radius: 8)
    }

    // MARK: - Target Language (Built-in)

    private var targetLanguageSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label(L.imLearning, systemImage: "book.fill")
                .font(.headline)
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#a855f7"), Color(hex: "#d946ef")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            if builtInTargets.isEmpty {
                Text(L.noLanguagesAvailable)
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    .frame(maxWidth: .infinity, alignment: .center)
                    .padding(20)
            } else {
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                    ForEach(builtInTargets, id: \.self) { lang in
                        languageCard(lang, isSelected: lang == selectedTarget, translatedIn: selectedSource) {
                            withAnimation(.spring(response: 0.35)) {
                                selectedTarget = lang
                            }
                        }
                    }
                }
            }
        }
        .padding(18)
        .background(glassCard)
    }

    // MARK: - Beta Target Languages

    private var betaTargetSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label(L.betaLanguagePairs, systemImage: "flask.fill")
                .font(.headline)
                .foregroundStyle(
                    LinearGradient(
                        colors: [.orange, Color(hex: "#f59e0b")],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )

            if betaTargets.isEmpty {
                Text(L.noLanguagesAvailable)
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    .frame(maxWidth: .infinity, alignment: .center)
                    .padding(20)
            } else {
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                    ForEach(betaTargets, id: \.self) { lang in
                        languageCard(lang, isSelected: lang == selectedTarget, translatedIn: selectedSource) {
                            withAnimation(.spring(response: 0.35)) {
                                selectedTarget = lang
                            }
                        }
                    }
                }
            }
        }
        .padding(18)
        .background(glassCard)
    }

    // MARK: - Beta Toggle

    private var betaToggleSection: some View {
        Toggle(isOn: $showBeta) {
            HStack(spacing: 8) {
                Image(systemName: "flask.fill")
                    .foregroundStyle(.orange)
                VStack(alignment: .leading, spacing: 2) {
                    Text(L.betaLanguagePairs)
                        .font(.subheadline.bold())
                        .foregroundStyle(isDark ? .white : .caribbeanInk)
                    Text(L.showExperimentalPairs)
                        .font(.caption2)
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                }
            }
        }
        .toggleStyle(SwitchToggleStyle(tint: .cyan))
        .padding(16)
        .background(glassCard)
    }

    // MARK: - Confirm

    private var confirmButton: some View {
        Button {
            savePair()
            dismiss()
        } label: {
            HStack(spacing: 8) {
                Image(systemName: "checkmark.circle.fill")
                Text(L.confirm)
                    .fontWeight(.semibold)
                CountryFlagView(countryCode: selectedSource.countryCode, size: 16)
                Image(systemName: "arrow.right")
                    .font(.caption.bold())
                CountryFlagView(countryCode: selectedTarget.countryCode, size: 16)
            }
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
            )
            .shadow(color: Color(hex: "#764ba2").opacity(0.4), radius: 12, y: 4)
        }
        .padding(.top, 8)
    }

    // MARK: - Language Card

    private func languageCard(_ lang: SupportedLanguage, isSelected: Bool, translatedIn contextLang: SupportedLanguage? = nil, action: @escaping () -> Void) -> some View {
        let label = contextLang.map { lang.name(in: $0) } ?? lang.displayName
        return Button(action: action) {
            HStack(spacing: 8) {
                CountryFlagView(countryCode: lang.countryCode, size: 18)
                Text(label)
                    .font(.subheadline.bold())
                    .foregroundStyle(isSelected ? .white : (colorScheme == .dark ? .white.opacity(0.7) : .caribbeanInk))
                    .lineLimit(1)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(12)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(isSelected
                        ? AnyShapeStyle(
                            LinearGradient(
                                colors: [Color(hex: "#667eea").opacity(0.5), Color(hex: "#764ba2").opacity(0.4)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        : AnyShapeStyle(.white.opacity(0.06))
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 14)
                            .strokeBorder(
                                isSelected ? Color(hex: "#667eea").opacity(0.6) : .white.opacity(0.06),
                                lineWidth: isSelected ? 1.5 : 1
                            )
                    )
            )
            .scaleEffect(isSelected ? 1.02 : 1.0)
        }
        .buttonStyle(LumenCardPressStyle(accentColor: isSelected ? .purple : .white))
    }

    // MARK: - Helpers

    private var glassCard: some View {
        RoundedRectangle(cornerRadius: 22)
            .fill(.ultraThinMaterial)
            .overlay(
                RoundedRectangle(cornerRadius: 22)
                    .strokeBorder(.white.opacity(colorScheme == .dark ? 0.08 : 0.15), lineWidth: 1)
            )
            .shadow(color: .black.opacity(0.1), radius: 15, y: 5)
    }

    private func loadCurrent() {
        if let pref = currentPref {
            selectedSource = pref.sourceLanguageEnum
            selectedTarget = pref.targetLanguageEnum
        }
    }

    private func savePair() {
        if let pref = currentPref {
            pref.sourceLanguage = selectedSource.rawValue
            pref.targetLanguage = selectedTarget.rawValue
        } else {
            let pref = LanguagePreference(source: selectedSource, target: selectedTarget)
            modelContext.insert(pref)
        }
    }
}

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

/// Premium language pair picker — Apple Fitness+/Music-inspired.
/// Hero preview card, horizontal source chips, rich target grid, floating CTA.
struct LanguageSelectionView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.modelContext) private var modelContext
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    @Query private var languagePrefs: [LanguagePreference]

    @State private var selectedSource: SupportedLanguage = .english
    @State private var selectedTarget: SupportedLanguage = .spanish

    private var currentPref: LanguagePreference? { languagePrefs.first }

    private var availableSources: [SupportedLanguage] {
        SupportedLanguage.allCases.filter { lang in
            LanguagePair.withContent.contains { $0.source == lang }
        }
    }

    private var availableTargets: [SupportedLanguage] {
        SupportedLanguage.allCases.filter { target in
            guard target != selectedSource else { return false }
            return LanguagePair(source: selectedSource, target: target).hasContent
        }
    }

    private var hasChanged: Bool {
        guard let pref = currentPref else { return true }
        return pref.sourceLanguageEnum != selectedSource || pref.targetLanguageEnum != selectedTarget
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 28) {
                    heroCard
                        .padding(.top, 8)

                    sourceStrip

                    targetGrid
                }
                .padding(.bottom, 100)
            }
            .background(Color(.systemGroupedBackground))
            .safeAreaInset(edge: .bottom) {
                confirmBar
            }
            .navigationTitle(L.languages)
            .navigationBarTitleDisplayMode(.large)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button(L.cancel) { dismiss() }
                }
            }
            .onAppear { loadCurrent() }
            .sensoryFeedback(.selection, trigger: selectedSource)
            .sensoryFeedback(.selection, trigger: selectedTarget)
        }
    }

    // MARK: - Hero Card

    private var heroCard: some View {
        VStack(spacing: 16) {
            HStack(spacing: 24) {
                flagBadge(selectedSource.countryCode, size: 56)

                Image(systemName: "arrow.right")
                    .font(.title3.weight(.medium))
                    .foregroundStyle(
                        LinearGradient(colors: [.indigo, .purple],
                                       startPoint: .leading, endPoint: .trailing)
                    )

                flagBadge(selectedTarget.countryCode, size: 56)
            }

            VStack(spacing: 4) {
                Text("\(selectedSource.displayName)  →  \(selectedTarget.name(in: selectedSource))")
                    .font(.title3.weight(.semibold))

                Text("\(availableTargets.count) \(L.languagesAvailable)")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }
        }
        .padding(24)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(.regularMaterial)
                .shadow(color: .black.opacity(0.06), radius: 16, y: 6)
        )
        .padding(.horizontal)
        .animation(.spring(response: 0.5, dampingFraction: 0.8), value: selectedSource)
        .animation(.spring(response: 0.5, dampingFraction: 0.8), value: selectedTarget)
    }

    private func flagBadge(_ code: String, size: CGFloat) -> some View {
        CountryFlagView(countryCode: code, size: size * 0.5)
            .frame(width: size, height: size)
            .background(
                Circle()
                    .fill(.ultraThinMaterial)
                    .shadow(color: .black.opacity(0.06), radius: 8, y: 3)
            )
            .overlay(Circle().strokeBorder(.quaternary, lineWidth: 1))
    }

    // MARK: - Source Strip

    private var sourceStrip: some View {
        VStack(alignment: .leading, spacing: 14) {
            sectionLabel(L.iSpeak, icon: "person.wave.2.fill")
                .padding(.horizontal)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 16) {
                    ForEach(availableSources, id: \.self) { lang in
                        sourceChip(lang)
                    }
                }
                .padding(.horizontal)
            }
        }
    }

    private func sourceChip(_ lang: SupportedLanguage) -> some View {
        let isSelected = lang == selectedSource
        return Button {
            withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                selectedSource = lang
                if selectedTarget == lang || !LanguagePair(source: lang, target: selectedTarget).hasContent {
                    selectedTarget = availableTargetsFor(lang).first ?? .spanish
                }
            }
        } label: {
            VStack(spacing: 8) {
                CountryFlagView(countryCode: lang.countryCode, size: 24)
                    .frame(width: 52, height: 52)
                    .background(
                        Circle()
                            .fill(isSelected
                                  ? AnyShapeStyle(LinearGradient(
                                      colors: [.indigo.opacity(0.12), .purple.opacity(0.12)],
                                      startPoint: .top, endPoint: .bottom))
                                  : AnyShapeStyle(Color(.tertiarySystemGroupedBackground)))
                    )
                    .overlay(
                        Circle()
                            .strokeBorder(
                                isSelected
                                    ? AnyShapeStyle(LinearGradient(
                                        colors: [.indigo, .purple],
                                        startPoint: .topLeading, endPoint: .bottomTrailing))
                                    : AnyShapeStyle(Color.clear),
                                lineWidth: 2.5
                            )
                    )
                    .shadow(color: isSelected ? .indigo.opacity(0.25) : .clear, radius: 8, y: 3)

                Text(lang.displayName)
                    .font(.caption.weight(isSelected ? .semibold : .medium))
                    .foregroundStyle(isSelected ? .primary : .secondary)
            }
        }
        .buttonStyle(SelectionButtonStyle())
    }

    // MARK: - Target Grid

    private var targetGrid: some View {
        VStack(alignment: .leading, spacing: 14) {
            sectionLabel(L.imLearning, icon: "book.fill")
                .padding(.horizontal)

            if availableTargets.isEmpty {
                ContentUnavailableView {
                    Label(L.noLanguagesAvailable, systemImage: "globe.desk")
                }
                .padding(.vertical, 20)
            } else {
                LazyVGrid(
                    columns: [GridItem(.flexible(), spacing: 12), GridItem(.flexible(), spacing: 12)],
                    spacing: 12
                ) {
                    ForEach(availableTargets, id: \.self) { lang in
                        targetCard(lang)
                    }
                }
                .padding(.horizontal)
            }
        }
        .animation(.spring(response: 0.45, dampingFraction: 0.85), value: selectedSource)
    }

    private func targetCard(_ lang: SupportedLanguage) -> some View {
        let isSelected = lang == selectedTarget
        return Button {
            withAnimation(.spring(response: 0.35, dampingFraction: 0.75)) {
                selectedTarget = lang
            }
        } label: {
            HStack(spacing: 10) {
                CountryFlagView(countryCode: lang.countryCode, size: 22)

                Text(lang.name(in: selectedSource))
                    .font(.subheadline.weight(isSelected ? .semibold : .medium))
                    .foregroundStyle(isSelected ? .white : .primary)
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)

                Spacer(minLength: 0)

                if isSelected {
                    Image(systemName: "checkmark")
                        .font(.subheadline.weight(.bold))
                        .foregroundStyle(.white.opacity(0.9))
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 13)
            .background(
                RoundedRectangle(cornerRadius: 14)
                    .fill(
                        isSelected
                            ? AnyShapeStyle(LinearGradient(
                                colors: [.purple, .indigo],
                                startPoint: .topLeading, endPoint: .bottomTrailing))
                            : AnyShapeStyle(Color(.secondarySystemGroupedBackground))
                    )
                    .shadow(
                        color: isSelected ? .purple.opacity(0.25) : .black.opacity(0.03),
                        radius: isSelected ? 10 : 4,
                        y: isSelected ? 4 : 2
                    )
            )
        }
        .buttonStyle(SelectionButtonStyle())
    }

    // MARK: - Confirm Bar

    private var confirmBar: some View {
        Button {
            savePair()
            dismiss()
        } label: {
            HStack(spacing: 10) {
                CountryFlagView(countryCode: selectedSource.countryCode, size: 18)

                Image(systemName: "arrow.right")
                    .font(.caption2.weight(.bold))
                    .foregroundStyle(.white.opacity(0.6))

                CountryFlagView(countryCode: selectedTarget.countryCode, size: 18)

                Spacer()

                Text(hasChanged ? L.confirm : L.done)
                    .font(.headline)

                Image(systemName: "checkmark.circle.fill")
                    .font(.headline)
            }
            .foregroundStyle(.white)
            .padding(.horizontal, 20)
            .padding(.vertical, 15)
            .frame(maxWidth: .infinity)
            .background(
                RoundedRectangle(cornerRadius: 16)
                    .fill(
                        LinearGradient(
                            colors: hasChanged ? [.indigo, .purple] : [Color(.systemGray2), Color(.systemGray3)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .shadow(color: hasChanged ? .indigo.opacity(0.35) : .clear, radius: 16, y: 6)
            )
        }
        .buttonStyle(SelectionButtonStyle())
        .disabled(!hasChanged)
        .padding(.horizontal, 20)
        .padding(.vertical, 12)
        .background(
            Rectangle()
                .fill(.ultraThinMaterial)
                .ignoresSafeArea()
        )
        .animation(.spring(response: 0.4, dampingFraction: 0.8), value: hasChanged)
        .animation(.spring(response: 0.4, dampingFraction: 0.8), value: selectedSource)
        .animation(.spring(response: 0.4, dampingFraction: 0.8), value: selectedTarget)
    }

    // MARK: - Shared Components

    private func sectionLabel(_ title: String, icon: String) -> some View {
        Label {
            Text(title)
                .font(.headline)
        } icon: {
            Image(systemName: icon)
                .foregroundStyle(
                    LinearGradient(colors: [.indigo, .purple],
                                   startPoint: .leading, endPoint: .trailing)
                )
        }
    }

    // MARK: - Helpers

    private func availableTargetsFor(_ source: SupportedLanguage) -> [SupportedLanguage] {
        SupportedLanguage.allCases.filter { target in
            guard target != source else { return false }
            return LanguagePair(source: source, target: target).hasContent
        }
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

// MARK: - Selection Button Style

private struct SelectionButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.96 : 1)
            .opacity(configuration.isPressed ? 0.85 : 1)
            .animation(.spring(response: 0.3, dampingFraction: 0.7), value: configuration.isPressed)
    }
}

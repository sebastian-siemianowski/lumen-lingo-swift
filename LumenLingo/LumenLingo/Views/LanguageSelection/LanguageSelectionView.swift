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

/// Premium language pair picker.
/// Cinematic hero with animated gradient orb, horizontal source carousel,
/// rich target cards with dual-label typography, floating glass CTA.
struct LanguageSelectionView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }

    @Query private var languagePrefs: [LanguagePreference]

    @State private var selectedSource: SupportedLanguage = .english
    @State private var selectedTarget: SupportedLanguage = .spanish
    @State private var appeared = false
    @State private var orbPhase: CGFloat = 0

    private var currentPref: LanguagePreference? { languagePrefs.first }
    private var isDark: Bool { colorScheme == .dark }

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
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 0) {
                    heroSection
                        .padding(.top, 4)

                    sourceSection
                        .padding(.top, 32)

                    connectionRail
                        .padding(.vertical, 20)

                    targetSection

                    Spacer(minLength: 120)
                }
            }
            .background(pageBackground)
            .safeAreaInset(edge: .bottom) { floatingCTA }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button {
                        dismiss()
                    } label: {
                        ZStack {
                            Circle()
                                .fill(isDark ? Color(hex: "#1a1a2e") : .white)
                                .frame(width: 36, height: 36)
                                .overlay(
                                    Circle()
                                        .strokeBorder(
                                            LinearGradient(
                                                colors: [.indigo.opacity(0.3), .purple.opacity(0.2)],
                                                startPoint: .top, endPoint: .bottom
                                            ),
                                            lineWidth: 1
                                        )
                                )
                                .shadow(color: .indigo.opacity(isDark ? 0.15 : 0.06), radius: 8, y: 2)

                            Image(systemName: "xmark")
                                .font(.system(size: 13, weight: .semibold))
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: [.indigo, .purple],
                                        startPoint: .top, endPoint: .bottom
                                    )
                                )
                        }
                    }
                    .buttonStyle(SiriGlowButtonStyle())
                }
            }
            .onAppear {
                loadCurrent()
                withAnimation(.easeOut(duration: 0.7).delay(0.15)) {
                    appeared = true
                }
                withAnimation(.easeInOut(duration: 6).repeatForever(autoreverses: true)) {
                    orbPhase = 1
                }
            }
            .sensoryFeedback(.selection, trigger: selectedSource)
            .sensoryFeedback(.selection, trigger: selectedTarget)
        }
    }

    // MARK: - Page Background

    private var pageBackground: some View {
        ZStack {
            if isDark {
                Color(hex: "#09090F")
            } else {
                LinearGradient(
                    colors: [Color(hex: "#F8F6FF"), Color(hex: "#FFF8FA"), Color(hex: "#F5F3FF")],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            }

            // Ambient orb — shifts subtly with breathing.
            // Uses a wide soft gradient instead of .blur() for GPU efficiency.
            Ellipse()
                .fill(
                    RadialGradient(
                        colors: isDark
                            ? [Color.indigo.opacity(0.07), Color.indigo.opacity(0.03), .clear]
                            : [Color.indigo.opacity(0.05), Color.indigo.opacity(0.02), .clear],
                        center: .center,
                        startRadius: 5,
                        endRadius: 340
                    )
                )
                .frame(width: 650, height: 520)
                .offset(x: orbPhase * 30 - 15, y: -80 + orbPhase * 20)
        }
        .ignoresSafeArea()
    }

    // MARK: - Hero Section

    private var heroSection: some View {
        VStack(spacing: 20) {
            // Flags with glowing orb connector
            ZStack {
                // Glow trail between flags
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: [
                                .indigo.opacity(isDark ? 0.2 : 0.1),
                                .purple.opacity(isDark ? 0.15 : 0.08),
                                .indigo.opacity(isDark ? 0.2 : 0.1)
                            ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: 140, height: 4)
                    .blur(radius: 6)

                HStack(spacing: 0) {
                    heroFlag(selectedSource.countryCode)

                    Spacer().frame(width: 60)

                    // Animated center orb
                    ZStack {
                        Circle()
                            .fill(isDark ? Color(hex: "#1a1a2e") : .white)
                            .frame(width: 36, height: 36)
                            .overlay(
                                Circle()
                                    .strokeBorder(
                                        LinearGradient(
                                            colors: [.indigo.opacity(0.3), .purple.opacity(0.2)],
                                            startPoint: .top, endPoint: .bottom
                                        ),
                                        lineWidth: 1
                                    )
                            )
                            .shadow(color: .indigo.opacity(isDark ? 0.15 : 0.06), radius: 8, y: 2)
                            .scaleEffect(0.9 + orbPhase * 0.2)

                        Image(systemName: "arrow.right")
                            .font(.system(size: 13, weight: .semibold))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [.indigo, .purple],
                                    startPoint: .top, endPoint: .bottom
                                )
                            )
                    }

                    Spacer().frame(width: 60)

                    heroFlag(selectedTarget.countryCode)
                }
            }
            .frame(height: 72)

            // Text label
            VStack(spacing: 6) {
                (Text(selectedSource.displayName)
                    .font(.title2.weight(.bold)) +
                Text("  \u{2192}  ")
                    .font(.title2.weight(.light))
                    .foregroundColor(.secondary) +
                Text(selectedTarget.name(in: selectedSource))
                    .font(.title2.weight(.bold)))
                .contentTransition(.interpolate)

                Text("\(availableTargets.count) \(L.languagesAvailable)")
                    .font(.footnote.weight(.medium))
                    .foregroundStyle(.secondary)
                    .contentTransition(.numericText())
                    .padding(.horizontal, 14)
                    .padding(.vertical, 5)
                    .background(
                        Capsule()
                            .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                    )
            }
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 24)
        .frame(maxWidth: .infinity)
        .background(heroBackground)
        .padding(.horizontal)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 30)
        .animation(.spring(response: 0.5, dampingFraction: 0.8), value: selectedSource)
        .animation(.spring(response: 0.5, dampingFraction: 0.8), value: selectedTarget)
    }

    private func heroFlag(_ code: String) -> some View {
        ZStack {
            // Outer glow
            Circle()
                .fill(
                    RadialGradient(
                        colors: [.indigo.opacity(isDark ? 0.15 : 0.08), .clear],
                        center: .center,
                        startRadius: 20,
                        endRadius: 40
                    )
                )
                .frame(width: 80, height: 80)

            // Flag circle
            CountryFlagView(countryCode: code, size: 36)
                .frame(width: 64, height: 64)
                .background(
                    Circle()
                        .fill(isDark ? Color(hex: "#1a1a2e") : .white)
                )
                .overlay(
                    Circle()
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    .indigo.opacity(isDark ? 0.6 : 0.3),
                                    .purple.opacity(isDark ? 0.4 : 0.2),
                                    .indigo.opacity(isDark ? 0.6 : 0.3)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 2
                        )
                )
                .shadow(color: .indigo.opacity(isDark ? 0.3 : 0.12), radius: 12, y: 4)
        }
    }

    private var heroBackground: some View {
        RoundedRectangle(cornerRadius: 24)
            .fill(isDark ? .ultraThinMaterial : .regularMaterial)
            .overlay(
                RoundedRectangle(cornerRadius: 24)
                    .strokeBorder(
                        LinearGradient(
                            colors: isDark
                                ? [.white.opacity(0.08), .white.opacity(0.02)]
                                : [.white.opacity(0.9), .white.opacity(0.3)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        lineWidth: 1
                    )
            )
            .shadow(color: isDark ? .indigo.opacity(0.08) : .black.opacity(0.04), radius: 24, y: 10)
    }

    // MARK: - Source Section

    private var sourceSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            sectionHeader(L.iSpeak, icon: "person.wave.2.fill")
                .padding(.horizontal, 20)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 12) {
                    ForEach(availableSources, id: \.self) { lang in
                        sourceCard(lang, index: 0)
                    }
                }
                .scrollTargetLayout()
                .padding(.horizontal, 20)
            }
            .scrollTargetBehavior(.viewAligned)
        }
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 20)
    }

    @ViewBuilder
    private func sourceCard(_ lang: SupportedLanguage, index: Int) -> some View {
        let isSelected = lang == selectedSource

        Button {
            withAnimation(.spring(response: 0.45, dampingFraction: 0.75)) {
                selectedSource = lang
                if selectedTarget == lang || !LanguagePair(source: lang, target: selectedTarget).hasContent {
                    selectedTarget = availableTargetsFor(lang).first ?? .spanish
                }
            }
        } label: {
            VStack(spacing: 10) {
                // Flag badge
                CountryFlagView(countryCode: lang.countryCode, size: 26)
                    .frame(width: 52, height: 52)
                    .background(sourceCardCircle(isSelected: isSelected))
                    .overlay(
                        Circle()
                            .strokeBorder(
                                isSelected
                                    ? Color.white.opacity(0.3)
                                    : (isDark ? Color.white.opacity(0.08) : Color.black.opacity(0.06)),
                                lineWidth: 1.5
                            )
                    )
                    .shadow(
                        color: isSelected ? .indigo.opacity(0.35) : .black.opacity(isDark ? 0.15 : 0.04),
                        radius: isSelected ? 10 : 4,
                        y: isSelected ? 3 : 2
                    )

                // Name
                Text(lang.displayName)
                    .font(.caption.weight(isSelected ? .bold : .medium))
                    .foregroundStyle(isSelected ? .primary : .secondary)
                    .lineLimit(1)
            }
            .frame(width: 72)
            .padding(.vertical, 8)
        }
        .buttonStyle(LumenCardPressStyle(accentColor: isSelected ? .indigo : .clear))
    }

    @ViewBuilder
    private func sourceCardCircle(isSelected: Bool) -> some View {
        if isSelected {
            Circle()
                .fill(
                    LinearGradient(
                        colors: [.indigo, .purple],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
        } else {
            Circle()
                .fill(isDark ? Color.white.opacity(0.06) : Color.white)
        }
    }

    // MARK: - Connection Rail

    private var connectionRail: some View {
        HStack(spacing: 8) {
            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [.clear, isDark ? .indigo.opacity(0.2) : .indigo.opacity(0.12)],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(height: 1)

            ZStack {
                Circle()
                    .fill(isDark ? Color(hex: "#1a1a2e") : .white)
                    .frame(width: 36, height: 36)
                    .overlay(
                        Circle()
                            .strokeBorder(
                                LinearGradient(
                                    colors: [.indigo.opacity(0.3), .purple.opacity(0.2)],
                                    startPoint: .top, endPoint: .bottom
                                ),
                                lineWidth: 1
                            )
                    )
                    .shadow(color: .indigo.opacity(isDark ? 0.15 : 0.06), radius: 8, y: 2)

                Image(systemName: "arrow.down")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.indigo, .purple],
                            startPoint: .top, endPoint: .bottom
                        )
                    )
            }

            Rectangle()
                .fill(
                    LinearGradient(
                        colors: [isDark ? .purple.opacity(0.2) : .purple.opacity(0.12), .clear],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .frame(height: 1)
        }
        .padding(.horizontal, 40)
        .opacity(appeared ? 1 : 0)
    }

    // MARK: - Target Section

    private var targetSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            sectionHeader(L.imLearning, icon: "book.fill")
                .padding(.horizontal, 20)

            if availableTargets.isEmpty {
                VStack(spacing: 12) {
                    Image(systemName: "globe.desk")
                        .font(.system(size: 36))
                        .foregroundStyle(.quaternary)
                    Text(L.noLanguagesAvailable)
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 40)
            } else {
                LazyVGrid(
                    columns: [GridItem(.flexible(), spacing: 10), GridItem(.flexible(), spacing: 10)],
                    spacing: 10
                ) {
                    ForEach(availableTargets, id: \.self) { lang in
                        TargetCardView(
                            lang: lang,
                            selectedSource: selectedSource,
                            isSelected: lang == selectedTarget,
                            isDark: isDark
                        ) {
                            withAnimation(.spring(response: 0.35, dampingFraction: 0.72)) {
                                selectedTarget = lang
                            }
                        }
                    }
                }
                .padding(.horizontal, 16)
            }
        }
        .animation(.spring(response: 0.5, dampingFraction: 0.85), value: selectedSource)
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 15)
    }

    // MARK: - Floating CTA

    private var floatingCTA: some View {
        Button {
            withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                savePair()
            }
            dismiss()
        } label: {
            HStack(spacing: 12) {
                // Mini flag pair
                HStack(spacing: 6) {
                    CountryFlagView(countryCode: selectedSource.countryCode, size: 16)
                    Image(systemName: "arrow.right")
                        .font(.system(size: 9, weight: .heavy))
                        .foregroundStyle(.white.opacity(0.5))
                    CountryFlagView(countryCode: selectedTarget.countryCode, size: 16)
                }

                // Divider pip
                Circle()
                    .fill(.white.opacity(0.2))
                    .frame(width: 4, height: 4)

                Spacer()

                if hasChanged {
                    TimelineView(.animation(minimumInterval: 1.0 / 30.0)) { context in
                        let t = context.date.timeIntervalSinceReferenceDate
                        let phase = CGFloat(t.truncatingRemainder(dividingBy: 5.0) / 5.0)

                        // Invisible text sets the natural size, then the shimmer
                        // gradient is masked to that exact text shape and clipped.
                        Text(L.startYourAdventure)
                            .font(.headline.weight(.bold))
                            .hidden()
                            .overlay {
                                cosmicGradient
                                    .frame(width: 1200)
                                    .offset(x: phase * 600 - 300)
                            }
                            .mask {
                                Text(L.startYourAdventure)
                                    .font(.headline.weight(.bold))
                            }
                            .clipped()
                    }
                    .transition(.opacity)
                } else {
                    Text(L.keepLearning)
                        .font(.headline.weight(.bold))
                        .foregroundStyle(.white)
                        .contentTransition(.interpolate)
                }

                ZStack {
                    Circle()
                        .fill(.white.opacity(0.12))
                        .frame(width: 36, height: 36)
                        .overlay(
                            Circle()
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [.white.opacity(0.35), .white.opacity(0.1)],
                                        startPoint: .top, endPoint: .bottom
                                    ),
                                    lineWidth: 1
                                )
                        )
                        .shadow(color: .black.opacity(0.15), radius: 8, y: 2)

                    Image(systemName: hasChanged ? "chevron.right" : "checkmark")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundStyle(
                            LinearGradient(
                                colors: [.white, .white.opacity(0.7)],
                                startPoint: .top, endPoint: .bottom
                            )
                        )
                }
                .contentTransition(.symbolEffect(.replace))
            }
            .padding(.horizontal, 22)
            .padding(.vertical, 16)
            .frame(maxWidth: .infinity)
            .background(ctaBackground)
        }
        .buttonStyle(LumenPressStyle(weight: .prominent, accentColor: .indigo))
        .disabled(!hasChanged)
        .padding(.horizontal, 20)
        .padding(.vertical, 10)
        .background(
            Rectangle()
                .fill(.ultraThinMaterial)
                .ignoresSafeArea()
                .opacity(0.98)
        )
        .animation(.spring(response: 0.45, dampingFraction: 0.8), value: hasChanged)
        .animation(.spring(response: 0.45, dampingFraction: 0.8), value: selectedSource)
        .animation(.spring(response: 0.45, dampingFraction: 0.8), value: selectedTarget)
    }

    // MARK: - Cosmic Shimmer Gradient

    // Cosmic gradient — light colors only so text contrasts against the dark
    // CTA background. Two identical 600pt tiles (1200pt total). Travel = 600pt
    // centered (offset -300…+300) so the gradient always covers the text.
    private var cosmicGradient: some View {
        LinearGradient(
            colors: [
                // Tile 1
                .white,
                Color(hex: "#E0C3FC"),   // soft lavender
                Color(hex: "#F9A8D4"),   // light pink
                .white,
                Color(hex: "#C7D2FE"),   // light periwinkle
                Color(hex: "#FDE68A"),   // soft gold
                .white,
                Color(hex: "#E0C3FC"),   // soft lavender
                // Tile 2 (identical repeat)
                .white,
                Color(hex: "#E0C3FC"),
                Color(hex: "#F9A8D4"),
                .white,
                Color(hex: "#C7D2FE"),
                Color(hex: "#FDE68A"),
                .white,
                Color(hex: "#E0C3FC"),
                .white
            ],
            startPoint: .leading,
            endPoint: .trailing
        )
    }

    private var ctaBackground: some View {
        RoundedRectangle(cornerRadius: 18)
            .fill(
                LinearGradient(
                    colors: hasChanged
                        ? [Color(hex: "#4F46E5"), Color(hex: "#7C3AED")]
                        : [Color(.systemGray3), Color(.systemGray4)],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .overlay(
                RoundedRectangle(cornerRadius: 18)
                    .strokeBorder(
                        LinearGradient(
                            colors: [.white.opacity(0.25), .white.opacity(0.05)],
                            startPoint: .top, endPoint: .bottom
                        ),
                        lineWidth: 1
                    )
            )
            .shadow(
                color: hasChanged ? Color(hex: "#4F46E5").opacity(0.4) : .clear,
                radius: hasChanged ? 20 : 0,
                y: hasChanged ? 8 : 0
            )
    }

    // MARK: - Section Header

    private func sectionHeader(_ title: String, icon: String) -> some View {
        HStack(spacing: 8) {
            Image(systemName: icon)
                .font(.system(size: 15, weight: .semibold))
                .foregroundStyle(
                    LinearGradient(colors: [.indigo, .purple],
                                   startPoint: .leading, endPoint: .trailing)
                )

            Text(title)
                .font(.title3.weight(.semibold))
                .foregroundStyle(.primary)
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

// MARK: - Target Card (Extracted for Diffing)

/// Isolated struct so SwiftUI can diff each card independently
/// without re-evaluating the entire grid body.
private struct TargetCardView: View {
    let lang: SupportedLanguage
    let selectedSource: SupportedLanguage
    let isSelected: Bool
    let isDark: Bool
    let onTap: () -> Void

    var body: some View {
        Button(action: onTap) {
            HStack(spacing: 12) {
                // Flag with selection ring
                CountryFlagView(countryCode: lang.countryCode, size: 22)
                    .frame(width: 38, height: 38)
                    .background(flagCircle)
                    .overlay(flagRing)

                // Dual-line label
                VStack(alignment: .leading, spacing: 2) {
                    Text(lang.name(in: selectedSource))
                        .font(.subheadline.weight(isSelected ? .semibold : .medium))
                        .foregroundStyle(isSelected
                                         ? (isDark ? .white : .indigo)
                                         : .primary)
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)

                    Text(lang.displayName)
                        .font(.caption2.weight(.medium))
                        .foregroundStyle(isSelected ? .indigo.opacity(0.7) : .secondary)
                        .lineLimit(1)
                }

                Spacer(minLength: 0)

                // Checkmark
                if isSelected {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 18))
                        .symbolRenderingMode(.hierarchical)
                        .foregroundStyle(.indigo)
                        .symbolEffect(.bounce, value: isSelected)
                        .transition(.scale.combined(with: .opacity))
                }
            }
            .padding(.leading, 10)
            .padding(.trailing, 14)
            .padding(.vertical, 12)
            .background(cardBackground)
        }
        .buttonStyle(LumenCardPressStyle(accentColor: isSelected ? .indigo : .clear))
    }

    @ViewBuilder
    private var flagCircle: some View {
        if isSelected {
            Circle()
                .fill(
                    LinearGradient(
                        colors: [.indigo.opacity(0.2), .purple.opacity(0.15)],
                        startPoint: .topLeading, endPoint: .bottomTrailing
                    )
                )
        } else {
            Circle()
                .fill(isDark ? Color.white.opacity(0.04) : Color.white.opacity(0.8))
        }
    }

    @ViewBuilder
    private var flagRing: some View {
        if isSelected {
            Circle()
                .strokeBorder(
                    LinearGradient(colors: [.indigo, .purple],
                                   startPoint: .topLeading, endPoint: .bottomTrailing),
                    lineWidth: 2
                )
        } else {
            Circle()
                .strokeBorder(Color.clear, lineWidth: 2)
        }
    }

    @ViewBuilder
    private var cardBackground: some View {
        if isSelected {
            RoundedRectangle(cornerRadius: 16)
                .fill(isDark ? Color.indigo.opacity(0.12) : Color.indigo.opacity(0.06))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(
                            LinearGradient(
                                colors: [.indigo.opacity(isDark ? 0.4 : 0.25), .purple.opacity(isDark ? 0.25 : 0.15)],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 1.5
                        )
                )
                .shadow(color: .indigo.opacity(isDark ? 0.2 : 0.1), radius: 10, y: 3)
        } else {
            RoundedRectangle(cornerRadius: 16)
                .fill(isDark ? Color.white.opacity(0.04) : Color.white.opacity(0.85))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .strokeBorder(
                            isDark ? Color.white.opacity(0.05) : Color.black.opacity(0.04),
                            lineWidth: 0.5
                        )
                )
                .shadow(color: .black.opacity(isDark ? 0.08 : 0.02), radius: 3, y: 1)
        }
    }
}

// MARK: - Siri-style Glow Button Style

/// Siri-style rainbow glow button — on press, a translucent iridescent
/// ring blooms around the button with a soft scale. No grey highlight.
private struct SiriGlowButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        let pressed = configuration.isPressed

        configuration.label
            .scaleEffect(pressed ? 0.9 : 1.0)
            .background(
                ZStack {
                    // Rainbow ring glow — only visible on press
                    Circle()
                        .stroke(
                            AngularGradient(
                                colors: [
                                    .red, .orange, .yellow, .green,
                                    .cyan, .blue, .indigo, .purple, .pink, .red
                                ],
                                center: .center
                            ),
                            lineWidth: pressed ? 3 : 0
                        )
                        .frame(width: 44, height: 44)
                        .blur(radius: pressed ? 6 : 0)
                        .opacity(pressed ? 0.9 : 0)

                    // Soft translucent bloom
                    Circle()
                        .fill(
                            RadialGradient(
                                colors: pressed
                                    ? [.white.opacity(0.15), .purple.opacity(0.08), .clear]
                                    : [.clear, .clear, .clear],
                                center: .center,
                                startRadius: 4,
                                endRadius: 30
                            )
                        )
                        .frame(width: 56, height: 56)
                }
            )
            .animation(.easeOut(duration: 0.2), value: pressed)
            .onChange(of: pressed) { _, isPressed in
                if isPressed {
                    let generator = UIImpactFeedbackGenerator(style: .soft)
                    generator.impactOccurred(intensity: 0.4)
                }
            }
    }
}

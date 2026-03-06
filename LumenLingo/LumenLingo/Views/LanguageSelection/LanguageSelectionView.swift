import SwiftUI
import SwiftData

// MARK: - Language Selection View

/// Full-screen language pair picker.
/// Source language on the left, target on the right, with beta-pair toggle.
struct LanguageSelectionView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme

    @Query private var languagePrefs: [LanguagePreference]
    @Query private var betaPairs: [EnabledBetaPair]

    @State private var selectedSource: SupportedLanguage = .english
    @State private var selectedTarget: SupportedLanguage = .spanish
    @State private var showBeta = false
    @State private var searchText = ""

    private var currentPref: LanguagePreference? { languagePrefs.first }

    // Determine available targets for the selected source
    private var availableTargets: [SupportedLanguage] {
        SupportedLanguage.allCases.filter { target in
            guard target != selectedSource else { return false }
            let pair = LanguagePair(source: selectedSource, target: target)
            let pairReverse = LanguagePair(source: target, target: selectedSource)
            let isBuiltIn = pair.isBuiltIn || pairReverse.isBuiltIn
            if isBuiltIn { return true }
            if showBeta { return true }
            return betaPairs.contains {
                $0.sourceLanguage == selectedSource.rawValue && $0.targetLanguage == target.rawValue
            }
        }
    }

    private var filteredTargets: [SupportedLanguage] {
        if searchText.isEmpty { return availableTargets }
        return availableTargets.filter { $0.displayName.localizedCaseInsensitiveContains(searchText) }
    }

    var body: some View {
        NavigationStack {
            ZStack {
                // Background
                LinearGradient(
                    colors: [Color(hex: "#0a0a1a"), Color(hex: "#0d1530"), Color(hex: "#0a0a1a")],
                    startPoint: .top,
                    endPoint: .bottom
                )
                .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: 28) {
                        headerSection
                        sourceLanguageSection
                        directionArrow
                        targetLanguageSection
                        betaToggleSection
                        confirmButton
                        Spacer(minLength: 80)
                    }
                    .padding(.horizontal, 16)
                    .padding(.top, 12)
                }
            }
            .navigationTitle("Languages")
            .navigationBarTitleDisplayMode(.inline)
            .toolbarColorScheme(.dark, for: .navigationBar)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                        .foregroundStyle(.white.opacity(0.7))
                }
            }
            .searchable(text: $searchText, prompt: "Search languages…")
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
            Text("Choose Your Languages")
                .font(.title3.bold())
                .foregroundStyle(.white)
            Text("Select what you know and what you're learning")
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.5))
        }
        .padding(.top, 8)
    }

    // MARK: - Source Language

    private var sourceLanguageSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("I speak", systemImage: "person.wave.2.fill")
                .font(.headline)
                .foregroundStyle(.white)

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                ForEach(SupportedLanguage.allCases, id: \.self) { lang in
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

    // MARK: - Target Language

    private var targetLanguageSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Label("I'm learning", systemImage: "book.fill")
                .font(.headline)
                .foregroundStyle(.white)

            if filteredTargets.isEmpty {
                Text("No languages available for this source.")
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.4))
                    .frame(maxWidth: .infinity, alignment: .center)
                    .padding(20)
            } else {
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 10) {
                    ForEach(filteredTargets, id: \.self) { lang in
                        languageCard(lang, isSelected: lang == selectedTarget) {
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
                    Text("Beta Language Pairs")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                    Text("Show experimental pairs with limited content")
                        .font(.caption2)
                        .foregroundStyle(.white.opacity(0.4))
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
            HStack {
                Image(systemName: "checkmark.circle.fill")
                Text("Confirm: \(selectedSource.flag) → \(selectedTarget.flag)")
                    .fontWeight(.semibold)
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

    private func languageCard(_ lang: SupportedLanguage, isSelected: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack(spacing: 8) {
                Text(lang.flag)
                    .font(.title2)
                Text(lang.displayName)
                    .font(.subheadline.bold())
                    .foregroundStyle(isSelected ? .white : .white.opacity(0.7))
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
        .buttonStyle(.plain)
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

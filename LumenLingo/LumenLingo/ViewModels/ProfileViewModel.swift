import Foundation
import SwiftData

// MARK: - Profile ViewModel

@Observable
final class ProfileViewModel {
    var userProfile: UserProfile?
    var isLoading = true

    private let progressService: ProgressService
    let authService: any AuthServiceProtocol
    let syncService: any SyncServiceProtocol

    init(progressService: ProgressService, authService: any AuthServiceProtocol, syncService: any SyncServiceProtocol) {
        self.progressService = progressService
        self.authService = authService
        self.syncService = syncService
    }

    var userName: String { authService.currentUser?.name ?? "User" }
    var userEmail: String { authService.currentUser?.email ?? "" }

    var darkMode: Bool {
        get { userProfile?.darkMode ?? true }
        set { userProfile?.darkMode = newValue; save() }
    }

    var soundEnabled: Bool {
        get { userProfile?.soundEnabled ?? true }
        set {
            userProfile?.soundEnabled = newValue
            AudioService.shared.isEnabled = newValue
            save()
        }
    }

    var breathingOrbsEnabled: Bool {
        get { userProfile?.breathingOrbsEnabled ?? true }
        set { userProfile?.breathingOrbsEnabled = newValue; save() }
    }

    var quantumFlowEnabled: Bool {
        get { userProfile?.quantumFlowEnabled ?? true }
        set { userProfile?.quantumFlowEnabled = newValue; save() }
    }

    var nebulaDriftEnabled: Bool {
        get { userProfile?.nebulaDriftEnabled ?? true }
        set { userProfile?.nebulaDriftEnabled = newValue; save() }
    }

    var animationIntensity: Double {
        get { userProfile?.animationIntensity ?? 0.8 }
        set { userProfile?.animationIntensity = newValue; save() }
    }

    var animationSpeed: Double {
        get { userProfile?.animationSpeed ?? 1.0 }
        set { userProfile?.animationSpeed = newValue; save() }
    }

    var selectedOrbScheme: BreathingOrbScheme {
        get { BreathingOrbScheme(rawValue: userProfile?.breathingOrbScheme ?? "") ?? .barcelonaNights }
        set { userProfile?.breathingOrbScheme = newValue.rawValue; save() }
    }

    var selectedQuantumScene: QuantumFlowScene {
        get { QuantumFlowScene(rawValue: userProfile?.quantumFlowScene ?? "") ?? .dubaiCelestialMirage }
        set { userProfile?.quantumFlowScene = newValue.rawValue; save() }
    }

    var selectedNebulaPreset: NebulaPreset {
        get { NebulaPreset(rawValue: userProfile?.nebulaPreset ?? "") ?? .lagoonNebula }
        set { userProfile?.nebulaPreset = newValue.rawValue; save() }
    }

    func loadData() {
        isLoading = true
        userProfile = progressService.getOrCreateProfile()
        AudioService.shared.isEnabled = userProfile?.soundEnabled ?? true
        isLoading = false
    }

    private func save() {
        // SwiftData auto-saves, but we can trigger explicitly
    }

    func signOut() async {
        await authService.logout()
    }
}

// MARK: - Language Selection ViewModel

@Observable
final class LanguageSelectionViewModel {
    var sourceLanguage: SupportedLanguage = .english
    var targetLanguage: SupportedLanguage = .spanish
    var enabledBetaPairs: Set<String> = []

    private let progressService: ProgressService

    init(progressService: ProgressService) {
        self.progressService = progressService
    }

    var availablePairs: [LanguagePair] {
        var pairs = LanguagePair.builtIn

        // Add enabled beta pairs
        let betaPairs = LanguagePair.allAvailable.filter { pair in
            !pair.isBuiltIn && enabledBetaPairs.contains(pair.key)
        }
        pairs.append(contentsOf: betaPairs)

        return pairs
    }

    var isValidPair: Bool {
        sourceLanguage != targetLanguage
    }

    func loadCurrentPreference() {
        let pref = progressService.getLanguagePreference()
        sourceLanguage = SupportedLanguage(rawValue: pref.sourceLanguage) ?? .english
        targetLanguage = SupportedLanguage(rawValue: pref.targetLanguage) ?? .spanish

        // Load beta pairs
        if let data = UserDefaults.standard.data(forKey: "enabled_beta_pairs"),
           let pairs = try? JSONDecoder().decode(Set<String>.self, from: data) {
            enabledBetaPairs = pairs
        }
    }

    func selectLanguagePair() {
        guard isValidPair else { return }
        progressService.setLanguagePreference(source: sourceLanguage, target: targetLanguage)
        TranslationService.shared.setLanguage(sourceLanguage.rawValue)
        HapticsService.success()
        AudioService.shared.playWhoosh()
    }

    func toggleBetaPair(_ pair: LanguagePair) {
        if enabledBetaPairs.contains(pair.key) {
            enabledBetaPairs.remove(pair.key)
        } else {
            enabledBetaPairs.insert(pair.key)
        }
        if let data = try? JSONEncoder().encode(enabledBetaPairs) {
            UserDefaults.standard.set(data, forKey: "enabled_beta_pairs")
        }
    }
}

// MARK: - Membership ViewModel

@Observable
final class MembershipViewModel {
    var selectedTier: MembershipTier = .starter
    var isYearly: Bool = false

    var yearlyDiscount: Double { 0.20 } // 20% savings

    func priceForTier(_ tier: MembershipTier) -> String {
        if tier == .starter { return "Free" }
        let monthly = tier.monthlyPrice
        if isYearly {
            let yearly = monthly * 12 * Decimal(1 - yearlyDiscount)
            return "$\(yearly)/year"
        }
        return "$\(monthly)/month"
    }

    static let features: [MembershipFeature] = [
        MembershipFeature(name: "Language Pairs", starter: "3", pro: "7", elite: "15", royal: "Unlimited"),
        MembershipFeature(name: "Daily Practice", starter: "15 min", pro: "Unlimited", elite: "Unlimited", royal: "Unlimited"),
        MembershipFeature(name: "Game Modes", starter: "All 3", pro: "All 3", elite: "All 3", royal: "All 3"),
        MembershipFeature(name: "Breathing Orbs", starter: "1 scheme", pro: "3 schemes", elite: "All schemes", royal: "All schemes"),
        MembershipFeature(name: "Quantum Flow", starter: "—", pro: "2 scenes", elite: "All scenes", royal: "All scenes"),
        MembershipFeature(name: "Nebula Drift", starter: "—", pro: "—", elite: "3 presets", royal: "All presets"),
        MembershipFeature(name: "Offline Mode", starter: "—", pro: "—", elite: "✓", royal: "✓"),
        MembershipFeature(name: "Cloud Sync", starter: "—", pro: "✓", elite: "✓", royal: "✓"),
        MembershipFeature(name: "Priority Support", starter: "—", pro: "—", elite: "—", royal: "✓"),
    ]
}

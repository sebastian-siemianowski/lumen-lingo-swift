import Foundation
import SwiftData

// MARK: - Profile ViewModel

@MainActor
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
        set {
            userProfile?.breathingOrbsEnabled = newValue
            if newValue {
                userProfile?.quantumFlowEnabled = false
                userProfile?.nebulaDriftEnabled = false
            }
            save()
        }
    }

    var quantumFlowEnabled: Bool {
        get { userProfile?.quantumFlowEnabled ?? true }
        set {
            userProfile?.quantumFlowEnabled = newValue
            if newValue {
                userProfile?.breathingOrbsEnabled = false
                userProfile?.nebulaDriftEnabled = false
            }
            save()
        }
    }

    var nebulaDriftEnabled: Bool {
        get { userProfile?.nebulaDriftEnabled ?? true }
        set {
            userProfile?.nebulaDriftEnabled = newValue
            if newValue {
                userProfile?.breathingOrbsEnabled = false
                userProfile?.quantumFlowEnabled = false
            }
            save()
        }
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
        if let p = userProfile {
            AudioService.shared.syncFromProfile(p)
            HapticsService.shared.syncFromProfile(p)
        }
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

@MainActor
@Observable
final class LanguageSelectionViewModel {
    var sourceLanguage: SupportedLanguage = .english
    var targetLanguage: SupportedLanguage = .spanish

    private let progressService: ProgressService

    init(progressService: ProgressService) {
        self.progressService = progressService
    }

    var availablePairs: [LanguagePair] {
        LanguagePair.withContent
    }

    var isValidPair: Bool {
        sourceLanguage != targetLanguage
    }

    func loadCurrentPreference() {
        let pref = progressService.getLanguagePreference()
        sourceLanguage = SupportedLanguage(rawValue: pref.sourceLanguage) ?? .english
        targetLanguage = SupportedLanguage(rawValue: pref.targetLanguage) ?? .spanish
    }

    func selectLanguagePair() {
        guard isValidPair else { return }
        progressService.setLanguagePreference(source: sourceLanguage, target: targetLanguage)
        TranslationService.shared.setLanguage(sourceLanguage.rawValue)
        HapticsService.shared.correctAnswer()
        AudioService.shared.playLanguageConfirmed()
    }
}

// MARK: - Membership ViewModel

@Observable
final class MembershipViewModel {
    var selectedTier: MembershipTier = .free
    var isYearly: Bool = false

    var yearlyDiscount: Double { 0.20 } // 20% savings

    func priceForTier(_ tier: MembershipTier) -> String {
        if tier == .free { return "Free" }
        let monthly = tier.monthlyPrice
        if isYearly {
            let yearly = monthly * 12 * Decimal(1 - yearlyDiscount)
            return "$\(yearly)/year"
        }
        return "$\(monthly)/month"
    }

    static func features(_ L: AppStrings) -> [MembershipFeature] {
        [
            MembershipFeature(name: L.featureLanguagePairs, starter: "3", pro: "7", elite: "15", royal: "Unlimited"),
            MembershipFeature(name: L.featureDailyPractice, starter: "15 min", pro: "Unlimited", elite: "Unlimited", royal: "Unlimited"),
            MembershipFeature(name: L.featureGameModes, starter: "All 3", pro: "All 3", elite: "All 3", royal: "All 3"),
            MembershipFeature(name: L.featureBreathingOrbs, starter: "1 scheme", pro: "3 schemes", elite: "All schemes", royal: "All schemes"),
            MembershipFeature(name: L.featureQuantumFlow, starter: "—", pro: "2 scenes", elite: "All scenes", royal: "All scenes"),
            MembershipFeature(name: L.featureNebulaDrift, starter: "—", pro: "—", elite: "3 presets", royal: "All presets"),
            MembershipFeature(name: L.featureOfflineMode, starter: "—", pro: "—", elite: "✓", royal: "✓"),
            MembershipFeature(name: L.featureCloudSync, starter: "—", pro: "✓", elite: "✓", royal: "✓"),
            MembershipFeature(name: L.featurePrioritySupport, starter: "—", pro: "—", elite: "—", royal: "✓"),
        ]
    }
}

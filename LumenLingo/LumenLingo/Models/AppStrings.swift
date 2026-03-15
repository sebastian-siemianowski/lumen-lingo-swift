import Foundation

// MARK: - App-wide UI Strings Localization
// Provides translations for all user-facing strings based on the user's source (known) language.

struct AppStrings {

    // MARK: - Tabs
    let tabHome: String
    let tabStats: String
    let tabPremium: String
    let tabProfile: String

    // MARK: - Dashboard
    let greeting: (String) -> String   // "Hello, {name}!"
    let goodMorning: String
    let goodAfternoon: String
    let goodEvening: String
    let goodNight: String
    let readyForAdventure: String
    let level: String
    let totalXP: String
    let activeDays: String
    let chooseYourAdventure: String
    let startGameToBoost: String
    let flashCards: String
    let flashCardsDescription: String
    let masterNewWords: String
    let grammarChallenge: String
    let grammarDescription: String
    let testYourSkills: String
    let wordConstructor: String
    let wordBuilderDescription: String
    let craftAndDiscover: String
    let recentActivity: String
    let resetProgress: String
    let resetProgressMessage: String
    let progressReset: String
    let startFreshDescription: String

    // MARK: - Language Selection
    let languages: String
    let cancel: String
    let searchLanguages: String
    let chooseYourLanguages: String
    let selectWhatYouKnow: String
    let iSpeak: String
    let imLearning: String
    let noLanguagesAvailable: String
    let confirm: String
    let done: String
    let languagesAvailable: String
    let startYourAdventure: String
    let keepLearning: String

    // MARK: - Categories
    let back: String
    let searchCategories: String
    let noCategories: String
    let noFavouritesYet: String
    let allComplete: String
    let noResults: String
    let tapHeartToSave: String
    let youveFinishedEverything: String
    let tryDifferentSearch: String
    let categoriesWillAppear: String
    let clearFilters: String
    let items: String
    let complete: String
    let doubleTapToStart: String

    // MARK: - Flash Cards Game
    let loadingCards: String
    let tapToReveal: String
    let stillLearning: String
    let gotIt: String
    let noCardsAvailable: String
    let goBack: String

    // MARK: - Grammar Game
    let loadingQuestions: String
    let grammarTip: String
    let next: String
    let noQuestionsAvailable: String

    // MARK: - Word Builder Game
    let loadingWords: String
    let buildTheWord: String
    let availableLetters: String
    let undo: String
    let clear: String
    let check: String
    let hint: String
    let noWordsAvailable: String

    // MARK: - Game Complete
    let excellent: String
    let greatJob: String
    let goodWork: String
    let keepGoing: String
    let excellentSubtitle: String
    let greatJobSubtitle: String
    let goodWorkSubtitle: String
    let keepGoingSubtitle: String
    let points: String
    let accuracy: String
    let correct: String
    let toReview: String
    let playAgain: String
    let nextCategory: String
    let backToCategories: String

    // MARK: - Journey
    let yourLearningJourney: String
    let trackYourProgress: String
    let milestones: String
    let firstSteps: String
    let gettingStarted: String
    let dedicatedLearner: String
    let risingStar: String
    let wordWarrior: String
    let knowledgeSeeker: String
    let sentenceCrafter: String
    let grammarGuardian: String
    let vocabularyVirtuoso: String
    let languageMaster: String
    let fluencyPioneer: String
    let polyglotLegend: String
    let xpRequired: String   // "{n} XP required"
    let overview: String
    let sessions: String
    let streak: String
    let gamePerformance: String
    let currentStreak: String
    let days: String
    let keepLearningEveryDay: String

    // MARK: - Profile
    let appearance: String
    let sound: String
    let sync: String
    let signOut: String
    let darkLight: String
    let orbs: String
    let quantum: String
    let nebula: String
    let learner: String     // "Learner"
    let xp: String
    let darkMode: String
    let cosmicDarkTheme: String
    let lightModeActive: String
    let animationSpeed: String
    let slow: String
    let normal: String
    let fast: String
    let languagePair: String
    let version: String
    let madeWithLove: String

    // MARK: - Sound Settings
    let masterSound: String
    let allSoundsEnabled: String
    let allSoundsMuted: String
    let allGames: String
    let toggleAllGameSounds: String
    let flashcardsSound: String
    let grammarSound: String
    let wordBuilderSound: String
    let uiInteractions: String
    let buttonTapsNavigation: String
    let achievements: String
    let levelUpFanfares: String
    let ambientAudio: String
    let backgroundAtmospheric: String

    // MARK: - Sync
    let cloudSync: String
    let backupRestore: String
    let upload: String
    let download: String
    let lastSynced: String
    let never: String
    let justNow: String
    let changesPending: String
    let dataUploaded: String
    let dataDownloaded: String
    let syncSecurityNote: String
    let minAgo: String      // "{n} min ago"
    let hoursAgo: String    // "{n} hours ago"
    let daysAgo: String     // "{n} days ago"

    // MARK: - Sign Out
    let connected: String
    let offline: String
    let signOutRequiresInternet: String
    let email: String
    let name: String
    let membership: String
    let freeTier: String
    let areYouSure: String
    let progressWillBeSaved: String
    let savingProgress: String
    let clearingLocalData: String
    let signingOut: String

    // MARK: - Breathing Orbs Settings
    let breathingOrbs: String
    let ambientBackgroundAnimation: String
    let raveMode: String
    let rapidColorCycling: String
    let colorScheme: String
    let intensity: String
    let subtle: String
    let balanced: String
    let celestial: String
    let speed: String
    let calm: String
    let flowing: String
    let swift_: String
    let perfectStillness: String
    let gentleAndPeaceful: String
    let balancedRhythm: String
    let quickAndEnergetic: String

    // MARK: - Quantum Flow Settings
    let quantumFlow: String
    let dynamicParticleAnimation: String
    let scene: String
    let particleDensity: String
    let sparse: String
    // balanced - reused
    let dense: String
    let flowSpeed: String
    let serene: String
    let rhythmic: String
    let energetic: String
    let exitPreview: String

    // MARK: - Nebula Drift Settings
    let nebulaDrift: String
    let cosmicNebulaBackground: String
    let nebulaOptimizedDarkMode: String
    let nebulaPreset: String
    let nebulaIntensity: String
    // subtle, balanced reused
    let vivid: String
    let driftSpeed: String
    let frozen: String
    // flowing reused
    // swift_ reused
    let nebulaDescLagoon: String
    let nebulaDescCelestial: String
    let nebulaDescAndromeda: String
    let nebulaDescSolarAurora: String
    let nebulaDescSpiralHalo: String
    let nebulaDescStarburst: String

    // MARK: - Membership
    let plansAndPricing: String
    let investInYour: String
    let languageMastery: String
    let membershipSubtitle: String
    let monthly: String
    let yearlyDiscount: String
    let featureComparison: String
    let feature: String
    let free: String
    let pro: String
    let elite: String
    let royal: String
    let faq: String
    let secure: String
    let dayRefund: String
    let cancelAnytime: String
    let pricesShownUSD: String
    let popular: String
    let starter: String
    let beginYourJourney: String
    let masterLanguagesFaster: String
    let unlockFullPotential: String
    let ultimateExperience: String
    let currentPlan: String
    let getStarted: String
    let startPro: String
    let upgradeToElite: String
    let ascendToRoyal: String

    // MARK: - Game Type Names
    let gameFlashCards: String
    let gameGrammar: String
    let gameWordBuilder: String

    // MARK: - Additional UI
    let languageMasteryEngine: String
    let user: String               // fallback name
    let perMonth: String           // "/mo"
    let perYear: String            // "/yr"

    // MARK: - Membership Feature Names
    let featureLanguagePairs: String
    let featureDailyPractice: String
    let featureGameModes: String
    let featureBreathingOrbs: String
    let featureQuantumFlow: String
    let featureNebulaDrift: String
    let featureOfflineMode: String
    let featureCloudSync: String
    let featurePrioritySupport: String
    let unlimited: String
    let allModes: String           // "All 3"
    let scheme1: String            // "1 scheme"
    let schemes3: String           // "3 schemes"
    let allSchemes: String         // "All schemes"
    let scenes2: String            // "2 scenes"
    let allScenes: String          // "All scenes"
    let presets3: String           // "3 presets"
    let allPresets: String         // "All presets"
    let min15: String              // "15 min"

    // MARK: - Offline Mode / Connectivity
    let offlineMode: String
    let offlineModeDescription: String
    let offlineModeLockedDescription: String
    let connectToUse: String
    let connectivityRequired: String
    let offlineModeInfo: String
    let offlineModeDisabled: String
    let offlineModeDisabledDetail: String

    // MARK: - Upgrade Prompts
    let unlockPremium: String
    let viewPlans: String
    let maybeLater: String
    let requires: String
    let learnMore: String
    let hideForever: String
    let dontShowAgain: String

    // MARK: - Royal Trial
    let trialActivated: String
    let trialWelcomeMessage: String
    let trialDuration: String
    let trialAfterExpiry: String
    let trialStartExploring: String
    let trialBannerTitle: String
    let trialExpiringToday: String
    let trialOneDayLeft: String
    let trialDaysLeft: String
    let trialEndedTitle: String
    let trialEndedSubtitle: String
    let trialYourProgress: String
    let trialLevel: String
    let trialStreak: String
    let trialYouStillHave: String
    let trialChoosePlan: String
    let trialContinueFree: String
    let trialCompleted: String
    let trialCompletedTagline: String
    let trialStartFree: String

    // MARK: - Dashboard Feature Visibility
    let welcomeName: (String) -> String   // "Welcome, {name}!"
    let daysLeftInTrial: (Int) -> String   // "{n} days left in your trial"
    let thirtyMinPerDay: String            // "30 min/day"
    // unlimited — reused from Membership section
    let resetsIn: (String) -> String       // "Resets in {time}"
    let nowPlaying: String                 // "Playing"
    let paused: String                     // "Paused"

    // MARK: - Factory

    static func forLanguage(_ lang: SupportedLanguage) -> AppStrings {
        switch lang {
        case .english:    return english
        case .spanish:    return spanish
        case .french:     return french
        case .german:     return german
        case .polish:     return polish
        case .arabic:     return arabic
        case .chinese:    return chinese
        case .japanese:   return japanese
        case .ukrainian:  return ukrainian
        default:          return english
        }
    }
}

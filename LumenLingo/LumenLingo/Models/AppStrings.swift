import Foundation

// MARK: - App-wide UI Strings Localization
// Provides translations for all user-facing strings based on the user's source (known) language.

struct AppStrings: Sendable {

    // MARK: - Tabs
    let tabHome: String
    let tabStats: String
    let tabPremium: String
    let tabSettings: String
    let tabProfile: String

    // MARK: - Settings Header
    let settingsHeaderTitle: String
    let settingsHeaderSubtitle: String

    // MARK: - Dashboard
    let greeting: @Sendable (String) -> String   // "Hello, {name}!"
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
    let account: String
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
    let words: String          // "Words"
    let activityCalendar: String // "Activity Calendar"
    let dayStreak: String      // "day streak"
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
    let offlineModeActive: String
    let offlineModeIncluded: String
    let onlineOnly: String
    let offlineModeActivated: String
    let offlineModeActivatedDetail: String

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
    let welcomeName: @Sendable (String) -> String   // "Welcome, {name}!"
    let daysLeftInTrial: @Sendable (Int) -> String   // "{n} days left in your trial"
    let thirtyMinPerDay: String            // "30 min/day"
    // unlimited — reused from Membership section
    let resetsIn: @Sendable (String) -> String       // "Resets in {time}"
    let nowPlaying: String                 // "Playing"
    let paused: String                     // "Paused"

    // MARK: - Game Session Results
    let xpBonus: String                    // "XP Bonus"
    let timeSpentLabel: String             // "Time"
    let streakActive: String               // "Active"
    let streakLabel: String                // "Streak"
    let vsPreviousSession: String          // "vs Previous Session"
    let keepImproving: String              // "Keep improving every session!"
    let recentPerformance: String          // "Recent Performance"
    let last7Sessions: String              // "Last 7 sessions"
    let areasToImprove: String             // "Areas to Improve"
    let reviewIncorrect: @Sendable (Int) -> String   // "Review {n} incorrect answers"
    let shareResult: String                // "Share Result"
    let availableOn: @Sendable (String) -> String    // "Available on {tier}"

    // MARK: - Journey Progress Gating
    let dailyXPChart: String               // "Daily XP"
    let last7Days: String                  // "Last 7 days"
    let weeklyTrend: String                // "Weekly Trend"
    let thisWeekVsLastWeek: String         // "This week vs last week"
    let thisWeekLabel: String              // "This week"
    let lastWeekLabel: String              // "Last week"
    let totalThisWeek: String              // "Total this week"
    let accuracyHeatmap: String            // "Accuracy Heatmap"
    let accuracyByCategory: String         // "Accuracy by category"
    let playSessionsToSeeData: String      // "Play sessions to see data"
    let monthlyReport: String              // "Monthly Report"
    let last30Days: String                 // "Last 30 days"
    let activeDaysLabel: String            // "Active Days"
    let milestonePredictionsTitle: String   // "Milestone Predictions"
    let basedOnYourPace: String            // "Based on your current pace"
    let allMilestonesReached: String       // "All milestones reached!"
    let tapToUpgrade: String               // "Tap to upgrade"
    let unlockFeature: String               // "Unlock this feature"
    let gameBreakdownDesc: String           // feature sell description
    let dailyXPChartDesc: String            // feature sell description
    let weeklyTrendDesc: String             // feature sell description
    let accuracyHeatmapDesc: String         // feature sell description
    let monthlyReportDesc: String           // feature sell description
    let milestonePredictionsDesc: String    // feature sell description

    // MARK: - Data Export & Insights (Epic 18)
    let exportData: String                   // "Export Data"
    let exportDataDesc: String               // feature sell description
    let exportAsCSV: String                  // "Export as CSV"
    let exportAsJSON: String                 // "Export as JSON"
    let exportAsPDF: String                  // "Export as PDF"
    let exportReady: String                  // "Your data is ready to share"
    let noDataToExport: String               // "No data to export yet"
    let sessionsLabel: String                // "Sessions"
    let learningInsights: String             // "Learning Insights"
    let insightsDesc: String                 // feature sell description
    let optimalPracticeTimes: String         // "Optimal Practice Times"
    let bestTimeToLearn: String              // "Your best time to learn"
    let categoryMastery: String              // "Category Mastery"
    let masteryByCategory: String            // "Mastery by category"
    let retentionCurve: String               // "Retention Curve"
    let retentionOverTime: String            // "Retention over time"
    let fluencyTimeline: String              // "Fluency Timeline"
    let predictedMilestones: String          // "Predicted milestones"
    let morning: String                      // "Morning"
    let afternoon: String                    // "Afternoon"
    let evening: String                      // "Evening"
    let night: String                        // "Night"
    let needMoreData: String                 // "Play more sessions for insights"

    // MARK: - Tier Upgrade Celebration
    let upgradedExclamation: String         // "Upgraded!"
    let tierChangedExclamation: String      // "Tier Changed!"
    let upgradeMessagePro: String           // tier-specific linguistic celebration
    let upgradeMessageElite: String         // tier-specific linguistic celebration
    let upgradeMessageRoyal: String         // tier-specific linguistic celebration
    let upgradeMessageTrial: String         // tier-specific linguistic celebration
    let celebrationWelcomeTo: String        // "Welcome to"
    let celebrationWelcomeBackTo: String    // "Welcome back to"
    let celebrationContinue: String         // "Continue"
    let celebrationFirstSubscription: String // "Thank you for subscribing!"

    // MARK: - Subscription Onboarding (Story 7.3)
    let onboardingExploreTitle: String      // "Your Premium Features"
    let onboardingTryIt: String             // "Try It!"
    let onboardingExplore: String           // "Explore"
    let onboardingNext: String              // "Next"
    let onboardingSkip: String              // "I'll explore on my own"
    let onboardingSummaryTitle: String      // "You just unlocked"
    let onboardingSummaryFeatures: String   // "new features"
    let onboardingWelcomeBack: String       // "Welcome back! Here's what you have"
    let onboardingDone: String              // "Let's Go!"

    // MARK: - Value Framing (Story 7.4)
    let valueFramingTitle: String           // "Your Investment"
    let valueFramingJust: String            // "Just"
    let valueFramingPerDay: String          // "/day"
    let valueFramingFeatures: String        // "features"
    let valueFramingCoffeePro: String       // "Less than your morning coffee"
    let valueFramingCoffeeElite: String     // "Less than a sandwich"
    let valueFramingCoffeeRoyal: String     // "Less than a lunch out"
    let valueFramingWordsLearned: String    // "You've learned {count} words — that's just {cost} per word with {tier}"
    let valueFramingProjected: String       // "Most learners master 300+ words in their first month"

    // MARK: - Legal Consent
    let legalConsentTitle: String            // "Before We Begin"
    let legalConsentSubtitle: String         // "Please review and accept..."
    let privacyPolicyTitle: String           // "Privacy Policy"
    let termsOfServiceTitle: String          // "Terms of Service"
    let legalVersion: String                 // "Version 2.0"
    let legalLastUpdated: String             // "Last updated: 23 March 2026"
    let legalPrivacySummary: String          // Summary paragraph
    let legalTermsSummary: String            // Summary paragraph
    let legalPrivacyHighlight1: String       // key point
    let legalPrivacyHighlight2: String       // key point
    let legalPrivacyHighlight3: String       // key point
    let legalPrivacyHighlight4: String       // key point
    let legalTermsHighlight1: String         // key point
    let legalTermsHighlight2: String         // key point
    let legalTermsHighlight3: String         // key point
    let legalTermsHighlight4: String         // key point
    let legalAcceptAll: String               // "I Agree"
    let legalDecline: String                 // "Decline"
    let legalDeclineTitle: String            // "Are you sure?"
    let legalDeclineMessage: String          // "You must accept to use LumenLingo."
    let legalDeclineConfirm: String          // "Decline & Exit"
    let legalReadFull: String                // "Read Full Policy"
    let legalScrollToAccept: String          // "Scroll to review"

    // MARK: - Legal Re-consent
    let legalReconsentTitle: String          // "We've updated our policies"
    let legalReconsentBody: String           // "We've made changes to our Terms..."
    let legalReconsentAccept: String         // "I Accept"
    let legalReconsentDecline: String        // "I Decline"

    // MARK: - EULA
    let eulaTitle: String                    // "End-User Licence Agreement"
    let eulaSummary: String                  // Summary paragraph
    let eulaHighlight1: String               // key point
    let eulaHighlight2: String               // key point
    let eulaHighlight3: String               // key point
    let eulaHighlight4: String               // key point

    // MARK: - Subscription Disclosure
    let subscriptionAutoRenew: String        // Auto-renewal notice
    let subscriptionPaymentNotice: String    // Payment charged to Apple ID
    let subscriptionManageCancel: String     // How to manage/cancel
    let subscriptionTrialNotice: String      // 14-day trial disclosure
    let restorePurchases: String             // "Restore Purchases" button
    let subscriptionLegalPrefix: String      // "By subscribing, you agree to our"
    let subscriptionLegalAnd: String         // "and"

    // MARK: - Subscription Compliance (CCR 2013 / CRD)
    let subscriptionTraderInfo: String       // Trader identity + registration
    let subscriptionCoolingOff: String       // 14-day cooling-off waiver notice
    let subscriptionRefundNotice: String     // Apple handles refunds
    let subscriptionContractDuration: String // Monthly rolling contract
    let subscriptionEUConsumerRights: String // EU Consumer Rights Directive 2011/83/EU
    let subscriptionCancelSteps: String      // Step-by-step cancellation instructions
    let subscriptionVATNotice: String        // VAT/tax compliance notice

    // MARK: - Account Deletion
    let deleteAccount: String                // "Delete Account"
    let deleteAccountWarning: String         // Warning message about data loss
    let deleteAccountConfirm: String         // "Delete Everything"
    let deletingAccount: String              // "Deleting account…"
    let clearingUserData: String             // Progress step
    let accountDeleted: String               // "Account deleted"

    // MARK: - GDPR Data Export (free for all tiers)
    let gdprExportTitle: String              // "Export My Data"
    let gdprExportDesc: String               // Explanation of GDPR right
    let gdprExportButton: String             // "Export Personal Data"
    let gdprExportSuccess: String            // "Data exported successfully"
    let gdprExportEmpty: String              // "No personal data to export"

    // MARK: - Trademark Attribution
    let trademarkAttribution: String         // Apple trademark attribution line

    // MARK: - Company Disclosures (UK Companies Act 2006 s.82)
    let companyName: String                  // "Lumenshore Limited"
    let companyNumber: String                // "Company No. 09607326"
    let companyRegistration: String          // "Registered in England and Wales"
    let companyAddress: String               // Registered office address
    let companyVAT: String                   // "VAT: GB 270411929"

    // MARK: - In-App Legal
    let cookiePolicyTitle: String            // "Cookie Policy"
    let cookieSummary: String                // Summary paragraph for cookie policy
    let cookieHighlight1: String             // key point
    let cookieHighlight2: String             // key point
    let cookieHighlight3: String             // key point
    let cookieHighlight4: String             // key point
    let legalUpdated: String                 // "Updated March 2025"

    // MARK: - View My Data
    let viewMyDataTitle: String              // "View My Data"
    let viewMyDataDesc: String               // "See what data LumenLingo stores"
    let dataProfileInfo: String              // "Profile Information"
    let dataGameRecords: String              // "Game Progress Records"
    let dataMasteredItems: String            // "Mastered Items"
    let dataFavorites: String                // "Favourite Categories"
    let dataICloudSync: String               // "iCloud Sync"
    let dataEnabled: String                  // "Enabled"
    let dataDisabled: String                 // "Disabled"
    let dataStorageEstimate: String          // "Estimated Storage"

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

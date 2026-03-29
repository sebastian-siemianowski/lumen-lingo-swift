import SwiftUI
import SwiftData

// MARK: - LumenLingo App Entry Point

@main
struct LumenLingoApp: App {
    @Environment(\.scenePhase) private var scenePhase

    @State private var themeManager = ThemeManager()
    @State private var localizationManager = LocalizationManager()
    @State private var tierManager = TierManager()
    @State private var subscriptionManager = SubscriptionManager()
    @State private var practiceTimeTracker = PracticeTimeTracker()
    @State private var networkMonitor = NetworkMonitor()
    @State private var upgradePromptManager = UpgradePromptManager()
    @State private var sessionEngine = SessionEngine()

    #if DEBUG
    @State private var revenueCatService: any RevenueCatServiceProtocol = MockRevenueCatService()
    #else
    @State private var revenueCatService: any RevenueCatServiceProtocol = RealRevenueCatService()
    #endif

    #if DEBUG
    @State private var authService: any AuthServiceProtocol = MockAuthService()
    #else
    @State private var authService: any AuthServiceProtocol = {
        if FeatureFlagService.clerkAuthEnabled {
            return ClerkAuthService()
        } else {
            return MockAuthService()
        }
    }()
    #endif

    init() {
        #if DEBUG
        URLProtocol.registerClass(DebugURLProtocol.self)
        #endif
        // Lightweight integrity check on launch
        _ = DeviceIntegrityService.check()
    }

    private var debugBackgroundOnly: Bool {
        ProcessInfo.processInfo.environment["LL_DEBUG_BACKGROUND_ONLY"] == "1"
    }

    private var debugForcedNebula: NebulaPreset {
        guard let raw = ProcessInfo.processInfo.environment["LL_DEBUG_FORCE_NEBULA"],
              let preset = NebulaPreset(rawValue: raw) else {
            return .starburstRing
        }
        return preset
    }

    private var isRunningTests: Bool {
        ProcessInfo.processInfo.environment["XCTestBundlePath"] != nil
    }

    var body: some Scene {
        WindowGroup {
            Group {
                if isRunningTests {
                    Color.clear
                } else if debugBackgroundOnly {
                    Color.clear
                        .cosmicBackground(preset: debugForcedNebula)
                } else {
                    ContentView()
                        .overlay {
                            TierUpgradeCelebrationView()
                        }
                        .overlay {
                            FeatureTransitionOverlay()
                        }
                        .profileSync()
                        .legalReconsent()
                }
            }
            .environment(themeManager)
            .environment(tierManager)
            .environment(\.authService, authService)
            .environment(\.revenueCatService, revenueCatService)
            .environment(subscriptionManager)
            .environment(practiceTimeTracker)
            .environment(networkMonitor)
            .environment(upgradePromptManager)
            .environment(sessionEngine)
            .environment(\.localization, localizationManager)
            .preferredColorScheme(themeManager.colorScheme)
            .task {
                guard !isRunningTests else { return }
                await authService.checkAuthState()
            }
            .task {
                guard !isRunningTests else { return }
                // Configure RevenueCat SDK on launch (no-op for mock in DEBUG)
                if !revenueCatService.isConfigured {
                    let apiKey = EnvironmentConfig.current.revenueCatAPIKey
                    await revenueCatService.configure(apiKey: apiKey, appUserID: nil)
                    // Story 6.2: Collect device identifiers for attribution
                    revenueCatService.collectDeviceIdentifiers()
                    // Story 6.5: Enable Apple Search Ads attribution token collection
                    revenueCatService.enableAdServicesAttributionTokenCollection()
                }
                // Fetch offerings after configuration (Story 2.1)
                await subscriptionManager.fetchOfferings(from: revenueCatService)
                // Check trial eligibility for all packages (Story 2.4)
                await subscriptionManager.checkTrialEligibility(from: revenueCatService)
            }
            .task {
                guard !isRunningTests else { return }
                // Bridge RevenueCat customer info updates → SubscriptionManager
                for await info in revenueCatService.customerInfoStream {
                    subscriptionManager.handleRevenueCatCustomerInfo(info)
                }
            }
            .pruneSecurityEvents()
            .onChange(of: scenePhase) { _, newPhase in
                if newPhase == .active {
                    Task { await authService.checkAuthState() }
                    // Refresh offerings if cache is stale (Story 2.1)
                    if subscriptionManager.isOfferingsCacheStale {
                        Task { await subscriptionManager.fetchOfferings(from: revenueCatService) }
                    }
                }
            }
        }
        .modelContainer(for: [
            UserProfile.self,
            GameProgressRecord.self,
            LanguagePreference.self,
            FavoriteCategory.self,
            MasteredContent.self,
            SecurityEvent.self,
        ])
    }
}

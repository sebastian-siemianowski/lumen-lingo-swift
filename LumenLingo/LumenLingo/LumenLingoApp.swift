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
            .environment(subscriptionManager)
            .environment(practiceTimeTracker)
            .environment(networkMonitor)
            .environment(upgradePromptManager)
            .environment(sessionEngine)
            .environment(\.localization, localizationManager)
            .preferredColorScheme(themeManager.colorScheme)
            .task {
                await authService.checkAuthState()
            }
            .task {
                // Prune old security events on launch
                if let container = try? ModelContainer(for: SecurityEvent.self) {
                    let context = ModelContext(container)
                    SecurityAuditLogger.pruneOldEvents(in: context)
                }
            }
            .onChange(of: scenePhase) { _, newPhase in
                if newPhase == .active {
                    Task { await authService.checkAuthState() }
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

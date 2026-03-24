#if DEBUG
import Foundation
import SwiftUI

// MARK: - Auth Provider (DEBUG extensions)

extension AuthProvider {
    var pill: String {
        switch self {
        case .apple:  return " Apple"
        case .google: return "🔵 Google"
        case .phone:  return "📱 Phone"
        case .email:  return "📧 Email"
        }
    }
}

// MARK: - Debug Auth State

/// Every simulatable auth state, toggled from the QA panel.
/// `DebugAuthController` bridges these into `MockAuthService` overrides.
enum DebugAuthState: String, CaseIterable, Identifiable {
    case none               // No override — use real auth behavior
    case authenticated      // Logged in as mock user
    case unauthenticated    // Logged out, show sign-in sheet
    case guestMode          // Skipped sign-in, limited features
    case sessionExpired     // Token expired, trigger re-auth flow
    case sessionRevoked     // Forced logout from server
    case networkError       // Auth call fails with network error
    case rateLimited        // Auth call fails with rate limit error
    case clerkUnavailable   // Clerk SDK unreachable, offline fallback
    case accountSuspended   // Clerk returns "account suspended" status
    case accountDeleted     // Clerk returns "account deleted" status
    case migrationPending   // Guest → authenticated migration in progress

    var id: String { rawValue }

    var label: String {
        switch self {
        case .none:              return "None"
        case .authenticated:     return "✅ Authed"
        case .unauthenticated:   return "🚪 Logged Out"
        case .guestMode:         return "👤 Guest"
        case .sessionExpired:    return "⏰ Expired"
        case .sessionRevoked:    return "🚫 Revoked"
        case .networkError:      return "📡 Net Error"
        case .rateLimited:       return "⏳ Rate Limit"
        case .clerkUnavailable:  return "☁️ Offline"
        case .accountSuspended:  return "🔒 Suspended"
        case .accountDeleted:    return "🗑️ Deleted"
        case .migrationPending:  return "🔄 Migrating"
        }
    }
}

// MARK: - Mock Avatar Option

/// Selectable avatar options for the mock user profile editor.
enum MockAvatarOption: String, CaseIterable, Identifiable {
    case initials
    case astronaut
    case galaxy
    case planet
    case urlImage
    case none

    var id: String { rawValue }

    var displayName: String {
        switch self {
        case .initials:  return "Initials"
        case .astronaut: return "Astronaut"
        case .galaxy:    return "Galaxy"
        case .planet:    return "Planet"
        case .urlImage:  return "URL Image"
        case .none:      return "No Avatar"
        }
    }

    var iconName: String {
        switch self {
        case .initials:  return "person.circle.fill"
        case .astronaut: return "figure.wave"
        case .galaxy:    return "sparkles"
        case .planet:    return "globe.americas.fill"
        case .urlImage:  return "photo.fill"
        case .none:      return "person.slash.fill"
        }
    }
}

// MARK: - Mock User Profile

/// Configurable mock user data for QA panel auth simulation.
/// Fields mirror what Clerk would provide after authentication.
struct MockUserProfile {
    var displayName: String
    var email: String
    var phone: String
    var avatarOption: MockAvatarOption
    var tier: MembershipTier
    var linkedProviders: Set<AuthProvider>
    var signInMethod: AuthProvider
    var accountCreatedDate: Date
    var totalXP: Int
    var dailyStreak: Int

    /// Convert to an `AppUser` for injection into `MockAuthService`.
    var asAppUser: AppUser {
        AppUser(
            name: displayName,
            email: email,
            avatarURL: nil
        )
    }

    /// Account age in days, relative to now.
    var accountAgeDays: Int {
        get {
            let days = Calendar.current.dateComponents(
                [.day], from: accountCreatedDate, to: .now
            ).day ?? 0
            return max(0, days)
        }
        set {
            accountCreatedDate = Calendar.current.date(
                byAdding: .day, value: -max(0, newValue), to: .now
            ) ?? .now
        }
    }

    // MARK: Default

    static let `default` = MockUserProfile(
        displayName: "Luna Cosmos",
        email: "luna@lumenlingo.test",
        phone: "+1 555 000 0000",
        avatarOption: .initials,
        tier: .free,
        linkedProviders: [.apple],
        signInMethod: .apple,
        accountCreatedDate: Calendar.current.date(
            byAdding: .day, value: -30, to: .now
        ) ?? .now,
        totalXP: 1250,
        dailyStreak: 7
    )

    // MARK: Presets

    static let newUser = MockUserProfile(
        displayName: "New Explorer",
        email: "new@test.ll",
        phone: "",
        avatarOption: .initials,
        tier: .free,
        linkedProviders: [.apple],
        signInMethod: .apple,
        accountCreatedDate: .now,
        totalXP: 0,
        dailyStreak: 0
    )

    static let powerUser = MockUserProfile(
        displayName: "Max Galaxy",
        email: "max@test.ll",
        phone: "+1 555 999 0000",
        avatarOption: .astronaut,
        tier: .royal,
        linkedProviders: [.apple, .google],
        signInMethod: .apple,
        accountCreatedDate: Calendar.current.date(
            byAdding: .day, value: -180, to: .now
        ) ?? .now,
        totalXP: 85_000,
        dailyStreak: 90
    )

    static let phoneOnly = MockUserProfile(
        displayName: "Phone Learner",
        email: "",
        phone: "+44 7700 900000",
        avatarOption: .planet,
        tier: .free,
        linkedProviders: [.phone],
        signInMethod: .phone,
        accountCreatedDate: Calendar.current.date(
            byAdding: .day, value: -30, to: .now
        ) ?? .now,
        totalXP: 600,
        dailyStreak: 5
    )

    static let emailOnly = MockUserProfile(
        displayName: "Email Student",
        email: "email@test.ll",
        phone: "",
        avatarOption: .galaxy,
        tier: .pro,
        linkedProviders: [.email],
        signInMethod: .email,
        accountCreatedDate: Calendar.current.date(
            byAdding: .day, value: -60, to: .now
        ) ?? .now,
        totalXP: 3200,
        dailyStreak: 14
    )

    static let multiLinked = MockUserProfile(
        displayName: "Linked Luna",
        email: "luna@test.ll",
        phone: "+1 555 123 4567",
        avatarOption: .astronaut,
        tier: .elite,
        linkedProviders: Set(AuthProvider.allCases),
        signInMethod: .apple,
        accountCreatedDate: Calendar.current.date(
            byAdding: .day, value: -90, to: .now
        ) ?? .now,
        totalXP: 12_000,
        dailyStreak: 30
    )

    static let minimal = MockUserProfile(
        displayName: "",
        email: "",
        phone: "",
        avatarOption: .none,
        tier: .trial,
        linkedProviders: [.apple],
        signInMethod: .apple,
        accountCreatedDate: Calendar.current.date(
            byAdding: .day, value: -1, to: .now
        ) ?? .now,
        totalXP: 0,
        dailyStreak: 0
    )

    /// All named presets for the QA panel picker.
    static let presets: [(label: String, profile: MockUserProfile)] = [
        ("🆕 New User",     .newUser),
        ("👑 Power User",   .powerUser),
        ("📱 Phone Only",   .phoneOnly),
        ("📧 Email Only",   .emailOnly),
        ("🔗 Multi-linked", .multiLinked),
        ("🫥 Minimal",      .minimal),
    ]
}

// MARK: - Debug Auth Controller

/// Singleton that drives auth simulation from the QA panel.
/// Follows the same pattern as `DebugNetworkController` and `DebugContentController`.
///
/// When `activeOverride != .none`, `MockAuthService` reads from this controller
/// instead of its hardcoded mock behavior. Changing `activeOverride` at runtime
/// immediately updates `MockAuthService` state — no app restart needed.
///
/// All overrides reset to defaults on app launch (intentional — prevents
/// accidentally shipping a broken state).
@MainActor
@Observable
final class DebugAuthController {
    static let shared = DebugAuthController()

    // MARK: - Public State

    /// The current auth simulation state. `.none` = no override (real behavior).
    var activeOverride: DebugAuthState = .none

    /// Configurable mock user data (name, email, avatar, tier, provider, XP, etc.).
    var mockUser: MockUserProfile = .default

    /// Artificial delay in seconds applied to all mock auth calls (0–5).
    var simulatedLatency: TimeInterval = 0.0

    /// When true, the next token refresh call will fail with a network error.
    var shouldSimulateTokenRefreshFailure: Bool = false

    /// Which auth providers are "linked" to the simulated user.
    var simulatedLinkedIdentities: Set<AuthProvider> {
        get { mockUser.linkedProviders }
        set { mockUser.linkedProviders = newValue }
    }

    /// Whether any simulation override is active.
    var isSimulating: Bool { activeOverride != .none }

    // MARK: - Sign-in Flow Simulation (Story 0.4)

    /// The outcome that fires when a mock sign-in completes.
    var signInOutcome: SignInOutcome = .successReturning

    /// Force the mock sign-in sheet to pre-select a provider.
    var signInProviderOverride: AuthProvider? = nil

    /// All possible sign-in outcomes for QA testing.
    enum SignInOutcome: String, CaseIterable, Identifiable {
        case successNew
        case successReturning
        case networkError
        case clerkUnavailable
        case accountSuspended
        case rateLimited
        case invalidOTP
        case expiredOTP
        case slowResponse
        case accountConflict

        var id: String { rawValue }

        var label: String {
            switch self {
            case .successNew:        return "✅ Success (New)"
            case .successReturning:  return "✅ Success (Returning)"
            case .networkError:      return "❌ Network Error"
            case .clerkUnavailable:  return "❌ Clerk Down"
            case .accountSuspended:  return "❌ Suspended"
            case .rateLimited:      return "❌ Rate Limited"
            case .invalidOTP:        return "❌ Invalid OTP"
            case .expiredOTP:        return "❌ Expired OTP"
            case .slowResponse:      return "⏳ Slow Response"
            case .accountConflict:   return "🔄 Account Conflict"
            }
        }
    }

    // MARK: - Session Simulation (Story 0.6)

    /// Mock token expiry date. nil = valid indefinitely.
    var mockTokenExpiry: Date? = nil

    /// When true, the next token refresh will fail.
    var failNextTokenRefresh: Bool = false

    /// Simulated token state for display.
    var tokenState: TokenState {
        guard let expiry = mockTokenExpiry else { return .valid }
        let remaining = expiry.timeIntervalSince(.now)
        if remaining <= 0 { return .expired }
        if remaining < 300 { return .expiringSoon }
        return .valid
    }

    enum TokenState: String {
        case valid
        case expiringSoon
        case expired
        case refreshing

        var label: String {
            switch self {
            case .valid:        return "Valid"
            case .expiringSoon: return "Expiring Soon"
            case .expired:      return "Expired"
            case .refreshing:   return "Refreshing…"
            }
        }

        var color: Color {
            switch self {
            case .valid:        return .green
            case .expiringSoon: return .orange
            case .expired:      return .red
            case .refreshing:   return .blue
            }
        }
    }

    // MARK: - Sync Simulation (Story 0.7)

    /// The conflict scenario to simulate on next profile sync.
    var syncScenario: SyncScenario = .cleanSync

    enum SyncScenario: String, CaseIterable, Identifiable {
        case cleanSync
        case localWinsXP
        case remoteWinsXP
        case streakConflict
        case nameConflict
        case tierConflict

        var id: String { rawValue }

        var label: String {
            switch self {
            case .cleanSync:      return "🟢 Clean Sync"
            case .localWinsXP:    return "🟡 Local Wins (XP)"
            case .remoteWinsXP:   return "🟡 Remote Wins (XP)"
            case .streakConflict: return "🟡 Streak Conflict"
            case .nameConflict:   return "🔴 Name Conflict"
            case .tierConflict:   return "🔴 Tier Conflict"
            }
        }
    }

    /// Timestamp of last simulated sync.
    var lastSyncDate: Date? = nil

    /// Whether a sync is currently in progress.
    var isSyncing: Bool = false

    // MARK: - Init

    private init() {}

    // MARK: - Actions

    /// Reset all overrides to default values.
    func resetAllOverrides() {
        activeOverride = .none
        mockUser = .default
        simulatedLatency = 0.0
        shouldSimulateTokenRefreshFailure = false
        signInOutcome = .successReturning
        signInProviderOverride = nil
        mockTokenExpiry = nil
        failNextTokenRefresh = false
        syncScenario = .cleanSync
        lastSyncDate = nil
        isSyncing = false
    }

    /// Apply a preset mock user profile.
    func applyPreset(_ profile: MockUserProfile) {
        mockUser = profile
    }

    /// Set the mock token to expire after the given interval.
    func expireTokenAfter(_ interval: TimeInterval) {
        mockTokenExpiry = Date.now.addingTimeInterval(interval)
    }

    /// Immediately expire the mock token.
    func expireTokenNow() {
        mockTokenExpiry = Date.now.addingTimeInterval(-1)
    }

    /// Set both auth state and tier simultaneously (Quick Combo).
    func applyCombo(authState: DebugAuthState, tier: MembershipTier) {
        activeOverride = authState
        mockUser.tier = tier
    }
}
#endif

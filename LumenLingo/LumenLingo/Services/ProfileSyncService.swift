import Foundation
import SwiftUI
import SwiftData

// MARK: - Profile Sync Service

/// Syncs Clerk user identity to the local SwiftData `UserProfile`.
/// Clerk is authoritative for identity (name, email). Local is authoritative for gameplay (XP, streaks).
@MainActor
enum ProfileSyncService {

    /// Sync a Clerk user to the local profile after sign-in.
    /// Creates a new profile if none exists, or updates the existing one.
    static func syncFromClerk(
        user: AppUser,
        clerkUserId: String,
        modelContext: ModelContext
    ) {
        let profile = findOrCreateProfile(clerkUserId: clerkUserId, modelContext: modelContext)

        // Clerk is authoritative for identity fields
        if !user.firstName.isEmpty {
            profile.firstName = user.firstName
        }
        profile.email = user.email

        // Link profile to Clerk user
        profile.clerkUserId = clerkUserId
        profile.lastSyncDate = Date()

        Log.info("Profile synced from Clerk (userId: \(clerkUserId), name: \(profile.firstName))")
    }

    /// Find existing profile for a Clerk user, adopt a guest profile, or create a new one.
    private static func findOrCreateProfile(
        clerkUserId: String,
        modelContext: ModelContext
    ) -> UserProfile {
        // 1. Look for existing profile with this Clerk user ID
        let descriptor = FetchDescriptor<UserProfile>(
            predicate: #Predicate { $0.clerkUserId == clerkUserId }
        )
        if let existing = try? modelContext.fetch(descriptor).first {
            return existing
        }

        // 2. Look for a guest profile (no clerkUserId) to migrate
        let guestDescriptor = FetchDescriptor<UserProfile>(
            predicate: #Predicate { $0.clerkUserId == nil }
        )
        if let guest = try? modelContext.fetch(guestDescriptor).first {
            Log.info("Migrating guest profile to authenticated (clerkUserId: \(clerkUserId))")
            return guest
        }

        // 3. Create a new profile
        let allDescriptor = FetchDescriptor<UserProfile>()
        let allProfiles = (try? modelContext.fetch(allDescriptor)) ?? []

        if allProfiles.isEmpty {
            let newProfile = UserProfile()
            modelContext.insert(newProfile)
            Log.info("Created new profile for Clerk user: \(clerkUserId)")
            return newProfile
        }

        // Use the most recently active profile if multiple exist
        let best = allProfiles.sorted { ($0.lastActivityDate ?? .distantPast) > ($1.lastActivityDate ?? .distantPast) }.first!
        if allProfiles.count > 1 {
            Log.warning("Multiple profiles found (\(allProfiles.count)) — using most recent")
        }
        return best
    }
}

// MARK: - Profile Sync View Modifier

/// Observes auth state changes and triggers profile sync when user signs in.
struct ProfileSyncModifier: ViewModifier {
    @Environment(\.authService) private var authService
    @Environment(\.modelContext) private var modelContext

    func body(content: Content) -> some View {
        content
            .onReceive(NotificationCenter.default.publisher(for: .authStateDidChange)) { _ in
                guard authService.isAuthenticated,
                      let user = authService.currentUser else { return }

                ProfileSyncService.syncFromClerk(
                    user: user,
                    clerkUserId: user.id,
                    modelContext: modelContext
                )
            }
    }
}

extension View {
    func profileSync() -> some View {
        modifier(ProfileSyncModifier())
    }
}

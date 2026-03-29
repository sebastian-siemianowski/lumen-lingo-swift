import Foundation
import os.log

// MARK: - RevenueCat Identity Bridge

/// Bridges Clerk authentication events to RevenueCat identity management.
/// Keeps Clerk and RevenueCat concerns decoupled by consuming `AuthServiceProtocol`
/// events and routing them to `RevenueCatServiceProtocol`.
///
/// Story 1.6: Clerk → RevenueCat Identity Bridge
@MainActor
@Observable
final class RevenueCatIdentityBridge: @unchecked Sendable {

    private let logger = Logger(subsystem: "com.lumenlingo", category: "RCIdentityBridge")

    // MARK: - State

    /// Whether the bridge is actively syncing identity.
    private(set) var isSyncing = false

    /// The last error from identity sync, if any.
    private(set) var lastSyncError: Error?

    /// Whether a background retry is in progress.
    private(set) var isRetrying = false

    // MARK: - Sign In

    /// Handle a Clerk sign-in event. Links the Clerk user identity to RevenueCat.
    ///
    /// - Parameters:
    ///   - user: The authenticated Clerk/App user.
    ///   - authProvider: The sign-in method used (Apple, Google, Phone, Email).
    ///   - revenueCatService: The RevenueCat service to log in to.
    ///   - subscriptionManager: The subscription manager to update state.
    /// - Returns: The resolved customer info after identity linking.
    @discardableResult
    func handleSignIn(
        user: AppUser,
        authProvider: AuthProvider,
        revenueCatService: any RevenueCatServiceProtocol,
        subscriptionManager: SubscriptionManager
    ) async -> RCCustomerInfo? {
        guard revenueCatService.isConfigured else {
            logger.warning("RevenueCat not configured — skipping identity link for user \(user.id)")
            return nil
        }

        isSyncing = true
        lastSyncError = nil
        defer { isSyncing = false }

        do {
            let customerInfo = try await revenueCatService.logIn(userID: user.id)

            // Update subscription state from resolved entitlements
            subscriptionManager.handleRevenueCatCustomerInfo(customerInfo)

            // Set subscriber attributes
            var attributes: [String: String] = [
                "$displayName": user.name,
                "auth_provider": authProvider.rawValue,
            ]
            if !user.email.isEmpty && !user.isPrivateRelayEmail {
                attributes["$email"] = user.email
            }
            revenueCatService.setAttributes(attributes)

            logger.info("RC identity linked: userID=\(user.id), tier=\(customerInfo.highestActiveTier.rawValue)")
            return customerInfo

        } catch {
            logger.error("RC logIn failed for user \(user.id): \(error.localizedDescription)")
            lastSyncError = error
            // Schedule background retry with exponential backoff
            scheduleRetry(user: user, authProvider: authProvider, revenueCatService: revenueCatService, subscriptionManager: subscriptionManager)
            return nil
        }
    }

    // MARK: - Sign Out

    /// Handle a Clerk sign-out event. Resets RevenueCat to anonymous user.
    /// Does NOT revoke the subscription.
    func handleSignOut(
        revenueCatService: any RevenueCatServiceProtocol,
        subscriptionManager: SubscriptionManager
    ) async {
        guard revenueCatService.isConfigured else {
            logger.warning("RevenueCat not configured — skipping sign-out")
            return
        }

        do {
            let anonymousInfo = try await revenueCatService.logOut()
            subscriptionManager.handleRevenueCatCustomerInfo(anonymousInfo)
            logger.info("RC identity reset to anonymous: \(revenueCatService.currentAppUserID)")
        } catch {
            logger.error("RC logOut failed: \(error.localizedDescription)")
        }
    }

    // MARK: - Retry Logic

    private var retryTask: Task<Void, Never>?

    /// Schedule exponential backoff retry for failed logIn.
    /// Delays: 1s, 2s, 4s, 8s, 16s (max 30s), up to 5 attempts.
    private func scheduleRetry(
        user: AppUser,
        authProvider: AuthProvider,
        revenueCatService: any RevenueCatServiceProtocol,
        subscriptionManager: SubscriptionManager
    ) {
        retryTask?.cancel()
        isRetrying = true
        retryTask = Task { [weak self] in
            var delay: UInt64 = 1_000_000_000 // 1 second in nanoseconds
            let maxDelay: UInt64 = 30_000_000_000 // 30 seconds
            let maxAttempts = 5

            for attempt in 1...maxAttempts {
                guard !Task.isCancelled else { break }

                try? await Task.sleep(nanoseconds: delay)
                guard !Task.isCancelled else { break }

                self?.logger.info("RC logIn retry attempt \(attempt)/\(maxAttempts)")

                do {
                    let customerInfo = try await revenueCatService.logIn(userID: user.id)
                    await MainActor.run {
                        subscriptionManager.handleRevenueCatCustomerInfo(customerInfo)
                        self?.lastSyncError = nil
                        self?.isRetrying = false
                    }

                    var attributes: [String: String] = [
                        "$displayName": user.name,
                        "auth_provider": authProvider.rawValue,
                    ]
                    if !user.email.isEmpty && !user.isPrivateRelayEmail {
                        attributes["$email"] = user.email
                    }
                    revenueCatService.setAttributes(attributes)

                    self?.logger.info("RC logIn retry succeeded on attempt \(attempt)")
                    return
                } catch {
                    self?.logger.warning("RC logIn retry \(attempt) failed: \(error.localizedDescription)")
                    delay = min(delay * 2, maxDelay)
                }
            }

            await MainActor.run {
                self?.isRetrying = false
                self?.logger.error("RC logIn retry exhausted after \(maxAttempts) attempts")
            }
        }
    }

    /// Cancel any pending retry.
    func cancelRetry() {
        retryTask?.cancel()
        retryTask = nil
        isRetrying = false
    }
}

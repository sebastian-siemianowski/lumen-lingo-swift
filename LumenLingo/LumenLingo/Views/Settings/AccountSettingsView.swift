import SwiftUI
import SwiftData

// MARK: - Account Settings View

/// Account section displayed within the Settings tab bar.
/// Shows user identity, sign-in methods, and account actions.
/// Guest users see a prompt to sign in.
struct AccountSettingsView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.authService) private var authService
    @Environment(\.localization) private var localization

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    @State private var showSignInSheet = false
    @State private var isEditingName = false
    @State private var editedName = ""
    @State private var showNameSaved = false

    var body: some View {
        if authService.isAuthenticated {
            authenticatedContent
        } else {
            guestPrompt
        }
    }

    // MARK: - Authenticated Content

    private var authenticatedContent: some View {
        VStack(spacing: 20) {
            // Identity header
            identityHeader

            // Sign-in Methods
            signInMethodsSection

            // Account Actions
            accountActionsSection
        }
    }

    // MARK: - Identity Header

    private var identityHeader: some View {
        HStack(spacing: 14) {
            // Avatar – 64pt
            UserAvatarView(user: authService.currentUser, size: 64)

            VStack(alignment: .leading, spacing: 4) {
                // Display name
                Text(displayName)
                    .font(.system(size: 20, weight: .bold))
                    .foregroundStyle(isDark ? .white : .primary)
                    .lineLimit(1)

                // Email with verified badge
                if let email = authService.currentUser?.displayEmail {
                    HStack(spacing: 4) {
                        Text(email)
                            .font(.system(size: 14))
                            .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                            .lineLimit(1)

                        Image(systemName: "checkmark.seal.fill")
                            .font(.system(size: 12))
                            .foregroundStyle(.green)
                    }
                }
            }

            Spacer()
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
    }

    // MARK: - Sign-in Methods

    private var signInMethodsSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Sign-in Methods")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .padding(.horizontal, 16)

            VStack(spacing: 1) {
                if let user = authService.currentUser {
                    // Apple — check if Apple email relay is in use
                    identityRow(
                        icon: "apple.logo",
                        provider: "Apple",
                        status: user.isPrivateRelayEmail ? "Connected" : nil,
                        detail: user.isPrivateRelayEmail ? user.displayEmail : nil
                    )

                    // Google — show if avatar URL is from Google
                    if let urlStr = user.avatarURL?.host(), urlStr.contains("google") {
                        identityRow(
                            icon: "g.circle.fill",
                            provider: "Google",
                            status: "Connected",
                            detail: user.email
                        )
                    }
                }

                // Email
                if let email = authService.currentUser?.email, !email.isEmpty {
                    identityRow(
                        icon: "envelope.fill",
                        provider: "Email",
                        status: "Connected",
                        detail: maskedEmail(email)
                    )
                }
            }
            .background(
                RoundedRectangle(cornerRadius: 12)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.03))
            )
            .clipShape(RoundedRectangle(cornerRadius: 12))
        }
    }

    private func identityRow(icon: String, provider: String, status: String?, detail: String?) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 18))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .primary)
                .frame(width: 28)

            VStack(alignment: .leading, spacing: 2) {
                Text(provider)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(isDark ? .white : .primary)

                if let detail {
                    Text(detail)
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.45) : .secondary)
                        .lineLimit(1)
                }
            }

            Spacer()

            if let status {
                Text(status)
                    .font(.system(size: 12, weight: .medium))
                    .foregroundStyle(.green)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(
                        Capsule()
                            .fill(.green.opacity(0.12))
                    )
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
    }

    // MARK: - Account Actions

    private var accountActionsSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Account")
                .font(.system(size: 13, weight: .semibold))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .padding(.horizontal, 16)

            VStack(spacing: 1) {
                // Display Name — editable
                displayNameRow

                // Clerk User ID (for debugging)
                if let clerkId = profile?.clerkUserId {
                    actionRow(icon: "link", label: "Linked ID", value: String(clerkId.prefix(12)) + "…")
                }

                // Last sync
                if let syncDate = profile?.lastSyncDate {
                    actionRow(icon: "arrow.triangle.2.circlepath", label: "Last Sync", value: syncDate.formatted(.relative(presentation: .named)))
                }
            }
            .background(
                RoundedRectangle(cornerRadius: 12)
                    .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.03))
            )
            .clipShape(RoundedRectangle(cornerRadius: 12))
        }
    }

    private func actionRow(icon: String, label: String, value: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .font(.system(size: 16))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                .frame(width: 28)

            Text(label)
                .font(.system(size: 15))
                .foregroundStyle(isDark ? .white : .primary)

            Spacer()

            Text(value)
                .font(.system(size: 14))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .lineLimit(1)
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
    }

    // MARK: - Guest Prompt

    private var guestPrompt: some View {
        VStack(spacing: 16) {
            Image(systemName: "person.crop.circle.badge.plus")
                .font(.system(size: 40))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)

            Text("Sign in to manage your account")
                .font(.system(size: 16, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                .multilineTextAlignment(.center)

            Button {
                showSignInSheet = true
            } label: {
                Text("Sign In")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 24)
                    .padding(.vertical, 12)
                    .background(
                        Capsule()
                            .fill(
                                isDark
                                    ? AnyShapeStyle(LinearGradient(
                                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    ))
                                    : AnyShapeStyle(LinearGradient.caribbeanGradientOcean)
                            )
                    )
            }
            .sheet(isPresented: $showSignInSheet) {
                SignInSheetView()
            }
        }
        .padding(.vertical, 30)
    }

    // MARK: - Display Name Editing

    private var displayNameRow: some View {
        HStack(spacing: 12) {
            Image(systemName: "person.text.rectangle")
                .font(.system(size: 16))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)
                .frame(width: 28)

            if isEditingName {
                TextField("Name", text: $editedName)
                    .font(.system(size: 15))
                    .textContentType(.name)
                    .submitLabel(.done)
                    .onSubmit { saveName() }

                Button {
                    saveName()
                } label: {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 20))
                        .foregroundStyle(.green)
                }

                Button {
                    isEditingName = false
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .font(.system(size: 20))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .secondary)
                }
            } else {
                Text("Display Name")
                    .font(.system(size: 15))
                    .foregroundStyle(isDark ? .white : .primary)

                Spacer()

                if showNameSaved {
                    Image(systemName: "checkmark")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(.green)
                        .transition(.scale.combined(with: .opacity))
                }

                Text(displayName)
                    .font(.system(size: 14))
                    .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                    .lineLimit(1)

                Button {
                    editedName = profile?.firstName ?? ""
                    isEditingName = true
                } label: {
                    Image(systemName: "pencil")
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
                }
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .animation(.easeInOut(duration: 0.2), value: isEditingName)
    }

    private func saveName() {
        let trimmed = editedName.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty, trimmed.count <= 50 else {
            isEditingName = false
            return
        }
        profile?.firstName = trimmed
        isEditingName = false
        withAnimation {
            showNameSaved = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation {
                showNameSaved = false
            }
        }
    }

    // MARK: - Helpers

    private var displayName: String {
        let name = authService.currentUser?.name ?? profile?.firstName ?? ""
        return name.isEmpty ? "Learner" : name
    }

    private func maskedEmail(_ email: String) -> String {
        guard let atIndex = email.firstIndex(of: "@") else { return email }
        let local = String(email[email.startIndex..<atIndex])
        let domain = String(email[atIndex...])
        guard local.count > 2 else { return email }
        return "\(local.prefix(1))•••\(domain)"
    }
}

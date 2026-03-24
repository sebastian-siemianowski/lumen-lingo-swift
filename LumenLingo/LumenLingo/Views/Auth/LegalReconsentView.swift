import SwiftUI
import SwiftData

// MARK: - Legal Document Version

enum LegalDocuments {
    /// Current version of legal documents. Bump this when Terms/Privacy are updated.
    static let currentVersion = "1.0"
}

// MARK: - Legal Re-consent View

/// Non-dismissible sheet shown when legal documents have been updated since
/// the user last consented. Requires re-acceptance to continue using the app.
struct LegalReconsentView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.authService) private var authService
    @Environment(\.modelContext) private var modelContext

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    let onAccept: () -> Void

    private var isDark: Bool { colorScheme == .dark }

    var body: some View {
        VStack(spacing: 24) {
            Spacer()

            // Icon
            Image(systemName: "doc.text.fill")
                .font(.system(size: 48))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)

            // Title
            Text("We've updated our policies")
                .font(.title2.bold())
                .foregroundStyle(isDark ? .white : .primary)
                .multilineTextAlignment(.center)

            // Body
            Text("We've made changes to our Terms of Service and Privacy Policy. Please review and accept to continue.")
                .font(.body)
                .foregroundStyle(isDark ? .white.opacity(0.7) : .secondary)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 24)

            Spacer()

            // Accept button
            Button {
                acceptConsent()
            } label: {
                Text("I Accept")
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 16)
                    .background(
                        RoundedRectangle(cornerRadius: 16)
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
            .padding(.horizontal, 24)

            // Decline button
            Button {
                Task {
                    await authService.logout()
                }
            } label: {
                Text("I Decline")
                    .font(.system(size: 15))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .secondary)
            }

            Spacer().frame(height: 20)
        }
        .cosmicBackground()
        .interactiveDismissDisabled()
    }

    private func acceptConsent() {
        profile?.legalConsentVersion = LegalDocuments.currentVersion
        profile?.legalConsentDate = Date()
        try? modelContext.save()
        onAccept()
    }
}

// MARK: - Legal Re-consent Modifier

/// Checks on app launch whether the user's consent version is current.
/// Shows re-consent sheet if outdated.
struct LegalReconsentModifier: ViewModifier {
    @Query private var profiles: [UserProfile]
    @Environment(\.authService) private var authService
    @State private var showReconsent = false

    private var profile: UserProfile? { profiles.first }

    func body(content: Content) -> some View {
        content
            .onAppear { checkConsent() }
            .sheet(isPresented: $showReconsent) {
                LegalReconsentView {
                    showReconsent = false
                }
            }
    }

    private func checkConsent() {
        // Skip for guest users — they'll consent during sign-in
        guard authService.isAuthenticated else { return }
        guard let profile else { return }
        // Skip if user never consented (fresh profile — will consent during onboarding)
        guard !profile.legalConsentVersion.isEmpty else { return }
        // Show re-consent if version mismatch
        if profile.legalConsentVersion != LegalDocuments.currentVersion {
            showReconsent = true
        }
    }
}

extension View {
    func legalReconsent() -> some View {
        modifier(LegalReconsentModifier())
    }
}

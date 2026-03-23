import SwiftUI
import SwiftData

// MARK: - Legal Consent View

/// A full-screen consent gate shown when the user hasn't accepted the current legal policy version.
/// Displays Privacy Policy and Terms of Service in a tabbed glass card with staggered entrance
/// animations. Declining shows a confirmation alert; accepting records version + date on UserProfile.
struct LegalConsentView: View {
    /// VERSIONING CONVENTION: Always use minor increments (2.0 → 2.1 → 2.2), never major jumps.
    /// Bumping this re-prompts ALL users to re-accept. Keep in sync with:
    ///   - lumen-lingo-frontend/messages/en.json  (Legal.version)
    ///   - All AppStrings+*.swift locale files    (legalVersion)
    static let currentVersion = "2.0"

    @Environment(\.dismiss) private var dismiss
    @Environment(LocalizationManager.self) private var localization

    @Query private var profiles: [UserProfile]
    private var profile: UserProfile? { profiles.first }

    // Active tab: 0 = Privacy, 1 = Terms
    @State private var activeTab = 0

    // Entrance animation
    @State private var appeared = false
    @State private var animPhase = 0
    @State private var showDeclineAlert = false

    // Track whether user scrolled
    @State private var hasScrolled = false

    private var strings: AppStrings { localization.strings }

    var body: some View {
        ZStack {
            backgroundGradient

            VStack(spacing: 0) {
                headerSection
                tabPicker
                policyContent
                actionButtons
            }
        }
        .opacity(appeared ? 1 : 0)
        .onAppear {
            withAnimation(.easeOut(duration: 0.45)) {
                appeared = true
            }
            triggerEntrance()
        }
        .alert(strings.legalDeclineTitle, isPresented: $showDeclineAlert) {
            Button(strings.legalDeclineConfirm, role: .destructive) {
                // Dismiss without recording consent — app will stay gated
                dismiss()
            }
            Button("Cancel", role: .cancel) {}
        } message: {
            Text(strings.legalDeclineMessage)
        }
        .preferredColorScheme(.dark)
    }

    // MARK: - Entrance Animation

    private func triggerEntrance() {
        let delays: [Double] = [0.0, 0.12, 0.22, 0.35, 0.55]
        for (i, delay) in delays.enumerated() {
            let phase = i + 1
            DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
                withAnimation(.spring(duration: 0.5, bounce: 0.18)) {
                    animPhase = phase
                }
            }
        }
    }

    private func opacity(for phase: Int) -> Double {
        animPhase >= phase ? 1.0 : 0.0
    }

    private func offset(for phase: Int) -> CGFloat {
        animPhase >= phase ? 0 : 24
    }

    // MARK: - Background

    private var backgroundGradient: some View {
        ZStack {
            LinearGradient(
                colors: [
                    Color(red: 10/255, green: 8/255, blue: 32/255),
                    Color(red: 28/255, green: 12/255, blue: 62/255),
                    Color(red: 12/255, green: 8/255, blue: 38/255)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()

            // Subtle radial glow behind the card
            RadialGradient(
                colors: [
                    Color(red: 100/255, green: 60/255, blue: 220/255).opacity(0.12),
                    .clear
                ],
                center: .center,
                startRadius: 50,
                endRadius: 400
            )
            .ignoresSafeArea()
        }
    }

    // MARK: - Header

    private var headerSection: some View {
        VStack(spacing: 12) {
            // Shield icon with glow
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(red: 100/255, green: 126/255, blue: 234/255).opacity(0.3),
                                Color(red: 118/255, green: 75/255, blue: 162/255).opacity(0.1),
                                .clear
                            ],
                            center: .center,
                            startRadius: 10,
                            endRadius: 50
                        )
                    )
                    .frame(width: 90, height: 90)

                Image(systemName: "shield.checkered")
                    .font(.system(size: 38, weight: .light))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [
                                Color(red: 100/255, green: 126/255, blue: 234/255),
                                Color(red: 168/255, green: 85/255, blue: 247/255)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .symbolEffect(.pulse, options: .repeating.speed(0.4))
            }
            .opacity(opacity(for: 1))
            .offset(y: offset(for: 1))

            VStack(spacing: 6) {
                Text(strings.legalConsentTitle)
                    .font(.system(size: 28, weight: .bold, design: .rounded))
                    .foregroundStyle(.white)

                Text(strings.legalConsentSubtitle)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(.white.opacity(0.6))
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)

                HStack(spacing: 8) {
                    Text(strings.legalVersion)
                    Text("·")
                    Text(strings.legalLastUpdated)
                }
                .font(.system(size: 12, weight: .medium, design: .monospaced))
                .foregroundStyle(.white.opacity(0.35))
                .padding(.top, 2)
            }
            .opacity(opacity(for: 2))
            .offset(y: offset(for: 2))
        }
        .padding(.top, 20)
        .padding(.bottom, 8)
    }

    // MARK: - Tab Picker

    private var tabPicker: some View {
        HStack(spacing: 0) {
            tabButton(title: strings.privacyPolicyTitle, icon: "lock.shield.fill", index: 0)
            tabButton(title: strings.termsOfServiceTitle, icon: "doc.text.fill", index: 1)
        }
        .padding(4)
        .background(
            Capsule()
                .fill(.ultraThinMaterial)
                .overlay(
                    Capsule()
                        .stroke(.white.opacity(0.08), lineWidth: 1)
                )
        )
        .padding(.horizontal, 24)
        .padding(.bottom, 12)
        .opacity(opacity(for: 3))
        .offset(y: offset(for: 3))
    }

    private func tabButton(title: String, icon: String, index: Int) -> some View {
        Button {
            withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                activeTab = index
                hasScrolled = false
            }
        } label: {
            HStack(spacing: 6) {
                Image(systemName: icon)
                    .font(.system(size: 12, weight: .semibold))
                Text(title)
                    .font(.system(size: 13, weight: .semibold))
                    .lineLimit(1)
                    .minimumScaleFactor(0.75)
            }
            .foregroundStyle(activeTab == index ? .white : .white.opacity(0.4))
            .padding(.horizontal, 14)
            .padding(.vertical, 10)
            .frame(maxWidth: .infinity)
            .background(
                Group {
                    if activeTab == index {
                        Capsule()
                            .fill(
                                LinearGradient(
                                    colors: [
                                        Color(red: 100/255, green: 126/255, blue: 234/255).opacity(0.6),
                                        Color(red: 168/255, green: 85/255, blue: 247/255).opacity(0.4)
                                    ],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                    }
                }
            )
        }
        .buttonStyle(.plain)
    }

    // MARK: - Policy Content

    private var policyContent: some View {
        ScrollViewReader { proxy in
            ScrollView(.vertical, showsIndicators: true) {
                VStack(spacing: 16) {
                    if activeTab == 0 {
                        privacySection
                    } else {
                        termsSection
                    }

                    Color.clear.frame(height: 1).id("bottom")
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 16)
            }
            .onChange(of: activeTab) { _, _ in
                proxy.scrollTo("bottom", anchor: .bottom)
            }
        }
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(.ultraThinMaterial)
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .stroke(.white.opacity(0.06), lineWidth: 1)
                )
                .shadow(color: .black.opacity(0.3), radius: 20, y: 10)
        )
        .padding(.horizontal, 16)
        .opacity(opacity(for: 4))
        .offset(y: offset(for: 4))
    }

    // MARK: - Privacy Section

    private var privacySection: some View {
        VStack(alignment: .leading, spacing: 16) {
            // Summary
            Text(strings.legalPrivacySummary)
                .font(.system(size: 14, weight: .regular))
                .foregroundStyle(.white.opacity(0.75))
                .fixedSize(horizontal: false, vertical: true)

            Divider().background(.white.opacity(0.1))

            // Key highlights
            VStack(alignment: .leading, spacing: 12) {
                highlightRow(icon: "iphone", text: strings.legalPrivacyHighlight1, color: .cyan)
                highlightRow(icon: "shield.slash.fill", text: strings.legalPrivacyHighlight2, color: .green)
                highlightRow(icon: "ant.fill", text: strings.legalPrivacyHighlight3, color: .orange)
                highlightRow(icon: "hand.raised.fill", text: strings.legalPrivacyHighlight4, color: .pink)
            }

            Divider().background(.white.opacity(0.1))

            // Full policy link
            Link(destination: URL(string: "https://lumenlingo.com/en/privacy")!) {
                HStack(spacing: 6) {
                    Image(systemName: "arrow.up.right.square")
                        .font(.system(size: 13))
                    Text(strings.legalReadFull)
                        .font(.system(size: 13, weight: .medium))
                }
                .foregroundStyle(Color(red: 100/255, green: 126/255, blue: 234/255))
            }
        }
        .transition(.asymmetric(
            insertion: .move(edge: .trailing).combined(with: .opacity),
            removal: .move(edge: .leading).combined(with: .opacity)
        ))
    }

    // MARK: - Terms Section

    private var termsSection: some View {
        VStack(alignment: .leading, spacing: 16) {
            // Summary
            Text(strings.legalTermsSummary)
                .font(.system(size: 14, weight: .regular))
                .foregroundStyle(.white.opacity(0.75))
                .fixedSize(horizontal: false, vertical: true)

            Divider().background(.white.opacity(0.1))

            // Key highlights
            VStack(alignment: .leading, spacing: 12) {
                highlightRow(icon: "creditcard.fill", text: strings.legalTermsHighlight1, color: .purple)
                highlightRow(icon: "person.fill.checkmark", text: strings.legalTermsHighlight2, color: .cyan)
                highlightRow(icon: "chart.bar.fill", text: strings.legalTermsHighlight3, color: .orange)
                highlightRow(icon: "building.columns.fill", text: strings.legalTermsHighlight4, color: .blue)
            }

            Divider().background(.white.opacity(0.1))

            // Full terms link
            Link(destination: URL(string: "https://lumenlingo.com/en/terms")!) {
                HStack(spacing: 6) {
                    Image(systemName: "arrow.up.right.square")
                        .font(.system(size: 13))
                    Text(strings.legalReadFull)
                        .font(.system(size: 13, weight: .medium))
                }
                .foregroundStyle(Color(red: 100/255, green: 126/255, blue: 234/255))
            }
        }
        .transition(.asymmetric(
            insertion: .move(edge: .trailing).combined(with: .opacity),
            removal: .move(edge: .leading).combined(with: .opacity)
        ))
    }

    // MARK: - Highlight Row

    private func highlightRow(icon: String, text: String, color: Color) -> some View {
        HStack(alignment: .top, spacing: 12) {
            ZStack {
                Circle()
                    .fill(color.opacity(0.15))
                    .frame(width: 32, height: 32)

                Image(systemName: icon)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundStyle(color)
            }

            Text(text)
                .font(.system(size: 14, weight: .regular))
                .foregroundStyle(.white.opacity(0.85))
                .fixedSize(horizontal: false, vertical: true)
        }
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        VStack(spacing: 12) {
            // Accept button
            Button {
                acceptLegalPolicies()
            } label: {
                HStack(spacing: 8) {
                    Image(systemName: "checkmark.shield.fill")
                        .font(.system(size: 16, weight: .semibold))
                    Text(strings.legalAcceptAll)
                        .font(.system(size: 17, weight: .semibold))
                }
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 16)
                .background(
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 100/255, green: 126/255, blue: 234/255),
                                    Color(red: 168/255, green: 85/255, blue: 247/255)
                                ],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .shadow(color: Color(red: 100/255, green: 126/255, blue: 234/255).opacity(0.4), radius: 12, y: 4)
                )
            }
            .buttonStyle(LegalAcceptPressStyle())
            .padding(.horizontal, 32)

            // Decline button
            Button {
                showDeclineAlert = true
            } label: {
                Text(strings.legalDecline)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(.white.opacity(0.4))
            }
            .padding(.bottom, 4)
        }
        .padding(.top, 16)
        .padding(.bottom, 24)
        .opacity(opacity(for: 5))
        .offset(y: offset(for: 5))
    }

    // MARK: - Actions

    private func acceptLegalPolicies() {
        profile?.legalConsentVersion = Self.currentVersion
        profile?.legalConsentDate = Date()
        dismiss()
    }
}

// MARK: - Button Style

/// Subtle press animation for the accept CTA.
private struct LegalAcceptPressStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .opacity(configuration.isPressed ? 0.85 : 1.0)
            .animation(.spring(response: 0.25, dampingFraction: 0.7), value: configuration.isPressed)
    }
}

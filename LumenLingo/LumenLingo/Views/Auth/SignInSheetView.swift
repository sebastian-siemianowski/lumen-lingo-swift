import SwiftUI
import AuthenticationServices

// MARK: - Sign-in Sheet View

/// Full-screen sign-in sheet presented when the user is not authenticated.
/// Displays Apple, Google, and Phone/Email sign-in options over the cosmic background.
struct SignInSheetView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.authService) private var authService
    @Environment(ThemeManager.self) private var themeManager

    @State private var activeProvider: AuthProvider?
    @State private var logoOffset: CGFloat = 0
    @State private var toastMessage: String?
    @State private var toastDismissTask: Task<Void, Never>?

    // Welcome animation state (first launch only)
    @State private var showLogo = false
    @State private var showTagline = false
    @State private var showButtons = false
    @AppStorage("hasSeenWelcomeAnimation") private var hasSeenWelcome = false
    @AppStorage("lastSignInMethod") private var lastSignInMethod: String = ""
    @State private var safariURL: URL?
    @State private var showGuestConfirmation = false

    private var isDark: Bool { colorScheme == .dark }
    private var isReturningUser: Bool { !lastSignInMethod.isEmpty }
    private var preferredProvider: AuthProvider? { AuthProvider(rawValue: lastSignInMethod) }

    var body: some View {
        GeometryReader { geo in
            ZStack {
                // Cosmic nebula background
                Color.clear
                    .cosmicBackground(preset: .spiralHaloGalaxy)
                    .ignoresSafeArea()

                VStack(spacing: 0) {
                    Spacer()

                    // App logo & name
                    logoSection
                        .opacity(showLogo ? 1 : 0)
                        .offset(y: showLogo ? 0 : 20)

                    Spacer()

                    // Sign-in buttons
                    buttonSection(maxWidth: min(geo.size.width - 48, 360))
                        .opacity(showButtons ? 1 : 0)
                        .offset(y: showButtons ? 0 : 40)

                    // Terms notice
                    termsNotice
                        .padding(.top, 16)
                        .opacity(showButtons ? 1 : 0)

                    // Continue without account
                    offlineModeLink
                        .padding(.top, 24)
                        .padding(.bottom, 32)
                        .opacity(showButtons ? 1 : 0)
                }
                .padding(.horizontal, 24)

                // Error toast overlay
                VStack {
                    if let toastMessage {
                        errorToast(message: toastMessage)
                            .transition(.move(edge: .top).combined(with: .opacity))
                            .padding(.horizontal, 24)
                            .padding(.top, 8)
                            .onTapGesture { dismissToast() }
                    }
                    Spacer()
                }
            }
        }
        .onAppear {
            let reduceMotion = UIAccessibility.isReduceMotionEnabled
            let voiceOverActive = UIAccessibility.isVoiceOverRunning

            if !reduceMotion {
                withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
                    logoOffset = 4
                }
            }

            if hasSeenWelcome || voiceOverActive || reduceMotion {
                // Skip animation for returning users, VoiceOver, or Reduce Motion
                showLogo = true
                showTagline = true
                showButtons = true
            } else {
                // First launch — staggered entry
                withAnimation(.easeOut(duration: 0.8).delay(0.3)) {
                    showLogo = true
                }
                withAnimation(.easeOut(duration: 0.6).delay(1.2)) {
                    showTagline = true
                }
                withAnimation(.spring(response: 0.5, dampingFraction: 0.8).delay(1.8)) {
                    showButtons = true
                }
                hasSeenWelcome = true
            }
        }
        .onTapGesture {
            // Skip animation on tap
            if !showButtons {
                withAnimation(.easeOut(duration: 0.3)) {
                    showLogo = true
                    showTagline = true
                    showButtons = true
                }
            }
        }
    }

    // MARK: - Logo Section

    private var logoSection: some View {
        VStack(spacing: 8) {
            Image(systemName: "sparkles")
                .font(.system(size: 80, weight: .thin))
                .foregroundStyle(
                    LinearGradient(
                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .offset(y: -logoOffset)

            Text("LumenLingo")
                .font(.system(size: 28, weight: .bold, design: .rounded))
                .foregroundStyle(.white)

            Text("Learn languages through light")
                .font(.system(size: 16, weight: .regular))
                .foregroundStyle(.white.opacity(0.6))
        }
    }

    // MARK: - Buttons

    private func buttonSection(maxWidth: CGFloat) -> some View {
        VStack(spacing: 16) {
            if isReturningUser {
                Text("Welcome back")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundStyle(.white.opacity(0.6))
                    .padding(.bottom, 4)
            }

            // Sign in with Apple
            SignInWithAppleButton(.signIn) { request in
                request.requestedScopes = [.email, .fullName]
            } onCompletion: { _ in }
            .signInWithAppleButtonStyle(isDark ? .white : .black)
            .frame(maxWidth: maxWidth, minHeight: preferredProvider == .apple ? 56 : 50)
            .cornerRadius(12)
            .opacity(opacityForProvider(.apple))
            .disabled(activeProvider != nil)
            .overlay {
                Color.clear
                    .contentShape(Rectangle())
                    .onTapGesture {
                        UIImpactFeedbackGenerator(style: .light).impactOccurred()
                        signIn(with: .apple)
                    }
                    .disabled(activeProvider != nil)
            }
            .overlay(preferredGlow(for: .apple))
            .scaleEffect(activeProvider == .apple ? 0.96 : 1.0)
            .animation(.spring(response: 0.3, dampingFraction: 0.7), value: activeProvider)
            .accessibilityIdentifier("signInWithAppleButton")

            // Sign in with Google
            Button {
                UIImpactFeedbackGenerator(style: .light).impactOccurred()
                signIn(with: .google)
            } label: {
                HStack(spacing: 12) {
                    if activeProvider == .google {
                        ProgressView()
                            .tint(.black)
                            .scaleEffect(0.8)
                    } else {
                        Image(systemName: "globe")
                            .font(.system(size: 18, weight: .medium))
                    }
                    Text("Sign in with Google")
                        .font(.system(size: 17, weight: .medium))
                }
                .frame(maxWidth: maxWidth, minHeight: preferredProvider == .google ? 56 : 50)
                .background(Color.white)
                .foregroundStyle(.black)
                .clipShape(RoundedRectangle(cornerRadius: 12))
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.gray.opacity(0.3), lineWidth: 1)
                )
            }
            .buttonStyle(SignInPressStyle())
            .overlay(preferredGlow(for: .google))
            .opacity(opacityForProvider(.google))
            .disabled(activeProvider != nil)
            .accessibilityIdentifier("signInWithGoogleButton")

            // Sign in with Phone or Email
            Button {
                UIImpactFeedbackGenerator(style: .light).impactOccurred()
                signIn(with: .phone)
            } label: {
                HStack(spacing: 12) {
                    if activeProvider == .phone {
                        ProgressView()
                            .tint(.white)
                            .scaleEffect(0.8)
                    } else {
                        Image(systemName: "key.fill")
                            .font(.system(size: 16, weight: .medium))
                    }
                    Text("Sign in with Phone or Email")
                        .font(.system(size: 17, weight: .medium))
                }
                .frame(maxWidth: maxWidth, minHeight: preferredProvider == .phone ? 56 : 50)
                .foregroundStyle(.white)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(
                            LinearGradient(
                                colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                startPoint: .leading,
                                endPoint: .trailing
                            ),
                            lineWidth: 1.5
                        )
                )
            }
            .buttonStyle(SignInPressStyle())
            .overlay(preferredGlow(for: .phone))
            .opacity(opacityForProvider(.phone))
            .disabled(activeProvider != nil)
            .accessibilityIdentifier("signInWithPhoneButton")
        }
    }

    @ViewBuilder
    private func preferredGlow(for provider: AuthProvider) -> some View {
        if preferredProvider == provider {
            RoundedRectangle(cornerRadius: 12)
                .stroke(
                    LinearGradient(
                        colors: [Color(hex: "#667eea").opacity(0.6), Color(hex: "#764ba2").opacity(0.6)],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    lineWidth: 2
                )
                .allowsHitTesting(false)
        }
    }

    // MARK: - Terms & Offline

    private var termsNotice: some View {
        HStack(spacing: 0) {
            Text("By continuing, you agree to our ")
            Button("Terms") { safariURL = URL(string: "https://lumenlingo.app/terms") }
                .accessibilityLabel("Terms of Service, link")
            Text(" and ")
            Button("Privacy Policy") { safariURL = URL(string: "https://lumenlingo.app/privacy") }
                .accessibilityLabel("Privacy Policy, link")
            Text(".")
        }
        .font(.system(size: 12))
        .foregroundStyle(.white.opacity(0.4))
        .tint(.white.opacity(0.6))
        .multilineTextAlignment(.center)
        .sheet(item: $safariURL) { url in
            SafariView(url: url)
                .ignoresSafeArea()
        }
    }

    private var offlineModeLink: some View {
        Button {
            showGuestConfirmation = true
        } label: {
            Text("Continue without an account")
                .font(.system(size: 14))
                .foregroundStyle(.white.opacity(0.5))
        }
        .confirmationDialog(
            "Continue as Guest?",
            isPresented: $showGuestConfirmation,
            titleVisibility: .visible
        ) {
            Button("Continue as Guest") {
                continueAsGuest()
            }
            Button("Sign in instead", role: .cancel) {}
        } message: {
            Text("You'll have access to free features, but your progress won't sync across devices. You can sign in anytime from Settings.")
        }
        .accessibilityIdentifier("continueWithoutAccountButton")
    }

    // MARK: - Toast View

    private func errorToast(message: String) -> some View {
        HStack(spacing: 12) {
            // Red left accent bar
            RoundedRectangle(cornerRadius: 2)
                .fill(Color.red.opacity(0.8))
                .frame(width: 4)

            Image(systemName: "exclamationmark.circle.fill")
                .font(.system(size: 20))
                .foregroundStyle(.red.opacity(0.9))

            Text(message)
                .font(.system(size: 14))
                .foregroundStyle(.primary)
                .multilineTextAlignment(.leading)
                .frame(maxWidth: .infinity, alignment: .leading)
        }
        .padding(12)
        .frame(minHeight: 48)
        .background(.ultraThinMaterial)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .accessibilityElement(children: .combine)
        .accessibilityIdentifier("errorToast")
    }

    // MARK: - Actions

    private func signIn(with provider: AuthProvider) {
        guard activeProvider == nil else { return }

        dismissToast()

        withAnimation(.easeOut(duration: 0.2)) {
            activeProvider = provider
        }

        Task {
            do {
                switch provider {
                case .apple:
                    try await authService.signInWithApple()
                case .google:
                    guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
                          let rootVC = windowScene.windows.first?.rootViewController else {
                        throw AuthError.clerkError(underlying: "Unable to present sign-in")
                    }
                    try await authService.signInWithGoogle(presenting: rootVC)
                case .phone, .email:
                    // OTP flow — to be wired in Epic 5 stories
                    break
                }
                // Persist last successful sign-in method for returning users
                lastSignInMethod = provider.rawValue
            } catch AuthError.cancelled {
                // User cancelled — no toast
            } catch let error as AuthError {
                showToast(message: toastMessage(for: error))
            } catch {
                showToast(message: error.localizedDescription)
            }

            withAnimation(.easeOut(duration: 0.2)) {
                activeProvider = nil
            }
        }
    }

    private func showToast(message: String) {
        toastDismissTask?.cancel()
        withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
            toastMessage = message
        }
        // Auto-dismiss after 5 seconds
        toastDismissTask = Task {
            try? await Task.sleep(for: .seconds(5))
            guard !Task.isCancelled else { return }
            dismissToast()
        }
        // VoiceOver announcement
        UIAccessibility.post(notification: .announcement, argument: message)
    }

    private func dismissToast() {
        toastDismissTask?.cancel()
        toastDismissTask = nil
        withAnimation(.easeOut(duration: 0.3)) {
            toastMessage = nil
        }
    }

    private func toastMessage(for error: AuthError) -> String {
        switch error {
        case .networkUnavailable:
            "Connection issue. Please check your internet and try again."
        case .rateLimited:
            "Too many attempts. Please wait a few minutes."
        case .invalidOTP:
            "That code wasn't right. Please try again."
        case .expiredOTP:
            "Your code has expired. Please request a new one."
        case .accountConflict:
            "This account is linked to another profile. Try a different sign-in method."
        case .cancelled:
            ""
        default:
            error.localizedDescription
        }
    }

    private func opacityForProvider(_ provider: AuthProvider) -> Double {
        guard let active = activeProvider else { return 1.0 }
        return active == provider ? 1.0 : 0.3
    }

    private func continueAsGuest() {
        authService.continueAsGuest()
    }
}

// MARK: - Sign-in Press Button Style

/// Button style that scales to 0.96× on press and springs back.
private struct SignInPressStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .animation(.spring(response: 0.3, dampingFraction: 0.7), value: configuration.isPressed)
    }
}

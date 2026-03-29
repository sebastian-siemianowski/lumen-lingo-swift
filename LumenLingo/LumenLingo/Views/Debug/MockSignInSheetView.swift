#if DEBUG
import SwiftUI

/// Mock sign-in sheet for QA testing (Story 0.4).
/// Simulates all sign-in provider flows with configurable outcomes.
/// Will be replaced by real AuthSheetView in Epic 5.
struct MockSignInSheetView: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.colorScheme) private var colorScheme

    @State private var selectedProvider: AuthProvider?
    @State private var isLoading = false
    @State private var showOTPEntry = false
    @State private var otpCode = ""
    @State private var otpError: String?
    @State private var resultMessage: String?
    @State private var resultIsError = false
    @State private var showResult = false
    @State private var shakeOTP = false

    private var isDark: Bool { colorScheme == .dark }
    private let controller = DebugAuthController.shared

    var body: some View {
        NavigationStack {
            ZStack {
                backgroundGradient

                ScrollView {
                    VStack(spacing: 24) {
                        headerSection
                        providerButtons
                        if showOTPEntry { otpSection }
                        if showResult { resultBanner }
                    }
                    .padding(.horizontal, 24)
                    .padding(.top, 20)
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.7))
                }
            }
        }
        .presentationDetents([.large])
        .presentationDragIndicator(.visible)
    }

    // MARK: - Sections

    private var backgroundGradient: some View {
        LinearGradient(
            colors: isDark
                ? [.black, Color(white: 0.08)]
                : [Color(white: 0.97), .white],
            startPoint: .top,
            endPoint: .bottom
        )
        .ignoresSafeArea()
    }

    private var headerSection: some View {
        VStack(spacing: 8) {
            Image(systemName: "person.crop.circle.badge.plus")
                .font(.system(size: 44, weight: .thin))
                .foregroundStyle(
                    LinearGradient(colors: [.cyan, .purple], startPoint: .topLeading, endPoint: .bottomTrailing)
                )

            Text("Sign In")
                .font(.system(size: 28, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white : .primary)

            Text("Mock Sign-in · QA Testing")
                .font(.system(size: 13, weight: .medium, design: .rounded))
                .foregroundStyle(.secondary)

            // Active config badges
            HStack(spacing: 6) {
                configBadge("Outcome: \(controller.signInOutcome.label)", color: .purple)
                if controller.simulatedLatency > 0 {
                    configBadge("Delay: \(String(format: "%.1fs", controller.simulatedLatency))", color: .orange)
                }
            }
            .padding(.top, 4)
        }
    }

    private var providerButtons: some View {
        VStack(spacing: 12) {
            providerButton(.apple, icon: "apple.logo", label: "Sign in with Apple", style: .primary)
            providerButton(.google, icon: "globe", label: "Continue with Google", style: .secondary)

            HStack(spacing: 12) {
                providerButton(.phone, icon: "phone.fill", label: "Phone", style: .outline)
                providerButton(.email, icon: "envelope.fill", label: "Email", style: .outline)
            }

            // Continue without account
            Button {
                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                    controller.activeOverride = .guestMode
                    showOutcome(message: "Continuing as Guest", isError: false)
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { dismiss() }
            } label: {
                Text("Continue without account")
                    .font(.system(size: 13, weight: .medium, design: .rounded))
                    .foregroundStyle(.secondary)
                    .underline()
            }
            .buttonStyle(.plain)
            .padding(.top, 4)
        }
    }

    private var otpSection: some View {
        VStack(spacing: 16) {
            Text("Enter verification code")
                .font(.system(size: 16, weight: .semibold, design: .rounded))
                .foregroundStyle(isDark ? .white : .primary)

            Text("A mock code was sent to your \(selectedProvider == .phone ? "phone" : "email")")
                .font(.system(size: 13, weight: .regular, design: .rounded))
                .foregroundStyle(.secondary)

            // OTP cells
            HStack(spacing: 8) {
                ForEach(0..<6, id: \.self) { index in
                    let char = index < otpCode.count
                        ? String(otpCode[otpCode.index(otpCode.startIndex, offsetBy: index)])
                        : ""

                    Text(char)
                        .font(.system(size: 24, weight: .bold, design: .monospaced))
                        .frame(width: 44, height: 56)
                        .background(
                            RoundedRectangle(cornerRadius: 10, style: .continuous)
                                .fill(isDark ? .white.opacity(0.06) : .black.opacity(0.04))
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 10, style: .continuous)
                                .strokeBorder(
                                    otpError != nil ? .red.opacity(0.6) : (index == otpCode.count ? .cyan.opacity(0.6) : .clear),
                                    lineWidth: 1.5
                                )
                        )
                }
            }
            .offset(x: shakeOTP ? -8 : 0)

            // Hidden text field for input
            TextField("", text: $otpCode)
                .keyboardType(.numberPad)
                .frame(width: 1, height: 1)
                .opacity(0.01)
                .onChange(of: otpCode) { _, newValue in
                    // Limit to 6 digits
                    let filtered = String(newValue.filter(\.isNumber).prefix(6))
                    if filtered != newValue { otpCode = filtered }
                    if filtered.count == 6 { verifyOTP(filtered) }
                }

            if let otpError {
                Text(otpError)
                    .font(.system(size: 12, weight: .medium, design: .rounded))
                    .foregroundStyle(.red)
                    .transition(.opacity.combined(with: .scale(scale: 0.95)))
            }

            Text("Mock: Enter 000000 for success")
                .font(.system(size: 11, weight: .medium, design: .rounded))
                .foregroundStyle(.cyan.opacity(0.6))
                .padding(.top, 4)
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(isDark ? .white.opacity(0.04) : .black.opacity(0.02))
        )
        .transition(.asymmetric(
            insertion: .opacity.combined(with: .move(edge: .bottom)),
            removal: .opacity
        ))
    }

    private var resultBanner: some View {
        HStack(spacing: 8) {
            Image(systemName: resultIsError ? "xmark.circle.fill" : "checkmark.circle.fill")
                .font(.system(size: 16, weight: .semibold))
            Text(resultMessage ?? "")
                .font(.system(size: 13, weight: .semibold, design: .rounded))
        }
        .foregroundStyle(.white)
        .frame(maxWidth: .infinity)
        .padding(.vertical, 12)
        .padding(.horizontal, 16)
        .background(
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(resultIsError ? .red.opacity(0.8) : .green.opacity(0.8))
        )
        .transition(.asymmetric(
            insertion: .opacity.combined(with: .scale(scale: 0.9)),
            removal: .opacity
        ))
        .accessibilityLabel(resultIsError ? "Error: \(resultMessage ?? "")" : "Success: \(resultMessage ?? "")")
    }

    // MARK: - Provider Button

    private enum ButtonStyle { case primary, secondary, outline }

    private func providerButton(_ provider: AuthProvider, icon: String, label: String, style: ButtonStyle) -> some View {
        Button {
            handleProviderTap(provider)
        } label: {
            HStack(spacing: 8) {
                if isLoading && selectedProvider == provider {
                    ProgressView()
                        .tint(style == .primary ? .black : (isDark ? .white : .primary))
                        .scaleEffect(0.8)
                } else {
                    Image(systemName: icon)
                        .font(.system(size: 15, weight: .semibold))
                }
                Text(label)
                    .font(.system(size: 15, weight: .semibold, design: .rounded))
            }
            .foregroundStyle(buttonForeground(style))
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(buttonBackground(style))
            .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .strokeBorder(buttonBorder(style), lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
        .disabled(isLoading)
        .opacity(isLoading && selectedProvider != provider ? 0.5 : 1)
        .accessibilityLabel("Mock \(label)")
        .accessibilityHint("Simulates \(provider.displayName) sign-in with \(controller.signInOutcome.label) outcome")
    }

    private func buttonForeground(_ style: ButtonStyle) -> Color {
        switch style {
        case .primary: .black
        case .secondary: isDark ? .white : .primary
        case .outline: isDark ? .white.opacity(0.8) : .primary.opacity(0.8)
        }
    }

    private func buttonBackground(_ style: ButtonStyle) -> some ShapeStyle {
        switch style {
        case .primary: AnyShapeStyle(.white)
        case .secondary: AnyShapeStyle(isDark ? .white.opacity(0.1) : .black.opacity(0.06))
        case .outline: AnyShapeStyle(.clear)
        }
    }

    private func buttonBorder(_ style: ButtonStyle) -> Color {
        switch style {
        case .primary: .clear
        case .secondary: .clear
        case .outline: isDark ? .white.opacity(0.15) : .black.opacity(0.12)
        }
    }

    // MARK: - Flow Logic

    private func handleProviderTap(_ provider: AuthProvider) {
        let effectiveProvider = controller.signInProviderOverride ?? provider
        selectedProvider = effectiveProvider

        // Phone/Email → show OTP entry
        if effectiveProvider == .phone || effectiveProvider == .email {
            withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                showOTPEntry = true
                otpCode = ""
                otpError = nil
                showResult = false
            }
            return
        }

        // Apple/Google → direct sign-in simulation
        simulateDirectSignIn(provider: effectiveProvider)
    }

    private func simulateDirectSignIn(provider: AuthProvider) {
        isLoading = true
        showResult = false

        let delay = max(controller.simulatedLatency, 0.3)

        DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
            isLoading = false
            applyOutcome(provider: provider)
        }
    }

    private func verifyOTP(_ code: String) {
        isLoading = true
        let delay = max(controller.simulatedLatency, 0.2)

        DispatchQueue.main.asyncAfter(deadline: .now() + delay) {
            isLoading = false

            if code == "000000" {
                // Magic code → always success regardless of outcome picker
                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                    controller.activeOverride = .authenticated
                    showOutcome(message: "Signed in successfully", isError: false)
                    showOTPEntry = false
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { dismiss() }
            } else {
                // Apply the configured outcome for non-magic codes
                applyOTPOutcome()
            }
        }
    }

    private func applyOutcome(provider: AuthProvider) {
        switch controller.signInOutcome {
        case .successNew:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                controller.activeOverride = .authenticated
                showOutcome(message: "Welcome! New account created via \(provider.displayName)", isError: false)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { dismiss() }

        case .successReturning:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                controller.activeOverride = .authenticated
                showOutcome(message: "Welcome back, \(controller.mockUser.displayName)!", isError: false)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { dismiss() }

        case .networkError:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showOutcome(message: "Connection lost. Please check your network.", isError: true)
            }

        case .clerkUnavailable:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showOutcome(message: "Auth service unavailable. Try again later.", isError: true)
            }

        case .accountSuspended:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                controller.activeOverride = .accountSuspended
                showOutcome(message: "Account suspended. Contact support.", isError: true)
            }

        case .rateLimited:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showOutcome(message: "Too many attempts. Try again in 30 seconds.", isError: true)
            }

        case .invalidOTP:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showOutcome(message: "Invalid code. Please try again.", isError: true)
            }

        case .expiredOTP:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showOutcome(message: "Code expired. Request a new one.", isError: true)
            }

        case .slowResponse:
            // Already handled by simulatedLatency; show success after delay
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                controller.activeOverride = .authenticated
                showOutcome(message: "Signed in (slow response simulated)", isError: false)
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { dismiss() }

        case .accountConflict:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                showOutcome(message: "This \(provider.displayName) account is linked to another user.", isError: true)
            }
        }
    }

    private func applyOTPOutcome() {
        switch controller.signInOutcome {
        case .invalidOTP:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                otpError = "Invalid code. Please try again."
                triggerShake()
            }
        case .expiredOTP:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                otpError = "Code expired. Request a new one."
                triggerShake()
            }
        case .rateLimited:
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                otpError = "Too many attempts. Wait 30 seconds."
                triggerShake()
            }
        default:
            // For non-OTP-specific outcomes, show as result banner
            applyOutcome(provider: selectedProvider ?? .email)
        }
    }

    private func triggerShake() {
        withAnimation(.default.repeatCount(3, autoreverses: true).speed(6)) {
            shakeOTP = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
            shakeOTP = false
            otpCode = ""
        }
    }

    private func showOutcome(message: String, isError: Bool) {
        resultMessage = message
        resultIsError = isError
        showResult = true
    }

    private func configBadge(_ text: String, color: Color) -> some View {
        Text(text)
            .font(.system(size: 9, weight: .semibold, design: .rounded))
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .foregroundStyle(color)
            .background(
                Capsule()
                    .fill(color.opacity(0.12))
            )
    }
}

#Preview {
    MockSignInSheetView()
        .preferredColorScheme(.dark)
}
#endif

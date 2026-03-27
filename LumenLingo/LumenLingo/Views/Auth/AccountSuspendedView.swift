import SwiftUI

// MARK: - Account Suspended View

/// Displayed when a user's account has been suspended or deleted.
/// Prevents navigation to the main app — user must choose an action.
struct AccountSuspendedView: View {
    @Environment(\.authService) private var authService
    @Environment(\.colorScheme) private var colorScheme

    let reason: SessionExpiredReason
    @State private var showSignIn = false

    private var isDark: Bool { colorScheme == .dark }

    private var title: String {
        switch reason {
        case .accountSuspended:
            return "Your account has been suspended"
        case .accountDeleted:
            return "Your account has been deleted"
        default:
            return "Your session has ended"
        }
    }

    private var bodyText: String {
        switch reason {
        case .accountSuspended:
            return "If you believe this is a mistake, please contact our support team."
        case .accountDeleted:
            return "Your account data will be retained for 30 days. Contact support if this was accidental."
        default:
            return "Please sign in again to continue."
        }
    }

    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()

            VStack(spacing: 32) {
                Spacer()

                // Dimming orb icon
                Image(systemName: "moon.circle")
                    .font(.system(size: 80))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [.purple.opacity(0.6), .gray.opacity(0.4)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )

                VStack(spacing: 12) {
                    Text(title)
                        .font(.title2.weight(.semibold))
                        .foregroundStyle(.white)
                        .multilineTextAlignment(.center)

                    Text(bodyText)
                        .font(.body)
                        .foregroundStyle(.white.opacity(0.7))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 32)
                }

                Spacer()

                VStack(spacing: 16) {
                    if reason == .accountSuspended || reason == .accountDeleted {
                        Link(destination: URL(string: "mailto:support@lumenlingo.com")!) {
                            Label("Contact Support", systemImage: "envelope.fill")
                                .font(.headline)
                                .frame(maxWidth: .infinity)
                                .frame(height: 50)
                                .background(.ultraThinMaterial)
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                        }
                        .accessibilityLabel("Contact Support, opens email")
                    }

                    Button {
                        showSignIn = true
                    } label: {
                        Text("Sign in with a different account")
                            .font(.headline)
                            .frame(maxWidth: .infinity)
                            .frame(height: 50)
                            .background(
                                LinearGradient(
                                    colors: [.blue, .purple],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                )
                            )
                            .foregroundStyle(.white)
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    }
                    .accessibilityLabel("Sign in with a different account")
                }
                .padding(.horizontal, 24)
                .padding(.bottom, 48)
            }
        }
        .interactiveDismissDisabled()
        .sheet(isPresented: $showSignIn) {
            SignInSheetView()
        }
    }
}

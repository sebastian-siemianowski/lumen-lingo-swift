import SwiftUI

#if !PROD
struct DebugEnvironmentBanner: View {
    @State private var isDismissed = false

    private var config: EnvironmentConfig { .current }

    private var bannerColor: Color {
        switch config.environment {
        case .dev: .green
        case .qa: .blue
        case .uat: .orange
        case .preprod: .yellow
        case .prod: .clear
        }
    }

    private var textColor: Color {
        config.environment == .preprod ? .black : .white
    }

    var body: some View {
        if !isDismissed && !config.environment.isProduction {
            HStack(spacing: 6) {
                Circle()
                    .fill(bannerColor)
                    .frame(width: 8, height: 8)
                Text("\(config.environment.displayName.uppercased()) — \(config.apiBaseURL.host() ?? "")")
                    .font(.caption2)
                    .fontWeight(.semibold)
            }
            .foregroundStyle(textColor)
            .padding(.horizontal, 12)
            .padding(.vertical, 4)
            .background(bannerColor.opacity(0.85))
            .clipShape(Capsule())
            .onTapGesture { isDismissed = true }
        }
    }
}
#endif

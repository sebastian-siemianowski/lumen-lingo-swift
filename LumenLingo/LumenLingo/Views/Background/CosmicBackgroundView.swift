import SwiftUI

// MARK: - Cosmic Background Host

/// Full-quality port of React's CosmicBackground.jsx.
/// Single Metal view handles background gas, star fields, and post-processing in 3 GPU passes.
struct CosmicBackgroundView: View {
    let preset: NebulaPreset
    let intensity: Double
    let speed: Double

    var body: some View {
        MetalCosmicView(preset: preset, intensity: intensity, speed: speed)
            .ignoresSafeArea()
            .allowsHitTesting(false)
    }
}

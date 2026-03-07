import SwiftUI
import MetalKit

// ============================================================
// MARK: - MetalCosmicView
// SwiftUI ↔ Metal bridge wrapping MTKView with 3-pass cosmic renderer
// Replaces: MetalNebulaView + MicrostarFieldView + preset views + CosmicEffectsOverlay
// ============================================================

struct MetalCosmicView: UIViewRepresentable {
    let preset: NebulaPreset
    let intensity: Double
    let speed: Double
    
    func makeUIView(context: Context) -> MTKView {
        guard let device = MTLCreateSystemDefaultDevice() else {
            return MTKView()
        }
        
        let view = MTKView(frame: .zero, device: device)
        view.preferredFramesPerSecond = 30
        view.isPaused = false
        view.enableSetNeedsDisplay = false
        view.isOpaque = true
        view.backgroundColor = .black
        view.clearColor = MTLClearColor(red: 0.008, green: 0.004, blue: 0.02, alpha: 1)
        view.colorPixelFormat = .bgra8Unorm
        
        // Disable user interaction — passthrough to SwiftUI
        view.isUserInteractionEnabled = false
        
        let renderer = MetalCosmicRenderer(device: device)
        renderer.preset = preset
        renderer.intensity = Float(intensity)
        renderer.speed = Float(speed)
        view.delegate = renderer
        context.coordinator.renderer = renderer
        
        return view
    }
    
    func updateUIView(_ uiView: MTKView, context: Context) {
        guard let renderer = context.coordinator.renderer else { return }
        renderer.intensity = Float(intensity)
        renderer.speed = Float(speed)
        renderer.preset = preset // triggers star rebuild only on change
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }
    
    class Coordinator {
        var renderer: MetalCosmicRenderer?
    }
}

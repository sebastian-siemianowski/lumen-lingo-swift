import SwiftUI
import MetalKit

// ============================================================
// MARK: - MetalQuantumFlowView
// SwiftUI ↔ Metal bridge wrapping MTKView for Quantum Flow aurora.
// Follows the same pattern as MetalCosmicView.
// ============================================================

struct MetalQuantumFlowView: UIViewRepresentable {
    let scene: QuantumFlowScene
    let intensity: Double
    let speed: Double
    let isDarkMode: Bool
    var raveMode: Bool = false
    
    func makeUIView(context: Context) -> MTKView {
        guard let device = MTLCreateSystemDefaultDevice() else {
            return MTKView()
        }
        
        let view = MTKView(frame: .zero, device: device)
        view.preferredFramesPerSecond = 30
        view.isPaused = false
        view.enableSetNeedsDisplay = false
        view.isOpaque = false                     // transparent — composites over background layers
        view.backgroundColor = .clear
        view.clearColor = MTLClearColor(red: 0, green: 0, blue: 0, alpha: 0)
        view.colorPixelFormat = .bgra8Unorm
        
        // Cap at 2× scale — aurora curtains are soft/blurred so 3× is wasteful.
        // Reduces pixel count by ~56% on 3× displays for a large perf win.
        let maxScale = min(UIScreen.main.scale, 2.0)
        view.contentScaleFactor = maxScale
        
        // Disable user interaction — passthrough to SwiftUI
        view.isUserInteractionEnabled = false
        
        let renderer = MetalQuantumRenderer(device: device)
        renderer.sceneIndex = scene.metalIndex
        renderer.intensity = Float(intensity)
        renderer.speed = Float(speed)
        renderer.isDarkMode = isDarkMode
        renderer.raveMode = raveMode
        view.delegate = renderer
        context.coordinator.renderer = renderer
        
        return view
    }
    
    func updateUIView(_ uiView: MTKView, context: Context) {
        guard let renderer = context.coordinator.renderer else { return }
        renderer.sceneIndex = scene.metalIndex
        renderer.intensity = Float(intensity)
        renderer.speed = Float(speed)
        renderer.isDarkMode = isDarkMode
        renderer.raveMode = raveMode
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }
    
    class Coordinator {
        var renderer: MetalQuantumRenderer?
    }
}

import MetalKit
import simd

// ============================================================
// MARK: - MetalQuantumRenderer
// Single-pass Metal renderer for Quantum Flow aurora borealis.
// Draws a single fullscreen triangle with 12-curtain aurora in the
// fragment shader.  Follows the same architecture as MetalCosmicRenderer.
// ============================================================

final class MetalQuantumRenderer: NSObject, MTKViewDelegate {
    
    // MARK: - Device & Pipeline
    
    private let device: MTLDevice
    private let commandQueue: MTLCommandQueue
    private var pipeline: MTLRenderPipelineState?
    
    // Timing
    private let startTime = CACurrentMediaTime()
    
    // MARK: - Uniforms (driven by SwiftUI)
    
    var sceneIndex: Int = 0       // 0..5 matching QuantumFlowScene
    var intensity: Float = 1.0
    var speed: Float = 1.0
    var isDarkMode: Bool = true
    var raveMode: Bool = false
    
    // MARK: - Init
    
    init(device: MTLDevice) {
        self.device = device
        guard let queue = device.makeCommandQueue() else {
            fatalError("[MetalQuantumRenderer] Could not create command queue")
        }
        self.commandQueue = queue
        super.init()
        
        buildPipeline()
    }
    
    // MARK: - Pipeline Construction
    
    private func buildPipeline() {
        guard let library = device.makeDefaultLibrary() else {
            print("[MetalQuantumRenderer] No default Metal library")
            return
        }
        
        guard let vertexFn = library.makeFunction(name: "quantumFlowVertex"),
              let fragmentFn = library.makeFunction(name: "quantumFlowFragment") else {
            print("[MetalQuantumRenderer] Missing quantumFlowVertex/quantumFlowFragment shaders")
            return
        }
        
        let desc = MTLRenderPipelineDescriptor()
        desc.vertexFunction = vertexFn
        desc.fragmentFunction = fragmentFn
        desc.colorAttachments[0].pixelFormat = .bgra8Unorm
        
        // Premultiplied alpha blending — the shader outputs premultiplied RGBA.
        // This allows the MTKView to composite correctly over its background.
        desc.colorAttachments[0].isBlendingEnabled = true
        desc.colorAttachments[0].rgbBlendOperation = .add
        desc.colorAttachments[0].alphaBlendOperation = .add
        desc.colorAttachments[0].sourceRGBBlendFactor = .one          // premultiplied source
        desc.colorAttachments[0].destinationRGBBlendFactor = .oneMinusSourceAlpha
        desc.colorAttachments[0].sourceAlphaBlendFactor = .one
        desc.colorAttachments[0].destinationAlphaBlendFactor = .oneMinusSourceAlpha
        
        do {
            pipeline = try device.makeRenderPipelineState(descriptor: desc)
        } catch {
            print("[MetalQuantumRenderer] pipeline error: \(error)")
        }
    }
    
    // MARK: - MTKViewDelegate
    
    func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {
        // No additional state needed — resolution is passed per-frame
    }
    
    func draw(in view: MTKView) {
        guard let drawable = view.currentDrawable,
              let pipeline = pipeline else { return }
        
        let size = view.drawableSize
        let elapsed = Float(CACurrentMediaTime() - startTime)
        
        // Uniform buffer matching QuantumFlowUniforms in the shader
        var uniforms = QuantumFlowUniforms(
            time: elapsed,
            intensity: intensity,
            speed: speed,
            resolution: SIMD2<Float>(Float(size.width), Float(size.height)),
            sceneIndex: Int32(sceneIndex),
            isDarkMode: isDarkMode ? 1 : 0,
            raveMode: raveMode ? 1 : 0
        )
        
        guard let commandBuffer = commandQueue.makeCommandBuffer() else { return }
        
        let passDesc = MTLRenderPassDescriptor()
        passDesc.colorAttachments[0].texture = drawable.texture
        passDesc.colorAttachments[0].loadAction = .clear
        passDesc.colorAttachments[0].clearColor = MTLClearColor(red: 0, green: 0, blue: 0, alpha: 0) // transparent
        passDesc.colorAttachments[0].storeAction = .store
        
        guard let encoder = commandBuffer.makeRenderCommandEncoder(descriptor: passDesc) else {
            commandBuffer.commit()
            return
        }
        
        encoder.setRenderPipelineState(pipeline)
        encoder.setFragmentBytes(&uniforms, length: MemoryLayout<QuantumFlowUniforms>.stride, index: 0)
        encoder.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 3)
        
        encoder.endEncoding()
        commandBuffer.present(drawable)
        commandBuffer.commit()
    }
}

// MARK: - Uniform Struct (must match Metal QuantumFlowUniforms exactly)

struct QuantumFlowUniforms {
    var time: Float
    var intensity: Float
    var speed: Float
    var resolution: SIMD2<Float>
    var sceneIndex: Int32
    var isDarkMode: Int32
    var raveMode: Int32
}

// MARK: - QuantumFlowScene Metal Index

extension QuantumFlowScene {
    var metalIndex: Int {
        switch self {
        case .dubaiCelestialMirage:   return 0
        case .kyotoSacredTwilight:    return 1
        case .buenosAiresTangoFlame:  return 2
        case .hongKongHarbourDreams:  return 3
        case .marrakechSpiceReverie:  return 4
        case .viennaImperialWaltz:    return 5
        }
    }
}

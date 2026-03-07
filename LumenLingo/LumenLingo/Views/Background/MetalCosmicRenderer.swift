import MetalKit
import simd

// ============================================================
// MARK: - MetalCosmicRenderer
// Single-pass Metal renderer: one render encoder, 3 pipeline switches
// Phase 0: background (opaque)  Phase 1: stars (additive)  Phase 2: post-process (premultiplied α overlay)
// Replaces all SwiftUI Canvas star rendering and preset views
// ============================================================

final class MetalCosmicRenderer: NSObject, MTKViewDelegate {
    
    // MARK: - Device & Pipeline
    
    private let device: MTLDevice
    private let commandQueue: MTLCommandQueue
    
    // Pipeline states — all write to the same drawable in one render encoder
    private var bgPipelines: [Int: MTLRenderPipelineState] = [:]
    private var starPipeline: MTLRenderPipelineState?
    private var postPipeline: MTLRenderPipelineState?
    
    // Star buffer
    private var starBuffer: MTLBuffer?
    private var starCount: Int = 0
    
    // Timing
    private let startTime = CACurrentMediaTime()
    
    // MARK: - Uniforms (driven by SwiftUI)
    
    var preset: NebulaPreset = .lagoonNebula {
        didSet {
            if oldValue != preset {
                rebuildStars()
            }
        }
    }
    var intensity: Float = 1.0
    var speed: Float = 1.0
    
    // Background function names per preset
    private static let bgShaderNames: [(vertex: String, fragment: String)] = [
        ("lagoonBgVertex",      "lagoonBgFragment"),       // 0 lagoon
        ("celestialBgVertex",   "celestialBgFragment"),    // 1 celestial
        ("solarAuroraBgVertex", "solarAuroraBgFragment"),  // 2 solar
        ("spiralHaloBgVertex",  "spiralHaloBgFragment"),   // 3 spiral
        ("andromedaBgVertex",   "andromedaBgFragment"),    // 4 andromeda
        ("starburstBgVertex",   "starburstBgFragment"),    // 5 starburst
    ]
    
    // MARK: - Init
    
    init(device: MTLDevice) {
        self.device = device
        guard let queue = device.makeCommandQueue() else {
            fatalError("[MetalCosmicRenderer] Could not create command queue")
        }
        self.commandQueue = queue
        super.init()
        
        buildPipelines()
        rebuildStars()
    }
    
    // MARK: - Pipeline Construction
    
    private func buildPipelines() {
        guard let library = device.makeDefaultLibrary() else {
            print("[MetalCosmicRenderer] No default Metal library")
            return
        }
        
        // Build per-preset background pipelines (opaque — no blending)
        for (index, names) in Self.bgShaderNames.enumerated() {
            guard let vf = library.makeFunction(name: names.vertex),
                  let ff = library.makeFunction(name: names.fragment) else {
                print("[MetalCosmicRenderer] Missing bg shader: \(names)")
                continue
            }
            
            let desc = MTLRenderPipelineDescriptor()
            desc.vertexFunction = vf
            desc.fragmentFunction = ff
            desc.colorAttachments[0].pixelFormat = .bgra8Unorm
            desc.colorAttachments[0].isBlendingEnabled = false
            
            do {
                bgPipelines[index] = try device.makeRenderPipelineState(descriptor: desc)
            } catch {
                print("[MetalCosmicRenderer] bg pipeline[\(index)] error: \(error)")
            }
        }
        
        // Star pipeline (instanced, fully additive — stars output premultiplied alpha)
        if let sv = library.makeFunction(name: "cosmicStarVertex"),
           let sf = library.makeFunction(name: "cosmicStarFragment") {
            let desc = MTLRenderPipelineDescriptor()
            desc.vertexFunction = sv
            desc.fragmentFunction = sf
            desc.colorAttachments[0].pixelFormat = .bgra8Unorm
            desc.colorAttachments[0].isBlendingEnabled = true
            desc.colorAttachments[0].rgbBlendOperation = .add
            desc.colorAttachments[0].alphaBlendOperation = .add
            desc.colorAttachments[0].sourceRGBBlendFactor = .one        // premultiplied src
            desc.colorAttachments[0].destinationRGBBlendFactor = .one   // additive
            desc.colorAttachments[0].sourceAlphaBlendFactor = .one
            desc.colorAttachments[0].destinationAlphaBlendFactor = .one
            
            do {
                starPipeline = try device.makeRenderPipelineState(descriptor: desc)
            } catch {
                print("[MetalCosmicRenderer] star pipeline error: \(error)")
            }
        }
        
        // Post-process pipeline (premultiplied alpha overlay — no texture read)
        // Blend: result = src.rgb * 1 + dst.rgb * (1 - src.a)
        // Vignette: dark color × alpha darkens existing via (1 - alpha)
        // Bloom/clarity: additive light baked into src.rgb
        if let pv = library.makeFunction(name: "cosmicPostVertex"),
           let pf = library.makeFunction(name: "cosmicPostFragment") {
            let desc = MTLRenderPipelineDescriptor()
            desc.vertexFunction = pv
            desc.fragmentFunction = pf
            desc.colorAttachments[0].pixelFormat = .bgra8Unorm
            desc.colorAttachments[0].isBlendingEnabled = true
            desc.colorAttachments[0].rgbBlendOperation = .add
            desc.colorAttachments[0].alphaBlendOperation = .add
            desc.colorAttachments[0].sourceRGBBlendFactor = .one                    // premultiplied
            desc.colorAttachments[0].destinationRGBBlendFactor = .oneMinusSourceAlpha
            desc.colorAttachments[0].sourceAlphaBlendFactor = .one
            desc.colorAttachments[0].destinationAlphaBlendFactor = .oneMinusSourceAlpha
            
            do {
                postPipeline = try device.makeRenderPipelineState(descriptor: desc)
            } catch {
                print("[MetalCosmicRenderer] post pipeline error: \(error)")
            }
        }
    }
    
    // MARK: - Star Buffer
    
    private func rebuildStars() {
        let stars = StarFieldGenerator.generateStars(for: preset)
        starCount = stars.count
        
        guard starCount > 0 else { return }
        
        starBuffer = device.makeBuffer(
            bytes: stars,
            length: MemoryLayout<StarData>.stride * starCount,
            options: .storageModeShared
        )
    }
    
    // MARK: - MTKViewDelegate
    
    func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {
        // No offscreen texture needed — single pass renders directly to drawable
    }
    
    func draw(in view: MTKView) {
        guard let drawable = view.currentDrawable else { return }
        
        let size = view.drawableSize
        let resolution = SIMD2<Float>(Float(size.width), Float(size.height))
        let elapsed = Float(CACurrentMediaTime() - startTime)
        let presetIdx = preset.metalIndex
        
        guard let commandBuffer = commandQueue.makeCommandBuffer() else { return }
        
        // Single render pass descriptor — writes directly to drawable
        let passDesc = MTLRenderPassDescriptor()
        passDesc.colorAttachments[0].texture = drawable.texture
        passDesc.colorAttachments[0].loadAction = .clear
        passDesc.colorAttachments[0].clearColor = MTLClearColor(red: 0.008, green: 0.004, blue: 0.02, alpha: 1)
        passDesc.colorAttachments[0].storeAction = .store
        
        guard let encoder = commandBuffer.makeRenderCommandEncoder(descriptor: passDesc) else {
            commandBuffer.commit()
            return
        }
        
        // ---- Phase 0: Background (opaque fullscreen triangle) ----
        if let bgPipeline = bgPipelines[presetIdx] {
            var uniforms = CosmicUniforms(
                time: elapsed,
                intensity: intensity,
                speed: speed,
                resolution: resolution,
                presetIndex: Int32(presetIdx)
            )
            
            encoder.setRenderPipelineState(bgPipeline)
            encoder.setFragmentBytes(&uniforms, length: MemoryLayout<CosmicUniforms>.stride, index: 0)
            encoder.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 3)
        }
        
        // ---- Phase 1: Stars (additive instanced quads) ----
        if let starPipe = starPipeline,
           let starBuf = starBuffer,
           starCount > 0 {
            var starUniforms = StarUniforms(
                time: elapsed,
                intensity: intensity,
                speed: speed,
                resolution: resolution,
                cameraDrift: cameraOffset(time: elapsed, preset: preset),
                globalRotation: elapsed * speed * 0.001,
                globalBreathing: sin(elapsed * speed * 0.15) * 0.02,
                presetIndex: Int32(presetIdx)
            )
            
            encoder.setRenderPipelineState(starPipe)
            encoder.setVertexBuffer(starBuf, offset: 0, index: 0)
            encoder.setVertexBytes(&starUniforms, length: MemoryLayout<StarUniforms>.stride, index: 1)
            encoder.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 6, instanceCount: starCount)
        }
        
        // ---- Phase 2: Post-process (premultiplied alpha overlay) ----
        if let postPipe = postPipeline {
            var postUniforms = PostProcessUniforms(
                resolution: resolution,
                intensity: intensity,
                presetIndex: Int32(presetIdx)
            )
            
            encoder.setRenderPipelineState(postPipe)
            encoder.setFragmentBytes(&postUniforms, length: MemoryLayout<PostProcessUniforms>.stride, index: 0)
            encoder.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 3)
        }
        
        encoder.endEncoding()
        
        commandBuffer.present(drawable)
        commandBuffer.commit()
    }
    
    // MARK: - Camera Drift (per-preset)
    
    private func cameraOffset(time t: Float, preset: NebulaPreset) -> SIMD2<Float> {
        // React uses CSS pixels on retina → multiply by ~3 for real pixel equivalence.
        // Lagoon React: camX = sin(elapsed*0.03)*15, camY = cos(elapsed*0.025)*12
        // On 3× display → 45px, 36px. Use speed-scaled time for responsiveness.
        let st = t * speed  // speed-responsive
        switch preset {
        case .lagoonNebula:
            return SIMD2(sin(st * 0.08) * 85, cos(st * 0.06) * 65)
        case .celestialLagoon:
            return SIMD2(sin(st * 0.06) * 70, cos(st * 0.05) * 55)
        case .solarAurora:
            return SIMD2(sin(st * 0.07) * 100, cos(st * 0.08) * 45)
        case .spiralHaloGalaxy:
            return SIMD2(sin(st * 0.045) * 55, cos(st * 0.055) * 55)
        case .edgeOfAndromeda:
            return SIMD2(sin(st * 0.06) * 80, cos(st * 0.045) * 35)
        case .starburstRing:
            return SIMD2(sin(st * 0.05) * 65, cos(st * 0.06) * 65)
        }
    }
}

// MARK: - Uniform Structs (must match Metal exactly)

struct CosmicUniforms {
    var time: Float
    var intensity: Float
    var speed: Float
    var resolution: SIMD2<Float>
    var presetIndex: Int32
}

struct StarUniforms {
    var time: Float
    var intensity: Float
    var speed: Float
    var resolution: SIMD2<Float>
    var cameraDrift: SIMD2<Float>
    var globalRotation: Float
    var globalBreathing: Float
    var presetIndex: Int32
}

struct PostProcessUniforms {
    var resolution: SIMD2<Float>
    var intensity: Float
    var presetIndex: Int32
}

// MARK: - Preset Metal Index

extension NebulaPreset {
    var metalIndex: Int {
        switch self {
        case .lagoonNebula: return 0
        case .celestialLagoon: return 1
        case .solarAurora: return 2
        case .spiralHaloGalaxy: return 3
        case .edgeOfAndromeda: return 4
        case .starburstRing: return 5
        }
    }
}

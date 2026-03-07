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
    private var starPipelines: [Int: MTLRenderPipelineState] = [:]
    private var postPipeline: MTLRenderPipelineState?
    
    // Per-preset star systems — each preset has its own independent buffer & timing
    private struct StarSystem {
        var buffer: MTLBuffer?
        var count: Int = 0
        var birthTime: Double  // independent timeline per preset
    }
    private var starSystems: [Int: StarSystem] = [:]
    
    // Timing
    private let startTime = CACurrentMediaTime()
    
    // MARK: - Uniforms (driven by SwiftUI)
    
    var preset: NebulaPreset = .lagoonNebula
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
    
    // Per-preset star vertex shader names (each file has its own vertex function)
    private static let starVertexNames: [String] = [
        "lagoonStarVertex",       // 0 lagoon
        "celestialStarVertex",    // 1 celestial
        "solarAuroraStarVertex",  // 2 solar aurora
        "spiralHaloStarVertex",   // 3 spiral halo
        "andromedaStarVertex",    // 4 andromeda
        "starburstStarVertex",    // 5 starburst ring
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
        buildAllStarSystems()
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
        
        // Build per-preset star pipelines (each preset has its own vertex shader)
        guard let starFrag = library.makeFunction(name: "cosmicStarFragment") else {
            print("[MetalCosmicRenderer] Missing cosmicStarFragment shader")
            return
        }
        for (index, vertexName) in Self.starVertexNames.enumerated() {
            guard let starVert = library.makeFunction(name: vertexName) else {
                print("[MetalCosmicRenderer] Missing star vertex shader: \(vertexName)")
                continue
            }
            let desc = MTLRenderPipelineDescriptor()
            desc.vertexFunction = starVert
            desc.fragmentFunction = starFrag
            desc.colorAttachments[0].pixelFormat = .bgra8Unorm
            desc.colorAttachments[0].isBlendingEnabled = true
            desc.colorAttachments[0].rgbBlendOperation = .add
            desc.colorAttachments[0].alphaBlendOperation = .add
            desc.colorAttachments[0].sourceRGBBlendFactor = .one        // premultiplied src
            desc.colorAttachments[0].destinationRGBBlendFactor = .one   // additive
            desc.colorAttachments[0].sourceAlphaBlendFactor = .one
            desc.colorAttachments[0].destinationAlphaBlendFactor = .one
            
            do {
                starPipelines[index] = try device.makeRenderPipelineState(descriptor: desc)
            } catch {
                print("[MetalCosmicRenderer] star pipeline[\(index)] error: \(error)")
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
    
    // MARK: - Star Systems (one per preset, all independent)
    
    private func buildAllStarSystems() {
        let now = CACurrentMediaTime()
        for p in NebulaPreset.allCases {
            let idx = p.metalIndex
            let stars = StarFieldGenerator.generateStars(for: p)
            var system = StarSystem(birthTime: now)
            system.count = stars.count
            if stars.count > 0 {
                system.buffer = device.makeBuffer(
                    bytes: stars,
                    length: MemoryLayout<StarData>.stride * stars.count,
                    options: .storageModeShared
                )
            }
            starSystems[idx] = system
        }
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
        let starSystem = starSystems[presetIdx]
        let starElapsed = Float(CACurrentMediaTime() - (starSystem?.birthTime ?? startTime))
        
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
        if let starPipe = starPipelines[presetIdx],
           let system = starSystem,
           let starBuf = system.buffer,
           system.count > 0 {
            var starUniforms = StarUniforms(
                time: starElapsed,
                intensity: intensity,
                speed: speed,
                resolution: resolution,
                cameraDrift: cameraOffset(time: starElapsed, preset: preset),
                globalRotation: starElapsed * speed * 0.003,
                globalBreathing: sin(starElapsed * speed * 0.3) * 0.025,
                presetIndex: Int32(presetIdx)
            )
            
            encoder.setRenderPipelineState(starPipe)
            encoder.setVertexBuffer(starBuf, offset: 0, index: 0)
            encoder.setVertexBytes(&starUniforms, length: MemoryLayout<StarUniforms>.stride, index: 1)
            encoder.drawPrimitives(type: .triangle, vertexStart: 0, vertexCount: 6, instanceCount: system.count)
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
            return SIMD2(sin(st * 0.05) * 110 + sin(st * 0.14) * 20,
                         cos(st * 0.04) *  85 + cos(st * 0.11) * 15)
        case .celestialLagoon:
            return SIMD2(sin(st * 0.04) *  90 + sin(st * 0.11) * 16,
                         cos(st * 0.035) * 70 + cos(st * 0.10) * 12)
        case .solarAurora:
            return SIMD2(sin(st * 0.045) * 120 + sin(st * 0.13) * 22,
                         cos(st * 0.05)  *  55 + cos(st * 0.14) * 12)
        case .spiralHaloGalaxy:
            return SIMD2(sin(st * 0.03) *  70 + sin(st * 0.09) * 14,
                         cos(st * 0.035) * 70 + cos(st * 0.10) * 14)
        case .edgeOfAndromeda:
            return SIMD2(sin(st * 0.04) * 100 + sin(st * 0.12) * 18,
                         cos(st * 0.03) *  45 + cos(st * 0.09) * 10)
        case .starburstRing:
            return SIMD2(sin(st * 0.035) * 80 + sin(st * 0.10) * 16,
                         cos(st * 0.04)  * 80 + cos(st * 0.11) * 16)
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

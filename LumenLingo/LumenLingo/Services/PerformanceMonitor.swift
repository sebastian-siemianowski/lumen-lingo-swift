#if DEBUG
import Foundation
import QuartzCore

// MARK: - Performance Monitor

@MainActor
@Observable
final class PerformanceMonitor {
    static let shared = PerformanceMonitor()

    var fps: Int = 0
    var memoryMB: Double = 0

    private var displayLink: CADisplayLink?
    private var lastTimestamp: CFTimeInterval = 0
    private var frameCount: Int = 0

    private init() {}

    func start() {
        guard displayLink == nil else { return }
        let link = CADisplayLink(target: DisplayLinkTarget(monitor: self), selector: #selector(DisplayLinkTarget.tick(_:)))
        link.add(to: .main, forMode: .common)
        displayLink = link
    }

    func stop() {
        displayLink?.invalidate()
        displayLink = nil
    }

    fileprivate func handleTick(_ timestamp: CFTimeInterval) {
        frameCount += 1
        let elapsed = timestamp - lastTimestamp
        if elapsed >= 1.0 {
            fps = Int(Double(frameCount) / elapsed)
            frameCount = 0
            lastTimestamp = timestamp
            memoryMB = currentMemoryMB()
        }
    }

    private func currentMemoryMB() -> Double {
        var info = mach_task_basic_info()
        var count = mach_msg_type_number_t(MemoryLayout<mach_task_basic_info>.size) / 4
        let result = withUnsafeMutablePointer(to: &info) {
            $0.withMemoryRebound(to: integer_t.self, capacity: Int(count)) {
                task_info(mach_task_self_, task_flavor_t(MACH_TASK_BASIC_INFO), $0, &count)
            }
        }
        return result == KERN_SUCCESS ? Double(info.resident_size) / 1_048_576 : 0
    }
}

/// Bridging class for CADisplayLink target (avoids retain cycle with @Observable).
private class DisplayLinkTarget: NSObject, @unchecked Sendable {
    weak var monitor: PerformanceMonitor?

    init(monitor: PerformanceMonitor) {
        self.monitor = monitor
    }

    @objc func tick(_ link: CADisplayLink) {
        let timestamp = link.timestamp
        let monitor = self.monitor
        MainActor.assumeIsolated {
            monitor?.handleTick(timestamp)
        }
    }
}
#endif

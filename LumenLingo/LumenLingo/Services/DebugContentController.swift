#if DEBUG
import Foundation

// MARK: - Debug Content Controller

@MainActor
@Observable
final class DebugContentController {
    static let shared = DebugContentController()

    /// Thread-safe storage for ContentLoader access from any queue.
    nonisolated(unsafe) static var forceEmptyFlag = false
    nonisolated(unsafe) static var forceSlowFlag = false

    var forceEmpty: Bool = false {
        didSet { Self.forceEmptyFlag = forceEmpty }
    }

    var forceSlowLoad: Bool = false {
        didSet { Self.forceSlowFlag = forceSlowLoad }
    }

    var isSimulating: Bool { forceEmpty || forceSlowLoad }

    private init() {}
}
#endif

#if DEBUG
import Foundation

// MARK: - Network Simulation Mode

enum NetworkSimulationMode: String, CaseIterable {
    case normal = "Normal"
    case offline = "Offline"
    case slow = "Slow (2G)"
    case intermittent = "Intermittent"

    var statusLabel: String {
        switch self {
        case .normal: return ""
        case .offline: return "🔴 Offline"
        case .slow: return "🟡 Slow"
        case .intermittent: return "🟠 Intermittent"
        }
    }

    var bannerLabel: String {
        switch self {
        case .normal: return ""
        case .offline: return "SIMULATING: OFFLINE"
        case .slow: return "SIMULATING: SLOW NETWORK"
        case .intermittent: return "SIMULATING: INTERMITTENT"
        }
    }
}

// MARK: - Debug Network Controller

@MainActor
@Observable
final class DebugNetworkController {
    static let shared = DebugNetworkController()

    /// Thread-safe storage for URLProtocol access from any queue.
    nonisolated(unsafe) static var currentMode: NetworkSimulationMode = .normal

    var simulationMode: NetworkSimulationMode = .normal {
        didSet { Self.currentMode = simulationMode }
    }

    var isSimulating: Bool { simulationMode != .normal }

    private init() {}
}
#endif

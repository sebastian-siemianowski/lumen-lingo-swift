import Foundation
import Network

/// Shared connectivity monitor using NWPathMonitor.
/// Injected via `.environment(networkMonitor)` and read with `@Environment(NetworkMonitor.self)`.
@Observable
final class NetworkMonitor {

    // MARK: - Published State

    /// True when the device has a satisfied network path (Wi-Fi, cellular, etc.)
    private(set) var isConnected: Bool = true

    /// True when connectivity is via Wi-Fi (vs cellular).
    private(set) var isExpensive: Bool = false

    // MARK: - Private

    private let monitor = NWPathMonitor()
    private let queue = DispatchQueue(label: "com.lumenlingo.networkmonitor", qos: .utility)

    // MARK: - Lifecycle

    init() {
        monitor.pathUpdateHandler = { [weak self] path in
            DispatchQueue.main.async {
                self?.isConnected = path.status == .satisfied
                self?.isExpensive = path.isExpensive
            }
        }
        monitor.start(queue: queue)
    }

    deinit {
        monitor.cancel()
    }
}

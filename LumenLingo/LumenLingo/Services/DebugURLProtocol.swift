#if DEBUG
import Foundation

// MARK: - Debug URL Protocol

/// Intercepts network requests to simulate degraded network conditions.
/// Only active when `DebugNetworkController.currentMode != .normal`.
/// Does NOT intercept during Xcode Previews or unit tests.
final class DebugURLProtocol: URLProtocol {
    private var dataTask: URLSessionDataTask?

    private static let forwardingSession: URLSession = {
        let config = URLSessionConfiguration.ephemeral
        return URLSession(configuration: config)
    }()

    override class func canInit(with request: URLRequest) -> Bool {
        // Skip in previews
        if ProcessInfo.processInfo.environment["XCODE_RUNNING_FOR_PREVIEWS"] == "1" {
            return false
        }
        return DebugNetworkController.currentMode != .normal
    }

    override class func canonicalRequest(for request: URLRequest) -> URLRequest {
        request
    }

    override func startLoading() {
        let mode = DebugNetworkController.currentMode

        switch mode {
        case .normal:
            // Should not reach here; canInit returns false for .normal
            forwardRequest()

        case .offline:
            client?.urlProtocol(self, didFailWithError: URLError(.notConnectedToInternet))

        case .slow:
            DispatchQueue.global().asyncAfter(deadline: .now() + Double.random(in: 3...5)) { [weak self] in
                self?.forwardRequest()
            }

        case .intermittent:
            if Double.random(in: 0...1) < 0.4 {
                client?.urlProtocol(self, didFailWithError: URLError(.networkConnectionLost))
            } else {
                forwardRequest()
            }
        }
    }

    override func stopLoading() {
        dataTask?.cancel()
    }

    // MARK: - Request Forwarding

    private func forwardRequest() {
        dataTask = Self.forwardingSession.dataTask(with: request) { [weak self] data, response, error in
            guard let self else { return }
            if let error {
                self.client?.urlProtocol(self, didFailWithError: error)
                return
            }
            if let response {
                self.client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)
            }
            if let data {
                self.client?.urlProtocol(self, didLoad: data)
            }
            self.client?.urlProtocolDidFinishLoading(self)
        }
        dataTask?.resume()
    }
}
#endif

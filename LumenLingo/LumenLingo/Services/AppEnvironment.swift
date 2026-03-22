import Foundation
import os

// MARK: - AppEnvironment

enum AppEnvironment: String, Sendable {
    case dev
    case qa
    case uat
    case preprod
    case prod

    var displayName: String {
        switch self {
        case .dev: "Development"
        case .qa: "QA"
        case .uat: "UAT"
        case .preprod: "Pre-Production"
        case .prod: "Production"
        }
    }

    var isProduction: Bool { self == .prod }
}

// MARK: - LogLevel

enum LogLevel: String, Sendable, Comparable {
    case verbose
    case debug
    case info
    case warning
    case error

    private var rank: Int {
        switch self {
        case .verbose: 0
        case .debug: 1
        case .info: 2
        case .warning: 3
        case .error: 4
        }
    }

    static func < (lhs: LogLevel, rhs: LogLevel) -> Bool {
        lhs.rank < rhs.rank
    }
}

// MARK: - EnvironmentConfig

struct EnvironmentConfig: Sendable {
    let environment: AppEnvironment
    let apiBaseURL: URL
    let logLevel: LogLevel
    let bundleIdentifier: String
    let displayName: String

    var isDebugBuild: Bool {
        #if DEBUG
        return true
        #else
        return false
        #endif
    }

    static let current: EnvironmentConfig = {
        let info = Bundle.main.infoDictionary ?? [:]

        let envString = info["LLEnvironment"] as? String ?? "dev"
        let environment = AppEnvironment(rawValue: envString) ?? .dev

        let urlString = info["LLApiBaseURL"] as? String ?? "https://api-dev.lumenlingo.com"
        let apiBaseURL = URL(string: urlString) ?? URL(string: "https://api-dev.lumenlingo.com")!

        let logString = info["LLLogLevel"] as? String ?? "verbose"
        let logLevel = LogLevel(rawValue: logString) ?? .verbose

        let bundleId = Bundle.main.bundleIdentifier ?? "com.lumenlingo.app.dev"
        let name = info["CFBundleDisplayName"] as? String
            ?? info["CFBundleName"] as? String
            ?? "LumenLingo"

        return EnvironmentConfig(
            environment: environment,
            apiBaseURL: apiBaseURL,
            logLevel: logLevel,
            bundleIdentifier: bundleId,
            displayName: name
        )
    }()
}

// MARK: - Log

enum Log {
    private static let logger = Logger(
        subsystem: EnvironmentConfig.current.bundleIdentifier,
        category: "App"
    )
    private static let minimumLevel = EnvironmentConfig.current.logLevel

    static func verbose(_ message: String) {
        guard .verbose >= minimumLevel else { return }
        logger.trace("\(message, privacy: .public)")
    }

    static func debug(_ message: String) {
        guard .debug >= minimumLevel else { return }
        logger.debug("\(message, privacy: .public)")
    }

    static func info(_ message: String) {
        guard .info >= minimumLevel else { return }
        logger.info("\(message, privacy: .public)")
    }

    static func warning(_ message: String) {
        guard .warning >= minimumLevel else { return }
        logger.warning("\(message, privacy: .public)")
    }

    static func error(_ message: String) {
        logger.error("\(message, privacy: .public)")
    }
}

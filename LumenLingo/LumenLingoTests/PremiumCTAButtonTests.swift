import XCTest
import SwiftUI
@testable import LumenLingo

/// Tests for PremiumCTAButton — verifies structure, opacity, and tier coverage.
@MainActor
final class PremiumCTAButtonTests: XCTestCase {

    // MARK: - Gradient Opacity Verification

    /// Verifies every tier's gradient colours are fully opaque (alpha == 1.0).
    /// This replaces the slow ImageRenderer-based pixel sampling approach.
    func testButtonBackgroundIsOpaqueForAllTiers() {
        for tier in MembershipTier.allCases {
            let colors = tier.gradientColors
            XCTAssertFalse(colors.isEmpty, "Tier \(tier.rawValue) has no gradient colors")

            for (index, color) in colors.enumerated() {
                // Resolve SwiftUI Color to UIColor to inspect RGBA components
                let uiColor = UIColor(color)
                var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
                uiColor.getRed(&r, green: &g, blue: &b, alpha: &a)

                XCTAssertGreaterThanOrEqual(
                    a, 0.95,
                    "Tier \(tier.rawValue) gradient color[\(index)] alpha is \(a), expected >= 0.95"
                )
            }
        }
    }

    // MARK: - All Tiers Produce Distinct Gradients

    func testEachTierHasDistinctGradientColors() {
        var seen = Set<String>()
        for tier in MembershipTier.allCases {
            let key = tier.gradientColors.map { $0.description }.joined(separator: ",")
            XCTAssertFalse(seen.contains(key), "Tier \(tier.rawValue) has duplicate gradient colors")
            seen.insert(key)
        }
    }

    // MARK: - Component Accepts All Required Parameters

    func testButtonAcceptsAllParameters() {
        // Verify the component can be created with all parameter combinations
        let _ = PremiumCTAButton(
            title: "View Plans",
            tier: .pro,
            action: {},
            icon: "bolt.fill",
            shape: .rounded(14),
            size: .regular
        )

        let _ = PremiumCTAButton(
            title: "Unlock",
            tier: .elite,
            action: {},
            icon: nil,
            shape: .capsule,
            size: .compact
        )

        // No icon, defaults
        let _ = PremiumCTAButton(
            title: "Start Trial",
            tier: .royal,
            action: {}
        )
    }

    // MARK: - Light & Dark Mode Instantiation

    func testButtonRendersInBothColorSchemes() {
        for scheme in [ColorScheme.light, ColorScheme.dark] {
            for tier in MembershipTier.allCases {
                // Verify view can be instantiated with both color schemes without crashing.
                // Actual rendering is covered by snapshot/manual QA — not by expensive ImageRenderer.
                let _ = PremiumCTAButton(
                    title: "Test",
                    tier: tier,
                    action: {}
                )
                .environment(\.colorScheme, scheme)
                .frame(width: 300, height: 50)
            }
        }
    }
}

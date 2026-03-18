import XCTest
import SwiftUI
@testable import LumenLingo

/// Tests for PremiumCTAButton — verifies structure, opacity, and tier coverage.
@MainActor
final class PremiumCTAButtonTests: XCTestCase {

    // MARK: - Render Tests (ImageRenderer alpha verification)

    /// Renders PremiumCTAButton for each tier and verifies the center pixel is fully opaque.
    func testButtonBackgroundIsOpaqueForAllTiers() throws {
        for tier in MembershipTier.allCases {
            let button = PremiumCTAButton(
                title: "Test CTA",
                tier: tier,
                action: {}
            )
            .frame(width: 300, height: 50)

            let renderer = ImageRenderer(content: button)
            renderer.scale = 1.0

            guard let cgImage = renderer.cgImage else {
                XCTFail("Failed to render PremiumCTAButton for tier: \(tier.rawValue)")
                continue
            }

            let width = cgImage.width
            let height = cgImage.height
            guard width > 0, height > 0 else {
                XCTFail("Rendered image has zero dimensions for tier: \(tier.rawValue)")
                continue
            }

            // Sample center pixel
            let centerX = width / 2
            let centerY = height / 2

            guard let dataProvider = cgImage.dataProvider,
                  let data = dataProvider.data,
                  let ptr = CFDataGetBytePtr(data) else {
                XCTFail("Failed to access pixel data for tier: \(tier.rawValue)")
                continue
            }

            let bytesPerPixel = cgImage.bitsPerPixel / 8
            let bytesPerRow = cgImage.bytesPerRow
            let offset = centerY * bytesPerRow + centerX * bytesPerPixel

            // Alpha channel is the 4th component in RGBA
            let alpha: UInt8
            if bytesPerPixel >= 4 {
                alpha = ptr[offset + 3]
            } else {
                // Unexpected pixel format — skip alpha check
                continue
            }

            let alphaFloat = CGFloat(alpha) / 255.0
            XCTAssertGreaterThanOrEqual(
                alphaFloat, 0.95,
                "Tier \(tier.rawValue) button center pixel alpha is \(alphaFloat), expected ≥ 0.95"
            )
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

    // MARK: - Light & Dark Mode Rendering

    func testButtonRendersInBothColorSchemes() throws {
        for scheme in [ColorScheme.light, ColorScheme.dark] {
            for tier in MembershipTier.allCases {
                let button = PremiumCTAButton(
                    title: "Test",
                    tier: tier,
                    action: {}
                )
                .environment(\.colorScheme, scheme)
                .frame(width: 300, height: 50)

                let renderer = ImageRenderer(content: button)
                renderer.scale = 1.0

                let cgImage = renderer.cgImage
                XCTAssertNotNil(
                    cgImage,
                    "Failed to render for tier \(tier.rawValue) in \(scheme == .dark ? "dark" : "light") mode"
                )
            }
        }
    }
}

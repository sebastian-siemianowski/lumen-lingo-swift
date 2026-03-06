import XCTest
@testable import LumenLingo

/// Tests for the Color(hex:) extension and other utility extensions.
final class ExtensionsTests: XCTestCase {

    // MARK: - Color Hex

    func testColorHexWithHash() {
        // Should not crash with valid hex
        let _ = Color(hex: "#FF0000")
        let _ = Color(hex: "#00FF00")
        let _ = Color(hex: "#0000FF")
    }

    func testColorHexWithoutHash() {
        let _ = Color(hex: "FF0000")
    }

    func testColorHexShort() {
        // 3-char hex support depends on implementation
        let _ = Color(hex: "#FFF")
    }

    // MARK: - Date Extension

    func testStartOfDay() {
        let date = Date()
        let components = Calendar.current.dateComponents([.hour, .minute, .second], from: date.startOfDay)
        XCTAssertEqual(components.hour, 0)
        XCTAssertEqual(components.minute, 0)
        XCTAssertEqual(components.second, 0)
    }

    func testDaysAgo() {
        let threeDaysAgo = Date.daysAgo(3)
        let diff = Calendar.current.dateComponents([.day], from: threeDaysAgo, to: Date()).day!
        XCTAssertEqual(diff, 3)
    }

    // MARK: - Array Extension

    func testChunked() {
        let arr = [1, 2, 3, 4, 5, 6, 7]
        let chunks = arr.chunked(into: 3)
        XCTAssertEqual(chunks.count, 3)
        XCTAssertEqual(chunks[0], [1, 2, 3])
        XCTAssertEqual(chunks[1], [4, 5, 6])
        XCTAssertEqual(chunks[2], [7])
    }

    func testChunkedEmpty() {
        let arr: [Int] = []
        let chunks = arr.chunked(into: 5)
        XCTAssertTrue(chunks.isEmpty)
    }

    // MARK: - Int Extension

    func testFormattedCompact() {
        XCTAssertEqual(50.formattedCompact, "50")
        XCTAssertEqual(999.formattedCompact, "999")
        XCTAssertEqual(1000.formattedCompact, "1.0K")
        XCTAssertEqual(1500.formattedCompact, "1.5K")
        XCTAssertEqual(1_000_000.formattedCompact, "1.0M")
    }

    // MARK: - Double Extension

    func testPercentString() {
        XCTAssertEqual(0.756.percentString, "75.6%")
        XCTAssertEqual(1.0.percentString, "100.0%")
        XCTAssertEqual(0.0.percentString, "0.0%")
    }

    // MARK: - Seeded Random

    func testSeededRandomDeterministic() {
        let val1 = Double.seededRandom(seed: 42)
        let val2 = Double.seededRandom(seed: 42)
        XCTAssertEqual(val1, val2, accuracy: 0.0001, "Same seed should produce same value")
    }

    func testSeededRandomDifferentSeeds() {
        let val1 = Double.seededRandom(seed: 1)
        let val2 = Double.seededRandom(seed: 2)
        // Different seeds should (almost certainly) produce different values
        XCTAssertNotEqual(val1, val2)
    }
}

import SwiftUI

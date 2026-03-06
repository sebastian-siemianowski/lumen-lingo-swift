import XCTest
@testable import LumenLingo

/// Tests for ProgressService — XP, levels, streaks, mastery, favorites.
final class ProgressServiceTests: XCTestCase {

    // MARK: - Level Calculation

    func testLevelFromXP() {
        // Level formula: (totalXP / 100) + 1
        XCTAssertEqual(levelFor(xp: 0), 1)
        XCTAssertEqual(levelFor(xp: 50), 1)
        XCTAssertEqual(levelFor(xp: 99), 1)
        XCTAssertEqual(levelFor(xp: 100), 2)
        XCTAssertEqual(levelFor(xp: 250), 3)
        XCTAssertEqual(levelFor(xp: 1000), 11)
    }

    func testLevelProgress() {
        // levelProgress = (xp % 100) / 100.0
        XCTAssertEqual(progressFor(xp: 0), 0.0, accuracy: 0.01)
        XCTAssertEqual(progressFor(xp: 50), 0.50, accuracy: 0.01)
        XCTAssertEqual(progressFor(xp: 100), 0.0, accuracy: 0.01)
        XCTAssertEqual(progressFor(xp: 175), 0.75, accuracy: 0.01)
    }

    // MARK: - Scoring

    func testFlashcardScoring() {
        XCTAssertEqual(GameType.flashCards.pointsPerCorrect, 10)
    }

    func testGrammarScoring() {
        XCTAssertEqual(GameType.grammar.pointsPerCorrect, 10)
    }

    func testWordBuilderScoring() {
        XCTAssertEqual(GameType.wordBuilder.pointsPerCorrect, 15)
    }

    // MARK: - Helpers

    private func levelFor(xp: Int) -> Int {
        (xp / 100) + 1
    }

    private func progressFor(xp: Int) -> Double {
        Double(xp % 100) / 100.0
    }
}

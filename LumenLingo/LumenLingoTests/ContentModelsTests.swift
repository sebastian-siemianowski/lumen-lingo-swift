import XCTest
@testable import LumenLingo

/// Tests for ContentModels — Codable conformance and model behavior.
final class ContentModelsTests: XCTestCase {

    // MARK: - FlashcardWord Decoding

    func testFlashcardWordDecoding() throws {
        let json = """
        {
            "id": "greet1",
            "front": "Hello",
            "back": "Hola",
            "difficulty": "easy",
            "example": "Hola, ¿cómo estás?",
            "exampleTranslation": "Hello, how are you?"
        }
        """.data(using: .utf8)!

        let word = try JSONDecoder().decode(FlashcardWord.self, from: json)
        XCTAssertEqual(word.id, "greet1")
        XCTAssertEqual(word.front, "Hello")
        XCTAssertEqual(word.back, "Hola")
        XCTAssertEqual(word.difficulty, "easy")
        XCTAssertEqual(word.difficultyLevel, .beginner)
    }

    // MARK: - GrammarQuestion Decoding

    func testGrammarQuestionDecoding() throws {
        let json = """
        {
            "id": "pt1",
            "question": "Yo ___ (hablar) español.",
            "translation": "I speak Spanish.",
            "options": ["hablo", "hablas", "habla", "hablan"],
            "correct": "hablo",
            "explanation": "Regular -ar verb, yo form."
        }
        """.data(using: .utf8)!

        let q = try JSONDecoder().decode(GrammarQuestion.self, from: json)
        XCTAssertEqual(q.id, "pt1")
        XCTAssertEqual(q.options.count, 4)
        XCTAssertEqual(q.correct, "hablo")
    }

    // MARK: - WordBuilderWord Decoding

    func testWordBuilderWordDecoding() throws {
        let json = """
        {
            "word": "manzana",
            "hint": "Apple"
        }
        """.data(using: .utf8)!

        let wb = try JSONDecoder().decode(WordBuilderWord.self, from: json)
        XCTAssertEqual(wb.word, "manzana")
        XCTAssertEqual(wb.hint, "Apple")
        XCTAssertEqual(wb.id, "manzana") // id == word
    }

    // MARK: - ContentCategory Decoding

    func testFlashcardCategoryDecoding() throws {
        let json = """
        [
          {
            "key": "greetings",
            "name": "Greetings",
            "description": "Basic greetings",
            "iconName": "heart",
            "color": "#ec4899",
            "level": "beginner",
            "items": [
              {
                "id": "g1",
                "front": "Hello",
                "back": "Hola",
                "difficulty": "easy",
                "example": "Hola",
                "exampleTranslation": "Hello"
              }
            ]
          }
        ]
        """.data(using: .utf8)!

        let categories = try JSONDecoder().decode([ContentCategory<FlashcardWord>].self, from: json)
        XCTAssertEqual(categories.count, 1)
        XCTAssertEqual(categories.first?.key, "greetings")
        XCTAssertEqual(categories.first?.id, "greetings")
        XCTAssertEqual(categories.first?.items.count, 1)
        XCTAssertEqual(categories.first?.items.first?.front, "Hello")
    }

    // MARK: - Enums

    func testDifficultyRawValues() {
        XCTAssertEqual(Difficulty(rawValue: "beginner"), .beginner)
        XCTAssertEqual(Difficulty(rawValue: "intermediate"), .intermediate)
        XCTAssertEqual(Difficulty(rawValue: "advanced"), .advanced)
        XCTAssertNil(Difficulty(rawValue: "unknown"))
    }

    func testGameTypeScoring() {
        XCTAssertEqual(GameType.flashCards.pointsPerCorrect, 10)
        XCTAssertEqual(GameType.grammar.pointsPerCorrect, 10)
        XCTAssertEqual(GameType.wordBuilder.pointsPerCorrect, 15)
    }

    func testLanguagePairParsing() {
        let pair = LanguagePair.english_spanish
        XCTAssertEqual(pair.rawValue, "english_spanish")
    }

    // MARK: - SF Symbol Mapping

    func testSFSymbolMapping() {
        XCTAssertEqual(SFSymbolMapping.map("heart"), "heart.fill")
        XCTAssertEqual(SFSymbolMapping.map("globe"), "globe")
        XCTAssertEqual(SFSymbolMapping.map("unknown_icon"), "questionmark.circle")
    }

    // MARK: - AppUser Mock

    func testMockUser() {
        let user = AppUser.mock
        XCTAssertEqual(user.name, "Sebastian")
        XCTAssertEqual(user.email, "sebastian@test.com")
    }

    // MARK: - WisdomQuote

    func testWisdomQuoteEquatable() {
        let q1 = WisdomQuote(text: "Hello", author: "Test")
        let q2 = WisdomQuote(text: "Hello", author: "Test")
        XCTAssertEqual(q1.text, q2.text)
    }
}

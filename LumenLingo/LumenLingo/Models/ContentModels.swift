import Foundation

// MARK: - Flashcard Word

struct FlashcardWord: Codable, Identifiable, Equatable {
    let id: String
    let front: String
    let back: String
    let example: String?
    let exampleTranslation: String?
    let difficulty: String?

    var difficultyLevel: Difficulty {
        Difficulty(rawValue: difficulty ?? "beginner") ?? .beginner
    }
}

// MARK: - Grammar Question

struct GrammarQuestion: Codable, Identifiable, Equatable {
    let id: String
    let question: String
    let translation: String?
    let options: [String]
    let correct: String
    let explanation: String?

    /// Alias used by views
    var correctAnswer: String { correct }
}

// MARK: - Word Builder Word

struct WordBuilderWord: Codable, Identifiable, Equatable {
    var id: String { word }
    let word: String
    let hint: String
}

// MARK: - Category

struct ContentCategory<T: Codable>: Codable, Identifiable {
    let key: String
    let name: String
    let description: String
    let iconName: String
    let color: String
    let level: String
    let items: [T]

    var id: String { key }

    /// Alias used by views
    var icon: String { iconName }

    /// Alias used by views
    var difficulty: Difficulty {
        Difficulty(rawValue: level) ?? .beginner
    }

    var difficultyLevel: Difficulty {
        Difficulty(rawValue: level) ?? .beginner
    }

    var sfSymbolName: String {
        SFSymbolMapping.map(iconName)
    }
}

// MARK: - Category Progress

struct CategoryProgress: Equatable {
    let total: Int
    let mastered: Int

    var percentage: Double {
        guard total > 0 else { return 0 }
        return Double(mastered) / Double(total) * 100
    }

    var isComplete: Bool {
        total > 0 && mastered >= total
    }

    static let zero = CategoryProgress(total: 0, mastered: 0)
}

// MARK: - Category Display Item

struct CategoryDisplayItem: Identifiable {
    let key: String
    let name: String
    let description: String
    let iconName: String
    let color: String
    let level: String
    let itemCount: Int
    var isFavorite: Bool
    var progress: CategoryProgress
    var order: Int

    var id: String { key }

    /// Alias for icon name
    var icon: String { iconName }

    /// Typed difficulty from level string
    var difficulty: Difficulty {
        Difficulty(rawValue: level) ?? .beginner
    }

    /// Convenience init matching view usage
    init(
        id: String,
        name: String,
        description: String = "",
        icon: String = "book.fill",
        difficulty: Difficulty = .beginner,
        itemCount: Int = 0,
        progress: CategoryProgress = .zero,
        order: Int = 0,
        isFavorite: Bool = false,
        color: String = "#667eea"
    ) {
        self.key = id
        self.name = name
        self.description = description
        self.iconName = icon
        self.level = difficulty.rawValue
        self.itemCount = itemCount
        self.progress = progress
        self.order = order
        self.isFavorite = isFavorite
        self.color = color
    }
}

// MARK: - Game Session Result

struct GameSessionResult {
    let gameType: GameType
    let categoryKey: String
    let score: Int
    let correctAnswers: Int
    let totalQuestions: Int
    let timeSpent: Int
    let sourceLanguage: String
    let targetLanguage: String

    var accuracy: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(correctAnswers) / Double(totalQuestions) * 100
    }

    var xpEarned: Int { score }

    /// Convenience init used by game views (categoryId/categoryName variant)
    init(
        gameType: GameType,
        categoryId: String,
        categoryName: String = "",
        score: Int,
        correctAnswers: Int,
        totalQuestions: Int,
        timeSpent: Int,
        sourceLanguage: String = SupportedLanguage.english.rawValue,
        targetLanguage: String = SupportedLanguage.spanish.rawValue
    ) {
        self.gameType = gameType
        self.categoryKey = categoryId
        self.score = score
        self.correctAnswers = correctAnswers
        self.totalQuestions = totalQuestions
        self.timeSpent = timeSpent
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
    }

    /// Primary init
    init(
        gameType: GameType,
        categoryKey: String,
        score: Int,
        correctAnswers: Int,
        totalQuestions: Int,
        timeSpent: Int,
        sourceLanguage: String,
        targetLanguage: String
    ) {
        self.gameType = gameType
        self.categoryKey = categoryKey
        self.score = score
        self.correctAnswers = correctAnswers
        self.totalQuestions = totalQuestions
        self.timeSpent = timeSpent
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
    }
}

// MARK: - Game Type Stats

struct GameTypeStats: Identifiable {
    let gameType: GameType
    let played: Int
    let totalScore: Int
    let bestScore: Int
    let accuracy: Double
    let avgScore: Int

    var id: String { gameType.rawValue }
}

// MARK: - User (for mocked auth)

struct AppUser: Equatable {
    let name: String
    let email: String
    let avatarURL: URL?

    var firstName: String {
        name.components(separatedBy: " ").first ?? name
    }

    static let mock = AppUser(
        name: "Sebastian",
        email: "sebastian@test.com",
        avatarURL: nil
    )
}

// MARK: - Membership Feature

struct MembershipFeature: Identifiable {
    let id = UUID()
    let name: String
    let starter: String
    let pro: String
    let elite: String
    let royal: String
}

// MARK: - Wisdom Quote

struct WisdomQuote: Identifiable {
    let id = UUID()
    let text: String
    let author: String

    static let allQuotes: [WisdomQuote] = [
        WisdomQuote(text: "One language sets you in a corridor for life. Two languages open every door along the way.", author: "Frank Smith"),
        WisdomQuote(text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein"),
        WisdomQuote(text: "To have another language is to possess a second soul.", author: "Charlemagne"),
        WisdomQuote(text: "Language is the road map of a culture. It tells you where its people come from and where they are going.", author: "Rita Mae Brown"),
        WisdomQuote(text: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.", author: "Nelson Mandela"),
        WisdomQuote(text: "Learning another language is not only learning different words for the same things, but learning another way to think about things.", author: "Flora Lewis"),
        WisdomQuote(text: "A different language is a different vision of life.", author: "Federico Fellini"),
        WisdomQuote(text: "You can never understand one language until you understand at least two.", author: "Geoffrey Willans"),
    ]
}

// MARK: - SF Symbol Mapping

enum SFSymbolMapping {
    /// Maps React Lucide icon names (PascalCase) to SF Symbol names.
    private static let iconMap: [String: String] = [
        "Coffee": "cup.and.saucer.fill",
        "Utensils": "fork.knife",
        "Brain": "brain.head.profile",
        "Heart": "heart.fill",
        "Home": "house.fill",
        "Book": "book.fill",
        "BookOpen": "book.pages",
        "GraduationCap": "graduationcap.fill",
        "Map": "map.fill",
        "Star": "star.fill",
        "Sun": "sun.max.fill",
        "Moon": "moon.fill",
        "Cloud": "cloud.fill",
        "Music": "music.note",
        "Camera": "camera.fill",
        "Phone": "phone.fill",
        "Mail": "envelope.fill",
        "Clock": "clock.fill",
        "Calendar": "calendar",
        "ShoppingCart": "cart.fill",
        "Gift": "gift.fill",
        "Briefcase": "briefcase.fill",
        "Plane": "airplane",
        "Car": "car.fill",
        "Train": "tram.fill",
        "Ship": "ferry.fill",
        "Building": "building.2.fill",
        "Tree": "tree.fill",
        "Flower": "leaf.fill",
        "Globe": "globe",
        "Flag": "flag.fill",
        "Trophy": "trophy.fill",
        "Medal": "medal.fill",
        "Target": "target",
        "Palette": "paintpalette.fill",
        "Brush": "paintbrush.fill",
        "Scissors": "scissors",
        "Wrench": "wrench.fill",
        "Hammer": "hammer.fill",
        "Key": "key.fill",
        "Lock": "lock.fill",
        "Shield": "shield.fill",
        "Zap": "bolt.fill",
        "Flame": "flame.fill",
        "Droplet": "drop.fill",
        "Wind": "wind",
        "Thermometer": "thermometer.medium",
        "Umbrella": "umbrella.fill",
        "Apple": "applelogo",
        "Users": "person.2.fill",
        "User": "person.fill",
        "MessageCircle": "message.fill",
        "Settings": "gearshape.fill",
        "Search": "magnifyingglass",
        "Filter": "line.3.horizontal.decrease",
        "ChevronRight": "chevron.right",
        "ChevronLeft": "chevron.left",
        "ChevronDown": "chevron.down",
        "ChevronUp": "chevron.up",
        "Plus": "plus",
        "Minus": "minus",
        "X": "xmark",
        "Check": "checkmark",
        "Info": "info.circle",
        "AlertTriangle": "exclamationmark.triangle",
        "HelpCircle": "questionmark.circle",
        "Eye": "eye.fill",
        "EyeOff": "eye.slash.fill",
        "Volume2": "speaker.wave.2.fill",
        "VolumeX": "speaker.slash.fill",
        "Bell": "bell.fill",
        "BellOff": "bell.slash.fill",
        "Wifi": "wifi",
        "Battery": "battery.100",
        "Smartphone": "iphone",
        "Monitor": "desktopcomputer",
        "Keyboard": "keyboard",
        "Mouse": "computermouse.fill",
        "Printer": "printer.fill",
        "Download": "arrow.down.circle.fill",
        "Upload": "arrow.up.circle.fill",
        "Share": "square.and.arrow.up",
        "Copy": "doc.on.doc",
        "Clipboard": "clipboard.fill",
        "FileText": "doc.text",
        "Folder": "folder.fill",
        "Trash": "trash.fill",
        "Edit": "pencil",
        "Save": "square.and.arrow.down",
        "Refresh": "arrow.clockwise",
        "RotateCcw": "arrow.counterclockwise",
        "Play": "play.fill",
        "Pause": "pause.fill",
        "Stop": "stop.fill",
        "SkipForward": "forward.fill",
        "SkipBack": "backward.fill",
        "Maximize": "arrow.up.left.and.arrow.down.right",
        "Minimize": "arrow.down.right.and.arrow.up.left",
        "Languages": "globe",
        "Sparkles": "sparkles",
        "Crown": "crown.fill",
        "Gem": "diamond.fill",
        "Coins": "dollarsign.circle.fill",
        "Rocket": "paperplane.fill",
        "Compass": "safari.fill",
        "Anchor": "anchor.circle.fill",
        "Award": "rosette",
        "Hash": "number",
        "Airplane": "airplane",
    ]

    /// Case-insensitive lookup built once from `iconMap`.
    private static let lowercasedMap: [String: String] = {
        Dictionary(iconMap.map { (key: $0.key.lowercased(), value: $0.value) },
                   uniquingKeysWith: { first, _ in first })
    }()

    /// Resolves a React/Lucide icon name **or** an already-valid SF Symbol name
    /// to the best SF Symbol string. Lookup is case-insensitive, so "heart",
    /// "Heart", and "HEART" all resolve to "heart.fill".
    /// If the name contains a dot (e.g. "cloud.sun", "text.book.closed") it is
    /// assumed to already be an SF Symbol and returned as-is.
    static func map(_ reactIconName: String) -> String {
        // 1. Direct case-insensitive lookup in the Lucide → SF Symbol table
        if let mapped = lowercasedMap[reactIconName.lowercased()] {
            return mapped
        }

        // 2. If the name looks like an SF Symbol already (contains a dot or
        //    is a known bare SF Symbol), pass it through directly.
        if reactIconName.contains(".") {
            return reactIconName
        }

        // 3. Many JSON entries are already bare SF Symbol names (e.g. "leaf",
        //    "carrot", "pawprint"). Return with ".fill" variant when reasonable.
        let bare = reactIconName.lowercased()
        let knownBare: [String: String] = [
            "leaf": "leaf.fill",
            "carrot": "carrot.fill",
            "pawprint": "pawprint.fill",
            "airplane": "airplane",
            "paintpalette": "paintpalette.fill",
        ]
        if let known = knownBare[bare] {
            return known
        }

        // 4. Last resort: return the raw name (it may still be a valid
        //    SF Symbol), falling back to a question mark only if truly unknown.
        return reactIconName.isEmpty ? "questionmark.diamond" : reactIconName
    }

    /// Alias used by some views
    static func icon(for reactIconName: String) -> String {
        map(reactIconName)
    }
}

import Foundation

// MARK: - Flashcard Word

struct FlashcardWord: Codable, Identifiable, Equatable, Sendable {
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

struct GrammarQuestion: Codable, Identifiable, Equatable, Sendable {
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

struct WordBuilderWord: Codable, Identifiable, Equatable, Sendable {
    var id: String { word }
    let word: String
    let hint: String
}

// MARK: - Category

struct ContentCategory<T: Codable & Sendable>: Codable, Identifiable, Sendable {
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
    let xpMultiplier: Double

    var accuracy: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(correctAnswers) / Double(totalQuestions) * 100
    }

    var baseXP: Int { score }
    var xpEarned: Int { Int(Double(score) * xpMultiplier) }

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
        targetLanguage: String = SupportedLanguage.spanish.rawValue,
        xpMultiplier: Double = 1.0
    ) {
        self.gameType = gameType
        self.categoryKey = categoryId
        self.score = score
        self.correctAnswers = correctAnswers
        self.totalQuestions = totalQuestions
        self.timeSpent = timeSpent
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
        self.xpMultiplier = xpMultiplier
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
        targetLanguage: String,
        xpMultiplier: Double = 1.0
    ) {
        self.gameType = gameType
        self.categoryKey = categoryKey
        self.score = score
        self.correctAnswers = correctAnswers
        self.totalQuestions = totalQuestions
        self.timeSpent = timeSpent
        self.sourceLanguage = sourceLanguage
        self.targetLanguage = targetLanguage
        self.xpMultiplier = xpMultiplier
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
    let id: String
    let name: String
    let email: String
    let avatarURL: URL?

    var firstName: String {
        name.components(separatedBy: " ").first ?? name
    }

    /// Whether the email is an Apple Private Relay address.
    var isPrivateRelayEmail: Bool {
        email.contains("privaterelay.appleid.com")
    }

    /// Email text suitable for display in the UI.
    /// Hides Apple Private Relay addresses behind a friendly label.
    var displayEmail: String {
        isPrivateRelayEmail ? "Apple Private Email" : email
    }

    static let mock = AppUser(
        id: "mock_user_001",
        name: "Sebastian",
        email: "testuser@lumenlingo.com",
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
        // ── Common ──
        "Coffee": "cup.and.saucer.fill",
        "Utensils": "fork.knife",
        "UtensilsCrossed": "fork.knife",
        "Brain": "brain.head.profile",
        "Heart": "heart.fill",
        "HeartHandshake": "heart.fill",
        "HeartPulse": "heart.fill",
        "Home": "house.fill",
        "Book": "book.fill",
        "BookOpen": "book.pages",
        "BookOpenText": "book.pages",
        "BookMarked": "bookmark.fill",
        "GraduationCap": "graduationcap.fill",
        "Map": "map.fill",
        "MapPin": "mappin.and.ellipse",
        "MapPinned": "mappin.and.ellipse",
        "Star": "star.fill",
        "Sun": "sun.max.fill",
        "Moon": "moon.fill",
        "Cloud": "cloud.fill",
        "CloudRain": "cloud.rain.fill",
        "CloudSun": "cloud.sun.fill",
        "CloudLightning": "cloud.bolt.fill",
        "Music": "music.note",
        "Music2": "music.note.list",
        "Camera": "camera.fill",
        "Phone": "phone.fill",
        "Mail": "envelope.fill",
        "Clock": "clock.fill",
        "Clock3": "clock.fill",
        "Calendar": "calendar",
        "CalendarCheck": "calendar.badge.checkmark",
        "CalendarDays": "calendar",
        "ShoppingCart": "cart.fill",
        "ShoppingBag": "bag.fill",
        "Gift": "gift.fill",
        "Briefcase": "briefcase.fill",
        "Plane": "airplane",
        "PlaneTakeoff": "airplane.departure",
        "Car": "car.fill",
        "CarFront": "car.fill",
        "Bus": "bus.fill",
        "Train": "tram.fill",
        "Truck": "box.truck.fill",
        "Bike": "bicycle",
        "Ship": "ferry.fill",
        "Building": "building.2.fill",
        "Building2": "building.fill",
        "Tree": "tree.fill",
        "TreePine": "tree.fill",
        "Flower": "leaf.fill",
        "Flower2": "leaf.fill",
        "Globe": "globe",
        "Globe2": "globe.americas.fill",
        "Flag": "flag.fill",
        "Trophy": "trophy.fill",
        "Medal": "medal.fill",
        "Target": "target",
        "Palette": "paintpalette.fill",
        "Paintbrush": "paintbrush.fill",
        "PaintBucket": "paintbrush.fill",
        "Brush": "paintbrush.fill",
        "Scissors": "scissors",
        "Wrench": "wrench.fill",
        "Hammer": "hammer.fill",
        "Key": "key.fill",
        "Lock": "lock.fill",
        "Shield": "shield.fill",
        "ShieldAlert": "shield.fill",
        "Zap": "bolt.fill",
        "Flame": "flame.fill",
        "Droplet": "drop.fill",
        "Wind": "wind",
        "Thermometer": "thermometer.medium",
        "ThermometerSun": "thermometer.sun.fill",
        "Umbrella": "umbrella.fill",
        "Apple": "applelogo",
        "Users": "person.2.fill",
        "Users2": "person.2.fill",
        "User": "person.fill",
        "UserCircle": "person.circle.fill",
        "UserCircle2": "person.circle.fill",
        "MessageCircle": "message.fill",
        "MessageSquare": "bubble.left.fill",
        "MessageSquareWarning": "bubble.left.fill",
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
        "AlertCircle": "exclamationmark.circle",
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
        "Laptop": "laptopcomputer",
        "Monitor": "desktopcomputer",
        "Tv": "tv.fill",
        "Cpu": "cpu",
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
        "Trash2": "trash.fill",
        "Edit": "pencil",
        "PenTool": "pencil.tip",
        "PencilRuler": "pencil.and.ruler.fill",
        "Save": "square.and.arrow.down",
        "Refresh": "arrow.clockwise",
        "RotateCcw": "arrow.counterclockwise",
        "Repeat": "repeat",
        "Shuffle": "shuffle",
        "Play": "play.fill",
        "Pause": "pause.fill",
        "Stop": "stop.fill",
        "SkipForward": "forward.fill",
        "SkipBack": "backward.fill",
        "Radio": "antenna.radiowaves.left.and.right",
        "Maximize": "arrow.up.left.and.arrow.down.right",
        "Minimize": "arrow.down.right.and.arrow.up.left",
        "Languages": "globe",
        "Sparkles": "sparkles",
        "Sparkle": "sparkle",
        "Crown": "crown.fill",
        "Gem": "diamond.fill",
        "Coins": "dollarsign.circle.fill",
        "CreditCard": "creditcard.fill",
        "Wallet": "wallet.pass.fill",
        "Banknote": "banknote.fill",
        "Rocket": "paperplane.fill",
        "Compass": "safari.fill",
        "Navigation": "location.fill",
        "Anchor": "anchor.circle.fill",
        "Award": "rosette",
        "BadgeCheck": "checkmark.seal.fill",
        "Hash": "number",
        "Airplane": "airplane",
        // ── Additional icons for flashcard data ──
        "Activity": "waveform.path.ecg",
        "Ambulance": "cross.circle.fill",
        "Hospital": "cross.case.fill",
        "Stethoscope": "stethoscope",
        "Armchair": "chair.lounge.fill",
        "Sofa": "sofa.fill",
        "Bed": "bed.double.fill",
        "Bath": "bathtub.fill",
        "Lamp": "lamp.desk.fill",
        "ArrowLeftRight": "arrow.left.arrow.right",
        "Baby": "figure.and.child.holdinghands",
        "Box": "shippingbox.fill",
        "Package": "shippingbox.fill",
        "Bug": "ladybug.fill",
        "Cake": "birthday.cake.fill",
        "Calculator": "plusminus",
        "ChefHat": "frying.pan.fill",
        "Church": "building.columns.fill",
        "Landmark": "building.columns.fill",
        "Clapperboard": "film.fill",
        "Film": "film.fill",
        "Theater": "theatermasks.fill",
        "Cookie": "birthday.cake.fill",
        "Dog": "dog.fill",
        "PawPrint": "pawprint.fill",
        "Dumbbell": "dumbbell.fill",
        "Footprints": "figure.walk",
        "Gamepad2": "gamecontroller.fill",
        "Gauge": "gauge.with.needle.fill",
        "Gavel": "hammer.fill",
        "Scale": "scalemass.fill",
        "Glasses": "eyeglasses",
        "Hand": "hand.raised.fill",
        "HandMetal": "hand.raised.fill",
        "Hotel": "building.2.fill",
        "IceCream": "cup.and.saucer.fill",
        "Pizza": "fork.knife",
        "Wheat": "leaf.fill",
        "Layers": "square.3.layers.3d.down.right",
        "LayoutGrid": "square.grid.2x2.fill",
        "Shapes": "square.on.circle",
        "Leaf": "leaf.fill",
        "Sprout": "leaf.fill",
        "Lightbulb": "lightbulb.fill",
        "Luggage": "suitcase.fill",
        "Tent": "tent.fill",
        "Microscope": "atom",
        "Mountain": "mountain.2.fill",
        "Waves": "water.waves",
        "Snowflake": "snowflake",
        "Newspaper": "newspaper.fill",
        "Scroll": "scroll.fill",
        "PartyPopper": "party.popper.fill",
        "Puzzle": "puzzlepiece.fill",
        "Ruler": "ruler.fill",
        "School": "building.columns.fill",
        "Shirt": "tshirt.fill",
        "Smile": "face.smiling.fill",
        "SmilePlus": "face.smiling.fill",
        "Tractor": "truck.box.fill",
        "TrendingUp": "chart.line.uptrend.xyaxis",
        "ThumbsUp": "hand.thumbsup.fill",
        "Type": "textformat",
        "Watch": "applewatch",
        "Wallet2": "wallet.pass.fill",
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

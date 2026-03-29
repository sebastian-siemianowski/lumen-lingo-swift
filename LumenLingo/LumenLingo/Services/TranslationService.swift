import Foundation

// MARK: - Translation Service

/// Runtime translation lookup keyed by source language preference.
/// Port of React's translations.jsx (6,388 lines).
/// The React app uses source language to determine UI language, not device locale.
@Observable
@MainActor
final class TranslationService {
    static let shared = TranslationService()

    private var translations: [String: [String: String]] = [:]
    private var currentLanguage: String = "english"

    private init() {
        loadTranslations()
    }

    // MARK: - Public API

    func setLanguage(_ language: String) {
        currentLanguage = language
    }

    /// Translate a key using the current source language.
    func t(_ key: String) -> String {
        translations[currentLanguage]?[key] ?? translations["english"]?[key] ?? key
    }

    /// Translate a key for a specific language.
    func t(_ key: String, language: String) -> String {
        translations[language]?[key] ?? translations["english"]?[key] ?? key
    }

    // MARK: - Translations Data

    private func loadTranslations() {
        // Core translations for all 9 languages
        // This mirrors the React translations.jsx structure

        translations = [
            "english": englishTranslations,
            "polish": polishTranslations,
            "spanish": spanishTranslations,
            "german": germanTranslations,
            "ukrainian": ukrainianTranslations,
            "french": frenchTranslations,
            "arabic": arabicTranslations,
            "chinese": chineseTranslations,
            "japanese": japaneseTranslations,
        ]
    }

    // MARK: - English (base language)

    private var englishTranslations: [String: String] {
        [
            // Dashboard
            "welcome_back": "Welcome back",
            "your_progress": "Your Progress",
            "level": "Level",
            "daily_streak": "Daily Streak",
            "total_active_days": "Active Days",
            "total_xp": "Total XP",
            "points": "points",
            "next_level": "Next Level",
            "choose_adventure": "Choose Your Adventure",
            "recent_activity": "Recent Activity",
            "play": "Play",
            "play_again": "Play Again",
            "back_to_dashboard": "Back to Dashboard",
            "no_recent_activity": "No recent activity yet",
            "start_learning": "Start learning to see your progress here!",

            // Navigation
            "dashboard": "Dashboard",
            "profile": "Profile",
            "membership": "Membership",
            "stats": "Statistics",
            "your_journey": "Your Journey",
            "language": "Language",

            // Games
            "flash_cards": "Flash Cards",
            "grammar": "Grammar",
            "word_builder": "Word Builder",
            "score": "Score",
            "correct": "Correct",
            "wrong": "Wrong",
            "streak": "Streak",
            "progress": "Progress",
            "complete": "Complete!",
            "game_complete": "Game Complete!",
            "accuracy": "Accuracy",
            "time_spent": "Time Spent",
            "xp_earned": "XP Earned",
            "continue": "Continue",
            "back_to_categories": "Back to Categories",
            "next_category": "Next Category",
            "continuous_mode": "Continuous Mode",

            // Flashcards
            "still_learning": "Still Learning",
            "practice_more": "Practice More",
            "got_it": "Got It!",
            "know_this_word": "I Know This Word",
            "tap_to_flip": "Tap to flip",
            "example": "Example",

            // Grammar
            "select_answer": "Select your answer",
            "check_answer": "Check Answer",
            "explanation": "Explanation",
            "correct_answer": "Correct!",
            "incorrect_answer": "Incorrect",
            "the_correct_answer_is": "The correct answer is",

            // Word Builder
            "build_the_word": "Build the Word",
            "hint": "Hint",
            "scrambled_letters": "Scrambled Letters",
            "check": "Check",
            "skip": "Skip",
            "try_again": "Try Again",

            // Categories
            "categories": "Categories",
            "select_category": "Select a Category",
            "favorites": "Favorites",
            "hide_completed": "Hide Completed",
            "show_all": "Show All",
            "mastered": "Mastered",
            "items": "items",
            "no_categories": "No categories available",
            "content_not_available": "Content not available",
            "not_available_for_pair": "Content is not yet available for this language pair",

            // Profile
            "appearance": "Appearance",
            "sound": "Sound",
            "sync": "Sync",
            "signout": "Sign Out",
            "dark_mode": "Dark Mode",
            "breathing_orbs": "Breathing Orbs",
            "quantum_flow": "Quantum Flow",
            "nebula_drift": "Nebula Drift",
            "animation_intensity": "Animation Intensity",
            "animation_speed": "Animation Speed",
            "master_audio": "Master Audio",
            "game_sounds": "Game Sounds",
            "ui_sounds": "UI Sounds",
            "achievement_sounds": "Achievement Sounds",
            "sync_backup": "Sync & Backup",
            "upload_data": "Upload Data",
            "download_data": "Download Data",
            "last_sync": "Last Sync",
            "never_synced": "Never synced",
            "sign_out": "Sign Out",

            // Language Selection
            "choose_your_journey": "Choose Your Language Journey",
            "i_know": "I know",
            "i_want_to_learn": "I want to learn",
            "start_journey": "Start Journey",

            // Membership
            "choose_plan": "Choose Your Plan",
            "monthly": "Monthly",
            "yearly": "Yearly",
            "save": "Save",
            "current_plan": "Current Plan",
            "upgrade": "Upgrade",
            "features": "Features",
            "starter": "Starter",
            "pro": "Pro",
            "elite": "Elite",
            "royal": "Royal",
            "free": "Free",
            "per_month": "/month",
            "per_year": "/year",

            // Difficulty
            "beginner": "Beginner",
            "intermediate": "Intermediate",
            "advanced": "Advanced",

            // Languages
            "english": "English",
            "polish": "Polish",
            "spanish": "Spanish",
            "german": "German",
            "ukrainian": "Ukrainian",
            "french": "French",
            "arabic": "Arabic",
            "chinese": "Chinese",
            "japanese": "Japanese",

            // Journey / Progress
            "your_stats": "Your Stats",
            "game_breakdown": "Game Breakdown",
            "games_played": "Games Played",
            "best_score": "Best Score",
            "avg_score": "Avg Score",
            "total_score": "Total Score",
            "wisdom": "Wisdom",

            // Adventure messages
            "ready_for_spanish_adventure": "Ready for your Spanish adventure?",
            "ready_for_english_adventure": "Ready for your English adventure?",
            "ready_for_polish_adventure": "Ready for your Polish adventure?",
            "ready_for_german_adventure": "Ready for your German adventure?",
            "ready_for_ukrainian_adventure": "Ready for your Ukrainian adventure?",
            "ready_for_french_adventure": "Ready for your French adventure?",
            "ready_for_arabic_adventure": "Ready for your Arabic adventure?",
            "ready_for_chinese_adventure": "Ready for your Chinese adventure?",
            "ready_for_japanese_adventure": "Ready for your Japanese adventure?",

            // Misc
            "loading": "Loading...",
            "error": "Error",
            "retry": "Retry",
            "cancel": "Cancel",
            "done": "Done",
            "ok": "OK",
            "yes": "Yes",
            "no": "No",
            "save_changes": "Save Changes",
            "discard": "Discard",
            "days": "days",
            "seconds": "seconds",
            "minutes": "minutes",
        ]
    }

    private var polishTranslations: [String: String] {
        [
            "welcome_back": "Witaj ponownie",
            "your_progress": "Twoje postępy",
            "level": "Poziom",
            "daily_streak": "Seria dzienna",
            "total_active_days": "Aktywne dni",
            "total_xp": "Łączne XP",
            "points": "punkty",
            "next_level": "Następny poziom",
            "choose_adventure": "Wybierz swoją przygodę",
            "recent_activity": "Ostatnia aktywność",
            "play": "Graj",
            "play_again": "Graj ponownie",
            "back_to_dashboard": "Powrót do panelu",
            "dashboard": "Panel",
            "profile": "Profil",
            "membership": "Członkostwo",
            "your_journey": "Twoja podróż",
            "language": "Język",
            "flash_cards": "Fiszki",
            "grammar": "Gramatyka",
            "word_builder": "Budowanie słów",
            "score": "Wynik",
            "correct": "Poprawne",
            "wrong": "Błędne",
            "streak": "Seria",
            "progress": "Postęp",
            "game_complete": "Gra ukończona!",
            "accuracy": "Dokładność",
            "still_learning": "Jeszcze się uczę",
            "got_it": "Znam to!",
            "categories": "Kategorie",
            "favorites": "Ulubione",
            "dark_mode": "Tryb ciemny",
            "beginner": "Początkujący",
            "intermediate": "Średniozaawansowany",
            "advanced": "Zaawansowany",
            "loading": "Ładowanie...",
            "choose_your_journey": "Wybierz swoją językową podróż",
            "i_know": "Znam",
            "i_want_to_learn": "Chcę się nauczyć",
            "ready_for_spanish_adventure": "Gotowy na hiszpańską przygodę?",
            "ready_for_english_adventure": "Gotowy na angielską przygodę?",
        ]
    }

    private var spanishTranslations: [String: String] {
        [
            "welcome_back": "Bienvenido de nuevo",
            "your_progress": "Tu progreso",
            "level": "Nivel",
            "daily_streak": "Racha diaria",
            "total_active_days": "Días activos",
            "total_xp": "XP total",
            "points": "puntos",
            "choose_adventure": "Elige tu aventura",
            "recent_activity": "Actividad reciente",
            "play": "Jugar",
            "dashboard": "Panel",
            "profile": "Perfil",
            "flash_cards": "Tarjetas",
            "grammar": "Gramática",
            "word_builder": "Constructor de palabras",
            "score": "Puntuación",
            "correct": "Correcto",
            "wrong": "Incorrecto",
            "game_complete": "¡Juego completo!",
            "still_learning": "Aún aprendiendo",
            "got_it": "¡Lo sé!",
            "categories": "Categorías",
            "favorites": "Favoritos",
            "dark_mode": "Modo oscuro",
            "beginner": "Principiante",
            "intermediate": "Intermedio",
            "advanced": "Avanzado",
            "loading": "Cargando...",
            "choose_your_journey": "Elige tu viaje lingüístico",
            "i_know": "Sé",
            "i_want_to_learn": "Quiero aprender",
        ]
    }

    private var germanTranslations: [String: String] {
        [
            "welcome_back": "Willkommen zurück",
            "your_progress": "Dein Fortschritt",
            "level": "Level",
            "daily_streak": "Tägliche Serie",
            "total_active_days": "Aktive Tage",
            "play": "Spielen",
            "dashboard": "Dashboard",
            "profile": "Profil",
            "flash_cards": "Karteikarten",
            "grammar": "Grammatik",
            "word_builder": "Wortbauer",
            "score": "Punktzahl",
            "categories": "Kategorien",
            "dark_mode": "Dunkelmodus",
            "beginner": "Anfänger",
            "intermediate": "Mittelstufe",
            "advanced": "Fortgeschritten",
            "loading": "Laden...",
            "choose_your_journey": "Wähle deine Sprachreise",
            "i_know": "Ich kann",
            "i_want_to_learn": "Ich möchte lernen",
        ]
    }

    private var ukrainianTranslations: [String: String] {
        [
            "welcome_back": "З поверненням",
            "your_progress": "Ваш прогрес",
            "level": "Рівень",
            "daily_streak": "Щоденна серія",
            "play": "Грати",
            "dashboard": "Панель",
            "profile": "Профіль",
            "flash_cards": "Картки",
            "grammar": "Граматика",
            "word_builder": "Конструктор слів",
            "categories": "Категорії",
            "dark_mode": "Темний режим",
            "beginner": "Початківець",
            "intermediate": "Середній",
            "advanced": "Просунутий",
            "loading": "Завантаження...",
        ]
    }

    private var frenchTranslations: [String: String] {
        [
            "welcome_back": "Bon retour",
            "your_progress": "Vos progrès",
            "level": "Niveau",
            "daily_streak": "Série quotidienne",
            "play": "Jouer",
            "dashboard": "Tableau de bord",
            "profile": "Profil",
            "flash_cards": "Cartes mémoire",
            "grammar": "Grammaire",
            "word_builder": "Constructeur de mots",
            "categories": "Catégories",
            "dark_mode": "Mode sombre",
            "beginner": "Débutant",
            "intermediate": "Intermédiaire",
            "advanced": "Avancé",
            "loading": "Chargement...",
        ]
    }

    private var arabicTranslations: [String: String] {
        [
            "welcome_back": "مرحباً بعودتك",
            "your_progress": "تقدمك",
            "level": "المستوى",
            "daily_streak": "السلسلة اليومية",
            "play": "العب",
            "dashboard": "لوحة القيادة",
            "profile": "الملف الشخصي",
            "flash_cards": "البطاقات التعليمية",
            "grammar": "القواعد",
            "word_builder": "بناء الكلمات",
            "categories": "الفئات",
            "dark_mode": "الوضع الداكن",
            "beginner": "مبتدئ",
            "intermediate": "متوسط",
            "advanced": "متقدم",
            "loading": "جارِ التحميل...",
        ]
    }

    private var chineseTranslations: [String: String] {
        [
            "welcome_back": "欢迎回来",
            "your_progress": "你的进度",
            "level": "等级",
            "daily_streak": "每日连续",
            "play": "开始",
            "dashboard": "仪表板",
            "profile": "个人资料",
            "flash_cards": "闪卡",
            "grammar": "语法",
            "word_builder": "单词构建",
            "categories": "分类",
            "dark_mode": "深色模式",
            "beginner": "初学者",
            "intermediate": "中级",
            "advanced": "高级",
            "loading": "加载中...",
        ]
    }

    private var japaneseTranslations: [String: String] {
        [
            "welcome_back": "おかえりなさい",
            "your_progress": "あなたの進捗",
            "level": "レベル",
            "daily_streak": "連続日数",
            "play": "プレイ",
            "dashboard": "ダッシュボード",
            "profile": "プロフィール",
            "flash_cards": "フラッシュカード",
            "grammar": "文法",
            "word_builder": "ワードビルダー",
            "categories": "カテゴリ",
            "dark_mode": "ダークモード",
            "beginner": "初級",
            "intermediate": "中級",
            "advanced": "上級",
            "loading": "読み込み中...",
        ]
    }
}

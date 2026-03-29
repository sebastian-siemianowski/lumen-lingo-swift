import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const MESSAGES = join(new URL('.', import.meta.url).pathname, '..', 'lumen-lingo-frontend', 'messages');
const LOCALES = ['en','es','fr','ja','de','pl','ar','zh','uk'];

/* ─── Translations per locale (short strings + section titles) ─── */

const toc = {
  en: { flashcards: 'Immersive Flashcards', spacedRepetition: 'Smart Spaced Repetition', practiceModes: 'Practice Modes', soundscapes: 'Soundscapes', breathingOrbs: 'Breathing Orbs & Visuals', progress: 'Progress & Analytics', languages: 'Language Pairs', membership: 'Membership Tiers' },
  es: { flashcards: 'Tarjetas flash inmersivas', spacedRepetition: 'Repetición espaciada', practiceModes: 'Modos de práctica', soundscapes: 'Paisajes sonoros', breathingOrbs: 'Orbes y fondos visuales', progress: 'Progreso y análisis', languages: 'Pares de idiomas', membership: 'Niveles de membresía' },
  fr: { flashcards: 'Cartes mémoire immersives', spacedRepetition: 'Répétition espacée', practiceModes: "Modes d'entraînement", soundscapes: 'Ambiances sonores', breathingOrbs: 'Orbes et visuels', progress: 'Progrès et analyses', languages: 'Paires de langues', membership: "Niveaux d'abonnement" },
  ja: { flashcards: '没入型フラッシュカード', spacedRepetition: 'スマート間隔反復', practiceModes: '練習モード', soundscapes: 'サウンドスケープ', breathingOrbs: 'オーブ＆ビジュアル', progress: '進捗と分析', languages: '言語ペア', membership: 'メンバーシップ' },
  de: { flashcards: 'Immersive Karteikarten', spacedRepetition: 'Intelligente Wiederholung', practiceModes: 'Übungsmodi', soundscapes: 'Klanglandschaften', breathingOrbs: 'Orbs & Hintergründe', progress: 'Fortschritt & Analysen', languages: 'Sprachpaare', membership: 'Mitgliedschaftsstufen' },
  pl: { flashcards: 'Immersyjne fiszki', spacedRepetition: 'Inteligentna powtórka', practiceModes: 'Tryby ćwiczeń', soundscapes: 'Krajobrazy dźwiękowe', breathingOrbs: 'Sfery i tła wizualne', progress: 'Postępy i analizy', languages: 'Pary językowe', membership: 'Plany członkowskie' },
  ar: { flashcards: 'بطاقات تعليمية غامرة', spacedRepetition: 'تكرار متباعد ذكي', practiceModes: 'أوضاع التمرين', soundscapes: 'مشاهد صوتية', breathingOrbs: 'كرات وخلفيات بصرية', progress: 'التقدم والتحليلات', languages: 'أزواج اللغات', membership: 'مستويات العضوية' },
  zh: { flashcards: '沉浸式闪卡', spacedRepetition: '智能间隔重复', practiceModes: '练习模式', soundscapes: '声景', breathingOrbs: '光球与视觉背景', progress: '进度与分析', languages: '语言对', membership: '会员等级' },
  uk: { flashcards: 'Занурювальні картки', spacedRepetition: 'Розумне повторення', practiceModes: 'Режими практики', soundscapes: 'Звукові ландшафти', breathingOrbs: 'Сфери й візуальні фони', progress: 'Прогрес і аналітика', languages: 'Мовні пари', membership: 'Рівні членства' },
};

const previews = {
  en: {
    flashcard: { progress: '3 / 5', badge: '3D Flip', language: 'French', tapToFlip: 'Tap to flip', stillLearning: 'Still Learning', gotIt: 'Got It', xpPerCard: '+10 XP per card' },
    spacedRep: { masteryTracking: 'Mastery Tracking', mastered: '37 of 95 mastered', greetings: 'Greetings', foodDrink: 'Food & Drink', travel: 'Travel', business: 'Business', streak: 'Streak', accuracy: 'Accuracy', totalXp: 'Total XP' },
    practice: { chooseMode: 'Choose Mode', flashCards: 'Flash Cards', flashCardsDesc: '3D flip cards, swipe to recall', grammarChallenge: 'Grammar Challenge', grammarChallengeDesc: 'Multiple-choice A / B / C / D', wordBuilder: 'Word Builder', wordBuilderDesc: 'Build words letter by letter, 15 XP', intermediate: 'Intermediate', startSession: 'Start Session' },
    soundscapes: { heading: '12 Ambient Soundscapes', subheading: 'Four categories, find your focus', nowPlaying: 'Now Playing', parisCafe: 'Paris Café', bambooForest: 'Japanese Bamboo Forest', deepSpace: 'Deep Space Drift', dominicanBeach: 'Dominican Beach', cozy: 'Cozy', nature: 'Nature', atmospheric: 'Atmospheric', travel: 'Travel' },
    breathingOrbs: { heading: '18 Visual Backgrounds', breathingOrbs: '6 Breathing Orbs', nebulaDrift: '6 Nebula Drift', quantumFlow: '6 Quantum Flow' },
    progress: { heading: 'Your Progress', level: 'Level 12', thisWeek: 'This week', streak: '7-day streak', days: ['M','T','W','T','F','S','S'] },
    languagePairs: { heading: 'Language Pairs', combinations: '25+ Combinations', enEs: 'English → Spanish', enFr: 'English → French', enDe: 'English → German', enJa: 'English → Japanese', enUk: 'English → Ukrainian' },
    membership: { popular: 'Popular', trial: '14-day free Royal trial', starter: 'Starter', threePairs: '3 pairs', offline: 'Offline', allLanguages: 'All Languages', everything: 'Everything' },
  },
  es: {
    flashcard: { progress: '3 / 5', badge: 'Giro 3D', language: 'Francés', tapToFlip: 'Toca para girar', stillLearning: 'Aún aprendiendo', gotIt: 'Entendido', xpPerCard: '+10 XP por tarjeta' },
    spacedRep: { masteryTracking: 'Seguimiento de dominio', mastered: '37 de 95 dominadas', greetings: 'Saludos', foodDrink: 'Comida y bebida', travel: 'Viajes', business: 'Negocios', streak: 'Racha', accuracy: 'Precisión', totalXp: 'XP Total' },
    practice: { chooseMode: 'Elegir modo', flashCards: 'Tarjetas flash', flashCardsDesc: 'Tarjetas 3D, desliza para recordar', grammarChallenge: 'Desafío gramatical', grammarChallengeDesc: 'Opción múltiple A / B / C / D', wordBuilder: 'Constructor de palabras', wordBuilderDesc: 'Construye palabras letra por letra, 15 XP', intermediate: 'Intermedio', startSession: 'Iniciar sesión' },
    soundscapes: { heading: '12 paisajes sonoros', subheading: 'Cuatro categorías, encuentra tu enfoque', nowPlaying: 'Reproduciendo', parisCafe: 'Café de París', bambooForest: 'Bosque de bambú japonés', deepSpace: 'Espacio profundo', dominicanBeach: 'Playa dominicana', cozy: 'Acogedor', nature: 'Naturaleza', atmospheric: 'Atmosférico', travel: 'Viajes' },
    breathingOrbs: { heading: '18 fondos visuales', breathingOrbs: '6 orbes de respiración', nebulaDrift: '6 Nebula Drift', quantumFlow: '6 Quantum Flow' },
    progress: { heading: 'Tu progreso', level: 'Nivel 12', thisWeek: 'Esta semana', streak: 'Racha de 7 días', days: ['L','M','X','J','V','S','D'] },
    languagePairs: { heading: 'Pares de idiomas', combinations: '25+ combinaciones', enEs: 'Inglés → Español', enFr: 'Inglés → Francés', enDe: 'Inglés → Alemán', enJa: 'Inglés → Japonés', enUk: 'Inglés → Ucraniano' },
    membership: { popular: 'Popular', trial: 'Prueba Royal gratis de 14 días', starter: 'Inicial', threePairs: '3 pares', offline: 'Sin conexión', allLanguages: 'Todos los idiomas', everything: 'Todo' },
  },
  fr: {
    flashcard: { progress: '3 / 5', badge: 'Retournement 3D', language: 'Français', tapToFlip: 'Toucher pour retourner', stillLearning: 'En apprentissage', gotIt: 'Compris', xpPerCard: '+10 XP par carte' },
    spacedRep: { masteryTracking: 'Suivi de maîtrise', mastered: '37 sur 95 maîtrisés', greetings: 'Salutations', foodDrink: 'Nourriture & boissons', travel: 'Voyage', business: 'Affaires', streak: 'Série', accuracy: 'Précision', totalXp: 'XP Total' },
    practice: { chooseMode: 'Choisir un mode', flashCards: 'Cartes mémoire', flashCardsDesc: 'Cartes 3D, glissez pour rappeler', grammarChallenge: 'Défi grammaire', grammarChallengeDesc: 'QCM A / B / C / D', wordBuilder: 'Constructeur de mots', wordBuilderDesc: 'Construisez mot par mot, 15 XP', intermediate: 'Intermédiaire', startSession: 'Démarrer la session' },
    soundscapes: { heading: '12 ambiances sonores', subheading: 'Quatre catégories, trouvez votre concentration', nowPlaying: 'En lecture', parisCafe: 'Café parisien', bambooForest: 'Forêt de bambous japonaise', deepSpace: 'Espace profond', dominicanBeach: 'Plage dominicaine', cozy: 'Cocooning', nature: 'Nature', atmospheric: 'Atmosphérique', travel: 'Voyage' },
    breathingOrbs: { heading: '18 fonds visuels', breathingOrbs: '6 orbes de respiration', nebulaDrift: '6 Nebula Drift', quantumFlow: '6 Quantum Flow' },
    progress: { heading: 'Votre progression', level: 'Niveau 12', thisWeek: 'Cette semaine', streak: 'Série de 7 jours', days: ['L','M','M','J','V','S','D'] },
    languagePairs: { heading: 'Paires de langues', combinations: '25+ combinaisons', enEs: 'Anglais → Espagnol', enFr: 'Anglais → Français', enDe: 'Anglais → Allemand', enJa: 'Anglais → Japonais', enUk: 'Anglais → Ukrainien' },
    membership: { popular: 'Populaire', trial: 'Essai Royal gratuit de 14 jours', starter: 'Débutant', threePairs: '3 paires', offline: 'Hors ligne', allLanguages: 'Toutes les langues', everything: 'Tout' },
  },
  ja: {
    flashcard: { progress: '3 / 5', badge: '3Dフリップ', language: 'フランス語', tapToFlip: 'タップで裏返す', stillLearning: 'まだ学習中', gotIt: '理解した', xpPerCard: '+10 XP/カード' },
    spacedRep: { masteryTracking: '習熟度追跡', mastered: '95中37を習得', greetings: '挨拶', foodDrink: '飲食', travel: '旅行', business: 'ビジネス', streak: '連続', accuracy: '正答率', totalXp: '合計XP' },
    practice: { chooseMode: 'モードを選択', flashCards: 'フラッシュカード', flashCardsDesc: '3Dカード、スワイプで復習', grammarChallenge: '文法チャレンジ', grammarChallengeDesc: '四択問題 A / B / C / D', wordBuilder: 'ワードビルダー', wordBuilderDesc: '一文字ずつ構築、15 XP', intermediate: '中級', startSession: 'セッション開始' },
    soundscapes: { heading: '12のサウンドスケープ', subheading: '4カテゴリーで集中力を高める', nowPlaying: '再生中', parisCafe: 'パリのカフェ', bambooForest: '日本の竹林', deepSpace: 'ディープスペースドリフト', dominicanBeach: 'ドミニカのビーチ', cozy: 'くつろぎ', nature: '自然', atmospheric: '雰囲気', travel: '旅' },
    breathingOrbs: { heading: '18のビジュアル背景', breathingOrbs: '6つのブリージングオーブ', nebulaDrift: '6つのNebula Drift', quantumFlow: '6つのQuantum Flow' },
    progress: { heading: '学習の進捗', level: 'レベル12', thisWeek: '今週', streak: '7日間連続', days: ['月','火','水','木','金','土','日'] },
    languagePairs: { heading: '言語ペア', combinations: '25以上の組み合わせ', enEs: '英語 → スペイン語', enFr: '英語 → フランス語', enDe: '英語 → ドイツ語', enJa: '英語 → 日本語', enUk: '英語 → ウクライナ語' },
    membership: { popular: '人気', trial: '14日間Royal無料体験', starter: 'スターター', threePairs: '3ペア', offline: 'オフライン', allLanguages: '全言語', everything: 'すべて' },
  },
  de: {
    flashcard: { progress: '3 / 5', badge: '3D-Flip', language: 'Französisch', tapToFlip: 'Tippen zum Umdrehen', stillLearning: 'Noch am Lernen', gotIt: 'Verstanden', xpPerCard: '+10 XP pro Karte' },
    spacedRep: { masteryTracking: 'Fortschrittsverfolgung', mastered: '37 von 95 gemeistert', greetings: 'Begrüßungen', foodDrink: 'Essen & Trinken', travel: 'Reise', business: 'Geschäft', streak: 'Serie', accuracy: 'Genauigkeit', totalXp: 'Gesamt-XP' },
    practice: { chooseMode: 'Modus wählen', flashCards: 'Karteikarten', flashCardsDesc: '3D-Karten, wischen zum Erinnern', grammarChallenge: 'Grammatik-Herausforderung', grammarChallengeDesc: 'Multiple-Choice A / B / C / D', wordBuilder: 'Wortbaukasten', wordBuilderDesc: 'Buchstabe für Buchstabe aufbauen, 15 XP', intermediate: 'Mittelstufe', startSession: 'Sitzung starten' },
    soundscapes: { heading: '12 Klanglandschaften', subheading: 'Vier Kategorien für Ihre Konzentration', nowPlaying: 'Wird abgespielt', parisCafe: 'Pariser Café', bambooForest: 'Japanischer Bambuswald', deepSpace: 'Weltraum-Drift', dominicanBeach: 'Dominikanischer Strand', cozy: 'Gemütlich', nature: 'Natur', atmospheric: 'Atmosphärisch', travel: 'Reise' },
    breathingOrbs: { heading: '18 visuelle Hintergründe', breathingOrbs: '6 Atemorben', nebulaDrift: '6 Nebula Drift', quantumFlow: '6 Quantum Flow' },
    progress: { heading: 'Ihr Fortschritt', level: 'Level 12', thisWeek: 'Diese Woche', streak: '7-Tage-Serie', days: ['Mo','Di','Mi','Do','Fr','Sa','So'] },
    languagePairs: { heading: 'Sprachpaare', combinations: '25+ Kombinationen', enEs: 'Englisch → Spanisch', enFr: 'Englisch → Französisch', enDe: 'Englisch → Deutsch', enJa: 'Englisch → Japanisch', enUk: 'Englisch → Ukrainisch' },
    membership: { popular: 'Beliebt', trial: '14-Tage Royal Probeabo', starter: 'Starter', threePairs: '3 Paare', offline: 'Offline', allLanguages: 'Alle Sprachen', everything: 'Alles' },
  },
  pl: {
    flashcard: { progress: '3 / 5', badge: 'Obrót 3D', language: 'Francuski', tapToFlip: 'Dotknij, by odwrócić', stillLearning: 'Nadal uczę się', gotIt: 'Rozumiem', xpPerCard: '+10 XP za kartę' },
    spacedRep: { masteryTracking: 'Śledzenie biegłości', mastered: '37 z 95 opanowanych', greetings: 'Powitania', foodDrink: 'Jedzenie i napoje', travel: 'Podróże', business: 'Biznes', streak: 'Seria', accuracy: 'Dokładność', totalXp: 'Łączne XP' },
    practice: { chooseMode: 'Wybierz tryb', flashCards: 'Fiszki', flashCardsDesc: 'Karty 3D, przesuń by przypomnieć', grammarChallenge: 'Wyzwanie gramatyczne', grammarChallengeDesc: 'Wielokrotny wybór A / B / C / D', wordBuilder: 'Kreator słów', wordBuilderDesc: 'Buduj słowa litera po literze, 15 XP', intermediate: 'Średniozaawansowany', startSession: 'Rozpocznij sesję' },
    soundscapes: { heading: '12 krajobrazów dźwiękowych', subheading: 'Cztery kategorie, znajdź swój fokus', nowPlaying: 'Teraz gra', parisCafe: 'Paryska kawiarnia', bambooForest: 'Japoński las bambusowy', deepSpace: 'Głęboka przestrzeń', dominicanBeach: 'Dominikańska plaża', cozy: 'Przytulne', nature: 'Natura', atmospheric: 'Atmosferyczne', travel: 'Podróże' },
    breathingOrbs: { heading: '18 tła wizualnych', breathingOrbs: '6 sfer oddechowych', nebulaDrift: '6 Nebula Drift', quantumFlow: '6 Quantum Flow' },
    progress: { heading: 'Twoje postępy', level: 'Poziom 12', thisWeek: 'Ten tydzień', streak: '7-dniowa seria', days: ['Pn','Wt','Śr','Cz','Pt','So','Nd'] },
    languagePairs: { heading: 'Pary językowe', combinations: '25+ kombinacji', enEs: 'Angielski → Hiszpański', enFr: 'Angielski → Francuski', enDe: 'Angielski → Niemiecki', enJa: 'Angielski → Japoński', enUk: 'Angielski → Ukraiński' },
    membership: { popular: 'Popularne', trial: '14-dniowy darmowy Royal', starter: 'Startowy', threePairs: '3 pary', offline: 'Offline', allLanguages: 'Wszystkie języki', everything: 'Wszystko' },
  },
  ar: {
    flashcard: { progress: '٣ / ٥', badge: 'قلب ثلاثي الأبعاد', language: 'الفرنسية', tapToFlip: 'انقر للقلب', stillLearning: 'ما زلت أتعلم', gotIt: 'فهمت', xpPerCard: '+١٠ XP لكل بطاقة' },
    spacedRep: { masteryTracking: 'تتبع الإتقان', mastered: '٣٧ من ٩٥ أتقنت', greetings: 'التحيات', foodDrink: 'طعام وشراب', travel: 'سفر', business: 'أعمال', streak: 'سلسلة', accuracy: 'الدقة', totalXp: 'إجمالي XP' },
    practice: { chooseMode: 'اختر الوضع', flashCards: 'بطاقات تعليمية', flashCardsDesc: 'بطاقات ثلاثية الأبعاد، اسحب للتذكر', grammarChallenge: 'تحدي القواعد', grammarChallengeDesc: 'اختيار من متعدد أ / ب / ج / د', wordBuilder: 'بناء الكلمات', wordBuilderDesc: 'ابنِ الكلمات حرفاً بحرف، ١٥ XP', intermediate: 'متوسط', startSession: 'بدء الجلسة' },
    soundscapes: { heading: '١٢ مشهداً صوتياً', subheading: 'أربع فئات، اعثر على تركيزك', nowPlaying: 'قيد التشغيل', parisCafe: 'مقهى باريسي', bambooForest: 'غابة الخيزران اليابانية', deepSpace: 'انجراف الفضاء العميق', dominicanBeach: 'شاطئ دومينيكي', cozy: 'دافئ', nature: 'طبيعة', atmospheric: 'أجواء', travel: 'سفر' },
    breathingOrbs: { heading: '١٨ خلفية بصرية', breathingOrbs: '٦ كرات تنفس', nebulaDrift: '٦ Nebula Drift', quantumFlow: '٦ Quantum Flow' },
    progress: { heading: 'تقدمك', level: 'المستوى ١٢', thisWeek: 'هذا الأسبوع', streak: 'سلسلة ٧ أيام', days: ['ن','ث','ر','خ','ج','س','ح'] },
    languagePairs: { heading: 'أزواج اللغات', combinations: '٢٥+ تركيبة', enEs: 'إنجليزي → إسباني', enFr: 'إنجليزي → فرنسي', enDe: 'إنجليزي → ألماني', enJa: 'إنجليزي → ياباني', enUk: 'إنجليزي → أوكراني' },
    membership: { popular: 'شائع', trial: 'تجربة Royal مجانية ١٤ يوماً', starter: 'مبتدئ', threePairs: '٣ أزواج', offline: 'بدون إنترنت', allLanguages: 'جميع اللغات', everything: 'كل شيء' },
  },
  zh: {
    flashcard: { progress: '3 / 5', badge: '3D翻转', language: '法语', tapToFlip: '点击翻转', stillLearning: '仍在学习', gotIt: '已掌握', xpPerCard: '+10 XP/卡' },
    spacedRep: { masteryTracking: '掌握度追踪', mastered: '95中已掌握37', greetings: '问候', foodDrink: '饮食', travel: '旅行', business: '商务', streak: '连续', accuracy: '准确率', totalXp: '总XP' },
    practice: { chooseMode: '选择模式', flashCards: '闪卡', flashCardsDesc: '3D卡片，滑动复习', grammarChallenge: '语法挑战', grammarChallengeDesc: '选择题 A / B / C / D', wordBuilder: '单词构建', wordBuilderDesc: '逐字构建，15 XP', intermediate: '中级', startSession: '开始练习' },
    soundscapes: { heading: '12个声景', subheading: '四大类别，找到专注力', nowPlaying: '正在播放', parisCafe: '巴黎咖啡馆', bambooForest: '日本竹林', deepSpace: '深空漂流', dominicanBeach: '多米尼加海滩', cozy: '温馨', nature: '自然', atmospheric: '氛围', travel: '旅行' },
    breathingOrbs: { heading: '18个视觉背景', breathingOrbs: '6种呼吸光球', nebulaDrift: '6种Nebula Drift', quantumFlow: '6种Quantum Flow' },
    progress: { heading: '您的进度', level: '等级 12', thisWeek: '本周', streak: '7天连续', days: ['一','二','三','四','五','六','日'] },
    languagePairs: { heading: '语言对', combinations: '25+种组合', enEs: '英语 → 西班牙语', enFr: '英语 → 法语', enDe: '英语 → 德语', enJa: '英语 → 日语', enUk: '英语 → 乌克兰语' },
    membership: { popular: '热门', trial: '14天免费Royal体验', starter: '入门', threePairs: '3对', offline: '离线', allLanguages: '全部语言', everything: '全部' },
  },
  uk: {
    flashcard: { progress: '3 / 5', badge: '3D-переворот', language: 'Французька', tapToFlip: 'Торкніться, щоб перевернути', stillLearning: 'Ще вчуся', gotIt: 'Зрозумів', xpPerCard: '+10 XP за картку' },
    spacedRep: { masteryTracking: 'Відстеження майстерності', mastered: '37 з 95 засвоєно', greetings: 'Привітання', foodDrink: 'Їжа та напої', travel: 'Подорожі', business: 'Бізнес', streak: 'Серія', accuracy: 'Точність', totalXp: 'Загальний XP' },
    practice: { chooseMode: 'Обрати режим', flashCards: 'Картки', flashCardsDesc: '3D-картки, свайп для повторення', grammarChallenge: 'Граматичний виклик', grammarChallengeDesc: 'Вибір з кількох А / Б / В / Г', wordBuilder: 'Конструктор слів', wordBuilderDesc: 'Будуйте слова літера за літерою, 15 XP', intermediate: 'Середній', startSession: 'Почати сесію' },
    soundscapes: { heading: '12 звукових ландшафтів', subheading: 'Чотири категорії, знайдіть свій фокус', nowPlaying: 'Зараз грає', parisCafe: 'Паризьке кафе', bambooForest: 'Японський бамбуковий ліс', deepSpace: 'Глибокий космос', dominicanBeach: 'Домініканський пляж', cozy: 'Затишок', nature: 'Природа', atmospheric: 'Атмосферне', travel: 'Подорожі' },
    breathingOrbs: { heading: '18 візуальних фонів', breathingOrbs: '6 дихальних сфер', nebulaDrift: '6 Nebula Drift', quantumFlow: '6 Quantum Flow' },
    progress: { heading: 'Ваш прогрес', level: 'Рівень 12', thisWeek: 'Цей тиждень', streak: '7-денна серія', days: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'] },
    languagePairs: { heading: 'Мовні пари', combinations: '25+ комбінацій', enEs: 'Англійська → Іспанська', enFr: 'Англійська → Французька', enDe: 'Англійська → Німецька', enJa: 'Англійська → Японська', enUk: 'Англійська → Українська' },
    membership: { popular: 'Популярне', trial: '14-денний безкоштовний Royal', starter: 'Стартовий', threePairs: '3 пари', offline: 'Офлайн', allLanguages: 'Усі мови', everything: 'Все' },
  },
};

/* ─── Section titles (8 sections) ─── */
const sectionTitles = {
  en: { flashcards: 'Immersive Flashcards', spacedRepetition: 'Smart Spaced Repetition', practiceModes: '3 Distinct Practice Modes', soundscapes: '12 Ambient Soundscapes', breathingOrbs: 'Breathing Orbs & Visual Backgrounds', progress: 'Progress & Analytics', languages: '25 Language Pairs', membership: 'Membership Tiers' },
  es: { flashcards: 'Tarjetas flash inmersivas', spacedRepetition: 'Repetición espaciada inteligente', practiceModes: '3 modos de práctica distintos', soundscapes: '12 paisajes sonoros', breathingOrbs: 'Orbes de respiración y fondos visuales', progress: 'Progreso y análisis', languages: '25 pares de idiomas', membership: 'Niveles de membresía' },
  fr: { flashcards: 'Cartes mémoire immersives', spacedRepetition: 'Répétition espacée intelligente', practiceModes: "3 modes d'entraînement distincts", soundscapes: '12 ambiances sonores', breathingOrbs: 'Orbes de respiration et fonds visuels', progress: 'Progrès et analyses', languages: '25 paires de langues', membership: "Niveaux d'abonnement" },
  ja: { flashcards: '没入型フラッシュカード', spacedRepetition: 'スマート間隔反復', practiceModes: '3つの練習モード', soundscapes: '12のサウンドスケープ', breathingOrbs: 'ブリージングオーブとビジュアル背景', progress: '進捗と分析', languages: '25の言語ペア', membership: 'メンバーシップティア' },
  de: { flashcards: 'Immersive Karteikarten', spacedRepetition: 'Intelligente Wiederholung', practiceModes: '3 verschiedene Übungsmodi', soundscapes: '12 Klanglandschaften', breathingOrbs: 'Atemorben & visuelle Hintergründe', progress: 'Fortschritt & Analysen', languages: '25 Sprachpaare', membership: 'Mitgliedschaftsstufen' },
  pl: { flashcards: 'Immersyjne fiszki', spacedRepetition: 'Inteligentna powtórka', practiceModes: '3 tryby ćwiczeń', soundscapes: '12 krajobrazów dźwiękowych', breathingOrbs: 'Sfery oddechowe i tła wizualne', progress: 'Postępy i analizy', languages: '25 par językowych', membership: 'Plany członkowskie' },
  ar: { flashcards: 'بطاقات تعليمية غامرة', spacedRepetition: 'تكرار متباعد ذكي', practiceModes: '٣ أوضاع تمرين مميزة', soundscapes: '١٢ مشهداً صوتياً', breathingOrbs: 'كرات التنفس وخلفيات بصرية', progress: 'التقدم والتحليلات', languages: '٢٥ زوج لغات', membership: 'مستويات العضوية' },
  zh: { flashcards: '沉浸式闪卡', spacedRepetition: '智能间隔重复', practiceModes: '3种练习模式', soundscapes: '12个声景', breathingOrbs: '呼吸光球与视觉背景', progress: '进度与分析', languages: '25个语言对', membership: '会员等级' },
  uk: { flashcards: 'Занурювальні картки', spacedRepetition: 'Розумне інтервальне повторення', practiceModes: '3 унікальних режими практики', soundscapes: '12 звукових ландшафтів', breathingOrbs: 'Дихальні сфери й візуальні фони', progress: 'Прогрес і аналітика', languages: '25 мовних пар', membership: 'Рівні членства' },
};

/* ─── Section descriptions & capabilities (English base, copied to other locales) ─── */
/* NOTE: Long marketing copy uses English as base for all locales.
   Professional translations should be added in Epic 12 per locale. */
const sectionContent = {
  flashcards: {
    description: [
      "LumenLingo's flashcard experience is unlike anything else. Each card is a glass-morphic surface that responds to touch with silky-smooth gestures — swipe right for correct, left for incorrect, and watch the card animate with satisfying physics-based feedback.",
      'Cards display source and target language text with pronunciation guides, and smart colour coding reinforces your memory through visual association. The frosted-glass design adapts to dark and light modes with cosmic and architectural aesthetics respectively.',
      'Every interaction is deliberate. The flip animation reveals the answer with a graceful 3D rotation. Colour-coded borders flash green for "Got It" and red for "Still Learning". Sound feedback complements each gesture, creating a multi-sensory learning loop that earns you 10 XP per correct answer.',
    ],
    capabilities: [
      'Swipe gestures with physics-based spring animations',
      '3D card flip with glass-morphic design',
      'Instant colour-coded feedback on every answer',
      'Pronunciation guides for non-Latin scripts',
      'Multi-sensory feedback: visual + audio',
      'Customisable deck sizes per tier (50–unlimited)',
    ],
  },
  spacedRepetition: {
    description: [
      "LumenLingo tracks your performance across every card and surfaces vocabulary you need to practise most. Words you struggle with appear more frequently; words you've mastered recede — so you spend time where it matters.",
      'The system organises vocabulary into categories — Greetings, Food, Travel, Business, and more — tracking your mastered word count per category. Clear progress bars show exactly how much of each topic you\'ve conquered.',
      'Unlike rigid SRS systems, LumenLingo adapts in real time. Miss a card after a long break? It reappears sooner. Nail five in a row? The word joins your mastered set. The algorithm works with your brain, not against it.',
    ],
    capabilities: [
      'Per-category mastery tracking',
      'Mastered word sets that grow with you',
      'Accuracy and streak statistics',
      'Real-time difficulty adjustment',
      'Visual mastery progress bars per topic',
      'XP system: 10 XP per Flash Card, 10 per Quiz, 15 per Word Builder',
    ],
  },
  practiceModes: {
    description: [
      'Variety is the engine of engagement. LumenLingo offers three fundamentally different practice modes — each targeting a different cognitive skill — so your sessions never feel repetitive.',
      'Flash Cards build recognition speed with satisfying 3D flip animations. Grammar Challenge tests your understanding with multiple-choice A/B/C/D questions and explanation panels that teach you why an answer is correct. Word Builder challenges you to construct words letter by letter, strengthening spelling and recall simultaneously.',
      'Each mode supports three difficulty levels — Beginner, Intermediate, and Advanced — progressively unlocked through your tier. Idle hints nudge you gently if you hesitate, keeping the learning flow unbroken.',
    ],
    capabilities: [
      'Flash Cards: 3D flip with swipe gestures',
      'Grammar Challenge: A/B/C/D with explanations',
      'Word Builder: letter-by-letter construction, 15 XP',
      'Three difficulty levels per mode',
      'Progress tracked independently per mode',
      'Idle hints to keep you in flow',
    ],
  },
  soundscapes: {
    description: [
      'Transform your study environment with 12 handcrafted ambient soundscapes spanning four categories: Cozy, Nature, Atmospheric, and Travel. Each soundscape is a carefully layered audio composition designed to enhance focus and reduce distractions.',
      'Study in a Parisian café with the gentle murmur of conversation and clinking cups. Or drift into deep focus with the cosmic hum of a space station. Every soundscape is mixed at optimal volume levels to sit beneath your learning without competing for attention.',
      'Research shows that consistent ambient audio creates environmental context cues that boost retention. When you study with the same soundscape, your brain associates the audio signature with the learning state, making recall easier.',
    ],
    capabilities: [
      'Cozy: Paris Café, Rainy Window, Midnight Jazz Piano',
      'Nature: Mountain Campfire, Japanese Bamboo Forest, Amazon Rainforest',
      'Atmospheric: Observatory Night, Desert Night Sky, Deep Space Drift',
      'Travel: Dominican Beach, Tokyo Night Street, Venice Canal Morning',
      'Volume balancing with system audio',
      'Tier-gated access (0 free → 1 Pro → 8 Elite → 12 Royal)',
    ],
  },
  breathingOrbs: {
    description: [
      'LumenLingo is the only language app that treats visual wellness as a core feature. Breathing Orbs are calming, animated backgrounds that gently pulse in rhythm — creating a meditative atmosphere that reduces learning anxiety and sharpens focus.',
      'Choose from 6 city-inspired colour schemes, each evoking the palette of a real-world location. Beyond orbs, explore Quantum Flow scenes — dynamic particle systems that create mesmerising visual flow — and Nebula Drift presets with real-time cosmic animations rendered in Metal.',
      "These aren't just eye candy. Studies in environmental psychology show that calming visual stimuli reduce cortisol levels and improve working memory. Every visual background in LumenLingo is designed with this research in mind.",
    ],
    capabilities: [
      '6 city-inspired Breathing Orb colour schemes',
      '6 Quantum Flow particle scenes (Elite+)',
      '6 Nebula Drift cosmic presets (Elite+)',
      'Real-time Metal shader rendering',
      'Respects reduced-motion preferences',
      'Tier-gated access with progressive unlocking',
    ],
  },
  progress: {
    description: [
      "LumenLingo's progress system turns learning into a visible journey. An XP system rewards consistent practice — earn points for every correct answer, streak bonuses for consecutive days, and multipliers based on your membership tier.",
      'Track your per-game statistics across all three practice modes: accuracy rates, average response times, most-practised categories, and streaks. Beautiful visualisations make your data easy to understand at a glance.',
      'Daily goals keep you accountable. Set a target practice time or card count, and watch your daily ring fill as you make progress. Monthly reports (Elite and Royal tiers) summarise your growth with detailed breakdowns by language pair and difficulty level.',
    ],
    capabilities: [
      'XP system with tier-based multipliers (1×–2×)',
      'Streak tracking with daily goals',
      'Per-mode accuracy and speed analytics',
      'Category mastery breakdowns',
      'Beautiful progress visualisations',
      'Monthly reports (Elite/Royal)',
    ],
  },
  languages: {
    description: [
      'LumenLingo supports 9 languages — English, Spanish, French, German, Japanese, Chinese, Arabic, Polish, and Ukrainian — in 25 bidirectional pair combinations. Learn Spanish from English, or flip it around and learn English from Spanish.',
      'Each language pair comes with a curated vocabulary deck covering essential categories: greetings, food, travel, business, emotions, and more. Non-Latin scripts include romanisation and pronunciation guides to lower the barrier to entry.',
      'Language pairs are tier-gated: Free users get 3 core pairs (English→Spanish, French, German), Pro unlocks 7 pairs including Japanese and Arabic, and Elite/Royal unlock the full catalogue of 25 pairs.',
    ],
    capabilities: [
      '9 languages: ES, FR, DE, JA, ZH, AR, PL, UK, EN',
      '25 bidirectional pair combinations',
      'Curated vocabulary per category',
      'Romanisation for non-Latin scripts',
      'Tier-gated: 3 Free → 7 Pro → 25 Elite/Royal',
      'Bidirectional learning support',
    ],
  },
  membership: {
    description: [
      'LumenLingo offers five membership tiers — Free, Trial, Pro, Elite, and Royal — each designed for a different stage of your learning journey. Start with a generous free tier and upgrade as your ambitions grow.',
      'Every tier unlocks progressively more language pairs, soundscapes, visual backgrounds, and advanced features. Pro adds unlimited practice time and offline mode. Elite opens all language pairs, advanced difficulty, and Quantum Flow scenes. Royal gives you everything — including all Nebula Drift presets, unlimited decks, and a 2× XP multiplier.',
      'All tiers are managed through the App Store with simple monthly billing. Try Royal-level access free for 14 days to experience everything LumenLingo has to offer.',
    ],
    capabilities: [
      'Free tier with 3 language pairs and 50-card decks',
      'Pro (£9.99/mo): unlimited practice + offline mode',
      'Elite (£19.99/mo): all languages + Quantum Flow',
      'Royal (£99.99/mo): everything + 2× XP + Nebula Drift',
      '14-day free Royal trial',
      'Simple App Store subscription management',
    ],
  },
};

/* ─── Walkthrough strings ─── */
const walkthroughStrings = {
  en: {
    cardProgress: 'Card 1 of 5',
    french: 'French',
    bonjour: 'Bonjour',
    tapToFlip: 'Tap to flip',
    english: 'English',
    hello: 'Hello',
    gotIt: 'GOT IT ✓',
    spanish: 'Spanish',
    gracias: 'Gracias',
    wordBuilder: 'Word Builder',
    buildWord: 'Build the word for "Hello"',
    correct: '✓ Correct!',
    xpReward: '+15 XP',
    soundscapes: 'Soundscapes',
    findFocus: 'Find your focus',
    nowPlaying: 'Now Playing',
    coffeeShop: 'Coffee Shop',
    oceanWaves: 'Ocean Waves',
    deepSpace: 'Deep Space',
    parisCafe: 'Paris Café',
    mountainStream: 'Mountain Stream',
    cozy: 'Cozy',
    nature: 'Nature',
    atmospheric: 'Atmospheric',
    travel: 'Travel',
  },
  es: { cardProgress: 'Tarjeta 1 de 5', french: 'Francés', bonjour: 'Bonjour', tapToFlip: 'Toca para girar', english: 'Inglés', hello: 'Hello', gotIt: '¡ENTENDIDO ✓', spanish: 'Español', gracias: 'Gracias', wordBuilder: 'Constructor de palabras', buildWord: 'Construye la palabra para "Hello"', correct: '✓ ¡Correcto!', xpReward: '+15 XP', soundscapes: 'Paisajes sonoros', findFocus: 'Encuentra tu enfoque', nowPlaying: 'Reproduciendo', coffeeShop: 'Cafetería', oceanWaves: 'Olas del océano', deepSpace: 'Espacio profundo', parisCafe: 'Café de París', mountainStream: 'Arroyo de montaña', cozy: 'Acogedor', nature: 'Naturaleza', atmospheric: 'Atmosférico', travel: 'Viajes' },
  fr: { cardProgress: 'Carte 1 sur 5', french: 'Français', bonjour: 'Bonjour', tapToFlip: 'Toucher pour retourner', english: 'Anglais', hello: 'Hello', gotIt: 'COMPRIS ✓', spanish: 'Espagnol', gracias: 'Gracias', wordBuilder: 'Constructeur de mots', buildWord: 'Construisez le mot pour "Hello"', correct: '✓ Correct !', xpReward: '+15 XP', soundscapes: 'Ambiances sonores', findFocus: 'Trouvez votre concentration', nowPlaying: 'En lecture', coffeeShop: 'Café', oceanWaves: "Vagues de l'océan", deepSpace: 'Espace profond', parisCafe: 'Café parisien', mountainStream: 'Ruisseau de montagne', cozy: 'Cocooning', nature: 'Nature', atmospheric: 'Atmosphérique', travel: 'Voyage' },
  ja: { cardProgress: 'カード 1/5', french: 'フランス語', bonjour: 'Bonjour', tapToFlip: 'タップで裏返す', english: '英語', hello: 'Hello', gotIt: '理解 ✓', spanish: 'スペイン語', gracias: 'Gracias', wordBuilder: 'ワードビルダー', buildWord: '"Hello"の単語を構築', correct: '✓ 正解！', xpReward: '+15 XP', soundscapes: 'サウンドスケープ', findFocus: '集中力を高める', nowPlaying: '再生中', coffeeShop: 'コーヒーショップ', oceanWaves: '海の波', deepSpace: '深宇宙', parisCafe: 'パリのカフェ', mountainStream: '山のせせらぎ', cozy: 'くつろぎ', nature: '自然', atmospheric: '雰囲気', travel: '旅' },
  de: { cardProgress: 'Karte 1 von 5', french: 'Französisch', bonjour: 'Bonjour', tapToFlip: 'Tippen zum Umdrehen', english: 'Englisch', hello: 'Hello', gotIt: 'VERSTANDEN ✓', spanish: 'Spanisch', gracias: 'Gracias', wordBuilder: 'Wortbaukasten', buildWord: 'Baue das Wort für "Hello"', correct: '✓ Richtig!', xpReward: '+15 XP', soundscapes: 'Klanglandschaften', findFocus: 'Finden Sie Ihren Fokus', nowPlaying: 'Wird abgespielt', coffeeShop: 'Kaffeehaus', oceanWaves: 'Meereswellen', deepSpace: 'Weltraum', parisCafe: 'Pariser Café', mountainStream: 'Bergbach', cozy: 'Gemütlich', nature: 'Natur', atmospheric: 'Atmosphärisch', travel: 'Reise' },
  pl: { cardProgress: 'Karta 1 z 5', french: 'Francuski', bonjour: 'Bonjour', tapToFlip: 'Dotknij, by odwrócić', english: 'Angielski', hello: 'Hello', gotIt: 'ROZUMIEM ✓', spanish: 'Hiszpański', gracias: 'Gracias', wordBuilder: 'Kreator słów', buildWord: 'Zbuduj słowo "Hello"', correct: '✓ Poprawnie!', xpReward: '+15 XP', soundscapes: 'Krajobrazy dźwiękowe', findFocus: 'Znajdź swój fokus', nowPlaying: 'Teraz gra', coffeeShop: 'Kawiarnia', oceanWaves: 'Fale oceanu', deepSpace: 'Głęboka przestrzeń', parisCafe: 'Paryska kawiarnia', mountainStream: 'Górski strumień', cozy: 'Przytulne', nature: 'Natura', atmospheric: 'Atmosferyczne', travel: 'Podróże' },
  ar: { cardProgress: 'بطاقة ١ من ٥', french: 'الفرنسية', bonjour: 'Bonjour', tapToFlip: 'انقر للقلب', english: 'الإنجليزية', hello: 'Hello', gotIt: 'فهمت ✓', spanish: 'الإسبانية', gracias: 'Gracias', wordBuilder: 'بناء الكلمات', buildWord: 'ابنِ كلمة "Hello"', correct: '✓ صحيح!', xpReward: '+١٥ XP', soundscapes: 'مشاهد صوتية', findFocus: 'اعثر على تركيزك', nowPlaying: 'قيد التشغيل', coffeeShop: 'مقهى', oceanWaves: 'أمواج المحيط', deepSpace: 'فضاء عميق', parisCafe: 'مقهى باريسي', mountainStream: 'جدول جبلي', cozy: 'دافئ', nature: 'طبيعة', atmospheric: 'أجواء', travel: 'سفر' },
  zh: { cardProgress: '卡片 1/5', french: '法语', bonjour: 'Bonjour', tapToFlip: '点击翻转', english: '英语', hello: 'Hello', gotIt: '已掌握 ✓', spanish: '西班牙语', gracias: 'Gracias', wordBuilder: '单词构建', buildWord: '构建单词 "Hello"', correct: '✓ 正确！', xpReward: '+15 XP', soundscapes: '声景', findFocus: '找到专注力', nowPlaying: '正在播放', coffeeShop: '咖啡店', oceanWaves: '海浪', deepSpace: '深空', parisCafe: '巴黎咖啡馆', mountainStream: '山涧', cozy: '温馨', nature: '自然', atmospheric: '氛围', travel: '旅行' },
  uk: { cardProgress: 'Картка 1 з 5', french: 'Французька', bonjour: 'Bonjour', tapToFlip: 'Торкніться для перевороту', english: 'Англійська', hello: 'Hello', gotIt: 'ЗРОЗУМІВ ✓', spanish: 'Іспанська', gracias: 'Gracias', wordBuilder: 'Конструктор слів', buildWord: 'Побудуйте слово "Hello"', correct: '✓ Правильно!', xpReward: '+15 XP', soundscapes: 'Звукові ландшафти', findFocus: 'Знайдіть свій фокус', nowPlaying: 'Зараз грає', coffeeShop: "Кав'ярня", oceanWaves: 'Хвилі океану', deepSpace: 'Глибокий космос', parisCafe: 'Паризьке кафе', mountainStream: 'Гірський потік', cozy: 'Затишок', nature: 'Природа', atmospheric: 'Атмосферне', travel: 'Подорожі' },
};

/* ─── Apply to all locale files ─── */
for (const locale of LOCALES) {
  const filePath = join(MESSAGES, `${locale}.json`);
  const data = JSON.parse(readFileSync(filePath, 'utf8'));
  if (!data.Features) data.Features = {};

  // TOC
  data.Features.toc = toc[locale];

  // Previews
  data.Features.previews = previews[locale];

  // Sections — title translated, descriptions/capabilities use English base for all locales
  // (professional translations to be added in Epic 12)
  const sections = {};
  for (const [key, content] of Object.entries(sectionContent)) {
    sections[key] = {
      title: sectionTitles[locale][key],
      description: content.description,
      capabilities: content.capabilities,
    };
  }
  data.Features.sections = sections;

  // Walkthroughs demo strings
  if (!data.Features.walkthroughs) data.Features.walkthroughs = {};
  data.Features.walkthroughs.demo = walkthroughStrings[locale];

  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ ${locale}.json — Features keys added`);
}
console.log('Done — all 9 locale files updated.');

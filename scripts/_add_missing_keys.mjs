#!/usr/bin/env node
/**
 * Adds missing translation keys to all non-English locale files.
 *
 * Missing namespaces: Careers, Press, Help (entire)
 * Missing keys in existing namespace: EarlyAccess (top-level share/social keys)
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGES_DIR = join(
  import.meta.dirname,
  "..",
  "lumen-lingo-frontend",
  "messages",
);

const LOCALES = ["es", "fr", "ja", "de", "pl", "ar", "zh", "uk"];

// ---------------------------------------------------------------------------
// EarlyAccess — only the keys missing from non-English files
// ---------------------------------------------------------------------------
const earlyAccessKeys = {
  es: {
    shareHeading: "¿Conoces a alguien a quien le encantaría?",
    shareDescription:
      "Comparte con un amante de los idiomas — te lo agradecerá.",
    copyLink: "Copiar enlace",
    copied: "¡Copiado!",
    shareVia: "o comparte vía",
    shareText:
      "Acabo de descubrir LumenLingo — una preciosa app para aprender idiomas con inmersión multisensorial, paisajes sonoros ambientales y métodos respaldados por la ciencia. Échale un vistazo: {url}",
    handcraftedUI: "Interfaz artesanal",
    privacyFirst: "Privacidad ante todo",
    freeToStart: "Gratis para empezar",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "Correo electrónico",
    emailSubject: "Descubre LumenLingo",
  },
  fr: {
    shareHeading: "Vous connaissez quelqu'un qui aimerait ?",
    shareDescription:
      "Partagez avec un passionné de langues — il vous remerciera.",
    copyLink: "Copier le lien",
    copied: "Copié !",
    shareVia: "ou partagez via",
    shareText:
      "Je viens de découvrir LumenLingo — une magnifique application d'apprentissage des langues avec immersion multisensorielle, ambiances sonores et méthodes fondées sur la science. Découvrez : {url}",
    handcraftedUI: "Interface artisanale",
    privacyFirst: "Confidentialité d'abord",
    freeToStart: "Gratuit pour commencer",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "E-mail",
    emailSubject: "Découvrez LumenLingo",
  },
  ja: {
    shareHeading: "気に入りそうな人はいませんか？",
    shareDescription:
      "語学好きの友人にシェアしてください — きっと喜ばれます。",
    copyLink: "リンクをコピー",
    copied: "コピーしました！",
    shareVia: "または次の方法でシェア",
    shareText:
      "LumenLingo を見つけました — マルチセンサリー・イマージョン、アンビエントサウンドスケープ、科学的根拠に基づいた学習法を備えた美しい語学学習アプリです。ぜひご覧ください: {url}",
    handcraftedUI: "手作りのUI",
    privacyFirst: "プライバシー最優先",
    freeToStart: "無料で始められる",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "メール",
    emailSubject: "LumenLingo を発見しよう",
  },
  de: {
    shareHeading: "Kennen Sie jemanden, der das lieben würde?",
    shareDescription:
      "Teilen Sie es mit einem Sprachbegeisterten — er wird es Ihnen danken.",
    copyLink: "Link kopieren",
    copied: "Kopiert!",
    shareVia: "oder teilen über",
    shareText:
      "Ich habe gerade LumenLingo entdeckt — eine wunderschöne Sprachlern-App mit multisensorischem Eintauchen, Ambient-Klangwelten und wissenschaftlich fundierten Methoden. Jetzt ansehen: {url}",
    handcraftedUI: "Handgefertigte Oberfläche",
    privacyFirst: "Datenschutz zuerst",
    freeToStart: "Kostenlos starten",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "E-Mail",
    emailSubject: "Entdecke LumenLingo",
  },
  pl: {
    shareHeading: "Znasz kogoś, komu by się spodobało?",
    shareDescription:
      "Podziel się z miłośnikiem języków — na pewno ci podziękuje.",
    copyLink: "Kopiuj link",
    copied: "Skopiowano!",
    shareVia: "lub udostępnij przez",
    shareText:
      "Właśnie odkryłem LumenLingo — piękną aplikację do nauki języków z wielozmysłową immersją, ambientowymi pejzażami dźwiękowymi i metodami opartymi na nauce. Sprawdź: {url}",
    handcraftedUI: "Ręcznie tworzony interfejs",
    privacyFirst: "Prywatność przede wszystkim",
    freeToStart: "Zacznij za darmo",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "E-mail",
    emailSubject: "Odkryj LumenLingo",
  },
  ar: {
    shareHeading: "هل تعرف شخصًا سيعجبه هذا؟",
    shareDescription: "شاركه مع محبّ للغات — سيشكرك على ذلك.",
    copyLink: "نسخ الرابط",
    copied: "تم النسخ!",
    shareVia: "أو شارك عبر",
    shareText:
      "اكتشفتُ للتوّ LumenLingo — تطبيق رائع لتعلّم اللغات بالانغماس متعدد الحواس، والمقاطع الصوتية المحيطية، وأساليب مدعومة علميًا. ألقِ نظرة: {url}",
    handcraftedUI: "واجهة مصنوعة يدويًا",
    privacyFirst: "الخصوصية أولًا",
    freeToStart: "ابدأ مجانًا",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "البريد الإلكتروني",
    emailSubject: "اكتشف LumenLingo",
  },
  zh: {
    shareHeading: "认识会喜欢的人吗？",
    shareDescription: "分享给热爱语言的朋友 — 他们会感谢你的。",
    copyLink: "复制链接",
    copied: "已复制！",
    shareVia: "或通过以下方式分享",
    shareText:
      "我刚发现了 LumenLingo — 一款精美的语言学习应用，拥有多感官沉浸体验、环境音景和科学支撑的学习方法。快来看看吧: {url}",
    handcraftedUI: "匠心界面",
    privacyFirst: "隐私优先",
    freeToStart: "免费开始",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "电子邮件",
    emailSubject: "探索 LumenLingo",
  },
  uk: {
    shareHeading: "Знаєте когось, кому це сподобається?",
    shareDescription:
      "Поділіться з любителем мов — він вам подякує.",
    copyLink: "Копіювати посилання",
    copied: "Скопійовано!",
    shareVia: "або поділіться через",
    shareText:
      "Щойно відкрив LumenLingo — чудовий додаток для вивчення мов із мультисенсорним зануренням, ембієнтними звуковими ландшафтами та науково обґрунтованими методами. Подивіться: {url}",
    handcraftedUI: "Інтерфейс ручної роботи",
    privacyFirst: "Конфіденційність насамперед",
    freeToStart: "Починайте безкоштовно",
    twitter: "X (Twitter)",
    whatsapp: "WhatsApp",
    email: "Електронна пошта",
    emailSubject: "Відкрийте LumenLingo",
  },
};

// ---------------------------------------------------------------------------
// Careers (entire namespace)
// ---------------------------------------------------------------------------
const careers = {
  es: {
    heading: "Únete al Camino",
    intro: "Estamos construyendo algo en lo que creemos — y nos encantaría contar con tu ayuda.",
    story:
      "LumenLingo está creado actualmente por un fundador en solitario con la ambición de un estudio y la atención al detalle de un artesano. Somos una operación pequeña y apasionada centrada en hacer que el aprendizaje de idiomas sea hermoso, consciente y eficaz.",
    cta: "A medida que LumenLingo crezca, también lo hará el equipo. Si compartes nuestra obsesión por la artesanía y crees que el software puede ser tanto funcional como hermoso, nos encantaría saber de ti.",
    valuesHeading: "Lo Que Valoramos",
    values: {
      craft: "Artesanía Obsesiva",
      craftDesc:
        "Cada píxel, cada animación, cada microinteracción importa. Cuidamos los detalles porque nuestros usuarios no merecen menos.",
      privacy: "Privacidad por Defecto",
      privacyDesc:
        "La confianza del usuario se gana, no se asume. Diseñamos sistemas que respetan los datos desde el primer día.",
      accessibility: "Inclusión por Diseño",
      accessibilityDesc:
        "El software hermoso debe ser usable por todos. La accesibilidad no es una reflexión tardía — es un pilar.",
      curiosity: "Curiosidad Incansable",
      curiosityDesc:
        "Aprender idiomas es conectar con otras culturas. Llevamos esa misma curiosidad a cómo construimos.",
    },
    meta: {
      title: "Empleo — LumenLingo",
      description:
        "Únete al equipo de LumenLingo. Construimos software de aprendizaje de idiomas hermoso y consciente.",
    },
  },
  fr: {
    heading: "Rejoignez l'Aventure",
    intro: "Nous construisons quelque chose en quoi nous croyons — et nous aimerions votre aide.",
    story:
      "LumenLingo est actuellement développé par un fondateur solo avec l'ambition d'un studio et le souci du détail d'un artisan. Nous sommes une petite équipe passionnée, déterminée à rendre l'apprentissage des langues beau, conscient et efficace.",
    cta: "À mesure que LumenLingo grandit, l'équipe grandira aussi. Si vous partagez notre obsession de l'artisanat et croyez que le logiciel peut être à la fois fonctionnel et beau, nous serions ravis de vous entendre.",
    valuesHeading: "Nos Valeurs",
    values: {
      craft: "Artisanat Obsessionnel",
      craftDesc:
        "Chaque pixel, chaque animation, chaque micro-interaction compte. Nous soignons les détails parce que nos utilisateurs ne méritent rien de moins.",
      privacy: "Confidentialité par Défaut",
      privacyDesc:
        "La confiance se mérite, elle ne se présume pas. Nous concevons des systèmes qui respectent les données dès le premier jour.",
      accessibility: "Inclusif par Conception",
      accessibilityDesc:
        "Un logiciel magnifique doit être utilisable par tous. L'accessibilité n'est pas une arrière-pensée — c'est un fondement.",
      curiosity: "Curiosité Inlassable",
      curiosityDesc:
        "Apprendre une langue, c'est se connecter à d'autres cultures. Nous apportons cette même curiosité à notre façon de construire.",
    },
    meta: {
      title: "Carrières — LumenLingo",
      description:
        "Rejoignez l'équipe LumenLingo. Nous créons un logiciel d'apprentissage des langues beau et bienveillant.",
    },
  },
  ja: {
    heading: "この旅に参加しませんか",
    intro: "私たちは信じるものを作っています — あなたの力をお借りしたいのです。",
    story:
      "LumenLingo は現在、スタジオの野心と職人の細部へのこだわりを持つ一人の創業者によって開発されています。私たちは、語学学習を美しく、マインドフルで、効果的なものにすることに情熱を注ぐ小さなチームです。",
    cta: "LumenLingo の成長とともにチームも拡大していきます。ものづくりへのこだわりを共有し、ソフトウェアは機能的でありながら美しくあり得ると信じる方からのご連絡をお待ちしています。",
    valuesHeading: "大切にしていること",
    values: {
      craft: "徹底したものづくり",
      craftDesc:
        "すべてのピクセル、アニメーション、マイクロインタラクションが大切です。ユーザーにふさわしいクオリティのために細部にこだわります。",
      privacy: "デフォルトでプライバシー保護",
      privacyDesc:
        "ユーザーの信頼は勝ち取るもの。初日からデータを尊重するシステムを設計しています。",
      accessibility: "インクルーシブな設計",
      accessibilityDesc:
        "美しいソフトウェアは誰もが使えるべきです。アクセシビリティは後付けではなく、土台です。",
      curiosity: "尽きない好奇心",
      curiosityDesc:
        "語学学習は異文化とのつながり。その好奇心をものづくりにも活かしています。",
    },
    meta: {
      title: "採用情報 — LumenLingo",
      description:
        "LumenLingo チームに参加しませんか。美しくマインドフルな語学学習ソフトウェアを一緒に作りましょう。",
    },
  },
  de: {
    heading: "Werden Sie Teil der Reise",
    intro: "Wir bauen etwas, an das wir glauben — und würden uns über Ihre Hilfe freuen.",
    story:
      "LumenLingo wird derzeit von einem Solo-Gründer entwickelt, mit dem Anspruch eines Studios und der Liebe zum Detail eines Handwerkers. Wir sind ein kleines, leidenschaftliches Team, das Sprachenlernen schön, achtsam und effektiv gestalten will.",
    cta: "Mit dem Wachstum von LumenLingo wächst auch das Team. Wenn Sie unsere Leidenschaft für Handwerkskunst teilen und glauben, dass Software sowohl funktional als auch schön sein kann, freuen wir uns auf Ihre Nachricht.",
    valuesHeading: "Unsere Werte",
    values: {
      craft: "Obsessive Handwerkskunst",
      craftDesc:
        "Jedes Pixel, jede Animation, jede Mikrointeraktion zählt. Wir achten auf Details, weil unsere Nutzer nichts Geringeres verdienen.",
      privacy: "Datenschutz von Anfang an",
      privacyDesc:
        "Nutzervertrauen wird verdient, nicht vorausgesetzt. Wir entwerfen Systeme, die Daten vom ersten Tag an respektieren.",
      accessibility: "Inklusiv von Grund auf",
      accessibilityDesc:
        "Schöne Software sollte von jedem nutzbar sein. Barrierefreiheit ist kein Nachgedanke — sie ist das Fundament.",
      curiosity: "Unermüdliche Neugier",
      curiosityDesc:
        "Sprachen lernen heißt, andere Kulturen kennenzulernen. Dieselbe Neugier bringen wir in unsere Arbeit ein.",
    },
    meta: {
      title: "Karriere — LumenLingo",
      description:
        "Werden Sie Teil des LumenLingo-Teams. Wir entwickeln schöne und achtsame Sprachlernsoftware.",
    },
  },
  pl: {
    heading: "Dołącz do Podróży",
    intro: "Tworzymy coś, w co wierzymy — i chętnie przyjmiemy Twoją pomoc.",
    story:
      "LumenLingo jest obecnie tworzony przez jednego założyciela z ambicjami studia i dbałością o szczegóły rzemieślnika. Jesteśmy małym, pełnym pasji zespołem skupionym na tym, by nauka języków była piękna, świadoma i skuteczna.",
    cta: "Wraz z rozwojem LumenLingo będzie rosnąć także zespół. Jeśli dzielisz naszą obsesję na punkcie rzemiosła i wierzysz, że oprogramowanie może być zarówno funkcjonalne, jak i piękne, chętnie usłyszymy od Ciebie.",
    valuesHeading: "Co Cenimy",
    values: {
      craft: "Obsesyjna Dbałość o Rzemiosło",
      craftDesc:
        "Każdy piksel, każda animacja, każda mikrointerakcja ma znaczenie. Dbamy o szczegóły, bo nasi użytkownicy zasługują na najlepsze.",
      privacy: "Prywatność Domyślnie",
      privacyDesc:
        "Zaufanie użytkowników się zdobywa, a nie zakłada. Projektujemy systemy, które szanują dane od pierwszego dnia.",
      accessibility: "Inkluzywność z Założenia",
      accessibilityDesc:
        "Piękne oprogramowanie powinno być dostępne dla wszystkich. Dostępność to nie dodatek — to fundament.",
      curiosity: "Nieustanna Ciekawość",
      curiosityDesc:
        "Nauka języków to łączenie się z innymi kulturami. Tę samą ciekawość wnosimy do tego, jak tworzymy.",
    },
    meta: {
      title: "Kariera — LumenLingo",
      description:
        "Dołącz do zespołu LumenLingo. Tworzymy piękne i świadome oprogramowanie do nauki języków.",
    },
  },
  ar: {
    heading: "انضم إلى الرحلة",
    intro: "نحن نبني شيئًا نؤمن به — ونودّ الحصول على مساعدتك.",
    story:
      "يُطوَّر LumenLingo حاليًا بواسطة مؤسس واحد بطموح استوديو واهتمام حِرَفي بالتفاصيل. نحن فريق صغير وشغوف يركّز على جعل تعلّم اللغات جميلًا وواعيًا وفعّالًا.",
    cta: "مع نموّ LumenLingo، سينمو الفريق أيضًا. إذا كنت تشاركنا شغف الحرفية وتؤمن بأنّ البرمجيات يمكن أن تكون عملية وجميلة في آن واحد، فنحن نتطلّع لسماعك.",
    valuesHeading: "ما نقدّره",
    values: {
      craft: "حرفية لا تُضاهى",
      craftDesc:
        "كل بكسل، كل حركة، كل تفاعل دقيق مهم. نهتم بالتفاصيل لأن مستخدمينا يستحقون الأفضل.",
      privacy: "الخصوصية افتراضيًا",
      privacyDesc:
        "ثقة المستخدم تُكتسب ولا تُفترض. نصمم أنظمة تحترم البيانات منذ اليوم الأول.",
      accessibility: "شمولية بالتصميم",
      accessibilityDesc:
        "يجب أن تكون البرمجيات الجميلة قابلة للاستخدام من قبل الجميع. سهولة الوصول ليست فكرة لاحقة — بل أساس.",
      curiosity: "فضول لا يتوقّف",
      curiosityDesc:
        "تعلّم اللغات يعني التواصل مع ثقافات أخرى. ونحمل ذلك الفضول نفسه إلى طريقة بنائنا.",
    },
    meta: {
      title: "الوظائف — LumenLingo",
      description:
        "انضم إلى فريق LumenLingo. نبني برامج تعلّم لغات جميلة وواعية.",
    },
  },
  zh: {
    heading: "加入我们的旅程",
    intro: "我们正在打造自己深信不疑的产品 — 期待你的加入。",
    story:
      "LumenLingo 目前由一位独立创始人开发，兼具工作室的雄心与匠人的细致。我们是一个小而充满热情的团队，专注于让语言学习变得美观、专注且高效。",
    cta: "随着 LumenLingo 的成长，团队也将壮大。如果你和我们一样痴迷于匠心，并相信软件可以既实用又美观，我们很期待与你交流。",
    valuesHeading: "我们的价值观",
    values: {
      craft: "极致匠心",
      craftDesc:
        "每一个像素、每一个动画、每一个微交互都至关重要。我们精益求精，因为用户值得最好的体验。",
      privacy: "默认保护隐私",
      privacyDesc:
        "用户信任靠赢得，而非假定。我们从第一天起就设计尊重数据的系统。",
      accessibility: "包容性设计",
      accessibilityDesc:
        "优美的软件应当人人可用。无障碍不是事后补充 — 而是根基。",
      curiosity: "永不止步的好奇心",
      curiosityDesc:
        "学习语言就是连接不同文化。我们将同样的好奇心融入产品的构建过程。",
    },
    meta: {
      title: "职业机会 — LumenLingo",
      description:
        "加入 LumenLingo 团队。我们构建美观且专注的语言学习软件。",
    },
  },
  uk: {
    heading: "Приєднуйтесь до Подорожі",
    intro: "Ми будуємо щось, у що віримо — і були б раді вашій допомозі.",
    story:
      "LumenLingo наразі створюється одним засновником з амбіціями студії та увагою до деталей справжнього майстра. Ми — невелика пристрасна команда, яка прагне зробити вивчення мов красивим, усвідомленим та ефективним.",
    cta: "З ростом LumenLingo зростатиме й команда. Якщо ви поділяєте нашу одержимість майстерністю й вірите, що програмне забезпечення може бути водночас функціональним і красивим, ми будемо раді почути вас.",
    valuesHeading: "Що Ми Цінуємо",
    values: {
      craft: "Одержимість Майстерністю",
      craftDesc:
        "Кожен піксель, кожна анімація, кожна мікровзаємодія має значення. Ми працюємо над деталями, бо наші користувачі заслуговують найкращого.",
      privacy: "Конфіденційність за Замовчуванням",
      privacyDesc:
        "Довіру користувачів заслуговують, а не припускають. Ми проєктуємо системи, що поважають дані з першого дня.",
      accessibility: "Інклюзивність за Дизайном",
      accessibilityDesc:
        "Красиве програмне забезпечення має бути доступним для всіх. Доступність — не додаток, а основа.",
      curiosity: "Невтомна Допитливість",
      curiosityDesc:
        "Вивчення мов — це зв'язок з іншими культурами. Ми привносимо ту саму допитливість у те, як ми будуємо.",
    },
    meta: {
      title: "Кар'єра — LumenLingo",
      description:
        "Приєднуйтесь до команди LumenLingo. Ми створюємо красиве та усвідомлене програмне забезпечення для вивчення мов.",
    },
  },
};

// ---------------------------------------------------------------------------
// Press (entire namespace)
// ---------------------------------------------------------------------------
const press = {
  es: {
    heading: "Kit de Prensa",
    intro: "Todo lo que periodistas y socios necesitan saber sobre LumenLingo.",
    aboutHeading: "Sobre LumenLingo",
    aboutP1:
      "LumenLingo es una app de aprendizaje de idiomas para iOS que combina la repetición espaciada basada en la ciencia con una experiencia de usuario profundamente estética y consciente. Nuestra misión: hacer que aprender idiomas sea tan hermoso como eficaz.",
    aboutP2:
      "Con soporte para 9 idiomas y más de 25 combinaciones lingüísticas, LumenLingo ofrece práctica con tarjetas, cuestionarios de gramática, desafíos de construcción de palabras, paisajes sonoros ambientales y orbes de respiración — todo diseñado para crear la atmósfera perfecta para el aprendizaje enfocado.",
    aboutP3:
      "Fundado por un desarrollador en solitario con experiencia en ingeniería de software, LumenLingo está construido con la misma artesanía obsesiva reservada habitualmente a estudios de diseño, pero con el corazón de un creador independiente.",
    statsHeading: "De un Vistazo",
    stats: {
      languagesValue: "9",
      languages: "Idiomas compatibles",
      pairsValue: "25+",
      pairs: "Combinaciones lingüísticas",
      modesValue: "3",
      modes: "Modos de práctica",
    },
    assetsHeading: "Recursos de Marca",
    assetsDesc:
      "Logotipos, capturas de pantalla y directrices de marca están disponibles a petición. Envíanos un correo electrónico y te enviaremos todo lo que necesites.",
    newsHeading: "En los Medios",
    newsEmpty:
      "Cobertura próximamente — nos encantaría saber de ti. Escríbenos a <pressEmailLink>email</pressEmailLink>.",
    meta: {
      title: "Kit de Prensa — LumenLingo",
      description:
        "Recursos de prensa, activos de marca e información de la empresa para periodistas y socios.",
    },
  },
  fr: {
    heading: "Kit Presse",
    intro: "Tout ce dont les journalistes et partenaires ont besoin pour connaître LumenLingo.",
    aboutHeading: "À propos de LumenLingo",
    aboutP1:
      "LumenLingo est une application d'apprentissage des langues pour iOS qui allie la répétition espacée fondée sur la science à une expérience utilisateur profondément esthétique et bienveillante. Notre mission : rendre l'apprentissage des langues aussi beau qu'efficace.",
    aboutP2:
      "Avec la prise en charge de 9 langues et plus de 25 paires linguistiques, LumenLingo propose des flashcards, des quiz de grammaire, des défis de construction de mots, des ambiances sonores et des orbes de respiration — le tout conçu pour créer l'atmosphère idéale pour un apprentissage ciblé.",
    aboutP3:
      "Fondé par un développeur solo issu de l'ingénierie logicielle, LumenLingo est conçu avec le même soin obsessionnel habituellement réservé aux studios de design, mais avec le cœur d'un créateur indépendant.",
    statsHeading: "En un Coup d'Œil",
    stats: {
      languagesValue: "9",
      languages: "Langues prises en charge",
      pairsValue: "25+",
      pairs: "Paires linguistiques",
      modesValue: "3",
      modes: "Modes de pratique",
    },
    assetsHeading: "Ressources de Marque",
    assetsDesc:
      "Logos, captures d'écran et directives de marque sont disponibles sur demande. Envoyez-nous un e-mail et nous vous transmettrons tout le nécessaire.",
    newsHeading: "Dans la Presse",
    newsEmpty:
      "Couverture à venir — nous serions ravis de vous entendre. Contactez-nous à <pressEmailLink>email</pressEmailLink>.",
    meta: {
      title: "Kit Presse — LumenLingo",
      description:
        "Ressources presse, actifs de marque et informations sur l'entreprise pour journalistes et partenaires.",
    },
  },
  ja: {
    heading: "プレスキット",
    intro: "ジャーナリストやパートナーが LumenLingo について知るために必要な情報をまとめました。",
    aboutHeading: "LumenLingo について",
    aboutP1:
      "LumenLingo は、科学に基づいたスペースド・リペティションと、深く美的でマインドフルなユーザー体験を融合させた iOS 向け語学学習アプリです。私たちのミッション：語学学習を効果的であるだけでなく、美しいものにすること。",
    aboutP2:
      "9言語・25以上の言語ペアに対応し、フラッシュカード、文法クイズ、単語構築チャレンジ、アンビエント・サウンドスケープ、ブリージングオーブなど、集中学習に最適な環境を提供します。",
    aboutP3:
      "ソフトウェアエンジニアリングの経験を持つソロ開発者が設立した LumenLingo は、デザインスタジオに匹敵するこだわりと、インディペンデントクリエイターの情熱で作られています。",
    statsHeading: "概要",
    stats: {
      languagesValue: "9",
      languages: "対応言語",
      pairsValue: "25+",
      pairs: "言語ペア",
      modesValue: "3",
      modes: "練習モード",
    },
    assetsHeading: "ブランド素材",
    assetsDesc:
      "ロゴ、スクリーンショット、ブランドガイドラインはリクエストに応じて提供いたします。メールでお問い合わせいただければ、必要な素材をお送りします。",
    newsHeading: "メディア掲載",
    newsEmpty:
      "掲載情報は近日公開予定です — ぜひご連絡ください。<pressEmailLink>email</pressEmailLink> までお気軽にどうぞ。",
    meta: {
      title: "プレスキット — LumenLingo",
      description:
        "ジャーナリストやパートナー向けのプレスリソース、ブランド素材、企業情報。",
    },
  },
  de: {
    heading: "Pressematerial",
    intro: "Alles, was Journalisten und Partner über LumenLingo wissen müssen.",
    aboutHeading: "Über LumenLingo",
    aboutP1:
      "LumenLingo ist eine Sprachlern-App für iOS, die wissenschaftlich fundierte Spaced Repetition mit einem zutiefst ästhetischen und achtsamen Nutzererlebnis verbindet. Unsere Mission: Sprachenlernen so schön wie effektiv zu gestalten.",
    aboutP2:
      "Mit Unterstützung für 9 Sprachen und über 25 Sprachpaare bietet LumenLingo Karteikarten, Grammatik-Quizze, Wortbau-Herausforderungen, Ambient-Klangwelten und Atem-Orbs — alles darauf ausgelegt, die perfekte Atmosphäre für fokussiertes Lernen zu schaffen.",
    aboutP3:
      "Gegründet von einem Solo-Entwickler mit Hintergrund in Software-Engineering, wird LumenLingo mit derselben obsessiven Handwerkskunst gebaut, die sonst Designstudios vorbehalten ist — aber mit dem Herzen eines unabhängigen Machers.",
    statsHeading: "Auf einen Blick",
    stats: {
      languagesValue: "9",
      languages: "Unterstützte Sprachen",
      pairsValue: "25+",
      pairs: "Sprachpaare",
      modesValue: "3",
      modes: "Übungsmodi",
    },
    assetsHeading: "Marken-Ressourcen",
    assetsDesc:
      "Logos, Screenshots und Markenrichtlinien sind auf Anfrage erhältlich. Schreiben Sie uns eine E-Mail und wir senden Ihnen alles Nötige zu.",
    newsHeading: "In den Medien",
    newsEmpty:
      "Berichterstattung folgt in Kürze — wir freuen uns auf Ihre Nachricht. Schreiben Sie uns an <pressEmailLink>email</pressEmailLink>.",
    meta: {
      title: "Pressematerial — LumenLingo",
      description:
        "Presseressourcen, Marken-Assets und Unternehmensinformationen für Journalisten und Partner.",
    },
  },
  pl: {
    heading: "Materiały Prasowe",
    intro: "Wszystko, czego dziennikarze i partnerzy potrzebują wiedzieć o LumenLingo.",
    aboutHeading: "O LumenLingo",
    aboutP1:
      "LumenLingo to aplikacja do nauki języków na iOS, która łączy opartą na nauce powtórkę rozłożoną w czasie z głęboko estetycznym i świadomym doświadczeniem użytkownika. Nasza misja: sprawić, by nauka języków była tak piękna, jak skuteczna.",
    aboutP2:
      "Z obsługą 9 języków i ponad 25 par językowych LumenLingo oferuje fiszki, quizy gramatyczne, wyzwania budowania słów, ambientowe pejzaże dźwiękowe i kule oddechowe — wszystko zaprojektowane, by stworzyć idealną atmosferę do skupionej nauki.",
    aboutP3:
      "Założony przez niezależnego programistę z doświadczeniem w inżynierii oprogramowania, LumenLingo jest tworzony z obsesyjnym rzemiosłem zwykle zarezerwowanym dla studiów projektowych — ale z sercem niezależnego twórcy.",
    statsHeading: "W Skrócie",
    stats: {
      languagesValue: "9",
      languages: "Obsługiwanych języków",
      pairsValue: "25+",
      pairs: "Par językowych",
      modesValue: "3",
      modes: "Tryby ćwiczeń",
    },
    assetsHeading: "Zasoby Marki",
    assetsDesc:
      "Logo, zrzuty ekranu i wytyczne dotyczące marki są dostępne na życzenie. Napisz do nas, a prześlemy wszystko, czego potrzebujesz.",
    newsHeading: "W Mediach",
    newsEmpty:
      "Publikacje już wkrótce — chętnie nawiążemy kontakt. Napisz do nas na <pressEmailLink>email</pressEmailLink>.",
    meta: {
      title: "Materiały Prasowe — LumenLingo",
      description:
        "Zasoby prasowe, materiały marki i informacje o firmie dla dziennikarzy i partnerów.",
    },
  },
  ar: {
    heading: "الملف الصحفي",
    intro: "كل ما يحتاجه الصحفيون والشركاء لمعرفته عن LumenLingo.",
    aboutHeading: "عن LumenLingo",
    aboutP1:
      "LumenLingo هو تطبيق لتعلّم اللغات على iOS يجمع بين التكرار المتباعد المبني على العلم وتجربة مستخدم جمالية وواعية بعمق. مهمتنا: جعل تعلّم اللغات جميلًا بقدر ما هو فعّال.",
    aboutP2:
      "بدعم 9 لغات وأكثر من 25 زوجًا لغويًا، يقدّم LumenLingo بطاقات تعليمية واختبارات قواعد وتحديات بناء كلمات ومقاطع صوتية محيطية وكرات تنفّس — كلها مصمّمة لخلق الأجواء المثالية للتعلّم المركّز.",
    aboutP3:
      "أسّسه مطوّر مستقل ذو خلفية في هندسة البرمجيات، وبُني LumenLingo بنفس الحرفية المتقنة المخصّصة عادةً لاستوديوهات التصميم — لكن بروح صانع مستقل.",
    statsHeading: "نظرة سريعة",
    stats: {
      languagesValue: "9",
      languages: "لغة مدعومة",
      pairsValue: "25+",
      pairs: "زوج لغوي",
      modesValue: "3",
      modes: "أوضاع تدريب",
    },
    assetsHeading: "أصول العلامة التجارية",
    assetsDesc:
      "الشعارات ولقطات الشاشة وإرشادات العلامة التجارية متاحة عند الطلب. راسلنا عبر البريد الإلكتروني وسنرسل لك كل ما تحتاجه.",
    newsHeading: "في الأخبار",
    newsEmpty:
      "التغطية الإعلامية قادمة قريبًا — يسعدنا التواصل معك. راسلنا على <pressEmailLink>email</pressEmailLink>.",
    meta: {
      title: "الملف الصحفي — LumenLingo",
      description:
        "موارد صحفية وأصول العلامة التجارية ومعلومات الشركة للصحفيين والشركاء.",
    },
  },
  zh: {
    heading: "媒体资料",
    intro: "记者和合作伙伴了解 LumenLingo 所需的一切信息。",
    aboutHeading: "关于 LumenLingo",
    aboutP1:
      "LumenLingo 是一款 iOS 语言学习应用，将基于科学的间隔重复与深度美学、专注的用户体验相结合。我们的使命：让语言学习既美观又高效。",
    aboutP2:
      "支持 9 种语言和 25 种以上语言对，LumenLingo 提供闪卡练习、语法测验、单词构建挑战、环境音景和呼吸光球 — 一切旨在营造专注学习的理想氛围。",
    aboutP3:
      "由一位拥有软件工程背景的独立开发者创立，LumenLingo 以设计工作室级别的匠心打造，却怀揣独立创作者的初心。",
    statsHeading: "一览",
    stats: {
      languagesValue: "9",
      languages: "支持语言",
      pairsValue: "25+",
      pairs: "语言对",
      modesValue: "3",
      modes: "练习模式",
    },
    assetsHeading: "品牌资源",
    assetsDesc:
      "标志、截图和品牌指南可按需提供。请发送邮件联系我们，我们会为您提供所需的全部资料。",
    newsHeading: "媒体报道",
    newsEmpty:
      "报道即将推出 — 期待您的联系。请发送邮件至 <pressEmailLink>email</pressEmailLink>。",
    meta: {
      title: "媒体资料 — LumenLingo",
      description:
        "面向记者和合作伙伴的媒体资源、品牌素材和公司信息。",
    },
  },
  uk: {
    heading: "Прес-кіт",
    intro: "Усе, що потрібно журналістам і партнерам знати про LumenLingo.",
    aboutHeading: "Про LumenLingo",
    aboutP1:
      "LumenLingo — це додаток для вивчення мов на iOS, що поєднує науково обґрунтоване інтервальне повторення з глибоко естетичним та усвідомленим досвідом. Наша місія: зробити вивчення мов таким же красивим, як і ефективним.",
    aboutP2:
      "З підтримкою 9 мов і понад 25 мовних пар LumenLingo пропонує флеш-картки, граматичні вікторини, завдання на побудову слів, ембієнтні звукові ландшафти та дихальні сфери — усе розроблено для створення ідеальної атмосфери зосередженого навчання.",
    aboutP3:
      "Заснований розробником-одинаком з досвідом у програмній інженерії, LumenLingo створений з тією ж одержимою майстерністю, яка зазвичай притаманна дизайн-студіям — але з серцем незалежного творця.",
    statsHeading: "Коротко",
    stats: {
      languagesValue: "9",
      languages: "Підтримуваних мов",
      pairsValue: "25+",
      pairs: "Мовних пар",
      modesValue: "3",
      modes: "Режими практики",
    },
    assetsHeading: "Ресурси Бренду",
    assetsDesc:
      "Логотипи, знімки екрану та настанови щодо бренду доступні за запитом. Напишіть нам — і ми надішлемо все необхідне.",
    newsHeading: "У Медіа",
    newsEmpty:
      "Публікації незабаром — будемо раді почути вас. Напишіть на <pressEmailLink>email</pressEmailLink>.",
    meta: {
      title: "Прес-кіт — LumenLingo",
      description:
        "Прес-ресурси, матеріали бренду та інформація про компанію для журналістів і партнерів.",
    },
  },
};

// ---------------------------------------------------------------------------
// Help (entire namespace)
// ---------------------------------------------------------------------------
const help = {
  es: {
    heading: "Centro de Ayuda",
    intro: "Encuentra respuestas, obtén soporte y aprende a sacar el máximo provecho de LumenLingo.",
    searchPlaceholder: "Buscar ayuda...",
    quickLinks: {
      contact: "Contacto",
      dataRequest: "Solicitud de Datos",
      accessibility: "Accesibilidad",
    },
    noResults:
      "No se encontraron preguntas coincidentes. Intenta con otra búsqueda o contáctanos directamente.",
    ctaHeading: "¿No encuentras lo que buscas?",
    ctaDesc:
      "Nuestro equipo está aquí para ayudarte. Escríbenos y te responderemos en un plazo de 48 horas.",
    ctaButton: "Contactar",
    meta: {
      title: "Centro de Ayuda — LumenLingo",
      description:
        "Encuentra respuestas a preguntas frecuentes sobre LumenLingo, gestiona tus datos y contacta con nuestro equipo de soporte.",
    },
  },
  fr: {
    heading: "Centre d'Aide",
    intro: "Trouvez des réponses, obtenez de l'aide et apprenez à tirer le meilleur parti de LumenLingo.",
    searchPlaceholder: "Rechercher de l'aide...",
    quickLinks: {
      contact: "Nous Contacter",
      dataRequest: "Demande de Données",
      accessibility: "Accessibilité",
    },
    noResults:
      "Aucune question correspondante trouvée. Essayez une autre recherche ou contactez-nous directement.",
    ctaHeading: "Vous ne trouvez pas ce que vous cherchez ?",
    ctaDesc:
      "Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons dans les 48 heures.",
    ctaButton: "Nous Contacter",
    meta: {
      title: "Centre d'Aide — LumenLingo",
      description:
        "Trouvez des réponses aux questions fréquentes sur LumenLingo, gérez vos données et contactez notre équipe d'assistance.",
    },
  },
  ja: {
    heading: "ヘルプセンター",
    intro: "回答を見つけ、サポートを受け、LumenLingo を最大限に活用する方法を学びましょう。",
    searchPlaceholder: "ヘルプを検索...",
    quickLinks: {
      contact: "お問い合わせ",
      dataRequest: "データリクエスト",
      accessibility: "アクセシビリティ",
    },
    noResults:
      "一致する質問が見つかりませんでした。別のキーワードで検索するか、直接お問い合わせください。",
    ctaHeading: "お探しの内容が見つかりませんか？",
    ctaDesc:
      "私たちのチームがお手伝いします。お問い合わせいただければ、48時間以内にご返信いたします。",
    ctaButton: "お問い合わせ",
    meta: {
      title: "ヘルプセンター — LumenLingo",
      description:
        "LumenLingo に関するよくある質問への回答、データ管理、サポートチームへの連絡。",
    },
  },
  de: {
    heading: "Hilfebereich",
    intro: "Finden Sie Antworten, erhalten Sie Unterstützung und erfahren Sie, wie Sie LumenLingo optimal nutzen.",
    searchPlaceholder: "Hilfe suchen...",
    quickLinks: {
      contact: "Kontakt",
      dataRequest: "Datenabfrage",
      accessibility: "Barrierefreiheit",
    },
    noResults:
      "Keine passenden Fragen gefunden. Versuchen Sie eine andere Suche oder kontaktieren Sie uns direkt.",
    ctaHeading: "Nicht gefunden, wonach Sie suchen?",
    ctaDesc:
      "Unser Team ist für Sie da. Schreiben Sie uns und wir antworten innerhalb von 48 Stunden.",
    ctaButton: "Kontakt aufnehmen",
    meta: {
      title: "Hilfebereich — LumenLingo",
      description:
        "Antworten auf häufige Fragen zu LumenLingo, Datenverwaltung und Kontakt zu unserem Support-Team.",
    },
  },
  pl: {
    heading: "Centrum Pomocy",
    intro: "Znajdź odpowiedzi, uzyskaj wsparcie i dowiedz się, jak w pełni wykorzystać LumenLingo.",
    searchPlaceholder: "Szukaj pomocy...",
    quickLinks: {
      contact: "Kontakt",
      dataRequest: "Żądanie Danych",
      accessibility: "Dostępność",
    },
    noResults:
      "Nie znaleziono pasujących pytań. Spróbuj innego wyszukiwania lub skontaktuj się z nami bezpośrednio.",
    ctaHeading: "Nie możesz znaleźć tego, czego szukasz?",
    ctaDesc:
      "Nasz zespół jest tutaj, aby pomóc. Napisz do nas, a odpowiemy w ciągu 48 godzin.",
    ctaButton: "Skontaktuj się",
    meta: {
      title: "Centrum Pomocy — LumenLingo",
      description:
        "Znajdź odpowiedzi na częste pytania o LumenLingo, zarządzaj swoimi danymi i skontaktuj się z zespołem wsparcia.",
    },
  },
  ar: {
    heading: "مركز المساعدة",
    intro: "ابحث عن إجابات، واحصل على الدعم، وتعلّم كيف تستفيد من LumenLingo إلى أقصى حد.",
    searchPlaceholder: "ابحث عن مساعدة...",
    quickLinks: {
      contact: "اتصل بنا",
      dataRequest: "طلب البيانات",
      accessibility: "إمكانية الوصول",
    },
    noResults:
      "لم يتم العثور على أسئلة مطابقة. جرّب بحثًا مختلفًا أو تواصل معنا مباشرةً.",
    ctaHeading: "لم تجد ما تبحث عنه؟",
    ctaDesc:
      "فريقنا هنا لمساعدتك. تواصل معنا وسنردّ عليك خلال 48 ساعة.",
    ctaButton: "تواصل معنا",
    meta: {
      title: "مركز المساعدة — LumenLingo",
      description:
        "ابحث عن إجابات للأسئلة الشائعة حول LumenLingo، وأدِر بياناتك، وتواصل مع فريق الدعم.",
    },
  },
  zh: {
    heading: "帮助中心",
    intro: "查找答案、获取支持，了解如何充分利用 LumenLingo。",
    searchPlaceholder: "搜索帮助...",
    quickLinks: {
      contact: "联系我们",
      dataRequest: "数据请求",
      accessibility: "无障碍",
    },
    noResults:
      "未找到匹配的问题。请尝试其他搜索或直接联系我们。",
    ctaHeading: "找不到您需要的内容？",
    ctaDesc:
      "我们的团队随时为您提供帮助。联系我们，我们将在 48 小时内回复。",
    ctaButton: "联系我们",
    meta: {
      title: "帮助中心 — LumenLingo",
      description:
        "查找 LumenLingo 常见问题的答案，管理您的数据，联系我们的支持团队。",
    },
  },
  uk: {
    heading: "Центр Допомоги",
    intro: "Знаходьте відповіді, отримуйте підтримку та дізнайтеся, як максимально використовувати LumenLingo.",
    searchPlaceholder: "Шукати допомогу...",
    quickLinks: {
      contact: "Зв'язатися з нами",
      dataRequest: "Запит Даних",
      accessibility: "Доступність",
    },
    noResults:
      "Відповідних запитань не знайдено. Спробуйте інший пошук або зверніться до нас напряму.",
    ctaHeading: "Не знайшли те, що шукаєте?",
    ctaDesc:
      "Наша команда готова допомогти. Напишіть нам, і ми відповімо протягом 48 годин.",
    ctaButton: "Зв'язатися",
    meta: {
      title: "Центр Допомоги — LumenLingo",
      description:
        "Знайдіть відповіді на поширені запитання про LumenLingo, керуйте своїми даними та зверніться до нашої команди підтримки.",
    },
  },
};

// ---------------------------------------------------------------------------
// Apply to each locale file
// ---------------------------------------------------------------------------
for (const locale of LOCALES) {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  // EarlyAccess — merge only missing top-level keys (don't overwrite existing)
  if (!data.EarlyAccess) {
    data.EarlyAccess = {};
  }
  const eaKeys = earlyAccessKeys[locale];
  for (const [key, value] of Object.entries(eaKeys)) {
    if (!(key in data.EarlyAccess)) {
      data.EarlyAccess[key] = value;
    }
  }

  // Careers — entire namespace
  if (!data.Careers) {
    data.Careers = careers[locale];
  }

  // Press — entire namespace
  if (!data.Press) {
    data.Press = press[locale];
  }

  // Help — entire namespace
  if (!data.Help) {
    data.Help = help[locale];
  }

  writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
  console.log(`[OK] ${locale}.json — added missing keys`);
}

console.log("\nDone. All 8 locale files updated.");

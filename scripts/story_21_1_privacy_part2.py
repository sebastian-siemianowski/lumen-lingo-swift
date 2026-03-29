#!/usr/bin/env python3
"""Story 21.1 — Privacy translations Part 2/5.

Sections: customEvents, serviceWorker, appData, whatWeDontCollect, legalBasis.
"""
import json, os, sys

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(locale, data):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

def set_nested(d, keys, value):
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def get_nested(d, keys):
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return None
    return d

T = {}

# ── customEvents ──────────────────────────────────────────────────────────────
T["customEvents.heading"] = {
    "pl": "Zdarzenia niestandardowe (PostHog)",
    "de": "Benutzerdefinierte Ereignisse (PostHog)",
    "es": "Eventos personalizados (PostHog)",
    "fr": "Événements personnalisés (PostHog)",
    "ja": "カスタムイベント（PostHog）",
    "zh": "自定义事件（PostHog）",
    "ar": "الأحداث المخصصة (PostHog)",
    "uk": "Спеціальні події (PostHog)",
}
T["customEvents.intro"] = {
    "pl": "Używamy PostHog do śledzenia zdarzeń analitycznych na naszej stronie internetowej, aby zrozumieć zachowania użytkowników i poprawić nasze usługi. Wszystkie zdarzenia są przypisane do anonimowych identyfikatorów — żadne dane osobowe nie są gromadzone.",
    "de": "Wir verwenden PostHog zur Erfassung von Analytics-Ereignissen auf unserer Website, um das Nutzerverhalten zu verstehen und unsere Dienste zu verbessern. Alle Ereignisse sind anonymen Kennungen zugeordnet — es werden keine personenbezogenen Daten erhoben.",
    "es": "Utilizamos PostHog para rastrear eventos analíticos en nuestro sitio web con el fin de comprender el comportamiento del usuario y mejorar nuestros servicios. Todos los eventos se asignan a identificadores anónimos — no se recopilan datos personales.",
    "fr": "Nous utilisons PostHog pour suivre les événements analytiques sur notre site web afin de comprendre le comportement des utilisateurs et d'améliorer nos services. Tous les événements sont attribués à des identifiants anonymes — aucune donnée personnelle n'est collectée.",
    "ja": "ウェブサイトでのユーザー行動を把握しサービスを改善するため、PostHogを使用して分析イベントを追跡しています。すべてのイベントは匿名の識別子に紐づけられ、個人データは収集されません。",
    "zh": "我们使用PostHog在网站上追踪分析事件，以了解用户行为并改善我们的服务。所有事件均与匿名标识符关联——不收集任何个人数据。",
    "ar": "نستخدم PostHog لتتبع أحداث التحليلات على موقعنا الإلكتروني لفهم سلوك المستخدم وتحسين خدماتنا. جميع الأحداث مرتبطة بمعرّفات مجهولة — لا يتم جمع أي بيانات شخصية.",
    "uk": "Ми використовуємо PostHog для відстеження аналітичних подій на нашому веб-сайті, щоб зрозуміти поведінку користувачів та покращити наші послуги. Усі події прив'язані до анонімних ідентифікаторів — персональні дані не збираються.",
}
T["customEvents.eventsHeading"] = {
    "pl": "Zdarzenia, które śledzimy",
    "de": "Erfasste Ereignisse",
    "es": "Eventos que rastreamos",
    "fr": "Événements que nous suivons",
    "ja": "追跡するイベント",
    "zh": "我们追踪的事件",
    "ar": "الأحداث التي نتتبعها",
    "uk": "Події, які ми відстежуємо",
}
T["customEvents.li1"] = {
    "pl": "<b>newsletter_signup</b> — rejestrowane, gdy ktoś zapisze się na newsletter. Przechwytywane właściwości: atrybuty kampanii UTM i wykryty język.",
    "de": "<b>newsletter_signup</b> — wird erfasst, wenn sich jemand für den Newsletter anmeldet. Erfasste Eigenschaften: UTM-Kampagnenzuordnung und erkannte Sprache.",
    "es": "<b>newsletter_signup</b> — se registra cuando alguien se suscribe al boletín. Propiedades capturadas: atribución de campaña UTM e idioma detectado.",
    "fr": "<b>newsletter_signup</b> — enregistré lorsqu'une personne s'inscrit à la newsletter. Propriétés capturées : attribution de campagne UTM et langue détectée.",
    "ja": "<b>newsletter_signup</b> — ニュースレターに登録した際に記録されます。取得プロパティ：UTMキャンペーンアトリビューションおよび検出された言語。",
    "zh": "<b>newsletter_signup</b> — 当有人订阅新闻通讯时记录。捕获的属性：UTM活动归因和检测到的语言。",
    "ar": "<b>newsletter_signup</b> — يُسجّل عندما يشترك شخص ما في النشرة الإخبارية. الخصائص الملتقطة: إسناد حملة UTM واللغة المكتشفة.",
    "uk": "<b>newsletter_signup</b> — реєструється, коли хтось підписується на розсилку. Зібрані властивості: атрибуція UTM-кампанії та виявлена мова.",
}
T["customEvents.li2"] = {
    "pl": "<b>waitlist_signup</b> — rejestrowane, gdy ktoś dołączy do listy oczekujących. Przechwytywane właściwości: atrybuty kampanii UTM, wykryty język i wybrany język nauki.",
    "de": "<b>waitlist_signup</b> — wird erfasst, wenn sich jemand auf die Warteliste setzt. Erfasste Eigenschaften: UTM-Kampagnenzuordnung, erkannte Sprache und gewählte Lernsprache.",
    "es": "<b>waitlist_signup</b> — se registra cuando alguien se une a la lista de espera. Propiedades capturadas: atribución de campaña UTM, idioma detectado e idioma de aprendizaje seleccionado.",
    "fr": "<b>waitlist_signup</b> — enregistré lorsqu'une personne rejoint la liste d'attente. Propriétés capturées : attribution de campagne UTM, langue détectée et langue d'apprentissage choisie.",
    "ja": "<b>waitlist_signup</b> — ウェイトリストに参加した際に記録されます。取得プロパティ：UTMキャンペーンアトリビューション、検出された言語、選択された学習言語。",
    "zh": "<b>waitlist_signup</b> — 当有人加入等待名单时记录。捕获的属性：UTM活动归因、检测到的语言和选择的学习语言。",
    "ar": "<b>waitlist_signup</b> — يُسجّل عندما ينضم شخص ما إلى قائمة الانتظار. الخصائص الملتقطة: إسناد حملة UTM واللغة المكتشفة ولغة التعلم المختارة.",
    "uk": "<b>waitlist_signup</b> — реєструється, коли хтось приєднується до списку очікування. Зібрані властивості: атрибуція UTM-кампанії, виявлена мова та обрана мова навчання.",
}
T["customEvents.li3"] = {
    "pl": "<b>waitlist_cta_view</b> — rejestrowane, gdy sekcja listy oczekujących pojawi się w polu widzenia użytkownika (wywołane jednokrotnie przez Intersection Observer).",
    "de": "<b>waitlist_cta_view</b> — wird erfasst, wenn der Wartelisten-Bereich im Sichtfeld des Nutzers erscheint (einmalig durch Intersection Observer ausgelöst).",
    "es": "<b>waitlist_cta_view</b> — se registra cuando la sección de la lista de espera entra en el campo de visión del usuario (activado una vez por Intersection Observer).",
    "fr": "<b>waitlist_cta_view</b> — enregistré lorsque la section de la liste d'attente entre dans le champ de vision de l'utilisateur (déclenché une fois par Intersection Observer).",
    "ja": "<b>waitlist_cta_view</b> — ウェイトリストセクションがユーザーの表示領域に入った際に記録されます（Intersection Observerにより1回のみ発火）。",
    "zh": "<b>waitlist_cta_view</b> — 当等待名单区域进入用户视野时记录（通过Intersection Observer触发一次）。",
    "ar": "<b>waitlist_cta_view</b> — يُسجّل عندما يظهر قسم قائمة الانتظار في مجال رؤية المستخدم (يتم تشغيله مرة واحدة بواسطة Intersection Observer).",
    "uk": "<b>waitlist_cta_view</b> — реєструється, коли секція списку очікування потрапляє в поле зору користувача (спрацьовує один раз через Intersection Observer).",
}
T["customEvents.li4"] = {
    "pl": "<b>splash_screen_interaction</b> — rejestrowane, gdy użytkownik kliknie na ekranie powitalnym, aby przejść do głównej strony, przechwytując czas wyświetlania ekranu powitalnego.",
    "de": "<b>splash_screen_interaction</b> — wird erfasst, wenn ein Nutzer auf den Begrüßungsbildschirm klickt, um zur Hauptseite zu gelangen, wobei die Anzeigedauer des Begrüßungsbildschirms erfasst wird.",
    "es": "<b>splash_screen_interaction</b> — se registra cuando un usuario hace clic en la pantalla de presentación para acceder al sitio principal, capturando la duración de visualización de la pantalla de presentación.",
    "fr": "<b>splash_screen_interaction</b> — enregistré lorsqu'un utilisateur clique sur l'écran de démarrage pour accéder au site principal, capturant la durée d'affichage de l'écran de démarrage.",
    "ja": "<b>splash_screen_interaction</b> — ユーザーがスプラッシュスクリーンをクリックしてメインサイトに入った際に記録され、スプラッシュスクリーンの表示時間を取得します。",
    "zh": "<b>splash_screen_interaction</b> — 当用户点击启动画面进入主网站时记录，捕获启动画面的显示时长。",
    "ar": "<b>splash_screen_interaction</b> — يُسجّل عندما ينقر المستخدم على شاشة البداية للدخول إلى الموقع الرئيسي، ويلتقط مدة عرض شاشة البداية.",
    "uk": "<b>splash_screen_interaction</b> — реєструється, коли користувач натискає на заставку для переходу на основний сайт, фіксуючи тривалість показу заставки.",
}
T["customEvents.li5"] = {
    "pl": "<b>cookie_consent</b> — rejestrowane, gdy użytkownik podejmie decyzję na banerze zgody na pliki cookie, przechwytując: kategorię plików cookie (analityczne, funkcjonalne), czy dana kategoria jest akceptowana czy odrzucona oraz źródło interakcji (baner lub centrum ustawień).",
    "de": "<b>cookie_consent</b> — wird erfasst, wenn ein Nutzer eine Auswahl im Cookie-Zustimmungsbanner trifft, wobei erfasst wird: Cookie-Kategorie (Analytics, funktional), ob die Kategorie akzeptiert oder abgelehnt wurde, sowie die Quelle der Interaktion (Banner oder Einstellungscenter).",
    "es": "<b>cookie_consent</b> — se registra cuando un usuario toma una decisión en el banner de consentimiento de cookies, capturando: categoría de cookie (analítica, funcional), si la categoría fue aceptada o rechazada, y la fuente de la interacción (banner o centro de preferencias).",
    "fr": "<b>cookie_consent</b> — enregistré lorsqu'un utilisateur fait un choix dans la bannière de consentement aux cookies, capturant : la catégorie de cookie (analytique, fonctionnelle), si la catégorie est acceptée ou refusée, et la source de l'interaction (bannière ou centre de préférences).",
    "ja": "<b>cookie_consent</b> — ユーザーがCookie同意バナーで選択した際に記録されます。取得情報：Cookieカテゴリ（分析、機能）、カテゴリの承認/拒否、操作元（バナーまたは設定センター）。",
    "zh": "<b>cookie_consent</b> — 当用户在Cookie同意横幅中做出选择时记录，捕获：Cookie类别（分析、功能）、类别是否被接受或拒绝、以及交互来源（横幅或偏好中心）。",
    "ar": "<b>cookie_consent</b> — يُسجّل عندما يتخذ المستخدم قرارًا في شعار الموافقة على ملفات تعريف الارتباط، ويلتقط: فئة ملف تعريف الارتباط (التحليلات، الوظيفية)، وما إذا كانت الفئة مقبولة أم مرفوضة، ومصدر التفاعل (الشعار أو مركز التفضيلات).",
    "uk": "<b>cookie_consent</b> — реєструється, коли користувач робить вибір у банері згоди на cookie, фіксуючи: категорію cookie (аналітика, функціональні), прийнято чи відхилено категорію, та джерело взаємодії (банер або центр налаштувань).",
}
T["customEvents.li6"] = {
    "pl": "<b>faq_toggle</b> — rejestrowane, gdy użytkownik rozwinie lub zwinie pytanie w sekcji FAQ, przechwytując: tytuł pytania, kategorię i wykonaną czynność (rozwinięcie/zwinięcie).",
    "de": "<b>faq_toggle</b> — wird erfasst, wenn ein Nutzer eine FAQ-Frage auf- oder zuklappt, wobei erfasst wird: Fragetitel, Kategorie und durchgeführte Aktion (Öffnen/Schließen).",
    "es": "<b>faq_toggle</b> — se registra cuando un usuario expande o contrae una pregunta en la sección de preguntas frecuentes, capturando: título de la pregunta, categoría y acción realizada (expandir/contraer).",
    "fr": "<b>faq_toggle</b> — enregistré lorsqu'un utilisateur développe ou réduit une question de la FAQ, capturant : le titre de la question, la catégorie et l'action effectuée (développer/réduire).",
    "ja": "<b>faq_toggle</b> — ユーザーがFAQの質問を展開または折りたたんだ際に記録されます。取得情報：質問タイトル、カテゴリ、実行されたアクション（展開/折りたたみ）。",
    "zh": "<b>faq_toggle</b> — 当用户展开或折叠常见问题时记录，捕获：问题标题、类别和执行的操作（展开/折叠）。",
    "ar": "<b>faq_toggle</b> — يُسجّل عندما يوسّع المستخدم أو يطوي سؤالاً في قسم الأسئلة الشائعة، ويلتقط: عنوان السؤال والفئة والإجراء المتخذ (التوسيع/الطي).",
    "uk": "<b>faq_toggle</b> — реєструється, коли користувач розгортає або згортає питання у розділі FAQ, фіксуючи: заголовок питання, категорію та виконану дію (розгорнути/згорнути).",
}
T["customEvents.li7"] = {
    "pl": "<b>language_selection_view</b> — rejestrowane, gdy sekcja wyboru języka w formularzu listy oczekujących staje się widoczna.",
    "de": "<b>language_selection_view</b> — wird erfasst, wenn der Sprachauswahl-Bereich im Wartelisten-Formular sichtbar wird.",
    "es": "<b>language_selection_view</b> — se registra cuando la sección de selección de idioma en el formulario de lista de espera se hace visible.",
    "fr": "<b>language_selection_view</b> — enregistré lorsque la section de sélection de langue du formulaire de liste d'attente devient visible.",
    "ja": "<b>language_selection_view</b> — ウェイトリストフォームの言語選択セクションが表示された際に記録されます。",
    "zh": "<b>language_selection_view</b> — 当等待名单表单中的语言选择部分可见时记录。",
    "ar": "<b>language_selection_view</b> — يُسجّل عندما يصبح قسم اختيار اللغة في نموذج قائمة الانتظار مرئيًا.",
    "uk": "<b>language_selection_view</b> — реєструється, коли секція вибору мови у формі списку очікування стає видимою.",
}
T["customEvents.li8"] = {
    "pl": "<b>language_selected</b> — rejestrowane, gdy użytkownik wybierze język nauki w formularzu listy oczekujących, przechwytując: nazwę wybranego języka.",
    "de": "<b>language_selected</b> — wird erfasst, wenn ein Nutzer eine Lernsprache im Wartelisten-Formular auswählt, wobei der Name der gewählten Sprache erfasst wird.",
    "es": "<b>language_selected</b> — se registra cuando un usuario selecciona un idioma de aprendizaje en el formulario de lista de espera, capturando: el nombre del idioma seleccionado.",
    "fr": "<b>language_selected</b> — enregistré lorsqu'un utilisateur sélectionne une langue d'apprentissage dans le formulaire de liste d'attente, capturant : le nom de la langue sélectionnée.",
    "ja": "<b>language_selected</b> — ユーザーがウェイトリストフォームで学習言語を選択した際に記録されます。取得情報：選択された言語名。",
    "zh": "<b>language_selected</b> — 当用户在等待名单表单中选择学习语言时记录，捕获：所选语言名称。",
    "ar": "<b>language_selected</b> — يُسجّل عندما يختار المستخدم لغة تعلم في نموذج قائمة الانتظار، ويلتقط: اسم اللغة المختارة.",
    "uk": "<b>language_selected</b> — реєструється, коли користувач обирає мову навчання у формі списку очікування, фіксуючи: назву обраної мови.",
}
T["customEvents.li9"] = {
    "pl": "<b>page_view_custom</b> — rejestrowane, gdy użytkownik wejdzie na stronę, przechwytując: ścieżkę URL, parametry UTM i język.",
    "de": "<b>page_view_custom</b> — wird erfasst, wenn ein Nutzer eine Seite besucht, wobei URL-Pfad, UTM-Parameter und Sprache erfasst werden.",
    "es": "<b>page_view_custom</b> — se registra cuando un usuario visita una página, capturando: ruta de URL, parámetros UTM e idioma.",
    "fr": "<b>page_view_custom</b> — enregistré lorsqu'un utilisateur visite une page, capturant : chemin de l'URL, paramètres UTM et langue.",
    "ja": "<b>page_view_custom</b> — ユーザーがページに訪問した際に記録されます。取得情報：URLパス、UTMパラメーター、言語。",
    "zh": "<b>page_view_custom</b> — 当用户访问页面时记录，捕获：URL路径、UTM参数和语言。",
    "ar": "<b>page_view_custom</b> — يُسجّل عندما يزور المستخدم صفحة، ويلتقط: مسار عنوان URL ومعلمات UTM واللغة.",
    "uk": "<b>page_view_custom</b> — реєструється, коли користувач відвідує сторінку, фіксуючи: шлях URL, UTM-параметри та мову.",
}
T["customEvents.li10"] = {
    "pl": "<b>notification_bar</b> — rejestrowane, gdy użytkownik zamknie pasek powiadomień, przechwytując: treść powiadomienia.",
    "de": "<b>notification_bar</b> — wird erfasst, wenn ein Nutzer die Benachrichtigungsleiste schließt, wobei der Benachrichtigungsinhalt erfasst wird.",
    "es": "<b>notification_bar</b> — se registra cuando un usuario cierra la barra de notificaciones, capturando: el contenido de la notificación.",
    "fr": "<b>notification_bar</b> — enregistré lorsqu'un utilisateur ferme la barre de notification, capturant : le contenu de la notification.",
    "ja": "<b>notification_bar</b> — ユーザーが通知バーを閉じた際に記録されます。取得情報：通知内容。",
    "zh": "<b>notification_bar</b> — 当用户关闭通知栏时记录，捕获：通知内容。",
    "ar": "<b>notification_bar</b> — يُسجّل عندما يغلق المستخدم شريط الإشعارات، ويلتقط: محتوى الإشعار.",
    "uk": "<b>notification_bar</b> — реєструється, коли користувач закриває панель сповіщень, фіксуючи: вміст сповіщення.",
}
T["customEvents.retention"] = {
    "pl": "Dane zdarzeń w PostHog są przechowywane w ich infrastrukturze w chmurze. Możesz zażądać usunięcia swoich danych w dowolnym momencie, kontaktując się pod adresem legal@lumenlingo.com.",
    "de": "Ereignisdaten werden in der Cloud-Infrastruktur von PostHog gespeichert. Sie können die Löschung Ihrer Daten jederzeit anfordern, indem Sie uns unter legal@lumenlingo.com kontaktieren.",
    "es": "Los datos de eventos se almacenan en la infraestructura en la nube de PostHog. Puede solicitar la eliminación de sus datos en cualquier momento contactando a legal@lumenlingo.com.",
    "fr": "Les données d'événements sont stockées dans l'infrastructure cloud de PostHog. Vous pouvez demander la suppression de vos données à tout moment en contactant legal@lumenlingo.com.",
    "ja": "イベントデータはPostHogのクラウドインフラストラクチャに保存されます。legal@lumenlingo.comにご連絡いただくことで、いつでもデータの削除をリクエストできます。",
    "zh": "事件数据存储在PostHog的云基础设施中。您可以随时通过联系legal@lumenlingo.com请求删除您的数据。",
    "ar": "يتم تخزين بيانات الأحداث في البنية التحتية السحابية لـ PostHog. يمكنك طلب حذف بياناتك في أي وقت عن طريق الاتصال بـ legal@lumenlingo.com.",
    "uk": "Дані подій зберігаються в хмарній інфраструктурі PostHog. Ви можете запросити видалення ваших даних у будь-який час, звернувшись за адресою legal@lumenlingo.com.",
}

# ── serviceWorker ─────────────────────────────────────────────────────────────
T["serviceWorker.heading"] = {
    "pl": "Service Worker i buforowanie",
    "de": "Service Worker & Caching",
    "es": "Service Worker y almacenamiento en caché",
    "fr": "Service Worker et mise en cache",
    "ja": "Service Workerとキャッシュ",
    "zh": "Service Worker和缓存",
    "ar": "Service Worker والتخزين المؤقت",
    "uk": "Service Worker та кешування",
}
T["serviceWorker.p1"] = {
    "pl": "Nasza strona internetowa korzysta z Service Workera do buforowania zasobów statycznych (stron, obrazów, czcionek) w celu szybszego ładowania przy kolejnych wizytach. Service Worker nie zbiera, nie przesyła ani nie przechowuje żadnych danych osobowych. Działa wyłącznie w Twojej przeglądarce, aby zapewnić lepszą wydajność offline.",
    "de": "Unsere Website verwendet einen Service Worker, um statische Ressourcen (Seiten, Bilder, Schriftarten) für schnelleres Laden bei späteren Besuchen zwischenzuspeichern. Der Service Worker sammelt, überträgt oder speichert keine personenbezogenen Daten. Er arbeitet ausschließlich in Ihrem Browser, um die Offline-Leistung zu verbessern.",
    "es": "Nuestro sitio web utiliza un Service Worker para almacenar en caché recursos estáticos (páginas, imágenes, fuentes) y conseguir tiempos de carga más rápidos en visitas posteriores. El Service Worker no recopila, transmite ni almacena datos personales. Opera exclusivamente dentro de su navegador para proporcionar un mejor rendimiento sin conexión.",
    "fr": "Notre site web utilise un Service Worker pour mettre en cache des ressources statiques (pages, images, polices) afin d'accélérer le chargement lors des visites suivantes. Le Service Worker ne collecte, ne transmet ni ne stocke de données personnelles. Il fonctionne exclusivement dans votre navigateur pour offrir de meilleures performances hors ligne.",
    "ja": "当ウェブサイトでは、静的リソース（ページ、画像、フォント）をキャッシュして再訪問時の読み込みを高速化するためにService Workerを使用しています。Service Workerは個人データを収集、送信、保存しません。オフラインでのパフォーマンス向上のためにブラウザ内でのみ動作します。",
    "zh": "我们的网站使用Service Worker缓存静态资源（页面、图片、字体），以加快后续访问的加载速度。Service Worker不收集、传输或存储任何个人数据。它仅在您的浏览器中运行，以提供更好的离线性能。",
    "ar": "يستخدم موقعنا الإلكتروني Service Worker لتخزين الموارد الثابتة مؤقتًا (الصفحات والصور والخطوط) لتحميل أسرع في الزيارات اللاحقة. لا يجمع Service Worker أي بيانات شخصية أو ينقلها أو يخزنها. يعمل حصريًا في متصفحك لتوفير أداء أفضل دون اتصال.",
    "uk": "Наш веб-сайт використовує Service Worker для кешування статичних ресурсів (сторінок, зображень, шрифтів) для швидшого завантаження при наступних відвідуваннях. Service Worker не збирає, не передає та не зберігає жодних персональних даних. Він працює виключно у вашому браузері для забезпечення кращої офлайн-продуктивності.",
}
T["serviceWorker.p2"] = {
    "pl": "Możesz usunąć pamięć podręczną w dowolnym momencie, korzystając z ustawień przeglądarki, lub wyrejestrować Service Workera za pomocą narzędzi deweloperskich przeglądarki.",
    "de": "Sie können den Cache jederzeit über die Browsereinstellungen löschen oder den Service Worker über die Entwicklertools Ihres Browsers abmelden.",
    "es": "Puede borrar la caché en cualquier momento a través de la configuración del navegador o cancelar el registro del Service Worker mediante las herramientas de desarrollo de su navegador.",
    "fr": "Vous pouvez effacer le cache à tout moment via les paramètres de votre navigateur ou désenregistrer le Service Worker à l'aide des outils de développement de votre navigateur.",
    "ja": "ブラウザの設定からいつでもキャッシュを削除するか、ブラウザの開発者ツールを使用してService Workerの登録を解除できます。",
    "zh": "您可以随时通过浏览器设置清除缓存，或使用浏览器开发者工具注销Service Worker。",
    "ar": "يمكنك مسح ذاكرة التخزين المؤقت في أي وقت من خلال إعدادات المتصفح، أو إلغاء تسجيل Service Worker باستخدام أدوات المطور في متصفحك.",
    "uk": "Ви можете очистити кеш у будь-який час через налаштування браузера або скасувати реєстрацію Service Worker за допомогою інструментів розробника вашого браузера.",
}

# ── appData ───────────────────────────────────────────────────────────────────
T["appData.heading"] = {
    "pl": "Dane aplikacji iOS",
    "de": "iOS-App-Daten",
    "es": "Datos de la aplicación iOS",
    "fr": "Données de l'application iOS",
    "ja": "iOSアプリのデータ",
    "zh": "iOS应用数据",
    "ar": "بيانات تطبيق iOS",
    "uk": "Дані додатку iOS",
}
T["appData.intro"] = {
    "pl": "Aplikacja LumenLingo na iOS korzysta z architektury stawiającej prywatność na pierwszym miejscu. Oto dane, które aplikacja przechowuje i przetwarza:",
    "de": "Die LumenLingo iOS-App verwendet eine Privacy-First-Architektur. Folgende Daten werden von der App gespeichert und verarbeitet:",
    "es": "La aplicación iOS de LumenLingo utiliza una arquitectura que prioriza la privacidad. Estos son los datos que la aplicación almacena y procesa:",
    "fr": "L'application iOS LumenLingo utilise une architecture axée sur la confidentialité. Voici les données que l'application stocke et traite :",
    "ja": "LumenLingo iOSアプリはプライバシーファーストのアーキテクチャを採用しています。アプリが保存・処理するデータは以下のとおりです：",
    "zh": "LumenLingo iOS应用采用隐私优先的架构。以下是应用存储和处理的数据：",
    "ar": "يستخدم تطبيق LumenLingo لنظام iOS هندسة تضع الخصوصية أولاً. فيما يلي البيانات التي يخزنها التطبيق ويعالجها:",
    "uk": "Додаток LumenLingo для iOS використовує архітектуру з пріоритетом конфіденційності. Ось дані, які додаток зберігає та обробляє:",
}
T["appData.li1"] = {
    "pl": "<b>Postępy w nauce</b> — dane powtórek rozłożonych w czasie, wyniki quizów i historia sesji nauki. Przechowywane lokalnie na Twoim urządzeniu przy użyciu frameworka SwiftData firmy Apple.",
    "de": "<b>Lernfortschritt</b> — Daten zur verteilten Wiederholung, Quizergebnisse und Lernhistorie. Lokal auf Ihrem Gerät mit Apples SwiftData-Framework gespeichert.",
    "es": "<b>Progreso de aprendizaje</b> — datos de repetición espaciada, resultados de cuestionarios e historial de sesiones de estudio. Almacenados localmente en su dispositivo utilizando el framework SwiftData de Apple.",
    "fr": "<b>Progrès d'apprentissage</b> — données de répétition espacée, résultats de quiz et historique des sessions d'étude. Stockés localement sur votre appareil à l'aide du framework SwiftData d'Apple.",
    "ja": "<b>学習進捗</b> — 間隔反復データ、クイズ結果、学習セッション履歴。AppleのSwiftDataフレームワークを使用してデバイスにローカル保存されます。",
    "zh": "<b>学习进度</b> — 间隔重复数据、测验结果和学习会话历史记录。使用Apple的SwiftData框架本地存储在您的设备上。",
    "ar": "<b>تقدم التعلم</b> — بيانات التكرار المتباعد ونتائج الاختبارات وسجل جلسات الدراسة. يتم تخزينها محليًا على جهازك باستخدام إطار عمل SwiftData من Apple.",
    "uk": "<b>Прогрес навчання</b> — дані інтервального повторення, результати тестів та історія навчальних сесій. Зберігаються локально на вашому пристрої за допомогою фреймворку SwiftData від Apple.",
}
T["appData.li2"] = {
    "pl": "<b>Preferencje</b> — ustawienia aplikacji, takie jak motyw, poziomy trudności i preferencje językowe. Przechowywane w UserDefaults firmy Apple na Twoim urządzeniu.",
    "de": "<b>Einstellungen</b> — App-Einstellungen wie Design, Schwierigkeitsgrade und Sprachpräferenzen. In UserDefaults von Apple auf Ihrem Gerät gespeichert.",
    "es": "<b>Preferencias</b> — configuración de la aplicación como el tema, niveles de dificultad y preferencias de idioma. Almacenadas en UserDefaults de Apple en su dispositivo.",
    "fr": "<b>Préférences</b> — paramètres de l'application tels que le thème, les niveaux de difficulté et les préférences linguistiques. Stockées dans les UserDefaults d'Apple sur votre appareil.",
    "ja": "<b>設定</b> — テーマ、難易度、言語設定などのアプリ設定。デバイスのApple UserDefaultsに保存されます。",
    "zh": "<b>偏好设置</b> — 应用设置如主题、难度级别和语言偏好。存储在您设备上的Apple UserDefaults中。",
    "ar": "<b>التفضيلات</b> — إعدادات التطبيق مثل السمة ومستويات الصعوبة وتفضيلات اللغة. يتم تخزينها في UserDefaults من Apple على جهازك.",
    "uk": "<b>Налаштування</b> — параметри додатку, такі як тема, рівні складності та мовні уподобання. Зберігаються в Apple UserDefaults на вашому пристрої.",
}
T["appData.li3"] = {
    "pl": "<b>Synchronizacja iCloud</b> — Twoje dane edukacyjne mogą być synchronizowane między urządzeniami Apple za pośrednictwem Twojego osobistego konta iCloud. Dane te są szyfrowane przez Apple i nie mamy do nich dostępu.",
    "de": "<b>iCloud-Synchronisierung</b> — Ihre Lerndaten können über Ihr persönliches iCloud-Konto zwischen Ihren Apple-Geräten synchronisiert werden. Diese Daten werden von Apple verschlüsselt und wir haben keinen Zugriff darauf.",
    "es": "<b>Sincronización con iCloud</b> — sus datos de aprendizaje pueden sincronizarse entre sus dispositivos Apple a través de su cuenta personal de iCloud. Estos datos están cifrados por Apple y nosotros no tenemos acceso a ellos.",
    "fr": "<b>Synchronisation iCloud</b> — vos données d'apprentissage peuvent être synchronisées entre vos appareils Apple via votre compte iCloud personnel. Ces données sont chiffrées par Apple et nous n'y avons pas accès.",
    "ja": "<b>iCloud同期</b> — 学習データは個人のiCloudアカウントを通じてAppleデバイス間で同期される場合があります。このデータはAppleによって暗号化されており、当社はアクセスできません。",
    "zh": "<b>iCloud同步</b> — 您的学习数据可能通过个人iCloud账户在Apple设备之间同步。这些数据由Apple加密，我们无法访问。",
    "ar": "<b>مزامنة iCloud</b> — قد تتم مزامنة بيانات التعلم الخاصة بك عبر أجهزة Apple الخاصة بك من خلال حساب iCloud الشخصي. يتم تشفير هذه البيانات بواسطة Apple ولا يمكننا الوصول إليها.",
    "uk": "<b>Синхронізація iCloud</b> — ваші навчальні дані можуть синхронізуватися між пристроями Apple через ваш особистий обліковий запис iCloud. Ці дані зашифровані Apple, і ми не маємо до них доступу.",
}
T["appData.li4"] = {
    "pl": "<b>Stan subskrypcji</b> — Twój poziom subskrypcji (darmowy lub premium) jest weryfikowany za pośrednictwem rozliczeń App Store firmy Apple. Dane dotyczące płatności są obsługiwane wyłącznie przez Apple — nie widzimy ani nie przechowujemy danych Twojej karty płatniczej ani informacji rozliczeniowych.",
    "de": "<b>Abonnementstatus</b> — Ihr Abonnement-Level (kostenlos oder Premium) wird über die App-Store-Abrechnung von Apple verifiziert. Zahlungsdaten werden ausschließlich von Apple verarbeitet — wir sehen und speichern keine Kartendaten oder Rechnungsinformationen.",
    "es": "<b>Estado de suscripción</b> — su nivel de suscripción (gratuito o premium) se verifica a través de la facturación del App Store de Apple. Los datos de pago son gestionados exclusivamente por Apple — no vemos ni almacenamos los datos de su tarjeta ni la información de facturación.",
    "fr": "<b>Statut d'abonnement</b> — votre niveau d'abonnement (gratuit ou premium) est vérifié via la facturation App Store d'Apple. Les données de paiement sont gérées exclusivement par Apple — nous ne voyons ni ne stockons les données de votre carte ou vos informations de facturation.",
    "ja": "<b>サブスクリプション状況</b> — サブスクリプションレベル（無料またはプレミアム）はApple App Storeの課金を通じて確認されます。支払いデータはAppleが独占的に処理し、当社はカード情報や請求情報を閲覧・保存しません。",
    "zh": "<b>订阅状态</b> — 您的订阅级别（免费或高级）通过Apple App Store计费进行验证。支付数据完全由Apple处理——我们不会查看或存储您的卡片数据或账单信息。",
    "ar": "<b>حالة الاشتراك</b> — يتم التحقق من مستوى اشتراكك (مجاني أو مميز) عبر فوترة App Store من Apple. تتم معالجة بيانات الدفع حصريًا بواسطة Apple — لا نرى ولا نخزن بيانات بطاقتك أو معلومات الفوترة.",
    "uk": "<b>Стан підписки</b> — ваш рівень підписки (безкоштовний або преміум) перевіряється через білінг Apple App Store. Платіжні дані обробляються виключно Apple — ми не бачимо та не зберігаємо дані вашої картки чи платіжну інформацію.",
}

# ── whatWeDontCollect ──────────────────────────────────────────────────────────
T["whatWeDontCollect.heading"] = {
    "pl": "Czego nie zbieramy",
    "de": "Was wir nicht erfassen",
    "es": "Lo que no recopilamos",
    "fr": "Ce que nous ne collectons pas",
    "ja": "収集しないもの",
    "zh": "我们不收集的内容",
    "ar": "ما لا نجمعه",
    "uk": "Що ми не збираємо",
}
T["whatWeDontCollect.intro"] = {
    "pl": "Chcemy być jednoznaczni w kwestii tego, czego NIE robimy:",
    "de": "Wir möchten klar darlegen, was wir NICHT tun:",
    "es": "Queremos ser explícitos sobre lo que NO hacemos:",
    "fr": "Nous souhaitons être explicites sur ce que nous NE faisons PAS :",
    "ja": "当社が行わないことを明確にしたいと思います：",
    "zh": "我们想明确说明我们不做的事情：",
    "ar": "نريد أن نكون صريحين بشأن ما لا نفعله:",
    "uk": "Ми хочемо чітко пояснити, чого ми НЕ робимо:",
}
T["whatWeDontCollect.li1"] = {
    "pl": "Brak konta użytkownika lub logowania wymaganego do korzystania z aplikacji iOS",
    "de": "Kein Benutzerkonto oder Login erforderlich, um die iOS-App zu nutzen",
    "es": "No se requiere cuenta de usuario ni inicio de sesión para usar la aplicación iOS",
    "fr": "Aucun compte utilisateur ni connexion requis pour utiliser l'application iOS",
    "ja": "iOSアプリの使用にユーザーアカウントやログインは不要",
    "zh": "使用iOS应用无需用户账户或登录",
    "ar": "لا يلزم حساب مستخدم أو تسجيل دخول لاستخدام تطبيق iOS",
    "uk": "Для використання додатку iOS не потрібен обліковий запис або вхід в систему",
}
T["whatWeDontCollect.li2"] = {
    "pl": "Brak śledzenia lokalizacji lub narzędzi geolokalizacji",
    "de": "Keine Standortverfolgung oder Geolokalisierungstools",
    "es": "Sin rastreo de ubicación ni herramientas de geolocalización",
    "fr": "Aucun suivi de localisation ni outil de géolocalisation",
    "ja": "位置情報の追跡や地理情報ツールなし",
    "zh": "无位置追踪或地理定位工具",
    "ar": "لا يوجد تتبع للموقع أو أدوات تحديد الموقع الجغرافي",
    "uk": "Без відстеження місцезнаходження або інструментів геолокації",
}
T["whatWeDontCollect.li3"] = {
    "pl": "Brak sieci reklamowych lub pikseli śledzących w aplikacji lub na stronie",
    "de": "Keine Werbenetzwerke oder Tracking-Pixel in der App oder auf der Website",
    "es": "Sin redes publicitarias ni píxeles de seguimiento en la aplicación o el sitio web",
    "fr": "Aucun réseau publicitaire ni pixel de suivi dans l'application ou sur le site web",
    "ja": "アプリやウェブサイトに広告ネットワークやトラッキングピクセルなし",
    "zh": "应用和网站中无广告网络或跟踪像素",
    "ar": "لا توجد شبكات إعلانية أو بيكسلات تتبع في التطبيق أو الموقع الإلكتروني",
    "uk": "Без рекламних мереж або пікселів відстеження в додатку чи на сайті",
}
T["whatWeDontCollect.li4"] = {
    "pl": "Brak sprzedaży, dzierżawy lub udostępniania danych brokerom danych lub reklamodawcom",
    "de": "Kein Verkauf, keine Vermietung oder Weitergabe von Daten an Datenhändler oder Werbetreibende",
    "es": "Sin venta, alquiler ni intercambio de datos con corredores de datos o anunciantes",
    "fr": "Aucune vente, location ou partage de données avec des courtiers en données ou des annonceurs",
    "ja": "データブローカーや広告主へのデータの販売、貸与、共有なし",
    "zh": "不向数据经纪人或广告商出售、出租或分享数据",
    "ar": "لا بيع أو تأجير أو مشاركة للبيانات مع وسطاء بيانات أو معلنين",
    "uk": "Без продажу, оренди або передачі даних брокерам даних або рекламодавцям",
}
T["whatWeDontCollect.li5"] = {
    "pl": "Brak odcisków palca urządzeń, śledzenia między stronami lub pikselów retargetingowych",
    "de": "Keinerlei Device-Fingerprinting, Cross-Site-Tracking oder Retargeting-Pixel",
    "es": "Sin huellas digitales de dispositivos, rastreo entre sitios ni píxeles de retargeting",
    "fr": "Aucune empreinte d'appareil, suivi inter-sites ou pixel de reciblage",
    "ja": "デバイスフィンガープリント、クロスサイトトラッキング、リターゲティングピクセルなし",
    "zh": "无设备指纹、跨站追踪或再营销像素",
    "ar": "لا توجد بصمات أجهزة أو تتبع عبر المواقع أو بيكسلات إعادة الاستهداف",
    "uk": "Без відбитків пристроїв, міжсайтового відстеження або пікселів ретаргетингу",
}
T["whatWeDontCollect.li6"] = {
    "pl": "Brak danych osobowych udostępnianych usługom szkolenia modeli AI",
    "de": "Keine Weitergabe personenbezogener Daten an KI-Modelltrainingsdienste",
    "es": "Sin datos personales compartidos con servicios de entrenamiento de modelos de IA",
    "fr": "Aucune donnée personnelle partagée avec des services d'entraînement de modèles d'IA",
    "ja": "AIモデルの学習サービスとの個人データ共有なし",
    "zh": "不与AI模型训练服务分享个人数据",
    "ar": "لا تتم مشاركة أي بيانات شخصية مع خدمات تدريب نماذج الذكاء الاصطناعي",
    "uk": "Без передачі персональних даних сервісам навчання моделей ШІ",
}

# ── legalBasis ────────────────────────────────────────────────────────────────
T["legalBasis.heading"] = {
    "pl": "Podstawa prawna przetwarzania",
    "de": "Rechtsgrundlage der Verarbeitung",
    "es": "Base legal para el tratamiento",
    "fr": "Base juridique du traitement",
    "ja": "処理の法的根拠",
    "zh": "处理的法律依据",
    "ar": "الأساس القانوني للمعالجة",
    "uk": "Правова основа обробки",
}
T["legalBasis.intro"] = {
    "pl": "Zgodnie z RODO i brytyjskim RODO przetwarzamy dane osobowe tylko wtedy, gdy mamy do tego podstawę prawną. Oto podstawa prawna dla każdego rodzaju danych, które przetwarzamy:",
    "de": "Nach der DSGVO und der britischen DSGVO verarbeiten wir personenbezogene Daten nur, wenn wir eine rechtmäßige Grundlage haben. Hier ist die Rechtsgrundlage für jede Art von Daten, die wir verarbeiten:",
    "es": "De acuerdo con el RGPD y el RGPD del Reino Unido, solo tratamos datos personales cuando tenemos una base legal. Esta es la base legal para cada tipo de datos que gestionamos:",
    "fr": "En vertu du RGPD et du RGPD britannique, nous ne traitons les données personnelles que lorsque nous disposons d'une base juridique. Voici la base juridique pour chaque type de données que nous traitons :",
    "ja": "GDPRおよび英国GDPRに基づき、当社は合法的な根拠がある場合にのみ個人データを処理します。当社が取り扱う各データの法的根拠は以下のとおりです：",
    "zh": "根据GDPR和英国GDPR，我们仅在有合法依据时才处理个人数据。以下是我们处理各类数据的法律依据：",
    "ar": "بموجب GDPR و GDPR في المملكة المتحدة، لا نعالج البيانات الشخصية إلا عندما يكون لدينا أساس قانوني. فيما يلي الأساس القانوني لكل نوع من البيانات التي نتعامل معها:",
    "uk": "Відповідно до GDPR та GDPR Великої Британії ми обробляємо персональні дані лише за наявності законної підстави. Ось правова основа для кожного типу даних, які ми обробляємо:",
}
T["legalBasis.consentHeading"] = {
    "pl": "Zgoda (RODO art. 6(1)(a))",
    "de": "Einwilligung (DSGVO Art. 6(1)(a))",
    "es": "Consentimiento (RGPD art. 6(1)(a))",
    "fr": "Consentement (RGPD art. 6(1)(a))",
    "ja": "同意（GDPR第6条(1)(a)）",
    "zh": "同意（GDPR第6条(1)(a)）",
    "ar": "الموافقة (GDPR المادة 6(1)(أ))",
    "uk": "Згода (GDPR ст. 6(1)(а))",
}
T["legalBasis.consentLi1"] = {
    "pl": "<b>Zapis na newsletter</b> — aktywnie podajesz swój adres e-mail i wyrażasz zgodę na otrzymywanie aktualizacji",
    "de": "<b>Newsletter-Anmeldung</b> — Sie geben aktiv Ihre E-Mail-Adresse an und stimmen dem Erhalt von Updates zu",
    "es": "<b>Suscripción al boletín</b> — usted proporciona activamente su correo electrónico y acepta recibir actualizaciones",
    "fr": "<b>Inscription à la newsletter</b> — vous fournissez activement votre adresse e-mail et consentez à recevoir des mises à jour",
    "ja": "<b>ニュースレター登録</b> — お客様が能動的にメールアドレスを提供し、アップデートの受信に同意されます",
    "zh": "<b>新闻通讯订阅</b> — 您主动提供电子邮件地址并同意接收更新",
    "ar": "<b>الاشتراك في النشرة الإخبارية</b> — تقدم بريدك الإلكتروني بشكل فعّال وتوافق على تلقي التحديثات",
    "uk": "<b>Підписка на розсилку</b> — ви активно надаєте свою електронну адресу та погоджуєтеся отримувати оновлення",
}
T["legalBasis.consentLi2"] = {
    "pl": "<b>Zapis na listę oczekujących</b> — aktywnie podajesz swój adres e-mail i preferencje językowe",
    "de": "<b>Wartelisten-Anmeldung</b> — Sie geben aktiv Ihre E-Mail-Adresse und Sprachpräferenz an",
    "es": "<b>Registro en la lista de espera</b> — usted proporciona activamente su correo electrónico y su preferencia de idioma",
    "fr": "<b>Inscription à la liste d'attente</b> — vous fournissez activement votre adresse e-mail et votre préférence linguistique",
    "ja": "<b>ウェイトリスト登録</b> — お客様が能動的にメールアドレスと言語設定を提供されます",
    "zh": "<b>等待名单注册</b> — 您主动提供电子邮件地址和语言偏好",
    "ar": "<b>الاشتراك في قائمة الانتظار</b> — تقدم بريدك الإلكتروني وتفضيلات اللغة بشكل فعّال",
    "uk": "<b>Реєстрація у списку очікування</b> — ви активно надаєте свою електронну адресу та мовні уподобання",
}
T["legalBasis.consentLi3"] = {
    "pl": "<b>Nagrania sesji Sentry</b> — nagrania są rejestrowane wyłącznie po wyrażeniu przez Ciebie wyraźnej zgody za pośrednictwem naszego banera zgodę na pliki cookie",
    "de": "<b>Sentry-Sitzungsaufzeichnung</b> — Aufzeichnungen werden nur nach Ihrer ausdrücklichen Zustimmung über unser Cookie-Zustimmungsbanner erfasst",
    "es": "<b>Reproducción de sesiones de Sentry</b> — las reproducciones solo se capturan después de que usted dé su consentimiento explícito a través de nuestro banner de consentimiento de cookies",
    "fr": "<b>Replay de session Sentry</b> — les enregistrements ne sont capturés qu'après votre consentement explicite via notre bannière de consentement aux cookies",
    "ja": "<b>Sentryセッションリプレイ</b> — リプレイはCookie同意バナーで明示的に同意された場合にのみキャプチャされます",
    "zh": "<b>Sentry会话回放</b> — 仅在您通过Cookie同意横幅明确同意后才会捕获回放",
    "ar": "<b>إعادة تشغيل جلسات Sentry</b> — لا يتم التقاط عمليات إعادة التشغيل إلا بعد منحك موافقة صريحة عبر شعار الموافقة على ملفات تعريف الارتباط",
    "uk": "<b>Запис сесій Sentry</b> — записи фіксуються лише після вашої явної згоди через наш банер згоди на cookie",
}
T["legalBasis.legitimateHeading"] = {
    "pl": "Prawnie uzasadniony interes (RODO art. 6(1)(f))",
    "de": "Berechtigtes Interesse (DSGVO Art. 6(1)(f))",
    "es": "Interés legítimo (RGPD art. 6(1)(f))",
    "fr": "Intérêt légitime (RGPD art. 6(1)(f))",
    "ja": "正当な利益（GDPR第6条(1)(f)）",
    "zh": "合法利益（GDPR第6条(1)(f)）",
    "ar": "المصلحة المشروعة (GDPR المادة 6(1)(و))",
    "uk": "Законний інтерес (GDPR ст. 6(1)(f))",
}
T["legalBasis.legitimateLi1"] = {
    "pl": "<b>Vercel Analytics</b> — anonimowe, bezplikowe zliczanie wyświetleń stron w celu poprawy naszej strony. Nasz interes w zrozumieniu użytkowania strony jest zrównoważony z minimalnym wpływem na prywatność (brak danych osobowych)",
    "de": "<b>Vercel Analytics</b> — anonyme, cookiefreie Seitenaufrufzählung zur Verbesserung unserer Website. Unser Interesse am Verständnis der Websitenutzung steht im Verhältnis zur minimalen Auswirkung auf die Privatsphäre (keine personenbezogenen Daten)",
    "es": "<b>Vercel Analytics</b> — recuento anónimo de páginas vistas sin cookies para mejorar nuestro sitio web. Nuestro interés en comprender el uso del sitio se equilibra con el impacto mínimo en la privacidad (sin datos personales)",
    "fr": "<b>Vercel Analytics</b> — comptage anonyme des pages vues sans cookies pour améliorer notre site web. Notre intérêt à comprendre l'utilisation du site est contrebalancé par un impact minimal sur la vie privée (aucune donnée personnelle)",
    "ja": "<b>Vercel Analytics</b> — ウェブサイト改善のためのCookieを使用しない匿名ページビューのカウント。サイト利用状況の把握に対する当社の利益は、プライバシーへの最小限の影響（個人情報なし）とバランスが取れています",
    "zh": "<b>Vercel Analytics</b> — 无Cookie的匿名页面浏览统计，用于改善我们的网站。我们了解网站使用情况的利益与对隐私的最小影响（不收集个人数据）保持平衡",
    "ar": "<b>Vercel Analytics</b> — عد مشاهدات الصفحات بشكل مجهول وبدون ملفات تعريف ارتباط لتحسين موقعنا. مصلحتنا في فهم استخدام الموقع متوازنة مع الحد الأدنى من التأثير على الخصوصية (لا بيانات شخصية)",
    "uk": "<b>Vercel Analytics</b> — анонімний підрахунок переглядів сторінок без файлів cookie для покращення нашого сайту. Наш інтерес у розумінні використання сайту збалансований з мінімальним впливом на конфіденційність (без персональних даних)",
}
T["legalBasis.legitimateLi2"] = {
    "pl": "<b>Monitorowanie błędów Sentry</b> — zbieranie diagnostyki błędów w celu utrzymania niezawodności usługi. Zachowania użytkowników nie są rejestrowane bez zgody; na tej podstawie zbierane są wyłącznie dane o awariach i błędach",
    "de": "<b>Sentry-Fehlerüberwachung</b> — Erfassung von Fehlerdiagnosen zur Aufrechterhaltung der Dienstzuverlässigkeit. Nutzerverhalten wird ohne Einwilligung nicht erfasst; nur Absturz- und Fehlerdaten werden auf dieser Grundlage erhoben",
    "es": "<b>Monitoreo de errores de Sentry</b> — recopilación de diagnósticos de errores para mantener la fiabilidad del servicio. No se captura el comportamiento del usuario sin consentimiento; solo se recopilan datos de fallos y errores bajo esta base",
    "fr": "<b>Surveillance des erreurs Sentry</b> — collecte de diagnostics d'erreurs pour maintenir la fiabilité du service. Aucun comportement utilisateur n'est capturé sans consentement ; seules les données de plantage et d'erreur sont collectées sur cette base",
    "ja": "<b>Sentryエラーモニタリング</b> — サービスの信頼性維持のためのエラー診断データの収集。同意なしにユーザー行動は記録されません。この根拠に基づいて収集されるのはクラッシュおよびエラーデータのみです",
    "zh": "<b>Sentry错误监控</b> — 收集错误诊断数据以维护服务可靠性。未经同意不会捕获用户行为；仅在此依据下收集崩溃和错误数据",
    "ar": "<b>مراقبة أخطاء Sentry</b> — جمع تشخيصات الأخطاء للحفاظ على موثوقية الخدمة. لا يتم التقاط سلوك المستخدم بدون موافقة؛ يتم جمع بيانات الأعطال والأخطاء فقط على هذا الأساس",
    "uk": "<b>Моніторинг помилок Sentry</b> — збір діагностики помилок для підтримки надійності сервісу. Поведінка користувачів не фіксується без згоди; на цій підставі збираються лише дані про збої та помилки",
}
T["legalBasis.legitimateLi3"] = {
    "pl": "<b>Ograniczanie częstotliwości (przetwarzanie adresów IP)</b> — zapobieganie nadużyciom naszych końcówek API. Adresy IP są przetwarzane tymczasowo i nie są przechowywane",
    "de": "<b>Ratenbegrenzung (IP-Adressverarbeitung)</b> — Verhinderung von Missbrauch unserer API-Endpunkte. IP-Adressen werden vorübergehend verarbeitet und nicht gespeichert",
    "es": "<b>Limitación de velocidad (procesamiento de direcciones IP)</b> — prevención del abuso de nuestros puntos finales de API. Las direcciones IP se procesan de forma transitoria y no se almacenan",
    "fr": "<b>Limitation du débit (traitement des adresses IP)</b> — prévention des abus de nos points d'accès API. Les adresses IP sont traitées de manière transitoire et ne sont pas stockées",
    "ja": "<b>レート制限（IPアドレス処理）</b> — APIエンドポイントの不正利用防止。IPアドレスは一時的に処理され、保存されません",
    "zh": "<b>速率限制（IP地址处理）</b> — 防止API端点被滥用。IP地址被临时处理且不被存储",
    "ar": "<b>تحديد المعدل (معالجة عنوان IP)</b> — منع إساءة استخدام نقاط نهاية API الخاصة بنا. تتم معالجة عناوين IP بشكل مؤقت ولا يتم تخزينها",
    "uk": "<b>Обмеження швидкості (обробка IP-адрес)</b> — запобігання зловживанню нашими API-ендпоінтами. IP-адреси обробляються тимчасово і не зберігаються",
}
T["legalBasis.contractHeading"] = {
    "pl": "Wykonanie umowy (RODO art. 6(1)(b))",
    "de": "Vertragserfüllung (DSGVO Art. 6(1)(b))",
    "es": "Ejecución del contrato (RGPD art. 6(1)(b))",
    "fr": "Exécution du contrat (RGPD art. 6(1)(b))",
    "ja": "契約の履行（GDPR第6条(1)(b)）",
    "zh": "合同履行（GDPR第6条(1)(b)）",
    "ar": "تنفيذ العقد (GDPR المادة 6(1)(ب))",
    "uk": "Виконання договору (GDPR ст. 6(1)(б))",
}
T["legalBasis.contractLi1"] = {
    "pl": "<b>Dane edukacyjne aplikacji iOS</b> — przetwarzanie postępów w nauce jest niezbędne do świadczenia usługi nauki języków, z której korzystasz",
    "de": "<b>iOS-App-Lerndaten</b> — die Verarbeitung Ihres Lernfortschritts ist notwendig, um den Sprachlerndienst zu erbringen, den Sie nutzen",
    "es": "<b>Datos de aprendizaje de la aplicación iOS</b> — el procesamiento de su progreso de aprendizaje es necesario para prestar el servicio de aprendizaje de idiomas que usted utiliza",
    "fr": "<b>Données d'apprentissage de l'application iOS</b> — le traitement de vos progrès d'apprentissage est nécessaire pour fournir le service d'apprentissage des langues que vous utilisez",
    "ja": "<b>iOSアプリの学習データ</b> — お客様が利用する言語学習サービスを提供するために、学習進捗の処理が必要です",
    "zh": "<b>iOS应用学习数据</b> — 处理您的学习进度是提供您使用的语言学习服务所必需的",
    "ar": "<b>بيانات التعلم في تطبيق iOS</b> — معالجة تقدمك في التعلم ضرورية لتقديم خدمة تعلم اللغات التي تستخدمها",
    "uk": "<b>Навчальні дані додатку iOS</b> — обробка вашого навчального прогресу необхідна для надання сервісу вивчення мов, яким ви користуєтеся",
}
T["legalBasis.contractLi2"] = {
    "pl": "<b>Synchronizacja iCloud</b> — synchronizacja postępów między urządzeniami jest podstawową częścią usługi",
    "de": "<b>iCloud-Synchronisierung</b> — die geräteübergreifende Synchronisierung Ihres Fortschritts ist ein wesentlicher Bestandteil des Dienstes",
    "es": "<b>Sincronización con iCloud</b> — sincronizar su progreso entre dispositivos es una parte fundamental del servicio",
    "fr": "<b>Synchronisation iCloud</b> — la synchronisation de vos progrès entre vos appareils est une partie essentielle du service",
    "ja": "<b>iCloud同期</b> — デバイス間での進捗の同期はサービスの中核的な機能です",
    "zh": "<b>iCloud同步</b> — 跨设备同步您的进度是服务的核心部分",
    "ar": "<b>مزامنة iCloud</b> — مزامنة تقدمك عبر الأجهزة جزء أساسي من الخدمة",
    "uk": "<b>Синхронізація iCloud</b> — синхронізація вашого прогресу між пристроями є основною частиною сервісу",
}
T["legalBasis.contractLi3"] = {
    "pl": "<b>Zarządzanie subskrypcją</b> — weryfikacja Twojego poziomu w celu zapewnienia odpowiednich funkcji",
    "de": "<b>Abonnementverwaltung</b> — Überprüfung Ihres Abonnement-Levels zur Bereitstellung der entsprechenden Funktionen",
    "es": "<b>Gestión de suscripción</b> — verificación de su nivel para proporcionar las funciones apropiadas",
    "fr": "<b>Gestion de l'abonnement</b> — vérification de votre niveau pour fournir les fonctionnalités appropriées",
    "ja": "<b>サブスクリプション管理</b> — 適切な機能を提供するためのレベル確認",
    "zh": "<b>订阅管理</b> — 验证您的等级以提供相应功能",
    "ar": "<b>إدارة الاشتراك</b> — التحقق من مستوى اشتراكك لتوفير الميزات المناسبة",
    "uk": "<b>Управління підпискою</b> — перевірка вашого рівня для надання відповідних функцій",
}

def apply_translations():
    en_data = load_json("en")
    stats = {}
    for locale in LOCALES:
        data = load_json(locale)
        changes = 0
        for dotkey, locale_translations in T.items():
            if locale not in locale_translations:
                continue
            keys = dotkey.split(".")
            en_val = get_nested(en_data.get("Privacy", {}), keys)
            current_val = get_nested(data.get("Privacy", {}), keys)
            if en_val is not None and current_val == en_val:
                set_nested(data["Privacy"], keys, locale_translations[locale])
                changes += 1
        if changes > 0:
            save_json(locale, data)
        stats[locale] = changes
        print(f"  {locale}: {changes} keys translated")
    return stats

if __name__ == "__main__":
    print("Story 21.1 — Privacy Policy Translation (Part 2/5)")
    print("Sections: customEvents, serviceWorker, appData, whatWeDontCollect, legalBasis")
    print("=" * 70)
    apply_translations()
    print("\nPart 2 complete.")

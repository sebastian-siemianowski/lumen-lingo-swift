#!/usr/bin/env python3
"""
Epic 19 -- Cookie Policy: PECR 2003 Full Compliance
Stories 19.1-19.6
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# ── 19.1 + 19.2 + 19.3: Consent section (rejection, withdrawal, affirmative) ──
consent = {
    "en": {
        "heading": "Cookie Consent",
        "rejection": "You can reject all non-essential cookies by clicking the \"Reject All\" button on the cookie banner. Rejecting non-essential cookies does not affect your access to any functionality of the website. Only strictly necessary cookies (consent preference and language selection) will remain active after rejection.",
        "withdrawal": "You can withdraw your cookie consent at any time by clicking \"Cookie Settings\" in the website footer. Upon withdrawal, all non-essential cookies and storage items will be deleted from your browser. Data already collected during the consent period may be retained in accordance with the retention schedule described in our Privacy Policy. Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal (GDPR Article 7(3)).",
        "affirmative": "No cookie consent options are pre-ticked. Consent requires an affirmative action: either clicking \"Accept All\" or individually toggling specific cookie categories to the \"on\" position. Simply browsing the website without interacting with the cookie banner does not constitute consent, and no non-essential cookies will be set until you make an active choice.",
    },
    "pl": {
        "heading": "Zgoda na pliki cookie",
        "rejection": "Możesz odrzucić wszystkie nieistotne pliki cookie, klikając przycisk \"Odrzuć wszystkie\" na banerze cookie. Odrzucenie nieistotnych plików cookie nie wpływa na dostęp do żadnej funkcjonalności witryny. Po odrzuceniu aktywne pozostaną jedynie niezbędne pliki cookie (preferencje zgody i wybór języka).",
        "withdrawal": "Możesz wycofać zgodę na pliki cookie w dowolnym momencie, klikając \"Ustawienia cookie\" w stopce witryny. Po wycofaniu zgody wszystkie nieistotne pliki cookie i elementy pamięci zostaną usunięte z Twojej przeglądarki. Dane już zebrane w okresie obowiązywania zgody mogą być przechowywane zgodnie z harmonogramem retencji opisanym w naszej Polityce prywatności. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania przeprowadzonego przed wycofaniem (art. 7 ust. 3 RODO).",
        "affirmative": "Żadne opcje zgody na pliki cookie nie są domyślnie zaznaczone. Zgoda wymaga potwierdzenia: kliknięcia \"Akceptuj wszystkie\" lub indywidualnego przełączenia poszczególnych kategorii plików cookie na pozycję \"włączone\". Samo przeglądanie witryny bez interakcji z banerem cookie nie stanowi zgody i żadne nieistotne pliki cookie nie zostaną ustawione, dopóki nie dokonasz aktywnego wyboru.",
    },
    "de": {
        "heading": "Cookie-Einwilligung",
        "rejection": "Sie können alle nicht wesentlichen Cookies ablehnen, indem Sie auf die Schaltfläche \"Alle ablehnen\" im Cookie-Banner klicken. Die Ablehnung nicht wesentlicher Cookies beeinträchtigt Ihren Zugang zu keiner Funktionalität der Website. Nach der Ablehnung bleiben nur strikt notwendige Cookies (Einwilligungspräferenz und Sprachauswahl) aktiv.",
        "withdrawal": "Sie können Ihre Cookie-Einwilligung jederzeit widerrufen, indem Sie auf \"Cookie-Einstellungen\" in der Fußzeile der Website klicken. Nach dem Widerruf werden alle nicht wesentlichen Cookies und Speicherelemente aus Ihrem Browser gelöscht. Daten, die bereits während der Einwilligungsperiode erhoben wurden, können gemäß dem in unserer Datenschutzrichtlinie beschriebenen Aufbewahrungsplan aufbewahrt werden. Der Widerruf der Einwilligung berührt nicht die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung (DSGVO Artikel 7(3)).",
        "affirmative": "Keine Cookie-Einwilligungsoptionen sind vorausgewählt. Die Einwilligung erfordert eine aktive Handlung: entweder das Klicken auf \"Alle akzeptieren\" oder das individuelle Umschalten bestimmter Cookie-Kategorien auf \"Ein\". Das bloße Durchsuchen der Website ohne Interaktion mit dem Cookie-Banner stellt keine Einwilligung dar, und es werden keine nicht wesentlichen Cookies gesetzt, bis Sie eine aktive Wahl treffen.",
    },
    "es": {
        "heading": "Consentimiento de cookies",
        "rejection": "Puede rechazar todas las cookies no esenciales haciendo clic en el boton \"Rechazar todas\" en el banner de cookies. Rechazar las cookies no esenciales no afecta su acceso a ninguna funcionalidad del sitio web. Solo las cookies estrictamente necesarias (preferencia de consentimiento y seleccion de idioma) permaneceran activas tras el rechazo.",
        "withdrawal": "Puede retirar su consentimiento de cookies en cualquier momento haciendo clic en \"Configuracion de cookies\" en el pie de pagina del sitio web. Tras la retirada, todas las cookies no esenciales y elementos de almacenamiento se eliminaran de su navegador. Los datos ya recopilados durante el periodo de consentimiento podran conservarse de acuerdo con el calendario de retencion descrito en nuestra Politica de Privacidad. La retirada del consentimiento no afecta a la licitud del tratamiento realizado antes de la retirada (RGPD Articulo 7(3)).",
        "affirmative": "Ninguna opcion de consentimiento de cookies esta premarcada. El consentimiento requiere una accion afirmativa: hacer clic en \"Aceptar todas\" o activar individualmente categorias especificas de cookies. Simplemente navegar por el sitio web sin interactuar con el banner de cookies no constituye consentimiento, y no se estableceran cookies no esenciales hasta que realice una eleccion activa.",
    },
    "fr": {
        "heading": "Consentement aux cookies",
        "rejection": "Vous pouvez refuser tous les cookies non essentiels en cliquant sur le bouton \"Tout refuser\" dans la banniere de cookies. Le refus des cookies non essentiels n'affecte pas votre acces aux fonctionnalites du site web. Seuls les cookies strictement necessaires (preference de consentement et selection de la langue) resteront actifs apres le refus.",
        "withdrawal": "Vous pouvez retirer votre consentement aux cookies a tout moment en cliquant sur \"Parametres des cookies\" dans le pied de page du site web. Apres le retrait, tous les cookies non essentiels et elements de stockage seront supprimes de votre navigateur. Les donnees deja collectees pendant la periode de consentement peuvent etre conservees conformement au calendrier de retention decrit dans notre Politique de confidentialite. Le retrait du consentement n'affecte pas la licite du traitement effectue avant le retrait (RGPD Article 7(3)).",
        "affirmative": "Aucune option de consentement aux cookies n'est precochee. Le consentement necessite une action affirmative : cliquer sur \"Tout accepter\" ou activer individuellement des categories specifiques de cookies. Le simple fait de naviguer sur le site web sans interagir avec la banniere de cookies ne constitue pas un consentement, et aucun cookie non essentiel ne sera installe tant que vous n'aurez pas fait un choix actif.",
    },
    "ja": {
        "heading": "Cookie への同意",
        "rejection": "Cookie バナーの「すべて拒否」ボタンをクリックすることで、すべての非必須 Cookie を拒否できます。非必須 Cookie を拒否しても、ウェブサイトのいかなる機能へのアクセスにも影響しません。拒否後は、厳密に必要な Cookie（同意設定と言語選択）のみがアクティブなままとなります。",
        "withdrawal": "ウェブサイトのフッターにある「Cookie 設定」をクリックすることで、いつでも Cookie への同意を撤回できます。撤回すると、すべての非必須 Cookie およびストレージアイテムがブラウザから削除されます。同意期間中にすでに収集されたデータは、プライバシーポリシーに記載された保持スケジュールに従って保持される場合があります。同意の撤回は、撤回前に行われた処理の適法性に影響しません（GDPR 第 7 条第 3 項）。",
        "affirmative": "Cookie 同意オプションは事前にチェックされていません。同意には能動的な行動が必要です：「すべて受け入れる」をクリックするか、特定の Cookie カテゴリを個別に「オン」に切り替えてください。Cookie バナーとのやり取りなしにウェブサイトを閲覧するだけでは同意とはみなされず、お客様が能動的に選択するまで非必須 Cookie は設定されません。",
    },
    "zh": {
        "heading": "Cookie 同意",
        "rejection": "您可以通过点击 Cookie 横幅上的\"全部拒绝\"按钮来拒绝所有非必要 Cookie。拒绝非必要 Cookie 不会影响您访问网站的任何功能。拒绝后，仅严格必要的 Cookie（同意偏好和语言选择）将保持活动状态。",
        "withdrawal": "您可以随时通过点击网站页脚的\"Cookie 设置\"来撤回您的 Cookie 同意。撤回后，所有非必要 Cookie 和存储项将从您的浏览器中删除。在同意期间已收集的数据可能会根据我们隐私政策中描述的保留计划予以保留。撤回同意不影响撤回前进行的处理的合法性（GDPR 第 7 条第 3 款）。",
        "affirmative": "没有 Cookie 同意选项是预先勾选的。同意需要主动操作：点击\"全部接受\"或单独将特定 Cookie 类别切换为\"开启\"。仅浏览网站而不与 Cookie 横幅互动不构成同意，在您做出主动选择之前不会设置任何非必要 Cookie。",
    },
    "ar": {
        "heading": "الموافقة على ملفات تعريف الارتباط",
        "rejection": "يمكنك رفض جميع ملفات تعريف الارتباط غير الأساسية بالنقر فوق زر \"رفض الكل\" في لافتة ملفات تعريف الارتباط. لا يؤثر رفض ملفات تعريف الارتباط غير الأساسية على وصولك إلى أي وظيفة من وظائف الموقع. ستبقى فقط ملفات تعريف الارتباط الضرورية للغاية (تفضيل الموافقة واختيار اللغة) نشطة بعد الرفض.",
        "withdrawal": "يمكنك سحب موافقتك على ملفات تعريف الارتباط في أي وقت بالنقر على \"إعدادات ملفات تعريف الارتباط\" في تذييل الموقع. عند السحب، سيتم حذف جميع ملفات تعريف الارتباط غير الأساسية وعناصر التخزين من متصفحك. قد يتم الاحتفاظ بالبيانات التي تم جمعها بالفعل خلال فترة الموافقة وفقًا لجدول الاحتفاظ الموضح في سياسة الخصوصية الخاصة بنا. لا يؤثر سحب الموافقة على مشروعية المعالجة التي تمت قبل السحب (المادة 7(3) من اللائحة العامة لحماية البيانات).",
        "affirmative": "لا توجد خيارات موافقة على ملفات تعريف الارتباط محددة مسبقًا. تتطلب الموافقة إجراءً إيجابيًا: إما النقر على \"قبول الكل\" أو تبديل فئات ملفات تعريف الارتباط المحددة بشكل فردي إلى وضع \"تشغيل\". مجرد تصفح الموقع دون التفاعل مع لافتة ملفات تعريف الارتباط لا يشكل موافقة، ولن يتم تعيين أي ملفات تعريف ارتباط غير أساسية حتى تقوم باختيار نشط.",
    },
    "uk": {
        "heading": "Згода на файли cookie",
        "rejection": "Ви можете відхилити всі несуттєві файли cookie, натиснувши кнопку \"Відхилити все\" на банері cookie. Відхилення несуттєвих файлів cookie не впливає на доступ до будь-якої функціональності веб-сайту. Після відхилення залишаться активними лише суворо необхідні файли cookie (налаштування згоди та вибір мови).",
        "withdrawal": "Ви можете відкликати свою згоду на файли cookie в будь-який час, натиснувши \"Налаштування cookie\" у нижньому колонтитулі веб-сайту. Після відкликання всі несуттєві файли cookie та елементи зберігання будуть видалені з вашого браузера. Дані, вже зібрані протягом періоду згоди, можуть зберігатися відповідно до графіка зберігання, описаного в нашій Політиці конфіденційності. Відкликання згоди не впливає на законність обробки, здійсненої до відкликання (стаття 7(3) GDPR).",
        "affirmative": "Жодні опції згоди на файли cookie не позначені заздалегідь. Згода вимагає ствердної дії: натискання \"Прийняти все\" або індивідуального перемикання конкретних категорій файлів cookie у положення \"увімкнено\". Просте перегляд веб-сайту без взаємодії з банером cookie не є згодою, і жодні несуттєві файли cookie не будуть встановлені, доки ви не зробите активний вибір.",
    },
}

# ── 19.4: Cookie Granularity ──
granularity = {
    "en": {
        "heading": "Cookie Category Controls",
        "p1": "You can control cookies by category. Each category can be independently enabled or disabled through the cookie settings panel:",
        "li1": "<b>Strictly Necessary</b> -- Always active. Includes consent preference storage (ll_cookie_consent) and language selection (NEXT_LOCALE). Cannot be disabled as these are essential for the website to function.",
        "li2": "<b>Analytics</b> -- Vercel Web Analytics operates without setting cookies and does not require consent. No toggle is needed for this category.",
        "li3": "<b>Functional</b> -- Includes Sentry session replay for error monitoring. This category can be toggled on or off. Third-party storage items from Sentry can be denied without affecting core website functionality.",
        "p2": "Your category preferences are stored in the ll_cookie_consent key in localStorage and respected on every subsequent visit.",
    },
    "pl": {
        "heading": "Kontrole kategorii plików cookie",
        "p1": "Możesz kontrolować pliki cookie według kategorii. Każda kategoria może być niezależnie włączona lub wyłączona za pomocą panelu ustawień plików cookie:",
        "li1": "<b>Ściśle niezbędne</b> -- Zawsze aktywne. Obejmują przechowywanie preferencji zgody (ll_cookie_consent) i wybór języka (NEXT_LOCALE). Nie można ich wyłączyć, ponieważ są niezbędne do działania witryny.",
        "li2": "<b>Analityczne</b> -- Vercel Web Analytics działa bez ustawiania plików cookie i nie wymaga zgody. Przełącznik nie jest potrzebny dla tej kategorii.",
        "li3": "<b>Funkcjonalne</b> -- Obejmują powtórkę sesji Sentry do monitorowania błędów. Ta kategoria może być włączona lub wyłączona. Elementy pamięci innych firm od Sentry mogą być odrzucone bez wpływu na podstawową funkcjonalność witryny.",
        "p2": "Twoje preferencje kategorii są przechowywane w kluczu ll_cookie_consent w localStorage i uwzględniane przy każdej kolejnej wizycie.",
    },
    "de": {
        "heading": "Cookie-Kategorie-Steuerung",
        "p1": "Sie können Cookies nach Kategorien steuern. Jede Kategorie kann über das Cookie-Einstellungspanel unabhängig aktiviert oder deaktiviert werden:",
        "li1": "<b>Strikt notwendig</b> -- Immer aktiv. Umfasst die Speicherung der Einwilligungspräferenz (ll_cookie_consent) und die Sprachauswahl (NEXT_LOCALE). Kann nicht deaktiviert werden, da diese für das Funktionieren der Website unerlässlich sind.",
        "li2": "<b>Analytisch</b> -- Vercel Web Analytics arbeitet ohne Cookies und erfordert keine Einwilligung. Für diese Kategorie ist kein Umschalter erforderlich.",
        "li3": "<b>Funktional</b> -- Umfasst Sentry Session Replay zur Fehlerüberwachung. Diese Kategorie kann ein- oder ausgeschaltet werden. Drittanbieter-Speicherelemente von Sentry können ohne Beeinträchtigung der Kernfunktionalität der Website abgelehnt werden.",
        "p2": "Ihre Kategoriepräferenzen werden im Schlüssel ll_cookie_consent in localStorage gespeichert und bei jedem weiteren Besuch berücksichtigt.",
    },
    "es": {
        "heading": "Controles de categorias de cookies",
        "p1": "Puede controlar las cookies por categoria. Cada categoria puede habilitarse o deshabilitarse de forma independiente a traves del panel de configuracion de cookies:",
        "li1": "<b>Estrictamente necesarias</b> -- Siempre activas. Incluyen el almacenamiento de preferencias de consentimiento (ll_cookie_consent) y la seleccion de idioma (NEXT_LOCALE). No pueden desactivarse ya que son esenciales para el funcionamiento del sitio web.",
        "li2": "<b>Analiticas</b> -- Vercel Web Analytics funciona sin establecer cookies y no requiere consentimiento. No se necesita interruptor para esta categoria.",
        "li3": "<b>Funcionales</b> -- Incluyen la reproduccion de sesiones de Sentry para la monitorizacion de errores. Esta categoria puede activarse o desactivarse. Los elementos de almacenamiento de terceros de Sentry pueden rechazarse sin afectar la funcionalidad principal del sitio web.",
        "p2": "Sus preferencias de categoria se almacenan en la clave ll_cookie_consent en localStorage y se respetan en cada visita posterior.",
    },
    "fr": {
        "heading": "Controles par categorie de cookies",
        "p1": "Vous pouvez controler les cookies par categorie. Chaque categorie peut etre activee ou desactivee independamment via le panneau de parametres des cookies :",
        "li1": "<b>Strictement necessaires</b> -- Toujours actifs. Comprennent le stockage des preferences de consentement (ll_cookie_consent) et la selection de la langue (NEXT_LOCALE). Ne peuvent pas etre desactives car ils sont essentiels au fonctionnement du site web.",
        "li2": "<b>Analytiques</b> -- Vercel Web Analytics fonctionne sans installer de cookies et ne necessite pas de consentement. Aucun interrupteur n'est necessaire pour cette categorie.",
        "li3": "<b>Fonctionnels</b> -- Comprennent la relecture de session Sentry pour la surveillance des erreurs. Cette categorie peut etre activee ou desactivee. Les elements de stockage tiers de Sentry peuvent etre refuses sans affecter les fonctionnalites principales du site web.",
        "p2": "Vos preferences de categorie sont stockees dans la cle ll_cookie_consent dans localStorage et respectees a chaque visite ulterieure.",
    },
    "ja": {
        "heading": "Cookie カテゴリ制御",
        "p1": "Cookie をカテゴリ別に制御できます。各カテゴリは Cookie 設定パネルから独立して有効または無効にできます：",
        "li1": "<b>厳密に必要</b> -- 常にアクティブ。同意設定の保存（ll_cookie_consent）と言語選択（NEXT_LOCALE）を含みます。ウェブサイトの機能に不可欠であるため、無効にすることはできません。",
        "li2": "<b>分析</b> -- Vercel Web Analytics は Cookie を設定せずに動作し、同意を必要としません。このカテゴリにはトグルは不要です。",
        "li3": "<b>機能</b> -- エラー監視のための Sentry セッションリプレイを含みます。このカテゴリはオン/オフを切り替えることができます。Sentry のサードパーティストレージアイテムは、ウェブサイトのコア機能に影響を与えることなく拒否できます。",
        "p2": "カテゴリの設定は localStorage の ll_cookie_consent キーに保存され、以降のすべての訪問で尊重されます。",
    },
    "zh": {
        "heading": "Cookie 类别控制",
        "p1": "您可以按类别控制 Cookie。每个类别可以通过 Cookie 设置面板独立启用或禁用：",
        "li1": "<b>严格必要</b> -- 始终处于活动状态。包括同意偏好存储（ll_cookie_consent）和语言选择（NEXT_LOCALE）。这些对网站运行至关重要，不能禁用。",
        "li2": "<b>分析</b> -- Vercel Web Analytics 无需设置 Cookie 即可运行，不需要同意。此类别不需要切换开关。",
        "li3": "<b>功能</b> -- 包括用于错误监控的 Sentry 会话回放。此类别可以启用或禁用。可以拒绝来自 Sentry 的第三方存储项，而不影响网站的核心功能。",
        "p2": "您的类别偏好存储在 localStorage 的 ll_cookie_consent 键中，并在每次后续访问时得到遵守。",
    },
    "ar": {
        "heading": "عناصر التحكم في فئات ملفات تعريف الارتباط",
        "p1": "يمكنك التحكم في ملفات تعريف الارتباط حسب الفئة. يمكن تمكين أو تعطيل كل فئة بشكل مستقل من خلال لوحة إعدادات ملفات تعريف الارتباط:",
        "li1": "<b>ضرورية للغاية</b> -- نشطة دائمًا. تشمل تخزين تفضيلات الموافقة (ll_cookie_consent) واختيار اللغة (NEXT_LOCALE). لا يمكن تعطيلها لأنها ضرورية لعمل الموقع.",
        "li2": "<b>تحليلية</b> -- يعمل Vercel Web Analytics بدون تعيين ملفات تعريف الارتباط ولا يتطلب موافقة. لا حاجة لمفتاح تبديل لهذه الفئة.",
        "li3": "<b>وظيفية</b> -- تشمل إعادة تشغيل جلسة Sentry لمراقبة الأخطاء. يمكن تشغيل أو إيقاف هذه الفئة. يمكن رفض عناصر التخزين الخاصة بأطراف ثالثة من Sentry دون التأثير على الوظائف الأساسية للموقع.",
        "p2": "يتم تخزين تفضيلات الفئات الخاصة بك في مفتاح ll_cookie_consent في localStorage ويتم احترامها في كل زيارة لاحقة.",
    },
    "uk": {
        "heading": "Контроль категорій cookie",
        "p1": "Ви можете контролювати файли cookie за категоріями. Кожна категорія може бути незалежно увімкнена або вимкнена через панель налаштувань cookie:",
        "li1": "<b>Суворо необхідні</b> -- Завжди активні. Включають зберігання налаштувань згоди (ll_cookie_consent) та вибір мови (NEXT_LOCALE). Не можуть бути вимкнені, оскільки є необхідними для функціонування веб-сайту.",
        "li2": "<b>Аналітичні</b> -- Vercel Web Analytics працює без встановлення файлів cookie і не потребує згоди. Для цієї категорії перемикач не потрібен.",
        "li3": "<b>Функціональні</b> -- Включають повторення сесій Sentry для моніторингу помилок. Цю категорію можна вмикати або вимикати. Елементи зберігання третіх осіб від Sentry можуть бути відхилені без впливу на основну функціональність веб-сайту.",
        "p2": "Ваші налаштування категорій зберігаються в ключі ll_cookie_consent у localStorage і враховуються при кожному наступному відвідуванні.",
    },
}

# ── 19.5: Browser Cookie Deletion Instructions ──
browser_instructions = {
    "en": {
        "heading": "Managing Cookies in Your Browser",
        "intro": "In addition to our cookie settings panel, you can manage or delete cookies directly through your browser settings. Below are links to cookie management instructions for major browsers:",
        "chrome": "<b>Google Chrome:</b> <chromeLink>Clear, enable, and manage cookies in Chrome</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>Manage cookies and website data in Safari</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>Clear cookies and site data in Firefox</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>Delete cookies in Microsoft Edge</edgeLink>",
        "itp": "Safari users should note that Safari's Intelligent Tracking Prevention (ITP) automatically restricts the lifespan of most cookies and limits cross-site tracking. ITP may delete some cookies sooner than the durations listed in our cookie table above. This is a Safari browser feature and is not controlled by LumenLingo.",
    },
    "pl": {
        "heading": "Zarządzanie plikami cookie w przeglądarce",
        "intro": "Oprócz naszego panelu ustawień plików cookie, możesz zarządzać plikami cookie lub je usuwać bezpośrednio w ustawieniach przeglądarki. Poniżej znajdują się linki do instrukcji zarządzania plikami cookie dla głównych przeglądarek:",
        "chrome": "<b>Google Chrome:</b> <chromeLink>Czyszczenie, włączanie i zarządzanie plikami cookie w Chrome</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>Zarządzanie plikami cookie i danymi witryn w Safari</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>Czyszczenie plików cookie i danych witryn w Firefox</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>Usuwanie plików cookie w Microsoft Edge</edgeLink>",
        "itp": "Użytkownicy Safari powinni pamiętać, że funkcja Intelligent Tracking Prevention (ITP) w Safari automatycznie ogranicza czas życia większości plików cookie i ogranicza śledzenie między witrynami. ITP może usunąć niektóre pliki cookie wcześniej niż wskazano w naszej tabeli plików cookie powyżej. Jest to funkcja przeglądarki Safari i nie jest kontrolowana przez LumenLingo.",
    },
    "de": {
        "heading": "Cookies in Ihrem Browser verwalten",
        "intro": "Zusätzlich zu unserem Cookie-Einstellungspanel können Sie Cookies direkt über Ihre Browsereinstellungen verwalten oder löschen. Nachfolgend finden Sie Links zu Cookie-Verwaltungsanleitungen für die wichtigsten Browser:",
        "chrome": "<b>Google Chrome:</b> <chromeLink>Cookies in Chrome löschen, aktivieren und verwalten</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>Cookies und Websitedaten in Safari verwalten</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>Cookies und Websitedaten in Firefox löschen</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>Cookies in Microsoft Edge löschen</edgeLink>",
        "itp": "Safari-Nutzer sollten beachten, dass Safaris Intelligent Tracking Prevention (ITP) die Lebensdauer der meisten Cookies automatisch einschränkt und Cross-Site-Tracking begrenzt. ITP kann einige Cookies früher löschen als in unserer Cookie-Tabelle oben angegeben. Dies ist eine Safari-Browserfunktion und wird nicht von LumenLingo gesteuert.",
    },
    "es": {
        "heading": "Gestionar cookies en su navegador",
        "intro": "Ademas de nuestro panel de configuracion de cookies, puede gestionar o eliminar cookies directamente a traves de la configuracion de su navegador. A continuacion se encuentran los enlaces a las instrucciones de gestion de cookies para los principales navegadores:",
        "chrome": "<b>Google Chrome:</b> <chromeLink>Borrar, habilitar y gestionar cookies en Chrome</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>Gestionar cookies y datos de sitios web en Safari</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>Borrar cookies y datos de sitios en Firefox</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>Eliminar cookies en Microsoft Edge</edgeLink>",
        "itp": "Los usuarios de Safari deben tener en cuenta que la Prevencion de Rastreo Inteligente (ITP) de Safari restringe automaticamente la vida util de la mayoria de las cookies y limita el rastreo entre sitios. ITP puede eliminar algunas cookies antes de las duraciones indicadas en nuestra tabla de cookies anterior. Esta es una funcion del navegador Safari y no esta controlada por LumenLingo.",
    },
    "fr": {
        "heading": "Gerer les cookies dans votre navigateur",
        "intro": "En plus de notre panneau de parametres des cookies, vous pouvez gerer ou supprimer les cookies directement via les parametres de votre navigateur. Voici les liens vers les instructions de gestion des cookies pour les principaux navigateurs :",
        "chrome": "<b>Google Chrome :</b> <chromeLink>Effacer, activer et gerer les cookies dans Chrome</chromeLink>",
        "safari": "<b>Safari :</b> <safariLink>Gerer les cookies et les donnees de sites web dans Safari</safariLink>",
        "firefox": "<b>Firefox :</b> <firefoxLink>Effacer les cookies et les donnees de site dans Firefox</firefoxLink>",
        "edge": "<b>Microsoft Edge :</b> <edgeLink>Supprimer les cookies dans Microsoft Edge</edgeLink>",
        "itp": "Les utilisateurs de Safari doivent noter que la Prevention Intelligente du Pistage (ITP) de Safari restreint automatiquement la duree de vie de la plupart des cookies et limite le pistage intersite. ITP peut supprimer certains cookies plus tot que les durees indiquees dans notre tableau de cookies ci-dessus. Il s'agit d'une fonctionnalite du navigateur Safari et elle n'est pas controlee par LumenLingo.",
    },
    "ja": {
        "heading": "ブラウザでの Cookie 管理",
        "intro": "当社の Cookie 設定パネルに加えて、ブラウザの設定から直接 Cookie を管理または削除できます。以下は主要なブラウザの Cookie 管理手順へのリンクです：",
        "chrome": "<b>Google Chrome:</b> <chromeLink>Chrome で Cookie をクリア、有効化、管理する</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>Safari で Cookie と Web サイトデータを管理する</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>Firefox で Cookie とサイトデータをクリアする</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>Microsoft Edge で Cookie を削除する</edgeLink>",
        "itp": "Safari ユーザーは、Safari の Intelligent Tracking Prevention（ITP）がほとんどの Cookie の寿命を自動的に制限し、クロスサイトトラッキングを制限することにご注意ください。ITP により、上記の Cookie テーブルに記載された期間よりも早く一部の Cookie が削除される場合があります。これは Safari ブラウザの機能であり、LumenLingo によって制御されるものではありません。",
    },
    "zh": {
        "heading": "在浏览器中管理 Cookie",
        "intro": "除了我们的 Cookie 设置面板外，您还可以通过浏览器设置直接管理或删除 Cookie。以下是主要浏览器的 Cookie 管理说明链接：",
        "chrome": "<b>Google Chrome:</b> <chromeLink>在 Chrome 中清除、启用和管理 Cookie</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>在 Safari 中管理 Cookie 和网站数据</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>在 Firefox 中清除 Cookie 和网站数据</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>在 Microsoft Edge 中删除 Cookie</edgeLink>",
        "itp": "Safari 用户请注意，Safari 的智能跟踪预防（ITP）会自动限制大多数 Cookie 的生命周期并限制跨站跟踪。ITP 可能会比上方 Cookie 表中列出的持续时间更早地删除某些 Cookie。这是 Safari 浏览器的功能，不受 LumenLingo 控制。",
    },
    "ar": {
        "heading": "إدارة ملفات تعريف الارتباط في متصفحك",
        "intro": "بالإضافة إلى لوحة إعدادات ملفات تعريف الارتباط الخاصة بنا، يمكنك إدارة ملفات تعريف الارتباط أو حذفها مباشرة من خلال إعدادات المتصفح. فيما يلي روابط لتعليمات إدارة ملفات تعريف الارتباط للمتصفحات الرئيسية:",
        "chrome": "<b>Google Chrome:</b> <chromeLink>مسح وتمكين وإدارة ملفات تعريف الارتباط في Chrome</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>إدارة ملفات تعريف الارتباط وبيانات مواقع الويب في Safari</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>مسح ملفات تعريف الارتباط وبيانات المواقع في Firefox</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>حذف ملفات تعريف الارتباط في Microsoft Edge</edgeLink>",
        "itp": "يجب أن يلاحظ مستخدمو Safari أن ميزة منع التتبع الذكي (ITP) في Safari تقيد تلقائيًا عمر معظم ملفات تعريف الارتباط وتحد من التتبع عبر المواقع. قد يقوم ITP بحذف بعض ملفات تعريف الارتباط قبل المدد المذكورة في جدول ملفات تعريف الارتباط أعلاه. هذه ميزة في متصفح Safari ولا يتحكم فيها LumenLingo.",
    },
    "uk": {
        "heading": "Управління cookie у вашому браузері",
        "intro": "Крім нашої панелі налаштувань cookie, ви можете керувати файлами cookie або видаляти їх безпосередньо через налаштування браузера. Нижче наведено посилання на інструкції з управління cookie для основних браузерів:",
        "chrome": "<b>Google Chrome:</b> <chromeLink>Очищення, увімкнення та управління файлами cookie в Chrome</chromeLink>",
        "safari": "<b>Safari:</b> <safariLink>Управління файлами cookie та даними веб-сайтів у Safari</safariLink>",
        "firefox": "<b>Firefox:</b> <firefoxLink>Очищення файлів cookie та даних сайтів у Firefox</firefoxLink>",
        "edge": "<b>Microsoft Edge:</b> <edgeLink>Видалення файлів cookie в Microsoft Edge</edgeLink>",
        "itp": "Користувачі Safari повинні зауважити, що функція Intelligent Tracking Prevention (ITP) у Safari автоматично обмежує термін дії більшості файлів cookie та обмежує міжсайтове відстеження. ITP може видалити деякі файли cookie раніше, ніж вказано в нашій таблиці cookie вище. Це функція браузера Safari, яка не контролюється LumenLingo.",
    },
}

# ── 19.6: Accessibility of Cookie Settings ──
cookie_accessibility = {
    "en": "The cookie banner and settings panel are designed to be fully accessible. All controls support keyboard navigation (Tab, Enter, Space) and are compatible with screen readers through appropriate ARIA labels. Colour contrast meets WCAG 2.1 Level AA requirements. If you experience difficulty interacting with the cookie banner or settings, please contact us at <emailLink>legal@lumenlingo.com</emailLink> and we will assist you in managing your cookie preferences.",
    "pl": "Baner cookie i panel ustawień zostały zaprojektowane tak, aby były w pełni dostępne. Wszystkie elementy sterujące obsługują nawigację klawiaturą (Tab, Enter, Spacja) i są kompatybilne z czytnikami ekranu dzięki odpowiednim etykietom ARIA. Kontrast kolorów spełnia wymagania WCAG 2.1 Poziom AA. Jeśli masz trudności z interakcją z banerem cookie lub ustawieniami, skontaktuj się z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>, a pomożemy Ci w zarządzaniu preferencjami cookie.",
    "de": "Das Cookie-Banner und das Einstellungspanel sind vollständig barrierefrei gestaltet. Alle Steuerelemente unterstützen die Tastaturnavigation (Tab, Enter, Leertaste) und sind durch entsprechende ARIA-Labels mit Screenreadern kompatibel. Der Farbkontrast entspricht den Anforderungen der WCAG 2.1 Stufe AA. Wenn Sie Schwierigkeiten bei der Interaktion mit dem Cookie-Banner oder den Einstellungen haben, kontaktieren Sie uns bitte unter <emailLink>legal@lumenlingo.com</emailLink>, und wir helfen Ihnen bei der Verwaltung Ihrer Cookie-Präferenzen.",
    "es": "El banner de cookies y el panel de configuracion estan diseñados para ser completamente accesibles. Todos los controles admiten navegacion por teclado (Tab, Enter, Espacio) y son compatibles con lectores de pantalla mediante etiquetas ARIA apropiadas. El contraste de color cumple los requisitos de WCAG 2.1 Nivel AA. Si tiene dificultades para interactuar con el banner de cookies o la configuracion, contactenos en <emailLink>legal@lumenlingo.com</emailLink> y le ayudaremos a gestionar sus preferencias de cookies.",
    "fr": "La banniere de cookies et le panneau de parametres sont conçus pour etre entierement accessibles. Tous les controles supportent la navigation au clavier (Tab, Entree, Espace) et sont compatibles avec les lecteurs d'ecran grace a des etiquettes ARIA appropriees. Le contraste des couleurs repond aux exigences WCAG 2.1 Niveau AA. Si vous rencontrez des difficultes pour interagir avec la banniere de cookies ou les parametres, veuillez nous contacter a <emailLink>legal@lumenlingo.com</emailLink> et nous vous aiderons a gerer vos preferences de cookies.",
    "ja": "Cookie バナーと設定パネルは完全にアクセシブルに設計されています。すべてのコントロールはキーボードナビゲーション（Tab、Enter、Space）をサポートし、適切な ARIA ラベルによりスクリーンリーダーと互換性があります。色のコントラストは WCAG 2.1 レベル AA の要件を満たしています。Cookie バナーや設定の操作に困難がある場合は、<emailLink>legal@lumenlingo.com</emailLink> までご連絡ください。Cookie 設定の管理をお手伝いいたします。",
    "zh": "Cookie 横幅和设置面板的设计完全无障碍。所有控件支持键盘导航（Tab、Enter、Space）并通过适当的 ARIA 标签与屏幕阅读器兼容。颜色对比度符合 WCAG 2.1 AA 级要求。如果您在与 Cookie 横幅或设置交互时遇到困难，请通过 <emailLink>legal@lumenlingo.com</emailLink> 联系我们，我们将协助您管理 Cookie 偏好。",
    "ar": "تم تصميم لافتة ملفات تعريف الارتباط ولوحة الإعدادات لتكون متاحة بالكامل. تدعم جميع عناصر التحكم التنقل بلوحة المفاتيح (Tab و Enter و Space) وتتوافق مع قارئات الشاشة من خلال تسميات ARIA المناسبة. يلبي تباين الألوان متطلبات WCAG 2.1 المستوى AA. إذا واجهت صعوبة في التفاعل مع لافتة ملفات تعريف الارتباط أو الإعدادات، يرجى الاتصال بنا على <emailLink>legal@lumenlingo.com</emailLink> وسنساعدك في إدارة تفضيلات ملفات تعريف الارتباط الخاصة بك.",
    "uk": "Банер cookie та панель налаштувань розроблені для повної доступності. Усі елементи керування підтримують навігацію за допомогою клавіатури (Tab, Enter, Space) та сумісні з програмами зчитування екрана завдяки відповідним міткам ARIA. Контрастність кольорів відповідає вимогам WCAG 2.1 рівня AA. Якщо у вас виникли труднощі з взаємодією з банером cookie або налаштуваннями, будь ласка, зв'яжіться з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>, і ми допоможемо вам керувати налаштуваннями cookie.",
}

applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # 19.1-19.3: consent
    if "consent" not in data["CookiePage"]:
        data["CookiePage"]["consent"] = consent[loc]
        print(f"  [{loc}] Added CookiePage.consent")
        applied += 1

    # 19.4: granularity
    if "granularity" not in data["CookiePage"]:
        data["CookiePage"]["granularity"] = granularity[loc]
        print(f"  [{loc}] Added CookiePage.granularity")
        applied += 1

    # 19.5: browserInstructions
    if "browserInstructions" not in data["CookiePage"]:
        data["CookiePage"]["browserInstructions"] = browser_instructions[loc]
        print(f"  [{loc}] Added CookiePage.browserInstructions")
        applied += 1

    # 19.6: accessibility
    if "accessibility" not in data["CookiePage"]:
        data["CookiePage"]["accessibility"] = cookie_accessibility[loc]
        print(f"  [{loc}] Added CookiePage.accessibility")
        applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

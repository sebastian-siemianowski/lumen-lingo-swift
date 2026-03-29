#!/usr/bin/env python3
"""Story 21.1 — Translate all untranslated Privacy Policy keys across 8 non-English locales.

This script:
1. Identifies all Privacy.* keys in each non-English locale that are identical to English
2. Replaces them with proper translations
3. Preserves all HTML tags and rich text placeholders
"""
import json
import os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)

def load_json(locale):
    path = os.path.join(MESSAGES_DIR, f"{locale}.json")
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(locale, data):
    path = os.path.join(MESSAGES_DIR, f"{locale}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

def set_nested(d, keys, value):
    """Set a value in a nested dict using a list of keys."""
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def get_nested(d, keys):
    """Get a value from a nested dict using a list of keys."""
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return None
    return d

# ── TRANSLATIONS ──────────────────────────────────────────────────────────────
# Each key maps to {locale: translated_string}
# Keys are relative to the Privacy namespace (e.g., "meta.description")
#
# We translate in groups by section to maintain consistency.

TRANSLATIONS = {
    # ── meta ──
    "meta.description": {
        "pl": "Przeczytaj, jak Lumenshore dba o Twoje dane w aplikacji LumenLingo na iOS oraz na stronie lumenlingo.com.",
        "de": "Erfahren Sie, wie Lumenshore Ihre Daten in der LumenLingo iOS-App und auf lumenlingo.com sorgfaeltig behandelt.",
        "es": "Lea como Lumenshore gestiona sus datos con cuidado en la aplicacion LumenLingo para iOS y en lumenlingo.com.",
        "fr": "Decouvrez comment Lumenshore traite vos donnees avec soin dans l'application LumenLingo iOS et sur lumenlingo.com.",
        "ja": "LumenLingo iOSアプリおよびlumenlingo.comにおいて、Lumenshoreがお客様のデータをどのように慎重に取り扱っているかをお読みください。",
        "zh": "了解Lumenshore如何在LumenLingo iOS应用程序和lumenlingo.com网站上谨慎处理您的数据。",
        "ar": "اقرأ كيف تتعامل Lumenshore مع بياناتك بعناية عبر تطبيق LumenLingo لنظام iOS وموقع lumenlingo.com.",
        "uk": "Дізнайтеся, як Lumenshore дбайливо обробляє ваші дані в додатку LumenLingo для iOS та на сайті lumenlingo.com.",
    },
    "hero.subtitle": {
        "pl": "Twoja prywatność jest dla nas niezwykle ważna. Oto dokładnie, jak przetwarzamy Twoje dane w aplikacji LumenLingo i na naszej stronie internetowej.",
        "de": "Ihre Privatsphaere ist uns sehr wichtig. Hier erfahren Sie genau, wie wir Ihre Daten in der LumenLingo-App und auf unserer Website verarbeiten.",
        "es": "Su privacidad es muy importante para nosotros. Asi es exactamente como gestionamos sus datos en la aplicacion LumenLingo y en nuestro sitio web.",
        "fr": "Votre vie privee nous tient profondement a coeur. Voici exactement comment nous traitons vos donnees dans l'application LumenLingo et sur notre site web.",
        "ja": "お客様のプライバシーは私たちにとって非常に重要です。LumenLingoアプリおよびウェブサイトでのデータの取り扱い方法を正確にご説明します。",
        "zh": "您的隐私对我们至关重要。以下是我们在LumenLingo应用程序和网站上处理您数据的确切方式。",
        "ar": "خصوصيتك تهمنا كثيرًا. إليك بالضبط كيف نتعامل مع بياناتك عبر تطبيق LumenLingo وموقعنا الإلكتروني.",
        "uk": "Ваша конфіденційність надзвичайно важлива для нас. Ось як саме ми обробляємо ваші дані в додатку LumenLingo та на нашому веб-сайті.",
    },
    # ── overview ──
    "overview.p1": {
        "pl": "Lumenshore Limited (\"Lumenshore\", \"my\", \"nas\" lub \"nasz\"), numer firmy 09607326, zarejestrowana pod adresem Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Wielka Brytania, jest administratorem danych odpowiedzialnym za Twoje dane osobowe.",
        "de": "Lumenshore Limited (\"Lumenshore\", \"wir\", \"uns\" oder \"unser\"), Firmennummer 09607326, registriert unter Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Vereinigtes Koenigreich, ist der fuer Ihre personenbezogenen Daten verantwortliche Datenverantwortliche.",
        "es": "Lumenshore Limited (\"Lumenshore\", \"nosotros\", \"nos\" o \"nuestro\"), numero de empresa 09607326, registrada en Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Reino Unido, es el responsable del tratamiento de sus datos personales.",
        "fr": "Lumenshore Limited (\"Lumenshore\", \"nous\", \"notre\" ou \"nos\"), numero d'entreprise 09607326, enregistree a Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Royaume-Uni, est le responsable du traitement de vos donnees personnelles.",
        "ja": "Lumenshore Limited（「Lumenshore」、「当社」、「私たち」）、会社番号09607326、登録住所：Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, United Kingdom は、お客様の個人データに関するデータ管理者です。",
        "zh": "Lumenshore Limited（\"Lumenshore\"、\"我们\"），公司编号09607326，注册地址：Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, United Kingdom，是负责处理您个人数据的数据控制者。",
        "ar": "شركة Lumenshore Limited (\"Lumenshore\"، \"نحن\"، \"لنا\" أو \"خاصتنا\")، رقم الشركة 09607326، المسجلة في Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, المملكة المتحدة، هي المتحكم في البيانات المسؤول عن بياناتك الشخصية.",
        "uk": "Lumenshore Limited (\"Lumenshore\", \"ми\", \"нас\" або \"наш\"), номер компанії 09607326, зареєстрована за адресою Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Велика Британія, є контролером даних, відповідальним за ваші персональні дані.",
    },
    "overview.p2": {
        "pl": "Stworzyliśmy LumenLingo z architekturą stawiającą prywatność na pierwszym miejscu. W aplikacji iOS Twoje dane edukacyjne są przetwarzane i przechowywane lokalnie na Twoim urządzeniu oraz synchronizowane za pośrednictwem Twojego osobistego konta iCloud. Na naszej stronie internetowej zbieramy minimalne dane analityczne bez użycia plików cookie, z wyjątkiem jednego opcjonalnego narzędzia monitorowania błędów, które wymaga Twojej wyraźnej zgody.",
        "de": "Wir haben LumenLingo mit einer Privacy-First-Architektur entwickelt. In der iOS-App werden Ihre Lerndaten lokal auf Ihrem Geraet verarbeitet und gespeichert und ueber Ihr persoenliches iCloud-Konto synchronisiert. Auf unserer Website erheben wir minimale cookiefreie Analysedaten, mit Ausnahme eines optionalen Fehleriueberwachungstools, das Ihre ausdrueckliche Zustimmung erfordert.",
        "es": "Hemos creado LumenLingo con una arquitectura que prioriza la privacidad. En la aplicacion iOS, sus datos de aprendizaje se procesan y almacenan localmente en su dispositivo y se sincronizan a traves de su cuenta personal de iCloud. En nuestro sitio web, recopilamos datos analiticos minimos sin cookies, con la excepcion de una herramienta opcional de monitoreo de errores que requiere su consentimiento explicito.",
        "fr": "Nous avons concu LumenLingo avec une architecture axee sur la confidentialite. Dans l'application iOS, vos donnees d'apprentissage sont traitees et stockees localement sur votre appareil et synchronisees via votre compte iCloud personnel. Sur notre site web, nous collectons des donnees analytiques minimales sans cookies, a l'exception d'un outil optionnel de surveillance des erreurs qui necessite votre consentement explicite.",
        "ja": "LumenLingoはプライバシーファーストのアーキテクチャで構築しました。iOSアプリでは、学習データはお客様のデバイス上でローカルに処理・保存され、お客様の個人iCloudアカウントを介して同期されます。ウェブサイトでは、Cookieを使用しない最小限の分析データを収集しており、お客様の明示的な同意を必要とするオプションのエラー監視ツールが1つあるのみです。",
        "zh": "我们以隐私优先的架构构建了LumenLingo。在iOS应用中，您的学习数据在您的设备上本地处理和存储，并通过您的个人iCloud账户进行同步。在我们的网站上，我们收集最少的无Cookie分析数据，唯一的例外是一个需要您明确同意的可选错误监控工具。",
        "ar": "لقد بنينا LumenLingo بهندسة تضع الخصوصية أولاً. في تطبيق iOS، تتم معالجة بيانات التعلم الخاصة بك وتخزينها محليًا على جهازك ومزامنتها عبر حساب iCloud الشخصي الخاص بك. على موقعنا الإلكتروني، نجمع الحد الأدنى من البيانات التحليلية بدون ملفات تعريف الارتباط، باستثناء أداة اختيارية لمراقبة الأخطاء تتطلب موافقتك الصريحة.",
        "uk": "Ми створили LumenLingo з архітектурою, що ставить конфіденційність на перше місце. В додатку iOS ваші навчальні дані обробляються та зберігаються локально на вашому пристрої та синхронізуються через ваш особистий обліковий запис iCloud. На нашому веб-сайті ми збираємо мінімальні аналітичні дані без використання файлів cookie, за винятком одного додаткового інструменту моніторингу помилок, який потребує вашої явної згоди.",
    },
    "overview.p3": {
        "pl": "Niniejsza polityka jest podzielona na dwie sekcje — Strona internetowa i Aplikacja iOS — abyś mógł szybko znaleźć informacje istotne dla Ciebie.",
        "de": "Diese Richtlinie ist in zwei Abschnitte unterteilt — Website und iOS-App — damit Sie die fuer Sie relevanten Informationen schnell finden koennen.",
        "es": "Esta politica esta organizada en dos secciones — Sitio web y Aplicacion iOS — para que pueda encontrar rapidamente la informacion relevante para usted.",
        "fr": "Cette politique est organisee en deux sections — Site web et Application iOS — afin que vous puissiez rapidement trouver les informations qui vous concernent.",
        "ja": "このポリシーは、ウェブサイトとiOSアプリの2つのセクションに分かれており、お客様に関連する情報をすばやく見つけることができます。",
        "zh": "本政策分为两个部分——网站和iOS应用——以便您快速找到与您相关的信息。",
        "ar": "تم تنظيم هذه السياسة في قسمين — الموقع الإلكتروني وتطبيق iOS — حتى تتمكن من العثور بسرعة على المعلومات ذات الصلة بك.",
        "uk": "Ця політика організована у два розділи — Веб-сайт та Додаток iOS — щоб ви могли швидко знайти інформацію, що стосується вас.",
    },
}

# Due to the massive number of keys (~165 per locale), we'll continue with remaining sections.
# The script will be extended with additional translation blocks.

# ── websiteData ──
TRANSLATIONS.update({
    "websiteData.intro": {
        "pl": "Kiedy odwiedzasz lumenlingo.com, możemy zbierać następujące dane:",
        "de": "Wenn Sie lumenlingo.com besuchen, erfassen wir moeglicherweise die folgenden Daten:",
        "es": "Cuando visita lumenlingo.com, podemos recopilar los siguientes datos:",
        "fr": "Lorsque vous visitez lumenlingo.com, nous pouvons collecter les donnees suivantes :",
        "ja": "lumenlingo.comにアクセスされた際、以下のデータを収集する場合があります：",
        "zh": "当您访问lumenlingo.com时，我们可能会收集以下数据：",
        "ar": "عند زيارتك لموقع lumenlingo.com، قد نجمع البيانات التالية:",
        "uk": "Коли ви відвідуєте lumenlingo.com, ми можемо збирати наступні дані:",
    },
    "websiteData.li1": {
        "pl": "<b>Adres e-mail</b> — jeśli zapiszesz się na nasz newsletter lub dołączysz do listy oczekujących. Zbieramy Twój adres e-mail wyłącznie w celu wysyłania aktualizacji i informacji, o które prosiłeś.",
        "de": "<b>E-Mail-Adresse</b> — wenn Sie sich fuer unseren Newsletter anmelden oder der Warteliste beitreten. Wir erfassen Ihre E-Mail-Adresse ausschliesslich, um Ihnen die von Ihnen angeforderten Updates und Informationen zu senden.",
        "es": "<b>Direccion de correo electronico</b> — si se suscribe a nuestro boletin o se une a la lista de espera. Recopilamos su direccion de correo electronico unicamente para enviarle las actualizaciones e informacion que ha solicitado.",
        "fr": "<b>Adresse e-mail</b> — si vous vous inscrivez a notre newsletter ou rejoignez la liste d'attente. Nous collectons votre adresse e-mail uniquement pour vous envoyer les mises a jour et informations que vous avez demandees.",
        "ja": "<b>メールアドレス</b> — ニュースレターに登録された場合、またはウェイトリストに参加された場合。お客様がリクエストされた更新情報をお送りするためにのみ、メールアドレスを収集します。",
        "zh": "<b>电子邮件地址</b> — 如果您订阅了我们的新闻通讯或加入了等待名单。我们仅收集您的电子邮件地址以向您发送您请求的更新和信息。",
        "ar": "<b>عنوان البريد الإلكتروني</b> — إذا اشتركت في نشرتنا الإخبارية أو انضممت إلى قائمة الانتظار. نجمع عنوان بريدك الإلكتروني فقط لإرسال التحديثات والمعلومات التي طلبتها.",
        "uk": "<b>Електронна адреса</b> — якщо ви підпишетеся на нашу розсилку або приєднаєтеся до списку очікування. Ми збираємо вашу електронну адресу виключно для надсилання оновлень та інформації, які ви запитали.",
    },
    "websiteData.li2": {
        "pl": "<b>Preferencje językowe</b> — jeśli dołączysz do listy oczekujących, rejestrujemy, jakim językiem jesteś zainteresowany, aby dostosować naszą komunikację.",
        "de": "<b>Sprachpraeferenz</b> — wenn Sie der Warteliste beitreten, erfassen wir, an welcher Sprache Sie interessiert sind, um unsere Kommunikation anzupassen.",
        "es": "<b>Preferencia de idioma</b> — si se une a la lista de espera, registramos en que idioma esta interesado para personalizar nuestra comunicacion.",
        "fr": "<b>Preference linguistique</b> — si vous rejoignez la liste d'attente, nous enregistrons la langue qui vous interesse afin de personnaliser notre communication.",
        "ja": "<b>言語設定</b> — ウェイトリストに参加された場合、お客様が興味のある言語を記録し、コミュニケーションをカスタマイズします。",
        "zh": "<b>语言偏好</b> — 如果您加入等待名单，我们会记录您感兴趣的语言，以便定制我们的沟通内容。",
        "ar": "<b>تفضيل اللغة</b> — إذا انضممت إلى قائمة الانتظار، نسجل اللغة التي تهتم بها لتخصيص تواصلنا معك.",
        "uk": "<b>Мовні уподобання</b> — якщо ви приєднаєтеся до списку очікування, ми записуємо мову, яка вас цікавить, щоб персоналізувати наше спілкування.",
    },
    "websiteData.li3": {
        "pl": "<b>Atrybuty kampanii (parametry UTM)</b> — przechwytujemy parametry UTM (źródło, medium, kampania) aby zrozumieć, w jaki sposób odwiedzający trafiają na naszą stronę. Te dane są zbierane anonimowo i nie są powiązane z danymi osobowymi.",
        "de": "<b>Kampagnenzuordnung (UTM-Parameter)</b> — wir erfassen UTM-Parameter (Quelle, Medium, Kampagne), um zu verstehen, wie Besucher auf unsere Website gelangen. Diese Daten werden anonym erhoben und nicht mit personenbezogenen Daten verknuepft.",
        "es": "<b>Atribucion de campanas (parametros UTM)</b> — capturamos parametros UTM (fuente, medio, campana) para comprender como los visitantes llegan a nuestro sitio. Estos datos se recopilan de forma anonima y no se vinculan con datos personales.",
        "fr": "<b>Attribution de campagne (parametres UTM)</b> — nous capturons les parametres UTM (source, medium, campagne) pour comprendre comment les visiteurs arrivent sur notre site. Ces donnees sont collectees de maniere anonyme et ne sont pas associees a des donnees personnelles.",
        "ja": "<b>キャンペーンアトリビューション（UTMパラメーター）</b> — 訪問者がどのようにサイトにたどり着いたかを理解するため、UTMパラメーター（ソース、メディア、キャンペーン）を取得します。これらのデータは匿名で収集され、個人データとは紐づけられません。",
        "zh": "<b>活动归因（UTM参数）</b> — 我们捕获UTM参数（来源、媒介、活动）以了解访问者如何到达我们的网站。这些数据以匿名方式收集，不与个人数据关联。",
        "ar": "<b>إسناد الحملات (معلمات UTM)</b> — نلتقط معلمات UTM (المصدر، الوسيط، الحملة) لفهم كيفية وصول الزوار إلى موقعنا. يتم جمع هذه البيانات بشكل مجهول ولا ترتبط ببيانات شخصية.",
        "uk": "<b>Атрибуція кампаній (UTM-параметри)</b> — ми збираємо UTM-параметри (джерело, носій, кампанія) для розуміння того, як відвідувачі потрапляють на наш сайт. Ці дані збираються анонімно і не пов'язуються з персональними даними.",
    },
    "websiteData.li4": {
        "pl": "<b>Anonimowe wyświetlenia stron</b> — używamy Vercel Analytics, bezplikowej i szanującej prywatność usługi analitycznej, do zliczania wyświetleń stron. Nie są gromadzone żadne dane osobowe ani pliki cookie.",
        "de": "<b>Anonyme Seitenaufrufe</b> — wir verwenden Vercel Analytics, einen cookiefreien und datenschutzfreundlichen Analysedienst, zur Zaehlung von Seitenaufrufen. Es werden keine personenbezogenen Daten oder Cookies erfasst.",
        "es": "<b>Visualizaciones de paginas anonimas</b> — utilizamos Vercel Analytics, un servicio de analisis sin cookies y respetuoso con la privacidad, para contar las visualizaciones de paginas. No se recopilan datos personales ni cookies.",
        "fr": "<b>Pages vues anonymes</b> — nous utilisons Vercel Analytics, un service d'analyse sans cookies et respectueux de la vie privee, pour compter les pages vues. Aucune donnee personnelle ni cookie n'est collecte.",
        "ja": "<b>匿名ページビュー</b> — Cookieを使用しないプライバシー配慮型の分析サービスであるVercel Analyticsを使用して、ページビューをカウントしています。個人データやCookieは収集されません。",
        "zh": "<b>匿名页面浏览量</b> — 我们使用Vercel Analytics（一种无Cookie、尊重隐私的分析服务）来统计页面浏览量。不收集任何个人数据或Cookie。",
        "ar": "<b>مشاهدات الصفحات المجهولة</b> — نستخدم Vercel Analytics، وهي خدمة تحليلات خالية من ملفات تعريف الارتباط وتحترم الخصوصية، لحساب مشاهدات الصفحات. لا يتم جمع أي بيانات شخصية أو ملفات تعريف ارتباط.",
        "uk": "<b>Анонімні перегляди сторінок</b> — ми використовуємо Vercel Analytics, аналітичний сервіс без файлів cookie та з повагою до конфіденційності, для підрахунку переглядів сторінок. Жодні персональні дані чи файли cookie не збираються.",
    },
    "websiteData.li5": {
        "pl": "<b>Anonimowe metryki wydajności</b> — używamy Vercel Speed Insights do mierzenia czasów ładowania stron i podstawowych wskaźników internetowych. Te dane są w pełni zanonimizowane i nie można ich przypisać do konkretnego użytkownika.",
        "de": "<b>Anonyme Leistungsmetriken</b> — wir verwenden Vercel Speed Insights zur Messung von Seitenladezeiten und Core Web Vitals. Diese Daten sind vollstaendig anonymisiert und koennen keinem einzelnen Benutzer zugeordnet werden.",
        "es": "<b>Metricas de rendimiento anonimas</b> — utilizamos Vercel Speed Insights para medir los tiempos de carga de paginas y las metricas web principales. Estos datos estan completamente anonimizados y no pueden atribuirse a ningun usuario individual.",
        "fr": "<b>Metriques de performance anonymes</b> — nous utilisons Vercel Speed Insights pour mesurer les temps de chargement des pages et les Core Web Vitals. Ces donnees sont entierement anonymisees et ne peuvent etre attribuees a aucun utilisateur individuel.",
        "ja": "<b>匿名パフォーマンス指標</b> — ページの読み込み時間とCore Web Vitalsを測定するためにVercel Speed Insightsを使用しています。これらのデータは完全に匿名化されており、個人の特定はできません。",
        "zh": "<b>匿名性能指标</b> — 我们使用Vercel Speed Insights来衡量页面加载时间和核心网页指标。这些数据完全匿名，无法归因于任何个人用户。",
        "ar": "<b>مقاييس الأداء المجهولة</b> — نستخدم Vercel Speed Insights لقياس أوقات تحميل الصفحات ومؤشرات الويب الأساسية. هذه البيانات مجهولة الهوية بالكامل ولا يمكن نسبها إلى أي مستخدم فردي.",
        "uk": "<b>Анонімні показники продуктивності</b> — ми використовуємо Vercel Speed Insights для вимірювання часу завантаження сторінок та основних веб-показників. Ці дані повністю анонімізовані та не можуть бути прив'язані до жодного окремого користувача.",
    },
    "websiteData.li6": {
        "pl": "<b>Dane o błędach i nagrania sesji</b> — używamy Sentry do monitorowania błędów. Za Twoją zgodą, Sentry może nagrywać sesje przeglądania w celu diagnozy błędów. Nagrania sesji rejestrują nawigację po stronach, kliknięcia i przewijanie, ale wszystkie dane wejściowe w formularzach są maskowane.",
        "de": "<b>Fehlerdaten und Sitzungsaufzeichnungen</b> — wir verwenden Sentry zur Fehlerueberwachung. Mit Ihrer Zustimmung kann Sentry Browsing-Sitzungen aufzeichnen, um Fehler zu diagnostizieren. Sitzungsaufzeichnungen erfassen Seitennavigation, Klicks und Scrollen, jedoch werden alle Formulareingaben maskiert.",
        "es": "<b>Datos de errores y reproducciones de sesion</b> — utilizamos Sentry para el monitoreo de errores. Con su consentimiento, Sentry puede grabar sesiones de navegacion para diagnosticar errores. Las reproducciones de sesion registran la navegacion por paginas, clics y desplazamiento, pero todos los datos introducidos en formularios se ocultan.",
        "fr": "<b>Donnees d'erreur et enregistrements de session</b> — nous utilisons Sentry pour la surveillance des erreurs. Avec votre consentement, Sentry peut enregistrer des sessions de navigation pour diagnostiquer les erreurs. Les enregistrements de session capturent la navigation, les clics et le defilement, mais toutes les saisies de formulaire sont masquees.",
        "ja": "<b>エラーデータとセッションリプレイ</b> — エラー監視にSentryを使用しています。お客様の同意を得た上で、Sentryはエラー診断のためにブラウジングセッションを記録することがあります。セッションリプレイはページナビゲーション、クリック、スクロールを記録しますが、フォーム入力はすべてマスクされます。",
        "zh": "<b>错误数据和会话回放</b> — 我们使用Sentry进行错误监控。经您同意后，Sentry可能会录制浏览会话以诊断错误。会话回放记录页面导航、点击和滚动，但所有表单输入均被遮蔽。",
        "ar": "<b>بيانات الأخطاء وإعادة تشغيل الجلسات</b> — نستخدم Sentry لمراقبة الأخطاء. بموافقتك، قد يسجل Sentry جلسات التصفح لتشخيص الأخطاء. تسجل إعادة تشغيل الجلسات التنقل بين الصفحات والنقرات والتمرير، لكن جميع المدخلات في النماذج تكون مقنّعة.",
        "uk": "<b>Дані про помилки та записи сесій</b> — ми використовуємо Sentry для моніторингу помилок. За вашою згодою Sentry може записувати сесії перегляду для діагностики помилок. Записи сесій фіксують навігацію по сторінках, кліки та прокрутку, але всі введені дані у формах маскуються.",
    },
    "websiteData.li7": {
        "pl": "<b>Adresy IP</b> — Twój adres IP jest tymczasowo przetwarzany przez nasze trasy API w celu ograniczania częstotliwości zapytań (ochrona przed nadużyciami). Adresy IP nie są zapisywane na stałe i są usuwane po przetworzeniu żądania.",
        "de": "<b>IP-Adressen</b> — Ihre IP-Adresse wird voruebergehend von unseren API-Routen zur Ratenbegrenzung (Missbrauchsschutz) verarbeitet. IP-Adressen werden nicht dauerhaft gespeichert und nach der Verarbeitung der Anfrage geloescht.",
        "es": "<b>Direcciones IP</b> — su direccion IP es procesada transitoriamente por nuestras rutas API para la limitacion de velocidad (proteccion contra abusos). Las direcciones IP no se almacenan permanentemente y se eliminan despues de procesar la solicitud.",
        "fr": "<b>Adresses IP</b> — votre adresse IP est traitee de maniere transitoire par nos routes API pour la limitation du debit (protection contre les abus). Les adresses IP ne sont pas stockees de maniere permanente et sont supprimees apres le traitement de la requete.",
        "ja": "<b>IPアドレス</b> — お客様のIPアドレスは、レート制限（不正利用防止）のためにAPIルートで一時的に処理されます。IPアドレスは永続的に保存されず、リクエスト処理後に削除されます。",
        "zh": "<b>IP地址</b> — 您的IP地址由我们的API路由临时处理，用于速率限制（防滥用保护）。IP地址不会被永久存储，在请求处理后即被删除。",
        "ar": "<b>عناوين IP</b> — تتم معالجة عنوان IP الخاص بك مؤقتًا بواسطة مسارات API الخاصة بنا لتحديد المعدل (الحماية من إساءة الاستخدام). لا يتم تخزين عناوين IP بشكل دائم ويتم حذفها بعد معالجة الطلب.",
        "uk": "< b>IP-адреси</b> — ваша IP-адреса тимчасово обробляється нашими API-маршрутами для обмеження швидкості запитів (захист від зловживань). IP-адреси не зберігаються постійно і видаляються після обробки запиту.",
    },
})

def apply_translations():
    """Apply all translations to locale files."""
    locales = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
    
    for locale in locales:
        data = load_json(locale)
        en_data = load_json("en")
        changes = 0
        
        for dotkey, locale_translations in TRANSLATIONS.items():
            if locale not in locale_translations:
                continue
            
            keys = dotkey.split(".")
            # Check if English value exists and current value matches English
            en_val = get_nested(en_data.get("Privacy", {}), keys)
            current_val = get_nested(data.get("Privacy", {}), keys)
            
            if en_val is not None and current_val == en_val:
                set_nested(data["Privacy"], keys, locale_translations[locale])
                changes += 1
        
        if changes > 0:
            save_json(locale, data)
            print(f"  {locale}: {changes} Privacy keys translated")

    print("\nDone! Run scripts/audit_translations.py to verify.")

if __name__ == "__main__":
    print("Story 21.1 — Privacy Policy Translation (Phase 1: first ~15 keys)")
    print("=" * 60)
    apply_translations()

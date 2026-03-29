#!/usr/bin/env python3
"""Story 21.1 — Privacy translations Part 5/7.

Section: subProcessors (table headers, processor details, DPA status, changes).
Note: privacyUrl keys are NOT translated — URLs remain identical across locales.
"""
import json, os

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

# ── heading / intro ──────────────────────────────────────────────────────────
T["heading"] = {
    "pl": "Podmioty przetwarzające",
    "de": "Auftragsverarbeiter",
    "es": "Subencargados del tratamiento",
    "fr": "Sous-traitants",
    "ja": "副処理者",
    "zh": "子处理者",
    "ar": "المعالجون الفرعيون",
    "uk": "Субпроцесори",
}
T["intro"] = {
    "pl": "Następujące usługi stron trzecich przetwarzają dane w naszym imieniu. Każdy podmiot przetwarzający został oceniony pod kątem zgodności z przepisami o ochronie danych:",
    "de": "Die folgenden Drittanbieter-Dienste verarbeiten Daten in unserem Auftrag. Jeder Auftragsverarbeiter wurde auf die Einhaltung des Datenschutzes geprüft:",
    "es": "Los siguientes servicios de terceros procesan datos en nuestro nombre. Cada subencargado ha sido evaluado en cuanto al cumplimiento de la protección de datos:",
    "fr": "Les services tiers suivants traitent des données en notre nom. Chaque sous-traitant a été évalué pour la conformité en matière de protection des données :",
    "ja": "以下のサードパーティサービスが当社に代わってデータを処理しています。各副処理者はデータ保護コンプライアンスについて評価されています：",
    "zh": "以下第三方服务代表我们处理数据。每个子处理者均已进行数据保护合规评估：",
    "ar": "تقوم الخدمات التالية التابعة لأطراف ثالثة بمعالجة البيانات نيابةً عنا. تم تقييم كل معالج فرعي من حيث الامتثال لحماية البيانات:",
    "uk": "Наступні сторонні сервіси обробляють дані від нашого імені. Кожен субпроцесор був оцінений на відповідність вимогам захисту даних:",
}

# ── tableHeaders ──────────────────────────────────────────────────────────────
T["tableHeaders.service"] = {
    "pl": "Usługa",
    "de": "Dienst",
    "es": "Servicio",
    "fr": "Service",
    "ja": "サービス",
    "zh": "服务",
    "ar": "الخدمة",
    "uk": "Сервіс",
}
T["tableHeaders.purpose"] = {
    "pl": "Cel",
    "de": "Zweck",
    "es": "Propósito",
    "fr": "Finalité",
    "ja": "目的",
    "zh": "目的",
    "ar": "الغرض",
    "uk": "Мета",
}
T["tableHeaders.dataProcessed"] = {
    "pl": "Przetwarzane dane",
    "de": "Verarbeitete Daten",
    "es": "Datos procesados",
    "fr": "Données traitées",
    "ja": "処理されるデータ",
    "zh": "处理的数据",
    "ar": "البيانات المعالجة",
    "uk": "Оброблювані дані",
}
T["tableHeaders.location"] = {
    "pl": "Lokalizacja serwerów",
    "de": "Server-Standort",
    "es": "Ubicación del servidor",
    "fr": "Emplacement du serveur",
    "ja": "サーバーの場所",
    "zh": "服务器位置",
    "ar": "موقع الخادم",
    "uk": "Розташування сервера",
}
T["tableHeaders.privacyPolicy"] = {
    "pl": "Polityka prywatności",
    "de": "Datenschutzrichtlinie",
    "es": "Política de privacidad",
    "fr": "Politique de confidentialité",
    "ja": "プライバシーポリシー",
    "zh": "隐私政策",
    "ar": "سياسة الخصوصية",
    "uk": "Політика конфіденційності",
}

# ── processors.apple ─────────────────────────────────────────────────────────
T["processors.apple.service"] = {
    "pl": "Apple (App Store i iCloud)",
    "de": "Apple (App Store & iCloud)",
    "es": "Apple (App Store e iCloud)",
    "fr": "Apple (App Store et iCloud)",
    "ja": "Apple（App StoreとiCloud）",
    "zh": "Apple（App Store和iCloud）",
    "ar": "Apple (App Store و iCloud)",
    "uk": "Apple (App Store та iCloud)",
}
T["processors.apple.purpose"] = {
    "pl": "Dystrybucja aplikacji, rozliczanie subskrypcji, synchronizacja danych",
    "de": "App-Distribution, Abonnementabrechnung, Datensynchronisierung",
    "es": "Distribución de la aplicación, facturación de suscripciones, sincronización de datos",
    "fr": "Distribution de l'application, facturation des abonnements, synchronisation des données",
    "ja": "アプリ配布、サブスクリプション請求、データ同期",
    "zh": "应用分发、订阅计费、数据同步",
    "ar": "توزيع التطبيق، فوترة الاشتراكات، مزامنة البيانات",
    "uk": "Розповсюдження додатку, виставлення рахунків за підписку, синхронізація даних",
}
T["processors.apple.dataProcessed"] = {
    "pl": "Status subskrypcji, dane edukacyjne (przez iCloud)",
    "de": "Abonnementstatus, Lerndaten (über iCloud)",
    "es": "Estado de la suscripción, datos de aprendizaje (vía iCloud)",
    "fr": "Statut de l'abonnement, données d'apprentissage (via iCloud)",
    "ja": "サブスクリプションステータス、学習データ（iCloud経由）",
    "zh": "订阅状态、学习数据（通过iCloud）",
    "ar": "حالة الاشتراك، بيانات التعلم (عبر iCloud)",
    "uk": "Статус підписки, навчальні дані (через iCloud)",
}
T["processors.apple.location"] = {
    "pl": "Globalnie (centra danych Apple)",
    "de": "Global (Apple-Rechenzentren)",
    "es": "Global (centros de datos de Apple)",
    "fr": "Mondial (centres de données Apple)",
    "ja": "グローバル（Appleデータセンター）",
    "zh": "全球（Apple数据中心）",
    "ar": "عالميًا (مراكز بيانات Apple)",
    "uk": "Глобально (дата-центри Apple)",
}
T["processors.apple.privacyLabel"] = {
    "pl": "Prywatność Apple",
    "de": "Apple Datenschutz",
    "es": "Privacidad de Apple",
    "fr": "Confidentialité Apple",
    "ja": "Appleプライバシー",
    "zh": "Apple隐私",
    "ar": "خصوصية Apple",
    "uk": "Конфіденційність Apple",
}

# ── processors.vercel ────────────────────────────────────────────────────────
T["processors.vercel.service"] = {
    "pl": "Vercel",
    "de": "Vercel",
    "es": "Vercel",
    "fr": "Vercel",
    "ja": "Vercel",
    "zh": "Vercel",
    "ar": "Vercel",
    "uk": "Vercel",
}
T["processors.vercel.purpose"] = {
    "pl": "Hosting strony, anonimowa analityka, analiza wydajności",
    "de": "Website-Hosting, anonyme Analytik, Leistungsanalyse",
    "es": "Alojamiento web, análisis anónimos, información de rendimiento",
    "fr": "Hébergement web, analyses anonymes, analyse de performance",
    "ja": "ウェブサイトホスティング、匿名分析、パフォーマンス分析",
    "zh": "网站托管、匿名分析、速度分析",
    "ar": "استضافة الموقع، تحليلات مجهولة، تحليل السرعة",
    "uk": "Хостинг сайту, анонімна аналітика, аналіз продуктивності",
}
T["processors.vercel.dataProcessed"] = {
    "pl": "Anonimowe wyświetlenia stron, metryki wydajności",
    "de": "Anonyme Seitenaufrufe, Leistungsmetriken",
    "es": "Vistas de página anónimas, métricas de rendimiento",
    "fr": "Pages vues anonymes, métriques de performance",
    "ja": "匿名のページビュー、パフォーマンスメトリクス",
    "zh": "匿名页面浏览量、性能指标",
    "ar": "مشاهدات الصفحات المجهولة، مقاييس الأداء",
    "uk": "Анонімні перегляди сторінок, метрики продуктивності",
}
T["processors.vercel.location"] = {
    "pl": "Stany Zjednoczone (z globalnymi węzłami edge)",
    "de": "Vereinigte Staaten (mit globalen Edge-Knoten)",
    "es": "Estados Unidos (con nodos edge globales)",
    "fr": "États-Unis (avec des nœuds edge mondiaux)",
    "ja": "米国（グローバルエッジノード付き）",
    "zh": "美国（全球边缘节点）",
    "ar": "الولايات المتحدة (مع عُقد حافة عالمية)",
    "uk": "Сполучені Штати (з глобальними edge-вузлами)",
}
T["processors.vercel.privacyLabel"] = {
    "pl": "Prywatność Vercel",
    "de": "Vercel Datenschutz",
    "es": "Privacidad de Vercel",
    "fr": "Confidentialité Vercel",
    "ja": "Vercelプライバシー",
    "zh": "Vercel隐私",
    "ar": "خصوصية Vercel",
    "uk": "Конфіденційність Vercel",
}

# ── processors.sentry ────────────────────────────────────────────────────────
T["processors.sentry.service"] = {
    "pl": "Sentry (Functional Software, Inc.)",
    "de": "Sentry (Functional Software, Inc.)",
    "es": "Sentry (Functional Software, Inc.)",
    "fr": "Sentry (Functional Software, Inc.)",
    "ja": "Sentry（Functional Software, Inc.）",
    "zh": "Sentry（Functional Software, Inc.）",
    "ar": "Sentry (Functional Software, Inc.)",
    "uk": "Sentry (Functional Software, Inc.)",
}
T["processors.sentry.purpose"] = {
    "pl": "Monitorowanie błędów, nagrywanie sesji (za zgodą)",
    "de": "Fehlerüberwachung, Sitzungsaufzeichnung (mit Zustimmung)",
    "es": "Monitoreo de errores, reproducción de sesiones (con consentimiento)",
    "fr": "Surveillance des erreurs, replay de session (avec consentement)",
    "ja": "エラーモニタリング、セッションリプレイ（同意を得た場合）",
    "zh": "错误监控、会话回放（经同意）",
    "ar": "مراقبة الأخطاء، إعادة تشغيل الجلسات (بالموافقة)",
    "uk": "Моніторинг помилок, запис сесій (за згодою)",
}
T["processors.sentry.dataProcessed"] = {
    "pl": "Logi błędów, ślady stosu, nagrania sesji (za zgodą)",
    "de": "Fehlerprotokolle, Stack-Traces, Sitzungsaufzeichnungen (mit Zustimmung)",
    "es": "Registros de errores, trazas de pila, reproducciones de sesiones (con consentimiento)",
    "fr": "Journaux d'erreurs, traces de pile, replays de session (avec consentement)",
    "ja": "エラーログ、スタックトレース、セッションリプレイ（同意を得た場合）",
    "zh": "错误日志、堆栈跟踪、会话回放（经同意）",
    "ar": "سجلات الأخطاء، تتبعات المكدس، إعادات تشغيل الجلسات (بالموافقة)",
    "uk": "Журнали помилок, стеки викликів, записи сесій (за згодою)",
}
T["processors.sentry.location"] = {
    "pl": "Stany Zjednoczone",
    "de": "Vereinigte Staaten",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "米国",
    "zh": "美国",
    "ar": "الولايات المتحدة",
    "uk": "Сполучені Штати",
}
T["processors.sentry.privacyLabel"] = {
    "pl": "Prywatność Sentry",
    "de": "Sentry Datenschutz",
    "es": "Privacidad de Sentry",
    "fr": "Confidentialité Sentry",
    "ja": "Sentryプライバシー",
    "zh": "Sentry隐私",
    "ar": "خصوصية Sentry",
    "uk": "Конфіденційність Sentry",
}

# ── processors.clerk ─────────────────────────────────────────────────────────
T["processors.clerk.service"] = {
    "pl": "Clerk, Inc.",
    "de": "Clerk, Inc.",
    "es": "Clerk, Inc.",
    "fr": "Clerk, Inc.",
    "ja": "Clerk, Inc.",
    "zh": "Clerk, Inc.",
    "ar": "Clerk, Inc.",
    "uk": "Clerk, Inc.",
}
T["processors.clerk.purpose"] = {
    "pl": "Uwierzytelnianie użytkowników i zarządzanie tożsamością",
    "de": "Benutzerauthentifizierung und Identitätsverwaltung",
    "es": "Autenticación de usuarios y gestión de identidad",
    "fr": "Authentification des utilisateurs et gestion des identités",
    "ja": "ユーザー認証とID管理",
    "zh": "用户身份验证和身份管理",
    "ar": "مصادقة المستخدمين وإدارة الهوية",
    "uk": "Автентифікація користувачів та управління ідентичністю",
}
T["processors.clerk.dataProcessed"] = {
    "pl": "Adres e-mail, identyfikator użytkownika, tokeny uwierzytelniania",
    "de": "E-Mail-Adresse, Benutzer-ID, Authentifizierungstoken",
    "es": "Dirección de correo electrónico, identificador de usuario, tokens de autenticación",
    "fr": "Adresse e-mail, identifiant utilisateur, jetons d'authentification",
    "ja": "メールアドレス、ユーザーID、認証トークン",
    "zh": "电子邮件地址、用户标识符、身份验证令牌",
    "ar": "عنوان البريد الإلكتروني، معرف المستخدم، رموز المصادقة",
    "uk": "Адреса електронної пошти, ідентифікатор користувача, токени автентифікації",
}
T["processors.clerk.location"] = {
    "pl": "Stany Zjednoczone",
    "de": "Vereinigte Staaten",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "米国",
    "zh": "美国",
    "ar": "الولايات المتحدة",
    "uk": "Сполучені Штати",
}
T["processors.clerk.privacyLabel"] = {
    "pl": "Prywatność Clerk",
    "de": "Clerk Datenschutz",
    "es": "Privacidad de Clerk",
    "fr": "Confidentialité Clerk",
    "ja": "Clerkプライバシー",
    "zh": "Clerk隐私",
    "ar": "خصوصية Clerk",
    "uk": "Конфіденційність Clerk",
}

# ── processors.revenueCat ────────────────────────────────────────────────────
T["processors.revenueCat.service"] = {
    "pl": "RevenueCat, Inc.",
    "de": "RevenueCat, Inc.",
    "es": "RevenueCat, Inc.",
    "fr": "RevenueCat, Inc.",
    "ja": "RevenueCat, Inc.",
    "zh": "RevenueCat, Inc.",
    "ar": "RevenueCat, Inc.",
    "uk": "RevenueCat, Inc.",
}
T["processors.revenueCat.purpose"] = {
    "pl": "Zarządzanie subskrypcjami i śledzenie uprawnień",
    "de": "Abonnementverwaltung und Berechtigungsverfolgung",
    "es": "Gestión de suscripciones y seguimiento de derechos",
    "fr": "Gestion des abonnements et suivi des droits",
    "ja": "サブスクリプション管理と資格追跡",
    "zh": "订阅管理和权限跟踪",
    "ar": "إدارة الاشتراكات وتتبع الاستحقاقات",
    "uk": "Управління підписками та відстеження прав доступу",
}
T["processors.revenueCat.dataProcessed"] = {
    "pl": "Identyfikator użytkownika aplikacji, status subskrypcji, potwierdzenia zakupu (przez Apple — RevenueCat nie otrzymuje surowych danych kart płatniczych)",
    "de": "App-Benutzer-ID, Abonnementstatus, Kaufbelege (über Apple — RevenueCat erhält keine Rohkartendaten)",
    "es": "ID de usuario de la aplicación, estado de suscripción, recibos de compra (a través de Apple — RevenueCat no recibe datos brutos de tarjetas de pago)",
    "fr": "Identifiant utilisateur de l'application, statut de l'abonnement, reçus d'achat (via Apple — RevenueCat ne reçoit pas de données brutes de cartes de paiement)",
    "ja": "アプリユーザーID、サブスクリプションステータス、購入レシート（Apple経由 — RevenueCatは生の支払いカードデータを受け取りません）",
    "zh": "应用用户ID、订阅状态、购买收据（通过Apple — RevenueCat不接收原始支付卡数据）",
    "ar": "معرف مستخدم التطبيق، حالة الاشتراك، إيصالات الشراء (عبر Apple — لا تتلقى RevenueCat بيانات بطاقات الدفع الخام)",
    "uk": "Ідентифікатор користувача додатку, статус підписки, квитанції про покупку (через Apple — RevenueCat не отримує необроблені дані платіжних карток)",
}
T["processors.revenueCat.location"] = {
    "pl": "Stany Zjednoczone",
    "de": "Vereinigte Staaten",
    "es": "Estados Unidos",
    "fr": "États-Unis",
    "ja": "米国",
    "zh": "美国",
    "ar": "الولايات المتحدة",
    "uk": "Сполучені Штати",
}
T["processors.revenueCat.privacyLabel"] = {
    "pl": "Prywatność RevenueCat",
    "de": "RevenueCat Datenschutz",
    "es": "Privacidad de RevenueCat",
    "fr": "Confidentialité RevenueCat",
    "ja": "RevenueCatプライバシー",
    "zh": "RevenueCat隐私",
    "ar": "خصوصية RevenueCat",
    "uk": "Конфіденційність RevenueCat",
}

# ── dpaStatus ────────────────────────────────────────────────────────────────
T["dpaStatus.heading"] = {
    "pl": "Umowy o przetwarzaniu danych",
    "de": "Auftragsverarbeitungsvereinbarungen",
    "es": "Acuerdos de procesamiento de datos",
    "fr": "Accords de traitement des données",
    "ja": "データ処理契約",
    "zh": "数据处理协议",
    "ar": "اتفاقيات معالجة البيانات",
    "uk": "Угоди про обробку даних",
}
T["dpaStatus.p1"] = {
    "pl": "Utrzymujemy Umowy o przetwarzaniu danych (DPA) lub równoważne zabezpieczenia umowne ze wszystkimi podmiotami przetwarzającymi, które mają dostęp do danych osobowych:",
    "de": "Wir unterhalten Auftragsverarbeitungsvereinbarungen (AVV) oder gleichwertige vertragliche Schutzmaßnahmen mit allen Auftragsverarbeitern, die personenbezogene Daten verarbeiten:",
    "es": "Mantenemos Acuerdos de Procesamiento de Datos (DPA) o protecciones contractuales equivalentes con todos los subencargados que manejan datos personales:",
    "fr": "Nous maintenons des Accords de Traitement des Données (DPA) ou des protections contractuelles équivalentes avec tous les sous-traitants qui traitent des données personnelles :",
    "ja": "個人データを取り扱うすべての副処理者と、データ処理契約（DPA）または同等の契約上の保護措置を維持しています：",
    "zh": "我们与所有处理个人数据的子处理者维持数据处理协议（DPA）或同等的合同保护措施：",
    "ar": "نحتفظ باتفاقيات معالجة البيانات (DPA) أو حماية تعاقدية مكافئة مع جميع المعالجين الفرعيين الذين يتعاملون مع البيانات الشخصية:",
    "uk": "Ми підтримуємо Угоди про обробку даних (DPA) або еквівалентні договірні гарантії з усіма субпроцесорами, що обробляють персональні дані:",
}
T["dpaStatus.li1"] = {
    "pl": "<b>Apple</b> — objęty standardową DPA Apple dla deweloperów, zawierającą Standardowe Klauzule Umowne dla transferów międzynarodowych.",
    "de": "<b>Apple</b> — abgedeckt durch Apples Standard-AVV für Entwickler, einschließlich Standardvertragsklauseln für internationale Transfers.",
    "es": "<b>Apple</b> — cubierto por el DPA estándar de Apple para desarrolladores, que incorpora Cláusulas Contractuales Estándar para transferencias internacionales.",
    "fr": "<b>Apple</b> — couvert par le DPA standard d'Apple pour les développeurs, intégrant les Clauses Contractuelles Types pour les transferts internationaux.",
    "ja": "<b>Apple</b> — Apple開発者向け標準DPAの対象で、国際転送のための標準契約条項を含みます。",
    "zh": "<b>Apple</b> — 受Apple开发者标准DPA保护，包含国际传输的标准合同条款。",
    "ar": "<b>Apple</b> — مشمول باتفاقية معالجة البيانات القياسية من Apple للمطورين، والتي تتضمن البنود التعاقدية القياسية للنقل الدولي.",
    "uk": "<b>Apple</b> — охоплюється стандартною DPA Apple для розробників, що включає Стандартні договірні положення для міжнародних передач.",
}
T["dpaStatus.li2"] = {
    "pl": "<b>Vercel</b> — objęty DPA Vercel, dostępną na vercel.com/legal/dpa. Vercel Analytics nie używa plików cookie i nie przetwarza danych osobowych.",
    "de": "<b>Vercel</b> — abgedeckt durch Vercels AVV, verfügbar unter vercel.com/legal/dpa. Vercel Analytics ist cookiefrei und verarbeitet keine personenbezogenen Daten.",
    "es": "<b>Vercel</b> — cubierto por el DPA de Vercel, disponible en vercel.com/legal/dpa. Vercel Analytics no utiliza cookies y no procesa datos personales.",
    "fr": "<b>Vercel</b> — couvert par le DPA de Vercel, disponible sur vercel.com/legal/dpa. Vercel Analytics est sans cookies et ne traite aucune donnée personnelle.",
    "ja": "<b>Vercel</b> — vercel.com/legal/dpaで公開されているVercelのDPAの対象です。Vercel AnalyticsはCookieなしで個人データを処理しません。",
    "zh": "<b>Vercel</b> — 受Vercel的DPA保护，可在vercel.com/legal/dpa查阅。Vercel Analytics无Cookie且不处理个人数据。",
    "ar": "<b>Vercel</b> — مشمول باتفاقية معالجة البيانات من Vercel، المتاحة على vercel.com/legal/dpa. لا يستخدم Vercel Analytics ملفات تعريف ارتباط ولا يعالج بيانات شخصية.",
    "uk": "<b>Vercel</b> — охоплюється DPA Vercel, доступною на vercel.com/legal/dpa. Vercel Analytics не використовує файли cookie та не обробляє персональні дані.",
}
T["dpaStatus.li3"] = {
    "pl": "<b>Sentry</b> — objęty DPA Sentry ze Standardowymi Klauzulami Umownymi (SCC) dla transferów danych UE-USA.",
    "de": "<b>Sentry</b> — abgedeckt durch Sentrys AVV mit Standardvertragsklauseln (SCCs) für EU-US-Datentransfers.",
    "es": "<b>Sentry</b> — cubierto por el DPA de Sentry con Cláusulas Contractuales Estándar (CEC) para transferencias de datos UE-EE.UU.",
    "fr": "<b>Sentry</b> — couvert par le DPA de Sentry avec des Clauses Contractuelles Types (CCT) pour les transferts de données UE-US.",
    "ja": "<b>Sentry</b> — EU-米国データ転送のための標準契約条項（SCC）付きSentryのDPAの対象です。",
    "zh": "<b>Sentry</b> — 受Sentry的DPA保护，包含EU-US数据传输的标准合同条款（SCC）。",
    "ar": "<b>Sentry</b> — مشمول باتفاقية معالجة البيانات من Sentry مع البنود التعاقدية القياسية (SCCs) لنقل البيانات بين الاتحاد الأوروبي والولايات المتحدة.",
    "uk": "<b>Sentry</b> — охоплюється DPA Sentry зі Стандартними договірними положеннями (SCC) для передач даних ЄС-США.",
}
T["dpaStatus.li4"] = {
    "pl": "<b>Clerk</b> — objęty Umową o przetwarzaniu danych Clerk, zawierającą Standardowe Klauzule Umowne oraz certyfikat EU-US Data Privacy Framework dla transferów międzynarodowych.",
    "de": "<b>Clerk</b> — abgedeckt durch Clerks Auftragsverarbeitungsvereinbarung, einschließlich Standardvertragsklauseln und EU-US Data Privacy Framework-Zertifizierung für internationale Transfers.",
    "es": "<b>Clerk</b> — cubierto por el Acuerdo de Procesamiento de Datos de Clerk, que incorpora Cláusulas Contractuales Estándar y certificación del Marco de Privacidad de Datos UE-EE.UU. para transferencias internacionales.",
    "fr": "<b>Clerk</b> — couvert par l'Accord de Traitement des Données de Clerk, intégrant les Clauses Contractuelles Types et la certification EU-US Data Privacy Framework pour les transferts internationaux.",
    "ja": "<b>Clerk</b> — 国際転送のための標準契約条項およびEU-USデータプライバシーフレームワーク認証を含むClerkのデータ処理契約の対象です。",
    "zh": "<b>Clerk</b> — 受Clerk数据处理协议保护，包含标准合同条款和EU-US数据隐私框架认证用于国际传输。",
    "ar": "<b>Clerk</b> — مشمول باتفاقية معالجة البيانات من Clerk، والتي تتضمن البنود التعاقدية القياسية وشهادة إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة للنقل الدولي.",
    "uk": "<b>Clerk</b> — охоплюється Угодою про обробку даних Clerk, що включає Стандартні договірні положення та сертифікацію EU-US Data Privacy Framework для міжнародних передач.",
}
T["dpaStatus.li5"] = {
    "pl": "<b>RevenueCat</b> — objęty Aneksem o przetwarzaniu danych RevenueCat ze Standardowymi Klauzulami Umownymi. RevenueCat nie otrzymuje surowych danych kart płatniczych; Apple jest akceptantem płatności.",
    "de": "<b>RevenueCat</b> — abgedeckt durch RevenueCats Datenschutznachtrag mit Standardvertragsklauseln. RevenueCat erhält keine Rohkartendaten; Apple ist der Zahlungsabwickler.",
    "es": "<b>RevenueCat</b> — cubierto por el Addendum de Procesamiento de Datos de RevenueCat con Cláusulas Contractuales Estándar. RevenueCat no recibe datos brutos de tarjetas de pago; Apple es el comerciante registrado.",
    "fr": "<b>RevenueCat</b> — couvert par l'Addendum de Traitement des Données de RevenueCat avec des Clauses Contractuelles Types. RevenueCat ne reçoit pas de données brutes de cartes de paiement ; Apple est le commerçant officiel.",
    "ja": "<b>RevenueCat</b> — 標準契約条項付きRevenueCatのデータ処理追加条項の対象です。RevenueCatは生の支払いカードデータを受け取りません。Appleが販売元です。",
    "zh": "<b>RevenueCat</b> — 受RevenueCat数据处理附录保护，包含标准合同条款。RevenueCat不接收原始支付卡数据；Apple是记录商家。",
    "ar": "<b>RevenueCat</b> — مشمول بملحق معالجة البيانات من RevenueCat مع البنود التعاقدية القياسية. لا تتلقى RevenueCat بيانات بطاقات الدفع الخام؛ Apple هي التاجر المسجل.",
    "uk": "<b>RevenueCat</b> — охоплюється Додатком про обробку даних RevenueCat зі Стандартними договірними положеннями. RevenueCat не отримує необроблені дані платіжних карток; Apple є зареєстрованим продавцем.",
}

# ── changes ──────────────────────────────────────────────────────────────────
T["changes.heading"] = {
    "pl": "Zmiany podmiotów przetwarzających",
    "de": "Änderungen der Auftragsverarbeiter",
    "es": "Cambios en los subencargados",
    "fr": "Changements de sous-traitants",
    "ja": "副処理者の変更",
    "zh": "子处理者变更",
    "ar": "تغييرات المعالجين الفرعيين",
    "uk": "Зміни субпроцесорів",
}
T["changes.p1"] = {
    "pl": "Jeśli dodamy lub zmienimy podmiot przetwarzający, który przetwarza dane osobowe, zaktualizujemy tę stronę i odnotujemy zmianę w sekcji Historia wersji niniejszej Polityki prywatności. W przypadku istotnych zmian powiadomimy z co najmniej 30-dniowym wyprzedzeniem przed rozpoczęciem przetwarzania danych przez nowy podmiot.",
    "de": "Wenn wir einen Auftragsverarbeiter hinzufügen oder ändern, der personenbezogene Daten verarbeitet, werden wir diese Seite aktualisieren und die Änderung im Abschnitt Versionshistorie dieser Datenschutzrichtlinie vermerken. Bei wesentlichen Änderungen werden wir mindestens 30 Tage im Voraus informieren, bevor der neue Auftragsverarbeiter mit der Datenverarbeitung beginnt.",
    "es": "Si añadimos o cambiamos un subencargado que procesa datos personales, actualizaremos esta página y registraremos el cambio en la sección Historial de versiones de esta Política de privacidad. Para cambios significativos, proporcionaremos al menos 30 días de aviso previo antes de que el nuevo subencargado comience a procesar datos.",
    "fr": "Si nous ajoutons ou modifions un sous-traitant qui traite des données personnelles, nous mettrons à jour cette page et noterons le changement dans la section Historique des versions de cette Politique de confidentialité. Pour les changements importants, nous fournirons un préavis d'au moins 30 jours avant que le nouveau sous-traitant ne commence à traiter les données.",
    "ja": "個人データを処理する副処理者を追加または変更する場合、このページを更新し、本プライバシーポリシーのバージョン履歴セクションに変更を記載します。重要な変更については、新しい副処理者がデータの処理を開始する前に最低30日前に通知します。",
    "zh": "如果我们添加或更改处理个人数据的子处理者，我们将更新此页面并在本隐私政策的版本历史部分中记录该变更。对于重大变更，我们将在新子处理者开始处理数据之前至少提前30天通知。",
    "ar": "إذا أضفنا أو غيرنا معالجًا فرعيًا يتعامل مع بيانات شخصية، سنقوم بتحديث هذه الصفحة وتسجيل التغيير في قسم سجل الإصدارات في سياسة الخصوصية هذه. بالنسبة للتغييرات الجوهرية، سنقدم إشعارًا قبل 30 يومًا على الأقل من بدء المعالج الفرعي الجديد في معالجة البيانات.",
    "uk": "Якщо ми додамо або змінимо субпроцесора, що обробляє персональні дані, ми оновимо цю сторінку та зазначимо зміну в розділі Історія версій цієї Політики конфіденційності. Для суттєвих змін ми повідомимо щонайменше за 30 днів до того, як новий субпроцесор розпочне обробку даних.",
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
            en_val = get_nested(en_data.get("Privacy", {}).get("subProcessors", {}), keys)
            current_val = get_nested(data.get("Privacy", {}).get("subProcessors", {}), keys)
            if en_val is not None and current_val == en_val:
                set_nested(data["Privacy"]["subProcessors"], keys, locale_translations[locale])
                changes += 1
        if changes > 0:
            save_json(locale, data)
        stats[locale] = changes
        print(f"  {locale}: {changes} keys translated")
    return stats

if __name__ == "__main__":
    print("Story 21.1 — Privacy Policy Translation (Part 5/7)")
    print("Section: subProcessors")
    print("=" * 70)
    apply_translations()
    print("\nPart 5 complete.")

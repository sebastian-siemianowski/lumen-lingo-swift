#!/usr/bin/env python3
"""Epic 10: Add Clerk and RevenueCat sub-processors, confirm PostHog not in use, fix Vercel retention."""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

# ── Story 10.1: Clerk sub-processor ──
CLERK_PROCESSOR = {
    "en": {
        "service": "Clerk, Inc.",
        "purpose": "User authentication and identity management",
        "dataProcessed": "Email address, user identifier, authentication tokens",
        "location": "United States",
        "privacyUrl": "https://clerk.com/legal/privacy",
        "privacyLabel": "Clerk Privacy"
    },
    "pl": {"service": "Clerk, Inc.", "purpose": "Uwierzytelnianie użytkowników i zarządzanie tożsamością", "dataProcessed": "Adres e-mail, identyfikator użytkownika, tokeny uwierzytelniania", "location": "Stany Zjednoczone", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "de": {"service": "Clerk, Inc.", "purpose": "Benutzerauthentifizierung und Identitätsverwaltung", "dataProcessed": "E-Mail-Adresse, Benutzerkennung, Authentifizierungstokens", "location": "Vereinigte Staaten", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "es": {"service": "Clerk, Inc.", "purpose": "Autenticación de usuarios y gestión de identidad", "dataProcessed": "Dirección de correo electrónico, identificador de usuario, tokens de autenticación", "location": "Estados Unidos", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "fr": {"service": "Clerk, Inc.", "purpose": "Authentification des utilisateurs et gestion de l'identité", "dataProcessed": "Adresse e-mail, identifiant utilisateur, jetons d'authentification", "location": "États-Unis", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "ja": {"service": "Clerk, Inc.", "purpose": "ユーザー認証とID管理", "dataProcessed": "メールアドレス、ユーザー識別子、認証トークン", "location": "アメリカ合衆国", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "zh": {"service": "Clerk, Inc.", "purpose": "用户认证和身份管理", "dataProcessed": "电子邮件地址、用户标识符、认证令牌", "location": "美国", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "ar": {"service": "Clerk, Inc.", "purpose": "مصادقة المستخدمين وإدارة الهوية", "dataProcessed": "عنوان البريد الإلكتروني، معرف المستخدم، رموز المصادقة", "location": "الولايات المتحدة", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"},
    "uk": {"service": "Clerk, Inc.", "purpose": "Автентифікація користувачів та управління ідентичністю", "dataProcessed": "Адреса електронної пошти, ідентифікатор користувача, токени автентифікації", "location": "Сполучені Штати", "privacyUrl": "https://clerk.com/legal/privacy", "privacyLabel": "Clerk Privacy"}
}

# ── Story 10.2: RevenueCat sub-processor ──
REVENUECAT_PROCESSOR = {
    "en": {
        "service": "RevenueCat, Inc.",
        "purpose": "Subscription management and entitlement tracking",
        "dataProcessed": "App user ID, subscription status, purchase receipts (via Apple — RevenueCat does not receive raw payment card data)",
        "location": "United States",
        "privacyUrl": "https://www.revenuecat.com/privacy/",
        "privacyLabel": "RevenueCat Privacy"
    },
    "pl": {"service": "RevenueCat, Inc.", "purpose": "Zarządzanie subskrypcjami i śledzenie uprawnień", "dataProcessed": "ID użytkownika aplikacji, status subskrypcji, potwierdzenia zakupu (przez Apple — RevenueCat nie otrzymuje surowych danych kart płatniczych)", "location": "Stany Zjednoczone", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "de": {"service": "RevenueCat, Inc.", "purpose": "Abonnementverwaltung und Berechtigungsverfolgung", "dataProcessed": "App-Benutzer-ID, Abonnementstatus, Kaufbelege (über Apple — RevenueCat erhält keine Rohzahlungskartendaten)", "location": "Vereinigte Staaten", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "es": {"service": "RevenueCat, Inc.", "purpose": "Gestión de suscripciones y seguimiento de derechos", "dataProcessed": "ID de usuario de la app, estado de suscripción, recibos de compra (a través de Apple — RevenueCat no recibe datos de tarjetas de pago sin procesar)", "location": "Estados Unidos", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "fr": {"service": "RevenueCat, Inc.", "purpose": "Gestion des abonnements et suivi des droits", "dataProcessed": "ID utilisateur de l'app, statut d'abonnement, reçus d'achat (via Apple — RevenueCat ne reçoit pas de données brutes de carte de paiement)", "location": "États-Unis", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "ja": {"service": "RevenueCat, Inc.", "purpose": "サブスクリプション管理と権限追跡", "dataProcessed": "アプリユーザーID、サブスクリプションステータス、購入レシート（Apple経由 — RevenueCatは生の支払いカードデータを受け取りません）", "location": "アメリカ合衆国", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "zh": {"service": "RevenueCat, Inc.", "purpose": "订阅管理和权限跟踪", "dataProcessed": "应用用户ID、订阅状态、购买收据（通过Apple — RevenueCat不会收到原始支付卡数据）", "location": "美国", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "ar": {"service": "RevenueCat, Inc.", "purpose": "إدارة الاشتراكات وتتبع الاستحقاقات", "dataProcessed": "معرف مستخدم التطبيق، حالة الاشتراك، إيصالات الشراء (عبر Apple — لا يتلقى RevenueCat بيانات بطاقات الدفع الخام)", "location": "الولايات المتحدة", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"},
    "uk": {"service": "RevenueCat, Inc.", "purpose": "Управління підписками та відстеження прав доступу", "dataProcessed": "ID користувача додатку, статус підписки, квитанції про покупку (через Apple — RevenueCat не отримує необроблені дані платіжних карток)", "location": "Сполучені Штати", "privacyUrl": "https://www.revenuecat.com/privacy/", "privacyLabel": "RevenueCat Privacy"}
}

# ── Story 10.1/10.2: DPA entries ──
CLERK_DPA = {
    "en": "<b>Clerk</b> — covered by Clerk's Data Processing Agreement, incorporating Standard Contractual Clauses and EU-US Data Privacy Framework certification for international transfers.",
    "pl": "<b>Clerk</b> — objęty Umową o przetwarzanie danych Clerk, zawierającą Standardowe klauzule umowne i certyfikację EU-US Data Privacy Framework dla transferów międzynarodowych.",
    "de": "<b>Clerk</b> — abgedeckt durch Clerks Auftragsverarbeitungsvertrag mit Standardvertragsklauseln und EU-US Data Privacy Framework-Zertifizierung.",
    "es": "<b>Clerk</b> — cubierto por el Acuerdo de procesamiento de datos de Clerk, que incorpora Cláusulas Contractuales Estándar y la certificación del Marco de Privacidad de Datos UE-EE.UU.",
    "fr": "<b>Clerk</b> — couvert par l'Accord de traitement des données de Clerk, intégrant les Clauses Contractuelles Types et la certification du Cadre de protection des données UE-US.",
    "ja": "<b>Clerk</b> — Clerkのデータ処理契約でカバーされ、国際移転のための標準契約条項とEU-USデータプライバシーフレームワーク認証を含みます。",
    "zh": "<b>Clerk</b> — 由Clerk的数据处理协议覆盖，包含用于国际传输的标准合同条款和EU-US数据隐私框架认证。",
    "ar": "<b>Clerk</b> — مغطى باتفاقية معالجة البيانات الخاصة بـ Clerk، والتي تتضمن البنود التعاقدية القياسية وشهادة إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة.",
    "uk": "<b>Clerk</b> — покривається Угодою про обробку даних Clerk, яка включає Стандартні договірні положення та сертифікацію EU-US Data Privacy Framework."
}

REVENUECAT_DPA = {
    "en": "<b>RevenueCat</b> — covered by RevenueCat's Data Processing Addendum with Standard Contractual Clauses. RevenueCat does not receive raw payment card data; Apple is the merchant of record.",
    "pl": "<b>RevenueCat</b> — objęty Aneksem o przetwarzanie danych RevenueCat ze Standardowymi klauzulami umownymi. RevenueCat nie otrzymuje surowych danych kart płatniczych; Apple jest podmiotem rejestrującym transakcje.",
    "de": "<b>RevenueCat</b> — abgedeckt durch RevenueCats Auftragsverarbeitungszusatz mit Standardvertragsklauseln. RevenueCat erhält keine Rohzahlungskartendaten; Apple ist der Händler.",
    "es": "<b>RevenueCat</b> — cubierto por el Anexo de procesamiento de datos de RevenueCat con Cláusulas Contractuales Estándar. RevenueCat no recibe datos de tarjetas de pago sin procesar; Apple es el comerciante registrado.",
    "fr": "<b>RevenueCat</b> — couvert par l'Avenant au traitement des données de RevenueCat avec Clauses Contractuelles Types. RevenueCat ne reçoit pas de données brutes de carte de paiement ; Apple est le commerçant enregistré.",
    "ja": "<b>RevenueCat</b> — RevenueCatのデータ処理追加条項（標準契約条項付き）でカバーされます。RevenueCatは生の支払いカードデータを受け取りません。Appleが販売者です。",
    "zh": "<b>RevenueCat</b> — 由RevenueCat的数据处理附录（含标准合同条款）覆盖。RevenueCat不会收到原始支付卡数据；Apple是记录商户。",
    "ar": "<b>RevenueCat</b> — مغطى بملحق معالجة البيانات الخاص بـ RevenueCat مع البنود التعاقدية القياسية. لا يتلقى RevenueCat بيانات بطاقات الدفع الخام؛ Apple هو التاجر المسجل.",
    "uk": "<b>RevenueCat</b> — покривається Додатком про обробку даних RevenueCat зі Стандартними договірними положеннями. RevenueCat не отримує необроблені дані платіжних карток; Apple є зареєстрованим продавцем."
}

# ── Story 10.1/10.2: thirdParty entries ──
CLERK_THIRDPARTY = {
    "en": "<b>Clerk</b> — for user authentication and identity management. Subject to <clerkPrivacy>Clerk's Privacy Policy</clerkPrivacy>.",
    "pl": "<b>Clerk</b> — do uwierzytelniania użytkowników i zarządzania tożsamością. Podlega <clerkPrivacy>Polityce prywatności Clerk</clerkPrivacy>.",
    "de": "<b>Clerk</b> — für Benutzerauthentifizierung und Identitätsverwaltung. Gemäß <clerkPrivacy>Clerks Datenschutzrichtlinie</clerkPrivacy>.",
    "es": "<b>Clerk</b> — para autenticación de usuarios y gestión de identidad. Sujeto a la <clerkPrivacy>Política de privacidad de Clerk</clerkPrivacy>.",
    "fr": "<b>Clerk</b> — pour l'authentification des utilisateurs et la gestion de l'identité. Soumis à la <clerkPrivacy>Politique de confidentialité de Clerk</clerkPrivacy>.",
    "ja": "<b>Clerk</b> — ユーザー認証とID管理用。<clerkPrivacy>Clerkのプライバシーポリシー</clerkPrivacy>に準拠。",
    "zh": "<b>Clerk</b> — 用于用户认证和身份管理。受<clerkPrivacy>Clerk的隐私政策</clerkPrivacy>约束。",
    "ar": "<b>Clerk</b> — لمصادقة المستخدمين وإدارة الهوية. يخضع لـ <clerkPrivacy>سياسة خصوصية Clerk</clerkPrivacy>.",
    "uk": "<b>Clerk</b> — для автентифікації користувачів та управління ідентичністю. Відповідно до <clerkPrivacy>Політики конфіденційності Clerk</clerkPrivacy>."
}

REVENUECAT_THIRDPARTY = {
    "en": "<b>RevenueCat</b> — for subscription management and entitlement tracking. Apple remains the merchant of record for all payments. Subject to <revenueCatPrivacy>RevenueCat's Privacy Policy</revenueCatPrivacy>.",
    "pl": "<b>RevenueCat</b> — do zarządzania subskrypcjami i śledzenia uprawnień. Apple pozostaje podmiotem rejestrującym transakcje dla wszystkich płatności. Podlega <revenueCatPrivacy>Polityce prywatności RevenueCat</revenueCatPrivacy>.",
    "de": "<b>RevenueCat</b> — für Abonnementverwaltung und Berechtigungsverfolgung. Apple bleibt der Händler für alle Zahlungen. Gemäß <revenueCatPrivacy>RevenueCats Datenschutzrichtlinie</revenueCatPrivacy>.",
    "es": "<b>RevenueCat</b> — para gestión de suscripciones y seguimiento de derechos. Apple sigue siendo el comerciante registrado para todos los pagos. Sujeto a la <revenueCatPrivacy>Política de privacidad de RevenueCat</revenueCatPrivacy>.",
    "fr": "<b>RevenueCat</b> — pour la gestion des abonnements et le suivi des droits. Apple reste le commerçant enregistré pour tous les paiements. Soumis à la <revenueCatPrivacy>Politique de confidentialité de RevenueCat</revenueCatPrivacy>.",
    "ja": "<b>RevenueCat</b> — サブスクリプション管理と権限追跡用。Appleがすべての支払いの販売者です。<revenueCatPrivacy>RevenueCatのプライバシーポリシー</revenueCatPrivacy>に準拠。",
    "zh": "<b>RevenueCat</b> — 用于订阅管理和权限跟踪。Apple仍然是所有付款的记录商户。受<revenueCatPrivacy>RevenueCat的隐私政策</revenueCatPrivacy>约束。",
    "ar": "<b>RevenueCat</b> — لإدارة الاشتراكات وتتبع الاستحقاقات. تظل Apple التاجر المسجل لجميع المدفوعات. يخضع لـ <revenueCatPrivacy>سياسة خصوصية RevenueCat</revenueCatPrivacy>.",
    "uk": "<b>RevenueCat</b> — для управління підписками та відстеження прав доступу. Apple залишається зареєстрованим продавцем для всіх платежів. Відповідно до <revenueCatPrivacy>Політики конфіденційності RevenueCat</revenueCatPrivacy>."
}

# ── Story 10.4: Vercel Analytics retention — specify 30 days ──
VERCEL_RETENTION = {
    "en": "<b>Vercel Analytics</b> — aggregated, cookie-free analytics data is retained for 30 days from collection, then automatically purged. No personally identifiable information is stored.",
    "pl": "<b>Vercel Analytics</b> — zagregowane, bezplikowe dane analityczne są przechowywane przez 30 dni od zebrania, a następnie automatycznie usuwane. Nie są przechowywane żadne dane umożliwiające identyfikację osoby.",
    "de": "<b>Vercel Analytics</b> — aggregierte, cookie-freie Analysedaten werden 30 Tage nach der Erfassung aufbewahrt und dann automatisch gelöscht. Es werden keine personenbezogenen Daten gespeichert.",
    "es": "<b>Vercel Analytics</b> — los datos analíticos agregados y sin cookies se conservan durante 30 días desde la recopilación y luego se eliminan automáticamente. No se almacena información de identificación personal.",
    "fr": "<b>Vercel Analytics</b> — les données analytiques agrégées et sans cookies sont conservées pendant 30 jours après la collecte, puis automatiquement supprimées. Aucune donnée personnellement identifiable n'est stockée.",
    "ja": "<b>Vercel Analytics</b> — 集計されたCookieフリーのアナリティクスデータは収集から30日間保持され、その後自動的に削除されます。個人を特定できる情報は保存されません。",
    "zh": "<b>Vercel Analytics</b> — 聚合的无Cookie分析数据自收集之日起保留30天，然后自动清除。不存储任何个人身份信息。",
    "ar": "<b>Vercel Analytics</b> — يتم الاحتفاظ ببيانات التحليلات المجمعة الخالية من ملفات تعريف الارتباط لمدة 30 يوماً من جمعها، ثم حذفها تلقائياً. لا يتم تخزين أي معلومات تعريف شخصية.",
    "uk": "<b>Vercel Analytics</b> — агреговані аналітичні дані без файлів cookie зберігаються протягом 30 днів з моменту збору, потім автоматично видаляються. Жодна особиста інформація не зберігається."
}

# ── Story 10.1/10.2: International transfer entries ──
CLERK_TRANSFER = {
    "en": "<b>Clerk (United States)</b> — authentication data (email address, user identifiers, auth tokens) is processed on Clerk's servers in the United States. These transfers are protected by Clerk's DPA incorporating Standard Contractual Clauses and Clerk's EU-US Data Privacy Framework certification.",
    "pl": "<b>Clerk (Stany Zjednoczone)</b> — dane uwierzytelniania (adres e-mail, identyfikatory użytkownika, tokeny autoryzacji) są przetwarzane na serwerach Clerk w Stanach Zjednoczonych. Transfery te są chronione umową DPA Clerk ze Standardowymi klauzulami umownymi i certyfikacją EU-US Data Privacy Framework.",
    "de": "<b>Clerk (Vereinigte Staaten)</b> — Authentifizierungsdaten (E-Mail-Adresse, Benutzerkennungen, Auth-Tokens) werden auf Clerks Servern in den Vereinigten Staaten verarbeitet. Diese Übertragungen sind durch Clerks DPA mit Standardvertragsklauseln und EU-US Data Privacy Framework-Zertifizierung geschützt.",
    "es": "<b>Clerk (Estados Unidos)</b> — los datos de autenticación (dirección de correo electrónico, identificadores de usuario, tokens de autenticación) se procesan en los servidores de Clerk en Estados Unidos. Estas transferencias están protegidas por el DPA de Clerk con Cláusulas Contractuales Estándar y la certificación del Marco de Privacidad de Datos UE-EE.UU.",
    "fr": "<b>Clerk (États-Unis)</b> — les données d'authentification (adresse e-mail, identifiants utilisateur, jetons d'authentification) sont traitées sur les serveurs de Clerk aux États-Unis. Ces transferts sont protégés par le DPA de Clerk intégrant les Clauses Contractuelles Types et la certification du Cadre de protection des données UE-US.",
    "ja": "<b>Clerk（アメリカ合衆国）</b> — 認証データ（メールアドレス、ユーザー識別子、認証トークン）はアメリカ合衆国のClerkサーバーで処理されます。これらの転送はClerkのDPA（標準契約条項およびEU-USデータプライバシーフレームワーク認証を含む）により保護されています。",
    "zh": "<b>Clerk（美国）</b> — 认证数据（电子邮件地址、用户标识符、认证令牌）在Clerk位于美国的服务器上处理。这些传输受Clerk的DPA（包含标准合同条款和EU-US数据隐私框架认证）保护。",
    "ar": "<b>Clerk (الولايات المتحدة)</b> — تتم معالجة بيانات المصادقة (عنوان البريد الإلكتروني، معرفات المستخدم، رموز المصادقة) على خوادم Clerk في الولايات المتحدة. هذه التحويلات محمية باتفاقية معالجة البيانات الخاصة بـ Clerk مع البنود التعاقدية القياسية.",
    "uk": "<b>Clerk (Сполучені Штати)</b> — дані автентифікації (адреса електронної пошти, ідентифікатори користувачів, токени автентифікації) обробляються на серверах Clerk у Сполучених Штатах. Ці передачі захищені DPA Clerk зі Стандартними договірними положеннями та сертифікацією EU-US Data Privacy Framework."
}

REVENUECAT_TRANSFER = {
    "en": "<b>RevenueCat (United States)</b> — subscription management data (app user ID, subscription status, Apple purchase receipts) is processed on RevenueCat's servers in the United States. These transfers are protected by RevenueCat's Data Processing Addendum with Standard Contractual Clauses.",
    "pl": "<b>RevenueCat (Stany Zjednoczone)</b> — dane zarządzania subskrypcjami (ID użytkownika aplikacji, status subskrypcji, potwierdzenia zakupu Apple) są przetwarzane na serwerach RevenueCat w Stanach Zjednoczonych. Transfery te są chronione Aneksem o przetwarzanie danych RevenueCat ze Standardowymi klauzulami umownymi.",
    "de": "<b>RevenueCat (Vereinigte Staaten)</b> — Abonnementverwaltungsdaten (App-Benutzer-ID, Abonnementstatus, Apple-Kaufbelege) werden auf RevenueCats Servern in den Vereinigten Staaten verarbeitet. Diese Übertragungen sind durch RevenueCats Auftragsverarbeitungszusatz mit Standardvertragsklauseln geschützt.",
    "es": "<b>RevenueCat (Estados Unidos)</b> — los datos de gestión de suscripciones (ID de usuario de la app, estado de suscripción, recibos de compra de Apple) se procesan en los servidores de RevenueCat en Estados Unidos. Estas transferencias están protegidas por el Anexo de procesamiento de datos de RevenueCat con Cláusulas Contractuales Estándar.",
    "fr": "<b>RevenueCat (États-Unis)</b> — les données de gestion des abonnements (ID utilisateur de l'app, statut d'abonnement, reçus d'achat Apple) sont traitées sur les serveurs de RevenueCat aux États-Unis. Ces transferts sont protégés par l'Avenant au traitement des données de RevenueCat avec Clauses Contractuelles Types.",
    "ja": "<b>RevenueCat（アメリカ合衆国）</b> — サブスクリプション管理データ（アプリユーザーID、サブスクリプションステータス、Apple購入レシート）はアメリカ合衆国のRevenueCatサーバーで処理されます。これらの転送はRevenueCatのデータ処理追加条項（標準契約条項付き）により保護されています。",
    "zh": "<b>RevenueCat（美国）</b> — 订阅管理数据（应用用户ID、订阅状态、Apple购买收据）在RevenueCat位于美国的服务器上处理。这些传输受RevenueCat的数据处理附录（含标准合同条款）保护。",
    "ar": "<b>RevenueCat (الولايات المتحدة)</b> — تتم معالجة بيانات إدارة الاشتراكات (معرف مستخدم التطبيق، حالة الاشتراك، إيصالات شراء Apple) على خوادم RevenueCat في الولايات المتحدة. هذه التحويلات محمية بملحق معالجة البيانات الخاص بـ RevenueCat مع البنود التعاقدية القياسية.",
    "uk": "<b>RevenueCat (Сполучені Штати)</b> — дані управління підписками (ID користувача додатку, статус підписки, квитанції про покупку Apple) обробляються на серверах RevenueCat у Сполучених Штатах. Ці передачі захищені Додатком про обробку даних RevenueCat зі Стандартними договірними положеннями."
}


def process_all():
    for locale in LOCALES:
        fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)

        privacy = data['Privacy']
        changes = []

        # 10.1: Add Clerk to subProcessors.processors
        processors = privacy['subProcessors']['processors']
        if 'clerk' not in processors:
            processors['clerk'] = CLERK_PROCESSOR[locale]
            changes.append('clerk processor')

        # 10.2: Add RevenueCat to subProcessors.processors
        if 'revenueCat' not in processors:
            processors['revenueCat'] = REVENUECAT_PROCESSOR[locale]
            changes.append('revenueCat processor')

        # 10.1: Add Clerk DPA
        dpa = privacy['subProcessors']['dpaStatus']
        if 'li4' not in dpa:
            dpa['li4'] = CLERK_DPA[locale]
            changes.append('clerk DPA')

        # 10.2: Add RevenueCat DPA
        if 'li5' not in dpa:
            dpa['li5'] = REVENUECAT_DPA[locale]
            changes.append('revenueCat DPA')

        # 10.1: Add Clerk to thirdParty
        tp = privacy['thirdParty']
        if 'li4' not in tp:
            tp['li4'] = CLERK_THIRDPARTY[locale]
            changes.append('clerk thirdParty')

        # 10.2: Add RevenueCat to thirdParty
        if 'li5' not in tp:
            tp['li5'] = REVENUECAT_THIRDPARTY[locale]
            changes.append('revenueCat thirdParty')

        # 10.1: Add Clerk to internationalTransfers
        it = privacy['internationalTransfers']
        if 'li4' not in it:
            it['li4'] = CLERK_TRANSFER[locale]
            changes.append('clerk transfer')

        # 10.2: Add RevenueCat to internationalTransfers
        if 'li5' not in it:
            it['li5'] = REVENUECAT_TRANSFER[locale]
            changes.append('revenueCat transfer')

        # 10.4: Fix Vercel Analytics retention — replace vague text with specific 30-day period
        dr = privacy['dataRetention']
        if 'websiteLi4' in dr and "Vercel's data retention policy" in dr['websiteLi4']:
            dr['websiteLi4'] = VERCEL_RETENTION[locale]
            changes.append('vercel retention fixed')

        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')

        print(f'{locale}.json: {", ".join(changes) if changes else "nothing new"}')


process_all()

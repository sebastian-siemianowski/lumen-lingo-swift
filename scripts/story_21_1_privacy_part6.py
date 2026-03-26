#!/usr/bin/env python3
"""Story 21.1 — Privacy translations Part 6/7.

Sections: internationalTransfers, aggregateData.
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

# ── internationalTransfers ────────────────────────────────────────────────────
T["internationalTransfers.heading"] = {
    "pl": "Międzynarodowe transfery danych",
    "de": "Internationale Datenübermittlungen",
    "es": "Transferencias internacionales de datos",
    "fr": "Transferts internationaux de données",
    "ja": "国際データ転送",
    "zh": "国际数据传输",
    "ar": "نقل البيانات الدولي",
    "uk": "Міжнародні передачі даних",
}
T["internationalTransfers.intro"] = {
    "pl": "Lumenshore Limited ma siedzibę w Wielkiej Brytanii. Niektóre z Twoich danych mogą być przekazywane do i przetwarzane w krajach poza Wielką Brytanią i Europejskim Obszarem Gospodarczym (EOG). Oto, gdzie każda usługa przetwarza dane oraz mechanizm prawny chroniący transfer:",
    "de": "Lumenshore Limited hat seinen Sitz im Vereinigten Königreich. Einige Ihrer Daten können in Länder außerhalb des Vereinigten Königreichs und des Europäischen Wirtschaftsraums (EWR) übertragen und dort verarbeitet werden. Hier erfahren Sie, wo jeder Dienst Daten verarbeitet und welcher Rechtsmechanismus die Übertragung schützt:",
    "es": "Lumenshore Limited tiene su sede en el Reino Unido. Algunos de sus datos pueden transferirse y procesarse en países fuera del Reino Unido y del Espacio Económico Europeo (EEE). Aquí se indica dónde cada servicio procesa datos y el mecanismo legal que protege la transferencia:",
    "fr": "Lumenshore Limited est basée au Royaume-Uni. Certaines de vos données peuvent être transférées et traitées dans des pays en dehors du Royaume-Uni et de l'Espace économique européen (EEE). Voici où chaque service traite les données et le mécanisme juridique qui protège le transfert :",
    "ja": "Lumenshore Limitedは英国を拠点としています。お客様のデータの一部は、英国および欧州経済領域（EEA）外の国に転送され処理される場合があります。各サービスがデータを処理する場所と、転送を保護する法的メカニズムは以下の通りです：",
    "zh": "Lumenshore Limited位于英国。您的部分数据可能会被传输到英国和欧洲经济区（EEA）以外的国家进行处理。以下是每项服务处理数据的位置以及保护传输的法律机制：",
    "ar": "يقع مقر Lumenshore Limited في المملكة المتحدة. قد يتم نقل بعض بياناتك إلى دول خارج المملكة المتحدة والمنطقة الاقتصادية الأوروبية (EEA) ومعالجتها فيها. فيما يلي مكان معالجة كل خدمة للبيانات والآلية القانونية التي تحمي النقل:",
    "uk": "Lumenshore Limited знаходиться у Великобританії. Деякі ваші дані можуть передаватися та оброблятися в країнах за межами Великобританії та Європейської економічної зони (ЄЕЗ). Ось де кожен сервіс обробляє дані та правовий механізм, що захищає передачу:",
}
T["internationalTransfers.li1"] = {
    "pl": "<b>Apple (Stany Zjednoczone i globalnie)</b> — dane iCloud i dane subskrypcji App Store mogą być przetwarzane w globalnych centrach danych Apple, w tym w Stanach Zjednoczonych. Apple uczestniczy w transferach na podstawie Standardowych Klauzul Umownych (SCC) oraz EU-US Data Privacy Framework.",
    "de": "<b>Apple (Vereinigte Staaten & global)</b> — iCloud-Daten und App-Store-Abonnementdaten können in Apples globalen Rechenzentren verarbeitet werden, einschließlich in den Vereinigten Staaten. Apple nimmt an Übermittlungen auf Grundlage von Standardvertragsklauseln (SCCs) und dem EU-US Data Privacy Framework teil.",
    "es": "<b>Apple (Estados Unidos y global)</b> — los datos de iCloud y los datos de suscripción del App Store pueden procesarse en los centros de datos globales de Apple, incluido en Estados Unidos. Apple participa en transferencias bajo Cláusulas Contractuales Estándar (CEC) y el Marco de Privacidad de Datos UE-EE.UU.",
    "fr": "<b>Apple (États-Unis et mondial)</b> — les données iCloud et les données d'abonnement App Store peuvent être traitées dans les centres de données mondiaux d'Apple, y compris aux États-Unis. Apple participe aux transferts en vertu des Clauses Contractuelles Types (CCT) et du EU-US Data Privacy Framework.",
    "ja": "<b>Apple（米国およびグローバル）</b> — iCloudデータとApp Storeサブスクリプションデータは、米国を含むAppleのグローバルデータセンターで処理される場合があります。Appleは標準契約条項（SCC）およびEU-USデータプライバシーフレームワークに基づいて転送に参加しています。",
    "zh": "<b>Apple（美国和全球）</b> — iCloud数据和App Store订阅数据可能在Apple的全球数据中心（包括美国）进行处理。Apple根据标准合同条款（SCC）和EU-US数据隐私框架参与传输。",
    "ar": "<b>Apple (الولايات المتحدة وعالميًا)</b> — قد تتم معالجة بيانات iCloud وبيانات اشتراك App Store في مراكز بيانات Apple العالمية، بما في ذلك في الولايات المتحدة. تشارك Apple في النقل بموجب البنود التعاقدية القياسية (SCCs) وإطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة.",
    "uk": "<b>Apple (Сполучені Штати та глобально)</b> — дані iCloud та дані підписки App Store можуть оброблятися у глобальних дата-центрах Apple, включаючи Сполучені Штати. Apple бере участь у передачах згідно зі Стандартними договірними положеннями (SCC) та EU-US Data Privacy Framework.",
}
T["internationalTransfers.li2"] = {
    "pl": "<b>Vercel (Stany Zjednoczone i globalne węzły edge)</b> — nasza strona internetowa jest obsługiwana z sieci edge Vercel, z głównymi serwerami w Stanach Zjednoczonych. Vercel Analytics nie przetwarza danych osobowych. Dane hostingu strony są chronione na podstawie DPA Vercel zgodnej z RODO ze Standardowymi Klauzulami Umownymi.",
    "de": "<b>Vercel (Vereinigte Staaten & globale Edge-Knoten)</b> — unsere Website wird über Vercels Edge-Netzwerk bereitgestellt, mit primären Servern in den Vereinigten Staaten. Vercel Analytics verarbeitet keine personenbezogenen Daten. Website-Hosting-Daten sind durch Vercels DSGVO-AVV mit Standardvertragsklauseln geschützt.",
    "es": "<b>Vercel (Estados Unidos y edge global)</b> — nuestro sitio web se sirve desde la red edge de Vercel, con servidores principales en Estados Unidos. Vercel Analytics no procesa datos personales. Los datos de alojamiento web están protegidos bajo el DPA de Vercel conforme al RGPD con Cláusulas Contractuales Estándar.",
    "fr": "<b>Vercel (États-Unis et edge mondial)</b> — notre site web est servi depuis le réseau edge de Vercel, avec des serveurs principaux aux États-Unis. Vercel Analytics ne traite aucune donnée personnelle. Les données d'hébergement web sont protégées par le DPA RGPD de Vercel avec des Clauses Contractuelles Types.",
    "ja": "<b>Vercel（米国およびグローバルエッジ）</b> — 当ウェブサイトはVercelのエッジネットワークから配信され、主要サーバーは米国にあります。Vercel Analyticsは個人データを処理しません。ウェブサイトホスティングデータは、標準契約条項付きのVercelのGDPR DPAで保護されています。",
    "zh": "<b>Vercel（美国和全球边缘）</b> — 我们的网站通过Vercel的边缘网络提供服务，主要服务器位于美国。Vercel Analytics不处理个人数据。网站托管数据受Vercel的GDPR DPA及标准合同条款保护。",
    "ar": "<b>Vercel (الولايات المتحدة وحافة عالمية)</b> — يتم تقديم موقعنا من شبكة Vercel الحافة، مع خوادم رئيسية في الولايات المتحدة. لا يعالج Vercel Analytics بيانات شخصية. بيانات استضافة الموقع محمية بموجب اتفاقية معالجة بيانات Vercel المتوافقة مع GDPR مع البنود التعاقدية القياسية.",
    "uk": "<b>Vercel (Сполучені Штати та глобальний edge)</b> — наш веб-сайт обслуговується з edge-мережі Vercel, з основними серверами у Сполучених Штатах. Vercel Analytics не обробляє персональні дані. Дані хостингу сайту захищені DPA Vercel відповідно до GDPR зі Стандартними договірними положеннями.",
}
T["internationalTransfers.li3"] = {
    "pl": "<b>Sentry (Stany Zjednoczone)</b> — logi błędów i dane nagrań sesji (za Twoją zgodą) są przesyłane na serwery Sentry w Stanach Zjednoczonych. Transfery te są chronione DPA Sentry zawierającą Standardowe Klauzule Umowne (SCC).",
    "de": "<b>Sentry (Vereinigte Staaten)</b> — Fehlerprotokolle und Sitzungsaufzeichnungsdaten (mit Ihrer Zustimmung) werden an Sentrys Server in den Vereinigten Staaten übermittelt. Diese Übertragungen sind durch Sentrys AVV mit Standardvertragsklauseln (SCCs) geschützt.",
    "es": "<b>Sentry (Estados Unidos)</b> — los registros de errores y los datos de reproducción de sesiones (con su consentimiento) se transmiten a los servidores de Sentry en Estados Unidos. Estas transferencias están protegidas por el DPA de Sentry que incorpora Cláusulas Contractuales Estándar (CEC).",
    "fr": "<b>Sentry (États-Unis)</b> — les journaux d'erreurs et les données de replay de session (avec votre consentement) sont transmis aux serveurs de Sentry aux États-Unis. Ces transferts sont protégés par le DPA de Sentry intégrant des Clauses Contractuelles Types (CCT).",
    "ja": "<b>Sentry（米国）</b> — エラーログとセッションリプレイデータ（お客様の同意を得た場合）は、米国のSentryサーバーに送信されます。これらの転送は、標準契約条項（SCC）を含むSentryのDPAにより保護されています。",
    "zh": "<b>Sentry（美国）</b> — 错误日志和会话回放数据（经您同意后）被传输到位于美国的Sentry服务器。这些传输受Sentry包含标准合同条款（SCC）的DPA保护。",
    "ar": "<b>Sentry (الولايات المتحدة)</b> — يتم نقل سجلات الأخطاء وبيانات إعادة تشغيل الجلسات (بموافقتك) إلى خوادم Sentry في الولايات المتحدة. هذه التحويلات محمية باتفاقية معالجة بيانات Sentry التي تتضمن البنود التعاقدية القياسية (SCCs).",
    "uk": "<b>Sentry (Сполучені Штати)</b> — журнали помилок та дані записів сесій (за вашою згодою) передаються на сервери Sentry у Сполучених Штатах. Ці передачі захищені DPA Sentry зі Стандартними договірними положеннями (SCC).",
}
T["internationalTransfers.li4"] = {
    "pl": "<b>Clerk (Stany Zjednoczone)</b> — dane uwierzytelniania (adres e-mail, identyfikatory użytkowników, tokeny uwierzytelniania) są przetwarzane na serwerach Clerk w Stanach Zjednoczonych. Transfery te są chronione DPA Clerk zawierającą Standardowe Klauzule Umowne oraz certyfikat EU-US Data Privacy Framework.",
    "de": "<b>Clerk (Vereinigte Staaten)</b> — Authentifizierungsdaten (E-Mail-Adresse, Benutzer-IDs, Auth-Token) werden auf Clerks Servern in den Vereinigten Staaten verarbeitet. Diese Übertragungen sind durch Clerks AVV mit Standardvertragsklauseln und Clerks EU-US Data Privacy Framework-Zertifizierung geschützt.",
    "es": "<b>Clerk (Estados Unidos)</b> — los datos de autenticación (dirección de correo electrónico, identificadores de usuario, tokens de autenticación) se procesan en los servidores de Clerk en Estados Unidos. Estas transferencias están protegidas por el DPA de Clerk que incorpora Cláusulas Contractuales Estándar y la certificación del Marco de Privacidad de Datos UE-EE.UU. de Clerk.",
    "fr": "<b>Clerk (États-Unis)</b> — les données d'authentification (adresse e-mail, identifiants utilisateur, jetons d'authentification) sont traitées sur les serveurs de Clerk aux États-Unis. Ces transferts sont protégés par le DPA de Clerk intégrant les Clauses Contractuelles Types et la certification EU-US Data Privacy Framework de Clerk.",
    "ja": "<b>Clerk（米国）</b> — 認証データ（メールアドレス、ユーザーID、認証トークン）は米国のClerkサーバーで処理されます。これらの転送は、標準契約条項およびClerkのEU-USデータプライバシーフレームワーク認証を含むClerkのDPAにより保護されています。",
    "zh": "<b>Clerk（美国）</b> — 身份验证数据（电子邮件地址、用户标识符、认证令牌）在位于美国的Clerk服务器上处理。这些传输受Clerk包含标准合同条款和EU-US数据隐私框架认证的DPA保护。",
    "ar": "<b>Clerk (الولايات المتحدة)</b> — تتم معالجة بيانات المصادقة (عنوان البريد الإلكتروني، معرفات المستخدمين، رموز المصادقة) على خوادم Clerk في الولايات المتحدة. هذه التحويلات محمية باتفاقية معالجة بيانات Clerk التي تتضمن البنود التعاقدية القياسية وشهادة إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة.",
    "uk": "<b>Clerk (Сполучені Штати)</b> — дані автентифікації (адреса електронної пошти, ідентифікатори користувачів, токени автентифікації) обробляються на серверах Clerk у Сполучених Штатах. Ці передачі захищені DPA Clerk зі Стандартними договірними положеннями та сертифікацією Clerk EU-US Data Privacy Framework.",
}
T["internationalTransfers.li5"] = {
    "pl": "<b>RevenueCat (Stany Zjednoczone)</b> — dane zarządzania subskrypcjami (identyfikator użytkownika aplikacji, status subskrypcji, potwierdzenia zakupu Apple) są przetwarzane na serwerach RevenueCat w Stanach Zjednoczonych. Transfery te są chronione Aneksem o przetwarzaniu danych RevenueCat ze Standardowymi Klauzulami Umownymi.",
    "de": "<b>RevenueCat (Vereinigte Staaten)</b> — Abonnementverwaltungsdaten (App-Benutzer-ID, Abonnementstatus, Apple-Kaufbelege) werden auf RevenueCats Servern in den Vereinigten Staaten verarbeitet. Diese Übertragungen sind durch RevenueCats Datenschutznachtrag mit Standardvertragsklauseln geschützt.",
    "es": "<b>RevenueCat (Estados Unidos)</b> — los datos de gestión de suscripciones (ID de usuario de la aplicación, estado de suscripción, recibos de compra de Apple) se procesan en los servidores de RevenueCat en Estados Unidos. Estas transferencias están protegidas por el Addendum de Procesamiento de Datos de RevenueCat con Cláusulas Contractuales Estándar.",
    "fr": "<b>RevenueCat (États-Unis)</b> — les données de gestion des abonnements (identifiant utilisateur de l'application, statut de l'abonnement, reçus d'achat Apple) sont traitées sur les serveurs de RevenueCat aux États-Unis. Ces transferts sont protégés par l'Addendum de Traitement des Données de RevenueCat avec des Clauses Contractuelles Types.",
    "ja": "<b>RevenueCat（米国）</b> — サブスクリプション管理データ（アプリユーザーID、サブスクリプションステータス、Apple購入レシート）は米国のRevenueCatサーバーで処理されます。これらの転送は、標準契約条項付きRevenueCatのデータ処理追加条項により保護されています。",
    "zh": "<b>RevenueCat（美国）</b> — 订阅管理数据（应用用户ID、订阅状态、Apple购买收据）在位于美国的RevenueCat服务器上处理。这些传输受RevenueCat包含标准合同条款的数据处理附录保护。",
    "ar": "<b>RevenueCat (الولايات المتحدة)</b> — تتم معالجة بيانات إدارة الاشتراكات (معرف مستخدم التطبيق، حالة الاشتراك، إيصالات شراء Apple) على خوادم RevenueCat في الولايات المتحدة. هذه التحويلات محمية بملحق معالجة البيانات من RevenueCat مع البنود التعاقدية القياسية.",
    "uk": "<b>RevenueCat (Сполучені Штати)</b> — дані управління підписками (ідентифікатор користувача додатку, статус підписки, квитанції про покупку Apple) обробляються на серверах RevenueCat у Сполучених Штатах. Ці передачі захищені Додатком про обробку даних RevenueCat зі Стандартними договірними положеннями.",
}
T["internationalTransfers.safeguards.heading"] = {
    "pl": "Zabezpieczenia transferu",
    "de": "Transferschutzmaßnahmen",
    "es": "Salvaguardias de transferencia",
    "fr": "Garanties de transfert",
    "ja": "転送保護措置",
    "zh": "传输保障措施",
    "ar": "ضمانات النقل",
    "uk": "Гарантії передачі",
}
T["internationalTransfers.safeguards.intro"] = {
    "pl": "W przypadku wszystkich międzynarodowych transferów danych zapewniamy co najmniej jedno z następujących zabezpieczeń:",
    "de": "Für alle internationalen Datenübermittlungen stellen wir sicher, dass mindestens eine der folgenden Schutzmaßnahmen vorhanden ist:",
    "es": "Para todas las transferencias internacionales de datos, garantizamos que al menos una de las siguientes salvaguardias esté vigente:",
    "fr": "Pour tous les transferts internationaux de données, nous veillons à ce qu'au moins l'une des garanties suivantes soit en place :",
    "ja": "すべての国際データ転送について、以下の保護措置のうち少なくとも1つを確保しています：",
    "zh": "对于所有国际数据传输，我们确保至少有以下一项保障措施：",
    "ar": "لجميع عمليات نقل البيانات الدولية، نضمن وجود واحدة على الأقل من الضمانات التالية:",
    "uk": "Для всіх міжнародних передач даних ми забезпечуємо принаймні одну з наступних гарантій:",
}
T["internationalTransfers.safeguards.li1"] = {
    "pl": "<b>Standardowe Klauzule Umowne (SCC)</b> — zatwierdzone przez Komisję Europejską klauzule umowne zobowiązujące importera danych do ochrony danych zgodnie ze standardami RODO.",
    "de": "<b>Standardvertragsklauseln (SCCs)</b> — von der EU-Kommission genehmigte Vertragsklauseln, die den Datenimporteur verpflichten, Ihre Daten gemäß DSGVO-Standards zu schützen.",
    "es": "<b>Cláusulas Contractuales Estándar (CEC)</b> — cláusulas contractuales aprobadas por la Comisión Europea que obligan al importador de datos a proteger sus datos según los estándares del RGPD.",
    "fr": "<b>Clauses Contractuelles Types (CCT)</b> — clauses contractuelles approuvées par la Commission européenne qui obligent l'importateur de données à protéger vos données selon les normes du RGPD.",
    "ja": "<b>標準契約条項（SCC）</b> — EU委員会が承認した契約条項で、データインポーターにGDPR基準でのデータ保護を義務付けます。",
    "zh": "<b>标准合同条款（SCC）</b> — 经欧盟委员会批准的合同条款，要求数据接收方按GDPR标准保护您的数据。",
    "ar": "<b>البنود التعاقدية القياسية (SCCs)</b> — بنود تعاقدية معتمدة من المفوضية الأوروبية تُلزم مستورد البيانات بحماية بياناتك وفقًا لمعايير GDPR.",
    "uk": "<b>Стандартні договірні положення (SCC)</b> — затверджені Європейською комісією договірні положення, що зобов'язують імпортера даних захищати ваші дані відповідно до стандартів GDPR.",
}
T["internationalTransfers.safeguards.li2"] = {
    "pl": "<b>EU-US Data Privacy Framework</b> — w przypadku gdy odbiorca jest certyfikowany w ramach tego programu, co stanowi podstawę adekwatności dla transferów do USA.",
    "de": "<b>EU-US Data Privacy Framework</b> — wenn der Empfänger im Rahmen des Frameworks zertifiziert ist, was eine Angemessenheitsgrundlage für Übermittlungen in die USA bietet.",
    "es": "<b>Marco de Privacidad de Datos UE-EE.UU.</b> — cuando el destinatario está certificado bajo el marco, proporcionando una base de adecuación para las transferencias a EE.UU.",
    "fr": "<b>EU-US Data Privacy Framework</b> — lorsque le destinataire est certifié dans le cadre du framework, fournissant une base d'adéquation pour les transferts vers les États-Unis.",
    "ja": "<b>EU-USデータプライバシーフレームワーク</b> — 受領者がフレームワークの認証を受けている場合、米国への転送の十分性の根拠を提供します。",
    "zh": "<b>EU-US数据隐私框架</b> — 当接收方获得该框架认证时，为向美国传输提供充分性基础。",
    "ar": "<b>إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة</b> — عندما يكون المستلم معتمدًا بموجب الإطار، مما يوفر أساس كفاية للنقل إلى الولايات المتحدة.",
    "uk": "<b>EU-US Data Privacy Framework</b> — якщо отримувач сертифікований за цим фреймворком, що забезпечує основу адекватності для передач до США.",
}
T["internationalTransfers.safeguards.li3"] = {
    "pl": "<b>UK International Data Transfer Agreement (IDTA)</b> — brytyjski odpowiednik SCC, zatwierdzony przez ICO dla transferów z Wielkiej Brytanii.",
    "de": "<b>UK International Data Transfer Agreement (IDTA)</b> — das britische Äquivalent zu SCCs, vom ICO für Übermittlungen aus dem Vereinigten Königreich genehmigt.",
    "es": "<b>UK International Data Transfer Agreement (IDTA)</b> — el equivalente británico de las CEC, aprobado por la ICO para transferencias desde el Reino Unido.",
    "fr": "<b>UK International Data Transfer Agreement (IDTA)</b> — l'équivalent britannique des CCT, approuvé par l'ICO pour les transferts depuis le Royaume-Uni.",
    "ja": "<b>UK International Data Transfer Agreement (IDTA)</b> — SCCの英国版で、英国からの転送についてICOが承認しています。",
    "zh": "<b>英国国际数据传输协议（IDTA）</b> — SCC的英国等效协议，由ICO批准用于从英国的传输。",
    "ar": "<b>اتفاقية نقل البيانات الدولية في المملكة المتحدة (IDTA)</b> — المكافئ البريطاني لـ SCCs، المعتمد من ICO للنقل من المملكة المتحدة.",
    "uk": "<b>UK International Data Transfer Agreement (IDTA)</b> — британський еквівалент SCC, затверджений ICO для передач із Великобританії.",
}
T["internationalTransfers.safeguards.li4"] = {
    "pl": "<b>Decyzje o adekwatności</b> — w przypadku gdy Komisja Europejska lub rząd Wielkiej Brytanii stwierdził, że kraj docelowy zapewnia odpowiedni poziom ochrony danych.",
    "de": "<b>Angemessenheitsbeschlüsse</b> — wenn die Europäische Kommission oder die britische Regierung festgestellt hat, dass das Zielland ein angemessenes Datenschutzniveau bietet.",
    "es": "<b>Decisiones de adecuación</b> — cuando la Comisión Europea o el Gobierno del Reino Unido ha determinado que el país de destino proporciona una protección de datos adecuada.",
    "fr": "<b>Décisions d'adéquation</b> — lorsque la Commission européenne ou le gouvernement britannique a déterminé que le pays de destination offre une protection adéquate des données.",
    "ja": "<b>十分性認定</b> — 欧州委員会または英国政府が、転送先の国が十分なデータ保護を提供すると判断した場合。",
    "zh": "<b>充分性决定</b> — 当欧盟委员会或英国政府认定目的地国家提供充分的数据保护时。",
    "ar": "<b>قرارات الكفاية</b> — عندما تقرر المفوضية الأوروبية أو حكومة المملكة المتحدة أن بلد المقصد يوفر حماية كافية للبيانات.",
    "uk": "<b>Рішення про адекватність</b> — якщо Європейська комісія або уряд Великобританії визначив, що країна призначення забезпечує належний захист даних.",
}
T["internationalTransfers.p1"] = {
    "pl": "Możesz poprosić o kopię odpowiednich zabezpieczeń transferu, kontaktując się z nami pod adresem legal@lumenlingo.com.",
    "de": "Sie können eine Kopie der relevanten Transferschutzmaßnahmen anfordern, indem Sie uns unter legal@lumenlingo.com kontaktieren.",
    "es": "Puede solicitar una copia de las salvaguardias de transferencia pertinentes contactándonos en legal@lumenlingo.com.",
    "fr": "Vous pouvez demander une copie des garanties de transfert pertinentes en nous contactant à legal@lumenlingo.com.",
    "ja": "関連する転送保護措置のコピーをご希望の場合は、legal@lumenlingo.comまでお問い合わせください。",
    "zh": "您可以通过联系legal@lumenlingo.com索取相关传输保障措施的副本。",
    "ar": "يمكنك طلب نسخة من ضمانات النقل ذات الصلة عن طريق التواصل معنا على legal@lumenlingo.com.",
    "uk": "Ви можете запросити копію відповідних гарантій передачі, зв'язавшись з нами за адресою legal@lumenlingo.com.",
}

# ── aggregateData ─────────────────────────────────────────────────────────────
T["aggregateData.heading"] = {
    "pl": "Dane zagregowane i zanonimizowane",
    "de": "Aggregierte und de-identifizierte Daten",
    "es": "Datos agregados y desidentificados",
    "fr": "Données agrégées et dé-identifiées",
    "ja": "集約データおよび非識別化データ",
    "zh": "聚合和去标识化数据",
    "ar": "البيانات المجمعة ومجهولة الهوية",
    "uk": "Агреговані та знеособлені дані",
}
T["aggregateData.p1"] = {
    "pl": "Możemy zbierać, agregować i anonimizować dane osobowe w taki sposób, aby nie pozwalały one na identyfikację jakiejkolwiek osoby. Po zanonimizowaniu dane te nie są już uważane za dane osobowe zgodnie z obowiązującymi przepisami o ochronie danych.",
    "de": "Wir können personenbezogene Daten erfassen, aggregieren und de-identifizieren, so dass sie keine einzelne Person mehr identifizieren können. Nach der De-Identifizierung gelten diese Daten nicht mehr als personenbezogene Daten im Sinne der geltenden Datenschutzgesetze.",
    "es": "Podemos recopilar, agregar y desidentificar datos personales de modo que ya no puedan identificar razonablemente a ningún individuo. Una vez desidentificados, estos datos dejan de considerarse datos personales según las leyes de protección de datos aplicables.",
    "fr": "Nous pouvons collecter, agréger et dé-identifier les données personnelles de sorte qu'elles ne puissent plus raisonnablement identifier un individu. Une fois dé-identifiées, ces données ne sont plus considérées comme des données personnelles au regard des lois applicables sur la protection des données.",
    "ja": "当社は個人データを収集、集約、非識別化し、個人を特定できないようにする場合があります。非識別化された後、そのデータは適用されるデータ保護法の下で個人データとは見なされません。",
    "zh": "我们可能会收集、聚合和去标识化个人数据，使其不再能合理地识别任何个人。去标识化后，这些数据在适用的数据保护法下不再被视为个人数据。",
    "ar": "قد نقوم بجمع وتجميع وإلغاء تحديد هوية البيانات الشخصية بحيث لا يمكنها بشكل معقول تحديد هوية أي فرد. بعد إلغاء تحديد الهوية، لا تعتبر هذه البيانات بيانات شخصية بموجب قوانين حماية البيانات المعمول بها.",
    "uk": "Ми можемо збирати, агрегувати та знеособлювати персональні дані таким чином, щоб вони більше не дозволяли ідентифікувати будь-яку особу. Після знеособлення ці дані більше не вважаються персональними даними згідно з чинним законодавством про захист даних.",
}
T["aggregateData.p2"] = {
    "pl": "Możemy wykorzystywać, ujawniać i publikować zanonimizowane i zagregowane dane w dowolnym celu, w tym między innymi:",
    "de": "Wir können de-identifizierte und aggregierte Daten für jeden Zweck verwenden, offenlegen und veröffentlichen, einschließlich, aber nicht beschränkt auf:",
    "es": "Podemos utilizar, divulgar y publicar datos desidentificados y agregados para cualquier propósito, incluyendo pero no limitándose a:",
    "fr": "Nous pouvons utiliser, divulguer et publier des données dé-identifiées et agrégées à toute fin, y compris mais sans s'y limiter :",
    "ja": "当社は、以下を含むがこれに限定されない目的で、非識別化および集約データを使用、開示、公開する場合があります：",
    "zh": "我们可能出于任何目的使用、披露和发布去标识化和聚合数据，包括但不限于：",
    "ar": "يجوز لنا استخدام والإفصاح عن ونشر البيانات مجهولة الهوية والمجمعة لأي غرض، بما في ذلك على سبيل المثال لا الحصر:",
    "uk": "Ми можемо використовувати, розкривати та публікувати знеособлені та агреговані дані для будь-яких цілей, включаючи, але не обмежуючись:",
}
T["aggregateData.li1"] = {
    "pl": "Ulepszanie produktu i rozwijanie funkcji",
    "de": "Produktverbesserung und Funktionsentwicklung",
    "es": "Mejora del producto y desarrollo de funciones",
    "fr": "Amélioration du produit et développement de fonctionnalités",
    "ja": "製品改善と機能開発",
    "zh": "产品改进和功能开发",
    "ar": "تحسين المنتج وتطوير الميزات",
    "uk": "Покращення продукту та розробка функцій",
}
T["aggregateData.li2"] = {
    "pl": "Badania i analityka",
    "de": "Forschung und Analytik",
    "es": "Investigación y análisis",
    "fr": "Recherche et analytique",
    "ja": "調査と分析",
    "zh": "研究和分析",
    "ar": "البحث والتحليلات",
    "uk": "Дослідження та аналітика",
}
T["aggregateData.li3"] = {
    "pl": "Materiały marketingowe i studia przypadków",
    "de": "Marketingmaterialien und Fallstudien",
    "es": "Materiales de marketing y estudios de caso",
    "fr": "Matériaux marketing et études de cas",
    "ja": "マーケティング資料とケーススタディ",
    "zh": "营销材料和案例研究",
    "ar": "الموا�� التسويقية ودراسات الحالة",
    "uk": "Маркетингові матеріали та кейси",
}
T["aggregateData.li4"] = {
    "pl": "Benchmarking i raporty publiczne",
    "de": "Benchmarking und öffentliche Berichte",
    "es": "Evaluaciones comparativas e informes públicos",
    "fr": "Benchmarking et rapports publics",
    "ja": "ベンチマーキングと公開レポート",
    "zh": "基准测试和公开报告",
    "ar": "المقارنة المعيارية والتقارير العامة",
    "uk": "Бенчмаркінг та публічні звіти",
}
T["aggregateData.li5"] = {
    "pl": "Raportowanie dla inwestorów i interesariuszy",
    "de": "Investoren- und Stakeholder-Berichterstattung",
    "es": "Informes para inversores y partes interesadas",
    "fr": "Rapports aux investisseurs et parties prenantes",
    "ja": "投資家およびステークホルダーへの報告",
    "zh": "投资者和利益相关者报告",
    "ar": "تقارير المستثمرين وأصحاب المصلحة",
    "uk": "Звітність для інвесторів та зацікавлених сторін",
}
T["aggregateData.deIdentification.heading"] = {
    "pl": "Standardy anonimizacji",
    "de": "De-Identifizierungsstandards",
    "es": "Estándares de desidentificación",
    "fr": "Normes de dé-identification",
    "ja": "非識別化基準",
    "zh": "去标识化标准",
    "ar": "معايير إلغاء تحديد الهوية",
    "uk": "Стандарти знеособлення",
}
T["aggregateData.deIdentification.p1"] = {
    "pl": "Nasz proces anonimizacji spełnia następujące standardy prawne:",
    "de": "Unser De-Identifizierungsprozess erfüllt die folgenden rechtlichen Standards:",
    "es": "Nuestro proceso de desidentificación cumple con los siguientes estándares legales:",
    "fr": "Notre processus de dé-identification respecte les normes juridiques suivantes :",
    "ja": "当社の非識別化プロセスは以下の法的基準を満たしています：",
    "zh": "我们的去标识化流程符合以下法律标准：",
    "ar": "تلبي عملية إلغاء تحديد الهوية لدينا المعايير القانونية التالية:",
    "uk": "Наш процес знеособлення відповідає наступним правовим стандартам:",
}
T["aggregateData.deIdentification.li1"] = {
    "pl": "<b>RODO, motyw 26</b> — dane nie mogą być wyodrębnione, powiązane ani użyte do identyfikacji jakiejkolwiek osoby, biorąc pod uwagę wszystkie środki, których użycie jest racjonalnie prawdopodobne.",
    "de": "<b>DSGVO Erwägungsgrund 26</b> — Daten können nicht herausgegriffen, verknüpft oder abgeleitet werden, um eine Person zu identifizieren, unter Berücksichtigung aller Mittel, deren Verwendung vernünftigerweise wahrscheinlich ist.",
    "es": "<b>Considerando 26 del RGPD</b> — los datos no pueden ser individualizados, vinculados ni inferidos para identificar a ningún individuo, teniendo en cuenta todos los medios que razonablemente puedan utilizarse.",
    "fr": "<b>Considérant 26 du RGPD</b> — les données ne peuvent pas être isolées, liées ou inférées pour identifier un individu, en tenant compte de tous les moyens raisonnablement susceptibles d'être utilisés.",
    "ja": "<b>GDPRリサイタル26</b> — データは、合理的に使用される可能性のあるすべての手段を考慮して、個人を特定するために選別、関連付け、または推測することができません。",
    "zh": "<b>GDPR第26条序言</b> — 考虑到所有合理可能使用的手段，数据不能被筛选、关联或推断以识别任何个人。",
    "ar": "<b>الفقرة 26 من GDPR</b> — لا يمكن تمييز البيانات أو ربطها أو استنتاجها لتحديد هوية أي فرد، مع مراعاة جميع الوسائل التي من المرجح بشكل معقول استخدامها.",
    "uk": "<b>GDPR, преамбула 26</b> — дані не можуть бути виокремлені, пов'язані або використані для ідентифікації будь-якої особи з урахуванням усіх засобів, використання яких є обґрунтовано ймовірним.",
}
T["aggregateData.deIdentification.li2"] = {
    "pl": "<b>CCPA § 1798.140(m)</b> — informacje, które nie mogą być racjonalnie wykorzystane do wnioskowania o konkretnym konsumencie lub gospodarstwie domowym ani powiązane z nimi. Zobowiązujemy się nie podejmować prób ponownej identyfikacji zanonimizowanych danych.",
    "de": "<b>CCPA § 1798.140(m)</b> — Informationen, die nicht vernünftigerweise verwendet werden können, um Informationen über einen bestimmten Verbraucher oder Haushalt abzuleiten oder anderweitig mit ihm verknüpft zu werden. Wir verpflichten uns, de-identifizierte Daten nicht erneut zu identifizieren.",
    "es": "<b>CCPA § 1798.140(m)</b> — información que no puede utilizarse razonablemente para inferir información sobre un consumidor o hogar particular ni vincularse de otro modo con ellos. Nos comprometemos a no intentar reidentificar los datos desidentificados.",
    "fr": "<b>CCPA § 1798.140(m)</b> — informations qui ne peuvent pas raisonnablement être utilisées pour déduire des informations sur un consommateur ou un ménage particulier, ou être autrement liées à celui-ci. Nous nous engageons à ne pas tenter de ré-identifier les données dé-identifiées.",
    "ja": "<b>CCPA § 1798.140(m)</b> — 特定の消費者または世帯に関する情報を推察したり、関連付けたりするために合理的に使用できない情報。非識別化データの再識別を試みないことを約束します。",
    "zh": "<b>CCPA § 1798.140(m)</b> — 无法合理用于推断特定消费者或家庭信息或无法与之关联的信息。我们承诺不会尝试重新识别去标识化数据。",
    "ar": "<b>CCPA § 1798.140(m)</b> — معلومات لا يمكن استخدامها بشكل معقول لاستنتاج معلومات عن مستهلك أو أسرة معينة أو ربطها بهم. نلتزم بعدم محاولة إعادة تحديد هوية البيانات مجهولة الهوية.",
    "uk": "<b>CCPA § 1798.140(m)</b> — інформація, яка не може бути обґрунтовано використана для висновків про конкретного споживача або домогосподарство або іншим чином пов'язана з ними. Ми зобов'язуємося не намагатися повторно ідентифікувати знеособлені дані.",
}
T["aggregateData.examples.heading"] = {
    "pl": "Przykłady danych zagregowanych",
    "de": "Beispiele für aggregierte Daten",
    "es": "Ejemplos de datos agregados",
    "fr": "Exemples de données agrégées",
    "ja": "集約データの例",
    "zh": "聚合数据示例",
    "ar": "أمثلة على البيانات المجمعة",
    "uk": "Приклади агрегованих даних",
}
T["aggregateData.examples.p1"] = {
    "pl": "Przykłady typów danych zagregowanych, które możemy uzyskać i opublikować, obejmują:",
    "de": "Beispiele für die Arten aggregierter Daten, die wir ableiten und veröffentlichen können, umfassen:",
    "es": "Ejemplos de los tipos de datos agregados que podemos derivar y publicar incluyen:",
    "fr": "Voici des exemples de types de données agrégées que nous pouvons dériver et publier :",
    "ja": "当社が導出・公開する可能性のある集約データの種類の例は以下の通りです：",
    "zh": "我们可能获取和发布的聚合数据类型示例包括：",
    "ar": "تتضمن أمثلة أنواع البيانات المجمعة التي قد نستخلصها وننشرها:",
    "uk": "Приклади типів агрегованих даних, які ми можемо отримувати та публікувати, включають:",
}
T["aggregateData.examples.li1"] = {
    "pl": "Łączna liczba użytkowników na parę językową",
    "de": "Gesamtzahl der Nutzer pro Sprachpaar",
    "es": "Número total de usuarios por par de idiomas",
    "fr": "Nombre total d'utilisateurs par paire de langues",
    "ja": "言語ペアごとのユーザー総数",
    "zh": "每个语言对的用户总数",
    "ar": "إجمالي عدد المستخدمين لكل زوج لغوي",
    "uk": "Загальна кількість користувачів на мовну пару",
}
T["aggregateData.examples.li2"] = {
    "pl": "Średni czas sesji nauki",
    "de": "Durchschnittliche Lernsitzungsdauer",
    "es": "Duración media de la sesión de aprendizaje",
    "fr": "Durée moyenne des sessions d'apprentissage",
    "ja": "平均学習セッション時間",
    "zh": "平均学习会话时长",
    "ar": "متوسط مدة جلسة التعلم",
    "uk": "Середня тривалість навчальної сесії",
}
T["aggregateData.examples.li3"] = {
    "pl": "Najczęściej uczone słownictwo",
    "de": "Am häufigsten gelernter Wortschatz",
    "es": "Vocabulario más estudiado",
    "fr": "Vocabulaire le plus couramment étudié",
    "ja": "最もよく学習される語彙",
    "zh": "最常学习的词汇",
    "ar": "المفردات الأكثر دراسة",
    "uk": "Найчастіше вивчається лексика",
}
T["aggregateData.examples.li4"] = {
    "pl": "Wskaźniki błędów na poziom trudności",
    "de": "Fehlerquoten pro Schwierigkeitsstufe",
    "es": "Tasas de error por nivel de dificultad",
    "fr": "Taux d'erreur par niveau de difficulté",
    "ja": "難易度レベルごとのエラー率",
    "zh": "每个难度级别的错误率",
    "ar": "معدلات الخطأ حسب مستوى الصعوبة",
    "uk": "Частота помилок за рівнем складності",
}
T["aggregateData.examples.li5"] = {
    "pl": "Statystyki wykorzystania funkcji według poziomów członkostwa",
    "de": "Funktionsnutzungsstatistiken nach Mitgliedschaftsstufen",
    "es": "Estadísticas de uso de funciones según niveles de membresía",
    "fr": "Statistiques d'utilisation des fonctionnalités par niveaux d'adhésion",
    "ja": "メンバーシップレベル別の機能利用統計",
    "zh": "各会员级别的功能使用统计",
    "ar": "إحصائيات استخدام الميزات عبر مستويات العضوية",
    "uk": "Статистика використання функцій за рівнями членства",
}
T["aggregateData.examples.p2"] = {
    "pl": "Żaden indywidualny użytkownik nie może być zidentyfikowany na podstawie opublikowanych danych zagregowanych.",
    "de": "Kein einzelner Nutzer kann aus veröffentlichten aggregierten Daten identifiziert werden.",
    "es": "Ningún usuario individual puede ser identificado a partir de los datos agregados publicados.",
    "fr": "Aucun utilisateur individuel ne peut être identifié à partir des données agrégées publiées.",
    "ja": "公開された集約データから個々のユーザーを特定することはできません。",
    "zh": "无法从已发布的聚合数据中识别任何个人用户。",
    "ar": "لا يمكن تحديد هوية أي مستخدم فردي من أي بيانات مجمعة منشورة.",
    "uk": "Жоден окремий користувач не може бути ідентифікований з опублікованих агрегованих даних.",
}
T["aggregateData.survival"] = {
    "pl": "Nasze prawo do przechowywania i wykorzystywania danych zagregowanych obowiązuje po usunięciu konta i zakończeniu świadczenia usługi. Po usunięciu konta możemy przechowywać dane zagregowane uzyskane w trakcie korzystania z Usługi.",
    "de": "Unser Recht, aggregierte Daten aufzubewahren und zu verwenden, besteht auch nach der Kontolöschung und Beendigung des Dienstes fort. Nach der Löschung Ihres Kontos können wir aggregierte Daten aufbewahren, die aus Ihrer Nutzung des Dienstes abgeleitet wurden.",
    "es": "Nuestro derecho a retener y utilizar datos agregados sobrevive a la eliminación de la cuenta y la terminación del servicio. Después de eliminar su cuenta, podemos retener datos agregados derivados de su uso del Servicio.",
    "fr": "Notre droit de conserver et d'utiliser les données agrégées survit à la suppression du compte et à la résiliation du service. Après la suppression de votre compte, nous pouvons conserver les données agrégées dérivées de votre utilisation du Service.",
    "ja": "集約データを保持および使用する当社の権利は、アカウント削除およびサービス終了後も存続します。アカウント削除後も、サービスの利用から得られた集約データを保持する場合があります。",
    "zh": "我们保留和使用聚合数据的权利在账户删除和服务终止后继续有效。删除账户后，我们可能会保留从您使用服务中获取的聚合数据。",
    "ar": "يستمر حقنا في الاحتفاظ بالبيانات المجمعة واستخدامها بعد حذف الحساب وإنهاء الخدمة. بعد حذف حسابك، قد نحتفظ بالبيانات المجمعة المستمدة من استخدامك للخدمة.",
    "uk": "Наше право зберігати та використовувати агреговані дані зберігається після видалення облікового запису та припинення надання послуги. Після видалення вашого облікового запису ми можемо зберігати агреговані дані, отримані в результаті використання вами Сервісу.",
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
    print("Story 21.1 — Privacy Policy Translation (Part 6/7)")
    print("Sections: internationalTransfers, aggregateData")
    print("=" * 70)
    apply_translations()
    print("\nPart 6 complete.")

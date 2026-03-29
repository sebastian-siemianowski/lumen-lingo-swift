#!/usr/bin/env python3
"""
Epic 18 — EULA: Data Protection, Warranty & Liability Hardening
Stories 18.1-18.5 (18.6 already satisfied by existing openSource section)
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# ── 18.1: GDPR/DPA Cross-Reference ──
data_protection = {
    "en": {
        "heading": "Data Protection",
        "p1": "The App processes personal data as described in our <privacyLink>Privacy Policy</privacyLink>. By using the App, you acknowledge that your personal data will be processed in accordance with that policy.",
        "p2": "Nothing in this EULA limits, restricts, or overrides your rights under the UK General Data Protection Regulation (UK GDPR) or the Data Protection Act 2018. In the event of any conflict between this EULA and applicable data protection law, the data protection law shall prevail.",
        "p3": "For full details on what personal data we collect, how we use it, your data protection rights, and how to exercise them, please refer to our <privacyLink>Privacy Policy</privacyLink>.",
    },
    "pl": {
        "heading": "Ochrona danych",
        "p1": "Aplikacja przetwarza dane osobowe zgodnie z naszą <privacyLink>Polityką prywatności</privacyLink>. Korzystając z Aplikacji, przyjmujesz do wiadomości, że Twoje dane osobowe będą przetwarzane zgodnie z tą polityką.",
        "p2": "Żadne postanowienie niniejszej Umowy EULA nie ogranicza, nie narusza ani nie zastępuje Twoich praw wynikających z ogólnego rozporządzenia o ochronie danych (UK GDPR) lub Ustawy o ochronie danych osobowych 2018 (Data Protection Act 2018). W przypadku sprzeczności między niniejszą Umową EULA a obowiązującym prawem ochrony danych osobowych, pierwszeństwo ma prawo ochrony danych.",
        "p3": "Aby zapoznać się ze szczegółami dotyczącymi zbieranych danych osobowych, sposobu ich wykorzystania, Twoich praw do ochrony danych i sposobu ich wykonywania, prosimy o zapoznanie się z naszą <privacyLink>Polityką prywatności</privacyLink>.",
    },
    "de": {
        "heading": "Datenschutz",
        "p1": "Die App verarbeitet personenbezogene Daten wie in unserer <privacyLink>Datenschutzrichtlinie</privacyLink> beschrieben. Durch die Nutzung der App erkennen Sie an, dass Ihre personenbezogenen Daten gemäß dieser Richtlinie verarbeitet werden.",
        "p2": "Nichts in dieser EULA beschränkt, begrenzt oder überlagert Ihre Rechte nach der UK-Datenschutz-Grundverordnung (UK GDPR) oder dem Data Protection Act 2018. Im Falle eines Widerspruchs zwischen dieser EULA und dem geltenden Datenschutzrecht hat das Datenschutzrecht Vorrang.",
        "p3": "Ausführliche Informationen darüber, welche personenbezogenen Daten wir erheben, wie wir sie verwenden, welche Datenschutzrechte Sie haben und wie Sie diese ausüben können, finden Sie in unserer <privacyLink>Datenschutzrichtlinie</privacyLink>.",
    },
    "es": {
        "heading": "Protección de datos",
        "p1": "La Aplicación procesa datos personales según se describe en nuestra <privacyLink>Política de Privacidad</privacyLink>. Al utilizar la Aplicación, usted reconoce que sus datos personales serán procesados de conformidad con dicha política.",
        "p2": "Nada en este EULA limita, restringe o anula sus derechos en virtud del Reglamento General de Protección de Datos del Reino Unido (UK GDPR) o la Ley de Protección de Datos 2018 (Data Protection Act 2018). En caso de conflicto entre este EULA y la legislación aplicable de protección de datos, prevalecerá la legislación de protección de datos.",
        "p3": "Para obtener información completa sobre qué datos personales recopilamos, cómo los utilizamos, sus derechos de protección de datos y cómo ejercerlos, consulte nuestra <privacyLink>Política de Privacidad</privacyLink>.",
    },
    "fr": {
        "heading": "Protection des données",
        "p1": "L'Application traite les données personnelles comme décrit dans notre <privacyLink>Politique de confidentialité</privacyLink>. En utilisant l'Application, vous reconnaissez que vos données personnelles seront traitées conformément à cette politique.",
        "p2": "Rien dans ce CLUF ne limite, restreint ou supplante vos droits en vertu du Règlement général sur la protection des données du Royaume-Uni (UK GDPR) ou de la Loi sur la protection des données 2018 (Data Protection Act 2018). En cas de conflit entre ce CLUF et la législation applicable en matière de protection des données, la législation sur la protection des données prévaut.",
        "p3": "Pour des informations complètes sur les données personnelles que nous collectons, la manière dont nous les utilisons, vos droits en matière de protection des données et la façon de les exercer, veuillez consulter notre <privacyLink>Politique de confidentialité</privacyLink>.",
    },
    "ja": {
        "heading": "データ保護",
        "p1": "本アプリは、<privacyLink>プライバシーポリシー</privacyLink>に記載されているとおり個人データを処理します。本アプリを使用することにより、お客様の個人データが当該ポリシーに従って処理されることに同意するものとします。",
        "p2": "本 EULA のいかなる条項も、英国一般データ保護規則（UK GDPR）またはデータ保護法 2018（Data Protection Act 2018）に基づくお客様の権利を制限、削減、または無効にするものではありません。本 EULA と適用されるデータ保護法の間に矛盾がある場合は、データ保護法が優先されます。",
        "p3": "当社が収集する個人データ、その使用方法、お客様のデータ保護権利、およびその行使方法の詳細については、<privacyLink>プライバシーポリシー</privacyLink>をご参照ください。",
    },
    "zh": {
        "heading": "数据保护",
        "p1": "本应用程序按照我们的<privacyLink>隐私政策</privacyLink>处理个人数据。使用本应用程序即表示您确认您的个人数据将根据该政策进行处理。",
        "p2": "本 EULA 中的任何条款均不限制、约束或取代您依据英国通用数据保护条例（UK GDPR）或《2018 年数据保护法》（Data Protection Act 2018）享有的权利。如本 EULA 与适用的数据保护法律之间存在冲突，以数据保护法律为准。",
        "p3": "有关我们收集哪些个人数据、如何使用、您的数据保护权利以及如何行使这些权利的完整详情，请参阅我们的<privacyLink>隐私政策</privacyLink>。",
    },
    "ar": {
        "heading": "حماية البيانات",
        "p1": "يعالج التطبيق البيانات الشخصية كما هو موضح في <privacyLink>سياسة الخصوصية</privacyLink> الخاصة بنا. باستخدام التطبيق، فإنك تقر بأن بياناتك الشخصية ستتم معالجتها وفقًا لتلك السياسة.",
        "p2": "لا شيء في اتفاقية الترخيص هذه يحد أو يقيد أو يلغي حقوقك بموجب اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR) أو قانون حماية البيانات 2018 (Data Protection Act 2018). في حالة وجود أي تعارض بين اتفاقية الترخيص هذه وقانون حماية البيانات المعمول به، يسود قانون حماية البيانات.",
        "p3": "للاطلاع على التفاصيل الكاملة حول البيانات الشخصية التي نجمعها وكيفية استخدامها وحقوقك في حماية البيانات وكيفية ممارستها، يرجى الرجوع إلى <privacyLink>سياسة الخصوصية</privacyLink> الخاصة بنا.",
    },
    "uk": {
        "heading": "Захист даних",
        "p1": "Додаток обробляє персональні дані відповідно до нашої <privacyLink>Політики конфіденційності</privacyLink>. Використовуючи Додаток, ви підтверджуєте, що ваші персональні дані оброблятимуться відповідно до цієї політики.",
        "p2": "Жодне положення цієї Ліцензійної угоди не обмежує, не звужує та не скасовує ваших прав відповідно до Загального регламенту захисту даних Великої Британії (UK GDPR) або Закону про захист даних 2018 року (Data Protection Act 2018). У разі конфлікту між цією Ліцензійною угодою та чинним законодавством про захист даних переважає законодавство про захист даних.",
        "p3": "Для отримання повної інформації про те, які персональні дані ми збираємо, як ми їх використовуємо, ваші права на захист даних та як їх реалізувати, будь ласка, зверніться до нашої <privacyLink>Політики конфіденційності</privacyLink>.",
    },
}

# ── 18.2: Warranty Disclaimer for User-Caused Data Loss ──
warranty = {
    "en": {
        "heading": "Data Loss Disclaimer",
        "p1": "Lumenshore is not responsible for the loss of your learning data caused by: (a) deletion of the App from your device; (b) disabling or signing out of iCloud; or (c) manually clearing device storage. These actions may permanently remove locally stored learning progress, preferences, and practice history.",
        "p2": "To protect your learning progress, we strongly recommend keeping iCloud sync enabled at all times. When iCloud sync is active, your data is backed up to your personal iCloud account and can be restored if you reinstall the App.",
        "p3": "This disclaimer does not affect your statutory rights under the Consumer Rights Act 2015, including your right to a remedy if the App fails to meet satisfactory quality standards through no fault of your own.",
    },
    "pl": {
        "heading": "Wyłączenie odpowiedzialności za utratę danych",
        "p1": "Lumenshore nie ponosi odpowiedzialności za utratę danych edukacyjnych spowodowaną: (a) usunięciem Aplikacji z urządzenia; (b) wyłączeniem lub wylogowaniem z iCloud; lub (c) ręcznym wyczyszczeniem pamięci urządzenia. Czynności te mogą trwale usunąć lokalnie przechowywane postępy w nauce, preferencje i historię ćwiczeń.",
        "p2": "Aby chronić postępy w nauce, zdecydowanie zalecamy utrzymywanie synchronizacji iCloud włączonej przez cały czas. Gdy synchronizacja iCloud jest aktywna, dane są kopiowane na Twoje osobiste konto iCloud i mogą zostać przywrócone po ponownej instalacji Aplikacji.",
        "p3": "Niniejsze wyłączenie odpowiedzialności nie wpływa na Twoje ustawowe prawa wynikające z Ustawy o prawach konsumenta 2015 (Consumer Rights Act 2015), w tym prawo do środka prawnego, jeśli Aplikacja nie spełnia standardów zadowalającej jakości nie z Twojej winy.",
    },
    "de": {
        "heading": "Haftungsausschluss bei Datenverlust",
        "p1": "Lumenshore haftet nicht für den Verlust Ihrer Lerndaten, der verursacht wird durch: (a) Löschen der App von Ihrem Gerät; (b) Deaktivieren oder Abmelden von iCloud; oder (c) manuelles Löschen des Gerätespeichers. Diese Aktionen können lokal gespeicherte Lernfortschritte, Einstellungen und Übungshistorie dauerhaft entfernen.",
        "p2": "Um Ihren Lernfortschritt zu schützen, empfehlen wir dringend, die iCloud-Synchronisierung jederzeit aktiviert zu lassen. Bei aktiver iCloud-Synchronisierung werden Ihre Daten in Ihrem persönlichen iCloud-Konto gesichert und können bei Neuinstallation der App wiederhergestellt werden.",
        "p3": "Dieser Haftungsausschluss berührt nicht Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015, einschließlich Ihres Rechts auf Abhilfe, wenn die App ohne Ihr Verschulden die Standards zufriedenstellender Qualität nicht erfüllt.",
    },
    "es": {
        "heading": "Exención de responsabilidad por pérdida de datos",
        "p1": "Lumenshore no es responsable de la pérdida de sus datos de aprendizaje causada por: (a) la eliminación de la Aplicación de su dispositivo; (b) la desactivación o cierre de sesión de iCloud; o (c) la limpieza manual del almacenamiento del dispositivo. Estas acciones pueden eliminar permanentemente el progreso de aprendizaje, las preferencias y el historial de práctica almacenados localmente.",
        "p2": "Para proteger su progreso de aprendizaje, recomendamos encarecidamente mantener la sincronización de iCloud activada en todo momento. Cuando la sincronización de iCloud está activa, sus datos se respaldan en su cuenta personal de iCloud y pueden restaurarse si reinstala la Aplicación.",
        "p3": "Esta exención no afecta sus derechos legales en virtud de la Ley de Derechos del Consumidor 2015 (Consumer Rights Act 2015), incluido su derecho a un recurso si la Aplicación no cumple con los estándares de calidad satisfactoria sin culpa suya.",
    },
    "fr": {
        "heading": "Clause de non-responsabilité en cas de perte de données",
        "p1": "Lumenshore n'est pas responsable de la perte de vos données d'apprentissage causée par : (a) la suppression de l'Application de votre appareil ; (b) la désactivation ou la déconnexion d'iCloud ; ou (c) l'effacement manuel du stockage de l'appareil. Ces actions peuvent supprimer définitivement la progression d'apprentissage, les préférences et l'historique de pratique stockés localement.",
        "p2": "Pour protéger votre progression d'apprentissage, nous vous recommandons vivement de maintenir la synchronisation iCloud activée en permanence. Lorsque la synchronisation iCloud est active, vos données sont sauvegardées sur votre compte iCloud personnel et peuvent être restaurées si vous réinstallez l'Application.",
        "p3": "Cette clause de non-responsabilité n'affecte pas vos droits légaux en vertu du Consumer Rights Act 2015, y compris votre droit à un recours si l'Application ne respecte pas les normes de qualité satisfaisante sans faute de votre part.",
    },
    "ja": {
        "heading": "データ損失に関する免責事項",
        "p1": "Lumenshore は、以下の原因による学習データの損失について責任を負いません：(a) デバイスからのアプリの削除、(b) iCloud の無効化またはサインアウト、(c) デバイスストレージの手動クリア。これらの操作により、ローカルに保存された学習進捗、設定、練習履歴が永久に削除される場合があります。",
        "p2": "学習進捗を保護するため、iCloud 同期を常に有効にしておくことを強くお勧めします。iCloud 同期が有効な場合、データはお客様の個人 iCloud アカウントにバックアップされ、アプリを再インストールした際に復元できます。",
        "p3": "この免責事項は、消費者権利法 2015（Consumer Rights Act 2015）に基づくお客様の法定権利（お客様の過失によらずアプリが十分な品質基準を満たさない場合の救済を受ける権利を含む）に影響を与えません。",
    },
    "zh": {
        "heading": "数据丢失免责声明",
        "p1": "Lumenshore 不对以下原因造成的学习数据丢失承担责任：(a) 从设备中删除应用程序；(b) 禁用或退出 iCloud；(c) 手动清除设备存储。这些操作可能会永久删除本地存储的学习进度、偏好和练习历史。",
        "p2": "为保护您的学习进度，我们强烈建议您始终保持 iCloud 同步开启。当 iCloud 同步处于活动状态时，您的数据将备份到您的个人 iCloud 账户，并可在重新安装应用程序时恢复。",
        "p3": "本免责声明不影响您根据《2015 年消费者权利法》（Consumer Rights Act 2015）享有的法定权利，包括在非因您的过错而导致应用程序未达到满意质量标准时获得补救的权利。",
    },
    "ar": {
        "heading": "إخلاء المسؤولية عن فقدان البيانات",
        "p1": "لا تتحمل Lumenshore مسؤولية فقدان بيانات التعلم الخاصة بك الناتجة عن: (أ) حذف التطبيق من جهازك؛ (ب) تعطيل أو تسجيل الخروج من iCloud؛ أو (ج) مسح تخزين الجهاز يدويًا. قد تؤدي هذه الإجراءات إلى إزالة تقدم التعلم والتفضيلات وسجل التمارين المخزنة محليًا بشكل دائم.",
        "p2": "لحماية تقدمك في التعلم، نوصي بشدة بالحفاظ على تفعيل مزامنة iCloud في جميع الأوقات. عندما تكون مزامنة iCloud نشطة، يتم نسخ بياناتك احتياطيًا إلى حساب iCloud الشخصي الخاص بك ويمكن استعادتها إذا أعدت تثبيت التطبيق.",
        "p3": "لا يؤثر إخلاء المسؤولية هذا على حقوقك القانونية بموجب قانون حقوق المستهلك 2015 (Consumer Rights Act 2015)، بما في ذلك حقك في التعويض إذا لم يستوف التطبيق معايير الجودة المرضية دون خطأ منك.",
    },
    "uk": {
        "heading": "Застереження щодо втрати даних",
        "p1": "Lumenshore не несе відповідальності за втрату ваших навчальних даних, спричинену: (а) видаленням Додатку з вашого пристрою; (б) вимкненням або виходом з iCloud; (в) ручним очищенням сховища пристрою. Ці дії можуть назавжди видалити локально збережений прогрес навчання, налаштування та історію практики.",
        "p2": "Для захисту вашого прогресу навчання ми наполегливо рекомендуємо постійно тримати синхронізацію iCloud увімкненою. Коли синхронізація iCloud активна, ваші дані зберігаються у вашому особистому обліковому записі iCloud і можуть бути відновлені при повторній установці Додатку.",
        "p3": "Це застереження не впливає на ваші законні права відповідно до Закону про права споживачів 2015 (Consumer Rights Act 2015), включаючи ваше право на засіб правового захисту, якщо Додаток не відповідає стандартам задовільної якості не з вашої вини.",
    },
}

# ── 18.3: Third-Party Service Provider Liability Boundaries ──
third_party = {
    "en": {
        "heading": "Third-Party Services",
        "p1": "The App relies on services provided by third parties, including but not limited to:",
        "li1": "<b>Apple Inc.</b> -- App Store distribution, iCloud data sync, and in-app purchase processing.",
        "li2": "<b>RevenueCat, Inc.</b> -- Subscription management and purchase validation.",
        "p2": "Lumenshore is not liable for any unavailability, errors, data loss, or changes in functionality caused by third-party services. Users should refer to each provider's own terms of service for details of their obligations and liability.",
        "p3": "This clause does not exclude or limit Lumenshore's liability where an issue with a third-party service was caused or contributed to by Lumenshore's own negligence or breach of its obligations under this EULA.",
    },
    "pl": {
        "heading": "Usługi podmiotów trzecich",
        "p1": "Aplikacja korzysta z usług świadczonych przez podmioty trzecie, w tym między innymi:",
        "li1": "<b>Apple Inc.</b> -- dystrybucja w App Store, synchronizacja danych iCloud oraz obsługa zakupów w aplikacji.",
        "li2": "<b>RevenueCat, Inc.</b> -- zarządzanie subskrypcjami i walidacja zakupów.",
        "p2": "Lumenshore nie ponosi odpowiedzialności za niedostępność, błędy, utratę danych lub zmiany funkcjonalności spowodowane usługami podmiotów trzecich. Użytkownicy powinni zapoznać się z warunkami korzystania z usług każdego dostawcy w celu uzyskania szczegółów dotyczących ich zobowiązań i odpowiedzialności.",
        "p3": "Niniejsza klauzula nie wyłącza ani nie ogranicza odpowiedzialności Lumenshore w przypadku, gdy problem z usługą podmiotu trzeciego został spowodowany lub przyczyniło się do niego zaniedbanie Lumenshore lub naruszenie jego zobowiązań wynikających z niniejszej Umowy EULA.",
    },
    "de": {
        "heading": "Drittanbieter-Dienste",
        "p1": "Die App nutzt Dienste von Drittanbietern, darunter unter anderem:",
        "li1": "<b>Apple Inc.</b> -- App Store-Vertrieb, iCloud-Datensynchronisierung und In-App-Kaufabwicklung.",
        "li2": "<b>RevenueCat, Inc.</b> -- Abonnementverwaltung und Kaufvalidierung.",
        "p2": "Lumenshore haftet nicht für Nichtverfügbarkeit, Fehler, Datenverlust oder Funktionsänderungen, die durch Drittanbieter-Dienste verursacht werden. Nutzer sollten die jeweiligen Nutzungsbedingungen der Anbieter für Einzelheiten zu deren Pflichten und Haftung einsehen.",
        "p3": "Diese Klausel schließt die Haftung von Lumenshore nicht aus oder beschränkt sie nicht, wenn ein Problem mit einem Drittanbieter-Dienst durch Fahrlässigkeit von Lumenshore oder Verletzung seiner Pflichten aus dieser EULA verursacht oder mitverursacht wurde.",
    },
    "es": {
        "heading": "Servicios de terceros",
        "p1": "La Aplicación depende de servicios proporcionados por terceros, incluyendo entre otros:",
        "li1": "<b>Apple Inc.</b> -- distribución en App Store, sincronización de datos iCloud y procesamiento de compras dentro de la aplicación.",
        "li2": "<b>RevenueCat, Inc.</b> -- gestión de suscripciones y validación de compras.",
        "p2": "Lumenshore no es responsable de la indisponibilidad, errores, pérdida de datos o cambios en la funcionalidad causados por servicios de terceros. Los usuarios deben consultar los términos de servicio de cada proveedor para conocer sus obligaciones y responsabilidades.",
        "p3": "Esta cláusula no excluye ni limita la responsabilidad de Lumenshore cuando un problema con un servicio de terceros fue causado o contribuido por la negligencia de Lumenshore o el incumplimiento de sus obligaciones en virtud de este EULA.",
    },
    "fr": {
        "heading": "Services tiers",
        "p1": "L'Application repose sur des services fournis par des tiers, notamment :",
        "li1": "<b>Apple Inc.</b> -- distribution via App Store, synchronisation de données iCloud et traitement des achats intégrés.",
        "li2": "<b>RevenueCat, Inc.</b> -- gestion des abonnements et validation des achats.",
        "p2": "Lumenshore n'est pas responsable de l'indisponibilité, des erreurs, de la perte de données ou des changements de fonctionnalité causés par les services tiers. Les utilisateurs doivent se référer aux conditions de service de chaque fournisseur pour les détails de leurs obligations et responsabilités.",
        "p3": "Cette clause n'exclut ni ne limite la responsabilité de Lumenshore lorsqu'un problème avec un service tiers a été causé ou aggravé par la négligence de Lumenshore ou le manquement à ses obligations au titre de ce CLUF.",
    },
    "ja": {
        "heading": "サードパーティサービス",
        "p1": "本アプリは、以下を含むがこれに限定されないサードパーティが提供するサービスに依存しています：",
        "li1": "<b>Apple Inc.</b> -- App Store での配信、iCloud データ同期、およびアプリ内購入の処理。",
        "li2": "<b>RevenueCat, Inc.</b> -- サブスクリプション管理および購入検証。",
        "p2": "Lumenshore は、サードパーティサービスに起因する利用不能、エラー、データ損失、または機能変更について責任を負いません。各プロバイダーの義務と責任の詳細については、各プロバイダー独自の利用規約をご参照ください。",
        "p3": "この条項は、サードパーティサービスの問題が Lumenshore の過失または本 EULA に基づく義務違反によって引き起こされた、またはそれに起因する場合において、Lumenshore の責任を排除または制限するものではありません。",
    },
    "zh": {
        "heading": "第三方服务",
        "p1": "本应用程序依赖第三方提供的服务，包括但不限于：",
        "li1": "<b>Apple Inc.</b> -- App Store 分发、iCloud 数据同步和应用内购买处理。",
        "li2": "<b>RevenueCat, Inc.</b> -- 订阅管理和购买验证。",
        "p2": "Lumenshore 不对因第三方服务导致的不可用、错误、数据丢失或功能变更承担责任。用户应参阅各提供商自身的服务条款，了解其义务和责任的详情。",
        "p3": "如第三方服务问题系由 Lumenshore 的疏忽或违反本 EULA 下的义务所导致或促成，本条款不排除或限制 Lumenshore 的责任。",
    },
    "ar": {
        "heading": "خدمات الأطراف الثالثة",
        "p1": "يعتمد التطبيق على خدمات مقدمة من أطراف ثالثة، بما في ذلك على سبيل المثال لا الحصر:",
        "li1": "<b>Apple Inc.</b> -- توزيع App Store ومزامنة بيانات iCloud ومعالجة عمليات الشراء داخل التطبيق.",
        "li2": "<b>RevenueCat, Inc.</b> -- إدارة الاشتراكات والتحقق من صحة عمليات الشراء.",
        "p2": "لا تتحمل Lumenshore مسؤولية عدم التوفر أو الأخطاء أو فقدان البيانات أو التغييرات في الوظائف الناتجة عن خدمات الأطراف الثالثة. يجب على المستخدمين الرجوع إلى شروط خدمة كل مزود للاطلاع على تفاصيل التزاماته ومسؤوليته.",
        "p3": "لا تستبعد هذه البند أو تحد من مسؤولية Lumenshore عندما يكون مشكلة في خدمة طرف ثالث ناتجة أو ساهم فيها إهمال Lumenshore أو إخلالها بالتزاماتها بموجب اتفاقية الترخيص هذه.",
    },
    "uk": {
        "heading": "Послуги третіх осіб",
        "p1": "Додаток покладається на послуги, що надаються третіми особами, включаючи, але не обмежуючись:",
        "li1": "<b>Apple Inc.</b> -- розповсюдження через App Store, синхронізація даних iCloud та обробка покупок у додатку.",
        "li2": "<b>RevenueCat, Inc.</b> -- управління підписками та перевірка покупок.",
        "p2": "Lumenshore не несе відповідальності за недоступність, помилки, втрату даних або зміни функціональності, спричинені послугами третіх осіб. Користувачі повинні звертатися до власних умов обслуговування кожного постачальника для отримання деталей щодо їхніх зобов'язань та відповідальності.",
        "p3": "Це положення не виключає та не обмежує відповідальність Lumenshore у випадку, якщо проблема з послугою третьої особи була викликана або спричинена недбалістю Lumenshore або порушенням її зобов'язань за цією Ліцензійною угодою.",
    },
}

# ── 18.4: Educational Tool Disclaimer ──
educational = {
    "en": {
        "heading": "Educational Disclaimer",
        "p1": "LumenLingo is an educational aid designed to supplement language learning. It is not a substitute for professional language instruction, formal assessment, or certification.",
        "p2": "Lumenshore makes no representations or warranties regarding the suitability of the App's content for professional, academic, or certification purposes. Users should verify critical translations, grammar, and usage with qualified language professionals before relying on them in professional or academic contexts.",
        "p3": "The flashcard content in the App is curated for general language-learning purposes and may not reflect specialised terminology, regional dialects, or the most current usage in all contexts.",
    },
    "pl": {
        "heading": "Zastrzeżenie edukacyjne",
        "p1": "LumenLingo jest pomocą edukacyjną zaprojektowaną w celu uzupełnienia nauki języków. Nie zastępuje profesjonalnej nauki języka, formalnej oceny ani certyfikacji.",
        "p2": "Lumenshore nie składa żadnych oświadczeń ani gwarancji dotyczących przydatności treści Aplikacji do celów zawodowych, akademickich lub certyfikacyjnych. Użytkownicy powinni weryfikować kluczowe tłumaczenia, gramatykę i zastosowanie u wykwalifikowanych specjalistów językowych przed poleganiem na nich w kontekstach zawodowych lub akademickich.",
        "p3": "Treść fiszek w Aplikacji jest dobrana do ogólnych celów nauki języka i może nie odzwierciedlać specjalistycznej terminologii, dialektów regionalnych ani najnowszego użycia we wszystkich kontekstach.",
    },
    "de": {
        "heading": "Bildungshaftungsausschluss",
        "p1": "LumenLingo ist ein Bildungshilfsmittel, das den Sprachunterricht ergänzen soll. Es ist kein Ersatz für professionellen Sprachunterricht, formale Bewertung oder Zertifizierung.",
        "p2": "Lumenshore gibt keine Zusicherungen oder Garantien hinsichtlich der Eignung der App-Inhalte für berufliche, akademische oder Zertifizierungszwecke. Nutzer sollten wichtige Übersetzungen, Grammatik und Verwendung bei qualifizierten Sprachfachleuten überprüfen, bevor sie sich in beruflichen oder akademischen Kontexten darauf verlassen.",
        "p3": "Die Karteikarten-Inhalte in der App sind für allgemeine Sprachlernzwecke zusammengestellt und spiegeln möglicherweise nicht die Fachterminologie, regionale Dialekte oder den aktuellsten Sprachgebrauch in allen Kontexten wider.",
    },
    "es": {
        "heading": "Aviso educativo",
        "p1": "LumenLingo es una ayuda educativa diseñada para complementar el aprendizaje de idiomas. No sustituye la instrucción lingüística profesional, la evaluación formal ni la certificación.",
        "p2": "Lumenshore no hace representaciones ni garantías sobre la idoneidad del contenido de la Aplicación para fines profesionales, académicos o de certificación. Los usuarios deben verificar las traducciones, la gramática y el uso críticos con profesionales de idiomas cualificados antes de confiar en ellos en contextos profesionales o académicos.",
        "p3": "El contenido de las tarjetas de la Aplicación está seleccionado para fines generales de aprendizaje de idiomas y puede no reflejar terminología especializada, dialectos regionales o el uso más actual en todos los contextos.",
    },
    "fr": {
        "heading": "Avertissement éducatif",
        "p1": "LumenLingo est un outil pédagogique conçu pour compléter l'apprentissage des langues. Il ne se substitue pas à un enseignement linguistique professionnel, une évaluation formelle ou une certification.",
        "p2": "Lumenshore ne fait aucune déclaration ni garantie quant à l'adéquation du contenu de l'Application à des fins professionnelles, académiques ou de certification. Les utilisateurs doivent vérifier les traductions, la grammaire et l'usage critiques auprès de professionnels linguistiques qualifiés avant de s'y fier dans des contextes professionnels ou académiques.",
        "p3": "Le contenu des fiches de l'Application est sélectionné à des fins générales d'apprentissage des langues et peut ne pas refléter la terminologie spécialisée, les dialectes régionaux ou l'usage le plus actuel dans tous les contextes.",
    },
    "ja": {
        "heading": "教育に関する免責事項",
        "p1": "LumenLingo は語学学習を補助するための教育ツールです。プロフェッショナルな語学指導、正式な評価、または資格認定の代替ではありません。",
        "p2": "Lumenshore は、本アプリのコンテンツが職業的、学術的、または資格認定目的に適合することについて、いかなる表明も保証も行いません。プロフェッショナルまたは学術的な場面で使用する前に、重要な翻訳、文法、用法については資格のある語学専門家にご確認ください。",
        "p3": "本アプリのフラッシュカードコンテンツは一般的な語学学習を目的として作成されており、専門用語、地域方言、またはすべての文脈における最新の用法を反映していない場合があります。",
    },
    "zh": {
        "heading": "教育免责声明",
        "p1": "LumenLingo 是一款旨在辅助语言学习的教育工具。它不能替代专业的语言教学、正式评估或认证。",
        "p2": "Lumenshore 不对应用程序内容适用于专业、学术或认证目的作出任何陈述或保证。用户在专业或学术场景中使用前，应向合格的语言专业人士核实关键翻译、语法和用法。",
        "p3": "应用程序中的闪卡内容是为一般语言学习目的策划的，可能不反映专业术语、地区方言或所有语境中的最新用法。",
    },
    "ar": {
        "heading": "إخلاء المسؤولية التعليمي",
        "p1": "LumenLingo هو أداة تعليمية مصممة لتكملة تعلم اللغات. وهو ليس بديلاً عن التعليم اللغوي المهني أو التقييم الرسمي أو الشهادات.",
        "p2": "لا تقدم Lumenshore أي تعهدات أو ضمانات بشأن ملاءمة محتوى التطبيق لأغراض مهنية أو أكاديمية أو للحصول على شهادات. يجب على المستخدمين التحقق من الترجمات والقواعد النحوية والاستخدام الحاسم مع متخصصين لغويين مؤهلين قبل الاعتماد عليها في السياقات المهنية أو الأكاديمية.",
        "p3": "تم اختيار محتوى البطاقات التعليمية في التطبيق لأغراض تعلم اللغة العامة وقد لا يعكس المصطلحات المتخصصة أو اللهجات الإقليمية أو أحدث الاستخدامات في جميع السياقات.",
    },
    "uk": {
        "heading": "Освітнє застереження",
        "p1": "LumenLingo є освітнім інструментом, призначеним для доповнення вивчення мов. Він не замінює професійне мовне навчання, формальне оцінювання або сертифікацію.",
        "p2": "Lumenshore не робить жодних заяв чи гарантій щодо придатності контенту Додатку для професійних, академічних або сертифікаційних цілей. Користувачі повинні перевіряти критичні переклади, граматику та вживання у кваліфікованих мовних фахівців перед тим, як покладатися на них у професійних або академічних контекстах.",
        "p3": "Контент карток у Додатку підібрано для загальних цілей вивчення мови і може не відображати спеціалізовану термінологію, регіональні діалекти або найсучасніше вживання у всіх контекстах.",
    },
}

# ── 18.5: Biometric Data Clause ──
biometric = {
    "en": {
        "heading": "Biometric Data",
        "p1": "The App may offer the option to use Face ID or Touch ID for convenience features such as unlocking the App. If you choose to enable these features, the biometric authentication is processed entirely by Apple on your device using the Secure Enclave.",
        "p2": "Lumenshore does not collect, store, access, or transmit any biometric data (including facial geometry or fingerprint data). The App receives only a success or failure signal from the device's biometric system and never has access to the underlying biometric template.",
        "p3": "You may disable biometric authentication at any time through your device's Settings without affecting your ability to use the App.",
    },
    "pl": {
        "heading": "Dane biometryczne",
        "p1": "Aplikacja może oferować możliwość korzystania z Face ID lub Touch ID w celach wygody, takich jak odblokowywanie Aplikacji. Jeśli zdecydujesz się włączyć te funkcje, uwierzytelnianie biometryczne jest przetwarzane wyłącznie przez Apple na Twoim urządzeniu za pomocą Secure Enclave.",
        "p2": "Lumenshore nie zbiera, nie przechowuje, nie ma dostępu do ani nie przesyła żadnych danych biometrycznych (w tym geometrii twarzy ani danych odcisków palców). Aplikacja otrzymuje jedynie sygnał powodzenia lub niepowodzenia z systemu biometrycznego urządzenia i nigdy nie ma dostępu do podstawowego szablonu biometrycznego.",
        "p3": "Możesz wyłączyć uwierzytelnianie biometryczne w dowolnym momencie w Ustawieniach urządzenia bez wpływu na możliwość korzystania z Aplikacji.",
    },
    "de": {
        "heading": "Biometrische Daten",
        "p1": "Die App bietet möglicherweise die Option, Face ID oder Touch ID für Komfortfunktionen wie das Entsperren der App zu verwenden. Wenn Sie diese Funktionen aktivieren, wird die biometrische Authentifizierung vollständig von Apple auf Ihrem Gerät unter Verwendung der Secure Enclave verarbeitet.",
        "p2": "Lumenshore erhebt, speichert, greift auf oder übermittelt keine biometrischen Daten (einschließlich Gesichtsgeometrie oder Fingerabdruckdaten). Die App erhält lediglich ein Erfolgs- oder Fehlersignal vom biometrischen System des Geräts und hat niemals Zugang zum zugrunde liegenden biometrischen Template.",
        "p3": "Sie können die biometrische Authentifizierung jederzeit in den Einstellungen Ihres Geräts deaktivieren, ohne dass dies die Nutzung der App beeinträchtigt.",
    },
    "es": {
        "heading": "Datos biométricos",
        "p1": "La Aplicación puede ofrecer la opción de utilizar Face ID o Touch ID para funciones de comodidad como el desbloqueo de la Aplicación. Si elige habilitar estas funciones, la autenticación biométrica es procesada enteramente por Apple en su dispositivo utilizando el Secure Enclave.",
        "p2": "Lumenshore no recopila, almacena, accede ni transmite ningún dato biométrico (incluida la geometría facial o los datos de huellas dactilares). La Aplicación recibe únicamente una señal de éxito o error del sistema biométrico del dispositivo y nunca tiene acceso a la plantilla biométrica subyacente.",
        "p3": "Puede desactivar la autenticación biométrica en cualquier momento a través de los Ajustes de su dispositivo sin que esto afecte su capacidad de usar la Aplicación.",
    },
    "fr": {
        "heading": "Données biométriques",
        "p1": "L'Application peut proposer l'utilisation de Face ID ou Touch ID pour des fonctions de commodité telles que le déverrouillage de l'Application. Si vous choisissez d'activer ces fonctions, l'authentification biométrique est entièrement traitée par Apple sur votre appareil au moyen du Secure Enclave.",
        "p2": "Lumenshore ne collecte, ne stocke, n'accède à ni ne transmet aucune donnée biométrique (y compris la géométrie faciale ou les données d'empreintes digitales). L'Application reçoit uniquement un signal de succès ou d'échec du système biométrique de l'appareil et n'a jamais accès au modèle biométrique sous-jacent.",
        "p3": "Vous pouvez désactiver l'authentification biométrique à tout moment via les Réglages de votre appareil sans affecter votre capacité à utiliser l'Application.",
    },
    "ja": {
        "heading": "生体認証データ",
        "p1": "本アプリは、アプリのロック解除などの利便性向上目的で Face ID または Touch ID の使用オプションを提供する場合があります。これらの機能を有効にした場合、生体認証はお客様のデバイス上で Secure Enclave を使用して Apple により完全に処理されます。",
        "p2": "Lumenshore は、いかなる生体認証データ（顔の形状データや指紋データを含む）も収集、保存、アクセス、送信しません。本アプリはデバイスの生体認証システムから成功または失敗のシグナルのみを受信し、基盤となる生体認証テンプレートにアクセスすることはありません。",
        "p3": "デバイスの設定から生体認証をいつでも無効にできます。アプリの使用に影響はありません。",
    },
    "zh": {
        "heading": "生物识别数据",
        "p1": "本应用程序可能提供使用面容 ID 或触控 ID 的便捷功能选项（如解锁应用程序）。如果您选择启用这些功能，生物识别认证将完全由 Apple 在您的设备上通过安全隔区（Secure Enclave）处理。",
        "p2": "Lumenshore 不收集、存储、访问或传输任何生物识别数据（包括面部几何数据或指纹数据）。应用程序仅从设备的生物识别系统接收成功或失败信号，从不访问底层生物识别模板。",
        "p3": "您可以随时通过设备的设置禁用生物识别认证，这不会影响您使用应用程序的能力。",
    },
    "ar": {
        "heading": "البيانات البيومترية",
        "p1": "قد يوفر التطبيق خيار استخدام Face ID أو Touch ID لميزات الراحة مثل فتح قفل التطبيق. إذا اخترت تفعيل هذه الميزات، تتم معالجة المصادقة البيومترية بالكامل بواسطة Apple على جهازك باستخدام Secure Enclave.",
        "p2": "لا تجمع Lumenshore أو تخزن أو تصل إلى أو تنقل أي بيانات بيومترية (بما في ذلك هندسة الوجه أو بيانات بصمات الأصابع). يتلقى التطبيق فقط إشارة نجاح أو فشل من نظام المصادقة البيومترية بالجهاز ولا يمكنه أبدًا الوصول إلى القالب البيومتري الأساسي.",
        "p3": "يمكنك تعطيل المصادقة البيومترية في أي وقت من خلال إعدادات جهازك دون التأثير على قدرتك على استخدام التطبيق.",
    },
    "uk": {
        "heading": "Біометричні дані",
        "p1": "Додаток може пропонувати використання Face ID або Touch ID для зручних функцій, таких як розблокування Додатку. Якщо ви вирішите увімкнути ці функції, біометрична автентифікація обробляється виключно Apple на вашому пристрої за допомогою Secure Enclave.",
        "p2": "Lumenshore не збирає, не зберігає, не отримує доступу та не передає жодних біометричних даних (включаючи геометрію обличчя або дані відбитків пальців). Додаток отримує лише сигнал про успіх або невдачу від біометричної системи пристрою і ніколи не має доступу до базового біометричного шаблону.",
        "p3": "Ви можете вимкнути біометричну автентифікацію в будь-який час через Налаштування вашого пристрою, не впливаючи на можливість використання Додатку.",
    },
}

applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # 18.1: dataProtection
    if "dataProtection" not in data["Eula"]:
        data["Eula"]["dataProtection"] = data_protection[loc]
        print(f"  [{loc}] Added Eula.dataProtection")
        applied += 1

    # 18.2: warranty
    if "warranty" not in data["Eula"]:
        data["Eula"]["warranty"] = warranty[loc]
        print(f"  [{loc}] Added Eula.warranty")
        applied += 1

    # 18.3: thirdPartyServices
    if "thirdPartyServices" not in data["Eula"]:
        data["Eula"]["thirdPartyServices"] = third_party[loc]
        print(f"  [{loc}] Added Eula.thirdPartyServices")
        applied += 1

    # 18.4: educationalDisclaimer
    if "educationalDisclaimer" not in data["Eula"]:
        data["Eula"]["educationalDisclaimer"] = educational[loc]
        print(f"  [{loc}] Added Eula.educationalDisclaimer")
        applied += 1

    # 18.5: biometricData
    if "biometricData" not in data["Eula"]:
        data["Eula"]["biometricData"] = biometric[loc]
        print(f"  [{loc}] Added Eula.biometricData")
        applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

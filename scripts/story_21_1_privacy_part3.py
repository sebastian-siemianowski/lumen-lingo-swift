#!/usr/bin/env python3
"""Story 21.1 — Privacy translations Part 3/5.

Sections: dataFlow, howWeUse, dataStorage, thirdParty, childrensPrivacy.
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

# ── dataFlow ──────────────────────────────────────────────────────────────────
T["dataFlow.heading"] = {
    "pl": "Dokąd trafiają Twoje dane",
    "de": "Wohin Ihre Daten gehen",
    "es": "A dónde van sus datos",
    "fr": "Où vont vos données",
    "ja": "お客様のデータの行き先",
    "zh": "您的数据去向",
    "ar": "أين تذهب بياناتك",
    "uk": "Куди потрапляють ваші дані",
}
T["dataFlow.intro"] = {
    "pl": "Oto proste podsumowanie tego, gdzie Twoje dane są przechowywane i przetwarzane:",
    "de": "Hier ist eine verständliche Zusammenfassung darüber, wo Ihre Daten gespeichert und verarbeitet werden:",
    "es": "Aquí tiene un resumen en lenguaje sencillo de dónde se almacenan y procesan sus datos:",
    "fr": "Voici un résumé en langage clair de l'endroit où vos données sont stockées et traitées :",
    "ja": "お客様のデータの保存場所と処理場所について、わかりやすくまとめました：",
    "zh": "以下是您的数据存储和处理位置的通俗说明：",
    "ar": "فيما يلي ملخص بلغة بسيطة عن مكان تخزين بياناتك ومعالجتها:",
    "uk": "Ось простий виклад того, де зберігаються та обробляються ваші дані:",
}
T["dataFlow.li1"] = {
    "pl": "<b>Twoje urządzenie</b> — wszystkie dane edukacyjne aplikacji iOS, preferencje i postępy są przechowywane lokalnie na Twoim iPhonie lub iPadzie przy użyciu frameworka SwiftData firmy Apple",
    "de": "<b>Ihr Gerät</b> — alle iOS-App-Lerndaten, Einstellungen und Fortschritte werden lokal auf Ihrem iPhone oder iPad mit Apples SwiftData-Framework gespeichert",
    "es": "<b>Su dispositivo</b> — todos los datos de aprendizaje, preferencias y progreso de la aplicación iOS se almacenan localmente en su iPhone o iPad utilizando el framework SwiftData de Apple",
    "fr": "<b>Votre appareil</b> — toutes les données d'apprentissage, préférences et progrès de l'application iOS sont stockés localement sur votre iPhone ou iPad à l'aide du framework SwiftData d'Apple",
    "ja": "<b>お客様のデバイス</b> — iOSアプリのすべての学習データ、設定、進捗はAppleのSwiftDataフレームワークを使用してiPhoneまたはiPadにローカル保存されます",
    "zh": "<b>您的设备</b> — 所有iOS应用学习数据、偏好设置和进度均使用Apple的SwiftData框架本地存储在您的iPhone或iPad上",
    "ar": "<b>جهازك</b> — يتم تخزين جميع بيانات التعلم والتفضيلات والتقدم في تطبيق iOS محليًا على iPhone أو iPad باستخدام إطار عمل SwiftData من Apple",
    "uk": "<b>Ваш пристрій</b> — усі навчальні дані, налаштування та прогрес додатку iOS зберігаються локально на вашому iPhone або iPad за допомогою фреймворку SwiftData від Apple",
}
T["dataFlow.li2"] = {
    "pl": "<b>Twoje konto iCloud</b> — dane edukacyjne synchronizują się między urządzeniami Apple za pośrednictwem Twojego osobistego konta iCloud, szyfrowanego przez Apple. Nie mamy dostępu do tych danych",
    "de": "<b>Ihr iCloud-Konto</b> — Lerndaten werden über Ihr persönliches iCloud-Konto zwischen Ihren Apple-Geräten synchronisiert, verschlüsselt von Apple. Wir haben keinen Zugriff auf diese Daten",
    "es": "<b>Su cuenta de iCloud</b> — los datos de aprendizaje se sincronizan entre sus dispositivos Apple a través de su cuenta personal de iCloud, cifrada por Apple. No tenemos acceso a estos datos",
    "fr": "<b>Votre compte iCloud</b> — les données d'apprentissage se synchronisent entre vos appareils Apple via votre compte iCloud personnel, chiffré par Apple. Nous n'avons pas accès à ces données",
    "ja": "<b>お客様のiCloudアカウント</b> — 学習データはAppleによって暗号化された個人のiCloudアカウントを通じてAppleデバイス間で同期されます。当社はこのデータにアクセスできません",
    "zh": "<b>您的iCloud账户</b> — 学习数据通过您的个人iCloud账户在Apple设备之间同步，由Apple加密。我们无法访问这些数据",
    "ar": "<b>حساب iCloud الخاص بك</b> — تتم مزامنة بيانات التعلم عبر أجهزة Apple الخاصة بك من خلال حساب iCloud الشخصي، المشفر بواسطة Apple. ليس لدينا وصول إلى هذه البيانات",
    "uk": "<b>Ваш обліковий запис iCloud</b> — навчальні дані синхронізуються між пристроями Apple через ваш особистий обліковий запис iCloud, зашифрований Apple. Ми не маємо доступу до цих даних",
}
T["dataFlow.li3"] = {
    "pl": "<b>Vercel (hosting strony)</b> — nasza strona internetowa jest hostowana w globalnej sieci edge Vercel. Anonimowe dane analityczne są przetwarzane przez Vercel. Serwery Vercel znajdują się głównie w Stanach Zjednoczonych z węzłami edge na całym świecie",
    "de": "<b>Vercel (Website-Hosting)</b> — unsere Website wird auf Vercels globalem Edge-Netzwerk gehostet. Anonyme Analysedaten werden von Vercel verarbeitet. Vercels Server befinden sich hauptsächlich in den USA mit Edge-Knoten weltweit",
    "es": "<b>Vercel (alojamiento web)</b> — nuestro sitio web está alojado en la red edge global de Vercel. Los datos analíticos anónimos son procesados por Vercel. Los servidores de Vercel se encuentran principalmente en Estados Unidos con nodos edge en todo el mundo",
    "fr": "<b>Vercel (hébergement web)</b> — notre site web est hébergé sur le réseau edge mondial de Vercel. Les données analytiques anonymes sont traitées par Vercel. Les serveurs de Vercel sont principalement situés aux États-Unis avec des nœuds edge dans le monde entier",
    "ja": "<b>Vercel（ウェブサイトホスティング）</b> — 当ウェブサイトはVercelのグローバルエッジネットワーク上でホストされています。匿名の分析データはVercelが処理します。Vercelのサーバーは主に米国にあり、世界中にエッジノードがあります",
    "zh": "<b>Vercel（网站托管）</b> — 我们的网站托管在Vercel的全球边缘网络上。匿名分析数据由Vercel处理。Vercel的服务器主要位于美国，全球各地设有边缘节点",
    "ar": "<b>Vercel (استضافة الموقع)</b> — يتم استضافة موقعنا الإلكتروني على شبكة Vercel العالمية. تتم معالجة بيانات التحليلات المجهولة بواسطة Vercel. تقع خوادم Vercel بشكل رئيسي في الولايات المتحدة مع عُقد حافة حول العالم",
    "uk": "<b>Vercel (хостинг сайту)</b> — наш веб-сайт розміщений у глобальній edge-мережі Vercel. Анонімні аналітичні дані обробляються Vercel. Сервери Vercel розташовані переважно у Сполучених Штатах з edge-вузлами по всьому світу",
}
T["dataFlow.li4"] = {
    "pl": "<b>Sentry (monitorowanie błędów)</b> — logi błędów i (za Twoją zgodą) dane nagrań sesji są wysyłane na serwery Sentry w Stanach Zjednoczonych. Sentry przetwarza te dane na podstawie umowy DPA ze Standardowymi Klauzulami Umownymi",
    "de": "<b>Sentry (Fehlerüberwachung)</b> — Fehlerprotokolle und (mit Ihrer Zustimmung) Sitzungsaufzeichnungen werden an Sentrys Server in den USA gesendet. Sentry verarbeitet diese Daten auf Grundlage einer DPA mit Standardvertragsklauseln",
    "es": "<b>Sentry (monitoreo de errores)</b> — los registros de errores y (con su consentimiento) los datos de reproducción de sesiones se envían a los servidores de Sentry en Estados Unidos. Sentry procesa estos datos bajo su DPA con Cláusulas Contractuales Estándar",
    "fr": "<b>Sentry (surveillance des erreurs)</b> — les journaux d'erreurs et (avec votre consentement) les données de replay de session sont envoyés aux serveurs de Sentry aux États-Unis. Sentry traite ces données dans le cadre de son DPA avec des Clauses Contractuelles Types",
    "ja": "<b>Sentry（エラーモニタリング）</b> — エラーログと（お客様の同意を得た上で）セッションリプレイデータは米国のSentryサーバーに送信されます。Sentryは標準契約条項付きのDPAに基づいてこのデータを処理します",
    "zh": "<b>Sentry（错误监控）</b> — 错误日志和（经您同意后的）会话回放数据被发送到位于美国的Sentry服务器。Sentry根据包含标准合同条款的DPA处理这些数据",
    "ar": "<b>Sentry (مراقبة الأخطاء)</b> — يتم إرسال سجلات الأخطاء و(بموافقتك) بيانات إعادة تشغيل الجلسات إلى خوادم Sentry في الولايات المتحدة. تعالج Sentry هذه البيانات بموجب اتفاقية معالجة البيانات مع البنود التعاقدية القياسية",
    "uk": "<b>Sentry (моніторинг помилок)</b> — журнали помилок та (за вашою згодою) дані записів сесій надсилаються на сервери Sentry у Сполучених Штатах. Sentry обробляє ці дані згідно з DPA зі Стандартними договірними положеннями",
}
T["dataFlow.li5"] = {
    "pl": "<b>Apple (App Store i iCloud)</b> — zarządzanie subskrypcjami i synchronizacja iCloud są obsługiwane przez globalną infrastrukturę Apple",
    "de": "<b>Apple (App Store & iCloud)</b> — Abonnementverwaltung und iCloud-Synchronisierung werden über Apples globale Infrastruktur abgewickelt",
    "es": "<b>Apple (App Store e iCloud)</b> — la gestión de suscripciones y la sincronización de iCloud son gestionadas por la infraestructura global de Apple",
    "fr": "<b>Apple (App Store et iCloud)</b> — la gestion des abonnements et la synchronisation iCloud sont assurées par l'infrastructure mondiale d'Apple",
    "ja": "<b>Apple（App StoreとiCloud）</b> — サブスクリプション管理とiCloud同期はAppleのグローバルインフラストラクチャで処理されます",
    "zh": "<b>Apple（App Store和iCloud）</b> — 订阅管理和iCloud同步由Apple的全球基础设施处理",
    "ar": "<b>Apple (App Store و iCloud)</b> — تتم إدارة الاشتراكات ومزامنة iCloud من خلال البنية التحتية العالمية لـ Apple",
    "uk": "<b>Apple (App Store та iCloud)</b> — управління підписками та синхронізація iCloud здійснюються через глобальну інфраструктуру Apple",
}
T["dataFlow.noOtherParties"] = {
    "pl": "Twoje dane nie są wysyłane do żadnych innych stron trzecich. Nie korzystamy z Google Analytics, Facebook SDK ani żadnych sieci reklamowych.",
    "de": "Ihre Daten werden an keine anderen Drittparteien gesendet. Wir verwenden kein Google Analytics, Facebook SDK oder Werbenetzwerke.",
    "es": "Sus datos no se envían a ningún otro tercero. No utilizamos Google Analytics, Facebook SDK ni ninguna red publicitaria.",
    "fr": "Vos données ne sont envoyées à aucun autre tiers. Nous n'utilisons pas Google Analytics, Facebook SDK ou de réseau publicitaire.",
    "ja": "お客様のデータは他のサードパーティに送信されません。Google Analytics、Facebook SDK、または広告ネットワークは使用していません。",
    "zh": "您的数据不会发送给任何其他第三方。我们不使用Google Analytics、Facebook SDK或任何广告网络。",
    "ar": "لا يتم إرسال بياناتك إلى أي أطراف ثالثة أخرى. لا نستخدم Google Analytics أو Facebook SDK أو أي شبكات إعلانية.",
    "uk": "Ваші дані не надсилаються жодним іншим третім сторонам. Ми не використовуємо Google Analytics, Facebook SDK або будь-які рекламні мережі.",
}

# ── howWeUse ──────────────────────────────────────────────────────────────────
T["howWeUse.heading"] = {
    "pl": "Jak wykorzystujemy Twoje informacje",
    "de": "Wie wir Ihre Informationen verwenden",
    "es": "Cómo utilizamos su información",
    "fr": "Comment nous utilisons vos informations",
    "ja": "お客様の情報の利用方法",
    "zh": "我们如何使用您的信息",
    "ar": "كيف نستخدم معلوماتك",
    "uk": "Як ми використовуємо вашу інформацію",
}
T["howWeUse.intro"] = {
    "pl": "Ograniczone dane, które przetwarzamy, są wykorzystywane wyłącznie do:",
    "de": "Die begrenzten Daten, die wir verarbeiten, werden ausschließlich verwendet für:",
    "es": "Los datos limitados que gestionamos se utilizan únicamente para:",
    "fr": "Les données limitées que nous traitons sont utilisées uniquement pour :",
    "ja": "当社が取り扱う限定的なデータは、以下の目的にのみ使用されます：",
    "zh": "我们处理的有限数据仅用于：",
    "ar": "يتم استخدام البيانات المحدودة التي نتعامل معها فقط من أجل:",
    "uk": "Обмежені дані, які ми обробляємо, використовуються виключно для:",
}
T["howWeUse.li1"] = {
    "pl": "<b>Personalizacja nauki</b> — planowanie powtórek rozłożonych w czasie, dostosowanie trudności i śledzenie postępów zależy od Twojej historii nauki.",
    "de": "<b>Personalisierung Ihres Lernens</b> — Planung der verteilten Wiederholung, Schwierigkeitsanpassung und Fortschrittsverfolgung basieren auf Ihrer Lernhistorie.",
    "es": "<b>Personalizar su aprendizaje</b> — la programación de la repetición espaciada, la adaptación de dificultad y el seguimiento del progreso dependen de su historial de aprendizaje.",
    "fr": "<b>Personnaliser votre apprentissage</b> — la planification de la répétition espacée, l'adaptation de la difficulté et le suivi des progrès dépendent de votre historique d'apprentissage.",
    "ja": "<b>学習の個人化</b> — 間隔反復のスケジューリング、難易度の調整、進捗の追跡は学習履歴に基づいています。",
    "zh": "<b>个性化学习</b> — 间隔重复调度、难度适应和进度跟踪取决于您的学习历史。",
    "ar": "<b>تخصيص تعلمك</b> — يعتمد جدولة التكرار المتباعد وتعديل الصعوبة وتتبع التقدم على سجل تعلمك.",
    "uk": "<b>Персоналізація навчання</b> — планування інтервальних повторень, адаптація складності та відстеження прогресу залежать від вашої історії навчання.",
}
T["howWeUse.li2"] = {
    "pl": "<b>Synchronizacja postępów</b> — synchronizacja iCloud zapewnia, że Twoje dane podążają za Tobą na wszystkich urządzeniach Apple.",
    "de": "<b>Synchronisierung Ihres Fortschritts</b> — die iCloud-Synchronisierung stellt sicher, dass Ihre Daten auf allen Ihren Apple-Geräten verfügbar sind.",
    "es": "<b>Sincronizar su progreso</b> — la sincronización con iCloud garantiza que sus datos le sigan en todos sus dispositivos Apple.",
    "fr": "<b>Synchroniser vos progrès</b> — la synchronisation iCloud garantit que vos données vous suivent sur tous vos appareils Apple.",
    "ja": "<b>進捗の同期</b> — iCloud同期により、すべてのAppleデバイスでデータが引き継がれます。",
    "zh": "<b>同步进度</b> — iCloud同步确保您的数据在所有Apple设备上跟随您。",
    "ar": "<b>مزامنة تقدمك</b> — تضمن مزامنة iCloud أن بياناتك تتبعك عبر جميع أجهزة Apple الخاصة بك.",
    "uk": "<b>Синхронізація прогресу</b> — синхронізація iCloud забезпечує доступність ваших даних на всіх пристроях Apple.",
}
T["howWeUse.li3"] = {
    "pl": "<b>Zarządzanie subskrypcją</b> — weryfikujemy Twój poziom subskrypcji, aby odblokować odpowiednie funkcje.",
    "de": "<b>Verwaltung Ihres Abonnements</b> — wir überprüfen Ihr Abonnement-Level zur Freischaltung der entsprechenden Funktionen.",
    "es": "<b>Gestionar su suscripción</b> — verificamos su nivel de suscripción para desbloquear las funciones correspondientes.",
    "fr": "<b>Gérer votre abonnement</b> — nous vérifions votre niveau d'abonnement pour débloquer les fonctionnalités appropriées.",
    "ja": "<b>サブスクリプションの管理</b> — 適切な機能をアンロックするため、サブスクリプションレベルを確認します。",
    "zh": "<b>管理订阅</b> — 我们验证您的订阅级别以解锁相应功能。",
    "ar": "<b>إدارة اشتراكك</b> — نتحقق من مستوى اشتراكك لفتح الميزات المناسبة.",
    "uk": "<b>Управління підпискою</b> — ми перевіряємо ваш рівень підписки для розблокування відповідних функцій.",
}
T["howWeUse.li4"] = {
    "pl": "<b>Ulepszanie aplikacji i strony</b> — anonimowe dane zagregowane pomagają nam zrozumieć, które funkcje są wartościowe i na czym skupić prace rozwojowe.",
    "de": "<b>Verbesserung der App und Website</b> — anonyme aggregierte Daten helfen uns zu verstehen, welche Funktionen wertvoll sind und wo wir die Entwicklung fokussieren sollten.",
    "es": "<b>Mejorar la aplicación y el sitio web</b> — los datos agregados anónimos nos ayudan a comprender qué funciones son valiosas y dónde enfocar el desarrollo.",
    "fr": "<b>Améliorer l'application et le site web</b> — les données agrégées anonymes nous aident à comprendre quelles fonctionnalités sont précieuses et où concentrer le développement.",
    "ja": "<b>アプリとウェブサイトの改善</b> — 匿名の集約データにより、どの機能が価値があり、どこに開発を集中すべきかを把握しています。",
    "zh": "<b>改善应用和网站</b> — 匿名聚合数据帮助我们了解哪些功能有价值以及应重点发展的方向。",
    "ar": "<b>تحسين التطبيق والموقع</b> — تساعدنا البيانات المجمعة المجهولة في فهم الميزات القيمة وتحديد أولويات التطوير.",
    "uk": "<b>Покращення додатку та сайту</b> — анонімні агреговані дані допомагають нам зрозуміти, які функції є цінними та на чому зосередити розробку.",
}
T["howWeUse.li5"] = {
    "pl": "<b>Komunikacja z Tobą</b> — jeśli zapisałeś się na newsletter lub listę oczekujących, używamy Twojego adresu e-mail do wysyłania aktualizacji produktu. Możesz zrezygnować z subskrypcji w dowolnym momencie.",
    "de": "<b>Kommunikation mit Ihnen</b> — wenn Sie sich für unseren Newsletter oder die Warteliste angemeldet haben, verwenden wir Ihre E-Mail-Adresse für Produktaktualisierungen. Sie können sich jederzeit abmelden.",
    "es": "<b>Comunicarnos con usted</b> — si se suscribió a nuestro boletín o lista de espera, utilizamos su correo electrónico para enviar actualizaciones de productos. Puede cancelar la suscripción en cualquier momento.",
    "fr": "<b>Communiquer avec vous</b> — si vous vous êtes inscrit à notre newsletter ou liste d'attente, nous utilisons votre e-mail pour envoyer des mises à jour produit. Vous pouvez vous désinscrire à tout moment.",
    "ja": "<b>お客様への連絡</b> — ニュースレターまたはウェイトリストに登録された場合、製品アップデートの送信にメールアドレスを使用します。いつでも配信停止できます。",
    "zh": "<b>与您沟通</b> — 如果您订阅了我们的新闻通讯或等待名单，我们会使用您的电子邮件发送产品更新。您可以随时取消订阅。",
    "ar": "<b>التواصل معك</b> — إذا اشتركت في نشرتنا الإخبارية أو قائمة الانتظار، نستخدم بريدك الإلكتروني لإرسال تحديثات المنتج. يمكنك إلغاء الاشتراك في أي وقت.",
    "uk": "<b>Спілкування з вами</b> — якщо ви підписалися на розсилку або список очікування, ми використовуємо вашу електронну адресу для надсилання оновлень продукту. Ви можете відписатися в будь-який час.",
}
T["howWeUse.li6"] = {
    "pl": "<b>Diagnozowanie i naprawianie błędów</b> — dane o błędach Sentry (oraz nagrania sesji za Twoją zgodą) pomagają nam szybko identyfikować i rozwiązywać problemy.",
    "de": "<b>Diagnose und Behebung von Fehlern</b> — Sentry-Fehlerdaten (und Sitzungsaufzeichnungen mit Ihrer Zustimmung) helfen uns, Probleme schnell zu identifizieren und zu beheben.",
    "es": "<b>Diagnosticar y corregir errores</b> — los datos de errores de Sentry (y las reproducciones de sesiones con su consentimiento) nos ayudan a identificar y resolver problemas rápidamente.",
    "fr": "<b>Diagnostiquer et corriger les bugs</b> — les données d'erreur Sentry (et les replays de session avec votre consentement) nous aident à identifier et résoudre rapidement les problèmes.",
    "ja": "<b>バグの診断と修正</b> — Sentryエラーデータ（およびお客様の同意を得たセッションリプレイ）により、問題を迅速に特定し解決します。",
    "zh": "<b>诊断和修复错误</b> — Sentry错误数据（以及经您同意的会话回放）帮助我们快速识别和解决问题。",
    "ar": "<b>تشخيص الأخطاء وإصلاحها</b> — تساعدنا بيانات أخطاء Sentry (وإعادات تشغيل الجلسات بموافقتك) في تحديد المشكلات وحلها بسرعة.",
    "uk": "<b>Діагностика та виправлення помилок</b> — дані про помилки Sentry (та записи сесій за вашою згодою) допомагають нам швидко виявляти та вирішувати проблеми.",
}

# ── dataStorage ───────────────────────────────────────────────────────────────
T["dataStorage.heading"] = {
    "pl": "Przechowywanie danych i bezpieczeństwo",
    "de": "Datenspeicherung und Sicherheit",
    "es": "Almacenamiento de datos y seguridad",
    "fr": "Stockage des données et sécurité",
    "ja": "データの保存とセキュリティ",
    "zh": "数据存储与安全",
    "ar": "تخزين البيانات والأمان",
    "uk": "Зберігання даних та безпека",
}
T["dataStorage.intro"] = {
    "pl": "LumenLingo stosuje architekturę przetwarzania na urządzeniu, stawiającą prywatność na pierwszym miejscu:",
    "de": "LumenLingo verwendet eine datenschutzorientierte On-Device-Architektur:",
    "es": "LumenLingo utiliza una arquitectura centrada en la privacidad con procesamiento en el dispositivo:",
    "fr": "LumenLingo utilise une architecture axée sur la confidentialité avec traitement sur l'appareil :",
    "ja": "LumenLingoはプライバシーファーストのオンデバイスアーキテクチャを採用しています：",
    "zh": "LumenLingo采用隐私优先的设备端架构：",
    "ar": "يستخدم LumenLingo هندسة تعتمد على المعالجة على الجهاز وتضع الخصوصية أولاً:",
    "uk": "LumenLingo використовує архітектуру обробки на пристрої з пріоритетом конфіденційності:",
}
T["dataStorage.li1"] = {
    "pl": "<b>Przechowywanie na urządzeniu</b> — wszystkie dane edukacyjne są przechowywane lokalnie przy użyciu frameworka SwiftData firmy Apple, chronione przez wbudowane szyfrowanie Twojego urządzenia.",
    "de": "<b>On-Device-Speicherung</b> — alle Lerndaten werden lokal mit Apples SwiftData-Framework gespeichert und durch die integrierte Geräteverschlüsselung geschützt.",
    "es": "<b>Almacenamiento en el dispositivo</b> — todos los datos de aprendizaje se almacenan localmente utilizando el framework SwiftData de Apple, protegidos por el cifrado integrado de su dispositivo.",
    "fr": "<b>Stockage sur l'appareil</b> — toutes les données d'apprentissage sont stockées localement à l'aide du framework SwiftData d'Apple, protégées par le chiffrement intégré de votre appareil.",
    "ja": "<b>デバイスストレージ</b> — すべての学習データはAppleのSwiftDataフレームワークを使用してローカルに保存され、デバイスの内蔵暗号化で保護されています。",
    "zh": "<b>设备端存储</b> — 所有学习数据使用Apple的SwiftData框架本地存储，受设备内置加密保护。",
    "ar": "<b>التخزين على الجهاز</b> — يتم تخزين جميع بيانات التعلم محليًا باستخدام إطار عمل SwiftData من Apple، محمية بتشفير جهازك المدمج.",
    "uk": "<b>Зберігання на пристрої</b> — усі навчальні дані зберігаються локально за допомогою фреймворку SwiftData від Apple, захищені вбудованим шифруванням вашого пристрою.",
}
T["dataStorage.li2"] = {
    "pl": "<b>Synchronizacja iCloud</b> — dane synchronizują się między urządzeniami za pośrednictwem osobistego konta iCloud, szyfrowanego kompleksowo przez Apple. Nie mamy dostępu do danych w Twoim iCloud.",
    "de": "<b>iCloud-Synchronisierung</b> — Daten werden über Ihr persönliches iCloud-Konto zwischen Ihren Geräten synchronisiert, Ende-zu-Ende von Apple verschlüsselt. Wir haben keinen Zugriff auf Ihre iCloud-Daten.",
    "es": "<b>Sincronización con iCloud</b> — los datos se sincronizan entre sus dispositivos a través de su cuenta personal de iCloud, cifrada de extremo a extremo por Apple. No tenemos acceso a sus datos de iCloud.",
    "fr": "<b>Synchronisation iCloud</b> — les données se synchronisent entre vos appareils via votre compte iCloud personnel, chiffré de bout en bout par Apple. Nous n'avons pas accès à vos données iCloud.",
    "ja": "<b>iCloud同期</b> — データは個人のiCloudアカウントを通じてデバイス間で同期され、Appleによってエンドツーエンドで暗号化されています。お客様のiCloudデータにアクセスすることはできません。",
    "zh": "<b>iCloud同步</b> — 数据通过您的个人iCloud账户在设备之间同步，由Apple端对端加密。我们无法访问您的iCloud数据。",
    "ar": "<b>مزامنة iCloud</b> — تتم مزامنة البيانات بين أجهزتك عبر حساب iCloud الشخصي، المشفر من طرف إلى طرف بواسطة Apple. ليس لدينا وصول إلى بيانات iCloud الخاصة بك.",
    "uk": "<b>Синхронізація iCloud</b> — дані синхронізуються між вашими пристроями через особистий обліковий запис iCloud, зашифрований наскрізно Apple. Ми не маємо доступу до ваших даних iCloud.",
}
T["dataStorage.li3"] = {
    "pl": "<b>Brak zewnętrznych serwerów</b> — LumenLingo nie utrzymuje serwerów przechowujących dane osobowe z aplikacji iOS. Nie ma bazy danych w chmurze, którą moglibyśmy zabezpieczyć (lub naruszyć).",
    "de": "<b>Keine externen Server</b> — LumenLingo betreibt keine Server, die personenbezogene Daten aus der iOS-App speichern. Es gibt keine Cloud-Datenbank, die wir sichern (oder verletzen) könnten.",
    "es": "<b>Sin servidores externos</b> — LumenLingo no mantiene servidores que almacenen sus datos personales de la aplicación iOS. No hay base de datos en la nube que debamos proteger (o que pueda verse comprometida).",
    "fr": "<b>Pas de serveurs externes</b> — LumenLingo ne maintient pas de serveurs stockant vos données personnelles provenant de l'application iOS. Il n'y a pas de base de données cloud à sécuriser (ou à compromettre).",
    "ja": "<b>外部サーバーなし</b> — LumenLingoはiOSアプリからの個人データを保存するサーバーを運用していません。保護（または侵害）すべきクラウドデータベースは存在しません。",
    "zh": "<b>无外部服务器</b> — LumenLingo不维护存储iOS应用个人数据的服务器。不存在需要保护（或可能被入侵的）云数据库。",
    "ar": "<b>لا خوادم خارجية</b> — لا يحتفظ LumenLingo بخوادم تخزن بياناتك الشخصية من تطبيق iOS. لا توجد قاعدة بيانات سحابية يمكننا تأمينها (أو اختراقها).",
    "uk": "<b>Без зовнішніх серверів</b> — LumenLingo не підтримує серверів, що зберігають персональні дані з додатку iOS. Немає хмарної бази даних, яку потрібно захищати (або яку можна зламати).",
}
T["dataStorage.li4"] = {
    "pl": "<b>Bezpieczeństwo App Store</b> — zarządzanie subskrypcjami jest obsługiwane przez bezpieczną infrastrukturę Apple.",
    "de": "<b>App-Store-Sicherheit</b> — die Abonnementverwaltung wird über Apples sichere Infrastruktur abgewickelt.",
    "es": "<b>Seguridad del App Store</b> — la gestión de suscripciones es gestionada por la infraestructura segura de Apple.",
    "fr": "<b>Sécurité de l'App Store</b> — la gestion des abonnements est assurée par l'infrastructure sécurisée d'Apple.",
    "ja": "<b>App Storeのセキュリティ</b> — サブスクリプション管理はAppleのセキュアなインフラストラクチャで処理されます。",
    "zh": "<b>App Store安全</b> — 订阅管理由Apple的安全基础设施处理。",
    "ar": "<b>أمان App Store</b> — تتم إدارة الاشتراكات من خلال البنية التحتية الآمنة لـ Apple.",
    "uk": "<b>Безпека App Store</b> — управління підписками здійснюється через безпечну інфраструктуру Apple.",
}
T["dataStorage.li5"] = {
    "pl": "<b>Bezpieczeństwo strony internetowej</b> — lumenlingo.com używa szyfrowania HTTPS, ścisłych nagłówków Content Security Policy oraz końcówek API z ograniczeniem częstotliwości zapytań w celu ochrony Twoich danych.",
    "de": "<b>Website-Sicherheit</b> — lumenlingo.com verwendet HTTPS-Verschlüsselung, strenge Content-Security-Policy-Header und ratenbegrenzte API-Endpunkte zum Schutz Ihrer Daten.",
    "es": "<b>Seguridad del sitio web</b> — lumenlingo.com utiliza cifrado HTTPS, encabezados estrictos de Content Security Policy y puntos finales de API con limitación de velocidad para proteger sus datos.",
    "fr": "<b>Sécurité du site web</b> — lumenlingo.com utilise le chiffrement HTTPS, des en-têtes Content Security Policy stricts et des points d'accès API à débit limité pour protéger vos données.",
    "ja": "<b>ウェブサイトのセキュリティ</b> — lumenlingo.comはHTTPS暗号化、厳格なContent Security Policyヘッダー、レート制限付きAPIエンドポイントを使用してデータを保護しています。",
    "zh": "<b>网站安全</b> — lumenlingo.com使用HTTPS加密、严格的内容安全策略标头和速率受限的API端点来保护您的数据。",
    "ar": "<b>أمان الموقع الإلكتروني</b> — يستخدم lumenlingo.com تشفير HTTPS وسياسات أمان المحتوى الصارمة ونقاط نهاية API محدودة المعدل لحماية بياناتك.",
    "uk": "<b>Безпека веб-сайту</b> — lumenlingo.com використовує HTTPS-шифрування, суворі заголовки Content Security Policy та API-ендпоінти з обмеженням швидкості для захисту ваших даних.",
}

# ── thirdParty ────────────────────────────────────────────────────────────────
T["thirdParty.heading"] = {
    "pl": "Usługi stron trzecich",
    "de": "Drittanbieter-Dienste",
    "es": "Servicios de terceros",
    "fr": "Services tiers",
    "ja": "サードパーティサービス",
    "zh": "第三方服务",
    "ar": "خدمات الأطراف الثالثة",
    "uk": "Сервіси третіх сторін",
}
T["thirdParty.intro"] = {
    "pl": "LumenLingo korzysta z ograniczonej liczby usług stron trzecich:",
    "de": "LumenLingo verwendet eine begrenzte Anzahl von Drittanbieter-Diensten:",
    "es": "LumenLingo se integra con un número limitado de servicios de terceros:",
    "fr": "LumenLingo s'intègre avec un nombre limité de services tiers :",
    "ja": "LumenLingoは限られた数のサードパーティサービスと連携しています：",
    "zh": "LumenLingo与有限数量的第三方服务集成：",
    "ar": "يتكامل LumenLingo مع عدد محدود من خدمات الأطراف الثالثة:",
    "uk": "LumenLingo інтегрується з обмеженою кількістю сервісів третіх сторін:",
}
T["thirdParty.li1"] = {
    "pl": "<b>Apple App Store i iCloud</b> — do dystrybucji aplikacji, zarządzania subskrypcjami, przetwarzania płatności i synchronizacji danych. Podlega <applePrivacy>Polityce prywatności Apple</applePrivacy>.",
    "de": "<b>Apple App Store & iCloud</b> — für App-Distribution, Abonnementverwaltung, Zahlungsabwicklung und Datensynchronisierung. Es gilt <applePrivacy>Apples Datenschutzrichtlinie</applePrivacy>.",
    "es": "<b>Apple App Store e iCloud</b> — para distribución de la aplicación, gestión de suscripciones, procesamiento de pagos y sincronización de datos. Sujeto a la <applePrivacy>Política de privacidad de Apple</applePrivacy>.",
    "fr": "<b>Apple App Store et iCloud</b> — pour la distribution de l'application, la gestion des abonnements, le traitement des paiements et la synchronisation des données. Soumis à la <applePrivacy>Politique de confidentialité d'Apple</applePrivacy>.",
    "ja": "<b>Apple App StoreとiCloud</b> — アプリの配布、サブスクリプション管理、決済処理、データ同期のため。<applePrivacy>Appleのプライバシーポリシー</applePrivacy>が適用されます。",
    "zh": "<b>Apple App Store和iCloud</b> — 用于应用分发、订阅管理、支付处理和数据同步。受<applePrivacy>Apple隐私政策</applePrivacy>约束。",
    "ar": "<b>Apple App Store و iCloud</b> — لتوزيع التطبيق وإدارة الاشتراكات ومعالجة المدفوعات ومزامنة البيانات. تخضع لـ <applePrivacy>سياسة خصوصية Apple</applePrivacy>.",
    "uk": "<b>Apple App Store та iCloud</b> — для розповсюдження додатку, управління підписками, обробки платежів та синхронізації даних. Регулюється <applePrivacy>Політикою конфіденційності Apple</applePrivacy>.",
}
T["thirdParty.li2"] = {
    "pl": "<b>Vercel</b> — do hostingu strony, anonimowej analityki i monitorowania wydajności. Bez plików cookie, zgodne z RODO. Podlega <vercelPrivacy>Polityce prywatności Vercel</vercelPrivacy>.",
    "de": "<b>Vercel</b> — für Website-Hosting, anonyme Analytik und Leistungsüberwachung. Cookiefrei, DSGVO-konform. Es gilt <vercelPrivacy>Vercels Datenschutzrichtlinie</vercelPrivacy>.",
    "es": "<b>Vercel</b> — para alojamiento web, análisis anónimos y monitoreo de rendimiento. Sin cookies, conforme al RGPD. Sujeto a la <vercelPrivacy>Política de privacidad de Vercel</vercelPrivacy>.",
    "fr": "<b>Vercel</b> — pour l'hébergement web, les analyses anonymes et la surveillance des performances. Sans cookies, conforme au RGPD. Soumis à la <vercelPrivacy>Politique de confidentialité de Vercel</vercelPrivacy>.",
    "ja": "<b>Vercel</b> — ウェブサイトホスティング、匿名分析、パフォーマンスモニタリングのため。Cookieなし、GDPR準拠。<vercelPrivacy>Vercelのプライバシーポリシー</vercelPrivacy>が適用されます。",
    "zh": "<b>Vercel</b> — 用于网站托管、匿名分析和性能监控。无Cookie，符合GDPR。受<vercelPrivacy>Vercel隐私政策</vercelPrivacy>约束。",
    "ar": "<b>Vercel</b> — لاستضافة المواقع والتحليلات المجهولة ومراقبة الأداء. بدون ملفات تعريف ارتباط، متوافق مع GDPR. تخضع لـ <vercelPrivacy>سياسة خصوصية Vercel</vercelPrivacy>.",
    "uk": "<b>Vercel</b> — для хостингу сайту, анонімної аналітики та моніторингу продуктивності. Без файлів cookie, відповідає GDPR. Регулюється <vercelPrivacy>Політикою конфіденційності Vercel</vercelPrivacy>.",
}
T["thirdParty.li3"] = {
    "pl": "<b>Sentry</b> — do monitorowania błędów strony i (za zgodą) nagrywania sesji. Podlega <sentryPrivacy>Polityce prywatności Sentry</sentryPrivacy>.",
    "de": "<b>Sentry</b> — für Website-Fehlerüberwachung und (mit Zustimmung) Sitzungsaufzeichnung. Es gilt <sentryPrivacy>Sentrys Datenschutzrichtlinie</sentryPrivacy>.",
    "es": "<b>Sentry</b> — para monitoreo de errores del sitio web y (con consentimiento) reproducción de sesiones. Sujeto a la <sentryPrivacy>Política de privacidad de Sentry</sentryPrivacy>.",
    "fr": "<b>Sentry</b> — pour la surveillance des erreurs du site web et (avec consentement) le replay de session. Soumis à la <sentryPrivacy>Politique de confidentialité de Sentry</sentryPrivacy>.",
    "ja": "<b>Sentry</b> — ウェブサイトのエラーモニタリングおよび（同意を得た上で）セッションリプレイのため。<sentryPrivacy>Sentryのプライバシーポリシー</sentryPrivacy>が適用されます。",
    "zh": "<b>Sentry</b> — 用于网站错误监控和（经同意后的）会话回放。受<sentryPrivacy>Sentry隐私政策</sentryPrivacy>约束。",
    "ar": "<b>Sentry</b> — لمراقبة أخطاء الموقع و(بالموافقة) إعادة تشغيل الجلسات. تخضع لـ <sentryPrivacy>سياسة خصوصية Sentry</sentryPrivacy>.",
    "uk": "<b>Sentry</b> — для моніторингу помилок сайту та (за згодою) запису сесій. Регулюється <sentryPrivacy>Політикою конфіденційності Sentry</sentryPrivacy>.",
}
T["thirdParty.noAdNetworks"] = {
    "pl": "Nie korzystamy z Google Analytics, Facebook SDK ani żadnych sieci reklamowych.",
    "de": "Wir verwenden kein Google Analytics, Facebook SDK oder Werbenetzwerke.",
    "es": "No utilizamos Google Analytics, Facebook SDK ni ninguna red publicitaria.",
    "fr": "Nous n'utilisons pas Google Analytics, Facebook SDK ou de réseau publicitaire.",
    "ja": "Google Analytics、Facebook SDK、または広告ネットワークは使用していません。",
    "zh": "我们不使用Google Analytics、Facebook SDK或任何广告网络。",
    "ar": "لا نستخدم Google Analytics أو Facebook SDK أو أي شبكات إعلانية.",
    "uk": "Ми не використовуємо Google Analytics, Facebook SDK або будь-які рекламні мережі.",
}

# ── childrensPrivacy ──────────────────────────────────────────────────────────
T["childrensPrivacy.heading"] = {
    "pl": "Prywatność dzieci",
    "de": "Datenschutz für Kinder",
    "es": "Privacidad de los menores",
    "fr": "Confidentialité des enfants",
    "ja": "お子様のプライバシー",
    "zh": "儿童隐私",
    "ar": "خصوصية الأطفال",
    "uk": "Конфіденційність дітей",
}
T["childrensPrivacy.p1"] = {
    "pl": "LumenLingo jest przeznaczony dla użytkowników w wieku 13 lat i starszych. Nie zbieramy świadomie danych osobowych od dzieci poniżej 13 roku życia (lub obowiązującego minimalnego wieku w Twojej jurysdykcji, który może być wyższy — na przykład 16 lat w Niemczech i Holandii).",
    "de": "LumenLingo ist für Nutzer ab 13 Jahren konzipiert. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren (oder dem geltenden Mindestalter in Ihrer Rechtsordnung, das höher sein kann — zum Beispiel 16 Jahre in Deutschland und den Niederlanden).",
    "es": "LumenLingo está diseñado para usuarios mayores de 13 años. No recopilamos conscientemente información personal de menores de 13 años (o la edad mínima aplicable en su jurisdicción, que puede ser mayor — por ejemplo, 16 años en Alemania y los Países Bajos).",
    "fr": "LumenLingo est conçu pour les utilisateurs âgés de 13 ans et plus. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans (ou de l'âge minimum applicable dans votre juridiction, qui peut être plus élevé — par exemple 16 ans en Allemagne et aux Pays-Bas).",
    "ja": "LumenLingoは13歳以上のユーザーを対象としています。13歳未満（またはお住まいの地域の該当する最低年齢。ドイツやオランダでは16歳など、それ以上の場合があります）のお子様から個人情報を故意に収集することはありません。",
    "zh": "LumenLingo面向13岁及以上的用户。我们不会故意收集13岁以下儿童的个人信息（或您所在司法管辖区适用的最低年龄，可能更高——例如，德国和荷兰为16岁）。",
    "ar": "صُمم LumenLingo للمستخدمين الذين تبلغ أعمارهم 13 عامًا فما فوق. لا نجمع عن قصد معلومات شخصية من الأطفال دون سن 13 عامًا (أو الحد الأدنى المعمول به في ولايتك القضائية، والذي قد يكون أعلى — على سبيل المثال 16 عامًا في ألمانيا وهولندا).",
    "uk": "LumenLingo призначений для користувачів віком від 13 років. Ми свідомо не збираємо персональну інформацію від дітей молодше 13 років (або мінімального віку, встановленого у вашій юрисдикції, який може бути вищим — наприклад, 16 років у Німеччині та Нідерландах).",
}
T["childrensPrivacy.p2"] = {
    "pl": "Aplikacja iOS nie wymaga rejestracji konta i przechowuje dane lokalnie, więc żadne dane osobowe nie są przekazywane od użytkowników aplikacji w żadnym wieku. Na stronie internetowej nie akceptujemy świadomie zapisów na newsletter lub listę oczekujących od osób poniżej 13 roku życia.",
    "de": "Die iOS-App erfordert keine Kontoregistrierung und speichert Daten lokal, sodass keine personenbezogenen Daten von App-Nutzern jeden Alters an uns übertragen werden. Auf der Website nehmen wir wissentlich keine Newsletter- oder Wartelisten-Anmeldungen von Personen unter 13 Jahren an.",
    "es": "La aplicación iOS no requiere registro de cuenta y almacena los datos localmente, por lo que no se nos transmite información personal de los usuarios de la aplicación de ninguna edad. En el sitio web, no aceptamos conscientemente suscripciones al boletín ni a la lista de espera de personas menores de 13 años.",
    "fr": "L'application iOS ne nécessite pas de création de compte et stocke les données localement, donc aucune information personnelle ne nous est transmise par les utilisateurs de l'application, quel que soit leur âge. Sur le site web, nous n'acceptons pas sciemment les inscriptions à la newsletter ou à la liste d'attente de personnes de moins de 13 ans.",
    "ja": "iOSアプリはアカウント登録を必要とせず、データをローカルに保存するため、どの年齢のアプリユーザーからも個人情報が当社に送信されることはありません。ウェブサイトでは、13歳未満の方からのニュースレターやウェイトリストの登録を故意に受け付けていません。",
    "zh": "iOS应用不需要账户注册且数据本地存储，因此任何年龄的应用用户都不会向我们传输个人信息。在网站上，我们不会故意接受13岁以下人员的新闻通讯或等待名单注册。",
    "ar": "لا يتطلب تطبيق iOS تسجيل حساب ويخزن البيانات محليًا، لذا لا يتم نقل أي معلومات شخصية إلينا من مستخدمي التطبيق في أي عمر. على الموقع الإلكتروني، لا نقبل عن قصد اشتراكات في النشرة الإخبارية أو قائمة الانتظار من أي شخص يقل عمره عن 13 عامًا.",
    "uk": "Додаток iOS не вимагає реєстрації облікового запису та зберігає дані локально, тому жодна персональна інформація не передається нам від користувачів додатку будь-якого віку. На веб-сайті ми свідомо не приймаємо підписку на розсилку чи список очікування від осіб молодше 13 років.",
}
T["childrensPrivacy.p3"] = {
    "pl": "Rodzice i opiekunowie mogą w dowolnym momencie zarządzać aplikacją i jej danymi lub je usunąć za pomocą standardowych narzędzi zarządzania urządzeniami iOS. Jeśli uważasz, że dziecko przekazało nam dane osobowe, prosimy o kontakt pod adresem legal@lumenlingo.com, a my niezwłocznie je usuniemy.",
    "de": "Eltern und Erziehungsberechtigte können die App und ihre Daten jederzeit über die Standard-iOS-Geräteverwaltung verwalten oder löschen. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktieren Sie uns bitte unter legal@lumenlingo.com, und wir werden diese umgehend löschen.",
    "es": "Los padres y tutores pueden gestionar o eliminar la aplicación y sus datos en cualquier momento a través de la gestión estándar de dispositivos iOS. Si cree que un menor nos ha proporcionado datos personales, contáctenos en legal@lumenlingo.com y los eliminaremos de inmediato.",
    "fr": "Les parents et tuteurs peuvent gérer ou supprimer l'application et ses données à tout moment via la gestion standard des appareils iOS. Si vous pensez qu'un enfant nous a fourni des données personnelles, veuillez nous contacter à legal@lumenlingo.com et nous les supprimerons rapidement.",
    "ja": "保護者は標準的なiOSデバイス管理を通じていつでもアプリとそのデータを管理または削除できます。お子様が当社に個人データを提供したと思われる場合は、legal@lumenlingo.comまでご連絡ください。速やかに削除いたします。",
    "zh": "家长和监护人可以随时通过标准iOS设备管理来管理或删除应用及其数据。如果您认为儿童向我们提供了个人数据，请联系legal@lumenlingo.com，我们将立即删除。",
    "ar": "يمكن للوالدين والأوصياء إدارة التطبيق وبياناته أو حذفها في أي وقت من خلال إدارة أجهزة iOS القياسية. إذا كنت تعتقد أن طفلاً قد قدم بيانات شخصية لنا، يرجى التواصل معنا على legal@lumenlingo.com وسنقوم بحذفها فورًا.",
    "uk": "Батьки та опікуни можуть керувати додатком та його даними або видалити їх у будь-який час через стандартне управління пристроями iOS. Якщо ви вважаєте, що дитина надала нам персональні дані, зверніться до нас за адресою legal@lumenlingo.com, і ми їх негайно видалимо.",
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
    print("Story 21.1 — Privacy Policy Translation (Part 3/5)")
    print("Sections: dataFlow, howWeUse, dataStorage, thirdParty, childrensPrivacy")
    print("=" * 70)
    apply_translations()
    print("\nPart 3 complete.")

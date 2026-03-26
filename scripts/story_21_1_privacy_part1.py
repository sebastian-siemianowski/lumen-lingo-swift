#!/usr/bin/env python3
"""Story 21.1 — Translate ALL untranslated Privacy Policy keys across 8 non-EN locales.

Scope: ~165 untranslated Privacy.* keys in pl, de, es, fr, ja, zh, ar, uk.
This script identifies keys where locale value == EN value (i.e., still English)
and replaces them with proper legal translations.

All HTML tags (<b>, </b>, <emailLink>, </emailLink>, etc.) are preserved exactly.
"""
import json
import os
import sys

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

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

# ══════════════════════════════════════════════════════════════════════════════
# TRANSLATIONS — organised by Privacy Policy section
# Each dict: { "dotted.key": { "locale": "translation", ... } }
# ══════════════════════════════════════════════════════════════════════════════

T = {}

# ── meta ──────────────────────────────────────────────────────────────────────
T["meta.title"] = {
    "pl": "Polityka prywatności",
    "de": "Datenschutzrichtlinie",
    "es": "Política de privacidad",
    "fr": "Politique de confidentialité",
    "ja": "プライバシーポリシー",
    "zh": "隐私政策",
    "ar": "سياسة الخصوصية",
    "uk": "Політика конфіденційності",
}
T["meta.description"] = {
    "pl": "Przeczytaj, jak Lumenshore dba o Twoje dane w aplikacji LumenLingo na iOS oraz na stronie lumenlingo.com. Podejście stawiające prywatność na pierwszym miejscu, przetwarzanie na urządzeniu, RODO, CCPA i Twoje prawa.",
    "de": "Erfahren Sie, wie Lumenshore Ihre Daten in der LumenLingo iOS-App und auf lumenlingo.com behandelt. Privacy-First-Ansatz, Verarbeitung auf dem Gerät, DSGVO, CCPA und Ihre Rechte.",
    "es": "Lea cómo Lumenshore gestiona sus datos en la aplicación LumenLingo para iOS y en lumenlingo.com. Enfoque centrado en la privacidad, procesamiento en el dispositivo, RGPD, CCPA y sus derechos.",
    "fr": "Découvrez comment Lumenshore traite vos données dans l'application LumenLingo iOS et sur lumenlingo.com. Approche axée sur la confidentialité, traitement sur l'appareil, RGPD, CCPA et vos droits.",
    "ja": "LumenLingo iOSアプリおよびlumenlingo.comにおいて、Lumenshoreがお客様のデータをどのように取り扱っているかをお読みください。プライバシーファーストのアプローチ、デバイス上での処理、GDPR、CCPAおよびお客様の権利。",
    "zh": "了解Lumenshore如何在LumenLingo iOS应用和lumenlingo.com网站上处理您的数据。隐私优先方法、设备端处理、GDPR、CCPA及您的权利。",
    "ar": "اقرأ كيف تتعامل Lumenshore مع بياناتك عبر تطبيق LumenLingo لنظام iOS وموقع lumenlingo.com. نهج الخصوصية أولاً، المعالجة على الجهاز، GDPR، CCPA وحقوقك.",
    "uk": "Дізнайтеся, як Lumenshore обробляє ваші дані в додатку LumenLingo для iOS та на сайті lumenlingo.com. Підхід з пріоритетом конфіденційності, обробка на пристрої, GDPR, CCPA та ваші права.",
}
T["meta.ogTitle"] = {
    "pl": "Polityka prywatności — LumenLingo",
    "de": "Datenschutzrichtlinie — LumenLingo",
    "es": "Política de privacidad — LumenLingo",
    "fr": "Politique de confidentialité — LumenLingo",
    "ja": "プライバシーポリシー — LumenLingo",
    "zh": "隐私政策 — LumenLingo",
    "ar": "سياسة الخصوصية — LumenLingo",
    "uk": "Політика конфіденційності — LumenLingo",
}

# ── breadcrumb / hero ────────────────────────────────────────────────────────
T["breadcrumb"] = {
    "pl": "Polityka prywatności",
    "de": "Datenschutzrichtlinie",
    "es": "Política de privacidad",
    "fr": "Politique de confidentialité",
    "ja": "プライバシーポリシー",
    "zh": "隐私政策",
    "ar": "سياسة الخصوصية",
    "uk": "Політика конфіденційності",
}
T["hero.heading"] = {
    "pl": "Polityka prywatności",
    "de": "Datenschutzrichtlinie",
    "es": "Política de privacidad",
    "fr": "Politique de confidentialité",
    "ja": "プライバシーポリシー",
    "zh": "隐私政策",
    "ar": "سياسة الخصوصية",
    "uk": "Політика конфіденційності",
}
T["hero.subtitle"] = {
    "pl": "Twoja prywatność jest dla nas niezwykle ważna. Oto dokładnie, jak przetwarzamy Twoje dane w aplikacji LumenLingo i na stronie internetowej — prostym językiem, a nie prawniczym żargonem.",
    "de": "Ihre Privatsphäre ist uns sehr wichtig. Hier erfahren Sie genau, wie wir Ihre Daten in der LumenLingo-App und auf der Website verarbeiten — in verständlicher Sprache, nicht in Juristendeutsch.",
    "es": "Su privacidad es muy importante para nosotros. Así es exactamente cómo gestionamos sus datos en la aplicación LumenLingo y en el sitio web — en lenguaje sencillo, no en jerga legal.",
    "fr": "Votre vie privée nous tient profondément à cœur. Voici exactement comment nous traitons vos données dans l'application LumenLingo et sur le site web — en langage clair, pas en jargon juridique.",
    "ja": "お客様のプライバシーは私たちにとって非常に重要です。LumenLingoアプリおよびウェブサイトでのデータの取り扱い方法を、法律用語ではなくわかりやすい言葉でご説明します。",
    "zh": "您的隐私对我们至关重要。以下是我们在LumenLingo应用和网站上处理您数据的确切方式——用通俗的语言，而非法律术语。",
    "ar": "خصوصيتك تهمنا كثيرًا. إليك بالضبط كيف نتعامل مع بياناتك عبر تطبيق LumenLingo والموقع الإلكتروني — بلغة واضحة، وليس بمصطلحات قانونية.",
    "uk": "Ваша конфіденційність надзвичайно важлива для нас. Ось як саме ми обробляємо ваші дані в додатку LumenLingo та на веб-сайті — простою мовою, а не юридичним жаргоном.",
}

# ── overview ──────────────────────────────────────────────────────────────────
T["overview.heading"] = {
    "pl": "Przegląd",
    "de": "Überblick",
    "es": "Descripción general",
    "fr": "Aperçu",
    "ja": "概要",
    "zh": "概述",
    "ar": "نظرة عامة",
    "uk": "Огляд",
}
T["overview.p1"] = {
    "pl": "Lumenshore Limited (\"Lumenshore\", \"my\", \"nas\" lub \"nasz\"), numer firmy 09607326, zarejestrowana pod adresem Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, Anglia, LE4 9HA, prowadzi aplikację mobilną LumenLingo (\"Aplikacja\") oraz stronę internetową lumenlingo.com (\"Strona\"). Niniejsza Polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, przechowujemy i chronimy informacje, gdy korzystasz z jednej z tych platform.",
    "de": "Lumenshore Limited (\"Lumenshore\", \"wir\", \"uns\" oder \"unser\"), Firmennummer 09607326, registriert unter Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA, betreibt die mobile Anwendung LumenLingo (die \"App\") und die Website lumenlingo.com (die \"Website\"). Diese Datenschutzrichtlinie erläutert, wie wir Informationen erheben, verwenden, speichern und schützen, wenn Sie eine der beiden Plattformen nutzen.",
    "es": "Lumenshore Limited (\"Lumenshore\", \"nosotros\", \"nos\" o \"nuestro\"), número de empresa 09607326, registrada en Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, Inglaterra, LE4 9HA, opera la aplicación móvil LumenLingo (la \"Aplicación\") y el sitio web lumenlingo.com (el \"Sitio web\"). Esta Política de privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos la información cuando usted utiliza cualquiera de las dos plataformas.",
    "fr": "Lumenshore Limited (\"Lumenshore\", \"nous\", \"notre\" ou \"nos\"), numéro d'entreprise 09607326, enregistrée à Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, Angleterre, LE4 9HA, exploite l'application mobile LumenLingo (l'\"Application\") et le site web lumenlingo.com (le \"Site web\"). La présente Politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons les informations lorsque vous utilisez l'une ou l'autre de ces plateformes.",
    "ja": "Lumenshore Limited（「Lumenshore」、「当社」、「私たち」）、会社番号09607326、登録住所：Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA は、LumenLingoモバイルアプリケーション（「アプリ」）およびlumenlingo.comウェブサイト（「ウェブサイト」）を運営しています。本プライバシーポリシーは、いずれかのプラットフォームをご利用の際に、当社がどのように情報を収集、使用、保存、保護するかを説明します。",
    "zh": "Lumenshore Limited（\"Lumenshore\"、\"我们\"），公司编号09607326，注册地址：Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA，运营LumenLingo移动应用程序（\"应用\"）和lumenlingo.com网站（\"网站\"）。本隐私政策说明了当您使用任一平台时，我们如何收集、使用、存储和保护信息。",
    "ar": "شركة Lumenshore Limited (\"Lumenshore\"، \"نحن\"، \"لنا\" أو \"خاصتنا\")، رقم الشركة 09607326، المسجلة في Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA، تشغّل تطبيق LumenLingo للهاتف المحمول (\"التطبيق\") وموقع lumenlingo.com (\"الموقع الإلكتروني\"). توضح سياسة الخصوصية هذه كيف نجمع المعلومات ونستخدمها ونخزنها ونحميها عند استخدامك لأي من المنصتين.",
    "uk": "Lumenshore Limited (\"Lumenshore\", \"ми\", \"нас\" або \"наш\"), номер компанії 09607326, зареєстрована за адресою Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA, керує мобільним додатком LumenLingo (\"Додаток\") та веб-сайтом lumenlingo.com (\"Веб-сайт\"). Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо, зберігаємо та захищаємо інформацію, коли ви використовуєте будь-яку з цих платформ.",
}
T["overview.p2"] = {
    "pl": "Stworzyliśmy LumenLingo z architekturą stawiającą prywatność na pierwszym miejscu. W aplikacji iOS Twoje dane edukacyjne są przetwarzane i przechowywane na Twoim urządzeniu i w Twoim osobistym koncie iCloud — nie na naszych serwerach. Na stronie internetowej zbieramy minimalne dane niezbędne do działania usługi i poprawy Twojego doświadczenia. Uważamy, że Twoje dane należą do Ciebie i tak powinno pozostać.",
    "de": "Wir haben LumenLingo mit einer Privacy-First-Architektur entwickelt. In der iOS-App werden Ihre Lerndaten auf Ihrem Gerät und in Ihrem persönlichen iCloud-Konto verarbeitet und gespeichert — nicht auf unseren Servern. Auf der Website erheben wir nur die minimal notwendigen Daten für den Betrieb des Dienstes und die Verbesserung Ihres Erlebnisses. Wir sind der Überzeugung, dass Ihre Daten Ihnen gehören und das so bleiben sollte.",
    "es": "Creamos LumenLingo con una arquitectura que prioriza la privacidad. En la aplicación iOS, sus datos de aprendizaje se procesan y almacenan en su dispositivo y en su cuenta personal de iCloud, no en nuestros servidores. En el sitio web, recopilamos los datos mínimos necesarios para operar el servicio y mejorar su experiencia. Creemos que sus datos le pertenecen y así debería seguir siendo.",
    "fr": "Nous avons conçu LumenLingo avec une architecture axée sur la confidentialité. Dans l'application iOS, vos données d'apprentissage sont traitées et stockées sur votre appareil et dans votre compte iCloud personnel — pas sur nos serveurs. Sur le site web, nous collectons les données minimales nécessaires au fonctionnement du service et à l'amélioration de votre expérience. Nous croyons que vos données vous appartiennent et qu'il devrait en rester ainsi.",
    "ja": "LumenLingoはプライバシーファーストのアーキテクチャで構築されています。iOSアプリでは、学習データはお客様のデバイスと個人のiCloudアカウントで処理・保存され、当社のサーバーには保存されません。ウェブサイトでは、サービスの運営とお客様の体験向上に必要な最小限のデータのみを収集しています。お客様のデータはお客様のものであり、そうあるべきだと考えています。",
    "zh": "我们以隐私优先的架构构建了LumenLingo。在iOS应用中，您的学习数据在您的设备和个人iCloud账户中处理和存储——而非我们的服务器。在网站上，我们仅收集运营服务和改善您体验所需的最少数据。我们相信您的数据属于您，并且应该一直如此。",
    "ar": "لقد بنينا LumenLingo بهندسة تضع الخصوصية أولاً. في تطبيق iOS، تتم معالجة بيانات التعلم الخاصة بك وتخزينها على جهازك وفي حساب iCloud الشخصي الخاص بك — وليس على خوادمنا. على الموقع الإلكتروني، نجمع الحد الأدنى من البيانات اللازمة لتشغيل الخدمة وتحسين تجربتك. نؤمن بأن بياناتك ملك لك ويجب أن تبقى كذلك.",
    "uk": "Ми створили LumenLingo з архітектурою, що ставить конфіденційність на перше місце. В додатку iOS ваші навчальні дані обробляються та зберігаються на вашому пристрої та у вашому особистому обліковому записі iCloud — не на наших серверах. На веб-сайті ми збираємо мінімум даних, необхідних для роботи сервісу та покращення вашого досвіду. Ми вважаємо, що ваші дані належать вам, і так має бути.",
}
T["overview.p3"] = {
    "pl": "Niniejsza polityka jest podzielona na dwie sekcje — Strona internetowa i Aplikacja iOS — abyś mógł szybko znaleźć interesujące Cię informacje.",
    "de": "Diese Richtlinie ist in zwei Abschnitte unterteilt — Website und iOS-App — damit Sie schnell die für Sie relevanten Informationen finden können.",
    "es": "Esta política está organizada en dos secciones — Sitio web y Aplicación iOS — para que pueda encontrar rápidamente la información relevante para usted.",
    "fr": "Cette politique est organisée en deux sections — Site web et Application iOS — afin que vous puissiez rapidement trouver les informations qui vous concernent.",
    "ja": "このポリシーは、ウェブサイトとiOSアプリの2つのセクションに分かれており、関連する情報をすばやく見つけることができます。",
    "zh": "本政策分为两个部分——网站和iOS应用——以便您快速找到与您相关的信息。",
    "ar": "تم تنظيم هذه السياسة في قسمين — الموقع الإلكتروني وتطبيق iOS — حتى تتمكن من العثور بسرعة على المعلومات ذات الصلة بك.",
    "uk": "Ця політика організована у два розділи — Веб-сайт та Додаток iOS — щоб ви могли швидко знайти потрібну інформацію.",
}

# ── websiteData ───────────────────────────────────────────────────────────────
T["websiteData.heading"] = {
    "pl": "Zbieranie danych na stronie internetowej",
    "de": "Datenerfassung auf der Website",
    "es": "Recopilación de datos del sitio web",
    "fr": "Collecte de données du site web",
    "ja": "ウェブサイトのデータ収集",
    "zh": "网站数据收集",
    "ar": "جمع بيانات الموقع الإلكتروني",
    "uk": "Збір даних на веб-сайті",
}
T["websiteData.intro"] = {
    "pl": "Kiedy odwiedzasz lumenlingo.com, możemy zbierać następujące dane:",
    "de": "Wenn Sie lumenlingo.com besuchen, erheben wir möglicherweise die folgenden Daten:",
    "es": "Cuando visita lumenlingo.com, podemos recopilar los siguientes datos:",
    "fr": "Lorsque vous visitez lumenlingo.com, nous pouvons collecter les données suivantes :",
    "ja": "lumenlingo.comにアクセスされた際、以下のデータを収集する場合があります：",
    "zh": "当您访问lumenlingo.com时，我们可能会收集以下数据：",
    "ar": "عند زيارتك لموقع lumenlingo.com، قد نجمع البيانات التالية:",
    "uk": "Коли ви відвідуєте lumenlingo.com, ми можемо збирати наступні дані:",
}
T["websiteData.li1"] = {
    "pl": "<b>Adres e-mail</b> — jeśli zapiszesz się na nasz newsletter lub dołączysz do listy oczekujących. Zbieramy Twój adres e-mail wyłącznie w celu wysyłania aktualizacji produktu i powiadomień o premierze. Możesz zrezygnować z subskrypcji w dowolnym momencie.",
    "de": "<b>E-Mail-Adresse</b> — wenn Sie sich für unseren Newsletter anmelden oder der Warteliste beitreten. Wir erfassen Ihre E-Mail-Adresse ausschließlich, um Ihnen Produktaktualisierungen und Startbenachrichtigungen zu senden. Sie können sich jederzeit abmelden.",
    "es": "<b>Dirección de correo electrónico</b> — si se suscribe a nuestro boletín o se une a la lista de espera. Recopilamos su correo electrónico únicamente para enviarle actualizaciones de productos y notificaciones de lanzamiento. Puede cancelar la suscripción en cualquier momento.",
    "fr": "<b>Adresse e-mail</b> — si vous vous inscrivez à notre newsletter ou rejoignez la liste d'attente. Nous collectons votre adresse e-mail uniquement pour vous envoyer des mises à jour produit et des notifications de lancement. Vous pouvez vous désinscrire à tout moment.",
    "ja": "<b>メールアドレス</b> — ニュースレターに登録された場合、またはウェイトリストに参加された場合。製品アップデートやリリース通知をお送りする目的でのみメールアドレスを収集します。いつでも配信を停止できます。",
    "zh": "<b>电子邮件地址</b> — 如果您订阅了我们的新闻通讯或加入了等待名单。我们仅收集您的电子邮件地址以向您发送产品更新和发布通知。您可以随时取消订阅。",
    "ar": "<b>عنوان البريد الإلكتروني</b> — إذا اشتركت في نشرتنا الإخبارية أو انضممت إلى قائمة الانتظار. نجمع بريدك الإلكتروني فقط لإرسال تحديثات المنتج وإشعارات الإطلاق. يمكنك إلغاء الاشتراك في أي وقت.",
    "uk": "<b>Електронна адреса</b> — якщо ви підпишетеся на нашу розсилку або приєднаєтеся до списку очікування. Ми збираємо вашу електронну адресу виключно для надсилання оновлень продукту та сповіщень про запуск. Ви можете відписатися в будь-який час.",
}
T["websiteData.li2"] = {
    "pl": "<b>Preferencje językowe</b> — jeśli dołączysz do listy oczekujących, rejestrujemy, jakim językiem jesteś zainteresowany, aby dostosować przyszłą komunikację.",
    "de": "<b>Sprachpräferenz</b> — wenn Sie der Warteliste beitreten, erfassen wir, an welcher Sprache Sie interessiert sind, um künftige Kommunikation anzupassen.",
    "es": "<b>Preferencia de idioma</b> — si se une a la lista de espera, registramos en qué idioma está interesado para personalizar futuras comunicaciones.",
    "fr": "<b>Préférence linguistique</b> — si vous rejoignez la liste d'attente, nous enregistrons la langue qui vous intéresse afin de personnaliser nos communications futures.",
    "ja": "<b>言語設定</b> — ウェイトリストに参加された場合、今後のコミュニケーションをカスタマイズするため、お客様が興味のある言語を記録します。",
    "zh": "<b>语言偏好</b> — 如果您加入等待名单，我们会记录您感兴趣的语言，以便定制未来的沟通内容。",
    "ar": "<b>تفضيل اللغة</b> — إذا انضممت إلى قائمة الانتظار، نسجل اللغة التي تهتم بها لتخصيص التواصل المستقبلي.",
    "uk": "<b>Мовні уподобання</b> — якщо ви приєднаєтеся до списку очікування, ми записуємо мову, яка вас цікавить, для персоналізації майбутнього спілкування.",
}
T["websiteData.li3"] = {
    "pl": "<b>Atrybuty kampanii (parametry UTM)</b> — przechwytujemy parametry UTM (źródło, medium, kampania) z adresów URL w sessionStorage przeglądarki, aby zrozumieć, które kanały marketingowe są skuteczne. Te dane nie są powiązane z Twoją tożsamością i są usuwane po zamknięciu karty przeglądarki.",
    "de": "<b>Kampagnenzuordnung (UTM-Parameter)</b> — wir erfassen UTM-Parameter (Quelle, Medium, Kampagne) aus URLs im sessionStorage Ihres Browsers, um zu verstehen, welche Marketingkanäle effektiv sind. Diese Daten sind nicht mit Ihrer Identität verknüpft und werden beim Schließen des Browser-Tabs gelöscht.",
    "es": "<b>Atribución de campañas (parámetros UTM)</b> — capturamos parámetros UTM (fuente, medio, campaña) de las URL en el sessionStorage de su navegador para comprender qué canales de marketing son efectivos. Estos datos no están vinculados a su identidad y se eliminan cuando cierra la pestaña del navegador.",
    "fr": "<b>Attribution de campagne (paramètres UTM)</b> — nous capturons les paramètres UTM (source, medium, campagne) depuis les URL dans le sessionStorage de votre navigateur pour comprendre quels canaux marketing sont efficaces. Ces données ne sont pas liées à votre identité et sont supprimées lorsque vous fermez l'onglet du navigateur.",
    "ja": "<b>キャンペーンアトリビューション（UTMパラメーター）</b> — ブラウザのsessionStorageからURLのUTMパラメーター（ソース、メディア、キャンペーン）を取得し、どのマーケティングチャネルが効果的かを把握します。このデータはお客様の身元とは関連付けられず、ブラウザのタブを閉じると削除されます。",
    "zh": "<b>活动归因（UTM参数）</b> — 我们从浏览器sessionStorage中的URL捕获UTM参数（来源、媒介、活动），以了解哪些营销渠道有效。这些数据与您的身份无关，在您关闭浏览器标签页时会被清除。",
    "ar": "<b>إسناد الحملات (معلمات UTM)</b> — نلتقط معلمات UTM (المصدر، الوسيط، الحملة) من عناوين URL في sessionStorage بمتصفحك لفهم القنوات التسويقية الفعالة. لا ترتبط هذه البيانات بهويتك ويتم مسحها عند إغلاق علامة تبويب المتصفح.",
    "uk": "<b>Атрибуція кампаній (UTM-параметри)</b> — ми збираємо UTM-параметри (джерело, носій, кампанія) з URL-адрес у sessionStorage вашого браузера для розуміння ефективності маркетингових каналів. Ці дані не пов'язані з вашою особою та видаляються при закритті вкладки браузера.",
}
T["websiteData.li4"] = {
    "pl": "<b>Anonimowe wyświetlenia stron</b> — używamy Vercel Analytics, bezplikowej i szanującej prywatność usługi analitycznej, do zliczania odwiedzin stron. Żadne dane osobowe nie są zbierane, żadne pliki cookie nie są ustawiane i żaden indywidualny użytkownik nie jest identyfikowany.",
    "de": "<b>Anonyme Seitenaufrufe</b> — wir verwenden Vercel Analytics, einen cookiefreien, datenschutzfreundlichen Analysedienst, zur Zählung von Seitenaufrufen. Es werden keine personenbezogenen Daten erhoben, keine Cookies gesetzt und keine einzelnen Nutzer identifiziert.",
    "es": "<b>Visualizaciones de páginas anónimas</b> — utilizamos Vercel Analytics, un servicio de análisis sin cookies y respetuoso con la privacidad, para contar las visitas a páginas. No se recopilan datos personales, no se establecen cookies y no se identifican usuarios individuales.",
    "fr": "<b>Pages vues anonymes</b> — nous utilisons Vercel Analytics, un service d'analyse sans cookies et respectueux de la vie privée, pour compter les visites de pages. Aucune donnée personnelle n'est collectée, aucun cookie n'est déposé et aucun utilisateur individuel n'est identifié.",
    "ja": "<b>匿名ページビュー</b> — Cookieを使用しないプライバシー配慮型の分析サービスであるVercel Analyticsを使用してページ訪問数をカウントしています。個人データは収集されず、Cookieは設定されず、個人の特定もされません。",
    "zh": "<b>匿名页面浏览量</b> — 我们使用Vercel Analytics（一种无Cookie、尊重隐私的分析服务）来统计页面访问量。不收集任何个人数据，不设置Cookie，也不识别任何个人用户。",
    "ar": "<b>مشاهدات الصفحات المجهولة</b> — نستخدم Vercel Analytics، وهي خدمة تحليلات خالية من ملفات تعريف الارتباط وتحترم الخصوصية، لحساب زيارات الصفحات. لا يتم جمع أي بيانات شخصية، ولا يتم تعيين ملفات تعريف ارتباط، ولا يتم تحديد هوية أي مستخدم.",
    "uk": "<b>Анонімні перегляди сторінок</b> — ми використовуємо Vercel Analytics, аналітичний сервіс без файлів cookie та з повагою до конфіденційності, для підрахунку відвідувань сторінок. Жодні персональні дані не збираються, файли cookie не встановлюються та жоден окремий користувач не ідентифікується.",
}
T["websiteData.li5"] = {
    "pl": "<b>Anonimowe metryki wydajności</b> — używamy Vercel Speed Insights do mierzenia czasów ładowania stron i podstawowych wskaźników internetowych. Te dane są w pełni anonimowe i pomagają nam utrzymać szybkość strony.",
    "de": "<b>Anonyme Leistungsmetriken</b> — wir verwenden Vercel Speed Insights zur Messung von Seitenladezeiten und Core Web Vitals. Diese Daten sind vollständig anonym und helfen uns, die Website schnell zu halten.",
    "es": "<b>Métricas de rendimiento anónimas</b> — utilizamos Vercel Speed Insights para medir los tiempos de carga de páginas y las métricas web principales. Estos datos son completamente anónimos y nos ayudan a mantener el sitio web rápido.",
    "fr": "<b>Métriques de performance anonymes</b> — nous utilisons Vercel Speed Insights pour mesurer les temps de chargement des pages et les Core Web Vitals. Ces données sont entièrement anonymes et nous aident à maintenir la rapidité du site web.",
    "ja": "<b>匿名パフォーマンス指標</b> — ページの読み込み時間とCore Web Vitalsを測定するためにVercel Speed Insightsを使用しています。これらのデータは完全に匿名であり、ウェブサイトの高速性の維持に役立てています。",
    "zh": "<b>匿名性能指标</b> — 我们使用Vercel Speed Insights来衡量页面加载时间和核心网页指标。这些数据完全匿名，帮助我们保持网站的高速运行。",
    "ar": "<b>مقاييس الأداء المجهولة</b> — نستخدم Vercel Speed Insights لقياس أوقات تحميل الصفحات ومؤشرات الويب الأساسية. هذه البيانات مجهولة الهوية بالكامل وتساعدنا في الحفاظ على سرعة الموقع.",
    "uk": "<b>Анонімні показники продуктивності</b> — ми використовуємо Vercel Speed Insights для вимірювання часу завантаження сторінок та основних веб-показників. Ці дані повністю анонімні та допомагають нам підтримувати швидкість сайту.",
}
T["websiteData.li6"] = {
    "pl": "<b>Dane o błędach i nagrania sesji</b> — używamy Sentry do monitorowania błędów. Za Twoją zgodą, Sentry może nagrywać sesje, aby pomóc nam diagnozować i naprawiać błędy. Szczegóły znajdziesz w sekcji \u201ENagrania sesji Sentry\u201D poniżej.",
    "de": "<b>Fehlerdaten und Sitzungsaufzeichnungen</b> — wir verwenden Sentry zur Fehlerüberwachung. Mit Ihrer Zustimmung kann Sentry Sitzungen aufzeichnen, um uns bei der Diagnose und Behebung von Fehlern zu helfen. Einzelheiten finden Sie im Abschnitt \u201ESentry Session Replay\u201D weiter unten.",
    "es": "<b>Datos de errores y reproducciones de sesión</b> — utilizamos Sentry para el monitoreo de errores. Con su consentimiento, Sentry puede grabar sesiones para ayudarnos a diagnosticar y corregir errores. Consulte la sección «Reproducción de sesiones de Sentry» a continuación para obtener todos los detalles.",
    "fr": "<b>Données d'erreur et enregistrements de session</b> — nous utilisons Sentry pour la surveillance des erreurs. Avec votre consentement, Sentry peut enregistrer des sessions pour nous aider à diagnostiquer et corriger les bugs. Consultez la section « Sentry Session Replay » ci-dessous pour plus de détails.",
    "ja": "<b>エラーデータとセッションリプレイ</b> — エラー監視にSentryを使用しています。お客様の同意を得た上で、Sentryはバグの診断と修正のためにセッションを記録することがあります。詳細は以下の「Sentryセッションリプレイ」セクションをご覧ください。",
    "zh": "<b>错误数据和会话回放</b> — 我们使用Sentry进行错误监控。经您同意后，Sentry可能会录制会话以帮助我们诊断和修复错误。详情请参阅下方的\u201CSentry会话回放\u201D部分。",
    "ar": "<b>بيانات الأخطاء وإعادة تشغيل الجلسات</b> — نستخدم Sentry لمراقبة الأخطاء. بموافقتك، قد يسجل Sentry الجلسات لمساعدتنا في تشخيص الأخطاء وإصلاحها. راجع قسم «إعادة تشغيل جلسات Sentry» أدناه للحصول على التفاصيل الكاملة.",
    "uk": "<b>Дані про помилки та записи сесій</b> — ми використовуємо Sentry для моніторингу помилок. За вашою згодою Sentry може записувати сесії для допомоги у діагностиці та виправленні помилок. Детальніше дивіться у розділі «Запис сесій Sentry» нижче.",
}
T["websiteData.li7"] = {
    "pl": "<b>Adresy IP</b> — Twój adres IP jest tymczasowo przetwarzany przez nasze trasy API w celu ograniczania częstotliwości zapytań (zapobiegania nadużyciom). Adresy IP nie są przez nas przechowywane ani rejestrowane.",
    "de": "<b>IP-Adressen</b> — Ihre IP-Adresse wird vorübergehend von unseren API-Routen zur Ratenbegrenzung (Missbrauchsverhinderung) verarbeitet. IP-Adressen werden von uns nicht gespeichert oder protokolliert.",
    "es": "<b>Direcciones IP</b> — su dirección IP es procesada transitoriamente por nuestras rutas API para la limitación de velocidad (prevención de abusos). Las direcciones IP no son almacenadas ni registradas por nosotros.",
    "fr": "<b>Adresses IP</b> — votre adresse IP est traitée de manière transitoire par nos routes API pour la limitation du débit (prévention des abus). Les adresses IP ne sont pas stockées ni enregistrées par nos soins.",
    "ja": "<b>IPアドレス</b> — お客様のIPアドレスは、レート制限（不正利用防止）のためにAPIルートで一時的に処理されます。IPアドレスは当社により保存または記録されることはありません。",
    "zh": "<b>IP地址</b> — 您的IP地址由我们的API路由临时处理，用于速率限制（防止滥用）。我们不存储或记录IP地址。",
    "ar": "<b>عناوين IP</b> — تتم معالجة عنوان IP الخاص بك مؤقتًا بواسطة مسارات API لتحديد المعدل (منع إساءة الاستخدام). لا يتم تخزين عناوين IP أو تسجيلها من قبلنا.",
    "uk": "<b>IP-адреси</b> — ваша IP-адреса тимчасово обробляється нашими API-маршрутами для обмеження швидкості запитів (запобігання зловживанням). IP-адреси не зберігаються та не реєструються нами.",
}

# ── sentryReplay ──────────────────────────────────────────────────────────────
T["sentryReplay.heading"] = {
    "pl": "Nagrania sesji Sentry",
    "de": "Sentry Session Replay",
    "es": "Reproducción de sesiones de Sentry",
    "fr": "Sentry Session Replay",
    "ja": "Sentryセッションリプレイ",
    "zh": "Sentry会话回放",
    "ar": "إعادة تشغيل جلسات Sentry",
    "uk": "Запис сесій Sentry",
}
T["sentryReplay.p1"] = {
    "pl": "Używamy Sentry (obsługiwanego przez Functional Software, Inc.) do monitorowania błędów na naszej stronie internetowej. Funkcja nagrywania sesji Sentry rejestruje interakcje na stronie (kliknięcia, przewijanie, nawigację), aby pomóc nam odtworzyć i naprawić błędy.",
    "de": "Wir verwenden Sentry (betrieben von Functional Software, Inc.) zur Fehlerüberwachung auf unserer Website. Die Session-Replay-Funktion von Sentry zeichnet Seiteninteraktionen (Klicks, Scrollen, Navigation) auf, um uns zu helfen, Fehler zu reproduzieren und zu beheben.",
    "es": "Utilizamos Sentry (operado por Functional Software, Inc.) para el monitoreo de errores en nuestro sitio web. La función de reproducción de sesiones de Sentry registra las interacciones en la página (clics, desplazamiento, navegación) para ayudarnos a reproducir y corregir errores.",
    "fr": "Nous utilisons Sentry (exploité par Functional Software, Inc.) pour la surveillance des erreurs sur notre site web. La fonction de replay de session de Sentry enregistre les interactions de page (clics, défilements, navigation) pour nous aider à reproduire et corriger les bugs.",
    "ja": "ウェブサイトのエラー監視にSentry（Functional Software, Inc.が運営）を使用しています。Sentryのセッションリプレイ機能は、ページでの操作（クリック、スクロール、ナビゲーション）を記録し、バグの再現と修正に役立てています。",
    "zh": "我们使用Sentry（由Functional Software, Inc.运营）在网站上进行错误监控。Sentry的会话回放功能记录页面交互（点击、滚动、导航），帮助我们重现和修复错误。",
    "ar": "نستخدم Sentry (المدار من قبل Functional Software, Inc.) لمراقبة الأخطاء على موقعنا الإلكتروني. تسجل ميزة إعادة تشغيل الجلسات في Sentry تفاعلات الصفحة (النقرات، التمرير، التنقل) لمساعدتنا في إعادة إنتاج الأخطاء وإصلاحها.",
    "uk": "Ми використовуємо Sentry (керований Functional Software, Inc.) для моніторингу помилок на нашому веб-сайті. Функція запису сесій Sentry реєструє взаємодії на сторінці (кліки, прокрутку, навігацію) для допомоги у відтворенні та виправленні помилок.",
}
T["sentryReplay.p2"] = {
    "pl": "<b>Częstotliwość próbkowania:</b> Nagrania sesji są rejestrowane dla około 0,1% normalnych sesji przeglądania. Gdy wystąpi błąd, częstotliwość nagrywania wzrasta do 100% tylko dla danej sesji — co pomaga nam zrozumieć, co dokładnie doprowadziło do błędu.",
    "de": "<b>Sampling-Raten:</b> Sitzungsaufzeichnungen werden bei etwa 0,1 % der normalen Browsing-Sitzungen erfasst. Tritt ein Fehler auf, steigt die Aufzeichnungsrate für diese Sitzung auf 100 % — dies hilft uns zu verstehen, was genau zum Fehler geführt hat.",
    "es": "<b>Tasas de muestreo:</b> Las reproducciones de sesiones se capturan en aproximadamente el 0,1 % de las sesiones de navegación normales. Cuando ocurre un error, la tasa de captura aumenta al 100 % solo para esa sesión — esto nos ayuda a comprender exactamente qué provocó el error.",
    "fr": "<b>Taux d'échantillonnage :</b> Les enregistrements de session sont capturés pour environ 0,1 % des sessions de navigation normales. Lorsqu'une erreur survient, le taux de capture passe à 100 % pour cette session uniquement — cela nous aide à comprendre exactement ce qui a provoqué le bug.",
    "ja": "<b>サンプリングレート：</b>セッションリプレイは通常のブラウジングセッションの約0.1%で記録されます。エラーが発生した場合、そのセッションに限りキャプチャ率が100%に増加します。これにより、バグの原因を正確に把握できます。",
    "zh": "<b>采样率：</b>会话回放在约0.1%的正常浏览会话中被捕获。当发生错误时，该会话的捕获率会增加到100%——这有助于我们准确了解导致错误的原因。",
    "ar": "<b>معدلات أخذ العينات:</b> يتم التقاط إعادات تشغيل الجلسات لحوالي 0.1% من جلسات التصفح العادية. عند حدوث خطأ، يرتفع معدل الالتقاط إلى 100% لتلك الجلسة فقط — مما يساعدنا على فهم ما أدى إلى الخطأ بالضبط.",
    "uk": "<b>Частота вибірки:</b> Записи сесій фіксуються для приблизно 0,1% звичайних сесій перегляду. Коли виникає помилка, частота запису збільшується до 100% тільки для цієї сесії — це допомагає нам зрозуміти, що саме призвело до помилки.",
}
T["sentryReplay.p3"] = {
    "pl": "<b>Co jest rejestrowane:</b> Nawigacja po stronach, kliknięcia, przewijanie i zawartość ekranu. Wszystkie dane wpisywane w formularzach (takie jak pola newslettera i listy oczekujących) są maskowane w celu ochrony Twojej prywatności. Treści multimedialne nie są rejestrowane.",
    "de": "<b>Was aufgezeichnet wird:</b> Seitennavigation, Klicks, Scrollen und Bildschirminhalte. Alle Texteingaben in Formularen (wie Newsletter- und Wartelisten-Felder) werden zum Schutz Ihrer Privatsphäre maskiert. Medieninhalte werden nicht erfasst.",
    "es": "<b>Qué se captura:</b> Navegación por páginas, clics, desplazamiento y contenido de pantalla. Todas las entradas de texto en formularios (como los campos de boletín y lista de espera) se ocultan para proteger su privacidad. Los contenidos multimedia no se capturan.",
    "fr": "<b>Ce qui est capturé :</b> Navigation entre les pages, clics, défilements et contenu de l'écran. Toutes les saisies de texte dans les formulaires (comme les champs de newsletter et de liste d'attente) sont masquées pour protéger votre vie privée. Les contenus multimédias ne sont pas capturés.",
    "ja": "<b>記録される内容：</b>ページナビゲーション、クリック、スクロール、画面コンテンツ。フォームへのテキスト入力（ニュースレターやウェイトリストのフィールドなど）はすべてプライバシー保護のためマスクされます。メディアコンテンツはキャプチャされません。",
    "zh": "<b>捕获的内容：</b>页面导航、点击、滚动和屏幕内容。表单中的所有文本输入（如新闻通讯和等待名单字段）均被遮蔽以保护您的隐私。媒体内容不被捕获。",
    "ar": "<b>ما يتم التقاطه:</b> التنقل بين الصفحات والنقرات والتمرير ومحتوى الشاشة. يتم إخفاء جميع المدخلات النصية في النماذج (مثل حقول النشرة الإخبارية وقائمة الانتظار) لحماية خصوصيتك. لا يتم التقاط المحتوى الإعلامي.",
    "uk": "<b>Що записується:</b> Навігація по сторінках, кліки, прокрутка та вміст екрану. Усі текстові введення у формах (наприклад, поля розсилки та списку очікування) маскуються для захисту вашої конфіденційності. Медіаконтент не фіксується.",
}
T["sentryReplay.p4"] = {
    "pl": "<b>Dokąd trafiają dane:</b> Dane nagrań sesji są przesyłane na serwery Sentry w Stanach Zjednoczonych. Są przechowywane zgodnie z polityką retencji danych Sentry (zazwyczaj 90 dni).",
    "de": "<b>Wohin die Daten gesendet werden:</b> Replay-Daten werden an die Server von Sentry in den USA übertragen. Sie werden gemäß der Datenaufbewahrungsrichtlinie von Sentry gespeichert (in der Regel 90 Tage).",
    "es": "<b>A dónde se envían los datos:</b> Los datos de reproducción se transmiten a los servidores de Sentry en Estados Unidos. Se conservan según la política de retención de datos de Sentry (normalmente 90 días).",
    "fr": "<b>Où sont envoyées les données :</b> Les données de replay sont transmises aux serveurs de Sentry aux États-Unis. Elles sont conservées conformément à la politique de rétention des données de Sentry (généralement 90 jours).",
    "ja": "<b>送信先：</b>リプレイデータは米国のSentryサーバーに送信されます。Sentryのデータ保持ポリシー（通常90日間）に従って保持されます。",
    "zh": "<b>数据发送至：</b>回放数据被传输到位于美国的Sentry服务器。根据Sentry的数据保留政策保留（通常为90天）。",
    "ar": "<b>أين تُرسل البيانات:</b> يتم نقل بيانات إعادة التشغيل إلى خوادم Sentry في الولايات المتحدة. يتم الاحتفاظ بها وفقًا لسياسة الاحتفاظ بالبيانات الخاصة بـ Sentry (عادةً 90 يومًا).",
    "uk": "<b>Куди надсилаються дані:</b> Дані записів сесій передаються на сервери Sentry у Сполучених Штатах. Вони зберігаються відповідно до політики збереження даних Sentry (зазвичай 90 днів).",
}
T["sentryReplay.p5"] = {
    "pl": "<b>Twoja kontrola:</b> Nagrania sesji są aktywne wyłącznie wtedy, gdy wyraziłeś zgodę za pośrednictwem naszego banera zgody na pliki cookie. Możesz zmienić swoją preferencję w dowolnym momencie.",
    "de": "<b>Ihre Kontrolle:</b> Sitzungsaufzeichnungen sind nur aktiv, wenn Sie über unser Cookie-Zustimmungsbanner zugestimmt haben. Sie können Ihre Einstellung jederzeit ändern.",
    "es": "<b>Su control:</b> Las reproducciones de sesiones solo están activas si ha dado su consentimiento a través de nuestro banner de consentimiento de cookies. Puede cambiar su preferencia en cualquier momento.",
    "fr": "<b>Votre contrôle :</b> Les enregistrements de session ne sont actifs que si vous avez donné votre consentement via notre bannière de consentement aux cookies. Vous pouvez modifier votre préférence à tout moment.",
    "ja": "<b>お客様の管理：</b>セッションリプレイは、Cookie同意バナーで同意された場合にのみ有効です。設定はいつでも変更できます。",
    "zh": "<b>您的控制权：</b>会话回放仅在您通过Cookie同意横幅表示同意后才会激活。您可以随时更改您的偏好设置。",
    "ar": "<b>تحكمك:</b> لا تكون إعادات تشغيل الجلسات نشطة إلا إذا منحت موافقتك عبر شعار الموافقة على ملفات تعريف الارتباط. يمكنك تغيير تفضيلاتك في أي وقت.",
    "uk": "<b>Ваш контроль:</b> Записи сесій активні лише тоді, коли ви надали згоду через наш банер згоди на файли cookie. Ви можете змінити свої уподобання в будь-який час.",
}

# ── vercelAnalytics ───────────────────────────────────────────────────────────
T["vercelAnalytics.heading"] = {
    "pl": "Vercel Analytics i Speed Insights",
    "de": "Vercel Analytics & Speed Insights",
    "es": "Vercel Analytics y Speed Insights",
    "fr": "Vercel Analytics & Speed Insights",
    "ja": "Vercel Analytics & Speed Insights",
    "zh": "Vercel Analytics 和 Speed Insights",
    "ar": "Vercel Analytics و Speed Insights",
    "uk": "Vercel Analytics та Speed Insights",
}
T["vercelAnalytics.p1"] = {
    "pl": "Na naszej stronie internetowej używamy Vercel Analytics i Vercel Speed Insights. Usługi te są zaprojektowane z myślą o prywatności:",
    "de": "Wir verwenden Vercel Analytics und Vercel Speed Insights auf unserer Website. Diese Dienste sind von Grund auf datenschutzfreundlich konzipiert:",
    "es": "Utilizamos Vercel Analytics y Vercel Speed Insights en nuestro sitio web. Estos servicios están diseñados con la privacidad como prioridad:",
    "fr": "Nous utilisons Vercel Analytics et Vercel Speed Insights sur notre site web. Ces services sont conçus dans le respect de la vie privée :",
    "ja": "ウェブサイトではVercel AnalyticsとVercel Speed Insightsを使用しています。これらのサービスは設計段階からプライバシーに配慮しています：",
    "zh": "我们在网站上使用Vercel Analytics和Vercel Speed Insights。这些服务在设计上注重隐私保护：",
    "ar": "نستخدم Vercel Analytics و Vercel Speed Insights على موقعنا الإلكتروني. تم تصميم هذه الخدمات مع مراعاة الخصوصية:",
    "uk": "На нашому веб-сайті ми використовуємо Vercel Analytics та Vercel Speed Insights. Ці сервіси розроблені з урахуванням конфіденційності:",
}
T["vercelAnalytics.li1"] = {
    "pl": "<b>Bez plików cookie</b> — Vercel Analytics nie ustawia żadnych plików cookie na Twoim urządzeniu.",
    "de": "<b>Keine Cookies</b> — Vercel Analytics setzt keine Cookies auf Ihrem Gerät.",
    "es": "<b>Sin cookies</b> — Vercel Analytics no establece ninguna cookie en su dispositivo.",
    "fr": "<b>Aucun cookie</b> — Vercel Analytics ne dépose aucun cookie sur votre appareil.",
    "ja": "<b>Cookieなし</b> — Vercel Analyticsはお客様のデバイスにCookieを設定しません。",
    "zh": "<b>无Cookie</b> — Vercel Analytics不会在您的设备上设置任何Cookie。",
    "ar": "<b>بدون ملفات تعريف الارتباط</b> — لا يقوم Vercel Analytics بتعيين أي ملفات تعريف ارتباط على جهازك.",
    "uk": "<b>Без файлів cookie</b> — Vercel Analytics не встановлює жодних файлів cookie на вашому пристрої.",
}
T["vercelAnalytics.li2"] = {
    "pl": "<b>Brak danych osobowych</b> — nie zbiera się adresów IP, odcisków palcy urządzeń ani identyfikatorów użytkowników.",
    "de": "<b>Keine personenbezogenen Daten</b> — es werden keine IP-Adressen, Geräte-Fingerprints oder Benutzerkennungen erfasst.",
    "es": "<b>Sin datos personales</b> — no se recopilan direcciones IP, huellas digitales de dispositivos ni identificadores de usuarios.",
    "fr": "<b>Aucune donnée personnelle</b> — aucune adresse IP, empreinte d'appareil ou identifiant utilisateur n'est collecté.",
    "ja": "<b>個人データなし</b> — IPアドレス、デバイスフィンガープリント、ユーザー識別子は収集されません。",
    "zh": "<b>无个人数据</b> — 不收集IP地址、设备指纹或用户标识符。",
    "ar": "<b>بدون بيانات شخصية</b> — لا يتم جمع عناوين IP أو بصمات الأجهزة أو معرفات المستخدمين.",
    "uk": "<b>Без персональних даних</b> — IP-адреси, відбитки пристроїв та ідентифікатори користувачів не збираються.",
}
T["vercelAnalytics.li3"] = {
    "pl": "<b>Tylko dane zagregowane</b> — widzimy łączne liczby wyświetleń stron i metryki wydajności, ale nie możemy identyfikować poszczególnych odwiedzających.",
    "de": "<b>Nur aggregierte Daten</b> — wir sehen Gesamtzahlen von Seitenaufrufen und Leistungsmetriken, können aber keine einzelnen Besucher identifizieren.",
    "es": "<b>Solo datos agregados</b> — vemos los recuentos totales de páginas vistas y las métricas de rendimiento, pero no podemos identificar a visitantes individuales.",
    "fr": "<b>Données agrégées uniquement</b> — nous voyons les compteurs totaux de pages vues et les métriques de performance, mais nous ne pouvons pas identifier les visiteurs individuels.",
    "ja": "<b>集約データのみ</b> — ページビューの総数とパフォーマンス指標は確認できますが、個人の訪問者を特定することはできません。",
    "zh": "<b>仅聚合数据</b> — 我们看到的是总页面浏览量和性能指标，但无法识别个人访问者。",
    "ar": "<b>بيانات مجمعة فقط</b> — نرى إجمالي عدد مشاهدات الصفحات ومقاييس الأداء، لكن لا يمكننا تحديد هوية الزوار الأفراد.",
    "uk": "<b>Лише агреговані дані</b> — ми бачимо загальну кількість переглядів сторінок та показники продуктивності, але не можемо ідентифікувати окремих відвідувачів.",
}
T["vercelAnalytics.p2"] = {
    "pl": "Obie usługi są obsługiwane przez Vercel Inc. Dane są przetwarzane w infrastrukturze Vercel. Więcej informacji znajdziesz w <vercelPrivacy>Polityce prywatności Vercel</vercelPrivacy>.",
    "de": "Beide Dienste werden von Vercel Inc. betrieben. Daten werden auf der Infrastruktur von Vercel verarbeitet. Weitere Informationen finden Sie in der <vercelPrivacy>Datenschutzrichtlinie von Vercel</vercelPrivacy>.",
    "es": "Ambos servicios son operados por Vercel Inc. Los datos se procesan en la infraestructura de Vercel. Consulte la <vercelPrivacy>Política de privacidad de Vercel</vercelPrivacy> para más detalles.",
    "fr": "Les deux services sont exploités par Vercel Inc. Les données sont traitées sur l'infrastructure de Vercel. Consultez la <vercelPrivacy>Politique de confidentialité de Vercel</vercelPrivacy> pour plus de détails.",
    "ja": "両サービスはVercel Inc.が運営しています。データはVercelのインフラストラクチャで処理されます。詳細は<vercelPrivacy>Vercelのプライバシーポリシー</vercelPrivacy>をご覧ください。",
    "zh": "两项服务均由Vercel Inc.运营。数据在Vercel的基础设施上处理。详情请参阅<vercelPrivacy>Vercel隐私政策</vercelPrivacy>。",
    "ar": "يتم تشغيل كلتا الخدمتين بواسطة Vercel Inc. تتم معالجة البيانات على بنية Vercel التحتية. راجع <vercelPrivacy>سياسة خصوصية Vercel</vercelPrivacy> لمزيد من التفاصيل.",
    "uk": "Обидва сервіси керуються Vercel Inc. Дані обробляються в інфраструктурі Vercel. Детальніше дивіться у <vercelPrivacy>Політиці конфіденційності Vercel</vercelPrivacy>.",
}

# Due to the enormous size, I'm continuing with a separate file for the remaining sections.
# This script handles sections: meta, breadcrumb, hero, overview, websiteData, sentryReplay, vercelAnalytics
# The next script (part 2) will handle: customEvents, serviceWorker, appData, whatWeDontCollect, legalBasis
# Part 3: dataFlow, howWeUse, dataStorage, thirdParty, childrensPrivacy
# Part 4: dataRetention, yourRights, policyUpdates, contactUs
# Part 5: subProcessors, internationalTransfers, aggregateData, brazilPrivacy, euRepresentative

def apply_translations():
    """Apply translations from T dict to all locale files."""
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
    print("Story 21.1 — Privacy Policy Translation (Part 1/5)")
    print("Sections: meta, breadcrumb, hero, overview, websiteData, sentryReplay, vercelAnalytics")
    print("=" * 70)
    apply_translations()
    print("\nPart 1 complete.")

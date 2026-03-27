#!/usr/bin/env python3
"""
Epic 17 remaining stories:
- 17.2: Online Safety Act (noUGC clause)
- 17.3: GDPR exemption from arbitration
- 17.6: Defined terms
- 17.7: Mutual indemnification
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# ── Story 17.2: Online Safety Act 2023 — noUGC clause ──
online_safety = {
    "en": {
        "heading": "Online Safety Act 2023",
        "p1": "LumenLingo does not currently permit users to generate, upload, or share content with other users. All flashcard content is provided by Lumenshore and all learning data remains private to each individual user.",
        "p2": "Because there is no user-generated content, the duties in Part 3 of the Online Safety Act 2023 relating to user-to-user services (including section 10, illegal content duties) do not currently apply to LumenLingo.",
        "p3": "If we introduce features that allow users to create or share content with other users in the future, we will update these Terms to include content moderation commitments, a reporting mechanism, review timelines, and an appeals process in accordance with the Online Safety Act 2023.",
    },
    "pl": {
        "heading": "Ustawa o bezpieczeństwie w sieci 2023",
        "p1": "LumenLingo obecnie nie pozwala użytkownikom na tworzenie, przesyłanie ani udostępnianie treści innym użytkownikom. Wszystkie treści fiszek są dostarczane przez Lumenshore, a wszystkie dane nauki pozostają prywatne dla każdego użytkownika.",
        "p2": "Ponieważ nie ma treści generowanych przez użytkowników, obowiązki wynikające z Części 3 Ustawy o bezpieczeństwie w sieci 2023 (Online Safety Act 2023) dotyczące usług typu użytkownik-użytkownik (w tym sekcja 10, obowiązki dotyczące nielegalnych treści) nie mają obecnie zastosowania do LumenLingo.",
        "p3": "Jeśli w przyszłości wprowadzimy funkcje umożliwiające użytkownikom tworzenie lub udostępnianie treści innym użytkownikom, zaktualizujemy niniejsze Warunki o zobowiązania dotyczące moderacji treści, mechanizm zgłaszania, terminy przeglądu oraz proces odwoławczy zgodnie z Ustawą o bezpieczeństwie w sieci 2023.",
    },
    "de": {
        "heading": "Online Safety Act 2023",
        "p1": "LumenLingo erlaubt es Nutzern derzeit nicht, Inhalte zu erstellen, hochzuladen oder mit anderen Nutzern zu teilen. Alle Karteikarten-Inhalte werden von Lumenshore bereitgestellt und alle Lerndaten bleiben für jeden einzelnen Nutzer privat.",
        "p2": "Da keine nutzergenerierten Inhalte vorhanden sind, gelten die Pflichten aus Teil 3 des Online Safety Act 2023 bezüglich Nutzer-zu-Nutzer-Diensten (einschließlich Abschnitt 10, Pflichten bei illegalen Inhalten) derzeit nicht für LumenLingo.",
        "p3": "Sollten wir in Zukunft Funktionen einführen, die es Nutzern ermöglichen, Inhalte zu erstellen oder mit anderen Nutzern zu teilen, werden wir diese Bedingungen aktualisieren und Verpflichtungen zur Inhaltsmoderation, einen Meldemechanismus, Prüffristen und ein Beschwerdeverfahren gemäß dem Online Safety Act 2023 aufnehmen.",
    },
    "es": {
        "heading": "Ley de Seguridad en Línea 2023",
        "p1": "LumenLingo actualmente no permite a los usuarios generar, cargar ni compartir contenido con otros usuarios. Todo el contenido de las tarjetas es proporcionado por Lumenshore y todos los datos de aprendizaje permanecen privados para cada usuario individual.",
        "p2": "Dado que no existe contenido generado por usuarios, los deberes de la Parte 3 de la Ley de Seguridad en Línea 2023 (Online Safety Act 2023) relativos a los servicios de usuario a usuario (incluida la sección 10, deberes sobre contenido ilegal) no se aplican actualmente a LumenLingo.",
        "p3": "Si en el futuro introducimos funciones que permitan a los usuarios crear o compartir contenido con otros usuarios, actualizaremos estas Condiciones para incluir compromisos de moderación de contenido, un mecanismo de denuncia, plazos de revisión y un proceso de apelación de conformidad con la Ley de Seguridad en Línea 2023.",
    },
    "fr": {
        "heading": "Online Safety Act 2023",
        "p1": "LumenLingo ne permet actuellement pas aux utilisateurs de créer, télécharger ou partager du contenu avec d'autres utilisateurs. Tout le contenu des fiches est fourni par Lumenshore et toutes les données d'apprentissage restent privées pour chaque utilisateur.",
        "p2": "En l'absence de contenu généré par les utilisateurs, les obligations de la Partie 3 de l'Online Safety Act 2023 relatives aux services d'utilisateur à utilisateur (y compris la section 10, obligations en matière de contenu illégal) ne s'appliquent pas actuellement à LumenLingo.",
        "p3": "Si nous introduisons à l'avenir des fonctionnalités permettant aux utilisateurs de créer ou partager du contenu avec d'autres utilisateurs, nous mettrons à jour les présentes Conditions pour inclure des engagements de modération de contenu, un mécanisme de signalement, des délais de révision et une procédure d'appel conformément à l'Online Safety Act 2023.",
    },
    "ja": {
        "heading": "オンライン安全法 2023",
        "p1": "LumenLingo は現在、ユーザーがコンテンツを生成、アップロード、または他のユーザーと共有することを許可していません。すべてのフラッシュカードコンテンツは Lumenshore が提供し、すべての学習データは各ユーザー個人に帰属します。",
        "p2": "ユーザー生成コンテンツが存在しないため、オンライン安全法 2023（Online Safety Act 2023）第 3 部のユーザー間サービスに関する義務（第 10 条の違法コンテンツに関する義務を含む）は、現在 LumenLingo には適用されません。",
        "p3": "将来、ユーザーがコンテンツを作成または他のユーザーと共有できる機能を導入する場合は、オンライン安全法 2023 に従い、コンテンツモデレーションの確約、報告メカニズム、レビュー期限、および異議申立てプロセスを含むよう本規約を更新します。",
    },
    "zh": {
        "heading": "《2023 年在线安全法》",
        "p1": "LumenLingo 目前不允许用户生成、上传或与其他用户共享内容。所有闪卡内容均由 Lumenshore 提供，所有学习数据对每位用户均为私密。",
        "p2": "由于不存在用户生成内容，《2023 年在线安全法》（Online Safety Act 2023）第 3 部分关于用户对用户服务的义务（包括第 10 条的非法内容义务）目前不适用于 LumenLingo。",
        "p3": "如果我们将来推出允许用户创建或与其他用户共享内容的功能，我们将更新本条款，纳入内容审核承诺、举报机制、审查时限和申诉流程，以符合《2023 年在线安全法》的要求。",
    },
    "ar": {
        "heading": "قانون السلامة على الإنترنت 2023",
        "p1": "لا يسمح LumenLingo حاليًا للمستخدمين بإنشاء أو تحميل أو مشاركة المحتوى مع مستخدمين آخرين. يتم توفير جميع محتويات البطاقات التعليمية بواسطة Lumenshore وتبقى جميع بيانات التعلم خاصة بكل مستخدم على حدة.",
        "p2": "نظرًا لعدم وجود محتوى من إنشاء المستخدمين، فإن الالتزامات الواردة في الجزء الثالث من قانون السلامة على الإنترنت 2023 (Online Safety Act 2023) المتعلقة بخدمات المستخدم إلى المستخدم (بما في ذلك القسم 10، التزامات المحتوى غير القانوني) لا تنطبق حاليًا على LumenLingo.",
        "p3": "إذا قمنا بإدخال ميزات تسمح للمستخدمين بإنشاء أو مشاركة المحتوى مع مستخدمين آخرين في المستقبل، فسنقوم بتحديث هذه الشروط لتشمل التزامات إشراف المحتوى وآلية الإبلاغ والجداول الزمنية للمراجعة وعملية الاستئناف وفقًا لقانون السلامة على الإنترنت 2023.",
    },
    "uk": {
        "heading": "Закон про безпеку в Інтернеті 2023",
        "p1": "LumenLingo наразі не дозволяє користувачам створювати, завантажувати або поширювати контент серед інших користувачів. Весь контент карток надається Lumenshore, а всі дані навчання залишаються приватними для кожного окремого користувача.",
        "p2": "Оскільки контент, створений користувачами, відсутній, обов'язки Частини 3 Закону про безпеку в Інтернеті 2023 (Online Safety Act 2023) щодо послуг між користувачами (включаючи розділ 10, обов'язки щодо незаконного контенту) наразі не застосовуються до LumenLingo.",
        "p3": "Якщо в майбутньому ми впровадимо функції, що дозволять користувачам створювати або ділитися контентом з іншими користувачами, ми оновимо ці Умови, включивши зобов'язання щодо модерації контенту, механізм повідомлення, терміни розгляду та процедуру оскарження відповідно до Закону про безпеку в Інтернеті 2023.",
    },
}

# ── Story 17.3: GDPR Claims Exemption ──
gdpr_exemption = {
    "en": "Nothing in this dispute resolution clause limits or restricts your right to bring a claim before a competent court for the infringement of your data protection rights under GDPR Article 79 or the Data Protection Act 2018, section 167. Data protection claims may always be brought before the courts regardless of any dispute resolution, arbitration, or class action waiver provisions in these Terms.",
    "pl": "Żadne postanowienie niniejszej klauzuli rozstrzygania sporów nie ogranicza ani nie narusza Twojego prawa do wniesienia powództwa do właściwego sądu w związku z naruszeniem Twoich praw do ochrony danych na podstawie art. 79 RODO lub sekcji 167 Ustawy o ochronie danych osobowych 2018 (Data Protection Act 2018). Roszczenia dotyczące ochrony danych mogą być zawsze wnoszone do sądów niezależnie od jakichkolwiek postanowień dotyczących rozstrzygania sporów, arbitrażu lub zrzeczenia się pozwu zbiorowego zawartych w niniejszych Warunkach.",
    "de": "Nichts in dieser Streitbeilegungsklausel beschränkt Ihr Recht, wegen Verletzung Ihrer Datenschutzrechte gemäß Artikel 79 DSGVO oder Abschnitt 167 des Data Protection Act 2018 Klage vor einem zuständigen Gericht zu erheben. Datenschutzansprüche können ungeachtet etwaiger Streitbeilegungsvereinbarungen, Schiedsklauseln oder Verzichtserklärungen auf Sammelklagen in diesen Bedingungen stets vor Gericht geltend gemacht werden.",
    "es": "Nada en esta cláusula de resolución de disputas limita o restringe su derecho a presentar una reclamación ante un tribunal competente por la infracción de sus derechos de protección de datos en virtud del artículo 79 del RGPD o la sección 167 de la Ley de Protección de Datos 2018 (Data Protection Act 2018). Las reclamaciones de protección de datos pueden presentarse siempre ante los tribunales, independientemente de cualquier disposición de resolución de disputas, arbitraje o renuncia a acciones colectivas contenida en estas Condiciones.",
    "fr": "Rien dans cette clause de règlement des litiges ne limite ni ne restreint votre droit d'intenter une action devant un tribunal compétent pour violation de vos droits en matière de protection des données en vertu de l'article 79 du RGPD ou de la section 167 du Data Protection Act 2018. Les réclamations relatives à la protection des données peuvent toujours être portées devant les tribunaux, indépendamment de toute disposition relative au règlement des litiges, à l'arbitrage ou à la renonciation aux actions collectives contenue dans les présentes Conditions.",
    "ja": "本紛争解決条項のいかなる規定も、GDPR 第 79 条またはデータ保護法 2018（Data Protection Act 2018）第 167 条に基づくデータ保護権の侵害について管轄裁判所に訴訟を提起する権利を制限するものではありません。データ保護に関する請求は、本規約の紛争解決、仲裁、またはクラスアクション放棄の規定にかかわらず、常に裁判所に提起することができます。",
    "zh": "本争议解决条款中的任何内容均不限制或约束您根据 GDPR 第 79 条或《2018 年数据保护法》（Data Protection Act 2018）第 167 条就侵犯数据保护权利向有管辖权的法院提起诉讼的权利。无论本条款中的争议解决、仲裁或集体诉讼放弃条款如何规定，数据保护索赔始终可以向法院提起。",
    "ar": "لا شيء في بند تسوية النزاعات هذا يحد أو يقيد حقك في رفع دعوى أمام محكمة مختصة بشأن انتهاك حقوقك في حماية البيانات بموجب المادة 79 من اللائحة العامة لحماية البيانات (GDPR) أو القسم 167 من قانون حماية البيانات 2018 (Data Protection Act 2018). يمكن دائمًا رفع دعاوى حماية البيانات أمام المحاكم بغض النظر عن أي أحكام لتسوية النزاعات أو التحكيم أو التنازل عن الدعاوى الجماعية الواردة في هذه الشروط.",
    "uk": "Жодне положення цієї клаузули вирішення спорів не обмежує ваше право подати позов до компетентного суду щодо порушення ваших прав на захист даних відповідно до статті 79 GDPR або розділу 167 Закону про захист даних 2018 року (Data Protection Act 2018). Позови щодо захисту даних завжди можуть бути подані до суду незалежно від будь-яких положень щодо вирішення спорів, арбітражу або відмови від колективних позовів, що містяться в цих Умовах.",
}

# ── Story 17.6: Defined Terms ──
definitions = {
    "en": {
        "heading": "Defined Terms",
        "intro": "The following terms, when capitalised in these Terms of Service, have the meanings set out below:",
        "service": "<b>\"Service\"</b> means the LumenLingo language-learning platform, including the App, the Website, and all related features, content, and functionality provided by Lumenshore Limited.",
        "app": "<b>\"App\"</b> means the LumenLingo iOS application, distributed via the Apple App Store, including all updates and new versions.",
        "website": "<b>\"Website\"</b> means the LumenLingo website located at lumenlingo.com and all its subdomains.",
        "userData": "<b>\"User Data\"</b> means personal data and learning data associated with your use of the Service, including progress, preferences, and practice history.",
        "content": "<b>\"Content\"</b> means all text, images, audio, flashcards, translations, and other materials provided by Lumenshore through the Service.",
        "ip": "<b>\"Intellectual Property\"</b> means all copyrights, trademarks, patents, trade secrets, and other proprietary rights in the Service and its Content.",
        "subscription": "<b>\"Subscription\"</b> means a recurring paid plan that grants access to Premium features of the Service, purchased through the Apple App Store.",
        "freeTier": "<b>\"Free Tier\"</b> means the version of the Service available without a Subscription, which provides limited access to Content and features.",
        "premiumTier": "<b>\"Premium Tier\"</b> means the version of the Service available to Subscribers, which provides full access to all Content and features.",
    },
    "pl": {
        "heading": "Zdefiniowane terminy",
        "intro": "Następujące terminy, pisane wielką literą w niniejszych Warunkach korzystania z usługi, mają znaczenie określone poniżej:",
        "service": "<b>\"Usługa\"</b> oznacza platformę do nauki języków LumenLingo, w tym Aplikację, Stronę internetową oraz wszystkie powiązane funkcje, treści i funkcjonalności dostarczane przez Lumenshore Limited.",
        "app": "<b>\"Aplikacja\"</b> oznacza aplikację LumenLingo na iOS, dystrybuowaną za pośrednictwem Apple App Store, wraz ze wszystkimi aktualizacjami i nowymi wersjami.",
        "website": "<b>\"Strona internetowa\"</b> oznacza stronę LumenLingo pod adresem lumenlingo.com oraz wszystkie jej subdomeny.",
        "userData": "<b>\"Dane użytkownika\"</b> oznaczają dane osobowe i dane edukacyjne związane z korzystaniem z Usługi, w tym postępy, preferencje i historię ćwiczeń.",
        "content": "<b>\"Treść\"</b> oznacza wszystkie teksty, obrazy, materiały audio, fiszki, tłumaczenia i inne materiały dostarczane przez Lumenshore za pośrednictwem Usługi.",
        "ip": "<b>\"Własność intelektualna\"</b> oznacza wszystkie prawa autorskie, znaki towarowe, patenty, tajemnice handlowe i inne prawa własności do Usługi i jej Treści.",
        "subscription": "<b>\"Subskrypcja\"</b> oznacza cykliczny płatny plan zapewniający dostęp do funkcji Premium Usługi, zakupiony za pośrednictwem Apple App Store.",
        "freeTier": "<b>\"Wariant bezpłatny\"</b> oznacza wersję Usługi dostępną bez Subskrypcji, zapewniającą ograniczony dostęp do Treści i funkcji.",
        "premiumTier": "<b>\"Wariant Premium\"</b> oznacza wersję Usługi dostępną dla Subskrybentów, zapewniającą pełny dostęp do wszystkich Treści i funkcji.",
    },
    "de": {
        "heading": "Begriffsdefinitionen",
        "intro": "Die folgenden Begriffe haben, wenn sie in diesen Nutzungsbedingungen großgeschrieben werden, die nachfolgend festgelegte Bedeutung:",
        "service": "<b>\"Dienst\"</b> bezeichnet die LumenLingo-Sprachlernplattform, einschließlich der App, der Website und aller zugehörigen Funktionen, Inhalte und Funktionalitäten, die von Lumenshore Limited bereitgestellt werden.",
        "app": "<b>\"App\"</b> bezeichnet die iOS-Anwendung LumenLingo, die über den Apple App Store vertrieben wird, einschließlich aller Updates und neuen Versionen.",
        "website": "<b>\"Website\"</b> bezeichnet die LumenLingo-Website unter lumenlingo.com und alle Subdomains.",
        "userData": "<b>\"Nutzerdaten\"</b> bezeichnen personenbezogene Daten und Lerndaten im Zusammenhang mit Ihrer Nutzung des Dienstes, einschließlich Fortschritt, Präferenzen und Übungshistorie.",
        "content": "<b>\"Inhalte\"</b> bezeichnen alle Texte, Bilder, Audiodateien, Karteikarten, Übersetzungen und andere Materialien, die von Lumenshore über den Dienst bereitgestellt werden.",
        "ip": "<b>\"Geistiges Eigentum\"</b> bezeichnet alle Urheberrechte, Marken, Patente, Geschäftsgeheimnisse und sonstige Eigentumsrechte am Dienst und seinen Inhalten.",
        "subscription": "<b>\"Abonnement\"</b> bezeichnet ein wiederkehrendes kostenpflichtiges Angebot, das Zugang zu Premium-Funktionen des Dienstes gewährt und über den Apple App Store erworben wird.",
        "freeTier": "<b>\"Kostenlose Version\"</b> bezeichnet die Version des Dienstes, die ohne Abonnement verfügbar ist und eingeschränkten Zugang zu Inhalten und Funktionen bietet.",
        "premiumTier": "<b>\"Premium-Version\"</b> bezeichnet die Version des Dienstes, die Abonnenten zur Verfügung steht und vollständigen Zugang zu allen Inhalten und Funktionen bietet.",
    },
    "es": {
        "heading": "Términos definidos",
        "intro": "Los siguientes términos, cuando aparezcan en mayúscula en estas Condiciones del Servicio, tendrán los significados establecidos a continuación:",
        "service": "<b>\"Servicio\"</b> significa la plataforma de aprendizaje de idiomas LumenLingo, incluyendo la Aplicación, el Sitio Web y todas las funciones, contenidos y funcionalidades relacionadas proporcionadas por Lumenshore Limited.",
        "app": "<b>\"Aplicación\"</b> significa la aplicación iOS de LumenLingo, distribuida a través de Apple App Store, incluyendo todas las actualizaciones y nuevas versiones.",
        "website": "<b>\"Sitio Web\"</b> significa el sitio de LumenLingo ubicado en lumenlingo.com y todos sus subdominios.",
        "userData": "<b>\"Datos del Usuario\"</b> significa los datos personales y de aprendizaje asociados a su uso del Servicio, incluyendo progreso, preferencias e historial de práctica.",
        "content": "<b>\"Contenido\"</b> significa todo texto, imágenes, audio, tarjetas de aprendizaje, traducciones y otros materiales proporcionados por Lumenshore a través del Servicio.",
        "ip": "<b>\"Propiedad Intelectual\"</b> significa todos los derechos de autor, marcas comerciales, patentes, secretos comerciales y otros derechos de propiedad sobre el Servicio y su Contenido.",
        "subscription": "<b>\"Suscripción\"</b> significa un plan de pago recurrente que otorga acceso a las funciones Premium del Servicio, adquirido a través de Apple App Store.",
        "freeTier": "<b>\"Versión Gratuita\"</b> significa la versión del Servicio disponible sin Suscripción, que proporciona acceso limitado al Contenido y funciones.",
        "premiumTier": "<b>\"Versión Premium\"</b> significa la versión del Servicio disponible para Suscriptores, que proporciona acceso completo a todo el Contenido y funciones.",
    },
    "fr": {
        "heading": "Termes définis",
        "intro": "Les termes suivants, lorsqu'ils sont utilisés avec une majuscule dans les présentes Conditions de Service, ont les significations définies ci-dessous :",
        "service": "<b>\"Service\"</b> désigne la plateforme d'apprentissage des langues LumenLingo, y compris l'Application, le Site Web et toutes les fonctionnalités, contenus et fonctions associés fournis par Lumenshore Limited.",
        "app": "<b>\"Application\"</b> désigne l'application iOS LumenLingo, distribuée via l'Apple App Store, y compris toutes les mises à jour et nouvelles versions.",
        "website": "<b>\"Site Web\"</b> désigne le site LumenLingo situé à l'adresse lumenlingo.com et tous ses sous-domaines.",
        "userData": "<b>\"Données Utilisateur\"</b> désignent les données personnelles et les données d'apprentissage liées à votre utilisation du Service, y compris la progression, les préférences et l'historique de pratique.",
        "content": "<b>\"Contenu\"</b> désigne tous les textes, images, fichiers audio, fiches, traductions et autres matériels fournis par Lumenshore via le Service.",
        "ip": "<b>\"Propriété Intellectuelle\"</b> désigne tous les droits d'auteur, marques, brevets, secrets commerciaux et autres droits de propriété sur le Service et son Contenu.",
        "subscription": "<b>\"Abonnement\"</b> désigne un plan payant récurrent donnant accès aux fonctionnalités Premium du Service, acheté via l'Apple App Store.",
        "freeTier": "<b>\"Version Gratuite\"</b> désigne la version du Service disponible sans Abonnement, offrant un accès limité au Contenu et aux fonctionnalités.",
        "premiumTier": "<b>\"Version Premium\"</b> désigne la version du Service disponible pour les Abonnés, offrant un accès complet à tous les Contenus et fonctionnalités.",
    },
    "ja": {
        "heading": "定義用語",
        "intro": "本利用規約において大文字で使用される以下の用語は、下記に定める意味を有します：",
        "service": "<b>「サービス」</b>とは、LumenLingo 言語学習プラットフォームを意味し、アプリ、ウェブサイト、および Lumenshore Limited が提供するすべての関連機能、コンテンツ、機能を含みます。",
        "app": "<b>「アプリ」</b>とは、Apple App Store を通じて配信される LumenLingo iOS アプリケーションを意味し、すべてのアップデートおよび新バージョンを含みます。",
        "website": "<b>「ウェブサイト」</b>とは、lumenlingo.com に所在する LumenLingo ウェブサイトおよびそのすべてのサブドメインを意味します。",
        "userData": "<b>「ユーザーデータ」</b>とは、サービスの利用に関連する個人データおよび学習データ（進捗、設定、練習履歴など）を意味します。",
        "content": "<b>「コンテンツ」</b>とは、Lumenshore がサービスを通じて提供するすべてのテキスト、画像、音声、フラッシュカード、翻訳、その他のマテリアルを意味します。",
        "ip": "<b>「知的財産」</b>とは、サービスおよびそのコンテンツに関するすべての著作権、商標、特許、営業秘密、その他の所有権を意味します。",
        "subscription": "<b>「サブスクリプション」</b>とは、Apple App Store を通じて購入された、サービスのプレミアム機能へのアクセスを付与する定期課金プランを意味します。",
        "freeTier": "<b>「無料プラン」</b>とは、サブスクリプションなしで利用可能なサービスのバージョンを意味し、コンテンツおよび機能への限定的なアクセスを提供します。",
        "premiumTier": "<b>「プレミアムプラン」</b>とは、サブスクライバーが利用可能なサービスのバージョンを意味し、すべてのコンテンツおよび機能への完全なアクセスを提供します。",
    },
    "zh": {
        "heading": "定义术语",
        "intro": "以下术语在本服务条款中大写使用时，具有以下所定义的含义：",
        "service": '<b>\u201c服务\u201d</b>指 LumenLingo 语言学习平台，包括应用程序、网站以及 Lumenshore Limited 提供的所有相关功能、内容和功能。',
        "app": '<b>\u201c应用程序\u201d</b>指通过 Apple App Store 分发的 LumenLingo iOS 应用程序，包括所有更新和新版本。',
        "website": '<b>\u201c网站\u201d</b>指位于 lumenlingo.com 的 LumenLingo 网站及其所有子域名。',
        "userData": '<b>\u201c用户数据\u201d</b>指与您使用服务相关的个人数据和学习数据，包括进度、偏好和练习历史。',
        "content": '<b>\u201c内容\u201d</b>指 Lumenshore 通过服务提供的所有文本、图片、音频、闪卡、翻译和其他材料。',
        "ip": '<b>\u201c知识产权\u201d</b>指服务及其内容中的所有版权、商标、专利、商业秘密和其他专有权利。',
        "subscription": '<b>\u201c订阅\u201d</b>指通过 Apple App Store 购买的、授予服务高级功能访问权限的定期付费计划。',
        "freeTier": '<b>\u201c免费版\u201d</b>指无需订阅即可使用的服务版本，提供对内容和功能的有限访问。',
        "premiumTier": '<b>\u201c高级版\u201d</b>指订阅者可使用的服务版本，提供对所有内容和功能的完全访问。',
    },
    "ar": {
        "heading": "المصطلحات المعرّفة",
        "intro": "تحمل المصطلحات التالية، عند كتابتها بحرف كبير في شروط الخدمة هذه، المعاني المحددة أدناه:",
        "service": "<b>\"الخدمة\"</b> تعني منصة تعلم اللغات LumenLingo، بما في ذلك التطبيق والموقع الإلكتروني وجميع الميزات والمحتويات والوظائف ذات الصلة التي تقدمها Lumenshore Limited.",
        "app": "<b>\"التطبيق\"</b> يعني تطبيق LumenLingo لنظام iOS، الموزع عبر Apple App Store، بما في ذلك جميع التحديثات والإصدارات الجديدة.",
        "website": "<b>\"الموقع الإلكتروني\"</b> يعني موقع LumenLingo الموجود على lumenlingo.com وجميع نطاقاته الفرعية.",
        "userData": "<b>\"بيانات المستخدم\"</b> تعني البيانات الشخصية وبيانات التعلم المرتبطة باستخدامك للخدمة، بما في ذلك التقدم والتفضيلات وسجل التمارين.",
        "content": "<b>\"المحتوى\"</b> يعني جميع النصوص والصور والملفات الصوتية والبطاقات التعليمية والترجمات والمواد الأخرى التي تقدمها Lumenshore عبر الخدمة.",
        "ip": "<b>\"الملكية الفكرية\"</b> تعني جميع حقوق التأليف والنشر والعلامات التجارية وبراءات الاختراع والأسرار التجارية وغيرها من حقوق الملكية في الخدمة ومحتواها.",
        "subscription": "<b>\"الاشتراك\"</b> يعني خطة مدفوعة متكررة تمنح الوصول إلى ميزات الخدمة المميزة، يتم شراؤها عبر Apple App Store.",
        "freeTier": "<b>\"الإصدار المجاني\"</b> يعني إصدار الخدمة المتاح بدون اشتراك، والذي يوفر وصولاً محدودًا إلى المحتوى والميزات.",
        "premiumTier": "<b>\"الإصدار المميز\"</b> يعني إصدار الخدمة المتاح للمشتركين، والذي يوفر وصولاً كاملاً إلى جميع المحتويات والميزات.",
    },
    "uk": {
        "heading": "Визначення термінів",
        "intro": "Наступні терміни, коли вони написані з великої літери в цих Умовах обслуговування, мають значення, визначені нижче:",
        "service": "<b>\"Сервіс\"</b> означає платформу вивчення мов LumenLingo, включаючи Додаток, Веб-сайт та всі пов'язані функції, контент і функціональні можливості, що надаються Lumenshore Limited.",
        "app": "<b>\"Додаток\"</b> означає додаток LumenLingo для iOS, що розповсюджується через Apple App Store, включаючи всі оновлення та нові версії.",
        "website": "<b>\"Веб-сайт\"</b> означає веб-сайт LumenLingo за адресою lumenlingo.com та всі його субдомени.",
        "userData": "<b>\"Дані користувача\"</b> означають персональні дані та дані навчання, пов'язані з вашим використанням Сервісу, включаючи прогрес, налаштування та історію практики.",
        "content": "<b>\"Контент\"</b> означає всі тексти, зображення, аудіо, картки, переклади та інші матеріали, що надаються Lumenshore через Сервіс.",
        "ip": "<b>\"Інтелектуальна власність\"</b> означає всі авторські права, торговельні марки, патенти, комерційні таємниці та інші майнові права на Сервіс та його Контент.",
        "subscription": "<b>\"Підписка\"</b> означає регулярний платний план, що надає доступ до Преміум-функцій Сервісу, придбаний через Apple App Store.",
        "freeTier": "<b>\"Безкоштовна версія\"</b> означає версію Сервісу, доступну без Підписки, що надає обмежений доступ до Контенту та функцій.",
        "premiumTier": "<b>\"Преміум-версія\"</b> означає версію Сервісу, доступну для Підписників, що надає повний доступ до всього Контенту та функцій.",
    },
}

# ── Story 17.7: Mutual Indemnification ──
mutual_indemnity = {
    "en": "Lumenshore Limited will indemnify, defend, and hold harmless you from and against any third-party claims, damages, and reasonable legal costs arising directly from: (a) Lumenshore's negligence or wilful misconduct; (b) Lumenshore's breach of its obligations under these Terms; or (c) Lumenshore's infringement of your intellectual property rights. This reciprocal indemnity is subject to the same limitations of liability set out in these Terms.",
    "pl": "Lumenshore Limited zobowiązuje się do zabezpieczenia, obrony i zwolnienia Cię od wszelkich roszczeń osób trzecich, szkód i uzasadnionych kosztów prawnych wynikających bezpośrednio z: (a) zaniedbania lub umyślnego zachowania Lumenshore; (b) naruszenia przez Lumenshore zobowiązań wynikających z niniejszych Warunków; lub (c) naruszenia przez Lumenshore Twoich praw własności intelektualnej. Niniejsze wzajemne zobowiązanie podlega tym samym ograniczeniom odpowiedzialności określonym w niniejszych Warunkach.",
    "de": "Lumenshore Limited stellt Sie von Ansprüchen Dritter, Schäden und angemessenen Rechtskosten frei, die unmittelbar entstehen aus: (a) Fahrlässigkeit oder vorsätzlichem Fehlverhalten von Lumenshore; (b) Verletzung der Pflichten von Lumenshore aus diesen Bedingungen; oder (c) Verletzung Ihrer geistigen Eigentumsrechte durch Lumenshore. Diese gegenseitige Freistellung unterliegt denselben Haftungsbeschränkungen, die in diesen Bedingungen festgelegt sind.",
    "es": "Lumenshore Limited le indemnizará, defenderá y eximirá de toda responsabilidad frente a reclamaciones de terceros, daños y costes legales razonables derivados directamente de: (a) la negligencia o conducta dolosa de Lumenshore; (b) el incumplimiento por parte de Lumenshore de sus obligaciones en virtud de estas Condiciones; o (c) la infracción de sus derechos de propiedad intelectual por parte de Lumenshore. Esta indemnización recíproca está sujeta a las mismas limitaciones de responsabilidad establecidas en estas Condiciones.",
    "fr": "Lumenshore Limited vous indemnisera, défendra et dégagera de toute responsabilité contre les réclamations de tiers, les dommages et les frais juridiques raisonnables résultant directement de : (a) la négligence ou la faute intentionnelle de Lumenshore ; (b) le manquement de Lumenshore à ses obligations au titre des présentes Conditions ; ou (c) la violation de vos droits de propriété intellectuelle par Lumenshore. Cette indemnité réciproque est soumise aux mêmes limitations de responsabilité énoncées dans les présentes Conditions.",
    "ja": "Lumenshore Limited は、以下に直接起因する第三者の請求、損害、および合理的な法的費用からお客様を補償、防御し、免責するものとします：(a) Lumenshore の過失または故意の不正行為、(b) 本規約に基づく Lumenshore の義務違反、(c) Lumenshore によるお客様の知的財産権の侵害。この相互補償は、本規約に定められた同一の責任制限に従います。",
    "zh": "Lumenshore Limited 将就以下事项直接引起的任何第三方索赔、损害和合理法律费用对您进行赔偿、辩护并使您免受损害：(a) Lumenshore 的疏忽或故意不当行为；(b) Lumenshore 违反本条款下的义务；(c) Lumenshore 侵犯您的知识产权。此互惠赔偿受本条款中规定的相同责任限制的约束。",
    "ar": "ستقوم Lumenshore Limited بتعويضك والدفاع عنك وحمايتك من أي مطالبات من أطراف ثالثة وأضرار وتكاليف قانونية معقولة ناشئة مباشرة عن: (أ) إهمال Lumenshore أو سوء سلوكها المتعمد؛ (ب) إخلال Lumenshore بالتزاماتها بموجب هذه الشروط؛ أو (ج) انتهاك Lumenshore لحقوق ملكيتك الفكرية. يخضع هذا التعويض المتبادل لنفس حدود المسؤولية المنصوص عليها في هذه الشروط.",
    "uk": "Lumenshore Limited відшкодує, захистить та звільнить вас від будь-яких претензій третіх осіб, збитків та обґрунтованих юридичних витрат, що безпосередньо виникають з: (а) недбалості або умисного порушення з боку Lumenshore; (б) порушення Lumenshore своїх зобов'язань за цими Умовами; (в) порушення Lumenshore ваших прав інтелектуальної власності. Ця взаємна компенсація підлягає тим самим обмеженням відповідальності, що встановлені в цих Умовах.",
}

applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # 17.2: Online Safety Act
    if "onlineSafety" not in data["Terms"]:
        data["Terms"]["onlineSafety"] = online_safety[loc]
        print(f"  [{loc}] Added Terms.onlineSafety")
        applied += 1

    # 17.3: GDPR exemption
    if "gdprExemption" not in data["Terms"]["disputeResolution"]:
        data["Terms"]["disputeResolution"]["gdprExemption"] = gdpr_exemption[loc]
        print(f"  [{loc}] Added Terms.disputeResolution.gdprExemption")
        applied += 1

    # 17.6: Definitions
    if "definitions" not in data["Terms"]:
        data["Terms"]["definitions"] = definitions[loc]
        print(f"  [{loc}] Added Terms.definitions")
        applied += 1

    # 17.7: Mutual indemnification
    if "mutual" not in data["Terms"]["indemnification"]:
        data["Terms"]["indemnification"]["mutual"] = mutual_indemnity[loc]
        print(f"  [{loc}] Added Terms.indemnification.mutual")
        applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

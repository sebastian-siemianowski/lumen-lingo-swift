#!/usr/bin/env python3
"""Stories 9.2-9.6: Add remaining GDPR Art. 13 compliance sections to Privacy Policy."""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

# ── Story 9.2: Art. 13(2)(e) Statutory/Contractual Requirement ──
DATA_PROVISION_REQ = {
    "en": {
        "heading": "Whether Providing Data Is Obligatory",
        "p1": "Under UK GDPR Article 13(2)(e), we must inform you whether the provision of personal data is a statutory or contractual requirement, and the possible consequences of failing to provide such data:",
        "contractualHeading": "Contractual Requirements",
        "contractualLi1": "<b>Account creation data</b> (email address via Clerk authentication) — this is a contractual requirement. Without it, we cannot create your account or provide the Service.",
        "contractualLi2": "<b>Subscription payment data</b> (processed by Apple/RevenueCat) — this is a contractual requirement for premium features. Without it, we cannot process your payment or grant premium access.",
        "voluntaryHeading": "Voluntary Provision",
        "voluntaryLi1": "<b>Analytics consent</b> (Vercel Analytics, Sentry Session Replay) — this is entirely voluntary. Declining has no impact on your ability to use the Service.",
        "voluntaryLi2": "<b>Feedback and support emails</b> — voluntary. If you do not provide contact details, we may be unable to respond to your query.",
        "statutoryP1": "There is no statutory (legal) requirement to provide your personal data to us. All data provision is either contractual (necessary for the service) or voluntary."
    },
    "pl": {
        "heading": "Czy podanie danych jest obowiązkowe",
        "p1": "Zgodnie z art. 13 ust. 2 lit. e) UK GDPR, musimy poinformować Cię, czy podanie danych osobowych jest wymogiem ustawowym lub umownym, oraz o ewentualnych konsekwencjach niepodania takich danych:",
        "contractualHeading": "Wymogi umowne",
        "contractualLi1": "<b>Dane do utworzenia konta</b> (adres e-mail poprzez uwierzytelnianie Clerk) — jest to wymóg umowny. Bez tego nie możemy utworzyć Twojego konta ani świadczyć Usługi.",
        "contractualLi2": "<b>Dane dotyczące płatności za subskrypcję</b> (przetwarzane przez Apple/RevenueCat) — jest to wymóg umowny dla funkcji premium. Bez tego nie możemy przetworzyć Twojej płatności ani przyznać dostępu premium.",
        "voluntaryHeading": "Dobrowolne podanie danych",
        "voluntaryLi1": "<b>Zgoda na analitykę</b> (Vercel Analytics, Sentry Session Replay) — jest to całkowicie dobrowolne. Odmowa nie ma wpływu na możliwość korzystania z Usługi.",
        "voluntaryLi2": "<b>Opinie i e-maile wsparcia</b> — dobrowolne. Jeśli nie podasz danych kontaktowych, możemy nie być w stanie odpowiedzieć na Twoje zapytanie.",
        "statutoryP1": "Nie ma ustawowego (prawnego) wymogu podania nam danych osobowych. Wszelkie podanie danych jest albo umowne (niezbędne do świadczenia usługi), albo dobrowolne."
    },
    "de": {
        "heading": "Ob die Bereitstellung von Daten verpflichtend ist",
        "p1": "Gemäß Artikel 13 Absatz 2 Buchstabe e UK GDPR müssen wir Sie darüber informieren, ob die Bereitstellung personenbezogener Daten eine gesetzliche oder vertragliche Pflicht ist, und über die möglichen Folgen einer Nichtbereitstellung:",
        "contractualHeading": "Vertragliche Anforderungen",
        "contractualLi1": "<b>Daten zur Kontoerstellung</b> (E-Mail-Adresse über Clerk-Authentifizierung) — dies ist eine vertragliche Anforderung. Ohne diese können wir Ihr Konto nicht erstellen oder den Dienst bereitstellen.",
        "contractualLi2": "<b>Abonnement-Zahlungsdaten</b> (verarbeitet durch Apple/RevenueCat) — dies ist eine vertragliche Anforderung für Premium-Funktionen. Ohne diese können wir Ihre Zahlung nicht verarbeiten.",
        "voluntaryHeading": "Freiwillige Bereitstellung",
        "voluntaryLi1": "<b>Analytics-Einwilligung</b> (Vercel Analytics, Sentry Session Replay) — dies ist vollständig freiwillig. Eine Ablehnung hat keinen Einfluss auf Ihre Nutzung des Dienstes.",
        "voluntaryLi2": "<b>Feedback und Support-E-Mails</b> — freiwillig. Wenn Sie keine Kontaktdaten angeben, können wir möglicherweise nicht auf Ihre Anfrage antworten.",
        "statutoryP1": "Es besteht keine gesetzliche Pflicht, uns Ihre personenbezogenen Daten bereitzustellen. Alle Datenbereitstellungen sind entweder vertraglich (für den Dienst erforderlich) oder freiwillig."
    },
    "es": {
        "heading": "Si el suministro de datos es obligatorio",
        "p1": "De conformidad con el artículo 13(2)(e) del UK GDPR, debemos informarle si el suministro de datos personales es un requisito legal o contractual, y las posibles consecuencias de no proporcionarlos:",
        "contractualHeading": "Requisitos contractuales",
        "contractualLi1": "<b>Datos de creación de cuenta</b> (dirección de correo electrónico mediante autenticación Clerk) — es un requisito contractual. Sin ellos, no podemos crear su cuenta ni proporcionar el Servicio.",
        "contractualLi2": "<b>Datos de pago de suscripción</b> (procesados por Apple/RevenueCat) — es un requisito contractual para funciones premium. Sin ellos, no podemos procesar su pago.",
        "voluntaryHeading": "Suministro voluntario",
        "voluntaryLi1": "<b>Consentimiento de analítica</b> (Vercel Analytics, Sentry Session Replay) — es totalmente voluntario. Rechazarlo no afecta su capacidad de usar el Servicio.",
        "voluntaryLi2": "<b>Comentarios y correos de soporte</b> — voluntario. Si no proporciona datos de contacto, es posible que no podamos responder a su consulta.",
        "statutoryP1": "No existe un requisito legal (estatutario) para proporcionarnos sus datos personales. Todo suministro de datos es contractual (necesario para el servicio) o voluntario."
    },
    "fr": {
        "heading": "Le caractère obligatoire ou non de la fourniture des données",
        "p1": "Conformément à l'article 13(2)(e) du UK GDPR, nous devons vous informer si la fourniture de données personnelles est une obligation légale ou contractuelle, et des conséquences éventuelles du défaut de fourniture :",
        "contractualHeading": "Exigences contractuelles",
        "contractualLi1": "<b>Données de création de compte</b> (adresse e-mail via l'authentification Clerk) — il s'agit d'une exigence contractuelle. Sans cela, nous ne pouvons pas créer votre compte ni fournir le Service.",
        "contractualLi2": "<b>Données de paiement d'abonnement</b> (traitées par Apple/RevenueCat) — il s'agit d'une exigence contractuelle pour les fonctionnalités premium. Sans cela, nous ne pouvons pas traiter votre paiement.",
        "voluntaryHeading": "Fourniture volontaire",
        "voluntaryLi1": "<b>Consentement aux analyses</b> (Vercel Analytics, Sentry Session Replay) — ceci est entièrement volontaire. Le refus n'a aucun impact sur votre utilisation du Service.",
        "voluntaryLi2": "<b>Retours et e-mails de support</b> — volontaire. Si vous ne fournissez pas vos coordonnées, nous pourrions ne pas être en mesure de répondre à votre demande.",
        "statutoryP1": "Il n'existe aucune obligation légale (statutaire) de nous fournir vos données personnelles. Toute fourniture de données est soit contractuelle (nécessaire au service), soit volontaire."
    },
    "ja": {
        "heading": "データ提供の義務性について",
        "p1": "UK GDPR第13条第2項(e)に基づき、個人データの提供が法的または契約上の要件であるかどうか、およびデータを提供しない場合の考えられる結果について、お知らせする必要があります：",
        "contractualHeading": "契約上の要件",
        "contractualLi1": "<b>アカウント作成データ</b>（Clerk認証によるメールアドレス）— これは契約上の要件です。これがないと、アカウントを作成したりサービスを提供したりすることができません。",
        "contractualLi2": "<b>サブスクリプション支払いデータ</b>（Apple/RevenueCatが処理）— これはプレミアム機能の契約上の要件です。これがないと、お支払いを処理することができません。",
        "voluntaryHeading": "任意の提供",
        "voluntaryLi1": "<b>分析の同意</b>（Vercel Analytics、Sentry Session Replay）— これは完全に任意です。拒否してもサービスの利用には影響しません。",
        "voluntaryLi2": "<b>フィードバックとサポートメール</b>— 任意。連絡先を提供されない場合、お問い合わせに回答できない場合があります。",
        "statutoryP1": "当社に個人データを提供する法的（制定法上の）要件はありません。すべてのデータ提供は、契約上（サービスに必要）または任意のいずれかです。"
    },
    "zh": {
        "heading": "提供数据是否为必要",
        "p1": "根据UK GDPR第13条第2款(e)项，我们必须告知您提供个人数据是否为法定或合同要求，以及不提供此类数据的可能后果：",
        "contractualHeading": "合同要求",
        "contractualLi1": "<b>账户创建数据</b>（通过Clerk认证的电子邮件地址）— 这是合同要求。没有这些信息，我们无法创建您的账户或提供服务。",
        "contractualLi2": "<b>订阅支付数据</b>（由Apple/RevenueCat处理）— 这是高级功能的合同要求。没有这些信息，我们无法处理您的付款。",
        "voluntaryHeading": "自愿提供",
        "voluntaryLi1": "<b>分析同意</b>（Vercel Analytics、Sentry Session Replay）— 这完全是自愿的。拒绝不会影响您使用服务的能力。",
        "voluntaryLi2": "<b>反馈和支持邮件</b>— 自愿。如果您不提供联系方式，我们可能无法回复您的查询。",
        "statutoryP1": "您没有法定（法律）义务向我们提供个人数据。所有数据提供要么是合同性的（服务所需），要么是自愿的。"
    },
    "ar": {
        "heading": "هل تقديم البيانات إلزامي",
        "p1": "بموجب المادة 13(2)(هـ) من UK GDPR، يجب علينا إبلاغك بما إذا كان تقديم البيانات الشخصية متطلباً قانونياً أو تعاقدياً، والعواقب المحتملة لعدم تقديم هذه البيانات:",
        "contractualHeading": "المتطلبات التعاقدية",
        "contractualLi1": "<b>بيانات إنشاء الحساب</b> (عنوان البريد الإلكتروني عبر مصادقة Clerk) — هذا متطلب تعاقدي. بدونه، لا يمكننا إنشاء حسابك أو تقديم الخدمة.",
        "contractualLi2": "<b>بيانات دفع الاشتراك</b> (معالجة بواسطة Apple/RevenueCat) — هذا متطلب تعاقدي للميزات المتميزة. بدونه، لا يمكننا معالجة دفعتك.",
        "voluntaryHeading": "التقديم الطوعي",
        "voluntaryLi1": "<b>موافقة التحليلات</b> (Vercel Analytics، Sentry Session Replay) — هذا طوعي بالكامل. الرفض لا يؤثر على قدرتك على استخدام الخدمة.",
        "voluntaryLi2": "<b>رسائل الملاحظات والدعم</b> — طوعي. إذا لم تقدم بيانات الاتصال، فقد لا نتمكن من الرد على استفسارك.",
        "statutoryP1": "لا يوجد متطلب قانوني (تشريعي) لتقديم بياناتك الشخصية لنا. جميع عمليات تقديم البيانات إما تعاقدية (ضرورية للخدمة) أو طوعية."
    },
    "uk": {
        "heading": "Чи є надання даних обов'язковим",
        "p1": "Відповідно до статті 13(2)(e) UK GDPR, ми повинні повідомити вас, чи є надання персональних даних законодавчою або договірною вимогою, та про можливі наслідки ненадання таких даних:",
        "contractualHeading": "Договірні вимоги",
        "contractualLi1": "<b>Дані для створення облікового запису</b> (адреса електронної пошти через автентифікацію Clerk) — це договірна вимога. Без цього ми не можемо створити ваш обліковий запис або надати Послугу.",
        "contractualLi2": "<b>Дані оплати підписки</b> (обробляються Apple/RevenueCat) — це договірна вимога для преміум-функцій. Без цього ми не можемо обробити ваш платіж.",
        "voluntaryHeading": "Добровільне надання",
        "voluntaryLi1": "<b>Згода на аналітику</b> (Vercel Analytics, Sentry Session Replay) — це повністю добровільно. Відмова не впливає на вашу можливість користуватися Послугою.",
        "voluntaryLi2": "<b>Відгуки та електронні листи підтримки</b> — добровільно. Якщо ви не надасте контактні дані, ми можемо не мати можливості відповісти на ваш запит.",
        "statutoryP1": "Немає законодавчої (статутної) вимоги надавати нам ваші персональні дані. Все надання даних є або договірним (необхідним для послуги), або добровільним."
    }
}

# ── Story 9.3: Automated Decision-Making (Art. 22) ──
AUTOMATED_DECISIONS = {
    "en": {
        "heading": "Automated Decision-Making and Profiling",
        "p1": "We do not use your personal data for automated decision-making that produces legal effects or similarly significant effects on you, as defined by UK GDPR Article 22.",
        "p2": "Our app uses a spaced-repetition algorithm to optimise your learning schedule. This is pedagogical optimisation only — it determines when to show you a flashcard, not any decision with legal or similarly significant effects on you.",
        "p3": "If we ever introduce automated decision-making with legal or significant effects in the future, we will update this policy and ensure you have the right to: (a) obtain human intervention, (b) express your point of view, and (c) contest the decision, as required by UK GDPR Article 22(3)."
    },
    "pl": {
        "heading": "Zautomatyzowane podejmowanie decyzji i profilowanie",
        "p1": "Nie wykorzystujemy Twoich danych osobowych do zautomatyzowanego podejmowania decyzji, które wywołują skutki prawne lub podobnie istotne skutki dla Ciebie, zgodnie z art. 22 UK GDPR.",
        "p2": "Nasza aplikacja wykorzystuje algorytm powtórek rozłożonych w czasie do optymalizacji Twojego harmonogramu nauki. Jest to wyłącznie optymalizacja pedagogiczna — określa, kiedy pokazać Ci fiszkę, a nie jakąkolwiek decyzję o skutkach prawnych lub podobnie istotnych.",
        "p3": "Jeśli w przyszłości wprowadzimy zautomatyzowane podejmowanie decyzji o skutkach prawnych lub istotnych, zaktualizujemy niniejszą politykę i zapewnimy Ci prawo do: (a) uzyskania interwencji ludzkiej, (b) wyrażenia swojego stanowiska oraz (c) zakwestionowania decyzji, zgodnie z art. 22 ust. 3 UK GDPR."
    },
    "de": {
        "heading": "Automatisierte Entscheidungsfindung und Profiling",
        "p1": "Wir verwenden Ihre personenbezogenen Daten nicht für automatisierte Entscheidungsfindung, die rechtliche Auswirkungen oder ähnlich erhebliche Auswirkungen auf Sie hat, wie in Artikel 22 UK GDPR definiert.",
        "p2": "Unsere App verwendet einen Spaced-Repetition-Algorithmus zur Optimierung Ihres Lernplans. Dies ist ausschließlich pädagogische Optimierung — es bestimmt, wann Ihnen eine Karteikarte gezeigt wird, nicht eine Entscheidung mit rechtlichen oder ähnlich erheblichen Auswirkungen.",
        "p3": "Sollten wir in Zukunft automatisierte Entscheidungsfindung mit rechtlichen oder erheblichen Auswirkungen einführen, werden wir diese Richtlinie aktualisieren und sicherstellen, dass Sie das Recht haben: (a) menschliches Eingreifen zu erwirken, (b) Ihren Standpunkt darzulegen und (c) die Entscheidung anzufechten, wie in Artikel 22(3) UK GDPR vorgeschrieben."
    },
    "es": {
        "heading": "Toma de decisiones automatizada y elaboración de perfiles",
        "p1": "No utilizamos sus datos personales para la toma de decisiones automatizada que produzca efectos jurídicos o efectos igualmente significativos sobre usted, según lo definido en el artículo 22 del UK GDPR.",
        "p2": "Nuestra aplicación utiliza un algoritmo de repetición espaciada para optimizar su programa de aprendizaje. Esto es únicamente optimización pedagógica — determina cuándo mostrarle una tarjeta de estudio, no ninguna decisión con efectos jurídicos o igualmente significativos.",
        "p3": "Si en el futuro introducimos la toma de decisiones automatizada con efectos jurídicos o significativos, actualizaremos esta política y garantizaremos su derecho a: (a) obtener intervención humana, (b) expresar su punto de vista y (c) impugnar la decisión, según lo requerido por el artículo 22(3) del UK GDPR."
    },
    "fr": {
        "heading": "Prise de décision automatisée et profilage",
        "p1": "Nous n'utilisons pas vos données personnelles pour une prise de décision automatisée produisant des effets juridiques ou des effets similairement significatifs vous concernant, tels que définis par l'article 22 du UK GDPR.",
        "p2": "Notre application utilise un algorithme de répétition espacée pour optimiser votre programme d'apprentissage. Il s'agit uniquement d'une optimisation pédagogique — il détermine quand vous montrer une carte mémoire, pas une décision ayant des effets juridiques ou similairement significatifs.",
        "p3": "Si nous introduisons à l'avenir une prise de décision automatisée ayant des effets juridiques ou significatifs, nous mettrons à jour cette politique et vous garantirons le droit de : (a) obtenir une intervention humaine, (b) exprimer votre point de vue et (c) contester la décision, conformément à l'article 22(3) du UK GDPR."
    },
    "ja": {
        "heading": "自動意思決定とプロファイリング",
        "p1": "UK GDPR第22条に定義されるとおり、法的効果またはそれに類する重大な効果をもたらす自動意思決定にお客様の個人データを使用することはありません。",
        "p2": "当社のアプリは、学習スケジュールを最適化するために間隔反復アルゴリズムを使用しています。これは教育的な最適化のみであり、フラッシュカードをいつ表示するかを決定するものであって、法的効果やそれに類する重大な効果を持つ決定ではありません。",
        "p3": "将来、法的または重大な効果を持つ自動意思決定を導入する場合、本ポリシーを更新し、UK GDPR第22条第3項に基づき、(a)人間の介入を得る権利、(b)意見を表明する権利、(c)決定に異議を唱える権利を確保します。"
    },
    "zh": {
        "heading": "自动化决策和分析",
        "p1": "我们不会将您的个人数据用于UK GDPR第22条所定义的产生法律效力或类似重大影响的自动化决策。",
        "p2": "我们的应用程序使用间隔重复算法来优化您的学习计划。这仅是教学优化——它决定何时向您展示闪卡，而非任何具有法律效力或类似重大影响的决定。",
        "p3": "如果我们将来引入具有法律或重大影响的自动化决策，我们将更新本政策并确保您有权：(a)获得人工干预，(b)表达您的观点，(c)对决定提出异议，如UK GDPR第22条第3款所要求。"
    },
    "ar": {
        "heading": "اتخاذ القرار الآلي والتنميط",
        "p1": "لا نستخدم بياناتك الشخصية لاتخاذ القرارات الآلية التي تنتج آثاراً قانونية أو آثاراً مماثلة ذات أهمية عليك، كما هو محدد في المادة 22 من UK GDPR.",
        "p2": "يستخدم تطبيقنا خوارزمية التكرار المتباعد لتحسين جدول التعلم الخاص بك. هذا تحسين تعليمي فقط — يحدد متى تُعرض عليك بطاقة التعلم، وليس أي قرار ذو آثار قانونية أو مماثلة ذات أهمية.",
        "p3": "إذا قدمنا في المستقبل اتخاذ قرارات آلية ذات آثار قانونية أو ذات أهمية، فسنقوم بتحديث هذه السياسة وضمان حقك في: (أ) الحصول على تدخل بشري، (ب) التعبير عن وجهة نظرك، و(ج) الطعن في القرار، وفقاً للمادة 22(3) من UK GDPR."
    },
    "uk": {
        "heading": "Автоматизоване прийняття рішень та профілювання",
        "p1": "Ми не використовуємо ваші персональні дані для автоматизованого прийняття рішень, які мають правові наслідки або аналогічно значущі наслідки для вас, як визначено статтею 22 UK GDPR.",
        "p2": "Наш додаток використовує алгоритм інтервального повторення для оптимізації вашого навчального розкладу. Це лише педагогічна оптимізація — вона визначає, коли показувати вам картку, а не будь-яке рішення з правовими або аналогічно значущими наслідками.",
        "p3": "Якщо в майбутньому ми запровадимо автоматизоване прийняття рішень з правовими або значущими наслідками, ми оновимо цю політику та забезпечимо ваше право на: (a) отримання втручання людини, (b) висловлення своєї точки зору та (c) оскарження рішення, як вимагає стаття 22(3) UK GDPR."
    }
}

# ── Story 9.4: Right to Withdraw Consent (Art. 7(3)) ──
# This needs to be added to the existing yourRights.gdpr* list
# We'll add a new key "gdprLi7" for withdraw consent
WITHDRAW_CONSENT = {
    "en": "Right to withdraw consent — where we rely on consent as a legal basis (e.g., analytics), you may withdraw your consent at any time by adjusting your cookie preferences or contacting us at <emailLink>legal@lumenlingo.com</emailLink>. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.",
    "pl": "Prawo do wycofania zgody — w przypadku gdy opieramy się na zgodzie jako podstawie prawnej (np. analityka), możesz wycofać swoją zgodę w dowolnym momencie, dostosowując preferencje plików cookie lub kontaktując się z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>. Wycofanie nie wpływa na zgodność z prawem przetwarzania dokonanego przed wycofaniem.",
    "de": "Recht auf Widerruf der Einwilligung — soweit wir auf Einwilligung als Rechtsgrundlage setzen (z.B. Analysen), können Sie Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre Cookie-Einstellungen anpassen oder uns unter <emailLink>legal@lumenlingo.com</emailLink> kontaktieren. Der Widerruf berührt nicht die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung.",
    "es": "Derecho a retirar el consentimiento — cuando nos basamos en el consentimiento como base legal (p. ej., analítica), puede retirar su consentimiento en cualquier momento ajustando sus preferencias de cookies o contactándonos en <emailLink>legal@lumenlingo.com</emailLink>. La retirada no afecta a la licitud del tratamiento realizado antes de la retirada.",
    "fr": "Droit de retirer le consentement — lorsque nous nous fondons sur le consentement comme base juridique (p. ex., analyses), vous pouvez retirer votre consentement à tout moment en ajustant vos préférences de cookies ou en nous contactant à <emailLink>legal@lumenlingo.com</emailLink>. Le retrait n'affecte pas la licéité du traitement effectué avant le retrait.",
    "ja": "同意を撤回する権利 — 同意を法的根拠として使用している場合（例：アナリティクス）、Cookieの設定を調整するか、<emailLink>legal@lumenlingo.com</emailLink>にご連絡いただくことで、いつでも同意を撤回できます。撤回は、撤回前に行われた処理の適法性には影響しません。",
    "zh": "撤回同意的权利 — 当我们依赖同意作为法律依据时（例如分析），您可以随时通过调整Cookie偏好或联系<emailLink>legal@lumenlingo.com</emailLink>来撤回您的同意。撤回不影响撤回前已进行处理的合法性。",
    "ar": "الحق في سحب الموافقة — عندما نعتمد على الموافقة كأساس قانوني (مثل التحليلات)، يمكنك سحب موافقتك في أي وقت عن طريق تعديل تفضيلات ملفات تعريف الارتباط أو الاتصال بنا على <emailLink>legal@lumenlingo.com</emailLink>. لا يؤثر السحب على قانونية المعالجة التي تمت قبل السحب.",
    "uk": "Право на відкликання згоди — якщо ми покладаємося на згоду як правову основу (наприклад, аналітика), ви можете відкликати свою згоду в будь-який час, змінивши налаштування файлів cookie або зв'язавшись з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>. Відкликання не впливає на законність обробки, здійсненої до відкликання."
}

# ── Story 9.5: ICO Registration Number ──
# Add to ukDataProtection section
ICO_REG = {
    "en": "Our ICO registration number is ZB718685. You can verify this on the <icoLink>ICO register</icoLink>.",
    "pl": "Nasz numer rejestracyjny ICO to ZB718685. Możesz to zweryfikować w <icoLink>rejestrze ICO</icoLink>.",
    "de": "Unsere ICO-Registrierungsnummer lautet ZB718685. Sie können dies im <icoLink>ICO-Register</icoLink> überprüfen.",
    "es": "Nuestro número de registro del ICO es ZB718685. Puede verificarlo en el <icoLink>registro del ICO</icoLink>.",
    "fr": "Notre numéro d'enregistrement auprès de l'ICO est ZB718685. Vous pouvez le vérifier sur le <icoLink>registre de l'ICO</icoLink>.",
    "ja": "当社のICO登録番号はZB718685です。<icoLink>ICO登録簿</icoLink>でご確認いただけます。",
    "zh": "我们的ICO注册号为ZB718685。您可以在<icoLink>ICO注册簿</icoLink>上进行验证。",
    "ar": "رقم تسجيلنا لدى ICO هو ZB718685. يمكنك التحقق من ذلك في <icoLink>سجل ICO</icoLink>.",
    "uk": "Наш реєстраційний номер ICO — ZB718685. Ви можете перевірити це в <icoLink>реєстрі ICO</icoLink>."
}


def process_all():
    for locale in LOCALES:
        fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)

        privacy = data['Privacy']
        changes = []

        # Story 9.2: Add dataProvisionRequirements after legalBasis
        if 'dataProvisionRequirements' not in privacy:
            new_privacy = {}
            for key, value in privacy.items():
                new_privacy[key] = value
                if key == 'legalBasis':
                    new_privacy['dataProvisionRequirements'] = DATA_PROVISION_REQ[locale]
            data['Privacy'] = new_privacy
            privacy = data['Privacy']
            changes.append('dataProvisionRequirements')

        # Story 9.3: Add automatedDecisions after breachNotification
        if 'automatedDecisions' not in privacy:
            new_privacy = {}
            for key, value in privacy.items():
                new_privacy[key] = value
                if key == 'breachNotification':
                    new_privacy['automatedDecisions'] = AUTOMATED_DECISIONS[locale]
            data['Privacy'] = new_privacy
            privacy = data['Privacy']
            changes.append('automatedDecisions')

        # Story 9.4: Add withdraw consent to yourRights GDPR list
        your_rights = privacy.get('yourRights', {})
        if 'gdprLi7' not in your_rights:
            your_rights['gdprLi7'] = WITHDRAW_CONSENT[locale]
            changes.append('gdprLi7 (withdraw consent)')

        # Story 9.5: Add ICO registration to ukDataProtection
        uk_dp = privacy.get('ukDataProtection', {})
        if 'icoRegistration' not in uk_dp:
            uk_dp['icoRegistration'] = ICO_REG[locale]
            changes.append('icoRegistration')

        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')

        print(f'{locale}.json: added {", ".join(changes) if changes else "nothing (already exists)"}')


process_all()

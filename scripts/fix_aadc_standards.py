#!/usr/bin/env python3
"""Story 9.6: Fix AADC standards claim — expand to cover all 15 standards accurately."""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

# All 15 ICO AADC standards with proper descriptions for a language-learning app
AADC_STANDARDS = {
    "en": {
        "childrensCodeP1": "The UK Information Commissioner's Office (ICO) Age Appropriate Design Code applies to online services likely to be accessed by children under 18. As a language-learning service, LumenLingo falls within scope. We have assessed our service against all 15 standards of the Code:",
        "childrensCodeLi1": "<b>Best interests of the child:</b> data practices prioritise children's wellbeing over commercial interests.",
        "childrensCodeLi2": "<b>Data protection impact assessments:</b> we conduct DPIAs for features likely to be accessed by children.",
        "childrensCodeLi3": "<b>Age-appropriate application:</b> we apply age-appropriate protections by default; where precise age is unknown, we treat all users as potentially under 18 for privacy purposes.",
        "childrensCodeLi4": "<b>Transparency:</b> privacy information is provided in clear, age-appropriate language.",
        "childrensCodeLi5": "<b>Detrimental use of data:</b> we do not use children's data in ways that have been shown to be detrimental to their wellbeing.",
        "childrensCodeLi6": "<b>Policies and community standards:</b> our published terms uphold the Code's standards.",
        "childrensCodeLi7": "<b>Default settings:</b> high-privacy defaults are applied for all users, ensuring children receive maximum protection without needing to adjust settings.",
        "childrensCodeLi8": "<b>Data minimisation:</b> only data essential for the learning service is processed.",
        "childrensCodeLi9": "<b>Data sharing:</b> we do not share children's personal data with third parties for marketing or advertising purposes.",
        "childrensCodeLi10": "<b>Geolocation:</b> we do not collect or use precise geolocation data.",
        "childrensCodeLi11": "<b>Parental controls:</b> not applicable — LumenLingo does not currently provide parental control features. If introduced, they will be designed to provide an appropriate level of monitoring without excessive surveillance.",
        "childrensCodeLi12": "<b>Profiling:</b> children are not profiled for marketing or behavioural targeting. Our spaced-repetition algorithm is purely pedagogical and does not constitute profiling under the Code.",
        "childrensCodeLi13": "<b>Nudge techniques:</b> we do not use design techniques that encourage children to provide unnecessary personal data or weaken their privacy protections.",
        "childrensCodeLi14": "<b>Connected toys and devices:</b> not applicable — LumenLingo is a software application and does not interact with connected toys or IoT devices.",
        "childrensCodeLi15": "<b>Online tools:</b> we provide accessible tools for users to exercise their data rights, including account deletion and data export."
    },
    "pl": {
        "childrensCodeP1": "Kodeks odpowiedniego projektowania ze względu na wiek (Age Appropriate Design Code) brytyjskiego Biura Komisarza ds. Informacji (ICO) ma zastosowanie do usług online, z których prawdopodobnie będą korzystać dzieci poniżej 18 roku życia. Jako usługa nauki języków, LumenLingo podlega temu kodeksowi. Oceniliśmy naszą usługę pod kątem wszystkich 15 standardów Kodeksu:",
        "childrensCodeLi1": "<b>Najlepszy interes dziecka:</b> praktyki dotyczące danych stawiają dobro dzieci ponad interesy komercyjne.",
        "childrensCodeLi2": "<b>Ocena skutków dla ochrony danych:</b> przeprowadzamy DPIA dla funkcji prawdopodobnie dostępnych dla dzieci.",
        "childrensCodeLi3": "<b>Stosowanie odpowiednie do wieku:</b> stosujemy ochronę odpowiednią do wieku domyślnie; gdy dokładny wiek jest nieznany, traktujemy wszystkich użytkowników jako potencjalnie poniżej 18 roku życia w celach prywatności.",
        "childrensCodeLi4": "<b>Przejrzystość:</b> informacje o prywatności są przedstawiane jasnym, odpowiednim do wieku językiem.",
        "childrensCodeLi5": "<b>Szkodliwe wykorzystanie danych:</b> nie wykorzystujemy danych dzieci w sposób, który wykazano jako szkodliwy dla ich dobra.",
        "childrensCodeLi6": "<b>Polityki i standardy społeczności:</b> nasze opublikowane warunki przestrzegają standardów Kodeksu.",
        "childrensCodeLi7": "<b>Ustawienia domyślne:</b> domyślnie stosowane są ustawienia o wysokim poziomie prywatności, zapewniające dzieciom maksymalną ochronę bez konieczności zmiany ustawień.",
        "childrensCodeLi8": "<b>Minimalizacja danych:</b> przetwarzane są tylko dane niezbędne do świadczenia usługi nauki.",
        "childrensCodeLi9": "<b>Udostępnianie danych:</b> nie udostępniamy danych osobowych dzieci stronom trzecim w celach marketingowych lub reklamowych.",
        "childrensCodeLi10": "<b>Geolokalizacja:</b> nie zbieramy ani nie wykorzystujemy dokładnych danych geolokalizacyjnych.",
        "childrensCodeLi11": "<b>Kontrola rodzicielska:</b> nie dotyczy — LumenLingo nie oferuje obecnie funkcji kontroli rodzicielskiej. Jeśli zostaną wprowadzone, będą zaprojektowane tak, aby zapewnić odpowiedni poziom nadzoru bez nadmiernej inwigilacji.",
        "childrensCodeLi12": "<b>Profilowanie:</b> dzieci nie są profilowane w celach marketingowych ani targetowania behawioralnego. Nasz algorytm powtórek rozłożonych w czasie jest wyłącznie pedagogiczny i nie stanowi profilowania w rozumieniu Kodeksu.",
        "childrensCodeLi13": "<b>Techniki nakłaniania:</b> nie stosujemy technik projektowych, które zachęcają dzieci do podawania zbędnych danych osobowych lub osłabiają ich ochronę prywatności.",
        "childrensCodeLi14": "<b>Połączone zabawki i urządzenia:</b> nie dotyczy — LumenLingo jest aplikacją programową i nie współpracuje z połączonymi zabawkami ani urządzeniami IoT.",
        "childrensCodeLi15": "<b>Narzędzia online:</b> zapewniamy dostępne narzędzia do korzystania z praw dotyczących danych, w tym usuwanie konta i eksport danych."
    },
    "de": {
        "childrensCodeP1": "Der Age Appropriate Design Code des britischen Information Commissioner's Office (ICO) gilt für Online-Dienste, die wahrscheinlich von Kindern unter 18 Jahren genutzt werden. Als Sprachlern-Dienst fällt LumenLingo in den Geltungsbereich. Wir haben unseren Dienst anhand aller 15 Standards des Codes bewertet:",
        "childrensCodeLi1": "<b>Kindeswohl:</b> Datenpraktiken stellen das Wohl der Kinder über kommerzielle Interessen.",
        "childrensCodeLi2": "<b>Datenschutz-Folgenabschätzung:</b> Wir führen DPIAs für Funktionen durch, auf die Kinder voraussichtlich zugreifen.",
        "childrensCodeLi3": "<b>Altersgerechte Anwendung:</b> Wir wenden standardmäßig altersgerechte Schutzmaßnahmen an; wenn das genaue Alter unbekannt ist, behandeln wir alle Nutzer für Datenschutzzwecke als potenziell unter 18.",
        "childrensCodeLi4": "<b>Transparenz:</b> Datenschutzinformationen werden in klarer, altersgerechter Sprache bereitgestellt.",
        "childrensCodeLi5": "<b>Schädliche Datennutzung:</b> Wir verwenden Kinderdaten nicht in einer Weise, die sich als schädlich für ihr Wohlbefinden erwiesen hat.",
        "childrensCodeLi6": "<b>Richtlinien und Gemeinschaftsstandards:</b> Unsere veröffentlichten Bedingungen wahren die Standards des Codes.",
        "childrensCodeLi7": "<b>Standardeinstellungen:</b> Hohe Datenschutz-Standardeinstellungen werden für alle Nutzer angewandt, um Kindern maximalen Schutz zu gewährleisten.",
        "childrensCodeLi8": "<b>Datenminimierung:</b> Es werden nur die für den Lerndienst wesentlichen Daten verarbeitet.",
        "childrensCodeLi9": "<b>Datenweitergabe:</b> Wir geben personenbezogene Daten von Kindern nicht zu Marketing- oder Werbezwecken an Dritte weiter.",
        "childrensCodeLi10": "<b>Geolokalisierung:</b> Wir erheben oder verwenden keine genauen Standortdaten.",
        "childrensCodeLi11": "<b>Elterliche Kontrolle:</b> Nicht zutreffend — LumenLingo bietet derzeit keine Funktionen zur elterlichen Kontrolle. Falls eingeführt, werden sie ein angemessenes Maß an Überwachung bieten.",
        "childrensCodeLi12": "<b>Profiling:</b> Kinder werden nicht für Marketing oder verhaltensbasiertes Targeting profiliert. Unser Spaced-Repetition-Algorithmus ist rein pädagogisch.",
        "childrensCodeLi13": "<b>Nudge-Techniken:</b> Wir verwenden keine Designtechniken, die Kinder dazu verleiten, unnötige personenbezogene Daten preiszugeben.",
        "childrensCodeLi14": "<b>Vernetztes Spielzeug und Geräte:</b> Nicht zutreffend — LumenLingo ist eine Software-Anwendung und interagiert nicht mit vernetztem Spielzeug oder IoT-Geräten.",
        "childrensCodeLi15": "<b>Online-Tools:</b> Wir bieten zugängliche Tools zur Ausübung von Datenrechten, einschließlich Kontolöschung und Datenexport."
    },
    "es": {
        "childrensCodeP1": "El Código de Diseño Apropiado para la Edad (Age Appropriate Design Code) de la Oficina del Comisionado de Información del Reino Unido (ICO) se aplica a los servicios en línea a los que probablemente acceden menores de 18 años. Como servicio de aprendizaje de idiomas, LumenLingo está dentro del ámbito de aplicación. Hemos evaluado nuestro servicio en relación con los 15 estándares del Código:",
        "childrensCodeLi1": "<b>Interés superior del niño:</b> las prácticas de datos priorizan el bienestar de los niños sobre los intereses comerciales.",
        "childrensCodeLi2": "<b>Evaluaciones de impacto en la protección de datos:</b> realizamos EIPD para funciones a las que probablemente acceden niños.",
        "childrensCodeLi3": "<b>Aplicación apropiada para la edad:</b> aplicamos protecciones apropiadas para la edad por defecto; cuando la edad exacta es desconocida, tratamos a todos los usuarios como potencialmente menores de 18 años.",
        "childrensCodeLi4": "<b>Transparencia:</b> la información de privacidad se proporciona en un lenguaje claro y apropiado para la edad.",
        "childrensCodeLi5": "<b>Uso perjudicial de datos:</b> no utilizamos datos de niños de maneras que se haya demostrado que son perjudiciales para su bienestar.",
        "childrensCodeLi6": "<b>Políticas y normas comunitarias:</b> nuestros términos publicados cumplen los estándares del Código.",
        "childrensCodeLi7": "<b>Configuración predeterminada:</b> se aplican configuraciones de alta privacidad por defecto, garantizando la máxima protección para los niños.",
        "childrensCodeLi8": "<b>Minimización de datos:</b> solo se procesan los datos esenciales para el servicio de aprendizaje.",
        "childrensCodeLi9": "<b>Compartir datos:</b> no compartimos datos personales de niños con terceros para fines de marketing o publicidad.",
        "childrensCodeLi10": "<b>Geolocalización:</b> no recopilamos ni utilizamos datos de geolocalización precisos.",
        "childrensCodeLi11": "<b>Controles parentales:</b> no aplicable — LumenLingo no proporciona actualmente funciones de control parental. Si se introducen, se diseñarán para proporcionar un nivel adecuado de supervisión.",
        "childrensCodeLi12": "<b>Elaboración de perfiles:</b> los niños no son perfilados para marketing ni segmentación conductual. Nuestro algoritmo de repetición espaciada es puramente pedagógico.",
        "childrensCodeLi13": "<b>Técnicas de empuje:</b> no utilizamos técnicas de diseño que animen a los niños a proporcionar datos personales innecesarios.",
        "childrensCodeLi14": "<b>Juguetes y dispositivos conectados:</b> no aplicable — LumenLingo es una aplicación de software y no interactúa con juguetes conectados ni dispositivos IoT.",
        "childrensCodeLi15": "<b>Herramientas en línea:</b> proporcionamos herramientas accesibles para ejercer derechos sobre los datos, incluyendo eliminación de cuenta y exportación de datos."
    },
    "fr": {
        "childrensCodeP1": "Le Code de conception adaptée à l'âge (Age Appropriate Design Code) de l'ICO du Royaume-Uni s'applique aux services en ligne susceptibles d'être utilisés par des enfants de moins de 18 ans. En tant que service d'apprentissage des langues, LumenLingo entre dans le champ d'application. Nous avons évalué notre service au regard des 15 normes du Code :",
        "childrensCodeLi1": "<b>Intérêt supérieur de l'enfant :</b> les pratiques en matière de données privilégient le bien-être des enfants par rapport aux intérêts commerciaux.",
        "childrensCodeLi2": "<b>Analyses d'impact sur la protection des données :</b> nous réalisons des AIPD pour les fonctionnalités susceptibles d'être utilisées par des enfants.",
        "childrensCodeLi3": "<b>Application adaptée à l'âge :</b> nous appliquons par défaut des protections adaptées à l'âge ; lorsque l'âge exact est inconnu, nous traitons tous les utilisateurs comme potentiellement mineurs.",
        "childrensCodeLi4": "<b>Transparence :</b> les informations de confidentialité sont fournies dans un langage clair et adapté à l'âge.",
        "childrensCodeLi5": "<b>Utilisation préjudiciable des données :</b> nous n'utilisons pas les données des enfants de manière préjudiciable à leur bien-être.",
        "childrensCodeLi6": "<b>Politiques et normes communautaires :</b> nos conditions publiées respectent les normes du Code.",
        "childrensCodeLi7": "<b>Paramètres par défaut :</b> des paramètres de confidentialité élevés sont appliqués par défaut pour tous les utilisateurs.",
        "childrensCodeLi8": "<b>Minimisation des données :</b> seules les données essentielles au service d'apprentissage sont traitées.",
        "childrensCodeLi9": "<b>Partage de données :</b> nous ne partageons pas les données personnelles des enfants avec des tiers à des fins de marketing ou de publicité.",
        "childrensCodeLi10": "<b>Géolocalisation :</b> nous ne collectons ni n'utilisons de données de géolocalisation précises.",
        "childrensCodeLi11": "<b>Contrôle parental :</b> non applicable — LumenLingo ne fournit pas actuellement de fonctionnalités de contrôle parental. Si elles sont introduites, elles seront conçues pour offrir un niveau de surveillance approprié.",
        "childrensCodeLi12": "<b>Profilage :</b> les enfants ne sont pas profilés à des fins de marketing ou de ciblage comportemental. Notre algorithme de répétition espacée est purement pédagogique.",
        "childrensCodeLi13": "<b>Techniques de nudge :</b> nous n'utilisons pas de techniques de conception incitant les enfants à fournir des données personnelles inutiles.",
        "childrensCodeLi14": "<b>Jouets et appareils connectés :</b> non applicable — LumenLingo est une application logicielle et n'interagit pas avec des jouets connectés ou des appareils IoT.",
        "childrensCodeLi15": "<b>Outils en ligne :</b> nous fournissons des outils accessibles pour exercer les droits sur les données, y compris la suppression de compte et l'exportation de données."
    },
    "ja": {
        "childrensCodeP1": "英国情報コミッショナー事務局（ICO）の年齢適切設計コード（Age Appropriate Design Code）は、18歳未満の子どもがアクセスする可能性のあるオンラインサービスに適用されます。語学学習サービスとして、LumenLingoはその適用範囲に含まれます。当社はコードの15の基準すべてに対してサービスを評価しました：",
        "childrensCodeLi1": "<b>子どもの最善の利益：</b>データ慣行は商業的利益よりも子どもの福祉を優先します。",
        "childrensCodeLi2": "<b>データ保護影響評価：</b>子どもがアクセスする可能性のある機能についてDPIAを実施します。",
        "childrensCodeLi3": "<b>年齢に適した適用：</b>デフォルトで年齢に適した保護を適用し、正確な年齢が不明な場合は、プライバシー目的ですべてのユーザーを18歳未満の可能性があるものとして扱います。",
        "childrensCodeLi4": "<b>透明性：</b>プライバシー情報は、年齢に適した明確な言葉で提供されます。",
        "childrensCodeLi5": "<b>有害なデータ利用：</b>子どものデータを、その福祉に有害であることが示されている方法で使用しません。",
        "childrensCodeLi6": "<b>ポリシーとコミュニティ基準：</b>公開された利用規約はコードの基準を遵守しています。",
        "childrensCodeLi7": "<b>デフォルト設定：</b>すべてのユーザーに高プライバシーのデフォルト設定が適用され、子どもが設定を変更する必要なく最大限の保護を受けられます。",
        "childrensCodeLi8": "<b>データ最小化：</b>学習サービスに不可欠なデータのみが処理されます。",
        "childrensCodeLi9": "<b>データ共有：</b>マーケティングや広告目的で子どもの個人データを第三者と共有しません。",
        "childrensCodeLi10": "<b>位置情報：</b>正確な位置情報データを収集または使用しません。",
        "childrensCodeLi11": "<b>ペアレンタルコントロール：</b>該当なし — LumenLingoは現在ペアレンタルコントロール機能を提供していません。導入される場合、適切な監視レベルを提供するよう設計されます。",
        "childrensCodeLi12": "<b>プロファイリング：</b>子どもはマーケティングや行動ターゲティングのためにプロファイリングされません。間隔反復アルゴリズムは純粋に教育的です。",
        "childrensCodeLi13": "<b>ナッジ技法：</b>子どもに不要な個人データの提供を促す設計技法は使用しません。",
        "childrensCodeLi14": "<b>コネクテッドトイとデバイス：</b>該当なし — LumenLingoはソフトウェアアプリケーションであり、コネクテッドトイやIoTデバイスとは連携しません。",
        "childrensCodeLi15": "<b>オンラインツール：</b>アカウント削除やデータエクスポートを含む、データ権利を行使するためのアクセス可能なツールを提供しています。"
    },
    "zh": {
        "childrensCodeP1": "英国信息专员办公室（ICO）的《适龄设计规范》（Age Appropriate Design Code）适用于18岁以下儿童可能访问的在线服务。作为语言学习服务，LumenLingo在其适用范围内。我们已根据该规范的全部15项标准评估了我们的服务：",
        "childrensCodeLi1": "<b>儿童最佳利益：</b>数据实践将儿童福祉置于商业利益之上。",
        "childrensCodeLi2": "<b>数据保护影响评估：</b>我们对儿童可能访问的功能进行DPIA。",
        "childrensCodeLi3": "<b>适龄应用：</b>我们默认应用适龄保护；当确切年龄未知时，出于隐私目的，我们将所有用户视为可能未满18岁。",
        "childrensCodeLi4": "<b>透明度：</b>隐私信息以清晰、适龄的语言提供。",
        "childrensCodeLi5": "<b>有害数据使用：</b>我们不以已被证明对其福祉有害的方式使用儿童数据。",
        "childrensCodeLi6": "<b>政策和社区标准：</b>我们发布的条款遵守该规范的标准。",
        "childrensCodeLi7": "<b>默认设置：</b>为所有用户默认应用高隐私设置，确保儿童无需调整设置即可获得最大保护。",
        "childrensCodeLi8": "<b>数据最小化：</b>仅处理学习服务所需的基本数据。",
        "childrensCodeLi9": "<b>数据共享：</b>我们不会出于营销或广告目的与第三方共享儿童的个人数据。",
        "childrensCodeLi10": "<b>地理位置：</b>我们不收集或使用精确的地理位置数据。",
        "childrensCodeLi11": "<b>家长控制：</b>不适用——LumenLingo目前不提供家长控制功能。如果引入，将设计为提供适当的监控水平。",
        "childrensCodeLi12": "<b>分析画像：</b>儿童不会被用于营销或行为定向的分析画像。我们的间隔重复算法纯粹是教学性的。",
        "childrensCodeLi13": "<b>助推技术：</b>我们不使用鼓励儿童提供不必要个人数据的设计技术。",
        "childrensCodeLi14": "<b>联网玩具和设备：</b>不适用——LumenLingo是一款软件应用程序，不与联网玩具或物联网设备交互。",
        "childrensCodeLi15": "<b>在线工具：</b>我们提供可访问的工具来行使数据权利，包括账户删除和数据导出。"
    },
    "ar": {
        "childrensCodeP1": "ينطبق قانون التصميم المناسب للعمر (Age Appropriate Design Code) الصادر عن مكتب مفوض المعلومات في المملكة المتحدة (ICO) على الخدمات عبر الإنترنت التي يُحتمل أن يصل إليها أطفال دون سن 18 عاماً. كخدمة لتعلم اللغات، يقع LumenLingo ضمن نطاق التطبيق. قمنا بتقييم خدمتنا وفقاً لجميع معايير القانون الـ 15:",
        "childrensCodeLi1": "<b>مصلحة الطفل الفضلى:</b> تُعطي ممارسات البيانات الأولوية لرفاهية الأطفال على المصالح التجارية.",
        "childrensCodeLi2": "<b>تقييمات تأثير حماية البيانات:</b> نجري تقييمات DPIA للميزات التي يُحتمل أن يصل إليها الأطفال.",
        "childrensCodeLi3": "<b>التطبيق المناسب للعمر:</b> نطبق الحماية المناسبة للعمر بشكل افتراضي؛ عندما يكون العمر الدقيق غير معروف، نعامل جميع المستخدمين على أنهم قد يكونون دون 18 عاماً.",
        "childrensCodeLi4": "<b>الشفافية:</b> يتم تقديم معلومات الخصوصية بلغة واضحة ومناسبة للعمر.",
        "childrensCodeLi5": "<b>الاستخدام الضار للبيانات:</b> لا نستخدم بيانات الأطفال بطرق ثبت أنها ضارة برفاهيتهم.",
        "childrensCodeLi6": "<b>السياسات ومعايير المجتمع:</b> تلتزم شروطنا المنشورة بمعايير القانون.",
        "childrensCodeLi7": "<b>الإعدادات الافتراضية:</b> يتم تطبيق إعدادات خصوصية عالية افتراضياً لجميع المستخدمين، مما يضمن حصول الأطفال على أقصى حماية.",
        "childrensCodeLi8": "<b>تقليل البيانات:</b> تتم معالجة البيانات الأساسية فقط لخدمة التعلم.",
        "childrensCodeLi9": "<b>مشاركة البيانات:</b> لا نشارك البيانات الشخصية للأطفال مع أطراف ثالثة لأغراض التسويق أو الإعلان.",
        "childrensCodeLi10": "<b>تحديد الموقع الجغرافي:</b> لا نجمع أو نستخدم بيانات الموقع الجغرافي الدقيقة.",
        "childrensCodeLi11": "<b>الرقابة الأبوية:</b> غير قابل للتطبيق — لا يوفر LumenLingo حالياً ميزات الرقابة الأبوية. إذا تم تقديمها، ستكون مصممة لتوفير مستوى مناسب من المراقبة.",
        "childrensCodeLi12": "<b>التنميط:</b> لا يتم تنميط الأطفال لأغراض التسويق أو الاستهداف السلوكي. خوارزمية التكرار المتباعد لدينا تعليمية بحتة.",
        "childrensCodeLi13": "<b>تقنيات الحث:</b> لا نستخدم تقنيات تصميم تشجع الأطفال على تقديم بيانات شخصية غير ضرورية.",
        "childrensCodeLi14": "<b>الألعاب والأجهزة المتصلة:</b> غير قابل للتطبيق — LumenLingo هو تطبيق برمجي ولا يتفاعل مع الألعاب المتصلة أو أجهزة إنترنت الأشياء.",
        "childrensCodeLi15": "<b>الأدوات عبر الإنترنت:</b> نوفر أدوات يمكن الوصول إليها لممارسة حقوق البيانات، بما في ذلك حذف الحساب وتصدير البيانات."
    },
    "uk": {
        "childrensCodeP1": "Кодекс відповідного вікового дизайну (Age Appropriate Design Code) Управління Комісара з інформації Великобританії (ICO) застосовується до онлайн-сервісів, до яких ймовірно мають доступ діти до 18 років. Як сервіс вивчення мов, LumenLingo підпадає під дію цього кодексу. Ми оцінили наш сервіс за всіма 15 стандартами Кодексу:",
        "childrensCodeLi1": "<b>Найкращі інтереси дитини:</b> практики обробки даних ставлять добробут дітей вище комерційних інтересів.",
        "childrensCodeLi2": "<b>Оцінка впливу на захист даних:</b> ми проводимо DPIA для функцій, до яких ймовірно мають доступ діти.",
        "childrensCodeLi3": "<b>Застосування відповідно до віку:</b> ми застосовуємо захист відповідно до віку за замовчуванням; коли точний вік невідомий, ми розглядаємо всіх користувачів як потенційно молодших за 18 років.",
        "childrensCodeLi4": "<b>Прозорість:</b> інформація про конфіденційність надається зрозумілою, відповідною до віку мовою.",
        "childrensCodeLi5": "<b>Шкідливе використання даних:</b> ми не використовуємо дані дітей способами, які виявилися шкідливими для їхнього добробуту.",
        "childrensCodeLi6": "<b>Політики та стандарти спільноти:</b> наші опубліковані умови відповідають стандартам Кодексу.",
        "childrensCodeLi7": "<b>Налаштування за замовчуванням:</b> для всіх користувачів застосовуються високі налаштування конфіденційності, що забезпечують дітям максимальний захист.",
        "childrensCodeLi8": "<b>Мінімізація даних:</b> обробляються лише дані, необхідні для навчального сервісу.",
        "childrensCodeLi9": "<b>Обмін даними:</b> ми не передаємо персональні дані дітей третім сторонам для маркетингових або рекламних цілей.",
        "childrensCodeLi10": "<b>Геолокація:</b> ми не збираємо та не використовуємо точні дані геолокації.",
        "childrensCodeLi11": "<b>Батьківський контроль:</b> не застосовується — LumenLingo наразі не надає функцій батьківського контролю. Якщо вони будуть введені, вони будуть розроблені для забезпечення відповідного рівня моніторингу.",
        "childrensCodeLi12": "<b>Профілювання:</b> діти не підлягають профілюванню для маркетингу або поведінкового таргетингу. Наш алгоритм інтервального повторення є суто педагогічним.",
        "childrensCodeLi13": "<b>Техніки підштовхування:</b> ми не використовуємо дизайнерські техніки, що заохочують дітей надавати непотрібні персональні дані.",
        "childrensCodeLi14": "<b>Підключені іграшки та пристрої:</b> не застосовується — LumenLingo є програмним додатком і не взаємодіє з підключеними іграшками або пристроями IoT.",
        "childrensCodeLi15": "<b>Онлайн-інструменти:</b> ми надаємо доступні інструменти для здійснення прав щодо даних, включаючи видалення облікового запису та експорт даних."
    }
}


def process_all():
    for locale in LOCALES:
        fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)

        ecp = data['Privacy']['enhancedChildPrivacy']
        locale_data = AADC_STANDARDS[locale]

        # Replace existing keys
        for key, value in locale_data.items():
            ecp[key] = value

        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')

        print(f'{locale}.json: AADC expanded to 15 standards')


process_all()

#!/usr/bin/env python3
"""Epic 11: Terms of Service — Unfair Terms Remediation (CRA 2015 Part 2).

Story 11.1: Remove 1-year claims limitation period — extend to 2 years with consumer savings clause
Story 11.2: Replace all-caps assumption of risk / blanket release with plain language
Story 11.3: Merge and narrow indemnification clauses
Story 11.4: Fix liability cap to use consumer-paid amount
Story 11.5: Add UK ADR entity disclosure
Story 11.6: Add registered address and system requirements
"""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

# ═══════════════════════════════════════════════════════════
# Story 11.1: Claims Limitation — extend to 2 years + consumer savings
# ═══════════════════════════════════════════════════════════
CLAIMS_LIMITATION = {
    "en": {
        "heading": "Limitation Period for Claims",
        "p1": "Subject to the exceptions below, any claim arising out of or relating to these Terms or the Service must be commenced within two (2) years after the date the claim arose or, if later, the date on which you became aware (or ought reasonably to have become aware) of the grounds for the claim.",
        "p2": "This limitation period does not apply to claims for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; (c) any claim where a shorter limitation period would be unenforceable under applicable law.",
        "p3": "This clause does not affect any statutory limitation periods that apply under the laws of your jurisdiction. In the United Kingdom, the Limitation Act 1980 provides a six-year limitation period for claims founded on breach of contract or tort, and nothing in these Terms shortens that period for consumers.",
        "p4": "If you are a consumer in the European Union, the applicable limitation periods under your national law apply in full."
    },
    "pl": {
        "heading": "Okres przedawnienia roszczeń",
        "p1": "Z zastrzeżeniem poniższych wyjątków, wszelkie roszczenia wynikające z niniejszych Warunków lub Usługi muszą zostać wniesione w ciągu dwóch (2) lat od dnia powstania roszczenia lub, jeśli jest to późniejsze, od dnia, w którym dowiedziałeś się (lub powinieneś się był dowiedzieć) o podstawach roszczenia.",
        "p2": "Ten okres przedawnienia nie ma zastosowania do roszczeń dotyczących: (a) śmierci lub uszkodzenia ciała spowodowanego zaniedbaniem; (b) oszustwa lub oszukańczego wprowadzenia w błąd; (c) wszelkich roszczeń, w których krótszy okres przedawnienia byłby niewykonalny na mocy obowiązującego prawa.",
        "p3": "Niniejsza klauzula nie wpływa na ustawowe terminy przedawnienia obowiązujące na mocy prawa Twojej jurysdykcji. W Wielkiej Brytanii ustawa o przedawnieniu z 1980 r. przewiduje sześcioletni okres przedawnienia roszczeń z tytułu naruszenia umowy lub deliktu i żadne postanowienie niniejszych Warunków nie skraca tego okresu dla konsumentów.",
        "p4": "Jeśli jesteś konsumentem w Unii Europejskiej, obowiązujące terminy przedawnienia na mocy Twojego prawa krajowego mają pełne zastosowanie."
    },
    "de": {
        "heading": "Verjährungsfrist für Ansprüche",
        "p1": "Vorbehaltlich der nachstehenden Ausnahmen müssen alle Ansprüche aus oder im Zusammenhang mit diesen Bedingungen oder dem Dienst innerhalb von zwei (2) Jahren ab dem Datum erhoben werden, an dem der Anspruch entstanden ist, oder, falls später, ab dem Datum, an dem Sie Kenntnis von den Gründen erlangt haben (oder hätten erlangen müssen).",
        "p2": "Diese Verjährungsfrist gilt nicht für Ansprüche wegen: (a) Tod oder Körperverletzung durch Fahrlässigkeit; (b) Betrug oder arglistige Täuschung; (c) Ansprüche, bei denen eine kürzere Verjährungsfrist nach geltendem Recht nicht durchsetzbar wäre.",
        "p3": "Diese Klausel berührt nicht die gesetzlichen Verjährungsfristen Ihres Rechtsraums. Im Vereinigten Königreich sieht der Limitation Act 1980 eine sechsjährige Verjährungsfrist für vertragliche und deliktische Ansprüche vor, und nichts in diesen Bedingungen verkürzt diesen Zeitraum für Verbraucher.",
        "p4": "Wenn Sie Verbraucher in der Europäischen Union sind, gelten die geltenden Verjährungsfristen nach Ihrem nationalen Recht in vollem Umfang."
    },
    "es": {
        "heading": "Plazo de prescripción de reclamaciones",
        "p1": "Con sujeción a las excepciones que se indican a continuación, cualquier reclamación derivada de estos Términos o del Servicio debe presentarse dentro de los dos (2) años posteriores a la fecha en que surgió la reclamación o, si es posterior, la fecha en que tuvo conocimiento (o debería haber tenido conocimiento) de los motivos de la reclamación.",
        "p2": "Este plazo de prescripción no se aplica a reclamaciones por: (a) muerte o lesiones personales causadas por negligencia; (b) fraude o tergiversación fraudulenta; (c) cualquier reclamación en la que un plazo de prescripción más corto no sea ejecutable según la ley aplicable.",
        "p3": "Esta cláusula no afecta a los plazos de prescripción legales que se apliquen en su jurisdicción. En el Reino Unido, la Ley de Prescripción de 1980 establece un plazo de prescripción de seis años para reclamaciones por incumplimiento de contrato o responsabilidad extracontractual, y nada en estos Términos acorta dicho plazo para los consumidores.",
        "p4": "Si usted es consumidor en la Unión Europea, los plazos de prescripción aplicables en virtud de su legislación nacional se aplican en su totalidad."
    },
    "fr": {
        "heading": "Délai de prescription des réclamations",
        "p1": "Sous réserve des exceptions ci-dessous, toute réclamation découlant de ces Conditions ou du Service doit être engagée dans les deux (2) ans suivant la date à laquelle la réclamation est née ou, si elle est postérieure, la date à laquelle vous avez eu connaissance (ou auriez dû avoir connaissance) des motifs de la réclamation.",
        "p2": "Ce délai de prescription ne s'applique pas aux réclamations pour : (a) décès ou dommages corporels causés par négligence ; (b) fraude ou déclaration frauduleuse ; (c) toute réclamation pour laquelle un délai de prescription plus court serait inapplicable en vertu du droit applicable.",
        "p3": "Cette clause n'affecte pas les délais de prescription légaux applicables dans votre juridiction. Au Royaume-Uni, la loi sur la prescription de 1980 prévoit un délai de prescription de six ans pour les actions en rupture de contrat ou en responsabilité délictuelle, et rien dans ces Conditions ne raccourcit ce délai pour les consommateurs.",
        "p4": "Si vous êtes un consommateur dans l'Union européenne, les délais de prescription applicables en vertu de votre droit national s'appliquent intégralement."
    },
    "ja": {
        "heading": "請求の時効期間",
        "p1": "以下の例外を条件として、本規約またはサービスに起因する請求は、請求が発生した日から2年以内、または請求の根拠を知った（もしくは合理的に知るべきであった）日のいずれか遅い方から提起する必要があります。",
        "p2": "この時効期間は以下の請求には適用されません：(a) 過失による死亡または人身傷害、(b) 詐欺または詐欺的不実表示、(c) 適用法の下でより短い時効期間が執行できない請求。",
        "p3": "この条項は、お客様の管轄区域の法律に基づく法定の時効期間に影響を与えません。英国では、1980年出訴期限法が契約違反または不法行為に基づく請求に6年の時効期間を定めており、本規約のいかなる条項も消費者に対するその期間を短縮しません。",
        "p4": "欧州連合の消費者である場合、お客様の国内法に基づく適用される時効期間が完全に適用されます。"
    },
    "zh": {
        "heading": "索赔时效期限",
        "p1": "在以下例外情况下，任何因本条款或服务引起的索赔必须在索赔产生之日起两（2）年内提出，或者如果更晚，则在您知道（或理应知道）索赔理由之日起提出。",
        "p2": "本时效期限不适用于以下索赔：(a) 因过失造成的死亡或人身伤害；(b) 欺诈或欺诈性虚假陈述；(c) 适用法律下较短时效期限不可执行的任何索赔。",
        "p3": "本条款不影响您所在司法管辖区法律规定的法定时效期限。在英国，1980年《时效法》为违约或侵权索赔规定了六年时效期限，本条款中的任何内容均不缩短消费者的该期限。",
        "p4": "如果您是欧盟消费者，您国家法律规定的适用时效期限完全适用。"
    },
    "ar": {
        "heading": "فترة التقادم للمطالبات",
        "p1": "مع مراعاة الاستثناءات أدناه، يجب تقديم أي مطالبة ناشئة عن هذه الشروط أو الخدمة خلال سنتين (2) من تاريخ نشأة المطالبة أو، إذا كان لاحقاً، من التاريخ الذي علمت فيه (أو كان يجب أن تعلم) بأسباب المطالبة.",
        "p2": "لا تنطبق فترة التقادم هذه على المطالبات المتعلقة بـ: (أ) الوفاة أو الإصابة الجسدية الناجمة عن الإهمال؛ (ب) الاحتيال أو التحريف الاحتيالي؛ (ج) أي مطالبة تكون فيها فترة تقادم أقصر غير قابلة للتنفيذ بموجب القانون المعمول به.",
        "p3": "لا يؤثر هذا البند على فترات التقادم القانونية المعمول بها في ولايتك القضائية. في المملكة المتحدة، ينص قانون التقادم لعام 1980 على فترة تقادم مدتها ست سنوات للمطالبات القائمة على خرق العقد أو الضرر، ولا شيء في هذه الشروط يقصر تلك الفترة للمستهلكين.",
        "p4": "إذا كنت مستهلكاً في الاتحاد الأوروبي، فإن فترات التقادم المعمول بها بموجب قانونك الوطني تنطبق بالكامل."
    },
    "uk": {
        "heading": "Строк позовної давності",
        "p1": "З урахуванням наведених нижче винятків, будь-яка претензія, що виникає з або пов'язана з цими Умовами або Сервісом, має бути подана протягом двох (2) років з дати виникнення претензії або, якщо це пізніше, з дати, коли ви дізналися (або мали б розумно дізнатися) про підстави для претензії.",
        "p2": "Цей строк давності не застосовується до претензій щодо: (a) смерті або тілесних ушкоджень, спричинених недбалістю; (b) шахрайства або шахрайського введення в оману; (c) будь-якої претензії, де коротший строк давності був би нездійсненним за чинним законодавством.",
        "p3": "Це положення не впливає на законні строки позовної давності, що застосовуються відповідно до законодавства вашої юрисдикції. У Великій Британії Закон про позовну давність 1980 року передбачає шестирічний строк позовної давності для вимог на підставі порушення договору або деліктів, і жодне положення цих Умов не скорочує цей строк для споживачів.",
        "p4": "Якщо ви є споживачем у Європейському Союзі, застосовні строки позовної давності відповідно до вашого національного законодавства застосовуються повністю."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 11.2: Soften Assumption of Risk / Release of Claims
# ═══════════════════════════════════════════════════════════
ASSUMPTION_OF_RISK = {
    "en": {
        "heading": "Assumption of Risk",
        "riskHeading": "Educational Tool Acknowledgement",
        "risk1": "You acknowledge that LumenLingo is a supplementary language-learning tool, not a replacement for professional language instruction, accredited courses, or certified translation services.",
        "risk2": "Educational outcomes may vary depending on individual effort, prior knowledge, learning style, and other factors outside our control. You accept that results are not guaranteed and that the Service is provided as a general learning aid.",
        "releaseHeading": "Limitation of Claims",
        "release1": "To the maximum extent permitted by applicable law, you agree that your use of the Service is at your own risk and that LumenShore's liability is limited as set out in the Limitation of Liability section of these Terms.",
        "carveOutHeading": "Statutory Protections",
        "carveOut1": "Nothing in this section excludes or limits your statutory rights under the Consumer Rights Act 2015, the EU Consumer Rights Directive, or any other applicable consumer protection legislation.",
        "carveOut2": "This section does not apply to claims for death or personal injury caused by LumenShore's negligence, or for fraud or fraudulent misrepresentation."
    },
    "pl": {
        "heading": "Przyjęcie ryzyka",
        "riskHeading": "Potwierdzenie charakteru narzędzia edukacyjnego",
        "risk1": "Przyjmujesz do wiadomości, że LumenLingo jest uzupełniającym narzędziem do nauki języków, a nie zamiennikiem profesjonalnej nauki języka, akredytowanych kursów lub certyfikowanych usług tłumaczeniowych.",
        "risk2": "Wyniki edukacyjne mogą się różnić w zależności od indywidualnego wysiłku, wcześniejszej wiedzy, stylu uczenia się i innych czynników poza naszą kontrolą. Akceptujesz, że wyniki nie są gwarantowane i że Usługa jest świadczona jako ogólna pomoc edukacyjna.",
        "releaseHeading": "Ograniczenie roszczeń",
        "release1": "W maksymalnym zakresie dozwolonym przez obowiązujące prawo zgadzasz się, że korzystasz z Usługi na własne ryzyko i że odpowiedzialność LumenShore jest ograniczona zgodnie z sekcją Ograniczenie odpowiedzialności niniejszych Warunków.",
        "carveOutHeading": "Ochrona ustawowa",
        "carveOut1": "Żadne postanowienie niniejszej sekcji nie wyłącza ani nie ogranicza Twoich praw ustawowych na mocy Consumer Rights Act 2015, Dyrektywy UE o prawach konsumentów ani żadnych innych stosownych przepisów o ochronie konsumentów.",
        "carveOut2": "Niniejsza sekcja nie ma zastosowania do roszczeń z tytułu śmierci lub uszkodzenia ciała spowodowanego zaniedbaniem LumenShore, ani z tytułu oszustwa lub oszukańczego wprowadzenia w błąd."
    },
    "de": {
        "heading": "Risikoübernahme",
        "riskHeading": "Hinweis zum Bildungswerkzeug",
        "risk1": "Sie erkennen an, dass LumenLingo ein ergänzendes Sprachlernwerkzeug ist und keinen Ersatz für professionellen Sprachunterricht, akkreditierte Kurse oder zertifizierte Übersetzungsdienste darstellt.",
        "risk2": "Lernergebnisse können je nach individuellem Einsatz, Vorkenntnissen, Lernstil und anderen Faktoren außerhalb unserer Kontrolle variieren. Sie akzeptieren, dass Ergebnisse nicht garantiert werden und der Dienst als allgemeine Lernhilfe bereitgestellt wird.",
        "releaseHeading": "Anspruchsbeschränkung",
        "release1": "Im größtmöglichen gesetzlich zulässigen Umfang stimmen Sie zu, dass die Nutzung des Dienstes auf eigenes Risiko erfolgt und die Haftung von LumenShore wie im Abschnitt Haftungsbeschränkung dieser Bedingungen dargelegt beschränkt ist.",
        "carveOutHeading": "Gesetzlicher Schutz",
        "carveOut1": "Nichts in diesem Abschnitt schließt Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015, der EU-Verbraucherrechterichtlinie oder anderen anwendbaren Verbraucherschutzgesetzen aus oder beschränkt sie.",
        "carveOut2": "Dieser Abschnitt gilt nicht für Ansprüche wegen Tod oder Körperverletzung durch Fahrlässigkeit von LumenShore oder wegen Betrugs oder arglistiger Täuschung."
    },
    "es": {
        "heading": "Asunción de riesgo",
        "riskHeading": "Reconocimiento de herramienta educativa",
        "risk1": "Usted reconoce que LumenLingo es una herramienta complementaria de aprendizaje de idiomas, no un sustituto de la instrucción profesional de idiomas, cursos acreditados o servicios de traducción certificados.",
        "risk2": "Los resultados educativos pueden variar dependiendo del esfuerzo individual, conocimientos previos, estilo de aprendizaje y otros factores fuera de nuestro control. Usted acepta que los resultados no están garantizados y que el Servicio se proporciona como una ayuda general de aprendizaje.",
        "releaseHeading": "Limitación de reclamaciones",
        "release1": "En la máxima medida permitida por la ley aplicable, usted acepta que el uso del Servicio es bajo su propio riesgo y que la responsabilidad de LumenShore se limita según lo establecido en la sección de Limitación de responsabilidad de estos Términos.",
        "carveOutHeading": "Protecciones legales",
        "carveOut1": "Nada en esta sección excluye o limita sus derechos legales en virtud de la Consumer Rights Act 2015, la Directiva de Derechos del Consumidor de la UE o cualquier otra legislación de protección al consumidor aplicable.",
        "carveOut2": "Esta sección no se aplica a reclamaciones por muerte o lesiones personales causadas por la negligencia de LumenShore, ni por fraude o tergiversación fraudulenta."
    },
    "fr": {
        "heading": "Acceptation des risques",
        "riskHeading": "Reconnaissance d'outil éducatif",
        "risk1": "Vous reconnaissez que LumenLingo est un outil d'apprentissage des langues complémentaire, et non un substitut à l'enseignement professionnel des langues, aux cours accrédités ou aux services de traduction certifiés.",
        "risk2": "Les résultats éducatifs peuvent varier en fonction de l'effort individuel, des connaissances préalables, du style d'apprentissage et d'autres facteurs indépendants de notre volonté. Vous acceptez que les résultats ne sont pas garantis et que le Service est fourni à titre d'aide générale à l'apprentissage.",
        "releaseHeading": "Limitation des réclamations",
        "release1": "Dans toute la mesure permise par le droit applicable, vous acceptez que l'utilisation du Service est à vos risques et périls et que la responsabilité de LumenShore est limitée comme indiqué dans la section Limitation de responsabilité de ces Conditions.",
        "carveOutHeading": "Protections légales",
        "carveOut1": "Rien dans cette section n'exclut ou ne limite vos droits légaux en vertu du Consumer Rights Act 2015, de la Directive européenne sur les droits des consommateurs ou de toute autre législation applicable en matière de protection des consommateurs.",
        "carveOut2": "Cette section ne s'applique pas aux réclamations pour décès ou dommages corporels causés par la négligence de LumenShore, ni pour fraude ou déclaration frauduleuse."
    },
    "ja": {
        "heading": "リスクの引受け",
        "riskHeading": "教育ツールの確認",
        "risk1": "LumenLingoは補助的な語学学習ツールであり、プロの語学指導、認定コース、または認定翻訳サービスの代替ではないことを認めます。",
        "risk2": "教育成果は個人の努力、事前の知識、学習スタイル、およびその他の制御できない要因によって異なる場合があります。結果が保証されないこと、およびサービスが一般的な学習支援として提供されることを受け入れます。",
        "releaseHeading": "請求の制限",
        "release1": "適用法で許可される最大限の範囲で、サービスの利用はお客様自身のリスクで行われ、LumenShoreの責任は本規約の責任制限セクションに記載された通りに制限されることに同意します。",
        "carveOutHeading": "法的保護",
        "carveOut1": "本セクションのいかなる条項も、Consumer Rights Act 2015、EU消費者権利指令、またはその他の適用される消費者保護法に基づくお客様の法定権利を除外または制限するものではありません。",
        "carveOut2": "本セクションは、LumenShoreの過失による死亡または人身傷害、または詐欺もしくは詐欺的不実表示に関する請求には適用されません。"
    },
    "zh": {
        "heading": "风险承担",
        "riskHeading": "教育工具确认",
        "risk1": "您确认LumenLingo是一种补充性语言学习工具，不能替代专业语言教学、认证课程或认证翻译服务。",
        "risk2": "教育成果可能因个人努力、先前知识、学习风格以及我们无法控制的其他因素而异。您接受结果不保证，且服务作为一般学习辅助工具提供。",
        "releaseHeading": "索赔限制",
        "release1": "在适用法律允许的最大范围内，您同意使用服务的风险由您自行承担，LumenShore的责任限于本条款的责任限制部分所述。",
        "carveOutHeading": "法定保护",
        "carveOut1": "本部分的任何内容均不排除或限制您在《2015年消费者权益法》、欧盟消费者权利指令或任何其他适用的消费者保护法律下的法定权利。",
        "carveOut2": "本部分不适用于因LumenShore的过失造成的死亡或人身伤害索赔，或因欺诈或欺诈性虚假陈述引起的索赔。"
    },
    "ar": {
        "heading": "تحمل المخاطر",
        "riskHeading": "إقرار بطبيعة الأداة التعليمية",
        "risk1": "تقر بأن LumenLingo هو أداة تعليمية تكميلية لتعلم اللغات، وليس بديلاً عن التعليم المهني للغات أو الدورات المعتمدة أو خدمات الترجمة المعتمدة.",
        "risk2": "قد تختلف النتائج التعليمية حسب الجهد الفردي والمعرفة المسبقة وأسلوب التعلم وعوامل أخرى خارجة عن سيطرتنا. تقبل أن النتائج غير مضمونة وأن الخدمة مقدمة كأداة تعلم عامة.",
        "releaseHeading": "تقييد المطالبات",
        "release1": "إلى أقصى حد يسمح به القانون المعمول به، توافق على أن استخدامك للخدمة يكون على مسؤوليتك الخاصة وأن مسؤولية LumenShore محدودة كما هو منصوص عليه في قسم تحديد المسؤولية في هذه الشروط.",
        "carveOutHeading": "الحماية القانونية",
        "carveOut1": "لا شيء في هذا القسم يستبعد أو يحد من حقوقك القانونية بموجب قانون حقوق المستهلك 2015 أو توجيه حقوق المستهلك الأوروبي أو أي تشريع آخر معمول به لحماية المستهلك.",
        "carveOut2": "لا ينطبق هذا القسم على المطالبات المتعلقة بالوفاة أو الإصابة الجسدية الناجمة عن إهمال LumenShore، أو بالاحتيال أو التحريف الاحتيالي."
    },
    "uk": {
        "heading": "Прийняття ризику",
        "riskHeading": "Підтвердження характеру освітнього інструменту",
        "risk1": "Ви визнаєте, що LumenLingo є допоміжним інструментом для вивчення мов, а не заміною професійного навчання мовам, акредитованих курсів або сертифікованих перекладацьких послуг.",
        "risk2": "Освітні результати можуть відрізнятися залежно від індивідуальних зусиль, попередніх знань, стилю навчання та інших факторів, що знаходяться поза нашим контролем. Ви приймаєте, що результати не гарантуються і що Сервіс надається як загальний навчальний засіб.",
        "releaseHeading": "Обмеження претензій",
        "release1": "В максимальній мірі, дозволеній чинним законодавством, ви погоджуєтесь, що використання Сервісу здійснюється на ваш власний ризик і що відповідальність LumenShore обмежена відповідно до розділу Обмеження відповідальності цих Умов.",
        "carveOutHeading": "Законодавчий захист",
        "carveOut1": "Жодне положення цього розділу не виключає і не обмежує ваші законні права відповідно до Consumer Rights Act 2015, Директиви ЄС про права споживачів або будь-якого іншого застосовного законодавства про захист прав споживачів.",
        "carveOut2": "Цей розділ не застосовується до претензій щодо смерті або тілесних ушкоджень, спричинених недбалістю LumenShore, або шахрайства чи шахрайського введення в оману."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 11.3: Consolidated Indemnification (merge + narrow trigger + consumer carve-out)
# ═══════════════════════════════════════════════════════════
INDEMNIFICATION = {
    "en": {
        "heading": "Indemnification",
        "p1": "You agree to indemnify, defend, and hold harmless Lumenshore Limited, its directors, officers, employees, and agents from any claims, damages, losses, and expenses (including reasonable legal fees) arising from:",
        "li1": "Your breach of these Terms;",
        "li2": "Your violation of any applicable law or the rights of any third party;",
        "li3": "Any content you submit to or through the Service.",
        "p2": "This indemnity does not apply to the extent that the claim arises from our negligence, our breach of contract, or defective digital content supplied by us.",
        "p3": "If you are a consumer in the United Kingdom or the European Union, this indemnity clause does not affect your statutory rights under the Consumer Rights Act 2015 or equivalent consumer protection legislation. Nothing in this clause requires you to indemnify us for losses arising from our own fault.",
        "p4": "LumenShore reserves the right to assume the exclusive defence and control of any matter otherwise subject to indemnification by you, in which event you agree to cooperate with LumenShore in asserting any available defences."
    },
    "pl": {
        "heading": "Zwolnienie z odpowiedzialności",
        "p1": "Zgadzasz się zwolnić z odpowiedzialności i bronić Lumenshore Limited, jej dyrektorów, pracowników i przedstawicieli przed wszelkimi roszczeniami, szkodami, stratami i wydatkami (w tym uzasadnionymi kosztami prawnymi) wynikającymi z:",
        "li1": "Twojego naruszenia niniejszych Warunków;",
        "li2": "Twojego naruszenia obowiązującego prawa lub praw jakiejkolwiek osoby trzeciej;",
        "li3": "Jakichkolwiek treści przesłanych przez Ciebie do lub za pośrednictwem Usługi.",
        "p2": "To zwolnienie z odpowiedzialności nie ma zastosowania w zakresie, w jakim roszczenie wynika z naszego zaniedbania, naszego naruszenia umowy lub wadliwych treści cyfrowych dostarczonych przez nas.",
        "p3": "Jeśli jesteś konsumentem w Wielkiej Brytanii lub Unii Europejskiej, ta klauzula zwolnienia z odpowiedzialności nie wpływa na Twoje prawa ustawowe na mocy Consumer Rights Act 2015 lub równoważnych przepisów o ochronie konsumentów. Żadne postanowienie tej klauzuli nie wymaga od Ciebie zwolnienia nas z odpowiedzialności za straty wynikające z naszej własnej winy.",
        "p4": "LumenShore zastrzega sobie prawo do przejęcia wyłącznej obrony i kontroli nad każdą sprawą podlegającą zwolnieniu z odpowiedzialności, w którym to przypadku zgadzasz się współpracować z LumenShore."
    },
    "de": {
        "heading": "Freistellung",
        "p1": "Sie erklären sich bereit, Lumenshore Limited, ihre Geschäftsführer, leitenden Angestellten, Mitarbeiter und Vertreter von allen Ansprüchen, Schäden, Verlusten und Aufwendungen (einschließlich angemessener Anwaltskosten) freizustellen, die sich ergeben aus:",
        "li1": "Ihrem Verstoß gegen diese Bedingungen;",
        "li2": "Ihrem Verstoß gegen geltendes Recht oder die Rechte Dritter;",
        "li3": "Inhalten, die Sie über den Dienst einreichen.",
        "p2": "Diese Freistellung gilt nicht, soweit der Anspruch auf unserer Fahrlässigkeit, unserer Vertragsverletzung oder von uns gelieferten fehlerhaften digitalen Inhalten beruht.",
        "p3": "Wenn Sie Verbraucher im Vereinigten Königreich oder der Europäischen Union sind, berührt diese Freistellungsklausel nicht Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015 oder gleichwertigen Verbraucherschutzgesetzen. Nichts in dieser Klausel verpflichtet Sie, uns für Verluste freizustellen, die aus unserem eigenen Verschulden entstehen.",
        "p4": "LumenShore behält sich das Recht vor, die ausschließliche Verteidigung und Kontrolle über jede Angelegenheit zu übernehmen, die andernfalls Ihrer Freistellungspflicht unterliegt, wobei Sie sich bereit erklären, mit LumenShore zusammenzuarbeiten."
    },
    "es": {
        "heading": "Indemnización",
        "p1": "Usted acepta indemnizar, defender y mantener indemne a Lumenshore Limited, sus directores, ejecutivos, empleados y agentes de cualquier reclamación, daño, pérdida y gasto (incluidos los honorarios legales razonables) derivados de:",
        "li1": "Su incumplimiento de estos Términos;",
        "li2": "Su violación de cualquier ley aplicable o los derechos de terceros;",
        "li3": "Cualquier contenido que envíe a través del Servicio.",
        "p2": "Esta indemnización no se aplica en la medida en que la reclamación se deba a nuestra negligencia, nuestro incumplimiento de contrato o contenido digital defectuoso suministrado por nosotros.",
        "p3": "Si usted es consumidor en el Reino Unido o la Unión Europea, esta cláusula de indemnización no afecta a sus derechos legales en virtud de la Consumer Rights Act 2015 o legislación de protección al consumidor equivalente. Nada en esta cláusula le obliga a indemnizarnos por pérdidas derivadas de nuestra propia culpa.",
        "p4": "LumenShore se reserva el derecho de asumir la defensa exclusiva y el control de cualquier asunto sujeto a indemnización por su parte, en cuyo caso usted acepta cooperar con LumenShore."
    },
    "fr": {
        "heading": "Indemnisation",
        "p1": "Vous acceptez d'indemniser, défendre et dégager de toute responsabilité Lumenshore Limited, ses administrateurs, dirigeants, employés et agents de toute réclamation, dommage, perte et dépense (y compris les frais juridiques raisonnables) découlant de :",
        "li1": "Votre violation de ces Conditions ;",
        "li2": "Votre violation de toute loi applicable ou des droits de tiers ;",
        "li3": "Tout contenu que vous soumettez via le Service.",
        "p2": "Cette indemnisation ne s'applique pas dans la mesure où la réclamation résulte de notre négligence, de notre rupture de contrat ou de contenu numérique défectueux fourni par nous.",
        "p3": "Si vous êtes un consommateur au Royaume-Uni ou dans l'Union européenne, cette clause d'indemnisation n'affecte pas vos droits légaux en vertu du Consumer Rights Act 2015 ou de la législation équivalente sur la protection des consommateurs. Rien dans cette clause ne vous oblige à nous indemniser pour des pertes résultant de notre propre faute.",
        "p4": "LumenShore se réserve le droit d'assumer la défense exclusive de toute affaire soumise à indemnisation par vous, auquel cas vous acceptez de coopérer avec LumenShore."
    },
    "ja": {
        "heading": "補償",
        "p1": "お客様は、以下に起因するすべての請求、損害、損失、費用（合理的な弁護士費用を含む）に対して、Lumenshore Limited、その取締役、役員、従業員、代理人を補償し、防御し、害のないようにすることに同意します：",
        "li1": "お客様による本規約の違反；",
        "li2": "お客様による適用法または第三者の権利の侵害；",
        "li3": "お客様がサービスを通じて提出したコンテンツ。",
        "p2": "この補償は、請求が当社の過失、当社の契約違反、または当社が提供した欠陥のあるデジタルコンテンツに起因する場合には適用されません。",
        "p3": "英国または欧州連合の消費者の場合、この補償条項はConsumer Rights Act 2015または同等の消費者保護法に基づくお客様の法定権利に影響を与えません。この条項のいかなる部分も、当社自身の過失に起因する損失について当社を補償することをお客様に要求するものではありません。",
        "p4": "LumenShoreは、お客様の補償義務の対象となる事項の独占的な防御と管理を引き受ける権利を留保し、その場合、お客様はLumenShoreに協力することに同意します。"
    },
    "zh": {
        "heading": "赔偿",
        "p1": "您同意赔偿、辩护并使Lumenshore Limited及其董事、高管、员工和代理人免受因以下原因产生的任何索赔、损害、损失和费用（包括合理的律师费）：",
        "li1": "您违反本条款；",
        "li2": "您违反任何适用法律或第三方权利；",
        "li3": "您通过服务提交的任何内容。",
        "p2": "如果索赔源于我们的过失、我们的违约或我们提供的有缺陷的数字内容，则本赔偿不适用。",
        "p3": "如果您是英国或欧盟的消费者，本赔偿条款不影响您根据《2015年消费者权益法》或同等消费者保护立法享有的法定权利。本条款的任何规定均不要求您就因我们自身过错造成的损失对我们进行赔偿。",
        "p4": "LumenShore保留对您赔偿义务范围内的任何事项承担独家辩护和控制的权利，届时您同意配合LumenShore。"
    },
    "ar": {
        "heading": "التعويض",
        "p1": "توافق على تعويض والدفاع عن Lumenshore Limited ومديريها ومسؤوليها وموظفيها ووكلائها وحمايتهم من أي مطالبات وأضرار وخسائر ونفقات (بما في ذلك أتعاب المحاماة المعقولة) الناشئة عن:",
        "li1": "إخلالك بهذه الشروط؛",
        "li2": "انتهاكك لأي قانون معمول به أو حقوق أي طرف ثالث؛",
        "li3": "أي محتوى تقدمه عبر الخدمة.",
        "p2": "لا ينطبق هذا التعويض بالقدر الذي ينشأ فيه المطالبة من إهمالنا أو إخلالنا بالعقد أو محتوى رقمي معيب قدمناه.",
        "p3": "إذا كنت مستهلكاً في المملكة المتحدة أو الاتحاد الأوروبي، فإن بند التعويض هذا لا يؤثر على حقوقك القانونية بموجب قانون حقوق المستهلك 2015 أو تشريعات حماية المستهلك المعادلة. لا شيء في هذا البند يتطلب منك تعويضنا عن خسائر ناشئة عن خطئنا.",
        "p4": "يحتفظ LumenShore بالحق في تولي الدفاع الحصري والسيطرة على أي مسألة خاضعة لتعويضك، وفي هذه الحالة توافق على التعاون مع LumenShore."
    },
    "uk": {
        "heading": "Відшкодування",
        "p1": "Ви погоджуєтесь відшкодувати, захищати та звільнити від відповідальності Lumenshore Limited, її директорів, посадових осіб, працівників та агентів від будь-яких претензій, збитків, втрат та витрат (включаючи розумні юридичні витрати), що виникають з:",
        "li1": "Вашого порушення цих Умов;",
        "li2": "Вашого порушення будь-якого чинного законодавства або прав третіх осіб;",
        "li3": "Будь-якого контенту, який ви подаєте через Сервіс.",
        "p2": "Це відшкодування не застосовується в тій мірі, в якій претензія виникає з нашої недбалості, нашого порушення договору або дефектного цифрового контенту, наданого нами.",
        "p3": "Якщо ви є споживачем у Великій Британії чи Європейському Союзі, це положення про відшкодування не впливає на ваші законні права відповідно до Consumer Rights Act 2015 або еквівалентного законодавства про захист прав споживачів. Жодне положення цієї статті не вимагає від вас відшкодувати нам збитки, що виникли з нашої власної вини.",
        "p4": "LumenShore залишає за собою право взяти на себе виключний захист та контроль будь-якої справи, що підлягає вашому відшкодуванню, і в цьому випадку ви погоджуєтесь співпрацювати з LumenShore."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 11.4: Fix Liability Cap — consumer-paid amount, not net of commission
# ═══════════════════════════════════════════════════════════
IAP_NOTE = {
    "en": "For purchases made through the Apple App Store, the liability cap is based on the total amount you paid, not the net amount received by Lumenshore after Apple's commission.",
    "pl": "W przypadku zakupów dokonanych za pośrednictwem Apple App Store, limit odpowiedzialności opiera się na łącznej kwocie zapłaconej przez Ciebie, a nie na kwocie netto otrzymanej przez Lumenshore po potrąceniu prowizji Apple.",
    "de": "Bei Käufen über den Apple App Store basiert die Haftungsgrenze auf dem Gesamtbetrag, den Sie gezahlt haben, nicht auf dem Nettobetrag, den Lumenshore nach Abzug der Apple-Provision erhalten hat.",
    "es": "Para las compras realizadas a través de Apple App Store, el límite de responsabilidad se basa en la cantidad total que usted pagó, no en la cantidad neta recibida por Lumenshore después de la comisión de Apple.",
    "fr": "Pour les achats effectués via l'Apple App Store, le plafond de responsabilité est basé sur le montant total que vous avez payé, et non sur le montant net reçu par Lumenshore après la commission d'Apple.",
    "ja": "Apple App Storeを通じて行われた購入の場合、責任の上限はお客様が支払った総額に基づくものであり、Appleの手数料控除後にLumenShoreが受け取った純額ではありません。",
    "zh": "对于通过Apple App Store进行的购买，责任上限基于您支付的总金额，而非Lumenshore在扣除Apple佣金后收到的净金额。",
    "ar": "بالنسبة للمشتريات التي تتم عبر Apple App Store، يستند الحد الأقصى للمسؤولية إلى المبلغ الإجمالي الذي دفعته، وليس المبلغ الصافي الذي تلقاه Lumenshore بعد عمولة Apple.",
    "uk": "Для покупок, здійснених через Apple App Store, ліміт відповідальності базується на загальній сумі, яку ви сплатили, а не на чистій сумі, отриманій Lumenshore після комісії Apple."
}

# ═══════════════════════════════════════════════════════════
# Story 11.4 also: Fix damageExclusions – convert ALL-CAPS to sentence case
# ═══════════════════════════════════════════════════════════
DAMAGE_EXCLUSIONS = {
    "en": {
        "heading": "Exclusion of Consequential Damages",
        "p1": "To the maximum extent permitted by applicable law, Lumenshore shall not be liable for any: loss of data, lost profits, lost revenue, lost savings, loss of goodwill, business interruption, cost of substitute services, incidental damages, consequential damages, special damages, exemplary damages, or punitive damages.",
        "p2": "This exclusion applies even if Lumenshore has been advised of the possibility of such damages, and even if a limited remedy set forth herein fails of its essential purpose.",
        "p3": "Nothing in this section excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded or limited under the Consumer Rights Act 2015 or other applicable law."
    },
    "pl": {
        "heading": "Wyłączenie szkód następczych",
        "p1": "W maksymalnym zakresie dozwolonym przez obowiązujące prawo, Lumenshore nie ponosi odpowiedzialności za: utratę danych, utracone zyski, utracone przychody, utracone oszczędności, utratę wartości firmy, przerwy w działalności, koszty usług zastępczych, szkody uboczne, szkody następcze, szkody specjalne, odszkodowania przykładowe lub karne.",
        "p2": "To wyłączenie ma zastosowanie nawet jeśli Lumenshore został powiadomiony o możliwości wystąpienia takich szkód i nawet jeśli ograniczony środek zaradczy określony w niniejszym dokumencie nie spełni swojego podstawowego celu.",
        "p3": "Żadne postanowienie tej sekcji nie wyłącza ani nie ogranicza odpowiedzialności za śmierć lub uszkodzenie ciała spowodowane zaniedbaniem, oszustwo lub oszukańcze wprowadzenie w błąd, ani żadnej odpowiedzialności, której nie można wyłączyć lub ograniczyć na mocy Consumer Rights Act 2015 lub innego obowiązującego prawa."
    },
    "de": {
        "heading": "Ausschluss von Folgeschäden",
        "p1": "Im größtmöglichen gesetzlich zulässigen Umfang haftet Lumenshore nicht für: Datenverlust, entgangenen Gewinn, entgangene Einnahmen, entgangene Ersparnisse, Verlust des Firmenwerts, Betriebsunterbrechung, Kosten für Ersatzdienste, Nebenschäden, Folgeschäden, besondere Schäden, exemplarische Schäden oder Strafschadensersatz.",
        "p2": "Dieser Ausschluss gilt auch dann, wenn Lumenshore auf die Möglichkeit solcher Schäden hingewiesen wurde und auch wenn ein beschränktes Rechtsmittel seinen wesentlichen Zweck verfehlt.",
        "p3": "Nichts in diesem Abschnitt schließt die Haftung für Tod oder Körperverletzung durch Fahrlässigkeit, Betrug oder arglistige Täuschung oder eine Haftung aus, die nach dem Consumer Rights Act 2015 oder anderem anwendbaren Recht nicht ausgeschlossen oder beschränkt werden kann."
    },
    "es": {
        "heading": "Exclusión de daños consecuentes",
        "p1": "En la máxima medida permitida por la ley aplicable, Lumenshore no será responsable de: pérdida de datos, lucro cesante, pérdida de ingresos, pérdida de ahorros, pérdida de fondo de comercio, interrupción del negocio, costo de servicios sustitutivos, daños incidentales, daños consecuentes, daños especiales, daños ejemplares o daños punitivos.",
        "p2": "Esta exclusión se aplica incluso si Lumenshore ha sido advertido de la posibilidad de dichos daños, e incluso si un recurso limitado establecido aquí no cumple su propósito esencial.",
        "p3": "Nada en esta sección excluye o limita la responsabilidad por muerte o lesiones personales causadas por negligencia, fraude o tergiversación fraudulenta, o cualquier responsabilidad que no pueda ser excluida o limitada según la Consumer Rights Act 2015 u otra ley aplicable."
    },
    "fr": {
        "heading": "Exclusion des dommages consécutifs",
        "p1": "Dans toute la mesure permise par le droit applicable, Lumenshore ne sera pas responsable de : perte de données, manque à gagner, perte de revenus, perte d'économies, perte de clientèle, interruption d'activité, coût de services de remplacement, dommages accessoires, dommages consécutifs, dommages spéciaux, dommages exemplaires ou dommages punitifs.",
        "p2": "Cette exclusion s'applique même si Lumenshore a été informé de la possibilité de tels dommages, et même si un recours limité prévu aux présentes n'atteint pas son objectif essentiel.",
        "p3": "Rien dans cette section n'exclut ou ne limite la responsabilité pour décès ou dommages corporels causés par négligence, fraude ou déclaration frauduleuse, ou toute responsabilité qui ne peut être exclue ou limitée en vertu du Consumer Rights Act 2015 ou de toute autre loi applicable."
    },
    "ja": {
        "heading": "結果的損害の免責",
        "p1": "適用法で許可される最大限の範囲で、LumenShoreは以下について責任を負いません：データの損失、逸失利益、収益の損失、貯蓄の損失、のれんの喪失、事業の中断、代替サービスの費用、付随的損害、結果的損害、特別損害、懲罰的損害。",
        "p2": "この免責は、LumenShoreがそのような損害の可能性を知らされていた場合でも、また本書に定める限定的な救済がその本質的な目的を達成しなかった場合でも適用されます。",
        "p3": "本セクションのいかなる条項も、過失による死亡または人身傷害、詐欺または詐欺的不実表示、またはConsumer Rights Act 2015またはその他の適用法の下で除外または制限できない責任を除外または制限するものではありません。"
    },
    "zh": {
        "heading": "间接损害免责",
        "p1": "在适用法律允许的最大范围内，Lumenshore不对以下情况承担责任：数据丢失、利润损失、收入损失、储蓄损失、商誉损失、业务中断、替代服务费用、附带损害、间接损害、特殊损害、惩戒性损害或惩罚性损害。",
        "p2": "即使Lumenshore已被告知此类损害的可能性，且即使本文规定的有限救济未能实现其基本目的，本免责条款仍然适用。",
        "p3": "本部分的任何内容均不排除或限制因过失造成的死亡或人身伤害、欺诈或欺诈性虚假陈述的责任，或根据《2015年消费者权益法》或其他适用法律不能被排除或限制的任何责任。"
    },
    "ar": {
        "heading": "استبعاد الأضرار التبعية",
        "p1": "إلى أقصى حد يسمح به القانون المعمول به، لن يكون Lumenshore مسؤولاً عن: فقدان البيانات، الأرباح المفقودة، الإيرادات المفقودة، المدخرات المفقودة، فقدان السمعة التجارية، انقطاع الأعمال، تكلفة الخدمات البديلة، الأضرار العرضية، الأضرار التبعية، الأضرار الخاصة، التعويضات التأديبية أو العقابية.",
        "p2": "ينطبق هذا الاستبعاد حتى لو تم إخطار Lumenshore بإمكانية حدوث مثل هذه الأضرار، وحتى لو فشل أي تعويض محدود في تحقيق غرضه الأساسي.",
        "p3": "لا شيء في هذا القسم يستبعد أو يحد من المسؤولية عن الوفاة أو الإصابة الجسدية الناجمة عن الإهمال، أو الاحتيال أو التحريف الاحتيالي، أو أي مسؤولية لا يمكن استبعادها أو تقييدها بموجب قانون حقوق المستهلك 2015 أو أي قانون معمول به آخر."
    },
    "uk": {
        "heading": "Виключення непрямих збитків",
        "p1": "В максимальній мірі, дозволеній чинним законодавством, Lumenshore не несе відповідальності за: втрату даних, упущену вигоду, втрату доходу, втрату заощаджень, втрату ділової репутації, переривання бізнесу, витрати на замінні послуги, побічні збитки, непрямі збитки, спеціальні збитки, показові збитки або штрафні збитки.",
        "p2": "Це виключення застосовується навіть якщо Lumenshore було повідомлено про можливість таких збитків, і навіть якщо обмежений засіб правового захисту не досягне своєї основної мети.",
        "p3": "Жодне положення цього розділу не виключає і не обмежує відповідальність за смерть або тілесні ушкодження, спричинені недбалістю, шахрайство або шахрайське введення в оману, або будь-яку відповідальність, яка не може бути виключена або обмежена відповідно до Consumer Rights Act 2015 або іншого чинного законодавства."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 11.5: UK ADR entity disclosure
# ═══════════════════════════════════════════════════════════
UK_ADR = {
    "en": {
        "heading": "UK Alternative Dispute Resolution (ADR)",
        "p1": "Under the Alternative Dispute Resolution for Consumer Disputes (Competent Authorities and Information) Regulations 2015, we are required to inform you about alternative dispute resolution.",
        "p2": "Lumenshore Limited is willing to participate in alternative dispute resolution through a certified ADR body. The relevant ADR provider is:",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "Website: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "Address: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "Before referring a matter to ADR, we ask that you first contact us at <emailLink>legal@lumenlingo.com</emailLink> so that we can attempt to resolve your complaint directly.",
        "p4": "If you are an EU consumer, you may also use the European Commission's Online Dispute Resolution (ODR) platform at <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    },
    "pl": {
        "heading": "Brytyjskie alternatywne rozwiązywanie sporów (ADR)",
        "p1": "Zgodnie z przepisami dotyczącymi alternatywnego rozwiązywania sporów konsumenckich (Alternative Dispute Resolution for Consumer Disputes Regulations 2015), jesteśmy zobowiązani poinformować Cię o alternatywnym rozwiązywaniu sporów.",
        "p2": "Lumenshore Limited jest skłonny uczestniczyć w alternatywnym rozwiązywaniu sporów za pośrednictwem certyfikowanego organu ADR. Właściwy dostawca ADR to:",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "Strona internetowa: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "Adres: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "Przed skierowaniem sprawy do ADR prosimy o kontakt z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>, abyśmy mogli spróbować rozwiązać Twoją reklamację bezpośrednio.",
        "p4": "Jeśli jesteś konsumentem w UE, możesz również skorzystać z platformy ODR Komisji Europejskiej pod adresem <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    },
    "de": {
        "heading": "UK Alternative Streitbeilegung (ADR)",
        "p1": "Gemäß den Alternative Dispute Resolution for Consumer Disputes Regulations 2015 sind wir verpflichtet, Sie über alternative Streitbeilegung zu informieren.",
        "p2": "Lumenshore Limited ist bereit, an alternativer Streitbeilegung durch eine zertifizierte ADR-Stelle teilzunehmen. Der zuständige ADR-Anbieter ist:",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "Website: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "Adresse: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "Bevor Sie eine Angelegenheit an ADR verweisen, bitten wir Sie, uns zunächst unter <emailLink>legal@lumenlingo.com</emailLink> zu kontaktieren, damit wir versuchen können, Ihre Beschwerde direkt zu lösen.",
        "p4": "Als EU-Verbraucher können Sie auch die Online-Streitbeilegungsplattform (ODR) der Europäischen Kommission nutzen: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    },
    "es": {
        "heading": "Resolución alternativa de disputas del Reino Unido (ADR)",
        "p1": "De conformidad con las Alternative Dispute Resolution for Consumer Disputes Regulations 2015, estamos obligados a informarle sobre la resolución alternativa de disputas.",
        "p2": "Lumenshore Limited está dispuesto a participar en la resolución alternativa de disputas a través de un organismo ADR certificado. El proveedor de ADR relevante es:",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "Sitio web: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "Dirección: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "Antes de remitir un asunto a ADR, le pedimos que primero se comunique con nosotros en <emailLink>legal@lumenlingo.com</emailLink> para que podamos intentar resolver su queja directamente.",
        "p4": "Si es consumidor de la UE, también puede utilizar la plataforma ODR de la Comisión Europea en <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    },
    "fr": {
        "heading": "Résolution alternative des litiges au Royaume-Uni (ADR)",
        "p1": "Conformément aux Alternative Dispute Resolution for Consumer Disputes Regulations 2015, nous sommes tenus de vous informer sur la résolution alternative des litiges.",
        "p2": "Lumenshore Limited est disposé à participer à la résolution alternative des litiges par l'intermédiaire d'un organisme ADR certifié. Le fournisseur ADR concerné est :",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "Site web : <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "Adresse : 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "Avant de soumettre une affaire à l'ADR, nous vous demandons de nous contacter d'abord à <emailLink>legal@lumenlingo.com</emailLink> afin que nous puissions tenter de résoudre votre réclamation directement.",
        "p4": "Si vous êtes un consommateur de l'UE, vous pouvez également utiliser la plateforme ODR de la Commission européenne à <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    },
    "ja": {
        "heading": "英国代替紛争解決（ADR）",
        "p1": "2015年消費者紛争のための代替紛争解決規則に基づき、代替紛争解決についてお知らせする義務があります。",
        "p2": "Lumenshore Limitedは、認定ADR機関を通じた代替紛争解決に参加する意思があります。関連するADRプロバイダーは：",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "ウェブサイト: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "住所: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "ADRに問題を付託する前に、まず<emailLink>legal@lumenlingo.com</emailLink>までご連絡ください。直接苦情を解決するよう努めます。",
        "p4": "EU消費者の場合、欧州委員会のオンライン紛争解決（ODR）プラットフォーム<odrLink>https://ec.europa.eu/consumers/odr/</odrLink>もご利用いただけます。"
    },
    "zh": {
        "heading": "英国替代争议解决（ADR）",
        "p1": "根据2015年消费者争议替代争议解决条例，我们有义务告知您有关替代争议解决的信息。",
        "p2": "Lumenshore Limited愿意通过认证的ADR机构参与替代争议解决。相关ADR提供者为：",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "网站：<cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "地址：100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "在将事项提交ADR之前，请先通过<emailLink>legal@lumenlingo.com</emailLink>与我们联系，以便我们尝试直接解决您的投诉。",
        "p4": "如果您是欧盟消费者，您还可以使用欧盟委员会的在线争议解决（ODR）平台：<odrLink>https://ec.europa.eu/consumers/odr/</odrLink>。"
    },
    "ar": {
        "heading": "حل النزاعات البديل في المملكة المتحدة (ADR)",
        "p1": "بموجب لوائح حل النزاعات البديل لنزاعات المستهلكين 2015، نحن ملزمون بإبلاغك عن حل النزاعات البديل.",
        "p2": "Lumenshore Limited مستعد للمشاركة في حل النزاعات البديل من خلال هيئة ADR معتمدة. مزود ADR المعني هو:",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "الموقع الإلكتروني: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "العنوان: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "قبل إحالة الأمر إلى ADR، نطلب منك الاتصال بنا أولاً على <emailLink>legal@lumenlingo.com</emailLink> حتى نتمكن من محاولة حل شكواك مباشرة.",
        "p4": "إذا كنت مستهلكاً في الاتحاد الأوروبي، يمكنك أيضاً استخدام منصة حل النزاعات عبر الإنترنت (ODR) التابعة للمفوضية الأوروبية على <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    },
    "uk": {
        "heading": "Альтернативне вирішення спорів у Великій Британії (ADR)",
        "p1": "Відповідно до Правил альтернативного вирішення споживчих спорів 2015 року, ми зобов'язані повідомити вас про альтернативне вирішення спорів.",
        "p2": "Lumenshore Limited готова брати участь в альтернативному вирішенні спорів через сертифікований орган ADR. Відповідний постачальник ADR:",
        "provider": "<b>Centre for Effective Dispute Resolution (CEDR)</b>",
        "providerWebsite": "Веб-сайт: <cedrLink>https://www.cedr.com</cedrLink>",
        "providerAddress": "Адреса: 100 St Paul's Churchyard, London, EC4M 8BU",
        "p3": "Перед зверненням до ADR просимо спочатку зв'язатися з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>, щоб ми могли спробувати вирішити вашу скаргу безпосередньо.",
        "p4": "Якщо ви є споживачем ЄС, ви також можете скористатися платформою онлайн-вирішення спорів (ODR) Європейської Комісії: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 11.6: Registered address and system requirements
# ═══════════════════════════════════════════════════════════
CONTACT_US_ADDRESS = {
    "en": "<b>Registered Address</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, England",
    "pl": "<b>Adres siedziby</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Anglia",
    "de": "<b>Eingetragene Adresse</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, England",
    "es": "<b>Dirección registrada</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Inglaterra",
    "fr": "<b>Adresse enregistrée</b> : Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, Angleterre",
    "ja": "<b>登録住所</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, England",
    "zh": "<b>注册地址</b>：Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, England",
    "ar": "<b>العنوان المسجل</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, England",
    "uk": "<b>Зареєстрована адреса</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, LE4 9HA, England"
}

SYSTEM_REQUIREMENTS = {
    "en": {
        "heading": "System Requirements",
        "p1": "To use the LumenLingo iOS app, your device must meet the following minimum requirements:",
        "li1": "<b>Operating system</b>: iOS 17.0 or later",
        "li2": "<b>Device</b>: iPhone or iPad",
        "li3": "<b>Internet connectivity</b>: an active internet connection is required for initial setup, content downloads, authentication, and subscription management. Certain features (flashcard review of previously downloaded content) may be available offline.",
        "li4": "<b>Storage</b>: approximately 100 MB of free storage space for the app, plus additional space for downloaded content",
        "li5": "<b>iCloud</b>: an iCloud account is required for cross-device sync of learning progress. iCloud sync is optional; the app is fully functional without it on a single device.",
        "p2": "To access the LumenLingo website, you need a modern web browser with JavaScript enabled (Chrome, Safari, Firefox, or Edge — current version or one version prior)."
    },
    "pl": {
        "heading": "Wymagania systemowe",
        "p1": "Aby korzystać z aplikacji LumenLingo na iOS, Twoje urządzenie musi spełniać następujące minimalne wymagania:",
        "li1": "<b>System operacyjny</b>: iOS 17.0 lub nowszy",
        "li2": "<b>Urządzenie</b>: iPhone lub iPad",
        "li3": "<b>Połączenie internetowe</b>: aktywne połączenie internetowe jest wymagane do początkowej konfiguracji, pobierania treści, uwierzytelniania i zarządzania subskrypcjami. Niektóre funkcje (powtórka fiszek z wcześniej pobranej treści) mogą być dostępne offline.",
        "li4": "<b>Pamięć</b>: około 100 MB wolnej przestrzeni dyskowej na aplikację, plus dodatkowa przestrzeń na pobrane treści",
        "li5": "<b>iCloud</b>: konto iCloud jest wymagane do synchronizacji postępów nauki między urządzeniami. Synchronizacja iCloud jest opcjonalna; aplikacja działa w pełni bez niej na jednym urządzeniu.",
        "p2": "Aby uzyskać dostęp do strony internetowej LumenLingo, potrzebujesz nowoczesnej przeglądarki z włączoną obsługą JavaScript (Chrome, Safari, Firefox lub Edge — bieżąca wersja lub jedna wersja wstecz)."
    },
    "de": {
        "heading": "Systemanforderungen",
        "p1": "Um die LumenLingo iOS-App zu nutzen, muss Ihr Gerät die folgenden Mindestanforderungen erfüllen:",
        "li1": "<b>Betriebssystem</b>: iOS 17.0 oder höher",
        "li2": "<b>Gerät</b>: iPhone oder iPad",
        "li3": "<b>Internetverbindung</b>: eine aktive Internetverbindung ist für die Ersteinrichtung, das Herunterladen von Inhalten, die Authentifizierung und die Abonnementverwaltung erforderlich. Bestimmte Funktionen (Karteikarten-Wiederholung bereits heruntergeladener Inhalte) können offline verfügbar sein.",
        "li4": "<b>Speicher</b>: ca. 100 MB freier Speicherplatz für die App, plus zusätzlicher Speicherplatz für heruntergeladene Inhalte",
        "li5": "<b>iCloud</b>: ein iCloud-Konto ist für die geräteübergreifende Synchronisierung des Lernfortschritts erforderlich. Die iCloud-Synchronisierung ist optional; die App ist auf einem einzelnen Gerät voll funktionsfähig ohne sie.",
        "p2": "Um auf die LumenLingo-Website zuzugreifen, benötigen Sie einen modernen Webbrowser mit aktiviertem JavaScript (Chrome, Safari, Firefox oder Edge — aktuelle Version oder eine Version davor)."
    },
    "es": {
        "heading": "Requisitos del sistema",
        "p1": "Para usar la aplicación LumenLingo para iOS, su dispositivo debe cumplir los siguientes requisitos mínimos:",
        "li1": "<b>Sistema operativo</b>: iOS 17.0 o posterior",
        "li2": "<b>Dispositivo</b>: iPhone o iPad",
        "li3": "<b>Conectividad a internet</b>: se requiere una conexión activa a internet para la configuración inicial, descarga de contenido, autenticación y gestión de suscripciones. Ciertas funciones (revisión de tarjetas de contenido previamente descargado) pueden estar disponibles sin conexión.",
        "li4": "<b>Almacenamiento</b>: aproximadamente 100 MB de espacio libre para la aplicación, más espacio adicional para contenido descargado",
        "li5": "<b>iCloud</b>: se requiere una cuenta de iCloud para la sincronización del progreso de aprendizaje entre dispositivos. La sincronización de iCloud es opcional; la aplicación es totalmente funcional sin ella en un solo dispositivo.",
        "p2": "Para acceder al sitio web de LumenLingo, necesita un navegador web moderno con JavaScript habilitado (Chrome, Safari, Firefox o Edge — versión actual o una versión anterior)."
    },
    "fr": {
        "heading": "Configuration requise",
        "p1": "Pour utiliser l'application LumenLingo iOS, votre appareil doit répondre aux exigences minimales suivantes :",
        "li1": "<b>Système d'exploitation</b> : iOS 17.0 ou ultérieur",
        "li2": "<b>Appareil</b> : iPhone ou iPad",
        "li3": "<b>Connectivité Internet</b> : une connexion Internet active est requise pour la configuration initiale, le téléchargement de contenu, l'authentification et la gestion des abonnements. Certaines fonctionnalités (révision des cartes de contenu précédemment téléchargé) peuvent être disponibles hors ligne.",
        "li4": "<b>Stockage</b> : environ 100 Mo d'espace libre pour l'application, plus un espace supplémentaire pour le contenu téléchargé",
        "li5": "<b>iCloud</b> : un compte iCloud est requis pour la synchronisation inter-appareils de la progression d'apprentissage. La synchronisation iCloud est optionnelle ; l'application est entièrement fonctionnelle sans elle sur un seul appareil.",
        "p2": "Pour accéder au site web LumenLingo, vous avez besoin d'un navigateur web moderne avec JavaScript activé (Chrome, Safari, Firefox ou Edge — version actuelle ou une version antérieure)."
    },
    "ja": {
        "heading": "システム要件",
        "p1": "LumenLingo iOSアプリを使用するには、お使いのデバイスが以下の最小要件を満たしている必要があります：",
        "li1": "<b>オペレーティングシステム</b>: iOS 17.0以降",
        "li2": "<b>デバイス</b>: iPhoneまたはiPad",
        "li3": "<b>インターネット接続</b>: 初期セットアップ、コンテンツのダウンロード、認証、サブスクリプション管理にはアクティブなインターネット接続が必要です。一部の機能（以前にダウンロードしたコンテンツのフラッシュカード復習）はオフラインで利用できる場合があります。",
        "li4": "<b>ストレージ</b>: アプリに約100MBの空き容量、およびダウンロードコンテンツ用の追加容量",
        "li5": "<b>iCloud</b>: デバイス間の学習進捗同期にはiCloudアカウントが必要です。iCloud同期はオプションです。単一デバイスでは同期なしで完全に機能します。",
        "p2": "LumenLingoウェブサイトにアクセスするには、JavaScriptが有効なモダンウェブブラウザ（Chrome、Safari、Firefox、またはEdge — 現行バージョンまたは1つ前のバージョン）が必要です。"
    },
    "zh": {
        "heading": "系统要求",
        "p1": "要使用LumenLingo iOS应用，您的设备必须满足以下最低要求：",
        "li1": "<b>操作系统</b>：iOS 17.0或更高版本",
        "li2": "<b>设备</b>：iPhone或iPad",
        "li3": "<b>互联网连接</b>：初始设置、内容下载、认证和订阅管理需要活跃的互联网连接。某些功能（之前下载内容的闪卡复习）可能在离线状态下可用。",
        "li4": "<b>存储空间</b>：应用约需100MB可用存储空间，另需额外空间用于下载的内容",
        "li5": "<b>iCloud</b>：跨设备同步学习进度需要iCloud账户。iCloud同步是可选的；在单一设备上，应用无需同步即可完全正常运行。",
        "p2": "要访问LumenLingo网站，您需要启用JavaScript的现代网页浏览器（Chrome、Safari、Firefox或Edge — 当前版本或前一版本）。"
    },
    "ar": {
        "heading": "متطلبات النظام",
        "p1": "لاستخدام تطبيق LumenLingo على iOS، يجب أن يستوفي جهازك المتطلبات الدنيا التالية:",
        "li1": "<b>نظام التشغيل</b>: iOS 17.0 أو أحدث",
        "li2": "<b>الجهاز</b>: iPhone أو iPad",
        "li3": "<b>الاتصال بالإنترنت</b>: يلزم اتصال نشط بالإنترنت للإعداد الأولي وتنزيل المحتوى والمصادقة وإدارة الاشتراكات. قد تكون بعض الميزات (مراجعة البطاقات التعليمية للمحتوى الذي تم تنزيله مسبقاً) متاحة بدون اتصال.",
        "li4": "<b>التخزين</b>: حوالي 100 ميجابايت من مساحة التخزين المتاحة للتطبيق، بالإضافة إلى مساحة إضافية للمحتوى المنزل",
        "li5": "<b>iCloud</b>: يلزم حساب iCloud لمزامنة تقدم التعلم عبر الأجهزة. مزامنة iCloud اختيارية؛ يعمل التطبيق بكامل وظائفه بدونها على جهاز واحد.",
        "p2": "للوصول إلى موقع LumenLingo الإلكتروني، تحتاج إلى متصفح ويب حديث مع تمكين JavaScript (Chrome أو Safari أو Firefox أو Edge — الإصدار الحالي أو إصدار واحد سابق)."
    },
    "uk": {
        "heading": "Системні вимоги",
        "p1": "Для використання додатка LumenLingo для iOS ваш пристрій повинен відповідати наступним мінімальним вимогам:",
        "li1": "<b>Операційна система</b>: iOS 17.0 або новіша",
        "li2": "<b>Пристрій</b>: iPhone або iPad",
        "li3": "<b>Підключення до Інтернету</b>: активне підключення до Інтернету необхідне для початкового налаштування, завантаження контенту, автентифікації та управління підписками. Деякі функції (перегляд флеш-карток раніше завантаженого контенту) можуть бути доступні офлайн.",
        "li4": "<b>Сховище</b>: приблизно 100 МБ вільного місця для додатка, плюс додатковий простір для завантаженого контенту",
        "li5": "<b>iCloud</b>: обліковий запис iCloud потрібен для синхронізації прогресу навчання між пристроями. Синхронізація iCloud необов'язкова; додаток повністю функціональний без неї на одному пристрої.",
        "p2": "Для доступу до веб-сайту LumenLingo вам потрібен сучасний веб-браузер з увімкненим JavaScript (Chrome, Safari, Firefox або Edge — поточна версія або одна попередня)."
    }
}


def process_all():
    for locale in LOCALES:
        fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)

        terms = data['Terms']
        changes = []

        # Story 11.1: Replace claimsLimitation
        terms['claimsLimitation'] = CLAIMS_LIMITATION[locale]
        changes.append('11.1 claimsLimitation')

        # Story 11.2: Replace assumptionOfRisk (remove all-caps, narrow scope, remove CA 1542)
        terms['assumptionOfRisk'] = ASSUMPTION_OF_RISK[locale]
        changes.append('11.2 assumptionOfRisk')

        # Story 11.3: Merge indemnification — replace both with single consolidated clause
        terms['indemnification'] = INDEMNIFICATION[locale]
        # Remove the duplicate userIndemnification section
        if 'userIndemnification' in terms:
            del terms['userIndemnification']
            changes.append('11.3 merged indemnification (removed userIndemnification)')
        else:
            changes.append('11.3 indemnification (userIndemnification already removed)')

        # Story 11.4: Fix liability cap iapNote
        terms['tieredLiabilityCaps']['iapNote'] = IAP_NOTE[locale]
        changes.append('11.4 iapNote')

        # Story 11.4 also: Fix damageExclusions (convert all-caps + add CRA carve-out)
        terms['damageExclusions'] = DAMAGE_EXCLUSIONS[locale]
        changes.append('11.4 damageExclusions')

        # Story 11.5: Add UK ADR
        terms['ukAdr'] = UK_ADR[locale]
        changes.append('11.5 ukAdr')

        # Story 11.6: Add registered address to contact section
        terms['contactUs']['address'] = CONTACT_US_ADDRESS[locale]
        changes.append('11.6 address')

        # Story 11.6: Add system requirements
        terms['systemRequirements'] = SYSTEM_REQUIREMENTS[locale]
        changes.append('11.6 systemRequirements')

        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')

        print(f'{locale}.json: {", ".join(changes)}')


process_all()

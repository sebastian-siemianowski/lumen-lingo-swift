#!/usr/bin/env python3
"""Story 14.1 — Add Dispute Resolution section to Terms of Service in all 10 locales."""

import json, os

BASE = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages"

TRANSLATIONS = {
    "en": {
        "disputeResolution": {
            "heading": "Dispute Resolution",
            "intro": "We believe most concerns can be resolved quickly and amicably. If a dispute arises between you and LumenShore in connection with these Terms or your use of the Service, the following procedure applies:",
            "step1Heading": "Step 1 — Informal Resolution",
            "step1P1": "Before initiating any formal proceedings, please contact us at <emailLink>support@lumenlingo.com</emailLink> with a detailed description of your concern. We commit to engaging in good faith discussions to resolve the matter within <b>30 days</b> of receiving your communication.",
            "step2Heading": "Step 2 — Mediation",
            "step2P1": "If informal discussions do not resolve the dispute within the 30-day period, either party may propose mediation through a mutually agreed mediator. Mediation is voluntary and the costs shall be shared equally unless otherwise agreed.",
            "step3Heading": "Step 3 — Court Proceedings",
            "step3P1": "If the dispute remains unresolved after good faith informal resolution and, where attempted, mediation, either party may commence court proceedings. The courts of England and Wales shall have exclusive jurisdiction, subject to the consumer protection carve-outs below.",
            "odrHeading": "EU Online Dispute Resolution",
            "odrP1": "If you are a consumer in the European Union, you may also use the European Commission's Online Dispute Resolution (ODR) platform to resolve disputes: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. Our email for ODR purposes is support@lumenlingo.com.",
            "arbitrationHeading": "Arbitration for United States Users",
            "arbitrationP1": "If you reside in the United States, any dispute that cannot be resolved through the informal resolution process above shall be resolved by <b>binding individual arbitration</b> rather than in court, except that you may assert claims in small claims court if your claims qualify. The arbitration shall be administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules.",
            "arbitrationP2": "You have the right to <b>opt out</b> of this arbitration clause within 30 days of first accepting these Terms by sending written notice to support@lumenlingo.com. If you opt out, disputes will be resolved in the courts of England and Wales.",
            "classActionHeading": "Class Action Waiver",
            "classActionP1": "To the maximum extent permitted by applicable law, you and LumenShore agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If this waiver is found to be unenforceable in your jurisdiction, the remaining provisions of this section continue in full force.",
            "consumerNote": "If you are a consumer in the European Union or the United Kingdom, nothing in this section affects your statutory rights, including the right to bring proceedings in the courts of your country of residence."
        }
    },
    "es": {
        "disputeResolution": {
            "heading": "Resolucion de disputas",
            "intro": "Creemos que la mayoria de las inquietudes pueden resolverse de forma rapida y amigable. Si surge una disputa entre usted y LumenShore en relacion con estos Terminos o su uso del Servicio, se aplica el siguiente procedimiento:",
            "step1Heading": "Paso 1 — Resolucion informal",
            "step1P1": "Antes de iniciar cualquier procedimiento formal, pongase en contacto con nosotros en <emailLink>support@lumenlingo.com</emailLink> con una descripcion detallada de su inquietud. Nos comprometemos a participar en discusiones de buena fe para resolver el asunto dentro de los <b>30 dias</b> siguientes a la recepcion de su comunicacion.",
            "step2Heading": "Paso 2 — Mediacion",
            "step2P1": "Si las discusiones informales no resuelven la disputa dentro del periodo de 30 dias, cualquiera de las partes puede proponer una mediacion a traves de un mediador mutuamente acordado. La mediacion es voluntaria y los costos se compartiran por igual, salvo acuerdo en contrario.",
            "step3Heading": "Paso 3 — Procedimientos judiciales",
            "step3P1": "Si la disputa permanece sin resolver despues de la resolucion informal de buena fe y, cuando se haya intentado, la mediacion, cualquiera de las partes puede iniciar procedimientos judiciales. Los tribunales de Inglaterra y Gales tendran jurisdiccion exclusiva, sujeto a las excepciones de proteccion al consumidor a continuacion.",
            "odrHeading": "Resolucion de disputas en linea de la UE",
            "odrP1": "Si usted es un consumidor en la Union Europea, tambien puede utilizar la plataforma de Resolucion de Disputas en Linea (ODR) de la Comision Europea para resolver disputas: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. Nuestro correo electronico para fines de ODR es support@lumenlingo.com.",
            "arbitrationHeading": "Arbitraje para usuarios de Estados Unidos",
            "arbitrationP1": "Si reside en los Estados Unidos, cualquier disputa que no pueda resolverse a traves del proceso de resolucion informal anterior se resolvera mediante <b>arbitraje individual vinculante</b> en lugar de ante un tribunal, excepto que puede presentar reclamaciones en un tribunal de reclamaciones menores si sus reclamaciones califican. El arbitraje sera administrado por la Asociacion Americana de Arbitraje (AAA) bajo sus Reglas de Arbitraje del Consumidor.",
            "arbitrationP2": "Tiene derecho a <b>excluirse</b> de esta clausula de arbitraje dentro de los 30 dias posteriores a la primera aceptacion de estos Terminos enviando un aviso por escrito a support@lumenlingo.com. Si se excluye, las disputas se resolveran ante los tribunales de Inglaterra y Gales.",
            "classActionHeading": "Renuncia a acciones colectivas",
            "classActionP1": "En la maxima medida permitida por la ley aplicable, usted y LumenShore acuerdan que cualquier procedimiento de resolucion de disputas se llevara a cabo solo de forma individual y no como una accion colectiva, consolidada o representativa. Si esta renuncia resulta inaplicable en su jurisdiccion, las disposiciones restantes de esta seccion continuan en pleno vigor.",
            "consumerNote": "Si usted es un consumidor en la Union Europea o en el Reino Unido, nada en esta seccion afecta sus derechos legales, incluido el derecho a iniciar procedimientos ante los tribunales de su pais de residencia."
        }
    },
    "fr": {
        "disputeResolution": {
            "heading": "Resolution des litiges",
            "intro": "Nous croyons que la plupart des preoccupations peuvent etre resolues rapidement et a l'amiable. Si un litige survient entre vous et LumenShore en rapport avec les presentes Conditions ou votre utilisation du Service, la procedure suivante s'applique :",
            "step1Heading": "Etape 1 — Resolution amiable",
            "step1P1": "Avant d'initier toute procedure formelle, veuillez nous contacter a <emailLink>support@lumenlingo.com</emailLink> avec une description detaillee de votre preoccupation. Nous nous engageons a mener des discussions de bonne foi pour resoudre le probleme dans les <b>30 jours</b> suivant la reception de votre communication.",
            "step2Heading": "Etape 2 — Mediation",
            "step2P1": "Si les discussions informelles ne resolvent pas le litige dans le delai de 30 jours, l'une ou l'autre partie peut proposer une mediation par l'intermediaire d'un mediateur mutuellement agree. La mediation est volontaire et les frais seront partages a parts egales sauf accord contraire.",
            "step3Heading": "Etape 3 — Procedures judiciaires",
            "step3P1": "Si le litige reste non resolu apres une resolution amiable de bonne foi et, le cas echeant, une mediation, l'une ou l'autre partie peut engager une procedure judiciaire. Les tribunaux d'Angleterre et du pays de Galles auront competence exclusive, sous reserve des exceptions de protection des consommateurs ci-dessous.",
            "odrHeading": "Resolution des litiges en ligne de l'UE",
            "odrP1": "Si vous etes un consommateur dans l'Union europeenne, vous pouvez egalement utiliser la plateforme de reglement en ligne des litiges (RLL) de la Commission europeenne : <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. Notre adresse e-mail aux fins du RLL est support@lumenlingo.com.",
            "arbitrationHeading": "Arbitrage pour les utilisateurs des Etats-Unis",
            "arbitrationP1": "Si vous residez aux Etats-Unis, tout litige qui ne peut etre resolu par le processus de resolution amiable ci-dessus sera resolu par <b>arbitrage individuel contraignant</b> plutot que devant un tribunal, sauf que vous pouvez faire valoir vos reclamations devant un tribunal des petites creances si vos reclamations le justifient. L'arbitrage sera administre par l'American Arbitration Association (AAA) selon ses regles d'arbitrage des consommateurs.",
            "arbitrationP2": "Vous avez le droit de vous <b>desengager</b> de cette clause d'arbitrage dans les 30 jours suivant la premiere acceptation de ces Conditions en envoyant un avis ecrit a support@lumenlingo.com. Si vous vous desengagez, les litiges seront resolus devant les tribunaux d'Angleterre et du pays de Galles.",
            "classActionHeading": "Renonciation aux actions collectives",
            "classActionP1": "Dans la mesure maximale permise par la loi applicable, vous et LumenShore convenez que tout processus de resolution des litiges sera mene uniquement de maniere individuelle et non sous forme d'action collective, consolidee ou representative. Si cette renonciation s'avere inapplicable dans votre juridiction, les dispositions restantes de cette section restent pleinement en vigueur.",
            "consumerNote": "Si vous etes un consommateur dans l'Union europeenne ou au Royaume-Uni, rien dans cette section n'affecte vos droits legaux, y compris le droit d'engager une procedure devant les tribunaux de votre pays de residence."
        }
    },
    "de": {
        "disputeResolution": {
            "heading": "Streitbeilegung",
            "intro": "Wir glauben, dass die meisten Anliegen schnell und einvernehmlich geloest werden koennen. Sollte eine Streitigkeit zwischen Ihnen und LumenShore im Zusammenhang mit diesen Bedingungen oder Ihrer Nutzung des Dienstes entstehen, gilt das folgende Verfahren:",
            "step1Heading": "Schritt 1 — Aussergerichtliche Einigung",
            "step1P1": "Bevor Sie formelle Verfahren einleiten, kontaktieren Sie uns bitte unter <emailLink>support@lumenlingo.com</emailLink> mit einer detaillierten Beschreibung Ihres Anliegens. Wir verpflichten uns, innerhalb von <b>30 Tagen</b> nach Erhalt Ihrer Mitteilung in gutem Glauben Gespraeche zur Loesung des Problems zu fuehren.",
            "step2Heading": "Schritt 2 — Mediation",
            "step2P1": "Sollten informelle Gespraeche die Streitigkeit innerhalb der 30-Tage-Frist nicht loesen, kann jede Partei eine Mediation durch einen einvernehmlich vereinbarten Mediator vorschlagen. Die Mediation ist freiwillig und die Kosten werden, sofern nicht anders vereinbart, gleichmaessig geteilt.",
            "step3Heading": "Schritt 3 — Gerichtsverfahren",
            "step3P1": "Bleibt die Streitigkeit nach einer aussergerichtlichen Einigung in gutem Glauben und gegebenenfalls einer Mediation ungeloest, kann jede Partei ein Gerichtsverfahren einleiten. Die Gerichte von England und Wales haben die ausschliessliche Zustaendigkeit, vorbehaltlich der nachstehenden Verbraucherschutzausnahmen.",
            "odrHeading": "EU-Online-Streitbeilegung",
            "odrP1": "Wenn Sie ein Verbraucher in der Europaeischen Union sind, koennen Sie auch die Online-Streitbeilegungs-Plattform (OS) der Europaeischen Kommission nutzen: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. Unsere E-Mail-Adresse fuer OS-Zwecke ist support@lumenlingo.com.",
            "arbitrationHeading": "Schiedsverfahren fuer Nutzer in den USA",
            "arbitrationP1": "Wenn Sie in den Vereinigten Staaten ansaessig sind, wird jede Streitigkeit, die nicht durch das oben beschriebene informelle Verfahren geloest werden kann, durch <b>verbindliches individuelles Schiedsverfahren</b> und nicht vor Gericht geloest, mit der Ausnahme, dass Sie Ansprueche vor einem Kleinbetragsgericht geltend machen koennen, sofern Ihre Ansprueche dafuer qualifizieren. Das Schiedsverfahren wird von der American Arbitration Association (AAA) nach ihren Verbraucher-Schiedsregeln durchgefuehrt.",
            "arbitrationP2": "Sie haben das Recht, sich innerhalb von 30 Tagen nach der ersten Annahme dieser Bedingungen von dieser Schiedsklausel <b>abzumelden</b>, indem Sie eine schriftliche Mitteilung an support@lumenlingo.com senden. Wenn Sie sich abmelden, werden Streitigkeiten vor den Gerichten von England und Wales geloest.",
            "classActionHeading": "Verzicht auf Sammelklagen",
            "classActionP1": "Im groessten gesetzlich zulaessigen Umfang vereinbaren Sie und LumenShore, dass Streitbeilegungsverfahren nur auf individueller Basis und nicht als Sammel-, konsolidierte oder Verbandsklage durchgefuehrt werden. Sollte dieser Verzicht in Ihrer Rechtsordnung fuer nicht durchsetzbar befunden werden, bleiben die uebrigen Bestimmungen dieses Abschnitts vollstaendig in Kraft.",
            "consumerNote": "Wenn Sie ein Verbraucher in der Europaeischen Union oder im Vereinigten Koenigreich sind, beruehrt nichts in diesem Abschnitt Ihre gesetzlichen Rechte, einschliesslich des Rechts, Verfahren vor den Gerichten Ihres Wohnsitzlandes einzuleiten."
        }
    },
    "ja": {
        "disputeResolution": {
            "heading": "紛争解決",
            "intro": "ほとんどの懸念事項は迅速かつ友好的に解決できると考えています。本規約またはサービスの利用に関連してお客様とLumenShoreの間で紛争が生じた場合、以下の手続きが適用されます：",
            "step1Heading": "ステップ1 — 非公式解決",
            "step1P1": "正式な手続きを開始する前に、お客様の懸念事項の詳細な説明とともに<emailLink>support@lumenlingo.com</emailLink>までご連絡ください。お客様のご連絡を受領してから<b>30日以内</b>に誠意をもって問題解決のための協議を行うことをお約束します。",
            "step2Heading": "ステップ2 — 調停",
            "step2P1": "非公式な協議で30日以内に紛争が解決しない場合、いずれの当事者も、相互に合意した調停人による調停を提案することができます。調停は任意であり、別段の合意がない限り、費用は均等に分担されます。",
            "step3Heading": "ステップ3 — 裁判手続き",
            "step3P1": "誠意ある非公式解決および調停を試みた後も紛争が未解決の場合、いずれの当事者も裁判手続きを開始することができます。以下の消費者保護の例外を条件として、イングランドおよびウェールズの裁判所が専属管轄権を有します。",
            "odrHeading": "EU オンライン紛争解決",
            "odrP1": "欧州連合の消費者の方は、欧州委員会のオンライン紛争解決（ODR）プラットフォームもご利用いただけます：<odrLink>https://ec.europa.eu/consumers/odr/</odrLink>。ODR目的の当社メールアドレスはsupport@lumenlingo.comです。",
            "arbitrationHeading": "米国ユーザー向け仲裁",
            "arbitrationP1": "米国にお住まいの場合、上記の非公式解決手続きで解決できない紛争は、裁判所ではなく<b>拘束力のある個別仲裁</b>によって解決されます。ただし、お客様の請求が対象となる場合は少額裁判所に請求を提起することができます。仲裁はアメリカ仲裁協会（AAA）の消費者仲裁規則に基づいて実施されます。",
            "arbitrationP2": "本規約を最初に承諾してから30日以内にsupport@lumenlingo.comに書面による通知を送付することにより、この仲裁条項から<b>オプトアウト</b>する権利があります。オプトアウトした場合、紛争はイングランドおよびウェールズの裁判所で解決されます。",
            "classActionHeading": "集団訴訟の放棄",
            "classActionP1": "適用法で許容される最大限の範囲で、お客様とLumenShoreは、紛争解決手続きが個別にのみ行われ、集団訴訟、統合訴訟、または代表訴訟として行われないことに同意します。この放棄がお客様の管轄区域で執行不能と判断された場合、本セクションの残りの条項は完全に有効です。",
            "consumerNote": "欧州連合または英国の消費者の方は、本セクションのいかなる内容も、お住まいの国の裁判所に手続きを提起する権利を含む、お客様の法定権利に影響を与えるものではありません。"
        }
    },
    "pt": {
        "disputeResolution": {
            "heading": "Resolucao de disputas",
            "intro": "Acreditamos que a maioria das preocupacoes pode ser resolvida de forma rapida e amigavel. Se surgir uma disputa entre voce e a LumenShore em relacao a estes Termos ou ao uso do Servico, aplica-se o seguinte procedimento:",
            "step1Heading": "Etapa 1 — Resolucao informal",
            "step1P1": "Antes de iniciar qualquer procedimento formal, entre em contato conosco em <emailLink>support@lumenlingo.com</emailLink> com uma descricao detalhada da sua preocupacao. Comprometemo-nos a participar de discussoes de boa-fe para resolver a questao dentro de <b>30 dias</b> apos o recebimento da sua comunicacao.",
            "step2Heading": "Etapa 2 — Mediacao",
            "step2P1": "Se as discussoes informais nao resolverem a disputa dentro do periodo de 30 dias, qualquer uma das partes pode propor mediacao por meio de um mediador mutuamente acordado. A mediacao e voluntaria e os custos serao compartilhados igualmente, salvo acordo em contrario.",
            "step3Heading": "Etapa 3 — Procedimentos judiciais",
            "step3P1": "Se a disputa permanecer sem resolucao apos a resolucao informal de boa-fe e, quando tentada, a mediacao, qualquer uma das partes pode iniciar procedimentos judiciais. Os tribunais da Inglaterra e do Pais de Gales terao jurisdicao exclusiva, sujeito as excecoes de protecao ao consumidor abaixo.",
            "odrHeading": "Resolucao de disputas online da UE",
            "odrP1": "Se voce e um consumidor na Uniao Europeia, tambem pode utilizar a plataforma de Resolucao de Litigios em Linha (RLL) da Comissao Europeia: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. O nosso e-mail para efeitos de RLL e support@lumenlingo.com.",
            "arbitrationHeading": "Arbitragem para usuarios dos Estados Unidos",
            "arbitrationP1": "Se voce reside nos Estados Unidos, qualquer disputa que nao possa ser resolvida pelo processo de resolucao informal acima sera resolvida por <b>arbitragem individual vinculativa</b> em vez de em tribunal, exceto que voce pode apresentar reclamacoes em um tribunal de pequenas causas, se as suas reclamacoes se qualificarem. A arbitragem sera administrada pela American Arbitration Association (AAA) sob as suas Regras de Arbitragem do Consumidor.",
            "arbitrationP2": "Voce tem o direito de <b>optar por nao participar</b> desta clausula de arbitragem dentro de 30 dias apos a primeira aceitacao destes Termos, enviando uma notificacao por escrito para support@lumenlingo.com. Se optar por nao participar, as disputas serao resolvidas nos tribunais da Inglaterra e do Pais de Gales.",
            "classActionHeading": "Renuncia a acoes coletivas",
            "classActionP1": "Na maxima extensao permitida pela lei aplicavel, voce e a LumenShore concordam que quaisquer procedimentos de resolucao de disputas serao conduzidos apenas individualmente e nao como uma acao coletiva, consolidada ou representativa. Se esta renuncia for considerada inaplicavel na sua jurisdicao, as disposicoes restantes desta secao permanecem em pleno vigor.",
            "consumerNote": "Se voce e um consumidor na Uniao Europeia ou no Reino Unido, nada nesta secao afeta os seus direitos legais, incluindo o direito de instaurar procedimentos nos tribunais do seu pais de residencia."
        }
    },
    "pl": {
        "disputeResolution": {
            "heading": "Rozwiazywanie sporow",
            "intro": "Wierzymy, ze wiekszosc wątpliwości mozna rozwiazac szybko i polubownie. Jezeli miedzy Toba a LumenShore powstanie spor w związku z niniejszymi Warunkami lub korzystaniem z Uslugi, obowiazuje nastepujaca procedura:",
            "step1Heading": "Krok 1 — Polubowne rozwiazanie",
            "step1P1": "Przed wszczeciem jakichkolwiek formalnych postępowan prosimy o kontakt pod adresem <emailLink>support@lumenlingo.com</emailLink> ze szczegolowym opisem problemu. Zobowiazujemy sie do prowadzenia rozmow w dobrej wierze w celu rozwiazania sprawy w ciagu <b>30 dni</b> od otrzymania Twojej wiadomosci.",
            "step2Heading": "Krok 2 — Mediacja",
            "step2P1": "Jezeli rozmowy nieformalne nie rozwiaza sporu w ciagu 30 dni, kazda ze stron moze zaproponowac mediacjẹ za posrednictwem wzajemnie uzgodnionego mediatora. Mediacja jest dobrowolna, a koszty sa dzielone rowno, chyba ze strony uzgodniły inaczej.",
            "step3Heading": "Krok 3 — Postẹpowanie sadowe",
            "step3P1": "Jezeli spor pozostanie nierozwiazany po polubownym rozwiazaniu w dobrej wierze i, w przypadku podjecia proby, mediacji, kazda ze stron moze wszczac postepowanie sadowe. Sady Anglii i Walii maja wylaczna jurysdykcje, z zastrzezeniem ponizszych wyjatkow ochrony konsumentow.",
            "odrHeading": "Internetowe rozwiazywanie sporow w UE",
            "odrP1": "Jezeli jestes konsumentem w Unii Europejskiej, mozesz rowniez skorzystac z platformy internetowego rozwiazywania sporow (ODR) Komisji Europejskiej: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. Nasz adres e-mail do celow ODR to support@lumenlingo.com.",
            "arbitrationHeading": "Arbitraz dla uzytkownikow ze Stanow Zjednoczonych",
            "arbitrationP1": "Jezeli mieszkasz w Stanach Zjednoczonych, kazdy spor, ktory nie moze byc rozwiazany w drodze powyzszego postepowania polubownego, zostanie rozwiazany w drodze <b>wiazacego arbitrazu indywidualnego</b>, a nie przed sadem, z wyjatkiem sytuacji, gdy mozesz dochodzic roszczen w sadzie do spraw drobnych roszczen, jezeli Twoje roszczenia sie kwalifikuja. Arbitraz bedzie prowadzony przez Amerykanskie Stowarzyszenie Arbitrazowe (AAA) zgodnie z jego Regulaminem Arbitrazu Konsumenckiego.",
            "arbitrationP2": "Masz prawo <b>zrezygnowac</b> z niniejszej klauzuli arbitrazowej w ciagu 30 dni od pierwszego zaakceptowania niniejszych Warunkow, wysylajac pisemne powiadomienie na adres support@lumenlingo.com. Jezeli zrezygnujesz, spory beda rozwiazywane przed sadami Anglii i Walii.",
            "classActionHeading": "Zrzeczenie sie pozwow zbiorowych",
            "classActionP1": "W najszerszym zakresie dozwolonym przez obowiazujace prawo Ty i LumenShore zgadzacie sie, ze wszelkie postepowania w sprawie rozwiazywania sporow beda prowadzone wylacznie indywidualnie, a nie jako pozew zbiorowy, skonsolidowany lub reprezentacyjny. Jezeli niniejsze zrzeczenie sie okaze sie niewykonalne w Twojej jurysdykcji, pozostale postanowienia niniejszego dzialu pozostaja w pelnej mocy.",
            "consumerNote": "Jezeli jestes konsumentem w Unii Europejskiej lub Zjednoczonym Krolestwie, nic w niniejszym dziale nie wplywa na Twoje prawa ustawowe, w tym prawo do wszczecia postepowania przed sadami w kraju Twojego zamieszkania."
        }
    },
    "ar": {
        "disputeResolution": {
            "heading": "حل النزاعات",
            "intro": "نعتقد أن معظم المخاوف يمكن حلها بسرعة وبشكل ودي. في حالة نشوء نزاع بينك وبين LumenShore فيما يتعلق بهذه الشروط أو استخدامك للخدمة، يُطبق الإجراء التالي:",
            "step1Heading": "الخطوة 1 — الحل غير الرسمي",
            "step1P1": "قبل بدء أي إجراءات رسمية، يرجى التواصل معنا على <emailLink>support@lumenlingo.com</emailLink> مع وصف تفصيلي لمخاوفك. نلتزم بالمشاركة في مناقشات بحسن نية لحل المسألة خلال <b>30 يومًا</b> من تلقي اتصالك.",
            "step2Heading": "الخطوة 2 — الوساطة",
            "step2P1": "إذا لم تحل المناقشات غير الرسمية النزاع خلال فترة الـ 30 يومًا، يجوز لأي من الطرفين اقتراح الوساطة من خلال وسيط متفق عليه بشكل متبادل. الوساطة طوعية وتُقسم التكاليف بالتساوي ما لم يتم الاتفاق على خلاف ذلك.",
            "step3Heading": "الخطوة 3 — الإجراءات القضائية",
            "step3P1": "إذا بقي النزاع دون حل بعد الحل غير الرسمي بحسن نية، والوساطة عند محاولتها، يجوز لأي من الطرفين بدء إجراءات قضائية. تكون محاكم إنجلترا وويلز ذات اختصاص حصري، مع مراعاة استثناءات حماية المستهلك أدناه.",
            "odrHeading": "حل النزاعات عبر الإنترنت في الاتحاد الأوروبي",
            "odrP1": "إذا كنت مستهلكًا في الاتحاد الأوروبي، يمكنك أيضًا استخدام منصة حل النزاعات عبر الإنترنت (ODR) التابعة للمفوضية الأوروبية: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. بريدنا الإلكتروني لأغراض ODR هو support@lumenlingo.com.",
            "arbitrationHeading": "التحكيم لمستخدمي الولايات المتحدة",
            "arbitrationP1": "إذا كنت مقيمًا في الولايات المتحدة، فإن أي نزاع لا يمكن حله من خلال عملية الحل غير الرسمي أعلاه سيتم حله عن طريق <b>التحكيم الفردي الملزم</b> بدلاً من المحكمة، باستثناء أنه يمكنك تقديم مطالبات في محكمة الدعاوى الصغيرة إذا كانت مطالباتك مؤهلة. سيتم إدارة التحكيم من قبل جمعية التحكيم الأمريكية (AAA) وفقًا لقواعد تحكيم المستهلك الخاصة بها.",
            "arbitrationP2": "لديك الحق في <b>الانسحاب</b> من شرط التحكيم هذا خلال 30 يومًا من أول قبول لهذه الشروط عن طريق إرسال إشعار كتابي إلى support@lumenlingo.com. عند الانسحاب، سيتم حل النزاعات في محاكم إنجلترا وويلز.",
            "classActionHeading": "التنازل عن الدعاوى الجماعية",
            "classActionP1": "إلى أقصى حد يسمح به القانون المعمول به، تتفق أنت وLumenShore على أن أي إجراءات لحل النزاعات ستُجرى على أساس فردي فقط وليس كدعوى جماعية أو موحدة أو تمثيلية. إذا تبين أن هذا التنازل غير قابل للتنفيذ في ولايتك القضائية، تظل الأحكام المتبقية من هذا القسم سارية المفعول بالكامل.",
            "consumerNote": "إذا كنت مستهلكًا في الاتحاد الأوروبي أو المملكة المتحدة، فلا شيء في هذا القسم يؤثر على حقوقك القانونية، بما في ذلك الحق في رفع دعوى أمام محاكم بلد إقامتك."
        }
    },
    "zh": {
        "disputeResolution": {
            "heading": "争议解决",
            "intro": "我们相信大多数问题都可以迅速友好地解决。如果您与LumenShore之间就本条款或您对服务的使用产生争议，则适用以下程序：",
            "step1Heading": "第一步 — 非正式解决",
            "step1P1": "在发起任何正式程序之前，请通过<emailLink>support@lumenlingo.com</emailLink>与我们联系，详细描述您的问题。我们承诺在收到您的来信后<b>30天内</b>本着善意进行讨论以解决问题。",
            "step2Heading": "第二步 — 调解",
            "step2P1": "如果非正式讨论在30天期限内未能解决争议，任何一方均可提议通过双方共同同意的调解人进行调解。调解是自愿的，除非另有约定，费用将平均分摊。",
            "step3Heading": "第三步 — 法院程序",
            "step3P1": "如果在善意的非正式解决和调解（如已尝试）之后争议仍未解决，任何一方均可启动法院程序。英格兰和威尔士法院享有专属管辖权，但须遵守以下消费者保护例外。",
            "odrHeading": "欧盟在线争议解决",
            "odrP1": "如果您是欧盟的消费者，您还可以使用欧盟委员会的在线争议解决（ODR）平台：<odrLink>https://ec.europa.eu/consumers/odr/</odrLink>。我们用于ODR目的的电子邮件是support@lumenlingo.com。",
            "arbitrationHeading": "美国用户仲裁",
            "arbitrationP1": "如果您居住在美国，任何无法通过上述非正式解决程序解决的争议将通过<b>有约束力的个人仲裁</b>而非法院解决，但如果您的索赔符合条件，您可以在小额索赔法院提出索赔。仲裁将由美国仲裁协会（AAA）根据其消费者仲裁规则进行管理。",
            "arbitrationP2": "您有权在首次接受本条款后30天内通过向support@lumenlingo.com发送书面通知来<b>选择退出</b>本仲裁条款。如果您选择退出，争议将在英格兰和威尔士法院解决。",
            "classActionHeading": "集体诉讼放弃",
            "classActionP1": "在适用法律允许的最大范围内，您和LumenShore同意，任何争议解决程序将仅以个人方式进行，而非以集体诉讼、合并诉讼或代表诉讼的形式进行。如果本放弃条款在您的司法管辖区被认定为不可执行，本节的其余条款仍然完全有效。",
            "consumerNote": "如果您是欧盟或英国的消费者，本节中的任何内容均不影响您的法定权利，包括在您居住国法院提起诉讼的权利。"
        }
    },
    "uk": {
        "disputeResolution": {
            "heading": "Вирішення спорів",
            "intro": "Ми вважаємо, що більшість питань можна вирішити швидко та дружньо. Якщо між вами та LumenShore виникне спір у зв'язку з цими Умовами або використанням вами Сервісу, застосовується наступна процедура:",
            "step1Heading": "Крок 1 — Неформальне вирішення",
            "step1P1": "Перш ніж розпочинати будь-які формальні процедури, будь ласка, зв'яжіться з нами за адресою <emailLink>support@lumenlingo.com</emailLink> з детальним описом вашого питання. Ми зобов'язуємось вести обговорення добросовісно для вирішення питання протягом <b>30 днів</b> з моменту отримання вашого звернення.",
            "step2Heading": "Крок 2 — Медіація",
            "step2P1": "Якщо неформальні обговорення не вирішать спір протягом 30-денного терміну, будь-яка сторона може запропонувати медіацію через взаємно узгодженого медіатора. Медіація є добровільною, а витрати розподіляються порівну, якщо не узгоджено інше.",
            "step3Heading": "Крок 3 — Судові процедури",
            "step3P1": "Якщо спір залишається невирішеним після добросовісного неформального врегулювання та, якщо вона була спробована, медіації, будь-яка сторона може розпочати судові процедури. Суди Англії та Уельсу мають виключну юрисдикцію з урахуванням наведених нижче винятків щодо захисту прав споживачів.",
            "odrHeading": "Онлайн-вирішення спорів у ЄС",
            "odrP1": "Якщо ви є споживачем у Європейському Союзі, ви також можете скористатися платформою онлайн-вирішення спорів (ODR) Європейської Комісії: <odrLink>https://ec.europa.eu/consumers/odr/</odrLink>. Наша електронна адреса для цілей ODR — support@lumenlingo.com.",
            "arbitrationHeading": "Арбітраж для користувачів зі США",
            "arbitrationP1": "Якщо ви проживаєте у Сполучених Штатах, будь-який спір, який не може бути вирішений через вищезазначений процес неформального врегулювання, буде вирішений шляхом <b>обов'язкового індивідуального арбітражу</b>, а не в суді, за винятком того, що ви можете подавати позови до суду дрібних позовів, якщо ваші позови відповідають критеріям. Арбітраж проводитиметься Американською арбітражною асоціацією (AAA) відповідно до її Правил споживчого арбітражу.",
            "arbitrationP2": "Ви маєте право <b>відмовитися</b> від цього арбітражного застереження протягом 30 днів з моменту першого прийняття цих Умов, надіславши письмове повідомлення на support@lumenlingo.com. Якщо ви відмовитесь, спори будуть вирішуватися в судах Англії та Уельсу.",
            "classActionHeading": "Відмова від колективних позовів",
            "classActionP1": "У максимальному обсязі, дозволеному застосовним законодавством, ви та LumenShore погоджуєтесь, що будь-які процедури вирішення спорів проводитимуться лише на індивідуальній основі, а не як колективний, консолідований або представницький позов. Якщо ця відмова буде визнана такою, що не може бути виконана у вашій юрисдикції, решта положень цього розділу залишаються повністю чинними.",
            "consumerNote": "Якщо ви є споживачем у Європейському Союзі або Сполученому Королівстві, ніщо в цьому розділі не впливає на ваші законні права, включаючи право звертатися до судів країни вашого проживання."
        }
    }
}

for locale, data in TRANSLATIONS.items():
    path = os.path.join(BASE, f"{locale}.json")
    with open(path, "r", encoding="utf-8") as f:
        content = json.load(f)

    content["Terms"]["disputeResolution"] = data["disputeResolution"]

    with open(path, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"Added disputeResolution to {locale}.json")

print("Done — Dispute Resolution translations added to all 10 locales.")

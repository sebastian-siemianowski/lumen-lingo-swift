#!/usr/bin/env python3
"""Story 14.2 — Enhance Disclaimers & Limitation of Liability + add Force Majeure,
Indemnification, and Educational Disclaimer to Terms of Service in all 10 locales."""

import json, os

BASE = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages"

# We add new sub-sections to Terms namespace:
# - educationalDisclaimer (14.2.2)
# - forceMajeure (14.2.3)
# - indemnification (14.2.4)
# We also enhance existing limitationOfLiability with statutory carve-outs (14.2.5)
# and reasonable expectations (14.2.7)

TRANSLATIONS = {
    "en": {
        "educationalDisclaimer": {
            "heading": "Educational Content Disclaimer",
            "p1": "LumenLingo is a language learning aid and supplementary tool. It is not a certified educational institution and does not award recognised qualifications.",
            "p2": "We do not guarantee fluency or any specific level of proficiency. Content is provided for general learning purposes and should not be relied upon for professional translation, interpretation, or academic assessment.",
            "p3": "You acknowledge that your expectations should be commensurate with a consumer digital content subscription. LumenShore does not represent that the Service will meet your specific learning objectives, timeline, or professional needs."
        },
        "forceMajeure": {
            "heading": "Force Majeure",
            "p1": "LumenShore shall not be liable for any failure or delay in performance arising from causes beyond its reasonable control, including but not limited to: natural disasters, government actions, internet or telecommunications failures, pandemic, civil unrest, or third-party service provider outages.",
            "p2": "During a force majeure event, our obligations under these Terms are suspended for the duration of the event. If such an event continues for more than 90 consecutive days, either party may terminate the agreement with no liability to the other."
        },
        "indemnification": {
            "heading": "Indemnification",
            "p1": "You agree to indemnify, defend, and hold harmless LumenShore Limited, its directors, officers, employees, and agents from any claims, damages, losses, and expenses (including reasonable legal fees) arising from:",
            "li1": "Your breach of these Terms.",
            "li2": "Your violation of any applicable law or third-party rights.",
            "li3": "Your use of the Service.",
            "li4": "Any content you submit to the Service."
        }
    },
    "es": {
        "educationalDisclaimer": {
            "heading": "Aviso sobre contenido educativo",
            "p1": "LumenLingo es una herramienta de aprendizaje de idiomas y un recurso complementario. No es una institucion educativa certificada y no otorga cualificaciones reconocidas.",
            "p2": "No garantizamos la fluidez ni ningun nivel especifico de competencia. El contenido se proporciona con fines de aprendizaje general y no debe utilizarse como base para traducciones profesionales, interpretacion o evaluacion academica.",
            "p3": "Usted reconoce que sus expectativas deben ser acordes con una suscripcion de contenido digital para consumidores. LumenShore no garantiza que el Servicio cumplira con sus objetivos de aprendizaje especificos, plazos o necesidades profesionales."
        },
        "forceMajeure": {
            "heading": "Fuerza mayor",
            "p1": "LumenShore no sera responsable de ninguna falla o retraso en el cumplimiento derivado de causas fuera de su control razonable, incluyendo, entre otras: desastres naturales, acciones gubernamentales, fallos de internet o telecomunicaciones, pandemias, disturbios civiles o interrupciones de proveedores de servicios de terceros.",
            "p2": "Durante un evento de fuerza mayor, nuestras obligaciones en virtud de estos Terminos quedan suspendidas durante la duracion del evento. Si dicho evento continua durante mas de 90 dias consecutivos, cualquiera de las partes puede rescindir el acuerdo sin responsabilidad para la otra."
        },
        "indemnification": {
            "heading": "Indemnizacion",
            "p1": "Usted acepta indemnizar, defender y eximir de responsabilidad a LumenShore Limited, sus directores, funcionarios, empleados y agentes de cualquier reclamacion, dano, perdida y gasto (incluidos los honorarios legales razonables) que surjan de:",
            "li1": "Su incumplimiento de estos Terminos.",
            "li2": "Su violacion de cualquier ley aplicable o derechos de terceros.",
            "li3": "Su uso del Servicio.",
            "li4": "Cualquier contenido que envie al Servicio."
        }
    },
    "fr": {
        "educationalDisclaimer": {
            "heading": "Avertissement sur le contenu educatif",
            "p1": "LumenLingo est un outil d'aide a l'apprentissage des langues et un outil complementaire. Il ne s'agit pas d'un etablissement d'enseignement certifie et il ne delivre pas de qualifications reconnues.",
            "p2": "Nous ne garantissons ni la maitrise ni un niveau specifique de competence. Le contenu est fourni a des fins d'apprentissage general et ne doit pas etre utilise pour la traduction professionnelle, l'interpretation ou l'evaluation academique.",
            "p3": "Vous reconnaissez que vos attentes doivent etre proportionnees a un abonnement de contenu numerique grand public. LumenShore ne garantit pas que le Service repondra a vos objectifs d'apprentissage specifiques, a votre calendrier ou a vos besoins professionnels."
        },
        "forceMajeure": {
            "heading": "Force majeure",
            "p1": "LumenShore ne sera pas responsable de tout manquement ou retard d'execution resultant de causes echappant a son controle raisonnable, y compris mais sans s'y limiter : catastrophes naturelles, actions gouvernementales, pannes d'internet ou de telecommunications, pandemie, troubles civils ou interruptions de prestataires de services tiers.",
            "p2": "Pendant un evenement de force majeure, nos obligations au titre des presentes Conditions sont suspendues pour la duree de l'evenement. Si un tel evenement se poursuit pendant plus de 90 jours consecutifs, chaque partie peut resilier l'accord sans responsabilite envers l'autre."
        },
        "indemnification": {
            "heading": "Indemnisation",
            "p1": "Vous acceptez d'indemniser, de defendre et de degager de toute responsabilite LumenShore Limited, ses administrateurs, dirigeants, employes et agents contre toute reclamation, dommage, perte et depense (y compris les honoraires d'avocats raisonnables) decoulant de :",
            "li1": "Votre violation des presentes Conditions.",
            "li2": "Votre violation de toute loi applicable ou des droits de tiers.",
            "li3": "Votre utilisation du Service.",
            "li4": "Tout contenu que vous soumettez au Service."
        }
    },
    "de": {
        "educationalDisclaimer": {
            "heading": "Haftungsausschluss fuer Bildungsinhalte",
            "p1": "LumenLingo ist ein Sprachlernhilfsmittel und ergaenzendes Werkzeug. Es ist keine zertifizierte Bildungseinrichtung und vergibt keine anerkannten Qualifikationen.",
            "p2": "Wir garantieren weder Sprachkenntnisse noch ein bestimmtes Kompetenzniveau. Inhalte werden zu allgemeinen Lernzwecken bereitgestellt und sollten nicht als Grundlage fuer professionelle Uebersetzungen, Dolmetscherleistungen oder akademische Bewertungen herangezogen werden.",
            "p3": "Sie erkennen an, dass Ihre Erwartungen einem digitalen Verbraucherinhaltsabonnement angemessen sein sollten. LumenShore gibt keine Zusicherung, dass der Dienst Ihre spezifischen Lernziele, Zeitvorgaben oder beruflichen Anforderungen erfuellt."
        },
        "forceMajeure": {
            "heading": "Hoehere Gewalt",
            "p1": "LumenShore haftet nicht fuer Versaeumnisse oder Verzoegerungen bei der Erfuellung, die auf Ursachen zurueckzufuehren sind, die ausserhalb der zumutbaren Kontrolle liegen, einschliesslich, aber nicht beschraenkt auf: Naturkatastrophen, Regierungsmassnahmen, Internet- oder Telekommunikationsausfaelle, Pandemien, zivile Unruhen oder Ausfaelle von Drittanbietern.",
            "p2": "Waehrend eines Ereignisses hoeherer Gewalt sind unsere Verpflichtungen aus diesen Bedingungen fuer die Dauer des Ereignisses ausgesetzt. Dauert ein solches Ereignis laenger als 90 aufeinanderfolgende Tage, kann jede Partei den Vertrag ohne Haftung gegenueber der anderen kuendigen."
        },
        "indemnification": {
            "heading": "Freistellung",
            "p1": "Sie erklaeren sich bereit, LumenShore Limited, ihre Geschaeftsfuehrer, leitenden Angestellten, Mitarbeiter und Vertreter von saemtlichen Anspruechen, Schaeden, Verlusten und Aufwendungen (einschliesslich angemessener Rechtsanwaltsgebuehren) freizustellen, die sich ergeben aus:",
            "li1": "Ihrem Verstoss gegen diese Bedingungen.",
            "li2": "Ihrer Verletzung geltender Gesetze oder Rechte Dritter.",
            "li3": "Ihrer Nutzung des Dienstes.",
            "li4": "Jeglichen Inhalten, die Sie an den Dienst uebermitteln."
        }
    },
    "ja": {
        "educationalDisclaimer": {
            "heading": "教育コンテンツに関する免責事項",
            "p1": "LumenLingoは語学学習支援ツールおよび補助ツールです。認定教育機関ではなく、認定資格を付与するものではありません。",
            "p2": "流暢さや特定の習熟度レベルを保証するものではありません。コンテンツは一般的な学習目的で提供されており、専門的な翻訳、通訳、または学術的評価のために依拠すべきではありません。",
            "p3": "お客様は、期待値が消費者向けデジタルコンテンツサブスクリプションに見合ったものであることを認めます。LumenShoreは、本サービスがお客様の特定の学習目標、スケジュール、または専門的ニーズに適合することを保証するものではありません。"
        },
        "forceMajeure": {
            "heading": "不可抗力",
            "p1": "LumenShoreは、自然災害、政府の措置、インターネットまたは電気通信の障害、パンデミック、市民の暴動、または第三者サービスプロバイダーの停止を含むがこれらに限定されない、合理的な制御を超えた原因から生じる履行の不履行または遅延について責任を負いません。",
            "p2": "不可抗力事象の期間中、本規約に基づく当社の義務は当該事象の期間中停止されます。当該事象が90日間連続して続く場合、いずれの当事者も相手方に対する責任なく契約を終了することができます。"
        },
        "indemnification": {
            "heading": "補償",
            "p1": "お客様は、以下に起因するすべての請求、損害、損失、および費用（合理的な弁護士費用を含む）について、LumenShore Limited、その取締役、役員、従業員、および代理人を免責し、防御し、損害を与えないことに同意します：",
            "li1": "お客様による本規約の違反。",
            "li2": "お客様による適用法または第三者の権利の侵害。",
            "li3": "お客様による本サービスの使用。",
            "li4": "お客様が本サービスに送信するコンテンツ。"
        }
    },
    "pt": {
        "educationalDisclaimer": {
            "heading": "Aviso sobre conteudo educacional",
            "p1": "O LumenLingo e uma ferramenta de apoio a aprendizagem de idiomas e um recurso complementar. Nao e uma instituicao educacional certificada e nao concede qualificacoes reconhecidas.",
            "p2": "Nao garantimos fluencia nem qualquer nivel especifico de proficiencia. O conteudo e fornecido para fins de aprendizagem geral e nao deve ser usado como base para traducao profissional, interpretacao ou avaliacao academica.",
            "p3": "Voce reconhece que suas expectativas devem ser proporcionais a uma assinatura de conteudo digital para consumidores. A LumenShore nao garante que o Servico atendera aos seus objetivos de aprendizagem especificos, cronograma ou necessidades profissionais."
        },
        "forceMajeure": {
            "heading": "Forca maior",
            "p1": "A LumenShore nao sera responsavel por qualquer falha ou atraso no cumprimento decorrente de causas alem do seu controle razoavel, incluindo, mas nao se limitando a: desastres naturais, acoes governamentais, falhas de internet ou telecomunicacoes, pandemia, disturbios civis ou interrupcoes de provedores de servicos terceiros.",
            "p2": "Durante um evento de forca maior, nossas obrigacoes nos termos destes Termos ficam suspensas pela duracao do evento. Se tal evento continuar por mais de 90 dias consecutivos, qualquer uma das partes pode rescindir o acordo sem responsabilidade perante a outra."
        },
        "indemnification": {
            "heading": "Indenizacao",
            "p1": "Voce concorda em indenizar, defender e isentar a LumenShore Limited, seus diretores, executivos, funcionarios e agentes de quaisquer reclamacoes, danos, perdas e despesas (incluindo honorarios advocaticios razoaveis) decorrentes de:",
            "li1": "Sua violacao destes Termos.",
            "li2": "Sua violacao de qualquer lei aplicavel ou direitos de terceiros.",
            "li3": "Seu uso do Servico.",
            "li4": "Qualquer conteudo que voce enviar ao Servico."
        }
    },
    "pl": {
        "educationalDisclaimer": {
            "heading": "Zastrzezenie dotyczace tresci edukacyjnych",
            "p1": "LumenLingo jest narzedziem wspomagajacym nauke jezykow i narzedziem uzupelniajacym. Nie jest certyfikowana instytucja edukacyjna i nie przyznaje uznawanych kwalifikacji.",
            "p2": "Nie gwarantujemy bieglosci ani zadnego okreslonego poziomu znajomosci jezyka. Tresci sa udostepniane w ogolnych celach edukacyjnych i nie powinny sluzyc jako podstawa do profesjonalnego tlumaczenia, interpretacji lub oceny akademickiej.",
            "p3": "Uznajesz, ze Twoje oczekiwania powinny byc wspolmierne do subskrypcji cyfrowych tresci konsumenckich. LumenShore nie gwarantuje, ze Usluga spelni Twoje konkretne cele edukacyjne, harmonogram lub potrzeby zawodowe."
        },
        "forceMajeure": {
            "heading": "Sila wyzsza",
            "p1": "LumenShore nie ponosi odpowiedzialnosci za jakiekolwiek niepowodzenia lub opoznienia w realizacji wynikajace z przyczyn pozostajacych poza jej rozsadna kontrola, w tym miedzy innymi: kleski zywiolowe, dzialania rzadowe, awarie internetu lub telekomunikacji, pandemia, niepokoje spoleczne lub przerwy w dzialaniu dostawcow uslug zewnetrznych.",
            "p2": "Podczas zdarzenia sily wyzszej nasze zobowiazania wynikajace z niniejszych Warunkow zostaja zawieszone na czas trwania zdarzenia. Jezeli takie zdarzenie trwa dluzej niz 90 kolejnych dni, kazda ze stron moze rozwiazac umowe bez odpowiedzialnosci wobec drugiej strony."
        },
        "indemnification": {
            "heading": "Zwolnienie z odpowiedzialnosci",
            "p1": "Zgadzasz sie zwolnic z odpowiedzialnosci, bronic i zabezpieczyc LumenShore Limited, jej dyrektorow, urzednikow, pracownikow i agentow przed wszelkimi roszczeniami, szkodami, stratami i wydatkami (w tym uzasadnionymi kosztami prawnymi) wynikajacymi z:",
            "li1": "Twojego naruszenia niniejszych Warunkow.",
            "li2": "Twojego naruszenia obowiazujacego prawa lub praw osob trzecich.",
            "li3": "Twojego korzystania z Uslugi.",
            "li4": "Jakichkolwiek tresci przesylanych przez Ciebie do Uslugi."
        }
    },
    "ar": {
        "educationalDisclaimer": {
            "heading": "إخلاء المسؤولية عن المحتوى التعليمي",
            "p1": "LumenLingo هو أداة مساعدة لتعلم اللغات وأداة تكميلية. وهو ليس مؤسسة تعليمية معتمدة ولا يمنح مؤهلات معترف بها.",
            "p2": "لا نضمن الطلاقة أو أي مستوى محدد من الإتقان. يُقدم المحتوى لأغراض التعلم العامة ولا ينبغي الاعتماد عليه في الترجمة المهنية أو التفسير أو التقييم الأكاديمي.",
            "p3": "أنت تقر بأن توقعاتك يجب أن تتناسب مع اشتراك المحتوى الرقمي للمستهلك. لا تضمن LumenShore أن الخدمة ستلبي أهدافك التعليمية المحددة أو جدولك الزمني أو احتياجاتك المهنية."
        },
        "forceMajeure": {
            "heading": "القوة القاهرة",
            "p1": "لا تتحمل LumenShore المسؤولية عن أي إخفاق أو تأخير في الأداء ناتج عن أسباب خارجة عن سيطرتها المعقولة، بما في ذلك على سبيل المثال لا الحصر: الكوارث الطبيعية، والإجراءات الحكومية، وأعطال الإنترنت أو الاتصالات، والأوبئة، والاضطرابات المدنية، أو انقطاع خدمات مقدمي الخدمات الخارجيين.",
            "p2": "أثناء حدث القوة القاهرة، تُعلق التزاماتنا بموجب هذه الشروط طوال مدة الحدث. إذا استمر هذا الحدث لأكثر من 90 يومًا متتاليًا، يحق لأي من الطرفين إنهاء الاتفاقية دون مسؤولية تجاه الطرف الآخر."
        },
        "indemnification": {
            "heading": "التعويض",
            "p1": "أنت توافق على تعويض وحماية وإبراء ذمة LumenShore Limited ومديريها ومسؤوليها وموظفيها ووكلائها من أي مطالبات وأضرار وخسائر ونفقات (بما في ذلك الرسوم القانونية المعقولة) الناشئة عن:",
            "li1": "انتهاكك لهذه الشروط.",
            "li2": "انتهاكك لأي قانون معمول به أو حقوق أطراف ثالثة.",
            "li3": "استخدامك للخدمة.",
            "li4": "أي محتوى تقدمه إلى الخدمة."
        }
    },
    "zh": {
        "educationalDisclaimer": {
            "heading": "教育内容免责声明",
            "p1": "LumenLingo是一款语言学习辅助工具和补充工具。它不是经认证的教育机构，不授予认可的资格证书。",
            "p2": "我们不保证流利程度或任何特定的熟练水平。内容仅供一般学习目的提供，不应作为专业翻译、口译或学术评估的依据。",
            "p3": "您承认您的期望应与消费者数字内容订阅相称。LumenShore不保证服务将满足您的特定学习目标、时间表或专业需求。"
        },
        "forceMajeure": {
            "heading": "不可抗力",
            "p1": "LumenShore对因超出其合理控制范围的原因而导致的任何不履行或延迟履行不承担责任，包括但不限于：自然灾害、政府行为、互联网或电信故障、流行病、民事动乱或第三方服务提供商中断。",
            "p2": "在不可抗力事件期间，我们在本条款下的义务在事件持续期间暂停。如果此类事件持续超过连续90天，任何一方均可终止协议而无需对另一方承担责任。"
        },
        "indemnification": {
            "heading": "赔偿",
            "p1": "您同意就以下原因产生的所有索赔、损害、损失和费用（包括合理的律师费）对LumenShore Limited及其董事、管理人员、员工和代理人进行赔偿、辩护并使其免受损害：",
            "li1": "您违反本条款。",
            "li2": "您违反任何适用法律或第三方权利。",
            "li3": "您对服务的使用。",
            "li4": "您向服务提交的任何内容。"
        }
    },
    "uk": {
        "educationalDisclaimer": {
            "heading": "Застереження щодо освітнього контенту",
            "p1": "LumenLingo є допоміжним інструментом для вивчення мов та додатковим засобом. Це не сертифікований навчальний заклад, і він не надає визнаних кваліфікацій.",
            "p2": "Ми не гарантуємо вільного володіння мовою або будь-якого конкретного рівня знань. Контент надається для загальних навчальних цілей і не повинен використовуватися для професійного перекладу, усного перекладу або академічної оцінки.",
            "p3": "Ви визнаєте, що ваші очікування повинні відповідати підписці на цифровий контент для споживачів. LumenShore не гарантує, що Сервіс відповідатиме вашим конкретним навчальним цілям, термінам або професійним потребам."
        },
        "forceMajeure": {
            "heading": "Форс-мажор",
            "p1": "LumenShore не несе відповідальності за будь-яке невиконання або затримку у виконанні, що виникає з причин, які перебувають за межами її розумного контролю, включаючи, але не обмежуючись: стихійні лиха, дії уряду, збої в роботі інтернету або телекомунікацій, пандемії, громадські заворушення або збої сторонніх постачальників послуг.",
            "p2": "Під час форс-мажорних обставин наші зобов'язання за цими Умовами призупиняються на час тривалості події. Якщо така подія продовжується понад 90 послідовних днів, будь-яка сторона може розірвати угоду без відповідальності перед іншою стороною."
        },
        "indemnification": {
            "heading": "Відшкодування збитків",
            "p1": "Ви погоджуєтесь відшкодувати, захищати та звільняти від відповідальності LumenShore Limited, її директорів, посадових осіб, працівників та агентів від будь-яких претензій, збитків, втрат і витрат (включаючи розумні юридичні витрати), що виникають у зв'язку з:",
            "li1": "Вашим порушенням цих Умов.",
            "li2": "Вашим порушенням будь-якого чинного законодавства або прав третіх осіб.",
            "li3": "Вашим використанням Сервісу.",
            "li4": "Будь-яким контентом, який ви надсилаєте до Сервісу."
        }
    }
}

# Also enhance the existing limitationOfLiability with statutory carve-out
STATUTORY_CARVEOUT = {
    "en": "Nothing in these Terms excludes or limits our liability for: death or personal injury caused by our negligence; fraud or fraudulent misrepresentation; or any other liability that cannot be excluded or limited by applicable law, including your statutory rights under the Consumer Rights Act 2015 (UK) or the EU Consumer Rights Directive.",
    "es": "Nada en estos Terminos excluye o limita nuestra responsabilidad por: muerte o lesiones personales causadas por nuestra negligencia; fraude o tergiversacion fraudulenta; ni ninguna otra responsabilidad que no pueda ser excluida o limitada por la ley aplicable, incluidos sus derechos legales en virtud de la Ley de Derechos del Consumidor de 2015 (Reino Unido) o la Directiva de Derechos del Consumidor de la UE.",
    "fr": "Rien dans les presentes Conditions n'exclut ni ne limite notre responsabilite en cas de : deces ou blessure corporelle causee par notre negligence ; fraude ou declaration frauduleuse ; ou toute autre responsabilite qui ne peut etre exclue ou limitee par la loi applicable, y compris vos droits legaux en vertu de la loi sur les droits des consommateurs de 2015 (Royaume-Uni) ou de la directive europeenne sur les droits des consommateurs.",
    "de": "Nichts in diesen Bedingungen schliesst unsere Haftung aus oder beschraenkt sie fuer: Tod oder Koerperverletzung durch unsere Fahrlaessigkeit; Betrug oder arglistige Taeuschung; oder jede andere Haftung, die nicht durch geltendes Recht ausgeschlossen oder beschraenkt werden kann, einschliesslich Ihrer gesetzlichen Rechte nach dem Consumer Rights Act 2015 (Vereinigtes Koenigreich) oder der EU-Verbraucherrechterichtlinie.",
    "ja": "本規約のいかなる内容も、当社の過失による死亡または身体的損害、詐欺または詐欺的不実表示、あるいは適用法により排除または制限できないその他の責任（2015年消費者権利法（英国）またはEU消費者権利指令に基づくお客様の法定権利を含む）に対する当社の責任を排除または制限するものではありません。",
    "pt": "Nada nestes Termos exclui ou limita a nossa responsabilidade por: morte ou lesao corporal causada pela nossa negligencia; fraude ou deturpacao fraudulenta; ou qualquer outra responsabilidade que nao possa ser excluida ou limitada pela lei aplicavel, incluindo os seus direitos legais ao abrigo da Lei dos Direitos do Consumidor de 2015 (Reino Unido) ou da Diretiva de Direitos do Consumidor da UE.",
    "pl": "Nic w niniejszych Warunkach nie wyklucza ani nie ogranicza naszej odpowiedzialnosci za: smierc lub uszczerbek na zdrowiu spowodowany naszym zaniedbaniem; oszustwo lub oszukancze wprowadzenie w blad; ani zadna inna odpowiedzialnosc, ktora nie moze byc wykluczona lub ograniczona przez obowiazujace prawo, w tym Twoje prawa ustawowe wynikajace z ustawy o prawach konsumenta z 2015 r. (Wielka Brytania) lub dyrektywy UE w sprawie praw konsumentow.",
    "ar": "لا شيء في هذه الشروط يستثني أو يحد من مسؤوليتنا عن: الوفاة أو الإصابة الشخصية الناجمة عن إهمالنا؛ أو الاحتيال أو التحريف الاحتيالي؛ أو أي مسؤولية أخرى لا يمكن استثناؤها أو تحديدها بموجب القانون المعمول به، بما في ذلك حقوقك القانونية بموجب قانون حقوق المستهلك لعام 2015 (المملكة المتحدة) أو توجيه حقوق المستهلك في الاتحاد الأوروبي.",
    "zh": "本条款中的任何内容均不排除或限制我们对以下事项的责任：因我们的疏忽造成的死亡或人身伤害；欺诈或欺诈性虚假陈述；或适用法律不能排除或限制的任何其他责任，包括您依据《2015年消费者权利法》（英国）或欧盟消费者权利指令享有的法定权利。",
    "uk": "Ніщо в цих Умовах не виключає і не обмежує нашу відповідальність за: смерть або тілесні ушкодження, спричинені нашою недбалістю; шахрайство або шахрайське введення в оману; або будь-яку іншу відповідальність, яка не може бути виключена або обмежена чинним законодавством, включаючи ваші законні права відповідно до Закону про права споживачів 2015 року (Сполучене Королівство) або Директиви ЄС про права споживачів."
}

for locale, data in TRANSLATIONS.items():
    path = os.path.join(BASE, f"{locale}.json")
    with open(path, "r", encoding="utf-8") as f:
        content = json.load(f)

    for section_key, section_data in data.items():
        content["Terms"][section_key] = section_data

    # Add statutory carve-out to existing limitationOfLiability
    content["Terms"]["limitationOfLiability"]["statutory"] = STATUTORY_CARVEOUT[locale]

    with open(path, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"Updated {locale}.json with 14.2 sections")

print("Done — Story 14.2 translations added to all 10 locales.")

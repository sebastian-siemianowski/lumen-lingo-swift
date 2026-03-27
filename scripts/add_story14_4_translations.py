#!/usr/bin/env python3
"""Story 14.4 — US Arbitration Agreement, class action waiver, 30-day opt-out,
small claims exception, severability — extends the disputeResolution section."""

import json, os

BASE = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages"

TRANSLATIONS = {
    "en": {
        "usArbitration": {
            "heading": "US Arbitration Agreement",
            "p1": "If you are a resident of the United States, you and LumenShore Limited agree to resolve any disputes through binding individual arbitration rather than in court, except as provided below.",
            "p2": "Arbitration shall be administered by the American Arbitration Association (AAA) or JAMS under their Consumer Arbitration Rules. Proceedings may be conducted remotely, by written submissions, or in person at a location agreed by both parties. Each party shall bear its own attorneys' fees unless the arbitrator awards fees to the prevailing party.",
            "p3": "The arbitrator's decision shall be final and binding, and may be entered as a judgment in any court of competent jurisdiction. The Federal Arbitration Act (9 U.S.C. §§ 1–16) governs the enforceability of this arbitration clause.",
            "classActionHeading": "Class Action & Jury Trial Waiver",
            "classActionP1": "YOU AND LUMENSHORE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.",
            "classActionP2": "You waive any right to a jury trial for any disputes not subject to arbitration. No claims of multiple users may be consolidated in a single proceeding.",
            "optOutHeading": "30-Day Opt-Out Right",
            "optOutP1": "You may opt out of this arbitration agreement within 30 days of first accepting these Terms by sending written notice to <emailLink>support@lumenlingo.com</emailLink>. If you opt out, you retain all other rights under these Terms.",
            "smallClaimsHeading": "Small Claims Court Exception",
            "smallClaimsP1": "Either party may bring individual claims in a small claims court of competent jurisdiction, provided the claim qualifies under that court's rules.",
            "exceptionsHeading": "Exceptions to Arbitration",
            "exceptionsP1": "Either party may seek injunctive or equitable relief in a court of competent jurisdiction for claims involving intellectual property infringement.",
            "severabilityP1": "If the class action waiver above is found unenforceable, the entirety of this arbitration agreement shall be void. All other provisions of this arbitration clause are severable."
        }
    },
    "es": {
        "usArbitration": {
            "heading": "Acuerdo de arbitraje de EE. UU.",
            "p1": "Si usted es residente de los Estados Unidos, usted y LumenShore Limited acuerdan resolver cualquier disputa mediante arbitraje individual vinculante en lugar de en un tribunal, salvo lo dispuesto a continuacion.",
            "p2": "El arbitraje sera administrado por la Asociacion Americana de Arbitraje (AAA) o JAMS bajo sus Reglas de Arbitraje del Consumidor. Los procedimientos pueden realizarse de forma remota, por escrito o en persona en un lugar acordado por ambas partes. Cada parte asumira sus propios honorarios de abogados a menos que el arbitro conceda honorarios a la parte vencedora.",
            "p3": "La decision del arbitro sera final y vinculante, y puede registrarse como sentencia en cualquier tribunal con jurisdiccion competente. La Ley Federal de Arbitraje (9 U.S.C. §§ 1-16) rige la aplicabilidad de esta clausula de arbitraje.",
            "classActionHeading": "Renuncia a accion colectiva y juicio con jurado",
            "classActionP1": "USTED Y LUMENSHORE ACUERDAN QUE CADA UNO SOLO PUEDE PRESENTAR RECLAMACIONES CONTRA EL OTRO EN SU CAPACIDAD INDIVIDUAL Y NO COMO DEMANDANTE O MIEMBRO DE UNA CLASE EN CUALQUIER ACCION COLECTIVA, CONSOLIDADA O REPRESENTATIVA.",
            "classActionP2": "Usted renuncia a cualquier derecho a un juicio con jurado para cualquier disputa no sujeta a arbitraje. No se podran consolidar reclamaciones de multiples usuarios en un solo procedimiento.",
            "optOutHeading": "Derecho de exclusion de 30 dias",
            "optOutP1": "Puede optar por no participar en este acuerdo de arbitraje dentro de los 30 dias posteriores a la primera aceptacion de estos Terminos enviando un aviso por escrito a <emailLink>support@lumenlingo.com</emailLink>. Si opta por no participar, conserva todos los demas derechos en virtud de estos Terminos.",
            "smallClaimsHeading": "Excepcion de tribunal de reclamaciones menores",
            "smallClaimsP1": "Cualquiera de las partes puede presentar reclamaciones individuales en un tribunal de reclamaciones menores con jurisdiccion competente, siempre que la reclamacion califique segun las reglas de dicho tribunal.",
            "exceptionsHeading": "Excepciones al arbitraje",
            "exceptionsP1": "Cualquiera de las partes puede solicitar medidas cautelares o equitativas ante un tribunal con jurisdiccion competente para reclamaciones que involucren infraccion de propiedad intelectual.",
            "severabilityP1": "Si la renuncia a accion colectiva anterior se considera inaplicable, la totalidad de este acuerdo de arbitraje sera nula. Todas las demas disposiciones de esta clausula de arbitraje son separables."
        }
    },
    "fr": {
        "usArbitration": {
            "heading": "Accord d'arbitrage US",
            "p1": "Si vous etes resident des Etats-Unis, vous et LumenShore Limited acceptez de resoudre tout litige par voie d'arbitrage individuel contraignant plutot que devant un tribunal, sauf disposition contraire ci-dessous.",
            "p2": "L'arbitrage sera administre par l'American Arbitration Association (AAA) ou JAMS selon leurs Regles d'arbitrage des consommateurs. Les procedures peuvent etre menees a distance, par ecrit ou en personne dans un lieu convenu par les deux parties.",
            "p3": "La decision de l'arbitre sera definitive et contraignante, et pourra etre convertie en jugement devant tout tribunal competent. La Federal Arbitration Act (9 U.S.C. §§ 1-16) regit l'applicabilite de cette clause d'arbitrage.",
            "classActionHeading": "Renonciation aux actions collectives et au jury",
            "classActionP1": "VOUS ET LUMENSHORE CONVENEZ QUE CHACUN NE PEUT INTRODUIRE DES RECLAMATIONS CONTRE L'AUTRE QUE DANS SA CAPACITE INDIVIDUELLE ET NON EN TANT QUE DEMANDEUR OU MEMBRE D'UNE CLASSE DANS TOUTE ACTION COLLECTIVE, CONSOLIDEE OU REPRESENTATIVE.",
            "classActionP2": "Vous renoncez a tout droit a un proces devant jury pour tout litige non soumis a l'arbitrage.",
            "optOutHeading": "Droit de retrait de 30 jours",
            "optOutP1": "Vous pouvez vous retirer de cet accord d'arbitrage dans les 30 jours suivant la premiere acceptation des presentes Conditions en envoyant un avis ecrit a <emailLink>support@lumenlingo.com</emailLink>.",
            "smallClaimsHeading": "Exception des petites creances",
            "smallClaimsP1": "Chaque partie peut introduire des reclamations individuelles devant un tribunal des petites creances competent, a condition que la reclamation soit admissible.",
            "exceptionsHeading": "Exceptions a l'arbitrage",
            "exceptionsP1": "Toute partie peut demander une injonction ou une reparation equitable devant un tribunal competent pour les reclamations impliquant une atteinte a la propriete intellectuelle.",
            "severabilityP1": "Si la renonciation aux actions collectives ci-dessus est declaree inapplicable, la totalite du present accord d'arbitrage sera nulle. Toutes les autres dispositions sont separables."
        }
    },
    "de": {
        "usArbitration": {
            "heading": "US-Schiedsvereinbarung",
            "p1": "Wenn Sie in den Vereinigten Staaten ansaessig sind, vereinbaren Sie und LumenShore Limited, Streitigkeiten durch verbindliche individuelle Schiedsgerichtsbarkeit anstelle eines Gerichtsverfahrens beizulegen, sofern nachstehend nichts anderes bestimmt ist.",
            "p2": "Das Schiedsverfahren wird von der American Arbitration Association (AAA) oder JAMS nach deren Verbraucher-Schiedsregeln durchgefuehrt. Die Verfahren koennen per Fernzugriff, schriftlich oder persoenlich an einem von beiden Parteien vereinbarten Ort stattfinden.",
            "p3": "Die Entscheidung des Schiedsrichters ist endgueltig und bindend und kann als Urteil bei jedem zustaendigen Gericht eingetragen werden. Der Federal Arbitration Act (9 U.S.C. §§ 1-16) regelt die Durchsetzbarkeit dieser Schiedsklausel.",
            "classActionHeading": "Verzicht auf Sammelklage und Geschworenengericht",
            "classActionP1": "SIE UND LUMENSHORE VEREINBAREN, DASS JEDE SEITE ANSPRUECHE GEGEN DIE ANDERE NUR IN IHRER INDIVIDUELLEN EIGENSCHAFT GELTEND MACHEN KANN UND NICHT ALS KLAEGER ODER MITGLIED EINER KLASSE IN EINER SAMMELKLAGE, KONSOLIDIERTEN ODER REPRAESENTATIVEN KLAGE.",
            "classActionP2": "Sie verzichten auf das Recht auf ein Geschworenenverfahren fuer Streitigkeiten, die nicht der Schiedsgerichtsbarkeit unterliegen.",
            "optOutHeading": "30-Tage-Widerrufsrecht",
            "optOutP1": "Sie koennen innerhalb von 30 Tagen nach erstmaliger Annahme dieser Bedingungen von dieser Schiedsvereinbarung zuruecktreten, indem Sie eine schriftliche Mitteilung an <emailLink>support@lumenlingo.com</emailLink> senden.",
            "smallClaimsHeading": "Ausnahme für Bagatellverfahren",
            "smallClaimsP1": "Jede Partei kann einzelne Ansprueche vor einem zustaendigen Bagatellgericht geltend machen.",
            "exceptionsHeading": "Ausnahmen von der Schiedsgerichtsbarkeit",
            "exceptionsP1": "Jede Partei kann bei einem zustaendigen Gericht eine einstweilige Verfuegung fuer Ansprueche im Zusammenhang mit Verletzungen geistigen Eigentums beantragen.",
            "severabilityP1": "Wenn der vorstehende Sammelklageverzicht fuer nicht durchsetzbar erklaert wird, ist die gesamte Schiedsvereinbarung nichtig. Alle anderen Bestimmungen sind trennbar."
        }
    },
    "ja": {
        "usArbitration": {
            "heading": "米国仲裁合意",
            "p1": "お客様が米国居住者である場合、お客様およびLumenShore Limitedは、以下に規定する場合を除き、すべての紛争を裁判所ではなく拘束力のある個別仲裁により解決することに同意します。",
            "p2": "仲裁は、米国仲裁協会（AAA）またはJAMSの消費者仲裁規則に基づいて管理されます。手続きは、リモートで、書面により、または両当事者が合意した場所で対面で行うことができます。",
            "p3": "仲裁人の決定は最終的かつ拘束力があり、管轄権を有する裁判所で判決として登録することができます。連邦仲裁法（9 U.S.C. §§ 1-16）がこの仲裁条項の執行可能性を規律します。",
            "classActionHeading": "集団訴訟および陪審裁判の放棄",
            "classActionP1": "お客様およびLUMENSHOREは、各当事者が個人の資格においてのみ相手方に対して請求を行うことができ、いかなる集団訴訟、統合訴訟、または代表訴訟の原告またはクラスメンバーとしては行わないことに同意します。",
            "classActionP2": "お客様は、仲裁の対象とならない紛争について陪審裁判を受ける権利を放棄します。",
            "optOutHeading": "30日間のオプトアウト権",
            "optOutP1": "<emailLink>support@lumenlingo.com</emailLink>に書面で通知を送ることにより、本規約を最初に承諾してから30日以内にこの仲裁合意からオプトアウトできます。",
            "smallClaimsHeading": "少額裁判所の例外",
            "smallClaimsP1": "いずれの当事者も、請求が当該裁判所の規則に基づいて適格である場合、管轄権を有する少額裁判所に個別の請求を提起することができます。",
            "exceptionsHeading": "仲裁の例外",
            "exceptionsP1": "いずれの当事者も、知的財産権侵害に関する請求について管轄権を有する裁判所に差止命令または衡平法上の救済を求めることができます。",
            "severabilityP1": "上記の集団訴訟放棄が執行不能と判断された場合、この仲裁合意全体が無効となります。その他のすべての規定は分離可能です。"
        }
    },
    "pt": {
        "usArbitration": {
            "heading": "Acordo de Arbitragem dos EUA",
            "p1": "Se voce e residente nos Estados Unidos, voce e a LumenShore Limited concordam em resolver quaisquer disputas por meio de arbitragem individual vinculante em vez de tribunal, exceto conforme previsto abaixo.",
            "p2": "A arbitragem sera administrada pela American Arbitration Association (AAA) ou JAMS sob suas Regras de Arbitragem do Consumidor. Os procedimentos podem ser conduzidos remotamente, por escrito ou presencialmente em local acordado por ambas as partes.",
            "p3": "A decisao do arbitro sera final e vinculante, e podera ser registrada como sentenca em qualquer tribunal competente. A Lei Federal de Arbitragem (9 U.S.C. §§ 1-16) rege a aplicabilidade desta clausula de arbitragem.",
            "classActionHeading": "Renuncia a acao coletiva e julgamento por juri",
            "classActionP1": "VOCE E A LUMENSHORE CONCORDAM QUE CADA UM SO PODE APRESENTAR RECLAMACOES CONTRA O OUTRO EM SUA CAPACIDADE INDIVIDUAL E NAO COMO AUTOR OU MEMBRO DE UMA CLASSE EM QUALQUER ACAO COLETIVA, CONSOLIDADA OU REPRESENTATIVA.",
            "classActionP2": "Voce renuncia ao direito a julgamento por juri para disputas nao sujeitas a arbitragem.",
            "optOutHeading": "Direito de exclusao de 30 dias",
            "optOutP1": "Voce pode optar por nao participar deste acordo de arbitragem dentro de 30 dias apos a primeira aceitacao destes Termos, enviando aviso por escrito para <emailLink>support@lumenlingo.com</emailLink>.",
            "smallClaimsHeading": "Excecao de juizado de pequenas causas",
            "smallClaimsP1": "Qualquer das partes pode apresentar reclamacoes individuais em um juizado de pequenas causas competente.",
            "exceptionsHeading": "Excecoes a arbitragem",
            "exceptionsP1": "Qualquer das partes pode buscar medidas cautelares ou equitativas em tribunal competente para disputas envolvendo violacao de propriedade intelectual.",
            "severabilityP1": "Se a renuncia a acao coletiva acima for considerada inaplicavel, a totalidade deste acordo de arbitragem sera nula. Todas as demais disposicoes sao separaveis."
        }
    },
    "pl": {
        "usArbitration": {
            "heading": "Umowa arbitrazowa USA",
            "p1": "Jezeli jestes rezydentem Stanow Zjednoczonych, Ty i LumenShore Limited zgadzacie sie rozstrzygac wszelkie spory w drodze wiazacego arbitrazu indywidualnego zamiast w sadzie, z wyjatkiem przypadkow okreslonych ponizej.",
            "p2": "Arbitraz bedzie prowadzony przez American Arbitration Association (AAA) lub JAMS zgodnie z ich Regulaminem Arbitrazu Konsumenckiego. Postepowanie moze byc prowadzone zdalnie, pisemnie lub osobiscie w miejscu uzgodnionym przez obie strony.",
            "p3": "Decyzja arbitra jest ostateczna i wiazaca i moze byc zarejestrowana jako orzeczenie w kazdym wlasciwym sadzie. Federalna Ustawa o Arbitrazu (9 U.S.C. §§ 1-16) reguluje wykonalnosc tej klauzuli arbitrazowej.",
            "classActionHeading": "Zrzeczenie sie pozwu zbiorowego i prawa do lawy przysieclych",
            "classActionP1": "TY I LUMENSHORE ZGADZACIE SIE, ZE KAZDY MOZE WNOSIC ROSZCZENIA PRZECIWKO DRUGIEMU WYLACZNIE W SWOJEJ INDYWIDUALNEJ ZDOLNOSCI, A NIE JAKO POWOD LUB CZLONEK KLASY W JAKIMKOLWIEK POZWIE ZBIOROWYM, SKONSOLIDOWANYM LUB REPREZENTATYWNYM.",
            "classActionP2": "Zrzekasz sie prawa do procesu z udzialem lawy przysieclych w sporach niepodlegajacych arbitrazowi.",
            "optOutHeading": "30-dniowe prawo rezygnacji",
            "optOutP1": "Mozesz zrezygnowac z tej umowy arbitrazowej w ciagu 30 dni od pierwszego zaakceptowania niniejszych Warunkow, wysylajac pisemne zawiadomienie na adres <emailLink>support@lumenlingo.com</emailLink>.",
            "smallClaimsHeading": "Wyjatek dla drobnych roszczen",
            "smallClaimsP1": "Kazda ze stron moze wnosic indywidualne roszczenia do wlasciwego sadu ds. drobnych roszczen.",
            "exceptionsHeading": "Wyjatki od arbitrazu",
            "exceptionsP1": "Kazda ze stron moze wystapic o zabezpieczenie lub srodek slusznosci do wlasciwego sadu w przypadku roszczen dotyczacych naruszenia wlasnosci intelektualnej.",
            "severabilityP1": "Jezeli powyzsze zrzeczenie sie pozwu zbiorowego zostanie uznane za niewykonalne, calosc niniejszej umowy arbitrazowej bedzie niewazna. Wszystkie pozostale postanowienia sa rozlaczne."
        }
    },
    "ar": {
        "usArbitration": {
            "heading": "اتفاقية التحكيم الأمريكية",
            "p1": "إذا كنت مقيمًا في الولايات المتحدة، فإنك أنت وLumenShore Limited تتفقان على حل أي نزاعات من خلال التحكيم الفردي الملزم بدلاً من المحكمة، باستثناء ما هو منصوص عليه أدناه.",
            "p2": "يُدار التحكيم من قبل جمعية التحكيم الأمريكية (AAA) أو JAMS بموجب قواعد التحكيم الاستهلاكي الخاصة بها. يمكن إجراء الإجراءات عن بُعد أو كتابيًا أو شخصيًا في موقع يتفق عليه الطرفان.",
            "p3": "يكون قرار المحكم نهائيًا وملزمًا، ويمكن تسجيله كحكم في أي محكمة ذات اختصاص. يحكم قانون التحكيم الفيدرالي (9 U.S.C. §§ 1-16) قابلية إنفاذ شرط التحكيم هذا.",
            "classActionHeading": "التنازل عن الدعوى الجماعية والمحاكمة أمام هيئة المحلفين",
            "classActionP1": "أنت وLUMENSHORE تتفقان على أن كل طرف لا يجوز له تقديم مطالبات ضد الآخر إلا بصفته الفردية وليس كمدعٍ أو عضو في أي دعوى جماعية أو موحدة أو تمثيلية مزعومة.",
            "classActionP2": "أنت تتنازل عن أي حق في محاكمة أمام هيئة محلفين لأي نزاعات لا تخضع للتحكيم.",
            "optOutHeading": "حق الانسحاب خلال 30 يومًا",
            "optOutP1": "يمكنك الانسحاب من اتفاقية التحكيم هذه خلال 30 يومًا من قبول هذه الشروط لأول مرة عن طريق إرسال إشعار كتابي إلى <emailLink>support@lumenlingo.com</emailLink>.",
            "smallClaimsHeading": "استثناء محكمة المطالبات الصغيرة",
            "smallClaimsP1": "يجوز لأي من الطرفين تقديم مطالبات فردية في محكمة مطالبات صغيرة مختصة.",
            "exceptionsHeading": "استثناءات التحكيم",
            "exceptionsP1": "يجوز لأي من الطرفين طلب أمر قضائي أو تعويض عادل في محكمة مختصة لمطالبات تتعلق بانتهاك الملكية الفكرية.",
            "severabilityP1": "إذا تبين أن التنازل عن الدعوى الجماعية أعلاه غير قابل للتنفيذ، فإن اتفاقية التحكيم بأكملها تكون باطلة. جميع الأحكام الأخرى قابلة للفصل."
        }
    },
    "zh": {
        "usArbitration": {
            "heading": "美国仲裁协议",
            "p1": "如果您是美国居民，您和LumenShore Limited同意通过具有约束力的个人仲裁而非法院来解决任何争议，但以下规定除外。",
            "p2": "仲裁由美国仲裁协会（AAA）或JAMS根据其消费者仲裁规则管理。诉讼程序可以远程、书面或在双方商定的地点面对面进行。",
            "p3": "仲裁员的裁决为终局裁决，具有约束力，可在任何有管辖权的法院作为判决登记。《联邦仲裁法》（9 U.S.C. §§ 1-16）管辖本仲裁条款的可执行性。",
            "classActionHeading": "集体诉讼和陪审团审判弃权",
            "classActionP1": "您和LUMENSHORE同意，各方只能以个人身份向另一方提出索赔，不得作为任何所谓集体诉讼、合并诉讼或代表诉讼中的原告或集体成员。",
            "classActionP2": "对于不受仲裁约束的争议，您放弃陪审团审判的权利。",
            "optOutHeading": "30天退出权",
            "optOutP1": "您可以在首次接受本条款后30天内向<emailLink>support@lumenlingo.com</emailLink>发送书面通知，退出本仲裁协议。",
            "smallClaimsHeading": "小额索赔法院例外",
            "smallClaimsP1": "任何一方均可在有管辖权的小额索赔法院提起个人索赔。",
            "exceptionsHeading": "仲裁例外",
            "exceptionsP1": "任何一方均可就涉及知识产权侵权的索赔向有管辖权的法院寻求禁令或衡平法救济。",
            "severabilityP1": "如果上述集体诉讼弃权被认定为不可执行，则整个仲裁协议无效。所有其他条款可分割。"
        }
    },
    "uk": {
        "usArbitration": {
            "heading": "Арбітражна угода США",
            "p1": "Якщо ви є резидентом Сполучених Штатів, ви та LumenShore Limited погоджуєтесь вирішувати будь-які спори шляхом обов'язкового індивідуального арбітражу, а не в суді, за винятком випадків, зазначених нижче.",
            "p2": "Арбітраж адмініструється Американською арбітражною асоціацією (AAA) або JAMS відповідно до їхніх Правил споживчого арбітражу. Провадження може здійснюватися дистанційно, письмово або особисто у місці, погодженому обома сторонами.",
            "p3": "Рішення арбітра є остаточним і обов'язковим та може бути зареєстровано як судове рішення в будь-якому компетентному суді. Федеральний закон про арбітраж (9 U.S.C. §§ 1-16) регулює виконуваність цього арбітражного застереження.",
            "classActionHeading": "Відмова від колективного позову та суду присяжних",
            "classActionP1": "ВИ ТА LUMENSHORE ПОГОДЖУЄТЕСЬ, ЩО КОЖЕН МОЖЕ ПОДАВАТИ ПОЗОВИ ПРОТИ ІНШОГО ЛИШЕ В ІНДИВІДУАЛЬНІЙ ЯКОСТІ, А НЕ ЯК ПОЗИВАЧ АБО ЧЛЕН КЛАСУ В БУДЬ-ЯКОМУ КОЛЕКТИВНОМУ, КОНСОЛІДОВАНОМУ АБО ПРЕДСТАВНИЦЬКОМУ ПОЗОВІ.",
            "classActionP2": "Ви відмовляєтесь від права на суд присяжних для спорів, що не підлягають арбітражу.",
            "optOutHeading": "30-денне право на відмову",
            "optOutP1": "Ви можете відмовитися від цієї арбітражної угоди протягом 30 днів після першого прийняття цих Умов, надіславши письмове повідомлення на <emailLink>support@lumenlingo.com</emailLink>.",
            "smallClaimsHeading": "Виняток для суду дрібних позовів",
            "smallClaimsP1": "Будь-яка сторона може подати індивідуальні позови до компетентного суду дрібних позовів.",
            "exceptionsHeading": "Винятки з арбітражу",
            "exceptionsP1": "Будь-яка сторона може звернутися до компетентного суду за забезпечувальними заходами щодо позовів, пов'язаних з порушенням інтелектуальної власності.",
            "severabilityP1": "Якщо вищезазначена відмова від колективного позову буде визнана такою, що не підлягає примусовому виконанню, вся ця арбітражна угода буде недійсною. Усі інші положення є відокремлюваними."
        }
    }
}

for locale, data in TRANSLATIONS.items():
    path = os.path.join(BASE, f"{locale}.json")
    with open(path, "r", encoding="utf-8") as f:
        content = json.load(f)
    content["Terms"]["usArbitration"] = data["usArbitration"]
    with open(path, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Updated {locale}.json with usArbitration")

print("Done — Story 14.4 US Arbitration translations added.")

#!/usr/bin/env python3
"""Epic 13: Terms of Service -- Additional Hardening.

Story 13.1: Force majeure notice and mitigation obligations
Story 13.2: Cure period before termination for curable breaches
Story 13.3: Standardise company name throughout Terms
Story 13.4: Cooling-off waiver mechanism (CCR 2013 reg. 37)
Story 13.5: Convert all-caps clauses to plain language
"""
import json
import os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# Helper: Polish/German low-9 + right-double quotes
LQ = "\u201e"  # opening lower-9 quotation mark
RQ = "\u201d"  # closing right double quotation mark

# ================================================================
# Story 13.1  Force majeure -- notice, mitigation, pro-rata refund
# ================================================================
FORCE_MAJEURE = {
    "en": {
        "heading": "Force Majeure",
        "p1": (
            "Neither party shall be liable for any failure or delay in "
            "performing its obligations under these Terms where such failure "
            "or delay results from causes beyond its reasonable control, "
            "including but not limited to: natural disasters, government "
            "actions, internet or telecommunications failures, pandemic, civil "
            "unrest, or third-party service provider outages (each a "
            "\"Force Majeure Event\")."
        ),
        "p2": (
            "The party affected by a Force Majeure Event shall promptly "
            "notify the other party in writing, describing the nature of the "
            "event and its expected duration."
        ),
        "p3": (
            "The affected party shall use reasonable endeavours to mitigate "
            "the effect of the Force Majeure Event and to resume performance "
            "of its obligations as soon as reasonably practicable."
        ),
        "p4": (
            "During a Force Majeure Event, the affected party\u2019s "
            "obligations are suspended for the duration of the event."
        ),
        "p5": (
            "If a Force Majeure Event continues for more than 90 consecutive "
            "days, either party may terminate the agreement by giving written "
            "notice to the other party. In the event of such termination, "
            "paid subscribers will receive a pro-rata refund for any pre-paid "
            "subscription period remaining after the date of termination."
        ),
    },
    "pl": {
        "heading": "Si\u0142a wy\u017csza",
        "p1": (
            "\u017badna ze stron nie ponosi odpowiedzialno\u015bci za "
            "niewykonanie lub op\u00f3\u017anienie w wykonaniu swoich "
            "zobowi\u0105za\u0144 wynikaj\u0105cych z niniejszych Warunk\u00f3w, "
            "je\u017celi takie niewykonanie lub op\u00f3\u017anienie wynika z "
            "przyczyn pozostaj\u0105cych poza jej rozs\u0105dn\u0105 kontrol\u0105, "
            "w tym mi\u0119dzy innymi: kl\u0119ski \u017cywio\u0142owe, "
            "dzia\u0142ania rz\u0105dowe, awarie internetu lub telekomunikacji, "
            "pandemia, niepokoje spo\u0142eczne lub awarie dostawc\u00f3w "
            "us\u0142ug zewn\u0119trznych (ka\u017cde " + LQ +
            "Zdarzenie Si\u0142y Wy\u017cszej" + RQ + ")."
        ),
        "p2": (
            "Strona dotkni\u0119ta Zdarzeniem Si\u0142y Wy\u017cszej "
            "niezw\u0142ocznie powiadomi drug\u0105 stron\u0119 na pi\u015bmie, "
            "opisuj\u0105c charakter zdarzenia i jego przewidywany czas trwania."
        ),
        "p3": (
            "Strona dotkni\u0119ta do\u0142o\u017cy rozs\u0105dnych stara\u0144, "
            "aby z\u0142agodzi\u0107 skutki Zdarzenia Si\u0142y Wy\u017cszej i "
            "jak najszybciej wznowi\u0107 wykonywanie swoich zobowi\u0105za\u0144."
        ),
        "p4": (
            "W trakcie Zdarzenia Si\u0142y Wy\u017cszej zobowi\u0105zania "
            "strony dotkni\u0119tej s\u0105 zawieszone na czas trwania zdarzenia."
        ),
        "p5": (
            "Je\u017celi Zdarzenie Si\u0142y Wy\u017cszej trwa d\u0142u\u017cej "
            "ni\u017c 90 kolejnych dni, ka\u017cda ze stron mo\u017ce "
            "rozwi\u0105za\u0107 umow\u0119, sk\u0142adaj\u0105c pisemne "
            "wypowiedzenie drugiej stronie. W przypadku takiego rozwi\u0105zania, "
            "p\u0142ac\u0105cy subskrybenci otrzymaj\u0105 proporcjonalny zwrot "
            "za pozosta\u0142y op\u0142acony okres subskrypcji."
        ),
    },
    "de": {
        "heading": "H\u00f6here Gewalt",
        "p1": (
            "Keine Partei haftet f\u00fcr eine Nichterf\u00fcllung oder "
            "Verz\u00f6gerung bei der Erf\u00fcllung ihrer Verpflichtungen "
            "aus diesen Bedingungen, wenn diese auf Ursachen "
            "zur\u00fcckzuf\u00fchren ist, die au\u00dferhalb ihrer zumutbaren "
            "Kontrolle liegen, einschlie\u00dflich, aber nicht beschr\u00e4nkt "
            "auf: Naturkatastrophen, Regierungsma\u00dfnahmen, Internet- oder "
            "Telekommunikationsausf\u00e4lle, Pandemie, zivile Unruhen oder "
            "Ausf\u00e4lle von Drittanbietern (jeweils ein " + LQ +
            "Ereignis h\u00f6herer Gewalt" + RQ + ")."
        ),
        "p2": (
            "Die von einem Ereignis h\u00f6herer Gewalt betroffene Partei wird "
            "die andere Partei unverz\u00fcglich schriftlich benachrichtigen und "
            "die Art des Ereignisses und seine voraussichtliche Dauer beschreiben."
        ),
        "p3": (
            "Die betroffene Partei wird zumutbare Anstrengungen unternehmen, "
            "um die Auswirkungen des Ereignisses h\u00f6herer Gewalt zu mildern "
            "und die Erf\u00fcllung ihrer Verpflichtungen so bald wie "
            "vern\u00fcnftigerweise m\u00f6glich wiederaufzunehmen."
        ),
        "p4": (
            "W\u00e4hrend eines Ereignisses h\u00f6herer Gewalt sind die "
            "Verpflichtungen der betroffenen Partei f\u00fcr die Dauer des "
            "Ereignisses ausgesetzt."
        ),
        "p5": (
            "Wenn ein Ereignis h\u00f6herer Gewalt l\u00e4nger als 90 "
            "aufeinanderfolgende Tage andauert, kann jede Partei den Vertrag "
            "durch schriftliche Mitteilung an die andere Partei k\u00fcndigen. "
            "Im Falle einer solchen K\u00fcndigung erhalten zahlende Abonnenten "
            "eine anteilige R\u00fcckerstattung f\u00fcr den verbleibenden "
            "vorausbezahlten Abonnementzeitraum."
        ),
    },
    "es": {
        "heading": "Fuerza mayor",
        "p1": (
            "Ninguna de las partes ser\u00e1 responsable de cualquier "
            "incumplimiento o retraso en el cumplimiento de sus obligaciones "
            "en virtud de estos T\u00e9rminos cuando dicho incumplimiento o "
            "retraso se deba a causas fuera de su control razonable, "
            "incluyendo pero no limit\u00e1ndose a: desastres naturales, "
            "acciones gubernamentales, fallos de internet o telecomunicaciones, "
            "pandemia, disturbios civiles o interrupciones de proveedores de "
            "servicios externos (cada uno un \"Evento de Fuerza Mayor\")."
        ),
        "p2": (
            "La parte afectada por un Evento de Fuerza Mayor notificar\u00e1 "
            "por escrito a la otra parte sin demora, describiendo la naturaleza "
            "del evento y su duraci\u00f3n prevista."
        ),
        "p3": (
            "La parte afectada har\u00e1 esfuerzos razonables para mitigar "
            "el efecto del Evento de Fuerza Mayor y reanudar el cumplimiento "
            "de sus obligaciones lo antes posible."
        ),
        "p4": (
            "Durante un Evento de Fuerza Mayor, las obligaciones de la parte "
            "afectada quedan suspendidas mientras dure el evento."
        ),
        "p5": (
            "Si un Evento de Fuerza Mayor contin\u00faa durante m\u00e1s de "
            "90 d\u00edas consecutivos, cualquiera de las partes podr\u00e1 "
            "rescindir el acuerdo mediante notificaci\u00f3n escrita a la otra "
            "parte. En caso de dicha rescisi\u00f3n, los suscriptores de pago "
            "recibir\u00e1n un reembolso proporcional por el per\u00edodo de "
            "suscripci\u00f3n prepagado restante."
        ),
    },
    "fr": {
        "heading": "Force majeure",
        "p1": (
            "Aucune partie ne sera tenue responsable de tout manquement ou "
            "retard dans l\u2019ex\u00e9cution de ses obligations en vertu des "
            "pr\u00e9sentes Conditions lorsqu\u2019un tel manquement ou retard "
            "r\u00e9sulte de causes ind\u00e9pendantes de sa volont\u00e9, y "
            "compris mais sans s\u2019y limiter : catastrophes naturelles, "
            "actions gouvernementales, d\u00e9faillances d\u2019Internet ou des "
            "t\u00e9l\u00e9communications, pand\u00e9mie, troubles civils ou "
            "pannes de fournisseurs de services tiers (chacun un "
            "\u00ab \u00c9v\u00e9nement de Force Majeure \u00bb)."
        ),
        "p2": (
            "La partie affect\u00e9e par un \u00c9v\u00e9nement de Force "
            "Majeure notifiera rapidement l\u2019autre partie par \u00e9crit, "
            "en d\u00e9crivant la nature de l\u2019\u00e9v\u00e9nement et sa "
            "dur\u00e9e pr\u00e9vue."
        ),
        "p3": (
            "La partie affect\u00e9e d\u00e9ploiera des efforts raisonnables "
            "pour att\u00e9nuer les effets de l\u2019\u00c9v\u00e9nement de "
            "Force Majeure et reprendre l\u2019ex\u00e9cution de ses "
            "obligations d\u00e8s que raisonnablement possible."
        ),
        "p4": (
            "Pendant un \u00c9v\u00e9nement de Force Majeure, les obligations "
            "de la partie affect\u00e9e sont suspendues pour la dur\u00e9e de "
            "l\u2019\u00e9v\u00e9nement."
        ),
        "p5": (
            "Si un \u00c9v\u00e9nement de Force Majeure se poursuit pendant "
            "plus de 90 jours cons\u00e9cutifs, l\u2019une ou l\u2019autre des "
            "parties peut r\u00e9silier l\u2019accord en donnant un pr\u00e9avis "
            "\u00e9crit \u00e0 l\u2019autre partie. En cas de r\u00e9siliation, "
            "les abonn\u00e9s payants recevront un remboursement au prorata "
            "pour la p\u00e9riode d\u2019abonnement pr\u00e9pay\u00e9e restante."
        ),
    },
    "ja": {
        "heading": "\u4e0d\u53ef\u6297\u529b",
        "p1": (
            "\u3044\u305a\u308c\u306e\u5f53\u4e8b\u8005\u3082\u3001\u672c"
            "\u898f\u7d04\u306b\u57fa\u3065\u304f\u7fa9\u52d9\u306e\u4e0d"
            "\u5c65\u884c\u307e\u305f\u306f\u9045\u5ef6\u304c\u3001\u81ea"
            "\u7136\u707d\u5bb3\u3001\u653f\u5e9c\u306e\u63aa\u7f6e\u3001"
            "\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u307e\u305f\u306f"
            "\u901a\u4fe1\u306e\u969c\u5bb3\u3001\u30d1\u30f3\u30c7\u30df"
            "\u30c3\u30af\u3001\u5e02\u6c11\u306e\u9a12\u4e71\u3001\u307e"
            "\u305f\u306f\u7b2c\u4e09\u8005\u30b5\u30fc\u30d3\u30b9\u30d7"
            "\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u969c\u5bb3\u3092\u542b"
            "\u3080\u304c\u3053\u308c\u3089\u306b\u9650\u5b9a\u3055\u308c"
            "\u306a\u3044\u3001\u5408\u7406\u7684\u306a\u5236\u5fa1\u3092"
            "\u8d85\u3048\u305f\u539f\u56e0\u306b\u8d77\u56e0\u3059\u308b"
            "\u5834\u5408\u3001\u8cac\u4efb\u3092\u8ca0\u308f\u306a\u3044"
            "\u3082\u306e\u3068\u3057\u307e\u3059\uff08\u305d\u308c\u305e"
            "\u308c\u300c\u4e0d\u53ef\u6297\u529b\u4e8b\u8c61\u300d\uff09\u3002"
        ),
        "p2": (
            "\u4e0d\u53ef\u6297\u529b\u4e8b\u8c61\u306e\u5f71\u97ff\u3092"
            "\u53d7\u3051\u305f\u5f53\u4e8b\u8005\u306f\u3001\u4e8b\u8c61"
            "\u306e\u6027\u8cea\u3068\u4e88\u60f3\u3055\u308c\u308b\u671f"
            "\u9593\u3092\u8a18\u8f09\u3057\u3066\u3001\u901f\u3084\u304b"
            "\u306b\u66f8\u9762\u3067\u76f8\u624b\u65b9\u306b\u901a\u77e5"
            "\u3059\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002"
        ),
        "p3": (
            "\u5f71\u97ff\u3092\u53d7\u3051\u305f\u5f53\u4e8b\u8005\u306f"
            "\u3001\u4e0d\u53ef\u6297\u529b\u4e8b\u8c61\u306e\u5f71\u97ff"
            "\u3092\u8efd\u6e1b\u3057\u3001\u5408\u7406\u7684\u306b\u5b9f"
            "\u884c\u53ef\u80fd\u306a\u9650\u308a\u65e9\u671f\u306b\u7fa9"
            "\u52d9\u306e\u5c65\u884c\u3092\u518d\u958b\u3059\u308b\u305f"
            "\u3081\u306b\u5408\u7406\u7684\u306a\u52aa\u529b\u3092\u6255"
            "\u3046\u3082\u306e\u3068\u3057\u307e\u3059\u3002"
        ),
        "p4": (
            "\u4e0d\u53ef\u6297\u529b\u4e8b\u8c61\u306e\u671f\u9593\u4e2d"
            "\u3001\u5f71\u97ff\u3092\u53d7\u3051\u305f\u5f53\u4e8b\u8005"
            "\u306e\u7fa9\u52d9\u306f\u305d\u306e\u671f\u9593\u4e2d\u505c"
            "\u6b62\u3055\u308c\u307e\u3059\u3002"
        ),
        "p5": (
            "\u4e0d\u53ef\u6297\u529b\u4e8b\u8c61\u304c90\u65e5\u9593\u9023"
            "\u7d9a\u3057\u3066\u7d99\u7d9a\u3059\u308b\u5834\u5408\u3001"
            "\u3044\u305a\u308c\u306e\u5f53\u4e8b\u8005\u3082\u76f8\u624b"
            "\u65b9\u306b\u66f8\u9762\u3067\u901a\u77e5\u3059\u308b\u3053"
            "\u3068\u306b\u3088\u308a\u5951\u7d04\u3092\u7d42\u4e86\u3059"
            "\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u304b"
            "\u304b\u308b\u7d42\u4e86\u306e\u5834\u5408\u3001\u6709\u6599"
            "\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u4f1a"
            "\u54e1\u306f\u7d42\u4e86\u65e5\u4ee5\u964d\u306e\u6b8b\u308a"
            "\u306e\u524d\u6255\u3044\u30b5\u30d6\u30b9\u30af\u30ea\u30d7"
            "\u30b7\u30e7\u30f3\u671f\u9593\u306b\u3064\u3044\u3066\u65e5"
            "\u5272\u308a\u8fd4\u91d1\u3092\u53d7\u3051\u307e\u3059\u3002"
        ),
    },
    "zh": {
        "heading": "\u4e0d\u53ef\u6297\u529b",
        "p1": (
            "\u4efb\u4f55\u4e00\u65b9\u56e0\u8d85\u51fa\u5176\u5408\u7406"
            "\u63a7\u5236\u8303\u56f4\u7684\u539f\u56e0\uff08\u5305\u62ec"
            "\u4f46\u4e0d\u9650\u4e8e\uff1a\u81ea\u7136\u707e\u5bb3\u3001"
            "\u653f\u5e9c\u884c\u4e3a\u3001\u4e92\u8054\u7f51\u6216\u7535"
            "\u4fe1\u6545\u969c\u3001\u5927\u6d41\u884c\u75c5\u3001\u793e"
            "\u4f1a\u52a8\u8361\u6216\u7b2c\u4e09\u65b9\u670d\u52a1\u63d0"
            "\u4f9b\u5546\u4e2d\u65ad\uff0c\u6bcf\u4e2a\u5747\u6784\u6210"
            "\"\u4e0d\u53ef\u6297\u529b\u4e8b\u4ef6\"\uff09\u800c\u672a"
            "\u80fd\u6216\u5ef6\u8fdf\u5c65\u884c\u672c\u6761\u6b3e\u9879"
            "\u4e0b\u7684\u4e49\u52a1\uff0c\u5747\u4e0d\u627f\u62c5\u8d23"
            "\u4efb\u3002"
        ),
        "p2": (
            "\u53d7\u4e0d\u53ef\u6297\u529b\u4e8b\u4ef6\u5f71\u54cd\u7684"
            "\u4e00\u65b9\u5e94\u53ca\u65f6\u4ee5\u4e66\u9762\u65b9\u5f0f"
            "\u901a\u77e5\u53e6\u4e00\u65b9\uff0c\u8bf4\u660e\u4e8b\u4ef6"
            "\u7684\u6027\u8d28\u53ca\u5176\u9884\u8ba1\u6301\u7eed\u65f6"
            "\u95f4\u3002"
        ),
        "p3": (
            "\u53d7\u5f71\u54cd\u7684\u4e00\u65b9\u5e94\u5c3d\u5408\u7406"
            "\u52aa\u529b\u51cf\u8f7b\u4e0d\u53ef\u6297\u529b\u4e8b\u4ef6"
            "\u7684\u5f71\u54cd\uff0c\u5e76\u5728\u5408\u7406\u53ef\u884c"
            "\u7684\u8303\u56f4\u5185\u5c3d\u5feb\u6062\u590d\u5c65\u884c"
            "\u4e49\u52a1\u3002"
        ),
        "p4": (
            "\u5728\u4e0d\u53ef\u6297\u529b\u4e8b\u4ef6\u671f\u95f4\uff0c"
            "\u53d7\u5f71\u54cd\u4e00\u65b9\u7684\u4e49\u52a1\u5728\u4e8b"
            "\u4ef6\u6301\u7eed\u671f\u95f4\u4e2d\u6b62\u3002"
        ),
        "p5": (
            "\u5982\u679c\u4e0d\u53ef\u6297\u529b\u4e8b\u4ef6\u6301\u7eed"
            "\u8d85\u8fc7\u8fde\u7eed90\u5929\uff0c\u4efb\u4f55\u4e00\u65b9"
            "\u5747\u53ef\u901a\u8fc7\u4e66\u9762\u901a\u77e5\u53e6\u4e00"
            "\u65b9\u7ec8\u6b62\u534f\u8bae\u3002\u5728\u6b64\u79cd\u7ec8"
            "\u6b62\u60c5\u51b5\u4e0b\uff0c\u4ed8\u8d39\u8ba2\u9605\u8005"
            "\u5c06\u83b7\u5f97\u7ec8\u6b62\u65e5\u671f\u540e\u5269\u4f59"
            "\u9884\u4ed8\u8ba2\u9605\u671f\u95f4\u7684\u6309\u6bd4\u4f8b"
            "\u9000\u6b3e\u3002"
        ),
    },
    "ar": {
        "heading": "\u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0642\u0627\u0647\u0631\u0629",
        "p1": (
            "\u0644\u0627 \u064a\u062a\u062d\u0645\u0644 \u0623\u064a "
            "\u0637\u0631\u0641 \u0627\u0644\u0645\u0633\u0624\u0648\u0644"
            "\u064a\u0629 \u0639\u0646 \u0623\u064a \u0625\u062e\u0641\u0627"
            "\u0642 \u0623\u0648 \u062a\u0623\u062e\u064a\u0631 \u0641\u064a "
            "\u0623\u062f\u0627\u0621 \u0627\u0644\u062a\u0632\u0627\u0645"
            "\u0627\u062a\u0647 \u0628\u0645\u0648\u062c\u0628 \u0647\u0630"
            "\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0639\u0646\u062f"
            "\u0645\u0627 \u064a\u0646\u062a\u062c \u0647\u0630\u0627 "
            "\u0627\u0644\u0625\u062e\u0641\u0627\u0642 \u0623\u0648 "
            "\u0627\u0644\u062a\u0623\u062e\u064a\u0631 \u0639\u0646 "
            "\u0623\u0633\u0628\u0627\u0628 \u062e\u0627\u0631\u062c\u0629 "
            "\u0639\u0646 \u0633\u064a\u0637\u0631\u062a\u0647 \u0627\u0644"
            "\u0645\u0639\u0642\u0648\u0644\u0629\u060c \u0628\u0645\u0627 "
            "\u0641\u064a \u0630\u0644\u0643 \u0639\u0644\u0649 \u0633\u0628"
            "\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 "
            "\u0627\u0644\u062d\u0635\u0631: \u0627\u0644\u0643\u0648\u0627"
            "\u0631\u062b \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629"
            "\u060c \u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a "
            "\u0627\u0644\u062d\u0643\u0648\u0645\u064a\u0629\u060c "
            "\u0623\u0639\u0637\u0627\u0644 \u0627\u0644\u0625\u0646\u062a"
            "\u0631\u0646\u062a \u0623\u0648 \u0627\u0644\u0627\u062a\u0635"
            "\u0627\u0644\u0627\u062a\u060c \u0627\u0644\u0623\u0648\u0628"
            "\u0626\u0629\u060c \u0627\u0644\u0627\u0636\u0637\u0631\u0627"
            "\u0628\u0627\u062a \u0627\u0644\u0645\u062f\u0646\u064a\u0629"
            "\u060c \u0623\u0648 \u0627\u0646\u0642\u0637\u0627\u0639\u0627"
            "\u062a \u0645\u0632\u0648\u062f\u064a \u0627\u0644\u062e\u062f"
            "\u0645\u0627\u062a \u0627\u0644\u062e\u0627\u0631\u062c\u064a"
            "\u0629 (\u0643\u0644 \u0645\u0646\u0647\u0627 "
            "\"\u062d\u062f\u062b \u0642\u0648\u0629 \u0642\u0627\u0647"
            "\u0631\u0629\")."
        ),
        "p2": (
            "\u064a\u062c\u0628 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631"
            "\u0641 \u0627\u0644\u0645\u062a\u0623\u062b\u0631 \u0628\u062d"
            "\u062f\u062b \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0642"
            "\u0627\u0647\u0631\u0629 \u0625\u062e\u0637\u0627\u0631 "
            "\u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0622\u062e\u0631 "
            "\u0643\u062a\u0627\u0628\u064a\u0627\u064b \u0639\u0644\u0649 "
            "\u0627\u0644\u0641\u0648\u0631\u060c \u0645\u0639 \u0648\u0635"
            "\u0641 \u0637\u0628\u064a\u0639\u0629 \u0627\u0644\u062d\u062f"
            "\u062b \u0648\u0645\u062f\u062a\u0647 \u0627\u0644\u0645\u062a"
            "\u0648\u0642\u0639\u0629."
        ),
        "p3": (
            "\u064a\u062c\u0628 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631"
            "\u0641 \u0627\u0644\u0645\u062a\u0623\u062b\u0631 \u0628\u0630"
            "\u0644 \u062c\u0647\u0648\u062f \u0645\u0639\u0642\u0648\u0644"
            "\u0629 \u0644\u0644\u062a\u062e\u0641\u064a\u0641 \u0645\u0646 "
            "\u062a\u0623\u062b\u064a\u0631 \u062d\u062f\u062b \u0627\u0644"
            "\u0642\u0648\u0629 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 "
            "\u0648\u0627\u0633\u062a\u0626\u0646\u0627\u0641 \u0623\u062f"
            "\u0627\u0621 \u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a"
            "\u0647 \u0641\u064a \u0623\u0642\u0631\u0628 \u0648\u0642\u062a "
            "\u0645\u0645\u0643\u0646 \u0639\u0645\u0644\u064a\u0627\u064b."
        ),
        "p4": (
            "\u062e\u0644\u0627\u0644 \u062d\u062f\u062b \u0627\u0644\u0642"
            "\u0648\u0629 \u0627\u0644\u0642\u0627\u0647\u0631\u0629\u060c "
            "\u064a\u062a\u0645 \u062a\u0639\u0644\u064a\u0642 \u0627\u0644"
            "\u062a\u0632\u0627\u0645\u0627\u062a \u0627\u0644\u0637\u0631"
            "\u0641 \u0627\u0644\u0645\u062a\u0623\u062b\u0631 \u0637\u0648"
            "\u0627\u0644 \u0645\u062f\u0629 \u0627\u0644\u062d\u062f\u062b."
        ),
        "p5": (
            "\u0625\u0630\u0627 \u0627\u0633\u062a\u0645\u0631 \u062d\u062f"
            "\u062b \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0642\u0627"
            "\u0647\u0631\u0629 \u0644\u0623\u0643\u062b\u0631 \u0645\u0646 "
            "90 \u064a\u0648\u0645\u0627\u064b \u0645\u062a\u062a\u0627\u0644"
            "\u064a\u0627\u064b\u060c \u064a\u062c\u0648\u0632 \u0644\u0623"
            "\u064a \u0645\u0646 \u0627\u0644\u0637\u0631\u0641\u064a\u0646 "
            "\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0627\u062a\u0641"
            "\u0627\u0642\u064a\u0629 \u0628\u0625\u0631\u0633\u0627\u0644 "
            "\u0625\u0634\u0639\u0627\u0631 \u0643\u062a\u0627\u0628\u064a "
            "\u0625\u0644\u0649 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644"
            "\u0622\u062e\u0631. \u0641\u064a \u062d\u0627\u0644\u0629 "
            "\u0647\u0630\u0627 \u0627\u0644\u0625\u0646\u0647\u0627\u0621"
            "\u060c \u0633\u064a\u062d\u0635\u0644 \u0627\u0644\u0645\u0634"
            "\u062a\u0631\u0643\u0648\u0646 \u0627\u0644\u0645\u062f\u0641"
            "\u0648\u0639\u0648\u0646 \u0639\u0644\u0649 \u0627\u0633\u062a"
            "\u0631\u062f\u0627\u062f \u062a\u0646\u0627\u0633\u0628\u064a "
            "\u0639\u0646 \u0641\u062a\u0631\u0629 \u0627\u0644\u0627\u0634"
            "\u062a\u0631\u0627\u0643 \u0627\u0644\u0645\u062f\u0641\u0648"
            "\u0639\u0629 \u0645\u0633\u0628\u0642\u0627\u064b \u0627\u0644"
            "\u0645\u062a\u0628\u0642\u064a\u0629."
        ),
    },
    "uk": {
        "heading": "\u0424\u043e\u0440\u0441-\u043c\u0430\u0436\u043e\u0440",
        "p1": (
            "\u0416\u043e\u0434\u043d\u0430 \u0437\u0456 \u0441\u0442\u043e"
            "\u0440\u0456\u043d \u043d\u0435 \u043d\u0435\u0441\u0435 "
            "\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b"
            "\u044c\u043d\u043e\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443"
            "\u0434\u044c-\u044f\u043a\u0435 \u043d\u0435\u0432\u0438\u043a"
            "\u043e\u043d\u0430\u043d\u043d\u044f \u0430\u0431\u043e "
            "\u0437\u0430\u0442\u0440\u0438\u043c\u043a\u0443 \u0443 "
            "\u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u0456 \u0441"
            "\u0432\u043e\u0457\u0445 \u0437\u043e\u0431\u043e\u0432\u2019"
            "\u044f\u0437\u0430\u043d\u044c \u0437\u0430 \u0446\u0438\u043c"
            "\u0438 \u0423\u043c\u043e\u0432\u0430\u043c\u0438, \u044f\u043a"
            "\u0449\u043e \u0442\u0430\u043a\u0435 \u043d\u0435\u0432\u0438"
            "\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0430\u0431\u043e "
            "\u0437\u0430\u0442\u0440\u0438\u043c\u043a\u0430 \u0454 "
            "\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e"
            "\u043c \u043f\u0440\u0438\u0447\u0438\u043d, \u0449\u043e "
            "\u0432\u0438\u0445\u043e\u0434\u044f\u0442\u044c \u0437\u0430 "
            "\u043c\u0435\u0436\u0456 \u0457\u0457 \u0440\u043e\u0437\u0443"
            "\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440"
            "\u043e\u043b\u044e, \u0432\u043a\u043b\u044e\u0447\u0430\u044e"
            "\u0447\u0438, \u0430\u043b\u0435 \u043d\u0435 \u043e\u0431"
            "\u043c\u0435\u0436\u0443\u044e\u0447\u0438\u0441\u044c: "
            "\u0441\u0442\u0438\u0445\u0456\u0439\u043d\u0456 \u043b\u0438"
            "\u0445\u0430, \u0434\u0456\u0457 \u0443\u0440\u044f\u0434\u0456"
            "\u0432, \u0437\u0431\u043e\u0457 \u0456\u043d\u0442\u0435\u0440"
            "\u043d\u0435\u0442\u0443 \u0430\u0431\u043e \u0442\u0435\u043b"
            "\u0435\u043a\u043e\u043c\u0443\u043d\u0456\u043a\u0430\u0446"
            "\u0456\u0439, \u043f\u0430\u043d\u0434\u0435\u043c\u0456\u044f"
            ", \u0433\u0440\u043e\u043c\u0430\u0434\u0441\u044c\u043a\u0456 "
            "\u0437\u0430\u0432\u043e\u0440\u0443\u0448\u0435\u043d\u043d"
            "\u044f \u0430\u0431\u043e \u0437\u0431\u043e\u0457 \u0441\u0442"
            "\u043e\u0440\u043e\u043d\u043d\u0456\u0445 \u043f\u043e\u0441"
            "\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0456"
            "\u0432 \u043f\u043e\u0441\u043b\u0443\u0433 (\u043a\u043e\u0436"
            "\u043d\u0435 \u2014 \u00ab\u041f\u043e\u0434\u0456\u044f "
            "\u0444\u043e\u0440\u0441-\u043c\u0430\u0436\u043e\u0440\u0443"
            "\u00bb)."
        ),
        "p2": (
            "\u0421\u0442\u043e\u0440\u043e\u043d\u0430, \u044f\u043a\u0430 "
            "\u043f\u043e\u0441\u0442\u0440\u0430\u0436\u0434\u0430\u043b"
            "\u0430 \u0432\u0456\u0434 \u041f\u043e\u0434\u0456\u0457 "
            "\u0444\u043e\u0440\u0441-\u043c\u0430\u0436\u043e\u0440\u0443"
            ", \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u043d\u0435\u0433"
            "\u0430\u0439\u043d\u043e \u043f\u043e\u0432\u0456\u0434\u043e"
            "\u043c\u0438\u0442\u0438 \u0456\u043d\u0448\u0443 \u0441\u0442"
            "\u043e\u0440\u043e\u043d\u0443 \u0432 \u043f\u0438\u0441\u044c"
            "\u043c\u043e\u0432\u0456\u0439 \u0444\u043e\u0440\u043c\u0456"
            ", \u043e\u043f\u0438\u0441\u0430\u0432\u0448\u0438 \u0445\u0430"
            "\u0440\u0430\u043a\u0442\u0435\u0440 \u043f\u043e\u0434\u0456"
            "\u0457 \u0442\u0430 \u0457\u0457 \u043e\u0447\u0456\u043a\u0443"
            "\u0432\u0430\u043d\u0443 \u0442\u0440\u0438\u0432\u0430\u043b"
            "\u0456\u0441\u0442\u044c."
        ),
        "p3": (
            "\u041f\u043e\u0441\u0442\u0440\u0430\u0436\u0434\u0430\u043b"
            "\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u043f\u043e"
            "\u0432\u0438\u043d\u043d\u0430 \u0434\u043e\u043a\u043b\u0430"
            "\u0441\u0442\u0438 \u0440\u043e\u0437\u0443\u043c\u043d\u0438"
            "\u0445 \u0437\u0443\u0441\u0438\u043b\u044c \u0434\u043b\u044f "
            "\u043f\u043e\u043c\u2019\u044f\u043a\u0448\u0435\u043d\u043d"
            "\u044f \u043d\u0430\u0441\u043b\u0456\u0434\u043a\u0456\u0432 "
            "\u041f\u043e\u0434\u0456\u0457 \u0444\u043e\u0440\u0441-"
            "\u043c\u0430\u0436\u043e\u0440\u0443 \u0442\u0430 "
            "\u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d"
            "\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f "
            "\u0441\u0432\u043e\u0457\u0445 \u0437\u043e\u0431\u043e\u0432"
            "\u2019\u044f\u0437\u0430\u043d\u044c \u044f\u043a\u043e\u043c"
            "\u043e\u0433\u0430 \u0448\u0432\u0438\u0434\u0448\u0435."
        ),
        "p4": (
            "\u041f\u0456\u0434 \u0447\u0430\u0441 \u041f\u043e\u0434\u0456"
            "\u0457 \u0444\u043e\u0440\u0441-\u043c\u0430\u0436\u043e\u0440"
            "\u0443 \u0437\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u0430"
            "\u043d\u043d\u044f \u043f\u043e\u0441\u0442\u0440\u0430\u0436"
            "\u0434\u0430\u043b\u043e\u0457 \u0441\u0442\u043e\u0440\u043e"
            "\u043d\u0438 \u043f\u0440\u0438\u0437\u0443\u043f\u0438\u043d"
            "\u044f\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0430"
            "\u0441 \u0442\u0440\u0438\u0432\u0430\u043d\u043d\u044f "
            "\u043f\u043e\u0434\u0456\u0457."
        ),
        "p5": (
            "\u042f\u043a\u0449\u043e \u041f\u043e\u0434\u0456\u044f "
            "\u0444\u043e\u0440\u0441-\u043c\u0430\u0436\u043e\u0440\u0443 "
            "\u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0443\u0454\u0442"
            "\u044c\u0441\u044f \u043f\u043e\u043d\u0430\u0434 90 "
            "\u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0438"
            "\u0445 \u0434\u043d\u0456\u0432, \u0431\u0443\u0434\u044c-"
            "\u044f\u043a\u0430 \u0437\u0456 \u0441\u0442\u043e\u0440\u0456"
            "\u043d \u043c\u043e\u0436\u0435 \u043f\u0440\u0438\u043f\u0438"
            "\u043d\u0438\u0442\u0438 \u0443\u0433\u043e\u0434\u0443, "
            "\u043d\u0430\u0434\u0456\u0441\u043b\u0430\u0432\u0448\u0438 "
            "\u043f\u0438\u0441\u044c\u043c\u043e\u0432\u0435 "
            "\u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d"
            "\u043d\u044f \u0456\u043d\u0448\u0456\u0439 \u0441\u0442\u043e"
            "\u0440\u043e\u043d\u0456. \u0423 \u0440\u0430\u0437\u0456 "
            "\u0442\u0430\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u043f"
            "\u0438\u043d\u0435\u043d\u043d\u044f \u043f\u043b\u0430\u0442"
            "\u043d\u0456 \u043f\u0456\u0434\u043f\u0438\u0441\u043d\u0438"
            "\u043a\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u044e\u0442"
            "\u044c \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0456\u0439"
            "\u043d\u0435 \u0432\u0456\u0434\u0448\u043a\u043e\u0434\u0443"
            "\u0432\u0430\u043d\u043d\u044f \u0437\u0430 \u0437\u0430\u043b"
            "\u0438\u0448\u043e\u043a \u043f\u0435\u0440\u0435\u0434\u043f"
            "\u043b\u0430\u0447\u0435\u043d\u043e\u0433\u043e \u043f\u0435"
            "\u0440\u0456\u043e\u0434\u0443 \u043f\u0456\u0434\u043f\u0438"
            "\u0441\u043a\u0438."
        ),
    },
}

# ================================================================
# Story 13.2  Cure period before termination
# ================================================================
CURE_PERIOD = {
    "en": (
        "For curable breaches, we will notify you of the breach in writing "
        "and give you 14 days to remedy it. If the breach is not remedied "
        "within 14 days, we may then terminate your access to the Service. "
        "This cure period does not apply to breaches involving: illegal "
        "activity, fraud, harm to other users, or repeated violations of "
        "these Terms."
    ),
    "pl": (
        "W przypadku narusze\u0144 mo\u017cliwych do naprawienia "
        "powiadomimy Ci\u0119 na pi\u015bmie o naruszeniu i damy Ci 14 dni "
        "na jego naprawienie. Je\u015bli naruszenie nie zostanie naprawione "
        "w ci\u0105gu 14 dni, mo\u017cemy w\u00f3wczas wypowiedzie\u0107 "
        "Tw\u00f3j dost\u0119p do Us\u0142ugi. Ten okres naprawczy nie "
        "dotyczy narusze\u0144 obejmuj\u0105cych: dzia\u0142alno\u015b\u0107 "
        "nielegaln\u0105, oszustwo, szkod\u0119 wyrz\u0105dzon\u0105 innym "
        "u\u017cytkownikom lub powtarzaj\u0105ce si\u0119 naruszenia "
        "niniejszych Warunk\u00f3w."
    ),
    "de": (
        "Bei behebbaren Verst\u00f6\u00dfen werden wir Sie schriftlich "
        "\u00fcber den Versto\u00df informieren und Ihnen 14 Tage Zeit "
        "geben, diesen zu beheben. Wird der Versto\u00df nicht innerhalb "
        "von 14 Tagen behoben, k\u00f6nnen wir Ihren Zugang zum Dienst "
        "beenden. Diese Nachbesserungsfrist gilt nicht f\u00fcr "
        "Verst\u00f6\u00dfe, die Folgendes betreffen: illegale "
        "Aktivit\u00e4ten, Betrug, Schaden f\u00fcr andere Nutzer oder "
        "wiederholte Verst\u00f6\u00dfe gegen diese Bedingungen."
    ),
    "es": (
        "Para infracciones subsanables, le notificaremos por escrito de "
        "la infracci\u00f3n y le daremos 14 d\u00edas para remediarla. Si "
        "la infracci\u00f3n no se remedia en 14 d\u00edas, podremos "
        "rescindir su acceso al Servicio. Este per\u00edodo de "
        "subsanaci\u00f3n no se aplica a infracciones que impliquen: "
        "actividad ilegal, fraude, da\u00f1o a otros usuarios o "
        "violaciones reiteradas de estos T\u00e9rminos."
    ),
    "fr": (
        "Pour les manquements rem\u00e9diables, nous vous notifierons par "
        "\u00e9crit du manquement et vous accorderons 14 jours pour y "
        "rem\u00e9dier. Si le manquement n\u2019est pas corrig\u00e9 dans "
        "les 14 jours, nous pourrons alors r\u00e9silier votre acc\u00e8s "
        "au Service. Ce d\u00e9lai de correction ne s\u2019applique pas aux "
        "manquements impliquant : une activit\u00e9 ill\u00e9gale, une "
        "fraude, un pr\u00e9judice caus\u00e9 \u00e0 d\u2019autres "
        "utilisateurs ou des violations r\u00e9p\u00e9t\u00e9es des "
        "pr\u00e9sentes Conditions."
    ),
    "ja": (
        "\u6539\u5584\u53ef\u80fd\u306a\u9055\u53cd\u306b\u3064\u3044"
        "\u3066\u3001\u5f53\u793e\u306f\u66f8\u9762\u306b\u3066\u9055"
        "\u53cd\u3092\u901a\u77e5\u3057\u300114\u65e5\u9593\u306e\u6539"
        "\u5584\u671f\u9593\u3092\u8a2d\u3051\u307e\u3059\u300214\u65e5"
        "\u4ee5\u5185\u306b\u9055\u53cd\u304c\u6539\u5584\u3055\u308c"
        "\u306a\u3044\u5834\u5408\u3001\u5f53\u793e\u306f\u304a\u5ba2"
        "\u69d8\u306e\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u30a2\u30af"
        "\u30bb\u30b9\u3092\u7d42\u4e86\u3059\u308b\u3053\u3068\u304c"
        "\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6539\u5584\u671f"
        "\u9593\u306f\u4ee5\u4e0b\u306e\u9055\u53cd\u306b\u306f\u9069"
        "\u7528\u3055\u308c\u307e\u305b\u3093\uff1a\u9055\u6cd5\u884c"
        "\u70ba\u3001\u8a50\u6b3a\u3001\u4ed6\u306e\u30e6\u30fc\u30b6"
        "\u30fc\u3078\u306e\u5371\u5bb3\u3001\u307e\u305f\u306f\u672c"
        "\u898f\u7d04\u306e\u7e70\u308a\u8fd4\u3057\u306e\u9055\u53cd\u3002"
    ),
    "zh": (
        "\u5bf9\u4e8e\u53ef\u8865\u6551\u7684\u8fdd\u7ea6\u884c\u4e3a"
        "\uff0c\u6211\u4eec\u5c06\u4ee5\u4e66\u9762\u65b9\u5f0f\u901a"
        "\u77e5\u60a8\u8fdd\u7ea6\u60c5\u51b5\uff0c\u5e76\u7ed9\u4e88"
        "\u60a814\u5929\u7684\u65f6\u95f4\u8fdb\u884c\u8865\u6551\u3002"
        "\u5982\u679c\u8fdd\u7ea6\u884c\u4e3a\u572814\u5929\u5185\u672a"
        "\u5f97\u5230\u8865\u6551\uff0c\u6211\u4eec\u53ef\u4ee5\u7ec8"
        "\u6b62\u60a8\u5bf9\u670d\u52a1\u7684\u8bbf\u95ee\u3002\u6b64"
        "\u8865\u6551\u671f\u4e0d\u9002\u7528\u4e8e\u6d89\u53ca\u4ee5"
        "\u4e0b\u60c5\u51b5\u7684\u8fdd\u7ea6\u884c\u4e3a\uff1a\u975e"
        "\u6cd5\u6d3b\u52a8\u3001\u6b3a\u8bc8\u3001\u5bf9\u5176\u4ed6"
        "\u7528\u6237\u7684\u4f24\u5bb3\u6216\u53cd\u590d\u8fdd\u53cd"
        "\u672c\u6761\u6b3e\u3002"
    ),
    "ar": (
        "\u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0645"
        "\u062e\u0627\u0644\u0641\u0627\u062a \u0627\u0644\u0642\u0627"
        "\u0628\u0644\u0629 \u0644\u0644\u0625\u0635\u0644\u0627\u062d"
        "\u060c \u0633\u0646\u062e\u0637\u0631\u0643 \u0643\u062a\u0627"
        "\u0628\u064a\u0627\u064b \u0628\u0627\u0644\u0645\u062e\u0627"
        "\u0644\u0641\u0629 \u0648\u0646\u0645\u0646\u062d\u0643 14 "
        "\u064a\u0648\u0645\u0627\u064b \u0644\u0645\u0639\u0627\u0644"
        "\u062c\u062a\u0647\u0627. \u0625\u0630\u0627 \u0644\u0645 \u064a"
        "\u062a\u0645 \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644"
        "\u0645\u062e\u0627\u0644\u0641\u0629 \u062e\u0644\u0627\u0644 "
        "14 \u064a\u0648\u0645\u0627\u064b\u060c \u0641\u064a\u062c\u0648"
        "\u0632 \u0644\u0646\u0627 \u062d\u064a\u0646\u0626\u0630 "
        "\u0625\u0646\u0647\u0627\u0621 \u0648\u0635\u0648\u0644\u0643 "
        "\u0625\u0644\u0649 \u0627\u0644\u062e\u062f\u0645\u0629. \u0644"
        "\u0627 \u062a\u0646\u0637\u0628\u0642 \u0641\u062a\u0631\u0629 "
        "\u0627\u0644\u0625\u0635\u0644\u0627\u062d \u0647\u0630\u0647 "
        "\u0639\u0644\u0649 \u0627\u0644\u0645\u062e\u0627\u0644\u0641"
        "\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0634\u0645\u0644: "
        "\u0627\u0644\u0646\u0634\u0627\u0637 \u063a\u064a\u0631 "
        "\u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u060c \u0623"
        "\u0648 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0644\u060c "
        "\u0623\u0648 \u0627\u0644\u0625\u0636\u0631\u0627\u0631 "
        "\u0628\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 "
        "\u0622\u062e\u0631\u064a\u0646\u060c \u0623\u0648 \u0627\u0644"
        "\u0627\u0646\u062a\u0647\u0627\u0643\u0627\u062a \u0627\u0644"
        "\u0645\u062a\u0643\u0631\u0631\u0629 \u0644\u0647\u0630\u0647 "
        "\u0627\u0644\u0634\u0631\u0648\u0637."
    ),
    "uk": (
        "\u0414\u043b\u044f \u043f\u043e\u0440\u0443\u0448\u0435\u043d"
        "\u044c, \u044f\u043a\u0456 \u043c\u043e\u0436\u043d\u0430 "
        "\u0432\u0438\u043f\u0440\u0430\u0432\u0438\u0442\u0438, \u043c"
        "\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u043c"
        "\u043e \u0432\u0430\u0441 \u043f\u0440\u043e \u043f\u043e\u0440"
        "\u0443\u0448\u0435\u043d\u043d\u044f \u0432 \u043f\u0438\u0441"
        "\u044c\u043c\u043e\u0432\u0456\u0439 \u0444\u043e\u0440\u043c"
        "\u0456 \u0442\u0430 \u043d\u0430\u0434\u0430\u043c\u043e \u0432"
        "\u0430\u043c 14 \u0434\u043d\u0456\u0432 \u0434\u043b\u044f "
        "\u0439\u043e\u0433\u043e \u0443\u0441\u0443\u043d\u0435\u043d"
        "\u043d\u044f. \u042f\u043a\u0449\u043e \u043f\u043e\u0440\u0443"
        "\u0448\u0435\u043d\u043d\u044f \u043d\u0435 \u0431\u0443\u0434"
        "\u0435 \u0443\u0441\u0443\u043d\u0443\u0442\u043e \u043f\u0440"
        "\u043e\u0442\u044f\u0433\u043e\u043c 14 \u0434\u043d\u0456\u0432"
        ", \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e "
        "\u043f\u0440\u0438\u043f\u0438\u043d\u0438\u0442\u0438 \u0432"
        "\u0430\u0448 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e "
        "\u0421\u0435\u0440\u0432\u0456\u0441\u0443. \u0426\u0435\u0439 "
        "\u043f\u0435\u0440\u0456\u043e\u0434 \u0432\u0438\u043f\u0440"
        "\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u0435 "
        "\u043f\u043e\u0448\u0438\u0440\u044e\u0454\u0442\u044c\u0441"
        "\u044f \u043d\u0430 \u043f\u043e\u0440\u0443\u0448\u0435\u043d"
        "\u043d\u044f, \u0449\u043e \u0432\u043a\u043b\u044e\u0447\u0430"
        "\u044e\u0442\u044c: \u043d\u0435\u0437\u0430\u043a\u043e\u043d"
        "\u043d\u0443 \u0434\u0456\u044f\u043b\u044c\u043d\u0456\u0441"
        "\u0442\u044c, \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442"
        "\u0432\u043e, \u0448\u043a\u043e\u0434\u0443 \u0456\u043d\u0448"
        "\u0438\u043c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432"
        "\u0430\u0447\u0430\u043c \u0430\u0431\u043e \u043f\u043e\u0432"
        "\u0442\u043e\u0440\u043d\u0456 \u043f\u043e\u0440\u0443\u0448"
        "\u0435\u043d\u043d\u044f \u0446\u0438\u0445 \u0423\u043c\u043e"
        "\u0432."
    ),
}

# ================================================================
# Story 13.4  Cooling-off waiver (CCR 2013 reg. 37)
# ================================================================
DISTANCE_SELLING_LI5 = {
    "en": (
        "<b>Cooling-off period</b> \u2014 under the Consumer Contracts "
        "Regulations 2013, you have a 14-day right to cancel distance "
        "contracts without giving any reason. When you initiate a purchase "
        "through the App Store, Apple presents the subscription terms "
        "including the start date and auto-renewal terms. By confirming "
        "the purchase (via Face ID, Touch ID, or passcode), you expressly "
        "consent to the immediate supply of digital content and "
        "acknowledge that you lose your 14-day cancellation right once "
        "the digital content is made available to you."
    ),
    "pl": (
        "<b>Okres odst\u0105pienia</b> \u2014 na mocy Consumer Contracts "
        "Regulations 2013 przys\u0142uguje Ci 14-dniowe prawo do "
        "odst\u0105pienia od umowy zawartej na odleg\u0142o\u015b\u0107 "
        "bez podania przyczyny. Po zainicjowaniu zakupu w App Store, "
        "Apple przedstawia warunki subskrypcji. Potwierdzaj\u0105c zakup "
        "(przez Face ID, Touch ID lub kod), wyra\u017casz wyra\u017an\u0105 "
        "zgod\u0119 na natychmiastowe dostarczenie tre\u015bci cyfrowych "
        "i potwierdzasz utrat\u0119 prawa do odst\u0105pienia po "
        "udost\u0119pnieniu tre\u015bci."
    ),
    "de": (
        "<b>Widerrufsrecht</b> \u2014 gem\u00e4\u00df den Consumer "
        "Contracts Regulations 2013 haben Sie ein 14-t\u00e4giges "
        "Widerrufsrecht bei Fernabsatzvertr\u00e4gen. Wenn Sie einen Kauf "
        "im App Store einleiten, zeigt Apple die Abonnementbedingungen an. "
        "Mit der Kaufbest\u00e4tigung (per Face ID, Touch ID oder "
        "Passcode) stimmen Sie ausdr\u00fccklich der sofortigen "
        "Bereitstellung digitaler Inhalte zu und erkennen an, dass Sie Ihr "
        "14-t\u00e4giges Widerrufsrecht verlieren, sobald die Inhalte "
        "verf\u00fcgbar sind."
    ),
    "es": (
        "<b>Per\u00edodo de desistimiento</b> \u2014 seg\u00fan las "
        "Consumer Contracts Regulations 2013, usted tiene un derecho de "
        "desistimiento de 14 d\u00edas en contratos a distancia sin "
        "necesidad de justificaci\u00f3n. Al iniciar una compra en el "
        "App Store, Apple presenta los t\u00e9rminos de suscripci\u00f3n. "
        "Al confirmar la compra (mediante Face ID, Touch ID o "
        "c\u00f3digo), usted consiente expresamente al suministro "
        "inmediato del contenido digital y reconoce que pierde su derecho "
        "de desistimiento de 14 d\u00edas una vez que el contenido "
        "est\u00e9 disponible."
    ),
    "fr": (
        "<b>Droit de r\u00e9tractation</b> \u2014 en vertu des Consumer "
        "Contracts Regulations 2013, vous disposez d\u2019un droit de "
        "r\u00e9tractation de 14 jours pour les contrats \u00e0 distance "
        "sans avoir \u00e0 fournir de motif. Lorsque vous effectuez un "
        "achat via l\u2019App Store, Apple pr\u00e9sente les conditions "
        "d\u2019abonnement. En confirmant l\u2019achat (via Face ID, Touch "
        "ID ou code), vous consentez express\u00e9ment \u00e0 la "
        "fourniture imm\u00e9diate du contenu num\u00e9rique et "
        "reconnaissez perdre votre droit de r\u00e9tractation de 14 jours "
        "d\u00e8s que le contenu est mis \u00e0 votre disposition."
    ),
    "ja": (
        "<b>\u30af\u30fc\u30ea\u30f3\u30b0\u30aa\u30d5\u671f\u9593</b> "
        "\u2014 Consumer Contracts Regulations 2013\u306b\u57fa\u3065\u304d"
        "\u3001\u304a\u5ba2\u69d8\u306f\u7406\u7531\u3092\u554f\u308f\u305a"
        "14\u65e5\u9593\u306e\u901a\u4fe1\u8ca9\u58f2\u5951\u7d04\u89e3\u7d04"
        "\u6a29\u3092\u6709\u3057\u307e\u3059\u3002App Store\u3067\u8cfc\u5165"
        "\u3092\u958b\u59cb\u3059\u308b\u3068\u3001Apple\u304c\u30b5\u30d6"
        "\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u6761\u4ef6\u3092\u63d0"
        "\u793a\u3057\u307e\u3059\u3002\u8cfc\u5165\u3092\u78ba\u8a8d\uff08"
        "Face ID\u3001Touch ID\u3001\u307e\u305f\u306f\u30d1\u30b9\u30b3"
        "\u30fc\u30c9\u3067\uff09\u3059\u308b\u3053\u3068\u306b\u3088\u308a"
        "\u3001\u30c7\u30b8\u30bf\u30eb\u30b3\u30f3\u30c6\u30f3\u30c4\u306e"
        "\u5373\u6642\u63d0\u4f9b\u306b\u660e\u793a\u7684\u306b\u540c\u610f"
        "\u3057\u3001\u30c7\u30b8\u30bf\u30eb\u30b3\u30f3\u30c6\u30f3\u30c4"
        "\u304c\u5229\u7528\u53ef\u80fd\u306b\u306a\u3063\u305f\u6642\u70b9"
        "\u306714\u65e5\u9593\u306e\u89e3\u7d04\u6a29\u3092\u5931\u3046"
        "\u3053\u3068\u3092\u627f\u8a8d\u3057\u307e\u3059\u3002"
    ),
    "zh": (
        "<b>\u51b7\u9759\u671f</b> \u2014 \u6839\u636e\u300a2013\u5e74"
        "\u6d88\u8d39\u8005\u5408\u540c\u6761\u4f8b\u300b\uff0c\u60a8"
        "\u4eab\u670914\u5929\u7684\u8fdc\u7a0b\u5408\u540c\u65e0\u7406"
        "\u7531\u53d6\u6d88\u6743\u3002\u5f53\u60a8\u5728App Store\u53d1"
        "\u8d77\u8d2d\u4e70\u65f6\uff0cApple\u4f1a\u663e\u793a\u8ba2\u9605"
        "\u6761\u6b3e\u3002\u901a\u8fc7\u786e\u8ba4\u8d2d\u4e70\uff08"
        "\u901a\u8fc7Face ID\u3001Touch ID\u6216\u5bc6\u7801\uff09\uff0c"
        "\u60a8\u660e\u786e\u540c\u610f\u7acb\u5373\u63d0\u4f9b\u6570\u5b57"
        "\u5185\u5bb9\uff0c\u5e76\u627f\u8ba4\u4e00\u65e6\u6570\u5b57"
        "\u5185\u5bb9\u53ef\u4f9b\u4f7f\u7528\uff0c\u60a8\u5c06\u5931"
        "\u533b14\u5929\u7684\u53d6\u6d88\u6743\u3002"
    ),
    "ar": (
        "<b>\u0641\u062a\u0631\u0629 \u0627\u0644\u062a\u0631\u0627\u062c"
        "\u0639</b> \u2014 \u0628\u0645\u0648\u062c\u0628 \u0644\u0648"
        "\u0627\u0626\u062d \u0639\u0642\u0648\u062f \u0627\u0644\u0645"
        "\u0633\u062a\u0647\u0644\u0643 2013\u060c \u064a\u062d\u0642 "
        "\u0644\u0643 \u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0639"
        "\u0642\u0648\u062f \u0639\u0646 \u0628\u064f\u0639\u062f \u062e"
        "\u0644\u0627\u0644 14 \u064a\u0648\u0645\u0627\u064b \u062f\u0648"
        "\u0646 \u0625\u0628\u062f\u0627\u0621 \u0623\u064a \u0633\u0628"
        "\u0628. \u0639\u0646\u062f \u0628\u062f\u0621 \u0639\u0645\u0644"
        "\u064a\u0629 \u0634\u0631\u0627\u0621 \u0639\u0628\u0631 App "
        "Store\u060c \u062a\u0639\u0631\u0636 Apple \u0634\u0631\u0648"
        "\u0637 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643. "
        "\u0628\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0634\u0631"
        "\u0627\u0621 (\u0639\u0628\u0631 Face ID \u0623\u0648 Touch ID "
        "\u0623\u0648 \u0631\u0645\u0632 \u0627\u0644\u0645\u0631\u0648"
        "\u0631)\u060c \u0641\u0625\u0646\u0643 \u062a\u0648\u0627\u0641"
        "\u0642 \u0635\u0631\u0627\u062d\u0629 \u0639\u0644\u0649 "
        "\u0627\u0644\u062a\u0632\u0648\u064a\u062f \u0627\u0644\u0641"
        "\u0648\u0631\u064a \u0628\u0627\u0644\u0645\u062d\u062a\u0648"
        "\u0649 \u0627\u0644\u0631\u0642\u0645\u064a \u0648\u062a\u0642"
        "\u0631 \u0628\u0623\u0646\u0643 \u062a\u0641\u0642\u062f \u062d"
        "\u0642\u0643 \u0641\u064a \u0627\u0644\u062a\u0631\u0627\u062c"
        "\u0639 \u0644\u0645\u062f\u0629 14 \u064a\u0648\u0645\u0627\u064b "
        "\u0628\u0645\u062c\u0631\u062f \u0625\u062a\u0627\u062d\u0629 "
        "\u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0631"
        "\u0642\u0645\u064a \u0644\u0643."
    ),
    "uk": (
        "<b>\u041f\u0435\u0440\u0456\u043e\u0434 \u0432\u0456\u0434\u043c"
        "\u043e\u0432\u0438</b> \u2014 \u0432\u0456\u0434\u043f\u043e"
        "\u0432\u0456\u0434\u043d\u043e \u0434\u043e Consumer Contracts "
        "Regulations 2013, \u0432\u0438 \u043c\u0430\u0454\u0442\u0435 "
        "14-\u0434\u0435\u043d\u043d\u0435 \u043f\u0440\u0430\u0432\u043e "
        "\u043d\u0430 \u0432\u0456\u0434\u043c\u043e\u0432\u0443 \u0432"
        "\u0456\u0434 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0456"
        "\u0439\u043d\u0438\u0445 \u0434\u043e\u0433\u043e\u0432\u043e"
        "\u0440\u0456\u0432 \u0431\u0435\u0437 \u0437\u0430\u0437\u043d"
        "\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u0440\u0438\u0447"
        "\u0438\u043d\u0438. \u041a\u043e\u043b\u0438 \u0432\u0438 "
        "\u0456\u043d\u0456\u0446\u0456\u044e\u0454\u0442\u0435 \u043f"
        "\u043e\u043a\u0443\u043f\u043a\u0443 \u0447\u0435\u0440\u0435"
        "\u0437 App Store, Apple \u043f\u0440\u0435\u0434\u0441\u0442"
        "\u0430\u0432\u043b\u044f\u0454 \u0443\u043c\u043e\u0432\u0438 "
        "\u043f\u0456\u0434\u043f\u0438\u0441\u043a\u0438. "
        "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443"
        "\u044e\u0447\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 "
        "(\u0447\u0435\u0440\u0435\u0437 Face ID, Touch ID \u0430\u0431"
        "\u043e \u043a\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f"
        "\u0443), \u0432\u0438 \u044f\u0432\u043d\u043e \u043f\u043e\u0433"
        "\u043e\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044f \u043d"
        "\u0430 \u043d\u0435\u0433\u0430\u0439\u043d\u0435 \u043d\u0430"
        "\u0434\u0430\u043d\u043d\u044f \u0446\u0438\u0444\u0440\u043e"
        "\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d"
        "\u0442\u0443 \u0442\u0430 \u0432\u0438\u0437\u043d\u0430\u0454"
        "\u0442\u0435, \u0449\u043e \u0432\u0442\u0440\u0430\u0447\u0430"
        "\u0454\u0442\u0435 \u0441\u0432\u043e\u0454 14-\u0434\u0435\u043d"
        "\u043d\u0435 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 "
        "\u0432\u0456\u0434\u043c\u043e\u0432\u0443 \u043f\u0456\u0441"
        "\u043b\u044f \u0442\u043e\u0433\u043e, \u044f\u043a \u0446\u0438"
        "\u0444\u0440\u043e\u0432\u0438\u0439 \u043a\u043e\u043d\u0442"
        "\u0435\u043d\u0442 \u0441\u0442\u0430\u0454 \u0434\u043e\u0441"
        "\u0442\u0443\u043f\u043d\u0438\u043c."
    ),
}

DISTANCE_SELLING_LI5A = {
    "en": (
        "<b>Consent confirmation</b> \u2014 we will send a confirmation "
        "of your consent to immediate performance via the App Store "
        "receipt delivered to your Apple ID email address, which "
        "constitutes a durable medium under CCR 2013 reg. 16."
    ),
    "pl": (
        "<b>Potwierdzenie zgody</b> \u2014 potwierdzenie Twojej zgody na "
        "natychmiastowe wykonanie zostanie wys\u0142ane za po\u015brednictwem "
        "paragonu App Store dostarczonego na adres e-mail Twojego Apple ID, "
        "kt\u00f3ry stanowi trwa\u0142y no\u015bnik zgodnie z CCR 2013 reg. 16."
    ),
    "de": (
        "<b>Einwilligungsbest\u00e4tigung</b> \u2014 wir senden eine "
        "Best\u00e4tigung Ihrer Einwilligung zur sofortigen Ausf\u00fchrung "
        "\u00fcber den App-Store-Beleg, der an Ihre Apple-ID-E-Mail-Adresse "
        "gesendet wird und einen dauerhaften Datentr\u00e4ger gem\u00e4\u00df "
        "CCR 2013 Reg. 16 darstellt."
    ),
    "es": (
        "<b>Confirmaci\u00f3n de consentimiento</b> \u2014 enviaremos una "
        "confirmaci\u00f3n de su consentimiento para el inicio inmediato a "
        "trav\u00e9s del recibo del App Store enviado a la direcci\u00f3n "
        "de correo de su Apple ID, que constituye un soporte duradero "
        "seg\u00fan CCR 2013 reg. 16."
    ),
    "fr": (
        "<b>Confirmation du consentement</b> \u2014 nous enverrons une "
        "confirmation de votre consentement \u00e0 l\u2019ex\u00e9cution "
        "imm\u00e9diate via le re\u00e7u App Store envoy\u00e9 \u00e0 "
        "l\u2019adresse e-mail de votre identifiant Apple, qui constitue "
        "un support durable au sens du CCR 2013 reg. 16."
    ),
    "ja": (
        "<b>\u540c\u610f\u306e\u78ba\u8a8d</b> \u2014 Apple ID\u306e"
        "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u914d\u4fe1"
        "\u3055\u308c\u308bApp Store\u30ec\u30b7\u30fc\u30c8\u3092\u901a"
        "\u3058\u3066\u3001\u5373\u6642\u5c65\u884c\u3078\u306e\u540c"
        "\u610f\u306e\u78ba\u8a8d\u3092\u9001\u4fe1\u3057\u307e\u3059"
        "\u3002\u3053\u308c\u306fCCR 2013 reg. 16\u306b\u57fa\u3065\u304f"
        "\u8010\u4e45\u6027\u306e\u3042\u308b\u5a92\u4f53\u306b\u8a72\u5f53"
        "\u3057\u307e\u3059\u3002"
    ),
    "zh": (
        "<b>\u540c\u610f\u786e\u8ba4</b> \u2014 \u6211\u4eec\u5c06\u901a"
        "\u8fc7\u53d1\u9001\u5230\u60a8Apple ID\u7535\u5b50\u90ae\u4ef6"
        "\u5730\u5740\u7684App Store\u6536\u636e\u786e\u8ba4\u60a8\u5bf9"
        "\u7acb\u5373\u5c65\u884c\u7684\u540c\u610f\uff0c\u8be5\u6536"
        "\u636e\u6784\u6210CCR 2013\u7b2c16\u6761\u89c4\u5b9a\u7684\u6301"
        "\u4e45\u5a92\u4ecb\u3002"
    ),
    "ar": (
        "<b>\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0645\u0648\u0627"
        "\u0641\u0642\u0629</b> \u2014 \u0633\u0646\u0631\u0633\u0644 "
        "\u062a\u0623\u0643\u064a\u062f\u0627\u064b \u0644\u0645\u0648"
        "\u0627\u0641\u0642\u062a\u0643 \u0639\u0644\u0649 \u0627\u0644"
        "\u0623\u062f\u0627\u0621 \u0627\u0644\u0641\u0648\u0631\u064a "
        "\u0639\u0628\u0631 \u0625\u064a\u0635\u0627\u0644 App Store "
        "\u0627\u0644\u0645\u0631\u0633\u0644 \u0625\u0644\u0649 \u0639"
        "\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064a\u062f "
        "\u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a "
        "\u0644\u0645\u0639\u0631\u0641 Apple \u0627\u0644\u062e\u0627"
        "\u0635 \u0628\u0643\u060c \u0648\u0627\u0644\u0630\u064a "
        "\u064a\u0634\u0643\u0644 \u0648\u0633\u064a\u0644\u0629 "
        "\u062f\u0627\u0626\u0645\u0629 \u0628\u0645\u0648\u062c\u0628 "
        "CCR 2013 \u0627\u0644\u0644\u0627\u0626\u062d\u0629 16."
    ),
    "uk": (
        "<b>\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435"
        "\u043d\u043d\u044f \u0437\u0433\u043e\u0434\u0438</b> \u2014 "
        "\u043c\u0438 \u043d\u0430\u0434\u0456\u0448\u043b\u0435\u043c\u043e "
        "\u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d"
        "\u043d\u044f \u0432\u0430\u0448\u043e\u0457 \u0437\u0433\u043e\u0434"
        "\u0438 \u043d\u0430 \u043d\u0435\u0433\u0430\u0439\u043d\u0435 "
        "\u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0447\u0435"
        "\u0440\u0435\u0437 \u043a\u0432\u0438\u0442\u0430\u043d\u0446\u0456"
        "\u044e App Store, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435"
        "\u043d\u0443 \u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440"
        "\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 "
        "\u0432\u0430\u0448\u043e\u0433\u043e Apple ID, \u044f\u043a\u0430 "
        "\u0454 \u0434\u043e\u0432\u0433\u043e\u0432\u0456\u0447\u043d\u0438"
        "\u043c \u043d\u043e\u0441\u0456\u0454\u043c \u0432\u0456\u0434"
        "\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e CCR 2013 "
        "\u0440\u0435\u0433. 16."
    ),
}

# ================================================================
# Story 13.5  Convert ALL-CAPS to plain language
# ================================================================
GOVERNING_LAW1 = {
    "en": (
        "These Terms and any dispute or claim arising out of or in "
        "connection with them or their subject matter or formation "
        "(including non-contractual disputes or claims) shall be "
        "governed by and construed in accordance with the "
        "<b>laws of England and Wales</b>."
    ),
    "pl": (
        "Niniejsze Warunki oraz wszelkie spory lub roszczenia wynikaj\u0105ce "
        "z nich lub z nimi zwi\u0105zane (w tym spory lub roszczenia "
        "pozaumowne) podlegaj\u0105 <b>prawu Anglii i Walii</b> i zgodnie "
        "z nim s\u0105 interpretowane."
    ),
    "de": (
        "Diese Bedingungen und alle Streitigkeiten oder Anspr\u00fcche, die "
        "sich aus oder im Zusammenhang mit ihnen ergeben (einschlie\u00dflich "
        "au\u00dfervertraglicher Streitigkeiten oder Anspr\u00fcche), "
        "unterliegen dem <b>Recht von England und Wales</b> und werden "
        "entsprechend ausgelegt."
    ),
    "es": (
        "Estos T\u00e9rminos y cualquier disputa o reclamaci\u00f3n que surja "
        "de ellos o en relaci\u00f3n con ellos (incluidas las disputas o "
        "reclamaciones extracontractuales) se regir\u00e1n e interpretar\u00e1n "
        "de acuerdo con las <b>leyes de Inglaterra y Gales</b>."
    ),
    "fr": (
        "Les pr\u00e9sentes Conditions et tout litige ou r\u00e9clamation "
        "d\u00e9coulant de ou en relation avec elles (y compris les litiges "
        "ou r\u00e9clamations extracontractuels) seront r\u00e9gis et "
        "interpr\u00e9t\u00e9s conform\u00e9ment au <b>droit de l\u2019Angleterre "
        "et du Pays de Galles</b>."
    ),
    "ja": (
        "\u672c\u898f\u7d04\u304a\u3088\u3073\u305d\u308c\u306b\u8d77\u56e0"
        "\u3059\u308b\u307e\u305f\u306f\u95a2\u9023\u3059\u308b\u3059\u3079"
        "\u3066\u306e\u7d1b\u4e89\u307e\u305f\u306f\u8acb\u6c42\uff08\u5951"
        "\u7d04\u5916\u306e\u7d1b\u4e89\u307e\u305f\u306f\u8acb\u6c42\u3092"
        "\u542b\u3080\uff09\u306f\u3001<b>\u30a4\u30f3\u30b0\u30e9\u30f3"
        "\u30c9\u304a\u3088\u3073\u30a6\u30a7\u30fc\u30eb\u30ba\u306e\u6cd5"
        "\u5f8b</b>\u306b\u6e96\u62e0\u3057\u3001\u305d\u308c\u306b\u5f93"
        "\u3063\u3066\u89e3\u91c8\u3055\u308c\u308b\u3082\u306e\u3068\u3057"
        "\u307e\u3059\u3002"
    ),
    "zh": (
        "\u672c\u6761\u6b3e\u4ee5\u53ca\u7531\u6b64\u4ea7\u751f\u6216\u4e0e"
        "\u4e4b\u76f8\u5173\u7684\u4efb\u4f55\u4e89\u8bae\u6216\u7d22\u8d54"
        "\uff08\u5305\u62ec\u5408\u540c\u5916\u7684\u4e89\u8bae\u6216\u7d22"
        "\u8d54\uff09\u5747\u53d7<b>\u82f1\u683c\u5170\u548c\u5a01\u5c14\u58eb"
        "\u6cd5\u5f8b</b>\u7ba1\u8f96\u5e76\u636e\u6b64\u89e3\u91ca\u3002"
    ),
    "ar": (
        "\u062a\u062e\u0636\u0639 \u0647\u0630\u0647 \u0627\u0644\u0634"
        "\u0631\u0648\u0637 \u0648\u0623\u064a \u0646\u0632\u0627\u0639 "
        "\u0623\u0648 \u0645\u0637\u0627\u0644\u0628\u0629 \u0646\u0627"
        "\u0634\u0626\u0629 \u0639\u0646\u0647\u0627 \u0623\u0648 "
        "\u0645\u062a\u0639\u0644\u0642\u0629 \u0628\u0647\u0627 (\u0628"
        "\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0646"
        "\u0632\u0627\u0639\u0627\u062a \u0623\u0648 \u0627\u0644\u0645"
        "\u0637\u0627\u0644\u0628\u0627\u062a \u063a\u064a\u0631 "
        "\u0627\u0644\u062a\u0639\u0627\u0642\u062f\u064a\u0629) "
        "<b>\u0644\u0642\u0648\u0627\u0646\u064a\u0646 \u0625\u0646\u062c"
        "\u0644\u062a\u0631\u0627 \u0648\u0648\u064a\u0644\u0632</b> "
        "\u0648\u062a\u064f\u0641\u0633\u064e\u0651\u0631 \u0648\u0641"
        "\u0642\u0627\u064b \u0644\u0647\u0627."
    ),
    "uk": (
        "\u0426\u0456 \u0423\u043c\u043e\u0432\u0438 \u0442\u0430 \u0431"
        "\u0443\u0434\u044c-\u044f\u043a\u0456 \u0441\u043f\u043e\u0440"
        "\u0438 \u0430\u0431\u043e \u043f\u0440\u0435\u0442\u0435\u043d"
        "\u0437\u0456\u0457, \u0449\u043e \u0432\u0438\u043d\u0438\u043a"
        "\u0430\u044e\u0442\u044c \u0437 \u043d\u0438\u0445 \u0430\u0431"
        "\u043e \u0443 \u0437\u0432\u2019\u044f\u0437\u043a\u0443 \u0437 "
        "\u043d\u0438\u043c\u0438 (\u0432\u043a\u043b\u044e\u0447\u0430"
        "\u044e\u0447\u0438 \u043f\u043e\u0437\u0430\u0434\u043e\u0433"
        "\u043e\u0432\u0456\u0440\u043d\u0456 \u0441\u043f\u043e\u0440"
        "\u0438 \u0430\u0431\u043e \u043f\u0440\u0435\u0442\u0435\u043d"
        "\u0437\u0456\u0457), \u0440\u0435\u0433\u0443\u043b\u044e\u044e"
        "\u0442\u044c\u0441\u044f \u0442\u0430 \u0442\u043b\u0443\u043c"
        "\u0430\u0447\u0430\u0442\u044c\u0441\u044f \u0432\u0456\u0434"
        "\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e "
        "<b>\u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0432\u0441"
        "\u0442\u0432\u0430 \u0410\u043d\u0433\u043b\u0456\u0457 \u0442"
        "\u0430 \u0423\u0435\u043b\u044c\u0441\u0443</b>."
    ),
}

US_ARBITRATION_P1 = {
    "en": (
        "You and Lumenshore agree that each may bring claims against the "
        "other only in your or its individual capacity and <b>not as a "
        "plaintiff or class member</b> in any purported class, "
        "consolidated, or representative action."
    ),
    "pl": (
        "Ty i Lumenshore zgadzacie si\u0119, \u017ce ka\u017cda ze stron "
        "mo\u017ce wnosi\u0107 roszczenia wobec drugiej wy\u0142\u0105cznie "
        "w indywidualnym charakterze, a <b>nie jako pow\u00f3d lub "
        "cz\u0142onek grupy</b> w jakimkolwiek domniemanym pozwie zbiorowym, "
        "skonsolidowanym lub przedstawicielskim."
    ),
    "de": (
        "Sie und Lumenshore vereinbaren, dass jede Partei Anspr\u00fcche "
        "gegen die andere nur in ihrer individuellen Eigenschaft geltend "
        "machen kann und <b>nicht als Kl\u00e4ger oder Mitglied einer "
        "Sammelklage</b> in einem angeblichen Sammel-, konsolidierten oder "
        "Vertretungsverfahren."
    ),
    "es": (
        "Usted y Lumenshore acuerdan que cada uno solo podr\u00e1 presentar "
        "reclamaciones contra el otro en su capacidad individual y <b>no "
        "como demandante o miembro de una clase</b> en ninguna supuesta "
        "acci\u00f3n colectiva, consolidada o representativa."
    ),
    "fr": (
        "Vous et Lumenshore convenez que chacun ne peut engager des "
        "r\u00e9clamations contre l\u2019autre qu\u2019\u00e0 titre "
        "individuel et <b>non en tant que plaignant ou membre d\u2019une "
        "classe</b> dans toute action collective, consolid\u00e9e ou "
        "repr\u00e9sentative pr\u00e9sum\u00e9e."
    ),
    "ja": (
        "\u304a\u5ba2\u69d8\u3068Lumenshore\u306f\u3001\u305d\u308c\u305e"
        "\u308c\u304c\u76f8\u624b\u65b9\u306b\u5bfe\u3059\u308b\u8acb\u6c42"
        "\u3092\u500b\u4eba\u306e\u7acb\u5834\u3067\u306e\u307f\u63d0\u8d77"
        "\u3067\u304d\u3001\u3044\u304b\u306a\u308b\u96c6\u56e3\u8a34\u8a1f"
        "\u3001\u7d71\u5408\u8a34\u8a1f\u3001\u307e\u305f\u306f\u4ee3\u8868"
        "\u8a34\u8a1f\u306b\u304a\u3044\u3066\u3082<b>\u539f\u544a\u307e"
        "\u305f\u306f\u30af\u30e9\u30b9\u30e1\u30f3\u30d0\u30fc\u3068\u3057"
        "\u3066\u3067\u306f\u306a\u3044</b>\u3053\u3068\u306b\u540c\u610f"
        "\u3057\u307e\u3059\u3002"
    ),
    "zh": (
        "\u60a8\u548cLumenshore\u540c\u610f\uff0c\u53cc\u65b9\u53ea\u80fd"
        "\u4ee5\u4e2a\u4eba\u8eab\u4efd\u5bf9\u53e6\u4e00\u65b9\u63d0\u51fa"
        "\u7d22\u8d54\uff0c\u800c<b>\u4e0d\u80fd\u4f5c\u4e3a\u4efb\u4f55"
        "\u6240\u8c13\u96c6\u4f53\u8bc9\u8bbc\u3001\u5408\u5e76\u8bc9\u8bbc"
        "\u6216\u4ee3\u8868\u8bc9\u8bbc\u4e2d\u7684\u539f\u544a\u6216\u96c6"
        "\u4f53\u6210\u5458</b>\u3002"
    ),
    "ar": (
        "\u062a\u0648\u0627\u0641\u0642 \u0623\u0646\u062a "
        "\u0648Lumenshore \u0639\u0644\u0649 \u0623\u0646 \u0643\u0644"
        "\u0627\u064b \u0645\u0646\u0643\u0645\u0627 \u0644\u0627 "
        "\u064a\u062c\u0648\u0632 \u0644\u0647 \u0631\u0641\u0639 "
        "\u062f\u0639\u0627\u0648\u0649 \u0636\u062f \u0627\u0644\u0622"
        "\u062e\u0631 \u0625\u0644\u0627 \u0628\u0635\u0641\u062a\u0647 "
        "\u0627\u0644\u0641\u0631\u062f\u064a\u0629 <b>\u0648\u0644\u064a"
        "\u0633 \u0643\u0645\u062f\u0639\u064d \u0623\u0648 \u0639\u0636"
        "\u0648 \u0641\u064a \u0645\u062c\u0645\u0648\u0639\u0629</b> "
        "\u0641\u064a \u0623\u064a \u062f\u0639\u0648\u0649 \u062c\u0645"
        "\u0627\u0639\u064a\u0629 \u0623\u0648 \u0645\u0648\u062d\u062f"
        "\u0629 \u0623\u0648 \u062a\u0645\u062b\u064a\u0644\u064a\u0629 "
        "\u0645\u0632\u0639\u0648\u0645\u0629."
    ),
    "uk": (
        "\u0412\u0438 \u0442\u0430 Lumenshore \u043f\u043e\u0433\u043e"
        "\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044c, \u0449\u043e "
        "\u043a\u043e\u0436\u0435\u043d \u043c\u043e\u0436\u0435 "
        "\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u043f\u0440"
        "\u0435\u0442\u0435\u043d\u0437\u0456\u0457 \u043f\u0440\u043e"
        "\u0442\u0438 \u0456\u043d\u0448\u043e\u0433\u043e \u043b\u0438"
        "\u0448\u0435 \u0432 \u0456\u043d\u0434\u0438\u0432\u0456\u0434"
        "\u0443\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u043f\u043e"
        "\u0440\u044f\u0434\u043a\u0443 \u0456 <b>\u043d\u0435 \u044f"
        "\u043a \u043f\u043e\u0437\u0438\u0432\u0430\u0447 \u0430\u0431"
        "\u043e \u0447\u043b\u0435\u043d \u0433\u0440\u0443\u043f\u0438"
        "</b> \u0432 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u043c"
        "\u0443 \u043f\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0443"
        "\u0432\u0430\u043d\u043e\u043c\u0443 \u043a\u043e\u043b\u0435"
        "\u043a\u0442\u0438\u0432\u043d\u043e\u043c\u0443, \u043a\u043e"
        "\u043d\u0441\u043e\u043b\u0456\u0434\u043e\u0432\u0430\u043d"
        "\u043e\u043c\u0443 \u0430\u0431\u043e \u043f\u0440\u0435\u0434"
        "\u0441\u0442\u0430\u0432\u043d\u0438\u0446\u044c\u043a\u043e"
        "\u043c\u0443 \u043f\u043e\u0437\u043e\u0432\u0456."
    ),
}

WARRANTY_DISCLAIMER_P1 = {
    "en": (
        "The Service is provided \"as is\" and \"as available\" without "
        "warranties of any kind, whether express or implied, including but "
        "not limited to implied warranties of merchantability, fitness for "
        "a particular purpose, non-infringement, accuracy, completeness, "
        "reliability, availability, timeliness, or security."
    ),
    "pl": (
        "Us\u0142uga jest \u015bwiadczona w stanie \u201etak, jak jest\u201d "
        "i \u201ew miar\u0119 dost\u0119pno\u015bci\u201d bez jakichkolwiek "
        "gwarancji, wyra\u017anych lub dorozumianych, w tym mi\u0119dzy "
        "innymi dorozumianych gwarancji przydatno\u015bci handlowej, "
        "przydatno\u015bci do okre\u015blonego celu, nienaruszalno\u015bci, "
        "dok\u0142adno\u015bci, kompletno\u015bci, niezawodno\u015bci, "
        "dost\u0119pno\u015bci, terminowo\u015bci lub bezpiecze\u0144stwa."
    ),
    "de": (
        "Der Dienst wird \u201ewie besehen\u201c und \u201ewie "
        "verf\u00fcgbar\u201c ohne Gew\u00e4hrleistungen jeglicher Art "
        "bereitgestellt, weder ausdr\u00fccklich noch stillschweigend, "
        "einschlie\u00dflich, aber nicht beschr\u00e4nkt auf, "
        "stillschweigende Gew\u00e4hrleistungen der Marktg\u00e4ngigkeit, "
        "Eignung f\u00fcr einen bestimmten Zweck, Nichtverletzung, "
        "Richtigkeit, Vollst\u00e4ndigkeit, Zuverl\u00e4ssigkeit, "
        "Verf\u00fcgbarkeit, Aktualit\u00e4t oder Sicherheit."
    ),
    "es": (
        "El Servicio se proporciona \"tal cual\" y \"seg\u00fan "
        "disponibilidad\" sin garant\u00edas de ning\u00fan tipo, ya sean "
        "expresas o impl\u00edcitas, incluidas, entre otras, las "
        "garant\u00edas impl\u00edcitas de comerciabilidad, idoneidad para "
        "un prop\u00f3sito particular, no infracci\u00f3n, exactitud, "
        "integridad, fiabilidad, disponibilidad, oportunidad o seguridad."
    ),
    "fr": (
        "Le Service est fourni \u00ab tel quel \u00bb et \u00ab selon "
        "disponibilit\u00e9 \u00bb sans garantie d\u2019aucune sorte, "
        "expresse ou implicite, y compris mais sans s\u2019y limiter les "
        "garanties implicites de qualit\u00e9 marchande, d\u2019ad\u00e9quation "
        "\u00e0 un usage particulier, de non-contrefa\u00e7on, "
        "d\u2019exactitude, d\u2019exhaustivit\u00e9, de fiabilit\u00e9, "
        "de disponibilit\u00e9, de ponctualit\u00e9 ou de s\u00e9curit\u00e9."
    ),
    "ja": (
        "\u672c\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u5546\u54c1\u6027\u3001"
        "\u7279\u5b9a\u76ee\u7684\u3078\u306e\u9069\u5408\u6027\u3001\u975e"
        "\u4fb5\u5bb3\u3001\u6b63\u78ba\u6027\u3001\u5b8c\u5168\u6027\u3001"
        "\u4fe1\u983c\u6027\u3001\u53ef\u7528\u6027\u3001\u9069\u6642\u6027"
        "\u3001\u307e\u305f\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e"
        "\u9ed9\u793a\u7684\u4fdd\u8a3c\u3092\u542b\u3080\u304c\u3053\u308c"
        "\u3089\u306b\u9650\u5b9a\u3055\u308c\u306a\u3044\u3001\u660e\u793a"
        "\u7684\u307e\u305f\u306f\u9ed9\u793a\u7684\u306a\u3044\u304b\u306a"
        "\u308b\u4fdd\u8a3c\u3082\u306a\u304f\u3001\u300c\u73fe\u72b6\u306e"
        "\u307e\u307e\u300d\u304a\u3088\u3073\u300c\u5229\u7528\u53ef\u80fd"
        "\u306a\u9650\u308a\u3067\u300d\u63d0\u4f9b\u3055\u308c\u307e\u3059"
        "\u3002"
    ),
    "zh": (
        "\u672c\u670d\u52a1\u4ee5\"\u73b0\u72b6\"\u548c\"\u53ef\u7528\""
        "\u7684\u57fa\u7840\u63d0\u4f9b\uff0c\u4e0d\u63d0\u4f9b\u4efb\u4f55"
        "\u5f62\u5f0f\u7684\u4fdd\u8bc1\uff0c\u65e0\u8bba\u662f\u660e\u793a"
        "\u7684\u8fd8\u662f\u6697\u793a\u7684\uff0c\u5305\u62ec\u4f46\u4e0d"
        "\u9650\u4e8e\u5bf9\u9002\u9500\u6027\u3001\u7279\u5b9a\u7528\u9014"
        "\u9002\u7528\u6027\u3001\u4e0d\u4fb5\u6743\u3001\u51c6\u786e\u6027"
        "\u3001\u5b8c\u6574\u6027\u3001\u53ef\u9760\u6027\u3001\u53ef\u7528"
        "\u6027\u3001\u53ca\u65f6\u6027\u6216\u5b89\u5168\u6027\u7684\u6697"
        "\u793a\u4fdd\u8bc1\u3002"
    ),
    "ar": (
        "\u064a\u062a\u0645 \u062a\u0642\u062f\u064a\u0645 \u0627\u0644"
        "\u062e\u062f\u0645\u0629 \"\u0643\u0645\u0627 \u0647\u064a\" "
        "\u0648\"\u062d\u0633\u0628 \u0627\u0644\u062a\u0648\u0641\u0631\" "
        "\u062f\u0648\u0646 \u0623\u064a \u0636\u0645\u0627\u0646\u0627\u062a "
        "\u0645\u0646 \u0623\u064a \u0646\u0648\u0639\u060c \u0633\u0648\u0627"
        "\u0621 \u0635\u0631\u064a\u062d\u0629 \u0623\u0648 \u0636\u0645"
        "\u0646\u064a\u0629\u060c \u0628\u0645\u0627 \u0641\u064a \u0630"
        "\u0644\u0643 \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627"
        "\u0644\u0645\u062b\u0627\u0644 \u0644\u0627 \u0627\u0644\u062d"
        "\u0635\u0631 \u0627\u0644\u0636\u0645\u0627\u0646\u0627\u062a "
        "\u0627\u0644\u0636\u0645\u0646\u064a\u0629 \u0644\u0644\u0631"
        "\u0648\u0627\u062c \u0627\u0644\u062a\u062c\u0627\u0631\u064a"
        "\u060c \u0648\u0627\u0644\u0645\u0644\u0627\u0621\u0645\u0629 "
        "\u0644\u063a\u0631\u0636 \u0645\u0639\u064a\u0646\u060c \u0648"
        "\u0639\u062f\u0645 \u0627\u0644\u0627\u0646\u062a\u0647\u0627"
        "\u0643\u060c \u0648\u0627\u0644\u062f\u0642\u0629\u060c \u0648"
        "\u0627\u0644\u0627\u0643\u062a\u0645\u0627\u0644\u060c \u0648"
        "\u0627\u0644\u0645\u0648\u062b\u0648\u0642\u064a\u0629\u060c "
        "\u0648\u0627\u0644\u062a\u0648\u0641\u0631\u060c \u0648\u0627"
        "\u0644\u062a\u0648\u0642\u064a\u062a\u060c \u0623\u0648 "
        "\u0627\u0644\u0623\u0645\u0627\u0646."
    ),
    "uk": (
        "\u0421\u0435\u0440\u0432\u0456\u0441 \u043d\u0430\u0434\u0430"
        "\u0454\u0442\u044c\u0441\u044f \u00ab\u044f\u043a \u0454\u00bb "
        "\u0442\u0430 \u00ab\u0437\u0430 \u043d\u0430\u044f\u0432\u043d"
        "\u043e\u0441\u0442\u0456\u00bb \u0431\u0435\u0437 \u0431\u0443"
        "\u0434\u044c-\u044f\u043a\u0438\u0445 \u0433\u0430\u0440\u0430"
        "\u043d\u0442\u0456\u0439, \u044f\u0432\u043d\u0438\u0445 \u0447"
        "\u0438 \u043d\u0435\u044f\u0432\u043d\u0438\u0445, \u0432\u043a"
        "\u043b\u044e\u0447\u0430\u044e\u0447\u0438, \u0430\u043b\u0435 "
        "\u043d\u0435 \u043e\u0431\u043c\u0435\u0436\u0443\u044e\u0447"
        "\u0438\u0441\u044c, \u043d\u0435\u044f\u0432\u043d\u0438\u043c"
        "\u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0456\u044f\u043c"
        "\u0438 \u043f\u0440\u0438\u0434\u0430\u0442\u043d\u043e\u0441"
        "\u0442\u0456 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430"
        "\u0436\u0443, \u043f\u0440\u0438\u0434\u0430\u0442\u043d\u043e"
        "\u0441\u0442\u0456 \u0434\u043b\u044f \u043f\u0435\u0432\u043d"
        "\u043e\u0457 \u043c\u0435\u0442\u0438, \u043d\u0435\u043f\u043e"
        "\u0440\u0443\u0448\u0435\u043d\u043d\u044f \u043f\u0440\u0430"
        "\u0432, \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0456, "
        "\u043f\u043e\u0432\u043d\u043e\u0442\u0438, \u043d\u0430\u0434"
        "\u0456\u0439\u043d\u043e\u0441\u0442\u0456, \u0434\u043e\u0441"
        "\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456, \u0441\u0432"
        "\u043e\u0454\u0447\u0430\u0441\u043d\u043e\u0441\u0442\u0456 "
        "\u0430\u0431\u043e \u0431\u0435\u0437\u043f\u0435\u043a\u0438."
    ),
}

# ================================================================
# Story 13.3  Company-name intro rewrite (per-locale)
# ================================================================
TERMS_FIRST_USE_INTRO = {
    "en": (
        "Welcome to LumenLingo. These Terms of Service (\u201cTerms\u201d) "
        "govern your use of the LumenLingo mobile application (\u201cthe "
        "App\u201d) operated by Lumenshore Limited (Company No. 09607326), "
        "a company registered in England and Wales (\u201cLumenshore\u201d, "
        "\u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d)."
    ),
    "pl": (
        "Witamy w LumenLingo. Niniejsze Warunki korzystania z us\u0142ug "
        "(\u201eWarunki\u201d) reguluj\u0105 korzystanie z aplikacji "
        "mobilnej LumenLingo (\u201eAplikacja\u201d) obs\u0142ugiwanej "
        "przez Lumenshore Limited (Company No. 09607326), sp\u00f3\u0142k\u0119 "
        "zarejestrowan\u0105 w Anglii i Walii (\u201eLumenshore\u201d, "
        "\u201emy\u201d, \u201enas\u201d lub \u201enasz\u201d)."
    ),
    "de": (
        "Willkommen bei LumenLingo. Diese Nutzungsbedingungen "
        "(\u201eBedingungen\u201c) regeln Ihre Nutzung der mobilen "
        "Anwendung LumenLingo (\u201edie App\u201c), betrieben von "
        "Lumenshore Limited (Company No. 09607326), einer in England und "
        "Wales eingetragenen Gesellschaft (\u201eLumenshore\u201c, "
        "\u201ewir\u201c, \u201euns\u201c oder \u201eunser\u201c)."
    ),
    "es": (
        "Bienvenido a LumenLingo. Estos T\u00e9rminos de Servicio "
        "(\u201cT\u00e9rminos\u201d) rigen el uso de la aplicaci\u00f3n "
        "m\u00f3vil LumenLingo (\u201cla Aplicaci\u00f3n\u201d) operada por "
        "Lumenshore Limited (Company No. 09607326), una empresa registrada "
        "en Inglaterra y Gales (\u201cLumenshore\u201d, "
        "\u201cnosotros\u201d o \u201cnuestro\u201d)."
    ),
    "fr": (
        "Bienvenue sur LumenLingo. Les pr\u00e9sentes Conditions "
        "d\u2019utilisation (\u00ab Conditions \u00bb) r\u00e9gissent votre "
        "utilisation de l\u2019application mobile LumenLingo "
        "(\u00ab l\u2019Application \u00bb) exploit\u00e9e par Lumenshore "
        "Limited (Company No. 09607326), une soci\u00e9t\u00e9 "
        "enregistr\u00e9e en Angleterre et au Pays de Galles "
        "(\u00ab Lumenshore \u00bb, \u00ab nous \u00bb ou \u00ab notre \u00bb)."
    ),
    "ja": (
        "LumenLingo\u3078\u3088\u3046\u3053\u305d\u3002\u672c\u30b5\u30fc"
        "\u30d3\u30b9\u5229\u7528\u898f\u7d04\uff08\u300c\u898f\u7d04"
        "\u300d\uff09\u306f\u3001\u30a4\u30f3\u30b0\u30e9\u30f3\u30c9"
        "\u304a\u3088\u3073\u30a6\u30a7\u30fc\u30eb\u30ba\u3067\u767b"
        "\u9332\u3055\u308c\u305fLumenshore Limited\uff08Company No. "
        "09607326\uff09\uff08\u300cLumenshore\u300d\u3001\u300c\u5f53"
        "\u793e\u300d\uff09\u304c\u904b\u55b6\u3059\u308bLumenLingo"
        "\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7"
        "\u30e7\u30f3\uff08\u300c\u30a2\u30d7\u30ea\u300d\uff09\u306e"
        "\u3054\u5229\u7528\u3092\u898f\u5b9a\u3057\u307e\u3059\u3002"
    ),
    "zh": (
        "\u6b22\u8fce\u4f7f\u7528LumenLingo\u3002\u672c\u670d\u52a1"
        "\u6761\u6b3e\uff08\"\u6761\u6b3e\"\uff09\u7ba1\u8f96\u60a8\u5bf9"
        "\u7531Lumenshore Limited\uff08\u516c\u53f8\u7f16\u53f7"
        "09607326\uff09\uff08\u4e00\u5bb6\u5728\u82f1\u683c\u5170\u548c"
        "\u5a01\u5c14\u58eb\u6ce8\u518c\u7684\u516c\u53f8\uff09"
        "\uff08\"Lumenshore\"\u3001\"\u6211\u4eec\"\uff09\u8fd0\u8425\u7684"
        "LumenLingo\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\uff08\"\u5e94"
        "\u7528\"\uff09\u7684\u4f7f\u7528\u3002"
    ),
    "ar": (
        "\u0645\u0631\u062d\u0628\u0627\u064b \u0628\u0643 \u0641\u064a "
        "LumenLingo. \u062a\u062d\u0643\u0645 \u0634\u0631\u0648\u0637 "
        "\u0627\u0644\u062e\u062f\u0645\u0629 \u0647\u0630\u0647 "
        "(\"\u0627\u0644\u0634\u0631\u0648\u0637\") \u0627\u0633\u062a"
        "\u062e\u062f\u0627\u0645\u0643 \u0644\u062a\u0637\u0628\u064a"
        "\u0642 LumenLingo \u0644\u0644\u0647\u0627\u062a\u0641 "
        "\u0627\u0644\u0645\u062d\u0645\u0648\u0644 (\"\u0627\u0644\u062a"
        "\u0637\u0628\u064a\u0642\") \u0627\u0644\u0630\u064a \u062a\u062f"
        "\u064a\u0631\u0647 Lumenshore Limited (\u0631\u0642\u0645 "
        "\u0627\u0644\u0634\u0631\u0643\u0629 09607326)\u060c \u0634\u0631"
        "\u0643\u0629 \u0645\u0633\u062c\u0644\u0629 \u0641\u064a "
        "\u0625\u0646\u062c\u0644\u062a\u0631\u0627 \u0648\u0648\u064a"
        "\u0644\u0632 (\"Lumenshore\" \u0623\u0648 \"\u0646\u062d\u0646\")."
    ),
    "uk": (
        "\u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e"
        "\u0441\u0438\u043c\u043e \u0434\u043e LumenLingo. \u0426\u0456 "
        "\u0423\u043c\u043e\u0432\u0438 \u0432\u0438\u043a\u043e\u0440"
        "\u0438\u0441\u0442\u0430\u043d\u043d\u044f (\"\u0423\u043c\u043e"
        "\u0432\u0438\") \u0440\u0435\u0433\u0443\u043b\u044e\u044e\u0442"
        "\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430"
        "\u043d\u043d\u044f \u0432\u0430\u043c\u0438 \u043c\u043e\u0431"
        "\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u0434"
        "\u0430\u0442\u043a\u0443 LumenLingo (\"\u0414\u043e\u0434\u0430"
        "\u0442\u043e\u043a\"), \u0449\u043e \u043a\u0435\u0440\u0443"
        "\u0454\u0442\u044c\u0441\u044f Lumenshore Limited (Company No. "
        "09607326), \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0454\u044e"
        ", \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432"
        "\u0430\u043d\u043e\u044e \u0432 \u0410\u043d\u0433\u043b\u0456"
        "\u0457 \u0442\u0430 \u0423\u0435\u043b\u044c\u0441\u0456 "
        "(\"Lumenshore\", \"\u043c\u0438\", \"\u043d\u0430\u0441\" "
        "\u0430\u0431\u043e \"\u043d\u0430\u0448\")."
    ),
}


def replace_company_name_in_terms(terms):
    """Walk the Terms namespace and replace LumenShore Ltd -> Lumenshore Limited."""
    count = 0

    def walk(obj, path=""):
        nonlocal count
        if isinstance(obj, dict):
            for k, v in obj.items():
                full = f"{path}.{k}" if path else k
                walk(v, full)
        elif isinstance(obj, str):
            if "introduction.p1" in path:
                return  # handled separately
            if "LumenShore Ltd" in obj:
                new_val = obj.replace("LumenShore Ltd", "Lumenshore Limited")
                # set it back
                _set(terms, path, new_val)
                count += 1

    def _set(d, dotpath, value):
        keys = dotpath.split(".")
        for k in keys[:-1]:
            d = d[k]
        d[keys[-1]] = value

    walk(terms)
    return count


def process_all():
    for locale in LOCALES:
        fname = os.path.join(MESSAGES_DIR, f"{locale}.json")
        with open(fname, "r", encoding="utf-8") as f:
            data = json.load(f)

        terms = data["Terms"]
        changes = []

        # Story 13.1: force majeure
        terms["forceMajeure"] = FORCE_MAJEURE[locale]
        changes.append("13.1 forceMajeure (5 paras)")

        # Story 13.2: cure period
        terms["serviceTermination"]["p4"] = CURE_PERIOD[locale]
        changes.append("13.2 serviceTermination.p4")

        # Story 13.3: company name
        terms["introduction"]["p1"] = TERMS_FIRST_USE_INTRO[locale]
        n = replace_company_name_in_terms(terms)
        changes.append(f"13.3 intro.p1 + {n} name fixes")

        # Story 13.4: cooling-off
        terms["distanceSelling"]["li5"] = DISTANCE_SELLING_LI5[locale]
        terms["distanceSelling"]["li5a"] = DISTANCE_SELLING_LI5A[locale]
        changes.append("13.4 distanceSelling li5+li5a")

        # Story 13.5: de-caps
        terms["governingLaw"]["law1"] = GOVERNING_LAW1[locale]
        terms["usArbitration"]["classActionP1"] = US_ARBITRATION_P1[locale]
        terms["warrantyDisclaimer"]["p1"] = WARRANTY_DISCLAIMER_P1[locale]
        changes.append("13.5 de-caps x3")

        with open(fname, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write("\n")

        print(f"  {locale}.json: {'; '.join(changes)}")


if __name__ == "__main__":
    process_all()
    print("Done.")

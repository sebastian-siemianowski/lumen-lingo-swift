#!/usr/bin/env python3
"""
Story 17.1 — CRA 2015 Unfair Terms Compliance Review
Add Terms.fairnessNotice and Terms.termsModification.fairnessP1 in all 9 locales.
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

# ── fairnessNotice: CRA 2015 s.65 + s.68 statutory fairness confirmation ──
fairness_notice = {
    "en": {
        "heading": "Consumer Fairness Notice",
        "p1": "These Terms have been drafted in plain, intelligible language in accordance with the Consumer Rights Act 2015, section 68. If any term is found to be unclear, it will be interpreted in your favour as the consumer.",
        "p2": "Nothing in these Terms excludes or limits our liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot lawfully be excluded or limited under the Consumer Rights Act 2015, section 65, or other applicable law.",
        "p3": "Your statutory rights as a consumer under the Consumer Rights Act 2015 are not affected by any provision of these Terms. In the event of conflict between these Terms and your statutory rights, your statutory rights shall prevail.",
    },
    "pl": {
        "heading": "Informacja o prawach konsumenta",
        "p1": "Niniejsze Warunki zostały sporządzone prostym i zrozumiałym językiem zgodnie z Ustawą o prawach konsumenta 2015 (Consumer Rights Act 2015), sekcja 68. Jeśli jakiekolwiek postanowienie okaże się niejasne, zostanie zinterpretowane na korzyść konsumenta.",
        "p2": "Żadne postanowienie niniejszych Warunków nie wyłącza ani nie ogranicza naszej odpowiedzialności za: (a) śmierć lub uszkodzenie ciała spowodowane naszym zaniedbaniem; (b) oszustwo lub oszukańcze wprowadzenie w błąd; ani (c) jakąkolwiek inną odpowiedzialność, która nie może być zgodnie z prawem wyłączona lub ograniczona na mocy Ustawy o prawach konsumenta 2015, sekcja 65, lub innego obowiązującego prawa.",
        "p3": "Twoje ustawowe prawa konsumenta wynikające z Ustawy o prawach konsumenta 2015 nie są naruszone przez żadne postanowienie niniejszych Warunków. W przypadku sprzeczności między niniejszymi Warunkami a Twoimi prawami ustawowymi, pierwszeństwo mają prawa ustawowe.",
    },
    "de": {
        "heading": "Verbraucherschutzhinweis",
        "p1": "Diese Bedingungen wurden in klarer, verständlicher Sprache gemäß dem Consumer Rights Act 2015, Abschnitt 68, verfasst. Sollte eine Bestimmung unklar sein, wird sie zu Ihren Gunsten als Verbraucher ausgelegt.",
        "p2": "Keine Bestimmung dieser Bedingungen schließt unsere Haftung aus oder beschränkt sie für: (a) Tod oder Körperverletzung durch unsere Fahrlässigkeit; (b) Betrug oder arglistige Täuschung; oder (c) jede andere Haftung, die nach dem Consumer Rights Act 2015, Abschnitt 65, oder anderem geltendem Recht nicht ausgeschlossen oder beschränkt werden kann.",
        "p3": "Ihre gesetzlichen Verbraucherrechte nach dem Consumer Rights Act 2015 werden durch keine Bestimmung dieser Bedingungen beeinträchtigt. Im Falle eines Widerspruchs zwischen diesen Bedingungen und Ihren gesetzlichen Rechten haben Ihre gesetzlichen Rechte Vorrang.",
    },
    "es": {
        "heading": "Aviso de equidad al consumidor",
        "p1": "Estas Condiciones han sido redactadas en un lenguaje claro e inteligible de conformidad con la Ley de Derechos del Consumidor 2015 (Consumer Rights Act 2015), sección 68. Si alguna cláusula resulta poco clara, se interpretará a su favor como consumidor.",
        "p2": "Nada en estas Condiciones excluye ni limita nuestra responsabilidad por: (a) muerte o lesiones personales causadas por nuestra negligencia; (b) fraude o declaración fraudulenta; o (c) cualquier otra responsabilidad que no pueda ser legalmente excluida o limitada en virtud de la Ley de Derechos del Consumidor 2015, sección 65, u otra legislación aplicable.",
        "p3": "Sus derechos legales como consumidor en virtud de la Ley de Derechos del Consumidor 2015 no se ven afectados por ninguna disposición de estas Condiciones. En caso de conflicto entre estas Condiciones y sus derechos legales, prevalecerán sus derechos legales.",
    },
    "fr": {
        "heading": "Avis d'équité envers le consommateur",
        "p1": "Les présentes Conditions ont été rédigées dans un langage clair et intelligible conformément au Consumer Rights Act 2015, section 68. Si une clause s'avère peu claire, elle sera interprétée en votre faveur en tant que consommateur.",
        "p2": "Aucune disposition des présentes Conditions n'exclut ni ne limite notre responsabilité pour : (a) décès ou blessure corporelle causés par notre négligence ; (b) fraude ou déclaration frauduleuse ; ou (c) toute autre responsabilité ne pouvant être légalement exclue ou limitée en vertu du Consumer Rights Act 2015, section 65, ou de toute autre loi applicable.",
        "p3": "Vos droits légaux en tant que consommateur en vertu du Consumer Rights Act 2015 ne sont pas affectés par les dispositions des présentes Conditions. En cas de conflit entre les présentes Conditions et vos droits légaux, vos droits légaux prévalent.",
    },
    "ja": {
        "heading": "消費者公正性に関する通知",
        "p1": "本規約は、消費者権利法 2015（Consumer Rights Act 2015）第 68 条に従い、平易でわかりやすい言語で作成されています。条項が不明確な場合は、消費者であるお客様に有利に解釈されます。",
        "p2": "本規約のいかなる条項も、以下に対する当社の責任を排除または制限するものではありません：(a) 当社の過失による死亡または身体傷害、(b) 詐欺または詐欺的不実表示、(c) 消費者権利法 2015 第 65 条またはその他の適用法に基づき合法的に排除または制限できないその他の責任。",
        "p3": "消費者権利法 2015 に基づくお客様の法定権利は、本規約のいかなる条項によっても影響を受けません。本規約とお客様の法定権利の間に矛盾がある場合は、お客様の法定権利が優先されます。",
    },
    "zh": {
        "heading": "消费者公平性通知",
        "p1": "本条款根据《2015 年消费者权利法》（Consumer Rights Act 2015）第 68 条的要求，以通俗易懂的语言起草。如任何条款不够清晰，将以有利于您（消费者）的方式进行解释。",
        "p2": "本条款的任何规定均不排除或限制我们对以下事项的责任：(a) 因我们的疏忽造成的死亡或人身伤害；(b) 欺诈或欺诈性虚假陈述；(c) 根据《2015 年消费者权利法》第 65 条或其他适用法律不能合法排除或限制的任何其他责任。",
        "p3": "您作为消费者根据《2015 年消费者权利法》享有的法定权利不受本条款任何规定的影响。如本条款与您的法定权利之间存在冲突，以您的法定权利为准。",
    },
    "ar": {
        "heading": "إشعار إنصاف المستهلك",
        "p1": "تمت صياغة هذه الشروط بلغة واضحة ومفهومة وفقًا لقانون حقوق المستهلك 2015 (Consumer Rights Act 2015)، القسم 68. إذا كان أي شرط غير واضح، فسيتم تفسيره لصالحك كمستهلك.",
        "p2": "لا شيء في هذه الشروط يستبعد أو يحد من مسؤوليتنا عن: (أ) الوفاة أو الإصابة الشخصية الناجمة عن إهمالنا؛ (ب) الاحتيال أو التحريف الاحتيالي؛ أو (ج) أي مسؤولية أخرى لا يمكن استبعادها أو تقييدها قانونيًا بموجب قانون حقوق المستهلك 2015، القسم 65، أو أي قانون آخر معمول به.",
        "p3": "حقوقك القانونية كمستهلك بموجب قانون حقوق المستهلك 2015 لا تتأثر بأي حكم من أحكام هذه الشروط. في حالة التعارض بين هذه الشروط وحقوقك القانونية، تسود حقوقك القانونية.",
    },
    "uk": {
        "heading": "Повідомлення про справедливість для споживачів",
        "p1": "Ці Умови складено зрозумілою мовою відповідно до Закону про права споживачів 2015 року (Consumer Rights Act 2015), розділ 68. Якщо будь-яке положення виявиться незрозумілим, воно тлумачиться на вашу користь як споживача.",
        "p2": "Жодне положення цих Умов не виключає і не обмежує нашу відповідальність за: (а) смерть або тілесне ушкодження, спричинені нашою недбалістю; (б) шахрайство або шахрайське введення в оману; (в) будь-яку іншу відповідальність, яка не може бути законно виключена або обмежена відповідно до Закону про права споживачів 2015, розділ 65, або іншого чинного законодавства.",
        "p3": "Ваші законні права споживача відповідно до Закону про права споживачів 2015 року не зачіпаються жодним положенням цих Умов. У разі конфлікту між цими Умовами та вашими законними правами переважають ваші законні права.",
    },
}

# ── termsModification enhancement: 30-day grace period ──
modification_fairness = {
    "en": "If a modification to these Terms materially reduces your rights or increases your obligations, the change will not take effect for existing users until 30 days after notification. During that 30-day period, you may terminate your account and cancel your subscription free of charge if you do not agree to the modified Terms.",
    "pl": "Jeśli zmiana niniejszych Warunków istotnie ogranicza Twoje prawa lub zwiększa Twoje zobowiązania, zmiana ta nie wejdzie w życie wobec obecnych użytkowników przez 30 dni od powiadomienia. W tym 30-dniowym okresie możesz bezpłatnie rozwiązać konto i anulować subskrypcję, jeśli nie zgadzasz się ze zmienionymi Warunkami.",
    "de": "Wenn eine Änderung dieser Bedingungen Ihre Rechte wesentlich einschränkt oder Ihre Pflichten erhöht, wird die Änderung für bestehende Nutzer erst 30 Tage nach Benachrichtigung wirksam. Während dieses 30-tägigen Zeitraums können Sie Ihr Konto kündigen und Ihr Abonnement kostenlos stornieren, wenn Sie den geänderten Bedingungen nicht zustimmen.",
    "es": "Si una modificación de estas Condiciones reduce sustancialmente sus derechos o aumenta sus obligaciones, el cambio no entrará en vigor para los usuarios existentes hasta 30 días después de la notificación. Durante ese período de 30 días, puede cancelar su cuenta y su suscripción sin cargo si no está de acuerdo con las Condiciones modificadas.",
    "fr": "Si une modification des présentes Conditions réduit substantiellement vos droits ou augmente vos obligations, le changement ne prendra effet pour les utilisateurs existants que 30 jours après notification. Pendant cette période de 30 jours, vous pouvez résilier votre compte et annuler votre abonnement sans frais si vous n'acceptez pas les Conditions modifiées.",
    "ja": "本規約の変更がお客様の権利を実質的に縮小するか、義務を増加させる場合、その変更は通知から 30 日間は既存ユーザーに対して効力を生じません。この 30 日間の期間中、変更後の規約に同意しない場合は、無料でアカウントを解約し、サブスクリプションをキャンセルすることができます。",
    "zh": "如果对本条款的修改实质性地减少了您的权利或增加了您的义务，该变更将在通知后 30 天内不对现有用户生效。在该 30 天期间内，如果您不同意修改后的条款，您可以免费终止账户并取消订阅。",
    "ar": "إذا أدى تعديل هذه الشروط إلى تقليص حقوقك بشكل جوهري أو زيادة التزاماتك، فلن يسري التغيير على المستخدمين الحاليين إلا بعد 30 يومًا من الإخطار. خلال فترة الـ 30 يومًا هذه، يمكنك إنهاء حسابك وإلغاء اشتراكك مجانًا إذا كنت لا توافق على الشروط المعدلة.",
    "uk": "Якщо зміна цих Умов суттєво обмежує ваші права або збільшує ваші зобов'язання, зміна набирає чинності для існуючих користувачів лише через 30 днів після повідомлення. Протягом цього 30-денного періоду ви можете безкоштовно припинити дію облікового запису та скасувати підписку, якщо не погоджуєтесь зі зміненими Умовами.",
}

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # Add fairnessNotice
    if "fairnessNotice" not in data["Terms"]:
        data["Terms"]["fairnessNotice"] = fairness_notice[loc]
        print(f"  [{loc}] Added Terms.fairnessNotice")
        applied += 1

    # Add termsModification.fairnessP1
    if "fairnessP1" not in data["Terms"]["termsModification"]:
        data["Terms"]["termsModification"]["fairnessP1"] = modification_fairness[loc]
        print(f"  [{loc}] Added Terms.termsModification.fairnessP1")
        applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

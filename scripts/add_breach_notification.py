#!/usr/bin/env python3
"""Story 9.1: Add breach notification section to Privacy Policy in all 9 locales."""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'

# English content
BREACH_EN = {
    "heading": "Data Breach Notification",
    "p1": "In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the Information Commissioner's Office (ICO) without undue delay and, where feasible, within 72 hours of becoming aware of the breach, in accordance with UK GDPR Article 33. Where notification to the ICO is not made within 72 hours, it shall be accompanied by reasons for the delay.",
    "p2": "If the breach is likely to result in a <b>high risk</b> to your rights and freedoms, we will also notify you directly without undue delay, in accordance with UK GDPR Article 34. We will communicate to you in clear and plain language:",
    "li1": "The nature of the personal data breach, including where possible the categories and approximate number of data subjects and records concerned",
    "li2": "The name and contact details of our data protection lead from whom you can obtain more information",
    "li3": "The likely consequences of the breach",
    "li4": "The measures taken or proposed to address the breach, including, where appropriate, measures to mitigate its possible adverse effects",
    "p3": "We maintain internal breach response procedures, including a breach register, to ensure we can detect, report, and investigate personal data breaches effectively. For questions about our breach notification procedures, contact us at <emailLink>legal@lumenlingo.com</emailLink>."
}

# Translations (professional legal translations for each locale)
TRANSLATIONS = {
    "en": BREACH_EN,
    "pl": {
        "heading": "Powiadomienie o naruszeniu danych",
        "p1": "W przypadku naruszenia ochrony danych osobowych, które może skutkować zagrożeniem dla Twoich praw i wolności, powiadomimy Urząd Ochrony Danych Osobowych (UODO) bez zbędnej zwłoki, a w miarę możliwości w ciągu 72 godzin od momentu stwierdzenia naruszenia, zgodnie z art. 33 UK GDPR. W przypadku gdy powiadomienie nie zostanie dokonane w ciągu 72 godzin, dołączymy wyjaśnienie przyczyn opóźnienia.",
        "p2": "Jeśli naruszenie może skutkować <b>wysokim ryzykiem</b> dla Twoich praw i wolności, powiadomimy Cię również bezpośrednio bez zbędnej zwłoki, zgodnie z art. 34 UK GDPR. Przekażemy Ci jasno i zrozumiale:",
        "li1": "Charakter naruszenia ochrony danych osobowych, w tym w miarę możliwości kategorie i przybliżoną liczbę osób, których dane dotyczą, oraz kategorie i przybliżoną liczbę wpisów danych osobowych",
        "li2": "Imię i nazwisko oraz dane kontaktowe naszego inspektora ochrony danych, od którego można uzyskać więcej informacji",
        "li3": "Prawdopodobne konsekwencje naruszenia",
        "li4": "Środki podjęte lub proponowane w celu zaradzenia naruszeniu, w tym, w stosownych przypadkach, środki mające na celu złagodzenie jego ewentualnych negatywnych skutków",
        "p3": "Utrzymujemy wewnętrzne procedury reagowania na naruszenia, w tym rejestr naruszeń, aby zapewnić skuteczne wykrywanie, zgłaszanie i badanie naruszeń ochrony danych osobowych. W przypadku pytań dotyczących naszych procedur powiadamiania o naruszeniach, prosimy o kontakt pod adresem <emailLink>legal@lumenlingo.com</emailLink>."
    },
    "de": {
        "heading": "Benachrichtigung bei Datenschutzverletzungen",
        "p1": "Im Falle einer Verletzung des Schutzes personenbezogener Daten, die voraussichtlich zu einem Risiko für Ihre Rechte und Freiheiten führt, werden wir die zuständige Aufsichtsbehörde (ICO) unverzüglich und nach Möglichkeit innerhalb von 72 Stunden nach Bekanntwerden der Verletzung benachrichtigen, gemäß Artikel 33 UK GDPR. Erfolgt die Meldung nicht innerhalb von 72 Stunden, wird sie mit einer Begründung der Verzögerung versehen.",
        "p2": "Wenn die Verletzung voraussichtlich ein <b>hohes Risiko</b> für Ihre Rechte und Freiheiten darstellt, werden wir Sie ebenfalls unverzüglich direkt benachrichtigen, gemäß Artikel 34 UK GDPR. Wir werden Ihnen in klarer und verständlicher Sprache mitteilen:",
        "li1": "Die Art der Verletzung des Schutzes personenbezogener Daten, einschließlich, soweit möglich, der Kategorien und der ungefähren Anzahl der betroffenen Personen und der betroffenen Datensätze",
        "li2": "Den Namen und die Kontaktdaten unseres Datenschutzbeauftragten, von dem weitere Informationen eingeholt werden können",
        "li3": "Die wahrscheinlichen Folgen der Verletzung",
        "li4": "Die ergriffenen oder vorgeschlagenen Maßnahmen zur Behebung der Verletzung, einschließlich gegebenenfalls Maßnahmen zur Abmilderung ihrer möglichen nachteiligen Auswirkungen",
        "p3": "Wir unterhalten interne Verfahren zur Reaktion auf Datenschutzverletzungen, einschließlich eines Verletzungsregisters, um sicherzustellen, dass wir Verletzungen des Schutzes personenbezogener Daten wirksam erkennen, melden und untersuchen können. Bei Fragen zu unseren Meldeverfahren kontaktieren Sie uns unter <emailLink>legal@lumenlingo.com</emailLink>."
    },
    "es": {
        "heading": "Notificación de violación de datos",
        "p1": "En caso de una violación de datos personales que probablemente suponga un riesgo para sus derechos y libertades, notificaremos a la Oficina del Comisionado de Información (ICO) sin demora indebida y, cuando sea factible, dentro de las 72 horas siguientes a haber tenido conocimiento de la violación, de conformidad con el artículo 33 del UK GDPR. Cuando la notificación al ICO no se realice dentro de las 72 horas, irá acompañada de las razones del retraso.",
        "p2": "Si la violación probablemente supone un <b>alto riesgo</b> para sus derechos y libertades, también le notificaremos directamente sin demora indebida, de conformidad con el artículo 34 del UK GDPR. Le comunicaremos de forma clara y sencilla:",
        "li1": "La naturaleza de la violación de datos personales, incluyendo, cuando sea posible, las categorías y el número aproximado de interesados afectados y de registros de datos personales afectados",
        "li2": "El nombre y los datos de contacto de nuestro responsable de protección de datos, de quien puede obtener más información",
        "li3": "Las posibles consecuencias de la violación",
        "li4": "Las medidas adoptadas o propuestas para hacer frente a la violación, incluidas, en su caso, las medidas para mitigar sus posibles efectos adversos",
        "p3": "Mantenemos procedimientos internos de respuesta ante violaciones, incluido un registro de violaciones, para garantizar que podemos detectar, notificar e investigar las violaciones de datos personales de manera efectiva. Para preguntas sobre nuestros procedimientos de notificación de violaciones, contáctenos en <emailLink>legal@lumenlingo.com</emailLink>."
    },
    "fr": {
        "heading": "Notification de violation de données",
        "p1": "En cas de violation de données à caractère personnel susceptible d'engendrer un risque pour vos droits et libertés, nous notifierons l'Information Commissioner's Office (ICO) dans les meilleurs délais et, si possible, dans les 72 heures suivant la prise de connaissance de la violation, conformément à l'article 33 du UK GDPR. Si la notification à l'ICO n'est pas effectuée dans les 72 heures, elle sera accompagnée des motifs du retard.",
        "p2": "Si la violation est susceptible d'engendrer un <b>risque élevé</b> pour vos droits et libertés, nous vous en informerons également directement dans les meilleurs délais, conformément à l'article 34 du UK GDPR. Nous vous communiquerons dans un langage clair et simple :",
        "li1": "La nature de la violation de données à caractère personnel, y compris, si possible, les catégories et le nombre approximatif de personnes concernées ainsi que les catégories et le nombre approximatif d'enregistrements de données concernés",
        "li2": "Le nom et les coordonnées de notre délégué à la protection des données auprès duquel des informations supplémentaires peuvent être obtenues",
        "li3": "Les conséquences probables de la violation",
        "li4": "Les mesures prises ou proposées pour remédier à la violation, y compris, le cas échéant, les mesures pour en atténuer les éventuelles conséquences négatives",
        "p3": "Nous maintenons des procédures internes de réponse aux violations, y compris un registre des violations, afin de garantir que nous pouvons détecter, signaler et enquêter efficacement sur les violations de données à caractère personnel. Pour toute question concernant nos procédures de notification de violation, contactez-nous à <emailLink>legal@lumenlingo.com</emailLink>."
    },
    "ja": {
        "heading": "データ侵害の通知",
        "p1": "お客様の権利と自由にリスクをもたらす可能性のある個人データ侵害が発生した場合、UK GDPR第33条に従い、侵害を認識してから不当な遅延なく、可能な限り72時間以内に情報コミッショナー事務局（ICO）に通知します。72時間以内にICOへの通知ができない場合は、遅延の理由を添付します。",
        "p2": "侵害がお客様の権利と自由に<b>高いリスク</b>をもたらす可能性がある場合、UK GDPR第34条に従い、不当な遅延なく直接お客様にも通知します。明確でわかりやすい言葉で以下をお伝えします：",
        "li1": "個人データ侵害の性質（可能な場合、影響を受けるデータ主体のカテゴリーと概数、および影響を受ける個人データ記録のカテゴリーと概数を含む）",
        "li2": "詳細情報を入手できるデータ保護責任者の氏名と連絡先",
        "li3": "侵害の想定される結果",
        "li4": "侵害に対処するために講じた、または講じることを提案する措置（該当する場合、その悪影響を軽減するための措置を含む）",
        "p3": "当社は、個人データ侵害を効果的に検出、報告、調査できるよう、侵害登録簿を含む内部侵害対応手順を維持しています。侵害通知手順に関するご質問は、<emailLink>legal@lumenlingo.com</emailLink>までお問い合わせください。"
    },
    "zh": {
        "heading": "数据泄露通知",
        "p1": "如果发生可能对您的权利和自由造成风险的个人数据泄露，我们将根据UK GDPR第33条的规定，在得知泄露后不无故延迟地，在可行的情况下于72小时内通知信息专员办公室（ICO）。如果未能在72小时内向ICO发出通知，将附上延迟原因的说明。",
        "p2": "如果泄露可能对您的权利和自由造成<b>高风险</b>，我们还将根据UK GDPR第34条的规定，不无故延迟地直接通知您。我们将以清晰明了的语言向您传达：",
        "li1": "个人数据泄露的性质，包括在可能的情况下，受影响的数据主体类别和大致数量，以及受影响的个人数据记录类别和大致数量",
        "li2": "我们数据保护负责人的姓名和联系方式，您可以从其获取更多信息",
        "li3": "泄露的可能后果",
        "li4": "为应对泄露而采取或建议采取的措施，包括在适当情况下为减轻其可能的不利影响而采取的措施",
        "p3": "我们维护内部泄露响应程序，包括泄露登记簿，以确保我们能够有效地检测、报告和调查个人数据泄露事件。如有关于我们泄露通知程序的问题，请通过<emailLink>legal@lumenlingo.com</emailLink>联系我们。"
    },
    "ar": {
        "heading": "إشعار بخرق البيانات",
        "p1": "في حالة حدوث خرق للبيانات الشخصية من المحتمل أن يؤدي إلى خطر على حقوقك وحرياتك، سنقوم بإخطار مكتب مفوض المعلومات (ICO) دون تأخير غير مبرر، وحيثما أمكن، في غضون 72 ساعة من علمنا بالخرق، وفقاً للمادة 33 من UK GDPR. في حالة عدم تقديم الإخطار إلى ICO خلال 72 ساعة، سيكون مصحوباً بأسباب التأخير.",
        "p2": "إذا كان الخرق من المحتمل أن يؤدي إلى <b>خطر كبير</b> على حقوقك وحرياتك، فسنقوم أيضاً بإخطارك مباشرة دون تأخير غير مبرر، وفقاً للمادة 34 من UK GDPR. سنبلغك بلغة واضحة ومفهومة:",
        "li1": "طبيعة خرق البيانات الشخصية، بما في ذلك حيثما أمكن، فئات وعدد تقريبي للأشخاص المتأثرين وفئات وعدد تقريبي لسجلات البيانات الشخصية المتأثرة",
        "li2": "اسم وتفاصيل الاتصال بمسؤول حماية البيانات لدينا الذي يمكنك الحصول منه على مزيد من المعلومات",
        "li3": "العواقب المحتملة للخرق",
        "li4": "التدابير المتخذة أو المقترحة لمعالجة الخرق، بما في ذلك، عند الاقتضاء، التدابير اللازمة للتخفيف من آثاره السلبية المحتملة",
        "p3": "نحتفظ بإجراءات داخلية للاستجابة للخروقات، بما في ذلك سجل الخروقات، لضمان قدرتنا على اكتشاف خروقات البيانات الشخصية والإبلاغ عنها والتحقيق فيها بفعالية. للاستفسارات حول إجراءات الإخطار بالخرق، تواصل معنا على <emailLink>legal@lumenlingo.com</emailLink>."
    },
    "uk": {
        "heading": "Повідомлення про порушення захисту даних",
        "p1": "У разі порушення захисту персональних даних, яке може призвести до ризику для ваших прав і свобод, ми повідомимо Офіс Уповноваженого з питань інформації (ICO) без невиправданої затримки та, за можливості, протягом 72 годин з моменту виявлення порушення, відповідно до статті 33 UK GDPR. Якщо повідомлення ICO не буде здійснено протягом 72 годин, воно супроводжуватиметься поясненням причин затримки.",
        "p2": "Якщо порушення може призвести до <b>високого ризику</b> для ваших прав і свобод, ми також повідомимо вас безпосередньо без невиправданої затримки, відповідно до статті 34 UK GDPR. Ми повідомимо вас зрозумілою мовою про:",
        "li1": "Характер порушення захисту персональних даних, включаючи, за можливості, категорії та приблизну кількість суб'єктів даних, яких це стосується, та категорії та приблизну кількість записів персональних даних",
        "li2": "Ім'я та контактні дані нашого відповідального за захист даних, від якого можна отримати додаткову інформацію",
        "li3": "Ймовірні наслідки порушення",
        "li4": "Заходи, вжиті або запропоновані для усунення порушення, включаючи, за необхідності, заходи для пом'якшення його можливих негативних наслідків",
        "p3": "Ми підтримуємо внутрішні процедури реагування на порушення, включаючи реєстр порушень, щоб забезпечити ефективне виявлення, повідомлення та розслідування порушень захисту персональних даних. З питань щодо наших процедур повідомлення про порушення зв'яжіться з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>."
    }
}


def add_section_to_locale(locale):
    fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
    with open(fname, 'r', encoding='utf-8') as f:
        data = json.load(f)

    privacy = data.get('Privacy', {})
    if 'breachNotification' in privacy:
        print(f'{locale}.json: breachNotification already exists, skipping')
        return

    # Insert breachNotification before yourRights
    new_privacy = {}
    for key, value in privacy.items():
        if key == 'yourRights':
            new_privacy['breachNotification'] = TRANSLATIONS[locale]
        new_privacy[key] = value

    # If yourRights wasn't found, append at end
    if 'breachNotification' not in new_privacy:
        new_privacy['breachNotification'] = TRANSLATIONS[locale]

    data['Privacy'] = new_privacy

    with open(fname, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')

    print(f'{locale}.json: breachNotification added')


for locale in ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']:
    add_section_to_locale(locale)

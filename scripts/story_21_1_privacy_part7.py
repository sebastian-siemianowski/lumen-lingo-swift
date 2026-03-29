#!/usr/bin/env python3
"""Story 21.1 — Privacy translations Part 7/7.

Sections: brazilPrivacy, euRepresentative.
"""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(locale, data):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

def set_nested(d, keys, value):
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def get_nested(d, keys):
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return None
    return d

T = {}

# ── brazilPrivacy ─────────────────────────────────────────────────────────────
T["brazilPrivacy.heading"] = {
    "pl": "Brazylia — Lei Geral de Proteção de Dados (LGPD)",
    "de": "Brasilien — Lei Geral de Proteção de Dados (LGPD)",
    "es": "Brasil — Lei Geral de Proteção de Dados (LGPD)",
    "fr": "Brésil — Lei Geral de Proteção de Dados (LGPD)",
    "ja": "ブラジル — Lei Geral de Proteção de Dados（LGPD）",
    "zh": "巴西 — 《通用数据保护法》（LGPD）",
    "ar": "البرازيل — Lei Geral de Proteção de Dados (LGPD)",
    "uk": "Бразилія — Lei Geral de Proteção de Dados (LGPD)",
}
T["brazilPrivacy.intro"] = {
    "pl": "LumenLingo obsługuje użytkowników na całym świecie, w tym w Brazylii. Jako największy rynek w Ameryce Łacińskiej, przestrzegamy brazylijskiej ustawy Lei Geral de Proteção de Dados (LGPD, ustawa nr 13 709/2018), obowiązującej od września 2020 r.",
    "de": "LumenLingo bedient Nutzer weltweit, einschließlich in Brasilien. Als größter Markt in Lateinamerika halten wir Brasiliens Lei Geral de Proteção de Dados (LGPD, Gesetz Nr. 13.709/2018) ein, das seit September 2020 in Kraft ist.",
    "es": "LumenLingo atiende a usuarios en todo el mundo, incluido Brasil. Como el mercado más grande de América Latina, cumplimos con la Lei Geral de Proteção de Dados de Brasil (LGPD, Ley N.º 13.709/2018), en vigor desde septiembre de 2020.",
    "fr": "LumenLingo dessert des utilisateurs dans le monde entier, y compris au Brésil. En tant que plus grand marché d'Amérique latine, nous respectons la Lei Geral de Proteção de Dados du Brésil (LGPD, Loi n° 13 709/2018), en vigueur depuis septembre 2020.",
    "ja": "LumenLingoはブラジルを含む世界中のユーザーにサービスを提供しています。中南米最大の市場として、2020年9月から施行されているブラジルのLei Geral de Proteção de Dados（LGPD、法律第13,709/2018号）を遵守しています。",
    "zh": "LumenLingo为全球用户提供服务，包括巴西用户。作为拉丁美洲最大的市场，我们遵守巴西的《通用数据保护法》（LGPD，第13,709/2018号法律），该法于2020年9月生效。",
    "ar": "يخدم LumenLingo مستخدمين حول العالم، بما في ذلك في البرازيل. باعتبارها أكبر سوق في أمريكا اللاتينية، نلتزم بقانون حماية البيانات العامة البرازيلي (LGPD، القانون رقم 13,709/2018)، المعمول به منذ سبتمبر 2020.",
    "uk": "LumenLingo обслуговує користувачів по всьому світу, включаючи Бразилію. Як найбільший ринок Латинської Америки, ми дотримуємося бразильського закону Lei Geral de Proteção de Dados (LGPD, Закон № 13 709/2018), що діє з вересня 2020 року.",
}
T["brazilPrivacy.applicabilityHeading"] = {
    "pl": "Zastосоwanie",
    "de": "Anwendbarkeit",
    "es": "Aplicabilidad",
    "fr": "Applicabilité",
    "ja": "適用範囲",
    "zh": "适用性",
    "ar": "قابلية التطبيق",
    "uk": "Застосовність",
}
T["brazilPrivacy.applicabilityP1"] = {
    "pl": "LGPD ma zastosowanie do każdego przetwarzania danych osobowych prowadzonego w Brazylii, dotyczącego osób znajdujących się w Brazylii lub w przypadku gdy dane zostały zebrane w Brazylii. Nasze wielojęzyczne treści oraz zapisy na newsletter/listę oczekujących od brazylijskich użytkowników obejmują nasze przetwarzanie zakresem LGPD.",
    "de": "Die LGPD gilt für jede Verarbeitung personenbezogener Daten, die in Brasilien durchgeführt wird, Personen in Brasilien betrifft oder die Daten in Brasilien erhoben wurden. Unsere mehrsprachigen Inhalte und Newsletter-/Wartelisten-Anmeldungen brasilianischer Nutzer bringen unsere Verarbeitung in den Anwendungsbereich der LGPD.",
    "es": "La LGPD se aplica a cualquier tratamiento de datos personales realizado en Brasil, de personas ubicadas en Brasil, o cuando los datos fueron recopilados en Brasil. Nuestro contenido multilingüe y las suscripciones al boletín/lista de espera de usuarios brasileños sitúan nuestro tratamiento dentro del ámbito de la LGPD.",
    "fr": "La LGPD s'applique à tout traitement de données personnelles effectué au Brésil, concernant des personnes situées au Brésil, ou lorsque les données ont été collectées au Brésil. Notre contenu multilingue et les inscriptions à la newsletter/liste d'attente d'utilisateurs brésiliens placent notre traitement dans le champ d'application de la LGPD.",
    "ja": "LGPDは、ブラジルで行われる個人データの処理、ブラジルに所在する個人のデータ処理、またはブラジルでデータが収集された場合に適用されます。当社の多言語コンテンツおよびブラジルのユーザーからのニュースレター/ウェイトリスト登録により、当社の処理はLGPDの適用範囲内となります。",
    "zh": "LGPD适用于在巴西境内进行的任何个人数据处理、涉及位于巴西的个人的数据处理，或数据在巴西收集的情况。我们的多语言内容以及巴西用户的新闻通讯/等待名单注册使我们的处理属于LGPD的适用范围。",
    "ar": "ينطبق LGPD على أي معالجة لبيانات شخصية تتم في البرازيل، أو تتعلق بأفراد موجودين في البرازيل، أو عندما تم جمع البيانات في البرازيل. يضع المحتوى متعدد اللغات واشتراكات النشرة الإخبارية/قائمة الانتظار من المستخدمين البرازيليين معالجتنا ضمن نطاق LGPD.",
    "uk": "LGPD застосовується до будь-якої обробки персональних даних, що здійснюється в Бразилії, стосується осіб, що перебувають у Бразилії, або коли дані були зібрані в Бразилії. Наш багатомовний контент та підписки на розсилку/список очікування від бразильських користувачів ставлять нашу обробку в межі дії LGPD.",
}
T["brazilPrivacy.legalBasesHeading"] = {
    "pl": "Podstawy prawne przetwarzania",
    "de": "Rechtsgrundlagen für die Verarbeitung",
    "es": "Bases legales para el tratamiento",
    "fr": "Bases juridiques du traitement",
    "ja": "処理の法的根拠",
    "zh": "处理的法律依据",
    "ar": "الأسس القانونية للمعالجة",
    "uk": "Правові підстави для обробки",
}
T["brazilPrivacy.legalBasesP1"] = {
    "pl": "LGPD przewiduje dziesięć podstaw prawnych przetwarzania danych osobowych. Opieramy się na następujących:",
    "de": "Die LGPD sieht zehn Rechtsgrundlagen für die Verarbeitung personenbezogener Daten vor. Wir stützen uns auf die folgenden:",
    "es": "La LGPD establece diez bases legales para el tratamiento de datos personales. Nos basamos en las siguientes:",
    "fr": "La LGPD prévoit dix bases juridiques pour le traitement des données personnelles. Nous nous appuyons sur les suivantes :",
    "ja": "LGPDは個人データの処理について10の法的根拠を定めています。当社は以下に依拠しています：",
    "zh": "LGPD规定了十项处理个人数据的法律依据。我们依赖以下依据：",
    "ar": "يوفر LGPD عشرة أسس قانونية لمعالجة البيانات الشخصية. نعتمد على ما يلي:",
    "uk": "LGPD передбачає десять правових підстав для обробки персональних даних. Ми спираємося на наступні:",
}
T["brazilPrivacy.legalBasesLi1"] = {
    "pl": "<b>Zgoda</b> — uzyskujemy Twoją dobrowolną, świadomą i jednoznaczną zgodę na określone cele przetwarzania (np. zapis na newsletter, analityka przez Sentry)",
    "de": "<b>Einwilligung</b> — wir holen Ihre freie, informierte und eindeutige Einwilligung für bestimmte Verarbeitungszwecke ein (z.B. Newsletter-Anmeldung, Analytik über Sentry)",
    "es": "<b>Consentimiento</b> — obtenemos su consentimiento libre, informado e inequívoco para propósitos específicos de tratamiento (p. ej., suscripción al boletín, análisis a través de Sentry)",
    "fr": "<b>Consentement</b> — nous obtenons votre consentement libre, éclairé et sans ambiguïté pour des finalités de traitement spécifiques (ex. : inscription à la newsletter, analyses via Sentry)",
    "ja": "<b>同意</b> — 特定の処理目的（ニュースレター登録、Sentry経由の分析など）について、お客様の自由で情報に基づく明確な同意を取得します",
    "zh": "<b>同意</b> — 我们就特定处理目的（如新闻通讯注册、通过Sentry的分析）获取您的自由、知情和明确的同意",
    "ar": "<b>الموافقة</b> — نحصل على موافقتك الحرة والمستنيرة والصريحة لأغراض معالجة محددة (مثل الاشتراك في النشرة الإخبارية، التحليلات عبر Sentry)",
    "uk": "<b>Згода</b> — ми отримуємо вашу вільну, поінформовану та однозначну згоду для конкретних цілей обробки (наприклад, підписка на розсилку, аналітика через Sentry)",
}
T["brazilPrivacy.legalBasesLi2"] = {
    "pl": "<b>Wykonanie umowy</b> — przetwarzanie niezbędne do wykonania umowy o świadczenie usługi LumenLingo, której jesteś stroną",
    "de": "<b>Vertragserfüllung</b> — Verarbeitung, die für die Durchführung des LumenLingo-Dienstleistungsvertrags erforderlich ist, dessen Partei Sie sind",
    "es": "<b>Ejecución del contrato</b> — el tratamiento necesario para la ejecución del acuerdo de servicio de LumenLingo del que usted es parte",
    "fr": "<b>Exécution du contrat</b> — le traitement nécessaire à l'exécution de l'accord de service LumenLingo auquel vous êtes partie",
    "ja": "<b>契約の履行</b> — お客様が当事者であるLumenLingoサービス契約の履行に必要な処理",
    "zh": "<b>合同履行</b> — 履行您所参与的LumenLingo服务协议所必需的处理",
    "ar": "<b>تنفيذ العقد</b> — المعالجة اللازمة لتنفيذ اتفاقية خدمة LumenLingo التي أنت طرف فيها",
    "uk": "<b>Виконання договору</b> — обробка, необхідна для виконання угоди про надання послуг LumenLingo, стороною якої ви є",
}
T["brazilPrivacy.legalBasesLi3"] = {
    "pl": "<b>Prawnie uzasadniony interes</b> — przetwarzanie niezbędne do realizacji naszych prawnie uzasadnionych interesów lub interesów stron trzecich, z wyjątkiem sytuacji, gdy przeważają Twoje podstawowe prawa i wolności",
    "de": "<b>Berechtigte Interessen</b> — Verarbeitung, die für unsere berechtigten Interessen oder die Dritter erforderlich ist, außer wenn Ihre Grundrechte und -freiheiten überwiegen",
    "es": "<b>Intereses legítimos</b> — el tratamiento necesario para nuestros intereses legítimos o los de terceros, excepto cuando prevalezcan sus derechos y libertades fundamentales",
    "fr": "<b>Intérêts légitimes</b> — le traitement nécessaire à nos intérêts légitimes ou ceux de tiers, sauf lorsque vos droits et libertés fondamentaux prévalent",
    "ja": "<b>正当な利益</b> — お客様の基本的権利および自由が優先される場合を除き、当社または第三者の正当な利益に必要な処理",
    "zh": "<b>合法利益</b> — 为我们或第三方的合法利益所必需的处理，但您的基本权利和自由优先的情况除外",
    "ar": "<b>المصالح المشروعة</b> — المعالجة اللازمة لمصالحنا المشروعة أو مصالح أطراف ثالثة، باستثناء حالات تغلب حقوقك وحرياتك الأساسية",
    "uk": "<b>Законний інтерес</b> — обробка, необхідна для наших законних інтересів або інтересів третіх сторін, за винятком випадків, коли переважають ваші основоположні права та свободи",
}
T["brazilPrivacy.legalBasesLi4"] = {
    "pl": "<b>Zgodność z przepisami</b> — przetwarzanie niezbędne do wypełnienia naszych obowiązków prawnych lub regulacyjnych",
    "de": "<b>Gesetzliche Compliance</b> — Verarbeitung, die zur Erfüllung unserer gesetzlichen oder regulatorischen Verpflichtungen erforderlich ist",
    "es": "<b>Cumplimiento normativo</b> — el tratamiento necesario para cumplir con nuestras obligaciones legales o regulatorias",
    "fr": "<b>Conformité réglementaire</b> — le traitement nécessaire au respect de nos obligations légales ou réglementaires",
    "ja": "<b>規制遵守</b> — 当社の法的または規制上の義務を遵守するために必要な処理",
    "zh": "<b>法规合规</b> — 遵守我们法律或监管义务所必需的处理",
    "ar": "<b>الامتثال التنظيمي</b> — المعالجة اللازمة للامتثال لالتزاماتنا القانونية أو التنظيمية",
    "uk": "<b>Регуляторна відповідність</b> — обробка, необхідна для виконання наших юридичних або регуляторних зобов'язань",
}
T["brazilPrivacy.rightsHeading"] = {
    "pl": "Twoje prawa wynikające z LGPD",
    "de": "Ihre Rechte nach der LGPD",
    "es": "Sus derechos bajo la LGPD",
    "fr": "Vos droits en vertu de la LGPD",
    "ja": "LGPDに基づくお客様の権利",
    "zh": "您在LGPD下的权利",
    "ar": "حقوقك بموجب LGPD",
    "uk": "Ваші права за LGPD",
}
T["brazilPrivacy.rightsP1"] = {
    "pl": "Jako osoba, której dane dotyczą, na podstawie LGPD masz następujące prawa (art. 18 LGPD):",
    "de": "Als betroffene Person nach der LGPD haben Sie die folgenden Rechte (LGPD Art. 18):",
    "es": "Como titular de datos bajo la LGPD, usted tiene los siguientes derechos (Art. 18 de la LGPD):",
    "fr": "En tant que personne concernée au titre de la LGPD, vous disposez des droits suivants (Art. 18 de la LGPD) :",
    "ja": "LGPDに基づくデータ主体として、以下の権利を有します（LGPD第18条）：",
    "zh": "作为LGPD下的数据主体，您拥有以下权利（LGPD第18条）：",
    "ar": "بصفتك صاحب بيانات بموجب LGPD، لديك الحقوق التالية (المادة 18 من LGPD):",
    "uk": "Як суб'єкт даних за LGPD, ви маєте наступні права (стаття 18 LGPD):",
}
T["brazilPrivacy.rightsLi1"] = {
    "pl": "<b>Potwierdzenie przetwarzania</b> — prawo do potwierdzenia, czy przetwarzamy Twoje dane osobowe",
    "de": "<b>Bestätigung der Verarbeitung</b> — das Recht auf Bestätigung, ob wir Ihre personenbezogenen Daten verarbeiten",
    "es": "<b>Confirmación del tratamiento</b> — el derecho a confirmar si procesamos sus datos personales",
    "fr": "<b>Confirmation du traitement</b> — le droit de confirmer si nous traitons vos données personnelles",
    "ja": "<b>処理の確認</b> — 当社がお客様の個人データを処理しているかどうかを確認する権利",
    "zh": "<b>确认处理</b> — 确认我们是否处理您个人数据的权利",
    "ar": "<b>تأكيد المعالجة</b> — الحق في تأكيد ما إذا كنا نعالج بياناتك الشخصية",
    "uk": "<b>Підтвердження обробки</b> — право підтвердити, чи обробляємо ми ваші персональні дані",
}
T["brazilPrivacy.rightsLi2"] = {
    "pl": "<b>Dostęp</b> — prawo dostępu do Twoich danych osobowych, którymi dysponujemy",
    "de": "<b>Zugang</b> — das Recht auf Zugang zu Ihren bei uns gespeicherten personenbezogenen Daten",
    "es": "<b>Acceso</b> — el derecho a acceder a sus datos personales en nuestro poder",
    "fr": "<b>Accès</b> — le droit d'accéder à vos données personnelles détenues par nous",
    "ja": "<b>アクセス</b> — 当社が保有するお客様の個人データにアクセスする権利",
    "zh": "<b>访问</b> — 访问我们所持有的您的个人数据的权利",
    "ar": "<b>الوصول</b> — الحق في الوصول إلى بياناتك الشخصية التي بحوزتنا",
    "uk": "<b>Доступ</b> — право доступу до ваших персональних даних, що знаходяться у нас",
}
T["brazilPrivacy.rightsLi3"] = {
    "pl": "<b>Sprostowanie</b> — prawo do poprawiania niekompletnych, niedokładnych lub nieaktualnych danych osobowych",
    "de": "<b>Berichtigung</b> — das Recht auf Berichtigung unvollständiger, ungenauer oder veralteter personenbezogener Daten",
    "es": "<b>Corrección</b> — el derecho a corregir datos personales incompletos, inexactos o desactualizados",
    "fr": "<b>Correction</b> — le droit de corriger les données personnelles incomplètes, inexactes ou obsolètes",
    "ja": "<b>訂正</b> — 不完全、不正確、または古い個人データを訂正する権利",
    "zh": "<b>更正</b> — 更正不完整、不准确或过时的个人数据的权利",
    "ar": "<b>التصحيح</b> — الحق في تصحيح البيانات الشخصية غير المكتملة أو غير الدقيقة أو القديمة",
    "uk": "<b>Виправлення</b> — право на виправлення неповних, неточних або застарілих персональних даних",
}
T["brazilPrivacy.rightsLi4"] = {
    "pl": "<b>Anonimizacja, blokowanie lub usunięcie</b> — prawo do żądania anonimizacji, zablokowania lub usunięcia zbędnych lub nadmiernych danych, lub danych przetwarzanych niezgodnie z LGPD",
    "de": "<b>Anonymisierung, Sperrung oder Löschung</b> — das Recht, die Anonymisierung, Sperrung oder Löschung unnötiger oder übermäßiger Daten oder von Daten, die nicht LGPD-konform verarbeitet werden, zu verlangen",
    "es": "<b>Anonimización, bloqueo o eliminación</b> — el derecho a solicitar la anonimización, bloqueo o eliminación de datos innecesarios o excesivos, o datos tratados de forma no conforme con la LGPD",
    "fr": "<b>Anonymisation, blocage ou suppression</b> — le droit de demander l'anonymisation, le blocage ou la suppression de données inutiles ou excessives, ou de données traitées en non-conformité avec la LGPD",
    "ja": "<b>匿名化、ブロックまたは削除</b> — 不要または過剰なデータ、またはLGPDに違反して処理されたデータの匿名化、ブロック、または削除を要求する権利",
    "zh": "<b>匿名化、封锁或删除</b> — 要求匿名化、封锁或删除不必要或过度的数据，或不符合LGPD处理的数据的权利",
    "ar": "<b>إخفاء الهوية أو الحظر أو الحذف</b> — الحق في طلب إخفاء هوية أو حظر أو حذف البيانات غير الضرورية أو المفرطة، أو البيانات المعالجة بشكل غير متوافق مع LGPD",
    "uk": "<b>Анонімізація, блокування або видалення</b> — право вимагати анонімізації, блокування або видалення непотрібних або надлишкових даних, або даних, оброблених з порушенням LGPD",
}
T["brazilPrivacy.rightsLi5"] = {
    "pl": "<b>Przenoszenie danych</b> — prawo do przeniesienia Twoich danych osobowych do innego dostawcy usług lub produktów",
    "de": "<b>Datenportabilität</b> — das Recht auf Übertragbarkeit Ihrer personenbezogenen Daten an einen anderen Dienst- oder Produktanbieter",
    "es": "<b>Portabilidad de datos</b> — el derecho a la portabilidad de sus datos personales a otro proveedor de servicios o productos",
    "fr": "<b>Portabilité des données</b> — le droit à la portabilité de vos données personnelles vers un autre fournisseur de services ou de produits",
    "ja": "<b>データポータビリティ</b> — 個人データを別のサービスまたは製品プロバイダーに移行する権利",
    "zh": "<b>数据可携性</b> — 将您的个人数据转移到其他服务或产品提供商的权利",
    "ar": "<b>قابلية نقل البيانات</b> — الحق في نقل بياناتك الشخصية إلى مزود خدمة أو منتج آخر",
    "uk": "<b>Портативність даних</b> — право на перенесення ваших персональних даних до іншого постачальника послуг або продуктів",
}
T["brazilPrivacy.rightsLi6"] = {
    "pl": "<b>Usunięcie danych przetwarzanych na podstawie zgody</b> — prawo do żądania usunięcia danych osobowych przetwarzanych na podstawie Twojej zgody",
    "de": "<b>Löschung von einwilligungsbasierten Daten</b> — das Recht, die Löschung personenbezogener Daten zu verlangen, die auf Grundlage Ihrer Einwilligung verarbeitet werden",
    "es": "<b>Eliminación de datos procesados con consentimiento</b> — el derecho a solicitar la eliminación de datos personales procesados sobre la base de su consentimiento",
    "fr": "<b>Suppression des données traitées sur la base du consentement</b> — le droit de demander la suppression des données personnelles traitées sur la base de votre consentement",
    "ja": "<b>同意に基づいて処理されたデータの削除</b> — お客様の同意に基づいて処理された個人データの削除を要求する権利",
    "zh": "<b>删除基于同意处理的数据</b> — 要求删除基于您同意处理的个人数据的权利",
    "ar": "<b>حذف البيانات المعالجة بالموافقة</b> — الحق في طلب حذف البيانات الشخصية المعالجة بناءً على موافقتك",
    "uk": "<b>Видалення даних, оброблених на підставі згоди</b> — право вимагати видалення персональних даних, оброблених на підставі вашої згоди",
}
T["brazilPrivacy.rightsLi7"] = {
    "pl": "<b>Informacja o udostępnionych danych</b> — prawo do informacji o podmiotach publicznych i prywatnych, którym udostępniliśmy Twoje dane",
    "de": "<b>Informationen über geteilte Daten</b> — das Recht auf Informationen über öffentliche und private Stellen, mit denen wir Ihre Daten geteilt haben",
    "es": "<b>Información sobre datos compartidos</b> — el derecho a información sobre las entidades públicas y privadas con las que hemos compartido sus datos",
    "fr": "<b>Informations sur les données partagées</b> — le droit à l'information sur les entités publiques et privées avec lesquelles nous avons partagé vos données",
    "ja": "<b>共有データに関する情報</b> — 当社がデータを共有した公的機関および民間機関に関する情報を得る権利",
    "zh": "<b>共享数据信息</b> — 了解我们与之共享您数据的公共和私人实体的权利",
    "ar": "<b>معلومات عن البيانات المشتركة</b> — الحق في معرفة الجهات العامة والخاصة التي شاركنا معها بياناتك",
    "uk": "<b>Інформація про передані дані</b> — право на інформацію про публічні та приватні організації, яким ми передали ваші дані",
}
T["brazilPrivacy.rightsLi8"] = {
    "pl": "<b>Informacja o odmowie zgody</b> — prawo do informacji o możliwości i konsekwencjach nieudzielenia zgody",
    "de": "<b>Informationen über Einwilligungsverweigerung</b> — das Recht auf Informationen über die Möglichkeit und Folgen der Verweigerung der Einwilligung",
    "es": "<b>Información sobre denegación de consentimiento</b> — el derecho a información sobre la posibilidad y consecuencias de no proporcionar consentimiento",
    "fr": "<b>Informations sur le refus de consentement</b> — le droit à l'information sur la possibilité et les conséquences du refus de consentement",
    "ja": "<b>同意拒否に関する情報</b> — 同意を提供しない可能性とその結果に関する情報を得る権利",
    "zh": "<b>拒绝同意信息</b> — 了解不提供同意的可能性和后果的权利",
    "ar": "<b>معلومات عن رفض الموافقة</b> — الحق في معرفة إمكانية وعواقب عدم تقديم الموافقة",
    "uk": "<b>Інформація про відмову від згоди</b> — право на інформацію про можливість та наслідки ненадання згоди",
}
T["brazilPrivacy.rightsLi9"] = {
    "pl": "<b>Cofnięcie zgody</b> — prawo do cofnięcia zgody w dowolnym momencie poprzez bezpłatną i łatwą procedurę",
    "de": "<b>Widerruf der Einwilligung</b> — das Recht, Ihre Einwilligung jederzeit über ein kostenloses und einfaches Verfahren zu widerrufen",
    "es": "<b>Revocación del consentimiento</b> — el derecho a revocar su consentimiento en cualquier momento, mediante un procedimiento gratuito y sencillo",
    "fr": "<b>Révocation du consentement</b> — le droit de révoquer votre consentement à tout moment, via une procédure gratuite et simple",
    "ja": "<b>同意の撤回</b> — 無料で簡単な手続きにより、いつでも同意を撤回する権利",
    "zh": "<b>撤回同意</b> — 随时通过免费且便捷的程序撤回同意的权利",
    "ar": "<b>سحب الموافقة</b> — الحق في سحب موافقتك في أي وقت، عبر إجراء مجاني وسهل",
    "uk": "<b>Відкликання згоди</b> — право відкликати свою згоду в будь-який час через безкоштовну та просту процедуру",
}
T["brazilPrivacy.rightsP2"] = {
    "pl": "Aby skorzystać z któregokolwiek z tych praw, prosimy o kontakt pod adresem <emailLink>legal@lumenlingo.com</emailLink>. Odpowiemy bez zbędnej zwłoki.",
    "de": "Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter <emailLink>legal@lumenlingo.com</emailLink>. Wir werden ohne unangemessene Verzögerung antworten.",
    "es": "Para ejercer cualquiera de estos derechos, contáctenos en <emailLink>legal@lumenlingo.com</emailLink>. Responderemos sin demora injustificada.",
    "fr": "Pour exercer l'un de ces droits, veuillez nous contacter à <emailLink>legal@lumenlingo.com</emailLink>. Nous répondrons dans les meilleurs délais.",
    "ja": "これらの権利を行使するには、<emailLink>legal@lumenlingo.com</emailLink>までご連絡ください。不当な遅延なく対応いたします。",
    "zh": "如需行使上述任何权利，请联系<emailLink>legal@lumenlingo.com</emailLink>。我们将及时回复。",
    "ar": "لممارسة أي من هذه الحقوق، يرجى التواصل معنا على <emailLink>legal@lumenlingo.com</emailLink>. سنستجيب دون تأخير غير مبرر.",
    "uk": "Щоб скористатися будь-яким із цих прав, зверніться до нас за адресою <emailLink>legal@lumenlingo.com</emailLink>. Ми відповімо без невиправданої затримки.",
}
T["brazilPrivacy.crossBorderHeading"] = {
    "pl": "Międzynarodowe transfery danych",
    "de": "Internationale Datenübermittlungen",
    "es": "Transferencias internacionales de datos",
    "fr": "Transferts internationaux de données",
    "ja": "国際データ転送",
    "zh": "国际数据传输",
    "ar": "نقل البيانات الدولي",
    "uk": "Міжнародні передачі даних",
}
T["brazilPrivacy.crossBorderP1"] = {
    "pl": "Twoje dane osobowe mogą być przekazywane poza Brazylię. Na mocy LGPD zapewniamy, że międzynarodowe transfery są przeprowadzane z odpowiednimi zabezpieczeniami:",
    "de": "Ihre personenbezogenen Daten können außerhalb Brasiliens übertragen werden. Gemäß der LGPD stellen wir sicher, dass internationale Übertragungen mit angemessenen Schutzmaßnahmen durchgeführt werden:",
    "es": "Sus datos personales pueden transferirse fuera de Brasil. Bajo la LGPD, garantizamos que las transferencias internacionales se realicen con las salvaguardias apropiadas:",
    "fr": "Vos données personnelles peuvent être transférées en dehors du Brésil. En vertu de la LGPD, nous veillons à ce que les transferts internationaux soient effectués avec des garanties appropriées :",
    "ja": "お客様の個人データはブラジル国外に転送される場合があります。LGPDに基づき、国際転送が適切な保護措置の下で行われることを確保しています：",
    "zh": "您的个人数据可能会被传输到巴西境外。根据LGPD，我们确保国际传输在适当的保障措施下进行：",
    "ar": "قد يتم نقل بياناتك الشخصية خارج البرازيل. بموجب LGPD، نضمن أن عمليات النقل الدولية تتم مع الضمانات المناسبة:",
    "uk": "Ваші персональні дані можуть передаватися за межі Бразилії. Відповідно до LGPD, ми забезпечуємо здійснення міжнародних передач з належними гарантіями:",
}
T["brazilPrivacy.crossBorderLi1"] = {
    "pl": "<b>Wielka Brytania</b> — Lumenshore Limited ma siedzibę w Wielkiej Brytanii, która utrzymuje standardy ochrony danych. Opieramy się na standardowych klauzulach umownych jako mechanizmie transferu",
    "de": "<b>Vereinigtes Königreich</b> — Lumenshore Limited hat seinen Sitz im Vereinigten Königreich, das Datenschutzstandards aufrechterhält. Wir stützen uns auf Standardvertragsklauseln als Übertragungsmechanismus",
    "es": "<b>Reino Unido</b> — Lumenshore Limited tiene su sede en el Reino Unido, que mantiene estándares de protección de datos. Nos basamos en cláusulas contractuales estándar como mecanismo de transferencia",
    "fr": "<b>Royaume-Uni</b> — Lumenshore Limited est basée au Royaume-Uni, qui maintient des normes de protection des données. Nous nous appuyons sur des clauses contractuelles types comme mécanisme de transfert",
    "ja": "<b>英国</b> — Lumenshore Limitedはデータ保護基準を維持する英国に拠点を置いています。転送メカニズムとして標準契約条項に依拠しています",
    "zh": "<b>英国</b> — Lumenshore Limited位于维持数据保护标准的英国。我们依赖标准合同条款作为传输机制",
    "ar": "<b>المملكة المتحدة</b> — يقع مقر Lumenshore Limited في المملكة المتحدة، التي تحافظ على معايير حماية البيانات. نعتمد على البنود التعاقدية القياسية كآلية للنقل",
    "uk": "<b>Велика Британія</b> — Lumenshore Limited знаходиться у Великобританії, яка підтримує стандарти захисту даних. Ми покладаємося на стандартні договірні положення як механізм передачі",
}
T["brazilPrivacy.crossBorderLi2"] = {
    "pl": "<b>Stany Zjednoczone (Vercel, Sentry)</b> — dane hostingu strony i monitoringu błędów są przetwarzane w USA na podstawie standardowych klauzul umownych",
    "de": "<b>Vereinigte Staaten (Vercel, Sentry)</b> — Website-Hosting- und Fehlerüberwachungsdaten werden in den USA unter Standardvertragsklauseln verarbeitet",
    "es": "<b>Estados Unidos (Vercel, Sentry)</b> — los datos de alojamiento web y monitoreo de errores se procesan en EE.UU. bajo cláusulas contractuales estándar",
    "fr": "<b>États-Unis (Vercel, Sentry)</b> — les données d'hébergement web et de surveillance des erreurs sont traitées aux États-Unis sous clauses contractuelles types",
    "ja": "<b>米国（Vercel、Sentry）</b> — ウェブサイトホスティングおよびエラーモニタリングデータは標準契約条項に基づいて米国で処理されます",
    "zh": "<b>美国（Vercel、Sentry）</b> — 网站托管和错误监控数据在标准合同条款下在美国处理",
    "ar": "<b>الولايات المتحدة (Vercel، Sentry)</b> — تتم معالجة بيانات استضافة الموقع ومراقبة الأخطاء في الولايات المتحدة بموجب البنود التعاقدية القياسية",
    "uk": "<b>Сполучені Штати (Vercel, Sentry)</b> — дані хостингу сайту та моніторингу помилок обробляються у США згідно зі стандартними договірними положеннями",
}
T["brazilPrivacy.crossBorderP2"] = {
    "pl": "ANPD (Autoridade Nacional de Proteção de Dados) może wydawać decyzje o adekwatności dla poszczególnych krajów. Monitorujemy wytyczne ANPD i odpowiednio aktualizujemy nasze mechanizmy transferu.",
    "de": "Die ANPD (Autoridade Nacional de Proteção de Dados) kann Angemessenheitsentscheidungen für bestimmte Länder treffen. Wir überwachen die ANPD-Leitlinien und aktualisieren unsere Übertragungsmechanismen entsprechend.",
    "es": "La ANPD (Autoridade Nacional de Proteção de Dados) puede emitir determinaciones de adecuación para países específicos. Supervisamos las directrices de la ANPD y actualizamos nuestros mecanismos de transferencia en consecuencia.",
    "fr": "L'ANPD (Autoridade Nacional de Proteção de Dados) peut émettre des décisions d'adéquation pour des pays spécifiques. Nous surveillons les directives de l'ANPD et mettons à jour nos mécanismes de transfert en conséquence.",
    "ja": "ANPD（Autoridade Nacional de Proteção de Dados）は特定の国に対する十分性認定を発行する場合があります。当社はANPDのガイダンスを監視し、それに応じて転送メカニズムを更新します。",
    "zh": "ANPD（国家数据保护局）可能会对特定国家做出充分性认定。我们监控ANPD的指导并相应更新我们的传输机制。",
    "ar": "قد تصدر ANPD (الهيئة الوطنية لحماية البيانات) قرارات كفاية لدول محددة. نراقب إرشادات ANPD ونحدث آليات النقل لدينا وفقًا لذلك.",
    "uk": "ANPD (Autoridade Nacional de Proteção de Dados) може видавати рішення про адекватність для конкретних країн. Ми відстежуємо рекомендації ANPD та відповідно оновлюємо наші механізми передачі.",
}
T["brazilPrivacy.anpdHeading"] = {
    "pl": "ANPD — Autoridade Nacional de Proteção de Dados",
    "de": "ANPD — Autoridade Nacional de Proteção de Dados",
    "es": "ANPD — Autoridade Nacional de Proteção de Dados",
    "fr": "ANPD — Autoridade Nacional de Proteção de Dados",
    "ja": "ANPD — Autoridade Nacional de Proteção de Dados",
    "zh": "ANPD — 国家数据保护局",
    "ar": "ANPD — الهيئة الوطنية لحماية البيانات",
    "uk": "ANPD — Autoridade Nacional de Proteção de Dados",
}
T["brazilPrivacy.anpdP1"] = {
    "pl": "Jeśli nie jesteś zadowolony ze sposobu, w jaki obchodzimy się z Twoimi danymi osobowymi, możesz złożyć skargę do brazylijskiego Krajowego Urzędu Ochrony Danych (ANPD):",
    "de": "Wenn Sie mit unserer Handhabung Ihrer personenbezogenen Daten unzufrieden sind, können Sie eine Beschwerde bei Brasiliens Nationaler Datenschutzbehörde (ANPD) einreichen:",
    "es": "Si no está satisfecho con nuestro manejo de sus datos personales, puede presentar una queja ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD):",
    "fr": "Si vous n'êtes pas satisfait de notre traitement de vos données personnelles, vous pouvez déposer une plainte auprès de l'Autorité nationale de protection des données du Brésil (ANPD) :",
    "ja": "当社の個人データの取り扱いにご不満がある場合は、ブラジルの国家データ保護機関（ANPD）に苦情を申し立てることができます：",
    "zh": "如果您对我们处理个人数据的方式不满意，可以向巴西国家数据保护局（ANPD）投诉：",
    "ar": "إذا لم تكن راضيًا عن تعاملنا مع بياناتك الشخصية، يمكنك تقديم شكوى إلى هيئة حماية البيانات الوطنية البرازيلية (ANPD):",
    "uk": "Якщо ви незадоволені тим, як ми обробляємо ваші персональні дані, ви можете подати скаргу до Національного органу з захисту даних Бразилії (ANPD):",
}
T["brazilPrivacy.anpdLi1"] = {
    "pl": "<b>Strona internetowa:</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "de": "<b>Website:</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "es": "<b>Sitio web:</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "fr": "<b>Site web :</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "ja": "<b>ウェブサイト：</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "zh": "<b>网站：</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "ar": "<b>الموقع الإلكتروني:</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
    "uk": "<b>Веб-сайт:</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",
}
T["brazilPrivacy.anpdLi2"] = {
    "pl": "<b>E-mail:</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "de": "<b>E-Mail:</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "es": "<b>Correo electrónico:</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "fr": "<b>E-mail :</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "ja": "<b>メール：</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "zh": "<b>电子邮件：</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "ar": "<b>البريد الإلكتروني:</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
    "uk": "<b>Електронна пошта:</b> <anpdEmail>encarregado@anpd.gov.br</anpdEmail>",
}

# ── euRepresentative ──────────────────────────────────────────────────────────
T["euRepresentative.heading"] = {
    "pl": "Przedstawiciel w UE (art. 27 RODO)",
    "de": "EU-Vertreter (DSGVO Art. 27)",
    "es": "Representante en la UE (Art. 27 del RGPD)",
    "fr": "Représentant dans l'UE (Art. 27 du RGPD)",
    "ja": "EU代表者（GDPR第27条）",
    "zh": "EU代表（GDPR第27条）",
    "ar": "ممثل الاتحاد الأوروبي (المادة 27 من GDPR)",
    "uk": "Представник у ЄС (стаття 27 GDPR)",
}
T["euRepresentative.assessment1"] = {
    "pl": "Lumenshore Limited jest zarejestrowana w Anglii i Walii, a zatem ma siedzibę poza Europejskim Obszarem Gospodarczym (EOG). W przypadku gdy Lumenshore oferuje swoje Usługi osobom w EOG lub monitoruje ich zachowanie na terenie EOG, może podlegać obowiązkowi wyznaczenia przedstawiciela w UE na mocy art. 27 RODO.",
    "de": "Lumenshore Limited ist in England und Wales eingetragen und hat somit seinen Sitz außerhalb des Europäischen Wirtschaftsraums (EWR). Soweit Lumenshore seine Dienste Personen im EWR anbietet oder deren Verhalten im EWR überwacht, kann es der Pflicht zur Benennung eines EU-Vertreters nach DSGVO Art. 27 unterliegen.",
    "es": "Lumenshore Limited está constituida en Inglaterra y Gales y, por tanto, está establecida fuera del Espacio Económico Europeo (EEE). Cuando Lumenshore ofrece su Servicio a personas en el EEE o supervisa su comportamiento dentro del EEE, puede estar sujeta a la obligación de designar un representante en la UE en virtud del Art. 27 del RGPD.",
    "fr": "Lumenshore Limited est constituée en Angleterre et au Pays de Galles et est donc établie en dehors de l'Espace économique européen (EEE). Lorsque Lumenshore propose son Service à des personnes dans l'EEE ou surveille leur comportement au sein de l'EEE, elle peut être soumise à l'obligation de désigner un représentant dans l'UE en vertu de l'Art. 27 du RGPD.",
    "ja": "Lumenshore Limitedはイングランドおよびウェールズで登記されているため、欧州経済領域（EEA）外に設立されています。LumenshoreがEEA内の個人にサービスを提供する場合、またはEEA内での行動を監視する場合、GDPR第27条に基づくEU代表者の指定義務の対象となる場合があります。",
    "zh": "Lumenshore Limited在英格兰和威尔士注册成立，因此位于欧洲经济区（EEA）之外。当Lumenshore向EEA内的个人提供服务或监控其在EEA内的行为时，可能需要根据GDPR第27条指定EU代表。",
    "ar": "تأسست Lumenshore Limited في إنجلترا وويلز، وبالتالي فهي مؤسسة خارج المنطقة الاقتصادية الأوروبية (EEA). عندما تقدم Lumenshore خدماتها للأفراد في المنطقة الاقتصادية الأوروبية أو تراقب سلوكهم داخل المنطقة، قد تخضع لالتزام تعيين ممثل في الاتحاد الأوروبي بموجب المادة 27 من GDPR.",
    "uk": "Lumenshore Limited зареєстрована в Англії та Уельсі і тому знаходиться за межами Європейської економічної зони (ЄЕЗ). Якщо Lumenshore пропонує свої Послуги особам у ЄЕЗ або відстежує їхню поведінку в межах ЄЕЗ, вона може підлягати обов'язку призначити представника в ЄС відповідно до ст. 27 GDPR.",
}
T["euRepresentative.assessment2"] = {
    "pl": "LumenLingo przetwarza minimalne dane osobowe i nie prowadzi systematycznego monitorowania zachowań osób z UE. Algorytmy uczenia się aplikacji działają lokalnie na urządzeniach użytkowników i nie obejmują profilowania ani śledzenia po stronie serwera.",
    "de": "LumenLingo verarbeitet minimale personenbezogene Daten und überwacht nicht systematisch das Verhalten von EU-Personen. Die Lernalgorithmen der App arbeiten lokal auf den Geräten der Nutzer und beinhalten kein serverseitiges Profiling oder Tracking.",
    "es": "LumenLingo procesa datos personales mínimos y no supervisa sistemáticamente el comportamiento de personas con sede en la UE. Los algoritmos de aprendizaje de la aplicación operan localmente en los dispositivos de los usuarios y no implican perfilado ni seguimiento del lado del servidor.",
    "fr": "LumenLingo traite des données personnelles minimales et ne surveille pas systématiquement le comportement des personnes basées dans l'UE. Les algorithmes d'apprentissage de l'application fonctionnent localement sur les appareils des utilisateurs et n'impliquent pas de profilage ou suivi côté serveur.",
    "ja": "LumenLingoは最小限の個人データを処理し、EU在住者の行動を体系的に監視していません。アプリの学習アルゴリズムはユーザーのデバイス上でローカルに動作し、サーバーサイドのプロファイリングやトラッキングは含まれません。",
    "zh": "LumenLingo处理最少的个人数据，不系统性地监控EU居民的行为。应用的学习算法在用户设备上本地运行，不涉及服务器端的画像分析或跟踪。",
    "ar": "يعالج LumenLingo الحد الأدنى من البيانات الشخصية ولا يراقب بشكل منهجي سلوك الأفراد المقيمين في الاتحاد الأوروبي. تعمل خوارزميات التعلم في التطبيق محليًا على أجهزة المستخدمين ولا تتضمن تحليل سلوك أو تتبع من جانب الخادم.",
    "uk": "LumenLingo обробляє мінімальні персональні дані та не здійснює систематичного моніторингу поведінки осіб з ЄС. Алгоритми навчання додатку працюють локально на пристроях користувачів і не передбачають серверного профілювання чи відстеження.",
}
T["euRepresentative.assessment3"] = {
    "pl": "Lumenshore oceniła swoją działalność przetwarzania danych i ustaliła, że biorąc pod uwagę obecny zakres i charakter przetwarzania danych, wyznaczenie przedstawiciela w UE na mocy art. 27 nie jest obecnie obowiązkowe. Jednak w ramach dobrej praktyki i przejrzystości Lumenshore dobrowolnie wyznaczyła następujący punkt kontaktowy dla zapytań dotyczących ochrony danych w UE:",
    "de": "Lumenshore hat seine Verarbeitungstätigkeiten bewertet und festgestellt, dass angesichts des aktuellen Umfangs und der Art der Datenverarbeitung die Benennung eines EU-Vertreters nach Art. 27 derzeit nicht zwingend erforderlich ist. Jedoch hat Lumenshore als Best Practice und im Sinne der Transparenz freiwillig den folgenden Kontaktpunkt für EU-Datenschutzanfragen benannt:",
    "es": "Lumenshore ha evaluado sus actividades de tratamiento y ha determinado que, dado el alcance y naturaleza actuales del procesamiento de datos, la designación de un representante en la UE conforme al Art. 27 no es actualmente obligatoria. Sin embargo, como buena práctica y transparencia, Lumenshore ha designado voluntariamente el siguiente punto de contacto para consultas de protección de datos en la UE:",
    "fr": "Lumenshore a évalué ses activités de traitement et a déterminé que, compte tenu de la portée et de la nature actuelles du traitement des données, la désignation d'un représentant dans l'UE en vertu de l'Art. 27 n'est actuellement pas obligatoire. Toutefois, par souci de bonne pratique et de transparence, Lumenshore a volontairement désigné le point de contact suivant pour les demandes de protection des données dans l'UE :",
    "ja": "Lumenshoreは処理活動を評価し、現在のデータ処理の範囲と性質を考慮すると、第27条に基づくEU代表者の指定は現時点では義務ではないと判断しました。ただし、良好な慣行と透明性の観点から、LumenshoreはEUのデータ保護に関する問い合わせのために以下の連絡先を自主的に指定しました：",
    "zh": "Lumenshore已评估其处理活动，并确定鉴于当前数据处理的范围和性质，根据第27条指定EU代表目前并非强制性要求。然而，作为良好实践和透明度的体现，Lumenshore自愿指定了以下EU数据保护咨询联系方式：",
    "ar": "قامت Lumenshore بتقييم أنشطة المعالجة الخاصة بها وحددت أنه بالنظر إلى النطاق والطبيعة الحالية لمعالجة البيانات، فإن تعيين ممثل في الاتحاد الأوروبي بموجب المادة 27 ليس إلزاميًا حاليًا. ومع ذلك، كممارسة جيدة وشفافية، عينت Lumenshore طوعيًا نقطة الاتصال التالية لاستفسارات حماية البيانات في الاتحاد الأوروبي:",
    "uk": "Lumenshore оцінила свою діяльність з обробки даних і визначила, що з огляду на поточний обсяг і характер обробки даних, призначення представника в ЄС за ст. 27 наразі не є обов'язковим. Однак, як належна практика та прозорість, Lumenshore добровільно призначила наступну контактну точку для запитів щодо захисту даних у ЄС:",
}
T["euRepresentative.contact1"] = {
    "pl": "W sprawie zapytań dotyczących ochrony danych od osób z UE lub organów nadzorczych:",
    "de": "Für Datenschutzanfragen von EU-Personen oder Aufsichtsbehörden:",
    "es": "Para consultas de protección de datos de personas con sede en la UE o autoridades de supervisión:",
    "fr": "Pour les demandes de protection des données de personnes basées dans l'UE ou d'autorités de contrôle :",
    "ja": "EU在住者または監督機関からのデータ保護に関するお問い合わせ：",
    "zh": "如有来自EU居民或监管机构的数据保护咨询：",
    "ar": "لاستفسارات حماية البيانات من الأفراد المقيمين في الاتحاد الأوروبي أو السلطات الإشرافية:",
    "uk": "Для запитів щодо захисту даних від осіб з ЄС або наглядових органів:",
}
T["euRepresentative.contact2"] = {
    "pl": "Lumenshore Limited, legal@lumenlingo.com",
    "de": "Lumenshore Limited, legal@lumenlingo.com",
    "es": "Lumenshore Limited, legal@lumenlingo.com",
    "fr": "Lumenshore Limited, legal@lumenlingo.com",
    "ja": "Lumenshore Limited, legal@lumenlingo.com",
    "zh": "Lumenshore Limited, legal@lumenlingo.com",
    "ar": "Lumenshore Limited, legal@lumenlingo.com",
    "uk": "Lumenshore Limited, legal@lumenlingo.com",
}
T["euRepresentative.contact3"] = {
    "pl": "Lumenshore będzie okresowo weryfikować tę ocenę i formalnie wyznaczy przedstawiciela w UE na mocy art. 27 RODO, jeśli będzie to wymagane zmianami w działalności przetwarzania, obowiązującymi wytycznymi lub wymogami regulacyjnymi.",
    "de": "Lumenshore wird diese Bewertung regelmäßig überprüfen und einen EU-Vertreter nach DSGVO Art. 27 formell benennen, wenn dies aufgrund von Änderungen der Verarbeitungstätigkeiten, geltender Leitlinien oder regulatorischer Anforderungen erforderlich wird.",
    "es": "Lumenshore revisará esta evaluación periódicamente y designará formalmente un representante en la UE conforme al Art. 27 del RGPD si lo requieren cambios en las actividades de tratamiento, directrices aplicables o requisitos regulatorios.",
    "fr": "Lumenshore réexaminera cette évaluation périodiquement et désignera formellement un représentant dans l'UE en vertu de l'Art. 27 du RGPD si les changements dans les activités de traitement, les directives applicables ou les exigences réglementaires l'exigent.",
    "ja": "Lumenshoreはこの評価を定期的に見直し、処理活動の変更、適用されるガイダンス、または規制要件によって必要となった場合、GDPR第27条に基づくEU代表者を正式に任命します。",
    "zh": "Lumenshore将定期审查此评估，并在处理活动变更、适用指南或监管要求需要时，正式根据GDPR第27条指定EU代表。",
    "ar": "ستراجع Lumenshore هذا التقييم بشكل دوري وستعين رسميًا ممثلاً في الاتحاد الأوروبي بموجب المادة 27 من GDPR إذا تطلب ذلك تغييرات في أنشطة المعالجة أو الإرشادات المعمول بها أو المتطلبات التنظيمية.",
    "uk": "Lumenshore буде періодично переглядати цю оцінку та офіційно призначить представника в ЄС відповідно до ст. 27 GDPR, якщо це буде вимагатися змінами в діяльності з обробки, чинними рекомендаціями або регуляторними вимогами.",
}
T["euRepresentative.supervisory1"] = {
    "pl": "Osoby z UE mają prawo złożyć skargę do swojego lokalnego organu nadzorczego ds. ochrony danych. Lista organów nadzorczych EOG jest dostępna na stronie Europejskiej Rady Ochrony Danych.",
    "de": "EU-Personen haben das Recht, eine Beschwerde bei ihrer lokalen Datenschutzaufsichtsbehörde einzureichen. Eine Liste der EWR-Aufsichtsbehörden ist auf der Website des Europäischen Datenschutzausschusses verfügbar.",
    "es": "Las personas con sede en la UE tienen el derecho de presentar una queja ante su autoridad de supervisión de protección de datos local. Una lista de autoridades de supervisión del EEE está disponible en el sitio web del Comité Europeo de Protección de Datos.",
    "fr": "Les personnes basées dans l'UE ont le droit de déposer une plainte auprès de leur autorité de contrôle locale en matière de protection des données. Une liste des autorités de contrôle de l'EEE est disponible sur le site du Comité européen de la protection des données.",
    "ja": "EU在住者は、地元のデータ保護監督機関に苦情を申し立てる権利を有します。EEAの監督機関のリストは、欧州データ保護委員会のウェブサイトで確認できます。",
    "zh": "EU居民有权向当地数据保护监管机构提出投诉。EEA监管机构名单可在欧洲数据保护委员会网站上查阅。",
    "ar": "للأفراد المقيمين في الاتحاد الأوروبي الحق في تقديم شكوى إلى هيئة الإشراف المحلية لحماية البيانات. تتوفر قائمة هيئات الإشراف في المنطقة الاقتصادية الأوروبية على موقع المجلس الأوروبي لحماية البيانات.",
    "uk": "Особи з ЄС мають право подати скаргу до свого місцевого наглядового органу із захисту даних. Список наглядових органів ЄЕЗ доступний на веб-сайті Європейської ради із захисту даних.",
}
T["euRepresentative.supervisory2"] = {
    "pl": "Jeśli Lumenshore formalnie wyznaczy przedstawiciela w UE w przyszłości, dane przedstawiciela zostaną opublikowane w niniejszej Polityce prywatności i przekazane odpowiedniemu organowi nadzorczemu zgodnie z art. 27 ust. 4 RODO.",
    "de": "Sollte Lumenshore in Zukunft einen EU-Vertreter formell benennen, werden die Kontaktdaten des Vertreters in dieser Datenschutzrichtlinie veröffentlicht und der zuständigen Aufsichtsbehörde gemäß DSGVO Art. 27(4) mitgeteilt.",
    "es": "Si Lumenshore designa formalmente un representante en la UE en el futuro, los datos del representante se publicarán en esta Política de privacidad y se comunicarán a la autoridad de supervisión pertinente de conformidad con el Art. 27(4) del RGPD.",
    "fr": "Si Lumenshore désigne formellement un représentant dans l'UE à l'avenir, les coordonnées du représentant seront publiées dans cette Politique de confidentialité et communiquées à l'autorité de contrôle compétente conformément à l'Art. 27(4) du RGPD.",
    "ja": "Lumenshoreが将来EU代表者を正式に任命した場合、代表者の詳細は本プライバシーポリシーに公開され、GDPR第27条第4項に従って関連する監督機関に通知されます。",
    "zh": "如果Lumenshore未来正式指定EU代表，代表的详细信息将在本隐私政策中公布，并根据GDPR第27条第4款通知相关监管机构。",
    "ar": "إذا عينت Lumenshore رسميًا ممثلاً في الاتحاد الأوروبي في المستقبل، سيتم نشر تفاصيل الممثل في سياسة الخصوصية هذه وإبلاغ السلطة الإشرافية المعنية وفقًا للمادة 27(4) من GDPR.",
    "uk": "Якщо Lumenshore офіційно призначить представника в ЄС у майбутньому, дані представника будуть опубліковані в цій Політиці конфіденційності та повідомлені відповідному наглядовому органу відповідно до ст. 27(4) GDPR.",
}

def apply_translations():
    en_data = load_json("en")
    stats = {}
    for locale in LOCALES:
        data = load_json(locale)
        changes = 0
        for dotkey, locale_translations in T.items():
            if locale not in locale_translations:
                continue
            keys = dotkey.split(".")
            en_val = get_nested(en_data.get("Privacy", {}), keys)
            current_val = get_nested(data.get("Privacy", {}), keys)
            if en_val is not None and current_val == en_val:
                set_nested(data["Privacy"], keys, locale_translations[locale])
                changes += 1
        if changes > 0:
            save_json(locale, data)
        stats[locale] = changes
        print(f"  {locale}: {changes} keys translated")
    return stats

if __name__ == "__main__":
    print("Story 21.1 — Privacy Policy Translation (Part 7/7)")
    print("Sections: brazilPrivacy, euRepresentative")
    print("=" * 70)
    apply_translations()
    print("\nPart 7 complete.")

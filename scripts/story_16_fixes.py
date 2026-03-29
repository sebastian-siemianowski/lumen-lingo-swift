#!/usr/bin/env python3
"""
Story 16 fixes:
1. Update yourRights.gdprLi7 with ICO phone number in all 9 locales
2. Add Privacy.lawEnforcement section in all 9 locales
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

def set_nested(d, key_path, value):
    keys = key_path.split(".")
    current = d
    for k in keys[:-1]:
        if k not in current:
            current[k] = {}
        current = current[k]
    current[keys[-1]] = value

# ── Fix 1: Update ICO complaint text with phone number ──
ico_complaint = {
    "en": "Right to lodge a complaint — you have the right to lodge a complaint with the <icoLink>Information Commissioner's Office (ICO)</icoLink> at ico.org.uk or by calling 0303 123 1113, or with your local supervisory authority if you are outside the UK.",
    "pl": "Prawo do skargi — masz prawo złożyć skargę do <icoLink>Biura Komisarza ds. Informacji (ICO)</icoLink> pod adresem ico.org.uk lub telefonicznie pod numerem 0303 123 1113, albo do właściwego organu nadzorczego, jeśli przebywasz poza Wielką Brytanią.",
    "de": "Recht auf Beschwerde — Sie haben das Recht, eine Beschwerde beim <icoLink>Information Commissioner's Office (ICO)</icoLink> unter ico.org.uk oder telefonisch unter 0303 123 1113 einzureichen, oder bei Ihrer zuständigen Aufsichtsbehörde, wenn Sie sich außerhalb des Vereinigten Königreichs befinden.",
    "es": "Derecho a reclamar — tiene derecho a presentar una reclamación ante la <icoLink>Oficina del Comisionado de Información (ICO)</icoLink> en ico.org.uk o llamando al 0303 123 1113, o ante la autoridad de control de su jurisdicción si se encuentra fuera del Reino Unido.",
    "fr": "Droit de réclamation — vous avez le droit de déposer une réclamation auprès de l'<icoLink>Information Commissioner's Office (ICO)</icoLink> sur ico.org.uk ou en appelant le 0303 123 1113, ou auprès de votre autorité de contrôle locale si vous résidez en dehors du Royaume-Uni.",
    "ja": "苦情申立ての権利 — <icoLink>情報コミッショナー事務局（ICO）</icoLink>（ico.org.uk または電話番号 0303 123 1113）、または英国外にお住まいの場合はお住まいの地域の監督当局に苦情を申し立てる権利があります。",
    "zh": "投诉权 — 您有权向<icoLink>信息专员办公室（ICO）</icoLink>投诉，网址为 ico.org.uk，电话为 0303 123 1113；如果您在英国境外，也可以向当地监管机构投诉。",
    "ar": "الحق في تقديم شكوى — لديك الحق في تقديم شكوى إلى <icoLink>مكتب مفوض المعلومات (ICO)</icoLink> عبر ico.org.uk أو بالاتصال على 0303 123 1113، أو إلى الجهة الرقابية المختصة إذا كنت خارج المملكة المتحدة.",
    "uk": "Право на скаргу — ви маєте право подати скаргу до <icoLink>Офісу уповноваженого з питань інформації (ICO)</icoLink> на ico.org.uk або за телефоном 0303 123 1113, або до наглядового органу вашої юрисдикції, якщо ви перебуваєте за межами Великої Британії.",
}

# ── Fix 2: Add lawEnforcement section ──
law_enforcement = {
    "en": {
        "heading": "Law Enforcement and Government Requests",
        "p1": "LumenShore will only disclose personal data to law enforcement authorities or government bodies when legally compelled to do so — for example, pursuant to a court order, warrant, or statutory obligation under the Data Protection Act 2018, section 7.",
        "p2": "Where we receive a valid legal demand for personal data, we will notify the affected user unless we are legally prohibited from doing so (for example, by a non-disclosure order attached to the demand).",
        "p3": "We will resist any request that we consider to be overbroad, disproportionate, or lacking a proper legal basis. We do not voluntarily provide personal data to any government body, and we do not participate in mass surveillance programmes.",
        "p4": "If you have questions about our approach to law enforcement requests, please contact us at <emailLink>legal@lumenlingo.com</emailLink>.",
    },
    "pl": {
        "heading": "Żądania organów ścigania i rządowe",
        "p1": "LumenShore ujawni dane osobowe organom ścigania lub organom rządowym wyłącznie w przypadku prawnego zobowiązania — na przykład na podstawie nakazu sądowego, nakazu rewizji lub obowiązku ustawowego wynikającego z Ustawy o ochronie danych osobowych 2018 (Data Protection Act 2018), sekcja 7.",
        "p2": "W przypadku otrzymania zgodnego z prawem żądania udostępnienia danych osobowych, powiadomimy użytkownika, którego te dane dotyczą, chyba że jest to prawnie zabronione (na przykład na mocy zakazu ujawniania dołączonego do żądania).",
        "p3": "Sprzeciwiamy się wszelkim żądaniom, które uznajemy za zbyt szerokie, nieproporcjonalne lub pozbawione właściwej podstawy prawnej. Nie udostępniamy dobrowolnie danych osobowych żadnemu organowi rządowemu i nie uczestniczymy w programach masowej inwigilacji.",
        "p4": "Jeśli masz pytania dotyczące naszego podejścia do żądań organów ścigania, skontaktuj się z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>.",
    },
    "de": {
        "heading": "Anfragen von Strafverfolgungsbehörden und Regierungsstellen",
        "p1": "LumenShore gibt personenbezogene Daten an Strafverfolgungsbehörden oder Regierungsstellen nur dann weiter, wenn dies gesetzlich vorgeschrieben ist — beispielsweise aufgrund eines Gerichtsbeschlusses, eines Durchsuchungsbefehls oder einer gesetzlichen Verpflichtung gemäß dem Data Protection Act 2018, Abschnitt 7.",
        "p2": "Wenn wir eine rechtmäßige Anfrage zur Herausgabe personenbezogener Daten erhalten, benachrichtigen wir die betroffene Person, sofern uns dies nicht gesetzlich untersagt ist (z. B. durch eine mit der Anfrage verbundene Geheimhaltungsanordnung).",
        "p3": "Wir werden jede Anfrage ablehnen, die wir als unverhältnismäßig weit gefasst, unangemessen oder ohne ordnungsgemäße Rechtsgrundlage betrachten. Wir stellen keiner Regierungsbehörde freiwillig personenbezogene Daten zur Verfügung und beteiligen uns nicht an Massenüberwachungsprogrammen.",
        "p4": "Bei Fragen zu unserem Umgang mit Anfragen von Strafverfolgungsbehörden kontaktieren Sie uns bitte unter <emailLink>legal@lumenlingo.com</emailLink>.",
    },
    "es": {
        "heading": "Solicitudes de las fuerzas del orden y gubernamentales",
        "p1": "LumenShore solo revelará datos personales a las fuerzas del orden o entidades gubernamentales cuando esté legalmente obligada a hacerlo — por ejemplo, en virtud de una orden judicial, mandamiento o obligación legal conforme a la Ley de Protección de Datos 2018 (Data Protection Act 2018), sección 7.",
        "p2": "Cuando recibamos una solicitud legal válida de datos personales, notificaremos al usuario afectado, a menos que la ley nos prohíba hacerlo (por ejemplo, mediante una orden de no divulgación adjunta a la solicitud).",
        "p3": "Nos opondremos a cualquier solicitud que consideremos excesivamente amplia, desproporcionada o carente de base legal adecuada. No proporcionamos voluntariamente datos personales a ninguna entidad gubernamental y no participamos en programas de vigilancia masiva.",
        "p4": "Si tiene preguntas sobre nuestro enfoque respecto a las solicitudes de las fuerzas del orden, contáctenos en <emailLink>legal@lumenlingo.com</emailLink>.",
    },
    "fr": {
        "heading": "Demandes des forces de l'ordre et des autorités gouvernementales",
        "p1": "LumenShore ne divulguera des données personnelles aux forces de l'ordre ou aux organismes gouvernementaux que lorsqu'elle y est légalement contrainte — par exemple, en vertu d'une ordonnance judiciaire, d'un mandat ou d'une obligation légale au titre du Data Protection Act 2018, section 7.",
        "p2": "Lorsque nous recevons une demande juridique valide de données personnelles, nous informerons l'utilisateur concerné, sauf si la loi nous interdit de le faire (par exemple, en raison d'une ordonnance de non-divulgation jointe à la demande).",
        "p3": "Nous contesterons toute demande que nous considérons comme excessivement large, disproportionnée ou dépourvue de base juridique appropriée. Nous ne fournissons volontairement des données personnelles à aucun organisme gouvernemental et ne participons à aucun programme de surveillance de masse.",
        "p4": "Si vous avez des questions sur notre approche des demandes des forces de l'ordre, veuillez nous contacter à <emailLink>legal@lumenlingo.com</emailLink>.",
    },
    "ja": {
        "heading": "法執行機関および政府機関からの要請",
        "p1": "LumenShore は、法的に強制される場合にのみ、法執行機関または政府機関に個人データを開示します。例えば、裁判所命令、令状、またはデータ保護法 2018（Data Protection Act 2018）第 7 条に基づく法的義務がある場合です。",
        "p2": "個人データに関する有効な法的要求を受けた場合、法的に禁止されていない限り（例えば、要求に付随する秘密保持命令がある場合を除き）、影響を受けるユーザーに通知します。",
        "p3": "過度に広範、不均衡、または適切な法的根拠を欠くと判断される要求には異議を唱えます。当社はいかなる政府機関にも自発的に個人データを提供せず、大規模監視プログラムには参加しません。",
        "p4": "法執行機関からの要請に関する当社の対応についてご質問がある場合は、<emailLink>legal@lumenlingo.com</emailLink> までお問い合わせください。",
    },
    "zh": {
        "heading": "执法机关和政府请求",
        "p1": "LumenShore 仅在法律强制要求的情况下才会向执法机关或政府机构披露个人数据——例如，根据法院命令、搜查令或《2018 年数据保护法》（Data Protection Act 2018）第 7 条的法定义务。",
        "p2": "当我们收到有效的个人数据法律要求时，除非法律禁止（例如，随要求附带的保密令），否则我们将通知受影响的用户。",
        "p3": "我们将抵制任何我们认为过于宽泛、不成比例或缺乏适当法律依据的请求。我们不会自愿向任何政府机构提供个人数据，也不参与大规模监控计划。",
        "p4": "如果您对我们处理执法请求的方式有疑问，请通过 <emailLink>legal@lumenlingo.com</emailLink> 与我们联系。",
    },
    "ar": {
        "heading": "طلبات جهات إنفاذ القانون والجهات الحكومية",
        "p1": "لن تكشف LumenShore عن البيانات الشخصية لسلطات إنفاذ القانون أو الجهات الحكومية إلا عند الإلزام القانوني بذلك — على سبيل المثال، بموجب أمر محكمة أو مذكرة أو التزام قانوني بموجب قانون حماية البيانات 2018 (Data Protection Act 2018)، القسم 7.",
        "p2": "عندما نتلقى طلبًا قانونيًا صالحًا للحصول على بيانات شخصية، سنقوم بإخطار المستخدم المتأثر ما لم يكن ذلك محظورًا قانونيًا (على سبيل المثال، بموجب أمر عدم إفصاح مرفق بالطلب).",
        "p3": "سنعارض أي طلب نعتبره مفرط النطاق أو غير متناسب أو يفتقر إلى أساس قانوني سليم. نحن لا نقدم طواعية بيانات شخصية لأي جهة حكومية، ولا نشارك في برامج المراقبة الجماعية.",
        "p4": "إذا كانت لديك أسئلة حول نهجنا في التعامل مع طلبات جهات إنفاذ القانون، يرجى التواصل معنا على <emailLink>legal@lumenlingo.com</emailLink>.",
    },
    "uk": {
        "heading": "Запити правоохоронних органів та державних установ",
        "p1": "LumenShore розкриватиме персональні дані правоохоронним органам або державним установам лише за наявності юридичного зобов'язання — наприклад, на підставі судового наказу, ордера або законодавчого обов'язку відповідно до Закону про захист даних 2018 року (Data Protection Act 2018), розділ 7.",
        "p2": "У разі отримання дійсного юридичного запиту на надання персональних даних ми повідомимо відповідного користувача, якщо це не заборонено законом (наприклад, наказом про нерозголошення, що додається до запиту).",
        "p3": "Ми заперечуватимемо будь-який запит, який вважаємо надмірно широким, непропорційним або таким, що не має належної правової підстави. Ми не надаємо добровільно персональні дані жодній державній установі та не беремо участі в програмах масового спостереження.",
        "p4": "Якщо у вас є запитання щодо нашого підходу до запитів правоохоронних органів, зв'яжіться з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>.",
    },
}

# ── Apply changes ──
LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # Fix 1: Update ICO complaint
    old_val = data["Privacy"]["yourRights"]["gdprLi7"]
    new_val = ico_complaint[loc]
    if old_val != new_val:
        data["Privacy"]["yourRights"]["gdprLi7"] = new_val
        print(f"  [{loc}] Updated yourRights.gdprLi7")
        applied += 1

    # Fix 2: Add lawEnforcement section
    if "lawEnforcement" not in data["Privacy"]:
        data["Privacy"]["lawEnforcement"] = law_enforcement[loc]
        print(f"  [{loc}] Added Privacy.lawEnforcement section")
        applied += 1
    else:
        print(f"  [{loc}] Privacy.lawEnforcement already exists")

    save_json(path, data)

print(f"\nTotal changes applied: {applied}")

#!/usr/bin/env python3
"""
Story 16.8 fix: Add 72-hour deletion commitment and DPA 2018 s.9 / GDPR Art. 8 references
to children's privacy section in all 9 locales.
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

# Update p1 to reference GDPR Art. 8 and DPA 2018 s.9
p1_updates = {
    "en": "LumenLingo is designed for users aged 13 and older. In accordance with GDPR Article 8 and DPA 2018 section 9, we do not knowingly collect personal information from children under 13 (or the applicable minimum age in your jurisdiction, which may be higher — for example, 16 in Germany and the Netherlands).",
    "pl": "LumenLingo jest przeznaczone dla użytkowników w wieku 13 lat i starszych. Zgodnie z art. 8 RODO i sekcją 9 Ustawy o ochronie danych osobowych 2018 (DPA 2018) nie gromadzimy świadomie danych osobowych dzieci poniżej 13 roku życia (lub odpowiedniego minimalnego wieku obowiązującego w danej jurysdykcji, który może być wyższy — na przykład 16 lat w Niemczech i Holandii).",
    "de": "LumenLingo ist für Nutzer ab 13 Jahren konzipiert. Gemäß Artikel 8 DSGVO und Abschnitt 9 des Data Protection Act 2018 (DPA 2018) erheben wir wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren (oder dem jeweils geltenden Mindestalter in Ihrer Rechtsordnung, das höher sein kann — beispielsweise 16 Jahre in Deutschland und den Niederlanden).",
    "es": "LumenLingo está diseñado para usuarios de 13 años o más. De conformidad con el artículo 8 del RGPD y la sección 9 de la Ley de Protección de Datos 2018 (DPA 2018), no recopilamos conscientemente información personal de menores de 13 años (o la edad mínima aplicable en su jurisdicción, que puede ser mayor — por ejemplo, 16 años en Alemania y los Países Bajos).",
    "fr": "LumenLingo est conçu pour les utilisateurs âgés de 13 ans et plus. Conformément à l'article 8 du RGPD et à la section 9 du Data Protection Act 2018 (DPA 2018), nous ne collectons pas sciemment de données personnelles auprès d'enfants de moins de 13 ans (ou de l'âge minimum applicable dans votre juridiction, qui peut être plus élevé — par exemple, 16 ans en Allemagne et aux Pays-Bas).",
    "ja": "LumenLingo は 13 歳以上のユーザーを対象として設計されています。GDPR 第 8 条およびデータ保護法 2018（DPA 2018）第 9 条に従い、13 歳未満の子供（またはお住まいの管轄区域で適用される最低年齢。ドイツやオランダでは 16 歳など、より高い場合があります）から意図的に個人情報を収集することはありません。",
    "zh": "LumenLingo 面向 13 岁及以上的用户设计。根据 GDPR 第 8 条和《2018 年数据保护法》（DPA 2018）第 9 条，我们不会故意收集 13 岁以下儿童的个人信息（或您所在司法管辖区适用的最低年龄，该年龄可能更高——例如德国和荷兰为 16 岁）。",
    "ar": "تم تصميم LumenLingo للمستخدمين الذين تبلغ أعمارهم 13 عامًا فأكثر. وفقًا للمادة 8 من اللائحة العامة لحماية البيانات (GDPR) والقسم 9 من قانون حماية البيانات 2018 (DPA 2018)، لا نجمع عن قصد معلومات شخصية من أطفال دون سن 13 عامًا (أو الحد الأدنى للسن المعمول به في ولايتك القضائية، والذي قد يكون أعلى — على سبيل المثال، 16 عامًا في ألمانيا وهولندا).",
    "uk": "LumenLingo розроблено для користувачів від 13 років і старше. Відповідно до статті 8 GDPR та розділу 9 Закону про захист даних 2018 року (DPA 2018), ми свідомо не збираємо персональні дані дітей молодше 13 років (або відповідного мінімального віку у вашій юрисдикції, який може бути вищим — наприклад, 16 років у Німеччині та Нідерландах).",
}

# Update parentalP2 to add 72-hour deletion commitment
parentalP2_updates = {
    "en": "To exercise any of these rights, please contact us at <emailLink>legal@lumenlingo.com</emailLink>. If we discover that we have collected personal information from a child under 13 without proper parental consent, we will delete that information within 72 hours of discovery.",
    "pl": "Aby skorzystać z któregokolwiek z tych praw, skontaktuj się z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>. Jeśli odkryjemy, że zebraliśmy dane osobowe dziecka poniżej 13 roku życia bez odpowiedniej zgody rodzica, usuniemy te informacje w ciągu 72 godzin od wykrycia.",
    "de": "Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter <emailLink>legal@lumenlingo.com</emailLink>. Wenn wir feststellen, dass wir personenbezogene Daten eines Kindes unter 13 Jahren ohne ordnungsgemäße elterliche Einwilligung erhoben haben, werden wir diese Daten innerhalb von 72 Stunden nach Entdeckung löschen.",
    "es": "Para ejercer cualquiera de estos derechos, contáctenos en <emailLink>legal@lumenlingo.com</emailLink>. Si descubrimos que hemos recopilado información personal de un menor de 13 años sin el consentimiento parental adecuado, eliminaremos dicha información en un plazo de 72 horas desde su descubrimiento.",
    "fr": "Pour exercer l'un de ces droits, veuillez nous contacter à <emailLink>legal@lumenlingo.com</emailLink>. Si nous découvrons que nous avons collecté des données personnelles d'un enfant de moins de 13 ans sans le consentement parental approprié, nous supprimerons ces informations dans les 72 heures suivant la découverte.",
    "ja": "これらの権利を行使するには、<emailLink>legal@lumenlingo.com</emailLink> までご連絡ください。適切な保護者の同意なく 13 歳未満の子供の個人情報を収集したことが判明した場合、発見から 72 時間以内にその情報を削除します。",
    "zh": "如需行使上述任何权利，请通过 <emailLink>legal@lumenlingo.com</emailLink> 与我们联系。如果我们发现在未获得适当家长同意的情况下收集了 13 岁以下儿童的个人信息，我们将在发现后 72 小时内删除该信息。",
    "ar": "لممارسة أي من هذه الحقوق، يرجى التواصل معنا على <emailLink>legal@lumenlingo.com</emailLink>. إذا اكتشفنا أننا قد جمعنا معلومات شخصية من طفل دون سن 13 عامًا دون موافقة الوالدين المناسبة، فسنحذف تلك المعلومات خلال 72 ساعة من الاكتشاف.",
    "uk": "Щоб скористатися будь-яким із цих прав, зв'яжіться з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>. Якщо ми виявимо, що зібрали персональні дані дитини молодше 13 років без належної згоди батьків, ми видалимо цю інформацію протягом 72 годин з моменту виявлення.",
}

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # Update p1 with GDPR Art. 8 / DPA 2018 s.9 reference
    old_p1 = data["Privacy"]["childrensPrivacy"]["p1"]
    new_p1 = p1_updates[loc]
    if old_p1 != new_p1:
        data["Privacy"]["childrensPrivacy"]["p1"] = new_p1
        print(f"  [{loc}] Updated childrensPrivacy.p1 (GDPR Art. 8 / DPA 2018 s.9 ref)")
        applied += 1

    # Update parentalP2 with 72-hour commitment
    old_pp2 = data["Privacy"]["childrensPrivacy"]["parentalP2"]
    new_pp2 = parentalP2_updates[loc]
    if old_pp2 != new_pp2:
        data["Privacy"]["childrensPrivacy"]["parentalP2"] = new_pp2
        print(f"  [{loc}] Updated childrensPrivacy.parentalP2 (72-hour deletion)")
        applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

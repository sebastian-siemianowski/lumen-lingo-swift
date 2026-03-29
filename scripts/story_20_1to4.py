#!/usr/bin/env python3
"""
Epic 20 -- Cross-Policy Consistency & Version Management
Stories 20.1-20.4 (20.5 version bumps handled separately as the final step)
"""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# ── 20.1: Standardise liability caps ──
# Fix Terms.limitationOfLiability.cap: change GBP 0 to GBP 10 (matching tieredLiabilityCaps.freeP1)
# Fix Eula.liability.cap: same change
# Add Privacy.liability cross-reference

# Replacement pairs: old text -> new text to find and replace within cap strings
OLD_FREE_CAP = "zero pounds sterling"
NEW_FREE_CAP = "ten pounds sterling"
OLD_FREE_SYMBOL = "\u00a30.00"  # £0.00
NEW_FREE_SYMBOL = "\u00a310"    # £10

# Privacy liability cross-reference
privacy_liability_crossref = {
    "en": "For details on our liability limitations, please refer to the Limitation of Liability section in our <termsLink>Terms of Service</termsLink>.",
    "pl": "Aby zapoznać się ze szczegółami dotyczącymi ograniczenia naszej odpowiedzialności, prosimy o zapoznanie się z sekcją Ograniczenie odpowiedzialności w naszych <termsLink>Warunkach korzystania z usługi</termsLink>.",
    "de": "Einzelheiten zu unseren Haftungsbeschränkungen finden Sie im Abschnitt Haftungsbeschränkung in unseren <termsLink>Nutzungsbedingungen</termsLink>.",
    "es": "Para obtener detalles sobre nuestras limitaciones de responsabilidad, consulte la sección Limitación de responsabilidad en nuestros <termsLink>Términos de servicio</termsLink>.",
    "fr": "Pour plus de détails sur nos limitations de responsabilité, veuillez consulter la section Limitation de responsabilité dans nos <termsLink>Conditions d'utilisation</termsLink>.",
    "ja": "当社の責任制限の詳細については、<termsLink>利用規約</termsLink>の責任制限セクションをご参照ください。",
    "zh": "有关我们责任限制的详情，请参阅我们的<termsLink>服务条款</termsLink>中的责任限制部分。",
    "ar": "للاطلاع على تفاصيل قيود المسؤولية الخاصة بنا، يرجى الرجوع إلى قسم تحديد المسؤولية في <termsLink>شروط الخدمة</termsLink> الخاصة بنا.",
    "uk": "Для отримання деталей щодо наших обмежень відповідальності, будь ласка, зверніться до розділу Обмеження відповідальності в наших <termsLink>Умовах надання послуг</termsLink>.",
}

# ── 20.2: Privacy dispute resolution ──
privacy_dispute = {
    "en": {
        "heading": "Dispute Resolution",
        "p1": "For disputes not relating to data protection, the dispute resolution provisions of our <termsLink>Terms of Service</termsLink> apply, including informal resolution, mediation, and court proceedings governed by the laws of England and Wales.",
        "p2": "For data protection disputes, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) or to seek a judicial remedy under GDPR Article 79 and the Data Protection Act 2018 section 167, without prejudice to any other administrative or non-judicial remedy available to you.",
    },
    "pl": {
        "heading": "Rozstrzyganie sporów",
        "p1": "W przypadku sporów niezwiązanych z ochroną danych osobowych zastosowanie mają postanowienia dotyczące rozstrzygania sporów zawarte w naszych <termsLink>Warunkach korzystania z usługi</termsLink>, w tym polubowne rozwiązanie, mediacja i postępowanie sądowe podlegające prawu Anglii i Walii.",
        "p2": "W przypadku sporów dotyczących ochrony danych osobowych masz prawo złożyć skargę do Biura Komisarza ds. Informacji (ICO) lub dochodzić środka sądowego na podstawie art. 79 RODO i sekcji 167 Ustawy o ochronie danych 2018, bez uszczerbku dla innych dostępnych środków administracyjnych lub pozasądowych.",
    },
    "de": {
        "heading": "Streitbeilegung",
        "p1": "Für Streitigkeiten, die nicht den Datenschutz betreffen, gelten die Streitbeilegungsbestimmungen unserer <termsLink>Nutzungsbedingungen</termsLink>, einschließlich informeller Beilegung, Mediation und Gerichtsverfahren nach dem Recht von England und Wales.",
        "p2": "Für Datenschutzstreitigkeiten haben Sie das Recht, eine Beschwerde beim Information Commissioner's Office (ICO) einzureichen oder einen gerichtlichen Rechtsbehelf gemäß DSGVO Artikel 79 und Data Protection Act 2018 Abschnitt 167 einzulegen, unbeschadet jedes anderen Ihnen zur Verfügung stehenden verwaltungsrechtlichen oder außergerichtlichen Rechtsbehelfs.",
    },
    "es": {
        "heading": "Resolución de disputas",
        "p1": "Para disputas no relacionadas con la protección de datos, se aplican las disposiciones de resolución de disputas de nuestros <termsLink>Términos de servicio</termsLink>, incluyendo resolución informal, mediación y procedimientos judiciales regidos por las leyes de Inglaterra y Gales.",
        "p2": "Para disputas de protección de datos, tiene derecho a presentar una reclamación ante la Oficina del Comisionado de Información (ICO) o a solicitar un recurso judicial en virtud del artículo 79 del RGPD y la sección 167 del Data Protection Act 2018, sin perjuicio de cualquier otro recurso administrativo o no judicial disponible.",
    },
    "fr": {
        "heading": "Résolution des litiges",
        "p1": "Pour les litiges ne concernant pas la protection des données, les dispositions de résolution des litiges de nos <termsLink>Conditions d'utilisation</termsLink> s'appliquent, y compris la résolution informelle, la médiation et les procédures judiciaires régies par les lois d'Angleterre et du Pays de Galles.",
        "p2": "Pour les litiges relatifs à la protection des données, vous avez le droit de déposer une plainte auprès de l'Information Commissioner's Office (ICO) ou de rechercher un recours judiciaire en vertu de l'article 79 du RGPD et de la section 167 du Data Protection Act 2018, sans préjudice de tout autre recours administratif ou non judiciaire disponible.",
    },
    "ja": {
        "heading": "紛争解決",
        "p1": "データ保護に関係しない紛争については、非公式解決、調停、イングランドおよびウェールズの法律に基づく裁判手続きを含む、当社の<termsLink>利用規約</termsLink>の紛争解決条項が適用されます。",
        "p2": "データ保護の紛争については、GDPR 第 79 条およびデータ保護法 2018 第 167 条に基づき、情報コミッショナー事務局（ICO）に苦情を申し立てるか、司法的救済を求める権利を有します。これは、お客様が利用可能なその他の行政的または非司法的救済を妨げるものではありません。",
    },
    "zh": {
        "heading": "争议解决",
        "p1": "对于与数据保护无关的争议，我们的<termsLink>服务条款</termsLink>中的争议解决条款适用，包括非正式解决、调解和受英格兰和威尔士法律管辖的法院诉讼。",
        "p2": "对于数据保护争议，您有权向信息专员办公室（ICO）提出投诉，或根据 GDPR 第 79 条和《2018 年数据保护法》第 167 条寻求司法救济，且不影响您可获得的任何其他行政或非司法救济。",
    },
    "ar": {
        "heading": "حل النزاعات",
        "p1": "بالنسبة للنزاعات غير المتعلقة بحماية البيانات، تنطبق أحكام حل النزاعات الواردة في <termsLink>شروط الخدمة</termsLink> الخاصة بنا، بما في ذلك الحل غير الرسمي والوساطة والإجراءات القضائية الخاضعة لقوانين إنجلترا وويلز.",
        "p2": "بالنسبة لنزاعات حماية البيانات، يحق لك تقديم شكوى إلى مكتب مفوض المعلومات (ICO) أو طلب تعويض قضائي بموجب المادة 79 من اللائحة العامة لحماية البيانات والمادة 167 من قانون حماية البيانات 2018، دون المساس بأي تعويض إداري أو غير قضائي آخر متاح لك.",
    },
    "uk": {
        "heading": "Вирішення спорів",
        "p1": "Для спорів, не пов'язаних із захистом даних, застосовуються положення щодо вирішення спорів наших <termsLink>Умов надання послуг</termsLink>, включаючи неформальне вирішення, медіацію та судові процеси, що регулюються законодавством Англії та Уельсу.",
        "p2": "Для спорів щодо захисту даних ви маєте право подати скаргу до Офісу уповноваженого з питань інформації (ICO) або звернутися за судовим захистом відповідно до статті 79 GDPR та розділу 167 Закону про захист даних 2018, без шкоди для будь-якого іншого доступного вам адміністративного або позасудового засобу захисту.",
    },
}

# ── 20.3: Retention cross-references ──
cookie_retention_crossref = {
    "en": "For full details on data retention periods, including how long personal data is retained and our deletion schedule, please refer to our <privacyLink>Privacy Policy</privacyLink>.",
    "pl": "Aby zapoznać się z pełnymi szczegółami dotyczącymi okresów przechowywania danych, w tym czasu przechowywania danych osobowych i naszego harmonogramu usuwania, prosimy o zapoznanie się z naszą <privacyLink>Polityką prywatności</privacyLink>.",
    "de": "Ausführliche Informationen zu den Aufbewahrungsfristen, einschließlich der Dauer der Aufbewahrung personenbezogener Daten und unserem Löschplan, finden Sie in unserer <privacyLink>Datenschutzrichtlinie</privacyLink>.",
    "es": "Para obtener información completa sobre los períodos de retención de datos, incluida la duración de la retención de datos personales y nuestro calendario de eliminación, consulte nuestra <privacyLink>Política de Privacidad</privacyLink>.",
    "fr": "Pour des informations complètes sur les durées de conservation des données, y compris la durée de conservation des données personnelles et notre calendrier de suppression, veuillez consulter notre <privacyLink>Politique de confidentialité</privacyLink>.",
    "ja": "データ保持期間（個人データの保持期間や削除スケジュールを含む）の詳細については、当社の<privacyLink>プライバシーポリシー</privacyLink>をご参照ください。",
    "zh": "有关数据保留期限的完整详情（包括个人数据的保留时长和我们的删除计划），请参阅我们的<privacyLink>隐私政策</privacyLink>。",
    "ar": "للاطلاع على التفاصيل الكاملة حول فترات الاحتفاظ بالبيانات، بما في ذلك مدة الاحتفاظ بالبيانات الشخصية وجدول الحذف الخاص بنا، يرجى الرجوع إلى <privacyLink>سياسة الخصوصية</privacyLink> الخاصة بنا.",
    "uk": "Для отримання повної інформації про періоди зберігання даних, включаючи тривалість зберігання персональних даних та наш графік видалення, будь ласка, зверніться до нашої <privacyLink>Політики конфіденційності</privacyLink>.",
}

terms_retention_crossref = {
    "en": "Data collected during your use of the Service is retained as described in our <privacyLink>Privacy Policy</privacyLink>. Please refer to the Privacy Policy for information on retention periods, data deletion, and your rights regarding your personal data.",
    "pl": "Dane zebrane podczas korzystania z Usługi są przechowywane zgodnie z opisem w naszej <privacyLink>Polityce prywatności</privacyLink>. Prosimy o zapoznanie się z Polityką prywatności w celu uzyskania informacji o okresach przechowywania, usuwaniu danych i Twoich prawach dotyczących danych osobowych.",
    "de": "Daten, die während Ihrer Nutzung des Dienstes erhoben werden, werden wie in unserer <privacyLink>Datenschutzrichtlinie</privacyLink> beschrieben aufbewahrt. Bitte lesen Sie die Datenschutzrichtlinie für Informationen zu Aufbewahrungsfristen, Datenlöschung und Ihren Rechten bezüglich Ihrer personenbezogenen Daten.",
    "es": "Los datos recopilados durante su uso del Servicio se conservan según se describe en nuestra <privacyLink>Política de Privacidad</privacyLink>. Consulte la Política de Privacidad para obtener información sobre los períodos de retención, eliminación de datos y sus derechos con respecto a sus datos personales.",
    "fr": "Les données collectées lors de votre utilisation du Service sont conservées comme décrit dans notre <privacyLink>Politique de confidentialité</privacyLink>. Veuillez consulter la Politique de confidentialité pour des informations sur les durées de conservation, la suppression des données et vos droits concernant vos données personnelles.",
    "ja": "サービスの利用中に収集されたデータは、当社の<privacyLink>プライバシーポリシー</privacyLink>に記載されているとおり保持されます。保持期間、データ削除、および個人データに関するお客様の権利については、プライバシーポリシーをご参照ください。",
    "zh": "在您使用服务期间收集的数据按照我们的<privacyLink>隐私政策</privacyLink>中的描述进行保留。请参阅隐私政策了解有关保留期限、数据删除和您的个人数据权利的信息。",
    "ar": "يتم الاحتفاظ بالبيانات المجمعة أثناء استخدامك للخدمة كما هو موضح في <privacyLink>سياسة الخصوصية</privacyLink> الخاصة بنا. يرجى الرجوع إلى سياسة الخصوصية للاطلاع على معلومات حول فترات الاحتفاظ وحذف البيانات وحقوقك المتعلقة ببياناتك الشخصية.",
    "uk": "Дані, зібрані під час використання вами Сервісу, зберігаються відповідно до опису в нашій <privacyLink>Політиці конфіденційності</privacyLink>. Будь ласка, зверніться до Політики конфіденційності для отримання інформації про періоди зберігання, видалення даних та ваші права щодо персональних даних.",
}

applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # ── 20.1: Fix liability caps ──
    # Terms.limitationOfLiability.cap: GBP 0 -> GBP 10
    terms_cap = data.get("Terms", {}).get("limitationOfLiability", {}).get("cap", "")
    if OLD_FREE_CAP in terms_cap:
        data["Terms"]["limitationOfLiability"]["cap"] = terms_cap.replace(OLD_FREE_CAP, NEW_FREE_CAP).replace(OLD_FREE_SYMBOL, NEW_FREE_SYMBOL)
        print(f"  [{loc}] Fixed Terms.limitationOfLiability.cap: GBP 0 -> GBP 10")
        applied += 1

    # Eula.liability.cap: GBP 0 -> GBP 10
    eula_cap = data.get("Eula", {}).get("liability", {}).get("cap", "")
    if OLD_FREE_CAP in eula_cap:
        data["Eula"]["liability"]["cap"] = eula_cap.replace(OLD_FREE_CAP, NEW_FREE_CAP).replace(OLD_FREE_SYMBOL, NEW_FREE_SYMBOL)
        print(f"  [{loc}] Fixed Eula.liability.cap: GBP 0 -> GBP 10")
        applied += 1

    # Add Privacy liability cross-reference
    if "Privacy" in data:
        if "liability" not in data["Privacy"]:
            data["Privacy"]["liability"] = {}
        if "crossRef" not in data["Privacy"]["liability"]:
            data["Privacy"]["liability"]["crossRef"] = privacy_liability_crossref[loc]
            print(f"  [{loc}] Added Privacy.liability.crossRef")
            applied += 1

    # ── 20.2: Privacy dispute resolution ──
    if "Privacy" in data:
        if "disputeResolution" not in data["Privacy"]:
            data["Privacy"]["disputeResolution"] = privacy_dispute[loc]
            print(f"  [{loc}] Added Privacy.disputeResolution")
            applied += 1

    # ── 20.3: Retention cross-references ──
    if "CookiePage" in data:
        if "retention" not in data["CookiePage"]:
            data["CookiePage"]["retention"] = {}
        if "crossRef" not in data["CookiePage"]["retention"]:
            data["CookiePage"]["retention"]["crossRef"] = cookie_retention_crossref[loc]
            print(f"  [{loc}] Added CookiePage.retention.crossRef")
            applied += 1

    if "Terms" in data:
        if "retention" not in data["Terms"]:
            data["Terms"]["retention"] = {}
        if "crossRef" not in data["Terms"]["retention"]:
            data["Terms"]["retention"]["crossRef"] = terms_retention_crossref[loc]
            print(f"  [{loc}] Added Terms.retention.crossRef")
            applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

# ── 20.4: Email audit ──
print("\n=== Email Audit ===")
email_pattern = re.compile(r'[\w.+-]+@[\w.-]+\.\w+')
for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    text = path.read_text("utf-8")
    emails = set(email_pattern.findall(text))
    # Filter out common expected emails
    unexpected = [e for e in emails if e not in {
        "legal@lumenlingo.com",
        "support@lumenlingo.com",
        "community@lumenshore.com",
        "appeals@lumenshore.com",
        "dsa@lumenshore.com",
        "accessibility@lumenshore.com",
        "encarregado@anpd.gov.br",
    }]
    if unexpected:
        print(f"  [{loc}] Unexpected emails: {unexpected}")
    else:
        print(f"  [{loc}] All emails consistent")

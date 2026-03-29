#!/usr/bin/env python3
"""
Story 20.5 — Phase 3 Version Bumps
Bump: Privacy v2.3, Terms v1.3, EULA v1.2, Cookie v1.2
Add changelog entries, update iOS version.
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# ── Version display strings ──
LEGAL_VERSION = {
    "en": "Version 2.3", "pl": "Wersja 2.3", "de": "Version 2.3",
    "es": "Versión 2.3", "fr": "Version 2.3", "ja": "バージョン 2.3",
    "zh": "版本 2.3", "ar": "الإصدار 2.3", "uk": "Версія 2.3",
}
TERMS_VERSION = {
    "en": "Version 1.3", "pl": "Wersja 1.3", "de": "Version 1.3",
    "es": "Versión 1.3", "fr": "Version 1.3", "ja": "バージョン 1.3",
    "zh": "版本 1.3", "ar": "الإصدار 1.3", "uk": "Версія 1.3",
}
EULA_VERSION = {
    "en": "Version 1.2", "pl": "Wersja 1.2", "de": "Version 1.2",
    "es": "Versión 1.2", "fr": "Version 1.2", "ja": "バージョン 1.2",
    "zh": "版本 1.2", "ar": "الإصدار 1.2", "uk": "Версія 1.2",
}

# ── Cookie consent version ──
COOKIE_VERSION = {
    "en": "<b>Current consent version:</b> 1.2",
    "pl": "<b>Aktualna wersja zgody:</b> 1.2",
    "de": "<b>Aktuelle Einwilligungsversion:</b> 1.2",
    "es": "<b>Versión actual del consentimiento:</b> 1.2",
    "fr": "<b>Version actuelle du consentement :</b> 1.2",
    "ja": "<b>現在の同意バージョン：</b> 1.2",
    "zh": "<b>当前同意版本：</b> 1.2",
    "ar": "<b>إصدار الموافقة الحالي:</b> 1.2",
    "uk": "<b>Поточна версія згоди:</b> 1.2",
}

# ── Changelog entries ──
PRIVACY_CHANGELOG = {
    "en": "<b>v2.3</b> (July 2025) — Phase 3 legal fortification: added limitation of liability cross-reference to Terms, added dispute resolution section referencing Terms for non-GDPR disputes with GDPR Art. 79 carve-out, standardised all contact email addresses to legal@lumenlingo.com.",
    "pl": "<b>v2.3</b> (lipiec 2025) — Faza 3 wzmocnienia prawnego: dodano odsyłacz do ograniczenia odpowiedzialności w Regulaminie, dodano sekcję rozstrzygania sporów odwołującą się do Regulaminu dla sporów niezwiązanych z RODO z zastrzeżeniem art. 79 RODO, ustandaryzowano wszystkie adresy e-mail kontaktowe na legal@lumenlingo.com.",
    "de": "<b>v2.3</b> (Juli 2025) — Phase 3 rechtliche Verstärkung: Querverweis auf Haftungsbeschränkung in den Nutzungsbedingungen hinzugefügt, Streitbeilegungsabschnitt mit Verweis auf Nutzungsbedingungen für nicht-DSGVO-bezogene Streitigkeiten mit DSGVO Art. 79 Ausnahme hinzugefügt, alle Kontakt-E-Mail-Adressen auf legal@lumenlingo.com standardisiert.",
    "es": "<b>v2.3</b> (julio 2025) — Fase 3 de fortalecimiento legal: añadida referencia cruzada de limitación de responsabilidad a los Términos, añadida sección de resolución de disputas referenciando los Términos para disputas no RGPD con excepción del Art. 79 RGPD, estandarizadas todas las direcciones de correo electrónico de contacto a legal@lumenlingo.com.",
    "fr": "<b>v2.3</b> (juillet 2025) — Phase 3 de renforcement juridique : ajout d'une référence croisée de limitation de responsabilité aux Conditions, ajout d'une section de résolution des litiges référençant les Conditions pour les litiges non liés au RGPD avec exception de l'art. 79 RGPD, standardisation de toutes les adresses e-mail de contact à legal@lumenlingo.com.",
    "ja": "<b>v2.3</b>（2025年7月）— フェーズ3法的強化：利用規約への責任制限の相互参照を追加、GDPR以外の紛争については利用規約を参照する紛争解決セクションをGDPR第79条の例外付きで追加、すべての連絡先メールアドレスをlegal@lumenlingo.comに標準化。",
    "zh": "<b>v2.3</b>（2025年7月）— 第三阶段法律强化：添加了引用服务条款的责任限制交叉引用，添加了引用服务条款的非GDPR争议解决部分（含GDPR第79条例外），将所有联系电子邮件地址标准化为legal@lumenlingo.com。",
    "ar": "<b>v2.3</b> (يوليو 2025) — المرحلة 3 من التعزيز القانوني: إضافة إشارة مرجعية لتحديد المسؤولية إلى الشروط، إضافة قسم حل النزاعات مع الإشارة إلى الشروط للنزاعات غير المتعلقة باللائحة العامة لحماية البيانات مع استثناء المادة 79، توحيد جميع عناوين البريد الإلكتروني للاتصال إلى legal@lumenlingo.com.",
    "uk": "<b>v2.3</b> (липень 2025) — Фаза 3 юридичного зміцнення: додано перехресне посилання на обмеження відповідальності в Умовах, додано розділ вирішення спорів з посиланням на Умови для спорів, не пов'язаних з GDPR, із застереженням ст. 79 GDPR, стандартизовано всі контактні адреси електронної пошти на legal@lumenlingo.com.",
}

TERMS_CHANGELOG = {
    "en": "<b>v1.3</b> (July 2025) — Phase 3 legal fortification: standardised free-tier liability cap from GBP 0 to GBP 10 across all liability sections for consistency with EULA, added data retention cross-reference to Privacy Policy.",
    "pl": "<b>v1.3</b> (lipiec 2025) — Faza 3 wzmocnienia prawnego: ustandaryzowano limit odpowiedzialności dla bezpłatnego poziomu z 0 GBP na 10 GBP we wszystkich sekcjach dotyczących odpowiedzialności dla spójności z EULA, dodano odsyłacz do przechowywania danych w Polityce prywatności.",
    "de": "<b>v1.3</b> (Juli 2025) — Phase 3 rechtliche Verstärkung: kostenloser Tarif Haftungsobergrenze von GBP 0 auf GBP 10 in allen Haftungsabschnitten für Konsistenz mit der EULA standardisiert, Querverweis auf Datenaufbewahrung in der Datenschutzrichtlinie hinzugefügt.",
    "es": "<b>v1.3</b> (julio 2025) — Fase 3 de fortalecimiento legal: estandarizado el límite de responsabilidad del nivel gratuito de GBP 0 a GBP 10 en todas las secciones de responsabilidad para consistencia con el EULA, añadida referencia cruzada de retención de datos a la Política de Privacidad.",
    "fr": "<b>v1.3</b> (juillet 2025) — Phase 3 de renforcement juridique : plafond de responsabilité de la formule gratuite standardisé de GBP 0 à GBP 10 dans toutes les sections de responsabilité pour cohérence avec le CLUF, ajout d'une référence croisée de conservation des données vers la Politique de confidentialité.",
    "ja": "<b>v1.3</b>（2025年7月）— フェーズ3法的強化：EULAとの整合性のため、すべての責任セクションで無料プランの責任上限をGBP 0からGBP 10に標準化、プライバシーポリシーへのデータ保持の相互参照を追加。",
    "zh": "<b>v1.3</b>（2025年7月）— 第三阶段法律强化：为与EULA保持一致，将所有责任条款中免费版责任上限从0英镑标准化为10英镑，添加了引用隐私政策的数据保留交叉引用。",
    "ar": "<b>v1.3</b> (يوليو 2025) — المرحلة 3 من التعزيز القانوني: توحيد حد المسؤولية للمستوى المجاني من 0 جنيه إسترليني إلى 10 جنيهات إسترلينية في جميع أقسام المسؤولية للاتساق مع اتفاقية الترخيص، إضافة إشارة مرجعية للاحتفاظ بالبيانات إلى سياسة الخصوصية.",
    "uk": "<b>v1.3</b> (липень 2025) — Фаза 3 юридичного зміцнення: стандартизовано ліміт відповідальності для безкоштовного рівня з GBP 0 до GBP 10 у всіх розділах відповідальності для узгодженості з EULA, додано перехресне посилання на зберігання даних у Політиці конфіденційності.",
}

EULA_CHANGELOG = {
    "en": "<b>v1.2</b> (July 2025) — Phase 3 legal fortification: added data protection section with Privacy Policy cross-reference, added biometric data disclosure (Face ID/Touch ID Secure Enclave), added data loss disclaimer with CRA 2015 carve-out, added third-party services acknowledgement (Apple, RevenueCat), added educational disclaimer, standardised free-tier liability cap from GBP 0 to GBP 10 for cross-policy consistency.",
    "pl": "<b>v1.2</b> (lipiec 2025) — Faza 3 wzmocnienia prawnego: dodano sekcję ochrony danych z odniesieniem do Polityki prywatności, dodano ujawnienie danych biometrycznych (Face ID/Touch ID Secure Enclave), dodano zastrzeżenie dotyczące utraty danych z wyłączeniem CRA 2015, dodano potwierdzenie usług podmiotów trzecich (Apple, RevenueCat), dodano zastrzeżenie edukacyjne, ustandaryzowano limit odpowiedzialności dla bezpłatnego poziomu z 0 GBP na 10 GBP.",
    "de": "<b>v1.2</b> (Juli 2025) — Phase 3 rechtliche Verstärkung: Datenschutzabschnitt mit Querverweis auf Datenschutzrichtlinie hinzugefügt, biometrische Datenoffenlegung (Face ID/Touch ID Secure Enclave) hinzugefügt, Datenverlust-Haftungsausschluss mit CRA 2015 Ausnahme hinzugefügt, Drittanbieterdienste-Bestätigung (Apple, RevenueCat) hinzugefügt, Bildungshaftungsausschluss hinzugefügt, kostenloser Tarif Haftungsobergrenze von GBP 0 auf GBP 10 standardisiert.",
    "es": "<b>v1.2</b> (julio 2025) — Fase 3 de fortalecimiento legal: añadida sección de protección de datos con referencia cruzada a la Política de Privacidad, añadida divulgación de datos biométricos (Face ID/Touch ID Secure Enclave), añada descargo de pérdida de datos con excepción de CRA 2015, añadido reconocimiento de servicios de terceros (Apple, RevenueCat), añadido descargo educativo, estandarizado el límite de responsabilidad del nivel gratuito de GBP 0 a GBP 10.",
    "fr": "<b>v1.2</b> (juillet 2025) — Phase 3 de renforcement juridique : ajout de la section protection des données avec référence croisée à la Politique de confidentialité, ajout de la divulgation des données biométriques (Face ID/Touch ID Secure Enclave), ajout de l'avertissement de perte de données avec exception CRA 2015, ajout de la reconnaissance des services tiers (Apple, RevenueCat), ajout de l'avertissement éducatif, plafond de responsabilité gratuit standardisé de GBP 0 à GBP 10.",
    "ja": "<b>v1.2</b>（2025年7月）— フェーズ3法的強化：プライバシーポリシーへの相互参照付きデータ保護セクションを追加、生体認証データ開示（Face ID/Touch ID Secure Enclave）を追加、CRA 2015除外付きデータ損失免責事項を追加、サードパーティサービス（Apple、RevenueCat）の確認を追加、教育免責事項を追加、ポリシー間整合性のため無料プラン責任上限をGBP 0からGBP 10に標準化。",
    "zh": "<b>v1.2</b>（2025年7月）— 第三阶段法律强化：添加了引用隐私政策的数据保护部分，添加了生物识别数据披露（Face ID/Touch ID Secure Enclave），添加了含CRA 2015例外的数据丢失免责声明，添加了第三方服务确认（Apple、RevenueCat），添加了教育免责声明，为跨政策一致性将免费版责任上限从0英镑标准化为10英镑。",
    "ar": "<b>v1.2</b> (يوليو 2025) — المرحلة 3 من التعزيز القانوني: إضافة قسم حماية البيانات مع إشارة مرجعية لسياسة الخصوصية، إضافة إفصاح البيانات البيومترية (Face ID/Touch ID Secure Enclave)، إضافة إخلاء مسؤولية فقدان البيانات مع استثناء قانون حقوق المستهلك 2015، إضافة إقرار خدمات الأطراف الثالثة (Apple، RevenueCat)، إضافة إخلاء مسؤولية تعليمي، توحيد حد المسؤولية المجاني من 0 إلى 10 جنيهات إسترلينية.",
    "uk": "<b>v1.2</b> (липень 2025) — Фаза 3 юридичного зміцнення: додано розділ захисту даних з перехресним посиланням на Політику конфіденційності, додано розкриття біометричних даних (Face ID/Touch ID Secure Enclave), додано застереження щодо втрати даних з винятком CRA 2015, додано підтвердження послуг третіх сторін (Apple, RevenueCat), додано освітнє застереження, стандартизовано ліміт відповідальності для безкоштовного рівня з GBP 0 до GBP 10.",
}

COOKIE_CHANGELOG = {
    "en": "<b>v1.2</b> (July 2025) — Phase 3 legal fortification: added cookie consent mechanism section (rejection, withdrawal, affirmative consent), added cookie granularity controls (essential, functional, analytics), added browser storage management instructions (Chrome, Safari, Firefox, Edge), added accessibility statement, added data retention cross-reference to Privacy Policy, standardised contact emails to legal@lumenlingo.com.",
    "pl": "<b>v1.2</b> (lipiec 2025) — Faza 3 wzmocnienia prawnego: dodano sekcję mechanizmu zgody na pliki cookie (odrzucenie, wycofanie, wyraźna zgoda), dodano granularne kontrole plików cookie (niezbędne, funkcjonalne, analityczne), dodano instrukcje zarządzania pamięcią przeglądarki (Chrome, Safari, Firefox, Edge), dodano oświadczenie o dostępności, dodano odsyłacz do przechowywania danych w Polityce prywatności, ustandaryzowano adresy e-mail kontaktowe na legal@lumenlingo.com.",
    "de": "<b>v1.2</b> (Juli 2025) — Phase 3 rechtliche Verstärkung: Cookie-Einwilligungsmechanismus-Abschnitt (Ablehnung, Widerruf, ausdrückliche Einwilligung) hinzugefügt, granulare Cookie-Steuerungen (essentiell, funktional, analytisch) hinzugefügt, Browser-Speicherverwaltungsanweisungen (Chrome, Safari, Firefox, Edge) hinzugefügt, Barrierefreiheitserklärung hinzugefügt, Querverweis auf Datenaufbewahrung in der Datenschutzrichtlinie hinzugefügt, Kontakt-E-Mails auf legal@lumenlingo.com standardisiert.",
    "es": "<b>v1.2</b> (julio 2025) — Fase 3 de fortalecimiento legal: añadida sección de mecanismo de consentimiento de cookies (rechazo, revocación, consentimiento afirmativo), añadidos controles de granularidad de cookies (esenciales, funcionales, analíticas), añadidas instrucciones de gestión de almacenamiento del navegador (Chrome, Safari, Firefox, Edge), añadida declaración de accesibilidad, añadida referencia cruzada de retención de datos a la Política de Privacidad, estandarizados correos electrónicos de contacto a legal@lumenlingo.com.",
    "fr": "<b>v1.2</b> (juillet 2025) — Phase 3 de renforcement juridique : ajout de la section mécanisme de consentement aux cookies (refus, retrait, consentement affirmatif), ajout des contrôles de granularité des cookies (essentiels, fonctionnels, analytiques), ajout des instructions de gestion du stockage navigateur (Chrome, Safari, Firefox, Edge), ajout de la déclaration d'accessibilité, ajout de la référence croisée de conservation des données vers la Politique de confidentialité, standardisation des e-mails de contact à legal@lumenlingo.com.",
    "ja": "<b>v1.2</b>（2025年7月）— フェーズ3法的強化：Cookieの同意メカニズムセクション（拒否、撤回、明確な同意）を追加、Cookieの粒度制御（必須、機能、分析）を追加、ブラウザストレージ管理手順（Chrome、Safari、Firefox、Edge）を追加、アクセシビリティ声明を追加、プライバシーポリシーへのデータ保持の相互参照を追加、連絡先メールをlegal@lumenlingo.comに標準化。",
    "zh": "<b>v1.2</b>（2025年7月）— 第三阶段法律强化：添加了Cookie同意机制部分（拒绝、撤回、明确同意），添加了Cookie粒度控制（必要、功能、分析），添加了浏览器存储管理说明（Chrome、Safari、Firefox、Edge），添加了无障碍声明，添加了引用隐私政策的数据保留交叉引用，将联系电子邮件标准化为legal@lumenlingo.com。",
    "ar": "<b>v1.2</b> (يوليو 2025) — المرحلة 3 من التعزيز القانوني: إضافة قسم آلية الموافقة على ملفات تعريف الارتباط (الرفض والسحب والموافقة الصريحة)، إضافة ضوابط تفصيلية لملفات تعريف الارتباط (أساسية ووظيفية وتحليلية)، إضافة تعليمات إدارة تخزين المتصفح (Chrome وSafari وFirefox وEdge)، إضافة بيان إمكانية الوصول، إضافة إشارة مرجعية للاحتفاظ بالبيانات إلى سياسة الخصوصية، توحيد عناوين البريد الإلكتروني على legal@lumenlingo.com.",
    "uk": "<b>v1.2</b> (липень 2025) — Фаза 3 юридичного зміцнення: додано розділ механізму згоди на файли cookie (відмова, відкликання, явна згода), додано гранулярні налаштування cookie (необхідні, функціональні, аналітичні), додано інструкції з управління сховищем браузера (Chrome, Safari, Firefox, Edge), додано заяву про доступність, додано перехресне посилання на зберігання даних у Політиці конфіденційності, стандартизовано контактні адреси електронної пошти на legal@lumenlingo.com.",
}

applied = 0
for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)

    # ── Legal.version (Privacy) ──
    if "Legal" in data:
        old_v = data["Legal"].get("version", "")
        if "2.2" in old_v:
            data["Legal"]["version"] = LEGAL_VERSION[loc]
            print(f"  [{loc}] Legal.version -> {LEGAL_VERSION[loc]}")
            applied += 1

        old_tv = data["Legal"].get("termsVersion", "")
        if "1.2" in old_tv:
            data["Legal"]["termsVersion"] = TERMS_VERSION[loc]
            print(f"  [{loc}] Legal.termsVersion -> {TERMS_VERSION[loc]}")
            applied += 1

        old_ev = data["Legal"].get("eulaVersion", "")
        if "1.1" in old_ev:
            data["Legal"]["eulaVersion"] = EULA_VERSION[loc]
            print(f"  [{loc}] Legal.eulaVersion -> {EULA_VERSION[loc]}")
            applied += 1

    # ── CookiePage.updates.version ──
    if "CookiePage" in data and "updates" in data["CookiePage"]:
        data["CookiePage"]["updates"]["version"] = COOKIE_VERSION[loc]
        print(f"  [{loc}] CookiePage.updates.version -> 1.2")
        applied += 1

    # ── Changelog entries ──
    # Privacy.policyUpdates.v2_3
    if "Privacy" in data and "policyUpdates" in data["Privacy"]:
        if "v2_3" not in data["Privacy"]["policyUpdates"]:
            data["Privacy"]["policyUpdates"]["v2_3"] = PRIVACY_CHANGELOG[loc]
            print(f"  [{loc}] Added Privacy.policyUpdates.v2_3")
            applied += 1

    # Terms.changes.v1_3
    if "Terms" in data and "changes" in data["Terms"]:
        if "v1_3" not in data["Terms"]["changes"]:
            data["Terms"]["changes"]["v1_3"] = TERMS_CHANGELOG[loc]
            print(f"  [{loc}] Added Terms.changes.v1_3")
            applied += 1

    # Eula.changes.v1_2
    if "Eula" in data and "changes" in data["Eula"]:
        if "v1_2" not in data["Eula"]["changes"]:
            data["Eula"]["changes"]["v1_2"] = EULA_CHANGELOG[loc]
            print(f"  [{loc}] Added Eula.changes.v1_2")
            applied += 1

    # CookiePage.updates.v1_2
    if "CookiePage" in data and "updates" in data["CookiePage"]:
        if "v1_2" not in data["CookiePage"]["updates"]:
            data["CookiePage"]["updates"]["v1_2"] = COOKIE_CHANGELOG[loc]
            print(f"  [{loc}] Added CookiePage.updates.v1_2")
            applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")

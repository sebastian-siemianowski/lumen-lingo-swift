#!/usr/bin/env python3
"""Epic 12: EULA — Critical Compliance Fixes.

Story 12.1: Add statutory liability carve-outs (death/injury, fraud, CRA 2015)
Story 12.2: Add export compliance / legal compliance clause
Story 12.3: Add open-source licence acknowledgement
Story 12.4: Add CRA 2015 savings clause to warranty section
Story 12.5: Add right-to-update-app clause
Story 12.6: Add data handling on termination clause
"""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

# ═══════════════════════════════════════════════════════════
# Story 12.1: Statutory liability carve-outs
# ═══════════════════════════════════════════════════════════
LIABILITY_STATUTORY = {
    "en": "Nothing in this EULA excludes or limits our liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; (c) any liability that cannot be excluded or limited under the Consumer Rights Act 2015; or (d) any other liability that cannot be excluded or limited by law.",
    "pl": "Żadne postanowienie niniejszej Umowy EULA nie wyłącza ani nie ogranicza naszej odpowiedzialności za: (a) śmierć lub uszkodzenie ciała spowodowane naszym zaniedbaniem; (b) oszustwo lub oszukańcze wprowadzenie w błąd; (c) jakąkolwiek odpowiedzialność, której nie można wyłączyć lub ograniczyć na mocy Consumer Rights Act 2015; ani (d) jakąkolwiek inną odpowiedzialność, której nie można wyłączyć lub ograniczyć na mocy prawa.",
    "de": "Nichts in dieser EULA schließt unsere Haftung aus oder beschränkt sie für: (a) Tod oder Körperverletzung durch unsere Fahrlässigkeit; (b) Betrug oder arglistige Täuschung; (c) jede Haftung, die nach dem Consumer Rights Act 2015 nicht ausgeschlossen oder beschränkt werden kann; oder (d) jede andere Haftung, die gesetzlich nicht ausgeschlossen oder beschränkt werden kann.",
    "es": "Nada en este CLUF excluye o limita nuestra responsabilidad por: (a) muerte o lesiones personales causadas por nuestra negligencia; (b) fraude o tergiversación fraudulenta; (c) cualquier responsabilidad que no pueda excluirse o limitarse en virtud de la Consumer Rights Act 2015; ni (d) cualquier otra responsabilidad que no pueda excluirse o limitarse por ley.",
    "fr": "Rien dans ce CLUF n'exclut ou ne limite notre responsabilité pour : (a) décès ou dommages corporels causés par notre négligence ; (b) fraude ou déclaration frauduleuse ; (c) toute responsabilité qui ne peut être exclue ou limitée en vertu du Consumer Rights Act 2015 ; ni (d) toute autre responsabilité qui ne peut être exclue ou limitée par la loi.",
    "ja": "本EULAのいかなる条項も、以下に関する当社の責任を除外または制限するものではありません：(a) 当社の過失による死亡または人身傷害、(b) 詐欺または詐欺的不実表示、(c) Consumer Rights Act 2015の下で除外または制限できない責任、(d) 法律により除外または制限できないその他の責任。",
    "zh": "本EULA的任何内容均不排除或限制我们对以下事项的责任：(a) 因我们的过失造成的死亡或人身伤害；(b) 欺诈或欺诈性虚假陈述；(c) 根据《2015年消费者权益法》不能被排除或限制的任何责任；或 (d) 法律不能排除或限制的任何其他责任。",
    "ar": "لا شيء في اتفاقية الترخيص هذه يستبعد أو يحد من مسؤوليتنا عن: (أ) الوفاة أو الإصابة الجسدية الناجمة عن إهمالنا؛ (ب) الاحتيال أو التحريف الاحتيالي؛ (ج) أي مسؤولية لا يمكن استبعادها أو تقييدها بموجب قانون حقوق المستهلك 2015؛ أو (د) أي مسؤولية أخرى لا يمكن استبعادها أو تقييدها بموجب القانون.",
    "uk": "Жодне положення цієї EULA не виключає і не обмежує нашу відповідальність за: (a) смерть або тілесні ушкодження, спричинені нашою недбалістю; (b) шахрайство або шахрайське введення в оману; (c) будь-яку відповідальність, яка не може бути виключена або обмежена відповідно до Consumer Rights Act 2015; або (d) будь-яку іншу відповідальність, яка не може бути виключена або обмежена законом."
}

# ═══════════════════════════════════════════════════════════
# Story 12.2: Export compliance / legal compliance
# ═══════════════════════════════════════════════════════════
EXPORT_COMPLIANCE = {
    "en": {
        "heading": "Export Compliance",
        "p1": "You represent and warrant that you are not located in a country that is subject to a United States or United Kingdom government embargo, or that has been designated by the US or UK government as a \"terrorist-supporting\" country.",
        "p2": "You represent and warrant that you are not listed on any US or UK government list of prohibited or restricted parties, including the US Treasury Department's Specially Designated Nationals List or the US Department of Commerce's Denied Persons List.",
        "p3": "You agree to comply with all applicable export and import laws and regulations, including the UK Export Control Act 2002, the US Export Administration Regulations (EAR), and any other applicable trade compliance requirements.",
        "p4": "The App uses encryption technologies that may be subject to export controls. The App qualifies for ENC/Unrestricted classification under the EAR as a mass-market encryption product."
    },
    "pl": {
        "heading": "Zgodność z przepisami eksportowymi",
        "p1": "Oświadczasz i gwarantujesz, że nie znajdujesz się w kraju objętym embargiem rządu Stanów Zjednoczonych lub Wielkiej Brytanii, ani w kraju uznanym przez rząd USA lub Wielkiej Brytanii za \"wspierający terroryzm\".",
        "p2": "Oświadczasz i gwarantujesz, że nie figurujesz na żadnej liście rządowej USA lub Wielkiej Brytanii osób zakazanych lub objętych ograniczeniami.",
        "p3": "Zgadzasz się przestrzegać wszystkich obowiązujących przepisów eksportowych i importowych, w tym UK Export Control Act 2002, US Export Administration Regulations (EAR) oraz wszelkich innych obowiązujących wymogów dotyczących zgodności handlowej.",
        "p4": "Aplikacja wykorzystuje technologie szyfrowania, które mogą podlegać kontroli eksportowej. Aplikacja kwalifikuje się do klasyfikacji ENC/Unrestricted zgodnie z EAR jako masowy produkt szyfrujący."
    },
    "de": {
        "heading": "Exportkontrolle",
        "p1": "Sie erklären und gewährleisten, dass Sie sich nicht in einem Land befinden, das einem Embargo der US- oder UK-Regierung unterliegt oder als \"terrorunterstützend\" eingestuft wurde.",
        "p2": "Sie erklären und gewährleisten, dass Sie auf keiner Liste verbotener oder eingeschränkter Parteien der US- oder UK-Regierung stehen.",
        "p3": "Sie erklären sich bereit, alle geltenden Export- und Importgesetze und -vorschriften einzuhalten, einschließlich des UK Export Control Act 2002, der US Export Administration Regulations (EAR) und aller anderen geltenden Handelsanforderungen.",
        "p4": "Die App verwendet Verschlüsselungstechnologien, die Exportkontrollen unterliegen können. Die App qualifiziert sich gemäß den EAR als Massenmarkt-Verschlüsselungsprodukt für die ENC/Unrestricted-Klassifizierung."
    },
    "es": {
        "heading": "Cumplimiento de exportación",
        "p1": "Usted declara y garantiza que no se encuentra en un país sujeto a embargo del gobierno de los Estados Unidos o del Reino Unido, ni en un país designado como país que \"apoya el terrorismo\".",
        "p2": "Usted declara y garantiza que no figura en ninguna lista de personas prohibidas o restringidas del gobierno de EE. UU. o del Reino Unido.",
        "p3": "Acepta cumplir con todas las leyes y regulaciones de exportación e importación aplicables, incluidas la UK Export Control Act 2002, las US Export Administration Regulations (EAR) y cualquier otro requisito de cumplimiento comercial aplicable.",
        "p4": "La aplicación utiliza tecnologías de cifrado que pueden estar sujetas a controles de exportación. La aplicación se clasifica como ENC/Unrestricted según las EAR como producto de cifrado de mercado masivo."
    },
    "fr": {
        "heading": "Conformité à l'exportation",
        "p1": "Vous déclarez et garantissez que vous ne vous trouvez pas dans un pays soumis à un embargo du gouvernement des États-Unis ou du Royaume-Uni, ni dans un pays désigné comme \"soutenant le terrorisme\".",
        "p2": "Vous déclarez et garantissez que vous ne figurez sur aucune liste de parties interdites ou restreintes du gouvernement américain ou britannique.",
        "p3": "Vous acceptez de vous conformer à toutes les lois et réglementations applicables en matière d'exportation et d'importation, y compris le UK Export Control Act 2002, les US Export Administration Regulations (EAR) et toute autre exigence de conformité commerciale applicable.",
        "p4": "L'application utilise des technologies de chiffrement qui peuvent être soumises à des contrôles à l'exportation. L'application est classée ENC/Unrestricted selon les EAR en tant que produit de chiffrement grand public."
    },
    "ja": {
        "heading": "輸出コンプライアンス",
        "p1": "お客様は、米国または英国政府の禁輸措置の対象国、または「テロ支援」国に所在していないことを表明し保証します。",
        "p2": "お客様は、米国または英国政府の禁止または制限対象者リストに記載されていないことを表明し保証します。",
        "p3": "お客様は、UK Export Control Act 2002、US Export Administration Regulations（EAR）、およびその他の適用される貿易コンプライアンス要件を含む、すべての適用される輸出入法規を遵守することに同意します。",
        "p4": "本アプリは輸出規制の対象となりうる暗号化技術を使用しています。本アプリはEARに基づき大衆市場暗号化製品としてENC/Unrestricted分類に該当します。"
    },
    "zh": {
        "heading": "出口合规",
        "p1": "您声明并保证您不在受美国或英国政府禁运的国家，也不在被美国或英国政府指定为\"支持恐怖主义\"的国家。",
        "p2": "您声明并保证您未被列入任何美国或英国政府的禁止或限制方名单。",
        "p3": "您同意遵守所有适用的出口和进口法律法规，包括UK Export Control Act 2002、US Export Administration Regulations（EAR）及任何其他适用的贸易合规要求。",
        "p4": "本应用使用可能受出口管制的加密技术。本应用根据EAR作为大众市场加密产品符合ENC/Unrestricted分类。"
    },
    "ar": {
        "heading": "الامتثال للتصدير",
        "p1": "تقر وتضمن أنك لست في بلد يخضع لحظر حكومة الولايات المتحدة أو المملكة المتحدة، أو تم تصنيفه كبلد \"داعم للإرهاب\".",
        "p2": "تقر وتضمن أنك غير مدرج في أي قائمة حكومية أمريكية أو بريطانية للأطراف المحظورة أو المقيدة.",
        "p3": "توافق على الامتثال لجميع قوانين ولوائح التصدير والاستيراد المعمول بها، بما في ذلك UK Export Control Act 2002 و US Export Administration Regulations (EAR) وأي متطلبات امتثال تجاري أخرى معمول بها.",
        "p4": "يستخدم التطبيق تقنيات تشفير قد تخضع لضوابط التصدير. يتأهل التطبيق لتصنيف ENC/Unrestricted بموجب EAR كمنتج تشفير للسوق الشامل."
    },
    "uk": {
        "heading": "Експортний комплаєнс",
        "p1": "Ви заявляєте та гарантуєте, що не знаходитесь у країні, яка підпадає під ембарго уряду Сполучених Штатів або Великої Британії, або яка була визначена як країна, що \"підтримує тероризм\".",
        "p2": "Ви заявляєте та гарантуєте, що не включені до жодного списку заборонених або обмежених осіб урядів США або Великої Британії.",
        "p3": "Ви погоджуєтесь дотримуватися всіх застосовних законів та правил експорту та імпорту, включаючи UK Export Control Act 2002, US Export Administration Regulations (EAR) та будь-які інші застосовні вимоги торговельного комплаєнсу.",
        "p4": "Додаток використовує технології шифрування, які можуть підлягати експортному контролю. Додаток кваліфікується за класифікацією ENC/Unrestricted відповідно до EAR як масовий продукт шифрування."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 12.3: Open-source licence acknowledgement
# ═══════════════════════════════════════════════════════════
OPEN_SOURCE = {
    "en": {
        "heading": "Open-Source Software",
        "p1": "The App incorporates open-source software components, each governed by its own licence terms. These licence terms may grant you additional rights beyond those in this EULA.",
        "p2": "The following open-source libraries are used in the App:",
        "li1": "<b>Nuke</b> (image loading) — MIT Licence",
        "li2": "<b>PhoneNumberKit</b> (phone number parsing) — MIT Licence",
        "li3": "<b>RevenueCat Purchases</b> (subscription management) — MIT Licence",
        "li4": "<b>Clerk iOS SDK</b> (authentication) — MIT Licence",
        "p3": "You may view the full text of each licence within the App under Settings > Open Source Licences, or by contacting us at legal@lumenlingo.com."
    },
    "pl": {
        "heading": "Oprogramowanie open source",
        "p1": "Aplikacja zawiera komponenty oprogramowania o otwartym kodzie źródłowym, z których każdy podlega własnym warunkom licencyjnym. Te warunki licencyjne mogą przyznawać Ci dodatkowe prawa wykraczające poza niniejszą Umowę EULA.",
        "p2": "W aplikacji wykorzystywane są następujące biblioteki open source:",
        "li1": "<b>Nuke</b> (ładowanie obrazów) — Licencja MIT",
        "li2": "<b>PhoneNumberKit</b> (przetwarzanie numerów telefonu) — Licencja MIT",
        "li3": "<b>RevenueCat Purchases</b> (zarządzanie subskrypcjami) — Licencja MIT",
        "li4": "<b>Clerk iOS SDK</b> (uwierzytelnianie) — Licencja MIT",
        "p3": "Pełny tekst każdej licencji możesz wyświetlić w Aplikacji w Ustawienia > Licencje Open Source lub kontaktując się z nami pod adresem legal@lumenlingo.com."
    },
    "de": {
        "heading": "Open-Source-Software",
        "p1": "Die App enthält Open-Source-Softwarekomponenten, die jeweils eigenen Lizenzbedingungen unterliegen. Diese Lizenzbedingungen können Ihnen zusätzliche Rechte über diese EULA hinaus einräumen.",
        "p2": "Die folgenden Open-Source-Bibliotheken werden in der App verwendet:",
        "li1": "<b>Nuke</b> (Bildladen) — MIT-Lizenz",
        "li2": "<b>PhoneNumberKit</b> (Telefonnummernverarbeitung) — MIT-Lizenz",
        "li3": "<b>RevenueCat Purchases</b> (Abonnementverwaltung) — MIT-Lizenz",
        "li4": "<b>Clerk iOS SDK</b> (Authentifizierung) — MIT-Lizenz",
        "p3": "Den vollständigen Text jeder Lizenz können Sie in der App unter Einstellungen > Open-Source-Lizenzen oder per E-Mail an legal@lumenlingo.com einsehen."
    },
    "es": {
        "heading": "Software de código abierto",
        "p1": "La aplicación incorpora componentes de software de código abierto, cada uno regido por sus propios términos de licencia. Estos términos pueden otorgarle derechos adicionales más allá de los de este CLUF.",
        "p2": "Las siguientes bibliotecas de código abierto se utilizan en la aplicación:",
        "li1": "<b>Nuke</b> (carga de imágenes) — Licencia MIT",
        "li2": "<b>PhoneNumberKit</b> (análisis de números telefónicos) — Licencia MIT",
        "li3": "<b>RevenueCat Purchases</b> (gestión de suscripciones) — Licencia MIT",
        "li4": "<b>Clerk iOS SDK</b> (autenticación) — Licencia MIT",
        "p3": "Puede ver el texto completo de cada licencia dentro de la aplicación en Configuración > Licencias de código abierto, o contactándonos en legal@lumenlingo.com."
    },
    "fr": {
        "heading": "Logiciels open source",
        "p1": "L'application intègre des composants logiciels open source, chacun régi par ses propres termes de licence. Ces termes de licence peuvent vous accorder des droits supplémentaires au-delà de ce CLUF.",
        "p2": "Les bibliothèques open source suivantes sont utilisées dans l'application :",
        "li1": "<b>Nuke</b> (chargement d'images) — Licence MIT",
        "li2": "<b>PhoneNumberKit</b> (analyse de numéros de téléphone) — Licence MIT",
        "li3": "<b>RevenueCat Purchases</b> (gestion des abonnements) — Licence MIT",
        "li4": "<b>Clerk iOS SDK</b> (authentification) — Licence MIT",
        "p3": "Vous pouvez consulter le texte complet de chaque licence dans l'application sous Paramètres > Licences open source, ou en nous contactant à legal@lumenlingo.com."
    },
    "ja": {
        "heading": "オープンソースソフトウェア",
        "p1": "本アプリにはオープンソースソフトウェアコンポーネントが含まれており、それぞれ独自のライセンス条件に従います。これらのライセンス条件は、本EULAを超える追加の権利をお客様に付与する場合があります。",
        "p2": "本アプリでは以下のオープンソースライブラリを使用しています：",
        "li1": "<b>Nuke</b>（画像読み込み） — MITライセンス",
        "li2": "<b>PhoneNumberKit</b>（電話番号解析） — MITライセンス",
        "li3": "<b>RevenueCat Purchases</b>（サブスクリプション管理） — MITライセンス",
        "li4": "<b>Clerk iOS SDK</b>（認証） — MITライセンス",
        "p3": "各ライセンスの全文はアプリ内の設定 > オープンソースライセンスで、またはlegal@lumenlingo.comまでお問い合わせいただくことでご覧いただけます。"
    },
    "zh": {
        "heading": "开源软件",
        "p1": "本应用包含开源软件组件，每个组件均受其自身许可条款约束。这些许可条款可能授予您本EULA之外的额外权利。",
        "p2": "本应用使用以下开源库：",
        "li1": "<b>Nuke</b>（图像加载） — MIT许可证",
        "li2": "<b>PhoneNumberKit</b>（电话号码解析） — MIT许可证",
        "li3": "<b>RevenueCat Purchases</b>（订阅管理） — MIT许可证",
        "li4": "<b>Clerk iOS SDK</b>（认证） — MIT许可证",
        "p3": "您可以在应用内的设置 > 开源许可证中查看每个许可证的全文，或发送邮件至legal@lumenlingo.com联系我们。"
    },
    "ar": {
        "heading": "البرمجيات مفتوحة المصدر",
        "p1": "يتضمن التطبيق مكونات برمجية مفتوحة المصدر، يخضع كل منها لشروط ترخيص خاصة به. قد تمنحك شروط الترخيص هذه حقوقاً إضافية تتجاوز هذه الاتفاقية.",
        "p2": "يتم استخدام المكتبات مفتوحة المصدر التالية في التطبيق:",
        "li1": "<b>Nuke</b> (تحميل الصور) — ترخيص MIT",
        "li2": "<b>PhoneNumberKit</b> (تحليل أرقام الهاتف) — ترخيص MIT",
        "li3": "<b>RevenueCat Purchases</b> (إدارة الاشتراكات) — ترخيص MIT",
        "li4": "<b>Clerk iOS SDK</b> (المصادقة) — ترخيص MIT",
        "p3": "يمكنك عرض النص الكامل لكل ترخيص داخل التطبيق في الإعدادات > تراخيص المصادر المفتوحة، أو بالاتصال بنا على legal@lumenlingo.com."
    },
    "uk": {
        "heading": "Програмне забезпечення з відкритим кодом",
        "p1": "Додаток містить компоненти програмного забезпечення з відкритим кодом, кожен з яких регулюється власними умовами ліцензії. Ці умови ліцензії можуть надавати вам додаткові права, що виходять за межі цієї EULA.",
        "p2": "У додатку використовуються наступні бібліотеки з відкритим кодом:",
        "li1": "<b>Nuke</b> (завантаження зображень) — Ліцензія MIT",
        "li2": "<b>PhoneNumberKit</b> (обробка телефонних номерів) — Ліцензія MIT",
        "li3": "<b>RevenueCat Purchases</b> (управління підписками) — Ліцензія MIT",
        "li4": "<b>Clerk iOS SDK</b> (автентифікація) — Ліцензія MIT",
        "p3": "Повний текст кожної ліцензії можна переглянути в додатку в розділі Налаштування > Ліцензії відкритого коду, або зв'язавшись з нами за адресою legal@lumenlingo.com."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 12.4: CRA 2015 savings clause in warranty section
# ═══════════════════════════════════════════════════════════
WARRANTIES_CRA_SAVINGS = {
    "en": "Your statutory rights under the Consumer Rights Act 2015 are not affected by this disclaimer. Digital content supplied by LumenShore must be of satisfactory quality, fit for a particular purpose, and as described (CRA 2015, sections 34-36). These rights cannot be excluded.",
    "pl": "Twoje prawa ustawowe na mocy Consumer Rights Act 2015 nie są naruszane przez to zastrzeżenie. Treści cyfrowe dostarczane przez LumenShore muszą być zadowalającej jakości, odpowiednie do określonego celu i zgodne z opisem (CRA 2015, sekcje 34-36). Prawa te nie mogą być wyłączone.",
    "de": "Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015 werden durch diesen Haftungsausschluss nicht berührt. Von LumenShore gelieferte digitale Inhalte müssen von zufriedenstellender Qualität sein, für einen bestimmten Zweck geeignet und wie beschrieben sein (CRA 2015, Abschnitte 34-36). Diese Rechte können nicht ausgeschlossen werden.",
    "es": "Sus derechos legales en virtud de la Consumer Rights Act 2015 no se ven afectados por esta exención de responsabilidad. El contenido digital suministrado por LumenShore debe ser de calidad satisfactoria, apto para un propósito particular y conforme a la descripción (CRA 2015, secciones 34-36). Estos derechos no pueden ser excluidos.",
    "fr": "Vos droits légaux en vertu du Consumer Rights Act 2015 ne sont pas affectés par cette clause de non-responsabilité. Le contenu numérique fourni par LumenShore doit être de qualité satisfaisante, adapté à un usage particulier et conforme à la description (CRA 2015, sections 34-36). Ces droits ne peuvent être exclus.",
    "ja": "Consumer Rights Act 2015に基づくお客様の法的権利は、この免責事項の影響を受けません。LumenShoreが提供するデジタルコンテンツは、満足のいく品質であり、特定の目的に適合し、記述通りでなければなりません（CRA 2015、第34-36条）。これらの権利は除外できません。",
    "zh": "您根据《2015年消费者权益法》享有的法定权利不受本免责声明的影响。LumenShore提供的数字内容必须质量令人满意、适合特定用途并与描述相符（CRA 2015，第34-36条）。这些权利不能被排除。",
    "ar": "حقوقك القانونية بموجب قانون حقوق المستهلك 2015 لا تتأثر بهذا الإخلاء من المسؤولية. يجب أن يكون المحتوى الرقمي المقدم من LumenShore ذا جودة مرضية ومناسباً لغرض معين ومطابقاً للوصف (CRA 2015، الأقسام 34-36). لا يمكن استبعاد هذه الحقوق.",
    "uk": "Ваші законні права відповідно до Consumer Rights Act 2015 не зачіпаються цією відмовою від відповідальності. Цифровий контент, наданий LumenShore, повинен бути задовільної якості, придатний для певної мети та відповідати опису (CRA 2015, розділи 34-36). Ці права не можуть бути виключені."
}

# ═══════════════════════════════════════════════════════════
# Story 12.5: Right to update app
# ═══════════════════════════════════════════════════════════
APP_UPDATES = {
    "en": {
        "heading": "App Updates",
        "p1": "LumenShore may from time to time release updates, patches, bug fixes, and new features for the App. These updates may be delivered automatically through the Apple App Store.",
        "p2": "You can manage automatic updates in your iOS Settings under App Store > Automatic Downloads. We recommend keeping automatic updates enabled to ensure you have the latest security patches and features.",
        "p3": "If LumenShore decides to discontinue the App, we will provide at least 30 days' notice to paid subscribers. During this notice period, you may export your learning data and cancel your subscription for a pro-rata refund of any prepaid period.",
        "p4": "Your continued use of the App after an update constitutes acceptance of any changes included in that update. If you do not agree to the changes, your remedy is to delete the App and request a pro-rata refund for any remaining prepaid subscription period."
    },
    "pl": {
        "heading": "Aktualizacje aplikacji",
        "p1": "LumenShore może od czasu do czasu wydawać aktualizacje, poprawki, łatki i nowe funkcje dla Aplikacji. Te aktualizacje mogą być dostarczane automatycznie przez Apple App Store.",
        "p2": "Możesz zarządzać automatycznymi aktualizacjami w Ustawieniach iOS w App Store > Automatyczne pobieranie. Zalecamy włączenie automatycznych aktualizacji, aby zapewnić posiadanie najnowszych poprawek bezpieczeństwa i funkcji.",
        "p3": "Jeśli LumenShore zdecyduje się wycofać Aplikację, powiadomimy płacących subskrybentów z co najmniej 30-dniowym wyprzedzeniem. W tym okresie możesz wyeksportować dane edukacyjne i anulować subskrypcję w celu proporcjonalnego zwrotu za niewykorzystany okres.",
        "p4": "Dalsze korzystanie z Aplikacji po aktualizacji oznacza akceptację wszelkich zmian zawartych w tej aktualizacji. Jeśli nie zgadzasz się ze zmianami, przysługuje Ci prawo do usunięcia Aplikacji i zażądania proporcjonalnego zwrotu za pozostały opłacony okres subskrypcji."
    },
    "de": {
        "heading": "App-Aktualisierungen",
        "p1": "LumenShore kann von Zeit zu Zeit Updates, Patches, Fehlerbehebungen und neue Funktionen für die App veröffentlichen. Diese Updates können automatisch über den Apple App Store bereitgestellt werden.",
        "p2": "Sie können automatische Updates in Ihren iOS-Einstellungen unter App Store > Automatische Downloads verwalten. Wir empfehlen, automatische Updates aktiviert zu lassen.",
        "p3": "Wenn LumenShore beschließt, die App einzustellen, werden wir zahlende Abonnenten mindestens 30 Tage im Voraus benachrichtigen. Während dieser Frist können Sie Ihre Lerndaten exportieren und Ihr Abonnement anteilig kündigen.",
        "p4": "Ihre fortgesetzte Nutzung der App nach einem Update stellt die Akzeptanz aller in diesem Update enthaltenen Änderungen dar. Wenn Sie nicht einverstanden sind, besteht Ihr Rechtsmittel darin, die App zu löschen und eine anteilige Rückerstattung zu beantragen."
    },
    "es": {
        "heading": "Actualizaciones de la aplicación",
        "p1": "LumenShore puede publicar periódicamente actualizaciones, parches, correcciones de errores y nuevas funciones para la aplicación. Estas actualizaciones pueden entregarse automáticamente a través del Apple App Store.",
        "p2": "Puede gestionar las actualizaciones automáticas en Configuración de iOS en App Store > Descargas automáticas. Recomendamos mantener las actualizaciones automáticas habilitadas.",
        "p3": "Si LumenShore decide descontinuar la aplicación, notificaremos a los suscriptores de pago con al menos 30 días de antelación. Durante este período, puede exportar sus datos de aprendizaje y cancelar su suscripción para obtener un reembolso proporcional.",
        "p4": "Su uso continuo de la aplicación después de una actualización constituye la aceptación de cualquier cambio incluido. Si no está de acuerdo, su recurso es eliminar la aplicación y solicitar un reembolso proporcional."
    },
    "fr": {
        "heading": "Mises à jour de l'application",
        "p1": "LumenShore peut publier périodiquement des mises à jour, des correctifs et de nouvelles fonctionnalités pour l'application. Ces mises à jour peuvent être livrées automatiquement via l'Apple App Store.",
        "p2": "Vous pouvez gérer les mises à jour automatiques dans vos paramètres iOS sous App Store > Téléchargements automatiques. Nous recommandons de les garder activées.",
        "p3": "Si LumenShore décide d'arrêter l'application, nous préviendrons les abonnés payants au moins 30 jours à l'avance. Pendant cette période, vous pourrez exporter vos données et annuler votre abonnement pour un remboursement au prorata.",
        "p4": "Votre utilisation continue de l'application après une mise à jour constitue l'acceptation des modifications incluses. En cas de désaccord, votre recours est de supprimer l'application et de demander un remboursement au prorata."
    },
    "ja": {
        "heading": "アプリのアップデート",
        "p1": "LumenShoreは随時、アプリのアップデート、パッチ、バグ修正、および新機能をリリースすることがあります。これらのアップデートはApple App Storeを通じて自動的に配信される場合があります。",
        "p2": "自動アップデートはiOS設定のApp Store > 自動ダウンロードで管理できます。最新のセキュリティパッチと機能を確保するために、自動アップデートを有効にしておくことを推奨します。",
        "p3": "LumenShoreがアプリの提供を終了する場合、有料サブスクリプション会員には少なくとも30日前に通知します。この通知期間中に学習データをエクスポートし、前払い期間の日割り返金のためにサブスクリプションをキャンセルすることができます。",
        "p4": "アップデート後のアプリの継続使用は、そのアップデートに含まれる変更の承諾となります。変更に同意しない場合、アプリを削除し、残りの前払いサブスクリプション期間の日割り返金を要求することが救済手段です。"
    },
    "zh": {
        "heading": "应用更新",
        "p1": "LumenShore可能会不时发布应用的更新、补丁、错误修复和新功能。这些更新可能通过Apple App Store自动交付。",
        "p2": "您可以在iOS设置的App Store > 自动下载中管理自动更新。我们建议保持自动更新开启以确保拥有最新的安全补丁和功能。",
        "p3": "如果LumenShore决定停止提供应用，我们将至少提前30天通知付费订阅者。在此通知期内，您可以导出学习数据并取消订阅以获得任何预付期间的按比例退款。",
        "p4": "更新后继续使用应用即表示接受该更新中包含的任何更改。如果您不同意更改，您的补救措施是删除应用并申请剩余预付订阅期间的按比例退款。"
    },
    "ar": {
        "heading": "تحديثات التطبيق",
        "p1": "قد يصدر LumenShore من وقت لآخر تحديثات وتصحيحات وإصلاحات للأخطاء وميزات جديدة للتطبيق. قد يتم تسليم هذه التحديثات تلقائياً عبر Apple App Store.",
        "p2": "يمكنك إدارة التحديثات التلقائية في إعدادات iOS تحت App Store > التنزيلات التلقائية. نوصي بإبقاء التحديثات التلقائية مفعلة.",
        "p3": "إذا قرر LumenShore إيقاف التطبيق، سنقدم إشعاراً قبل 30 يوماً على الأقل للمشتركين المدفوعين. خلال فترة الإشعار، يمكنك تصدير بيانات التعلم الخاصة بك وإلغاء اشتراكك للحصول على استرداد تناسبي.",
        "p4": "استمرارك في استخدام التطبيق بعد التحديث يشكل قبولاً لأي تغييرات متضمنة فيه. إذا لم توافق على التغييرات، فإن طريقة الانتصاف المتاحة لك هي حذف التطبيق وطلب استرداد تناسبي."
    },
    "uk": {
        "heading": "Оновлення додатка",
        "p1": "LumenShore може час від часу випускати оновлення, патчі, виправлення помилок та нові функції для Додатка. Ці оновлення можуть доставлятися автоматично через Apple App Store.",
        "p2": "Ви можете керувати автоматичними оновленнями в налаштуваннях iOS у розділі App Store > Автоматичні завантаження. Ми рекомендуємо залишати автоматичні оновлення увімкненими.",
        "p3": "Якщо LumenShore вирішить припинити роботу Додатка, ми повідомимо платних підписників щонайменше за 30 днів. Протягом цього періоду ви можете експортувати свої дані навчання та скасувати підписку для пропорційного відшкодування.",
        "p4": "Продовження використання Додатка після оновлення означає прийняття будь-яких змін, включених в це оновлення. Якщо ви не погоджуєтесь зі змінами, ваш засіб правового захисту — видалити Додаток і подати запит на пропорційне відшкодування."
    }
}

# ═══════════════════════════════════════════════════════════
# Story 12.6: Data handling on termination
# ═══════════════════════════════════════════════════════════
DATA_HANDLING = {
    "en": {
        "heading": "Data Handling on Termination",
        "p1": "Before terminating this EULA or deleting the App, we recommend that you export your learning data via the App's Settings > Export Data feature.",
        "p2": "When you uninstall the App, all locally stored data — including your learning progress, preferences, and practice history — is permanently deleted from your device.",
        "p3": "Your iCloud data (if iCloud sync was enabled) remains under your control. You can manage or delete this data at any time via your device's Settings > [Your Name] > iCloud > Manage Storage > LumenLingo.",
        "p4": "Subscription entitlements are managed by Apple. To cancel your subscription, go to Settings > [Your Name] > Subscriptions on your iOS device. Cancellation does not trigger a refund for the current billing period but prevents future charges.",
        "p5": "For formal data erasure requests under UK GDPR Article 17, please refer to our Privacy Policy or submit a request via our Data Request page. We will respond within 30 calendar days."
    },
    "pl": {
        "heading": "Postępowanie z danymi po rozwiązaniu umowy",
        "p1": "Przed rozwiązaniem niniejszej Umowy EULA lub usunięciem Aplikacji zalecamy wyeksportowanie danych edukacyjnych za pomocą funkcji Ustawienia > Eksport danych w Aplikacji.",
        "p2": "Po odinstalowaniu Aplikacji wszystkie dane przechowywane lokalnie — w tym postępy w nauce, preferencje i historia praktyki — są trwale usuwane z urządzenia.",
        "p3": "Twoje dane iCloud (jeśli synchronizacja iCloud była włączona) pozostają pod Twoją kontrolą. Możesz zarządzać tymi danymi lub je usunąć w dowolnym momencie w Ustawienia > [Twoje imię] > iCloud > Zarządzaj miejscem > LumenLingo.",
        "p4": "Uprawnienia subskrypcyjne są zarządzane przez Apple. Aby anulować subskrypcję, przejdź do Ustawienia > [Twoje imię] > Subskrypcje na urządzeniu iOS.",
        "p5": "W sprawie formalnych żądań usunięcia danych na mocy Art. 17 UK GDPR prosimy o zapoznanie się z naszą Polityką Prywatności lub złożenie wniosku za pośrednictwem naszej strony Wniosek o dane."
    },
    "de": {
        "heading": "Datenhandhabung bei Beendigung",
        "p1": "Bevor Sie diese EULA beenden oder die App löschen, empfehlen wir, Ihre Lerndaten über Einstellungen > Daten exportieren zu exportieren.",
        "p2": "Wenn Sie die App deinstallieren, werden alle lokal gespeicherten Daten — einschließlich Lernfortschritt, Einstellungen und Übungshistorie — dauerhaft von Ihrem Gerät gelöscht.",
        "p3": "Ihre iCloud-Daten (falls die iCloud-Synchronisierung aktiviert war) bleiben unter Ihrer Kontrolle. Sie können diese Daten jederzeit über Einstellungen > [Ihr Name] > iCloud > Speicher verwalten > LumenLingo verwalten oder löschen.",
        "p4": "Abonnementberechtigungen werden von Apple verwaltet. Um Ihr Abonnement zu kündigen, gehen Sie zu Einstellungen > [Ihr Name] > Abonnements auf Ihrem iOS-Gerät.",
        "p5": "Für formelle Datenlöschungsanfragen gemäß UK GDPR Artikel 17 beachten Sie bitte unsere Datenschutzrichtlinie oder stellen Sie einen Antrag über unsere Datenanfrageseite."
    },
    "es": {
        "heading": "Tratamiento de datos tras la terminación",
        "p1": "Antes de terminar este CLUF o eliminar la aplicación, le recomendamos exportar sus datos de aprendizaje mediante Configuración > Exportar datos en la aplicación.",
        "p2": "Cuando desinstala la aplicación, todos los datos almacenados localmente — incluido su progreso de aprendizaje, preferencias e historial de práctica — se eliminan permanentemente de su dispositivo.",
        "p3": "Sus datos de iCloud (si la sincronización de iCloud estaba habilitada) permanecen bajo su control. Puede gestionar o eliminar estos datos en cualquier momento a través de Configuración > [Su nombre] > iCloud > Gestionar almacenamiento > LumenLingo.",
        "p4": "Los derechos de suscripción son gestionados por Apple. Para cancelar su suscripción, vaya a Configuración > [Su nombre] > Suscripciones en su dispositivo iOS.",
        "p5": "Para solicitudes formales de eliminación de datos según el Artículo 17 del UK GDPR, consulte nuestra Política de Privacidad o envíe una solicitud a través de nuestra página de Solicitud de datos."
    },
    "fr": {
        "heading": "Traitement des données en cas de résiliation",
        "p1": "Avant de résilier ce CLUF ou de supprimer l'application, nous vous recommandons d'exporter vos données d'apprentissage via Paramètres > Exporter les données dans l'application.",
        "p2": "Lorsque vous désinstallez l'application, toutes les données stockées localement — y compris votre progression, préférences et historique — sont définitivement supprimées de votre appareil.",
        "p3": "Vos données iCloud (si la synchronisation iCloud était activée) restent sous votre contrôle. Vous pouvez gérer ou supprimer ces données à tout moment via Réglages > [Votre nom] > iCloud > Gérer le stockage > LumenLingo.",
        "p4": "Les droits d'abonnement sont gérés par Apple. Pour annuler votre abonnement, accédez à Réglages > [Votre nom] > Abonnements sur votre appareil iOS.",
        "p5": "Pour les demandes formelles de suppression de données en vertu de l'Article 17 du UK GDPR, veuillez consulter notre Politique de confidentialité ou soumettre une demande via notre page de Demande de données."
    },
    "ja": {
        "heading": "終了時のデータ取り扱い",
        "p1": "本EULAの終了またはアプリの削除前に、アプリの設定 > データエクスポート機能を使用して学習データをエクスポートすることをお勧めします。",
        "p2": "アプリをアンインストールすると、学習進捗、設定、練習履歴を含むすべてのローカルデータがデバイスから完全に削除されます。",
        "p3": "iCloudデータ（iCloud同期が有効だった場合）はお客様の管理下に残ります。設定 > [お名前] > iCloud > ストレージ管理 > LumenLingoからいつでも管理または削除できます。",
        "p4": "サブスクリプションの資格はAppleが管理しています。サブスクリプションをキャンセルするには、iOSデバイスの設定 > [お名前] > サブスクリプションにアクセスしてください。",
        "p5": "UK GDPR第17条に基づく正式なデータ消去要求については、当社のプライバシーポリシーを参照するか、データリクエストページからリクエストを送信してください。"
    },
    "zh": {
        "heading": "终止时的数据处理",
        "p1": "在终止本EULA或删除应用之前，我们建议您通过应用的设置 > 导出数据功能导出学习数据。",
        "p2": "卸载应用后，所有本地存储的数据 — 包括学习进度、偏好设置和练习历史 — 将从您的设备中永久删除。",
        "p3": "您的iCloud数据（如果启用了iCloud同步）仍在您的控制之下。您可以随时通过设置 > [您的名字] > iCloud > 管理存储空间 > LumenLingo管理或删除这些数据。",
        "p4": "订阅权利由Apple管理。要取消订阅，请在iOS设备上前往设置 > [您的名字] > 订阅。",
        "p5": "如需根据UK GDPR第17条提出正式数据删除请求，请参阅我们的隐私政策或通过我们的数据请求页面提交请求。"
    },
    "ar": {
        "heading": "التعامل مع البيانات عند الإنهاء",
        "p1": "قبل إنهاء اتفاقية الترخيص هذه أو حذف التطبيق، نوصيك بتصدير بيانات التعلم الخاصة بك عبر الإعدادات > تصدير البيانات في التطبيق.",
        "p2": "عند إلغاء تثبيت التطبيق، يتم حذف جميع البيانات المخزنة محلياً — بما في ذلك تقدم التعلم والتفضيلات وسجل الممارسة — نهائياً من جهازك.",
        "p3": "تبقى بيانات iCloud الخاصة بك (إذا كانت مزامنة iCloud مفعلة) تحت سيطرتك. يمكنك إدارة هذه البيانات أو حذفها في أي وقت عبر الإعدادات > [اسمك] > iCloud > إدارة التخزين > LumenLingo.",
        "p4": "يتم إدارة استحقاقات الاشتراك بواسطة Apple. لإلغاء اشتراكك، انتقل إلى الإعدادات > [اسمك] > الاشتراكات على جهاز iOS الخاص بك.",
        "p5": "لطلبات محو البيانات الرسمية بموجب المادة 17 من UK GDPR، يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا أو تقديم طلب عبر صفحة طلب البيانات."
    },
    "uk": {
        "heading": "Обробка даних при припиненні дії",
        "p1": "Перед припиненням дії цієї EULA або видаленням Додатка рекомендуємо експортувати ваші дані навчання через Налаштування > Експорт даних у Додатку.",
        "p2": "При видаленні Додатка всі локально збережені дані — включаючи прогрес навчання, налаштування та історію практики — назавжди видаляються з вашого пристрою.",
        "p3": "Ваші дані iCloud (якщо синхронізація iCloud була ввімкнена) залишаються під вашим контролем. Ви можете керувати цими даними або видалити їх у будь-який час через Налаштування > [Ваше ім'я] > iCloud > Керування сховищем > LumenLingo.",
        "p4": "Права на підписку управляються Apple. Щоб скасувати підписку, перейдіть до Налаштування > [Ваше ім'я] > Підписки на вашому пристрої iOS.",
        "p5": "Для офіційних запитів на видалення даних відповідно до статті 17 UK GDPR зверніться до нашої Політики конфіденційності або подайте запит через нашу сторінку Запит даних."
    }
}


def process_all():
    for locale in LOCALES:
        fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)

        eula = data['Eula']
        changes = []

        # Story 12.1: Add statutory liability carve-out BEFORE liability cap
        eula['liability']['statutory'] = LIABILITY_STATUTORY[locale]
        changes.append('12.1 liability.statutory')

        # Story 12.2: Add export compliance section
        eula['exportCompliance'] = EXPORT_COMPLIANCE[locale]
        changes.append('12.2 exportCompliance')

        # Story 12.3: Add open-source licence acknowledgement
        eula['openSource'] = OPEN_SOURCE[locale]
        changes.append('12.3 openSource')

        # Story 12.4: Add CRA 2015 savings clause to warranty section
        eula['warranties']['craSavings'] = WARRANTIES_CRA_SAVINGS[locale]
        changes.append('12.4 warranties.craSavings')

        # Story 12.5: Add right-to-update-app clause
        eula['appUpdates'] = APP_UPDATES[locale]
        changes.append('12.5 appUpdates')

        # Story 12.6: Add data handling on termination
        eula['dataHandling'] = DATA_HANDLING[locale]
        changes.append('12.6 dataHandling')

        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')

        print(f'{locale}.json: {", ".join(changes)}')


process_all()

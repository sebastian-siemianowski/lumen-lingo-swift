#!/usr/bin/env python3
"""
Add Accessibility namespace translations to all non-English locales.
Professional translations for the Accessibility Statement page.
"""
import json
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)),
                    "lumen-lingo-frontend", "messages")

# Arabic
ar = {
    "meta": {
        "title": "بيان إمكانية الوصول — LumenLingo",
        "description": "بيان إمكانية الوصول لـ LumenLingo وفقًا لقانون إمكانية الوصول الأوروبي (EAA) ومعايير WCAG 2.1 AA. حالة المطابقة، EN 301 549، القيود المعروفة، الجداول الزمنية للمعالجة، وكيفية الإبلاغ عن المشكلات.",
        "ogTitle": "بيان إمكانية الوصول — LumenLingo",
        "ogDescription": "التزامنا بجعل تعلم اللغات متاحًا للجميع، مع تفاصيل المطابقة لقانون EAA وجداول المعالجة الزمنية."
    },
    "breadcrumb": "بيان إمكانية الوصول",
    "hero": {
        "heading": "بيان إمكانية الوصول",
        "subtitle": "تعلم اللغات يجب أن يكون متاحًا للجميع. نحن ملتزمون بجعل LumenLingo متاحًا لجميع المستخدمين، بغض النظر عن القدرات.",
        "lastUpdated": "آخر تحديث: 24 مارس 2026"
    },
    "commitment": {
        "heading": "التزامنا",
        "p1": "تلتزم شركة LumenShore المحدودة بضمان إمكانية الوصول الرقمي للأشخاص ذوي الإعاقة. نحن نعمل باستمرار على تحسين تجربة المستخدم للجميع ونطبق معايير إمكانية الوصول ذات الصلة على موقعنا الإلكتروني وتطبيق LumenLingo لنظام iOS."
    },
    "eaaScope": {
        "heading": "نطاق قانون إمكانية الوصول الأوروبي (EAA)",
        "p1": "دخل <eaaLink>قانون إمكانية الوصول الأوروبي (التوجيه 2019/882)</eaaLink> حيز التنفيذ في 28 يونيو 2025، ويتطلب من الخدمات الرقمية المقدمة للمستهلكين في الاتحاد الأوروبي تلبية معايير إمكانية الوصول.",
        "p2": "يبيع LumenLingo اشتراكات تعلم اللغات الرقمية للمستهلكين في الدول الأعضاء بالاتحاد الأوروبي. بصفته خدمة تجارة إلكترونية مع موقع إلكتروني وتطبيق هاتف محمول مرتبطين، يقع LumenLingo ضمن نطاق قانون EAA. يتطلب الامتثال تلبية معيار <enLink>EN 301 549</enLink> الأوروبي المنسق، الذي يشير إلى WCAG 2.1 المستوى AA لمحتوى الويب ويوفر متطلبات إضافية لتطبيقات الهاتف المحمول."
    },
    "usAccessibility": {
        "heading": "إمكانية الوصول في الولايات المتحدة (ADA والقسم 508)",
        "p1": "تفسر المحاكم الأمريكية بشكل متزايد <adaLink>الباب الثالث من قانون الأمريكيين ذوي الإعاقة (ADA)</adaLink> على أنه ينطبق على المواقع الإلكترونية وتطبيقات الهاتف المحمول. في حين لا يوجد معيار رسمي لإمكانية الوصول إلى الويب منصوص عليه في قانون ADA، فإن WCAG 2.1 المستوى AA هو المعيار الصناعي الفعلي الذي تشير إليه وزارة العدل.",
        "p2": "يستهدف LumenLingo WCAG 2.1 المستوى AA لكل من موقعنا الإلكتروني وتطبيق iOS، مما يلبي متطلبات قانون ADA للوصول المتساوي إلى الخدمات الرقمية. تم توثيق حالة المطابقة والقيود المعروفة وجداول المعالجة الزمنية في هذه الصفحة وفي <vpatLink>نموذج تقييم إمكانية الوصول الطوعي (VPAT)</vpatLink>.",
        "p3": "<b>القسم 508</b> ينطبق على الوكالات الفيدرالية الأمريكية ومقاوليها. لا تتعاقد شركة LumenShore المحدودة حاليًا مع وكالات فيدرالية أمريكية، لذا لا ينطبق القسم 508 بشكل مباشر. ومع ذلك، فإن هدف الامتثال لـ WCAG 2.1 AA يلبي المعيار التقني المعادل للقسم 508 (الذي يشير إلى WCAG 2.0 المستوى AA)."
    },
    "conformance": {
        "heading": "حالة المطابقة",
        "p1": "تحدد <wcagLink>إرشادات إمكانية الوصول إلى محتوى الويب (WCAG)</wcagLink> متطلبات للمصممين والمطورين لتحسين إمكانية الوصول للأشخاص ذوي الإعاقة. تحدد ثلاثة مستويات من المطابقة: المستوى A، المستوى AA، والمستوى AAA.",
        "p2": "<b>lumenlingo.com</b> يتوافق جزئيًا مع WCAG 2.1 المستوى AA و EN 301 549 الإصدار 3.2.1. \"يتوافق جزئيًا\" يعني أن بعض أجزاء المحتوى لا تتوافق بالكامل مع معيار إمكانية الوصول. القيود المعروفة مدرجة أدناه مع جداول المعالجة الزمنية. نحن نعمل بنشاط نحو المطابقة الكاملة.",
        "p3": "<b>تطبيق LumenLingo لنظام iOS</b> يتوافق جزئيًا مع متطلبات EN 301 549 للبرامج غير المستندة إلى الويب (البند 11). يستهدف التطبيق WCAG 2.1 المستوى AA حيثما ينطبق وينفذ واجهات برمجة تطبيقات إمكانية الوصول للمنصة (VoiceOver، تقليل الحركة) للتفاعلات الرئيسية."
    },
    "measures": {
        "heading": "الإجراءات التي نتخذها",
        "intro": "تتخذ LumenShore الإجراءات التالية لضمان إمكانية الوصول إلى lumenlingo.com:",
        "li1": "تضمين إمكانية الوصول كجزء من عملية التصميم والتطوير لدينا",
        "li2": "استخدام عناصر HTML الدلالية ومعالم ARIA لهيكل الصفحة",
        "li3": "الحفاظ على نسب تباين الألوان التي تلبي أو تتجاوز معايير WCAG 2.1 AA (4.5:1 للنص العادي، 3:1 للنص الكبير)",
        "li4": "توفير مؤشرات تركيز مرئية على جميع العناصر التفاعلية",
        "li5": "ضمان إمكانية التنقل في جميع المحتويات باستخدام لوحة المفاتيح فقط",
        "li6": "احترام تفضيل نظام <code>prefers-reduced-motion</code> — يتم تعطيل جميع الرسوم المتحركة عند تعيين هذا التفضيل",
        "li7": "توفير نص بديل ذي معنى للصور والعناصر الزخرفية",
        "li8": "تضمين رابط تخطي إلى المحتوى لمستخدمي لوحة المفاتيح",
        "li9": "الاختبار مع قارئات الشاشة بما في ذلك VoiceOver على macOS و iOS"
    },
    "technologies": {
        "heading": "التقنيات",
        "intro": "تعتمد إمكانية الوصول إلى lumenlingo.com على التقنيات التالية:",
        "li1": "HTML",
        "li2": "WAI-ARIA",
        "li3": "CSS",
        "li4": "JavaScript",
        "outro": "يُعتمد على هذه التقنيات للمطابقة مع معايير إمكانية الوصول المستخدمة."
    },
    "assistiveTech": {
        "heading": "التوافق مع التكنولوجيا المساعدة",
        "intro": "تم تصميم lumenlingo.com ليكون متوافقًا مع التقنيات المساعدة التالية:",
        "li1": "VoiceOver على macOS و iOS",
        "li2": "التنقل باستخدام لوحة المفاتيح فقط عبر جميع المتصفحات الرئيسية (Safari، Chrome، Firefox، Edge)",
        "li3": "تكبير المتصفح حتى 200% دون فقدان المحتوى",
        "li4": "أوضاع التباين العالي والألوان المعكوسة"
    },
    "knownLimitations": {
        "heading": "القيود المعروفة والمعالجة",
        "intro": "على الرغم من بذل قصارى جهدنا، توجد بعض المجالات التي بها قيود نعمل بنشاط على معالجتها. وفقًا لقانون EAA، ندرج حالات عدم المطابقة المعروفة أدناه مع جداول المعالجة المخططة.",
        "websiteHeading": "الموقع الإلكتروني (lumenlingo.com)",
        "websiteLi1": "<b>عرض لقطات الشاشة الدوار:</b> يتطلب تفاعل السحب للتمرير إدخال اللمس أو الماوس. يتم توفير التنقل باستخدام لوحة المفاتيح عبر مفاتيح الأسهم كبديل.",
        "websiteLi1Status": "الحالة: تم توفير بديل. لا حاجة لإجراء إضافي.",
        "websiteLi2": "<b>تأثيرات مورفيزم الزجاج:</b> قد لا تُعرض تأثيرات طمس الخلفية المرئية على جميع المتصفحات. يبقى المحتوى قابلاً للقراءة بالكامل بغض النظر عن ذلك.",
        "websiteLi2Status": "الحالة: يتدهور بسلاسة. لا حاجة لإجراء إضافي.",
        "iosHeading": "تطبيق iOS",
        "iosLi1": "<b>تسميات VoiceOver (WCAG 4.1.2 — الاسم، الدور، القيمة):</b> تتضمن العناصر التفاعلية الرئيسية (الفئات، البطاقات التعليمية، شارات العضوية، شريط أدوات تصدير PDF، الأقسام القابلة للطي) تسميات وتلميحات VoiceOver. حوالي 15% من العروض لديها تسميات إمكانية وصول صريحة؛ والباقي يعتمد على إمكانية الوصول المدمجة في SwiftUI للعناصر القياسية (الأزرار، مفاتيح التبديل، النص). العروض الزخرفية المخصصة (بطاقات الزجاج، تأثيرات المنظر) تفتقر إلى أوصاف صريحة.",
        "iosLi1Target": "الهدف: الربع الثالث 2026 — إضافة تسميات VoiceOver صريحة لجميع العروض المخصصة وعناصر اللعبة.",
        "iosLi2": "<b>النوع الديناميكي (WCAG 1.4.4 — تغيير حجم النص):</b> لا يدعم تطبيق iOS حتى الآن النوع الديناميكي بالكامل. يستخدم حوالي 87% من النص أحجامًا ثابتة محسنة لتصميم مورفيزم الزجاج. قد لا يرى المستخدمون الذين يعتمدون على أحجام نص أكبر جميع النصوص مكبرة. يتم التخطيط للترحيل إلى أنماط نص قابلة للتطوير.",
        "iosLi2Target": "الهدف: الربع الرابع 2026 — الترحيل إلى @ScaledMetric وأنماط الخطوط الدلالية عبر جميع العروض.",
        "iosLi3": "<b>تقليل الحركة (WCAG 2.3.3 — الرسوم المتحركة من التفاعلات):</b> تحترم جميع العروض الرئيسية التي تحتوي على رسوم متحركة كثيفة (قلب البطاقات التعليمية، تأثيرات المنظر، احتفالات الجسيمات، أقسام التوسيع/الطي، رسوم تصدير PDF المتحركة) تفضيل نظام تقليل الحركة. تستمر عارضات السديم في الخلفية في التحريك كمحتوى زخرفي بحت.",
        "iosLi3Status": "الحالة: متوافق للرسوم المتحركة التفاعلية. الرسوم المتحركة الزخرفية مستثناة وفقًا لاستثناء WCAG.",
        "iosLi4": "<b>حجم الهدف (WCAG 2.5.8 — الحد الأدنى لحجم الهدف):</b> تلبي معظم الأهداف التفاعلية الحد الأدنى 44×44 نقطة. قد تقل بعض أزرار الأيقونات الأصغر في العروض الثانوية عن هذا الحد.",
        "iosLi4Target": "الهدف: الربع الثالث 2026 — تدقيق جميع أهداف اللمس وضمان الحد الأدنى 44 نقطة.",
        "outro": "نحن نعمل بنشاط على تحديد وحل فجوات إمكانية الوصول. تتضمن خريطة الطريق لدينا عمليات تدقيق ربع سنوية لإمكانية الوصول (انظر أدناه)."
    },
    "alternatives": {
        "heading": "طرق بديلة للوصول إلى المحتوى",
        "intro": "إذا واجهت صعوبة في استخدام أي جزء من LumenLingo، تتوفر البدائل التالية:",
        "li1": "<b>دعم البريد الإلكتروني:</b> تواصل معنا على <emailLink>accessibility@lumenshore.com</emailLink> وسنوفر لك المحتوى الذي تحتاجه بتنسيق يسهل الوصول إليه (نص عادي، وصف صوتي، أو تخطيط بديل).",
        "li2": "<b>التنقل باستخدام لوحة المفاتيح:</b> يمكن الوصول إلى جميع محتويات وتفاعلات الموقع باستخدام لوحة المفاتيح فقط (Tab، Shift+Tab، Enter، Escape، مفاتيح الأسهم).",
        "li3": "<b>قارئ الشاشة:</b> تم اختبار الموقع مع VoiceOver. إذا واجهت مشكلات مع أي تقنية مساعدة، يرجى إعلامنا.",
        "li4": "<b>تعديلات المتصفح:</b> يدعم الموقع التكبير حتى 200%، وضع التباين العالي، والألوان المعكوسة."
    },
    "auditSchedule": {
        "heading": "جدول تدقيق إمكانية الوصول",
        "intro": "نجري عمليات تدقيق منتظمة لإمكانية الوصول للحفاظ على الامتثال وتحسينه:",
        "li1": "<b>الربع الأول (يناير–مارس):</b> تدقيق كامل لـ WCAG 2.1 AA للموقع الإلكتروني (اختبار آلي ويدوي)",
        "li2": "<b>الربع الثاني (أبريل–يونيو):</b> تدقيق VoiceOver والنوع الديناميكي لتطبيق iOS",
        "li3": "<b>الربع الثالث (يوليو–سبتمبر):</b> اختبار قارئ الشاشة عبر المنصات",
        "li4": "<b>الربع الرابع (أكتوبر–ديسمبر):</b> مراجعة شاملة سنوية وتخطيط المعالجة",
        "outro": "يتم نشر نتائج كل تدقيق في نسخة محدثة من هذا البيان."
    },
    "feedback": {
        "heading": "الملاحظات",
        "intro": "نرحب بملاحظاتكم حول إمكانية الوصول إلى lumenlingo.com. إذا واجهتم عوائق في إمكانية الوصول أو لديكم اقتراحات للتحسين، يرجى التواصل معنا:",
        "li1Email": "<b>البريد الإلكتروني:</b> <emailLink>accessibility@lumenshore.com</emailLink>",
        "li2Contact": "<b>اتصال عام:</b> <contactLink>صفحة الاتصال</contactLink>",
        "li3Vpat": "<b>VPAT:</b> <vpatLink>عرض نموذج تقييم إمكانية الوصول الطوعي</vpatLink>",
        "response": "نهدف إلى الرد على ملاحظات إمكانية الوصول في غضون 5 أيام عمل. إذا قدمت شكوى بخصوص إمكانية الوصول، سنؤكد الاستلام في غضون يومي عمل ونقدم ردًا جوهريًا — بما في ذلك خطة معالجة لأي عائق مؤكد — في غضون 15 يوم عمل."
    },
    "disproportionateBurden": {
        "heading": "تقييم العبء غير المتناسب",
        "p1": "تسمح المادة 14 من قانون إمكانية الوصول الأوروبي للمؤسسات الصغيرة جدًا (أقل من 10 موظفين وحجم أعمال سنوي أقل من 2 مليون يورو) بالمطالبة بإعفاء حيث يفرض الامتثال \"عبئًا غير متناسب\".",
        "p2": "تؤهل شركة LumenShore المحدودة (رقم الشركة 09607326، إنجلترا وويلز) حاليًا كمؤسسة صغيرة جدًا. ومع ذلك، لا نعتمد على هذا الإعفاء كدفاع شامل. بدلاً من ذلك، نتخذ تدابير معقولة للامتثال لـ EN 301 549 و WCAG 2.1 AA، مع إعطاء الأولوية لتحسينات إمكانية الوصول الأعلى تأثيرًا ضمن مواردنا:",
        "li1": "الوصول عبر لوحة المفاتيح وقارئ الشاشة لجميع سير العمل الأساسية",
        "li2": "الامتثال لتباين الألوان عبر السمات الفاتحة والداكنة",
        "li3": "دعم تقليل الحركة لجميع الرسوم المتحركة التفاعلية",
        "li4": "جدول تدقيق ربع سنوي مع خطة معالجة موثقة",
        "p3": "حيثما لم يتم تحقيق المطابقة الكاملة بعد (مثل دعم النوع الديناميكي الكامل في تطبيق iOS)، نوثق عدم المطابقة أعلاه مع جدول زمني للمعالجة. يتم مراجعة هذا التقييم سنويًا جنبًا إلى جنب مع تدقيق إمكانية الوصول."
    },
    "enforcement": {
        "heading": "إجراءات الإنفاذ",
        "ukHeading": "المملكة المتحدة",
        "ukP1": "إذا لم تكن راضيًا عن ردنا على مخاوفك المتعلقة بإمكانية الوصول، يمكنك التصعيد عن طريق الاتصال بـ <ehrcLink>لجنة المساواة وحقوق الإنسان (EHRC)</ehrcLink>.",
        "euHeading": "الاتحاد الأوروبي",
        "euP1": "يمكن لسكان الاتحاد الأوروبي الاتصال بسلطة الإنفاذ الوطنية في دولتهم العضو في الاتحاد الأوروبي المسؤولة عن قانون إمكانية الوصول الأوروبي. يتم الاحتفاظ بقائمة هيئات مراقبة السوق المعينة من قبل كل دولة عضو بموجب المادة 19 من قانون EAA.",
        "usHeading": "الولايات المتحدة",
        "usP1": "يمكن للمقيمين في الولايات المتحدة الذين لديهم مخاوف بشأن إمكانية الوصول تقديم شكوى بموجب الباب الثالث من قانون الأمريكيين ذوي الإعاقة. نشجعك على الاتصال بنا أولاً على <emailLink>accessibility@lumenshore.com</emailLink> حتى نتمكن من حل المشكلة مباشرة. يوثق <vpatLink>VPAT</vpatLink> الخاص بنا مستوى المطابقة الحالي."
    }
}

# German
de = {
    "meta": {
        "title": "Erklärung zur Barrierefreiheit — LumenLingo",
        "description": "LumenLingo-Erklärung zur Barrierefreiheit gemäß dem European Accessibility Act (EAA) und WCAG 2.1 AA. Konformitätsstatus, EN 301 549, bekannte Einschränkungen, Behebungszeitpläne und Meldung von Problemen.",
        "ogTitle": "Erklärung zur Barrierefreiheit — LumenLingo",
        "ogDescription": "Unser Engagement, Sprachenlernen für alle zugänglich zu machen, mit EAA-Konformitätsdetails und Behebungszeitplänen."
    },
    "breadcrumb": "Erklärung zur Barrierefreiheit",
    "hero": {
        "heading": "Erklärung zur Barrierefreiheit",
        "subtitle": "Sprachenlernen sollte für jeden zugänglich sein. Wir setzen uns dafür ein, LumenLingo für alle Nutzer zugänglich zu machen, unabhängig von ihren Fähigkeiten.",
        "lastUpdated": "Zuletzt aktualisiert: 24. März 2026"
    },
    "commitment": {
        "heading": "Unser Engagement",
        "p1": "LumenShore Ltd verpflichtet sich, die digitale Barrierefreiheit für Menschen mit Behinderungen zu gewährleisten. Wir verbessern kontinuierlich die Benutzererfahrung für alle und wenden die relevanten Barrierefreiheitsstandards sowohl auf unsere Website als auch auf die LumenLingo-iOS-Anwendung an."
    },
    "eaaScope": {
        "heading": "Geltungsbereich des European Accessibility Act (EAA)",
        "p1": "Der <eaaLink>European Accessibility Act (Richtlinie 2019/882)</eaaLink> trat am 28. Juni 2025 in Kraft und verlangt von digitalen Diensten, die EU-Verbrauchern angeboten werden, Barrierefreiheitsstandards zu erfüllen.",
        "p2": "LumenLingo verkauft digitale Sprachlern-Abonnements an Verbraucher in EU-Mitgliedstaaten. Als E-Commerce-Dienst mit zugehöriger Website und mobiler Anwendung fällt LumenLingo in den Geltungsbereich des EAA. Die Einhaltung erfordert die Erfüllung des <enLink>EN 301 549</enLink> harmonisierten europäischen Standards, der auf WCAG 2.1 Level AA für Webinhalte verweist und zusätzliche Anforderungen für mobile Anwendungen stellt."
    },
    "usAccessibility": {
        "heading": "US-Barrierefreiheit (ADA & Section 508)",
        "p1": "US-Gerichte interpretieren zunehmend <adaLink>Titel III des Americans with Disabilities Act (ADA)</adaLink> als auf Websites und mobile Anwendungen anwendbar. Obwohl kein formaler Barrierefreiheitsstandard für das Web durch den ADA vorgeschrieben ist, ist WCAG 2.1 Level AA der De-facto-Industriestandard, auf den das Justizministerium verweist.",
        "p2": "LumenLingo zielt auf WCAG 2.1 Level AA für sowohl unsere Website als auch unsere iOS-App ab und erfüllt damit die ADA-Anforderung für gleichberechtigten Zugang zu digitalen Diensten. Unser Konformitätsstatus, bekannte Einschränkungen und Behebungszeitpläne sind auf dieser Seite und in unserem <vpatLink>Voluntary Product Accessibility Template (VPAT)</vpatLink> dokumentiert.",
        "p3": "<b>Section 508</b> gilt für US-Bundesbehörden und deren Auftragnehmer. LumenShore Ltd hat derzeit keine Verträge mit US-Bundesbehörden, daher ist Section 508 nicht direkt anwendbar. Unser WCAG 2.1 AA-Konformitätsziel erfüllt jedoch den gleichwertigen technischen Standard von Section 508 (der auf WCAG 2.0 Level AA verweist)."
    },
    "conformance": {
        "heading": "Konformitätsstatus",
        "p1": "Die <wcagLink>Richtlinien für barrierefreie Webinhalte (WCAG)</wcagLink> definieren Anforderungen für Designer und Entwickler zur Verbesserung der Barrierefreiheit für Menschen mit Behinderungen. Sie definiert drei Konformitätsstufen: Level A, Level AA und Level AAA.",
        "p2": '<b>lumenlingo.com</b> ist teilweise konform mit WCAG 2.1 Level AA und EN 301 549 v3.2.1. \u201ETeilweise konform\u201C bedeutet, dass einige Teile des Inhalts nicht vollständig dem Barrierefreiheitsstandard entsprechen. Bekannte Nichtkonformit\u00e4ten sind nachstehend mit Behebungszeitpl\u00e4nen aufgef\u00fchrt. Wir arbeiten aktiv an der vollst\u00e4ndigen Konformit\u00e4t.',
        "p3": "<b>LumenLingo iOS-App</b> ist teilweise konform mit den EN 301 549-Anforderungen für Nicht-Web-Software (Klausel 11). Die App zielt auf WCAG 2.1 Level AA ab, wo anwendbar, und implementiert Plattform-Barrierefreiheits-APIs (VoiceOver, Bewegung reduzieren) für wichtige Interaktionen."
    },
    "measures": {
        "heading": "Unsere Maßnahmen",
        "intro": "LumenShore ergreift die folgenden Maßnahmen, um die Barrierefreiheit von lumenlingo.com zu gewährleisten:",
        "li1": "Einbeziehung der Barrierefreiheit in unseren Design- und Entwicklungsprozess",
        "li2": "Verwendung semantischer HTML-Elemente und ARIA-Landmarks für die Seitenstruktur",
        "li3": "Aufrechterhaltung von Farbkontrastverhältnissen, die die WCAG 2.1 AA-Standards erfüllen oder übertreffen (4,5:1 für normalen Text, 3:1 für großen Text)",
        "li4": "Bereitstellung sichtbarer Fokusindikatoren für alle interaktiven Elemente",
        "li5": "Sicherstellung, dass alle Inhalte nur per Tastatur navigierbar sind",
        "li6": "Berücksichtigung der Systemeinstellung <code>prefers-reduced-motion</code> — alle Animationen werden deaktiviert, wenn diese Einstellung gewählt ist",
        "li7": "Bereitstellung aussagekräftiger Alternativtexte für Bilder und dekorative Elemente",
        "li8": "Einbindung eines Links zum Überspringen zum Inhalt für Tastaturnutzer",
        "li9": "Tests mit Screenreadern einschließlich VoiceOver auf macOS und iOS"
    },
    "technologies": {
        "heading": "Technologien",
        "intro": "Die Barrierefreiheit von lumenlingo.com basiert auf den folgenden Technologien:",
        "li1": "HTML",
        "li2": "WAI-ARIA",
        "li3": "CSS",
        "li4": "JavaScript",
        "outro": "Diese Technologien werden für die Konformität mit den verwendeten Barrierefreiheitsstandards vorausgesetzt."
    },
    "assistiveTech": {
        "heading": "Kompatibilität mit assistiven Technologien",
        "intro": "lumenlingo.com ist für die Kompatibilität mit den folgenden assistiven Technologien konzipiert:",
        "li1": "VoiceOver auf macOS und iOS",
        "li2": "Reine Tastaturnavigation in allen gängigen Browsern (Safari, Chrome, Firefox, Edge)",
        "li3": "Browser-Zoom bis 200% ohne Inhaltsverlust",
        "li4": "Hoher Kontrast und invertierte Farbmodi"
    },
    "knownLimitations": {
        "heading": "Bekannte Einschränkungen & Behebung",
        "intro": "Trotz unserer besten Bemühungen gibt es einige Bereiche mit Einschränkungen, an deren Beseitigung wir aktiv arbeiten. Gemäß dem EAA listen wir bekannte Nichtkonformitäten nachstehend mit geplanten Behebungszeitplänen auf.",
        "websiteHeading": "Website (lumenlingo.com)",
        "websiteLi1": "<b>Screenshot-Karussell:</b> Die Wisch-Interaktion erfordert Touch- oder Mauseingabe. Tastaturnavigation über Pfeiltasten wird als Alternative bereitgestellt.",
        "websiteLi1Status": "Status: Alternative bereitgestellt. Keine weiteren Maßnahmen erforderlich.",
        "websiteLi2": "<b>Glasmorphismus-Effekte:</b> Die visuellen Hintergrundunschärfe-Effekte werden möglicherweise nicht in allen Browsern dargestellt. Der Inhalt bleibt unabhängig davon vollständig lesbar.",
        "websiteLi2Status": "Status: Graceful Degradation. Keine weiteren Maßnahmen erforderlich.",
        "iosHeading": "iOS-Anwendung",
        "iosLi1": "<b>VoiceOver-Labels (WCAG 4.1.2 — Name, Rolle, Wert):</b> Wichtige interaktive Elemente (Kategorien, Lernkarten, Mitgliedschaftsabzeichen, PDF-Export-Symbolleiste, zusammenklappbare Abschnitte) enthalten VoiceOver-Labels und Hinweise. Etwa 15 % der Ansichten haben explizite Barrierefreiheits-Labels; der Rest nutzt die integrierte Barrierefreiheit von SwiftUI für Standardsteuerelemente (Schaltflächen, Schalter, Text). Benutzerdefinierte dekorative Ansichten (Glaskarten, Parallax-Effekte) verfügen nicht über explizite Beschreibungen.",
        "iosLi1Target": "Ziel: Q3 2026 — Explizite VoiceOver-Labels für alle benutzerdefinierten Ansichten und Spielelemente hinzufügen.",
        "iosLi2": "<b>Dynamic Type (WCAG 1.4.4 — Textgröße ändern):</b> Die iOS-App unterstützt Dynamic Type noch nicht vollständig. Etwa 87 % des Textes verwenden feste Größen, die für das Glasmorphismus-Design optimiert sind. Nutzer, die auf größere Textgrößen angewiesen sind, sehen möglicherweise nicht alle Texte skaliert. Eine Migration zu skalierbaren Textstilen ist geplant.",
        "iosLi2Target": "Ziel: Q4 2026 — Migration zu @ScaledMetric und semantischen Schriftstilen in allen Ansichten.",
        "iosLi3": "<b>Bewegung reduzieren (WCAG 2.3.3 — Animation durch Interaktionen):</b> Alle animationsintensiven Hauptansichten (Kartenumdrehen, Parallax-Effekte, Partikelanimationen, Aus-/Einklappabschnitte, PDF-Export-Animationen) respektieren die Systemeinstellung \u201eBewegung reduzieren". Hintergrund-Nebula-Renderer animieren weiterhin als rein dekorativer Inhalt.",
        "iosLi3Status": "Status: Konform für interaktive Animationen. Dekorative Animationen gemäß WCAG-Ausnahme ausgenommen.",
        "iosLi4": "<b>Zielgröße (WCAG 2.5.8 — Mindest-Zielgröße):</b> Die meisten interaktiven Ziele erfüllen das Minimum von 44×44 pt. Einige kleinere Symbolschaltflächen in sekundären Ansichten können diesen Schwellenwert unterschreiten.",
        "iosLi4Target": "Ziel: Q3 2026 — Alle Berührungsziele prüfen und Mindestmaß von 44 pt sicherstellen.",
        "outro": "Wir arbeiten aktiv daran, Barrierefreiheitslücken zu identifizieren und zu beheben. Unsere Roadmap umfasst vierteljährliche Barrierefreiheitsprüfungen (siehe unten)."
    },
    "alternatives": {
        "heading": "Alternative Zugangsmöglichkeiten",
        "intro": "Wenn Sie Schwierigkeiten bei der Nutzung eines Teils von LumenLingo haben, stehen die folgenden Alternativen zur Verfügung:",
        "li1": "<b>E-Mail-Support:</b> Kontaktieren Sie uns unter <emailLink>accessibility@lumenshore.com</emailLink> und wir stellen Ihnen den benötigten Inhalt in einem barrierefreien Format bereit (Klartext, Audiobeschreibung oder alternatives Layout).",
        "li2": "<b>Tastaturnavigation:</b> Alle Website-Inhalte und -Interaktionen können nur per Tastatur aufgerufen werden (Tab, Umschalt+Tab, Enter, Escape, Pfeiltasten).",
        "li3": "<b>Screenreader:</b> Die Website wird mit VoiceOver getestet. Wenn Sie auf Probleme mit einer assistiven Technologie stoßen, lassen Sie es uns bitte wissen.",
        "li4": "<b>Browser-Anpassungen:</b> Die Website unterstützt Zoom bis 200%, Hochkontrastmodus und invertierte Farben."
    },
    "auditSchedule": {
        "heading": "Zeitplan für Barrierefreiheitsprüfungen",
        "intro": "Wir führen regelmäßig Barrierefreiheitsprüfungen durch, um die Konformität aufrechtzuerhalten und zu verbessern:",
        "li1": "<b>Q1 (Januar–März):</b> Vollständiges WCAG 2.1 AA-Audit der Website (automatisierte und manuelle Tests)",
        "li2": "<b>Q2 (April–Juni):</b> VoiceOver- und Dynamic-Type-Audit der iOS-App",
        "li3": "<b>Q3 (Juli–September):</b> Plattformübergreifende Screenreader-Tests",
        "li4": "<b>Q4 (Oktober–Dezember):</b> Umfassende Jahresüberprüfung und Behebungsplanung",
        "outro": "Ergebnisse jedes Audits werden in einer aktualisierten Version dieser Erklärung veröffentlicht."
    },
    "feedback": {
        "heading": "Feedback",
        "intro": "Wir freuen uns über Ihr Feedback zur Barrierefreiheit von lumenlingo.com. Wenn Sie auf Barrierefreiheitsbarrieren stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:",
        "li1Email": "<b>E-Mail:</b> <emailLink>accessibility@lumenshore.com</emailLink>",
        "li2Contact": "<b>Allgemeiner Kontakt:</b> <contactLink>Kontaktseite</contactLink>",
        "li3Vpat": "<b>VPAT:</b> <vpatLink>Unser Voluntary Product Accessibility Template anzeigen</vpatLink>",
        "response": "Wir sind bestrebt, auf Barrierefreiheits-Feedback innerhalb von 5 Werktagen zu antworten. Wenn Sie eine Barrierefreiheitsbeschwerde einreichen, bestätigen wir den Eingang innerhalb von 2 Werktagen und geben eine substanzielle Antwort — einschließlich eines Behebungsplans für jede bestätigte Barriere — innerhalb von 15 Werktagen."
    },
    "disproportionateBurden": {
        "heading": "Bewertung der unverhältnismäßigen Belastung",
        "p1": "Artikel 14 des European Accessibility Act erlaubt Kleinstunternehmen (weniger als 10 Mitarbeiter und Jahresumsatz unter 2 Millionen Euro), eine Ausnahme geltend zu machen, wenn die Einhaltung eine \u201eunverhältnismäßige Belastung" darstellen würde.",
        "p2": "LumenShore Limited (Firmennummer 09607326, England & Wales) qualifiziert sich derzeit als Kleinstunternehmen. Wir berufen uns jedoch nicht auf diese Ausnahme als pauschale Verteidigung. Stattdessen ergreifen wir angemessene Maßnahmen zur Einhaltung von EN 301 549 und WCAG 2.1 AA und priorisieren die wirkungsvollsten Barrierefreiheitsverbesserungen im Rahmen unserer Ressourcen:",
        "li1": "Tastatur- und Screenreader-Zugang für alle Kernabläufe",
        "li2": "Farbkontrastkonformität über helle und dunkle Designs hinweg",
        "li3": "Unterstützung für reduzierte Bewegung bei allen interaktiven Animationen",
        "li4": "Vierteljährlicher Prüfungsplan mit dokumentiertem Behebungsplan",
        "p3": "Wo die vollständige Konformität noch nicht erreicht ist (z. B. vollständige Dynamic-Type-Unterstützung in der iOS-App), dokumentieren wir die Nichtkonformität oben mit einem Behebungszeitplan. Diese Bewertung wird jährlich zusammen mit der Barrierefreiheitsprüfung überprüft."
    },
    "enforcement": {
        "heading": "Durchsetzungsverfahren",
        "ukHeading": "Vereinigtes Königreich",
        "ukP1": "Wenn Sie mit unserer Reaktion auf Ihre Barrierefreiheitsbedenken nicht zufrieden sind, können Sie sich an die <ehrcLink>Equality and Human Rights Commission (EHRC)</ehrcLink> wenden.",
        "euHeading": "Europäische Union",
        "euP1": "EU-Bürger können die nationale Durchsetzungsbehörde in ihrem EU-Mitgliedstaat kontaktieren, die für den European Accessibility Act zuständig ist. Eine Liste der benannten Marktüberwachungsbehörden wird von jedem Mitgliedstaat gemäß Artikel 19 des EAA geführt.",
        "usHeading": "Vereinigte Staaten",
        "usP1": "US-Bürger mit Barrierefreiheitsbedenken können eine Beschwerde gemäß Titel III des Americans with Disabilities Act einreichen. Wir empfehlen, uns zunächst unter <emailLink>accessibility@lumenshore.com</emailLink> zu kontaktieren, damit wir das Problem direkt lösen können. Unser <vpatLink>VPAT</vpatLink> dokumentiert unseren aktuellen Konformitätsgrad."
    }
}

# Spanish
es = {
    "meta": {
        "title": "Declaración de Accesibilidad — LumenLingo",
        "description": "Declaración de accesibilidad de LumenLingo según la Ley Europea de Accesibilidad (EAA) y WCAG 2.1 AA. Estado de conformidad, EN 301 549, limitaciones conocidas, plazos de corrección y cómo reportar problemas.",
        "ogTitle": "Declaración de Accesibilidad — LumenLingo",
        "ogDescription": "Nuestro compromiso con hacer el aprendizaje de idiomas accesible para todos, con detalles de conformidad EAA y plazos de corrección."
    },
    "breadcrumb": "Declaración de Accesibilidad",
    "hero": {
        "heading": "Declaración de Accesibilidad",
        "subtitle": "El aprendizaje de idiomas debería ser para todos. Estamos comprometidos a hacer LumenLingo accesible para todos los usuarios, independientemente de sus capacidades.",
        "lastUpdated": "Última actualización: 24 de marzo de 2026"
    },
    "commitment": {
        "heading": "Nuestro Compromiso",
        "p1": "LumenShore Ltd está comprometida con garantizar la accesibilidad digital para las personas con discapacidades. Mejoramos continuamente la experiencia del usuario para todos y aplicamos los estándares de accesibilidad relevantes tanto a nuestro sitio web como a la aplicación LumenLingo para iOS."
    },
    "eaaScope": {
        "heading": "Ámbito de la Ley Europea de Accesibilidad (EAA)",
        "p1": "La <eaaLink>Ley Europea de Accesibilidad (Directiva 2019/882)</eaaLink> entró en vigor el 28 de junio de 2025, exigiendo que los servicios digitales ofrecidos a los consumidores de la UE cumplan con los estándares de accesibilidad.",
        "p2": "LumenLingo vende suscripciones de aprendizaje de idiomas digitales a consumidores en los Estados miembros de la UE. Como servicio de comercio electrónico con sitio web y aplicación móvil asociados, LumenLingo está dentro del ámbito de la EAA. El cumplimiento requiere satisfacer el estándar europeo armonizado <enLink>EN 301 549</enLink>, que hace referencia a WCAG 2.1 Nivel AA para contenido web y establece requisitos adicionales para aplicaciones móviles."
    },
    "usAccessibility": {
        "heading": "Accesibilidad en EE. UU. (ADA y Sección 508)",
        "p1": "Los tribunales estadounidenses interpretan cada vez más el <adaLink>Título III de la Ley de Estadounidenses con Discapacidades (ADA)</adaLink> como aplicable a los sitios web y aplicaciones móviles. Aunque la ADA no establece un estándar formal de accesibilidad web, WCAG 2.1 Nivel AA es el estándar de la industria de facto al que hace referencia el Departamento de Justicia.",
        "p2": "LumenLingo tiene como objetivo WCAG 2.1 Nivel AA para nuestro sitio web y aplicación iOS, satisfaciendo el requisito de la ADA de acceso igualitario a los servicios digitales. Nuestro estado de conformidad, limitaciones conocidas y plazos de corrección están documentados en esta página y en nuestra <vpatLink>Plantilla Voluntaria de Accesibilidad del Producto (VPAT)</vpatLink>.",
        "p3": "<b>La Sección 508</b> se aplica a las agencias federales de EE. UU. y sus contratistas. LumenShore Ltd actualmente no tiene contratos con agencias federales de EE. UU., por lo que la Sección 508 no es directamente aplicable. Sin embargo, nuestro objetivo de conformidad WCAG 2.1 AA cumple con el estándar técnico equivalente de la Sección 508 (que hace referencia a WCAG 2.0 Nivel AA)."
    },
    "conformance": {
        "heading": "Estado de Conformidad",
        "p1": "Las <wcagLink>Directrices de Accesibilidad para el Contenido Web (WCAG)</wcagLink> definen requisitos para diseñadores y desarrolladores para mejorar la accesibilidad para personas con discapacidades. Define tres niveles de conformidad: Nivel A, Nivel AA y Nivel AAA.",
        "p2": "<b>lumenlingo.com</b> es parcialmente conforme con WCAG 2.1 Nivel AA y EN 301 549 v3.2.1. \"Parcialmente conforme\" significa que algunas partes del contenido no cumplen completamente con el estándar de accesibilidad. Las no conformidades conocidas se enumeran a continuación con plazos de corrección. Estamos trabajando activamente hacia la conformidad total.",
        "p3": "<b>La aplicación LumenLingo para iOS</b> es parcialmente conforme con los requisitos de EN 301 549 para software no web (Cláusula 11). La aplicación tiene como objetivo WCAG 2.1 Nivel AA donde sea aplicable e implementa APIs de accesibilidad de la plataforma (VoiceOver, Reducir Movimiento) para las interacciones clave."
    },
    "measures": {
        "heading": "Medidas que Tomamos",
        "intro": "LumenShore toma las siguientes medidas para garantizar la accesibilidad de lumenlingo.com:",
        "li1": "Incluir la accesibilidad como parte de nuestro proceso de diseño y desarrollo",
        "li2": "Usar elementos HTML semánticos y landmarks ARIA para la estructura de la página",
        "li3": "Mantener ratios de contraste de color que cumplan o superen los estándares WCAG 2.1 AA (4.5:1 para texto normal, 3:1 para texto grande)",
        "li4": "Proporcionar indicadores de enfoque visibles en todos los elementos interactivos",
        "li5": "Garantizar que todo el contenido sea navegable solo con el teclado",
        "li6": "Respetar la preferencia del sistema <code>prefers-reduced-motion</code> — todas las animaciones se desactivan cuando se establece esta preferencia",
        "li7": "Proporcionar texto alternativo significativo para imágenes y elementos decorativos",
        "li8": "Incluir un enlace para saltar al contenido para usuarios de teclado",
        "li9": "Probar con lectores de pantalla incluyendo VoiceOver en macOS e iOS"
    },
    "technologies": {
        "heading": "Tecnologías",
        "intro": "La accesibilidad de lumenlingo.com depende de las siguientes tecnologías:",
        "li1": "HTML",
        "li2": "WAI-ARIA",
        "li3": "CSS",
        "li4": "JavaScript",
        "outro": "Se confía en estas tecnologías para la conformidad con los estándares de accesibilidad utilizados."
    },
    "assistiveTech": {
        "heading": "Compatibilidad con Tecnología Asistiva",
        "intro": "lumenlingo.com está diseñado para ser compatible con las siguientes tecnologías asistivas:",
        "li1": "VoiceOver en macOS e iOS",
        "li2": "Navegación solo con teclado en todos los navegadores principales (Safari, Chrome, Firefox, Edge)",
        "li3": "Zoom del navegador hasta 200% sin pérdida de contenido",
        "li4": "Modos de alto contraste y colores invertidos"
    },
    "knownLimitations": {
        "heading": "Limitaciones Conocidas y Corrección",
        "intro": "A pesar de nuestros mejores esfuerzos, algunas áreas tienen limitaciones en las que estamos trabajando activamente. De acuerdo con la EAA, enumeramos a continuación las no conformidades conocidas con plazos de corrección previstos.",
        "websiteHeading": "Sitio web (lumenlingo.com)",
        "websiteLi1": "<b>Carrusel de capturas de pantalla:</b> La interacción de arrastre requiere entrada táctil o de ratón. Se proporciona navegación por teclado mediante teclas de flecha como alternativa.",
        "websiteLi1Status": "Estado: Alternativa proporcionada. No se requiere acción adicional.",
        "websiteLi2": "<b>Efectos de glassmorfismo:</b> Los efectos visuales de desenfoque de fondo pueden no renderizarse en todos los navegadores. El contenido sigue siendo completamente legible independientemente.",
        "websiteLi2Status": "Estado: Degradación elegante. No se requiere acción adicional.",
        "iosHeading": "Aplicación iOS",
        "iosLi1": "<b>Etiquetas VoiceOver (WCAG 4.1.2 — Nombre, Rol, Valor):</b> Los elementos interactivos clave (categorías, tarjetas de memoria, insignias de membresía, barra de herramientas de exportación PDF, secciones plegables) incluyen etiquetas y sugerencias de VoiceOver. Aproximadamente el 15% de las vistas tienen etiquetas de accesibilidad explícitas; el resto depende de la accesibilidad incorporada de SwiftUI para controles estándar (botones, interruptores, texto). Las vistas decorativas personalizadas (tarjetas de cristal, efectos parallax) carecen de descripciones explícitas.",
        "iosLi1Target": "Objetivo: Q3 2026 — Agregar etiquetas VoiceOver explícitas a todas las vistas personalizadas y elementos del juego.",
        "iosLi2": "<b>Tipo Dinámico (WCAG 1.4.4 — Redimensionar Texto):</b> La aplicación iOS aún no soporta completamente el Tipo Dinámico. Aproximadamente el 87% del texto usa tamaños fijos optimizados para el diseño glassmorfismo. Los usuarios que dependen de tamaños de texto más grandes pueden no ver todo el texto escalado. Se planifica una migración a estilos de texto escalables.",
        "iosLi2Target": "Objetivo: Q4 2026 — Migrar a @ScaledMetric y estilos de fuente semánticos en todas las vistas.",
        "iosLi3": "<b>Reducir Movimiento (WCAG 2.3.3 — Animación por Interacciones):</b> Todas las vistas principales con animación intensiva (volteo de tarjetas, efectos parallax, celebraciones de partículas, secciones expandir/colapsar, animaciones de exportación PDF) respetan la preferencia del sistema Reducir Movimiento. Los renderizadores de nebulosa de fondo continúan animándose como contenido puramente decorativo.",
        "iosLi3Status": "Estado: Conforme para animaciones interactivas. Animaciones decorativas excluidas según excepción WCAG.",
        "iosLi4": "<b>Tamaño del Objetivo (WCAG 2.5.8 — Tamaño Mínimo del Objetivo):</b> La mayoría de los objetivos interactivos cumplen el mínimo de 44×44pt. Algunos botones de iconos más pequeños en vistas secundarias pueden estar por debajo de este umbral.",
        "iosLi4Target": "Objetivo: Q3 2026 — Auditar todos los objetivos táctiles y garantizar el mínimo de 44pt.",
        "outro": "Estamos trabajando activamente para identificar y resolver brechas de accesibilidad. Nuestra hoja de ruta incluye auditorías trimestrales de accesibilidad (ver abajo)."
    },
    "alternatives": {
        "heading": "Formas Alternativas de Acceder al Contenido",
        "intro": "Si tiene dificultad para usar alguna parte de LumenLingo, están disponibles las siguientes alternativas:",
        "li1": "<b>Soporte por correo electrónico:</b> Contáctenos en <emailLink>accessibility@lumenshore.com</emailLink> y le proporcionaremos el contenido que necesita en un formato accesible (texto plano, descripción de audio o diseño alternativo).",
        "li2": "<b>Navegación por teclado:</b> Todo el contenido e interacciones del sitio web pueden accederse usando solo el teclado (Tab, Shift+Tab, Enter, Escape, teclas de flecha).",
        "li3": "<b>Lector de pantalla:</b> El sitio web se prueba con VoiceOver. Si encuentra problemas con alguna tecnología asistiva, por favor háganoslo saber.",
        "li4": "<b>Ajustes del navegador:</b> El sitio web soporta zoom hasta 200%, modo de alto contraste y colores invertidos."
    },
    "auditSchedule": {
        "heading": "Calendario de Auditorías de Accesibilidad",
        "intro": "Realizamos auditorías regulares de accesibilidad para mantener y mejorar el cumplimiento:",
        "li1": "<b>Q1 (enero–marzo):</b> Auditoría completa WCAG 2.1 AA del sitio web (pruebas automatizadas y manuales)",
        "li2": "<b>Q2 (abril–junio):</b> Auditoría de VoiceOver y Tipo Dinámico de la aplicación iOS",
        "li3": "<b>Q3 (julio–septiembre):</b> Pruebas de lector de pantalla multiplataforma",
        "li4": "<b>Q4 (octubre–diciembre):</b> Revisión integral anual y planificación de corrección",
        "outro": "Los hallazgos de cada auditoría se publican en una versión actualizada de esta declaración."
    },
    "feedback": {
        "heading": "Comentarios",
        "intro": "Agradecemos sus comentarios sobre la accesibilidad de lumenlingo.com. Si encuentra barreras de accesibilidad o tiene sugerencias de mejora, contáctenos:",
        "li1Email": "<b>Correo electrónico:</b> <emailLink>accessibility@lumenshore.com</emailLink>",
        "li2Contact": "<b>Contacto general:</b> <contactLink>Página de contacto</contactLink>",
        "li3Vpat": "<b>VPAT:</b> <vpatLink>Ver nuestra Plantilla Voluntaria de Accesibilidad del Producto</vpatLink>",
        "response": "Nuestro objetivo es responder a los comentarios sobre accesibilidad dentro de 5 días hábiles. Si presenta una queja de accesibilidad, confirmaremos la recepción dentro de 2 días hábiles y proporcionaremos una respuesta sustancial — incluyendo un plan de corrección para cualquier barrera confirmada — dentro de 15 días hábiles."
    },
    "disproportionateBurden": {
        "heading": "Evaluación de Carga Desproporcionada",
        "p1": "El Artículo 14 de la Ley Europea de Accesibilidad permite a las microempresas (menos de 10 empleados y facturación anual inferior a 2 millones de euros) reclamar una exención cuando el cumplimiento suponga una \"carga desproporcionada\".",
        "p2": "LumenShore Limited (Número de Empresa 09607326, Inglaterra y Gales) actualmente califica como microempresa. Sin embargo, no nos basamos en esta exención como defensa general. En su lugar, tomamos medidas razonables para cumplir con EN 301 549 y WCAG 2.1 AA, priorizando las mejoras de accesibilidad de mayor impacto dentro de nuestros recursos:",
        "li1": "Acceso por teclado y lector de pantalla para todos los flujos de trabajo principales",
        "li2": "Cumplimiento de contraste de color en temas claros y oscuros",
        "li3": "Soporte de movimiento reducido para todas las animaciones interactivas",
        "li4": "Calendario de auditoría trimestral con plan de corrección documentado",
        "p3": "Donde aún no se ha logrado la conformidad total (por ejemplo, soporte completo de Tipo Dinámico en la aplicación iOS), documentamos la no conformidad arriba con un plazo de corrección. Esta evaluación se revisa anualmente junto con la auditoría de accesibilidad."
    },
    "enforcement": {
        "heading": "Procedimiento de Aplicación",
        "ukHeading": "Reino Unido",
        "ukP1": "Si no está satisfecho con nuestra respuesta a su preocupación sobre accesibilidad, puede escalar contactando a la <ehrcLink>Comisión de Igualdad y Derechos Humanos (EHRC)</ehrcLink>.",
        "euHeading": "Unión Europea",
        "euP1": "Los residentes de la UE pueden contactar a la autoridad nacional de aplicación en su Estado miembro de la UE responsable de la Ley Europea de Accesibilidad. Cada Estado miembro mantiene una lista de autoridades de vigilancia del mercado designadas en virtud del Artículo 19 de la EAA.",
        "usHeading": "Estados Unidos",
        "usP1": "Los residentes de EE. UU. con preocupaciones sobre accesibilidad pueden presentar una queja bajo el Título III de la Ley de Estadounidenses con Discapacidades. Le animamos a contactarnos primero en <emailLink>accessibility@lumenshore.com</emailLink> para que podamos resolver el problema directamente. Nuestro <vpatLink>VPAT</vpatLink> documenta nuestro nivel actual de conformidad."
    }
}

TRANSLATIONS = {
    "ar": ar,
    "de": de,
    "es": es,
}

for locale_code, trans in TRANSLATIONS.items():
    filepath = os.path.join(BASE, f"{locale_code}.json")
    with open(filepath, "r") as f:
        data = json.load(f)
    data["Accessibility"] = trans
    with open(filepath, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Added Accessibility to {locale_code}.json")

print(f"\nDone: {len(TRANSLATIONS)} locales updated")

#!/usr/bin/env python3
"""Append legal consent strings to all non-English AppStrings locale files."""
import pathlib, re

BASE = pathlib.Path("/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Models/Localization")

# Translations per locale (key highlights translated, rest stays English as placeholders)
TRANSLATIONS = {
    "Spanish": {
        "legalConsentTitle": "Antes de comenzar",
        "legalConsentSubtitle": "Revisa nuestras políticas para continuar usando LumenLingo",
        "privacyPolicyTitle": "Política de privacidad",
        "termsOfServiceTitle": "Términos de servicio",
        "legalVersion": "Versión 2.0",
        "legalLastUpdated": "Última actualización: 23 de marzo de 2026",
        "legalPrivacySummary": "LumenLingo es operado por LumenShore Ltd. Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política cubre tanto nuestro sitio web como la app iOS.",
        "legalTermsSummary": "Estos Términos de Servicio rigen el uso de la aplicación móvil LumenLingo operada por LumenShore Ltd. Al usar LumenLingo, aceptas estos Términos.",
        "legalPrivacyHighlight1": "Tus datos de aprendizaje permanecen en tu dispositivo y tu cuenta personal de iCloud",
        "legalPrivacyHighlight2": "Usamos Vercel Analytics sin cookies — sin cookies de rastreo en nuestro sitio web",
        "legalPrivacyHighlight3": "Sentry nos ayuda a corregir errores (la grabación de sesión requiere consentimiento)",
        "legalPrivacyHighlight4": "Nunca vendemos tus datos personales a terceros",
        "legalTermsHighlight1": "Niveles gratuitos y premium disponibles — suscripciones gestionadas a través de Apple",
        "legalTermsHighlight2": "Tu contenido y progreso de aprendizaje te pertenecen",
        "legalTermsHighlight3": "Podemos usar datos agregados y anónimos para mejorar el producto",
        "legalTermsHighlight4": "Regido por las leyes de Inglaterra y Gales",
        "legalAcceptAll": "Acepto",
        "legalDecline": "Rechazar",
        "legalDeclineTitle": "¿Estás seguro?",
        "legalDeclineMessage": "Debes aceptar nuestra Política de Privacidad y Términos de Servicio para usar LumenLingo.",
        "legalDeclineConfirm": "Rechazar y salir",
        "legalReadFull": "Leer política completa",
        "legalScrollToAccept": "Desplázate para revisar",
    },
    "French": {
        "legalConsentTitle": "Avant de commencer",
        "legalConsentSubtitle": "Veuillez consulter nos politiques pour continuer à utiliser LumenLingo",
        "privacyPolicyTitle": "Politique de confidentialité",
        "termsOfServiceTitle": "Conditions d'utilisation",
        "legalVersion": "Version 2.0",
        "legalLastUpdated": "Dernière mise à jour : 23 mars 2026",
        "legalPrivacySummary": "LumenLingo est exploité par LumenShore Ltd. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique couvre notre site web et notre app iOS.",
        "legalTermsSummary": "Ces Conditions d'utilisation régissent votre utilisation de l'application mobile LumenLingo exploitée par LumenShore Ltd. En utilisant LumenLingo, vous acceptez ces Conditions.",
        "legalPrivacyHighlight1": "Vos données d'apprentissage restent sur votre appareil et votre compte iCloud personnel",
        "legalPrivacyHighlight2": "Nous utilisons Vercel Analytics sans cookies — aucun cookie de suivi sur notre site",
        "legalPrivacyHighlight3": "Sentry nous aide à corriger les bugs (la relecture de session nécessite un consentement)",
        "legalPrivacyHighlight4": "Nous ne vendons jamais vos données personnelles à des tiers",
        "legalTermsHighlight1": "Niveaux gratuits et premium disponibles — abonnements gérés via Apple",
        "legalTermsHighlight2": "Votre contenu et votre progression vous appartiennent",
        "legalTermsHighlight3": "Nous pouvons utiliser des données agrégées et anonymes pour améliorer le produit",
        "legalTermsHighlight4": "Régi par les lois d'Angleterre et du Pays de Galles",
        "legalAcceptAll": "J'accepte",
        "legalDecline": "Refuser",
        "legalDeclineTitle": "Êtes-vous sûr ?",
        "legalDeclineMessage": "Vous devez accepter notre Politique de Confidentialité et nos Conditions d'utilisation pour utiliser LumenLingo.",
        "legalDeclineConfirm": "Refuser et quitter",
        "legalReadFull": "Lire la politique complète",
        "legalScrollToAccept": "Faites défiler pour consulter",
    },
    "German": {
        "legalConsentTitle": "Bevor wir beginnen",
        "legalConsentSubtitle": "Bitte überprüfe unsere Richtlinien, um LumenLingo weiter zu nutzen",
        "privacyPolicyTitle": "Datenschutzrichtlinie",
        "termsOfServiceTitle": "Nutzungsbedingungen",
        "legalVersion": "Version 2.0",
        "legalLastUpdated": "Zuletzt aktualisiert: 23. März 2026",
        "legalPrivacySummary": "LumenLingo wird von LumenShore Ltd betrieben. Wir respektieren deine Privatsphäre und verpflichten uns, deine persönlichen Daten zu schützen. Diese Richtlinie gilt für unsere Website und iOS-App.",
        "legalTermsSummary": "Diese Nutzungsbedingungen regeln die Nutzung der mobilen Anwendung LumenLingo, betrieben von LumenShore Ltd. Durch die Nutzung von LumenLingo akzeptierst du diese Bedingungen.",
        "legalPrivacyHighlight1": "Deine Lerndaten bleiben auf deinem Gerät und deinem persönlichen iCloud-Konto",
        "legalPrivacyHighlight2": "Wir verwenden cookiefreie Vercel Analytics — keine Tracking-Cookies auf unserer Website",
        "legalPrivacyHighlight3": "Sentry hilft uns, Fehler zu beheben (Session-Replay erfordert Zustimmung)",
        "legalPrivacyHighlight4": "Wir verkaufen deine persönlichen Daten niemals an Dritte",
        "legalTermsHighlight1": "Kostenlose und Premium-Stufen verfügbar — Abonnements über Apple verwaltet",
        "legalTermsHighlight2": "Deine Inhalte und dein Lernfortschritt gehören dir",
        "legalTermsHighlight3": "Wir können aggregierte, anonyme Daten zur Produktverbesserung verwenden",
        "legalTermsHighlight4": "Es gilt das Recht von England und Wales",
        "legalAcceptAll": "Ich stimme zu",
        "legalDecline": "Ablehnen",
        "legalDeclineTitle": "Bist du sicher?",
        "legalDeclineMessage": "Du musst unsere Datenschutzrichtlinie und Nutzungsbedingungen akzeptieren, um LumenLingo zu nutzen.",
        "legalDeclineConfirm": "Ablehnen & Beenden",
        "legalReadFull": "Vollständige Richtlinie lesen",
        "legalScrollToAccept": "Zum Überprüfen scrollen",
    },
    "Polish": {
        "legalConsentTitle": "Zanim zaczniemy",
        "legalConsentSubtitle": "Zapoznaj się z naszymi zasadami, aby kontynuować korzystanie z LumenLingo",
        "privacyPolicyTitle": "Polityka prywatności",
        "termsOfServiceTitle": "Regulamin",
        "legalVersion": "Wersja 2.0",
        "legalLastUpdated": "Ostatnia aktualizacja: 23 marca 2026",
        "legalPrivacySummary": "LumenLingo jest obsługiwane przez LumenShore Ltd. Szanujemy Twoją prywatność i zobowiązujemy się do ochrony Twoich danych osobowych. Ta polityka obejmuje naszą stronę internetową i aplikację iOS.",
        "legalTermsSummary": "Niniejszy Regulamin reguluje korzystanie z aplikacji mobilnej LumenLingo obsługiwanej przez LumenShore Ltd. Korzystając z LumenLingo, akceptujesz niniejszy Regulamin.",
        "legalPrivacyHighlight1": "Twoje dane nauki pozostają na Twoim urządzeniu i osobistym koncie iCloud",
        "legalPrivacyHighlight2": "Używamy Vercel Analytics bez ciasteczek — żadnych śledzących plików cookie na naszej stronie",
        "legalPrivacyHighlight3": "Sentry pomaga nam naprawiać błędy (nagrywanie sesji wymaga zgody)",
        "legalPrivacyHighlight4": "Nigdy nie sprzedajemy Twoich danych osobowych stronom trzecim",
        "legalTermsHighlight1": "Dostępne plany darmowe i premium — subskrypcje zarządzane przez Apple",
        "legalTermsHighlight2": "Twoje treści i postępy w nauce należą do Ciebie",
        "legalTermsHighlight3": "Możemy używać zagregowanych, anonimowych danych do ulepszania produktu",
        "legalTermsHighlight4": "Podlega prawu Anglii i Walii",
        "legalAcceptAll": "Akceptuję",
        "legalDecline": "Odrzuć",
        "legalDeclineTitle": "Czy na pewno?",
        "legalDeclineMessage": "Musisz zaakceptować naszą Politykę Prywatności i Regulamin, aby korzystać z LumenLingo.",
        "legalDeclineConfirm": "Odrzuć i wyjdź",
        "legalReadFull": "Przeczytaj pełną politykę",
        "legalScrollToAccept": "Przewiń, aby przejrzeć",
    },
    "Arabic": {
        "legalConsentTitle": "قبل أن نبدأ",
        "legalConsentSubtitle": "يرجى مراجعة سياساتنا لمتابعة استخدام LumenLingo",
        "privacyPolicyTitle": "سياسة الخصوصية",
        "termsOfServiceTitle": "شروط الخدمة",
        "legalVersion": "الإصدار 2.0",
        "legalLastUpdated": "آخر تحديث: ٢٣ مارس ٢٠٢٦",
        "legalPrivacySummary": "يتم تشغيل LumenLingo بواسطة LumenShore Ltd. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تغطي هذه السياسة موقعنا الإلكتروني وتطبيق iOS.",
        "legalTermsSummary": "تحكم شروط الخدمة هذه استخدامك لتطبيق LumenLingo المحمول الذي تديره LumenShore Ltd. باستخدام LumenLingo، فإنك توافق على هذه الشروط.",
        "legalPrivacyHighlight1": "تبقى بيانات التعلم على جهازك وحساب iCloud الشخصي",
        "legalPrivacyHighlight2": "نستخدم Vercel Analytics بدون ملفات تعريف الارتباط",
        "legalPrivacyHighlight3": "يساعدنا Sentry في إصلاح الأخطاء (إعادة تشغيل الجلسة تتطلب موافقة)",
        "legalPrivacyHighlight4": "لا نبيع بياناتك الشخصية أبدًا لأطراف ثالثة",
        "legalTermsHighlight1": "مستويات مجانية ومميزة متاحة — الاشتراكات تُدار عبر Apple",
        "legalTermsHighlight2": "محتواك وتقدمك في التعلم ملك لك",
        "legalTermsHighlight3": "قد نستخدم بيانات مجمعة ومجهولة لتحسين المنتج",
        "legalTermsHighlight4": "يخضع لقوانين إنجلترا وويلز",
        "legalAcceptAll": "أوافق",
        "legalDecline": "رفض",
        "legalDeclineTitle": "هل أنت متأكد؟",
        "legalDeclineMessage": "يجب قبول سياسة الخصوصية وشروط الخدمة لاستخدام LumenLingo.",
        "legalDeclineConfirm": "رفض والخروج",
        "legalReadFull": "اقرأ السياسة كاملة",
        "legalScrollToAccept": "مرر للمراجعة",
    },
    "Chinese": {
        "legalConsentTitle": "开始之前",
        "legalConsentSubtitle": "请查看我们的政策以继续使用 LumenLingo",
        "privacyPolicyTitle": "隐私政策",
        "termsOfServiceTitle": "服务条款",
        "legalVersion": "版本 2.0",
        "legalLastUpdated": "最后更新：2026年3月23日",
        "legalPrivacySummary": "LumenLingo 由 LumenShore Ltd 运营。我们尊重您的隐私并致力于保护您的个人数据。本政策涵盖我们的网站和 iOS 应用程序。",
        "legalTermsSummary": "本服务条款管辖您对 LumenShore Ltd 运营的 LumenLingo 移动应用程序的使用。使用 LumenLingo 即表示您同意这些条款。",
        "legalPrivacyHighlight1": "您的学习数据保存在您的设备和个人 iCloud 账户中",
        "legalPrivacyHighlight2": "我们使用无 Cookie 的 Vercel Analytics — 网站上没有跟踪 Cookie",
        "legalPrivacyHighlight3": "Sentry 帮助我们修复错误（会话回放需要同意）",
        "legalPrivacyHighlight4": "我们从不向第三方出售您的个人数据",
        "legalTermsHighlight1": "提供免费和高级层级 — 订阅通过 Apple 管理",
        "legalTermsHighlight2": "您的内容和学习进度属于您",
        "legalTermsHighlight3": "我们可能使用聚合的匿名数据来改进产品",
        "legalTermsHighlight4": "受英格兰和威尔士法律管辖",
        "legalAcceptAll": "我同意",
        "legalDecline": "拒绝",
        "legalDeclineTitle": "确定吗？",
        "legalDeclineMessage": "您必须接受我们的隐私政策和服务条款才能使用 LumenLingo。",
        "legalDeclineConfirm": "拒绝并退出",
        "legalReadFull": "阅读完整政策",
        "legalScrollToAccept": "滚动查看",
    },
    "Japanese": {
        "legalConsentTitle": "始める前に",
        "legalConsentSubtitle": "LumenLingoを引き続きご利用いただくため、ポリシーをご確認ください",
        "privacyPolicyTitle": "プライバシーポリシー",
        "termsOfServiceTitle": "利用規約",
        "legalVersion": "バージョン 2.0",
        "legalLastUpdated": "最終更新日：2026年3月23日",
        "legalPrivacySummary": "LumenLingoはLumenShore Ltdが運営しています。私たちはあなたのプライバシーを尊重し、個人データの保護に努めています。このポリシーはウェブサイトとiOSアプリの両方に適用されます。",
        "legalTermsSummary": "この利用規約は、LumenShore Ltdが運営するLumenLingoモバイルアプリケーションの使用を規定します。LumenLingoを使用することにより、これらの規約に同意したことになります。",
        "legalPrivacyHighlight1": "学習データはお使いのデバイスと個人のiCloudアカウントに保存されます",
        "legalPrivacyHighlight2": "Cookieフリーの Vercel Analytics を使用 — ウェブサイトにトラッキングCookieなし",
        "legalPrivacyHighlight3": "Sentryがバグ修正を支援（セッションリプレイには同意が必要）",
        "legalPrivacyHighlight4": "個人データを第三者に販売することは一切ありません",
        "legalTermsHighlight1": "無料プランとプレミアムプランを提供 — サブスクリプションはApple経由で管理",
        "legalTermsHighlight2": "コンテンツと学習の進捗はあなたのものです",
        "legalTermsHighlight3": "製品改善のために集約された匿名データを使用することがあります",
        "legalTermsHighlight4": "イングランドおよびウェールズの法律に準拠",
        "legalAcceptAll": "同意する",
        "legalDecline": "拒否",
        "legalDeclineTitle": "よろしいですか？",
        "legalDeclineMessage": "LumenLingoをご利用いただくには、プライバシーポリシーと利用規約に同意していただく必要があります。",
        "legalDeclineConfirm": "拒否して終了",
        "legalReadFull": "ポリシー全文を読む",
        "legalScrollToAccept": "スクロールして確認",
    },
    "Ukrainian": {
        "legalConsentTitle": "Перш ніж почати",
        "legalConsentSubtitle": "Будь ласка, ознайомтеся з нашими правилами, щоб продовжити користування LumenLingo",
        "privacyPolicyTitle": "Політика конфіденційності",
        "termsOfServiceTitle": "Умови використання",
        "legalVersion": "Версія 2.0",
        "legalLastUpdated": "Останнє оновлення: 23 березня 2026",
        "legalPrivacySummary": "LumenLingo керується LumenShore Ltd. Ми поважаємо вашу конфіденційність і зобов'язуємося захищати ваші персональні дані. Ця політика охоплює наш веб-сайт та додаток iOS.",
        "legalTermsSummary": "Ці Умови використання регулюють користування мобільним додатком LumenLingo, який керується LumenShore Ltd. Використовуючи LumenLingo, ви погоджуєтесь з цими Умовами.",
        "legalPrivacyHighlight1": "Ваші дані навчання залишаються на вашому пристрої та особистому обліковому записі iCloud",
        "legalPrivacyHighlight2": "Ми використовуємо Vercel Analytics без cookies — жодних відстежувальних cookies на нашому сайті",
        "legalPrivacyHighlight3": "Sentry допомагає нам виправляти помилки (запис сеансу потребує згоди)",
        "legalPrivacyHighlight4": "Ми ніколи не продаємо ваші персональні дані третім сторонам",
        "legalTermsHighlight1": "Доступні безкоштовний та преміум плани — підписки керуються через Apple",
        "legalTermsHighlight2": "Ваш контент та прогрес навчання належать вам",
        "legalTermsHighlight3": "Ми можемо використовувати агреговані анонімні дані для покращення продукту",
        "legalTermsHighlight4": "Регулюється законодавством Англії та Уельсу",
        "legalAcceptAll": "Я погоджуюсь",
        "legalDecline": "Відхилити",
        "legalDeclineTitle": "Ви впевнені?",
        "legalDeclineMessage": "Для використання LumenLingo необхідно прийняти нашу Політику конфіденційності та Умови використання.",
        "legalDeclineConfirm": "Відхилити та вийти",
        "legalReadFull": "Читати повну політику",
        "legalScrollToAccept": "Прокрутіть для перегляду",
    },
}

FIELDS = [
    "legalConsentTitle", "legalConsentSubtitle", "privacyPolicyTitle",
    "termsOfServiceTitle", "legalVersion", "legalLastUpdated",
    "legalPrivacySummary", "legalTermsSummary",
    "legalPrivacyHighlight1", "legalPrivacyHighlight2",
    "legalPrivacyHighlight3", "legalPrivacyHighlight4",
    "legalTermsHighlight1", "legalTermsHighlight2",
    "legalTermsHighlight3", "legalTermsHighlight4",
    "legalAcceptAll", "legalDecline", "legalDeclineTitle",
    "legalDeclineMessage", "legalDeclineConfirm", "legalReadFull",
    "legalScrollToAccept",
]


def patch_file(lang_name: str):
    path = BASE / f"AppStrings+{lang_name}.swift"
    if not path.exists():
        print(f"  ⚠ {path.name} not found")
        return

    content = path.read_text("utf-8")
    trans = TRANSLATIONS[lang_name]

    # Build the legal consent block
    lines = []
    lines.append("")
    lines.append("        // MARK: - Legal Consent")
    for i, field in enumerate(FIELDS):
        value = trans[field].replace('"', '\\"')
        comma = "," if i < len(FIELDS) - 1 else ""
        lines.append(f'        {field}: "{value}"{comma}')

    block = "\n".join(lines)

    # Replace the closing `)` + `}` — find the last occurrence of `    )\n}`
    # We need to insert before the closing `)` of the AppStrings init call
    pattern = r'(        upgradeMessage(?:Trial|Royal): "[^"]*")\n    \)\n\}'
    match = re.search(pattern, content)
    if not match:
        # Try a more relaxed pattern
        idx = content.rfind("    )\n}")
        if idx == -1:
            print(f"  ⚠ Could not find closing pattern in {path.name}")
            return
        insert_point = idx
        content = content[:insert_point] + "," + block + "\n    )\n}"
    else:
        end_of_last_field = match.end(1)
        content = content[:end_of_last_field] + "," + block + content[end_of_last_field:].replace(
            "\n    )\n}", "\n    )\n}", 1
        )

    path.write_text(content, "utf-8")
    print(f"  ✓ {path.name} updated")


def main():
    for lang in TRANSLATIONS:
        patch_file(lang)
    print("\nDone. All locale files updated with legal consent strings.")


if __name__ == "__main__":
    main()

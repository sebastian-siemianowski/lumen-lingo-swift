#!/usr/bin/env python3
"""Patch all non-English locale files with CookieConsent translations and updated Footer links."""
import json
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

TRANSLATIONS = {
    "es": {
        "CookieConsent": {
            "bannerTitle": "Valoramos tu privacidad",
            "bannerDescription": "Usamos cookies y tecnologías similares para mejorar tu experiencia, monitorizar errores y comprender el uso del sitio. Tú eliges lo que te resulte cómodo.",
            "learnMore": "Más información",
            "acceptAll": "Aceptar todo",
            "rejectAll": "Rechazar todo",
            "managePreferences": "Gestionar preferencias",
            "preferencesTitle": "Preferencias de cookies",
            "preferencesDescription": "Elige qué categorías de cookies deseas permitir. Las cookies esenciales siempre están activas ya que son necesarias para el funcionamiento del sitio.",
            "savePreferences": "Guardar preferencias",
            "close": "Cerrar",
            "categories": {
                "essential": {
                    "label": "Esenciales",
                    "description": "Necesarias para el funcionamiento del sitio web. Incluye preferencias de idioma y estado de consentimiento. No se pueden desactivar."
                },
                "analytics": {
                    "label": "Analítica",
                    "description": "Análisis anónimos de páginas vistas sin cookies a través de Vercel Analytics. Nos ayuda a entender qué páginas son más útiles."
                },
                "errorMonitoring": {
                    "label": "Monitorización de errores",
                    "description": "Informes de errores a través de Sentry para que podamos solucionar problemas rápidamente. No se capturan datos personales."
                },
                "sessionReplay": {
                    "label": "Grabación de sesión",
                    "description": "Graba sesiones de navegación anonimizadas cuando ocurren errores para ayudarnos a reproducir y corregir fallos. Todo el texto y los medios se ocultan."
                }
            }
        },
        "Footer.links.cookiePolicy": "Política de cookies",
        "Footer.links.cookieSettings": "Configuración de cookies"
    },
    "fr": {
        "CookieConsent": {
            "bannerTitle": "Nous respectons votre vie privée",
            "bannerDescription": "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, surveiller les erreurs et comprendre l'utilisation du site. Vous choisissez ce qui vous convient.",
            "learnMore": "En savoir plus",
            "acceptAll": "Tout accepter",
            "rejectAll": "Tout refuser",
            "managePreferences": "Gérer les préférences",
            "preferencesTitle": "Préférences de cookies",
            "preferencesDescription": "Choisissez les catégories de cookies que vous souhaitez autoriser. Les cookies essentiels sont toujours actifs car ils sont nécessaires au bon fonctionnement du site.",
            "savePreferences": "Enregistrer les préférences",
            "close": "Fermer",
            "categories": {
                "essential": {
                    "label": "Essentiels",
                    "description": "Nécessaires au fonctionnement du site web. Comprend les préférences linguistiques et l'état du consentement. Ne peuvent pas être désactivés."
                },
                "analytics": {
                    "label": "Analytique",
                    "description": "Analyses anonymes des pages vues sans cookies via Vercel Analytics. Nous aide à comprendre quelles pages sont les plus utiles."
                },
                "errorMonitoring": {
                    "label": "Surveillance des erreurs",
                    "description": "Rapports d'erreurs via Sentry pour que nous puissions résoudre les problèmes rapidement. Aucune donnée personnelle n'est capturée."
                },
                "sessionReplay": {
                    "label": "Replay de session",
                    "description": "Enregistre des sessions de navigation anonymisées lors d'erreurs pour nous aider à reproduire et corriger les bugs. Tout le texte et les médias sont masqués."
                }
            }
        },
        "Footer.links.cookiePolicy": "Politique de cookies",
        "Footer.links.cookieSettings": "Paramètres des cookies"
    },
    "de": {
        "CookieConsent": {
            "bannerTitle": "Wir schätzen Ihre Privatsphäre",
            "bannerDescription": "Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern, Fehler zu überwachen und die Nutzung der Website zu verstehen. Sie entscheiden, womit Sie einverstanden sind.",
            "learnMore": "Mehr erfahren",
            "acceptAll": "Alle akzeptieren",
            "rejectAll": "Alle ablehnen",
            "managePreferences": "Einstellungen verwalten",
            "preferencesTitle": "Cookie-Einstellungen",
            "preferencesDescription": "Wählen Sie, welche Cookie-Kategorien Sie zulassen möchten. Essenzielle Cookies sind immer aktiv, da sie für das Funktionieren der Website erforderlich sind.",
            "savePreferences": "Einstellungen speichern",
            "close": "Schließen",
            "categories": {
                "essential": {
                    "label": "Essenziell",
                    "description": "Erforderlich für das Funktionieren der Website. Umfasst Spracheinstellungen und Einwilligungsstatus. Kann nicht deaktiviert werden."
                },
                "analytics": {
                    "label": "Analyse",
                    "description": "Anonyme, cookiefreie Seitenaufruf-Analysen über Vercel Analytics. Hilft uns zu verstehen, welche Seiten am nützlichsten sind."
                },
                "errorMonitoring": {
                    "label": "Fehlerüberwachung",
                    "description": "Fehlerberichte über Sentry, damit wir Probleme schnell beheben können. Es werden keine personenbezogenen Daten erfasst."
                },
                "sessionReplay": {
                    "label": "Sitzungsaufzeichnung",
                    "description": "Zeichnet anonymisierte Browsing-Sitzungen bei Fehlern auf, um Bugs reproduzieren und beheben zu können. Alle Texte und Medien werden maskiert."
                }
            }
        },
        "Footer.links.cookiePolicy": "Cookie-Richtlinie",
        "Footer.links.cookieSettings": "Cookie-Einstellungen"
    },
    "ja": {
        "CookieConsent": {
            "bannerTitle": "プライバシーを大切にしています",
            "bannerDescription": "Cookieおよび類似技術を使用して、体験の向上、エラーの監視、サイト利用状況の把握を行っています。ご自身で快適な設定をお選びください。",
            "learnMore": "詳しく見る",
            "acceptAll": "すべて受け入れる",
            "rejectAll": "すべて拒否する",
            "managePreferences": "設定を管理",
            "preferencesTitle": "Cookie設定",
            "preferencesDescription": "許可するCookieカテゴリを選択してください。必須Cookieはサイトの動作に必要なため、常に有効です。",
            "savePreferences": "設定を保存",
            "close": "閉じる",
            "categories": {
                "essential": {
                    "label": "必須",
                    "description": "ウェブサイトの動作に必要です。言語設定や同意状態が含まれます。無効にできません。"
                },
                "analytics": {
                    "label": "アナリティクス",
                    "description": "Vercel Analyticsによる匿名のCookieフリーなページビュー分析。どのページが最も役立つかを理解するのに役立ちます。"
                },
                "errorMonitoring": {
                    "label": "エラー監視",
                    "description": "Sentryを通じたエラー報告により、問題を迅速に修正できます。個人データは取得しません。"
                },
                "sessionReplay": {
                    "label": "セッションリプレイ",
                    "description": "エラー発生時に匿名化されたブラウジングセッションを記録し、バグの再現と修正に役立てます。すべてのテキストとメディアはマスクされます。"
                }
            }
        },
        "Footer.links.cookiePolicy": "Cookieポリシー",
        "Footer.links.cookieSettings": "Cookie設定"
    },
    "zh": {
        "CookieConsent": {
            "bannerTitle": "我们重视您的隐私",
            "bannerDescription": "我们使用Cookie和类似技术来改善您的体验、监控错误并了解网站使用情况。您可以选择自己觉得舒适的设置。",
            "learnMore": "了解更多",
            "acceptAll": "全部接受",
            "rejectAll": "全部拒绝",
            "managePreferences": "管理偏好设置",
            "preferencesTitle": "Cookie偏好设置",
            "preferencesDescription": "选择您希望允许的Cookie类别。必要Cookie始终处于活动状态，因为网站正常运行需要它们。",
            "savePreferences": "保存偏好设置",
            "close": "关闭",
            "categories": {
                "essential": {
                    "label": "必要",
                    "description": "网站正常运行所必需。包括语言偏好和同意状态。不能禁用。"
                },
                "analytics": {
                    "label": "分析",
                    "description": "通过Vercel Analytics进行的匿名、无Cookie页面浏览分析。帮助我们了解哪些页面最有用。"
                },
                "errorMonitoring": {
                    "label": "错误监控",
                    "description": "通过Sentry进行错误报告，以便我们快速修复问题。不会捕获个人数据。"
                },
                "sessionReplay": {
                    "label": "会话回放",
                    "description": "在发生错误时记录匿名化的浏览会话，以帮助我们重现和修复Bug。所有文本和媒体均已屏蔽。"
                }
            }
        },
        "Footer.links.cookiePolicy": "Cookie政策",
        "Footer.links.cookieSettings": "Cookie设置"
    },
    "ar": {
        "CookieConsent": {
            "bannerTitle": "نحن نقدّر خصوصيتك",
            "bannerDescription": "نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك ومراقبة الأخطاء وفهم استخدام الموقع. أنت تختار ما يناسبك.",
            "learnMore": "اعرف المزيد",
            "acceptAll": "قبول الكل",
            "rejectAll": "رفض الكل",
            "managePreferences": "إدارة التفضيلات",
            "preferencesTitle": "تفضيلات ملفات تعريف الارتباط",
            "preferencesDescription": "اختر فئات ملفات تعريف الارتباط التي ترغب في السماح بها. ملفات تعريف الارتباط الأساسية نشطة دائمًا لأنها ضرورية لعمل الموقع.",
            "savePreferences": "حفظ التفضيلات",
            "close": "إغلاق",
            "categories": {
                "essential": {
                    "label": "أساسية",
                    "description": "مطلوبة لعمل الموقع. تشمل تفضيلات اللغة وحالة الموافقة. لا يمكن تعطيلها."
                },
                "analytics": {
                    "label": "التحليلات",
                    "description": "تحليلات مشاهدات الصفحات المجهولة بدون ملفات تعريف الارتباط عبر Vercel Analytics. تساعدنا في فهم الصفحات الأكثر فائدة."
                },
                "errorMonitoring": {
                    "label": "مراقبة الأخطاء",
                    "description": "تقارير الأخطاء عبر Sentry حتى نتمكن من إصلاح المشكلات بسرعة. لا يتم التقاط بيانات شخصية."
                },
                "sessionReplay": {
                    "label": "إعادة تشغيل الجلسة",
                    "description": "تسجيل جلسات التصفح المجهولة عند حدوث أخطاء لمساعدتنا في إعادة إنتاج الأخطاء وإصلاحها. يتم إخفاء جميع النصوص والوسائط."
                }
            }
        },
        "Footer.links.cookiePolicy": "سياسة ملفات تعريف الارتباط",
        "Footer.links.cookieSettings": "إعدادات ملفات تعريف الارتباط"
    },
    "pl": {
        "CookieConsent": {
            "bannerTitle": "Cenimy Twoją prywatność",
            "bannerDescription": "Używamy plików cookie i podobnych technologii, aby poprawić Twoje doświadczenia, monitorować błędy i analizować korzystanie z witryny. Sam wybierasz, na co się zgadzasz.",
            "learnMore": "Dowiedz się więcej",
            "acceptAll": "Zaakceptuj wszystkie",
            "rejectAll": "Odrzuć wszystkie",
            "managePreferences": "Zarządzaj preferencjami",
            "preferencesTitle": "Preferencje plików cookie",
            "preferencesDescription": "Wybierz, które kategorie plików cookie chcesz zezwolić. Niezbędne pliki cookie są zawsze aktywne, ponieważ są wymagane do prawidłowego działania witryny.",
            "savePreferences": "Zapisz preferencje",
            "close": "Zamknij",
            "categories": {
                "essential": {
                    "label": "Niezbędne",
                    "description": "Wymagane do działania strony internetowej. Obejmuje preferencje językowe i stan zgody. Nie można ich wyłączyć."
                },
                "analytics": {
                    "label": "Analityka",
                    "description": "Anonimowa analiza odsłon stron bez plików cookie za pośrednictwem Vercel Analytics. Pomaga nam zrozumieć, które strony są najbardziej przydatne."
                },
                "errorMonitoring": {
                    "label": "Monitorowanie błędów",
                    "description": "Raportowanie błędów za pośrednictwem Sentry, abyśmy mogli szybko naprawiać problemy. Żadne dane osobowe nie są przechwytywane."
                },
                "sessionReplay": {
                    "label": "Nagrywanie sesji",
                    "description": "Rejestruje zanonimizowane sesje przeglądania podczas wystąpienia błędów, aby pomóc nam odtworzyć i naprawić usterki. Cały tekst i multimedia są zamaskowane."
                }
            }
        },
        "Footer.links.cookiePolicy": "Polityka plików cookie",
        "Footer.links.cookieSettings": "Ustawienia plików cookie"
    },
    "uk": {
        "CookieConsent": {
            "bannerTitle": "Ми цінуємо вашу конфіденційність",
            "bannerDescription": "Ми використовуємо файли cookie та подібні технології для покращення вашого досвіду, моніторингу помилок та розуміння використання сайту. Ви обираєте те, що вам зручно.",
            "learnMore": "Дізнатися більше",
            "acceptAll": "Прийняти всі",
            "rejectAll": "Відхилити всі",
            "managePreferences": "Керувати налаштуваннями",
            "preferencesTitle": "Налаштування cookie",
            "preferencesDescription": "Оберіть, які категорії файлів cookie ви хочете дозволити. Основні файли cookie завжди активні, оскільки вони необхідні для роботи сайту.",
            "savePreferences": "Зберегти налаштування",
            "close": "Закрити",
            "categories": {
                "essential": {
                    "label": "Основні",
                    "description": "Необхідні для роботи веб-сайту. Включають мовні налаштування та стан згоди. Не можна вимкнути."
                },
                "analytics": {
                    "label": "Аналітика",
                    "description": "Анонімна аналітика переглядів сторінок без cookie через Vercel Analytics. Допомагає нам зрозуміти, які сторінки найбільш корисні."
                },
                "errorMonitoring": {
                    "label": "Моніторинг помилок",
                    "description": "Звіти про помилки через Sentry, щоб ми могли швидко виправляти проблеми. Персональні дані не збираються."
                },
                "sessionReplay": {
                    "label": "Відтворення сесії",
                    "description": "Записує анонімізовані сеанси перегляду при виникненні помилок, щоб допомогти нам відтворити та виправити баги. Весь текст і медіа маскуються."
                }
            }
        },
        "Footer.links.cookiePolicy": "Політика cookie",
        "Footer.links.cookieSettings": "Налаштування cookie"
    },
    "pt": {
        "CookieConsent": {
            "bannerTitle": "Valorizamos a sua privacidade",
            "bannerDescription": "Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência, monitorizar erros e compreender a utilização do site. Você escolhe o que lhe é confortável.",
            "learnMore": "Saiba mais",
            "acceptAll": "Aceitar tudo",
            "rejectAll": "Rejeitar tudo",
            "managePreferences": "Gerir preferências",
            "preferencesTitle": "Preferências de cookies",
            "preferencesDescription": "Escolha quais categorias de cookies deseja permitir. Os cookies essenciais estão sempre ativos pois são necessários para o funcionamento do site.",
            "savePreferences": "Guardar preferências",
            "close": "Fechar",
            "categories": {
                "essential": {
                    "label": "Essenciais",
                    "description": "Necessários para o funcionamento do website. Inclui preferências de idioma e estado de consentimento. Não podem ser desativados."
                },
                "analytics": {
                    "label": "Analítica",
                    "description": "Análises anónimas de visualizações de páginas sem cookies através do Vercel Analytics. Ajuda-nos a compreender quais páginas são mais úteis."
                },
                "errorMonitoring": {
                    "label": "Monitorização de erros",
                    "description": "Relatórios de erros através do Sentry para que possamos corrigir problemas rapidamente. Nenhum dado pessoal é capturado."
                },
                "sessionReplay": {
                    "label": "Replay de sessão",
                    "description": "Grava sessões de navegação anonimizadas quando ocorrem erros para nos ajudar a reproduzir e corrigir bugs. Todo o texto e média são mascarados."
                }
            }
        },
        "Footer.links.cookiePolicy": "Política de Cookies",
        "Footer.links.cookieSettings": "Definições de Cookies"
    }
}


def patch_locale(locale: str, data: dict) -> None:
    path = os.path.join(MESSAGES_DIR, f'{locale}.json')
    with open(path, 'r', encoding='utf-8') as f:
        content = json.load(f)

    # Add CookieConsent section
    content['CookieConsent'] = data['CookieConsent']

    # Add Footer link keys (nested dot paths)
    for key, value in data.items():
        if key.startswith('Footer.links.'):
            parts = key.split('.')
            # Navigate to Footer.links and set the key
            if 'Footer' not in content:
                content['Footer'] = {}
            if 'links' not in content['Footer']:
                content['Footer']['links'] = {}
            content['Footer']['links'][parts[2]] = value

    with open(path, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write('\n')

    print(f'  ✅ {locale}.json patched')


if __name__ == '__main__':
    print('Patching locale files with CookieConsent translations...')
    for locale, data in TRANSLATIONS.items():
        patch_locale(locale, data)
    print('Done!')

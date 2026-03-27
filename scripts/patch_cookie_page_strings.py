#!/usr/bin/env python3
"""Patch all non-English locale files with CookiePage translations."""
import json
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

TRANSLATIONS = {
    "es": {
        "meta": {
            "title": "Política de Cookies — LumenLingo",
            "description": "Descubre cómo LumenLingo utiliza cookies, localStorage y tecnologías similares. Revisa los mecanismos de almacenamiento, duraciones y gestiona tus preferencias.",
            "ogTitle": "Política de Cookies — LumenLingo",
            "ogDescription": "Transparencia total sobre cookies, almacenamiento local y caché utilizados por LumenLingo. Gestiona tus preferencias en cualquier momento."
        },
        "breadcrumb": "Política de Cookies",
        "hero": {
            "heading": "Política de Cookies",
            "subtitle": "Creemos en la transparencia total. Esto es exactamente lo que nuestro sitio web almacena en tu dispositivo y por qué."
        },
        "overview": {
            "heading": "Resumen",
            "p1": "LumenLingo utiliza almacenamiento mínimo del lado del cliente para que el sitio funcione correctamente. No utilizamos cookies de rastreo tradicionales. En su lugar, dependemos de localStorage, sessionStorage y una caché de Service Worker, cada uno con un propósito específico y documentado.",
            "p2": "Puedes gestionar tus preferencias en cualquier momento usando el botón de Configuración de Cookies en el pie de página, o borrando los datos del sitio en tu navegador."
        },
        "localStorage": {
            "heading": "Almacenamiento Local",
            "intro": "localStorage persiste datos en tu dispositivo hasta que se borren explícitamente. Usamos las siguientes claves:",
            "consentKey": {
                "heading": "ll_cookie_consent",
                "category": "Esencial",
                "purpose": "Almacena tus preferencias de consentimiento de cookies: qué categorías has aceptado o rechazado, la versión del consentimiento y una marca de tiempo.",
                "duration": "13 meses desde la fecha de tu última decisión de consentimiento, según las directrices del RGPD.",
                "data": "Objeto JSON con indicadores booleanos (analytics, errorMonitoring, sessionReplay), marca de tiempo ISO, cadena de versión de consentimiento y marca de tiempo de expiración. Sin datos personales."
            },
            "localeKey": {
                "heading": "NEXT_LOCALE",
                "category": "Esencial",
                "purpose": "Recuerda tu idioma preferido para que el sitio cargue en el locale correcto en tu próxima visita.",
                "duration": "Persistente hasta que se borre.",
                "data": "Un código de locale de dos letras (ej. \"en\", \"fr\", \"de\"). Sin datos personales."
            }
        },
        "sessionStorage": {
            "heading": "Almacenamiento de Sesión",
            "intro": "sessionStorage persiste solo durante la pestaña actual del navegador. Cuando cierras la pestaña, estos datos se eliminan automáticamente.",
            "utmKey": {
                "heading": "ll_utm",
                "category": "Analítica",
                "purpose": "Conserva los parámetros de campaña UTM entre navegaciones de página dentro de una sesión. Nos ayuda a entender qué canales de marketing atraen visitantes al sitio.",
                "duration": "Solo la sesión actual del navegador — se elimina al cerrar la pestaña.",
                "data": "Objeto JSON con hasta cinco campos de cadena que representan parámetros de campaña. Sin datos personales."
            },
            "sentryKey": {
                "heading": "Sentry Session Replay",
                "category": "Grabación de sesión (requiere consentimiento)",
                "purpose": "Si consientes la Grabación de Sesión, Sentry almacena el estado interno de la sesión en sessionStorage para gestionar el ciclo de vida de la grabación.",
                "duration": "Solo la sesión actual del navegador.",
                "data": "Identificadores internos de sesión de Sentry y estado de reproducción. Todas las interacciones capturadas son anonimizadas — el texto se oculta y los medios se bloquean."
            }
        },
        "serviceWorker": {
            "heading": "Caché del Service Worker",
            "intro": "Usamos un Service Worker para mejorar el rendimiento y habilitar el acceso sin conexión.",
            "cacheName": "Nombre de caché: lumenlingo-v1",
            "strategies": {
                "heading": "Estrategias de Caché",
                "static": "<b>Recursos estáticos</b> (JS, CSS, fuentes, imágenes) — Caché primero. Los recursos se sirven desde la caché local para mayor velocidad y se actualizan en segundo plano.",
                "pages": "<b>Páginas HTML</b> — Red primero. Siempre se obtiene la última versión del servidor. Si estás sin conexión, se sirve una versión en caché.",
                "offline": "<b>Respaldo sin conexión</b> — Si la red no está disponible y no existe versión en caché, se muestra una página dedicada sin conexión."
            },
            "p1": "La caché del Service Worker es completamente local en el dispositivo. Ningún dato en caché se envía a nuestros servidores. Puedes borrarla en cualquier momento desde DevTools de tu navegador.",
            "p2": "La caché no almacena datos personales — solo recursos públicos del sitio web y contenido de páginas."
        },
        "cookies": {
            "heading": "Cookies",
            "intro": "El código propio de LumenLingo no establece cookies HTTP. Sin embargo, las siguientes cookies pueden ser establecidas por nuestra infraestructura:",
            "locale": {
                "heading": "Preferencia de idioma",
                "category": "Esencial",
                "purpose": "La biblioteca de internacionalización next-intl puede establecer una cookie de preferencia de idioma para recordar tu idioma elegido entre visitas.",
                "duration": "Persistente hasta que se borre.",
                "data": "Código de locale de dos letras. De primera parte, no compartido con terceros."
            },
            "p1": "No utilizamos cookies publicitarias, píxeles de rastreo de redes sociales ni cookies de terceros."
        },
        "thirdParty": {
            "heading": "Servicios de Terceros",
            "intro": "Los siguientes servicios de terceros pueden procesar datos de tu visita:",
            "vercel": {
                "heading": "Vercel Analytics",
                "description": "Analítica web centrada en la privacidad. <b>Sin cookies</b> — no se almacenan cookies ni identificadores persistentes. Los eventos de track() personalizados solo se envían si consientes la categoría de Analítica.",
                "link": "Política de Privacidad de Vercel"
            },
            "sentry": {
                "heading": "Sentry",
                "description": "Monitorización de errores y grabación de sesión. Los <b>informes de errores</b> se envían si consientes la Monitorización de Errores. Las <b>grabaciones de sesión</b> solo se registran si consientes explícitamente la categoría de Grabación de Sesión.",
                "link": "Política de Privacidad de Sentry"
            }
        },
        "manage": {
            "heading": "Gestionar Tus Preferencias",
            "p1": "Puedes cambiar tus elecciones de consentimiento en cualquier momento haciendo clic en el botón \"Configuración de Cookies\" en el pie de página.",
            "p2": "Para eliminar todos los datos almacenados, puedes borrar los datos del sitio a través de la configuración de tu navegador o DevTools.",
            "p3": "Tus preferencias de consentimiento se almacenan localmente en tu dispositivo — nunca se transmiten a nuestros servidores."
        },
        "updates": {
            "heading": "Actualizaciones de la Política",
            "p1": "Podemos actualizar esta Política de Cookies cuando añadamos nuevos mecanismos de almacenamiento o cambiemos nuestras prácticas de datos.",
            "version": "<b>Versión actual del consentimiento:</b> 1.0",
            "versionHistory": "Historial de Versiones",
            "v1": "<b>v1.0</b> (julio 2025) — Política de Cookies inicial publicada."
        },
        "contact": {
            "heading": "Contacto",
            "intro": "Si tienes preguntas sobre esta Política de Cookies:",
            "email": "<b>Email:</b> <emailLink>support@lumenlingo.com</emailLink>",
            "company": "<b>Empresa:</b> LumenShore Ltd (Company No. 09607326)",
            "responseTime": "Normalmente respondemos en 48 horas."
        },
        "table": {
            "key": "Clave de Almacenamiento",
            "type": "Tipo",
            "category": "Categoría",
            "purpose": "Propósito",
            "duration": "Duración"
        }
    },
    "fr": {
        "meta": {
            "title": "Politique de Cookies — LumenLingo",
            "description": "Découvrez comment LumenLingo utilise les cookies, le localStorage et les technologies similaires.",
            "ogTitle": "Politique de Cookies — LumenLingo",
            "ogDescription": "Transparence totale sur les cookies et le stockage local utilisés par LumenLingo."
        },
        "breadcrumb": "Politique de Cookies",
        "hero": {
            "heading": "Politique de Cookies",
            "subtitle": "Nous croyons en la transparence totale. Voici ce que notre site stocke sur votre appareil et pourquoi."
        },
        "overview": {
            "heading": "Aperçu",
            "p1": "LumenLingo utilise un stockage côté client minimal pour le bon fonctionnement du site. Nous n'utilisons pas de cookies de suivi traditionnels.",
            "p2": "Vous pouvez gérer vos préférences à tout moment via le bouton Paramètres des Cookies en pied de page."
        },
        "localStorage": {
            "heading": "Stockage Local",
            "intro": "Le localStorage persiste sur votre appareil jusqu'à suppression explicite. Nous utilisons les clés suivantes :",
            "consentKey": {
                "heading": "ll_cookie_consent",
                "category": "Essentiel",
                "purpose": "Stocke vos préférences de consentement aux cookies.",
                "duration": "13 mois à compter de votre dernière décision de consentement.",
                "data": "Objet JSON contenant des indicateurs booléens, horodatage ISO, version du consentement. Aucune donnée personnelle."
            },
            "localeKey": {
                "heading": "NEXT_LOCALE",
                "category": "Essentiel",
                "purpose": "Mémorise votre langue préférée pour charger le site dans le bon locale.",
                "duration": "Persistant jusqu'à suppression.",
                "data": "Code de locale à deux lettres. Aucune donnée personnelle."
            }
        },
        "sessionStorage": {
            "heading": "Stockage de Session",
            "intro": "Le sessionStorage persiste uniquement pour l'onglet actuel. La fermeture de l'onglet supprime automatiquement ces données.",
            "utmKey": {
                "heading": "ll_utm",
                "category": "Analytique",
                "purpose": "Préserve les paramètres UTM de campagne entre les navigations de page au sein d'une session.",
                "duration": "Session actuelle uniquement.",
                "data": "Objet JSON avec jusqu'à cinq champs de paramètres de campagne. Aucune donnée personnelle."
            },
            "sentryKey": {
                "heading": "Sentry Session Replay",
                "category": "Replay de session (consentement requis)",
                "purpose": "Si vous consentez au Replay de Session, Sentry stocke l'état de session interne dans sessionStorage.",
                "duration": "Session actuelle uniquement.",
                "data": "Identifiants de session Sentry internes. Toutes les interactions sont anonymisées."
            }
        },
        "serviceWorker": {
            "heading": "Cache du Service Worker",
            "intro": "Nous utilisons un Service Worker pour améliorer les performances et permettre l'accès hors ligne.",
            "cacheName": "Nom du cache : lumenlingo-v1",
            "strategies": {
                "heading": "Stratégies de Cache",
                "static": "<b>Ressources statiques</b> (JS, CSS, polices, images) — Cache d'abord.",
                "pages": "<b>Pages HTML</b> — Réseau d'abord. La dernière version est toujours récupérée du serveur.",
                "offline": "<b>Secours hors ligne</b> — Une page hors ligne dédiée est affichée si le réseau est indisponible."
            },
            "p1": "Le cache du Service Worker est entièrement local. Aucune donnée en cache n'est envoyée à nos serveurs.",
            "p2": "Le cache ne stocke aucune donnée personnelle."
        },
        "cookies": {
            "heading": "Cookies",
            "intro": "Le code propre de LumenLingo ne définit aucun cookie HTTP. Cependant, les cookies suivants peuvent être définis par notre infrastructure :",
            "locale": {
                "heading": "Préférence de langue",
                "category": "Essentiel",
                "purpose": "La bibliothèque next-intl peut définir un cookie de préférence de langue.",
                "duration": "Persistant jusqu'à suppression.",
                "data": "Code de locale à deux lettres. Première partie, non partagé."
            },
            "p1": "Nous n'utilisons pas de cookies publicitaires ni de pixels de suivi tiers."
        },
        "thirdParty": {
            "heading": "Services Tiers",
            "intro": "Les services tiers suivants peuvent traiter des données de votre visite :",
            "vercel": {
                "heading": "Vercel Analytics",
                "description": "Analytique web respectueuse de la vie privée. <b>Sans cookies</b>. Les événements track() ne sont envoyés qu'avec votre consentement.",
                "link": "Politique de Confidentialité Vercel"
            },
            "sentry": {
                "heading": "Sentry",
                "description": "Surveillance des erreurs et replay de session. Les <b>rapports d'erreurs</b> sont envoyés avec consentement. Les <b>replays</b> ne sont enregistrés qu'avec consentement explicite.",
                "link": "Politique de Confidentialité Sentry"
            }
        },
        "manage": {
            "heading": "Gérer Vos Préférences",
            "p1": "Vous pouvez modifier vos choix de consentement à tout moment via le bouton \"Paramètres des Cookies\" en pied de page.",
            "p2": "Pour supprimer toutes les données stockées, effacez les données du site via les paramètres de votre navigateur.",
            "p3": "Vos préférences de consentement sont stockées localement — elles ne sont jamais transmises à nos serveurs."
        },
        "updates": {
            "heading": "Mises à Jour",
            "p1": "Nous pouvons mettre à jour cette Politique de Cookies lorsque nous ajoutons de nouveaux mécanismes de stockage.",
            "version": "<b>Version actuelle du consentement :</b> 1.0",
            "versionHistory": "Historique des versions",
            "v1": "<b>v1.0</b> (juillet 2025) — Publication initiale de la Politique de Cookies."
        },
        "contact": {
            "heading": "Nous Contacter",
            "intro": "Si vous avez des questions sur cette Politique de Cookies :",
            "email": "<b>Email :</b> <emailLink>support@lumenlingo.com</emailLink>",
            "company": "<b>Société :</b> LumenShore Ltd (Company No. 09607326)",
            "responseTime": "Nous répondons généralement sous 48 heures."
        },
        "table": {
            "key": "Clé de Stockage",
            "type": "Type",
            "category": "Catégorie",
            "purpose": "Objectif",
            "duration": "Durée"
        }
    },
    "de": {
        "meta": {
            "title": "Cookie-Richtlinie — LumenLingo",
            "description": "Erfahren Sie, wie LumenLingo Cookies, localStorage und ähnliche Technologien verwendet.",
            "ogTitle": "Cookie-Richtlinie — LumenLingo",
            "ogDescription": "Volle Transparenz über Cookies und lokalen Speicher bei LumenLingo."
        },
        "breadcrumb": "Cookie-Richtlinie",
        "hero": {
            "heading": "Cookie-Richtlinie",
            "subtitle": "Wir glauben an vollständige Transparenz. Hier ist genau, was unsere Website auf Ihrem Gerät speichert und warum."
        },
        "overview": {
            "heading": "Übersicht",
            "p1": "LumenLingo verwendet minimalen clientseitigen Speicher für den reibungslosen Betrieb der Website. Wir verwenden keine traditionellen Tracking-Cookies.",
            "p2": "Sie können Ihre Einstellungen jederzeit über die Cookie-Einstellungen in der Fußzeile verwalten."
        },
        "localStorage": {
            "heading": "Lokaler Speicher",
            "intro": "localStorage speichert Daten auf Ihrem Gerät bis zur expliziten Löschung. Wir verwenden folgende Schlüssel:",
            "consentKey": {
                "heading": "ll_cookie_consent",
                "category": "Essenziell",
                "purpose": "Speichert Ihre Cookie-Einwilligungspräferenzen.",
                "duration": "13 Monate ab Ihrer letzten Einwilligungsentscheidung.",
                "data": "JSON-Objekt mit booleschen Flags, ISO-Zeitstempel und Einwilligungsversion. Keine personenbezogenen Daten."
            },
            "localeKey": {
                "heading": "NEXT_LOCALE",
                "category": "Essenziell",
                "purpose": "Merkt sich Ihre bevorzugte Anzeigesprache.",
                "duration": "Dauerhaft bis zur Löschung.",
                "data": "Zweistelliger Locale-Code. Keine personenbezogenen Daten."
            }
        },
        "sessionStorage": {
            "heading": "Sitzungsspeicher",
            "intro": "sessionStorage wird nur für den aktuellen Browser-Tab gespeichert und beim Schließen automatisch gelöscht.",
            "utmKey": {
                "heading": "ll_utm",
                "category": "Analyse",
                "purpose": "Bewahrt UTM-Kampagnenparameter zwischen Seitennavigationen innerhalb einer Sitzung.",
                "duration": "Nur aktuelle Browsersitzung.",
                "data": "JSON-Objekt mit bis zu fünf Kampagnenparameter-Feldern. Keine personenbezogenen Daten."
            },
            "sentryKey": {
                "heading": "Sentry Session Replay",
                "category": "Sitzungsaufzeichnung (Einwilligung erforderlich)",
                "purpose": "Bei Einwilligung zur Sitzungsaufzeichnung speichert Sentry den internen Sitzungsstatus.",
                "duration": "Nur aktuelle Browsersitzung.",
                "data": "Interne Sentry-Sitzungskennungen. Alle Interaktionen werden anonymisiert."
            }
        },
        "serviceWorker": {
            "heading": "Service Worker Cache",
            "intro": "Wir verwenden einen Service Worker zur Leistungsverbesserung und zum Offline-Zugriff.",
            "cacheName": "Cache-Name: lumenlingo-v1",
            "strategies": {
                "heading": "Caching-Strategien",
                "static": "<b>Statische Ressourcen</b> (JS, CSS, Schriften, Bilder) — Cache zuerst.",
                "pages": "<b>HTML-Seiten</b> — Netzwerk zuerst. Die neueste Version wird immer vom Server abgerufen.",
                "offline": "<b>Offline-Fallback</b> — Eine dedizierte Offline-Seite wird angezeigt."
            },
            "p1": "Der Service Worker Cache ist vollständig gerätelokal. Keine gecachten Daten werden an unsere Server gesendet.",
            "p2": "Der Cache speichert keine personenbezogenen Daten."
        },
        "cookies": {
            "heading": "Cookies",
            "intro": "LumenLingos eigener Code setzt keine HTTP-Cookies. Folgende Cookies können jedoch von unserer Infrastruktur gesetzt werden:",
            "locale": {
                "heading": "Sprachpräferenz",
                "category": "Essenziell",
                "purpose": "Die next-intl Internationalisierungsbibliothek kann ein Sprachpräferenz-Cookie setzen.",
                "duration": "Dauerhaft bis zur Löschung.",
                "data": "Zweistelliger Locale-Code. Erstanbieter, nicht an Dritte weitergegeben."
            },
            "p1": "Wir verwenden keine Werbe-Cookies, Social-Media-Tracking-Pixel oder Drittanbieter-Cookies."
        },
        "thirdParty": {
            "heading": "Drittanbieterdienste",
            "intro": "Folgende Drittanbieterdienste können Daten Ihres Besuchs verarbeiten:",
            "vercel": {
                "heading": "Vercel Analytics",
                "description": "Datenschutzfreundliche Web-Analyse. <b>Ohne Cookies</b>. Benutzerdefinierte track()-Ereignisse werden nur mit Einwilligung gesendet.",
                "link": "Vercel Datenschutzrichtlinie"
            },
            "sentry": {
                "heading": "Sentry",
                "description": "Fehlerüberwachung und Sitzungsaufzeichnung. <b>Fehlerberichte</b> bei Einwilligung. <b>Sitzungsaufzeichnungen</b> nur bei expliziter Einwilligung.",
                "link": "Sentry Datenschutzrichtlinie"
            }
        },
        "manage": {
            "heading": "Ihre Einstellungen Verwalten",
            "p1": "Sie können Ihre Einwilligungen jederzeit über die \"Cookie-Einstellungen\" in der Fußzeile ändern.",
            "p2": "Um alle gespeicherten Daten zu entfernen, löschen Sie die Websitedaten über Ihre Browsereinstellungen.",
            "p3": "Ihre Einwilligungen werden lokal auf Ihrem Gerät gespeichert — sie werden nie an unsere Server übertragen."
        },
        "updates": {
            "heading": "Richtlinienaktualisierungen",
            "p1": "Wir können diese Cookie-Richtlinie aktualisieren, wenn wir neue Speichermechanismen hinzufügen.",
            "version": "<b>Aktuelle Einwilligungsversion:</b> 1.0",
            "versionHistory": "Versionshistorie",
            "v1": "<b>v1.0</b> (Juli 2025) — Erstveröffentlichung der Cookie-Richtlinie."
        },
        "contact": {
            "heading": "Kontakt",
            "intro": "Bei Fragen zu dieser Cookie-Richtlinie:",
            "email": "<b>E-Mail:</b> <emailLink>support@lumenlingo.com</emailLink>",
            "company": "<b>Unternehmen:</b> LumenShore Ltd (Company No. 09607326)",
            "responseTime": "Wir antworten in der Regel innerhalb von 48 Stunden."
        },
        "table": {
            "key": "Speicherschlüssel",
            "type": "Typ",
            "category": "Kategorie",
            "purpose": "Zweck",
            "duration": "Dauer"
        }
    },
    "ja": {
        "meta": {
            "title": "Cookieポリシー — LumenLingo",
            "description": "LumenLingoがCookie、localStorage、類似技術をどのように使用しているかをご覧ください。",
            "ogTitle": "Cookieポリシー — LumenLingo",
            "ogDescription": "LumenLingoが使用するCookieとローカルストレージに関する完全な透明性。いつでも設定を管理できます。"
        },
        "breadcrumb": "Cookieポリシー",
        "hero": { "heading": "Cookieポリシー", "subtitle": "完全な透明性を信じています。当サイトがお使いのデバイスに保存するデータとその理由をご説明します。" },
        "overview": { "heading": "概要", "p1": "LumenLingoはサイトの円滑な動作のために最小限のクライアント側ストレージを使用しています。従来のトラッキングCookieは使用していません。", "p2": "フッターのCookie設定ボタンからいつでも設定を管理できます。" },
        "localStorage": { "heading": "ローカルストレージ", "intro": "localStorageはデバイス上にデータを永続的に保存します。以下のキーを使用しています：", "consentKey": { "heading": "ll_cookie_consent", "category": "必須", "purpose": "Cookie同意設定を保存します。", "duration": "最後の同意決定から13ヶ月。", "data": "ブール値フラグ、ISOタイムスタンプ、同意バージョンを含むJSONオブジェクト。個人データなし。" }, "localeKey": { "heading": "NEXT_LOCALE", "category": "必須", "purpose": "表示言語の設定を記憶します。", "duration": "削除されるまで永続。", "data": "2文字のロケールコード。個人データなし。" } },
        "sessionStorage": { "heading": "セッションストレージ", "intro": "sessionStorageは現在のブラウザタブでのみ保持されます。タブを閉じると自動的に削除されます。", "utmKey": { "heading": "ll_utm", "category": "アナリティクス", "purpose": "セッション内のページナビゲーション間でUTMキャンペーンパラメータを保持します。", "duration": "現在のブラウザセッションのみ。", "data": "最大5つのキャンペーンパラメータを含むJSONオブジェクト。個人データなし。" }, "sentryKey": { "heading": "Sentry Session Replay", "category": "セッションリプレイ（同意が必要）", "purpose": "セッションリプレイに同意した場合、Sentryが内部セッション状態をsessionStorageに保存します。", "duration": "現在のブラウザセッションのみ。", "data": "内部Sentryセッション識別子。すべてのインタラクションは匿名化されます。" } },
        "serviceWorker": { "heading": "Service Workerキャッシュ", "intro": "パフォーマンス向上とオフラインアクセスのためにService Workerを使用しています。", "cacheName": "キャッシュ名：lumenlingo-v1", "strategies": { "heading": "キャッシュ戦略", "static": "<b>静的アセット</b>（JS、CSS、フォント、画像）— キャッシュ優先。", "pages": "<b>HTMLページ</b> — ネットワーク優先。常にサーバーから最新版を取得。", "offline": "<b>オフラインフォールバック</b> — 専用のオフラインページを表示。" }, "p1": "Service Workerキャッシュは完全にデバイスローカルです。", "p2": "キャッシュには個人データは保存されません。" },
        "cookies": { "heading": "Cookie", "intro": "LumenLingo自体のコードはHTTP Cookieを設定しません。ただし、インフラストラクチャにより以下のCookieが設定される場合があります：", "locale": { "heading": "言語設定", "category": "必須", "purpose": "next-intl国際化ライブラリが言語設定Cookieを設定する場合があります。", "duration": "削除されるまで永続。", "data": "2文字のロケールコード。ファーストパーティ。" }, "p1": "広告Cookie、ソーシャルメディアトラッキングピクセル、サードパーティCookieは使用していません。" },
        "thirdParty": { "heading": "サードパーティサービス", "intro": "以下のサードパーティサービスがアクセスデータを処理する場合があります：", "vercel": { "heading": "Vercel Analytics", "description": "プライバシー重視のウェブ分析。<b>Cookieフリー</b>。カスタムtrack()イベントは同意時のみ送信。", "link": "Vercelプライバシーポリシー" }, "sentry": { "heading": "Sentry", "description": "エラー監視とセッションリプレイ。<b>エラー報告</b>は同意時に送信。<b>セッションリプレイ</b>は明示的な同意時のみ記録。", "link": "Sentryプライバシーポリシー" } },
        "manage": { "heading": "設定の管理", "p1": "フッターの「Cookie設定」ボタンからいつでも同意設定を変更できます。", "p2": "すべての保存データを削除するには、ブラウザの設定からサイトデータをクリアしてください。", "p3": "同意設定はデバイスにローカルに保存されます。サーバーには送信されません。" },
        "updates": { "heading": "ポリシーの更新", "p1": "新しいストレージメカニズムを追加した場合、このCookieポリシーを更新することがあります。", "version": "<b>現在の同意バージョン：</b> 1.0", "versionHistory": "バージョン履歴", "v1": "<b>v1.0</b>（2025年7月）— Cookieポリシー初版公開。" },
        "contact": { "heading": "お問い合わせ", "intro": "このCookieポリシーについてご質問がある場合：", "email": "<b>メール：</b> <emailLink>support@lumenlingo.com</emailLink>", "company": "<b>会社：</b> LumenShore Ltd（Company No. 09607326）", "responseTime": "通常48時間以内に回答いたします。" },
        "table": { "key": "ストレージキー", "type": "タイプ", "category": "カテゴリ", "purpose": "目的", "duration": "期間" }
    },
    "zh": {
        "meta": {
            "title": "Cookie政策 — LumenLingo",
            "description": "了解LumenLingo如何使用Cookie、localStorage和类似技术。",
            "ogTitle": "Cookie政策 — LumenLingo",
            "ogDescription": "LumenLingo使用的Cookie和本地存储的完全透明度。随时管理您的偏好设置。"
        },
        "breadcrumb": "Cookie政策",
        "hero": { "heading": "Cookie政策", "subtitle": "我们相信完全透明。以下是我们网站在您设备上存储的数据及其原因。" },
        "overview": { "heading": "概述", "p1": "LumenLingo使用最少的客户端存储来保持网站正常运行。我们不使用传统的跟踪Cookie。", "p2": "您可以随时通过页脚的Cookie设置按钮管理您的偏好设置。" },
        "localStorage": { "heading": "本地存储", "intro": "localStorage将数据持久存储在您的设备上，直到明确清除。我们使用以下键：", "consentKey": { "heading": "ll_cookie_consent", "category": "必要", "purpose": "存储您的Cookie同意偏好。", "duration": "自您最后一次同意决定起13个月。", "data": "包含布尔标志、ISO时间戳和同意版本的JSON对象。无个人数据。" }, "localeKey": { "heading": "NEXT_LOCALE", "category": "必要", "purpose": "记住您的首选显示语言。", "duration": "持久直到清除。", "data": "两个字母的区域代码。无个人数据。" } },
        "sessionStorage": { "heading": "会话存储", "intro": "sessionStorage仅在当前浏览器标签页中持续存在。关闭标签页时数据自动删除。", "utmKey": { "heading": "ll_utm", "category": "分析", "purpose": "在单个会话的页面导航之间保留UTM活动参数。", "duration": "仅当前浏览器会话。", "data": "包含最多五个活动参数字段的JSON对象。无个人数据。" }, "sentryKey": { "heading": "Sentry会话回放", "category": "会话回放（需要同意）", "purpose": "如果您同意会话回放，Sentry会在sessionStorage中存储内部会话状态。", "duration": "仅当前浏览器会话。", "data": "内部Sentry会话标识符。所有交互均匿名化。" } },
        "serviceWorker": { "heading": "Service Worker缓存", "intro": "我们使用Service Worker来提高性能并启用离线访问。", "cacheName": "缓存名称：lumenlingo-v1", "strategies": { "heading": "缓存策略", "static": "<b>静态资源</b>（JS、CSS、字体、图片）— 缓存优先。", "pages": "<b>HTML页面</b> — 网络优先。始终从服务器获取最新版本。", "offline": "<b>离线回退</b> — 显示专用的离线页面。" }, "p1": "Service Worker缓存完全存储在设备本地。", "p2": "缓存不存储任何个人数据。" },
        "cookies": { "heading": "Cookie", "intro": "LumenLingo自身的代码不设置任何HTTP Cookie。但以下Cookie可能由我们的基础设施设置：", "locale": { "heading": "语言偏好", "category": "必要", "purpose": "next-intl国际化库可能设置语言偏好Cookie。", "duration": "持久直到清除。", "data": "两个字母的区域代码。第一方，不与第三方共享。" }, "p1": "我们不使用广告Cookie、社交媒体跟踪像素或任何第三方Cookie。" },
        "thirdParty": { "heading": "第三方服务", "intro": "以下第三方服务可能处理您访问的数据：", "vercel": { "heading": "Vercel Analytics", "description": "注重隐私的网站分析。<b>无Cookie</b>。自定义track()事件仅在同意时发送。", "link": "Vercel隐私政策" }, "sentry": { "heading": "Sentry", "description": "错误监控和会话回放。<b>错误报告</b>在同意时发送。<b>会话回放</b>仅在明确同意时记录。", "link": "Sentry隐私政策" } },
        "manage": { "heading": "管理您的偏好设置", "p1": "您可以随时通过页脚的\"Cookie设置\"按钮更改同意选择。", "p2": "要删除所有存储的数据，请通过浏览器设置清除网站数据。", "p3": "您的同意偏好存储在设备本地——永远不会传输到我们的服务器。" },
        "updates": { "heading": "政策更新", "p1": "当我们添加新的存储机制时，可能会更新此Cookie政策。", "version": "<b>当前同意版本：</b> 1.0", "versionHistory": "版本历史", "v1": "<b>v1.0</b>（2025年7月）— 初始Cookie政策发布。" },
        "contact": { "heading": "联系我们", "intro": "如果您对此Cookie政策有疑问：", "email": "<b>邮箱：</b> <emailLink>support@lumenlingo.com</emailLink>", "company": "<b>公司：</b> LumenShore Ltd（Company No. 09607326）", "responseTime": "我们通常在48小时内回复。" },
        "table": { "key": "存储键", "type": "类型", "category": "类别", "purpose": "目的", "duration": "期限" }
    },
    "ar": {
        "meta": {
            "title": "سياسة ملفات تعريف الارتباط — LumenLingo",
            "description": "تعرف على كيفية استخدام LumenLingo لملفات تعريف الارتباط والتخزين المحلي والتقنيات المماثلة.",
            "ogTitle": "سياسة ملفات تعريف الارتباط — LumenLingo",
            "ogDescription": "شفافية كاملة حول ملفات تعريف الارتباط والتخزين المحلي المستخدم في LumenLingo."
        },
        "breadcrumb": "سياسة ملفات تعريف الارتباط",
        "hero": { "heading": "سياسة ملفات تعريف الارتباط", "subtitle": "نؤمن بالشفافية الكاملة. إليك بالضبط ما يخزنه موقعنا على جهازك ولماذا." },
        "overview": { "heading": "نظرة عامة", "p1": "يستخدم LumenLingo حدًا أدنى من التخزين على جانب العميل. لا نستخدم ملفات تعريف الارتباط التقليدية للتتبع.", "p2": "يمكنك إدارة تفضيلاتك في أي وقت عبر زر إعدادات ملفات تعريف الارتباط في أسفل الصفحة." },
        "localStorage": { "heading": "التخزين المحلي", "intro": "يحتفظ localStorage بالبيانات على جهازك حتى يتم مسحها صراحة. نستخدم المفاتيح التالية:", "consentKey": { "heading": "ll_cookie_consent", "category": "أساسي", "purpose": "يخزن تفضيلات موافقتك على ملفات تعريف الارتباط.", "duration": "13 شهرًا من تاريخ آخر قرار موافقة.", "data": "كائن JSON يحتوي على علامات بوليانية وطابع زمني وإصدار الموافقة. بدون بيانات شخصية." }, "localeKey": { "heading": "NEXT_LOCALE", "category": "أساسي", "purpose": "يتذكر لغة العرض المفضلة لديك.", "duration": "دائم حتى المسح.", "data": "رمز لغة من حرفين. بدون بيانات شخصية." } },
        "sessionStorage": { "heading": "تخزين الجلسة", "intro": "يستمر sessionStorage فقط لعلامة التبويب الحالية. عند إغلاق علامة التبويب، يتم حذف هذه البيانات تلقائيًا.", "utmKey": { "heading": "ll_utm", "category": "التحليلات", "purpose": "يحافظ على معلمات حملة UTM بين تنقلات الصفحة ضمن جلسة واحدة.", "duration": "جلسة المتصفح الحالية فقط.", "data": "كائن JSON بحد أقصى خمسة حقول لمعلمات الحملة. بدون بيانات شخصية." }, "sentryKey": { "heading": "إعادة تشغيل جلسة Sentry", "category": "إعادة تشغيل الجلسة (يتطلب موافقة)", "purpose": "إذا وافقت على إعادة تشغيل الجلسة، يخزن Sentry حالة الجلسة الداخلية.", "duration": "جلسة المتصفح الحالية فقط.", "data": "معرفات جلسة Sentry الداخلية. جميع التفاعلات مجهولة الهوية." } },
        "serviceWorker": { "heading": "ذاكرة التخزين المؤقت لـ Service Worker", "intro": "نستخدم Service Worker لتحسين الأداء وتمكين الوصول دون اتصال.", "cacheName": "اسم ذاكرة التخزين المؤقت: lumenlingo-v1", "strategies": { "heading": "استراتيجيات التخزين المؤقت", "static": "<b>الموارد الثابتة</b> (JS، CSS، الخطوط، الصور) — التخزين المؤقت أولاً.", "pages": "<b>صفحات HTML</b> — الشبكة أولاً. يتم دائمًا جلب أحدث إصدار.", "offline": "<b>بديل غير متصل</b> — يتم عرض صفحة مخصصة غير متصلة." }, "p1": "ذاكرة التخزين المؤقت محلية بالكامل على الجهاز.", "p2": "لا تخزن ذاكرة التخزين المؤقت أي بيانات شخصية." },
        "cookies": { "heading": "ملفات تعريف الارتباط", "intro": "لا يُعيّن كود LumenLingo أي ملفات تعريف ارتباط HTTP. لكن قد يتم تعيين ملفات تعريف الارتباط التالية بواسطة بنيتنا التحتية:", "locale": { "heading": "تفضيل اللغة", "category": "أساسي", "purpose": "قد تُعيّن مكتبة next-intl ملف تعريف ارتباط لتفضيل اللغة.", "duration": "دائم حتى المسح.", "data": "رمز لغة من حرفين. طرف أول، لا يُشارك." }, "p1": "لا نستخدم ملفات تعريف ارتباط إعلانية أو بكسلات تتبع أو أي ملفات تعريف ارتباط من طرف ثالث." },
        "thirdParty": { "heading": "خدمات الطرف الثالث", "intro": "قد تعالج خدمات الطرف الثالث التالية بيانات من زيارتك:", "vercel": { "heading": "Vercel Analytics", "description": "تحليلات ويب تركز على الخصوصية. <b>بدون ملفات تعريف ارتباط</b>. أحداث track() المخصصة تُرسل فقط بموافقتك.", "link": "سياسة خصوصية Vercel" }, "sentry": { "heading": "Sentry", "description": "مراقبة الأخطاء وإعادة تشغيل الجلسة. <b>تقارير الأخطاء</b> تُرسل بالموافقة. <b>إعادة تشغيل الجلسات</b> تُسجل فقط بموافقة صريحة.", "link": "سياسة خصوصية Sentry" } },
        "manage": { "heading": "إدارة تفضيلاتك", "p1": "يمكنك تغيير خيارات موافقتك في أي وقت عبر زر \"إعدادات ملفات تعريف الارتباط\" في أسفل الصفحة.", "p2": "لإزالة جميع البيانات المخزنة، امسح بيانات الموقع من إعدادات متصفحك.", "p3": "تُخزن تفضيلات موافقتك محليًا على جهازك — لا تُنقل أبدًا إلى خوادمنا." },
        "updates": { "heading": "تحديثات السياسة", "p1": "قد نحدث سياسة ملفات تعريف الارتباط هذه عند إضافة آليات تخزين جديدة.", "version": "<b>إصدار الموافقة الحالي:</b> 1.0", "versionHistory": "سجل الإصدارات", "v1": "<b>v1.0</b> (يوليو 2025) — نُشرت سياسة ملفات تعريف الارتباط الأولية." },
        "contact": { "heading": "اتصل بنا", "intro": "إذا كانت لديك أسئلة حول سياسة ملفات تعريف الارتباط هذه:", "email": "<b>البريد الإلكتروني:</b> <emailLink>support@lumenlingo.com</emailLink>", "company": "<b>الشركة:</b> LumenShore Ltd (Company No. 09607326)", "responseTime": "نستجيب عادةً خلال 48 ساعة." },
        "table": { "key": "مفتاح التخزين", "type": "النوع", "category": "الفئة", "purpose": "الغرض", "duration": "المدة" }
    },
    "pl": {
        "meta": {
            "title": "Polityka Plików Cookie — LumenLingo",
            "description": "Dowiedz się, jak LumenLingo używa plików cookie, localStorage i podobnych technologii.",
            "ogTitle": "Polityka Plików Cookie — LumenLingo",
            "ogDescription": "Pełna przejrzystość dotycząca plików cookie i lokalnego przechowywania w LumenLingo."
        },
        "breadcrumb": "Polityka Plików Cookie",
        "hero": { "heading": "Polityka Plików Cookie", "subtitle": "Wierzymy w pełną przejrzystość. Oto dokładnie, co nasza strona przechowuje na Twoim urządzeniu i dlaczego." },
        "overview": { "heading": "Przegląd", "p1": "LumenLingo używa minimalnego przechowywania po stronie klienta. Nie używamy tradycyjnych ciasteczek śledzących.", "p2": "Możesz zarządzać swoimi preferencjami w dowolnym momencie za pomocą przycisku Ustawienia plików cookie w stopce." },
        "localStorage": { "heading": "Pamięć Lokalna", "intro": "localStorage przechowuje dane na Twoim urządzeniu do momentu ich jawnego usunięcia. Używamy następujących kluczy:", "consentKey": { "heading": "ll_cookie_consent", "category": "Niezbędne", "purpose": "Przechowuje Twoje preferencje zgody na pliki cookie.", "duration": "13 miesięcy od ostatniej decyzji o zgodzie.", "data": "Obiekt JSON z flagami boolean, znacznikiem czasu ISO i wersją zgody. Brak danych osobowych." }, "localeKey": { "heading": "NEXT_LOCALE", "category": "Niezbędne", "purpose": "Zapamiętuje preferowany język wyświetlania.", "duration": "Trwałe do usunięcia.", "data": "Dwuliterowy kod locale. Brak danych osobowych." } },
        "sessionStorage": { "heading": "Pamięć Sesji", "intro": "sessionStorage utrzymuje się tylko dla bieżącej karty przeglądarki. Po zamknięciu karty dane są automatycznie usuwane.", "utmKey": { "heading": "ll_utm", "category": "Analityka", "purpose": "Zachowuje parametry kampanii UTM między nawigacjami stron w ramach sesji.", "duration": "Tylko bieżąca sesja przeglądarki.", "data": "Obiekt JSON z maksymalnie pięcioma polami parametrów kampanii. Brak danych osobowych." }, "sentryKey": { "heading": "Sentry Session Replay", "category": "Nagrywanie sesji (wymagana zgoda)", "purpose": "Jeśli wyrazisz zgodę na nagrywanie sesji, Sentry przechowuje wewnętrzny stan sesji.", "duration": "Tylko bieżąca sesja przeglądarki.", "data": "Wewnętrzne identyfikatory sesji Sentry. Wszystkie interakcje są zanonimizowane." } },
        "serviceWorker": { "heading": "Pamięć Podręczna Service Worker", "intro": "Używamy Service Workera do poprawy wydajności i umożliwienia dostępu offline.", "cacheName": "Nazwa pamięci podręcznej: lumenlingo-v1", "strategies": { "heading": "Strategie Pamięci Podręcznej", "static": "<b>Zasoby statyczne</b> (JS, CSS, czcionki, obrazy) — pamięć podręczna najpierw.", "pages": "<b>Strony HTML</b> — sieć najpierw. Zawsze pobierana najnowsza wersja.", "offline": "<b>Tryb offline</b> — wyświetlana dedykowana strona offline." }, "p1": "Pamięć podręczna Service Workera jest w pełni lokalna na urządzeniu.", "p2": "Pamięć podręczna nie przechowuje danych osobowych." },
        "cookies": { "heading": "Pliki Cookie", "intro": "Własny kod LumenLingo nie ustawia żadnych plików cookie HTTP. Jednakże następujące pliki cookie mogą być ustawiane przez naszą infrastrukturę:", "locale": { "heading": "Preferencja języka", "category": "Niezbędne", "purpose": "Biblioteka next-intl może ustawić plik cookie preferencji języka.", "duration": "Trwałe do usunięcia.", "data": "Dwuliterowy kod locale. Pierwsza strona, nie udostępniane." }, "p1": "Nie używamy plików cookie reklamowych, pikseli śledzących mediów społecznościowych ani plików cookie stron trzecich." },
        "thirdParty": { "heading": "Usługi Stron Trzecich", "intro": "Następujące usługi stron trzecich mogą przetwarzać dane z Twojej wizyty:", "vercel": { "heading": "Vercel Analytics", "description": "Analityka internetowa skupiona na prywatności. <b>Bez plików cookie</b>. Niestandardowe zdarzenia track() są wysyłane tylko za zgodą.", "link": "Polityka Prywatności Vercel" }, "sentry": { "heading": "Sentry", "description": "Monitorowanie błędów i nagrywanie sesji. <b>Raporty błędów</b> wysyłane za zgodą. <b>Nagrania sesji</b> rejestrowane tylko za wyraźną zgodą.", "link": "Polityka Prywatności Sentry" } },
        "manage": { "heading": "Zarządzanie Preferencjami", "p1": "Możesz zmienić swoje wybory zgody w dowolnym momencie klikając przycisk \"Ustawienia plików cookie\" w stopce.", "p2": "Aby usunąć wszystkie przechowywane dane, wyczyść dane witryny w ustawieniach przeglądarki.", "p3": "Twoje preferencje zgody są przechowywane lokalnie na urządzeniu — nigdy nie są przesyłane na nasze serwery." },
        "updates": { "heading": "Aktualizacje Polityki", "p1": "Możemy zaktualizować tę Politykę Plików Cookie gdy dodamy nowe mechanizmy przechowywania.", "version": "<b>Aktualna wersja zgody:</b> 1.0", "versionHistory": "Historia wersji", "v1": "<b>v1.0</b> (lipiec 2025) — Opublikowano początkową Politykę Plików Cookie." },
        "contact": { "heading": "Kontakt", "intro": "Jeśli masz pytania dotyczące tej Polityki Plików Cookie:", "email": "<b>Email:</b> <emailLink>support@lumenlingo.com</emailLink>", "company": "<b>Firma:</b> LumenShore Ltd (Company No. 09607326)", "responseTime": "Zwykle odpowiadamy w ciągu 48 godzin." },
        "table": { "key": "Klucz Przechowywania", "type": "Typ", "category": "Kategoria", "purpose": "Cel", "duration": "Czas trwania" }
    },
    "uk": {
        "meta": {
            "title": "Політика Cookie — LumenLingo",
            "description": "Дізнайтеся, як LumenLingo використовує Cookie, localStorage та подібні технології.",
            "ogTitle": "Політика Cookie — LumenLingo",
            "ogDescription": "Повна прозорість щодо Cookie та локального сховища LumenLingo."
        },
        "breadcrumb": "Політика Cookie",
        "hero": { "heading": "Політика Cookie", "subtitle": "Ми віримо в повну прозорість. Ось що саме наш сайт зберігає на вашому пристрої та чому." },
        "overview": { "heading": "Огляд", "p1": "LumenLingo використовує мінімальне клієнтське сховище для коректної роботи сайту. Ми не використовуємо традиційні файли Cookie для відстеження.", "p2": "Ви можете керувати своїми налаштуваннями в будь-який час через кнопку налаштувань Cookie у нижньому колонтитулі." },
        "localStorage": { "heading": "Локальне Сховище", "intro": "localStorage зберігає дані на вашому пристрої до явного видалення. Ми використовуємо наступні ключі:", "consentKey": { "heading": "ll_cookie_consent", "category": "Основний", "purpose": "Зберігає ваші налаштування згоди на Cookie.", "duration": "13 місяців від дати останнього рішення про згоду.", "data": "JSON-об'єкт з булевими прапорцями, міткою часу ISO та версією згоди. Без персональних даних." }, "localeKey": { "heading": "NEXT_LOCALE", "category": "Основний", "purpose": "Запам'ятовує вашу бажану мову відображення.", "duration": "Постійно до видалення.", "data": "Двобуквенний код локалі. Без персональних даних." } },
        "sessionStorage": { "heading": "Сховище Сесії", "intro": "sessionStorage зберігається лише для поточної вкладки браузера. При закритті вкладки дані автоматично видаляються.", "utmKey": { "heading": "ll_utm", "category": "Аналітика", "purpose": "Зберігає параметри UTM кампанії між переходами сторінок в рамках сесії.", "duration": "Лише поточна сесія браузера.", "data": "JSON-об'єкт з до п'яти полями параметрів кампанії. Без персональних даних." }, "sentryKey": { "heading": "Sentry Session Replay", "category": "Відтворення сесії (потрібна згода)", "purpose": "Якщо ви даєте згоду на відтворення сесії, Sentry зберігає внутрішній стан сесії.", "duration": "Лише поточна сесія браузера.", "data": "Внутрішні ідентифікатори сесії Sentry. Усі взаємодії анонімізовані." } },
        "serviceWorker": { "heading": "Кеш Service Worker", "intro": "Ми використовуємо Service Worker для покращення продуктивності та офлайн-доступу.", "cacheName": "Ім'я кешу: lumenlingo-v1", "strategies": { "heading": "Стратегії Кешування", "static": "<b>Статичні ресурси</b> (JS, CSS, шрифти, зображення) — кеш передусім.", "pages": "<b>HTML-сторінки</b> — мережа передусім. Завжди завантажується найновіша версія.", "offline": "<b>Офлайн-резерв</b> — відображається спеціальна офлайн-сторінка." }, "p1": "Кеш Service Worker повністю локальний на пристрої.", "p2": "Кеш не зберігає персональних даних." },
        "cookies": { "heading": "Cookie", "intro": "Власний код LumenLingo не встановлює жодних HTTP Cookie. Однак наступні Cookie можуть бути встановлені нашою інфраструктурою:", "locale": { "heading": "Мовна перевага", "category": "Основний", "purpose": "Бібліотека next-intl може встановити Cookie мовної переваги.", "duration": "Постійно до видалення.", "data": "Двобуквенний код локалі. Першої сторони, не передається." }, "p1": "Ми не використовуємо рекламні Cookie, піксели відстеження соціальних мереж або Cookie третіх сторін." },
        "thirdParty": { "heading": "Сервіси Третіх Сторін", "intro": "Наступні сервіси третіх сторін можуть обробляти дані вашого відвідування:", "vercel": { "heading": "Vercel Analytics", "description": "Веб-аналітика з фокусом на конфіденційність. <b>Без Cookie</b>. Користувацькі події track() надсилаються лише за згодою.", "link": "Політика конфіденційності Vercel" }, "sentry": { "heading": "Sentry", "description": "Моніторинг помилок та відтворення сесій. <b>Звіти про помилки</b> надсилаються за згодою. <b>Відтворення сесій</b> записуються лише за явною згодою.", "link": "Політика конфіденційності Sentry" } },
        "manage": { "heading": "Керування Налаштуваннями", "p1": "Ви можете змінити свої рішення про згоду в будь-який час, натиснувши кнопку \"Налаштування Cookie\" у нижньому колонтитулі.", "p2": "Для видалення всіх збережених даних очистіть дані сайту через налаштування браузера.", "p3": "Ваші налаштування згоди зберігаються локально на пристрої — вони ніколи не передаються на наші сервери." },
        "updates": { "heading": "Оновлення Політики", "p1": "Ми можемо оновити цю Політику Cookie при додаванні нових механізмів зберігання.", "version": "<b>Поточна версія згоди:</b> 1.0", "versionHistory": "Історія версій", "v1": "<b>v1.0</b> (липень 2025) — Опубліковано початкову Політику Cookie." },
        "contact": { "heading": "Зв'язатися з Нами", "intro": "Якщо у вас є питання щодо цієї Політики Cookie:", "email": "<b>Електронна пошта:</b> <emailLink>support@lumenlingo.com</emailLink>", "company": "<b>Компанія:</b> LumenShore Ltd (Company No. 09607326)", "responseTime": "Зазвичай відповідаємо протягом 48 годин." },
        "table": { "key": "Ключ Сховища", "type": "Тип", "category": "Категорія", "purpose": "Призначення", "duration": "Тривалість" }
    },
    "pt": {
        "meta": {
            "title": "Política de Cookies — LumenLingo",
            "description": "Saiba como o LumenLingo utiliza cookies, localStorage e tecnologias semelhantes.",
            "ogTitle": "Política de Cookies — LumenLingo",
            "ogDescription": "Transparência total sobre cookies e armazenamento local utilizados pelo LumenLingo."
        },
        "breadcrumb": "Política de Cookies",
        "hero": { "heading": "Política de Cookies", "subtitle": "Acreditamos em transparência total. Aqui está exatamente o que o nosso site armazena no seu dispositivo e porquê." },
        "overview": { "heading": "Visão Geral", "p1": "O LumenLingo utiliza armazenamento mínimo do lado do cliente para manter o site a funcionar corretamente. Não utilizamos cookies de rastreamento tradicionais.", "p2": "Pode gerir as suas preferências a qualquer momento através do botão Definições de Cookies no rodapé." },
        "localStorage": { "heading": "Armazenamento Local", "intro": "O localStorage persiste dados no seu dispositivo até serem explicitamente apagados. Utilizamos as seguintes chaves:", "consentKey": { "heading": "ll_cookie_consent", "category": "Essencial", "purpose": "Armazena as suas preferências de consentimento de cookies.", "duration": "13 meses a partir da data da sua última decisão de consentimento.", "data": "Objeto JSON com flags booleanas, timestamp ISO e versão do consentimento. Sem dados pessoais." }, "localeKey": { "heading": "NEXT_LOCALE", "category": "Essencial", "purpose": "Memoriza o seu idioma de exibição preferido.", "duration": "Persistente até ser apagado.", "data": "Código de locale de duas letras. Sem dados pessoais." } },
        "sessionStorage": { "heading": "Armazenamento de Sessão", "intro": "O sessionStorage persiste apenas para o separador atual do navegador. Ao fechar o separador, os dados são automaticamente eliminados.", "utmKey": { "heading": "ll_utm", "category": "Analítica", "purpose": "Preserva parâmetros de campanha UTM entre navegações de página numa sessão.", "duration": "Apenas a sessão atual do navegador.", "data": "Objeto JSON com até cinco campos de parâmetros de campanha. Sem dados pessoais." }, "sentryKey": { "heading": "Sentry Session Replay", "category": "Replay de sessão (requer consentimento)", "purpose": "Se consentir o Replay de Sessão, o Sentry armazena estado de sessão interno no sessionStorage.", "duration": "Apenas a sessão atual do navegador.", "data": "Identificadores de sessão internos do Sentry. Todas as interações são anonimizadas." } },
        "serviceWorker": { "heading": "Cache do Service Worker", "intro": "Utilizamos um Service Worker para melhorar o desempenho e permitir acesso offline.", "cacheName": "Nome do cache: lumenlingo-v1", "strategies": { "heading": "Estratégias de Cache", "static": "<b>Recursos estáticos</b> (JS, CSS, fontes, imagens) — cache primeiro.", "pages": "<b>Páginas HTML</b> — rede primeiro. A versão mais recente é sempre obtida do servidor.", "offline": "<b>Fallback offline</b> — é exibida uma página offline dedicada." }, "p1": "O cache do Service Worker é completamente local no dispositivo.", "p2": "O cache não armazena dados pessoais." },
        "cookies": { "heading": "Cookies", "intro": "O código próprio do LumenLingo não define cookies HTTP. No entanto, os seguintes cookies podem ser definidos pela nossa infraestrutura:", "locale": { "heading": "Preferência de idioma", "category": "Essencial", "purpose": "A biblioteca next-intl pode definir um cookie de preferência de idioma.", "duration": "Persistente até ser apagado.", "data": "Código de locale de duas letras. Primeira parte, não partilhado." }, "p1": "Não utilizamos cookies publicitários, pixels de rastreamento de redes sociais ou cookies de terceiros." },
        "thirdParty": { "heading": "Serviços de Terceiros", "intro": "Os seguintes serviços de terceiros podem processar dados da sua visita:", "vercel": { "heading": "Vercel Analytics", "description": "Analítica web focada na privacidade. <b>Sem cookies</b>. Eventos track() personalizados são enviados apenas com consentimento.", "link": "Política de Privacidade da Vercel" }, "sentry": { "heading": "Sentry", "description": "Monitorização de erros e replay de sessão. <b>Relatórios de erros</b> enviados com consentimento. <b>Replays de sessão</b> gravados apenas com consentimento explícito.", "link": "Política de Privacidade do Sentry" } },
        "manage": { "heading": "Gerir as Suas Preferências", "p1": "Pode alterar as suas escolhas de consentimento a qualquer momento clicando no botão \"Definições de Cookies\" no rodapé.", "p2": "Para remover todos os dados armazenados, limpe os dados do site através das definições do navegador.", "p3": "As suas preferências de consentimento são armazenadas localmente no seu dispositivo — nunca são transmitidas para os nossos servidores." },
        "updates": { "heading": "Atualizações da Política", "p1": "Podemos atualizar esta Política de Cookies quando adicionarmos novos mecanismos de armazenamento.", "version": "<b>Versão atual do consentimento:</b> 1.0", "versionHistory": "Histórico de Versões", "v1": "<b>v1.0</b> (julho 2025) — Publicação inicial da Política de Cookies." },
        "contact": { "heading": "Contacte-nos", "intro": "Se tiver questões sobre esta Política de Cookies:", "email": "<b>Email:</b> <emailLink>support@lumenlingo.com</emailLink>", "company": "<b>Empresa:</b> LumenShore Ltd (Company No. 09607326)", "responseTime": "Normalmente respondemos dentro de 48 horas." },
        "table": { "key": "Chave de Armazenamento", "type": "Tipo", "category": "Categoria", "purpose": "Finalidade", "duration": "Duração" }
    }
}


def patch_locale(locale, data):
    path = os.path.join(MESSAGES_DIR, f'{locale}.json')
    with open(path, 'r', encoding='utf-8') as f:
        content = json.load(f)
    content['CookiePage'] = data
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f'  ✅ {locale}.json patched')


if __name__ == '__main__':
    print('Patching locale files with CookiePage translations...')
    for locale, data in TRANSLATIONS.items():
        patch_locale(locale, data)
    print('Done!')

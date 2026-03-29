#!/usr/bin/env python3
"""Epic 14 — Cookie Policy: PECR & Accountability Hardening.

Stories:
  14.1  ICO complaint right and contact details
  14.2  Consent accountability note (GDPR Art. 7(1))
  14.3  Vercel Speed Insights separate disclosure
  14.4  Sentry storage keys enumeration + fix hedging language on locale cookie
"""
import json
import os
import copy

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)

# ── Story 14.1 — ICO Complaint Section ───────────────────────────────────────
ICO_COMPLAINT = {
    "en": {
        "heading": "Your Right to Complain",
        "p1": "If you believe our use of cookies or similar technologies infringes your rights, you have the right to lodge a complaint with the Information Commissioner\u2019s Office (ICO), the UK\u2019s independent supervisory authority for data protection.",
        "icoWebsite": "<b>Website:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>Helpline:</b> 0303 123 1113",
        "icoAddress": "<b>Address:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom",
        "p2": "We would appreciate the opportunity to resolve your concern before you contact the ICO. Please email us at <emailLink>legal@lumenlingo.com</emailLink> and we will respond within 48 hours."
    },
    "pl": {
        "heading": "Twoje prawo do z\u0142o\u017cenia skargi",
        "p1": "Je\u015bli uwa\u017casz, \u017ce nasze wykorzystanie plik\u00f3w cookie lub podobnych technologii narusza Twoje prawa, masz prawo z\u0142o\u017cy\u0107 skarg\u0119 do Information Commissioner\u2019s Office (ICO), niezale\u017cnego organu nadzorczego Wielkiej Brytanii ds. ochrony danych.",
        "icoWebsite": "<b>Strona internetowa:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>Infolinia:</b> 0303 123 1113",
        "icoAddress": "<b>Adres:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, Wielka Brytania",
        "p2": "B\u0119dziemy wdzi\u0119czni za mo\u017cliwo\u015b\u0107 rozwi\u0105zania Twojego problemu przed skontaktowaniem si\u0119 z ICO. Napisz do nas na adres <emailLink>legal@lumenlingo.com</emailLink>, a odpowiemy w ci\u0105gu 48 godzin."
    },
    "de": {
        "heading": "Ihr Beschwerderecht",
        "p1": "Wenn Sie der Ansicht sind, dass unsere Verwendung von Cookies oder \u00e4hnlichen Technologien Ihre Rechte verletzt, haben Sie das Recht, eine Beschwerde beim Information Commissioner\u2019s Office (ICO), der unabh\u00e4ngigen Datenschutzaufsichtsbeh\u00f6rde des Vereinigten K\u00f6nigreichs, einzureichen.",
        "icoWebsite": "<b>Website:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>Hotline:</b> 0303 123 1113",
        "icoAddress": "<b>Adresse:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, Vereinigtes K\u00f6nigreich",
        "p2": "Wir w\u00fcrden es begr\u00fc\u00dfen, wenn Sie uns Gelegenheit geben, Ihr Anliegen zu kl\u00e4ren, bevor Sie sich an das ICO wenden. Bitte schreiben Sie an <emailLink>legal@lumenlingo.com</emailLink> \u2014 wir antworten innerhalb von 48 Stunden."
    },
    "es": {
        "heading": "Su derecho a presentar una reclamaci\u00f3n",
        "p1": "Si considera que nuestro uso de cookies o tecnolog\u00edas similares vulnera sus derechos, tiene derecho a presentar una reclamaci\u00f3n ante la Information Commissioner\u2019s Office (ICO), la autoridad independiente de protecci\u00f3n de datos del Reino Unido.",
        "icoWebsite": "<b>Sitio web:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>L\u00ednea de ayuda:</b> 0303 123 1113",
        "icoAddress": "<b>Direcci\u00f3n:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, Reino Unido",
        "p2": "Agradecer\u00edamos la oportunidad de resolver su inquietud antes de que contacte con la ICO. Escr\u00edbanos a <emailLink>legal@lumenlingo.com</emailLink> y le responderemos en un plazo de 48 horas."
    },
    "fr": {
        "heading": "Votre droit de r\u00e9clamation",
        "p1": "Si vous estimez que notre utilisation de cookies ou de technologies similaires porte atteinte \u00e0 vos droits, vous avez le droit de d\u00e9poser une r\u00e9clamation aupr\u00e8s de l\u2019Information Commissioner\u2019s Office (ICO), l\u2019autorit\u00e9 ind\u00e9pendante de protection des donn\u00e9es du Royaume-Uni.",
        "icoWebsite": "<b>Site web :</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>T\u00e9l\u00e9phone :</b> 0303 123 1113",
        "icoAddress": "<b>Adresse :</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, Royaume-Uni",
        "p2": "Nous appr\u00e9cierions l\u2019opportunit\u00e9 de r\u00e9soudre votre probl\u00e8me avant que vous ne contactiez l\u2019ICO. Veuillez nous \u00e9crire \u00e0 <emailLink>legal@lumenlingo.com</emailLink> et nous r\u00e9pondrons sous 48 heures."
    },
    "ja": {
        "heading": "\u82e6\u60c5\u3092\u7533\u3057\u7acb\u3066\u308b\u6a29\u5229",
        "p1": "\u5f53\u793e\u306eCookie\u307e\u305f\u306f\u985e\u4f3c\u6280\u8853\u306e\u4f7f\u7528\u304c\u304a\u5ba2\u69d8\u306e\u6a29\u5229\u3092\u4fb5\u5bb3\u3057\u3066\u3044\u308b\u3068\u304a\u8003\u3048\u306e\u5834\u5408\u3001\u82f1\u56fd\u306e\u72ec\u7acb\u3057\u305f\u30c7\u30fc\u30bf\u4fdd\u8b77\u76e3\u7763\u5f53\u5c40\u3067\u3042\u308bInformation Commissioner\u2019s Office\uff08ICO\uff09\u306b\u82e6\u60c5\u3092\u7533\u3057\u7acb\u3066\u308b\u6a29\u5229\u304c\u3042\u308a\u307e\u3059\u3002",
        "icoWebsite": "<b>\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>\u30d8\u30eb\u30d7\u30e9\u30a4\u30f3:</b> 0303 123 1113",
        "icoAddress": "<b>\u4f4f\u6240:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom",
        "p2": "ICO\u306b\u3054\u9023\u7d61\u3044\u305f\u3060\u304f\u524d\u306b\u3001\u307e\u305a\u5f53\u793e\u306b\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044\u3002<emailLink>legal@lumenlingo.com</emailLink>\u307e\u3067\u3054\u9023\u7d61\u3044\u305f\u3060\u3051\u308c\u3070\u300148\u6642\u9593\u4ee5\u5185\u306b\u56de\u7b54\u3044\u305f\u3057\u307e\u3059\u3002"
    },
    "zh": {
        "heading": "\u60a8\u7684\u6295\u8bc9\u6743\u5229",
        "p1": "\u5982\u679c\u60a8\u8ba4\u4e3a\u6211\u4eec\u5bf9Cookie\u6216\u7c7b\u4f3c\u6280\u672f\u7684\u4f7f\u7528\u4fb5\u72af\u4e86\u60a8\u7684\u6743\u5229\uff0c\u60a8\u6709\u6743\u5411\u82f1\u56fd\u72ec\u7acb\u6570\u636e\u4fdd\u62a4\u76d1\u7763\u673a\u6784Information Commissioner\u2019s Office\uff08ICO\uff09\u63d0\u51fa\u6295\u8bc9\u3002",
        "icoWebsite": "<b>\u7f51\u7ad9:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>\u670d\u52a1\u70ed\u7ebf:</b> 0303 123 1113",
        "icoAddress": "<b>\u5730\u5740:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom",
        "p2": "\u5728\u60a8\u8054\u7cfbICO\u4e4b\u524d\uff0c\u6211\u4eec\u5e0c\u671b\u6709\u673a\u4f1a\u5148\u89e3\u51b3\u60a8\u7684\u95ee\u9898\u3002\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3<emailLink>legal@lumenlingo.com</emailLink>\uff0c\u6211\u4eec\u5c06\u572848\u5c0f\u65f6\u5185\u56de\u590d\u3002"
    },
    "ar": {
        "heading": "\u062d\u0642\u0643 \u0641\u064a \u062a\u0642\u062f\u064a\u0645 \u0634\u0643\u0648\u0649",
        "p1": "\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0639\u062a\u0642\u062f \u0623\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0646\u0627 \u0644\u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0623\u0648 \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0628\u0647\u0629 \u064a\u0646\u062a\u0647\u0643 \u062d\u0642\u0648\u0642\u0643\u060c \u0641\u0644\u062f\u064a\u0643 \u0627\u0644\u062d\u0642 \u0641\u064a \u062a\u0642\u062f\u064a\u0645 \u0634\u0643\u0648\u0649 \u0625\u0644\u0649 Information Commissioner\u2019s Office (ICO)\u060c \u0627\u0644\u0647\u064a\u0626\u0629 \u0627\u0644\u0631\u0642\u0627\u0628\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u0642\u0644\u0629 \u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629.",
        "icoWebsite": "<b>\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>\u062e\u0637 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629:</b> 0303 123 1113",
        "icoAddress": "<b>\u0627\u0644\u0639\u0646\u0648\u0627\u0646:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom",
        "p2": "\u0646\u0642\u062f\u0631 \u0625\u062a\u0627\u062d\u0629 \u0627\u0644\u0641\u0631\u0635\u0629 \u0644\u0646\u0627 \u0644\u062d\u0644 \u0645\u062e\u0627\u0648\u0641\u0643 \u0642\u0628\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 ICO. \u064a\u0631\u062c\u0649 \u0645\u0631\u0627\u0633\u0644\u062a\u0646\u0627 \u0639\u0628\u0631 <emailLink>legal@lumenlingo.com</emailLink> \u0648\u0633\u0646\u0631\u062f \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629."
    },
    "uk": {
        "heading": "\u0412\u0430\u0448\u0435 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0441\u043a\u0430\u0440\u0433\u0443",
        "p1": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u0435, \u0449\u043e \u043d\u0430\u0448\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432 cookie \u0430\u0431\u043e \u043f\u043e\u0434\u0456\u0431\u043d\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0439 \u043f\u043e\u0440\u0443\u0448\u0443\u0454 \u0432\u0430\u0448\u0456 \u043f\u0440\u0430\u0432\u0430, \u0432\u0438 \u043c\u0430\u0454\u0442\u0435 \u043f\u0440\u0430\u0432\u043e \u043f\u043e\u0434\u0430\u0442\u0438 \u0441\u043a\u0430\u0440\u0433\u0443 \u0434\u043e Information Commissioner\u2019s Office (ICO), \u043d\u0435\u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0433\u043e \u043d\u0430\u0433\u043b\u044f\u0434\u043e\u0432\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0443 \u0437 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0434\u0430\u043d\u0438\u0445 \u0443 \u0412\u0435\u043b\u0438\u043a\u0456\u0439 \u0411\u0440\u0438\u0442\u0430\u043d\u0456\u0457.",
        "icoWebsite": "<b>\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:</b> <icoLink>ico.org.uk</icoLink>",
        "icoPhone": "<b>\u0413\u0430\u0440\u044f\u0447\u0430 \u043b\u0456\u043d\u0456\u044f:</b> 0303 123 1113",
        "icoAddress": "<b>\u0410\u0434\u0440\u0435\u0441\u0430:</b> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom",
        "p2": "\u041c\u0438 \u0431\u0443\u0434\u0435\u043c\u043e \u0432\u0434\u044f\u0447\u043d\u0456 \u0437\u0430 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438 \u0432\u0430\u0448\u0435 \u043f\u0438\u0442\u0430\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0434 \u0437\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f\u043c \u0434\u043e ICO. \u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043d\u0430\u043c \u043d\u0430 <emailLink>legal@lumenlingo.com</emailLink>, \u0456 \u043c\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u043c\u043e \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 48 \u0433\u043e\u0434\u0438\u043d."
    },
}

# ── Story 14.2 — Consent Accountability ───────────────────────────────────────
CONSENT_ACCOUNTABILITY = {
    "en": {
        "heading": "How We Demonstrate Consent (GDPR Art. 7(1))",
        "p1": "Your consent preference is stored locally on your device in the <code>ll_cookie_consent</code> localStorage key. We do not transmit consent records to our servers \u2014 this is a deliberate data-minimisation choice.",
        "p2": "We maintain accountability through technical controls: analytics data (Vercel Analytics, Vercel Speed Insights) and error monitoring data (Sentry) are only transmitted when the corresponding local consent flag is active. The presence of analytics or error-monitoring records for your session therefore constitutes evidence that consent was given. If your consent flag is not set, no non-essential data leaves your device.",
        "p3": "This approach satisfies GDPR Article 7(1)\u2019s requirement that the controller be able to demonstrate consent, while minimising the personal data we collect."
    },
    "pl": {
        "heading": "Jak wykazujemy zgod\u0119 (RODO art. 7 ust. 1)",
        "p1": "Twoja preferencja zgody jest przechowywana lokalnie na Twoim urz\u0105dzeniu w kluczu localStorage <code>ll_cookie_consent</code>. Nie przesy\u0142amy rekord\u00f3w zgody na nasze serwery \u2014 jest to \u015bwiadomy wyb\u00f3r w ramach minimalizacji danych.",
        "p2": "Zapewniamy rozliczalno\u015b\u0107 poprzez kontrole techniczne: dane analityczne (Vercel Analytics, Vercel Speed Insights) i dane monitorowania b\u0142\u0119d\u00f3w (Sentry) s\u0105 przesy\u0142ane wy\u0142\u0105cznie wtedy, gdy odpowiednia lokalna flaga zgody jest aktywna. Obecno\u015b\u0107 rekord\u00f3w analitycznych lub monitoringu b\u0142\u0119d\u00f3w dla Twojej sesji stanowi zatem dow\u00f3d udzielenia zgody. Je\u015bli flaga zgody nie jest ustawiona, \u017cadne nieistotne dane nie opuszczaj\u0105 Twojego urz\u0105dzenia.",
        "p3": "To podej\u015bcie spe\u0142nia wymogi art. 7 ust. 1 RODO, zgodnie z kt\u00f3rym administrator musi by\u0107 w stanie wykaza\u0107 zgod\u0119, jednocze\u015bnie minimalizuj\u0105c zbierane przez nas dane osobowe."
    },
    "de": {
        "heading": "Wie wir die Einwilligung nachweisen (DSGVO Art. 7 Abs. 1)",
        "p1": "Ihre Einwilligungseinstellung wird lokal auf Ihrem Ger\u00e4t im localStorage-Schl\u00fcssel <code>ll_cookie_consent</code> gespeichert. Wir \u00fcbertragen keine Einwilligungsnachweise an unsere Server \u2014 dies ist eine bewusste Entscheidung zur Datenminimierung.",
        "p2": "Wir gew\u00e4hrleisten Rechenschaftspflicht durch technische Kontrollen: Analysedaten (Vercel Analytics, Vercel Speed Insights) und Fehler\u00fcberwachungsdaten (Sentry) werden nur \u00fcbertragen, wenn das entsprechende lokale Einwilligungs-Flag aktiv ist. Das Vorhandensein von Analyse- oder Fehler\u00fcberwachungsdatens\u00e4tzen f\u00fcr Ihre Sitzung stellt daher einen Nachweis der erteilten Einwilligung dar. Wenn Ihr Einwilligungs-Flag nicht gesetzt ist, verlassen keine nicht-essenziellen Daten Ihr Ger\u00e4t.",
        "p3": "Dieser Ansatz erf\u00fcllt die Anforderung von Art. 7 Abs. 1 DSGVO, dass der Verantwortliche die Einwilligung nachweisen k\u00f6nnen muss, und minimiert gleichzeitig die von uns erhobenen personenbezogenen Daten."
    },
    "es": {
        "heading": "C\u00f3mo demostramos el consentimiento (RGPD Art. 7.1)",
        "p1": "Su preferencia de consentimiento se almacena localmente en su dispositivo en la clave localStorage <code>ll_cookie_consent</code>. No transmitimos registros de consentimiento a nuestros servidores \u2014 esta es una decisi\u00f3n deliberada de minimizaci\u00f3n de datos.",
        "p2": "Mantenemos la responsabilidad proactiva mediante controles t\u00e9cnicos: los datos anal\u00edticos (Vercel Analytics, Vercel Speed Insights) y los datos de monitorizaci\u00f3n de errores (Sentry) solo se transmiten cuando el indicador de consentimiento local correspondiente est\u00e1 activo. La presencia de registros anal\u00edticos o de monitorizaci\u00f3n de errores para su sesi\u00f3n constituye, por tanto, prueba de que se otorg\u00f3 el consentimiento. Si su indicador de consentimiento no est\u00e1 establecido, ning\u00fan dato no esencial abandona su dispositivo.",
        "p3": "Este enfoque satisface el requisito del art\u00edculo 7.1 del RGPD de que el responsable del tratamiento pueda demostrar el consentimiento, al tiempo que minimiza los datos personales que recopilamos."
    },
    "fr": {
        "heading": "Comment nous d\u00e9montrons le consentement (RGPD Art. 7(1))",
        "p1": "Votre pr\u00e9f\u00e9rence de consentement est stock\u00e9e localement sur votre appareil dans la cl\u00e9 localStorage <code>ll_cookie_consent</code>. Nous ne transmettons pas de registres de consentement \u00e0 nos serveurs \u2014 il s\u2019agit d\u2019un choix d\u00e9lib\u00e9r\u00e9 de minimisation des donn\u00e9es.",
        "p2": "Nous assurons la responsabilit\u00e9 par des contr\u00f4les techniques : les donn\u00e9es analytiques (Vercel Analytics, Vercel Speed Insights) et les donn\u00e9es de surveillance des erreurs (Sentry) ne sont transmises que lorsque le drapeau de consentement local correspondant est actif. La pr\u00e9sence d\u2019enregistrements analytiques ou de surveillance des erreurs pour votre session constitue donc une preuve de consentement. Si votre drapeau de consentement n\u2019est pas d\u00e9fini, aucune donn\u00e9e non essentielle ne quitte votre appareil.",
        "p3": "Cette approche satisfait l\u2019exigence de l\u2019article 7(1) du RGPD selon laquelle le responsable du traitement doit \u00eatre en mesure de d\u00e9montrer le consentement, tout en minimisant les donn\u00e9es personnelles que nous collectons."
    },
    "ja": {
        "heading": "\u540c\u610f\u306e\u8a3c\u660e\u65b9\u6cd5\uff08GDPR\u7b2c7\u6761\u7b2c1\u9805\uff09",
        "p1": "\u304a\u5ba2\u69d8\u306e\u540c\u610f\u8a2d\u5b9a\u306f\u3001\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u306elocalStorage\u30ad\u30fc<code>ll_cookie_consent</code>\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u5f53\u793e\u306f\u540c\u610f\u8a18\u9332\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3057\u307e\u305b\u3093\u2014\u2014\u3053\u308c\u306f\u30c7\u30fc\u30bf\u6700\u5c0f\u5316\u306e\u305f\u3081\u306e\u610f\u56f3\u7684\u306a\u9078\u629e\u3067\u3059\u3002",
        "p2": "\u5f53\u793e\u306f\u6280\u8853\u7684\u5236\u5fa1\u3092\u901a\u3058\u3066\u8aac\u660e\u8cac\u4efb\u3092\u679c\u305f\u3057\u307e\u3059\uff1a\u5206\u6790\u30c7\u30fc\u30bf\uff08Vercel Analytics\u3001Vercel Speed Insights\uff09\u304a\u3088\u3073\u30a8\u30e9\u30fc\u76e3\u8996\u30c7\u30fc\u30bf\uff08Sentry\uff09\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u30ed\u30fc\u30ab\u30eb\u540c\u610f\u30d5\u30e9\u30b0\u304c\u6709\u52b9\u306a\u5834\u5408\u306b\u306e\u307f\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002\u304a\u5ba2\u69d8\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u5206\u6790\u307e\u305f\u306f\u30a8\u30e9\u30fc\u76e3\u8996\u306e\u8a18\u9332\u304c\u5b58\u5728\u3059\u308b\u3053\u3068\u81ea\u4f53\u304c\u3001\u540c\u610f\u304c\u4e0e\u3048\u3089\u308c\u305f\u8a3c\u62e0\u3068\u306a\u308a\u307e\u3059\u3002\u540c\u610f\u30d5\u30e9\u30b0\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u975e\u5fc5\u9808\u306e\u30c7\u30fc\u30bf\u306f\u30c7\u30d0\u30a4\u30b9\u304b\u3089\u9001\u4fe1\u3055\u308c\u307e\u305b\u3093\u3002",
        "p3": "\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3001\u7ba1\u7406\u8005\u304c\u540c\u610f\u3092\u8a3c\u660e\u3067\u304d\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3068\u3044\u3046GDPR\u7b2c7\u6761\u7b2c1\u9805\u306e\u8981\u4ef6\u3092\u6e80\u305f\u3057\u3064\u3064\u3001\u53ce\u96c6\u3059\u308b\u500b\u4eba\u30c7\u30fc\u30bf\u3092\u6700\u5c0f\u5316\u3057\u307e\u3059\u3002"
    },
    "zh": {
        "heading": "\u6211\u4eec\u5982\u4f55\u8bc1\u660e\u540c\u610f\uff08GDPR\u7b2c7\u6761\u7b2c1\u6b3e\uff09",
        "p1": "\u60a8\u7684\u540c\u610f\u504f\u597d\u8bbe\u7f6e\u4ee5localStorage\u952e<code>ll_cookie_consent</code>\u7684\u5f62\u5f0f\u672c\u5730\u5b58\u50a8\u5728\u60a8\u7684\u8bbe\u5907\u4e0a\u3002\u6211\u4eec\u4e0d\u4f1a\u5c06\u540c\u610f\u8bb0\u5f55\u4f20\u8f93\u5230\u6211\u4eec\u7684\u670d\u52a1\u5668\u2014\u2014\u8fd9\u662f\u51fa\u4e8e\u6570\u636e\u6700\u5c0f\u5316\u7684\u6709\u610f\u9009\u62e9\u3002",
        "p2": "\u6211\u4eec\u901a\u8fc7\u6280\u672f\u63a7\u5236\u4fdd\u6301\u95ee\u8d23\u5236\uff1a\u5206\u6790\u6570\u636e\uff08Vercel Analytics\u3001Vercel Speed Insights\uff09\u548c\u9519\u8bef\u76d1\u63a7\u6570\u636e\uff08Sentry\uff09\u4ec5\u5728\u76f8\u5e94\u7684\u672c\u5730\u540c\u610f\u6807\u5fd7\u6fc0\u6d3b\u65f6\u624d\u4f1a\u4f20\u8f93\u3002\u60a8\u7684\u4f1a\u8bdd\u4e2d\u5b58\u5728\u5206\u6790\u6216\u9519\u8bef\u76d1\u63a7\u8bb0\u5f55\u672c\u8eab\u5c31\u6784\u6210\u540c\u610f\u5df2\u88ab\u7ed9\u4e88\u7684\u8bc1\u636e\u3002\u5982\u679c\u60a8\u7684\u540c\u610f\u6807\u5fd7\u672a\u8bbe\u7f6e\uff0c\u5219\u4e0d\u4f1a\u6709\u4efb\u4f55\u975e\u5fc5\u8981\u6570\u636e\u79bb\u5f00\u60a8\u7684\u8bbe\u5907\u3002",
        "p3": "\u8fd9\u79cd\u65b9\u6cd5\u6ee1\u8db3\u4e86GDPR\u7b2c7\u6761\u7b2c1\u6b3e\u5173\u4e8e\u63a7\u5236\u8005\u5fc5\u987b\u80fd\u591f\u8bc1\u660e\u540c\u610f\u7684\u8981\u6c42\uff0c\u540c\u65f6\u6700\u5c0f\u5316\u4e86\u6211\u4eec\u6536\u96c6\u7684\u4e2a\u4eba\u6570\u636e\u3002"
    },
    "ar": {
        "heading": "\u0643\u064a\u0641 \u0646\u062b\u0628\u062a \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (GDPR \u0627\u0644\u0645\u0627\u062f\u0629 7(1))",
        "p1": "\u064a\u062a\u0645 \u062a\u062e\u0632\u064a\u0646 \u062a\u0641\u0636\u064a\u0644 \u0645\u0648\u0627\u0641\u0642\u062a\u0643 \u0645\u062d\u0644\u064a\u064b\u0627 \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643 \u0641\u064a \u0645\u0641\u062a\u0627\u062d localStorage \u0628\u0627\u0633\u0645 <code>ll_cookie_consent</code>. \u0644\u0627 \u0646\u0646\u0642\u0644 \u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0625\u0644\u0649 \u062e\u0648\u0627\u062f\u0645\u0646\u0627 \u2014 \u0647\u0630\u0627 \u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u062a\u0639\u0645\u062f \u0644\u062a\u0642\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.",
        "p2": "\u0646\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0621\u0644\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0636\u0648\u0627\u0628\u0637 \u062a\u0642\u0646\u064a\u0629: \u0644\u0627 \u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u0627\u062a (Vercel Analytics\u060c Vercel Speed Insights) \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 (Sentry) \u0625\u0644\u0627 \u0639\u0646\u062f\u0645\u0627 \u064a\u0643\u0648\u0646 \u0639\u0644\u0645 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0645\u0642\u0627\u0628\u0644 \u0646\u0634\u0637\u064b\u0627. \u0625\u0646 \u0648\u062c\u0648\u062f \u0633\u062c\u0644\u0627\u062a \u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0623\u0648 \u0645\u0631\u0627\u0642\u0628\u0629 \u0623\u062e\u0637\u0627\u0621 \u0644\u062c\u0644\u0633\u062a\u0643 \u064a\u0634\u0643\u0644 \u0628\u0627\u0644\u062a\u0627\u0644\u064a \u062f\u0644\u064a\u0644\u064b\u0627 \u0639\u0644\u0649 \u0645\u0646\u062d \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629. \u0625\u0630\u0627 \u0644\u0645 \u064a\u0643\u0646 \u0639\u0644\u0645 \u0645\u0648\u0627\u0641\u0642\u062a\u0643 \u0645\u0639\u064a\u0651\u0646\u064b\u0627\u060c \u0641\u0644\u0646 \u062a\u063a\u0627\u062f\u0631 \u0623\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0636\u0631\u0648\u0631\u064a\u0629 \u062c\u0647\u0627\u0632\u0643.",
        "p3": "\u064a\u0644\u0628\u064a \u0647\u0630\u0627 \u0627\u0644\u0646\u0647\u062c \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0645\u0627\u062f\u0629 7(1) \u0645\u0646 GDPR \u0627\u0644\u062a\u064a \u062a\u0642\u0636\u064a \u0628\u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u0645\u062a\u062d\u0643\u0645 \u0642\u0627\u062f\u0631\u064b\u0627 \u0639\u0644\u0649 \u0625\u062b\u0628\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629\u060c \u0645\u0639 \u062a\u0642\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0627\u0644\u062a\u064a \u0646\u062c\u0645\u0639\u0647\u0627."
    },
    "uk": {
        "heading": "\u042f\u043a \u043c\u0438 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454\u043c\u043e \u0437\u0433\u043e\u0434\u0443 (GDPR \u0441\u0442. 7(1))",
        "p1": "\u0412\u0430\u0448\u0430 \u043f\u0440\u0435\u0444\u0435\u0440\u0435\u043d\u0446\u0456\u044f \u0437\u0433\u043e\u0434\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044c\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u043d\u0430 \u0432\u0430\u0448\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457 \u0432 \u043a\u043b\u044e\u0447\u0456 localStorage <code>ll_cookie_consent</code>. \u041c\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u043c\u043e \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u0440\u043e \u0437\u0433\u043e\u0434\u0443 \u043d\u0430 \u043d\u0430\u0448\u0456 \u0441\u0435\u0440\u0432\u0435\u0440\u0438 \u2014 \u0446\u0435 \u0441\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0432\u0438\u0431\u0456\u0440 \u0434\u043b\u044f \u043c\u0456\u043d\u0456\u043c\u0456\u0437\u0430\u0446\u0456\u0457 \u0434\u0430\u043d\u0438\u0445.",
        "p2": "\u041c\u0438 \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0443\u0454\u043c\u043e \u043f\u0456\u0434\u0437\u0432\u0456\u0442\u043d\u0456\u0441\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0445\u043d\u0456\u0447\u043d\u0456 \u0437\u0430\u0441\u043e\u0431\u0438: \u0430\u043d\u0430\u043b\u0456\u0442\u0438\u0447\u043d\u0456 \u0434\u0430\u043d\u0456 (Vercel Analytics, Vercel Speed Insights) \u0442\u0430 \u0434\u0430\u043d\u0456 \u043c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433\u0443 \u043f\u043e\u043c\u0438\u043b\u043e\u043a (Sentry) \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0442\u043e\u0434\u0456, \u043a\u043e\u043b\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u0430\u043f\u043e\u0440 \u0437\u0433\u043e\u0434\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0439. \u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0430\u043d\u0430\u043b\u0456\u0442\u0438\u0447\u043d\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u0456\u0432 \u0430\u0431\u043e \u0437\u0430\u043f\u0438\u0441\u0456\u0432 \u043c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433\u0443 \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0434\u043b\u044f \u0432\u0430\u0448\u043e\u0457 \u0441\u0435\u0441\u0456\u0457 \u0441\u0430\u043c\u0430 \u043f\u043e \u0441\u043e\u0431\u0456 \u0454 \u0434\u043e\u043a\u0430\u0437\u043e\u043c \u043d\u0430\u0434\u0430\u043d\u043d\u044f \u0437\u0433\u043e\u0434\u0438. \u042f\u043a\u0449\u043e \u043f\u0440\u0430\u043f\u043e\u0440 \u0437\u0433\u043e\u0434\u0438 \u043d\u0435 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0436\u043e\u0434\u043d\u0456 \u043d\u0435\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u043a\u043e\u0432\u0456 \u0434\u0430\u043d\u0456 \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044e\u0442\u044c \u0432\u0430\u0448 \u043f\u0440\u0438\u0441\u0442\u0440\u0456\u0439.",
        "p3": "\u0426\u0435\u0439 \u043f\u0456\u0434\u0445\u0456\u0434 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0432\u0438\u043c\u043e\u0437\u0456 \u0441\u0442. 7(1) GDPR \u043f\u0440\u043e \u0442\u0435, \u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0433\u043e\u0434\u0443, \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e \u043c\u0456\u043d\u0456\u043c\u0456\u0437\u0443\u044e\u0447\u0438 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456, \u044f\u043a\u0456 \u043c\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043c\u043e."
    },
}

# ── Story 14.3 — Vercel Speed Insights Disclosure ────────────────────────────
SPEED_INSIGHTS = {
    "en": {
        "heading": "Vercel Speed Insights",
        "description": "Real-user performance monitoring that measures Core Web Vitals (LCP, FID, CLS, TTFB, INP) from actual visitor sessions. <b>Cookie-free</b> \u2014 no cookies or persistent identifiers are stored on your device. Speed Insights data is collected only when you consent to the Analytics category. Data is aggregated and anonymised; individual page loads cannot be traced to a specific user.",
        "link": "Vercel Privacy Policy"
    },
    "pl": {
        "heading": "Vercel Speed Insights",
        "description": "Monitorowanie wydajno\u015bci u\u017cytkownik\u00f3w rzeczywistych, kt\u00f3re mierzy Core Web Vitals (LCP, FID, CLS, TTFB, INP) z rzeczywistych sesji odwiedzaj\u0105cych. <b>Bez plik\u00f3w cookie</b> \u2014 na Twoim urz\u0105dzeniu nie s\u0105 przechowywane \u017cadne pliki cookie ani trwa\u0142e identyfikatory. Dane Speed Insights s\u0105 zbierane wy\u0142\u0105cznie za Twoj\u0105 zgod\u0105 na kategori\u0119 Analityka. Dane s\u0105 agregowane i anonimizowane; pojedynczych \u0142adowa\u0144 stron nie mo\u017cna powi\u0105za\u0107 z konkretnym u\u017cytkownikiem.",
        "link": "Polityka prywatno\u015bci Vercel"
    },
    "de": {
        "heading": "Vercel Speed Insights",
        "description": "Echtzeit-Leistungs\u00fcberwachung, die Core Web Vitals (LCP, FID, CLS, TTFB, INP) aus tats\u00e4chlichen Besuchersitzungen misst. <b>Cookiefrei</b> \u2014 auf Ihrem Ger\u00e4t werden keine Cookies oder dauerhaften Identifikatoren gespeichert. Speed-Insights-Daten werden nur erhoben, wenn Sie der Kategorie Analytik zustimmen. Die Daten werden aggregiert und anonymisiert; einzelne Seitenladungen k\u00f6nnen nicht einem bestimmten Benutzer zugeordnet werden.",
        "link": "Vercel Datenschutzrichtlinie"
    },
    "es": {
        "heading": "Vercel Speed Insights",
        "description": "Monitorizaci\u00f3n del rendimiento de usuarios reales que mide los Core Web Vitals (LCP, FID, CLS, TTFB, INP) de sesiones reales de visitantes. <b>Sin cookies</b> \u2014 no se almacenan cookies ni identificadores persistentes en su dispositivo. Los datos de Speed Insights solo se recopilan cuando usted consiente la categor\u00eda de An\u00e1lisis. Los datos se agregan y anonimizan; las cargas de p\u00e1gina individuales no pueden rastrearse hasta un usuario espec\u00edfico.",
        "link": "Pol\u00edtica de privacidad de Vercel"
    },
    "fr": {
        "heading": "Vercel Speed Insights",
        "description": "Surveillance des performances des utilisateurs r\u00e9els mesurant les Core Web Vitals (LCP, FID, CLS, TTFB, INP) \u00e0 partir de sessions de visiteurs r\u00e9elles. <b>Sans cookies</b> \u2014 aucun cookie ni identifiant persistant n\u2019est stock\u00e9 sur votre appareil. Les donn\u00e9es Speed Insights ne sont collect\u00e9es que lorsque vous consentez \u00e0 la cat\u00e9gorie Analytique. Les donn\u00e9es sont agr\u00e9g\u00e9es et anonymis\u00e9es ; les chargements de pages individuels ne peuvent pas \u00eatre associ\u00e9s \u00e0 un utilisateur sp\u00e9cifique.",
        "link": "Politique de confidentialit\u00e9 de Vercel"
    },
    "ja": {
        "heading": "Vercel Speed Insights",
        "description": "\u5b9f\u969b\u306e\u8a2a\u554f\u8005\u30bb\u30c3\u30b7\u30e7\u30f3\u304b\u3089Core Web Vitals\uff08LCP\u3001FID\u3001CLS\u3001TTFB\u3001INP\uff09\u3092\u6e2c\u5b9a\u3059\u308b\u30ea\u30a2\u30eb\u30e6\u30fc\u30b6\u30fc\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3002<b>Cookie\u4e0d\u4f7f\u7528</b>\u2014\u2014\u30c7\u30d0\u30a4\u30b9\u306bCookie\u3084\u6c38\u7d9a\u7684\u306a\u8b58\u5225\u5b50\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002Speed Insights\u30c7\u30fc\u30bf\u306f\u3001\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9\u30ab\u30c6\u30b4\u30ea\u306b\u540c\u610f\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u53ce\u96c6\u3055\u308c\u307e\u3059\u3002\u30c7\u30fc\u30bf\u306f\u96c6\u7d04\u30fb\u533f\u540d\u5316\u3055\u308c\u3001\u500b\u3005\u306e\u30da\u30fc\u30b8\u8aad\u307f\u8fbc\u307f\u3092\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u7d50\u3073\u3064\u3051\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
        "link": "Vercel \u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"
    },
    "zh": {
        "heading": "Vercel Speed Insights",
        "description": "\u4ece\u5b9e\u9645\u8bbf\u5ba2\u4f1a\u8bdd\u4e2d\u6d4b\u91cfCore Web Vitals\uff08LCP\u3001FID\u3001CLS\u3001TTFB\u3001INP\uff09\u7684\u771f\u5b9e\u7528\u6237\u6027\u80fd\u76d1\u63a7\u3002<b>\u65e0Cookie</b>\u2014\u2014\u4e0d\u4f1a\u5728\u60a8\u7684\u8bbe\u5907\u4e0a\u5b58\u50a8\u4efb\u4f55Cookie\u6216\u6301\u4e45\u6807\u8bc6\u7b26\u3002Speed Insights\u6570\u636e\u4ec5\u5728\u60a8\u540c\u610f\u5206\u6790\u7c7b\u522b\u65f6\u624d\u4f1a\u6536\u96c6\u3002\u6570\u636e\u7ecf\u8fc7\u6c47\u603b\u548c\u533f\u540d\u5316\u5904\u7406\uff1b\u5355\u4e2a\u9875\u9762\u52a0\u8f7d\u65e0\u6cd5\u8ffd\u6eaf\u5230\u7279\u5b9a\u7528\u6237\u3002",
        "link": "Vercel \u9690\u79c1\u653f\u7b56"
    },
    "ar": {
        "heading": "Vercel Speed Insights",
        "description": "\u0645\u0631\u0627\u0642\u0628\u0629 \u0623\u062f\u0627\u0621 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u064a\u0646 \u0627\u0644\u062a\u064a \u062a\u0642\u064a\u0633 Core Web Vitals (LCP\u060c FID\u060c CLS\u060c TTFB\u060c INP) \u0645\u0646 \u062c\u0644\u0633\u0627\u062a \u0627\u0644\u0632\u0648\u0627\u0631 \u0627\u0644\u0641\u0639\u0644\u064a\u0629. <b>\u0628\u062f\u0648\u0646 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0631\u062a\u0628\u0627\u0637</b> \u2014 \u0644\u0627 \u064a\u062a\u0645 \u062a\u062e\u0632\u064a\u0646 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0631\u062a\u0628\u0627\u0637 \u0623\u0648 \u0645\u0639\u0631\u0641\u0627\u062a \u062f\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643. \u064a\u062a\u0645 \u062c\u0645\u0639 \u0628\u064a\u0627\u0646\u0627\u062a Speed Insights \u0641\u0642\u0637 \u0639\u0646\u062f \u0645\u0648\u0627\u0641\u0642\u062a\u0643 \u0639\u0644\u0649 \u0641\u0626\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u0627\u062a. \u064a\u062a\u0645 \u062a\u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0625\u062e\u0641\u0627\u0621 \u0647\u0648\u064a\u062a\u0647\u0627\u061b \u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u062a\u0628\u0639 \u062a\u062d\u0645\u064a\u0644\u0627\u062a \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0641\u0631\u062f\u064a\u0629 \u0625\u0644\u0649 \u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u062d\u062f\u062f.",
        "link": "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0644\u0640 Vercel"
    },
    "uk": {
        "heading": "Vercel Speed Insights",
        "description": "\u041c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u0440\u0435\u0430\u043b\u044c\u043d\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432, \u0449\u043e \u0432\u0438\u043c\u0456\u0440\u044e\u0454 Core Web Vitals (LCP, FID, CLS, TTFB, INP) \u0437 \u0444\u0430\u043a\u0442\u0438\u0447\u043d\u0438\u0445 \u0441\u0435\u0441\u0456\u0439 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0447\u0456\u0432. <b>\u0411\u0435\u0437 Cookie</b> \u2014 \u043d\u0430 \u0432\u0430\u0448\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457 \u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f Cookie \u0430\u0431\u043e \u043f\u043e\u0441\u0442\u0456\u0439\u043d\u0456 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0438. \u0414\u0430\u043d\u0456 Speed Insights \u0437\u0431\u0438\u0440\u0430\u044e\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0437\u0430 \u0432\u0430\u0448\u043e\u044e \u0437\u0433\u043e\u0434\u043e\u044e \u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e \u0410\u043d\u0430\u043b\u0456\u0442\u0438\u043a\u0430. \u0414\u0430\u043d\u0456 \u0430\u0433\u0440\u0435\u0433\u0443\u044e\u0442\u044c\u0441\u044f \u0442\u0430 \u0430\u043d\u043e\u043d\u0456\u043c\u0456\u0437\u0443\u044e\u0442\u044c\u0441\u044f; \u043e\u043a\u0440\u0435\u043c\u0456 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u043f\u043e\u0432\u2019\u044f\u0437\u0430\u0442\u0438 \u0437 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0438\u043c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043c.",
        "link": "\u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456 Vercel"
    },
}

# ── Story 14.4 — Sentry key enumeration + locale cookie fix ──────────────────
# Replace the generic sentryKey with detailed key-by-key description
SENTRY_KEYS = {
    "en": {
        "heading": "Sentry Session Replay Keys",
        "intro": "When you consent to Session Replay, the Sentry SDK (@sentry/nextjs v10.x) stores the following keys in sessionStorage:",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (consent required)",
            "purpose": "Stores the replay session identifier, segment count, start timestamp, and last-activity timestamp. Used to correlate replay segments within the same browser tab.",
            "duration": "Current browser session only \u2014 deleted when the tab is closed.",
            "data": "JSON object containing a session ID (UUID), started and last-activity ISO timestamps, and a segment counter. No personal data."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "Error Monitoring (consent required)",
            "purpose": "If error monitoring consent is active, Sentry may store an anonymous user context to correlate errors within the same session.",
            "duration": "Current browser session only.",
            "data": "Random anonymous identifier. No personal data such as name, email, or IP address is stored."
        }
    },
    "pl": {
        "heading": "Klucze Sentry Session Replay",
        "intro": "Gdy wyrazisz zgod\u0119 na Session Replay, SDK Sentry (@sentry/nextjs v10.x) zapisuje nast\u0119puj\u0105ce klucze w sessionStorage:",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (wymagana zgoda)",
            "purpose": "Przechowuje identyfikator sesji powtarzania, licznik segment\u00f3w, znacznik czasu rozpocz\u0119cia i ostatniej aktywno\u015bci. U\u017cywany do korelowania segment\u00f3w powtarzania w ramach tej samej karty przegl\u0105darki.",
            "duration": "Tylko bie\u017c\u0105ca sesja przegl\u0105darki \u2014 usuwany po zamkni\u0119ciu karty.",
            "data": "Obiekt JSON zawieraj\u0105cy identyfikator sesji (UUID), znaczniki czasu rozpocz\u0119cia i ostatniej aktywno\u015bci w formacie ISO oraz licznik segment\u00f3w. Brak danych osobowych."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "Monitorowanie b\u0142\u0119d\u00f3w (wymagana zgoda)",
            "purpose": "Je\u015bli zgoda na monitorowanie b\u0142\u0119d\u00f3w jest aktywna, Sentry mo\u017ce przechowywa\u0107 anonimowy kontekst u\u017cytkownika do korelowania b\u0142\u0119d\u00f3w w ramach tej samej sesji.",
            "duration": "Tylko bie\u017c\u0105ca sesja przegl\u0105darki.",
            "data": "Losowy anonimowy identyfikator. Nie s\u0105 przechowywane \u017cadne dane osobowe, takie jak imi\u0119, e-mail czy adres IP."
        }
    },
    "de": {
        "heading": "Sentry Session Replay Schl\u00fcssel",
        "intro": "Wenn Sie Session Replay zustimmen, speichert das Sentry SDK (@sentry/nextjs v10.x) die folgenden Schl\u00fcssel im sessionStorage:",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (Einwilligung erforderlich)",
            "purpose": "Speichert die Replay-Sitzungskennung, Segmentz\u00e4hler, Startzeitstempel und Zeitstempel der letzten Aktivit\u00e4t. Wird verwendet, um Replay-Segmente innerhalb desselben Browser-Tabs zu korrelieren.",
            "duration": "Nur aktuelle Browsersitzung \u2014 wird beim Schlie\u00dfen des Tabs gel\u00f6scht.",
            "data": "JSON-Objekt mit einer Sitzungs-ID (UUID), Startzeitstempel und Zeitstempel der letzten Aktivit\u00e4t im ISO-Format sowie einem Segmentz\u00e4hler. Keine personenbezogenen Daten."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "Fehler\u00fcberwachung (Einwilligung erforderlich)",
            "purpose": "Wenn die Einwilligung zur Fehler\u00fcberwachung aktiv ist, kann Sentry einen anonymen Benutzerkontext speichern, um Fehler innerhalb derselben Sitzung zu korrelieren.",
            "duration": "Nur aktuelle Browsersitzung.",
            "data": "Zuf\u00e4lliger anonymer Bezeichner. Keine personenbezogenen Daten wie Name, E-Mail oder IP-Adresse werden gespeichert."
        }
    },
    "es": {
        "heading": "Claves de Sentry Session Replay",
        "intro": "Cuando consiente Session Replay, el SDK de Sentry (@sentry/nextjs v10.x) almacena las siguientes claves en sessionStorage:",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (consentimiento requerido)",
            "purpose": "Almacena el identificador de sesi\u00f3n de reproducci\u00f3n, el contador de segmentos, la marca de tiempo de inicio y la marca de tiempo de \u00faltima actividad. Se utiliza para correlacionar segmentos de reproducci\u00f3n dentro de la misma pesta\u00f1a del navegador.",
            "duration": "Solo la sesi\u00f3n actual del navegador \u2014 se elimina al cerrar la pesta\u00f1a.",
            "data": "Objeto JSON que contiene un ID de sesi\u00f3n (UUID), marcas de tiempo de inicio y \u00faltima actividad en formato ISO, y un contador de segmentos. Sin datos personales."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "Monitorizaci\u00f3n de errores (consentimiento requerido)",
            "purpose": "Si el consentimiento de monitorizaci\u00f3n de errores est\u00e1 activo, Sentry puede almacenar un contexto de usuario an\u00f3nimo para correlacionar errores dentro de la misma sesi\u00f3n.",
            "duration": "Solo la sesi\u00f3n actual del navegador.",
            "data": "Identificador an\u00f3nimo aleatorio. No se almacenan datos personales como nombre, correo electr\u00f3nico o direcci\u00f3n IP."
        }
    },
    "fr": {
        "heading": "Cl\u00e9s Sentry Session Replay",
        "intro": "Lorsque vous consentez au Session Replay, le SDK Sentry (@sentry/nextjs v10.x) stocke les cl\u00e9s suivantes dans le sessionStorage :",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (consentement requis)",
            "purpose": "Stocke l\u2019identifiant de session de replay, le compteur de segments, l\u2019horodatage de d\u00e9but et l\u2019horodatage de derni\u00e8re activit\u00e9. Utilis\u00e9 pour corr\u00e9ler les segments de replay dans le m\u00eame onglet du navigateur.",
            "duration": "Session de navigation en cours uniquement \u2014 supprim\u00e9 \u00e0 la fermeture de l\u2019onglet.",
            "data": "Objet JSON contenant un identifiant de session (UUID), des horodatages de d\u00e9but et de derni\u00e8re activit\u00e9 au format ISO, et un compteur de segments. Aucune donn\u00e9e personnelle."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "Surveillance des erreurs (consentement requis)",
            "purpose": "Si le consentement \u00e0 la surveillance des erreurs est actif, Sentry peut stocker un contexte utilisateur anonyme pour corr\u00e9ler les erreurs au sein de la m\u00eame session.",
            "duration": "Session de navigation en cours uniquement.",
            "data": "Identifiant anonyme al\u00e9atoire. Aucune donn\u00e9e personnelle telle que nom, e-mail ou adresse IP n\u2019est stock\u00e9e."
        }
    },
    "ja": {
        "heading": "Sentry Session Replay \u30ad\u30fc",
        "intro": "Session Replay\u306b\u540c\u610f\u3059\u308b\u3068\u3001Sentry SDK\uff08@sentry/nextjs v10.x\uff09\u306f\u4ee5\u4e0b\u306e\u30ad\u30fc\u3092sessionStorage\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay\uff08\u540c\u610f\u304c\u5fc5\u8981\uff09",
            "purpose": "\u30ea\u30d7\u30ec\u30a4\u30bb\u30c3\u30b7\u30e7\u30f3\u8b58\u5225\u5b50\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\u958b\u59cb\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3001\u6700\u7d42\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u540c\u3058\u30d6\u30e9\u30a6\u30b6\u30bf\u30d6\u5185\u306e\u30ea\u30d7\u30ec\u30a4\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u95a2\u9023\u4ed8\u3051\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002",
            "duration": "\u73fe\u5728\u306e\u30d6\u30e9\u30a6\u30b6\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u307f\u2014\u2014\u30bf\u30d6\u3092\u9589\u3058\u308b\u3068\u524a\u9664\u3055\u308c\u307e\u3059\u3002",
            "data": "\u30bb\u30c3\u30b7\u30e7\u30f3ID\uff08UUID\uff09\u3001\u958b\u59cb\u3068\u6700\u7d42\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306eISO\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\u542b\u3080JSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002\u500b\u4eba\u30c7\u30fc\u30bf\u306f\u542b\u307e\u308c\u307e\u305b\u3093\u3002"
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "\u30a8\u30e9\u30fc\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\uff08\u540c\u610f\u304c\u5fc5\u8981\uff09",
            "purpose": "\u30a8\u30e9\u30fc\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u540c\u610f\u304c\u6709\u52b9\u306a\u5834\u5408\u3001Sentry\u306f\u540c\u3058\u30bb\u30c3\u30b7\u30e7\u30f3\u5185\u306e\u30a8\u30e9\u30fc\u3092\u95a2\u9023\u4ed8\u3051\u308b\u305f\u3081\u306b\u533f\u540d\u30e6\u30fc\u30b6\u30fc\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",
            "duration": "\u73fe\u5728\u306e\u30d6\u30e9\u30a6\u30b6\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u307f\u3002",
            "data": "\u30e9\u30f3\u30c0\u30e0\u306a\u533f\u540d\u8b58\u5225\u5b50\u3002\u540d\u524d\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001IP\u30a2\u30c9\u30ec\u30b9\u306a\u3069\u306e\u500b\u4eba\u30c7\u30fc\u30bf\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002"
        }
    },
    "zh": {
        "heading": "Sentry Session Replay \u952e",
        "intro": "\u5f53\u60a8\u540c\u610fSession Replay\u65f6\uff0cSentry SDK\uff08@sentry/nextjs v10.x\uff09\u4f1a\u5728sessionStorage\u4e2d\u5b58\u50a8\u4ee5\u4e0b\u952e\uff1a",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay\uff08\u9700\u8981\u540c\u610f\uff09",
            "purpose": "\u5b58\u50a8\u56de\u653e\u4f1a\u8bdd\u6807\u8bc6\u7b26\u3001\u6bb5\u8ba1\u6570\u5668\u3001\u5f00\u59cb\u65f6\u95f4\u6233\u548c\u6700\u540e\u6d3b\u52a8\u65f6\u95f4\u6233\u3002\u7528\u4e8e\u5728\u540c\u4e00\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\u5185\u5173\u8054\u56de\u653e\u6bb5\u3002",
            "duration": "\u4ec5\u5f53\u524d\u6d4f\u89c8\u5668\u4f1a\u8bdd\u2014\u2014\u5173\u95ed\u6807\u7b7e\u9875\u65f6\u5220\u9664\u3002",
            "data": "\u5305\u542b\u4f1a\u8bddID\uff08UUID\uff09\u3001\u5f00\u59cb\u548c\u6700\u540e\u6d3b\u52a8\u7684ISO\u65f6\u95f4\u6233\u4ee5\u53ca\u6bb5\u8ba1\u6570\u5668\u7684JSON\u5bf9\u8c61\u3002\u4e0d\u542b\u4e2a\u4eba\u6570\u636e\u3002"
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "\u9519\u8bef\u76d1\u63a7\uff08\u9700\u8981\u540c\u610f\uff09",
            "purpose": "\u5982\u679c\u9519\u8bef\u76d1\u63a7\u540c\u610f\u5df2\u6fc0\u6d3b\uff0cSentry\u53ef\u80fd\u4f1a\u5b58\u50a8\u533f\u540d\u7528\u6237\u4e0a\u4e0b\u6587\uff0c\u4ee5\u5173\u8054\u540c\u4e00\u4f1a\u8bdd\u5185\u7684\u9519\u8bef\u3002",
            "duration": "\u4ec5\u5f53\u524d\u6d4f\u89c8\u5668\u4f1a\u8bdd\u3002",
            "data": "\u968f\u673a\u533f\u540d\u6807\u8bc6\u7b26\u3002\u4e0d\u5b58\u50a8\u59d3\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u6216IP\u5730\u5740\u7b49\u4e2a\u4eba\u6570\u636e\u3002"
        }
    },
    "ar": {
        "heading": "\u0645\u0641\u0627\u062a\u064a\u062d Sentry Session Replay",
        "intro": "\u0639\u0646\u062f\u0645\u0627 \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 Session Replay\u060c \u064a\u0642\u0648\u0645 SDK Sentry (@sentry/nextjs v10.x) \u0628\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0641\u064a sessionStorage:",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0637\u0644\u0648\u0628\u0629)",
            "purpose": "\u064a\u062e\u0632\u0646 \u0645\u0639\u0631\u0641 \u062c\u0644\u0633\u0629 \u0627\u0644\u0625\u0639\u0627\u062f\u0629\u060c \u0639\u062f\u0627\u062f \u0627\u0644\u0645\u0642\u0627\u0637\u0639\u060c \u0637\u0627\u0628\u0639 \u0632\u0645\u0646\u064a \u0627\u0644\u0628\u062f\u0621 \u0648\u0637\u0627\u0628\u0639 \u0632\u0645\u0646\u064a \u0622\u062e\u0631 \u0646\u0634\u0627\u0637. \u064a\u0633\u062a\u062e\u062f\u0645 \u0644\u0631\u0628\u0637 \u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0625\u0639\u0627\u062f\u0629 \u0636\u0645\u0646 \u0646\u0641\u0633 \u0639\u0644\u0627\u0645\u0629 \u062a\u0628\u0648\u064a\u0628 \u0627\u0644\u0645\u062a\u0635\u0641\u062d.",
            "duration": "\u062c\u0644\u0633\u0629 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0641\u0642\u0637 \u2014 \u064a\u062a\u0645 \u062d\u0630\u0641\u0647 \u0639\u0646\u062f \u0625\u063a\u0644\u0627\u0642 \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u0628\u0648\u064a\u0628.",
            "data": "\u0643\u0627\u0626\u0646 JSON \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u062c\u0644\u0633\u0629 (UUID)\u060c \u0637\u0648\u0627\u0628\u0639 \u0632\u0645\u0646\u064a\u0629 \u0644\u0644\u0628\u062f\u0621 \u0648\u0622\u062e\u0631 \u0646\u0634\u0627\u0637 \u0628\u062a\u0646\u0633\u064a\u0642 ISO\u060c \u0648\u0639\u062f\u0627\u062f \u0645\u0642\u0627\u0637\u0639. \u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a \u0634\u062e\u0635\u064a\u0629."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 (\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0637\u0644\u0648\u0628\u0629)",
            "purpose": "\u0625\u0630\u0627 \u0643\u0627\u0646\u062a \u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0646\u0634\u0637\u0629\u060c \u0641\u0642\u062f \u064a\u0642\u0648\u0645 Sentry \u0628\u062a\u062e\u0632\u064a\u0646 \u0633\u064a\u0627\u0642 \u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u062c\u0647\u0648\u0644 \u0644\u0631\u0628\u0637 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0636\u0645\u0646 \u0646\u0641\u0633 \u0627\u0644\u062c\u0644\u0633\u0629.",
            "duration": "\u062c\u0644\u0633\u0629 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0641\u0642\u0637.",
            "data": "\u0645\u0639\u0631\u0641 \u0645\u062c\u0647\u0648\u0644 \u0639\u0634\u0648\u0627\u0626\u064a. \u0644\u0627 \u064a\u062a\u0645 \u062a\u062e\u0632\u064a\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0634\u062e\u0635\u064a\u0629 \u0645\u062b\u0644 \u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0623\u0648 \u0639\u0646\u0648\u0627\u0646 IP."
        }
    },
    "uk": {
        "heading": "\u041a\u043b\u044e\u0447\u0456 Sentry Session Replay",
        "intro": "\u041a\u043e\u043b\u0438 \u0432\u0438 \u043d\u0430\u0434\u0430\u0454\u0442\u0435 \u0437\u0433\u043e\u0434\u0443 \u043d\u0430 Session Replay, SDK Sentry (@sentry/nextjs v10.x) \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u043a\u043b\u044e\u0447\u0456 \u0432 sessionStorage:",
        "replaySession": {
            "heading": "sentryReplaySession",
            "category": "Session Replay (\u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0430 \u0437\u0433\u043e\u0434\u0430)",
            "purpose": "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u0441\u0435\u0441\u0456\u0457 \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f, \u043b\u0456\u0447\u0438\u043b\u044c\u043d\u0438\u043a \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0456\u0432, \u043c\u0456\u0442\u043a\u0443 \u0447\u0430\u0441\u0443 \u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0442\u0430 \u043c\u0456\u0442\u043a\u0443 \u0447\u0430\u0441\u0443 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0457 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u043b\u044f\u0446\u0456\u0457 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0456\u0432 \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432 \u043c\u0435\u0436\u0430\u0445 \u043e\u0434\u043d\u0456\u0454\u0457 \u0432\u043a\u043b\u0430\u0434\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",
            "duration": "\u041b\u0438\u0448\u0435 \u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0441\u0435\u0441\u0456\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u2014 \u0432\u0438\u0434\u0430\u043b\u044f\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0437\u0430\u043a\u0440\u0438\u0442\u0442\u0456 \u0432\u043a\u043b\u0430\u0434\u043a\u0438.",
            "data": "JSON-\u043e\u0431\u2019\u0454\u043a\u0442, \u0449\u043e \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u0441\u0435\u0441\u0456\u0457 (UUID), \u043c\u0456\u0442\u043a\u0438 \u0447\u0430\u0441\u0443 \u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0442\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0457 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456 \u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 ISO, \u0442\u0430 \u043b\u0456\u0447\u0438\u043b\u044c\u043d\u0438\u043a \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0456\u0432. \u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456 \u043d\u0435 \u043c\u0456\u0441\u0442\u044f\u0442\u044c\u0441\u044f."
        },
        "sentryUser": {
            "heading": "__sentry_user",
            "category": "\u041c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433 \u043f\u043e\u043c\u0438\u043b\u043e\u043a (\u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0430 \u0437\u0433\u043e\u0434\u0430)",
            "purpose": "\u042f\u043a\u0449\u043e \u0437\u0433\u043e\u0434\u0430 \u043d\u0430 \u043c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433 \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0430\u043a\u0442\u0438\u0432\u043d\u0430, Sentry \u043c\u043e\u0436\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u0430\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0434\u043b\u044f \u043a\u043e\u0440\u0435\u043b\u044f\u0446\u0456\u0457 \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0443 \u043c\u0435\u0436\u0430\u0445 \u043e\u0434\u043d\u0456\u0454\u0457 \u0441\u0435\u0441\u0456\u0457.",
            "duration": "\u041b\u0438\u0448\u0435 \u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0441\u0435\u0441\u0456\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",
            "data": "\u0412\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u0438\u0439 \u0430\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440. \u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043d\u0456, \u0442\u0430\u043a\u0456 \u044f\u043a \u0456\u043c\u2019\u044f, \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430 \u0447\u0438 IP-\u0430\u0434\u0440\u0435\u0441\u0430, \u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f."
        }
    },
}

# ── Story 14.4 — Locale cookie fix: "may set" → "sets" ──────────────────────
LOCALE_COOKIE_FIX = {
    "en": "The next-intl internationalisation library sets a locale preference cookie (NEXT_LOCALE) to remember your chosen language across visits.",
    "pl": "Biblioteka internacjonalizacji next-intl ustawia plik cookie preferencji j\u0119zykowych (NEXT_LOCALE), aby zapami\u0119ta\u0107 wybrany przez Ciebie j\u0119zyk mi\u0119dzy wizytami.",
    "de": "Die Internationalisierungsbibliothek next-intl setzt ein Spracheinstellungs-Cookie (NEXT_LOCALE), um Ihre gew\u00e4hlte Sprache \u00fcber Besuche hinweg zu speichern.",
    "es": "La biblioteca de internacionalizaci\u00f3n next-intl establece una cookie de preferencia de idioma (NEXT_LOCALE) para recordar el idioma elegido entre visitas.",
    "fr": "La biblioth\u00e8que d\u2019internationalisation next-intl d\u00e9finit un cookie de pr\u00e9f\u00e9rence linguistique (NEXT_LOCALE) pour m\u00e9moriser votre langue choisie entre les visites.",
    "ja": "\u56fd\u969b\u5316\u30e9\u30a4\u30d6\u30e9\u30eanext-intl\u306f\u3001\u8a2a\u554f\u9593\u3067\u9078\u629e\u3057\u305f\u8a00\u8a9e\u3092\u8a18\u61b6\u3059\u308b\u305f\u3081\u306b\u30ed\u30b1\u30fc\u30eb\u8a2d\u5b9aCookie\uff08NEXT_LOCALE\uff09\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",
    "zh": "\u56fd\u9645\u5316\u5e93next-intl\u4f1a\u8bbe\u7f6e\u4e00\u4e2a\u8bed\u8a00\u504f\u597d\u8bbe\u7f6eCookie\uff08NEXT_LOCALE\uff09\uff0c\u4ee5\u5728\u8bbf\u95ee\u4e4b\u95f4\u8bb0\u4f4f\u60a8\u9009\u62e9\u7684\u8bed\u8a00\u3002",
    "ar": "\u062a\u0642\u0648\u0645 \u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u062a\u062f\u0648\u064a\u0644 next-intl \u0628\u062a\u0639\u064a\u064a\u0646 \u0645\u0644\u0641 \u062a\u0639\u0631\u064a\u0641 \u0627\u0631\u062a\u0628\u0627\u0637 \u0644\u062a\u0641\u0636\u064a\u0644 \u0627\u0644\u0644\u063a\u0629 (NEXT_LOCALE) \u0644\u062a\u0630\u0643\u0631 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0645\u062e\u062a\u0627\u0631\u0629 \u0628\u064a\u0646 \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a.",
    "uk": "\u0411\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430 \u0456\u043d\u0442\u0435\u0440\u043d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 next-intl \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0454 cookie \u043c\u043e\u0432\u043d\u043e\u0457 \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0438 (NEXT_LOCALE), \u0449\u043e\u0431 \u0437\u0430\u043f\u0430\u043c\u2019\u044f\u0442\u0430\u0442\u0438 \u043e\u0431\u0440\u0430\u043d\u0443 \u043c\u043e\u0432\u0443 \u043c\u0456\u0436 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043d\u043d\u044f\u043c\u0438.",
}

# Also fix contact.company from "LumenShore Ltd" to "Lumenshore Limited"
CONTACT_COMPANY_FIX = {
    "en": "<b>Company:</b> Lumenshore Limited (Company No. 09607326)",
    "pl": "<b>Firma:</b> Lumenshore Limited (numer firmy: 09607326)",
    "de": "<b>Unternehmen:</b> Lumenshore Limited (Firmennummer: 09607326)",
    "es": "<b>Empresa:</b> Lumenshore Limited (n\u00famero de empresa: 09607326)",
    "fr": "<b>Soci\u00e9t\u00e9 :</b> Lumenshore Limited (num\u00e9ro d\u2019entreprise : 09607326)",
    "ja": "<b>\u4f1a\u793e:</b> Lumenshore Limited\uff08\u4f1a\u793e\u756a\u53f7: 09607326\uff09",
    "zh": "<b>\u516c\u53f8:</b> Lumenshore Limited\uff08\u516c\u53f8\u7f16\u53f7: 09607326\uff09",
    "ar": "<b>\u0627\u0644\u0634\u0631\u0643\u0629:</b> Lumenshore Limited (\u0631\u0642\u0645 \u0627\u0644\u0634\u0631\u0643\u0629: 09607326)",
    "uk": "<b>\u041a\u043e\u043c\u043f\u0430\u043d\u0456\u044f:</b> Lumenshore Limited (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457: 09607326)",
}


LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]


def apply_to_locale(locale):
    fname = os.path.join(MESSAGES_DIR, f"{locale}.json")
    with open(fname, "r", encoding="utf-8") as f:
        data = json.load(f)

    cp = data["CookiePage"]

    # ── 14.1: Add icoComplaint section ────────────────────────────────────
    cp["icoComplaint"] = ICO_COMPLAINT[locale]
    print(f"  {locale}.json: 14.1 icoComplaint section added")

    # ── 14.2: Add consentAccountability section ───────────────────────────
    cp["consentAccountability"] = CONSENT_ACCOUNTABILITY[locale]
    print(f"  {locale}.json: 14.2 consentAccountability section added")

    # ── 14.3: Add speedInsights to thirdParty ─────────────────────────────
    cp["thirdParty"]["speedInsights"] = SPEED_INSIGHTS[locale]
    print(f"  {locale}.json: 14.3 thirdParty.speedInsights added")

    # ── 14.4a: Replace sentryKey with detailed enumeration ────────────────
    cp["sessionStorage"]["sentryKeys"] = SENTRY_KEYS[locale]
    print(f"  {locale}.json: 14.4 sentryKeys enumeration added")

    # ── 14.4b: Fix locale cookie hedging "may set" → "sets" ──────────────
    cp["cookies"]["locale"]["purpose"] = LOCALE_COOKIE_FIX[locale]
    print(f"  {locale}.json: 14.4 locale cookie purpose fixed")

    # ── Fix company name in contact section ───────────────────────────────
    cp["contact"]["company"] = CONTACT_COMPANY_FIX[locale]
    print(f"  {locale}.json: contact.company standardised")

    with open(fname, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


if __name__ == "__main__":
    for loc in LOCALES:
        apply_to_locale(loc)
    print("Done.")

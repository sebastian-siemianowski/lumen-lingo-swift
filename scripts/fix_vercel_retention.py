#!/usr/bin/env python3
"""Story 10.4: Fix Vercel Analytics retention to specify 30-day period."""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

VERCEL_RETENTION = {
    "en": "<b>Vercel Analytics</b> \u2014 aggregated, cookie-free analytics data is retained for 30 days from collection, then automatically purged. No personally identifiable information is stored.",
    "pl": "<b>Vercel Analytics</b> \u2014 zagregowane, bezplikowe dane analityczne s\u0105 przechowywane przez 30 dni od zebrania, a nast\u0119pnie automatycznie usuwane. Nie s\u0105 przechowywane \u017cadne dane umo\u017cliwiaj\u0105ce identyfikacj\u0119 osoby.",
    "de": "<b>Vercel Analytics</b> \u2014 aggregierte, cookie-freie Analysedaten werden 30 Tage nach der Erfassung aufbewahrt und dann automatisch gel\u00f6scht. Es werden keine personenbezogenen Daten gespeichert.",
    "es": "<b>Vercel Analytics</b> \u2014 los datos anal\u00edticos agregados y sin cookies se conservan durante 30 d\u00edas desde la recopilaci\u00f3n y luego se eliminan autom\u00e1ticamente. No se almacena informaci\u00f3n de identificaci\u00f3n personal.",
    "fr": "<b>Vercel Analytics</b> \u2014 les donn\u00e9es analytiques agr\u00e9g\u00e9es et sans cookies sont conserv\u00e9es pendant 30 jours apr\u00e8s la collecte, puis automatiquement supprim\u00e9es. Aucune donn\u00e9e personnellement identifiable n\u2019est stock\u00e9e.",
    "ja": "<b>Vercel Analytics</b> \u2014 \u96c6\u8a08\u3055\u308c\u305fCookie\u30d5\u30ea\u30fc\u306e\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9\u30c7\u30fc\u30bf\u306f\u53ce\u96c6\u304b\u308930\u65e5\u9593\u4fdd\u6301\u3055\u308c\u3001\u305d\u306e\u5f8c\u81ea\u52d5\u7684\u306b\u524a\u9664\u3055\u308c\u307e\u3059\u3002\u500b\u4eba\u3092\u7279\u5b9a\u3067\u304d\u308b\u60c5\u5831\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002",
    "zh": "<b>Vercel Analytics</b> \u2014 \u805a\u5408\u7684\u65e0Cookie\u5206\u6790\u6570\u636e\u81ea\u6536\u96c6\u4e4b\u65e5\u8d77\u4fdd\u754630\u5929\uff0c\u7136\u540e\u81ea\u52a8\u6e05\u9664\u3002\u4e0d\u5b58\u50a8\u4efb\u4f55\u4e2a\u4eba\u8eab\u4efd\u4fe1\u606f\u3002",
    "ar": "<b>Vercel Analytics</b> \u2014 \u064a\u062a\u0645 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u0627\u0644\u0645\u062c\u0645\u0639\u0629 \u0627\u0644\u062e\u0627\u0644\u064a\u0629 \u0645\u0646 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0644\u0645\u062f\u0629 30 \u064a\u0648\u0645\u0627\u064b \u0645\u0646 \u062c\u0645\u0639\u0647\u0627\u060c \u062b\u0645 \u062d\u0630\u0641\u0647\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b. \u0644\u0627 \u064a\u062a\u0645 \u062a\u062e\u0632\u064a\u0646 \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0634\u062e\u0635\u064a\u0629.",
    "uk": "<b>Vercel Analytics</b> \u2014 \u0430\u0433\u0440\u0435\u0433\u043e\u0432\u0430\u043d\u0456 \u0430\u043d\u0430\u043b\u0456\u0442\u0438\u0447\u043d\u0456 \u0434\u0430\u043d\u0456 \u0431\u0435\u0437 \u0444\u0430\u0439\u043b\u0456\u0432 cookie \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 30 \u0434\u043d\u0456\u0432 \u0437 \u043c\u043e\u043c\u0435\u043d\u0442\u0443 \u0437\u0431\u043e\u0440\u0443, \u043f\u043e\u0442\u0456\u043c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u044f\u044e\u0442\u044c\u0441\u044f. \u0416\u043e\u0434\u043d\u0430 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044c\u0441\u044f."
}

for locale in LOCALES:
    fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
    with open(fname, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data['Privacy']['dataRetention']['websiteLi4'] = VERCEL_RETENTION[locale]
    with open(fname, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f'{locale}.json: vercel retention updated to 30 days')

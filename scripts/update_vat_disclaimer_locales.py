#!/usr/bin/env python3
"""Update disclaimerVatInclusive in all 9 non-English locale JSON files (9.4.3)."""

import json
from collections import OrderedDict

translations = {
    "ar": "\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0628\u0627\u0644\u062c\u0646\u064a\u0647 \u0627\u0644\u0625\u0633\u062a\u0631\u0644\u064a\u0646\u064a \u062a\u0634\u0645\u0644 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0641\u064a \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0628\u0646\u0633\u0628\u0629 20%. \u0642\u062f \u064a\u062e\u062a\u0644\u0641 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0641\u0639\u0644\u064a \u062d\u0633\u0628 \u0645\u0648\u0642\u0639\u0643 \u0648\u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u0629. \u062a\u062a\u0645 \u0645\u0639\u0627\u0644\u062c\u0629 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0648\u0641\u0648\u062a\u0631\u062a\u0647\u0627 \u0628\u0648\u0627\u0633\u0637\u0629 Apple.",
    "de": "Die angezeigten Preise in GBP enthalten 20% britische Mehrwertsteuer. Der tatsaechlich berechnete Preis kann je nach Standort, lokalen Steuern und Waehrung abweichen. Alle In-App-Kaeufe werden von Apple abgewickelt und abgerechnet.",
    "es": "Los precios mostrados en GBP incluyen el IVA del Reino Unido al 20%. El precio real cobrado puede variar segun tu ubicacion, impuestos locales y moneda. Todas las compras dentro de la app son procesadas y facturadas por Apple.",
    "fr": "Les prix affiches en GBP incluent la TVA britannique de 20%. Le prix effectivement facture peut varier selon votre emplacement, les taxes locales et la devise. Tous les achats integres sont traites et factures par Apple.",
    "ja": "\u8868\u793a\u4fa1\u683c\u306f\u82f1\u30dd\u30f3\u30c9\uff08GBP\uff09\u3067\u3001\u82f1\u56fd\u306eVAT 20%\u3092\u542b\u307f\u307e\u3059\u3002\u5b9f\u969b\u306e\u8acb\u6c42\u984d\u306f\u3001\u304a\u4f4f\u307e\u3044\u306e\u5730\u57df\u3001\u73fe\u5730\u306e\u7a0e\u91d1\u3001\u901a\u8ca8\u306b\u3088\u3063\u3066\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u5185\u8cfc\u5165\u306fApple\u304c\u51e6\u7406\u30fb\u8acb\u6c42\u3057\u307e\u3059\u3002",
    "pl": "Ceny podane w GBP zawieraja 20% brytyjski VAT. Rzeczywista kwota moze sie roznic w zaleznosci od lokalizacji, lokalnych podatkow i waluty. Wszystkie zakupy w aplikacji sa przetwarzane i rozliczane przez Apple.",
    "pt": "Os precos mostrados em GBP incluem IVA do Reino Unido de 20%. O preco real cobrado pode variar conforme sua localizacao, impostos locais e moeda. Todas as compras no aplicativo sao processadas e cobradas pela Apple.",
    "uk": "\u0426\u0456\u043d\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u0443 GBP \u0456 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u044c 20% \u041f\u0414\u0412 \u0412\u0435\u043b\u0438\u043a\u043e\u0457 \u0411\u0440\u0438\u0442\u0430\u043d\u0456\u0457. \u0424\u0430\u043a\u0442\u0438\u0447\u043d\u0430 \u0441\u0443\u043c\u0430 \u043c\u043e\u0436\u0435 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0442\u0438\u0441\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u043e \u0432\u0456\u0434 \u0432\u0430\u0448\u043e\u0433\u043e \u043c\u0456\u0441\u0446\u0435\u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f, \u043c\u0456\u0441\u0446\u0435\u0432\u0438\u0445 \u043f\u043e\u0434\u0430\u0442\u043a\u0456\u0432 \u0456 \u0432\u0430\u043b\u044e\u0442\u0438. \u0412\u0441\u0456 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0432 \u0434\u043e\u0434\u0430\u0442\u043a\u0443 \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u0456 \u043e\u043f\u043b\u0430\u0447\u0443\u044e\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Apple.",
    "zh": "\u663e\u793a\u4ef7\u683c\u4ee5\u82f1\u938d\uff08GBP\uff09\u8ba1\u7b97\uff0c\u5305\u542b20%\u82f1\u56fdVAT\u3002\u5b9e\u9645\u6536\u8d39\u53ef\u80fd\u56e0\u60a8\u7684\u4f4d\u7f6e\u3001\u5f53\u5730\u7a0e\u8d39\u548c\u8d27\u5e01\u800c\u5f02\u3002\u6240\u6709\u5e94\u7528\u5185\u8d2d\u4e70\u5747\u7531Apple\u5904\u7406\u548c\u8ba1\u8d39\u3002"
}

base = "lumen-lingo-frontend/messages"
for locale, text in translations.items():
    path = f"{base}/{locale}.json"
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f, object_pairs_hook=OrderedDict)

    data["Pricing"]["disclaimerVatInclusive"] = text
    
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f"{locale}: OK")

print("Done: all 9 locales updated.")

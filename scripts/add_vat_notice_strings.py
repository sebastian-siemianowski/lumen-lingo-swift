#!/usr/bin/env python3
"""Add subscriptionVATNotice to all 10 AppStrings locale files (9.4.4)."""

import os

translations = {
    "English": "Prices include applicable taxes. All purchases are processed and billed by Apple. Actual price may vary by region and currency.",
    "German": "Preise enthalten anfallende Steuern. Alle Kaeufe werden von Apple abgewickelt und abgerechnet. Der tatsaechliche Preis kann je nach Region und Waehrung abweichen.",
    "Spanish": "Los precios incluyen impuestos aplicables. Todas las compras son procesadas y facturadas por Apple. El precio real puede variar segun la region y la moneda.",
    "French": "Les prix incluent les taxes applicables. Tous les achats sont traites et factures par Apple. Le prix reel peut varier selon la region et la devise.",
    "Polish": "Ceny zawieraja obowiazujace podatki. Wszystkie zakupy sa przetwarzane i rozliczane przez Apple. Rzeczywista cena moze sie roznic w zaleznosci od regionu i waluty.",
    "Arabic": "\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u062a\u0634\u0645\u0644 \u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627. \u062a\u062a\u0645 \u0645\u0639\u0627\u0644\u062c\u0629 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u0648\u0641\u0648\u062a\u0631\u062a\u0647\u0627 \u0628\u0648\u0627\u0633\u0637\u0629 Apple. \u0642\u062f \u064a\u062e\u062a\u0644\u0641 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0641\u0639\u0644\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u0629.",
    "Japanese": "\u4fa1\u683c\u306b\u306f\u9069\u7528\u7a0e\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u8cfc\u5165\u306fApple\u304c\u51e6\u7406\u30fb\u8acb\u6c42\u3057\u307e\u3059\u3002\u5b9f\u969b\u306e\u4fa1\u683c\u306f\u5730\u57df\u3068\u901a\u8ca8\u306b\u3088\u3063\u3066\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",
    "Chinese": "\u4ef7\u683c\u5305\u542b\u9002\u7528\u7a0e\u8d39\u3002\u6240\u6709\u8d2d\u4e70\u5747\u7531Apple\u5904\u7406\u548c\u8ba1\u8d39\u3002\u5b9e\u9645\u4ef7\u683c\u53ef\u80fd\u56e0\u5730\u533a\u548c\u8d27\u5e01\u800c\u5f02\u3002",
    "Ukrainian": "\u0426\u0456\u043d\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u044c \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u043d\u0456 \u043f\u043e\u0434\u0430\u0442\u043a\u0438. \u0423\u0441\u0456 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u0442\u0430 \u043e\u043f\u043b\u0430\u0447\u0443\u044e\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Apple. \u0424\u0430\u043a\u0442\u0438\u0447\u043d\u0430 \u0446\u0456\u043d\u0430 \u043c\u043e\u0436\u0435 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0442\u0438\u0441\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u043e \u0432\u0456\u0434 \u0440\u0435\u0433\u0456\u043e\u043d\u0443 \u0442\u0430 \u0432\u0430\u043b\u044e\u0442\u0438.",
    "Portuguese": "Os precos incluem impostos aplicaveis. Todas as compras sao processadas e cobradas pela Apple. O preco real pode variar conforme a regiao e moeda.",
}

base = "LumenLingo/LumenLingo/Models/Localization"
for lang, text in translations.items():
    path = os.path.join(base, f"AppStrings+{lang}.swift")
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find subscriptionCancelSteps line and add after it
    anchor = 'subscriptionCancelSteps'
    lines = content.split('\n')
    new_lines = []
    inserted = False
    for line in lines:
        new_lines.append(line)
        if anchor in line and not inserted:
            # Get indentation from the current line
            indent = len(line) - len(line.lstrip())
            spaces = ' ' * indent
            new_lines.append(f'{spaces}subscriptionVATNotice: "{text}",')
            inserted = True
    
    if not inserted:
        print(f"{lang}: ERROR - anchor not found")
        continue
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    
    # Verify the count
    count = '\n'.join(new_lines).count('subscriptionVATNotice')
    print(f"{lang}: OK ({count} occurrence{'s' if count > 1 else ''})")

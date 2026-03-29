#!/usr/bin/env python3
"""Add subscriptionEUConsumerRights and subscriptionCancelSteps to all locale files."""

import re

BASE = "LumenLingo/LumenLingo/Models/Localization"

# Translations for subscriptionEUConsumerRights
EU_RIGHTS = {
    "English": 'subscriptionEUConsumerRights: "Your rights under the EU Consumer Rights Directive (2011/83/EU) and UK Consumer Contracts Regulations 2013 are fully respected. Pre-contractual information, right of withdrawal, and prohibition of hidden charges all apply.",',
    "German": 'subscriptionEUConsumerRights: "Ihre Rechte gemaess der EU-Verbraucherrechterichtlinie (2011/83/EU) und den UK Consumer Contracts Regulations 2013 werden vollstaendig gewahrt. Vorvertragliche Informationspflichten, Widerrufsrecht und das Verbot versteckter Kosten gelten.",',
    "Spanish": 'subscriptionEUConsumerRights: "Sus derechos en virtud de la Directiva de Derechos del Consumidor de la UE (2011/83/UE) y las UK Consumer Contracts Regulations 2013 son plenamente respetados. Se aplican la informacion precontractual, el derecho de desistimiento y la prohibicion de cargos ocultos.",',
    "French": 'subscriptionEUConsumerRights: "Vos droits au titre de la Directive europeenne relative aux droits des consommateurs (2011/83/UE) et des UK Consumer Contracts Regulations 2013 sont pleinement respectes. Information precontractuelle, droit de retractation et interdiction des frais caches s\'appliquent.",',
    "Polish": 'subscriptionEUConsumerRights: "Twoje prawa wynikajace z Dyrektywy o prawach konsumenta UE (2011/83/UE) oraz UK Consumer Contracts Regulations 2013 sa w pelni respektowane. Obowiazuja informacje przedumowne, prawo do odstapienia i zakaz ukrytych oplat.",',
    "Arabic": 'subscriptionEUConsumerRights: "\\u062D\\u0642\\u0648\\u0642\\u0643 \\u0628\\u0645\\u0648\\u062C\\u0628 \\u062A\\u0648\\u062C\\u064A\\u0647 \\u062D\\u0642\\u0648\\u0642 \\u0627\\u0644\\u0645\\u0633\\u062A\\u0647\\u0644\\u0643 \\u0641\\u064A \\u0627\\u0644\\u0627\\u062A\\u062D\\u0627\\u062F \\u0627\\u0644\\u0623\\u0648\\u0631\\u0648\\u0628\\u064A (2011/83/EU) \\u0648\\u0644\\u0648\\u0627\\u0626\\u062D \\u0639\\u0642\\u0648\\u062F \\u0627\\u0644\\u0645\\u0633\\u062A\\u0647\\u0644\\u0643 \\u0641\\u064A \\u0627\\u0644\\u0645\\u0645\\u0644\\u0643\\u0629 \\u0627\\u0644\\u0645\\u062A\\u062D\\u062F\\u0629 2013 \\u0645\\u062D\\u062A\\u0631\\u0645\\u0629 \\u0628\\u0627\\u0644\\u0643\\u0627\\u0645\\u0644. \\u062A\\u0646\\u0637\\u0628\\u0642 \\u0627\\u0644\\u0645\\u0639\\u0644\\u0648\\u0645\\u0627\\u062A \\u0642\\u0628\\u0644 \\u0627\\u0644\\u062A\\u0639\\u0627\\u0642\\u062F\\u064A\\u0629 \\u0648\\u062D\\u0642 \\u0627\\u0644\\u0627\\u0646\\u0633\\u062D\\u0627\\u0628 \\u0648\\u062D\\u0638\\u0631 \\u0627\\u0644\\u0631\\u0633\\u0648\\u0645 \\u0627\\u0644\\u0645\\u062E\\u0641\\u064A\\u0629.",',
    "Japanese": 'subscriptionEUConsumerRights: "EU\\u6D88\\u8CBB\\u8005\\u6A29\\u5229\\u6307\\u4EE4\\uFF082011/83/EU\\uFF09\\u304A\\u3088\\u3073\\u82F1\\u56FD\\u6D88\\u8CBB\\u8005\\u5951\\u7D04\\u898F\\u52472013\\u306B\\u57FA\\u3065\\u304F\\u3042\\u306A\\u305F\\u306E\\u6A29\\u5229\\u306F\\u5B8C\\u5168\\u306B\\u5C0A\\u91CD\\u3055\\u308C\\u307E\\u3059\\u3002\\u5951\\u7D04\\u524D\\u60C5\\u5831\\u3001\\u64A4\\u56DE\\u6A29\\u3001\\u96A0\\u308C\\u305F\\u8ACB\\u6C42\\u306E\\u7981\\u6B62\\u304C\\u9069\\u7528\\u3055\\u308C\\u307E\\u3059\\u3002",',
    "Chinese": 'subscriptionEUConsumerRights: "\\u60A8\\u6839\\u636E\\u6B27\\u76DF\\u6D88\\u8D39\\u8005\\u6743\\u5229\\u6307\\u4EE4\\uFF082011/83/EU\\uFF09\\u548C\\u82F1\\u56FD\\u6D88\\u8D39\\u8005\\u5408\\u540C\\u6CD5\\u89C4 2013 \\u4EAB\\u6709\\u7684\\u6743\\u5229\\u5F97\\u5230\\u5145\\u5206\\u5C0A\\u91CD\\u3002\\u5408\\u540C\\u524D\\u4FE1\\u606F\\u3001\\u64A4\\u56DE\\u6743\\u548C\\u7981\\u6B62\\u9690\\u85CF\\u6536\\u8D39\\u5747\\u9002\\u7528\\u3002",',
    "Ukrainian": 'subscriptionEUConsumerRights: "\\u0412\\u0430\\u0448\\u0456 \\u043F\\u0440\\u0430\\u0432\\u0430 \\u0437\\u0433\\u0456\\u0434\\u043D\\u043E \\u0437 \\u0414\\u0438\\u0440\\u0435\\u043A\\u0442\\u0438\\u0432\\u043E\\u044E \\u0404\\u0421 \\u043F\\u0440\\u043E \\u043F\\u0440\\u0430\\u0432\\u0430 \\u0441\\u043F\\u043E\\u0436\\u0438\\u0432\\u0430\\u0447\\u0456\\u0432 (2011/83/EU) \\u0442\\u0430 \\u041F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430\\u043C\\u0438 \\u0441\\u043F\\u043E\\u0436\\u0438\\u0432\\u0447\\u0438\\u0445 \\u0434\\u043E\\u0433\\u043E\\u0432\\u043E\\u0440\\u0456\\u0432 \\u0412\\u0435\\u043B\\u0438\\u043A\\u043E\\u0457 \\u0411\\u0440\\u0438\\u0442\\u0430\\u043D\\u0456\\u0457 2013 \\u043F\\u043E\\u0432\\u043D\\u0456\\u0441\\u0442\\u044E \\u0434\\u043E\\u0442\\u0440\\u0438\\u043C\\u0443\\u044E\\u0442\\u044C\\u0441\\u044F. \\u0414\\u043E\\u0434\\u043E\\u0433\\u043E\\u0432\\u0456\\u0440\\u043D\\u0430 \\u0456\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0456\\u044F, \\u043F\\u0440\\u0430\\u0432\\u043E \\u043D\\u0430 \\u0432\\u0456\\u0434\\u043A\\u043B\\u0438\\u043A\\u0430\\u043D\\u043D\\u044F \\u0442\\u0430 \\u0437\\u0430\\u0431\\u043E\\u0440\\u043E\\u043D\\u0430 \\u043F\\u0440\\u0438\\u0445\\u043E\\u0432\\u0430\\u043D\\u0438\\u0445 \\u043F\\u043B\\u0430\\u0442\\u0435\\u0436\\u0456\\u0432 \\u0437\\u0430\\u0441\\u0442\\u043E\\u0441\\u043E\\u0432\\u0443\\u044E\\u0442\\u044C\\u0441\\u044F.",',
}

# Translations for subscriptionCancelSteps
CANCEL_STEPS = {
    "English": 'subscriptionCancelSteps: "To cancel: open Settings > tap your name > Subscriptions > LumenLingo > Cancel Subscription. Cancellation takes effect at the end of the current billing period.",',
    "German": 'subscriptionCancelSteps: "Zum Kuendigen: Einstellungen oeffnen > auf Ihren Namen tippen > Abonnements > LumenLingo > Abo kuendigen. Die Kuendigung wird zum Ende des aktuellen Abrechnungszeitraums wirksam.",',
    "Spanish": 'subscriptionCancelSteps: "Para cancelar: abra Ajustes > toque su nombre > Suscripciones > LumenLingo > Cancelar suscripcion. La cancelacion se hace efectiva al final del periodo de facturacion actual.",',
    "French": 'subscriptionCancelSteps: "Pour annuler : ouvrez Reglages > touchez votre nom > Abonnements > LumenLingo > Annuler l\'abonnement. L\'annulation prend effet a la fin de la periode de facturation en cours.",',
    "Polish": 'subscriptionCancelSteps: "Aby anulowac: otworz Ustawienia > dotknij swoje imie > Subskrypcje > LumenLingo > Anuluj subskrypcje. Anulowanie wchodzi w zycie na koniec biezacego okresu rozliczeniowego.",',
    "Arabic": 'subscriptionCancelSteps: "\\u0644\\u0644\\u0625\\u0644\\u063A\\u0627\\u0621: \\u0627\\u0641\\u062A\\u062D \\u0627\\u0644\\u0625\\u0639\\u062F\\u0627\\u062F\\u0627\\u062A > \\u0627\\u0646\\u0642\\u0631 \\u0639\\u0644\\u0649 \\u0627\\u0633\\u0645\\u0643 > \\u0627\\u0644\\u0627\\u0634\\u062A\\u0631\\u0627\\u0643\\u0627\\u062A > LumenLingo > \\u0625\\u0644\\u063A\\u0627\\u0621 \\u0627\\u0644\\u0627\\u0634\\u062A\\u0631\\u0627\\u0643. \\u064A\\u0633\\u0631\\u064A \\u0627\\u0644\\u0625\\u0644\\u063A\\u0627\\u0621 \\u0641\\u064A \\u0646\\u0647\\u0627\\u064A\\u0629 \\u0641\\u062A\\u0631\\u0629 \\u0627\\u0644\\u0641\\u0648\\u062A\\u0631\\u0629 \\u0627\\u0644\\u062D\\u0627\\u0644\\u064A\\u0629.",',
    "Japanese": 'subscriptionCancelSteps: "\\u89E3\\u7D04\\u65B9\\u6CD5\\uFF1A\\u8A2D\\u5B9A\\u3092\\u958B\\u304F > \\u81EA\\u5206\\u306E\\u540D\\u524D\\u3092\\u30BF\\u30C3\\u30D7 > \\u30B5\\u30D6\\u30B9\\u30AF\\u30EA\\u30D7\\u30B7\\u30E7\\u30F3 > LumenLingo > \\u30B5\\u30D6\\u30B9\\u30AF\\u30EA\\u30D7\\u30B7\\u30E7\\u30F3\\u3092\\u30AD\\u30E3\\u30F3\\u30BB\\u30EB\\u3002\\u30AD\\u30E3\\u30F3\\u30BB\\u30EB\\u306F\\u73FE\\u5728\\u306E\\u8ACB\\u6C42\\u671F\\u9593\\u306E\\u7D42\\u4E86\\u6642\\u306B\\u6709\\u52B9\\u306B\\u306A\\u308A\\u307E\\u3059\\u3002",',
    "Chinese": 'subscriptionCancelSteps: "\\u53D6\\u6D88\\u65B9\\u6CD5\\uFF1A\\u6253\\u5F00\\u8BBE\\u7F6E > \\u70B9\\u51FB\\u60A8\\u7684\\u540D\\u5B57 > \\u8BA2\\u9605 > LumenLingo > \\u53D6\\u6D88\\u8BA2\\u9605\\u3002\\u53D6\\u6D88\\u5C06\\u5728\\u5F53\\u524D\\u8BA1\\u8D39\\u5468\\u671F\\u7ED3\\u675F\\u65F6\\u751F\\u6548\\u3002",',
    "Ukrainian": 'subscriptionCancelSteps: "\\u0429\\u043E\\u0431 \\u0441\\u043A\\u0430\\u0441\\u0443\\u0432\\u0430\\u0442\\u0438: \\u0432\\u0456\\u0434\\u043A\\u0440\\u0438\\u0439\\u0442\\u0435 \\u041D\\u0430\\u043B\\u0430\\u0448\\u0442\\u0443\\u0432\\u0430\\u043D\\u043D\\u044F > \\u0442\\u043E\\u0440\\u043A\\u043D\\u0456\\u0442\\u044C\\u0441\\u044F \\u0441\\u0432\\u043E\\u0433\\u043E \\u0456\\u043C\\u0435\\u043D\\u0456 > \\u041F\\u0456\\u0434\\u043F\\u0438\\u0441\\u043A\\u0438 > LumenLingo > \\u0421\\u043A\\u0430\\u0441\\u0443\\u0432\\u0430\\u0442\\u0438 \\u043F\\u0456\\u0434\\u043F\\u0438\\u0441\\u043A\\u0443. \\u0421\\u043A\\u0430\\u0441\\u0443\\u0432\\u0430\\u043D\\u043D\\u044F \\u043D\\u0430\\u0431\\u0443\\u0432\\u0430\\u0454 \\u0447\\u0438\\u043D\\u043D\\u043E\\u0441\\u0442\\u0456 \\u043F\\u0456\\u0441\\u043B\\u044F \\u0437\\u0430\\u043A\\u0456\\u043D\\u0447\\u0435\\u043D\\u043D\\u044F \\u043F\\u043E\\u0442\\u043E\\u0447\\u043D\\u043E\\u0433\\u043E \\u0440\\u043E\\u0437\\u0440\\u0430\\u0445\\u0443\\u043D\\u043A\\u043E\\u0432\\u043E\\u0433\\u043E \\u043F\\u0435\\u0440\\u0456\\u043E\\u0434\\u0443.",',
}

LOCALES = ["English", "German", "Spanish", "French", "Polish", "Arabic", "Japanese", "Chinese", "Ukrainian"]

for lang in LOCALES:
    path = f"{BASE}/AppStrings+{lang}.swift"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the subscriptionContractDuration line and add after it
    anchor = 'subscriptionContractDuration:'
    idx = content.find(anchor)
    if idx == -1:
        print(f"{lang}: ANCHOR NOT FOUND")
        continue

    # Find end of that line
    eol = content.index('\n', idx)
    insert_pos = eol + 1

    new_lines = f"        {EU_RIGHTS[lang]}\n        {CANCEL_STEPS[lang]}\n"
    content = content[:insert_pos] + new_lines + content[insert_pos:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"{lang}: OK")

print("Done.")

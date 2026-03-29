#!/usr/bin/env python3
"""Add Privacy.commercialTermsReference key to all 9 locale files."""

import json
import glob
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

CROSS_REFS = {
    "en": "For information about VAT treatment, pricing display compliance, sanctions compliance, and encryption export controls, please see our <termsLink>Terms of Service</termsLink>.",
    "pl": "Informacje dotyczące opodatkowania VAT, zgodności cen, sankcji handlowych i kontroli eksportu szyfrowania znajdują się w naszych <termsLink>Warunkach korzystania z usługi</termsLink>.",
    "de": "Informationen zur Mehrwertsteuerbehandlung, Preisauszeichnungskonformität, Sanktionseinhaltung und Verschlüsselungsexportkontrollen finden Sie in unseren <termsLink>Nutzungsbedingungen</termsLink>.",
    "es": "Para obtener información sobre el tratamiento del IVA, la conformidad en la visualización de precios, el cumplimiento de sanciones y los controles de exportación de cifrado, consulte nuestros <termsLink>Términos de servicio</termsLink>.",
    "fr": "Pour des informations sur le traitement de la TVA, la conformité d'affichage des prix, la conformité aux sanctions et les contrôles d'exportation de chiffrement, veuillez consulter nos <termsLink>Conditions d'utilisation</termsLink>.",
    "ja": "VAT の取り扱い、価格表示のコンプライアンス、制裁遵守、暗号化輸出規制については、<termsLink>利用規約</termsLink>をご参照ください。",
    "zh": "有关增值税处理、价格展示合规、制裁合规和加密出口管制的信息，请参阅我们的<termsLink>服务条款</termsLink>。",
    "ar": "للحصول على معلومات حول معالجة ضريبة القيمة المضافة والامتثال لعرض الأسعار والامتثال للعقوبات وضوابط تصدير التشفير، يُرجى الاطلاع على <termsLink>شروط الخدمة</termsLink> الخاصة بنا.",
    "uk": "Для отримання інформації про обробку ПДВ, відповідність відображення цін, дотримання санкцій та контроль експорту шифрування, будь ласка, зверніться до наших <termsLink>Умов використання</termsLink>."
}

locale_files = sorted(glob.glob(os.path.join(MESSAGES_DIR, '*.json')))

for filepath in locale_files:
    locale = os.path.basename(filepath).replace('.json', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if locale in CROSS_REFS:
        data['Privacy']['commercialTermsReference'] = CROSS_REFS[locale]
        print(f'{locale}: added Privacy.commercialTermsReference')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')

print('\nDone!')

#!/usr/bin/env python3
"""Bump Privacy Policy v2.0→v2.1, Terms v1.0→v1.1, update lastUpdated, add changelog entries."""

import json
import glob
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

# Version strings per locale
VERSION_STRINGS = {
    "en": {"version": "Version 2.1", "termsVersion": "Version 1.1", "lastUpdated": "Last updated: 26 March 2026"},
    "pl": {"version": "Wersja 2.1", "termsVersion": "Wersja 1.1", "lastUpdated": "Ostatnia aktualizacja: 26 marca 2026"},
    "de": {"version": "Version 2.1", "termsVersion": "Version 1.1", "lastUpdated": "Zuletzt aktualisiert: 26. März 2026"},
    "es": {"version": "Versión 2.1", "termsVersion": "Versión 1.1", "lastUpdated": "Última actualización: 26 de marzo de 2026"},
    "fr": {"version": "Version 2.1", "termsVersion": "Version 1.1", "lastUpdated": "Dernière mise à jour : 26 mars 2026"},
    "ja": {"version": "バージョン 2.1", "termsVersion": "バージョン 1.1", "lastUpdated": "最終更新日：2026年3月26日"},
    "zh": {"version": "版本 2.1", "termsVersion": "版本 1.1", "lastUpdated": "最后更新：2026年3月26日"},
    "ar": {"version": "الإصدار 2.1", "termsVersion": "الإصدار 1.1", "lastUpdated": "آخر تحديث: 26 مارس 2026"},
    "uk": {"version": "Версія 2.1", "termsVersion": "Версія 1.1", "lastUpdated": "Останнє оновлення: 26 березня 2026"},
}

# Changelog entries
PRIVACY_CHANGELOG = {
    "en": "<b>v2.1</b> (26 March 2026) — Reorganised sections: moved commercial/regulatory compliance disclosures (VAT treatment, EU VAT, international tax, pricing compliance, sanctions, encryption export controls) to Terms of Service. Added cross-reference to Terms. Consolidated trademark attribution to shared Legal namespace. No content was removed.",
    "pl": "<b>v2.1</b> (26 marca 2026) — Reorganizacja sekcji: przeniesiono ujawnienia dotyczące zgodności handlowej/regulacyjnej (traktowanie VAT, VAT UE, podatek międzynarodowy, zgodność cenowa, sankcje, kontrola eksportu szyfrowania) do Warunków korzystania z usługi. Dodano odniesienie do Warunków. Skonsolidowano atrybucję znaku towarowego. Żadna treść nie została usunięta.",
    "de": "<b>v2.1</b> (26. März 2026) — Abschnitte neu organisiert: Kommerzielle/regulatorische Compliance-Offenlegungen (MwSt-Behandlung, EU-MwSt, internationale Steuern, Preiskonformität, Sanktionen, Verschlüsselungsexportkontrollen) in die Nutzungsbedingungen verschoben. Querverweis auf Nutzungsbedingungen hinzugefügt. Markenattribution konsolidiert. Keine Inhalte wurden entfernt.",
    "es": "<b>v2.1</b> (26 de marzo de 2026) — Secciones reorganizadas: se trasladaron las divulgaciones de cumplimiento comercial/regulatorio (tratamiento del IVA, IVA de la UE, impuestos internacionales, cumplimiento de precios, sanciones, controles de exportación de cifrado) a los Términos de servicio. Se añadió referencia cruzada a los Términos. Se consolidó la atribución de marcas registradas. No se eliminó ningún contenido.",
    "fr": "<b>v2.1</b> (26 mars 2026) — Sections réorganisées : les divulgations de conformité commerciale/réglementaire (traitement TVA, TVA UE, fiscalité internationale, conformité des prix, sanctions, contrôles d'exportation de chiffrement) ont été déplacées vers les Conditions d'utilisation. Référence croisée ajoutée. Attribution de marque consolidée. Aucun contenu n'a été supprimé.",
    "ja": "<b>v2.1</b>（2026年3月26日）— セクションを再編成：商業/規制コンプライアンス開示（VAT処理、EU VAT、国際税務、価格表示コンプライアンス、制裁、暗号化輸出規制）を利用規約に移動。利用規約への相互参照を追加。商標帰属を統合。コンテンツの削除はありません。",
    "zh": "<b>v2.1</b>（2026年3月26日）— 重新组织章节：将商业/监管合规披露（增值税处理、欧盟增值税、国际税收、价格合规、制裁、加密出口管制）移至服务条款。添加了指向服务条款的交叉引用。合并了商标归属。未删除任何内容。",
    "ar": "<b>v2.1</b> (26 مارس 2026) — إعادة تنظيم الأقسام: نُقلت إفصاحات الامتثال التجاري/التنظيمي (معالجة ضريبة القيمة المضافة، ضريبة القيمة المضافة في الاتحاد الأوروبي، الضرائب الدولية، امتثال التسعير، العقوبات، ضوابط تصدير التشفير) إلى شروط الخدمة. أُضيف مرجع تبادلي إلى الشروط. تم توحيد إسناد العلامات التجارية. لم يُحذف أي محتوى.",
    "uk": "<b>v2.1</b> (26 березня 2026) — Реорганізовано розділи: розкриття комерційної/регуляторної відповідності (обробка ПДВ, ПДВ ЄС, міжнародне оподаткування, відповідність цін, санкції, контроль експорту шифрування) переміщено до Умов використання. Додано перехресне посилання на Умови. Консолідовано атрибуцію товарних знаків. Жодного контенту не було видалено.",
}

TERMS_CHANGELOG = {
    "en": "<b>v1.1</b> (26 March 2026) — Added commercial/regulatory compliance sections moved from Privacy Policy: VAT & Tax Treatment, EU VAT on Digital Services, International Tax Obligations, Pricing Display Compliance, Sanctions & Trade Compliance, Encryption & Export Controls. Aggregate Data section replaced with cross-reference to Privacy Policy. Removed duplicate Governing Law TOC entry. Consolidated trademark attribution.",
    "pl": "<b>v1.1</b> (26 marca 2026) — Dodano sekcje zgodności handlowej/regulacyjnej przeniesione z Polityki Prywatności: traktowanie VAT, VAT UE, międzynarodowe zobowiązania podatkowe, zgodność cenowa, sankcje handlowe, kontrole eksportu szyfrowania. Sekcja Danych zagregowanych zastąpiona odnośnikiem do Polityki Prywatności. Usunięto zduplikowany wpis Prawa właściwego w spisie treści. Skonsolidowano atrybucję znaku towarowego.",
    "de": "<b>v1.1</b> (26. März 2026) — Kommerzielle/regulatorische Compliance-Abschnitte aus der Datenschutzrichtlinie hinzugefügt: MwSt-Behandlung, EU-MwSt, internationale Steuerpflichten, Preisauszeichnungskonformität, Sanktionen, Verschlüsselungsexportkontrollen. Abschnitt Aggregierte Daten durch Querverweis auf Datenschutzrichtlinie ersetzt. Duplikat des Inhaltsverzeichniseintrags für Geltendes Recht entfernt. Markenattribution konsolidiert.",
    "es": "<b>v1.1</b> (26 de marzo de 2026) — Se añadieron secciones de cumplimiento comercial/regulatorio trasladadas desde la Política de Privacidad: tratamiento del IVA, IVA de la UE, obligaciones fiscales internacionales, cumplimiento de precios, sanciones comerciales, controles de exportación de cifrado. La sección de Datos agregados fue reemplazada con una referencia cruzada a la Política de Privacidad. Se eliminó la entrada duplicada de Ley aplicable en el índice. Se consolidó la atribución de marcas.",
    "fr": "<b>v1.1</b> (26 mars 2026) — Sections de conformité commerciale/réglementaire ajoutées depuis la Politique de Confidentialité : traitement TVA, TVA UE, obligations fiscales internationales, conformité des prix, sanctions commerciales, contrôles d'exportation de chiffrement. Section Données agrégées remplacée par une référence croisée. Entrée dupliquée Droit applicable supprimée de la table des matières. Attribution de marque consolidée.",
    "ja": "<b>v1.1</b>（2026年3月26日）— プライバシーポリシーから商業/規制コンプライアンスセクションを追加：VAT処理、EU VAT、国際税務義務、価格表示コンプライアンス、制裁・貿易コンプライアンス、暗号化輸出規制。集約データセクションをプライバシーポリシーへの相互参照に置換。準拠法の重複目次エントリを削除。商標帰属を統合。",
    "zh": "<b>v1.1</b>（2026年3月26日）— 从隐私政策移入商业/监管合规章节：增值税处理、欧盟增值税、国际税务义务、价格展示合规、制裁与贸易合规、加密出口管制。汇总数据章节替换为指向隐私政策的交叉引用。删除了重复的管辖法律目录条目。合并了商标归属。",
    "ar": "<b>v1.1</b> (26 مارس 2026) — أُضيفت أقسام الامتثال التجاري/التنظيمي المنقولة من سياسة الخصوصية: معالجة ضريبة القيمة المضافة، ضريبة القيمة المضافة في الاتحاد الأوروبي، الالتزامات الضريبية الدولية، امتثال عرض الأسعار، العقوبات التجارية، ضوابط تصدير التشفير. استُبدل قسم البيانات المجمّعة بمرجع تبادلي إلى سياسة الخصوصية. أُزيل الإدخال المكرر للقانون الحاكم في جدول المحتويات. تم توحيد إسناد العلامات التجارية.",
    "uk": "<b>v1.1</b> (26 березня 2026) — Додано розділи комерційної/регуляторної відповідності з Політики конфіденційності: обробка ПДВ, ПДВ ЄС, міжнародні податкові зобов'язання, відповідність відображення цін, санкції та торгова відповідність, контроль експорту шифрування. Розділ Агрегованих даних замінено перехресним посиланням на Політику конфіденційності. Видалено дублікат запису Застосовне право у змісті. Консолідовано атрибуцію товарних знаків.",
}

locale_files = sorted(glob.glob(os.path.join(MESSAGES_DIR, '*.json')))

for filepath in locale_files:
    locale = os.path.basename(filepath).replace('.json', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if locale not in VERSION_STRINGS:
        continue
    
    vs = VERSION_STRINGS[locale]
    
    # Bump Legal.version and Legal.termsVersion
    data['Legal']['version'] = vs['version']
    data['Legal']['termsVersion'] = vs['termsVersion']
    data['Legal']['lastUpdated'] = vs['lastUpdated']
    
    # Add Privacy changelog entry
    data['Privacy']['policyUpdates']['v2_1'] = PRIVACY_CHANGELOG[locale]
    
    # Add Terms changelog entry
    data['Terms']['changes']['v1_1'] = TERMS_CHANGELOG[locale]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')
    
    print(f'{locale}: bumped versions, added changelog entries')

print('\nDone!')

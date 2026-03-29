#!/usr/bin/env python3
"""Replace Terms.aggregateData content with a cross-reference to Privacy Policy."""

import json
import glob
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

CROSS_REF = {
    "en": {
        "heading": "Aggregated & De-identified Data",
        "crossReference": "Our practices regarding the collection, use, and protection of aggregated and de-identified data are described in detail in our Privacy Policy. Please refer to the Aggregated & De-identified Data section of our <privacyLink>Privacy Policy</privacyLink> for full details."
    },
    "pl": {
        "heading": "Dane zagregowane i zanonimizowane",
        "crossReference": "Nasze praktyki dotyczące gromadzenia, wykorzystywania i ochrony danych zagregowanych i zanonimizowanych są szczegółowo opisane w naszej Polityce Prywatności. Prosimy o zapoznanie się z sekcją Dane zagregowane i zanonimizowane w naszej <privacyLink>Polityce Prywatności</privacyLink>."
    },
    "de": {
        "heading": "Aggregierte und anonymisierte Daten",
        "crossReference": "Unsere Praktiken bezüglich der Erhebung, Nutzung und des Schutzes aggregierter und anonymisierter Daten werden in unserer Datenschutzrichtlinie ausführlich beschrieben. Bitte lesen Sie den Abschnitt Aggregierte und anonymisierte Daten in unserer <privacyLink>Datenschutzrichtlinie</privacyLink>."
    },
    "es": {
        "heading": "Datos agregados y anonimizados",
        "crossReference": "Nuestras prácticas con respecto a la recopilación, uso y protección de datos agregados y anonimizados se describen en detalle en nuestra Política de Privacidad. Consulte la sección de Datos agregados y anonimizados de nuestra <privacyLink>Política de Privacidad</privacyLink>."
    },
    "fr": {
        "heading": "Données agrégées et anonymisées",
        "crossReference": "Nos pratiques concernant la collecte, l'utilisation et la protection des données agrégées et anonymisées sont décrites en détail dans notre Politique de Confidentialité. Veuillez consulter la section Données agrégées et anonymisées de notre <privacyLink>Politique de Confidentialité</privacyLink>."
    },
    "ja": {
        "heading": "集約データおよび匿名化データ",
        "crossReference": "集約データおよび匿名化データの収集、使用、保護に関する当社の実践は、プライバシーポリシーに詳細に記載されています。詳細については、<privacyLink>プライバシーポリシー</privacyLink>の集約データおよび匿名化データのセクションをご参照ください。"
    },
    "zh": {
        "heading": "汇总和去标识化数据",
        "crossReference": "我们关于汇总和去标识化数据的收集、使用和保护的做法在我们的隐私政策中有详细描述。请参阅我们<privacyLink>隐私政策</privacyLink>中的汇总和去标识化数据部分以了解完整详情。"
    },
    "ar": {
        "heading": "البيانات المجمّعة ومنزوعة الهوية",
        "crossReference": "تم وصف ممارساتنا المتعلقة بجمع واستخدام وحماية البيانات المجمّعة ومنزوعة الهوية بالتفصيل في سياسة الخصوصية الخاصة بنا. يُرجى الرجوع إلى قسم البيانات المجمّعة ومنزوعة الهوية في <privacyLink>سياسة الخصوصية</privacyLink> الخاصة بنا للاطلاع على التفاصيل الكاملة."
    },
    "uk": {
        "heading": "Агреговані та знеособлені дані",
        "crossReference": "Наші практики щодо збору, використання та захисту агрегованих та знеособлених даних детально описані в нашій Політиці конфіденційності. Будь ласка, зверніться до розділу Агреговані та знеособлені дані нашої <privacyLink>Політики конфіденційності</privacyLink> для повної інформації."
    }
}

locale_files = sorted(glob.glob(os.path.join(MESSAGES_DIR, '*.json')))

for filepath in locale_files:
    locale = os.path.basename(filepath).replace('.json', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if locale in CROSS_REF:
        data['Terms']['aggregateData'] = CROSS_REF[locale]
        print(f'{locale}: replaced Terms.aggregateData with cross-reference')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')

print('\nDone!')

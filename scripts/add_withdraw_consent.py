#!/usr/bin/env python3
"""Story 9.4: Add right to withdraw consent (gdprLi8) to yourRights in all locales."""
import json
import os

MESSAGES_DIR = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages'
LOCALES = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']

WITHDRAW_CONSENT = {
    "en": "Right to withdraw consent — where we rely on consent as a legal basis (e.g., analytics), you may withdraw your consent at any time by adjusting your cookie preferences or contacting us at <emailLink>legal@lumenlingo.com</emailLink>. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.",
    "pl": "Prawo do wycofania zgody — w przypadku gdy opieramy się na zgodzie jako podstawie prawnej (np. analityka), możesz wycofać swoją zgodę w dowolnym momencie, dostosowując preferencje plików cookie lub kontaktując się z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>. Wycofanie nie wpływa na zgodność z prawem przetwarzania dokonanego przed wycofaniem.",
    "de": "Recht auf Widerruf der Einwilligung — soweit wir auf Einwilligung als Rechtsgrundlage setzen (z.B. Analysen), können Sie Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre Cookie-Einstellungen anpassen oder uns unter <emailLink>legal@lumenlingo.com</emailLink> kontaktieren. Der Widerruf berührt nicht die Rechtmäßigkeit der vor dem Widerruf erfolgten Verarbeitung.",
    "es": "Derecho a retirar el consentimiento — cuando nos basamos en el consentimiento como base legal (p. ej., analítica), puede retirar su consentimiento en cualquier momento ajustando sus preferencias de cookies o contactándonos en <emailLink>legal@lumenlingo.com</emailLink>. La retirada no afecta a la licitud del tratamiento realizado antes de la retirada.",
    "fr": "Droit de retirer le consentement — lorsque nous nous fondons sur le consentement comme base juridique (p. ex., analyses), vous pouvez retirer votre consentement à tout moment en ajustant vos préférences de cookies ou en nous contactant à <emailLink>legal@lumenlingo.com</emailLink>. Le retrait n'affecte pas la licéité du traitement effectué avant le retrait.",
    "ja": "同意を撤回する権利 — 同意を法的根拠として使用している場合（例：アナリティクス）、Cookieの設定を調整するか、<emailLink>legal@lumenlingo.com</emailLink>にご連絡いただくことで、いつでも同意を撤回できます。撤回は、撤回前に行われた処理の適法性には影響しません。",
    "zh": "撤回同意的权利 — 当我们依赖同意作为法律依据时（例如分析），您可以随时通过调整Cookie偏好或联系<emailLink>legal@lumenlingo.com</emailLink>来撤回您的同意。撤回不影响撤回前已进行处理的合法性。",
    "ar": "الحق في سحب الموافقة — عندما نعتمد على الموافقة كأساس قانوني (مثل التحليلات)، يمكنك سحب موافقتك في أي وقت عن طريق تعديل تفضيلات ملفات تعريف الارتباط أو الاتصال بنا على <emailLink>legal@lumenlingo.com</emailLink>. لا يؤثر السحب على قانونية المعالجة التي تمت قبل السحب.",
    "uk": "Право на відкликання згоди — якщо ми покладаємося на згоду як правову основу (наприклад, аналітика), ви можете відкликати свою згоду в будь-який час, змінивши налаштування файлів cookie або зв'язавшись з нами за адресою <emailLink>legal@lumenlingo.com</emailLink>. Відкликання не впливає на законність обробки, здійсненої до відкликання."
}

for locale in LOCALES:
    fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
    with open(fname, 'r', encoding='utf-8') as f:
        data = json.load(f)

    yr = data['Privacy']['yourRights']
    if 'gdprLi8' not in yr:
        # Insert gdprLi8 after gdprLi7
        new_yr = {}
        for k, v in yr.items():
            new_yr[k] = v
            if k == 'gdprLi7':
                new_yr['gdprLi8'] = WITHDRAW_CONSENT[locale]
        data['Privacy']['yourRights'] = new_yr
        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')
        print(f'{locale}.json: added gdprLi8 (withdraw consent)')
    else:
        print(f'{locale}.json: gdprLi8 already exists')

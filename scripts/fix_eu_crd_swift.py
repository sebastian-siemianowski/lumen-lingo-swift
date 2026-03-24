#!/usr/bin/env python3
"""Fix duplicated subscriptionEUConsumerRights/subscriptionCancelSteps
in non-Latin AppStrings files. Remove all occurrences and re-insert
with proper UTF-8 text (not Python \\uXXXX escapes)."""

import re

BASE = "LumenLingo/LumenLingo/Models/Localization"

REPLACEMENTS = {
    "Arabic": {
        "subscriptionEUConsumerRights": '        subscriptionEUConsumerRights: "حقوقك بموجب توجيه حقوق المستهلك في الاتحاد الأوروبي (2011/83/EU) وقواعد عقود المستهلكين في المملكة المتحدة 2013 محترمة بالكامل. المعلومات قبل التعاقدية وحق الانسحاب وحظر الرسوم المخفية مطبقة.",',
        "subscriptionCancelSteps": '        subscriptionCancelSteps: "للإلغاء: افتح الإعدادات > انقر على اسمك > الاشتراكات > LumenLingo > إلغاء الاشتراك. يسري الإلغاء في نهاية فترة الفوترة الحالية.",',
    },
    "Chinese": {
        "subscriptionEUConsumerRights": '        subscriptionEUConsumerRights: "您根据欧盟消费者权利指令(2011/83/EU)和英国2013年消费者合同规定享有的权利得到充分尊重。合同前信息、撤回权和禁止隐藏收费均适用。",',
        "subscriptionCancelSteps": '        subscriptionCancelSteps: "取消方法：打开设置 > 点击您的姓名 > 订阅 > LumenLingo > 取消订阅。取消将在当前计费周期结束时生效。",',
    },
    "Japanese": {
        "subscriptionEUConsumerRights": '        subscriptionEUConsumerRights: "EU消費者権利指令(2011/83/EU)および英国2013年消費者契約規則に基づくお客様の権利は完全に遵守されています。契約前情報、撤回権、隠れた料金の禁止が適用されます。",',
        "subscriptionCancelSteps": '        subscriptionCancelSteps: "解約するには：設定を開く > 自分の名前をタップ > サブスクリプション > LumenLingo > サブスクリプションをキャンセル。解約は現在の請求期間の終了時に有効になります。",',
    },
    "Ukrainian": {
        "subscriptionEUConsumerRights": '        subscriptionEUConsumerRights: "Ваші права згідно з Директивою ЄС про права споживачів (2011/83/EU) та Правилами споживчих договорів Великої Британії 2013 повністю дотримуються. Додоговірна інформація, право на відкликання та заборона прихованих платежів застосовуються.",',
        "subscriptionCancelSteps": '        subscriptionCancelSteps: "Щоб скасувати: відкрийте Налаштування > торкніться свого імені > Підписки > LumenLingo > Скасувати підписку. Скасування набуває чинності після закінчення поточного розрахункового періоду.",',
    },
}

for lang, strings in REPLACEMENTS.items():
    path = f"{BASE}/AppStrings+{lang}.swift"
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Remove all lines containing the two keys
    filtered = [l for l in lines if 'subscriptionEUConsumerRights:' not in l and 'subscriptionCancelSteps:' not in l]

    # Find the insertion point: after subscriptionContractDuration
    insert_idx = None
    for i, l in enumerate(filtered):
        if 'subscriptionContractDuration:' in l:
            insert_idx = i + 1
            break

    if insert_idx is None:
        print(f"{lang}: ERROR - could not find subscriptionContractDuration")
        continue

    # Insert the two new lines
    new_lines = [strings["subscriptionEUConsumerRights"] + "\n", strings["subscriptionCancelSteps"] + "\n"]
    filtered[insert_idx:insert_idx] = new_lines

    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(filtered)
    print(f"{lang}: OK")

print("Done.")

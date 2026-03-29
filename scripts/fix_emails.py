#!/usr/bin/env python3
"""Story 8.1: Replace all legal-context email addresses with legal@lumenlingo.com."""
import json
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

KEEP_KEYS = {'Contact'}

OLD_EMAILS = ['support@lumenlingo.com', 'support@lumenshore.com', 'legal@lumenshore.com']
NEW_EMAIL = 'legal@lumenlingo.com'


def replace_emails(obj, top_key=''):
    count = 0
    if isinstance(obj, str):
        new = obj
        for old in OLD_EMAILS:
            if old in new:
                new = new.replace(old, NEW_EMAIL)
                count += 1
        return new, count
    elif isinstance(obj, dict):
        new_dict = {}
        for k, v in obj.items():
            current_top = top_key if top_key else k
            if not top_key and k in KEEP_KEYS:
                new_dict[k] = v
                continue
            new_v, c = replace_emails(v, current_top)
            new_dict[k] = new_v
            count += c
        return new_dict, count
    elif isinstance(obj, list):
        new_list = []
        for item in obj:
            new_item, c = replace_emails(item, top_key)
            new_list.append(new_item)
            count += c
        return new_list, count
    else:
        return obj, 0


locales = ['en', 'pl', 'de', 'es', 'fr', 'ja', 'zh', 'ar', 'uk']
total = 0

for locale in locales:
    fname = os.path.join(MESSAGES_DIR, f'{locale}.json')
    with open(fname, 'r', encoding='utf-8') as f:
        data = json.load(f)

    new_data, count = replace_emails(data)

    with open(fname, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, ensure_ascii=False, indent=2)
        f.write('\n')

    print(f'{locale}.json: {count} replacements')
    total += count

print(f'\nTotal: {total} replacements across {len(locales)} locales')

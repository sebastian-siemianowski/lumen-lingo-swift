import json

WB_FILE = 'LumenLingo/LumenLingo/Resources/Content/polish_chinese/wordbuilder_polish_chinese.json'

with open(WB_FILE, encoding='utf-8') as f:
    data = json.load(f)

errors = []
all_words = []
all_keys = []

for i, cat in enumerate(data):
    for field in ['key','name','description','iconName','color','level','items']:
        if field not in cat:
            errors.append(f'Cat {i}: missing field {field}')
    
    if cat['key'] in all_keys:
        errors.append(f'Duplicate category key: {cat["key"]}')
    all_keys.append(cat['key'])
    
    if len(cat['items']) != 15:
        errors.append(f'{cat["key"]}: has {len(cat["items"])} items (expected 15)')
    
    for item in cat['items']:
        if 'word' not in item or 'hint' not in item:
            errors.append(f'{cat["key"]}: item missing word/hint')
        if item['word'] in [w for _,w in all_words]:
            prev_cat = [k for k,w in all_words if w == item['word']][0]
            errors.append(f'Duplicate word "{item["word"]}" in {cat["key"]} (also in {prev_cat})')
        all_words.append((cat['key'], item['word']))
        
        wlen = len(item['word'])
        if wlen < 2 or wlen > 5:
            errors.append(f'{cat["key"]}: word "{item["word"]}" length={wlen} (expected 2-5)')

if errors:
    print('VALIDATION ERRORS:')
    for e in errors:
        print(f'  - {e}')
else:
    print('ALL VALIDATION PASSED')

print(f'Total categories: {len(data)}')
print(f'Total items: {sum(len(c["items"]) for c in data)}')
print(f'Unique words: {len(set(w for _,w in all_words))}')

levels = {}
for cat in data:
    levels[cat['level']] = levels.get(cat['level'], 0) + 1
print(f'Level distribution: {levels}')

for i, cat in enumerate(data):
    print(f'{i+1}. {cat["key"]} ({cat["level"]}) - {len(cat["items"])} items - {cat["iconName"]} {cat["color"]}')

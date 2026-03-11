import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json','r') as f:
    data = json.load(f)

# Remove duplicate categories, keep first
seen = set()
clean = []
for c in data:
    if c['key'] not in seen:
        seen.add(c['key'])
        clean.append(c)

# Fix formal_arabic IDs: pa_fa -> pa_fma (to avoid collision with fa_conjunction)
for c in clean:
    if c['key'] == 'formal_arabic':
        for item in c['items']:
            item['id'] = item['id'].replace('pa_fa', 'pa_fma')

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json','w') as f:
    json.dump(clean, f, ensure_ascii=False, indent=2)

items = sum(len(c.get('items',[])) for c in clean)
all_ids = [item['id'] for c in clean for item in c['items']]
dupes = {k:v for k,v in Counter(all_ids).items() if v > 1}
print(f'Now: {len(clean)} categories, {items} items')
if dupes:
    print(f'DUPLICATES: {dupes}')
else:
    print('No duplicate IDs')
print('Last 5:', [c['key'] for c in clean[-5:]])

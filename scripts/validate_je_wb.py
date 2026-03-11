import json

with open('LumenLingo/LumenLingo/Resources/Content/japanese_english/wordbuilder_japanese_english.json') as f:
    data = json.load(f)

print("Categories:", len(data))
print("Items:", sum(len(c["items"]) for c in data))

all_w = []
for c in data:
    for i in c["items"]:
        all_w.append((c["key"], i["word"]))

wo = [w for _, w in all_w]
dupes = set(w for w in wo if wo.count(w) > 1)

if dupes:
    print("DUPLICATES FOUND:")
    for w in dupes:
        locs = [k for k, v in all_w if v == w]
        print(f"  {w}: {locs}")
else:
    print("No duplicates. Unique:", len(set(wo)))

for c in data:
    for i in c["items"]:
        L = len(i["word"])
        if L < 3 or L > 15:
            print(f"  LEN WARNING: {i['word']} ({L}) in {c['key']}")

for c in data:
    if len(c["items"]) != 15:
        print(f"  COUNT WARNING: {c['key']} has {len(c['items'])} items (expected 15)")

print("Validation complete")

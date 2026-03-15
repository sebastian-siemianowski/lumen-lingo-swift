import json

WB_FILE = 'LumenLingo/LumenLingo/Resources/Content/polish_chinese/wordbuilder_polish_chinese.json'

with open(WB_FILE, encoding='utf-8') as f:
    data = json.load(f)

existing_words = set()
for cat in data:
    for item in cat['items']:
        existing_words.add(item['word'])

batch6 = [
    {
        "key": "drinks_beverages_wb",
        "name": "Napoje",
        "description": "Nazwy napojów po chińsku",
        "iconName": "cup.and.saucer",
        "color": "#0d9488",
        "level": "advanced",
        "items": [
            {"word": "绿茶", "hint": "Zielona herbata"},
            {"word": "红茶", "hint": "Czarna herbata"},
            {"word": "咖啡", "hint": "Kawa"},
            {"word": "果汁", "hint": "Sok owocowy"},
            {"word": "可乐", "hint": "Cola"},
            {"word": "啤酒", "hint": "Piwo"},
            {"word": "红酒", "hint": "Czerwone wino"},
            {"word": "豆浆", "hint": "Mleko sojowe"},
            {"word": "奶茶", "hint": "Herbata z mlekiem"},
            {"word": "矿泉水", "hint": "Woda mineralna"},
            {"word": "白酒", "hint": "Baijiu (chiński trunek)"},
            {"word": "酸奶", "hint": "Jogurt"},
            {"word": "椰汁", "hint": "Sok kokosowy"},
            {"word": "柠檬水", "hint": "Lemoniada"},
            {"word": "热巧克力", "hint": "Gorąca czekolada"}
        ]
    },
    {
        "key": "desserts_sweets_wb",
        "name": "Desery i słodycze",
        "description": "Nazwy deserów i słodyczy po chińsku",
        "iconName": "birthday.cake",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {"word": "月饼", "hint": "Ciastko księżycowe"},
            {"word": "汤圆", "hint": "Kulki ryżowe"},
            {"word": "冰淇淋", "hint": "Lody"},
            {"word": "巧克力", "hint": "Czekolada"},
            {"word": "饼干", "hint": "Herbatnik"},
            {"word": "布丁", "hint": "Budyń"},
            {"word": "糖果", "hint": "Cukierek"},
            {"word": "果冻", "hint": "Galaretka"},
            {"word": "蜂蜜", "hint": "Miód"},
            {"word": "红豆沙", "hint": "Pasta z czerwonej fasoli"},
            {"word": "甜甜圈", "hint": "Pączek"},
            {"word": "麻薯", "hint": "Mochi"},
            {"word": "蛋挞", "hint": "Tartaletka jajeczna"},
            {"word": "绿豆糕", "hint": "Ciasto z fasoli mung"},
            {"word": "杏仁饼", "hint": "Ciastko migdałowe"}
        ]
    },
    {
        "key": "furniture_wb",
        "name": "Meble",
        "description": "Nazwy mebli po chińsku",
        "iconName": "sofa",
        "color": "#a16207",
        "level": "advanced",
        "items": [
            {"word": "沙发", "hint": "Kanapa"},
            {"word": "书架", "hint": "Regał na książki"},
            {"word": "衣柜", "hint": "Szafa"},
            {"word": "床铺", "hint": "Łóżko"},
            {"word": "桌子", "hint": "Stół"},
            {"word": "抽屉", "hint": "Szuflada"},
            {"word": "台灯", "hint": "Lampka biurkowa"},
            {"word": "窗帘", "hint": "Zasłona"},
            {"word": "地毯", "hint": "Dywan"},
            {"word": "枕头", "hint": "Poduszka"},
            {"word": "被子", "hint": "Kołdra"},
            {"word": "镜子", "hint": "Lustro"},
            {"word": "花瓶", "hint": "Wazon"},
            {"word": "相框", "hint": "Ramka na zdjęcia"},
            {"word": "梳妆台", "hint": "Toaletka"}
        ]
    },
    {
        "key": "tools_wb",
        "name": "Narzędzia",
        "description": "Nazwy narzędzi po chińsku",
        "iconName": "wrench",
        "color": "#71717a",
        "level": "advanced",
        "items": [
            {"word": "锤子", "hint": "Młotek"},
            {"word": "螺丝刀", "hint": "Śrubokręt"},
            {"word": "扳手", "hint": "Klucz"},
            {"word": "钳子", "hint": "Szczypce"},
            {"word": "电钻", "hint": "Wiertarka"},
            {"word": "锯子", "hint": "Piła"},
            {"word": "卷尺", "hint": "Miarka"},
            {"word": "螺丝", "hint": "Śruba"},
            {"word": "钉子", "hint": "Gwóźdź"},
            {"word": "胶水", "hint": "Klej"},
            {"word": "油漆", "hint": "Farba"},
            {"word": "刷子", "hint": "Pędzel"},
            {"word": "梯子", "hint": "Drabina"},
            {"word": "铲子", "hint": "Łopata"},
            {"word": "水管", "hint": "Rura wodna"}
        ]
    },
    {
        "key": "materials_wb",
        "name": "Materiały",
        "description": "Nazwy materiałów po chińsku",
        "iconName": "cube",
        "color": "#57534e",
        "level": "advanced",
        "items": [
            {"word": "木头", "hint": "Drewno"},
            {"word": "金属", "hint": "Metal"},
            {"word": "塑料", "hint": "Plastik"},
            {"word": "玻璃", "hint": "Szkło"},
            {"word": "橡胶", "hint": "Guma"},
            {"word": "皮革", "hint": "Skóra (materiał)"},
            {"word": "棉花", "hint": "Bawełna"},
            {"word": "丝绸", "hint": "Jedwab"},
            {"word": "石头", "hint": "Kamień"},
            {"word": "水泥", "hint": "Cement"},
            {"word": "钢铁", "hint": "Stal"},
            {"word": "黄铜", "hint": "Mosiądz"},
            {"word": "陶瓷", "hint": "Ceramika"},
            {"word": "竹子", "hint": "Bambus"},
            {"word": "大理石", "hint": "Marmur"}
        ]
    }
]

# Duplicate check
new_words = []
has_error = False
for cat in batch6:
    for item in cat['items']:
        if item['word'] in existing_words:
            print(f"DUPLICATE with existing: {item['word']} in {cat['key']}")
            has_error = True
        new_words.append(item['word'])

if len(new_words) != len(set(new_words)):
    dupes = [w for w in new_words if new_words.count(w) > 1]
    print(f"INTRA-BATCH DUPLICATES: {set(dupes)}")
    has_error = True

if has_error:
    print("ERRORS FOUND - not saving")
else:
    data.extend(batch6)
    with open(WB_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"SUCCESS: {len(data)} categories, {sum(len(c['items']) for c in data)} items")

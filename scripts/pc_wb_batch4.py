import json

WB_FILE = 'LumenLingo/LumenLingo/Resources/Content/polish_chinese/wordbuilder_polish_chinese.json'

with open(WB_FILE, encoding='utf-8') as f:
    data = json.load(f)

existing_words = set()
for cat in data:
    for item in cat['items']:
        existing_words.add(item['word'])

batch4 = [
    {
        "key": "kitchen_utensils_wb",
        "name": "Przybory kuchenne",
        "description": "Nazwy przyborów kuchennych po chińsku",
        "iconName": "frying.pan",
        "color": "#78716c",
        "level": "intermediate",
        "items": [
            {"word": "筷子", "hint": "Pałeczki"},
            {"word": "勺子", "hint": "Łyżka"},
            {"word": "叉子", "hint": "Widelec"},
            {"word": "盘子", "hint": "Talerz"},
            {"word": "刀具", "hint": "Nóż"},
            {"word": "水壶", "hint": "Czajnik"},
            {"word": "锅子", "hint": "Garnek"},
            {"word": "杯子", "hint": "Kubek"},
            {"word": "烤箱", "hint": "Piekarnik"},
            {"word": "冰箱", "hint": "Lodówka"},
            {"word": "微波炉", "hint": "Mikrofalówka"},
            {"word": "砧板", "hint": "Deska do krojenia"},
            {"word": "围裙", "hint": "Fartuch"},
            {"word": "漏勺", "hint": "Cedzak"},
            {"word": "平底锅", "hint": "Patelnia"}
        ]
    },
    {
        "key": "sports_wb",
        "name": "Sport",
        "description": "Nazwy dyscyplin sportowych po chińsku",
        "iconName": "sportscourt",
        "color": "#10b981",
        "level": "intermediate",
        "items": [
            {"word": "足球", "hint": "Piłka nożna"},
            {"word": "篮球", "hint": "Koszykówka"},
            {"word": "网球", "hint": "Tenis"},
            {"word": "排球", "hint": "Siatkówka"},
            {"word": "游泳", "hint": "Pływanie"},
            {"word": "跑步", "hint": "Bieganie"},
            {"word": "乒乓球", "hint": "Tenis stołowy"},
            {"word": "羽毛球", "hint": "Badminton"},
            {"word": "棒球", "hint": "Baseball"},
            {"word": "高尔夫", "hint": "Golf"},
            {"word": "滑冰", "hint": "Łyżwiarstwo"},
            {"word": "滑雪", "hint": "Narciarstwo"},
            {"word": "拳击", "hint": "Boks"},
            {"word": "武术", "hint": "Sztuki walki"},
            {"word": "体操", "hint": "Gimnastyka"}
        ]
    },
    {
        "key": "music_instruments_wb",
        "name": "Instrumenty muzyczne",
        "description": "Nazwy instrumentów muzycznych po chińsku",
        "iconName": "pianokeys",
        "color": "#f43f5e",
        "level": "intermediate",
        "items": [
            {"word": "钢琴", "hint": "Pianino"},
            {"word": "吉他", "hint": "Gitara"},
            {"word": "小提琴", "hint": "Skrzypce"},
            {"word": "鼓组", "hint": "Perkusja"},
            {"word": "长笛", "hint": "Flet"},
            {"word": "二胡", "hint": "Erhu (skrzypce chińskie)"},
            {"word": "琵琶", "hint": "Pipa (lutnia chińska)"},
            {"word": "古筝", "hint": "Guzheng (cytra chińska)"},
            {"word": "萨克斯", "hint": "Saksofon"},
            {"word": "小号", "hint": "Trąbka"},
            {"word": "大提琴", "hint": "Wiolonczela"},
            {"word": "竖琴", "hint": "Harfa"},
            {"word": "口琴", "hint": "Harmonijka ustna"},
            {"word": "手风琴", "hint": "Akordeon"},
            {"word": "唢呐", "hint": "Suona (róg chiński)"}
        ]
    },
    {
        "key": "nature_wb",
        "name": "Natura",
        "description": "Nazwy elementów natury po chińsku",
        "iconName": "leaf",
        "color": "#16a34a",
        "level": "intermediate",
        "items": [
            {"word": "大山", "hint": "Góra"},
            {"word": "河流", "hint": "Rzeka"},
            {"word": "湖泊", "hint": "Jezioro"},
            {"word": "海洋", "hint": "Ocean"},
            {"word": "森林", "hint": "Las"},
            {"word": "沙漠", "hint": "Pustynia"},
            {"word": "草地", "hint": "Łąka"},
            {"word": "瀑布", "hint": "Wodospad"},
            {"word": "火山", "hint": "Wulkan"},
            {"word": "岛屿", "hint": "Wyspa"},
            {"word": "洞穴", "hint": "Jaskinia"},
            {"word": "峡谷", "hint": "Kanion"},
            {"word": "冰川", "hint": "Lodowiec"},
            {"word": "珊瑚", "hint": "Koral"},
            {"word": "树林", "hint": "Zagajnik"}
        ]
    },
    {
        "key": "emotions_wb",
        "name": "Emocje",
        "description": "Nazwy emocji i uczuć po chińsku",
        "iconName": "heart",
        "color": "#e11d48",
        "level": "intermediate",
        "items": [
            {"word": "开心", "hint": "Szczęśliwy"},
            {"word": "难过", "hint": "Smutny"},
            {"word": "生气", "hint": "Zły (wściekły)"},
            {"word": "害怕", "hint": "Przestraszony"},
            {"word": "惊讶", "hint": "Zaskoczony"},
            {"word": "紧张", "hint": "Zdenerwowany"},
            {"word": "骄傲", "hint": "Dumny"},
            {"word": "孤独", "hint": "Samotny"},
            {"word": "嫉妒", "hint": "Zazdrosny"},
            {"word": "感动", "hint": "Wzruszony"},
            {"word": "失望", "hint": "Rozczarowany"},
            {"word": "兴奋", "hint": "Podekscytowany"},
            {"word": "焦虑", "hint": "Niespokojny"},
            {"word": "满足", "hint": "Zadowolony"},
            {"word": "尴尬", "hint": "Zakłopotany"}
        ]
    }
]

# Duplicate check
new_words = []
has_error = False
for cat in batch4:
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
    data.extend(batch4)
    with open(WB_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"SUCCESS: {len(data)} categories, {sum(len(c['items']) for c in data)} items")

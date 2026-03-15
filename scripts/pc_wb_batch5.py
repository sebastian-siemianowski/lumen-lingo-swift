import json

WB_FILE = 'LumenLingo/LumenLingo/Resources/Content/polish_chinese/wordbuilder_polish_chinese.json'

with open(WB_FILE, encoding='utf-8') as f:
    data = json.load(f)

existing_words = set()
for cat in data:
    for item in cat['items']:
        existing_words.add(item['word'])

batch5 = [
    {
        "key": "technology_wb",
        "name": "Technologia",
        "description": "Nazwy urządzeń i pojęć technologicznych po chińsku",
        "iconName": "desktopcomputer",
        "color": "#2563eb",
        "level": "intermediate",
        "items": [
            {"word": "电脑", "hint": "Komputer"},
            {"word": "手机", "hint": "Telefon komórkowy"},
            {"word": "键盘", "hint": "Klawiatura"},
            {"word": "鼠标", "hint": "Myszka (komputerowa)"},
            {"word": "屏幕", "hint": "Ekran"},
            {"word": "打印机", "hint": "Drukarka"},
            {"word": "耳机", "hint": "Słuchawki"},
            {"word": "摄像头", "hint": "Kamera"},
            {"word": "密码", "hint": "Hasło"},
            {"word": "网络", "hint": "Sieć / Internet"},
            {"word": "软件", "hint": "Oprogramowanie"},
            {"word": "硬件", "hint": "Sprzęt komputerowy"},
            {"word": "数据", "hint": "Dane"},
            {"word": "下载", "hint": "Pobieranie"},
            {"word": "充电器", "hint": "Ładowarka"}
        ]
    },
    {
        "key": "office_wb",
        "name": "Biuro",
        "description": "Nazwy przedmiotów biurowych po chińsku",
        "iconName": "building.2",
        "color": "#475569",
        "level": "intermediate",
        "items": [
            {"word": "办公室", "hint": "Biuro"},
            {"word": "办公桌", "hint": "Biurko"},
            {"word": "椅子", "hint": "Krzesło"},
            {"word": "文件", "hint": "Dokument"},
            {"word": "信封", "hint": "Koperta"},
            {"word": "订书机", "hint": "Zszywacz"},
            {"word": "剪刀", "hint": "Nożyczki"},
            {"word": "胶带", "hint": "Taśma klejąca"},
            {"word": "回形针", "hint": "Spinacz"},
            {"word": "日历", "hint": "Kalendarz"},
            {"word": "计算器", "hint": "Kalkulator"},
            {"word": "会议", "hint": "Spotkanie"},
            {"word": "合同", "hint": "Umowa"},
            {"word": "名片", "hint": "Wizytówka"},
            {"word": "印章", "hint": "Pieczątka"}
        ]
    },
    {
        "key": "health_medical_wb",
        "name": "Zdrowie i medycyna",
        "description": "Nazwy pojęć medycznych po chińsku",
        "iconName": "cross.case",
        "color": "#dc2626",
        "level": "intermediate",
        "items": [
            {"word": "医院", "hint": "Szpital"},
            {"word": "药房", "hint": "Apteka"},
            {"word": "感冒", "hint": "Przeziębienie"},
            {"word": "发烧", "hint": "Gorączka"},
            {"word": "头疼", "hint": "Ból głowy"},
            {"word": "咳嗽", "hint": "Kaszel"},
            {"word": "过敏", "hint": "Alergia"},
            {"word": "处方", "hint": "Recepta"},
            {"word": "手术", "hint": "Operacja"},
            {"word": "疫苗", "hint": "Szczepionka"},
            {"word": "血压", "hint": "Ciśnienie krwi"},
            {"word": "体检", "hint": "Badanie lekarskie"},
            {"word": "急救", "hint": "Pierwsza pomoc"},
            {"word": "绷带", "hint": "Bandaż"},
            {"word": "药片", "hint": "Tabletka"}
        ]
    },
    {
        "key": "travel_wb",
        "name": "Podróże",
        "description": "Słownictwo podróżnicze po chińsku",
        "iconName": "airplane",
        "color": "#0891b2",
        "level": "intermediate",
        "items": [
            {"word": "护照", "hint": "Paszport"},
            {"word": "签证", "hint": "Wiza"},
            {"word": "行李", "hint": "Bagaż"},
            {"word": "机票", "hint": "Bilet lotniczy"},
            {"word": "酒店", "hint": "Hotel"},
            {"word": "旅游", "hint": "Turystyka"},
            {"word": "景点", "hint": "Atrakcja turystyczna"},
            {"word": "地图", "hint": "Mapa"},
            {"word": "导游", "hint": "Przewodnik"},
            {"word": "纪念品", "hint": "Pamiątka"},
            {"word": "海关", "hint": "Urząd celny"},
            {"word": "登机牌", "hint": "Karta pokładowa"},
            {"word": "预订", "hint": "Rezerwacja"},
            {"word": "货币", "hint": "Waluta"},
            {"word": "旅馆", "hint": "Schronisko"}
        ]
    },
    {
        "key": "hobbies_wb",
        "name": "Hobby",
        "description": "Nazwy hobby i zainteresowań po chińsku",
        "iconName": "star",
        "color": "#f59e0b",
        "level": "intermediate",
        "items": [
            {"word": "阅读", "hint": "Czytanie"},
            {"word": "绘画", "hint": "Malarstwo"},
            {"word": "摄影", "hint": "Fotografia"},
            {"word": "烹饪", "hint": "Gotowanie"},
            {"word": "钓鱼", "hint": "Wędkarstwo"},
            {"word": "园艺", "hint": "Ogrodnictwo"},
            {"word": "下棋", "hint": "Gra w szachy"},
            {"word": "集邮", "hint": "Filatelistyka"},
            {"word": "编织", "hint": "Dzierganie"},
            {"word": "登山", "hint": "Wspinaczka górska"},
            {"word": "骑马", "hint": "Jazda konna"},
            {"word": "潜水", "hint": "Nurkowanie"},
            {"word": "冲浪", "hint": "Surfing"},
            {"word": "瑜伽", "hint": "Joga"},
            {"word": "书法", "hint": "Kaligrafia"}
        ]
    }
]

# Duplicate check
new_words = []
has_error = False
for cat in batch5:
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
    data.extend(batch5)
    with open(WB_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"SUCCESS: {len(data)} categories, {sum(len(c['items']) for c in data)} items")

#!/usr/bin/env python3
"""Add SEO meta keys to uk.json (Ukrainian)."""
import json, pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "uk.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Тарифи",
        "description": "Оберіть ідеальний рівень членства LumenLingo. Починайте безкоштовно або відкрийте Pro, Elite чи Royal для більше мов, звукових пейзажів, візуальних фонів та преміум функцій.",
        "ogTitle": "Тарифи — LumenLingo",
        "ogDescription": "Порівняйте рівні Free, Pro, Elite та Royal. Починайте безкоштовно, оновлюйтесь коли готові."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Можливості",
        "description": "Ознайомтесь з повним набором функцій LumenLingo: імерсивні флешкартки, розумне інтервальне повторення, 3 режими практики, 12 атмосферних звукових пейзажів, дихальні сфери, 25+ мовних пар та більше.",
        "ogTitle": "Можливості — LumenLingo",
        "ogDescription": "Ознайомтесь з повним набором функцій LumenLingo: імерсивні флешкартки, інтервальне повторення, 3 режими практики, 12 звукових пейзажів та більше."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Допомога та Контакти",
        "description": "Знайдіть відповіді на поширені запитання про LumenLingo або зв'яжіться з командою LumenShore. Ми тут, щоб допомогти у вашій подорожі вивчення мов.",
        "ogTitle": "Допомога та Контакти — LumenLingo",
        "ogDescription": "Знайдіть відповіді на поширені запитання про LumenLingo або зв'яжіться з командою LumenShore."
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "Блог",
        "description": "Поради, посібники та аналітика для тих, хто вивчає мови. Наука навчання, практичні поради та новини від команди LumenLingo.",
        "ogTitle": "Блог — LumenLingo",
        "ogDescription": "Поради, посібники та аналітика для тих, хто вивчає мови від LumenLingo."
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "Завантажити LumenLingo — Безкоштовно в App Store",
        "description": "Завантажте LumenLingo для iPhone. Красиві флешкартки, адаптивна практика, 12 атмосферних звукових пейзажів, 9 мов. Безкоштовно.",
        "ogTitle": "Завантажити LumenLingo — Безкоштовно в App Store",
        "ogDescription": "Опануйте мови через імерсивний досвід. Красиві флешкартки, адаптивна практика та атмосферні звуки."
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "Підтримувані мови — 9 мов, 25+ пар",
        "description": "Ознайомтесь з усіма мовними парами LumenLingo. Вивчайте іспанську, французьку, німецьку, японську, китайську, арабську, італійську, польську та інші з красивими флешкартками.",
        "ogTitle": "Підтримувані мови — LumenLingo",
        "ogDescription": "9 мов, 25+ двосторонніх пар. Вивчайте в будь-якому напрямку з кураторською лексикою та адаптивною практикою."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Ранній доступ — Будьте серед перших",
        "description": "Приєднуйтесь до списку раннього доступу LumenLingo. Дізнайтесь першими про нові мови та функції. Ексклюзивні пропозиції для ранніх прихильників.",
        "ogTitle": "Ранній доступ — LumenLingo",
        "ogDescription": "Приєднуйтесь до списку очікування та отримайте ранній доступ до LumenLingo. Опануйте нову мову через мультисенсорне занурення."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Спробуйте — Інтерактивна демо флешкарток",
        "description": "Спробуйте флешкартки LumenLingo прямо у браузері. Перевертайте, свайпайте та вчіться — потім завантажте повний додаток безкоштовно.",
        "ogTitle": "Спробуйте — Інтерактивна демо | LumenLingo",
        "ogDescription": "Прогортайте красиві флешкартки 5 мовами. Оцініть якість перед завантаженням."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "Ви офлайн"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("UK: SEO meta keys added successfully")

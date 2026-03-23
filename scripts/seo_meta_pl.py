#!/usr/bin/env python3
"""Add SEO meta keys to pl.json (Polish)."""
import json, pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pl.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Cennik",
        "description": "Wybierz idealny poziom cz\u0142onkostwa LumenLingo. Zacznij za darmo lub odblokuj Pro, Elite lub Royal dla wi\u0119cej j\u0119zyk\u00f3w, pejza\u017cy d\u017awi\u0119kowych, t\u0142a wizualnych i funkcji premium.",
        "ogTitle": "Cennik — LumenLingo",
        "ogDescription": "Por\u00f3wnaj poziomy Free, Pro, Elite i Royal. Zacznij za darmo, ulepsz kiedy b\u0119dziesz gotowy."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Funkcje",
        "description": "Poznaj pe\u0142en zestaw funkcji LumenLingo: immersyjne fiszki, inteligentne powt\u00f3rki, 3 tryby \u0107wicze\u0144, 12 pejza\u017cy d\u017awi\u0119kowych, kule oddechowe, 25+ par j\u0119zykowych i wi\u0119cej.",
        "ogTitle": "Funkcje — LumenLingo",
        "ogDescription": "Poznaj pe\u0142en zestaw funkcji LumenLingo: immersyjne fiszki, inteligentne powt\u00f3rki, 3 tryby \u0107wicze\u0144, 12 pejza\u017cy d\u017awi\u0119kowych i wi\u0119cej."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Pomoc i Kontakt",
        "description": "Znajd\u017a odpowiedzi na cz\u0119sto zadawane pytania o LumenLingo lub skontaktuj si\u0119 z zespo\u0142em LumenShore. Jeste\u015bmy tu, aby pom\u00f3c w Twojej podr\u00f3\u017cy nauki j\u0119zyk\u00f3w.",
        "ogTitle": "Pomoc i Kontakt — LumenLingo",
        "ogDescription": "Znajd\u017a odpowiedzi na cz\u0119sto zadawane pytania o LumenLingo lub skontaktuj si\u0119 z zespo\u0142em LumenShore."
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "Blog",
        "description": "Porady, przewodniki i spostrzeg\u017cenia dla ucz\u0105cych si\u0119 j\u0119zyk\u00f3w. Odkryj nauk\u0119 uczenia si\u0119, praktyczne wskaz\u00f3wki i nowo\u015bci od zespo\u0142u LumenLingo.",
        "ogTitle": "Blog — LumenLingo",
        "ogDescription": "Porady, przewodniki i spostrzeg\u017cenia dla ucz\u0105cych si\u0119 j\u0119zyk\u00f3w od LumenLingo."
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "Pobierz LumenLingo — Za darmo w App Store",
        "description": "Pobierz LumenLingo na iPhone. Pi\u0119kne fiszki, adaptacyjna praktyka, 12 pejza\u017cy d\u017awi\u0119kowych, 9 j\u0119zyk\u00f3w. Za darmo na start.",
        "ogTitle": "Pobierz LumenLingo — Za darmo w App Store",
        "ogDescription": "Opanuj j\u0119zyki dzi\u0119ki immersyjnym do\u015bwiadczeniom. Pi\u0119kne fiszki, adaptacyjna praktyka i pejza\u017ce d\u017awi\u0119kowe."
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "Obs\u0142ugiwane j\u0119zyki — 9 j\u0119zyk\u00f3w, 25+ par",
        "description": "Odkryj wszystkie pary j\u0119zykowe LumenLingo. Ucz si\u0119 hiszpa\u0144skiego, francuskiego, niemieckiego, japo\u0144skiego, chi\u0144skiego, arabskiego, w\u0142oskiego, polskiego i wi\u0119cej z pi\u0119knymi fiszkami.",
        "ogTitle": "Obs\u0142ugiwane j\u0119zyki — LumenLingo",
        "ogDescription": "9 j\u0119zyk\u00f3w, 25+ dwukierunkowych par. Ucz si\u0119 w dowolnym kierunku z dobranym s\u0142ownictwem i adaptacyjn\u0105 praktyk\u0105."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Wczesny dost\u0119p — B\u0105d\u017a w\u015br\u00f3d pierwszych",
        "description": "Do\u0142\u0105cz do listy wczesnego dost\u0119pu LumenLingo. Dowiedz si\u0119 pierwszy o nowych j\u0119zykach i funkcjach. Ekskluzywne oferty dla wczesnych zwolennik\u00f3w.",
        "ogTitle": "Wczesny dost\u0119p — LumenLingo",
        "ogDescription": "Do\u0142\u0105cz do listy oczekuj\u0105cych i uzyskaj wczesny dost\u0119p do LumenLingo. Opanuj nowy j\u0119zyk dzi\u0119ki wielozmys\u0142owemu zanurzeniu."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Spr\u00f3buj — Interaktywne demo fiszek",
        "description": "Do\u015bwiadcz fiszek LumenLingo bezpo\u015brednio w przegl\u0105darce. Obracaj, przesuwaj i ucz si\u0119 — potem pobierz pe\u0142n\u0105 aplikacj\u0119 za darmo.",
        "ogTitle": "Spr\u00f3buj — Interaktywne demo | LumenLingo",
        "ogDescription": "Przegl\u0105daj pi\u0119kne fiszki w 5 j\u0119zykach. Doce\u0144 jako\u015b\u0107 przed pobraniem."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "Jeste\u015b offline"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("PL: SEO meta keys added successfully")

#!/usr/bin/env python3
"""Add SEO meta keys to de.json (German)."""
import json, pathlib

LQ = "\u201e"  # „
RQ = "\u201c"  # "

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "de.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Preise",
        "description": f"W\u00e4hlen Sie die perfekte LumenLingo-Mitgliedschaftsstufe. Starten Sie kostenlos oder schalten Sie Pro, Elite oder Royal f\u00fcr mehr Sprachen, Klanglandschaften, visuelle Hintergr\u00fcnde und Premium-Funktionen frei.",
        "ogTitle": "Preise — LumenLingo",
        "ogDescription": "Vergleichen Sie die Stufen Free, Pro, Elite und Royal. Starten Sie kostenlos, upgraden Sie wenn Sie bereit sind."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Funktionen",
        "description": "Entdecken Sie alle Funktionen von LumenLingo: immersive Karteikarten, intelligente Wiederholung, 3 \u00dcbungsmodi, 12 Klanglandschaften, Atemsph\u00e4ren, 25+ Sprachpaare und mehr.",
        "ogTitle": "Funktionen — LumenLingo",
        "ogDescription": "Entdecken Sie alle Funktionen von LumenLingo: immersive Karteikarten, intelligente Wiederholung, 3 \u00dcbungsmodi, 12 Klanglandschaften und mehr."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Hilfe & Kontakt",
        "description": f"Finden Sie Antworten auf h\u00e4ufige Fragen zu LumenLingo oder kontaktieren Sie das LumenShore-Team. Wir helfen Ihnen gerne auf Ihrer Sprachlernreise.",
        "ogTitle": "Hilfe & Kontakt — LumenLingo",
        "ogDescription": f"Finden Sie Antworten auf h\u00e4ufige Fragen zu LumenLingo oder kontaktieren Sie das LumenShore-Team."
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "Blog",
        "description": "Tipps, Anleitungen und Einblicke f\u00fcr Sprachlernende. Entdecken Sie die Wissenschaft des Lernens, praktische Ratschl\u00e4ge und Neuigkeiten vom LumenLingo-Team.",
        "ogTitle": "Blog — LumenLingo",
        "ogDescription": "Tipps, Anleitungen und Einblicke f\u00fcr Sprachlernende von LumenLingo."
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "LumenLingo herunterladen — Kostenlos im App Store",
        "description": "Laden Sie LumenLingo f\u00fcr iPhone herunter. Sch\u00f6ne Karteikarten, adaptives \u00dcben, 12 Klanglandschaften, 9 Sprachen. Kostenlos starten.",
        "ogTitle": "LumenLingo herunterladen — Kostenlos im App Store",
        "ogDescription": "Meistern Sie Sprachen durch immersive Erlebnisse. Sch\u00f6ne Karteikarten, adaptives \u00dcben und Klanglandschaften."
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "Unterst\u00fctzte Sprachen — 9 Sprachen, 25+ Paare",
        "description": "Entdecken Sie alle Sprachpaare von LumenLingo. Lernen Sie Spanisch, Franz\u00f6sisch, Deutsch, Japanisch, Chinesisch, Arabisch, Italienisch, Polnisch und mehr mit sch\u00f6nen Karteikarten.",
        "ogTitle": "Unterst\u00fctzte Sprachen — LumenLingo",
        "ogDescription": "9 Sprachen, 25+ bidirektionale Paare. Lernen Sie in jede Richtung mit kuratiertem Vokabular und adaptivem \u00dcben."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Fr\u00fcher Zugang — Seien Sie unter den Ersten",
        "description": "Melden Sie sich f\u00fcr die LumenLingo-Fr\u00fchzugangsliste an. Erfahren Sie als Erster von neuen Sprachen und Funktionen. Exklusive Angebote f\u00fcr fr\u00fche Unterst\u00fctzer.",
        "ogTitle": "Fr\u00fcher Zugang — LumenLingo",
        "ogDescription": "Melden Sie sich an und erhalten Sie fr\u00fchen Zugang zu LumenLingo. Meistern Sie eine neue Sprache durch multisensorisches Eintauchen."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Ausprobieren — Interaktive Karteikarten-Demo",
        "description": "Erleben Sie LumenLingo-Karteikarten direkt in Ihrem Browser. Umdrehen, wischen und lernen — dann laden Sie die vollst\u00e4ndige App kostenlos herunter.",
        "ogTitle": "Ausprobieren — Interaktive Demo | LumenLingo",
        "ogDescription": "Bl\u00e4ttern Sie durch sch\u00f6ne Karteikarten in 5 Sprachen. Erleben Sie die Qualit\u00e4t vor dem Download."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "Sie sind offline"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("DE: SEO meta keys added successfully")

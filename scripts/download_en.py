#!/usr/bin/env python3
"""Add download page translation keys to en.json.

Restructures the Download namespace so that every piece of content
rendered by download-hero, download-benefits, download-features,
download-showcase, and download-qr is translatable.
"""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "en.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "Master languages through immersive experiences. Beautiful, mindful, effective.",
    "meta": "Free to start \u00b7 No account required \u00b7 iPhone & iPad",
    "benefits": {
        "flashcards": "Beautiful Flashcards",
        "flashcardsDesc": "Learn vocabulary with immersive, richly-designed cards. Swipe to master words at your own pace.",
        "practice": "Adaptive Practice",
        "practiceDesc": "Three game modes that adapt to you \u2014 matching, fill-in-the-blank, and multiple choice.",
        "soundscapes": "Ambient Soundscapes",
        "soundscapesDesc": "12 curated soundscapes \u2014 from gentle rain to cosmic nebula \u2014 for focused study sessions."
    },
    "stats": {
        "languages": "Languages",
        "soundscapes": "Soundscapes",
        "practiceModes": "Practice Modes",
        "flashcards": "Flashcards"
    },
    "upgradeNote": "Free to start. Pro, Elite, and Royal tiers available in-app.",
    "qr": {
        "heading": "Scan to download",
        "description": "Point your iPhone camera at the QR code to get LumenLingo instantly.",
        "fallback": "Or visit lumenlingo.com/open on your phone"
    },
    "showcase": {
        "flashcards": "Immersive Flashcards",
        "flashcardsSub": "Swipe through beautifully designed cards",
        "practice": "Smart Practice",
        "practiceSub": "Three adaptive game modes",
        "soundscapes": "Ambient Soundscapes",
        "soundscapesSub": "12 curated focus environments"
    },
    **{k: v for k, v in data["Download"].items() if k == "meta" and isinstance(v, str)}
}
# Keep the meta key from the SEO section if it exists
if "meta" in data["Download"]:
    pass  # already set above

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("en.json Download namespace updated")

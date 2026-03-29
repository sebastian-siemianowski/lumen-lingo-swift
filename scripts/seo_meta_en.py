#!/usr/bin/env python3
"""Add SEO meta keys to en.json for pages that currently use hardcoded English metadata."""
import json, pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "en.json"
data = json.loads(f.read_text("utf-8"))

# Add meta sub-objects to each namespace that currently lacks them
# These match the existing hardcoded metadata from page files

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Pricing",
        "description": "Choose the perfect LumenLingo membership tier. Start free, or unlock Pro, Elite, or Royal for more languages, soundscapes, visual backgrounds, and premium features.",
        "ogTitle": "Pricing — LumenLingo",
        "ogDescription": "Compare Free, Pro, Elite, and Royal membership tiers. Start free, upgrade when ready."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Features",
        "description": "Explore the full feature set of LumenLingo: immersive flashcards, smart spaced repetition, 3 practice modes, 12 ambient soundscapes, breathing orbs, 25+ language pairs, and more.",
        "ogTitle": "Features — LumenLingo",
        "ogDescription": "Explore the full feature set of LumenLingo: immersive flashcards, smart spaced repetition, 3 practice modes, 12 ambient soundscapes, and more."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Help & Contact",
        "description": "Find answers to common questions about LumenLingo or get in touch with the LumenShore team. We're here to help with your language learning journey.",
        "ogTitle": "Help & Contact — LumenLingo",
        "ogDescription": "Find answers to common questions about LumenLingo or get in touch with the LumenShore team."
    }

# Blog index
if "meta" not in data.get("Features", {}).get("__blog_guard__", ""):
    # Need to add a Blog namespace if it doesn't exist
    if "Blog" not in data:
        data["Blog"] = {}
    if "meta" not in data["Blog"]:
        data["Blog"]["meta"] = {
            "title": "Blog",
            "description": "Tips, guides, and insights for language learners. Explore the science of learning, practical study advice, and the latest from the LumenLingo team.",
            "ogTitle": "Blog — LumenLingo",
            "ogDescription": "Tips, guides, and insights for language learners. Explore the science of learning, practical study advice, and the latest from LumenLingo."
        }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "Download LumenLingo — Free on the App Store",
        "description": "Download LumenLingo for iPhone. Beautiful flashcards, adaptive practice, 12 ambient soundscapes, 9 languages. Free to start.",
        "ogTitle": "Download LumenLingo — Free on the App Store",
        "ogDescription": "Master languages through immersive experiences. Beautiful flashcards, adaptive practice, and ambient soundscapes."
    }

# Languages page — need a namespace 
if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data["Languages"]:
    data["Languages"]["meta"] = {
        "title": "Supported Languages — 9 Languages, 25+ Pairs",
        "description": "Explore all language pairs supported by LumenLingo. Learn Spanish, French, German, Japanese, Chinese, Arabic, Italian, Polish and more with beautiful flashcards.",
        "ogTitle": "Supported Languages — LumenLingo",
        "ogDescription": "9 languages, 25+ bidirectional pairs. Learn in any direction with curated vocabulary and adaptive practice."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Early Access — Be Among the First",
        "description": "Join the LumenLingo early access list. Get notified first when new languages and features launch. Exclusive offers for early supporters.",
        "ogTitle": "Early Access — LumenLingo",
        "ogDescription": "Join the waitlist and get early access to LumenLingo. Master a new language through multi-sensory immersion."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Try It — Interactive Flashcard Demo",
        "description": "Experience LumenLingo flashcards right in your browser. Flip, swipe, and learn — then download the full app for free.",
        "ogTitle": "Try It — Interactive Flashcard Demo | LumenLingo",
        "ogDescription": "Swipe through beautiful flashcards in 5 languages. Experience the quality before you download."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "You're Offline"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("EN: SEO meta keys added successfully")

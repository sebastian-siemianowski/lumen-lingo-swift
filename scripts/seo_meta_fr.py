#!/usr/bin/env python3
"""Add SEO meta keys to fr.json (French)."""
import json, pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "fr.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Tarifs",
        "description": "Choisissez le niveau d'abonnement LumenLingo idéal. Commencez gratuitement ou débloquez Pro, Elite ou Royal pour plus de langues, ambiances sonores, fonds visuels et fonctionnalités premium.",
        "ogTitle": "Tarifs — LumenLingo",
        "ogDescription": "Comparez les niveaux Free, Pro, Elite et Royal. Commencez gratuitement, passez au niveau supérieur quand vous êtes prêt."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Fonctionnalités",
        "description": "Découvrez toutes les fonctionnalités de LumenLingo : cartes immersives, répétition espacée intelligente, 3 modes de pratique, 12 ambiances sonores, sphères de respiration, 25+ paires de langues et plus.",
        "ogTitle": "Fonctionnalités — LumenLingo",
        "ogDescription": "Découvrez toutes les fonctionnalités de LumenLingo : cartes immersives, répétition espacée, 3 modes de pratique, 12 ambiances sonores et plus."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Aide et Contact",
        "description": "Trouvez des réponses aux questions fréquentes sur LumenLingo ou contactez l'équipe LumenShore. Nous sommes là pour vous accompagner dans votre apprentissage des langues.",
        "ogTitle": "Aide et Contact — LumenLingo",
        "ogDescription": "Trouvez des réponses aux questions fréquentes sur LumenLingo ou contactez l'équipe LumenShore."
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "Blog",
        "description": "Conseils, guides et analyses pour les apprenants en langues. Explorez la science de l'apprentissage, des conseils pratiques et les dernières nouvelles de l'équipe LumenLingo.",
        "ogTitle": "Blog — LumenLingo",
        "ogDescription": "Conseils, guides et analyses pour les apprenants en langues de LumenLingo."
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "Télécharger LumenLingo — Gratuit sur l'App Store",
        "description": "Téléchargez LumenLingo pour iPhone. De belles cartes, une pratique adaptative, 12 ambiances sonores, 9 langues. Gratuit pour commencer.",
        "ogTitle": "Télécharger LumenLingo — Gratuit sur l'App Store",
        "ogDescription": "Maîtrisez les langues grâce à des expériences immersives. De belles cartes, une pratique adaptative et des ambiances sonores."
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "Langues prises en charge — 9 langues, 25+ paires",
        "description": "Explorez toutes les paires de langues de LumenLingo. Apprenez l'espagnol, le français, l'allemand, le japonais, le chinois, l'arabe, l'italien, le polonais et plus avec de belles cartes.",
        "ogTitle": "Langues prises en charge — LumenLingo",
        "ogDescription": "9 langues, 25+ paires bidirectionnelles. Apprenez dans n'importe quelle direction avec un vocabulaire sélectionné et une pratique adaptative."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Accès anticipé — Soyez parmi les premiers",
        "description": "Rejoignez la liste d'accès anticipé de LumenLingo. Soyez le premier informé des nouvelles langues et fonctionnalités. Offres exclusives pour les premiers supporters.",
        "ogTitle": "Accès anticipé — LumenLingo",
        "ogDescription": "Rejoignez la liste d'attente et obtenez un accès anticipé à LumenLingo. Maîtrisez une nouvelle langue grâce à l'immersion multisensorielle."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Essayez — Démo interactive de cartes",
        "description": "Découvrez les cartes LumenLingo directement dans votre navigateur. Retournez, glissez et apprenez — puis téléchargez l'application complète gratuitement.",
        "ogTitle": "Essayez — Démo interactive | LumenLingo",
        "ogDescription": "Parcourez de belles cartes dans 5 langues. Découvrez la qualité avant de télécharger."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "Vous êtes hors ligne"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("FR: SEO meta keys added successfully")

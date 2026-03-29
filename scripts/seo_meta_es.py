#!/usr/bin/env python3
"""Add SEO meta keys to es.json (Spanish)."""
import json, pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "es.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Precios",
        "description": "Elige el nivel de membresía perfecto de LumenLingo. Comienza gratis o desbloquea Pro, Elite o Royal para más idiomas, paisajes sonoros, fondos visuales y funciones premium.",
        "ogTitle": "Precios — LumenLingo",
        "ogDescription": "Compara los niveles Free, Pro, Elite y Royal. Comienza gratis, mejora cuando estés listo."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Funciones",
        "description": "Explora todas las funciones de LumenLingo: tarjetas inmersivas, repetición espaciada inteligente, 3 modos de práctica, 12 paisajes sonoros, esferas de respiración, más de 25 pares de idiomas y más.",
        "ogTitle": "Funciones — LumenLingo",
        "ogDescription": "Explora todas las funciones de LumenLingo: tarjetas inmersivas, repetición espaciada, 3 modos de práctica, 12 paisajes sonoros y más."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Ayuda y Contacto",
        "description": "Encuentra respuestas a preguntas frecuentes sobre LumenLingo o contacta con el equipo de LumenShore. Estamos aquí para ayudarte en tu viaje de aprendizaje de idiomas.",
        "ogTitle": "Ayuda y Contacto — LumenLingo",
        "ogDescription": "Encuentra respuestas a preguntas frecuentes sobre LumenLingo o contacta con el equipo de LumenShore."
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "Blog",
        "description": "Consejos, guías e información para aprendices de idiomas. Descubre la ciencia del aprendizaje, consejos prácticos y lo último del equipo LumenLingo.",
        "ogTitle": "Blog — LumenLingo",
        "ogDescription": "Consejos, guías e información para aprendices de idiomas de LumenLingo."
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "Descarga LumenLingo — Gratis en App Store",
        "description": "Descarga LumenLingo para iPhone. Hermosas tarjetas, práctica adaptativa, 12 paisajes sonoros, 9 idiomas. Gratis para comenzar.",
        "ogTitle": "Descarga LumenLingo — Gratis en App Store",
        "ogDescription": "Domina idiomas a través de experiencias inmersivas. Hermosas tarjetas, práctica adaptativa y paisajes sonoros."
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "Idiomas compatibles — 9 idiomas, más de 25 pares",
        "description": "Explora todos los pares de idiomas de LumenLingo. Aprende español, francés, alemán, japonés, chino, árabe, italiano, polaco y más con hermosas tarjetas.",
        "ogTitle": "Idiomas compatibles — LumenLingo",
        "ogDescription": "9 idiomas, más de 25 pares bidireccionales. Aprende en cualquier dirección con vocabulario curado y práctica adaptativa."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Acceso anticipado — Sé de los primeros",
        "description": "Únete a la lista de acceso anticipado de LumenLingo. Sé el primero en enterarte cuando se lancen nuevos idiomas y funciones. Ofertas exclusivas para los primeros seguidores.",
        "ogTitle": "Acceso anticipado — LumenLingo",
        "ogDescription": "Únete a la lista de espera y obtén acceso anticipado a LumenLingo. Domina un nuevo idioma a través de la inmersión multisensorial."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Pruébalo — Demo interactiva de tarjetas",
        "description": "Experimenta las tarjetas de LumenLingo directamente en tu navegador. Voltea, desliza y aprende — luego descarga la app completa gratis.",
        "ogTitle": "Pruébalo — Demo interactiva | LumenLingo",
        "ogDescription": "Desliza hermosas tarjetas en 5 idiomas. Experimenta la calidad antes de descargar."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "Sin conexión"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("ES: SEO meta keys added successfully")

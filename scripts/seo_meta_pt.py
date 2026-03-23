#!/usr/bin/env python3
"""Add SEO meta keys to pt.json (Portuguese)."""
import json, pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pt.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "Preços",
        "description": "Escolha o nível de assinatura LumenLingo perfeito. Comece grátis ou desbloqueie Pro, Elite ou Royal para mais idiomas, paisagens sonoras, fundos visuais e recursos premium.",
        "ogTitle": "Preços — LumenLingo",
        "ogDescription": "Compare os níveis Free, Pro, Elite e Royal. Comece grátis, faça upgrade quando estiver pronto."
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "Recursos",
        "description": "Explore todos os recursos do LumenLingo: cartões imersivos, repetição espaçada inteligente, 3 modos de prática, 12 paisagens sonoras, esferas de respiração, 25+ pares de idiomas e mais.",
        "ogTitle": "Recursos — LumenLingo",
        "ogDescription": "Explore todos os recursos do LumenLingo: cartões imersivos, repetição espaçada, 3 modos de prática, 12 paisagens sonoras e mais."
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "Ajuda e Contato",
        "description": "Encontre respostas para perguntas frequentes sobre o LumenLingo ou entre em contato com a equipe da LumenShore. Estamos aqui para ajudar na sua jornada de aprendizado de idiomas.",
        "ogTitle": "Ajuda e Contato — LumenLingo",
        "ogDescription": "Encontre respostas para perguntas frequentes sobre o LumenLingo ou entre em contato com a equipe da LumenShore."
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "Blog",
        "description": "Dicas, guias e insights para aprendizes de idiomas. Explore a ciência da aprendizagem, conselhos práticos e as novidades da equipe LumenLingo.",
        "ogTitle": "Blog — LumenLingo",
        "ogDescription": "Dicas, guias e insights para aprendizes de idiomas do LumenLingo."
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "Baixar LumenLingo — Grátis na App Store",
        "description": "Baixe o LumenLingo para iPhone. Cartões bonitos, prática adaptativa, 12 paisagens sonoras, 9 idiomas. Grátis para começar.",
        "ogTitle": "Baixar LumenLingo — Grátis na App Store",
        "ogDescription": "Domine idiomas através de experiências imersivas. Cartões bonitos, prática adaptativa e paisagens sonoras."
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "Idiomas suportados — 9 idiomas, 25+ pares",
        "description": "Explore todos os pares de idiomas do LumenLingo. Aprenda espanhol, francês, alemão, japonês, chinês, árabe, italiano, polonês e mais com cartões bonitos.",
        "ogTitle": "Idiomas suportados — LumenLingo",
        "ogDescription": "9 idiomas, 25+ pares bidirecionais. Aprenda em qualquer direção com vocabulário curado e prática adaptativa."
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "Acesso antecipado — Seja dos primeiros",
        "description": "Junte-se à lista de acesso antecipado do LumenLingo. Seja o primeiro a saber sobre novos idiomas e recursos. Ofertas exclusivas para apoiadores iniciais.",
        "ogTitle": "Acesso antecipado — LumenLingo",
        "ogDescription": "Junte-se à lista de espera e tenha acesso antecipado ao LumenLingo. Domine um novo idioma através da imersão multissensorial."
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "Experimente — Demo interativa de cartões",
        "description": "Experimente os cartões do LumenLingo diretamente no seu navegador. Vire, deslize e aprenda — depois baixe o app completo grátis.",
        "ogTitle": "Experimente — Demo interativa | LumenLingo",
        "ogDescription": "Deslize por cartões bonitos em 5 idiomas. Experimente a qualidade antes de baixar."
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "Você está offline"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("PT: SEO meta keys added successfully")

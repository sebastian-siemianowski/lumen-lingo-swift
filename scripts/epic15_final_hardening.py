#!/usr/bin/env python3
"""
Epic 15 — Cross-Policy Consistency & Final Hardening
=====================================================
Stories 15.1-15.6: Company name audit, liability consistency,
Apple EULA incorporation, version bumps, accessibility, assignment.

Run from repo root:
    python3 scripts/epic15_final_hardening.py
"""

import json, os, re, copy

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

# ---------------------------------------------------------------------------
# STORY 15.1: Cross-Policy Company Name Consistency Audit
# ---------------------------------------------------------------------------
# Replace "LumenShore" -> "Lumenshore" in Privacy and Eula namespaces
# Replace "LumenShore Ltd" -> "Lumenshore Limited" in Privacy and Eula namespaces
# (Terms and CookiePage already fixed by prior scripts)

def fix_company_names(data, locale):
    """Fix LumenShore -> Lumenshore in Privacy and Eula namespaces."""
    changes = 0
    for ns in ("Privacy", "Eula"):
        if ns not in data:
            continue
        changes += _fix_names_recursive(data[ns])
    return changes

def _fix_names_recursive(obj):
    changes = 0
    if isinstance(obj, dict):
        for k, v in obj.items():
            if isinstance(v, str):
                new_v = v
                # Order matters: do "LumenShore Ltd" first (more specific)
                new_v = new_v.replace("LumenShore Ltd", "Lumenshore Limited")
                new_v = new_v.replace("LumenShore", "Lumenshore")
                if new_v != v:
                    obj[k] = new_v
                    changes += 1
            elif isinstance(v, dict):
                changes += _fix_names_recursive(v)
    return changes


# ---------------------------------------------------------------------------
# STORY 15.2: Cross-Policy Liability Consistency Check
# ---------------------------------------------------------------------------
# Harmonise Terms liability cap with EULA tiered approach (free vs paid)
# Add cross-references between Terms and EULA liability sections

TERMS_LIABILITY_CAP = {
    "en": "Lumenshore\u2019s total aggregate liability for all claims arising from these Terms or your use of LumenLingo shall not exceed: (a) for Free tier users \u2014 zero pounds sterling (\u00a30.00); (b) for paid subscribers \u2014 the total subscription fees actually paid by you in the twelve (12) months immediately preceding the event giving rise to the claim.",
    "pl": "Ca\u0142kowita (\u0142\u0105czna) odpowiedzialno\u015b\u0107 Lumenshore z tytu\u0142u wszelkich roszcze\u0144 wynikaj\u0105cych z niniejszego Regulaminu lub korzystania z LumenLingo nie przekracza: (a) dla u\u017cytkownik\u00f3w bezp\u0142atnych \u2014 zero funt\u00f3w szterling\u00f3w (\u00a30,00); (b) dla p\u0142atnych subskrybent\u00f3w \u2014 ca\u0142kowitej kwoty op\u0142at subskrypcyjnych faktycznie uiszczonych przez Ciebie w ci\u0105gu dwunastu (12) miesi\u0119cy bezpo\u015brednio poprzedzaj\u0105cych zdarzenie b\u0119d\u0105ce podstaw\u0105 roszczenia.",
    "de": "Die Gesamthaftung von Lumenshore f\u00fcr alle Anspr\u00fcche aus diesen Nutzungsbedingungen oder Ihrer Nutzung von LumenLingo ist begrenzt auf: (a) f\u00fcr Nutzer der kostenlosen Stufe \u2014 null Pfund Sterling (\u00a30,00); (b) f\u00fcr zahlende Abonnenten \u2014 die Gesamtsumme der von Ihnen in den zw\u00f6lf (12) Monaten unmittelbar vor dem anspruchsbegr\u00fcndenden Ereignis tats\u00e4chlich gezahlten Abonnementgeb\u00fchren.",
    "es": "La responsabilidad total acumulada de Lumenshore por todas las reclamaciones derivadas de estos T\u00e9rminos o de su uso de LumenLingo no exceder\u00e1 de: (a) para usuarios del nivel gratuito \u2014 cero libras esterlinas (\u00a30,00); (b) para suscriptores de pago \u2014 el total de las cuotas de suscripci\u00f3n efectivamente abonadas por usted en los doce (12) meses inmediatamente anteriores al evento que da lugar a la reclamaci\u00f3n.",
    "fr": "La responsabilit\u00e9 totale cumul\u00e9e de Lumenshore pour toutes les r\u00e9clamations d\u00e9coulant des pr\u00e9sentes Conditions ou de votre utilisation de LumenLingo ne saurait exc\u00e9der : (a) pour les utilisateurs du niveau gratuit \u2014 z\u00e9ro livre sterling (\u00a30,00) ; (b) pour les abonn\u00e9s payants \u2014 le montant total des frais d\u2019abonnement effectivement pay\u00e9s par vous au cours des douze (12) mois pr\u00e9c\u00e9dant imm\u00e9diatement l\u2019\u00e9v\u00e9nement \u00e0 l\u2019origine de la r\u00e9clamation.",
    "ja": "\u3053\u306e\u5229\u7528\u898f\u7d04\u307e\u305f\u306fLumenLingo\u306e\u5229\u7528\u306b\u8d77\u56e0\u3059\u308b\u3059\u3079\u3066\u306e\u8acb\u6c42\u306b\u5bfe\u3059\u308bLumenshore\u306e\u7dcf\u8a08\u8ce0\u511f\u8cac\u4efb\u306f\u6b21\u3092\u8d85\u3048\u306a\u3044\u3082\u306e\u3068\u3057\u307e\u3059\uff1a(a) \u7121\u6599\u30d7\u30e9\u30f3\u30e6\u30fc\u30b6\u30fc\u2014\u30bc\u30ed\u82f1\u30dd\u30f3\u30c9\uff08\u00a30.00\uff09\u3001(b) \u6709\u6599\u8cfc\u8aad\u8005\u2014\u8acb\u6c42\u306e\u539f\u56e0\u3068\u306a\u3063\u305f\u4e8b\u8c61\u306e\u76f4\u524d12\u304b\u6708\u9593\u306b\u304a\u5ba2\u69d8\u304c\u5b9f\u969b\u306b\u652f\u6255\u3063\u305f\u8cfc\u8aad\u6599\u306e\u7dcf\u984d\u3002",
    "zh": "Lumenshore\u5c31\u672c\u6761\u6b3e\u6216\u60a8\u4f7f\u7528LumenLingo\u800c\u4ea7\u751f\u7684\u6240\u6709\u7d22\u8d54\u627f\u62c5\u7684\u7d2f\u8ba1\u8d54\u507f\u603b\u989d\u4e0d\u5f97\u8d85\u8fc7\uff1a(a) \u514d\u8d39\u7248\u7528\u6237\u2014\u2014\u96f6\u82f1\u938a\uff08\u00a30.00\uff09\uff1b(b) \u4ed8\u8d39\u8ba2\u9605\u7528\u6237\u2014\u2014\u60a8\u5728\u5f15\u8d77\u7d22\u8d54\u7684\u4e8b\u4ef6\u4e4b\u524d\u5341\u4e8c (12) \u4e2a\u6708\u5185\u5b9e\u9645\u652f\u4ed8\u7684\u8ba2\u9605\u8d39\u603b\u989d\u3002",
    "ar": "\u0644\u0627 \u064a\u062a\u062c\u0627\u0648\u0632 \u0625\u062c\u0645\u0627\u0644\u064a \u0645\u0633\u0624\u0648\u0644\u064a\u0629 Lumenshore \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a\u0629 \u0639\u0646 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0643 \u0644\u0640 LumenLingo: (\u0623) \u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 \u2014 \u0635\u0641\u0631 \u062c\u0646\u064a\u0647 \u0625\u0633\u062a\u0631\u0644\u064a\u0646\u064a (\u00a30.00)\u061b (\u0628) \u0644\u0644\u0645\u0634\u062a\u0631\u0643\u064a\u0646 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u064a\u0646 \u2014 \u0625\u062c\u0645\u0627\u0644\u064a \u0631\u0633\u0648\u0645 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629 \u0641\u0639\u0644\u064a\u064b\u0627 \u062e\u0644\u0627\u0644 \u0627\u0644\u0627\u062b\u0646\u064a \u0639\u0634\u0631 (12) \u0634\u0647\u0631\u064b\u0627 \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0645\u0628\u0627\u0634\u0631\u0629\u064b \u0644\u0644\u062d\u062f\u062b \u0627\u0644\u0645\u0624\u062f\u064a \u0644\u0644\u0645\u0637\u0627\u0644\u0628\u0629.",
    "uk": "\u0421\u0443\u043a\u0443\u043f\u043d\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c Lumenshore \u0437\u0430 \u0432\u0441\u0456\u043c\u0430 \u0432\u0438\u043c\u043e\u0433\u0430\u043c\u0438, \u0449\u043e \u0432\u0438\u043d\u0438\u043a\u0430\u044e\u0442\u044c \u0437 \u0446\u0438\u0445 \u0423\u043c\u043e\u0432 \u0430\u0431\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u0430\u043c\u0438 LumenLingo, \u043d\u0435 \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454: (a) \u0434\u043b\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f \u2014 \u043d\u0443\u043b\u044c \u0444\u0443\u043d\u0442\u0456\u0432 \u0441\u0442\u0435\u0440\u043b\u0456\u043d\u0433\u0456\u0432 (\u00a30,00); (b) \u0434\u043b\u044f \u043f\u043b\u0430\u0442\u043d\u0438\u0445 \u043f\u0456\u0434\u043f\u0438\u0441\u043d\u0438\u043a\u0456\u0432 \u2014 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0441\u0443\u043c\u0443 \u0444\u0430\u043a\u0442\u0438\u0447\u043d\u043e \u0441\u043f\u043b\u0430\u0447\u0435\u043d\u0438\u0445 \u0432\u0430\u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u043f\u043b\u0430\u0442\u043d\u0438\u0445 \u0432\u043d\u0435\u0441\u043a\u0456\u0432 \u0437\u0430 \u0434\u0432\u0430\u043d\u0430\u0434\u0446\u044f\u0442\u044c (12) \u043c\u0456\u0441\u044f\u0446\u0456\u0432, \u0449\u043e \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u043f\u0435\u0440\u0435\u0434\u0443\u044e\u0442\u044c \u043f\u043e\u0434\u0456\u0457, \u044f\u043a\u0430 \u0441\u0442\u0430\u043b\u0430 \u043f\u0456\u0434\u0441\u0442\u0430\u0432\u043e\u044e \u0432\u0438\u043c\u043e\u0433\u0438.",
}

TERMS_LIABILITY_CROSSREF = {
    "en": "This limitation of liability is consistent with the Limitation of Liability clause in our End-User Licence Agreement (EULA). Where both agreements apply, the more favourable limitation (from the user\u2019s perspective) shall prevail.",
    "pl": "To ograniczenie odpowiedzialno\u015bci jest sp\u00f3jne z klauzul\u0105 ograniczenia odpowiedzialno\u015bci w naszej Umowie Licencyjnej U\u017cytkownika Ko\u0144cowego (EULA). W przypadku stosowania obu um\u00f3w obowi\u0105zuje korzystniejsze ograniczenie (z perspektywy u\u017cytkownika).",
    "de": "Diese Haftungsbegrenzung steht im Einklang mit der Haftungsbegrenzungsklausel in unserer Endbenutzer-Lizenzvereinbarung (EULA). Soweit beide Vereinbarungen gelten, hat die f\u00fcr den Nutzer g\u00fcnstigere Begrenzung Vorrang.",
    "es": "Esta limitaci\u00f3n de responsabilidad es coherente con la cl\u00e1usula de Limitaci\u00f3n de Responsabilidad de nuestro Acuerdo de Licencia de Usuario Final (EULA). Cuando ambos acuerdos sean aplicables, prevalecer\u00e1 la limitaci\u00f3n m\u00e1s favorable (desde la perspectiva del usuario).",
    "fr": "Cette limitation de responsabilit\u00e9 est coh\u00e9rente avec la clause de Limitation de responsabilit\u00e9 de notre Contrat de Licence Utilisateur Final (CLUF). Lorsque les deux accords s\u2019appliquent, la limitation la plus favorable (du point de vue de l\u2019utilisateur) pr\u00e9vaudra.",
    "ja": "\u3053\u306e\u8ce0\u511f\u8cac\u4efb\u306e\u5236\u9650\u306f\u3001\u5f53\u793e\u306e\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u30e9\u30a4\u30bb\u30f3\u30b9\u5951\u7d04\uff08EULA\uff09\u306e\u8ce0\u511f\u8cac\u4efb\u306e\u5236\u9650\u6761\u9805\u3068\u6574\u5408\u3057\u3066\u3044\u307e\u3059\u3002\u4e21\u65b9\u306e\u5951\u7d04\u304c\u9069\u7528\u3055\u308c\u308b\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u3088\u308a\u6709\u5229\u306a\u5236\u9650\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002",
    "zh": "\u6b64\u8d54\u507f\u8d23\u4efb\u9650\u5236\u4e0e\u6211\u4eec\u7684\u300a\u6700\u7ec8\u7528\u6237\u8bb8\u53ef\u534f\u8bae\u300b\uff08EULA\uff09\u4e2d\u7684\u8d54\u507f\u8d23\u4efb\u9650\u5236\u6761\u6b3e\u4e00\u81f4\u3002\u5f53\u4e24\u4efd\u534f\u8bae\u5747\u9002\u7528\u65f6\uff0c\u4ee5\u5bf9\u7528\u6237\u66f4\u6709\u5229\u7684\u9650\u5236\u4e3a\u51c6\u3002",
    "ar": "\u064a\u062a\u0648\u0627\u0641\u0642 \u0647\u0630\u0627 \u0627\u0644\u062a\u062d\u062f\u064a\u062f \u0644\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0645\u0639 \u0628\u0646\u062f \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0641\u064a \u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u062a\u0631\u062e\u064a\u0635 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a (EULA). \u0639\u0646\u062f\u0645\u0627 \u062a\u0646\u0637\u0628\u0642 \u0643\u0644\u062a\u0627 \u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u062a\u064a\u0646\u060c \u064a\u0633\u0631\u064a \u0627\u0644\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0644\u0627\u0621\u0645\u0629 (\u0645\u0646 \u0645\u0646\u0638\u0648\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645).",
    "uk": "\u0426\u0435 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0443\u0437\u0433\u043e\u0434\u0436\u0435\u043d\u0435 \u0437 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044f\u043c \u043f\u0440\u043e \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0432 \u043d\u0430\u0448\u0456\u0439 \u041b\u0456\u0446\u0435\u043d\u0437\u0456\u0439\u043d\u0456\u0439 \u0443\u0433\u043e\u0434\u0456 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 (EULA). \u042f\u043a\u0449\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u043e\u0431\u0438\u0434\u0432\u0456 \u0443\u0433\u043e\u0434\u0438, \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0443 \u043c\u0430\u0454 \u0431\u0456\u043b\u044c\u0448 \u0441\u043f\u0440\u0438\u044f\u0442\u043b\u0438\u0432\u0435 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f (\u0437 \u0442\u043e\u0447\u043a\u0438 \u0437\u043e\u0440\u0443 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430).",
}

EULA_LIABILITY_CROSSREF = {
    "en": "This limitation of liability is consistent with the Limitation of Liability clause in our Terms of Service. Where both agreements apply, the more favourable limitation (from the user\u2019s perspective) shall prevail.",
    "pl": "To ograniczenie odpowiedzialno\u015bci jest sp\u00f3jne z klauzul\u0105 ograniczenia odpowiedzialno\u015bci w naszym Regulaminie. W przypadku stosowania obu um\u00f3w obowi\u0105zuje korzystniejsze ograniczenie (z perspektywy u\u017cytkownika).",
    "de": "Diese Haftungsbegrenzung steht im Einklang mit der Haftungsbegrenzungsklausel in unseren Nutzungsbedingungen. Soweit beide Vereinbarungen gelten, hat die f\u00fcr den Nutzer g\u00fcnstigere Begrenzung Vorrang.",
    "es": "Esta limitaci\u00f3n de responsabilidad es coherente con la cl\u00e1usula de Limitaci\u00f3n de Responsabilidad de nuestros T\u00e9rminos de Servicio. Cuando ambos acuerdos sean aplicables, prevalecer\u00e1 la limitaci\u00f3n m\u00e1s favorable (desde la perspectiva del usuario).",
    "fr": "Cette limitation de responsabilit\u00e9 est coh\u00e9rente avec la clause de Limitation de responsabilit\u00e9 de nos Conditions d\u2019utilisation. Lorsque les deux accords s\u2019appliquent, la limitation la plus favorable (du point de vue de l\u2019utilisateur) pr\u00e9vaudra.",
    "ja": "\u3053\u306e\u8ce0\u511f\u8cac\u4efb\u306e\u5236\u9650\u306f\u3001\u5f53\u793e\u306e\u5229\u7528\u898f\u7d04\u306e\u8ce0\u511f\u8cac\u4efb\u306e\u5236\u9650\u6761\u9805\u3068\u6574\u5408\u3057\u3066\u3044\u307e\u3059\u3002\u4e21\u65b9\u306e\u5951\u7d04\u304c\u9069\u7528\u3055\u308c\u308b\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u3088\u308a\u6709\u5229\u306a\u5236\u9650\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002",
    "zh": "\u6b64\u8d54\u507f\u8d23\u4efb\u9650\u5236\u4e0e\u6211\u4eec\u7684\u300a\u670d\u52a1\u6761\u6b3e\u300b\u4e2d\u7684\u8d54\u507f\u8d23\u4efb\u9650\u5236\u6761\u6b3e\u4e00\u81f4\u3002\u5f53\u4e24\u4efd\u534f\u8bae\u5747\u9002\u7528\u65f6\uff0c\u4ee5\u5bf9\u7528\u6237\u66f4\u6709\u5229\u7684\u9650\u5236\u4e3a\u51c6\u3002",
    "ar": "\u064a\u062a\u0648\u0627\u0641\u0642 \u0647\u0630\u0627 \u0627\u0644\u062a\u062d\u062f\u064a\u062f \u0644\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0645\u0639 \u0628\u0646\u062f \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0641\u064a \u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629. \u0639\u0646\u062f\u0645\u0627 \u062a\u0646\u0637\u0628\u0642 \u0643\u0644\u062a\u0627 \u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u062a\u064a\u0646\u060c \u064a\u0633\u0631\u064a \u0627\u0644\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0644\u0627\u0621\u0645\u0629 (\u0645\u0646 \u0645\u0646\u0638\u0648\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645).",
    "uk": "\u0426\u0435 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0443\u0437\u0433\u043e\u0434\u0436\u0435\u043d\u0435 \u0437 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044f\u043c \u043f\u0440\u043e \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0432 \u043d\u0430\u0448\u0438\u0445 \u0423\u043c\u043e\u0432\u0430\u0445 \u043d\u0430\u0434\u0430\u043d\u043d\u044f \u043f\u043e\u0441\u043b\u0443\u0433. \u042f\u043a\u0449\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u043e\u0431\u0438\u0434\u0432\u0456 \u0443\u0433\u043e\u0434\u0438, \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0443 \u043c\u0430\u0454 \u0431\u0456\u043b\u044c\u0448 \u0441\u043f\u0440\u0438\u044f\u0442\u043b\u0438\u0432\u0435 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f (\u0437 \u0442\u043e\u0447\u043a\u0438 \u0437\u043e\u0440\u0443 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430).",
}

def apply_liability_consistency(data, locale):
    """Story 15.2: Harmonise liability caps and add cross-references."""
    changes = 0
    terms = data.get("Terms", {})
    eula = data.get("Eula", {})

    # Update Terms liability cap to tiered approach
    lol = terms.get("limitationOfLiability", {})
    if lol and locale in TERMS_LIABILITY_CAP:
        lol["cap"] = TERMS_LIABILITY_CAP[locale]
        lol["crossReference"] = TERMS_LIABILITY_CROSSREF[locale]
        changes += 1

    # Add cross-reference to EULA liability
    liab = eula.get("liability", {})
    if liab and locale in EULA_LIABILITY_CROSSREF:
        liab["crossReference"] = EULA_LIABILITY_CROSSREF[locale]
        changes += 1

    return changes


# ---------------------------------------------------------------------------
# STORY 15.3: Apple Licensed Application EULA Incorporation by Reference
# ---------------------------------------------------------------------------

APPLE_EULA_TERMS = {
    "en": {
        "heading": "Apple Licensed Application EULA",
        "p1": "To the extent required by Apple\u2019s App Store terms, this agreement incorporates by reference Apple\u2019s Licensed Application End User License Agreement, available at <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "In the event of a conflict between these Terms and Apple\u2019s Licensed Application EULA, Apple\u2019s EULA shall prevail to the extent of the conflict, but only in respect of matters within Apple\u2019s EULA\u2019s scope.",
    },
    "pl": {
        "heading": "Umowa licencyjna Apple dla aplikacji",
        "p1": "W zakresie wymaganym przez warunki Apple App Store, niniejsza umowa w\u0142\u0105cza przez odniesienie Umow\u0119 licencyjn\u0105 u\u017cytkownika ko\u0144cowego dla licencjonowanej aplikacji Apple, dost\u0119pn\u0105 pod adresem <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "W przypadku sprzeczno\u015bci mi\u0119dzy niniejszym Regulaminem a Umow\u0105 licencyjn\u0105 Apple, Umowa licencyjna Apple ma pierwsze\u0144stwo w zakresie tej sprzeczno\u015bci, ale wy\u0142\u0105cznie w odniesieniu do spraw obj\u0119tych zakresem Umowy licencyjnej Apple.",
    },
    "de": {
        "heading": "Apple-Lizenzanwendungs-EULA",
        "p1": "Soweit durch die Bedingungen des Apple App Store erforderlich, beinhaltet diese Vereinbarung durch Verweis die Endbenutzer-Lizenzvereinbarung f\u00fcr lizenzierte Anwendungen von Apple, verf\u00fcgbar unter <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "Im Falle eines Widerspruchs zwischen diesen Nutzungsbedingungen und Apples Lizenzanwendungs-EULA hat Apples EULA im Umfang des Widerspruchs Vorrang, jedoch nur hinsichtlich Angelegenheiten, die in den Geltungsbereich von Apples EULA fallen.",
    },
    "es": {
        "heading": "EULA de aplicaci\u00f3n con licencia de Apple",
        "p1": "En la medida en que lo requieran los t\u00e9rminos del App Store de Apple, este acuerdo incorpora por referencia el Acuerdo de Licencia de Usuario Final para Aplicaciones con Licencia de Apple, disponible en <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "En caso de conflicto entre estos T\u00e9rminos y la EULA de Aplicaci\u00f3n con Licencia de Apple, la EULA de Apple prevalecer\u00e1 en la medida del conflicto, pero \u00fanicamente en relaci\u00f3n con asuntos dentro del \u00e1mbito de la EULA de Apple.",
    },
    "fr": {
        "heading": "CLUF d\u2019application sous licence Apple",
        "p1": "Dans la mesure requise par les conditions de l\u2019App Store d\u2019Apple, le pr\u00e9sent accord incorpore par r\u00e9f\u00e9rence le Contrat de licence utilisateur final pour les applications sous licence d\u2019Apple, disponible \u00e0 l\u2019adresse <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "En cas de conflit entre les pr\u00e9sentes Conditions et le CLUF d\u2019application sous licence d\u2019Apple, le CLUF d\u2019Apple pr\u00e9vaudra dans la mesure du conflit, mais uniquement pour les questions relevant du champ d\u2019application du CLUF d\u2019Apple.",
    },
    "ja": {
        "heading": "Apple\u30e9\u30a4\u30bb\u30f3\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3EULA",
        "p1": "Apple App Store\u306e\u898f\u7d04\u3067\u8981\u6c42\u3055\u308c\u308b\u7bc4\u56f2\u306b\u304a\u3044\u3066\u3001\u672c\u5951\u7d04\u306fApple\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u4f7f\u7528\u8a31\u8afe\u5951\u7d04\u3092\u53c2\u7167\u306b\u3088\u308a\u7d44\u307f\u8fbc\u307f\u307e\u3059\u3002\u8a73\u7d30\u306f<appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>\u3067\u3054\u89a7\u3044\u305f\u3060\u3051\u307e\u3059\u3002",
        "p2": "\u672c\u898f\u7d04\u3068Apple\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3EULA\u306e\u9593\u306b\u77db\u76fe\u304c\u3042\u308b\u5834\u5408\u3001\u305d\u306e\u77db\u76fe\u306e\u7bc4\u56f2\u5185\u3067\u306fApple\u306eEULA\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u304c\u3001Apple\u306eEULA\u306e\u7bc4\u56f2\u5185\u306e\u4e8b\u9805\u306b\u9650\u308a\u307e\u3059\u3002",
    },
    "zh": {
        "heading": "Apple\u8bb8\u53ef\u5e94\u7528\u7a0b\u5e8fEULA",
        "p1": "\u5728Apple App Store\u6761\u6b3e\u8981\u6c42\u7684\u8303\u56f4\u5185\uff0c\u672c\u534f\u8bae\u4ee5\u5f15\u7528\u65b9\u5f0f\u7eb3\u5165Apple\u7684\u8bb8\u53ef\u5e94\u7528\u7a0b\u5e8f\u6700\u7ec8\u7528\u6237\u8bb8\u53ef\u534f\u8bae\uff0c\u8be6\u89c1<appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>\u3002",
        "p2": "\u5982\u672c\u6761\u6b3e\u4e0eApple\u7684\u8bb8\u53ef\u5e94\u7528\u7a0b\u5e8fEULA\u53d1\u751f\u51b2\u7a81\uff0c\u5219\u5728\u51b2\u7a81\u8303\u56f4\u5185\u4ee5Apple\u7684EULA\u4e3a\u51c6\uff0c\u4f46\u4ec5\u9650\u4e8eApple EULA\u8303\u56f4\u5185\u7684\u4e8b\u9879\u3002",
    },
    "ar": {
        "heading": "\u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u062a\u0631\u062e\u064a\u0635 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0645\u0631\u062e\u0635 \u0645\u0646 Apple",
        "p1": "\u0628\u0627\u0644\u0642\u062f\u0631 \u0627\u0644\u0630\u064a \u062a\u062a\u0637\u0644\u0628\u0647 \u0634\u0631\u0648\u0637 App Store \u0645\u0646 Apple\u060c \u062a\u062a\u0636\u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u0628\u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u062a\u0631\u062e\u064a\u0635 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0644\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0645\u0631\u062e\u0635\u0629 \u0645\u0646 Apple\u060c \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0639\u0644\u0649 <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "\u0641\u064a \u062d\u0627\u0644\u0629 \u062a\u0639\u0627\u0631\u0636 \u0628\u064a\u0646 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u062a\u0641\u0627\u0642\u064a\u0629 EULA \u0627\u0644\u0645\u0631\u062e\u0635\u0629 \u0645\u0646 Apple\u060c \u062a\u0633\u0648\u062f \u0627\u062a\u0641\u0627\u0642\u064a\u0629 Apple \u0641\u064a \u0646\u0637\u0627\u0642 \u0627\u0644\u062a\u0639\u0627\u0631\u0636\u060c \u0648\u0644\u0643\u0646 \u0641\u0642\u0637 \u0641\u064a\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0628\u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u0634\u0645\u0648\u0644\u0629 \u0641\u064a \u0646\u0637\u0627\u0642 EULA \u0645\u0646 Apple.",
    },
    "uk": {
        "heading": "\u041b\u0456\u0446\u0435\u043d\u0437\u0456\u0439\u043d\u0430 \u0443\u0433\u043e\u0434\u0430 Apple \u0434\u043b\u044f \u043b\u0456\u0446\u0435\u043d\u0437\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0434\u043e\u0434\u0430\u0442\u043a\u0430",
        "p1": "\u0423 \u043c\u0435\u0436\u0430\u0445, \u0432\u0438\u043c\u0430\u0433\u0430\u043d\u0438\u0445 \u0443\u043c\u043e\u0432\u0430\u043c\u0438 Apple App Store, \u0446\u044f \u0443\u0433\u043e\u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0448\u043b\u044f\u0445\u043e\u043c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u041b\u0456\u0446\u0435\u043d\u0437\u0456\u0439\u043d\u0443 \u0443\u0433\u043e\u0434\u0443 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0434\u043b\u044f \u043b\u0456\u0446\u0435\u043d\u0437\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0434\u043e\u0434\u0430\u0442\u043a\u0430 Apple, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0443 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u044e <appleEulaLink>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</appleEulaLink>.",
        "p2": "\u0423 \u0440\u0430\u0437\u0456 \u043a\u043e\u043d\u0444\u043b\u0456\u043a\u0442\u0443 \u043c\u0456\u0436 \u0446\u0438\u043c\u0438 \u0423\u043c\u043e\u0432\u0430\u043c\u0438 \u0442\u0430 \u041b\u0456\u0446\u0435\u043d\u0437\u0456\u0439\u043d\u043e\u044e \u0443\u0433\u043e\u0434\u043e\u044e Apple \u0434\u043b\u044f \u043b\u0456\u0446\u0435\u043d\u0437\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0434\u043e\u0434\u0430\u0442\u043a\u0430, \u0443\u0433\u043e\u0434\u0430 Apple \u043c\u0430\u0454 \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0443 \u0432 \u043c\u0435\u0436\u0430\u0445 \u043a\u043e\u043d\u0444\u043b\u0456\u043a\u0442\u0443, \u0430\u043b\u0435 \u043b\u0438\u0448\u0435 \u0449\u043e\u0434\u043e \u043f\u0438\u0442\u0430\u043d\u044c, \u0449\u043e \u0432\u0445\u043e\u0434\u044f\u0442\u044c \u0434\u043e \u0441\u0444\u0435\u0440\u0438 \u0434\u0456\u0457 \u0443\u0433\u043e\u0434\u0438 Apple.",
    },
}

EULA_APPLE_CROSSREF = {
    "en": "These Apple-Specific Terms supplement the incorporation by reference of Apple\u2019s Licensed Application End User License Agreement in our <termsLink>Terms of Service</termsLink>.",
    "pl": "Te warunki specyficzne dla Apple uzupe\u0142niaj\u0105 w\u0142\u0105czenie przez odniesienie Umowy licencyjnej Apple dla licencjonowanej aplikacji w naszym <termsLink>Regulaminie</termsLink>.",
    "de": "Diese Apple-spezifischen Bedingungen erg\u00e4nzen die Einbeziehung von Apples Lizenzanwendungs-EULA durch Verweis in unseren <termsLink>Nutzungsbedingungen</termsLink>.",
    "es": "Estos T\u00e9rminos espec\u00edficos de Apple complementan la incorporaci\u00f3n por referencia de la EULA de Aplicaci\u00f3n con Licencia de Apple en nuestros <termsLink>T\u00e9rminos de Servicio</termsLink>.",
    "fr": "Ces conditions sp\u00e9cifiques \u00e0 Apple compl\u00e8tent l\u2019incorporation par r\u00e9f\u00e9rence du CLUF d\u2019application sous licence d\u2019Apple dans nos <termsLink>Conditions d\u2019utilisation</termsLink>.",
    "ja": "\u3053\u308c\u3089\u306eApple\u56fa\u6709\u306e\u6761\u9805\u306f\u3001\u5f53\u793e\u306e<termsLink>\u5229\u7528\u898f\u7d04</termsLink>\u306b\u304a\u3051\u308bApple\u30e9\u30a4\u30bb\u30f3\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3EULA\u306e\u53c2\u7167\u306b\u3088\u308b\u7d44\u307f\u8fbc\u307f\u3092\u88dc\u5b8c\u3059\u308b\u3082\u306e\u3067\u3059\u3002",
    "zh": "\u8fd9\u4e9bApple\u7279\u5b9a\u6761\u6b3e\u662f\u5bf9\u6211\u4eec<termsLink>\u670d\u52a1\u6761\u6b3e</termsLink>\u4e2d\u5f15\u7528Apple\u8bb8\u53ef\u5e94\u7528\u7a0b\u5e8fEULA\u7684\u8865\u5145\u3002",
    "ar": "\u062a\u0643\u0645\u0651\u0644 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0640 Apple \u0627\u0644\u062a\u0636\u0645\u064a\u0646 \u0628\u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0644\u0627\u062a\u0641\u0627\u0642\u064a\u0629 EULA \u0627\u0644\u0645\u0631\u062e\u0635\u0629 \u0645\u0646 Apple \u0641\u064a <termsLink>\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629</termsLink>.",
    "uk": "\u0426\u0456 \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u0447\u043d\u0456 \u0434\u043b\u044f Apple \u0443\u043c\u043e\u0432\u0438 \u0434\u043e\u043f\u043e\u0432\u043d\u044e\u044e\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f \u0448\u043b\u044f\u0445\u043e\u043c \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u041b\u0456\u0446\u0435\u043d\u0437\u0456\u0439\u043d\u043e\u0457 \u0443\u0433\u043e\u0434\u0438 Apple \u0432 \u043d\u0430\u0448\u0438\u0445 <termsLink>\u0423\u043c\u043e\u0432\u0430\u0445 \u043d\u0430\u0434\u0430\u043d\u043d\u044f \u043f\u043e\u0441\u043b\u0443\u0433</termsLink>.",
}

def apply_apple_eula(data, locale):
    """Story 15.3: Add Apple EULA incorporation in Terms + cross-ref in EULA."""
    changes = 0
    terms = data.get("Terms", {})
    eula = data.get("Eula", {})

    if locale in APPLE_EULA_TERMS:
        terms["appleLicensedEula"] = APPLE_EULA_TERMS[locale]
        changes += 1

    if locale in EULA_APPLE_CROSSREF:
        eula.setdefault("appleTerms", {})
        eula["appleTerms"]["crossReference"] = EULA_APPLE_CROSSREF[locale]
        changes += 1

    return changes


# ---------------------------------------------------------------------------
# STORY 15.4: Phase 2 Version Bumps and Changelog
# ---------------------------------------------------------------------------

PRIVACY_CHANGELOG = {
    "en": "<b>v2.2</b> (July 2025) \u2014 Phase 2 legal hardening: standardised company name to Lumenshore Limited throughout; added GDPR Art. 77 ICO complaint right and contact details; added processor sub-processor register; enhanced international transfer safeguards; added regional privacy frameworks (Japan APPI, China PIPL, Brazil LGPD, Germany BDSG, Australia Privacy Act, India DPDP, Canada PIPEDA, South Korea PIPA, Switzerland FADP); improved electronic communications and PECR compliance disclosures.",
    "pl": "<b>v2.2</b> (lipiec 2025) \u2014 Faza 2 wzmocnienia prawnego: ujednolicono nazw\u0119 firmy na Lumenshore Limited; dodano prawo do skargi do ICO (art. 77 RODO); dodano rejestr podprocesor\u00f3w; wzmocniono zabezpieczenia transferu mi\u0119dzynarodowego; dodano regionalne ramy ochrony prywatno\u015bci; ulepszono informacje o komunikacji elektronicznej i zgodno\u015bci z PECR.",
    "de": "<b>v2.2</b> (Juli 2025) \u2014 Phase-2-Rechtsabsicherung: Firmenname durchg\u00e4ngig auf Lumenshore Limited standardisiert; ICO-Beschwerderecht und Kontaktdaten gem\u00e4\u00df DSGVO Art. 77 hinzugef\u00fcgt; Auftragsverarbeiter-Register erg\u00e4nzt; Internationale Transfersicherungen verbessert; Regionale Datenschutzrahmen hinzugef\u00fcgt; PECR-Offenlegungen verbessert.",
    "es": "<b>v2.2</b> (julio 2025) \u2014 Fase 2 de endurecimiento legal: nombre de empresa estandarizado a Lumenshore Limited; a\u00f1adido derecho de queja ante ICO (Art. 77 RGPD); a\u00f1adido registro de subprocesadores; mejoradas salvaguardas de transferencia internacional; a\u00f1adidos marcos regionales de privacidad; mejoradas divulgaciones de PECR.",
    "fr": "<b>v2.2</b> (juillet 2025) \u2014 Phase 2 de renforcement juridique : nom de l\u2019entreprise standardis\u00e9 en Lumenshore Limited ; ajout du droit de plainte ICO (Art. 77 RGPD) ; ajout du registre des sous-traitants ; am\u00e9lioration des garanties de transfert international ; ajout des cadres r\u00e9gionaux de confidentialit\u00e9 ; am\u00e9lioration des divulgations PECR.",
    "ja": "<b>v2.2</b>\uff082025\u5e747\u6708\uff09\u2014 \u30d5\u30a7\u30fc\u30ba2\u6cd5\u7684\u5f37\u5316\uff1a\u4f1a\u793e\u540d\u3092Lumenshore Limited\u306b\u7d71\u4e00\u3001ICO\u82e6\u60c5\u6a29\u304a\u3088\u3073\u9023\u7d61\u5148\u3092\u8ffd\u52a0\u3001\u526f\u51e6\u7406\u8005\u767b\u9332\u3092\u8ffd\u52a0\u3001\u56fd\u969b\u79fb\u8ee2\u306e\u4fdd\u8b77\u63aa\u7f6e\u3092\u5f37\u5316\u3001\u5730\u57df\u5225\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u8ffd\u52a0\u3001PECR\u958b\u793a\u3092\u6539\u5584\u3002",
    "zh": "<b>v2.2</b>\uff082025\u5e747\u6708\uff09\u2014 \u7b2c\u4e8c\u9636\u6bb5\u6cd5\u5f8b\u52a0\u56fa\uff1a\u516c\u53f8\u540d\u79f0\u7edf\u4e00\u4e3aLumenshore Limited\uff1b\u6dfb\u52a0ICO\u6295\u8bc9\u6743\u548c\u8054\u7cfb\u65b9\u5f0f\uff1b\u6dfb\u52a0\u526f\u5904\u7406\u8005\u767b\u8bb0\u518c\uff1b\u52a0\u5f3a\u56fd\u9645\u4f20\u8f93\u4fdd\u969c\uff1b\u6dfb\u52a0\u5730\u533a\u9690\u79c1\u6846\u67b6\uff1b\u6539\u8fdbPECR\u62ab\u9732\u3002",
    "ar": "<b>v2.2</b> (\u064a\u0648\u0644\u064a\u0648 2025) \u2014 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 2 \u0645\u0646 \u0627\u0644\u062a\u0639\u0632\u064a\u0632 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a: \u062a\u0648\u062d\u064a\u062f \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0625\u0644\u0649 Lumenshore Limited\u061b \u0625\u0636\u0627\u0641\u0629 \u062d\u0642 \u0627\u0644\u0634\u0643\u0648\u0649 \u0644\u062f\u0649 ICO\u061b \u0625\u0636\u0627\u0641\u0629 \u0633\u062c\u0644 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u064a\u0646 \u0627\u0644\u0641\u0631\u0639\u064a\u064a\u0646\u061b \u062a\u0639\u0632\u064a\u0632 \u0636\u0645\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062f\u0648\u0644\u064a\u061b \u0625\u0636\u0627\u0641\u0629 \u0623\u0637\u0631 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u0625\u0642\u0644\u064a\u0645\u064a\u0629\u061b \u062a\u062d\u0633\u064a\u0646 \u0625\u0641\u0635\u0627\u062d\u0627\u062a PECR.",
    "uk": "<b>v2.2</b> (\u043b\u0438\u043f\u0435\u043d\u044c 2025) \u2014 \u0424\u0430\u0437\u0430 2 \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u0437\u043c\u0456\u0446\u043d\u0435\u043d\u043d\u044f: \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0430\u0437\u0432\u0443 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457 \u043d\u0430 Lumenshore Limited; \u0434\u043e\u0434\u0430\u043d\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0441\u043a\u0430\u0440\u0433\u0443 \u0434\u043e ICO; \u0434\u043e\u0434\u0430\u043d\u043e \u0440\u0435\u0454\u0441\u0442\u0440 \u043f\u0456\u0434\u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0456\u0432; \u043f\u043e\u0441\u0438\u043b\u0435\u043d\u043e \u0433\u0430\u0440\u0430\u043d\u0442\u0456\u0457 \u043c\u0456\u0436\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456; \u0434\u043e\u0434\u0430\u043d\u043e \u0440\u0435\u0433\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0440\u0430\u043c\u043a\u0438 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456; \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043e \u0440\u043e\u0437\u043a\u0440\u0438\u0442\u0442\u044f PECR.",
}

TERMS_CHANGELOG = {
    "en": "<b>v1.2</b> (July 2025) \u2014 Phase 2 legal hardening: standardised company name to Lumenshore Limited; harmonised tiered liability cap (free/paid) with EULA; added Apple Licensed Application EULA incorporation by reference; added accessibility commitment and WCAG 2.1 AA reference; added 30-day assignment notification obligation with user termination right; added force majeure, distance selling, and service termination detail; added cross-policy liability consistency note.",
    "pl": "<b>v1.2</b> (lipiec 2025) \u2014 Faza 2 wzmocnienia prawnego: ujednolicono nazw\u0119 firmy; zharmonizowano wielopoziomowy limit odpowiedzialno\u015bci z EULA; dodano w\u0142\u0105czenie EULA Apple; dodano zobowi\u0105zanie dost\u0119pno\u015bci; dodano obowi\u0105zek powiadomienia o cesji; dodano si\u0142\u0119 wy\u017csz\u0105 i szczeg\u00f3\u0142y sprzeda\u017cy na odleg\u0142o\u015b\u0107.",
    "de": "<b>v1.2</b> (Juli 2025) \u2014 Phase-2-Rechtsabsicherung: Firmenname standardisiert; gestaffelte Haftungsobergrenze mit EULA harmonisiert; Apple-Lizenz-EULA einbezogen; Barrierefreiheitsverpflichtung hinzugef\u00fcgt; 30-Tage-Abtretungsbenachrichtigungspflicht hinzugef\u00fcgt; H\u00f6here Gewalt und Fernabsatz-Details erg\u00e4nzt.",
    "es": "<b>v1.2</b> (julio 2025) \u2014 Fase 2 de endurecimiento legal: nombre de empresa estandarizado; l\u00edmite de responsabilidad escalonado armonizado con EULA; incorporaci\u00f3n de EULA de Apple; compromiso de accesibilidad a\u00f1adido; obligaci\u00f3n de notificaci\u00f3n de cesi\u00f3n a\u00f1adida; detalles de fuerza mayor y venta a distancia a\u00f1adidos.",
    "fr": "<b>v1.2</b> (juillet 2025) \u2014 Phase 2 de renforcement juridique : nom d\u2019entreprise standardis\u00e9 ; plafonds de responsabilit\u00e9 \u00e9chelonn\u00e9s harmonis\u00e9s avec le CLUF ; incorporation du CLUF Apple ; engagement d\u2019accessibilit\u00e9 ajout\u00e9 ; obligation de notification de cession ajout\u00e9e ; d\u00e9tails de force majeure ajout\u00e9s.",
    "ja": "<b>v1.2</b>\uff082025\u5e747\u6708\uff09\u2014 \u30d5\u30a7\u30fc\u30ba2\u6cd5\u7684\u5f37\u5316\uff1a\u4f1a\u793e\u540d\u7d71\u4e00\u3001\u968e\u5c64\u5225\u8ce0\u511f\u8cac\u4efb\u4e0a\u9650\u3092EULA\u3068\u8abf\u548c\u3001Apple EULA\u53c2\u7167\u306b\u3088\u308b\u7d44\u307f\u8fbc\u307f\u3001\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u8ffd\u52a0\u3001\u8b72\u6e21\u901a\u77e5\u7fa9\u52d9\u8ffd\u52a0\u3001\u4e0d\u53ef\u6297\u529b\u8a73\u7d30\u8ffd\u52a0\u3002",
    "zh": "<b>v1.2</b>\uff082025\u5e747\u6708\uff09\u2014 \u7b2c\u4e8c\u9636\u6bb5\u6cd5\u5f8b\u52a0\u56fa\uff1a\u7edf\u4e00\u516c\u53f8\u540d\u79f0\uff1b\u5206\u7ea7\u8d54\u507f\u8d23\u4efb\u4e0a\u9650\u4e0eEULA\u534f\u8c03\uff1bApple EULA\u5f15\u7528\u7eb3\u5165\uff1b\u6dfb\u52a0\u65e0\u969c\u788d\u627f\u8bfa\uff1b\u6dfb\u52a0\u8f6c\u8ba9\u901a\u77e5\u4e49\u52a1\uff1b\u6dfb\u52a0\u4e0d\u53ef\u6297\u529b\u8be6\u60c5\u3002",
    "ar": "<b>v1.2</b> (\u064a\u0648\u0644\u064a\u0648 2025) \u2014 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 2 \u0645\u0646 \u0627\u0644\u062a\u0639\u0632\u064a\u0632 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a: \u062a\u0648\u062d\u064a\u062f \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629\u061b \u0645\u0648\u0627\u0621\u0645\u0629 \u0633\u0642\u0641 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0627\u0644\u0645\u062a\u062f\u0631\u062c \u0645\u0639 EULA\u061b \u062a\u0636\u0645\u064a\u0646 EULA Apple\u061b \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0632\u0627\u0645 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644\u061b \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0632\u0627\u0645 \u0625\u062e\u0637\u0627\u0631 \u0627\u0644\u062a\u0646\u0627\u0632\u0644\u061b \u0625\u0636\u0627\u0641\u0629 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0642\u0627\u0647\u0631\u0629.",
    "uk": "<b>v1.2</b> (\u043b\u0438\u043f\u0435\u043d\u044c 2025) \u2014 \u0424\u0430\u0437\u0430 2 \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u0437\u043c\u0456\u0446\u043d\u0435\u043d\u043d\u044f: \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0430\u0437\u0432\u0443 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457; \u0433\u0430\u0440\u043c\u043e\u043d\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u0431\u0430\u0433\u0430\u0442\u043e\u0440\u0456\u0432\u043d\u0435\u0432\u0443 \u043c\u0435\u0436\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0437 EULA; \u0434\u043e\u0434\u0430\u043d\u043e Apple EULA; \u0434\u043e\u0434\u0430\u043d\u043e \u0437\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u0430\u043d\u043d\u044f \u0449\u043e\u0434\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456; \u0434\u043e\u0434\u0430\u043d\u043e \u043e\u0431\u043e\u0432\u2019\u044f\u0437\u043e\u043a \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u0432\u0456\u0434\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u043d\u044f; \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u0435\u0442\u0430\u043b\u0456 \u0444\u043e\u0440\u0441-\u043c\u0430\u0436\u043e\u0440\u0443.",
}

EULA_CHANGELOG = {
    "en": "<b>v1.1</b> (July 2025) \u2014 Phase 2 legal hardening: standardised company name to Lumenshore Limited throughout; added statutory carve-outs for CRA 2015 and unfair terms; added consumer rights section with CRA 2015 digital content standards, 14-day cooling-off period, and remedies; added export compliance (EAR/ITAR); added open source acknowledgements; added assumption of risk; added cross-policy liability consistency note referencing Terms of Service.",
    "pl": "<b>v1.1</b> (lipiec 2025) \u2014 Faza 2 wzmocnienia prawnego: ujednolicono nazw\u0119 firmy; dodano wy\u0142\u0105czenia ustawowe dla CRA 2015; dodano prawa konsumenta; dodano zgodno\u015b\u0107 eksportow\u0105; dodano potwierdzenia open source; dodano not\u0119 sp\u00f3jno\u015bci odpowiedzialno\u015bci mi\u0119dzy politykami.",
    "de": "<b>v1.1</b> (Juli 2025) \u2014 Phase-2-Rechtsabsicherung: Firmenname standardisiert; gesetzliche Ausnahmen f\u00fcr CRA 2015 hinzugef\u00fcgt; Verbraucherrechte hinzugef\u00fcgt; Exportkonformit\u00e4t hinzugef\u00fcgt; Open-Source-Hinweise hinzugef\u00fcgt; Haftungskonsistenzhinweis erg\u00e4nzt.",
    "es": "<b>v1.1</b> (julio 2025) \u2014 Fase 2 de endurecimiento legal: nombre de empresa estandarizado; excepciones legales CRA 2015 a\u00f1adidas; derechos del consumidor a\u00f1adidos; cumplimiento de exportaci\u00f3n a\u00f1adido; reconocimientos de c\u00f3digo abierto a\u00f1adidos; nota de consistencia de responsabilidad a\u00f1adida.",
    "fr": "<b>v1.1</b> (juillet 2025) \u2014 Phase 2 de renforcement juridique : nom d\u2019entreprise standardis\u00e9 ; exceptions l\u00e9gales CRA 2015 ajout\u00e9es ; droits des consommateurs ajout\u00e9s ; conformit\u00e9 export ajout\u00e9e ; mentions open source ajout\u00e9es ; note de coh\u00e9rence de responsabilit\u00e9 ajout\u00e9e.",
    "ja": "<b>v1.1</b>\uff082025\u5e747\u6708\uff09\u2014 \u30d5\u30a7\u30fc\u30ba2\u6cd5\u7684\u5f37\u5316\uff1a\u4f1a\u793e\u540d\u7d71\u4e00\u3001CRA 2015\u6cd5\u5b9a\u9664\u5916\u8ffd\u52a0\u3001\u6d88\u8cbb\u8005\u6a29\u5229\u8ffd\u52a0\u3001\u8f38\u51fa\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u8ffd\u52a0\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u8b1d\u8f9e\u8ffd\u52a0\u3001\u8ce0\u511f\u8cac\u4efb\u6574\u5408\u6027\u30ce\u30fc\u30c8\u8ffd\u52a0\u3002",
    "zh": "<b>v1.1</b>\uff082025\u5e747\u6708\uff09\u2014 \u7b2c\u4e8c\u9636\u6bb5\u6cd5\u5f8b\u52a0\u56fa\uff1a\u7edf\u4e00\u516c\u53f8\u540d\u79f0\uff1b\u6dfb\u52a0CRA 2015\u6cd5\u5b9a\u8c41\u514d\uff1b\u6dfb\u52a0\u6d88\u8d39\u8005\u6743\u5229\uff1b\u6dfb\u52a0\u51fa\u53e3\u5408\u89c4\uff1b\u6dfb\u52a0\u5f00\u6e90\u58f0\u660e\uff1b\u6dfb\u52a0\u8d54\u507f\u8d23\u4efb\u4e00\u81f4\u6027\u8bf4\u660e\u3002",
    "ar": "<b>v1.1</b> (\u064a\u0648\u0644\u064a\u0648 2025) \u2014 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 2 \u0645\u0646 \u0627\u0644\u062a\u0639\u0632\u064a\u0632 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a: \u062a\u0648\u062d\u064a\u062f \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629\u061b \u0625\u0636\u0627\u0641\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0621\u0627\u062a CRA 2015\u061b \u0625\u0636\u0627\u0641\u0629 \u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0633\u062a\u0647\u0644\u0643\u061b \u0625\u0636\u0627\u0641\u0629 \u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u062a\u0635\u062f\u064a\u0631\u061b \u0625\u0636\u0627\u0641\u0629 \u0625\u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0635\u0627\u062f\u0631 \u0627\u0644\u0645\u0641\u062a\u0648\u062d\u0629\u061b \u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062d\u0638\u0629 \u0627\u062a\u0633\u0627\u0642 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629.",
    "uk": "<b>v1.1</b> (\u043b\u0438\u043f\u0435\u043d\u044c 2025) \u2014 \u0424\u0430\u0437\u0430 2 \u044e\u0440\u0438\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u0437\u043c\u0456\u0446\u043d\u0435\u043d\u043d\u044f: \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0430\u0437\u0432\u0443 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457; \u0434\u043e\u0434\u0430\u043d\u043e \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0432\u0447\u0456 \u0432\u0438\u043d\u044f\u0442\u043a\u0438 CRA 2015; \u0434\u043e\u0434\u0430\u043d\u043e \u043f\u0440\u0430\u0432\u0430 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u0447\u0456\u0432; \u0434\u043e\u0434\u0430\u043d\u043e \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u043d\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0456\u0441\u0442\u044c; \u0434\u043e\u0434\u0430\u043d\u043e \u043f\u043e\u0434\u044f\u043a\u0438 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u043e\u043c\u0443 \u043a\u043e\u0434\u0443; \u0434\u043e\u0434\u0430\u043d\u043e \u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0443 \u0443\u0437\u0433\u043e\u0434\u0436\u0435\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456.",
}

COOKIE_CHANGELOG = {
    "en": "<b>v1.1</b> (July 2025) \u2014 Phase 2 legal hardening: added ICO complaint right and contact details (GDPR Art. 77); added consent accountability mechanism (GDPR Art. 7(1)); separately disclosed Vercel Speed Insights; enumerated all Sentry sessionStorage keys by name; removed hedging language (\u201cmay set\u201d \u2192 \u201csets\u201d) from locale cookie; standardised company name to Lumenshore Limited.",
    "pl": "<b>v1.1</b> (lipiec 2025) \u2014 Faza 2 wzmocnienia prawnego: dodano prawo do skargi do ICO; dodano mechanizm rozliczalno\u015bci zgody; odr\u0119bnie ujawniono Vercel Speed Insights; wymieniono klucze Sentry; usuni\u0119to j\u0119zyk hedgingowy; ujednolicono nazw\u0119 firmy.",
    "de": "<b>v1.1</b> (Juli 2025) \u2014 Phase-2-Rechtsabsicherung: ICO-Beschwerderecht hinzugef\u00fcgt; Einwilligungsverantwortlichkeit hinzugef\u00fcgt; Vercel Speed Insights separat offengelegt; Sentry-Schl\u00fcssel aufgez\u00e4hlt; Absicherungssprache entfernt; Firmenname standardisiert.",
    "es": "<b>v1.1</b> (julio 2025) \u2014 Fase 2 de endurecimiento legal: a\u00f1adido derecho de queja ante ICO; a\u00f1adido mecanismo de responsabilidad del consentimiento; Vercel Speed Insights divulgado por separado; claves Sentry enumeradas; lenguaje ambiguo eliminado; nombre de empresa estandarizado.",
    "fr": "<b>v1.1</b> (juillet 2025) \u2014 Phase 2 de renforcement juridique : droit de plainte ICO ajout\u00e9 ; m\u00e9canisme de responsabilit\u00e9 du consentement ajout\u00e9 ; Vercel Speed Insights divulgu\u00e9 s\u00e9par\u00e9ment ; cl\u00e9s Sentry \u00e9num\u00e9r\u00e9es ; langage ambigu supprim\u00e9 ; nom d\u2019entreprise standardis\u00e9.",
    "ja": "<b>v1.1</b>\uff082025\u5e747\u6708\uff09\u2014 \u30d5\u30a7\u30fc\u30ba2\u6cd5\u7684\u5f37\u5316\uff1aICO\u82e6\u60c5\u6a29\u8ffd\u52a0\u3001\u540c\u610f\u8aac\u660e\u8cac\u4efb\u8ffd\u52a0\u3001Vercel Speed Insights\u500b\u5225\u958b\u793a\u3001Sentry\u30ad\u30fc\u5217\u6319\u3001\u66d6\u6627\u8868\u73fe\u524a\u9664\u3001\u4f1a\u793e\u540d\u7d71\u4e00\u3002",
    "zh": "<b>v1.1</b>\uff082025\u5e747\u6708\uff09\u2014 \u7b2c\u4e8c\u9636\u6bb5\u6cd5\u5f8b\u52a0\u56fa\uff1a\u6dfb\u52a0ICO\u6295\u8bc9\u6743\uff1b\u6dfb\u52a0\u540c\u610f\u8d23\u4efb\u673a\u5236\uff1b\u5355\u72ec\u62ab\u9732Vercel Speed Insights\uff1b\u679a\u4e3eSentry\u5bc6\u94a5\uff1b\u5220\u9664\u6a21\u7cca\u8bed\u8a00\uff1b\u7edf\u4e00\u516c\u53f8\u540d\u79f0\u3002",
    "ar": "<b>v1.1</b> (\u064a\u0648\u0644\u064a\u0648 2025) \u2014 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 2: \u0625\u0636\u0627\u0641\u0629 \u062d\u0642 \u0627\u0644\u0634\u0643\u0648\u0649 \u0644\u062f\u0649 ICO\u061b \u0625\u0636\u0627\u0641\u0629 \u0622\u0644\u064a\u0629 \u0645\u0633\u0627\u0621\u0644\u0629 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629\u061b \u0625\u0641\u0635\u0627\u062d Vercel Speed Insights\u061b \u062a\u0639\u062f\u0627\u062f \u0645\u0641\u0627\u062a\u064a\u062d Sentry\u061b \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u063a\u0627\u0645\u0636\u0629\u061b \u062a\u0648\u062d\u064a\u062f \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629.",
    "uk": "<b>v1.1</b> (\u043b\u0438\u043f\u0435\u043d\u044c 2025) \u2014 \u0424\u0430\u0437\u0430 2: \u0434\u043e\u0434\u0430\u043d\u043e \u043f\u0440\u0430\u0432\u043e \u0441\u043a\u0430\u0440\u0433\u0438 \u0434\u043e ICO; \u0434\u043e\u0434\u0430\u043d\u043e \u043c\u0435\u0445\u0430\u043d\u0456\u0437\u043c \u043f\u0456\u0434\u0437\u0432\u0456\u0442\u043d\u043e\u0441\u0442\u0456 \u0437\u0433\u043e\u0434\u0438; \u043e\u043a\u0440\u0435\u043c\u043e \u0440\u043e\u0437\u043a\u0440\u0438\u0442\u043e Vercel Speed Insights; \u043f\u0435\u0440\u0435\u043b\u0456\u0447\u0435\u043d\u043e \u043a\u043b\u044e\u0447\u0456 Sentry; \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e \u043d\u0435\u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0443 \u043c\u043e\u0432\u0443; \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043d\u0430\u0437\u0432\u0443 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457.",
}

LEGAL_VERSION_MAP = {
    "en": "Version 2.2",
    "pl": "Wersja 2.2",
    "de": "Version 2.2",
    "es": "Versi\u00f3n 2.2",
    "fr": "Version 2.2",
    "ja": "\u30d0\u30fc\u30b8\u30e7\u30f3 2.2",
    "zh": "\u7248\u672c 2.2",
    "ar": "\u0627\u0644\u0625\u0635\u062f\u0627\u0631 2.2",
    "uk": "\u0412\u0435\u0440\u0441\u0456\u044f 2.2",
}

LEGAL_TERMS_VERSION_MAP = {
    "en": "Version 1.2",
    "pl": "Wersja 1.2",
    "de": "Version 1.2",
    "es": "Versi\u00f3n 1.2",
    "fr": "Version 1.2",
    "ja": "\u30d0\u30fc\u30b8\u30e7\u30f3 1.2",
    "zh": "\u7248\u672c 1.2",
    "ar": "\u0627\u0644\u0625\u0635\u062f\u0627\u0631 1.2",
    "uk": "\u0412\u0435\u0440\u0441\u0456\u044f 1.2",
}

LEGAL_EULA_VERSION_MAP = {
    "en": "Version 1.1",
    "pl": "Wersja 1.1",
    "de": "Version 1.1",
    "es": "Versi\u00f3n 1.1",
    "fr": "Version 1.1",
    "ja": "\u30d0\u30fc\u30b8\u30e7\u30f3 1.1",
    "zh": "\u7248\u672c 1.1",
    "ar": "\u0627\u0644\u0625\u0635\u062f\u0627\u0631 1.1",
    "uk": "\u0412\u0435\u0440\u0441\u0456\u044f 1.1",
}

LAST_UPDATED = {
    "en": "Last updated: 1 July 2025",
    "pl": "Ostatnia aktualizacja: 1 lipca 2025",
    "de": "Zuletzt aktualisiert: 1. Juli 2025",
    "es": "\u00daltima actualizaci\u00f3n: 1 de julio de 2025",
    "fr": "Derni\u00e8re mise \u00e0 jour : 1er juillet 2025",
    "ja": "\u6700\u7d42\u66f4\u65b0\u65e5: 2025\u5e747\u67081\u65e5",
    "zh": "\u6700\u540e\u66f4\u65b0\uff1a2025\u5e747\u67081\u65e5",
    "ar": "\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b: 1 \u064a\u0648\u0644\u064a\u0648 2025",
    "uk": "\u041e\u0441\u0442\u0430\u043d\u043d\u0454 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f: 1 \u043b\u0438\u043f\u043d\u044f 2025",
}

def apply_version_bumps(data, locale):
    """Story 15.4: Bump versions and add changelog entries."""
    changes = 0
    legal = data.get("Legal", {})

    # Bump Privacy version
    legal["version"] = LEGAL_VERSION_MAP[locale]
    legal["lastUpdated"] = LAST_UPDATED[locale]
    legal["termsVersion"] = LEGAL_TERMS_VERSION_MAP[locale]
    legal["eulaVersion"] = LEGAL_EULA_VERSION_MAP[locale]
    changes += 1

    # Privacy changelog
    priv = data.get("Privacy", {})
    pu = priv.get("policyUpdates", {})
    pu["v2_2"] = PRIVACY_CHANGELOG[locale]
    changes += 1

    # Terms changelog
    terms = data.get("Terms", {})
    tc = terms.get("changes", {})
    tc["v1_2"] = TERMS_CHANGELOG[locale]
    changes += 1

    # EULA changelog
    eula = data.get("Eula", {})
    ec = eula.get("changes", {})
    ec["v1_1"] = EULA_CHANGELOG[locale]
    changes += 1

    # Cookie changelog
    cp = data.get("CookiePage", {})
    cu = cp.get("updates", {})
    cu["v1_1"] = COOKIE_CHANGELOG[locale]
    cu["version"] = "<b>Current consent version:</b> 1.1" if locale == "en" else cu.get("version", "").replace("1.0", "1.1") if cu.get("version") else ""
    changes += 1

    return changes


# ---------------------------------------------------------------------------
# STORY 15.5: Accessibility Commitment in Terms
# ---------------------------------------------------------------------------

ACCESSIBILITY = {
    "en": {
        "heading": "Accessibility",
        "p1": "We are committed to making LumenLingo accessible to all users. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA for our website and follow Apple\u2019s Human Interface Guidelines for accessibility in our iOS app. For details, please see our <accessibilityLink>Accessibility Statement</accessibilityLink>.",
        "p2": "If you encounter any accessibility barriers, please contact us at <emailLink>legal@lumenlingo.com</emailLink>. We recognise our obligations under the Equality Act 2010 to make reasonable adjustments and will endeavour to address any reported issues promptly.",
    },
    "pl": {
        "heading": "Dost\u0119pno\u015b\u0107",
        "p1": "Zobowi\u0105zujemy si\u0119 do zapewnienia dost\u0119pno\u015bci LumenLingo dla wszystkich u\u017cytkownik\u00f3w. D\u0105\u017cymy do zgodno\u015bci z Wytycznymi dotycz\u0105cymi dost\u0119pno\u015bci tre\u015bci internetowych (WCAG) 2.1 poziom AA dla naszej strony internetowej i stosujemy si\u0119 do wytycznych Apple dotycz\u0105cych interfejsu u\u017cytkownika w zakresie dost\u0119pno\u015bci w naszej aplikacji iOS. Szczeg\u00f3\u0142y znajdziesz w naszej <accessibilityLink>Deklaracji dost\u0119pno\u015bci</accessibilityLink>.",
        "p2": "Je\u015bli napotkasz bariery dost\u0119pno\u015bci, skontaktuj si\u0119 z nami pod adresem <emailLink>legal@lumenlingo.com</emailLink>. Uznajemy nasze obowi\u0105zki wynikaj\u0105ce z Ustawy o r\u00f3wno\u015bci 2010 i do\u0142o\u017cymy stara\u0144, aby niezw\u0142ocznie rozwi\u0105za\u0107 zg\u0142oszone problemy.",
    },
    "de": {
        "heading": "Barrierefreiheit",
        "p1": "Wir verpflichten uns, LumenLingo f\u00fcr alle Nutzer zug\u00e4nglich zu machen. Wir streben die Einhaltung der Web Content Accessibility Guidelines (WCAG) 2.1 Level AA f\u00fcr unsere Website an und folgen Apples Human Interface Guidelines zur Barrierefreiheit in unserer iOS-App. Einzelheiten finden Sie in unserer <accessibilityLink>Erkl\u00e4rung zur Barrierefreiheit</accessibilityLink>.",
        "p2": "Wenn Sie auf Barrieren sto\u00dfen, kontaktieren Sie uns bitte unter <emailLink>legal@lumenlingo.com</emailLink>. Wir erkennen unsere Pflichten gem\u00e4\u00df dem Equality Act 2010 an und werden gemeldete Probleme zeitnah beheben.",
    },
    "es": {
        "heading": "Accesibilidad",
        "p1": "Nos comprometemos a hacer LumenLingo accesible para todos los usuarios. Nos esforzamos por cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 Nivel AA para nuestro sitio web y seguimos las Directrices de Interfaz Humana de Apple para la accesibilidad en nuestra aplicaci\u00f3n iOS. Para m\u00e1s detalles, consulte nuestra <accessibilityLink>Declaraci\u00f3n de Accesibilidad</accessibilityLink>.",
        "p2": "Si encuentra alguna barrera de accesibilidad, cont\u00e1ctenos en <emailLink>legal@lumenlingo.com</emailLink>. Reconocemos nuestras obligaciones en virtud de la Ley de Igualdad de 2010 y nos esforzaremos por abordar cualquier problema comunicado con prontitud.",
    },
    "fr": {
        "heading": "Accessibilit\u00e9",
        "p1": "Nous nous engageons \u00e0 rendre LumenLingo accessible \u00e0 tous les utilisateurs. Nous nous effor\u00e7ons de respecter les R\u00e8gles pour l\u2019accessibilit\u00e9 des contenus Web (WCAG) 2.1 niveau AA pour notre site web et suivons les Human Interface Guidelines d\u2019Apple pour l\u2019accessibilit\u00e9 de notre application iOS. Pour plus de d\u00e9tails, consultez notre <accessibilityLink>D\u00e9claration d\u2019accessibilit\u00e9</accessibilityLink>.",
        "p2": "Si vous rencontrez des obstacles d\u2019accessibilit\u00e9, contactez-nous \u00e0 <emailLink>legal@lumenlingo.com</emailLink>. Nous reconnaissons nos obligations en vertu de l\u2019Equality Act 2010 et nous nous efforcerons de r\u00e9soudre tout probl\u00e8me signal\u00e9 dans les meilleurs d\u00e9lais.",
    },
    "ja": {
        "heading": "\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3",
        "p1": "\u5f53\u793e\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046LumenLingo\u306e\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u306e\u5411\u4e0a\u306b\u52aa\u3081\u3066\u3044\u307e\u3059\u3002\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u306fWCAG 2.1 \u30ec\u30d9\u30ebAA\u3078\u306e\u6e96\u62e0\u3001iOS\u30a2\u30d7\u30ea\u3067\u306fApple\u306eHuman Interface Guidelines\u306b\u5f93\u3063\u3066\u3044\u307e\u3059\u3002\u8a73\u7d30\u306f<accessibilityLink>\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8</accessibilityLink>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",
        "p2": "\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u306e\u969c\u58c1\u3092\u898b\u3064\u3051\u305f\u5834\u5408\u306f\u3001<emailLink>legal@lumenlingo.com</emailLink>\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\u5831\u544a\u3055\u308c\u305f\u554f\u984c\u306b\u8fc5\u901f\u306b\u5bfe\u51e6\u3044\u305f\u3057\u307e\u3059\u3002",
    },
    "zh": {
        "heading": "\u65e0\u969c\u788d\u8bbf\u95ee",
        "p1": "\u6211\u4eec\u81f4\u529b\u4e8e\u8ba9\u6240\u6709\u7528\u6237\u90fd\u80fd\u65e0\u969c\u788d\u5730\u4f7f\u7528LumenLingo\u3002\u6211\u4eec\u52aa\u529b\u4f7f\u7f51\u7ad9\u7b26\u5408WCAG 2.1 AA\u7ea7\u6807\u51c6\uff0c\u5e76\u9075\u5faaApple\u7684\u300a\u4eba\u673a\u754c\u9762\u6307\u5357\u300b\u786e\u4fddiOS\u5e94\u7528\u7684\u65e0\u969c\u788d\u8bbf\u95ee\u3002\u8be6\u60c5\u8bf7\u89c1\u6211\u4eec\u7684<accessibilityLink>\u65e0\u969c\u788d\u8bbf\u95ee\u58f0\u660e</accessibilityLink>\u3002",
        "p2": "\u5982\u60a8\u9047\u5230\u65e0\u969c\u788d\u8bbf\u95ee\u969c\u788d\uff0c\u8bf7\u8054\u7cfb<emailLink>legal@lumenlingo.com</emailLink>\u3002\u6211\u4eec\u5c06\u53ca\u65f6\u5904\u7406\u62a5\u544a\u7684\u95ee\u9898\u3002",
    },
    "ar": {
        "heading": "\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "p1": "\u0646\u0644\u062a\u0632\u0645 \u0628\u062c\u0639\u0644 LumenLingo \u0645\u062a\u0627\u062d\u064b\u0627 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646. \u0646\u0633\u0639\u0649 \u0644\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0644\u0625\u0631\u0634\u0627\u062f\u0627\u062a \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0648\u064a\u0628 (WCAG) 2.1 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 AA \u0644\u0645\u0648\u0642\u0639\u0646\u0627 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0648\u0646\u062a\u0628\u0639 \u0625\u0631\u0634\u0627\u062f\u0627\u062a Apple \u0644\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0641\u064a \u062a\u0637\u0628\u064a\u0642\u0646\u0627 \u0644\u0646\u0638\u0627\u0645 iOS. \u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644\u060c \u0631\u0627\u062c\u0639 <accessibilityLink>\u0628\u064a\u0627\u0646 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644</accessibilityLink>.",
        "p2": "\u0625\u0630\u0627 \u0648\u0627\u062c\u0647\u062a \u0623\u064a \u0639\u0648\u0627\u0626\u0642 \u062a\u062a\u0639\u0644\u0642 \u0628\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 <emailLink>legal@lumenlingo.com</emailLink>. \u0646\u062d\u0646 \u0646\u062f\u0631\u0643 \u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a\u0646\u0627 \u0628\u0645\u0648\u062c\u0628 \u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 2010 \u0648\u0633\u0646\u0639\u0645\u0644 \u0639\u0644\u0649 \u0645\u0639\u0627\u0644\u062c\u0629 \u0623\u064a \u0645\u0634\u0643\u0644\u0627\u062a \u0645\u064f\u0628\u0644\u063a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0641\u0648\u0631.",
    },
    "uk": {
        "heading": "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456\u0441\u0442\u044c",
        "p1": "\u041c\u0438 \u043f\u0440\u0430\u0433\u043d\u0435\u043c\u043e \u0437\u0440\u043e\u0431\u0438\u0442\u0438 LumenLingo \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0434\u043b\u044f \u0432\u0441\u0456\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432. \u041c\u0438 \u043f\u0440\u0430\u0433\u043d\u0435\u043c\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0442\u0438 \u0432\u0438\u043c\u043e\u0433\u0430\u043c WCAG 2.1 \u0440\u0456\u0432\u043d\u044f AA \u0434\u043b\u044f \u043d\u0430\u0448\u043e\u0433\u043e \u0432\u0435\u0431\u0441\u0430\u0439\u0442\u0443 \u0442\u0430 \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a\u0430 Apple Human Interface Guidelines \u0449\u043e\u0434\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0432 \u043d\u0430\u0448\u043e\u043c\u0443 iOS-\u0434\u043e\u0434\u0430\u0442\u043a\u0443. \u0414\u0435\u0442\u0430\u043b\u0456 \u2014 \u0432 \u043d\u0430\u0448\u0456\u0439 <accessibilityLink>\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0456\u0457 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456</accessibilityLink>.",
        "p2": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0437\u0456\u0442\u043a\u043d\u0443\u043b\u0438\u0441\u044f \u0437 \u0431\u0430\u0440\u2019\u0454\u0440\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456, \u0437\u0432\u2019\u044f\u0436\u0456\u0442\u044c\u0441\u044f \u0437 \u043d\u0430\u043c\u0438 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u044e <emailLink>legal@lumenlingo.com</emailLink>. \u041c\u0438 \u0432\u0438\u0437\u043d\u0430\u0454\u043c\u043e \u0441\u0432\u043e\u0457 \u0437\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u0430\u043d\u043d\u044f \u0437\u0433\u0456\u0434\u043d\u043e \u0437 \u0417\u0430\u043a\u043e\u043d\u043e\u043c \u043f\u0440\u043e \u0440\u0456\u0432\u043d\u0456\u0441\u0442\u044c 2010 \u0456 \u0434\u043e\u043a\u043b\u0430\u0434\u0435\u043c\u043e \u0437\u0443\u0441\u0438\u043b\u044c, \u0449\u043e\u0431 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438 \u0437\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438.",
    },
}

def apply_accessibility(data, locale):
    """Story 15.5: Add accessibility commitment to Terms."""
    terms = data.get("Terms", {})
    if locale in ACCESSIBILITY:
        terms["accessibility"] = ACCESSIBILITY[locale]
        return 1
    return 0


# ---------------------------------------------------------------------------
# STORY 15.6: Assignment Notification Obligation
# ---------------------------------------------------------------------------

ASSIGNMENT_P3 = {
    "en": "If we assign this agreement or any rights under it to a successor entity (for example, in connection with a merger, acquisition, or sale of assets), we will notify you by email or in-app notification within 30 days of the assignment taking effect. You will have the right to terminate your subscription within 30 days of such notification if you do not wish to continue under the new entity.",
    "pl": "Je\u015bli dokonamy cesji niniejszej umowy lub jakichkolwiek praw z niej wynikaj\u0105cych na podmiot nast\u0119pczy (na przyk\u0142ad w zwi\u0105zku z fuzj\u0105, przej\u0119ciem lub sprzeda\u017c\u0105 aktyw\u00f3w), powiadomimy Ci\u0119 drog\u0105 mailow\u0105 lub powiadomieniem w aplikacji w ci\u0105gu 30 dni od wej\u015bcia cesji w \u017cycie. B\u0119dziesz mie\u0107 prawo do wypowiedzenia subskrypcji w ci\u0105gu 30 dni od takiego powiadomienia, je\u015bli nie chcesz kontynuowa\u0107 korzystania z us\u0142ug pod nowym podmiotem.",
    "de": "Wenn wir diese Vereinbarung oder Rechte daraus an einen Nachfolger abtreten (z. B. im Zusammenhang mit einer Fusion, \u00dcbernahme oder einem Verm\u00f6gensverkauf), werden wir Sie innerhalb von 30 Tagen nach Wirksamwerden der Abtretung per E-Mail oder In-App-Benachrichtigung informieren. Sie haben das Recht, Ihr Abonnement innerhalb von 30 Tagen nach einer solchen Benachrichtigung zu k\u00fcndigen, wenn Sie unter dem neuen Unternehmen nicht fortfahren m\u00f6chten.",
    "es": "Si cedemos este acuerdo o cualquier derecho derivado del mismo a una entidad sucesora (por ejemplo, en relaci\u00f3n con una fusi\u00f3n, adquisici\u00f3n o venta de activos), le notificaremos por correo electr\u00f3nico o notificaci\u00f3n en la aplicaci\u00f3n dentro de los 30 d\u00edas posteriores a la entrada en vigor de la cesi\u00f3n. Tendr\u00e1 derecho a cancelar su suscripci\u00f3n dentro de los 30 d\u00edas siguientes a dicha notificaci\u00f3n si no desea continuar bajo la nueva entidad.",
    "fr": "Si nous c\u00e9dons cet accord ou tout droit en d\u00e9coulant \u00e0 une entit\u00e9 successeur (par exemple, dans le cadre d\u2019une fusion, d\u2019une acquisition ou d\u2019une vente d\u2019actifs), nous vous en informerons par e-mail ou notification dans l\u2019application dans les 30 jours suivant la prise d\u2019effet de la cession. Vous aurez le droit de r\u00e9silier votre abonnement dans les 30 jours suivant cette notification si vous ne souhaitez pas poursuivre sous la nouvelle entit\u00e9.",
    "ja": "\u5f53\u793e\u304c\u672c\u5951\u7d04\u307e\u305f\u306f\u305d\u306e\u6a29\u5229\u3092\u627f\u7d99\u4f53\u306b\u8b72\u6e21\u3059\u308b\u5834\u5408\uff08\u4f8b\u3048\u3070\u5408\u4f75\u3001\u8cb7\u53ce\u3001\u307e\u305f\u306f\u8cc7\u7523\u58f2\u5374\u306b\u95a2\u9023\u3057\u3066\uff09\u3001\u8b72\u6e21\u304c\u767a\u52b9\u3057\u3066\u304b\u308930\u65e5\u4ee5\u5185\u306b\u30e1\u30fc\u30eb\u307e\u305f\u306f\u30a2\u30d7\u30ea\u5185\u901a\u77e5\u3067\u304a\u77e5\u3089\u305b\u3044\u305f\u3057\u307e\u3059\u3002\u65b0\u3057\u3044\u4e3b\u4f53\u306e\u4e0b\u3067\u306e\u7d99\u7d9a\u3092\u5e0c\u671b\u3057\u306a\u3044\u5834\u5408\u3001\u901a\u77e5\u304b\u308930\u65e5\u4ee5\u5185\u306b\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092\u89e3\u7d04\u3059\u308b\u6a29\u5229\u304c\u3042\u308a\u307e\u3059\u3002",
    "zh": "\u5982\u679c\u6211\u4eec\u5c06\u672c\u534f\u8bae\u6216\u5176\u4e2d\u4efb\u4f55\u6743\u5229\u8f6c\u8ba9\u7ed9\u7ee7\u4efb\u5b9e\u4f53\uff08\u4f8b\u5982\u4e0e\u5408\u5e76\u3001\u6536\u8d2d\u6216\u8d44\u4ea7\u51fa\u552e\u76f8\u5173\uff09\uff0c\u6211\u4eec\u5c06\u5728\u8f6c\u8ba9\u751f\u6548\u540e30\u5929\u5185\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u6216\u5e94\u7528\u5185\u901a\u77e5\u544a\u77e5\u60a8\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u5728\u65b0\u5b9e\u4f53\u4e0b\u7ee7\u7eed\uff0c\u60a8\u6709\u6743\u5728\u6536\u5230\u901a\u77e5\u540e30\u5929\u5185\u7ec8\u6b62\u60a8\u7684\u8ba2\u9605\u3002",
    "ar": "\u0625\u0630\u0627 \u0642\u0645\u0646\u0627 \u0628\u0627\u0644\u062a\u0646\u0627\u0632\u0644 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0627\u062a\u0641\u0627\u0642\u064a\u0629 \u0623\u0648 \u0623\u064a \u062d\u0642\u0648\u0642 \u0628\u0645\u0648\u062c\u0628\u0647\u0627 \u0644\u0643\u064a\u0627\u0646 \u062e\u0644\u0641\u064a (\u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c \u0641\u064a\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0628\u0627\u0646\u062f\u0645\u0627\u062c \u0623\u0648 \u0627\u0633\u062a\u062d\u0648\u0627\u0630 \u0623\u0648 \u0628\u064a\u0639 \u0623\u0635\u0648\u0644)\u060c \u0633\u0646\u0642\u0648\u0645 \u0628\u0625\u062e\u0637\u0627\u0631\u0643 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0623\u0648 \u0625\u0634\u0639\u0627\u0631 \u062f\u0627\u062e\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u062e\u0644\u0627\u0644 30 \u064a\u0648\u0645\u064b\u0627 \u0645\u0646 \u0633\u0631\u064a\u0627\u0646 \u0627\u0644\u062a\u0646\u0627\u0632\u0644. \u0633\u064a\u0643\u0648\u0646 \u0644\u062f\u064a\u0643 \u0627\u0644\u062d\u0642 \u0641\u064a \u0625\u0646\u0647\u0627\u0621 \u0627\u0634\u062a\u0631\u0627\u0643\u0643 \u062e\u0644\u0627\u0644 30 \u064a\u0648\u0645\u064b\u0627 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0625\u062e\u0637\u0627\u0631 \u0625\u0630\u0627 \u0644\u0645 \u062a\u0631\u063a\u0628 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u062a\u062d\u062a \u0627\u0644\u0643\u064a\u0627\u0646 \u0627\u0644\u062c\u062f\u064a\u062f.",
    "uk": "\u042f\u043a\u0449\u043e \u043c\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043f\u0438\u043c\u043e \u0446\u044e \u0443\u0433\u043e\u0434\u0443 \u0430\u0431\u043e \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430 \u043d\u0435\u044e \u043f\u0440\u0430\u0432\u043e\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0443 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0443 \u0437\u0432\u2019\u044f\u0437\u043a\u0443 \u0437\u0456 \u0437\u043b\u0438\u0442\u0442\u044f\u043c, \u043f\u043e\u0433\u043b\u0438\u043d\u0430\u043d\u043d\u044f\u043c \u0430\u0431\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0435\u043c \u0430\u043a\u0442\u0438\u0432\u0456\u0432), \u043c\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u043c\u043e \u0432\u0430\u0441 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u044e \u043f\u043e\u0448\u0442\u043e\u044e \u0430\u0431\u043e \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f\u043c \u0443 \u0434\u043e\u0434\u0430\u0442\u043a\u0443 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 30 \u0434\u043d\u0456\u0432 \u043f\u0456\u0441\u043b\u044f \u043d\u0430\u0431\u0440\u0430\u043d\u043d\u044f \u0447\u0438\u043d\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u043d\u044f. \u0412\u0438 \u043c\u0430\u0442\u0438\u043c\u0435\u0442\u0435 \u043f\u0440\u0430\u0432\u043e \u043f\u0440\u0438\u043f\u0438\u043d\u0438\u0442\u0438 \u043f\u0456\u0434\u043f\u0438\u0441\u043a\u0443 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 30 \u0434\u043d\u0456\u0432 \u043f\u0456\u0441\u043b\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0449\u043e \u043d\u0435 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0443\u0432\u0430\u0442\u0438 \u043f\u0456\u0434 \u043d\u043e\u0432\u0438\u043c \u0441\u0443\u0431\u2019\u0454\u043a\u0442\u043e\u043c.",
}

def apply_assignment(data, locale):
    """Story 15.6: Add assignment notification obligation."""
    terms = data.get("Terms", {})
    ass = terms.get("assignment", {})
    if locale in ASSIGNMENT_P3:
        ass["p3"] = ASSIGNMENT_P3[locale]
        return 1
    return 0


# ===========================================================================
# MAIN
# ===========================================================================

def main():
    for locale in LOCALES:
        path = os.path.join(MESSAGES_DIR, f"{locale}.json")
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)

        c1 = fix_company_names(data, locale)
        c2 = apply_liability_consistency(data, locale)
        c3 = apply_apple_eula(data, locale)
        c4 = apply_version_bumps(data, locale)
        c5 = apply_accessibility(data, locale)
        c6 = apply_assignment(data, locale)

        total = c1 + c2 + c3 + c4 + c5 + c6

        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write("\n")

        print(f"[{locale}] {total} change groups applied "
              f"(names:{c1} liability:{c2} apple:{c3} versions:{c4} a11y:{c5} assignment:{c6})")

    print("\nDone. All 9 locales updated for Epic 15.")


if __name__ == "__main__":
    main()

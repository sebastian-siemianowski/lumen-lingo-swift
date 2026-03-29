#!/usr/bin/env python3
"""Add Security namespace to all 10 locale message files for the /security page."""

import json
import os

BASE = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages"

# English is the source, translated below for all locales
translations = {
    "en": {
        "Security": {
            "meta": {
                "title": "Security — LumenLingo",
                "description": "LumenLingo responsible disclosure policy. How to report security vulnerabilities, scope, response timeline, and our commitment to researcher safety.",
                "ogTitle": "Security — LumenLingo",
                "ogDescription": "Report security vulnerabilities responsibly. We respond within 48 hours and never pursue legal action against good-faith researchers."
            },
            "breadcrumb": "Security",
            "hero": {
                "heading": "Security",
                "subtitle": "We take the security of LumenLingo and your data seriously. If you discover a vulnerability, we want to hear about it."
            },
            "reporting": {
                "heading": "Reporting a Vulnerability",
                "p1": "If you believe you have found a security vulnerability in LumenLingo, please report it responsibly by emailing <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "Please include as much detail as possible: a description of the vulnerability, steps to reproduce, the potential impact, and any proof-of-concept code or screenshots.",
                "p3": "We also publish a machine-readable <securityTxtLink>security.txt</securityTxtLink> file per RFC 9116."
            },
            "scope": {
                "heading": "Scope",
                "inScopeHeading": "In Scope",
                "inScope1": "The LumenLingo website (lumenlingo.com) and all subdomains",
                "inScope2": "API endpoints under lumenlingo.com/api/*",
                "inScope3": "The LumenLingo iOS application",
                "inScope4": "Authentication and authorisation flaws",
                "inScope5": "Cross-site scripting (XSS), injection, and CSRF vulnerabilities",
                "inScope6": "Server-side request forgery (SSRF)",
                "inScope7": "Sensitive data exposure",
                "outOfScopeHeading": "Out of Scope",
                "outOfScope1": "Social engineering (phishing, vishing) against LumenShore employees",
                "outOfScope2": "Denial-of-service (DoS/DDoS) attacks",
                "outOfScope3": "Physical attacks against LumenShore offices or infrastructure",
                "outOfScope4": "Vulnerabilities in third-party services (Apple, Vercel, Sentry) — report these to the respective vendor",
                "outOfScope5": "Automated scanning without prior approval",
                "outOfScope6": "Spam, SEO manipulation, or content injection that does not affect security"
            },
            "response": {
                "heading": "Our Response",
                "p1": "We commit to the following response timeline:",
                "item1": "<b>Acknowledgement</b> — within 48 hours of your report",
                "item2": "<b>Initial assessment</b> — within 5 business days",
                "item3": "<b>Resolution target</b> — within 30 days for critical issues, 90 days for non-critical",
                "item4": "<b>Notification</b> — we will let you know when the issue is resolved",
                "p2": "We will keep you informed of our progress and may ask for additional information to help reproduce or resolve the issue."
            },
            "safeHarbour": {
                "heading": "Safe Harbour",
                "p1": "We will not pursue legal action against security researchers who:",
                "item1": "Act in good faith and follow this disclosure policy",
                "item2": "Avoid accessing or modifying other users' data",
                "item3": "Do not degrade the service (no DoS, no destructive testing)",
                "item4": "Report vulnerabilities promptly and do not disclose them publicly until we have had a reasonable opportunity to address them",
                "p2": "If you follow these guidelines, we consider your research to be authorised and will not pursue civil or criminal action related to your findings."
            },
            "contact": {
                "heading": "Contact",
                "p1": "For security reports: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "For general support: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "Preferred language: English"
            }
        }
    },
    "es": {
        "Security": {
            "meta": {
                "title": "Seguridad — LumenLingo",
                "description": "Politica de divulgacion responsable de LumenLingo. Como informar vulnerabilidades de seguridad, alcance, plazo de respuesta y nuestro compromiso con la seguridad de los investigadores.",
                "ogTitle": "Seguridad — LumenLingo",
                "ogDescription": "Informe vulnerabilidades de seguridad de forma responsable. Respondemos en 48 horas y nunca emprendemos acciones legales contra investigadores de buena fe."
            },
            "breadcrumb": "Seguridad",
            "hero": {
                "heading": "Seguridad",
                "subtitle": "Nos tomamos muy en serio la seguridad de LumenLingo y de tus datos. Si descubres una vulnerabilidad, queremos saberlo."
            },
            "reporting": {
                "heading": "Informar una vulnerabilidad",
                "p1": "Si crees que has encontrado una vulnerabilidad de seguridad en LumenLingo, informala de forma responsable enviando un correo a <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "Incluye la mayor cantidad de detalles posible: una descripcion de la vulnerabilidad, pasos para reproducirla, el impacto potencial y cualquier codigo de prueba de concepto o capturas de pantalla.",
                "p3": "Tambien publicamos un archivo <securityTxtLink>security.txt</securityTxtLink> legible por maquinas segun RFC 9116."
            },
            "scope": {
                "heading": "Alcance",
                "inScopeHeading": "Dentro del alcance",
                "inScope1": "El sitio web de LumenLingo (lumenlingo.com) y todos los subdominios",
                "inScope2": "Endpoints de API en lumenlingo.com/api/*",
                "inScope3": "La aplicacion iOS de LumenLingo",
                "inScope4": "Fallos de autenticacion y autorizacion",
                "inScope5": "Vulnerabilidades de cross-site scripting (XSS), inyeccion y CSRF",
                "inScope6": "Server-side request forgery (SSRF)",
                "inScope7": "Exposicion de datos sensibles",
                "outOfScopeHeading": "Fuera del alcance",
                "outOfScope1": "Ingenieria social (phishing, vishing) contra empleados de LumenShore",
                "outOfScope2": "Ataques de denegacion de servicio (DoS/DDoS)",
                "outOfScope3": "Ataques fisicos contra las oficinas o infraestructura de LumenShore",
                "outOfScope4": "Vulnerabilidades en servicios de terceros (Apple, Vercel, Sentry) — informalas al proveedor correspondiente",
                "outOfScope5": "Escaneo automatizado sin aprobacion previa",
                "outOfScope6": "Spam, manipulacion SEO o inyeccion de contenido que no afecte la seguridad"
            },
            "response": {
                "heading": "Nuestra respuesta",
                "p1": "Nos comprometemos con el siguiente plazo de respuesta:",
                "item1": "<b>Confirmacion</b> — dentro de 48 horas de tu informe",
                "item2": "<b>Evaluacion inicial</b> — dentro de 5 dias habiles",
                "item3": "<b>Objetivo de resolucion</b> — dentro de 30 dias para problemas criticos, 90 dias para no criticos",
                "item4": "<b>Notificacion</b> — te informaremos cuando el problema se haya resuelto",
                "p2": "Te mantendremos informado de nuestro progreso y podemos solicitar informacion adicional para ayudar a reproducir o resolver el problema."
            },
            "safeHarbour": {
                "heading": "Puerto seguro",
                "p1": "No emprenderemos acciones legales contra investigadores de seguridad que:",
                "item1": "Actuen de buena fe y sigan esta politica de divulgacion",
                "item2": "Eviten acceder o modificar datos de otros usuarios",
                "item3": "No degraden el servicio (sin DoS, sin pruebas destructivas)",
                "item4": "Informen las vulnerabilidades con prontitud y no las divulguen publicamente hasta que hayamos tenido una oportunidad razonable de abordarlas",
                "p2": "Si sigues estas directrices, consideramos tu investigacion como autorizada y no emprenderemos acciones civiles o penales relacionadas con tus hallazgos."
            },
            "contact": {
                "heading": "Contacto",
                "p1": "Para informes de seguridad: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "Para soporte general: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "Idioma preferido: ingles"
            }
        }
    },
    "fr": {
        "Security": {
            "meta": {
                "title": "Securite — LumenLingo",
                "description": "Politique de divulgation responsable de LumenLingo. Comment signaler les vulnerabilites de securite, portee, delai de reponse et notre engagement envers la securite des chercheurs.",
                "ogTitle": "Securite — LumenLingo",
                "ogDescription": "Signalez les vulnerabilites de securite de maniere responsable. Nous repondons sous 48 heures et n'engageons jamais de poursuites contre les chercheurs de bonne foi."
            },
            "breadcrumb": "Securite",
            "hero": {
                "heading": "Securite",
                "subtitle": "Nous prenons tres au serieux la securite de LumenLingo et de vos donnees. Si vous decouvrez une vulnerabilite, nous voulons en etre informes."
            },
            "reporting": {
                "heading": "Signaler une vulnerabilite",
                "p1": "Si vous pensez avoir trouve une vulnerabilite de securite dans LumenLingo, signalez-la de maniere responsable en envoyant un e-mail a <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "Veuillez inclure autant de details que possible : une description de la vulnerabilite, les etapes pour la reproduire, l'impact potentiel et tout code de preuve de concept ou captures d'ecran.",
                "p3": "Nous publions egalement un fichier <securityTxtLink>security.txt</securityTxtLink> lisible par les machines conformement a la RFC 9116."
            },
            "scope": {
                "heading": "Portee",
                "inScopeHeading": "Dans le champ d'application",
                "inScope1": "Le site web LumenLingo (lumenlingo.com) et tous les sous-domaines",
                "inScope2": "Les points d'acces API sous lumenlingo.com/api/*",
                "inScope3": "L'application iOS LumenLingo",
                "inScope4": "Les failles d'authentification et d'autorisation",
                "inScope5": "Les vulnerabilites de cross-site scripting (XSS), d'injection et de CSRF",
                "inScope6": "Server-side request forgery (SSRF)",
                "inScope7": "L'exposition de donnees sensibles",
                "outOfScopeHeading": "Hors du champ d'application",
                "outOfScope1": "L'ingenierie sociale (hameconnage, hameconnage vocal) contre les employes de LumenShore",
                "outOfScope2": "Les attaques par deni de service (DoS/DDoS)",
                "outOfScope3": "Les attaques physiques contre les bureaux ou l'infrastructure de LumenShore",
                "outOfScope4": "Les vulnerabilites dans les services tiers (Apple, Vercel, Sentry) — signalez-les au fournisseur concerne",
                "outOfScope5": "Le scan automatise sans approbation prealable",
                "outOfScope6": "Le spam, la manipulation SEO ou l'injection de contenu n'affectant pas la securite"
            },
            "response": {
                "heading": "Notre reponse",
                "p1": "Nous nous engageons sur le calendrier de reponse suivant :",
                "item1": "<b>Accusé de reception</b> — sous 48 heures apres votre signalement",
                "item2": "<b>Evaluation initiale</b> — sous 5 jours ouvrables",
                "item3": "<b>Objectif de resolution</b> — sous 30 jours pour les problemes critiques, 90 jours pour les non-critiques",
                "item4": "<b>Notification</b> — nous vous informerons lorsque le probleme sera resolu",
                "p2": "Nous vous tiendrons informe de nos progres et pourrons vous demander des informations supplementaires pour aider a reproduire ou resoudre le probleme."
            },
            "safeHarbour": {
                "heading": "Sphare de securite",
                "p1": "Nous n'engagerons pas de poursuites judiciaires contre les chercheurs en securite qui :",
                "item1": "Agissent de bonne foi et respectent cette politique de divulgation",
                "item2": "Evitent d'acceder aux donnees d'autres utilisateurs ou de les modifier",
                "item3": "Ne degradent pas le service (pas de DoS, pas de tests destructifs)",
                "item4": "Signalent les vulnerabilites rapidement et ne les divulguent pas publiquement avant que nous ayons eu une opportunite raisonnable de les traiter",
                "p2": "Si vous suivez ces directives, nous considerons votre recherche comme autorisee et n'engagerons pas d'action civile ou penale liee a vos decouvertes."
            },
            "contact": {
                "heading": "Contact",
                "p1": "Pour les signalements de securite : <emailLink>security@lumenshore.com</emailLink>",
                "p2": "Pour le support general : <supportLink>support@lumenshore.com</supportLink>",
                "p3": "Langue preferee : anglais"
            }
        }
    },
    "de": {
        "Security": {
            "meta": {
                "title": "Sicherheit — LumenLingo",
                "description": "LumenLingo Richtlinie zur verantwortungsvollen Offenlegung. Wie Sie Sicherheitslucken melden, Geltungsbereich, Reaktionszeiten und unser Engagement fur die Sicherheit von Forschern.",
                "ogTitle": "Sicherheit — LumenLingo",
                "ogDescription": "Melden Sie Sicherheitslucken verantwortungsvoll. Wir antworten innerhalb von 48 Stunden und ergreifen keine rechtlichen Schritte gegen Forscher, die in gutem Glauben handeln."
            },
            "breadcrumb": "Sicherheit",
            "hero": {
                "heading": "Sicherheit",
                "subtitle": "Wir nehmen die Sicherheit von LumenLingo und Ihrer Daten sehr ernst. Wenn Sie eine Sicherheitslucke entdecken, mochten wir davon erfahren."
            },
            "reporting": {
                "heading": "Eine Sicherheitslucke melden",
                "p1": "Wenn Sie glauben, eine Sicherheitslucke in LumenLingo gefunden zu haben, melden Sie diese bitte verantwortungsvoll per E-Mail an <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "Bitte fugen Sie so viele Details wie moglich bei: eine Beschreibung der Schwachstelle, Schritte zur Reproduktion, die moglichen Auswirkungen und eventuelle Proof-of-Concept-Codes oder Screenshots.",
                "p3": "Wir veroffentlichen auch eine maschinenlesbare <securityTxtLink>security.txt</securityTxtLink>-Datei gemaess RFC 9116."
            },
            "scope": {
                "heading": "Geltungsbereich",
                "inScopeHeading": "Im Geltungsbereich",
                "inScope1": "Die LumenLingo-Website (lumenlingo.com) und alle Subdomains",
                "inScope2": "API-Endpunkte unter lumenlingo.com/api/*",
                "inScope3": "Die LumenLingo iOS-App",
                "inScope4": "Authentifizierungs- und Autorisierungsfehler",
                "inScope5": "Cross-Site-Scripting (XSS)-, Injection- und CSRF-Schwachstellen",
                "inScope6": "Server-Side Request Forgery (SSRF)",
                "inScope7": "Offenlegung sensibler Daten",
                "outOfScopeHeading": "Ausserhalb des Geltungsbereichs",
                "outOfScope1": "Social Engineering (Phishing, Vishing) gegen LumenShore-Mitarbeiter",
                "outOfScope2": "Denial-of-Service-Angriffe (DoS/DDoS)",
                "outOfScope3": "Physische Angriffe auf LumenShore-Buros oder Infrastruktur",
                "outOfScope4": "Schwachstellen in Drittanbieterdiensten (Apple, Vercel, Sentry) — melden Sie diese beim jeweiligen Anbieter",
                "outOfScope5": "Automatisiertes Scannen ohne vorherige Genehmigung",
                "outOfScope6": "Spam, SEO-Manipulation oder Content-Injection, die die Sicherheit nicht beeintrachtigt"
            },
            "response": {
                "heading": "Unsere Antwort",
                "p1": "Wir verpflichten uns zum folgenden Reaktionszeitrahmen:",
                "item1": "<b>Bestatigung</b> — innerhalb von 48 Stunden nach Ihrem Bericht",
                "item2": "<b>Erste Bewertung</b> — innerhalb von 5 Werktagen",
                "item3": "<b>Losungsziel</b> — innerhalb von 30 Tagen fur kritische Probleme, 90 Tage fur nicht-kritische",
                "item4": "<b>Benachrichtigung</b> — wir informieren Sie, wenn das Problem behoben ist",
                "p2": "Wir halten Sie uber unseren Fortschritt auf dem Laufenden und bitten moglicherweise um zusatzliche Informationen, um das Problem zu reproduzieren oder zu losen."
            },
            "safeHarbour": {
                "heading": "Sicherer Hafen",
                "p1": "Wir werden keine rechtlichen Schritte gegen Sicherheitsforscher einleiten, die:",
                "item1": "In gutem Glauben handeln und diese Offenlegungsrichtlinie befolgen",
                "item2": "Vermeiden, auf Daten anderer Benutzer zuzugreifen oder diese zu andern",
                "item3": "Den Dienst nicht beeintrachtigen (kein DoS, keine destruktiven Tests)",
                "item4": "Schwachstellen umgehend melden und nicht offentlich bekannt geben, bis wir eine angemessene Gelegenheit hatten, sie zu beheben",
                "p2": "Wenn Sie diese Richtlinien befolgen, betrachten wir Ihre Forschung als autorisiert und werden keine zivil- oder strafrechtlichen Massnahmen im Zusammenhang mit Ihren Erkenntnissen ergreifen."
            },
            "contact": {
                "heading": "Kontakt",
                "p1": "Fur Sicherheitsmeldungen: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "Fur allgemeinen Support: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "Bevorzugte Sprache: Englisch"
            }
        }
    },
    "ja": {
        "Security": {
            "meta": {
                "title": "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u2014 LumenLingo",
                "description": "LumenLingo\u306e\u8cac\u4efb\u3042\u308b\u958b\u793a\u30dd\u30ea\u30b7\u30fc\u3002\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8106\u5f31\u6027\u306e\u5831\u544a\u65b9\u6cd5\u3001\u7bc4\u56f2\u3001\u5bfe\u5fdc\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3001\u7814\u7a76\u8005\u306e\u5b89\u5168\u3078\u306e\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u3002",
                "ogTitle": "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u2014 LumenLingo",
                "ogDescription": "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8106\u5f31\u6027\u3092\u8cac\u4efb\u3092\u6301\u3063\u3066\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044\u300248\u6642\u9593\u4ee5\u5185\u306b\u5bfe\u5fdc\u3057\u3001\u5584\u610f\u306e\u7814\u7a76\u8005\u306b\u5bfe\u3057\u3066\u6cd5\u7684\u63aa\u7f6e\u3092\u53d6\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"
            },
            "breadcrumb": "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",
            "hero": {
                "heading": "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",
                "subtitle": "LumenLingo\u3068\u304a\u5ba2\u69d8\u306e\u30c7\u30fc\u30bf\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u771f\u5263\u306b\u53d7\u3051\u6b62\u3081\u3066\u3044\u307e\u3059\u3002\u8106\u5f31\u6027\u3092\u767a\u898b\u3055\u308c\u305f\u5834\u5408\u306f\u3001\u305c\u3072\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002"
            },
            "reporting": {
                "heading": "\u8106\u5f31\u6027\u306e\u5831\u544a",
                "p1": "LumenLingo\u306b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8106\u5f31\u6027\u3092\u767a\u898b\u3057\u305f\u3068\u601d\u308f\u308c\u308b\u5834\u5408\u306f\u3001<emailLink>security@lumenshore.com</emailLink>\u306b\u30e1\u30fc\u30eb\u3067\u8cac\u4efb\u3092\u6301\u3063\u3066\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "p2": "\u8106\u5f31\u6027\u306e\u8aac\u660e\u3001\u518d\u73fe\u624b\u9806\u3001\u6f5c\u5728\u7684\u306a\u5f71\u97ff\u3001\u6982\u5ff5\u5b9f\u8a3c\u30b3\u30fc\u30c9\u3084\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306a\u3069\u3001\u3067\u304d\u308b\u3060\u3051\u8a73\u7d30\u306a\u60c5\u5831\u3092\u542b\u3081\u3066\u304f\u3060\u3055\u3044\u3002",
                "p3": "RFC 9116\u306b\u6e96\u62e0\u3057\u305f\u6a5f\u68b0\u53ef\u8aad\u306e<securityTxtLink>security.txt</securityTxtLink>\u30d5\u30a1\u30a4\u30eb\u3082\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002"
            },
            "scope": {
                "heading": "\u7bc4\u56f2",
                "inScopeHeading": "\u5bfe\u8c61\u7bc4\u56f2",
                "inScope1": "LumenLingo\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\uff08lumenlingo.com\uff09\u304a\u3088\u3073\u3059\u3079\u3066\u306e\u30b5\u30d6\u30c9\u30e1\u30a4\u30f3",
                "inScope2": "lumenlingo.com/api/*\u4e0b\u306eAPI\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",
                "inScope3": "LumenLingo iOS\u30a2\u30d7\u30ea",
                "inScope4": "\u8a8d\u8a3c\u304a\u3088\u3073\u8a8d\u53ef\u306e\u4e0d\u5177\u5408",
                "inScope5": "\u30af\u30ed\u30b9\u30b5\u30a4\u30c8\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0\uff08XSS\uff09\u3001\u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u3001CSRF\u306e\u8106\u5f31\u6027",
                "inScope6": "\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u30ea\u30af\u30a8\u30b9\u30c8\u30d5\u30a9\u30fc\u30b8\u30e3\u30ea\uff08SSRF\uff09",
                "inScope7": "\u6a5f\u5bc6\u30c7\u30fc\u30bf\u306e\u6f0f\u6d29",
                "outOfScopeHeading": "\u5bfe\u8c61\u5916",
                "outOfScope1": "LumenShore\u5f93\u696d\u54e1\u3078\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\uff08\u30d5\u30a3\u30c3\u30b7\u30f3\u30b0\u3001\u30d3\u30c3\u30b7\u30f3\u30b0\uff09",
                "outOfScope2": "\u30b5\u30fc\u30d3\u30b9\u62d2\u5426\u653b\u6483\uff08DoS/DDoS\uff09",
                "outOfScope3": "LumenShore\u306e\u30aa\u30d5\u30a3\u30b9\u3084\u30a4\u30f3\u30d5\u30e9\u3078\u306e\u7269\u7406\u7684\u653b\u6483",
                "outOfScope4": "\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30b5\u30fc\u30d3\u30b9\uff08Apple\u3001Vercel\u3001Sentry\uff09\u306e\u8106\u5f31\u6027 \u2014 \u305d\u308c\u305e\u308c\u306e\u30d9\u30f3\u30c0\u30fc\u306b\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044",
                "outOfScope5": "\u4e8b\u524d\u627f\u8a8d\u306a\u3057\u306e\u81ea\u52d5\u30b9\u30ad\u30e3\u30f3",
                "outOfScope6": "\u30b9\u30d1\u30e0\u3001SEO\u64cd\u4f5c\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u5f71\u97ff\u3057\u306a\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7\u30f3"
            },
            "response": {
                "heading": "\u5f53\u793e\u306e\u5bfe\u5fdc",
                "p1": "\u4ee5\u4e0b\u306e\u5bfe\u5fdc\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3092\u304a\u7d04\u675f\u3057\u307e\u3059\uff1a",
                "item1": "<b>\u78ba\u8a8d</b> \u2014 \u5831\u544a\u304b\u308948\u6642\u9593\u4ee5\u5185",
                "item2": "<b>\u521d\u671f\u8a55\u4fa1</b> \u2014 5\u55b6\u696d\u65e5\u4ee5\u5185",
                "item3": "<b>\u89e3\u6c7a\u76ee\u6a19</b> \u2014 \u91cd\u5927\u306a\u554f\u984c\u306f30\u65e5\u4ee5\u5185\u3001\u305d\u308c\u4ee5\u5916\u306f90\u65e5\u4ee5\u5185",
                "item4": "<b>\u901a\u77e5</b> \u2014 \u554f\u984c\u304c\u89e3\u6c7a\u3057\u305f\u969b\u306b\u304a\u77e5\u3089\u305b\u3057\u307e\u3059",
                "p2": "\u9032\u6357\u72b6\u6cc1\u3092\u304a\u4f1d\u3048\u3057\u3001\u554f\u984c\u306e\u518d\u73fe\u3084\u89e3\u6c7a\u306b\u5f79\u7acb\u3064\u8ffd\u52a0\u60c5\u5831\u3092\u304a\u5c0b\u306d\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"
            },
            "safeHarbour": {
                "heading": "\u30bb\u30fc\u30d5\u30cf\u30fc\u30d0\u30fc",
                "p1": "\u4ee5\u4e0b\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u7814\u7a76\u8005\u306b\u5bfe\u3057\u3066\u6cd5\u7684\u63aa\u7f6e\u3092\u53d6\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\uff1a",
                "item1": "\u5584\u610f\u3067\u884c\u52d5\u3057\u3001\u3053\u306e\u958b\u793a\u30dd\u30ea\u30b7\u30fc\u306b\u5f93\u3046\u3053\u3068",
                "item2": "\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3084\u5909\u66f4\u3092\u907f\u3051\u308b\u3053\u3068",
                "item3": "\u30b5\u30fc\u30d3\u30b9\u3092\u4f4e\u4e0b\u3055\u305b\u306a\u3044\u3053\u3068\uff08DoS\u3084\u7834\u58ca\u7684\u30c6\u30b9\u30c8\u306a\u3057\uff09",
                "item4": "\u8106\u5f31\u6027\u3092\u901f\u3084\u304b\u306b\u5831\u544a\u3057\u3001\u5f53\u793e\u304c\u5bfe\u51e6\u3059\u308b\u5408\u7406\u7684\u306a\u6a5f\u4f1a\u3092\u5f97\u308b\u307e\u3067\u516c\u958b\u3057\u306a\u3044\u3053\u3068",
                "p2": "\u3053\u308c\u3089\u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u306b\u5f93\u3046\u5834\u5408\u3001\u304a\u5ba2\u69d8\u306e\u8abf\u67fb\u306f\u8a31\u53ef\u3055\u308c\u305f\u3082\u306e\u3068\u307f\u306a\u3057\u3001\u767a\u898b\u306b\u95a2\u9023\u3059\u308b\u6c11\u4e8b\u307e\u305f\u306f\u5211\u4e8b\u63aa\u7f6e\u3092\u53d6\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"
            },
            "contact": {
                "heading": "\u9023\u7d61\u5148",
                "p1": "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5831\u544a\uff1a<emailLink>security@lumenshore.com</emailLink>",
                "p2": "\u4e00\u822c\u30b5\u30dd\u30fc\u30c8\uff1a<supportLink>support@lumenshore.com</supportLink>",
                "p3": "\u5e0c\u671b\u8a00\u8a9e\uff1a\u82f1\u8a9e"
            }
        }
    },
    "pt": {
        "Security": {
            "meta": {
                "title": "Seguranca — LumenLingo",
                "description": "Politica de divulgacao responsavel do LumenLingo. Como reportar vulnerabilidades de seguranca, escopo, prazo de resposta e nosso compromisso com a seguranca dos pesquisadores.",
                "ogTitle": "Seguranca — LumenLingo",
                "ogDescription": "Reporte vulnerabilidades de seguranca de forma responsavel. Respondemos em 48 horas e nunca tomamos acoes legais contra pesquisadores de boa-fe."
            },
            "breadcrumb": "Seguranca",
            "hero": {
                "heading": "Seguranca",
                "subtitle": "Levamos a seguranca do LumenLingo e dos seus dados muito a serio. Se descobrir uma vulnerabilidade, queremos saber."
            },
            "reporting": {
                "heading": "Reportar uma vulnerabilidade",
                "p1": "Se acredita ter encontrado uma vulnerabilidade de seguranca no LumenLingo, reporte-a de forma responsavel enviando um e-mail para <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "Inclua o maximo de detalhes possivel: uma descricao da vulnerabilidade, passos para reproduzi-la, o impacto potencial e qualquer codigo de prova de conceito ou capturas de tela.",
                "p3": "Tambem publicamos um arquivo <securityTxtLink>security.txt</securityTxtLink> legivel por maquinas conforme a RFC 9116."
            },
            "scope": {
                "heading": "Escopo",
                "inScopeHeading": "Dentro do escopo",
                "inScope1": "O site do LumenLingo (lumenlingo.com) e todos os subdominios",
                "inScope2": "Endpoints de API em lumenlingo.com/api/*",
                "inScope3": "O aplicativo iOS do LumenLingo",
                "inScope4": "Falhas de autenticacao e autorizacao",
                "inScope5": "Vulnerabilidades de cross-site scripting (XSS), injecao e CSRF",
                "inScope6": "Server-side request forgery (SSRF)",
                "inScope7": "Exposicao de dados sensiveis",
                "outOfScopeHeading": "Fora do escopo",
                "outOfScope1": "Engenharia social (phishing, vishing) contra funcionarios da LumenShore",
                "outOfScope2": "Ataques de negacao de servico (DoS/DDoS)",
                "outOfScope3": "Ataques fisicos contra escritorios ou infraestrutura da LumenShore",
                "outOfScope4": "Vulnerabilidades em servicos de terceiros (Apple, Vercel, Sentry) — reporte-as ao fornecedor correspondente",
                "outOfScope5": "Varredura automatizada sem aprovacao previa",
                "outOfScope6": "Spam, manipulacao SEO ou injecao de conteudo que nao afete a seguranca"
            },
            "response": {
                "heading": "Nossa resposta",
                "p1": "Nos comprometemos com o seguinte prazo de resposta:",
                "item1": "<b>Confirmacao</b> — dentro de 48 horas do seu relatorio",
                "item2": "<b>Avaliacao inicial</b> — dentro de 5 dias uteis",
                "item3": "<b>Meta de resolucao</b> — dentro de 30 dias para problemas criticos, 90 dias para nao criticos",
                "item4": "<b>Notificacao</b> — informaremos quando o problema for resolvido",
                "p2": "Manteremos voce informado do nosso progresso e podemos solicitar informacoes adicionais para ajudar a reproduzir ou resolver o problema."
            },
            "safeHarbour": {
                "heading": "Porto seguro",
                "p1": "Nao tomaremos acoes legais contra pesquisadores de seguranca que:",
                "item1": "Ajam de boa-fe e sigam esta politica de divulgacao",
                "item2": "Evitem acessar ou modificar dados de outros usuarios",
                "item3": "Nao degradem o servico (sem DoS, sem testes destrutivos)",
                "item4": "Reportem vulnerabilidades prontamente e nao as divulguem publicamente ate que tenhamos tido uma oportunidade razoavel de aborda-las",
                "p2": "Se seguir estas diretrizes, consideramos sua pesquisa como autorizada e nao tomaremos acoes civis ou criminais relacionadas as suas descobertas."
            },
            "contact": {
                "heading": "Contato",
                "p1": "Para relatorios de seguranca: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "Para suporte geral: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "Idioma preferido: ingles"
            }
        }
    },
    "pl": {
        "Security": {
            "meta": {
                "title": "Bezpieczenstwo — LumenLingo",
                "description": "Polityka odpowiedzialnego ujawniania LumenLingo. Jak zglaszac luki bezpieczenstwa, zakres, czas odpowiedzi i nasze zobowiazanie wobec bezpieczenstwa badaczy.",
                "ogTitle": "Bezpieczenstwo — LumenLingo",
                "ogDescription": "Zglaszaj luki bezpieczenstwa w sposob odpowiedzialny. Odpowiadamy w ciagu 48 godzin i nigdy nie podejmujemy dzialan prawnych przeciwko badaczom dzialajacym w dobrej wierze."
            },
            "breadcrumb": "Bezpieczenstwo",
            "hero": {
                "heading": "Bezpieczenstwo",
                "subtitle": "Bardzo powaznie traktujemy bezpieczenstwo LumenLingo i Twoich danych. Jesli odkryjesz luke, chcemy o tym wiedziec."
            },
            "reporting": {
                "heading": "Zglaszanie luki",
                "p1": "Jesli uwazasz, ze znalazles luke bezpieczenstwa w LumenLingo, zglos ja odpowiedzialnie wysylajac e-mail na adres <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "Prosimy o podanie jak najwiecej szczegolow: opis luki, kroki do odtworzenia, potencjalny wplyw oraz ewentualny kod proof-of-concept lub zrzuty ekranu.",
                "p3": "Publikujemy rowniez plik <securityTxtLink>security.txt</securityTxtLink> zgodny z RFC 9116."
            },
            "scope": {
                "heading": "Zakres",
                "inScopeHeading": "W zakresie",
                "inScope1": "Strona internetowa LumenLingo (lumenlingo.com) i wszystkie subdomeny",
                "inScope2": "Endpointy API pod lumenlingo.com/api/*",
                "inScope3": "Aplikacja iOS LumenLingo",
                "inScope4": "Bledy uwierzytelniania i autoryzacji",
                "inScope5": "Luki cross-site scripting (XSS), injection i CSRF",
                "inScope6": "Server-side request forgery (SSRF)",
                "inScope7": "Ujawnienie danych wrazliwych",
                "outOfScopeHeading": "Poza zakresem",
                "outOfScope1": "Inzynieria spoleczna (phishing, vishing) wobec pracownikow LumenShore",
                "outOfScope2": "Ataki typu odmowa uslugi (DoS/DDoS)",
                "outOfScope3": "Ataki fizyczne na biura lub infrastrukture LumenShore",
                "outOfScope4": "Luki w uslugach firm trzecich (Apple, Vercel, Sentry) — zglos je odpowiedniemu dostawcy",
                "outOfScope5": "Automatyczne skanowanie bez uprzedniej zgody",
                "outOfScope6": "Spam, manipulacja SEO lub wstrzykiwanie tresci niezwiazane z bezpieczenstwem"
            },
            "response": {
                "heading": "Nasza odpowiedz",
                "p1": "Zobowiazujemy sie do nastepujacego czasu odpowiedzi:",
                "item1": "<b>Potwierdzenie</b> — w ciagu 48 godzin od Twojego zgloszenia",
                "item2": "<b>Wstepna ocena</b> — w ciagu 5 dni roboczych",
                "item3": "<b>Cel rozwiazania</b> — w ciagu 30 dni dla problemow krytycznych, 90 dni dla niekrytycznych",
                "item4": "<b>Powiadomienie</b> — poinformujemy Cie, gdy problem zostanie rozwiazany",
                "p2": "Bedziemy informowac o postepach i mozemy poprosic o dodatkowe informacje pomocne w odtworzeniu lub rozwiazaniu problemu."
            },
            "safeHarbour": {
                "heading": "Bezpieczna przystan",
                "p1": "Nie podejmiemy dzialan prawnych przeciwko badaczom bezpieczenstwa, ktorzy:",
                "item1": "Dzialaja w dobrej wierze i przestrzegaja tej polityki ujawniania",
                "item2": "Unikaja dostepu do danych innych uzytkownikow lub ich modyfikacji",
                "item3": "Nie degraduja uslugi (bez DoS, bez testow destrukcyjnych)",
                "item4": "Zglaszaja luki niezwlocznie i nie ujawniaja ich publicznie, dopoki nie bedziemy mieli rozsadnej mozliwosci ich naprawienia",
                "p2": "Jesli przestrzegasz tych wytycznych, uznajemy Twoje badania za autoryzowane i nie podejmiemy dzialan cywilnych ani karnych zwiazanych z Twoimi odkryciami."
            },
            "contact": {
                "heading": "Kontakt",
                "p1": "Zgloszenia bezpieczenstwa: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "Ogolne wsparcie: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "Preferowany jezyk: angielski"
            }
        }
    },
    "ar": {
        "Security": {
            "meta": {
                "title": "\u0627\u0644\u0623\u0645\u0627\u0646 \u2014 LumenLingo",
                "description": "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0625\u0641\u0635\u0627\u062d \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0641\u064a LumenLingo. \u0643\u064a\u0641\u064a\u0629 \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062b\u063a\u0631\u0627\u062a \u0623\u0645\u0646\u064a\u0629\u060c \u0627\u0644\u0646\u0637\u0627\u0642\u060c \u0648\u0642\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629\u060c \u0648\u0627\u0644\u062a\u0632\u0627\u0645\u0646\u0627 \u0628\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0628\u0627\u062d\u062b\u064a\u0646.",
                "ogTitle": "\u0627\u0644\u0623\u0645\u0627\u0646 \u2014 LumenLingo",
                "ogDescription": "\u0623\u0628\u0644\u063a \u0639\u0646 \u0627\u0644\u062b\u063a\u0631\u0627\u062a \u0627\u0644\u0623\u0645\u0646\u064a\u0629 \u0628\u0645\u0633\u0624\u0648\u0644\u064a\u0629. \u0646\u0631\u062f \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629 \u0648\u0644\u0627 \u0646\u062a\u062e\u0630 \u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0636\u062f \u0627\u0644\u0628\u0627\u062d\u062b\u064a\u0646 \u062d\u0633\u0646\u064a \u0627\u0644\u0646\u064a\u0629."
            },
            "breadcrumb": "\u0627\u0644\u0623\u0645\u0627\u0646",
            "hero": {
                "heading": "\u0627\u0644\u0623\u0645\u0627\u0646",
                "subtitle": "\u0646\u0623\u062e\u0630 \u0623\u0645\u0627\u0646 LumenLingo \u0648\u0628\u064a\u0627\u0646\u0627\u062a\u0643 \u0639\u0644\u0649 \u0645\u062d\u0645\u0644 \u0627\u0644\u062c\u062f. \u0625\u0630\u0627 \u0627\u0643\u062a\u0634\u0641\u062a \u062b\u063a\u0631\u0629 \u0623\u0645\u0646\u064a\u0629\u060c \u0646\u0631\u064a\u062f \u0623\u0646 \u0646\u0633\u0645\u0639 \u0639\u0646\u0647\u0627."
            },
            "reporting": {
                "heading": "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u062b\u063a\u0631\u0629",
                "p1": "\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0639\u062a\u0642\u062f \u0623\u0646\u0643 \u0648\u062c\u062f\u062a \u062b\u063a\u0631\u0629 \u0623\u0645\u0646\u064a\u0629 \u0641\u064a LumenLingo\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646\u0647\u0627 \u0628\u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "\u064a\u0631\u062c\u0649 \u062a\u0636\u0645\u064a\u0646 \u0623\u0643\u0628\u0631 \u0642\u062f\u0631 \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644: \u0648\u0635\u0641 \u0627\u0644\u062b\u063a\u0631\u0629\u060c \u062e\u0637\u0648\u0627\u062a \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0625\u0646\u062a\u0627\u062c\u060c \u0627\u0644\u062a\u0623\u062b\u064a\u0631 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u060c \u0648\u0623\u064a \u0643\u0648\u062f \u0625\u062b\u0628\u0627\u062a \u0645\u0641\u0647\u0648\u0645 \u0623\u0648 \u0644\u0642\u0637\u0627\u062a \u0634\u0627\u0634\u0629.",
                "p3": "\u0646\u0646\u0634\u0631 \u0623\u064a\u0636\u064b\u0627 \u0645\u0644\u0641 <securityTxtLink>security.txt</securityTxtLink> \u0642\u0627\u0628\u0644 \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0622\u0644\u064a\u064b\u0627 \u0648\u0641\u0642\u064b\u0627 \u0644\u0640 RFC 9116."
            },
            "scope": {
                "heading": "\u0627\u0644\u0646\u0637\u0627\u0642",
                "inScopeHeading": "\u0636\u0645\u0646 \u0627\u0644\u0646\u0637\u0627\u0642",
                "inScope1": "\u0645\u0648\u0642\u0639 LumenLingo (lumenlingo.com) \u0648\u062c\u0645\u064a\u0639 \u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a \u0627\u0644\u0641\u0631\u0639\u064a\u0629",
                "inScope2": "\u0646\u0642\u0627\u0637 \u0646\u0647\u0627\u064a\u0629 API \u062a\u062d\u062a lumenlingo.com/api/*",
                "inScope3": "\u062a\u0637\u0628\u064a\u0642 LumenLingo \u0644\u0646\u0638\u0627\u0645 iOS",
                "inScope4": "\u0639\u064a\u0648\u0628 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0648\u0627\u0644\u062a\u0641\u0648\u064a\u0636",
                "inScope5": "\u062b\u063a\u0631\u0627\u062a \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0639\u0628\u0631 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 (XSS) \u0648\u0627\u0644\u062d\u0642\u0646 \u0648CSRF",
                "inScope6": "\u062a\u0632\u0648\u064a\u0631 \u0637\u0644\u0628\u0627\u062a \u062c\u0627\u0646\u0628 \u0627\u0644\u062e\u0627\u062f\u0645 (SSRF)",
                "inScope7": "\u0643\u0634\u0641 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0633\u0629",
                "outOfScopeHeading": "\u062e\u0627\u0631\u062c \u0627\u0644\u0646\u0637\u0627\u0642",
                "outOfScope1": "\u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 (\u0627\u0644\u062a\u0635\u064a\u062f\u060c \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0644 \u0627\u0644\u0635\u0648\u062a\u064a) \u0636\u062f \u0645\u0648\u0638\u0641\u064a LumenShore",
                "outOfScope2": "\u0647\u062c\u0645\u0627\u062a \u0631\u0641\u0636 \u0627\u0644\u062e\u062f\u0645\u0629 (DoS/DDoS)",
                "outOfScope3": "\u0627\u0644\u0647\u062c\u0645\u0627\u062a \u0627\u0644\u0645\u0627\u062f\u064a\u0629 \u0639\u0644\u0649 \u0645\u0643\u0627\u062a\u0628 \u0623\u0648 \u0628\u0646\u064a\u0629 LumenShore \u0627\u0644\u062a\u062d\u062a\u064a\u0629",
                "outOfScope4": "\u0627\u0644\u062b\u063a\u0631\u0627\u062a \u0641\u064a \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u062b\u0627\u0644\u062b (Apple\u060c Vercel\u060c Sentry) \u2014 \u0623\u0628\u0644\u063a \u0639\u0646\u0647\u0627 \u0644\u0644\u0645\u0648\u0631\u062f \u0627\u0644\u0645\u0639\u0646\u064a",
                "outOfScope5": "\u0627\u0644\u0641\u062d\u0635 \u0627\u0644\u0622\u0644\u064a \u062f\u0648\u0646 \u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0633\u0628\u0642\u0629",
                "outOfScope6": "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0639\u0634\u0648\u0627\u0626\u064a\u060c \u0627\u0644\u062a\u0644\u0627\u0639\u0628 \u0628\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b\u060c \u0623\u0648 \u062d\u0642\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0630\u064a \u0644\u0627 \u064a\u0624\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u0623\u0645\u0627\u0646"
            },
            "response": {
                "heading": "\u0627\u0633\u062a\u062c\u0627\u0628\u062a\u0646\u0627",
                "p1": "\u0646\u0644\u062a\u0632\u0645 \u0628\u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a \u0627\u0644\u062a\u0627\u0644\u064a \u0644\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629:",
                "item1": "<b>\u0627\u0644\u062a\u0623\u0643\u064a\u062f</b> \u2014 \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629 \u0645\u0646 \u062a\u0642\u0631\u064a\u0631\u0643",
                "item2": "<b>\u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0623\u0648\u0644\u064a</b> \u2014 \u062e\u0644\u0627\u0644 5 \u0623\u064a\u0627\u0645 \u0639\u0645\u0644",
                "item3": "<b>\u0647\u062f\u0641 \u0627\u0644\u062d\u0644</b> \u2014 \u062e\u0644\u0627\u0644 30 \u064a\u0648\u0645\u064b\u0627 \u0644\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u062d\u0631\u062c\u0629\u060c 90 \u064a\u0648\u0645\u064b\u0627 \u0644\u063a\u064a\u0631 \u0627\u0644\u062d\u0631\u062c\u0629",
                "item4": "<b>\u0627\u0644\u0625\u062e\u0637\u0627\u0631</b> \u2014 \u0633\u0646\u0639\u0644\u0645\u0643 \u0639\u0646\u062f \u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629",
                "p2": "\u0633\u0646\u0628\u0642\u064a\u0643 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0628\u062a\u0642\u062f\u0645\u0646\u0627 \u0648\u0642\u062f \u0646\u0637\u0644\u0628 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629 \u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0625\u0639\u0627\u062f\u0629 \u0625\u0646\u062a\u0627\u062c \u0623\u0648 \u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629."
            },
            "safeHarbour": {
                "heading": "\u0627\u0644\u0645\u0644\u0627\u0630 \u0627\u0644\u0622\u0645\u0646",
                "p1": "\u0644\u0646 \u0646\u062a\u062e\u0630 \u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0636\u062f \u0628\u0627\u062d\u062b\u064a \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0630\u064a\u0646:",
                "item1": "\u064a\u062a\u0635\u0631\u0641\u0648\u0646 \u0628\u062d\u0633\u0646 \u0646\u064a\u0629 \u0648\u064a\u062a\u0628\u0639\u0648\u0646 \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0625\u0641\u0635\u0627\u062d \u0647\u0630\u0647",
                "item2": "\u064a\u062a\u062c\u0646\u0628\u0648\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0627\u0644\u0622\u062e\u0631\u064a\u0646 \u0623\u0648 \u062a\u0639\u062f\u064a\u0644\u0647\u0627",
                "item3": "\u0644\u0627 \u064a\u0624\u062b\u0631\u0648\u0646 \u0633\u0644\u0628\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u062e\u062f\u0645\u0629 (\u0628\u062f\u0648\u0646 DoS\u060c \u0628\u062f\u0648\u0646 \u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u062a\u062f\u0645\u064a\u0631\u064a\u0629)",
                "item4": "\u064a\u0628\u0644\u063a\u0648\u0646 \u0639\u0646 \u0627\u0644\u062b\u063a\u0631\u0627\u062a \u0628\u0633\u0631\u0639\u0629 \u0648\u0644\u0627 \u064a\u0643\u0634\u0641\u0648\u0646 \u0639\u0646\u0647\u0627 \u0639\u0644\u0646\u064b\u0627 \u062d\u062a\u0649 \u0646\u062d\u0635\u0644 \u0639\u0644\u0649 \u0641\u0631\u0635\u0629 \u0645\u0639\u0642\u0648\u0644\u0629 \u0644\u0645\u0639\u0627\u0644\u062c\u062a\u0647\u0627",
                "p2": "\u0625\u0630\u0627 \u0627\u062a\u0628\u0639\u062a \u0647\u0630\u0647 \u0627\u0644\u0625\u0631\u0634\u0627\u062f\u0627\u062a\u060c \u0641\u0625\u0646\u0646\u0627 \u0646\u0639\u062a\u0628\u0631 \u0628\u062d\u062b\u0643 \u0645\u0635\u0631\u062d\u064b\u0627 \u0628\u0647 \u0648\u0644\u0646 \u0646\u062a\u062e\u0630 \u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0645\u062f\u0646\u064a\u0629 \u0623\u0648 \u062c\u0646\u0627\u0626\u064a\u0629 \u062a\u062a\u0639\u0644\u0642 \u0628\u0627\u0643\u062a\u0634\u0627\u0641\u0627\u062a\u0643."
            },
            "contact": {
                "heading": "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
                "p1": "\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u0623\u0645\u0627\u0646: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "\u0644\u0644\u062f\u0639\u0645 \u0627\u0644\u0639\u0627\u0645: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629: \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629"
            }
        }
    },
    "zh": {
        "Security": {
            "meta": {
                "title": "\u5b89\u5168 \u2014 LumenLingo",
                "description": "LumenLingo\u8d1f\u8d23\u4efb\u62ab\u9732\u653f\u7b56\u3002\u5982\u4f55\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e\u3001\u8303\u56f4\u3001\u54cd\u5e94\u65f6\u95f4\u7ebf\u4ee5\u53ca\u6211\u4eec\u5bf9\u7814\u7a76\u4eba\u5458\u5b89\u5168\u7684\u627f\u8bfa\u3002",
                "ogTitle": "\u5b89\u5168 \u2014 LumenLingo",
                "ogDescription": "\u8d1f\u8d23\u4efb\u5730\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e\u300248\u5c0f\u65f6\u5185\u54cd\u5e94\uff0c\u4e14\u4e0d\u4f1a\u5bf9\u5584\u610f\u7814\u7a76\u4eba\u5458\u91c7\u53d6\u6cd5\u5f8b\u884c\u52a8\u3002"
            },
            "breadcrumb": "\u5b89\u5168",
            "hero": {
                "heading": "\u5b89\u5168",
                "subtitle": "\u6211\u4eec\u975e\u5e38\u91cd\u89c6LumenLingo\u548c\u60a8\u6570\u636e\u7684\u5b89\u5168\u3002\u5982\u679c\u60a8\u53d1\u73b0\u4e86\u6f0f\u6d1e\uff0c\u6211\u4eec\u5e0c\u671b\u542c\u5230\u60a8\u7684\u53cd\u9988\u3002"
            },
            "reporting": {
                "heading": "\u62a5\u544a\u6f0f\u6d1e",
                "p1": "\u5982\u679c\u60a8\u8ba4\u4e3a\u5728LumenLingo\u4e2d\u53d1\u73b0\u4e86\u5b89\u5168\u6f0f\u6d1e\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3<emailLink>security@lumenshore.com</emailLink>\u8fdb\u884c\u8d1f\u8d23\u4efb\u62a5\u544a\u3002",
                "p2": "\u8bf7\u5c3d\u53ef\u80fd\u63d0\u4f9b\u8be6\u7ec6\u4fe1\u606f\uff1a\u6f0f\u6d1e\u63cf\u8ff0\u3001\u590d\u73b0\u6b65\u9aa4\u3001\u6f5c\u5728\u5f71\u54cd\u4ee5\u53ca\u4efb\u4f55\u6982\u5ff5\u9a8c\u8bc1\u4ee3\u7801\u6216\u622a\u56fe\u3002",
                "p3": "\u6211\u4eec\u8fd8\u6839\u636eRFC 9116\u53d1\u5e03\u4e86\u673a\u5668\u53ef\u8bfb\u7684<securityTxtLink>security.txt</securityTxtLink>\u6587\u4ef6\u3002"
            },
            "scope": {
                "heading": "\u8303\u56f4",
                "inScopeHeading": "\u8303\u56f4\u5185",
                "inScope1": "LumenLingo\u7f51\u7ad9\uff08lumenlingo.com\uff09\u53ca\u6240\u6709\u5b50\u57df\u540d",
                "inScope2": "lumenlingo.com/api/*\u4e0b\u7684API\u7aef\u70b9",
                "inScope3": "LumenLingo iOS\u5e94\u7528\u7a0b\u5e8f",
                "inScope4": "\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u7f3a\u9677",
                "inScope5": "\u8de8\u7ad9\u811a\u672c\uff08XSS\uff09\u3001\u6ce8\u5165\u548cCSRF\u6f0f\u6d1e",
                "inScope6": "\u670d\u52a1\u5668\u7aef\u8bf7\u6c42\u4f2a\u9020\uff08SSRF\uff09",
                "inScope7": "\u654f\u611f\u6570\u636e\u6cc4\u9732",
                "outOfScopeHeading": "\u8303\u56f4\u5916",
                "outOfScope1": "\u9488\u5bf9LumenShore\u5458\u5de5\u7684\u793e\u4f1a\u5de5\u7a0b\uff08\u7f51\u7edc\u9493\u9c7c\u3001\u7535\u8bdd\u8bc8\u9a97\uff09",
                "outOfScope2": "\u62d2\u7edd\u670d\u52a1\u653b\u51fb\uff08DoS/DDoS\uff09",
                "outOfScope3": "\u5bf9LumenShore\u529e\u516c\u5ba4\u6216\u57fa\u7840\u8bbe\u65bd\u7684\u7269\u7406\u653b\u51fb",
                "outOfScope4": "\u7b2c\u4e09\u65b9\u670d\u52a1\uff08Apple\u3001Vercel\u3001Sentry\uff09\u4e2d\u7684\u6f0f\u6d1e \u2014 \u8bf7\u5411\u76f8\u5e94\u4f9b\u5e94\u5546\u62a5\u544a",
                "outOfScope5": "\u672a\u7ecf\u4e8b\u5148\u6279\u51c6\u7684\u81ea\u52a8\u626b\u63cf",
                "outOfScope6": "\u5783\u573e\u90ae\u4ef6\u3001SEO\u64cd\u7eb5\u6216\u4e0d\u5f71\u54cd\u5b89\u5168\u7684\u5185\u5bb9\u6ce8\u5165"
            },
            "response": {
                "heading": "\u6211\u4eec\u7684\u54cd\u5e94",
                "p1": "\u6211\u4eec\u627f\u8bfa\u4ee5\u4e0b\u54cd\u5e94\u65f6\u95f4\u7ebf\uff1a",
                "item1": "<b>\u786e\u8ba4</b> \u2014 \u6536\u5230\u62a5\u544a\u540e48\u5c0f\u65f6\u5185",
                "item2": "<b>\u521d\u6b65\u8bc4\u4f30</b> \u2014 5\u4e2a\u5de5\u4f5c\u65e5\u5185",
                "item3": "<b>\u89e3\u51b3\u76ee\u6807</b> \u2014 \u5173\u952e\u95ee\u98303\u5929\u5185\uff0c\u975e\u5173\u952e\u95ee\u989090\u5929\u5185",
                "item4": "<b>\u901a\u77e5</b> \u2014 \u95ee\u9898\u89e3\u51b3\u540e\u6211\u4eec\u4f1a\u901a\u77e5\u60a8",
                "p2": "\u6211\u4eec\u4f1a\u968f\u65f6\u901a\u62a5\u8fdb\u5c55\uff0c\u5e76\u53ef\u80fd\u8bf7\u6c42\u989d\u5916\u4fe1\u606f\u4ee5\u5e2e\u52a9\u590d\u73b0\u6216\u89e3\u51b3\u95ee\u9898\u3002"
            },
            "safeHarbour": {
                "heading": "\u5b89\u5168\u6e2f",
                "p1": "\u6211\u4eec\u4e0d\u4f1a\u5bf9\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6\u7684\u5b89\u5168\u7814\u7a76\u4eba\u5458\u91c7\u53d6\u6cd5\u5f8b\u884c\u52a8\uff1a",
                "item1": "\u5584\u610f\u884c\u4e8b\u5e76\u9075\u5faa\u672c\u62ab\u9732\u653f\u7b56",
                "item2": "\u907f\u514d\u8bbf\u95ee\u6216\u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u6570\u636e",
                "item3": "\u4e0d\u964d\u4f4e\u670d\u52a1\u8d28\u91cf\uff08\u4e0d\u8fdb\u884cDoS\u6216\u7834\u574f\u6027\u6d4b\u8bd5\uff09",
                "item4": "\u53ca\u65f6\u62a5\u544a\u6f0f\u6d1e\uff0c\u5728\u6211\u4eec\u6709\u5408\u7406\u673a\u4f1a\u5904\u7406\u4e4b\u524d\u4e0d\u516c\u5f00\u62ab\u9732",
                "p2": "\u5982\u679c\u60a8\u9075\u5faa\u8fd9\u4e9b\u51c6\u5219\uff0c\u6211\u4eec\u8ba4\u4e3a\u60a8\u7684\u7814\u7a76\u662f\u7ecf\u6388\u6743\u7684\uff0c\u4e0d\u4f1a\u5bf9\u60a8\u7684\u53d1\u73b0\u91c7\u53d6\u6c11\u4e8b\u6216\u5211\u4e8b\u884c\u52a8\u3002"
            },
            "contact": {
                "heading": "\u8054\u7cfb\u6211\u4eec",
                "p1": "\u5b89\u5168\u62a5\u544a\uff1a<emailLink>security@lumenshore.com</emailLink>",
                "p2": "\u4e00\u822c\u652f\u6301\uff1a<supportLink>support@lumenshore.com</supportLink>",
                "p3": "\u9996\u9009\u8bed\u8a00\uff1a\u82f1\u8bed"
            }
        }
    },
    "uk": {
        "Security": {
            "meta": {
                "title": "\u0411\u0435\u0437\u043f\u0435\u043a\u0430 \u2014 LumenLingo",
                "description": "\u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u043e\u0437\u043a\u0440\u0438\u0442\u0442\u044f LumenLingo. \u042f\u043a \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u0442\u0438 \u043f\u0440\u043e \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u0441\u0442\u0456, \u043e\u0431\u0441\u044f\u0433, \u0447\u0430\u0441 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u0442\u0430 \u043d\u0430\u0448\u0435 \u0437\u043e\u0431\u043e\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u0449\u043e\u0434\u043e \u0431\u0435\u0437\u043f\u0435\u043a\u0438 \u0434\u043e\u0441\u043b\u0456\u0434\u043d\u0438\u043a\u0456\u0432.",
                "ogTitle": "\u0411\u0435\u0437\u043f\u0435\u043a\u0430 \u2014 LumenLingo",
                "ogDescription": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u044f\u0439\u0442\u0435 \u043f\u0440\u043e \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e. \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454\u043c\u043e \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 48 \u0433\u043e\u0434\u0438\u043d \u0456 \u043d\u0456\u043a\u043e\u043b\u0438 \u043d\u0435 \u0432\u0436\u0438\u0432\u0430\u0454\u043c\u043e \u043f\u0440\u0430\u0432\u043e\u0432\u0438\u0445 \u0437\u0430\u0445\u043e\u0434\u0456\u0432 \u043f\u0440\u043e\u0442\u0438 \u0434\u043e\u0431\u0440\u043e\u0441\u043e\u0432\u0456\u0441\u043d\u0438\u0445 \u0434\u043e\u0441\u043b\u0456\u0434\u043d\u0438\u043a\u0456\u0432."
            },
            "breadcrumb": "\u0411\u0435\u0437\u043f\u0435\u043a\u0430",
            "hero": {
                "heading": "\u0411\u0435\u0437\u043f\u0435\u043a\u0430",
                "subtitle": "\u041c\u0438 \u0434\u0443\u0436\u0435 \u0441\u0435\u0440\u0439\u043e\u0437\u043d\u043e \u0441\u0442\u0430\u0432\u0438\u043c\u043e\u0441\u044f \u0434\u043e \u0431\u0435\u0437\u043f\u0435\u043a\u0438 LumenLingo \u0442\u0430 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u0438\u0445. \u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u044f\u0432\u0438\u043b\u0438 \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u0456\u0441\u0442\u044c, \u043c\u0438 \u0445\u043e\u0447\u0435\u043c\u043e \u043f\u0440\u043e \u0446\u0435 \u0434\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f."
            },
            "reporting": {
                "heading": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u0456\u0441\u0442\u044c",
                "p1": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u0435, \u0449\u043e \u0437\u043d\u0430\u0439\u0448\u043b\u0438 \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0443 LumenLingo, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0442\u0435 \u043f\u0440\u043e \u043d\u0435\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e \u043d\u0430 <emailLink>security@lumenshore.com</emailLink>.",
                "p2": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043d\u0430\u0434\u0430\u0439\u0442\u0435 \u044f\u043a\u043e\u043c\u043e\u0433\u0430 \u0431\u0456\u043b\u044c\u0448\u0435 \u0434\u0435\u0442\u0430\u043b\u0435\u0439: \u043e\u043f\u0438\u0441 \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u0441\u0442\u0456, \u043a\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f, \u043f\u043e\u0442\u0435\u043d\u0446\u0456\u0439\u043d\u0438\u0439 \u0432\u043f\u043b\u0438\u0432, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u043a\u043e\u0434 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0456\u0457 \u0430\u0431\u043e \u0437\u043d\u0456\u043c\u043a\u0438 \u0435\u043a\u0440\u0430\u043d\u0443.",
                "p3": "\u041c\u0438 \u0442\u0430\u043a\u043e\u0436 \u043f\u0443\u0431\u043b\u0456\u043a\u0443\u0454\u043c\u043e \u043c\u0430\u0448\u0438\u043d\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u0439 \u0444\u0430\u0439\u043b <securityTxtLink>security.txt</securityTxtLink> \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e RFC 9116."
            },
            "scope": {
                "heading": "\u041e\u0431\u0441\u044f\u0433",
                "inScopeHeading": "\u0423 \u043c\u0435\u0436\u0430\u0445 \u043e\u0431\u0441\u044f\u0433\u0443",
                "inScope1": "\u0412\u0435\u0431-\u0441\u0430\u0439\u0442 LumenLingo (lumenlingo.com) \u0442\u0430 \u0432\u0441\u0456 \u043f\u0456\u0434\u0434\u043e\u043c\u0435\u043d\u0438",
                "inScope2": "\u041a\u0456\u043d\u0446\u0435\u0432\u0456 \u0442\u043e\u0447\u043a\u0438 API \u043f\u0456\u0434 lumenlingo.com/api/*",
                "inScope3": "\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a LumenLingo \u0434\u043b\u044f iOS",
                "inScope4": "\u041d\u0435\u0434\u043e\u043b\u0456\u043a\u0438 \u0430\u0432\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457 \u0442\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457",
                "inScope5": "\u0412\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u043c\u0456\u0436\u0441\u0430\u0439\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0438\u043d\u0433\u0443 (XSS), \u0456\u043d'\u0454\u043a\u0446\u0456\u0457 \u0442\u0430 CSRF",
                "inScope6": "\u041f\u0456\u0434\u0440\u043e\u0431\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0456 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (SSRF)",
                "inScope7": "\u0412\u0438\u0442\u0456\u043a \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445",
                "outOfScopeHeading": "\u041f\u043e\u0437\u0430 \u043e\u0431\u0441\u044f\u0433\u043e\u043c",
                "outOfScope1": "\u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0436\u0435\u043d\u0435\u0440\u0456\u044f (\u0444\u0456\u0448\u0438\u043d\u0433, \u0432\u0456\u0448\u0438\u043d\u0433) \u043f\u0440\u043e\u0442\u0438 \u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a\u0456\u0432 LumenShore",
                "outOfScope2": "\u0410\u0442\u0430\u043a\u0438 \u0442\u0438\u043f\u0443 \u0432\u0456\u0434\u043c\u043e\u0432\u0430 \u0432 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u0456 (DoS/DDoS)",
                "outOfScope3": "\u0424\u0456\u0437\u0438\u0447\u043d\u0456 \u0430\u0442\u0430\u043a\u0438 \u043d\u0430 \u043e\u0444\u0456\u0441\u0438 \u0430\u0431\u043e \u0456\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 LumenShore",
                "outOfScope4": "\u0412\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0432 \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u0445 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043e\u0440\u0456\u043d (Apple, Vercel, Sentry) \u2014 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0442\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u043c\u0443 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0443",
                "outOfScope5": "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0435 \u0441\u043a\u0430\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0435\u0437 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e \u0434\u043e\u0437\u0432\u043e\u043b\u0443",
                "outOfScope6": "\u0421\u043f\u0430\u043c, \u043c\u0430\u043d\u0456\u043f\u0443\u043b\u044f\u0446\u0456\u044f SEO \u0430\u0431\u043e \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443, \u0449\u043e \u043d\u0435 \u0432\u043f\u043b\u0438\u0432\u0430\u0454 \u043d\u0430 \u0431\u0435\u0437\u043f\u0435\u043a\u0443"
            },
            "response": {
                "heading": "\u041d\u0430\u0448\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c",
                "p1": "\u041c\u0438 \u0437\u043e\u0431\u043e\u0432'\u044f\u0437\u0443\u0454\u043c\u043e\u0441\u044f \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u0441\u0442\u0440\u043e\u043a\u0456\u0432 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456:",
                "item1": "<b>\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f</b> \u2014 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 48 \u0433\u043e\u0434\u0438\u043d \u043f\u0456\u0441\u043b\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u0437\u0432\u0456\u0442\u0443",
                "item2": "<b>\u041f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0430 \u043e\u0446\u0456\u043d\u043a\u0430</b> \u2014 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 5 \u0440\u043e\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u0456\u0432",
                "item3": "<b>\u0426\u0456\u043b\u044c \u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f</b> \u2014 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 30 \u0434\u043d\u0456\u0432 \u0434\u043b\u044f \u043a\u0440\u0438\u0442\u0438\u0447\u043d\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c, 90 \u0434\u043d\u0456\u0432 \u0434\u043b\u044f \u043d\u0435\u043a\u0440\u0438\u0442\u0438\u0447\u043d\u0438\u0445",
                "item4": "<b>\u0421\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f</b> \u2014 \u043c\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u043c\u043e \u0432\u0430\u0441, \u043a\u043e\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0431\u0443\u0434\u0435 \u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043e",
                "p2": "\u041c\u0438 \u0442\u0440\u0438\u043c\u0430\u0442\u0438\u043c\u0435\u043c\u043e \u0432\u0430\u0441 \u0443 \u043a\u0443\u0440\u0441\u0456 \u043d\u0430\u0448\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0443 \u0442\u0430 \u043c\u043e\u0436\u0435\u043c\u043e \u043f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u0438 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u0434\u043b\u044f \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0438 \u0443 \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u0430\u0431\u043e \u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u0456 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438."
            },
            "safeHarbour": {
                "heading": "\u0411\u0435\u0437\u043f\u0435\u0447\u043d\u0430 \u0433\u0430\u0432\u0430\u043d\u044c",
                "p1": "\u041c\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0441\u043b\u0456\u0434\u0443\u0432\u0430\u0442\u0438\u043c\u0435\u043c\u043e \u0434\u043e\u0441\u043b\u0456\u0434\u043d\u0438\u043a\u0456\u0432 \u0431\u0435\u0437\u043f\u0435\u043a\u0438, \u044f\u043a\u0456:",
                "item1": "\u0414\u0456\u044e\u0442\u044c \u0434\u043e\u0431\u0440\u043e\u0441\u043e\u0432\u0456\u0441\u043d\u043e \u0442\u0430 \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u0446\u0456\u0454\u0457 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0440\u043e\u0437\u043a\u0440\u0438\u0442\u0442\u044f",
                "item2": "\u0423\u043d\u0438\u043a\u0430\u044e\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0434\u043e \u0434\u0430\u043d\u0438\u0445 \u0456\u043d\u0448\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0430\u0431\u043e \u0457\u0445 \u0437\u043c\u0456\u043d\u0438",
                "item3": "\u041d\u0435 \u043f\u043e\u0433\u0456\u0440\u0448\u0443\u044e\u0442\u044c \u0440\u043e\u0431\u043e\u0442\u0443 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 (\u0431\u0435\u0437 DoS, \u0431\u0435\u0437 \u0440\u0443\u0439\u043d\u0456\u0432\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f)",
                "item4": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u044f\u044e\u0442\u044c \u043f\u0440\u043e \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0432\u0447\u0430\u0441\u043d\u043e \u0442\u0430 \u043d\u0435 \u0440\u043e\u0437\u043a\u0440\u0438\u0432\u0430\u044e\u0442\u044c \u0457\u0445 \u043f\u0443\u0431\u043b\u0456\u0447\u043d\u043e, \u043f\u043e\u043a\u0438 \u043c\u0438 \u043d\u0435 \u043c\u0430\u0442\u0438\u043c\u0435\u043c\u043e \u0440\u043e\u0437\u0443\u043c\u043d\u043e\u0457 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0457\u0445 \u0443\u0441\u0443\u043d\u0443\u0442\u0438",
                "p2": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u0435\u0441\u044f \u0446\u0438\u0445 \u043f\u0440\u0430\u0432\u0438\u043b, \u043c\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u043c\u043e \u0432\u0430\u0448\u0435 \u0434\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u0438\u043c \u0456 \u043d\u0435 \u0432\u0436\u0438\u0432\u0430\u0442\u0438\u043c\u0435\u043c\u043e \u0446\u0438\u0432\u0456\u043b\u044c\u043d\u0438\u0445 \u0447\u0438 \u043a\u0440\u0438\u043c\u0456\u043d\u0430\u043b\u044c\u043d\u0438\u0445 \u0437\u0430\u0445\u043e\u0434\u0456\u0432 \u0449\u043e\u0434\u043e \u0432\u0430\u0448\u0438\u0445 \u0432\u0438\u044f\u0432\u043b\u0435\u043d\u044c."
            },
            "contact": {
                "heading": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",
                "p1": "\u0414\u043b\u044f \u0437\u0432\u0456\u0442\u0456\u0432 \u043f\u0440\u043e \u0431\u0435\u0437\u043f\u0435\u043a\u0443: <emailLink>security@lumenshore.com</emailLink>",
                "p2": "\u0414\u043b\u044f \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0457 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0438: <supportLink>support@lumenshore.com</supportLink>",
                "p3": "\u041f\u0435\u0440\u0435\u0432\u0430\u0436\u043d\u0430 \u043c\u043e\u0432\u0430: \u0430\u043d\u0433\u043b\u0456\u0439\u0441\u044c\u043a\u0430"
            }
        }
    }
}

for locale, data in translations.items():
    filepath = os.path.join(BASE, f"{locale}.json")
    with open(filepath, "r", encoding="utf-8") as f:
        content = json.load(f)

    content["Security"] = data["Security"]

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"  Added Security namespace to {locale}.json")

print("\nDone — Security translations added to all 10 locales.")

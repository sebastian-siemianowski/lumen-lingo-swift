#!/usr/bin/env python3
"""
Add Accessibility namespace translations to all non-English locales.
Uses json.loads() to avoid Python string literal issues with unicode quotes.
"""
import json
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)),
                    "lumen-lingo-frontend", "messages")

# Read English as base reference
en_path = os.path.join(BASE, "en.json")
with open(en_path) as f:
    en_data = json.load(f)
    en_acc = en_data["Accessibility"]

# German translation - loaded from JSON string to avoid unicode quote issues in Python
de_json = r'''
{
    "meta": {
        "title": "Erkl\u00e4rung zur Barrierefreiheit \u2014 LumenLingo",
        "description": "LumenLingo-Erkl\u00e4rung zur Barrierefreiheit gem\u00e4\u00df dem European Accessibility Act (EAA) und WCAG 2.1 AA. Konformit\u00e4tsstatus, EN 301 549, bekannte Einschr\u00e4nkungen, Behebungszeitpl\u00e4ne und Meldung von Problemen.",
        "ogTitle": "Erkl\u00e4rung zur Barrierefreiheit \u2014 LumenLingo",
        "ogDescription": "Unser Engagement, Sprachenlernen f\u00fcr alle zug\u00e4nglich zu machen, mit EAA-Konformit\u00e4tsdetails und Behebungszeitpl\u00e4nen."
    },
    "breadcrumb": "Erkl\u00e4rung zur Barrierefreiheit",
    "hero": {
        "heading": "Erkl\u00e4rung zur Barrierefreiheit",
        "subtitle": "Sprachenlernen sollte f\u00fcr jeden zug\u00e4nglich sein. Wir setzen uns daf\u00fcr ein, LumenLingo f\u00fcr alle Nutzer zug\u00e4nglich zu machen, unabh\u00e4ngig von ihren F\u00e4higkeiten.",
        "lastUpdated": "Zuletzt aktualisiert: 24. M\u00e4rz 2026"
    },
    "commitment": {
        "heading": "Unser Engagement",
        "p1": "LumenShore Ltd verpflichtet sich, die digitale Barrierefreiheit f\u00fcr Menschen mit Behinderungen zu gew\u00e4hrleisten. Wir verbessern kontinuierlich die Benutzererfahrung f\u00fcr alle und wenden die relevanten Barrierefreiheitsstandards sowohl auf unsere Website als auch auf die LumenLingo-iOS-Anwendung an."
    },
    "eaaScope": {
        "heading": "Geltungsbereich des European Accessibility Act (EAA)",
        "p1": "Der <eaaLink>European Accessibility Act (Richtlinie 2019/882)</eaaLink> trat am 28. Juni 2025 in Kraft und verlangt von digitalen Diensten, die EU-Verbrauchern angeboten werden, Barrierefreiheitsstandards zu erf\u00fcllen.",
        "p2": "LumenLingo verkauft digitale Sprachlern-Abonnements an Verbraucher in EU-Mitgliedstaaten. Als E-Commerce-Dienst mit zugeh\u00f6riger Website und mobiler Anwendung f\u00e4llt LumenLingo in den Geltungsbereich des EAA. Die Einhaltung erfordert die Erf\u00fcllung des <enLink>EN 301 549</enLink> harmonisierten europ\u00e4ischen Standards, der auf WCAG 2.1 Level AA f\u00fcr Webinhalte verweist und zus\u00e4tzliche Anforderungen f\u00fcr mobile Anwendungen stellt."
    },
    "usAccessibility": {
        "heading": "US-Barrierefreiheit (ADA & Section 508)",
        "p1": "US-Gerichte interpretieren zunehmend <adaLink>Titel III des Americans with Disabilities Act (ADA)</adaLink> als auf Websites und mobile Anwendungen anwendbar. Obwohl kein formaler Barrierefreiheitsstandard f\u00fcr das Web durch den ADA vorgeschrieben ist, ist WCAG 2.1 Level AA der De-facto-Industriestandard, auf den das Justizministerium verweist.",
        "p2": "LumenLingo zielt auf WCAG 2.1 Level AA f\u00fcr sowohl unsere Website als auch unsere iOS-App ab und erf\u00fcllt damit die ADA-Anforderung f\u00fcr gleichberechtigten Zugang zu digitalen Diensten. Unser Konformit\u00e4tsstatus, bekannte Einschr\u00e4nkungen und Behebungszeitpl\u00e4ne sind auf dieser Seite und in unserem <vpatLink>Voluntary Product Accessibility Template (VPAT)</vpatLink> dokumentiert.",
        "p3": "<b>Section 508</b> gilt f\u00fcr US-Bundesbeh\u00f6rden und deren Auftragnehmer. LumenShore Ltd hat derzeit keine Vertr\u00e4ge mit US-Bundesbeh\u00f6rden, daher ist Section 508 nicht direkt anwendbar. Unser WCAG 2.1 AA-Konformit\u00e4tsziel erf\u00fcllt jedoch den gleichwertigen technischen Standard von Section 508 (der auf WCAG 2.0 Level AA verweist)."
    },
    "conformance": {
        "heading": "Konformit\u00e4tsstatus",
        "p1": "Die <wcagLink>Richtlinien f\u00fcr barrierefreie Webinhalte (WCAG)</wcagLink> definieren Anforderungen f\u00fcr Designer und Entwickler zur Verbesserung der Barrierefreiheit f\u00fcr Menschen mit Behinderungen. Sie definiert drei Konformit\u00e4tsstufen: Level A, Level AA und Level AAA.",
        "p2": "<b>lumenlingo.com</b> ist teilweise konform mit WCAG 2.1 Level AA und EN 301 549 v3.2.1. \u201eTeilweise konform\u201c bedeutet, dass einige Teile des Inhalts nicht vollst\u00e4ndig dem Barrierefreiheitsstandard entsprechen. Bekannte Nichtkonformit\u00e4ten sind nachstehend mit Behebungszeitpl\u00e4nen aufgef\u00fchrt. Wir arbeiten aktiv an der vollst\u00e4ndigen Konformit\u00e4t.",
        "p3": "<b>LumenLingo iOS-App</b> ist teilweise konform mit den EN 301 549-Anforderungen f\u00fcr Nicht-Web-Software (Klausel 11). Die App zielt auf WCAG 2.1 Level AA ab, wo anwendbar, und implementiert Plattform-Barrierefreiheits-APIs (VoiceOver, Bewegung reduzieren) f\u00fcr wichtige Interaktionen."
    },
    "measures": {
        "heading": "Unsere Ma\u00dfnahmen",
        "intro": "LumenShore ergreift die folgenden Ma\u00dfnahmen, um die Barrierefreiheit von lumenlingo.com zu gew\u00e4hrleisten:",
        "li1": "Einbeziehung der Barrierefreiheit in unseren Design- und Entwicklungsprozess",
        "li2": "Verwendung semantischer HTML-Elemente und ARIA-Landmarks f\u00fcr die Seitenstruktur",
        "li3": "Aufrechterhaltung von Farbkontrastverh\u00e4ltnissen, die die WCAG 2.1 AA-Standards erf\u00fcllen oder \u00fcbertreffen (4,5:1 f\u00fcr normalen Text, 3:1 f\u00fcr gro\u00dfen Text)",
        "li4": "Bereitstellung sichtbarer Fokusindikatoren f\u00fcr alle interaktiven Elemente",
        "li5": "Sicherstellung, dass alle Inhalte nur per Tastatur navigierbar sind",
        "li6": "Ber\u00fccksichtigung der Systemeinstellung <code>prefers-reduced-motion</code> \u2014 alle Animationen werden deaktiviert, wenn diese Einstellung gew\u00e4hlt ist",
        "li7": "Bereitstellung aussagekr\u00e4ftiger Alternativtexte f\u00fcr Bilder und dekorative Elemente",
        "li8": "Einbindung eines Links zum \u00dcberspringen zum Inhalt f\u00fcr Tastaturnutzer",
        "li9": "Tests mit Screenreadern einschlie\u00dflich VoiceOver auf macOS und iOS"
    },
    "technologies": {
        "heading": "Technologien",
        "intro": "Die Barrierefreiheit von lumenlingo.com basiert auf den folgenden Technologien:",
        "li1": "HTML",
        "li2": "WAI-ARIA",
        "li3": "CSS",
        "li4": "JavaScript",
        "outro": "Diese Technologien werden f\u00fcr die Konformit\u00e4t mit den verwendeten Barrierefreiheitsstandards vorausgesetzt."
    },
    "assistiveTech": {
        "heading": "Kompatibilit\u00e4t mit assistiven Technologien",
        "intro": "lumenlingo.com ist f\u00fcr die Kompatibilit\u00e4t mit den folgenden assistiven Technologien konzipiert:",
        "li1": "VoiceOver auf macOS und iOS",
        "li2": "Reine Tastaturnavigation in allen g\u00e4ngigen Browsern (Safari, Chrome, Firefox, Edge)",
        "li3": "Browser-Zoom bis 200% ohne Inhaltsverlust",
        "li4": "Hoher Kontrast und invertierte Farbmodi"
    },
    "knownLimitations": {
        "heading": "Bekannte Einschr\u00e4nkungen & Behebung",
        "intro": "Trotz unserer besten Bem\u00fchungen gibt es einige Bereiche mit Einschr\u00e4nkungen, an deren Beseitigung wir aktiv arbeiten. Gem\u00e4\u00df dem EAA listen wir bekannte Nichtkonformit\u00e4ten nachstehend mit geplanten Behebungszeitpl\u00e4nen auf.",
        "websiteHeading": "Website (lumenlingo.com)",
        "websiteLi1": "<b>Screenshot-Karussell:</b> Die Wisch-Interaktion erfordert Touch- oder Mauseingabe. Tastaturnavigation \u00fcber Pfeiltasten wird als Alternative bereitgestellt.",
        "websiteLi1Status": "Status: Alternative bereitgestellt. Keine weiteren Ma\u00dfnahmen erforderlich.",
        "websiteLi2": "<b>Glasmorphismus-Effekte:</b> Die visuellen Hintergrundunsch\u00e4rfe-Effekte werden m\u00f6glicherweise nicht in allen Browsern dargestellt. Der Inhalt bleibt unabh\u00e4ngig davon vollst\u00e4ndig lesbar.",
        "websiteLi2Status": "Status: Graceful Degradation. Keine weiteren Ma\u00dfnahmen erforderlich.",
        "iosHeading": "iOS-Anwendung",
        "iosLi1": "<b>VoiceOver-Labels (WCAG 4.1.2 \u2014 Name, Rolle, Wert):</b> Wichtige interaktive Elemente (Kategorien, Lernkarten, Mitgliedschaftsabzeichen, PDF-Export-Symbolleiste, zusammenklappbare Abschnitte) enthalten VoiceOver-Labels und Hinweise. Etwa 15\u00a0% der Ansichten haben explizite Barrierefreiheits-Labels; der Rest nutzt die integrierte Barrierefreiheit von SwiftUI f\u00fcr Standardsteuerelemente (Schaltfl\u00e4chen, Schalter, Text). Benutzerdefinierte dekorative Ansichten (Glaskarten, Parallax-Effekte) verf\u00fcgen nicht \u00fcber explizite Beschreibungen.",
        "iosLi1Target": "Ziel: Q3 2026 \u2014 Explizite VoiceOver-Labels f\u00fcr alle benutzerdefinierten Ansichten und Spielelemente hinzuf\u00fcgen.",
        "iosLi2": "<b>Dynamic Type (WCAG 1.4.4 \u2014 Textgr\u00f6\u00dfe \u00e4ndern):</b> Die iOS-App unterst\u00fctzt Dynamic Type noch nicht vollst\u00e4ndig. Etwa 87\u00a0% des Textes verwenden feste Gr\u00f6\u00dfen, die f\u00fcr das Glasmorphismus-Design optimiert sind. Nutzer, die auf gr\u00f6\u00dfere Textgr\u00f6\u00dfen angewiesen sind, sehen m\u00f6glicherweise nicht alle Texte skaliert. Eine Migration zu skalierbaren Textstilen ist geplant.",
        "iosLi2Target": "Ziel: Q4 2026 \u2014 Migration zu @ScaledMetric und semantischen Schriftstilen in allen Ansichten.",
        "iosLi3": "<b>Bewegung reduzieren (WCAG 2.3.3 \u2014 Animation durch Interaktionen):</b> Alle animationsintensiven Hauptansichten (Kartenumdrehen, Parallax-Effekte, Partikelanimationen, Aus-/Einklappabschnitte, PDF-Export-Animationen) respektieren die Systemeinstellung \u201eBewegung reduzieren\u201c. Hintergrund-Nebula-Renderer animieren weiterhin als rein dekorativer Inhalt.",
        "iosLi3Status": "Status: Konform f\u00fcr interaktive Animationen. Dekorative Animationen gem\u00e4\u00df WCAG-Ausnahme ausgenommen.",
        "iosLi4": "<b>Zielgr\u00f6\u00dfe (WCAG 2.5.8 \u2014 Mindest-Zielgr\u00f6\u00dfe):</b> Die meisten interaktiven Ziele erf\u00fcllen das Minimum von 44\u00d744\u00a0pt. Einige kleinere Symbolschaltfl\u00e4chen in sekund\u00e4ren Ansichten k\u00f6nnen diesen Schwellenwert unterschreiten.",
        "iosLi4Target": "Ziel: Q3 2026 \u2014 Alle Ber\u00fchrungsziele pr\u00fcfen und Mindestma\u00df von 44\u00a0pt sicherstellen.",
        "outro": "Wir arbeiten aktiv daran, Barrierefreiheitsl\u00fccken zu identifizieren und zu beheben. Unsere Roadmap umfasst viertelj\u00e4hrliche Barrierefreiheitspr\u00fcfungen (siehe unten)."
    },
    "alternatives": {
        "heading": "Alternative Zugangsm\u00f6glichkeiten",
        "intro": "Wenn Sie Schwierigkeiten bei der Nutzung eines Teils von LumenLingo haben, stehen die folgenden Alternativen zur Verf\u00fcgung:",
        "li1": "<b>E-Mail-Support:</b> Kontaktieren Sie uns unter <emailLink>accessibility@lumenshore.com</emailLink> und wir stellen Ihnen den ben\u00f6tigten Inhalt in einem barrierefreien Format bereit (Klartext, Audiobeschreibung oder alternatives Layout).",
        "li2": "<b>Tastaturnavigation:</b> Alle Website-Inhalte und -Interaktionen k\u00f6nnen nur per Tastatur aufgerufen werden (Tab, Umschalt+Tab, Enter, Escape, Pfeiltasten).",
        "li3": "<b>Screenreader:</b> Die Website wird mit VoiceOver getestet. Wenn Sie auf Probleme mit einer assistiven Technologie sto\u00dfen, lassen Sie es uns bitte wissen.",
        "li4": "<b>Browser-Anpassungen:</b> Die Website unterst\u00fctzt Zoom bis 200%, Hochkontrastmodus und invertierte Farben."
    },
    "auditSchedule": {
        "heading": "Zeitplan f\u00fcr Barrierefreiheitspr\u00fcfungen",
        "intro": "Wir f\u00fchren regelm\u00e4\u00dfig Barrierefreiheitspr\u00fcfungen durch, um die Konformit\u00e4t aufrechtzuerhalten und zu verbessern:",
        "li1": "<b>Q1 (Januar\u2013M\u00e4rz):</b> Vollst\u00e4ndiges WCAG 2.1 AA-Audit der Website (automatisierte und manuelle Tests)",
        "li2": "<b>Q2 (April\u2013Juni):</b> VoiceOver- und Dynamic-Type-Audit der iOS-App",
        "li3": "<b>Q3 (Juli\u2013September):</b> Plattform\u00fcbergreifende Screenreader-Tests",
        "li4": "<b>Q4 (Oktober\u2013Dezember):</b> Umfassende Jahres\u00fcberpr\u00fcfung und Behebungsplanung",
        "outro": "Ergebnisse jedes Audits werden in einer aktualisierten Version dieser Erkl\u00e4rung ver\u00f6ffentlicht."
    },
    "feedback": {
        "heading": "Feedback",
        "intro": "Wir freuen uns \u00fcber Ihr Feedback zur Barrierefreiheit von lumenlingo.com. Wenn Sie auf Barrierefreiheitsbarrieren sto\u00dfen oder Verbesserungsvorschl\u00e4ge haben, kontaktieren Sie uns bitte:",
        "li1Email": "<b>E-Mail:</b> <emailLink>accessibility@lumenshore.com</emailLink>",
        "li2Contact": "<b>Allgemeiner Kontakt:</b> <contactLink>Kontaktseite</contactLink>",
        "li3Vpat": "<b>VPAT:</b> <vpatLink>Unser Voluntary Product Accessibility Template anzeigen</vpatLink>",
        "response": "Wir sind bestrebt, auf Barrierefreiheits-Feedback innerhalb von 5 Werktagen zu antworten. Wenn Sie eine Barrierefreiheitsbeschwerde einreichen, best\u00e4tigen wir den Eingang innerhalb von 2 Werktagen und geben eine substanzielle Antwort \u2014 einschlie\u00dflich eines Behebungsplans f\u00fcr jede best\u00e4tigte Barriere \u2014 innerhalb von 15 Werktagen."
    },
    "disproportionateBurden": {
        "heading": "Bewertung der unverh\u00e4ltnism\u00e4\u00dfigen Belastung",
        "p1": "Artikel 14 des European Accessibility Act erlaubt Kleinstunternehmen (weniger als 10 Mitarbeiter und Jahresumsatz unter 2 Millionen Euro), eine Ausnahme geltend zu machen, wenn die Einhaltung eine \u201eunverh\u00e4ltnism\u00e4\u00dfige Belastung\u201c darstellen w\u00fcrde.",
        "p2": "LumenShore Limited (Firmennummer 09607326, England & Wales) qualifiziert sich derzeit als Kleinstunternehmen. Wir berufen uns jedoch nicht auf diese Ausnahme als pauschale Verteidigung. Stattdessen ergreifen wir angemessene Ma\u00dfnahmen zur Einhaltung von EN 301 549 und WCAG 2.1 AA und priorisieren die wirkungsvollsten Barrierefreiheitsverbesserungen im Rahmen unserer Ressourcen:",
        "li1": "Tastatur- und Screenreader-Zugang f\u00fcr alle Kernabl\u00e4ufe",
        "li2": "Farbkontrastkonformit\u00e4t \u00fcber helle und dunkle Designs hinweg",
        "li3": "Unterst\u00fctzung f\u00fcr reduzierte Bewegung bei allen interaktiven Animationen",
        "li4": "Viertelj\u00e4hrlicher Pr\u00fcfungsplan mit dokumentiertem Behebungsplan",
        "p3": "Wo die vollst\u00e4ndige Konformit\u00e4t noch nicht erreicht ist (z.\u00a0B. vollst\u00e4ndige Dynamic-Type-Unterst\u00fctzung in der iOS-App), dokumentieren wir die Nichtkonformit\u00e4t oben mit einem Behebungszeitplan. Diese Bewertung wird j\u00e4hrlich zusammen mit der Barrierefreiheitspr\u00fcfung \u00fcberpr\u00fcft."
    },
    "enforcement": {
        "heading": "Durchsetzungsverfahren",
        "ukHeading": "Vereinigtes K\u00f6nigreich",
        "ukP1": "Wenn Sie mit unserer Reaktion auf Ihre Barrierefreiheitsbedenken nicht zufrieden sind, k\u00f6nnen Sie sich an die <ehrcLink>Equality and Human Rights Commission (EHRC)</ehrcLink> wenden.",
        "euHeading": "Europ\u00e4ische Union",
        "euP1": "EU-B\u00fcrger k\u00f6nnen die nationale Durchsetzungsbeh\u00f6rde in ihrem EU-Mitgliedstaat kontaktieren, die f\u00fcr den European Accessibility Act zust\u00e4ndig ist. Eine Liste der benannten Markt\u00fcberwachungsbeh\u00f6rden wird von jedem Mitgliedstaat gem\u00e4\u00df Artikel 19 des EAA gef\u00fchrt.",
        "usHeading": "Vereinigte Staaten",
        "usP1": "US-B\u00fcrger mit Barrierefreiheitsbedenken k\u00f6nnen eine Beschwerde gem\u00e4\u00df Titel III des Americans with Disabilities Act einreichen. Wir empfehlen, uns zun\u00e4chst unter <emailLink>accessibility@lumenshore.com</emailLink> zu kontaktieren, damit wir das Problem direkt l\u00f6sen k\u00f6nnen. Unser <vpatLink>VPAT</vpatLink> dokumentiert unseren aktuellen Konformit\u00e4tsgrad."
    }
}
'''

de = json.loads(de_json)

# For AR and ES, write directly as JSON strings too since they may have special chars
ar_json = open(os.path.join(os.path.dirname(__file__), "accessibility_ar.json"), "r").read()
es_json = open(os.path.join(os.path.dirname(__file__), "accessibility_es.json"), "r").read()

ar = json.loads(ar_json)
es = json.loads(es_json)

for locale_code, trans in [("ar", ar), ("de", de), ("es", es)]:
    filepath = os.path.join(BASE, f"{locale_code}.json")
    with open(filepath, "r") as f:
        data = json.load(f)
    data["Accessibility"] = trans
    with open(filepath, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Added Accessibility to {locale_code}.json")

print(f"\nDone: 3 locales updated")

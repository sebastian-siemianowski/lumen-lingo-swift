#!/usr/bin/env python3
"""Add Legal/Privacy/Terms translations to German (de.json)."""
import json, pathlib

MSG = pathlib.Path(__file__).resolve().parent.parent / "messages" / "de.json"
data = json.loads(MSG.read_text("utf-8"))

data["Legal"] = {
    "tocLabel": "Auf dieser Seite",
    "downloadPdf": "Als PDF herunterladen",
    "lastUpdated": "Zuletzt aktualisiert: 22. März 2026"
}

data["Privacy"] = {
    "meta": {
        "title": "Datenschutzrichtlinie",
        "description": "Erfahren Sie, wie LumenShore Ihre Daten sorgfältig behandelt. Informieren Sie sich über unseren datenschutzorientierten Ansatz, die Verarbeitung auf dem Gerät, iCloud-Synchronisierung und Ihre Rechte nach DSGVO und CCPA.",
        "ogTitle": "Datenschutzrichtlinie — LumenLingo"
    },
    "breadcrumb": "Datenschutzrichtlinie",
    "hero": {
        "heading": "Datenschutzrichtlinie",
        "subtitle": "Ihr Datenschutz liegt uns sehr am Herzen. Hier erfahren Sie genau, wie wir mit Ihren Daten umgehen — in klarer Sprache, nicht in Juristendeutsch."
    },
    "overview": {
        "heading": "Überblick",
        "p1": "LumenShore Ltd (\u201eLumenShore\u201c, \u201ewir\u201c oder \u201euns\u201c) betreibt die mobile Anwendung LumenLingo (\u201edie App\u201c). Diese Datenschutzrichtlinie erläutert, wie wir Informationen erheben, verwenden, speichern und schützen, wenn Sie LumenLingo nutzen.",
        "p2": "Wir haben LumenLingo mit einer datenschutzorientierten Architektur entwickelt. Ihre Lerndaten werden auf Ihrem Gerät und in Ihrem persönlichen iCloud-Konto verarbeitet und gespeichert — nicht auf unseren Servern. Wir glauben, dass Ihre Daten Ihnen gehören und das auch so bleiben sollte."
    },
    "informationWeCollect": {
        "heading": "Informationen, die wir erheben",
        "intro": "LumenLingo erhebt nur die minimal erforderlichen Daten, um ein großartiges Lernerlebnis zu bieten:",
        "li1": "<b>Lernfortschrittsdaten</b> — Karteikarten-Beherrschungsgrade, Übungsergebnisse, Serien, XP und Sitzungsverlauf. Diese Daten werden lokal auf Ihrem Gerät gespeichert und über iCloud synchronisiert.",
        "li2": "<b>App-Einstellungen</b> — Ihre ausgewählten Sprachpaare, Klanglandschafts-Einstellungen, visuelle Hintergrundauswahl und Stufenauswahl. Auf dem Gerät gespeichert und über iCloud synchronisiert.",
        "li3": "<b>Abonnementstatus</b> — Ihre Mitgliedschaftsstufe, vollständig von Apple über den App Store verwaltet. Wir erhalten einen Abonnementstatus von Apple, verarbeiten jedoch keine Zahlungsinformationen.",
        "li4": "<b>Anonyme Analysen</b> — wir erheben möglicherweise aggregierte, nicht identifizierbare Nutzungsmetriken (z. B. welche Funktionen am beliebtesten sind), um die App zu verbessern. Personenbezogene Daten sind nicht enthalten."
    },
    "whatWeDontCollect": {
        "heading": "Was wir nicht erheben",
        "intro": "Wir möchten klarstellen, was wir <b>niemals</b> erheben:",
        "li1": "Keine E-Mail-Adressen, Namen oder persönlichen Identifikatoren (die App erfordert keine Kontoregistrierung)",
        "li2": "Keine Standortdaten oder GPS-Koordinaten",
        "li3": "Kein Zugriff auf Kontakte, Fotos oder andere Apps auf Ihrem Gerät",
        "li4": "Keine Zahlungs- oder Kreditkarteninformationen (Apple wickelt die gesamte Abrechnung ab)",
        "li5": "Keine Werbe-Identifikatoren oder Tracking-Pixel",
        "li6": "Keine Daten werden an Drittanbieter-Werbetreibende verkauft oder weitergegeben — niemals"
    },
    "howWeUse": {
        "heading": "Wie wir Ihre Informationen verwenden",
        "intro": "Die begrenzten Daten, die wir verarbeiten, werden ausschließlich verwendet, um:",
        "li1": "<b>Ihr Lernen zu personalisieren</b> — die Planung der verteilten Wiederholung, die Schwierigkeitsanpassung und die Fortschrittsverfolgung hängen von Ihrem Lernverlauf ab.",
        "li2": "<b>Ihren Fortschritt zu synchronisieren</b> — die iCloud-Synchronisierung stellt sicher, dass Ihre Daten Ihnen auf all Ihren Apple-Geräten folgen.",
        "li3": "<b>Ihr Abonnement zu verwalten</b> — wir überprüfen Ihre Mitgliedschaftsstufe, um die entsprechenden Funktionen freizuschalten.",
        "li4": "<b>Die App zu verbessern</b> — anonyme aggregierte Daten helfen uns zu verstehen, welche Funktionen wertvoll sind und worauf wir die Entwicklung konzentrieren sollten."
    },
    "dataStorage": {
        "heading": "Datenspeicherung und Sicherheit",
        "intro": "LumenLingo verwendet eine datenschutzorientierte, gerätebasierte Architektur:",
        "li1": "<b>Speicherung auf dem Gerät</b> — alle Lerndaten werden lokal mit Apples SwiftData-Framework gespeichert, geschützt durch die integrierte Verschlüsselung Ihres Geräts.",
        "li2": "<b>iCloud-Synchronisierung</b> — Daten werden zwischen Ihren Geräten über Ihr persönliches iCloud-Konto synchronisiert, von Apple Ende-zu-Ende verschlüsselt. Wir haben keinen Zugang zu Ihren iCloud-Daten.",
        "li3": "<b>Keine externen Server</b> — LumenLingo unterhält keine Server, die Ihre persönlichen Daten speichern. Es gibt keine Cloud-Datenbank, die gesichert (oder verletzt) werden müsste.",
        "li4": "<b>App-Store-Sicherheit</b> — die Abonnementverwaltung wird durch Apples sichere Infrastruktur übernommen."
    },
    "thirdParty": {
        "heading": "Drittanbieterdienste",
        "intro": "LumenLingo integriert eine begrenzte Anzahl von Drittanbieterdiensten:",
        "li1": "<b>Apple App Store</b> — für die App-Verteilung, Abonnementverwaltung und Zahlungsabwicklung. Unterliegt <applePrivacy>Apples Datenschutzrichtlinie</applePrivacy>.",
        "li2": "<b>Apple iCloud</b> — für die Datensynchronisierung zwischen Geräten. Unterliegt Apples iCloud-Bedingungen.",
        "li3": "<b>Datenschutzfreundliche Analysen</b> — wenn wir Analysetools verwenden, nutzen wir cookie-freie, DSGVO-konforme Tools, die keine personenbezogenen Informationen erheben.",
        "noAdNetworks": "Wir verwenden weder Google Analytics noch das Facebook SDK oder Werbenetzwerke."
    },
    "childrensPrivacy": {
        "heading": "Datenschutz für Kinder",
        "p1": "LumenLingo ist für Nutzer aller Altersgruppen konzipiert und erhebt nicht wissentlich personenbezogene Daten von Kindern unter 13 Jahren (oder dem geltenden Alter in Ihrer Gerichtsbarkeit). Da die App keine Kontoregistrierung erfordert und Daten lokal speichert, werden keine personenbezogenen Informationen von Nutzern, einschließlich Kindern, an uns übermittelt.",
        "p2": "Eltern und Erziehungsberechtigte können die App und ihre Daten jederzeit über die Standard-iOS-Geräteverwaltung verwalten oder löschen."
    },
    "dataRetention": {
        "heading": "Datenaufbewahrung und -löschung",
        "intro": "Da Ihre Daten auf Ihrem Gerät und in Ihrem iCloud-Konto gespeichert sind, haben Sie die volle Kontrolle darüber:",
        "li1": "<b>Fortschritt zurücksetzen</b> — verwenden Sie die Option Einstellungen → Fortschritt zurücksetzen in der App, um alle Lerndaten zu löschen.",
        "li2": "<b>App löschen</b> — die Deinstallation von LumenLingo entfernt alle lokal gespeicherten Daten.",
        "li3": "<b>iCloud-Daten</b> — Sie können den iCloud-Speicher über Einstellungen → Apple-ID → iCloud → Speicher verwalten auf Ihrem Gerät verwalten.",
        "li4": "<b>Abonnement</b> — kündigen Sie Ihr Abonnement über Einstellungen → Apple-ID → Abonnements. Nach der Kündigung werden keine Daten von uns aufbewahrt."
    },
    "yourRights": {
        "heading": "Ihre Rechte",
        "intro": "Je nach Ihrem Standort verfügen Sie möglicherweise über zusätzliche Rechte bezüglich Ihrer Daten:",
        "gdprHeading": "Unter der DSGVO (Europäischer Wirtschaftsraum und Vereinigtes Königreich)",
        "gdprLi1": "Recht auf Zugang zu Ihren Daten — Ihre Daten befinden sich bereits auf Ihrem Gerät und in iCloud.",
        "gdprLi2": "Recht auf Berichtigung — Sie können Ihre Einstellungen direkt in der App bearbeiten.",
        "gdprLi3": "Recht auf Löschung — setzen Sie den Fortschritt zurück oder löschen Sie die App, um alle Daten zu entfernen.",
        "gdprLi4": "Recht auf Datenübertragbarkeit — Ihre Daten werden in Standardformaten in iCloud gespeichert.",
        "gdprLi5": "Widerspruchsrecht — kontaktieren Sie uns, um sich von anonymen Analysen abzumelden.",
        "ccpaHeading": "Unter dem CCPA (Kalifornien)",
        "ccpaLi1": "Recht zu erfahren, welche Daten erhoben werden — oben detailliert beschrieben; wir erheben minimale Daten.",
        "ccpaLi2": "Recht auf Löschung — setzen Sie den Fortschritt zurück oder löschen Sie die App.",
        "ccpaLi3": "Recht auf Ablehnung — wir verkaufen keine personenbezogenen Informationen.",
        "ccpaLi4": "Diskriminierungsfreiheit — Sie werden nicht benachteiligt, weil Sie Ihre Rechte ausüben."
    },
    "policyUpdates": {
        "heading": "Aktualisierungen der Richtlinie",
        "p1": "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, typischerweise um Änderungen der App-Funktionen oder gesetzliche Anforderungen widerzuspiegeln. Bei wesentlichen Änderungen aktualisieren wir das Datum \u201eZuletzt aktualisiert\u201c oben auf dieser Seite.",
        "p2": "Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen. Die fortgesetzte Nutzung von LumenLingo nach Änderungen stellt die Akzeptanz der aktualisierten Richtlinie dar."
    },
    "contactUs": {
        "heading": "Kontakt",
        "intro": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie, Ihren Daten haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns bitte:",
        "email": "<b>E-Mail</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Unternehmen</b>: LumenShore Ltd, Vereinigtes Königreich",
        "responseTime": "Wir antworten in der Regel innerhalb von 48 Stunden."
    }
}

data["Terms"] = {
    "meta": {
        "title": "Nutzungsbedingungen",
        "description": "Nutzungsbedingungen für LumenLingo. Verstehen Sie Ihre Rechte und Pflichten bei der Nutzung unserer Sprachlern-App — in verständlicher Sprache verfasst.",
        "ogTitle": "Nutzungsbedingungen — LumenLingo"
    },
    "breadcrumb": "Nutzungsbedingungen",
    "hero": {
        "heading": "Nutzungsbedingungen",
        "subtitle": "Die Spielregeln für die Nutzung von LumenLingo — einfach geschrieben, denn juristische Dokumente sollten kein Wörterbuch benötigen."
    },
    "introduction": {
        "heading": "Einleitung",
        "p1": "Willkommen bei LumenLingo. Diese Nutzungsbedingungen (\u201eBedingungen\u201c) regeln Ihre Nutzung der mobilen Anwendung LumenLingo (\u201edie App\u201c), die von LumenShore Ltd (\u201eLumenShore\u201c, \u201ewir\u201c oder \u201euns\u201c) betrieben wird.",
        "p2": "Durch das Herunterladen, Installieren oder Nutzen von LumenLingo stimmen Sie diesen Bedingungen zu. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, nutzen Sie die App bitte nicht."
    },
    "acceptance": {
        "heading": "Annahme der Bedingungen",
        "intro": "Durch den Zugriff auf oder die Nutzung von LumenLingo bestätigen Sie, dass:",
        "li1": "Sie mindestens 13 Jahre alt sind (oder das in Ihrer Gerichtsbarkeit erforderliche Mindestalter haben).",
        "li2": "Wenn Sie unter 18 Jahre alt sind, haben Sie die Zustimmung eines Elternteils oder Erziehungsberechtigten eingeholt.",
        "li3": "Sie die rechtliche Handlungsfähigkeit haben, einen bindenden Vertrag einzugehen.",
        "li4": "Sie diese Bedingungen und alle geltenden Gesetze einhalten werden."
    },
    "yourAccount": {
        "heading": "Ihr Konto",
        "intro": "LumenLingo erfordert keine herkömmliche Kontoregistrierung. Ihre Identität innerhalb der App ist mit Ihrer Apple-ID und Ihrem Gerät verknüpft. Sie sind verantwortlich für:",
        "li1": "Die Sicherheit Ihrer Apple-ID und den Zugang zu Ihrem Gerät.",
        "li2": "Alle Aktivitäten, die im Rahmen Ihrer Nutzung der App stattfinden.",
        "li3": "Die Aktualisierung des Betriebssystems Ihres Geräts für die beste Erfahrung und Sicherheit."
    },
    "subscriptions": {
        "heading": "Abonnements und Abrechnung",
        "intro": "LumenLingo bietet kostenlose und Premium-Mitgliedschaftsstufen an. Premium-Funktionen erfordern ein kostenpflichtiges Abonnement.",
        "li1": "<b>Abrechnung</b> — alle Abonnements werden von Apple über den App Store verarbeitet und verwaltet. Wir wickeln Zahlungen nicht direkt ab.",
        "li2": "<b>Kostenlose Stufe</b> — bietet Zugang zu den Kernlernfunktionen mit begrenzten Sprachpaaren und Übungsmodi.",
        "li3": "<b>Premium-Stufen</b> — schalten zusätzliche Sprachpaare, unbegrenzte Übungen, Klanglandschaften, Atem-Orbs und andere Premium-Funktionen frei, wie in der App beschrieben.",
        "li4": "<b>Automatische Verlängerung</b> — Abonnements verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor Ende des aktuellen Abrechnungszeitraums gekündigt werden.",
        "li5": "<b>Kündigung</b> — Sie können Ihr Abonnement jederzeit über Ihre Apple-ID-Einstellungen → Abonnements kündigen. Die Kündigung wird am Ende Ihres aktuellen Abrechnungszeitraums wirksam.",
        "li6": "<b>Erstattungen</b> — Erstattungsanfragen werden von Apple gemäß deren Erstattungsrichtlinien bearbeitet. Kontaktieren Sie den Apple-Support für Erstattungsanfragen.",
        "li7": "<b>Preisänderungen</b> — wir können die Abonnementpreise anpassen. Sie werden im Voraus benachrichtigt, und Änderungen gelten nur für Ihren nächsten Verlängerungszeitraum."
    },
    "acceptableUse": {
        "heading": "Akzeptable Nutzung",
        "intro": "Sie stimmen zu, LumenLingo nur für rechtmäßige Zwecke und gemäß diesen Bedingungen zu nutzen. Sie dürfen nicht:",
        "li1": "Teile der App zurückentwickeln, dekompilieren oder disassemblieren.",
        "li2": "Versuchen, auf nicht öffentliche Bereiche der App oder ihrer Systeme zuzugreifen, diese zu manipulieren oder zu nutzen.",
        "li3": "Die App kopieren, modifizieren, verbreiten oder abgeleitete Werke daraus erstellen.",
        "li4": "Die App in einer Weise nutzen, die ihre Funktionalität beschädigen, deaktivieren, überlasten oder beeinträchtigen könnte.",
        "li5": "Automatisierte Skripte, Bots oder andere Tools zur Interaktion mit der App verwenden.",
        "li6": "Versuchen, Abonnement- oder Stufenbeschränkungen zu umgehen."
    },
    "intellectualProperty": {
        "heading": "Geistiges Eigentum",
        "p1": "Alle Inhalte in LumenLingo — einschließlich, aber nicht beschränkt auf Karteikarten-Inhalte, Übersetzungen, Audio, Klanglandschaften, visuelle Designs, Shader-Effekte, Animationen, den Namen LumenLingo und die Marke LumenShore — sind geistiges Eigentum von LumenShore Ltd und sind durch Urheberrecht, Markenrecht und andere Gesetze zum Schutz geistigen Eigentums geschützt.",
        "p2": "Ihr Abonnement gewährt Ihnen eine beschränkte, nicht-exklusive, nicht übertragbare, widerrufliche Lizenz zur Nutzung der App für persönliche, nichtkommerzielle Sprachlernzwecke. Diese Lizenz beinhaltet nicht das Recht:",
        "li1": "App-Inhalte zu reproduzieren, zu verbreiten oder öffentlich darzustellen.",
        "li2": "Inhalte für kommerzielle Zwecke oder in Konkurrenzprodukten zu verwenden.",
        "li3": "Eigentumshinweise oder Kennzeichnungen zu entfernen oder zu verändern."
    },
    "userContent": {
        "heading": "Nutzerinhalte und Daten",
        "p1": "Ihre Lerndaten (Fortschritt, Einstellungen, Übungshistorie) werden auf Ihrem Gerät und in Ihrem persönlichen iCloud-Konto gespeichert. LumenShore beansprucht kein Eigentum an Ihren persönlichen Lerndaten.",
        "p2": "Weitere Informationen zum Umgang mit Daten finden Sie in unserer <privacyLink>Datenschutzrichtlinie</privacyLink>."
    },
    "disclaimers": {
        "heading": "Haftungsausschlüsse",
        "intro": "LumenLingo wird \u201eso wie es ist\u201c und \u201enach Verfügbarkeit\u201c bereitgestellt. Obwohl wir Genauigkeit und Qualität anstreben, geben wir keine ausdrücklichen oder stillschweigenden Garantien bezüglich:",
        "li1": "Der Richtigkeit oder Vollständigkeit jeglicher Sprachinhalte oder Übersetzungen.",
        "li2": "Des ununterbrochenen oder fehlerfreien Betriebs der App.",
        "li3": "Der Ergebnisse, die Sie durch die Nutzung der App erzielen können.",
        "li4": "Der Verfügbarkeit bestimmter Funktionen zu einem bestimmten Zeitpunkt.",
        "supplement": "LumenLingo ist ein ergänzendes Lernwerkzeug. Es ersetzt keinen professionellen Sprachunterricht, zertifizierte Übersetzungsdienste oder akademische Kurse."
    },
    "limitationOfLiability": {
        "heading": "Haftungsbeschränkung",
        "intro": "Im größtmöglichen gesetzlich zulässigen Umfang haftet LumenShore Ltd nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für jeden Verlust von Gewinnen, Daten oder Firmenwert, die entstehen aus:",
        "li1": "Ihrer Nutzung (oder Unmöglichkeit der Nutzung) der App.",
        "li2": "Fehlern, Auslassungen oder Ungenauigkeiten im Inhalt.",
        "li3": "Unbefugtem Zugriff auf Ihr Gerät oder Ihre Daten (nicht durch unsere Fahrlässigkeit verursacht).",
        "li4": "Jeder Unterbrechung oder Einstellung des Dienstes.",
        "cap": "Unsere Gesamthaftung für Ansprüche aus diesen Bedingungen oder Ihrer Nutzung von LumenLingo übersteigt nicht den Betrag, den Sie in den 12 Monaten vor dem Anspruch für die App bezahlt haben."
    },
    "termination": {
        "heading": "Kündigung",
        "p1": "Sie können die Nutzung von LumenLingo jederzeit durch Löschen der App beenden. Ihr Abonnement, falls aktiv, sollte separat über die Abonnementverwaltung von Apple gekündigt werden.",
        "p2": "Wir behalten uns das Recht vor, den Zugang zur App auszusetzen oder zu kündigen, wenn wir begründet annehmen, dass Sie gegen diese Bedingungen verstoßen haben. Im Falle einer Kündigung:",
        "li1": "Wird Ihre Lizenz zur Nutzung der App sofort widerrufen.",
        "li2": "Verbleiben Ihre lokalen Daten auf Ihrem Gerät, bis Sie sich entscheiden, sie zu löschen.",
        "li3": "Sollten aktive Abonnements über Apple gekündigt werden.",
        "li4": "Bleiben Bestimmungen, die ihrer Natur nach die Kündigung überdauern sollten, in Kraft."
    },
    "governingLaw": {
        "heading": "Anwendbares Recht",
        "p1": "Diese Bedingungen unterliegen den Gesetzen von England und Wales und werden entsprechend ausgelegt, ohne Berücksichtigung von Kollisionsnormen.",
        "p2": "Streitigkeiten aus diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte von England und Wales. Dies berührt jedoch nicht Ihre gesetzlichen Rechte als Verbraucher in Ihrem Wohnsitzland."
    },
    "changes": {
        "heading": "Änderungen dieser Bedingungen",
        "p1": "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Bei wesentlichen Änderungen aktualisieren wir das Datum \u201eZuletzt aktualisiert\u201c oben auf der Seite und können Sie über die App benachrichtigen.",
        "p2": "Die fortgesetzte Nutzung von LumenLingo nach Veröffentlichung der Änderungen stellt die Akzeptanz der überarbeiteten Bedingungen dar. Wenn Sie mit den Änderungen nicht einverstanden sind, stellen Sie die Nutzung der App ein und kündigen Sie aktive Abonnements."
    },
    "contactUs": {
        "heading": "Kontakt",
        "intro": "Wenn Sie Fragen zu diesen Bedingungen haben oder ein Anliegen melden möchten, kontaktieren Sie uns bitte:",
        "email": "<b>E-Mail</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Unternehmen</b>: LumenShore Ltd, Vereinigtes Königreich",
        "responseTime": "Wir antworten in der Regel innerhalb von 48 Stunden."
    }
}

MSG.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("DE: Legal/Privacy/Terms added successfully")

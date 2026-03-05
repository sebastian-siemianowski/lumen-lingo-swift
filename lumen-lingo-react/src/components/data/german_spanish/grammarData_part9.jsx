/**
 * GERMAN → SPANISH GRAMMAR - PART 9
 * 4 categories, 15 questions each
 */

import { Calendar, Compass, Sun, Phone } from "lucide-react";

export const part9Categories = {
  subjuntivo_imperfecto: {
    name: "Imperfecto de Subjuntivo",
    description: "Konjunktiv Vergangenheit - Wünsche und Bedingungen in Vergangenheit",
    icon: Calendar,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "subj_imp_1",
        question: "Si yo _____ más dinero, viajaría por todo el mundo.",
        translation: "Wenn ich mehr Geld hätte, würde ich um die ganze Welt reisen.",
        options: ["tuviera", "tengo", "tendría", "tenía"],
        correct: "tuviera",
        explanation: "In WENN-Sätzen (irreale Bedingung) nutzen wir Imperfecto de Subjuntivo: 'si tuviera' (wenn ich hätte). Mit Condicional im Hauptsatz. Diese hypothetische Weltreise hängt von mehr Geld ab - klassische Fantasie vieler Menschen."
      },
      {
        id: "subj_imp_2",
        question: "Me pidió que _____ temprano a la reunión importante sin falta.",
        translation: "Er bat mich, ohne Ausnahme früh zum wichtigen Treffen zu kommen.",
        options: ["llegara", "llego", "llegaría", "llegaba"],
        correct: "llegara",
        explanation: "Nach Verben in VERGANGENHEIT (pidió = bat) folgt Imperfecto de Subjuntivo: 'que llegara'. Zeitenfolge verlangt es. Diese Bitte um pünktliches Erscheinen wurde in Vergangenheit geäußert, aber Handlung war damals noch zukünftig."
      },
      {
        id: "subj_imp_3",
        question: "Dudaba que ellos _____ la verdad sobre lo ocurrido realmente.",
        translation: "Ich bezweifelte, dass sie die Wahrheit über das Geschehene wirklich sagten.",
        options: ["dijeran", "dicen", "dirían", "decían"],
        correct: "dijeran",
        explanation: "Nach 'dudar' in Vergangenheit: Imperfecto de Subjuntivo 'dijeran' (sagen würden). Zweifel verlangt Subjuntivo. Dieser vergangene Zweifel an Wahrhaftigkeit zeigt Skepsis über Aussagen in damaliger Situation."
      },
      {
        id: "subj_imp_4",
        question: "Ojalá _____ más tiempo libre para estar con mi familia querida.",
        translation: "Wenn ich doch nur mehr freie Zeit hätte, um bei meiner lieben Familie zu sein.",
        options: ["tuviera", "tengo", "tendría", "tenía"],
        correct: "tuviera",
        explanation: "Nach 'ojalá' für gegenwärtigen WUNSCH kann man Imperfecto de Subjuntivo nutzen: 'ojalá tuviera' (wenn ich doch hätte). Drückt Sehnsucht aus. Dieser Wunsch nach mehr Familienzeit zeigt Konflikt zwischen Arbeit und Privatleben."
      },
      {
        id: "subj_imp_5",
        question: "Ella quería que nosotros _____ más temprano de lo planeado antes.",
        translation: "Sie wollte, dass wir früher als vorher geplant kämen.",
        options: ["llegáramos", "llegamos", "llegaríamos", "llegábamos"],
        correct: "llegáramos",
        explanation: "Nach 'quería que' (wollte, dass) folgt Imperfecto de Subjuntivo: 'que llegáramos'. Zeitenfolge Vergangenheit-Vergangenheit. Dieser Wunsch nach früherer Ankunft zeigt Ungeduld oder Notwendigkeit, Zeitplan anzupassen."
      },
      {
        id: "subj_imp_6",
        question: "No creía que él _____ capaz de terminar tan rápido el proyecto.",
        translation: "Ich glaubte nicht, dass er fähig wäre, das Projekt so schnell zu beenden.",
        options: ["fuera", "es", "sería", "era"],
        correct: "fuera",
        explanation: "Nach negiertem 'creer' in Vergangenheit: Imperfecto de Subjuntivo 'fuera' (wäre). Unregelmäßige Form von 'ser'. Diese Unterschätzung seiner Fähigkeiten wurde vielleicht durch tatsächlich schnelle Fertigstellung widerlegt."
      },
      {
        id: "subj_imp_7",
        question: "Como si _____ millonario, gastó todo el dinero inmediatamente rápido.",
        translation: "Als ob er Millionär wäre, gab er sofort schnell alles Geld aus.",
        options: ["fuera", "es", "sería", "era"],
        correct: "fuera",
        explanation: "Nach 'como si' (als ob) steht IMMER Imperfecto de Subjuntivo: 'como si fuera'. Drückt irreale Vergleiche aus. Dieses verschwenderische Verhalten, als hätte er unendlich Geld, ist finanziell unklug."
      },
      {
        id: "subj_imp_8",
        question: "Te sugerí que _____ más atención en clase de matemáticas siempre.",
        translation: "Ich schlug dir vor, immer mehr Aufmerksamkeit im Mathe-Unterricht zu schenken.",
        options: ["prestaras", "prestas", "prestarías", "prestabas"],
        correct: "prestaras",
        explanation: "Nach 'sugerir' in Vergangenheit: Imperfecto de Subjuntivo 'prestaras' (du schenken würdest). Dieser gut gemeinte Rat zur Aufmerksamkeit zielt darauf ab, schulische Leistung zu verbessern."
      },
      {
        id: "subj_imp_9",
        question: "Esperaba que ellos _____ a tiempo a la boda importante nuestra.",
        translation: "Ich hoffte, dass sie pünktlich zu unserer wichtigen Hochzeit kämen.",
        options: ["llegaran", "llegan", "llegarían", "llegaban"],
        correct: "llegaran",
        explanation: "Nach 'esperar' in Vergangenheit: Imperfecto de Subjuntivo 'llegaran'. Diese Hoffnung auf Pünktlichkeit wichtiger Gäste zu Hochzeit zeigt Nervosität vor großem Ereignis."
      },
      {
        id: "subj_imp_10",
        question: "Si _____ tiempo suficiente, cocinaría una cena elaborada esta noche.",
        translation: "Wenn ich genug Zeit hätte, würde ich heute Abend ein aufwendiges Abendessen kochen.",
        options: ["tuviera", "tengo", "tendría", "tenía"],
        correct: "tuviera",
        explanation: "Irrealer Bedingungssatz: 'si tuviera' (wenn ich hätte) mit Condicional. Diese kulinarische Ambition scheitert an Zeitmangel, typisches Dilemma zwischen Wunsch und Realität."
      },
      {
        id: "subj_imp_11",
        question: "Me alegró que tú _____ bien en el examen final difícil.",
        translation: "Es freute mich, dass du in der schweren Abschlussprüfung gut abschnittest.",
        options: ["salieras", "sales", "saldrías", "salías"],
        correct: "salieras",
        explanation: "Nach Gefühlsausdruck in Vergangenheit: Imperfecto de Subjuntivo 'salieras'. Diese Freude über deinen Prüfungserfolg ist emotionale Reaktion auf gutes Ergebnis, das Stolz und Erleichterung bringt."
      },
      {
        id: "subj_imp_12",
        question: "Era necesario que nosotros _____ antes de las nueve exactamente.",
        translation: "Es war notwendig, dass wir genau vor neun Uhr begannen.",
        options: ["empezáramos", "empezamos", "empezaríamos", "empezábamos"],
        correct: "empezáramos",
        explanation: "Nach 'era necesario que': Imperfecto de Subjuntivo 'empezáramos'. Diese vergangene Notwendigkeit frühen Starts hatte wahrscheinlich wichtigen Grund wie Meeting oder Reise."
      },
      {
        id: "subj_imp_13",
        question: "Deseaba que _____ buen tiempo para nuestro picnic planeado al aire libre.",
        translation: "Ich wünschte, dass gutes Wetter für unser geplantes Picknick im Freien wäre.",
        options: ["hiciera", "hace", "haría", "hacía"],
        correct: "hiciera",
        explanation: "Nach 'desear' in Vergangenheit: Imperfecto de Subjuntivo 'hiciera buen tiempo'. Wetterunabhängiger Wunsch. Diese Hoffnung auf gutes Wetter für Outdoor-Aktivität ist universelle Picknick-Sorge."
      },
      {
        id: "subj_imp_14",
        question: "Actuaba como si no _____ nada del problema grave existente.",
        translation: "Er handelte, als ob er nichts von dem bestehenden schweren Problem wüsste.",
        options: ["supiera", "sabe", "sabría", "sabía"],
        correct: "supiera",
        explanation: "Nach 'como si': Imperfecto de Subjuntivo 'supiera' (wüsste). Diese Ignoranz-Schauspielerei trotz Kenntnis des Problems ist mögliche Vermeidungsstrategie oder Verleugnung."
      },
      {
        id: "subj_imp_15",
        question: "Si _____ hablar perfectamente español, buscaría trabajo en Madrid ciudad.",
        translation: "Wenn ich perfekt Spanisch sprechen könnte, würde ich Arbeit in Madrid Stadt suchen.",
        options: ["pudiera", "puedo", "podría", "podía"],
        correct: "pudiera",
        explanation: "Irreale Bedingung: 'si pudiera hablar' (wenn ich sprechen könnte). Unregelmäßiges Imperfecto de Subjuntivo. Dieser Karrieretraum in Madrid hängt von Sprachbeherrschung ab, realistische Voraussetzung für internationalen Arbeitsmarkt."
      }
    ]
  },

  expresiones_cantidad: {
    name: "Mengenausdrücke",
    description: "Mucho, poco, demasiado - Quantität richtig ausdrücken",
    icon: Compass,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    questions: [
      {
        id: "cant_1",
        question: "Tengo _____ trabajo esta semana - no puedo descansar nada.",
        translation: "Ich habe diese Woche viel Arbeit - ich kann überhaupt nicht ausruhen.",
        options: ["mucho", "muchos", "muy", "demasiado"],
        correct: "mucho",
        explanation: "Für VIEL mit unzählbarem Substantiv (trabajo): 'mucho trabajo'. Adjektiv passt sich an. Nicht 'muy' (sehr). Diese hohe Arbeitsbelastung lässt keine Zeit für Erholung, typisches Zeichen von stressiger Phase."
      },
      {
        id: "cant_2",
        question: "Ella tiene _____ amigos en la universidad de diferentes países.",
        translation: "Sie hat an der Universität viele Freunde aus verschiedenen Ländern.",
        options: ["muchos", "mucho", "muy", "demasiados"],
        correct: "muchos",
        explanation: "Für VIELE mit zählbarem Plural (amigos): 'muchos amigos'. Muss sich anpassen. Diese internationale Freundesgruppe an Uni zeigt soziale Offenheit und multikulturelle Verbindungen."
      },
      {
        id: "cant_3",
        question: "Hay _____ personas en la sala - está extremadamente llena ahora.",
        translation: "Es sind zu viele Personen im Raum - er ist jetzt extrem voll.",
        options: ["demasiadas", "demasiado", "muchas", "muy"],
        correct: "demasiadas",
        explanation: "Für ZU VIELE (negative Übermenge) mit Plural: 'demasiadas personas'. Mehr als angenehm oder sicher. Diese Überfüllung des Raums schafft unangenehme Enge und möglicherweise Sicherheitsproblem."
      },
      {
        id: "cant_4",
        question: "Tenemos _____ tiempo antes del tren - solo cinco minutos quedan.",
        translation: "Wir haben vor dem Zug wenig Zeit - es bleiben nur fünf Minuten.",
        options: ["poco", "pocos", "muy", "mucho"],
        correct: "poco",
        explanation: "Für WENIG mit unzählbar (tiempo): 'poco tiempo'. Gegenteil von 'mucho'. Diese Zeitknappheit vor Zugabfahrt erzeugt Stress und erfordert schnelles Handeln, um Zug nicht zu verpassen."
      },
      {
        id: "cant_5",
        question: "Este café está _____ caliente - no puedo beberlo todavía ahora.",
        translation: "Dieser Kaffee ist zu heiß - ich kann ihn jetzt noch nicht trinken.",
        options: ["demasiado", "muy", "mucho", "poco"],
        correct: "demasiado",
        explanation: "Für ZU (Adverb vor Adjektiv): 'demasiado caliente' (zu heiß). Mehr als gewünscht. Dieser überhitzte Kaffee erfordert Wartezeit zum Abkühlen, bevor sicheres Trinken möglich ist."
      },
      {
        id: "cant_6",
        question: "Ella es _____ inteligente - siempre saca las mejores notas posibles.",
        translation: "Sie ist sehr intelligent - sie bekommt immer die bestmöglichen Noten.",
        options: ["muy", "mucho", "demasiado", "muchos"],
        correct: "muy",
        explanation: "Für SEHR vor ADJEKTIV nutzen wir 'muy': 'muy inteligente' (sehr intelligent). Nicht 'mucho' vor Adjektiven. Diese außergewöhnliche Intelligenz reflektiert sich in konstant exzellenten akademischen Leistungen."
      },
      {
        id: "cant_7",
        question: "Comí _____ en la fiesta - ahora me siento mal del estómago.",
        translation: "Ich aß zu viel auf der Party - jetzt fühlt sich mein Magen schlecht an.",
        options: ["demasiado", "muy", "mucho", "muchos"],
        correct: "demasiado",
        explanation: "Für ZU VIEL als Adverb (nach Verb): 'comí demasiado' (aß zu viel). Diese übermäßige Nahrungsaufnahme bei Party führt zu unangenehmen Verdauungsproblemen als Folge von Maßlosigkeit."
      },
      {
        id: "cant_8",
        question: "Quedan _____ días para Navidad - solo tres más hasta la celebración.",
        translation: "Es bleiben wenige Tage bis Weihnachten - nur noch drei bis zur Feier.",
        options: ["pocos", "poco", "muy", "muchos"],
        correct: "pocos",
        explanation: "Für WENIGE mit zählbar Plural: 'pocos días' (wenige Tage). Diese Knappheit an verbleibenden Tagen bis Weihnachten erzeugt Aufregung und vielleicht Stress der letzten Vorbereitungen."
      },
      {
        id: "cant_9",
        question: "Necesito _____ azúcar en mi café - solo un poco está bien.",
        translation: "Ich brauche wenig Zucker in meinem Kaffee - nur ein bisschen ist gut.",
        options: ["poco", "pocos", "muy", "mucho"],
        correct: "poco",
        explanation: "Für WENIG mit unzählbar: 'poco azúcar' (wenig Zucker). Diese Präferenz für minimal gesüßten Kaffee zeigt Geschmack für weniger süß oder gesundheitsbewusstes Trinken."
      },
      {
        id: "cant_10",
        question: "Hay _____ estudiantes en esta clase - es grupo pequeño e íntimo.",
        translation: "Es sind wenige Schüler in dieser Klasse - es ist eine kleine und intime Gruppe.",
        options: ["pocos", "poco", "muchos", "muy"],
        correct: "pocos",
        explanation: "Für WENIGE Personen: 'pocos estudiantes'. Kleine Klassengröße ermöglicht mehr individuelle Aufmerksamkeit vom Lehrer und intensiveren Austausch zwischen Teilnehmern."
      },
      {
        id: "cant_11",
        question: "Este ejercicio es _____ difícil para principiantes absolutos completamente.",
        translation: "Diese Übung ist für völlige Anfänger zu schwer.",
        options: ["demasiado", "muy", "mucho", "muchos"],
        correct: "demasiado",
        explanation: "Für ZU vor Adjektiv: 'demasiado difícil' (zu schwer). Über angemessenem Niveau. Diese übermäßige Schwierigkeit für Anfänger ist pädagogisch problematisch und könnte entmutigen."
      },
      {
        id: "cant_12",
        question: "Trabajo _____ cada día - más de diez horas mínimo sin parar.",
        translation: "Ich arbeite jeden Tag viel - mindestens mehr als zehn Stunden ohne anzuhalten.",
        options: ["mucho", "muy", "muchos", "demasiado"],
        correct: "mucho",
        explanation: "Für VIEL als Adverb (nach Verb): 'trabajo mucho' (arbeite viel). Diese exzessiven täglichen Arbeitsstunden von über zehn deuten auf Workaholic-Tendenz oder beruflichen Druck hin."
      },
      {
        id: "cant_13",
        question: "Me gusta _____ este libro - es uno de mis favoritos personales.",
        translation: "Mir gefällt dieses Buch sehr - es ist eines meiner persönlichen Lieblinge.",
        options: ["mucho", "muy", "muchos", "demasiado"],
        correct: "mucho",
        explanation: "Nach 'gustar' als Adverb: 'me gusta mucho' (gefällt mir sehr). Nicht 'muy'. Diese starke Affinität für Buch zeigt, dass es besondere Bedeutung hat und wahrscheinlich mehrfach gelesen wurde."
      },
      {
        id: "cant_14",
        question: "Hay _____ sal en esta sopa - está casi incomible de salada.",
        translation: "Es ist zu viel Salz in dieser Suppe - sie ist fast ungenießbar salzig.",
        options: ["demasiada", "demasiado", "mucha", "muy"],
        correct: "demasiada",
        explanation: "Für ZU VIEL mit feminin unzählbar: 'demasiada sal' (zu viel Salz). Adjektiv passt sich an. Diese Übersalzung macht Suppe praktisch unessbar und zeigt Kochfehler."
      },
      {
        id: "cant_15",
        question: "Leo _____ libros al mes - alrededor de cinco o seis normalmente.",
        translation: "Ich lese viele Bücher pro Monat - normalerweise ungefähr fünf oder sechs.",
        options: ["muchos", "mucho", "muy", "demasiados"],
        correct: "muchos",
        explanation: "Für VIELE mit zählbar: 'muchos libros'. Diese hohe Leserate von fünf bis sechs Büchern monatlich zeigt echte Leseleidenschaft und viel investierte Zeit in Literatur."
      }
    ]
  },

  mandatos_formales: {
    name: "Formelle Befehle (usted/ustedes)",
    description: "Höfliche Imperative - Sie-Form im Spanischen",
    icon: Sun,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "mand_form_1",
        question: "_____ usted el formulario completamente antes de entregar, por favor.",
        translation: "Füllen Sie bitte das Formular vollständig aus, bevor Sie es abgeben.",
        options: ["Complete", "Completa", "Completen", "Completar"],
        correct: "Complete",
        explanation: "Formeller Befehl für 'usted' (Sie): nutzt Subjuntivo-Form 'complete'. Höflich und respektvoll. Diese administrative Anweisung sichert, dass Formular korrekt ausgefüllt wird für reibungslose Bearbeitung."
      },
      {
        id: "mand_form_2",
        question: "No _____ ustedes en la biblioteca - es zona de silencio.",
        translation: "Sprechen Sie nicht in der Bibliothek - es ist Ruhezone.",
        options: ["hablen", "hablan", "hable", "hablar"],
        correct: "hablen",
        explanation: "Negativer formeller Befehl Plural: 'no hablen' (sprechen Sie nicht). Subjuntivo-Form für 'ustedes'. Diese Bibliotheksregel wahrt Studienatmosphäre für alle, die Konzentration brauchen."
      },
      {
        id: "mand_form_3",
        question: "_____ usted aquí hasta que el doctor lo llame, por favor.",
        translation: "Warten Sie bitte hier, bis der Arzt Sie ruft.",
        options: ["Espere", "Espera", "Esperen", "Esperar"],
        correct: "Espere",
        explanation: "Formeller Befehl 'usted': 'espere' (warten Sie). Diese Wartezimmer-Anweisung ist Standard in medizinischen Einrichtungen für geordneten Ablauf."
      },
      {
        id: "mand_form_4",
        question: "_____ ustedes sus documentos de identidad en la entrada principal, por favor.",
        translation: "Zeigen Sie bitte Ihre Ausweisdokumente am Haupteingang.",
        options: ["Muestren", "Muestran", "Muestre", "Mostrar"],
        correct: "Muestren",
        explanation: "Formeller Befehl Plural: 'muestren' von 'mostrar'. Diese Sicherheitsanweisung ist üblich bei kontrollierten Eingängen zu Gebäuden oder Veranstaltungen."
      },
      {
        id: "mand_form_5",
        question: "No _____ usted su teléfono en la reunión importante, por favor.",
        translation: "Benutzen Sie bitte Ihr Telefon nicht im wichtigen Meeting.",
        options: ["use", "usa", "usen", "usar"],
        correct: "use",
        explanation: "Negativer formeller Befehl: 'no use' (benutzen Sie nicht). Diese Meeting-Etikette sichert ungeteilte Aufmerksamkeit und Respekt für Präsentierende."
      },
      {
        id: "mand_form_6",
        question: "_____ usted a la derecha en el próximo semáforo, por favor.",
        translation: "Biegen Sie bitte an der nächsten Ampel rechts ab.",
        options: ["Gire", "Gira", "Giren", "Girar"],
        correct: "Gire",
        explanation: "Formeller Befehl: 'gire' (biegen Sie ab). Im Taxi oder Navigationskontext höflich. Diese Wegbeschreibung führt zum gewünschten Ziel mit klaren Anweisungen."
      },
      {
        id: "mand_form_7",
        question: "_____ ustedes todos el cinturón de seguridad antes de arrancar.",
        translation: "Schnallen Sie sich alle vor dem Losfahren an.",
        options: ["Abróchense", "Abróchenles", "Abrochen", "Abrochar"],
        correct: "Abróchense",
        explanation: "Reflexiver formeller Befehl Plural: 'abróchense' (schnallen Sie sich an). Pronomen hängt an. Diese Sicherheitsanweisung ist lebenswichtig vor Fahrtbeginn und gesetzlich oft vorgeschrieben."
      },
      {
        id: "mand_form_8",
        question: "_____ usted tranquilo - todo va a salir bien al final.",
        translation: "Bleiben Sie ruhig - alles wird am Ende gut ausgehen.",
        options: ["Esté", "Está", "Estén", "Estar"],
        correct: "Esté",
        explanation: "Formeller Befehl von 'estar': 'esté tranquilo'. Unregelmäßiger Subjuntivo. Diese beruhigende Ermutigung versucht, Angst oder Stress in schwieriger Situation zu lindern."
      },
      {
        id: "mand_form_9",
        question: "No _____ ustedes preocupados - resolveremos el problema juntos pronto.",
        translation: "Seien Sie nicht besorgt - wir werden das Problem bald gemeinsam lösen.",
        options: ["estén", "están", "esté", "estar"],
        correct: "estén",
        explanation: "Negativer formeller Befehl Plural: 'no estén preocupados'. Diese Versicherung kollektiver Problemlösung beruhigt Gruppe und stärkt Teamgeist."
      },
      {
        id: "mand_form_10",
        question: "_____ usted paciente con los resultados - tardarán unos días más.",
        translation: "Seien Sie geduldig mit den Ergebnissen - sie werden noch einige Tage dauern.",
        options: ["Sea", "Es", "Sean", "Ser"],
        correct: "Sea",
        explanation: "Formeller Befehl von 'ser': 'sea paciente'. Hochgradig unregelmäßig. Diese Bitte um Geduld erklärt Verzögerung und setzt realistische Erwartungen für Zeitrahmen."
      },
      {
        id: "mand_form_11",
        question: "_____ ustedes las instrucciones cuidadosamente antes de comenzar la prueba.",
        translation: "Lesen Sie die Anweisungen sorgfältig, bevor Sie mit der Prüfung beginnen.",
        options: ["Lean", "Leen", "Lea", "Leer"],
        correct: "Lean",
        explanation: "Formeller Befehl Plural: 'lean' (lesen Sie). Diese wichtige Prüfungsanweisung verhindert Fehler durch Missverständnis und sichert, dass alle Regeln verstanden sind."
      },
      {
        id: "mand_form_12",
        question: "No _____ usted en esta zona - está totalmente prohibido estacionar aquí.",
        translation: "Parken Sie nicht in dieser Zone - es ist völlig verboten, hier zu parken.",
        options: ["estacione", "estaciona", "estacionen", "estacionar"],
        correct: "estacione",
        explanation: "Negativer formeller Befehl: 'no estacione'. Dieses Parkverbot ist wahrscheinlich aus Sicherheitsgründen oder Verkehrsfluss und sollte respektiert werden, um Strafzettel zu vermeiden."
      },
      {
        id: "mand_form_13",
        question: "_____ ustedes los asientos asignados durante todo el vuelo entero, por favor.",
        translation: "Behalten Sie bitte während des gesamten Fluges die zugewiesenen Sitze.",
        options: ["Mantengan", "Mantienen", "Mantenga", "Mantener"],
        correct: "Mantengan",
        explanation: "Formeller Befehl Plural: 'mantengan' (behalten Sie). Diese Fluganweisung dient Sicherheit und Organisation während Flug."
      },
      {
        id: "mand_form_14",
        question: "_____ usted amable con todos los clientes - representan a la empresa.",
        translation: "Seien Sie freundlich zu allen Kunden - Sie repräsentieren die Firma.",
        options: ["Sea", "Es", "Sean", "Ser"],
        correct: "Sea",
        explanation: "Formeller Befehl 'ser': 'sea amable' (seien Sie freundlich). Diese Kundenservice-Anweisung betont, dass Mitarbeiterverhalten Firmenimage direkt beeinflusst."
      },
      {
        id: "mand_form_15",
        question: "_____ ustedes cuidado con el escalón al salir - es muy alto.",
        translation: "Passen Sie beim Hinausgehen auf die Stufe auf - sie ist sehr hoch.",
        options: ["Tengan", "Tienen", "Tenga", "Tener"],
        correct: "Tengan",
        explanation: "Formeller Befehl Plural von 'tener': 'tengan cuidado' (seien Sie vorsichtig). Diese Sicherheitswarnung vor hoher Stufe verhindert Stolpern und mögliche Verletzungen."
      }
    ]
  },

  gerundio_usos: {
    name: "Gerundio (Verlaufsform)",
    description: "Estar + -ando/-iendo - andauernde Handlungen beschreiben",
    icon: Phone,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "gerund_1",
        question: "Estoy _____ español desde hace dos años ya seguidos.",
        translation: "Ich lerne seit schon zwei aufeinanderfolgenden Jahren Spanisch.",
        options: ["estudiando", "estudiar", "estudio", "estudiado"],
        correct: "estudiando",
        explanation: "Verlaufsform mit 'estar' + Gerundio: 'estoy estudiando' (ich bin am Lernen). Endung '-ando' für -ar Verben. Diese zweijährige kontinuierliche Lerntätigkeit wird durch Gerundio als andauernd markiert."
      },
      {
        id: "gerund_2",
        question: "Ella está _____ una novela nueva en su tiempo libre disponible.",
        translation: "Sie schreibt in ihrer verfügbaren Freizeit einen neuen Roman.",
        options: ["escribiendo", "escribir", "escribe", "escrito"],
        correct: "escribiendo",
        explanation: "Gerundio von 'escribir': 'escribiendo' (schreibend). Endung '-iendo' für -er/-ir Verben. Dieses kreative Schreibprojekt in Freizeit zeigt literarische Ambition neben anderen Verpflichtungen."
      },
      {
        id: "gerund_3",
        question: "Los niños están _____ en el jardín con sus juguetes ahora.",
        translation: "Die Kinder spielen jetzt im Garten mit ihren Spielsachen.",
        options: ["jugando", "jugar", "juegan", "jugado"],
        correct: "jugando",
        explanation: "Verlaufsform 'están jugando' (sind am Spielen): beschreibt momentane Aktivität. Diese aktuelle Kinderspiel-Szene im Garten ist gesunde Outdoor-Aktivität in diesem Moment."
      },
      {
        id: "gerund_4",
        question: "¿Qué estás _____ ahora mismo? Te llamé pero no contestas nunca.",
        translation: "Was machst du gerade jetzt? Ich rief dich an, aber du antwortest nie.",
        options: ["haciendo", "hacer", "haces", "hecho"],
        correct: "haciendo",
        explanation: "Frage mit Verlaufsform: '¿qué estás haciendo?' (was bist du am Machen?). Diese Frage über aktuelle Beschäftigung erklärt, warum du nicht ans Telefon gehst."
      },
      {
        id: "gerund_5",
        question: "Estamos _____ para el examen final toda la semana intensamente.",
        translation: "Wir bereiten uns die ganze Woche intensiv auf die Abschlussprüfung vor.",
        options: ["preparándonos", "preparar", "preparamos", "preparado"],
        correct: "preparándonos",
        explanation: "Reflexives Gerundio: Pronomen 'nos' hängt AN 'preparando' → 'preparándonos'. Auch 'nos estamos preparando' möglich. Diese intensive wochenlange Vorbereitung zeigt Ernst der bevorstehenden Prüfung."
      },
      {
        id: "gerund_6",
        question: "Sigo _____ errores tontos aunque ya sé la regla bien.",
        translation: "Ich mache weiterhin dumme Fehler, obwohl ich die Regel schon gut kenne.",
        options: ["cometiendo", "cometer", "cometo", "cometido"],
        correct: "cometiendo",
        explanation: "Verb 'seguir' + Gerundio bedeutet WEITERMACHEN: 'sigo cometiendo' (ich fahre fort zu machen). Diese frustrierende Fortsetzung von Fehlern trotz Wissen zeigt, dass Verstehen nicht automatisch zu fehlerfreier Ausführung führt."
      },
      {
        id: "gerund_7",
        question: "Están _____ la casa nueva que compraron el mes pasado recién.",
        translation: "Sie sind dabei, das neue Haus zu renovieren, das sie letzten Monat gerade gekauft haben.",
        options: ["renovando", "renovar", "renovan", "renovado"],
        correct: "renovando",
        explanation: "Verlaufsform 'están renovando' (sind am Renovieren): aktuelle andauernde Aktivität. Dieses Renovierungsprojekt nach Hauskauf ist typische Phase, um Eigenheim nach eigenen Wünschen anzupassen."
      },
      {
        id: "gerund_8",
        question: "Continúo _____ que es una mala idea desde el principio inicial.",
        translation: "Ich fahre fort zu denken, dass es vom Anfang an eine schlechte Idee ist.",
        options: ["pensando", "pensar", "pienso", "pensado"],
        correct: "pensando",
        explanation: "Verb 'continuar' + Gerundio: 'continúo pensando' (ich fahre fort zu denken). Drückt Beharrlichkeit der Meinung aus. Diese anhaltende Skepsis zeigt, dass erste Zweifel nicht verschwunden sind."
      },
      {
        id: "gerund_9",
        question: "Voy _____ poco a poco español con práctica diaria constante.",
        translation: "Ich lerne Spanisch durch konstante tägliche Praxis nach und nach.",
        options: ["aprendiendo", "aprender", "aprendo", "aprendido"],
        correct: "aprendiendo",
        explanation: "Idiomatisch 'ir' + Gerundio bedeutet ALLMÄHLICH: 'voy aprendiendo' (ich bin dabei zu lernen/lerne nach und nach). Dieser schrittweise Lernfortschritt durch tägliche Übung ist bewährte Methode für Spracherwerb."
      },
      {
        id: "gerund_10",
        question: "Ella anda _____ por la ciudad sin rumbo fijo alguno hoy.",
        translation: "Sie geht heute ohne festes Ziel durch die Stadt umher.",
        options: ["caminando", "caminar", "camina", "caminado"],
        correct: "caminando",
        explanation: "Verb 'andar' + Gerundio: 'anda caminando' (geht umher). Betont ziellose Bewegung. Dieser Stadtbummel ohne Plan ist entspannte Art, Stadt zu erkunden und Zeit zu verbringen."
      },
      {
        id: "gerund_11",
        question: "Llevo _____ en este proyecto dos meses sin parar para nada.",
        translation: "Ich arbeite schon zwei Monate ohne für irgendetwas anzuhalten an diesem Projekt.",
        options: ["trabajando", "trabajar", "trabajo", "trabajado"],
        correct: "trabajando",
        explanation: "Verb 'llevar' + Gerundio + ZEIT bedeutet 'schon...lang': 'llevo trabajando dos meses' (arbeite schon zwei Monate). Diese Konstruktion betont Dauer. Zwei Monate intensive Projektarbeit zeigen Ausdauer und Engagement."
      },
      {
        id: "gerund_12",
        question: "Acabamos de terminar - estábamos _____ todo el día entero sin descanso.",
        translation: "Wir sind gerade fertig geworden - wir arbeiteten den ganzen Tag ohne Pause.",
        options: ["trabajando", "trabajar", "trabajamos", "trabajado"],
        correct: "trabajando",
        explanation: "Verlaufsform in Vergangenheit: 'estábamos trabajando' (wir waren am Arbeiten). Diese ganztägige ununterbrochene Arbeit rechtfertigt Erschöpfung und Freude über Fertigstellung."
      },
      {
        id: "gerund_13",
        question: "Salí _____ de la oficina porque tenía prisa extrema urgente.",
        translation: "Ich ging rennend aus dem Büro, weil ich extreme dringende Eile hatte.",
        options: ["corriendo", "correr", "corro", "corrido"],
        correct: "corriendo",
        explanation: "Gerundio ohne 'estar' zeigt WIE Handlung ausgeführt wird: 'salí corriendo' (ging rennend/rannte hinaus). Diese hastigen Flucht aus Büro deutet auf Notfall oder sehr wichtigen Termin hin."
      },
      {
        id: "gerund_14",
        question: "Viene _____ todos los días al trabajo - no tiene coche propio.",
        translation: "Er kommt jeden Tag zu Fuß zur Arbeit - er hat kein eigenes Auto.",
        options: ["caminando", "caminar", "camina", "caminado"],
        correct: "caminando",
        explanation: "Verb 'venir' + Gerundio zeigt WIE man kommt: 'viene caminando' (kommt zu Fuß). Dieser tägliche Fußweg zur Arbeit ist gesunde umweltfreundliche Alternative zu motorisiertem Transport."
      },
      {
        id: "gerund_15",
        question: "Pasé toda la noche _____ para el examen de mañana importante.",
        translation: "Ich verbrachte die ganze Nacht lernend für die wichtige Prüfung morgen.",
        options: ["estudiando", "estudiar", "estudio", "estudiado"],
        correct: "estudiando",
        explanation: "Gerundio nach 'pasar tiempo': 'pasé la noche estudiando' (verbrachte Nacht mit Lernen). Diese Nachtschicht vor Prüfung ist intensive aber erschöpfende Strategie, die Schlafmangel riskiert."
      }
    ]
  }
};

export default part9Categories;
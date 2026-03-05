/**
 * GERMAN → SPANISH GRAMMAR - PART 18
 * 4 categories, 15 questions each
 */

import { Copy, FileText, Shield, TrendingUp } from "lucide-react";

export const part18Categories = {
  pronombres_dobles: {
    name: "Pronombres Dobles (Doppelpronomen)",
    description: "Me lo, te la, se los - Kombination direkter und indirekter Pronomen",
    icon: Copy,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "pron_dob_1",
        question: "¿El libro? Sí, _____ _____ presté a María ayer por la tarde.",
        translation: "Das Buch? Ja, ich lieh es María gestern Nachmittag.",
        options: ["se lo", "le lo", "se la", "la lo"],
        correct: "se lo",
        explanation: "Für 'es ihr' nutzen wir 'se lo': 'le' wird zu 'se' vor 'lo/la'. Reihenfolge: indirektes + direktes Pronomen. Dieses geliehene Buch zeigt Großzügigkeit zwischen Freunden."
      },
      {
        id: "pron_dob_2",
        question: "¿Las llaves? Mi hermano _____ _____ dio hace un momento atrás.",
        translation: "Die Schlüssel? Mein Bruder gab sie mir vor einem Moment.",
        options: ["me las", "me los", "las me", "los me"],
        correct: "me las",
        explanation: "Für 'sie mir' (feminin Plural): 'me las' (mir sie). Reihenfolge: indirekt + direkt. 'Las' für llaves (feminin). Diese Schlüsselübergabe ermöglicht Zugang."
      },
      {
        id: "pron_dob_3",
        question: "¿El mensaje? Ya _____ _____ envié por correo electrónico esta mañana.",
        translation: "Die Nachricht? Ich schickte sie dir schon heute Morgen per E-Mail.",
        options: ["te lo", "te la", "lo te", "la te"],
        correct: "te lo",
        explanation: "Für 'es dir' (mensaje = maskulin): 'te lo' (dir es). Maskulin 'lo' für mensaje. Diese morgendliche E-Mail-Kommunikation sollte bereits angekommen sein."
      },
      {
        id: "pron_dob_4",
        question: "¿Los documentos importantes? El jefe _____ _____ entregará mañana sin falta.",
        translation: "Die wichtigen Dokumente? Der Chef wird sie uns morgen ohne Ausnahme übergeben.",
        options: ["nos los", "nos las", "los nos", "las nos"],
        correct: "nos los",
        explanation: "Für 'sie uns' (maskulin Plural): 'nos los' (uns sie). Diese morgige Dokumentenübergabe ist wichtig für Arbeitsfortschritt."
      },
      {
        id: "pron_dob_5",
        question: "¿La verdad completa? Te _____ _____ voy a decir ahora mismo aquí.",
        translation: "Die komplette Wahrheit? Ich werde sie dir jetzt gleich hier sagen.",
        options: ["la", "lo", "las", "los"],
        correct: "la",
        explanation: "NUR ein Pronomen nötig: 'te la voy a decir' (dir sie werde sagen). 'La' für verdad (feminin). Diese Wahrheitsoffenbarung ist bedeutender Moment."
      },
      {
        id: "pron_dob_6",
        question: "¿Las fotos de vacaciones? _____ _____ mostraré cuando vuelva a casa.",
        translation: "Die Urlaubsfotos? Ich werde sie euch zeigen, wenn ich nach Hause zurückkomme.",
        options: ["Os las", "Os los", "Las os", "Los os"],
        correct: "Os las",
        explanation: "Spanien-Form für 'euch sie': 'os las' (euch sie). Feminin Plural. Diese Urlaubsfotos-Präsentation ist Tradition nach Reiserückkehr."
      },
      {
        id: "pron_dob_7",
        question: "¿El regalo para mamá? _____ _____ compré ayer en el centro comercial.",
        translation: "Das Geschenk für Mama? Ich kaufte es ihr gestern im Einkaufszentrum.",
        options: ["Se lo", "Le lo", "Se la", "La le"],
        correct: "Se lo",
        explanation: "Für 'es ihr': 'se lo' (ihr es). 'Le' wird 'se' vor Objektpronomen. Dieses Muttergeschenk vom Einkaufsbummel ist liebevolle Geste."
      },
      {
        id: "pron_dob_8",
        question: "¿La respuesta correcta? El profesor _____ _____ explicará mañana en clase.",
        translation: "Die richtige Antwort? Der Lehrer wird sie uns morgen im Unterricht erklären.",
        options: ["nos la", "nos lo", "la nos", "lo nos"],
        correct: "nos la",
        explanation: "Für 'sie uns' (feminin): 'nos la' (uns sie). Diese morgige Erklärung beendet Unsicherheit über Antwort."
      },
      {
        id: "pron_dob_9",
        question: "¿Mis apuntes de clase? _____ _____ puedo prestar si los necesitas urgente.",
        translation: "Meine Kursnotizen? Ich kann sie dir leihen, wenn du sie dringend brauchst.",
        options: ["Te los", "Te las", "Los te", "Las te"],
        correct: "Te los",
        explanation: "Für 'sie dir' (maskulin Plural apuntes): 'te los' (dir sie). Dieses großzügige Angebot hilft bei Prüfungsvorbereitung."
      },
      {
        id: "pron_dob_10",
        question: "¿Las instrucciones? Ya _____ _____ di claramente esta mañana temprano.",
        translation: "Die Anweisungen? Ich gab sie dir schon heute früh morgens klar.",
        options: ["te las", "te los", "las te", "los te"],
        correct: "te las",
        explanation: "Für 'sie dir' (feminin Plural): 'te las' (dir sie). Instrucciones ist feminin. Diese morgendliche Instruktion sollte Klarheit geschaffen haben."
      },
      {
        id: "pron_dob_11",
        question: "¿El dinero que te debo? _____ _____ devolveré la semana próxima seguro.",
        translation: "Das Geld, das ich dir schulde? Ich werde es dir sicher nächste Woche zurückgeben.",
        options: ["Te lo", "Te la", "Lo te", "La te"],
        correct: "Te lo",
        explanation: "Für 'es dir' (dinero = maskulin): 'te lo' (dir es). Diese Rückzahlungszusage ist wichtig für Vertrauen in Freundschaft."
      },
      {
        id: "pron_dob_12",
        question: "¿Los secretos familiares? Nunca _____ _____ contaré a nadie extraño.",
        translation: "Die Familiengeheimnisse? Ich werde sie niemals jemandem Fremdem erzählen.",
        options: ["se los", "le los", "los se", "los le"],
        correct: "se los",
        explanation: "Für 'sie jemandem': 'se los' (ihnen sie). Diese Diskretion über Familie bewahrt Privatsphäre und zeigt Loyalität."
      },
      {
        id: "pron_dob_13",
        question: "¿La tarea de matemáticas? El profesor _____ _____ explicó muy bien.",
        translation: "Die Mathe-Hausaufgabe? Der Lehrer erklärte sie uns sehr gut.",
        options: ["nos la", "nos lo", "la nos", "lo nos"],
        correct: "nos la",
        explanation: "Für 'sie uns' (tarea = feminin): 'nos la' (uns sie). Diese gute Erklärung erleichtert Aufgabenlösung zu Hause."
      },
      {
        id: "pron_dob_14",
        question: "¿Tu bicicleta vieja? _____ _____ puedo reparar si quieres este fin.",
        translation: "Dein altes Fahrrad? Ich kann es dir dieses Wochenende reparieren, wenn du willst.",
        options: ["Te la", "Te lo", "La te", "Lo te"],
        correct: "Te la",
        explanation: "Für 'es dir' (bicicleta = feminin): 'te la' (dir es). Dieses Reparaturangebot ist freundliche Nachbarschaftshilfe."
      },
      {
        id: "pron_dob_15",
        question: "¿Las entradas para el concierto? Ya _____ _____ compré a todos nosotros.",
        translation: "Die Konzertkarten? Ich kaufte sie schon uns allen.",
        options: ["nos las", "nos los", "las nos", "los nos"],
        correct: "nos las",
        explanation: "Für 'sie uns' (entradas = feminin Plural): 'nos las' (uns sie). Dieser Kartenkauf für Gruppe zeigt Organisation und Vorfreude auf gemeinsames Event."
      }
    ]
  },

  subjuntivo_clausulas_adjetivas: {
    name: "Subjuntivo en Cláusulas Adjetivas",
    description: "Der, die, das mit Konjunktiv - unbestimmte oder nicht-existente Dinge",
    icon: FileText,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "subj_adj_1",
        question: "Busco un apartamento que _____ cerca del centro de la ciudad.",
        translation: "Ich suche ein Apartment, das nahe am Stadtzentrum ist.",
        options: ["esté", "está", "es", "sea"],
        correct: "esté",
        explanation: "Bei UNBESTIMMTEM Objekt (irgendein Apartment) nutzen wir Subjuntivo: 'que esté' (das sei). Wir wissen nicht, ob es existiert. Diese Wohnungssuche mit Ortswunsch definiert klare Anforderung."
      },
      {
        id: "subj_adj_2",
        question: "Necesito una persona que _____ hablar alemán fluidamente muy bien.",
        translation: "Ich brauche eine Person, die sehr gut fließend Deutsch sprechen kann.",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "Unbestimmte Person mit Fähigkeit: 'que sepa hablar' (die sprechen kann). Subjuntivo bei Suche. Diese Stellenanforderung definiert spezifische Sprachkompetenz."
      },
      {
        id: "subj_adj_3",
        question: "Tengo un amigo que _____ cinco idiomas perfectamente sin acento.",
        translation: "Ich habe einen Freund, der perfekt ohne Akzent fünf Sprachen spricht.",
        options: ["habla", "hable", "hablará", "hablaba"],
        correct: "habla",
        explanation: "Bei BESTIMMTER existierender Person nutzen wir Indikativ: 'que habla' (der spricht). Wir wissen, er existiert. Diese außergewöhnliche Sprachbegabung ist beeindruckend."
      },
      {
        id: "subj_adj_4",
        question: "No hay nadie aquí que _____ resolver este problema técnico complicado.",
        translation: "Es ist hier niemand, der dieses komplizierte technische Problem lösen kann.",
        options: ["pueda", "puede", "podrá", "podía"],
        correct: "pueda",
        explanation: "Nach NEGATION (niemand) nutzen wir Subjuntivo: 'nadie que pueda' (niemand, der kann). Diese fehlende Expertise erfordert externe Hilfe."
      },
      {
        id: "subj_adj_5",
        question: "¿Conoces algún restaurante que _____ comida vegetariana orgánica buena?",
        translation: "Kennst du irgendein Restaurant, das gutes vegetarisches Bio-Essen serviert?",
        options: ["sirva", "sirve", "servirá", "servía"],
        correct: "sirva",
        explanation: "Bei UNBESTIMMTEM mit 'algún': Subjuntivo 'que sirva' (das serviere). Wir wissen nicht, ob solches existiert. Diese Restaurantsuche mit Ernährungspräferenz ist spezifisch."
      },
      {
        id: "subj_adj_6",
        question: "Conozco un lugar que _____ las mejores vistas de toda la ciudad.",
        translation: "Ich kenne einen Ort, der die besten Aussichten der ganzen Stadt hat.",
        options: ["tiene", "tenga", "tendrá", "tenía"],
        correct: "tiene",
        explanation: "BESTIMMTER bekannter Ort: Indikativ 'que tiene' (der hat). Ich kenne ihn bereits. Dieser Aussichtspunkt ist Geheimtipp für Stadtpanorama."
      },
      {
        id: "subj_adj_7",
        question: "Quiero un trabajo que me _____ viajar por el mundo entero.",
        translation: "Ich will eine Arbeit, die mir erlaubt, um die ganze Welt zu reisen.",
        options: ["permita", "permite", "permitirá", "permitía"],
        correct: "permita",
        explanation: "Bei WUNSCH (nicht real): Subjuntivo 'que permita' (die erlaube). Dieser Traumjob mit Reisemöglichkeit ist Idealvorstellung, nicht Realität."
      },
      {
        id: "subj_adj_8",
        question: "Hay muchos estudiantes que _____ bien español aquí en clase ahora.",
        translation: "Es gibt viele Schüler, die hier jetzt im Unterricht gut Spanisch sprechen.",
        options: ["hablan", "hablen", "hablarán", "hablaban"],
        correct: "hablan",
        explanation: "EXISTIERENDE Gruppe: Indikativ 'que hablan' (die sprechen). Wir wissen, sie existieren hier. Diese mehrsprachige Klasse ist multikulturell."
      },
      {
        id: "subj_adj_9",
        question: "No encuentro ningún libro que me _____ realmente en esta biblioteca.",
        translation: "Ich finde kein Buch, das mich in dieser Bibliothek wirklich interessiert.",
        options: ["interese", "interesa", "interesará", "interesaba"],
        correct: "interese",
        explanation: "Nach NEGATION 'ningún': Subjuntivo 'que interese' (das interessiere). Diese erfolglose Büchersuche zeigt vielleicht begrenztes Angebot."
      },
      {
        id: "subj_adj_10",
        question: "Prefiero una casa que _____ jardín grande espacioso para niños.",
        translation: "Ich bevorzuge ein Haus, das großen geräumigen Garten für Kinder hat.",
        options: ["tenga", "tiene", "tendrá", "tenía"],
        correct: "tenga",
        explanation: "Bei PRÄFERENZ (noch nicht gefunden): Subjuntivo 'que tenga' (das habe). Diese Haussuche mit Gartenwunsch ist familienfreundlich."
      },
      {
        id: "subj_adj_11",
        question: "Vivo en un edificio que _____ ascensor moderno - es muy práctico.",
        translation: "Ich wohne in einem Gebäude, das modernen Aufzug hat - es ist sehr praktisch.",
        options: ["tiene", "tenga", "tendrá", "tenía"],
        correct: "tiene",
        explanation: "BESTIMMTES Gebäude wo ich wohne: Indikativ 'que tiene' (das hat). Real und bekannt. Dieser Aufzug ist praktische Annehmlichkeit im Alltag."
      },
      {
        id: "subj_adj_12",
        question: "Necesitamos empleados que _____ trabajar bajo presión extrema intensa.",
        translation: "Wir brauchen Angestellte, die unter extremem intensiven Druck arbeiten können.",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "Bei Stellensuche (unbestimmt): Subjuntivo 'que puedan' (die können). Diese Anforderung an Stressresistenz ist wichtig für anspruchsvolle Position."
      },
      {
        id: "subj_adj_13",
        question: "¿Hay alguien presente aquí que _____ tocar la guitarra española bien?",
        translation: "Ist hier jemand anwesend, der gut spanische Gitarre spielen kann?",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "Frage nach UNBESTIMMTER Person: Subjuntivo '¿alguien que sepa?' (jemand, der könne?). Diese Suche nach Gitarrist für spontane Musik."
      },
      {
        id: "subj_adj_14",
        question: "Tengo amigos que _____ en diferentes países del mundo entero actualmente.",
        translation: "Ich habe Freunde, die aktuell in verschiedenen Ländern der ganzen Welt leben.",
        options: ["viven", "vivan", "vivirán", "vivían"],
        correct: "viven",
        explanation: "BESTIMMTE existierende Freunde: Indikativ 'que viven' (die leben). Diese internationale Freundesgruppe ist Ergebnis globaler Mobilität."
      },
      {
        id: "subj_adj_15",
        question: "Busco una película que _____ entretenida pero también educativa cultural.",
        translation: "Ich suche einen Film, der unterhaltsam aber auch kulturell lehrreich ist.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Unbestimmter Film (Suche): Subjuntivo 'que sea' (der sei). Diese Kombination von Unterhaltung und Bildung ist anspruchsvoller Filmgeschmack."
      }
    ]
  },

  se_pasiva_reforzada: {
    name: "Se Pasiva Reforzada",
    description: "Erweiterte SE-Konstruktionen - Passiv und Unpersönlich kombiniert",
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "se_pas_ref_1",
        question: "_____ _____ varios idiomas en esta escuela internacional multilingüe.",
        translation: "In dieser internationalen mehrsprachigen Schule werden mehrere Sprachen unterrichtet.",
        options: ["Se enseñan", "Se enseña", "Enseñan", "Enseña"],
        correct: "Se enseñan",
        explanation: "SE-Passiv mit Plural: 'se enseñan idiomas' (werden unterrichtet). Verb stimmt mit Plural überein. Dieses mehrsprachige Angebot ist Vorteil internationaler Schulen."
      },
      {
        id: "se_pas_ref_2",
        question: "_____ _____ mucho sobre la cultura española en este curso completo.",
        translation: "In diesem kompletten Kurs wird viel über spanische Kultur gelernt.",
        options: ["Se aprende", "Se aprenden", "Aprende", "Aprenden"],
        correct: "Se aprende",
        explanation: "Mit unzählbarem 'mucho': 'se aprende mucho' (wird viel gelernt). Singular. Dieser kulturreiche Kurs geht über reine Sprache hinaus."
      },
      {
        id: "se_pas_ref_3",
        question: "_____ _____ a los trabajadores que lleguen puntuales siempre cada día.",
        translation: "Von den Arbeitern wird verlangt, dass sie jeden Tag immer pünktlich kommen.",
        options: ["Se pide", "Se piden", "Pide", "Piden"],
        correct: "Se pide",
        explanation: "SE-Passiv mit Nebensatz: 'se pide a los trabajadores que...' (wird verlangt von Arbeitern dass...). Diese Pünktlichkeitserwartung ist Standardarbeitsregel."
      },
      {
        id: "se_pas_ref_4",
        question: "_____ _____ las solicitudes de empleo hasta el viernes próximo.",
        translation: "Die Bewerbungen werden bis nächsten Freitag angenommen.",
        options: ["Se aceptan", "Se acepta", "Aceptan", "Acepta"],
        correct: "Se aceptan",
        explanation: "Plural: 'se aceptan solicitudes' (werden angenommen). Diese Bewerbungsfrist gibt klaren Zeitrahmen für Interessenten."
      },
      {
        id: "se_pas_ref_5",
        question: "_____ _____ que el proyecto estará listo en dos meses más.",
        translation: "Es wird gesagt/Man rechnet damit, dass das Projekt in noch zwei Monaten fertig sein wird.",
        options: ["Se espera", "Se esperan", "Espera", "Esperan"],
        correct: "Se espera",
        explanation: "SE-Unpersönlich mit Nebensatz: 'se espera que...' (es wird erwartet, dass...). Diese Projektfertigstellung-Prognose ist Planungsinformation."
      },
      {
        id: "se_pas_ref_6",
        question: "_____ _____ los errores cometidos durante el proceso de trabajo.",
        translation: "Die während des Arbeitsprozesses gemachten Fehler wurden korrigiert.",
        options: ["Se corrigieron", "Se corrigió", "Corrigieron", "Corrigió"],
        correct: "Se corrigieron",
        explanation: "SE-Passiv Pretérito Plural: 'se corrigieron' (wurden korrigiert). Diese Fehlerkorrektur ist wichtiger Qualitätssicherungsschritt."
      },
      {
        id: "se_pas_ref_7",
        question: "_____ _____ nuevos profesores con experiencia para el próximo año.",
        translation: "Für nächstes Jahr werden neue Lehrer mit Erfahrung gesucht.",
        options: ["Se buscan", "Se busca", "Buscan", "Busca"],
        correct: "Se buscan",
        explanation: "SE-Passiv für Suche: 'se buscan profesores' (werden gesucht). Diese Lehrerrekrutierung zeigt Schulwachstum oder Ersatzbedarf."
      },
      {
        id: "se_pas_ref_8",
        question: "_____ _____ que habrá cambios importantes en la empresa pronto.",
        translation: "Es wird angenommen, dass es bald wichtige Änderungen in der Firma geben wird.",
        options: ["Se cree", "Se creen", "Cree", "Creen"],
        correct: "Se cree",
        explanation: "SE-Unpersönlich: 'se cree que...' (es wird geglaubt, dass...). Diese Änderungserwartung schafft Unsicherheit unter Mitarbeitern."
      },
      {
        id: "se_pas_ref_9",
        question: "_____ _____ fumar en todos los espacios públicos cerrados interiores.",
        translation: "In allen geschlossenen öffentlichen Innenräumen ist Rauchen verboten.",
        options: ["Se prohíbe", "Se prohíben", "Prohíbe", "Prohíben"],
        correct: "Se prohíbe",
        explanation: "SE-Passiv mit Infinitiv: 'se prohíbe fumar' (ist verboten zu rauchen). Singular bei Infinitiv. Dieses Rauchverbot ist Gesundheitsschutzmaßnahme."
      },
      {
        id: "se_pas_ref_10",
        question: "_____ _____ en este hospital moderno nuevas técnicas quirúrgicas avanzadas.",
        translation: "In diesem modernen Krankenhaus werden neue fortgeschrittene Operationstechniken angewendet.",
        options: ["Se utilizan", "Se utiliza", "Utilizan", "Utiliza"],
        correct: "Se utilizan",
        explanation: "Plural: 'se utilizan técnicas' (werden angewendet). Diese medizinischen Innovationen zeigen Krankenhaus auf aktuellem Stand."
      },
      {
        id: "se_pas_ref_11",
        question: "_____ _____ a todos los visitantes que respeten las normas estrictas.",
        translation: "Von allen Besuchern wird verlangt, dass sie die strikten Regeln respektieren.",
        options: ["Se exige", "Se exigen", "Exige", "Exigen"],
        correct: "Se exige",
        explanation: "Mit indirektem Objekt: 'se exige a los visitantes que...' Diese Regelstrenge sichert Ordnung und Sicherheit."
      },
      {
        id: "se_pas_ref_12",
        question: "_____ _____ nuevos métodos de enseñanza en la universidad moderna.",
        translation: "An der modernen Universität werden neue Lehrmethoden implementiert.",
        options: ["Se implementan", "Se implementa", "Implementan", "Implementa"],
        correct: "Se implementan",
        explanation: "Plural: 'se implementan métodos' (werden implementiert). Diese pädagogische Innovation verbessert Lernqualität."
      },
      {
        id: "se_pas_ref_13",
        question: "_____ _____ que la inflación seguirá subiendo este año económico.",
        translation: "Es wird gefürchtet, dass die Inflation dieses Wirtschaftsjahr weiter steigen wird.",
        options: ["Se teme", "Se temen", "Teme", "Temen"],
        correct: "Se teme",
        explanation: "SE mit Emotion: 'se teme que...' (es wird gefürchtet, dass...). Diese Inflationssorge beeinflusst Wirtschaftsplanung."
      },
      {
        id: "se_pas_ref_14",
        question: "_____ _____ los documentos oficiales en la oficina central principal.",
        translation: "Die offiziellen Dokumente werden im zentralen Hauptbüro bearbeitet.",
        options: ["Se procesan", "Se procesa", "Procesan", "Procesa"],
        correct: "Se procesan",
        explanation: "Plural: 'se procesan documentos' (werden bearbeitet). Diese zentrale Bearbeitung standardisiert Prozesse."
      },
      {
        id: "se_pas_ref_15",
        question: "_____ _____ mucha paciencia para aprender idiomas bien fluidamente.",
        translation: "Man braucht viel Geduld, um Sprachen gut fließend zu lernen.",
        options: ["Se necesita", "Se necesitan", "Necesita", "Necesitan"],
        correct: "Se necesita",
        explanation: "Mit unzählbar: 'se necesita paciencia' (wird Geduld gebraucht). Diese Lernweisheit betont Langfristigkeit des Spracherwerbs."
      }
    ]
  },

  futuro_expresiones: {
    name: "Expresiones de Futuro",
    description: "Verschiedene Wege, Zukunft auszudrücken - ir a, futuro, presente",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "fut_expr_1",
        question: "Mañana _____ _____ visitarte en tu casa nueva del barrio norte.",
        translation: "Morgen werde ich dich in deinem neuen Haus im Nordviertel besuchen.",
        options: ["voy a", "iré", "vaya", "fuera"],
        correct: "voy a",
        explanation: "Für GEPLANTE nahe Zukunft bevorzugen wir 'ir a' + Infinitiv: 'voy a visitar' (werde besuchen). Konkreter als Futuro Simple. Dieser morgige Besuch ist festes Vorhaben."
      },
      {
        id: "fut_expr_2",
        question: "El tren _____ a las ocho en punto - nunca se retrasa aquí.",
        translation: "Der Zug fährt um genau acht Uhr ab - er verspätet sich hier nie.",
        options: ["sale", "saldrá", "va a salir", "salga"],
        correct: "sale",
        explanation: "Für FAHRPLAN nutzen wir oft Präsens: 'sale a las ocho' (fährt um acht). Diese pünktliche Zugabfahrt ist verlässlicher Zeitplan."
      },
      {
        id: "fut_expr_3",
        question: "Algún día _____ a recorrer toda Sudamérica completa en mochila.",
        translation: "Eines Tages werde ich ganz Südamerika mit Rucksack bereisen.",
        options: ["viajaré", "voy a viajar", "viajo", "viaje"],
        correct: "viajaré",
        explanation: "Für ENTFERNTE/unbestimmte Zukunft nutzen wir Futuro: 'viajaré' (werde reisen). Mit 'algún día' ist es ferner Traum. Dieser Backpacking-Traum ist langfristige Lebensambition."
      },
      {
        id: "fut_expr_4",
        question: "Creo que mañana _____ buen tiempo según el pronóstico fiable.",
        translation: "Ich glaube, dass morgen laut verlässlicher Vorhersage gutes Wetter sein wird.",
        options: ["hará", "va a hacer", "hace", "haga"],
        correct: "hará",
        explanation: "Nach 'creo que' mit Zukunft: Futuro oder 'ir a' möglich. 'Hará' ist leicht formeller. Diese Wetterprognose beeinflusst Tagesplanung."
      },
      {
        id: "fut_expr_5",
        question: "¡Cuidado! Te _____ _____ caer si no prestas atención ahora mismo.",
        translation: "Vorsicht! Du wirst fallen, wenn du jetzt nicht aufpasst.",
        options: ["vas a", "irás", "caes", "caigas"],
        correct: "vas a",
        explanation: "Für UNMITTELBARE Warnung: 'vas a caer' (wirst fallen). 'Ir a' für sehr nahe Zukunft. Diese Sturzwarnung ist dringender Sicherheitshinweis."
      },
      {
        id: "fut_expr_6",
        question: "Este verano próximo _____ _____ mis vacaciones en Italia septentrional.",
        translation: "Diesen nächsten Sommer werde ich meinen Urlaub in Norditalien verbringen.",
        options: ["voy a pasar", "pasaré", "paso", "pase"],
        correct: "voy a pasar",
        explanation: "Für konkreten nahen Plan: 'voy a pasar' bevorzugt. Auch 'pasaré' möglich. Diese Italienreise ist bereits geplanter Sommerurlaub."
      },
      {
        id: "fut_expr_7",
        question: "Cuando _____ mayor adulto, seré médico como mi padre siempre quiso.",
        translation: "Wenn ich erwachsen werde, werde ich Arzt wie mein Vater es immer wollte.",
        options: ["sea", "soy", "seré", "sería"],
        correct: "sea",
        explanation: "Nach 'cuando' für ZUKÜNFTIGES Ereignis: Subjuntivo 'cuando sea' (wenn ich sein werde). Dieser Berufswunsch folgt väterlichem Vorbild."
      },
      {
        id: "fut_expr_8",
        question: "La película _____ a las nueve de la noche - no llegues tarde.",
        translation: "Der Film beginnt um neun Uhr abends - komm nicht zu spät.",
        options: ["empieza", "empezará", "va a empezar", "empiece"],
        correct: "empieza",
        explanation: "Für festen ZEITPLAN: Präsens 'empieza' (beginnt). Auch Futuro möglich. Diese Filmzeit ist fixierter Termin."
      },
      {
        id: "fut_expr_9",
        question: "Seguramente _____ tarde a la reunión por el tráfico pesado matutino.",
        translation: "Ich werde sicherlich wegen des schweren Morgenverkehrs zu spät zum Meeting kommen.",
        options: ["llegaré", "voy a llegar", "llego", "llegue"],
        correct: "llegaré",
        explanation: "Für VERMUTUNG nutzen wir oft Futuro: 'seguramente llegaré' (werde sicherlich kommen). Diese Verspätungsprognose basiert auf Verkehrserfahrung."
      },
      {
        id: "fut_expr_10",
        question: "Mira las nubes negras oscuras - _____ _____ llover muy pronto.",
        translation: "Schau die dunklen schwarzen Wolken - es wird sehr bald regnen.",
        options: ["va a", "lloverá", "llueve", "llueva"],
        correct: "va a",
        explanation: "Für UNMITTELBARE Zukunft mit Beweis: 'va a llover' (wird regnen). Wolken zeigen es. Diese Wetteränderung steht unmittelbar bevor."
      },
      {
        id: "fut_expr_11",
        question: "En el futuro lejano, la gente _____ en otros planetas habitables probablemente.",
        translation: "In ferner Zukunft werden die Menschen wahrscheinlich auf anderen bewohnbaren Planeten leben.",
        options: ["vivirá", "va a vivir", "vive", "viva"],
        correct: "vivirá",
        explanation: "Für FERNE Zukunft: Futuro 'vivirá' (wird leben). Diese Science-Fiction-Vorstellung ist langfristige Menschheitsvision."
      },
      {
        id: "fut_expr_12",
        question: "Te _____ cuando llegue a la estación de tren sin falta.",
        translation: "Ich werde dich anrufen, wenn ich ohne Ausnahme am Bahnhof ankomme.",
        options: ["llamaré", "voy a llamar", "llamo", "llame"],
        correct: "llamaré",
        explanation: "Nach 'cuando' mit Subjuntivo im Nebensatz: Futuro im Hauptsatz. 'Te llamaré cuando llegue'. Diese Anrufzusage koordiniert Abholung."
      },
      {
        id: "fut_expr_13",
        question: "Este fin de semana próximo _____ _____ descansar - estoy agotado.",
        translation: "Dieses nächste Wochenende werde ich ausruhen - ich bin erschöpft.",
        options: ["voy a", "descansaré", "descanso", "descanse"],
        correct: "voy a",
        explanation: "Für ENTSCHLUSS: 'voy a descansar' ist konkreter Plan. Diese Ruhepause nach Erschöpfung ist notwendige Erholung."
      },
      {
        id: "fut_expr_14",
        question: "_____ lo que _____, siempre te apoyaré incondicionalmente sin dudar.",
        translation: "Was auch immer passiert, ich werde dich bedingungslos ohne zu zweifeln unterstützen.",
        options: ["Pase", "Pasará", "Pasa", "Pasaría"],
        correct: "Pase",
        explanation: "Nach 'pase lo que pase' (was auch passiert): feste Phrase mit Subjuntivo. Diese bedingungslose Unterstützungszusage ist starkes Loyalitätsversprechen."
      },
      {
        id: "fut_expr_15",
        question: "¿Qué _____ hacer este verano durante las vacaciones largas escolares?",
        translation: "Was wirst du während der langen Schulferien diesen Sommer machen?",
        options: ["vas a", "harás", "haces", "hagas"],
        correct: "vas a",
        explanation: "Frage nach Plänen: 'vas a hacer' oder 'harás' beide möglich. 'Ir a' ist umgangssprachlicher. Diese Sommerferienfrage erkundet Urlaubspläne."
      }
    ]
  }
};

export default part18Categories;
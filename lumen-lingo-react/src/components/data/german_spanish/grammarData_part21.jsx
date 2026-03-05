/**
 * GERMAN → SPANISH GRAMMAR - PART 21
 * 4 categories, 15 questions each
 */

import { Package, Droplet, Wind, Mountain } from "lucide-react";

export const part21Categories = {
  articulo_neutro_lo: {
    name: "Artículo Neutro 'Lo'",
    description: "Das Neutrale 'lo' - abstrakte Konzepte und Adjektive substantivieren",
    icon: Package,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "lo_1",
        question: "_____ importante es que estés feliz y sano en tu vida.",
        translation: "Das Wichtige ist, dass du in deinem Leben glücklich und gesund bist.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutraler Artikel 'lo' + Adjektiv macht ABSTRAKTES KONZEPT: 'lo importante' (das Wichtige). Nicht 'el importante'. Diese Priorisierung von Glück und Gesundheit ist philosophische Lebensweisheit."
      },
      {
        id: "lo_2",
        question: "_____ mejor de todo es que no costó mucho dinero en total.",
        translation: "Das Beste von allem ist, dass es insgesamt nicht viel Geld kostete.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Für 'DAS BESTE' nutzen wir 'lo mejor' (das Beste). Neutrales Konzept. Dieser günstige Preis bei guter Qualität ist erfreuliche Überraschung beim Kauf."
      },
      {
        id: "lo_3",
        question: "No entiendo _____ que me estás diciendo ahora mismo aquí.",
        translation: "Ich verstehe nicht das, was du mir hier gerade sagst.",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "Für 'DAS WAS' nutzen wir 'lo que': neutrales Relativpronomen für ganze Idee. Diese Verständnisschwierigkeit in Kommunikation erfordert Klarstellung oder langsameres Sprechen."
      },
      {
        id: "lo_4",
        question: "_____ difícil fue encontrar un apartamento barato en el centro urbano.",
        translation: "Das Schwierige war, ein günstiges Apartment im Stadtzentrum zu finden.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo difícil' (das Schwierige). Diese Herausforderung der bezahlbaren Zentrumswohnung ist bekanntes urbanes Problem in großen Städten."
      },
      {
        id: "lo_5",
        question: "Dime _____ que pasó ayer en la reunión importante - cuéntamelo todo.",
        translation: "Sag mir das, was gestern im wichtigen Meeting passierte - erzähl mir alles.",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "Neutrales 'lo que pasó' (das, was passierte). Diese neugierige Nachfrage über Meetinginhalte zeigt Interesse oder dass man selbst nicht anwesend war."
      },
      {
        id: "lo_6",
        question: "_____ bueno es que llegamos a tiempo sin ningún retraso finalmente.",
        translation: "Das Gute ist, dass wir schließlich ohne jegliche Verspätung pünktlich ankamen.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo bueno' (das Gute). Diese Erleichterung über pünktliche Ankunft trotz möglicher Hindernisse ist positive Feststellung."
      },
      {
        id: "lo_7",
        question: "_____ peor de la situación es que no hay solución fácil rápida.",
        translation: "Das Schlimmste an der Situation ist, dass es keine einfache schnelle Lösung gibt.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo peor' (das Schlimmste). Diese pessimistische Einschätzung zeigt Komplexität des Problems ohne einfache Auswege."
      },
      {
        id: "lo_8",
        question: "Ya sabes _____ que pienso sobre ese asunto complicado controversial.",
        translation: "Du weißt schon das, was ich über jene komplizierte kontroverse Angelegenheit denke.",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "Neutrales 'lo que pienso' (das, was ich denke). Diese Referenz auf bekannte Meinung spart erneute Erklärung in Diskussion."
      },
      {
        id: "lo_9",
        question: "_____ más interesante del libro es el final sorprendente inesperado.",
        translation: "Das Interessanteste am Buch ist das überraschende unerwartete Ende.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Mit Superlativ: 'lo más interesante' (das Interessanteste). Dieser Plot-Twist am Ende macht Buch besonders lesenswert und bleibt in Erinnerung."
      },
      {
        id: "lo_10",
        question: "_____ triste es que no pudimos vernos antes de tu viaje largo.",
        translation: "Das Traurige ist, dass wir uns vor deiner langen Reise nicht sehen konnten.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo triste' (das Traurige). Diese Bedauern über verpasstes Abschiedstreffen zeigt emotionale Bedeutung persönlicher Verabschiedung."
      },
      {
        id: "lo_11",
        question: "Haz _____ que puedas - nadie te puede pedir más que eso.",
        translation: "Mach das, was du kannst - niemand kann mehr als das von dir verlangen.",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "Neutrales 'lo que puedas' (das, was du kannst). Dieser ermutigende Rat nimmt Druck und akzeptiert individuelle Grenzen der Leistungsfähigkeit."
      },
      {
        id: "lo_12",
        question: "_____ curioso es que nadie se dio cuenta del error obvio grande.",
        translation: "Das Merkwürdige ist, dass niemand den großen offensichtlichen Fehler bemerkte.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo curioso' (das Merkwürdige). Diese Beobachtung kollektiver Blindheit für offensichtlichen Fehler ist ironische Feststellung."
      },
      {
        id: "lo_13",
        question: "No te imaginas _____ cansado que estoy después de trabajar tanto.",
        translation: "Du kannst dir nicht vorstellen, wie müde ich nach so viel Arbeiten bin.",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "Für INTENSITÄT 'lo' + Adjektiv + 'que': 'lo cansado que estoy' (wie müde ich bin). Diese Betonung extremer Erschöpfung durch viel Arbeit sucht Verständnis."
      },
      {
        id: "lo_14",
        question: "_____ de ayer fue un malentendido - no quise ofenderte para nada.",
        translation: "Das von gestern war ein Missverständnis - ich wollte dich überhaupt nicht beleidigen.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo de ayer' (das von gestern = die Sache von gestern). Diese Klarstellung über Missverständnis ist Versuch, Konflikt aufzulösen."
      },
      {
        id: "lo_15",
        question: "_____ increíble es que aprobó sin estudiar nada en absoluto.",
        translation: "Das Unglaubliche ist, dass er ohne überhaupt irgendetwas zu lernen bestand.",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "Neutrales 'lo increíble' (das Unglaubliche). Dieser überraschende Prüfungserfolg ohne Vorbereitung ist entweder Glück oder verstecktes Vorwissen."
      }
    ]
  },

  expresiones_con_hacer: {
    name: "Expresiones con Hacer",
    description: "Hacer-Redewendungen - Wetter, Zeit, Tätigkeiten ausdrücken",
    icon: Droplet,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "hacer_expr_1",
        question: "Hace mucho _____ hoy - ponte protector solar antes de salir.",
        translation: "Heute ist viel Sonne - zieh Sonnencreme an, bevor du rausgehst.",
        options: ["sol", "calor", "frío", "viento"],
        correct: "sol",
        explanation: "Für WETTER nutzen wir 'hacer': 'hace sol' (es ist sonnig). Wörtlich 'macht Sonne'. Dieser Sonnenschutz-Rat bei starker Sonne verhindert Sonnenbrand und Hautschäden."
      },
      {
        id: "hacer_expr_2",
        question: "¿Cuánto tiempo _____ que vives aquí en esta ciudad grande?",
        translation: "Wie lange ist es her, dass du in dieser großen Stadt wohnst?",
        options: ["hace", "haces", "es", "está"],
        correct: "hace",
        explanation: "Für ZEITDAUER nutzen wir 'hace': '¿cuánto tiempo hace que...?' (wie lange ist es her, dass...?). Diese Frage über Wohndauer erkundet Stadtkenntnis und Integration."
      },
      {
        id: "hacer_expr_3",
        question: "Hago ejercicio físico _____ mantenerme en forma saludable siempre.",
        translation: "Ich mache körperliche Übung, um mich immer gesund fit zu halten.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Nach 'hacer ejercicio' für ZWECK: 'para mantenerme' (um mich zu halten). Diese Fitnessmotivation ist gesundheitsbewusste Lebensweise für langfristige Gesundheit."
      },
      {
        id: "hacer_expr_4",
        question: "Hace mucho _____ afuera - ponte un abrigo caliente grueso antes.",
        translation: "Es ist draußen sehr kalt - zieh vorher einen dicken warmen Mantel an.",
        options: ["frío", "calor", "sol", "viento"],
        correct: "frío",
        explanation: "Wetterausdruck: 'hace frío' (es ist kalt). Diese Kälteschutz-Empfehlung ist praktischer Rat für angemessene Winterkleidung."
      },
      {
        id: "hacer_expr_5",
        question: "Hice una pregunta importante al profesor en clase de matemáticas.",
        translation: "Ich stellte dem Lehrer im Mathe-Unterricht eine wichtige Frage.",
        options: ["hice", "hacía", "haré", "haga"],
        correct: "hice",
        explanation: "Für FRAGE STELLEN: 'hacer una pregunta' (Frage machen/stellen). Diese Unterrichtsfrage zeigt aktive Teilnahme und Wunsch nach Verständnis."
      },
      {
        id: "hacer_expr_6",
        question: "Hace buen _____ hoy - perfecto para ir a la playa cercana.",
        translation: "Heute ist gutes Wetter - perfekt, um zum nahen Strand zu gehen.",
        options: ["tiempo", "día", "sol", "calor"],
        correct: "tiempo",
        explanation: "Für allgemeines WETTER: 'hace buen tiempo' (es ist gutes Wetter). Dieser ideale Strandwetter-Tag lädt zu Outdoor-Aktivitäten am Meer ein."
      },
      {
        id: "hacer_expr_7",
        question: "¿Qué haces en tu tiempo libre disponible los fines de semana?",
        translation: "Was machst du in deiner verfügbaren Freizeit an Wochenenden?",
        options: ["haces", "haz", "harás", "hacías"],
        correct: "haces",
        explanation: "Für TÄTIGKEITEN: '¿qué haces?' (was machst du?). Diese Frage über Freizeitgestaltung zeigt Interesse an Hobbys und Interessen der Person."
      },
      {
        id: "hacer_expr_8",
        question: "Hace tres años que no veo a mis abuelos - los extraño mucho.",
        translation: "Es ist drei Jahre her, dass ich meine Großeltern nicht sehe - ich vermisse sie sehr.",
        options: ["hace", "haces", "hacen", "hacía"],
        correct: "hace",
        explanation: "Für ZEITSPANNE: 'hace tres años que...' (es sind drei Jahre, dass...). Diese lange Trennung von Großeltern erzeugt starke Sehnsucht nach Familienbesuch."
      },
      {
        id: "hacer_expr_9",
        question: "Hacemos una fiesta grande este sábado próximo - estás invitado cordialmente.",
        translation: "Wir machen diesen nächsten Samstag eine große Party - du bist herzlich eingeladen.",
        options: ["hacemos", "haremos", "hicimos", "hagamos"],
        correct: "hacemos",
        explanation: "Für VERANSTALTUNG: 'hacer una fiesta' (Party machen/veranstalten). Präsens für nahe Zukunft möglich. Diese Partyeinladung ist freundliche soziale Geste."
      },
      {
        id: "hacer_expr_10",
        question: "Hace mucho _____ - cierra las ventanas para que no entre aire.",
        translation: "Es ist sehr windig - schließ die Fenster, damit keine Luft hereinkommt.",
        options: ["viento", "frío", "calor", "sol"],
        correct: "viento",
        explanation: "Wetterausdruck: 'hace viento' (es ist windig). Diese Fensterschließ-Aufforderung verhindert unangenehmen Luftzug und mögliches Umfallen von Gegenständen."
      },
      {
        id: "hacer_expr_11",
        question: "Hago todo lo posible _____ ayudarte en esta situación complicada.",
        translation: "Ich tue alles Mögliche, um dir in dieser komplizierten Situation zu helfen.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Redewendung 'hacer todo lo posible para' (alles Mögliche tun, um). Diese maximale Hilfsbereitschaft zeigt starkes Engagement für Unterstützung."
      },
      {
        id: "hacer_expr_12",
        question: "Hizo mal _____ en no avisarnos del cambio de horario importante.",
        translation: "Er tat falsch daran, uns nicht über die wichtige Zeitplanänderung zu informieren.",
        options: ["Ø", "el", "lo", "un"],
        correct: "Ø",
        explanation: "Redewendung 'hacer mal en' (falsch tun/Unrecht tun). Ohne Artikel. Diese fehlende Kommunikation über Änderung verursachte wahrscheinlich Verwirrung."
      },
      {
        id: "hacer_expr_13",
        question: "¿Hace cuánto tiempo que estudias español constantemente sin parar?",
        translation: "Wie lange ist es her, dass du konstant ohne Pause Spanisch lernst?",
        options: ["hace", "haces", "es", "está"],
        correct: "hace",
        explanation: "Zeitfrage: '¿hace cuánto que...?' (wie lange ist es her, dass...?). Diese Frage über Lerndauer erkundet Spanisch-Erfahrung und mögliches Niveau."
      },
      {
        id: "hacer_expr_14",
        question: "Hicimos un trato justo - tú me ayudas y yo te ayudo también.",
        translation: "Wir machten einen fairen Deal - du hilfst mir und ich helfe dir auch.",
        options: ["hicimos", "hacemos", "haremos", "hagamos"],
        correct: "hicimos",
        explanation: "Für DEAL/VEREINBARUNG: 'hacer un trato' (Deal machen). Diese gegenseitige Hilfsvereinbarung ist win-win Situation für beide Seiten."
      },
      {
        id: "hacer_expr_15",
        question: "Hizo bien _____ decir la verdad aunque fue difícil para él.",
        translation: "Er tat richtig daran, die Wahrheit zu sagen, obwohl es für ihn schwer war.",
        options: ["en", "de", "por", "para"],
        correct: "en",
        explanation: "Redewendung 'hacer bien en' (richtig tun/gut tun). Diese mutige Ehrlichkeit trotz Schwierigkeit zeigt charakterliche Stärke und Integrität."
      }
    ]
  },

  verbos_percepcion: {
    name: "Verbos de Percepción",
    description: "Ver, oír, sentir + Infinitiv/Gerundio - Wahrnehmung beschreiben",
    icon: Wind,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "percep_1",
        question: "Vi a María _____ en el parque con sus amigas ayer tarde.",
        translation: "Ich sah María gestern Nachmittag im Park mit ihren Freundinnen laufen.",
        options: ["correr", "corriendo", "corre", "corrió"],
        correct: "correr",
        explanation: "Nach Wahrnehmungsverb 'ver' + INFINITIV für VOLLSTÄNDIGE Handlung: 'vi correr' (sah laufen). Auch Gerundio möglich. Dieser Parkbeobachtung zeigt zufällige Begegnung beim Joggen."
      },
      {
        id: "percep_2",
        question: "Oí a los niños _____ en el jardín toda la tarde jugando.",
        translation: "Ich hörte die Kinder den ganzen Nachmittag spielend im Garten.",
        options: ["gritar", "gritando", "gritan", "gritaron"],
        correct: "gritar",
        explanation: "Nach 'oír' + INFINITIV: 'oí gritar' (hörte schreien). Für komplette Handlung. Diese kindlichen Schreie im Garten sind normale Geräusche fröhlichen Spiels."
      },
      {
        id: "percep_3",
        question: "La sentí _____ silenciosamente cuando le di la mala noticia triste.",
        translation: "Ich fühlte sie leise weinen, als ich ihr die traurige schlechte Nachricht gab.",
        options: ["llorar", "llorando", "llora", "lloró"],
        correct: "llorar",
        explanation: "Nach 'sentir' + INFINITIV: 'sentí llorar' (fühlte weinen). Diese emotionale Reaktion auf schlechte Nachricht ist natürliche Trauerreaktion."
      },
      {
        id: "percep_4",
        question: "Los veo _____ por el parque cada mañana temprano de madrugada.",
        translation: "Ich sehe sie jeden frühen Morgen bei Tagesanbruch durch den Park spazieren.",
        options: ["paseando", "pasear", "pasean", "pasearon"],
        correct: "paseando",
        explanation: "Mit GERUNDIO für ANDAUERNDE Handlung: 'veo paseando' (sehe spazierend). Betont Prozess. Diese morgendliche Parkspaziergang-Beobachtung ist regelmäßige Szene."
      },
      {
        id: "percep_5",
        question: "Escuché a alguien _____ a mi puerta anoche tarde muy fuerte.",
        translation: "Ich hörte gestern Abend spät jemanden sehr laut an meiner Tür klopfen.",
        options: ["llamar", "llamando", "llama", "llamó"],
        correct: "llamar",
        explanation: "Nach 'escuchar' + INFINITIV: 'escuché llamar' (hörte klopfen). Dieser spätnächtliche Türklopfer könnte unangenehme Überraschung oder Notfall gewesen sein."
      },
      {
        id: "percep_6",
        question: "Miramos la película _____ juntos toda la familia en casa.",
        translation: "Wir schauten uns den Film zu Hause alle zusammen als Familie an.",
        options: ["Ø", "viendo", "ver", "vista"],
        correct: "Ø",
        explanation: "Nach 'mirar' meist OHNE zusätzliches Verb: 'miramos la película' (schauten Film). Nicht wie Deutsch 'schauten Film ansehen'. Dieser Familienfilmabend ist gemeinsame Unterhaltungszeit."
      },
      {
        id: "percep_7",
        question: "Siento el corazón _____ muy rápido cuando estoy nervioso siempre.",
        translation: "Ich fühle das Herz sehr schnell schlagen, wenn ich immer nervös bin.",
        options: ["latir", "latiendo", "late", "latió"],
        correct: "latir",
        explanation: "Nach 'sentir' + INFINITIV: 'siento latir' (fühle schlagen). Diese körperliche Nervositätsreaktion ist Adrenalinschub bei Stress oder Aufregung."
      },
      {
        id: "percep_8",
        question: "Vi el sol _____ lentamente en el horizonte hermoso colorido.",
        translation: "Ich sah die Sonne langsam am schönen bunten Horizont untergehen.",
        options: ["ponerse", "poniéndose", "se pone", "se puso"],
        correct: "ponerse",
        explanation: "Nach 'ver' mit reflexivem Verb: Infinitiv 'vi ponerse' (sah untergehen). Dieser romantische Sonnenuntergang ist naturschönes Schauspiel."
      },
      {
        id: "percep_9",
        question: "Oigo a mi vecino _____ piano todas las noches - es muy molesto.",
        translation: "Ich höre meinen Nachbarn jede Nacht Klavier spielen - es ist sehr störend.",
        options: ["tocar", "tocando", "toca", "tocó"],
        correct: "tocar",
        explanation: "Nach 'oír' + INFINITIV: 'oigo tocar' (höre spielen). Auch Gerundio möglich. Diese nächtliche Klavierpraxis des Nachbarn stört Nachtruhe."
      },
      {
        id: "percep_10",
        question: "La escucho _____ canciones mientras trabaja en la oficina abierta.",
        translation: "Ich höre sie Lieder singen, während sie im offenen Büro arbeitet.",
        options: ["cantar", "cantando", "canta", "cantó"],
        correct: "cantar",
        explanation: "Nach 'escuchar' beide möglich: 'escucho cantar' oder 'cantando'. Diese Gesangsbegleitung bei Arbeit zeigt gute Laune oder Musikliebe."
      },
      {
        id: "percep_11",
        question: "Sentí la tierra _____ durante el terremoto fuerte de ayer noche.",
        translation: "Ich fühlte die Erde während des starken Erdbebens gestern Nacht beben.",
        options: ["temblar", "temblando", "tiembla", "tembló"],
        correct: "temblar",
        explanation: "Nach 'sentir' + INFINITIV: 'sentí temblar' (fühlte beben). Dieses Erdbebenerlebnis ist beängstigende Naturgewalt-Erfahrung."
      },
      {
        id: "percep_12",
        question: "Los vemos _____ por la calle principal cada domingo religiosamente.",
        translation: "Wir sehen sie jeden Sonntag religiös durch die Hauptstraße spazieren.",
        options: ["paseando", "pasear", "pasean", "pasearon"],
        correct: "paseando",
        explanation: "Mit GERUNDIO betont Prozess: 'vemos paseando' (sehen spazierend). Diese regelmäßige Sonntagsbeobachtung ist erkennbares Muster."
      },
      {
        id: "percep_13",
        question: "Oí las campanas _____ a lo lejos desde mi casa lejana.",
        translation: "Ich hörte die Glocken aus der Ferne von meinem entfernten Haus läuten.",
        options: ["sonar", "sonando", "suenan", "sonaron"],
        correct: "sonar",
        explanation: "Nach 'oír' + INFINITIV: 'oí sonar' (hörte läuten). Dieser ferne Glockenklang schafft friedliche dörfliche Atmosphäre."
      },
      {
        id: "percep_14",
        question: "Vimos a un perro _____ desesperadamente ayuda en medio de la calle.",
        translation: "Wir sahen einen Hund in der Straßenmitte verzweifelt Hilfe suchen.",
        options: ["buscar", "buscando", "busca", "buscó"],
        correct: "buscar",
        explanation: "Nach 'ver' + INFINITIV: 'vimos buscar' (sahen suchen). Diese Beobachtung des Hundes in Not könnte zu Rettungsaktion geführt haben."
      },
      {
        id: "percep_15",
        question: "Escucho la lluvia _____ suavemente en el tejado de casa ahora.",
        translation: "Ich höre den Regen jetzt sanft auf dem Hausdach fallen.",
        options: ["caer", "cayendo", "cae", "cayó"],
        correct: "caer",
        explanation: "Nach 'escuchar' beide möglich: 'escucho caer' oder 'cayendo' (höre fallen). Dieses sanfte Regengeräusch auf Dach ist beruhigender, entspannender Naturklang."
      }
    ]
  },

  expresiones_con_dar: {
    name: "Expresiones con Dar",
    description: "Dar-Redewendungen - Bedeutungen über 'geben' hinaus",
    icon: Mountain,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "dar_expr_1",
        question: "Me da igual lo que pienses - haré lo que quiera yo.",
        translation: "Es ist mir egal, was du denkst - ich werde tun, was ich will.",
        options: ["da", "doy", "das", "dan"],
        correct: "da",
        explanation: "Redewendung 'dar igual' (egal sein). Wörtlich 'gibt gleich'. Diese Gleichgültigkeit gegenüber fremder Meinung zeigt Unabhängigkeit oder möglicherweise Sturheit."
      },
      {
        id: "dar_expr_2",
        question: "Le di las _____ por la invitación amable a su fiesta bonita.",
        translation: "Ich dankte ihm für die freundliche Einladung zu seiner schönen Party.",
        options: ["gracias", "felicidades", "razón", "pena"],
        correct: "gracias",
        explanation: "Redewendung 'dar las gracias' (danken). Wörtlich 'Danke geben'. Diese höfliche Dankbarkeit für Einladung ist gute soziale Etikette."
      },
      {
        id: "dar_expr_3",
        question: "Me da mucha _____ ver a gente sufrir sin poder ayudar nada.",
        translation: "Es macht mich sehr traurig, Leute leiden zu sehen, ohne irgendetwas helfen zu können.",
        options: ["pena", "igual", "vergüenza", "asco"],
        correct: "pena",
        explanation: "Redewendung 'dar pena' (traurig machen/leid tun). Diese Empathie für Leidende ohne Hilfsmöglichkeit ist frustrierende menschliche Ohnmacht."
      },
      {
        id: "dar_expr_4",
        question: "Le dimos la enhorabuena _____ haber ganado el premio importante.",
        translation: "Wir gratulierten ihm dazu, den wichtigen Preis gewonnen zu haben.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Redewendung 'dar la enhorabuena por' (gratulieren für). Diese Glückwünsche zum Preisgewinn sind freudige Anerkennung seiner Leistung."
      },
      {
        id: "dar_expr_5",
        question: "Ese restaurante me da mala _____ - no confío en la higiene.",
        translation: "Dieses Restaurant macht mir schlechten Eindruck - ich vertraue der Hygiene nicht.",
        options: ["espina", "pena", "igual", "vergüenza"],
        correct: "espina",
        explanation: "Redewendung 'dar mala espina' (schlechten Eindruck machen/misstrauen). Wörtlich 'schlechten Dorn geben'. Dieses Misstrauen in Restauranthygiene ist berechtigte Vorsicht."
      },
      {
        id: "dar_expr_6",
        question: "Me da _____ hablar en público delante de mucha gente desconocida.",
        translation: "Es ist mir peinlich, öffentlich vor vielen unbekannten Leuten zu sprechen.",
        options: ["vergüenza", "igual", "pena", "miedo"],
        correct: "vergüenza",
        explanation: "Redewendung 'dar vergüenza' (peinlich sein). Diese Scham bei öffentlichem Reden ist verbreitete soziale Angst, die viele Menschen haben."
      },
      {
        id: "dar_expr_7",
        question: "Esta comida me da _____ - huele muy mal y parece estropeada.",
        translation: "Dieses Essen ekelt mich an - es riecht sehr schlecht und sieht verdorben aus.",
        options: ["asco", "igual", "pena", "miedo"],
        correct: "asco",
        explanation: "Redewendung 'dar asco' (Ekel erregen/anekeln). Dieser schlechte Geruch und verdorbenes Aussehen sind klare Warnsignale, Essen nicht zu konsumieren."
      },
      {
        id: "dar_expr_8",
        question: "Le di un abrazo fuerte a mi amigo al verlo después de años.",
        translation: "Ich gab meinem Freund eine feste Umarmung, als ich ihn nach Jahren sah.",
        options: ["di", "doy", "daré", "daba"],
        correct: "di",
        explanation: "Für Umarmung: 'dar un abrazo' (Umarmung geben). Diese herzliche Begrüßung nach langer Trennung drückt Freude über Wiedersehen aus."
      },
      {
        id: "dar_expr_9",
        question: "Me da mucha _____ que la gente tire basura en la calle sucia.",
        translation: "Es ärgert mich sehr, dass Leute Müll auf die schmutzige Straße werfen.",
        options: ["rabia", "igual", "pena", "vergüenza"],
        correct: "rabia",
        explanation: "Redewendung 'dar rabia' (ärgern/wütend machen). Dieser Ärger über Umweltverschmutzung durch achtloses Wegwerfen ist berechtigte moralische Empörung."
      },
      {
        id: "dar_expr_10",
        question: "¿Te da _____ salir solo de noche por ese barrio peligroso?",
        translation: "Hast du Angst, nachts allein durch jenes gefährliche Viertel zu gehen?",
        options: ["miedo", "igual", "pena", "asco"],
        correct: "miedo",
        explanation: "Redewendung 'dar miedo' (Angst machen). Diese berechtigte Furcht vor gefährlichem Nachtviertel ist Sicherheitsinstinkt."
      },
      {
        id: "dar_expr_11",
        question: "Le dieron la noticia terrible _____ teléfono - fue muy duro difícil.",
        translation: "Sie gaben ihm die schreckliche Nachricht per Telefon - es war sehr hart schwer.",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "Für MITTEL: 'por teléfono' (per Telefon). Diese unpersönliche Übermittlung schlimmer Nachricht ist weniger feinfühlig als persönlich."
      },
      {
        id: "dar_expr_12",
        question: "Dale _____ a tu hermano de mi parte - hace tiempo que no lo veo.",
        translation: "Richte deinem Bruder Grüße von mir aus - ich sehe ihn schon lange nicht.",
        options: ["recuerdos", "gracias", "miedo", "igual"],
        correct: "recuerdos",
        explanation: "Redewendung 'dar recuerdos' (Grüße ausrichten). Diese Grußübermittlung pflegt soziale Verbindung trotz fehlenden direkten Kontakts."
      },
      {
        id: "dar_expr_13",
        question: "Esta situación me da mala _____ - algo no está bien aquí.",
        translation: "Diese Situation gibt mir schlechtes Gefühl - etwas stimmt hier nicht.",
        options: ["espina", "pena", "igual", "rabia"],
        correct: "espina",
        explanation: "Redewendung 'dar mala espina' (misstrauisch machen). Dieses Bauchgefühl über verdächtige Situation ist wichtiger Instinkt für Gefahrenerkennung."
      },
      {
        id: "dar_expr_14",
        question: "Me da _____ dejar este trabajo - he estado aquí diez años completos.",
        translation: "Es fällt mir schwer, diese Arbeit zu verlassen - ich war hier volle zehn Jahre.",
        options: ["pena", "igual", "miedo", "asco"],
        correct: "pena",
        explanation: "Redewendung 'dar pena' (schwerfallen/leid tun). Diese emotionale Schwierigkeit des Abschiednehmens nach Dekade zeigt starke Arbeitsplatzbindung."
      },
      {
        id: "dar_expr_15",
        question: "¿Te da tiempo de terminar todo antes de la fecha límite estricta?",
        translation: "Reicht dir die Zeit, alles vor der strikten Deadline zu beenden?",
        options: ["da", "das", "doy", "dan"],
        correct: "da",
        explanation: "Redewendung 'dar tiempo' (Zeit reichen). Wörtlich 'Zeit geben'. Diese Frage über Machbarkeit in verfügbarer Zeit testet realistische Zeitplanung."
      }
    ]
  }
};

export default part21Categories;
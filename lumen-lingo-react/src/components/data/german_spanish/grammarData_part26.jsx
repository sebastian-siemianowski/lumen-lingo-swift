
/**
 * GERMAN → SPANISH GRAMMAR - PART 26
 * 4 categories, 15 questions each
 */

import { MessagesSquare, Waves, Eclipse, Boxes } from "lucide-react";

export const part26Categories = {
  oraciones_consecutivas: {
    name: "Oraciones Consecutivas",
    description: "Konsekutivsätze - tan...que, tanto...que - Folgen ausdrücken",
    icon: Waves,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "consec_1",
        question: "Estoy tan cansado _____ no puedo ni moverme del sofá ahora.",
        translation: "Ich bin so müde, dass ich mich jetzt nicht mal vom Sofa bewegen kann.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Für SO...DASS nutzen wir 'tan...que': 'tan cansado que' (so müde, dass). Diese extreme Erschöpfung macht jede Bewegung unmöglich."
      },
      {
        id: "consec_2",
        question: "Habla tan rápido _____ nadie puede entenderle en absoluto nunca.",
        translation: "Er spricht so schnell, dass ihn niemand jemals überhaupt verstehen kann.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Konsekutiv: 'tan rápido que' (so schnell, dass). Diese übermäßige Sprechgeschwindigkeit ist Kommunikationsbarriere."
      },
      {
        id: "consec_3",
        question: "Comió tanto _____ se sintió mal del estómago después de cenar.",
        translation: "Er aß so viel, dass er sich nach dem Abendessen schlecht vom Magen fühlte.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Mit Verb 'tanto que': 'comió tanto que' (aß so viel, dass). Diese Überernährung führte zu Verdauungsproblemen."
      },
      {
        id: "consec_4",
        question: "Tengo tantos deberes _____ no sé por dónde empezar primero.",
        translation: "Ich habe so viele Hausaufgaben, dass ich nicht weiß, wo ich zuerst anfangen soll.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Mit Plural: 'tantos deberes que' (so viele Hausaufgaben, dass). Diese Überlastung durch Aufgaben erzeugt Orientierungslosigkeit."
      },
      {
        id: "consec_5",
        question: "Hace tanto calor _____ no puedo dormir bien por las noches.",
        translation: "Es ist so heiß, dass ich nachts nicht gut schlafen kann.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Mit unzählbar: 'tanto calor que' (so viel Hitze, dass). Diese nächtliche Hitze stört Schlafqualität erheblich."
      },
      {
        id: "consec_6",
        question: "Era tan difícil _____ nadie pudo resolverlo correctamente solo.",
        translation: "Es war so schwer, dass niemand es korrekt allein lösen konnte.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Konsekutiv Vergangenheit: 'tan difícil que nadie pudo'. Diese extreme Schwierigkeit überstieg alle Fähigkeiten."
      },
      {
        id: "consec_7",
        question: "Tiene tanta paciencia _____ puede enseñar a niños pequeños difíciles.",
        translation: "Er hat so viel Geduld, dass er schweren kleinen Kindern unterrichten kann.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Feminin unzählbar: 'tanta paciencia que' (so viel Geduld, dass). Diese Geduld ist essentielle Lehrerqualität für kleine Kinder."
      },
      {
        id: "consec_8",
        question: "Estudiaron tanto _____ aprobaron todos con excelentes notas altas.",
        translation: "Sie lernten so viel, dass alle mit ausgezeichneten hohen Noten bestanden.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Mit Verb: 'estudiaron tanto que' (lernten so viel, dass). Diese intensive Lernanstrengung führte zu kollektivem Erfolg."
      },
      {
        id: "consec_9",
        question: "Llovió tanto ayer _____ se inundaron varias calles de la ciudad.",
        translation: "Es regnete gestern so viel, dass mehrere Straßen der Stadt überflutet wurden.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Intensität: 'llovió tanto que' (regnete so viel, dass). Dieser extreme Regen verursachte urbane Überschwemmungen."
      },
      {
        id: "consec_10",
        question: "Es tan inteligente _____ resuelve problemas complejos muy rápidamente.",
        translation: "Er ist so intelligent, dass er komplexe Probleme sehr schnell löst.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Konsekutiv: 'tan inteligente que' (so intelligent, dass). Diese außergewöhnliche Intelligenz zeigt sich in schneller Problemlösung."
      },
      {
        id: "consec_11",
        question: "Gritó tan fuerte _____ todos se asustaron mucho en la sala.",
        translation: "Er schrie so laut, dass alle im Raum sich sehr erschreckten.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Konsekutiv: 'tan fuerte que' (so laut, dass). Dieser plötzliche laute Schrei verursachte kollektiven Schrecken."
      },
      {
        id: "consec_12",
        question: "Tenía tanta sed _____ bebí dos litros de agua fría seguidos.",
        translation: "Ich hatte so viel Durst, dass ich zwei Liter kaltes Wasser hintereinander trank.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Feminin: 'tanta sed que' (so viel Durst, dass). Dieser extreme Durst nach Dehydrierung erforderte massive Flüssigkeitsaufnahme."
      },
      {
        id: "consec_13",
        question: "La película fue tan aburrida _____ me dormí a mitad de ella.",
        translation: "Der Film war so langweilig, dass ich mittendrin einschlief.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Konsekutiv: 'tan aburrida que' (so langweilig, dass). Diese Langeweile war so stark, dass sie zu Schlaf führte."
      },
      {
        id: "consec_14",
        question: "Hay tantas personas aquí _____ no podemos movernos libremente bien.",
        translation: "Es sind so viele Personen hier, dass wir uns nicht gut frei bewegen können.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Plural: 'tantas personas que' (so viele Personen, dass). Diese Überfüllung schränkt Bewegungsfreiheit stark ein."
      },
      {
        id: "consec_15",
        question: "Corrió tanto _____ llegó sin aliento completamente agotado exhausto.",
        translation: "Er rannte so viel, dass er komplett erschöpft außer Atem ankam.",
        options: ["que", "como", "cual", "cuando"],
        correct: "que",
        explanation: "Mit Verb: 'corrió tanto que' (rannte so viel, dass). Diese intensive Anstrengung beim Rennen führte zu völliger Atemlosigkeit."
      }
    ]
  },

  verbos_comunicacion: {
    name: "Verbos de Comunicación",
    description: "Kommunikationsverben - decir, contar, hablar, comentar unterscheiden",
    icon: MessagesSquare,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "comun_1",
        question: "Me _____ que vendrías a la fiesta - ¿por qué no viniste?",
        translation: "Du sagtest mir, dass du zur Party kommen würdest - warum kamst du nicht?",
        options: ["dijiste", "contaste", "hablaste", "comentaste"],
        correct: "dijiste",
        explanation: "Für SAGEN (direkt) nutzen wir 'decir': 'me dijiste que...' (sagtest mir, dass...). Diese nicht eingehaltene Zusage führt zu Enttäuschung und Frage."
      },
      {
        id: "comun_2",
        question: "Él me _____ una historia interesante sobre su viaje a Asia.",
        translation: "Er erzählte mir eine interessante Geschichte über seine Asienreise.",
        options: ["contó", "dijo", "habló", "comentó"],
        correct: "contó",
        explanation: "Für ERZÄHLEN nutzen wir 'contar': 'me contó una historia' (erzählte mir Geschichte). Diese Reisegeschichte ist narrativer Erfahrungsbericht."
      },
      {
        id: "comun_3",
        question: "Necesito _____ contigo sobre un asunto importante personal urgente.",
        translation: "Ich muss mit dir über eine wichtige persönliche dringende Angelegenheit sprechen.",
        options: ["hablar", "decir", "contar", "comentar"],
        correct: "hablar",
        explanation: "Für SPRECHEN ÜBER nutzen wir 'hablar': 'hablar contigo sobre' (mit dir sprechen über). Mit 'de' oder 'sobre'. Diese Gesprächsankündigung deutet auf Ernstes hin."
      },
      {
        id: "comun_4",
        question: "Me _____ que no podría venir - estaba muy ocupado trabajando.",
        translation: "Er sagte mir, dass er nicht kommen könnte - er war sehr mit Arbeiten beschäftigt.",
        options: ["dijo", "contó", "habló", "comentó"],
        correct: "dijo",
        explanation: "Für MITTEILEN: 'me dijo que' (sagte mir, dass). Diese Absage wegen Arbeit ist ehrliche Begründung für Nichtteilnahme."
      },
      {
        id: "comun_5",
        question: "_____ de política con mis amigos frecuentemente cada semana varios.",
        translation: "Ich spreche häufig jede Woche mit mehreren meiner Freunde über Politik.",
        options: ["Hablo", "Digo", "Cuento", "Comento"],
        correct: "Hablo",
        explanation: "Für SPRECHEN ÜBER Thema: 'hablar de política' (über Politik sprechen). Diese politischen Diskussionen sind regelmäßiger Austausch."
      },
      {
        id: "comun_6",
        question: "¿Qué te _____ el médico sobre tu salud general en la consulta?",
        translation: "Was sagte dir der Arzt über deine allgemeine Gesundheit in der Sprechstunde?",
        options: ["dijo", "contó", "habló", "comentó"],
        correct: "dijo",
        explanation: "Für AUSSAGE: '¿qué te dijo?' (was sagte er dir?). Diese Frage über ärztliche Diagnose zeigt Besorgnis um Gesundheit."
      },
      {
        id: "comun_7",
        question: "Ella me _____ un chiste muy gracioso divertido que me hizo reír.",
        translation: "Sie erzählte mir einen sehr lustigen witzigen Witz, der mich zum Lachen brachte.",
        options: ["contó", "dijo", "habló", "comentó"],
        correct: "contó",
        explanation: "Für WITZ ERZÄHLEN: 'contar un chiste' (Witz erzählen). Diese humorvolle Interaktion brachte Freude und Lachen."
      },
      {
        id: "comun_8",
        question: "Solo _____ español en casa con mi familia - nada de inglés.",
        translation: "Ich spreche zu Hause mit meiner Familie nur Spanisch - kein Englisch.",
        options: ["hablo", "digo", "cuento", "comento"],
        correct: "hablo",
        explanation: "Für SPRACHE SPRECHEN: 'hablar español' (Spanisch sprechen). Diese Einsprachigkeit zu Hause fördert Spracherhaltung."
      },
      {
        id: "comun_9",
        question: "Me _____ que había tenido un día muy difícil estresante en trabajo.",
        translation: "Er erzählte mir, dass er einen sehr schweren stressigen Tag bei der Arbeit gehabt hatte.",
        options: ["contó", "dijo", "habló", "comentó"],
        correct: "contó",
        explanation: "Für BERICHTEN: 'me contó que' (erzählte mir, dass). Dieser Tagesbericht zeigt Bedürfnis, Stress zu teilen."
      },
      {
        id: "comun_10",
        question: "_____ que sí con la cabeza - no necesitas decir nada verbal.",
        translation: "Sag ja mit dem Kopf - du brauchst nichts verbal zu sagen.",
        options: ["Di", "Cuenta", "Habla", "Comenta"],
        correct: "Di",
        explanation: "Imperativ von 'decir': 'di que sí' (sag ja). Diese nonverbale Kommunikationsanweisung nutzt Körpersprache."
      },
      {
        id: "comun_11",
        question: "Ella siempre me _____ sus problemas personales - confía en mí.",
        translation: "Sie erzählt mir immer ihre persönlichen Probleme - sie vertraut mir.",
        options: ["cuenta", "dice", "habla", "comenta"],
        correct: "cuenta",
        explanation: "Für ANVERTRAUEN: 'me cuenta sus problemas' (erzählt mir Probleme). Dieses Vertrauen zeigt enge Freundschaft."
      },
      {
        id: "comun_12",
        question: "Él me _____ al oído un secreto importante que nadie sabe.",
        translation: "Er sagte mir ins Ohr ein wichtiges Geheimnis, das niemand weiß.",
        options: ["dijo", "contó", "habló", "comentó"],
        correct: "dijo",
        explanation: "Für FLÜSTERN: 'dijo al oído' (sagte ins Ohr). Diese geheime Mitteilung erfordert Diskretion und Nähe."
      },
      {
        id: "comun_13",
        question: "No me _____ mentiras - siempre quiero saber la verdad completa.",
        translation: "Erzähl mir keine Lügen - ich will immer die komplette Wahrheit wissen.",
        options: ["cuentes", "digas", "hables", "comentes"],
        correct: "cuentes",
        explanation: "Für ERZÄHLEN (Negativ): 'no me cuentes mentiras'. Dieser Wunsch nach Ehrlichkeit ist Grundlage von Vertrauen."
      },
      {
        id: "comun_14",
        question: "¿Puedes _____ más despacio? No te entiendo bien cuando hablas rápido.",
        translation: "Kannst du langsamer sprechen? Ich verstehe dich nicht gut, wenn du schnell sprichst.",
        options: ["hablar", "decir", "contar", "comentar"],
        correct: "hablar",
        explanation: "Für SPRECHEN (Art): 'hablar más despacio' (langsamer sprechen). Diese Bitte verbessert Verständlichkeit in Kommunikation."
      },
      {
        id: "comun_15",
        question: "Me _____ su opinión honesta sobre mi presentación del proyecto ayer.",
        translation: "Er sagte mir seine ehrliche Meinung über meine gestrige Projektpräsentation.",
        options: ["dio", "dijo", "contó", "habló"],
        correct: "dio",
        explanation: "Für MEINUNG GEBEN: 'dar su opinión' nicht 'decir opinión'. Diese ehrliche Rückmeldung ist wertvolles Feedback für Verbesserung."
      }
    ]
  },

  estar_expresiones: {
    name: "Expresiones con Estar",
    description: "Estar-Redewendungen - estar de, estar para, estar por",
    icon: Eclipse,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "est_expr_1",
        question: "Estoy _____ acuerdo contigo - tienes toda la razón absoluta completa.",
        translation: "Ich bin mit dir einverstanden - du hast völlig absolut komplett Recht.",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "Feste Phrase 'estar de acuerdo' (einverstanden sein). Mit 'de'. Diese Zustimmung ist vollständige Übereinstimmung in Meinung."
      },
      {
        id: "est_expr_2",
        question: "Está _____ llover - el cielo está muy oscuro y nublado pesado.",
        translation: "Es ist im Begriff zu regnen - der Himmel ist sehr dunkel und schwer bewölkt.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für KURZ DAVOR: 'estar por llover' (im Begriff zu regnen). Dieser unmittelbar bevorstehende Regen ist an Wolken erkennbar."
      },
      {
        id: "est_expr_3",
        question: "No estoy _____ bromas ahora - es un asunto muy serio importante.",
        translation: "Ich bin jetzt nicht für Witze - es ist eine sehr ernste wichtige Angelegenheit.",
        options: ["para", "por", "de", "en"],
        correct: "para",
        explanation: "Phrase 'estar para bromas' (für Scherze aufgelegt sein). Mit Negation für Ernst. Diese ernste Stimmung duldet keinen Humor."
      },
      {
        id: "est_expr_4",
        question: "Estamos _____ vacaciones hasta el próximo lunes - disfrutando mucho.",
        translation: "Wir sind bis nächsten Montag in Urlaub - genießen sehr.",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "Für IN URLAUB SEIN: 'estar de vacaciones' (in Ferien sein). Diese Urlaubszeit ist Erholungsperiode vom Arbeitsalltag."
      },
      {
        id: "est_expr_5",
        question: "El edificio está _____ construir todavía - no han empezado aún.",
        translation: "Das Gebäude ist noch zu bauen - sie haben noch nicht angefangen.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für NOCH ZU TUN: 'está por construir' (ist noch zu bauen). Diese ausstehende Bauarbeit wartet auf Beginn."
      },
      {
        id: "est_expr_6",
        question: "Estoy _____ viaje toda la próxima semana entera por trabajo necesario.",
        translation: "Ich bin die ganze nächste Woche wegen notwendiger Arbeit auf Reise.",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "Für AUF REISE: 'estar de viaje' (auf Reise sein). Diese Geschäftsreise ganze Woche ist berufliche Verpflichtung."
      },
      {
        id: "est_expr_7",
        question: "Está _____ moda llevar ese tipo de ropa este año actual.",
        translation: "Es ist dieses aktuelle Jahr in Mode, diese Art Kleidung zu tragen.",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "Für IN MODE: 'estar de moda' (in Mode sein). Dieser aktuelle Modetrend beeinflusst Kleidungswahl vieler Menschen."
      },
      {
        id: "est_expr_8",
        question: "La comida está _____ servir - siéntense todos a la mesa ya.",
        translation: "Das Essen ist zum Servieren bereit - setzt euch alle schon an den Tisch.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für BEREIT ZU: 'estar para servir' (bereit zum Servieren). Dieser Essensaufruf signalisiert Mahlzeitbeginn."
      },
      {
        id: "est_expr_9",
        question: "No estoy _____ hacer eso ahora - estoy demasiado ocupado cansado.",
        translation: "Ich bin jetzt nicht dazu aufgelegt, das zu machen - ich bin zu beschäftigt müde.",
        options: ["para", "por", "de", "en"],
        correct: "para",
        explanation: "Für AUFGELEGT ZU: 'no estar para hacer' (nicht aufgelegt zu machen). Diese Ablehnung basiert auf Überlastung."
      },
      {
        id: "comun_10",
        question: "Estoy _____ buen humor hoy - todo me sale bien perfecto.",
        translation: "Ich bin heute gut gelaunt - alles gelingt mir perfekt gut.",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "Für GELAUNT SEIN: 'estar de buen humor' (gut gelaunt sein). Diese positive Stimmung macht Tag angenehmer."
      },
      {
        id: "est_expr_11",
        question: "Estamos _____ hacer un viaje largo - solo falta decidir el destino.",
        translation: "Wir sind dabei, eine lange Reise zu machen - es fehlt nur, das Ziel zu entscheiden.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für DABEI SEIN: 'estar por hacer' (dabei sein zu machen). Diese Reiseplanung ist fast fertig, nur Ziel fehlt noch."
      },
      {
        id: "est_expr_12",
        question: "El proyecto está _____ terminar - faltan solo pequeños detalles finales.",
        translation: "Das Projekt ist kurz vor Beendigung - es fehlen nur kleine Enddetails.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für KURZ VOR: 'está por terminar' (ist im Begriff zu enden). Diese Projektphase kurz vor Abschluss ist Endspurt."
      },
      {
        id: "est_expr_13",
        question: "Estoy _____ mal humor porque no dormí bien anoche en absoluto.",
        translation: "Ich bin schlecht gelaunt, weil ich gestern Nacht überhaupt nicht gut schlief.",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "Für SCHLECHT GELAUNT: 'estar de mal humor' (schlecht gelaunt sein). Dieser Schlafmangel beeinflusst Stimmung negativ."
      },
      {
        id: "est_expr_14",
        question: "El museo está _____ reformas hasta el próximo mes que viene.",
        translation: "Das Museum ist bis nächsten kommenden Monat wegen Renovierung geschlossen.",
        options: ["en", "de", "a", "por"],
        correct: "en",
        explanation: "Für IN RENOVATION: 'estar en reformas' (in Renovierung sein). Diese temporäre Schließung verbessert Museum für Zukunft."
      },
      {
        id: "est_expr_15",
        question: "Estoy _____ salir de casa - dame solo un minuto más breve.",
        translation: "Ich bin dabei rauszugehen - gib mir nur noch eine kurze Minute.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für DABEI/KURZ DAVOR: 'estar por salir' (dabei sein rauszugehen). Diese Abfahrtsbereitschaft braucht nur noch Moment."
      }
    ]
  },

  parecer_construcciones: {
    name: "Construcciones con Parecer",
    description: "Parecer-Konstruktionen - scheinen, aussehen, wirken unterscheiden",
    icon: Boxes,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "parec_1",
        question: "Me parece que esta película _____ muy interesante y profunda educativa.",
        translation: "Mir scheint, dass dieser Film sehr interessant und tief lehrreich ist.",
        options: ["es", "sea", "será", "era"],
        correct: "es",
        explanation: "Nach 'me parece que' (BEJAHEND): Indikativ 'es' (ist). Diese positive Filmeinschätzung basiert auf Inhaltsbeschreibung."
      },
      {
        id: "parec_2",
        question: "No me parece que _____ una buena idea salir tan tarde noche.",
        translation: "Mir scheint es nicht, dass es eine gute Idee ist, so spät nachts rauszugehen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'no me parece que' (NEGIERT): Subjuntivo 'sea' (sei). Dieser Rat gegen spätes Ausgehen basiert auf Sicherheitsbedenken."
      },
      {
        id: "parec_3",
        question: "Parece que _____ a llover pronto - las nubes están muy oscuras.",
        translation: "Es scheint, dass es bald regnen wird - die Wolken sind sehr dunkel.",
        options: ["va", "vaya", "irá", "fuera"],
        correct: "va",
        explanation: "Nach 'parece que' (ES SCHEINT): meist Indikativ 'va a llover'. Diese Wettervorhersage ist Beobachtung von Wolken."
      },
      {
        id: "parec_4",
        question: "Te ves cansado - pareces _____ trabajado mucho toda la semana entera.",
        translation: "Du siehst müde aus - du scheinst die ganze Woche sehr viel gearbeitet zu haben.",
        options: ["haber", "has", "hayas", "habías"],
        correct: "haber",
        explanation: "Nach 'parecer' + INFINITIV (gleiches Subjekt): 'pareces haber trabajado' (scheinst gearbeitet zu haben). Dieser sichtbare Erschöpfungszustand deutet auf Überarbeitung."
      },
      {
        id: "parec_5",
        question: "¿Qué te parece si _____ al cine esta noche a ver algo?",
        translation: "Was hältst du davon, wenn wir heute Abend ins Kino gehen, um etwas zu sehen?",
        options: ["vamos", "vayamos", "iremos", "fuéramos"],
        correct: "vamos",
        explanation: "Nach '¿qué te parece si...?' (was hältst du davon wenn): meist Indikativ 'vamos' (wir gehen). Dieser Kinovorschlag ist lockere Einladung."
      },
      {
        id: "parec_6",
        question: "Parece mentira que ya _____ terminado el curso académico escolar.",
        translation: "Es scheint unglaublich, dass das Schuljahr schon beendet ist.",
        options: ["hayamos", "hemos", "habremos", "habíamos"],
        correct: "hayamos",
        explanation: "Nach 'parecer mentira que': Subjuntivo 'hayamos terminado' (beendet haben). Diese Überraschung über Schuljahresende zeigt schnell verflogene Zeit."
      },
      {
        id: "parec_7",
        question: "A mí me parece bien que _____ esa decisión importante - te apoyo.",
        translation: "Mir scheint es gut, dass du jene wichtige Entscheidung triffst - ich unterstütze dich.",
        options: ["tomes", "tomas", "tomarás", "tomabas"],
        correct: "tomes",
        explanation: "Nach 'parecer bien que': Subjuntivo 'tomes' (triffst). Diese Unterstützung deiner Entscheidung ist Vertrauensbeweis."
      },
      {
        id: "parec_8",
        question: "Ella parece _____ enferma - deberías llevarla al médico pronto.",
        translation: "Sie scheint krank zu sein - du solltest sie bald zum Arzt bringen.",
        options: ["estar", "está", "esté", "estaba"],
        correct: "estar",
        explanation: "Mit INFINITIV (gleiches Subjekt): 'parece estar enferma' (scheint krank zu sein). Diese Krankheitszeichen erfordern ärztliche Untersuchung."
      },
      {
        id: "parec_9",
        question: "Me parece increíble que no _____ nada de esto antes hoy.",
        translation: "Es scheint mir unglaublich, dass du heute vorher nichts davon wusstest.",
        options: ["supieras", "sabes", "sabías", "sepas"],
        correct: "supieras",
        explanation: "Nach 'parecer increíble que' (Vergangenheit): Imperfecto Subjuntivo. Oder 'sepas' für Gegenwart. Diese Unwissenheit ist überraschend."
      },
      {
        id: "parec_10",
        question: "Parece como si _____ visto un fantasma - estás muy pálido blanco.",
        translation: "Es scheint, als ob du einen Geist gesehen hättest - du bist sehr blass weiß.",
        options: ["hubieras", "has", "habías", "hayas"],
        correct: "hubieras",
        explanation: "Nach 'parecer como si': Subjuntivo 'hubieras visto' (hättest gesehen). Dieser Schockzustand ist an blassem Gesicht sichtbar."
      },
      {
        id: "parec_11",
        question: "¿Qué te parece este restaurante nuevo del barrio para cenar?",
        translation: "Was hältst du von diesem neuen Restaurant im Viertel zum Abendessen?",
        options: ["parece", "parezca", "parecerá", "parecía"],
        correct: "parece",
        explanation: "Frage nach MEINUNG: '¿qué te parece?' (was hältst du von?). Diese Restaurant-Vorschlagsfrage testet Interesse an neuem Lokal."
      },
      {
        id: "parec_12",
        question: "No me parece normal que siempre _____ tarde a todas partes.",
        translation: "Es scheint mir nicht normal, dass er immer überall zu spät kommt.",
        options: ["llegue", "llega", "llegará", "llegaba"],
        correct: "llegue",
        explanation: "Nach 'no parecer normal que': Subjuntivo 'llegue' (komme). Diese chronische Unpünktlichkeit wird als abnormal bewertet."
      },
      {
        id: "parec_13",
        question: "Pareces _____ muy feliz últimamente - ¿te pasa algo bueno especial?",
        translation: "Du scheinst in letzter Zeit sehr glücklich zu sein - passiert dir etwas Gutes Besonderes?",
        options: ["estar", "estás", "estés", "estabas"],
        correct: "estar",
        explanation: "Mit Infinitiv: 'pareces estar feliz' (scheinst glücklich zu sein). Diese sichtbare Freude weckt Neugier über Grund."
      },
      {
        id: "parec_14",
        question: "Me parece mentira que _____ tan joven - pareces mucho mayor adulto.",
        translation: "Es scheint mir unglaublich, dass du so jung bist - du scheinst viel erwachsener älter.",
        options: ["seas", "eres", "serás", "eras"],
        correct: "seas",
        explanation: "Nach 'parecer mentira que': Subjuntivo 'seas' (du seist). Diese Überraschung über Alter basiert auf reifem Aussehen."
      },
      {
        id: "parec_15",
        question: "Parece ser que _____ problemas técnicos con el servidor principal.",
        translation: "Es scheint, dass es technische Probleme mit dem Hauptserver gibt.",
        options: ["hay", "haya", "habrá", "había"],
        correct: "hay",
        explanation: "Nach 'parecer ser que': meist Indikativ 'hay' (es gibt). Diese technische Störung erklärt mögliche Funktionsprobleme."
      }
    ]
  }
};

export default part26Categories;

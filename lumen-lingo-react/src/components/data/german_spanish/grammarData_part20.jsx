/**
 * GERMAN → SPANISH GRAMMAR - PART 20
 * 4 categories, 15 questions each
 */

import { Mic, Globe2, Handshake, Briefcase } from "lucide-react";

export const part20Categories = {
  subjuntivo_influencia: {
    name: "Subjuntivo con Influencia",
    description: "Befehle, Wünsche, Bitten - Einfluss auf andere ausdrücken",
    icon: Mic,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "subj_infl_1",
        question: "Mi madre quiere que yo _____ más verduras cada día sano.",
        translation: "Meine Mutter will, dass ich jeden Tag gesund mehr Gemüse esse.",
        options: ["coma", "como", "comeré", "comía"],
        correct: "coma",
        explanation: "Nach Verben der BEEINFLUSSUNG wie 'querer que' (wollen, dass) folgt Subjuntivo: 'quiere que coma' (will, dass ich esse). Diese mütterliche Sorge um gesunde Ernährung ist typische elterliche Fürsorge für Kindeswohl."
      },
      {
        id: "subj_infl_2",
        question: "El profesor nos pide que _____ más atención en clase siempre.",
        translation: "Der Lehrer bittet uns, immer im Unterricht mehr aufzupassen.",
        options: ["prestemos", "prestamos", "prestaremos", "prestábamos"],
        correct: "prestemos",
        explanation: "Nach 'pedir que' (bitten, dass) nutzen wir Subjuntivo: 'pide que prestemos' (bittet, dass wir schenken). Diese Unterrichtsaufforderung zielt auf besseres Lernen und Konzentration während Stunden."
      },
      {
        id: "subj_infl_3",
        question: "Te aconsejo que _____ más temprano para evitar el tráfico pesado.",
        translation: "Ich rate dir, früher loszufahren, um den schweren Verkehr zu vermeiden.",
        options: ["salgas", "sales", "saldrás", "salías"],
        correct: "salgas",
        explanation: "Nach 'aconsejar que' (raten, dass) folgt Subjuntivo: 'aconsejo que salgas' (rate, dass du gehst). Dieser praktische Verkehrsrat basiert auf Erfahrung mit morgendlichen Staus."
      },
      {
        id: "subj_infl_4",
        question: "El médico me recomienda que _____ más ejercicio físico regular.",
        translation: "Der Arzt empfiehlt mir, mehr regelmäßige körperliche Übung zu machen.",
        options: ["haga", "hago", "haré", "hacía"],
        correct: "haga",
        explanation: "Nach 'recomendar que' (empfehlen, dass): Subjuntivo 'que haga' (dass ich mache). Diese medizinische Empfehlung für mehr Bewegung ist gesundheitlicher Rat für besseres Wohlbefinden."
      },
      {
        id: "subj_infl_5",
        question: "Mis padres no permiten que yo _____ tarde los fines de semana.",
        translation: "Meine Eltern erlauben nicht, dass ich an Wochenenden spät nach Hause komme.",
        options: ["vuelva", "vuelvo", "volveré", "volvía"],
        correct: "vuelva",
        explanation: "Nach 'permitir que' (erlauben, dass) mit Negation: Subjuntivo 'no permiten que vuelva'. Diese elterliche Regel setzt Grenzen für jugendliche Ausgehzeiten."
      },
      {
        id: "subj_infl_6",
        question: "Te ruego que me _____ con este problema difícil técnico complicado.",
        translation: "Ich flehe dich an, mir bei diesem schwierigen komplizierten technischen Problem zu helfen.",
        options: ["ayudes", "ayudas", "ayudarás", "ayudabas"],
        correct: "ayudes",
        explanation: "Nach 'rogar que' (flehen, dass): Subjuntivo 'que ayudes' (dass du hilfst). Diese dringende Hilfsanfrage zeigt Verzweiflung und Vertrauen in deine Fähigkeiten zur Problemlösung."
      },
      {
        id: "subj_infl_7",
        question: "El jefe ordena que todos _____ a tiempo a la reunión mañana.",
        translation: "Der Chef befiehlt, dass alle morgen pünktlich zum Meeting kommen.",
        options: ["lleguen", "llegan", "llegarán", "llegaban"],
        correct: "lleguen",
        explanation: "Nach 'ordenar que' (befehlen, dass): Subjuntivo 'que lleguen' (dass sie kommen). Dieser autoritäre Befehl duldet keine Verspätung bei wichtigem Meeting."
      },
      {
        id: "subj_infl_8",
        question: "Les sugiero que _____ el informe antes de la fecha límite establecida.",
        translation: "Ich schlage ihnen vor, den Bericht vor der festgesetzten Deadline abzugeben.",
        options: ["entreguen", "entregan", "entregarán", "entregaban"],
        correct: "entreguen",
        explanation: "Nach 'sugerir que' (vorschlagen, dass): Subjuntivo 'que entreguen' (dass sie abgeben). Dieser Vorschlag für frühzeitige Abgabe vermeidet Last-Minute-Stress."
      },
      {
        id: "subj_infl_9",
        question: "Prefiero que nosotros _____ en casa esta noche tranquila.",
        translation: "Ich bevorzuge, dass wir heute ruhigen Abend zu Hause bleiben.",
        options: ["nos quedemos", "nos quedamos", "nos quedaremos", "nos quedábamos"],
        correct: "nos quedemos",
        explanation: "Nach 'preferir que' (bevorzugen, dass): Subjuntivo 'que nos quedemos' (dass wir bleiben). Diese Präferenz für gemütlichen Heimabend über Ausgehen zeigt Ruhebedürfnis."
      },
      {
        id: "subj_infl_10",
        question: "Te prohibo que _____ con esa gente peligrosa del barrio malo.",
        translation: "Ich verbiete dir, mit jenen gefährlichen Leuten aus dem schlechten Viertel umzugehen.",
        options: ["te juntes", "te juntas", "te juntarás", "te juntabas"],
        correct: "te juntes",
        explanation: "Nach 'prohibir que' (verbieten, dass): Subjuntivo 'que te juntes' (dass du dich zusammentust). Dieses strenge Verbot basiert auf Sorge um Sicherheit und schlechten Einfluss."
      },
      {
        id: "subj_infl_11",
        question: "Necesito que tú me _____ la verdad completa sobre lo ocurrido.",
        translation: "Ich brauche, dass du mir die komplette Wahrheit über das Geschehene sagst.",
        options: ["digas", "dices", "dirás", "decías"],
        correct: "digas",
        explanation: "Nach 'necesitar que' (brauchen, dass): Subjuntivo 'que digas' (dass du sagst). Dieses dringende Bedürfnis nach Wahrheit zeigt, dass Ehrlichkeit in dieser Situation essentiell ist."
      },
      {
        id: "subj_infl_12",
        question: "El profesor exige que los estudiantes _____ los deberes a tiempo.",
        translation: "Der Lehrer verlangt, dass die Schüler die Hausaufgaben rechtzeitig machen.",
        options: ["hagan", "hacen", "harán", "hacían"],
        correct: "hagan",
        explanation: "Nach 'exigir que' (verlangen, dass): Subjuntivo 'que hagan' (dass sie machen). Diese strikte Forderung setzt klare Erwartung für akademische Verantwortung."
      },
      {
        id: "subj_infl_13",
        question: "Espero que ustedes _____ felices en su nueva casa bonita grande.",
        translation: "Ich hoffe, dass Sie in Ihrem neuen schönen großen Haus glücklich sind.",
        options: ["sean", "son", "serán", "eran"],
        correct: "sean",
        explanation: "Nach 'esperar que' (hoffen, dass): Subjuntivo 'que sean' (dass Sie sind). Dieser herzliche Wunsch für Wohlergehen im neuen Heim drückt aufrichtige Freude aus."
      },
      {
        id: "subj_infl_14",
        question: "Te suplico que no _____ esa decisión importante sin pensar bien.",
        translation: "Ich beschwöre dich, diese wichtige Entscheidung nicht ohne gutes Nachdenken zu treffen.",
        options: ["tomes", "tomas", "tomarás", "tomabas"],
        correct: "tomes",
        explanation: "Nach 'suplicar que' (beschwören, dass): Subjuntivo 'que no tomes' (dass du nicht triffst). Diese eindringliche Bitte warnt vor übereilter Entscheidung mit möglicherweise schweren Konsequenzen."
      },
      {
        id: "subj_infl_15",
        question: "Les pido que _____ silencio durante la presentación importante oficial.",
        translation: "Ich bitte sie, während der wichtigen offiziellen Präsentation Ruhe zu halten.",
        options: ["guarden", "guardan", "guardarán", "guardaban"],
        correct: "guarden",
        explanation: "Nach 'pedir que' (bitten, dass): Subjuntivo 'que guarden silencio' (dass sie Ruhe halten). Diese Höflichkeitsbitte sichert respektvolle Atmosphäre für Präsentierende."
      }
    ]
  },

  por_para_avanzado: {
    name: "Por vs Para - Fortgeschritten",
    description: "Komplexe Unterscheidung - Grund, Zweck, Austausch, Zeitraum",
    icon: Globe2,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "por_para_adv_1",
        question: "Trabajo mucho _____ mi familia - todo es para ellos queridos.",
        translation: "Ich arbeite viel für meine Familie - alles ist für sie Liebe.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für MOTIVATION/GRUND nutzen wir 'por': 'trabajo por mi familia' (arbeite wegen/für Familie). Mit 'para' wäre Bestimmung gemeint. Diese Arbeitsmotivation durch Familienliebe treibt tägliche Anstrengung an."
      },
      {
        id: "por_para_adv_2",
        question: "Este regalo es _____ ti - lo compré especialmente pensando en ti.",
        translation: "Dieses Geschenk ist für dich - ich kaufte es speziell an dich denkend.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für BESTIMMUNG/EMPFÄNGER nutzen wir 'para': 'es para ti' (ist für dich). Mit 'por' wäre Grund gemeint. Dieses persönlich ausgewählte Geschenk zeigt Gedanken an Beschenkte."
      },
      {
        id: "por_para_adv_3",
        question: "Caminamos _____ el parque disfrutando del paisaje hermoso verde.",
        translation: "Wir gingen durch den Park und genossen die schöne grüne Landschaft.",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "Für DURCH/ENTLANG nutzen wir 'por': 'por el parque' (durch Park). Bewegung ohne festes Ziel. Dieser entspannende Parkspaziergang ist genussvolle Freizeitaktivität in Natur."
      },
      {
        id: "por_para_adv_4",
        question: "Salimos _____ Madrid mañana temprano - llegaremos por la tarde.",
        translation: "Wir fahren morgen früh nach Madrid los - wir werden nachmittags ankommen.",
        options: ["para", "por", "a", "en"],
        correct: "para",
        explanation: "Für RICHTUNG/ZIEL nutzen wir 'para': 'salir para Madrid' (losfahren nach Madrid). Diese Madridreise morgen hat klares Ziel und geplante Ankunftszeit am Nachmittag."
      },
      {
        id: "por_para_adv_5",
        question: "Pagué cincuenta euros _____ este libro antiguo raro de colección.",
        translation: "Ich zahlte fünfzig Euro für dieses seltene alte Sammlerbuch.",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "Für PREIS/AUSTAUSCH nutzen wir 'por': 'pagar por' (bezahlen für als Austausch). Mit 'para' unmöglich. Dieser hohe Preis für Antiquitätenbuch zeigt Sammlerwert."
      },
      {
        id: "por_para_adv_6",
        question: "Estudia medicina _____ ser médico como su padre siempre soñó.",
        translation: "Er studiert Medizin, um Arzt wie sein Vater zu werden, wie er immer träumte.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für ZWECK/ZIEL nutzen wir 'para': 'para ser médico' (um Arzt zu sein). Mit 'por' unmöglich vor Infinitiv als Zweck. Dieses Studienziel folgt väterlichem Karrierevorbild."
      },
      {
        id: "por_para_adv_7",
        question: "Lo hice _____ ti - quería ayudarte en tu situación difícil.",
        translation: "Ich tat es für dich - ich wollte dir in deiner schwierigen Situation helfen.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für GRUND/ZUGUNSTEN nutzen wir 'por': 'por ti' (für dich = deinetwegen). Diese selbstlose Hilfshandlung zeigt tiefe Fürsorge und Freundschaft in schweren Zeiten."
      },
      {
        id: "por_para_adv_8",
        question: "Tengo que terminar esto _____ el viernes próximo sin falta ninguna.",
        translation: "Ich muss dies ohne jegliche Ausnahme bis nächsten Freitag beenden.",
        options: ["para", "por", "en", "a"],
        correct: "para",
        explanation: "Für DEADLINE nutzen wir 'para': 'para el viernes' (bis Freitag). Diese klare Frist setzt zeitlichen Druck für Projektabschluss."
      },
      {
        id: "por_para_adv_9",
        question: "Gracias _____ tu ayuda valiosa - no lo habría logrado solo nunca.",
        translation: "Danke für deine wertvolle Hilfe - ich hätte es nie allein geschafft.",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "Nach 'gracias' immer 'por': 'gracias por tu ayuda' (danke für Hilfe). Diese Dankbarkeit erkennt essentielle Rolle deiner Unterstützung bei Erfolg an."
      },
      {
        id: "por_para_adv_10",
        question: "Este documento es _____ firmar - léelo cuidadosamente antes primero.",
        translation: "Dieses Dokument ist zum Unterschreiben - lies es vorher zuerst sorgfältig.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für ZWECK nutzen wir 'para': 'para firmar' (zum Unterschreiben). Diese Aufforderung zur sorgfältigen Lektüre verhindert uninformierte Vertragsunterzeichnung."
      },
      {
        id: "por_para_adv_11",
        question: "Viajamos _____ tren porque es más cómodo que el autobús largo.",
        translation: "Wir reisen mit Zug, weil es bequemer als der lange Bus ist.",
        options: ["por", "para", "en", "con"],
        correct: "por",
        explanation: "Für VERKEHRSMITTEL nutzen wir 'por': 'por tren' (mit/per Zug). Auch 'en tren' möglich. Diese Transportwahl basiert auf Komfortüberlegungen für Reise."
      },
      {
        id: "por_para_adv_12",
        question: "Llegaremos _____ Navidad si todo va según el plan establecido antes.",
        translation: "Wir werden zu Weihnachten ankommen, wenn alles nach dem vorher festgelegten Plan läuft.",
        options: ["para", "por", "en", "a"],
        correct: "para",
        explanation: "Für UNGEFÄHRE Zeit nutzen wir 'para': 'para Navidad' (um/zu Weihnachten). Diese zeitliche Schätzung gibt groben Rahmen für Ankunft."
      },
      {
        id: "por_para_adv_13",
        question: "_____ ser tan joven, habla muy bien varios idiomas diferentes.",
        translation: "Dafür dass er so jung ist, spricht er sehr gut mehrere verschiedene Sprachen.",
        options: ["Para", "Por", "De", "A"],
        correct: "Para",
        explanation: "Für 'ANGESICHTS/DAFÜR DASS' nutzen wir 'para': 'para ser joven' (für jung sein = angesichts seiner Jugend). Diese außergewöhnliche Sprachbegabung ist bemerkenswert für Alter."
      },
      {
        id: "por_para_adv_14",
        question: "Pasamos _____ tu casa ayer pero no estabas en casa entonces.",
        translation: "Wir kamen gestern an deinem Haus vorbei, aber du warst dann nicht zu Hause.",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "Für VORBEIKOMMEN nutzen wir 'por': 'pasar por tu casa' (an deinem Haus vorbeikommen). Dieser vergebliche Besuchsversuch zeigt spontanen unangekündigten Besuch."
      },
      {
        id: "por_para_adv_15",
        question: "Hago dieta _____ adelgazar y mejorar mi salud general física.",
        translation: "Ich mache Diät, um abzunehmen und meine allgemeine körperliche Gesundheit zu verbessern.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für ZWECK nutzen wir 'para': 'para adelgazar' (um abzunehmen). Diese Gesundheitsziele Gewichtsverlust und Fitness sind verbundene Diätmotivationen."
      }
    ]
  },

  reflexivos_vs_no_reflexivos: {
    name: "Reflexiv vs Nicht-Reflexiv",
    description: "Bedeutungswechsel - ir/irse, dormir/dormirse, llevar/llevarse",
    icon: Handshake,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "refl_no_1",
        question: "Me _____ a las once porque estaba muy cansado anoche.",
        translation: "Ich schlief um elf ein, weil ich gestern Abend sehr müde war.",
        options: ["dormí", "dormía", "duermo", "dormir"],
        correct: "dormí",
        explanation: "Reflexiv 'dormirse' bedeutet EINSCHLAFEN: 'me dormí' (schlief ein). Ohne Reflexiv 'dormir' ist nur SCHLAFEN. Diese Unterscheidung zwischen Einschlafen und Schlafen ist wichtig im Spanischen."
      },
      {
        id: "refl_no_2",
        question: "Los niños _____ ocho horas cada noche para estar descansados.",
        translation: "Die Kinder schlafen jede Nacht acht Stunden, um ausgeruht zu sein.",
        options: ["duermen", "se duermen", "dormirán", "dormían"],
        correct: "duermen",
        explanation: "NICHT-reflexiv 'dormir' für SCHLAFEN (Dauer): 'duermen ocho horas' (schlafen acht Stunden). Mit Reflexiv wäre Einschlafakt gemeint. Diese gesunde Schlafdauer ist essentiell für Kindesentwicklung."
      },
      {
        id: "refl_no_3",
        question: "Me _____ de aquí inmediatamente - no quiero estar más tiempo.",
        translation: "Ich gehe sofort von hier weg - ich will nicht mehr Zeit sein.",
        options: ["voy", "iré", "iba", "ir"],
        correct: "voy",
        explanation: "Reflexiv 'irse' bedeutet WEGGEHEN/VERLASSEN: 'me voy' (gehe weg). Ohne Reflexiv 'ir' ist nur GEHEN zu Ort. Diese sofortige Abreise zeigt Unzufriedenheit oder Dringlichkeit."
      },
      {
        id: "refl_no_4",
        question: "Yo _____ al trabajo en metro todos los días laborables sin falta.",
        translation: "Ich fahre jeden Werktag ohne Ausnahme mit Metro zur Arbeit.",
        options: ["voy", "me voy", "iré", "iba"],
        correct: "voy",
        explanation: "NICHT-reflexiv 'ir' für HINGEHEN: 'voy al trabajo' (gehe zur Arbeit). Mit Reflexiv wäre Weggehen. Dieser tägliche Metro-Arbeitsweg ist Routinependeln."
      },
      {
        id: "refl_no_5",
        question: "Siempre me _____ bien con mis compañeros de clase amables.",
        translation: "Ich komme immer gut mit meinen freundlichen Klassenkameraden aus.",
        options: ["llevo", "lleva", "llevaré", "llevaba"],
        correct: "llevo",
        explanation: "Reflexiv 'llevarse bien' bedeutet GUT AUSKOMMEN: 'me llevo bien' (komme gut aus). Ohne Reflexiv 'llevar' ist TRAGEN. Diese harmonische Klassenbeziehung macht Schule angenehmer."
      },
      {
        id: "refl_no_6",
        question: "Él _____ los libros pesados en su mochila grande cada día.",
        translation: "Er trägt jeden Tag die schweren Bücher in seinem großen Rucksack.",
        options: ["lleva", "se lleva", "llevará", "llevaba"],
        correct: "lleva",
        explanation: "NICHT-reflexiv 'llevar' für TRAGEN: 'lleva los libros' (trägt Bücher). Mit Reflexiv wäre Mitnehmen oder Auskommen. Diese tägliche Schultaschenlast ist Teil der Schülerroutine."
      },
      {
        id: "refl_no_7",
        question: "Me _____ a reír cuando vi esa escena cómica graciosa divertida.",
        translation: "Ich fing an zu lachen, als ich diese lustige komische witzige Szene sah.",
        options: ["puse", "pongo", "pondré", "ponía"],
        correct: "puse",
        explanation: "Reflexiv 'ponerse a' + Infinitiv bedeutet ANFANGEN: 'me puse a reír' (fing an zu lachen). Ohne Reflexiv 'poner' ist SETZEN/LEGEN. Diese spontane Lachreaktion war unkontrollierbar bei komischer Situation."
      },
      {
        id: "refl_no_8",
        question: "Él _____ la mesa cada noche para la cena familiar junta.",
        translation: "Er deckt jeden Abend den Tisch für das gemeinsame Familienessen.",
        options: ["pone", "se pone", "pondrá", "ponía"],
        correct: "pone",
        explanation: "NICHT-reflexiv 'poner la mesa' für TISCH DECKEN: 'pone la mesa' (deckt Tisch). Diese häusliche Pflicht ist Teil der Familienessen-Vorbereitung."
      },
      {
        id: "refl_no_9",
        question: "Me _____ tu nombre - ¿cómo te llamas exactamente de nuevo?",
        translation: "Ich habe deinen Namen vergessen - wie heißt du nochmal genau?",
        options: ["olvidé", "olvido", "olvidaré", "olvidaba"],
        correct: "olvidé",
        explanation: "Reflexiv 'olvidarse de' für VERGESSEN ist STÄRKER: 'me olvidé' (habe vergessen). Ohne Reflexiv 'olvidar' auch möglich aber schwächer. Diese peinliche Namensvergesslichkeit ist sozial unangenehm."
      },
      {
        id: "refl_no_10",
        question: "Siempre _____ las llaves en casa - soy muy despistado distraído.",
        translation: "Ich vergesse immer die Schlüssel zu Hause - ich bin sehr zerstreut abgelenkt.",
        options: ["olvido", "me olvido", "olvidaré", "olvidaba"],
        correct: "olvido",
        explanation: "NICHT-reflexiv 'olvidar' für einfaches VERGESSEN: 'olvido las llaves' (vergesse Schlüssel). Diese chronische Schlüsselvergesslichkeit ist Zeichen von Zerstreutheit."
      },
      {
        id: "refl_no_11",
        question: "Me _____ de que tenía que llamarte ayer tarde urgentemente.",
        translation: "Ich erinnerte mich daran, dass ich dich gestern Nachmittag dringend anrufen musste.",
        options: ["acordé", "acuerdo", "acordaré", "acordaba"],
        correct: "acordé",
        explanation: "Reflexiv 'acordarse de' für SICH ERINNERN: 'me acordé de que' (erinnerte mich daran, dass). Ohne Reflexiv 'acordar' ist VEREINBAREN. Diese späte Erinnerung an Anrufpflicht."
      },
      {
        id: "refl_no_12",
        question: "Ellos _____ una reunión para mañana a las tres de la tarde.",
        translation: "Sie vereinbarten ein Treffen für morgen um drei Uhr nachmittags.",
        options: ["acordaron", "se acordaron", "acordarán", "acordaban"],
        correct: "acordaron",
        explanation: "NICHT-reflexiv 'acordar' für VEREINBAREN: 'acordaron una reunión' (vereinbarten Meeting). Diese Terminabsprache koordiniert gemeinsame Zeit für alle Beteiligten."
      },
      {
        id: "refl_no_13",
        question: "Me _____ mi abrigo favorito en el restaurante anoche por descuido.",
        translation: "Ich ließ gestern Abend aus Versehen meinen Lieblingsmantel im Restaurant.",
        options: ["dejé", "dejo", "dejaré", "dejaba"],
        correct: "dejé",
        explanation: "Reflexiv 'dejarse' bedeutet VERGESSEN/LIEGENLASSEN: 'me dejé el abrigo' (ließ Mantel liegen). Ohne Reflexiv 'dejar' ist absichtlich LASSEN. Dieser vergessene Mantel erfordert Rückkehr oder Verlust."
      },
      {
        id: "refl_no_14",
        question: "_____ el libro en la mesa - ahí está todavía ahora mismo.",
        translation: "Ich legte das Buch auf den Tisch - es ist jetzt gerade noch da.",
        options: ["Dejé", "Me dejé", "Dejaré", "Dejaba"],
        correct: "Dejé",
        explanation: "NICHT-reflexiv 'dejar' für absichtlich LASSEN/LEGEN: 'dejé el libro' (legte Buch hin). Diese bewusste Platzierung unterscheidet sich von versehentlichem Liegenlassen."
      },
      {
        id: "refl_no_15",
        question: "Me _____ el nombre de ese actor famoso - ¿quién era?",
        translation: "Mir fällt der Name jenes berühmten Schauspielers nicht ein - wer war er?",
        options: ["escapa", "escapo", "escapará", "escapaba"],
        correct: "escapa",
        explanation: "Reflexiv 'escaparse' im Sinne von ENTFALLEN: 'me escapa el nombre' (Name entfällt mir). Ohne Reflexiv 'escapar' ist ENTKOMMEN. Diese Gedächtnislücke bei Namen ist häufiges Phänomen."
      }
    ]
  },

  expresiones_con_tener: {
    name: "Expresiones con Tener",
    description: "Tener-Redewendungen - hunger, Angst, Recht, Glück haben",
    icon: Briefcase,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "tener_expr_1",
        question: "Tengo mucha _____ - no he comido nada desde esta mañana temprano.",
        translation: "Ich habe großen Hunger - ich habe seit heute früh morgens nichts gegessen.",
        options: ["hambre", "sed", "sueño", "prisa"],
        correct: "hambre",
        explanation: "Redewendung 'tener hambre' (Hunger haben). Feminin 'hambre' trotz 'el hambre'. Dieser starke Hunger nach ganztägigem Fasten ist natürliche körperliche Reaktion, die Essen dringend macht."
      },
      {
        id: "tener_expr_2",
        question: "Ella tiene _____ a las alturas - no puede subir a lugares altos.",
        translation: "Sie hat Höhenangst - sie kann nicht an hohe Orte hochsteigen.",
        options: ["miedo", "razón", "suerte", "cuidado"],
        correct: "miedo",
        explanation: "Redewendung 'tener miedo a' (Angst haben vor). Diese Höhenphobie ist verbreitete Angst, die Aktivitäten wie Bergsteigen oder hohe Gebäude unmöglich macht."
      },
      {
        id: "tener_expr_3",
        question: "Tienes toda la _____ - yo estaba completamente equivocado sobre eso.",
        translation: "Du hast völlig Recht - ich lag komplett falsch darüber.",
        options: ["razón", "culpa", "suerte", "prisa"],
        correct: "razón",
        explanation: "Redewendung 'tener razón' (Recht haben). Diese Zugeständnis deiner Korrektheit ist ehrliche Anerkennung des eigenen Irrtums in Diskussion."
      },
      {
        id: "tener_expr_4",
        question: "Tenemos mucha _____ - date prisa o perderemos el tren importante.",
        translation: "Wir haben große Eile - beeil dich oder wir verpassen den wichtigen Zug.",
        options: ["prisa", "hambre", "sed", "sueño"],
        correct: "prisa",
        explanation: "Redewendung 'tener prisa' (Eile haben/es eilig haben). Diese Zeitknappheit vor Zugabfahrt erzeugt Stress und erfordert schnelles Handeln aller Beteiligten."
      },
      {
        id: "tener_expr_5",
        question: "Tengo mucho _____ - me voy a dormir ya mismo ahora.",
        translation: "Ich bin sehr müde - ich gehe jetzt gleich schlafen.",
        options: ["sueño", "hambre", "sed", "calor"],
        correct: "sueño",
        explanation: "Redewendung 'tener sueño' (müde sein/schläfrig sein). Wörtlich 'Schlaf haben'. Diese Müdigkeit signalisiert Schlafbedürfnis und rechtfertigt frühen Rückzug ins Bett."
      },
      {
        id: "tener_expr_6",
        question: "No tuve _____ en el examen - todas las preguntas eran muy difíciles.",
        translation: "Ich hatte bei der Prüfung kein Glück - alle Fragen waren sehr schwer.",
        options: ["suerte", "razón", "miedo", "cuidado"],
        correct: "suerte",
        explanation: "Redewendung 'tener suerte' (Glück haben). Dieses fehlende Glück bei schwerer Prüfung mit nur harten Fragen ist frustrierende Situation für Schüler."
      },
      {
        id: "refl_no_7",
        question: "Hace mucho calor - tengo mucha _____ ahora mismo en este momento.",
        translation: "Es ist sehr heiß - ich habe jetzt gerade in diesem Moment großen Durst.",
        options: ["sed", "hambre", "sueño", "frío"],
        correct: "sed",
        explanation: "Redewendung 'tener sed' (Durst haben). Diese Dehydrierung bei Hitze ist natürliche Körperreaktion, die Flüssigkeitsaufnahme dringend erforderlich macht."
      },
      {
        id: "tener_expr_8",
        question: "Ten mucho _____ al cruzar la calle - hay mucho tráfico peligroso.",
        translation: "Sei sehr vorsichtig beim Überqueren der Straße - es gibt viel gefährlichen Verkehr.",
        options: ["cuidado", "miedo", "prisa", "sueño"],
        correct: "cuidado",
        explanation: "Redewendung 'tener cuidado' (vorsichtig sein). Wörtlich 'Vorsicht haben'. Diese Sicherheitswarnung vor starkem Verkehr ist wichtig zur Unfallvermeidung beim Straßenüberqueren."
      },
      {
        id: "tener_expr_9",
        question: "Tengo _____ años - cumplo veintiuno el próximo mes que viene.",
        translation: "Ich bin zwanzig Jahre alt - ich werde nächsten kommenden Monat einundzwanzig.",
        options: ["veinte", "veintiuno", "años veinte", "los veinte"],
        correct: "veinte",
        explanation: "Für ALTER 'tener' + Zahl + 'años': 'tengo veinte años' (habe zwanzig Jahre = bin zwanzig). Deutsche 'sein' wird zu 'haben'. Dieser nahende Geburtstag ist Übergang zur Volljährigkeit."
      },
      {
        id: "tener_expr_10",
        question: "Ella no tiene la _____ de nada - fue un accidente sin intención.",
        translation: "Sie ist an nichts schuld - es war ein Unfall ohne Absicht.",
        options: ["culpa", "razón", "suerte", "prisa"],
        correct: "culpa",
        explanation: "Redewendung 'tener la culpa' (schuld sein). Diese Schuldbefreiung bei Unfall ist wichtig, um falsche Anschuldigungen zu vermeiden und Gerechtigkeit zu wahren."
      },
      {
        id: "tener_expr_11",
        question: "Tengo mucho _____ - voy a abrir la ventana para que entre aire.",
        translation: "Mir ist sehr heiß - ich werde das Fenster öffnen, damit Luft hereinkommt.",
        options: ["calor", "frío", "sueño", "hambre"],
        correct: "calor",
        explanation: "Redewendung 'tener calor' (warm sein/heiß haben). Diese Hitzeempfindung motiviert Fensteröffnung zur Kühlung und Luftzirkulation im Raum."
      },
      {
        id: "tener_expr_12",
        question: "Tengo mucho _____ - ¿puedes cerrar la ventana abierta por favor?",
        translation: "Mir ist sehr kalt - kannst du bitte das offene Fenster schließen?",
        options: ["frío", "calor", "miedo", "sueño"],
        correct: "frío",
        explanation: "Redewendung 'tener frío' (kalt haben/frieren). Diese Kälteempfindung ist Bitte um Wärme durch Fensterschließung zum Schutz vor niedrigen Temperaturen."
      },
      {
        id: "tener_expr_13",
        question: "¿Cuántos años _____ tu hermana menor pequeña exactamente ahora?",
        translation: "Wie alt ist deine jüngere kleine Schwester jetzt genau?",
        options: ["tiene", "es", "está", "hay"],
        correct: "tiene",
        explanation: "Für ALTER-Frage: '¿cuántos años tiene?' (wie viele Jahre hat sie?). Deutsche 'ist' wird zu 'hat'. Diese Altersfrage über Schwester ist normale Kennenlern-Konversation."
      },
      {
        id: "tener_expr_14",
        question: "Tengo _____ de verte pronto - hace mucho que no nos vemos.",
        translation: "Ich habe Lust/Sehnsucht, dich bald zu sehen - es ist lange her, dass wir uns sehen.",
        options: ["ganas", "hambre", "sed", "miedo"],
        correct: "ganas",
        explanation: "Redewendung 'tener ganas de' (Lust haben auf). Plural 'ganas' immer. Diese Sehnsucht nach Wiedersehen nach langer Zeit zeigt emotionale Verbindung und Vermissen."
      },
      {
        id: "tener_expr_15",
        question: "Ella siempre tiene _____ en todo - nunca se equivoca jamás.",
        translation: "Sie hat immer in allem Recht - sie irrt sich niemals.",
        options: ["razón", "suerte", "cuidado", "prisa"],
        correct: "razón",
        explanation: "Redewendung 'tener razón' (Recht haben). Diese konstante Korrektheit in allen Dingen ist entweder außergewöhnliche Weisheit oder übertriebene Wahrnehmung."
      }
    ]
  },

  presente_historico: {
    name: "Presente Histórico",
    description: "Historisches Präsens - Vergangenheit lebhaft in Gegenwart erzählen",
    icon: Globe2,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "pres_hist_1",
        question: "Colón _____ América en 1492 buscando nueva ruta a las Indias.",
        translation: "Kolumbus entdeckt 1492 Amerika auf der Suche nach neuer Route nach Indien.",
        options: ["descubre", "descubrió", "descubría", "descubrirá"],
        correct: "descubre",
        explanation: "HISTORISCHES PRÄSENS macht Vergangenheit LEBENDIG: 'Colón descubre' (entdeckt) statt 'descubrió'. Häufig in Erzählungen. Diese dramatische Erzählweise bringt historisches Ereignis näher an Gegenwart."
      },
      {
        id: "pres_hist_2",
        question: "En 1969, el hombre _____ en la Luna por primera vez histórica.",
        translation: "1969 landet der Mensch zum ersten historischen Mal auf dem Mond.",
        options: ["llega", "llegó", "llegaba", "llegará"],
        correct: "llega",
        explanation: "Historisches Präsens für DRAMATIK: 'el hombre llega' (landet). Diese Erzähltechnik macht Mondlandung unmittelbarer und spannender für Zuhörer."
      },
      {
        id: "pres_hist_3",
        question: "Entonces yo _____ la puerta y veo a mi mejor amigo allí parado.",
        translation: "Dann öffne ich die Tür und sehe meinen besten Freund dort stehen.",
        options: ["abro", "abrí", "abría", "abriré"],
        correct: "abro",
        explanation: "In ANEKDOTEN nutzen wir oft historisches Präsens: 'abro' (öffne) statt 'abrí'. Diese Erzählweise macht persönliche Geschichte lebendiger und involviert Zuhörer mehr."
      },
      {
        id: "pres_hist_4",
        question: "De repente, ella se _____ y sale corriendo rápidamente sin avisar.",
        translation: "Plötzlich steht sie auf und rennt schnell weg ohne Bescheid zu sagen.",
        options: ["levanta", "levantó", "levantaba", "levantará"],
        correct: "levanta",
        explanation: "Für PLÖTZLICHE Handlung in Erzählung: Präsens 'se levanta' (steht auf). Diese dramatische Darstellung plötzlicher Abreise erzeugt Spannung in Geschichte."
      },
      {
        id: "pres_hist_5",
        question: "Shakespeare _____ 'Romeo y Julieta' a finales del siglo XVI antiguo.",
        translation: "Shakespeare schreibt 'Romeo und Julia' Ende des alten 16. Jahrhunderts.",
        options: ["escribe", "escribió", "escribía", "escribirá"],
        correct: "escribe",
        explanation: "Historisches Präsens bei BIOGRAPHIEN: 'Shakespeare escribe' (schreibt). Diese Erzählform wird oft in historischen Texten genutzt für mehr Unmittelbarkeit."
      },
      {
        id: "pres_hist_6",
        question: "En ese momento crítico decisivo, él _____ la decisión más importante.",
        translation: "In jenem kritischen entscheidenden Moment trifft er die wichtigste Entscheidung.",
        options: ["toma", "tomó", "tomaba", "tomará"],
        correct: "toma",
        explanation: "Für HÖHEPUNKT in Erzählung: Präsens 'toma' (trifft). Diese Technik betont Dramatik des entscheidenden Moments in Story."
      },
      {
        id: "pres_hist_7",
        question: "Cervantes _____ 'Don Quijote' entre 1605 y 1615 en España.",
        translation: "Cervantes veröffentlicht 'Don Quijote' zwischen 1605 und 1615 in Spanien.",
        options: ["publica", "publicó", "publicaba", "publicará"],
        correct: "publica",
        explanation: "In literarischer GESCHICHTE: historisches Präsens 'publica' (veröffentlicht). Diese Erzählweise macht klassische Literaturgeschichte für moderne Leser zugänglicher."
      },
      {
        id: "pres_hist_8",
        question: "De pronto, _____ un ruido fuerte extraño y todos se asustan mucho.",
        translation: "Plötzlich gibt es ein lautes seltsames Geräusch und alle erschrecken sich sehr.",
        options: ["hay", "hubo", "había", "habrá"],
        correct: "hay",
        explanation: "Historisches Präsens auch bei 'haber': 'hay un ruido' (gibt es). Diese Technik in Gruselgeschichten erhöht Spannung für Zuhörer."
      },
      {
        id: "pres_hist_9",
        question: "Entonces me _____ cuenta de que había olvidado las llaves dentro.",
        translation: "Dann wird mir bewusst, dass ich die Schlüssel drinnen vergessen hatte.",
        options: ["doy", "di", "daba", "daré"],
        correct: "doy",
        explanation: "In Anekdote: 'me doy cuenta' (wird mir bewusst) statt 'me di'. Diese Realisierung in Erzählung macht Erkenntnis-Moment dramatischer."
      },
      {
        id: "pres_hist_10",
        question: "La Segunda Guerra Mundial _____ en 1939 y termina en 1945 finalmente.",
        translation: "Der Zweite Weltkrieg beginnt 1939 und endet schließlich 1945.",
        options: ["empieza", "empezó", "empezaba", "empezará"],
        correct: "empieza",
        explanation: "Historisches Präsens in GESCHICHTSDARSTELLUNG: 'empieza' (beginnt). Diese Erzählform wird in Lehrbüchern genutzt, um Geschichte lebendiger zu vermitteln."
      },
      {
        id: "pres_hist_11",
        question: "Y entonces, el héroe _____ su espada y enfrenta al dragón feroz.",
        translation: "Und dann zieht der Held sein Schwert und stellt sich dem wilden Drachen.",
        options: ["saca", "sacó", "sacaba", "sacará"],
        correct: "saca",
        explanation: "In FANTASY-Erzählung: Präsens 'saca' (zieht). Diese Technik macht Abenteuergeschichte unmittelbarer und spannender für Leser oder Zuhörer."
      },
      {
        id: "pres_hist_12",
        question: "En la película, el protagonista _____ a su amor perdido después de años.",
        translation: "Im Film findet der Protagonist seine verlorene Liebe nach Jahren.",
        options: ["encuentra", "encontró", "encontraba", "encontrará"],
        correct: "encuentra",
        explanation: "Bei FILM-/BUCHZUSAMMENFASSUNG: Präsens 'encuentra' (findet). Diese Erzählkonvention in Plot-Beschreibungen ist Standard in Kritiken und Rezensionen."
      },
      {
        id: "pres_hist_13",
        question: "Galileo _____ que la Tierra gira alrededor del Sol revolucionariamente.",
        translation: "Galileo entdeckt revolutionär, dass die Erde um die Sonne kreist.",
        options: ["descubre", "descubrió", "descubría", "descubrirá"],
        correct: "descubre",
        explanation: "Wissenschaftsgeschichte mit Präsens: 'Galileo descubre' (entdeckt). Diese dramatische Darstellung wissenschaftlicher Durchbrüche macht sie eindrucksvoller."
      },
      {
        id: "pres_hist_14",
        question: "En ese instante crucial, todo _____ sentido y comprendo la situación.",
        translation: "In jenem entscheidenden Augenblick macht alles Sinn und ich verstehe die Situation.",
        options: ["tiene", "tuvo", "tenía", "tendrá"],
        correct: "tiene",
        explanation: "Für ERKENNTNIS-Moment: Präsens 'tiene sentido' (macht Sinn). Diese Aha-Erlebnis-Darstellung in Präsens intensiviert emotionalen Durchbruch."
      },
      {
        id: "pres_hist_15",
        question: "La historia _____ así: un día normal, recibo una llamada misteriosa.",
        translation: "Die Geschichte geht so: an einem normalen Tag bekomme ich einen mysteriösen Anruf.",
        options: ["es", "fue", "era", "será"],
        correct: "es",
        explanation: "Geschichtseröffnung mit Präsens: 'la historia es' (Geschichte ist/geht). Diese Erzähleröffnung ist klassischer Beginn für lebendige Story-Präsentation."
      }
    ]
  }
};

export default part20Categories;
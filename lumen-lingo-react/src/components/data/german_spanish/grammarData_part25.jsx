/**
 * GERMAN → SPANISH GRAMMAR - PART 25
 * 4 categories, 15 questions each
 */

import { Clock3, Compass, MessageSquare, Target } from "lucide-react";

export const part25Categories = {
  tiempo_exacto: {
    name: "Expresiones de Tiempo Exacto",
    description: "Genaue Zeitangaben - Uhrzeit, Datum, Zeitpunkte präzise ausdrücken",
    icon: Clock3,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "tiempo_ex_1",
        question: "La reunión es _____ las tres y media de la tarde exactas.",
        translation: "Das Meeting ist um genau halb vier nachmittags.",
        options: ["a", "en", "por", "de"],
        correct: "a",
        explanation: "Für UHRZEIT nutzen wir 'a': 'a las tres y media' (um halb vier). Im Spanischen 'drei und halb', nicht 'halb vier'. Diese genaue Zeitangabe ist wichtig für Pünktlichkeit."
      },
      {
        id: "tiempo_ex_2",
        question: "Nací _____ 25 de diciembre de 1995 en invierno frío nevado.",
        translation: "Ich wurde am 25. Dezember 1995 im kalten verschneiten Winter geboren.",
        options: ["el", "a", "en", "por"],
        correct: "el",
        explanation: "Für DATUM nutzen wir 'el': 'el 25 de diciembre' (am 25. Dezember). Diese Weihnachtsgeburt ist besonderes Geburtsdatum."
      },
      {
        id: "tiempo_ex_3",
        question: "Estamos _____ verano - hace mucho calor y sol brillante intenso.",
        translation: "Wir sind im Sommer - es ist sehr heiß und intensiv hell sonnig.",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "Für JAHRESZEIT nutzen wir 'en': 'en verano' (im Sommer). Diese sommerliche Hitze ist typisch für Saison."
      },
      {
        id: "tiempo_ex_4",
        question: "Te llamo _____ cinco minutos - espera un momento por favor ahora.",
        translation: "Ich rufe dich in fünf Minuten an - warte bitte jetzt einen Moment.",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "Für IN (zukünftiger Zeitraum) nutzen wir 'en': 'en cinco minutos' (in fünf Minuten). Diese kurze Wartezeit ist überschaubar."
      },
      {
        id: "tiempo_ex_5",
        question: "La película empieza _____ punto - no llegues tarde por favor.",
        translation: "Der Film beginnt pünktlich - komm bitte nicht zu spät.",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "Feste Phrase 'en punto' (pünktlich/genau). Diese Pünktlichkeit bei Filmstart bedeutet, Verspätung verpasst Anfang."
      },
      {
        id: "tiempo_ex_6",
        question: "Trabajo de lunes _____ viernes cada semana sin descansar nunca.",
        translation: "Ich arbeite jede Woche ohne jemals zu pausieren von Montag bis Freitag.",
        options: ["a", "en", "por", "hasta"],
        correct: "a",
        explanation: "Für VON...BIS bei Tagen: 'de lunes a viernes' (von Montag bis Freitag). Diese Standardarbeitswoche ist übliches Arbeitsmodell."
      },
      {
        id: "tiempo_ex_7",
        question: "_____ la mañana siempre desayuno café con tostadas ricas crujientes.",
        translation: "Morgens frühstücke ich immer Kaffee mit leckeren knusprigen Toasts.",
        options: ["Por", "En", "A", "De"],
        correct: "Por",
        explanation: "Für TAGESZEITEN nutzen wir 'por': 'por la mañana' (morgens/am Morgen). Diese Frühstücksroutine ist tägliches Morgenritual."
      },
      {
        id: "tiempo_ex_8",
        question: "El tren sale _____ las ocho menos cuarto de la mañana temprano.",
        translation: "Der Zug fährt früh morgens um Viertel vor acht ab.",
        options: ["a", "en", "por", "de"],
        correct: "a",
        explanation: "Für UHRZEIT: 'a las ocho menos cuarto' (um Viertel vor acht). Im Spanischen 'acht weniger Viertel'. Diese frühe Abfahrt erfordert zeitiges Aufstehen."
      },
      {
        id: "tiempo_ex_9",
        question: "Terminé el proyecto _____ dos horas - fue más rápido de lo esperado.",
        translation: "Ich beendete das Projekt in zwei Stunden - es war schneller als erwartet.",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "Für ZEITDAUER nutzen wir 'en': 'en dos horas' (in zwei Stunden). Diese schnelle Fertigstellung übertraf Erwartungen positiv."
      },
      {
        id: "tiempo_ex_10",
        question: "Vamos de vacaciones _____ agosto como todos los años siempre.",
        translation: "Wir fahren wie jedes Jahr immer im August in Urlaub.",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "Für MONATE: 'en agosto' (im August). Diese August-Urlaubstradition ist fester jährlicher Familienplan."
      },
      {
        id: "tiempo_ex_11",
        question: "_____ mediodía exacto, el sol está en su punto más alto brillante.",
        translation: "Um genau Mittag ist die Sonne an ihrem höchsten hellen Punkt.",
        options: ["A", "En", "Por", "De"],
        correct: "A",
        explanation: "Für MITTAG als Zeitpunkt: 'a mediodía' (um Mittag). Diese astronomische Beobachtung beschreibt Sonnenstand zu bestimmter Zeit."
      },
      {
        id: "tiempo_ex_12",
        question: "_____ la noche me gusta leer libros tranquilamente en silencio absoluto.",
        translation: "Nachts lese ich gerne ruhig in absoluter Stille Bücher.",
        options: ["Por", "En", "A", "De"],
        correct: "Por",
        explanation: "Für NACHTS: 'por la noche' (nachts/in der Nacht). Diese nächtliche Lesegewohnheit nutzt ruhige Stunden für Literatur."
      },
      {
        id: "tiempo_ex_13",
        question: "Nos vemos _____ Navidad en casa de mis padres para celebrar.",
        translation: "Wir sehen uns zu Weihnachten im Haus meiner Eltern zum Feiern.",
        options: ["en", "a", "por", "de"],
        correct: "en",
        explanation: "Für FEIERTAG: 'en Navidad' (zu Weihnachten). Auch 'por' in manchen Regionen. Dieses Familientreffen ist traditionelle Weihnachtsfeier."
      },
      {
        id: "tiempo_ex_14",
        question: "Salgo del trabajo _____ las seis de la tarde todos los días.",
        translation: "Ich gehe jeden Tag um sechs Uhr nachmittags von der Arbeit weg.",
        options: ["a", "en", "por", "de"],
        correct: "a",
        explanation: "Für festes ENDE: 'a las seis' (um sechs). Dieser regelmäßige Feierabend strukturiert Tagesende und Privatzeit-Beginn."
      },
      {
        id: "tiempo_ex_15",
        question: "_____ el siglo XXI, la tecnología avanza muy rápidamente cada día.",
        translation: "Im 21. Jahrhundert schreitet die Technologie jeden Tag sehr schnell voran.",
        options: ["En", "A", "Por", "De"],
        correct: "En",
        explanation: "Für JAHRHUNDERT: 'en el siglo XXI' (im 21. Jahrhundert). Diese Beobachtung über technologischen Fortschritt ist zeitgenössisches Phänomen."
      }
    ]
  },

  verbos_opinion: {
    name: "Verbos de Opinión",
    description: "Meinungsverben - creer, pensar, opinar mit/ohne Subjuntivo",
    icon: MessageSquare,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "opin_1",
        question: "Creo que mañana _____ buen tiempo según el pronóstico fiable.",
        translation: "Ich glaube, dass morgen laut verlässlicher Vorhersage gutes Wetter sein wird.",
        options: ["hará", "haga", "hace", "haría"],
        correct: "hará",
        explanation: "Nach 'creer que' (BEJAHEND) nutzen wir INDIKATIV: 'creo que hará' (glaube, dass es machen wird). Diese Wetterüberzeugung basiert auf Vorhersage."
      },
      {
        id: "opin_2",
        question: "No creo que _____ posible terminar todo hoy - es demasiado.",
        translation: "Ich glaube nicht, dass es möglich ist, heute alles zu beenden - es ist zu viel.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'no creer que' (NEGIERT) nutzen wir SUBJUNTIVO: 'no creo que sea' (glaube nicht, dass es sei). Dieser Zweifel an Machbarkeit ist realistisch."
      },
      {
        id: "opin_3",
        question: "Pienso que ella _____ una excelente profesora - enseña muy bien.",
        translation: "Ich denke, dass sie eine ausgezeichnete Lehrerin ist - sie unterrichtet sehr gut.",
        options: ["es", "sea", "será", "era"],
        correct: "es",
        explanation: "Nach 'pensar que' (BEJAHEND): Indikativ 'es' (ist). Diese positive Lehrerinnen-Beurteilung basiert auf Unterrichtserfahrung."
      },
      {
        id: "opin_4",
        question: "No pienso que _____ una buena idea salir con este tiempo horrible.",
        translation: "Ich denke nicht, dass es eine gute Idee ist, bei diesem schrecklichen Wetter rauszugehen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'no pensar que' (NEGIERT): Subjuntivo 'sea' (sei). Dieser Rat gegen Ausgehen basiert auf schlechten Wetterbedingungen."
      },
      {
        id: "opin_5",
        question: "Me parece que tú _____ razón en este asunto complicado controversial.",
        translation: "Mir scheint, dass du in dieser komplizierten kontroversen Angelegenheit Recht hast.",
        options: ["tienes", "tengas", "tendrás", "tenías"],
        correct: "tienes",
        explanation: "Nach 'me parece que' (BEJAHEND): Indikativ 'tienes' (hast). Diese Zustimmung zu deiner Position in Diskussion ist Unterstützung."
      },
      {
        id: "opin_6",
        question: "No me parece que _____ necesario hacer eso ahora mismo urgente.",
        translation: "Mir scheint es nicht, dass es notwendig ist, das jetzt gerade dringend zu machen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'no parecer que' (NEGIERT): Subjuntivo 'sea' (sei). Diese Meinung über fehlende Dringlichkeit entspannt Zeitdruck."
      },
      {
        id: "opin_7",
        question: "Opino que nosotros _____ tomar una decisión pronto rápidamente ya.",
        translation: "Ich meine, dass wir schon schnell bald eine Entscheidung treffen sollten.",
        options: ["debemos", "debamos", "deberemos", "debíamos"],
        correct: "debemos",
        explanation: "Nach 'opinar que' (BEJAHEND): Indikativ 'debemos' (sollten). Diese Meinungsäußerung drängt zu zeitnaher Entscheidung."
      },
      {
        id: "opin_8",
        question: "¿Crees que _____ llover mañana según las nubes oscuras negras?",
        translation: "Glaubst du, dass es morgen laut der dunklen schwarzen Wolken regnen wird?",
        options: ["va a", "vaya a", "irá a", "fuera a"],
        correct: "va a",
        explanation: "Nach '¿creer que?' (FRAGE, bejahend): meist Indikativ 'va a llover'. Diese Wettervorhersage basiert auf Wolkenbeobachtung."
      },
      {
        id: "opin_9",
        question: "No creo que él _____ la verdad completa - algo esconde seguro.",
        translation: "Ich glaube nicht, dass er die komplette Wahrheit sagt - er verbirgt sicher etwas.",
        options: ["diga", "dice", "dirá", "decía"],
        correct: "diga",
        explanation: "Nach 'no creer que': Subjuntivo 'diga' (sage). Dieser Zweifel an Wahrhaftigkeit zeigt Misstrauen in Aussage."
      },
      {
        id: "opin_10",
        question: "Me parece mentira que ya _____ pasado un año entero completo.",
        translation: "Es erscheint mir wie eine Lüge, dass schon ein ganzes komplettes Jahr vergangen ist.",
        options: ["haya", "ha", "habrá", "había"],
        correct: "haya",
        explanation: "Phrase 'parecer mentira que' braucht SUBJUNTIVO: 'haya pasado' (vergangen sei). Diese Überraschung über schnell verflogene Zeit ist häufiges Gefühl."
      },
      {
        id: "opin_11",
        question: "Estoy seguro de que ella _____ aprobar con buenas notas finales.",
        translation: "Ich bin sicher, dass sie mit guten Endnoten bestehen wird.",
        options: ["va a", "vaya a", "irá a", "fuera a"],
        correct: "va a",
        explanation: "Nach 'estar seguro de que': Indikativ (Sicherheit). Diese Zuversicht in ihren Erfolg basiert auf bisheriger Leistung."
      },
      {
        id: "opin_12",
        question: "No estoy seguro de que _____ suficiente tiempo para terminar todo.",
        translation: "Ich bin nicht sicher, dass genug Zeit ist, um alles zu beenden.",
        options: ["haya", "hay", "habrá", "había"],
        correct: "haya",
        explanation: "Nach 'no estar seguro': Subjuntivo 'haya' (es gebe). Diese Unsicherheit über Zeitressourcen ist realistisches Bedenken."
      },
      {
        id: "opin_13",
        question: "Supongo que ya _____ las noticias importantes de hoy por TV.",
        translation: "Ich vermute, dass du die wichtigen heutigen Nachrichten schon im TV gesehen hast.",
        options: ["has visto", "hayas visto", "verás", "vieras"],
        correct: "has visto",
        explanation: "Nach 'suponer que': meist Indikativ für Annahme. 'Supongo que has visto'. Diese Vermutung basiert auf Aktualität der Nachricht."
      },
      {
        id: "opin_14",
        question: "Dudo mucho que ellos _____ venir a la fiesta - están muy ocupados.",
        translation: "Ich bezweifle sehr, dass sie zur Party kommen - sie sind sehr beschäftigt.",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "Nach 'dudar que' (ZWEIFEL): Subjuntivo 'puedan' (können). Dieser starke Zweifel basiert auf ihrer Arbeitsbelastung."
      },
      {
        id: "opin_15",
        question: "Imagino que _____ cansado después de trabajar tanto tiempo largo seguido.",
        translation: "Ich stelle mir vor, dass du nach so langer ununterbrochener Arbeit müde bist.",
        options: ["estás", "estés", "estarás", "estabas"],
        correct: "estás",
        explanation: "Nach 'imaginar que': meist Indikativ. 'Imagino que estás cansado'. Diese Empathie für Müdigkeit nach langer Arbeit ist verständnisvoll."
      }
    ]
  },

  causativas: {
    name: "Construcciones Causativas",
    description: "Jemanden etwas tun lassen - hacer, dejar, mandar + Infinitiv",
    icon: Target,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "caus_1",
        question: "Mi madre me hace _____ mi habitación todos los sábados sin falta.",
        translation: "Meine Mutter lässt mich jeden Samstag ohne Ausnahme mein Zimmer aufräumen.",
        options: ["limpiar", "limpio", "limpie", "limpiando"],
        correct: "limpiar",
        explanation: "Nach 'hacer' (VERANLASSEN) folgt INFINITIV: 'me hace limpiar' (lässt mich aufräumen). Diese wöchentliche Putzverpflichtung ist elterliche Erziehungsmaßnahme."
      },
      {
        id: "caus_2",
        question: "El profesor nos dejó _____ temprano de clase hoy excepcionalmente.",
        translation: "Der Lehrer ließ uns heute ausnahmsweise früh aus dem Unterricht gehen.",
        options: ["salir", "salimos", "salgamos", "saliendo"],
        correct: "salir",
        explanation: "Nach 'dejar' (ERLAUBEN) folgt INFINITIV: 'nos dejó salir' (ließ uns gehen). Diese frühe Entlassung ist seltene angenehme Überraschung."
      },
      {
        id: "caus_3",
        question: "Mandé _____ mi coche viejo en el taller mecánico cercano ayer.",
        translation: "Ich ließ gestern mein altes Auto in der nahen Werkstatt reparieren.",
        options: ["reparar", "reparo", "repare", "reparando"],
        correct: "reparar",
        explanation: "Nach 'mandar' (IN AUFTRAG GEBEN) folgt INFINITIV: 'mandé reparar' (ließ reparieren). Diese Autoreparatur ist nötige Wartung."
      },
      {
        id: "caus_4",
        question: "El jefe hizo que todos _____ horas extras esta semana laboral.",
        translation: "Der Chef ließ alle diese Arbeitswoche Überstunden machen.",
        options: ["trabajaran", "trabajar", "trabajan", "trabajando"],
        correct: "trabajaran",
        explanation: "Alternative Konstruktion 'hacer que' braucht SUBJUNTIVO: 'hizo que trabajaran'. Dieser Überstunden-Zwang ist autoritäre Anordnung."
      },
      {
        id: "caus_5",
        question: "No me dejes _____ solo - tengo miedo de la oscuridad profunda.",
        translation: "Lass mich nicht allein - ich habe Angst vor der tiefen Dunkelheit.",
        options: ["solo", "estar solo", "estoy solo", "sola"],
        correct: "solo",
        explanation: "Nach 'dejar' kann ADJEKTIV stehen: 'no me dejes solo' (lass mich nicht allein). Diese Bitte um Gesellschaft zeigt Angst vor Alleinsein."
      },
      {
        id: "caus_6",
        question: "Hice _____ a mi hermano con las tareas difíciles de matemáticas.",
        translation: "Ich half meinem Bruder bei den schweren Mathe-Hausaufgaben.",
        options: ["ayudar", "ayudo", "ayude", "ayudando"],
        correct: "ayudar",
        explanation: "Nach 'hacer' OHNE Objekt vor Infinitiv: 'hice ayudar'. ABER besser 'ayudé a mi hermano'. 'Hacer + Infinitiv' ist eher 'veranlassen'."
      },
      {
        id: "caus_7",
        question: "Voy a mandar _____ una pizza grande a domicilio para cenar.",
        translation: "Ich werde eine große Pizza nach Hause zum Abendessen bestellen lassen.",
        options: ["traer", "traigo", "traiga", "trayendo"],
        correct: "traer",
        explanation: "Nach 'mandar' für BESTELLEN: 'mandar traer' (bringen lassen/bestellen). Diese Pizza-Lieferbestellung ist bequeme Abendessenlösung."
      },
      {
        id: "caus_8",
        question: "Mi padre me hizo _____ toda la verdad sobre lo que pasó.",
        translation: "Mein Vater ließ mich die ganze Wahrheit über das Geschehene sagen.",
        options: ["decir", "digo", "diga", "diciendo"],
        correct: "decir",
        explanation: "Veranlassen zur Ehrlichkeit: 'me hizo decir' (ließ mich sagen). Dieser väterliche Druck zur Wahrheit ist Erziehungsmaßnahme."
      },
      {
        id: "caus_9",
        question: "El médico me mandó _____ estas pastillas tres veces al día.",
        translation: "Der Arzt ließ mich/verschrieb mir, diese Pillen dreimal täglich zu nehmen.",
        options: ["tomar", "tomo", "tome", "tomando"],
        correct: "tomar",
        explanation: "Nach 'mandar' für VERSCHREIBEN: 'me mandó tomar' (ließ mich nehmen). Diese medizinische Anweisung ist Behandlungsplan."
      },
      {
        id: "caus_10",
        question: "Déjame _____ en paz - necesito estar solo un rato tiempo.",
        translation: "Lass mich in Ruhe - ich muss eine Zeit lang allein sein.",
        options: ["Ø", "estar", "estoy", "esté"],
        correct: "Ø",
        explanation: "Phrase 'déjame en paz' (lass mich in Ruhe): OHNE Infinitiv. Feste Redewendung. Diese Bitte um Alleinsein zeigt Bedürfnis nach Privatraum."
      },
      {
        id: "caus_11",
        question: "El ruido me hace _____ concentrado en mi trabajo importante.",
        translation: "Der Lärm lässt mich nicht konzentriert bei meiner wichtigen Arbeit sein.",
        options: ["no estar", "no estoy", "no esté", "no estar siendo"],
        correct: "no estar",
        explanation: "Nach 'hacer' mit Negation: 'me hace no estar concentrado'. Dieser störende Lärm verhindert Konzentration für Arbeit."
      },
      {
        id: "caus_12",
        question: "Hice que mi hermana me _____ con la mudanza pesada completa.",
        translation: "Ich ließ meine Schwester mir beim schweren kompletten Umzug helfen.",
        options: ["ayudara", "ayudar", "ayuda", "ayudando"],
        correct: "ayudara",
        explanation: "Mit 'hacer que': Subjuntivo 'ayudara' (helfen würde). Diese Umzugshilfe der Schwester ist familiäre Unterstützung bei großer Aufgabe."
      },
      {
        id: "caus_13",
        question: "Déjanos _____ - podemos hacerlo solos sin tu ayuda innecesaria.",
        translation: "Lass uns machen - wir können es ohne deine unnötige Hilfe allein machen.",
        options: ["hacer", "hacemos", "hagamos", "haciendo"],
        correct: "hacer",
        explanation: "Nach 'dejar' für LASSEN: 'déjanos hacer' (lass uns machen). Diese Bitte um Autonomie will Unabhängigkeit beweisen."
      },
      {
        id: "caus_14",
        question: "El maestro nos hace _____ en voz alta para practicar pronunciación.",
        translation: "Der Lehrer lässt uns laut lesen, um Aussprache zu üben.",
        options: ["leer", "leemos", "leamos", "leyendo"],
        correct: "leer",
        explanation: "Veranlassen: 'nos hace leer' (lässt uns lesen). Diese Leseübung laut ist klassische Sprachlernmethode für Aussprache."
      },
      {
        id: "caus_15",
        question: "Mandé que me _____ el informe antes del viernes próximo sin falta.",
        translation: "Ich ordnete an, dass sie mir den Bericht vor nächstem Freitag ohne Ausnahme schicken.",
        options: ["mandaran", "mandar", "mandan", "mandando"],
        correct: "mandaran",
        explanation: "Mit 'mandar que': Subjuntivo 'mandaran' (schicken würden). Diese Anordnung mit Deadline ist autoritäre Arbeitsanweisung."
      }
    ]
  },

  oraciones_finales: {
    name: "Oraciones Finales",
    description: "Finalsätze - para que, a fin de que - Zweck und Absicht ausdrücken",
    icon: Compass,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "final_1",
        question: "Te lo explico despacio _____ que lo entiendas bien claramente.",
        translation: "Ich erkläre es dir langsam, damit du es gut klar verstehst.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Für DAMIT nutzen wir 'para que' + SUBJUNTIVO: 'para que entiendas' (damit du verstehst). Diese langsame Erklärung zielt auf vollständiges Verständnis."
      },
      {
        id: "final_2",
        question: "Abre la ventana _____ que entre aire fresco limpio del exterior.",
        translation: "Öffne das Fenster, damit frische saubere Luft von außen hereinkommt.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que entre' (damit hereinkommt). Mit Subjuntivo. Diese Lüftung verbessert Raumluftqualität."
      },
      {
        id: "final_3",
        question: "Hablo despacio y claro _____ fin de que todos me entiendan.",
        translation: "Ich spreche langsam und klar, damit alle mich verstehen.",
        options: ["a", "con", "por", "en"],
        correct: "a",
        explanation: "Formeller: 'a fin de que' (damit/zum Zweck dass) + Subjuntivo. Gleich wie 'para que' aber formeller. Diese verständliche Sprechweise ist inklusiv."
      },
      {
        id: "final_4",
        question: "Te llamo _____ que sepas que llegué bien a casa sano.",
        translation: "Ich rufe dich an, damit du weißt, dass ich gut gesund zu Hause angekommen bin.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que sepas' (damit du weißt). Dieser Sicherheitsanruf nach Heimkehr beruhigt wartende Person."
      },
      {
        id: "final_5",
        question: "Trabajo duro _____ que mi familia pueda vivir bien cómodamente.",
        translation: "Ich arbeite hart, damit meine Familie gut bequem leben kann.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck für andere: 'para que mi familia pueda' (damit Familie kann). Diese Arbeitsmotivation ist familiäre Fürsorge."
      },
      {
        id: "final_6",
        question: "Estudio español _____ poder comunicarme cuando viaje a España pronto.",
        translation: "Ich lerne Spanisch, um mich kommunizieren zu können, wenn ich bald nach Spanien reise.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Für UM ZU (gleiches Subjekt): 'para poder' (um zu können). OHNE 'que'. Dieses Lernziel ist praktisch für geplante Spanienreise."
      },
      {
        id: "final_7",
        question: "Cierra la puerta _____ que no entre frío del exterior helado.",
        translation: "Schließ die Tür, damit keine Kälte von draußen eisig hereinkommt.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que no entre' (damit nicht hereinkommt). Diese Türschließung hält Wärme im Raum."
      },
      {
        id: "final_8",
        question: "Hablo alto fuerte _____ fin de que me oigan todos claramente.",
        translation: "Ich spreche laut, damit alle mich klar hören.",
        options: ["a", "con", "por", "en"],
        correct: "a",
        explanation: "Formell: 'a fin de que me oigan' (damit sie mich hören). Diese erhöhte Lautstärke sichert Verständlichkeit für alle."
      },
      {
        id: "final_9",
        question: "Te doy mi número _____ que me llames cuando llegues.",
        translation: "Ich gebe dir meine Nummer, damit du mich anrufst, wenn du ankommst.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que me llames' (damit du mich anrufst). Diese Nummernübergabe ermöglicht Kommunikation bei Ankunft."
      },
      {
        id: "final_10",
        question: "Repite la frase _____ que la aprendan todos de memoria completa.",
        translation: "Wiederhole den Satz, damit alle ihn komplett auswendig lernen.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que aprendan' (damit sie lernen). Diese Wiederholung ist Lehrmethode für Memorisierung."
      },
      {
        id: "final_11",
        question: "Ahorro dinero mensualmente _____ poder comprar un coche nuevo próximamente.",
        translation: "Ich spare monatlich Geld, um demnächst ein neues Auto kaufen zu können.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Gleiches Subjekt: 'para poder comprar' (um kaufen zu können). OHNE 'que'. Dieses Sparziel ist konkrete finanzielle Planung."
      },
      {
        id: "final_12",
        question: "Pon el despertador _____ que no se nos olvide levantarnos temprano.",
        translation: "Stell den Wecker, damit wir nicht vergessen, früh aufzustehen.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que no se nos olvide' (damit uns nicht entgeht). Dieser Wecker verhindert Verschlafen wichtiger Verpflichtung."
      },
      {
        id: "final_13",
        question: "Escribo todo en mi agenda _____ no olvidarme de nada importante.",
        translation: "Ich schreibe alles in meinen Kalender, um nichts Wichtiges zu vergessen.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Gleiches Subjekt: 'para no olvidarme' (um nicht zu vergessen). OHNE 'que'. Diese Organisationsmethode verhindert vergessene Termine."
      },
      {
        id: "final_14",
        question: "Habla más alto _____ fin de que todos podamos oírte bien.",
        translation: "Sprich lauter, damit wir alle dich gut hören können.",
        options: ["a", "con", "por", "en"],
        correct: "a",
        explanation: "Formell: 'a fin de que podamos' (damit wir können). Diese Bitte um Lautstärke verbessert Kommunikation für alle Zuhörer."
      },
      {
        id: "final_15",
        question: "Estudiamos juntos _____ que todos aprendamos más rápidamente mejor.",
        translation: "Wir lernen zusammen, damit wir alle schneller besser lernen.",
        options: ["para", "por", "porque", "cuando"],
        correct: "para",
        explanation: "Zweck: 'para que aprendamos' (damit wir lernen). Diese Gruppenlern-Strategie nutzt kollektive Intelligenz für bessere Resultate."
      }
    ]
  }
};

export default part25Categories;

/**
 * GERMAN → SPANISH GRAMMAR - PART 15
 * 3 categories, 15 questions each
 */

import { Zap, Award, Star } from "lucide-react";

export const part15Categories = {
  futuro_compuesto: {
    name: "Futuro Compuesto (Futur II)",
    description: "Werde gemacht haben - vollendete Handlung in Zukunft",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "fut_comp_1",
        question: "Para mañana, ya _____ _____ todo el trabajo pendiente completo.",
        translation: "Bis morgen werde ich die ganze ausstehende Arbeit fertig gemacht haben.",
        options: ["habré terminado", "he terminado", "terminaré", "terminé"],
        correct: "habré terminado",
        explanation: "Für VOLLENDUNG in Zukunft nutzen wir Futuro Compuesto: 'habré terminado' (werde beendet haben). Gebildet mit Futuro von 'haber' + Partizip. Diese Zusage zeigt Entschlossenheit, morgen fertig zu sein."
      },
      {
        id: "fut_comp_2",
        question: "Dentro de un año, ellos ya _____ _____ de la universidad.",
        translation: "In einem Jahr werden sie schon von der Universität abgeschlossen haben.",
        options: ["se habrán graduado", "se graduarán", "se han graduado", "se graduaron"],
        correct: "se habrán graduado",
        explanation: "Futuro Compuesto Plural: 'habrán graduado' (werden abgeschlossen haben). Dieser zukünftige Abschluss ist Ziel nach Jahren des Studiums."
      },
      {
        id: "fut_comp_3",
        question: "Cuando llegues tú, nosotros ya _____ _____ de cenar todos.",
        translation: "Wenn du ankommst, werden wir alle schon zu Abend gegessen haben.",
        options: ["habremos cenado", "hemos cenado", "cenaremos", "cenamos"],
        correct: "habremos cenado",
        explanation: "Handlung VOR zukünftigem Zeitpunkt: 'habremos cenado' (werden gegessen haben). Diese zeitliche Abfolge zeigt, dass ihr ohne ihn esst."
      },
      {
        id: "fut_comp_4",
        question: "Para el viernes próximo, ya _____ _____ todos los exámenes.",
        translation: "Bis nächsten Freitag werde ich alle Prüfungen gemacht haben.",
        options: ["habré hecho", "he hecho", "haré", "hice"],
        correct: "habré hecho",
        explanation: "Vollendung bis Freitag: 'habré hecho' (werde gemacht haben). Diese Prüfungsplanung setzt klare Deadline für Abschluss."
      },
      {
        id: "fut_comp_5",
        question: "¿Ya _____ _____ el informe largo para esa fecha límite?",
        translation: "Wirst du den langen Bericht bis zu jenem Stichtag fertig geschrieben haben?",
        options: ["habrás escrito", "has escrito", "escribirás", "escribiste"],
        correct: "habrás escrito",
        explanation: "Frage über zukünftige Vollendung: '¿habrás escrito?' (wirst du geschrieben haben?). Diese Nachfrage über Fortschritt prüft Zeitplanung."
      },
      {
        id: "fut_comp_6",
        question: "A las diez de la noche, ya _____ _____ los niños pequeños.",
        translation: "Um zehn Uhr abends werden die kleinen Kinder schon eingeschlafen sein.",
        options: ["se habrán dormido", "se dormirán", "se han dormido", "se durmieron"],
        correct: "se habrán dormido",
        explanation: "Erwartete Vollendung zu bestimmter Zeit: 'se habrán dormido' (werden eingeschlafen sein). Diese Schlafenszeit-Prognose hilft Eltern, Abend zu planen."
      },
      {
        id: "fut_comp_7",
        question: "Para fin de mes, _____ _____ suficiente dinero ahorrado.",
        translation: "Bis Monatsende werde ich genug Geld gespart haben.",
        options: ["habré ahorrado", "he ahorrado", "ahorraré", "ahorré"],
        correct: "habré ahorrado",
        explanation: "Sparziel bis Deadline: 'habré ahorrado' (werde gespart haben). Dieses finanzielle Ziel erfordert monatliche Disziplin."
      },
      {
        id: "fut_comp_8",
        question: "Seguramente ellos ya _____ _____ cuando llamemos por teléfono.",
        translation: "Sicherlich werden sie schon angekommen sein, wenn wir anrufen.",
        options: ["habrán llegado", "han llegado", "llegarán", "llegaron"],
        correct: "habrán llegado",
        explanation: "VERMUTUNG mit Futuro Compuesto: 'habrán llegado' (werden angekommen sein). Auch für Annahmen über Gegenwart möglich. Diese Erwartung ihrer Ankunft vor Anruf ist zeitliche Schätzung."
      },
      {
        id: "fut_comp_9",
        question: "En dos horas más, _____ _____ toda la película completa entera.",
        translation: "In noch zwei Stunden werde ich den ganzen kompletten Film gesehen haben.",
        options: ["habré visto", "he visto", "veré", "vi"],
        correct: "habré visto",
        explanation: "Vollendung nach Zeitdauer: 'habré visto' (werde gesehen haben). Diese Filmlänge-Kalkulation hilft, restliche Zeit zu planen."
      },
      {
        id: "fut_comp_10",
        question: "¿_____ _____ ya tú cuando yo llegue a tu casa?",
        translation: "Wirst du schon aufgestanden sein, wenn ich zu deinem Haus komme?",
        options: ["Te habrás levantado", "Te has levantado", "Te levantarás", "Te levantaste"],
        correct: "Te habrás levantado",
        explanation: "Reflexives Futuro Compuesto: 'te habrás levantado' (wirst aufgestanden sein). Diese Frage koordiniert Besuchszeit mit Morgenroutine."
      },
      {
        id: "fut_comp_11",
        question: "Supongo que ya _____ _____ las noticias sobre el cambio importante.",
        translation: "Ich vermute, dass du die Nachrichten über die wichtige Änderung schon gehört haben wirst.",
        options: ["habrás oído", "has oído", "oirás", "oíste"],
        correct: "habrás oído",
        explanation: "VERMUTUNG über Gegenwart mit Futuro Compuesto: 'habrás oído' (du wirst gehört haben). Diese Annahme über dein Wissen basiert auf Nachrichtenverbreitung."
      },
      {
        id: "fut_comp_12",
        question: "Para el próximo año, nosotros _____ _____ de mudarnos finalmente.",
        translation: "Bis nächstes Jahr werden wir endlich umgezogen sein.",
        options: ["habremos terminado", "hemos terminado", "terminaremos", "terminamos"],
        correct: "habremos terminado",
        explanation: "Vollendung des Umzugs bis Jahresende: 'habremos terminado de mudarnos'. Dieser langfristige Plan gibt Zeitrahmen für große Veränderung."
      },
      {
        id: "fut_comp_13",
        question: "¿Crees que para entonces ya _____ _____ el problema técnico?",
        translation: "Glaubst du, dass sie bis dahin das technische Problem schon gelöst haben werden?",
        options: ["habrán resuelto", "han resuelto", "resolverán", "resolvieron"],
        correct: "habrán resuelto",
        explanation: "Erwartung zukünftiger Vollendung: 'habrán resuelto' (werden gelöst haben). Diese Hoffnung auf rechtzeitige Problemlösung ist wichtig für Projektfortschritt."
      },
      {
        id: "fut_comp_14",
        question: "_____ _____ las diez de la noche cuando terminen la reunión.",
        translation: "Es werden zehn Uhr abends sein, wenn sie das Treffen beenden.",
        options: ["Habrán sido", "Han sido", "Serán", "Fueron"],
        correct: "Habrán sido",
        explanation: "Zeitpunkt-Schätzung: 'habrán sido las diez' (es werden zehn gewesen sein). Diese Meeting-Längen-Vorhersage ist praktisch für Planung."
      },
      {
        id: "fut_comp_15",
        question: "Imagino que ya _____ _____ a casa del trabajo para entonces.",
        translation: "Ich stelle mir vor, dass er bis dahin schon von der Arbeit nach Hause gekommen sein wird.",
        options: ["habrá vuelto", "ha vuelto", "volverá", "volvió"],
        correct: "habrá vuelto",
        explanation: "ANNAHME über zukünftigen Zustand: 'habrá vuelto' (wird zurückgekommen sein). Diese Vermutung basiert auf üblichem Arbeitszeitende."
      }
    ]
  },

  condicional_compuesto: {
    name: "Condicional Compuesto (Konditional II)",
    description: "Hätte gemacht - nicht realisierte Handlungen in Vergangenheit",
    icon: Award,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "cond_comp_1",
        question: "Yo _____ _____ más si hubiera sabido la verdad completa.",
        translation: "Ich hätte mehr gelernt, wenn ich die komplette Wahrheit gewusst hätte.",
        options: ["habría estudiado", "he estudiado", "estudiaría", "estudié"],
        correct: "habría estudiado",
        explanation: "Für HÄTTE GEMACHT nutzen wir Condicional Compuesto: 'habría estudiado' (hätte gelernt). Mit 'si hubiera sabido' für irreale Vergangenheit. Dieses Bedauern über zu wenig Lernen kann nicht mehr korrigiert werden."
      },
      {
        id: "cond_comp_2",
        question: "Con más tiempo, nosotros _____ _____ el proyecto mejor acabado.",
        translation: "Mit mehr Zeit hätten wir das Projekt besser fertig gemacht.",
        options: ["habríamos terminado", "hemos terminado", "terminaríamos", "terminamos"],
        correct: "habríamos terminado",
        explanation: "Hypothetische Verbesserung: 'habríamos terminado' (hätten beendet). Diese Reflexion über Zeitmangel zeigt, dass Ergebnis mit mehr Zeit besser gewesen wäre."
      },
      {
        id: "cond_comp_3",
        question: "Ella _____ _____ el trabajo si se lo hubieran ofrecido realmente.",
        translation: "Sie hätte die Arbeit angenommen, wenn sie ihr wirklich angeboten worden wäre.",
        options: ["habría aceptado", "ha aceptado", "aceptaría", "aceptó"],
        correct: "habría aceptado",
        explanation: "Irreale Vergangenheit: 'habría aceptado' (hätte angenommen). Diese nicht erfolgte Jobofferte ist verpasste Gelegenheit."
      },
      {
        id: "cond_comp_4",
        question: "De haberlo sabido antes, te _____ _____ inmediatamente sin demora.",
        translation: "Hätte ich es vorher gewusst, hätte ich dich sofort ohne Verzögerung angerufen.",
        options: ["habría llamado", "he llamado", "llamaría", "llamé"],
        correct: "habría llamado",
        explanation: "Mit 'de haber(lo) sabido' (hätte ich gewusst): verkürzte Form für 'si hubiera sabido'. Diese verpasste Kommunikation ist bedauerlich."
      },
      {
        id: "cond_comp_5",
        question: "Ellos _____ _____ a la fiesta si no hubieran estado enfermos.",
        translation: "Sie wären zur Party gekommen, wenn sie nicht krank gewesen wären.",
        options: ["habrían venido", "han venido", "vendrían", "vinieron"],
        correct: "habrían venido",
        explanation: "Irreale Vergangenheit: 'habrían venido' (wären gekommen). Krankheit verhinderte Teilnahme - unveränderbare Vergangenheit."
      },
      {
        id: "cond_comp_6",
        question: "Yo _____ _____ lo mismo en tu situación difícil personal.",
        translation: "Ich hätte in deiner schwierigen persönlichen Situation dasselbe getan.",
        options: ["habría hecho", "he hecho", "haría", "hice"],
        correct: "habría hecho",
        explanation: "Hypothetisches Handeln in Vergangenheit: 'habría hecho' (hätte getan). Diese Empathie zeigt Verständnis für deine Entscheidung."
      },
      {
        id: "cond_comp_7",
        question: "Sin tu ayuda valiosa, no _____ _____ terminar el proyecto a tiempo.",
        translation: "Ohne deine wertvolle Hilfe hätten wir das Projekt nicht rechtzeitig beenden können.",
        options: ["habríamos podido", "hemos podido", "podríamos", "pudimos"],
        correct: "habríamos podido",
        explanation: "Unmöglichkeit ohne Hilfe: 'no habríamos podido' (hätten nicht können). Diese Dankbarkeit erkennt deine essentielle Rolle an."
      },
      {
        id: "cond_comp_8",
        question: "¿Qué _____ _____ tú en mi lugar en esa situación compleja?",
        translation: "Was hättest du an meiner Stelle in jener komplexen Situation getan?",
        options: ["habrías hecho", "has hecho", "harías", "hiciste"],
        correct: "habrías hecho",
        explanation: "Hypothetische Frage über Vergangenheit: '¿qué habrías hecho?' (was hättest du getan?). Diese Frage sucht Perspektive auf vergangene Entscheidung."
      },
      {
        id: "cond_comp_9",
        question: "Me _____ _____ quedar más tiempo si no tuviera tanto trabajo.",
        translation: "Ich wäre länger geblieben, wenn ich nicht so viel Arbeit hätte.",
        options: ["habría gustado", "ha gustado", "gustaría", "gustó"],
        correct: "habría gustado",
        explanation: "Für Wunsch der nicht erfüllt wurde: 'me habría gustado quedar' (hätte mir gefallen zu bleiben). Arbeit verhinderte längeren Aufenthalt."
      },
      {
        id: "cond_comp_10",
        question: "Él _____ _____ médico si hubiera estudiado medicina en universidad.",
        translation: "Er wäre Arzt geworden, wenn er Medizin an der Universität studiert hätte.",
        options: ["habría sido", "ha sido", "sería", "fue"],
        correct: "habría sido",
        explanation: "Nicht realisierte Karriere: 'habría sido médico' (wäre Arzt geworden). Diese alternative Lebensgeschichte bleibt Spekulation."
      },
      {
        id: "cond_comp_11",
        question: "De haber tenido dinero suficiente, _____ _____ ese coche deportivo.",
        translation: "Hätte ich genug Geld gehabt, hätte ich jenes Sportwagen gekauft.",
        options: ["habría comprado", "he comprado", "compraría", "compré"],
        correct: "habría comprado",
        explanation: "Verkürzte Bedingung 'de haber tenido': 'habría comprado' (hätte gekauft). Dieser verpasste Autokauf ist finanzielle Unmöglichkeit."
      },
      {
        id: "cond_comp_12",
        question: "Nosotros _____ _____ antes si hubiéramos sabido del tráfico pesado.",
        translation: "Wir wären früher losgefahren, wenn wir vom schweren Verkehr gewusst hätten.",
        options: ["habríamos salido", "hemos salido", "saldríamos", "salimos"],
        correct: "habríamos salido",
        explanation: "Nicht gemachte Handlung wegen fehlender Information: 'habríamos salido' (wären losgefahren). Diese Verspätung durch Verkehr hätte vermieden werden können."
      },
      {
        id: "cond_comp_13",
        question: "¿_____ _____ el libro si supieras el final triste anticipadamente?",
        translation: "Hättest du das Buch gelesen, wenn du das traurige Ende im Voraus gewusst hättest?",
        options: ["Habrías leído", "Has leído", "Leerías", "Leíste"],
        correct: "Habrías leído",
        explanation: "Hypothetische Frage: '¿habrías leído?' (hättest du gelesen?). Diese Frage testet, ob vorheriges Wissen Entscheidung geändert hätte."
      },
      {
        id: "cond_comp_14",
        question: "Ellos _____ _____ mucho dinero si hubieran invertido en esa empresa.",
        translation: "Sie hätten viel Geld verdient, wenn sie in jene Firma investiert hätten.",
        options: ["habrían ganado", "han ganado", "ganarían", "ganaron"],
        correct: "habrían ganado",
        explanation: "Verpasste finanzielle Chance: 'habrían ganado' (hätten verdient). Diese nicht gemachte Investition ist im Nachhinein bedauerlich."
      },
      {
        id: "cond_comp_15",
        question: "Yo nunca _____ _____ eso - va contra mis principios morales.",
        translation: "Ich hätte das niemals getan - es geht gegen meine moralischen Prinzipien.",
        options: ["habría hecho", "he hecho", "haría", "hice"],
        correct: "habría hecho",
        explanation: "Moralische Unmöglichkeit auch in Vergangenheit: 'nunca habría hecho' (hätte niemals getan). Diese ethische Position ist unabhängig von Umständen."
      }
    ]
  },

  articulos_determinados: {
    name: "Artículos Determinados (Bestimmte Artikel)",
    description: "El, la, los, las - der, die, das richtig verwenden",
    icon: Star,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "art_det_1",
        question: "_____ libro que compré ayer es muy interesante y educativo.",
        translation: "Das Buch, das ich gestern kaufte, ist sehr interessant und lehrreich.",
        options: ["El", "La", "Los", "Las"],
        correct: "El",
        explanation: "Für maskulin Singular nutzen wir 'el': 'el libro' (das Buch). Deutsche 'das' kann maskulin sein im Spanischen. Dieser bestimmte Artikel zeigt spezifisches Buch."
      },
      {
        id: "art_det_2",
        question: "_____ casa de mis abuelos está en el campo lejos de aquí.",
        translation: "Das Haus meiner Großeltern ist auf dem Land weit von hier.",
        options: ["La", "El", "Las", "Los"],
        correct: "La",
        explanation: "Für feminin Singular: 'la casa' (das Haus). Deutsche 'das' ist 'la' bei femininen Wörtern. Dieses Landhaus der Großeltern ist wahrscheinlich ruhiger Rückzugsort."
      },
      {
        id: "art_det_3",
        question: "_____ niños están jugando en el parque cerca de aquí ahora.",
        translation: "Die Kinder spielen jetzt im Park hier in der Nähe.",
        options: ["Los", "El", "Las", "La"],
        correct: "Los",
        explanation: "Für maskulin Plural: 'los niños' (die Kinder). Auch bei gemischten Gruppen maskulin. Diese spielenden Kinder im Park genießen Outdoor-Zeit."
      },
      {
        id: "art_det_4",
        question: "_____ flores del jardín son muy hermosas y coloridas variadas.",
        translation: "Die Blumen des Gartens sind sehr schön und bunt vielfältig.",
        options: ["Las", "El", "Los", "La"],
        correct: "Las",
        explanation: "Für feminin Plural: 'las flores' (die Blumen). Deutsche 'die' ist 'las' bei Plural feminin. Diese bunten Gartenblumen sind dekorative Naturschönheit."
      },
      {
        id: "art_det_5",
        question: "Me gusta mucho _____ música clásica del período romántico especialmente.",
        translation: "Mir gefällt besonders klassische Musik der romantischen Periode sehr.",
        options: ["la", "el", "las", "los"],
        correct: "la",
        explanation: "Bei ALLGEMEINEN Konzepten nutzen wir Artikel: 'la música' (die Musik). Deutsche lassen oft Artikel weg, Spanisch nicht. Diese Musikpräferenz zeigt kultivierten Geschmack."
      },
      {
        id: "art_det_6",
        question: "_____ agua de este río está muy contaminada y sucia lamentablemente.",
        translation: "Das Wasser dieses Flusses ist leider sehr verschmutzt und schmutzig.",
        options: ["El", "La", "Los", "Las"],
        correct: "El",
        explanation: "AUSNAHME: 'agua' ist feminin aber nimmt 'el' wegen betontem 'a': 'el agua' (das Wasser). Nur Singular, Plural ist 'las aguas'. Diese Wasserverschmutzung ist Umweltproblem."
      },
      {
        id: "art_det_7",
        question: "_____ lunes siempre es el día más difícil de la semana para mí.",
        translation: "Der Montag ist für mich immer der schwierigste Tag der Woche.",
        options: ["El", "La", "Los", "Las"],
        correct: "El",
        explanation: "Wochentage sind maskulin: 'el lunes' (der Montag). Bei Plural 'los lunes' (montags/die Montage). Dieser gefürchtete Wochenanfang ist universelles Phänomen."
      },
      {
        id: "art_det_8",
        question: "_____ manos deben lavarse antes de comer cada comida siempre.",
        translation: "Die Hände müssen vor jeder Mahlzeit immer gewaschen werden.",
        options: ["Las", "Los", "La", "El"],
        correct: "Las",
        explanation: "Feminin Plural: 'las manos' (die Hände). Diese Hygieneregel ist grundlegende Gesundheitspraxis."
      },
      {
        id: "art_det_9",
        question: "_____ amor es lo más importante en la vida según mi opinión.",
        translation: "Die Liebe ist meiner Meinung nach das Wichtigste im Leben.",
        options: ["El", "La", "Los", "Las"],
        correct: "El",
        explanation: "Abstraktes Konzept mit Artikel: 'el amor' (die Liebe). Maskulin. Diese philosophische Aussage prioritisiert Liebe über alles andere."
      },
      {
        id: "art_det_10",
        question: "Voy a _____ escuela todos los días de lunes a viernes.",
        translation: "Ich gehe von Montag bis Freitag jeden Tag zur Schule.",
        options: ["la", "el", "las", "los"],
        correct: "la",
        explanation: "Mit Ortsangabe: 'voy a la escuela' (gehe zur Schule). Artikel bleibt. Diese tägliche Schulroutine strukturiert Wochentage."
      },
      {
        id: "art_det_11",
        question: "_____ café de Colombia es muy famoso mundialmente por su calidad.",
        translation: "Der Kaffee aus Kolumbien ist weltweit sehr berühmt für seine Qualität.",
        options: ["El", "La", "Los", "Las"],
        correct: "El",
        explanation: "Maskulin: 'el café' (der Kaffee). Dieser kolumbianische Kaffee-Ruhm basiert auf idealen Anbaubedingungen."
      },
      {
        id: "art_det_12",
        question: "_____ profesores de esta escuela son muy dedicados y profesionales.",
        translation: "Die Lehrer dieser Schule sind sehr engagiert und professionell.",
        options: ["Los", "Las", "El", "La"],
        correct: "Los",
        explanation: "Maskulin Plural: 'los profesores' (die Lehrer). Diese Lehrerqualität macht Schule attraktiv für Eltern."
      },
      {
        id: "art_det_13",
        question: "Me duele mucho _____ cabeza - creo que necesito descansar ya.",
        translation: "Mir tut der Kopf sehr weh - ich glaube, ich muss jetzt ausruhen.",
        options: ["la", "el", "las", "los"],
        correct: "la",
        explanation: "Feminin: 'la cabeza' (der Kopf). Bei Körperteilen Artikel statt Possessiv. Diese Kopfschmerzen signalisieren Ruhebedarf."
      },
      {
        id: "art_det_14",
        question: "_____ montañas de los Andes son muy altas e impresionantes realmente.",
        translation: "Die Berge der Anden sind wirklich sehr hoch und beeindruckend.",
        options: ["Las", "Los", "La", "El"],
        correct: "Las",
        explanation: "Feminin Plural: 'las montañas' (die Berge). Diese imposanten Andenberge sind geografisches Wahrzeichen Südamerikas."
      },
      {
        id: "art_det_15",
        question: "Prefiero _____ té verde natural al café negro fuerte siempre.",
        translation: "Ich bevorzuge natürlichen grünen Tee gegenüber starkem schwarzen Kaffee immer.",
        options: ["el", "la", "los", "las"],
        correct: "el",
        explanation: "Maskulin: 'el té' (der Tee). Diese Getränkepräferenz zeigt gesundheitsbewusste Wahl über stimulierenderen Kaffee."
      }
    ]
  },

  palabras_parecidas: {
    name: "Palabras Parecidas (Verwechslungsgefahr)",
    description: "Saber/Conocer, Pedir/Preguntar - ähnliche aber unterschiedliche Verben",
    icon: Star,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "parec_1",
        question: "Yo _____ hablar español desde hace cinco años ya completos.",
        translation: "Ich kann seit schon fünf vollen Jahren Spanisch sprechen.",
        options: ["sé", "conozco", "puedo", "puede"],
        correct: "sé",
        explanation: "Für WISSEN WIE (Fähigkeit) nutzen wir 'saber': 'sé hablar' (ich weiß zu sprechen/kann sprechen). Nicht 'conocer'. Diese Sprachfertigkeit ist Resultat jahrelangen Lernens."
      },
      {
        id: "parec_2",
        question: "¿_____ a mi hermano? Es el chico alto de allá lejos.",
        translation: "Kennst du meinen Bruder? Er ist der große Junge dort weit weg.",
        options: ["Conoces", "Sabes", "Puedes", "Quieres"],
        correct: "Conoces",
        explanation: "Für PERSONEN KENNEN nutzen wir 'conocer': '¿conoces a mi hermano?' (kennst du?). Nicht 'saber'. Diese Frage klärt, ob Bekanntschaft besteht."
      },
      {
        id: "parec_3",
        question: "Le _____ ayuda al profesor porque no entiendo nada del tema.",
        translation: "Ich bitte den Lehrer um Hilfe, weil ich nichts vom Thema verstehe.",
        options: ["pido", "pregunto", "digo", "hablo"],
        correct: "pido",
        explanation: "Für UM ETWAS BITTEN nutzen wir 'pedir': 'pido ayuda' (bitte um Hilfe). 'Preguntar' ist stellen von Fragen. Diese Hilfsanfrage zeigt Verständnisschwierigkeiten."
      },
      {
        id: "parec_4",
        question: "_____ la hora a un señor en la calle porque no tengo reloj.",
        translation: "Ich frage einen Herrn auf der Straße nach der Uhrzeit, weil ich keine Uhr habe.",
        options: ["Pregunto", "Pido", "Digo", "Hablo"],
        correct: "Pregunto",
        explanation: "Für FRAGEN STELLEN nutzen wir 'preguntar': 'pregunto la hora' (frage nach Uhrzeit). Diese alltägliche Straßenfrage ist üblich ohne eigene Uhr."
      },
      {
        id: "parec_5",
        question: "No _____ dónde vive mi profesora nueva de español exactamente.",
        translation: "Ich weiß nicht, wo meine neue Spanischlehrerin genau wohnt.",
        options: ["sé", "conozco", "puedo", "quiero"],
        correct: "sé",
        explanation: "Für INFORMATION WISSEN: 'no sé dónde' (weiß nicht wo). 'Saber' für Fakten. Dieses fehlende Wissen über Adresse ist normale Distanz Lehrer-Schüler."
      },
      {
        id: "parec_6",
        question: "¿_____ Madrid? Es una ciudad preciosa muy hermosa cultural.",
        translation: "Kennst du Madrid? Es ist eine sehr schöne kostbare kulturelle Stadt.",
        options: ["Conoces", "Sabes", "Puedes", "Quieres"],
        correct: "Conoces",
        explanation: "Für ORTE KENNEN (vertraut sein): 'conocer Madrid'. Erfahrung mit Stadt. Diese Frage öffnet Gespräch über Reiseerlebnisse."
      },
      {
        id: "parec_7",
        question: "Siempre _____ perdón cuando cometo un error grave importante.",
        translation: "Ich bitte immer um Verzeihung, wenn ich einen schweren wichtigen Fehler mache.",
        options: ["pido", "pregunto", "digo", "hablo"],
        correct: "pido",
        explanation: "Für UM VERZEIHUNG BITTEN: 'pedir perdón' (um Verzeihung bitten). Diese Entschuldigung zeigt Verantwortungsbewusstsein für Fehler."
      },
      {
        id: "parec_8",
        question: "Mi hermana _____ tocar el piano desde los seis años edad.",
        translation: "Meine Schwester kann seit dem Alter von sechs Jahren Klavier spielen.",
        options: ["sabe", "conoce", "puede", "quiere"],
        correct: "sabe",
        explanation: "Für erlernte FÄHIGKEIT: 'saber tocar' (wissen zu spielen/können). Diese früh erlernte Musikalität ist jahrelang kultiviertes Talent."
      },
      {
        id: "parec_9",
        question: "Le _____ permiso a mi jefe para salir temprano mañana tarde.",
        translation: "Ich bitte meinen Chef um Erlaubnis, morgen Nachmittag früh zu gehen.",
        options: ["pido", "pregunto", "digo", "hablo"],
        correct: "pido",
        explanation: "Für UM ERLAUBNIS BITTEN: 'pedir permiso' (um Erlaubnis bitten). Diese höfliche Anfrage respektiert Hierarchie."
      },
      {
        id: "parec_10",
        question: "No _____ a ese cantante famoso - ¿quién es él exactamente?",
        translation: "Ich kenne jenen berühmten Sänger nicht - wer ist er genau?",
        options: ["conozco", "sé", "puedo", "quiero"],
        correct: "conozco",
        explanation: "Für PERSONEN nicht kennen: 'no conozco' (kenne nicht). Diese Unkenntnis von Berühmtheit ist bei Nicht-Fans normal."
      },
      {
        id: "parec_11",
        question: "¿_____ cuántos años tiene tu madre aproximadamente más o menos?",
        translation: "Weißt du ungefähr mehr oder weniger, wie alt deine Mutter ist?",
        options: ["Sabes", "Conoces", "Puedes", "Quieres"],
        correct: "Sabes",
        explanation: "Für INFORMATION WISSEN: 'sabes cuántos años' (weißt du wie viele Jahre). Diese persönliche Frage ist manchmal sensibel."
      },
      {
        id: "parec_12",
        question: "_____ un favor a mi compañero de trabajo en la oficina.",
        translation: "Ich bitte einen Arbeitskollegen im Büro um einen Gefallen.",
        options: ["Pido", "Pregunto", "Digo", "Hablo"],
        correct: "Pido",
        explanation: "Für GEFALLEN BITTEN: 'pedir un favor' (um Gefallen bitten). Diese kollegiale Hilfsanfrage ist normale Arbeitsplatzdynamik."
      },
      {
        id: "parec_13",
        question: "_____ muy bien esta ciudad porque viví aquí diez años completos.",
        translation: "Ich kenne diese Stadt sehr gut, weil ich hier zehn volle Jahre lebte.",
        options: ["Conozco", "Sé", "Puedo", "Quiero"],
        correct: "Conozco",
        explanation: "Für ORT durch Erfahrung kennen: 'conozco la ciudad' (kenne Stadt). Diese Ortskenntnis basiert auf jahrelanger Residenz."
      },
      {
        id: "parec_14",
        question: "Le _____ su opinión personal sobre mi presentación del proyecto.",
        translation: "Ich frage ihn nach seiner persönlichen Meinung über meine Projektpräsentation.",
        options: ["pregunto", "pido", "digo", "hablo"],
        correct: "pregunto",
        explanation: "Für nach MEINUNG FRAGEN: 'preguntar su opinión'. Stellt Frage. Dieses Feedback-Suchen zeigt Interesse an Verbesserung."
      },
      {
        id: "parec_15",
        question: "Yo _____ que mañana va a llover según el pronóstico meteorológico.",
        translation: "Ich weiß, dass es morgen laut Wettervorhersage regnen wird.",
        options: ["sé", "conozco", "puedo", "quiero"],
        correct: "sé",
        explanation: "Für INFORMATION WISSEN mit Nebensatz: 'sé que va a llover' (weiß, dass es regnen wird). Diese Wetterinformation hilft bei Tagesplanung."
      }
    ]
  }
};

export default part15Categories;

/**
 * GERMAN → SPANISH GRAMMAR - PART 19
 * 4 categories, 15 questions each
 */

import { GitBranch, BookOpen, MapPin, MessageCircle } from "lucide-react";

export const part19Categories = {
  concordancia_tiempos: {
    name: "Concordancia de Tiempos (Zeitenfolge)",
    description: "Zeitharmonie - Haupt- und Nebensatz zeitlich abstimmen",
    icon: GitBranch,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "concord_1",
        question: "Me dijo que _____ cansado y quería dormir pronto inmediatamente.",
        translation: "Er sagte mir, dass er müde war und sofort bald schlafen wollte.",
        options: ["estaba", "está", "estuvo", "estaría"],
        correct: "estaba",
        explanation: "Zeitenfolge: Vergangenheit im Hauptsatz verlangt Vergangenheit im Nebensatz. 'Dijo que estaba' (sagte, dass er war). Imperfecto für Gleichzeitigkeit. Diese Müdigkeit erklärte seinen Wunsch nach frühem Schlaf."
      },
      {
        id: "concord_2",
        question: "Dice que _____ mucho trabajo esta semana y está muy ocupado.",
        translation: "Er sagt, dass er diese Woche viel Arbeit hat und sehr beschäftigt ist.",
        options: ["tiene", "tenía", "tuvo", "tendría"],
        correct: "tiene",
        explanation: "Präsens im Hauptsatz: Präsens im Nebensatz. 'Dice que tiene' (sagt, dass er hat). Diese aktuelle Arbeitsbelastung ist gegenwärtige Situation."
      },
      {
        id: "concord_3",
        question: "Creía que tú _____ venir a la fiesta - me equivoqué completamente.",
        translation: "Ich glaubte, dass du zur Party kommen würdest - ich irrte mich völlig.",
        options: ["vendrías", "vienes", "venías", "viniste"],
        correct: "vendrías",
        explanation: "Vergangenheit im Hauptsatz + Zukunft: Condicional. 'Creía que vendrías' (glaubte, dass du kommen würdest). Diese falsche Annahme führte zu Enttäuschung."
      },
      {
        id: "concord_4",
        question: "Espero que _____ buen tiempo mañana para nuestro picnic planeado.",
        translation: "Ich hoffe, dass morgen gutes Wetter für unser geplantes Picknick ist.",
        options: ["haga", "hace", "hará", "hacía"],
        correct: "haga",
        explanation: "Nach 'esperar que' (Gegenwart): Subjuntivo Präsens. 'Espero que haga' (hoffe, dass es macht/ist). Diese Wetterhoffnung beeinflusst Outdoor-Planung."
      },
      {
        id: "concord_5",
        question: "Me prometió que me _____ al día siguiente sin falta alguna.",
        translation: "Er versprach mir, dass er mich am nächsten Tag ohne jegliche Ausnahme anrufen würde.",
        options: ["llamaría", "llamará", "llama", "llamó"],
        correct: "llamaría",
        explanation: "Versprechen in Vergangenheit für relative Zukunft: Condicional. 'Prometió que llamaría' (versprach, dass er anrufen würde). Dieser Anruf sollte stattgefunden haben."
      },
      {
        id: "concord_6",
        question: "Sé que _____ muy ocupado últimamente - te entiendo perfectamente bien.",
        translation: "Ich weiß, dass du in letzter Zeit sehr beschäftigt warst - ich verstehe dich perfekt gut.",
        options: ["has estado", "habías estado", "estarás", "estés"],
        correct: "has estado",
        explanation: "Gegenwart im Hauptsatz mit Perfekt: 'sé que has estado' (weiß, dass du gewesen bist). Beschäftigung bis jetzt relevant. Dieses Verständnis für Zeitmangel ist empathisch."
      },
      {
        id: "concord_7",
        question: "Pensaba que ellos _____ _____ el examen fácilmente sin problemas.",
        translation: "Ich dachte, dass sie die Prüfung problemlos leicht bestehen würden.",
        options: ["aprobarían", "aprobarán", "aprueban", "aprobaron"],
        correct: "aprobarían",
        explanation: "Vergangenheit + relative Zukunft: Condicional. 'Pensaba que aprobarían' (dachte, dass sie bestehen würden). Diese Erwartung wurde vielleicht nicht erfüllt."
      },
      {
        id: "concord_8",
        question: "Dudo que _____ terminado el proyecto a tiempo para la entrega.",
        translation: "Ich bezweifle, dass sie das Projekt rechtzeitig für die Abgabe beendet haben.",
        options: ["hayan", "han", "habrán", "habían"],
        correct: "hayan",
        explanation: "Nach 'dudar' (Gegenwart): Subjuntivo Perfekt. 'Dudo que hayan terminado' (bezweifle, dass sie beendet haben). Dieser Zweifel basiert auf bisherigem Tempo."
      },
      {
        id: "concord_9",
        question: "Me alegré de que _____ bien en el examen final difícil importante.",
        translation: "Ich freute mich, dass du in der wichtigen schweren Abschlussprüfung gut abgeschnitten hattest.",
        options: ["hubieras salido", "hayas salido", "saliste", "sales"],
        correct: "hubieras salido",
        explanation: "Vergangenheit im Hauptsatz: Imperfecto Subjuntivo Perfekt im Nebensatz. 'Me alegré de que hubieras salido'. Diese Freude über Erfolg ist emotionale Reaktion."
      },
      {
        id: "concord_10",
        question: "Supongo que ya _____ las noticias importantes de hoy por televisión.",
        translation: "Ich vermute, dass du die wichtigen heutigen Nachrichten schon im Fernsehen gesehen hast.",
        options: ["has visto", "habías visto", "verás", "veas"],
        correct: "has visto",
        explanation: "Vermutung in Gegenwart über vollendete Handlung: Perfekt. 'Supongo que has visto' (vermute, dass du gesehen hast). Diese Annahme basiert auf Aktualität."
      },
      {
        id: "concord_11",
        question: "Temía que no _____ a tiempo a la boda importante nuestra.",
        translation: "Ich fürchtete, dass sie nicht rechtzeitig zu unserer wichtigen Hochzeit kommen würden.",
        options: ["llegaran", "lleguen", "llegarán", "llegaron"],
        correct: "llegaran",
        explanation: "Vergangenheit + Subjuntivo: Imperfecto Subjuntivo. 'Temía que llegaran' (fürchtete, dass sie kämen). Diese Hochzeitssorge um Gästepünktlichkeit."
      },
      {
        id: "concord_12",
        question: "Estoy seguro de que _____ aprobar si estudias con dedicación seria.",
        translation: "Ich bin sicher, dass du bestehen wirst, wenn du mit ernster Hingabe lernst.",
        options: ["vas a", "ibas a", "vayas", "fueras"],
        correct: "vas a",
        explanation: "Sicherheit in Gegenwart über Zukunft: 'seguro de que vas a' (sicher, dass du wirst). Dieser motivierende Zuspruch verbindet Erfolg mit Anstrengung."
      },
      {
        id: "concord_13",
        question: "No creía que _____ tan difícil resolver ese problema técnico complicado.",
        translation: "Ich glaubte nicht, dass es so schwer sein würde, jenes komplizierte technische Problem zu lösen.",
        options: ["fuera", "es", "será", "era"],
        correct: "fuera",
        explanation: "Negiertes 'creer' in Vergangenheit: Imperfecto Subjuntivo. 'No creía que fuera' (glaubte nicht, dass es wäre). Diese Unterschätzung der Schwierigkeit."
      },
      {
        id: "concord_14",
        question: "Pienso que mañana _____ un día perfecto para ir a la playa.",
        translation: "Ich denke, dass morgen ein perfekter Tag sein wird, um zum Strand zu gehen.",
        options: ["será", "sea", "es", "era"],
        correct: "será",
        explanation: "Nach 'pensar' (bejahend): Indikativ. 'Pienso que será' (denke, dass es sein wird). Futuro für Morgen. Diese Strandplanung basiert auf Wettererwartung."
      },
      {
        id: "concord_15",
        question: "Sabía que _____ estudiar mucho para aprobar ese examen extremo duro.",
        translation: "Ich wusste, dass du viel lernen musstest, um jene extrem harte Prüfung zu bestehen.",
        options: ["tenías que", "tienes que", "tendrás que", "tengas que"],
        correct: "tenías que",
        explanation: "Vergangenheit parallel: 'sabía que tenías que' (wusste, dass du musstest). Imperfecto für Notwendigkeit damals. Diese Lernanforderung war klar ersichtlich."
      }
    ]
  },

  articulos_especiales: {
    name: "Uso Especial de Artículos",
    description: "Artikel bei Abstrakta, Sprachen, Ländern - Sonderregeln",
    icon: BookOpen,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "art_esp_1",
        question: "_____ vida es bella - hay que disfrutarla cada día plenamente.",
        translation: "Das Leben ist schön - man muss es jeden Tag voll genießen.",
        options: ["La", "El", "Una", "Ø"],
        correct: "La",
        explanation: "Bei ABSTRAKTEN Konzepten nutzen wir Artikel: 'la vida' (das Leben). Deutsche lassen oft weg. Diese philosophische Lebensweisheit betont Lebensbejahung."
      },
      {
        id: "art_esp_2",
        question: "Me encanta _____ música clásica del período barroco antiguo especialmente.",
        translation: "Mir gefällt besonders klassische Musik der alten Barockperiode sehr.",
        options: ["la", "el", "una", "Ø"],
        correct: "la",
        explanation: "Bei allgemeinen KONZEPTEN: 'la música' (die Musik). Spanisch braucht Artikel. Dieser Barockmusik-Geschmack zeigt kultivierte musikalische Bildung."
      },
      {
        id: "art_esp_3",
        question: "Estudio _____ español desde hace tres años sin parar constantemente.",
        translation: "Ich lerne seit drei Jahren konstant ohne Pause Spanisch.",
        options: ["Ø", "el", "un", "lo"],
        correct: "Ø",
        explanation: "Bei SPRACHEN OHNE Artikel: 'estudio español' (lerne Spanisch). Nur mit 'el' wenn modifiziert ('el español que hablo'). Diese dreijährige Sprachlernreise zeigt Ausdauer."
      },
      {
        id: "art_esp_4",
        question: "_____ español que se habla en México es diferente del de España.",
        translation: "Das Spanisch, das in Mexiko gesprochen wird, ist anders als das von Spanien.",
        options: ["El", "La", "Un", "Ø"],
        correct: "El",
        explanation: "Sprache MIT Artikel wenn MODIFIZIERT: 'el español que...' (das Spanisch, das...). Diese regionalen Sprachvarianten sind interessante linguistische Unterschiede."
      },
      {
        id: "art_esp_5",
        question: "Voy a _____ España el próximo verano para visitar a mis amigos.",
        translation: "Ich fahre nächsten Sommer nach Spanien, um meine Freunde zu besuchen.",
        options: ["Ø", "la", "una", "el"],
        correct: "Ø",
        explanation: "Bei LÄNDERNAMEN meist OHNE Artikel: 'voy a España' (fahre nach Spanien). Ausnahmen: la India, el Perú. Diese Spanienreise verbindet Tourismus mit Freundschaftsbesuch."
      },
      {
        id: "art_esp_6",
        question: "Me gusta mucho _____ naturaleza - prefiero el campo a la ciudad.",
        translation: "Mir gefällt die Natur sehr - ich bevorzuge Land gegenüber Stadt.",
        options: ["la", "el", "una", "Ø"],
        correct: "la",
        explanation: "Abstraktes Konzept: 'la naturaleza' (die Natur). Mit Artikel. Diese Naturliebe zeigt Präferenz für ländliche Ruhe über urbanen Lärm."
      },
      {
        id: "art_esp_7",
        question: "_____ salud es más importante que _____ dinero en la vida.",
        translation: "Die Gesundheit ist im Leben wichtiger als das Geld.",
        options: ["La / el", "El / la", "La / la", "El / el"],
        correct: "La / el",
        explanation: "Beide abstrakt mit Artikel: 'la salud' (feminin), 'el dinero' (maskulin). Diese Lebensweisheit priorisiert Wohlbefinden über Wohlstand."
      },
      {
        id: "art_esp_8",
        question: "Los martes y _____ jueves tengo clase de yoga relajante suave.",
        translation: "Dienstags und donnerstags habe ich sanften entspannenden Yoga-Unterricht.",
        options: ["los", "el", "Ø", "unos"],
        correct: "los",
        explanation: "Wochentage im Plural: 'los martes, los jueves' (dienstags, donnerstags). Artikel zeigt Wiederholung. Diese wöchentliche Yoga-Routine fördert Gesundheit."
      },
      {
        id: "art_esp_9",
        question: "Me duele _____ cabeza terriblemente - necesito tomar una aspirina ya.",
        translation: "Mir tut der Kopf schrecklich weh - ich muss jetzt schon eine Aspirin nehmen.",
        options: ["la", "el", "una", "mi"],
        correct: "la",
        explanation: "Bei KÖRPERTEILEN Artikel statt Possessiv: 'me duele la cabeza' (mir tut weh der Kopf). Diese starken Kopfschmerzen erfordern Medikation."
      },
      {
        id: "art_esp_10",
        question: "_____ amor y _____ amistad son sentimientos fundamentales para felicidad.",
        translation: "Die Liebe und die Freundschaft sind grundlegende Gefühle für Glücklichsein.",
        options: ["El / la", "La / el", "El / el", "La / la"],
        correct: "El / la",
        explanation: "Abstrakte Konzepte: 'el amor' (maskulin), 'la amistad' (feminin). Beide mit Artikel. Diese emotionalen Grundbedürfnisse sind essentiell für erfülltes Leben."
      },
      {
        id: "art_esp_11",
        question: "En _____ Argentina se come mucha carne de res de calidad excelente.",
        translation: "In Argentinien isst man viel exzellentes Qualitäts-Rindfleisch.",
        options: ["Ø", "la", "una", "el"],
        correct: "Ø",
        explanation: "Land ohne Artikel: 'en Argentina'. AUSNAHME: 'la Argentina' ist möglich aber veraltet. Diese Fleisch-Esskultur ist argentinische Gastro-Tradition."
      },
      {
        id: "art_esp_12",
        question: "Me lavé _____ manos antes de comer como siempre es costumbre.",
        translation: "Ich wusch mir die Hände vor dem Essen, wie es immer Gewohnheit ist.",
        options: ["las", "mis", "unas", "los"],
        correct: "las",
        explanation: "Reflexiv mit Körperteil: Artikel statt Possessiv. 'Me lavé las manos' (wusch mir die Hände). Diese Hygiene-Routine ist gesunde Gewohnheit."
      },
      {
        id: "art_esp_13",
        question: "_____ agua es esencial fundamental para _____ vida de todos los seres.",
        translation: "Das Wasser ist essentiell grundlegend für das Leben aller Lebewesen.",
        options: ["El / la", "La / el", "El / el", "La / la"],
        correct: "El / la",
        explanation: "Ausnahme 'el agua' (feminin mit 'el') und 'la vida'. Diese biologische Grundwahrheit betont Wassernotwendigkeit."
      },
      {
        id: "art_esp_14",
        question: "Hablo _____ francés y _____ inglés fluidamente desde la infancia niñez.",
        translation: "Ich spreche seit der Kindheit fließend Französisch und Englisch.",
        options: ["Ø / Ø", "el / el", "un / un", "lo / lo"],
        correct: "Ø / Ø",
        explanation: "Sprachen ohne Artikel: 'hablo francés' (spreche Französisch). Diese zweisprachige Erziehung ist wertvoller kognitiver Vorteil."
      },
      {
        id: "art_esp_15",
        question: "_____ libertad de expresión es un derecho humano fundamental básico.",
        translation: "Die Meinungsfreiheit ist ein grundlegendes fundamentales Menschenrecht.",
        options: ["La", "El", "Una", "Ø"],
        correct: "La",
        explanation: "Abstraktes Konzept: 'la libertad' (die Freiheit). Mit Artikel. Dieser demokratische Grundwert ist zentral für freie Gesellschaften."
      }
    ]
  },

  preposiciones_a_en: {
    name: "Preposiciones A vs EN",
    description: "Nach vs In vs Zu - räumliche und zeitliche Präpositionen unterscheiden",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_a_en_1",
        question: "Voy _____ la escuela cada mañana temprano a las siete exactas.",
        translation: "Ich gehe jeden Morgen früh um genau sieben zur Schule.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Für BEWEGUNG ZU Ort nutzen wir 'a': 'voy a la escuela' (gehe zur Schule). Deutsche 'zur' ist 'a'. Diese tägliche Schulroute strukturiert Morgenroutine."
      },
      {
        id: "prep_a_en_2",
        question: "Estoy _____ casa trabajando desde la oficina remota hoy completo.",
        translation: "Ich bin zu Hause und arbeite heute komplett vom Heimbüro aus.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für POSITION IN/ZU HAUSE: 'estoy en casa' (bin zu Hause). Mit Bewegung 'voy a casa'. Dieses Homeoffice ist moderne flexible Arbeitsmöglichkeit."
      },
      {
        id: "prep_a_en_3",
        question: "Vivo _____ Madrid desde hace cinco años - me encanta la ciudad.",
        translation: "Ich lebe seit fünf Jahren in Madrid - ich liebe die Stadt.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für WOHNEN IN Stadt: 'vivo en Madrid' (wohne in Madrid). Deutsche 'in' ist 'en'. Diese fünfjährige Madrider Residenz zeigt Stadtverbundenheit."
      },
      {
        id: "prep_a_en_4",
        question: "Llegamos _____ Barcelona tarde por la noche cansados del viaje largo.",
        translation: "Wir kamen spät nachts müde von langer Reise in Barcelona an.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Für ANKOMMEN IN: 'llegamos a Barcelona' (kamen in Barcelona an). Bewegungsverb braucht 'a'. Diese späte erschöpfte Ankunft nach Reise."
      },
      {
        id: "prep_a_en_5",
        question: "Trabajo _____ una oficina moderna del centro financiero de la ciudad.",
        translation: "Ich arbeite in einem modernen Büro des Finanzzentrums der Stadt.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für ARBEITEN IN Ort: 'trabajo en una oficina' (arbeite in Büro). Position, nicht Bewegung. Dieser zentrale Arbeitsplatz ist prestigeträchtige Lage."
      },
      {
        id: "prep_a_en_6",
        question: "Me gusta sentarme _____ la terraza a tomar el sol cálido agradable.",
        translation: "Ich sitze gerne auf der Terrasse, um die warme angenehme Sonne zu genießen.",
        options: ["en", "a", "de", "sobre"],
        correct: "en",
        explanation: "Für SITZEN AUF: 'sentarme en la terraza' (setzen auf Terrasse). 'En' für Flächen. Diese Sonnengenuss-Gewohnheit ist entspannende Freizeitaktivität."
      },
      {
        id: "prep_a_en_7",
        question: "Entré _____ la habitación oscura sin hacer ruido alguno molesto.",
        translation: "Ich betrat das dunkle Zimmer ohne jeglichen störenden Lärm zu machen.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für EINTRETEN IN: 'entré en la habitación' (trat in Zimmer). Auch 'entré a' möglich in Lateinamerika. Dieses leise Betreten respektiert möglicherweise Schlafende."
      },
      {
        id: "prep_a_en_8",
        question: "Subí _____ autobús rápidamente justo antes de que arrancara finalmente.",
        translation: "Ich stieg schnell in den Bus, kurz bevor er endlich losfuhr.",
        options: ["al", "en el", "del", "por el"],
        correct: "al",
        explanation: "Für EINSTEIGEN: 'subir al autobús' (in Bus steigen). 'A' + 'el' = 'al'. Dieses knappe Timing zeigt gerade noch rechtzeitiges Erreichen."
      },
      {
        id: "prep_a_en_9",
        question: "Estamos _____ la mesa comiendo juntos en familia todos unidos.",
        translation: "Wir sitzen am Tisch und essen zusammen alle vereint als Familie.",
        options: ["en", "a", "de", "sobre"],
        correct: "en",
        explanation: "Für AM TISCH SITZEN: 'en la mesa' (am Tisch). Position. Diese gemeinsame Familienmahlzeit ist wichtiges soziales Ritual."
      },
      {
        id: "prep_a_en_10",
        question: "Vamos _____ pie al trabajo cada día - es solo quince minutos.",
        translation: "Wir gehen jeden Tag zu Fuß zur Arbeit - es sind nur fünfzehn Minuten.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Feste Phrase 'a pie' (zu Fuß). Immer 'a'. Dieser tägliche Fußweg ist gesunde umweltfreundliche Pendelart."
      },
      {
        id: "prep_a_en_11",
        question: "Mi hermana está _____ el hospital visitando a nuestra abuela enferma.",
        translation: "Meine Schwester ist im Krankenhaus und besucht unsere kranke Oma.",
        options: ["en", "a", "del", "por"],
        correct: "en",
        explanation: "Für SEIN IN Gebäude: 'está en el hospital' (ist im Krankenhaus). Dieser Krankenbesuch bei kranker Großmutter ist familiäre Pflicht."
      },
      {
        id: "prep_a_en_12",
        question: "Aprendí _____ nadar cuando tenía solo cinco años pequeños de edad.",
        translation: "Ich lernte schwimmen, als ich nur fünf kleine Jahre alt war.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Nach 'aprender': 'aprender a nadar' (lernen zu schwimmen). Immer 'a' vor Infinitiv. Dieses frühe Schwimmenlernen ist wichtige Lebenskompetenz."
      },
      {
        id: "prep_a_en_13",
        question: "Nos encontramos _____ la estación de tren a las cinco en punto.",
        translation: "Wir treffen uns um Punkt fünf am Bahnhof.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für TREFFEN AN Ort: 'en la estación' (am Bahnhof). Position des Treffens. Dieser Bahnhofs-Treffpunkt ist zentral und praktisch."
      },
      {
        id: "prep_a_en_14",
        question: "Empezó _____ llover justo cuando salimos de casa esta mañana.",
        translation: "Es fing heute Morgen gerade an zu regnen, als wir aus dem Haus gingen.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Nach 'empezar': 'empezó a llover' (fing an zu regnen). Immer 'a' vor Infinitiv. Dieses schlechte Timing des Regenbeginns ist typisches Pech."
      },
      {
        id: "prep_a_en_15",
        question: "Pienso _____ mis padres todos los días - los extraño muchísimo.",
        translation: "Ich denke jeden Tag an meine Eltern - ich vermisse sie sehr.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Nach 'pensar': 'pensar en' (denken an). Immer 'en'. Diese täglichen Gedanken an Eltern zeigen starke emotionale Familienbindung."
      }
    ]
  },

  expresiones_idiomaticas: {
    name: "Expresiones Idiomáticas",
    description: "Redewendungen - typische spanische Ausdrucksweisen verstehen",
    icon: MessageCircle,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "idiom_1",
        question: "No tengo ni _____ de lo que estás hablando ahora mismo aquí.",
        translation: "Ich habe keine Ahnung, wovon du hier gerade sprichst.",
        options: ["idea", "ganas", "tiempo", "dinero"],
        correct: "idea",
        explanation: "Feste Redewendung 'no tener ni idea' (keine Ahnung haben). Wörtlich 'nicht haben nicht mal Idee'. Diese völlige Unwissenheit über Gesprächsthema ist ehrliche Verwirrung."
      },
      {
        id: "idiom_2",
        question: "Me puso de mal _____ cuando me criticó delante de todos públicamente.",
        translation: "Er versetzte mich in schlechte Laune, als er mich öffentlich vor allen kritisierte.",
        options: ["humor", "tiempo", "ánimo", "gusto"],
        correct: "humor",
        explanation: "Redewendung 'poner de mal humor' (in schlechte Laune versetzen). Diese öffentliche Kritik ist verletzend und beeinflusst Stimmung negativ."
      },
      {
        id: "idiom_3",
        question: "Tiene mucha _____ de verte después de tanto tiempo separados lejos.",
        translation: "Er hat nach so langer getrennter Zeit viel Lust, dich zu sehen.",
        options: ["ganas", "hambre", "prisa", "sed"],
        correct: "ganas",
        explanation: "Idiom 'tener ganas de' (Lust haben auf). Plural 'ganas'. Diese Sehnsucht nach Wiedersehen ist emotionale Reaktion auf lange Trennung."
      },
      {
        id: "idiom_4",
        question: "Dale _____ a tu padre de mi parte - no lo he visto últimamente.",
        translation: "Grüß deinen Vater von mir - ich habe ihn in letzter Zeit nicht gesehen.",
        options: ["recuerdos", "saludos", "memorias", "besos"],
        correct: "recuerdos",
        explanation: "Idiom 'dar recuerdos' (Grüße ausrichten). Auch 'saludos' möglich. Diese höfliche Grußübermittlung pflegt soziale Verbindungen."
      },
      {
        id: "idiom_5",
        question: "Siempre echo de _____ a mi familia cuando viajo lejos de casa.",
        translation: "Ich vermisse immer meine Familie, wenn ich weit von zu Hause reise.",
        options: ["menos", "más", "ver", "lado"],
        correct: "menos",
        explanation: "Idiom 'echar de menos' (vermissen). Wörtlich 'weniger werfen'. Dieses Heimweh auf Reisen ist natürliche emotionale Reaktion auf Familientrennung."
      },
      {
        id: "idiom_6",
        question: "Me quedé de piedra _____ cuando me dieron la noticia sorprendente inesperada.",
        translation: "Ich war wie versteinert, als sie mir die überraschende unerwartete Nachricht gaben.",
        options: ["Ø", "como", "en", "con"],
        correct: "Ø",
        explanation: "Idiom 'quedarse de piedra' (versteinert sein vor Schock). Wörtlich 'von Stein bleiben'. Diese extreme Überraschungsreaktion zeigt völlige Unvorbereitetheit."
      },
      {
        id: "idiom_7",
        question: "Hace un frío que _____ - ponte un abrigo grueso abrigado caliente.",
        translation: "Es ist bitterkalt - zieh einen dicken warmen Mantel an.",
        options: ["pela", "pone", "hace", "da"],
        correct: "pela",
        explanation: "Umgangssprachlich 'hace un frío que pela' (ist sehr kalt). Wörtlich 'Kälte, die schält'. Diese extreme Kälte erfordert warme Kleidung zum Schutz."
      },
      {
        id: "idiom_8",
        question: "Estoy hasta las _____ de trabajo - necesito vacaciones urgentemente ya.",
        translation: "Ich habe die Nase voll von Arbeit - ich brauche jetzt dringend schon Urlaub.",
        options: ["narices", "manos", "orejas", "piernas"],
        correct: "narices",
        explanation: "Idiom 'estar hasta las narices' (Nase voll haben). Wörtlich 'bis zu den Nasen'. Diese Arbeitsüberlastung signalisiert dringenden Erholungsbedarf."
      },
      {
        id: "idiom_9",
        question: "Me costó un _____ y parte del otro conseguir esas entradas.",
        translation: "Es kostete mich Unsummen, diese Karten zu bekommen.",
        options: ["ojo", "brazo", "pie", "dedo"],
        correct: "ojo",
        explanation: "Idiom 'costar un ojo de la cara' (ein Vermögen kosten). Wörtlich 'ein Auge kosten'. Diese sehr teuren Karten waren große finanzielle Investition."
      },
      {
        id: "idiom_10",
        question: "Tienes toda la _____ del mundo - puedes hacer lo que quieras.",
        translation: "Du hast alle Freiheit der Welt - du kannst machen, was du willst.",
        options: ["razón", "vida", "verdad", "culpa"],
        correct: "razón",
        explanation: "Idiom 'tener razón' (Recht haben) ABER hier 'tener toda la razón' kann Zustimmung sein. Context matters. Diese volle Handlungsfreiheit gibt unbegrenzte Möglichkeiten."
      },
      {
        id: "idiom_11",
        question: "Metí la _____ cuando pregunté sobre su ex-novio delante de todos.",
        translation: "Ich trat ins Fettnäpfchen, als ich vor allen nach ihrem Ex-Freund fragte.",
        options: ["pata", "mano", "cabeza", "nariz"],
        correct: "pata",
        explanation: "Idiom 'meter la pata' (ins Fettnäpfchen treten). Wörtlich 'Pfote reinstecken'. Diese soziale Peinlichkeit durch unpassende Frage ist unangenehm."
      },
      {
        id: "idiom_12",
        question: "Esto me suena _____ chino - no entiendo nada en absoluto.",
        translation: "Das kommt mir wie Chinesisch vor - ich verstehe überhaupt nichts.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Idiom 'sonar a chino' (wie Chinesisch klingen = unverständlich). Wie deutsche 'kommt mir Spanisch vor'. Diese totale Verwirrung zeigt Komplexität."
      },
      {
        id: "idiom_13",
        question: "No te tomes las cosas tan _____ pecho - relájate un poco más.",
        translation: "Nimm die Dinge nicht so zu Herzen - entspann dich ein bisschen mehr.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Idiom 'tomarse a pecho' (zu Herzen nehmen). Mit 'a'. Dieser Rat zur Gelassenheit hilft, Stress zu reduzieren und Perspektive zu bewahren."
      },
      {
        id: "idiom_14",
        question: "Hace un _____ de perros afuera - mejor quedarse en casa caliente.",
        translation: "Es ist draußen Hundewetter - besser warm zu Hause bleiben.",
        options: ["tiempo", "día", "sol", "frío"],
        correct: "tiempo",
        explanation: "Idiom 'tiempo de perros' (Hundewetter = schlechtes Wetter). Diese Wetterwarnung rechtfertigt Drinnenbleiben statt Outdoor-Aktivität."
      },
      {
        id: "idiom_15",
        question: "Dormí como un _____ anoche - no me desperté ni una vez.",
        translation: "Ich schlief gestern Nacht wie ein Stein - ich wachte nicht ein einziges Mal auf.",
        options: ["tronco", "bebé", "ángel", "rey"],
        correct: "tronco",
        explanation: "Idiom 'dormir como un tronco' (schlafen wie ein Baumstamm = tief schlafen). Dieser traumlose Tiefschlaf ist erholsame Nachtruhe nach anstrengendem Tag."
      }
    ]
  }
};

export default part19Categories;
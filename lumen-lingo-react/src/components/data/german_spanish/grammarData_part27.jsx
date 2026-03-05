/**
 * GERMAN → SPANISH GRAMMAR - PART 27
 * 3 categories, 15 questions each
 */

import { Wifi, Radio, Workflow } from "lucide-react";

export const part27Categories = {
  diferencias_muy_mucho: {
    name: "Muy vs Mucho vs Mucha/os/as",
    description: "Sehr vs viel - korrekte Verwendung je nach Wortart",
    icon: Wifi,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "muy_much_1",
        question: "Ella es _____ inteligente - siempre saca las mejores notas posibles.",
        translation: "Sie ist sehr intelligent - sie bekommt immer die bestmöglichen Noten.",
        options: ["muy", "mucho", "mucha", "muchos"],
        correct: "muy",
        explanation: "Vor ADJEKTIV nutzen wir 'muy': 'muy inteligente' (sehr intelligent). NICHT 'mucho'. Diese außergewöhnliche Intelligenz zeigt sich in akademischen Leistungen."
      },
      {
        id: "muy_much_2",
        question: "Trabajo _____ cada día - más de diez horas mínimo sin parar.",
        translation: "Ich arbeite jeden Tag viel - mindestens mehr als zehn Stunden ohne anzuhalten.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Nach VERB als Adverb: 'trabajo mucho' (arbeite viel). NICHT 'muy'. Diese exzessiven Arbeitsstunden zeigen hohe Arbeitsbelastung."
      },
      {
        id: "muy_much_3",
        question: "Tengo _____ libros en mi biblioteca personal - más de quinientos ya.",
        translation: "Ich habe viele Bücher in meiner persönlichen Bibliothek - schon mehr als fünfhundert.",
        options: ["muchos", "muy", "mucho", "mucha"],
        correct: "muchos",
        explanation: "Vor ZÄHLBAREM Plural maskulin: 'muchos libros' (viele Bücher). Muss sich anpassen. Diese umfangreiche Sammlung zeigt Leseleidenschaft."
      },
      {
        id: "muy_much_4",
        question: "Esta sopa está _____ caliente - no puedo comerla todavía ahora.",
        translation: "Diese Suppe ist sehr heiß - ich kann sie jetzt noch nicht essen.",
        options: ["muy", "mucho", "mucha", "muchos"],
        correct: "muy",
        explanation: "Vor Adjektiv: 'muy caliente' (sehr heiß). Diese überhitzte Suppe braucht Abkühlzeit für sicheren Verzehr."
      },
      {
        id: "muy_much_5",
        question: "Hay _____ gente en la sala - está completamente llena totalmente.",
        translation: "Es sind viele Leute im Raum - er ist komplett total voll.",
        options: ["mucha", "muy", "mucho", "muchos"],
        correct: "mucha",
        explanation: "Vor UNZÄHLBAREM feminin: 'mucha gente' (viele Leute). Singular feminin. Diese Raumüberfüllung schafft unangenehme Enge."
      },
      {
        id: "muy_much_6",
        question: "Me gusta _____ este libro - es uno de mis favoritos personales.",
        translation: "Mir gefällt dieses Buch sehr - es ist eines meiner persönlichen Lieblinge.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Nach 'gustar': 'me gusta mucho' (gefällt mir sehr). Als Adverb 'mucho', nicht 'muy'. Diese starke Buchliebes zeigt besondere Bedeutung."
      },
      {
        id: "muy_much_7",
        question: "Hace _____ frío afuera - ponte un abrigo grueso caliente abrigado.",
        translation: "Es ist draußen sehr kalt - zieh einen dicken warmen Mantel an.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Mit 'hacer' für Wetter: 'hace mucho frío' (ist sehr kalt). Immer 'mucho', nicht 'muy'. Diese Kälte erfordert warme Kleidung."
      },
      {
        id: "muy_much_8",
        question: "Ella es una profesora _____ buena - explica todo claramente perfecto.",
        translation: "Sie ist eine sehr gute Lehrerin - sie erklärt alles perfekt klar.",
        options: ["muy", "mucho", "mucha", "muchos"],
        correct: "muy",
        explanation: "Vor Adjektiv: 'muy buena' (sehr gut). Diese exzellente Lehrqualität zeigt sich in klaren Erklärungen."
      },
      {
        id: "muy_much_9",
        question: "Comí _____ en la fiesta - ahora me siento mal del estómago.",
        translation: "Ich aß auf der Party viel - jetzt fühlt sich mein Magen schlecht an.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Nach Verb: 'comí mucho' (aß viel). Als Adverb 'mucho'. Diese Überernährung führt zu Magenbeschwerden."
      },
      {
        id: "muy_much_10",
        question: "Tengo _____ amigos en diferentes países del mundo entero global.",
        translation: "Ich habe viele Freunde in verschiedenen Ländern der ganzen globalen Welt.",
        options: ["muchos", "muy", "mucho", "mucha"],
        correct: "muchos",
        explanation: "Vor zählbar Plural: 'muchos amigos' (viele Freunde). Diese internationale Freundesgruppe zeigt globale Vernetzung."
      },
      {
        id: "muy_much_11",
        question: "Es un tema _____ interesante - me gustaría aprender más sobre ello.",
        translation: "Es ist ein sehr interessantes Thema - ich würde gerne mehr darüber lernen.",
        options: ["muy", "mucho", "muchos", "mucha"],
        correct: "muy",
        explanation: "Vor Adjektiv: 'muy interesante' (sehr interessant). Dieses faszinierende Thema weckt Wissbegier für vertieftes Studium."
      },
      {
        id: "muy_much_12",
        question: "Duermo _____ los fines de semana - a veces hasta diez horas.",
        translation: "Ich schlafe an Wochenenden viel - manchmal bis zu zehn Stunden.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Nach Verb: 'duermo mucho' (schlafe viel). Dieser ausgiebige Wochenendschlaf kompensiert Wochenstress."
      },
      {
        id: "muy_much_13",
        question: "Hay _____ tráfico en la ciudad a las ocho de la mañana.",
        translation: "Es gibt um acht Uhr morgens viel Verkehr in der Stadt.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Mit unzählbar maskulin: 'mucho tráfico' (viel Verkehr). Dieser morgendliche Berufsverkehr ist typisches urbanes Problem."
      },
      {
        id: "muy_much_14",
        question: "La película fue _____ aburrida - me dormí en el cine profundamente.",
        translation: "Der Film war sehr langweilig - ich schlief im Kino tief ein.",
        options: ["muy", "mucho", "mucha", "muchos"],
        correct: "muy",
        explanation: "Vor Adjektiv: 'muy aburrida' (sehr langweilig). Diese extreme Langeweile führte zu unbeabsichtigtem Kinoschlaf."
      },
      {
        id: "muy_much_15",
        question: "Necesito _____ tiempo para pensar bien sobre esta decisión grande importante.",
        translation: "Ich brauche viel Zeit, um gut über diese große wichtige Entscheidung nachzudenken.",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "Vor unzählbar maskulin: 'mucho tiempo' (viel Zeit). Diese wichtige Entscheidung verdient gründliche Überlegung ohne Eile."
      }
    ]
  },

  construcciones_impersonales: {
    name: "Construcciones Impersonales",
    description: "Unpersönliche Konstruktionen - es necesario, es importante, hay que",
    icon: Radio,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "impers_1",
        question: "Es necesario que todos _____ a tiempo a la reunión importante.",
        translation: "Es ist notwendig, dass alle pünktlich zum wichtigen Meeting kommen.",
        options: ["lleguen", "llegan", "llegarán", "llegaban"],
        correct: "lleguen",
        explanation: "Nach 'es necesario que': SUBJUNTIVO 'lleguen' (kommen). Unpersönliche Notwendigkeit verlangt Konjunktiv. Diese Pünktlichkeitspflicht ist für alle verbindlich."
      },
      {
        id: "impers_2",
        question: "Hay que _____ más atención en clase para aprender bien efectivamente.",
        translation: "Man muss im Unterricht mehr aufpassen, um gut effektiv zu lernen.",
        options: ["prestar", "presto", "preste", "prestando"],
        correct: "prestar",
        explanation: "Nach 'hay que': INFINITIV (unpersönliches MÜSSEN): 'hay que prestar' (man muss schenken). Dieser allgemeine Lernrat gilt für alle Schüler."
      },
      {
        id: "impers_3",
        question: "Es importante que _____ las instrucciones antes de comenzar todo.",
        translation: "Es ist wichtig, dass ihr die Anweisungen vor Beginn von allem lest.",
        options: ["leáis", "lees", "leen", "leer"],
        correct: "leáis",
        explanation: "Nach 'es importante que': Subjuntivo. Spanien-Form 'leáis' (lest). Diese Anleitung-Lesen-Pflicht verhindert Fehler durch Unwissenheit."
      },
      {
        id: "impers_4",
        question: "Es probable que _____ mañana según el pronóstico meteorológico fiable.",
        translation: "Es ist wahrscheinlich, dass es morgen laut verlässlicher Wettervorhersage regnet.",
        options: ["llueva", "llueve", "lloverá", "llovía"],
        correct: "llueva",
        explanation: "Nach 'es probable que' (WAHRSCHEINLICHKEIT): Subjuntivo 'llueva' (regnet). Diese Wetterprognose ist Warnung für Regenvorbereitung."
      },
      {
        id: "impers_5",
        question: "Es posible que no _____ venir a la fiesta - estoy muy ocupado.",
        translation: "Es ist möglich, dass ich nicht zur Party kommen kann - ich bin sehr beschäftigt.",
        options: ["pueda", "puedo", "podré", "podía"],
        correct: "pueda",
        explanation: "Nach 'es posible que' (MÖGLICHKEIT): Subjuntivo 'pueda' (kann). Diese unverbindliche Antwort lässt Optionen offen."
      },
      {
        id: "impers_6",
        question: "Es bueno que _____ ejercicio regularmente para la salud física óptima.",
        translation: "Es ist gut, dass du regelmäßig Übung für optimale körperliche Gesundheit machst.",
        options: ["hagas", "haces", "harás", "hacías"],
        correct: "hagas",
        explanation: "Nach 'es bueno que' (BEWERTUNG): Subjuntivo 'hagas' (machst). Diese positive Bewertung von Sport ist Gesundheitsempfehlung."
      },
      {
        id: "impers_7",
        question: "Hace falta _____ más despacio para que todos entiendan bien.",
        translation: "Es ist nötig, langsamer zu sprechen, damit alle gut verstehen.",
        options: ["hablar", "hablo", "hable", "hablando"],
        correct: "hablar",
        explanation: "Nach 'hace falta' (ES IST NÖTIG): Infinitiv 'hablar' (sprechen). Diese Notwendigkeit für Langsamkeit verbessert Verständlichkeit."
      },
      {
        id: "impers_8",
        question: "Es difícil que _____ terminar todo hoy - es demasiado trabajo pesado.",
        translation: "Es ist schwer, dass wir heute alles beenden - es ist zu viel schwere Arbeit.",
        options: ["podamos", "podemos", "podremos", "podíamos"],
        correct: "podamos",
        explanation: "Nach 'es difícil que': Subjuntivo 'podamos' (können). Diese realistische Einschätzung erkennt Arbeitsüberlastung an."
      },
      {
        id: "impers_9",
        question: "Es verdad que él _____ tres idiomas fluidamente sin acento notorio.",
        translation: "Es ist wahr, dass er drei Sprachen fließend ohne merklichen Akzent spricht.",
        options: ["habla", "hable", "hablará", "hablaba"],
        correct: "habla",
        explanation: "Nach 'es verdad que' (TATSACHE): INDIKATIV 'habla' (spricht). Fakten brauchen keinen Subjuntivo. Diese Mehrsprachigkeit ist beeindruckend."
      },
      {
        id: "impers_10",
        question: "Es mejor que _____ ahora antes de que sea demasiado tarde.",
        translation: "Es ist besser, dass wir jetzt gehen, bevor es zu spät ist.",
        options: ["vayamos", "vamos", "iremos", "íbamos"],
        correct: "vayamos",
        explanation: "Nach 'es mejor que' (EMPFEHLUNG): Subjuntivo 'vayamos' (gehen). Dieser Zeitdruck-Rat motiviert sofortige Abreise."
      },
      {
        id: "impers_11",
        question: "Hay que _____ las ventanas para ventilar el cuarto cerrado asfixiante.",
        translation: "Man muss die Fenster öffnen, um den geschlossenen stickigen Raum zu lüften.",
        options: ["abrir", "abro", "abra", "abriendo"],
        correct: "abrir",
        explanation: "Nach 'hay que': Infinitiv 'abrir' (öffnen). Diese Lüftungsnotwendigkeit verbessert Raumluft-Qualität."
      },
      {
        id: "impers_12",
        question: "Es evidente que ella _____ muy cansada - se le nota mucho.",
        translation: "Es ist offensichtlich, dass sie sehr müde ist - man sieht es ihr sehr an.",
        options: ["está", "esté", "estará", "estaba"],
        correct: "está",
        explanation: "Nach 'es evidente que' (OFFENSICHTLICH): Indikativ 'está'. Offensichtliche Tatsachen brauchen keinen Subjuntivo. Diese sichtbare Müdigkeit ist eindeutig."
      },
      {
        id: "impers_13",
        question: "Es extraño que no _____ todavía - siempre es muy puntual.",
        translation: "Es ist seltsam, dass er noch nicht angekommen ist - er ist immer sehr pünktlich.",
        options: ["haya llegado", "ha llegado", "llegará", "llegaba"],
        correct: "haya llegado",
        explanation: "Nach 'es extraño que' (SELTSAM): Subjuntivo Perfekt 'haya llegado'. Diese Verspätung ist ungewöhnlich für normalerweise pünktliche Person."
      },
      {
        id: "impers_14",
        question: "Es cierto que _____ mucho para el examen final difícil importante.",
        translation: "Es ist sicher, dass sie viel für die schwere wichtige Abschlussprüfung gelernt haben.",
        options: ["estudiaron", "estudiaran", "estudiarán", "estudiaban"],
        correct: "estudiaron",
        explanation: "Nach 'es cierto que' (GEWISSHEIT): Indikativ 'estudiaron'. Sichere Fakten brauchen keinen Subjuntivo. Diese intensive Vorbereitung ist bekannt."
      },
      {
        id: "impers_15",
        question: "Es una pena que no _____ venir con nosotros al viaje bonito.",
        translation: "Es ist schade, dass du nicht mit uns auf die schöne Reise kommen kannst.",
        options: ["puedas", "puedes", "podrás", "podías"],
        correct: "puedas",
        explanation: "Nach 'es una pena que' (BEDAUERN): Subjuntivo 'puedas' (kannst). Diese Enttäuschung über deine Abwesenheit ist emotional."
      }
    ]
  },

  prefijos_sufijos: {
    name: "Prefijos y Sufijos Comunes",
    description: "Vor- und Nachsilben - Wortbildung und Bedeutungsveränderung",
    icon: Workflow,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "pref_suf_1",
        question: "Es _____ llegar a tiempo - el tráfico es imposible ahora.",
        translation: "Es ist unmöglich, pünktlich anzukommen - der Verkehr ist jetzt unmöglich.",
        options: ["imposible", "posible", "probable", "capaz"],
        correct: "imposible",
        explanation: "Präfix 'im-' macht NEGATIV: 'imposible' (unmöglich). Von 'posible'. Dieser hoffnungslose Verkehr macht Pünktlichkeit unrealistisch."
      },
      {
        id: "pref_suf_2",
        question: "Después de estudiar medicina, es un profesional muy _____ en su campo.",
        translation: "Nach Medizinstudium ist er ein sehr kompetenter Profi in seinem Fachgebiet.",
        options: ["competente", "incompetente", "capaz", "hábil"],
        correct: "competente",
        explanation: "Suffix '-ente' bildet ADJEKTIV von Verb 'competir': 'competente' (kompetent/fähig). Diese Fachkompetenz ist Resultat langen Studiums."
      },
      {
        id: "pref_suf_3",
        question: "Esta tarea es _____ - necesito ayuda urgente de alguien experto.",
        translation: "Diese Aufgabe ist unmachbar - ich brauche dringende Hilfe von jemandem Expertem.",
        options: ["irrealizable", "realizable", "posible", "fácil"],
        correct: "irrealizable",
        explanation: "Präfix 'ir-' (Negation): 'irrealizable' (nicht realisierbar/unmachbar). Von 'realizar'. Diese überwältigende Aufgabe übersteigt eigene Fähigkeiten."
      },
      {
        id: "pref_suf_4",
        question: "Su comportamiento fue totalmente _____ - no entiendo qué le pasó.",
        translation: "Sein Verhalten war total unvorhersehbar - ich verstehe nicht, was ihm passierte.",
        options: ["impredecible", "predecible", "normal", "común"],
        correct: "impredecible",
        explanation: "Präfix 'im-': 'impredecible' (unvorhersehbar). Von 'predecir' (vorhersagen). Dieses chaotische Verhalten war völlig unerwartet."
      },
      {
        id: "pref_suf_5",
        question: "Necesito un _____ para abrir esta botella de vino resistente dura.",
        translation: "Ich brauche einen Korkenzieher, um diese harte widerstandsfähige Weinflasche zu öffnen.",
        options: ["sacacorchos", "abrecorchos", "quitacorchos", "rompe corchos"],
        correct: "sacacorchos",
        explanation: "Zusammengesetztes Wort: 'sacar' + 'corchos' = 'sacacorchos' (Korkenzieher). Dieses Werkzeug ist essentiell für Weingenuss."
      },
      {
        id: "pref_suf_6",
        question: "El profesor es muy _____ - siempre ayuda a los estudiantes pacientemente.",
        translation: "Der Lehrer ist sehr hilfsbereit - er hilft Schülern immer geduldig.",
        options: ["servicial", "servicio", "servidor", "servir"],
        correct: "servicial",
        explanation: "Suffix '-ial' bildet Adjektiv: 'servicial' (hilfsbereit/dienstbereit). Von 'servir'. Diese Lehrerqualität macht ihn bei Schülern beliebt."
      },
      {
        id: "pref_suf_7",
        question: "Tengo que _____ mi trabajo antiguo - hay muchos errores graves.",
        translation: "Ich muss meine alte Arbeit neu machen - es gibt viele schwere Fehler.",
        options: ["rehacer", "deshacer", "hacer", "contrahacer"],
        correct: "rehacer",
        explanation: "Präfix 're-' bedeutet WIEDER/NEU: 'rehacer' (neu machen/überarbeiten). Diese Neubearbeitung korrigiert Fehler der ersten Version."
      },
      {
        id: "pref_suf_8",
        question: "La situación es _____ - no hay ninguna esperanza de solución.",
        translation: "Die Situation ist hoffnungslos - es gibt keine Hoffnung auf Lösung.",
        options: ["desesperada", "esperada", "esperanzada", "esperable"],
        correct: "desesperada",
        explanation: "Präfix 'des-' macht GEGENTEIL: 'desesperada' (hoffnungslos/verzweifelt). Von 'esperar'. Diese pessimistische Einschätzung sieht keinen Ausweg."
      },
      {
        id: "pref_suf_9",
        question: "Es un _____ muy útil para limpiar el suelo rápidamente fácil.",
        translation: "Es ist ein sehr nützliches Gerät, um den Boden schnell leicht zu putzen.",
        options: ["limpiador", "limpieza", "limpio", "limpiar"],
        correct: "limpiador",
        explanation: "Suffix '-dor/-dora' bildet SUBSTANTIV (Werkzeug/Person): 'limpiador' (Reiniger). Dieses Putzgerät erleichtert Hausarbeit erheblich."
      },
      {
        id: "pref_suf_10",
        question: "Me siento muy _____ hoy - todo me sale mal y terrible horrible.",
        translation: "Ich fühle mich heute sehr unglücklich - alles geht mir schlecht und schrecklich furchtbar.",
        options: ["infeliz", "feliz", "alegre", "contento"],
        correct: "infeliz",
        explanation: "Präfix 'in-': 'infeliz' (unglücklich). Von 'feliz'. Dieser schlechte Tag mit allem, was schiefgeht, ist frustrierend."
      },
      {
        id: "pref_suf_11",
        question: "Tengo que _____ mi ensayo porque el profesor lo rechazó completamente.",
        translation: "Ich muss meinen Aufsatz neu schreiben, weil der Lehrer ihn komplett ablehnte.",
        options: ["reescribir", "desescribir", "escribir", "sobreescribir"],
        correct: "reescribir",
        explanation: "Präfix 're-': 'reescribir' (neu schreiben/umschreiben). Diese komplette Neubearbeitung nach Ablehnung ist frustrierend aber nötig."
      },
      {
        id: "pref_suf_12",
        question: "Su actitud es muy _____ - siempre ve el lado bueno positivo.",
        translation: "Seine Einstellung ist sehr optimistisch - er sieht immer die gute positive Seite.",
        options: ["optimista", "pesimista", "realista", "negativa"],
        correct: "optimista",
        explanation: "Suffix '-ista' bildet PERSON/HALTUNG: 'optimista' (Optimist/optimistisch). Diese positive Lebenseinstellung sieht Gutes in Situationen."
      },
      {
        id: "pref_suf_13",
        question: "Es totalmente _____ lo que dices - no tiene ningún sentido lógico.",
        translation: "Es ist total unlogisch, was du sagst - es hat keinen logischen Sinn.",
        options: ["ilógico", "lógico", "sensato", "razonable"],
        correct: "ilógico",
        explanation: "Präfix 'i-' (vor 'l'): 'ilógico' (unlogisch). Diese Kritik an Argumenten zeigt Widersprüche in Aussage."
      },
      {
        id: "pref_suf_14",
        question: "Compré un nuevo _____ para protegerme de la lluvia fuerte intensa.",
        translation: "Ich kaufte einen neuen Regenschirm, um mich vor starkem intensiven Regen zu schützen.",
        options: ["paraguas", "parapluvia", "cubreagua", "tapagua"],
        correct: "paraguas",
        explanation: "Zusammengesetzt: 'parar' + 'aguas' = 'paraguas' (Regenschirm). Wörtlich 'Wasser stoppen'. Dieses Gerät ist essentiell bei Regenwetter."
      },
      {
        id: "pref_suf_15",
        question: "Su explicación fue muy _____ - todos la entendieron perfectamente bien.",
        translation: "Seine Erklärung war sehr verständlich - alle verstanden sie perfekt gut.",
        options: ["comprensible", "incomprensible", "confusa", "difícil"],
        correct: "comprensible",
        explanation: "Suffix '-ible' bildet Adjektiv (kann gemacht werden): 'comprensible' (verständlich). Von 'comprender'. Diese Klarheit in Erklärung ist pädagogisch wertvoll."
      }
    ]
  },

  falsas_amigas: {
    name: "Falsos Amigos (Falsche Freunde)",
    description: "Verwechslungsgefahr - ähnliche Wörter mit unterschiedlicher Bedeutung",
    icon: Radio,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "falsos_1",
        question: "Estoy muy _____ - no he comido nada desde esta mañana temprano.",
        translation: "Ich bin sehr hungrig - ich habe seit heute früh morgens nichts gegessen.",
        options: ["hambriento", "embarazada", "constipado", "largo"],
        correct: "hambriento",
        explanation: "'Embarazada' bedeutet SCHWANGER (nicht verlegen/peinlich berührt). 'Hambriento' ist hungrig. Diese wichtige Unterscheidung verhindert peinliche Missverständnisse."
      },
      {
        id: "falsos_2",
        question: "Mi hermana está _____ - va a tener un bebé en junio próximo.",
        translation: "Meine Schwester ist schwanger - sie wird im nächsten Juni ein Baby bekommen.",
        options: ["embarazada", "avergonzada", "hambrienta", "constipada"],
        correct: "embarazada",
        explanation: "'Embarazada' ist SCHWANGER. Für peinlich: 'avergonzada'. Diese freudige Babynachricht ist bedeutendes Familienereignis."
      },
      {
        id: "falsos_3",
        question: "No puedo venir hoy - estoy _____ y tengo mucha tos y mocos.",
        translation: "Ich kann heute nicht kommen - ich bin erkältet und habe viel Husten und Schnupfen.",
        options: ["constipado", "estreñido", "embarazado", "largo"],
        correct: "constipado",
        explanation: "'Constipado' ist ERKÄLTET (nicht verstopft). Für Verstopfung: 'estreñido'. Diese Erkältung mit Husten ist Grund für Fernbleiben."
      },
      {
        id: "falsos_4",
        question: "Este camino es muy _____ - tardaremos dos horas en llegar.",
        translation: "Dieser Weg ist sehr lang - wir werden zwei Stunden zum Ankommen brauchen.",
        options: ["largo", "ancho", "amplio", "grande"],
        correct: "largo",
        explanation: "'Largo' ist LANG in Länge. 'Ancho' ist breit. Diese lange Wegstrecke erfordert Zeitplanung für zweistündige Fahrt."
      },
      {
        id: "falsos_5",
        question: "Esta calle es muy _____ - caben tres coches lado a lado.",
        translation: "Diese Straße ist sehr breit - drei Autos passen nebeneinander.",
        options: ["ancha", "larga", "amplia", "grande"],
        correct: "ancha",
        explanation: "'Ancho' ist BREIT (nicht lang). Diese breite Straße ermöglicht bequemen Mehrspurverkehr."
      },
      {
        id: "falsos_6",
        question: "Necesito ir a la _____ para comprar medicamentos y remedios.",
        translation: "Ich muss in die Apotheke gehen, um Medikamente und Heilmittel zu kaufen.",
        options: ["farmacia", "tienda", "droguería", "botica"],
        correct: "farmacia",
        explanation: "'Farmacia' ist APOTHEKE. 'Droguería' ist Drogerie (Kosmetik). Dieser Medikamentenkauf in Apotheke ist für Gesundheit notwendig."
      },
      {
        id: "falsos_7",
        question: "El _____ de este restaurante es muy variado y delicioso rico.",
        translation: "Die Speisekarte dieses Restaurants ist sehr vielfältig und lecker köstlich.",
        options: ["menú", "carta", "lista", "receta"],
        correct: "menú",
        explanation: "'Menú' ist SPEISEKARTE oder Tagesmenü. 'Carta' auch für Speisekarte. Diese vielfältige Auswahl bietet viele Optionen."
      },
      {
        id: "falsos_8",
        question: "Voy a _____ una carta importante a mi amigo del extranjero.",
        translation: "Ich werde einen wichtigen Brief an meinen Freund aus dem Ausland schicken.",
        options: ["enviar", "mandar", "tirar", "echar"],
        correct: "enviar",
        explanation: "'Enviar/mandar' ist SCHICKEN. 'Tirar' ist wegwerfen (KEIN 'senden' wie Deutsch). Dieser internationale Brief pflegt Freundschaft über Distanz."
      },
      {
        id: "falsos_9",
        question: "Estoy muy _____ porque cometí un error grave delante de todos.",
        translation: "Ich bin sehr verlegen/beschämt, weil ich vor allen einen schweren Fehler machte.",
        options: ["avergonzado", "embarazado", "constipado", "molesto"],
        correct: "avergonzado",
        explanation: "Für VERLEGEN/BESCHÄMT: 'avergonzado' (NICHT 'embarazado' = schwanger). Dieser öffentliche Fehler ist peinliche Situation."
      },
      {
        id: "falsos_10",
        question: "El _____ de este libro está en la última página final trasera.",
        translation: "Das Inhaltsverzeichnis dieses Buches ist auf der letzten hinteren Endseite.",
        options: ["índice", "contenido", "tabla", "lista"],
        correct: "índice",
        explanation: "'Índice' ist INHALTSVERZEICHNIS. Auch 'tabla de contenidos'. Diese ungewöhnliche Position hinten ist für manche Bücher normal."
      },
      {
        id: "falsos_11",
        question: "Mi padre es muy _____ conmigo - siempre exige mucho y disciplina.",
        translation: "Mein Vater ist sehr streng mit mir - er verlangt immer viel und Disziplin.",
        options: ["exigente", "estricto", "severo", "riguroso"],
        correct: "exigente",
        explanation: "'Exigente' ist ANSPRUCHSVOLL/STRENG. Diese väterliche Strenge setzt hohe Standards für Verhalten und Leistung."
      },
      {
        id: "falsos_12",
        question: "Hoy hace mucho calor - voy a usar ropa muy _____ y ligera.",
        translation: "Heute ist es sehr heiß - ich werde sehr leichte Kleidung tragen.",
        options: ["ligera", "liviana", "leve", "fina"],
        correct: "ligera",
        explanation: "'Ligero' ist LEICHT (Gewicht). Diese luftige Sommerkleidung ist angemessen für Hitze."
      },
      {
        id: "falsos_13",
        question: "Esta historia es completamente _____ - nunca ocurrió realmente de verdad.",
        translation: "Diese Geschichte ist komplett frei erfunden - sie passierte wirklich niemals.",
        options: ["ficticia", "falsa", "mentirosa", "inventada"],
        correct: "ficticia",
        explanation: "'Ficticio' ist FIKTIV/ERFUNDEN. Diese erfundene Geschichte ist literarische Kreation ohne Realitätsbasis."
      },
      {
        id: "falsos_14",
        question: "Necesito un momento de _____ - he estado trabajando sin parar.",
        translation: "Ich brauche einen Moment Ruhe - ich habe ohne Pause gearbeitet.",
        options: ["descanso", "reposo", "pausa", "recreo"],
        correct: "descanso",
        explanation: "'Descanso' ist PAUSE/RUHE. 'Recreo' ist Schulpause. Diese Arbeitspause ist nötig für Erholung nach ununterbrochener Tätigkeit."
      },
      {
        id: "falsos_15",
        question: "Me _____ mucho tu opinión - eres muy sabio e inteligente siempre.",
        translation: "Ich respektiere deine Meinung sehr - du bist immer sehr weise und intelligent.",
        options: ["respeto", "respecto", "miro", "atiendo"],
        correct: "respeto",
        explanation: "'Respetar' ist RESPEKTIEREN. 'Respecto' ist 'bezüglich' (Präposition). Diese Achtung vor Meinung zeigt Wertschätzung für Weisheit."
      }
    ]
  }
};

export default part27Categories;
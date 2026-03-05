
/**
 * GERMAN → SPANISH GRAMMAR - PART 6
 * 4 categories, 15 questions each
 */

import { Target, Gift, Umbrella, Award } from "lucide-react";

export const part6Categories = {
  objeto_directo_indirecto: {
    name: "Direktes und indirektes Objekt",
    description: "Lo/la/los/las vs. le/les - Akkusativ und Dativ unterscheiden",
    icon: Target,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "obj_dir_ind_1",
        question: "_____ vi ayer en el parque caminando con su perro.",
        translation: "Ich sah ihn/sie gestern im Park mit seinem/ihrem Hund spazieren.",
        options: ["Lo/La", "Le", "Les", "Los"],
        correct: "Lo/La",
        explanation: "Für DIREKTES Objekt (wen? - Akkusativ) nutzen wir 'lo' (ihn) oder 'la' (sie): 'lo vi' / 'la vi'. Im Deutschen 'ihn/sie' sehen. Bei Personen als direktes Objekt bleibt 'lo/la', nicht 'le'. Diese zufällige Begegnung im Park mit Hund ist alltägliche Stadtszene."
      },
      {
        id: "obj_dir_ind_2",
        question: "_____ dije la verdad a mi madre sobre el problema ayer.",
        translation: "Ich sagte meiner Mutter gestern die Wahrheit über das Problem.",
        options: ["Le", "La", "Lo", "Les"],
        correct: "Le",
        explanation: "Für INDIREKTES Objekt (wem? - Dativ) nutzen wir 'le': 'le dije' (ich sagte ihr). Deutsche 'meiner Mutter' ist Dativ. Diese Ehrlichkeit gegenüber Mutter über Problem zeigt Vertrauen in familiäre Beziehung und Hoffnung auf Verständnis oder Hilfe."
      },
      {
        id: "obj_dir_ind_3",
        question: "No _____ conozco bien - solo nos hemos visto una vez.",
        translation: "Ich kenne ihn/sie nicht gut - wir haben uns nur einmal gesehen.",
        options: ["lo/la", "le", "les", "los"],
        correct: "lo/la",
        explanation: "Verb 'conocer' (kennen) nimmt DIREKTES Objekt: 'no lo conozco' / 'no la conozco'. Trotz Person ist es direktes Objekt. Diese oberflächliche Bekanntschaft nach nur einem Treffen erlaubt noch kein tiefes Urteil über Charakter oder Persönlichkeit."
      },
      {
        id: "obj_dir_ind_4",
        question: "_____ compré flores hermosas para su cumpleaños mañana.",
        translation: "Ich kaufte ihr schöne Blumen für ihren Geburtstag morgen.",
        options: ["Le", "La", "Lo", "Les"],
        correct: "Le",
        explanation: "Für 'ihr kaufen' (wem kaufen - Dativ) nutzen wir 'le': 'le compré flores'. Das direkte Objekt sind die Blumen, Person ist indirekt. Diese romantische Geste von Blumen zum Geburtstag ist klassischer Weg, Zuneigung und Wertschätzung auszudrücken."
      },
      {
        id: "obj_dir_ind_5",
        question: "_____ llamaré esta noche para hablar del asunto importante pendiente.",
        translation: "Ich werde dich heute Abend anrufen, um über die wichtige ausstehende Angelegenheit zu sprechen.",
        options: ["Te", "Ti", "Tu", "Tú"],
        correct: "Te",
        explanation: "Für 'dich anrufen' nutzen wir DIREKTES Objekt 'te': 'te llamaré'. Deutsche 'dich' ist auch Akkusativ. Dieses angekündigte Telefonat zu wichtigem Thema schafft Erwartung und zeigt, dass ernsthafte Diskussion bevorsteht."
      },
      {
        id: "obj_dir_ind_6",
        question: "_____ presté mi coche a Juan porque el suyo está roto.",
        translation: "Ich lieh Juan mein Auto, weil seins kaputt ist.",
        options: ["Le", "Lo", "La", "Les"],
        correct: "Le",
        explanation: "Für 'jemandem leihen' (wem - Dativ) nutzen wir 'le': 'le presté mi coche'. Das Auto ist direktes Objekt, Juan ist indirekt. Diese Großzügigkeit, Auto zu leihen bei Autopanne des Freundes, zeigt Freundschaft und Hilfsbereitschaft in Not."
      },
      {
        id: "obj_dir_ind_7",
        question: "No _____ entiendo cuando hablas tan rápido así siempre.",
        translation: "Ich verstehe dich nicht, wenn du immer so schnell sprichst.",
        options: ["te", "ti", "tu", "le"],
        correct: "te",
        explanation: "Für 'dich verstehen' nutzen wir DIREKTES Objekt 'te': 'no te entiendo'. Trotz Person ist 'entender' direkt. Diese Verständnisschwierigkeit bei schnellem Sprechen ist häufiges Problem bei Sprachlernern oder in lauter Umgebung."
      },
      {
        id: "obj_dir_ind_8",
        question: "_____ doy las gracias por todo lo que has hecho siempre.",
        translation: "Ich danke dir für alles, was du immer getan hast.",
        options: ["Te", "Ti", "Tu", "Le"],
        correct: "Te",
        explanation: "Für 'dir danken' nutzen wir INDIREKTES 'te': 'te doy las gracias'. Wörtlich 'ich gebe dir die Danksagungen'. Diese tiefe Dankbarkeit für kontinuierliche Unterstützung erkennt an, dass deine Hilfe über lange Zeit wesentlich war."
      },
      {
        id: "obj_dir_ind_9",
        question: "_____ expliqué el problema a mis padres con todos los detalles.",
        translation: "Ich erklärte meinen Eltern das Problem mit allen Details.",
        options: ["Les", "Los", "Las", "Le"],
        correct: "Les",
        explanation: "Für 'ihnen erklären' (Plural Dativ) nutzen wir 'les': 'les expliqué'. Es ist Plural von 'le'. Diese ausführliche Erklärung an Eltern sucht wahrscheinlich Rat oder Verständnis für schwierige Situation."
      },
      {
        id: "obj_dir_ind_10",
        question: "¿_____ puedo ayudar en algo ahora mismo, señor?",
        translation: "Kann ich Ihnen gerade irgendwie helfen, mein Herr?",
        options: ["Le", "Lo", "La", "Te"],
        correct: "Le",
        explanation: "Für höflich 'Ihnen helfen' nutzen wir 'le': 'le puedo ayudar'. Auch für formelles 'usted' ist indirektes Objekt 'le'. Dieses höfliche Hilfsangebot im Geschäft oder Service zeigt professionelle Aufmerksamkeit gegenüber Kunden."
      },
      {
        id: "obj_dir_ind_11",
        question: "_____ veo todos los días pero nunca hablamos mucho entre nosotros.",
        translation: "Ich sehe sie/ihn jeden Tag, aber wir sprechen nie viel miteinander.",
        options: ["Lo/La", "Le", "Les", "Te"],
        correct: "Lo/La",
        explanation: "Verb 'ver' (sehen) nimmt DIREKTES Objekt: 'lo veo' / 'la veo'. Diese tägliche stille Begegnung ohne Gespräch könnte Schüchternheit, Desinteresse oder einfach Respekt vor Privatsphäre sein."
      },
      {
        id: "obj_dir_ind_12",
        question: "_____ escribo una carta larga a mi abuela cada mes sin falta.",
        translation: "Ich schreibe meiner Großmutter jeden Monat ohne Ausnahme einen langen Brief.",
        options: ["Le", "La", "Lo", "Te"],
        correct: "Le",
        explanation: "Für 'ihr schreiben' nutzen wir INDIREKTES 'le': 'le escribo'. Deutsche 'meiner Großmutter' ist Dativ. Diese monatliche Briefkorrespondenz pflegt generationenübergreifende Beziehung, besonders wertvoll wenn Großmutter nicht digital kommuniziert."
      },
      {
        id: "obj_dir_ind_13",
        question: "_____ invité a cenar en mi casa el próximo sábado por la noche.",
        translation: "Ich lud sie/ihn ein, nächsten Samstag Abend bei mir zu Hause zu essen.",
        options: ["Lo/La", "Le", "Les", "Te"],
        correct: "Lo/La",
        explanation: "Verb 'invitar' (einladen) nimmt traditionell DIREKTES Objekt: 'lo invité' / 'la invité'. Manche Regionen nutzen 'le' (Leísmo). Diese Einladung zum Abendessen ist freundschaftliche Geste, die gemeinsame Zeit und Gastfreundschaft zeigt."
      },
      {
        id: "obj_dir_ind_14",
        question: "_____ mandé un mensaje importante a todos mis amigos ayer tarde.",
        translation: "Ich schickte gestern Nachmittag allen meinen Freunden eine wichtige Nachricht.",
        options: ["Les", "Los", "Las", "Le"],
        correct: "Les",
        explanation: "Für 'ihnen schicken' (Plural Dativ) nutzen wir 'les': 'les mandé un mensaje'. Es ist Plural der indirekten Form. Diese Gruppennachricht an alle Freunde ist effiziente Weise, wichtige Information gleichzeitig mit gesamtem Freundeskreis zu teilen."
      },
      {
        id: "obj_dir_ind_15",
        question: "_____ quiero mucho aunque a veces nos peleamos un poco.",
        translation: "Ich liebe dich sehr, obwohl wir uns manchmal ein wenig streiten.",
        options: ["Te", "Ti", "Tu", "Le"],
        correct: "Te",
        explanation: "Für 'dich lieben' nutzen wir DIREKTES 'te': 'te quiero'. Deutsche 'dich' ist auch Akkusativ. Diese Liebesbekundung trotz gelegentlicher Streitereien zeigt reife Beziehung, wo Konflikte die grundlegende Zuneigung nicht zerstören."
      }
    ]
  },

  gustar_verbos: {
    name: "Gustar und ähnliche Verben",
    description: "Mir gefällt - umgekehrte Struktur mit indirektem Objekt",
    icon: Gift,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "gustar_1",
        question: "A mí _____ _____ mucho los deportes al aire libre.",
        translation: "Mir gefallen Outdoor-Sportarten sehr.",
        options: ["me gustan", "me gusta", "te gustan", "le gustan"],
        correct: "me gustan",
        explanation: "Mit PLURAL Subjekt (deportes) nutzen wir 'gustan': 'me gustan los deportes'. Das Verb richtet sich nach dem, was gefällt, nicht nach Person. Diese Konstruktion ist umgekehrt zu Deutsch: wörtlich 'mir gefallen Sportarten'. Die Liebe zu Outdoor-Sport zeigt aktiven Lebensstil."
      },
      {
        id: "gustar_2",
        question: "A ella no _____ _____ el café para nada en absoluto.",
        translation: "Ihr gefällt Kaffee überhaupt gar nicht.",
        options: ["le gusta", "le gustan", "la gusta", "les gusta"],
        correct: "le gusta",
        explanation: "Für 'ihr gefällt' (3. Person Singular) nutzen wir 'le gusta': indirektes Objekt 'le'. Kaffee ist Singular, daher 'gusta'. Diese Abneigung gegen Kaffee ist ungewöhnlich in Kulturen, wo Kaffee zentral ist, zeigt individuelle Geschmackspräferenz."
      },
      {
        id: "gustar_3",
        question: "¿A ti _____ _____ esta música que están tocando ahora?",
        translation: "Gefällt dir diese Musik, die sie gerade spielen?",
        options: ["te gusta", "te gustan", "le gusta", "me gusta"],
        correct: "te gusta",
        explanation: "Für 'dir gefällt' (2. Person) nutzen wir 'te gusta': Musik ist Singular. Die Verstärkung 'a ti' am Anfang betont 'DIR'. Diese Frage über aktuelle Musik testet Geschmacksübereinstimmung und kann zu Gespräch über musikalische Vorlieben führen."
      },
      {
        id: "gustar_4",
        question: "A nosotros _____ _____ viajar a países nuevos y diferentes.",
        translation: "Uns gefällt es, in neue und verschiedene Länder zu reisen.",
        options: ["nos gusta", "nos gustan", "les gusta", "me gusta"],
        correct: "nos gusta",
        explanation: "Für 'uns gefällt' nutzen wir 'nos gusta': Pronomen 'nos' für 1. Person Plural. Infinitiv 'viajar' ist Singular, daher 'gusta'. Diese Reiselust als Paar oder Gruppe zeigt Abenteurergeist und Offenheit für neue Kulturen und Erfahrungen."
      },
      {
        id: "gustar_5",
        question: "A mis padres _____ _____ las películas románticas clásicas antiguas.",
        translation: "Meinen Eltern gefallen klassische alte romantische Filme.",
        options: ["les gustan", "les gusta", "le gustan", "los gustan"],
        correct: "les gustan",
        explanation: "Für 'ihnen gefallen' (Plural Person) nutzen wir 'les gustan': Filme sind Plural. 'A mis padres' wird mit 'les' aufgenommen. Diese Vorliebe für klassische Romantikfilme zeigt Geschmack ihrer Generation und vielleicht nostalgische Erinnerungen an gemeinsame Kinobesuche."
      },
      {
        id: "gustar_6",
        question: "¿A usted _____ _____ este plato de la carta del menú?",
        translation: "Gefällt Ihnen dieses Gericht von der Menükarte?",
        options: ["le gusta", "le gustan", "lo gusta", "te gusta"],
        correct: "le gusta",
        explanation: "Für höflich 'Ihnen gefällt' nutzen wir 'le gusta': auch formelles 'usted' nimmt 'le'. Plato ist Singular. Diese höfliche Nachfrage im Restaurant hilft, Bestellung nach Geschmack zu treffen und Zufriedenheit des Gastes sicherzustellen."
      },
      {
        id: "gustar_7",
        question: "A mí _____ _____ mucho leer libros de ciencia ficción fantásticos.",
        translation: "Mir gefällt es sehr, fantastische Science-Fiction-Bücher zu lesen.",
        options: ["me gusta", "me gustan", "te gusta", "le gusta"],
        correct: "me gusta",
        explanation: "Infinitiv 'leer' ist Singular, daher 'me gusta': 'mir gefällt lesen'. Die Verstärkung 'a mí' betont MICH (nicht andere). Diese Leidenschaft für Science-Fiction zeigt Interesse an futuristischen Konzepten und imaginativen Welten."
      },
      {
        id: "gustar_8",
        question: "A ella _____ _____ los gatos más que los perros domésticos.",
        translation: "Ihr gefallen Katzen mehr als Haushunde.",
        options: ["le gustan", "le gusta", "la gustan", "les gustan"],
        correct: "le gustan",
        explanation: "Gatos (Katzen) ist Plural, daher 'le gustan': 'ihr gefallen Katzen'. Der Vergleich 'más que' zeigt Präferenz. Diese Vorliebe für Katzen über Hunde ist Geschmackssache, vielleicht weil Katzen unabhängiger und weniger anspruchsvoll sind."
      },
      {
        id: "gustar_9",
        question: "¿A ustedes _____ _____ la comida picante mexicana tradicional?",
        translation: "Gefällt euch das traditionelle scharfe mexikanische Essen?",
        options: ["les gusta", "les gustan", "le gusta", "os gusta"],
        correct: "les gusta",
        explanation: "Für 'euch/Ihnen gefällt' (Plural höflich) nutzen wir 'les gusta': 'comida' ist Singular. In Lateinamerika ist 'ustedes' Standard für ihr. Diese Frage über scharfes Essen testet Toleranz für Gewürze, die nicht jeder gewöhnt oder genießt."
      },
      {
        id: "gustar_10",
        question: "A mi hermano _____ _____ practicar deportes extremos peligrosos.",
        translation: "Meinem Bruder gefällt es, gefährliche Extremsportarten zu betreiben.",
        options: ["le gusta", "le gustan", "lo gusta", "les gusta"],
        correct: "le gusta",
        explanation: "Infinitiv 'practicar' ist Singular: 'le gusta practicar'. Auch mehrere Infinitive nehmen Singular. Diese Vorliebe für Extremsport zeigt Adrenalinjunkie-Persönlichkeit, die Aufregung und Risiko sucht, was Sorgen bei Familie verursachen kann."
      },
      {
        id: "gustar_11",
        question: "A todos nosotros _____ _____ las vacaciones de verano largas.",
        translation: "Uns allen gefallen die langen Sommerferien.",
        options: ["nos gustan", "nos gusta", "les gustan", "me gustan"],
        correct: "nos gustan",
        explanation: "Für 'uns gefallen' mit Plural (vacaciones): 'nos gustan las vacaciones'. Verstärkung 'a todos nosotros' betont Gruppenkonsens. Diese universelle Freude über Sommerurlaub ist verständlich, da er Pause von Routine und Zeit für Erholung bietet."
      },
      {
        id: "gustar_12",
        question: "A mí no _____ _____ nada esperar en filas largas del supermercado.",
        translation: "Mir gefällt es überhaupt nicht, in langen Supermarktwarteschlangen zu warten.",
        options: ["me gusta", "me gustan", "te gusta", "le gusta"],
        correct: "me gusta",
        explanation: "Infinitiv 'esperar' nimmt Singular: 'no me gusta esperar'. 'Nada' verstärkt Ablehnung. Diese Frustration mit langen Warteschlangen ist universelles modernes Ärgernis, wo Zeit als wertvoll empfunden wird."
      },
      {
        id: "gustar_13",
        question: "A ti _____ _____ los ojos azules de esa chica hermosa.",
        translation: "Dir gefallen die blauen Augen dieses schönen Mädchens.",
        options: ["te gustan", "te gusta", "le gustan", "me gustan"],
        correct: "te gustan",
        explanation: "Ojos (Augen) ist Plural: 'te gustan los ojos'. Für 2. Person nutzen wir 'te'. Diese Bewunderung spezifischer physischer Merkmale zeigt Aufmerksamkeit für Details und mögliche romantische Anziehung."
      },
      {
        id: "gustar_14",
        question: "A ellos _____ _____ bailar salsa todos los fines de semana.",
        translation: "Ihnen gefällt es, jedes Wochenende Salsa zu tanzen.",
        options: ["les gusta", "les gustan", "le gusta", "los gusta"],
        correct: "les gusta",
        explanation: "Für 'ihnen gefällt' mit Infinitiv: 'les gusta bailar'. Infinitive sind immer Singular. Diese wöchentliche Salsa-Tanzroutine ist energiegeladene Freizeitaktivität, die Fitness mit sozialem Spaß und lateinamerikanischer Kultur verbindet."
      },
      {
        id: "gustar_15",
        question: "¿A quién _____ _____ este libro de historia que encontré ayer?",
        translation: "Wem gehört dieses Geschichtsbuch, das ich gestern fand?",
        options: ["le pertenece", "le pertenecen", "lo pertenece", "les pertenece"],
        correct: "le pertenece",
        explanation: "Verb 'pertenecer' (gehören) funktioniert wie 'gustar': 'le pertenece' (ihm/ihr gehört es). Libro ist Singular. Dieses gefundene Buch sucht seinen Besitzer, Frage zielt darauf ab, es rechtmäßigem Eigentümer zurückzugeben."
      }
    ]
  },

  futuro_simple: {
    name: "Futuro Simple",
    description: "Zukunft ausdrücken - werden + Infinitiv auf Spanisch",
    icon: Umbrella,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "fut_simp_1",
        question: "Mañana _____ al médico para mi revisión anual rutinaria.",
        translation: "Morgen werde ich zum Arzt für meine jährliche Routineuntersuchung gehen.",
        options: ["iré", "voy", "iba", "fui"],
        correct: "iré",
        explanation: "Für ZUKUNFT nutzen wir Futuro Simple: 'iré' (ich werde gehen). Wird aus Infinitiv + Endung gebildet. Im Deutschen 'werde gehen', Spanisch ein Wort. Dieser jährliche Arztbesuch ist vorbeugende Gesundheitsfürsorge, die Probleme früh erkennen kann."
      },
      {
        id: "fut_simp_2",
        question: "Ella _____ el trabajo mañana temprano por la mañana.",
        translation: "Sie wird morgen früh am Morgen die Arbeit beenden.",
        options: ["terminará", "termina", "terminaba", "terminó"],
        correct: "terminará",
        explanation: "Futuro von 'terminar': 'terminará' (sie wird beenden). Endung '-á' für 3. Person Singular. Diese geplante Fertigstellung morgen früh zeigt gutes Zeitmanagement und Vorausplanung, um Deadline rechtzeitig einzuhalten."
      },
      {
        id: "fut_simp_3",
        question: "Nosotros _____ de vacaciones a Italia el próximo verano felizmente.",
        translation: "Wir werden nächsten Sommer glücklich nach Italien in den Urlaub fahren.",
        options: ["iremos", "vamos", "íbamos", "fuimos"],
        correct: "iremos",
        explanation: "Futuro 'iremos' (wir werden fahren): Endung '-emos' für 1. Person Plural. Diese Urlaubsplanung für Italien verspricht kulturelle Entdeckungen, gutes Essen und wahrscheinlich Sonne und Strand."
      },
      {
        id: "fut_simp_4",
        question: "¿Qué _____ tú cuando termines tus estudios universitarios finalmente?",
        translation: "Was wirst du tun, wenn du endlich dein Universitätsstudium beendest?",
        options: ["harás", "haces", "hacías", "hiciste"],
        correct: "harás",
        explanation: "Futuro von 'hacer': 'harás' (du wirst tun). Endung '-ás' für 2. Person Singular. Diese Frage über Pläne nach Studium ist wichtige Lebensplanung, ob Karriere, Reisen oder Weiterbildung - ein bedeutender Lebensübergang steht bevor."
      },
      {
        id: "fut_simp_5",
        question: "Ellos _____ casarse el próximo año en una ceremonia grande.",
        translation: "Sie werden nächstes Jahr in einer großen Zeremonie heiraten.",
        options: ["se casarán", "se casan", "se casaban", "se casaron"],
        correct: "se casarán",
        explanation: "Futuro von reflexivem Verb: 'se casarán' (sie werden heiraten). Pronomen 'se' bleibt vor Verb. Diese Hochzeitsplanung für nächstes Jahr gibt Zeit für Vorbereitung der großen Feier, die wichtigen Meilenstein im Leben markiert."
      },
      {
        id: "fut_simp_6",
        question: "¿_____ tiempo mañana según el pronóstico meteorológico oficial?",
        translation: "Wird es morgen laut offizieller Wettervorhersage schön sein?",
        options: ["Hará buen", "Hace buen", "Hacía buen", "Hizo buen"],
        correct: "Hará buen",
        explanation: "Für WETTER in Zukunft: 'hará buen tiempo' (es wird schön sein). Unpersönliches 'hacer' beschreibt Wetter. Diese Wettervorhersage hilft, Outdoor-Aktivitäten oder Kleidung für morgen zu planen."
      },
      {
        id: "fut_simp_7",
        question: "El mes próximo _____ 30 años - una edad importante para mí.",
        translation: "Nächsten Monat werde ich 30 Jahre alt - ein wichtiges Alter für mich.",
        options: ["cumpliré", "cumplo", "cumplía", "cumplí"],
        correct: "cumpliré",
        explanation: "Futuro von 'cumplir años': 'cumpliré 30 años' (ich werde 30 werden). Für Alter nutzt Spanisch 'erfüllen'. Dieser 30. Geburtstag ist bedeutender Meilenstein, oft mit Reflexion über Lebensziele und Errungenschaften verbunden."
      },
      {
        id: "fut_simp_8",
        question: "¿Cuándo _____ los resultados del examen final importante?",
        translation: "Wann werden sie die Ergebnisse der wichtigen Abschlussprüfung veröffentlichen?",
        options: ["publicarán", "publican", "publicaban", "publicaron"],
        correct: "publicarán",
        explanation: "Futuro von 'publicar': 'publicarán' (sie werden veröffentlichen). Diese erwartete Bekanntgabe von Prüfungsergebnissen schafft Nervosität und Ungeduld bei Studenten, die auf Bestätigung ihrer Leistung warten."
      },
      {
        id: "fut_simp_9",
        question: "Yo te _____ cuando llegue al aeropuerto sin falta alguna.",
        translation: "Ich werde dich ohne Ausnahme anrufen, wenn ich am Flughafen ankomme.",
        options: ["llamaré", "llamo", "llamaba", "llamé"],
        correct: "llamaré",
        explanation: "Futuro 'llamaré' (ich werde anrufen): Versprechen zukünftiger Handlung. Diese Zusage, bei Ankunft anzurufen, beruhigt wartende Person und ermöglicht Koordination von Abholung oder nächsten Schritten."
      },
      {
        id: "fut_simp_10",
        question: "Este proyecto _____ mucho tiempo y esfuerzo de todos nosotros.",
        translation: "Dieses Projekt wird viel Zeit und Anstrengung von uns allen erfordern.",
        options: ["requerirá", "requiere", "requería", "requirió"],
        correct: "requerirá",
        explanation: "Futuro 'requerirá' (wird erfordern): Vorhersage über zukünftigen Aufwand. Diese realistische Einschätzung des Zeitbedarfs hilft, Erwartungen zu setzen und Team mental auf intensive Arbeitsphase vorzubereiten."
      },
      {
        id: "fut_simp_11",
        question: "No _____ ese error otra vez porque aprendí la lección ya.",
        translation: "Ich werde diesen Fehler nicht noch einmal machen, weil ich die Lektion schon gelernt habe.",
        options: ["cometeré", "cometo", "cometía", "cometí"],
        correct: "cometeré",
        explanation: "Futuro negativ: 'no cometeré' (ich werde nicht machen). Diese Entschlossenheit, Fehler nicht zu wiederholen, zeigt Lernen aus Erfahrung und Wachstum durch vorherige Missgeschicke."
      },
      {
        id: "fut_simp_12",
        question: "Creo que _____ un buen día para todos nosotros mañana.",
        translation: "Ich glaube, dass es morgen ein guter Tag für uns alle sein wird.",
        options: ["será", "es", "era", "fue"],
        correct: "será",
        explanation: "Futuro von 'ser': 'será' (es wird sein). Diese optimistische Vorhersage über morgigen Tag drückt Hoffnung und positive Erwartung aus, die motivierend wirken kann."
      },
      {
        id: "fut_simp_13",
        question: "Ustedes _____ que estudiar mucho para aprobar este curso difícil.",
        translation: "Sie werden viel lernen müssen, um diesen schweren Kurs zu bestehen.",
        options: ["tendrán", "tienen", "tenían", "tuvieron"],
        correct: "tendrán",
        explanation: "Futuro von 'tener': 'tendrán que estudiar' (sie werden müssen). Diese Warnung über zukünftigen Lernaufwand setzt realistische Erwartungen für anspruchsvollen Kurs."
      },
      {
        id: "fut_simp_14",
        question: "Mañana _____ un día muy ocupado en el trabajo para mí.",
        translation: "Morgen wird ein sehr arbeitsreicher Tag bei der Arbeit für mich sein.",
        options: ["será", "es", "era", "fue"],
        correct: "será",
        explanation: "Futuro 'será' (wird sein): Vorhersage über morgigen Arbeitstag. Diese Antizipation eines hektischen Tages erlaubt mentale Vorbereitung und vielleicht Vorplanung, um Aufgaben effizient zu bewältigen."
      },
      {
        id: "fut_simp_15",
        question: "El próximo mes _____ de casa y viviré solo independientemente.",
        translation: "Nächsten Monat werde ich ausziehen und unabhängig allein leben.",
        options: ["saldré", "salgo", "salía", "salí"],
        correct: "saldré",
        explanation: "Futuro von 'salir': 'saldré de casa' (ich werde ausziehen). Dieser Schritt zu unabhängigem Leben ist bedeutender Übergang zu Erwachsensein, der Freiheit aber auch neue Verantwortungen bringt."
      }
    ]
  },

  condicional_simple: {
    name: "Condicional Simple",
    description: "Höflichkeit und Hypothesen - würde auf Spanisch",
    icon: Award,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "cond_simp_1",
        question: "Me _____ ir de vacaciones a la playa este verano ideal.",
        translation: "Ich würde gerne im Sommer idealerweise an den Strand in Urlaub fahren.",
        options: ["gustaría", "gusta", "gustaba", "gustó"],
        correct: "gustaría",
        explanation: "Für HÖFLICHEN Wunsch nutzen wir Condicional: 'me gustaría' (mir würde gefallen/ich würde gerne). Es ist höflicher als 'me gusta' (ich mag). Diese höfliche Formulierung von Urlaubswunsch lässt Raum für Diskussion und zeigt, dass es Wunsch ist, keine Forderung."
      },
      {
        id: "cond_simp_2",
        question: "¿_____ ayudarme con este problema difícil, por favor, si puedes?",
        translation: "Würdest du mir bitte mit diesem schwierigen Problem helfen, wenn du kannst?",
        options: ["Podrías", "Puedes", "Podías", "Pudiste"],
        correct: "Podrías",
        explanation: "Für HÖFLICHE Bitte: '¿podrías ayudarme?' (könntest du mir helfen?) ist viel höflicher als '¿puedes?' Diese extrem höfliche Bitte um Hilfe zeigt Respekt und gibt der Person leichte Möglichkeit abzulehnen ohne unhöflich zu sein."
      },
      {
        id: "cond_simp_3",
        question: "Yo _____ ese trabajo si me lo ofrecieran con buen salario.",
        translation: "Ich würde diese Arbeit annehmen, wenn sie mir mit gutem Gehalt angeboten würde.",
        options: ["aceptaría", "acepto", "aceptaba", "acepté"],
        correct: "aceptaría",
        explanation: "Für HYPOTHESE (wenn...dann): 'aceptaría' (ich würde annehmen). Condicional drückt Bedingung aus. Diese hypothetische Bereitschaft, Job anzunehmen, hängt klar von Gehaltshöhe ab - praktische Überlegung bei Karriereentscheidungen."
      },
      {
        id: "cond_simp_4",
        question: "En tu lugar, yo _____ más temprano para evitar el tráfico pesado.",
        translation: "An deiner Stelle würde ich früher losfahren, um schweren Verkehr zu vermeiden.",
        options: ["saldría", "salgo", "salía", "salí"],
        correct: "saldría",
        explanation: "Für RATSCHLAG 'an deiner Stelle': 'yo saldría' (ich würde fahren). Condicional für hypothetische Situation. Dieser praktische Verkehrstipp zeigt Erfahrung mit Stoßzeiten und will Frustration ersparen."
      },
      {
        id: "cond_simp_5",
        question: "¿Qué _____ tú si ganaras la lotería grande esta semana?",
        translation: "Was würdest du tun, wenn du diese Woche die große Lotterie gewinnen würdest?",
        options: ["harías", "haces", "hacías", "hiciste"],
        correct: "harías",
        explanation: "In hypothetischer Frage: '¿qué harías?' (was würdest du tun?). Condicional passt zu 'si ganaras' (Imperfecto Subjuntivo). Diese klassische Fantasiefrage über Lottogewinn enthüllt Träume und Prioritäten von Geld bis Reisen bis Wohltätigkeit."
      },
      {
        id: "cond_simp_6",
        question: "Ellos _____ contentos de ayudarte con la mudanza del apartamento.",
        translation: "Sie wären glücklich, dir beim Umzug der Wohnung zu helfen.",
        options: ["estarían", "están", "estaban", "estuvieron"],
        correct: "estarían",
        explanation: "Condicional von 'estar': 'estarían contentos' (sie wären glücklich). Drückt Bereitschaft aus. Diese großzügige Hilfsbereitschaft beim Umzug zeigt wahre Freundschaft, da Umzüge anstrengende körperliche Arbeit sind."
      },
      {
        id: "cond_simp_7",
        question: "Yo nunca _____ algo así tan terrible en mi vida entera.",
        translation: "Ich würde niemals so etwas Schreckliches in meinem ganzen Leben tun.",
        options: ["haría", "hago", "hacía", "hice"],
        correct: "haría",
        explanation: "Für moralische ABLEHNUNG: 'nunca haría eso' (würde niemals tun). Condicional drückt hypothetische Unmöglichkeit aus. Diese starke moralische Position gegen bestimmte Handlung zeigt klare ethische Grenzen und Prinzipien."
      },
      {
        id: "cond_simp_8",
        question: "¿_____ tan amable de cerrar la ventana, por favor? Hace frío.",
        translation: "Wären Sie so freundlich, bitte das Fenster zu schließen? Es ist kalt.",
        options: ["Sería", "Es", "Era", "Fue"],
        correct: "Sería",
        explanation: "Höfliche Bitte mit Condicional: '¿sería tan amable?' (wären Sie so freundlich?). Extrem höfliche Formulierung. Diese überhöfliche Bitte im kalten Raum zeigt gute Manieren und Rücksicht, auch wenn die Bitte eigentlich einfach ist."
      },
      {
        id: "cond_simp_9",
        question: "Con más dinero, nosotros _____ una casa más grande y cómoda.",
        translation: "Mit mehr Geld würden wir ein größeres und komfortableres Haus kaufen.",
        options: ["compraríamos", "compramos", "comprábamos", "compramos"],
        correct: "compraríamos",
        explanation: "Condicional für HYPOTHESE: 'compraríamos' (wir würden kaufen). Bedingung ist 'mit mehr Geld'. Diese Träumerei über größeres Haus mit mehr Ressourcen ist verständliche Aspiration für bessere Wohnbedingungen."
      },
      {
        id: "cond_simp_10",
        question: "Dijeron que _____ a las cinco de la tarde puntualmente.",
        translation: "Sie sagten, dass sie pünktlich um fünf Uhr nachmittags kommen würden.",
        options: ["vendrían", "vienen", "venían", "vinieron"],
        correct: "vendrían",
        explanation: "Für ZUKUNFT in VERGANGENHEIT (indirekte Rede): 'dijeron que vendrían' (sagten, dass sie kommen würden). Condicional als 'Zukunft der Vergangenheit'. Diese zugesagte Ankunftszeit aus Vergangenheit ist noch zu bestätigen."
      },
      {
        id: "cond_simp_11",
        question: "En ese caso, yo _____ con el director inmediatamente sin demora.",
        translation: "In diesem Fall würde ich sofort ohne Verzögerung mit dem Direktor sprechen.",
        options: ["hablaría", "hablo", "hablaba", "hablé"],
        correct: "hablaría",
        explanation: "Condicional für bedingte Handlung: 'hablaría' (ich würde sprechen). 'En ese caso' setzt Bedingung. Diese Entschlossenheit, bei bestimmter Situation direkt zur Führung zu gehen, zeigt Bereitschaft, Probleme auf höchster Ebene anzusprechen."
      },
      {
        id: "cond_simp_12",
        question: "¿Te _____ venir a cenar a mi casa este fin de semana?",
        translation: "Würde es dir gefallen, dieses Wochenende zum Essen zu mir nach Hause zu kommen?",
        options: ["gustaría", "gusta", "gustaba", "gustó"],
        correct: "gustaría",
        explanation: "Höfliche Einladung: '¿te gustaría venir?' (würde es dir gefallen zu kommen?). Viel höflicher als direktes '¿quieres venir?' Diese charmante Einladung zum Abendessen gibt Gast elegante Möglichkeit anzunehmen oder höflich abzulehnen."
      },
      {
        id: "cond_simp_13",
        question: "Ella dijo que _____ tarde porque tiene mucho trabajo pendiente.",
        translation: "Sie sagte, dass sie sich verspäten würde, weil sie viel ausstehende Arbeit hat.",
        options: ["llegaría", "llega", "llegaba", "llegó"],
        correct: "llegaría",
        explanation: "Indirekte Rede mit Condicional: 'dijo que llegaría' (sagte, dass sie kommen würde). Diese Vorwarnung über Verspätung ist höfliche Kommunikation, die anderen erlaubt, sich anzupassen und nicht unnötig zu warten."
      },
      {
        id: "cond_simp_14",
        question: "Yo _____ estudiar medicina pero es muy caro y largo el proceso.",
        translation: "Ich würde gerne Medizin studieren, aber es ist sehr teuer und der Prozess lang.",
        options: ["querría", "quiero", "quería", "quise"],
        correct: "querría",
        explanation: "Condicional von 'querer': 'querría estudiar' (ich würde gerne studieren). Drückt Wunsch mit implizierter Einschränkung aus. Dieser unerfüllte Traum vom Medizinstudium scheitert an praktischen Hindernissen wie Kosten und Dauer."
      },
      {
        id: "cond_simp_15",
        question: "Sin tu ayuda, nosotros no _____ terminar a tiempo el proyecto.",
        translation: "Ohne deine Hilfe würden wir das Projekt nicht rechtzeitig beenden.",
        options: ["podríamos", "podemos", "podíamos", "pudimos"],
        correct: "podríamos",
        explanation: "Condicional für hypothetische Unmöglichkeit: 'no podríamos' (wir könnten nicht). Diese Anerkennung, dass deine Hilfe essentiell ist, zeigt Wertschätzung für deinen Beitrag zum Projekterfolg."
      }
    ]
  }
};

export default part6Categories;

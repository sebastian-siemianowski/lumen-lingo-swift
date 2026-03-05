/**
 * GERMAN → SPANISH GRAMMAR - PART 7
 * 3 categories, 15 questions each
 */

import { Sparkles, Award, Heart } from "lucide-react";

export const part7Categories = {
  presente_perfecto: {
    name: "Pretérito Perfecto",
    description: "Vollendete Gegenwart - haben + Partizip auf Spanisch",
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "pres_perf_1",
        question: "Yo _____ _____ a París tres veces en mi vida hasta ahora.",
        translation: "Ich bin in meinem Leben bis jetzt dreimal in Paris gewesen.",
        options: ["he estado", "estuve", "estoy", "estaré"],
        correct: "he estado",
        explanation: "Für LEBENSERFAHRUNG nutzen wir Pretérito Perfecto: 'he estado' (ich bin gewesen). Gebildet mit 'haber' + Partizip. Im Deutschen 'bin gewesen', Spanisch nutzt 'haben'. Diese drei Paris-Besuche sind Erfahrungen, die bis zur Gegenwart relevant bleiben und Wissensbasis bilden."
      },
      {
        id: "pres_perf_2",
        question: "Ella nunca _____ _____ comida japonesa auténtica en su vida.",
        translation: "Sie hat in ihrem Leben noch nie authentisches japanisches Essen probiert.",
        options: ["ha probado", "probó", "prueba", "probará"],
        correct: "ha probado",
        explanation: "Mit 'nunca' (noch nie) im Leben nutzen wir Perfecto: 'nunca ha probado' (hat nie probiert). Verbindet Vergangenheit mit Gegenwart. Diese fehlende kulinarische Erfahrung ist Lücke, die vielleicht bald gefüllt werden sollte für kulturelle Bereicherung."
      },
      {
        id: "pres_perf_3",
        question: "¿Tú _____ _____ la tarea de matemáticas para hoy ya?",
        translation: "Hast du die Mathe-Hausaufgaben für heute schon gemacht?",
        options: ["has hecho", "hiciste", "haces", "harás"],
        correct: "has hecho",
        explanation: "Mit 'ya' (schon) fragen wir mit Perfecto: '¿has hecho?' (hast du gemacht?). Fragt nach Vollendung bis jetzt. Diese Frage über Hausaufgaben-Status ist wichtig für Lehrer oder Eltern, um sicherzustellen, dass Pflichten erfüllt wurden."
      },
      {
        id: "pres_perf_4",
        question: "Nosotros _____ _____ en este restaurante muchas veces antes ya.",
        translation: "Wir haben schon viele Male vorher in diesem Restaurant gegessen.",
        options: ["hemos comido", "comimos", "comemos", "comeremos"],
        correct: "hemos comido",
        explanation: "Für wiederholte Erfahrung bis Gegenwart: 'hemos comido' (wir haben gegessen). Diese häufigen Besuche zeigen, dass Restaurant zuverlässig gute Qualität liefert, weshalb ihr immer wiederkommt."
      },
      {
        id: "pres_perf_5",
        question: "Ellos todavía no _____ _____ para el examen de mañana temprano.",
        translation: "Sie haben noch nicht für die Prüfung morgen früh gelernt.",
        options: ["han estudiado", "estudiaron", "estudian", "estudiarán"],
        correct: "han estudiado",
        explanation: "Mit 'todavía no' (noch nicht) nutzen wir Perfecto: 'no han estudiado'. Zeit läuft noch bis morgen. Diese Prokrastination kurz vor Prüfung ist riskantes Verhalten, das wahrscheinlich zu schlechten Ergebnissen führen wird ohne sofortige intensive Vorbereitung."
      },
      {
        id: "pres_perf_6",
        question: "Este año _____ _____ mucho con el español en clase diariamente.",
        translation: "Dieses Jahr habe ich täglich im Unterricht viel Spanisch gelernt.",
        options: ["he aprendido", "aprendí", "aprendo", "aprenderé"],
        correct: "he aprendido",
        explanation: "Für Zeitraum, der noch läuft ('este año'): 'he aprendido' (ich habe gelernt). Jahr ist noch nicht vorbei. Dieser Lernfortschritt im laufenden Jahr zeigt kontinuierliche Verbesserung der Sprachkenntnisse durch regelmäßigen Unterricht."
      },
      {
        id: "pres_perf_7",
        question: "¿Alguna vez _____ _____ en paracaídas? Es muy emocionante siempre.",
        translation: "Hast du jemals Fallschirmspringen gemacht? Es ist immer sehr aufregend.",
        options: ["has saltado", "saltaste", "saltas", "saltarás"],
        correct: "has saltado",
        explanation: "Mit '¿alguna vez?' (jemals?) nutzen wir Perfecto: '¿has saltado?' (bist du gesprungen?). Fragt nach Lebenserfahrung. Diese Frage über Extremsport-Erfahrung kann Interesse wecken, es selbst zu versuchen oder Geschichten über Abenteuer zu teilen."
      },
      {
        id: "pres_perf_8",
        question: "Hoy _____ _____ un día muy productivo y satisfactorio para mí.",
        translation: "Heute ist ein sehr produktiver und befriedigender Tag für mich gewesen.",
        options: ["ha sido", "fue", "es", "será"],
        correct: "ha sido",
        explanation: "Für HEUTE (Tag noch nicht vorbei) nutzen wir Perfecto: 'ha sido' (ist gewesen). Tag läuft noch. Diese positive Bewertung des bisherigen Tagesverlaufs zeigt Zufriedenheit mit erreichten Zielen und guter Zeitnutzung."
      },
      {
        id: "pres_perf_9",
        question: "Mi hermana _____ _____ tres libros este mes increíblemente rápido.",
        translation: "Meine Schwester hat diesen Monat unglaublich schnell drei Bücher gelesen.",
        options: ["ha leído", "leyó", "lee", "leerá"],
        correct: "ha leído",
        explanation: "Für laufenden Zeitraum 'este mes': 'ha leído' (hat gelesen). Monat ist noch nicht beendet. Diese beeindruckende Lesemenge in kurzer Zeit zeigt entweder viel Freizeit oder extreme Lesegeschwindigkeit und Leidenschaft für Literatur."
      },
      {
        id: "pres_perf_10",
        question: "Últimamente, _____ _____ muy cansado por el trabajo intenso continuo.",
        translation: "In letzter Zeit bin ich sehr müde gewesen wegen der intensiven kontinuierlichen Arbeit.",
        options: ["he estado", "estuve", "estoy", "estaré"],
        correct: "he estado",
        explanation: "Mit 'últimamente' (in letzter Zeit) nutzen wir Perfecto: 'he estado cansado'. Beschreibt Zustand, der bis jetzt anhält. Diese anhaltende Erschöpfung durch Überarbeitung ist Warnsignal, dass Balance zwischen Arbeit und Erholung fehlt."
      },
      {
        id: "pres_perf_11",
        question: "¿Ya _____ _____ el correo electrónico que te mandé ayer tarde?",
        translation: "Hast du schon die E-Mail gelesen, die ich dir gestern Nachmittag geschickt habe?",
        options: ["has leído", "leíste", "lees", "leerás"],
        correct: "has leído",
        explanation: "Mit '¿ya?' (schon?) fragen wir mit Perfecto: '¿has leído?' (hast du gelesen?). Interessiert an Vollendung bis jetzt. Diese Nachfrage über E-Mail-Lesung zeigt, dass Inhalt wichtig ist und zeitnahe Reaktion erwartet wird."
      },
      {
        id: "pres_perf_12",
        question: "Todavía no _____ _____ dónde vamos de vacaciones este año.",
        translation: "Wir haben noch nicht entschieden, wohin wir dieses Jahr in Urlaub fahren.",
        options: ["hemos decidido", "decidimos", "decidimos", "decidiremos"],
        correct: "hemos decidido",
        explanation: "Mit 'todavía no' (noch nicht) nutzen wir Perfecto: 'no hemos decidido'. Entscheidung steht noch aus. Diese Unentschlossenheit über Urlaubsziel könnte an zu vielen guten Optionen oder Meinungsverschiedenheiten liegen."
      },
      {
        id: "pres_perf_13",
        question: "Esta semana _____ _____ al gimnasio cuatro veces ya hasta ahora.",
        translation: "Diese Woche bin ich bis jetzt schon viermal ins Fitnessstudio gegangen.",
        options: ["he ido", "fui", "voy", "iré"],
        correct: "he ido",
        explanation: "Für laufende Woche: 'he ido' (bin gegangen). 'Esta semana' ist noch nicht vorbei. Diese beeindruckende Trainingsfrequenz zeigt ernsthafte Fitnessverpflichtung und Disziplin, gesunde Routine trotz anderer Verpflichtungen beizubehalten."
      },
      {
        id: "pres_perf_14",
        question: "Ellos _____ _____ muchos países diferentes en Europa juntos viajando.",
        translation: "Sie haben gemeinsam reisend viele verschiedene europäische Länder besucht.",
        options: ["han visitado", "visitaron", "visitan", "visitarán"],
        correct: "han visitado",
        explanation: "Für Erfahrungen ohne spezifische Zeit: 'han visitado' (haben besucht). Sammlung von Reiseerlebnissen. Diese europäische Reisetätigkeit als Paar oder Gruppe schafft gemeinsame Erinnerungen und kulturelles Verständnis verschiedener Nationen."
      },
      {
        id: "pres_perf_15",
        question: "Siempre _____ _____ una persona muy generosa y amable con todos.",
        translation: "Du bist immer eine sehr großzügige und freundliche Person zu allen gewesen.",
        options: ["has sido", "fuiste", "eres", "serás"],
        correct: "has sido",
        explanation: "Für dauerhafte Charaktereigenschaft bis jetzt: 'has sido' (du bist gewesen). 'Siempre' verbindet Vergangenheit mit Gegenwart. Dieses Kompliment über konsistente Großzügigkeit erkennt langfristige positive Charakterzüge an, die über Zeit bewiesen wurden."
      }
    ]
  },

  adverbios_frecuencia: {
    name: "Häufigkeitsadverbien",
    description: "Siempre, nunca, a veces - wie oft etwas passiert",
    icon: Award,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    questions: [
      {
        id: "adv_freq_1",
        question: "Yo _____ llego tarde al trabajo - soy muy puntual.",
        translation: "Ich komme nie zu spät zur Arbeit - ich bin sehr pünktlich.",
        options: ["nunca", "siempre", "a veces", "mucho"],
        correct: "nunca",
        explanation: "Für NIE nutzen wir 'nunca': 'nunca llego tarde'. Im Deutschen 'nie' oder 'niemals'. Diese perfekte Pünktlichkeit ist professionelle Tugend, die Zuverlässigkeit und Respekt für Zeit anderer zeigt."
      },
      {
        id: "adv_freq_2",
        question: "Ella _____ desayuna antes de ir a la oficina por la mañana.",
        translation: "Sie frühstückt immer, bevor sie morgens ins Büro geht.",
        options: ["siempre", "nunca", "a veces", "poco"],
        correct: "siempre",
        explanation: "Für IMMER nutzen wir 'siempre': 'siempre desayuna'. Position meist VOR Verb. Diese tägliche Frühstücksroutine zeigt gesunde Gewohnheit, Körper Energie für Arbeitstag zu geben."
      },
      {
        id: "adv_freq_3",
        question: "Nosotros _____ vamos al cine los fines de semana cuando podemos.",
        translation: "Wir gehen manchmal am Wochenende ins Kino, wenn wir können.",
        options: ["a veces", "nunca", "siempre", "mucho"],
        correct: "a veces",
        explanation: "Für MANCHMAL nutzen wir 'a veces': weder immer noch nie. Deutsche 'manchmal' oder 'ab und zu'. Diese gelegentlichen Kinobesuche am Wochenende sind flexible Freizeitaktivität, wenn Zeit und Filmauswahl passen."
      },
      {
        id: "adv_freq_4",
        question: "¿_____ has visitado un país extranjero en tu vida completa?",
        translation: "Hast du jemals in deinem ganzen Leben ein fremdes Land besucht?",
        options: ["Alguna vez", "Nunca", "Siempre", "Mucho"],
        correct: "Alguna vez",
        explanation: "Für JEMALS in Fragen: '¿alguna vez?' (schon mal?). Mit Perfecto für Lebenserfahrung. Diese Frage über internationale Reiseerfahrung öffnet Gespräch über Weltoffenheit und kulturelle Erlebnisse."
      },
      {
        id: "adv_freq_5",
        question: "Mis padres _____ me llaman por teléfono cada semana sin falta.",
        translation: "Meine Eltern rufen mich jede Woche ohne Ausnahme an.",
        options: ["siempre", "nunca", "a veces", "poco"],
        correct: "siempre",
        explanation: "Für ausnahmslose Regelmäßigkeit: 'siempre me llaman'. 'Sin falta' verstärkt es. Diese wöchentliche Telefonroutine mit Eltern pflegt familiäre Bindung über Distanz und zeigt gegenseitige Fürsorge."
      },
      {
        id: "adv_freq_6",
        question: "Yo _____ voy a ese restaurante porque la comida es horrible.",
        translation: "Ich gehe nie in dieses Restaurant, weil das Essen schrecklich ist.",
        options: ["nunca", "siempre", "a veces", "mucho"],
        correct: "nunca",
        explanation: "Für absolute Vermeidung: 'nunca voy' (gehe nie). Die Begründung (schlechtes Essen) erklärt Meidung. Diese totale Ablehnung basiert auf schlechter Erfahrung, die ausreicht, jeden zukünftigen Besuch zu verhindern."
      },
      {
        id: "adv_freq_7",
        question: "Ellos _____ estudian en la biblioteca municipal los lunes por la tarde.",
        translation: "Sie lernen normalerweise montags nachmittags in der Stadtbibliothek.",
        options: ["normalmente", "nunca", "siempre", "mucho"],
        correct: "normalmente",
        explanation: "Für NORMALERWEISE/GEWÖHNLICH: 'normalmente estudian'. Ähnlich wie 'usualmente' oder 'generalmente'. Diese regelmäßige aber nicht ausnahmslose Lernroutine in Bibliothek zeigt Studiendisziplin mit gelegentlicher Flexibilität."
      },
      {
        id: "adv_freq_8",
        question: "Yo _____ como verduras - son muy saludables para el cuerpo.",
        translation: "Ich esse oft Gemüse - sie sind sehr gesund für den Körper.",
        options: ["frecuentemente", "nunca", "poco", "nada"],
        correct: "frecuentemente",
        explanation: "Für OFT nutzen wir 'frecuentemente' oder 'a menudo': regelmäßig aber nicht immer. Diese häufige Gemüseaufnahme ist gesunde Ernährungsgewohnheit, die von Ernährungsexperten empfohlen wird für ausgewogene Diät."
      },
      {
        id: "adv_freq_9",
        question: "Ella _____ llega primera a clase - es muy puntual y dedicada.",
        translation: "Sie kommt fast immer als Erste zum Unterricht - sie ist sehr pünktlich und engagiert.",
        options: ["casi siempre", "nunca", "a veces", "poco"],
        correct: "casi siempre",
        explanation: "Für FAST IMMER: 'casi siempre llega'. Sehr häufig aber mit seltenen Ausnahmen. Diese extreme Pünktlichkeit zeigt Engagement für Bildung und Respekt für Lehrer und Lernprozess."
      },
      {
        id: "adv_freq_10",
        question: "Nosotros _____ hacemos ejercicio - solo los fines de semana libres.",
        translation: "Wir machen selten Sport - nur an den freien Wochenenden.",
        options: ["rara vez", "siempre", "mucho", "nunca"],
        correct: "rara vez",
        explanation: "Für SELTEN: 'rara vez hacemos'. Zwischen 'a veces' und 'nunca'. Diese minimale Sportaktivität nur an Wochenenden ist unzureichend für optimale Fitness, aber besser als gar nichts."
      },
      {
        id: "adv_freq_11",
        question: "¿Con qué frecuencia _____ al dentista para revisión dental?",
        translation: "Wie oft gehst du zur zahnärztlichen Kontrolle zum Zahnarzt?",
        options: ["vas", "fuiste", "ibas", "irás"],
        correct: "vas",
        explanation: "Die Frage '¿con qué frecuencia?' (wie oft?) nutzt PRÄSENS für Gewohnheiten: '¿vas al dentista?' Diese Frage über Zahnarzthäufigkeit ist relevant für Mundgesundheit, wo halbjährliche Kontrollen empfohlen werden."
      },
      {
        id: "adv_freq_12",
        question: "Mi hermano _____ me visita porque vive muy lejos de aquí.",
        translation: "Mein Bruder besucht mich selten, weil er sehr weit weg von hier wohnt.",
        options: ["rara vez", "siempre", "mucho", "nunca"],
        correct: "rara vez",
        explanation: "Für SELTEN mit Grund: 'rara vez me visita'. Distanz erklärt seltene Besuche. Diese geografische Trennung macht Besuche logistisch schwierig und kostspielig, weshalb sie spärlich bleiben trotz familiärer Bindung."
      },
      {
        id: "adv_freq_13",
        question: "Yo _____ tomo café por las mañanas - prefiero té verde natural.",
        translation: "Ich trinke morgens nie Kaffee - ich bevorzuge natürlichen grünen Tee.",
        options: ["nunca", "siempre", "a veces", "mucho"],
        correct: "nunca",
        explanation: "Für strikte Vermeidung: 'nunca tomo café'. Die Alternative (grüner Tee) wird genannt. Diese bewusste Kaffee-Vermeidung zugunsten von Tee könnte gesundheitliche oder geschmackliche Gründe haben."
      },
      {
        id: "adv_freq_14",
        question: "Ella _____ lee antes de dormir - es su rutina nocturna relajante.",
        translation: "Sie liest immer vor dem Schlafengehen - es ist ihre entspannende Nachtroutine.",
        options: ["siempre", "nunca", "a veces", "poco"],
        correct: "siempre",
        explanation: "Für ausnahmslose Gewohnheit: 'siempre lee'. Die Routine wird betont. Diese abendliche Leseroutine ist gesunde Schlafhygiene, die hilft, vom Tag abzuschalten und ruhigeren Schlaf zu fördern."
      },
      {
        id: "adv_freq_15",
        question: "Nosotros _____ salimos a cenar fuera - solo en ocasiones especiales importantes.",
        translation: "Wir essen nur selten auswärts - nur zu wichtigen besonderen Anlässen.",
        options: ["rara vez", "siempre", "mucho", "nunca"],
        correct: "rara vez",
        explanation: "Für SELTEN mit Einschränkung: 'rara vez salimos'. 'Solo en ocasiones especiales' erklärt Seltenheit. Diese Zurückhaltung beim Restaurant-Besuch könnte budgetär oder durch Präferenz für Hausmannskost motiviert sein."
      }
    ]
  },

  preposiciones_lugar: {
    name: "Ortspräpositionen",
    description: "En, sobre, debajo - räumliche Beziehungen ausdrücken",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "prep_lugar_1",
        question: "El libro está _____ la mesa en la sala de estar.",
        translation: "Das Buch ist auf dem Tisch im Wohnzimmer.",
        options: ["sobre", "en", "bajo", "entre"],
        correct: "sobre",
        explanation: "Für AUF (Oberfläche) nutzen wir 'sobre': 'sobre la mesa'. Auch 'en' möglich, aber 'sobre' betont oben drauf. Diese Buchposition auf Tisch ist häufige Alltagssituation, wo man Sachen ablegt."
      },
      {
        id: "prep_lugar_2",
        question: "Vivo _____ Madrid desde hace cinco años ya completos.",
        translation: "Ich lebe seit fünf vollen Jahren schon in Madrid.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für IN (Stadt/Land) nutzen wir 'en': 'vivo en Madrid'. Deutsche 'in' entspricht 'en'. Diese fünfjährige Residenz in Madrid zeigt etabliertes Leben in spanischer Hauptstadt mit wahrscheinlich tiefen lokalen Verbindungen."
      },
      {
        id: "prep_lugar_3",
        question: "El gato está escondido _____ la cama en el dormitorio ahora.",
        translation: "Die Katze versteckt sich jetzt im Schlafzimmer unter dem Bett.",
        options: ["debajo de", "sobre", "en", "entre"],
        correct: "debajo de",
        explanation: "Für UNTER nutzen wir 'debajo de': 'debajo de la cama'. Deutsche 'unter' ist direkt. Dieses klassische Katzenversteck unter Bett ist typisches Verhalten, wenn Katze Ruhe sucht oder ängstlich ist."
      },
      {
        id: "prep_lugar_4",
        question: "La foto está colgada _____ la pared del pasillo principal.",
        translation: "Das Foto hängt an der Wand des Hauptflurs.",
        options: ["en", "sobre", "bajo", "entre"],
        correct: "en",
        explanation: "Für AN (vertikale Fläche) nutzen wir 'en': 'en la pared'. Für horizontale wäre 'sobre' besser. Diese Fotoplatzierung im Flur macht es sichtbar für alle, die vorbeigehen, als dekoratives Element oder Erinnerung."
      },
      {
        id: "prep_lugar_5",
        question: "Hay un parque hermoso _____ mi casa y el supermercado local.",
        translation: "Es gibt einen schönen Park zwischen meinem Haus und dem örtlichen Supermarkt.",
        options: ["entre", "en", "sobre", "bajo"],
        correct: "entre",
        explanation: "Für ZWISCHEN nutzen wir 'entre': 'entre mi casa y el supermercado'. Deutsche 'zwischen' ist direkt. Dieser Park auf dem Weg zum Supermarkt bietet angenehme grüne Abkürzung für Fußgänger."
      },
      {
        id: "prep_lugar_6",
        question: "Vamos _____ la playa este fin de semana si hace buen tiempo.",
        translation: "Wir fahren dieses Wochenende an den Strand, wenn gutes Wetter ist.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Für Bewegung ZU Ort nutzen wir 'a': 'vamos a la playa' (wir gehen zum Strand). Deutsche 'an/zu' ist 'a'. Dieser Strandausflug hängt von gutem Wetter ab, was vernünftige Planung für Outdoor-Aktivität ist."
      },
      {
        id: "prep_lugar_7",
        question: "Las llaves están _____ el cajón de la mesa del comedor.",
        translation: "Die Schlüssel sind in der Schublade des Esstisches.",
        options: ["en", "sobre", "bajo", "entre"],
        correct: "en",
        explanation: "Für IN (Behälter) nutzen wir 'en': 'en el cajón' (in der Schublade). Diese sichere Aufbewahrung von Schlüsseln an festem Ort verhindert Suchen und Verlieren."
      },
      {
        id: "prep_lugar_8",
        question: "El restaurante está _____ la esquina de esta calle principal.",
        translation: "Das Restaurant ist an der Ecke dieser Hauptstraße.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für AN DER ECKE: 'en la esquina'. Auch 'a la vuelta de la esquina' (um die Ecke). Diese Eckposition macht Restaurant leicht auffindbar und oft gut besucht durch hohe Sichtbarkeit."
      },
      {
        id: "prep_lugar_9",
        question: "Pon los platos _____ la mesa para la cena de esta noche.",
        translation: "Stell die Teller auf den Tisch für das Abendessen heute Abend.",
        options: ["sobre", "en", "bajo", "entre"],
        correct: "sobre",
        explanation: "Für AUF legen: 'sobre la mesa' betont Oberseite. Auch 'en' funktioniert. Diese Vorbereitung für Abendessen durch Tischdecken ist häusliche Routine, die Mahlzeit strukturiert."
      },
      {
        id: "prep_lugar_10",
        question: "Ella está sentada _____ su novio y su mejor amiga íntima.",
        translation: "Sie sitzt zwischen ihrem Freund und ihrer besten engen Freundin.",
        options: ["entre", "en", "sobre", "bajo"],
        correct: "entre",
        explanation: "Für ZWISCHEN zwei Personen: 'entre su novio y su amiga'. Diese Sitzposition zwischen Freund und bester Freundin könnte komfortabel sein oder interessante soziale Dynamik schaffen."
      },
      {
        id: "prep_lugar_11",
        question: "Hay una lámpara bonita _____ el techo de la sala principal.",
        translation: "Es gibt eine schöne Lampe an der Decke des Hauptwohnzimmers.",
        options: ["en", "sobre", "bajo", "entre"],
        correct: "en",
        explanation: "Für AN DECKE: 'en el techo' (an der Decke). Diese Deckenlampe ist funktionales und dekoratives Element, das Raum beleuchtet und Atmosphäre schafft."
      },
      {
        id: "prep_lugar_12",
        question: "Vamos _____ pie al trabajo cada día para hacer ejercicio.",
        translation: "Wir gehen jeden Tag zu Fuß zur Arbeit, um Sport zu machen.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Die feste Phrase 'a pie' bedeutet zu Fuß: 'vamos a pie'. Nicht wörtlich übersetzbar. Dieser tägliche Fußweg zur Arbeit kombiniert Transport mit Fitness und ist umweltfreundliche gesunde Alternative zu Auto."
      },
      {
        id: "prep_lugar_13",
        question: "Mi apartamento está _____ el tercer piso del edificio moderno nuevo.",
        translation: "Meine Wohnung ist im dritten Stock des neuen modernen Gebäudes.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für IN (Stockwerk/Etage): 'en el tercer piso'. Diese Wohnung im dritten Stock bietet wahrscheinlich gute Balance: hoch genug für Ruhe, niedrig genug für bequemen Zugang ohne Aufzugabhängigkeit."
      },
      {
        id: "prep_lugar_14",
        question: "Hay una cafetería pequeña _____ de mi oficina de trabajo diario.",
        translation: "Es gibt ein kleines Café in der Nähe meines täglichen Arbeitsbüros.",
        options: ["cerca", "lejos", "dentro", "fuera"],
        correct: "cerca",
        explanation: "Für IN DER NÄHE: 'cerca de mi oficina'. Gegenteil ist 'lejos de' (weit von). Dieses nahegelegene Café ist praktisch für Kaffeepausen oder schnelles Mittagessen während Arbeitstag."
      },
      {
        id: "prep_lugar_15",
        question: "Los niños están jugando _____ del jardín de la casa ahora.",
        translation: "Die Kinder spielen jetzt draußen im Garten des Hauses.",
        options: ["fuera", "dentro", "cerca", "lejos"],
        correct: "fuera",
        explanation: "Für DRAUSSEN: 'fuera del jardín' (außerhalb, draußen). Gegenteil 'dentro' (drinnen). Dieses Spielen im Freien ist gesund für Kinder, bietet Bewegung, frische Luft und Verbindung zur Natur."
      }
    ]
  }
};

export default part7Categories;
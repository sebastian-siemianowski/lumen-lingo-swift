/**
 * GERMAN → SPANISH GRAMMAR - PART 11
 * 3 categories, 15 questions each
 */

import { Flame, Award, Target } from "lucide-react";

export const part11Categories = {
  pronombres_relativos: {
    name: "Relativpronomen",
    description: "Que, quien, donde - Nebensätze richtig verbinden",
    icon: Flame,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "rel_pron_1",
        question: "El libro _____ compré ayer es muy interesante y educativo.",
        translation: "Das Buch, das ich gestern kaufte, ist sehr interessant und lehrreich.",
        options: ["que", "quien", "cual", "donde"],
        correct: "que",
        explanation: "Für DINGE nutzen wir 'que' (das, der, die): universelles Relativpronomen. Deutsche 'das' ist 'que'. Dieses gestern gekaufte Buch verspricht lehrreichen Inhalt, der Wissenserweiterung bringt."
      },
      {
        id: "rel_pron_2",
        question: "La persona _____ te ayudó ayer es mi mejor amiga íntima.",
        translation: "Die Person, die dir gestern half, ist meine beste enge Freundin.",
        options: ["que", "quien", "cual", "donde"],
        correct: "que",
        explanation: "Für PERSONEN (direkter Anschluss) nutzen wir auch 'que': 'la persona que ayudó'. Auch 'quien' möglich, aber 'que' häufiger. Diese hilfreiche Freundin gestern zeigt Großzügigkeit und Freundschaft."
      },
      {
        id: "rel_pron_3",
        question: "El restaurante _____ comimos anoche era muy caro y elegante.",
        translation: "Das Restaurant, wo wir gestern Abend aßen, war sehr teuer und elegant.",
        options: ["donde", "que", "cual", "quien"],
        correct: "donde",
        explanation: "Für ORT nutzen wir 'donde' (wo): 'el restaurante donde comimos'. Deutsche 'wo' ist direkt 'donde'. Dieses teure elegante Restaurant von gestern war wahrscheinlich besondere Gelegenheit oder Feier."
      },
      {
        id: "rel_pron_4",
        question: "Las personas con _____ trabajo son muy profesionales y amables.",
        translation: "Die Personen, mit denen ich arbeite, sind sehr professionell und freundlich.",
        options: ["quienes", "que", "cual", "donde"],
        correct: "quienes",
        explanation: "Nach PRÄPOSITION mit Personen nutzen wir 'quien/quienes': 'con quienes trabajo' (mit denen ich arbeite). Nicht 'que' nach Präposition bei Personen. Diese positiven Kollegen machen Arbeitsumfeld angenehm."
      },
      {
        id: "rel_pron_5",
        question: "Lo _____ me dijiste ayer fue muy útil para mi decisión final.",
        translation: "Das, was du mir gestern sagtest, war sehr nützlich für meine Endentscheidung.",
        options: ["que", "cual", "quien", "donde"],
        correct: "que",
        explanation: "Für 'DAS WAS' nutzen wir 'lo que': neutrales Relativpronomen für ganze Ideen. Diese hilfreiche Information von gestern beeinflusste wichtige Entscheidungsfindung positiv."
      },
      {
        id: "rel_pron_6",
        question: "La ciudad _____ nací es pequeña pero muy hermosa y pintoresca.",
        translation: "Die Stadt, wo ich geboren wurde, ist klein aber sehr schön und malerisch.",
        options: ["donde", "que", "cual", "quien"],
        correct: "donde",
        explanation: "Für Geburtsort: 'la ciudad donde nací' (Stadt, wo ich geboren wurde). 'Donde' für Orte. Diese kleine malerische Geburtsstadt hat besondere emotionale Bedeutung trotz bescheidener Größe."
      },
      {
        id: "rel_pron_7",
        question: "El chico _____ te hablé vive en mi barrio residencial cercano.",
        translation: "Der Junge, von dem ich dir erzählte, wohnt in meiner nahen Wohngegend.",
        options: ["del que", "que", "quien", "donde"],
        correct: "del que",
        explanation: "Nach Präposition 'de': 'del que' (von dem). 'De' + 'el que' → 'del que'. Mit Dingen oder informell. Dieser Nachbarsjunge, über den gesprochen wurde, ist offenbar interessante Person."
      },
      {
        id: "rel_pron_8",
        question: "La razón _____ no vine fue que estaba enfermo en cama.",
        translation: "Der Grund, warum ich nicht kam, war, dass ich krank im Bett war.",
        options: ["por la que", "que", "cual", "donde"],
        correct: "por la que",
        explanation: "Für GRUND: 'la razón por la que' (der Grund, warum). Präposition 'por' gehört dazu. Diese Krankheitsentschuldigung für Abwesenheit ist legitime Begründung für Nichterscheinen."
      },
      {
        id: "rel_pron_9",
        question: "Todo _____ necesitas está en esta caja grande aquí mismo.",
        translation: "Alles, was du brauchst, ist in dieser großen Schachtel genau hier.",
        options: ["lo que", "que", "cual", "quien"],
        correct: "lo que",
        explanation: "Nach 'todo': 'todo lo que' (alles was). Neutrales 'lo que' für abstrakte Dinge. Diese Versicherung, dass alles Nötige vorhanden ist, beruhigt und verhindert unnötige Besorgungen."
      },
      {
        id: "rel_pron_10",
        question: "El día _____ nos conocimos fue el mejor de mi vida.",
        translation: "Der Tag, an dem wir uns kennenlernten, war der beste meines Lebens.",
        options: ["en que", "que", "cual", "donde"],
        correct: "en que",
        explanation: "Für TAG: 'el día en que' (der Tag, an dem). Präposition 'en' gehört zu Zeit. Dieser besondere Kennenlern-Tag hat romantische oder freundschaftliche Bedeutung als Beginn wichtiger Beziehung."
      },
      {
        id: "rel_pron_11",
        question: "Los estudiantes _____ aprobaron el examen son muy inteligentes todos.",
        translation: "Die Schüler, die die Prüfung bestanden, sind alle sehr intelligent.",
        options: ["que", "quienes", "cual", "donde"],
        correct: "que",
        explanation: "Für Personen OHNE Präposition: 'que' ist Standard. 'Quienes' auch möglich, aber seltener. Diese erfolgreichen Prüflinge zeigen, dass harte Arbeit und Intelligenz zu Erfolg führen."
      },
      {
        id: "rel_pron_12",
        question: "El momento _____ llegaste fue perfecto - justo a tiempo exacto.",
        translation: "Der Moment, in dem du ankamst, war perfekt - genau pünktlich.",
        options: ["en que", "que", "cual", "donde"],
        correct: "en que",
        explanation: "Für ZEITPUNKT: 'el momento en que' (der Moment, in dem). Mit Präposition 'en'. Dieses perfekte Timing der Ankunft zeigt gute Koordination oder glücklichen Zufall."
      },
      {
        id: "rel_pron_13",
        question: "La forma _____ hablas español es muy natural y fluida realmente.",
        translation: "Die Art, wie du Spanisch sprichst, ist wirklich sehr natürlich und fließend.",
        options: ["en que", "que", "cual", "donde"],
        correct: "en que",
        explanation: "Für ART UND WEISE: 'la forma en que' (die Art, wie). Auch 'como' möglich. Dieses Kompliment über natürliche Spanischkenntnisse erkennt hohe Sprachbeherrschung an."
      },
      {
        id: "rel_pron_14",
        question: "Esa es la tienda _____ compro toda mi ropa siempre desde años.",
        translation: "Das ist das Geschäft, wo ich seit Jahren immer meine ganze Kleidung kaufe.",
        options: ["donde", "que", "cual", "quien"],
        correct: "donde",
        explanation: "Für Geschäft als ORT: 'la tienda donde compro'. Diese langjährige Kundentreue zu einem Geschäft zeigt Zufriedenheit mit Produkten und Service."
      },
      {
        id: "rel_pron_15",
        question: "No entiendo _____ quieres decir con eso exactamente ahora.",
        translation: "Ich verstehe nicht, was du damit jetzt genau meinst.",
        options: ["lo que", "que", "cual", "quien"],
        correct: "lo que",
        explanation: "Für 'WAS' als Konzept: 'lo que quieres decir' (was du meinst). Neutrales 'lo que'. Diese Verständnisfrage klärt Missverständnis in Kommunikation und sucht Klarstellung."
      }
    ]
  },

  presente_progresivo_vs_simple: {
    name: "Presente Continuo vs. Simple",
    description: "Estoy haciendo vs. hago - Unterschied zwischen Verlauf und Gewohnheit",
    icon: Award,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "pres_prog_1",
        question: "Ahora mismo _____ _____ una película en la televisión de casa.",
        translation: "Gerade jetzt schaue ich einen Film im Fernseher zu Hause.",
        options: ["estoy viendo", "veo", "he visto", "veía"],
        correct: "estoy viendo",
        explanation: "Für MOMENTANE Aktivität nutzen wir Verlaufsform: 'estoy viendo' (ich bin am Schauen). 'Ahora mismo' signalisiert Gegenwart. Diese aktuelle Filmbetrachtung ist spezifische Aktivität in diesem Moment."
      },
      {
        id: "pres_prog_2",
        question: "Yo _____ café todas las mañanas sin falta desde hace años.",
        translation: "Ich trinke seit Jahren jeden Morgen ohne Ausnahme Kaffee.",
        options: ["tomo", "estoy tomando", "he tomado", "tomaba"],
        correct: "tomo",
        explanation: "Für GEWOHNHEIT nutzen wir Presente Simple: 'tomo' (ich trinke). Nicht Verlaufsform bei Routinen. Diese tägliche Kaffeeroutine seit Jahren ist etablierte Morgengewohnheit, keine momentane Aktion."
      },
      {
        id: "pres_prog_3",
        question: "Ellos _____ _____ para el examen en la biblioteca ahora.",
        translation: "Sie lernen jetzt in der Bibliothek für die Prüfung.",
        options: ["están estudiando", "estudian", "han estudiado", "estudiaban"],
        correct: "están estudiando",
        explanation: "Für aktuelle AKTIVITÄT: 'están estudiando' (sind am Lernen). 'Ahora' zeigt Gegenwart. Diese gegenwärtige Lernszene in Bibliothek ist spezifische momentane Beschäftigung."
      },
      {
        id: "pres_prog_4",
        question: "Mi hermana _____ en un hospital como enfermera profesional capacitada.",
        translation: "Meine Schwester arbeitet in einem Krankenhaus als ausgebildete professionelle Krankenschwester.",
        options: ["trabaja", "está trabajando", "ha trabajado", "trabajaba"],
        correct: "trabaja",
        explanation: "Für BERUF/DAUERZUSTAND nutzen wir Simple: 'trabaja' (arbeitet). Nicht Verlaufsform für permanente Situation. Dieser Krankenschwestern-Beruf ist dauerhafte Tätigkeit, nicht temporäre Aktivität."
      },
      {
        id: "pres_prog_5",
        question: "¿Qué _____ _____ ahora? Pareces muy concentrado y ocupado.",
        translation: "Was machst du jetzt? Du scheinst sehr konzentriert und beschäftigt zu sein.",
        options: ["estás haciendo", "haces", "has hecho", "hacías"],
        correct: "estás haciendo",
        explanation: "Frage nach AKTUELLER Tätigkeit: '¿qué estás haciendo?' Mit 'ahora' immer Verlaufsform. Diese Frage über momentane Beschäftigung zeigt Neugier über fokussierte Aktivität."
      },
      {
        id: "pres_prog_6",
        question: "Normalmente _____ al gimnasio tres veces por semana regularmente.",
        translation: "Normalerweise gehe ich regelmäßig dreimal pro Woche ins Fitnessstudio.",
        options: ["voy", "estoy yendo", "he ido", "iba"],
        correct: "voy",
        explanation: "Für ROUTINE mit 'normalmente': Simple 'voy' (gehe). Gewohnheiten brauchen keine Verlaufsform. Diese Fitness-Routine dreimal wöchentlich ist gesunde regelmäßige Aktivität."
      },
      {
        id: "pres_prog_7",
        question: "Los niños _____ _____ en el jardín con sus amigos ahora mismo.",
        translation: "Die Kinder spielen gerade jetzt im Garten mit ihren Freunden.",
        options: ["están jugando", "juegan", "han jugado", "jugaban"],
        correct: "están jugando",
        explanation: "Für MOMENTANE Kinderspiel: 'están jugando'. 'Ahora mismo' verlangt Verlaufsform. Diese aktuelle Outdoor-Spielszene ist gesunde Kinderaktivität in diesem spezifischen Moment."
      },
      {
        id: "pres_prog_8",
        question: "Mi padre _____ el periódico cada mañana después del desayuno siempre.",
        translation: "Mein Vater liest jeden Morgen nach dem Frühstück immer die Zeitung.",
        options: ["lee", "está leyendo", "ha leído", "leía"],
        correct: "lee",
        explanation: "Für tägliche GEWOHNHEIT: Simple 'lee' (liest). 'Cada mañana' zeigt Routine. Diese Zeitungslektüre nach Frühstück ist klassisches Morgenritual vieler Menschen."
      },
      {
        id: "pres_prog_9",
        question: "Ella siempre _____ muy temprano para ir a trabajar cada día.",
        translation: "Sie steht jeden Tag immer sehr früh auf, um zur Arbeit zu gehen.",
        options: ["se levanta", "se está levantando", "se ha levantado", "se levantaba"],
        correct: "se levanta",
        explanation: "Für ROUTINE: 'se levanta' (steht auf) Simple. 'Siempre' signalisiert Gewohnheit. Dieses frühe tägliche Aufstehen ist Teil ihrer Arbeitsroutine."
      },
      {
        id: "pres_prog_10",
        question: "No me molestes ahora - _____ _____ un informe importante urgente.",
        translation: "Störe mich jetzt nicht - ich schreibe einen wichtigen dringenden Bericht.",
        options: ["estoy escribiendo", "escribo", "he escrito", "escribía"],
        correct: "estoy escribiendo",
        explanation: "Für MOMENTANE konzentrierte Arbeit: 'estoy escribiendo'. 'Ahora' mit Bitte um Ruhe verlangt Verlaufsform. Diese fokussierte Berichtserstellung duldet keine Unterbrechung."
      },
      {
        id: "pres_prog_11",
        question: "Todos los domingos _____ a mis abuelos en el pueblo natal.",
        translation: "Jeden Sonntag besuche ich meine Großeltern im Heimatdorf.",
        options: ["visito", "estoy visitando", "he visitado", "visitaba"],
        correct: "visito",
        explanation: "Für wöchentliche ROUTINE: Simple 'visito'. 'Todos los domingos' zeigt Gewohnheit. Diese regelmäßigen Familienbesuche pflegen generationsübergreifende Beziehungen."
      },
      {
        id: "pres_prog_12",
        question: "¿Por qué _____ _____ tanto? ¿Pasó algo gracioso divertido?",
        translation: "Warum lachst du so viel? Ist etwas Lustiges Witziges passiert?",
        options: ["estás riendo", "ríes", "has reído", "reías"],
        correct: "estás riendo",
        explanation: "Für AKTUELLES Lachen: 'estás riendo' (bist am Lachen). 'Tanto' betont Intensität jetzt. Diese Frage sucht Erklärung für momentane Heiterkeit, um am Witz teilzuhaben."
      },
      {
        id: "pres_prog_13",
        question: "El sol _____ a las seis de la mañana en verano aquí.",
        translation: "Die Sonne geht im Sommer hier um sechs Uhr morgens auf.",
        options: ["sale", "está saliendo", "ha salido", "salía"],
        correct: "sale",
        explanation: "Für NATUREREIGNIS (Routine): Simple 'sale' (geht auf). Sonnenaufgang ist regelmäßiges Phänomen. Dieser frühe Sommeraufgang gibt lange Tage für Aktivitäten."
      },
      {
        id: "pres_prog_14",
        question: "Ahora _____ _____ mejor después de tomar la medicina recetada.",
        translation: "Jetzt fühle ich mich besser nach Einnahme der verschriebenen Medizin.",
        options: ["me estoy sintiendo", "me siento", "me he sentido", "me sentía"],
        correct: "me estoy sintiendo",
        explanation: "Für PROZESS der Besserung: 'me estoy sintiendo mejor' betont ÄNDERUNG jetzt. Auch Simple möglich, aber Verlaufsform betont Prozess. Diese Genesung durch Medizin ist erfreulicher Fortschritt."
      },
      {
        id: "pres_prog_15",
        question: "Mi abuela _____ galletas deliciosas cada fin de semana para nosotros.",
        translation: "Meine Oma backt jedes Wochenende leckere Kekse für uns.",
        options: ["hace", "está haciendo", "ha hecho", "hacía"],
        correct: "hace",
        explanation: "Für wöchentliche TRADITION: Simple 'hace' (macht/backt). 'Cada fin de semana' ist Routine. Diese liebevolle Backgewohnheit der Großmutter ist süße Familientradition."
      }
    ]
  },

  verbos_reciprocos: {
    name: "Reziproke Verben",
    description: "Nos/se + Plural - gegenseitige Handlungen ausdrücken",
    icon: Target,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "recip_1",
        question: "Nosotros _____ _____ hace diez años en la universidad juntos.",
        translation: "Wir lernten uns vor zehn Jahren zusammen an der Universität kennen.",
        options: ["nos conocimos", "conocimos", "nos conocemos", "conocíamos"],
        correct: "nos conocimos",
        explanation: "Für SICH KENNENLERNEN (gegenseitig): 'nos conocimos' (wir lernten uns kennen). 'Nos' zeigt Gegenseitigkeit. Diese Kennenlern-Geschichte an Uni ist oft Beginn lebenslanger Freundschaften."
      },
      {
        id: "recip_2",
        question: "Ellos _____ _____ todos los días por mensajes de texto constantes.",
        translation: "Sie schreiben sich jeden Tag durch konstante Textnachrichten.",
        options: ["se escriben", "escriben", "se escribe", "escribían"],
        correct: "se escriben",
        explanation: "Für SICH SCHREIBEN (gegenseitig): 'se escriben'. Pronomen 'se' für 3. Person Plural gegenseitig. Diese tägliche Textkommunikation hält Verbindung lebendig trotz möglicher Distanz."
      },
      {
        id: "recip_3",
        question: "Mi novia y yo _____ _____ cada noche antes de dormir.",
        translation: "Meine Freundin und ich rufen uns jede Nacht vor dem Schlafen an.",
        options: ["nos llamamos", "llamamos", "nos llama", "llamábamos"],
        correct: "nos llamamos",
        explanation: "Für SICH ANRUFEN: 'nos llamamos' (wir rufen uns an). Gegenseitige Aktion. Dieser nächtliche Anruf vor Schlaf ist romantische Routine für Paare, die nicht zusammen wohnen."
      },
      {
        id: "recip_4",
        question: "Ellos _____ _____ muy bien desde niños pequeños siempre.",
        translation: "Sie verstehen sich seit sie kleine Kinder sind immer sehr gut.",
        options: ["se entienden", "entienden", "se entiende", "entendían"],
        correct: "se entienden",
        explanation: "Für SICH VERSTEHEN: 'se entienden' (verstehen sich). Diese langjährige gegenseitige Verständigung seit Kindheit ist Basis für tiefe Freundschaft oder Geschwisterbindung."
      },
      {
        id: "recip_5",
        question: "¿Ustedes _____ _____ frecuentemente fuera del trabajo también a veces?",
        translation: "Seht ihr euch manchmal auch häufig außerhalb der Arbeit?",
        options: ["se ven", "ven", "se ve", "veían"],
        correct: "se ven",
        explanation: "Für SICH SEHEN: 'se ven' (sehen sich). Diese Treffen außerhalb der Arbeit zeigen, dass Kollegen zu Freunden geworden sind."
      },
      {
        id: "recip_6",
        question: "Nosotros _____ _____ por primera vez en una fiesta del amigo mutuo.",
        translation: "Wir sahen uns zum ersten Mal auf einer Party des gemeinsamen Freundes.",
        options: ["nos vimos", "vimos", "nos vemos", "veíamos"],
        correct: "nos vimos",
        explanation: "Für SICH SEHEN in Vergangenheit: 'nos vimos' (wir sahen uns). Diese erste Begegnung auf Party ist oft romantischer oder freundschaftlicher Ursprung."
      },
      {
        id: "recip_7",
        question: "Mis padres _____ _____ mucho - tienen matrimonio muy feliz.",
        translation: "Meine Eltern lieben sich sehr - sie haben eine sehr glückliche Ehe.",
        options: ["se quieren", "quieren", "se quiere", "querían"],
        correct: "se quieren",
        explanation: "Für SICH LIEBEN: 'se quieren' (lieben sich). Gegenseitige Zuneigung. Diese glückliche Ehe mit gegenseitiger Liebe ist schönes Vorbild für Kinder."
      },
      {
        id: "recip_8",
        question: "¿Vosotros _____ _____ a menudo para tomar café juntos?",
        translation: "Trefft ihr euch oft, um zusammen Kaffee zu trinken?",
        options: ["os encontráis", "encontráis", "se encuentran", "encontrábais"],
        correct: "os encontráis",
        explanation: "Für SICH TREFFEN in Spanien (vosotros): 'os encontráis'. In Lateinamerika: 'se encuentran' (ustedes). Diese Kaffeetreffen sind gesellige Routine für Freundesaustausch."
      },
      {
        id: "recip_9",
        question: "Ellos _____ _____ por teléfono cada domingo sin falta ninguna.",
        translation: "Sie telefonieren jeden Sonntag ohne jegliche Ausnahme miteinander.",
        options: ["se llaman", "llaman", "se llama", "llamaban"],
        correct: "se llaman",
        explanation: "Für SICH ANRUFEN (Gewohnheit): 'se llaman' Simple. Diese wöchentliche Telefon-Routine hält Kontakt aufrecht, wichtig bei geografischer Trennung."
      },
      {
        id: "recip_10",
        question: "Mi mejor amigo y yo _____ _____ muy bien siempre desde el principio.",
        translation: "Mein bester Freund und ich verstehen uns seit Anfang an immer sehr gut.",
        options: ["nos llevamos", "llevamos", "nos lleva", "llevábamos"],
        correct: "nos llevamos",
        explanation: "Für SICH VERSTEHEN/AUSKOMMEN: 'nos llevamos bien' (kommen gut miteinander aus). Idiomatischer Ausdruck. Diese harmonische Freundschaft seit Beginn ist Basis für dauerhafte Bindung."
      },
      {
        id: "recip_11",
        question: "Ellos _____ _____ frecuentemente sobre política sin llegar a acuerdo.",
        translation: "Sie streiten häufig über Politik, ohne zu einer Einigung zu kommen.",
        options: ["se pelean", "pelean", "se pelea", "peleaban"],
        correct: "se pelean",
        explanation: "Für SICH STREITEN: 'se pelean' (streiten sich). Gegenseitiger Konflikt. Diese häufigen politischen Debatten ohne Konsens zeigen unterschiedliche Weltanschauungen."
      },
      {
        id: "recip_12",
        question: "¿Cuándo _____ _____ ustedes la última vez en persona realmente?",
        translation: "Wann habt ihr euch das letzte Mal wirklich persönlich gesehen?",
        options: ["se vieron", "vieron", "se ven", "veían"],
        correct: "se vieron",
        explanation: "Für SICH SEHEN in Vergangenheit: 'se vieron' (sahen sich). Diese Frage über letztes persönliches Treffen zeigt, dass lange Zeit vergangen ist."
      },
      {
        id: "recip_13",
        question: "Nosotros _____ _____ mensajes constantemente durante todo el día laboral.",
        translation: "Wir schicken uns den ganzen Arbeitstag ständig Nachrichten.",
        options: ["nos mandamos", "mandamos", "nos manda", "mandábamos"],
        correct: "nos mandamos",
        explanation: "Für SICH NACHRICHTEN SCHICKEN: 'nos mandamos' (schicken uns). Diese konstante Messaging-Kommunikation während Arbeit hält Verbindung trotz räumlicher Trennung."
      },
      {
        id: "recip_14",
        question: "Los dos equipos _____ _____ en el estadio lleno mañana por la tarde.",
        translation: "Die beiden Teams begegnen sich morgen Nachmittag im vollen Stadion.",
        options: ["se enfrentarán", "enfrentarán", "se enfrentan", "enfrentaban"],
        correct: "se enfrentarán",
        explanation: "Für SICH GEGENÜBERSTEHEN (Zukunft): 'se enfrentarán'. Diese sportliche Konfrontation morgen wird spannender Wettkampf vor großem Publikum."
      },
      {
        id: "recip_15",
        question: "Ellas _____ _____ muy bien a pesar de ser muy diferentes.",
        translation: "Sie verstehen sich trotz sehr unterschiedlich zu sein sehr gut.",
        options: ["se comprenden", "comprenden", "se comprende", "comprendían"],
        correct: "se comprenden",
        explanation: "Für SICH VERSTEHEN: 'se comprenden' (verstehen sich). Trotz Unterschiede harmonieren sie. Diese Fähigkeit, sich trotz Verschiedenheit zu verstehen, zeigt emotionale Reife und Akzeptanz."
      }
    ]
  }
};

export default part11Categories;
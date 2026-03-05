/**
 * GERMAN → SPANISH GRAMMAR - PART 8
 * 4 categories, 15 questions each
 */

import { Coffee, Laptop, Globe, Wifi } from "lucide-react";

export const part8Categories = {
  participio_pasado: {
    name: "Partizip Perfekt (Participio)",
    description: "Vergangenheitsformen - regelmäßige und unregelmäßige Formen",
    icon: Coffee,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "part_1",
        question: "He _____ toda la película en el cine anoche.",
        translation: "Ich habe gestern Abend den ganzen Film im Kino gesehen.",
        options: ["visto", "ver", "veo", "veía"],
        correct: "visto",
        explanation: "Das Partizip von 'ver' (sehen) ist UNREGELMÄSSIG: 'visto' (gesehen). Nicht 'verido' wie regulär wäre. Mit 'he' bilden wir Perfekt. Diese unregelmäßigen Partizipien muss man auswendig lernen. Der Kinobesuch gestern ist abgeschlossenes Erlebnis, das mit Perfekt beschrieben wird."
      },
      {
        id: "part_2",
        question: "Ella ha _____ tres idiomas diferentes en su vida hasta ahora.",
        translation: "Sie hat in ihrem Leben bis jetzt drei verschiedene Sprachen gelernt.",
        options: ["aprendido", "aprender", "aprende", "aprendía"],
        correct: "aprendido",
        explanation: "Das Partizip von 'aprender' ist REGELMÄSSIG: 'aprendido' (gelernt). Endung '-ido' für -er/-ir Verben. Diese Sprachkenntnisse sind Lebenserfahrung, die bis zur Gegenwart relevant ist, daher Perfekt mit 'ha aprendido'."
      },
      {
        id: "part_3",
        question: "Nosotros hemos _____ en este restaurante muchas veces ya.",
        translation: "Wir haben in diesem Restaurant schon viele Male gegessen.",
        options: ["comido", "comer", "comemos", "comíamos"],
        correct: "comido",
        explanation: "Reguläres Partizip von 'comer': 'comido' (gegessen). Endung '-ido' für -er Verben. Diese wiederholten Restaurant-Besuche zeigen Zufriedenheit mit Qualität und werden mit Perfekt ausgedrückt, da Erfahrungen bis jetzt zählen."
      },
      {
        id: "part_4",
        question: "¿Ya has _____ la tarea de matemáticas para hoy?",
        translation: "Hast du schon die Mathe-Hausaufgaben für heute gemacht?",
        options: ["hecho", "hacer", "haces", "hacías"],
        correct: "hecho",
        explanation: "Unregelmäßiges Partizip von 'hacer': 'hecho' (gemacht). Eines der wichtigsten Partizipien zum Merken. Die Frage mit 'ya' (schon) nutzt typischerweise Perfekt, um Vollendung bis zum gegenwärtigen Moment zu erfragen."
      },
      {
        id: "part_5",
        question: "El profesor ha _____ las notas del examen esta mañana.",
        translation: "Der Lehrer hat die Prüfungsnoten heute Morgen geschrieben.",
        options: ["escrito", "escribir", "escribe", "escribía"],
        correct: "escrito",
        explanation: "Unregelmäßiges Partizip von 'escribir': 'escrito' (geschrieben). Nicht 'escribido'. Diese Veröffentlichung der Noten heute Morgen ist aktuelles Ereignis, das Perfekt nutzt, weil es für Schüler jetzt relevant ist."
      },
      {
        id: "part_6",
        question: "Yo he _____ español durante cinco años en la escuela.",
        translation: "Ich habe fünf Jahre lang in der Schule Spanisch studiert.",
        options: ["estudiado", "estudiar", "estudio", "estudiaba"],
        correct: "estudiado",
        explanation: "Reguläres Partizip von 'estudiar': 'estudiado' (studiert). Endung '-ado' für -ar Verben. Diese fünfjährige Lernperiode wird mit Perfekt beschrieben, da sie Einfluss auf deine aktuellen Sprachkenntnisse hat."
      },
      {
        id: "part_7",
        question: "Ellos no han _____ a mi pregunta todavía desde ayer.",
        translation: "Sie haben seit gestern noch nicht auf meine Frage geantwortet.",
        options: ["respondido", "responder", "responden", "respondían"],
        correct: "respondido",
        explanation: "Reguläres Partizip 'respondido' (geantwortet) von 'responder'. Mit 'no han' für Verneinung im Perfekt. Diese fehlende Antwort seit gestern zeigt, dass Wartezeit bis jetzt andauert, typischer Gebrauch von Perfekt mit 'todavía no'."
      },
      {
        id: "part_8",
        question: "Mi hermana ha _____ tres tazas de café esta mañana ya.",
        translation: "Meine Schwester hat heute Morgen schon drei Tassen Kaffee getrunken.",
        options: ["bebido", "beber", "bebe", "bebía"],
        correct: "bebido",
        explanation: "Reguläres Partizip von 'beber': 'bebido' (getrunken). Diese beeindruckende Kaffeemenge heute Morgen wird mit Perfekt beschrieben, da 'esta mañana' noch zur Gegenwart gehört - der Tag ist noch nicht vorbei."
      },
      {
        id: "part_9",
        question: "¿Alguna vez has _____ en paracaídas en tu vida?",
        translation: "Bist du jemals in deinem Leben Fallschirm gesprungen?",
        options: ["saltado", "saltar", "saltas", "saltabas"],
        correct: "saltado",
        explanation: "Reguläres Partizip 'saltado' (gesprungen) von 'saltar'. Mit 'alguna vez' (jemals) fragt man nach Lebenserfahrung, immer mit Perfekt. Diese Frage über Extremsport-Erlebnis öffnet Gespräch über Abenteuer und Mut."
      },
      {
        id: "part_10",
        question: "Nosotros hemos _____ la puerta con llave antes de salir.",
        translation: "Wir haben die Tür vor dem Gehen abgeschlossen.",
        options: ["cerrado", "cerrar", "cerramos", "cerrábamos"],
        correct: "cerrado",
        explanation: "Reguläres Partizip 'cerrado' (geschlossen) von 'cerrar'. Diese Sicherheitsmaßnahme vor Verlassen des Hauses ist abgeschlossene Handlung, die Auswirkung auf Gegenwart hat - Haus ist jetzt sicher."
      },
      {
        id: "part_11",
        question: "El niño ha _____ su juguete favorito en el parque ayer.",
        translation: "Das Kind hat gestern sein Lieblingsspielzeug im Park verloren.",
        options: ["perdido", "perder", "pierde", "perdía"],
        correct: "perdido",
        explanation: "Reguläres Partizip 'perdido' (verloren) von 'perder'. Obwohl 'ayer' (gestern) im Satz steht, nutzt Spanisch oft Perfekt, wenn Resultat noch relevant ist. Das verlorene Spielzeug ist immer noch weg."
      },
      {
        id: "part_12",
        question: "Yo he _____ este libro interesante tres veces en total.",
        translation: "Ich habe dieses interessante Buch insgesamt dreimal gelesen.",
        options: ["leído", "leer", "leo", "leía"],
        correct: "leído",
        explanation: "Unregelmäßiges Partizip 'leído' (gelesen) von 'leer'. Hat Akzent auf 'í'. Diese mehrfachen Lektüren eines Lieblingsbuchs zeigen, dass manche Bücher so gut sind, dass man sie wiederholt liest."
      },
      {
        id: "part_13",
        question: "Ellas han _____ toda la tarde bailando en la fiesta felices.",
        translation: "Sie haben den ganzen Nachmittag glücklich auf der Party getanzt.",
        options: ["pasado", "pasar", "pasan", "pasaban"],
        correct: "pasado",
        explanation: "Reguläres Partizip 'pasado' (verbracht) von 'pasar'. Die Konstruktion 'han pasado...bailando' (haben verbracht mit Tanzen) ist typisch für Zeitangaben mit Aktivität. Dieser fröhliche Partynachmittag ist Erlebnis, das gerade endete."
      },
      {
        id: "part_14",
        question: "¿Has _____ las instrucciones antes de empezar el ejercicio?",
        translation: "Hast du die Anweisungen gelesen, bevor du mit der Übung begonnen hast?",
        options: ["leído", "leer", "lees", "leías"],
        correct: "leído",
        explanation: "Unregelmäßiges Partizip 'leído' mit Akzent. Diese Frage überprüft, ob wichtiger Schritt (Anleitung lesen) vor Start gemacht wurde. Perfekt verbindet vergangene Handlung mit gegenwärtigem Wissen."
      },
      {
        id: "part_15",
        question: "Mi padre ha _____ ingeniero durante treinta años largos.",
        translation: "Mein Vater ist dreißig lange Jahre Ingenieur gewesen.",
        options: ["sido", "ser", "es", "era"],
        correct: "sido",
        explanation: "Unregelmäßiges Partizip von 'ser': 'sido' (gewesen). Für lange Berufslaufbahn nutzt Spanisch Perfekt, wenn bis Gegenwart relevant. Diese dreißigjährige Karriere ist beeindruckende Leistung und Lebenswerk."
      }
    ]
  },

  preposiciones_tiempo: {
    name: "Zeitpräpositionen",
    description: "En, desde, hasta, durante - zeitliche Beziehungen ausdrücken",
    icon: Laptop,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_tiempo_1",
        question: "Voy a viajar a España _____ julio del próximo año.",
        translation: "Ich werde im Juli nächsten Jahres nach Spanien reisen.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für MONATE nutzen wir 'en': 'en julio' (im Juli). Auch Jahre, Jahreszeiten: 'en 2025, en verano'. Deutsche 'im' wird zu 'en'. Diese Sommerreise nach Spanien ist wahrscheinlich geplant für beste Wetterbedingungen und Urlaubszeit."
      },
      {
        id: "prep_tiempo_2",
        question: "Trabajo aquí _____ hace cinco años sin interrupción alguna.",
        translation: "Ich arbeite hier seit fünf Jahren ohne jegliche Unterbrechung.",
        options: ["desde", "en", "por", "hasta"],
        correct: "desde",
        explanation: "Für SEIT (Startpunkt) nutzen wir 'desde': 'desde hace cinco años'. Markiert Beginn einer andauernden Situation. Diese fünfjährige ununterbrochene Beschäftigung zeigt Stabilität und Loyalität zum Arbeitgeber."
      },
      {
        id: "prep_tiempo_3",
        question: "La tienda está abierta _____ las 9 hasta las 8 diariamente.",
        translation: "Das Geschäft ist täglich von 9 bis 8 Uhr geöffnet.",
        options: ["desde", "en", "por", "hasta"],
        correct: "desde",
        explanation: "Für VON (Anfangspunkt) nutzen wir 'desde': 'desde las 9'. Kombiniert mit 'hasta' (bis) für Zeitspanne. Diese langen Öffnungszeiten von 9 bis 20 Uhr geben Kunden viel Flexibilität zum Einkaufen."
      },
      {
        id: "prep_tiempo_4",
        question: "Voy a quedarme _____ el domingo aquí en la ciudad.",
        translation: "Ich werde bis Sonntag hier in der Stadt bleiben.",
        options: ["hasta", "desde", "en", "por"],
        correct: "hasta",
        explanation: "Für BIS (Endpunkt) nutzen wir 'hasta': 'hasta el domingo' (bis Sonntag). Markiert Ende einer Zeitspanne. Dieser Aufenthalt bis Sonntag gibt klaren Zeitrahmen für Besuch oder Urlaub in Stadt."
      },
      {
        id: "prep_tiempo_5",
        question: "Estudié _____ tres horas seguidas sin parar para nada.",
        translation: "Ich lernte drei Stunden am Stück ohne für irgendetwas anzuhalten.",
        options: ["durante", "en", "por", "desde"],
        correct: "durante",
        explanation: "Für WÄHREND/FÜR (Zeitdauer) nutzen wir 'durante': 'durante tres horas'. Auch 'por' möglich. 'Durante' betont Dauer der Aktivität. Diese intensive dreistündige Lerneinheit ohne Pause zeigt ernsthafte Prüfungsvorbereitung."
      },
      {
        id: "prep_tiempo_6",
        question: "Siempre desayuno _____ las 7 de la mañana todos los días.",
        translation: "Ich frühstücke immer jeden Tag um 7 Uhr morgens.",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "Für UHRZEIT nutzen wir 'a': 'a las 7' (um 7 Uhr). Deutsche 'um' wird zu 'a'. Diese morgendliche Routine um exakt 7 Uhr strukturiert Tagesbeginn und sichert regelmäßige Mahlzeit vor Arbeit."
      },
      {
        id: "prep_tiempo_7",
        question: "Nací _____ 1995 en una ciudad pequeña del norte.",
        translation: "Ich wurde 1995 in einer kleinen Stadt im Norden geboren.",
        options: ["en", "a", "de", "por"],
        correct: "en",
        explanation: "Für JAHRE nutzen wir 'en': 'en 1995' (im Jahr 1995). Auch für Jahrhunderte. Diese Geburtsangabe von 1995 platziert Person zeitlich und zeigt, dass sie Ende der Neunziger geboren wurde."
      },
      {
        id: "prep_tiempo_8",
        question: "Voy a estar ocupado _____ toda la semana próxima entera.",
        translation: "Ich werde die ganze nächste Woche beschäftigt sein.",
        options: ["durante", "en", "por", "desde"],
        correct: "durante",
        explanation: "Für WÄHREND ganzer Zeitraum: 'durante toda la semana' (während der ganzen Woche). Betont durchgehende Beschäftigung. Diese intensive Arbeitswoche erfordert mentale Vorbereitung und vielleicht Verschiebung sozialer Verpflichtungen."
      },
      {
        id: "prep_tiempo_9",
        question: "La reunión es _____ la tarde del próximo martes.",
        translation: "Das Treffen ist am Nachmittag nächsten Dienstag.",
        options: ["por", "en", "a", "de"],
        correct: "por",
        explanation: "Für TAGESZEITEN nutzen wir 'por': 'por la tarde, por la mañana' (am Nachmittag, am Morgen). Diese ungefähre Zeitangabe für Meeting lässt noch Raum für genaue Uhrzeit-Bestimmung später."
      },
      {
        id: "prep_tiempo_10",
        question: "Vivimos en esta casa _____ 2010 sin mudarnos nunca.",
        translation: "Wir leben seit 2010 ohne jemals umzuziehen in diesem Haus.",
        options: ["desde", "en", "por", "hasta"],
        correct: "desde",
        explanation: "Für SEIT mit Jahreszahl: 'desde 2010' (seit 2010). Markiert Startpunkt bis Gegenwart. Diese lange Residenz von über einem Jahrzehnt zeigt Sesshaftigkeit und wahrscheinlich starke Bindung an Nachbarschaft."
      },
      {
        id: "prep_tiempo_11",
        question: "Voy a estudiar _____ dos horas más antes del examen mañana.",
        translation: "Ich werde vor der Prüfung morgen noch zwei Stunden mehr lernen.",
        options: ["por", "durante", "en", "desde"],
        correct: "por",
        explanation: "Für geplante ZEITDAUER nutzen wir 'por' oder 'durante': 'por dos horas'. 'Por' ist häufiger bei zukünftiger Planung. Diese zusätzliche Lernzeit zeigt Entschlossenheit, sich optimal auf Prüfung vorzubereiten."
      },
      {
        id: "prep_tiempo_12",
        question: "El concierto empieza _____ las ocho y media de la noche.",
        translation: "Das Konzert beginnt um halb neun Uhr abends.",
        options: ["a", "en", "por", "de"],
        correct: "a",
        explanation: "Für genaue UHRZEIT: 'a las ocho y media' (um halb neun). Im Spanischen 'acht und halb', nicht 'halb neun'. Diese präzise Konzertzeit erfordert pünktliches Erscheinen, um Anfang nicht zu verpassen."
      },
      {
        id: "prep_tiempo_13",
        question: "Estaré allí _____ las 3 de la tarde puntualmente sin falta.",
        translation: "Ich werde pünktlich ohne Ausnahme um 3 Uhr nachmittags dort sein.",
        options: ["a", "en", "por", "desde"],
        correct: "a",
        explanation: "Uhrzeit mit 'a': 'a las 3' (um 3 Uhr). Diese Zusage pünktlicher Ankunft zu genauer Zeit zeigt Zuverlässigkeit und Respekt für Zeit anderer."
      },
      {
        id: "prep_tiempo_14",
        question: "Hemos vivido juntos _____ diez años felices de matrimonio.",
        translation: "Wir haben zehn glückliche Ehejahre zusammen gelebt.",
        options: ["durante", "en", "por", "desde"],
        correct: "durante",
        explanation: "Für abgeschlossene ZEITSPANNE in Vergangenheit: 'durante diez años' (während zehn Jahren). Diese Dekade gemeinsamen Lebens ist bedeutender Meilenstein in Beziehung, der Stabilität und Engagement zeigt."
      },
      {
        id: "prep_tiempo_15",
        question: "Trabajo de lunes _____ viernes cada semana sin descanso.",
        translation: "Ich arbeite jede Woche ohne Pause von Montag bis Freitag.",
        options: ["a", "en", "por", "hasta"],
        correct: "a",
        explanation: "Für VON...BIS bei Tagen: 'de lunes a viernes' (von Montag bis Freitag). Deutsche 'bis' wird zu 'a'. Diese Standardarbeitswoche lässt Wochenende frei für Erholung und persönliche Zeit."
      }
    ]
  },

  pronombres_demostrativos: {
    name: "Demonstrativpronomen",
    description: "Este/ese/aquel - dies/das/jenes nach Nähe unterscheiden",
    icon: Globe,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    questions: [
      {
        id: "demo_1",
        question: "_____ libro que tengo en la mano es muy interesante.",
        translation: "Dieses Buch, das ich in der Hand habe, ist sehr interessant.",
        options: ["Este", "Ese", "Aquel", "Estos"],
        correct: "Este",
        explanation: "Für NAHE bei mir nutzen wir 'este' (dieser hier): 'este libro'. Im Deutschen 'dieser', Spanisch unterscheidet drei Distanzen. Das Buch in meiner Hand ist mir am nächsten, daher 'este'. Diese Nähe-Distinktion ist wichtig im Spanischen."
      },
      {
        id: "demo_2",
        question: "¿De quién es _____ chaqueta que está en tu silla ahí?",
        translation: "Wem gehört diese Jacke, die dort auf deinem Stuhl ist?",
        options: ["esa", "esta", "aquella", "esas"],
        correct: "esa",
        explanation: "Für MITTLERE Distanz (bei dir, nicht bei mir) nutzen wir 'ese/esa': 'esa chaqueta'. Es ist nah bei dir, aber nicht bei mir. Diese Jacke auf deinem Stuhl ist für mich mittlere Distanz - ich kann sie sehen, aber nicht berühren."
      },
      {
        id: "demo_3",
        question: "_____ montañas que se ven lejos son los Pirineos hermosos.",
        translation: "Jene Berge, die man in der Ferne sieht, sind die schönen Pyrenäen.",
        options: ["Aquellas", "Esas", "Estas", "Aquellos"],
        correct: "Aquellas",
        explanation: "Für FERNE Distanz nutzen wir 'aquel/aquella': 'aquellas montañas' (jene Berge dort). Weit weg von beiden Gesprächspartnern. Diese fernen Pyrenäen am Horizont sind zu weit, um Details zu sehen, daher fernste Form."
      },
      {
        id: "demo_4",
        question: "No me gusta _____ restaurante donde comimos la semana pasada.",
        translation: "Mir gefällt jenes Restaurant nicht, wo wir letzte Woche gegessen haben.",
        options: ["aquel", "ese", "este", "aquellos"],
        correct: "aquel",
        explanation: "Für zeitlich oder räumlich ENTFERNTES nutzen wir 'aquel': 'aquel restaurante'. Letzte Woche ist zeitlich fern. Diese negative Bewertung bezieht sich auf Erlebnis, das sowohl zeitlich als auch vielleicht örtlich entfernt ist."
      },
      {
        id: "demo_5",
        question: "_____ zapatos que llevas puestos son muy bonitos y elegantes.",
        translation: "Diese Schuhe, die du anhast, sind sehr schön und elegant.",
        options: ["Esos", "Estos", "Aquellos", "Esas"],
        correct: "Esos",
        explanation: "Für Schuhe AN DIR (mittlere Distanz für mich): 'esos zapatos'. Sie sind nah bei dir, aber nicht bei mir. Dieses Kompliment über deine Schuhe zeigt Aufmerksamkeit für Stil und Mode."
      },
      {
        id: "demo_6",
        question: "¿Qué es _____ que tienes en tu mano derecha ahora?",
        translation: "Was ist das, was du jetzt in deiner rechten Hand hast?",
        options: ["eso", "esto", "aquello", "este"],
        correct: "eso",
        explanation: "Für NEUTRALE Form (unbekanntes Objekt) bei mittlerer Distanz: 'eso' (das da). Wenn man nicht weiß, was es ist, nutzt man neutrale Form. Diese neugierige Frage versucht zu identifizieren, was du hältst."
      },
      {
        id: "demo_7",
        question: "_____ días de juventud fueron los mejores de mi vida entera.",
        translation: "Jene Tage der Jugend waren die besten meines ganzen Lebens.",
        options: ["Aquellos", "Esos", "Estos", "Aquel"],
        correct: "Aquellos",
        explanation: "Für zeitlich WEIT ENTFERNTE Vergangenheit: 'aquellos días' (jene Tage). Jugend ist weit zurück. Diese nostalgische Erinnerung nutzt fernste Form, um große zeitliche Distanz zu betonen."
      },
      {
        id: "demo_8",
        question: "_____ casa al final de la calle es de mis abuelos queridos.",
        translation: "Jenes Haus am Ende der Straße gehört meinen lieben Großeltern.",
        options: ["Aquella", "Esa", "Esta", "Aquellas"],
        correct: "Aquella",
        explanation: "Für räumlich FERNES Haus: 'aquella casa'. Am Ende der Straße ist weit von hier. Diese Großelternhaus-Referenz mit fernster Form unterstreicht physische Distanz entlang der Straße."
      },
      {
        id: "demo_9",
        question: "¿Te gusta _____ camisa que llevo puesta hoy mismo?",
        translation: "Gefällt dir dieses Hemd, das ich heute gerade anhabe?",
        options: ["esta", "esa", "aquella", "este"],
        correct: "esta",
        explanation: "Für Kleidung AN MIR nutze ich 'este/esta': 'esta camisa' (dieses Hemd hier). Es ist mir am nächsten möglich. Diese Frage nach Meinung über meine Kleidung sucht Bestätigung der Stilwahl."
      },
      {
        id: "demo_10",
        question: "_____ personas que están esperando allá lejos son turistas extranjeros.",
        translation: "Jene Leute, die dort weit weg warten, sind ausländische Touristen.",
        options: ["Aquellas", "Esas", "Estas", "Aquellos"],
        correct: "Aquellas",
        explanation: "Für FERNE Personen: 'aquellas personas' (jene Leute dort). 'Allá lejos' (dort weit weg) bestätigt große Distanz. Diese Touristengruppe in Ferne ist für uns nur aus Entfernung erkennbar."
      },
      {
        id: "demo_11",
        question: "Prefiero _____ opción que mencionaste tú hace un momento antes.",
        translation: "Ich bevorzuge jene Option, die du vor einem Moment erwähnt hast.",
        options: ["esa", "esta", "aquella", "este"],
        correct: "esa",
        explanation: "Für Option aus DEINEM Mund (mittlere Distanz): 'esa opción'. Sie kam von dir, nicht von mir. Diese Präferenz für deine vorgeschlagene Option zeigt Zustimmung zu deinem Vorschlag."
      },
      {
        id: "demo_12",
        question: "No entiendo nada de _____ que está pasando ahora aquí.",
        translation: "Ich verstehe nichts von dem, was hier gerade passiert.",
        options: ["esto", "eso", "aquello", "este"],
        correct: "esto",
        explanation: "Für NEUTRALE Form (Situation) nah: 'esto' (dies hier). Wenn man auf gegenwärtige Situation zeigt, die man erlebt. Diese Verwirrung über aktuelle Ereignisse drückt Orientierungslosigkeit in unmittelbarer Situation aus."
      },
      {
        id: "demo_13",
        question: "_____ edificio donde trabajas es muy moderno y alto realmente.",
        translation: "Jenes Gebäude, wo du arbeitest, ist wirklich sehr modern und hoch.",
        options: ["Ese", "Este", "Aquel", "Esos"],
        correct: "Ese",
        explanation: "Für Gebäude wo DU bist: 'ese edificio' (dieses Gebäude da). Mittlere Distanz - ich bin nicht dort, aber du schon. Dieses moderne Hochhaus als Arbeitsplatz ist architektonisch beeindruckend."
      },
      {
        id: "demo_14",
        question: "_____ años de universidad fueron muy difíciles para mí personalmente.",
        translation: "Jene Universitätsjahre waren persönlich sehr schwer für mich.",
        options: ["Aquellos", "Esos", "Estos", "Aquel"],
        correct: "Aquellos",
        explanation: "Für zeitlich ENTFERNTE Periode: 'aquellos años' (jene Jahre). Universitätszeit liegt zurück. Diese Reflexion über schwierige Studienzeit nutzt fernste Form für zeitliche Distanz, die emotionalen Abstand schafft."
      },
      {
        id: "demo_15",
        question: "Dame _____ libro que tienes en tus manos ahora mismo, por favor.",
        translation: "Gib mir bitte das Buch, das du gerade in deinen Händen hast.",
        options: ["ese", "este", "aquel", "esos"],
        correct: "ese",
        explanation: "Für Buch IN DEINEN Händen: 'ese libro' (dieses Buch da). Mittlere Distanz - nah bei dir. Diese Bitte um das Buch, das du hältst, ist direkte Handlungsaufforderung in Dialog-Situation."
      }
    ]
  },

  verbos_como_gustar: {
    name: "Verben wie 'gustar'",
    description: "Encantar, interesar, doler - rückwärts konstruierte Verben",
    icon: Wifi,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "gustar_like_1",
        question: "A mí me _____ viajar a países tropicales cálidos siempre.",
        translation: "Mir gefällt es immer, in warme tropische Länder zu reisen.",
        options: ["encanta", "encantan", "gusta", "gustan"],
        correct: "encanta",
        explanation: "Verb 'encantar' (begeistern, sehr gefallen) funktioniert wie 'gustar': 'me encanta viajar' (mir begeistert reisen). Infinitiv ist Singular, daher 'encanta'. Stärker als 'gustar' - drückt Leidenschaft fürs Reisen aus."
      },
      {
        id: "gustar_like_2",
        question: "A ella le _____ las películas de terror - las ve siempre.",
        translation: "Ihr gefallen Horrorfilme sehr - sie schaut sie immer.",
        options: ["encantan", "encanta", "gustan", "gusta"],
        correct: "encantan",
        explanation: "Mit PLURAL 'películas': 'le encantan las películas' (ihr begeistern die Filme). Verb richtet sich nach dem, was begeistert. Diese Vorliebe für Gruselfilme ist starke Präferenz, ausgedrückt durch 'encantar'."
      },
      {
        id: "gustar_like_3",
        question: "A nosotros nos _____ mucho la historia europea antigua completa.",
        translation: "Uns interessiert die gesamte alte europäische Geschichte sehr.",
        options: ["interesa", "interesan", "encanta", "encantan"],
        correct: "interesa",
        explanation: "Verb 'interesar' (interessieren) wie 'gustar': 'nos interesa la historia'. Historia ist Singular. Deutsche 'uns interessiert' passt zur Struktur. Dieses akademische Interesse an europäischer Geschichte zeigt intellektuelle Neugier."
      },
      {
        id: "gustar_like_4",
        question: "¿A ti te _____ los videojuegos de estrategia complejos?",
        translation: "Interessieren dich komplexe Strategiespiele?",
        options: ["interesan", "interesa", "encantan", "encanta"],
        correct: "interesan",
        explanation: "Mit Plural 'videojuegos': 'te interesan' (dich interessieren). Diese Frage über Gaming-Präferenz kann gemeinsame Hobbys aufdecken oder Empfehlungen für neue Spiele öffnen."
      },
      {
        id: "gustar_like_5",
        question: "A mi padre le _____ la cabeza después de trabajar tanto tiempo.",
        translation: "Meinem Vater tut der Kopf weh nach so langem Arbeiten.",
        options: ["duele", "duelen", "gusta", "gustan"],
        correct: "duele",
        explanation: "Verb 'doler' (wehtun) wie 'gustar': 'le duele la cabeza' (ihm tut weh der Kopf). Cabeza ist Singular. Diese Kopfschmerzen nach Überarbeitung sind Warnsignal für nötige Pause und Erholung."
      },
      {
        id: "gustar_like_6",
        question: "A los estudiantes les _____ las matemáticas avanzadas difíciles.",
        translation: "Den Schülern gefallen die schweren fortgeschrittenen Mathematik nicht.",
        options: ["disgustan", "disgusta", "gustan", "gusta"],
        correct: "disgustan",
        explanation: "Verb 'disgustar' (missfallen) ist Gegenteil von 'gustar': 'les disgustan' (ihnen missfallen). Mit Plural 'matemáticas'. Diese Abneigung gegen schwere Mathe ist verständliche Reaktion auf herausforderndes Fach."
      },
      {
        id: "gustar_like_7",
        question: "A mí me _____ los pies después de caminar todo el día.",
        translation: "Mir tun die Füße weh nach dem Gehen den ganzen Tag.",
        options: ["duelen", "duele", "encantan", "encanta"],
        correct: "duelen",
        explanation: "Mit Plural 'pies' (Füße): 'me duelen los pies' (mir tun weh die Füße). Diese schmerzenden Füße nach langem Gehen sind physische Konsequenz intensiver Aktivität."
      },
      {
        id: "gustar_like_8",
        question: "A ella le _____ cocinar platos internacionales exóticos diferentes.",
        translation: "Ihr macht es Spaß, verschiedene exotische internationale Gerichte zu kochen.",
        options: ["divierte", "divierten", "encanta", "encantan"],
        correct: "divierte",
        explanation: "Verb 'divertir' (Spaß machen) wie 'gustar': 'le divierte cocinar'. Infinitiv ist Singular. Stärker als nur 'gefallen' - es unterhält sie. Diese Leidenschaft fürs Kochen exotischer Küche zeigt kulinarische Abenteuerlust."
      },
      {
        id: "gustar_like_9",
        question: "A nosotros nos _____ las injusticias sociales en el mundo actual.",
        translation: "Uns empören die sozialen Ungerechtigkeiten in der aktuellen Welt.",
        options: ["indignan", "indigna", "gustan", "gusta"],
        correct: "indignan",
        explanation: "Verb 'indignar' (empören) wie 'gustar': 'nos indignan las injusticias' (uns empören die Ungerechtigkeiten). Plural Subjekt. Dieser moralische Ärger über Ungerechtigkeit zeigt soziales Bewusstsein."
      },
      {
        id: "gustar_like_10",
        question: "¿A ustedes les _____ la música clásica de Mozart principalmente?",
        translation: "Gefällt euch hauptsächlich Mozarts klassische Musik?",
        options: ["gusta", "gustan", "encanta", "encantan"],
        correct: "gusta",
        explanation: "Für höflich 'euch gefällt' mit Singular: 'les gusta la música'. Música ist Singular. Diese Frage über musikalischen Geschmack testet Affinität für klassische Komponisten."
      },
      {
        id: "gustar_like_11",
        question: "A mi hermano le _____ levantarse temprano para nada nunca.",
        translation: "Meinem Bruder gefällt es nie, früh für irgendetwas aufzustehen.",
        options: ["disgusta", "disgustan", "gusta", "gustan"],
        correct: "disgusta",
        explanation: "Negatives 'disgustar': 'le disgusta levantarse' (ihm missfällt aufstehen). Infinitiv ist Singular. Diese Abneigung gegen frühes Aufstehen ist typisch für Nachtmenschen, die Morgenstunden hassen."
      },
      {
        id: "gustar_like_12",
        question: "A todos nos _____ la nueva política de la empresa mucho.",
        translation: "Uns allen interessiert die neue Firmenpolitik sehr.",
        options: ["interesa", "interesan", "gusta", "gustan"],
        correct: "interesa",
        explanation: "Mit 'interesar' und Singular 'política': 'nos interesa la política'. 'A todos' betont Gruppe. Diese kollektive Neugier auf neue Unternehmensrichtlinien zeigt, dass Änderungen alle Mitarbeiter betreffen."
      },
      {
        id: "gustar_like_13",
        question: "A mí me _____ mucho la espalda por mala postura constante.",
        translation: "Mir tut der Rücken wegen konstanter schlechter Haltung sehr weh.",
        options: ["duele", "duelen", "gusta", "gustan"],
        correct: "duele",
        explanation: "Mit 'doler' und Singular 'espalda': 'me duele la espalda' (mir tut weh der Rücken). Diese chronischen Rückenschmerzen durch schlechte Haltung sind moderne Büroarbeiter-Plage, die Korrektur der Körperhaltung erfordert."
      },
      {
        id: "gustar_like_14",
        question: "A ellos les _____ las matemáticas complejas y difíciles siempre.",
        translation: "Ihnen gefallen komplexe und schwierige Mathematik immer.",
        options: ["encantan", "encanta", "gustan", "gusta"],
        correct: "encantan",
        explanation: "Starkes 'encantar' mit Plural: 'les encantan las matemáticas'. Diese Begeisterung für schwere Mathe zeigt analytische Persönlichkeiten, die in Zahlen und Logik Schönheit finden."
      },
      {
        id: "gustar_like_15",
        question: "¿A quién le _____ este teléfono móvil que encontré ayer?",
        translation: "Wem gehört dieses Handy, das ich gestern gefunden habe?",
        options: ["pertenece", "pertenecen", "gusta", "gustan"],
        correct: "pertenece",
        explanation: "Verb 'pertenecer' (gehören) wie 'gustar': 'le pertenece' (ihm/ihr gehört). Teléfono ist Singular. Diese Frage versucht, gefundenes Handy seinem rechtmäßigen Besitzer zurückzugeben."
      }
    ]
  },

  diminutivos_aumentativos: {
    name: "Verkleinerungs- und Vergrößerungsformen",
    description: "-ito/-ita, -ísimo - Zuneigung und Intensität ausdrücken",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "dim_aum_1",
        question: "Quiero un caf_____ pequeño, por favor - no muy grande.",
        translation: "Ich möchte einen kleinen Kaffee, bitte - nicht sehr groß.",
        options: ["ecito", "é", "ecísimo", "ito"],
        correct: "ecito",
        explanation: "Diminutiv '-ito/-ita' macht Dinge KLEIN oder NIEDLICH: 'cafecito' (kleiner Kaffee). Auch Zuneigung. Bei 'café' wird zu 'cafecito'. Diese Verkleinerungsform ist in Lateinamerika sehr gebräuchlich und macht Sprache herzlicher."
      },
      {
        id: "dim_aum_2",
        question: "Mi abuelita hace las galletas más ricas del mundo entero.",
        translation: "Meine Omi macht die leckersten Kekse der ganzen Welt.",
        options: ["abuelita", "abuela", "abuelota", "abuelísima"],
        correct: "abuelita",
        explanation: "Diminutiv 'abuelita' (Omi, Großmütterchen) von 'abuela' zeigt ZUNEIGUNG: kleiner und liebevoller. Diese herzliche Form drückt emotionale Nähe aus, nicht nur Größe. Kekse der geliebten Oma haben besonderen Platz in Kindheitserinnerungen."
      },
      {
        id: "dim_aum_3",
        question: "Estoy cans_____ después de trabajar doce horas seguidas hoy.",
        translation: "Ich bin nach zwölf Stunden Arbeit heute am Stück extrem müde.",
        options: ["adísimo", "adito", "ado", "ote"],
        correct: "adísimo",
        explanation: "Superlativ '-ísimo/-ísima' bedeutet SEHR/EXTREM: 'cansadísimo' (sehr sehr müde). Intensiviert Adjektive maximal. Diese extreme Erschöpfung nach zwölfstündigem Arbeitstag ist verständlich und wird durch Superlativ-Endung dramatisch verstärkt."
      },
      {
        id: "dim_aum_4",
        question: "Dame un moment_____, por favor - ya casi termino esto.",
        translation: "Gib mir bitte einen kleinen Moment - ich bin fast fertig damit.",
        options: ["ito", "azo", "ísimo", "ote"],
        correct: "ito",
        explanation: "Diminutiv 'momentito' (Momentchen) von 'momento': bittet um KURZE Zeit. Macht Bitte höflicher und niedlicher. Diese Bitte um kurze Geduld ist höflicher formuliert durch Verkleinerungsform."
      },
      {
        id: "dim_aum_5",
        question: "Esa casa es grand_____ - tiene diez habitaciones enormes al menos.",
        translation: "Dieses Haus ist riesig - es hat mindestens zehn enorme Zimmer.",
        options: ["ísima", "ita", "ota", "azo"],
        correct: "ísima",
        explanation: "Superlativ 'grandísima' (riesig) von 'grande': extrem groß. Die '-ísimo' Endung verstärkt maximal. Dieses riesige Haus mit zehn Zimmern ist außergewöhnlich großzügig dimensioniert."
      },
      {
        id: "dim_aum_6",
        question: "Mi hij_____ tiene solo tres años - es muy pequeño todavía.",
        translation: "Mein Söhnchen ist nur drei Jahre alt - es ist noch sehr klein.",
        options: ["ito", "azo", "ísimo", "ote"],
        correct: "ito",
        explanation: "Diminutiv 'hijito' (Söhnchen) von 'hijo': zeigt Zärtlichkeit. Bei Kindern immer Diminutiv für Zuneigung. Diese liebevolle Referenz auf kleines Kind drückt elterliche Fürsorge aus."
      },
      {
        id: "dim_aum_7",
        question: "Hace un frío terribl_____ afuera - no quiero salir para nada.",
        translation: "Es ist draußen furchtbar kalt - ich will überhaupt nicht rausgehen.",
        options: ["ísimo", "ito", "azo", "ote"],
        correct: "ísimo",
        explanation: "Superlativ 'friísimo' (extrem kalt) verstärkt 'frío' maximal. Diese extreme Kälte rechtfertigt Wunsch, drinnen zu bleiben und warme Umgebung nicht zu verlassen."
      },
      {
        id: "dim_aum_8",
        question: "Dame un bes_____, mi amor - te extrañé mucho hoy.",
        translation: "Gib mir ein Küsschen, mein Schatz - ich habe dich heute sehr vermisst.",
        options: ["ito", "azo", "ísimo", "ote"],
        correct: "ito",
        explanation: "Diminutiv 'besito' (Küsschen) von 'beso': zärtlich und niedlich. In romantischen Kontexten häufig. Diese liebevolle Bitte um Zuneigung nach Trennung drückt Sehnsucht und Wiedersehensfreude aus."
      },
      {
        id: "dim_aum_9",
        question: "Es un perr_____ enorme - pesa como cincuenta kilos por lo menos.",
        translation: "Es ist ein riesiger Hund - er wiegt mindestens ungefähr fünfzig Kilo.",
        options: ["azo", "ito", "ísimo", "ote"],
        correct: "azo",
        explanation: "Augmentativ '-azo/-aza' macht Dinge RIESIG: 'perrazo' (Riesenhund). Für sehr große Exemplare. Dieser fünfzig Kilo schwere Hund ist außergewöhnlich groß, was durch Augmentativ betont wird."
      },
      {
        id: "gustar_like_10",
        question: "La comida está ric_____ - eres excelente cocinero de verdad.",
        translation: "Das Essen ist extrem lecker - du bist wirklich ein ausgezeichneter Koch.",
        options: ["ísima", "ita", "ota", "aza"],
        correct: "ísima",
        explanation: "Superlativ 'riquísima' (extrem lecker) von 'rica': maximales Lob. Dieses höchste kulinarische Kompliment zeigt echte Begeisterung über Kochkunst und Geschmack des Gerichts."
      },
      {
        id: "dim_aum_11",
        question: "Vivo en un apartament_____ muy acogedor en el centro de la ciudad.",
        translation: "Ich wohne in einem sehr gemütlichen kleinen Apartment im Stadtzentrum.",
        options: ["ito", "azo", "ísimo", "ote"],
        correct: "ito",
        explanation: "Diminutiv 'apartamentito' (kleines Apartment): kann klein oder niedlich bedeuten. Diese kompakte Wohnung in zentraler Lage opfert Größe für perfekte Lage und Charme."
      },
      {
        id: "dim_aum_12",
        question: "El examen estuvo fácil_____ - todos sacamos buenas notas finales.",
        translation: "Die Prüfung war extrem leicht - wir alle bekamen gute Endnoten.",
        options: ["ísimo", "ito", "azo", "ote"],
        correct: "ísimo",
        explanation: "Superlativ 'facilísimo' (sehr sehr leicht) von 'fácil'. Diese unerwartet einfache Prüfung führte zu kollektivem Erfolg, was selten bei schweren Kursen vorkommt."
      },
      {
        id: "dim_aum_13",
        question: "Dame un poc_____ de azúcar para mi café, por favor.",
        translation: "Gib mir bitte ein kleines bisschen Zucker für meinen Kaffee.",
        options: ["ito", "azo", "ísimo", "ote"],
        correct: "ito",
        explanation: "Diminutiv 'poquito' (kleines bisschen) von 'poco': sehr kleine Menge. Diese minimale Zuckermenge zeigt Präferenz für weniger süßen Kaffee oder gesundheitsbewusstes Verhalten."
      },
      {
        id: "dim_aum_14",
        question: "La película fue largu_____ - duró casi cuatro horas completas.",
        translation: "Der Film war extrem lang - er dauerte fast volle vier Stunden.",
        options: ["ísima", "ita", "ota", "aza"],
        correct: "ísima",
        explanation: "Superlativ 'larguísima' (sehr sehr lang) von 'larga'. Diese vierstündige Filmlänge ist außergewöhnlich und testet Geduld und Aufmerksamkeit der Zuschauer."
      },
      {
        id: "dim_aum_15",
        question: "Tengo un gatit_____ blanco adorable que me encanta mucho.",
        translation: "Ich habe ein entzückendes weißes Kätzchen, das ich sehr liebe.",
        options: ["o", "azo", "ísimo", "ote"],
        correct: "o",
        explanation: "Diminutiv 'gatito' (Kätzchen) von 'gato': klein und niedlich. Bei Tieren drückt Diminutiv oft Zuneigung aus, nicht nur Größe. Dieses kleine weiße Kätzchen ist offensichtlich geliebtes Haustier, das Freude bringt."
      }
    ]
  }
};

export default part8Categories;
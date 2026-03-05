/**
 * GERMAN → SPANISH GRAMMAR - PART 12
 * 4 categories, 15 questions each
 */

import { Clock, Shield, Bookmark, Repeat } from "lucide-react";

export const part12Categories = {
  pluscuamperfecto: {
    name: "Pluscuamperfecto (Vorvergangenheit)",
    description: "Hatte gemacht - Handlungen vor anderen Vergangenheitshandlungen",
    icon: Clock,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "plusc_1",
        question: "Cuando llegué a casa, mis padres ya _____ _____.",
        translation: "Als ich nach Hause kam, waren meine Eltern schon gegangen.",
        options: ["se habían ido", "se fueron", "se van", "se irán"],
        correct: "se habían ido",
        explanation: "Für Handlung VOR anderer Vergangenheitshandlung nutzen wir Pluscuamperfecto: 'habían ido' (waren gegangen). Gebildet mit Imperfecto von 'haber' + Partizip. Sie gingen BEVOR ich ankam - das ist die Vorvergangenheit. Diese Zeitform zeigt klare zeitliche Abfolge zweier vergangener Ereignisse."
      },
      {
        id: "plusc_2",
        question: "Ella no _____ _____ nunca antes sushi en su vida entera.",
        translation: "Sie hatte in ihrem ganzen Leben noch nie zuvor Sushi gegessen.",
        options: ["había comido", "comió", "come", "comerá"],
        correct: "había comido",
        explanation: "Mit 'nunca antes' (nie zuvor) bis zu einem Punkt in Vergangenheit nutzen wir Pluscuamperfecto: 'había comido'. Diese erste Sushi-Erfahrung markiert einen Wendepunkt in ihren kulinarischen Erlebnissen."
      },
      {
        id: "plusc_3",
        question: "Nosotros ya _____ _____ la película cuando llegaste tarde tú.",
        translation: "Wir hatten den Film schon gesehen, als du zu spät kamst.",
        options: ["habíamos visto", "vimos", "vemos", "veremos"],
        correct: "habíamos visto",
        explanation: "Für Handlung VOLLENDET vor anderem Zeitpunkt: 'habíamos visto' (hatten gesehen). Film war schon zu Ende, als du kamst. Diese Situation zeigt Konsequenz von Verspätung - Film wurde verpasst."
      },
      {
        id: "plusc_4",
        question: "Me di cuenta de que _____ _____ las llaves en casa.",
        translation: "Ich bemerkte, dass ich die Schlüssel zu Hause gelassen hatte.",
        options: ["había dejado", "dejé", "dejo", "dejaré"],
        correct: "había dejado",
        explanation: "Die Erkenntnis (me di cuenta) kam NACH dem Liegenlassen: daher Pluscuamperfecto 'había dejado'. Dieses frustrierende Erlebnis, Schlüssel vergessen zu haben, wird oft erst unterwegs bemerkt."
      },
      {
        id: "plusc_5",
        question: "Ellos _____ _____ toda la noche antes del examen final.",
        translation: "Sie hatten die ganze Nacht vor der Abschlussprüfung gelernt.",
        options: ["habían estudiado", "estudiaron", "estudian", "estudiarán"],
        correct: "habían estudiado",
        explanation: "Für Handlung abgeschlossen VOR Prüfung: 'habían estudiado' (hatten gelernt). Diese intensive Nachtlern-Session vor Prüfung ist klassische Studenten-Taktik, wenn auch nicht die gesündeste."
      },
      {
        id: "plusc_6",
        question: "Cuando llamé, tú ya _____ _____ de la oficina a casa.",
        translation: "Als ich anrief, warst du schon vom Büro nach Hause gegangen.",
        options: ["habías salido", "saliste", "sales", "saldrás"],
        correct: "habías salido",
        explanation: "Ausgang passierte VOR Anruf: 'habías salido' (warst gegangen). Pluscuamperfecto mit 2. Person Singular. Dieser verpasste Anruf zeigt schlechtes Timing der Kommunikation."
      },
      {
        id: "plusc_7",
        question: "El tren ya _____ _____ cuando llegamos a la estación corriendo.",
        translation: "Der Zug war schon abgefahren, als wir rennend am Bahnhof ankamen.",
        options: ["había salido", "salió", "sale", "saldrá"],
        correct: "había salido",
        explanation: "Zugabfahrt war VOR Ankunft: 'había salido' (war abgefahren). Diese verpasste Verbindung durch zu spätes Ankommen ist frustrierende Reisesituation."
      },
      {
        id: "plusc_8",
        question: "Descubrí que alguien _____ _____ mi bicicleta de la calle.",
        translation: "Ich entdeckte, dass jemand mein Fahrrad von der Straße gestohlen hatte.",
        options: ["había robado", "robó", "roba", "robará"],
        correct: "había robado",
        explanation: "Diebstahl geschah VOR Entdeckung: 'había robado' (hatte gestohlen). Diese unangenehme Entdeckung eines bereits vollzogenen Diebstahls ist ärgerliche Situation."
      },
      {
        id: "plusc_9",
        question: "Yo nunca _____ _____ en avión antes de ese viaje memorable.",
        translation: "Ich war vor dieser denkwürdigen Reise noch nie zuvor im Flugzeug gewesen.",
        options: ["había volado", "volé", "vuelo", "volaré"],
        correct: "había volado",
        explanation: "Für 'noch nie bis zu diesem Punkt': 'nunca había volado' (war nie geflogen). Dieser erste Flug war bedeutendes Lebenserlebnis, das neue Erfahrungen öffnete."
      },
      {
        id: "plusc_10",
        question: "Ella _____ _____ su cumpleaños completamente por el trabajo intenso.",
        translation: "Sie hatte ihren Geburtstag wegen intensiver Arbeit komplett vergessen.",
        options: ["había olvidado", "olvidó", "olvida", "olvidará"],
        correct: "había olvidado",
        explanation: "Das Vergessen war bereits passiert (Pluscuamperfecto): 'había olvidado' (hatte vergessen). Diese völlige Vergessenheit des eigenen Geburtstags zeigt extreme Arbeitsbelastung."
      },
      {
        id: "plusc_11",
        question: "Cuando desperté, ya _____ _____ de llover afuera completamente.",
        translation: "Als ich aufwachte, hatte es draußen schon komplett aufgehört zu regnen.",
        options: ["había dejado", "dejó", "deja", "dejará"],
        correct: "había dejado",
        explanation: "Regenende war VOR Aufwachen: 'había dejado de llover' (hatte aufgehört). Diese zeitliche Abfolge wird durch Pluscuamperfecto klar gemacht."
      },
      {
        id: "plusc_12",
        question: "Te dije que ya _____ _____ esa historia antes muchas veces.",
        translation: "Ich sagte dir, dass ich diese Geschichte schon vorher viele Male gehört hatte.",
        options: ["había oído", "oí", "oigo", "oiré"],
        correct: "había oído",
        explanation: "Für wiederholte Erfahrung VOR dem Erzählen: 'había oído' (hatte gehört). Diese Wiederholung bekannter Geschichte kann langweilig sein für den Zuhörer."
      },
      {
        id: "plusc_13",
        question: "Nosotros no _____ _____ así antes en nuestra vida entera.",
        translation: "Wir hatten in unserem ganzen Leben noch nie zuvor so gelitten.",
        options: ["habíamos sufrido", "sufrimos", "sufrimos", "sufriremos"],
        correct: "habíamos sufrido",
        explanation: "Für 'noch nie bis zu diesem Moment': 'nunca habíamos sufrido' (hatten nie gelitten). Dieses außergewöhnliche Leiden war neue intensive Erfahrung."
      },
      {
        id: "plusc_14",
        question: "El restaurante _____ _____ cuando intentamos entrar a las diez.",
        translation: "Das Restaurant hatte geschlossen, als wir um zehn Uhr hineinzugehen versuchten.",
        options: ["había cerrado", "cerró", "cierra", "cerrará"],
        explanation: "Schließung war VOR Versuch einzutreten: 'había cerrado' (hatte geschlossen). Diese enttäuschende Situation erfordert Plan B für Abendessen."
      },
      {
        id: "plusc_15",
        question: "Me contó que _____ _____ tres años en Alemania anteriormente.",
        translation: "Er erzählte mir, dass er vorher drei Jahre in Deutschland gelebt hatte.",
        options: ["había vivido", "vivió", "vive", "vivirá"],
        correct: "había vivido",
        explanation: "Für vergangene Erfahrung VOR dem Erzählen: 'había vivido' (hatte gelebt). Diese Deutschland-Erfahrung liegt in seiner persönlichen Vergangenheit vor dem Gespräch."
      }
    ]
  },

  voz_pasiva: {
    name: "Voz Pasiva (Passiv)",
    description: "Ser + Partizip - Handlungen aus Perspektive des Objekts",
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "pasiva_1",
        question: "La casa _____ _____ por un arquitecto famoso reconocido.",
        translation: "Das Haus wurde von einem berühmten anerkannten Architekten gebaut.",
        options: ["fue construida", "fue construido", "es construida", "era construida"],
        correct: "fue construida",
        explanation: "Für PASSIV nutzen wir 'ser' + Partizip: 'fue construida' (wurde gebaut). Partizip passt sich an Subjekt an (casa = feminin). Mit Pretérito für abgeschlossene Handlung. Diese Bauweise durch berühmten Architekten gibt Haus besonderen Wert."
      },
      {
        id: "pasiva_2",
        question: "Los libros _____ _____ en la biblioteca central pública ayer.",
        translation: "Die Bücher wurden gestern in der öffentlichen Zentralbibliothek veröffentlicht.",
        options: ["fueron publicados", "fueron publicadas", "son publicados", "eran publicados"],
        correct: "fueron publicados",
        explanation: "Passiv Plural maskulin: 'fueron publicados'. Partizip stimmt mit 'libros' überein. Diese Buchveröffentlichung gestern ist spezifisches vergangenes Ereignis."
      },
      {
        id: "pasiva_3",
        question: "El español _____ _____ por millones de personas en el mundo.",
        translation: "Spanisch wird von Millionen Menschen auf der Welt gesprochen.",
        options: ["es hablado", "fue hablado", "era hablado", "será hablado"],
        correct: "es hablado",
        explanation: "Für GEGENWÄRTIGE allgemeine Wahrheit: Präsens 'es hablado' (wird gesprochen). Diese globale Verbreitung des Spanischen macht es zu wichtiger Weltsprache."
      },
      {
        id: "pasiva_4",
        question: "La carta _____ _____ por correo certificado la semana pasada.",
        translation: "Der Brief wurde letzte Woche per Einschreiben geschickt.",
        options: ["fue enviada", "fue enviado", "es enviada", "era enviada"],
        correct: "fue enviada",
        explanation: "Passiv feminin: 'carta fue enviada'. Partizip muss übereinstimmen. Dieser versicherte Versand per Einschreiben garantiert Ankunftsbestätigung."
      },
      {
        id: "pasiva_5",
        question: "Las ventanas _____ _____ cada semana por el servicio de limpieza.",
        translation: "Die Fenster werden jede Woche vom Reinigungsdienst geputzt.",
        options: ["son limpiadas", "fueron limpiadas", "eran limpiadas", "serán limpiadas"],
        correct: "son limpiadas",
        explanation: "Für GEWOHNHEIT in Gegenwart: Präsens Passiv 'son limpiadas' (werden geputzt). Plural feminin. Diese regelmäßige Fensterreinigung hält Gebäude gepflegt."
      },
      {
        id: "pasiva_6",
        question: "El ladrón _____ _____ por la policía después de una semana.",
        translation: "Der Dieb wurde nach einer Woche von der Polizei gefangen.",
        options: ["fue capturado", "fue capturada", "es capturado", "era capturado"],
        correct: "fue capturado",
        explanation: "Passiv maskulin: 'ladrón fue capturado' (wurde gefangen). Diese erfolgreiche Festnahme nach Woche zeigt polizeiliche Ermittlungsarbeit."
      },
      {
        id: "pasiva_7",
        question: "Estos cuadros _____ _____ por Picasso en sus últimos años.",
        translation: "Diese Gemälde wurden von Picasso in seinen letzten Jahren gemalt.",
        options: ["fueron pintados", "fueron pintadas", "son pintados", "eran pintados"],
        correct: "fueron pintados",
        explanation: "Plural maskulin: 'cuadros fueron pintados'. Partizip muss übereinstimmen. Diese Spätwerke Picassos haben besonderen kunsthistorischen Wert."
      },
      {
        id: "pasiva_8",
        question: "La reunión _____ _____ para el próximo martes sin falta.",
        translation: "Das Treffen wurde ohne Ausnahme auf nächsten Dienstag verschoben.",
        options: ["fue pospuesta", "fue pospuesto", "es pospuesta", "era pospuesta"],
        correct: "fue pospuesta",
        explanation: "Feminin: 'reunión fue pospuesta' (wurde verschoben). Diese Terminverschiebung erfordert Neuplanung und Information aller Teilnehmer."
      },
      {
        id: "pasiva_9",
        question: "Mi coche _____ _____ en el taller mecánico ahora mismo.",
        translation: "Mein Auto wird gerade jetzt in der Werkstatt repariert.",
        options: ["está siendo reparado", "es reparado", "fue reparado", "era reparado"],
        correct: "está siendo reparado",
        explanation: "Für VERLAUFSFORM im Passiv nutzen wir 'estar siendo' + Partizip: 'está siendo reparado' (wird gerade repariert). Diese momentane Reparatur dauert wahrscheinlich Stunden."
      },
      {
        id: "pasiva_10",
        question: "Las decisiones importantes _____ _____ por el director general siempre.",
        translation: "Die wichtigen Entscheidungen werden immer vom Generaldirektor getroffen.",
        options: ["son tomadas", "fueron tomadas", "eran tomadas", "serán tomadas"],
        correct: "son tomadas",
        explanation: "Für gewohnheitsmäßiges Passiv: 'son tomadas' (werden getroffen). Plural feminin. Diese Machtkonzentration beim Direktor zeigt hierarchische Unternehmensstruktur."
      },
      {
        id: "pasiva_11",
        question: "El edificio _____ _____ en el siglo diecinueve pasado.",
        translation: "Das Gebäude wurde im vergangenen neunzehnten Jahrhundert gebaut.",
        options: ["fue construido", "fue construida", "es construido", "era construido"],
        correct: "fue construido",
        explanation: "Maskulin: 'edificio fue construido'. Dieses historische Gebäude aus dem 19. Jahrhundert hat architektonischen und kulturellen Wert."
      },
      {
        id: "pasiva_12",
        question: "Los resultados _____ _____ mañana por la mañana temprano sin falta.",
        translation: "Die Ergebnisse werden morgen früh am Morgen ohne Ausnahme veröffentlicht.",
        options: ["serán publicados", "son publicados", "fueron publicados", "eran publicados"],
        correct: "serán publicados",
        explanation: "Für ZUKUNFT im Passiv: Futuro 'serán publicados' (werden veröffentlicht werden). Diese angekündigte Veröffentlichung schafft Erwartung."
      },
      {
        id: "pasiva_13",
        question: "La verdad _____ _____ por todos tarde o temprano inevitablemente.",
        translation: "Die Wahrheit wird früher oder später unvermeidlich von allen entdeckt.",
        options: ["será descubierta", "es descubierta", "fue descubierta", "era descubierta"],
        correct: "será descubierta",
        explanation: "Futuro Passiv feminin: 'será descubierta' (wird entdeckt werden). Diese philosophische Aussage besagt, dass Wahrheit sich immer offenbart."
      },
      {
        id: "pasiva_14",
        question: "En esa época, las mujeres no _____ _____ votar en elecciones.",
        translation: "In jener Zeit wurden Frauen nicht erlaubt, bei Wahlen zu wählen.",
        options: ["eran permitidas", "fueron permitidas", "son permitidas", "serán permitidas"],
        correct: "eran permitidas",
        explanation: "Für gewohnheitsmäßigen Zustand in Vergangenheit: Imperfecto Passiv 'eran permitidas'. Diese historische Ungerechtigkeit des fehlenden Frauenwahlrechts ist heute überwunden."
      },
      {
        id: "pasiva_15",
        question: "Todos los empleados _____ _____ sobre el cambio de horario ayer.",
        translation: "Alle Angestellten wurden gestern über die Zeitplanänderung informiert.",
        options: ["fueron informados", "fueron informadas", "son informados", "eran informados"],
        correct: "fueron informados",
        explanation: "Plural maskulin: 'empleados fueron informados' (wurden informiert). Diese wichtige Kommunikation über Zeitänderung stellt sicher, dass alle Bescheid wissen."
      }
    ]
  },

  se_impersonal: {
    name: "Se Impersonal",
    description: "Man, es wird - unpersönliche Konstruktionen ohne Subjekt",
    icon: Bookmark,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "se_imp_1",
        question: "_____ _____ español en muchos países del mundo entero.",
        translation: "Man spricht Spanisch in vielen Ländern der ganzen Welt.",
        options: ["Se habla", "Se hablan", "Hablan", "Hablamos"],
        correct: "Se habla",
        explanation: "Für unpersönliches MAN nutzen wir 'se' + 3. Person: 'se habla español' (man spricht Spanisch). Verb ist Singular, weil Spanisch unzählbar ist. Diese Konstruktion ist häufiger als Passiv im Spanischen für allgemeine Aussagen."
      },
      {
        id: "se_imp_2",
        question: "_____ _____ casa en esta zona residencial exclusiva del norte.",
        translation: "Haus wird in dieser exklusiven Wohngegend im Norden verkauft.",
        options: ["Se vende", "Se venden", "Vende", "Vendemos"],
        correct: "Se vende",
        explanation: "Für ES WIRD VERKAUFT: 'se vende casa' (Haus wird verkauft). Singular, weil ein Haus. Diese Verkaufsanzeige ist typische Immobilienkommunikation."
      },
      {
        id: "se_imp_3",
        question: "¿Cómo _____ _____ 'gracias' en alemán correctamente en contexto?",
        translation: "Wie sagt man 'danke' korrekt im Kontext auf Deutsch?",
        options: ["se dice", "se dicen", "dice", "decimos"],
        correct: "se dice",
        explanation: "Für WIE SAGT MAN: '¿cómo se dice?' (wie sagt man?). Sehr häufige Frage beim Sprachenlernen. Diese Übersetzungsfrage ist grundlegend für Kommunikation."
      },
      {
        id: "se_imp_4",
        question: "Aquí no _____ _____ fumar - está totalmente prohibido por ley.",
        translation: "Hier darf man nicht rauchen - es ist gesetzlich völlig verboten.",
        options: ["se puede", "se pueden", "puede", "podemos"],
        correct: "se puede",
        explanation: "Für MAN KANN/DARF: 'se puede fumar' (man kann rauchen). Mit Negation für Verbot. Dieses Rauchverbot ist Gesundheits- und Sicherheitsregel."
      },
      {
        id: "se_imp_5",
        question: "En este restaurante _____ _____ los mejores platos mediterráneos típicos.",
        translation: "In diesem Restaurant werden die besten typischen mediterranen Gerichte serviert.",
        options: ["se sirven", "se sirve", "sirven", "servimos"],
        correct: "se sirven",
        explanation: "Plural: 'se sirven los platos' (werden serviert). Verb stimmt mit Plural Subjekt überein. Diese kulinarische Spezialität macht Restaurant attraktiv für mediterrane Küche-Liebhaber."
      },
      {
        id: "se_imp_6",
        question: "_____ _____ profesores de inglés con experiencia internacional amplia.",
        translation: "Man sucht Englischlehrer mit umfangreicher internationaler Erfahrung.",
        options: ["Se buscan", "Se busca", "Buscan", "Buscamos"],
        correct: "Se buscan",
        explanation: "Plural: 'se buscan profesores' (werden gesucht). Diese Stellenanzeige definiert klare Qualifikationsanforderungen für Bewerber."
      },
      {
        id: "se_imp_7",
        question: "_____ _____ bien desde aquí - la vista es espectacular total.",
        translation: "Man sieht gut von hier aus - die Aussicht ist total spektakulär.",
        options: ["Se ve", "Se ven", "Ve", "Vemos"],
        correct: "Se ve",
        explanation: "Für ES LÄSST SICH SEHEN: 'se ve bien' (man sieht gut). Diese Bemerkung über gute Sicht von diesem Punkt ist Lob für Aussichtslage."
      },
      {
        id: "se_imp_8",
        question: "¿Cómo _____ _____ a la estación de tren desde aquí?",
        translation: "Wie kommt man von hier aus zum Bahnhof?",
        options: ["se llega", "se llegan", "llega", "llegamos"],
        correct: "se llega",
        explanation: "Für WIE KOMMT MAN: '¿cómo se llega?' (wie kommt man?). Typische Wegfrage. Diese Navigationsfrage sucht Anleitung für Route zum Bahnhof."
      },
      {
        id: "se_imp_9",
        question: "_____ _____ perros en este parque público - hay señales claras.",
        translation: "Hunde sind in diesem öffentlichen Park verboten - es gibt klare Schilder.",
        options: ["Se prohíben", "Se prohíbe", "Prohíben", "Prohibimos"],
        correct: "Se prohíben",
        explanation: "Plural: 'se prohíben perros' (Hunde sind verboten/werden verboten). Diese Parkregel schützt Grünflächen und nicht-Hundebesitzer."
      },
      {
        id: "se_imp_10",
        question: "_____ _____ que va a llover mañana según el pronóstico oficial.",
        translation: "Es wird gesagt/Man sagt, dass es morgen laut offizieller Vorhersage regnen wird.",
        options: ["Se dice", "Se dicen", "Dice", "Decimos"],
        correct: "Se dice",
        explanation: "Für ES WIRD GESAGT/MAN SAGT: 'se dice que...' (man sagt, dass...). Für Gerüchte oder allgemeine Meinungen. Diese Wettervorhersage basiert auf allgemeinem Wissen."
      },
      {
        id: "se_imp_11",
        question: "_____ _____ muchas lenguas diferentes en Suiza multilingüe pequeña.",
        translation: "In der kleinen mehrsprachigen Schweiz werden viele verschiedene Sprachen gesprochen.",
        options: ["Se hablan", "Se habla", "Hablan", "Hablamos"],
        correct: "Se hablan",
        explanation: "Plural: 'se hablan lenguas' (Sprachen werden gesprochen). Diese sprachliche Vielfalt der Schweiz ist kulturelle Besonderheit."
      },
      {
        id: "se_imp_12",
        question: "Aquí _____ _____ tarjetas de crédito - solo efectivo en metálico.",
        translation: "Hier werden keine Kreditkarten akzeptiert - nur Bargeld.",
        options: ["no se aceptan", "no se acepta", "no aceptan", "no aceptamos"],
        correct: "no se aceptan",
        explanation: "Negativ Plural: 'no se aceptan tarjetas'. Diese Nur-Bargeld-Politik kann für Kunden ohne Bargeld problematisch sein."
      },
      {
        id: "se_imp_13",
        question: "_____ _____ que el examen será muy difícil este año académico.",
        translation: "Man sagt, dass die Prüfung dieses Schuljahr sehr schwer sein wird.",
        options: ["Se dice", "Se dicen", "Dice", "Decimos"],
        correct: "Se dice",
        explanation: "Für GERÜCHT: 'se dice que...' (man sagt, dass...). Diese Prüfungsgerüchte können Nervosität bei Schülern erzeugen."
      },
      {
        id: "se_imp_14",
        question: "_____ _____ apartamentos nuevos en el centro de la ciudad moderna.",
        translation: "Neue Apartments werden im Zentrum der modernen Stadt vermietet.",
        options: ["Se alquilan", "Se alquila", "Alquilan", "Alquilamos"],
        correct: "Se alquilan",
        explanation: "Plural: 'se alquilan apartamentos' (Apartments werden vermietet). Diese Vermietungsanzeige zielt auf Wohnungssuchende in Stadtmitte."
      },
      {
        id: "se_imp_15",
        question: "_____ _____ bien en este restaurante italiano auténtico siempre.",
        translation: "Man isst in diesem authentischen italienischen Restaurant immer gut.",
        options: ["Se come", "Se comen", "Come", "Comemos"],
        correct: "Se come",
        explanation: "Für MAN ISST: 'se come bien' (man isst gut). Diese Empfehlung betont Qualität des Restaurants durch unpersönliche Konstruktion."
      }
    ]
  },

  perifrasis_verbales: {
    name: "Perífrasis Verbales (Verbalperiphrasen)",
    description: "Verb + Infinitiv/Gerundio - Nuancen und Aspekte ausdrücken",
    icon: Repeat,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "perif_1",
        question: "Voy _____ _____ un viaje a Italia el próximo mes felizmente.",
        translation: "Ich werde nächsten Monat glücklich eine Reise nach Italien machen.",
        options: ["a hacer", "hacer", "haciendo", "hecho"],
        correct: "a hacer",
        explanation: "Periphrase 'ir a' + Infinitiv für NAHE ZUKUNFT: 'voy a hacer' (ich werde machen). Häufiger als Futuro Simple. Diese geplante Italienreise ist konkretes nahes Vorhaben."
      },
      {
        id: "perif_2",
        question: "Acabo _____ _____ la tarea de matemáticas hace un momento.",
        translation: "Ich habe gerade eben vor einem Moment die Mathe-Hausaufgaben beendet.",
        options: ["de terminar", "terminar", "terminando", "terminado"],
        correct: "de terminar",
        explanation: "Periphrase 'acabar de' + Infinitiv für GERADE EBEN: 'acabo de terminar' (habe gerade beendet). Diese frisch vollendete Aufgabe liegt nur Sekunden zurück."
      },
      {
        id: "perif_3",
        question: "Tengo _____ _____ mi habitación antes de salir a jugar.",
        translation: "Ich muss mein Zimmer aufräumen, bevor ich spielen gehe.",
        options: ["que limpiar", "limpiar", "limpiando", "limpiado"],
        correct: "que limpiar",
        explanation: "Periphrase 'tener que' + Infinitiv für MÜSSEN: 'tengo que limpiar' (ich muss aufräumen). Drückt Verpflichtung aus. Diese Pflicht vor Vergnügen ist klassische elterliche Regel."
      },
      {
        id: "perif_4",
        question: "Ella lleva _____ español tres años sin parar en la escuela.",
        translation: "Sie lernt seit drei Jahren ohne Pause in der Schule Spanisch.",
        options: ["estudiando", "estudiar", "a estudiar", "estudiado"],
        correct: "estudiando",
        explanation: "Periphrase 'llevar' + Gerundio + ZEIT für DAUER: 'lleva estudiando tres años' (lernt schon drei Jahre). Diese andauernde Lerntätigkeit zeigt Ausdauer."
      },
      {
        id: "perif_5",
        question: "Debo _____ más atención en clase de historia siempre constantemente.",
        translation: "Ich sollte im Geschichtsunterricht immer konstant mehr aufpassen.",
        options: ["prestar", "prestando", "a prestar", "prestado"],
        correct: "prestar",
        explanation: "Periphrase 'deber' + Infinitiv für SOLLEN: 'debo prestar' (ich sollte schenken). Schwächer als 'tener que'. Dieser Rat zur Aufmerksamkeit zielt auf bessere Noten."
      },
      {
        id: "perif_6",
        question: "Sigo _____ los mismos errores tontos repetidamente sin aprender.",
        translation: "Ich mache weiterhin dieselben dummen Fehler wiederholt ohne zu lernen.",
        options: ["cometiendo", "cometer", "a cometer", "cometido"],
        correct: "cometiendo",
        explanation: "Periphrase 'seguir' + Gerundio für WEITERMACHEN: 'sigo cometiendo' (fahre fort zu machen). Diese Fehlerwiederholung zeigt, dass Lernen noch nicht stattgefunden hat."
      },
      {
        id: "perif_7",
        question: "Hay _____ _____ antes de las nueve para llegar a tiempo.",
        translation: "Man muss vor neun Uhr losfahren, um pünktlich anzukommen.",
        options: ["que salir", "salir", "saliendo", "salido"],
        correct: "que salir",
        explanation: "Unpersönliches 'hay que' + Infinitiv für MAN MUSS: 'hay que salir' (man muss gehen). Ohne Subjekt. Diese Zeitvorgabe für pünktliche Ankunft ist praktischer Rat."
      },
      {
        id: "perif_8",
        question: "Dejé _____ _____ café hace un año por salud personal.",
        translation: "Ich hörte vor einem Jahr aus persönlichen Gesundheitsgründen auf, Kaffee zu trinken.",
        options: ["de tomar", "tomar", "tomando", "tomado"],
        correct: "de tomar",
        explanation: "Periphrase 'dejar de' + Infinitiv für AUFHÖREN: 'dejé de tomar' (hörte auf zu trinken). Diese Kaffee-Abstinenz ist gesundheitliche Entscheidung."
      },
      {
        id: "perif_9",
        question: "Vamos _____ _____ poco a poco con práctica diaria constante.",
        translation: "Wir lernen mit konstanter täglicher Praxis nach und nach.",
        options: ["aprendiendo", "aprender", "a aprender", "aprendido"],
        correct: "aprendiendo",
        explanation: "Periphrase 'ir' + Gerundio für ALLMÄHLICH: 'vamos aprendiendo' (lernen nach und nach). Betont schrittweisen Prozess. Diese graduelle Verbesserung ist natürlicher Lernweg."
      },
      {
        id: "perif_10",
        question: "Él anda _____ de sus problemas personales a todos constantemente.",
        translation: "Er geht herum und erzählt allen ständig von seinen persönlichen Problemen.",
        options: ["contando", "contar", "a contar", "contado"],
        correct: "contando",
        explanation: "Periphrase 'andar' + Gerundio für HERUMGEHEN UND TUN: 'anda contando' (geht herum erzählend). Diese Gewohnheit, allen Probleme zu erzählen, kann andere belasten."
      },
      {
        id: "perif_11",
        question: "Acabamos _____ _____ toda la comida que había en el refrigerador.",
        translation: "Wir haben gerade eben das ganze Essen aufgegessen, das im Kühlschrank war.",
        options: ["de comer", "comer", "comiendo", "comido"],
        correct: "de comer",
        explanation: "Periphrase 'acabar de': 'acabamos de comer' (haben gerade gegessen). Sehr recent abgeschlossen. Dieser leere Kühlschrank erfordert neuen Einkauf."
      },
      {
        id: "perif_12",
        question: "Tienes _____ _____ más verduras para una dieta balanceada saludable.",
        translation: "Du musst mehr Gemüse für eine gesunde ausgewogene Ernährung essen.",
        options: ["que comer", "comer", "comiendo", "comido"],
        correct: "que comer",
        explanation: "Periphrase 'tener que': 'tienes que comer' (du musst essen). Starke Verpflichtung. Dieser Ernährungsrat zielt auf gesündere Essgewohnheiten."
      },
      {
        id: "perif_13",
        question: "Suele _____ al gimnasio tres veces por semana regularmente siempre.",
        translation: "Er pflegt regelmäßig immer dreimal pro Woche ins Fitnessstudio zu gehen.",
        options: ["ir", "yendo", "a ir", "ido"],
        correct: "ir",
        explanation: "Periphrase 'soler' + Infinitiv für PFLEGEN ZU: 'suele ir' (pflegt zu gehen). Für Gewohnheiten. Diese regelmäßige Fitnessstudio-Routine zeigt Gesundheitsbewusstsein."
      },
      {
        id: "perif_14",
        question: "Está _____ _____ llover - el cielo está muy oscuro y nublado.",
        translation: "Es ist im Begriff zu regnen - der Himmel ist sehr dunkel und bewölkt.",
        options: ["por llover", "llover", "lloviendo", "llovido"],
        correct: "por llover",
        explanation: "Periphrase 'estar por' + Infinitiv für KURZ DAVOR SEIN: 'está por llover' (ist im Begriff zu regnen). Diese unmittelbar bevorstehende Wetteränderung erfordert Regenschirm."
      },
      {
        id: "perif_15",
        question: "Vengo _____ desde las seis de la mañana temprano hoy.",
        translation: "Ich arbeite seit heute früh sechs Uhr morgens.",
        options: ["trabajando", "trabajar", "a trabajar", "trabajado"],
        correct: "trabajando",
        explanation: "Periphrase 'venir' + Gerundio für KONTINUITÄT: 'vengo trabajando' (arbeite schon). Betont Dauer bis jetzt. Diese frühmorgendliche Arbeitsaufnahme zeigt langen Arbeitstag."
      }
    ]
  },

  adverbios_modo: {
    name: "Adverbios de Modo (Modaladverbien)",
    description: "Wie etwas gemacht wird - -mente Endung und Alternativen",
    icon: Bookmark,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "adv_modo_1",
        question: "Ella habla español muy _____ - casi como nativa perfecta.",
        translation: "Sie spricht sehr fließend Spanisch - fast wie perfekte Muttersprachlerin.",
        options: ["fluidamente", "fluido", "fluida", "fluidez"],
        correct: "fluidamente",
        explanation: "Für Adverbien von Adjektiven nehmen wir FEMININ + '-mente': 'fluida' → 'fluidamente' (fließend). Deutsche '-lich/-weise' wird zu '-mente'. Diese ausgezeichnete Sprachbeherrschung ist Ergebnis intensiven Lernens."
      },
      {
        id: "adv_modo_2",
        question: "Trabajó _____ en el proyecto todo el mes sin descansar nunca.",
        translation: "Er arbeitete den ganzen Monat ohne jemals auszuruhen intensiv am Projekt.",
        options: ["intensamente", "intenso", "intensa", "intensidad"],
        correct: "intensamente",
        explanation: "Adverb: 'intensa' → 'intensamente' (intensiv). Diese monatelange intensive Arbeit ohne Pause zeigt extreme Hingabe aber auch Risiko für Erschöpfung."
      },
      {
        id: "adv_modo_3",
        question: "Por favor, explícame _____ las instrucciones - no entiendo bien.",
        translation: "Bitte erkläre mir die Anweisungen langsam - ich verstehe nicht gut.",
        options: ["lentamente", "lento", "lenta", "lentitud"],
        correct: "lentamente",
        explanation: "Adverb: 'lenta' → 'lentamente' (langsam). Diese Bitte um langsamere Erklärung zeigt Verständnisschwierigkeiten, die Geduld erfordern."
      },
      {
        id: "adv_modo_4",
        question: "Escucha _____ lo que te voy a decir ahora - es importante.",
        translation: "Höre aufmerksam zu, was ich dir jetzt sagen werde - es ist wichtig.",
        options: ["atentamente", "atento", "atenta", "atención"],
        correct: "atentamente",
        explanation: "Adverb: 'atenta' → 'atentamente' (aufmerksam). Diese Aufforderung zu voller Aufmerksamkeit signalisiert wichtige Information."
      },
      {
        id: "adv_modo_5",
        question: "Resolvió el problema _____ - es muy inteligente de verdad.",
        translation: "Er löste das Problem leicht - er ist wirklich sehr intelligent.",
        options: ["fácilmente", "fácil", "fácila", "facilidad"],
        correct: "fácilmente",
        explanation: "Adverb: 'fácil' → 'fácilmente' (leicht). Diese mühelose Problemlösung zeigt hohe Intelligenz oder Erfahrung mit ähnlichen Aufgaben."
      },
      {
        id: "adv_modo_6",
        question: "Llegó _____ a la cita - solo cinco minutos tarde en total.",
        translation: "Er kam fast pünktlich zum Termin - insgesamt nur fünf Minuten zu spät.",
        options: ["casi puntualmente", "casi puntual", "puntual", "puntualidad"],
        correct: "casi puntualmente",
        explanation: "Adverb mit 'casi': 'casi puntualmente' (fast pünktlich). Diese minimale Verspätung ist akzeptabel in den meisten Situationen."
      },
      {
        id: "perif_7",
        question: "Respondió _____ a todas las preguntas difíciles del examen oral.",
        translation: "Er antwortete korrekt auf alle schweren Fragen der mündlichen Prüfung.",
        options: ["correctamente", "correcto", "correcta", "corrección"],
        correct: "correctamente",
        explanation: "Adverb: 'correcta' → 'correctamente' (korrekt). Diese vollständig richtige Beantwortung aller Fragen zeigt exzellente Vorbereitung."
      },
      {
        id: "adv_modo_8",
        question: "_____ voy al gimnasio los lunes - es mi rutina fija semanal.",
        translation: "Normalerweise gehe ich montags ins Fitnessstudio - es ist meine feste wöchentliche Routine.",
        options: ["Normalmente", "Normal", "Normala", "Normalidad"],
        correct: "Normalmente",
        explanation: "Adverb: 'normal' → 'normalmente' (normalerweise). Diese Montagsroutine strukturiert Wochenstart mit Sport."
      },
      {
        id: "adv_modo_9",
        question: "Habla tan _____ que nadie puede entenderle en absoluto nunca.",
        translation: "Er spricht so schnell, dass niemand ihn jemals überhaupt verstehen kann.",
        options: ["rápidamente", "rápido", "rápida", "rapidez"],
        correct: "rápidamente",
        explanation: "Adverb: 'rápida' → 'rápidamente' (schnell). Diese übermäßige Sprechgeschwindigkeit schafft Kommunikationsbarriere für Zuhörer."
      },
      {
        id: "adv_modo_10",
        question: "Conduce _____ - siempre respeta las señales de tráfico todas.",
        translation: "Er fährt vorsichtig - er respektiert immer alle Verkehrsschilder.",
        options: ["cuidadosamente", "cuidadoso", "cuidadosa", "cuidado"],
        correct: "cuidadosamente",
        explanation: "Adverb: 'cuidadosa' → 'cuidadosamente' (vorsichtig). Dieses umsichtige Fahren minimiert Unfallrisiko und zeigt Verantwortung."
      },
      {
        id: "adv_modo_11",
        question: "_____ llego a tiempo al trabajo - soy muy puntual siempre.",
        translation: "Ich komme immer pünktlich zur Arbeit - ich bin immer sehr pünktlich.",
        options: ["Siempre", "Siempra", "Siempremente", "Siempro"],
        correct: "Siempre",
        explanation: "Einige Adverbien enden NICHT auf '-mente': 'siempre' (immer) ist eigenständiges Wort. Diese ausnahmslose Pünktlichkeit ist professionelle Stärke."
      },
      {
        id: "adv_modo_12",
        question: "Trabaja _____ sin quejarse nunca de nada en absoluto.",
        translation: "Sie arbeitet hart ohne sich jemals über irgendetwas zu beschweren.",
        options: ["duro", "duramente", "dura", "dureza"],
        correct: "duro",
        explanation: "Manche Adverbien sind identisch mit maskulinem Adjektiv: 'trabajar duro' (hart arbeiten). Nicht 'duramente'. Diese beschwerdefreie harte Arbeit zeigt positive Einstellung."
      },
      {
        id: "adv_modo_13",
        question: "Canta _____ - tiene una voz preciosa que todos admiran.",
        translation: "Sie singt wunderschön - sie hat eine kostbare Stimme, die alle bewundern.",
        options: ["hermosamente", "hermoso", "hermosa", "hermosura"],
        correct: "hermosamente",
        explanation: "Adverb: 'hermosa' → 'hermosamente' (wunderschön). Dieses stimmliche Talent ist natürliche Gabe, die Freude bereitet."
      },
      {
        id: "adv_modo_14",
        question: "Estudia _____ para aprobar el examen de la próxima semana.",
        translation: "Er lernt fleißig, um die Prüfung nächste Woche zu bestehen.",
        options: ["diligentemente", "diligente", "diligenta", "diligencia"],
        correct: "diligentemente",
        explanation: "Adverb: 'diligente' → 'diligentemente' (fleißig). Diese gewissenhafte Lernhaltung ist Voraussetzung für akademischen Erfolg."
      },
      {
        id: "adv_modo_15",
        question: "Resolvimos el conflicto _____ sin gritar ni pelear entre nosotros.",
        translation: "Wir lösten den Konflikt friedlich ohne zu schreien oder untereinander zu streiten.",
        options: ["pacíficamente", "pacífico", "pacífica", "paz"],
        correct: "pacíficamente",
        explanation: "Adverb: 'pacífica' → 'pacíficamente' (friedlich). Diese gewaltfreie Konfliktlösung zeigt emotionale Reife und Kommunikationsfähigkeit."
      }
    ]
  }
};

export default part12Categories;
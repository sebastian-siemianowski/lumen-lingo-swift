/**
 * GERMAN → SPANISH GRAMMAR - PART 16
 * 4 categories, 15 questions each
 */

import { Scale, Clock, Timer, Zap } from "lucide-react";

export const part16Categories = {
  comparaciones: {
    name: "Comparaciones (Vergleiche)",
    description: "Más que, menos que, tan como - Personen und Dinge vergleichen",
    icon: Scale,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_1",
        question: "Mi hermano es más alto _____ yo - mide casi dos metros.",
        translation: "Mein Bruder ist größer als ich - er misst fast zwei Meter.",
        options: ["que", "de", "como", "cual"],
        correct: "que",
        explanation: "Für VERGLEICHE nutzen wir 'más...que' (mehr...als): 'más alto que yo'. Deutsche 'als' ist 'que'. Dieser Größenunterschied von fast zwei Metern ist beachtlich und macht ihn zu einer auffallend großen Person in jeder Gruppe."
      },
      {
        id: "comp_2",
        question: "Ella habla español tan bien _____ una nativa auténtica real.",
        translation: "Sie spricht Spanisch genauso gut wie eine echte authentische Muttersprachlerin.",
        options: ["como", "que", "de", "cual"],
        correct: "como",
        explanation: "Für GLEICHHEIT nutzen wir 'tan...como' (so...wie): 'tan bien como'. Diese perfekte Sprachbeherrschung auf Muttersprachler-Niveau ist beeindruckendes Ergebnis intensiven Lernens und wahrscheinlich langer Praxis."
      },
      {
        id: "comp_3",
        question: "Tengo menos dinero _____ tú este mes - gasté demasiado.",
        translation: "Ich habe diesen Monat weniger Geld als du - ich gab zu viel aus.",
        options: ["que", "de", "como", "cual"],
        correct: "que",
        explanation: "Für WENIGER ALS: 'menos...que' (weniger...als). Diese finanzielle Diskrepanz durch übermäßige Ausgaben zeigt Bedarf für besseres Budgetmanagement im kommenden Monat."
      },
      {
        id: "comp_4",
        question: "Este libro es tan interesante _____ el anterior que leí antes.",
        translation: "Dieses Buch ist genauso interessant wie das vorherige, das ich vorher las.",
        options: ["como", "que", "de", "cual"],
        correct: "como",
        explanation: "Gleichheitsvergleich bei Adjektiven: 'tan...como'. Diese gleiche Qualität beider Bücher zeigt konsistentes Niveau des Autors oder gute Auswahlkriterien beim Buckkauf."
      },
      {
        id: "comp_5",
        question: "Hay más _____ veinte personas esperando en la sala llena ahora.",
        translation: "Es warten mehr als zwanzig Personen jetzt im vollen Raum.",
        options: ["de", "que", "como", "cual"],
        correct: "de",
        explanation: "VOR ZAHLEN nutzen wir 'más de' (mehr als): 'más de veinte'. Mit 'que' nur bei Satzvergleichen. Diese große wartende Menschenmenge deutet auf beliebten Service oder lange Bearbeitungszeiten hin."
      },
      {
        id: "comp_6",
        question: "Mi casa es menos grande _____ la tuya pero más acogedora.",
        translation: "Mein Haus ist kleiner als deines aber gemütlicher.",
        options: ["que", "de", "como", "cual"],
        correct: "que",
        explanation: "Ungleichheitsvergleich: 'menos grande que' (weniger groß als). Diese Kompensation von Größe durch Gemütlichkeit zeigt, dass Atmosphäre wichtiger sein kann als reine Quadratmeter."
      },
      {
        id: "comp_7",
        question: "Trabajas tanto _____ yo - ambos somos muy dedicados siempre.",
        translation: "Du arbeitest genauso viel wie ich - wir beide sind immer sehr engagiert.",
        options: ["como", "que", "de", "cual"],
        correct: "como",
        explanation: "Bei VERBEN nutzen wir 'tanto como' (genauso viel wie): 'trabajas tanto como yo'. Diese geteilte Arbeitsmoral zwischen beiden schafft gegenseitiges Verständnis für Zeitinvestition."
      },
      {
        id: "comp_8",
        question: "Tenemos tantos libros _____ ellos en nuestra biblioteca personal grande.",
        translation: "Wir haben in unserer großen persönlichen Bibliothek genauso viele Bücher wie sie.",
        options: ["como", "que", "de", "cual"],
        correct: "como",
        explanation: "Bei MENGEN mit Plural: 'tantos...como' (genauso viele...wie). 'Tantos' passt sich an Geschlecht an. Diese umfangreiche Büchersammlung beider Seiten zeigt gemeinsame Leseleidenschaft."
      },
      {
        id: "comp_9",
        question: "El examen fue más difícil _____ lo que esperábamos realmente todos.",
        translation: "Die Prüfung war schwerer als wir alle wirklich erwartet hatten.",
        options: ["de", "que", "como", "cual"],
        correct: "de",
        explanation: "Nach 'más/menos' vor 'lo que' (das was) nutzen wir 'de': 'más difícil de lo que'. Diese unerwartet hohe Schwierigkeit führt wahrscheinlich zu Enttäuschung über Ergebnisse."
      },
      {
        id: "comp_10",
        question: "Corro tan rápido _____ un atleta profesional entrenado capacitado.",
        translation: "Ich laufe so schnell wie ein ausgebildeter trainierter professioneller Athlet.",
        options: ["como", "que", "de", "cual"],
        correct: "como",
        explanation: "Gleichheitsvergleich mit Adverb: 'tan rápido como' (so schnell wie). Diese beeindruckende Laufgeschwindigkeit auf Profi-Niveau zeigt jahrelanges intensives Training."
      },
      {
        id: "comp_11",
        question: "Ella es la estudiante más inteligente _____ toda la clase entera.",
        translation: "Sie ist die intelligenteste Schülerin der ganzen Klasse.",
        options: ["de", "que", "como", "en"],
        correct: "de",
        explanation: "Für SUPERLATIV mit Gruppe: 'la más...de' (die...ste von): 'más inteligente de la clase'. Diese herausragende Intelligenz führt wahrscheinlich zu Klassenbester-Position."
      },
      {
        id: "comp_12",
        question: "Este restaurante es mejor _____ aquel que visitamos la semana pasada.",
        translation: "Dieses Restaurant ist besser als jenes, das wir letzte Woche besuchten.",
        options: ["que", "de", "como", "cual"],
        correct: "que",
        explanation: "UNREGELMÄSSIGER Komparativ 'mejor' (besser) nutzt 'que': 'mejor que aquel'. Nicht 'más bueno'. Diese Qualitätssteigerung macht dieses Restaurant zur bevorzugten Wahl für zukünftige Besuche."
      },
      {
        id: "comp_13",
        question: "Tengo tanta hambre _____ un lobo - no he comido nada hoy.",
        translation: "Ich habe so viel Hunger wie ein Wolf - ich habe heute nichts gegessen.",
        options: ["como", "que", "de", "cual"],
        correct: "como",
        explanation: "Bei UNZÄHLBAREN Substantiven: 'tanta...como' (so viel...wie): 'tanta hambre como'. Passt sich an Substantiv an. Dieser extreme Hunger nach ganztägigem Fasten ist natürliche körperliche Reaktion."
      },
      {
        id: "comp_14",
        question: "Mi padre es mayor _____ mi madre por tres años exactos completos.",
        translation: "Mein Vater ist um genau volle drei Jahre älter als meine Mutter.",
        options: ["que", "de", "como", "cual"],
        correct: "que",
        explanation: "Unregelmäßiger Komparativ 'mayor' (älter/größer): 'mayor que'. Nicht 'más viejo' für Alter bei Personen. Dieser geringe Altersunterschied ist in vielen Ehen völlig normal."
      },
      {
        id: "comp_15",
        question: "Hoy hace peor tiempo _____ ayer - está lloviendo mucho más.",
        translation: "Heute ist das Wetter schlechter als gestern - es regnet viel mehr.",
        options: ["que", "de", "como", "cual"],
        correct: "que",
        explanation: "Unregelmäßiger Komparativ 'peor' (schlechter): 'peor que'. Nicht 'más malo'. Diese Wetterverschlechterung mit starkem Regen erfordert Regenschutz und beeinflusst Tagespläne negativ."
      }
    ]
  },

  ya_todavia_aun: {
    name: "Ya / Todavía / Aún",
    description: "Schon, noch, noch nicht - zeitliche Nuancen ausdrücken",
    icon: Clock,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "ya_tod_1",
        question: "_____ he terminado mis deberes escolares - puedo jugar ahora.",
        translation: "Ich habe meine Schulaufgaben schon fertig - ich kann jetzt spielen.",
        options: ["Ya", "Todavía", "Aún", "Nunca"],
        correct: "Ya",
        explanation: "Für SCHON (Vollendung) nutzen wir 'ya': 'ya he terminado' (habe schon beendet). Diese abgeschlossene Hausaufgabe öffnet Zeit für Freizeit und Erholung nach Lernarbeit."
      },
      {
        id: "ya_tod_2",
        question: "_____ no he recibido tu mensaje - ¿lo enviaste ya?",
        translation: "Ich habe deine Nachricht noch nicht erhalten - hast du sie schon geschickt?",
        options: ["Todavía", "Ya", "Aún", "Siempre"],
        correct: "Todavía",
        explanation: "Für NOCH NICHT nutzen wir 'todavía no' oder 'aún no': 'todavía no he recibido' (habe noch nicht erhalten). Diese fehlende Nachricht könnte auf technische Probleme oder Verzögerung hindeuten."
      },
      {
        id: "ya_tod_3",
        question: "¿_____ estás trabajando en ese proyecto antiguo del año pasado?",
        translation: "Arbeitest du noch an jenem alten Projekt vom letzten Jahr?",
        options: ["Todavía", "Ya", "Nunca", "Siempre"],
        correct: "Todavía",
        explanation: "Für NOCH (Fortsetzung) nutzen wir 'todavía' oder 'aún': '¿todavía estás?' (arbeitest du noch?). Dieses langandauernde Projekt über ein Jahr hinweg zeigt entweder Komplexität oder Zeitmanagement-Herausforderungen."
      },
      {
        id: "ya_tod_4",
        question: "_____ no sé la respuesta correcta - es muy difícil de saber.",
        translation: "Ich weiß die richtige Antwort noch nicht - es ist sehr schwer zu wissen.",
        options: ["Aún", "Ya", "Nunca", "Siempre"],
        correct: "Aún",
        explanation: "Für NOCH NICHT: 'aún no sé' (weiß noch nicht). 'Aún' ist identisch mit 'todavía'. Diese andauernde Unwissenheit trotz Bemühung zeigt Komplexität der Frage."
      },
      {
        id: "ya_tod_5",
        question: "_____ está lloviendo después de tres horas - no para nunca.",
        translation: "Es regnet nach drei Stunden noch - es hört nie auf.",
        options: ["Todavía", "Ya", "Nunca", "Siempre"],
        correct: "Todavía",
        explanation: "Für andauernden Zustand: 'todavía está lloviendo' (regnet noch). Dieser anhaltende Regen nach Stunden ist frustrierend für Outdoor-Pläne und zeigt keine Wetterbesserung."
      },
      {
        id: "ya_tod_6",
        question: "_____ es muy joven para entender estos conceptos complicados difíciles.",
        translation: "Er ist noch zu jung, um diese komplizierten schwierigen Konzepte zu verstehen.",
        options: ["Todavía", "Ya", "Nunca", "Siempre"],
        correct: "Todavía",
        explanation: "Mit 'demasiado' oder 'muy': 'todavía es muy joven' (ist noch zu jung). Diese altersbedingte Verständnisgrenze ist natürlich und wird sich mit Reifung ändern."
      },
      {
        id: "ya_tod_7",
        question: "_____ llegaron tus padres - están esperándote en la entrada principal.",
        translation: "Deine Eltern sind schon angekommen - sie warten am Haupteingang auf dich.",
        options: ["Ya", "Todavía", "Aún", "Nunca"],
        correct: "Ya",
        explanation: "Für SCHON (vorzeitige Ankunft): 'ya llegaron' (sind schon angekommen). Diese frühere Ankunft als erwartet zeigt Pünktlichkeit oder Verkehr war besser als gedacht."
      },
      {
        id: "ya_tod_8",
        question: "No he desayunado _____ - voy a comer algo ahora mismo.",
        translation: "Ich habe noch nicht gefrühstückt - ich werde jetzt gleich etwas essen.",
        options: ["todavía", "ya", "nunca", "siempre"],
        correct: "todavía",
        explanation: "Position am SATZENDE: 'no he desayunado todavía' (habe noch nicht gefrühstückt). Dieses ausgelassene Frühstück könnte durch morgendliche Hektik oder fehlenden Appetit verursacht sein."
      },
      {
        id: "ya_tod_9",
        question: "_____ sé la verdad completa - me la contaron esta mañana temprano.",
        translation: "Ich weiß die komplette Wahrheit schon - sie erzählten sie mir heute früh morgens.",
        options: ["Ya", "Todavía", "Aún", "Nunca"],
        correct: "Ya",
        explanation: "Für Kenntnis erlangt: 'ya sé' (weiß schon). Diese morgendliche Offenbarung der Wahrheit beendet Unwissenheit oder Spekulationen über Situation."
      },
      {
        id: "ya_tod_10",
        question: "¿_____ no has terminado? Llevas tres horas trabajando sin parar.",
        translation: "Bist du noch nicht fertig? Du arbeitest schon drei Stunden ohne Pause.",
        options: ["Todavía", "Ya", "Nunca", "Siempre"],
        correct: "Todavía",
        explanation: "Überraschung über Nicht-Vollendung: '¿todavía no?' (noch nicht?). Diese dreistündige ununterbrochene Arbeit ohne Abschluss zeigt entweder Komplexität oder Perfektionismus."
      },
      {
        id: "ya_tod_11",
        question: "Mis abuelos _____ viven en la misma casa desde hace cincuenta años.",
        translation: "Meine Großeltern wohnen noch im selben Haus seit fünfzig Jahren.",
        options: ["todavía", "ya", "nunca", "siempre"],
        correct: "todavía",
        explanation: "Für andauernde Situation: 'todavía viven' (wohnen noch). Diese fünfzigjährige Residenz an einem Ort zeigt bemerkenswerte Sesshaftigkeit und Verbundenheit mit Heimat."
      },
      {
        id: "ya_tod_12",
        question: "_____ no quiero salir afuera - cambié de opinión por el tiempo.",
        translation: "Ich will nicht mehr rausgehen - ich änderte wegen des Wetters meine Meinung.",
        options: ["Ya", "Todavía", "Aún", "Nunca"],
        correct: "Ya",
        explanation: "Für NICHT MEHR nutzen wir 'ya no': 'ya no quiero' (will nicht mehr). Deutsche 'nicht mehr' ist 'ya no'. Diese wetterbedingte Meinungsänderung ist praktische Anpassung an Bedingungen."
      },
      {
        id: "ya_tod_13",
        question: "Están _____ durmiendo - no los despiertes ahora por favor.",
        translation: "Sie schlafen noch - weck sie jetzt bitte nicht auf.",
        options: ["todavía", "ya", "nunca", "siempre"],
        correct: "todavía",
        explanation: "Fortdauernder Schlaf: 'todavía durmiendo' (noch schlafend). Diese Bitte um Ruhe respektiert ihren Schlafbedarf und vermeidet unnötige Störung."
      },
      {
        id: "ya_tod_14",
        question: "_____ había estado allí antes - conozco bien el lugar exacto.",
        translation: "Ich war schon vorher dort gewesen - ich kenne den genauen Ort gut.",
        options: ["Ya", "Todavía", "Aún", "Nunca"],
        correct: "Ya",
        explanation: "Mit Pluscuamperfecto: 'ya había estado' (war schon gewesen). Diese frühere Ortskenntnis ist hilfreich für Navigation oder Empfehlungen an andere Besucher."
      },
      {
        id: "ya_tod_15",
        question: "No ha llegado _____ el paquete que pedí hace una semana atrás.",
        translation: "Das Paket, das ich vor einer Woche bestellte, ist noch nicht angekommen.",
        options: ["todavía", "ya", "nunca", "siempre"],
        correct: "todavía",
        explanation: "Am Satzende für NOCH NICHT: 'no ha llegado todavía'. Diese einwöchige Lieferverzögerung ist möglicherweise Grund für Nachfrage beim Versandunternehmen."
      }
    ]
  },

  hace_tiempo: {
    name: "Hace + Tiempo",
    description: "Vor, seit - Zeitabstände in Vergangenheit ausdrücken",
    icon: Timer,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "hace_1",
        question: "Llegué a España _____ tres años para estudiar en la universidad.",
        translation: "Ich kam vor drei Jahren nach Spanien, um an der Universität zu studieren.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für VOR + Zeitangabe nutzen wir 'hace': 'hace tres años' (vor drei Jahren). Markiert Zeitpunkt in Vergangenheit. Diese Studienmigration vor drei Jahren war bedeutende Lebensentscheidung."
      },
      {
        id: "hace_2",
        question: "Vivo aquí _____ hace cinco años - me encanta esta ciudad hermosa.",
        translation: "Ich wohne seit fünf Jahren hier - ich liebe diese schöne Stadt.",
        options: ["desde", "hace", "por", "en"],
        correct: "desde",
        explanation: "Für SEIT + hace nutzen wir 'desde hace': 'vivo desde hace cinco años' (wohne seit fünf Jahren). Auch nur 'hace' möglich. Diese fünfjährige Stadtliebe zeigt erfolgreiche Integration."
      },
      {
        id: "hace_3",
        question: "Estudio español _____ dos meses sin parar cada día constantemente.",
        translation: "Ich lerne seit zwei Monaten jeden Tag konstant ohne Pause Spanisch.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Mit Präsens für SEIT: 'estudio hace dos meses' (lerne seit zwei Monaten). Auch 'desde hace'. Diese intensive zweimonte Lernperiode zeigt Engagement und erste Fortschritte."
      },
      {
        id: "hace_4",
        question: "_____ una semana que no te veo - ¿dónde has estado?",
        translation: "Ich habe dich seit einer Woche nicht gesehen - wo bist du gewesen?",
        options: ["Hace", "Desde", "Por", "En"],
        correct: "Hace",
        explanation: "Am SATZANFANG: 'hace una semana que no te veo' (es ist eine Woche her, dass ich dich nicht sehe). Diese einwöchige Abwesenheit weckt Neugier über Aktivitäten."
      },
      {
        id: "hace_5",
        question: "Me mudé a esta casa _____ seis meses aproximadamente más o menos.",
        translation: "Ich zog ungefähr vor etwa sechs Monaten in dieses Haus.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für VOR bei abgeschlossener Handlung: 'me mudé hace seis meses' (zog vor sechs Monaten). Dieser relativ frische Umzug erklärt vielleicht noch nicht vollständige Einrichtung."
      },
      {
        id: "hace_6",
        question: "Trabajo en esta empresa _____ dos años - es un buen lugar laboral.",
        translation: "Ich arbeite seit zwei Jahren in dieser Firma - es ist ein guter Arbeitsplatz.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Mit andauernder Tätigkeit: 'trabajo hace dos años' (arbeite seit zwei Jahren). Diese zweijährige Zufriedenheit mit Arbeitsplatz ist positives Zeichen."
      },
      {
        id: "hace_7",
        question: "_____ mucho tiempo que no como pizza - tengo muchas ganas ahora.",
        translation: "Ich esse schon lange keine Pizza mehr - ich habe jetzt große Lust darauf.",
        options: ["Hace", "Desde", "Por", "En"],
        correct: "Hace",
        explanation: "Am Satzanfang für lange Zeitspanne: 'hace mucho que no como' (es ist lange her, dass ich nicht esse). Dieses Verlangen nach Pizza nach langer Abstinenz ist verständlich."
      },
      {
        id: "hace_8",
        question: "Conozco a María _____ muchos años - somos amigas desde la infancia.",
        translation: "Ich kenne María seit vielen Jahren - wir sind seit der Kindheit Freundinnen.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Bei KENNEN: 'conozco hace muchos años' (kenne seit vielen Jahren). Diese langjährige Freundschaft seit Kindheit ist besonders tiefe Bindung."
      },
      {
        id: "hace_9",
        question: "Terminé la universidad _____ dos años y ahora trabajo felizmente.",
        translation: "Ich beendete die Universität vor zwei Jahren und arbeite jetzt glücklich.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für VOR bei Abschluss: 'terminé hace dos años' (beendete vor zwei Jahren). Dieser erfolgreiche Übergang von Studium zu Beruf ist gelungen."
      },
      {
        id: "hace_10",
        question: "No veo a mis padres _____ un mes - los extraño mucho realmente.",
        translation: "Ich sehe meine Eltern seit einem Monat nicht - ich vermisse sie wirklich sehr.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für SEIT bei Negation: 'no veo hace un mes' (sehe seit einem Monat nicht). Diese monatliche Trennung von Eltern erzeugt natürliche Sehnsucht nach Familie."
      },
      {
        id: "hace_11",
        question: "Empecé a tocar guitarra _____ seis meses - aún soy principiante.",
        translation: "Ich fing vor sechs Monaten an, Gitarre zu spielen - ich bin noch Anfänger.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für Beginn VOR: 'empecé hace seis meses' (fing vor sechs Monaten an). Diese sechsmonatige musikalische Reise ist erst Anfang langen Lernprozesses."
      },
      {
        id: "hace_12",
        question: "_____ tres días que tengo dolor de cabeza constante molesto.",
        translation: "Ich habe seit drei Tagen konstante störende Kopfschmerzen.",
        options: ["Hace", "Desde", "Por", "En"],
        correct: "Hace",
        explanation: "Am Satzanfang: 'hace tres días que tengo' (es sind drei Tage, dass ich habe). Diese anhaltenden Kopfschmerzen erfordern möglicherweise ärztlichen Rat."
      },
      {
        id: "hace_13",
        question: "Dejé de fumar _____ un año entero - me siento mucho mejor.",
        translation: "Ich hörte vor einem ganzen Jahr auf zu rauchen - ich fühle mich viel besser.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für VOR bei Aufhören: 'dejé hace un año' (hörte vor einem Jahr auf). Dieser einjährige Rauchstopp bringt spürbare gesundheitliche Verbesserungen."
      },
      {
        id: "hace_14",
        question: "Estoy esperando el autobús _____ media hora ya - no llega nunca.",
        translation: "Ich warte schon seit einer halben Stunde auf den Bus - er kommt nie.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für andauerndes WARTEN: 'estoy esperando hace media hora' (warte seit halber Stunde). Diese Busverspätung ist frustrierende Alltagssituation im öffentlichen Verkehr."
      },
      {
        id: "hace_15",
        question: "Nos conocimos _____ diez años en una fiesta universitaria memorable.",
        translation: "Wir lernten uns vor zehn Jahren auf einer unvergesslichen Universitätsparty kennen.",
        options: ["hace", "desde", "por", "en"],
        correct: "hace",
        explanation: "Für einmaliges Ereignis VOR: 'nos conocimos hace diez años' (lernten vor zehn Jahren kennen). Diese Dekade Freundschaft begann mit zufälliger Party-Begegnung."
      }
    ]
  },

  acabar_de: {
    name: "Acabar de + Infinitiv",
    description: "Gerade eben - kürzlich vollendete Handlungen beschreiben",
    icon: Zap,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "acab_1",
        question: "Acabo _____ _____ de la oficina - llegué hace cinco minutos.",
        translation: "Ich bin gerade eben vom Büro gekommen - ich kam vor fünf Minuten an.",
        options: ["de llegar", "llegar", "llegando", "llegado"],
        correct: "de llegar",
        explanation: "Für GERADE EBEN nutzen wir 'acabar de' + Infinitiv: 'acabo de llegar' (bin gerade angekommen). Diese kürzlich vollendete Ankunft liegt nur Minuten zurück und erklärt mögliche Eile."
      },
      {
        id: "acab_2",
        question: "Ella acaba _____ _____ su tesis doctoral después de años de trabajo.",
        translation: "Sie hat gerade eben nach Jahren Arbeit ihre Doktorarbeit beendet.",
        options: ["de terminar", "terminar", "terminando", "terminado"],
        correct: "de terminar",
        explanation: "Für frisch Vollendetes: 'acaba de terminar' (hat gerade beendet). Diese jahrelange Doktorarbeit ist nun endlich abgeschlossen - bedeutender akademischer Meilenstein."
      },
      {
        id: "acab_3",
        question: "Acabamos _____ _____ - la comida está todavía caliente en la mesa.",
        translation: "Wir haben gerade gegessen - das Essen ist noch warm auf dem Tisch.",
        options: ["de comer", "comer", "comiendo", "comido"],
        correct: "de comer",
        explanation: "Plural: 'acabamos de comer' (haben gerade gegessen). Das noch warme Essen ist Beweis für die Unmittelbarkeit der Mahlzeit."
      },
      {
        id: "acab_4",
        question: "El tren acaba _____ _____ - perdimos la conexión por poco tiempo.",
        translation: "Der Zug ist gerade abgefahren - wir verpassten die Verbindung um kurze Zeit.",
        options: ["de salir", "salir", "saliendo", "salido"],
        correct: "de salir",
        explanation: "Für gerade erfolgte Abfahrt: 'acaba de salir' (ist gerade abgefahren). Diese knappe Zeitverfehlung ist besonders ärgerlich bei Transport."
      },
      {
        id: "acab_5",
        question: "Acabo _____ _____ un mensaje extraño de número desconocido raro.",
        translation: "Ich habe gerade eine seltsame Nachricht von unbekannter komischer Nummer erhalten.",
        options: ["de recibir", "recibir", "recibiendo", "recibido"],
        correct: "de recibir",
        explanation: "Für kürzlich Empfangenes: 'acabo de recibir' (habe gerade erhalten). Diese mysteriöse Nachricht von Unbekanntem weckt Neugier oder Besorgnis."
      },
      {
        id: "acab_6",
        question: "Ellos acaban _____ _____ a casa del viaje largo internacional.",
        translation: "Sie sind gerade eben von der langen internationalen Reise nach Hause gekommen.",
        options: ["de volver", "volver", "volviendo", "vuelto"],
        correct: "de volver",
        explanation: "Für frische Rückkehr: 'acaban de volver' (sind gerade zurückgekommen). Diese Heimkehr nach Fernreise ist wahrscheinlich mit Jetlag und Wiedereingewöhnung verbunden."
      },
      {
        id: "acab_7",
        question: "¿Acabas _____ _____ ahora mismo? Puedo oler el café fresco.",
        translation: "Hast du gerade eben aufgewacht? Ich kann den frischen Kaffee riechen.",
        options: ["de despertar", "despertar", "despertando", "despertado"],
        correct: "de despertar",
        explanation: "Frage mit 'acabar de': '¿acabas de despertar?' (bist gerade aufgewacht?). Der Kaffeegeruch ist verräterisches Zeichen morgendlicher Routine direkt nach Aufwachen."
      },
      {
        id: "acab_8",
        question: "Mi hermana acaba _____ _____ su primer empleo profesional capacitado.",
        translation: "Meine Schwester hat gerade ihren ersten ausgebildeten professionellen Job bekommen.",
        options: ["de conseguir", "conseguir", "consiguiendo", "conseguido"],
        correct: "de conseguir",
        explanation: "Für kürzlichen Erfolg: 'acaba de conseguir' (hat gerade bekommen). Dieser erste Berufseinstieg ist wichtiger Schritt in Karriere und finanzielle Unabhängigkeit."
      },
      {
        id: "acab_9",
        question: "Acabamos _____ _____ la película entera - fue muy emocionante intensa.",
        translation: "Wir haben gerade den ganzen Film gesehen - er war sehr spannend intensiv.",
        options: ["de ver", "ver", "viendo", "visto"],
        correct: "de ver",
        explanation: "Für frisch beendeten Film: 'acabamos de ver' (haben gerade gesehen). Diese unmittelbare Reaktion nach Film ist noch von Emotionen geprägt."
      },
      {
        id: "acab_10",
        question: "Acabo _____ _____ cuenta del error grave que cometí ayer tarde.",
        translation: "Ich habe gerade den schweren Fehler bemerkt, den ich gestern Nachmittag machte.",
        options: ["de darme", "darme", "dándome", "dado"],
        correct: "de darme",
        explanation: "Reflexiv: 'acabo de darme cuenta' (habe gerade bemerkt). Diese späte Fehlerentdeckung kann noch Korrektur erlauben oder ist schon zu spät."
      },
      {
        id: "acab_11",
        question: "El bebé acaba _____ _____ dormido finalmente después de llorar mucho.",
        translation: "Das Baby ist endlich gerade eingeschlafen nach viel Weinen.",
        options: ["de quedarse", "quedarse", "quedándose", "quedado"],
        correct: "de quedarse",
        explanation: "Für gerade eingetreten: 'acaba de quedarse dormido' (ist gerade eingeschlafen). Diese ersehnte Ruhe nach weinendem Baby ist Erleichterung für erschöpfte Eltern."
      },
      {
        id: "acab_12",
        question: "Acabo _____ _____ con mi novio después de tres años juntos.",
        translation: "Ich habe gerade nach drei gemeinsamen Jahren mit meinem Freund Schluss gemacht.",
        options: ["de romper", "romper", "rompiendo", "roto"],
        correct: "de romper",
        explanation: "Für frische Trennung: 'acabo de romper' (habe gerade Schluss gemacht). Diese dreijährige Beziehung endete gerade, emotionale Verarbeitung steht bevor."
      },
      {
        id: "acab_13",
        question: "Acaban _____ _____ las noticias importantes en la televisión ahora.",
        translation: "Die wichtigen Nachrichten haben gerade im Fernsehen angefangen.",
        options: ["de empezar", "empezar", "empezando", "empezado"],
        correct: "de empezar",
        explanation: "Für gerade begonnene Sendung: 'acaban de empezar' (haben gerade angefangen). Diese rechtzeitige Information erlaubt, Nachrichten von Anfang zu sehen."
      },
      {
        id: "acab_14",
        question: "Acabo _____ _____ la solución perfecta al problema complicado técnico.",
        translation: "Ich habe gerade die perfekte Lösung für das komplizierte technische Problem gefunden.",
        options: ["de encontrar", "encontrar", "encontrando", "encontrado"],
        correct: "de encontrar",
        explanation: "Für Geistesblitz: 'acabo de encontrar' (habe gerade gefunden). Diese kürzliche Problemlösung ist befriedigender Moment nach langem Nachdenken."
      },
      {
        id: "acab_15",
        question: "Acabáis _____ _____ justo a tiempo - casi perdéis el inicio completo.",
        translation: "Ihr seid gerade rechtzeitig angekommen - ihr hättet fast den ganzen Anfang verpasst.",
        options: ["de llegar", "llegar", "llegando", "llegado"],
        correct: "de llegar",
        explanation: "Spanien-Form 'acabáis de llegar' (seid gerade angekommen). Diese knappe pünktliche Ankunft zeigt gutes Timing trotz möglicherweise vorheriger Verspätung."
      }
    ]
  },

  soler_infinitivo: {
    name: "Soler + Infinitiv",
    description: "Pflegen zu - Gewohnheiten und typisches Verhalten ausdrücken",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "soler_1",
        question: "Suelo _____ al gimnasio tres veces por semana regularmente siempre.",
        translation: "Ich pflege regelmäßig immer dreimal pro Woche ins Fitnessstudio zu gehen.",
        options: ["ir", "yendo", "voy", "ido"],
        correct: "ir",
        explanation: "Verb 'soler' + INFINITIV für GEWOHNHEIT: 'suelo ir' (pflege zu gehen). Drückt typisches Verhalten aus. Diese dreimalige wöchentliche Fitness-Routine ist etablierte gesunde Gewohnheit."
      },
      {
        id: "soler_2",
        question: "Mi abuela suele _____ galletas deliciosas cada fin de semana para nosotros.",
        translation: "Meine Oma pflegt jedes Wochenende leckere Kekse für uns zu backen.",
        options: ["hacer", "haciendo", "hace", "hecho"],
        correct: "hacer",
        explanation: "Für regelmäßige Aktivität: 'suele hacer' (pflegt zu machen). Diese süße Familientradition ist liebevolle wöchentliche Geste der Großmutter."
      },
      {
        id: "soler_3",
        question: "Los españoles suelen _____ muy tarde comparado con otros países europeos.",
        translation: "Die Spanier pflegen im Vergleich zu anderen europäischen Ländern sehr spät zu essen.",
        options: ["cenar", "cenando", "cenan", "cenado"],
        correct: "cenar",
        explanation: "Für kulturelle Gewohnheit: 'suelen cenar' (pflegen zu essen). Diese späte spanische Esskultur um 21-22 Uhr ist markanter Unterschied zu mitteleuropäischen Gewohnheiten."
      },
      {
        id: "soler_4",
        question: "¿Sueles _____ café por la mañana o prefieres té verde?",
        translation: "Pflegst du morgens Kaffee zu trinken oder bevorzugst du grünen Tee?",
        options: ["tomar", "tomando", "tomas", "tomado"],
        correct: "tomar",
        explanation: "Frage nach Gewohnheit: '¿sueles tomar?' (pflegst du zu trinken?). Diese Morgengetränk-Frage erkundet persönliche Routine und Präferenzen."
      },
      {
        id: "soler_5",
        question: "Solemos _____ de vacaciones a la playa cada verano sin falta.",
        translation: "Wir pflegen jeden Sommer ohne Ausnahme an den Strand in Urlaub zu fahren.",
        options: ["ir", "yendo", "vamos", "ido"],
        correct: "ir",
        explanation: "Familiengewohnheit: 'solemos ir' (pflegen zu gehen). Diese jährliche Strandtradition ist fester Bestandteil der Sommerplanung und familiärer Rituale."
      },
      {
        id: "soler_6",
        question: "Mi padre no suele _____ enfadado - es muy tranquilo generalmente.",
        translation: "Mein Vater pflegt normalerweise nicht wütend zu werden - er ist sehr ruhig.",
        options: ["ponerse", "poniéndose", "se pone", "puesto"],
        correct: "ponerse",
        explanation: "Mit Negation: 'no suele ponerse' (pflegt nicht zu werden). Dieser ausgeglichene Charakter macht ihn zu angenehmer Person im Umgang."
      },
      {
        id: "soler_7",
        question: "Suelo _____ muy temprano incluso los fines de semana libres.",
        translation: "Ich pflege sogar an freien Wochenenden sehr früh aufzustehen.",
        options: ["levantarme", "levantándome", "me levanto", "levantado"],
        correct: "levantarme",
        explanation: "Reflexiv mit 'soler': 'suelo levantarme' (pflege aufzustehen). Pronomen kann vor 'soler' oder nach Infinitiv. Diese Frühaufsteher-Natur bleibt auch am Wochenend aktiv."
      },
      {
        id: "soler_8",
        question: "Los niños suelen _____ mucho durante las vacaciones de verano largas.",
        translation: "Die Kinder pflegen während der langen Sommerferien viel zu spielen.",
        options: ["jugar", "jugando", "juegan", "jugado"],
        correct: "jugar",
        explanation: "Typisches Kinderverhalten: 'suelen jugar' (pflegen zu spielen). Diese intensive Spielzeit in Ferien ist gesunde Kindheitsentwicklung ohne Schulstress."
      },
      {
        id: "soler_9",
        question: "No suelo _____ alcohol - prefiero bebidas sin alcohol naturales.",
        translation: "Ich pflege keinen Alkohol zu trinken - ich bevorzuge natürliche alkoholfreie Getränke.",
        options: ["beber", "bebiendo", "bebo", "bebido"],
        correct: "beber",
        explanation: "Negierte Gewohnheit: 'no suelo beber' (pflege nicht zu trinken). Diese alkoholfreie Lebensweise ist gesunde persönliche Entscheidung."
      },
      {
        id: "soler_10",
        question: "Mi jefe suele _____ reuniones largas los lunes por la mañana.",
        translation: "Mein Chef pflegt montags morgens lange Meetings abzuhalten.",
        options: ["tener", "teniendo", "tiene", "tenido"],
        correct: "tener",
        explanation: "Für typisches Verhalten: 'suele tener' (pflegt zu haben). Diese Montagsmorgen-Meeting-Routine strukturiert Wochenstart in Firma."
      },
      {
        id: "soler_11",
        question: "¿Sueles _____ al cine frecuentemente o prefieres ver películas en casa?",
        translation: "Pflegst du häufig ins Kino zu gehen oder siehst du Filme lieber zu Hause?",
        options: ["ir", "yendo", "vas", "ido"],
        correct: "ir",
        explanation: "Frage nach Freizeitgewohnheit: '¿sueles ir?' (pflegst du zu gehen?). Diese Präferenzfrage zwischen Kino und Heimkino erkundet Unterhaltungsgewohnheiten."
      },
      {
        id: "soler_12",
        question: "Solía _____ más cuando era joven - ahora estoy ocupado siempre.",
        translation: "Ich pflegte zu lesen, als ich jung war - jetzt bin ich immer beschäftigt.",
        options: ["leer", "leyendo", "leo", "leído"],
        correct: "leer",
        explanation: "IMPERFECTO 'solía' für FRÜHERE Gewohnheit: 'solía leer' (pflegte zu lesen). Diese verlorene Lesegewohnheit zeigt, wie Lebensumstände Hobbys verdrängen können."
      },
      {
        id: "soler_13",
        question: "Ellos suelen _____ tarde a clase - siempre llegan después.",
        translation: "Sie pflegen spät zum Unterricht zu kommen - sie kommen immer danach an.",
        options: ["llegar", "llegando", "llegan", "llegado"],
        correct: "llegar",
        explanation: "Negative Gewohnheit: 'suelen llegar tarde' (pflegen spät zu kommen). Diese chronische Unpünktlichkeit kann akademische oder soziale Konsequenzen haben."
      },
      {
        id: "soler_14",
        question: "Suelo _____ una siesta corta después de almorzar cada día laborable.",
        translation: "Ich pflege jeden Werktag nach dem Mittagessen ein kurzes Nickerchen zu machen.",
        options: ["echarme", "echándome", "me echo", "echado"],
        correct: "echarme",
        explanation: "Reflexiv: 'suelo echarme una siesta' (pflege Siesta zu halten). Diese mediterrane Mittagsruhe-Tradition ist erholsam und steigert Nachmittagsproduktivität."
      },
      {
        id: "soler_15",
        question: "No solemos _____ televisión durante la semana - solo los fines.",
        translation: "Wir pflegen während der Woche kein Fernsehen zu schauen - nur an Wochenenden.",
        options: ["ver", "viendo", "vemos", "visto"],
        correct: "ver",
        explanation: "Eingeschränkte Gewohnheit: 'no solemos ver' (pflegen nicht zu sehen). Diese wochentägliche TV-Abstinenz schafft mehr Zeit für produktive Aktivitäten."
      }
    ]
  }
};

export default part16Categories;
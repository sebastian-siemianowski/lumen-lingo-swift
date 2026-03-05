
/**
 * GERMAN → ENGLISH GRAMMAR - PART 7
 * 3 categories, 15 questions each
 */

import { Clock, Repeat, TrendingUp } from "lucide-react";

export const part7Categories = {
  time_expressions: {
    name: "Time Expressions",
    description: "Zeitausdrücke - since, for, ago, yet, already richtig verwenden",
    icon: Clock,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "time_1",
        question: "I have lived here _____ five years without moving anywhere else.",
        translation: "Ich wohne seit fünf Jahren hier, ohne irgendwohin anders zu ziehen.",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Für ZEITDAUER nutzen wir 'for': 'for five years' (seit fünf Jahren/fünf Jahre lang). Diese fünfjährige Wohndauer zeigt Sesshaftigkeit."
      },
      {
        id: "time_2",
        question: "She has worked at this company _____ 2018 continuously without break.",
        translation: "Sie arbeitet seit 2018 ohne Pause kontinuierlich in dieser Firma.",
        options: ["since", "for", "ago", "in"],
        correct: "since",
        explanation: "Für ZEITPUNKT nutzen wir 'since': 'since 2018' (seit 2018). Diese sechsjährige Firmenzugehörigkeit zeigt Loyalität oder Zufriedenheit."
      },
      {
        id: "time_3",
        question: "I met him three years _____ at a conference in Berlin, Germany.",
        translation: "Ich traf ihn vor drei Jahren auf einer Konferenz in Berlin, Deutschland.",
        options: ["ago", "before", "since", "for"],
        correct: "ago",
        explanation: "Für VOR (Zeitpunkt) nutzen wir 'ago': 'three years ago' (vor drei Jahren). Mit Simple Past. Diese Berliner Konferenz-Begegnung ist Ausgangspunkt."
      },
      {
        id: "time_4",
        question: "Have you finished your homework _____? It's getting very late now.",
        translation: "Hast du deine Hausaufgaben schon fertig? Es wird jetzt sehr spät.",
        options: ["yet", "already", "still", "ago"],
        correct: "yet",
        explanation: "In FRAGEN nutzen wir 'yet' (schon): 'finished yet?' Diese Hausaufgaben-Frage bei später Uhrzeit zeigt Besorgnis."
      },
      {
        id: "time_5",
        question: "I have _____ seen that movie - I watched it last week actually.",
        translation: "Ich habe diesen Film schon gesehen - ich schaute ihn tatsächlich letzte Woche.",
        options: ["already", "yet", "still", "ago"],
        correct: "already",
        explanation: "Für BEREITS in positiven Sätzen: 'already seen'. Diese Information verhindert doppelten Filmbesuch."
      },
      {
        id: "time_6",
        question: "They are _____ waiting for the bus after thirty minutes standing.",
        translation: "Sie warten nach dreißig Minuten Stehen noch auf den Bus.",
        options: ["still", "yet", "already", "ago"],
        correct: "still",
        explanation: "Für NOCH/IMMER NOCH nutzen wir 'still': 'still waiting'. Diese halbstündige Wartezeit ist frustrierend lang."
      },
      {
        id: "time_7",
        question: "I haven't eaten anything _____ - I'm getting really hungry now.",
        translation: "Ich habe noch nichts gegessen - ich werde jetzt wirklich hungrig.",
        options: ["yet", "already", "still", "ago"],
        correct: "yet",
        explanation: "In NEGATIVEN Sätzen nutzen wir 'yet' (noch): 'haven't eaten yet'. Dieser leere Magen verlangt nach baldiger Mahlzeit."
      },
      {
        id: "time_8",
        question: "How long have you been studying English _____ you started learning?",
        translation: "Wie lange lernst du schon Englisch, seit du angefangen hast zu lernen?",
        options: ["since", "for", "ago", "until"],
        correct: "since",
        explanation: "Nach ZEITPUNKT-Frage: 'since you started' (seit du begannst). Diese Lernzeit-Frage misst Spracherfahrung."
      },
      {
        id: "time_9",
        question: "We moved to this house two months _____ in early spring season.",
        translation: "Wir zogen vor zwei Monaten im frühen Frühling in dieses Haus.",
        options: ["ago", "before", "since", "for"],
        correct: "ago",
        explanation: "Für VOR mit Zeitangabe: 'two months ago'. Dieser relativ frische Umzug erklärt vielleicht noch nicht vollständige Einrichtung."
      },
      {
        id: "time_10",
        question: "Is dinner ready _____? We're all very hungry and waiting eagerly.",
        translation: "Ist das Abendessen schon fertig? Wir sind alle sehr hungrig und warten ungeduldig.",
        options: ["yet", "already", "still", "ago"],
        correct: "yet",
        explanation: "In Fragen: 'ready yet?' (schon fertig?). Dieser gemeinsame Hunger macht Warten auf Essen unangenehm."
      },
      {
        id: "time_11",
        question: "I've been waiting here _____ over an hour for you to arrive!",
        translation: "Ich warte hier seit über einer Stunde darauf, dass du ankommst!",
        options: ["for", "since", "ago", "during"],
        correct: "for",
        explanation: "Für DAUER: 'for over an hour'. Diese lange Wartezeit ist frustrierend und zeigt möglicherweise Respektmangel."
      },
      {
        id: "time_12",
        question: "The train has _____ left - we missed it by just two minutes!",
        translation: "Der Zug ist schon abgefahren - wir verpassten ihn um nur zwei Minuten!",
        options: ["already", "yet", "still", "ago"],
        correct: "already",
        explanation: "Für SCHON (unerwartet früh): 'already left'. Diese knappe Zugverfehlung ist besonders ärgerlich."
      },
      {
        id: "time_13",
        question: "I haven't heard from her _____ she moved to Australia last year.",
        translation: "Ich habe seit ihrem Umzug nach Australien letztes Jahr nichts von ihr gehört.",
        options: ["since", "for", "ago", "when"],
        correct: "since",
        explanation: "Für SEIT Ereignis: 'since she moved'. Diese Kommunikationslücke seit Australien-Umzug ist bedauerlich."
      },
      {
        id: "time_14",
        question: "Are you _____ working on that project? I thought you finished it!",
        translation: "Arbeitest du noch an jenem Projekt? Ich dachte, du hättest es beendet!",
        options: ["still", "yet", "already", "ago"],
        correct: "still",
        explanation: "Für NOCH (überraschte Frage): 'still working?' Diese unerwartete Projekt-Fortsetzung zeigt Komplexität oder Verzögerungen."
      },
      {
        id: "time_15",
        question: "I saw that movie a long time _____ when I was much younger.",
        translation: "Ich sah diesen Film vor langer Zeit, als ich viel jünger war.",
        options: ["ago", "before", "since", "for"],
        correct: "ago",
        explanation: "Für VOR LANGER ZEIT: 'long time ago'. Diese ferne Filmerinnerung aus Jugend ist nostalgisch."
      }
    ]
  },

  used_to_vs_would: {
    name: "Used to vs Would",
    description: "Vergangene Gewohnheiten - used to und would unterscheiden",
    icon: Repeat,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "used_1",
        question: "I _____ play football every weekend when I was young and energetic.",
        translation: "Ich spielte früher jedes Wochenende Fußball, als ich jung und energiegeladen war.",
        options: ["used to", "would", "use to", "am used to"],
        correct: "used to",
        explanation: "Für VERGANGENE Gewohnheit nutzen wir 'used to': 'used to play' (pflegte zu spielen/spielte früher). Diese Jugend-Sport-Routine ist nun vorbei."
      },
      {
        id: "used_2",
        question: "She _____ visit her grandparents every summer during school holidays.",
        translation: "Sie pflegte jeden Sommer während der Schulferien ihre Großeltern zu besuchen.",
        options: ["would", "used to", "use to", "is used to"],
        correct: "would",
        explanation: "Für WIEDERHOLTE Handlung Vergangenheit: 'would' oder 'used to' beide möglich. Diese Sommer-Großeltern-Besuche sind schöne Kindheitserinnerung."
      },
      {
        id: "used_3",
        question: "There _____ be a beautiful old cinema here before they demolished it.",
        translation: "Hier war früher ein schönes altes Kino, bevor sie es abrissen.",
        options: ["used to", "would", "use to", "was used to"],
        correct: "used to",
        explanation: "Für VERGANGENEN Zustand nur 'used to': 'there used to be'. Mit 'would' unmöglich. Dieser Kino-Abriss ist bedauerlicher Kulturverlust."
      },
      {
        id: "used_4",
        question: "My father _____ tell us stories before bedtime every single night.",
        translation: "Mein Vater erzählte uns jede einzelne Nacht vor dem Schlafengehen Geschichten.",
        options: ["would", "used to", "use to", "is used to"],
        correct: "would",
        explanation: "Für wiederholte Handlung: 'would tell' oder 'used to tell'. Diese Gutenacht-Geschichten-Tradition ist warme Kindheitserinnerung."
      },
      {
        id: "used_5",
        question: "I _____ getting up early - I do it every day for work now.",
        translation: "Ich bin daran gewöhnt, früh aufzustehen - ich mache es jetzt jeden Tag für Arbeit.",
        options: ["am used to", "used to", "would", "use to"],
        correct: "am used to",
        explanation: "'Be used to' + Gerund bedeutet GEWÖHNT SEIN AN (Gegenwart): 'am used to getting up'. Diese Früh aufsteh-Gewohnheit ist etablierte Routine."
      },
      {
        id: "used_6",
        question: "She _____ have long hair, but she cut it all off last month.",
        translation: "Sie hatte früher lange Haare, aber sie schnitt sie letzten Monat alle ab.",
        options: ["used to", "would", "use to", "is used to"],
        correct: "used to",
        explanation: "Für vergangenen ZUSTAND: nur 'used to have' möglich. Dieser drastische Haarschnitt letzten Monat ist große optische Veränderung."
      },
      {
        id: "used_7",
        question: "We _____ go camping every summer in the mountains together as family.",
        translation: "Wir gingen früher jeden Sommer zusammen als Familie in den Bergen campen.",
        options: ["used to", "would", "both correct", "use to"],
        correct: "both correct",
        explanation: "Wiederholte Handlung: 'used to go' ODER 'would go' beide korrekt. Diese Familien-Camping-Tradition in Bergen ist schöne Erinnerung."
      },
      {
        id: "used_8",
        question: "He _____ living in a big noisy city after years in quiet countryside.",
        translation: "Er ist nach Jahren in ruhiger Landschaft daran gewöhnt, in großer lauter Stadt zu leben.",
        options: ["is used to", "used to", "would", "use to"],
        correct: "is used to",
        explanation: "'Be used to' für JETZIGE Gewöhnung: 'is used to living'. Diese Stadt-Anpassung nach Landleben zeigt Flexibilität."
      },
      {
        id: "used_9",
        question: "I _____ believe in ghosts when I was a child, but not anymore.",
        translation: "Ich glaubte als Kind an Geister, aber nicht mehr.",
        options: ["used to", "would", "use to", "am used to"],
        correct: "used to",
        explanation: "Für vergangene EINSTELLUNG: nur 'used to believe'. Mit 'would' unmöglich. Dieser Kinderglaube an Geister ist normale Phantasie."
      },
      {
        id: "used_10",
        question: "They _____ spend hours talking on the phone every evening together.",
        translation: "Sie verbrachten früher jeden Abend zusammen stundenlang telefonierend.",
        options: ["would", "used to", "both correct", "use to"],
        correct: "both correct",
        explanation: "Wiederholte Handlung: beide korrekt. Diese Telefon-Marathon-Gespräche sind typisch für enge Freundschaften oder Beziehungen."
      },
      {
        id: "used_11",
        question: "I _____ to working from home now after the pandemic changes.",
        translation: "Ich habe mich nach den Pandemie-Änderungen jetzt an Heimarbeit gewöhnt.",
        options: ["got used", "used", "would get", "use"],
        correct: "got used",
        explanation: "'Get used to' bedeutet SICH GEWÖHNEN: 'got used to working'. Diese Homeoffice-Anpassung ist pandemiebedingte Veränderung."
      },
      {
        id: "used_12",
        question: "She _____ be very shy, but now she's confident and outgoing.",
        translation: "Sie war früher sehr schüchtern, aber jetzt ist sie selbstbewusst und kontaktfreudig.",
        options: ["used to", "would", "use to", "is used to"],
        correct: "used to",
        explanation: "Für vergangene EIGENSCHAFT: nur 'used to be'. Diese Persönlichkeitsentwicklung von Schüchternheit zu Selbstbewusstsein ist bemerkenswert."
      },
      {
        id: "used_13",
        question: "We _____ take long walks in the forest every Sunday morning ritual.",
        translation: "Wir machten früher jeden Sonntagmorgen als Ritual lange Waldspaziergänge.",
        options: ["would", "used to", "both correct", "use to"],
        correct: "both correct",
        explanation: "Wiederholte Handlung: beide korrekt. Diese Wald-Spaziergang-Tradition war gesunde Wochenend-Familienaktivität."
      },
      {
        id: "used_14",
        question: "I'm _____ to eating spicy food now after living in India.",
        translation: "Ich bin nach dem Leben in Indien jetzt daran gewöhnt, scharfes Essen zu essen.",
        options: ["used", "use", "using", "uses"],
        correct: "used",
        explanation: "'Be used to' für Gewöhnung: 'I'm used to eating'. Diese Schärfe-Toleranz ist Resultat indischer Küchen-Erfahrung."
      },
      {
        id: "used_15",
        question: "He _____ own a small bookstore in the city center years ago.",
        translation: "Er besaß vor Jahren einen kleinen Buchladen im Stadtzentrum.",
        options: ["used to", "would", "use to", "is used to"],
        correct: "used to",
        explanation: "Für vergangenen BESITZ: nur 'used to own'. Mit 'would' unmöglich. Dieser frühere Buchladenbesitz ist vergangene Geschäftsphase."
      }
    ]
  },

  quantifiers: {
    name: "Quantifiers",
    description: "Mengenangaben - much, many, few, little richtig unterscheiden",
    icon: TrendingUp,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "quant_1",
        question: "There isn't _____ milk left in the fridge - we need to buy more.",
        translation: "Es ist nicht viel Milch im Kühlschrank übrig - wir müssen mehr kaufen.",
        options: ["much", "many", "a lot", "few"],
        correct: "much",
        explanation: "Für UNZÄHLBARES in Negativ/Frage: 'much' (viel): 'much milk'. Diese Milchknappheit erfordert Nachkauf."
      },
      {
        id: "quant_2",
        question: "How _____ people are coming to the party tomorrow evening exactly?",
        translation: "Wie viele Leute kommen morgen Abend genau zur Party?",
        options: ["many", "much", "lot", "little"],
        correct: "many",
        explanation: "Für ZÄHLBARES: 'how many people' (wie viele Leute). Diese Gästezahl-Frage ist wichtig für Party-Planung und Vorbereitung."
      },
      {
        id: "quant_3",
        question: "I have very _____ time to finish this work before the deadline.",
        translation: "Ich habe sehr wenig Zeit, diese Arbeit vor der Deadline zu beenden.",
        options: ["little", "few", "less", "least"],
        correct: "little",
        explanation: "Für WENIG bei Unzählbarem: 'little time' (wenig Zeit). Dieser Zeitdruck vor Deadline erfordert effizientes Arbeiten."
      },
      {
        id: "quant_4",
        question: "There are only a _____ apples left - not enough for everyone here.",
        translation: "Es sind nur wenige Äpfel übrig - nicht genug für alle hier.",
        options: ["few", "little", "less", "least"],
        correct: "few",
        explanation: "Für WENIGE bei Zählbarem: 'a few apples' (wenige Äpfel). Diese Apfelknappheit reicht nicht für Gruppenbedarf."
      },
      {
        id: "quant_5",
        question: "She doesn't have _____ friends because she just moved to this city.",
        translation: "Sie hat nicht viele Freunde, weil sie gerade in diese Stadt gezogen ist.",
        options: ["many", "much", "a lot", "little"],
        correct: "many",
        explanation: "Negativ mit Zählbarem: 'many friends'. Diese soziale Isolation nach Umzug ist temporäre Herausforderung."
      },
      {
        id: "quant_6",
        question: "There's _____ of food at the buffet - you can eat as much as you want!",
        translation: "Es gibt viel Essen am Buffet - du kannst so viel essen, wie du willst!",
        options: ["plenty", "many", "few", "little"],
        correct: "plenty",
        explanation: "Für REICHLICH: 'plenty of' (viel/reichlich): mit Zählbar und Unzählbar. Dieses üppige Buffet lädt zu unbegrenztem Genuss ein."
      },
      {
        id: "quant_7",
        question: "I need _____ information about the course before I can register officially.",
        translation: "Ich brauche mehr Information über den Kurs, bevor ich mich offiziell anmelden kann.",
        options: ["more", "much", "many", "most"],
        correct: "more",
        explanation: "Für MEHR bei Unzählbarem: 'more information'. Diese zusätzliche Kursinformation ist nötig für informierte Entscheidung."
      },
      {
        id: "quant_8",
        question: "Very _____ students passed the extremely difficult final examination.",
        translation: "Sehr wenige Studenten bestanden die extrem schwere Abschlussprüfung.",
        options: ["few", "little", "less", "least"],
        correct: "few",
        explanation: "Für SEHR WENIGE: 'very few students'. Diese niedrige Besteherquote zeigt außergewöhnliche Prüfungsschwierigkeit."
      },
      {
        id: "quant_9",
        question: "He has _____ patience with difficult people and annoying situations.",
        translation: "Er hat wenig Geduld mit schwierigen Menschen und nervigen Situationen.",
        options: ["little", "few", "less", "least"],
        correct: "little",
        explanation: "Für WENIG bei Unzählbarem: 'little patience'. Diese mangelnde Geduld kann zu Konflikten in herausfordernden Situationen führen."
      },
      {
        id: "quant_10",
        question: "There are _____ books on this topic in our library collection.",
        translation: "Es gibt mehrere Bücher zu diesem Thema in unserer Bibliothekssammlung.",
        options: ["several", "much", "little", "less"],
        correct: "several",
        explanation: "Für MEHRERE/EINIGE: 'several books' (mehrere Bücher). Nur bei Zählbarem. Diese Buchauswahl bietet verschiedene Perspektiven zum Thema."
      },
      {
        id: "quant_11",
        question: "I'd like _____ sugar in my coffee, please - just one spoon.",
        translation: "Ich hätte gerne etwas Zucker in meinem Kaffee, bitte - nur einen Löffel.",
        options: ["some", "any", "many", "few"],
        correct: "some",
        explanation: "In BITTEN nutzen wir 'some' (etwas): 'some sugar'. Diese höfliche Zucker-Bitte ist typische Kaffee-Anpassung."
      },
      {
        id: "quant_12",
        question: "Do you have _____ questions about the lesson we covered today?",
        translation: "Hast du irgendwelche Fragen über die Lektion, die wir heute durchnahmen?",
        options: ["any", "some", "much", "little"],
        correct: "any",
        explanation: "In FRAGEN nutzen wir 'any' (irgendwelche): 'any questions'. Diese Nachfrage nach Verständnisfragen ist gute Lehrpraxis."
      },
      {
        id: "quant_13",
        question: "She has _____ experience with this type of complex technical work.",
        translation: "Sie hat viel Erfahrung mit dieser Art komplexer technischer Arbeit.",
        options: ["a lot of", "many", "few", "little"],
        correct: "a lot of",
        explanation: "Für VIEL (positiv): 'a lot of' mit Zählbar und Unzählbar. Diese umfangreiche Arbeitserfahrung ist wertvolles Fachwissen."
      },
      {
        id: "quant_14",
        question: "There's _____ point in arguing about this anymore - let's move on.",
        translation: "Es hat wenig Sinn, hierüber noch zu streiten - lass uns weitermachen.",
        options: ["little", "few", "less", "least"],
        correct: "little",
        explanation: "Für WENIG Sinn: 'little point' (wenig Zweck). Dieser Vorschlag, Streit zu beenden, ist konstruktiver Konfliktlösungsansatz."
      },
      {
        id: "quant_15",
        question: "_____ children enjoy eating vegetables - most prefer sweets and candy.",
        translation: "Wenige Kinder genießen Gemüse essen - die meisten bevorzugen Süßigkeiten.",
        options: ["Few", "Little", "Less", "Least"],
        correct: "Few",
        explanation: "Für WENIGE (Zählbar): 'few children'. Diese kindliche Gemüse-Abneigung zugunsten Süßem ist typisches Essverhalten."
      }
    ]
  }
};

export default part7Categories;

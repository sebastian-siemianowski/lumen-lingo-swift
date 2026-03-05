/**
 * GERMAN → ENGLISH GRAMMAR - PART 5
 * 4 categories, 15 questions each
 */

import { Link2, Users, Merge, Shield } from "lucide-react";

export const part5Categories = {
  relative_pronouns: {
    name: "Relative Pronouns",
    description: "Relativpronomen - who, which, that, whose richtig einsetzen",
    icon: Link2,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "rel_1",
        question: "The woman _____ lives next door is a famous musician and composer.",
        translation: "Die Frau, die nebenan wohnt, ist eine berühmte Musikerin und Komponistin.",
        options: ["who", "which", "whose", "whom"],
        correct: "who",
        explanation: "Für PERSONEN (Subjekt) nutzen wir 'who': 'woman who lives'. Diese talentierte Nachbarin ist interessante Person in unmittelbarer Nähe."
      },
      {
        id: "rel_2",
        question: "The book _____ I'm reading is absolutely fascinating and gripping.",
        translation: "Das Buch, das ich lese, ist absolut faszinierend und fesselnd.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Für DINGE nutzen wir 'that' oder 'which': 'book that I'm reading'. 'That' ist umgangssprachlicher. Dieses fesselnde Buch ist schwer wegzulegen."
      },
      {
        id: "rel_3",
        question: "I met a girl _____ father works at the same company as mine.",
        translation: "Ich traf ein Mädchen, dessen Vater in derselben Firma wie ich arbeitet.",
        options: ["whose", "who", "which", "that"],
        correct: "whose",
        explanation: "Für BESITZ nutzen wir 'whose': 'girl whose father' (deren Vater). Diese Arbeitsplatz-Verbindung zwischen Vätern ist interessante Koinzidenz."
      },
      {
        id: "rel_4",
        question: "The restaurant _____ we had dinner last night was excellent and cozy.",
        translation: "Das Restaurant, in dem wir gestern Abend zu Abend aßen, war exzellent und gemütlich.",
        options: ["where", "which", "that", "who"],
        correct: "where",
        explanation: "Für ORT nutzen wir 'where': 'restaurant where we had dinner'. Diese positive Restaurant-Erfahrung gestern macht es zur Empfehlung."
      },
      {
        id: "rel_5",
        question: "This is the man _____ I was telling you about last week.",
        translation: "Das ist der Mann, über den ich dir letzte Woche erzählte.",
        options: ["who", "whom", "which", "whose"],
        correct: "who",
        explanation: "Nach Präposition am Satzende: 'who' möglich (umgangssprachlich). Formell 'about whom'. Diese Person aus letztwöchiger Erzählung ist nun real begegnet."
      },
      {
        id: "rel_6",
        question: "The day _____ we first met will always remain special in my memory.",
        translation: "Der Tag, an dem wir uns zuerst trafen, wird immer speziell in meiner Erinnerung bleiben.",
        options: ["when", "which", "that", "where"],
        correct: "when",
        explanation: "Für ZEITPUNKT nutzen wir 'when': 'day when we met'. Dieser Kennenlern-Tag hat emotionale Bedeutung und bleibt unvergesslich."
      },
      {
        id: "rel_7",
        question: "I don't like people _____ talk loudly in public places like libraries.",
        translation: "Ich mag keine Leute, die an öffentlichen Orten wie Bibliotheken laut sprechen.",
        options: ["who", "which", "whose", "whom"],
        correct: "who",
        explanation: "Für Personen: 'people who talk' (Leute, die sprechen). Diese Abneigung gegen lautes Sprechen in ruhigen Orten ist berechtigte Störungsempfindlichkeit."
      },
      {
        id: "rel_8",
        question: "The house _____ windows are broken has been empty for years now.",
        translation: "Das Haus, dessen Fenster zerbrochen sind, steht seit Jahren leer.",
        options: ["whose", "which", "that", "who"],
        correct: "whose",
        explanation: "Für Besitz bei Dingen: 'house whose windows' (Haus, dessen Fenster). Dieses verlassene Haus mit kaputten Fenstern ist trauriger Anblick."
      },
      {
        id: "rel_9",
        question: "That's the reason _____ I couldn't come to your party last Saturday.",
        translation: "Das ist der Grund, warum ich nicht zu deiner Party letzten Samstag kommen konnte.",
        options: ["why", "which", "that", "when"],
        correct: "why",
        explanation: "Für GRUND nutzen wir 'why': 'reason why I couldn't'. Diese Begründung für Party-Absenz klärt Missverständnis auf."
      },
      {
        id: "rel_10",
        question: "The movie _____ we watched yesterday was boring and too long.",
        translation: "Der Film, den wir gestern schauten, war langweilig und zu lang.",
        options: ["that", "who", "whose", "whom"],
        correct: "that",
        explanation: "Für OBJEKT (Ding): 'movie that we watched'. 'That' kann auch wegfallen. Dieser langweilige Film war enttäuschende Zeitverschwendung."
      },
      {
        id: "rel_11",
        question: "She's the teacher _____ helped me pass my difficult final exams.",
        translation: "Sie ist die Lehrerin, die mir half, meine schweren Abschlussprüfungen zu bestehen.",
        options: ["who", "which", "whose", "whom"],
        correct: "who",
        explanation: "Für Person als Subjekt: 'teacher who helped'. Diese Lehrerhilfe war entscheidend für Prüfungserfolg und verdient Dankbarkeit."
      },
      {
        id: "rel_12",
        question: "This is the car _____ I've always wanted to own since childhood.",
        translation: "Das ist das Auto, das ich seit Kindheit immer besitzen wollte.",
        options: ["that", "who", "whose", "what"],
        correct: "that",
        explanation: "Objekt-Relativsatz: 'car that I've wanted'. Dieser Kindheitstraum-Auto-Besitz ist erfüllter Lebenswunsch."
      },
      {
        id: "rel_13",
        question: "I'll never forget the summer _____ we traveled through Europe together.",
        translation: "Ich werde nie den Sommer vergessen, in dem wir zusammen durch Europa reisten.",
        options: ["when", "which", "that", "where"],
        correct: "when",
        explanation: "Für Zeit: 'summer when we traveled'. Diese gemeinsame Europareise ist unvergessliche Erinnerung voller Abenteuer."
      },
      {
        id: "rel_14",
        question: "The children _____ toys are scattered everywhere need to clean up now.",
        translation: "Die Kinder, deren Spielzeug überall verstreut ist, müssen jetzt aufräumen.",
        options: ["whose", "who", "which", "that"],
        correct: "whose",
        explanation: "Für Besitz (Personen): 'children whose toys' (Kinder, deren Spielzeug). Diese Aufräum-Aufforderung ist elterliche Ordnungserziehung."
      },
      {
        id: "rel_15",
        question: "That was the year _____ everything changed completely in my life.",
        translation: "Das war das Jahr, in dem sich alles in meinem Leben vollständig veränderte.",
        options: ["when", "which", "that", "where"],
        correct: "when",
        explanation: "Für Jahr als Zeitpunkt: 'year when everything changed'. Dieses lebensverändernde Jahr markiert bedeutenden Wendepunkt in persönlicher Geschichte."
      }
    ]
  },

  conjunctions_advanced: {
    name: "Advanced Conjunctions",
    description: "Konjunktionen - although, unless, whereas richtig verwenden",
    icon: Merge,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "conj_1",
        question: "_____ it was raining heavily, we decided to go hiking in the mountains.",
        translation: "Obwohl es stark regnete, beschlossen wir, in den Bergen wandern zu gehen.",
        options: ["Although", "Because", "If", "When"],
        correct: "Although",
        explanation: "Für OBWOHL nutzen wir 'although': zeigt KONTRAST. Diese Wanderentscheidung trotz Starkregen ist mutig oder zeigt Wetterfestigkeit der Gruppe."
      },
      {
        id: "conj_2",
        question: "I won't go to the party _____ you come with me as well.",
        translation: "Ich gehe nicht zur Party, es sei denn du kommst auch mit mir.",
        options: ["unless", "if", "because", "although"],
        correct: "unless",
        explanation: "Für ES SEI DENN nutzen wir 'unless' (= if not): Diese Bedingung für Partyteilnahme zeigt Abhängigkeit von deiner Gesellschaft."
      },
      {
        id: "conj_3",
        question: "She likes coffee, _____ her sister prefers tea in the morning.",
        translation: "Sie mag Kaffee, wohingegen ihre Schwester morgens Tee bevorzugt.",
        options: ["whereas", "because", "although", "if"],
        correct: "whereas",
        explanation: "Für WOHINGEGEN nutzen wir 'whereas': zeigt UNTERSCHIED zwischen zwei Situationen. Diese Getränkepräferenz-Differenz ist interessanter Geschwisterunterschied."
      },
      {
        id: "conj_4",
        question: "I'll call you _____ soon _____ I arrive at the hotel safely.",
        translation: "Ich rufe dich an, sobald ich sicher im Hotel ankomme.",
        options: ["as / as", "so / as", "as / so", "so / so"],
        correct: "as / as",
        explanation: "Für SOBALD nutzen wir 'as soon as': Diese Anruf-Zusage bei Hotelankunft beruhigt wartende Person über sichere Reise."
      },
      {
        id: "conj_5",
        question: "He studied hard _____ he could pass the difficult entrance exam.",
        translation: "Er lernte hart, damit er die schwere Aufnahmeprüfung bestehen konnte.",
        options: ["so that", "so", "because", "although"],
        correct: "so that",
        explanation: "Für DAMIT/UM ZU nutzen wir 'so that': zeigt ZWECK. Diese intensive Lernarbeit hatte klares Ziel der Prüfungsbesteigung."
      },
      {
        id: "conj_6",
        question: "_____ being tired, she continued working on the important project.",
        translation: "Trotz Müdigkeit arbeitete sie weiter am wichtigen Projekt.",
        options: ["Despite", "Although", "Because", "If"],
        correct: "Despite",
        explanation: "Für TROTZ + Nomen/Gerund nutzen wir 'despite': 'despite being tired'. Diese Ausdauer trotz Erschöpfung zeigt Engagement für Projekt."
      },
      {
        id: "conj_7",
        question: "I like both tea _____ coffee - I can drink either one happily.",
        translation: "Ich mag sowohl Tee als auch Kaffee - ich kann beides glücklich trinken.",
        options: ["and", "or", "but", "nor"],
        correct: "and",
        explanation: "Für SOWOHL...ALS AUCH nutzen wir 'both...and': Diese Flexibilität bei Getränken macht Morgenwahl einfacher."
      },
      {
        id: "conj_8",
        question: "Neither John _____ his brother came to the family gathering yesterday.",
        translation: "Weder John noch sein Bruder kamen gestern zum Familientreffen.",
        options: ["nor", "or", "and", "but"],
        correct: "nor",
        explanation: "Für WEDER...NOCH nutzen wir 'neither...nor': Diese doppelte Absenz beider Brüder ist enttäuschend für Familientreffen."
      },
      {
        id: "conj_9",
        question: "He's not only intelligent _____ also very kind and generous person.",
        translation: "Er ist nicht nur intelligent, sondern auch eine sehr freundliche und großzügige Person.",
        options: ["but", "and", "or", "nor"],
        correct: "but",
        explanation: "Für NICHT NUR...SONDERN AUCH: 'not only...but also'. Diese Kombination aus Intelligenz und Freundlichkeit ist seltene Charakterstärke."
      },
      {
        id: "conj_10",
        question: "I'll go swimming _____ the weather is nice and sunny tomorrow.",
        translation: "Ich gehe schwimmen, vorausgesetzt das Wetter ist morgen schön und sonnig.",
        options: ["provided", "unless", "although", "because"],
        correct: "provided",
        explanation: "Für VORAUSGESETZT nutzen wir 'provided' (auch 'providing'): Diese Schwimm-Bedingung hängt von Wetter ab für angenehmes Erlebnis."
      },
      {
        id: "conj_11",
        question: "She arrived late _____ the traffic was terrible on the highway.",
        translation: "Sie kam zu spät an, weil der Verkehr auf der Autobahn schrecklich war.",
        options: ["because", "although", "unless", "whereas"],
        correct: "because",
        explanation: "Für WEIL nutzen wir 'because': zeigt GRUND. Dieser Verkehrsstau ist häufige Ursache für Verspätungen im urbanen Raum."
      },
      {
        id: "conj_12",
        question: "I would have come to help _____ you had asked me earlier.",
        translation: "Ich wäre gekommen zu helfen, wenn du mich früher gefragt hättest.",
        options: ["if", "unless", "although", "whereas"],
        correct: "if",
        explanation: "Für IRREALE BEDINGUNG Vergangenheit: 'would have' + 'if' + 'had asked'. Diese verpasste Hilfsgelegenheit bedauert zu späte Information."
      },
      {
        id: "conj_13",
        question: "You can borrow my car _____ you promise to drive carefully and safely.",
        translation: "Du kannst mein Auto leihen, solange du versprichst, vorsichtig und sicher zu fahren.",
        options: ["as long as", "unless", "although", "whereas"],
        correct: "as long as",
        explanation: "Für SOLANGE/VORAUSGESETZT nutzen wir 'as long as': Diese Auto-Leih-Bedingung ist Sicherheitsversprechen für wertvolles Eigentum."
      },
      {
        id: "conj_14",
        question: "_____ I understand your point, I still disagree with your conclusion.",
        translation: "Obwohl ich deinen Punkt verstehe, bin ich immer noch nicht mit deiner Schlussfolgerung einverstanden.",
        options: ["While", "Because", "If", "When"],
        correct: "While",
        explanation: "Für WÄHREND/OBWOHL nutzen wir 'while': zeigt Kontrast. Dieses Verständnis ohne Zustimmung ist differenzierte Diskussionsposition."
      },
      {
        id: "conj_15",
        question: "He worked hard _____ he was very tired from the long day.",
        translation: "Er arbeitete hart, obwohl er von dem langen Tag sehr müde war.",
        options: ["even though", "because", "so that", "unless"],
        correct: "even though",
        explanation: "Für OBWOHL (verstärkt) nutzen wir 'even though': Diese Arbeitsausdauer trotz Müdigkeit zeigt starkes Pflichtbewusstsein oder Deadline-Druck."
      }
    ]
  },

  passive_voice: {
    name: "Passive Voice",
    description: "Passiv - Bildung und Verwendung in verschiedenen Zeiten",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "pass_1",
        question: "This book _____ by millions of people worldwide every year.",
        translation: "Dieses Buch wird jedes Jahr weltweit von Millionen Menschen gelesen.",
        options: ["is read", "reads", "is reading", "was read"],
        correct: "is read",
        explanation: "Passiv Präsens: 'is' + Partizip: 'is read' (wird gelesen). Diese Millionen-Leserschaft zeigt Popularität und kulturellen Einfluss des Buches."
      },
      {
        id: "pass_2",
        question: "The new hospital _____ next year in the city center area.",
        translation: "Das neue Krankenhaus wird nächstes Jahr im Stadtzentrumsgebiet gebaut.",
        options: ["will be built", "will build", "is built", "was built"],
        correct: "will be built",
        explanation: "Passiv Zukunft: 'will be' + Partizip: 'will be built'. Dieser Krankenhausbau im Zentrum verbessert medizinische Versorgung für Stadtbewohner."
      },
      {
        id: "pass_3",
        question: "The car _____ yesterday at the mechanic's garage downtown.",
        translation: "Das Auto wurde gestern in der Werkstatt in der Innenstadt repariert.",
        options: ["was repaired", "is repaired", "repaired", "has been repaired"],
        correct: "was repaired",
        explanation: "Passiv Vergangenheit: 'was' + Partizip: 'was repaired' (wurde repariert). Diese gestrige Autoreparatur sollte Problem behoben haben."
      },
      {
        id: "pass_4",
        question: "English _____ in many countries around the world as official language.",
        translation: "Englisch wird in vielen Ländern rund um die Welt als Amtssprache gesprochen.",
        options: ["is spoken", "speaks", "is speaking", "was spoken"],
        correct: "is spoken",
        explanation: "Passiv Präsens: 'is spoken' (wird gesprochen). Diese globale Englischverbreitung macht es zur wichtigsten internationalen Kommunikationssprache."
      },
      {
        id: "pass_5",
        question: "The letters _____ already _____ by the secretary this morning early.",
        translation: "Die Briefe wurden heute früh morgens bereits von der Sekretärin geschickt.",
        options: ["have been sent", "were sent", "are sent", "will be sent"],
        correct: "have been sent",
        explanation: "Passiv Perfekt: 'have been' + Partizip: 'have been sent'. Diese morgendliche Briefversendung ist bereits abgeschlossen."
      },
      {
        id: "pass_6",
        question: "A new bridge _____ across the river for the past two years now.",
        translation: "Eine neue Brücke wird seit den letzten zwei Jahren über den Fluss gebaut.",
        options: ["has been being built", "is being built", "was being built", "will be built"],
        correct: "has been being built",
        explanation: "Passiv Perfekt Verlaufsform: 'has been being built' (wird seit...gebaut). Dieser zweijährige Brückenbau zeigt Komplexität des Projekts."
      },
      {
        id: "pass_7",
        question: "The house _____ painted when we drove past it yesterday afternoon.",
        translation: "Das Haus wurde gerade gestrichen, als wir gestern Nachmittag vorbeifuhren.",
        options: ["was being", "was", "is being", "has been"],
        correct: "was being",
        explanation: "Passiv Verlaufsform Vergangenheit: 'was being painted' (wurde gerade gestrichen). Diese laufende Malerarbeit war beim Vorbeifahren sichtbar."
      },
      {
        id: "pass_8",
        question: "All the documents _____ by the lawyer before the court hearing.",
        translation: "Alle Dokumente wurden vom Anwalt vor der Gerichtsverhandlung überprüft.",
        options: ["were checked", "checked", "are checked", "will be checked"],
        correct: "were checked",
        explanation: "Passiv Vergangenheit: 'were checked' (wurden überprüft). Diese juristische Dokumentenprüfung ist wichtige Vorbereitung für Gerichtsverhandlung."
      },
      {
        id: "pass_9",
        question: "The meeting _____ due to unexpected technical difficulties today.",
        translation: "Das Treffen wurde heute wegen unerwarteter technischer Schwierigkeiten verschoben.",
        options: ["has been postponed", "was postponed", "is postponed", "will be postponed"],
        correct: "has been postponed",
        explanation: "Passiv Perfekt: 'has been postponed' (ist verschoben worden). Diese technische Störung führte zu Terminverschiebung."
      },
      {
        id: "pass_10",
        question: "Coffee _____ in Brazil for centuries as a major export crop.",
        translation: "Kaffee wird seit Jahrhunderten in Brasilien als wichtige Exportware angebaut.",
        options: ["has been grown", "is grown", "was grown", "will be grown"],
        correct: "has been grown",
        explanation: "Passiv Perfekt für Dauer: 'has been grown' (wird seit...angebaut). Diese jahrhundertelange brasilianische Kaffee-Tradition ist weltbekannt."
      },
      {
        id: "pass_11",
        question: "The email _____ to you yesterday - please check your spam folder.",
        translation: "Die E-Mail wurde dir gestern geschickt - bitte überprüfe deinen Spam-Ordner.",
        options: ["was sent", "is sent", "has been sent", "will be sent"],
        correct: "was sent",
        explanation: "Passiv Vergangenheit: 'was sent' (wurde geschickt). Diese Spam-Ordner-Empfehlung hilft, vermisste E-Mail zu finden."
      },
      {
        id: "pass_12",
        question: "Many mistakes _____ in the report - we need to fix them now.",
        translation: "Viele Fehler wurden im Bericht gemacht - wir müssen sie jetzt korrigieren.",
        options: ["were made", "made", "are made", "have been made"],
        correct: "were made",
        explanation: "Passiv Vergangenheit: 'were made' (wurden gemacht). Diese Fehleranzahl im Bericht erfordert sorgfältige Korrekturarbeit."
      },
      {
        id: "pass_13",
        question: "The concert tickets _____ out within just two hours of release.",
        translation: "Die Konzerttickets waren innerhalb von nur zwei Stunden nach Veröffentlichung ausverkauft.",
        options: ["sold", "were sold", "are sold", "have sold"],
        correct: "sold",
        explanation: "Phrase 'sold out' (ausverkauft): KEIN Passiv nötig. Dieser schnelle Ticket-Ausverkauf zeigt extreme Popularität des Künstlers."
      },
      {
        id: "pass_14",
        question: "The prize will _____ to the winner next week at the ceremony.",
        translation: "Der Preis wird nächste Woche bei der Zeremonie an den Gewinner überreicht.",
        options: ["be presented", "present", "be presenting", "presented"],
        correct: "be presented",
        explanation: "Passiv Zukunft: 'will be presented' (wird überreicht werden). Diese feierliche Preisübergabe nächste Woche ist bedeutender Moment für Gewinner."
      },
      {
        id: "pass_15",
        question: "The building _____ renovated for the past six months continuously.",
        translation: "Das Gebäude wird seit den letzten sechs Monaten kontinuierlich renoviert.",
        options: ["has been being", "is being", "was being", "will be"],
        correct: "has been being",
        explanation: "Passiv Perfekt Verlaufsform: 'has been being renovated'. Diese sechsmonatige Dauerrenovierung zeigt umfassende Baumaßnahmen."
      }
    ]
  },

  phrasal_verbs_common: {
    name: "Common Phrasal Verbs",
    description: "Häufige Phrasal Verbs - Bedeutungen und Verwendung im Kontext",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "phr_1",
        question: "I need to _____ my essay before submitting it tomorrow morning.",
        translation: "Ich muss meinen Aufsatz vor Abgabe morgen früh überarbeiten.",
        options: ["go over", "go up", "go down", "go out"],
        correct: "go over",
        explanation: "Phrasal Verb 'go over' bedeutet ÜBERPRÜFEN/DURCHGEHEN: Diese Aufsatz-Revision vor Abgabe ist wichtig für Qualität und Fehlerfreiheit."
      },
      {
        id: "phr_2",
        question: "The meeting has been _____ until next Tuesday afternoon.",
        translation: "Das Treffen wurde bis nächsten Dienstagnachmittag verschoben.",
        options: ["put off", "put on", "put up", "put down"],
        correct: "put off",
        explanation: "'Put off' bedeutet VERSCHIEBEN: Diese Terminverschiebung auf nächste Woche gibt mehr Vorbereitungszeit."
      },
      {
        id: "phr_3",
        question: "I can't _____ with his constant complaining anymore - it's exhausting.",
        translation: "Ich kann sein ständiges Klagen nicht mehr ertragen - es ist erschöpfend.",
        options: ["put up", "put off", "put on", "put down"],
        correct: "put up",
        explanation: "'Put up with' bedeutet ERTRAGEN/DULDEN: Diese Intoleranz gegenüber ständigem Klagen ist verständliche Frustration."
      },
      {
        id: "phr_4",
        question: "Can you _____ the music? I can't hear it properly from here.",
        translation: "Kannst du die Musik lauter machen? Ich kann sie von hier nicht richtig hören.",
        options: ["turn up", "turn down", "turn off", "turn on"],
        correct: "turn up",
        explanation: "'Turn up' bedeutet LAUTER MACHEN: Diese Bitte um höhere Lautstärke verbessert Hörerlebnis aus Distanz."
      },
      {
        id: "phr_5",
        question: "I'm really looking _____ to my vacation next month in Italy.",
        translation: "Ich freue mich wirklich auf meinen Urlaub nächsten Monat in Italien.",
        options: ["forward", "for", "after", "up"],
        correct: "forward",
        explanation: "'Look forward to' bedeutet SICH FREUEN AUF: Diese Italien-Urlaubsvorfreude ist positive Emotion vor Reise."
      },
      {
        id: "phr_6",
        question: "They broke _____ after dating for three years together happily.",
        translation: "Sie trennten sich nach drei glücklichen Jahren Beziehung.",
        options: ["up", "down", "off", "out"],
        correct: "up",
        explanation: "'Break up' bedeutet SICH TRENNEN: Diese Beziehungsende nach drei Jahren ist emotional schwierige Entscheidung."
      },
      {
        id: "phr_7",
        question: "I'll _____ you _____ at the airport tomorrow at eight o'clock.",
        translation: "Ich werde dich morgen um acht Uhr am Flughafen abholen.",
        options: ["pick / up", "pick / out", "pick / off", "pick / on"],
        correct: "pick / up",
        explanation: "'Pick up' bedeutet ABHOLEN: Diese Flughafen-Abholung ist freundliche Geste und praktische Transporthilfe."
      },
      {
        id: "phr_8",
        question: "She takes _____ her mother - they look almost identical now.",
        translation: "Sie kommt nach ihrer Mutter - sie sehen sich jetzt fast identisch aus.",
        options: ["after", "up", "on", "off"],
        correct: "after",
        explanation: "'Take after' bedeutet ÄHNELN/NACHKOMMEN: Diese starke Mutter-Tochter-Ähnlichkeit ist genetische Familienverbindung."
      },
      {
        id: "phr_9",
        question: "I'm trying to _____ smoking for my health and family's sake.",
        translation: "Ich versuche, für meine Gesundheit und meine Familie mit Rauchen aufzuhören.",
        options: ["give up", "give in", "give out", "give off"],
        correct: "give up",
        explanation: "'Give up' bedeutet AUFHÖREN MIT: Dieser Rauchstopp-Versuch für Gesundheit und Familie ist wichtige Lebensentscheidung."
      },
      {
        id: "phr_10",
        question: "The plane _____ despite the bad weather conditions at airport.",
        translation: "Das Flugzeug hob trotz schlechter Wetterbedingungen am Flughafen ab.",
        options: ["took off", "took up", "took on", "took out"],
        correct: "took off",
        explanation: "'Take off' bedeutet ABHEBEN: Dieser Flug trotz schlechten Wetters zeigt akzeptable Sicherheitsbedingungen."
      },
      {
        id: "phr_11",
        question: "I need to _____ my old clothes and donate them to charity.",
        translation: "Ich muss meine alten Kleider aussortieren und sie für wohltätige Zwecke spenden.",
        options: ["sort out", "sort up", "sort off", "sort on"],
        correct: "sort out",
        explanation: "'Sort out' bedeutet AUSSORTIEREN/ORDNEN: Diese Kleiderspende an Wohltätigkeit ist großzügige Hilfe für Bedürftige."
      },
      {
        id: "phr_12",
        question: "He came _____ a brilliant idea during the brainstorming session.",
        translation: "Ihm kam während der Brainstorming-Sitzung eine brillante Idee.",
        options: ["up with", "up to", "up on", "up off"],
        correct: "up with",
        explanation: "'Come up with' bedeutet ENTWICKELN/SICH EINFALLEN LASSEN: Diese kreative Idee während Brainstorming ist wertvoller Beitrag."
      },
      {
        id: "phr_13",
        question: "I ran _____ milk - can you buy some on your way home?",
        translation: "Mir ist die Milch ausgegangen - kannst du welche auf dem Heimweg kaufen?",
        options: ["out of", "out with", "out on", "out off"],
        correct: "out of",
        explanation: "'Run out of' bedeutet AUSGEHEN (Vorrat leer): Diese Milch-Bitte beim Heimweg ist praktische Verbindung von Aufgaben."
      },
      {
        id: "phr_14",
        question: "She gets _____ well with all her colleagues at the office.",
        translation: "Sie kommt gut mit allen ihren Kollegen im Büro aus.",
        options: ["on", "up", "off", "out"],
        correct: "on",
        explanation: "'Get on with' bedeutet GUT AUSKOMMEN MIT: Diese harmonischen Arbeitsbeziehungen machen Büroalltag angenehmer."
      },
      {
        id: "phr_15",
        question: "I need to _____ smoking - it's ruining my health seriously.",
        translation: "Ich muss mit Rauchen aufhören - es ruiniert ernsthaft meine Gesundheit.",
        options: ["quit", "give up", "stop", "all answers"],
        correct: "all answers",
        explanation: "Für AUFHÖREN MIT Rauchen: 'quit/give up/stop smoking' alle möglich. Diese Gesundheitsentscheidung ist dringend bei ernsten Schäden."
      }
    ]
  }
};

export default part5Categories;
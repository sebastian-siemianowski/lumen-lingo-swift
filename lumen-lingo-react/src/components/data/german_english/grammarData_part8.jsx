/**
 * GERMAN → ENGLISH GRAMMAR - PART 8
 * 4 categories, 15 questions each
 */

import { Layers, HelpCircle, Users, Package } from "lucide-react";

export const part8Categories = {
  articles_usage: {
    name: "Articles (a/an/the)",
    description: "Artikel - bestimmte und unbestimmte Artikel richtig verwenden",
    icon: Layers,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "art_1",
        question: "I need _____ pen to write this important letter right now.",
        translation: "Ich brauche einen Stift, um diesen wichtigen Brief jetzt zu schreiben.",
        options: ["a", "an", "the", "no article"],
        correct: "a",
        explanation: "Vor KONSONANT nutzen wir 'a': 'a pen' (ein Stift). Unbestimmt, da irgendein Stift gemeint ist. Diese Stiftsuche ist dringend für Brief-Schreiben."
      },
      {
        id: "art_2",
        question: "She is _____ honest person who always tells the complete truth.",
        translation: "Sie ist eine ehrliche Person, die immer die komplette Wahrheit sagt.",
        options: ["an", "a", "the", "no article"],
        correct: "an",
        explanation: "Vor VOKAL-LAUT nutzen wir 'an': 'an honest' (stummes h = Vokal-Laut). Diese Ehrlichkeit ist bewundernswerte Charaktereigenschaft in jeder Situation."
      },
      {
        id: "art_3",
        question: "_____ Eiffel Tower is the most famous landmark in Paris, France.",
        translation: "Der Eiffelturm ist das berühmteste Wahrzeichen in Paris, Frankreich.",
        options: ["The", "A", "An", "No article"],
        correct: "The",
        explanation: "Für EINZIGARTIGE Dinge nutzen wir 'the': 'the Eiffel Tower'. Es gibt nur einen. Dieses ikonische Bauwerk symbolisiert ganz Frankreich weltweit."
      },
      {
        id: "art_4",
        question: "I love _____ music - it makes me feel happy and relaxed.",
        translation: "Ich liebe Musik - sie macht mich glücklich und entspannt.",
        options: ["no article", "a", "an", "the"],
        correct: "no article",
        explanation: "Bei ALLGEMEINEN Konzepten KEIN Artikel: 'love music' (Musik im Allgemeinen). Diese Musikliebe ist universelle positive Emotion für viele Menschen."
      },
      {
        id: "art_5",
        question: "Can you pass me _____ salt, please? It's on the table there.",
        translation: "Kannst du mir bitte das Salz reichen? Es ist dort auf dem Tisch.",
        options: ["the", "a", "an", "no article"],
        correct: "the",
        explanation: "Für BEKANNTES/SICHTBARES nutzen wir 'the': 'the salt' (das spezifische Salz da). Diese Tisch-Bitte während Essen ist höfliche Aufforderung."
      },
      {
        id: "art_6",
        question: "She wants to become _____ doctor and help people in need.",
        translation: "Sie möchte Ärztin werden und Menschen in Not helfen.",
        options: ["a", "an", "the", "no article"],
        correct: "a",
        explanation: "Für BERUFE nutzen wir 'a/an': 'become a doctor' (Arzt werden). Dieser Berufswunsch ist edle Motivation zum Medizinstudium und Helfen."
      },
      {
        id: "art_7",
        question: "I went to _____ bed very late last night after studying hard.",
        translation: "Ich ging letzte Nacht nach hartem Lernen sehr spät ins Bett.",
        options: ["no article", "the", "a", "an"],
        correct: "no article",
        explanation: "Bei festen Phrasen oft KEIN Artikel: 'go to bed' (ins Bett gehen). Diese Spät-Bettgeh-Zeit nach Lernen ist ungesunde Gewohnheit vor Prüfungen."
      },
      {
        id: "art_8",
        question: "_____ people in this room are all very friendly and welcoming.",
        translation: "Die Leute in diesem Raum sind alle sehr freundlich und einladend.",
        options: ["The", "A", "An", "No article"],
        correct: "The",
        explanation: "Für SPEZIFISCHE Gruppe nutzen wir 'the': 'the people in this room'. Diese herzliche Atmosphäre macht Raum zu angenehmem Aufenthaltsort."
      },
      {
        id: "art_9",
        question: "I saw _____ elephant at the zoo yesterday - it was huge and grey!",
        translation: "Ich sah gestern im Zoo einen Elefanten - er war riesig und grau!",
        options: ["an", "a", "the", "no article"],
        correct: "an",
        explanation: "Vor VOKAL nutzen wir 'an': 'an elephant'. Unbestimmt = irgendeinen. Diese Zoo-Elefanten-Begegnung ist beeindruckendes Tier-Erlebnis für Besucher."
      },
      {
        id: "art_10",
        question: "She plays _____ piano beautifully - she's been learning for ten years.",
        translation: "Sie spielt wunderschön Klavier - sie lernt seit zehn Jahren.",
        options: ["the", "a", "an", "no article"],
        correct: "the",
        explanation: "Bei MUSIKINSTRUMENTEN nutzen wir 'the': 'play the piano'. Diese zehnjährige Klavierpraxis zeigt Hingabe und musikalische Entwicklung."
      },
      {
        id: "art_11",
        question: "We had _____ dinner at a nice restaurant near our house yesterday.",
        translation: "Wir aßen gestern in einem schönen Restaurant nahe unserem Haus zu Abend.",
        options: ["no article", "a", "an", "the"],
        correct: "no article",
        explanation: "Bei MAHLZEITEN meist KEIN Artikel: 'have dinner' (zu Abend essen). Dieser Restaurant-Besuch nahe Haus ist bequeme Abendessen-Wahl."
      },
      {
        id: "art_12",
        question: "_____ sun rises in the east and sets in the west every day.",
        translation: "Die Sonne geht im Osten auf und im Westen jeden Tag unter.",
        options: ["The", "A", "An", "No article"],
        correct: "The",
        explanation: "Für EINZIGARTIGE Naturphänomene: 'the sun' (nur eine Sonne). Diese tägliche Sonnen-Bewegung ist fundamentales astronomisches Naturgesetz."
      },
      {
        id: "art_13",
        question: "I need to go to _____ bank to withdraw some money for shopping.",
        translation: "Ich muss zur Bank gehen, um Geld zum Einkaufen abzuheben.",
        options: ["the", "a", "an", "no article"],
        correct: "the",
        explanation: "Für INSTITUTIONEN (meine übliche): 'the bank'. Diese Geldabhebung ist notwendige Vorbereitung für geplanten Einkauf heute."
      },
      {
        id: "art_14",
        question: "He gave me _____ useful advice about my career choices yesterday.",
        translation: "Er gab mir gestern nützlichen Rat über meine Karriereentscheidungen.",
        options: ["no article", "a", "an", "the"],
        correct: "no article",
        explanation: "'Advice' ist UNZÄHLBAR: KEIN 'a/an' möglich: 'gave advice'. Dieser Karriere-Rat gestern ist wertvolle Orientierungshilfe für berufliche Zukunft."
      },
      {
        id: "art_15",
        question: "I'm learning _____ English because it's important for my job prospects.",
        translation: "Ich lerne Englisch, weil es wichtig für meine Berufsaussichten ist.",
        options: ["no article", "a", "an", "the"],
        correct: "no article",
        explanation: "Bei SPRACHEN KEIN Artikel: 'learning English'. Diese Englisch-Lernmotivation durch Berufsaussichten ist praktische kluge Investition in Zukunft."
      }
    ]
  },

  question_formation: {
    name: "Question Formation",
    description: "Fragebildung - korrekte Struktur für verschiedene Fragetypen",
    icon: HelpCircle,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "quest_1",
        question: "_____ you like coffee or tea for breakfast in the morning?",
        translation: "Magst du Kaffee oder Tee zum Frühstück am Morgen?",
        options: ["Do", "Are", "Does", "Is"],
        correct: "Do",
        explanation: "Für Präsens-Fragen mit 'you': 'Do you like'. Diese Frühstücksgetränk-Frage ist höfliche Präferenz-Erkundung für Gastgeber."
      },
      {
        id: "quest_2",
        question: "Where _____ she live now after moving from her old apartment?",
        translation: "Wo wohnt sie jetzt nach Umzug aus ihrer alten Wohnung?",
        options: ["does", "do", "is", "are"],
        correct: "does",
        explanation: "W-Frage mit 'she': 'Where does she live'. Diese Wohnort-Frage nach Umzug ist natürliche Neugier über neue Adresse."
      },
      {
        id: "quest_3",
        question: "_____ they coming to the party tomorrow evening at eight?",
        translation: "Kommen sie morgen Abend um acht zur Party?",
        options: ["Are", "Do", "Is", "Does"],
        correct: "Are",
        explanation: "Present Continuous Frage: 'Are they coming' (kommen sie). Diese Party-Teilnahme-Frage ist wichtig für Gästezahl-Planung morgen."
      },
      {
        id: "quest_4",
        question: "What _____ you doing when I called you yesterday afternoon?",
        translation: "Was machtest du, als ich dich gestern Nachmittag anrief?",
        options: ["were", "was", "are", "did"],
        correct: "were",
        explanation: "Past Continuous Frage: 'What were you doing'. Diese Frage über gestrige Aktivität während Anruf ist normale Gesprächseröffnung."
      },
      {
        id: "quest_5",
        question: "_____ I help you with those heavy bags you're carrying around?",
        translation: "Kann ich dir mit jenen schweren Taschen helfen, die du herumträgst?",
        options: ["Can", "Do", "Am", "Will"],
        correct: "Can",
        explanation: "Höfliches Angebot: 'Can I help' (kann ich helfen). Diese Hilfsbereitschaft bei schweren Taschen ist freundliche aufmerksame Geste."
      },
      {
        id: "quest_6",
        question: "How long _____ you been waiting here in the cold weather?",
        translation: "Wie lange wartest du schon hier im kalten Wetter?",
        options: ["have", "has", "are", "do"],
        correct: "have",
        explanation: "Present Perfect Continuous: 'How long have you been waiting'. Diese Wartezeit-Frage im Kalten zeigt Mitgefühl und Besorgnis."
      },
      {
        id: "quest_7",
        question: "_____ there any good restaurants near here that you recommend?",
        translation: "Gibt es hier in der Nähe gute Restaurants, die du empfiehlst?",
        options: ["Are", "Is", "Do", "Does"],
        correct: "Are",
        explanation: "Mit Plural: 'Are there' (gibt es - Mehrzahl). Diese Restaurant-Empfehlungs-Frage ist praktisch für auswärts Essen in fremder Gegend."
      },
      {
        id: "quest_8",
        question: "You're from Germany, _____ you? I can hear your accent slightly.",
        translation: "Du bist aus Deutschland, nicht wahr? Ich kann deinen Akzent leicht hören.",
        options: ["aren't", "isn't", "don't", "doesn't"],
        correct: "aren't",
        explanation: "TAG QUESTION: Positiv → negativ: 'are' → 'aren't you'. Diese Herkunfts-Vermutung basiert auf hörbarem deutschem Akzent beim Sprechen."
      },
      {
        id: "quest_9",
        question: "_____ of these two dresses do you prefer for the wedding?",
        translation: "Welches dieser zwei Kleider bevorzugst du für die Hochzeit?",
        options: ["Which", "What", "Who", "Where"],
        correct: "Which",
        explanation: "Für AUSWAHL aus Begrenztem: 'which' (welches von). Diese Kleider-Entscheidungshilfe für Hochzeit ist wichtig für passenden Look."
      },
      {
        id: "quest_10",
        question: "_____ time does the train leave from platform five tomorrow?",
        translation: "Um wie viel Uhr fährt der Zug morgen von Gleis fünf ab?",
        options: ["What", "Which", "When", "Where"],
        correct: "What",
        explanation: "Für UHRZEIT: 'What time' (um wie viel Uhr). Diese Abfahrtszeit-Frage ist essentiell für pünktliche Zugankunft morgen."
      },
      {
        id: "quest_11",
        question: "He can speak French fluently, _____ he? That's very impressive!",
        translation: "Er kann fließend Französisch sprechen, nicht wahr? Das ist sehr beeindruckend!",
        options: ["can't", "doesn't", "isn't", "won't"],
        correct: "can't",
        explanation: "Tag Question mit Modal: 'can' → 'can't he'. Diese Sprachfähigkeit-Bestätigung drückt Bewunderung für Französisch-Beherrschung aus."
      },
      {
        id: "quest_12",
        question: "_____ did you go on your summer vacation this year exactly?",
        translation: "Wo genau bist du dieses Jahr in deinen Sommerurlaub gefahren?",
        translation: "Wo genau bist du dieses Jahr in deinen Sommerurlaub gefahren?",
        options: ["Where", "When", "Why", "How"],
        correct: "Where",
        explanation: "Für ORT: 'Where did you go' (wo gingst du hin). Diese Urlaubsziel-Frage ist typisches Gesprächsthema nach Sommerferien."
      },
      {
        id: "quest_13",
        question: "_____ wants to come with me to the cinema tonight at seven?",
        translation: "Wer möchte heute Abend um sieben mit mir ins Kino kommen?",
        options: ["Who", "What", "Which", "Whose"],
        correct: "Who",
        explanation: "Für PERSON als Subjekt: 'Who wants' (wer möchte). KEIN 'does'. Diese Kino-Begleitungs-Frage sucht interessierte Person für gemeinsamen Abend."
      },
      {
        id: "quest_14",
        question: "You haven't finished your work yet, _____ you? It's getting late.",
        translation: "Du hast deine Arbeit noch nicht fertig, oder? Es wird spät.",
        options: ["have", "haven't", "has", "hasn't"],
        correct: "have",
        explanation: "Tag Question: Negativ → positiv: 'haven't' → 'have you'. Diese Arbeit-Frage bei später Stunde zeigt Besorgnis über Zeitmanagement."
      },
      {
        id: "quest_15",
        question: "_____ book is this on the table? I found it here this morning.",
        translation: "Wessen Buch ist dies auf dem Tisch? Ich fand es heute Morgen hier.",
        options: ["Whose", "Who's", "Which", "What"],
        correct: "Whose",
        explanation: "Für BESITZ-Frage: 'Whose book' (wessen Buch). NICHT 'who's' = who is. Diese Fund-Frage sucht Buchbesitzer für Rückgabe."
      }
    ]
  },

  make_let_help: {
    name: "Make, Let, Help + Verb",
    description: "Veranlassungsverben - make, let, help mit Infinitiv verwenden",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "make_1",
        question: "My parents made me _____ my room every Saturday morning without fail.",
        translation: "Meine Eltern ließen mich jeden Samstagmorgen ohne Ausnahme mein Zimmer aufräumen.",
        options: ["clean", "to clean", "cleaning", "cleaned"],
        correct: "clean",
        explanation: "Nach 'make' (ZWINGEN): Infinitiv OHNE 'to': 'made me clean'. Diese wöchentliche Putzpflicht ist elterliche Erziehungsmaßnahme für Ordnung."
      },
      {
        id: "make_2",
        question: "The teacher let us _____ early because we finished all our work.",
        translation: "Der Lehrer ließ uns früh gehen, weil wir unsere ganze Arbeit fertig hatten.",
        options: ["leave", "to leave", "leaving", "left"],
        correct: "leave",
        explanation: "Nach 'let' (ERLAUBEN): Infinitiv OHNE 'to': 'let us leave'. Diese frühe Entlassung ist Belohnung für fertige Arbeit aller."
      },
      {
        id: "make_3",
        question: "Can you help me _____ these heavy boxes upstairs to my apartment?",
        translation: "Kannst du mir helfen, diese schweren Kisten nach oben in meine Wohnung zu tragen?",
        options: ["carry", "to carry", "both correct", "carrying"],
        correct: "both correct",
        explanation: "Nach 'help': Infinitiv mit ODER ohne 'to' beide korrekt: 'help me carry' oder 'help me to carry'. Diese Umzugshilfe ist freundliche Nachbarschaftsgeste."
      },
      {
        id: "make_4",
        question: "The movie made me _____ even though it was supposed to be funny.",
        translation: "Der Film ließ mich weinen, obwohl er lustig sein sollte.",
        options: ["cry", "to cry", "crying", "cried"],
        correct: "cry",
        explanation: "Nach 'make' (VERURSACHEN): OHNE 'to': 'made me cry'. Diese unerwartete Tränenreaktion bei Komödie zeigt emotionale Szenen."
      },
      {
        id: "make_5",
        question: "She didn't let me _____ her secret to anyone else at all.",
        translation: "Sie ließ mich ihr Geheimnis überhaupt niemandem erzählen.",
        options: ["tell", "to tell", "telling", "told"],
        correct: "tell",
        explanation: "Nach 'let' in Negativ: OHNE 'to': 'didn't let me tell'. Diese Geheimhaltungs-Anweisung betont Vertraulichkeit der Information."
      },
      {
        id: "make_6",
        question: "My brother helped me _____ for my important exam next week.",
        translation: "Mein Bruder half mir, für meine wichtige Prüfung nächste Woche zu lernen.",
        options: ["study", "to study", "both correct", "studying"],
        correct: "both correct",
        explanation: "Nach 'help': beide Formen korrekt. Diese geschwisterliche Lernhilfe ist wertvolle familiäre Unterstützung vor wichtiger Prüfung."
      },
      {
        id: "make_7",
        question: "The boss made everyone _____ late yesterday to finish the urgent project.",
        translation: "Der Chef ließ gestern alle spät arbeiten, um das dringende Projekt zu beenden.",
        options: ["work", "to work", "working", "worked"],
        correct: "work",
        explanation: "Nach 'make' (ZWINGEN): OHNE 'to': 'made everyone work'. Diese Überstunden-Anordnung ist autoritäre Maßnahme für Projekt-Deadline."
      },
      {
        id: "make_8",
        question: "Please let me _____ what you think about my new business idea.",
        translation: "Bitte lass mich wissen, was du über meine neue Geschäftsidee denkst.",
        options: ["know", "to know", "knowing", "knew"],
        correct: "know",
        explanation: "Nach 'let': OHNE 'to': 'let me know'. Diese Bitte um Meinungsfeedback zu Geschäftsidee sucht ehrliche Rückmeldung."
      },
      {
        id: "make_9",
        question: "She helped her mother _____ dinner for the whole family tonight.",
        translation: "Sie half ihrer Mutter, heute Abend Abendessen für die ganze Familie zu kochen.",
        options: ["cook", "to cook", "both correct", "cooking"],
        correct: "both correct",
        explanation: "Nach 'help': beide Formen möglich. Diese Kochhilfe für Familie ist schöne Unterstützung der Mutter bei Mahlzeit-Vorbereitung."
      },
      {
        id: "make_10",
        question: "The funny story made us all _____ loudly in the quiet library.",
        translation: "Die lustige Geschichte ließ uns alle laut in der ruhigen Bibliothek lachen.",
        options: ["laugh", "to laugh", "laughing", "laughed"],
        correct: "laugh",
        explanation: "Nach 'make' (VERURSACHEN): OHNE 'to': 'made us laugh'. Dieses laute Bibliothek-Lachen bei lustiger Geschichte ist peinlich."
      },
      {
        id: "make_11",
        question: "Don't let the children _____ too much TV - it's bad for them.",
        translation: "Lass die Kinder nicht zu viel Fernsehen schauen - es ist schlecht für sie.",
        options: ["watch", "to watch", "watching", "watched"],
        correct: "watch",
        explanation: "Nach 'let' in Negativ: OHNE 'to': 'let watch'. Diese TV-Begrenzung für Kinder ist gesunde elterliche Medien-Kontrolle."
      },
      {
        id: "make_12",
        question: "Could you help me _____ out this difficult math problem please?",
        translation: "Könntest du mir bitte helfen, dieses schwere Matheproblem zu lösen?",
        options: ["figure", "to figure", "both correct", "figuring"],
        correct: "both correct",
        explanation: "Nach 'help': beide Formen korrekt. Diese Mathe-Hilfe-Bitte ist Suche nach Verständnis bei schwierigem Problem."
      },
      {
        id: "make_13",
        question: "The teacher made the students _____ their phones during the exam.",
        translation: "Der Lehrer ließ die Schüler ihre Handys während der Prüfung ausschalten.",
        options: ["turn off", "to turn off", "turning off", "turned off"],
        correct: "turn off",
        explanation: "Nach 'make': OHNE 'to': 'made students turn off'. Diese Handy-Aus-Regel bei Prüfung verhindert Betrug und Ablenkung."
      },
      {
        id: "make_14",
        question: "Let me _____ you to the new Italian restaurant I discovered recently.",
        translation: "Lass mich dich in das neue italienische Restaurant einladen, das ich kürzlich entdeckte.",
        options: ["invite", "to invite", "inviting", "invited"],
        correct: "invite",
        explanation: "Nach 'let': OHNE 'to': 'let me invite'. Diese Restaurant-Einladung nach Neuentdeckung ist großzügige freundliche Geste."
      },
      {
        id: "make_15",
        question: "The doctor helped the patient _____ better after the long illness.",
        translation: "Der Arzt half dem Patienten, nach der langen Krankheit besser zu werden.",
        options: ["get", "to get", "both correct", "getting"],
        correct: "both correct",
        explanation: "Nach 'help': beide Formen möglich. Diese ärztliche Hilfe bei Genesung nach langer Krankheit ist medizinische Fürsorgeleistung."
      }
    ]
  },

  present_perfect_vs_past: {
    name: "Present Perfect vs Past Simple",
    description: "Zeitenunterscheidung - Present Perfect und Past Simple korrekt wählen",
    icon: Package,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "perf_past_1",
        question: "I _____ to Paris three times in my life so far already.",
        translation: "Ich bin bisher in meinem Leben schon dreimal nach Paris gefahren.",
        options: ["have been", "went", "was", "am going"],
        correct: "have been",
        explanation: "Für LEBENSERFAHRUNG ohne genaue Zeit: Present Perfect 'have been'. Diese Paris-Reise-Anzahl ist persönliche Erfahrungsbilanz bis jetzt."
      },
      {
        id: "perf_past_2",
        question: "She _____ to London last year during the summer holidays.",
        translation: "Sie fuhr letztes Jahr während der Sommerferien nach London.",
        options: ["went", "has been", "has gone", "goes"],
        correct: "went",
        explanation: "Für SPEZIFISCHE Vergangenheit: Past Simple 'went'. Mit 'last year'. Diese konkrete London-Reise im letzten Sommer ist abgeschlossen."
      },
      {
        id: "perf_past_3",
        question: "_____ you ever _____ Indian food before? It's very spicy and delicious.",
        translation: "Hast du jemals zuvor indisches Essen probiert? Es ist sehr scharf und lecker.",
        options: ["Have / tried", "Did / try", "Do / try", "Are / trying"],
        correct: "Have / tried",
        explanation: "Für JEMALS-Fragen: Present Perfect 'Have you ever tried'. Diese Erfahrungs-Frage über indisches Essen testet kulinarischen Horizont."
      },
      {
        id: "perf_past_4",
        question: "I _____ my keys yesterday and still haven't found them anywhere.",
        translation: "Ich verlor gestern meine Schlüssel und habe sie noch nirgends gefunden.",
        options: ["lost", "have lost", "lose", "am losing"],
        correct: "lost",
        explanation: "Für GESTERN (spezifisch): Past Simple 'lost'. Diese gestrige Schlüsselverlegung ist problematisch, da sie noch verloren sind."
      },
      {
        id: "perf_past_5",
        question: "We _____ each other since we were children in primary school.",
        translation: "Wir kennen uns, seit wir Kinder in der Grundschule waren.",
        options: ["have known", "knew", "know", "are knowing"],
        correct: "have known",
        explanation: "Für SEIT-Zeitraum: Present Perfect 'have known since'. Diese Freundschaft seit Schulzeit ist lange tiefe Verbindung über Jahre."
      },
      {
        id: "perf_past_6",
        question: "He _____ in this company for ten years now without changing jobs.",
        translation: "Er arbeitet jetzt seit zehn Jahren ohne Jobwechsel in dieser Firma.",
        options: ["has worked", "worked", "works", "is working"],
        correct: "has worked",
        explanation: "Für DAUER bis jetzt: Present Perfect 'has worked for'. Diese zehnjährige Firmenloyalität zeigt Zufriedenheit oder Stabilität."
      },
      {
        id: "perf_past_7",
        question: "When _____ you _____ your driving license test successfully?",
        translation: "Wann hast du deinen Führerscheintest erfolgreich bestanden?",
        options: ["did / pass", "have / passed", "do / pass", "are / passing"],
        correct: "did / pass",
        explanation: "Frage mit WHEN braucht Past Simple: 'When did you pass'. Diese Führerschein-Zeitfrage erkundigt sich nach spezifischem Besteh-Datum."
      },
      {
        id: "perf_past_8",
        question: "I _____ never _____ such a beautiful sunset before in my life!",
        translation: "Ich habe noch nie zuvor in meinem Leben so einen schönen Sonnenuntergang gesehen!",
        options: ["have / seen", "did / see", "do / see", "am / seeing"],
        correct: "have / seen",
        explanation: "Für NIEMALS ZUVOR: Present Perfect 'have never seen'. Dieser außergewöhnliche Sonnenuntergang ist einmaliges unvergessliches Naturschauspiel."
      },
      {
        id: "perf_past_9",
        question: "She _____ her homework two hours ago in her bedroom upstairs.",
        translation: "Sie hat ihre Hausaufgaben vor zwei Stunden in ihrem Schlafzimmer oben gemacht.",
        options: ["finished", "has finished", "finishes", "is finishing"],
        correct: "finished",
        explanation: "Mit 'AGO': Past Simple 'finished'. Diese Hausaufgaben-Fertigstellung vor zwei Stunden ist klar abgeschlossene Vergangenheit."
      },
      {
        id: "perf_past_10",
        question: "They _____ just _____ from their long vacation in Thailand recently.",
        translation: "Sie sind gerade kürzlich von ihrem langen Thailand-Urlaub zurückgekommen.",
        options: ["have / returned", "did / return", "do / return", "are / returning"],
        correct: "have / returned",
        explanation: "Für GERADE/KÜRZLICH: Present Perfect 'have just returned'. Diese frische Rückkehr von Thailand-Urlaub liegt nur Tage zurück."
      },
      {
        id: "perf_past_11",
        question: "How long _____ you _____ married to your husband or wife now?",
        translation: "Wie lange bist du jetzt schon mit deinem Mann oder deiner Frau verheiratet?",
        options: ["have / been", "are / been", "were / been", "did / be"],
        correct: "have / been",
        explanation: "Für DAUER-Frage: 'How long have you been'. Diese Ehe-Dauer-Frage ist übliches Gesprächsthema bei verheirateten Personen."
      },
      {
        id: "perf_past_12",
        question: "I _____ this book when I was on vacation last summer in Italy.",
        translation: "Ich kaufte dieses Buch, als ich letzten Sommer im Italien-Urlaub war.",
        options: ["bought", "have bought", "buy", "am buying"],
        correct: "bought",
        explanation: "Für SPEZIFISCHEN Zeitpunkt: Past Simple 'bought'. Dieser Bücherkauf im Italien-Urlaub ist schöne Reiseerinnerung."
      },
      {
        id: "perf_past_13",
        question: "_____ you _____ the news about the accident on TV this morning?",
        translation: "Hast du heute Morgen die Nachrichten über den Unfall im Fernsehen gehört?",
        options: ["Did / hear", "Have / heard", "Do / hear", "Are / hearing"],
        correct: "Did / hear",
        explanation: "Mit SPEZIFISCHER Zeit 'this morning': Past Simple 'Did you hear'. Diese Unfall-Nachrichten-Frage teilt aktuelle Information."
      },
      {
        id: "perf_past_14",
        question: "We _____ in this house since 2015 without moving to anywhere else.",
        translation: "Wir wohnen seit 2015 ohne irgendwohin anders zu ziehen in diesem Haus.",
        options: ["have lived", "lived", "live", "are living"],
        correct: "have lived",
        explanation: "Für SEIT Zeitpunkt: Present Perfect 'have lived since'. Diese langjährige Wohndauer zeigt Sesshaftigkeit und Heimatverbundenheit."
      },
      {
        id: "perf_past_15",
        question: "He _____ already _____ breakfast when I arrived at his house this morning.",
        translation: "Er hatte schon gefrühstückt, als ich heute Morgen bei seinem Haus ankam.",
        options: ["had / eaten", "has / eaten", "did / eat", "ate"],
        correct: "had / eaten",
        explanation: "Für VOR anderer Vergangenheit: Past Perfect 'had eaten'. Dieses Frühstück vor Ankunft erklärt, warum er nicht mehr isst."
      }
    ]
  },

  future_forms: {
    name: "Future Forms",
    description: "Zukunftsformen - will, going to, Present Continuous unterscheiden",
    icon: Package,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "fut_1",
        question: "I _____ help you with that - just give me a minute to finish.",
        translation: "Ich werde dir damit helfen - gib mir nur eine Minute zum Fertigmachen.",
        options: ["will", "am going to", "am helping", "help"],
        correct: "will",
        explanation: "Für SPONTANE Entscheidung nutzen wir 'will': 'I'll help'. Diese sofortige Hilfsbereitschaft ist freundliche unmittelbare Reaktion auf Bedarf."
      },
      {
        id: "fut_2",
        question: "Look at those dark clouds! It _____ rain very soon heavily.",
        translation: "Schau dir diese dunklen Wolken an! Es wird sehr bald stark regnen.",
        options: ["is going to", "will", "rains", "is raining"],
        correct: "is going to",
        explanation: "Für VORHERSAGE mit Beweis: 'going to rain'. Diese Wolken-Beobachtung ist klares Zeichen für unmittelbar bevorstehenden Regen."
      },
      {
        id: "fut_3",
        question: "We _____ our grandparents this weekend - we arranged it yesterday.",
        translation: "Wir besuchen dieses Wochenende unsere Großeltern - wir vereinbarten es gestern.",
        options: ["are visiting", "will visit", "visit", "are going to visit"],
        correct: "are visiting",
        explanation: "Für FESTE Pläne: Present Continuous 'are visiting'. Diese Wochenend-Großeltern-Besuchs-Vereinbarung ist fixer Familienplan."
      },
      {
        id: "fut_4",
        question: "Don't worry, I _____ tell anyone your secret - I promise absolutely.",
        translation: "Keine Sorge, ich werde niemandem dein Geheimnis erzählen - ich verspreche es absolut.",
        options: ["won't", "am not going to", "don't", "am not"],
        correct: "won't",
        explanation: "Für VERSPRECHEN nutzen wir 'will': 'won't tell'. Diese Geheimhaltungs-Zusage ist vertrauensvolle beruhigende Versicherung."
      },
      {
        id: "fut_5",
        question: "She _____ study medicine at university next year after graduation.",
        translation: "Sie wird nächstes Jahr nach Abschluss an der Universität Medizin studieren.",
        options: ["is going to", "will", "studies", "is studying"],
        correct: "is going to",
        explanation: "Für GEPLANTE Zukunft: 'going to study'. Dieser Medizin-Studienplan nächstes Jahr ist langfristige durchdachte Karriere-Entscheidung."
      },
      {
        id: "fut_6",
        question: "The train _____ at 6 PM sharp from platform three tomorrow.",
        translation: "Der Zug fährt morgen um genau 18 Uhr von Gleis drei ab.",
        options: ["leaves", "will leave", "is going to leave", "is leaving"],
        correct: "leaves",
        explanation: "Für FAHRPLÄNE: Präsens 'leaves' für Zukunft möglich. Diese feste Zug-Abfahrtszeit ist nach Fahrplan-Schedule unveränderlich."
      },
      {
        id: "fut_7",
        question: "I think it _____ be a nice sunny day tomorrow according to forecast.",
        translation: "Ich denke, es wird laut Vorhersage morgen ein schöner sonniger Tag sein.",
        options: ["will", "is going to", "is", "is being"],
        correct: "will",
        explanation: "Nach 'think/believe' nutzen wir 'will': 'think it will be'. Diese Wetter-Vermutung basiert auf Vorhersage-Information."
      },
      {
        id: "fut_8",
        question: "We _____ dinner with friends at a restaurant tonight at eight.",
        translation: "Wir essen heute Abend um acht mit Freunden in einem Restaurant.",
        options: ["are having", "will have", "have", "are going to have"],
        correct: "are having",
        explanation: "Für FESTE Verabredung: Present Continuous 'are having'. Dieses Restaurant-Abendessen mit Freunden heute ist vereinbarter sozialer Plan."
      },
      {
        id: "fut_9",
        question: "I _____ buy a new car soon - I've been saving money for it.",
        translation: "Ich werde bald ein neues Auto kaufen - ich habe dafür Geld gespart.",
        options: ["am going to", "will", "buy", "am buying"],
        correct: "am going to",
        explanation: "Für INTENTION/PLAN: 'going to buy'. Dieses Autokauf-Vorhaben mit Ersparnissen ist gut vorbereitete geplante Anschaffung."
      },
      {
        id: "fut_10",
        question: "Watch out! You _____ fall if you're not more careful right now!",
        translation: "Pass auf! Du wirst fallen, wenn du jetzt nicht vorsichtiger bist!",
        options: ["are going to", "will", "fall", "are falling"],
        correct: "are going to",
        explanation: "Für UNMITTELBARE Gefahr mit Beweis: 'going to fall'. Diese Sturz-Warnung basiert auf beobachteter gefährlicher Situation gerade jetzt."
      },
      {
        id: "fut_11",
        question: "The movie _____ at 7 PM tonight at the cinema in town center.",
        translation: "Der Film beginnt heute Abend um 19 Uhr im Kino im Stadtzentrum.",
        options: ["starts", "will start", "is going to start", "is starting"],
        correct: "starts",
        explanation: "Für PROGRAMM/ZEITPLAN: Präsens 'starts' für Zukunft. Diese feste Kino-Startzeit ist nach Veranstaltungsplan festgelegt."
      },
      {
        id: "fut_12",
        question: "OK, I _____ do it right now - I didn't realize it was urgent!",
        translation: "OK, ich mache es jetzt sofort - mir war nicht klar, dass es dringend war!",
        options: ["will", "am going to", "do", "am doing"],
        correct: "will",
        explanation: "Für SPONTANE Reaktion: 'I'll do it'. Diese sofortige Handlungsbereitschaft reagiert auf erkannte Dringlichkeit der Aufgabe."
      },
      {
        id: "fut_13",
        question: "They _____ get married next month at a beautiful church ceremony.",
        translation: "Sie werden nächsten Monat bei einer schönen Kirchenzeremonie heiraten.",
        options: ["are getting", "will get", "get", "are going to get"],
        correct: "are getting",
        explanation: "Für FESTEN Plan: Present Continuous 'are getting married'. Diese Hochzeit nächsten Monat ist lange geplantes wichtiges Lebensereignis."
      },
      {
        id: "fut_14",
        question: "I'm sure she _____ pass the exam - she studied very hard for it.",
        translation: "Ich bin sicher, sie wird die Prüfung bestehen - sie hat sehr hart dafür gelernt.",
        options: ["will", "is going to", "passes", "is passing"],
        correct: "will",
        explanation: "Nach 'sure/think': 'will pass'. Diese Besteh-Zuversicht basiert auf beobachteter intensiver Lernvorbereitung für Prüfung."
      },
      {
        id: "fut_15",
        question: "My flight _____ tomorrow morning at 6:30 AM from terminal two.",
        translation: "Mein Flug startet morgen früh um 6:30 Uhr von Terminal zwei.",
        options: ["leaves", "will leave", "is going to leave", "is leaving"],
        correct: "leaves",
        explanation: "Für FLUGPLAN: Präsens 'leaves'. Diese frühe Flugzeit erfordert sehr zeitiges Aufstehen für Flughafen-Ankunft morgen."
      }
    ]
  }
};

export default part8Categories;
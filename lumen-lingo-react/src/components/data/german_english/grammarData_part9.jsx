/**
 * GERMAN → ENGLISH GRAMMAR - PART 9
 * 4 categories, 15 questions each
 */

import { Repeat2, Home, Hash, Users2 } from "lucide-react";

export const part9Categories = {
  adverbs_frequency: {
    name: "Adverbs of Frequency",
    description: "Häufigkeitsadverbien - always, usually, sometimes richtig platzieren",
    icon: Repeat2,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "adv_freq_1",
        question: "She _____ goes to the gym every single morning before work starts.",
        translation: "Sie geht immer jeden einzelnen Morgen vor Arbeitsbeginn ins Fitnessstudio.",
        options: ["always", "usually", "sometimes", "never"],
        correct: "always",
        explanation: "Für IMMER (100%): 'always' VOR Hauptverb: 'always goes'. Diese tägliche Gym-Routine vor Arbeit ist bewundernswerte gesunde Gewohnheit."
      },
      {
        id: "adv_freq_2",
        question: "I _____ eat breakfast - maybe three or four times a week only.",
        translation: "Ich frühstücke selten - vielleicht nur drei oder vier Mal pro Woche.",
        options: ["rarely", "always", "usually", "often"],
        correct: "rarely",
        explanation: "Für SELTEN nutzen wir 'rarely' (selten): VOR Verb. Diese unregelmäßige Frühstücksgewohnheit ist für manche Menschen normal."
      },
      {
        id: "adv_freq_3",
        question: "We are _____ late for important meetings because of bad traffic.",
        translation: "Wir sind manchmal wegen schlechtem Verkehr zu spät zu wichtigen Treffen.",
        options: ["sometimes", "always", "never", "rarely"],
        correct: "sometimes",
        explanation: "Für MANCHMAL: 'sometimes' kann Anfang/Mitte/Ende. NACH 'be': 'are sometimes late'. Dieser Verkehr ist häufige urbane Verspätungsursache."
      },
      {
        id: "adv_freq_4",
        question: "He has _____ been to Japan, although he wants to visit someday.",
        translation: "Er war noch nie in Japan, obwohl er es eines Tages besuchen möchte.",
        options: ["never", "ever", "always", "usually"],
        correct: "never",
        explanation: "Für NIEMALS: 'never' NACH 'has/have': 'has never been'. Dieser Japan-Reisewunsch trotz bisheriger Unmöglichkeit ist zukünftiges Traumziel."
      },
      {
        id: "adv_freq_5",
        question: "Do you _____ check your emails first thing in the morning daily?",
        translation: "Überprüfst du normalerweise täglich als Erstes morgens deine E-Mails?",
        options: ["usually", "always", "never", "rarely"],
        correct: "usually",
        explanation: "Für NORMALERWEISE: 'usually' NACH Hilfsverb in Frage: 'Do you usually check'. Diese Morgen-Email-Routine ist moderne Arbeitsgewohnheit."
      },
      {
        id: "adv_freq_6",
        question: "They _____ go on vacation twice a year - summer and winter breaks.",
        translation: "Sie fahren gewöhnlich zweimal im Jahr in Urlaub - Sommer- und Winterpausen.",
        options: ["usually", "always", "never", "rarely"],
        correct: "usually",
        explanation: "Für GEWÖHNLICH: 'usually go'. Diese zweimalige Jahres-Urlaubs-Routine ist ausgewogener Work-Life-Balance-Plan."
      },
      {
        id: "adv_freq_7",
        question: "I can _____ find my keys - they're always in different places!",
        translation: "Ich kann meine Schlüssel nie finden - sie sind immer an verschiedenen Stellen!",
        options: ["never", "always", "usually", "sometimes"],
        correct: "never",
        explanation: "Nach MODAL Verb: 'can never find'. Diese chronische Schlüssel-Verlegung ist frustrierende alltägliche Suche-Herausforderung."
      },
      {
        id: "adv_freq_8",
        question: "She _____ drinks coffee - maybe once or twice a month maximum.",
        translation: "Sie trinkt selten Kaffee - vielleicht maximal ein- oder zweimal im Monat.",
        options: ["rarely", "often", "always", "usually"],
        correct: "rarely",
        explanation: "Für SELTEN: 'rarely drinks'. Diese geringe Kaffee-Konsumfrequenz ist ungewöhnlich in kaffeeliebender Gesellschaft."
      },
      {
        id: "adv_freq_9",
        question: "We _____ have lunch together at one o'clock every weekday noon.",
        translation: "Wir essen normalerweise jeden Werktag mittags um ein Uhr zusammen zu Mittag.",
        options: ["normally", "never", "rarely", "seldom"],
        correct: "normally",
        explanation: "Für NORMALERWEISE: 'normally have' (= usually). Diese regelmäßige gemeinsame Mittagspause ist schöne Arbeitsroutine für Kollegen."
      },
      {
        id: "adv_freq_10",
        question: "He is _____ happy and smiling - I've never seen him sad once.",
        translation: "Er ist immer glücklich und lächelnd - ich habe ihn noch nie traurig gesehen.",
        options: ["always", "sometimes", "rarely", "never"],
        correct: "always",
        explanation: "Nach 'be': 'is always happy'. Diese konstant positive Stimmung ist bewundernswerte fröhliche Lebenseinstellung trotz allem."
      },
      {
        id: "adv_freq_11",
        question: "I _____ forget people's names - it's a bad habit of mine.",
        translation: "Ich vergesse oft Namen von Leuten - es ist eine schlechte Angewohnheit von mir.",
        options: ["often", "never", "rarely", "always"],
        correct: "often",
        explanation: "Für OFT: 'often forget'. Diese Namen-Vergesslichkeit ist peinliche aber häufige menschliche Schwäche in sozialen Situationen."
      },
      {
        id: "adv_freq_12",
        question: "Do they _____ go to church on Sunday mornings regularly?",
        translation: "Gehen sie regelmäßig sonntagmorgens in die Kirche?",
        options: ["regularly", "always", "never", "rarely"],
        correct: "regularly",
        explanation: "Für REGELMÄSSIG: 'regularly go'. Diese Sonntag-Kirche-Routine ist traditionelle religiöse Wochenpraxis für gläubige Familien."
      },
      {
        id: "adv_freq_13",
        question: "She will _____ forget this amazing day - it was too special for her.",
        translation: "Sie wird diesen fantastischen Tag niemals vergessen - er war zu besonders für sie.",
        options: ["never", "always", "usually", "sometimes"],
        correct: "never",
        explanation: "Nach 'will': 'will never forget'. Dieser unvergessliche besondere Tag hat tiefe emotionale Bedeutung in ihrem Leben."
      },
      {
        id: "adv_freq_14",
        question: "We don't _____ have time to cook, so we order food instead.",
        translation: "Wir haben oft keine Zeit zu kochen, also bestellen wir stattdessen Essen.",
        options: ["often", "always", "never", "rarely"],
        correct: "often",
        explanation: "Nach 'don't': 'don't often have'. Diese häufige Zeitknappheit führt zu praktischer Essensbestell-Lösung statt Kochen."
      },
      {
        id: "adv_freq_15",
        question: "He _____ arrives on time - I can always count on his punctuality.",
        translation: "Er kommt immer pünktlich an - ich kann immer auf seine Pünktlichkeit zählen.",
        options: ["always", "sometimes", "rarely", "never"],
        correct: "always",
        explanation: "Für IMMER: 'always arrives'. Diese absolute Zuverlässigkeit bei Pünktlichkeit ist wertvolle vertrauenswürdige Eigenschaft."
      }
    ]
  },

  there_is_are: {
    name: "There is/are",
    description: "Es gibt - There is/are in verschiedenen Zeiten verwenden",
    icon: Home,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "there_1",
        question: "_____ a beautiful park near my house with many trees and flowers.",
        translation: "Es gibt einen schönen Park nahe meinem Haus mit vielen Bäumen und Blumen.",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Für SINGULAR: 'There is' (es gibt - Einzahl): 'a park' ist singular. Dieser Park nahe Haus ist wertvoller grüner Erholungsraum."
      },
      {
        id: "there_2",
        question: "_____ many students in the classroom waiting for the teacher patiently.",
        translation: "Es sind viele Schüler im Klassenzimmer, die geduldig auf den Lehrer warten.",
        options: ["There are", "There is", "It is", "They are"],
        correct: "There are",
        explanation: "Für PLURAL: 'There are' (es gibt - Mehrzahl): 'many students' ist Plural. Diese wartenden Schüler zeigen Disziplin."
      },
      {
        id: "there_3",
        question: "_____ any milk left in the fridge for my morning coffee?",
        translation: "Ist noch Milch im Kühlschrank für meinen Morgenkaffee übrig?",
        options: ["Is there", "Are there", "Does there", "Do there"],
        correct: "Is there",
        explanation: "FRAGE singular: 'Is there' (gibt es). 'Milk' ist unzählbar singular. Diese Milch-Frage morgens ist wichtig für Kaffee-Genuss."
      },
      {
        id: "there_4",
        question: "_____ a problem with your computer that needs fixing urgently?",
        translation: "Gibt es ein Problem mit deinem Computer, das dringend behoben werden muss?",
        options: ["Is there", "Are there", "Does there", "Has there"],
        correct: "Is there",
        explanation: "Frage singular: 'Is there a problem'. Diese Computer-Problem-Frage zeigt Hilfsbereitschaft bei technischen Schwierigkeiten."
      },
      {
        id: "there_5",
        question: "_____ three cafés on this street where you can get good coffee.",
        translation: "Es gibt drei Cafés auf dieser Straße, wo du guten Kaffee bekommen kannst.",
        options: ["There are", "There is", "It is", "They are"],
        correct: "There are",
        explanation: "Plural: 'There are three cafés'. Diese Café-Vielfalt auf Straße bietet mehrere Optionen für Kaffee-Genuss."
      },
      {
        id: "there_6",
        question: "_____ a big party at John's house last Saturday night until late.",
        translation: "Es gab letzten Samstagabend bis spät eine große Party in Johns Haus.",
        options: ["There was", "There were", "It was", "They were"],
        correct: "There was",
        explanation: "VERGANGENHEIT singular: 'There was a party'. Diese Samstag-Party bis spät war geselliges fröhliches Ereignis."
      },
      {
        id: "there_7",
        question: "_____ hundreds of people at the concert venue last night watching.",
        translation: "Es waren letzte Nacht hunderte Leute am Konzertort zum Zuschauen.",
        options: ["There were", "There was", "It was", "They were"],
        correct: "There were",
        explanation: "Vergangenheit plural: 'There were hundreds'. Diese große Konzert-Menschenmenge zeigt Popularität des Künstlers."
      },
      {
        id: "there_8",
        question: "_____ be a new shopping mall here next year in this area.",
        translation: "Es wird nächstes Jahr in diesem Gebiet hier ein neues Einkaufszentrum geben.",
        options: ["There will", "There is", "There are", "It will"],
        correct: "There will",
        explanation: "ZUKUNFT: 'There will be'. Dieses geplante Einkaufszentrum nächstes Jahr bringt neue Geschäfte ins Viertel."
      },
      {
        id: "there_9",
        question: "How many chairs _____ in that room for the big meeting tomorrow?",
        translation: "Wie viele Stühle sind in jenem Raum für das große Treffen morgen?",
        options: ["are there", "is there", "there are", "there is"],
        correct: "are there",
        explanation: "Frage plural: 'are there' (gibt es - Mehrzahl). Diese Stuhlzahl-Frage ist praktisch für Meeting-Vorbereitung morgen."
      },
      {
        id: "there_10",
        question: "_____ a good reason why you didn't come to work yesterday morning?",
        translation: "Gab es einen guten Grund, warum du gestern Morgen nicht zur Arbeit kamst?",
        options: ["Was there", "Were there", "Is there", "Are there"],
        correct: "Was there",
        explanation: "Vergangenheit Frage singular: 'Was there a reason'. Diese Abwesenheits-Begründungs-Frage ist berechtigte Arbeitgeber-Anfrage."
      },
      {
        id: "there_11",
        question: "_____ been an accident on the highway - that's why traffic is slow.",
        translation: "Es hat auf der Autobahn einen Unfall gegeben - deshalb ist der Verkehr langsam.",
        options: ["There has", "There have", "It has", "They have"],
        correct: "There has",
        explanation: "Present Perfect: 'There has been' (es hat...gegeben). Dieser Autobahn-Unfall erklärt aktuelle Verkehrs-Verzögerung."
      },
      {
        id: "there_12",
        question: "_____ any messages for me while I was out of office today?",
        translation: "Gab es irgendwelche Nachrichten für mich, während ich heute außer Haus war?",
        options: ["Were there", "Was there", "Are there", "Is there"],
        correct: "Were there",
        explanation: "Vergangenheit Frage plural: 'Were there any messages'. Diese Nachrichten-Frage nach Abwesenheit ist wichtig für verpasste Kommunikation."
      },
      {
        id: "there_13",
        question: "_____ going to be a test next week, so start preparing now.",
        translation: "Es wird nächste Woche einen Test geben, also fang jetzt mit Vorbereiten an.",
        options: ["There is", "There are", "It is", "They are"],
        correct: "There is",
        explanation: "Zukunft mit 'going to': 'There is going to be'. Diese Test-Ankündigung nächste Woche ist Warnung für rechtzeitige Vorbereitung."
      },
      {
        id: "there_14",
        question: "_____ a time when people didn't have smartphones at all ever.",
        translation: "Es gab eine Zeit, als Leute überhaupt niemals Smartphones hatten.",
        options: ["There was", "There were", "It was", "They were"],
        correct: "There was",
        explanation: "Vergangenheit: 'There was a time'. Diese Smartphone-freie Vergangenheit ist für junge Generation unvorstellbar."
      },
      {
        id: "there_15",
        question: "_____ anything I can do to help you with this difficult situation?",
        translation: "Gibt es irgendetwas, das ich tun kann, um dir in dieser schweren Situation zu helfen?",
        options: ["Is there", "Are there", "Does there", "Do there"],
        correct: "Is there",
        explanation: "Frage mit 'anything' (singular): 'Is there anything'. Diese Hilfsangebots-Frage in schwieriger Lage ist mitfühlende unterstützende Geste."
      }
    ]
  },

  countable_uncountable: {
    name: "Countable vs Uncountable",
    description: "Zählbar vs unzählbar - korrekte Verwendung und Mengenangaben",
    icon: Hash,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "count_1",
        question: "I need to buy _____ new furniture for my living room soon.",
        translation: "Ich muss bald neue Möbel für mein Wohnzimmer kaufen.",
        options: ["some", "a", "an", "many"],
        correct: "some",
        explanation: "'Furniture' ist UNZÄHLBAR: KEIN 'a/an', nutze 'some'. Diese Möbel-Anschaffung fürs Wohnzimmer ist wichtige Einrichtungs-Investition."
      },
      {
        id: "count_2",
        question: "She gave me _____ very helpful advice about my career yesterday.",
        translation: "Sie gab mir gestern sehr hilfreichen Rat über meine Karriere.",
        options: ["some", "a", "an", "many"],
        correct: "some",
        explanation: "'Advice' ist UNZÄHLBAR: 'some advice' (nicht 'an advice'). Dieser Karriere-Rat gestern ist wertvolle Orientierungshilfe."
      },
      {
        id: "count_3",
        question: "Can I have _____ water, please? I'm very thirsty right now.",
        translation: "Kann ich bitte Wasser haben? Ich bin jetzt sehr durstig.",
        options: ["some", "a", "an", "many"],
        correct: "some",
        explanation: "'Water' ist UNZÄHLBAR: 'some water'. Diese Wasser-Bitte bei Durst ist grundlegendes menschliches Bedürfnis."
      },
      {
        id: "count_4",
        question: "There are _____ apples in the basket on the kitchen table.",
        translation: "Es sind drei Äpfel im Korb auf dem Küchentisch.",
        options: ["three", "much", "a little", "a few"],
        correct: "three",
        explanation: "ZÄHLBAR: kann Zahl nutzen: 'three apples'. Diese spezifische Apfelzahl im Korb ist für Snack oder Rezept."
      },
      {
        id: "count_5",
        question: "I don't have _____ time to finish all this work before deadline.",
        translation: "Ich habe nicht viel Zeit, all diese Arbeit vor der Deadline zu beenden.",
        options: ["much", "many", "a few", "several"],
        correct: "much",
        explanation: "'Time' ist UNZÄHLBAR: 'much time' in Negativ. Dieser Zeitdruck vor Deadline erfordert sehr effizientes schnelles Arbeiten."
      },
      {
        id: "count_6",
        question: "He has _____ experience working with international clients abroad.",
        translation: "Er hat viel Erfahrung in der Arbeit mit internationalen Kunden im Ausland.",
        options: ["a lot of", "many", "a few", "several"],
        correct: "a lot of",
        explanation: "'Experience' ist UNZÄHLBAR: 'a lot of experience'. Diese internationale Arbeitserfahrung ist wertvolles professionelles Kapital."
      },
      {
        id: "count_7",
        question: "There isn't _____ traffic on the roads today - they're quite empty.",
        translation: "Es ist heute nicht viel Verkehr auf den Straßen - sie sind ziemlich leer.",
        options: ["much", "many", "a few", "several"],
        correct: "much",
        explanation: "'Traffic' ist UNZÄHLBAR: 'much traffic'. Diese verkehrsarme Situation heute ist angenehm für schnelles Vorankommen."
      },
      {
        id: "count_8",
        question: "We need _____ chairs for all the guests at the party tonight.",
        translation: "Wir brauchen mehr Stühle für alle Gäste bei der Party heute Abend.",
        options: ["more", "much", "a little", "less"],
        correct: "more",
        explanation: "ZÄHLBAR: 'more chairs' (mehr Stühle). Diese zusätzlichen Stühle sind nötig für komfortables Sitzen aller Party-Gäste."
      },
      {
        id: "count_9",
        question: "Could you give me _____ information about the course details?",
        translation: "Könntest du mir einige Informationen über die Kursdetails geben?",
        options: ["some", "a", "an", "many"],
        correct: "some",
        explanation: "'Information' ist UNZÄHLBAR: 'some information'. Diese Kurs-Detail-Bitte ist für informierte Anmelde-Entscheidung wichtig."
      },
      {
        id: "count_10",
        question: "There are only _____ cookies left - not enough for everyone here.",
        translation: "Es sind nur wenige Kekse übrig - nicht genug für alle hier.",
        options: ["a few", "a little", "much", "less"],
        correct: "a few",
        explanation: "ZÄHLBAR: 'a few cookies' (wenige Kekse). Diese Keksknappheit reicht nicht für fairen Gruppenverzehr."
      },
      {
        id: "count_11",
        question: "I have _____ homework to do tonight for tomorrow's classes.",
        translation: "Ich habe heute Abend viele Hausaufgaben für morgige Stunden zu machen.",
        options: ["a lot of", "many", "a few", "several"],
        correct: "a lot of",
        explanation: "'Homework' ist UNZÄHLBAR: 'a lot of homework'. Diese umfangreiche Hausaufgabenlast heute Abend ist zeitintensive Schüler-Verpflichtung."
      },
      {
        id: "count_12",
        question: "She doesn't eat _____ meat - she prefers vegetables and fruits.",
        translation: "Sie isst nicht viel Fleisch - sie bevorzugt Gemüse und Früchte.",
        options: ["much", "many", "a few", "several"],
        correct: "much",
        explanation: "'Meat' ist UNZÄHLBAR: 'much meat'. Diese vegetarische Tendenz ist gesunde bewusste Ernährungsentscheidung."
      },
      {
        id: "count_13",
        question: "We bought _____ bread from the bakery this morning for breakfast.",
        translation: "Wir kauften heute Morgen vom Bäcker Brot zum Frühstück.",
        options: ["some", "a", "an", "many"],
        correct: "some",
        explanation: "'Bread' ist UNZÄHLBAR: 'some bread' (etwas Brot). Dieser morgendliche Bäcker-Kauf ist für frisches Frühstücksbrot."
      },
      {
        id: "count_14",
        question: "There are _____ cars parked outside the building right now.",
        translation: "Es sind jetzt gerade mehrere Autos vor dem Gebäude geparkt.",
        options: ["several", "much", "a little", "less"],
        correct: "several",
        explanation: "ZÄHLBAR: 'several cars' (mehrere Autos). Diese Parkplatzsituation vor Gebäude zeigt aktuelle Besucherzahl."
      },
      {
        id: "count_15",
        question: "He needs _____ help with his studies - the subject is very difficult.",
        translation: "Er braucht Hilfe bei seinen Studien - das Fach ist sehr schwierig.",
        options: ["some", "a", "an", "many"],
        correct: "some",
        explanation: "'Help' ist UNZÄHLBAR: 'some help' (etwas Hilfe). Diese Lernhilfe-Notwendigkeit bei schwerem Fach ist verständlich."
      }
    ]
  },

  have_have_got: {
    name: "Have vs Have Got",
    description: "Besitz ausdrücken - have und have got unterscheiden",
    icon: Users2,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "have_1",
        question: "I _____ a new car that I bought just last month from dealer.",
        translation: "Ich habe ein neues Auto, das ich gerade letzten Monat vom Händler kaufte.",
        options: ["have", "have got", "both correct", "has"],
        correct: "both correct",
        explanation: "Für BESITZ: 'have' (US) oder 'have got' (UK) beide korrekt. Dieser Neuwagen-Kauf letzten Monat ist aufregende neue Anschaffung."
      },
      {
        id: "have_2",
        question: "_____ she _____ any brothers or sisters in her family at all?",
        translation: "Hat sie überhaupt irgendwelche Brüder oder Schwestern in ihrer Familie?",
        options: ["Does / have", "Has / got", "both correct", "Is / having"],
        correct: "both correct",
        explanation: "FRAGE: 'Does she have' (US) oder 'Has she got' (UK). Diese Geschwister-Frage erkundet Familienstruktur."
      },
      {
        id: "have_3",
        question: "We _____ got enough money to buy that expensive house unfortunately.",
        translation: "Wir haben leider nicht genug Geld, um jenes teure Haus zu kaufen.",
        options: ["haven't", "don't have", "both correct", "isn't"],
        correct: "haven't",
        explanation: "NEGATIV mit 'got': 'haven't got'. Auch 'don't have' möglich. Diese finanzielle Hausgrenze ist realistische Budgeterkenntnis."
      },
      {
        id: "have_4",
        question: "He _____ breakfast at seven o'clock every morning without exception.",
        translation: "Er frühstückt jeden Morgen ohne Ausnahme um sieben Uhr.",
        options: ["has", "has got", "is having", "gets"],
        correct: "has",
        explanation: "Für AKTIVITÄT 'have breakfast': NUR 'has', NICHT 'has got'. Diese pünktliche Frühstücksroutine strukturiert Morgen."
      },
      {
        id: "have_5",
        question: "_____ you _____ a minute to talk about something important please?",
        translation: "Hast du bitte eine Minute, um über etwas Wichtiges zu sprechen?",
        options: ["Have / got", "Do / have", "both correct", "Are / having"],
        correct: "both correct",
        explanation: "Für ZEIT-Besitz: beide Frage-Formen möglich. Diese Gesprächs-Anfrage über Wichtiges braucht kurze Zeit-Zusage."
      },
      {
        id: "have_6",
        question: "I _____ a shower every morning right after waking up immediately.",
        translation: "Ich dusche jeden Morgen sofort direkt nach dem Aufwachen.",
        options: ["have", "have got", "am having", "get"],
        correct: "have",
        explanation: "Für AKTIVITÄT 'have a shower': NUR 'have', NICHT 'got'. Diese morgendliche Dusch-Routine ist Frische-Start in Tag."
      },
      {
        id: "have_7",
        question: "They _____ three children - two boys and one girl in family.",
        translation: "Sie haben drei Kinder - zwei Jungen und ein Mädchen in der Familie.",
        options: ["have", "have got", "both correct", "has"],
        correct: "both correct",
        explanation: "Für BESITZ (Kinder): beide Formen korrekt. Diese Drei-Kinder-Familie ist lebhafte große Familienstruktur."
      },
      {
        id: "have_8",
        question: "_____ he _____ a headache? He looks very pale and uncomfortable.",
        translation: "Hat er Kopfschmerzen? Er sieht sehr blass und unwohl aus.",
        options: ["Does / have", "Has / got", "both correct", "Is / having"],
        correct: "both correct",
        explanation: "Frage nach ZUSTAND: beide Formen möglich. Diese Kopfschmerz-Vermutung basiert auf blassem Aussehen."
      },
      {
        id: "have_9",
        question: "We _____ dinner at a nice restaurant tonight with our colleagues.",
        translation: "Wir essen heute Abend mit unseren Kollegen in einem schönen Restaurant.",
        options: ["are having", "have", "have got", "will have"],
        correct: "are having",
        explanation: "Für GEPLANTE Aktivität: Present Continuous 'are having'. Dieses Restaurant-Abendessen mit Kollegen ist feste Verabredung."
      },
      {
        id: "have_10",
        question: "She _____ got beautiful blue eyes that everyone always compliments.",
        translation: "Sie hat schöne blaue Augen, die jeder immer komplimentiert.",
        options: ["has", "have", "is", "does"],
        correct: "has",
        explanation: "Mit 'got' für MERKMAL: 'has got' (UK). Auch 'has' ohne 'got'. Diese Augenfarbe ist auffälliges attraktives Merkmal."
      },
      {
        id: "have_11",
        question: "I don't _____ time to go shopping today - I'm too busy with work.",
        translation: "Ich habe heute keine Zeit zum Einkaufen - ich bin zu beschäftigt mit Arbeit.",
        options: ["have", "have got", "has", "am"],
        correct: "have",
        explanation: "NEGATIV ohne 'got': 'don't have time'. Diese Zeitknappheit heute macht Einkaufen unmöglich wegen Arbeit."
      },
      {
        id: "have_12",
        question: "_____ they _____ a car or do they use public transport mainly?",
        translation: "Haben sie ein Auto oder nutzen sie hauptsächlich öffentliche Verkehrsmittel?",
        options: ["Do / have", "Have / got", "both correct", "Are / having"],
        correct: "both correct",
        explanation: "Besitz-Frage: beide Formen möglich. Diese Transport-Frage erkundet Mobilitäts-Gewohnheiten der Person."
      },
      {
        id: "have_13",
        question: "He _____ a meeting with his boss at three o'clock this afternoon.",
        translation: "Er hat heute Nachmittag um drei Uhr ein Treffen mit seinem Chef.",
        options: ["has", "has got", "is having", "both has and is having"],
        correct: "both has and is having",
        explanation: "Für TERMIN: 'has' oder 'is having' beide möglich. Dieses Chef-Meeting heute ist wichtiges berufliches Gespräch."
      },
      {
        id: "have_14",
        question: "We _____ got any plans for this weekend yet - maybe stay home.",
        translation: "Wir haben noch keine Pläne für dieses Wochenende - vielleicht zu Hause bleiben.",
        options: ["haven't", "don't have", "both correct", "aren't"],
        correct: "both correct",
        explanation: "Negativ: 'haven't got' oder 'don't have'. Diese Planlosigkeit fürs Wochenende lässt Raum für spontane Entscheidungen."
      },
      {
        id: "have_15",
        question: "I usually _____ lunch at around one o'clock in the afternoon daily.",
        translation: "Ich esse normalerweise täglich gegen ein Uhr nachmittags zu Mittag.",
        options: ["have", "have got", "am having", "get"],
        correct: "have",
        explanation: "Für AKTIVITÄT 'have lunch': NUR 'have', NICHT 'got'. Diese Mittagspausen-Zeit um eins ist feste tägliche Essensroutine."
      }
    ]
  }
};

export default part9Categories;
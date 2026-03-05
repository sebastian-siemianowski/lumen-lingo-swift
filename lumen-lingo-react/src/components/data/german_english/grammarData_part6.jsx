/**
 * GERMAN → ENGLISH GRAMMAR - PART 6
 * 4 categories, 15 questions each
 */

import { GitBranch, MessageSquare, RefreshCw, TrendingUp } from "lucide-react";

export const part6Categories = {
  conditional_sentences: {
    name: "Conditional Sentences",
    description: "Bedingungssätze - if-Sätze Typ 1, 2, 3 richtig bilden",
    icon: GitBranch,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "cond_1",
        question: "If it _____ tomorrow, we will cancel the outdoor picnic event.",
        translation: "Wenn es morgen regnet, werden wir das Outdoor-Picknick absagen.",
        options: ["rains", "will rain", "rained", "would rain"],
        correct: "rains",
        explanation: "Typ 1 (REAL): 'if' + Präsens, Hauptsatz 'will': 'if it rains, we will cancel'. Diese reale Möglichkeit von Regen beeinflusst Picknick-Planung."
      },
      {
        id: "cond_2",
        question: "If I _____ rich, I would travel around the world for a year.",
        translation: "Wenn ich reich wäre, würde ich ein Jahr lang um die Welt reisen.",
        options: ["were", "am", "was", "will be"],
        correct: "were",
        explanation: "Typ 2 (IRREAL Gegenwart): 'if' + Past (were für alle Personen), Hauptsatz 'would': Dieser Weltreise-Traum ist momentan unrealistisch wegen fehlender finanzieller Mittel."
      },
      {
        id: "cond_3",
        question: "If she _____ harder, she would have passed the difficult exam.",
        translation: "Wenn sie härter gelernt hätte, hätte sie die schwere Prüfung bestanden.",
        options: ["had studied", "studied", "would study", "studies"],
        correct: "had studied",
        explanation: "Typ 3 (IRREAL Vergangenheit): 'if' + Past Perfect, Hauptsatz 'would have': Dieses Nicht-Bestehen ist bedauerliches Resultat unzureichender Vorbereitung."
      },
      {
        id: "cond_4",
        question: "I will help you _____ you promise to work harder next time.",
        translation: "Ich werde dir helfen, wenn du versprichst, nächstes Mal härter zu arbeiten.",
        options: ["if", "unless", "when", "because"],
        correct: "if",
        explanation: "Typ 1: 'will help if you promise'. Diese Hilfs-Bedingung ist Motivationsversuch für zukünftige bessere Anstrengung und zeigt Unterstützung."
      },
      {
        id: "cond_5",
        question: "If you _____ me yesterday, I could have helped you immediately.",
        translation: "Wenn du mich gestern gefragt hättest, hätte ich dir sofort helfen können.",
        options: ["had asked", "asked", "would ask", "ask"],
        correct: "had asked",
        explanation: "Typ 3: 'if you had asked, I could have helped'. Diese verpasste Hilfsgelegenheit ist bedauerlich wegen zu später Information."
      },
      {
        id: "cond_6",
        question: "If I _____ you, I would apologize to her right away immediately.",
        translation: "Wenn ich du wäre, würde ich mich sofort bei ihr entschuldigen.",
        options: ["were", "am", "was", "will be"],
        correct: "were",
        explanation: "Typ 2: Feste Phrase 'if I were you' (wenn ich du wäre). Dieser Rat zur sofortigen Entschuldigung ist hilfreiche Empfehlung zur Konfliktlösung."
      },
      {
        id: "cond_7",
        question: "Unless you _____ now, you will miss the last train home tonight.",
        translation: "Es sei denn du gehst jetzt, wirst du den letzten Zug nach Hause heute Abend verpassen.",
        options: ["leave", "will leave", "left", "would leave"],
        correct: "leave",
        explanation: "'Unless' (es sei denn) = if not: mit Präsens. Diese dringende Warnung vor Zugverpassen erfordert sofortiges Handeln für rechtzeitige Heimkehr."
      },
      {
        id: "cond_8",
        question: "If he _____ so much, he wouldn't be overweight and unhealthy now.",
        translation: "Wenn er nicht so viel essen würde, wäre er jetzt nicht übergewichtig und ungesund.",
        options: ["didn't eat", "doesn't eat", "wouldn't eat", "hadn't eaten"],
        correct: "didn't eat",
        explanation: "Typ 2: 'if he didn't eat, he wouldn't be'. Diese hypothetische Situation zeigt direkten Zusammenhang zwischen täglichen Essgewohnheiten und aktueller Gesundheit."
      },
      {
        id: "cond_9",
        question: "We _____ the bus if we had left five minutes earlier this morning.",
        translation: "Wir hätten den Bus erwischt, wenn wir heute Morgen fünf Minuten früher losgefahren wären.",
        options: ["would have caught", "would catch", "will catch", "catch"],
        correct: "would have caught",
        explanation: "Typ 3: 'would have caught if had left'. Diese knappe Bus-Verfehlung ist frustrierende Konsequenz zu späten morgendlichen Aufbruchs."
      },
      {
        id: "cond_10",
        question: "If the weather _____ nice, we'll go to the beach tomorrow afternoon.",
        translation: "Wenn das Wetter schön ist, gehen wir morgen Nachmittag zum Strand.",
        options: ["is", "will be", "was", "would be"],
        correct: "is",
        explanation: "Typ 1: 'if weather is, we'll go'. Präsens nach 'if' für reale Zukunft. Dieser Strand-Plan hängt von morgigem Wetter ab."
      },
      {
        id: "cond_11",
        question: "I wish I _____ speak French fluently like a native speaker now.",
        translation: "Ich wünschte, ich könnte jetzt fließend Französisch wie ein Muttersprachler sprechen.",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'Wish' + Past für IRREALEN Wunsch Gegenwart: 'wish I could speak'. Dieser Sprachtraum ist momentan unerfülltes aber erreichbares Ziel mit Übung."
      },
      {
        id: "cond_12",
        question: "If only I _____ studied medicine instead of economics years ago!",
        translation: "Wenn ich doch nur vor Jahren Medizin statt Wirtschaft studiert hätte!",
        options: ["had", "have", "will", "would"],
        correct: "had",
        explanation: "'If only' + Past Perfect für BEDAUERN Vergangenheit: 'if only I had studied'. Diese Studienwahl-Reue ist häufiges Nachdenken über alternative Lebenswege."
      },
      {
        id: "cond_13",
        question: "Provided that you _____ on time, we can catch the early show.",
        translation: "Vorausgesetzt du kommst pünktlich, können wir die frühe Vorstellung erwischen.",
        options: ["arrive", "will arrive", "arrived", "would arrive"],
        correct: "arrive",
        explanation: "'Provided that' (vorausgesetzt) + Präsens: wie 'if'. Diese Pünktlichkeits-Bedingung ist wichtig für rechtzeitige Kino-Ankunft ohne Verspätung."
      },
      {
        id: "cond_14",
        question: "In case it _____, take an umbrella with you just to be safe.",
        translation: "Falls es regnet, nimm vorsichtshalber einen Regenschirm mit.",
        options: ["rains", "will rain", "rained", "would rain"],
        correct: "rains",
        explanation: "'In case' (falls) + Präsens für Vorsichtsmaßnahme: Dieser Regenschirm-Rat ist praktische Wettervorsorge für möglichen überraschenden Regen unterwegs."
      },
      {
        id: "cond_15",
        question: "If he _____ more carefully, he wouldn't have had the car accident.",
        translation: "Wenn er vorsichtiger gefahren wäre, hätte er den Autounfall nicht gehabt.",
        options: ["had driven", "drove", "would drive", "drives"],
        correct: "had driven",
        explanation: "Typ 3: 'if he had driven, he wouldn't have had'. Dieser vermeidbare Unfall ist bedauerliches Resultat unvorsichtigen Fahrens auf Straße."
      }
    ]
  },

  reported_speech: {
    name: "Reported Speech",
    description: "Indirekte Rede - Zeitverschiebung und Pronomen-Änderung",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "rep_1",
        question: "She said she _____ tired and wanted to go home early.",
        translation: "Sie sagte, sie wäre müde und wollte früh nach Hause gehen.",
        options: ["was", "is", "will be", "has been"],
        correct: "was",
        explanation: "Indirekte Rede: Präsens → Past: 'said she was' (sagte, sie wäre). Diese Müdigkeit war verständlicher Grund für frühen Heimwunsch nach langem Tag."
      },
      {
        id: "rep_2",
        question: "He told me he _____ to Paris the following week for business.",
        translation: "Er sagte mir, er würde nächste Woche geschäftlich nach Paris reisen.",
        options: ["would go", "will go", "goes", "went"],
        correct: "would go",
        explanation: "Future in Vergangenheit: 'will' → 'would': 'told me he would go'. Diese Geschäftsreise-Ankündigung war für folgende Woche geplant."
      },
      {
        id: "rep_3",
        question: "They said they _____ the movie the night before our conversation.",
        translation: "Sie sagten, sie hätten den Film in der Nacht vor unserem Gespräch gesehen.",
        options: ["had seen", "have seen", "saw", "see"],
        correct: "had seen",
        explanation: "Past Perfect in indirekter Rede: 'said they had seen'. Dieser Film vor unserem Gespräch war interessantes Thema ihrer Erzählung."
      },
      {
        id: "rep_4",
        question: "She asked me _____ I could help her with the heavy luggage.",
        translation: "Sie fragte mich, ob ich ihr mit dem schweren Gepäck helfen könnte.",
        options: ["if", "that", "what", "when"],
        correct: "if",
        explanation: "Indirekte JA/NEIN-Frage: 'asked if I could' (fragte, ob ich könnte). Diese Hilfsanfrage bei schwerem Gepäck ist höfliche Bitte."
      },
      {
        id: "rep_5",
        question: "He said he _____ finish the report by Friday without fail.",
        translation: "Er sagte, er würde den Bericht ohne Ausnahme bis Freitag fertigstellen.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Versprechen in Vergangenheit: 'will' → 'would': 'said he would finish'. Diese Freitags-Zusage ist verbindliche Arbeitsverpflichtung mit klarer Deadline."
      },
      {
        id: "rep_6",
        question: "They told us they _____ waiting for over an hour already.",
        translation: "Sie sagten uns, sie würden bereits seit über einer Stunde warten.",
        options: ["had been", "have been", "were", "are"],
        correct: "had been",
        explanation: "Past Perfect Continuous: 'told us they had been waiting'. Diese einstündige Wartezeit vor unserer Information ist frustrierend und unangenehm."
      },
      {
        id: "rep_7",
        question: "She wanted to know _____ I was planning to do that weekend.",
        translation: "Sie wollte wissen, was ich an jenem Wochenende zu tun plante.",
        options: ["what", "that", "if", "when"],
        correct: "what",
        explanation: "Indirekte W-Frage: 'wanted to know what I was planning'. Diese Wochenend-Pläne-Frage ist typische freundliche soziale Konversation."
      },
      {
        id: "rep_8",
        question: "He said he _____ never been to Japan before in his life.",
        translation: "Er sagte, er wäre noch nie zuvor in seinem Leben in Japan gewesen.",
        options: ["had", "has", "have", "will have"],
        correct: "had",
        explanation: "Perfect → Past Perfect: 'said he had never been'. Diese Japan-Unerfahrenheit macht seine geplante Reise zur aufregenden Premiere."
      },
      {
        id: "rep_9",
        question: "She told me _____ wait for her at the entrance of the building.",
        translation: "Sie sagte mir, ich solle am Gebäudeeingang auf sie warten.",
        options: ["to", "that", "if", "what"],
        correct: "to",
        explanation: "Für BEFEHL/BITTE: 'told me to wait' (sagte mir zu warten). Diese Warteanweisung am Eingang koordiniert praktisch unser Treffen."
      },
      {
        id: "rep_10",
        question: "He asked me _____ I had finished my homework assignment yet.",
        translation: "Er fragte mich, ob ich meine Hausaufgabe schon fertig hätte.",
        options: ["if", "that", "what", "when"],
        correct: "if",
        explanation: "Indirekte Ja/Nein-Frage: 'asked if I had finished'. Diese Hausaufgaben-Frage ist typische elterliche oder lehrerhafte Kontrolle des Lernfortschritts."
      },
      {
        id: "rep_11",
        question: "They said they _____ come if they had more free time available.",
        translation: "Sie sagten, sie würden kommen, wenn sie mehr freie Zeit zur Verfügung hätten.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "Conditional in indirekter Rede: 'said they would come if'. Diese bedingte Zusage zeigt Zeitknappheit als Haupthindernis für Teilnahme."
      },
      {
        id: "rep_12",
        question: "She asked _____ she could borrow my laptop for the presentation.",
        translation: "Sie fragte, ob sie meinen Laptop für die Präsentation ausleihen könnte.",
        options: ["if", "that", "what", "when"],
        correct: "if",
        explanation: "Höfliche indirekte Frage: 'asked if she could borrow'. Diese Laptop-Leih-Anfrage ist für wichtige berufliche oder schulische Präsentation."
      },
      {
        id: "rep_13",
        question: "He admitted that he _____ my phone number somewhere carelessly.",
        translation: "Er gab zu, dass er meine Telefonnummer irgendwo nachlässig verloren hatte.",
        options: ["had lost", "has lost", "lost", "loses"],
        correct: "had lost",
        explanation: "Eingeständnis in Past Perfect: 'admitted he had lost'. Dieser Nummernverlust erklärt fehlende Kommunikation und Kontaktschwierigkeit zwischen uns."
      },
      {
        id: "rep_14",
        question: "She wondered _____ the train would arrive on time or be delayed.",
        translation: "Sie fragte sich, ob der Zug pünktlich ankommen oder verspätet sein würde.",
        options: ["if", "that", "what", "which"],
        correct: "if",
        explanation: "Nach 'wonder' (sich fragen): 'wondered if...would arrive'. Diese Unsicherheit über Zugpünktlichkeit ist bei Bahnreisen häufige berechtigte Sorge."
      },
      {
        id: "rep_15",
        question: "The teacher said we _____ study harder for better exam results.",
        translation: "Der Lehrer sagte, wir sollten für bessere Prüfungsergebnisse härter lernen.",
        options: ["should", "shall", "will", "would"],
        correct: "should",
        explanation: "'Should' bleibt in indirekter Rede: 'said we should study'. Dieser Lernrat vom Lehrer zielt auf akademische Verbesserung aller Schüler."
      }
    ]
  },

  reflexive_pronouns: {
    name: "Reflexive Pronouns",
    description: "Reflexivpronomen - myself, yourself, themselves korrekt einsetzen",
    icon: RefreshCw,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "reflex_1",
        question: "I cut _____ while preparing dinner in the kitchen yesterday evening.",
        translation: "Ich schnitt mich gestern Abend beim Abendessen-Vorbereiten in der Küche.",
        options: ["myself", "me", "my", "mine"],
        correct: "myself",
        explanation: "Reflexiv wenn SUBJEKT = OBJEKT: 'cut myself' (schnitt mich). Diese Küchen-Verletzung beim Kochen mit scharfem Messer ist häufiger kleiner Unfall."
      },
      {
        id: "reflex_2",
        question: "She looked at _____ in the mirror before going to the party.",
        translation: "Sie schaute sich vor dem Zur-Party-Gehen im Spiegel an.",
        options: ["herself", "her", "hers", "she"],
        correct: "herself",
        explanation: "Reflexiv: 'looked at herself' (schaute sich an). Diese Spiegel-Kontrolle vor Party ist typische Vorbereitung für guten ersten Auftritt."
      },
      {
        id: "reflex_3",
        question: "The children enjoyed _____ at the amusement park all day long.",
        translation: "Die Kinder amüsierten sich den ganzen Tag im Vergnügungspark.",
        options: ["themselves", "them", "their", "they"],
        correct: "themselves",
        explanation: "Reflexiv Plural: 'enjoyed themselves' (amüsierten sich). Dieser ganztägige Vergnügungspark-Spaß ist schöne unvergessliche Kindheitserinnerung."
      },
      {
        id: "reflex_4",
        question: "You should be proud of _____ - you did an amazing job today!",
        translation: "Du solltest stolz auf dich sein - du hast heute eine fantastische Arbeit gemacht!",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "Nach Präposition: 'proud of yourself' (stolz auf dich). Dieses Kompliment für gute Leistung ist völlig verdienter Stolz auf Erreichtes."
      },
      {
        id: "reflex_5",
        question: "We need to ask _____ if this is really the right decision.",
        translation: "Wir müssen uns fragen, ob dies wirklich die richtige Entscheidung ist.",
        options: ["ourselves", "us", "our", "ours"],
        correct: "ourselves",
        explanation: "Reflexiv Plural: 'ask ourselves' (uns fragen). Diese kritische Selbstreflexion vor wichtiger Entscheidung ist weise und verantwortungsvoll."
      },
      {
        id: "reflex_6",
        question: "He taught _____ how to play guitar using online video tutorials.",
        translation: "Er brachte sich selbst bei, Gitarre zu spielen, mithilfe von Online-Video-Tutorials.",
        options: ["himself", "him", "his", "he"],
        correct: "himself",
        explanation: "Reflexiv: 'taught himself' (brachte sich bei). Dieses Selbstlernen durch Online-Videos ist moderne erfolgreiche autodidaktische Lernmethode."
      },
      {
        id: "reflex_7",
        question: "The door opened by _____ - it must have been the wind blowing.",
        translation: "Die Tür öffnete sich von selbst - es muss der wehende Wind gewesen sein.",
        options: ["itself", "it", "its", "it's"],
        correct: "itself",
        explanation: "Reflexiv für Dinge: 'by itself' (von selbst/allein). Diese selbstöffnende Tür durch starken Wind ist leicht gruselige überraschende Erfahrung."
      },
      {
        id: "reflex_8",
        question: "Make _____ at home - feel free to use anything you need.",
        translation: "Mach es dir zu Hause gemütlich - benutze frei, was du brauchst.",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "Feste Idiom-Phrase 'make yourself at home' (fühl dich wie zu Hause). Diese warmherzige Gastfreundschaft lädt zu völlig ungezwungenem Verhalten ein."
      },
      {
        id: "reflex_9",
        question: "They blamed _____ for the failure of the important project.",
        translation: "Sie gaben sich selbst die Schuld für das Scheitern des wichtigen Projekts.",
        options: ["themselves", "them", "their", "they"],
        correct: "themselves",
        explanation: "Reflexiv: 'blamed themselves' (gaben sich Schuld). Diese Übernahme von Selbstverantwortung für Projekt-Fehlschlag ist reife ehrliche Haltung."
      },
      {
        id: "reflex_10",
        question: "I had to remind _____ to stay calm during the stressful presentation.",
        translation: "Ich musste mich daran erinnern, während der stressigen Präsentation ruhig zu bleiben.",
        options: ["myself", "me", "my", "mine"],
        correct: "myself",
        explanation: "Reflexiv: 'remind myself' (mich erinnern). Diese bewusste Selbstberuhigung bei Präsentation ist hilfreiche Stressbewältigungstechnik für Erfolg."
      },
      {
        id: "reflex_11",
        question: "She considers _____ very lucky to have such wonderful supportive friends.",
        translation: "Sie betrachtet sich als sehr glücklich, so wunderbare unterstützende Freunde zu haben.",
        options: ["herself", "her", "hers", "she"],
        correct: "herself",
        explanation: "Reflexiv: 'considers herself lucky' (betrachtet sich als glücklich). Diese Dankbarkeit für Freunde ist schöne Wertschätzung sozialer Unterstützung."
      },
      {
        id: "reflex_12",
        question: "You can help _____ to some cake and cookies from the table.",
        translation: "Du kannst dir selbst vom Tisch etwas Kuchen und Kekse nehmen.",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "Feste Idiom-Phrase 'help yourself' (bedien dich selbst): Diese freundliche Aufforderung zur Selbstbedienung ist warmherzig gastfreundlich."
      },
      {
        id: "reflex_13",
        question: "The cat cleaned _____ after eating the delicious fish dinner.",
        translation: "Die Katze putzte sich nach dem Essen des leckeren Fischabendessens.",
        options: ["itself", "it", "its", "it's"],
        correct: "itself",
        explanation: "Reflexiv für Tiere: 'cleaned itself' (putzte sich). Diese gründliche Katzenhygiene nach Mahlzeit ist instinktives natürliches Verhalten."
      },
      {
        id: "reflex_14",
        question: "We enjoyed _____ immensely at the wonderful beach resort vacation.",
        translation: "Wir amüsierten uns immens im wunderbaren Strandresort-Urlaub.",
        options: ["ourselves", "us", "our", "ours"],
        correct: "ourselves",
        explanation: "Reflexiv Plural: 'enjoyed ourselves' (amüsierten uns). Dieser genussvolle entspannende Strandurlaub ist erholsame wohlverdiente Auszeit vom Arbeitsalltag."
      },
      {
        id: "reflex_15",
        question: "He hurt _____ badly while playing football in the park yesterday.",
        translation: "Er verletzte sich gestern beim Fußballspielen im Park schlimm.",
        options: ["himself", "him", "his", "he"],
        correct: "himself",
        explanation: "Reflexiv: 'hurt himself' (verletzte sich). Diese schmerzhafte Sportverletzung beim intensiven Fußballspiel ist bedauerlicher Unfall."
      }
    ]
  },

  comparatives_superlatives: {
    name: "Comparatives & Superlatives",
    description: "Steigerung - Komparativ und Superlativ richtig bilden",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_1",
        question: "My brother is _____ than me - he's almost two meters tall.",
        translation: "Mein Bruder ist größer als ich - er ist fast zwei Meter groß.",
        options: ["taller", "more tall", "tallest", "most tall"],
        correct: "taller",
        explanation: "Einsilbig: Adjektiv + '-er': 'taller than' (größer als). Diese beachtliche imposante Körpergröße macht ihn in jeder Gruppe sofort auffallend."
      },
      {
        id: "comp_2",
        question: "This is the _____ book I've ever read in my entire life.",
        translation: "Das ist das interessanteste Buch, das ich je in meinem ganzen Leben gelesen habe.",
        options: ["most interesting", "interestingest", "more interesting", "interestinger"],
        correct: "most interesting",
        explanation: "Mehrsilbig: 'most' + Adjektiv: 'most interesting' (interessanteste). Dieses außergewöhnliche Buch übertrifft alle anderen bisherigen Leseerfahrungen."
      },
      {
        id: "comp_3",
        question: "She runs _____ than anyone else in our entire running club.",
        translation: "Sie läuft schneller als jeder andere in unserem ganzen Laufclub.",
        options: ["faster", "more fast", "fastest", "most fast"],
        correct: "faster",
        explanation: "Einsilbig: 'fast' + '-er': 'faster than'. Diese beeindruckende Laufgeschwindigkeit macht sie zur unangefochtenen Schnellsten im ganzen Club."
      },
      {
        id: "comp_4",
        question: "Today is the _____ day of the year so far - it's freezing outside!",
        translation: "Heute ist der kälteste Tag des Jahres bisher - es ist draußen eisig!",
        options: ["coldest", "most cold", "colder", "more cold"],
        correct: "coldest",
        explanation: "Einsilbig Superlativ: 'the' + Adjektiv + '-est': 'coldest day'. Diese Extremkälte heute ist bisheriger Jahreshöhepunkt an niedrigen Temperaturen."
      },
      {
        id: "comp_5",
        question: "This exercise is _____ difficult than the previous one we did.",
        translation: "Diese Übung ist schwieriger als die vorherige, die wir machten.",
        options: ["more", "most", "difficulter", "difficultest"],
        correct: "more",
        explanation: "Mehrsilbig: 'more' + Adjektiv: 'more difficult than'. Diese gesteigerte Schwierigkeit zeigt klare Lernprogression und steigende Herausforderungen."
      },
      {
        id: "comp_6",
        question: "He is the _____ person I know - always helping others selflessly.",
        translation: "Er ist die freundlichste Person, die ich kenne - hilft anderen immer selbstlos.",
        options: ["kindest", "most kind", "kinder", "more kind"],
        correct: "kindest",
        explanation: "Einsilbig Superlativ: 'kindest person' (freundlichste Person). Diese außergewöhnliche Freundlichkeit ist bewundernswerte positive Charaktereigenschaft."
      },
      {
        id: "comp_7",
        question: "My new apartment is _____ than my old one but more expensive.",
        translation: "Meine neue Wohnung ist größer als meine alte, aber teurer.",
        options: ["bigger", "more big", "biggest", "most big"],
        correct: "bigger",
        explanation: "Einsilbig mit Konsonantenverdopplung: 'big' → 'bigger'. Diese Größenzunahme bei höherem Preis ist typische Wohnungs-Trade-off bei Umzügen."
      },
      {
        id: "comp_8",
        question: "That was the _____ movie I've seen this entire year so far.",
        translation: "Das war der schlechteste Film, den ich dieses ganze Jahr bisher gesehen habe.",
        options: ["worst", "baddest", "more bad", "most bad"],
        correct: "worst",
        explanation: "UNREGELMÄSSIG: 'bad' → 'worse' → 'worst' (schlecht-schlechter-schlechteste). Dieser Jahres-Tiefpunkt bei Filmen ist enttäuschende reine Zeitverschwendung."
      },
      {
        id: "comp_9",
        question: "She speaks English _____ fluently than most native speakers surprisingly.",
        translation: "Sie spricht überraschenderweise fließender Englisch als die meisten Muttersprachler.",
        options: ["more", "most", "much", "many"],
        correct: "more",
        explanation: "Adverb Steigerung: 'more fluently than'. Diese außergewöhnliche Sprachbeherrschung übertrifft sogar viele Muttersprachler durch intensive Übung."
      },
      {
        id: "comp_10",
        question: "This is _____ good _____ that one - they're exactly the same quality.",
        translation: "Dies ist genauso gut wie jenes - sie sind exakt dieselbe Qualität.",
        options: ["as / as", "so / as", "as / than", "more / than"],
        correct: "as / as",
        explanation: "Für GLEICHHEIT nutzen wir 'as...as': 'as good as that'. Diese identische Qualität macht endgültige Auswahl zur reinen Geschmacksfrage."
      },
      {
        id: "comp_11",
        question: "The _____ you practice, the better you will become at it.",
        translation: "Je mehr du übst, desto besser wirst du darin werden.",
        options: ["more", "most", "much", "many"],
        correct: "more",
        explanation: "Für JE...DESTO: 'the more...the better'. Diese direkte Übungs-Erfolgs-Beziehung ist fundamentale universelle Lernwahrheit in allen Bereichen."
      },
      {
        id: "comp_12",
        question: "Mount Everest is the _____ mountain in the entire world.",
        translation: "Mount Everest ist der höchste Berg in der ganzen Welt.",
        options: ["highest", "most high", "higher", "more high"],
        correct: "highest",
        explanation: "Einsilbig Superlativ: 'highest mountain'. Dieser absolute Weltrekord-Berg ist ultimatives herausforderndes Ziel aller ambitionierten Bergsteiger."
      },
      {
        id: "comp_13",
        question: "My car is _____ expensive _____ yours, but faster in acceleration.",
        translation: "Mein Auto ist weniger teuer als deines, aber schneller in Beschleunigung.",
        options: ["less / than", "more / than", "as / as", "so / as"],
        correct: "less / than",
        explanation: "Für WENIGER nutzen wir 'less...than': Diese interessante Preis-Geschwindigkeits-Kombination ist ausgewogenes gutes Preis-Leistungs-Verhältnis."
      },
      {
        id: "comp_14",
        question: "She's becoming _____ and _____ confident with each presentation she gives.",
        translation: "Sie wird mit jeder Präsentation, die sie hält, zuversichtlicher und zuversichtlicher.",
        options: ["more / more", "most / most", "much / much", "many / many"],
        correct: "more / more",
        explanation: "Für ZUNEHMEND: 'more and more confident' (immer zuversichtlicher). Diese kontinuierliche Selbstsicherheitssteigerung durch regelmäßige Übung ist sehr ermutigend."
      },
      {
        id: "comp_15",
        question: "This restaurant serves the _____ pizza in the whole city area.",
        translation: "Dieses Restaurant serviert die beste Pizza im ganzen Stadtgebiet.",
        options: ["best", "goodest", "better", "more good"],
        correct: "best",
        explanation: "UNREGELMÄSSIG: 'good' → 'better' → 'best' (gut-besser-beste). Diese Spitzenpizza macht Restaurant zur absoluten Top-Empfehlung für Pizzaliebhaber."
      }
    ]
  },

  gerund_infinitive: {
    name: "Gerund vs Infinitive",
    description: "Gerundium vs Infinitiv - welche Form nach welchem Verb",
    icon: GitBranch,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "ger_inf_1",
        question: "I enjoy _____ books in my free time at home or in cafes.",
        translation: "Ich genieße es, in meiner Freizeit zu Hause oder in Cafés Bücher zu lesen.",
        options: ["reading", "to read", "read", "reads"],
        correct: "reading",
        explanation: "Nach 'enjoy' nur GERUND (-ing): 'enjoy reading'. Diese entspannende Lesegewohnheit ist beliebte erholsame Freizeitaktivität in ruhiger gemütlicher Atmosphäre."
      },
      {
        id: "ger_inf_2",
        question: "She decided _____ medicine at university after careful consideration.",
        translation: "Sie entschied sich nach sorgfältiger Überlegung, an der Universität Medizin zu studieren.",
        options: ["to study", "studying", "study", "studies"],
        correct: "to study",
        explanation: "Nach 'decide' nur INFINITIV mit 'to': 'decided to study'. Diese wohlüberlegte Studienentscheidung für Medizin ist bedeutende lebenswichtige Karrierewahl."
      },
      {
        id: "ger_inf_3",
        question: "I can't help _____ when I watch funny comedy movies alone.",
        translation: "Ich kann nicht anders als lachen, wenn ich allein lustige Komödienfilme schaue.",
        options: ["laughing", "to laugh", "laugh", "laughs"],
        correct: "laughing",
        explanation: "Feste Phrase 'can't help' + GERUND: 'can't help laughing' (kann nicht anders als lachen). Diese unkontrollierbare Lachreaktion bei Komödien ist normal."
      },
      {
        id: "ger_inf_4",
        question: "He promised _____ more careful in the future with important documents.",
        translation: "Er versprach, in Zukunft mit wichtigen Dokumenten vorsichtiger zu sein.",
        options: ["to be", "being", "be", "is"],
        correct: "to be",
        explanation: "Nach 'promise' nur INFINITIV: 'promised to be'. Dieses Versprechen zu mehr Vorsicht ist direkte Reaktion auf früheren vermeidbaren Fehler."
      },
      {
        id: "ger_inf_5",
        question: "I avoid _____ fast food because it's unhealthy for my body.",
        translation: "Ich vermeide es, Fast Food zu essen, weil es ungesund für meinen Körper ist.",
        options: ["eating", "to eat", "eat", "eats"],
        correct: "eating",
        explanation: "Nach 'avoid' nur GERUND: 'avoid eating'. Diese gesundheitsbewusste Fast-Food-Vermeidung ist kluge langfristige Ernährungsentscheidung für Wohlbefinden."
      },
      {
        id: "ger_inf_6",
        question: "They offered _____ me to the airport early tomorrow morning.",
        translation: "Sie boten an, mich morgen früh zum Flughafen zu fahren.",
        options: ["to drive", "driving", "drive", "drives"],
        correct: "to drive",
        explanation: "Nach 'offer' nur INFINITIV: 'offered to drive'. Dieses großzügige Flughafen-Fahr-Angebot ist sehr freundliche praktische Hilfe."
      },
      {
        id: "ger_inf_7",
        question: "She suggested _____ to the new Italian restaurant downtown tonight.",
        translation: "Sie schlug vor, heute Abend in das neue italienische Restaurant in der Innenstadt zu gehen.",
        options: ["going", "to go", "go", "goes"],
        correct: "going",
        explanation: "Nach 'suggest' nur GERUND: 'suggested going'. Dieser Restaurant-Vorschlag ist nette Initiative für gemeinsames genussvolles Abendessen heute."
      },
      {
        id: "ger_inf_8",
        question: "I learned _____ when I was only five years old at the pool.",
        translation: "Ich lernte schwimmen, als ich erst fünf Jahre alt war im Schwimmbad.",
        options: ["to swim", "swimming", "swim", "swims"],
        correct: "to swim",
        explanation: "Nach 'learn' nur INFINITIV: 'learned to swim'. Diese frühe Schwimmfähigkeit in jungen Jahren ist wichtige grundlegende Lebenskompetenz."
      },
      {
        id: "ger_inf_9",
        question: "He kept _____ even though everyone told him to stop immediately.",
        translation: "Er machte weiter, obwohl jeder ihm sagte, sofort aufzuhören.",
        options: ["going", "to go", "go", "goes"],
        correct: "going",
        explanation: "Nach 'keep' nur GERUND: 'kept going' (machte weiter). Diese Beharrlichkeit trotz allgemeinem Widerstand zeigt Sturheit oder starke Entschlossenheit."
      },
      {
        id: "ger_inf_10",
        question: "I want _____ you something important about what happened yesterday.",
        translation: "Ich möchte dir etwas Wichtiges erzählen über das, was gestern passierte.",
        options: ["to tell", "telling", "tell", "tells"],
        correct: "to tell",
        explanation: "Nach 'want' nur INFINITIV: 'want to tell'. Diese wichtige Mitteilung über gestriges Ereignis ist dringende bedeutsame Information."
      },
      {
        id: "ger_inf_11",
        question: "She doesn't mind _____ for you if you're running a bit late.",
        translation: "Es macht ihr nichts aus, auf dich zu warten, wenn du etwas zu spät bist.",
        options: ["waiting", "to wait", "wait", "waits"],
        correct: "waiting",
        explanation: "Nach 'mind' nur GERUND: 'doesn't mind waiting' (macht nichts aus zu warten). Diese geduldige Toleranz bei Verspätung ist sehr verständnisvoll."
      },
      {
        id: "ger_inf_12",
        question: "We plan _____ Europe next summer for three weeks together.",
        translation: "Wir planen, nächsten Sommer drei Wochen zusammen Europa zu bereisen.",
        options: ["to visit", "visiting", "visit", "visits"],
        correct: "to visit",
        explanation: "Nach 'plan' nur INFINITIV: 'plan to visit'. Diese dreiwöchige Europa-Reise ist aufregende spannende Sommerplanung mit vielen Zielen."
      },
      {
        id: "ger_inf_13",
        question: "I remember _____ him at the party last year, but can't recall name.",
        translation: "Ich erinnere mich, ihn letztes Jahr auf der Party getroffen zu haben, kann mich aber an Namen nicht erinnern.",
        options: ["meeting", "to meet", "meet", "meets"],
        correct: "meeting",
        explanation: "'Remember' + GERUND für ERINNERUNG an Vergangenheit: 'remember meeting' (erinnere mich getroffen zu haben). Diese Namensvergesslichkeit ist leicht peinlich."
      },
      {
        id: "ger_inf_14",
        question: "Don't forget _____ the lights before you leave the house tonight.",
        translation: "Vergiss nicht, heute Abend vor dem Hausverlassen die Lichter auszuschalten.",
        options: ["to turn off", "turning off", "turn off", "turns off"],
        correct: "to turn off",
        explanation: "'Forget' + INFINITIV für ZUKUNFTSHANDLUNG: 'forget to turn off' (vergiss nicht auszuschalten). Diese Erinnerung spart Energie und Stromkosten."
      },
      {
        id: "ger_inf_15",
        question: "She stopped _____ a rest because she was exhausted from running.",
        translation: "Sie hielt an, um eine Pause zu machen, weil sie vom Laufen erschöpft war.",
        options: ["to take", "taking", "take", "takes"],
        correct: "to take",
        explanation: "'Stop' + INFINITIV bedeutet ANHALTEN UM ZU: 'stopped to take' (hielt an um zu nehmen). Diese Erschöpfungspause beim Laufen ist körperlich nötig."
      }
    ]
  }
};

export default part6Categories;
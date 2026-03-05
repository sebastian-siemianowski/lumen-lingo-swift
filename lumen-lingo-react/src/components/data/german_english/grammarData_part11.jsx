/**
 * GERMAN → ENGLISH GRAMMAR - PART 11
 * 3 categories, 15 questions each
 */

import { Zap, BookOpen, Target } from "lucide-react";

export const part11Categories = {
  question_tags: {
    name: "Question Tags",
    description: "Bestätigungsfragen - isn't it, don't you, haven't they anhängen",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "tag_1",
        question: "You're coming to the party tonight, _____ you? Everyone will be there!",
        translation: "Du kommst heute Abend zur Party, nicht wahr? Jeder wird da sein!",
        options: ["aren't", "isn't", "don't", "doesn't"],
        correct: "aren't",
        explanation: "Positiv → Negativ: 'are' wird zu 'aren't you'. Diese Party-Bestätigung mit Information über alle Teilnehmer motiviert zum Kommen."
      },
      {
        id: "tag_2",
        question: "She doesn't like coffee very much, _____ she? She prefers tea always.",
        translation: "Sie mag Kaffee nicht sehr, oder? Sie bevorzugt immer Tee.",
        options: ["does", "doesn't", "is", "isn't"],
        correct: "does",
        explanation: "Negativ → Positiv: 'doesn't' wird zu 'does she'. Diese Getränke-Präferenz für Tee statt Kaffee ist persönliche Geschmackssache."
      },
      {
        id: "tag_3",
        question: "It's a beautiful day today for outdoor activities, _____ it?",
        translation: "Es ist heute ein schöner Tag für Outdoor-Aktivitäten, nicht wahr?",
        options: ["isn't", "doesn't", "aren't", "don't"],
        correct: "isn't",
        explanation: "Positiv → Negativ: 'is' wird zu 'isn't it'. Diese Wetter-Bestätigung lädt zu Aktivitäten im Freien ein."
      },
      {
        id: "tag_4",
        question: "We haven't met before this moment, _____ we? You look familiar though.",
        translation: "Wir haben uns vor diesem Moment noch nicht getroffen, oder? Du siehst aber bekannt aus.",
        options: ["have", "haven't", "did", "didn't"],
        correct: "have",
        explanation: "Negativ → Positiv: 'haven't' wird zu 'have we'. Diese Begegnungs-Unsicherheit trotz Vertrautheit ist interessante Situation."
      },
      {
        id: "tag_5",
        question: "He can speak three languages fluently, _____ he? That's impressive talent!",
        translation: "Er kann fließend drei Sprachen sprechen, nicht wahr? Das ist beeindruckendes Talent!",
        options: ["can't", "doesn't", "isn't", "hasn't"],
        correct: "can't",
        explanation: "Mit Modal: Positiv → Negativ: 'can' wird zu 'can't he'. Diese Dreisprachigkeit ist außergewöhnliche bewundernswerte Fähigkeit."
      },
      {
        id: "tag_6",
        question: "You didn't forget about our appointment tomorrow morning, _____ you?",
        translation: "Du hast unseren Termin morgen früh nicht vergessen, oder?",
        options: ["did", "didn't", "have", "haven't"],
        correct: "did",
        explanation: "Negativ → Positiv: 'didn't' wird zu 'did you'. Diese Termin-Erinnerungs-Frage sichert morgige Verabredung ab."
      },
      {
        id: "tag_7",
        question: "They will come to the wedding ceremony next month, _____ they?",
        translation: "Sie werden nächsten Monat zur Hochzeitszeremonie kommen, nicht wahr?",
        options: ["won't", "don't", "aren't", "haven't"],
        correct: "won't",
        explanation: "Mit 'will': Positiv → Negativ: 'will' wird zu 'won't they'. Diese Hochzeits-Teilnahme-Bestätigung ist wichtig für Gästeplanung."
      },
      {
        id: "tag_8",
        question: "Let's go to the beach this weekend together, _____ we? Weather looks good.",
        translation: "Lass uns dieses Wochenende zusammen zum Strand gehen, oder? Wetter sieht gut aus.",
        options: ["shall", "will", "do", "are"],
        correct: "shall",
        explanation: "Nach 'Let's': immer 'shall we'. Diese Strand-Vorschlag bei gutem Wetter ist attraktive Wochenend-Idee."
      },
      {
        id: "tag_9",
        question: "I'm right about this important matter, _____ I? Please confirm it.",
        translation: "Ich habe Recht in dieser wichtigen Angelegenheit, nicht wahr? Bitte bestätige es.",
        options: ["aren't", "isn't", "don't", "am not"],
        correct: "aren't",
        explanation: "Spezialfall 'I am': wird zu 'aren't I' (NICHT 'amn't'). Diese Bestätigungs-Bitte zeigt Unsicherheit trotz Überzeugung."
      },
      {
        id: "tag_10",
        question: "She has finished her work already for today, _____ she? That was quick!",
        translation: "Sie hat ihre Arbeit für heute schon fertig, nicht wahr? Das war schnell!",
        options: ["hasn't", "doesn't", "isn't", "won't"],
        correct: "hasn't",
        explanation: "Mit 'has': Positiv → Negativ: 'has' wird zu 'hasn't she'. Diese schnelle Arbeitsfertigstellung ist effiziente Leistung."
      },
      {
        id: "tag_11",
        question: "There's a meeting at three o'clock this afternoon, _____ there?",
        translation: "Es gibt heute Nachmittag um drei Uhr ein Treffen, nicht wahr?",
        options: ["isn't", "aren't", "doesn't", "hasn't"],
        correct: "isn't",
        explanation: "Mit 'there's': wird zu 'isn't there'. Diese Meeting-Zeit-Bestätigung klärt wichtigen Termin heute."
      },
      {
        id: "tag_12",
        question: "You used to live in Berlin years ago, _____ you? I remember correctly.",
        translation: "Du hast vor Jahren in Berlin gelebt, nicht wahr? Ich erinnere mich richtig.",
        options: ["didn't", "don't", "aren't", "haven't"],
        correct: "didn't",
        explanation: "Mit 'used to': wird zu 'didn't you'. Diese Berlin-Wohn-Erinnerung ist geteilte Vergangenheits-Information."
      },
      {
        id: "tag_13",
        question: "Nothing bad happened during your trip abroad, _____ it? You're safe.",
        translation: "Nichts Schlimmes ist während deiner Auslandsreise passiert, oder? Du bist sicher.",
        options: ["did", "didn't", "has", "hasn't"],
        correct: "did",
        explanation: "'Nothing' ist NEGATIV: braucht POSITIVES Tag: 'did it'. Diese Sicherheits-Bestätigung nach Reise beruhigt besorgte Person."
      },
      {
        id: "tag_14",
        question: "Open the window to let fresh air in, _____ you? It's stuffy here.",
        translation: "Öffne das Fenster, um frische Luft reinzulassen, ja? Es ist stickig hier.",
        options: ["will", "would", "can", "could"],
        correct: "will",
        explanation: "Bei IMPERATIV: 'will you' (nicht wahr/ja). Diese Fenster-Öffnungs-Bitte verbessert stickige Raum-Luftqualität."
      },
      {
        id: "tag_15",
        question: "You'd rather stay home tonight than go out, _____ you? You look tired.",
        translation: "Du würdest heute Abend lieber zu Hause bleiben als ausgehen, oder? Du siehst müde aus.",
        options: ["wouldn't", "won't", "don't", "aren't"],
        correct: "wouldn't",
        explanation: "Mit 'would rather': wird zu 'wouldn't you'. Diese Heimbleib-Vermutung basiert auf müdem Aussehen der Person."
      }
    ]
  },

  so_such_too_enough: {
    name: "So, Such, Too, Enough",
    description: "Intensität ausdrücken - so, such, too, enough korrekt verwenden",
    icon: BookOpen,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "intense_1",
        question: "The movie was _____ boring that I fell asleep during it completely.",
        translation: "Der Film war so langweilig, dass ich währenddessen komplett einschlief.",
        options: ["so", "such", "too", "very"],
        correct: "so",
        explanation: "'SO' + Adjektiv + 'that': 'so boring that'. Dieser extrem langweilige Film verursachte Einschlafen während Vorstellung."
      },
      {
        id: "intense_2",
        question: "It was _____ a beautiful day that we decided to go hiking outside.",
        translation: "Es war so ein schöner Tag, dass wir beschlossen, draußen wandern zu gehen.",
        options: ["such", "so", "too", "very"],
        correct: "such",
        explanation: "'SUCH' + a + Adjektiv + Nomen: 'such a beautiful day'. Dieses perfekte Wetter motivierte zu spontaner Wander-Entscheidung."
      },
      {
        id: "intense_3",
        question: "The coffee is _____ hot to drink right now - wait a few minutes.",
        translation: "Der Kaffee ist zu heiß zum Trinken jetzt - warte ein paar Minuten.",
        options: ["too", "so", "such", "very"],
        correct: "too",
        explanation: "'TOO' + Adjektiv + 'to': 'too hot to drink' (zu heiß um zu). Diese Kaffee-Hitze erfordert Abkühl-Wartezeit vor Genuss."
      },
      {
        id: "intense_4",
        question: "She's smart _____ to understand this complex problem without help easily.",
        translation: "Sie ist schlau genug, um dieses komplexe Problem ohne Hilfe leicht zu verstehen.",
        options: ["enough", "too", "so", "such"],
        correct: "enough",
        explanation: "Adjektiv + 'ENOUGH' + 'to': 'smart enough to understand'. Diese Intelligenz ermöglicht selbstständiges Problemlösen."
      },
      {
        id: "intense_5",
        question: "They're _____ nice people that everyone enjoys their friendly company always.",
        translation: "Sie sind so nette Leute, dass jeder immer ihre freundliche Gesellschaft genießt.",
        options: ["such", "so", "too", "very"],
        correct: "such",
        explanation: "'SUCH' + Adjektiv + Plural: 'such nice people'. Diese Freundlichkeit macht sie zu beliebten angenehmen Personen überall."
      },
      {
        id: "intense_6",
        question: "This exercise is _____ difficult for me - I need some help please.",
        translation: "Diese Übung ist zu schwierig für mich - ich brauche bitte etwas Hilfe.",
        options: ["too", "so", "such", "very"],
        correct: "too",
        explanation: "'TOO' + Adjektiv + 'for': 'too difficult for me'. Diese Überforderung rechtfertigt Hilfe-Anfrage für Verständnis."
      },
      {
        id: "intense_7",
        question: "He speaks _____ quickly that I can't understand him at all clearly.",
        translation: "Er spricht so schnell, dass ich ihn überhaupt nicht klar verstehen kann.",
        options: ["so", "such", "too", "very"],
        correct: "so",
        explanation: "'SO' + Adverb + 'that': 'so quickly that'. Dieses Schnell-Sprechen verhindert klares Verständnis für Zuhörer."
      },
      {
        id: "intense_8",
        question: "I don't have _____ time to finish all this work before deadline tomorrow.",
        translation: "Ich habe nicht genug Zeit, all diese Arbeit vor morgiger Deadline zu beenden.",
        options: ["enough", "too", "so", "such"],
        correct: "enough",
        explanation: "'ENOUGH' + Nomen: 'enough time' (genug Zeit). Dieser Zeitmangel vor Deadline erzeugt Stress und Zeitdruck."
      },
      {
        id: "intense_9",
        question: "It was _____ an expensive restaurant that we couldn't afford it sadly.",
        translation: "Es war so ein teures Restaurant, dass wir es uns leider nicht leisten konnten.",
        options: ["such", "so", "too", "very"],
        correct: "such",
        explanation: "'SUCH' + an + Adjektiv + Nomen: 'such an expensive restaurant'. Diese Preis-Unerschwinglichkeit verhinderte Restaurant-Besuch."
      },
      {
        id: "intense_10",
        question: "The bag is heavy _____ for me to carry alone up all those stairs.",
        translation: "Die Tasche ist zu schwer für mich, um sie allein all diese Treppen hochzutragen.",
        options: ["too", "enough", "so", "such"],
        correct: "too",
        explanation: "'TOO' + Adjektiv + 'for...to': 'too heavy for me to carry'. Diese Taschenschwere bei vielen Treppen braucht Hilfe."
      },
      {
        id: "tag_11",
        question: "She's _____ a good singer that she should audition for the show.",
        translation: "Sie ist so eine gute Sängerin, dass sie für die Show vorsingen sollte.",
        options: ["such", "so", "too", "very"],
        correct: "such",
        explanation: "'SUCH' + a + Adjektiv + Nomen: 'such a good singer'. Dieses Gesangstalent rechtfertigt Show-Vorsingen-Empfehlung."
      },
      {
        id: "intense_12",
        question: "There aren't _____ chairs for all the guests at the dinner party.",
        translation: "Es gibt nicht genug Stühle für alle Gäste bei der Dinnerparty.",
        options: ["enough", "too", "so", "such"],
        correct: "enough",
        explanation: "'ENOUGH' + Plural-Nomen: 'enough chairs'. Diese Stuhl-Knappheit bei Party ist problematisch für Gäste-Komfort."
      },
      {
        id: "intense_13",
        question: "The music was _____ loud that I got a headache from it quickly.",
        translation: "Die Musik war so laut, dass ich schnell davon Kopfschmerzen bekam.",
        options: ["so", "such", "too", "very"],
        correct: "so",
        explanation: "'SO' + Adjektiv + 'that': 'so loud that'. Diese extreme Lautstärke verursachte unangenehme Kopfschmerzen."
      },
      {
        id: "intense_14",
        question: "He's old _____ now to make his own decisions about his life freely.",
        translation: "Er ist jetzt alt genug, um frei seine eigenen Entscheidungen über sein Leben zu treffen.",
        options: ["enough", "too", "so", "such"],
        correct: "enough",
        explanation: "Adjektiv + 'ENOUGH' + 'to': 'old enough to'. Diese Reife für selbstständige Lebensentscheidungen ist wichtiger Entwicklungsschritt."
      },
      {
        id: "intense_15",
        question: "They were _____ kind people that they helped complete strangers always.",
        translation: "Sie waren so freundliche Leute, dass sie immer völlig Fremden halfen.",
        options: ["such", "so", "too", "very"],
        correct: "such",
        explanation: "'SUCH' + Adjektiv + Plural: 'such kind people'. Diese Hilfsbereitschaft für Fremde ist außergewöhnliche menschliche Güte."
      }
    ]
  },

  some_any_no: {
    name: "Some, Any, No",
    description: "Unbestimmte Mengen - some, any, no in verschiedenen Sätzen",
    icon: Target,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "some_any_1",
        question: "I need _____ help with this difficult task - can you assist me?",
        translation: "Ich brauche etwas Hilfe bei dieser schweren Aufgabe - kannst du mir helfen?",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "In POSITIVEN Sätzen: 'some help' (etwas Hilfe). Diese Hilfsanfrage bei schwerer Aufgabe ist berechtigte Unterstützungs-Bitte."
      },
      {
        id: "some_any_2",
        question: "Do you have _____ questions about today's lesson at all to ask?",
        translation: "Hast du überhaupt irgendwelche Fragen über die heutige Lektion zu stellen?",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "In FRAGEN: 'any questions' (irgendwelche Fragen). Diese Verständnis-Check-Frage ist gute Lehrpraxis nach Lektion."
      },
      {
        id: "some_any_3",
        question: "There isn't _____ milk left in the fridge for breakfast tomorrow morning.",
        translation: "Es ist keine Milch mehr im Kühlschrank für Frühstück morgen früh übrig.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "In NEGATIVEN Sätzen: 'isn't any milk' (keine Milch). Diese Milchknappheit erfordert Einkauf vor morgigem Frühstück."
      },
      {
        id: "some_any_4",
        question: "Would you like _____ coffee or tea with your breakfast this morning?",
        translation: "Möchtest du heute Morgen etwas Kaffee oder Tee zu deinem Frühstück?",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "In ANGEBOTEN: 'some coffee' (etwas Kaffee). Diese höfliche Getränke-Offerte zum Frühstück ist gastfreundlich."
      },
      {
        id: "some_any_5",
        question: "I have _____ time at all to meet you today - I'm extremely busy.",
        translation: "Ich habe heute überhaupt keine Zeit, dich zu treffen - ich bin extrem beschäftigt.",
        options: ["no", "any", "some", "none"],
        correct: "no",
        explanation: "'NO' + Nomen = starkes Negativ: 'no time at all'. Diese komplette Zeitknappheit heute verhindert jegliches Treffen."
      },
      {
        id: "some_any_6",
        question: "Are there _____ good movies playing at the cinema this weekend?",
        translation: "Laufen dieses Wochenende irgendwelche guten Filme im Kino?",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "In Fragen: 'any good movies' (irgendwelche guten). Diese Kino-Programm-Frage plant Wochenend-Unterhaltung."
      },
      {
        id: "some_any_7",
        question: "Can I have _____ more cake, please? It's absolutely delicious and tasty!",
        translation: "Kann ich bitte noch etwas Kuchen haben? Er ist absolut lecker und schmackhaft!",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "In BITTEN: 'some more cake'. Diese Kuchen-Nachschlag-Bitte zeigt Genuss und Wertschätzung des Backwerks."
      },
      {
        id: "some_any_8",
        question: "She doesn't want _____ sugar in her coffee - she prefers it black.",
        translation: "Sie möchte keinen Zucker in ihrem Kaffee - sie bevorzugt ihn schwarz.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "Nach Negativ: 'doesn't want any sugar'. Diese Schwarz-Kaffee-Präferenz ohne Zucker ist gesunde oder Geschmacks-Wahl."
      },
      {
        id: "some_any_9",
        question: "There are _____ cookies left in the jar - someone ate them all!",
        translation: "Es sind keine Kekse mehr im Glas übrig - jemand hat sie alle gegessen!",
        options: ["no", "any", "some", "not"],
        correct: "no",
        explanation: "'NO' + Plural: 'no cookies left' (keine Kekse übrig). Diese komplette Keks-Abwesenheit ist überraschend und enttäuschend."
      },
      {
        id: "some_any_10",
        question: "If you have _____ problems at all, please let me know immediately.",
        translation: "Wenn du überhaupt irgendwelche Probleme hast, lass es mich bitte sofort wissen.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "In IF-Sätzen: 'any problems' (irgendwelche Probleme). Dieses Hilfsangebot bei Problemen ist unterstützende aufmerksame Geste."
      },
      {
        id: "some_any_11",
        question: "I bought _____ flowers for my mother's birthday celebration tomorrow afternoon.",
        translation: "Ich kaufte Blumen für die Geburtstagsfeier meiner Mutter morgen Nachmittag.",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "Positiv: 'some flowers' (einige Blumen). Dieser Blumenkauf für Mutter-Geburtstag ist liebevolle aufmerksame Geste."
      },
      {
        id: "some_any_12",
        question: "We had _____ idea where to find the lost keys in whole house.",
        translation: "Wir hatten keine Ahnung, wo wir die verlorenen Schlüssel im ganzen Haus finden sollten.",
        options: ["no", "any", "some", "not"],
        correct: "no",
        explanation: "'NO' + unzählbares Nomen: 'no idea' (keine Ahnung). Diese Ratlosigkeit bei Schlüsselsuche ist frustrierende Situation."
      },
      {
        id: "some_any_13",
        question: "Could I borrow _____ money until next Friday when I get paid?",
        translation: "Könnte ich bis nächsten Freitag, wenn ich bezahlt werde, etwas Geld leihen?",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "In Bitten: 'some money'. Diese Geld-Leih-Anfrage bis Zahltag ist temporäre finanzielle Hilfsanfrage."
      },
      {
        id: "some_any_14",
        question: "I haven't seen _____ of my old school friends for many years now.",
        translation: "Ich habe jetzt seit vielen Jahren keine meiner alten Schulfreunde gesehen.",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "Nach Negativ: 'haven't seen any of'. Diese langjährige Freundschafts-Lücke ist bedauerlicher Kontaktverlust nach Schule."
      },
      {
        id: "some_any_15",
        question: "_____ student in the class understood the difficult explanation clearly today.",
        translation: "Kein Student in der Klasse verstand heute die schwierige Erklärung klar.",
        options: ["No", "Any", "Some", "Not"],
        correct: "No",
        explanation: "'NO' am Satzanfang: 'No student understood'. Diese kollektive Nicht-Verständnis zeigt Erklärungs-Verbesserungsbedarf."
      }
    ]
  },

  both_either_neither: {
    name: "Both, Either, Neither",
    description: "Doppelwahl - both, either, neither korrekt unterscheiden",
    icon: Target,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "both_either_1",
        question: "_____ of my parents speak English fluently and without any accent.",
        translation: "Beide meiner Eltern sprechen fließend Englisch und ohne jeden Akzent.",
        options: ["Both", "Either", "Neither", "All"],
        correct: "Both",
        explanation: "'BOTH' = BEIDE (zwei Personen/Dinge): 'Both of my parents'. Diese Eltern-Zweisprachigkeit ist vorteilhaft für Familie."
      },
      {
        id: "both_either_2",
        question: "You can take _____ the bus or the train - both go to city center.",
        translation: "Du kannst entweder den Bus oder den Zug nehmen - beide fahren ins Stadtzentrum.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "'EITHER...OR' = ENTWEDER...ODER (Auswahl): Diese Transport-Flexibilität macht Stadtzentrum-Fahrt einfach."
      },
      {
        id: "both_either_3",
        question: "_____ of the two options is good - I don't like either one honestly.",
        translation: "Keine der zwei Optionen ist gut - ich mag ehrlich gesagt keine von beiden.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER' = KEINE VON BEIDEN: 'Neither of the options'. Diese Ablehnung beider Optionen erfordert Alternative."
      },
      {
        id: "both_either_4",
        question: "_____ my brother and I enjoy playing football on weekends together.",
        translation: "Sowohl mein Bruder als auch ich genießen es, am Wochenende zusammen Fußball zu spielen.",
        options: ["Both", "Either", "Neither", "All"],
        correct: "Both",
        explanation: "'BOTH...AND' = SOWOHL...ALS AUCH: Diese gemeinsame Fußball-Leidenschaft verbindet Geschwister am Wochenende."
      },
      {
        id: "both_either_5",
        question: "I don't like _____ coffee or tea - I prefer water or juice instead.",
        translation: "Ich mag weder Kaffee noch Tee - ich bevorzuge stattdessen Wasser oder Saft.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "In Negativ: 'don't like EITHER' = weder...noch: Diese Getränke-Ablehnung für Kaffee/Tee ist persönliche Geschmacks-Präferenz."
      },
      {
        id: "both_either_6",
        question: "_____ of us knew the answer to that difficult question in exam.",
        translation: "Keiner von uns kannte die Antwort auf jene schwere Frage in der Prüfung.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER' + Singular-Verb: 'Neither of us knew'. Diese kollektive Unwissenheit bei schwerer Frage ist Prüfungs-Herausforderung."
      },
      {
        id: "both_either_7",
        question: "_____ restaurants are excellent - you can't go wrong with either choice.",
        translation: "Beide Restaurants sind exzellent - du kannst mit keiner Wahl falsch liegen.",
        options: ["Both", "Either", "Neither", "All"],
        correct: "Both",
        explanation: "'BOTH' + Plural-Nomen: 'Both restaurants'. Diese gleichwertige Restaurant-Qualität macht Entscheidung zur Geschmacksfrage."
      },
      {
        id: "both_either_8",
        question: "_____ John nor his brother came to my birthday party last Saturday.",
        translation: "Weder John noch sein Bruder kamen letzten Samstag zu meiner Geburtstagsparty.",
        options: ["Neither", "Either", "Both", "Not"],
        correct: "Neither",
        explanation: "'NEITHER...NOR' = WEDER...NOCH: Diese doppelte Absenz beider Brüder bei Party ist enttäuschend."
      },
      {
        id: "both_either_9",
        question: "_____ of these two books is interesting to me - I'll read something else.",
        translation: "Keines dieser zwei Bücher ist für mich interessant - ich lese etwas anderes.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER' + Singular: 'Neither of these books is'. Diese Ablehnung beider Bücher führt zu anderer Lektüre-Wahl."
      },
      {
        id: "both_either_10",
        question: "You can sit on _____ side of the table - there's plenty of space.",
        translation: "Du kannst auf beiden Seiten des Tisches sitzen - es gibt reichlich Platz.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "'EITHER' = JEDE VON BEIDEN (Singular): 'either side'. Diese Sitzplatz-Flexibilität bei reichlich Platz ist unkompliziert."
      },
      {
        id: "both_either_11",
        question: "_____ my sister and her husband are coming to visit us next week.",
        translation: "Sowohl meine Schwester als auch ihr Mann kommen nächste Woche uns besuchen.",
        options: ["Both", "Either", "Neither", "All"],
        correct: "Both",
        explanation: "'BOTH' für zwei Personen: 'Both...and'. Dieser Paar-Besuch nächste Woche ist schönes familiäres Ereignis."
      },
      {
        id: "both_either_12",
        question: "I haven't read _____ of those two books you recommended to me yet.",
        translation: "Ich habe noch keines jener zwei Bücher gelesen, die du mir empfohlen hast.",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "Nach Negativ: 'haven't read EITHER' = keines von beiden. Diese ungelesenen Empfehlungen warten noch auf Zeit."
      },
      {
        id: "both_either_13",
        question: "_____ of my hands are full - can you open the door for me?",
        translation: "Beide meiner Hände sind voll - kannst du mir die Tür öffnen?",
        options: ["Both", "Either", "Neither", "All"],
        correct: "Both",
        explanation: "'BOTH' + Plural-Verb: 'Both of my hands are'. Diese volle-Hände-Situation braucht Tür-Öffnungs-Hilfe."
      },
      {
        id: "both_either_14",
        question: "_____ of them wants to take responsibility for the big mistake made.",
        translation: "Keiner von ihnen möchte Verantwortung für den gemachten großen Fehler übernehmen.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER' + Singular: 'Neither of them wants'. Diese Verantwortungs-Vermeidung für Fehler ist unreife Reaktion."
      },
      {
        id: "both_either_15",
        question: "We can meet _____ today or tomorrow - I'm free on both days completely.",
        translation: "Wir können uns entweder heute oder morgen treffen - ich bin an beiden Tagen komplett frei.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "'EITHER...OR' für Auswahl: Diese Treffen-Flexibilität an beiden Tagen ermöglicht bequeme Terminplanung."
      }
    ]
  }
};

export default part11Categories;
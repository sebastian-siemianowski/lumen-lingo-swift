/**
 * GERMAN → ENGLISH GRAMMAR - PART 13
 * 4 categories, 15 questions each
 */

import { Wind, Brain, Flame, Lightbulb } from "lucide-react";

export const part13Categories = {
  still_yet_already: {
    name: "Still, Yet, Already",
    description: "Noch/schon - still, yet, already in Zeitaussagen verwenden",
    icon: Wind,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "still_yet_1",
        question: "Are you _____ working on that project? I thought you finished it!",
        translation: "Arbeitest du noch an jenem Projekt? Ich dachte, du hättest es beendet!",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für NOCH (überrascht): 'still working' (noch arbeitend). MITTE vom Satz. Diese unerwartete Projekt-Fortsetzung zeigt unterschätzte Komplexität."
      },
      {
        id: "still_yet_2",
        question: "I haven't finished my homework _____ - I'll do it after dinner tonight.",
        translation: "Ich habe meine Hausaufgaben noch nicht fertig - ich mache sie heute Abend nach Essen.",
        options: ["yet", "still", "already", "always"],
        correct: "yet",
        explanation: "Für NOCH NICHT in Negativ: 'yet' am ENDE: 'haven't finished yet'. Diese Hausaufgaben-Verschiebung bis nach Essen ist Zeitplanung."
      },
      {
        id: "still_yet_3",
        question: "She has _____ left for the airport - she departed thirty minutes ago.",
        translation: "Sie ist schon zum Flughafen aufgebrochen - sie fuhr vor dreißig Minuten ab.",
        options: ["already", "yet", "still", "always"],
        correct: "already",
        explanation: "Für SCHON (früher als erwartet): 'already left'. Diese frühe Flughafen-Abfahrt vor dreißig Minuten zeigt gute Zeitplanung."
      },
      {
        id: "still_yet_4",
        question: "It's _____ raining outside after three hours - when will it stop finally?",
        translation: "Es regnet draußen nach drei Stunden noch - wann wird es endlich aufhören?",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für IMMER NOCH: 'still raining'. Dieser dreistündige Dauer-Regen ist frustrierend lang und verhindert Outdoor-Aktivitäten."
      },
      {
        id: "still_yet_5",
        question: "Have you eaten lunch _____? It's already two o'clock in afternoon!",
        translation: "Hast du schon zu Mittag gegessen? Es ist schon zwei Uhr nachmittags!",
        options: ["yet", "still", "already", "always"],
        correct: "yet",
        explanation: "In FRAGEN: 'yet' am Ende: 'Have you eaten yet?' (schon gegessen?). Diese späte Essens-Frage zeigt Besorgnis."
      },
      {
        id: "still_yet_6",
        question: "We're _____ waiting for the bus after standing here for forty minutes.",
        translation: "Wir warten nach vierzig Minuten Stehen hier noch auf den Bus.",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für NOCH wartend: 'still waiting'. Diese vierzigminütige Bus-Wartezeit ist extrem frustrierend und zeitraubend."
      },
      {
        id: "still_yet_7",
        question: "I've _____ seen that movie three times - it's one of my favorites!",
        translation: "Ich habe diesen Film schon dreimal gesehen - er ist einer meiner Favoriten!",
        options: ["already", "yet", "still", "always"],
        correct: "already",
        explanation: "Für SCHON (mit Häufigkeit): 'already seen...three times'. Diese dreimalige Filmsichtung zeigt Begeisterung für Story."
      },
      {
        id: "still_yet_8",
        question: "The store isn't open _____ - it opens at nine o'clock in morning.",
        translation: "Der Laden ist noch nicht offen - er öffnet um neun Uhr morgens.",
        options: ["yet", "still", "already", "always"],
        correct: "yet",
        explanation: "Nach Negativ: 'isn't open yet' (noch nicht offen). Diese Vor-Öffnungs-Zeit erfordert Warten bis neun Uhr."
      },
      {
        id: "still_yet_9",
        question: "He's _____ living with his parents even though he's thirty years old now.",
        translation: "Er wohnt noch bei seinen Eltern, obwohl er jetzt dreißig Jahre alt ist.",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für IMMER NOCH (überraschend): 'still living'. Dieses Wohnen bei Eltern mit dreißig ist in manchen Kulturen ungewöhnlich."
      },
      {
        id: "still_yet_10",
        question: "Have they arrived at the hotel _____? I'm worried about their safety.",
        translation: "Sind sie schon im Hotel angekommen? Ich mache mir Sorgen um ihre Sicherheit.",
        options: ["yet", "still", "already", "always"],
        correct: "yet",
        explanation: "In BESORGTEN Fragen: 'yet' am Ende. Diese Ankunfts-Frage zeigt fürsorgliche Sorge um sichere Reise-Ankunft."
      },
      {
        id: "still_yet_11",
        question: "I _____ haven't received a reply to my email from last week sent.",
        translation: "Ich habe noch keine Antwort auf meine letzte Woche gesendete E-Mail erhalten.",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für NOCH IMMER NICHT: 'still haven't' (Betonung der Dauer). Diese einwöchige E-Mail-Antwort-Verzögerung ist unprofessionell."
      },
      {
        id: "still_yet_12",
        question: "Is dinner ready _____? We're all getting very hungry and impatient now.",
        translation: "Ist das Essen schon fertig? Wir werden alle jetzt sehr hungrig und ungeduldig.",
        options: ["yet", "still", "already", "always"],
        correct: "yet",
        explanation: "Frage: 'ready yet?' (schon fertig?). Dieser gemeinsame wachsende Hunger macht Warten auf Essen zunehmend unangenehm."
      },
      {
        id: "still_yet_13",
        question: "She _____ believes in fairy tales despite being an adult woman now.",
        translation: "Sie glaubt trotz Erwachsensein jetzt noch an Märchen.",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für IMMER NOCH glauben: 'still believes'. Dieser Märchen-Glaube im Erwachsenenalter ist charmante kindliche Phantasie-Bewahrung."
      },
      {
        id: "still_yet_14",
        question: "Have you _____ decided where to go for summer vacation this year together?",
        translation: "Habt ihr schon entschieden, wo ihr dieses Jahr zusammen für Sommerurlaub hinfahrt?",
        options: ["already", "yet", "still", "always"],
        correct: "already",
        explanation: "Für SCHON entschieden (vor Erwartung): 'already decided'. Diese frühe Urlaubs-Entscheidung ermöglicht gute Buchungs-Planung."
      },
      {
        id: "still_yet_15",
        question: "The problem _____ exists even after all our attempts to fix it properly.",
        translation: "Das Problem existiert noch, selbst nach allen unseren Versuchen, es richtig zu beheben.",
        options: ["still", "yet", "already", "always"],
        correct: "still",
        explanation: "Für NOCH existierend: 'still exists'. Diese Problem-Persistenz trotz Reparatur-Versuchen ist frustrierend und erfordert neue Lösungsansätze."
      }
    ]
  },

  wish_hope: {
    name: "Wish vs Hope",
    description: "Wünschen/Hoffen - wish und hope grammatisch korrekt verwenden",
    icon: Brain,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "wish_hope_1",
        question: "I _____ you have a wonderful time at the party tonight with friends!",
        translation: "Ich hoffe, du hast heute Abend eine wunderbare Zeit bei der Party mit Freunden!",
        options: ["hope", "wish", "want", "expect"],
        correct: "hope",
        explanation: "'HOPE' + Subjekt + Verb für REALE Hoffnung: 'hope you have'. Dieser Party-Wunsch ist freundliche positive Erwartung für schönen Abend."
      },
      {
        id: "wish_hope_2",
        question: "I _____ I could speak French fluently like a native speaker now.",
        translation: "Ich wünschte, ich könnte jetzt fließend Französisch wie ein Muttersprachler sprechen.",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "'WISH' + Past für IRREALEN Wunsch: 'wish I could'. Dieser Sprachtraum ist momentan unrealistisch aber schönes Ziel."
      },
      {
        id: "wish_hope_3",
        question: "She _____ to visit Japan next year during cherry blossom season beautifully.",
        translation: "Sie hofft, nächstes Jahr während der wunderschönen Kirschblütenzeit Japan zu besuchen.",
        options: ["hopes", "wishes", "wants", "expects"],
        correct: "hopes",
        explanation: "'HOPE' + Infinitiv für REALISTISCHE Zukunft: 'hopes to visit'. Diese Japan-Reise-Hoffnung zur Kirschblüte ist erreichbares Traumziel."
      },
      {
        id: "wish_hope_4",
        question: "I _____ you all the best for your new job starting next Monday!",
        translation: "Ich wünsche dir alles Gute für deinen neuen Job, der nächsten Montag beginnt!",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "Feste PHRASE: 'wish you all the best' (wünsche dir alles Gute). Dieser Glückwunsch zum Job-Start ist herzliche Erfolgs-Ermutigung."
      },
      {
        id: "wish_hope_5",
        question: "I _____ it doesn't rain tomorrow for our outdoor wedding ceremony plans.",
        translation: "Ich hoffe, es regnet morgen nicht für unsere Outdoor-Hochzeits-Zeremonie-Pläne.",
        options: ["hope", "wish", "want", "expect"],
        correct: "hope",
        explanation: "'HOPE' für MÖGLICHES: 'hope it doesn't'. Dieser Wetter-Hoffnung für Hochzeit ist verständliche Sorge bei Outdoor-Event."
      },
      {
        id: "wish_hope_6",
        question: "I _____ I had studied harder for the exam last week - I failed it.",
        translation: "Ich wünschte, ich hätte letzte Woche härter für die Prüfung gelernt - ich fiel durch.",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "'WISH' + Past Perfect für BEDAUERN Vergangenheit: 'wish I had studied'. Dieses Nicht-Lernen-Bedauern ist zu späte Erkenntnis."
      },
      {
        id: "wish_hope_7",
        question: "We _____ that everything will work out well in the end successfully.",
        translation: "Wir hoffen, dass am Ende alles erfolgreich gut funktionieren wird.",
        options: ["hope", "wish", "want", "expect"],
        correct: "hope",
        explanation: "'HOPE' + that + Future: 'hope that...will'. Diese optimistische End-Hoffnung ist positive Einstellung trotz aktueller Unsicherheit."
      },
      {
        id: "wish_hope_8",
        question: "I _____ people would be more kind to each other in daily life.",
        translation: "Ich wünschte, Leute wären im täglichen Leben freundlicher zueinander.",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "'WISH' + would für UNWAHRSCHEINLICHE Veränderung: 'wish people would be'. Dieser Freundlichkeits-Wunsch ist idealistischer Gesellschafts-Traum."
      },
      {
        id: "wish_hope_9",
        question: "She _____ to become a famous singer one day in the future successfully.",
        translation: "Sie hofft, eines Tages in Zukunft erfolgreich eine berühmte Sängerin zu werden.",
        options: ["hopes", "wishes", "wants", "expects"],
        correct: "hopes",
        explanation: "'HOPE' + Infinitiv: 'hopes to become'. Dieser Sänger-Traum ist ambitioniertes aber mit Talent erreichbares Karriereziel."
      },
      {
        id: "wish_hope_10",
        question: "I _____ you good luck with your job interview tomorrow morning early!",
        translation: "Ich wünsche dir viel Glück bei deinem Bewerbungsgespräch morgen früh!",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "Feste PHRASE: 'wish you good luck'. Dieser Glückwunsch fürs Bewerbungsgespräch ist aufmunternde unterstützende Geste."
      },
      {
        id: "wish_hope_11",
        question: "I _____ the weather will be nice for our picnic this weekend outdoors.",
        translation: "Ich hoffe, das Wetter wird für unser Picknick dieses Wochenende draußen schön sein.",
        options: ["hope", "wish", "want", "expect"],
        correct: "hope",
        explanation: "'HOPE' für WAHRSCHEINLICHES: 'hope...will be'. Diese Wetter-Hoffnung fürs Wochenend-Picknick ist berechtigte Outdoor-Sorge."
      },
      {
        id: "wish_hope_12",
        question: "I _____ I were rich so I could travel around the world freely.",
        translation: "Ich wünschte, ich wäre reich, sodass ich frei um die Welt reisen könnte.",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "'WISH' + were für IRREAL: 'wish I were rich'. Dieser Reichtums-Reise-Traum ist unrealistischer aber schöner Tagtraum."
      },
      {
        id: "wish_hope_13",
        question: "They _____ you a Merry Christmas and Happy New Year celebration ahead!",
        translation: "Sie wünschen dir frohe Weihnachten und eine glückliche Neujahrs-Feier voraus!",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "Feste GRUSS-Phrase: 'wish you Merry Christmas'. Dieser traditionelle Feiertagsgruß ist herzliche Jahresend-Geste."
      },
      {
        id: "wish_hope_14",
        question: "I _____ we can meet again soon sometime next month for coffee.",
        translation: "Ich hoffe, wir können uns bald irgendwann nächsten Monat zu Kaffee treffen.",
        options: ["hope", "wish", "want", "expect"],
        correct: "hope",
        explanation: "'HOPE' + can für MÖGLICHES: 'hope we can meet'. Dieser Wiedersehens-Wunsch nächsten Monat ist realistische Treffen-Hoffnung."
      },
      {
        id: "wish_hope_15",
        question: "I _____ I hadn't said those hurtful words to her yesterday regretfully.",
        translation: "Ich wünschte, ich hätte gestern diese verletzenden Worte nicht zu ihr gesagt.",
        options: ["wish", "hope", "want", "expect"],
        correct: "wish",
        explanation: "'WISH' + Past Perfect für BEDAUERN: 'wish I hadn't said'. Diese gestrigen verletzenden Worte sind bedauerter emotionaler Fehler."
      }
    ]
  },

  too_vs_enough: {
    name: "Too vs Enough",
    description: "Zu viel/genug - too und enough mit Adjektiven richtig platzieren",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "too_enough_1",
        question: "This coffee is _____ hot to drink right now - I'll wait a bit.",
        translation: "Dieser Kaffee ist zu heiß zum Trinken jetzt - ich warte ein bisschen.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adjektiv + 'to' = ZU...UM ZU: 'too hot to drink'. Diese Kaffee-Hitze erfordert Abkühl-Wartezeit vor sicherem Trinken."
      },
      {
        id: "too_enough_2",
        question: "She's not old _____ to drive a car legally - she's only fifteen.",
        translation: "Sie ist nicht alt genug, um legal Auto zu fahren - sie ist erst fünfzehn.",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Adjektiv + 'ENOUGH' + 'to': 'old enough to drive'. Diese Alters-Einschränkung fürs Fahren ist Sicherheits-Gesetz."
      },
      {
        id: "too_enough_3",
        question: "The box is _____ heavy for me to lift alone without help from others.",
        translation: "Die Kiste ist zu schwer für mich, um sie allein ohne Hilfe von anderen zu heben.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adjektiv + 'for...to': 'too heavy for me to lift'. Diese Box-Schwere braucht Hilfe von zweiter Person."
      },
      {
        id: "too_enough_4",
        question: "Do we have _____ time to catch the train or should we hurry?",
        translation: "Haben wir genug Zeit, um den Zug zu erwischen, oder sollten wir uns beeilen?",
        options: ["enough", "too", "much", "many"],
        correct: "enough",
        explanation: "'ENOUGH' + Nomen: 'enough time' (genug Zeit). Diese Zeitknappheit-Frage entscheidet über Tempo zum Bahnhof."
      },
      {
        id: "too_enough_5",
        question: "He's _____ tired to go out tonight - he worked twelve hours today.",
        translation: "Er ist zu müde, um heute Abend auszugehen - er arbeitete heute zwölf Stunden.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adjektiv + 'to': 'too tired to go'. Diese Erschöpfung nach zwölf Arbeitsstunden ist verständlicher Grund für Heimbleiben."
      },
      {
        id: "too_enough_6",
        question: "Is this room big _____ for all twenty guests at the dinner party?",
        translation: "Ist dieser Raum groß genug für alle zwanzig Gäste bei der Dinnerparty?",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Adjektiv + 'ENOUGH' + 'for': 'big enough for'. Diese Raumgröße-Frage ist wichtig für komfortable Gäste-Unterbringung."
      },
      {
        id: "too_enough_7",
        question: "The music is _____ loud - I can't hear what you're saying at all!",
        translation: "Die Musik ist zu laut - ich kann überhaupt nicht hören, was du sagst!",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adjektiv = ZU (negativ): 'too loud'. Diese extreme Musik-Lautstärke verhindert normale Unterhaltung komplett."
      },
      {
        id: "too_enough_8",
        question: "We didn't bring _____ food for everyone at the camping trip unfortunately.",
        translation: "Wir brachten leider nicht genug Essen für alle beim Camping-Trip mit.",
        options: ["enough", "too", "much", "many"],
        correct: "enough",
        explanation: "'ENOUGH' + Nomen: 'enough food'. Diese Essens-Knappheit beim Camping ist problematische Planungs-Fehlkalkulation."
      },
      {
        id: "too_enough_9",
        question: "This exercise is _____ easy - I want something more challenging and difficult.",
        translation: "Diese Übung ist zu einfach - ich möchte etwas Herausfordernderes und Schwierigeres.",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adjektiv (auch positiv negativ): 'too easy'. Diese Übungs-Unterforderung braucht höheres Schwierigkeits-Level."
      },
      {
        id: "too_enough_10",
        question: "Are you warm _____ or should I turn up the heating temperature higher?",
        translation: "Ist dir warm genug oder soll ich die Heizungstemperatur höher drehen?",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Adjektiv + 'ENOUGH': 'warm enough'. Diese Temperatur-Frage zeigt Fürsorge für Komfort der anderen Person."
      },
      {
        id: "too_enough_11",
        question: "He talks _____ much during meetings - nobody else can speak at all!",
        translation: "Er redet zu viel während Treffen - niemand sonst kann überhaupt sprechen!",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adverb: 'too much'. Dieses Meeting-Dominieren durch exzessives Reden ist unfair für andere Teilnehmer."
      },
      {
        id: "too_enough_12",
        question: "There aren't _____ chairs in the room for all the students sitting comfortably.",
        translation: "Es gibt nicht genug Stühle im Raum für alle bequem sitzenden Studenten.",
        options: ["enough", "too", "many", "much"],
        correct: "enough",
        explanation: "'ENOUGH' + Plural: 'enough chairs'. Diese Stuhl-Knappheit ist problematisch für komfortables Sitzen aller."
      },
      {
        id: "too_enough_13",
        question: "The movie was _____ long and boring - it lasted almost four hours!",
        translation: "Der Film war zu lang und langweilig - er dauerte fast vier Stunden!",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + Adjektiv (mehrfach): 'too long and boring'. Diese Vierstunden-Filmlänge ist übermäßig und ermüdend."
      },
      {
        id: "too_enough_14",
        question: "I'm not brave _____ to go skydiving - I'm terrified of heights completely!",
        translation: "Ich bin nicht mutig genug, um Fallschirmspringen zu gehen - ich habe komplett Höhenangst!",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "Adjektiv + 'ENOUGH' + 'to': 'not brave enough'. Diese Höhenangst verhindert Fallschirmspring-Abenteuer völlig."
      },
      {
        id: "too_enough_15",
        question: "There's _____ much traffic on the road today - we'll be late for sure!",
        translation: "Es ist zu viel Verkehr auf der Straße heute - wir werden sicher zu spät sein!",
        options: ["too", "enough", "very", "so"],
        correct: "too",
        explanation: "'TOO' + much/many: 'too much traffic'. Dieser übermäßige Verkehr heute führt zu unvermeidlicher Verspätung."
      }
    ]
  },

  would_rather_prefer: {
    name: "Would Rather vs Prefer",
    description: "Vorlieben - would rather und prefer für Präferenzen ausdrücken",
    icon: Lightbulb,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "prefer_1",
        question: "I _____ stay at home tonight than go to the noisy party downtown.",
        translation: "Ich würde heute Abend lieber zu Hause bleiben als zur lauten Party in Innenstadt gehen.",
        options: ["would rather", "prefer", "like", "want"],
        correct: "would rather",
        explanation: "'WOULD RATHER' + Infinitiv OHNE 'to': 'would rather stay'. Diese Heimbleib-Präferenz zeigt Ruhe-Bedürfnis über soziale Aktivität."
      },
      {
        id: "prefer_2",
        question: "She _____ tea to coffee every single morning without exception at breakfast.",
        translation: "Sie bevorzugt jeden einzelnen Morgen ohne Ausnahme beim Frühstück Tee gegenüber Kaffee.",
        options: ["prefers", "would rather", "likes", "wants"],
        correct: "prefers",
        explanation: "'PREFER' + Nomen + 'to' + Nomen: 'prefers tea to coffee'. Diese Tee-Präferenz ist feste persönliche Morgen-Gewohnheit."
      },
      {
        id: "prefer_3",
        question: "Would you _____ walk or take the bus to work every morning?",
        translation: "Würdest du lieber gehen oder den Bus zur Arbeit jeden Morgen nehmen?",
        options: ["rather", "prefer", "like", "want"],
        correct: "rather",
        explanation: "'WOULD RATHER' in Frage: 'would you rather walk or take'. Diese Transport-Präferenz-Frage erkundet tägliche Pendelgewohnheit."
      },
      {
        id: "prefer_4",
        question: "I _____ reading books to watching TV for evening entertainment always.",
        translation: "Ich bevorzuge immer Bücher lesen gegenüber Fernsehen für Abendunterhaltung.",
        options: ["prefer", "would rather", "like", "want"],
        correct: "prefer",
        explanation: "'PREFER' + Gerund + 'to' + Gerund: 'prefer reading to watching'. Diese Lese-Präferenz ist intellektuelle Abend-Gewohnheit."
      },
      {
        id: "prefer_5",
        question: "He'd _____ not talk about it right now if that's okay with you.",
        translation: "Er würde lieber jetzt nicht darüber sprechen, wenn das für dich okay ist.",
        options: ["rather", "prefer", "like", "want"],
        correct: "rather",
        explanation: "'WOULD RATHER' + not: 'would rather not talk'. Diese Gesprächs-Vermeidung jetzt zeigt emotionale Unbequemlichkeit mit Thema."
      },
      {
        id: "prefer_6",
        question: "We _____ to eat at home than go to expensive restaurants usually.",
        translation: "Wir bevorzugen normalerweise zu Hause zu essen als in teure Restaurants zu gehen.",
        options: ["prefer", "would rather", "like", "want"],
        correct: "prefer",
        explanation: "'PREFER' + Infinitiv + 'than': 'prefer to eat...than go'. Diese Heim-Ess-Präferenz spart Geld und ist gemütlicher."
      },
      {
        id: "prefer_7",
        question: "I'd _____ you didn't smoke in the house - it bothers me greatly.",
        translation: "Ich würde es bevorzugen, wenn du nicht im Haus rauchen würdest - es stört mich sehr.",
        options: ["rather", "prefer", "like", "want"],
        correct: "rather",
        explanation: "'WOULD RATHER' + Subjekt + Past: 'rather you didn't smoke'. Diese Rauch-Bitte im Haus ist höfliche Gesundheits-Grenze."
      },
      {
        id: "prefer_8",
        question: "She _____ traveling by train to flying in airplanes for long journeys always.",
        translation: "Sie bevorzugt immer für lange Reisen Zugreisen gegenüber Fliegen in Flugzeugen.",
        options: ["prefers", "would rather", "likes", "wants"],
        correct: "prefers",
        explanation: "'PREFER' + Gerund + 'to' + Gerund: 'prefers traveling to flying'. Diese Zug-Präferenz ist entspanntere Reise-Wahl."
      },
      {
        id: "prefer_9",
        question: "Would you _____ have tea or coffee with your breakfast this morning?",
        translation: "Möchtest du lieber Tee oder Kaffee zu deinem Frühstück heute Morgen haben?",
        options: ["rather", "prefer", "like", "want"],
        correct: "rather",
        explanation: "'WOULD RATHER' in Auswahl-Frage: Diese höfliche Frühstücks-Getränke-Frage ist gastfreundliche Präferenz-Erkundung."
      },
      {
        id: "prefer_10",
        question: "I _____ living in the countryside to living in the busy noisy city.",
        translation: "Ich bevorzuge das Leben auf dem Land gegenüber Leben in der geschäftigen lauten Stadt.",
        options: ["prefer", "would rather", "like", "want"],
        correct: "prefer",
        explanation: "'PREFER' + Gerund + 'to': 'prefer living to living'. Diese Land-Präferenz zeigt Wunsch nach Ruhe über urbanes Leben."
      },
      {
        id: "prefer_11",
        question: "They'd _____ go to the beach than to the mountains for vacation this year.",
        translation: "Sie würden dieses Jahr lieber zum Strand als zu den Bergen für Urlaub fahren.",
        options: ["rather", "prefer", "like", "want"],
        correct: "rather",
        explanation: "'WOULD RATHER' + Infinitiv + 'than': 'rather go...than go'. Diese Strand-Präferenz ist Urlaubs-Wahl für Sonne."
      },
      {
        id: "prefer_12",
        question: "I _____ not attend the meeting tomorrow if I have the choice freely.",
        translation: "Ich würde das Treffen morgen lieber nicht besuchen, wenn ich frei die Wahl habe.",
        options: ["would rather", "prefer", "like", "want"],
        correct: "would rather",
        explanation: "'WOULD RATHER' + not + Infinitiv: Diese Meeting-Vermeidung bei Wahlfreiheit zeigt geringes Interesse an Teilnahme."
      },
      {
        id: "prefer_13",
        question: "Which do you _____ - chocolate or vanilla ice cream flavor for dessert?",
        translation: "Was bevorzugst du - Schokoladen- oder Vanille-Eiscreme-Geschmack zum Nachtisch?",
        options: ["prefer", "would rather", "like", "want"],
        correct: "prefer",
        explanation: "'PREFER' in direkter Frage: 'which do you prefer'. Diese Eis-Geschmacks-Frage ist klassische Dessert-Präferenz-Entscheidung."
      },
      {
        id: "prefer_14",
        question: "He _____ work alone than in a team with other people usually.",
        translation: "Er arbeitet normalerweise lieber allein als in einem Team mit anderen Leuten.",
        options: ["would rather", "prefers to", "both correct", "likes"],
        correct: "both correct",
        explanation: "Beide möglich: 'would rather work' oder 'prefers to work'. Diese Solo-Arbeitspräferenz ist persönlicher Arbeitsstil."
      },
      {
        id: "prefer_15",
        question: "I'd _____ you came with me to the doctor's appointment for support.",
        translation: "Ich würde es bevorzugen, wenn du zur Unterstützung mit mir zum Arzttermin kämst.",
        options: ["rather", "prefer", "like", "want"],
        correct: "rather",
        explanation: "'WOULD RATHER' + Subjekt + Past: 'rather you came'. Diese Begleitungs-Bitte zum Arzt ist Suche nach emotionaler Unterstützung."
      }
    ]
  }
};

export default part13Categories;
/**
 * GERMAN → ENGLISH GRAMMAR - PART 18
 * 4 categories, 15 questions each
 */

import { Eye, Volume2, Wand2, Settings } from "lucide-react";

export const part18Categories = {
  see_look_watch: {
    name: "See vs Look vs Watch",
    description: "Sehen - see, look, watch für verschiedene Seh-Aktivitäten",
    icon: Eye,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "see_look_1",
        question: "I can _____ the mountains from my bedroom window on clear sunny days.",
        translation: "Ich kann an klaren sonnigen Tagen die Berge von meinem Schlafzimmerfenster sehen.",
        options: ["see", "look at", "watch", "look"],
        correct: "see",
        explanation: "'SEE' = WAHRNEHMEN ohne Absicht: 'can see mountains'. Dieses passive Sehen ist natürliche Wahrnehmung der Berg-Aussicht vom Fenster."
      },
      {
        id: "see_look_2",
        question: "_____ that beautiful painting on the wall carefully - isn't it stunning work?",
        translation: "Schau dir jenes schöne Gemälde an der Wand sorgfältig an - ist es nicht atemberaubende Arbeit?",
        options: ["Look at", "See", "Watch", "Look"],
        correct: "Look at",
        explanation: "'LOOK AT' = AKTIV hinschauen zu etwas: 'look at painting'. Dieses bewusste Anschauen ist gerichtete Aufmerksamkeit auf Kunst-Objekt."
      },
      {
        id: "see_look_3",
        question: "We're _____ a movie on TV tonight at home - would you like to join us?",
        translation: "Wir schauen heute Abend zu Hause einen Film im Fernsehen - möchtest du dich uns anschließen?",
        options: ["watching", "seeing", "looking at", "looking"],
        correct: "watching",
        explanation: "'WATCH' für BEWEGTES beobachten: 'watching a movie'. Filme, TV, Sport nutzen 'watch' für aktives längeres Zuschauen."
      },
      {
        id: "see_look_4",
        question: "Did you _____ the accident happen on the street this morning? It was terrible!",
        translation: "Hast du den Unfall heute Morgen auf der Straße passieren sehen? Es war schrecklich!",
        options: ["see", "look at", "watch", "look"],
        correct: "see",
        explanation: "'SEE' für ZUFÄLLIG mitbekommen: 'see accident happen'. Dieses unbeabsichtigte Unfalls-Beobachten ist schockierender Moment."
      },
      {
        id: "see_look_5",
        question: "_____ me when I'm talking to you - it's polite and respectful behavior!",
        translation: "Schau mich an, wenn ich mit dir rede - das ist höfliches und respektvolles Verhalten!",
        options: ["Look at", "See", "Watch", "Look"],
        correct: "Look at",
        explanation: "'LOOK AT' Imperativ: bewusst Person anschauen. Dieser Blickkontakt beim Gespräch ist wichtige soziale Höflichkeits-Regel."
      },
      {
        id: "see_look_6",
        question: "I love _____ the sunset from the beach every evening in summer - it's peaceful.",
        translation: "Ich liebe es, jeden Sommerabend den Sonnenuntergang vom Strand aus zu beobachten - es ist friedlich.",
        options: ["watching", "seeing", "looking at", "both watching and looking at"],
        correct: "watching",
        explanation: "'WATCH' für PROZESS beobachten: 'watching sunset'. Dieses aktive Sonnenuntergang-Beobachten ist meditative Abend-Routine."
      },
      {
        id: "see_look_7",
        question: "Can you _____ what time it is on your watch please? Mine stopped working.",
        translation: "Kannst du bitte schauen, wie viel Uhr es auf deiner Uhr ist? Meine hat aufgehört zu funktionieren.",
        options: ["see", "look", "watch", "look at"],
        correct: "see",
        explanation: "'SEE' = FESTSTELLEN/prüfen: 'see what time'. Diese Zeit-Überprüfungs-Bitte ist bei defekter eigener Uhr nötig."
      },
      {
        id: "see_look_8",
        question: "We _____ at old family photos together yesterday and shared many happy memories.",
        translation: "Wir schauten uns gestern zusammen alte Familienfotos an und teilten viele glückliche Erinnerungen.",
        options: ["looked", "saw", "watched", "looked at"],
        correct: "looked",
        explanation: "'LOOK' (ohne 'at' mit Präposition später): 'looked at photos'. Dieses gemeinsame Foto-Anschauen ist schöne Erinnerungs-Aktivität."
      },
      {
        id: "see_look_9",
        question: "I _____ her at the supermarket yesterday, but she didn't notice me at all.",
        translation: "Ich sah sie gestern im Supermarkt, aber sie bemerkte mich überhaupt nicht.",
        options: ["saw", "looked at", "watched", "looked"],
        correct: "saw",
        explanation: "'SEE' = ZUFÄLLIG treffen/wahrnehmen: 'saw her'. Diese einseitige zufällige Supermarkt-Begegnung blieb unbemerkt."
      },
      {
        id: "see_look_10",
        question: "Let's _____ the football match on TV together at my house this evening.",
        translation: "Lass uns heute Abend das Fußballspiel im Fernsehen zusammen bei mir zu Hause schauen.",
        options: ["watch", "see", "look at", "look"],
        correct: "watch",
        explanation: "'WATCH' für SPORT-Events: 'watch football match'. Dieses gemeinsame Spiel-Schauen ist gesellige Sport-Fan-Aktivität."
      },
      {
        id: "see_look_11",
        question: "_____ out! There's a car coming very fast around that dangerous corner ahead!",
        translation: "Pass auf! Es kommt ein Auto sehr schnell um jene gefährliche Kurve voraus!",
        options: ["Look", "See", "Watch", "Look at"],
        correct: "Look",
        explanation: "Feste PHRASE: 'LOOK OUT' = Vorsicht/Achtung (Warnung). Dieser Alarm-Ruf warnt vor unmittelbarer Gefahr durch schnelles Auto."
      },
      {
        id: "see_look_12",
        question: "I _____ forward to seeing you again soon - maybe next week sometime?",
        translation: "Ich freue mich darauf, dich bald wieder zu sehen - vielleicht nächste Woche irgendwann?",
        options: ["look", "see", "watch", "am looking"],
        correct: "look",
        explanation: "Feste PHRASE: 'LOOK FORWARD TO' + Gerund = sich freuen auf. Diese Vorfreude auf Wiedersehen ist positive Zukunfts-Emotion."
      },
      {
        id: "see_look_13",
        question: "Did you _____ the news on TV last night about the big storm coming?",
        translation: "Hast du letzte Nacht die Nachrichten im Fernsehen über den kommenden großen Sturm gesehen?",
        options: ["see", "watch", "both correct", "look at"],
        correct: "both correct",
        explanation: "Für TV-Nachrichten: 'SEE' (zufällig) oder 'WATCH' (gezielt) beide möglich. Diese Sturm-Warnung ist wichtige Wetter-Information."
      },
      {
        id: "see_look_14",
        question: "She _____ after her elderly grandmother every day with great care and love.",
        translation: "Sie kümmert sich jeden Tag mit großer Fürsorge und Liebe um ihre ältere Großmutter.",
        options: ["looks", "sees", "watches", "looks at"],
        correct: "looks",
        explanation: "Feste PHRASE: 'LOOK AFTER' = sich kümmern um. Diese tägliche Großmutter-Pflege ist liebevolle familiäre Verantwortung."
      },
      {
        id: "see_look_15",
        question: "I can't _____ very well without my glasses - everything is blurry and unclear!",
        translation: "Ich kann ohne meine Brille nicht sehr gut sehen - alles ist verschwommen und unklar!",
        options: ["see", "look", "watch", "look at"],
        correct: "see",
        explanation: "'SEE' für SEHFÄHIGKEIT allgemein: 'can't see well'. Diese Seh-Schwäche ohne Brille ist physiologische Einschränkung."
      }
    ]
  },

  hear_listen: {
    name: "Hear vs Listen",
    description: "Hören - hear und listen für passives und aktives Hören",
    icon: Volume2,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "hear_listen_1",
        question: "I can _____ music coming from the neighbor's apartment next door loudly.",
        translation: "Ich kann laut Musik aus der Wohnung des Nachbarn nebenan hören.",
        options: ["hear", "listen to", "listen", "hear to"],
        correct: "hear",
        explanation: "'HEAR' = PASSIV wahrnehmen: 'can hear music'. Dieses ungewollte Hören ist automatische Geräusch-Wahrnehmung ohne Absicht."
      },
      {
        id: "hear_listen_2",
        question: "She's _____ her favorite band on Spotify right now with headphones on.",
        translation: "Sie hört gerade mit Kopfhörern ihre Lieblingsband auf Spotify.",
        options: ["listening to", "hearing", "listening", "hearing to"],
        correct: "listening to",
        explanation: "'LISTEN TO' = AKTIV zuhören: 'listening to band'. Dieses bewusste Musik-Hören mit Kopfhörern ist gezielte Unterhaltung."
      },
      {
        id: "hear_listen_3",
        question: "Did you _____ that strange noise coming from the basement down there?",
        translation: "Hast du jenes seltsame Geräusch gehört, das von dort unten aus dem Keller kam?",
        options: ["hear", "listen to", "listen", "hear to"],
        correct: "hear",
        explanation: "'HEAR' für ZUFÄLLIGES Wahrnehmen: 'hear noise'. Dieses unerwartete Keller-Geräusch ist beunruhigend und mysteriös."
      },
      {
        id: "hear_listen_4",
        question: "Please _____ carefully to the instructions before starting the difficult exam today.",
        translation: "Bitte höre sorgfältig auf die Anweisungen, bevor du heute die schwere Prüfung beginnst.",
        options: ["listen", "hear", "listen to", "hear to"],
        correct: "listen",
        explanation: "'LISTEN' (ohne 'to' wenn Objekt folgt): aktiv aufmerksam sein. Diese Anweisungs-Beachtung ist wichtig für korrektes Prüfungs-Verständnis."
      },
      {
        id: "hear_listen_5",
        question: "I love _____ classical music while I'm studying for exams - it helps me focus.",
        translation: "Ich liebe es, klassische Musik zu hören, während ich für Prüfungen lerne - es hilft mir, mich zu konzentrieren.",
        options: ["listening to", "hearing", "listening", "hearing to"],
        correct: "listening to",
        explanation: "'LISTEN TO' für BEWUSSTES Hören: 'love listening to music'. Diese Klassik-Musik beim Lernen ist Konzentrations-Hilfe."
      },
      {
        id: "hear_listen_6",
        question: "I _____ someone calling my name outside, but I couldn't see who it was.",
        translation: "Ich hörte jemanden draußen meinen Namen rufen, aber ich konnte nicht sehen, wer es war.",
        options: ["heard", "listened to", "listened", "heard to"],
        correct: "heard",
        explanation: "'HEAR' Vergangenheit: passives Wahrnehmen: 'heard someone calling'. Dieses Name-Hören ohne Sicht-Identifikation ist mysteriös."
      },
      {
        id: "hear_listen_7",
        question: "You should _____ your teacher more carefully during the lessons in class daily.",
        translation: "Du solltest deinem Lehrer täglich während des Unterrichts in der Klasse aufmerksamer zuhören.",
        options: ["listen to", "hear", "listen", "hear to"],
        correct: "listen to",
        explanation: "'LISTEN TO' für AKTIVE Aufmerksamkeit: 'listen to teacher'. Dieses aufmerksame Zuhören ist essentiell für Lern-Erfolg."
      },
      {
        id: "see_look_8",
        question: "Have you _____ the news about the company merger announced yesterday publicly?",
        translation: "Hast du die gestern öffentlich angekündigten Nachrichten über die Firmen-Fusion gehört?",
        options: ["heard", "listened to", "listened", "heard to"],
        correct: "heard",
        explanation: "'HEAR' = ERFAHREN von Information: 'heard the news'. Dieses Information-Bekommen über Fusion ist wichtige Unternehmens-Nachricht."
      },
      {
        id: "hear_listen_9",
        question: "I always _____ podcasts while I'm driving to work every morning in car.",
        translation: "Ich höre immer Podcasts, während ich jeden Morgen im Auto zur Arbeit fahre.",
        options: ["listen to", "hear", "listen", "hear to"],
        correct: "listen to",
        explanation: "'LISTEN TO' für BEWUSSTE Aktivität: 'listen to podcasts'. Diese Podcast-Fahr-Routine ist produktive Wissens-Nutzung der Pendelzeit."
      },
      {
        id: "hear_listen_10",
        question: "Can you _____ me? The phone connection is very bad and unclear right now!",
        translation: "Kannst du mich hören? Die Telefonverbindung ist gerade sehr schlecht und unklar!",
        options: ["hear", "listen to", "listen", "hear to"],
        correct: "hear",
        explanation: "'HEAR' für AKUSTISCH verstehen können: 'can you hear me'. Diese Verbindungs-Qualitäts-Frage ist wichtig bei schlechter Leitung."
      },
      {
        id: "hear_listen_11",
        question: "She _____ a dog barking outside all night long - it kept her awake completely.",
        translation: "Sie hörte die ganze Nacht lang einen Hund draußen bellen - es hielt sie komplett wach.",
        options: ["heard", "listened to", "listened", "heard to"],
        correct: "heard",
        explanation: "'HEAR' für UNGEWOLLTES Hören: 'heard dog barking'. Dieses nächtliche Bellen-Hören verhinderte erholsamen Schlaf."
      },
      {
        id: "hear_listen_12",
        question: "The children are _____ a story that their teacher is reading aloud in class.",
        translation: "Die Kinder hören einer Geschichte zu, die ihr Lehrer laut in der Klasse vorliest.",
        options: ["listening to", "hearing", "listening", "hearing to"],
        correct: "listening to",
        explanation: "'LISTEN TO' für KONZENTRIERTES Zuhören: Diese aktive Geschichte-Aufmerksamkeit im Unterricht ist Teil des Lern-Prozesses."
      },
      {
        id: "hear_listen_13",
        question: "I often _____ birds singing in the morning when I wake up early happily.",
        translation: "Ich höre morgens oft Vögel singen, wenn ich früh glücklich aufwache.",
        options: ["hear", "listen to", "listen", "hear to"],
        correct: "hear",
        explanation: "'HEAR' für NATÜRLICHE Wahrnehmung: 'hear birds singing'. Dieser morgendliche Vogel-Gesang ist angenehmer natürlicher Weck-Sound."
      },
      {
        id: "hear_listen_14",
        question: "_____ to your parents' advice - they have much more life experience than you!",
        translation: "Höre auf den Rat deiner Eltern - sie haben viel mehr Lebenserfahrung als du!",
        options: ["Listen", "Hear", "Listen to", "Hear to"],
        correct: "Listen",
        explanation: "'LISTEN' Imperativ (ohne 'to' vor 'to your'): aktiv befolgen. Dieser Eltern-Rat-Hinweis betont Wert von Erfahrungs-Weisheit."
      },
      {
        id: "hear_listen_15",
        question: "Have you _____ from your friend recently? I haven't had any news from him.",
        translation: "Hast du kürzlich von deinem Freund gehört? Ich hatte keine Neuigkeiten von ihm.",
        options: ["heard", "listened to", "listened", "heard to"],
        correct: "heard",
        explanation: "Feste PHRASE: 'HEAR FROM' = Nachricht bekommen von. Diese Kontakt-Frage zeigt Sorge über fehlendes Lebenszeichen vom Freund."
      }
    ]
  },

  quantifiers_all: {
    name: "Quantifiers (all/most/some/few)",
    description: "Mengenangaben - all, most, some, few korrekt verwenden",
    icon: Settings,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    questions: [
      {
        id: "quant_1",
        question: "_____ students in the class passed the difficult exam with good grades surprisingly.",
        translation: "Alle Studenten in der Klasse bestanden überraschenderweise die schwere Prüfung mit guten Noten.",
        options: ["All", "Most", "Some", "Few"],
        correct: "All",
        explanation: "'ALL' = 100% (alle): 'all students passed'. Dieser komplette Klassen-Erfolg ist außergewöhnliche kollektive Leistung bei schwerer Prüfung."
      },
      {
        id: "quant_2",
        question: "_____ people in my country speak English as a second language quite well.",
        translation: "Die meisten Leute in meinem Land sprechen Englisch als Zweitsprache ziemlich gut.",
        options: ["Most", "All", "Some", "Few"],
        correct: "Most",
        explanation: "'MOST' = Mehrheit (die meisten): 'most people speak'. Diese hohe Englisch-Kompetenz zeigt gute Sprach-Ausbildung im Land."
      },
      {
        id: "quant_3",
        question: "_____ of my friends enjoy playing video games in their free time regularly.",
        translation: "Einige meiner Freunde genießen es, in ihrer Freizeit regelmäßig Videospiele zu spielen.",
        options: ["Some", "All", "Most", "Few"],
        correct: "Some",
        explanation: "'SOME' = einige (unbestimmte Zahl): 'some of my friends'. Diese teilweise Gaming-Interesse ist normale Freizeitbeschäftigung."
      },
      {
        id: "quant_4",
        question: "Very _____ people speak this rare indigenous language anymore in modern times.",
        translation: "Sehr wenige Leute sprechen diese seltene indigene Sprache in modernen Zeiten noch.",
        options: ["few", "little", "some", "most"],
        correct: "few",
        explanation: "'FEW' für ZÄHLBAR (wenige): 'few people speak'. Diese Sprach-Seltenheit zeigt kulturellen Verlust und Aussterbe-Gefahr."
      },
      {
        id: "quant_5",
        question: "_____ the money I earned last month went towards paying rent and bills.",
        translation: "Das ganze Geld, das ich letzten Monat verdiente, ging für Miete und Rechnungen drauf.",
        options: ["All", "Most", "Some", "Much"],
        correct: "All",
        explanation: "'ALL' + THE + Nomen: 'all the money'. Dieses komplette Geld-Aufbrauchen für Fixkosten zeigt finanzielle Belastung."
      },
      {
        id: "quant_6",
        question: "_____ of the cake was eaten at the party - there's hardly any left now!",
        translation: "Das meiste vom Kuchen wurde bei der Party gegessen - es ist jetzt kaum noch etwas übrig!",
        options: ["Most", "All", "Some", "Much"],
        correct: "Most",
        explanation: "'MOST OF' + THE: 'most of the cake'. Dieser hohe Kuchen-Verzehr bei Party zeigt, dass er sehr beliebt war."
      },
      {
        id: "quant_7",
        question: "_____ of us understood the complicated explanation that the professor gave today.",
        translation: "Nur wenige von uns verstanden die komplizierte Erklärung, die der Professor heute gab.",
        options: ["Few", "Little", "Some", "Most"],
        correct: "Few",
        explanation: "'FEW OF' = wenige von (Personen): 'few of us understood'. Diese geringe Verständnis-Quote zeigt schwierige Erklärung."
      },
      {
        id: "quant_8",
        question: "I spent _____ my free time last weekend reading this fascinating book at home.",
        translation: "Ich verbrachte meine ganze Freizeit letztes Wochenende damit, dieses faszinierende Buch zu Hause zu lesen.",
        options: ["all", "most", "some", "much"],
        correct: "all",
        explanation: "'ALL' + Possessiv: 'all my free time'. Diese komplette Wochenend-Lesezeit zeigt totale Buch-Faszination."
      },
      {
        id: "quant_9",
        question: "_____ information on the internet is accurate and reliable - be careful what you read!",
        translation: "Nicht alle Informationen im Internet sind genau und zuverlässig - sei vorsichtig, was du liest!",
        options: ["Not all", "No", "None", "All"],
        correct: "Not all",
        explanation: "'NOT ALL' = nicht alle (Teilnegation): einige ja, andere nein. Diese Internet-Info-Warnung ist wichtiger kritischer Denk-Hinweis."
      },
      {
        id: "quant_10",
        question: "There's very _____ water left in the bottle - we need to buy more soon.",
        translation: "Es ist sehr wenig Wasser in der Flasche übrig - wir müssen bald mehr kaufen.",
        options: ["little", "few", "some", "much"],
        correct: "little",
        explanation: "'LITTLE' für UNZÄHLBAR (wenig): 'little water'. Diese Wasser-Knappheit erfordert baldigen Nachkauf für Versorgung."
      },
      {
        id: "quant_11",
        question: "_____ my colleagues are going to the conference next week in another city.",
        translation: "Einige meiner Kollegen fahren nächste Woche zur Konferenz in einer anderen Stadt.",
        options: ["Some of", "All of", "Most of", "Few of"],
        correct: "Some of",
        explanation: "'SOME OF' + Possessiv: 'some of my colleagues'. Diese teilweise Konferenz-Teilnahme ist selektive Delegierung."
      },
      {
        id: "quant_12",
        question: "_____ of the information you gave me yesterday was incorrect and misleading unfortunately.",
        translation: "Einige der Informationen, die du mir gestern gabst, waren leider inkorrekt und irreführend.",
        options: ["Some", "All", "Most", "Much"],
        correct: "Some",
        explanation: "'SOME OF' + THE: teilweise falsche Information. Diese Teilfehler in Informationen erfordern Fakten-Überprüfung."
      },
      {
        id: "quant_13",
        question: "There are _____ good restaurants in this area - the food quality is generally poor.",
        translation: "Es gibt wenige gute Restaurants in dieser Gegend - die Essensqualität ist allgemein schlecht.",
        options: ["few", "little", "some", "most"],
        correct: "few",
        explanation: "'FEW' = wenige (negativ): 'few good restaurants'. Diese Restaurant-Knappheit in Gegend ist kulinarisch enttäuschend."
      },
      {
        id: "quant_14",
        question: "I've visited _____ European countries so far in my life - about fifteen total.",
        translation: "Ich habe bisher in meinem Leben mehrere europäische Länder besucht - insgesamt etwa fünfzehn.",
        options: ["several", "all", "few", "little"],
        correct: "several",
        explanation: "'SEVERAL' = mehrere (einige, mehr als 'some'): Diese Europa-Reise-Erfahrung von fünfzehn Ländern ist beachtlich."
      },
      {
        id: "quant_15",
        question: "_____ of the work has been completed already - we're making good progress finally!",
        translation: "Das meiste der Arbeit ist schon erledigt - wir machen endlich gute Fortschritte!",
        options: ["Most", "All", "Some", "Much"],
        correct: "Most",
        explanation: "'MOST OF' + THE: überwiegender Teil fertig. Dieser hohe Arbeits-Fortschritt ist ermutigend für baldigen kompletten Abschluss."
      }
    ]
  },

  inversion_emphasis: {
    name: "Inversion for Emphasis",
    description: "Inversion - Satzstellung für dramatische Betonung umkehren",
    icon: Wand2,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "inv_1",
        question: "Never _____ I _____ such a beautiful sunset in my entire life before!",
        translation: "Nie habe ich zuvor in meinem ganzen Leben so einen schönen Sonnenuntergang gesehen!",
        options: ["have / seen", "I have / seen", "did / see", "I saw"],
        correct: "have / seen",
        explanation: "Nach NEVER am Anfang: INVERSION: 'Never have I seen'. Diese dramatische Betonung verstärkt die Einzigartigkeit des Sonnenuntergangs."
      },
      {
        id: "inv_2",
        question: "Rarely _____ she _____ to parties - she prefers staying at home reading books.",
        translation: "Selten geht sie zu Partys - sie bleibt lieber zu Hause und liest Bücher.",
        options: ["does / go", "she goes", "did / go", "she went"],
        correct: "does / go",
        explanation: "Nach RARELY: INVERSION: 'Rarely does she go'. Diese Satzumstellung betont die Seltenheit ihrer Party-Teilnahme."
      },
      {
        id: "inv_3",
        question: "Not only _____ he smart, but he's also very kind to everyone around him.",
        translation: "Er ist nicht nur schlau, sondern auch sehr freundlich zu jedem um ihn herum.",
        options: ["is", "he is", "does", "he does"],
        correct: "is",
        explanation: "Nach 'NOT ONLY': INVERSION: 'Not only is he'. Diese Struktur hebt beide positive Eigenschaften gleichzeitig hervor."
      },
      {
        id: "inv_4",
        question: "Seldom _____ we _____ such terrible customer service at a restaurant before!",
        translation: "Selten haben wir zuvor so schrecklichen Kundenservice in einem Restaurant erlebt!",
        options: ["have / experienced", "we have / experienced", "did / experience", "we experienced"],
        correct: "have / experienced",
        explanation: "Nach SELDOM: INVERSION: 'Seldom have we experienced'. Diese Betonung verstärkt die Außergewöhnlichkeit des schlechten Service."
      },
      {
        id: "inv_5",
        question: "Under no circumstances _____ you _____ this to anyone else - it's confidential!",
        translation: "Unter keinen Umständen darfst du das jemand anderem erzählen - es ist vertraulich!",
        options: ["should / tell", "you should / tell", "must / tell", "you must / tell"],
        correct: "should / tell",
        explanation: "Nach 'UNDER NO CIRCUMSTANCES': INVERSION: Diese dramatische Struktur betont absolute Geheimhaltungs-Wichtigkeit."
      },
      {
        id: "inv_6",
        question: "Little _____ I _____ that this would be our last meeting together ever.",
        translation: "Wenig wusste ich, dass dies unser letztes Treffen zusammen überhaupt sein würde.",
        options: ["did / know", "I knew", "do / know", "I know"],
        correct: "did / know",
        explanation: "Nach LITTLE (= kaum): INVERSION: 'Little did I know'. Diese Struktur betont die Unwissenheit über Bedeutung des Moments."
      },
      {
        id: "inv_7",
        question: "Only after the exam _____ I _____ that I had studied the wrong material!",
        translation: "Erst nach der Prüfung stellte ich fest, dass ich das falsche Material gelernt hatte!",
        options: ["did / realize", "I realized", "do / realize", "I realize"],
        correct: "did / realize",
        explanation: "Nach 'ONLY AFTER': INVERSION: 'did I realize'. Diese Struktur betont den zu späten Zeitpunkt der Erkenntnis dramatisch."
      },
      {
        id: "inv_8",
        question: "Not until yesterday _____ she _____ about the surprise party we planned for her.",
        translation: "Erst gestern erfuhr sie von der Überraschungsparty, die wir für sie geplant hatten.",
        options: ["did / find out", "she found out", "does / find out", "she finds out"],
        correct: "did / find out",
        explanation: "Nach 'NOT UNTIL': INVERSION: 'did she find out'. Diese Struktur betont den späten Überraschungs-Verlust-Zeitpunkt."
      },
      {
        id: "inv_9",
        question: "Hardly _____ I _____ down when the phone started ringing loudly and annoyingly.",
        translation: "Kaum hatte ich mich hingesetzt, als das Telefon laut und nervig zu klingeln anfing.",
        options: ["had / sat", "I had / sat", "did / sit", "I sat"],
        correct: "had / sat",
        explanation: "Nach HARDLY: INVERSION mit Past Perfect: 'Hardly had I sat'. Diese Struktur betont die unmittelbare Timing-Sequenz."
      },
      {
        id: "inv_10",
        question: "No sooner _____ we _____ than it started to rain heavily outside suddenly.",
        translation: "Kaum waren wir angekommen, als es draußen plötzlich anfing, stark zu regnen.",
        options: ["had / arrived", "we had / arrived", "did / arrive", "we arrived"],
        correct: "had / arrived",
        explanation: "Nach 'NO SOONER': INVERSION + Past Perfect + 'than'. Diese Struktur betont perfektes schlechtes Timing des Regens."
      },
      {
        id: "inv_11",
        question: "Nowhere _____ you _____ better pizza than at this authentic Italian restaurant here!",
        translation: "Nirgendwo wirst du bessere Pizza finden als in diesem authentischen italienischen Restaurant hier!",
        options: ["will / find", "you will / find", "can / find", "you can / find"],
        correct: "will / find",
        explanation: "Nach NOWHERE: INVERSION: 'Nowhere will you find'. Diese Struktur ist absolute Superlativ-Aussage über Pizza-Qualität."
      },
      {
        id: "inv_12",
        question: "Only then _____ I _____ how serious the situation actually was for everyone.",
        translation: "Erst dann verstand ich, wie ernst die Situation tatsächlich für alle war.",
        options: ["did / understand", "I understood", "do / understand", "I understand"],
        correct: "did / understand",
        explanation: "Nach 'ONLY THEN': INVERSION: 'did I understand'. Diese Struktur betont den verzögerten Erkenntnismoment über Ernst-Lage."
      },
      {
        id: "inv_13",
        question: "At no time _____ I _____ to hurt your feelings - I'm truly sorry about it!",
        translation: "Zu keinem Zeitpunkt wollte ich deine Gefühle verletzen - es tut mir wirklich leid!",
        options: ["did / want", "I wanted", "do / want", "I want"],
        correct: "did / want",
        explanation: "Nach 'AT NO TIME': INVERSION. Diese Struktur betont nachdrücklich, dass Verletzung niemals beabsichtigt war."
      },
      {
        id: "inv_14",
        question: "Only by working together _____ we _____ this difficult challenge successfully overcome.",
        translation: "Nur durch Zusammenarbeit können wir diese schwere Herausforderung erfolgreich überwinden.",
        options: ["can / overcome", "we can / overcome", "will / overcome", "we will / overcome"],
        correct: "can / overcome",
        explanation: "Nach 'ONLY BY': INVERSION: 'can we overcome'. Diese Struktur betont Teamwork als einzige Erfolgs-Möglichkeit."
      },
      {
        id: "inv_15",
        question: "Never again _____ I _____ such a big mistake in my professional career work!",
        translation: "Nie wieder werde ich so einen großen Fehler in meiner professionellen Karriere-Arbeit machen!",
        options: ["will / make", "I will / make", "do / make", "I do / make"],
        correct: "will / make",
        explanation: "Nach 'NEVER AGAIN': INVERSION: 'will I make'. Diese dramatische Struktur ist starkes Versprechen zukünftiger Fehler-Vermeidung."
      }
    ]
  }
};

export default part18Categories;
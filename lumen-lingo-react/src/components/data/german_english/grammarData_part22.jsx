/**
 * GERMAN → ENGLISH GRAMMAR - PART 22
 * 4 categories, 15 questions each
 */

import { MessageSquare, Repeat, Package, Smartphone } from "lucide-react";

export const part22Categories = {
  indirect_questions: {
    name: "Indirect Questions",
    description: "Indirekte Fragen - höfliche Frage-Umformulierung verwenden",
    icon: MessageSquare,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "indir_1",
        question: "Could you tell me where _____ is located exactly in the city center?",
        translation: "Könntest du mir sagen, wo genau im Stadtzentrum der Bahnhof liegt?",
        options: ["the station", "is the station", "the station is", "does the station"],
        correct: "the station",
        explanation: "Indirekte Frage: NORMALE Wortstellung (NICHT Frage-Ordnung): 'where the station is'. Diese höfliche Form vermeidet direkte Frage-Inversion."
      },
      {
        id: "indir_2",
        question: "Do you know what time _____ tomorrow morning from platform five?",
        translation: "Weißt du, um wie viel Uhr der Zug morgen früh von Gleis fünf abfährt?",
        options: ["the train leaves", "does the train leave", "leaves the train", "the train leave"],
        correct: "the train leaves",
        explanation: "Nach 'Do you know': normale Satzstellung: 'what time the train leaves' (NICHT does leave). Indirekte Fragen sind Aussagesätze in Fragen."
      },
      {
        id: "indir_3",
        question: "I wonder _____ for dinner tonight at the new restaurant downtown.",
        translation: "Ich frage mich, was sie heute Abend im neuen Restaurant in der Innenstadt zum Abendessen essen wird.",
        options: ["what she will eat", "what will she eat", "what does she eat", "what she eats"],
        correct: "what she will eat",
        explanation: "Nach 'I wonder': KEINE Inversion: 'what she will eat'. Diese gedankliche Frage nutzt normale Wortstellung ohne Hilfsverb vorne."
      },
      {
        id: "indir_4",
        question: "Can you explain _____ so angry with me about what happened yesterday?",
        translation: "Kannst du erklären, warum er gestern über das Geschehene so wütend auf mich war?",
        options: ["why he was", "why was he", "why he is", "why is he"],
        correct: "why he was",
        explanation: "Indirekte Frage mit Vergangenheit: 'why he was' (normale Ordnung). Diese Erklärungs-Bitte sucht Grund für vergangene Wut-Reaktion."
      },
      {
        id: "indir_5",
        question: "I'm not sure _____ to the party tomorrow evening or stay home instead.",
        translation: "Ich bin nicht sicher, ob sie morgen Abend zur Party kommt oder stattdessen zu Hause bleibt.",
        options: ["if she's coming", "if is she coming", "whether is she coming", "whether she coming"],
        correct: "if she's coming",
        explanation: "Nach 'not sure': 'IF/WHETHER' + normale Ordnung: 'if she's coming'. Diese Unsicherheit über Teilnahme ist normale soziale Unklarheit."
      },
      {
        id: "indir_6",
        question: "Could you please tell me how much _____? I forgot to check the price tag.",
        translation: "Könntest du mir bitte sagen, wie viel das kostet? Ich vergaß, das Preisschild zu prüfen.",
        options: ["this costs", "does this cost", "costs this", "this cost"],
        correct: "this costs",
        explanation: "Höfliche indirekte Frage: 'how much this costs' (normale Ordnung). Diese Preis-Anfrage ist höflicher als direkte Frage."
      },
      {
        id: "indir_7",
        question: "I'd like to know _____ about the job position and responsibilities involved here.",
        translation: "Ich würde gerne mehr über die Job-Position und die damit verbundenen Verantwortlichkeiten hier wissen.",
        options: ["what the job involves", "what does the job involve", "what involves the job", "what the job involve"],
        correct: "what the job involves",
        explanation: "Nach 'I'd like to know': normale Ordnung: 'what the job involves'. Diese Job-Detail-Anfrage ist professionelle Informations-Bitte."
      },
      {
        id: "indir_8",
        question: "Can you remember where _____ when we last met at the conference?",
        translation: "Kannst du dich erinnern, wo wir waren, als wir uns zuletzt bei der Konferenz trafen?",
        options: ["we were", "were we", "we are", "are we"],
        correct: "we were",
        explanation: "Indirekte Erinnerungs-Frage: 'where we were' (keine Inversion). Diese Orts-Erinnerungs-Frage an vergangene Konferenz-Begegnung."
      },
      {
        id: "indir_9",
        question: "Do you have any idea _____ to fix this broken computer problem quickly?",
        translation: "Hast du irgendeine Idee, wie man dieses kaputte Computer-Problem schnell beheben kann?",
        options: ["how to fix", "how fix", "how to fixing", "how fixing"],
        correct: "how to fix",
        explanation: "Indirekte Frage mit INFINITIV: 'how to fix' (wie man repariert). Diese Struktur fragt nach Methode ohne spezifisches Subjekt."
      },
      {
        id: "indir_10",
        question: "I wonder _____ enough money saved for the expensive vacation trip abroad.",
        translation: "Ich frage mich, ob wir genug Geld für die teure Urlaubs-Reise ins Ausland gespart haben.",
        options: ["if we have", "if have we", "whether have we", "if we has"],
        correct: "if we have",
        explanation: "Nach 'wonder': 'IF/WHETHER' + normale Ordnung: 'if we have'. Diese Finanz-Sorge vor teurer Reise ist berechtigte Budget-Überlegung."
      },
      {
        id: "indir_11",
        question: "Could you show me _____ this new smartphone device works exactly please?",
        translation: "Könntest du mir bitte zeigen, wie genau dieses neue Smartphone-Gerät funktioniert?",
        options: ["how", "how does", "what", "what does"],
        correct: "how",
        explanation: "Indirekte Frage: 'how' + Subjekt + Verb: 'how this works'. Diese Funktions-Erklärungs-Bitte ist höflicher als direkte Frage-Form."
      },
      {
        id: "indir_12",
        question: "I'm not certain _____ to the meeting tomorrow or if it was cancelled already.",
        translation: "Ich bin nicht sicher, ob er morgen zum Meeting kommt oder ob es bereits abgesagt wurde.",
        options: ["if he's coming", "if is he coming", "whether is he coming", "if he coming"],
        correct: "if he's coming",
        explanation: "Nach 'not certain': 'IF' + normale Ordnung. Diese Meeting-Teilnahme-Unsicherheit braucht Klärung oder Bestätigung."
      },
      {
        id: "indir_13",
        question: "Can you tell me _____ best to get to the airport from here quickly?",
        translation: "Kannst du mir sagen, was der beste Weg ist, um von hier schnell zum Flughafen zu kommen?",
        options: ["what the best way is", "what is the best way", "what the best way", "what best way is"],
        correct: "what the best way is",
        explanation: "Indirekte Frage: 'what the best way is' (normale Ordnung). Diese Weg-Anfrage zum Flughafen sucht schnellste Route-Information."
      },
      {
        id: "indir_14",
        question: "Do you remember _____ last summer during our family vacation together?",
        translation: "Erinnerst du dich, was wir letzten Sommer während unseres gemeinsamen Familienurlaubs gemacht haben?",
        options: ["what we did", "what did we do", "what we do", "what do we do"],
        correct: "what we did",
        explanation: "Erinnerungs-Frage: normale Ordnung mit Vergangenheit: 'what we did'. Diese Urlaubs-Erinnerung an gemeinsame Familie-Aktivitäten."
      },
      {
        id: "indir_15",
        question: "I'd be interested to know _____ about this important topic and issue recently.",
        translation: "Ich wäre interessiert zu erfahren, was er über dieses wichtige Thema und diese kürzliche Angelegenheit denkt.",
        options: ["what he thinks", "what does he think", "what thinks he", "what he think"],
        correct: "what he thinks",
        explanation: "Nach 'to know': normale Satzstellung: 'what he thinks'. Diese Meinungs-Anfrage zu wichtigem Thema ist höfliche Interesse-Bekundung."
      }
    ]
  },

  addition_words: {
    name: "Addition Words (besides/as well as)",
    description: "Zusatz-Wörter - besides, as well as, moreover für Ergänzungen",
    icon: Package,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "add_1",
        question: "_____ English, she can also speak French and German fluently as well.",
        translation: "Außer Englisch kann sie auch fließend Französisch und Deutsch sprechen.",
        options: ["Besides", "Beside", "As well as", "Both besides and as well as"],
        correct: "Besides",
        explanation: "'BESIDES' am Satzanfang = außerdem/zusätzlich zu: Diese Mehrsprachigkeit von drei Sprachen ist beeindruckende Sprachkompetenz."
      },
      {
        id: "add_2",
        question: "The hotel has a gym _____ a swimming pool for guests to use daily.",
        translation: "Das Hotel hat ein Fitnessstudio sowie einen Swimmingpool für Gäste zur täglichen Nutzung.",
        options: ["as well as", "besides", "both correct", "moreover"],
        correct: "as well as",
        explanation: "'AS WELL AS' ZWISCHEN zwei Dingen: 'gym as well as pool'. Diese Hotel-Ausstattung bietet mehrere Sport-Möglichkeiten für Gäste."
      },
      {
        id: "add_3",
        question: "He's intelligent. _____, he's very kind and helpful to everyone around him.",
        translation: "Er ist intelligent. Außerdem ist er sehr freundlich und hilfsbereit zu jedem um ihn herum.",
        options: ["Moreover", "Besides", "As well", "All correct"],
        correct: "Moreover",
        explanation: "'MOREOVER' am NEUEN Satzanfang (formell): fügt weitere positive Information hinzu. Diese Kombination von Intelligenz und Freundlichkeit ist ideal."
      },
      {
        id: "add_4",
        question: "_____ being expensive, the restaurant service was also very slow and poor quality.",
        translation: "Außer teuer zu sein, war der Restaurant-Service auch sehr langsam und von schlechter Qualität.",
        options: ["Besides", "Beside", "As well as", "Moreover"],
        correct: "Besides",
        explanation: "'BESIDES' + Gerund: zusätzlich zum Teuer-Sein. Diese Kombination mehrerer negativer Aspekte macht Restaurant-Erfahrung sehr enttäuschend."
      },
      {
        id: "add_5",
        question: "She enjoys reading _____ writing poetry in her free creative time at home.",
        translation: "Sie genießt das Lesen sowie das Schreiben von Gedichten in ihrer freien kreativen Zeit zu Hause.",
        options: ["as well as", "besides", "moreover", "both as well as and besides"],
        correct: "as well as",
        explanation: "'AS WELL AS' verbindet ÄHNLICHE Aktivitäten: Diese literarischen Hobbies zeigen kreative künstlerische Interessen."
      },
      {
        id: "add_6",
        question: "The course covers grammar. _____, it includes vocabulary and pronunciation practice too.",
        translation: "Der Kurs deckt Grammatik ab. Darüber hinaus beinhaltet er auch Vokabular und Aussprache-Übung.",
        options: ["Furthermore", "Besides", "As well as", "All correct"],
        correct: "Furthermore",
        explanation: "'FURTHERMORE' (sehr formell) = darüber hinaus: Diese umfassende Kurs-Abdeckung bietet vollständiges Sprach-Lern-Programm."
      },
      {
        id: "add_7",
        question: "_____ the main course, would you like to order a dessert or coffee?",
        translation: "Zusätzlich zum Hauptgericht, möchtest du ein Dessert oder Kaffee bestellen?",
        options: ["Besides", "Beside", "As well as", "Moreover"],
        correct: "Besides",
        explanation: "'BESIDES' für ZUSÄTZLICH zu etwas: Diese Restaurant-Nachfrage nach weiteren Bestellungen ist Standard-Service-Frage."
      },
      {
        id: "add_8",
        question: "She's a talented musician _____ being an excellent teacher at the school.",
        translation: "Sie ist eine talentierte Musikerin sowie eine ausgezeichnete Lehrerin an der Schule.",
        options: ["as well as", "besides", "both correct", "moreover"],
        correct: "as well as",
        explanation: "'AS WELL AS' verbindet BERUFE/Rollen: Diese Doppel-Begabung in Musik und Lehre ist bemerkenswerte Kombination."
      },
      {
        id: "add_9",
        question: "The apartment is spacious and bright. _____, it has a beautiful balcony view.",
        translation: "Die Wohnung ist geräumig und hell. Außerdem hat sie eine schöne Balkon-Aussicht.",
        options: ["In addition", "Besides", "Moreover", "All correct"],
        correct: "All correct",
        explanation: "Alle formellen ADDITIONS-Wörter möglich am Satzanfang: Diese positiven Wohnungs-Eigenschaften machen sie sehr attraktiv."
      },
      {
        id: "add_10",
        question: "He speaks Spanish _____ Portuguese, having lived in Brazil for five years.",
        translation: "Er spricht Spanisch sowie Portugiesisch, nachdem er fünf Jahre in Brasilien gelebt hat.",
        options: ["as well as", "besides", "both correct", "moreover"],
        correct: "as well as",
        explanation: "'AS WELL AS' für SPRACHEN: Diese Zweisprachigkeit ist natürliches Resultat von fünfjährigem Brasilien-Aufenthalt."
      },
      {
        id: "add_11",
        question: "_____ cooking, she also loves baking cakes and desserts for family and friends.",
        translation: "Außer Kochen liebt sie auch das Backen von Kuchen und Desserts für Familie und Freunde.",
        options: ["Besides", "Beside", "As well as", "Moreover"],
        correct: "Besides",
        explanation: "'BESIDES' + Gerund am Anfang: Diese kulinarischen Hobbies zeigen vielseitige Koch- und Back-Leidenschaft."
      },
      {
        id: "add_12",
        question: "The job offers good salary _____ excellent benefits like health insurance coverage.",
        translation: "Der Job bietet gutes Gehalt sowie ausgezeichnete Zusatzleistungen wie Krankenversicherungs-Abdeckung.",
        options: ["as well as", "besides", "both correct", "moreover"],
        correct: "as well as",
        explanation: "'AS WELL AS' für JOB-Vorteile: Diese Kombination von Gehalt und Benefits macht Position sehr attraktiv für Bewerber."
      },
      {
        id: "add_13",
        question: "The city has great museums. _____, there are many beautiful parks and gardens to visit.",
        translation: "Die Stadt hat großartige Museen. Zudem gibt es viele schöne Parks und Gärten zu besuchen.",
        options: ["Additionally", "Besides", "Moreover", "All correct"],
        correct: "All correct",
        explanation: "Alle ADDITIONS-Wörter am Satzanfang: Diese vielfältigen Stadt-Attraktionen bieten kulturelle und Natur-Erlebnisse."
      },
      {
        id: "add_14",
        question: "_____ winning the race, he also broke the world record time impressively yesterday!",
        translation: "Außer das Rennen zu gewinnen, brach er gestern auch beeindruckend den Weltrekord-Zeit!",
        options: ["Besides", "Beside", "As well as", "Moreover"],
        correct: "Besides",
        explanation: "'BESIDES' + Gerund: Diese doppelte Leistung von Sieg und Rekord ist außergewöhnliche sportliche Erfolgs-Kombination."
      },
      {
        id: "add_15",
        question: "She's fluent in Japanese _____ Chinese, making her very valuable for company.",
        translation: "Sie ist fließend in Japanisch sowie Chinesisch, was sie sehr wertvoll für die Firma macht.",
        options: ["as well as", "besides", "both correct", "moreover"],
        correct: "as well as",
        explanation: "'AS WELL AS' für SPRACH-Kombination: Diese Doppel-Sprachkompetenz in asiatischen Sprachen ist seltene wertvolle Fähigkeit."
      }
    ]
  },

  ellipsis_substitution: {
    name: "Ellipsis & Substitution",
    description: "Auslassung - Wörter weglassen oder ersetzen zur Vermeidung von Wiederholung",
    icon: Repeat,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "ellip_1",
        question: "A: 'Are you going to the party?' B: 'I might _____.' (avoiding repetition)",
        translation: "A: 'Gehst du zur Party?' B: 'Vielleicht.' (Wiederholung vermeidend)",
        options: ["do", "go", "be", "might"],
        correct: "do",
        explanation: "SUBSTITUTION mit 'DO': ersetzt 'go to the party': 'I might do'. Diese Kurzantwort vermeidet Wiederholung durch Hilfsverb-Substitution."
      },
      {
        id: "ellip_2",
        question: "She speaks French better than I _____. (avoiding repetition of 'speak French')",
        translation: "Sie spricht besser Französisch als ich. (Wiederholung von 'Französisch sprechen' vermeidend)",
        options: ["do", "am", "can", "speak"],
        correct: "do",
        explanation: "'DO' ersetzt VOLLVERB: 'than I do' = than I speak French. Diese Vergleichs-Kurzform ist eleganter als vollständige Wiederholung."
      },
      {
        id: "ellip_3",
        question: "A: 'Have you finished your homework?' B: 'Not yet, but I will _____.'",
        translation: "A: 'Hast du deine Hausaufgaben fertig?' B: 'Noch nicht, aber ich werde.'",
        options: ["do", "finish", "have", "soon"],
        correct: "do",
        explanation: "'WILL DO' ersetzt 'will finish homework': Diese Kurzantwort ist natürlicher als vollständige Satz-Wiederholung."
      },
      {
        id: "ellip_4",
        question: "I can play piano and so can my _____. (avoiding repetition of 'sister')",
        translation: "Ich kann Klavier spielen und meine Schwester auch. (Wiederholung von 'Schwester' vermeidend)",
        options: ["sister", "she", "does", "can"],
        correct: "sister",
        explanation: "Nach 'SO CAN': NOMEN oder PRONOMEN möglich: 'so can my sister'. Diese Zustimmungs-Form zeigt gemeinsame Klavier-Fähigkeit."
      },
      {
        id: "ellip_5",
        question: "A: 'I think it will rain.' B: 'I don't think _____.' (avoiding repetition)",
        translation: "A: 'Ich denke, es wird regnen.' B: 'Ich denke nicht.' (Wiederholung vermeidend)",
        options: ["so", "it", "that", "both so and it will"],
        correct: "so",
        explanation: "'THINK SO' ersetzt ganzen Nebensatz: 'I don't think so' = I don't think it will rain. Diese Kurzform ist sehr gebräuchlich."
      },
      {
        id: "ellip_6",
        question: "She's more experienced than he _____. (avoiding repetition of 'is experienced')",
        translation: "Sie ist erfahrener als er. (Wiederholung von 'ist erfahren' vermeidend)",
        options: ["is", "does", "has", "experienced"],
        correct: "is",
        explanation: "'IS' nach Komparativ ersetzt Adjektiv: 'than he is'. Diese Vergleichs-Kurzform ist standard bei Adjektiv-Vergleichen."
      },
      {
        id: "ellip_7",
        question: "A: 'Will you help me?' B: 'Of course I _____!' (strong affirmative)",
        translation: "A: 'Wirst du mir helfen?' B: 'Natürlich!' (starke Bejahung)",
        options: ["will", "do", "can", "help"],
        correct: "will",
        explanation: "MODAL wiederholen: 'I will' = I will help you. Diese enthusiastische Hilfs-Zusage nutzt Modal-Wiederholung zur Verstärkung."
      },
      {
        id: "ellip_8",
        question: "If you can come to the party, please _____. We'd love to see you!",
        translation: "Wenn du zur Party kommen kannst, bitte tu es. Wir würden dich gerne sehen!",
        options: ["do", "come", "can", "will"],
        correct: "do",
        explanation: "'PLEASE DO' ersetzt 'please come': Diese Einladungs-Verstärkung ist höfliche dringende Bitte um Teilnahme."
      },
      {
        id: "ellip_9",
        question: "A: 'She loves traveling.' B: 'Yes, she certainly _____.' (emphatic agreement)",
        translation: "A: 'Sie liebt Reisen.' B: 'Ja, das tut sie sicherlich.' (betonende Zustimmung)",
        options: ["does", "is", "can", "loves"],
        correct: "does",
        explanation: "'DOES' betont Zustimmung: 'she certainly does' = loves traveling. Diese Verstärkung bestätigt die Reise-Leidenschaft nachdrücklich."
      },
      {
        id: "ellip_10",
        question: "I have more books than I know what to do _____. (avoiding repetition)",
        translation: "Ich habe mehr Bücher als ich weiß, was ich damit tun soll. (Wiederholung vermeidend)",
        options: ["with", "with them", "both correct", "about"],
        correct: "both correct",
        explanation: "ELLIPSIS möglich: 'do with' oder 'do with them'. Beide Formen sind korrekt, die kürzere ist üblicher in Umgangssprache."
      },
      {
        id: "ellip_11",
        question: "A: 'I hope she passes the exam.' B: 'I hope _____ too.'",
        translation: "A: 'Ich hoffe, sie besteht die Prüfung.' B: 'Ich hoffe es auch.'",
        options: ["so", "it", "that", "both so and she does"],
        correct: "so",
        explanation: "'HOPE SO' ersetzt ganzen Satz: 'I hope so' = I hope she passes. Diese Hoffnungs-Zustimmung ist kürzer als volle Wiederholung."
      },
      {
        id: "ellip_12",
        question: "He works harder than anyone else in the office _____. (avoiding repetition)",
        translation: "Er arbeitet härter als alle anderen im Büro. (Wiederholung vermeidend)",
        options: ["does", "is", "works", "can"],
        correct: "does",
        explanation: "'DOES' ersetzt 'works': 'than anyone else does'. Diese Arbeits-Intensität ist höher als bei allen Kollegen im Vergleich."
      },
      {
        id: "ellip_13",
        question: "A: 'You should rest more.' B: 'Yes, I probably _____.' (agreeing)",
        translation: "A: 'Du solltest dich mehr ausruhen.' B: 'Ja, das sollte ich wahrscheinlich.' (zustimmend)",
        options: ["should", "do", "am", "rest"],
        correct: "should",
        explanation: "MODAL wiederholen: 'I probably should' = should rest more. Diese Zustimmung zum Ruhe-Rat ist Selbst-Erkenntnis über Ruhe-Bedarf."
      },
      {
        id: "ellip_14",
        question: "She seems happier now than she used to _____. (avoiding full repetition)",
        translation: "Sie scheint jetzt glücklicher zu sein als sie früher war. (vollständige Wiederholung vermeidend)",
        options: ["be", "is", "was", "seem"],
        correct: "be",
        explanation: "'USED TO BE' vermeidet 'used to be happy': Diese Glücks-Verbesserung über Zeit ist positive Lebens-Entwicklung."
      },
      {
        id: "ellip_15",
        question: "A: 'Are they coming?' B: 'I believe _____.' (short affirmative response)",
        translation: "A: 'Kommen sie?' B: 'Ich glaube schon.' (kurze bejahende Antwort)",
        options: ["so", "it", "they are", "yes"],
        correct: "so",
        explanation: "'BELIEVE SO': 'I believe so' = I believe they are coming. Diese Kurzantwort ist eleganter als vollständige Satz-Wiederholung."
      }
    ]
  },

  verb_patterns_specific: {
    name: "Specific Verb Patterns",
    description: "Spezielle Verb-Muster - nach bestimmten Verben korrekte Struktur wählen",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "verb_pat_1",
        question: "She reminded me _____ my keys before leaving the house this morning.",
        translation: "Sie erinnerte mich daran, heute Morgen meine Schlüssel mitzunehmen, bevor ich das Haus verließ.",
        options: ["to take", "taking", "take", "of taking"],
        correct: "to take",
        explanation: "'REMIND' + Person + 'TO' + Infinitiv: 'reminded me to take'. Diese Erinnerungs-Struktur zeigt zukünftige Handlung, an die man denken soll."
      },
      {
        id: "verb_pat_2",
        question: "He accused her _____ his wallet from the table when nobody was looking around.",
        translation: "Er beschuldigte sie, seine Geldbörse vom Tisch gestohlen zu haben, als niemand herschaute.",
        options: ["of stealing", "to steal", "stealing", "that she stole"],
        correct: "of stealing",
        explanation: "'ACCUSE' + Person + 'OF' + Gerund: 'accused her of stealing'. Diese Beschuldigungs-Struktur nutzt immer 'of' plus -ing Form."
      },
      {
        id: "verb_pat_3",
        question: "I congratulated him _____ the exam with such excellent high grades successfully.",
        translation: "Ich gratulierte ihm dazu, die Prüfung erfolgreich mit so ausgezeichneten hohen Noten bestanden zu haben.",
        options: ["on passing", "to pass", "for passing", "that he passed"],
        correct: "on passing",
        explanation: "'CONGRATULATE' + Person + 'ON' + Gerund: 'congratulated him on passing'. Diese Glückwunsch-Struktur nutzt immer 'on' mit -ing."
      },
      {
        id: "verb_pat_4",
        question: "They warned us _____ swimming in the dangerous deep water near the rocks.",
        translation: "Sie warnten uns davor, im gefährlichen tiefen Wasser nahe den Felsen zu schwimmen.",
        options: ["not to go", "to not go", "don't go", "of going"],
        correct: "not to go",
        explanation: "'WARN' + Person + 'NOT TO': 'warned us not to go'. Diese Warnungs-Struktur für Vermeidung nutzt negativen Infinitiv."
      },
      {
        id: "verb_pat_5",
        question: "She insisted _____ for the expensive dinner at the restaurant last night together.",
        translation: "Sie bestand darauf, für das teure Abendessen im Restaurant letzte Nacht zusammen zu bezahlen.",
        options: ["on paying", "to pay", "paying", "that she pays"],
        correct: "on paying",
        explanation: "'INSIST ON' + Gerund: 'insisted on paying'. Diese Bestehen-Struktur zeigt starken Willen, trotz möglicher Einwände zu bezahlen."
      },
      {
        id: "verb_pat_6",
        question: "He persuaded me _____ him with the difficult project work at office.",
        translation: "Er überredete mich, ihm bei der schweren Projektarbeit im Büro zu helfen.",
        options: ["to help", "helping", "help", "of helping"],
        correct: "to help",
        explanation: "'PERSUADE' + Person + 'TO': 'persuaded me to help'. Diese Überredungs-Struktur zeigt erfolgreiche Einflussnahme auf Entscheidung."
      },
      {
        id: "verb_pat_7",
        question: "I apologized _____ so rude to her during our argument yesterday afternoon.",
        translation: "Ich entschuldigte mich dafür, gestern Nachmittag während unseres Streits so unhöflich zu ihr gewesen zu sein.",
        options: ["for being", "to be", "being", "that I was"],
        correct: "for being",
        explanation: "'APOLOGIZE FOR' + Gerund: 'apologized for being rude'. Diese Entschuldigungs-Struktur nutzt immer 'for' mit -ing Form."
      },
      {
        id: "verb_pat_8",
        question: "She convinced me _____ a new car instead of repairing the old broken one.",
        translation: "Sie überzeugte mich, ein neues Auto zu kaufen, statt das alte kaputte zu reparieren.",
        options: ["to buy", "buying", "buy", "of buying"],
        correct: "to buy",
        explanation: "'CONVINCE' + Person + 'TO': 'convinced me to buy'. Diese Überzeugungs-Struktur zeigt erfolgreiche Meinungs-Änderung."
      },
      {
        id: "verb_pat_9",
        question: "He blamed me _____ the important meeting by giving wrong directions to location.",
        translation: "Er machte mich dafür verantwortlich, das wichtige Meeting zu ruinieren, indem ich falsche Wegbeschreibung zum Ort gab.",
        options: ["for ruining", "to ruin", "ruining", "that I ruined"],
        correct: "for ruining",
        explanation: "'BLAME' + Person + 'FOR' + Gerund: 'blamed me for ruining'. Diese Schuldzuweisung-Struktur nutzt immer 'for' plus -ing."
      },
      {
        id: "verb_pat_10",
        question: "They encouraged us _____ harder for the upcoming final exams next month.",
        translation: "Sie ermutigten uns, für die kommenden Abschlussprüfungen nächsten Monat härter zu lernen.",
        options: ["to study", "studying", "study", "of studying"],
        correct: "to study",
        explanation: "'ENCOURAGE' + Person + 'TO': 'encouraged us to study'. Diese Ermutigungs-Struktur motiviert zu zukünftiger intensiverer Lern-Anstrengung."
      },
      {
        id: "verb_pat_11",
        question: "She prevented me _____ a big mistake with that risky business investment decision.",
        translation: "Sie hinderte mich daran, einen großen Fehler mit jener riskanten Geschäftsinvestitions-Entscheidung zu machen.",
        options: ["from making", "to make", "making", "of making"],
        correct: "from making",
        explanation: "'PREVENT' + Person + 'FROM' + Gerund: 'prevented me from making'. Diese Verhinderungs-Struktur nutzt immer 'from' mit -ing."
      },
      {
        id: "verb_pat_12",
        question: "I thanked him _____ me with my heavy luggage at the busy airport.",
        translation: "Ich dankte ihm dafür, mir mit meinem schweren Gepäck am geschäftigen Flughafen geholfen zu haben.",
        options: ["for helping", "to help", "helping", "that he helped"],
        correct: "for helping",
        explanation: "'THANK' + Person + 'FOR' + Gerund: 'thanked him for helping'. Diese Dank-Struktur für vergangene Hilfe nutzt 'for' plus -ing."
      },
      {
        id: "verb_pat_13",
        question: "They invited us _____ their wedding ceremony next summer in countryside location.",
        translation: "Sie luden uns ein, zu ihrer Hochzeitszeremonie nächsten Sommer an einem Ort auf dem Land zu kommen.",
        options: ["to attend", "attending", "attend", "for attending"],
        correct: "to attend",
        explanation: "'INVITE' + Person + 'TO': 'invited us to attend'. Diese Einladungs-Struktur zeigt erwünschte zukünftige Teilnahme bei Hochzeit."
      },
      {
        id: "verb_pat_14",
        question: "He admitted _____ wrong about the situation and apologized sincerely to everyone.",
        translation: "Er gab zu, bezüglich der Situation falsch gelegen zu haben, und entschuldigte sich aufrichtig bei allen.",
        options: ["being", "to be", "be", "that he was"],
        correct: "being",
        explanation: "'ADMIT' + Gerund: 'admitted being wrong'. Diese Fehler-Eingeständnis-Struktur zeigt Ehrlichkeit und Reife-Charakter."
      },
      {
        id: "verb_pat_15",
        question: "She recommended _____ the doctor immediately about the persistent health symptoms I described.",
        translation: "Sie empfahl, sofort wegen der anhaltenden Gesundheits-Symptome, die ich beschrieb, zum Arzt zu gehen.",
        options: ["seeing", "to see", "see", "that I see"],
        correct: "seeing",
        explanation: "'RECOMMEND' + Gerund: 'recommended seeing'. Diese Arzt-Besuch-Empfehlung bei Symptomen ist wichtiger Gesundheits-Rat."
      }
    ]
  }
};

export default part22Categories;
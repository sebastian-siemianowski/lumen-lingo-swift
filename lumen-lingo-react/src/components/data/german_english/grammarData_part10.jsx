
/**
 * GERMAN → ENGLISH GRAMMAR - PART 10
 * 4 categories, 15 questions each
 */

import { Wrench, MessageCircle, Map, User } from "lucide-react";

export const part10Categories = {
  make_vs_do: {
    name: "Make vs Do",
    description: "Make oder Do - richtige Verwendung in festen Ausdrücken",
    icon: Wrench,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "make_do_1",
        question: "I need to _____ my homework before I can go out and play.",
        translation: "Ich muss meine Hausaufgaben machen, bevor ich rausgehen und spielen kann.",
        options: ["do", "make", "have", "get"],
        correct: "do",
        explanation: "Feste Phrase 'DO homework' (NICHT make): Diese Hausaufgaben-Pflicht vor Spielen ist typische Kinder-Regel für Verantwortung."
      },
      {
        id: "make_do_2",
        question: "Can you _____ me a favor and help with these heavy bags?",
        translation: "Kannst du mir einen Gefallen tun und mit diesen schweren Taschen helfen?",
        options: ["do", "make", "have", "get"],
        correct: "do",
        explanation: "Feste Phrase 'DO a favor' (Gefallen tun): Diese höfliche Hilfs-Bitte bei schweren Taschen ist freundliche Anfrage."
      },
      {
        id: "make_do_3",
        question: "She _____ a delicious cake for my birthday party yesterday afternoon.",
        translation: "Sie machte gestern Nachmittag einen leckeren Kuchen für meine Geburtstagsparty.",
        options: ["made", "did", "had", "got"],
        correct: "made",
        explanation: "Für HERSTELLEN: 'MAKE a cake' (NICHT do): Dieser selbstgemachte Geburtstagskuchen ist liebevolle persönliche Geste."
      },
      {
        id: "make_do_4",
        question: "I always _____ my bed immediately after getting up in morning.",
        translation: "Ich mache mein Bett immer sofort nach dem Aufstehen am Morgen.",
        options: ["make", "do", "have", "get"],
        correct: "make",
        explanation: "Feste Phrase 'MAKE the bed' (Bett machen): Diese morgendliche Bettmach-Routine ist Ordnungs-Gewohnheit für sauberes Zimmer."
      },
      {
        id: "make_do_5",
        question: "He needs to _____ some exercise regularly to stay healthy and fit.",
        translation: "Er muss regelmäßig Sport machen, um gesund und fit zu bleiben.",
        options: ["do", "make", "have", "get"],
        correct: "do",
        explanation: "Feste Phrase 'DO exercise/sport': Diese Sport-Notwendigkeit für Gesundheit ist fundamentale Fitness-Wahrheit."
      },
      {
        id: "make_do_6",
        question: "Let me _____ a phone call to my mother quickly - just one minute.",
        translation: "Lass mich schnell einen Anruf bei meiner Mutter machen - nur eine Minute.",
        options: ["make", "do", "have", "get"],
        correct: "make",
        explanation: "Feste Phrase 'MAKE a phone call' (anrufen): Dieser kurze Mutter-Anruf ist wichtige familiäre Kommunikations-Pause."
      },
      {
        id: "make_do_7",
        question: "I have to _____ the housework before guests arrive this evening.",
        translation: "Ich muss die Hausarbeit machen, bevor Gäste heute Abend ankommen.",
        options: ["do", "make", "have", "get"],
        correct: "do",
        explanation: "Feste Phrase 'DO housework' (Hausarbeit machen): Diese Putz-Vorbereitung vor Gäste-Ankunft ist wichtig für guten Eindruck."
      },
      {
        id: "make_do_8",
        question: "She _____ a lot of money working as a successful lawyer in city.",
        translation: "Sie verdient viel Geld als erfolgreiche Anwältin in der Stadt arbeitend.",
        options: ["makes", "does", "has", "gets"],
        correct: "makes",
        explanation: "Feste Phrase 'MAKE money' (Geld verdienen): Dieses hohe Anwalts-Einkommen in Stadt ist Resultat erfolgreicher Karriere."
      },
      {
        id: "make_do_9",
        question: "Can you _____ the dishes after dinner tonight, please? It's your turn.",
        translation: "Kannst du bitte heute Abend nach dem Essen das Geschirr spülen? Du bist dran.",
        options: ["do", "make", "have", "get"],
        correct: "do",
        explanation: "Feste Phrase 'DO the dishes' (Geschirr spülen): Diese Abwasch-Aufgabe nach Essen ist faire Aufgabenteilung im Haushalt."
      },
      {
        id: "make_do_10",
        question: "He _____ a big mistake by not studying for the important exam.",
        translation: "Er machte einen großen Fehler, indem er nicht für die wichtige Prüfung lernte.",
        options: ["made", "did", "had", "got"],
        correct: "made",
        explanation: "Feste Phrase 'MAKE a mistake' (Fehler machen): Dieser Nicht-Lern-Fehler führt wahrscheinlich zu schlechtem Prüfungsergebnis."
      },
      {
        id: "make_do_11",
        question: "I need to _____ an appointment with the dentist for next week.",
        translation: "Ich muss einen Termin beim Zahnarzt für nächste Woche machen.",
        options: ["make", "do", "have", "get"],
        correct: "make",
        explanation: "Feste Phrase 'MAKE an appointment' (Termin vereinbaren): Diese Zahnarzt-Terminierung ist wichtig für Zahngesundheits-Check."
      },
      {
        id: "make_do_12",
        question: "She always _____ her best to help others in difficult situations kindly.",
        translation: "Sie tut immer ihr Bestes, um anderen in schwierigen Situationen freundlich zu helfen.",
        options: ["does", "makes", "has", "gets"],
        correct: "does",
        explanation: "Feste Phrase 'DO one's best' (sein Bestes tun): Diese Hilfsbereitschaft in schweren Zeiten ist edle mitmenschliche Eigenschaft."
      },
      {
        id: "make_do_13",
        question: "They _____ a lot of noise last night - I couldn't sleep at all!",
        translation: "Sie machten letzte Nacht viel Lärm - ich konnte überhaupt nicht schlafen!",
        options: ["made", "did", "had", "got"],
        correct: "made",
        explanation: "Feste Phrase 'MAKE noise' (Lärm machen): Dieser nächtliche Lärm ist rücksichtslos und verhinderte erholsamen Schlaf völlig."
      },
      {
        id: "make_do_14",
        question: "You should _____ more effort in your studies to improve your grades.",
        translation: "Du solltest mehr Anstrengung in deine Studien stecken, um deine Noten zu verbessern.",
        options: ["make", "do", "have", "get"],
        correct: "make",
        explanation: "Feste Phrase 'MAKE an effort' (sich anstrengen): Diese Lern-Anstrengung ist nötig für akademische Noten-Verbesserung."
      },
      {
        id: "make_do_15",
        question: "I have to _____ some research before writing my university essay paper.",
        translation: "Ich muss etwas Recherche machen, bevor ich meinen Universitäts-Aufsatz schreibe.",
        options: ["do", "make", "have", "get"],
        correct: "do",
        explanation: "Feste Phrase 'DO research' (Recherche machen): Diese Vorbereitungs-Recherche ist essentiell für fundierten gut geschriebenen Aufsatz."
      }
    ]
  },

  say_vs_tell: {
    name: "Say vs Tell",
    description: "Sagen - say und tell korrekt unterscheiden und verwenden",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "say_tell_1",
        question: "She _____ me that she would be late to our meeting today.",
        translation: "Sie sagte mir, dass sie heute zu unserem Treffen zu spät kommen würde.",
        options: ["told", "said", "spoke", "talked"],
        correct: "told",
        explanation: "'TELL' + Person: 'told me that'. Braucht OBJEKT. Diese Verspätungs-Mitteilung ermöglicht Wartezeit-Planung."
      },
      {
        id: "say_tell_2",
        question: "He _____ that he was very tired and wanted to go home early.",
        translation: "Er sagte, dass er sehr müde war und früh nach Hause gehen wollte.",
        options: ["said", "told", "spoke", "talked"],
        correct: "said",
        explanation: "'SAY' OHNE Person direkt: 'said that'. Diese Müdigkeits-Äußerung erklärt Heimgeh-Wunsch."
      },
      {
        id: "say_tell_3",
        question: "Can you _____ me what time the train leaves from the station?",
        translation: "Kannst du mir sagen, um wie viel Uhr der Zug vom Bahnhof abfährt?",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "'TELL' in Fragen: 'tell me what time'. Diese Abfahrtszeit-Frage ist praktisch für Reiseplanung."
      },
      {
        id: "say_tell_4",
        question: "They _____ goodbye to everyone before leaving the party early tonight.",
        translation: "Sie sagten allen auf Wiedersehen, bevor sie heute Abend früh die Party verließen.",
        options: ["said", "told", "spoke", "talked"],
        correct: "said",
        explanation: "Feste Phrase 'SAY goodbye' (NICHT tell): Dieser höfliche Abschied vor frühem Party-Verlassen zeigt gute Manieren."
      },
      {
        id: "say_tell_5",
        question: "Please _____ him to call me back as soon as possible urgently.",
        translation: "Bitte sag ihm, er solle mich so bald wie möglich dringend zurückrufen.",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "'TELL' + Person + Infinitiv: 'tell him to call'. Diese dringende Rückruf-Bitte ist wichtige Kommunikations-Weiterleitung."
      },
      {
        id: "say_tell_6",
        question: "She _____ me a funny story about her childhood in the countryside.",
        translation: "Sie erzählte mir eine lustige Geschichte über ihre Kindheit auf dem Land.",
        options: ["told", "said", "spoke", "talked"],
        correct: "told",
        explanation: "'TELL' + Person + Geschichte: 'told me a story'. Diese Kindheits-Landgeschichte ist unterhaltsame persönliche Erinnerung."
      },
      {
        id: "say_tell_7",
        question: "What did you _____ to her when she asked about the problem?",
        translation: "Was sagtest du ihr, als sie nach dem Problem fragte?",
        options: ["say", "tell", "speak", "talk"],
        correct: "say",
        explanation: "Frage mit 'what': meist 'SAY' (was sagtest du). Diese Problem-Antwort-Frage erkundet Reaktion auf Anfrage."
      },
      {
        id: "say_tell_8",
        question: "He always _____ the truth, even when it's difficult or uncomfortable.",
        translation: "Er sagt immer die Wahrheit, selbst wenn es schwierig oder unangenehm ist.",
        options: ["tells", "says", "speaks", "talks"],
        correct: "tells",
        explanation: "Feste Phrase 'TELL the truth' (Wahrheit sagen): Diese Ehrlichkeit auch in schweren Situationen ist charakterstarke Tugend."
      },
      {
        id: "say_tell_9",
        question: "Can you _____ 'thank you' in Spanish for me please? I forgot.",
        translation: "Kannst du bitte für mich 'Danke' auf Spanisch sagen? Ich habe es vergessen.",
        options: ["say", "tell", "speak", "talk"],
        correct: "say",
        explanation: "Für WORT/PHRASE aussprechen: 'SAY thank you'. Diese Spanisch-Dank-Hilfe ist nützlich bei Sprachlücke."
      },
      {
        id: "say_tell_10",
        question: "She _____ me not to worry about the exam results too much today.",
        translation: "Sie sagte mir, ich solle mir heute nicht zu viel Sorgen über die Prüfungsergebnisse machen.",
        options: ["told", "said", "spoke", "talked"],
        correct: "told",
        explanation: "'TELL' + Person + not to: 'told me not to worry'. Dieser beruhigende Rat reduziert Prüfungsangst."
      },
      {
        id: "say_tell_11",
        question: "They _____ sorry for being late to the important meeting this morning.",
        translation: "Sie sagten Entschuldigung dafür, heute Morgen zum wichtigen Treffen zu spät zu sein.",
        options: ["said", "told", "spoke", "talked"],
        correct: "said",
        explanation: "Feste Phrase 'SAY sorry' (sich entschuldigen): Diese Verspätungs-Entschuldigung ist höfliche Anerkennung des Fehlers."
      },
      {
        id: "say_tell_12",
        question: "Please don't _____ lies - I want to hear only the honest truth.",
        translation: "Bitte erzähl keine Lügen - ich will nur die ehrliche Wahrheit hören.",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "Feste Phrase 'TELL lies' (Lügen erzählen): Dieser Wunsch nach Ehrlichkeit ist Grundlage für vertrauensvolle Beziehung."
      },
      {
        id: "say_tell_13",
        question: "He _____ hello to me every morning when we meet at work daily.",
        translation: "Er sagt mir jeden Morgen Hallo, wenn wir uns täglich bei der Arbeit treffen.",
        options: ["says", "tells", "speaks", "talks"],
        correct: "says",
        explanation: "Feste Phrase 'SAY hello' (Hallo sagen): Dieser tägliche morgendliche Gruß ist freundliche höfliche Arbeitsplatz-Geste."
      },
      {
        id: "say_tell_14",
        question: "Can you _____ everyone about the meeting change tomorrow morning?",
        translation: "Kannst du allen über die Treffen-Änderung morgen früh Bescheid sagen?",
        options: ["tell", "say", "speak", "talk"],
        correct: "tell",
        explanation: "'TELL' + Personen: 'tell everyone'. Diese Meeting-Änderungs-Information ist wichtig für alle Teilnehmer."
      },
      {
        id: "say_tell_15",
        question: "What did the teacher _____ about your test results in class today?",
        translation: "Was sagte der Lehrer heute im Unterricht über deine Testergebnisse?",
        options: ["say", "tell", "speak", "talk"],
        correct: "say",
        explanation: "Ohne direktes Objekt: 'SAY about'. Diese Lehrer-Rückmeldung über Testergebnis ist wichtiges Feedback für Verbesserung."
      }
    ]
  },

  prepositions_movement: {
    name: "Prepositions of Movement",
    description: "Bewegungs-Präpositionen - to, into, out of, across richtig nutzen",
    icon: Map,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "mov_prep_1",
        question: "She walked _____ the park on her way home from work yesterday.",
        translation: "Sie ging gestern auf ihrem Heimweg von der Arbeit durch den Park.",
        options: ["through", "across", "into", "to"],
        correct: "through",
        explanation: "Für HINDURCH: 'through the park' (durch Park - 3D Raum). Diese Park-Heimweg-Route ist angenehme grüne Alternative zu Straßen."
      },
      {
        id: "mov_prep_2",
        question: "He jumped _____ the swimming pool with a big splash sound.",
        translation: "Er sprang mit einem großen Platsch-Geräusch ins Schwimmbad.",
        options: ["into", "in", "to", "at"],
        correct: "into",
        explanation: "Für HINEIN (Bewegung): 'into the pool' (ins Becken). Dieser Pool-Sprung mit Platsch ist spaßiger Sommer-Moment."
      },
      {
        id: "mov_prep_3",
        question: "We drove _____ the bridge to get to the other side of river.",
        translation: "Wir fuhren über die Brücke, um zur anderen Seite des Flusses zu gelangen.",
        options: ["across", "through", "over", "both across and over"],
        correct: "both across and over",
        explanation: "Für ÜBER (Fläche): 'across' oder 'over the bridge' beide möglich. Diese Brückenüberquerung verbindet Flussufer."
      },
      {
        id: "mov_prep_4",
        question: "The cat climbed _____ the tree to catch the small bird sitting.",
        translation: "Die Katze kletterte auf den Baum, um den sitzenden kleinen Vogel zu fangen.",
        options: ["up", "on", "to", "at"],
        correct: "up",
        explanation: "Für HINAUF: 'up the tree' (den Baum hoch). Dieser Katzen-Kletterinstinkt zur Vogeljagd ist natürliches Raubtierverhalten."
      },
      {
        id: "mov_prep_5",
        question: "Come _____ my house for dinner tonight around seven o'clock please.",
        translation: "Komm bitte heute Abend gegen sieben Uhr zum Abendessen zu meinem Haus.",
        options: ["to", "at", "in", "into"],
        correct: "to",
        explanation: "Für ZU (Richtung): 'come to my house'. Diese Abendessen-Einladung nach Hause ist gastfreundliche soziale Geste."
      },
      {
        id: "mov_prep_6",
        question: "She ran _____ the room crying after hearing the sad news today.",
        translation: "Sie rannte weinend aus dem Zimmer, nachdem sie heute die traurigen Nachrichten hörte.",
        options: ["out of", "from", "off", "away"],
        correct: "out of",
        explanation: "Für HERAUS: 'out of the room' (aus Zimmer raus). Diese weinende Flucht nach schlechter Nachricht ist emotionale Reaktion."
      },
      {
        id: "mov_prep_7",
        question: "They walked _____ the street to the shop on the other side.",
        translation: "Sie gingen über die Straße zum Laden auf der anderen Seite.",
        options: ["across", "through", "along", "over"],
        correct: "across",
        explanation: "Für ÜBER (Fläche querend): 'across the street' (Straße überqueren). Dieser Straßen-Gang zum Laden ist kurze Einkaufs-Strecke."
      },
      {
        id: "mov_prep_8",
        question: "The bird flew _____ the window into the warm house inside.",
        translation: "Der Vogel flog durch das Fenster ins warme Haus hinein.",
        options: ["through", "across", "into", "over"],
        correct: "through",
        explanation: "Für DURCH Öffnung: 'through the window'. Dieser Vogel-Eintritt durchs Fenster ist überraschender ungewollter Haus-Besuch."
      },
      {
        id: "mov_prep_9",
        question: "We're going _____ London for a week-long holiday next month together.",
        translation: "Wir fahren nächsten Monat zusammen für einwöchigen Urlaub nach London.",
        options: ["to", "at", "in", "into"],
        correct: "to",
        explanation: "Für NACH (Stadt): 'going to London'. Diese einwöchige London-Reise nächsten Monat ist spannende Urlaubs-Planung."
      },
      {
        id: "mov_prep_10",
        question: "He got _____ the car and drove away quickly without saying goodbye.",
        translation: "Er stieg ins Auto und fuhr schnell weg ohne auf Wiedersehen zu sagen.",
        options: ["into", "in", "to", "on"],
        correct: "into",
        explanation: "Für EINSTEIGEN: 'get into the car' (ins Auto steigen). Dieser wortlose schnelle Abgang ist unhöflich oder zeigt Eile."
      },
      {
        id: "mov_prep_11",
        question: "The children ran _____ the hill as fast as they possibly could.",
        translation: "Die Kinder rannten so schnell sie konnten den Hügel hinunter.",
        options: ["down", "to", "at", "from"],
        correct: "down",
        explanation: "Für HINUNTER: 'down the hill' (Hügel runter). Dieser schnelle Hügel-Renn-Spaß ist aufregendes Kinder-Abenteuer."
      },
      {
        id: "mov_prep_12",
        question: "We walked _____ the river for about an hour enjoying nature.",
        translation: "Wir gingen etwa eine Stunde entlang des Flusses und genossen die Natur.",
        options: ["along", "across", "through", "over"],
        correct: "along",
        explanation: "Für ENTLANG: 'along the river' (am Fluss entlang). Dieser einstündige Fluss-Spaziergang ist entspannende Natur-Erfahrung."
      },
      {
        id: "mov_prep_13",
        question: "She looked _____ the window to see who was knocking at door.",
        translation: "Sie schaute aus dem Fenster, um zu sehen, wer an der Tür klopfte.",
        options: ["out of", "from", "through", "at"],
        correct: "out of",
        explanation: "Für HERAUS-Schauen: 'out of the window'. Diese Fenster-Kontrolle bei Türklopfen ist Sicherheits-Check vor Öffnen."
      },
      {
        id: "mov_prep_14",
        question: "They're moving _____ a bigger apartment next month with more rooms.",
        translation: "Sie ziehen nächsten Monat in eine größere Wohnung mit mehr Zimmern um.",
        options: ["into", "to", "in", "at"],
        correct: "into",
        explanation: "Für HINEIN-Ziehen: 'moving into'. Dieser Umzug in größere Wohnung ist Verbesserung des Wohnraums."
      },
      {
        id: "mov_prep_15",
        question: "He ran _____ his friend when he saw him across the busy street.",
        translation: "Er rannte zu seinem Freund, als er ihn über die belebte Straße sah.",
        options: ["to", "at", "into", "towards"],
        correct: "to",
        explanation: "Für ZU (Person): 'ran to his friend'. Diese freudige Freund-Begrüßung über Straße zeigt enge Freundschaft."
      }
    ]
  },

  possessives: {
    name: "Possessives",
    description: "Besitzformen - 's, s', of, possessive pronouns unterscheiden",
    icon: User,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "poss_1",
        question: "This is _____ book - I left it here yesterday by accident.",
        translation: "Das ist mein Buch - ich ließ es gestern hier aus Versehen liegen.",
        options: ["my", "mine", "me", "I"],
        correct: "my",
        explanation: "VOR Nomen: Possessiv-Adjektiv 'my book'. Diese gestrige Buch-Verlegung hier war unbeabsichtigt."
      },
      {
        id: "poss_2",
        question: "That car is _____ - I bought it last year with my savings.",
        translation: "Jenes Auto ist meines - ich kaufte es letztes Jahr mit meinen Ersparnissen.",
        options: ["mine", "my", "me", "I"],
        correct: "mine",
        explanation: "OHNE Nomen: Possessiv-Pronomen 'mine' (meines). Dieser Autokauf mit Ersparnissen ist stolze persönliche Anschaffung."
      },
      {
        id: "poss_3",
        question: "The _____ toys are scattered all over the living room floor messily.",
        translation: "Die Spielzeuge der Kinder sind unordentlich über den Wohnzimmerboden verstreut.",
        options: ["children's", "childrens'", "childrens", "children"],
        correct: "children's",
        explanation: "Unregelmäßiger Plural: 'children's toys' (Apostoph + s). Diese Spielzeug-Unordnung erfordert Aufräum-Aktion der Kinder."
      },
      {
        id: "poss_4",
        question: "Is this pen _____ or can I borrow it for the meeting?",
        translation: "Ist dieser Stift deiner oder kann ich ihn für das Treffen ausleihen?",
        options: ["yours", "your", "you", "you're"],
        correct: "yours",
        explanation: "Ohne Nomen: 'yours' (deiner). Diese Stift-Eigentums-Frage vor Ausleihe ist höfliche Besitz-Klärung."
      },
      {
        id: "poss_5",
        question: "My _____ car is much older than my father's new modern one.",
        translation: "Das Auto meiner Mutter ist viel älter als das neue moderne meines Vaters.",
        options: ["mother's", "mothers'", "mothers", "mother"],
        correct: "mother's",
        explanation: "Singular Besitz: 'mother's car' (Apostoph + s). Dieser Auto-Alters-Vergleich zwischen Eltern zeigt Unterschied."
      },
      {
        id: "poss_6",
        question: "The house _____ belongs to my grandparents for many decades now.",
        translation: "Das Haus von uns gehört seit vielen Jahrzehnten jetzt meinen Großeltern.",
        options: ["of ours", "ours", "our", "we"],
        correct: "of ours",
        explanation: "Nach Nomen: 'house of ours' (ein Haus von uns). Dieser Großeltern-Hausbesitz seit Jahrzehnten ist Familientradition."
      },
      {
        id: "poss_7",
        question: "All the _____ bags must be placed in the overhead compartment above.",
        translation: "Alle Taschen der Passagiere müssen ins Gepäckfach oben platziert werden.",
        options: ["passengers'", "passenger's", "passengers", "passenger"],
        correct: "passengers'",
        explanation: "Plural Besitz: 'passengers' bags' (nur Apostoph nach s). Diese Gepäck-Regel im Flugzeug ist Sicherheitsvorschrift."
      },
      {
        id: "poss_8",
        question: "These keys are _____ - I recognize them from the special keychain.",
        translation: "Diese Schlüssel sind ihre - ich erkenne sie am speziellen Schlüsselanhänger.",
        options: ["hers", "her", "she", "her's"],
        correct: "hers",
        explanation: "Ohne Nomen: 'hers' (ihre). KEIN Apostoph bei Pronomen. Diese Schlüssel-Identifikation am Anhänger hilft bei Rückgabe."
      },
      {
        id: "poss_9",
        question: "The _____ office is on the third floor of this building here.",
        translation: "Das Büro des Direktors ist im dritten Stock dieses Gebäudes hier.",
        options: ["director's", "directors'", "directors", "director"],
        correct: "director's",
        explanation: "Singular Besitz: 'director's office'. Dieses Direktoren-Büro im dritten Stock ist wichtiger Verwaltungs-Raum."
      },
      {
        id: "poss_10",
        question: "Is that jacket _____ or does it belong to someone else here?",
        translation: "Ist jene Jacke deine oder gehört sie jemand anderem hier?",
        options: ["yours", "your", "you", "you're"],
        correct: "yours",
        explanation: "Ohne Nomen: 'yours' (deine). Diese Jacken-Besitz-Klärung verhindert Verwechslung mit fremdem Eigentum."
      },
      {
        id: "poss_11",
        question: "The color _____ eyes is exactly the same as your mother's beautiful ones.",
        translation: "Die Farbe deiner Augen ist genau dieselbe wie die der schönen deiner Mutter.",
        options: ["of your", "your", "of you", "you"],
        correct: "of your",
        explanation: "Nach Nomen: 'color of your eyes' oder 'your eye color'. Diese Augen-Farb-Ähnlichkeit mit Mutter ist genetische Familienverbindung."
      },
      {
        id: "poss_12",
        question: "All _____ students passed the difficult exam with good grades surprisingly.",
        translation: "Alle Studenten des Lehrers bestanden überraschenderweise die schwere Prüfung mit guten Noten.",
        options: ["the teacher's", "the teachers'", "the teachers", "teacher"],
        correct: "the teacher's",
        explanation: "Singular mit 'the': 'the teacher's students'. Dieser kollektive Prüfungserfolg ist Zeugnis guter Unterrichts qualität."
      },
      {
        id: "poss_13",
        question: "This laptop is _____ - please don't use it without asking first.",
        translation: "Dieser Laptop ist seiner - bitte nutze ihn nicht ohne vorher zu fragen.",
        options: ["his", "him", "he", "his'"],
        correct: "his",
        explanation: "Ohne Nomen: 'his' (seiner). Gleiche Form als Adjektiv und Pronomen. Diese Nutzungs-Bitte zeigt Respekt für Eigentum."
      },
      {
        id: "poss_14",
        question: "The _____ results will be announced tomorrow morning at ten o'clock.",
        translation: "Die Ergebnisse der Studenten werden morgen früh um zehn Uhr bekanntgegeben.",
        options: ["students'", "student's", "students", "student"],
        correct: "students'",
        explanation: "Plural Besitz: 'students' results' (nur Apostoph). Diese Ergebnis-Bekanntgabe morgen erzeugt Spannung bei allen."
      },
      {
        id: "poss_15",
        question: "A friend _____ recommended this excellent book to me last week.",
        translation: "Ein Freund von mir empfahl mir letzte Woche dieses exzellente Buch.",
        options: ["of mine", "mine", "my", "me"],
        correct: "of mine",
        explanation: "Nach Nomen: 'a friend of mine' (ein Freund von mir). Diese Buchempfehlung von Freund ist wertvoller Lese-Tipp."
      }
    ]
  },

  pronouns_subject_object: {
    name: "Subject vs Object Pronouns",
    description: "Pronomen - Subjekt- und Objekt-Pronomen richtig einsetzen",
    icon: User,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    questions: [
      {
        id: "pron_1",
        question: "_____ am going to the cinema tonight with my best friends.",
        translation: "Ich gehe heute Abend mit meinen besten Freunden ins Kino.",
        options: ["I", "Me", "My", "Mine"],
        correct: "I",
        explanation: "SUBJEKT-Pronomen: 'I am going' (ich gehe). Dieser Kino-Ausflug mit Freunden ist geselliger Abend."
      },
      {
        id: "pron_2",
        question: "Can you help _____ with this heavy suitcase up the stairs please?",
        translation: "Kannst du mir bitte mit diesem schweren Koffer die Treppe hoch helfen?",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "OBJEKT-Pronomen nach Verb: 'help me' (mir helfen). Diese Koffer-Treppenhilfe-Bitte ist bei schwerem Gewicht verständlich."
      },
      {
        id: "pron_3",
        question: "_____ is my best friend since we were children in school together.",
        translation: "Sie ist meine beste Freundin, seit wir als Kinder zusammen in der Schule waren.",
        options: ["She", "Her", "Hers", "She's"],
        correct: "She",
        explanation: "SUBJEKT: 'She is' (sie ist). Diese Freundschaft seit Kindheit ist lange tiefe emotionale Verbindung."
      },
      {
        id: "pron_4",
        question: "I gave _____ a present for her birthday celebration last Saturday.",
        translation: "Ich gab ihr ein Geschenk für ihre Geburtstags feier letzten Samstag.",
        options: ["her", "she", "hers", "she's"],
        correct: "her",
        explanation: "OBJEKT nach Verb: 'gave her' (ihr geben). Dieses Geburtstagsgeschenk ist aufmerksame freundschaftliche Geste."
      },
      {
        id: "pron_5",
        question: "_____ went to the park together yesterday afternoon after school ended.",
        translation: "Wir gingen gestern Nachmittag nach Schulende zusammen in den Park.",
        options: ["We", "Us", "Our", "Ours"],
        correct: "We",
        explanation: "SUBJEKT: 'We went' (wir gingen). Dieser gemeinsame Park-Besuch nach Schule ist entspannende Freizeit-Aktivität."
      },
      {
        id: "pron_6",
        question: "The teacher told _____ to be quiet during the important test today.",
        translation: "Der Lehrer sagte uns, wir sollten während des wichtigen Tests heute ruhig sein.",
        options: ["us", "we", "our", "ours"],
        correct: "us",
        explanation: "OBJEKT: 'told us' (uns sagen). Diese Ruhe-Anweisung bei Test ist Standard-Prüfungs-Regel für Fairness."
      },
      {
        id: "pron_7",
        question: "_____ are very happy with our new house in the quiet neighborhood.",
        translation: "Sie sind sehr glücklich mit ihrem neuen Haus in der ruhigen Nachbarschaft.",
        options: ["They", "Them", "Their", "Theirs"],
        correct: "They",
        explanation: "SUBJEKT: 'They are' (sie sind). Diese Zufriedenheit mit neuem Haus in ruhiger Gegend ist gelungener Umzug."
      },
      {
        id: "pron_8",
        question: "Would you like to come with _____ to the concert next Friday?",
        translation: "Möchtest du nächsten Freitag mit uns zum Konzert kommen?",
        options: ["us", "we", "our", "ours"],
        correct: "us",
        explanation: "OBJEKT nach Präposition: 'with us' (mit uns). Diese Konzert-Einladung nächsten Freitag ist nette gesellige Geste."
      },
      {
        id: "pron_9",
        question: "_____ loves reading books in her free time at home and cafés.",
        translation: "Sie liebt es, in ihrer Freizeit zu Hause und in Cafés Bücher zu lesen.",
        options: ["She", "Her", "Hers", "She's"],
        correct: "She",
        explanation: "SUBJEKT: 'She loves' (sie liebt). Diese Leseliebe in Freizeit ist entspannende intellektuelle Hobby-Aktivität."
      },
      {
        id: "pron_10",
        question: "Between you and _____, I think he's making a big mistake here.",
        translation: "Unter uns gesagt, ich denke, er macht hier einen großen Fehler.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "Nach Präposition: OBJEKT 'between you and me'. Diese vertrauliche Fehler-Beobachtung ist private Meinungsäußerung."
      },
      {
        id: "pron_11",
        question: "_____ is studying medicine at university and works very hard daily.",
        translation: "Er studiert Medizin an der Universität und arbeitet täglich sehr hart.",
        options: ["He", "Him", "His", "He's"],
        correct: "He",
        explanation: "SUBJEKT: 'He is studying' (er studiert). Dieses harte Medizin-Studium erfordert tägliche intensive Anstrengung."
      },
      {
        id: "pron_12",
        question: "The book belongs to my sister - it's _____ favorite novel ever.",
        translation: "Das Buch gehört meiner Schwester - es ist ihr liebster Roman überhaupt.",
        options: ["her", "hers", "she", "she's"],
        correct: "her",
        explanation: "VOR Nomen: 'her favorite' (ihr liebster). Dieser Lieblings-Roman hat besondere emotionale Bedeutung für sie."
      },
      {
        id: "pron_13",
        question: "Can _____ borrow your umbrella? It's starting to rain heavily outside.",
        translation: "Kann ich deinen Regenschirm ausleihen? Es fängt draußen an stark zu regnen.",
        options: ["I", "me", "my", "mine"],
        correct: "I",
        explanation: "SUBJEKT in Frage: 'Can I borrow' (kann ich leihen). Diese Regenschirm-Bitte bei beginnendem Regen ist praktisch."
      },
      {
        id: "pron_14",
        question: "The dog wagged _____ tail happily when it saw its owner coming.",
        translation: "Der Hund wedelte glücklich mit seinem Schwanz, als er seinen Besitzer kommen sah.",
        options: ["its", "it's", "it", "his"],
        correct: "its",
        explanation: "Possessiv für TIER/DING: 'its tail' (sein Schwanz). KEIN Apostoph. Diese Hunde-Freude bei Besitzer-Ankunft ist treue Zuneigung."
      },
      {
        id: "pron_15",
        question: "My parents want _____ to visit them more often at their house.",
        translation: "Meine Eltern möchten, dass ich sie öfter in ihrem Haus besuche.",
        options: ["me", "I", "my", "mine"],
        correct: "me",
        explanation: "OBJEKT nach 'want': 'want me to visit' (möchten, dass ich besuche). Dieser Eltern-Besuchswunsch zeigt Sehnsucht nach mehr Zeit."
      }
    ]
  }
};

export default part10Categories;

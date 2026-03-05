/**
 * GERMAN → ENGLISH GRAMMAR - PART 16
 * 4 categories, 15 questions each
 */

import { Link2, Mic, Camera, Bed } from "lucide-react";

export const part16Categories = {
  linking_words: {
    name: "Linking Words",
    description: "Verbindungswörter - Sätze mit because, although, however verknüpfen",
    icon: Link2,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "link_1",
        question: "I stayed at home _____ I was feeling very sick and unwell today.",
        translation: "Ich blieb zu Hause, weil ich mich heute sehr krank und unwohl fühlte.",
        options: ["because", "although", "but", "so"],
        correct: "because",
        explanation: "'BECAUSE' zeigt GRUND: 'because I was sick'. Das Kranksein ist hier der direkte Grund für das Zuhausebleiben, eine logische Ursache-Wirkung-Beziehung."
      },
      {
        id: "link_2",
        question: "_____ it was raining heavily outside, we decided to go for a walk anyway.",
        translation: "Obwohl es draußen stark regnete, entschieden wir uns trotzdem, spazieren zu gehen.",
        options: ["Although", "Because", "So", "And"],
        correct: "Although",
        explanation: "'ALTHOUGH' am Satzanfang zeigt KONTRAST: trotz Regen gehen. Dieses Bindewort verbindet zwei gegensätzliche Informationen in einem Satz."
      },
      {
        id: "link_3",
        question: "She studied very hard for the exam; _____, she didn't pass it unfortunately.",
        translation: "Sie lernte sehr hart für die Prüfung; jedoch bestand sie sie leider nicht.",
        options: ["however", "because", "so", "and"],
        correct: "however",
        explanation: "'HOWEVER' nach Semikolon zeigt GEGENSATZ: trotz Lernen kein Erfolg. Dieses Wort verbindet zwei überraschend widersprüchliche Aussagen mit Komma danach."
      },
      {
        id: "link_4",
        question: "I was tired, _____ I went to bed early last night around nine.",
        translation: "Ich war müde, also ging ich letzte Nacht gegen neun früh ins Bett.",
        options: ["so", "because", "although", "but"],
        correct: "so",
        explanation: "'SO' zeigt FOLGE/Konsequenz: müde → deshalb früh schlafen. Diese Verbindung zeigt die logische Schlussfolgerung aus der Müdigkeit als Handlung."
      },
      {
        id: "link_5",
        question: "He wanted to come to the party _____ he had to work late.",
        translation: "Er wollte zur Party kommen, aber er musste spät arbeiten.",
        options: ["but", "and", "so", "because"],
        correct: "but",
        explanation: "'BUT' verbindet GEGENSÄTZLICHES: Wunsch versus Realität. Dieses Wort zeigt den Konflikt zwischen dem, was er möchte, und dem, was möglich ist."
      },
      {
        id: "link_6",
        question: "I like coffee _____ tea - both are my favorite hot drinks daily.",
        translation: "Ich mag Kaffee und Tee - beide sind meine liebsten Heißgetränke täglich.",
        options: ["and", "but", "or", "so"],
        correct: "and",
        explanation: "'AND' verbindet ÄHNLICHES: zwei gemochte Dinge zusammen. Dieses einfache Bindewort reiht gleichwertige Elemente aneinander ohne Gegensatz."
      },
      {
        id: "link_7",
        question: "We can go to the cinema _____ stay home and watch TV tonight.",
        translation: "Wir können ins Kino gehen oder zu Hause bleiben und fernsehen heute Abend.",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "'OR' zeigt AUSWAHL zwischen Optionen: Kino oder Zuhause. Dieses Wort präsentiert zwei mögliche Alternativen für die Abendgestaltung."
      },
      {
        id: "link_8",
        question: "The weather was cold; _____, we still enjoyed our outdoor picnic in park.",
        translation: "Das Wetter war kalt; trotzdem genossen wir noch unser Outdoor-Picknick im Park.",
        options: ["nevertheless", "because", "so", "and"],
        correct: "nevertheless",
        explanation: "'NEVERTHELESS' = trotzdem (formal): zeigt Gegensatz nach Semikolon. Dieses Wort ist formeller als 'however' und betont das Fortsetzen trotz Hindernis."
      },
      {
        id: "link_9",
        question: "I didn't go to work today _____ of the heavy snowstorm outside.",
        translation: "Ich ging heute wegen des starken Schneesturms draußen nicht zur Arbeit.",
        options: ["because", "although", "but", "so"],
        correct: "because",
        explanation: "'BECAUSE OF' + Nomen zeigt GRUND: wegen Schneesturm. Diese Präposition-Konstruktion verbindet die Handlung mit dem direkten äußeren Grund dafür."
      },
      {
        id: "link_10",
        question: "She's very talented; _____, she needs to practice more to improve skills.",
        translation: "Sie ist sehr talentiert; jedoch muss sie mehr üben, um Fähigkeiten zu verbessern.",
        options: ["however", "because", "so", "and"],
        correct: "however",
        explanation: "'HOWEVER' zeigt EINSCHRÄNKUNG trotz Positivem: Talent reicht nicht. Dieses Kontrastwort relativiert die positive Aussage mit einer notwendigen Bedingung."
      },
      {
        id: "link_11",
        question: "You should hurry up, _____ you'll miss the train to the city center.",
        translation: "Du solltest dich beeilen, sonst verpasst du den Zug ins Stadtzentrum.",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "'OR' zeigt negative ALTERNATIVE: beeile dich, sonst passiert X. In diesem Kontext bedeutet 'or' eine Warnung vor der Konsequenz bei Nicht-Handeln."
      },
      {
        id: "link_12",
        question: "_____ he's very young, he's already achieved great success in his career.",
        translation: "Obwohl er sehr jung ist, hat er bereits großen Erfolg in seiner Karriere erreicht.",
        options: ["Although", "Because", "So", "And"],
        correct: "Although",
        explanation: "'ALTHOUGH' zeigt ÜBERRASCHENDEN Kontrast: jung, aber erfolgreich. Dieses Wort hebt hervor, dass die zweite Information unerwartet ist angesichts der ersten."
      },
      {
        id: "link_13",
        question: "I enjoy reading books, _____ I don't have much time for it these days.",
        translation: "Ich genieße es, Bücher zu lesen, aber ich habe in letzter Zeit nicht viel Zeit dafür.",
        options: ["but", "and", "so", "because"],
        correct: "but",
        explanation: "'BUT' zeigt EINSCHRÄNKUNG: Genuss versus Zeitmangel. Dieses Wort verbindet eine positive Aussage mit einer bedauernswerten Einschränkung der Realität."
      },
      {
        id: "link_14",
        question: "The concert was expensive; _____, it was worth every penny spent on tickets.",
        translation: "Das Konzert war teuer; trotzdem war es jeden ausgegebenen Cent für Tickets wert.",
        options: ["nevertheless", "because", "so", "and"],
        correct: "nevertheless",
        explanation: "'NEVERTHELESS' betont Positives TROTZ Negativem: teuer, aber wertvoll. Dieses formelle Wort verstärkt, dass der Wert den Preis übertrifft."
      },
      {
        id: "link_15",
        question: "We left early _____ we could avoid the terrible rush hour traffic jams.",
        translation: "Wir fuhren früh los, damit wir die schrecklichen Stoßzeit-Verkehrsstaus vermeiden konnten.",
        options: ["so that", "because", "although", "but"],
        correct: "so that",
        explanation: "'SO THAT' zeigt ABSICHT/Zweck: früh fahren, um Stau zu vermeiden. Diese Konstruktion erklärt das Ziel oder den beabsichtigten Grund einer Handlung."
      }
    ]
  },

  reported_speech: {
    name: "Reported Speech",
    description: "Indirekte Rede - direkte Aussagen in indirekte Rede umwandeln",
    icon: Mic,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "report_1",
        question: "She said, 'I am tired.' → She said _____ tired.",
        translation: "Sie sagte: 'Ich bin müde.' → Sie sagte, sie sei müde.",
        options: ["she was", "I am", "she is", "I was"],
        correct: "she was",
        explanation: "ZEITVERSCHIEBUNG in indirekter Rede: 'am' wird zu 'was'. Bei der Umwandlung von direkter zu indirekter Rede verschiebt sich die Zeit zurück."
      },
      {
        id: "report_2",
        question: "He said, 'I will call you tomorrow.' → He said he _____ me the next day.",
        translation: "Er sagte: 'Ich rufe dich morgen an.' → Er sagte, er würde mich am nächsten Tag anrufen.",
        options: ["would call", "will call", "called", "calls"],
        correct: "would call",
        explanation: "'WILL' wird zu 'WOULD' in indirekter Rede. Zusätzlich ändert sich 'tomorrow' zu 'the next day' für zeitliche Konsistenz."
      },
      {
        id: "report_3",
        question: "'Where do you live?' she asked. → She asked me where _____ lived.",
        translation: "'Wo wohnst du?' fragte sie. → Sie fragte mich, wo ich wohne.",
        options: ["I", "you", "she", "he"],
        correct: "I",
        explanation: "PERSPEKTIV-Wechsel: 'you' wird zu 'I' bei indirekter Frage. Die Fragestellung ändert die Perspektive vom direkten Gegenüber zur berichteten Person."
      },
      {
        id: "report_4",
        question: "They said, 'We are leaving now.' → They said _____ leaving then.",
        translation: "Sie sagten: 'Wir gehen jetzt.' → Sie sagten, sie würden dann gehen.",
        options: ["they were", "we are", "they are", "we were"],
        correct: "they were",
        explanation: "PRONOMEN-Wechsel: 'we' zu 'they' und Zeit: 'are' zu 'were'. Bei indirekter Rede ändern sich sowohl Pronomen als auch Zeitform."
      },
      {
        id: "report_5",
        question: "'I have finished my work,' he told me. → He told me he _____ his work.",
        translation: "'Ich habe meine Arbeit beendet,' sagte er mir. → Er sagte mir, er habe seine Arbeit beendet.",
        options: ["had finished", "has finished", "have finished", "finished"],
        correct: "had finished",
        explanation: "Present Perfect wird zu PAST PERFECT: 'have finished' → 'had finished'. Diese Zeitverschiebung macht die Handlung noch weiter in der Vergangenheit liegend."
      },
      {
        id: "report_6",
        question: "'Don't be late!' she said. → She told me _____ late.",
        translation: "'Sei nicht zu spät!' sagte sie. → Sie sagte mir, ich solle nicht zu spät sein.",
        options: ["not to be", "don't be", "not be", "to not be"],
        correct: "not to be",
        explanation: "IMPERATIV wird zu 'told + not to': 'Don't be' → 'told me not to be'. Befehle in indirekter Rede nutzen die Infinitiv-Konstruktion."
      },
      {
        id: "report_7",
        question: "'I can't come to the party,' she said. → She said she _____ come to the party.",
        translation: "'Ich kann nicht zur Party kommen,' sagte sie. → Sie sagte, sie könne nicht zur Party kommen.",
        options: ["couldn't", "can't", "can not", "could not to"],
        correct: "couldn't",
        explanation: "'CAN'T' wird zu 'COULDN'T' in indirekter Rede. Modal-Verben verschieben sich ebenfalls in der Zeit zurück bei der Umwandlung."
      },
      {
        id: "report_8",
        question: "'What are you doing?' he asked. → He asked me what _____ doing.",
        translation: "'Was machst du?' fragte er. → Er fragte mich, was ich mache.",
        options: ["I was", "you are", "I am", "you were"],
        correct: "I was",
        explanation: "Indirekte FRAGE: 'are' zu 'was' und 'you' zu 'I'. Fragestellung ändert Zeit und Perspektive, aber behält normale Satzstellung bei."
      },
      {
        id: "report_9",
        question: "'I saw the movie yesterday,' she said. → She said she _____ the movie the day before.",
        translation: "'Ich sah den Film gestern,' sagte sie. → Sie sagte, sie habe den Film am Tag zuvor gesehen.",
        options: ["had seen", "saw", "has seen", "sees"],
        correct: "had seen",
        explanation: "Past Simple wird zu PAST PERFECT: 'saw' → 'had seen'. Außerdem ändert sich 'yesterday' zu 'the day before' für korrekte Zeitreferenz."
      },
      {
        id: "report_10",
        question: "'Please help me with this problem,' he said. → He asked me _____ him with the problem.",
        translation: "'Bitte hilf mir mit diesem Problem,' sagte er. → Er bat mich, ihm bei dem Problem zu helfen.",
        options: ["to help", "help", "helping", "helped"],
        correct: "to help",
        explanation: "BITTE wird zu 'asked + Infinitiv': 'Please help' → 'asked me to help'. Höfliche Aufforderungen nutzen 'ask' mit Infinitiv-Konstruktion."
      },
      {
        id: "report_11",
        question: "'I have never been to London,' she told us. → She told us she _____ to London.",
        translation: "'Ich war noch nie in London,' erzählte sie uns. → Sie erzählte uns, sie sei noch nie in London gewesen.",
        options: ["had never been", "has never been", "have never been", "never was"],
        correct: "had never been",
        explanation: "Present Perfect zu PAST PERFECT: 'have never been' → 'had never been'. Diese Verschiebung macht die Nie-Erfahrung aus berichteter Perspektive deutlich."
      },
      {
        id: "report_12",
        question: "'I will definitely be there,' he promised. → He promised he _____ definitely be there.",
        translation: "'Ich werde definitiv da sein,' versprach er. → Er versprach, er würde definitiv da sein.",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'WILL' zu 'WOULD': Zukunft in indirekter Rede. Das Versprechen bleibt inhaltlich gleich, aber die grammatische Zeit passt sich an."
      },
      {
        id: "report_13",
        question: "'Are you coming with us?' they asked. → They asked me _____ with them.",
        translation: "'Kommst du mit uns?' fragten sie. → Sie fragten mich, ob ich mit ihnen komme.",
        options: ["if I was coming", "if you are coming", "are you coming", "do I come"],
        correct: "if I was coming",
        explanation: "JA/NEIN-Frage wird zu 'if/whether': 'Are you' → 'if I was'. Indirekte Ja/Nein-Fragen brauchen 'if' oder 'whether' und normale Satzstellung."
      },
      {
        id: "report_14",
        question: "'I must finish this today,' she explained. → She explained she _____ finish it that day.",
        translation: "'Ich muss das heute beenden,' erklärte sie. → Sie erklärte, sie müsse es an jenem Tag beenden.",
        options: ["had to", "must", "has to", "must to"],
        correct: "had to",
        explanation: "'MUST' wird zu 'HAD TO' in Vergangenheit. Außerdem ändert sich 'today' zu 'that day' für zeitliche Anpassung aus Erzählperspektive."
      },
      {
        id: "report_15",
        question: "'Stop talking!' the teacher said. → The teacher told us _____ talking.",
        translation: "'Hört auf zu reden!' sagte der Lehrer. → Der Lehrer sagte uns, wir sollten aufhören zu reden.",
        options: ["to stop", "stop", "stopping", "stopped"],
        correct: "to stop",
        explanation: "BEFEHL wird zu 'told + Infinitiv': 'Stop' → 'told us to stop'. Direkte Befehle werden mit Infinitiv-Konstruktion in indirekte Rede umgewandelt."
      }
    ]
  },

  causative_have_get: {
    name: "Causative (have/get something done)",
    description: "Veranlassen - have/get something done für Dienstleistungen verwenden",
    icon: Camera,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "caus_1",
        question: "I need to _____ my hair _____ before the wedding ceremony next week.",
        translation: "Ich muss mir vor der Hochzeitszeremonie nächste Woche die Haare schneiden lassen.",
        options: ["have / cut", "have / to cut", "get / cutting", "make / cut"],
        correct: "have / cut",
        explanation: "'HAVE' + Objekt + Past Participle: 'have my hair cut' (schneiden lassen). Diese Struktur zeigt, dass jemand anderes die Handlung für mich ausführt."
      },
      {
        id: "caus_2",
        question: "She _____ her car _____ at the garage yesterday after the accident last week.",
        translation: "Sie ließ ihr Auto gestern nach dem Unfall letzte Woche in der Werkstatt reparieren.",
        options: ["had / repaired", "had / repair", "has / repaired", "have / repaired"],
        correct: "had / repaired",
        explanation: "Vergangenheit: 'HAD' + Objekt + Past Participle: 'had car repaired'. Die Vergangenheitsform zeigt, dass die Reparatur durch Mechaniker erfolgte."
      },
      {
        id: "caus_3",
        question: "We're going to _____ the house _____ next month by professional painters.",
        translation: "Wir werden nächsten Monat das Haus von professionellen Malern streichen lassen.",
        options: ["have / painted", "have / paint", "get / painting", "make / painted"],
        correct: "have / painted",
        explanation: "Zukunft: 'going to HAVE' + Objekt + Past Participle. Diese Konstruktion plant eine Dienstleistung, die andere für uns ausführen werden."
      },
      {
        id: "caus_4",
        question: "You should _____ your eyes _____ regularly every two years by optician.",
        translation: "Du solltest deine Augen regelmäßig alle zwei Jahre vom Optiker testen lassen.",
        options: ["have / tested", "have / test", "get / testing", "make / tested"],
        correct: "have / tested",
        explanation: "Mit Modal: 'should HAVE' + Objekt + Past Participle. Dieser Rat empfiehlt regelmäßige professionelle Augen-Untersuchungen durch Fachpersonal."
      },
      {
        id: "caus_5",
        question: "I'm _____ my computer _____ right now - the technician is working on it.",
        translation: "Ich lasse meinen Computer gerade reparieren - der Techniker arbeitet daran.",
        options: ["having / repaired", "having / repair", "getting / repaired", "both having and getting / repaired"],
        correct: "both having and getting / repaired",
        explanation: "JETZT: Present Continuous möglich: 'having/getting repaired'. Beide Formen zeigen eine laufende Dienstleistung, die gerade stattfindet."
      },
      {
        id: "caus_6",
        question: "He _____ his teeth _____ last month at the dentist's office downtown.",
        translation: "Er ließ sich letzten Monat beim Zahnarzt in der Innenstadt die Zähne reinigen.",
        options: ["had / cleaned", "had / clean", "has / cleaned", "have / cleaned"],
        correct: "had / cleaned",
        explanation: "Vergangenheit: 'HAD' + Objekt + Past Participle: 'had teeth cleaned'. Diese professionelle Zahnreinigung erfolgte durch den Zahnarzt."
      },
      {
        id: "caus_7",
        question: "Where do you usually _____ your hair _____ when you need a haircut?",
        translation: "Wo lässt du dir normalerweise die Haare schneiden, wenn du einen Haarschnitt brauchst?",
        options: ["have / cut", "have / to cut", "get / cutting", "make / cut"],
        correct: "have / cut",
        explanation: "GEWOHNHEIT Frage: 'do you have cut'. Diese Frage erkundigt sich nach dem üblichen Ort für Friseur-Dienstleistungen."
      },
      {
        id: "caus_8",
        question: "I must _____ my watch _____ - it's not showing the correct time anymore.",
        translation: "Ich muss meine Uhr reparieren lassen - sie zeigt nicht mehr die richtige Zeit an.",
        options: ["have / repaired", "have / repair", "get / repairing", "make / repaired"],
        correct: "have / repaired",
        explanation: "Mit 'must': 'must HAVE' + Objekt + Past Participle. Diese Notwendigkeit zeigt, dass ein Uhrmacher die defekte Uhr reparieren muss."
      },
      {
        id: "caus_9",
        question: "She's _____ a new dress _____ for the special occasion next Saturday evening.",
        translation: "Sie lässt sich für den besonderen Anlass nächsten Samstagabend ein neues Kleid machen.",
        options: ["having / made", "having / make", "getting / made", "both having and getting / made"],
        correct: "both having and getting / made",
        explanation: "Zukunftiger Prozess: 'having/getting made'. Eine Schneiderin fertigt das Kleid speziell an, beide Causative-Formen sind hier möglich."
      },
      {
        id: "caus_10",
        question: "We need to _____ the roof _____ soon before winter comes and snow falls.",
        translation: "Wir müssen das Dach bald reparieren lassen, bevor der Winter kommt und Schnee fällt.",
        options: ["have / fixed", "have / fix", "get / fixing", "make / fixed"],
        correct: "have / fixed",
        explanation: "'NEED TO HAVE' + Objekt + Past Participle: 'have roof fixed'. Diese dringende Reparatur durch Dachdecker ist vor Wintereinbruch wichtig."
      },
      {
        id: "caus_11",
        question: "Did you _____ your car _____ last week as you planned earlier?",
        translation: "Hast du letzte Woche dein Auto waschen lassen, wie du es früher geplant hattest?",
        options: ["have / washed", "have / wash", "get / washing", "had / washed"],
        correct: "have / washed",
        explanation: "Frage Vergangenheit: 'Did you HAVE' + Objekt + Past Participle. Diese Frage erkundigt sich nach einer geplanten Autowäsche-Dienstleistung."
      },
      {
        id: "caus_12",
        question: "They want to _____ their photo _____ professionally for the family album book.",
        translation: "Sie möchten ihr Foto professionell für das Familienalbum-Buch machen lassen.",
        options: ["have / taken", "have / take", "get / taking", "make / taken"],
        correct: "have / taken",
        explanation: "'WANT TO HAVE' + Objekt + Past Participle. Dieser Wunsch nach professionellem Familienfoto zeigt Qualitäts-Anspruch für bleibendes Erinnerungs-Dokument."
      },
      {
        id: "caus_13",
        question: "I _____ my laptop _____ twice this year already - it keeps breaking down!",
        translation: "Ich habe meinen Laptop dieses Jahr schon zweimal reparieren lassen - er geht dauernd kaputt!",
        options: ["have had / repaired", "have / repaired", "had / repaired", "had had / repaired"],
        correct: "have had / repaired",
        explanation: "Present Perfect: 'HAVE HAD' + Objekt + Past Participle. Diese wiederholte Reparatur-Notwendigkeit zeigt ein chronisches Laptop-Problem."
      },
      {
        id: "caus_14",
        question: "She's _____ her house _____ while she's on vacation abroad for two weeks.",
        translation: "Sie lässt ihr Haus gerade reinigen, während sie zwei Wochen im Auslandsurlaub ist.",
        options: ["having / cleaned", "having / clean", "getting / cleaned", "both having and getting / cleaned"],
        correct: "both having and getting / cleaned",
        explanation: "JETZT während Abwesenheit: Present Continuous möglich. Diese Hausreinigung während Urlaub ist praktische Nutzung der Abwesenheitszeit."
      },
      {
        id: "caus_15",
        question: "You ought to _____ that broken window _____ before winter arrives soon.",
        translation: "Du solltest das kaputte Fenster reparieren lassen, bevor bald der Winter kommt.",
        options: ["have / repaired", "have / repair", "get / repairing", "make / repaired"],
        correct: "have / repaired",
        explanation: "'OUGHT TO HAVE' + Objekt + Past Participle: Dieser Rat zur Fenster-Reparatur vor Winter ist wichtig für Wärme-Isolation."
      }
    ]
  },

  used_to_would: {
    name: "Used To vs Would",
    description: "Frühere Gewohnheiten - used to und would für Vergangenheit nutzen",
    icon: Bed,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "used_would_1",
        question: "I _____ live in Paris when I was a child many years ago.",
        translation: "Ich wohnte früher in Paris, als ich vor vielen Jahren ein Kind war.",
        options: ["used to", "would", "both correct", "was"],
        correct: "used to",
        explanation: "Für ZUSTAND Vergangenheit: nur 'USED TO' (NICHT would). 'Used to' beschreibt einen früheren Dauerzustand, der jetzt nicht mehr existiert."
      },
      {
        id: "used_would_2",
        question: "We _____ go swimming every summer when we visited our grandparents at lake.",
        translation: "Wir gingen jeden Sommer schwimmen, wenn wir unsere Großeltern am See besuchten.",
        options: ["would", "used to", "both correct", "did"],
        correct: "both correct",
        explanation: "Für WIEDERHOLTE Handlung: beide möglich: 'would/used to go swimming'. Beide Formen zeigen vergangene regelmäßige Sommer-Aktivitäten."
      },
      {
        id: "used_would_3",
        question: "She _____ be very shy, but now she's very confident and outgoing always.",
        translation: "Sie war früher sehr schüchtern, aber jetzt ist sie immer sehr selbstbewusst und aufgeschlossen.",
        options: ["used to", "would", "both correct", "was"],
        correct: "used to",
        explanation: "Für CHARAKTER-Zustand früher: nur 'USED TO'. Diese Persönlichkeits-Veränderung von schüchtern zu selbstbewusst ist deutliche Entwicklung."
      },
      {
        id: "used_would_4",
        question: "When I was young, I _____ play football with my friends every weekend regularly.",
        translation: "Als ich jung war, spielte ich regelmäßig jedes Wochenende mit meinen Freunden Fußball.",
        options: ["would", "used to", "both correct", "did"],
        correct: "both correct",
        explanation: "Für GEWOHNHEIT mit Zeitkontext: beide möglich. Diese regelmäßige Kindheits-Fußball-Aktivität ist schöne Erinnerung an frühere Zeiten."
      },
      {
        id: "used_would_5",
        question: "There _____ be a cinema here, but it closed down five years ago sadly.",
        translation: "Hier war früher ein Kino, aber es schloss vor fünf Jahren leider.",
        options: ["used to", "would", "both correct", "was"],
        correct: "used to",
        explanation: "Für EXISTENZ früher: nur 'USED TO' mit 'there'. Diese Kino-Schließung vor Jahren veränderte die Gegend für Unterhaltung."
      },
      {
        id: "used_would_6",
        question: "My grandmother _____ tell us wonderful stories before bedtime every single night.",
        translation: "Meine Großmutter erzählte uns jede einzelne Nacht vor dem Schlafengehen wunderbare Geschichten.",
        options: ["would", "used to", "both correct", "did"],
        correct: "both correct",
        explanation: "WIEDERHOLTE Aktivität: beide möglich: 'would/used to tell'. Diese Gute-Nacht-Geschichten-Tradition ist wertvolle Kindheits-Erinnerung."
      },
      {
        id: "used_would_7",
        question: "I _____ smoke cigarettes, but I quit three years ago for my health completely.",
        translation: "Ich rauchte früher Zigaretten, aber ich hörte vor drei Jahren komplett für meine Gesundheit auf.",
        options: ["used to", "would", "both correct", "did"],
        correct: "used to",
        explanation: "Für FRÜHERE Gewohnheit (beendet): 'USED TO smoke'. Dieser Rauch-Stopp vor drei Jahren ist positive Gesundheits-Entscheidung."
      },
      {
        id: "used_would_8",
        question: "He _____ always arrive late to meetings, which annoyed everyone greatly every time.",
        translation: "Er kam immer zu spät zu Treffen, was jedes Mal alle sehr ärgerte.",
        options: ["would", "used to", "both correct", "did"],
        correct: "would",
        explanation: "Für NERVENDE Gewohnheit: 'WOULD' (oft mit 'always'). Diese chronische Verspätung ist typisches ärgerliches Verhaltensmuster aus Vergangenheit."
      },
      {
        id: "used_would_9",
        question: "_____ you _____ believe in Santa Claus when you were a small child?",
        translation: "Hast du früher an den Weihnachtsmann geglaubt, als du ein kleines Kind warst?",
        options: ["Did / use to", "Would / use to", "Did / used to", "Would / used"],
        correct: "Did / use to",
        explanation: "FRAGE: 'Did you USE TO' (OHNE 'd'). Diese Weihnachtsmann-Glaubens-Frage ist typische Kindheits-Erinnerungs-Frage."
      },
      {
        id: "used_would_10",
        question: "We _____ have a dog, but it died last year after being with us for twelve years.",
        translation: "Wir hatten früher einen Hund, aber er starb letztes Jahr nach zwölf Jahren bei uns.",
        options: ["used to", "would", "both correct", "did"],
        correct: "used to",
        explanation: "Für BESITZ früher: nur 'USED TO have' (NICHT would). Dieser Hunde-Verlust nach zwölf Jahren ist schmerzlicher Abschied von Familienmitglied."
      },
      {
        id: "used_would_11",
        question: "My father _____ take us to the beach every summer during school holidays happily.",
        translation: "Mein Vater nahm uns jeden Sommer während der Schulferien glücklich mit zum Strand.",
        options: ["would", "used to", "both correct", "did"],
        correct: "both correct",
        explanation: "WIEDERHOLTE Familien-Aktivität: beide möglich. Diese jährliche Strand-Tradition schuf schöne unvergessliche Sommer-Erinnerungen."
      },
      {
        id: "used_would_12",
        question: "I didn't _____ like vegetables, but now I eat them every day healthily.",
        translation: "Ich mochte früher kein Gemüse, aber jetzt esse ich es jeden Tag gesund.",
        options: ["use to", "used to", "would", "used"],
        correct: "use to",
        explanation: "NEGATIV: 'didn't USE TO' (OHNE 'd'). Dieser Geschmacks-Wandel zu Gemüse ist positive Ernährungs-Entwicklung über Zeit."
      },
      {
        id: "used_would_13",
        question: "She _____ often forget her keys and had to call someone for help.",
        translation: "Sie vergaß oft ihre Schlüssel und musste jemanden um Hilfe rufen.",
        options: ["would", "used to", "both correct", "did"],
        correct: "both correct",
        explanation: "WIEDERHOLTES Problem: beide möglich mit 'often'. Diese Vergesslichkeit führte regelmäßig zu Hilfe-Anrufen in der Vergangenheit."
      },
      {
        id: "used_would_14",
        question: "There _____ be a park here, but they built a shopping mall instead recently.",
        translation: "Hier war früher ein Park, aber sie bauten kürzlich stattdessen ein Einkaufszentrum.",
        options: ["used to", "would", "both correct", "was"],
        correct: "used to",
        explanation: "Für FRÜHERE Existenz: nur 'USED TO' mit 'there'. Dieser Park-Verlust für Einkaufszentrum veränderte die Gegend fundamental."
      },
      {
        id: "used_would_15",
        question: "I _____ to working from home now - at first it was very strange for me.",
        translation: "Ich bin jetzt daran gewöhnt, von zu Hause zu arbeiten - anfangs war es sehr seltsam für mich.",
        options: ["am used", "used", "would", "use"],
        correct: "am used",
        explanation: "'BE USED TO' = gewöhnt sein (JETZT), anders als 'used to' (früher). Diese Home-Office-Gewöhnung zeigt erfolgreiche Anpassung an neue Arbeitsform."
      }
    ]
  },

  relative_clauses: {
    name: "Relative Clauses (who/which/that)",
    description: "Relativsätze - who, which, that für Beschreibungen verwenden",
    icon: Link2,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "rel_1",
        question: "The woman _____ lives next door is a famous singer and performer.",
        translation: "Die Frau, die nebenan wohnt, ist eine berühmte Sängerin und Künstlerin.",
        options: ["who", "which", "that", "both who and that"],
        correct: "both who and that",
        explanation: "Für PERSONEN: 'WHO' oder 'THAT' beide möglich: 'woman who/that lives'. Diese Relativsätze fügen zusätzliche Information über die Person hinzu."
      },
      {
        id: "rel_2",
        question: "This is the book _____ I told you about last week during our meeting.",
        translation: "Das ist das Buch, über das ich dir letzte Woche während unserem Treffen erzählte.",
        options: ["that", "which", "who", "both that and which"],
        correct: "both that and which",
        explanation: "Für DINGE: 'THAT' oder 'WHICH' beide möglich. Dieser Relativsatz identifiziert das spezifische Buch aus dem früheren Gespräch."
      },
      {
        id: "rel_3",
        question: "I know the man _____ car is parked outside our house right now.",
        translation: "Ich kenne den Mann, dessen Auto gerade vor unserem Haus geparkt ist.",
        options: ["whose", "who's", "which", "that"],
        correct: "whose",
        explanation: "'WHOSE' zeigt BESITZ: 'man whose car' (dessen Auto). NICHT 'who's' = who is. Dieses Relativpronomen verbindet Person mit Eigentum."
      },
      {
        id: "rel_4",
        question: "The restaurant _____ we ate at last night was absolutely fantastic and delicious!",
        translation: "Das Restaurant, in dem wir letzte Nacht aßen, war absolut fantastisch und lecker!",
        options: ["that", "which", "where", "all correct"],
        correct: "all correct",
        explanation: "Für ORT mit Präposition: 'that/which/where we ate'. Alle drei Formen sind grammatisch korrekt für Ort-Relativsätze."
      },
      {
        id: "rel_5",
        question: "The people _____ were waiting outside have already left the building now.",
        translation: "Die Leute, die draußen warteten, haben das Gebäude jetzt bereits verlassen.",
        options: ["who", "which", "that", "both who and that"],
        correct: "both who and that",
        explanation: "Für PERSONEN Mehrzahl: 'WHO' oder 'THAT'. Dieser Relativsatz beschreibt die spezifische Personen-Gruppe, die wartete."
      },
      {
        id: "rel_6",
        question: "This is the place _____ I first met my wife ten years ago exactly.",
        translation: "Das ist der Ort, wo ich vor genau zehn Jahren meine Frau zum ersten Mal traf.",
        options: ["where", "that", "which", "all correct"],
        correct: "all correct",
        explanation: "Für ORT: 'WHERE' (üblichst) oder 'that/which'. Dieser besondere Ort der ersten Begegnung hat emotionale romantische Bedeutung."
      },
      {
        id: "rel_7",
        question: "The laptop _____ I bought yesterday is already broken and not working!",
        translation: "Der Laptop, den ich gestern kaufte, ist schon kaputt und funktioniert nicht!",
        options: ["that", "which", "who", "both that and which"],
        correct: "both that and which",
        explanation: "Für DINGE: beide möglich. Dieser sofortige Laptop-Defekt nach Kauf gestern ist extrem frustrierend und ärgerlich."
      },
      {
        id: "rel_8",
        question: "The day _____ we first met was a beautiful sunny spring day in April.",
        translation: "Der Tag, an dem wir uns zum ersten Mal trafen, war ein schöner sonniger Frühlingstag im April.",
        options: ["when", "that", "which", "both when and that"],
        correct: "both when and that",
        explanation: "Für ZEIT: 'WHEN' oder 'THAT' (oder Weglassen). Dieser erste Begegnungs-Tag im Frühling bleibt als besondere Erinnerung."
      },
      {
        id: "rel_9",
        question: "That's the girl _____ brother goes to my school in the same grade.",
        translation: "Das ist das Mädchen, dessen Bruder in derselben Klasse in meine Schule geht.",
        options: ["whose", "who's", "which", "that"],
        correct: "whose",
        explanation: "'WHOSE' für BESITZ/Verwandtschaft: 'girl whose brother'. Diese Schulverbindung über Geschwister schafft gemeinsamen Bezugspunkt."
      },
      {
        id: "rel_10",
        question: "The house _____ we're looking at buying is very expensive but beautiful too.",
        translation: "Das Haus, das wir uns zum Kaufen anschauen, ist sehr teuer, aber auch schön.",
        options: ["that", "which", "who", "both that and which"],
        correct: "both that and which",
        explanation: "Für DINGE: beide möglich: 'house that/which'. Dieser Hauskauf-Interessent-Status zeigt ernsthafte Immobilien-Überlegungen."
      },
      {
        id: "rel_11",
        question: "The reason _____ I'm late is that my car broke down on the highway.",
        translation: "Der Grund, warum ich zu spät bin, ist, dass mein Auto auf der Autobahn kaputt ging.",
        options: ["why", "that", "which", "both why and that"],
        correct: "both why and that",
        explanation: "Für GRUND: 'WHY' oder 'THAT' (oder Weglassen). Diese Autopanne-Entschuldigung erklärt die Verspätungs-Ursache nachvollziehbar."
      },
      {
        id: "rel_12",
        question: "I like people _____ are honest and direct in their communication with others.",
        translation: "Ich mag Leute, die ehrlich und direkt in ihrer Kommunikation mit anderen sind.",
        options: ["who", "which", "that", "both who and that"],
        correct: "both who and that",
        explanation: "Für PERSONEN allgemein: beide möglich. Diese Ehrlichkeits-Präferenz zeigt Wertschätzung für offene klare Kommunikation."
      },
      {
        id: "rel_13",
        question: "The project _____ we're working on is due next Friday and very important.",
        translation: "Das Projekt, an dem wir arbeiten, ist nächsten Freitag fällig und sehr wichtig.",
        options: ["that", "which", "who", "both that and which"],
        correct: "both that and which",
        explanation: "Für DINGE mit Präposition: beide möglich: 'project that/which we're working on'. Diese Freitags-Deadline erzeugt Zeitdruck."
      },
      {
        id: "rel_14",
        question: "Do you remember the teacher _____ taught us mathematics in primary school years ago?",
        translation: "Erinnerst du dich an den Lehrer, der uns vor Jahren in der Grundschule Mathematik beibrachte?",
        options: ["who", "which", "that", "both who and that"],
        correct: "both who and that",
        explanation: "Für PERSONEN Vergangenheit: beide möglich. Diese Lehrer-Erinnerung aus Schulzeit ist oft prägende Bildungs-Erfahrung."
      },
      {
        id: "rel_15",
        question: "The hotel _____ we stayed at during our vacation was right by the beautiful beach.",
        translation: "Das Hotel, in dem wir während unseres Urlaubs übernachteten, war direkt am schönen Strand.",
        options: ["that", "which", "where", "all correct"],
        correct: "all correct",
        explanation: "Für ORT: alle drei möglich: 'hotel that/which/where we stayed'. Diese Strand-Nähe des Hotels ist perfekte Lage für Urlaub."
      }
    ]
  }
};

export default part16Categories;
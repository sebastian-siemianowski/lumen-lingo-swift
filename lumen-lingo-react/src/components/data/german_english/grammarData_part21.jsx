/**
 * GERMAN → ENGLISH GRAMMAR - PART 21
 * 4 categories, 15 questions each
 */

import { RefreshCw, Boxes, ListOrdered, Megaphone } from "lucide-react";

export const part21Categories = {
  whatever_whoever: {
    name: "Whatever/Whoever/Whenever",
    description: "Unbestimmte Pronomen - whatever, whoever, whenever richtig nutzen",
    icon: RefreshCw,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "ever_1",
        question: "You can do _____ you want with your free time - it's your choice completely.",
        translation: "Du kannst mit deiner Freizeit machen, was immer du willst - es ist komplett deine Wahl.",
        options: ["whatever", "whenever", "whoever", "wherever"],
        correct: "whatever",
        explanation: "'WHATEVER' = was auch immer (Sache): 'do whatever you want'. Diese Freiheit bei Zeitgestaltung gibt völlige Entscheidungs-Autonomie."
      },
      {
        id: "ever_2",
        question: "_____ calls, tell them I'm not available right now and will call back later.",
        translation: "Wer auch immer anruft, sag ihnen, ich bin jetzt nicht verfügbar und rufe später zurück.",
        options: ["Whoever", "Whatever", "Whenever", "Wherever"],
        correct: "Whoever",
        explanation: "'WHOEVER' = wer auch immer (Person): 'Whoever calls'. Diese Anweisung gilt für alle möglichen Anrufer ohne Ausnahme."
      },
      {
        id: "ever_3",
        question: "_____ you're ready to leave for the trip, just let me know immediately please.",
        translation: "Wann auch immer du bereit bist, für die Reise loszufahren, sag mir bitte sofort Bescheid.",
        options: ["Whenever", "Whatever", "Whoever", "Wherever"],
        correct: "Whenever",
        explanation: "'WHENEVER' = wann auch immer (Zeit): 'Whenever you're ready'. Diese flexible Zeit-Absprache gibt Kontrolle über Abfahrts-Moment."
      },
      {
        id: "ever_4",
        question: "I'll support you _____ you decide to do with your career path in future.",
        translation: "Ich werde dich unterstützen, was auch immer du mit deinem Karriereweg in Zukunft zu tun entscheidest.",
        options: ["whatever", "whenever", "whoever", "wherever"],
        correct: "whatever",
        explanation: "'WHATEVER' + Subjekt + Verb: 'whatever you decide'. Diese bedingungslose Unterstützung gilt für alle möglichen Karriere-Entscheidungen."
      },
      {
        id: "ever_5",
        question: "You can sit _____ you like in this room - all seats are available now.",
        translation: "Du kannst dich setzen, wo auch immer du möchtest in diesem Raum - alle Plätze sind jetzt frei.",
        options: ["wherever", "whatever", "whenever", "whoever"],
        correct: "wherever",
        explanation: "'WHEREVER' = wo auch immer (Ort): 'sit wherever you like'. Diese Sitzplatz-Freiheit in Raum gibt völlige Orts-Wahl."
      },
      {
        id: "ever_6",
        question: "_____ wins the competition will receive a fantastic prize worth thousand euros cash.",
        translation: "Wer auch immer den Wettbewerb gewinnt, wird einen fantastischen Preis im Wert von tausend Euro bar erhalten.",
        options: ["Whoever", "Whatever", "Whenever", "Wherever"],
        correct: "Whoever",
        explanation: "'WHOEVER' als SUBJEKT: 'Whoever wins' (wer auch immer gewinnt). Diese Preis-Garantie gilt für jeden möglichen Wettbewerbs-Gewinner."
      },
      {
        id: "ever_7",
        question: "_____ happens tomorrow, we'll deal with it together as a strong united team.",
        translation: "Was auch immer morgen passiert, wir werden es zusammen als starkes vereintes Team bewältigen.",
        options: ["Whatever", "Whenever", "Whoever", "Wherever"],
        correct: "Whatever",
        explanation: "'WHATEVER' als SUBJEKT: 'Whatever happens'. Diese Team-Solidarität gilt für alle möglichen zukünftigen Ereignisse oder Herausforderungen."
      },
      {
        id: "ever_8",
        question: "We can meet _____ is convenient for you - I'm flexible with my schedule completely.",
        translation: "Wir können uns treffen, wann immer es für dich passt - ich bin komplett flexibel mit meinem Zeitplan.",
        options: ["whenever", "whatever", "whoever", "wherever"],
        correct: "whenever",
        explanation: "'WHENEVER' für ZEIT-Flexibilität: Diese komplette Termin-Anpassungsbereitschaft zeigt Entgegenkommen bei Meeting-Planung."
      },
      {
        id: "ever_9",
        question: "_____ you go in this city, you'll find friendly helpful people everywhere around.",
        translation: "Wo auch immer du in dieser Stadt hingehst, wirst du überall freundliche hilfsbereite Leute finden.",
        options: ["Wherever", "Whatever", "Whenever", "Whoever"],
        correct: "Wherever",
        explanation: "'WHEREVER' + Subjekt + Verb: 'Wherever you go'. Diese Stadt-Freundlichkeit ist überall gleichmäßig verteilt, eine positive Eigenschaft."
      },
      {
        id: "ever_10",
        question: "_____ broke this expensive vase must pay for it immediately - it's only fair!",
        translation: "Wer auch immer diese teure Vase zerbrochen hat, muss sofort dafür bezahlen - das ist nur fair!",
        options: ["Whoever", "Whatever", "Whenever", "Wherever"],
        correct: "Whoever",
        explanation: "'WHOEVER' als SUBJEKT für VERANTWORTUNG: Diese Schadenersatz-Forderung gilt für den unbekannten Vase-Zerbrecher."
      },
      {
        id: "ever_11",
        question: "Take _____ books you need from the library for your research project work.",
        translation: "Nimm welche Bücher auch immer du brauchst aus der Bibliothek für deine Forschungsprojekt-Arbeit.",
        options: ["whatever", "whichever", "whenever", "whoever"],
        correct: "whatever",
        explanation: "'WHATEVER' für DINGE ohne Einschränkung: 'whatever books'. Diese freie Buch-Auswahl ermöglicht umfassende Forschung ohne Limitation."
      },
      {
        id: "ever_12",
        question: "I'll be there for you _____ you need me - day or night, anytime at all.",
        translation: "Ich werde für dich da sein, wann auch immer du mich brauchst - Tag oder Nacht, jederzeit überhaupt.",
        options: ["whenever", "whatever", "whoever", "wherever"],
        correct: "whenever",
        explanation: "'WHENEVER' zeigt ZEIT-Verfügbarkeit: Diese bedingungslose Unterstützungs-Zusage gilt zu jeder Tages- oder Nachtzeit."
      },
      {
        id: "ever_13",
        question: "_____ solution you choose will work fine - both options are equally good here.",
        translation: "Welche Lösung auch immer du wählst, wird gut funktionieren - beide Optionen sind hier gleich gut.",
        options: ["Whichever", "Whatever", "Whenever", "Whoever"],
        correct: "Whichever",
        explanation: "'WHICHEVER' für AUSWAHL aus Begrenztem: 'whichever solution' (welche auch immer von mehreren). Diese Gleichwertigkeit macht Entscheidung einfacher."
      },
      {
        id: "ever_14",
        question: "_____ the weather is like tomorrow, we're going on the planned picnic anyway outside.",
        translation: "Wie auch immer das Wetter morgen ist, wir gehen trotzdem auf das geplante Picknick draußen.",
        options: ["Whatever", "Whenever", "Whoever", "Wherever"],
        correct: "Whatever",
        explanation: "'WHATEVER' + Subjekt + be like: unabhängig vom Wetter. Diese Picknick-Entschlossenheit zeigt Unabhängigkeit von Wetter-Bedingungen."
      },
      {
        id: "ever_15",
        question: "You can invite _____ you want to your birthday party celebration next Saturday night.",
        translation: "Du kannst einladen, wen auch immer du willst zu deiner Geburtstags-Party-Feier nächsten Samstagabend.",
        options: ["whoever", "whatever", "whenever", "wherever"],
        correct: "whoever",
        explanation: "'WHOEVER' für PERSONEN-Auswahl: Diese Gästelisten-Freiheit gibt völlige Kontrolle über Party-Teilnehmer ohne Einschränkungen."
      }
    ]
  },

  adjective_order: {
    name: "Adjective Order",
    description: "Adjektiv-Reihenfolge - mehrere Adjektive richtig anordnen",
    icon: ListOrdered,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "adj_ord_1",
        question: "She bought a _____ dress for the wedding ceremony next month downtown.",
        translation: "Sie kaufte ein schönes langes rotes Kleid für die Hochzeitszeremonie nächsten Monat in der Innenstadt.",
        options: ["beautiful long red", "red long beautiful", "long beautiful red", "red beautiful long"],
        correct: "beautiful long red",
        explanation: "Reihenfolge: MEINUNG (beautiful) - GRÖSSE (long) - FARBE (red). Diese Standard-Ordnung klingt natürlich für englische Muttersprachler."
      },
      {
        id: "adj_ord_2",
        question: "He drives a _____ car that he bought last year from dealer.",
        translation: "Er fährt ein großes neues deutsches Auto, das er letztes Jahr vom Händler kaufte.",
        options: ["big new German", "German new big", "new big German", "German big new"],
        correct: "big new German",
        explanation: "Reihenfolge: GRÖSSE (big) - ALTER (new) - HERKUNFT (German). Diese Adjektiv-Ordnung folgt der natürlichen englischen Struktur."
      },
      {
        id: "adj_ord_3",
        question: "They live in a _____ house near the beach by the ocean.",
        translation: "Sie wohnen in einem schönen alten Steinhaus nahe dem Strand am Meer.",
        options: ["lovely old stone", "stone old lovely", "old lovely stone", "stone lovely old"],
        correct: "lovely old stone",
        explanation: "Reihenfolge: MEINUNG (lovely) - ALTER (old) - MATERIAL (stone). Diese Haus-Beschreibung nutzt korrekte englische Adjektiv-Abfolge."
      },
      {
        id: "adj_ord_4",
        question: "I want to buy those _____ shoes I saw in the shop window yesterday.",
        translation: "Ich möchte jene italienischen schwarzen Leder-Schuhe kaufen, die ich gestern im Schaufenster sah.",
        options: ["Italian black leather", "black Italian leather", "leather black Italian", "black leather Italian"],
        correct: "Italian black leather",
        explanation: "Reihenfolge: HERKUNFT (Italian) - FARBE (black) - MATERIAL (leather). Diese Schuh-Beschreibung folgt präziser Adjektiv-Reihenfolge."
      },
      {
        id: "adj_ord_5",
        question: "She has _____ eyes that everyone always compliments her about regularly.",
        translation: "Sie hat wunderschöne große blaue Augen, über die ihr jeder regelmäßig immer Komplimente macht.",
        options: ["beautiful big blue", "blue big beautiful", "big beautiful blue", "blue beautiful big"],
        correct: "beautiful big blue",
        explanation: "Reihenfolge: MEINUNG (beautiful) - GRÖSSE (big) - FARBE (blue). Diese Augen-Beschreibung nutzt natürlich klingende Adjektiv-Abfolge."
      },
      {
        id: "adj_ord_6",
        question: "We stayed at a _____ hotel during our vacation last summer abroad.",
        translation: "Wir übernachteten letzten Sommer im Ausland während unseres Urlaubs in einem charmanten kleinen französischen Hotel.",
        options: ["charming little French", "French little charming", "little charming French", "French charming little"],
        correct: "charming little French",
        explanation: "Reihenfolge: MEINUNG (charming) - GRÖSSE (little) - HERKUNFT (French). Diese Hotel-Beschreibung folgt korrekter englischer Struktur."
      },
      {
        id: "adj_ord_7",
        question: "He wore a _____ suit to the important job interview yesterday morning.",
        translation: "Er trug gestern Morgen einen eleganten dunkelblauen Wollanzug zum wichtigen Bewerbungsgespräch.",
        options: ["smart dark blue woolen", "woolen dark blue smart", "dark blue smart woolen", "blue dark woolen smart"],
        correct: "smart dark blue woolen",
        explanation: "Reihenfolge: MEINUNG (smart) - FARBE (dark blue) - MATERIAL (woolen). Diese Anzug-Beschreibung ist perfekt für formellen Kontext."
      },
      {
        id: "adj_ord_8",
        question: "They found a _____ puppy abandoned in the park yesterday afternoon sadly.",
        translation: "Sie fanden gestern Nachmittag leider einen süßen kleinen braunen Welpen im Park ausgesetzt.",
        options: ["cute little brown", "brown little cute", "little cute brown", "brown cute little"],
        correct: "cute little brown",
        explanation: "Reihenfolge: MEINUNG (cute) - GRÖSSE (little) - FARBE (brown). Diese Welpen-Beschreibung weckt Mitgefühl durch richtige Adjektiv-Ordnung."
      },
      {
        id: "adj_ord_9",
        question: "She bought a _____ table for her new apartment living room area.",
        translation: "Sie kaufte einen schönen runden Holztisch für ihren neuen Wohnungs-Wohnzimmerbereich.",
        options: ["nice round wooden", "wooden round nice", "round nice wooden", "wooden nice round"],
        correct: "nice round wooden",
        explanation: "Reihenfolge: MEINUNG (nice) - FORM (round) - MATERIAL (wooden). Diese Tisch-Wahl folgt natürlicher englischer Beschreibungs-Reihenfolge."
      },
      {
        id: "adj_ord_10",
        question: "He collects _____ coins from all around the world as interesting hobby.",
        translation: "Er sammelt alte seltene römische Münzen von überall auf der Welt als interessantes Hobby.",
        options: ["old rare Roman", "Roman rare old", "rare old Roman", "Roman old rare"],
        correct: "old rare Roman",
        explanation: "Reihenfolge: ALTER (old) - QUALITÄT (rare) - HERKUNFT (Roman). Diese Münz-Sammlung nutzt präzise Adjektiv-Anordnung."
      },
      {
        id: "adj_ord_11",
        question: "I need to buy a _____ laptop for my university studies starting next semester.",
        translation: "Ich muss für mein nächstes Semester beginnendes Universitätsstudium einen neuen schnellen japanischen Laptop kaufen.",
        options: ["new fast Japanese", "Japanese fast new", "fast new Japanese", "Japanese new fast"],
        correct: "new fast Japanese",
        explanation: "Reihenfolge: ALTER (new) - QUALITÄT (fast) - HERKUNFT (Japanese). Diese Laptop-Anforderung folgt Standard-Adjektiv-Ordnung."
      },
      {
        id: "adj_ord_12",
        question: "They live in a _____ apartment building with a beautiful city view.",
        translation: "Sie wohnen in einem modernen hohen Glaswohngebäude mit schöner Stadtansicht.",
        options: ["modern tall glass", "glass tall modern", "tall modern glass", "glass modern tall"],
        correct: "modern tall glass",
        explanation: "Reihenfolge: MEINUNG/ALTER (modern) - GRÖSSE (tall) - MATERIAL (glass). Diese Gebäude-Beschreibung ist typisch für urbane Architektur."
      },
      {
        id: "adj_ord_13",
        question: "She has a _____ cat that sleeps on her bed every single night.",
        translation: "Sie hat eine süße kleine schwarze Katze, die jede einzelne Nacht auf ihrem Bett schläft.",
        options: ["cute little black", "black little cute", "little cute black", "black cute little"],
        correct: "cute little black",
        explanation: "Reihenfolge: MEINUNG (cute) - GRÖSSE (little) - FARBE (black). Diese Katzen-Beschreibung folgt natürlicher englischer Adjektiv-Struktur."
      },
      {
        id: "adj_ord_14",
        question: "We need _____ chairs for the outdoor garden party event tomorrow afternoon.",
        translation: "Wir brauchen für die Outdoor-Garten-Party-Veranstaltung morgen Nachmittag einige zusätzliche weiße Plastikstühle.",
        options: ["some extra white plastic", "plastic white extra some", "white extra plastic some", "extra some white plastic"],
        correct: "some extra white plastic",
        explanation: "Reihenfolge: ANZAHL (some) - MEINUNG (extra) - FARBE (white) - MATERIAL (plastic). Diese Stuhl-Anforderung nutzt vollständige Adjektiv-Ordnung."
      },
      {
        id: "adj_ord_15",
        question: "He inherited a _____ watch from his grandfather who passed away last year.",
        translation: "Er erbte eine wertvolle alte Schweizer Uhr von seinem Großvater, der letztes Jahr starb.",
        options: ["valuable old Swiss", "Swiss old valuable", "old valuable Swiss", "Swiss valuable old"],
        correct: "valuable old Swiss",
        explanation: "Reihenfolge: WERT (valuable) - ALTER (old) - HERKUNFT (Swiss). Diese Erbstück-Uhr hat emotionalen und materiellen Wert durch richtige Beschreibung."
      }
    ]
  },

  cleft_sentences: {
    name: "Cleft Sentences (It is...that)",
    description: "Spaltsätze - Betonung durch It is...that Konstruktionen",
    icon: Megaphone,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "cleft_1",
        question: "_____ she told me the truth, not him who lied to me yesterday.",
        translation: "Es war sie, die mir die Wahrheit sagte, nicht er, der mich gestern anlog.",
        options: ["It was", "What was", "That was", "She was"],
        correct: "It was",
        explanation: "'IT WAS...THAT/WHO' betont PERSON: 'It was she who/that told'. Diese Betonung stellt klar, wer die Wahrheit sagte versus wer log."
      },
      {
        id: "cleft_2",
        question: "_____ I need right now is a good long sleep in my comfortable bed.",
        translation: "Was ich jetzt brauche, ist ein guter langer Schlaf in meinem bequemen Bett.",
        options: ["What", "It", "That", "Which"],
        correct: "What",
        explanation: "'WHAT...IS' betont SACHE/Bedürfnis: 'What I need is'. Diese Struktur hebt das wichtigste aktuelle Bedürfnis - Schlaf - hervor."
      },
      {
        id: "cleft_3",
        question: "_____ in 2010 that I first visited London on my school trip abroad.",
        translation: "Es war 2010, als ich London zum ersten Mal auf meiner Schulreise ins Ausland besuchte.",
        options: ["It was", "What was", "That was", "When was"],
        correct: "It was",
        explanation: "'IT WAS...THAT' betont ZEIT: 'It was in 2010 that'. Diese Betonung hebt das spezifische Jahr der ersten London-Reise hervor."
      },
      {
        id: "cleft_4",
        question: "_____ I really enjoy about this job is the friendly team atmosphere here daily.",
        translation: "Was ich an diesem Job wirklich genieße, ist die freundliche Team-Atmosphäre hier täglich.",
        options: ["What", "It", "That", "Which"],
        correct: "What",
        explanation: "'WHAT...IS' für ASPEKT-Betonung: 'What I enjoy is'. Diese Struktur hebt den positivsten Job-Aspekt - Teamwork - besonders hervor."
      },
      {
        id: "cleft_5",
        question: "_____ at the supermarket yesterday that I met my old teacher from school.",
        translation: "Es war im Supermarkt gestern, wo ich meinen alten Lehrer von der Schule traf.",
        options: ["It was", "What was", "That was", "Where was"],
        correct: "It was",
        explanation: "'IT WAS...THAT/WHERE' betont ORT: 'It was at the supermarket that'. Diese Betonung macht den zufälligen Begegnungs-Ort bedeutsam."
      },
      {
        id: "cleft_6",
        question: "_____ we need to do now is focus on solving this urgent problem together.",
        translation: "Was wir jetzt tun müssen, ist uns zusammen auf das Lösen dieses dringenden Problems zu konzentrieren.",
        options: ["What", "It", "That", "All"],
        correct: "What",
        explanation: "'WHAT...IS' für HANDLUNGS-Fokus: 'What we need to do is'. Diese Struktur lenkt Aufmerksamkeit auf wichtigste nächste Aktion."
      },
      {
        id: "cleft_7",
        question: "_____ her kindness that I appreciate most about her personality and character overall.",
        translation: "Es ist ihre Freundlichkeit, die ich am meisten an ihrer Persönlichkeit und ihrem Charakter insgesamt schätze.",
        options: ["It's", "What's", "That's", "This is"],
        correct: "It's",
        explanation: "'IT'S...THAT' betont EIGENSCHAFT: 'It's her kindness that'. Diese Betonung hebt die wertvollste Charakter-Eigenschaft hervor."
      },
      {
        id: "cleft_8",
        question: "_____ happened was that someone forgot to lock the main door last night.",
        translation: "Was passierte, war, dass jemand letzte Nacht vergaß, die Haupttür abzuschließen.",
        options: ["What", "It", "That", "Which"],
        correct: "What",
        explanation: "'WHAT HAPPENED WAS THAT': Diese Struktur erklärt das Ereignis und betont die Ursache des Problems - vergessenes Abschließen."
      },
      {
        id: "cleft_9",
        question: "_____ because of the traffic jam that we arrived late to the meeting today.",
        translation: "Es war wegen des Verkehrsstaus, dass wir heute zu spät zum Meeting kamen.",
        options: ["It was", "What was", "That was", "This was"],
        correct: "It was",
        explanation: "'IT WAS...THAT' betont GRUND: 'It was because of...that'. Diese Betonung macht Verkehrsstau als Verspätungs-Ursache sehr klar."
      },
      {
        id: "cleft_10",
        question: "_____ I don't understand is why he didn't tell us about problem earlier before.",
        translation: "Was ich nicht verstehe, ist, warum er uns nicht früher zuvor über das Problem erzählte.",
        options: ["What", "It", "That", "Which"],
        correct: "What",
        explanation: "'WHAT...IS' für UNVERSTÄNDNIS: Diese Struktur betont die Verwunderung über fehlende frühere Problem-Kommunikation."
      },
      {
        id: "cleft_11",
        question: "_____ from this experience that I learned the most important life lesson ever.",
        translation: "Es war aus dieser Erfahrung, dass ich die wichtigste Lebenslektion überhaupt lernte.",
        options: ["It was", "What was", "That was", "This was"],
        correct: "It was",
        explanation: "'IT WAS...THAT' betont QUELLE: 'from this experience'. Diese Betonung macht die Erfahrung als Lern-Quelle sehr bedeutsam."
      },
      {
        id: "cleft_12",
        question: "_____ matters most to me is my family's health and happiness always above all.",
        translation: "Was mir am meisten wichtig ist, ist die Gesundheit und das Glück meiner Familie immer über allem.",
        options: ["What", "It", "That", "Which"],
        correct: "What",
        explanation: "'WHAT MATTERS IS': Diese Struktur betont die höchste Priorität - Familie - über alle anderen Dinge im Leben."
      },
      {
        id: "cleft_13",
        question: "_____ only yesterday that I found out about the surprise party plans for me.",
        translation: "Es war erst gestern, dass ich über die Überraschungsparty-Pläne für mich herausfand.",
        options: ["It was", "What was", "That was", "When was"],
        correct: "It was",
        explanation: "'IT WAS...THAT' betont KÜRZLICHE Zeit: 'only yesterday'. Diese Betonung zeigt, wie spät die Überraschungs-Entdeckung war."
      },
      {
        id: "cleft_14",
        question: "_____ we should focus on now is improving our customer service quality standards.",
        translation: "Worauf wir uns jetzt konzentrieren sollten, ist die Verbesserung unserer Kundenservice-Qualitätsstandards.",
        options: ["What", "It", "That", "All"],
        correct: "What",
        explanation: "'WHAT...IS' für FOKUS-Priorität: Diese Struktur lenkt Aufmerksamkeit auf wichtigste geschäftliche Verbesserungs-Aufgabe."
      },
      {
        id: "cleft_15",
        question: "_____ his dedication and hard work that led to his remarkable success in career.",
        translation: "Es war seine Hingabe und harte Arbeit, die zu seinem bemerkenswerten Karriere-Erfolg führte.",
        options: ["It was", "What was", "That was", "This was"],
        correct: "It was",
        explanation: "'IT WAS...THAT' betont URSACHE: 'dedication that led to success'. Diese Betonung macht Arbeits-Ethik als Erfolgs-Schlüssel sehr deutlich."
      }
    ]
  },

  gradable_nongradable: {
    name: "Gradable vs Non-gradable Adjectives",
    description: "Steigerbare Adjektive - very vs absolutely bei Adjektiven",
    icon: Boxes,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "grad_1",
        question: "The movie was _____ good - I really enjoyed watching it in cinema!",
        translation: "Der Film war sehr gut - ich habe es wirklich genossen, ihn im Kino zu schauen!",
        options: ["very", "absolutely", "completely", "both very and absolutely"],
        correct: "very",
        explanation: "GRADABLE Adjektiv 'good': nutze 'VERY' (NICHT absolutely). Steigerbare Adjektive wie good, bad, big können mehr oder weniger sein."
      },
      {
        id: "grad_2",
        question: "The explanation was _____ perfect - I understood everything clearly now without questions!",
        translation: "Die Erklärung war absolut perfekt - ich habe jetzt alles klar ohne Fragen verstanden!",
        options: ["absolutely", "very", "quite", "both absolutely and completely"],
        correct: "absolutely",
        explanation: "NON-GRADABLE 'perfect': nutze 'ABSOLUTELY' oder 'COMPLETELY'. Perfekt ist perfekt, es gibt kein 'sehr perfekt', nur absolut."
      },
      {
        id: "grad_3",
        question: "I'm _____ tired after working twelve hours straight today without any break at all.",
        translation: "Ich bin extrem müde nach zwölf durchgehenden Arbeitsstunden heute ohne jede Pause überhaupt.",
        options: ["extremely", "absolutely", "completely", "both extremely and absolutely"],
        correct: "extremely",
        explanation: "GRADABLE 'tired': nutze 'EXTREMELY' oder 'VERY'. Müdigkeit hat Grade - etwas müde, sehr müde, extrem müde sind möglich."
      },
      {
        id: "grad_4",
        question: "The instructions were _____ impossible to follow - they made no sense whatsoever!",
        translation: "Die Anweisungen waren völlig unmöglich zu befolgen - sie ergaben überhaupt keinen Sinn!",
        options: ["completely", "very", "quite", "both completely and absolutely"],
        correct: "completely",
        explanation: "NON-GRADABLE 'impossible': nutze 'COMPLETELY' oder 'ABSOLUTELY'. Unmöglich ist absolut, es gibt keine Stufen von Unmöglichkeit."
      },
      {
        id: "grad_5",
        question: "This soup is _____ delicious - could I have another bowl please?",
        translation: "Diese Suppe ist sehr lecker - könnte ich bitte noch eine Schüssel haben?",
        options: ["very", "absolutely", "completely", "totally"],
        correct: "very",
        explanation: "GRADABLE 'delicious': 'VERY' ist Standard. Geschmack kann Stufen haben - ziemlich lecker, sehr lecker, extrem lecker."
      },
      {
        id: "grad_6",
        question: "Your answer is _____ correct - well done on getting it right first time!",
        translation: "Deine Antwort ist absolut korrekt - gut gemacht, dass du es beim ersten Mal richtig hattest!",
        options: ["absolutely", "very", "quite", "both absolutely and completely"],
        correct: "absolutely",
        explanation: "NON-GRADABLE 'correct': 'ABSOLUTELY' oder 'COMPLETELY'. Richtig ist richtig, es gibt kein 'sehr richtig', nur absolut korrekt."
      },
      {
        id: "grad_7",
        question: "I'm _____ hungry - I haven't eaten anything since breakfast this morning early!",
        translation: "Ich bin sehr hungrig - ich habe seit heute früh dem Frühstück nichts gegessen!",
        options: ["very", "absolutely", "completely", "totally"],
        correct: "very",
        explanation: "GRADABLE 'hungry': 'VERY' oder 'EXTREMELY'. Hunger hat Intensitäts-Grade von etwas hungrig bis sehr hungrig."
      },
      {
        id: "grad_8",
        question: "The story he told us was _____ ridiculous - nobody believed it at all!",
        translation: "Die Geschichte, die er uns erzählte, war völlig lächerlich - niemand glaubte sie überhaupt!",
        options: ["absolutely", "very", "quite", "both absolutely and completely"],
        correct: "absolutely",
        explanation: "NON-GRADABLE 'ridiculous': 'ABSOLUTELY' (stark). Obwohl informell mit 'very' möglich, ist 'absolutely' bei extremen Adjektiven korrekter."
      },
      {
        id: "grad_9",
        question: "This exercise is _____ difficult for beginners - they need more practice time first.",
        translation: "Diese Übung ist ziemlich schwierig für Anfänger - sie brauchen zuerst mehr Übungszeit.",
        options: ["quite", "absolutely", "completely", "totally"],
        correct: "quite",
        explanation: "GRADABLE 'difficult': 'QUITE' = ziemlich (mäßig). Diese Schwierigkeits-Stufe zwischen einfach und sehr schwer ist für Anfänger herausfordernd."
      },
      {
        id: "grad_10",
        question: "The museum was _____ fascinating - I could have spent hours there exploring more!",
        translation: "Das Museum war absolut faszinierend - ich hätte Stunden dort mit mehr Erkunden verbringen können!",
        options: ["absolutely", "very", "quite", "both absolutely and very"],
        correct: "both absolutely and very",
        explanation: "'Fascinating' kann BEIDE: 'very' (gradable) oder 'absolutely' (Betonung). Manche Adjektive funktionieren in beiden Kategorien je nach Kontext."
      },
      {
        id: "grad_11",
        question: "I'm _____ certain that I locked the door - I checked it twice carefully!",
        translation: "Ich bin absolut sicher, dass ich die Tür abgeschlossen habe - ich habe es zweimal sorgfältig geprüft!",
        options: ["absolutely", "very", "quite", "both absolutely and completely"],
        correct: "absolutely",
        explanation: "NON-GRADABLE 'certain': 'ABSOLUTELY' für absolute Sicherheit. Man ist entweder sicher oder nicht, keine Zwischenstufen möglich hier."
      },
      {
        id: "grad_12",
        question: "The weather today is _____ cold - you should wear a warm jacket outside!",
        translation: "Das Wetter heute ist sehr kalt - du solltest draußen eine warme Jacke tragen!",
        options: ["very", "absolutely", "completely", "totally"],
        correct: "very",
        explanation: "GRADABLE 'cold': 'VERY' oder 'EXTREMELY'. Kälte hat viele Grade von kühl über kalt bis sehr kalt oder eiskalt."
      },
      {
        id: "grad_13",
        question: "The news was _____ terrible - I couldn't believe what I was hearing!",
        translation: "Die Nachrichten waren absolut schrecklich - ich konnte nicht glauben, was ich hörte!",
        options: ["absolutely", "very", "quite", "both absolutely and completely"],
        correct: "absolutely",
        explanation: "NON-GRADABLE 'terrible' (extrem): 'ABSOLUTELY'. Bei extremen Adjektiven wie terrible, awful nutzen wir absolute Verstärker."
      },
      {
        id: "grad_14",
        question: "Your English pronunciation is _____ good for a beginner student - keep practicing daily!",
        translation: "Deine englische Aussprache ist sehr gut für einen Anfänger-Studenten - übe täglich weiter!",
        options: ["very", "absolutely", "completely", "totally"],
        correct: "very",
        explanation: "GRADABLE 'good': 'VERY' ist Standard. Diese Aussprache-Qualität kann sich noch steigern von gut zu sehr gut zu ausgezeichnet."
      },
      {
        id: "grad_15",
        question: "The hotel room was _____ spotless and clean - not a speck of dust anywhere!",
        translation: "Das Hotelzimmer war absolut makellos und sauber - kein Staubkörnchen irgendwo!",
        options: ["absolutely", "very", "quite", "both absolutely and completely"],
        correct: "absolutely",
        explanation: "NON-GRADABLE 'spotless': 'ABSOLUTELY'. Makellos ist absoluter Zustand - entweder komplett sauber oder nicht, keine Zwischenstufen."
      }
    ]
  }
};

export default part21Categories;
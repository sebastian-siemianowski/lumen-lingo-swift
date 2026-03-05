/**
 * GERMAN → ENGLISH GRAMMAR - PART 4
 * 4 categories, 15 questions each
 */

import { Key, ArrowRightLeft, Split, Shirt } from "lucide-react";

export const part4Categories = {
  modal_verbs_advanced: {
    name: "Modal Verbs - Advanced",
    description: "Modalverben - können, müssen, dürfen, sollen richtig einsetzen",
    icon: Key,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "modal_adv_1",
        question: "I _____ speak German fluently after living in Berlin for three years.",
        translation: "Ich kann nach drei Jahren Leben in Berlin fließend Deutsch sprechen.",
        options: ["can", "must", "should", "may"],
        correct: "can",
        explanation: "Für FÄHIGKEIT nutzen wir 'can' (können): Diese Sprachfähigkeit ist Resultat dreijähriger Immersion in deutschsprachiger Umgebung und praktischer täglicher Anwendung der Sprache."
      },
      {
        id: "modal_adv_2",
        question: "You _____ not smoke in this building - it's strictly forbidden by law.",
        translation: "Du darfst in diesem Gebäude nicht rauchen - es ist gesetzlich streng verboten.",
        options: ["must", "can", "should", "may"],
        correct: "must",
        explanation: "Für VERBOT nutzen wir 'must not' (nicht dürfen): Dieses Rauchverbot ist rechtlich bindend und gilt für alle Personen im Gebäude ohne Ausnahme."
      },
      {
        id: "modal_adv_3",
        question: "She _____ go to the doctor - she has been sick for a week.",
        translation: "Sie sollte zum Arzt gehen - sie ist seit einer Woche krank.",
        options: ["should", "must", "can", "may"],
        correct: "should",
        explanation: "Für EMPFEHLUNG nutzen wir 'should' (sollte): Diese Woche anhaltende Krankheit rechtfertigt ärztliche Untersuchung zur Diagnose und angemessener Behandlung."
      },
      {
        id: "modal_adv_4",
        question: "_____ I borrow your pen for a moment, please?",
        translation: "Darf ich mir bitte kurz deinen Stift leihen?",
        options: ["May", "Must", "Should", "Can"],
        correct: "May",
        explanation: "Für HÖFLICHE ERLAUBNIS nutzen wir 'may' (dürfen): Diese formelle Bitte um temporäre Stiftnutzung ist höflicher als 'can' in professionellem Kontext."
      },
      {
        id: "modal_adv_5",
        question: "We _____ finish this project by Friday - the deadline is strict.",
        translation: "Wir müssen dieses Projekt bis Freitag fertigstellen - die Deadline ist strikt.",
        options: ["must", "should", "can", "may"],
        correct: "must",
        explanation: "Für VERPFLICHTUNG nutzen wir 'must' (müssen): Diese strenge Freitags-Deadline lässt keine Verzögerung zu und erfordert konzentrierte Arbeit bis Abschluss."
      },
      {
        id: "modal_adv_6",
        question: "He _____ be at home now - I just saw his car in the driveway.",
        translation: "Er muss jetzt zu Hause sein - ich sah gerade sein Auto in der Einfahrt.",
        options: ["must", "should", "can", "may"],
        correct: "must",
        explanation: "Für LOGISCHE SCHLUSSFOLGERUNG nutzen wir 'must' (muss sein): Das Auto in Einfahrt ist starker Beweis für seine Anwesenheit zu Hause in diesem Moment."
      },
      {
        id: "modal_adv_7",
        question: "You _____ try this restaurant - the food is absolutely amazing there.",
        translation: "Du solltest dieses Restaurant probieren - das Essen dort ist absolut fantastisch.",
        options: ["should", "must", "can", "may"],
        correct: "should",
        explanation: "Für EMPFEHLUNG nutzen wir 'should' (solltest): Diese Restaurant-Empfehlung basiert auf persönlicher positiver Erfahrung mit exzellenter Essensqualität."
      },
      {
        id: "modal_adv_8",
        question: "Children under 16 _____ not watch this movie without parental guidance.",
        translation: "Kinder unter 16 dürfen diesen Film nicht ohne elterliche Aufsicht schauen.",
        options: ["may", "must", "should", "can"],
        correct: "may",
        explanation: "Für ERLAUBNIS-VERBOT nutzen wir 'may not' (dürfen nicht): Diese Altersfreigabe schützt junge Zuschauer vor unangemessenen Inhalten im Film."
      },
      {
        id: "modal_adv_9",
        question: "I _____ speak three languages when I was younger, but forgot one.",
        translation: "Ich konnte drei Sprachen sprechen, als ich jünger war, vergaß aber eine.",
        options: ["could", "can", "must", "should"],
        correct: "could",
        explanation: "Für VERGANGENE FÄHIGKEIT nutzen wir 'could' (konnte): Diese frühere Dreisprachigkeit reduzierte sich durch fehlende Praxis einer Sprache über Jahre."
      },
      {
        id: "modal_adv_10",
        question: "We _____ leave early tomorrow - the train departs at 6 AM sharp.",
        translation: "Wir müssen morgen früh losfahren - der Zug fährt um genau 6 Uhr ab.",
        options: ["must", "should", "can", "may"],
        correct: "must",
        explanation: "Für NOTWENDIGKEIT nutzen wir 'must' (müssen): Diese frühe Zugabfahrt erfordert rechtzeitiges Aufstehen und Vorbereitung für pünktliches Erreichen des Bahnhofs."
      },
      {
        id: "modal_adv_11",
        question: "You _____ be joking! That's completely unbelievable and impossible!",
        translation: "Du musst scherzen! Das ist völlig unglaublich und unmöglich!",
        options: ["must", "should", "can", "may"],
        correct: "must",
        explanation: "Für STARKE VERMUTUNG nutzen wir 'must' (muss): Diese Ungläubigkeit über absurde Aussage drückt sich durch starke Überzeugung aus, dass es Scherz sein muss."
      },
      {
        id: "modal_adv_12",
        question: "She _____ have forgotten about our meeting - she's never late normally.",
        translation: "Sie muss unser Treffen vergessen haben - sie ist normalerweise nie zu spät.",
        options: ["must", "should", "can", "may"],
        correct: "must",
        explanation: "Für VERMUTUNG ÜBER VERGANGENHEIT: 'must have' + Partizip (muss...haben): Diese Verspätung ist ungewöhnlich für normalerweise pünktliche Person und deutet auf Vergessen hin."
      },
      {
        id: "modal_adv_13",
        question: "_____ you help me carry these heavy boxes upstairs to my apartment?",
        translation: "Könntest du mir helfen, diese schweren Kisten nach oben in meine Wohnung zu tragen?",
        options: ["Could", "Must", "Should", "May"],
        correct: "Could",
        explanation: "Für HÖFLICHE BITTE nutzen wir 'could' (könntest): Diese Hilfsanfrage bei schweren Kisten ist höflicher als 'can' und zeigt Respekt für Zeitaufwand der Person."
      },
      {
        id: "modal_adv_14",
        question: "Passengers _____ fasten their seatbelts during takeoff and landing procedures.",
        translation: "Passagiere müssen während Start- und Landevorgängen ihre Sicherheitsgurte anlegen.",
        options: ["must", "should", "can", "may"],
        correct: "must",
        explanation: "Für SICHERHEITSVORSCHRIFT nutzen wir 'must' (müssen): Diese Flugzeug-Sicherheitsregel ist verbindlich und dient Schutz aller Passagiere bei kritischen Flugphasen."
      },
      {
        id: "modal_adv_15",
        question: "You _____ have told me earlier - I would have helped you immediately.",
        translation: "Du hättest mir früher sagen sollen - ich hätte dir sofort geholfen.",
        options: ["should", "must", "can", "may"],
        correct: "should",
        explanation: "Für VORWURF ÜBER VERGANGENHEIT: 'should have' + Partizip (hättest...sollen): Dieser sanfte Vorwurf drückt aus, dass frühere Information sofortige Hilfe ermöglicht hätte."
      }
    ]
  },

  word_order_complex: {
    name: "Complex Word Order",
    description: "Komplexe Satzstellung - Haupt- und Nebensätze richtig strukturieren",
    icon: ArrowRightLeft,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "word_order_1",
        question: "I know that he _____ to the store yesterday afternoon.",
        translation: "Ich weiß, dass er gestern Nachmittag zum Laden ging.",
        options: ["went", "goes", "go", "going"],
        correct: "went",
        explanation: "Im Englischen bleibt NORMALE Wortfolge in Nebensätzen: Subjekt-Verb-Objekt. Im Deutschen wandert Verb ans Ende. Diese Konsistenz macht Englisch einfacher für Satzbau."
      },
      {
        id: "word_order_2",
        question: "She said _____ would come to the party on Saturday evening.",
        translation: "Sie sagte, sie würde am Samstagabend zur Party kommen.",
        options: ["she", "that she", "if she", "when she"],
        correct: "she",
        explanation: "Im Englischen kann 'that' WEGGELASSEN werden: 'said she would come'. Im Deutschen braucht man 'dass'. Diese Flexibilität macht englische Sätze oft kürzer."
      },
      {
        id: "word_order_3",
        question: "Never _____ such a beautiful sunset before in my entire life.",
        translation: "Nie habe ich zuvor in meinem ganzen Leben so einen schönen Sonnenuntergang gesehen.",
        options: ["have I seen", "I have seen", "I saw", "did I saw"],
        correct: "have I seen",
        explanation: "Nach NEGATIVEM Wort am Anfang: INVERSION (Verb vor Subjekt): 'never have I'. Diese dramatische Struktur betont außergewöhnliche Schönheit des Sonnenuntergangs."
      },
      {
        id: "word_order_4",
        question: "Rarely _____ to the cinema these days - I prefer streaming at home.",
        translation: "Selten gehe ich heutzutage ins Kino - ich bevorzuge Streaming zu Hause.",
        options: ["do I go", "I go", "go I", "I am going"],
        correct: "do I go",
        explanation: "Nach HÄUFIGKEITS-Adverb am Anfang: Inversion 'rarely do I go'. Diese Streaming-Präferenz über Kino ist moderne Unterhaltungsgewohnheit vieler Menschen."
      },
      {
        id: "word_order_5",
        question: "Not only _____ the exam, but she also got the highest score.",
        translation: "Sie bestand nicht nur die Prüfung, sondern bekam auch die höchste Punktzahl.",
        options: ["did she pass", "she passed", "she did pass", "passed she"],
        correct: "did she pass",
        explanation: "Nach 'not only' am Anfang: Inversion 'did she pass'. Dieser doppelte Erfolg von Bestehen und Bestnote ist außergewöhnliche akademische Leistung."
      },
      {
        id: "word_order_6",
        question: "He asked me _____ to his birthday party next weekend.",
        translation: "Er fragte mich, ob ich zu seiner Geburtstagsparty nächstes Wochenende kommen würde.",
        options: ["if I would come", "would I come", "that I would come", "I would come"],
        correct: "if I would come",
        explanation: "Für INDIREKTE Ja/Nein-Frage nutzen wir 'if': 'asked if I would come'. Normale Wortfolge bleibt. Diese Partyeinladung als Frage ist höfliche Form."
      },
      {
        id: "word_order_7",
        question: "Under no circumstances _____ this secret to anyone else ever.",
        translation: "Unter keinen Umständen werde ich dieses Geheimnis jemals an jemand anderen weitergeben.",
        options: ["will I reveal", "I will reveal", "I reveal", "reveal I"],
        correct: "will I reveal",
        explanation: "Nach NEGATIVER Phrase am Anfang: Inversion 'will I reveal'. Diese absolute Verschwiegenheit betont totale Diskretion bezüglich wichtigem Geheimnis."
      },
      {
        id: "word_order_8",
        question: "I wonder _____ tomorrow for the important meeting.",
        translation: "Ich frage mich, ob er morgen zum wichtigen Treffen kommen wird.",
        options: ["if he will come", "will he come", "he will come", "that he will come"],
        correct: "if he will come",
        explanation: "Nach 'wonder' (sich fragen): 'if' mit normaler Wortfolge, NICHT Fragestellung. Diese Unsicherheit über Teilnahme ist berechtigte Sorge vor wichtigem Meeting."
      },
      {
        id: "modal_adv_9",
        question: "Only after finishing _____ how difficult it had been for me.",
        translation: "Erst nach Beendigung erkannte ich, wie schwierig es für mich gewesen war.",
        options: ["did I realize", "I realized", "I did realize", "realized I"],
        correct: "did I realize",
        explanation: "Nach 'only' + Phrase: Inversion 'did I realize'. Diese späte Erkenntnis der Schwierigkeit kam erst nach Projektabschluss im Rückblick."
      },
      {
        id: "word_order_10",
        question: "She told me _____ at the station at exactly three o'clock.",
        translation: "Sie sagte mir, dass sie um genau drei Uhr am Bahnhof sein würde.",
        options: ["she would be", "would she be", "that she would be", "if she would be"],
        correct: "she would be",
        explanation: "Nach 'told': 'that' kann wegfallen, normale Wortfolge bleibt. Diese präzise Zeitangabe für Bahnhofstreffen ist wichtig für Koordination."
      },
      {
        id: "word_order_11",
        question: "Little _____ that this decision would change my entire life completely.",
        translation: "Wenig wusste ich, dass diese Entscheidung mein ganzes Leben vollständig ändern würde.",
        options: ["did I know", "I knew", "I did know", "knew I"],
        correct: "did I know",
        explanation: "Nach 'little' am Anfang: Inversion 'did I know'. Diese Unwissenheit über lebensverändernde Konsequenzen der Entscheidung ist häufige menschliche Erfahrung."
      },
      {
        id: "word_order_12",
        question: "I can't remember _____ at the conference last month.",
        translation: "Ich kann mich nicht erinnern, ob ich sie auf der Konferenz letzten Monat gesehen habe.",
        options: ["if I saw her", "did I see her", "I saw her", "saw I her"],
        correct: "if I saw her",
        explanation: "Nach 'remember': 'if' mit normaler Wortfolge für unsichere Erinnerung. Diese Gedächtnislücke über Konferenzbegegnung ist bei vielen Teilnehmern normal."
      },
      {
        id: "word_order_13",
        question: "Seldom _____ such kindness from complete strangers in public places.",
        translation: "Selten habe ich solche Freundlichkeit von völlig Fremden an öffentlichen Orten erlebt.",
        options: ["have I experienced", "I have experienced", "I experienced", "experienced I"],
        correct: "have I experienced",
        explanation: "Nach 'seldom': Inversion 'have I experienced'. Diese seltene Freundlichkeitserfahrung von Unbekannten ist besonders berührend und unvergesslich."
      },
      {
        id: "word_order_14",
        question: "No sooner _____ the door than the phone started ringing loudly.",
        translation: "Kaum hatte ich die Tür geöffnet, als das Telefon laut zu klingeln begann.",
        options: ["had I opened", "I had opened", "I opened", "opened I"],
        correct: "had I opened",
        explanation: "Nach 'no sooner': Inversion mit Past Perfect 'had I opened'. Dieses perfekte Timing zwischen Türöffnen und Telefonklingeln ist typischer Zufall."
      },
      {
        id: "word_order_15",
        question: "I don't know _____ for dinner tonight at the new restaurant.",
        translation: "Ich weiß nicht, was ich heute Abend im neuen Restaurant zum Abendessen bestellen soll.",
        options: ["what to order", "what order", "to order what", "order what"],
        correct: "what to order",
        explanation: "Nach Fragewort: 'what' + 'to' + Infinitiv: 'what to order'. Keine Inversion. Diese Entscheidungsschwierigkeit bei Restaurant-Menü ist häufige Erfahrung."
      }
    ]
  },

  separable_verbs: {
    name: "Separable & Inseparable Verbs",
    description: "Trennbare Verben - aufstehen, anrufen, verstehen richtig verwenden",
    icon: Split,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "sep_1",
        question: "I usually wake _____ at seven o'clock every morning without alarm.",
        translation: "Ich wache normalerweise jeden Morgen ohne Wecker um sieben Uhr auf.",
        options: ["up", "on", "out", "off"],
        correct: "up",
        explanation: "Trennbares Verb 'wake up' (aufwachen): Partikel 'up' trennt sich. Diese morgendliche Aufwachzeit ohne Wecker zeigt natürlichen Schlafrhythmus."
      },
      {
        id: "sep_2",
        question: "Please turn _____ the lights when you leave the room empty.",
        translation: "Bitte schalte die Lichter aus, wenn du den leeren Raum verlässt.",
        options: ["off", "on", "up", "down"],
        correct: "off",
        explanation: "Trennbar 'turn off' (ausschalten): Diese Energiespar-Bitte ist umweltbewusste Gewohnheit beim Verlassen ungenutzter Räume."
      },
      {
        id: "sep_3",
        question: "Can you pick _____ the kids from school at three today?",
        translation: "Kannst du die Kinder heute um drei von der Schule abholen?",
        options: ["up", "out", "off", "on"],
        correct: "up",
        explanation: "Trennbar 'pick up' (abholen): Diese Bitte um Kinderabholung ist praktische Koordination familiärer Verpflichtungen zwischen Eltern."
      },
      {
        id: "sep_4",
        question: "I need to look _____ this word in the dictionary right now.",
        translation: "Ich muss dieses Wort jetzt sofort im Wörterbuch nachschlagen.",
        options: ["up", "at", "for", "after"],
        correct: "up",
        explanation: "Trennbar 'look up' (nachschlagen): Diese Wortsuche im Wörterbuch ist häufige Lernaktivität beim Fremdsprachenerwerb."
      },
      {
        id: "sep_5",
        question: "They called _____ the meeting because of the bad weather conditions.",
        translation: "Sie sagten das Treffen wegen der schlechten Wetterbedingungen ab.",
        options: ["off", "up", "out", "on"],
        correct: "off",
        explanation: "Trennbar 'call off' (absagen): Diese wetterbedingte Absage ist Sicherheitsmaßnahme bei gefährlichen Bedingungen für Teilnehmer."
      },
      {
        id: "sep_6",
        question: "I ran _____ an old friend from university at the supermarket yesterday.",
        translation: "Ich traf gestern zufällig einen alten Universitätsfreund im Supermarkt.",
        options: ["into", "up", "out", "off"],
        correct: "into",
        explanation: "Trennbar 'run into' (zufällig treffen): Diese unerwartete Begegnung beim Einkaufen ist angenehme Überraschung und Gelegenheit zum Plaudern."
      },
      {
        id: "sep_7",
        question: "She grew _____ in a small village in the countryside near mountains.",
        translation: "Sie wuchs in einem kleinen Dorf auf dem Land nahe Bergen auf.",
        options: ["up", "out", "on", "off"],
        correct: "up",
        explanation: "Trennbar 'grow up' (aufwachsen): Diese ländliche Kindheit in Bergdorf-Umgebung ist prägende frühe Lebenserfahrung mit Naturverbundenheit."
      },
      {
        id: "sep_8",
        question: "I'll think _____ your proposal and give you my answer tomorrow morning.",
        translation: "Ich werde über deinen Vorschlag nachdenken und dir morgen früh meine Antwort geben.",
        options: ["about", "over", "on", "up"],
        correct: "about",
        explanation: "Phrase 'think about' (nachdenken über): Diese Bedenkzeit bis morgen erlaubt gründliche Überlegung vor wichtiger Entscheidung."
      },
      {
        id: "sep_9",
        question: "The plane took _____ on time despite the foggy weather outside.",
        translation: "Das Flugzeug hob trotz nebligem Wetter draußen pünktlich ab.",
        options: ["off", "up", "out", "on"],
        correct: "off",
        explanation: "Trennbar 'take off' (abheben): Diese pünktliche Abflug trotz Nebel zeigt gute Sichtbedingungen oder erfahrene Piloten."
      },
      {
        id: "sep_10",
        question: "We need to figure _____ how to solve this problem quickly.",
        translation: "Wir müssen schnell herausfinden, wie wir dieses Problem lösen.",
        options: ["out", "up", "on", "off"],
        correct: "out",
        explanation: "Trennbar 'figure out' (herausfinden/lösen): Diese Dringlichkeit bei Problemlösung erfordert kreatives Denken und schnelle Entscheidungen."
      },
      {
        id: "sep_11",
        question: "I'm looking forward _____ seeing you again next week at the conference.",
        translation: "Ich freue mich darauf, dich nächste Woche auf der Konferenz wiederzusehen.",
        options: ["to", "for", "at", "on"],
        correct: "to",
        explanation: "Feste Phrase 'look forward to' (sich freuen auf): Diese Vorfreude auf Wiedersehen nächste Woche ist positive Emotion vor Konferenztreffen."
      },
      {
        id: "sep_12",
        question: "Don't give _____ - you're almost there at the finish line!",
        translation: "Gib nicht auf - du bist fast an der Ziellinie!",
        options: ["up", "in", "out", "off"],
        correct: "up",
        explanation: "Trennbar 'give up' (aufgeben): Diese Ermutigung kurz vor Ziel motiviert zu letzter Anstrengung trotz Erschöpfung."
      },
      {
        id: "sep_12",
        question: "I need to fill _____ this application form before the deadline tomorrow.",
        translation: "Ich muss dieses Antragsformular vor der morgigen Deadline ausfüllen.",
        options: ["out", "in", "up", "on"],
        correct: "out",
        explanation: "Trennbar 'fill out' (ausfüllen): Diese Formular-Deadline morgen erfordert zeitnahes Handeln für rechtzeitige Einreichung."
      },
      {
        id: "sep_14",
        question: "The concert was called _____ due to the singer's sudden illness.",
        translation: "Das Konzert wurde wegen der plötzlichen Erkrankung des Sängers abgesagt.",
        options: ["off", "out", "up", "on"],
        correct: "off",
        explanation: "Trennbar 'call off' (absagen): Diese kurzfristige Konzertabsage wegen Krankheit ist enttäuschend für Ticketinhaber."
      },
      {
        id: "sep_15",
        question: "I stayed _____ all night studying for my final exam tomorrow morning.",
        translation: "Ich blieb die ganze Nacht wach und lernte für meine morgige Abschlussprüfung.",
        options: ["up", "on", "out", "off"],
        correct: "up",
        explanation: "Phrase 'stay up' (wach bleiben): Diese Lernnacht vor Prüfung ist intensive Last-Minute-Vorbereitung, zeigt aber möglicherweise unzureichende frühere Planung."
      }
    ]
  },

  adjective_endings: {
    name: "Adjective Endings & Order",
    description: "Adjektivendungen - Deklination und richtige Reihenfolge im Englischen",
    icon: Shirt,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "adj_1",
        question: "She bought a beautiful _____ dress for the wedding ceremony.",
        translation: "Sie kaufte ein schönes weißes Kleid für die Hochzeitszeremonie.",
        options: ["white", "white's", "whites", "white one"],
        correct: "white",
        explanation: "Im Englischen sind Adjektive UNVERÄNDERLICH: keine Endungen wie im Deutschen (-es, -en, -er). Diese Einfachheit macht englische Adjektive leichter zu lernen."
      },
      {
        id: "adj_2",
        question: "I prefer the _____ car over there with the sunroof.",
        translation: "Ich bevorzuge das blaue Auto dort drüben mit dem Schiebedach.",
        options: ["blue", "blues", "blue's", "bluen"],
        correct: "blue",
        explanation: "Adjektive ändern sich NICHT: immer 'blue', nie 'blues' oder 'bluen'. Diese Konsistenz unterscheidet sich stark von deutscher Adjektivdeklination."
      },
      {
        id: "adj_3",
        question: "He lives in a big old _____ house at the end of the quiet street.",
        translation: "Er wohnt in einem großen alten Holzhaus am Ende der ruhigen Straße.",
        options: ["wooden", "wood", "woods", "wooden's"],
        correct: "wooden",
        explanation: "REIHENFOLGE im Englischen: Größe-Alter-Material: 'big old wooden'. Im Deutschen flexibler. Diese fixe Ordnung ist wichtige englische Regel."
      },
      {
        id: "adj_4",
        question: "She has beautiful long _____ hair that reaches down to her waist.",
        translation: "Sie hat schönes langes blondes Haar, das bis zur Taille reicht.",
        options: ["blonde", "blond", "blondes", "blonde's"],
        correct: "blonde",
        explanation: "Reihenfolge: Meinung-Größe-Farbe: 'beautiful long blonde'. Adjektive bleiben unverändert. Dieses lange Haar ist auffälliges Merkmal."
      },
      {
        id: "adj_5",
        question: "I need three _____ eggs for this recipe - not brown ones.",
        translation: "Ich brauche drei weiße Eier für dieses Rezept - keine braunen.",
        options: ["white", "whites", "white's", "whiten"],
        correct: "white",
        explanation: "Nach ZAHLEN: Adjektiv bleibt gleich 'three white eggs'. Im Deutschen auch keine Veränderung. Diese Eierfarbenpräferenz ist Rezeptanforderung."
      },
      {
        id: "adj_6",
        question: "They live in a charming little French _____ near the river.",
        translation: "Sie wohnen in einem charmanten kleinen französischen Dorf nahe dem Fluss.",
        options: ["village", "villages", "village's", "villaged"],
        correct: "village",
        explanation: "Reihenfolge: Meinung-Größe-Herkunft-Nomen: 'charming little French village'. Diese idyllische Flussdorf-Lage ist malerisches Wohnumfeld."
      },
      {
        id: "adj_7",
        question: "The _____ woman helped me find my way to the train station.",
        translation: "Die freundliche alte Frau half mir, den Weg zum Bahnhof zu finden.",
        options: ["kind old", "old kind", "kind older", "older kind"],
        correct: "kind old",
        explanation: "Reihenfolge: Meinung VOR Alter: 'kind old woman'. Diese Hilfsbereitschaft von älterer Person ist herzliche Geste an Verlorene."
      },
      {
        id: "adj_8",
        question: "I want to buy a nice new _____ for my living room.",
        translation: "Ich möchte einen schönen neuen Lederstuhl für mein Wohnzimmer kaufen.",
        options: ["leather chair", "chair leather", "leather's chair", "leathern chair"],
        correct: "leather chair",
        explanation: "Material-Adjektiv VOR Nomen: 'leather chair'. Diese Möbelkauf-Entscheidung für Leder verbindet Stil mit Komfort im Wohnbereich."
      },
      {
        id: "adj_9",
        question: "She wore an elegant black _____ to the formal dinner party.",
        translation: "Sie trug ein elegantes schwarzes Seidenkleid zur formellen Abendgesellschaft.",
        options: ["silk dress", "dress silk", "silken dress", "silk's dress"],
        correct: "silk dress",
        explanation: "Reihenfolge: Meinung-Farbe-Material: 'elegant black silk dress'. Diese formelle Kleiderauswahl ist angemessen für gehobenen Anlass."
      },
      {
        id: "adj_10",
        question: "The children played in the large green _____ behind the house.",
        translation: "Die Kinder spielten im großen grünen Park hinter dem Haus.",
        options: ["park", "parks", "park's", "parked"],
        correct: "park",
        explanation: "Größe VOR Farbe: 'large green park'. Diese Parkspielgelegenheit hinter Haus ist sichere Kinderspielzone in Natur."
      },
      {
        id: "adj_11",
        question: "I found an interesting old Spanish _____ at the antique market.",
        translation: "Ich fand auf dem Antiquitätenmarkt ein interessantes altes spanisches Buch.",
        options: ["book", "books", "book's", "booked"],
        correct: "book",
        explanation: "Reihenfolge: Meinung-Alter-Herkunft: 'interesting old Spanish book'. Dieser Antiquitätenmarkt-Fund ist wertvolles historisches Objekt."
      },
      {
        id: "adj_12",
        question: "We stayed in a cozy little mountain _____ during our vacation.",
        translation: "Wir wohnten während unseres Urlaubs in einer gemütlichen kleinen Berghütte.",
        options: ["cabin", "cabins", "cabin's", "cabined"],
        correct: "cabin",
        explanation: "Reihenfolge: Meinung-Größe-Typ: 'cozy little mountain cabin'. Diese Berghütte ist idyllischer Urlaubsrückzugsort in Natur."
      },
      {
        id: "adj_13",
        question: "He drives a fast red Italian _____ that everyone admires greatly.",
        translation: "Er fährt einen schnellen roten italienischen Sportwagen, den alle sehr bewundern.",
        options: ["sports car", "car sports", "sport's car", "sporting car"],
        correct: "sports car",
        explanation: "Reihenfolge: Geschwindigkeit-Farbe-Herkunft-Typ: 'fast red Italian sports car'. Dieses bewunderte Auto ist Statussymbol und Leidenschaft."
      },
      {
        id: "adj_14",
        question: "The soup tastes _____ - you should add more salt and pepper.",
        translation: "Die Suppe schmeckt fade - du solltest mehr Salz und Pfeffer hinzufügen.",
        options: ["bland", "blandly", "blander", "blands"],
        correct: "bland",
        explanation: "Nach 'taste' (Zustandsverb): Adjektiv OHNE -ly: 'tastes bland'. Dieser fade Geschmack zeigt Würzmangel und braucht Verbesserung."
      },
      {
        id: "adj_15",
        question: "I want all the _____ plates, not the broken ones from before.",
        translation: "Ich möchte alle sauberen Teller, nicht die zerbrochenen von vorher.",
        options: ["clean", "cleans", "clean's", "cleaner"],
        correct: "clean",
        explanation: "Vor Plural: Adjektiv bleibt GLEICH 'all clean plates'. Keine Plural-s am Adjektiv. Diese Teller-Selektion vermeidet unbrauchbare kaputte."
      }
    ]
  },

  prepositions_time_place: {
    name: "Prepositions of Time & Place",
    description: "Präpositionen - in, at, on für Zeit und Ort korrekt unterscheiden",
    icon: ArrowRightLeft,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_1",
        question: "I was born _____ 1995 in a small hospital near my hometown.",
        translation: "Ich wurde 1995 in einem kleinen Krankenhaus nahe meiner Heimatstadt geboren.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Für JAHR nutzen wir 'in': 'in 1995' (im Jahr 1995). Diese Jahresangabe gibt ungefähren Lebensalter-Kontext für Person."
      },
      {
        id: "prep_2",
        question: "The meeting starts _____ 3 PM sharp - don't be late please.",
        translation: "Das Treffen beginnt um genau 15 Uhr - sei bitte nicht zu spät.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Für UHRZEIT nutzen wir 'at': 'at 3 PM' (um 15 Uhr). Diese präzise Zeitangabe ist wichtig für pünktliche Meetingteilnahme."
      },
      {
        id: "prep_3",
        question: "My birthday is _____ the 25th of December every single year.",
        translation: "Mein Geburtstag ist jedes einzelne Jahr am 25. Dezember.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Für DATUM nutzen wir 'on': 'on the 25th' (am 25.). Dieser Weihnachts-Geburtstag ist besonderes Datum mit doppelter Feier."
      },
      {
        id: "prep_4",
        question: "I live _____ London in a small apartment near the city center.",
        translation: "Ich wohne in London in einer kleinen Wohnung nahe dem Stadtzentrum.",
        options: ["in", "at", "on", "by"],
        correct: "in",
        explanation: "Für STADT nutzen wir 'in': 'in London' (in London). Diese zentrumsnahe Wohnlage ist praktisch für urbanes Leben."
      },
      {
        id: "prep_5",
        question: "She's waiting _____ the bus stop for the number 42 bus.",
        translation: "Sie wartet an der Bushaltestelle auf den Bus Nummer 42.",
        options: ["at", "in", "on", "by"],
        correct: "at",
        explanation: "Für HALTESTELLE nutzen wir 'at': 'at the bus stop' (an der Haltestelle). Dieses Warten auf spezifischen Bus ist tägliche Pendelroutine."
      },
      {
        id: "prep_6",
        question: "I'll see you _____ Monday morning at the office conference room.",
        translation: "Ich sehe dich am Montagmorgen im Büro-Konferenzraum.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Für WOCHENTAG nutzen wir 'on': 'on Monday' (am Montag). Dieser Montag-Termin markiert Wochenstart-Meeting."
      },
      {
        id: "prep_7",
        question: "The books are _____ the table - you can take whichever you want.",
        translation: "Die Bücher sind auf dem Tisch - du kannst nehmen, welches du willst.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Für AUF FLÄCHE nutzen wir 'on': 'on the table' (auf dem Tisch). Dieses Buch-Angebot erlaubt freie Auswahl."
      },
      {
        id: "prep_8",
        question: "We arrived _____ the airport two hours before our international flight.",
        translation: "Wir kamen zwei Stunden vor unserem internationalen Flug am Flughafen an.",
        options: ["at", "in", "on", "to"],
        correct: "at",
        explanation: "Für FLUGHAFEN nutzen wir 'at': 'at the airport' (am Flughafen). Diese zweistündige Vorlaufzeit ist empfohlener Puffer für Internationa lflüge."
      },
      {
        id: "prep_9",
        question: "I'll be there _____ five minutes - just wait for me a bit.",
        translation: "Ich bin in fünf Minuten da - warte nur kurz auf mich.",
        options: ["in", "at", "on", "by"],
        correct: "in",
        explanation: "Für ZUKÜNFTIGE ZEITSPANNE nutzen wir 'in': 'in five minutes' (in fünf Minuten). Diese kurze Wartezeit ist überschaubar."
      },
      {
        id: "prep_10",
        question: "They got married _____ summer in a beautiful garden ceremony.",
        translation: "Sie heirateten im Sommer bei einer schönen Gartenz eremonie.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Für JAHRESZEIT nutzen wir 'in': 'in summer' (im Sommer). Diese Sommerhochzeit im Garten ist romantische Wahl."
      },
      {
        id: "prep_11",
        question: "I'll meet you _____ the corner of Main Street and Oak Avenue.",
        translation: "Ich treffe dich an der Ecke von Main Street und Oak Avenue.",
        options: ["at", "on", "in", "by"],
        correct: "at",
        explanation: "Für ECKE nutzen wir 'at': 'at the corner' (an der Ecke). Dieser Straßenecken-Treffpunkt ist leicht zu findende zentrale Stelle."
      },
      {
        id: "prep_12",
        question: "The picture is hanging _____ the wall above the comfortable sofa.",
        translation: "Das Bild hängt an der Wand über dem bequemen Sofa.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Für AN WAND nutzen wir 'on': 'on the wall' (an der Wand). Diese Bildposition über Sofa ist klassische Wohnzimmerdekoration."
      },
      {
        id: "prep_13",
        question: "I usually go jogging _____ the morning before breakfast time.",
        translation: "Ich gehe normalerweise morgens vor dem Frühstück joggen.",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Für TAGESZEIT nutzen wir 'in': 'in the morning' (morgens/am Morgen). Diese Morgen-Jogging-Routine ist gesunde Tagesstart-Gewohnheit."
      },
      {
        id: "prep_14",
        question: "She lives _____ the third floor of a modern apartment building.",
        translation: "Sie wohnt im dritten Stock eines modernen Wohngebäudes.",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Für STOCKWERK nutzen wir 'on': 'on the third floor' (im dritten Stock). Im Deutschen 'im'. Diese Wohnung ohne Aufzug erfordert Treppenlaufen."
      },
      {
        id: "prep_15",
        question: "I'll finish this work _____ Friday evening at the latest possible.",
        translation: "Ich werde diese Arbeit spätestens bis Freitagabend fertigstellen.",
        options: ["by", "in", "on", "at"],
        correct: "by",
        explanation: "Für BIS (Deadline) nutzen wir 'by': 'by Friday' (bis Freitag). Diese späteste Abgabefrist gibt klaren zeitlichen Rahmen für Fertigstellung."
      }
    ]
  }
};

export default part4Categories;
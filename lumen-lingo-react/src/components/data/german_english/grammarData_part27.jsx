/**
 * GERMAN → ENGLISH GRAMMAR - PART 27
 * 4 categories, 15 questions each
 */

import { AlertTriangle, Infinity, CheckCircle, Timer } from "lucide-react";

export const part27Categories = {
  even_if_vs_even_though: {
    name: "Even If vs Even Though",
    description: "Verstärkte Bedingungen - even if und even though unterscheiden",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "even_1",
        question: "_____ it rains tomorrow heavily, we'll still go hiking in the mountains.",
        translation: "Selbst wenn es morgen stark regnet, werden wir trotzdem in den Bergen wandern gehen.",
        options: ["Even if", "Even though", "both correct", "Although"],
        correct: "Even if",
        explanation: "'EVEN IF' = selbst WENN (hypothetisch): Diese Wander-Entschlossenheit gilt unabhängig vom zukünftigen Wetter."
      },
      {
        id: "even_2",
        question: "_____ she's very busy with work, she always makes time for her family.",
        translation: "Obwohl sie sehr beschäftigt mit Arbeit ist, macht sie immer Zeit für ihre Familie.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = obwohl (FAKT jetzt): Diese Familie-Priorität trotz Arbeits-Belastung zeigt gute Work-Life-Balance."
      },
      {
        id: "even_3",
        question: "I wouldn't buy that car _____ it were much cheaper than the asking price.",
        translation: "Ich würde jenes Auto nicht kaufen, selbst wenn es viel billiger wäre als der Angebotspreis.",
        options: ["even if", "even though", "both correct", "although"],
        correct: "even if",
        explanation: "'EVEN IF' + WERE (Konjunktiv): Diese absolute Kauf-Ablehnung gilt sogar bei hypothetischer Preis-Reduzierung."
      },
      {
        id: "even_4",
        question: "_____ he apologized sincerely many times, she still won't forgive him completely.",
        translation: "Obwohl er viele Male aufrichtig um Entschuldigung bat, wird sie ihm noch nicht komplett vergeben.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = trotz REALER Entschuldigungen: Diese anhaltende Nicht-Vergebung zeigt tiefe Verletzung trotz Reue."
      },
      {
        id: "even_5",
        question: "_____ you offered me a million euros, I wouldn't betray my best friend!",
        translation: "Selbst wenn du mir eine Million Euro anbieten würdest, würde ich meinen besten Freund nicht verraten!",
        options: ["Even if", "Even though", "both correct", "If"],
        correct: "Even if",
        explanation: "'EVEN IF' + hypothetisches ANGEBOT: Diese bedingungslose Freundschafts-Treue gilt selbst bei extremer finanzieller Versuchung."
      },
      {
        id: "even_6",
        question: "_____ I'm tired after the long day, I need to finish this work tonight.",
        translation: "Obwohl ich nach dem langen Tag müde bin, muss ich diese Arbeit heute Abend beenden.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = trotz AKTUELLER Müdigkeit: Diese Arbeits-Notwendigkeit ignoriert physische Erschöpfung für Deadline."
      },
      {
        id: "even_7",
        question: "_____ we left now immediately, we'd still arrive late to the meeting.",
        translation: "Selbst wenn wir jetzt sofort losgehen würden, würden wir trotzdem zu spät zum Meeting kommen.",
        options: ["Even if", "Even though", "both correct", "If"],
        correct: "Even if",
        explanation: "'EVEN IF' + hypothetisches JETZT-Szenario: Diese Verspätungs-Unvermeidbarkeit zeigt zu großen Zeit-Rückstand."
      },
      {
        id: "even_8",
        question: "_____ the restaurant has good reviews online, the food was disappointing actually.",
        translation: "Obwohl das Restaurant gute Online-Bewertungen hat, war das Essen tatsächlich enttäuschend.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = trotz FAKTISCHER guter Bewertungen: Diese Enttäuschung trotz Erwartung zeigt Bewertungs-Realitäts-Diskrepanz."
      },
      {
        id: "even_9",
        question: "_____ she studied harder than before, she might still fail the difficult exam.",
        translation: "Selbst wenn sie härter als zuvor lernt, könnte sie die schwere Prüfung trotzdem nicht bestehen.",
        options: ["Even if", "Even though", "both correct", "Although"],
        correct: "Even if",
        explanation: "'EVEN IF' + hypothetisch verstärktes LERNEN: Diese Unsicherheit trotz möglicher Anstrengung zeigt extreme Prüfungs-Schwierigkeit."
      },
      {
        id: "even_10",
        question: "_____ it's raining heavily outside now, the children want to play in garden.",
        translation: "Obwohl es draußen jetzt stark regnet, wollen die Kinder im Garten spielen.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = trotz AKTUELLEM Regen: Dieser kindliche Spiel-Wunsch trotz Wetter zeigt Kinder-Enthusiasmus über Vernunft."
      },
      {
        id: "even_11",
        question: "_____ I had all the money in the world, I'd still keep working happily.",
        translation: "Selbst wenn ich alles Geld der Welt hätte, würde ich trotzdem glücklich weiterarbeiten.",
        options: ["Even if", "Even though", "both correct", "If"],
        correct: "Even if",
        explanation: "'EVEN IF' + hypothetischer REICHTUM: Diese Arbeits-Fortsetzungs-Aussage zeigt Wert von Arbeit über finanzielle Unabhängigkeit."
      },
      {
        id: "even_12",
        question: "_____ he's not feeling well today, he came to work because of the important presentation.",
        translation: "Obwohl er sich heute nicht wohl fühlt, kam er wegen der wichtigen Präsentation zur Arbeit.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = trotz AKTUELLEN Unwohlseins: Diese Arbeits-Pflichterfüllung trotz Krankheit zeigt starke Verantwortung."
      },
      {
        id: "even_13",
        question: "_____ you don't believe me now, you'll see that I was right later eventually.",
        translation: "Selbst wenn du mir jetzt nicht glaubst, wirst du später schließlich sehen, dass ich recht hatte.",
        options: ["Even if", "Even though", "both correct", "Although"],
        correct: "Even if",
        explanation: "'EVEN IF' + hypothetischer UNGLAUBE: Diese selbstsichere Aussage ist überzeugt von späterer Wahrheits-Bestätigung."
      },
      {
        id: "even_14",
        question: "_____ we've known each other for years, I still learn new things about her.",
        translation: "Obwohl wir uns seit Jahren kennen, lerne ich noch immer neue Dinge über sie.",
        options: ["Even though", "Even if", "both correct", "Despite"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' = trotz LANGER Bekanntschaft: Diese fortgesetzte Entdeckung zeigt Personen-Komplexität und Beziehungs-Tiefe."
      },
      {
        id: "even_15",
        question: "_____ the price doubles next week, I'm still planning to buy that house.",
        translation: "Selbst wenn der Preis nächste Woche sich verdoppelt, plane ich trotzdem, jenes Haus zu kaufen.",
        options: ["Even if", "Even though", "both correct", "If"],
        correct: "Even if",
        explanation: "'EVEN IF' + hypothetische PREIS-Steigerung: Diese Kauf-Entschlossenheit trotz möglicher Verteuerung zeigt starkes Haus-Interesse."
      }
    ]
  },

  no_matter: {
    name: "No Matter What/Who/When",
    description: "Unabhängigkeit - no matter Konstruktionen für Betonung",
    icon: Infinity,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "no_matter_1",
        question: "_____ happens tomorrow, we'll face it together as a strong united team.",
        translation: "Egal was morgen passiert, wir werden es zusammen als starkes vereintes Team bewältigen.",
        options: ["No matter what", "Whatever", "both correct", "Anything"],
        correct: "both correct",
        explanation: "'NO MATTER WHAT' oder 'WHATEVER' beide = egal was: Diese Team-Solidarität gilt für alle möglichen Zukunfts-Szenarien."
      },
      {
        id: "no_matter_2",
        question: "_____ you go in this beautiful city, you'll find friendly helpful people everywhere.",
        translation: "Egal wohin du in dieser schönen Stadt gehst, du wirst überall freundliche hilfsbereite Leute finden.",
        options: ["No matter where", "Wherever", "both correct", "Anywhere"],
        correct: "both correct",
        explanation: "'NO MATTER WHERE' oder 'WHEREVER': Diese Stadt-Freundlichkeit ist überall konstant, eine tolle Stadt-Qualität."
      },
      {
        id: "no_matter_3",
        question: "I'll support your decision, _____ it is that you finally choose to do.",
        translation: "Ich werde deine Entscheidung unterstützen, egal was es ist, das du schließlich zu tun wählst.",
        options: ["no matter what", "whatever", "both correct", "anything"],
        correct: "both correct",
        explanation: "'NO MATTER WHAT' = bedingungslose Unterstützung: Diese Rückendeckung gilt für jede mögliche Entscheidungs-Option."
      },
      {
        id: "no_matter_4",
        question: "_____ hard I try to understand, I just can't solve this complicated math problem!",
        translation: "Egal wie sehr ich versuche zu verstehen, ich kann dieses komplizierte Mathe-Problem einfach nicht lösen!",
        options: ["No matter how", "However", "both correct", "Although"],
        correct: "both correct",
        explanation: "'NO MATTER HOW' = trotz aller Anstrengung: Diese Verständnis-Unfähigkeit trotz Bemühung zeigt Problem-Schwierigkeit."
      },
      {
        id: "no_matter_5",
        question: "_____ wins the election next month, there will be big changes in the country.",
        translation: "Egal wer nächsten Monat die Wahl gewinnt, es wird große Veränderungen im Land geben.",
        options: ["No matter who", "Whoever", "both correct", "Anyone"],
        correct: "both correct",
        explanation: "'NO MATTER WHO' oder 'WHOEVER': Diese Veränderungs-Gewissheit gilt unabhängig vom Wahl-Sieger."
      },
      {
        id: "no_matter_6",
        question: "_____ you decide to go on vacation, send me a postcard please!",
        translation: "Egal wohin du in den Urlaub zu gehen entscheidest, schick mir bitte eine Postkarte!",
        options: ["No matter where", "Wherever", "both correct", "Anywhere"],
        correct: "both correct",
        explanation: "'NO MATTER WHERE' = unabhängig vom Urlaubs-Ziel: Diese Postkarten-Bitte gilt für jeden Reise-Ort weltweit."
      },
      {
        id: "no_matter_7",
        question: "_____ much it costs, I need to buy this medicine for my health treatment.",
        translation: "Egal wie viel es kostet, ich muss diese Medizin für meine Gesundheits-Behandlung kaufen.",
        options: ["No matter how", "However", "both correct", "Although"],
        correct: "both correct",
        explanation: "'NO MATTER HOW' = Preis-Unabhängigkeit: Diese Gesundheits-Priorität über Kosten zeigt medizinische Notwendigkeit."
      },
      {
        id: "no_matter_8",
        question: "I'll be there for you, _____ you need me most during difficult times ahead.",
        translation: "Ich werde für dich da sein, egal wann du mich am meisten während schwerer Zeiten brauchst.",
        options: ["no matter when", "whenever", "both correct", "anytime"],
        correct: "both correct",
        explanation: "'NO MATTER WHEN' oder 'WHENEVER': Diese bedingungslose Unterstützungs-Zusage gilt zu jeder Zeit bei Bedarf."
      },
      {
        id: "no_matter_9",
        question: "_____ they say about you negatively, don't let it affect your confidence level!",
        translation: "Egal was sie negativ über dich sagen, lass es nicht dein Selbstvertrauen beeinflussen!",
        options: ["No matter what", "Whatever", "both correct", "Anything"],
        correct: "both correct",
        explanation: "'NO MATTER WHAT' = unabhängig von Kritik: Dieser Selbstvertrauen-Schutz-Rat ignoriert negative fremde Meinungen."
      },
      {
        id: "no_matter_10",
        question: "_____ late you arrive at the party, you're always welcome here with us!",
        translation: "Egal wie spät du bei der Party ankommst, du bist hier bei uns immer willkommen!",
        options: ["No matter how", "However", "both correct", "Although"],
        correct: "both correct",
        explanation: "'NO MATTER HOW' + late: Diese zeitlich unbegrenzte Willkommens-Geste ist großzügige gastfreundliche Einladung."
      },
      {
        id: "no_matter_11",
        question: "_____ you choose to marry, make sure they make you happy every day.",
        translation: "Egal wen du zu heiraten wählst, stelle sicher, dass sie dich jeden Tag glücklich machen.",
        options: ["No matter who", "Whoever", "both correct", "Anyone"],
        correct: "both correct",
        explanation: "'NO MATTER WHO' = Partner-unabhängiger Rat: Diese Glücks-Priorität ist wichtigster Ehe-Partner-Auswahl-Faktor."
      },
      {
        id: "no_matter_12",
        question: "_____ difficult the task seems initially, don't give up trying at all!",
        translation: "Egal wie schwierig die Aufgabe anfangs scheint, gib überhaupt nicht auf zu versuchen!",
        options: ["No matter how", "However", "both correct", "Although"],
        correct: "both correct",
        explanation: "'NO MATTER HOW' + Adjektiv: Diese Durchhalte-Ermutigung gilt bei jeder Schwierigkeits-Stufe der Herausforderung."
      },
      {
        id: "no_matter_13",
        question: "I'll love you _____ you do or say in the future years ahead.",
        translation: "Ich werde dich lieben, egal was du in den zukünftigen Jahren tust oder sagst.",
        options: ["no matter what", "whatever", "both correct", "anything"],
        correct: "both correct",
        explanation: "'NO MATTER WHAT' = bedingungslose Liebe: Diese absolute Liebes-Zusage ist unabhängig von zukünftigen Handlungen."
      },
      {
        id: "no_matter_14",
        question: "_____ long it takes to achieve, never stop pursuing your dreams and goals!",
        translation: "Egal wie lange es dauert zu erreichen, hör nie auf, deine Träume und Ziele zu verfolgen!",
        options: ["No matter how", "However", "both correct", "Although"],
        correct: "both correct",
        explanation: "'NO MATTER HOW' + long: Diese zeit-unabhängige Traum-Verfolgungs-Ermutigung ist motivierende Lebens-Weisheit."
      },
      {
        id: "no_matter_15",
        question: "_____ calls asking for donations, don't give them your bank details ever!",
        translation: "Egal wer anruft und um Spenden bittet, gib ihnen niemals deine Bank-Details!",
        options: ["No matter who", "Whoever", "both correct", "Anyone"],
        correct: "both correct",
        explanation: "'NO MATTER WHO' = person-unabhängige Warnung: Diese Sicherheits-Regel schützt vor Betrugs-Versuchen durch Fremde."
      }
    ]
  },

  provided_providing: {
    name: "Provided/Providing That",
    description: "Bedingungen - provided that für formelle Voraussetzungen",
    icon: CheckCircle,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "prov_1",
        question: "You can borrow my car _____ you drive carefully and return it with full tank.",
        translation: "Du kannst mein Auto leihen, vorausgesetzt du fährst vorsichtig und gibst es mit vollem Tank zurück.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED/PROVIDING THAT' = vorausgesetzt dass (formell): Diese Auto-Leih-Bedingungen sind klare Erwartungen für Nutzung."
      },
      {
        id: "prov_2",
        question: "We'll help you move house _____ you buy pizza for everyone afterwards as thanks.",
        translation: "Wir helfen dir beim Umzug, vorausgesetzt du kaufst danach als Dank Pizza für alle.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED THAT' = formelle BEDINGUNG: Diese Pizza-Gegenleistung für Umzugs-Hilfe ist humorvolle Bezahlung."
      },
      {
        id: "prov_3",
        question: "You can leave work early today _____ you finish all your assigned tasks first.",
        translation: "Du kannst heute früh von der Arbeit gehen, vorausgesetzt du beendest zuerst all deine zugewiesenen Aufgaben.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Erlaubnis mit BEDINGUNG: Diese Früh-Geh-Erlaubnis ist an Aufgaben-Vollständigkeit gekoppelt."
      },
      {
        id: "prov_4",
        question: "The meeting can be postponed _____ everyone agrees to the new date proposed.",
        translation: "Das Meeting kann verschoben werden, vorausgesetzt alle stimmen dem vorgeschlagenen neuen Datum zu.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Verschiebe-VORAUSSETZUNG: Diese Termin-Änderung braucht Gruppen-Konsens für Umsetzung."
      },
      {
        id: "prov_5",
        question: "I'll lend you the money _____ you promise to pay me back next month.",
        translation: "Ich leihe dir das Geld, vorausgesetzt du versprichst, es mir nächsten Monat zurückzuzahlen.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Leih-BEDINGUNG: Diese Rückzahlungs-Erwartung ist vernünftige Voraussetzung für Geld-Leihe."
      },
      {
        id: "prov_6",
        question: "You may use my office space _____ you keep it clean and tidy always.",
        translation: "Du darfst meinen Büro-Raum nutzen, vorausgesetzt du hältst ihn immer sauber und ordentlich.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Nutzungs-REGEL: Diese Sauberkeits-Bedingung ist respektvolle Erwartung bei Raum-Teilung."
      },
      {
        id: "prov_7",
        question: "She'll come to the party _____ she doesn't have to work late that evening.",
        translation: "Sie wird zur Party kommen, vorausgesetzt sie muss an jenem Abend nicht spät arbeiten.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Teilnahme-VORAUSSETZUNG: Diese Party-Zusage ist abhängig von Arbeits-Zeit-Ende."
      },
      {
        id: "prov_8",
        question: "The plan will work perfectly _____ nothing unexpected goes wrong during execution.",
        translation: "Der Plan wird perfekt funktionieren, vorausgesetzt nichts Unerwartetes geht während der Ausführung schief.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Erfolgs-BEDINGUNG: Diese Plan-Erfolg-Annahme ist abhängig vom Ausbleiben unvorhergesehener Probleme."
      },
      {
        id: "prov_9",
        question: "We can extend the deadline _____ you give us a valid good reason why.",
        translation: "Wir können die Deadline verlängern, vorausgesetzt du gibst uns einen gültigen guten Grund dafür.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Verlängerungs-VORAUSSETZUNG: Diese Deadline-Flexibilität braucht nachvollziehbare Begründung."
      },
      {
        id: "prov_10",
        question: "You're welcome to stay longer _____ it doesn't inconvenience you at all.",
        translation: "Du bist willkommen, länger zu bleiben, vorausgesetzt es ist überhaupt nicht unbequem für dich.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Bleibe-Einladung mit RÜCKSICHT: Diese verlängerte Gastfreundschaft berücksichtigt Gast-Komfort."
      },
      {
        id: "prov_11",
        question: "The ticket is refundable _____ you cancel at least forty-eight hours before departure.",
        translation: "Das Ticket ist erstattungsfähig, vorausgesetzt du stornierst mindestens achtundvierzig Stunden vor Abflug.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Erstattungs-REGEL: Diese Storno-Frist ist Standard-Geschäftsbedingung für Ticket-Rückerstattung."
      },
      {
        id: "prov_12",
        question: "I don't mind waiting here _____ you're not going to be too much longer.",
        translation: "Es macht mir nichts aus, hier zu warten, vorausgesetzt du brauchst nicht allzu viel länger.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Warte-BEDINGUNG: Diese geduldige Warte-Bereitschaft hat zeitliche Begrenzungs-Erwartung."
      },
      {
        id: "prov_13",
        question: "She'll accept the job offer _____ they increase the salary to match her expectations.",
        translation: "Sie wird das Jobangebot annehmen, vorausgesetzt sie erhöhen das Gehalt entsprechend ihren Erwartungen.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Annahme-BEDINGUNG: Diese Gehalts-Verhandlung ist wichtig für Job-Akzeptanz-Entscheidung."
      },
      {
        id: "prov_14",
        question: "The children can play outside _____ they stay within the safe garden area.",
        translation: "Die Kinder können draußen spielen, vorausgesetzt sie bleiben im sicheren Garten-Bereich.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Spiel-SICHERHEITS-Regel: Diese räumliche Begrenzung schützt Kinder bei Outdoor-Aktivität."
      },
      {
        id: "prov_15",
        question: "We'll go to the beach tomorrow _____ the weather forecast is accurate and correct.",
        translation: "Wir werden morgen zum Strand gehen, vorausgesetzt die Wettervorhersage ist genau und korrekt.",
        options: ["provided that", "providing that", "both correct", "if"],
        correct: "both correct",
        explanation: "'PROVIDED' = Strand-Plan-ABHÄNGIGKEIT: Dieser Ausflug ist abhängig von zuverlässiger positiver Wetter-Prognose."
      }
    ]
  },

  time_clauses_advanced: {
    name: "Advanced Time Clauses",
    description: "Erweiterte Zeitangaben - as soon as, once, the moment nutzen",
    icon: Timer,
    color: "from-amber-500 to-yellow-600",
    level: "advanced",
    questions: [
      {
        id: "time_cl_1",
        question: "_____ I finish this task, I'll call you immediately without any delay.",
        translation: "Sobald ich diese Aufgabe beende, rufe ich dich ohne Verzögerung sofort an.",
        options: ["As soon as", "Until", "By the time", "When"],
        correct: "As soon as",
        explanation: "'AS SOON AS' = sobald (sofortige Folge): Diese unmittelbare Anruf-Zusage nach Aufgaben-Ende zeigt Priorität."
      },
      {
        id: "time_cl_2",
        question: "_____ you've finished your homework, you can go out to play with friends.",
        translation: "Sobald du deine Hausaufgaben fertig hast, kannst du rausgehen, um mit Freunden zu spielen.",
        options: ["Once", "Until", "By", "While"],
        correct: "Once",
        explanation: "'ONCE' = sobald (Erlaubnis nach Abschluss): Diese Spiel-Erlaubnis ist abhängig von Hausaufgaben-Fertigstellung."
      },
      {
        id: "time_cl_3",
        question: "_____ she walked through the door, everyone started singing surprise birthday song!",
        translation: "In dem Moment, als sie durch die Tür ging, fingen alle an, das Überraschungs-Geburtstagslied zu singen!",
        options: ["The moment", "Until", "By the time", "While"],
        correct: "The moment",
        explanation: "'THE MOMENT' = genau in dem Moment: Diese perfekt getimte Überraschung zeigt gute Party-Koordination."
      },
      {
        id: "time_cl_4",
        question: "Call me _____ you arrive at the airport safely for your flight departure.",
        translation: "Ruf mich an, sobald du sicher am Flughafen für deinen Flug-Abflug ankommst.",
        options: ["as soon as", "until", "by", "while"],
        correct: "as soon as",
        explanation: "'AS SOON AS' in Imperativ: Diese Ankunfts-Bestätigung-Bitte ist wichtig für Beruhigung bei Reise-Beginn."
      },
      {
        id: "time_cl_5",
        question: "_____ the teacher enters the classroom, all students must be quiet immediately.",
        translation: "Sobald der Lehrer das Klassenzimmer betritt, müssen alle Schüler sofort still sein.",
        options: ["As soon as", "Until", "By the time", "While"],
        correct: "As soon as",
        explanation: "'AS SOON AS' = sofortige REGEL-Aktivierung: Diese Klassen-Ruhe-Regel ist Standard-Unterrichts-Beginn-Erwartung."
      },
      {
        id: "time_cl_6",
        question: "_____ we've saved enough money, we'll buy our first house together happily.",
        translation: "Sobald wir genug Geld gespart haben, werden wir glücklich zusammen unser erstes Haus kaufen.",
        options: ["Once", "Until", "By", "While"],
        correct: "Once",
        explanation: "'ONCE' + Present Perfect → Future: Dieser Haus-Kauf wartet auf ausreichendes Spar-Ziel-Erreichen."
      },
      {
        id: "time_cl_7",
        question: "_____ I heard the news, I knew something was wrong with the situation.",
        translation: "In dem Moment, als ich die Nachrichten hörte, wusste ich, dass etwas mit der Situation nicht stimmte.",
        options: ["The moment", "Until", "By the time", "While"],
        correct: "The moment",
        explanation: "'THE MOMENT' = sofortige ERKENNTNIS: Diese instinktive Sorge beim Nachrichten-Hören war unmittelbare intuitive Reaktion."
      },
      {
        id: "time_cl_8",
        question: "_____ he gets home from work tonight, dinner will be ready waiting for him.",
        translation: "Sobald er heute Abend von der Arbeit nach Hause kommt, wird das Abendessen fertig auf ihn warten.",
        options: ["As soon as", "Until", "By the time", "Both as soon as and by the time"],
        correct: "As soon as",
        explanation: "'AS SOON AS' + Present → Future: Diese Abendessen-Bereitschaft ist liebevolle fürsorglich getimte Mahlzeit-Vorbereitung."
      },
      {
        id: "time_cl_9",
        question: "_____ you understand the basic grammar rules, learning becomes much easier overall.",
        translation: "Sobald du die grundlegenden Grammatik-Regeln verstehst, wird das Lernen insgesamt viel einfacher.",
        options: ["Once", "Until", "By", "While"],
        correct: "Once",
        explanation: "'ONCE' = nach FUNDAMENT-Verständnis: Diese Lern-Erleichterung nach Basis-Wissen ist wichtiger Durchbruchs-Moment."
      },
      {
        id: "time_cl_10",
        question: "_____ I saw her smile, I knew everything was going to be alright fine.",
        translation: "In dem Moment, als ich ihr Lächeln sah, wusste ich, dass alles gut werden würde.",
        options: ["The moment", "Until", "By the time", "While"],
        correct: "The moment",
        explanation: "'THE MOMENT' = sofortige BERUHIGUNG: Dieses Lächeln als Signal gab unmittelbare emotionale Entspannung."
      },
      {
        id: "time_cl_11",
        question: "_____ the store opens tomorrow morning, there will be crowds of people waiting.",
        translation: "Sobald der Laden morgen früh öffnet, werden Menschenmassen wartend da sein.",
        options: ["As soon as", "Until", "By the time", "While"],
        correct: "As soon as",
        explanation: "'AS SOON AS' + Present → Future: Diese erwartete Menschenmenge beim Laden-Öffnen zeigt große Produkt-Nachfrage."
      },
      {
        id: "time_cl_12",
        question: "_____ you learn to drive properly, you'll feel much more independent in life.",
        translation: "Sobald du richtig fahren lernst, wirst du dich im Leben viel unabhängiger fühlen.",
        options: ["Once", "Until", "By", "While"],
        correct: "Once",
        explanation: "'ONCE' = nach Fähigkeits-ERWERB: Diese Fahr-Fähigkeit bringt neue Freiheit und Mobilität im Alltag."
      },
      {
        id: "time_cl_13",
        question: "_____ the bell rang loudly, students rushed out of the classroom very quickly!",
        translation: "In dem Moment, als die Glocke laut klingelte, stürmten die Schüler sehr schnell aus dem Klassenzimmer!",
        options: ["The moment", "Until", "By the time", "While"],
        correct: "The moment",
        explanation: "'THE MOMENT' = synchrone REAKTION: Dieser sofortige Klassen-Exodus bei Glocke ist typisches Schul-End-Verhalten."
      },
      {
        id: "time_cl_14",
        question: "_____ we receive your payment, we'll ship the products to your address immediately.",
        translation: "Sobald wir deine Zahlung erhalten, werden wir die Produkte sofort an deine Adresse versenden.",
        options: ["As soon as", "Until", "By the time", "While"],
        correct: "As soon as",
        explanation: "'AS SOON AS' = Versand-AUSLÖSER: Diese Zahlungs-Abhängigkeit ist Standard-Geschäfts-Ablauf für Waren-Versand."
      },
      {
        id: "time_cl_15",
        question: "_____ he masters this difficult skill, he can move to advanced level training.",
        translation: "Sobald er diese schwierige Fähigkeit meistert, kann er zum fortgeschrittenen Level-Training übergehen.",
        options: ["Once", "Until", "By", "While"],
        correct: "Once",
        explanation: "'ONCE' = nach MEISTERUNG: Dieser Level-Aufstieg ist abhängig von Fähigkeits-Beherrschung als Voraussetzung."
      }
    ]
  },

  subject_verb_agreement: {
    name: "Subject-Verb Agreement (Advanced)",
    description: "Subjekt-Verb-Übereinstimmung - komplexe Fälle richtig handhaben",
    icon: CheckCircle,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "subj_verb_1",
        question: "Everyone in the office _____ about the upcoming changes to work schedule.",
        translation: "Jeder im Büro weiß über die kommenden Änderungen am Arbeitsplan Bescheid.",
        options: ["knows", "know", "knowing", "are knowing"],
        correct: "knows",
        explanation: "'EVERYONE' = SINGULAR Verb: 'everyone knows'. Obwohl es viele Leute sind, ist 'everyone' grammatisch Singular."
      },
      {
        id: "subj_verb_2",
        question: "Neither of the two solutions _____ perfect for solving this complicated problem.",
        translation: "Keine der beiden Lösungen ist perfekt für das Lösen dieses komplizierten Problems.",
        options: ["is", "are", "being", "were"],
        correct: "is",
        explanation: "'NEITHER OF' + Plural → SINGULAR Verb: 'neither is'. Diese Konstruktion ist trotz 'of the solutions' singular."
      },
      {
        id: "subj_verb_3",
        question: "The team _____ celebrating their victory win in the championship match tonight.",
        translation: "Das Team feiert heute Abend seinen Sieg im Meisterschafts-Spiel.",
        options: ["is", "are", "both correct", "were"],
        correct: "both correct",
        explanation: "KOLLEKTIV-Nomen: UK 'are' (Gruppe), US 'is' (Einheit). Beide akzeptabel je nach Perspektive auf Team."
      },
      {
        id: "subj_verb_4",
        question: "A number of students _____ absent from class today due to the flu illness.",
        translation: "Eine Anzahl von Studenten ist heute wegen der Grippe-Krankheit vom Unterricht abwesend.",
        options: ["are", "is", "was", "were"],
        correct: "are",
        explanation: "'A NUMBER OF' = PLURAL Verb: 'are absent'. Diese Konstruktion bedeutet 'mehrere' und braucht Plural-Verb."
      },
      {
        id: "subj_verb_5",
        question: "The number of complaints _____ increased significantly over the past few months here.",
        translation: "Die Anzahl der Beschwerden ist hier in den letzten Monaten deutlich gestiegen.",
        options: ["has", "have", "is", "are"],
        correct: "has",
        explanation: "'THE NUMBER' = SINGULAR: 'the number has'. Anders als 'a number of' ist 'the number' immer Singular."
      },
      {
        id: "subj_verb_6",
        question: "Each of the students _____ their own unique learning style and pace individually.",
        translation: "Jeder der Studenten hat seinen eigenen einzigartigen Lern-Stil und individuelles Tempo.",
        options: ["has", "have", "having", "is having"],
        correct: "has",
        explanation: "'EACH OF' + Plural → SINGULAR Verb: 'each has'. Diese Individual-Betonung nutzt Singular trotz mehrerer Studenten."
      },
      {
        id: "subj_verb_7",
        question: "Politics _____ a difficult subject to discuss at family dinners without arguments.",
        translation: "Politik ist ein schwieriges Thema, um bei Familien-Essen ohne Streit darüber zu diskutieren.",
        options: ["is", "are", "being", "were"],
        correct: "is",
        explanation: "'POLITICS' = SINGULAR (Fach/Thema): 'politics is'. Trotz -s Endung ist Politik als Thema Singular."
      },
      {
        id: "subj_verb_8",
        question: "Ten dollars _____ too much to pay for just one small coffee at this café!",
        translation: "Zehn Dollar ist zu viel, um für nur einen kleinen Kaffee in diesem Café zu bezahlen!",
        options: ["is", "are", "being", "were"],
        correct: "is",
        explanation: "GELD-Betrag = SINGULAR: 'ten dollars is'. Geld als Gesamt-Betrag wird als einzelne Einheit behandelt."
      },
      {
        id: "subj_verb_9",
        question: "The police _____ investigating the crime that happened last night in our neighborhood.",
        translation: "Die Polizei ermittelt in dem Verbrechen, das letzte Nacht in unserer Nachbarschaft passierte.",
        options: ["are", "is", "both correct", "was"],
        correct: "are",
        explanation: "'POLICE' = PLURAL (Gruppe von Personen): 'police are'. Polizei ist immer Plural im Englischen."
      },
      {
        id: "subj_verb_10",
        question: "My glasses _____ broken - I need to get new ones from the optician soon.",
        translation: "Meine Brille ist kaputt - ich muss bald eine neue vom Optiker bekommen.",
        options: ["are", "is", "was", "been"],
        correct: "are",
        explanation: "'GLASSES' = PLURAL (Paar): 'glasses are'. Brillen, Hosen, Scheren sind immer Plural im Englischen."
      },
      {
        id: "subj_verb_11",
        question: "Everything _____ ready for the big presentation tomorrow morning at nine o'clock.",
        translation: "Alles ist fertig für die große Präsentation morgen früh um neun Uhr.",
        options: ["is", "are", "being", "were"],
        correct: "is",
        explanation: "'EVERYTHING' = SINGULAR: 'everything is'. Diese Komplett-Bereitschaft umfasst alle Präsentations-Elemente."
      },
      {
        id: "subj_verb_12",
        question: "The news _____ not very good today - there were more accidents reported this morning.",
        translation: "Die Nachrichten sind heute nicht sehr gut - es wurden heute Morgen mehr Unfälle gemeldet.",
        options: ["is", "are", "was", "were"],
        correct: "is",
        explanation: "'NEWS' = SINGULAR (trotz -s): 'news is'. Nachrichten als Konzept ist Singular im Englischen."
      },
      {
        id: "subj_verb_13",
        question: "Neither the teacher nor the students _____ the answer to this difficult question.",
        translation: "Weder der Lehrer noch die Studenten kennen die Antwort auf diese schwierige Frage.",
        options: ["know", "knows", "knowing", "are knowing"],
        correct: "know",
        explanation: "'NEITHER...NOR' → Verb folgt NÄHEREM Subjekt: 'students know' (Plural). Das zweite Subjekt bestimmt Verb-Form."
      },
      {
        id: "subj_verb_14",
        question: "Five hours _____ a long time to wait at the airport for delayed flight.",
        translation: "Fünf Stunden ist eine lange Zeit, um am Flughafen auf verspäteten Flug zu warten.",
        options: ["is", "are", "being", "were"],
        correct: "is",
        explanation: "ZEIT-Dauer = SINGULAR: 'five hours is'. Zeit als Gesamt-Periode wird als Einheit behandelt."
      },
      {
        id: "subj_verb_15",
        question: "The majority of people _____ that the new law is unfair and should change.",
        translation: "Die Mehrheit der Leute denkt, dass das neue Gesetz unfair ist und sich ändern sollte.",
        options: ["think", "thinks", "thinking", "are thinking"],
        correct: "think",
        explanation: "'MAJORITY OF' + Plural → PLURAL Verb (üblich): 'people think'. Der Fokus liegt auf den einzelnen Personen."
      }
    ]
  }
};

export default part27Categories;
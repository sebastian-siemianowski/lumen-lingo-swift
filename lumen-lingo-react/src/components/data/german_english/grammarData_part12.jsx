/**
 * GERMAN → ENGLISH GRAMMAR - PART 12
 * 4 categories, 15 questions each
 */

import { Coffee, BookCheck, Navigation, Footprints } from "lucide-react";

export const part12Categories = {
  get_vs_become: {
    name: "Get vs Become",
    description: "Werden - get und become für Veränderungen unterscheiden",
    icon: Coffee,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "get_become_1",
        question: "It's _____ dark outside - we should turn on the lights now.",
        translation: "Es wird draußen dunkel - wir sollten jetzt die Lichter anmachen.",
        options: ["getting", "becoming", "being", "going"],
        correct: "getting",
        explanation: "Für ALLMÄHLICHE Veränderung nutzen wir 'getting': 'getting dark' (wird dunkel). Diese Dämmerung erfordert Beleuchtung für bessere Sicht im Raum."
      },
      {
        id: "get_become_2",
        question: "She wants to _____ a doctor after finishing her medical studies successfully.",
        translation: "Sie möchte nach erfolgreichem Abschluss ihres Medizinstudiums Ärztin werden.",
        options: ["become", "get", "be", "turn"],
        correct: "become",
        explanation: "Für BERUF/STATUS nutzen wir 'become': 'become a doctor' (Arzt werden). Dieser Berufswunsch ist langfristiges Karriereziel nach Jahren Studium."
      },
      {
        id: "get_become_3",
        question: "I'm _____ tired of waiting - let's just leave without him now.",
        translation: "Ich werde das Warten leid - lass uns jetzt einfach ohne ihn gehen.",
        options: ["getting", "becoming", "being", "going"],
        correct: "getting",
        explanation: "Für PROZESS nutzen wir 'getting': 'getting tired of'. Diese wachsende Ungeduld beim Warten führt zu Abfahrt-Entscheidung ohne Person."
      },
      {
        id: "get_become_4",
        question: "He _____ angry when people don't listen to him carefully during meetings.",
        translation: "Er wird wütend, wenn Leute ihm während Treffen nicht sorgfältig zuhören.",
        options: ["gets", "becomes", "is", "goes"],
        correct: "gets",
        explanation: "Für EMOTION-Wechsel: beide möglich, 'gets' umgangssprachlicher: Diese Wut bei Nicht-Zuhören ist verständliche Frustrations-Reaktion."
      },
      {
        id: "get_become_5",
        question: "The weather is _____ worse every day this week with more rain.",
        translation: "Das Wetter wird diese Woche jeden Tag mit mehr Regen schlechter.",
        options: ["getting", "becoming", "being", "going"],
        correct: "getting",
        explanation: "Für VERSCHLECHTERUNG: 'getting worse' (wird schlechter). Diese wöchentliche Wetter-Verschlechterung mit zunehmenden Regenfällen ist deprimierend."
      },
      {
        id: "get_become_6",
        question: "After years of hard work, he finally _____ the company director successfully.",
        translation: "Nach Jahren harter Arbeit wurde er endlich erfolgreich Firmendirektor.",
        options: ["became", "got", "was", "turned"],
        correct: "became",
        explanation: "Für WICHTIGE Position: 'became director' (formeller). Diese Direktor-Beförderung nach Jahren ist verdienter Karriere-Höhepunkt."
      },
      {
        id: "get_become_7",
        question: "Don't _____ upset about small things - life is too short for that!",
        translation: "Werde nicht wegen kleiner Dinge aufgeregt - das Leben ist zu kurz dafür!",
        correct: "get",
        explanation: "Für EMOTION umgangssprachlich: 'get upset' (häufiger als become). Dieser Rat zu Gelassenheit bei Kleinigkeiten ist gesunde Lebenseinstellung."
      },
      {
        id: "get_become_8",
        question: "The situation is _____ more complicated with each new problem arising daily.",
        translation: "Die Situation wird mit jedem täglich auftretenden neuen Problem komplizierter.",
        options: ["getting", "becoming", "both correct", "being"],
        correct: "both correct",
        explanation: "Für ZUNEHMEND: beide Formen möglich hier. Diese tägliche Situations-Komplizierung durch neue Probleme ist herausfordernd für Lösungsfindung."
      },
      {
        id: "get_become_9",
        question: "I _____ hungry - let's stop for lunch at the next restaurant soon.",
        translation: "Ich werde hungrig - lass uns bald am nächsten Restaurant für Mittagessen anhalten.",
        options: ["am getting", "am becoming", "get", "become"],
        correct: "am getting",
        explanation: "Für KÖRPER-Zustand Prozess: 'getting hungry' (umgangssprachlich). Dieser wachsende Hunger erfordert baldige Essenspause während Fahrt."
      },
      {
        id: "get_become_10",
        question: "She _____ famous after her book was published and became bestseller.",
        translation: "Sie wurde berühmt, nachdem ihr Buch veröffentlicht wurde und Bestseller wurde.",
        options: ["became", "got", "was", "turned"],
        correct: "became",
        explanation: "Für RUHM/STATUS: 'became famous' (formeller). Dieser Bestseller-Erfolg brachte verdiente öffentliche Anerkennung und Berühmtheit."
      },
      {
        id: "get_become_11",
        question: "It's _____ late - we should probably start heading home right now.",
        translation: "Es wird spät - wir sollten wahrscheinlich jetzt sofort Richtung Heimweg starten.",
        options: ["getting", "becoming", "being", "going"],
        correct: "getting",
        explanation: "Für ZEIT-Veränderung: 'getting late'. Diese fortgeschrittene Uhrzeit ist Signal für Aufbruch zum Heimweg für Ruhe."
      },
      {
        id: "get_become_12",
        question: "They _____ close friends after working together on the difficult project for months.",
        translation: "Sie wurden enge Freunde, nachdem sie monatelang am schweren Projekt zusammenarbeiteten.",
        options: ["became", "got", "were", "turned"],
        correct: "became",
        explanation: "Für BEZIEHUNG-Entwicklung: 'became friends' (üblicher). Diese Freundschaft durch monatelange Projekt-Zusammenarbeit ist schöne Verbindung."
      },
      {
        id: "get_become_13",
        question: "I'm _____ used to living in the big noisy city after five years.",
        translation: "Ich gewöhne mich nach fünf Jahren an das Leben in der großen lauten Stadt.",
        options: ["getting", "becoming", "being", "going"],
        correct: "getting",
        explanation: "Für GEWÖHNUNG-Prozess: 'getting used to'. Diese allmähliche Stadt-Anpassung nach fünf Jahren zeigt erfolgreiche Integration in urbanes Leben."
      },
      {
        id: "get_become_14",
        question: "The problem _____ serious when nobody took action to solve it quickly.",
        translation: "Das Problem wurde ernst, als niemand schnell Maßnahmen zur Lösung ergriff.",
        options: ["became", "got", "both correct", "was"],
        correct: "both correct",
        explanation: "Für ERNST werden: beide möglich. Diese Problem-Eskalation durch Untätigkeit zeigt Wichtigkeit rechtzeitigen Handelns bei Schwierigkeiten."
      },
      {
        id: "get_become_15",
        question: "You'll _____ sick if you don't wear warm clothes in this cold weather.",
        translation: "Du wirst krank werden, wenn du bei diesem kalten Wetter keine warmen Sachen trägst.",
        options: ["get", "become", "be", "turn"],
        correct: "get",
        explanation: "Für KRANK werden: 'get sick' (umgangssprachlicher). Diese Erkältungs-Warnung bei Kälte ist praktischer Gesundheitsrat für angemessene Kleidung."
      }
    ]
  },

  each_every_all: {
    name: "Each, Every, All",
    description: "Jeder/Alle - each, every, all korrekt unterscheiden und verwenden",
    icon: BookCheck,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "each_every_1",
        question: "_____ student in the class received a certificate for participation today.",
        translation: "Jeder Student in der Klasse erhielt heute ein Zertifikat für Teilnahme.",
        options: ["Each", "Every", "Both correct", "All"],
        correct: "Both correct",
        explanation: "'EACH' und 'EVERY' beide möglich hier mit Singular-Verb: 'each/every student'. Diese Zertifikat-Verteilung an alle ist Anerkennung der Teilnahme."
      },
      {
        id: "each_every_2",
        question: "I go jogging _____ morning before breakfast to stay healthy and fit.",
        translation: "Ich gehe jeden Morgen vor dem Frühstück joggen, um gesund und fit zu bleiben.",
        options: ["every", "each", "all", "both every and each"],
        correct: "every",
        explanation: "Für ROUTINE/GEWOHNHEIT: 'every morning' (üblicher). Diese tägliche Morgen-Jogging-Routine ist gesunde Fitness-Gewohnheit vor Arbeit."
      },
      {
        id: "each_every_3",
        question: "_____ of us has different opinions about the best solution to problem.",
        translation: "Jeder von uns hat unterschiedliche Meinungen über die beste Problemlösung.",
        options: ["Each", "Every", "All", "Both"],
        correct: "Each",
        explanation: "Mit 'OF': nur 'each of us' möglich (NICHT every). Diese Meinungsvielfalt bei Problemlösung ist normale Gruppendynamik."
      },
      {
        id: "each_every_4",
        question: "_____ the students passed the difficult exam with very good grades surprisingly.",
        translation: "Alle Studenten bestanden überraschenderweise die schwere Prüfung mit sehr guten Noten.",
        options: ["All", "Each", "Every", "Both"],
        correct: "All",
        explanation: "Für GESAMTHEIT mit Plural: 'all the students'. Dieser kollektive Prüfungserfolg mit guten Noten ist außergewöhnliche Klassen-Leistung."
      },
      {
        id: "each_every_5",
        question: "She checks her email _____ hour during work to stay updated always.",
        translation: "Sie überprüft ihre E-Mails jede Stunde während der Arbeit, um immer aktuell zu bleiben.",
        options: ["every", "each", "all", "both"],
        correct: "every",
        explanation: "Für ZEITINTERVALLE: 'every hour' (jede Stunde). Diese stündliche E-Mail-Kontrolle bei Arbeit ist intensive Kommunikations-Gewohnheit."
      },
      {
        id: "each_every_6",
        question: "_____ one of the children got a present for Christmas this year happily.",
        translation: "Jedes einzelne der Kinder bekam dieses Jahr glücklich ein Geschenk zu Weihnachten.",
        options: ["Each", "Every", "All", "Both"],
        correct: "Each",
        explanation: "Für EINZELN betont: 'each one' (jedes einzelne). Diese individuelle Weihnachts-Beschenkung aller Kinder ist faire liebevolle Geste."
      },
      {
        id: "each_every_7",
        question: "I've read _____ the books in this series - they're all fantastic stories!",
        translation: "Ich habe alle Bücher in dieser Serie gelesen - sie sind alle fantastische Geschichten!",
        options: ["all", "each", "every", "both"],
        correct: "all",
        explanation: "Für GESAMTHEIT: 'all the books' (alle Bücher - Plural). Diese komplette Serien-Lektüre zeigt Begeisterung für Buchqualität."
      },
      {
        id: "each_every_8",
        question: "We meet _____ two weeks on Friday evenings at the local café.",
        translation: "Wir treffen uns alle zwei Wochen freitagabends im örtlichen Café.",
        options: ["every", "each", "all", "both"],
        correct: "every",
        explanation: "Für INTERVALL: 'every two weeks' (alle zwei Wochen). Dieses zweiwöchentliche Café-Treffen ist regelmäßige soziale Routine."
      },
      {
        id: "each_every_9",
        question: "_____ child brought their own lunch to school today in their bags.",
        translation: "Jedes Kind brachte heute sein eigenes Mittagessen in seinen Taschen zur Schule.",
        options: ["Each", "Every", "Both correct", "All"],
        correct: "Both correct",
        explanation: "Singular-Betonung: 'each/every child' beide möglich. Diese individuelle Essens-Mitnahme zur Schule ist praktische Selbstversorgung."
      },
      {
        id: "each_every_10",
        question: "Not _____ students understood the difficult explanation clearly in class today.",
        translation: "Nicht alle Studenten verstanden heute im Unterricht die schwere Erklärung klar.",
        options: ["all", "each", "every", "both"],
        correct: "all",
        explanation: "In NEGATIVEN Sätzen: 'not all' (nicht alle). Diese teilweise Nicht-Verständnis zeigt Erklärungs-Verbesserungsbedarf für manche Schüler."
      },
      {
        id: "each_every_11",
        question: "_____ person in the room introduced themselves to the group one by one.",
        translation: "Jede Person im Raum stellte sich einzeln nacheinander der Gruppe vor.",
        options: ["Each", "Every", "Both correct", "All"],
        correct: "Both correct",
        explanation: "Für INDIVIDUEN: beide möglich. Diese Einzel-Vorstellungsrunde im Raum ist typische Kennenlern-Methode in neuen Gruppen."
      },
      {
        id: "each_every_12",
        question: "I wash my car _____ month to keep it clean and shiny looking.",
        translation: "Ich wasche mein Auto jeden Monat, um es sauber und glänzend aussehend zu halten.",
        options: ["every", "each", "all", "both"],
        correct: "every",
        explanation: "Für REGELMÄSSIGKEIT: 'every month' (jeden Monat). Diese monatliche Auto-Wasch-Routine ist Pflege-Gewohnheit für gepflegtes Aussehen."
      },
      {
        id: "each_every_13",
        question: "_____ of them has their own room in the big family house now.",
        translation: "Jeder von ihnen hat jetzt sein eigenes Zimmer im großen Familienhaus.",
        options: ["Each", "Every", "All", "Both"],
        correct: "Each",
        explanation: "Mit 'OF': nur 'each of them'. Diese individuellen Zimmer im Haus geben jedem Kind persönlichen Privatraum."
      },
      {
        id: "each_every_14",
        question: "Almost _____ people in the city use public transport for commuting daily.",
        translation: "Fast alle Leute in der Stadt nutzen täglich öffentliche Verkehrsmittel zum Pendeln.",
        options: ["all", "each", "every", "both"],
        correct: "all",
        explanation: "Mit 'almost': nur 'all people' möglich. Diese hohe Öffentlich-Transport-Nutzung zeigt gute Stadt-Infrastruktur für Pendler."
      },
      {
        id: "each_every_15",
        question: "She smiled at _____ person she met on the street today warmly.",
        translation: "Sie lächelte heute jede Person auf der Straße warmherzig an, die sie traf.",
        options: ["every", "each", "all", "both every and each"],
        correct: "every",
        explanation: "Für WIEDERHOLUNG: 'every person' (üblicher). Diese freundliche Lächel-Geste an alle Begegneten verbreitet positive Stimmung."
      }
    ]
  },

  can_could_able: {
    name: "Can, Could, Be Able To",
    description: "Können - can, could, be able to in verschiedenen Kontexten",
    icon: Navigation,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "can_able_1",
        question: "I _____ swim when I was five years old already at pool.",
        translation: "Ich konnte schon mit fünf Jahren im Schwimmbad schwimmen.",
        options: ["could", "can", "was able to", "both could and was able to"],
        correct: "both could and was able to",
        explanation: "Für ALLGEMEINE Fähigkeit Vergangenheit: 'could' oder 'was able to' beide möglich. Diese frühe Schwimmfähigkeit ist wichtige Kindheits-Kompetenz."
      },
      {
        id: "can_able_2",
        question: "After hours of trying, I _____ fix the broken computer successfully yesterday.",
        translation: "Nach stundenlangem Versuchen konnte ich gestern den kaputten Computer erfolgreich reparieren.",
        options: ["was able to", "could", "can", "am able to"],
        correct: "was able to",
        explanation: "Für SPEZIFISCHEN Erfolg Vergangenheit: nur 'was able to' (NICHT could). Diese erfolgreiche Computer-Reparatur nach Stunden ist Durchbruch."
      },
      {
        id: "can_able_3",
        question: "_____ you help me carry these heavy boxes upstairs to apartment please?",
        translation: "Kannst du mir bitte helfen, diese schweren Kisten nach oben zur Wohnung zu tragen?",
        options: ["Can", "Could", "Are you able to", "All correct"],
        correct: "All correct",
        explanation: "Für BITTE Gegenwart: alle drei möglich, 'could' höflicher. Diese Hilfs-Anfrage bei schweren Kisten ist verständliche Bitte."
      },
      {
        id: "can_able_4",
        question: "She _____ speak three languages fluently now after years of studying hard.",
        translation: "Sie kann jetzt nach Jahren harten Lernens fließend drei Sprachen sprechen.",
        options: ["can", "could", "is able to", "both can and is able to"],
        correct: "both can and is able to",
        explanation: "Für JETZIGE Fähigkeit: 'can' oder 'is able to' beide möglich. Diese Dreisprachigkeit nach Jahren Lernen ist beeindruckende Leistung."
      },
      {
        id: "can_able_5",
        question: "I haven't _____ sleep well recently because of the noisy neighbors next door.",
        translation: "Ich konnte kürzlich nicht gut schlafen wegen der lauten Nachbarn nebenan.",
        options: ["been able to", "could", "can", "able to"],
        correct: "been able to",
        explanation: "Nach 'have': nur 'been able to' möglich (NICHT could). Diese Schlafstörung durch Nachbarn-Lärm ist belastende Situation für Erholung."
      },
      {
        id: "can_able_6",
        question: "_____ I use your phone for a quick call? Mine is completely dead now.",
        translation: "Könnte ich dein Telefon für einen kurzen Anruf nutzen? Meins ist jetzt komplett leer.",
        options: ["Could", "Can", "Am I able to", "Both could and can"],
        correct: "Both could and can",
        explanation: "Für HÖFLICHE Erlaubnis-Frage: 'could' höflicher als 'can', beide möglich. Diese Handy-Leih-Bitte bei leerem Akku ist Notfall-Anfrage."
      },
      {
        id: "can_able_7",
        question: "He will _____ join us for dinner tomorrow after finishing his work late.",
        translation: "Er wird morgen nach spätem Arbeitsende zu uns zum Abendessen kommen können.",
        options: ["be able to", "can", "could", "able to"],
        correct: "be able to",
        explanation: "Nach 'will': nur 'be able to' möglich (NICHT can). Diese bedingte Dinner-Teilnahme morgen hängt von Arbeits-Fertigstellung ab."
      },
      {
        id: "can_able_8",
        question: "I couldn't _____ the door - it was completely locked from inside securely.",
        translation: "Ich konnte die Tür nicht öffnen - sie war von innen komplett sicher verschlossen.",
        options: ["open", "to open", "opening", "opened"],
        correct: "open",
        explanation: "Nach Modal 'couldn't': Infinitiv OHNE 'to': 'couldn't open'. Diese verschlossene Tür von innen verhinderte Zugang komplett."
      },
      {
        id: "can_able_9",
        question: "She has never _____ understand advanced mathematics concepts despite trying hard.",
        translation: "Sie hat trotz hartem Versuchen fortgeschrittene Mathematik-Konzepte nie verstehen können.",
        options: ["been able to", "could", "can", "able to"],
        correct: "been able to",
        explanation: "Nach 'has never': nur 'been able to'. Diese Mathematik-Verständnis-Schwierigkeit trotz Anstrengung ist persönliche Lern-Herausforderung."
      },
      {
        id: "can_able_10",
        question: "_____ you lend me some money until next Friday when I get paid?",
        translation: "Könntest du mir bis nächsten Freitag, wenn ich bezahlt werde, etwas Geld leihen?",
        options: ["Could", "Can", "Are you able to", "All correct"],
        correct: "All correct",
        explanation: "Für BITTE: alle drei möglich, 'could' höflichste Form. Diese Geld-Leih-Anfrage bis Zahltag ist temporäre Finanz-Hilfe."
      },
      {
        id: "can_able_11",
        question: "By next year, I will _____ speak German fluently after intensive course.",
        translation: "Bis nächstes Jahr werde ich nach Intensivkurs fließend Deutsch sprechen können.",
        options: ["be able to", "can", "could", "able to"],
        correct: "be able to",
        explanation: "Nach 'will': nur 'be able to'. Dieses Deutsch-Sprachziel nächstes Jahr nach Intensivkurs ist ambitioniertes aber erreichbares Ziel."
      },
      {
        id: "can_able_12",
        question: "I _____ see the mountain from my window on clear sunny days beautifully.",
        translation: "Ich kann an klaren sonnigen Tagen wunderschön den Berg von meinem Fenster sehen.",
        options: ["can", "could", "am able to", "both can and am able to"],
        correct: "both can and am able to",
        explanation: "Für GEGENWART: beide möglich, 'can' umgangssprachlicher. Diese Berg-Sicht an klaren Tagen ist schönes Fenster-Panorama."
      },
      {
        id: "can_able_13",
        question: "Despite the injury, he _____ finish the marathon race successfully yesterday.",
        translation: "Trotz Verletzung konnte er gestern erfolgreich den Marathon beenden.",
        options: ["was able to", "could", "can", "is able to"],
        correct: "was able to",
        explanation: "Für SPEZIFISCHEN Erfolg trotz Hindernis: nur 'was able to'. Dieser Marathon-Erfolg trotz Verletzung ist bemerkenswerte Willenskraft."
      },
      {
        id: "can_able_14",
        question: "We would like to _____ visit you next weekend if that's convenient.",
        translation: "Wir würden dich gerne nächstes Wochenende besuchen, wenn das passt.",
        options: ["be able to", "can", "could", "able to"],
        correct: "be able to",
        explanation: "Nach 'would like to': nur 'be able to'. Dieser höfliche Besuchswunsch nächstes Wochenende fragt nach Verfügbarkeit."
      },
      {
        id: "can_able_15",
        question: "I hope I'll _____ find a good job after graduating from university soon.",
        translation: "Ich hoffe, ich werde nach baldiger Uni-Graduierung einen guten Job finden können.",
        options: ["be able to", "can", "could", "able to"],
        correct: "be able to",
        explanation: "Nach 'will': nur 'be able to' möglich. Diese Job-Hoffnung nach Uni-Abschluss ist natürliche Zukunfts-Sorge aller Studenten."
      }
    ]
  },

  must_have_to: {
    name: "Must vs Have To",
    description: "Müssen - must und have to Unterschiede und Verwendung",
    icon: Footprints,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "must_have_1",
        question: "You _____ wear a seatbelt in the car - it's the law everywhere here.",
        translation: "Du musst im Auto einen Sicherheitsgurt tragen - das ist überall hier Gesetz.",
        options: ["must", "have to", "both correct", "need to"],
        correct: "both correct",
        explanation: "Für GESETZ/REGEL: beide möglich, 'must' stärker. Diese Gurtpflicht ist wichtige Sicherheitsvorschrift zum Schutz bei Unfällen."
      },
      {
        id: "must_have_2",
        question: "She _____ go to work yesterday because it was a public holiday.",
        translation: "Sie musste gestern nicht zur Arbeit gehen, weil es ein Feiertag war.",
        options: ["didn't have to", "mustn't", "hasn't to", "must not"],
        correct: "didn't have to",
        explanation: "Für NICHT NÖTIG Vergangenheit: 'didn't have to' (war nicht nötig). 'Mustn't' = Verbot. Dieser freie Feiertag ist willkommene Arbeitspause."
      },
      {
        id: "must_have_3",
        question: "I _____ finish this report by Friday - my boss is expecting it then.",
        translation: "Ich muss diesen Bericht bis Freitag fertigstellen - mein Chef erwartet ihn dann.",
        options: ["have to", "must", "both correct", "need"],
        correct: "both correct",
        explanation: "Für VERPFLICHTUNG: beide möglich, 'have to' für externe Pflicht üblicher. Diese Freitags-Deadline ist Chef-Erwartung."
      },
      {
        id: "must_have_4",
        question: "You _____ smoke in this building - it's strictly forbidden by law completely.",
        translation: "Du darfst in diesem Gebäude nicht rauchen - es ist gesetzlich komplett streng verboten.",
        options: ["mustn't", "don't have to", "haven't to", "must not to"],
        correct: "mustn't",
        explanation: "Für VERBOT: 'mustn't' (darfst nicht). NICHT 'don't have to' = nicht nötig. Dieses Rauch-Verbot ist rechtlich bindend."
      },
      {
        id: "must_have_5",
        question: "He _____ wear glasses because his eyesight is very poor and weak.",
        translation: "Er muss eine Brille tragen, weil seine Sehkraft sehr schlecht und schwach ist.",
        options: ["has to", "must", "both correct", "needs"],
        correct: "both correct",
        explanation: "Für NOTWENDIGKEIT: beide möglich. Diese Brillen-Pflicht wegen schlechter Sicht ist medizinische Notwendigkeit für klares Sehen."
      },
      {
        id: "must_have_6",
        question: "We _____ be at the airport two hours before our international flight departs.",
        translation: "Wir müssen zwei Stunden vor Abflug unseres internationalen Fluges am Flughafen sein.",
        options: ["have to", "must", "both correct", "need"],
        correct: "both correct",
        explanation: "Für REGEL: beide möglich. Diese Zwei-Stunden-Vorlauf ist empfohlene Standard-Regel für internationale Flüge weltweit."
      },
      {
        id: "must_have_7",
        question: "You _____ buy expensive gifts - just your presence is enough for me!",
        translation: "Du musst keine teuren Geschenke kaufen - nur deine Anwesenheit ist genug für mich!",
        options: ["don't have to", "mustn't", "haven't to", "must not"],
        correct: "don't have to",
        explanation: "Für NICHT NÖTIG: 'don't have to' (brauchst nicht). Diese Geschenk-Entlastung betont Wert von Anwesenheit über materielle Dinge."
      },
      {
        id: "must_have_8",
        question: "She _____ take medicine three times daily for her health condition regularly.",
        translation: "Sie muss für ihren Gesundheitszustand regelmäßig dreimal täglich Medizin nehmen.",
        options: ["has to", "must", "both correct", "needs"],
        correct: "both correct",
        explanation: "Für MEDIZINISCHE Pflicht: beide möglich. Diese tägliche dreimalige Medikamenten-Einnahme ist wichtige Gesundheits-Routine."
      },
      {
        id: "must_have_9",
        question: "I _____ work tomorrow because the office is closed for renovation works.",
        translation: "Ich muss morgen nicht arbeiten, weil das Büro für Renovierungsarbeiten geschlossen ist.",
        options: ["don't have to", "mustn't", "haven't to", "must not"],
        correct: "don't have to",
        explanation: "Für NICHT NÖTIG: 'don't have to' (muss nicht). Dieser freie Tag wegen Renovierung ist unerwartete willkommene Pause."
      },
      {
        id: "must_have_10",
        question: "You _____ tell anyone about this secret information we discussed today privately.",
        translation: "Du darfst niemandem über diese geheime Information erzählen, die wir heute privat besprachen.",
        options: ["mustn't", "don't have to", "haven't to", "must not to"],
        correct: "mustn't",
        explanation: "Für VERBOT: 'mustn't tell' (darfst nicht erzählen). Diese Vertraulichkeits-Anweisung betont Wichtigkeit der Geheimhaltung."
      },
      {
        id: "must_have_11",
        question: "Will we _____ show our passports at the border crossing checkpoint tomorrow?",
        translation: "Werden wir morgen am Grenzübergangs-Checkpoint unsere Pässe zeigen müssen?",
        options: ["have to", "must", "be able to", "can"],
        correct: "have to",
        explanation: "Nach 'will': nur 'have to' möglich (NICHT must). Diese Pass-Kontrolle an Grenze ist Standard-Sicherheitsprozedur bei Grenzübertritt."
      },
      {
        id: "must_have_12",
        question: "Children _____ play with matches - it's extremely dangerous for them always.",
        translation: "Kinder dürfen nicht mit Streichhölzern spielen - es ist für sie immer extrem gefährlich.",
        options: ["mustn't", "don't have to", "haven't to", "must not to"],
        correct: "mustn't",
        explanation: "Für VERBOT Sicherheit: 'mustn't play'. Diese Streichholz-Verbot für Kinder ist essentielle Sicherheitsregel gegen Feuer-Gefahr."
      },
      {
        id: "must_have_13",
        question: "I _____ go to the dentist next week for a routine checkup appointment.",
        translation: "Ich muss nächste Woche für einen Routine-Checkup-Termin zum Zahnarzt gehen.",
        options: ["have to", "must", "both correct", "need"],
        correct: "both correct",
        explanation: "Für TERMIN-Verpflichtung: beide möglich. Dieser Zahnarzt-Routine-Termin ist wichtig für Zahngesundheits-Überwachung."
      },
      {
        id: "must_have_14",
        question: "She _____ leave early yesterday to catch her train home on time successfully.",
        translation: "Sie musste gestern früh gehen, um ihren Zug nach Hause erfolgreich pünktlich zu erwischen.",
        options: ["had to", "must", "has to", "must have"],
        correct: "had to",
        explanation: "Für VERGANGENHEIT: nur 'had to' möglich (NICHT must). Dieser frühe gestrige Aufbruch war nötig für rechtzeitige Zug-Ankunft."
      },
      {
        id: "must_have_15",
        question: "You _____ come if you're busy - it's completely optional and not required.",
        translation: "Du musst nicht kommen, wenn du beschäftigt bist - es ist komplett optional und nicht erforderlich.",
        options: ["don't have to", "mustn't", "haven't to", "must not"],
        correct: "don't have to",
        explanation: "Für OPTIONAL (nicht nötig): 'don't have to'. Diese freiwillige Teilnahme-Option respektiert zeitliche Verfügbarkeit anderer Personen."
      }
    ]
  },

  other_another_others: {
    name: "Other, Another, Others",
    description: "Andere - other, another, the other korrekt unterscheiden",
    icon: Navigation,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "other_1",
        question: "I don't like this shirt - do you have _____ one in different color?",
        translation: "Ich mag dieses Hemd nicht - hast du ein anderes in anderer Farbe?",
        options: ["another", "other", "the other", "others"],
        correct: "another",
        explanation: "'ANOTHER' = ein anderes (unbestimmt, Singular): 'another one'. Diese Hemd-Farb-Alternative ist Kaufwunsch für bessere Auswahl."
      },
      {
        id: "other_2",
        question: "I have two brothers - one lives in Berlin, _____ lives in Munich.",
        translation: "Ich habe zwei Brüder - einer wohnt in Berlin, der andere in München.",
        options: ["the other", "another", "other", "others"],
        correct: "the other",
        explanation: "'THE OTHER' = der andere (von zweien bestimmt): Diese Bruder-Wohnort-Verteilung zwischen Berlin und München zeigt geografische Familien-Trennung."
      },
      {
        id: "other_3",
        question: "Some people like coffee, _____ prefer tea for their morning drink routine.",
        translation: "Manche Leute mögen Kaffee, andere bevorzugen Tee für ihre Morgengetränk-Routine.",
        options: ["others", "other", "the others", "another"],
        correct: "others",
        explanation: "'OTHERS' = andere (unbestimmt Plural): 'some...others'. Diese Getränke-Präferenz-Teilung ist normale Geschmacks-Variation."
      },
      {
        id: "other_4",
        question: "Can I have _____ piece of cake please? This one was delicious!",
        translation: "Kann ich bitte noch ein Stück Kuchen haben? Dieses war lecker!",
        options: ["another", "other", "the other", "others"],
        correct: "another",
        explanation: "'ANOTHER' = noch ein(e): 'another piece'. Diese Kuchen-Nachschlag-Bitte zeigt Genuss und Wertschätzung des Gebäcks."
      },
      {
        id: "other_5",
        question: "I've read three books, but _____ in the series are still unread by me.",
        translation: "Ich habe drei Bücher gelesen, aber die anderen in der Serie sind von mir noch ungelesen.",
        options: ["the others", "others", "other", "another"],
        correct: "the others",
        explanation: "'THE OTHERS' = die anderen (bestimmte Gruppe): Diese verbleibenden ungelesenen Serie-Bücher warten auf Zeit zum Lesen."
      },
      {
        id: "other_6",
        question: "We need _____ five chairs for the meeting room - these aren't enough.",
        translation: "Wir brauchen weitere fünf Stühle für den Besprechungsraum - diese sind nicht genug.",
        options: ["another", "other", "the other", "others"],
        correct: "another",
        explanation: "'ANOTHER' + Zahl: 'another five' (weitere fünf). Diese zusätzlichen Stühle sind nötig für ausreichende Meeting-Sitzplätze."
      },
      {
        id: "other_7",
        question: "Some students finished early, _____ are still working on the difficult exam.",
        translation: "Manche Studenten wurden früh fertig, andere arbeiten noch an der schweren Prüfung.",
        options: ["others", "other", "the others", "another"],
        correct: "others",
        explanation: "'OTHERS' ohne 'the': unbestimmte andere. Diese unterschiedliche Prüfungs-Bearbeitungsgeschwindigkeit ist normal bei verschiedenen Fähigkeiten."
      },
      {
        id: "other_8",
        question: "I have one shoe, but I can't find _____ anywhere in the house!",
        translation: "Ich habe einen Schuh, aber ich kann den anderen nirgends im Haus finden!",
        options: ["the other", "another", "other", "others"],
        correct: "the other",
        explanation: "'THE OTHER' = der andere (von einem Paar): Dieser verlorene Partner-Schuh macht Paar nutzlos und ist frustrierend."
      },
      {
        id: "other_9",
        question: "Would you like _____ cup of coffee or are you fine with just one?",
        translation: "Möchtest du noch eine Tasse Kaffee oder bist du mit nur einer zufrieden?",
        options: ["another", "other", "the other", "others"],
        correct: "another",
        explanation: "'ANOTHER' = noch ein(e): 'another cup'. Dieses höfliche Kaffee-Nachschlag-Angebot zeigt Gastfreundschaft."
      },
      {
        id: "other_10",
        question: "There were six people - three left early, _____ stayed until the very end.",
        translation: "Es waren sechs Leute - drei gingen früh, die anderen blieben bis zum Ende.",
        options: ["the others", "others", "other", "another"],
        correct: "the others",
        explanation: "'THE OTHERS' = die anderen (bestimmte Rest-Gruppe von 6). Diese Ausdauer bis Ende zeigt Interesse an vollständigem Event."
      },
      {
        id: "other_11",
        question: "Some languages are easy to learn, _____ are extremely difficult and challenging.",
        translation: "Manche Sprachen sind leicht zu lernen, andere sind extrem schwer und herausfordernd.",
        options: ["others", "other", "the others", "another"],
        correct: "others",
        explanation: "'OTHERS' unbestimmt: Diese Sprach-Schwierigkeits-Variation hängt von Muttersprache und linguistischer Verwandtschaft ab."
      },
      {
        id: "other_12",
        question: "I need _____ week to finish this big project - one week isn't enough time.",
        translation: "Ich brauche noch eine Woche, um dieses große Projekt zu beenden - eine Woche ist nicht genug Zeit.",
        options: ["another", "other", "the other", "others"],
        correct: "another",
        explanation: "'ANOTHER' = noch ein(e) weitere: 'another week'. Diese Zeit-Verlängerung um Woche zeigt Projekt-Komplexität."
      },
      {
        id: "other_13",
        question: "One hand washes _____ - we should help each other always in life.",
        translation: "Eine Hand wäscht die andere - wir sollten uns im Leben immer gegenseitig helfen.",
        options: ["the other", "another", "other", "others"],
        correct: "the other",
        explanation: "SPRICHWORT: 'one...the other' (von zweien). Dieses Sprichwort über gegenseitige Hilfe ist universelle Weisheit für Zusammenarbeit."
      },
      {
        id: "other_14",
        question: "Do you have any _____ questions about today's important lesson material?",
        translation: "Hast du noch weitere Fragen über das heutige wichtige Unterrichtsmaterial?",
        options: ["other", "another", "the other", "others"],
        correct: "other",
        explanation: "'OTHER' + Plural: 'other questions' (weitere Fragen). Diese Nachfrage nach zusätzlichen Fragen ist gute Lehrpraxis."
      },
      {
        id: "other_15",
        question: "Some days are good, _____ days are bad - that's just normal life reality.",
        translation: "Manche Tage sind gut, andere Tage sind schlecht - das ist einfach normale Lebensrealität.",
        options: ["other", "others", "the other", "another"],
        correct: "other",
        explanation: "'OTHER' + Plural-Nomen: 'other days'. Diese Tag-Qualitäts-Variation ist natürlicher Lebensrhythmus mit Höhen und Tiefen."
      }
    ]
  }
};

export default part12Categories;
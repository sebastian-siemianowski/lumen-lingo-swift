/**
 * GERMAN → ENGLISH GRAMMAR - PART 24
 * 4 categories, 15 questions each
 */

import { Link, ShieldCheck, Hand, Scale } from "lucide-react";

export const part24Categories = {
  both_either_neither: {
    name: "Both/Either/Neither",
    description: "Verbindungen - both, either, neither für Paare verwenden",
    icon: Link,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "both_1",
        question: "_____ my parents are teachers at the local high school in our neighborhood.",
        translation: "Beide meiner Eltern sind Lehrer an der örtlichen High School in unserer Nachbarschaft.",
        options: ["Both", "Both of", "Either", "Neither"],
        correct: "Both",
        explanation: "'BOTH' + Possessiv + Plural: 'Both my parents' (beide Eltern). Diese Konstruktion zeigt, dass beide zusammen die gleiche Tätigkeit ausüben."
      },
      {
        id: "both_2",
        question: "_____ the students passed the difficult final exam with good grades yesterday.",
        translation: "Beide Studenten bestanden gestern die schwere Abschlussprüfung mit guten Noten.",
        options: ["Both", "Both of", "Either", "Either of"],
        correct: "Both",
        explanation: "'BOTH' + THE + Plural: 'Both the students'. Diese Form betont, dass zwei spezifische Personen erfolgreich waren."
      },
      {
        id: "both_3",
        question: "You can take _____ the bus or the train to get to the city center.",
        translation: "Du kannst entweder den Bus oder den Zug nehmen, um ins Stadtzentrum zu kommen.",
        options: ["either", "both", "neither", "either of"],
        correct: "either",
        explanation: "'EITHER...OR' für AUSWAHL zwischen zwei Optionen: Diese Konstruktion bietet zwei gleichwertige Verkehrsmittel zur Wahl an."
      },
      {
        id: "both_4",
        question: "_____ of my friends could come to the party because they were both busy.",
        translation: "Keiner meiner Freunde konnte zur Party kommen, weil sie beide beschäftigt waren.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER OF' + Plural = keiner von beiden: Diese negative Konstruktion zeigt, dass beide Freunde verhindert waren."
      },
      {
        id: "both_5",
        question: "_____ coffee and tea contain caffeine that can keep you awake at night.",
        translation: "Sowohl Kaffee als auch Tee enthalten Koffein, das dich nachts wach halten kann.",
        options: ["Both", "Either", "Neither", "Both of"],
        correct: "Both",
        explanation: "'BOTH...AND' verbindet zwei Dinge mit gleicher Eigenschaft: Diese Parallel-Konstruktion betont die Gemeinsamkeit beider Getränke."
      },
      {
        id: "both_6",
        question: "I don't like _____ of these two dresses - they're both too expensive for me.",
        translation: "Ich mag keines dieser beiden Kleider - sie sind beide zu teuer für mich.",
        options: ["either", "both", "neither", "none"],
        correct: "either",
        explanation: "'EITHER' in negativem Satz = keins von beiden: Nach 'don't like' nutzen wir 'either', nicht 'neither', um Doppel-Negativ zu vermeiden."
      },
      {
        id: "both_7",
        question: "_____ solution to this problem will work fine - you can choose freely.",
        translation: "Jede der beiden Lösungen für dieses Problem wird gut funktionieren - du kannst frei wählen.",
        options: ["Either", "Both", "Neither", "Any"],
        correct: "Either",
        explanation: "'EITHER' + Singular = jede der beiden: Diese Konstruktion gibt völlige Wahl-Freiheit zwischen zwei gleichwertigen Optionen."
      },
      {
        id: "both_8",
        question: "_____ of us wants to do the dishes after dinner tonight here.",
        translation: "Keiner von uns beiden möchte heute Abend hier nach dem Abendessen das Geschirr spülen.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER OF' + Plural + Singular-Verb: Diese Doppel-Ablehnung der unbeliebten Haushalts-Aufgabe ist humorvolle gemeinsame Unlust."
      },
      {
        id: "both_9",
        question: "She speaks _____ English and French fluently after living abroad for years.",
        translation: "Sie spricht sowohl Englisch als auch Französisch fließend, nachdem sie jahrelang im Ausland lebte.",
        options: ["both", "either", "neither", "both of"],
        correct: "both",
        explanation: "'BOTH...AND' für zwei FÄHIGKEITEN: Diese Zweisprachigkeit ist Resultat langer Auslands-Erfahrung in verschiedenen Ländern."
      },
      {
        id: "both_10",
        question: "_____ answer is correct - they're asking for different things entirely here.",
        translation: "Keine der beiden Antworten ist korrekt - sie fragen hier nach völlig unterschiedlichen Dingen.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER' + Singular-Nomen + Singular-Verb: Diese Doppel-Falschheit zeigt, dass beide Optionen das Ziel verfehlen."
      },
      {
        id: "both_11",
        question: "You can sit on _____ side of the table - there's space everywhere here.",
        translation: "Du kannst auf jeder Seite des Tisches sitzen - es gibt überall hier Platz.",
        options: ["either", "both", "neither", "any"],
        correct: "either",
        explanation: "'EITHER' + Singular = jede der beiden Seiten: Diese Sitzplatz-Freiheit gibt Wahl zwischen linker oder rechter Tisch-Seite."
      },
      {
        id: "both_12",
        question: "I like _____ of these two movies - they're equally entertaining and well-made.",
        translation: "Ich mag beide dieser zwei Filme - sie sind gleichermaßen unterhaltsam und gut gemacht.",
        options: ["both", "either", "neither", "all"],
        correct: "both",
        explanation: "'BOTH OF' zeigt DOPPEL-Gefallen: Diese gleiche Wertschätzung beider Filme macht die Auswahl schwierig aber angenehm."
      },
      {
        id: "both_13",
        question: "_____ John nor Mary came to the meeting yesterday morning as expected.",
        translation: "Weder John noch Mary kamen gestern Morgen wie erwartet zum Meeting.",
        options: ["Neither", "Either", "Both", "Not"],
        correct: "Neither",
        explanation: "'NEITHER...NOR' für DOPPEL-Negativ: Diese Doppel-Abwesenheit war unerwartet und problematisch für Meeting-Planung."
      },
      {
        id: "both_14",
        question: "_____ restaurant is good - we should try somewhere else for dinner tonight.",
        translation: "Keines der beiden Restaurants ist gut - wir sollten heute Abend zum Abendessen woanders hingehen.",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'NEITHER' + Singular-Nomen: Diese Doppel-Ablehnung führt zur Suche nach dritter Alternative für Essen-Auswahl."
      },
      {
        id: "both_15",
        question: "She's _____ intelligent and hardworking, which makes her an excellent student always.",
        translation: "Sie ist sowohl intelligent als auch fleißig, was sie immer zu einer ausgezeichneten Studentin macht.",
        options: ["both", "either", "neither", "both of"],
        correct: "both",
        explanation: "'BOTH...AND' für DOPPEL-Eigenschaft: Diese Kombination von Intelligenz und Fleiß ist ideale Studenten-Charakteristik für Erfolg."
      }
    ]
  },

  make_let_allow: {
    name: "Make/Let/Allow",
    description: "Erlauben und Veranlassen - make, let, allow richtig unterscheiden",
    icon: Hand,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "make_let_1",
        question: "My parents don't _____ me stay out late on school nights during the week.",
        translation: "Meine Eltern erlauben mir nicht, während der Woche an Schul-Abenden spät draußen zu bleiben.",
        options: ["let", "make", "allow", "both let and allow"],
        correct: "let",
        explanation: "'LET' + Person + Infinitiv (OHNE to): 'let me stay'. Diese informelle Erlaubnis-Verweigerung ist typische Eltern-Regel für Schulkinder."
      },
      {
        id: "make_let_2",
        question: "The teacher _____ us do the difficult exercise again because we made many mistakes.",
        translation: "Der Lehrer ließ uns die schwere Übung nochmal machen, weil wir viele Fehler machten.",
        options: ["made", "let", "allowed", "both made and let"],
        correct: "made",
        explanation: "'MAKE' (zwingen) + Person + Infinitiv ohne to: 'made us do'. Dieses Wiederholen war keine freiwillige Wahl, sondern Lehrer-Anordnung."
      },
      {
        id: "make_let_3",
        question: "Smoking is not _____ in this building - please go outside to smoke.",
        translation: "Rauchen ist in diesem Gebäude nicht erlaubt - bitte gehen Sie zum Rauchen nach draußen.",
        options: ["allowed", "let", "made", "permitted"],
        correct: "allowed",
        explanation: "'BE ALLOWED' (passiv, formell): 'is not allowed'. Diese offizielle Rauch-Verbot-Regel gilt für das gesamte Gebäude."
      },
      {
        id: "make_let_4",
        question: "Please _____ me help you with those heavy bags - they look too heavy!",
        translation: "Bitte lass mich dir mit jenen schweren Taschen helfen - sie sehen zu schwer aus!",
        options: ["let", "make", "allow", "permit"],
        correct: "let",
        explanation: "'LET' in Bitte-Form: 'let me help' (lass mich helfen). Diese Hilfs-Angebot ist höfliche Geste bei offensichtlicher Schwere-Belastung."
      },
      {
        id: "make_let_5",
        question: "The movie was so sad that it _____ me cry several times during watching.",
        translation: "Der Film war so traurig, dass er mich während des Schauens mehrmals weinen ließ.",
        options: ["made", "let", "allowed", "both made and let"],
        correct: "made",
        explanation: "'MAKE' = VERURSACHEN (emotional): 'made me cry'. Diese emotionale Reaktion war unwillkürlich durch Film-Traurigkeit ausgelöst."
      },
      {
        id: "make_let_6",
        question: "Children under twelve are not _____ to watch this movie in cinemas here.",
        translation: "Kindern unter zwölf ist es nicht erlaubt, diesen Film hier in Kinos anzuschauen.",
        options: ["allowed", "let", "made", "permitted"],
        correct: "allowed",
        explanation: "'BE ALLOWED TO' (passiv + Infinitiv): Diese Alters-Beschränkungs-Regel ist offizielle Kino-Vorschrift zum Jugendschutz."
      },
      {
        id: "make_let_7",
        question: "His jokes always _____ everyone laugh during boring meetings at the office.",
        translation: "Seine Witze lassen während langweiliger Meetings im Büro immer alle lachen.",
        options: ["make", "let", "allow", "both make and let"],
        correct: "make",
        explanation: "'MAKE' = BEWIRKEN (humorvoll): 'make everyone laugh'. Diese Witze verursachen automatisch Lachen als natürliche Reaktion."
      },
      {
        id: "make_let_8",
        question: "Would you _____ me use your phone for a quick call? Mine is dead.",
        translation: "Würdest du mir erlauben, dein Handy für einen kurzen Anruf zu nutzen? Meines ist leer.",
        options: ["let", "make", "allow", "both let and allow"],
        correct: "let",
        explanation: "'LET' in höflicher Frage: 'let me use'. Diese Handy-Leih-Anfrage ist bei leerem eigenen Akku notwendig."
      },
      {
        id: "make_let_9",
        question: "The new rules don't _____ employees to work from home anymore unfortunately now.",
        translation: "Die neuen Regeln erlauben es Mitarbeitern jetzt leider nicht mehr, von zu Hause zu arbeiten.",
        options: ["allow", "let", "make", "permit"],
        correct: "allow",
        explanation: "'ALLOW' + Person + TO (formell): Diese Regel-Änderung beendet Home-Office-Möglichkeit für alle Mitarbeiter."
      },
      {
        id: "make_let_10",
        question: "Don't _____ anyone tell you that you can't achieve your dreams and goals!",
        translation: "Lass dir von niemandem sagen, dass du deine Träume und Ziele nicht erreichen kannst!",
        options: ["let", "make", "allow", "permit"],
        correct: "let",
        explanation: "'DON'T LET' + Person + Infinitiv: Diese motivierende Aussage ermutigt zu Selbstvertrauen gegen negative fremde Meinungen."
      },
      {
        id: "make_let_11",
        question: "The doctor _____ her to exercise regularly for at least thirty minutes daily.",
        translation: "Der Arzt erlaubte ihr, täglich für mindestens dreißig Minuten regelmäßig zu trainieren.",
        options: ["allowed", "let", "made", "both allowed and let"],
        correct: "allowed",
        explanation: "'ALLOW' (formell, medizinisch): Diese ärztliche Erlaubnis für Sport ist Teil des Gesundheits-Behandlungsplans."
      },
      {
        id: "make_let_12",
        question: "The noise from the street _____ it impossible to concentrate on my work here.",
        translation: "Der Lärm von der Straße macht es unmöglich, mich hier auf meine Arbeit zu konzentrieren.",
        options: ["makes", "lets", "allows", "both makes and allows"],
        correct: "makes",
        explanation: "'MAKE' + Objekt + Adjektiv: 'makes it impossible'. Dieser Straßen-Lärm verhindert aktiv die nötige Konzentration für produktives Arbeiten."
      },
      {
        id: "make_let_13",
        question: "Please _____ the children play outside in the garden for fresh air now.",
        translation: "Bitte lass die Kinder jetzt für frische Luft draußen im Garten spielen.",
        options: ["let", "make", "allow", "permit"],
        correct: "let",
        explanation: "'LET' + Objekt + Infinitiv: Diese Erlaubnis zum Draußen-Spielen ist gesund für Kinder-Bewegung und Frischluft."
      },
      {
        id: "make_let_14",
        question: "Are we _____ to bring our own food and drinks to the park picnic?",
        translation: "Ist es uns erlaubt, unser eigenes Essen und Trinken zum Park-Picknick mitzubringen?",
        options: ["allowed", "let", "made", "permitted"],
        correct: "allowed",
        explanation: "'BE ALLOWED TO' in Frage: Diese Erlaubnis-Anfrage klärt Park-Regeln für selbst mitgebrachte Verpflegung."
      },
      {
        id: "make_let_15",
        question: "The cold weather _____ me wear a warm jacket when going out today.",
        translation: "Das kalte Wetter machte mich dazu, heute beim Rausgehen eine warme Jacke zu tragen.",
        options: ["made", "let", "allowed", "both made and let"],
        correct: "made",
        explanation: "'MAKE' = ZWINGEN (durch Umstände): Diese Kälte erzwang praktisch die Jacken-Wahl für Komfort und Gesundheit."
      }
    ]
  },

  preference_expressions: {
    name: "Expressing Preferences",
    description: "Vorlieben ausdrücken - would rather, prefer, would prefer nutzen",
    icon: Scale,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "pref_1",
        question: "I'd rather _____ at home tonight than go to the crowded noisy party.",
        translation: "Ich würde lieber heute Abend zu Hause bleiben, als zur überfüllten lauten Party zu gehen.",
        options: ["stay", "to stay", "staying", "stayed"],
        correct: "stay",
        explanation: "'WOULD RATHER' + Infinitiv OHNE to: 'would rather stay than go'. Diese Präferenz-Form vergleicht zwei Optionen direkt."
      },
      {
        id: "pref_2",
        question: "She prefers _____ tea to coffee in the morning for her daily routine.",
        translation: "Sie bevorzugt morgens für ihre tägliche Routine Tee gegenüber Kaffee.",
        options: ["drinking", "to drink", "drink", "both drinking and to drink"],
        correct: "drinking",
        explanation: "'PREFER' + Gerund + 'TO' + Nomen: 'prefers drinking tea to coffee'. Diese Getränke-Präferenz ist persönliche Geschmacks-Wahl."
      },
      {
        id: "pref_3",
        question: "Would you prefer _____ here or shall we go to a different restaurant?",
        translation: "Würdest du es vorziehen, hier zu essen, oder sollen wir zu einem anderen Restaurant gehen?",
        options: ["to eat", "eating", "eat", "both to eat and eating"],
        correct: "to eat",
        explanation: "'WOULD PREFER' + TO-Infinitiv: Diese höfliche Restaurant-Wahl-Frage gibt dem Gegenüber Entscheidungs-Freiheit."
      },
      {
        id: "pref_4",
        question: "He'd rather not _____ about his past difficult experiences if that's okay.",
        translation: "Er würde lieber nicht über seine vergangenen schweren Erfahrungen reden, wenn das okay ist.",
        options: ["talk", "to talk", "talking", "talked"],
        correct: "talk",
        explanation: "'WOULD RATHER NOT' + Infinitiv ohne to: Diese Vermeidungs-Präferenz respektiert emotionale Grenzen bei schmerzlichen Themen."
      },
      {
        id: "pref_5",
        question: "I prefer _____ walk to work rather than _____ the bus every morning.",
        translation: "Ich gehe lieber zu Fuß zur Arbeit, als jeden Morgen den Bus zu nehmen.",
        options: ["to / take", "walking / taking", "to / to take", "walk / take"],
        correct: "to / take",
        explanation: "'PREFER TO...RATHER THAN' + Infinitiv: Diese aktive Pendel-Wahl bietet Bewegung statt passivem Bus-Fahren."
      },
      {
        id: "pref_6",
        question: "She'd prefer _____ the work herself rather than ask for help from others.",
        translation: "Sie würde es vorziehen, die Arbeit selbst zu machen, anstatt andere um Hilfe zu bitten.",
        options: ["to do", "doing", "do", "both to do and doing"],
        correct: "to do",
        explanation: "'WOULD PREFER TO...RATHER THAN': Diese Selbstständigkeits-Präferenz zeigt Unabhängigkeits-Wunsch bei Aufgaben-Erledigung."
      },
      {
        id: "pref_7",
        question: "Would you rather _____ now or wait until after lunch to start meeting?",
        translation: "Würdest du lieber jetzt anfangen oder bis nach dem Mittagessen warten, um das Meeting zu beginnen?",
        options: ["start", "to start", "starting", "started"],
        correct: "start",
        explanation: "'WOULD RATHER...OR': Diese Zeit-Wahl-Frage gibt Flexibilität für Meeting-Beginn nach persönlicher Präferenz."
      },
      {
        id: "pref_8",
        question: "I much prefer _____ in the mountains to lying on the beach in summer.",
        translation: "Ich bevorzuge im Sommer viel mehr das Wandern in den Bergen als am Strand zu liegen.",
        options: ["hiking", "to hike", "hike", "both hiking and to hike"],
        correct: "hiking",
        explanation: "'MUCH PREFER' + Gerund + 'TO' + Gerund: Diese starke Berg-Präferenz über Strand zeigt aktiven Urlaubs-Stil."
      },
      {
        id: "pref_9",
        question: "He'd rather you _____ tell anyone about this private matter we discussed.",
        translation: "Er würde es vorziehen, dass du niemandem von dieser privaten Angelegenheit erzählst, die wir besprachen.",
        options: ["didn't", "don't", "not", "won't"],
        correct: "didn't",
        explanation: "'WOULD RATHER' + Person + Past (für Andere): 'would rather you didn't tell'. Diese Geheimhaltungs-Präferenz ist höfliche Bitte."
      },
      {
        id: "pref_10",
        question: "They prefer _____ by train rather than _____ because it's more relaxing.",
        translation: "Sie fahren lieber mit dem Zug, als zu fliegen, weil es entspannter ist.",
        options: ["to travel / fly", "traveling / flying", "to travel / to fly", "travel / fly"],
        correct: "to travel / fly",
        explanation: "'PREFER TO...RATHER THAN' + Infinitiv: Diese Zug-über-Flug-Präferenz schätzt Entspannung über Geschwindigkeit."
      },
      {
        id: "pref_11",
        question: "I'd rather _____ waited for me instead of leaving without saying anything yesterday.",
        translation: "Ich hätte es lieber gehabt, wenn du gestern auf mich gewartet hättest, anstatt zu gehen, ohne etwas zu sagen.",
        options: ["you had", "you have", "you", "you would"],
        correct: "you had",
        explanation: "'WOULD RATHER' + Person + Past Perfect (Bedauern): Diese Struktur drückt Wunsch über vergangene Situation aus."
      },
      {
        id: "pref_12",
        question: "She prefers not _____ disturbed when she's working on important projects at office.",
        translation: "Sie möchte es vorziehen, nicht gestört zu werden, wenn sie im Büro an wichtigen Projekten arbeitet.",
        options: ["to be", "being", "be", "been"],
        correct: "to be",
        explanation: "'PREFER NOT TO BE' + Past Participle: Diese Ruhe-Präferenz bei konzentrierter Arbeit ist vernünftig für Produktivität."
      },
      {
        id: "pref_13",
        question: "Would you rather I _____ the meeting or would you like to lead it yourself?",
        translation: "Würdest du es vorziehen, dass ich das Meeting leite, oder möchtest du es selbst leiten?",
        options: ["led", "lead", "leading", "to lead"],
        correct: "led",
        explanation: "'WOULD RATHER' + Person + Past: Diese Leitungs-Rollen-Frage bietet flexible Meeting-Verantwortungs-Verteilung an."
      },
      {
        id: "pref_14",
        question: "Most people prefer _____ online nowadays rather than going to physical stores.",
        translation: "Die meisten Leute bevorzugen heutzutage das Online-Einkaufen, anstatt zu physischen Läden zu gehen.",
        options: ["shopping", "to shop", "shop", "both shopping and to shop"],
        correct: "shopping",
        explanation: "'PREFER' + Gerund: Diese moderne Einkaufs-Präferenz zeigt digitalen Wandel im Konsum-Verhalten der Gesellschaft."
      },
      {
        id: "pref_15",
        question: "I'd prefer you _____ smoke in the house - please use the balcony outside.",
        translation: "Ich würde es vorziehen, dass du nicht im Haus rauchst - bitte nutze den Balkon draußen.",
        options: ["didn't", "don't", "not", "won't"],
        correct: "didn't",
        explanation: "'WOULD PREFER' + Person + Past: Diese höfliche Rauch-Orts-Präferenz schützt Innenraum-Luft-Qualität."
      }
    ]
  },

  have_something_done_advanced: {
    name: "Have/Get Something Done (Advanced)",
    description: "Erweiterte Causative - komplexere have/get done Strukturen",
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "caus_adv_1",
        question: "I need to _____ before the important job interview next week downtown.",
        translation: "Ich muss mir vor dem wichtigen Bewerbungsgespräch nächste Woche in der Innenstadt die Haare schneiden lassen.",
        options: ["have my hair cut", "cut my hair", "have cut my hair", "get cutting my hair"],
        correct: "have my hair cut",
        explanation: "'HAVE' + Objekt + Past Participle: Jemand anders schneidet die Haare für mich. Diese professionelle Vorbereitung ist wichtig für guten ersten Eindruck."
      },
      {
        id: "caus_adv_2",
        question: "She's going to _____ next month by a professional photographer for her portfolio.",
        translation: "Sie wird sich nächsten Monat von einem professionellen Fotografen für ihr Portfolio Fotos machen lassen.",
        options: ["have her photo taken", "take her photo", "have taken her photo", "get taking her photo"],
        correct: "have her photo taken",
        explanation: "Zukunft: 'going to HAVE' + Objekt + Past Participle. Diese professionelle Foto-Session ist wichtig für Portfolio-Qualität."
      },
      {
        id: "caus_adv_3",
        question: "We should _____ before winter comes and it gets too cold outside.",
        translation: "Wir sollten das Dach reparieren lassen, bevor der Winter kommt und es draußen zu kalt wird.",
        options: ["have the roof repaired", "repair the roof", "have repaired the roof", "get repairing the roof"],
        correct: "have the roof repaired",
        explanation: "Mit Modal: 'should HAVE' + Objekt + Past Participle. Diese rechtzeitige Dachdecker-Beauftragung vor Winter ist vorausschauende Planung."
      },
      {
        id: "caus_adv_4",
        question: "I'm _____ right now by a specialist because my old one broke completely.",
        translation: "Ich lasse mir gerade von einem Spezialisten meinen Computer reparieren, weil mein alter komplett kaputt ging.",
        options: ["having my computer repaired", "repairing my computer", "having repaired my computer", "getting my computer repair"],
        correct: "having my computer repaired",
        explanation: "JETZT: Present Continuous 'HAVING' + Objekt + Past Participle. Diese laufende Reparatur durch Techniker ist gerade im Gange."
      },
      {
        id: "caus_adv_5",
        question: "Did you _____ at the garage or did you do it yourself at home?",
        translation: "Hast du dein Auto in der Werkstatt waschen lassen oder hast du es selbst zu Hause gemacht?",
        options: ["have your car washed", "wash your car", "have washed your car", "get your car washing"],
        correct: "have your car washed",
        explanation: "Frage Vergangenheit: 'Did you HAVE' + Objekt + Past Participle. Diese Frage unterscheidet zwischen Service-Nutzung und Selbst-Erledigung."
      },
      {
        id: "caus_adv_6",
        question: "They want to _____ before the wedding ceremony next Saturday evening.",
        translation: "Sie möchten sich vor der Hochzeitszeremonie nächsten Samstagabend die Nägel machen lassen.",
        options: ["have their nails done", "do their nails", "have done their nails", "get doing their nails"],
        correct: "have their nails done",
        explanation: "'WANT TO HAVE' + Objekt + Past Participle: Diese Schönheits-Vorbereitung ist typischer Teil der Hochzeits-Vorbereitungen."
      },
      {
        id: "caus_adv_7",
        question: "You ought to _____ by a doctor if the pain continues much longer.",
        translation: "Du solltest dich von einem Arzt untersuchen lassen, wenn der Schmerz noch viel länger anhält.",
        options: ["have yourself checked", "check yourself", "have checked yourself", "get yourself checking"],
        correct: "have yourself checked",
        explanation: "'OUGHT TO HAVE' + yourself + Past Participle: Dieser medizinische Rat bei anhaltenden Schmerzen ist wichtig für Gesundheit."
      },
      {
        id: "caus_adv_8",
        question: "I must _____ - they're getting too long and wild-looking now!",
        translation: "Ich muss mir die Haare schneiden lassen - sie werden jetzt zu lang und verwildert aussehend!",
        options: ["have my hair cut", "cut my hair", "have cut my hair", "get my hair cutting"],
        correct: "have my hair cut",
        explanation: "'MUST HAVE' + Objekt + Past Participle: Diese Friseur-Notwendigkeit ist bei zu langer Haar-Länge dringend geworden."
      },
      {
        id: "caus_adv_9",
        question: "She _____ three times already this year - it keeps breaking down constantly!",
        translation: "Sie hat ihr Auto dieses Jahr schon dreimal reparieren lassen - es geht ständig kaputt!",
        options: ["has had her car repaired", "has repaired her car", "had her car repaired", "is having her car repaired"],
        correct: "has had her car repaired",
        explanation: "Present Perfect: 'HAS HAD' + Objekt + Past Participle. Diese wiederholten Werkstatt-Besuche zeigen chronisches Auto-Problem."
      },
      {
        id: "caus_adv_10",
        question: "Where do you usually _____ when you need professional styling for events?",
        translation: "Wo lässt du dir normalerweise die Haare machen, wenn du professionelles Styling für Events brauchst?",
        options: ["have your hair done", "do your hair", "have done your hair", "get your hair doing"],
        correct: "have your hair done",
        explanation: "GEWOHNHEIT: 'do you have...done'. Diese Frage nach üblichem Friseur-Ort ist bei regelmäßigem Styling-Bedarf relevant."
      },
      {
        id: "caus_adv_11",
        question: "We're _____ while we're away on vacation for two weeks abroad.",
        translation: "Wir lassen unser Haus reinigen, während wir zwei Wochen im Auslandsurlaub sind.",
        options: ["having our house cleaned", "cleaning our house", "having cleaned our house", "getting our house cleaning"],
        correct: "having our house cleaned",
        explanation: "Present Continuous: Diese Reinigungs-Beauftragung während Abwesenheit ist praktische Urlaubs-Zeit-Nutzung."
      },
      {
        id: "caus_adv_12",
        question: "He _____ last month after the car accident on the highway near our town.",
        translation: "Er ließ sich letzten Monat nach dem Auto-Unfall auf der Autobahn nahe unserer Stadt das Bein röntgen.",
        options: ["had his leg X-rayed", "X-rayed his leg", "had X-rayed his leg", "got his leg X-raying"],
        correct: "had his leg X-rayed",
        explanation: "Vergangenheit: 'HAD' + Objekt + Past Participle. Diese medizinische Untersuchung nach Unfall war notwendig für Diagnose."
      },
      {
        id: "caus_adv_13",
        question: "I'm thinking of _____ to match the new furniture we bought recently.",
        translation: "Ich denke daran, die Wände streichen zu lassen, damit sie zu den neuen Möbeln passen, die wir kürzlich kauften.",
        options: ["having the walls painted", "painting the walls", "having painted the walls", "getting the walls painting"],
        correct: "having the walls painted",
        explanation: "'THINKING OF HAVING' + Objekt + Past Participle: Diese Maler-Beauftragung würde Raum-Harmonie mit neuen Möbeln schaffen."
      },
      {
        id: "caus_adv_14",
        question: "You should _____ regularly every six months for good oral health maintenance.",
        translation: "Du solltest dir regelmäßig alle sechs Monate für gute Mundgesundheits-Pflege die Zähne reinigen lassen.",
        options: ["have your teeth cleaned", "clean your teeth", "have cleaned your teeth", "get your teeth cleaning"],
        correct: "have your teeth cleaned",
        explanation: "'SHOULD HAVE' + Objekt + Past Participle: Diese zahnärztliche Routine-Empfehlung ist wichtig für langfristige Zahn-Gesundheit."
      },
      {
        id: "caus_adv_15",
        question: "We need to _____ before the important dinner party guests arrive tonight.",
        translation: "Wir müssen das Haus putzen lassen, bevor heute Abend die wichtigen Dinner-Party-Gäste ankommen.",
        options: ["have the house cleaned", "clean the house", "have cleaned the house", "get the house cleaning"],
        correct: "have the house cleaned",
        explanation: "'NEED TO HAVE' + Objekt + Past Participle. Diese Reinigungs-Beauftragung vor Gäste-Ankunft sorgt für repräsentativen Zustand."
      }
    ]
  },

  still_yet_already: {
    name: "Still/Yet/Already",
    description: "Zeitliche Nuancen - still, yet, already für verschiedene Situationen",
    icon: ShieldCheck,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "time_nuance_1",
        question: "I _____ haven't finished my homework - I'll do it after dinner tonight.",
        translation: "Ich habe meine Hausaufgaben noch nicht fertig - ich werde sie heute Abend nach dem Essen machen.",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' + Negativ = noch immer nicht: 'still haven't finished'. Diese fortdauernde Unfertigkeit wird später behoben werden."
      },
      {
        id: "time_nuance_2",
        question: "Have you finished the report _____? The deadline is tomorrow morning early!",
        translation: "Hast du den Bericht schon fertig? Die Deadline ist morgen früh!",
        options: ["yet", "still", "already", "both yet and already"],
        correct: "yet",
        explanation: "'YET' am SATZ-Ende in Fragen: 'finished yet?' (schon fertig?). Diese Deadline-Druck-Frage erwartet baldige Fertigstellung."
      },
      {
        id: "time_nuance_3",
        question: "She's _____ working on that project even though it's past midnight now!",
        translation: "Sie arbeitet noch an jenem Projekt, obwohl es jetzt schon nach Mitternacht ist!",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' + Positiv = noch immer (überraschend): Diese späte Arbeits-Fortsetzung nach Mitternacht zeigt große Hingabe oder Zeitdruck."
      },
      {
        id: "time_nuance_4",
        question: "I've _____ seen that movie three times - it's my absolute favorite film!",
        translation: "Ich habe jenen Film schon dreimal gesehen - es ist mein absoluter Lieblingsfilm!",
        options: ["already", "still", "yet", "both already and still"],
        correct: "already",
        explanation: "'ALREADY' = schon (mehr als erwartet): Diese dreimalige Sichtung zeigt besondere Film-Begeisterung und Wertschätzung."
      },
      {
        id: "time_nuance_5",
        question: "Are you _____ waiting for the bus? It's been over an hour now!",
        translation: "Wartest du noch auf den Bus? Es ist jetzt schon über eine Stunde her!",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' in Frage = noch immer (Ungeduld): Diese überlange Warte-Zeit ist frustrierend und ungewöhnlich."
      },
      {
        id: "time_nuance_6",
        question: "I haven't decided _____ which university to attend next year in autumn.",
        translation: "Ich habe noch nicht entschieden, welche Universität ich nächstes Jahr im Herbst besuchen werde.",
        options: ["yet", "still", "already", "both yet and still"],
        correct: "yet",
        explanation: "'YET' am Ende in Negativ: 'haven't decided yet' (noch nicht entschieden). Diese wichtige Studien-Entscheidung braucht Zeit."
      },
      {
        id: "time_nuance_7",
        question: "He's _____ arrived at the meeting - we weren't expecting him so early today!",
        translation: "Er ist schon beim Meeting angekommen - wir erwarteten ihn heute nicht so früh!",
        options: ["already", "still", "yet", "both already and still"],
        correct: "already",
        explanation: "'ALREADY' = schon (früher als erwartet): Diese überraschend frühe Ankunft ist positiv aber unerwartet."
      },
      {
        id: "time_nuance_8",
        question: "Is she _____ living in that old apartment or has she moved out?",
        translation: "Wohnt sie noch in jener alten Wohnung oder ist sie ausgezogen?",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' in Frage (Dauer): Diese Wohn-Situations-Frage erkundigt sich nach Veränderung oder Kontinuität."
      },
      {
        id: "time_nuance_9",
        question: "Haven't you left for work _____? You're going to be very late today!",
        translation: "Bist du noch nicht zur Arbeit aufgebrochen? Du wirst heute sehr spät sein!",
        options: ["yet", "still", "already", "both yet and still"],
        correct: "yet",
        explanation: "'YET' am Ende (Ungeduld/Sorge): Diese verspätete Abfahrt-Feststellung zeigt Besorgnis über drohende Verspätung."
      },
      {
        id: "time_nuance_10",
        question: "They've _____ booked their summer vacation flights even though it's only February!",
        translation: "Sie haben ihre Sommerurlaubs-Flüge schon gebucht, obwohl es erst Februar ist!",
        options: ["already", "still", "yet", "both already and still"],
        correct: "already",
        explanation: "'ALREADY' = schon (sehr früh): Diese frühe Urlaubs-Buchung im Februar zeigt gute Vorausplanung oder Schnäppchen-Jagd."
      },
      {
        id: "time_nuance_11",
        question: "Are you _____ interested in buying that expensive house we saw last week?",
        translation: "Bist du noch interessiert daran, jenes teure Haus zu kaufen, das wir letzte Woche sahen?",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' in Frage (Interesse-Kontinuität): Diese Kauf-Interesse-Nachfrage prüft, ob frühere Begeisterung anhält trotz hohem Preis."
      },
      {
        id: "time_nuance_12",
        question: "I _____ can't believe he actually did that - it was so surprising to everyone!",
        translation: "Ich kann noch immer nicht glauben, dass er das tatsächlich tat - es war für alle so überraschend!",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' + can't believe = andauerndes Nicht-Glauben: Diese anhaltende Überraschung zeigt wie schockierend die Handlung war."
      },
      {
        id: "time_nuance_13",
        question: "Has the mail arrived _____? I'm expecting an important package today urgently.",
        translation: "Ist die Post schon angekommen? Ich erwarte heute dringend ein wichtiges Paket.",
        options: ["yet", "still", "already", "both yet and already"],
        correct: "yet",
        explanation: "'YET' in Frage = schon: Diese dringende Paket-Erwartung macht häufige Post-Ankunft-Überprüfung nötig."
      },
      {
        id: "time_nuance_14",
        question: "It's _____ raining outside after three days - when will it finally stop?",
        translation: "Es regnet draußen noch nach drei Tagen - wann wird es endlich aufhören?",
        options: ["still", "yet", "already", "both still and yet"],
        correct: "still",
        explanation: "'STILL' + Positiv (Frustration): Dieser dreitägige Dauer-Regen ist frustrierend und lässt auf Ende hoffen."
      },
      {
        id: "time_nuance_15",
        question: "I've _____ told you five times - please listen carefully and remember this time!",
        translation: "Ich habe es dir schon fünfmal gesagt - bitte höre sorgfältig zu und merke es dir diesmal!",
        options: ["already", "still", "yet", "both already and still"],
        correct: "already",
        explanation: "'ALREADY' + Zahl (Wiederholung/Frustration): Diese fünffache Wiederholung zeigt Gedulds-Grenze bei nicht-Zuhören."
      }
    ]
  }
};

export default part24Categories;
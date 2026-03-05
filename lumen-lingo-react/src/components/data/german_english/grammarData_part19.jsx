/**
 * GERMAN → ENGLISH GRAMMAR - PART 19
 * 3 categories, 15 questions each
 */

import { Layers, TrendingUp, Building } from "lucide-react";

export const part19Categories = {
  phrasal_verbs_separable: {
    name: "Phrasal Verbs (Separable)",
    description: "Trennbare Phrasal Verbs - Partikel-Position richtig wählen",
    icon: Layers,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "phr_sep_1",
        question: "Please turn _____ the lights when you leave the room to save energy.",
        translation: "Bitte schalte die Lichter aus, wenn du den Raum verlässt, um Energie zu sparen.",
        options: ["off", "of", "out", "down"],
        correct: "off",
        explanation: "'TURN OFF' = ausschalten (trennbar): 'turn the lights off' oder 'turn off the lights'. Beide Positionen sind korrekt bei trennbaren Phrasal Verbs."
      },
      {
        id: "phr_sep_2",
        question: "She's going to give _____ smoking next year for her health and wellbeing.",
        translation: "Sie wird nächstes Jahr für ihre Gesundheit und ihr Wohlbefinden das Rauchen aufgeben.",
        options: ["up", "in", "out", "away"],
        correct: "up",
        explanation: "'GIVE UP' = aufgeben/aufhören: Diese Rauch-Aufgabe-Entscheidung ist wichtiger positiver Gesundheits-Schritt für Zukunft."
      },
      {
        id: "phr_sep_3",
        question: "Can you pick me _____ from the airport tomorrow morning at eight o'clock?",
        translation: "Kannst du mich morgen früh um acht Uhr vom Flughafen abholen?",
        options: ["up", "out", "off", "in"],
        correct: "up",
        explanation: "'PICK UP' = abholen (Person/Ding): Bei Pronomen MUSS Partikel dahinter: 'pick me up'. Diese Abhol-Bitte ist für Transport nach Flug."
      },
      {
        id: "phr_sep_4",
        question: "I need to look _____ this new word in the dictionary to understand it properly.",
        translation: "Ich muss dieses neue Wort im Wörterbuch nachschlagen, um es richtig zu verstehen.",
        options: ["up", "for", "at", "after"],
        correct: "up",
        explanation: "'LOOK UP' = nachschlagen (Information suchen): Diese Wörterbuch-Nutzung ist wichtig für Wort-Verständnis beim Lernen."
      },
      {
        id: "phr_sep_5",
        question: "Could you fill _____ this form please and give it back to me soon?",
        translation: "Könntest du bitte dieses Formular ausfüllen und es mir bald zurückgeben?",
        options: ["in", "out", "both in and out", "up"],
        correct: "both in and out",
        explanation: "'FILL IN' (UK) oder 'FILL OUT' (US) beide korrekt: Formular ausfüllen. Diese Formular-Bitte ist Standard-Verwaltungs-Anforderung."
      },
      {
        id: "phr_sep_6",
        question: "He put _____ his jacket because it was getting cold outside in evening.",
        translation: "Er zog seine Jacke an, weil es draußen am Abend kalt wurde.",
        options: ["on", "in", "up", "off"],
        correct: "on",
        explanation: "'PUT ON' = anziehen (Kleidung): Gegenteil von 'take off'. Diese Jacken-Anzieh-Reaktion auf Kälte ist praktische Anpassung."
      },
      {
        id: "phr_sep_7",
        question: "We should work _____ a solution to this complicated problem together as team.",
        translation: "Wir sollten zusammen als Team eine Lösung für dieses komplizierte Problem erarbeiten.",
        options: ["out", "up", "in", "off"],
        correct: "out",
        explanation: "'WORK OUT' = erarbeiten/finden: 'work out a solution'. Diese Team-Problemlösung ist kollektiver Denk-Prozess."
      },
      {
        id: "phr_sep_8",
        question: "Don't forget to back _____ your important computer files regularly every week!",
        translation: "Vergiss nicht, deine wichtigen Computerdateien regelmäßig jede Woche zu sichern!",
        options: ["up", "off", "out", "in"],
        correct: "up",
        explanation: "'BACK UP' = sichern (Daten): Diese wöchentliche Backup-Routine ist wichtiger Datenverlust-Schutz."
      },
      {
        id: "phr_sep_9",
        question: "I'll call you _____ when I arrive at the hotel tonight safely and securely.",
        translation: "Ich rufe dich heute Abend an, wenn ich sicher im Hotel ankomme.",
        options: ["up", "back", "both up and back", "in"],
        correct: "both up and back",
        explanation: "'CALL UP' = anrufen oder 'CALL BACK' = zurückrufen: beide möglich. Dieser Anruf ist Ankunfts-Bestätigung für Beruhigung."
      },
      {
        id: "phr_sep_10",
        question: "She threw _____ all her old clothes that didn't fit anymore last weekend.",
        translation: "Sie warf letztes Wochenende all ihre alten Kleider weg, die nicht mehr passten.",
        options: ["away", "out", "both away and out", "off"],
        correct: "both away and out",
        explanation: "'THROW AWAY' oder 'THROW OUT' = wegwerfen: beide korrekt. Diese Kleidungs-Aussortierung ist Platz-Schaffen und Aufräumen."
      },
      {
        id: "phr_sep_11",
        question: "Could you turn _____ the TV? I can't hear it clearly from the kitchen.",
        translation: "Könntest du den Fernseher lauter machen? Ich kann ihn nicht klar aus der Küche hören.",
        options: ["up", "on", "off", "down"],
        correct: "up",
        explanation: "'TURN UP' = lauter machen (Gegenteil: turn down). Diese Lautstärke-Erhöhungs-Bitte ist für besseres Hören aus anderem Raum."
      },
      {
        id: "phr_sep_12",
        question: "He took _____ his shoes before entering the clean house as is custom here.",
        translation: "Er zog seine Schuhe aus, bevor er das saubere Haus betrat, wie es hier Sitte ist.",
        options: ["off", "out", "away", "down"],
        correct: "off",
        explanation: "'TAKE OFF' = ausziehen (Kleidung/Schuhe): Diese Schuhe-Auszieh-Höflichkeit ist wichtige kulturelle Haus-Eintritts-Regel."
      },
      {
        id: "phr_sep_13",
        question: "I need to think _____ your job offer carefully before making final decision soon.",
        translation: "Ich muss dein Jobangebot sorgfältig durchdenken, bevor ich bald die endgültige Entscheidung treffe.",
        options: ["over", "about", "both over and about", "up"],
        correct: "both over and about",
        explanation: "'THINK OVER' oder 'THINK ABOUT' = nachdenken über: Diese Job-Überlegung erfordert Zeit für wichtige Karriere-Entscheidung."
      },
      {
        id: "phr_sep_14",
        question: "They've decided to put _____ the meeting until next month due to schedule conflicts.",
        translation: "Sie haben entschieden, das Meeting wegen Terminüberschneidungen bis nächsten Monat zu verschieben.",
        options: ["off", "on", "away", "out"],
        correct: "off",
        explanation: "'PUT OFF' = verschieben (zeitlich): Diese Meeting-Verschiebung löst Kalender-Konflikt-Problem für alle Teilnehmer."
      },
      {
        id: "phr_sep_15",
        question: "You should write _____ important information so you don't forget it later completely.",
        translation: "Du solltest wichtige Informationen aufschreiben, damit du sie später nicht komplett vergisst.",
        options: ["down", "up", "out", "off"],
        correct: "down",
        explanation: "'WRITE DOWN' = aufschreiben/notieren: Diese Notiz-Gewohnheit ist praktische Gedächtnis-Hilfe gegen Vergessen wichtiger Details."
      }
    ]
  },

  conditionals_mixed: {
    name: "Mixed Conditionals",
    description: "Gemischte Bedingungssätze - verschiedene Zeiten kombinieren",
    icon: TrendingUp,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "mix_cond_1",
        question: "If I had studied medicine years ago, I _____ be a doctor now working in hospital.",
        translation: "Wenn ich vor Jahren Medizin studiert hätte, wäre ich jetzt Arzt und würde im Krankenhaus arbeiten.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "MIXED Conditional: Past Perfect + would (Vergangenheit → Gegenwart). Diese Bedauern über vergangene Studien-Entscheidung betrifft heutige Situation."
      },
      {
        id: "mix_cond_2",
        question: "If she were more confident now, she _____ applied for that job last month.",
        translation: "Wenn sie jetzt selbstbewusster wäre, hätte sie sich letzten Monat auf jenen Job beworben.",
        options: ["would have", "will have", "would", "had"],
        correct: "would have",
        explanation: "MIXED: Past + would have (Gegenwart → Vergangenheit). Dieser fehlende Mut jetzt erklärt verpasste Job-Chance damals."
      },
      {
        id: "mix_cond_3",
        question: "If you had taken my advice then, you _____ be in this difficult situation now.",
        translation: "Wenn du damals meinen Rat befolgt hättest, wärst du jetzt nicht in dieser schweren Situation.",
        options: ["wouldn't", "won't", "wouldn't have", "hadn't"],
        correct: "wouldn't",
        explanation: "MIXED: Past Perfect + wouldn't be (Vergangenheit → Gegenwart Negativ). Diese Rat-Ignorierung damals verursacht heutige Probleme."
      },
      {
        id: "mix_cond_4",
        question: "If he weren't so lazy normally, he _____ finished the project on time last week.",
        translation: "Wenn er normalerweise nicht so faul wäre, hätte er das Projekt letzte Woche pünktlich beendet.",
        options: ["would have", "will have", "would", "had"],
        correct: "would have",
        explanation: "MIXED: Past + would have (jetzige Eigenschaft → vergangenes Resultat). Diese chronische Faulheit erklärt Projekt-Verspätung."
      },
      {
        id: "mix_cond_5",
        question: "If I had saved more money earlier, I _____ afford that nice house now easily.",
        translation: "Wenn ich früher mehr Geld gespart hätte, könnte ich mir jenes schöne Haus jetzt leicht leisten.",
        options: ["could", "can", "could have", "had"],
        correct: "could",
        explanation: "MIXED: Past Perfect + could (Vergangenheit → Gegenwart). Dieses Spar-Versäumnis früher begrenzt heutige Kaufkraft."
      },
      {
        id: "mix_cond_6",
        question: "If she spoke English fluently now, she _____ gotten that international job offer last year.",
        translation: "Wenn sie jetzt fließend Englisch spräche, hätte sie letztes Jahr jenes internationale Jobangebot bekommen.",
        options: ["would have", "will have", "would", "had"],
        correct: "would have",
        explanation: "MIXED: Past + would have (jetzige Fähigkeit → vergangene Chance). Diese fehlende Sprachkompetenz kostete Job-Gelegenheit."
      },
      {
        id: "mix_cond_7",
        question: "If they had listened to the weather forecast, they _____ be stuck in snow now.",
        translation: "Wenn sie auf die Wettervorhersage gehört hätten, würden sie jetzt nicht im Schnee feststecken.",
        options: ["wouldn't", "won't", "wouldn't have", "hadn't"],
        correct: "wouldn't",
        explanation: "MIXED: Past Perfect + wouldn't be (Vergangenheit → Gegenwart). Diese Vorhersage-Ignorierung führt zu aktueller misslicher Lage."
      },
      {
        id: "mix_cond_8",
        question: "If I weren't afraid of heights, I _____ tried skydiving when I had the chance.",
        translation: "Wenn ich keine Höhenangst hätte, hätte ich Fallschirmspringen probiert, als ich die Chance hatte.",
        options: ["would have", "will have", "would", "had"],
        correct: "would have",
        explanation: "MIXED: Past + would have (dauernde Angst → verpasste Gelegenheit). Diese Höhenangst verhinderte Abenteuer-Erfahrung damals."
      },
      {
        id: "mix_cond_9",
        question: "If we had bought Bitcoin five years ago, we _____ be rich millionaires today!",
        translation: "Wenn wir vor fünf Jahren Bitcoin gekauft hätten, wären wir heute reiche Millionäre!",
        options: ["would", "will", "would have", "were"],
        correct: "would",
        explanation: "MIXED: Past Perfect + would be (Vergangenheit → Gegenwart). Diese verpasste Krypto-Investition ist häufiges finanzielles Bedauern."
      },
      {
        id: "mix_cond_10",
        question: "If you were more organized generally, you _____ lost your keys yesterday morning.",
        translation: "Wenn du allgemein organisierter wärst, hättest du gestern Morgen deine Schlüssel nicht verloren.",
        options: ["wouldn't have", "won't have", "wouldn't", "hadn't"],
        correct: "wouldn't have",
        explanation: "MIXED: Past + wouldn't have (dauernde Eigenschaft → vergangenes Problem). Diese Organisations-Schwäche führte zu Schlüssel-Verlust."
      },
      {
        id: "mix_cond_11",
        question: "If she had passed her driving test then, she _____ have a car now for commuting.",
        translation: "Wenn sie damals ihren Führerscheintest bestanden hätte, hätte sie jetzt ein Auto zum Pendeln.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "MIXED: Past Perfect + would have (Vergangenheit → Gegenwart). Dieser Test-Misserfolg damals verhindert heutigen Auto-Besitz."
      },
      {
        id: "mix_cond_12",
        question: "If he weren't so stubborn always, he _____ admitted his mistake immediately yesterday.",
        translation: "Wenn er nicht immer so stur wäre, hätte er gestern sofort seinen Fehler zugegeben.",
        options: ["would have", "will have", "would", "had"],
        correct: "would have",
        explanation: "MIXED: Past + would have (dauernder Charakter → vergangenes Verhalten). Diese Sturheit verhinderte gestrige Fehler-Eingeständnis."
      },
      {
        id: "mix_cond_13",
        question: "If they had moved to the city earlier, they _____ have better job opportunities now.",
        translation: "Wenn sie früher in die Stadt gezogen wären, hätten sie jetzt bessere Job-Möglichkeiten.",
        options: ["would", "will", "would have", "had"],
        correct: "would",
        explanation: "MIXED: Past Perfect + would have (Vergangenheit → Gegenwart). Dieser verspätete Stadt-Umzug begrenzt aktuelle Karriere-Chancen."
      },
      {
        id: "mix_cond_14",
        question: "If I could speak German perfectly, I _____ taken that job in Berlin last year.",
        translation: "Wenn ich perfekt Deutsch sprechen könnte, hätte ich letztes Jahr jenen Job in Berlin genommen.",
        options: ["would have", "will have", "would", "had"],
        correct: "would have",
        explanation: "MIXED: Past + would have (jetzige Fähigkeit → vergangene Entscheidung). Diese Sprachlücke kostete Berlin-Job-Gelegenheit."
      },
      {
        id: "mix_cond_15",
        question: "If we had known about the traffic jam earlier, we _____ be sitting here frustrated now.",
        translation: "Wenn wir früher vom Verkehrsstau gewusst hätten, würden wir jetzt nicht frustriert hier sitzen.",
        options: ["wouldn't", "won't", "wouldn't have", "hadn't"],
        correct: "wouldn't",
        explanation: "MIXED: Past Perfect + wouldn't be (Vergangenheit → Gegenwart). Diese fehlende Stau-Information führt zu aktueller Frustration."
      }
    ]
  },

  need_dont_need: {
    name: "Need vs Don't Need vs Needn't",
    description: "Notwendigkeit - need in verschiedenen Formen ausdrücken",
    icon: Building,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "need_1",
        question: "You _____ to bring anything to the party - we have everything prepared already!",
        translation: "Du brauchst nichts zur Party mitzubringen - wir haben schon alles vorbereitet!",
        options: ["don't need", "needn't", "both correct", "mustn't"],
        correct: "both correct",
        explanation: "'DON'T NEED TO' oder 'NEEDN'T' beide = nicht nötig: Diese Party-Entlastung ist freundliche Gastgeber-Information."
      },
      {
        id: "need_2",
        question: "I _____ go to the dentist next week for my regular checkup appointment scheduled.",
        translation: "Ich muss nächste Woche zu meinem geplanten regelmäßigen Checkup-Termin zum Zahnarzt gehen.",
        options: ["need to", "needn't", "don't need", "mustn't"],
        correct: "need to",
        explanation: "'NEED TO' = notwendig (positiv): 'need to go'. Dieser Zahnarzt-Termin ist wichtige regelmäßige Zahngesundheits-Kontrolle."
      },
      {
        id: "need_3",
        question: "She _____ wear a uniform to work anymore - the company changed the dress code.",
        translation: "Sie muss nicht mehr eine Uniform zur Arbeit tragen - die Firma änderte die Kleiderordnung.",
        options: ["doesn't need to", "needn't", "both correct", "mustn't"],
        correct: "both correct",
        explanation: "NICHT MEHR nötig: beide Formen korrekt. Diese Kleiderordnungs-Lockerung gibt mehr Freiheit bei Arbeits-Kleidung."
      },
      {
        id: "need_4",
        question: "You _____ have bought so much food - we can't eat all of this amount!",
        translation: "Du hättest nicht so viel Essen kaufen brauchen - wir können diese Menge nicht alles essen!",
        options: ["needn't", "didn't need to", "both correct", "mustn't"],
        correct: "needn't",
        explanation: "'NEEDN'T HAVE' + Past Participle = war nicht nötig (aber getan). Dieser übermäßige Essens-Kauf ist verschwenderisch."
      },
      {
        id: "need_5",
        question: "Do I _____ bring my passport to the domestic flight within country tomorrow?",
        translation: "Muss ich morgen meinen Pass zum Inlandsflug innerhalb des Landes mitbringen?",
        options: ["need to", "needn't", "don't need", "must"],
        correct: "need to",
        explanation: "FRAGE: 'Do I NEED TO' (brauche ich): Diese Pass-Frage bei Inlandsflug ist wichtig für korrekte Dokument-Vorbereitung."
      },
      {
        id: "need_6",
        question: "He _____ worry about the test results - I'm sure he did very well!",
        translation: "Er braucht sich keine Sorgen über die Testergebnisse zu machen - ich bin sicher, er hat sehr gut abgeschnitten!",
        options: ["doesn't need to", "needn't", "both correct", "mustn't"],
        correct: "both correct",
        explanation: "BERUHIGUNG: beide Formen. Diese Sorgen-Unnötigkeit ist beruhigende Zuversicht über gute Test-Leistung."
      },
      {
        id: "need_7",
        question: "You _____ have waited for me so long - I could have taken the bus home!",
        translation: "Du hättest nicht so lange auf mich warten brauchen - ich hätte den Bus nach Hause nehmen können!",
        options: ["needn't", "didn't need to", "both mean same", "mustn't"],
        correct: "needn't",
        explanation: "'NEEDN'T HAVE' = war unnötig (aber getan): 'didn't need to' = war unnötig (unklar ob getan). Diese lange Warte-Zeit war nicht nötig."
      },
      {
        id: "need_8",
        question: "We _____ leave so early tomorrow morning - the train doesn't depart until noon!",
        translation: "Wir brauchen morgen früh nicht so früh loszufahren - der Zug fährt erst mittags ab!",
        options: ["don't need to", "needn't", "both correct", "mustn't"],
        correct: "both correct",
        explanation: "NICHT NÖTIG: beide Formen. Diese frühe Abfahrts-Unnötigkeit ermöglicht längeres Ausschlafen morgen."
      },
      {
        id: "need_9",
        question: "_____ your hair _____ cutting, or is it fine for now as it is?",
        translation: "Brauchen deine Haare Schneiden, oder ist es jetzt so in Ordnung, wie es ist?",
        options: ["Does / need", "Do / need", "Is / needing", "Are / needing"],
        correct: "Does / need",
        explanation: "'NEED' + Gerund = brauchen (passiv): 'hair needs cutting' = needs to be cut. Diese Haar-Längen-Beurteilung ist für Friseur-Termin."
      },
      {
        id: "need_10",
        question: "I _____ have told her the truth - she found out anyway from someone else!",
        translation: "Ich hätte ihr die Wahrheit nicht sagen brauchen - sie fand es sowieso von jemand anderem heraus!",
        options: ["needn't", "didn't need to", "both mean similar", "mustn't"],
        correct: "needn't",
        explanation: "'NEEDN'T HAVE' = war unnötig (aber gesagt): Diese Wahrheits-Enthüllung war überflüssig, da sie es anders erfuhr."
      },
      {
        id: "need_11",
        question: "You _____ shout - I can hear you perfectly well from here clearly!",
        translation: "Du brauchst nicht zu schreien - ich kann dich von hier aus perfekt klar hören!",
        options: ["don't need to", "needn't", "both correct", "mustn't"],
        correct: "both correct",
        explanation: "NICHT NÖTIG: beide Formen. Diese Schrei-Unnötigkeit zeigt gute Hör-Bedingungen trotz Distanz."
      },
      {
        id: "need_12",
        question: "The car _____ servicing soon - it's been making strange noises recently often.",
        translation: "Das Auto braucht bald Wartung - es macht in letzter Zeit oft seltsame Geräusche.",
        options: ["needs", "need", "is needing", "are needing"],
        correct: "needs",
        explanation: "'NEED' + Gerund (passiv): 'car needs servicing'. Diese Wartungs-Notwendigkeit zeigen die ungewöhnlichen Auto-Geräusche."
      },
      {
        id: "need_13",
        question: "We _____ have hurried to the airport - our flight was delayed by three hours!",
        translation: "Wir hätten uns nicht zum Flughafen beeilen brauchen - unser Flug war um drei Stunden verspätet!",
        options: ["needn't", "didn't need to", "both similar meaning", "mustn't"],
        correct: "needn't",
        explanation: "'NEEDN'T HAVE' = war unnötig (aber getan): Diese Eile war wegen Flug-Verspätung überflüssig und stressig."
      },
      {
        id: "need_14",
        question: "She _____ finish the report today - the deadline is actually next week still.",
        translation: "Sie muss den Bericht heute nicht beenden - die Deadline ist tatsächlich noch nächste Woche.",
        options: ["doesn't need to", "needn't", "both correct", "mustn't"],
        correct: "both correct",
        explanation: "NICHT HEUTE nötig: beide Formen. Diese Deadline-Klarstellung nimmt Zeit-Druck für heute weg."
      },
      {
        id: "need_15",
        question: "These plants _____ watering every single day - just twice a week is enough.",
        translation: "Diese Pflanzen brauchen nicht jeden Tag Gießen - nur zweimal pro Woche ist genug.",
        options: ["don't need", "needn't", "both correct", "mustn't"],
        correct: "don't need",
        explanation: "'DON'T NEED' + Gerund: 'don't need watering'. Diese Gieß-Frequenz-Info ist wichtig für richtige Pflanzen-Pflege."
      }
    ]
  },

  comparison_structures: {
    name: "Advanced Comparisons",
    description: "Erweiterte Vergleiche - komplexe Vergleichsstrukturen meistern",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "comp_adv_1",
        question: "The _____ you practice, the _____ you'll become at playing piano skillfully.",
        translation: "Je mehr du übst, desto besser wirst du darin, geschickt Klavier zu spielen.",
        options: ["more / better", "much / good", "more / good", "much / better"],
        correct: "more / better",
        explanation: "'THE MORE...THE BETTER' = je...desto Struktur: Diese Übungs-Fortschritt-Relation ist fundamentale Lern-Wahrheit."
      },
      {
        id: "comp_adv_2",
        question: "This exercise is twice _____ difficult _____ the previous one we did yesterday.",
        translation: "Diese Übung ist doppelt so schwierig wie die vorherige, die wir gestern machten.",
        options: ["as / as", "more / than", "so / as", "more / as"],
        correct: "as / as",
        explanation: "'TWICE AS...AS' für VERDOPPLUNG: doppelt so schwierig. Diese Schwierigkeits-Steigerung ist deutlicher Komplexitäts-Sprung."
      },
      {
        id: "comp_adv_3",
        question: "She's getting _____ and _____ at speaking English with every passing week now.",
        translation: "Sie wird mit jeder vergehenden Woche jetzt immer besser im Englisch sprechen.",
        options: ["better / better", "more / more", "good / good", "well / well"],
        correct: "better / better",
        explanation: "'BETTER AND BETTER' = immer besser (progressive Steigerung). Diese kontinuierliche Verbesserung zeigt erfolgreichen Lern-Fortschritt."
      },
      {
        id: "comp_adv_4",
        question: "This is by far the _____ movie I've ever watched in my entire life!",
        translation: "Das ist mit Abstand der beste Film, den ich je in meinem ganzen Leben gesehen habe!",
        options: ["best", "better", "good", "well"],
        correct: "best",
        explanation: "'BY FAR THE' + Superlativ: absolute Spitze. Diese extreme Verstärkung macht die Film-Qualitäts-Aussage sehr nachdrücklich."
      },
      {
        id: "comp_adv_5",
        question: "The _____ we wait, the _____ it will be to fix this growing problem later.",
        translation: "Je länger wir warten, desto schwieriger wird es sein, dieses wachsende Problem später zu beheben.",
        options: ["longer / harder", "long / hard", "longer / hardest", "longest / harder"],
        correct: "longer / harder",
        explanation: "'THE LONGER...THE HARDER': Je-desto-Struktur zeigt negative Entwicklung. Dieser Zusammenhang betont Wichtigkeit schnellen Handelns."
      },
      {
        id: "comp_adv_6",
        question: "Your English is much _____ than it was six months ago - great progress made!",
        translation: "Dein Englisch ist viel besser als es vor sechs Monaten war - großer Fortschritt gemacht!",
        options: ["better", "best", "good", "well"],
        correct: "better",
        explanation: "'MUCH' + Komparativ: 'much better' (viel besser). Diese deutliche Verbesserung in sechs Monaten ist ermutigender Lern-Erfolg."
      },
      {
        id: "comp_adv_7",
        question: "This restaurant is nowhere near _____ expensive _____ that luxury five-star one.",
        translation: "Dieses Restaurant ist bei weitem nicht so teuer wie jenes luxuriöse Fünf-Sterne-Restaurant.",
        options: ["as / as", "so / as", "more / than", "as / than"],
        correct: "as / as",
        explanation: "'NOWHERE NEAR AS...AS' = bei weitem nicht so. Diese Preis-Unterschieds-Betonung zeigt große Budget-Freundlichkeit."
      },
      {
        id: "comp_adv_8",
        question: "The situation is getting worse _____ worse with each passing day unfortunately now.",
        translation: "Die Situation wird mit jedem vergehenden Tag jetzt leider immer schlimmer.",
        options: ["and", "than", "as", "or"],
        correct: "and",
        explanation: "'WORSE AND WORSE' = immer schlechter (progressive Verschlechterung). Diese negative Entwicklung zeigt dringenden Handlungs-Bedarf."
      },
      {
        id: "comp_adv_9",
        question: "He's not nearly _____ clever _____ he thinks he is - he's quite arrogant actually.",
        translation: "Er ist bei weitem nicht so clever, wie er denkt, dass er ist - er ist eigentlich ziemlich arrogant.",
        options: ["as / as", "so / as", "more / than", "as / than"],
        correct: "as / as",
        explanation: "'NOT NEARLY AS...AS' = bei weitem nicht so. Diese Selbst-Überschätzungs-Feststellung zeigt Diskrepanz zwischen Selbst- und Fremdbild."
      },
      {
        id: "comp_adv_10",
        question: "This book is far _____ interesting than the last one I read last month.",
        translation: "Dieses Buch ist weit interessanter als das letzte, das ich letzten Monat las.",
        options: ["more", "most", "much", "many"],
        correct: "more",
        explanation: "'FAR' + Komparativ: 'far more interesting' (weit interessanter). Diese starke Verstärkung betont großen Qualitäts-Unterschied."
      },
      {
        id: "comp_adv_11",
        question: "The _____ people in the room, the _____ it gets and harder to breathe well.",
        translation: "Je mehr Leute im Raum, desto heißer wird es und schwerer, gut zu atmen.",
        options: ["more / hotter", "many / hot", "more / hottest", "most / hotter"],
        correct: "more / hotter",
        explanation: "'THE MORE...THE HOTTER': Je-desto mit zwei Komparativen. Diese Raum-Temperatur-Relation zeigt Überfüllungs-Problem."
      },
      {
        id: "comp_adv_12",
        question: "My new phone is slightly _____ than my old one, but much faster and better.",
        translation: "Mein neues Handy ist etwas größer als mein altes, aber viel schneller und besser.",
        options: ["bigger", "big", "biggest", "more big"],
        correct: "bigger",
        explanation: "'SLIGHTLY' + Komparativ: minimale Steigerung. Diese kleine Größen-Zunahme ist akzeptabel für bessere Performance-Gewinne."
      },
      {
        id: "comp_adv_13",
        question: "This is one of the _____ decisions I've ever had to make in my life.",
        translation: "Das ist eine der schwierigsten Entscheidungen, die ich je in meinem Leben treffen musste.",
        options: ["hardest", "harder", "hard", "most hard"],
        correct: "hardest",
        explanation: "'ONE OF THE' + Superlativ + Plural: 'one of the hardest decisions'. Diese Struktur reiht Entscheidung unter schwierigste ein."
      },
      {
        id: "comp_adv_14",
        question: "Today's weather is nothing like _____ nice _____ yesterday's beautiful sunny day was.",
        translation: "Das heutige Wetter ist überhaupt nicht so schön wie der gestrige wunderschöne sonnige Tag war.",
        options: ["as / as", "so / as", "more / than", "as / than"],
        correct: "as / as",
        explanation: "'NOTHING LIKE AS...AS' = überhaupt nicht so. Diese starke Negativ-Vergleich betont großen Wetter-Qualitäts-Unterschied zu gestern."
      },
      {
        id: "comp_adv_15",
        question: "The final exam was _____ easier than I expected it to be - I'm relieved!",
        translation: "Die Abschlussprüfung war viel einfacher als ich erwartete, dass sie sein würde - ich bin erleichtert!",
        options: ["much", "very", "more", "most"],
        correct: "much",
        explanation: "'MUCH' + Komparativ: 'much easier' (viel einfacher). Diese positive Überraschung bei Prüfung bringt Erleichterung statt Stress."
      }
    ]
  }
};

export default part19Categories;
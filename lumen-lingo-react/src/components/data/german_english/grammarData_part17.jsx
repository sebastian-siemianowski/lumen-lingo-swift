/**
 * GERMAN → ENGLISH GRAMMAR - PART 17
 * 4 categories, 15 questions each
 */

import { Timer, Zap, Shield, Rocket } from "lucide-react";

export const part17Categories = {
  by_until_time: {
    name: "By vs Until (Time)",
    description: "Zeitpunkte - by und until für Fristen korrekt unterscheiden",
    icon: Timer,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "by_until_1",
        question: "I need to finish this work _____ Friday - that's my absolute deadline.",
        translation: "Ich muss diese Arbeit bis Freitag beenden - das ist meine absolute Deadline.",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' = spätestens zu diesem Zeitpunkt fertig: 'by Friday' (bis spätestens Freitag). Diese Deadline bedeutet, dass die Arbeit am Freitag komplett sein muss."
      },
      {
        id: "by_until_2",
        question: "We waited _____ midnight, but she never arrived at the meeting point at all.",
        translation: "Wir warteten bis Mitternacht, aber sie kam überhaupt nie am Treffpunkt an.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' = durchgehend warten bis zu diesem Zeitpunkt: 'waited until midnight'. Das Warten dauerte kontinuierlich die ganze Zeit bis Mitternacht an."
      },
      {
        id: "by_until_3",
        question: "You should arrive _____ 6 PM - the party starts at exactly that time!",
        translation: "Du solltest bis 18 Uhr ankommen - die Party beginnt genau zu dieser Zeit!",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' für SPÄTESTE Ankunft: vor oder zu diesem Zeitpunkt. Diese Ankunfts-Aufforderung stellt sicher, dass man den Party-Beginn nicht verpasst."
      },
      {
        id: "by_until_4",
        question: "The store is open _____ 10 PM every night except Sundays and holidays.",
        translation: "Der Laden ist jede Nacht außer sonntags und an Feiertagen bis 22 Uhr geöffnet.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' für DAUER: durchgehend geöffnet bis zu diesem Zeitpunkt. Diese Öffnungszeit zeigt, wie lange der Laden kontinuierlich verfügbar ist."
      },
      {
        id: "by_until_5",
        question: "I'll have finished the report _____ tomorrow morning at the latest possible.",
        translation: "Ich werde den Bericht bis spätestens morgen früh fertig haben.",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' mit Future Perfect: spätester Fertigstellungs-Zeitpunkt. Diese Zusage garantiert, dass der Bericht vor oder am Morgen komplett ist."
      },
      {
        id: "by_until_6",
        question: "She studied _____ late at night to prepare for the important exam tomorrow.",
        translation: "Sie lernte bis spät in die Nacht, um sich auf die wichtige Prüfung morgen vorzubereiten.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' für KONTINUIERLICHES Lernen: durchgehend bis spät nachts. Diese lange Lern-Session zeigt intensive Prüfungs-Vorbereitung."
      },
      {
        id: "by_until_7",
        question: "Please submit your application _____ the end of this month - no extensions allowed!",
        translation: "Bitte reiche deine Bewerbung bis Ende dieses Monats ein - keine Verlängerungen erlaubt!",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' für FRIST ohne Verlängerung: spätestens Monatsende. Diese strikte Deadline ohne Ausnahmen ist wichtig für Bewerbungs-Verfahren."
      },
      {
        id: "by_until_8",
        question: "We'll stay here _____ the rain stops completely and weather improves outside.",
        translation: "Wir bleiben hier, bis der Regen komplett aufhört und das Wetter draußen besser wird.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' + EREIGNIS eintritt: warten bis Regen aufhört. Diese Warte-Entscheidung hängt vom Wetter-Wechsel ab, nicht von fester Zeit."
      },
      {
        id: "by_until_9",
        question: "They'll have moved to the new house _____ next weekend at the latest.",
        translation: "Sie werden spätestens nächstes Wochenende in das neue Haus gezogen sein.",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' mit Future Perfect: spätester Umzugs-Abschluss. Diese Zeitangabe setzt eine klare Frist für den kompletten Umzugs-Prozess."
      },
      {
        id: "by_until_10",
        question: "I can't talk right now - I'm busy _____ 5 PM with back-to-back meetings.",
        translation: "Ich kann jetzt nicht sprechen - ich bin bis 17 Uhr mit aufeinanderfolgenden Meetings beschäftigt.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' für KONTINUIERLICHE Beschäftigung: durchgehend busy bis 17 Uhr. Diese Meeting-Serie blockiert die komplette Zeit bis zum Endpunkt."
      },
      {
        id: "by_until_11",
        question: "You need to pay the bill _____ the 15th to avoid late payment fees.",
        translation: "Du musst die Rechnung bis zum 15. bezahlen, um Verspätungsgebühren zu vermeiden.",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' für ZAHLUNGS-Frist: spätestens am 15. bezahlen. Diese Deadline verhindert zusätzliche Kosten durch verspätete Zahlung."
      },
      {
        id: "by_until_12",
        question: "Let's wait _____ everyone arrives before we start the important meeting today.",
        translation: "Lass uns warten, bis alle ankommen, bevor wir heute das wichtige Meeting beginnen.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' + EREIGNIS: warten bis alle da sind. Dieser Warte-Plan zeigt Höflichkeit und Respekt für alle Teilnehmer."
      },
      {
        id: "by_until_13",
        question: "The package should arrive _____ next Tuesday according to tracking information online.",
        translation: "Das Paket sollte laut Online-Tracking-Information bis nächsten Dienstag ankommen.",
        options: ["by", "until", "both correct", "till"],
        correct: "by",
        explanation: "'BY' für VORAUSSICHTLICHE Ankunft: spätestens Dienstag. Diese Liefer-Erwartung basiert auf Tracking-Daten des Versand-Services."
      },
      {
        id: "by_until_14",
        question: "They worked on the project _____ they finished it completely at last successfully.",
        translation: "Sie arbeiteten am Projekt, bis sie es endlich komplett erfolgreich beendeten.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' + ABSCHLUSS: durcharbeiten bis Fertigstellung. Diese kontinuierliche Arbeit endet erst mit komplettem Projekt-Abschluss."
      },
      {
        id: "by_until_15",
        question: "I'll be on vacation _____ the end of August - back in September then.",
        translation: "Ich bin bis Ende August im Urlaub - dann im September zurück.",
        options: ["until", "by", "both correct", "till"],
        correct: "until",
        explanation: "'UNTIL' für URLAUBS-Dauer: durchgehend weg bis Monatsende. Diese Abwesenheit erstreckt sich über den ganzen Zeitraum bis zum Endpunkt."
      }
    ]
  },

  emphatic_do: {
    name: "Emphatic Do/Does/Did",
    description: "Betonung - do/does/did für Verstärkung von Aussagen nutzen",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "emph_1",
        question: "I _____ like your new haircut - it looks absolutely fantastic on you!",
        translation: "Ich mag deinen neuen Haarschnitt wirklich - er sieht absolut fantastisch an dir aus!",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "BETONUNG Gegenwart: 'DO like' (ich mag wirklich). Dieses betonte 'do' verstärkt die positive Meinung zum Haarschnitt nachdrücklich."
      },
      {
        id: "emph_2",
        question: "She _____ work hard every day - I see her dedication and effort constantly.",
        translation: "Sie arbeitet wirklich jeden Tag hart - ich sehe ihre Hingabe und Anstrengung ständig.",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "BETONUNG mit 'she': 'DOES work hard' (arbeitet wirklich hart). Dieses betonte 'does' hebt die beobachtete Arbeits-Intensität hervor."
      },
      {
        id: "emph_3",
        question: "I _____ tell you the truth yesterday - you just didn't want to believe me!",
        translation: "Ich sagte dir gestern wirklich die Wahrheit - du wolltest mir nur nicht glauben!",
        options: ["did", "do", "does", "was"],
        correct: "did",
        explanation: "BETONUNG Vergangenheit: 'DID tell' (sagte wirklich). Dieses betonte 'did' verteidigt die eigene Ehrlichkeit gegen Zweifel."
      },
      {
        id: "emph_4",
        question: "You _____ look tired today - are you getting enough sleep at night?",
        translation: "Du siehst heute wirklich müde aus - bekommst du nachts genug Schlaf?",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "BETONUNG Feststellung: 'DO look tired' (siehst wirklich müde aus). Diese Verstärkung zeigt deutliche Besorgnis über das müde Erscheinungsbild."
      },
      {
        id: "emph_5",
        question: "He _____ apologize sincerely for his rude behavior at the meeting yesterday morning.",
        translation: "Er entschuldigte sich gestern Morgen aufrichtig für sein unhöfliches Verhalten beim Meeting.",
        options: ["did", "do", "does", "was"],
        correct: "did",
        explanation: "BETONUNG Vergangenheit: 'DID apologize' (entschuldigte sich tatsächlich). Dies hebt hervor, dass die Entschuldigung wirklich stattfand."
      },
      {
        id: "emph_6",
        question: "We _____ appreciate your help with this difficult project - thank you so much!",
        translation: "Wir schätzen deine Hilfe bei diesem schweren Projekt wirklich sehr - vielen Dank!",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "BETONUNG Dankbarkeit: 'DO appreciate' (schätzen wirklich). Diese Verstärkung drückt tiefe aufrichtige Dankbarkeit für Unterstützung aus."
      },
      {
        id: "emph_7",
        question: "She _____ seem upset about something today - I wonder what's wrong with her.",
        translation: "Sie scheint heute wirklich wegen etwas aufgeregt zu sein - ich frage mich, was mit ihr los ist.",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "BETONUNG Beobachtung: 'DOES seem upset'. Diese Verstärkung betont die deutlich sichtbare emotionale Verfassung der Person."
      },
      {
        id: "emph_8",
        question: "I _____ enjoy spending time with you - you're such wonderful company always!",
        translation: "Ich genieße es wirklich, Zeit mit dir zu verbringen - du bist immer so wunderbare Gesellschaft!",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "BETONUNG Freude: 'DO enjoy' (genieße wirklich). Diese Verstärkung macht die Wertschätzung für gemeinsame Zeit sehr deutlich."
      },
      {
        id: "emph_9",
        question: "They _____ arrive on time for once last week - I was pleasantly surprised!",
        translation: "Sie kamen letzte Woche ausnahmsweise wirklich pünktlich an - ich war angenehm überrascht!",
        options: ["did", "do", "does", "were"],
        correct: "did",
        explanation: "BETONUNG Überraschung: 'DID arrive' (kamen tatsächlich). Diese Verstärkung hebt die unerwartete Pünktlichkeit hervor, die sonst selten ist."
      },
      {
        id: "emph_10",
        question: "The movie _____ make me cry at the emotional ending scene - it was powerful!",
        translation: "Der Film brachte mich bei der emotionalen End-Szene wirklich zum Weinen - sie war kraftvoll!",
        options: ["did", "do", "does", "was"],
        correct: "did",
        explanation: "BETONUNG emotionale Wirkung: 'DID make me cry'. Diese Verstärkung betont die starke emotionale Reaktion auf die Film-Szene."
      },
      {
        id: "emph_11",
        question: "I _____ understand your concern about this situation - it's completely valid and reasonable.",
        translation: "Ich verstehe deine Sorge über diese Situation wirklich - sie ist völlig berechtigt und vernünftig.",
        options: ["do", "does", "did", "am"],
        correct: "do",
        explanation: "BETONUNG Verständnis: 'DO understand'. Diese Verstärkung versichert der Person, dass ihre Sorgen ernst genommen werden."
      },
      {
        id: "emph_12",
        question: "She _____ call me last night as she promised earlier - I was waiting.",
        translation: "Sie rief mich letzte Nacht wirklich an, wie sie früher versprach - ich wartete.",
        options: ["did", "do", "does", "was"],
        correct: "did",
        explanation: "BETONUNG Versprechen-Einhaltung: 'DID call'. Diese Verstärkung bestätigt, dass das Versprechen tatsächlich eingehalten wurde wie vereinbart."
      },
      {
        id: "emph_13",
        question: "This cake _____ taste delicious - did you make it yourself at home?",
        translation: "Dieser Kuchen schmeckt wirklich köstlich - hast du ihn selbst zu Hause gemacht?",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "BETONUNG Geschmacks-Lob: 'DOES taste delicious'. Diese Verstärkung ist enthusiastisches Kompliment für den ausgezeichneten Geschmack."
      },
      {
        id: "emph_14",
        question: "We _____ want to thank you for all your hard work and dedication here!",
        translation: "Wir möchten uns wirklich für all deine harte Arbeit und Hingabe hier bedanken!",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "BETONUNG Dankbarkeit: 'DO want to thank'. Diese Verstärkung macht die aufrichtige Wertschätzung für Arbeitsleistung sehr deutlich."
      },
      {
        id: "emph_15",
        question: "He _____ need our help with this complicated task - we should support him.",
        translation: "Er braucht wirklich unsere Hilfe bei dieser komplizierten Aufgabe - wir sollten ihn unterstützen.",
        options: ["does", "do", "did", "is"],
        correct: "does",
        explanation: "BETONUNG Bedürftigkeit: 'DOES need'. Diese Verstärkung unterstreicht die Dringlichkeit und Wichtigkeit der benötigten Hilfe."
      }
    ]
  },

  unless_if_not: {
    name: "Unless vs If Not",
    description: "Bedingungen - unless und if not richtig unterscheiden und nutzen",
    icon: Shield,
    color: "from-red-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "unless_1",
        question: "_____ you hurry up now, you'll miss the train to work this morning!",
        translation: "Wenn du dich nicht jetzt beeilst, wirst du den Zug zur Arbeit heute Morgen verpassen!",
        options: ["Unless", "If not", "If", "When"],
        correct: "Unless",
        explanation: "'UNLESS' = wenn nicht (negativer Bedingung): 'unless you hurry' = if you don't hurry. Diese Warnung zeigt die Konsequenz bei Nicht-Handeln."
      },
      {
        id: "unless_2",
        question: "I won't go to the party _____ you come with me for company and support.",
        translation: "Ich gehe nicht zur Party, wenn du nicht zur Gesellschaft und Unterstützung mitkommst.",
        options: ["unless", "if", "when", "if not"],
        correct: "unless",
        explanation: "'UNLESS' = außer wenn: 'unless you come' = if you don't come. Diese Bedingung macht Party-Teilnahme abhängig von Begleitung."
      },
      {
        id: "unless_3",
        question: "_____ it rains heavily tomorrow, we'll have the outdoor picnic as planned yesterday.",
        translation: "Wenn es morgen nicht stark regnet, machen wir das Outdoor-Picknick wie gestern geplant.",
        options: ["Unless", "If", "When", "If not"],
        correct: "Unless",
        explanation: "'UNLESS' für negative BEDINGUNG: außer es regnet. Diese Picknick-Planung hängt vom Ausbleiben des Regens ab."
      },
      {
        id: "unless_4",
        question: "She can't pass the exam _____ she studies much harder than before now.",
        translation: "Sie kann die Prüfung nicht bestehen, wenn sie jetzt nicht viel härter als zuvor lernt.",
        options: ["unless", "if", "when", "if not"],
        correct: "unless",
        explanation: "'UNLESS' = wenn nicht (Warnung): außer sie lernt mehr. Diese Bedingung zeigt die Notwendigkeit intensiveren Lernens für Erfolg."
      },
      {
        id: "unless_5",
        question: "You won't improve your English _____ you practice speaking regularly every day.",
        translation: "Du wirst dein Englisch nicht verbessern, wenn du nicht jeden Tag regelmäßig sprichst.",
        options: ["unless", "if", "when", "if not"],
        correct: "unless",
        explanation: "'UNLESS' für NOTWENDIGE Bedingung: außer du übst. Diese Sprach-Verbesserung ist nur durch konsequentes tägliches Üben möglich."
      },
      {
        id: "unless_6",
        question: "I'll be very disappointed _____ they don't come to my birthday party tonight.",
        translation: "Ich werde sehr enttäuscht sein, wenn sie heute Abend nicht zu meiner Geburtstagsparty kommen.",
        options: ["if", "unless", "when", "because"],
        correct: "if",
        explanation: "'IF' (nicht unless) nach EMOTIONEN: 'if they don't come'. Bei Gefühls-Aussagen nutzen wir normalerweise 'if not' statt 'unless'."
      },
      {
        id: "unless_7",
        question: "_____ you leave now immediately, you'll be late for your important appointment today.",
        translation: "Wenn du jetzt nicht sofort gehst, wirst du zu spät zu deinem wichtigen Termin heute sein.",
        options: ["Unless", "If", "When", "If not"],
        correct: "Unless",
        explanation: "'UNLESS' = wenn nicht (dringend): sofort gehen, sonst Verspätung. Diese dringende Warnung betont die Notwendigkeit sofortigen Aufbruchs."
      },
      {
        id: "unless_8",
        question: "The plants will die _____ you water them regularly every few days properly.",
        translation: "Die Pflanzen werden sterben, wenn du sie nicht regelmäßig alle paar Tage richtig gießt.",
        options: ["unless", "if", "when", "if not"],
        correct: "unless",
        explanation: "'UNLESS' für ÜBERLEBENS-Bedingung: außer du gießt. Diese Pflege-Notwendigkeit ist essentiell für Pflanzen-Überleben."
      },
      {
        id: "unless_9",
        question: "I don't know _____ I should tell him the truth or keep it secret.",
        translation: "Ich weiß nicht, ob ich ihm die Wahrheit sagen oder es geheim halten soll.",
        options: ["if", "unless", "whether", "both if and whether"],
        correct: "both if and whether",
        explanation: "Nach 'know': 'IF' oder 'WHETHER' (NICHT unless). Diese Frage zeigt das Dilemma zwischen Ehrlichkeit und Geheimhaltung."
      },
      {
        id: "unless_10",
        question: "_____ you apologize to her soon, she won't speak to you again ever!",
        translation: "Wenn du dich nicht bald bei ihr entschuldigst, wird sie nie wieder mit dir sprechen!",
        options: ["Unless", "If", "When", "If not"],
        correct: "Unless",
        explanation: "'UNLESS' für WARNUNG: außer du entschuldigst dich. Diese ernste Konsequenz-Androhung betont Dringlichkeit der Entschuldigung."
      },
      {
        id: "unless_11",
        question: "We can't start the game _____ all players arrive at the field for match.",
        translation: "Wir können das Spiel nicht beginnen, wenn nicht alle Spieler zum Match am Feld ankommen.",
        options: ["unless", "if", "when", "if not"],
        correct: "unless",
        explanation: "'UNLESS' für START-Bedingung: außer alle sind da. Diese Spiel-Regel erfordert vollständige Mannschaft vor Beginn."
      },
      {
        id: "unless_12",
        question: "I wonder _____ she's coming to the meeting or not - nobody told me clearly.",
        translation: "Ich frage mich, ob sie zum Meeting kommt oder nicht - niemand sagte es mir klar.",
        options: ["if", "unless", "whether", "both if and whether"],
        correct: "both if and whether",
        explanation: "Nach 'wonder': 'IF' oder 'WHETHER' (oft mit 'or not'). Diese Unklarheit über Teilnahme zeigt fehlende Information."
      },
      {
        id: "unless_13",
        question: "_____ you have a ticket already, you can't enter the concert hall tonight.",
        translation: "Wenn du nicht schon ein Ticket hast, kannst du heute Abend nicht in die Konzerthalle.",
        options: ["Unless", "If", "When", "If not"],
        correct: "Unless",
        explanation: "'UNLESS' für EINLASS-Bedingung: außer du hast Ticket. Diese Zugangs-Regel ist strikte Konzert-Einlass-Voraussetzung."
      },
      {
        id: "unless_14",
        question: "I'm not sure _____ I should accept the job offer or decline it politely.",
        translation: "Ich bin nicht sicher, ob ich das Jobangebot annehmen oder es höflich ablehnen soll.",
        options: ["if", "unless", "whether", "both if and whether"],
        correct: "both if and whether",
        explanation: "Nach 'not sure': 'IF' oder 'WHETHER'. Diese Job-Entscheidungs-Unsicherheit ist normale Überlegung bei wichtiger Karriere-Wahl."
      },
      {
        id: "unless_15",
        question: "_____ the weather improves soon, we'll have to cancel the outdoor event tomorrow.",
        translation: "Wenn das Wetter sich nicht bald bessert, müssen wir das Outdoor-Event morgen absagen.",
        options: ["Unless", "If", "When", "If not"],
        correct: "Unless",
        explanation: "'UNLESS' für EVENT-Bedingung: außer Wetter bessert sich. Diese Absage-Drohung ist abhängig von Wetter-Verbesserung."
      }
    ]
  },

  wish_regret_structures: {
    name: "Wish (Regrets & Unreal Situations)",
    description: "Bedauern - wish-Strukturen für Wünsche und Bedauern nutzen",
    icon: Rocket,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "wish_reg_1",
        question: "I wish I _____ more money to buy that beautiful car I saw yesterday.",
        translation: "Ich wünschte, ich hätte mehr Geld, um jenes schöne Auto zu kaufen, das ich gestern sah.",
        options: ["had", "have", "would have", "will have"],
        correct: "had",
        explanation: "'WISH' + Past für JETZIGEN irrealen Wunsch: 'wish I had' (hätte jetzt). Diese Konstruktion drückt den aktuellen Mangel an Geld aus."
      },
      {
        id: "wish_reg_2",
        question: "She wishes she _____ speak French fluently like a native speaker from Paris.",
        translation: "Sie wünscht, sie könnte fließend Französisch wie ein Muttersprachler aus Paris sprechen.",
        options: ["could", "can", "would", "will"],
        correct: "could",
        explanation: "'WISH' + could für FÄHIGKEIT jetzt: 'wishes she could speak'. Dieser Sprachwunsch ist momentan unrealistisch aber schönes Ziel."
      },
      {
        id: "wish_reg_3",
        question: "I wish I _____ studied harder for the exam - I failed it unfortunately yesterday.",
        translation: "Ich wünschte, ich hätte härter für die Prüfung gelernt - ich fiel gestern leider durch.",
        options: ["had", "have", "would have", "did"],
        correct: "had",
        explanation: "'WISH' + Past Perfect für BEDAUERN Vergangenheit: 'wish I had studied'. Dieses Nicht-Lernen-Bedauern ist zu späte Erkenntnis nach Misserfolg."
      },
      {
        id: "wish_reg_4",
        question: "He wishes he _____ live closer to his family in his hometown far away.",
        translation: "Er wünscht, er würde näher bei seiner Familie in seiner weit entfernten Heimatstadt wohnen.",
        options: ["lived", "lives", "would live", "will live"],
        correct: "lived",
        explanation: "'WISH' + Past für JETZT: 'wishes he lived' (würde jetzt wohnen). Dieser Nähe-Wunsch zur Familie ist aktuell unrealisiert."
      },
      {
        id: "wish_reg_5",
        question: "I wish you _____ stop making so much noise - I'm trying to concentrate here!",
        translation: "Ich wünschte, du würdest aufhören, so viel Lärm zu machen - ich versuche mich hier zu konzentrieren!",
        options: ["would", "will", "could", "can"],
        correct: "would",
        explanation: "'WISH' + would für VERHALTEN-Änderungs-Wunsch: 'wish you would stop'. Diese Bitte um Ruhe zeigt Ärger über störendes Verhalten."
      },
      {
        id: "wish_reg_6",
        question: "She wishes she _____ gone to university when she was younger and had chance.",
        translation: "Sie wünscht, sie wäre zur Universität gegangen, als sie jünger war und die Chance hatte.",
        options: ["had", "has", "would have", "did"],
        correct: "had",
        explanation: "'WISH' + Past Perfect für VERPASSTE Chance: 'wishes she had gone'. Dieses Uni-Bedauern ist über verpasste frühere Bildungs-Möglichkeit."
      },
      {
        id: "wish_reg_7",
        question: "I wish it _____ raining outside - I want to go for a nice walk.",
        translation: "Ich wünschte, es würde draußen nicht regnen - ich möchte einen schönen Spaziergang machen.",
        options: ["wasn't", "isn't", "wouldn't be", "won't be"],
        correct: "wasn't",
        explanation: "'WISH' + Past Negativ für JETZT: 'wish it wasn't raining'. Dieser Wetter-Wunsch zeigt Spaziergang-Verhinderung durch aktuellen Regen."
      },
      {
        id: "wish_reg_8",
        question: "He wishes he _____ bought that house two years ago - prices have doubled now!",
        translation: "Er wünscht, er hätte jenes Haus vor zwei Jahren gekauft - die Preise haben sich jetzt verdoppelt!",
        options: ["had", "has", "would have", "did"],
        correct: "had",
        explanation: "'WISH' + Past Perfect für VERPASSTE Gelegenheit: 'wishes he had bought'. Diese Kauf-Nicht-Entscheidung ist teures finanzielles Bedauern."
      },
      {
        id: "wish_reg_9",
        question: "I wish my neighbors _____ be quieter at night - they're so loud always!",
        translation: "Ich wünschte, meine Nachbarn würden nachts leiser sein - sie sind immer so laut!",
        options: ["would", "will", "could", "can"],
        correct: "would",
        explanation: "'WISH' + would für ANDERE ändern: 'wish they would be quieter'. Dieser Ruhe-Wunsch ist über nerviges Nachbar-Verhalten."
      },
      {
        id: "wish_reg_10",
        question: "She wishes she _____ more time to spend with her children every day.",
        translation: "Sie wünscht, sie hätte mehr Zeit, um jeden Tag mit ihren Kindern zu verbringen.",
        options: ["had", "has", "would have", "will have"],
        correct: "had",
        explanation: "'WISH' + Past für JETZIGEN Wunsch: 'wishes she had' (hätte jetzt). Dieser Zeit-Mangel für Familie ist bedauerliche Arbeits-Leben-Balance."
      },
      {
        id: "wish_reg_11",
        question: "I wish I _____ said those hurtful words to him - I really regret it deeply.",
        translation: "Ich wünschte, ich hätte ihm nicht jene verletzenden Worte gesagt - ich bereue es wirklich tief.",
        options: ["hadn't", "haven't", "wouldn't have", "didn't"],
        correct: "hadn't",
        explanation: "'WISH' + Past Perfect Negativ: 'wish I hadn't said'. Dieses tiefe Bedauern über verletzende Worte zeigt emotionale Reue."
      },
      {
        id: "wish_reg_12",
        question: "He wishes the weather _____ better for the outdoor wedding ceremony tomorrow.",
        translation: "Er wünscht, das Wetter wäre besser für die Outdoor-Hochzeitszeremonie morgen.",
        options: ["was", "is", "would be", "will be"],
        correct: "was",
        explanation: "'WISH' + Past für JETZT/MORGEN: 'wishes weather was better'. Dieser Wetter-Wunsch für Hochzeit ist verständliche Sorge."
      },
      {
        id: "wish_reg_13",
        question: "I wish I _____ to that concert last week - everyone said it was amazing!",
        translation: "Ich wünschte, ich wäre letzte Woche zu jenem Konzert gegangen - alle sagten, es war fantastisch!",
        options: ["had gone", "have gone", "went", "would go"],
        correct: "had gone",
        explanation: "'WISH' + Past Perfect für VERPASSTES Ereignis: 'wish I had gone'. Dieses Konzert-Verpassen-Bedauern basiert auf positivem Feedback."
      },
      {
        id: "wish_reg_14",
        question: "She wishes her boss _____ give her a raise - she's been working hard for years.",
        translation: "Sie wünscht, ihr Chef würde ihr eine Gehaltserhöhung geben - sie arbeitet seit Jahren hart.",
        options: ["would", "will", "could", "can"],
        correct: "would",
        explanation: "'WISH' + would für ANDERE handeln: 'wishes boss would give'. Dieser Gehalts-Wunsch nach Jahren harter Arbeit ist berechtigt."
      },
      {
        id: "wish_reg_15",
        question: "I wish we _____ have to work on Saturdays - I miss my weekend free time!",
        translation: "Ich wünschte, wir müssten nicht samstags arbeiten - ich vermisse meine Wochenend-Freizeit!",
        options: ["didn't", "don't", "wouldn't", "won't"],
        correct: "didn't",
        explanation: "'WISH' + Past Negativ: 'wish we didn't have to'. Dieser Wunsch nach freiem Samstag zeigt Bedauern über Wochenend-Arbeit."
      }
    ]
  }
};

export default part17Categories;
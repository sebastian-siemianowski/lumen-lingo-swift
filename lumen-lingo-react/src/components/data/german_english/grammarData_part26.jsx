/**
 * GERMAN → ENGLISH GRAMMAR - PART 26
 * 4 categories, 15 questions each
 */

import { Shield, GitCompare, Sparkles, Clock } from "lucide-react";

export const part26Categories = {
  in_case_vs_if: {
    name: "In Case vs If",
    description: "Vorsichtsmaßnahmen - in case und if unterscheiden",
    icon: Shield,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "case_if_1",
        question: "Take an umbrella _____ it rains later this afternoon unexpectedly outside.",
        translation: "Nimm einen Regenschirm mit, falls es später heute Nachmittag draußen unerwartet regnet.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = VORSICHTSMASSNAHME (vielleicht passiert es): 'in case it rains' = als Vorsicht. Der Schirm ist Vorsorge, nicht Bedingung."
      },
      {
        id: "case_if_2",
        question: "_____ it rains tomorrow, we'll cancel the outdoor picnic and stay inside.",
        translation: "Wenn es morgen regnet, werden wir das Outdoor-Picknick absagen und drinnen bleiben.",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' = BEDINGUNG (wenn dann): 'If it rains, we'll cancel'. Diese Regen-Bedingung bestimmt die Picknick-Entscheidung direkt."
      },
      {
        id: "case_if_3",
        question: "I'll give you my phone number _____ you need to contact me urgently.",
        translation: "Ich gebe dir meine Telefonnummer, falls du mich dringend kontaktieren musst.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' für MÖGLICHKEIT (Vorsorge): Diese Nummern-Weitergabe ist Vorsichtsmaßnahme für möglichen zukünftigen Kontakt-Bedarf."
      },
      {
        id: "case_if_4",
        question: "_____ you see her at the party, please give her this important message.",
        translation: "Wenn du sie bei der Party siehst, gib ihr bitte diese wichtige Nachricht.",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' = BEDINGUNG für Handlung: Das Nachrichten-Weitergeben hängt direkt vom Treffen bei Party ab."
      },
      {
        id: "case_if_5",
        question: "I always carry some cash _____ the card machine doesn't work at stores.",
        translation: "Ich trage immer etwas Bargeld bei mir, falls das Kartengerät in Läden nicht funktioniert.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = VORSICHT (Notfall-Plan): Diese Bargeld-Reserve ist Absicherung gegen mögliche Technik-Probleme."
      },
      {
        id: "case_if_6",
        question: "_____ you're not busy later, would you like to grab coffee with me?",
        translation: "Wenn du später nicht beschäftigt bist, möchtest du mit mir einen Kaffee trinken gehen?",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' für VORAUSSETZUNG einer Einladung: Die Kaffee-Einladung ist abhängig von verfügbarer Freizeit."
      },
      {
        id: "case_if_7",
        question: "Write down her address _____ you forget it before the meeting tomorrow.",
        translation: "Schreibe ihre Adresse auf, falls du sie vor dem Meeting morgen vergisst.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = VORSORGE gegen Vergessen: Diese Notiz-Empfehlung ist Schutz gegen mögliche Gedächtnis-Lücke."
      },
      {
        id: "case_if_8",
        question: "_____ I have time tomorrow afternoon, I'll help you with the project work.",
        translation: "Wenn ich morgen Nachmittag Zeit habe, werde ich dir bei der Projektarbeit helfen.",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' = BEDINGUNG für Hilfe-Zusage: Diese Hilfe ist direkt abhängig von verfügbarer Zeit morgen."
      },
      {
        id: "case_if_9",
        question: "I'll leave my phone on _____ you need to reach me during the night.",
        translation: "Ich lasse mein Handy an, falls du mich während der Nacht erreichen musst.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = VORSICHT (Erreichbarkeit): Diese nächtliche Handy-Bereitschaft ist Vorsorge für möglichen Notfall-Kontakt."
      },
      {
        id: "case_if_10",
        question: "_____ you finish early today, we could go see a movie together tonight.",
        translation: "Wenn du heute früh fertig wirst, könnten wir heute Abend zusammen einen Film schauen gehen.",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' = BEDINGUNG für Kino-Plan: Dieser gemeinsame Film-Vorschlag hängt von frühem Arbeits-Ende ab."
      },
      {
        id: "case_if_11",
        question: "Take some extra money _____ the restaurant is more expensive than expected.",
        translation: "Nimm etwas Extra-Geld mit, falls das Restaurant teurer ist als erwartet.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = finanzielle VORSORGE: Diese Extra-Geld-Mitnahme ist Absicherung gegen unerwartete hohe Restaurant-Preise."
      },
      {
        id: "case_if_12",
        question: "_____ you're interested in the job, I can send you the application details.",
        translation: "Wenn du an dem Job interessiert bist, kann ich dir die Bewerbungs-Details schicken.",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' = BEDINGUNG für Informations-Weitergabe: Diese Detail-Zusage hängt von Job-Interesse ab."
      },
      {
        id: "case_if_13",
        question: "I bought extra food _____ more guests arrive at the party unexpectedly.",
        translation: "Ich kaufte Extra-Essen, falls unerwartet mehr Gäste bei der Party ankommen.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = VORSORGE für Möglichkeit: Diese Essen-Reserve ist Vorsichtsmaßnahme gegen unerwartete Gäste-Anzahl."
      },
      {
        id: "case_if_14",
        question: "_____ the weather is nice this weekend, let's go hiking in the mountains together.",
        translation: "Wenn das Wetter dieses Wochenende schön ist, lass uns zusammen in den Bergen wandern gehen.",
        options: ["If", "In case", "both correct", "When"],
        correct: "If",
        explanation: "'IF' = BEDINGUNG für Wander-Plan: Diese Outdoor-Aktivität ist direkt vom Wetter abhängig."
      },
      {
        id: "case_if_15",
        question: "Keep this instruction manual _____ you need it in the future for reference.",
        translation: "Behalte diese Bedienungsanleitung, falls du sie in Zukunft zum Nachschlagen brauchst.",
        options: ["in case", "if", "both correct", "when"],
        correct: "in case",
        explanation: "'IN CASE' = AUFBEWAHRUNG für später: Diese Manual-Behalte-Empfehlung ist Vorsorge für mögliche zukünftige Nutzung."
      }
    ]
  },

  whether_vs_if: {
    name: "Whether vs If",
    description: "Ob-Fragen - whether und if in verschiedenen Kontexten",
    icon: GitCompare,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "whether_if_1",
        question: "I don't know _____ I should accept the job offer or decline it politely.",
        translation: "Ich weiß nicht, ob ich das Jobangebot annehmen oder es höflich ablehnen soll.",
        options: ["whether", "if", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'know': BEIDE möglich: 'whether' ist formeller. Diese Job-Entscheidungs-Unsicherheit ist normale Karriere-Überlegung."
      },
      {
        id: "whether_if_2",
        question: "The question is _____ we have enough time to finish before the deadline.",
        translation: "Die Frage ist, ob wir genug Zeit haben, vor der Deadline fertig zu werden.",
        options: ["whether", "if", "both correct", "that"],
        correct: "whether",
        explanation: "Nach 'question is': nur 'WHETHER' (NICHT if): Diese Zeit-Ausreichungs-Frage ist zentral für Projekt-Planung."
      },
      {
        id: "whether_if_3",
        question: "I'm not sure _____ to buy the expensive laptop or save my money instead.",
        translation: "Ich bin nicht sicher, ob ich den teuren Laptop kaufen oder stattdessen mein Geld sparen soll.",
        options: ["whether", "if", "both correct", "that"],
        correct: "whether",
        explanation: "'WHETHER' vor INFINITIV: 'whether to buy' (NICHT if to). Diese Kauf-Spar-Entscheidung ist finanzielle Abwägung."
      },
      {
        id: "whether_if_4",
        question: "Can you check _____ the door is locked properly before we leave house?",
        translation: "Kannst du überprüfen, ob die Tür richtig verschlossen ist, bevor wir das Haus verlassen?",
        options: ["if", "whether", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'check': beide möglich. Diese Sicherheits-Überprüfung vor Haus-Verlassen ist wichtige Routine."
      },
      {
        id: "whether_if_5",
        question: "It depends on _____ the weather will be good enough for sailing tomorrow.",
        translation: "Es hängt davon ab, ob das Wetter morgen gut genug zum Segeln sein wird.",
        options: ["whether", "if", "both correct", "that"],
        correct: "whether",
        explanation: "Nach 'depends on': nur 'WHETHER' (NICHT if): Diese Wetter-Abhängigkeit ist entscheidend für Segel-Planung."
      },
      {
        id: "whether_if_6",
        question: "I wonder _____ she'll come to the wedding ceremony next month in summer.",
        translation: "Ich frage mich, ob sie nächsten Monat im Sommer zur Hochzeitszeremonie kommen wird.",
        options: ["if", "whether", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'wonder': beide möglich: Diese Hochzeits-Teilnahme-Unsicherheit ist normale Event-Planungs-Frage."
      },
      {
        id: "whether_if_7",
        question: "We need to decide _____ to rent or buy a house this year together.",
        translation: "Wir müssen entscheiden, ob wir dieses Jahr zusammen ein Haus mieten oder kaufen.",
        options: ["whether", "if", "both correct", "that"],
        correct: "whether",
        explanation: "'WHETHER' vor INFINITIV: 'whether to rent or buy'. Diese Immobilien-Entscheidung ist wichtige finanzielle Weichenstellung."
      },
      {
        id: "whether_if_8",
        question: "Let me know _____ you can make it to the meeting tomorrow morning early.",
        translation: "Lass mich wissen, ob du es zu dem Meeting morgen früh schaffen kannst.",
        options: ["if", "whether", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'let know': beide möglich: Diese Teilnahme-Bestätigungs-Anfrage ist wichtig für Meeting-Planung."
      },
      {
        id: "whether_if_9",
        question: "I can't decide _____ this dress looks better in blue or red color.",
        translation: "Ich kann nicht entscheiden, ob dieses Kleid in blauer oder roter Farbe besser aussieht.",
        options: ["whether", "if", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'decide': beide möglich: Diese Kleider-Farb-Entscheidung zwischen zwei Optionen ist Style-Wahl."
      },
      {
        id: "whether_if_10",
        question: "The issue is _____ we can afford such an expensive vacation this year.",
        translation: "Die Frage ist, ob wir uns so einen teuren Urlaub dieses Jahr leisten können.",
        options: ["whether", "if", "both correct", "that"],
        correct: "whether",
        explanation: "Nach 'issue is': nur 'WHETHER': Diese finanzielle Urlaubs-Machbarkeit ist Budget-Überlegungs-Kern."
      },
      {
        id: "whether_if_11",
        question: "I'm curious _____ she knows about the surprise party we're planning for her.",
        translation: "Ich bin neugierig, ob sie über die Überraschungsparty Bescheid weiß, die wir für sie planen.",
        options: ["if", "whether", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'curious': beide möglich: Diese Geheimhaltungs-Sorge ist wichtig für erfolgreiche Überraschung."
      },
      {
        id: "whether_if_12",
        question: "_____ or not you agree with me, I'm going ahead with my plan anyway.",
        translation: "Ob du mir zustimmst oder nicht, ich setze meinen Plan trotzdem durch.",
        options: ["Whether", "If", "both correct", "That"],
        correct: "Whether",
        explanation: "'WHETHER OR NOT' (formell): nur 'whether' möglich mit 'or not' am Anfang. Diese Unabhängigkeit von Zustimmung zeigt Entschlossenheit."
      },
      {
        id: "whether_if_13",
        question: "Ask him _____ he wants to join us for lunch at the restaurant today.",
        translation: "Frage ihn, ob er heute mit uns zum Mittagessen im Restaurant mitkommen möchte.",
        options: ["if", "whether", "both correct", "that"],
        correct: "both correct",
        explanation: "Nach 'ask': beide möglich: Diese Lunch-Einladungs-Weitergabe ist freundliche Inklusions-Geste."
      },
      {
        id: "whether_if_14",
        question: "I'll call you later _____ I need your help with the difficult homework.",
        translation: "Ich rufe dich später an, wenn ich deine Hilfe bei den schweren Hausaufgaben brauche.",
        options: ["if", "in case", "whether", "both if and in case"],
        correct: "if",
        explanation: "'IF' = BEDINGUNG für Anruf: Der Anruf passiert nur bei tatsächlichem Hilfe-Bedarf, nicht als Vorsorge."
      },
      {
        id: "whether_if_15",
        question: "It's unclear _____ the meeting will take place tomorrow or next week instead.",
        translation: "Es ist unklar, ob das Meeting morgen oder stattdessen nächste Woche stattfinden wird.",
        options: ["whether", "if", "both correct", "that"],
        correct: "whether",
        explanation: "Nach 'unclear': 'WHETHER' (formeller): Diese Meeting-Termin-Unklarheit braucht baldige Klärung für Planung."
      }
    ]
  },

  as_if_as_though: {
    name: "As If / As Though",
    description: "Unwirklichkeit - als ob Konstruktionen verwenden",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "as_if_1",
        question: "He acts _____ he knows everything about every topic discussed here today.",
        translation: "Er benimmt sich, als ob er alles über jedes hier heute diskutierte Thema wüsste.",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' oder 'AS THOUGH' beide = als ob: Diese Überheblichkeit zeigt Diskrepanz zwischen Selbstbild und Realität."
      },
      {
        id: "as_if_2",
        question: "She looks _____ she hasn't slept well for several nights in a row.",
        translation: "Sie sieht aus, als ob sie mehrere Nächte hintereinander nicht gut geschlafen hätte.",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF/THOUGH' + Past Perfect (Vermutung über Vergangenheit): Diese müde Erscheinung deutet auf Schlaf-Mangel hin."
      },
      {
        id: "as_if_3",
        question: "He talks to me _____ I were a child, which is very annoying!",
        translation: "Er redet mit mir, als wäre ich ein Kind, was sehr nervig ist!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + WERE (Konjunktiv): Diese herablassende Behandlung ist frustrierend und respektlos."
      },
      {
        id: "as_if_4",
        question: "You're spending money _____ you were a millionaire with unlimited funds!",
        translation: "Du gibst Geld aus, als wärst du ein Millionär mit unbegrenzten Mitteln!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + WERE = unrealistische Annahme: Diese übermäßige Geld-Ausgabe ignoriert tatsächliche finanzielle Grenzen."
      },
      {
        id: "as_if_5",
        question: "She smiled _____ nothing bad had happened at all yesterday evening there.",
        translation: "Sie lächelte, als ob gestern Abend dort überhaupt nichts Schlimmes passiert wäre.",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Past Perfect: Dieses Lächeln trotz Vorfall zeigt Fassung oder Verbergen echter Gefühle."
      },
      {
        id: "as_if_6",
        question: "It looks _____ it's going to rain heavily very soon this afternoon outside.",
        translation: "Es sieht aus, als ob es heute Nachmittag draußen sehr bald stark regnen wird.",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Future: Diese Wetter-Vorhersage basiert auf sichtbaren Wolken-Anzeichen für kommenden Regen."
      },
      {
        id: "as_if_7",
        question: "Stop acting _____ you don't care about this important matter at all!",
        translation: "Hör auf, dich so zu benehmen, als ob dir diese wichtige Angelegenheit überhaupt nicht wichtig wäre!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Negativ: Diese Gleichgültigkeits-Vorwurf kritisiert gespieltes Desinteresse an wichtigem Thema."
      },
      {
        id: "as_if_8",
        question: "He treats his car _____ it were his precious baby child at home!",
        translation: "Er behandelt sein Auto, als wäre es sein kostbares Baby-Kind zu Hause!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + WERE: Diese übertriebene Auto-Pflege ist humorvoller Vergleich zur Baby-Fürsorge."
      },
      {
        id: "as_if_9",
        question: "You look _____ you've seen a ghost - what's wrong with you now?",
        translation: "Du siehst aus, als hättest du einen Geist gesehen - was ist jetzt mit dir los?",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Present Perfect: Dieser schockierte Gesichts-Ausdruck ist idiomatischer Vergleich für extreme Blässe oder Schreck."
      },
      {
        id: "as_if_10",
        question: "She sings _____ she were a professional opera singer on stage!",
        translation: "Sie singt, als wäre sie eine professionelle Opern-Sängerin auf der Bühne!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + WERE (Konjunktiv): Diese außergewöhnliche Gesangs-Qualität ist Kompliment durch Profi-Vergleich."
      },
      {
        id: "as_if_11",
        question: "It feels _____ we've been waiting here for hours, but it's only been minutes!",
        translation: "Es fühlt sich an, als hätten wir hier seit Stunden gewartet, aber es sind nur Minuten gewesen!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Present Perfect: Diese verzerrte Zeit-Wahrnehmung beim Warten ist psychologisches Ungeduld-Phänomen."
      },
      {
        id: "as_if_12",
        question: "They're arguing _____ their lives depended on winning this small argument!",
        translation: "Sie streiten sich, als hinge ihr Leben vom Gewinnen dieses kleinen Streits ab!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Past: Diese übertriebene Streit-Intensität ist humorvolle Kritik an unverhältnismäßiger Diskussions-Heftigkeit."
      },
      {
        id: "as_if_13",
        question: "He behaves _____ he owns the entire company, but he's just an employee!",
        translation: "Er benimmt sich, als würde ihm die ganze Firma gehören, aber er ist nur ein Angestellter!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Present: Diese überhebliche Selbst-Wichtigkeit widerspricht der tatsächlichen Position als normaler Mitarbeiter."
      },
      {
        id: "as_if_14",
        question: "You're talking _____ you were an expert, but you know very little actually!",
        translation: "Du redest, als wärst du ein Experte, aber du weißt tatsächlich sehr wenig!",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + WERE: Diese Scheinkompetenz-Kritik zeigt Diskrepanz zwischen Auftreten und tatsächlichem Wissen."
      },
      {
        id: "as_if_15",
        question: "She described the event _____ she had been there herself personally witnessing it.",
        translation: "Sie beschrieb das Ereignis, als wäre sie selbst persönlich dort gewesen und hätte es miterlebt.",
        options: ["as if", "as though", "both correct", "like"],
        correct: "both correct",
        explanation: "'AS IF' + Past Perfect: Diese lebendige Ereignis-Schilderung ist so detailliert, als wäre sie Augenzeuge gewesen."
      }
    ]
  },

  future_in_past: {
    name: "Future in the Past",
    description: "Zukunft aus Vergangenheit - was going to, would für Pläne",
    icon: Clock,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "fut_past_1",
        question: "He said he _____ call me later that evening, but he never did eventually.",
        translation: "Er sagte, er würde mich später an jenem Abend anrufen, aber er tat es letztendlich nie.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'WOULD' = Zukunft aus Vergangenheits-Perspektive: 'said he would call'. Dieses nicht eingehaltene Versprechen ist enttäuschend."
      },
      {
        id: "fut_past_2",
        question: "I _____ visit my grandparents last weekend, but I got sick unfortunately then.",
        translation: "Ich wollte letztes Wochenende meine Großeltern besuchen, aber ich wurde dann leider krank.",
        options: ["was going to", "would", "will", "both was going to and would"],
        correct: "was going to",
        explanation: "'WAS GOING TO' = PLAN der nicht klappte: Dieser Besuchs-Plan wurde durch Krankheit verhindert, zeigt Absicht."
      },
      {
        id: "fut_past_3",
        question: "She knew that the exam _____ be very difficult for everyone taking it.",
        translation: "Sie wusste, dass die Prüfung für alle, die sie machen, sehr schwierig sein würde.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'KNEW...WOULD' = Zukunft aus Vergangenheit: Diese Prüfungs-Schwierigkeits-Erwartung war vorherige Annahme."
      },
      {
        id: "fut_past_4",
        question: "They _____ buy a new house, but then they changed their minds completely.",
        translation: "Sie wollten ein neues Haus kaufen, aber dann änderten sie ihre Meinung komplett.",
        options: ["were going to", "would", "will", "both were going to and would"],
        correct: "were going to",
        explanation: "'WERE GOING TO' = PLAN geändert: Diese Haus-Kauf-Plan-Aufgabe zeigt Meinungs-Änderungs-Freiheit."
      },
      {
        id: "fut_past_5",
        question: "I thought the party _____ be boring, but it was actually very fun!",
        translation: "Ich dachte, die Party würde langweilig sein, aber sie war tatsächlich sehr lustig!",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'THOUGHT...WOULD' = Erwartung aus Vergangenheit: Diese negative Vorhersage wurde positiv widerlegt durch Realität."
      },
      {
        id: "fut_past_6",
        question: "We _____ go camping this weekend, but the weather forecast looks terrible now.",
        translation: "Wir wollten dieses Wochenende zelten gehen, aber die Wettervorhersage sieht jetzt schrecklich aus.",
        options: ["were going to", "would", "will", "both were going to and would"],
        correct: "were going to",
        explanation: "'WERE GOING TO' = PLAN bedroht: Diese Camping-Plan-Gefährdung durch schlechtes Wetter erfordert Neu-Überlegung."
      },
      {
        id: "fut_past_7",
        question: "He promised that he _____ be there on time for the important ceremony.",
        translation: "Er versprach, dass er pünktlich zur wichtigen Zeremonie da sein würde.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'PROMISED...WOULD' = Zukunfts-Versprechen aus Vergangenheit: Diese Pünktlichkeits-Zusage ist ernsthafte Verpflichtung."
      },
      {
        id: "fut_past_8",
        question: "I _____ tell you the secret yesterday, but I forgot completely in the moment.",
        translation: "Ich wollte dir gestern das Geheimnis erzählen, aber ich vergaß es im Moment komplett.",
        options: ["was going to", "would", "will", "both was going to and would"],
        correct: "was going to",
        explanation: "'WAS GOING TO' = ABSICHT nicht ausgeführt: Diese Vergesslichkeit verhinderte geplante Geheimnis-Enthüllung."
      },
      {
        id: "fut_past_9",
        question: "She said she _____ help us with the project whenever we needed assistance.",
        translation: "Sie sagte, sie würde uns mit dem Projekt helfen, wann immer wir Unterstützung bräuchten.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'SAID...WOULD' = Zukunfts-Zusage: Diese bedingungslose Hilfs-Bereitschaft ist großzügiges Unterstützungs-Angebot."
      },
      {
        id: "fut_past_10",
        question: "We _____ start the meeting at two, but everyone arrived late today surprisingly.",
        translation: "Wir wollten das Meeting um zwei beginnen, aber heute kamen überraschenderweise alle spät an.",
        options: ["were going to", "would", "will", "both were going to and would"],
        correct: "were going to",
        explanation: "'WERE GOING TO' = PLAN verzögert: Diese allgemeine Verspätung verschob geplanten Meeting-Beginn unfreiwillig."
      },
      {
        id: "fut_past_11",
        question: "I knew that telling him the truth _____ hurt his feelings deeply inside.",
        translation: "Ich wusste, dass ihm die Wahrheit zu sagen seine Gefühle tief innen verletzen würde.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'KNEW...WOULD' = vorhergesehene Konsequenz: Diese Wahrheits-Schmerz-Erwartung machte Mitteilung schwierig."
      },
      {
        id: "fut_past_12",
        question: "They _____ move to another city, but decided to stay here instead finally.",
        translation: "Sie wollten in eine andere Stadt ziehen, aber entschieden sich schließlich, stattdessen hier zu bleiben.",
        options: ["were going to", "would", "will", "both were going to and would"],
        correct: "were going to",
        explanation: "'WERE GOING TO' = PLAN aufgegeben: Diese Umzugs-Plan-Änderung zeigt Neu-Bewertung von aktuellem Wohn-Ort."
      },
      {
        id: "fut_past_13",
        question: "She told me that the course _____ start in September and last six months.",
        translation: "Sie erzählte mir, dass der Kurs im September beginnen und sechs Monate dauern würde.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'TOLD...WOULD' = mitgeteilte Zukunft: Diese Kurs-Informations-Weitergabe ist wichtig für Teilnahme-Planung."
      },
      {
        id: "fut_past_14",
        question: "I _____ apply for that job position, but then saw the low salary offered.",
        translation: "Ich wollte mich auf jene Job-Position bewerben, aber dann sah ich das niedrige angebotene Gehalt.",
        options: ["was going to", "would", "will", "both was going to and would"],
        correct: "was going to",
        explanation: "'WAS GOING TO' = ABSICHT gestoppt: Diese Bewerbungs-Plan-Aufgabe wegen niedrigem Gehalt ist rationale Entscheidung."
      },
      {
        id: "fut_past_15",
        question: "He hoped that his team _____ win the championship match this year finally.",
        translation: "Er hoffte, dass sein Team dieses Jahr endlich das Meisterschafts-Spiel gewinnen würde.",
        options: ["would", "will", "was going to", "both would and was going to"],
        correct: "would",
        explanation: "'HOPED...WOULD' = Hoffnung für Zukunft aus Vergangenheit: Diese Meisterschafts-Hoffnung ist leidenschaftlicher Fan-Wunsch."
      }
    ]
  },

  until_by_time_advanced: {
    name: "Until/By/By the time (Advanced)",
    description: "Komplexe Zeitpunkte - until, by, by the time in komplexen Sätzen",
    icon: Clock,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "time_adv_1",
        question: "_____ the time we arrived at the cinema, the movie had already started unfortunately.",
        translation: "Bis wir im Kino ankamen, hatte der Film leider schon begonnen.",
        options: ["By", "Until", "Till", "When"],
        correct: "By",
        explanation: "'BY THE TIME' + Vergangenheit → Past Perfect: Diese Kino-Verspätung führte zum Verpassen des Film-Anfangs."
      },
      {
        id: "time_adv_2",
        question: "Please wait _____ I come back from the store with the groceries we need.",
        translation: "Bitte warte, bis ich mit den Lebensmitteln, die wir brauchen, vom Laden zurückkomme.",
        options: ["until", "by", "till", "both until and till"],
        correct: "both until and till",
        explanation: "'WAIT UNTIL/TILL' + Ereignis: Diese Warte-Bitte gilt für die Dauer des Einkaufs bis zur Rückkehr."
      },
      {
        id: "time_adv_3",
        question: "I'll have finished all my work _____ five o'clock this evening at latest.",
        translation: "Ich werde bis spätestens heute Abend um fünf Uhr meine ganze Arbeit beendet haben.",
        options: ["by", "until", "till", "when"],
        correct: "by",
        explanation: "'BY' + Zeit mit Future Perfect: Diese Fertigstellungs-Zusage setzt klare Deadline für Arbeits-Abschluss."
      },
      {
        id: "time_adv_4",
        question: "_____ she finishes university next year, she will have studied for five years total.",
        translation: "Bis sie nächstes Jahr die Universität beendet, wird sie insgesamt fünf Jahre studiert haben.",
        options: ["By the time", "Until", "When", "Both by the time and when"],
        correct: "By the time",
        explanation: "'BY THE TIME' + Ereignis → Future Perfect: Diese Studien-Dauer-Berechnung ist Gesamt-Zeit-Überblick."
      },
      {
        id: "time_adv_5",
        question: "We stayed at the party _____ midnight and then went home very tired.",
        translation: "Wir blieben bis Mitternacht bei der Party und gingen dann sehr müde nach Hause.",
        options: ["until", "by", "till", "both until and till"],
        correct: "both until and till",
        explanation: "'UNTIL/TILL' = durchgehend dort bis Zeitpunkt: Diese lange Party-Teilnahme bis Mitternacht war ausgedehntes Feiern."
      },
      {
        id: "time_adv_6",
        question: "_____ I realized my mistake, it was already too late to fix it properly.",
        translation: "Bis ich meinen Fehler bemerkte, war es bereits zu spät, um ihn richtig zu beheben.",
        options: ["By the time", "Until", "When", "Both by the time and when"],
        correct: "By the time",
        explanation: "'BY THE TIME' + Past → Past Perfect: Diese zu späte Fehler-Erkenntnis verhinderte rechtzeitige Korrektur."
      },
      {
        id: "time_adv_7",
        question: "You need to submit your application _____ the end of this month without fail.",
        translation: "Du musst deine Bewerbung ohne Fehl bis Ende dieses Monats einreichen.",
        options: ["by", "until", "till", "when"],
        correct: "by",
        explanation: "'BY' = späteste FRIST: Diese strikte Bewerbungs-Deadline ohne Verlängerung ist wichtig für Verfahrens-Teilnahme."
      },
      {
        id: "time_adv_8",
        question: "I won't leave _____ you come back safely from the dangerous trip outside.",
        translation: "Ich werde nicht gehen, bis du sicher von der gefährlichen Reise draußen zurückkommst.",
        options: ["until", "by", "till", "both until and till"],
        correct: "both until and till",
        explanation: "'WON'T...UNTIL' = warten auf Ereignis: Diese Warte-Treue zeigt Fürsorge und Sorge um sichere Rückkehr."
      },
      {
        id: "time_adv_9",
        question: "_____ we get there tomorrow, they will have already left for another location.",
        translation: "Bis wir morgen dort ankommen, werden sie schon zu einem anderen Ort aufgebrochen sein.",
        options: ["By the time", "Until", "When", "Both by the time and when"],
        correct: "By the time",
        explanation: "'BY THE TIME' + Zukunft → Future Perfect: Diese Verspätete-Ankunft-Prognose bedeutet verpasste Begegnung."
      },
      {
        id: "time_adv_10",
        question: "She studied hard _____ she passed all her final exams with excellent grades.",
        translation: "Sie lernte hart, bis sie all ihre Abschlussprüfungen mit ausgezeichneten Noten bestand.",
        options: ["until", "by", "till", "both until and till"],
        correct: "both until and till",
        explanation: "'UNTIL/TILL' + Ziel erreicht: Diese durchgehende Lern-Anstrengung endete erst bei erfolgreichem Prüfungs-Abschluss."
      },
      {
        id: "time_adv_11",
        question: "_____ next summer arrives, I will have saved enough money for the trip.",
        translation: "Bis nächster Sommer kommt, werde ich genug Geld für die Reise gespart haben.",
        options: ["By the time", "Until", "When", "Both by the time and when"],
        correct: "By the time",
        explanation: "'BY THE TIME' + Future → Future Perfect: Dieser Spar-Plan bis Sommer ist zeitlich definiertes Finanz-Ziel."
      },
      {
        id: "time_adv_12",
        question: "Don't start the meeting _____ everyone has arrived in the conference room please.",
        translation: "Beginnt bitte das Meeting nicht, bis alle im Konferenzraum angekommen sind.",
        options: ["until", "by", "till", "both until and till"],
        correct: "both until and till",
        explanation: "'DON'T...UNTIL' = warten auf alle: Diese Höflichkeits-Regel respektiert alle Teilnehmer durch gemeinsamen Start."
      },
      {
        id: "time_adv_13",
        question: "I need to finish this report _____ tomorrow morning at the very latest possible.",
        translation: "Ich muss diesen Bericht bis spätestens morgen früh allerspätestens fertigstellen.",
        options: ["by", "until", "till", "when"],
        correct: "by",
        explanation: "'BY' = absolute DEADLINE: Diese strikte Berichts-Frist ohne Spielraum ist dringend für Abgabe."
      },
      {
        id: "time_adv_14",
        question: "_____ he graduates from university, he will have been studying for four years.",
        translation: "Bis er von der Universität abschließt, wird er vier Jahre studiert haben.",
        options: ["By the time", "Until", "When", "Both by the time and when"],
        correct: "By the time",
        explanation: "'BY THE TIME' + Zukunft → Future Perfect: Diese Studien-Zeit-Berechnung ist Gesamt-Bildungs-Dauer-Überblick."
      },
      {
        id: "time_adv_15",
        question: "The store is open _____ nine PM every night except on Sundays and holidays.",
        translation: "Der Laden ist jede Nacht außer sonntags und an Feiertagen bis 21 Uhr geöffnet.",
        options: ["until", "by", "till", "both until and till"],
        correct: "both until and till",
        explanation: "'UNTIL/TILL' für Öffnungs-DAUER: Diese Geschäfts-Zeit zeigt tägliche Verfügbarkeit bis spätem Abend für Kunden."
      }
    ]
  }
};

export default part26Categories;
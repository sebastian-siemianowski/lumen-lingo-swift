/**
 * GERMAN → ENGLISH GRAMMAR - PART 20
 * 4 categories, 15 questions each
 */

import { Infinity, Circle, Users, CheckSquare } from "lucide-react";

export const part20Categories = {
  gerund_vs_infinitive: {
    name: "Gerund vs Infinitive",
    description: "Infinitiv oder -ing Form - nach verschiedenen Verben richtig wählen",
    icon: Infinity,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "ger_inf_1",
        question: "I enjoy _____ books in my free time at home and in cafés.",
        translation: "Ich genieße es, in meiner Freizeit zu Hause und in Cafés Bücher zu lesen.",
        options: ["reading", "to read", "read", "both correct"],
        correct: "reading",
        explanation: "Nach ENJOY immer Gerund: 'enjoy reading' (NICHT to read). Verben wie enjoy, finish, avoid brauchen die -ing Form, keine andere Option möglich hier."
      },
      {
        id: "ger_inf_2",
        question: "She decided _____ a new language this year for her personal development goals.",
        translation: "Sie entschied sich, dieses Jahr für ihre persönlichen Entwicklungsziele eine neue Sprache zu lernen.",
        options: ["to learn", "learning", "learn", "both correct"],
        correct: "to learn",
        explanation: "Nach DECIDE immer Infinitiv: 'decided to learn'. Verben wie decide, want, plan, hope brauchen 'to' plus Grundform des Verbs."
      },
      {
        id: "ger_inf_3",
        question: "Would you mind _____ the window? It's getting very cold in here now.",
        translation: "Würde es dir etwas ausmachen, das Fenster zu schließen? Es wird hier jetzt sehr kalt.",
        options: ["closing", "to close", "close", "both correct"],
        correct: "closing",
        explanation: "Nach MIND immer Gerund: 'mind closing'. Diese höfliche Frage-Form nutzt immer die -ing Form nach 'mind' in allen Kontexten."
      },
      {
        id: "ger_inf_4",
        question: "We hope _____ you again soon sometime next month for coffee together.",
        translation: "Wir hoffen, dich nächsten Monat irgendwann bald wieder zu Kaffee zusammen zu sehen.",
        options: ["to see", "seeing", "see", "both correct"],
        correct: "to see",
        explanation: "Nach HOPE immer Infinitiv: 'hope to see'. Hoffnungen und Wünsche für die Zukunft verwenden die to-Infinitiv Konstruktion immer."
      },
      {
        id: "ger_inf_5",
        question: "He kept _____ the same mistake over and over again despite warnings from teacher.",
        translation: "Er machte trotz Warnungen vom Lehrer denselben Fehler immer und immer wieder weiter.",
        options: ["making", "to make", "make", "both correct"],
        correct: "making",
        explanation: "Nach KEEP (fortsetzen) immer Gerund: 'kept making'. Diese Konstruktion zeigt eine kontinuierliche wiederholte Handlung in der Vergangenheit."
      },
      {
        id: "ger_inf_6",
        question: "They offered _____ us with the heavy moving boxes upstairs to apartment.",
        translation: "Sie boten an, uns mit den schweren Umzugskartons nach oben zur Wohnung zu helfen.",
        options: ["to help", "helping", "help", "both correct"],
        correct: "to help",
        explanation: "Nach OFFER immer Infinitiv: 'offered to help'. Angebote und Versprechen nutzen die to-Infinitiv Struktur für zukünftige Handlungen."
      },
      {
        id: "ger_inf_7",
        question: "I don't remember _____ him before at any party or social event ever.",
        translation: "Ich erinnere mich nicht, ihn jemals zuvor bei irgendeiner Party oder sozialem Event gesehen zu haben.",
        options: ["seeing", "to see", "see", "both correct"],
        correct: "seeing",
        explanation: "REMEMBER + Gerund = Erinnerung an VERGANGENES: 'remember seeing' (erinnere mich, gesehen zu haben). Diese Form bezieht sich auf bereits Erlebtes."
      },
      {
        id: "ger_inf_8",
        question: "Please remember _____ the door when you leave the office tonight late.",
        translation: "Bitte denke daran, heute Abend spät die Tür abzuschließen, wenn du das Büro verlässt.",
        options: ["to lock", "locking", "lock", "both correct"],
        correct: "to lock",
        explanation: "REMEMBER + Infinitiv = an ZUKÜNFTIGES denken: 'remember to lock'. Diese Form ist eine Erinnerung an etwas, das noch getan werden muss."
      },
      {
        id: "ger_inf_9",
        question: "She suggested _____ to the beach instead of staying home this sunny weekend.",
        translation: "Sie schlug vor, an diesem sonnigen Wochenende zum Strand zu gehen, statt zu Hause zu bleiben.",
        options: ["going", "to go", "go", "both correct"],
        correct: "going",
        explanation: "Nach SUGGEST immer Gerund: 'suggested going'. Vorschläge und Empfehlungen verwenden die -ing Form, niemals den Infinitiv mit 'to'."
      },
      {
        id: "ger_inf_10",
        question: "I can't afford _____ a new car right now with my current limited salary.",
        translation: "Ich kann es mir nicht leisten, jetzt mit meinem aktuell begrenzten Gehalt ein neues Auto zu kaufen.",
        options: ["to buy", "buying", "buy", "both correct"],
        correct: "to buy",
        explanation: "Nach AFFORD immer Infinitiv: 'afford to buy'. Diese Struktur zeigt finanzielle Möglichkeit oder Unmöglichkeit für zukünftige Anschaffungen."
      },
      {
        id: "ger_inf_11",
        question: "He stopped _____ cigarettes five years ago for his health and family's sake.",
        translation: "Er hörte vor fünf Jahren für seine Gesundheit und das Wohl seiner Familie auf, Zigaretten zu rauchen.",
        options: ["smoking", "to smoke", "smoke", "both correct"],
        correct: "smoking",
        explanation: "STOP + Gerund = AUFHÖREN mit etwas: 'stopped smoking'. Diese Konstruktion bedeutet, dass die Handlung selbst beendet wurde, nicht mehr getan."
      },
      {
        id: "ger_inf_12",
        question: "We stopped _____ some coffee at the café on our way home from work.",
        translation: "Wir hielten an, um auf unserem Heimweg von der Arbeit Kaffee im Café zu trinken.",
        options: ["to have", "having", "have", "both correct"],
        correct: "to have",
        explanation: "STOP + Infinitiv = ANHALTEN um etwas zu tun: 'stopped to have'. Hier bedeutet 'stop', dass man pausiert, um eine andere Handlung auszuführen."
      },
      {
        id: "ger_inf_13",
        question: "She finished _____ her homework just before dinner time at seven o'clock.",
        translation: "Sie wurde mit ihren Hausaufgaben kurz vor der Essenszeit um sieben Uhr fertig.",
        options: ["doing", "to do", "do", "both correct"],
        correct: "doing",
        explanation: "Nach FINISH immer Gerund: 'finished doing'. Verben, die das Ende einer Aktivität ausdrücken, brauchen immer die -ing Form danach."
      },
      {
        id: "ger_inf_14",
        question: "They promised _____ us at the airport tomorrow morning early at six.",
        translation: "Sie versprachen, uns morgen früh um sechs am Flughafen zu treffen.",
        options: ["to meet", "meeting", "meet", "both correct"],
        correct: "to meet",
        explanation: "Nach PROMISE immer Infinitiv: 'promised to meet'. Versprechen und Zusagen für zukünftige Handlungen nutzen die to-Infinitiv Konstruktion."
      },
      {
        id: "ger_inf_15",
        question: "I regret _____ you that your application was not successful this time unfortunately.",
        translation: "Ich bedaure, dir mitteilen zu müssen, dass deine Bewerbung diesmal leider nicht erfolgreich war.",
        options: ["to tell", "telling", "tell", "both correct"],
        correct: "to tell",
        explanation: "REGRET + Infinitiv = bedauern JETZT etwas zu tun: 'regret to tell' (bedaure mitzuteilen). Diese Form drückt Bedauern über aktuelle Mitteilung aus."
      }
    ]
  },

  participle_clauses: {
    name: "Participle Clauses",
    description: "Partizipialsätze - Sätze mit -ing und Past Participle verkürzen",
    icon: Circle,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "part_1",
        question: "_____ in the park, I met my old friend from school by chance.",
        translation: "Während ich im Park spazierte, traf ich zufällig meinen alten Schulfreund.",
        options: ["Walking", "Walked", "While walking", "Both Walking and While walking"],
        correct: "Both Walking and While walking",
        explanation: "Present Participle für GLEICHZEITIGE Handlung: 'Walking' = While I was walking. Beide Formen sind korrekt, Partizip ist kürzer und eleganter."
      },
      {
        id: "part_2",
        question: "_____ by the beautiful scenery, she took many photos with her camera.",
        translation: "Beeindruckt von der schönen Landschaft, machte sie viele Fotos mit ihrer Kamera.",
        options: ["Impressed", "Impressing", "Being impressed", "Having impressed"],
        correct: "Impressed",
        explanation: "Past Participle für PASSIVE Bedeutung: 'Impressed' = Because she was impressed. Diese Kurzform zeigt, dass sie von etwas beeindruckt wurde."
      },
      {
        id: "part_3",
        question: "_____ the test, he felt relieved and happy about his good performance today.",
        translation: "Nachdem er den Test bestanden hatte, fühlte er sich erleichtert und glücklich über seine gute Leistung heute.",
        options: ["Having passed", "Passed", "Passing", "Being passed"],
        correct: "Having passed",
        explanation: "HAVING + Past Participle für FRÜHERE Handlung: 'Having passed' = After he had passed. Diese Form zeigt, dass eine Handlung vor der anderen passierte."
      },
      {
        id: "part_4",
        question: "The man _____ on the bench over there is my uncle from London visiting.",
        translation: "Der Mann, der dort drüben auf der Bank sitzt, ist mein zu Besuch kommender Onkel aus London.",
        options: ["sitting", "sat", "sits", "being sitting"],
        correct: "sitting",
        explanation: "Present Participle als ADJEKTIV: 'man sitting' = who is sitting. Diese Partizipial-Konstruktion verkürzt einen Relativsatz elegant und präzise."
      },
      {
        id: "part_5",
        question: "_____ his dinner quickly, he rushed out to catch the last bus home.",
        translation: "Nachdem er sein Abendessen schnell gegessen hatte, eilte er hinaus, um den letzten Bus nach Hause zu erwischen.",
        options: ["Having eaten", "Eating", "Eaten", "Being eaten"],
        correct: "Having eaten",
        explanation: "HAVING + Past Participle zeigt ABGESCHLOSSENE Handlung vor zweiter: Diese Struktur betont die zeitliche Reihenfolge - erst Essen, dann Rauseilen."
      },
      {
        id: "part_6",
        question: "The book _____ by that famous author sold millions of copies worldwide successfully.",
        translation: "Das von jenem berühmten Autor geschriebene Buch verkaufte sich weltweit erfolgreich millionenfach.",
        options: ["written", "writing", "wrote", "being written"],
        correct: "written",
        explanation: "Past Participle als ADJEKTIV (passiv): 'book written by' = which was written by. Diese Kurzform beschreibt das Buch elegant ohne Relativsatz."
      },
      {
        id: "part_7",
        question: "_____ what to say, she remained silent during the awkward meeting situation today.",
        translation: "Da sie nicht wusste, was sie sagen sollte, blieb sie während der unangenehmen Meeting-Situation heute still.",
        options: ["Not knowing", "Not known", "Knowing not", "Didn't know"],
        correct: "Not knowing",
        explanation: "NEGATIVES Participle: 'Not knowing' = Because she didn't know. Die Verneinung 'not' steht direkt vor dem Partizip in dieser Konstruktion."
      },
      {
        id: "part_8",
        question: "_____ in 1990, this building is now over thirty years old already here.",
        translation: "1990 erbaut, ist dieses Gebäude jetzt hier bereits über dreißig Jahre alt.",
        options: ["Built", "Building", "Being built", "Having built"],
        correct: "Built",
        explanation: "Past Participle mit ZEIT-Angabe: 'Built in 1990' = Which was built. Diese Konstruktion gibt historische Information über das Gebäude kompakt."
      },
      {
        id: "part_9",
        question: "_____ late as usual, he missed the beginning of the important presentation today.",
        translation: "Da er wie üblich zu spät kam, verpasste er heute den Anfang der wichtigen Präsentation.",
        options: ["Arriving", "Arrived", "Being arrived", "Having arrived"],
        correct: "Arriving",
        explanation: "Present Participle für GRUND: 'Arriving late' = Because he arrived late. Diese Struktur erklärt die Ursache für das Verpassen des Präsentations-Beginns."
      },
      {
        id: "ger_inf_10",
        question: "She left the room _____ goodbye to anyone at the party last night.",
        translation: "Sie verließ den Raum, ohne sich letzte Nacht bei der Party von irgendjemandem zu verabschieden.",
        options: ["without saying", "not saying", "without to say", "no saying"],
        correct: "without saying",
        explanation: "OHNE + Gerund: 'without saying' (ohne zu sagen). Nach Präpositionen wie 'without' nutzen wir immer die -ing Form des Verbs."
      },
      {
        id: "ger_inf_11",
        question: "_____ tired after the long journey, they went straight to bed immediately when home.",
        translation: "Müde nach der langen Reise, gingen sie sofort direkt ins Bett, als sie zu Hause waren.",
        options: ["Feeling", "Felt", "Being felt", "Having felt"],
        correct: "Feeling",
        explanation: "Present Participle für ZUSTAND-Grund: 'Feeling tired' = Because they felt tired. Diese Partizip-Form erklärt den Grund für sofortiges Schlafengehen."
      },
      {
        id: "ger_inf_12",
        question: "The letter _____ yesterday morning still hasn't arrived at its destination yet unfortunately.",
        translation: "Der gestern Morgen geschickte Brief ist leider noch nicht an seinem Bestimmungsort angekommen.",
        options: ["sent", "sending", "being sent", "having sent"],
        correct: "sent",
        explanation: "Past Participle (passiv) als ADJEKTIV: 'letter sent' = which was sent. Diese Kurzform beschreibt den Brief ohne kompletten Relativsatz."
      },
      {
        id: "ger_inf_13",
        question: "_____ carefully, you'll notice many interesting small details in this beautiful painting here.",
        translation: "Wenn du sorgfältig schaust, wirst du viele interessante kleine Details in diesem schönen Gemälde hier bemerken.",
        options: ["Looking", "Looked", "If you look", "Both Looking and If you look"],
        correct: "Both Looking and If you look",
        explanation: "Present Participle für BEDINGUNG: 'Looking' = If you look. Beide Formen sind möglich, das Partizip ist konziser und direkter."
      },
      {
        id: "ger_inf_14",
        question: "_____ all the work for today, she decided to go home early this afternoon.",
        translation: "Da sie die ganze Arbeit für heute beendet hatte, entschied sie sich, heute Nachmittag früh nach Hause zu gehen.",
        options: ["Having finished", "Finishing", "Finished", "Being finished"],
        correct: "Having finished",
        explanation: "HAVING + Past Participle für ABGESCHLOSSEN vor zweiter Handlung: Diese Struktur zeigt, dass Arbeits-Ende vor Heimgeh-Entscheidung lag."
      },
      {
        id: "ger_inf_15",
        question: "The children came running into the house, _____ with excitement about their news today.",
        translation: "Die Kinder kamen ins Haus gerannt und schrien vor Aufregung über ihre heutigen Neuigkeiten.",
        options: ["screaming", "screamed", "to scream", "being screamed"],
        correct: "screaming",
        explanation: "Present Participle für BEGLEITENDE Handlung: 'came running...screaming'. Diese Struktur zeigt zwei gleichzeitige Handlungen beim Hereinkommen."
      }
    ]
  },

  so_do_neither_do: {
    name: "So Do I / Neither Do I",
    description: "Zustimmung - so/neither für Übereinstimmung mit Aussagen nutzen",
    icon: CheckSquare,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "agree_1",
        question: "A: 'I love pizza!' B: '_____!' (agreement with positive statement)",
        translation: "A: 'Ich liebe Pizza!' B: 'Ich auch!'",
        options: ["So do I", "Neither do I", "I do too", "Both So do I and I do too"],
        correct: "Both So do I and I do too",
        explanation: "Zustimmung zu POSITIV: 'SO DO I' oder 'I DO TOO' beide korrekt. Diese Strukturen zeigen Übereinstimmung mit positiver Aussage über Pizza-Liebe."
      },
      {
        id: "agree_2",
        question: "A: 'I don't like cold weather.' B: '_____.' (agreement with negative statement)",
        translation: "A: 'Ich mag kein kaltes Wetter.' B: 'Ich auch nicht.'",
        options: ["Neither do I", "So do I", "I don't too", "Both Neither do I and I don't either"],
        correct: "Neither do I",
        explanation: "Zustimmung zu NEGATIV: 'NEITHER DO I' oder 'I don't either'. Diese Struktur zeigt gemeinsame Abneigung gegen kaltes Wetter."
      },
      {
        id: "agree_3",
        question: "A: 'She can speak French fluently.' B: 'So _____ her sister!'",
        translation: "A: 'Sie kann fließend Französisch sprechen.' B: 'Ihre Schwester auch!'",
        options: ["can", "does", "is", "do"],
        correct: "can",
        explanation: "'SO' + MODAL Verb: 'So can her sister'. Das Modal-Verb aus dem ersten Satz wird wiederholt für Zustimmung bei anderen Personen."
      },
      {
        id: "agree_4",
        question: "A: 'I wasn't at the meeting yesterday.' B: '_____.'",
        translation: "A: 'Ich war gestern nicht beim Meeting.' B: 'Ich auch nicht.'",
        options: ["Neither was I", "So was I", "I wasn't too", "Both Neither was I and I wasn't either"],
        correct: "Neither was I",
        explanation: "Zustimmung zu NEGATIV Vergangenheit: 'NEITHER WAS I'. Diese Struktur zeigt gemeinsame Abwesenheit beim gestrigen Meeting."
      },
      {
        id: "agree_5",
        question: "A: 'I have been to Paris.' B: '_____! It's beautiful!'",
        translation: "A: 'Ich war in Paris.' B: 'Ich auch! Es ist wunderschön!'",
        options: ["So have I", "Neither have I", "I have too", "Both So have I and I have too"],
        correct: "Both So have I and I have too",
        explanation: "Zustimmung mit PRESENT PERFECT: 'SO HAVE I'. Diese Struktur teilt die gemeinsame Erfahrung des Paris-Besuchs."
      },
      {
        id: "agree_6",
        question: "A: 'I'm not ready to leave yet.' B: '_____. Let's wait a bit.'",
        translation: "A: 'Ich bin noch nicht bereit zu gehen.' B: 'Ich auch nicht. Lass uns etwas warten.'",
        options: ["Neither am I", "So am I", "I'm not too", "Both Neither am I and I'm not either"],
        correct: "Neither am I",
        explanation: "Zustimmung zu NEGATIV mit 'be': 'NEITHER AM I'. Diese Struktur zeigt gemeinsames Bedürfnis nach mehr Vorbereitungszeit."
      },
      {
        id: "agree_7",
        question: "A: 'He will come to the party.' B: 'So _____ his brother!'",
        translation: "A: 'Er wird zur Party kommen.' B: 'Sein Bruder auch!'",
        options: ["will", "does", "is", "do"],
        correct: "will",
        explanation: "'SO' + WILL: 'So will his brother'. Das Hilfsverb 'will' wird für Zustimmung bei zukünftigen Handlungen anderer Personen wiederholt."
      },
      {
        id: "agree_8",
        question: "A: 'I haven't finished my homework.' B: '_____. We should work together.'",
        translation: "A: 'Ich habe meine Hausaufgaben nicht fertig.' B: 'Ich auch nicht. Wir sollten zusammenarbeiten.'",
        options: ["Neither have I", "So have I", "I haven't too", "Both Neither have I and I haven't either"],
        correct: "Neither have I",
        explanation: "Zustimmung zu NEGATIV Present Perfect: 'NEITHER HAVE I'. Diese gemeinsame Unfertigkeit ist Anlass für Zusammenarbeit-Vorschlag."
      },
      {
        id: "agree_9",
        question: "A: 'I would love to travel more.' B: '_____! Let's plan a trip.'",
        translation: "A: 'Ich würde gerne mehr reisen.' B: 'Ich auch! Lass uns eine Reise planen.'",
        options: ["So would I", "Neither would I", "I would too", "Both So would I and I would too"],
        correct: "Both So would I and I would too",
        explanation: "Zustimmung mit WOULD: beide Formen korrekt. Dieser gemeinsame Reise-Wunsch führt zu konkretem Planungs-Vorschlag für Zukunft."
      },
      {
        id: "agree_10",
        question: "A: 'She doesn't eat meat.' B: 'Neither _____ her husband.'",
        translation: "A: 'Sie isst kein Fleisch.' B: 'Ihr Mann auch nicht.'",
        options: ["does", "do", "is", "can"],
        correct: "does",
        explanation: "'NEITHER' + DOES bei dritter Person: 'Neither does her husband'. Diese vegetarische Gemeinsamkeit des Paares ist Ernährungs-Übereinstimmung."
      },
      {
        id: "agree_11",
        question: "A: 'I'm feeling tired today.' B: '_____. Maybe we should rest.'",
        translation: "A: 'Ich fühle mich heute müde.' B: 'Ich auch. Vielleicht sollten wir uns ausruhen.'",
        options: ["So am I", "Neither am I", "I am too", "Both So am I and I am too"],
        correct: "Both So am I and I am too",
        explanation: "Zustimmung zu GEFÜHL mit 'be': beide Formen möglich. Diese gemeinsame Müdigkeit ist vernünftiger Grund für Ruhe-Pause."
      },
      {
        id: "agree_12",
        question: "A: 'I won't go to the concert.' B: '_____. It's too expensive for me.'",
        translation: "A: 'Ich werde nicht zum Konzert gehen.' B: 'Ich auch nicht. Es ist zu teuer für mich.'",
        options: ["Neither will I", "So will I", "I won't too", "Both Neither will I and I won't either"],
        correct: "Neither will I",
        explanation: "Zustimmung zu NEGATIV Zukunft: 'NEITHER WILL I'. Diese gemeinsame Konzert-Absage basiert auf zu hohen Ticket-Preisen."
      },
      {
        id: "agree_13",
        question: "A: 'He enjoys cooking.' B: 'So _____ I! It's very relaxing.'",
        translation: "A: 'Er genießt das Kochen.' B: 'Ich auch! Es ist sehr entspannend.'",
        options: ["do", "does", "am", "can"],
        correct: "do",
        explanation: "'SO' + DO bei 'I': 'So do I'. Bei Vollverben wie 'enjoy' verwenden wir 'do/does' je nach Person für Zustimmung."
      },
      {
        id: "agree_14",
        question: "A: 'I'm not going to the gym today.' B: '_____. I'm too busy.'",
        translation: "A: 'Ich gehe heute nicht ins Fitnessstudio.' B: 'Ich auch nicht. Ich bin zu beschäftigt.'",
        options: ["Neither am I", "So am I", "I'm not too", "Both Neither am I and I'm not either"],
        correct: "Neither am I",
        explanation: "Zustimmung zu NEGATIV mit 'be + going to': 'NEITHER AM I'. Diese gemeinsame Gym-Absage heute hat Zeitmangel als Grund."
      },
      {
        id: "agree_15",
        question: "A: 'I've never been to Japan.' B: '_____. I'd love to go someday!'",
        translation: "A: 'Ich war noch nie in Japan.' B: 'Ich auch nicht. Ich würde gerne eines Tages dorthin!'",
        options: ["Neither have I", "So have I", "I haven't too", "Both Neither have I and I haven't either"],
        correct: "Neither have I",
        explanation: "Zustimmung zu NEVER (negativ): 'NEITHER HAVE I'. Diese gemeinsame Nicht-Japan-Erfahrung ist verbunden mit zukünftigem Reisewunsch."
      }
    ]
  },

  despite_in_spite: {
    name: "Despite / In Spite Of",
    description: "Trotz - despite und in spite of für Kontraste verwenden",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "despite_1",
        question: "_____ the bad weather conditions, we still went hiking in the mountains yesterday.",
        translation: "Trotz der schlechten Wetterbedingungen gingen wir gestern noch in den Bergen wandern.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "'DESPITE' oder 'IN SPITE OF' + Nomen beide korrekt (bedeuten dasselbe). Diese Trotz-Konstruktion zeigt Entschlossenheit trotz ungünstiger Umstände."
      },
      {
        id: "despite_2",
        question: "She passed the exam _____ not studying very much at all for it.",
        translation: "Sie bestand die Prüfung, obwohl sie überhaupt nicht sehr viel dafür gelernt hatte.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + Gerund (not studying): Diese Konstruktion zeigt überraschenden Erfolg trotz mangelnder Vorbereitung."
      },
      {
        id: "despite_3",
        question: "_____ he's very young, he has achieved great success in his professional career.",
        translation: "Obwohl er sehr jung ist, hat er großen Erfolg in seiner professionellen Karriere erreicht.",
        options: ["Although", "Despite", "In spite of", "Both although and despite"],
        correct: "Although",
        explanation: "'ALTHOUGH' + Subjekt + Verb (NICHT despite): 'Although he's young'. Nur 'although' kann direkt mit einem vollständigen Satz verwendet werden."
      },
      {
        id: "despite_4",
        question: "We enjoyed the party _____ the fact that it was very crowded and noisy.",
        translation: "Wir genossen die Party trotz der Tatsache, dass sie sehr überfüllt und laut war.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + 'the fact that': Diese Konstruktion ermöglicht einen vollständigen Satz nach 'despite' durch 'the fact that'."
      },
      {
        id: "despite_5",
        question: "_____ his hard work and dedication, he didn't get the promotion he deserved.",
        translation: "Trotz seiner harten Arbeit und Hingabe bekam er nicht die Beförderung, die er verdiente.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "DESPITE/IN SPITE OF + Nomen-Phrase: Diese Struktur zeigt enttäuschendes Resultat trotz großer Anstrengungen und Engagement."
      },
      {
        id: "despite_6",
        question: "I decided to go out _____ feeling very tired and exhausted from work.",
        translation: "Ich entschied mich auszugehen, obwohl ich mich sehr müde und erschöpft von der Arbeit fühlte.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + Gerund: Diese Entscheidung auszugehen trotz Erschöpfung zeigt sozialen Verpflichtungs-Druck oder starken Wunsch."
      },
      {
        id: "despite_7",
        question: "_____ being very expensive, the restaurant is always fully booked weeks in advance.",
        translation: "Obwohl es sehr teuer ist, ist das Restaurant immer Wochen im Voraus komplett ausgebucht.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "DESPITE/IN SPITE OF + being + Adjektiv: Diese hohe Nachfrage trotz Preisen zeigt außergewöhnliche Restaurant-Qualität oder Beliebtheit."
      },
      {
        id: "despite_8",
        question: "She remained calm _____ the stressful and chaotic situation around her at work.",
        translation: "Sie blieb trotz der stressigen und chaotischen Situation um sie herum bei der Arbeit ruhig.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + Nomen: Diese Ruhe-Bewahrung in Chaos ist bewundernswerte Stress-Resistenz und professionelles Verhalten."
      },
      {
        id: "despite_9",
        question: "_____ what everyone told him repeatedly, he went ahead with his risky plan anyway.",
        translation: "Trotz allem, was ihm jeder wiederholt sagte, setzte er seinen riskanten Plan trotzdem durch.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "DESPITE/IN SPITE OF + what-Satz: Diese Rat-Ignorierung trotz mehrfacher Warnungen zeigt Sturheit oder starke Überzeugung."
      },
      {
        id: "despite_10",
        question: "He managed to stay positive _____ all the difficulties and challenges he faced recently.",
        translation: "Er schaffte es, positiv zu bleiben, trotz all der Schwierigkeiten und Herausforderungen, denen er kürzlich begegnete.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + 'all': Diese positive Einstellung trotz Problemen ist starke mentale Resilienz in schweren Zeiten."
      },
      {
        id: "despite_11",
        question: "_____ the heavy rain outside, the outdoor concert continued as planned successfully tonight.",
        translation: "Trotz des starken Regens draußen wurde das Outdoor-Konzert heute Abend erfolgreich wie geplant fortgesetzt.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "DESPITE/IN SPITE OF + THE + Nomen: Diese Konzert-Fortsetzung trotz Regen zeigt Durchhaltevermögen von Künstlern und Publikum."
      },
      {
        id: "despite_12",
        question: "I enjoyed the movie _____ having seen it three times before already this year.",
        translation: "Ich genoss den Film, obwohl ich ihn dieses Jahr schon dreimal zuvor gesehen hatte.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + having + Past Participle: Dieser wiederholte Film-Genuss trotz Vertrautheit zeigt außergewöhnliche Film-Qualität."
      },
      {
        id: "despite_13",
        question: "_____ trying his best effort, he couldn't solve the complicated mathematical problem correctly.",
        translation: "Obwohl er sein Bestes versuchte, konnte er das komplizierte mathematische Problem nicht richtig lösen.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "DESPITE/IN SPITE OF + Gerund: Dieser Misserfolg trotz maximaler Anstrengung zeigt extreme Problem-Schwierigkeit über Fähigkeits-Level."
      },
      {
        id: "despite_14",
        question: "They're very happy together _____ their many differences in personality and interests.",
        translation: "Sie sind sehr glücklich zusammen trotz ihrer vielen Unterschiede in Persönlichkeit und Interessen.",
        options: ["despite", "in spite of", "both correct", "although"],
        correct: "both correct",
        explanation: "DESPITE/IN SPITE OF + Possessiv + Nomen: Diese Beziehungs-Harmonie trotz Verschiedenheit zeigt, dass Gegensätze sich tatsächlich anziehen können."
      },
      {
        id: "despite_15",
        question: "_____ the train being late by thirty minutes, we arrived just in time for meeting.",
        translation: "Obwohl der Zug dreißig Minuten zu spät war, kamen wir gerade rechtzeitig zum Meeting an.",
        options: ["Despite", "In spite of", "Both correct", "Although"],
        correct: "Both correct",
        explanation: "DESPITE/IN SPITE OF + Nomen + being: Diese pünktliche Ankunft trotz Zug-Verspätung ist glückliches Timing oder gute Puffer-Planung."
      }
    ]
  },

  expressing_purpose: {
    name: "Expressing Purpose (to/in order to)",
    description: "Zweck ausdrücken - to, in order to, so as to für Absichten",
    icon: Circle,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "purpose_1",
        question: "I'm learning English _____ get a better job opportunity in international company.",
        translation: "Ich lerne Englisch, um eine bessere Job-Möglichkeit in internationaler Firma zu bekommen.",
        options: ["to", "for", "so that", "because"],
        correct: "to",
        explanation: "'TO' + Infinitiv für ZWECK: 'to get a job' (um zu bekommen). Dies ist die einfachste und häufigste Form für Absichts-Ausdruck."
      },
      {
        id: "purpose_2",
        question: "She went to the store _____ buy some milk for breakfast tomorrow morning.",
        translation: "Sie ging zum Laden, um für das Frühstück morgen früh etwas Milch zu kaufen.",
        options: ["to", "for", "in order to", "both to and in order to"],
        correct: "both to and in order to",
        explanation: "'TO' oder 'IN ORDER TO' beide möglich: 'in order to' ist formeller. Beide Formen drücken den Einkaufs-Zweck klar aus."
      },
      {
        id: "purpose_3",
        question: "We're saving money _____ we can buy a house next year together as family.",
        translation: "Wir sparen Geld, damit wir nächstes Jahr zusammen als Familie ein Haus kaufen können.",
        options: ["so that", "to", "for", "in order to"],
        correct: "so that",
        explanation: "'SO THAT' + Subjekt + can/will für ZWECK mit SUBJEKT: Diese Konstruktion braucht ein Subjekt und Verb, anders als 'to'."
      },
      {
        id: "purpose_4",
        question: "He studies hard every day _____ pass his exams with excellent grades successfully.",
        translation: "Er lernt jeden Tag hart, um seine Prüfungen erfolgreich mit ausgezeichneten Noten zu bestehen.",
        options: ["to", "for", "so that", "in order"],
        correct: "to",
        explanation: "'TO' + Infinitiv: einfache Zweck-Form. Dieses tägliche harte Lernen hat klares Ziel von Prüfungs-Erfolg mit guten Noten."
      },
      {
        id: "purpose_5",
        question: "They arrived early _____ not to miss the beginning of the important show tonight.",
        translation: "Sie kamen früh an, um den Anfang der wichtigen Show heute Abend nicht zu verpassen.",
        options: ["so as", "to", "in order", "for"],
        correct: "so as",
        explanation: "'SO AS NOT TO' für NEGATIVEN Zweck: um nicht zu verpassen. Diese formelle Struktur wird speziell für negative Absichten genutzt."
      },
      {
        id: "purpose_6",
        question: "I called her _____ her about the meeting time change tomorrow morning early.",
        translation: "Ich rief sie an, um sie über die Meeting-Zeit-Änderung morgen früh zu informieren.",
        options: ["to tell", "for telling", "so that tell", "in order tell"],
        correct: "to tell",
        explanation: "'TO' + Infinitiv für KOMMUNIKATIONS-Zweck: Dieser Anruf hatte spezifischen Informations-Zweck über Meeting-Änderung."
      },
      {
        id: "purpose_7",
        question: "She's taking extra classes _____ improve her skills for the job promotion interview.",
        translation: "Sie nimmt zusätzliche Kurse, um ihre Fähigkeiten für das Beförderungs-Vorstellungsgespräch zu verbessern.",
        options: ["to", "in order to", "both correct", "for"],
        correct: "both correct",
        explanation: "'TO' oder 'IN ORDER TO': Diese Extra-Kurse haben klares Verbesserungs-Ziel für angestrebte berufliche Beförderung."
      },
      {
        id: "purpose_8",
        question: "We left the house quietly _____ wake up the sleeping baby in the bedroom.",
        translation: "Wir verließen leise das Haus, um das schlafende Baby im Schlafzimmer nicht aufzuwecken.",
        options: ["so as not to", "to not", "for not", "in order not"],
        correct: "so as not to",
        explanation: "'SO AS NOT TO' für höfliche VERMEIDUNG: Diese vorsichtige Haus-Verlassen zeigt Rücksicht auf Baby-Schlaf."
      },
      {
        id: "purpose_9",
        question: "He brought his camera _____ take photos of the beautiful sunset at beach.",
        translation: "Er brachte seine Kamera mit, um Fotos vom schönen Sonnenuntergang am Strand zu machen.",
        options: ["to", "for", "in order to", "both to and in order to"],
        correct: "both to and in order to",
        explanation: "'TO' oder 'IN ORDER TO': Beide zeigen Kamera-Mitnahme-Zweck. Diese vorausschauende Planung ermöglicht Sonnenuntergang-Foto-Möglichkeit."
      },
      {
        id: "purpose_10",
        question: "I'm writing this down _____ I don't forget the important information later today.",
        translation: "Ich schreibe das auf, damit ich die wichtigen Informationen später heute nicht vergesse.",
        options: ["so that", "to", "for", "in order to"],
        correct: "so that",
        explanation: "'SO THAT' + Subjekt + Verb: 'so that I don't forget'. Diese Notiz-Methode ist praktische Gedächtnis-Hilfe gegen Vergessen."
      },
      {
        id: "purpose_11",
        question: "She's studying medicine _____ become a doctor and help people in need everywhere.",
        translation: "Sie studiert Medizin, um Ärztin zu werden und Menschen in Not überall zu helfen.",
        options: ["to", "in order to", "both correct", "for"],
        correct: "both correct",
        explanation: "'TO' oder 'IN ORDER TO': Dieses Medizin-Studium hat klares humanitäres Berufsziel von Kranken-Hilfe."
      },
      {
        id: "purpose_12",
        question: "They're whispering _____ nobody else in the room can hear their private conversation.",
        translation: "Sie flüstern, damit niemand sonst im Raum ihr privates Gespräch hören kann.",
        options: ["so that", "to", "for", "in order to"],
        correct: "so that",
        explanation: "'SO THAT' + can: Dieses Flüstern dient Geheimhaltung vor anderen im Raum, braucht 'so that' mit Modal-Verb."
      },
      {
        id: "purpose_13",
        question: "I exercise regularly _____ stay healthy and fit for many years to come.",
        translation: "Ich trainiere regelmäßig, um für viele kommende Jahre gesund und fit zu bleiben.",
        options: ["to", "in order to", "both correct", "for"],
        correct: "both correct",
        explanation: "'TO' oder 'IN ORDER TO': Diese Sport-Routine hat langfristiges Gesundheits-Erhaltungs-Ziel für Zukunft."
      },
      {
        id: "purpose_14",
        question: "We used a translator app _____ understand what the locals were saying to us.",
        translation: "Wir benutzten eine Übersetzer-App, um zu verstehen, was die Einheimischen zu uns sagten.",
        options: ["to", "in order to", "both correct", "for"],
        correct: "both correct",
        explanation: "'TO' oder 'IN ORDER TO': Diese App-Nutzung ermöglichte Kommunikations-Verständnis mit Einheimischen trotz Sprachbarriere."
      },
      {
        id: "purpose_15",
        question: "He turned down the music volume _____ disturb the neighbors late at night.",
        translation: "Er drehte die Musik-Lautstärke leiser, um die Nachbarn spät nachts nicht zu stören.",
        options: ["so as not to", "to not", "for not", "not to"],
        correct: "so as not to",
        explanation: "'SO AS NOT TO' (formell) oder 'not to' (informell): Diese Lautstärke-Reduzierung nachts zeigt rücksichtsvolles Nachbar-Verhalten."
      }
    ]
  }
};

export default part20Categories;
/**
 * GERMAN → ENGLISH GRAMMAR - PART 25
 * 4 categories, 15 questions each
 */

import { MessageCircleQuestion, HelpCircle, User, RotateCcw } from "lucide-react";

export const part25Categories = {
  tag_questions: {
    name: "Tag Questions",
    description: "Bestätigungsfragen - isn't it, don't you usw. anhängen",
    icon: MessageCircleQuestion,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "tag_1",
        question: "You're coming to the party tomorrow night, _____?",
        translation: "Du kommst morgen Abend zur Party, oder?",
        options: ["aren't you", "are you", "don't you", "do you"],
        correct: "aren't you",
        explanation: "POSITIV → negatives Tag: 'are' wird 'aren't you'. Diese Bestätigungs-Frage erwartet Zustimmung zur Party-Teilnahme."
      },
      {
        id: "tag_2",
        question: "She doesn't like coffee very much, _____?",
        translation: "Sie mag Kaffee nicht sehr, oder doch?",
        options: ["does she", "doesn't she", "is she", "isn't she"],
        correct: "does she",
        explanation: "NEGATIV → positives Tag: 'doesn't like' wird 'does she'. Diese Frage bestätigt die Kaffee-Abneigung der Person."
      },
      {
        id: "tag_3",
        question: "We've met before at the conference last year, _____?",
        translation: "Wir haben uns letztes Jahr bei der Konferenz schon mal getroffen, nicht wahr?",
        options: ["haven't we", "have we", "didn't we", "did we"],
        correct: "haven't we",
        explanation: "Present Perfect → Tag mit 'have': Diese Erinnerungs-Bestätigung an frühere Begegnung sucht Bestätigung."
      },
      {
        id: "tag_4",
        question: "It's a beautiful day today, _____?",
        translation: "Es ist heute ein schöner Tag, nicht wahr?",
        options: ["isn't it", "is it", "doesn't it", "does it"],
        correct: "isn't it",
        explanation: "'IT IS' → 'isn't it': Diese Wetter-Feststellung sucht Zustimmung zur positiven Tages-Qualität."
      },
      {
        id: "tag_5",
        question: "You haven't seen my keys anywhere, _____?",
        translation: "Du hast meine Schlüssel nirgendwo gesehen, oder?",
        options: ["have you", "haven't you", "did you", "didn't you"],
        correct: "have you",
        explanation: "NEGATIV Present Perfect → 'have you': Diese Schlüssel-Such-Frage hofft auf positive Antwort trotz negativer Formulierung."
      },
      {
        id: "tag_6",
        question: "Let's go to the cinema tonight, _____?",
        translation: "Lass uns heute Abend ins Kino gehen, okay?",
        options: ["shall we", "will we", "let's we", "don't we"],
        correct: "shall we",
        explanation: "Nach 'LET'S': immer 'SHALL WE': Diese Vorschlag-Form ist Einladung zur gemeinsamen Kino-Aktivität."
      },
      {
        id: "tag_7",
        question: "He can speak three languages fluently, _____?",
        translation: "Er kann drei Sprachen fließend sprechen, nicht wahr?",
        options: ["can't he", "can he", "doesn't he", "does he"],
        correct: "can't he",
        explanation: "MODAL 'CAN' → 'can't he': Diese beeindruckende Mehrsprachigkeits-Feststellung sucht bewundernde Bestätigung."
      },
      {
        id: "tag_8",
        question: "There's a meeting at three o'clock this afternoon, _____?",
        translation: "Es gibt heute Nachmittag um drei Uhr ein Meeting, nicht wahr?",
        options: ["isn't there", "is there", "doesn't there", "does there"],
        correct: "isn't there",
        explanation: "'THERE IS' → 'isn't there': Diese Meeting-Zeit-Bestätigung prüft Kalender-Information."
      },
      {
        id: "tag_9",
        question: "Nobody called while I was out this morning, _____?",
        translation: "Niemand rief an, während ich heute Morgen weg war, oder?",
        options: ["did they", "didn't they", "did nobody", "didn't nobody"],
        correct: "did they",
        explanation: "Nach NOBODY (negativ) → POSITIVES Tag 'did they': Diese Anruf-Bestätigung nutzt 'they' als Pronomen für 'nobody'."
      },
      {
        id: "tag_10",
        question: "You used to live in London many years ago, _____?",
        translation: "Du hast vor vielen Jahren in London gewohnt, nicht wahr?",
        options: ["didn't you", "used you", "usedn't you", "did you"],
        correct: "didn't you",
        explanation: "'USED TO' → 'didn't you': Diese Erinnerungs-Frage an frühere London-Zeit nutzt 'did' im Tag."
      },
      {
        id: "tag_11",
        question: "I'm right about this situation, _____?",
        translation: "Ich habe mit dieser Situation recht, oder?",
        options: ["aren't I", "am I not", "am not I", "both aren't I and am I not"],
        correct: "aren't I",
        explanation: "'I AM' → 'AREN'T I' (Spezialfall!): Diese Selbst-Bestätigung sucht Zustimmung zur eigenen Situations-Einschätzung."
      },
      {
        id: "tag_12",
        question: "They won't be late for the important ceremony tomorrow, _____?",
        translation: "Sie werden morgen nicht zu spät zur wichtigen Zeremonie sein, oder?",
        options: ["will they", "won't they", "are they", "aren't they"],
        correct: "will they",
        explanation: "NEGATIV 'won't' → POSITIV 'will they': Diese Pünktlichkeits-Bestätigung hofft auf rechtzeitige Ankunft."
      },
      {
        id: "tag_13",
        question: "Close the window before leaving, _____?",
        translation: "Schließe das Fenster vor dem Gehen, ja?",
        options: ["will you", "won't you", "would you", "all correct"],
        correct: "will you",
        explanation: "Nach IMPERATIV: 'will you' oder 'won't you' (beide möglich): Diese Bitte-Verstärkung ist höfliche Erinnerung an Fenster-Schließen."
      },
      {
        id: "tag_14",
        question: "Nothing bad happened during the trip abroad, _____?",
        translation: "Nichts Schlimmes passierte während der Auslandsreise, oder?",
        options: ["did it", "didn't it", "did nothing", "didn't nothing"],
        correct: "did it",
        explanation: "Nach NOTHING (negativ) → POSITIV 'did it': Diese Reise-Qualitäts-Frage hofft auf problemfreie Urlaubs-Erfahrung."
      },
      {
        id: "tag_15",
        question: "She'd like to come with us to the concert, _____?",
        translation: "Sie würde gerne mit uns zum Konzert kommen, nicht wahr?",
        options: ["wouldn't she", "would she", "doesn't she", "does she"],
        correct: "wouldn't she",
        explanation: "'WOULD LIKE' → 'wouldn't she': Diese Teilnahme-Wunsch-Bestätigung ist Einladungs-Erwartung für gemeinsames Konzert-Erlebnis."
      }
    ]
  },

  question_words_ever: {
    name: "Question Words + Ever",
    description: "Verstärkte Fragen - who ever, what ever, where ever in Fragen",
    icon: HelpCircle,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "q_ever_1",
        question: "_____ did you manage to finish all that work in just one hour?",
        translation: "Wie um alles in der Welt hast du es geschafft, all die Arbeit in nur einer Stunde zu beenden?",
        options: ["How ever", "However", "How", "What"],
        correct: "How ever",
        explanation: "'HOW EVER' (zwei Wörter) = wie nur/wie um alles: Diese ungläubige Frage drückt Staunen über schnelle Arbeits-Erledigung aus."
      },
      {
        id: "q_ever_2",
        question: "_____ told you that ridiculous story? It's completely untrue and false!",
        translation: "Wer um alles in der Welt hat dir diese lächerliche Geschichte erzählt? Sie ist völlig unwahr und falsch!",
        options: ["Who ever", "Whoever", "Who", "What"],
        correct: "Who ever",
        explanation: "'WHO EVER' (zwei Wörter) in Frage = wer nur: Diese empörte Frage sucht Quelle der falschen Information."
      },
      {
        id: "q_ever_3",
        question: "_____ made you think I was angry with you about what happened?",
        translation: "Was hat dich nur denken lassen, ich wäre wütend auf dich wegen dem, was passierte?",
        options: ["What ever", "Whatever", "What", "How"],
        correct: "What ever",
        explanation: "'WHAT EVER' (verstärkt) = was nur: Diese Frage sucht Ursache für Missverständnis über emotionalen Zustand."
      },
      {
        id: "q_ever_4",
        question: "_____ have you been? I've been trying to call you all day long!",
        translation: "Wo um alles in der Welt bist du gewesen? Ich habe den ganzen Tag versucht, dich anzurufen!",
        options: ["Where ever", "Wherever", "Where", "How"],
        correct: "Where ever",
        explanation: "'WHERE EVER' (verstärkte Frage) = wo nur: Diese besorgte Frage nach langem Nicht-Erreichbar-Sein zeigt Ungeduld."
      },
      {
        id: "q_ever_5",
        question: "_____ did he find time to learn all those skills while working full-time?",
        translation: "Wann hat er nur Zeit gefunden, all diese Fähigkeiten zu lernen, während er Vollzeit arbeitete?",
        options: ["When ever", "Whenever", "When", "How"],
        correct: "When ever",
        explanation: "'WHEN EVER' (verstärkt) = wann nur: Diese bewundernde Frage staunt über Zeit-Management bei vollem Arbeits-Pensum."
      },
      {
        id: "q_ever_6",
        question: "_____ were you thinking when you made that terrible decision yesterday?",
        translation: "Was hast du dir nur gedacht, als du gestern jene schreckliche Entscheidung trafst?",
        options: ["What ever", "Whatever", "What", "How"],
        correct: "What ever",
        explanation: "'WHAT EVER' (ungläubig) = was nur: Diese kritische Frage hinterfragt den Denkprozess hinter schlechter Entscheidung."
      },
      {
        id: "q_ever_7",
        question: "_____ can afford to buy such an expensive luxury car these days?",
        translation: "Wer kann sich heutzutage nur so ein teures Luxus-Auto leisten?",
        options: ["Who ever", "Whoever", "Who", "What"],
        correct: "Who ever",
        explanation: "'WHO EVER' (rhetorisch) = wer nur: Diese staunende Frage über Luxus-Auto-Leistbarkeit drückt finanzielle Bewunderung aus."
      },
      {
        id: "q_ever_8",
        question: "_____ did they get the money to travel around the world for a year?",
        translation: "Woher haben sie nur das Geld bekommen, um ein Jahr lang um die Welt zu reisen?",
        options: ["Where ever", "Wherever", "Where", "How"],
        correct: "Where ever",
        explanation: "'WHERE EVER' (verstärkt) = woher nur: Diese neugierige Frage über Welt-Reise-Finanzierung zeigt Interesse an Finanzierungs-Quelle."
      },
      {
        id: "q_ever_9",
        question: "_____ possessed you to quit your good stable job without having another one?",
        translation: "Was hat dich nur dazu gebracht, deinen guten sicheren Job zu kündigen, ohne einen anderen zu haben?",
        options: ["What ever", "Whatever", "What", "How"],
        correct: "What ever",
        explanation: "'WHAT EVER POSSESSED' (idiomatisch) = was hat dich nur geritten: Diese ungläubige Frage hinterfragt riskante Job-Kündigungs-Entscheidung."
      },
      {
        id: "q_ever_10",
        question: "_____ did she manage to pass the exam without studying at all?",
        translation: "Wie hat sie es nur geschafft, die Prüfung zu bestehen, ohne überhaupt zu lernen?",
        options: ["How ever", "However", "How", "What"],
        correct: "How ever",
        explanation: "'HOW EVER' (Verwunderung) = wie nur: Diese erstaunte Frage über Prüfungs-Erfolg ohne Vorbereitung ist ungläubig."
      },
      {
        id: "q_ever_11",
        question: "_____ would want to live in such a remote isolated place far from everything?",
        translation: "Wer würde nur an so einem abgelegenen isolierten Ort weit weg von allem leben wollen?",
        options: ["Who ever", "Whoever", "Who", "What"],
        correct: "Who ever",
        explanation: "'WHO EVER' (rhetorisch/ungläubig): Diese Frage hinterfragt Attraktivität von extremer Abgeschiedenheit zum Wohnen."
      },
      {
        id: "q_ever_12",
        question: "_____ did you learn to cook so well? The food is absolutely delicious!",
        translation: "Wo hast du nur so gut kochen gelernt? Das Essen ist absolut köstlich!",
        options: ["Where ever", "Wherever", "Where", "How"],
        correct: "Where ever",
        explanation: "'WHERE EVER' (Bewunderung) = wo nur: Diese bewundernde Frage über Koch-Fähigkeiten ist Kompliment durch Staunen."
      },
      {
        id: "q_ever_13",
        question: "_____ didn't you tell me about this important information much earlier before?",
        translation: "Warum hast du mir nur nicht viel früher zuvor über diese wichtige Information erzählt?",
        options: ["Why ever", "Why", "How", "What"],
        correct: "Why ever",
        explanation: "'WHY EVER' (vorwurfsvoll) = warum nur: Diese Frage zeigt Frustration über verspätete wichtige Informations-Weitergabe."
      },
      {
        id: "q_ever_14",
        question: "_____ makes you think you can finish this huge project all alone by yourself?",
        translation: "Was lässt dich nur denken, du könntest dieses riesige Projekt ganz alleine schaffen?",
        translation: "Was lässt dich nur denken, du könntest dieses riesige Projekt ganz alleine schaffen?",
        options: ["What ever", "Whatever", "What", "How"],
        correct: "What ever",
        explanation: "'WHAT EVER' (skeptisch) = was nur: Diese zweifelnde Frage hinterfragt Realisierbarkeit von Solo-Projekt-Durchführung."
      },
      {
        id: "q_ever_15",
        question: "_____ do you find the energy to exercise every single morning so early?",
        translation: "Woher nimmst du nur die Energie, jeden einzelnen Morgen so früh zu trainieren?",
        options: ["Where ever", "Wherever", "Where", "How"],
        correct: "Where ever",
        explanation: "'WHERE EVER' (bewundernd) = woher nur: Diese Frage staunt über konstante Früh-Trainings-Disziplin und Energie-Level."
      }
    ]
  },

  emphatic_pronouns: {
    name: "Emphatic Pronouns (myself/yourself)",
    description: "Reflexiv-Pronomen - myself, yourself für Betonung nutzen",
    icon: User,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "emph_pron_1",
        question: "I fixed the computer _____ without any professional help from technicians.",
        translation: "Ich reparierte den Computer selbst ohne professionelle Hilfe von Technikern.",
        options: ["myself", "by myself", "alone", "both myself and by myself"],
        correct: "myself",
        explanation: "'MYSELF' nach Verb = SELBST (Betonung): Diese Selbst-Reparatur betont persönliche Fähigkeit ohne fremde Hilfe."
      },
      {
        id: "emph_pron_2",
        question: "Did you make this beautiful cake _____ or did you buy it from bakery?",
        translation: "Hast du diesen schönen Kuchen selbst gemacht oder hast du ihn von der Bäckerei gekauft?",
        options: ["yourself", "by yourself", "alone", "both yourself and by yourself"],
        correct: "yourself",
        explanation: "'YOURSELF' = selbst (Betonung): Diese Kuchen-Herkunft-Frage unterscheidet zwischen selbstgemacht und gekauft."
      },
      {
        id: "emph_pron_3",
        question: "She lives _____ in that big house after her husband passed away sadly.",
        translation: "Sie wohnt alleine in jenem großen Haus, nachdem ihr Mann traurigerweise verstarb.",
        options: ["by herself", "herself", "alone", "both by herself and alone"],
        correct: "by herself",
        explanation: "'BY HERSELF' = ALLEINE (ohne andere): Diese Solo-Wohn-Situation in großem Haus zeigt Einsamkeit nach Verlust."
      },
      {
        id: "emph_pron_4",
        question: "The children can dress _____ now - they don't need help anymore from parents.",
        translation: "Die Kinder können sich jetzt selbst anziehen - sie brauchen keine Hilfe mehr von Eltern.",
        options: ["themselves", "by themselves", "alone", "both themselves and by themselves"],
        correct: "themselves",
        explanation: "'THEMSELVES' = selbst (Fähigkeit): Diese Selbstständigkeits-Entwicklung ist wichtiger Kinder-Entwicklungs-Meilenstein."
      },
      {
        id: "emph_pron_5",
        question: "I saw the famous actor _____ at the restaurant yesterday evening! No bodyguards!",
        translation: "Ich sah den berühmten Schauspieler selbst gestern Abend im Restaurant! Keine Bodyguards!",
        options: ["himself", "by himself", "alone", "both himself and by himself"],
        correct: "himself",
        explanation: "'HIMSELF' nach Objekt = PERSÖNLICH (Überraschung): Diese Promi-Sichtung ohne Entourage ist ungewöhnlich und aufregend."
      },
      {
        id: "emph_pron_6",
        question: "We organized the whole event _____ without any external professional help at all.",
        translation: "Wir organisierten die ganze Veranstaltung selbst ohne jegliche externe professionelle Hilfe überhaupt.",
        options: ["ourselves", "by ourselves", "alone", "both ourselves and by ourselves"],
        correct: "ourselves",
        explanation: "'OURSELVES' = selbst (Stolz): Diese komplette Selbst-Organisation ohne Profi-Hilfe ist beachtliche Team-Leistung."
      },
      {
        id: "emph_pron_7",
        question: "Are you going to the party _____ or with your friends from work?",
        translation: "Gehst du alleine zur Party oder mit deinen Freunden von der Arbeit?",
        options: ["by yourself", "yourself", "alone", "both by yourself and alone"],
        correct: "by yourself",
        explanation: "'BY YOURSELF' = alleine (ohne Begleitung): Diese Party-Teilnahme-Frage unterscheidet zwischen Solo und Gruppen-Besuch."
      },
      {
        id: "emph_pron_8",
        question: "The door will close _____ automatically - you don't need to push it shut.",
        translation: "Die Tür wird sich selbst automatisch schließen - du musst sie nicht zudrücken.",
        options: ["itself", "by itself", "alone", "both itself and by itself"],
        correct: "itself",
        explanation: "'ITSELF' = von selbst (automatisch): Dieser automatische Tür-Schließ-Mechanismus funktioniert ohne manuelles Zutun."
      },
      {
        id: "emph_pron_9",
        question: "Make _____ at home while I prepare some coffee for us in the kitchen.",
        translation: "Mach es dir zu Hause gemütlich, während ich in der Küche Kaffee für uns vorbereite.",
        options: ["yourself", "by yourself", "alone", "you"],
        correct: "yourself",
        explanation: "Feste PHRASE: 'MAKE YOURSELF at home' = fühl dich wohl. Diese Gastgeber-Aufforderung ist höfliche Willkommens-Geste."
      },
      {
        id: "emph_pron_10",
        question: "They built this beautiful house _____ over three years of hard dedicated work.",
        translation: "Sie bauten dieses schöne Haus selbst über drei Jahre harter engagierter Arbeit.",
        options: ["themselves", "by themselves", "alone", "both themselves and by themselves"],
        correct: "themselves",
        explanation: "'THEMSELVES' = selbst (Leistungs-Betonung): Dieser dreijährige Selbst-Bau ist außergewöhnliche handwerkliche Eigen-Leistung."
      },
      {
        id: "emph_pron_11",
        question: "Did she really climb that dangerous high mountain _____? That's incredible courage!",
        translation: "Ist sie wirklich alleine auf jenen gefährlichen hohen Berg geklettert? Das ist unglaublicher Mut!",
        options: ["by herself", "herself", "alone", "both by herself and alone"],
        correct: "by herself",
        explanation: "'BY HERSELF' = SOLO (ohne Begleitung): Diese Solo-Berg-Besteigung ohne Partner ist mutige aber riskante Aktion."
      },
      {
        id: "emph_pron_12",
        question: "The project _____ isn't difficult, but we don't have enough time to complete it.",
        translation: "Das Projekt selbst ist nicht schwierig, aber wir haben nicht genug Zeit, es zu vollenden.",
        options: ["itself", "by itself", "alone", "in itself"],
        correct: "itself",
        explanation: "'ITSELF' nach Nomen (Betonung): Diese Projekt-Schwierigkeit-Unterscheidung trennt Aufgaben-Komplexität von Zeit-Problem."
      },
      {
        id: "emph_pron_13",
        question: "Help _____ to some more cake - there's plenty left over from the party!",
        translation: "Nimm dir selbst noch etwas Kuchen - es ist reichlich von der Party übrig!",
        options: ["yourself", "by yourself", "alone", "you"],
        correct: "yourself",
        explanation: "Feste PHRASE: 'HELP YOURSELF' = bediene dich. Diese großzügige Kuchen-Angebot-Aufforderung ist freundliche Gastgeber-Geste."
      },
      {
        id: "emph_pron_14",
        question: "The children enjoyed _____ at the fun amusement park all day long yesterday.",
        translation: "Die Kinder amüsierten sich gestern den ganzen langen Tag im lustigen Vergnügungspark.",
        options: ["themselves", "by themselves", "alone", "them"],
        correct: "themselves",
        explanation: "Feste PHRASE: 'ENJOY THEMSELVES' = sich amüsieren. Dieser ganztägige Park-Spaß zeigt erfolgreichen Familien-Ausflug."
      },
      {
        id: "emph_pron_15",
        question: "I'm proud of _____ for finally achieving this difficult long-term goal successfully!",
        translation: "Ich bin stolz auf mich selbst, dieses schwere langfristige Ziel endlich erfolgreich erreicht zu haben!",
        options: ["myself", "by myself", "me", "I"],
        correct: "myself",
        explanation: "'PROUD OF MYSELF' = stolz auf sich selbst: Diese Selbst-Anerkennung nach Ziel-Erreichung ist gesunde Erfolgs-Feier."
      }
    ]
  },

  get_used_to: {
    name: "Get Used To vs Be Used To",
    description: "Gewöhnung - sich gewöhnen an vs gewöhnt sein an",
    icon: RotateCcw,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "get_used_1",
        question: "I'm slowly _____ the cold weather here after moving from the warm south.",
        translation: "Ich gewöhne mich langsam an das kalte Wetter hier, nachdem ich aus dem warmen Süden umgezogen bin.",
        options: ["getting used to", "used to", "being used to", "get used to"],
        correct: "getting used to",
        explanation: "'GETTING USED TO' = PROZESS der Gewöhnung (jetzt): Diese allmähliche Klima-Anpassung ist natürlicher Akklimatisierungs-Prozess."
      },
      {
        id: "get_used_2",
        question: "She _____ working night shifts now - it was very difficult at first initially.",
        translation: "Sie ist jetzt daran gewöhnt, Nachtschichten zu arbeiten - anfangs war es sehr schwierig.",
        options: ["is used to", "gets used to", "used to", "was used to"],
        correct: "is used to",
        explanation: "'BE USED TO' = GEWÖHNT sein (Zustand jetzt): Diese abgeschlossene Gewöhnung an Nacht-Arbeit zeigt erfolgreiche Anpassung."
      },
      {
        id: "get_used_3",
        question: "It takes time to _____ living in a foreign country with different culture.",
        translation: "Es braucht Zeit, sich ans Leben in einem fremden Land mit anderer Kultur zu gewöhnen.",
        options: ["get used to", "be used to", "used to", "getting used to"],
        correct: "get used to",
        explanation: "'TO GET USED TO' nach unpersönlichem 'it takes time': Dieser Gewöhnungs-Prozess an fremde Kultur braucht Geduld."
      },
      {
        id: "get_used_4",
        question: "I _____ drink coffee every morning, but now I prefer tea instead.",
        translation: "Ich trank früher jeden Morgen Kaffee, aber jetzt bevorzuge ich stattdessen Tee.",
        options: ["used to", "am used to", "get used to", "was used to"],
        correct: "used to",
        explanation: "'USED TO' (OHNE be/get) = FRÜHERE Gewohnheit: Diese Getränke-Präferenz-Änderung von Kaffee zu Tee ist Geschmacks-Wandel."
      },
      {
        id: "get_used_5",
        question: "Have you _____ driving on the left side of the road in this country?",
        translation: "Hast du dich schon daran gewöhnt, in diesem Land auf der linken Straßenseite zu fahren?",
        options: ["got used to", "been used to", "used to", "gotten used to"],
        correct: "got used to",
        explanation: "Present Perfect: 'HAVE GOT USED TO' = Gewöhnung abgeschlossen: Diese Links-Fahr-Anpassung ist wichtige Verkehrs-Sicherheit."
      },
      {
        id: "get_used_6",
        question: "When I was young, I _____ play football every weekend with my friends.",
        translation: "Als ich jung war, spielte ich jedes Wochenende mit meinen Freunden Fußball.",
        options: ["used to", "was used to", "got used to", "would"],
        correct: "used to",
        explanation: "'USED TO' = FRÜHERE regelmäßige Aktivität: Diese Kindheits-Fußball-Routine ist schöne Jugend-Erinnerung."
      },
      {
        id: "get_used_7",
        question: "She can't _____ the noise from the construction site next to her apartment.",
        translation: "Sie kann sich nicht an den Lärm von der Baustelle neben ihrer Wohnung gewöhnen.",
        options: ["get used to", "be used to", "used to", "getting used to"],
        correct: "get used to",
        explanation: "'CAN'T GET USED TO' = Unfähigkeit zur Gewöhnung: Dieser anhaltende Bau-Lärm bleibt störend trotz Zeit."
      },
      {
        id: "get_used_8",
        question: "Are you _____ the spicy food here yet, or is it still too hot?",
        translation: "Bist du schon an das scharfe Essen hier gewöhnt, oder ist es noch zu scharf?",
        options: ["used to", "getting used to", "both used to and getting used to", "use to"],
        correct: "both used to and getting used to",
        explanation: "'BE USED TO' (schon gewöhnt) oder 'GETTING USED TO' (im Prozess): Beide möglich für Schärfe-Toleranz-Frage."
      },
      {
        id: "get_used_9",
        question: "He'll never _____ waking up so early every morning for work commute.",
        translation: "Er wird sich nie daran gewöhnen, jeden Morgen für den Arbeitsweg so früh aufzuwachen.",
        options: ["get used to", "be used to", "used to", "getting used to"],
        correct: "get used to",
        explanation: "'WILL NEVER GET USED TO' = niemals gewöhnen: Diese dauerhafte Früh-Aufsteh-Abneigung bleibt trotz Routine."
      },
      {
        id: "get_used_10",
        question: "I _____ have long hair when I was younger, but I cut it short years ago.",
        translation: "Ich hatte früher lange Haare, als ich jünger war, aber ich schnitt sie vor Jahren kurz.",
        options: ["used to", "was used to", "got used to", "am used to"],
        correct: "used to",
        explanation: "'USED TO' = FRÜHER (Zustand): Diese Frisuren-Änderung von lang zu kurz ist äußerliche Veränderung über Zeit."
      },
      {
        id: "get_used_11",
        question: "After a month, I finally _____ the different time zone in this new country.",
        translation: "Nach einem Monat gewöhnte ich mich endlich an die andere Zeitzone in diesem neuen Land.",
        options: ["got used to", "was used to", "used to", "am used to"],
        correct: "got used to",
        explanation: "Vergangenheit: 'GOT USED TO' = Gewöhnung abgeschlossen: Diese Jetlag-Überwindung nach Monat ist normale Anpassungs-Zeit."
      },
      {
        id: "get_used_12",
        question: "She _____ living alone now and actually enjoys the peace and quiet at home.",
        translation: "Sie ist jetzt ans Alleine-Wohnen gewöhnt und genießt tatsächlich die Ruhe zu Hause.",
        options: ["is used to", "gets used to", "used to", "was used to"],
        correct: "is used to",
        explanation: "'IS USED TO' = GEWÖHNT (aktueller Zustand): Diese erfolgreiche Alleine-Wohn-Anpassung führt zu positivem Genuss."
      },
      {
        id: "get_used_13",
        question: "It took me months to _____ driving on busy highways with heavy traffic daily.",
        translation: "Es dauerte Monate, bis ich mich daran gewöhnte, täglich auf geschäftigen Autobahnen mit starkem Verkehr zu fahren.",
        options: ["get used to", "be used to", "used to", "getting used to"],
        correct: "get used to",
        explanation: "'TO GET USED TO' nach 'took time': Dieser monatelange Autobahn-Gewöhnungs-Prozess zeigt Fahr-Komfort-Entwicklung."
      },
      {
        id: "get_used_14",
        question: "They _____ eat out every weekend, but now they cook at home to save money.",
        translation: "Sie aßen früher jedes Wochenende auswärts, aber jetzt kochen sie zu Hause, um Geld zu sparen.",
        options: ["used to", "are used to", "get used to", "were used to"],
        correct: "used to",
        explanation: "'USED TO' = FRÜHERE Gewohnheit (beendet): Diese Lebens-Stil-Änderung von Restaurant zu Heim-Kochen ist Budget-Sparmaßnahme."
      },
      {
        id: "get_used_15",
        question: "I'm still _____ my new job responsibilities - everything feels overwhelming yet.",
        translation: "Ich gewöhne mich noch an meine neuen Job-Verantwortlichkeiten - alles fühlt sich noch überwältigend an.",
        options: ["getting used to", "used to", "being used to", "got used to"],
        correct: "getting used to",
        explanation: "'STILL GETTING USED TO' = noch im Gewöhnungs-Prozess: Diese andauernde Job-Anpassung braucht mehr Zeit für Komfort."
      }
    ]
  }
};

export default part25Categories;
/**
 * GERMAN → ENGLISH GRAMMAR - PART 14
 * 4 categories, 15 questions each
 */

import { Award, Compass, Sparkle, Puzzle } from "lucide-react";

export const part14Categories = {
  like_as: {
    name: "Like vs As",
    description: "Wie - like und as für Vergleiche unterscheiden",
    icon: Award,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "like_as_1",
        question: "She works _____ a teacher at the local primary school nearby home.",
        translation: "Sie arbeitet als Lehrerin an der örtlichen Grundschule nahe Zuhause.",
        options: ["as", "like", "such as", "similar to"],
        correct: "as",
        explanation: "Für BERUF/FUNKTION: 'AS a teacher' (als Lehrerin). Diese Grundschul-Lehrertätigkeit nahe Heim ist praktische Arbeitsplatz-Wahl."
      },
      {
        id: "like_as_2",
        question: "He looks _____ his father - they have the same facial features exactly.",
        translation: "Er sieht aus wie sein Vater - sie haben genau dieselben Gesichtszüge.",
        options: ["like", "as", "such as", "similar to"],
        correct: "like",
        explanation: "Für ÄHNLICHKEIT: 'LIKE his father' (wie sein Vater). Diese Vater-Sohn-Ähnlichkeit ist starke genetische Familienverbindung."
      },
      {
        id: "like_as_3",
        question: "_____ I said before yesterday, I can't come to the party unfortunately.",
        translation: "Wie ich gestern zuvor sagte, kann ich leider nicht zur Party kommen.",
        options: ["As", "Like", "Such as", "Similar to"],
        correct: "As",
        explanation: "'AS' + Subjekt + Verb: 'As I said' (wie ich sagte). Diese Party-Absage-Wiederholung bekräftigt frühere Mitteilung."
      },
      {
        id: "like_as_4",
        question: "She sings _____ a professional even though she's just an amateur singer.",
        translation: "Sie singt wie eine Professionelle, obwohl sie nur eine Amateur-Sängerin ist.",
        options: ["like", "as", "such as", "similar to"],
        correct: "like",
        explanation: "Für VERGLEICH: 'LIKE a professional' (wie eine Profi). Dieses professionelle Niveau trotz Amateur-Status ist außergewöhnliches Talent."
      },
      {
        id: "like_as_5",
        question: "He used the knife _____ a screwdriver to open the tight bottle cap.",
        translation: "Er nutzte das Messer als Schraubenzieher, um den festen Flaschenverschluss zu öffnen.",
        options: ["as", "like", "such as", "for"],
        correct: "as",
        explanation: "Für VERWENDUNG als: 'AS a screwdriver' (als Schraubenzieher). Diese kreative Werkzeug-Improvisation löst Verschluss-Problem."
      },
      {
        id: "like_as_6",
        question: "Do _____ I do, not _____ I say - actions speak louder than words.",
        translation: "Mach, wie ich mache, nicht wie ich sage - Taten sprechen lauter als Worte.",
        options: ["as / as", "like / like", "as / like", "like / as"],
        correct: "as / as",
        explanation: "'AS' + Subjekt + Verb: 'Do as I do'. Dieses Sprichwort über Vorbildfunktion betont Wichtigkeit von Taten über Worten."
      },
      {
        id: "like_as_7",
        question: "Cities _____ London and Paris are popular tourist destinations for travelers worldwide.",
        translation: "Städte wie London und Paris sind für Reisende weltweit beliebte touristische Ziele.",
        options: ["like", "as", "such as", "both like and such as"],
        correct: "both like and such as",
        explanation: "Für BEISPIELE: 'like' oder 'such as' beide möglich. Diese Metropolen sind klassische europäische Top-Reiseziele."
      },
      {
        id: "like_as_8",
        question: "_____ you know already, the meeting has been postponed until next week.",
        translation: "Wie du bereits weißt, wurde das Treffen bis nächste Woche verschoben.",
        options: ["As", "Like", "Such as", "Similar to"],
        correct: "As",
        explanation: "'AS' + Subjekt + Verb: 'As you know' (wie du weißt). Diese Meeting-Verschiebungs-Erinnerung bekräftigt bekannte Information."
      },
      {
        id: "like_as_9",
        question: "It looks _____ it's going to rain soon - the sky is very dark now.",
        translation: "Es sieht so aus, als würde es bald regnen - der Himmel ist jetzt sehr dunkel.",
        options: ["like", "as", "as if", "both like and as if"],
        correct: "both like and as if",
        explanation: "'LIKE' oder 'AS IF' + Subjekt + Verb: beide möglich. Diese dunkle Himmel-Beobachtung ist klares Regen-Vorzeichen."
      },
      {
        id: "like_as_10",
        question: "He's working _____ a volunteer at the local charity organization helping people.",
        translation: "Er arbeitet als Freiwilliger bei der örtlichen Wohltätigkeitsorganisation und hilft Leuten.",
        options: ["as", "like", "such as", "for"],
        correct: "as",
        explanation: "Für ROLLE/POSITION: 'AS a volunteer' (als Freiwilliger). Diese ehrenamtliche Arbeit ist edles soziales Engagement."
      },
      {
        id: "like_as_11",
        question: "She treated me _____ a child, even though I'm an adult already now!",
        translation: "Sie behandelte mich wie ein Kind, obwohl ich jetzt schon erwachsen bin!",
        options: ["like", "as", "such as", "similar to"],
        correct: "like",
        explanation: "Für VERGLEICH: 'LIKE a child' (wie ein Kind). Diese bevormundende Behandlung trotz Erwachsensein ist respektlos."
      },
      {
        id: "like_as_12",
        question: "_____ usual, he arrived late to the important meeting this morning again.",
        translation: "Wie üblich kam er heute Morgen wieder zu spät zum wichtigen Treffen.",
        options: ["As", "Like", "Such as", "Similar to"],
        correct: "As",
        explanation: "Feste PHRASE: 'AS usual' (wie üblich). Diese chronische Meeting-Verspätung ist unprofessionelle wiederholte Gewohnheit."
      },
      {
        id: "like_as_13",
        question: "Sports _____ football and basketball are very popular worldwide among youth.",
        translation: "Sportarten wie Fußball und Basketball sind weltweit unter Jugendlichen sehr beliebt.",
        options: ["like", "as", "such as", "both like and such as"],
        correct: "both like and such as",
        explanation: "Für BEISPIELE: beide möglich. Diese Mannschaftssportarten sind global beliebte Jugend-Aktivitäten."
      },
      {
        id: "like_as_14",
        question: "It tastes _____ chicken but it's actually made from plant-based ingredients completely.",
        translation: "Es schmeckt wie Hühnchen, aber es ist tatsächlich komplett aus pflanzlichen Zutaten gemacht.",
        options: ["like", "as", "such as", "similar to"],
        correct: "like",
        explanation: "Für GESCHMACK-Vergleich: 'tastes LIKE'. Diese pflanzliche Hühnchen-Alternative ist moderne vegetarische Innovation."
      },
      {
        id: "like_as_15",
        question: "_____ planned earlier this month, we'll meet at the café tomorrow at noon.",
        translation: "Wie früher diesen Monat geplant, treffen wir uns morgen mittags im Café.",
        options: ["As", "Like", "Such as", "Similar to"],
        correct: "As",
        explanation: "'AS' + Partizip: 'As planned' (wie geplant). Diese Café-Treffen-Bestätigung morgen folgt früherer Planung."
      }
    ]
  },

  during_while_for: {
    name: "During, While, For",
    description: "Während/Für - during, while, for zeitlich korrekt verwenden",
    icon: Compass,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "dur_while_1",
        question: "I fell asleep _____ the boring movie at the cinema last night.",
        translation: "Ich schlief während des langweiligen Films im Kino letzte Nacht ein.",
        options: ["during", "while", "for", "in"],
        correct: "during",
        explanation: "'DURING' + Nomen (Ereignis): 'during the movie'. Dieses Einschlafen bei langweiligem Film ist häufige Kino-Reaktion."
      },
      {
        id: "dur_while_2",
        question: "_____ I was cooking dinner, the phone rang three times loudly in kitchen.",
        translation: "Während ich Abendessen kochte, klingelte das Telefon dreimal laut in Küche.",
        options: ["While", "During", "For", "In"],
        correct: "While",
        explanation: "'WHILE' + Subjekt + Verb: 'While I was cooking'. Dieses dreimalige Telefon-Klingeln beim Kochen ist störende Unterbrechung."
      },
      {
        id: "dur_while_3",
        question: "We lived in Paris _____ three wonderful years before moving back home.",
        translation: "Wir lebten drei wunderbare Jahre in Paris, bevor wir nach Hause zurückzogen.",
        options: ["for", "during", "while", "in"],
        correct: "for",
        explanation: "'FOR' + ZEITDAUER: 'for three years' (drei Jahre lang). Diese Pariser Jahre sind schöne Lebens-Erfahrung."
      },
      {
        id: "dur_while_4",
        question: "Please be quiet _____ the teacher is explaining the difficult lesson to class.",
        translation: "Bitte sei ruhig, während der Lehrer der Klasse die schwere Lektion erklärt.",
        options: ["while", "during", "for", "in"],
        correct: "while",
        explanation: "'WHILE' + Verb: 'while teacher is explaining'. Diese Ruhe-Bitte während Erklärung ist Standard-Unterrichts-Regel."
      },
      {
        id: "dur_while_5",
        question: "I stayed with my grandparents _____ the summer holidays every year happily.",
        translation: "Ich blieb jeden Sommer glücklich während der Sommerferien bei meinen Großeltern.",
        options: ["during", "while", "for", "in"],
        correct: "during",
        explanation: "'DURING' + Zeitraum-Nomen: 'during the holidays'. Diese jährlichen Großeltern-Besuche sind schöne Sommer-Tradition."
      },
      {
        id: "dur_while_6",
        question: "She learned to play guitar _____ six intensive months of daily practice.",
        translation: "Sie lernte in sechs intensiven Monaten täglicher Übung Gitarre spielen.",
        options: ["for", "during", "while", "in"],
        correct: "for",
        explanation: "'FOR' + Dauer: 'for six months'. Dieses Gitarre-Lernen in sechs Monaten zeigt Hingabe und regelmäßige Übung."
      },
      {
        id: "dur_while_7",
        question: "_____ my stay in London, I visited many famous historical tourist attractions.",
        translation: "Während meines Aufenthalts in London besuchte ich viele berühmte historische Touristenattraktionen.",
        options: ["During", "While", "For", "In"],
        correct: "During",
        explanation: "'DURING' + Nomen: 'during my stay'. Diese London-Sightseeing-Aktivität während Besuch ist typisches Touristen-Verhalten."
      },
      {
        id: "dur_while_8",
        question: "_____ you're here, could you help me move this heavy furniture around?",
        translation: "Während du hier bist, könntest du mir helfen, diese schweren Möbel herumzubewegen?",
        options: ["While", "During", "For", "In"],
        correct: "While",
        explanation: "'WHILE' + Subjekt + Verb: 'While you're here'. Diese Möbel-Hilfe-Bitte nutzt Anwesenheits-Gelegenheit praktisch."
      },
      {
        id: "dur_while_9",
        question: "I haven't seen him _____ ages - probably not for several years now!",
        translation: "Ich habe ihn seit Ewigkeiten nicht gesehen - wahrscheinlich jetzt nicht seit mehreren Jahren!",
        options: ["for", "during", "while", "in"],
        correct: "for",
        explanation: "'FOR' + Zeitdauer: 'for ages' (seit Ewigkeiten). Diese langjährige Nicht-Begegnung ist bedauerlicher Kontaktverlust."
      },
      {
        id: "dur_while_10",
        question: "_____ the concert performance, everyone must turn off their mobile phones completely.",
        translation: "Während der Konzert-Aufführung müssen alle ihre Mobiltelefone komplett ausschalten.",
        options: ["During", "While", "For", "In"],
        correct: "During",
        explanation: "'DURING' + Veranstaltung: 'during the concert'. Diese Handy-Aus-Regel bei Konzert ist Respekt für Künstler und Publikum."
      },
      {
        id: "dur_while_11",
        question: "They chatted _____ they were waiting for the train at the busy platform.",
        translation: "Sie plauderten, während sie auf dem belebten Bahnsteig auf den Zug warteten.",
        options: ["while", "during", "for", "in"],
        correct: "while",
        explanation: "'WHILE' + Subjekt + Verb: 'while they were waiting'. Dieses Plaudern während Zugwarten verkürzt langweilige Wartezeit."
      },
      {
        id: "dur_while_12",
        question: "I'll be on vacation _____ the next two weeks starting from tomorrow morning.",
        translation: "Ich bin ab morgen früh die nächsten zwei Wochen im Urlaub.",
        options: ["for", "during", "while", "in"],
        correct: "for",
        explanation: "'FOR' + Dauer: 'for two weeks'. Dieser zweiwöchige Urlaub ab morgen ist verdiente Erholungszeit von Arbeit."
      },
      {
        id: "dur_while_13",
        question: "_____ the winter season, we usually go skiing in the mountains every weekend.",
        translation: "Während der Wintersaison gehen wir normalerweise jedes Wochenende in den Bergen Ski fahren.",
        options: ["During", "While", "For", "In"],
        correct: "During",
        explanation: "'DURING' + Jahreszeit/Periode: 'during winter'. Diese Wochenend-Ski-Routine im Winter ist aktive Wintersport-Tradition."
      },
      {
        id: "dur_while_14",
        question: "_____ I appreciate your help, I think I can manage this task alone.",
        translation: "Während ich deine Hilfe schätze, denke ich, ich kann diese Aufgabe allein bewältigen.",
        options: ["While", "During", "For", "Although"],
        correct: "While",
        explanation: "'WHILE' = obwohl (Kontrast): 'While I appreciate'. Diese höfliche Hilfe-Ablehnung drückt Selbstständigkeits-Wunsch aus."
      },
      {
        id: "dur_while_15",
        question: "She studied medicine _____ five challenging years at university successfully completing.",
        translation: "Sie studierte fünf herausfordernde Jahre an Universität erfolgreich Medizin und schloss ab.",
        options: ["for", "during", "while", "in"],
        correct: "for",
        explanation: "'FOR' + Dauer: 'for five years'. Dieses fünfjährige Medizin-Studium ist intensive lange Ausbildungszeit."
      }
    ]
  },

  had_better_should: {
    name: "Had Better vs Should",
    description: "Besser sollten - had better und should für Ratschläge",
    icon: Sparkle,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "better_should_1",
        question: "You _____ see a doctor about that bad cough - it's been weeks now!",
        translation: "Du solltest wegen jenes schlimmen Hustens einen Arzt aufsuchen - es sind jetzt Wochen!",
        options: ["should", "had better", "both correct", "must"],
        correct: "both correct",
        explanation: "'SHOULD' = allgemeiner Rat, 'HAD BETTER' = dringender. Dieser Arztbesuch-Rat nach wochenlangem Husten ist gesundheitlich wichtig."
      },
      {
        id: "better_should_2",
        question: "We _____ leave now or we'll miss the train - it departs in ten minutes!",
        translation: "Wir sollten jetzt gehen, oder wir verpassen den Zug - er fährt in zehn Minuten ab!",
        options: ["had better", "should", "must", "have to"],
        correct: "had better",
        explanation: "'HAD BETTER' für DRINGLICHKEIT mit Konsequenz: 'had better leave'. Diese Zug-Abfahrt in zehn Minuten erfordert sofortigen Aufbruch."
      },
      {
        id: "better_should_3",
        question: "You _____ study more if you want to pass the difficult exam successfully.",
        translation: "Du solltest mehr lernen, wenn du die schwere Prüfung erfolgreich bestehen willst.",
        options: ["should", "had better", "both correct", "must"],
        correct: "both correct",
        explanation: "Beide möglich: 'should' sanfter. Dieser Lern-Rat ist hilfreicher Hinweis für Prüfungs-Erfolg durch Vorbereitung."
      },
      {
        id: "better_should_4",
        question: "I _____ not eat too much chocolate - I'm trying to lose weight currently.",
        translation: "Ich sollte nicht zu viel Schokolade essen - ich versuche momentan abzunehmen.",
        options: ["should", "had better", "both correct", "must"],
        correct: "both correct",
        explanation: "Negativ: beide möglich. Diese Schokoladen-Selbstbeschränkung ist Diät-Disziplin für Gewichts-Ziel."
      },
      {
        id: "better_should_5",
        question: "You _____ apologize to her soon - she's really upset about what happened.",
        translation: "Du solltest dich bald bei ihr entschuldigen - sie ist wirklich aufgeregt über das Geschehene.",
        options: ["had better", "should", "both correct", "must"],
        correct: "had better",
        explanation: "'HAD BETTER' für dringende WARNUNG: Diese Entschuldigungs-Dringlichkeit zeigt ernste Situation durch Aufregung."
      },
      {
        id: "better_should_6",
        question: "Students _____ arrive on time for the exam - late arrivals won't be allowed!",
        translation: "Studenten sollten pünktlich zur Prüfung kommen - Zuspätkommer werden nicht zugelassen!",
        options: ["had better", "should", "must", "have to"],
        correct: "had better",
        explanation: "'HAD BETTER' mit ernster WARNUNG: Diese Pünktlichkeits-Regel mit Konsequenz ist strikte Prüfungs-Vorschrift."
      },
      {
        id: "better_should_7",
        question: "People _____ be more careful when crossing busy streets in the city.",
        translation: "Leute sollten vorsichtiger sein beim Überqueren belebter Straßen in der Stadt.",
        options: ["should", "had better", "must", "have to"],
        correct: "should",
        explanation: "'SHOULD' für ALLGEMEINEN Rat: Dieser Vorsichts-Rat beim Straßen-Überqueren ist wichtige Sicherheits-Empfehlung."
      },
      {
        id: "better_should_8",
        question: "You _____ not be late again tomorrow - the boss is getting annoyed!",
        translation: "Du solltest morgen nicht wieder zu spät sein - der Chef wird verärgert!",
        options: ["had better", "should", "must", "have to"],
        correct: "had better",
        explanation: "'HAD BETTER' mit DROHUNG/Konsequenz: Diese Pünktlichkeits-Warnung zeigt Chef-Ärger und mögliche Konsequenzen."
      },
      {
        id: "better_should_9",
        question: "I think you _____ talk to him about the problem honestly and openly.",
        translation: "Ich denke, du solltest ehrlich und offen mit ihm über das Problem sprechen.",
        options: ["should", "had better", "must", "have to"],
        correct: "should",
        explanation: "'SHOULD' für MEINUNG/Rat: 'I think you should'. Dieser Gesprächs-Rat ist Konfliktlösungs-Empfehlung durch Kommunikation."
      },
      {
        id: "better_should_10",
        question: "We _____ book the hotel rooms soon - they're filling up fast for peak season!",
        translation: "Wir sollten die Hotelzimmer bald buchen - sie füllen sich schnell für Hochsaison!",
        options: ["had better", "should", "must", "have to"],
        correct: "had better",
        explanation: "'HAD BETTER' für DRINGLICHKEIT: Diese Buchungs-Eile ist nötig wegen schnell füllender Hochsaison-Hotels."
      },
      {
        id: "better_should_11",
        question: "You _____ always wear sunscreen on sunny days to protect your skin well.",
        translation: "Du solltest an sonnigen Tagen immer Sonnencreme tragen, um deine Haut gut zu schützen.",
        options: ["should", "had better", "must", "have to"],
        correct: "should",
        explanation: "'SHOULD' für GESUNDHEITS-Rat: Dieser Sonnenschutz-Rat ist wichtige Haut-Krebs-Prävention bei Sonne."
      },
      {
        id: "better_should_12",
        question: "I _____ finish this work tonight or I'll be in trouble with boss tomorrow!",
        translation: "Ich sollte diese Arbeit heute Abend beenden, oder ich bekomme morgen Ärger mit Chef!",
        options: ["had better", "should", "must", "have to"],
        correct: "had better",
        explanation: "'HAD BETTER' mit klarer KONSEQUENZ: Diese Arbeit-Dringlichkeit heute zeigt Chef-Erwartung und Ärger-Gefahr."
      },
      {
        id: "better_should_13",
        question: "Everyone _____ drink plenty of water daily for good health and hydration.",
        translation: "Jeder sollte täglich reichlich Wasser für gute Gesundheit und Hydration trinken.",
        options: ["should", "had better", "must", "has to"],
        correct: "should",
        explanation: "'SHOULD' für ALLGEMEINE Empfehlung: Dieser tägliche Wasser-Trink-Rat ist fundamentale Gesundheits-Weisheit."
      },
      {
        id: "better_should_14",
        question: "You _____ lock the door when you leave - there have been burglaries recently!",
        translation: "Du solltest die Tür abschließen, wenn du gehst - es gab kürzlich Einbrüche!",
        options: ["had better", "should", "must", "have to"],
        correct: "had better",
        explanation: "'HAD BETTER' mit WARNUNG: Diese Tür-Abschließ-Dringlichkeit ist Sicherheitsmaßnahme wegen kürzlicher Einbrüche in Gegend."
      },
      {
        id: "better_should_15",
        question: "Children _____ respect their parents and teachers at all times always politely.",
        translation: "Kinder sollten ihre Eltern und Lehrer immer zu jeder Zeit höflich respektieren.",
        options: ["should", "had better", "must", "have to"],
        correct: "should",
        explanation: "'SHOULD' für MORALISCHEN Rat: Dieser Respekt-Rat ist grundlegende Erziehungs-Wert für höfliches Verhalten."
      }
    ]
  },

  hardly_hard: {
    name: "Hardly vs Hard",
    description: "Kaum/Hart - hardly und hard bedeutungsunterschied verstehen",
    icon: Puzzle,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "hardly_1",
        question: "I _____ know him - we've only met once briefly at a party.",
        translation: "Ich kenne ihn kaum - wir haben uns nur einmal kurz bei einer Party getroffen.",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' = KAUM (fast nicht): 'hardly know'. Diese minimale Bekanntschaft nach einmaligem Treffen ist oberflächliche Verbindung."
      },
      {
        id: "hardly_2",
        question: "She worked _____ all day to finish the important project before deadline.",
        translation: "Sie arbeitete den ganzen Tag hart, um das wichtige Projekt vor Deadline zu beenden.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = HART/intensiv (Adverb): 'worked hard'. Diese ganztägige intensive Arbeit zeigt Engagement für Projekt-Fertigstellung."
      },
      {
        id: "hardly_3",
        question: "There's _____ any milk left in the fridge for morning coffee tomorrow.",
        translation: "Es ist kaum Milch im Kühlschrank für Morgenkaffee morgen übrig.",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' + any = KAUM: 'hardly any milk'. Diese Milch-Knappheit erfordert Einkauf vor morgen."
      },
      {
        id: "hardly_4",
        question: "He tried _____ to solve the difficult problem but couldn't figure it out.",
        translation: "Er versuchte hart, das schwere Problem zu lösen, konnte es aber nicht herausfinden.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = intensiv versuchen: 'tried hard'. Dieser intensive Lösungsversuch trotz Misserfolg zeigt Anstrengung."
      },
      {
        id: "hardly_5",
        question: "I can _____ hear you - the music is too loud in this room!",
        translation: "Ich kann dich kaum hören - die Musik ist zu laut in diesem Raum!",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' + Verb = KAUM können: 'can hardly hear'. Diese Musik-Lautstärke verhindert klares Hören fast komplett."
      },
      {
        id: "hardly_6",
        question: "The ground was frozen _____ - it was impossible to dig any holes.",
        translation: "Der Boden war hart gefroren - es war unmöglich, irgendwelche Löcher zu graben.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = hart (Adjektiv nach Verb): 'frozen hard'. Dieser hart gefrorene Winter-Boden macht Graben unmöglich."
      },
      {
        id: "hardly_7",
        question: "We _____ ever go to the cinema anymore - we prefer streaming at home.",
        translation: "Wir gehen fast nie mehr ins Kino - wir bevorzugen Streaming zu Hause.",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY EVER' = FAST NIE: 'hardly ever go'. Diese Kino-Meidung zugunsten Streaming ist moderne Unterhaltungs-Veränderung."
      },
      {
        id: "hardly_8",
        question: "She pushed the heavy door _____ but it wouldn't open at all.",
        translation: "Sie drückte die schwere Tür hart, aber sie öffnete sich überhaupt nicht.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = mit Kraft: 'pushed hard'. Diese kraftvolle Tür-Drück-Anstrengung war trotz Kraft erfolglos."
      },
      {
        id: "hardly_9",
        question: "There was _____ anyone at the party - maybe only five people came total.",
        translation: "Es war kaum jemand bei der Party - vielleicht kamen insgesamt nur fünf Leute.",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' + anyone = KAUM jemand: Diese sehr geringe Party-Teilnehmerzahl von fünf ist enttäuschend."
      },
      {
        id: "hardly_10",
        question: "I've been working _____ all week on this difficult challenging project nonstop.",
        translation: "Ich habe diese ganze Woche nonstop hart an diesem schweren herausfordernden Projekt gearbeitet.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = intensiv: 'working hard'. Diese wöchentliche Nonstop-Arbeit am Projekt zeigt totales Engagement."
      },
      {
        id: "hardly_11",
        question: "She _____ slept last night because of the loud noise from neighbors.",
        translation: "Sie schlief letzte Nacht kaum wegen des lauten Lärms von Nachbarn.",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' + Verb = KAUM: 'hardly slept'. Dieser Nachbarn-Lärm verhinderte erholsamen Schlaf fast vollständig."
      },
      {
        id: "hardly_12",
        question: "The ice cream was frozen _____ solid - I couldn't scoop it out easily.",
        translation: "Das Eiscreme war hart fest gefroren - ich konnte es nicht leicht herausschaufeln.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = sehr fest: 'frozen hard solid'. Diese Eis-Härte macht Portionieren schwierig und braucht Auftauzeit."
      },
      {
        id: "hardly_13",
        question: "I _____ recognized him after all these years - he's changed so much!",
        translation: "Ich erkannte ihn nach all diesen Jahren kaum - er hat sich so sehr verändert!",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' = KAUM erkennen: 'hardly recognized'. Diese starke Veränderung über Jahre macht Person fast unkenntlich."
      },
      {
        id: "hardly_14",
        question: "He hit the ball _____ and it flew over the fence into neighbor's yard.",
        translation: "Er schlug den Ball hart und er flog über den Zaun in Nachbars Garten.",
        options: ["hard", "hardly", "hardly ever", "hard ever"],
        correct: "hard",
        explanation: "'HARD' = mit Kraft schlagen: 'hit hard'. Dieser kraftvolle Ball-Schlag über Zaun zeigt sportliche Stärke."
      },
      {
        id: "hardly_15",
        question: "There's _____ any difference between the two products - they're almost identical!",
        translation: "Es gibt kaum einen Unterschied zwischen den zwei Produkten - sie sind fast identisch!",
        options: ["hardly", "hard", "barely", "scarcely"],
        correct: "hardly",
        explanation: "'HARDLY' + any = KAUM: 'hardly any difference'. Diese fast-Identität macht Produkt-Auswahl zur reinen Präferenz."
      }
    ]
  }
};

export default part14Categories;
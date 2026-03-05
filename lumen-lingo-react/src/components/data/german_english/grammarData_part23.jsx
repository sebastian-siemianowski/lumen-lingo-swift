/**
 * GERMAN → ENGLISH GRAMMAR - PART 23
 * 3 categories, 15 questions each
 */

import { Zap, Volume2, Box } from "lucide-react";

export const part23Categories = {
  emphatic_structures: {
    name: "Emphatic Structures (It is/was...who/that)",
    description: "Verstärkungs-Strukturen - besondere Betonung durch Spaltsätze",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "emph_str_1",
        question: "_____ John _____ broke the window, not Peter who was blamed incorrectly!",
        translation: "Es war John, der das Fenster zerbrach, nicht Peter, der fälschlicherweise beschuldigt wurde!",
        options: ["It was / who", "It is / that", "That was / who", "Both It was / who and It was / that"],
        correct: "Both It was / who and It was / that",
        explanation: "'IT WAS...WHO/THAT' betont PERSON als Täter: Beide Relativpronomen möglich. Diese Klarstellung korrigiert falsche Schuldzuweisung an Peter."
      },
      {
        id: "emph_str_2",
        question: "_____ her determination _____ helped her succeed despite all the many obstacles faced.",
        translation: "Es war ihre Entschlossenheit, die ihr trotz all der vielen bewältigten Hindernisse zum Erfolg verhalf.",
        options: ["It was / that", "It is / which", "That was / that", "What was / that"],
        correct: "It was / that",
        explanation: "'IT WAS...THAT' betont EIGENSCHAFT als Erfolgs-Grund: Diese Struktur hebt Entschlossenheit als Kern-Faktor für Hindernis-Überwindung hervor."
      },
      {
        id: "emph_str_3",
        question: "_____ in this very room _____ the important historical decision was made years ago.",
        translation: "Es war genau in diesem Raum, wo vor Jahren die wichtige historische Entscheidung getroffen wurde.",
        options: ["It was / that", "It is / where", "That was / that", "Both It was / that and It was / where"],
        correct: "Both It was / that and It was / where",
        explanation: "'IT WAS...THAT/WHERE' betont BEDEUTENDEN Ort: Diese Raum-Betonung macht historischen Entscheidungs-Ort sehr bedeutsam."
      },
      {
        id: "emph_str_4",
        question: "_____ I really want for my birthday is just to spend quality time with family.",
        translation: "Was ich mir wirklich zum Geburtstag wünsche, ist nur, Qualitätszeit mit der Familie zu verbringen.",
        options: ["All", "What", "That", "It"],
        correct: "All",
        explanation: "'ALL...IS' betont EINZIGEN Wunsch: 'All I want is'. Diese einfache Geburtstags-Wunsch zeigt Wert von Familie über materielle Dinge."
      },
      {
        id: "emph_str_5",
        question: "_____ until last week _____ I discovered the truth about what really happened then.",
        translation: "Es war erst letzte Woche, dass ich die Wahrheit darüber entdeckte, was damals wirklich passierte.",
        options: ["It wasn't / that", "It wasn't / when", "Not was it / that", "Both It wasn't / that and It wasn't / until"],
        correct: "It wasn't / that",
        explanation: "'IT WASN'T UNTIL...THAT' betont SPÄTEN Zeitpunkt: Diese verzögerte Wahrheits-Entdeckung zeigt lange Unwissenheit über echte Ereignisse."
      },
      {
        id: "emph_str_6",
        question: "_____ I care about is getting good results, not how long it takes to achieve.",
        translation: "Alles, was mir wichtig ist, ist gute Ergebnisse zu bekommen, nicht wie lange es dauert, sie zu erreichen.",
        options: ["All", "What", "That", "It"],
        correct: "All",
        explanation: "'ALL...IS' für EINZIGE Priorität: Diese Resultats-Fokussierung über Zeit-Effizienz zeigt Qualitäts-über-Geschwindigkeit-Mentalität."
      },
      {
        id: "emph_str_7",
        question: "_____ because of your great help _____ I managed to finish on time successfully.",
        translation: "Es war wegen deiner großartigen Hilfe, dass ich es schaffte, erfolgreich pünktlich fertig zu werden.",
        options: ["It was / that", "It is / that", "That was / that", "What was / that"],
        correct: "It was / that",
        explanation: "'IT WAS...THAT' betont DANK-Grund: Diese Struktur macht die Hilfe als Erfolgs-Ermöglichung sehr deutlich und dankbar."
      },
      {
        id: "emph_str_8",
        question: "_____ surprises me most is how quickly children learn new languages naturally effortlessly.",
        translation: "Was mich am meisten überrascht, ist, wie schnell Kinder neue Sprachen natürlich mühelos lernen.",
        options: ["What", "It", "That", "All"],
        correct: "What",
        explanation: "'WHAT...IS' betont ÜBERRASCHUNG: Diese Struktur hebt die erstaunliche kindliche Sprach-Lern-Geschwindigkeit hervor."
      },
      {
        id: "emph_str_9",
        question: "_____ you _____ needs to take responsibility for this mistake made yesterday at work.",
        translation: "Du bist es, der Verantwortung für diesen gestern bei der Arbeit gemachten Fehler übernehmen muss.",
        options: ["It's / who", "It's / that", "You are / who", "Both It's / who and It's / that"],
        correct: "Both It's / who and It's / that",
        explanation: "'IT'S YOU WHO/THAT' betont VERANTWORTLICHE Person: Diese direkte Schuldzuweisung macht klar, wer für Arbeits-Fehler verantwortlich ist."
      },
      {
        id: "emph_str_10",
        question: "_____ after midnight _____ the party finally ended and everyone went home tired.",
        translation: "Es war erst nach Mitternacht, dass die Party endlich endete und alle müde nach Hause gingen.",
        options: ["It was / that", "It wasn't / that", "Not was it / that", "Both It was / that and It wasn't until"],
        correct: "It was / that",
        explanation: "'IT WAS...THAT' betont SPÄTE Zeit: Diese Mitternacht-Überschreitung zeigt sehr lange Party-Dauer bis zum müden Ende."
      },
      {
        id: "emph_str_11",
        question: "_____ she needs now is rest and time to recover from the illness completely.",
        translation: "Was sie jetzt braucht, ist Ruhe und Zeit, um sich von der Krankheit vollständig zu erholen.",
        options: ["All", "What", "That", "It"],
        correct: "All",
        explanation: "'ALL...IS' betont EINZIGES Bedürfnis: Diese einfache Heilungs-Anforderung von Ruhe und Zeit ist fundamental für Genesung."
      },
      {
        id: "emph_str_12",
        question: "_____ the loud noise _____ woke me up from my deep sleep last night.",
        translation: "Es war der laute Lärm, der mich letzte Nacht aus meinem tiefen Schlaf aufweckte.",
        options: ["It was / that", "It is / which", "That was / that", "What was / that"],
        correct: "It was / that",
        explanation: "'IT WAS...THAT' betont STÖRUNGS-Ursache: Diese Struktur macht Lärm als direkten Aufwach-Grund aus tiefem Schlaf sehr klar."
      },
      {
        id: "emph_str_13",
        question: "_____ I remember most about childhood is playing outside with friends every day happily.",
        translation: "Was ich mich am meisten an die Kindheit erinnere, ist jeden Tag glücklich draußen mit Freunden zu spielen.",
        options: ["What", "It", "That", "All"],
        correct: "What",
        explanation: "'WHAT...IS' betont SCHÖNSTE Erinnerung: Diese Struktur hebt die wertvollste Kindheits-Erinnerung - Freunde-Spiel - hervor."
      },
      {
        id: "emph_str_14",
        question: "_____ only when I saw the photos _____ I realized how much I had changed.",
        translation: "Es war erst, als ich die Fotos sah, dass ich merkte, wie sehr ich mich verändert hatte.",
        options: ["It was / that", "It wasn't / that", "Not was it / that", "What was / that"],
        correct: "It was / that",
        explanation: "'IT WAS ONLY WHEN...THAT' betont REALISIERUNGS-Moment: Diese Foto-Konfrontation brachte Selbst-Veränderungs-Bewusstsein."
      },
      {
        id: "emph_str_15",
        question: "_____ we're looking for in a new employee is reliability and good teamwork skills.",
        translation: "Was wir bei einem neuen Mitarbeiter suchen, ist Zuverlässigkeit und gute Teamwork-Fähigkeiten.",
        options: ["What", "It", "That", "All"],
        correct: "What",
        explanation: "'WHAT...IS' betont ANFORDERUNGEN: Diese Struktur hebt die wichtigsten Mitarbeiter-Qualitäten für erfolgreiche Team-Integration hervor."
      }
    ]
  },

  result_clauses: {
    name: "Result Clauses (such...that/so...that)",
    description: "Folge-Sätze - Ergebnisse mit so und such ausdrücken",
    icon: Volume2,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "result_1",
        question: "She was _____ tired that she fell asleep immediately on the couch after work.",
        translation: "Sie war so müde, dass sie nach der Arbeit sofort auf der Couch einschlief.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adjektiv + 'THAT' = Folge: 'so tired that'. Diese Erschöpfung nach Arbeit war so extrem, dass sofortiges Einschlafen die Folge war."
      },
      {
        id: "result_2",
        question: "It was _____ a boring movie that many people left the cinema before ending.",
        translation: "Es war so ein langweiliger Film, dass viele Leute das Kino vor dem Ende verließen.",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + A + Adjektiv + Nomen + 'THAT': 'such a boring movie'. Diese extreme Langeweile führte zu vorzeitigem Publikums-Exodus."
      },
      {
        id: "result_3",
        question: "He spoke _____ quietly that nobody in the back row could hear him clearly.",
        translation: "Er sprach so leise, dass niemand in der hinteren Reihe ihn klar hören konnte.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adverb + 'THAT': 'so quietly that'. Diese zu leise Stimme verursachte Hör-Problem für Menschen weiter hinten im Raum."
      },
      {
        id: "result_4",
        question: "They're _____ nice people that everyone wants to be friends with them always.",
        translation: "Sie sind so nette Leute, dass jeder immer mit ihnen befreundet sein möchte.",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + Adjektiv + Plural-Nomen + 'THAT': 'such nice people'. Diese außergewöhnliche Freundlichkeit macht sie universell beliebt bei allen."
      },
      {
        id: "result_5",
        question: "The problem was _____ complicated that even experts couldn't solve it quickly at all.",
        translation: "Das Problem war so kompliziert, dass selbst Experten es überhaupt nicht schnell lösen konnten.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adjektiv + 'THAT': Diese extreme Komplexität überstieg sogar Experten-Fähigkeiten für schnelle Problemlösung."
      },
      {
        id: "result_6",
        question: "She made _____ a good impression that she got the job offer immediately after interview.",
        translation: "Sie hinterließ so einen guten Eindruck, dass sie sofort nach dem Interview das Jobangebot bekam.",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + A + Adjektiv + Nomen: 'such a good impression'. Dieser außergewöhnliche Eindruck führte zu sofortiger Job-Zusage."
      },
      {
        id: "result_7",
        question: "The music was _____ loud that I got a terrible headache within minutes quickly.",
        translation: "Die Musik war so laut, dass ich innerhalb von Minuten schnell schreckliche Kopfschmerzen bekam.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adjektiv: Diese extreme Lautstärke verursachte schnell körperliche Schmerz-Reaktion durch Über-Stimulation."
      },
      {
        id: "result_8",
        question: "It was _____ terrible weather that all flights were cancelled at the airport today.",
        translation: "Es war so schreckliches Wetter, dass heute alle Flüge am Flughafen gestrichen wurden.",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + Adjektiv + Nomen (ohne 'a' bei uncountable): Diese Wetter-Extreme führte zu kompletter Flug-Streichung aus Sicherheit."
      },
      {
        id: "result_9",
        question: "He ran _____ fast that he won the race by a large margin of ten seconds!",
        translation: "Er rannte so schnell, dass er das Rennen mit großem Vorsprung von zehn Sekunden gewann!",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adverb + 'THAT': Diese außergewöhnliche Geschwindigkeit resultierte in deutlichem Sieg mit zehn Sekunden Vorsprung."
      },
      {
        id: "result_10",
        question: "There was _____ a lot of traffic that we were stuck for two hours!",
        translation: "Es war so viel Verkehr, dass wir zwei Stunden feststeckten!",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + A LOT OF: 'such a lot of traffic'. Diese extreme Verkehrsmenge führte zu zweistündiger frustrierender Stau-Situation."
      },
      {
        id: "result_11",
        question: "The explanation was _____ confusing that nobody understood it at all clearly in class.",
        translation: "Die Erklärung war so verwirrend, dass niemand sie im Unterricht überhaupt klar verstand.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adjektiv: Diese totale Verwirrung führte zu null Verständnis bei allen Schülern, zeigt Erklärungs-Qualitäts-Problem."
      },
      {
        id: "result_12",
        question: "She has _____ a beautiful voice that she should consider singing professionally in future.",
        translation: "Sie hat so eine schöne Stimme, dass sie in Zukunft professionelles Singen in Betracht ziehen sollte.",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + A + Adjektiv + Nomen: Diese außergewöhnliche Stimm-Qualität rechtfertigt professionelle Gesangs-Karriere-Überlegung."
      },
      {
        id: "result_13",
        question: "The book was _____ interesting that I read it all in one single day straight!",
        translation: "Das Buch war so interessant, dass ich es durchgehend an einem einzigen Tag komplett las!",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adjektiv: Diese fesselnde Buch-Qualität führte zu kompletter Eintages-Lektüre ohne Unterbrechung."
      },
      {
        id: "result_14",
        question: "They had _____ a wonderful time on vacation that they don't want to leave ever!",
        translation: "Sie hatten im Urlaub so eine wunderbare Zeit, dass sie überhaupt nie gehen wollen!",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'SUCH' + A + Adjektiv + Nomen: Diese perfekte Urlaubs-Erfahrung erzeugt starken Wunsch zu bleiben statt heimzukehren."
      },
      {
        id: "result_15",
        question: "The pain was _____ severe that he had to go to hospital emergency room immediately.",
        translation: "Der Schmerz war so stark, dass er sofort zur Krankenhaus-Notaufnahme gehen musste.",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'SO' + Adjektiv: Diese extreme Schmerz-Intensität erforderte dringende medizinische Notfall-Behandlung im Krankenhaus."
      }
    ]
  },

  compound_adjectives: {
    name: "Compound Adjectives",
    description: "Zusammengesetzte Adjektive - mit Bindestrich gebildete Adjektive",
    icon: Box,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "comp_adj_1",
        question: "It's a _____ drive from here to the beach by the coast.",
        translation: "Es ist eine zweistündige Fahrt von hier zum Strand an der Küste.",
        options: ["two-hour", "two-hours", "two hours", "two hour"],
        correct: "two-hour",
        explanation: "ZAHL-ZEITEINHEIT mit BINDESTRICH (Singular!): 'two-hour drive'. Das zusammengesetzte Adjektiv beschreibt die Fahrt-Dauer präzise."
      },
      {
        id: "comp_adj_2",
        question: "She lives in a _____ apartment building in the city center downtown.",
        translation: "Sie wohnt in einem dreißigstöckigen Wohngebäude im Stadtzentrum der Innenstadt.",
        options: ["thirty-story", "thirty-stories", "thirty stories", "thirty story"],
        correct: "thirty-story",
        explanation: "ZAHL + NOMEN mit BINDESTRICH (Singular): 'thirty-story building'. Diese Hochhaus-Beschreibung nutzt compound adjective Regel."
      },
      {
        id: "comp_adj_3",
        question: "He has a _____ job at the international technology company headquarters here.",
        translation: "Er hat einen gut bezahlten Job bei der internationalen Technologie-Firmen-Zentrale hier.",
        options: ["well-paid", "well paid", "good-paid", "good paid"],
        correct: "well-paid",
        explanation: "ADVERB-PARTIZIP mit BINDESTRICH: 'well-paid job'. Diese Gehalt-Beschreibung ist Standard compound adjective vor Nomen."
      },
      {
        id: "comp_adj_4",
        question: "It was a _____ decision that changed my entire life direction forever after.",
        translation: "Es war eine lebensverändernde Entscheidung, die danach meine ganze Lebensrichtung für immer änderte.",
        options: ["life-changing", "life changing", "changing-life", "change-life"],
        correct: "life-changing",
        explanation: "NOMEN-PARTIZIP mit BINDESTRICH: 'life-changing decision'. Diese dramatische Entscheidungs-Beschreibung betont fundamentale Lebens-Wende."
      },
      {
        id: "comp_adj_5",
        question: "She's a _____ woman who always looks elegant wherever she goes every time.",
        translation: "Sie ist eine gut gekleidete Frau, die immer elegant aussieht, wohin sie auch jedes Mal geht.",
        options: ["well-dressed", "well dressed", "good-dressed", "good dressed"],
        correct: "well-dressed",
        explanation: "ADVERB-PARTIZIP: 'well-dressed' mit Bindestrich VOR Nomen. Diese Stil-Beschreibung zeigt konstant elegante Kleidungs-Wahl."
      },
      {
        id: "comp_adj_6",
        question: "They're planning a _____ trip around Europe visiting many countries together soon.",
        translation: "Sie planen bald eine dreiwöchige Reise durch Europa und besuchen zusammen viele Länder.",
        options: ["three-week", "three-weeks", "three weeks", "three week"],
        correct: "three-week",
        explanation: "ZAHL-ZEITEINHEIT mit BINDESTRICH: 'three-week trip' (Singular!). Diese Europa-Reise-Dauer ist gut für mehrere Länder-Besuche."
      },
      {
        id: "comp_adj_7",
        question: "It's a _____ movie suitable for families and children to watch together safely.",
        translation: "Es ist ein kinderfreundlicher Film, der für Familien und Kinder geeignet ist, um ihn sicher zusammen zu schauen.",
        options: ["child-friendly", "child friendly", "children-friendly", "friendly-child"],
        correct: "child-friendly",
        explanation: "NOMEN-ADJEKTIV mit BINDESTRICH: 'child-friendly movie'. Diese Alters-Eignung macht Film perfekt für Familien-Filmabend."
      },
      {
        id: "comp_adj_8",
        question: "He bought a _____ laptop for his graphic design work at the studio.",
        translation: "Er kaufte einen brandneuen Laptop für seine Grafik-Design-Arbeit im Studio.",
        options: ["brand-new", "brand new", "new-brand", "new brand"],
        correct: "brand-new",
        explanation: "VERSTÄRKUNGS-Compound: 'brand-new' (nagelneu) mit Bindestrich VOR Nomen. Diese Neuheits-Betonung ist wichtig für Technik-Qualität."
      },
      {
        id: "comp_adj_9",
        question: "She's very _____ about her healthy diet and exercise routine every single day.",
        translation: "Sie ist sehr gesundheitsbewusst bezüglich ihrer gesunden Ernährung und Trainingsroutine jeden einzelnen Tag.",
        options: ["health-conscious", "health conscious", "healthy-conscious", "conscious-health"],
        correct: "health-conscious",
        explanation: "NOMEN-ADJEKTIV: 'health-conscious' mit Bindestrich. Diese Gesundheits-Bewusstheit zeigt sich in täglicher Ernährungs- und Sport-Disziplin."
      },
      {
        id: "comp_adj_10",
        question: "It's a _____ solution to the complicated environmental problem we're facing globally.",
        translation: "Es ist eine langfristige Lösung für das komplizierte Umwelt-Problem, dem wir global gegenüberstehen.",
        options: ["long-term", "long term", "term-long", "long-time"],
        correct: "long-term",
        explanation: "ZEITDAUER-Compound: 'long-term solution' mit Bindestrich. Diese nachhaltige Lösungs-Perspektive ist wichtig für dauerhafte Umwelt-Verbesserung."
      },
      {
        id: "comp_adj_11",
        question: "He's working on a _____ project that requires months of dedicated research work.",
        translation: "Er arbeitet an einem hochrangigen Projekt, das Monate engagierter Forschungsarbeit erfordert.",
        options: ["high-level", "high level", "level-high", "high-rank"],
        correct: "high-level",
        explanation: "ADJEKTIV-NOMEN: 'high-level project' mit Bindestrich. Diese Projekt-Wichtigkeit rechtfertigt monatelange intensive Forschungs-Hingabe."
      },
      {
        id: "comp_adj_12",
        question: "She has a _____ attitude that makes working with her very pleasant and easy.",
        translation: "Sie hat eine entspannte Einstellung, die die Arbeit mit ihr sehr angenehm und einfach macht.",
        options: ["laid-back", "laid back", "back-laid", "lay-back"],
        correct: "laid-back",
        explanation: "IDIOMATISCHES Compound: 'laid-back attitude' mit Bindestrich. Diese entspannte Art macht Zusammenarbeit stressfrei und harmonisch."
      },
      {
        id: "comp_adj_13",
        question: "They're building a _____ shopping center with many international brand stores opening.",
        translation: "Sie bauen ein hochmodernes Einkaufszentrum mit vielen sich eröffnenden internationalen Markengeschäften.",
        options: ["state-of-the-art", "state of the art", "art-state", "modern-state"],
        correct: "state-of-the-art",
        explanation: "KOMPLEXES Compound: 'state-of-the-art' (hochmodern) mit Bindestrichen. Diese neueste Technologie-Stufe macht Shopping-Center sehr attraktiv."
      },
      {
        id: "comp_adj_14",
        question: "It's a _____ train journey through the beautiful mountain landscape scenery daily.",
        translation: "Es ist eine fünfstündige Zugfahrt durch die schöne Berg-Landschafts-Szenerie täglich.",
        options: ["five-hour", "five-hours", "five hours", "five hour"],
        correct: "five-hour",
        explanation: "ZAHL-ZEIT mit BINDESTRICH: 'five-hour journey' (Singular). Diese lange Reise-Dauer bietet ausgedehnte Landschafts-Genuss-Zeit."
      },
      {
        id: "comp_adj_15",
        question: "She's a _____ person who always thinks about others' feelings and needs first.",
        translation: "Sie ist eine rücksichtsvolle Person, die immer zuerst an die Gefühle und Bedürfnisse anderer denkt.",
        options: ["kind-hearted", "kind hearted", "heart-kind", "hearted-kind"],
        correct: "kind-hearted",
        explanation: "ADJEKTIV-PARTIZIP: 'kind-hearted person' mit Bindestrich. Diese Charakter-Eigenschaft zeigt empathische fürsorgliche Natur."
      }
    ]
  },

  contrast_words: {
    name: "Contrast Words (even though/whereas)",
    description: "Kontrast-Wörter - verschiedene Gegensatz-Ausdrücke unterscheiden",
    icon: Box,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "contr_1",
        question: "_____ I studied hard for the exam, I still didn't get a very good grade.",
        translation: "Obwohl ich hart für die Prüfung lernte, bekam ich trotzdem keine sehr gute Note.",
        options: ["Even though", "Whereas", "While", "All correct"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' betont ÜBERRASCHENDEN Gegensatz: trotz Lernen schlechte Note. Diese Verstärkung ist stärker als einfaches 'although'."
      },
      {
        id: "contr_2",
        question: "She loves the city, _____ her husband prefers the quiet peaceful countryside life.",
        translation: "Sie liebt die Stadt, wohingegen ihr Mann das ruhige friedliche Landleben bevorzugt.",
        options: ["whereas", "even though", "despite", "although"],
        correct: "whereas",
        explanation: "'WHEREAS' zeigt DIREKTEN Vergleich zweier Gegensätze: Stadt vs Land. Dieses Wort stellt zwei verschiedene Präferenzen direkt gegenüber."
      },
      {
        id: "contr_3",
        question: "_____ the heavy rain outside, we decided to go hiking in the mountains anyway.",
        translation: "Trotz des starken Regens draußen entschieden wir uns trotzdem, in den Bergen wandern zu gehen.",
        options: ["Despite", "Even though", "Whereas", "Although"],
        correct: "Despite",
        explanation: "'DESPITE' + Nomen (NICHT Subjekt+Verb): Diese Entschlossenheit trotz schlechtem Wetter zeigt Abenteuer-Geist über Komfort."
      },
      {
        id: "contr_4",
        question: "He's very sociable, _____ his brother is quite shy and introverted with people.",
        translation: "Er ist sehr gesellig, wohingegen sein Bruder ziemlich schüchtern und introvertiert mit Leuten ist.",
        options: ["whereas", "even though", "despite", "although"],
        correct: "whereas",
        explanation: "'WHEREAS' für BRUDER-Kontrast: gesellig vs schüchtern. Diese Geschwister-Persönlichkeits-Unterschiede sind interessante Familien-Dynamik."
      },
      {
        id: "contr_5",
        question: "_____ it was expensive, we bought the house because location was perfect for us.",
        translation: "Obwohl es teuer war, kauften wir das Haus, weil die Lage für uns perfekt war.",
        options: ["Even though", "Whereas", "Despite", "Both even though and although"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' + Subjekt + Verb: Diese Kauf-Entscheidung trotz hohem Preis zeigt Priorität von Lage über Kosten."
      },
      {
        id: "contr_6",
        question: "Some people like hot weather, _____ others prefer cold climates and snow.",
        translation: "Manche Leute mögen heißes Wetter, wohingegen andere kalte Klimate und Schnee bevorzugen.",
        options: ["whereas", "even though", "despite", "although"],
        correct: "whereas",
        explanation: "'WHEREAS' zeigt PRÄFERENZ-Unterschiede: heiß vs kalt. Diese Wetter-Vorlieben-Variation ist normale menschliche Diversität."
      },
      {
        id: "contr_7",
        question: "_____ all our efforts and hard work, the project failed to meet the deadline.",
        translation: "Trotz all unserer Bemühungen und harten Arbeit schaffte es das Projekt nicht, die Deadline zu erfüllen.",
        options: ["Despite", "Even though", "Whereas", "Although"],
        correct: "Despite",
        explanation: "'DESPITE' + Nomen: Diese Misserfolg trotz Anstrengung zeigt externe Faktoren oder Unterschätzung der Projekt-Komplexität."
      },
      {
        id: "contr_8",
        question: "_____ he had no experience at all, he did surprisingly well in the new job.",
        translation: "Obwohl er überhaupt keine Erfahrung hatte, machte er den neuen Job überraschend gut.",
        options: ["Even though", "Whereas", "Despite", "Both even though and although"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' betont ÜBERRASCHUNG: trotz null Erfahrung gute Leistung. Diese schnelle Einarbeitung zeigt natürliches Talent oder Lernfähigkeit."
      },
      {
        id: "contr_9",
        question: "I prefer tea, _____ my wife drinks only coffee every morning without exception.",
        translation: "Ich bevorzuge Tee, wohingegen meine Frau jeden Morgen ohne Ausnahme nur Kaffee trinkt.",
        options: ["whereas", "even though", "despite", "although"],
        correct: "whereas",
        explanation: "'WHEREAS' für EHE-GETRÄNKE-Kontrast: Diese unterschiedlichen Morgen-Getränke-Präferenzen sind harmlose Ehe-Verschiedenheit."
      },
      {
        id: "contr_10",
        question: "_____ his young age of only twenty, he's already very mature and responsible always.",
        translation: "Trotz seines jungen Alters von nur zwanzig ist er bereits sehr reif und immer verantwortungsbewusst.",
        options: ["Despite", "Even though", "Whereas", "Although"],
        correct: "Despite",
        explanation: "'DESPITE' + Nomen-Phrase: Diese Reife trotz Jugend ist ungewöhnliche aber positive Charakter-Entwicklung."
      },
      {
        id: "contr_11",
        question: "The first test was easy, _____ the second one was extremely difficult and challenging.",
        translation: "Der erste Test war einfach, wohingegen der zweite extrem schwierig und herausfordernd war.",
        options: ["whereas", "even though", "despite", "although"],
        correct: "whereas",
        explanation: "'WHEREAS' für TEST-SCHWIERIGKEITS-Vergleich: Diese extreme Schwierigkeits-Steigerung vom ersten zum zweiten Test ist überraschend."
      },
      {
        id: "contr_12",
        question: "_____ being tired, she continued working until she finished everything completely tonight.",
        translation: "Obwohl sie müde war, arbeitete sie heute Abend weiter, bis sie alles komplett beendet hatte.",
        options: ["Despite", "Even though", "Whereas", "Both despite and in spite of"],
        correct: "Despite",
        explanation: "'DESPITE' + being: Diese Durchhalte-Fähigkeit trotz Müdigkeit zeigt starke Arbeits-Ethik und Verantwortungs-Bewusstsein."
      },
      {
        id: "contr_13",
        question: "_____ we invited everyone, only half of the people came to our party sadly.",
        translation: "Obwohl wir alle einluden, kam leider nur die Hälfte der Leute zu unserer Party.",
        options: ["Even though", "Whereas", "Despite", "Both even though and although"],
        correct: "Even though",
        explanation: "'EVEN THOUGH' + Satz: Diese niedrige Party-Teilnahme trotz breiter Einladung ist enttäuschende aber realistische Erfahrung."
      },
      {
        id: "contr_14",
        question: "My sister is outgoing and talkative, _____ I'm more quiet and reserved with people.",
        translation: "Meine Schwester ist aufgeschlossen und gesprächig, wohingegen ich ruhiger und zurückhaltender mit Leuten bin.",
        options: ["whereas", "even though", "despite", "although"],
        correct: "whereas",
        explanation: "'WHEREAS' für GESCHWISTER-Kontrast: Diese Persönlichkeits-Unterschiede zwischen Geschwistern sind normale familiäre Variation."
      },
      {
        id: "contr_15",
        question: "_____ the bad reviews online, the restaurant was actually quite good and pleasant.",
        translation: "Trotz der schlechten Online-Bewertungen war das Restaurant tatsächlich ziemlich gut und angenehm.",
        options: ["Despite", "Even though", "Whereas", "Both despite and in spite of"],
        correct: "Despite",
        explanation: "'DESPITE' + Nomen: Diese positive Überraschung trotz negativer Bewertungen zeigt Wichtigkeit eigener Restaurant-Erfahrung über Online-Meinungen."
      }
    ]
  }
};

export default part23Categories;
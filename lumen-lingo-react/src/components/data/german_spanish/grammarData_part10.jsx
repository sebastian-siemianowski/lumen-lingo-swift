/**
 * GERMAN → SPANISH GRAMMAR - PART 10
 * 4 categories, 15 questions each
 */

import { Music, Zap, Heart, Star } from "lucide-react";

export const part10Categories = {
  verbos_cambio_raiz: {
    name: "Stammwechselverben",
    description: "E→IE, O→UE, E→I - Vokale ändern sich in konjugierten Formen",
    icon: Music,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "stem_1",
        question: "Yo _____ a las siete de la mañana cada día laborable.",
        translation: "Ich wache jeden Werktag um sieben Uhr morgens auf.",
        options: ["me despierto", "me desperto", "me despierto", "despierto"],
        correct: "me despierto",
        explanation: "Stammwechsel E→IE: 'despertarse' wird zu 'me despierto' (nicht 'desperto'). Das 'e' im Stamm wird zu 'ie' bei Betonung. Diese regelmäßige Weckzeit strukturiert Arbeitstage und sichert pünktlichen Arbeitsbeginn."
      },
      {
        id: "stem_2",
        question: "¿Cuántas horas _____ tú cada noche normalmente en la semana?",
        translation: "Wie viele Stunden schläfst du normalerweise jede Nacht in der Woche?",
        options: ["duermes", "dormes", "duermes", "dormir"],
        correct: "duermes",
        explanation: "Stammwechsel O→UE: 'dormir' wird zu 'duermes' (nicht 'dormes'). Das 'o' wird zu 'ue' unter Betonung. Diese Frage über Schlafdauer ist wichtig für Gesundheitsdiskussion, da ausreichend Schlaf essentiell ist."
      },
      {
        id: "stem_3",
        question: "Nosotros _____ cenar en ese restaurante italiano mañana por la noche.",
        translation: "Wir wollen morgen Abend in jenem italienischen Restaurant essen.",
        options: ["queremos", "quieremos", "querimos", "querer"],
        correct: "queremos",
        explanation: "Stammwechsel E→IE: 'querer' wird zu 'queremos' - ABER 1. Person Plural ändert NICHT: 'queremos' nicht 'quieremos'. Nur betonte Silben ändern sich. Dieser Restaurantwunsch für morgen ist gemeinsame Essenspläne."
      },
      {
        id: "stem_4",
        question: "El partido de fútbol _____ a las cuatro de la tarde hoy.",
        translation: "Das Fußballspiel beginnt heute um vier Uhr nachmittags.",
        options: ["empieza", "empiesa", "empieza", "empezar"],
        correct: "empieza",
        explanation: "Stammwechsel E→IE: 'empezar' wird zu 'empieza' (beginnt). Diese Spielzeit um vier Nachmittag ist perfekt für Wochenendvergnügen ohne Arbeitskonflikt."
      },
      {
        id: "stem_5",
        question: "Yo siempre _____ mi dinero en libros y educación valiosa.",
        translation: "Ich investiere mein Geld immer in Bücher und wertvolle Bildung.",
        options: ["invierto", "inverto", "invierto", "invertir"],
        correct: "invierto",
        explanation: "Stammwechsel E→IE: 'invertir' wird zu 'invierto'. Diese Investition in Bücher und Bildung ist kluge Prioritätensetzung, die langfristig mehr Wert als materielle Güter schafft."
      },
      {
        id: "stem_6",
        question: "Ella _____ que su hijo está enfermo y necesita descanso completo.",
        translation: "Sie denkt, dass ihr Sohn krank ist und vollständige Ruhe braucht.",
        options: ["piensa", "pensa", "piensa", "pensar"],
        correct: "piensa",
        explanation: "Stammwechsel E→IE: 'pensar' wird zu 'piensa' (denkt). Diese mütterliche Sorge um krankes Kind führt zu Entscheidung für Bettruhe und Erholung."
      },
      {
        id: "stem_7",
        question: "Nosotros _____ jugar al fútbol los domingos en el parque cercano.",
        translation: "Wir pflegen sonntags im nahen Park Fußball zu spielen.",
        options: ["solemos", "suelemos", "solimos", "soler"],
        correct: "solemos",
        explanation: "Stammwechsel O→UE: 'soler' (pflegen zu) wird zu 'solemos' - ABER 1. Person Plural ändert nicht. Diese Sonntagsfußball-Tradition ist regelmäßige Freizeitaktivität mit Freunden."
      },
      {
        id: "stem_8",
        question: "¿Cuánto _____ estas zapatillas deportivas de marca conocida?",
        translation: "Wie viel kosten diese Sportschuhe der bekannten Marke?",
        options: ["cuestan", "costan", "cuestan", "costar"],
        correct: "cuestan",
        explanation: "Stammwechsel O→UE: 'costar' wird zu 'cuestan' (kosten). Diese Preisfrage vor Schuhkauf ist wichtig, um zu entscheiden, ob sie im Budget liegen."
      },
      {
        id: "stem_9",
        question: "Yo _____ las llaves de casa frecuentemente - soy muy despistado.",
        translation: "Ich verliere häufig die Hausschlüssel - ich bin sehr zerstreut.",
        options: ["pierdo", "perdo", "pierdo", "perder"],
        correct: "pierdo",
        explanation: "Stammwechsel E→IE: 'perder' wird zu 'pierdo' (verliere). Diese häufige Schlüsselverliererei ist Zeichen von Zerstreutheit, die frustrierend und zeitraubend sein kann."
      },
      {
        id: "stem_10",
        question: "Ellos _____ visitar museos cuando viajan a ciudades nuevas siempre.",
        translation: "Sie ziehen es vor, immer Museen zu besuchen, wenn sie in neue Städte reisen.",
        options: ["prefieren", "preferen", "preferimos", "preferir"],
        correct: "prefieren",
        explanation: "Stammwechsel E→IE: 'preferir' wird zu 'prefieren' (ziehen vor). Diese kulturelle Reisetendenz zeigt Interesse an Geschichte und Kunst über kommerzielle Touristenattraktionen."
      },
      {
        id: "stem_11",
        question: "¿A qué hora _____ el tren para Barcelona desde esta estación?",
        translation: "Um wie viel Uhr fährt der Zug nach Barcelona von diesem Bahnhof ab?",
        options: ["sale", "sal", "salen", "salir"],
        correct: "sale",
        explanation: "Verb 'salir' (abfahren) ist NICHT Stammwechsel, aber unregelmäßig in 1. Person: 'sale' ist regulär. Diese Zugfahrplan-Frage ist essentiell für rechtzeitige Ankunft am Bahnhof."
      },
      {
        id: "stem_12",
        question: "Nosotros _____ almorzar a la una normalmente cada día laborable.",
        translation: "Wir pflegen normalerweise jeden Werktag um eins zu Mittag zu essen.",
        options: ["solemos", "suelemos", "solimos", "soler"],
        correct: "solemos",
        explanation: "Stammwechsel O→UE: 'soler' wird zu 'solemos' bei 'wir' - KEINE Änderung bei nosotros. Diese Mittagspause um eins ist mediterrane Tradition für Hauptmahlzeit des Tages."
      },
      {
        id: "stem_13",
        question: "Mi hermano _____ ir al gimnasio después del trabajo diario siempre.",
        translation: "Mein Bruder zieht es vor, nach der täglichen Arbeit immer ins Fitnessstudio zu gehen.",
        options: ["prefiere", "prefere", "preferimos", "preferir"],
        correct: "prefiere",
        explanation: "Stammwechsel E→IE: 'preferir' wird zu 'prefiere'. Diese Fitnessstudio-Routine nach Arbeit ist gesunde Gewohnheit, die Stress abbaut und Fitness erhält."
      },
      {
        id: "stem_14",
        question: "Los niños no _____ la verdad sobre lo que pasó ayer.",
        translation: "Die Kinder sagen nicht die Wahrheit über das, was gestern passierte.",
        options: ["dicen", "decen", "dicimos", "decir"],
        correct: "dicen",
        explanation: "Verb 'decir' ist unregelmäßig: 'dicen' (nicht Stammwechsel, aber komplett irregulär in manchen Formen). Diese kindliche Unehrlichkeit über gestrige Ereignisse ist typisches Verhalten aus Angst vor Konsequenzen."
      },
      {
        id: "stem_15",
        question: "¿_____ tú ayuda con este problema matemático difícil ahora mismo?",
        translation: "Brauchst du gerade jetzt Hilfe mit diesem schweren Mathematikproblem?",
        options: ["Necesitas", "Necesitas", "Necesitamos", "Necesitar"],
        correct: "Necesitas",
        explanation: "Verb 'necesitar' ist KEIN Stammwechsel: bleibt regulär 'necesitas'. Nicht alle Verben ändern Stamm. Diese Hilfsangebot bei Mathe zeigt Bereitschaft zu unterstützen, wenn Schwierigkeiten auftreten."
      }
    ]
  },

  adjetivos_posesivos: {
    name: "Possessivadjektive",
    description: "Mi, tu, su, nuestro - Besitz und Zugehörigkeit ausdrücken",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    questions: [
      {
        id: "pos_adj_1",
        question: "_____ casa está en el centro de la ciudad cerca del parque.",
        translation: "Mein Haus ist im Stadtzentrum nahe am Park.",
        options: ["Mi", "Mío", "Mis", "Mí"],
        correct: "Mi",
        explanation: "Für MEIN vor Singular nutzen wir 'mi': 'mi casa' (mein Haus). Keine Geschlechtsänderung bei mi/tu/su. Diese zentrale Lage nahe Park ist attraktive Wohnposition mit urbanem Zugang und Grünfläche."
      },
      {
        id: "pos_adj_2",
        question: "¿Dónde están _____ llaves del coche? No las encuentro por ningún lado.",
        translation: "Wo sind deine Autoschlüssel? Ich finde sie nirgends.",
        options: ["tus", "tu", "tuyas", "ti"],
        correct: "tus",
        explanation: "Für DEINE vor Plural nutzen wir 'tus': 'tus llaves' (deine Schlüssel). Plural von 'tu'. Diese Suche nach verlegten Schlüsseln ist frustrierende aber häufige Alltagssituation."
      },
      {
        id: "pos_adj_3",
        question: "_____ hermanos viven en diferentes países del mundo actualmente ahora.",
        translation: "Seine/Ihre Geschwister leben aktuell jetzt in verschiedenen Ländern der Welt.",
        options: ["Sus", "Su", "Suyos", "Se"],
        correct: "Sus",
        explanation: "Für SEINE/IHRE vor Plural: 'sus hermanos' (seine/ihre Geschwister). 'Su/sus' kann sein, ihr, oder Ihr (formal) bedeuten. Diese geografische Trennung der Geschwister über Kontinente ist moderne Realität globaler Mobilität."
      },
      {
        id: "pos_adj_4",
        question: "_____ abuelos viven en el campo lejos de la ciudad ruidosa.",
        translation: "Unsere Großeltern leben auf dem Land weit weg von der lauten Stadt.",
        options: ["Nuestros", "Nuestro", "Nuestra", "Nuestras"],
        correct: "Nuestros",
        explanation: "Für UNSERE vor maskulin Plural: 'nuestros abuelos'. 'Nuestro' ändert sich nach Geschlecht UND Zahl. Diese ländliche Residenz der Großeltern bietet Ruhe und Naturverbindung fern von Stadtlärm."
      },
      {
        id: "pos_adj_5",
        question: "_____ madre trabaja como profesora en la escuela primaria local cercana.",
        translation: "Meine Mutter arbeitet als Lehrerin an der nahen örtlichen Grundschule.",
        options: ["Mi", "Mío", "Mis", "Mía"],
        correct: "Mi",
        explanation: "Für MEINE vor feminin Singular: 'mi madre'. Gleiche Form für maskulin/feminin. Dieser Lehrerinnenberuf der Mutter ist wichtige gesellschaftliche Rolle in Bildung junger Generation."
      },
      {
        id: "pos_adj_6",
        question: "¿Es este _____ teléfono móvil o de otra persona aquí?",
        translation: "Ist das dein Handy oder von jemand anderem hier?",
        options: ["tu", "tú", "tus", "tuyo"],
        correct: "tu",
        explanation: "Für DEIN vor Singular: 'tu teléfono'. Nicht mit 'tú' (du) verwechseln - kein Akzent. Diese Klärungsfrage über Handybesitz hilft, gefundenes Gerät richtigem Eigentümer zuzuordnen."
      },
      {
        id: "pos_adj_7",
        question: "_____ hijos estudian en la misma universidad que nosotros antes.",
        translation: "Ihre Kinder studieren an derselben Universität wie wir früher.",
        options: ["Sus", "Su", "Suyos", "Suyas"],
        correct: "Sus",
        explanation: "Für IHRE vor Plural: 'sus hijos' (ihre Kinder). Diese generationsübergreifende Uni-Tradition zeigt familiäre Bildungskontinuität an selber Institution."
      },
      {
        id: "pos_adj_8",
        question: "_____ amiga María viene a visitarnos este fin de semana próximo.",
        translation: "Unsere Freundin María kommt uns nächstes Wochenende besuchen.",
        options: ["Nuestra", "Nuestro", "Nuestras", "Nuestros"],
        correct: "Nuestra",
        explanation: "Für UNSERE vor feminin Singular: 'nuestra amiga'. 'Nuestro' passt sich vollständig an. Dieser angekündigte Besuch der gemeinsamen Freundin ist erfreuliches soziales Ereignis."
      },
      {
        id: "pos_adj_9",
        question: "_____ vecinos hacen mucho ruido molesto por las noches siempre.",
        translation: "Meine Nachbarn machen nachts immer viel störenden Lärm.",
        options: ["Mis", "Mi", "Míos", "Mías"],
        correct: "Mis",
        explanation: "Für MEINE vor Plural: 'mis vecinos' (meine Nachbarn). Plural von 'mi'. Dieser nächtliche Nachbarschaftslärm ist frustrierende Situation, die Schlafqualität beeinträchtigt."
      },
      {
        id: "pos_adj_10",
        question: "¿Cuál es _____ opinión personal sobre este tema controversial actual?",
        translation: "Was ist Ihre persönliche Meinung zu diesem aktuellen kontroversen Thema?",
        options: ["su", "sus", "suyo", "suya"],
        correct: "su",
        explanation: "Für IHR (formal Sie) vor Singular: 'su opinión'. 'Su' ist mehrdeutig - kann sein/ihr/Ihr bedeuten. Diese höfliche Nachfrage nach Meinung respektiert persönliche Ansichten zu heiklem Thema."
      },
      {
        id: "pos_adj_11",
        question: "_____ ciudad natal es muy pequeña - tiene solo mil habitantes aproximadamente.",
        translation: "Meine Heimatstadt ist sehr klein - sie hat nur ungefähr tausend Einwohner.",
        options: ["Mi", "Mío", "Mis", "Mía"],
        correct: "Mi",
        explanation: "Für MEINE vor feminin: 'mi ciudad' (keine Änderung für Geschlecht). Diese winzige Heimatstadt von tausend Einwohnern bietet wahrscheinlich enge Gemeinschaft aber begrenzte Möglichkeiten."
      },
      {
        id: "pos_adj_12",
        question: "_____ compañeros de clase son muy amables y colaborativos siempre conmigo.",
        translation: "Meine Klassenkameraden sind immer sehr freundlich und kooperativ mit mir.",
        options: ["Mis", "Mi", "Míos", "Mías"],
        correct: "Mis",
        explanation: "Für MEINE vor Plural: 'mis compañeros'. Diese positive Klassendynamik mit hilfsbereiten Mitschülern erleichtert Lernen und macht Schule angenehmer."
      },
      {
        id: "pos_adj_13",
        question: "_____ padres celebran cincuenta años de matrimonio feliz este mes próximo.",
        translation: "Seine/Ihre Eltern feiern nächsten Monat fünfzig Jahre glückliche Ehe.",
        options: ["Sus", "Su", "Suyos", "Suyas"],
        correct: "Sus",
        explanation: "Für SEINE/IHRE vor Plural: 'sus padres'. Diese goldene Hochzeit nach fünfzig Jahren ist bemerkenswerter Meilenstein, der Beständigkeit und Liebe würdigt."
      },
      {
        id: "pos_adj_14",
        question: "_____ libro de matemáticas está en la mochila que dejé allí.",
        translation: "Mein Mathematikbuch ist im Rucksack, den ich dort gelassen habe.",
        options: ["Mi", "Mío", "Mis", "Mía"],
        correct: "Mi",
        explanation: "Für MEIN vor Singular: 'mi libro'. Dieses vergessene Mathebuch im Rucksack könnte problematisch sein, wenn Hausaufgaben darin sind."
      },
      {
        id: "pos_adj_15",
        question: "_____ hermana mayor es médica en el hospital central de la capital.",
        translation: "Meine ältere Schwester ist Ärztin im Zentralkrankenhaus der Hauptstadt.",
        options: ["Mi", "Mío", "Mis", "Mía"],
        correct: "Mi",
        explanation: "Für MEINE vor Singular: 'mi hermana'. Dieser Arztberuf der älteren Schwester in prestigeträchtigem Krankenhaus ist beeindruckende Karriere."
      }
    ]
  },

  aunque_pero_sino: {
    name: "Obwohl, aber, sondern",
    description: "Aunque, pero, sino - verschiedene Kontraste ausdrücken",
    icon: Heart,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "contr_1",
        question: "Me gusta el libro, _____ es un poco largo para leer.",
        translation: "Mir gefällt das Buch, aber es ist ein bisschen lang zum Lesen.",
        options: ["pero", "sino", "aunque", "mas"],
        correct: "pero",
        explanation: "Für einfaches ABER nutzen wir 'pero': verbindet zwei Ideen mit leichtem Kontrast. Deutsche 'aber' ist direkt 'pero'. Diese leichte Kritik an Buchlänge mindert nicht Gesamtzufriedenheit mit Inhalt."
      },
      {
        id: "contr_2",
        question: "No es francés, _____ italiano - te equivocaste completamente de país.",
        translation: "Er ist nicht Französisch, sondern Italienisch - du hast dich komplett beim Land geirrt.",
        options: ["sino", "pero", "aunque", "mas"],
        correct: "sino",
        explanation: "Für SONDERN (Korrektur nach Negation) nutzen wir 'sino': 'no es X, sino Y'. Deutsche 'sondern' ist 'sino'. Diese Nationalitätskorrektur klärt wichtiges Missverständnis über Herkunft."
      },
      {
        id: "contr_3",
        question: "_____ está lloviendo mucho, voy a salir a caminar afuera.",
        translation: "Obwohl es viel regnet, werde ich draußen spazieren gehen.",
        options: ["Aunque", "Pero", "Sino", "Mas"],
        correct: "Aunque",
        explanation: "Für OBWOHL nutzen wir 'aunque': drückt stärkeren Kontrast als 'pero' aus. Diese Entschlossenheit, trotz Regen spazieren zu gehen, zeigt, dass Wetter Pläne nicht ändern wird."
      },
      {
        id: "contr_4",
        question: "Estudié mucho, _____ no aprobé el examen difícil desafortunadamente.",
        translation: "Ich lernte viel, aber ich bestand die schwere Prüfung leider nicht.",
        options: ["pero", "sino", "aunque", "mas"],
        correct: "pero",
        explanation: "Einfaches 'pero' für enttäuschenden Kontrast: Anstrengung führte nicht zu Erfolg. Diese Situation, wo Lernen nicht zu Bestehen führte, ist frustrierend und erfordert Analyse, was schiefging."
      },
      {
        id: "contr_5",
        question: "No quiero café, _____ té verde natural sin azúcar añadida.",
        translation: "Ich will keinen Kaffee, sondern natürlichen grünen Tee ohne zugesetzten Zucker.",
        options: ["sino", "pero", "aunque", "mas"],
        correct: "sino",
        explanation: "Nach Negation mit Alternative: 'no X, sino Y' (nicht X, sondern Y). Diese klare Getränkepräferenz für Tee über Kaffee zeigt gesundheitsbewusste Wahl."
      },
      {
        id: "contr_6",
        question: "_____ es caro, voy a comprarlo porque lo necesito urgentemente ahora.",
        translation: "Obwohl es teuer ist, werde ich es kaufen, weil ich es jetzt dringend brauche.",
        options: ["Aunque", "Pero", "Sino", "Mas"],
        correct: "Aunque",
        explanation: "Für OBWOHL mit Subjuntivo oder Indikativ: 'aunque es caro'. Preis hindert nicht am Kauf. Diese Notwendigkeit überschreibt Kostenbedenken bei dringendem Bedarf."
      },
      {
        id: "contr_7",
        question: "Es inteligente, _____ a veces actúa de manera muy impulsiva rápida.",
        translation: "Er ist intelligent, aber manchmal handelt er sehr schnell impulsiv.",
        options: ["pero", "sino", "aunque", "mas"],
        correct: "pero",
        explanation: "Einfaches 'pero' zeigt Widerspruch zwischen Intelligenz und impulsivem Handeln. Diese Verhaltenskombination zeigt, dass Intelligenz nicht immer zu bedachten Entscheidungen führt."
      },
      {
        id: "contr_8",
        question: "No vino solo, _____ que trajo a toda su familia numerosa.",
        translation: "Er kam nicht allein, sondern er brachte seine ganze zahlreiche Familie mit.",
        options: ["sino", "pero", "aunque", "mas"],
        correct: "sino",
        explanation: "Mit VERB nach 'sino': braucht 'que' → 'sino que trajo' (sondern dass er brachte). Diese überraschende Ankunft mit ganzer Familie statt allein ändert Dynamik des Besuchs komplett."
      },
      {
        id: "contr_9",
        question: "Me encanta viajar, _____ no tengo suficiente dinero este año.",
        translation: "Ich liebe es zu reisen, aber ich habe dieses Jahr nicht genug Geld.",
        options: ["pero", "sino", "aunque", "mas"],
        correct: "pero",
        explanation: "Einfaches 'pero' für Bedauern: Wunsch vs. Realität. Diese finanzielle Einschränkung verhindert Reiselust, typischer Konflikt zwischen Träumen und Budget."
      },
      {
        id: "contr_10",
        question: "_____ tengo miedo a volar, voy a tomar el avión mañana.",
        translation: "Obwohl ich Angst vorm Fliegen habe, werde ich morgen das Flugzeug nehmen.",
        options: ["Aunque", "Pero", "Sino", "Mas"],
        correct: "Aunque",
        explanation: "Für OBWOHL mit Furcht: 'aunque tengo miedo'. Mut überschreibt Angst. Diese Entscheidung trotz Flugangst zu fliegen zeigt Notwendigkeit oder Überwindung von Phobie."
      },
      {
        id: "contr_11",
        question: "Ella no es tímida, _____ muy extrovertida y social con todos.",
        translation: "Sie ist nicht schüchtern, sondern sehr extrovertiert und gesellig mit allen.",
        options: ["sino", "pero", "aunque", "mas"],
        correct: "sino",
        explanation: "Korrektur mit 'sino': 'no es X, sino Y' (ist nicht X, sondern Y). Diese Klarstellung über extrovertierte Persönlichkeit korrigiert falschen ersten Eindruck."
      },
      {
        id: "contr_12",
        question: "Trabaja mucho, _____ nunca se queja de nada en absoluto.",
        translation: "Er arbeitet viel, aber er beschwert sich nie über irgendetwas.",
        options: ["pero", "sino", "aunque", "mas"],
        correct: "pero",
        explanation: "Einfaches 'pero' zeigt positiven Kontrast: trotz harter Arbeit keine Klagen. Diese stoische Arbeitseinstellung ohne Beschweren ist bewundernswerte Eigenschaft."
      },
      {
        id: "contr_13",
        question: "No fui al cine, _____ que me quedé en casa descansando tranquilo.",
        translation: "Ich ging nicht ins Kino, sondern ich blieb ruhig zu Hause und ruhte mich aus.",
        options: ["sino", "pero", "aunque", "mas"],
        correct: "sino",
        explanation: "Mit Verb: 'sino que' (sondern dass). Zeigt Alternative zu negierter Handlung. Diese Entscheidung für Heimruhe statt Kino ist Priorisierung von Erholung über Unterhaltung."
      },
      {
        id: "contr_14",
        question: "_____ no me gusta madrugar, lo hago todos los días laborables.",
        translation: "Obwohl ich nicht gerne früh aufstehe, tue ich es jeden Werktag.",
        options: ["Aunque", "Pero", "Sino", "Mas"],
        correct: "Aunque",
        explanation: "Für OBWOHL mit Abneigung: 'aunque no me gusta'. Pflicht überwindet Präferenz. Diese tägliche Überwindung für frühe Arbeit zeigt Verantwortungsbewusstsein trotz persönlicher Unlust."
      },
      {
        id: "contr_15",
        question: "Es difícil, _____ no imposible - podemos lograrlo con esfuerzo unidos.",
        translation: "Es ist schwer, aber nicht unmöglich - wir können es mit vereinter Anstrengung schaffen.",
        options: ["pero", "sino", "aunque", "mas"],
        correct: "pero",
        explanation: "Einfaches 'pero' für hoffnungsvolle Einschränkung: schwer aber machbar. Diese motivierende Aussage ermutigt trotz Schwierigkeit nicht aufzugeben."
      }
    ]
  },

  cual_vs_que: {
    name: "Cuál vs. Qué (Fragewörter)",
    description: "Welcher vs. Was - richtige Fragewörter wählen",
    icon: Star,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "cual_que_1",
        question: "¿_____ es tu nombre completo con apellidos?",
        translation: "Was ist dein vollständiger Name mit Nachnamen?",
        options: ["Cuál", "Qué", "Cuáles", "Quién"],
        correct: "Cuál",
        explanation: "Für AUSWAHL aus Möglichkeiten (Namen): '¿cuál es?' (welcher ist?). Vor 'ser' meist 'cuál'. Deutsche 'was' wird oft zu 'cuál', nicht 'qué'. Diese Frage nach vollständigem Namen ist für formelle Vorstellung."
      },
      {
        id: "cual_que_2",
        question: "¿_____ hora es ahora mismo en tu reloj de pulsera?",
        translation: "Wie viel Uhr ist es gerade jetzt auf deiner Armbanduhr?",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für 'WIE VIEL UHR': '¿qué hora es?' ist FESTE Phrase. Immer 'qué', nicht 'cuál'. Diese Uhrzeitfrage ist alltägliche Orientierung über aktuelle Zeit."
      },
      {
        id: "cual_que_3",
        question: "¿_____ de estos libros prefieres leer primero de todos?",
        translation: "Welches dieser Bücher ziehst du vor, zuerst von allen zu lesen?",
        options: ["Cuál", "Qué", "Cuáles", "Quién"],
        correct: "Cuál",
        explanation: "Für Auswahl AUS Gruppe: '¿cuál de estos?' (welches von diesen?). Zeigt auf begrenzte Optionen. Diese Auswahlhilfe bei mehreren Büchern kann Leseprioritäten klären."
      },
      {
        id: "cual_que_4",
        question: "¿_____ estudias en la universidad actualmente este semestre?",
        translation: "Was studierst du dieses Semester aktuell an der Universität?",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für WAS (welches Fach): '¿qué estudias?' fragt nach Studienfach. Nicht 'cuál'. Diese Frage über Studienrichtung ist typische Kennenlern-Konversation unter Studenten."
      },
      {
        id: "cual_que_5",
        question: "¿_____ son tus películas favoritas de todos los tiempos?",
        translation: "Welche sind deine Lieblingsfilme aller Zeiten?",
        options: ["Cuáles", "Qué", "Cuál", "Quién"],
        correct: "Cuáles",
        explanation: "Für WELCHE im Plural: '¿cuáles son?' (welche sind?). Mit 'ser' meist 'cuál/cuáles'. Diese Frage nach Filmfavoriten öffnet Gespräch über Geschmack und mögliche gemeinsame Interessen."
      },
      {
        id: "cual_que_6",
        question: "¿_____ haces en tu tiempo libre disponible los fines de semana?",
        translation: "Was machst du in deiner verfügbaren Freizeit an Wochenenden?",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für WAS TUST DU: '¿qué haces?' (was machst du?). Nicht 'cuál'. Diese Frage über Freizeitgestaltung zeigt Interesse an Hobbys und Interessen der Person."
      },
      {
        id: "cual_que_7",
        question: "¿_____ es la capital actual de España en Europa?",
        translation: "Was ist die aktuelle Hauptstadt von Spanien in Europa?",
        options: ["Cuál", "Qué", "Cuáles", "Quién"],
        correct: "Cuál",
        explanation: "Vor 'ser' für Auswahl: '¿cuál es la capital?' (welche ist die Hauptstadt?). Obwohl Deutsche 'was' sagen, Spanisch nutzt 'cuál'. Diese geografische Frage testet Grundwissen über Spanien."
      },
      {
        id: "cual_que_8",
        question: "¿_____ significa esta palabra en español exactamente ahora?",
        translation: "Was bedeutet dieses Wort jetzt genau auf Spanisch?",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für BEDEUTUNG: '¿qué significa?' (was bedeutet?). Immer 'qué' bei Definitionen. Diese Vokabelfrage ist zentral beim Sprachenlernen für Verständnisaufbau."
      },
      {
        id: "cual_que_9",
        question: "¿_____ de las dos opciones crees que es mejor para nosotros?",
        translation: "Welche der beiden Optionen glaubst du ist besser für uns?",
        options: ["Cuál", "Qué", "Cuáles", "Quién"],
        correct: "Cuál",
        explanation: "Für Auswahl zwischen ZWEI: '¿cuál de las dos?' (welche von beiden?). Limitierte Auswahl verlangt 'cuál'. Diese Entscheidungsfrage zwischen zwei Alternativen sucht Meinung für beste Wahl."
      },
      {
        id: "cual_que_10",
        question: "¿_____ día es hoy? Perdí la cuenta completamente esta semana.",
        translation: "Welcher Tag ist heute? Ich habe diese Woche völlig den Überblick verloren.",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für 'WELCHER TAG': '¿qué día es?' ist feste Phrase. Immer 'qué' bei Datum/Tag. Diese Desorientierung über Wochentag zeigt stressige Woche, wo Tage verschwimmen."
      },
      {
        id: "cual_que_11",
        question: "¿_____ es tu dirección de correo electrónico actual personal?",
        translation: "Was ist deine aktuelle persönliche E-Mail-Adresse?",
        options: ["Cuál", "Qué", "Cuáles", "Quién"],
        correct: "Cuál",
        explanation: "Vor 'ser' für spezifische Info: '¿cuál es tu email?' Auswahl deiner E-Mail-Adresse aus allen möglichen. Diese Kontaktdaten-Frage ist für Kommunikation oder Registrierung notwendig."
      },
      {
        id: "cual_que_12",
        question: "¿_____ quieres comer para la cena de esta noche?",
        translation: "Was willst du heute Abend zum Abendessen essen?",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für WAS (allgemein): '¿qué quieres comer?' Nicht begrenzte Auswahl. Diese offene Frage über Essenswünsche gibt volle Freiheit bei Menüwahl ohne Einschränkungen."
      },
      {
        id: "cual_que_13",
        question: "¿_____ son tus colores preferidos para decorar la sala nueva?",
        translation: "Welche sind deine bevorzugten Farben, um das neue Wohnzimmer zu dekorieren?",
        options: ["Cuáles", "Qué", "Cuál", "Quién"],
        correct: "Cuáles",
        explanation: "Plural 'cuáles' vor 'ser': '¿cuáles son tus colores?' (welche sind?). Diese Designfrage hilft, Raumgestaltung nach persönlichem Geschmack zu planen."
      },
      {
        id: "cual_que_14",
        question: "¿_____ es eso que tienes en la mano derecha ahora?",
        translation: "Was ist das, was du jetzt in der rechten Hand hast?",
        options: ["Qué", "Cuál", "Cuáles", "Quién"],
        correct: "Qué",
        explanation: "Für WAS IST DAS (Definition): '¿qué es eso?' Identifiziert unbekanntes Objekt. Diese neugierige Frage versucht herauszufinden, was du hältst."
      },
      {
        id: "cual_que_15",
        question: "¿_____ prefieres - el azul o el rojo para tu coche?",
        translation: "Was bevorzugst du - das Blaue oder das Rote für dein Auto?",
        options: ["Cuál", "Qué", "Cuáles", "Quién"],
        correct: "Cuál",
        explanation: "Für Auswahl zwischen Optionen: '¿cuál prefieres?' Zwei klare Alternativen. Diese Farbpräferenz-Frage für Autokauf ist wichtige ästhetische Entscheidung, die Jahre bleibt."
      }
    ]
  }
};

export default part10Categories;
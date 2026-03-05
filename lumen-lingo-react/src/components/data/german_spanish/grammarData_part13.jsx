/**
 * GERMAN → SPANISH GRAMMAR - PART 13
 * 4 categories, 15 questions each
 */

import { Users, Layers, Brain, Compass } from "lucide-react";

export const part13Categories = {
  oraciones_condicionales: {
    name: "Oraciones Condicionales (Bedingungssätze)",
    description: "Si-Sätze - reale, mögliche und irreale Bedingungen",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "cond_1",
        question: "Si tengo tiempo mañana, _____ al gimnasio por la tarde.",
        translation: "Wenn ich morgen Zeit habe, werde ich nachmittags ins Fitnessstudio gehen.",
        options: ["iré", "voy", "iría", "fuera"],
        correct: "iré",
        explanation: "Typ 1 (REALE Bedingung): Si + Präsens, Futuro. 'Si tengo' (wenn ich habe) mit 'iré' (werde gehen). Diese wahrscheinliche Zukunft zeigt konkrete Pläne abhängig von verfügbarer Zeit."
      },
      {
        id: "cond_2",
        question: "Si _____ más dinero, viajaría por toda Europa completa.",
        translation: "Wenn ich mehr Geld hätte, würde ich durch ganz Europa reisen.",
        options: ["tuviera", "tengo", "tendría", "tenía"],
        correct: "tuviera",
        explanation: "Typ 2 (HYPOTHESE Gegenwart): Si + Imperfecto Subjuntivo, Condicional. 'Si tuviera' (wenn ich hätte) mit 'viajaría'. Diese Traumreise ist aktuell unrealistisch wegen Geldmangel."
      },
      {
        id: "cond_3",
        question: "Si estudias regularmente, _____ buenos resultados académicos seguros.",
        translation: "Wenn du regelmäßig lernst, wirst du sichere gute akademische Ergebnisse bekommen.",
        options: ["tendrás", "tienes", "tendrías", "tuvieras"],
        correct: "tendrás",
        explanation: "Typ 1: Si + Präsens, Futuro. Diese realistische Wenn-dann-Beziehung zwischen Lernen und Erfolg ist pädagogisch motivierende Botschaft."
      },
      {
        id: "cond_4",
        question: "Si yo _____ tú, aceptaría esa oferta de trabajo inmediatamente.",
        translation: "Wenn ich du wäre, würde ich dieses Jobangebot sofort annehmen.",
        options: ["fuera", "soy", "sería", "era"],
        correct: "fuera",
        explanation: "Feste Phrase 'si yo fuera tú' (wenn ich du wäre): Imperfecto Subjuntivo. Für Ratschläge aus hypothetischer Position. Dieser Rat empfiehlt schnelle Annahme des Angebots."
      },
      {
        id: "cond_5",
        question: "Si _____ más temprano, no perderás el tren de la mañana.",
        translation: "Wenn du früher losgehst, wirst du den Morgenzug nicht verpassen.",
        options: ["sales", "salgas", "saldrás", "salieras"],
        correct: "sales",
        explanation: "Typ 1: Si + Präsens, Futuro. 'Si sales' (wenn du gehst). Dieser praktische Zeitmanagement-Rat verhindert verpasste Verbindungen."
      },
      {
        id: "cond_6",
        question: "Si hubiera sabido, no _____ _____ a la fiesta aburrida ayer.",
        translation: "Wenn ich es gewusst hätte, wäre ich gestern nicht zur langweiligen Party gegangen.",
        options: ["habría ido", "iría", "fui", "voy"],
        correct: "habría ido",
        explanation: "Typ 3 (IRREALE VERGANGENHEIT): Si + Pluscuamperfecto Subjuntivo, Condicional Compuesto. 'Si hubiera sabido' mit 'habría ido'. Dieser Bedauern über Partybesuch kann nicht rückgängig gemacht werden."
      },
      {
        id: "cond_7",
        question: "Si llueve mañana, _____ el partido de fútbol al domingo.",
        translation: "Wenn es morgen regnet, werden sie das Fußballspiel auf Sonntag verschieben.",
        options: ["pospondrán", "posponen", "pospondrían", "pospusieran"],
        correct: "pospondrán",
        explanation: "Typ 1 für zukünftige Möglichkeit: Si + Präsens, Futuro. Diese wetterabhängige Spielplanung ist vernünftige Vorsichtsmaßnahme."
      },
      {
        id: "cond_8",
        question: "Si _____ rico, compraría una casa grande en la playa hermosa.",
        translation: "Wenn ich reich wäre, würde ich ein großes Haus am schönen Strand kaufen.",
        options: ["fuera", "soy", "sería", "era"],
        correct: "fuera",
        explanation: "Typ 2: Si + Imperfecto Subjuntivo für gegenwärtige Hypothese. Diese Strandhaus-Fantasie ist typischer Traum vieler Menschen."
      },
      {
        id: "cond_9",
        question: "Si no _____ tanto, podrías ahorrar más dinero mensualmente ahora.",
        translation: "Wenn du nicht so viel ausgeben würdest, könntest du jetzt monatlich mehr Geld sparen.",
        options: ["gastaras", "gastas", "gastarías", "gastabas"],
        correct: "gastaras",
        explanation: "Typ 2: Si + Imperfecto Subjuntivo, Condicional. Dieser Finanzrat empfiehlt Ausgabenreduzierung für besseres Sparen."
      },
      {
        id: "cond_10",
        question: "Si _____ _____ el bus, habríamos llegado a tiempo perfectamente.",
        translation: "Wenn wir den Bus erwischt hätten, wären wir perfekt pünktlich angekommen.",
        options: ["hubiéramos tomado", "tomáramos", "tomamos", "tomaríamos"],
        correct: "hubiéramos tomado",
        explanation: "Typ 3: Si + Pluscuamperfecto Subjuntivo für verpasste Vergangenheit. Dieser verpasste Bus führte zu Verspätung - unveränderbare Vergangenheit."
      },
      {
        id: "cond_11",
        question: "Si me _____ ayuda, te la prestaré con mucho gusto siempre.",
        translation: "Wenn du meine Hilfe brauchst, werde ich sie dir immer sehr gerne geben.",
        options: ["necesitas", "necesitaras", "necesitarás", "necesitarías"],
        correct: "necesitas",
        explanation: "Typ 1: Si + Präsens für reale zukünftige Möglichkeit. Dieses großzügige Hilfsangebot zeigt Bereitschaft zu unterstützen."
      },
      {
        id: "cond_12",
        question: "Si _____ más joven, estudiaría medicina en la universidad completa.",
        translation: "Wenn ich jünger wäre, würde ich Medizin an der kompletten Universität studieren.",
        options: ["fuera", "soy", "sería", "era"],
        correct: "fuera",
        explanation: "Typ 2 für gegenwärtige Unmöglichkeit: 'si fuera más joven' (wenn ich jünger wäre). Dieser unerfüllbare Wunsch zeigt Bedauern über verpasste Bildungschancen."
      },
      {
        id: "cond_13",
        question: "Si hubieras estudiado más, _____ _____ el examen sin problemas.",
        translation: "Wenn du mehr gelernt hättest, hättest du die Prüfung problemlos bestanden.",
        options: ["habrías aprobado", "aprobarías", "aprobaste", "apruebas"],
        correct: "habrías aprobado",
        explanation: "Typ 3: Vorwurf oder Bedauern über Vergangenheit. 'Si hubieras estudiado' mit 'habrías aprobado'. Dieser Hinweis auf verpasste Lernchance kann nicht mehr korrigiert werden."
      },
      {
        id: "cond_14",
        question: "Si no _____ cansado, saldría a correr al parque ahora.",
        translation: "Wenn ich nicht müde wäre, würde ich jetzt zum Park joggen gehen.",
        options: ["estuviera", "estoy", "estaría", "estaba"],
        correct: "estuviera",
        explanation: "Typ 2 mit 'estar': 'si no estuviera cansado' (wenn ich nicht müde wäre). Diese Müdigkeit verhindert aktuell Sport-Aktivität."
      },
      {
        id: "cond_15",
        question: "Si comes tanto dulce, _____ problemas de salud dental graves.",
        translation: "Wenn du so viel Süßes isst, wirst du ernste Zahngesundheitsprobleme bekommen.",
        options: ["tendrás", "tienes", "tendrías", "tuvieras"],
        correct: "tendrás",
        explanation: "Typ 1 als WARNUNG: Si + Präsens, Futuro. Dieser Gesundheitshinweis über Zuckerkonsum warnt vor zahnmedizinischen Konsequenzen."
      }
    ]
  },

  subjuntivo_duda: {
    name: "Subjuntivo con Duda (Konjunktiv mit Zweifel)",
    description: "Unsicherheit ausdrücken - vielleicht, möglicherweise",
    icon: Layers,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "subj_duda_1",
        question: "Dudo que ellos _____ a tiempo a la reunión importante mañana.",
        translation: "Ich bezweifle, dass sie morgen pünktlich zum wichtigen Treffen kommen.",
        options: ["lleguen", "llegan", "llegarán", "llegaron"],
        correct: "lleguen",
        explanation: "Nach 'dudar que' (bezweifeln) folgt SUBJUNTIVO: 'que lleguen'. Zweifel verlangt Konjunktiv. Diese Skepsis über Pünktlichkeit basiert wahrscheinlich auf früheren Verspätungen."
      },
      {
        id: "subj_duda_2",
        question: "No creo que _____ tan difícil como dicen todos realmente.",
        translation: "Ich glaube nicht, dass es wirklich so schwer ist, wie alle sagen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach negiertem 'creer' folgt Subjuntivo: 'no creo que sea' (glaube nicht, dass es ist). Positive 'creo' nimmt Indikativ. Diese Skepsis über Schwierigkeit hinterfragt Konsens."
      },
      {
        id: "subj_duda_3",
        question: "Es posible que _____ mañana según el pronóstico meteorológico.",
        translation: "Es ist möglich, dass es morgen laut Wettervorhersage regnet.",
        options: ["llueva", "llueve", "lloverá", "llovió"],
        correct: "llueva",
        explanation: "Nach 'es posible que' (es ist möglich) folgt Subjuntivo: Unsicherheit. Diese Wettervorhersage mit Unsicherheit rechtfertigt Regenschirm-Mitnahme als Vorsicht."
      },
      {
        id: "subj_duda_4",
        question: "Tal vez él _____ razón sobre este asunto complicado difícil.",
        translation: "Vielleicht hat er Recht bezüglich dieser schwierigen komplizierten Angelegenheit.",
        options: ["tenga", "tiene", "tendrá", "tuvo"],
        correct: "tenga",
        explanation: "Nach 'tal vez' (vielleicht) KANN Subjuntivo stehen: 'tal vez tenga' (vielleicht hat). Drückt höhere Unsicherheit als Indikativ. Diese Möglichkeit seiner Richtigkeit wird offen gelassen."
      },
      {
        id: "subj_duda_5",
        question: "No pienso que ella _____ suficiente experiencia para el puesto.",
        translation: "Ich denke nicht, dass sie genug Erfahrung für die Stelle hat.",
        options: ["tenga", "tiene", "tendrá", "tuvo"],
        correct: "tenga",
        explanation: "Nach negiertem 'pensar' folgt Subjuntivo: 'no pienso que tenga'. Diese Zweifel an Qualifikation könnte Einstellungsentscheidung beeinflussen."
      },
      {
        id: "subj_duda_6",
        question: "Quizás nosotros _____ tarde a la fiesta de cumpleaños grande.",
        translation: "Vielleicht kommen wir zu spät zur großen Geburtstagsparty.",
        options: ["lleguemos", "llegamos", "llegaremos", "llegáramos"],
        correct: "lleguemos",
        explanation: "Nach 'quizás' (vielleicht) steht oft Subjuntivo: 'quizás lleguemos'. Diese Unsicherheit über Ankunftszeit hängt von Verkehr oder anderen Faktoren ab."
      },
      {
        id: "subj_duda_7",
        question: "No estoy seguro de que _____ la verdad completa sobre lo ocurrido.",
        translation: "Ich bin nicht sicher, dass er die komplette Wahrheit über das Geschehene sagt.",
        options: ["diga", "dice", "dirá", "dijo"],
        correct: "diga",
        explanation: "Nach 'no estar seguro de que' folgt Subjuntivo: Unsicherheit über Wahrhaftigkeit. Dieser Zweifel an seiner Ehrlichkeit ist berechtigte Skepsis."
      },
      {
        id: "subj_duda_8",
        question: "Puede que _____ buen tiempo este fin de semana para actividades.",
        translation: "Es kann sein, dass dieses Wochenende gutes Wetter für Aktivitäten ist.",
        options: ["haga", "hace", "hará", "hizo"],
        correct: "haga",
        explanation: "Nach 'puede que' (kann sein, dass) folgt Subjuntivo: 'puede que haga'. Diese Wettermöglichkeit beeinflusst Wochenendplanung."
      },
      {
        id: "subj_duda_9",
        question: "Dudo mucho que ellos _____ terminar el proyecto a tiempo hoy.",
        translation: "Ich bezweifle sehr, dass sie das Projekt heute rechtzeitig beenden können.",
        options: ["puedan", "pueden", "podrán", "pudieron"],
        correct: "puedan",
        explanation: "Nach 'dudar' mit Verstärkung: Subjuntivo 'puedan' (können). Dieser starke Zweifel an rechtzeitiger Fertigstellung basiert auf bisherigem Fortschritt."
      },
      {
        id: "subj_duda_10",
        question: "No me parece que _____ una buena idea salir ahora afuera.",
        translation: "Mir scheint es nicht, dass es eine gute Idee ist, jetzt hinauszugehen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach negiertem 'parecer' folgt Subjuntivo: 'no me parece que sea'. Diese Skepsis über Timing basiert wahrscheinlich auf Wetter oder anderen Faktoren."
      },
      {
        id: "subj_duda_11",
        question: "Probablemente _____ mañana si tiene tiempo libre disponible suficiente.",
        translation: "Er wird wahrscheinlich morgen kommen, wenn er genug verfügbare freie Zeit hat.",
        options: ["venga", "viene", "vendrá", "vino"],
        correct: "venga",
        explanation: "Nach 'probablemente' (wahrscheinlich) KANN Subjuntivo stehen: betont Unsicherheit mehr. Diese Wahrscheinlichkeit ist nicht Gewissheit - Subjuntivo zeigt Vorbehalt."
      },
      {
        id: "subj_duda_12",
        question: "No creo que _____ suficiente comida para todos los invitados aquí.",
        translation: "Ich glaube nicht, dass hier genug Essen für alle Gäste ist.",
        options: ["haya", "hay", "habrá", "hubo"],
        correct: "haya",
        explanation: "Nach 'no creer que' mit 'haber': Subjuntivo 'haya' (es gebe). Diese Sorge über Essenmangel könnte Nachkauf erforderlich machen."
      },
      {
        id: "subj_duda_13",
        question: "Es dudoso que _____ buen tiempo para nuestro picnic planeado.",
        translation: "Es ist zweifelhaft, dass gutes Wetter für unser geplantes Picknick ist.",
        options: ["haga", "hace", "hará", "hizo"],
        correct: "haga",
        explanation: "Nach 'es dudoso que' (es ist zweifelhaft) folgt Subjuntivo. Diese Wetterunsicherheit gefährdet Outdoor-Pläne."
      },
      {
        id: "subj_duda_14",
        question: "Acaso _____ mañana - no estoy completamente seguro de eso.",
        translation: "Vielleicht komme ich morgen - ich bin mir dessen nicht völlig sicher.",
        options: ["venga", "vengo", "vendré", "vine"],
        correct: "venga",
        explanation: "Nach 'acaso' (vielleicht) steht Subjuntivo: starke Unsicherheit. Diese unverbindliche Antwort lässt alle Optionen offen."
      },
      {
        id: "subj_duda_15",
        question: "No parece que _____ interesado en el tema presentado hoy aquí.",
        translation: "Es scheint nicht, dass er am heute hier präsentierten Thema interessiert ist.",
        options: ["esté", "está", "estará", "estuvo"],
        correct: "esté",
        explanation: "Nach negiertem 'parecer que': Subjuntivo 'esté' (er sei). Diese Beobachtung mangelnden Interesses basiert auf seiner Körpersprache oder Reaktionen."
      }
    ]
  },

  subjuntivo_emocion: {
    name: "Subjuntivo con Emoción (Konjunktiv mit Gefühlen)",
    description: "Freude, Angst, Trauer - Emotionen verlangen Subjuntivo",
    icon: Brain,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "subj_emo_1",
        question: "Me alegra mucho que _____ bien en el examen final difícil.",
        translation: "Es freut mich sehr, dass du in der schweren Abschlussprüfung gut abgeschnitten hast.",
        options: ["hayas salido", "has salido", "saliste", "sales"],
        correct: "hayas salido",
        explanation: "Nach Gefühlsausdruck 'me alegra que' (es freut mich) folgt Subjuntivo: 'hayas salido' (du abgeschnitten hast). Mit Perfekt für vollendete Handlung. Diese Freude über deinen Erfolg ist emotionale Reaktion."
      },
      {
        id: "subj_emo_2",
        question: "Temo que _____ demasiado tarde para resolver el problema ahora.",
        translation: "Ich fürchte, dass es jetzt zu spät ist, um das Problem zu lösen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'temer que' (fürchten) folgt Subjuntivo: 'temo que sea' (fürchte, dass es ist). Diese Sorge über verpasste Lösungszeit ist beunruhigend."
      },
      {
        id: "subj_emo_3",
        question: "Siento mucho que no _____ venir a mi fiesta de cumpleaños.",
        translation: "Es tut mir sehr leid, dass du nicht zu meiner Geburtstagsparty kommen kannst.",
        options: ["puedas", "puedes", "podrás", "pudiste"],
        correct: "puedas",
        explanation: "Nach 'sentir que' (leid tun, bedauern) folgt Subjuntivo: 'siento que no puedas'. Diese Enttäuschung über deine Abwesenheit ist emotional."
      },
      {
        id: "subj_emo_4",
        question: "Me sorprende que ella _____ hablar tantos idiomas diferentes fluidamente.",
        translation: "Es überrascht mich, dass sie so viele verschiedene Sprachen fließend sprechen kann.",
        options: ["sepa", "sabe", "sabrá", "sabía"],
        correct: "sepa",
        explanation: "Nach 'sorprender que' (überraschen) folgt Subjuntivo: 'me sorprende que sepa'. Diese Bewunderung ihrer Mehrsprachigkeit ist positive Überraschung."
      },
      {
        id: "subj_emo_5",
        question: "Espero que tú _____ feliz en tu nuevo trabajo y ciudad.",
        translation: "Ich hoffe, dass du in deiner neuen Arbeit und Stadt glücklich bist.",
        options: ["seas", "eres", "serás", "eras"],
        correct: "seas",
        explanation: "Nach 'esperar que' (hoffen) folgt Subjuntivo: 'espero que seas' (hoffe, dass du bist). Dieser Wunsch für dein Wohlergehen ist herzlich gemeint."
      },
      {
        id: "subj_emo_6",
        question: "Me da miedo que _____ demasiado peligroso hacer eso solo.",
        translation: "Ich habe Angst, dass es zu gefährlich ist, das allein zu machen.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'dar miedo que' (Angst machen) folgt Subjuntivo: Diese Sicherheitsbedenken sind berechtigte Vorsicht bei riskantem Vorhaben."
      },
      {
        id: "subj_emo_7",
        question: "Me encanta que _____ visitarme tan seguido últimamente siempre.",
        translation: "Ich liebe es, dass du mich in letzter Zeit immer so oft besuchst.",
        options: ["vengas", "vienes", "vendrás", "viniste"],
        correct: "vengas",
        explanation: "Nach 'encantar que' (begeistern, lieben) folgt Subjuntivo: 'me encanta que vengas'. Diese Freude über häufige Besuche zeigt Wertschätzung der Freundschaft."
      },
      {
        id: "subj_emo_8",
        question: "Qué pena que no _____ acompañarnos al viaje de fin de semana.",
        translation: "Wie schade, dass du uns nicht zur Wochenendreise begleiten kannst.",
        options: ["puedas", "puedes", "podrás", "pudiste"],
        correct: "puedas",
        explanation: "Nach 'qué pena que' (wie schade) folgt Subjuntivo: emotionale Reaktion. Diese Enttäuschung über deine Absage ist verständlich."
      },
      {
        id: "subj_emo_9",
        question: "Me preocupa que _____ enfermo - deberías ver al doctor pronto.",
        translation: "Es beunruhigt mich, dass du krank bist - du solltest bald zum Arzt gehen.",
        options: ["estés", "estás", "estarás", "estabas"],
        correct: "estés",
        explanation: "Nach 'preocupar que' (beunruhigen) folgt Subjuntivo: 'me preocupa que estés'. Diese Sorge um Gesundheit motiviert Arztempfehlung."
      },
      {
        id: "subj_emo_10",
        question: "Es una lástima que no _____ más tiempo juntos como antes.",
        translation: "Es ist schade, dass wir nicht mehr Zeit zusammen wie früher haben.",
        options: ["tengamos", "tenemos", "tendremos", "teníamos"],
        correct: "tengamos",
        explanation: "Nach 'es una lástima que' (es ist schade) folgt Subjuntivo. Diese Nostalgie über weniger gemeinsame Zeit reflektiert Lebensveränderungen."
      },
      {
        id: "subj_emo_11",
        question: "Me molesta que la gente _____ tan ruidosa en la biblioteca.",
        translation: "Es stört mich, dass die Leute in der Bibliothek so laut sind.",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "Nach 'molestar que' (stören) folgt Subjuntivo: emotionale Reaktion. Diese Verärgerung über Lärm in Ruheraum ist berechtigt."
      },
      {
        id: "subj_emo_12",
        question: "Nos emociona que ustedes _____ visitarnos el próximo mes finalmente.",
        translation: "Es bewegt uns, dass Sie uns nächsten Monat endlich besuchen kommen.",
        options: ["vayan a", "van a", "irán a", "fueron a"],
        correct: "vayan a",
        explanation: "Nach 'emocionar que' (bewegen, rühren) folgt Subjuntivo: 'nos emociona que vayan'. Diese Vorfreude auf Besuch zeigt emotionale Bindung."
      },
      {
        id: "subj_emo_13",
        question: "Temo que no _____ suficiente dinero para pagar todas las cuentas.",
        translation: "Ich fürchte, dass nicht genug Geld da ist, um alle Rechnungen zu bezahlen.",
        options: ["haya", "hay", "habrá", "hubo"],
        correct: "haya",
        explanation: "Nach 'temer que' mit 'haber': Subjuntivo 'haya' (es gebe). Diese finanzielle Sorge ist stressvolle Situation."
      },
      {
        id: "subj_emo_14",
        question: "Me frustra que siempre _____ los mismos errores repetidamente.",
        translation: "Es frustriert mich, dass du immer dieselben Fehler wiederholt machst.",
        options: ["cometas", "cometes", "cometerás", "cometiste"],
        correct: "cometas",
        explanation: "Nach 'frustrar que' folgt Subjuntivo: emotionale Reaktion auf Verhalten. Diese Frustration über Fehlerwiederholung ist verständlich."
      },
      {
        id: "subj_emo_15",
        question: "Qué bueno que _____ encontrado un trabajo bien pagado excelente.",
        translation: "Wie gut, dass du einen ausgezeichneten gut bezahlten Job gefunden hast.",
        options: ["hayas", "has", "habías", "hubiste"],
        correct: "hayas",
        explanation: "Nach 'qué bueno que' (wie gut, dass) folgt Subjuntivo Perfekt: 'hayas encontrado'. Diese Freude über deinen Jobfund ist aufrichtige Gratulation."
      }
    ]
  },

  cambios_ortograficos: {
    name: "Cambios Ortográficos (Rechtschreibänderungen)",
    description: "C→QU, G→GU, Z→C - Schreibung ändert sich bei Konjugation",
    icon: Compass,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "ortog_1",
        question: "Yo _____ temprano ayer para evitar el tráfico pesado matutino.",
        translation: "Ich ging gestern früh los, um den schweren Morgenverkehr zu vermeiden.",
        options: ["saqué", "sacé", "saco", "saca"],
        correct: "saqué",
        explanation: "Verben auf '-car' ändern C→QU vor 'e': 'sacar' wird zu 'saqué' (nicht 'sacé'). Dies erhält den [k] Laut. Diese Rechtschreibregel ist wichtig für korrekte Konjugation."
      },
      {
        id: "ortog_2",
        question: "Yo _____ al fútbol con mis amigos todos los domingos siempre.",
        translation: "Ich spiele jeden Sonntag immer mit meinen Freunden Fußball.",
        options: ["juego", "jugo", "jueco", "jugo"],
        correct: "juego",
        explanation: "Verben auf '-gar' ändern G→GU vor 'e': 'jugar' wird zu 'juego' in 1. Person Präsens ist regulär, aber 'jugué' im Pretérito. Diese Sonntagsfußball-Tradition ist wöchentliche Freizeitaktivität."
      },
      {
        id: "ortog_3",
        question: "Ayer _____ muy tarde a casa después de la fiesta nocturna.",
        translation: "Gestern kam ich nach der nächtlichen Party sehr spät nach Hause.",
        options: ["llegué", "llegé", "llego", "llega"],
        correct: "llegué",
        explanation: "Verben auf '-gar': G→GU vor 'e' im Pretérito: 'llegar' → 'llegué' (nicht 'llegé'). Diese späte Heimkehr nach Party ist typisches Wochenend-Szenario."
      },
      {
        id: "ortog_4",
        question: "Yo _____ la luz antes de salir de la habitación oscura.",
        translation: "Ich machte das Licht aus, bevor ich das dunkle Zimmer verließ.",
        options: ["apagué", "apagé", "apago", "apaga"],
        correct: "apagué",
        explanation: "Verben auf '-gar': 'apagar' → 'apagué' (C→GU vor 'e'). Diese Energiespar-Gewohnheit ist umweltbewusst und kostensparend."
      },
      {
        id: "ortog_5",
        question: "Yo _____ la comida para toda mi familia cada domingo tradicional.",
        translation: "Ich koche jeden traditionellen Sonntag das Essen für meine ganze Familie.",
        options: ["cocino", "cuezo", "cozo", "cueco"],
        correct: "cocino",
        explanation: "Verb 'cocinar' (kochen) ist REGULÄR ohne Rechtschreibänderung: 'cocino'. Nicht mit 'cocer' verwechseln. Diese Sonntagskoch-Tradition pflegt Familienessen-Kultur."
      },
      {
        id: "ortog_6",
        question: "Yo _____ de Madrid - es mi ciudad natal querida original.",
        translation: "Ich bin aus Madrid - es ist meine liebe ursprüngliche Heimatstadt.",
        options: ["soy", "so", "seo", "soi"],
        correct: "soy",
        explanation: "Verb 'ser' ist hochgradig IRREGULÄR: 'soy' (ich bin). Keine Rechtschreibregel, einfach lernen. Diese Madrider Herkunft ist Teil der Identität."
      },
      {
        id: "ortog_7",
        question: "Ayer _____ mi libro favorito en el café y lo perdí.",
        translation: "Gestern vergaß ich mein Lieblingsbuch im Café und verlor es.",
        options: ["olvidé", "olbidé", "olvido", "olvida"],
        correct: "olvidé",
        explanation: "Verb 'olvidar' ändert sich NICHT orthografisch: 'olvidé' ist regulär. Dieses vergessene Buch im Café ist ärgerlicher Verlust."
      },
      {
        id: "ortog_8",
        question: "Yo _____ el piano desde los cinco años de edad pequeña.",
        translation: "Ich spiele seit dem kleinen Alter von fünf Jahren Klavier.",
        options: ["toco", "tueco", "tocu", "toque"],
        correct: "toco",
        explanation: "Verb 'tocar' ist regulär in Präsens: 'toco'. Aber Pretérito: 'toqué' (C→QU vor 'e'). Diese früh begonnene Musikalität zeigt jahrelange Übung."
      },
      {
        id: "ortog_9",
        question: "Yo _____ a leer a los cuatro años precoces tempranos.",
        translation: "Ich lernte im frühen frühreifen Alter von vier Jahren lesen.",
        options: ["empecé", "empezé", "empiezo", "empieza"],
        correct: "empecé",
        explanation: "Verben auf '-zar': Z→C vor 'e': 'empezar' → 'empecé' (nicht 'empezé'). Dieser frühe Lesebeginn zeigt überdurchschnittliche Entwicklung."
      },
      {
        id: "ortog_10",
        question: "Ayer _____ toda la casa a fondo completamente de arriba abajo.",
        translation: "Gestern putzte ich das ganze Haus gründlich komplett von oben bis unten.",
        options: ["limpié", "limpeé", "limpio", "limpia"],
        correct: "limpié",
        explanation: "Verb 'limpiar' ist regulär: 'limpié'. Diese Tiefenreinigung des ganzen Hauses ist anstrengende aber befriedigende Hausarbeit."
      },
      {
        id: "ortog_11",
        question: "Yo _____ con mis amigos anoche sobre política actual controversial.",
        translation: "Ich diskutierte gestern Abend mit meinen Freunden über aktuelle kontroverse Politik.",
        options: ["discutí", "discuté", "discuto", "discute"],
        correct: "discutí",
        explanation: "Verb 'discutir' ist regulär: 'discutí'. Diese politische Debatte unter Freunden kann lebhaft aber auch konfliktreich sein."
      },
      {
        id: "ortog_12",
        question: "Yo _____ todos los días al trabajo sin falta desde mi casa.",
        translation: "Ich fahre jeden Tag ohne Ausnahme von meinem Haus zur Arbeit.",
        options: ["voy", "vo", "veo", "voi"],
        correct: "voy",
        explanation: "Verb 'ir' ist extrem irregulär: 'voy' (ich gehe). Keine Rechtschreibregel, Spezialfall. Diese tägliche Arbeitsfahrt ist Routine."
      },
      {
        id: "ortog_13",
        question: "Ayer _____ el examen final sin ningún problema en absoluto.",
        translation: "Gestern legte ich die Abschlussprüfung ohne jegliches Problem ab.",
        options: ["hice", "hací", "hago", "hace"],
        correct: "hice",
        explanation: "Verb 'hacer' ist irregulär: 'hice' (ich machte). Keine Rechtschreibregel sondern Irregularität. Diese problemlose Prüfungsabsolvierung ist Erfolg."
      },
      {
        id: "ortog_14",
        question: "Yo _____ la guitarra eléctrica en una banda de rock juvenil.",
        translation: "Ich spiele E-Gitarre in einer jugendlichen Rockband.",
        options: ["toco", "tueco", "tocu", "toque"],
        correct: "toco",
        explanation: "Präsens von 'tocar' ist regulär: 'toco'. Diese Bandmitgliedschaft ist kreatives musikalisches Hobby."
      },
      {
        id: "ortog_15",
        question: "Ayer _____ a estudiar medicina en la universidad estatal pública.",
        translation: "Gestern fing ich an, Medizin an der öffentlichen staatlichen Universität zu studieren.",
        options: ["empecé", "empezé", "empezo", "empieza"],
        correct: "empecé",
        explanation: "Verben auf '-zar': 'empezar' → 'empecé' (Z→C vor 'e'). Dieser Studienbeginn ist wichtiger Lebensschritt zur Arztkarriere."
      }
    ]
  }
};

export default part13Categories;
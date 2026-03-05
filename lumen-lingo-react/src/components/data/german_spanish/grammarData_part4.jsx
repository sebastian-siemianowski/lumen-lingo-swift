/**
 * GERMAN → SPANISH GRAMMAR - PART 4
 * 4 categories, 15 questions each
 */

import { Zap, Cloud, Star, Heart } from "lucide-react";

export const part4Categories = {
  subjuntivo_presente: {
    name: "Subjunktiv Präsens",
    description: "Konjunktiv in Wunsch- und Befehlssätzen - wichtige Formen",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "subj_pres_1",
        question: "Espero que tú _____ bien en el examen mañana.",
        translation: "Ich hoffe, dass du morgen gut in der Prüfung abschneidest.",
        options: ["salgas", "sales", "saldrás", "saliste"],
        correct: "salgas",
        explanation: "Nach 'espero que' (ich hoffe, dass) brauchen wir SUBJUNTIVO im Spanischen: 'que tú salgas'. Das Deutsche hat hier Indikativ, aber Spanisch verwendet Konjunktiv für Hoffnungen und Wünsche. Diese Konstruktion drückt aus, dass das Ergebnis noch unsicher ist und du dir nur wünschst, dass es gut läuft."
      },
      {
        id: "subj_pres_2",
        question: "Es importante que ella _____ a tiempo cada día.",
        translation: "Es ist wichtig, dass sie jeden Tag pünktlich kommt.",
        options: ["llegue", "llega", "llegará", "llegó"],
        correct: "llegue",
        explanation: "Nach unpersönlichen Ausdrücken wie 'es importante que' (es ist wichtig, dass) folgt SUBJUNTIVO: 'que ella llegue'. Im Deutschen steht Indikativ. Diese Form wird verwendet, wenn wir etwas als notwendig oder wichtig bewerten, aber nicht sicher sind, ob es passiert."
      },
      {
        id: "subj_pres_3",
        question: "Quiero que ustedes _____ más español en casa.",
        translation: "Ich möchte, dass ihr zu Hause mehr Spanisch sprecht.",
        options: ["hablen", "hablan", "hablarán", "hablaron"],
        correct: "hablen",
        explanation: "Nach Verben des Wollens wie 'quiero que' folgt immer SUBJUNTIVO: 'que hablen'. Das Deutsche nutzt einfachen Infinitiv, aber Spanisch braucht Konjunktiv. Diese Konstruktion zeigt, dass du den Wunsch hast, aber die Ausführung liegt bei anderen Personen."
      },
      {
        id: "subj_pres_4",
        question: "No creo que él _____ la verdad sobre eso.",
        translation: "Ich glaube nicht, dass er die Wahrheit darüber sagt.",
        options: ["diga", "dice", "dirá", "dijo"],
        correct: "diga",
        explanation: "Nach negiertem 'creer' (nicht glauben) nutzen wir SUBJUNTIVO: 'no creo que diga'. Positive 'creo que' nimmt Indikativ, aber Negation bringt Zweifel. Diese Unterscheidung zeigt, dass deine Skepsis über die Wahrheit seiner Aussage grammatisch durch Konjunktiv ausgedrückt wird."
      },
      {
        id: "subj_pres_5",
        question: "Es necesario que nosotros _____ antes de las 9.",
        translation: "Es ist notwendig, dass wir vor 9 Uhr beginnen.",
        options: ["empecemos", "empezamos", "empezaremos", "empezamos"],
        correct: "empecemos",
        explanation: "Nach 'es necesario que' (es ist notwendig, dass) brauchen wir SUBJUNTIVO: 'que empecemos'. Diese Struktur drückt Notwendigkeit aus, die noch nicht erfüllt ist. Der Konjunktiv zeigt, dass die Handlung noch bevorsteht und als wichtige Anforderung gesehen wird."
      },
      {
        id: "subj_pres_6",
        question: "Dudo que ellos _____ a la fiesta esta noche.",
        translation: "Ich bezweifle, dass sie heute Abend zur Party kommen.",
        options: ["vengan", "vienen", "vendrán", "vinieron"],
        correct: "vengan",
        explanation: "Nach 'dudar que' (bezweifeln, dass) folgt SUBJUNTIVO: 'que vengan'. Zweifel erfordert Konjunktiv im Spanischen. Diese grammatische Form unterstreicht deine Unsicherheit über ihr Kommen, während deutsches 'bezweifeln' einfach mit Indikativ konstruiert wird."
      },
      {
        id: "subj_pres_7",
        question: "Te pido que me _____ con este proyecto difícil.",
        translation: "Ich bitte dich, dass du mir mit diesem schwierigen Projekt hilfst.",
        options: ["ayudes", "ayudas", "ayudarás", "ayudaste"],
        correct: "ayudes",
        explanation: "Nach 'pedir que' (bitten, dass) steht SUBJUNTIVO: 'que me ayudes'. Bitten und Wünschen verlangen Konjunktiv. Diese höfliche Bitte um Unterstützung wird durch den Konjunktiv als Wunsch markiert, dessen Erfüllung noch unsicher ist und von deiner Zustimmung abhängt."
      },
      {
        id: "subj_pres_8",
        question: "Es probable que _____ mañana según el pronóstico.",
        translation: "Es ist wahrscheinlich, dass es morgen laut Vorhersage regnet.",
        options: ["llueva", "llueve", "lloverá", "llovió"],
        correct: "llueva",
        explanation: "Nach 'es probable que' (es ist wahrscheinlich, dass) folgt SUBJUNTIVO: 'que llueva'. Wahrscheinlichkeit ist keine Gewissheit. Diese Wettervorhersage nutzt Konjunktiv, weil trotz Prognose Unsicherheit bleibt - es könnte auch anders kommen als vorhergesagt."
      },
      {
        id: "subj_pres_9",
        question: "Me alegra que tú _____ feliz con tu trabajo nuevo.",
        translation: "Es freut mich, dass du mit deiner neuen Arbeit glücklich bist.",
        options: ["estés", "estás", "estarás", "estuviste"],
        correct: "estés",
        explanation: "Nach Gefühlsausdrücken wie 'me alegra que' (es freut mich, dass) kommt SUBJUNTIVO: 'que estés feliz'. Emotionale Reaktionen erfordern Konjunktiv. Diese Freude über dein Glück wird grammatisch durch den Konjunktiv als subjektive emotionale Bewertung gekennzeichnet."
      },
      {
        id: "subj_pres_10",
        question: "Es mejor que ella _____ temprano esta noche para descansar.",
        translation: "Es ist besser, dass sie heute Abend früh schlafen geht, um sich auszuruhen.",
        options: ["duerma", "duerme", "dormirá", "durmió"],
        correct: "duerma",
        explanation: "Nach 'es mejor que' (es ist besser, dass) nutzen wir SUBJUNTIVO: 'que duerma'. Empfehlungen und Ratschläge verlangen Konjunktiv. Diese Empfehlung für frühen Schlaf wird als Rat formuliert, dessen Befolgung von ihrer Entscheidung abhängt, nicht als Tatsache."
      },
      {
        id: "subj_pres_11",
        question: "Ojalá que _____ buen tiempo el fin de semana próximo.",
        translation: "Hoffentlich ist das Wetter am nächsten Wochenende schön.",
        options: ["haga", "hace", "hará", "hizo"],
        correct: "haga",
        explanation: "Nach 'ojalá que' (hoffentlich, dass) steht immer SUBJUNTIVO: 'que haga buen tiempo'. 'Ojalá' drückt starken Wunsch aus. Diese Hoffnung auf gutes Wetter für Wochenendpläne zeigt, dass Konjunktiv für Wünsche steht, deren Erfüllung außerhalb deiner Kontrolle liegt."
      },
      {
        id: "subj_pres_12",
        question: "No pienso que el examen _____ muy difícil para nosotros.",
        translation: "Ich denke nicht, dass die Prüfung sehr schwer für uns ist.",
        options: ["sea", "es", "será", "fue"],
        correct: "sea",
        explanation: "Nach negiertem 'pensar' (nicht denken) folgt SUBJUNTIVO: 'no pienso que sea'. Wie bei 'creer' bringt Negation Zweifel. Diese grammatische Nuance zeigt, dass deine negative Einschätzung der Schwierigkeit subjektiv ist und mit Unsicherheit behaftet."
      },
      {
        id: "subj_pres_13",
        question: "Prefiero que tú _____ la decisión final sobre esto.",
        translation: "Ich bevorzuge, dass du die endgültige Entscheidung darüber triffst.",
        options: ["tomes", "tomas", "tomarás", "tomaste"],
        correct: "tomes",
        explanation: "Nach 'preferir que' (bevorzugen, dass) steht SUBJUNTIVO: 'que tomes la decisión'. Präferenzen sind subjektive Wünsche. Diese Delegation der Entscheidung an dich wird durch Konjunktiv als Wunsch formuliert, wobei die tatsächliche Ausführung noch offen ist."
      },
      {
        id: "subj_pres_14",
        question: "Es extraño que no _____ nadie en la oficina hoy.",
        translation: "Es ist seltsam, dass heute niemand im Büro ist.",
        options: ["haya", "hay", "habrá", "hubo"],
        correct: "haya",
        explanation: "Nach 'es extraño que' (es ist seltsam, dass) folgt SUBJUNTIVO: 'que no haya nadie'. Bewertungen und Meinungen verlangen Konjunktiv. Diese Bemerkung über das leere Büro drückt deine subjektive Verwunderung aus, grammatisch markiert durch 'haya' statt 'hay'."
      },
      {
        id: "subj_pres_15",
        question: "Sugiero que nosotros _____ más temprano para evitar tráfico.",
        translation: "Ich schlage vor, dass wir früher losfahren, um Verkehr zu vermeiden.",
        options: ["salgamos", "salimos", "saldremos", "salimos"],
        correct: "salgamos",
        explanation: "Nach 'sugerir que' (vorschlagen, dass) kommt SUBJUNTIVO: 'que salgamos'. Vorschläge und Empfehlungen nutzen Konjunktiv. Dieser praktische Vorschlag, früher zu fahren, wird als Möglichkeit präsentiert, die zur Diskussion steht, nicht als feststehender Plan."
      }
    ]
  },

  pronombres_personales: {
    name: "Personalpronomen",
    description: "Subjekt- und Objektpronomen - richtige Verwendung und Position",
    icon: Cloud,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "pron_pers_1",
        question: "_____ veo todos los días en la oficina de trabajo.",
        translation: "Ich sehe dich jeden Tag im Büro bei der Arbeit.",
        options: ["Te", "Tu", "Ti", "Tú"],
        correct: "Te",
        explanation: "Für direkte Objektpronomen (dich, mich) im Spanischen nutzen wir 'te': 'te veo' (ich sehe dich). Es steht VOR dem konjugierten Verb. Im Deutschen bleibt 'dich' ein Wort, aber Spanisch unterscheidet Subjekt 'tú' von Objekt 'te'. Diese Begegnung im Büro ist alltägliche Routine."
      },
      {
        id: "pron_pers_2",
        question: "El libro es para _____. Es un regalo especial.",
        translation: "Das Buch ist für dich. Es ist ein besonderes Geschenk.",
        options: ["ti", "te", "tú", "tu"],
        correct: "ti",
        explanation: "Nach Präpositionen (para, con, sin) nutzen wir BETONTE Form 'ti': 'para ti' (für dich). Das ist anders als Objektpronomen 'te'. Diese besondere Form nach Präpositionen gibt es auch im Deutschen nicht in dieser Weise. Das persönliche Geschenk zeigt Wertschätzung."
      },
      {
        id: "pron_pers_3",
        question: "_____ gusta mucho la música clásica siempre.",
        translation: "Mir gefällt klassische Musik immer sehr.",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "Für 'mir gefällt' sagen wir 'me gusta': das Pronomen 'me' ist indirektes Objekt. Die Konstruktion ist umgekehrt zum Deutschen: wörtlich 'mir gefällt Musik', nicht 'ich mag'. Diese grammatische Besonderheit zeigt, dass Spanisch Vorlieben anders konstruiert als Deutsche es gewohnt sind."
      },
      {
        id: "pron_pers_4",
        question: "_____ compré un regalo hermoso para su cumpleaños.",
        translation: "Ich kaufte ihr ein schönes Geschenk für ihren Geburtstag.",
        options: ["Le", "La", "Lo", "Les"],
        correct: "Le",
        explanation: "Für indirektes Objekt (ihr, ihm) nutzen wir 'le': 'le compré' (ich kaufte ihr/ihm). Es steht vor dem Verb. Das Deutsche 'ihr' kann Dativ oder Akkusativ sein, aber Spanisch unterscheidet klar: 'le' ist immer indirekt. Dieses Geburtstagsgeschenk zeigt Fürsorge und Aufmerksamkeit."
      },
      {
        id: "pron_pers_5",
        question: "_____ conozco muy bien desde hace muchos años ya.",
        translation: "Ich kenne sie/ihn sehr gut seit vielen Jahren schon.",
        options: ["Lo/La", "Le", "Les", "Los"],
        correct: "Lo/La",
        explanation: "Für direktes Objekt (sie/ihn kennen) nutzen wir 'lo' (maskulin) oder 'la' (feminin): 'lo conozco' / 'la conozco'. Bei Personen als direktes Objekt bleibt es 'lo/la', nicht 'le'. Diese langjährige Bekanntschaft zeigt tiefe Verbindung über Jahre gewachsen."
      },
      {
        id: "subj_pres_6",
        question: "¿_____ puedes ayudar con mi tarea de matemáticas?",
        translation: "Kannst du mir mit meinen Mathe-Hausaufgaben helfen?",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "Für 'mir helfen' sagen wir '¿me puedes ayudar?': 'me' ist indirektes Objekt und steht vor 'puedes'. Im Deutschen steht 'mir' oft nach dem Verb, aber Spanisch stellt Pronomen VOR finite Verben. Diese Bitte um Mathe-Hilfe ist typische Schüler-Situation."
      },
      {
        id: "pron_pers_7",
        question: "Voy a llamar_____ esta noche sin falta alguna.",
        translation: "Ich werde dich heute Abend ohne Ausnahme anrufen.",
        options: ["te", "le", "lo", "la"],
        correct: "te",
        explanation: "Bei Infinitiv kann Pronomen ANGEHÄNGT werden: 'llamarte' oder vor Hilfsverb 'te voy a llamar'. Beide sind korrekt. Diese Flexibilität der Pronomenposition bei Infinitiven ist spanische Besonderheit. Das versprochene Telefonat zeigt Zuverlässigkeit und Verbindlichkeit in der Beziehung."
      },
      {
        id: "pron_pers_8",
        question: "_____ dijeron que la reunión es a las tres.",
        translation: "Sie sagten mir, dass das Treffen um drei Uhr ist.",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "Für 'mir sagen' nutzen wir 'me dijeron': indirektes Objekt vor Verb. Im Deutschen 'mir' kann auch nach Verb stehen, aber Spanisch bevorzugt Position vor konjugiertem Verb. Diese Information über Meetingzeit ist wichtige Koordination für pünktliche Teilnahme."
      },
      {
        id: "pron_pers_9",
        question: "A él _____ encanta viajar por todo el mundo.",
        translation: "Er liebt es, um die ganze Welt zu reisen.",
        options: ["le", "lo", "se", "él"],
        correct: "le",
        explanation: "Für 'ihm gefällt sehr' (er liebt) sagen wir 'le encanta': wie 'gustar' Konstruktion mit indirektem Objekt. Das 'a él' am Anfang ist Verstärkung. Diese Leidenschaft fürs Reisen wird grammatisch wie 'gefallen' konstruiert, was Deutsche anfangs verwirrt."
      },
      {
        id: "pron_pers_10",
        question: "_____ voy a contar un secreto importante ahora mismo.",
        translation: "Ich werde dir jetzt gleich ein wichtiges Geheimnis erzählen.",
        options: ["Te", "Tu", "Ti", "Tú"],
        correct: "Te",
        explanation: "Für 'dir erzählen' mit Futur 'voy a' steht 'te' davor: 'te voy a contar'. Das Pronomen kann auch an Infinitiv: 'voy a contarte'. Diese Ankündigung eines Geheimnisses schafft Spannung und zeigt Vertrauen in die Person, der du dich anvertraust."
      },
      {
        id: "pron_pers_11",
        question: "_____ parece que va a llover esta tarde mucho.",
        translation: "Es scheint mir, dass es heute Nachmittag viel regnen wird.",
        options: ["Me", "Yo", "Mi", "Mí"],
        correct: "Me",
        explanation: "Für 'mir scheint' sagen wir 'me parece': wieder indirekte Objektkonstruktion. Spanisch nutzt diese Struktur für persönliche Eindrücke. Diese Wetterbeobachtung basiert auf deinem subjektiven Eindruck von Wolkenbildung oder anderen Anzeichen für kommenden Regen."
      },
      {
        id: "pron_pers_12",
        question: "_____ doy las llaves para que puedas entrar libremente.",
        translation: "Ich gebe dir die Schlüssel, damit du frei eintreten kannst.",
        options: ["Te", "Tu", "Ti", "Tú"],
        correct: "Te",
        explanation: "Für 'dir geben' nutzen wir 'te doy': indirektes Objekt vor Verb. Die Reihenfolge ist fest im Spanischen. Diese Übergabe von Schlüsseln symbolisiert Vertrauen und gewährt Zugang zu privatem Raum, was in jeder Kultur bedeutsam ist."
      },
      {
        id: "pron_pers_13",
        question: "No _____ molesta el ruido de la calle para nada.",
        translation: "Der Straßenlärm stört mich überhaupt nicht.",
        options: ["me", "yo", "mi", "mí"],
        correct: "me",
        explanation: "Für 'mich stört' (es stört mich) sagen wir 'me molesta': wie 'gustar' mit indirektem Objekt. Wörtlich: 'mir nervt der Lärm'. Diese Toleranz gegenüber Stadtgeräuschen zeigt Anpassung an urbanes Leben oder generell ruhiges Temperament."
      },
      {
        id: "pron_pers_14",
        question: "Ella _____ está mirando desde la ventana ahora.",
        translation: "Sie schaut dich jetzt vom Fenster aus an.",
        options: ["te", "tu", "ti", "tú"],
        correct: "te",
        explanation: "Für 'dich anschauen' mit Gerundio 'está mirando' steht 'te' davor: 'te está mirando'. Auch möglich: 'está mirándote' mit angehängtem Pronomen. Diese Beobachtung vom Fenster aus könnte Neugierde, Zufall oder Warten auf deine Ankunft sein."
      },
      {
        id: "pron_pers_15",
        question: "_____ escribo porque tengo noticias importantes para ustedes.",
        translation: "Ich schreibe euch, weil ich wichtige Neuigkeiten für euch habe.",
        options: ["Les", "Los", "Le", "Las"],
        correct: "Les",
        explanation: "Für 'euch schreiben' (Plural) nutzen wir 'les': 'les escribo'. Es ist Plural von 'le'. Im Deutschen ist 'euch' eine Form, aber Spanisch unterscheidet Position und Form. Diese wichtigen Neuigkeiten rechtfertigen das Schreiben und erzeugen Erwartung beim Empfänger."
      }
    ]
  },

  ser_vs_estar: {
    name: "Ser vs. Estar",
    description: "Zwei 'sein'-Verben - permanente vs. temporäre Zustände",
    icon: Star,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "ser_estar_1",
        question: "Mi hermana _____ médica en el hospital central de la ciudad.",
        translation: "Meine Schwester ist Ärztin im städtischen Zentralkrankenhaus.",
        options: ["es", "está", "son", "están"],
        correct: "es",
        explanation: "Für BERUF nutzen wir 'ser': 'es médica' (sie ist Ärztin). Ser wird für dauerhafte Eigenschaften und Identität verwendet. Im Deutschen gibt es nur ein 'sein', aber Spanisch trennt: 'ser' für was jemand IST (Identität, Beruf), 'estar' für Zustände. Ihr Beruf als Ärztin ist Teil ihrer Identität."
      },
      {
        id: "ser_estar_2",
        question: "Hoy _____ muy cansado después de trabajar tanto tiempo.",
        translation: "Heute bin ich sehr müde nach so langem Arbeiten.",
        options: ["estoy", "soy", "están", "son"],
        correct: "estoy",
        explanation: "Für TEMPORÄRE Zustände wie Müdigkeit nutzen wir 'estar': 'estoy cansado'. Müdigkeit ist vorübergehend, nicht permanent. Diese Unterscheidung ist zentral: 'ser' wäre permanente Eigenschaft, 'estar' ist aktueller Zustand, der sich ändern kann. Nach Ruhe wird die Müdigkeit verschwinden."
      },
      {
        id: "ser_estar_3",
        question: "El concierto _____ en el teatro principal esta noche a las ocho.",
        translation: "Das Konzert ist heute Abend um acht im Haupttheater.",
        options: ["es", "está", "son", "están"],
        correct: "es",
        explanation: "Für EREIGNISSE und deren Zeit nutzen wir 'ser': 'el concierto es a las ocho'. Zeitangaben gehen immer mit 'ser'. Deutsche nutzen 'sein' neutral, aber Spanisch wählt 'ser' für Uhrzeiten und Ereignisse. Diese Konzertzeit ist fixierter Termin im Veranstaltungskalender."
      },
      {
        id: "ser_estar_4",
        question: "La comida _____ deliciosa - me encanta este plato mucho.",
        translation: "Das Essen ist köstlich - ich liebe dieses Gericht sehr.",
        options: ["está", "es", "están", "son"],
        correct: "está",
        explanation: "Für GESCHMACK aktuell nutzen wir 'estar': 'está deliciosa'. Es beschreibt wie es JETZT schmeckt (Zustand). Mit 'ser' würde es bedeuten, dass es immer/generell lecker ist. Diese Bewertung des Essens bezieht sich auf das konkrete Gericht vor dir in diesem Moment."
      },
      {
        id: "ser_estar_5",
        question: "Nosotros _____ de España originalmente pero vivimos aquí ahora.",
        translation: "Wir sind ursprünglich aus Spanien, aber leben jetzt hier.",
        options: ["somos", "estamos", "son", "están"],
        correct: "somos",
        explanation: "Für HERKUNFT nutzen wir 'ser': 'somos de España'. Herkunft ist dauerhafte Eigenschaft deiner Identität. Auch wenn du woanders lebst, ändert sich deine Herkunft nicht. Diese Verbindung zur spanischen Heimat bleibt Teil der Identität trotz aktuellen Wohnorts anderswo."
      },
      {
        id: "ser_estar_6",
        question: "¿Dónde _____ mi teléfono? No lo puedo encontrar en ningún lugar.",
        translation: "Wo ist mein Telefon? Ich kann es nirgends finden.",
        options: ["está", "es", "están", "son"],
        correct: "está",
        explanation: "Für ORT/POSITION nutzen wir immer 'estar': '¿dónde está?' (wo ist es?). Standort ist temporär und kann sich ändern. Diese Regel ist absolut: Ortsangaben verlangen 'estar', nie 'ser'. Die Suche nach dem verlegten Telefon ist moderne Alltagsfrustration."
      },
      {
        id: "ser_estar_7",
        question: "Ella _____ muy inteligente y estudia medicina en la universidad.",
        translation: "Sie ist sehr intelligent und studiert Medizin an der Universität.",
        options: ["es", "está", "son", "están"],
        correct: "es",
        explanation: "Für CHARAKTEREIGENSCHAFTEN nutzen wir 'ser': 'es inteligente'. Intelligenz ist dauerhafte Eigenschaft. Mit 'estar' würde es temporär klingen ('wirkt gerade intelligent'). Diese bleibende Qualität ihrer Persönlichkeit erklärt wahrscheinlich ihre erfolgreiche akademische Laufbahn in anspruchsvollem Studium."
      },
      {
        id: "ser_estar_8",
        question: "Los niños _____ jugando en el parque ahora mismo felizmente.",
        translation: "Die Kinder spielen gerade glücklich im Park.",
        options: ["están", "son", "es", "está"],
        correct: "están",
        explanation: "Für VERLAUFSFORM (Gerundio) nutzen wir immer 'estar': 'están jugando' (sie sind am Spielen). Deutsche sagen einfach 'spielen', aber Spanisch bildet Verlauf mit 'estar' + Gerundio. Diese momentane Aktivität der Kinder im Park ist gesunder Zeitvertreib an frischer Luft."
      },
      {
        id: "ser_estar_9",
        question: "El examen _____ muy difícil para todos los estudiantes ayer.",
        translation: "Die Prüfung war gestern sehr schwer für alle Schüler.",
        options: ["fue", "estuvo", "fueron", "estuvieron"],
        correct: "fue",
        explanation: "Für objektive BEWERTUNG einer Sache nutzen wir 'ser': 'el examen fue difícil'. Es beschreibt inhärente Eigenschaft der Prüfung selbst. Mit 'estar' wäre es subjektive Wahrnehmung. Diese schwere Prüfung war objektiv herausfordernd für die gesamte Klasse."
      },
      {
        id: "ser_estar_10",
        question: "¿Cómo _____ tú hoy? ¿Te sientes mejor del resfriado?",
        translation: "Wie geht es dir heute? Fühlst du dich besser von der Erkältung?",
        options: ["estás", "eres", "están", "son"],
        correct: "estás",
        explanation: "Für 'wie geht es dir' fragen wir '¿cómo estás?': temporärer Zustand, besonders Gesundheit. '¿Cómo eres?' würde nach Charakter fragen. Diese Frage nach Befinden zeigt Sorge um Gesundheit und Hoffnung auf Besserung nach Krankheit."
      },
      {
        id: "ser_estar_11",
        question: "La película _____ aburrida según mi opinión personal completa.",
        translation: "Der Film ist meiner vollständigen persönlichen Meinung nach langweilig.",
        options: ["es", "está", "son", "están"],
        correct: "es",
        explanation: "Für generelle EIGENSCHAFT von Dingen nutzen wir 'ser': 'la película es aburrida' (der Film ist langweilig). Es ist deine Gesamtbewertung. Mit 'estar' wäre es nur momentaner Eindruck. Diese negative Filmbewertung ist endgültiges Urteil über Qualität des gesamten Films."
      },
      {
        id: "ser_estar_12",
        question: "Nosotros _____ contentos con los resultados del proyecto final.",
        translation: "Wir sind zufrieden mit den Ergebnissen des Abschlussprojekts.",
        options: ["estamos", "somos", "están", "son"],
        correct: "estamos",
        explanation: "Für EMOTIONEN nutzen wir 'estar': 'estamos contentos' (wir sind zufrieden). Gefühle sind temporäre Zustände. Auch wenn Zufriedenheit anhält, ist sie prinzipiell veränderlich. Diese Freude über Projektergebnisse ist emotionale Reaktion auf konkrete Leistung."
      },
      {
        id: "ser_estar_13",
        question: "La casa _____ construida de madera y piedra principalmente.",
        translation: "Das Haus ist hauptsächlich aus Holz und Stein gebaut.",
        options: ["está", "es", "están", "son"],
        correct: "está",
        explanation: "Für PASSIV (Zustandspassiv) nutzen wir 'estar': 'está construida' (ist gebaut/worden). Es beschreibt resultierenden Zustand. Mit 'ser' wäre es Vorgangspassiv ('wird gebaut'). Dieses fertige Holz-Stein-Haus zeigt traditionelle Bauweise mit natürlichen Materialien."
      },
      {
        id: "ser_estar_14",
        question: "El café _____ frío porque esperé demasiado tiempo para beberlo.",
        translation: "Der Kaffee ist kalt, weil ich zu lange gewartet habe, um ihn zu trinken.",
        options: ["está", "es", "están", "son"],
        correct: "está",
        explanation: "Für TEMPERATUR nutzen wir 'estar': 'está frío' (ist kalt geworden). Temperatur ist veränderlicher Zustand. Der Kaffee war mal heiß, jetzt ist er kalt. Diese enttäuschende Situation des kalten Kaffees ist Folge von Ablenkung oder Vergessen."
      },
      {
        id: "ser_estar_15",
        question: "Tú _____ muy guapo con ese traje nuevo elegante hoy.",
        translation: "Du siehst heute sehr gut aus in diesem neuen eleganten Anzug.",
        options: ["estás", "eres", "están", "son"],
        correct: "estás",
        explanation: "Für AUSSEHEN HEUTE nutzen wir 'estar': 'estás guapo' (du siehst gut aus). Es ist situativ, nicht permanent. 'Eres guapo' wäre generell gutaussehend. Diese Bewertung bezieht sich speziell auf wie du heute mit dem neuen Anzug aussiehst, nicht auf generelle Attraktivität."
      }
    ]
  },

  imperativo: {
    name: "Imperativ (Befehle)",
    description: "Positive und negative Befehle - tú, usted, vosotros",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "imper_1",
        question: "_____ más agua para tu salud diariamente siempre.",
        translation: "Trink täglich mehr Wasser für deine Gesundheit immer.",
        options: ["Bebe", "Bebes", "Bebas", "Beber"],
        correct: "Bebe",
        explanation: "Für POSITIVEN Befehl an 'tú' (du) nutzen wir meist die 3. Person Singular Präsens: 'bebe' (trink!). Es ist wie 'él bebe' ohne Subjekt. Diese Gesundheitsempfehlung als Befehl formuliert unterstreicht die Wichtigkeit von Hydratation für körperliches Wohlbefinden im Alltag."
      },
      {
        id: "imper_2",
        question: "No _____ ruido - el bebé está durmiendo ahora.",
        translation: "Mach keinen Lärm - das Baby schläft gerade.",
        options: ["hagas", "haces", "haz", "hacer"],
        correct: "hagas",
        explanation: "Für NEGATIVEN Befehl an 'tú' nutzen wir SUBJUNTIVO: 'no hagas' (mach nicht!). Negative Imperative sind immer Subjuntivo-Formen. Diese Bitte um Ruhe während Babyschlaf ist verständlich, da Eltern wissen, wie schwer es ist, Babys zum Schlafen zu bringen."
      },
      {
        id: "imper_3",
        question: "_____ usted aquí, por favor - el doctor vendrá pronto.",
        translation: "Warten Sie bitte hier - der Arzt wird bald kommen.",
        options: ["Espere", "Espera", "Esperes", "Esperar"],
        correct: "Espere",
        explanation: "Für höflichen Befehl an 'usted' (Sie) nutzen wir SUBJUNTIVO-Form: 'espere' (warten Sie!). Höfliche Befehle sind immer Subjuntivo. Diese Anweisung im medizinischen Kontext ist professionell und höflich, angemessen für formelle Arzt-Patienten-Kommunikation."
      },
      {
        id: "imper_4",
        question: "_____ a la derecha en la próxima calle, por favor.",
        translation: "Biegen Sie bitte an der nächsten Straße rechts ab.",
        options: ["Gire", "Gira", "Gires", "Girar"],
        correct: "Gire",
        explanation: "Für 'usted' Befehl: 'gire' (biegen Sie ab) ist Subjuntivo-Form. Im Taxi oder als Wegbeschreibung ist 'usted' höflich. Diese Wegbeschreibung mit höflicher Form zeigt Respekt gegenüber dem Fahrer oder der Person, die du um den Weg bittest."
      },
      {
        id: "imper_5",
        question: "_____ los deberes antes de salir a jugar afuera, niños.",
        translation: "Macht die Hausaufgaben, bevor ihr draußen spielen geht, Kinder.",
        options: ["Haced", "Hacéis", "Hagáis", "Hacer"],
        correct: "Haced",
        explanation: "Für 'vosotros' (ihr) Befehl in Spanien: 'haced' von 'hacer'. Man nimmt Infinitiv und ersetzt -r durch -d. In Lateinamerika nutzt man 'ustedes'. Diese elterliche Anweisung, erst Pflichten zu erfüllen, ist klassische Erziehungsregel weltweit."
      },
      {
        id: "imper_6",
        question: "No _____ tarde a la reunión importante de mañana, por favor.",
        translation: "Komm bitte nicht zu spät zum wichtigen Meeting morgen.",
        options: ["llegues", "llegas", "llega", "llegar"],
        correct: "llegues",
        explanation: "Negativer Befehl 'tú': 'no llegues' (komm nicht zu spät) nutzt Subjuntivo. Alle negativen Befehle sind Subjuntivo-Formen. Diese Bitte um Pünktlichkeit für wichtiges Meeting zeigt, dass Verspätung ernsthafte professionelle Konsequenzen haben könnte."
      },
      {
        id: "imper_7",
        question: "_____ la ventana, hace mucho calor aquí dentro ahora.",
        translation: "Öffne das Fenster, es ist sehr heiß hier drinnen jetzt.",
        options: ["Abre", "Abres", "Abras", "Abrir"],
        correct: "Abre",
        explanation: "Positiver 'tú' Befehl: 'abre' (öffne!) ist wie 3. Person Singular. Einfache direkte Aufforderung. Diese praktische Bitte um frische Luft bei Hitze ist verständliche Reaktion auf unangenehme Raumtemperatur, die Erleichterung bringen wird."
      },
      {
        id: "imper_8",
        question: "No _____ en la biblioteca - mantengan silencio absoluto, por favor.",
        translation: "Sprechen Sie nicht in der Bibliothek - bewahren Sie bitte absolute Ruhe.",
        options: ["hablen", "hablan", "habla", "hablar"],
        correct: "hablen",
        explanation: "Negativer 'ustedes' Befehl: 'no hablen' nutzt Subjuntivo Plural. Bibliotheksregel für Gruppen. Diese strikte Regel der Bibliotheksstille ist weltweit anerkannt, damit alle in Ruhe konzentriert arbeiten oder lesen können."
      },
      {
        id: "imper_9",
        question: "_____ amable con la gente - todos merecen respeto básico.",
        translation: "Sei nett zu den Leuten - alle verdienen grundlegenden Respekt.",
        options: ["Sé", "Eres", "Seas", "Ser"],
        correct: "Sé",
        explanation: "Der Imperativ von 'ser' für 'tú' ist IRREGULÄR: 'sé' (sei!). Das ist wie 'yo sé' (ich weiß), aber ohne Akzent. Diese moralische Ermahnung zu Freundlichkeit ist universeller Rat, dass respektvoller Umgang mit Menschen Grundlage harmonischen Zusammenlebens ist."
      },
      {
        id: "imper_10",
        question: "_____ este formulario completamente antes de entregarlo, por favor.",
        translation: "Füllen Sie bitte dieses Formular vollständig aus, bevor Sie es abgeben.",
        options: ["Complete", "Completa", "Completes", "Completar"],
        correct: "Complete",
        explanation: "Höflicher 'usted' Befehl: 'complete' (füllen Sie aus) ist Subjuntivo-Form. Formell und respektvoll. Diese administrative Anweisung zum vollständigen Ausfüllen verhindert Verzögerungen durch unvollständige Unterlagen, die Bearbeitung behindern würden."
      },
      {
        id: "imper_11",
        question: "No _____ tanto dinero en cosas innecesarias este mes.",
        translation: "Gib diesen Monat nicht so viel Geld für unnötige Dinge aus.",
        options: ["gastes", "gastas", "gasta", "gastar"],
        correct: "gastes",
        explanation: "Negativer 'tú' Befehl: 'no gastes' (gib nicht aus) nutzt Subjuntivo. Finanzielle Warnung an Freund oder Familie. Dieser Rat zur Sparsamkeit zielt darauf ab, Verschwendung zu vermeiden und bessere finanzielle Entscheidungen für zukünftige Sicherheit zu treffen."
      },
      {
        id: "imper_12",
        question: "_____ a casa temprano para cenar juntos en familia hoy.",
        translation: "Komm heute früh nach Hause, um gemeinsam als Familie zu essen.",
        options: ["Ven", "Vienes", "Vengas", "Venir"],
        correct: "Ven",
        explanation: "Imperativ von 'venir' für 'tú' ist IRREGULÄR: 'ven' (komm!). Es ist kurz und direkt. Diese Einladung zum Familienessen zeigt Wert von gemeinsamer Zeit am Esstisch, der in vielen Kulturen als wichtig für familiäre Bindung gilt."
      },
      {
        id: "imper_13",
        question: "_____ paciencia con los niños pequeños - están aprendiendo aún.",
        translation: "Hab Geduld mit den kleinen Kindern - sie lernen noch.",
        options: ["Ten", "Tienes", "Tengas", "Tener"],
        correct: "Ten",
        explanation: "Imperativ von 'tener' für 'tú' ist IRREGULÄR: 'ten' (hab!). Es ist monosyllabisch und direkt. Dieser Rat zur Geduld mit lernenden Kindern ist Erinnerung, dass kindliche Entwicklung Zeit braucht und Fehler Teil des Lernprozesses sind."
      },
      {
        id: "imper_14",
        question: "No _____ miedo de cometer errores al aprender idiomas nuevos.",
        translation: "Hab keine Angst, Fehler beim Lernen neuer Sprachen zu machen.",
        options: ["tengas", "tienes", "ten", "tener"],
        correct: "tengas",
        explanation: "Negativer 'tú' Imperativ: 'no tengas miedo' nutzt Subjuntivo. Ermutigende Ermahnung. Diese motivierende Botschaft, dass Fehler beim Sprachenlernen normal und notwendig sind, befreit von Perfektionsdruck und ermutigt zum mutigen Sprechen trotz Unsicherheit."
      },
      {
        id: "imper_15",
        question: "_____ ustedes los documentos en esta carpeta organizadamente, por favor.",
        translation: "Legen Sie bitte die Dokumente ordentlich in diesen Ordner.",
        options: ["Pongan", "Ponen", "Pon", "Poner"],
        correct: "Pongan",
        explanation: "Befehl für 'ustedes' (Sie Plural): 'pongan' ist Subjuntivo Plural. Höfliche Anweisung an Gruppe. Diese organisatorische Bitte im Büro hilft, Ordnung zu halten und sicherzustellen, dass wichtige Unterlagen leicht wiedergefunden werden können."
      }
    ]
  },

  por_vs_para: {
    name: "Por vs. Para",
    description: "Zwei Präpositionen für 'für' - unterschiedliche Bedeutungen",
    icon: Heart,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "por_para_1",
        question: "Este regalo es _____ ti - espero que te guste mucho.",
        translation: "Dieses Geschenk ist für dich - ich hoffe, es gefällt dir sehr.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für EMPFÄNGER (für wen) nutzen wir 'para': 'es para ti' (ist für dich). Im Deutschen nur 'für', aber Spanisch trennt: 'para' zeigt Ziel/Empfänger. Dieses persönliche Geschenk mit Hoffnung auf Gefallen zeigt Aufmerksamkeit und Wunsch, Freude zu bereiten."
      },
      {
        id: "por_para_2",
        question: "Trabajo _____ una empresa internacional grande y conocida.",
        translation: "Ich arbeite für ein großes und bekanntes internationales Unternehmen.",
        options: ["para", "por", "de", "en"],
        correct: "para",
        explanation: "Für ARBEITGEBER nutzen wir 'para': 'trabajo para una empresa' (arbeite für Firma). Es zeigt, für wen du arbeitest. Diese Anstellung bei großem internationalem Konzern bietet wahrscheinlich gute Karrieremöglichkeiten und Stabilität."
      },
      {
        id: "por_para_3",
        question: "Caminamos _____ el parque durante una hora ayer tarde.",
        translation: "Wir gingen gestern Nachmittag eine Stunde durch den Park.",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "Für BEWEGUNG DURCH Raum nutzen wir 'por': 'por el parque' (durch den Park). Es zeigt Route, nicht Ziel. Deutscher Dativ 'durch' entspricht hier 'por'. Dieser einstündige Spaziergang durch Park ist gesunde Aktivität für Bewegung und frische Luft."
      },
      {
        id: "por_para_4",
        question: "Necesito terminar esto _____ mañana sin falta ninguna.",
        translation: "Ich muss das bis morgen ohne Ausnahme fertigstellen.",
        options: ["para", "por", "en", "a"],
        correct: "para",
        explanation: "Für DEADLINE (bis wann) nutzen wir 'para': 'para mañana' (bis morgen). Es markiert zeitliche Grenze/Ziel. Diese enge Frist für Fertigstellung schafft Zeitdruck und erfordert fokussiertes Arbeiten ohne Ablenkung, um pünktlich zu liefern."
      },
      {
        id: "por_para_5",
        question: "Gracias _____ tu ayuda con el proyecto - fue fundamental.",
        translation: "Danke für deine Hilfe mit dem Projekt - sie war grundlegend.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für 'danke für' sagen wir 'gracias por': es ist GRUND des Dankes. 'Por' zeigt Ursache/Grund. Diese Dankbarkeit für wesentliche Unterstützung erkennt an, dass ohne diese Hilfe das Projekt nicht hätte erfolgreich abgeschlossen werden können."
      },
      {
        id: "por_para_6",
        question: "Estudio español _____ poder trabajar en América Latina después.",
        translation: "Ich lerne Spanisch, um später in Lateinamerika arbeiten zu können.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für ZWECK/ZIEL (um zu) nutzen wir 'para': 'para poder trabajar' (um arbeiten zu können). Es zeigt Absicht. Diese klare berufliche Motivation für Sprachstudium ist praktische Investition in zukünftige Karrieremöglichkeiten auf internationalem Arbeitsmarkt."
      },
      {
        id: "por_para_7",
        question: "Lo hice _____ ti porque te quiero mucho siempre.",
        translation: "Ich tat es für dich, weil ich dich immer sehr liebe.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für 'wegen dir' oder 'aus Liebe zu dir' nutzen wir 'por': 'lo hice por ti' (ich tat es für/wegen dich). Es zeigt MOTIVATION. Diese Handlung aus Liebe demonstriert, dass Zuneigung zu konkreten unterstützenden Taten führt, nicht nur zu Worten."
      },
      {
        id: "por_para_8",
        question: "Viajamos _____ avión porque es más rápido que el tren.",
        translation: "Wir reisen mit dem Flugzeug, weil es schneller als der Zug ist.",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "Für VERKEHRSMITTEL nutzen wir 'por': 'por avión, por tren' (mit Flugzeug, mit Zug). Es zeigt Transportmittel. Diese Wahl des Flugzeugs wegen Geschwindigkeit ist praktische Entscheidung, wenn Zeitersparnis wichtiger ist als Kosten oder Umweltaspekte."
      },
      {
        id: "por_para_9",
        question: "Esta carta es _____ mi madre - la enviaré mañana.",
        translation: "Dieser Brief ist für meine Mutter - ich werde ihn morgen schicken.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für BESTIMMUNG/EMPFÄNGER: 'para mi madre' (für meine Mutter). Zeigt, für wen etwas bestimmt ist. Dieser Brief an die Mutter pflegt familiäre Beziehung über Distanz, besonders bedeutsam in Zeiten vor digitaler Kommunikation oder für persönliche Nachrichten."
      },
      {
        id: "por_para_10",
        question: "Pasamos _____ tu casa ayer pero no estabas allí.",
        translation: "Wir kamen gestern bei deinem Haus vorbei, aber du warst nicht da.",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "Für 'vorbeikommen bei' sagen wir 'pasar por': Bewegung in der Nähe von/vorbei an. 'Para' wäre Zielrichtung. Diese spontane Vorbeikommen ohne dich anzutreffen ist verpasste Gelegenheit für Besuch, vielleicht Grund für Verabredung beim nächsten Mal."
      },
      {
        id: "por_para_11",
        question: "Compré flores _____ el cumpleaños de mi esposa mañana.",
        translation: "Ich kaufte Blumen für den Geburtstag meiner Frau morgen.",
        options: ["para", "por", "de", "en"],
        correct: "para",
        explanation: "Für ANLASS/ZWECK: 'para el cumpleaños' (für den Geburtstag). Zeigt wofür etwas gedacht ist. Diese romantische Geste, Blumen zum Geburtstag zu kaufen, ist klassische Art, Liebe und Wertschätzung in Beziehung zu zeigen."
      },
      {
        id: "por_para_12",
        question: "_____ la noche hace mucho frío en esta ciudad siempre.",
        translation: "Nachts ist es in dieser Stadt immer sehr kalt.",
        options: ["Por", "Para", "En", "A"],
        correct: "Por",
        explanation: "Für TAGESZEITEN nutzen wir 'por': 'por la noche, por la mañana' (nachts, morgens). Es zeigt unspezifische Zeit während Periode. Diese nächtliche Kälte ist klimatisches Merkmal der Stadt, das warme Kleidung und Heizung notwendig macht."
      },
      {
        id: "por_para_13",
        question: "Este proyecto es _____ el lunes próximo sin extensión posible.",
        translation: "Dieses Projekt ist für nächsten Montag ohne mögliche Verlängerung.",
        options: ["para", "por", "en", "a"],
        correct: "para",
        explanation: "Für feste DEADLINE: 'para el lunes' (für Montag, bis Montag). Zeigt zeitliches Ziel. Diese strikte Frist ohne Verlängerungsmöglichkeit schafft Druck, rechtzeitig zu liefern und erfordert gutes Zeitmanagement für pünktliche Fertigstellung."
      },
      {
        id: "por_para_14",
        question: "Lo siento mucho _____ llegar tarde a la cita importante.",
        translation: "Es tut mir sehr leid, zu spät zum wichtigen Termin zu kommen.",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "Für ENTSCHULDIGUNG nutzen wir 'lo siento por': 'por' zeigt den GRUND der Entschuldigung. Es drückt Reue über etwas aus. Diese Entschuldigung für Verspätung zu wichtigem Termin zeigt Bewusstsein, dass Unpünktlichkeit respektlos sein kann."
      },
      {
        id: "por_para_15",
        question: "Tengo que estudiar mucho _____ aprobar el examen final difícil.",
        translation: "Ich muss viel lernen, um die schwere Abschlussprüfung zu bestehen.",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "Für ZWECK (um zu) vor Infinitiv: 'para aprobar' (um zu bestehen). Zeigt Absicht/Ziel. Diese intensive Lernvorbereitung mit klarem Ziel des Bestehens zeigt zielorientiertes Handeln, wo jede Lernstunde direkt zum gewünschten Erfolg beitragen soll."
      }
    ]
  }
};

export default part4Categories;
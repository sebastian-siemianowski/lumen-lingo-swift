/**
 * GERMAN → SPANISH GRAMMAR - PART 22
 * 4 categories, 15 questions each
 */

import { Shuffle, Building, Footprints, Palette } from "lucide-react";

export const part22Categories = {
  llevar_seguir_gerundio: {
    name: "Llevar/Seguir + Gerundio",
    description: "Zeitdauer und Fortsetzung - andauernde Handlungen betonen",
    icon: Shuffle,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "llev_seg_1",
        question: "Llevo _____ español tres años sin parar cada día constantemente.",
        translation: "Ich lerne seit drei Jahren jeden Tag konstant ohne Pause Spanisch.",
        options: ["estudiando", "estudiar", "estudio", "estudiado"],
        correct: "estudiando",
        explanation: "Verb 'llevar' + Gerundio + ZEIT bedeutet 'SCHON...LANG': 'llevo estudiando tres años' (lerne schon drei Jahre). Betont Dauer bis jetzt. Diese dreijährige kontinuierliche Lerntätigkeit zeigt beeindruckende Ausdauer."
      },
      {
        id: "llev_seg_2",
        question: "Sigo _____ en el mismo proyecto desde hace meses largos ya.",
        translation: "Ich arbeite noch am selben Projekt seit schon langen Monaten.",
        options: ["trabajando", "trabajar", "trabajo", "trabajado"],
        correct: "trabajando",
        explanation: "Verb 'seguir' + Gerundio bedeutet WEITERMACHEN/NOCH: 'sigo trabajando' (arbeite noch/weiter). Diese monatelange Projektarbeit zeigt entweder Komplexität oder langsamen Fortschritt."
      },
      {
        id: "llev_seg_3",
        question: "Llevo _____ este problema técnico dos horas sin resolverlo aún.",
        translation: "Ich versuche seit zwei Stunden, dieses technische Problem zu lösen, ohne es noch gelöst zu haben.",
        options: ["intentando resolver", "intentar resolver", "intento resolver", "intentado resolver"],
        correct: "intentando resolver",
        explanation: "Mit 'llevar' + Gerundio + Infinitiv: 'llevo intentando resolver' (versuche schon zu lösen). Diese zweistündige erfolglose Problemlösung ist frustrierend."
      },
      {
        id: "llev_seg_4",
        question: "Ella sigue _____ errores aunque ya sabe la regla gramatical bien.",
        translation: "Sie macht weiter Fehler, obwohl sie die Grammatikregel schon gut kennt.",
        options: ["cometiendo", "cometer", "comete", "cometido"],
        correct: "cometiendo",
        explanation: "Für FORTSETZUNG unerwünschter Handlung: 'sigue cometiendo' (macht weiter). Diese andauernden Fehler trotz Wissen zeigen Lücke zwischen Verstehen und Anwendung."
      },
      {
        id: "llev_seg_5",
        question: "Llevamos _____ en esta casa diez años felices de matrimonio unidos.",
        translation: "Wir wohnen seit zehn glücklichen vereinten Ehejahren in diesem Haus.",
        options: ["viviendo", "vivir", "vivimos", "vivido"],
        correct: "viviendo",
        explanation: "Für DAUER: 'llevamos viviendo diez años' (wohnen schon zehn Jahre). Diese Dekade gemeinsamen Wohnens ist Zeichen stabiler Beziehung."
      },
      {
        id: "llev_seg_6",
        question: "¿Sigues _____ con tu ex-novia o ya terminaron completamente?",
        translation: "Sprichst du noch mit deiner Ex-Freundin oder habt ihr komplett aufgehört?",
        options: ["hablando", "hablar", "hablas", "hablado"],
        correct: "hablando",
        explanation: "Frage nach FORTSETZUNG: '¿sigues hablando?' (sprichst du noch?). Diese Frage über Post-Beziehungs-Kommunikation erkundet aktuellen Kontaktstatus."
      },
      {
        id: "llev_seg_7",
        question: "Llevo _____ desde las seis de la mañana temprano - estoy agotado.",
        translation: "Ich arbeite seit heute früh sechs Uhr morgens - ich bin erschöpft.",
        options: ["trabajando", "trabajar", "trabajo", "trabajado"],
        correct: "trabajando",
        explanation: "Lange Arbeitsdauer: 'llevo trabajando desde las seis' (arbeite schon seit sechs). Diese frühmorgendliche Arbeitsaufnahme erklärt Erschöpfung."
      },
      {
        id: "llev_seg_8",
        question: "Seguimos _____ aunque muchos dijeron que era imposible lograr.",
        translation: "Wir machen weiter, obwohl viele sagten, dass es unmöglich zu erreichen war.",
        options: ["intentándolo", "intentarlo", "intentamos", "intentado"],
        correct: "intentándolo",
        explanation: "Für AUSDAUER trotz Skepsis: 'seguimos intentándolo' (machen weiter mit Versuch). Diese Beharrlichkeit gegen Zweifel zeigt Entschlossenheit."
      },
      {
        id: "llev_seg_9",
        question: "¿Cuánto tiempo llevas _____ piano? Tocas muy bien excelentemente.",
        translation: "Wie lange spielst du schon Klavier? Du spielst sehr ausgezeichnet gut.",
        options: ["tocando", "tocar", "tocas", "tocado"],
        correct: "tocando",
        explanation: "Frage nach ÜBUNGSDAUER: '¿cuánto llevas tocando?' (wie lange spielst du schon?). Dieses Kompliment über Spielqualität erkennt jahrelange Übung an."
      },
      {
        id: "llev_seg_10",
        question: "Sigo sin _____ la lección difícil - es muy complicada para mí.",
        translation: "Ich verstehe die schwere Lektion noch nicht - sie ist für mich sehr kompliziert.",
        options: ["entender", "entendiendo", "entiendo", "entendido"],
        correct: "entender",
        explanation: "'Seguir sin' + INFINITIV bedeutet NOCH NICHT: 'sigo sin entender' (verstehe noch nicht). Diese anhaltende Verwirrung bei Lektion zeigt Schwierigkeitsgrad."
      },
      {
        id: "llev_seg_11",
        question: "Llevamos _____ de vernos desde Navidad pasada - mucho tiempo separados.",
        translation: "Wir haben uns seit letzter Weihnacht nicht gesehen - lange Zeit getrennt.",
        options: ["sin vernos", "viéndonos", "vemos", "visto"],
        correct: "sin vernos",
        explanation: "'Llevar sin' + Infinitiv für ZEITDAUER OHNE: 'llevamos sin vernos' (haben uns schon...nicht gesehen). Diese monatelange Trennung seit Weihnachten."
      },
      {
        id: "llev_seg_12",
        question: "Ella sigue _____ en su decisión firme - no va a cambiar opinión.",
        translation: "Sie beharrt weiter auf ihrer festen Entscheidung - sie wird Meinung nicht ändern.",
        options: ["insistiendo", "insistir", "insiste", "insistido"],
        correct: "insistiendo",
        explanation: "Für BEHARREN: 'sigue insistiendo' (besteht weiter darauf). Diese Sturheit in Meinungsposition zeigt starke Überzeugung oder Unbeweglichkeit."
      },
      {
        id: "llev_seg_13",
        question: "¿Cuánto tiempo lleváis _____ juntos como pareja enamorada feliz?",
        translation: "Wie lange seid ihr schon als glückliches verliebtes Paar zusammen?",
        options: ["saliendo", "salir", "salís", "salido"],
        correct: "saliendo",
        explanation: "Spanien-Form: '¿cuánto lleváis saliendo?' (wie lange geht ihr schon aus?). Diese Frage über Beziehungsdauer ist typische Kennenlern-Konversation."
      },
      {
        id: "llev_seg_14",
        question: "Sigo _____ que fue una mala idea desde el principio inicial.",
        translation: "Ich denke weiterhin, dass es vom Anfang an eine schlechte Idee war.",
        options: ["pensando", "pensar", "pienso", "pensado"],
        correct: "pensando",
        explanation: "Für ANHALTENDE Meinung: 'sigo pensando' (denke weiter). Diese unveränderte Skepsis zeigt, dass ursprüngliche Zweifel bestätigt wurden."
      },
      {
        id: "llev_seg_15",
        question: "Llevo _____ llamarte toda la mañana - ¿dónde estabas exactamente?",
        translation: "Ich versuche dich schon den ganzen Morgen anzurufen - wo warst du genau?",
        options: ["intentando", "intentar", "intento", "intentado"],
        correct: "intentando",
        explanation: "Für wiederholte VERSUCHE: 'llevo intentando llamarte' (versuche schon anzurufen). Diese morgendliche erfolglose Anrufversuche zeigen Dringlichkeit."
      }
    ]
  },

  lenguaje_coloquial: {
    name: "Lenguaje Coloquial vs Formal",
    description: "Umgangssprache vs Hochsprache - Register richtig wählen",
    icon: Building,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "coloq_1",
        question: "Informal: Tío, ¿qué _____ → Formal: Disculpe, ¿qué hace usted?",
        translation: "Informell: Mann, was machst du → Formell: Entschuldigen Sie, was machen Sie?",
        options: ["haces", "hace", "hacéis", "hacen"],
        correct: "haces",
        explanation: "UMGANGSSPRACHE nutzt 'tú': 'tío, ¿qué haces?' (Mann, was machst du?). 'Tío' ist informell wie deutsches 'Mann/Alter'. Dieser Registerunterschied ist wichtig für sozial angemessene Kommunikation."
      },
      {
        id: "coloq_2",
        question: "Informal: Está _____ → Formal: Está fenomenal/muy bien",
        translation: "Informell: Es ist cool/geil → Formell: Es ist ausgezeichnet/sehr gut",
        options: ["guay", "bien", "bueno", "excelente"],
        correct: "guay",
        explanation: "Umgangssprachlich 'guay' (cool/super) ist INFORMELL. In Spanien verbreitet. Formell 'excelente/fenomenal'. Diese Sprachwahl signalisiert soziale Nähe oder Distanz."
      },
      {
        id: "coloq_3",
        question: "Informal: _____ → Formal: De acuerdo/Está bien",
        translation: "Informell: Okay/Klar → Formell: Einverstanden/In Ordnung",
        options: ["Vale", "Sí", "Bueno", "Correcto"],
        correct: "Vale",
        explanation: "Umgangssprachlich 'vale' (okay) in SPANIEN. In Lateinamerika 'está bien/de acuerdo'. Diese informelle Zustimmung ist unter Freunden normal."
      },
      {
        id: "coloq_4",
        question: "Informal: Estoy _____ → Formal: Estoy muy cansado/agotado",
        translation: "Informell: Ich bin total platt → Formell: Ich bin sehr müde/erschöpft",
        options: ["muerto", "cansado", "agotado", "rendido"],
        correct: "muerto",
        explanation: "Umgangssprachlich 'estar muerto' (tot sein = total erschöpft) ist ÜBERTREIBUNG. Formell 'muy cansado'. Diese dramatische Müdigkeitsdarstellung ist jugendsprachlich."
      },
      {
        id: "coloq_5",
        question: "Informal: Tengo un _____ de hambre → Formal: Tengo mucha hambre",
        translation: "Informell: Ich hab Riesenhunger → Formell: Ich habe großen Hunger",
        options: ["mogollón", "mucho", "gran", "enorme"],
        correct: "mogollón",
        explanation: "Umgangssprachlich 'mogollón' (Riesenmenge) in SPANIEN. Sehr informell. Formell 'mucha hambre'. Dieser Slang ist generationsspezifisch und regional begrenzt."
      },
      {
        id: "coloq_6",
        question: "Informal: _____, ¿cómo estás? → Formal: Hola, ¿cómo está usted?",
        translation: "Informell: Ey/Hey, wie geht's? → Formell: Hallo, wie geht es Ihnen?",
        options: ["Tío/Tía", "Hola", "Buenos días", "Saludos"],
        correct: "Tío/Tía",
        explanation: "Umgangssprachliche ANREDE 'tío/tía' (Typ/Typin) unter Jugendlichen SPANIENS. Formell 'señor/señora'. Diese informelle Anrede ist unter Freunden oder Gleichaltrigen üblich."
      },
      {
        id: "coloq_7",
        question: "Informal: Me da _____ → Formal: No me importa/Me es indiferente",
        translation: "Informell: Ist mir egal/wurscht → Formell: Es ist mir nicht wichtig/gleichgültig",
        options: ["igual", "lo mismo", "indiferente", "nada"],
        correct: "igual",
        explanation: "Umgangssprachlich 'me da igual' (ist mir egal) ist NEUTRAL. Formeller: 'me es indiferente'. Diese Gleichgültigkeit kann respektlos wirken in formellen Kontexten."
      },
      {
        id: "coloq_8",
        question: "Informal: Voy _____ casa → Formal: Voy a mi casa/domicilio",
        translation: "Informell: Ich geh heim → Formell: Ich gehe zu meinem Haus/Wohnsitz",
        options: ["pa'", "para", "a", "hacia"],
        correct: "pa'",
        explanation: "Umgangssprachlich 'pa'' ist VERKÜRZUNG von 'para'. Nur gesprochen, nicht geschrieben. Formell 'a mi casa'. Diese Lautverkürzung ist typisch für schnelles informelles Sprechen."
      },
      {
        id: "coloq_9",
        question: "Informal: Estoy _____ → Formal: Estoy sin dinero/en dificultades",
        translation: "Informell: Ich bin pleite/blank → Formell: Ich bin ohne Geld/in Schwierigkeiten",
        options: ["pelado", "pobre", "sin dinero", "arruinado"],
        correct: "pelado",
        explanation: "Umgangssprachlich 'estar pelado' (geschält sein = pleite) in LATEINAMERIKA. Formell 'sin dinero'. Diese finanzielle Notlage wird umgangssprachlich dramatischer ausgedrückt."
      },
      {
        id: "coloq_10",
        question: "Informal: Qué _____ → Formal: Qué lástima/Qué pena",
        translation: "Informell: Wie schade/Was für'n Mist → Formell: Wie schade/Welch Jammer",
        options: ["rollo", "pena", "lástima", "mal"],
        correct: "rollo",
        explanation: "Umgangssprachlich 'qué rollo' (was für'ne Rolle = wie langweilig/schade) in SPANIEN. Formell 'qué pena'. Dieser Ausdruck zeigt Enttäuschung auf lockere Weise."
      },
      {
        id: "coloq_11",
        question: "Informal: Estoy _____ → Formal: Estoy muy ocupado con trabajo",
        translation: "Informell: Ich bin total im Stress → Formell: Ich bin sehr mit Arbeit beschäftigt",
        options: ["a tope", "ocupado", "lleno", "muy ocupado"],
        correct: "a tope",
        explanation: "Umgangssprachlich 'estar a tope' (am Maximum sein = total beschäftigt). Formell 'muy ocupado'. Diese überlastete Situation wird umgangssprachlich intensiver dargestellt."
      },
      {
        id: "coloq_12",
        question: "Informal: Me _____ → Formal: Me importa mucho/Me preocupa",
        translation: "Informell: Ist mir total wichtig → Formell: Es ist mir sehr wichtig/besorgt mich",
        options: ["mola", "importa", "preocupa", "interesa"],
        correct: "mola",
        explanation: "Umgangssprachlich 'molar' (cool finden) ist JUGENDSPRACHE Spaniens. Formell 'importar'. Dieser Slang zeigt positive Einstellung auf lockere Weise."
      },
      {
        id: "coloq_13",
        question: "Informal: Nos _____ → Formal: Nos vamos/Nos marchamos",
        translation: "Informell: Wir hauen ab → Formell: Wir gehen weg/verlassen",
        options: ["piramos", "vamos", "marchamos", "salimos"],
        correct: "piramos",
        explanation: "Umgangssprachlich 'pirarse' (abhauen) ist SEHR INFORMELL. Jugendsprache. Formell 'marcharse'. Diese lockere Abreise-Ankündigung ist unter Freunden üblich."
      },
      {
        id: "coloq_14",
        question: "Informal: Estoy _____ de trabajo → Formal: Estoy muy ocupado laboralmente",
        translation: "Informell: Ich bin voll im Arbeitsstress → Formell: Ich bin arbeitsmäßig sehr beschäftigt",
        options: ["hasta arriba", "lleno", "ocupado", "cargado"],
        correct: "hasta arriba",
        explanation: "Umgangssprachlich 'estar hasta arriba' (bis oben sein = überlastet). Formell 'muy ocupado'. Diese bildliche Überlastungsdarstellung ist expressiv."
      },
      {
        id: "coloq_15",
        question: "Informal: Me da igual → Formal: _____ me importa/No me afecta",
        translation: "Informell: Ist mir egal → Formell: Es ist mir nicht wichtig/betrifft mich nicht",
        options: ["No", "Nada", "Tampoco", "Nunca"],
        correct: "No",
        explanation: "Formell: 'no me importa' (ist mir nicht wichtig). Höflicher als 'me da igual'. Diese formelle Gleichgültigkeit ist diplomatischer ausgedrückt für professionelle Kontexte."
      }
    ]
  },

  diferencias_regionales: {
    name: "Diferencias España vs Latinoamérica",
    description: "Regionalunterschiede - Vokabular und Grammatik zwischen Kontinenten",
    icon: Footprints,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "region_1",
        question: "España: Coche → Latinoamérica: _____ (vehículo automotor personal)",
        translation: "Spanien: Auto → Lateinamerika: _____ (persönliches Kraftfahrzeug)",
        options: ["Carro/Auto", "Coche", "Vehículo", "Automóvil"],
        correct: "Carro/Auto",
        explanation: "In LATEINAMERIKA 'carro' oder 'auto' statt 'coche'. Diese Vokabularunterschiede zwischen Kontinenten sind wichtig für Verständnis in verschiedenen Regionen."
      },
      {
        id: "region_2",
        question: "España: Ordenador → Latinoamérica: _____ (máquina para computar)",
        translation: "Spanien: Computer → Lateinamerika: _____ (Rechenmaschine)",
        options: ["Computadora/Computador", "Ordenador", "Máquina", "PC"],
        correct: "Computadora/Computador",
        explanation: "In LATEINAMERIKA 'computadora' (feminin) oder 'computador' (maskulin). In Spanien 'ordenador'. Diese technischen Vokabelunterschiede zeigen sprachliche Evolution."
      },
      {
        id: "region_3",
        question: "España: Vosotros _____ → Latinoamérica: Ustedes hablan",
        translation: "Spanien: Ihr sprecht → Lateinamerika: Sie sprechen (ihr)",
        options: ["habláis", "hablan", "hablas", "hablamos"],
        correct: "habláis",
        explanation: "SPANIEN nutzt 'vosotros' (ihr) mit eigener Konjugation '-áis/-éis/-ís'. Lateinamerika nutzt 'ustedes' für ihr. Dieser grammatische Unterschied ist fundamentalste Differenz."
      },
      {
        id: "region_4",
        question: "España: Móvil → Latinoamérica: _____ (teléfono portátil inalámbrico)",
        translation: "Spanien: Handy → Lateinamerika: _____ (tragbares kabelloses Telefon)",
        options: ["Celular", "Móvil", "Teléfono", "Portátil"],
        correct: "Celular",
        explanation: "In LATEINAMERIKA 'celular' (von cellular). In Spanien 'móvil'. Diese technischen Begriffe entwickelten sich auf Kontinenten unterschiedlich."
      },
      {
        id: "region_5",
        question: "España: Zumo → Latinoamérica: _____ (líquido de frutas exprimidas)",
        translation: "Spanien: Saft → Lateinamerika: _____ (Flüssigkeit aus gepressten Früchten)",
        options: ["Jugo", "Zumo", "Néctar", "Líquido"],
        correct: "Jugo",
        explanation: "In LATEINAMERIKA 'jugo' (Saft). In Spanien 'zumo'. Diese Getränke-Vokabel ist eine der bekanntesten regionalen Differenzen."
      },
      {
        id: "region_6",
        question: "España: Coger el autobús → Latinoamérica: _____ el autobús",
        translation: "Spanien: Bus nehmen → Lateinamerika: _____ Bus",
        options: ["Tomar", "Coger", "Agarrar", "Subir a"],
        correct: "Tomar",
        explanation: "In LATEINAMERIKA 'tomar' statt 'coger' (hat vulgäre Bedeutung). In Spanien 'coger' normal. Dieser Unterschied ist wichtig, um peinliche Missverständnisse zu vermeiden."
      },
      {
        id: "region_7",
        question: "España: Patata → Latinoamérica: _____ (tubérculo comestible)",
        translation: "Spanien: Kartoffel → Lateinamerika: _____ (essbare Knolle)",
        options: ["Papa", "Patata", "Tubérculo", "Raíz"],
        correct: "Papa",
        explanation: "In LATEINAMERIKA 'papa' (Kartoffel). In Spanien 'patata'. Diese Grundnahrungsmittel-Bezeichnung ist kulinarisch relevanter Unterschied."
      },
      {
        id: "region_8",
        question: "Argentinien: Vos _____ → Rest: Tú hablas/Usted habla",
        translation: "Argentinien: Du sprichst (vos) → Rest: Du sprichst/Sie sprechen",
        options: ["hablás", "hablas", "habla", "habláis"],
        correct: "hablás",
        explanation: "ARGENTINIEN/URUGUAY nutzen 'vos' statt 'tú' mit eigener Konjugation: 'vos hablás'. Dieses 'Voseo' ist markantes Merkmal des Río-de-la-Plata-Spanisch."
      },
      {
        id: "region_9",
        question: "España: Gafas → Latinoamérica: _____ (para ver mejor claramente)",
        translation: "Spanien: Brille → Lateinamerika: _____ (um besser klar zu sehen)",
        options: ["Lentes/Anteojos", "Gafas", "Vidrios", "Cristales"],
        correct: "Lentes/Anteojos",
        explanation: "In LATEINAMERIKA 'lentes' oder 'anteojos'. In Spanien 'gafas'. Diese medizinischen Sehhilfen haben kontinentspezifische Begriffe."
      },
      {
        id: "region_10",
        question: "España: Aparcar → Latinoamérica: _____ (dejar el vehículo)",
        translation: "Spanien: Parken → Lateinamerika: _____ (Fahrzeug abstellen)",
        options: ["Estacionar", "Aparcar", "Parar", "Dejar"],
        correct: "Estacionar",
        explanation: "In LATEINAMERIKA 'estacionar' (parken). In Spanien 'aparcar'. Diese Verkehrsvokabel ist täglich relevant für Autofahrer in verschiedenen Regionen."
      },
      {
        id: "region_11",
        question: "España: Piso → Lateinamerika: _____ (vivienda en edificio alto)",
        translation: "Spanien: Wohnung → Lateinamerika: _____ (Wohneinheit in hohem Gebäude)",
        options: ["Apartamento/Departamento", "Piso", "Vivienda", "Casa"],
        correct: "Apartamento/Departamento",
        explanation: "In LATEINAMERIKA 'apartamento' oder 'departamento' (Mexiko). In Spanien 'piso'. Diese Immobilienvokabel ist wichtig beim Wohnungssuchen."
      },
      {
        id: "region_12",
        question: "España: ¡_____ ! (expresión de sorpresa) → Formal: ¡Cielos!/¡Dios mío!",
        translation: "Spanien: _____ ! (Ausdruck von Überraschung) → Formell: Himmel!/Mein Gott!",
        options: ["Ostras", "Cielos", "Dios", "Ay"],
        correct: "Ostras",
        explanation: "Umgangssprachlich 'ostras' (Austern = Mensch/Mann) ist SPANIEN-Slang für Überraschung. Formell 'cielos'. Dieser Ausruf ist harmloser Ersatz für Stärkeres."
      },
      {
        id: "region_13",
        question: "España: Majo/maja → Latinoamérica: _____ (persona simpática agradable)",
        translation: "Spanien: Nett/sympathisch → Lateinamerika: _____ (sympathische Person)",
        options: ["Buena onda/Chevere", "Majo", "Simpático", "Amable"],
        correct: "Buena onda/Chevere",
        explanation: "In LATEINAMERIKA 'buena onda' oder 'chévere' (cool/nett). In Spanien 'majo'. Diese Sympathie-Ausdrücke sind regional sehr unterschiedlich."
      },
      {
        id: "region_14",
        question: "España: Tirar → Latinoamérica: _____ (desechar en la basura)",
        translation: "Spanien: Wegwerfen → Lateinamerika: _____ (im Müll entsorgen)",
        options: ["Botar", "Tirar", "Echar", "Desechar"],
        correct: "Botar",
        explanation: "In manchen LATEINAMERIKA-Ländern 'botar' (wegwerfen). In Spanien 'tirar'. Beide Regionen verstehen beide, aber Präferenz variiert."
      },
      {
        id: "region_15",
        question: "España: Conducir → Lateinamerika: _____ (manejar un vehículo motorizado)",
        translation: "Spanien: Fahren → Lateinamerika: _____ (Motorfahrzeug steuern)",
        options: ["Manejar", "Conducir", "Guiar", "Dirigir"],
        correct: "Manejar",
        explanation: "In LATEINAMERIKA 'manejar' (Auto fahren). In Spanien 'conducir'. Diese Verkehrsvokabel ist essentiell für Fahranweisungen in verschiedenen Ländern."
      }
    ]
  },

  construcciones_se_avanzadas: {
    name: "Construcciones con SE avanzadas",
    description: "Komplexe SE-Konstruktionen - Passiv, Unpersönlich, Reflexiv kombiniert",
    icon: Palette,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "se_av_1",
        question: "Se me _____ las llaves en casa esta mañana temprano saliendo.",
        translation: "Mir sind die Schlüssel heute früh morgens beim Rausgehen zu Hause geblieben.",
        options: ["quedaron", "quedó", "quedan", "quedarán"],
        correct: "quedaron",
        explanation: "Konstruktion 'se me' + Verb für UNABSICHTLICH: 'se me quedaron' (sind mir geblieben). Plural für llaves. Diese unbeabsichtigte Schlüsselvergesslichkeit ist frustrierende Situation."
      },
      {
        id: "se_av_2",
        question: "Se nos _____ el tiempo rápidamente - ya es tarde de noche.",
        translation: "Uns ist die Zeit schnell vergangen - es ist schon spät nachts.",
        options: ["pasó", "pasaron", "pasa", "pasará"],
        correct: "pasó",
        explanation: "Konstruktion 'se nos' + Verb: 'se nos pasó el tiempo' (ist uns vergangen). Singular tiempo. Diese schnell verflogene Zeit zeigt angenehme Aktivität."
      },
      {
        id: "se_av_3",
        question: "Se te _____ el libro de la mesa - recógelo del suelo ahora.",
        translation: "Dir ist das Buch vom Tisch gefallen - heb es jetzt vom Boden auf.",
        options: ["cayó", "cayeron", "cae", "caerá"],
        correct: "cayó",
        explanation: "Konstruktion 'se te' für UNBEABSICHTIGT: 'se te cayó' (ist dir gefallen). Singular libro. Dieser unbeabsichtigte Fall erfordert Aufheben."
      },
      {
        id: "se_av_4",
        question: "Se le _____ hacer esa tarea difícil - es muy complicada técnica.",
        translation: "Ihm fällt es schwer, jene schwere Aufgabe zu machen - sie ist sehr kompliziert technisch.",
        options: ["hace difícil", "hace dificil", "hacen difícil", "hizo difícil"],
        correct: "hace difícil",
        explanation: "Konstruktion 'se le hace difícil' (fällt ihm schwer). Diese Schwierigkeit bei Aufgabe zeigt Überforderung mit technischer Komplexität."
      },
      {
        id: "se_av_5",
        question: "Se me _____ que mañana va a llover mucho según las nubes.",
        translation: "Mir scheint es, dass es morgen laut den Wolken viel regnen wird.",
        options: ["antoja", "antojan", "antojó", "antojará"],
        correct: "antoja",
        explanation: "Konstruktion 'se me antoja que' (mir scheint, dass). Für Vermutung oder Lust. Diese Wettervorhersage basiert auf Wolkenbeobachtung."
      },
      {
        id: "se_av_6",
        question: "Se os _____ comprar esa casa tan cara sin consultarnos antes.",
        translation: "Euch ist es eingefallen, jenes so teure Haus zu kaufen, ohne uns vorher zu konsultieren.",
        options: ["ocurrió", "ocurrieron", "ocurre", "ocurrirá"],
        correct: "ocurrió",
        explanation: "Spanien-Form 'se os ocurrió' (ist euch eingefallen). Diese spontane Hauskauf-Idee ohne Rücksprache ist überraschende Entscheidung."
      },
      {
        id: "se_av_7",
        question: "Se nos _____ invitar a María a la fiesta - fue un olvido.",
        translation: "Uns ist es entgangen, María zur Party einzuladen - es war ein Vergessen.",
        options: ["olvidó", "olvidaron", "olvida", "olvidará"],
        correct: "olvidó",
        explanation: "Konstruktion 'se nos olvidó' (ist uns entgangen/haben wir vergessen). Singular invitar. Diese vergessene Einladung könnte Gefühle verletzen."
      },
      {
        id: "se_av_8",
        question: "Se me _____ el vaso de cristal y se rompió en pedazos pequeños.",
        translation: "Mir ist das Kristallglas heruntergefallen und in kleine Stücke zerbrochen.",
        options: ["cayó", "cayeron", "cae", "caerá"],
        correct: "cayó",
        explanation: "Für unabsichtlichen FALL: 'se me cayó el vaso' (ist mir gefallen). Diese Ungeschicklichkeit führte zu zerbrochenem Glas."
      },
      {
        id: "se_av_9",
        question: "Se les _____ que podían llegar tarde - no pasa nada grave.",
        translation: "Ihnen ist es erlaubt, spät zu kommen - es passiert nichts Schlimmes.",
        options: ["permite", "permiten", "permitió", "permitirá"],
        correct: "permite",
        explanation: "Konstruktion 'se les permite' (ihnen ist erlaubt). Diese Erlaubnis zur Verspätung nimmt zeitlichen Druck."
      },
      {
        id: "se_av_10",
        question: "Se me _____ las gafas y ahora no veo bien nada claro.",
        translation: "Mir sind die Brille kaputt gegangen und jetzt sehe ich nichts klar gut.",
        options: ["rompieron", "rompió", "rompen", "romperán"],
        correct: "rompieron",
        explanation: "Plural 'gafas': 'se me rompieron' (sind mir kaputt gegangen). Diese zerbrochene Brille ist problematisch für Sehvermögen."
      },
      {
        id: "se_av_11",
        question: "Se te _____ la idea genial - eres muy creativo inteligente innovador.",
        translation: "Dir ist die geniale Idee eingefallen - du bist sehr kreativ intelligent innovativ.",
        options: ["ocurrió", "ocurrieron", "ocurre", "ocurrirá"],
        correct: "ocurrió",
        explanation: "Für EINFALL: 'se te ocurrió la idea' (ist dir eingefallen). Dieses Kompliment über Kreativität erkennt innovatives Denken an."
      },
      {
        id: "se_av_12",
        question: "Se nos _____ el pan en la tienda - tuvimos que volver.",
        translation: "Uns ist das Brot im Laden entgangen - wir mussten zurück.",
        options: ["olvidó", "olvidaron", "olvida", "olvidará"],
        correct: "olvidó",
        explanation: "Konstruktion 'se nos olvidó' (ist uns entgangen). Singular pan. Dieses vergessene Brot erforderte zusätzlichen Einkaufsgang."
      },
      {
        id: "se_av_13",
        question: "Se le _____ muy bien los idiomas - aprende rápidamente siempre.",
        translation: "Ihm fallen Sprachen sehr leicht - er lernt immer schnell.",
        options: ["dan", "da", "dieron", "dará"],
        correct: "dan",
        explanation: "Konstruktion 'se le dan bien' (fallen ihm leicht). Plural idiomas. Dieses Sprachtalent ist natürliche Begabung für Fremdsprachenerwerb."
      },
      {
        id: "se_av_14",
        question: "Se me _____ el nombre de ese actor famoso - ¿cómo se llama?",
        translation: "Mir fällt der Name jenes berühmten Schauspielers nicht ein - wie heißt er?",
        options: ["escapa", "escapan", "escapó", "escapará"],
        correct: "escapa",
        explanation: "Konstruktion 'se me escapa' (entfällt mir). Für Gedächtnislücke. Diese Namensvergesslichkeit ist häufiges Phänomen bei Prominenten."
      },
      {
        id: "se_av_15",
        question: "Se nos _____ el tren por cinco minutos escasos - llegamos tarde.",
        translation: "Uns ist der Zug um knappe fünf Minuten entgangen - wir kamen zu spät an.",
        options: ["escapó", "escaparon", "escapa", "escapará"],
        correct: "escapó",
        explanation: "Konstruktion 'se nos escapó' (ist uns entkommen/entgangen). Diese knappe Zugverfehlung ist besonders ärgerliche Verspätung."
      }
    ]
  }
};

export default part22Categories;
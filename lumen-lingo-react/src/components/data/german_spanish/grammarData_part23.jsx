/**
 * GERMAN → SPANISH GRAMMAR - PART 23
 * 3 categories, 15 questions each
 */

import { Layers, Repeat, Thermometer } from "lucide-react";

export const part23Categories = {
  oraciones_relativas_complejas: {
    name: "Oraciones Relativas Complejas",
    description: "Komplexe Relativsätze - cuyo, donde, cuando mit Präpositionen",
    icon: Layers,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "rel_comp_1",
        question: "El libro _____ páginas están rotas es muy antiguo valioso histórico.",
        translation: "Das Buch, dessen Seiten zerrissen sind, ist sehr alt wertvoll historisch.",
        options: ["cuyas", "que", "cual", "donde"],
        correct: "cuyas",
        explanation: "Für DESSEN/DEREN nutzen wir 'cuyo/cuya/cuyos/cuyas': 'cuyas páginas' (dessen Seiten). Stimmt mit Besitztum überein (páginas = feminin Plural). Dieses beschädigte alte Buch hat trotz Zustand historischen Wert."
      },
      {
        id: "rel_comp_2",
        question: "La casa _____ ventanas son azules pertenece a mis tíos queridos.",
        translation: "Das Haus, dessen Fenster blau sind, gehört meinen lieben Onkel und Tante.",
        options: ["cuyas", "que", "cual", "donde"],
        correct: "cuyas",
        explanation: "Possessiv-Relativpronomen: 'cuyas ventanas' (dessen Fenster). Feminin Plural. Dieses Haus mit blauen Fenstern ist durch diese Farbe leicht erkennbar."
      },
      {
        id: "rel_comp_3",
        question: "El día _____ nos conocimos fue el mejor de mi vida entera completa.",
        translation: "Der Tag, an dem wir uns kennenlernten, war der beste meines ganzen Lebens.",
        options: ["en que", "que", "cual", "donde"],
        correct: "en que",
        explanation: "Für TAG brauchen wir Präposition: 'el día en que' (der Tag, an dem). Auch 'en el que' möglich. Dieser besondere Kennenlern-Tag hat romantische oder freundschaftliche Bedeutung."
      },
      {
        id: "rel_comp_4",
        question: "La razón _____ la cual no vine es que estaba enfermo grave.",
        translation: "Der Grund, weshalb ich nicht kam, ist, dass ich schwer krank war.",
        options: ["por", "de", "en", "a"],
        correct: "por",
        explanation: "Für GRUND: 'la razón por la cual' (Grund, weshalb). Auch 'por la que'. Präposition 'por' gehört zu Grund. Diese Krankheitsentschuldigung ist legitim."
      },
      {
        id: "rel_comp_5",
        question: "El restaurante _____ el cual te hablé está en el centro urbano.",
        translation: "Das Restaurant, von dem ich dir erzählte, ist im Stadtzentrum.",
        options: ["del", "de el", "en el", "al"],
        correct: "del",
        explanation: "Nach Präposition 'de': 'del cual' (von dem). 'De' + 'el cual' → 'del cual'. Formeller als 'del que'. Diese Restaurantempfehlung im Zentrum ist von persönlicher Erfahrung."
      },
      {
        id: "rel_comp_6",
        question: "La manera _____ hablas español es muy natural y fluida realmente.",
        translation: "Die Art, wie du Spanisch sprichst, ist wirklich sehr natürlich und fließend.",
        options: ["en que", "que", "cual", "como"],
        correct: "en que",
        explanation: "Für ART UND WEISE: 'la manera en que' (die Art, wie). Auch 'como' oder 'en la que'. Dieses Kompliment über natürliche Sprechweise erkennt hohes Niveau an."
      },
      {
        id: "rel_comp_7",
        question: "El momento _____ llegaste fue perfecto - justo a tiempo exacto.",
        translation: "Der Moment, in dem du ankamst, war perfekt - genau pünktlich.",
        options: ["en que", "que", "cual", "donde"],
        correct: "en que",
        explanation: "Für ZEITPUNKT: 'el momento en que' (der Moment, in dem). Präposition 'en' für Zeit. Dieses perfekte Timing ist glücklicher Zufall oder gute Planung."
      },
      {
        id: "rel_comp_8",
        question: "La empresa _____ trabajo está en el centro financiero de la ciudad.",
        translation: "Die Firma, für die ich arbeite, ist im Finanzzentrum der Stadt.",
        options: ["para la que", "que", "cual", "donde"],
        correct: "para la que",
        explanation: "Nach 'trabajar para': 'la empresa para la que trabajo' (Firma, für die ich arbeite). Mit Präposition. Dieser zentrale Arbeitsort ist prestigeträchtige Lage."
      },
      {
        id: "rel_comp_9",
        question: "El autor _____ obras leo frecuentemente ganó el premio Nobel importante.",
        translation: "Der Autor, dessen Werke ich häufig lese, gewann den wichtigen Nobelpreis.",
        options: ["cuyas", "que", "cual", "de quien"],
        correct: "cuyas",
        explanation: "Possessiv: 'cuyas obras' (dessen Werke). Feminin Plural. Dieser Nobelpreisträger-Autor schreibt offenbar qualitativ hochwertige Literatur."
      },
      {
        id: "rel_comp_10",
        question: "Los amigos _____ los cuales viajé son muy divertidos alegres simpáticos.",
        translation: "Die Freunde, mit denen ich reiste, sind sehr lustig fröhlich sympathisch.",
        options: ["con", "de", "por", "para"],
        correct: "con",
        explanation: "Nach 'viajar con': 'con los cuales' (mit denen). Formeller als 'con los que'. Diese angenehmen Reisebegleiter machten Trip unterhaltsam."
      },
      {
        id: "rel_comp_11",
        question: "La ciudad _____ mis padres nacieron ya no existe - fue destruida.",
        translation: "Die Stadt, wo meine Eltern geboren wurden, existiert nicht mehr - sie wurde zerstört.",
        options: ["donde", "en que", "en la que", "adonde"],
        correct: "donde",
        explanation: "Für ORT: 'la ciudad donde' (Stadt, wo). Auch 'en la que'. Diese zerstörte Geburtsstadt ist tragischer Verlust familiärer Wurzeln."
      },
      {
        id: "rel_comp_12",
        question: "El chico _____ hermana es mi profesora vive al lado nuestro.",
        translation: "Der Junge, dessen Schwester meine Lehrerin ist, wohnt neben uns.",
        options: ["cuya", "que", "cual", "de quien"],
        correct: "cuya",
        explanation: "Possessiv Singular feminin: 'cuya hermana' (dessen Schwester). Diese nachbarschaftliche Verbindung zu Lehrerfamilie ist interessante Koinzidenz."
      },
      {
        id: "rel_comp_13",
        question: "El motivo _____ vine aquí hoy es hablar contigo personalmente solo.",
        translation: "Der Grund, weswegen ich heute hierher kam, ist persönlich nur mit dir zu sprechen.",
        options: ["por el que", "que", "cual", "donde"],
        correct: "por el que",
        explanation: "Für GRUND mit Präposition: 'el motivo por el que' (Grund, weswegen). Diese Betonung persönlichen Gesprächs signalisiert wichtiges oder vertrauliches Thema."
      },
      {
        id: "rel_comp_14",
        question: "La forma _____ la cual resolvió el problema fue muy creativa original.",
        translation: "Die Art, auf die er das Problem löste, war sehr kreativ originell.",
        options: ["en", "de", "por", "con"],
        correct: "en",
        explanation: "Für METHODE: 'la forma en la cual' (Art, auf die). Präposition 'en'. Diese kreative Problemlösungsart zeigt innovatives Denken."
      },
      {
        id: "rel_comp_15",
        question: "El hombre _____ hijos juegan con los míos es mi vecino cercano.",
        translation: "Der Mann, dessen Kinder mit meinen spielen, ist mein naher Nachbar.",
        options: ["cuyos", "que", "cual", "de quien"],
        correct: "cuyos",
        explanation: "Possessiv maskulin Plural: 'cuyos hijos' (dessen Kinder). Diese Kinderspielkameradschaft schafft Verbindung zwischen Nachbarfamilien."
      }
    ]
  },

  sufijos_multiples: {
    name: "Sufijos -mente Múltiples",
    description: "Mehrere Adverbien - erste ohne, letzte mit -mente",
    icon: Repeat,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "suf_mult_1",
        question: "Habla clara y _____ para que todos entiendan bien siempre.",
        translation: "Er spricht klar und langsam, damit alle immer gut verstehen.",
        options: ["lentamente", "lenta", "lento", "lentas"],
        correct: "lentamente",
        explanation: "Bei MEHREREN Adverbien: nur LETZTES bekommt '-mente': 'clara y lentamente' (klar und langsam). Erste bleibt feminin Adjektiv. Diese Sparregel macht Sprache effizienter."
      },
      {
        id: "suf_mult_2",
        question: "Trabajó rápida y _____ en el proyecto urgente sin descansar nunca.",
        translation: "Er arbeitete schnell und effizient am dringenden Projekt ohne jemals auszuruhen.",
        options: ["eficientemente", "eficiente", "eficientes", "eficaz"],
        correct: "eficientemente",
        explanation: "Adverbienkette: 'rápida y eficientemente' (schnell und effizient). Nur letzte '-mente'. Diese produktive Arbeitsweise führt zu schneller Projektfertigstellung."
      },
      {
        id: "suf_mult_3",
        question: "Respondió seria y _____ a todas las preguntas difíciles del examen.",
        translation: "Er antwortete ernsthaft und ehrlich auf alle schweren Prüfungsfragen.",
        options: ["honestamente", "honesta", "honestas", "honesto"],
        correct: "honestamente",
        explanation: "Kette: 'seria y honestamente' (ernsthaft und ehrlich). Diese Kombination aus Ernst und Ehrlichkeit zeigt integre Prüfungshaltung."
      },
      {
        id: "suf_mult_4",
        question: "Canta bella y _____ - tiene una voz preciosa maravillosa increíble.",
        translation: "Sie singt schön und emotional - sie hat eine kostbare wunderbare unglaubliche Stimme.",
        options: ["emocionalmente", "emocional", "emocionales", "emocionado"],
        correct: "emocionalmente",
        explanation: "Adverbien: 'bella y emocionalmente' (schön und emotional). Dieses stimmliche Doppeltalent von Schönheit und Emotionalität berührt Zuhörer tief."
      },
      {
        id: "suf_mult_5",
        question: "Estudia constante y _____ para mejorar sus notas escolares académicas.",
        translation: "Er lernt konstant und intensiv, um seine schulischen akademischen Noten zu verbessern.",
        options: ["intensamente", "intensa", "intensas", "intenso"],
        correct: "intensamente",
        explanation: "Kette: 'constante y intensamente' (konstant und intensiv). Diese doppelte Lernintensität ist Rezept für akademische Verbesserung."
      },
      {
        id: "suf_mult_6",
        question: "Actuó valiente y _____ durante la crisis difícil peligrosa extrema.",
        translation: "Er handelte mutig und entschlossen während der schweren gefährlichen extremen Krise.",
        options: ["decididamente", "decidida", "decididas", "decidido"],
        correct: "decididamente",
        explanation: "Adverbien: 'valiente y decididamente' (mutig und entschlossen). Diese Kombination aus Mut und Entschlossenheit ist Führungsqualität in Krisen."
      },
      {
        id: "suf_mult_7",
        question: "Explica las cosas simple y _____ sin complicaciones innecesarias extras.",
        translation: "Er erklärt die Dinge einfach und klar ohne unnötige extra Komplikationen.",
        options: ["claramente", "clara", "claras", "claro"],
        correct: "claramente",
        explanation: "Kette: 'simple y claramente' (einfach und klar). Diese verständliche Erklärungsweise ist pädagogisch wertvoll für Lernende."
      },
      {
        id: "suf_mult_8",
        question: "Resolvió el conflicto pacífica y _____ sin violencia ni gritos.",
        translation: "Er löste den Konflikt friedlich und diplomatisch ohne Gewalt noch Schreien.",
        options: ["diplomáticamente", "diplomática", "diplomáticas", "diplomático"],
        correct: "diplomáticamente",
        explanation: "Adverbien: 'pacífica y diplomáticamente' (friedlich und diplomatisch). Diese Konfliktlösungsfähigkeit ohne Eskalation ist reife Sozialkompe tenz."
      },
      {
        id: "suf_mult_9",
        question: "Conduce cuidadosa y _____ - nunca ha tenido un accidente automovilístico.",
        translation: "Er fährt vorsichtig und verantwortungsvoll - er hatte nie einen Autounfall.",
        options: ["responsablemente", "responsable", "responsables", "responsablesa"],
        correct: "responsablemente",
        explanation: "Kette: 'cuidadosa y responsablemente' (vorsichtig und verantwortungsvoll). Diese sichere Fahrweise erklärt unfallfreie Fahrhistorie."
      },
      {
        id: "suf_mult_10",
        question: "Habló tranquila y _____ a pesar de estar nerviosa internamente dentro.",
        translation: "Sie sprach ruhig und sicher, obwohl sie innerlich nervös war.",
        options: ["seguramente", "segura", "seguras", "seguro"],
        correct: "seguramente",
        explanation: "Adverbien: 'tranquila y seguramente' (ruhig und sicher). Diese äußere Ruhe trotz innerer Nervosität ist professionelle Selbstkontrolle."
      },
      {
        id: "suf_mult_11",
        question: "Trabaja dura y _____ para alcanzar sus metas ambiciosas objetivos.",
        translation: "Er arbeitet hart und konstant, um seine ehrgeizigen Ziele zu erreichen.",
        options: ["constantemente", "constante", "constantes", "constanto"],
        correct: "constantemente",
        explanation: "Kette: 'dura y constantemente' (hart und konstant). Diese Arbeitsmoral von Härte und Beständigkeit ist Erfolgsformel."
      },
      {
        id: "suf_mult_12",
        question: "Escucha atenta y _____ lo que el profesor explica en clase hoy.",
        translation: "Hör aufmerksam und respektvoll zu, was der Lehrer heute im Unterricht erklärt.",
        options: ["respetuosamente", "respetuosa", "respetuosas", "respetuoso"],
        correct: "respetuosamente",
        explanation: "Adverbien: 'atenta y respetuosamente' (aufmerksam und respektvoll). Diese Unterrichtshaltung ist ideal für erfolgreiches Lernen."
      },
      {
        id: "suf_mult_13",
        question: "Camina lenta y _____ porque le duelen las piernas mucho hoy.",
        translation: "Er geht langsam und schmerzhaft, weil ihm heute die Beine sehr wehtun.",
        options: ["dolorosamente", "dolorosa", "dolorosas", "doloroso"],
        correct: "dolorosamente",
        explanation: "Kette: 'lenta y dolorosamente' (langsam und schmerzhaft). Dieser schmerzhafte Gang zeigt körperliches Leiden, das möglicherweise medizinische Aufmerksamkeit braucht."
      },
      {
        id: "suf_mult_14",
        question: "Vive feliz y _____ en su pequeño apartamento acogedor del centro.",
        translation: "Er lebt glücklich und zufrieden in seinem kleinen gemütlichen Zentrumsapartment.",
        options: ["satisfactoriamente", "satisfactoria", "satisfactorias", "satisfactorio"],
        correct: "satisfactoriamente",
        explanation: "Adverbien: 'feliz y satisfactoriamente' (glücklich und zufrieden). Diese Lebenszufriedenheit trotz kleiner Wohnung zeigt, dass Glück nicht von Größe abhängt."
      },
      {
        id: "suf_mult_15",
        question: "Piensa profunda y _____ antes de tomar decisiones importantes grandes.",
        translation: "Er denkt tief und analytisch, bevor er große wichtige Entscheidungen trifft.",
        options: ["analíticamente", "analítica", "analíticas", "analítico"],
        correct: "analíticamente",
        explanation: "Kette: 'profunda y analíticamente' (tief und analytisch). Diese gründliche Denkweise vor Entscheidungen verhindert impulsive Fehler."
      }
    ]
  },

  estar_siendo: {
    name: "Estar Siendo (Verlaufsform Passiv)",
    description: "Wird gerade - momentane passive Handlungen beschreiben",
    icon: Thermometer,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "est_siendo_1",
        question: "El edificio está _____ _____ renovado completamente ahora mismo.",
        translation: "Das Gebäude wird gerade jetzt komplett renoviert.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für MOMENTANES Passiv nutzen wir 'estar siendo' + Partizip: 'está siendo renovado' (wird gerade renoviert). Diese laufende Renovierung dauert wahrscheinlich Wochen."
      },
      {
        id: "est_siendo_2",
        question: "Los estudiantes están _____ _____ examinados por el comité ahora.",
        translation: "Die Schüler werden jetzt gerade vom Komitee geprüft.",
        options: ["siendo", "ser", "sido", "son"],
        correct: "siendo",
        explanation: "Verlaufsform Passiv Plural: 'están siendo examinados' (werden gerade geprüft). Diese momentane Prüfungssituation ist stressvoll für Schüler."
      },
      {
        id: "est_siendo_3",
        question: "La calle está _____ _____ reparada - hay mucho tráfico alternativo.",
        translation: "Die Straße wird gerade repariert - es gibt viel Umleitungsverkehr.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Momentanes Passiv: 'está siendo reparada' (wird gerade repariert). Diese Baustelle verursacht Verkehrsprobleme und Umwege für Fahrer."
      },
      {
        id: "est_siendo_4",
        question: "El paciente está _____ _____ operado en este momento crítico ahora.",
        translation: "Der Patient wird in diesem kritischen Moment jetzt gerade operiert.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für laufende OP: 'está siendo operado' (wird gerade operiert). Dieser kritische medizinische Eingriff läuft in diesem Moment."
      },
      {
        id: "est_siendo_5",
        question: "La casa está _____ _____ pintada de color blanco limpio brillante.",
        translation: "Das Haus wird gerade in sauberem hellem Weiß gestrichen.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Verlaufsform Passiv: 'está siendo pintada' (wird gerade gestrichen). Diese laufende Malerarbeit verändert aktuell Hauserscheinung."
      },
      {
        id: "est_siendo_6",
        question: "Los resultados están _____ _____ analizados por expertos especializados.",
        translation: "Die Ergebnisse werden gerade von spezialisierten Experten analysiert.",
        options: ["siendo", "ser", "sido", "son"],
        correct: "siendo",
        explanation: "Momentanes Passiv Plural: 'están siendo analizados'. Diese laufende Expertenanalyse braucht Zeit für gründliche Auswertung."
      },
      {
        id: "est_siendo_7",
        question: "El problema está _____ _____ solucionado por el equipo técnico ahora.",
        translation: "Das Problem wird jetzt gerade vom technischen Team gelöst.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für momentane PROBLEMLÖSUNG: 'está siendo solucionado'. Dieser laufende Lösungsprozess gibt Hoffnung auf baldige Behebung."
      },
      {
        id: "est_siendo_8",
        question: "Las decisiones están _____ _____ tomadas en la reunión actual ahora.",
        translation: "Die Entscheidungen werden gerade jetzt im aktuellen Meeting getroffen.",
        options: ["siendo", "ser", "sido", "son"],
        correct: "siendo",
        explanation: "Plural: 'están siendo tomadas' (werden gerade getroffen). Dieser laufende Entscheidungsprozess ist bedeutender Moment für Zukunft."
      },
      {
        id: "est_siendo_9",
        question: "El documento está _____ _____ revisado antes de la publicación final.",
        translation: "Das Dokument wird vor der Endveröffentlichung gerade überprüft.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für laufende REVISION: 'está siendo revisado'. Diese Qualitätskontrolle vor Veröffentlichung ist wichtiger Schritt."
      },
      {
        id: "est_siendo_10",
        question: "Los datos están _____ _____ procesados por el sistema informático potente.",
        translation: "Die Daten werden gerade vom leistungsstarken Computersystem verarbeitet.",
        options: ["siendo", "ser", "sido", "son"],
        correct: "siendo",
        explanation: "Plural: 'están siendo procesados' (werden gerade verarbeitet). Diese Datenverarbeitung kann je nach Menge Minuten oder Stunden dauern."
      },
      {
        id: "est_siendo_11",
        question: "La investigación está _____ _____ realizada por científicos renombrados.",
        translation: "Die Forschung wird gerade von renommierten Wissenschaftlern durchgeführt.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für laufende FORSCHUNG: 'está siendo realizada'. Diese wissenschaftliche Arbeit ist momentaner Prozess mit zukünftigen Ergebnissen."
      },
      {
        id: "est_siendo_12",
        question: "El contrato está _____ _____ negociado entre las dos empresas grandes.",
        translation: "Der Vertrag wird gerade zwischen den beiden großen Firmen verhandelt.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für laufende VERHANDLUNG: 'está siendo negociado'. Dieser Vertragsprozess kann Wochen dauern bis Einigung."
      },
      {
        id: "est_siendo_13",
        question: "La obra de teatro está _____ _____ ensayada intensivamente cada tarde.",
        translation: "Das Theaterstück wird jeden Nachmittag gerade intensiv geprobt.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für andauernde PROBEN: 'está siendo ensayada'. Diese intensive Theaterarbeit bereitet auf Premiere vor."
      },
      {
        id: "est_siendo_14",
        question: "Las propuestas están _____ _____ evaluadas por la junta directiva.",
        translation: "Die Vorschläge werden gerade vom Vorstand bewertet.",
        options: ["siendo", "ser", "sido", "son"],
        correct: "siendo",
        explanation: "Plural: 'están siendo evaluadas' (werden gerade bewertet). Diese Vorstandsbewertung entscheidet über Projektzukunft."
      },
      {
        id: "est_siendo_15",
        question: "El caso legal está _____ _____ investigado por las autoridades competentes.",
        translation: "Der Rechtsfall wird gerade von den zuständigen Behörden untersucht.",
        options: ["siendo", "ser", "sido", "es"],
        correct: "siendo",
        explanation: "Für laufende UNTERSUCHUNG: 'está siendo investigado'. Diese behördliche Ermittlung läuft und kann Monate dauern bis Abschluss."
      }
    ]
  },

  doble_negacion: {
    name: "Doble Negación",
    description: "Doppelnegation - Spanisch braucht beide Verneinungen",
    icon: Repeat,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "doble_neg_1",
        question: "No tengo _____ dinero en mi cartera - está completamente vacía.",
        translation: "Ich habe kein Geld in meiner Brieftasche - sie ist komplett leer.",
        options: ["nada de", "algo de", "mucho", "poco"],
        correct: "nada de",
        explanation: "DOPPELNEGATION ist normal: 'no tengo nada' (habe nicht nichts = habe nichts). Deutsche nutzen nur eine. Diese leere Brieftasche ist finanzielle Notlage."
      },
      {
        id: "doble_neg_2",
        question: "No vino _____ a mi fiesta de cumpleaños - me sentí muy solo.",
        translation: "Niemand kam zu meiner Geburtstagsparty - ich fühlte mich sehr einsam.",
        options: ["nadie", "alguien", "todos", "alguno"],
        correct: "nadie",
        explanation: "Doppelnegation: 'no vino nadie' (kam nicht niemand = niemand kam). Diese Party ohne Gäste ist emotional schmerzhafte Erfahrung von Isolation."
      },
      {
        id: "doble_neg_3",
        question: "No he estado _____ en París - es mi sueño visitarlo algún día.",
        translation: "Ich war niemals in Paris - es ist mein Traum, es eines Tages zu besuchen.",
        options: ["nunca", "siempre", "alguna vez", "a veces"],
        correct: "nunca",
        explanation: "Doppelte Verneinung: 'no he estado nunca' (bin nicht nie gewesen = bin nie gewesen). Dieser unerfüllte Paris-Traum ist Reiseziel für Zukunft."
      },
      {
        id: "doble_neg_4",
        question: "No quiero _____ de comer - ya estoy lleno completamente satisfecho.",
        translation: "Ich will nichts zu essen - ich bin schon komplett satt zufrieden.",
        options: ["nada", "algo", "mucho", "poco"],
        correct: "nada",
        explanation: "Doppelnegation: 'no quiero nada' (will nicht nichts = will nichts). Diese Essensverweigerung zeigt vollständige Sättigung nach Mahlzeit."
      },
      {
        id: "doble_neg_5",
        question: "No hablo _____ con nadie sobre mis problemas personales privados íntimos.",
        translation: "Ich spreche mit niemandem über meine persönlichen privaten intimen Probleme.",
        options: ["nunca", "siempre", "a veces", "mucho"],
        correct: "nunca",
        explanation: "Dreifachnegation möglich: 'no hablo nunca con nadie' (spreche nicht nie mit niemandem). Diese extreme Privatheit zeigt Zurückhaltung oder Vertrauensmangel."
      },
      {
        id: "doble_neg_6",
        question: "No conozco a _____ en esta ciudad nueva - acabo de mudarme.",
        translation: "Ich kenne niemanden in dieser neuen Stadt - ich bin gerade umgezogen.",
        options: ["nadie", "alguien", "todos", "muchos"],
        correct: "nadie",
        explanation: "Doppelnegation: 'no conozco a nadie' (kenne nicht niemanden = kenne niemanden). Diese Isolation nach Umzug ist emotionale Herausforderung."
      },
      {
        id: "doble_neg_7",
        question: "No he comido _____ en todo el día - tengo mucha hambre ahora.",
        translation: "Ich habe den ganzen Tag nichts gegessen - ich habe jetzt großen Hunger.",
        options: ["nada", "algo", "mucho", "poco"],
        correct: "nada",
        explanation: "Doppelnegation: 'no he comido nada' (habe nicht nichts gegessen). Dieser ganztägige Hunger ist extreme Situation, die sofortiges Essen erfordert."
      },
      {
        id: "doble_neg_8",
        question: "No voy _____ a ese restaurante caro - no me gusta nada.",
        translation: "Ich gehe nie in jenes teure Restaurant - es gefällt mir überhaupt nicht.",
        options: ["nunca", "siempre", "a veces", "mucho"],
        correct: "nunca",
        explanation: "Doppelnegation: 'no voy nunca' (gehe nicht nie = gehe nie). Diese kategorische Restaurant-Ablehnung basiert auf schlechten Erfahrungen."
      },
      {
        id: "doble_neg_9",
        question: "No encontré _____ libro interesante en esa biblioteca aburrida pequeña.",
        translation: "Ich fand kein interessantes Buch in jener langweiligen kleinen Bibliothek.",
        options: ["ningún", "algún", "mucho", "poco"],
        correct: "ningún",
        explanation: "Doppelnegation: 'no encontré ningún' (fand nicht keinen = fand keinen). Diese erfolglose Büchersuche zeigt begrenztes Bibliotheksangebot."
      },
      {
        id: "doble_neg_10",
        question: "No me gusta _____ de lo que dijiste ayer - todo fue ofensivo.",
        translation: "Mir gefällt nichts von dem, was du gestern sagtest - alles war beleidigend.",
        options: ["nada", "algo", "mucho", "poco"],
        correct: "nada",
        explanation: "Doppelnegation: 'no me gusta nada' (gefällt mir nicht nichts). Diese totale Ablehnung gestriger Aussagen zeigt tiefen Konflikt."
      },
      {
        id: "doble_neg_11",
        question: "No he visto _____ tan hermoso en toda mi vida entera completa.",
        translation: "Ich habe in meinem ganzen Leben nie etwas so Schönes gesehen.",
        options: ["nunca nada", "siempre algo", "nada", "nunca"],
        correct: "nunca nada",
        explanation: "DREIFACHNEGATION: 'no he visto nunca nada' (habe nicht nie nichts gesehen). Diese Superlativ-Aussage betont außergewöhnliche Schönheit."
      },
      {
        id: "doble_neg_12",
        question: "No puedo hacer _____ para ayudarte - lo siento mucho de verdad.",
        translation: "Ich kann nichts tun, um dir zu helfen - es tut mir wirklich sehr leid.",
        options: ["nada", "algo", "mucho", "poco"],
        correct: "nada",
        explanation: "Doppelnegation: 'no puedo hacer nada' (kann nicht nichts machen). Diese Hilflosigkeit ist frustrierende Ohnmacht in Situation."
      },
      {
        id: "doble_neg_13",
        question: "No le dije _____ sobre el secreto importante - guardé silencio total.",
        translation: "Ich sagte ihm nichts über das wichtige Geheimnis - ich bewahrte totales Schweigen.",
        options: ["nada", "algo", "mucho", "todo"],
        correct: "nada",
        explanation: "Doppelnegation: 'no le dije nada' (sagte ihm nicht nichts). Diese Geheimhaltung zeigt Loyalität oder Diskretion gegenüber Vertrauensperson."
      },
      {
        id: "doble_neg_14",
        question: "No hay _____ manera de resolver esto - es completamente imposible ya.",
        translation: "Es gibt keine Weise, dies zu lösen - es ist schon komplett unmöglich.",
        options: ["ninguna", "alguna", "mucha", "poca"],
        correct: "ninguna",
        explanation: "Doppelnegation: 'no hay ninguna manera' (gibt nicht keine Weise). Diese hoffnungslose Situation bietet keine Lösungsoptionen mehr."
      },
      {
        id: "doble_neg_15",
        question: "No me interesa _____ lo que hacen los demás - vivo mi vida.",
        translation: "Mich interessiert überhaupt nicht, was die anderen machen - ich lebe mein Leben.",
        options: ["nada", "algo", "mucho", "poco"],
        correct: "nada",
        explanation: "Doppelnegation: 'no me interesa nada' (interessiert mich nicht nichts). Diese Gleichgültigkeit gegenüber anderen zeigt Unabhängigkeit oder Selbstfokussierung."
      }
    ]
  }
};

export default part23Categories;
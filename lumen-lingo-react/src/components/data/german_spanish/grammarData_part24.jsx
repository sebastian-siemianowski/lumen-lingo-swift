/**
 * GERMAN → SPANISH GRAMMAR - PART 24
 * 4 categories, 15 questions each
 */

import { Move, Navigation, Anchor, Send } from "lucide-react";

export const part24Categories = {
  verbos_movimiento: {
    name: "Verbos de Movimiento",
    description: "Bewegungsverben - ir, venir, llevar, traer richtig unterscheiden",
    icon: Move,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "mov_1",
        question: "¿_____ conmigo al cine esta noche a ver la nueva película?",
        translation: "Kommst du heute Abend mit mir ins Kino, um den neuen Film zu sehen?",
        options: ["Vienes", "Vas", "Llegas", "Traes"],
        correct: "Vienes",
        explanation: "Für KOMMEN ZU MIR nutzen wir 'venir': '¿vienes conmigo?' (kommst du mit mir?). Mit 'ir' wäre GEHEN. Diese Einladung ins Kino erwartet Bewegung zum Sprecher hin."
      },
      {
        id: "mov_2",
        question: "Yo _____ a la universidad en autobús todos los días laborables.",
        translation: "Ich fahre jeden Werktag mit Bus zur Universität.",
        options: ["voy", "vengo", "llevo", "traigo"],
        correct: "voy",
        explanation: "Für GEHEN IRGENDWOHIN nutzen wir 'ir': 'voy a la universidad' (gehe zur Uni). Diese tägliche Universitätsfahrt ist Standardroute für Studenten."
      },
      {
        id: "mov_3",
        question: "Ella _____ tarde a la reunión porque había tráfico pesado matutino.",
        translation: "Sie kam wegen schweren Morgenverkehrs zu spät zum Meeting.",
        options: ["llegó", "fue", "vino", "salió"],
        correct: "llegó",
        explanation: "Für ANKOMMEN nutzen wir 'llegar': 'llegó tarde' (kam spät an). Diese Verspätung durch Verkehr ist häufige urbane Erfahrung."
      },
      {
        id: "mov_4",
        question: "_____ a mis abuelos de visita al campo este fin de semana.",
        translation: "Ich besuche meine Großeltern dieses Wochenende auf dem Land.",
        options: ["Voy a ver", "Vengo a ver", "Llevo a ver", "Traigo a ver"],
        correct: "Voy a ver",
        explanation: "Für BESUCHEN nutzen wir 'ir a ver': Bewegung weg vom Sprecher. Dieser Wochenendbesuch bei Großeltern auf Land ist familiäre Tradition."
      },
      {
        id: "mov_5",
        question: "¿Puedes _____ pan de la tienda cuando vuelvas a casa?",
        translation: "Kannst du Brot vom Laden mitbringen, wenn du nach Hause zurückkommst?",
        options: ["traer", "llevar", "venir", "ir"],
        correct: "traer",
        explanation: "Für MITBRINGEN ZU MIR nutzen wir 'traer': 'traer pan' (Brot bringen). Mit 'llevar' wäre Wegbringen. Diese Bitte um Brot beim Heimweg ist praktische Kombination von Aufgaben."
      },
      {
        id: "mov_6",
        question: "Voy a _____ este libro a la biblioteca mañana sin falta.",
        translation: "Ich werde dieses Buch morgen ohne Ausnahme zur Bibliothek bringen.",
        options: ["llevar", "traer", "venir", "ir"],
        correct: "llevar",
        explanation: "Für WEGBRINGEN VON MIR nutzen wir 'llevar': 'llevar a la biblioteca' (zur Bibliothek bringen). Diese Bücherrückgabe erfüllt Leihfrist."
      },
      {
        id: "mov_7",
        question: "Mis padres _____ a visitarnos el próximo mes desde el extranjero.",
        translation: "Meine Eltern kommen nächsten Monat aus dem Ausland uns besuchen.",
        options: ["vienen", "van", "llegan", "salen"],
        correct: "vienen",
        explanation: "Für KOMMEN ZU UNS: 'vienen a visitarnos' (kommen uns besuchen). Bewegung zum Sprecher. Dieser Elternbesuch aus Ausland ist freudiges Wiedersehen."
      },
      {
        id: "mov_8",
        question: "_____ de la oficina hace una hora - ahora estoy en casa.",
        translation: "Ich kam vor einer Stunde vom Büro - jetzt bin ich zu Hause.",
        options: ["Salí", "Llegué", "Vine", "Fui"],
        correct: "Salí",
        explanation: "Für WEGGEHEN/VERLASSEN nutzen wir 'salir': 'salí de la oficina' (ging vom Büro weg). Diese Heimkehr nach Arbeit markiert Feierabend."
      },
      {
        id: "mov_9",
        question: "¿_____ tus apuntes a clase? Los necesitamos para estudiar juntos.",
        translation: "Hast du deine Notizen zum Unterricht mitgebracht? Wir brauchen sie zum gemeinsamen Lernen.",
        options: ["Trajiste", "Llevaste", "Viniste", "Fuiste"],
        correct: "Trajiste",
        explanation: "Für MITGEBRACHT ZU MIR: 'trajiste tus apuntes' (brachtest Notizen mit). Diese Notizen sind wichtig für gemeinsame Lernarbeit."
      },
      {
        id: "mov_10",
        question: "Vamos a _____ a los niños al parque para que jueguen.",
        translation: "Wir werden die Kinder in den Park bringen, damit sie spielen.",
        options: ["llevar", "traer", "venir", "ir"],
        correct: "llevar",
        explanation: "Für Kinder HINBRINGEN: 'llevar a los niños' (Kinder bringen). Von hier weg. Dieser Parkausflug gibt Kindern Spielmöglichkeit."
      },
      {
        id: "mov_11",
        question: "Él _____ corriendo cuando vio que llegaba tarde al tren.",
        translation: "Er ging/kam rennend, als er sah, dass er zum Zug zu spät kam.",
        options: ["vino", "fue", "llegó", "salió"],
        correct: "vino",
        explanation: "Für KOMMEN (rennend): 'vino corriendo'. Bewegung zum Sprecher oder Zielpunkt. Diese Eile zeigt Anstrengung, Zug noch zu erwischen."
      },
      {
        id: "mov_12",
        question: "_____ a España de vacaciones cada verano con mi familia entera.",
        translation: "Ich fahre jeden Sommer mit meiner ganzen Familie nach Spanien in Urlaub.",
        options: ["Voy", "Vengo", "Llego", "Salgo"],
        correct: "Voy",
        explanation: "Für HINFAHREN: 'voy a España' (fahre nach Spanien). Diese jährliche Familientradition ist fester Urlaubsplan."
      },
      {
        id: "mov_13",
        question: "¿De dónde _____? Te ves muy cansado y sudado agotado.",
        translation: "Woher kommst du? Du siehst sehr müde und verschwitzt erschöpft aus.",
        options: ["vienes", "vas", "llegas", "sales"],
        correct: "vienes",
        explanation: "Frage nach HERKUNFT: '¿de dónde vienes?' (woher kommst du?). Dieser erschöpfte Zustand deutet auf anstrengende Aktivität hin."
      },
      {
        id: "mov_14",
        question: "No _____ tu móvil - lo dejaste en casa esta mañana.",
        translation: "Du hast dein Handy nicht mitgebracht - du ließest es heute Morgen zu Hause.",
        options: ["trajiste", "llevaste", "viniste", "fuiste"],
        correct: "trajiste",
        explanation: "Für NICHT MITGEBRACHT: 'no trajiste' (brachtest nicht mit). Dieses vergessene Handy zu Hause ist problematisch für Kommunikation unterwegs."
      },
      {
        id: "mov_15",
        question: "_____ a tus amigos a la fiesta - todos son bienvenidos aquí.",
        translation: "Bring deine Freunde zur Party mit - alle sind hier willkommen.",
        options: ["Trae", "Lleva", "Ven", "Ve"],
        correct: "Trae",
        explanation: "Imperativ HERBRINGEN: 'trae a tus amigos' (bring Freunde mit). Zu mir/zur Party hin. Diese offene Einladung erweitert Gästeliste großzügig."
      }
    ]
  },

  expresiones_lugar: {
    name: "Expresiones de Lugar",
    description: "Ortsangaben - hier, dort, oben, unten, innen, außen präzise verwenden",
    icon: Navigation,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "lugar_1",
        question: "_____ hace mucho calor - abre las ventanas para que entre aire.",
        translation: "Hier ist es sehr heiß - öffne die Fenster, damit Luft hereinkommt.",
        options: ["Aquí", "Ahí", "Allí", "Allá"],
        correct: "Aquí",
        explanation: "Für HIER (nahe bei mir) nutzen wir 'aquí'. Diese Hitze im unmittelbaren Raum erfordert Lüftung durch Fensteröffnung."
      },
      {
        id: "lugar_2",
        question: "Pon el libro _____ en la mesa - no en el suelo por favor.",
        translation: "Leg das Buch dort auf den Tisch - bitte nicht auf den Boden.",
        options: ["ahí", "aquí", "allí", "allá"],
        correct: "ahí",
        explanation: "Für DORT (mittlere Distanz, nah bei dir): 'ahí' (dort da). Tisch ist bei dir sichtbar. Diese Anweisung gibt klaren Ablageort für Buch."
      },
      {
        id: "lugar_3",
        question: "_____ lejos se puede ver la montaña nevada más alta de la región.",
        translation: "Dort in der Ferne kann man den höchsten verschneiten Berg der Region sehen.",
        options: ["Allá", "Ahí", "Aquí", "Allí"],
        correct: "Allá",
        explanation: "Für DORT WEIT WEG nutzen wir 'allá': diffusere Richtung als 'allí'. Dieser ferne Bergblick ist panoramisches Naturschauspiel."
      },
      {
        id: "lugar_4",
        question: "Las llaves están _____ en el cajón de arriba superior.",
        translation: "Die Schlüssel sind dort oben in der oberen Schublade.",
        options: ["allí", "aquí", "ahí", "allá"],
        correct: "allí",
        explanation: "Für DORT (spezifischer Ort, ferner): 'allí' zeigt auf bestimmten Ort. Diese Schlüsselposition oben im Schrank ist fester Aufbewahrungsort."
      },
      {
        id: "lugar_5",
        question: "Ven _____ conmigo - quiero mostrarte algo interesante especial sorprendente.",
        translation: "Komm hierher mit mir - ich will dir etwas Interessantes Besonderes Überraschendes zeigen.",
        options: ["aquí", "ahí", "allí", "allá"],
        correct: "aquí",
        explanation: "Für HIERHER (zu mir): 'ven aquí' (komm her). Diese Einladung zur Nähe zeigt etwas Interessantes am Ort des Sprechers."
      },
      {
        id: "lugar_6",
        question: "Mira _____ arriba - hay un pájaro hermoso en el árbol grande.",
        translation: "Schau dort oben - da ist ein schöner Vogel im großen Baum.",
        options: ["allá", "aquí", "ahí", "acá"],
        correct: "allá",
        explanation: "Für DORT OBEN (Richtung): 'allá arriba' (dort oben). Diese Vogelbeobachtung lenkt Blick nach oben zum Baum."
      },
      {
        id: "lugar_7",
        question: "Los documentos importantes están _____ abajo en el archivo del sótano.",
        translation: "Die wichtigen Dokumente sind dort unten im Archiv des Kellers.",
        options: ["allí", "aquí", "ahí", "allá"],
        correct: "allí",
        explanation: "Für DORT UNTEN (spezifisch): 'allí abajo' (dort unten). Diese Kellerarchivierung hält Dokumente sicher aber weniger zugänglich."
      },
      {
        id: "lugar_8",
        question: "Quédate _____ quieto sin moverte - voy a hacerte una foto bonita.",
        translation: "Bleib dort still ohne dich zu bewegen - ich mache dir ein schönes Foto.",
        options: ["ahí", "aquí", "allí", "allá"],
        correct: "ahí",
        explanation: "Für DORT BEI DIR: 'quédate ahí' (bleib da). Diese Fotoanweisung erfordert Position halten für gutes Bild."
      },
      {
        id: "lugar_9",
        question: "Ven para _____ - estás demasiado lejos y no te oigo bien.",
        translation: "Komm hierher - du bist zu weit weg und ich höre dich nicht gut.",
        options: ["acá", "ahí", "allí", "allá"],
        correct: "acá",
        explanation: "Für HIERHER (Lateinamerika bevorzugt 'acá' über 'aquí'): Bewegung zu mir. Diese Bitte um Nähe verbessert Kommunikation bei schlechtem Hören."
      },
      {
        id: "lugar_10",
        question: "Desde _____ no se ve nada - vamos a otro sitio mejor.",
        translation: "Von hier sieht man nichts - lass uns zu einem besseren Ort gehen.",
        options: ["aquí", "ahí", "allí", "allá"],
        correct: "aquí",
        explanation: "Für VON HIER: 'desde aquí' (von hier). Diese schlechte Sicht erfordert Positionswechsel für bessere Aussicht."
      },
      {
        id: "lugar_11",
        question: "_____ dentro de la casa hace fresco - afuera hace mucho calor.",
        translation: "Hier drinnen im Haus ist es kühl - draußen ist es sehr heiß.",
        options: ["Aquí", "Ahí", "Allí", "Allá"],
        correct: "Aquí",
        explanation: "Für HIER DRINNEN: 'aquí dentro' (hier drinnen). Dieser Temperaturunterschied zwischen Innen und Außen macht Haus zur Zuflucht."
      },
      {
        id: "lugar_12",
        question: "Pon la maleta _____ al lado de la puerta principal de entrada.",
        translation: "Stell den Koffer dort neben die Haupteingangstür.",
        options: ["ahí", "aquí", "allí", "allá"],
        correct: "ahí",
        explanation: "Für DORT (sichtbar, mittlere Distanz): 'ahí al lado' (dort daneben). Diese Kofferplatzierung neben Tür erleichtert Abreise."
      },
      {
        id: "lugar_13",
        question: "Vive _____ cerca - solo a cinco minutos caminando a pie.",
        translation: "Er wohnt ganz in der Nähe - nur fünf Gehminuten zu Fuß.",
        options: ["aquí", "ahí", "allí", "allá"],
        correct: "aquí",
        explanation: "Für HIER IN DER NÄHE: 'aquí cerca' (hier nahe). Diese kurze Fußdistanz macht spontane Besuche leicht möglich."
      },
      {
        id: "lugar_14",
        question: "_____ afuera está nevando - no salgas sin abrigo grueso caliente.",
        translation: "Dort draußen schneit es - geh nicht ohne dicken warmen Mantel raus.",
        options: ["Allí", "Aquí", "Ahí", "Acá"],
        correct: "Allí",
        explanation: "Für DORT DRAUSSEN: 'allí afuera' (dort draußen). Dieser Schneefall erfordert warme Kleidung für Außenaktivität."
      },
      {
        id: "lugar_15",
        question: "Nos vemos _____ en la entrada del cine a las siete exactas.",
        translation: "Wir sehen uns dort am Kinoeingang um genau sieben Uhr.",
        options: ["allí", "aquí", "ahí", "acá"],
        correct: "allí",
        explanation: "Für DORT (neutraler Treffpunkt): 'nos vemos allí' (sehen uns dort). Dieser Kinoeingang ist gemeinsamer Sammelpunkt für Treffen."
      }
    ]
  },

  infinitivo_complejo: {
    name: "Construcciones con Infinitivo",
    description: "Komplexe Infinitiv-Konstruktionen - al, sin, para, antes de + Infinitiv",
    icon: Anchor,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "inf_comp_1",
        question: "_____ salir de casa, siempre reviso que tenga las llaves.",
        translation: "Bevor ich aus dem Haus gehe, überprüfe ich immer, ob ich die Schlüssel habe.",
        options: ["Antes de", "Después de", "Al", "Sin"],
        correct: "Antes de",
        explanation: "Für VOR + Infinitiv nutzen wir 'antes de': 'antes de salir' (bevor ich gehe). Diese Vorsichtsmaßnahme verhindert Aussperrung und ist kluge Routine."
      },
      {
        id: "inf_comp_2",
        question: "_____ llegar a casa, me quito los zapatos inmediatamente siempre.",
        translation: "Beim Nachhausekommen ziehe ich mir immer sofort die Schuhe aus.",
        options: ["Al", "Antes de", "Después de", "Sin"],
        correct: "Al",
        explanation: "Für BEIM + Infinitiv nutzen wir 'al': 'al llegar' (beim Ankommen). Gleichzeitigkeit. Diese Schuhe-ausziehen-Gewohnheit hält Haus sauber."
      },
      {
        id: "inf_comp_3",
        question: "Salió de la reunión _____ decir nada a nadie - estaba enfadado.",
        translation: "Er ging aus dem Meeting, ohne jemandem etwas zu sagen - er war wütend.",
        options: ["sin", "antes de", "al", "después de"],
        correct: "sin",
        explanation: "Für OHNE + Infinitiv nutzen wir 'sin': 'sin decir nada' (ohne etwas zu sagen). Dieser wortlose Abgang zeigt starken Ärger oder Protest."
      },
      {
        id: "inf_comp_4",
        question: "_____ comer, me lavo las manos siempre por higiene básica.",
        translation: "Vor dem Essen wasche ich mir aus grundlegender Hygiene immer die Hände.",
        options: ["Antes de", "Después de", "Al", "Para"],
        correct: "Antes de",
        explanation: "Für VOR: 'antes de comer' (vor dem Essen). Diese Hygiene-Routine ist gesundheitliche Grundpraxis vor Mahlzeiten."
      },
      {
        id: "inf_comp_5",
        question: "Estudio mucho _____ aprobar el examen difícil de la semana próxima.",
        translation: "Ich lerne viel, um die schwere Prüfung nächster Woche zu bestehen.",
        options: ["para", "por", "sin", "al"],
        correct: "para",
        explanation: "Für ZWECK nutzen wir 'para' + Infinitiv: 'para aprobar' (um zu bestehen). Diese Lernmotivation ist zielorientiert auf Prüfungserfolg."
      },
      {
        id: "inf_comp_6",
        question: "_____ terminar el trabajo, me fui directamente a casa sin demora.",
        translation: "Nach Beenden der Arbeit ging ich ohne Verzögerung direkt nach Hause.",
        options: ["Después de", "Antes de", "Al", "Sin"],
        correct: "Después de",
        explanation: "Für NACH + Infinitiv nutzen wir 'después de': 'después de terminar' (nach dem Beenden). Dieser direkte Heimweg nach Arbeit zeigt Feierabend."
      },
      {
        id: "inf_comp_7",
        question: "_____ ver esa película, me puse a llorar emocionado profundamente.",
        translation: "Beim Sehen jenes Films fing ich tief bewegt an zu weinen.",
        options: ["Al", "Antes de", "Después de", "Sin"],
        correct: "Al",
        explanation: "Für BEIM: 'al ver' (beim Sehen). Diese emotionale Filmreaktion zeigt wie bewegend Inhalt war."
      },
      {
        id: "inf_comp_8",
        question: "Aprobé el examen _____ estudiar mucho durante semanas enteras completas.",
        translation: "Ich bestand die Prüfung, ohne während ganzer Wochen viel zu lernen.",
        options: ["sin", "después de", "al", "antes de"],
        correct: "sin",
        explanation: "Für OHNE: 'sin estudiar mucho'. Dieser Erfolg ohne intensive Vorbereitung ist entweder Glück oder bereits vorhandenes Wissen."
      },
      {
        id: "inf_comp_9",
        question: "_____ ducharse, se viste y desayuna rápidamente cada mañana siempre.",
        translation: "Nach dem Duschen zieht er sich an und frühstückt jeden Morgen immer schnell.",
        options: ["Después de", "Antes de", "Al", "Sin"],
        correct: "Después de",
        explanation: "Für NACH: 'después de ducharse'. Diese Morgenroutine folgt logischer hygienischer Reihenfolge für frischen Start."
      },
      {
        id: "inf_comp_10",
        question: "Trabajo duro _____ poder comprar una casa propia para mi familia.",
        translation: "Ich arbeite hart, um ein eigenes Haus für meine Familie kaufen zu können.",
        options: ["para", "por", "sin", "al"],
        correct: "para",
        explanation: "Für ZIEL nutzen wir 'para': 'para poder comprar' (um kaufen zu können). Dieses Hauskauf-Ziel motiviert tägliche harte Arbeit."
      },
      {
        id: "lugar_11",
        question: "_____ oír la noticia terrible, se quedó en shock sin palabras.",
        translation: "Beim Hören der schrecklichen Nachricht blieb er sprachlos im Schock.",
        options: ["Al", "Antes de", "Después de", "Sin"],
        correct: "Al",
        explanation: "Für BEIM (sofortige Reaktion): 'al oír' (beim Hören). Diese Schockreaktion ist unmittelbare emotionale Antwort auf schlimme Neuigkeit."
      },
      {
        id: "inf_comp_12",
        question: "Conseguí el trabajo _____ tener mucha experiencia laboral previa anterior.",
        translation: "Ich bekam die Arbeit, ohne viel vorherige frühere Berufserfahrung zu haben.",
        options: ["sin", "con", "después de", "al"],
        correct: "sin",
        explanation: "Für OHNE: 'sin tener experiencia'. Dieser Joberhalt ohne Erfahrung ist entweder gute Chance oder zeigt andere überzeugende Qualitäten."
      },
      {
        id: "inf_comp_13",
        question: "_____ pensar bien, tomó una decisión que luego lamentó mucho.",
        translation: "Ohne gut nachzudenken, traf er eine Entscheidung, die er später sehr bereute.",
        options: ["Sin", "Antes de", "Después de", "Al"],
        correct: "Sin",
        explanation: "Für OHNE: 'sin pensar bien'. Diese impulsive Entscheidung ohne Überlegung führte zu späterem Bedauern."
      },
      {
        id: "inf_comp_14",
        question: "_____ despertarme, lo primero que hago es revisar el móvil siempre.",
        translation: "Nach dem Aufwachen ist das Erste, was ich immer mache, das Handy zu checken.",
        options: ["Después de", "Antes de", "Al", "Sin"],
        correct: "Después de",
        explanation: "Für NACH: 'después de despertarme' (nach dem Aufwachen). Diese moderne Morgengewohnheit ist typisch für digitale Generation."
      },
      {
        id: "inf_comp_15",
        question: "_____ saber la verdad completa, me sentí aliviado y tranquilo finalmente.",
        translation: "Nach Kenntnis der kompletten Wahrheit fühlte ich mich endlich erleichtert und ruhig.",
        options: ["Después de", "Antes de", "Al", "Sin"],
        correct: "Después de",
        explanation: "Für NACH: 'después de saber' (nach dem Wissen). Diese Erleichterung zeigt, dass Ungewissheit belastender war als Wahrheit selbst."
      }
    ]
  },

  verbos_regimen: {
    name: "Verbos con Régimen Preposicional",
    description: "Verben mit fester Präposition - soñar con, pensar en, confiar en",
    icon: Send,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "reg_1",
        question: "Sueño _____ viajar por todo el mundo algún día futuro lejano.",
        translation: "Ich träume davon, eines fernen zukünftigen Tages um die ganze Welt zu reisen.",
        options: ["con", "en", "de", "a"],
        correct: "con",
        explanation: "Verb 'soñar' braucht 'con': 'soñar con viajar' (träumen von Reisen). Feste Verbindung. Dieser Weltreise-Traum ist langfristige Lebensambition."
      },
      {
        id: "reg_2",
        question: "Pienso _____ ti todos los días - te extraño muchísimo de verdad.",
        translation: "Ich denke jeden Tag an dich - ich vermisse dich wirklich sehr.",
        options: ["en", "de", "con", "a"],
        correct: "en",
        explanation: "Verb 'pensar' braucht 'en': 'pensar en ti' (an dich denken). Mit 'de' wäre Meinung. Diese täglichen Gedanken zeigen starke emotionale Verbindung."
      },
      {
        id: "reg_3",
        question: "Confío _____ que todo saldrá bien al final - soy optimista siempre.",
        translation: "Ich vertraue darauf, dass alles am Ende gut ausgehen wird - ich bin immer optimistisch.",
        options: ["en", "con", "de", "a"],
        correct: "en",
        explanation: "Verb 'confiar' braucht 'en': 'confiar en que...' (vertrauen auf/darauf, dass...). Dieses Vertrauen in positiven Ausgang ist hoffnungsvolle Einstellung."
      },
      {
        id: "reg_4",
        question: "Me alegro mucho _____ verte después de tanto tiempo largo separados.",
        translation: "Ich freue mich sehr, dich nach so langer getrennter Zeit zu sehen.",
        options: ["de", "en", "con", "por"],
        correct: "de",
        explanation: "Verb 'alegrarse' braucht 'de': 'me alegro de verte' (freue mich dich zu sehen). Diese Wiedersehensfreude nach langer Zeit ist emotional."
      },
      {
        id: "reg_5",
        question: "Insiste _____ que tiene razón aunque todos le dicen lo contrario.",
        translation: "Er besteht darauf, dass er Recht hat, obwohl alle ihm das Gegenteil sagen.",
        options: ["en", "con", "de", "a"],
        correct: "en",
        explanation: "Verb 'insistir' braucht 'en': 'insiste en que...' (besteht darauf, dass...). Diese Sturheit trotz Widerspruch zeigt Überzeugung oder Unbeweglichkeit."
      },
      {
        id: "reg_6",
        question: "Consiste _____ practicar todos los días sin excepción ni descanso.",
        translation: "Es besteht darin, jeden Tag ohne Ausnahme noch Pause zu üben.",
        options: ["en", "de", "con", "a"],
        correct: "en",
        explanation: "Verb 'consistir' braucht 'en': 'consiste en practicar' (besteht in Üben). Diese Erfolgsformel betont tägliche Übung als Schlüssel."
      },
      {
        id: "reg_7",
        question: "Me enamoré _____ ella la primera vez que la vi en la universidad.",
        translation: "Ich verliebte mich in sie, als ich sie das erste Mal an der Universität sah.",
        options: ["de", "en", "con", "a"],
        correct: "de",
        explanation: "Verb 'enamorarse' braucht 'de': 'me enamoré de ella' (verliebte mich in sie). Diese Liebe auf ersten Blick ist romantisches Uni-Erlebnis."
      },
      {
        id: "reg_8",
        question: "Depende _____ ti si vamos o no - tú decides completamente ahora.",
        translation: "Es hängt von dir ab, ob wir gehen oder nicht - du entscheidest jetzt komplett.",
        options: ["de", "en", "con", "a"],
        correct: "de",
        explanation: "Verb 'depender' braucht 'de': 'depende de ti' (hängt von dir ab). Diese Entscheidungsübertragung gibt volle Kontrolle."
      },
      {
        id: "reg_9",
        question: "Se olvidó _____ comprar leche en el supermercado esta mañana temprano.",
        translation: "Er vergaß heute früh morgens, im Supermarkt Milch zu kaufen.",
        options: ["de", "en", "con", "a"],
        correct: "de",
        explanation: "Reflexiv 'olvidarse' braucht 'de': 'se olvidó de comprar' (vergaß zu kaufen). Diese Milchvergesslichkeit erfordert zweiten Einkaufsgang."
      },
      {
        id: "reg_10",
        question: "Me acuerdo perfectamente bien _____ cuando nos conocimos por primera vez.",
        translation: "Ich erinnere mich perfekt gut daran, als wir uns zum ersten Mal kennenlernten.",
        options: ["de", "en", "con", "a"],
        correct: "de",
        explanation: "Verb 'acordarse' braucht 'de': 'me acuerdo de' (erinnere mich an). Diese lebhafte Erinnerung an erste Begegnung ist emotional bedeutsam."
      },
      {
        id: "reg_11",
        question: "Se dedica _____ enseñar idiomas a estudiantes jóvenes motivados extranjeros.",
        translation: "Er widmet sich dem Unterrichten von Sprachen an junge motivierte ausländische Studenten.",
        options: ["a", "en", "de", "con"],
        correct: "a",
        explanation: "Verb 'dedicarse' braucht 'a': 'se dedica a enseñar' (widmet sich dem Lehren). Diese Berufung zum Sprachunterricht ist erfüllende Tätigkeit."
      },
      {
        id: "reg_12",
        question: "Renuncié _____ mi trabajo anterior porque no me gustaba para nada.",
        translation: "Ich kündigte meine vorherige Arbeit, weil sie mir überhaupt nicht gefiel.",
        options: ["a", "de", "en", "con"],
        correct: "a",
        explanation: "Verb 'renunciar' braucht 'a': 'renuncié a mi trabajo' (kündigte Arbeit). Diese mutige Entscheidung priorisiert Zufriedenheit über Sicherheit."
      },
      {
        id: "reg_13",
        question: "Me preocupo mucho _____ mi familia - su bienestar es lo primero.",
        translation: "Ich mache mir viel Sorgen um meine Familie - ihr Wohlergehen ist das Erste.",
        options: ["por", "de", "en", "con"],
        correct: "por",
        explanation: "Verb 'preocuparse' braucht 'por': 'me preocupo por' (mache mir Sorgen um). Diese familiäre Fürsorge ist natürliche emotionale Verbindung."
      },
      {
        id: "reg_14",
        question: "Se negó rotundamente _____ ayudarme con el proyecto importante difícil.",
        translation: "Er weigerte sich rundweg, mir bei dem wichtigen schweren Projekt zu helfen.",
        options: ["a", "de", "en", "con"],
        correct: "a",
        explanation: "Verb 'negarse' braucht 'a': 'se negó a ayudar' (weigerte sich zu helfen). Diese Ablehnung ohne Begründung ist enttäuschend."
      },
      {
        id: "reg_15",
        question: "Quedamos _____ vernos el sábado a las tres en punto exactas.",
        translation: "Wir verabredeten uns, uns Samstag um genau drei Uhr zu sehen.",
        options: ["en", "de", "con", "a"],
        correct: "en",
        explanation: "Verb 'quedar' braucht 'en': 'quedamos en vernos' (verabredeten uns zu sehen). Diese Samstagsverabredung ist feste soziale Zusage."
      }
    ]
  },

  conjunciones_avanzadas: {
    name: "Conjunciones Avanzadas",
    description: "Komplexe Konjunktionen - a pesar de, siempre que, con tal de que",
    icon: Anchor,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "conj_adv_1",
        question: "_____ que estudies, aprobarás el examen seguramente sin problemas.",
        translation: "Vorausgesetzt dass du lernst, wirst du die Prüfung sicherlich problemlos bestehen.",
        options: ["Siempre que", "Aunque", "Porque", "Cuando"],
        correct: "Siempre que",
        explanation: "Für VORAUSGESETZT DASS nutzen wir 'siempre que' (immer wenn/solange als): mit Subjuntivo bei Zukunft. Diese Bedingung für Erfolg ist klare Wenn-Dann-Beziehung."
      },
      {
        id: "conj_adv_2",
        question: "_____ de que llueva, iremos al parque mañana - tengo paraguas.",
        translation: "Selbst wenn es regnet, gehen wir morgen in den Park - ich habe Regenschirm.",
        options: ["A pesar de", "Aunque", "Porque", "Si"],
        correct: "A pesar de",
        explanation: "Für TROTZ/SELBST WENN mit 'que': 'a pesar de que' (trotz dass/selbst wenn). Mit Subjuntivo für Unsicherheit. Dieser Parkbesuch-Entschluss ist wetterunabhängig."
      },
      {
        id: "conj_adv_3",
        question: "Haré lo que sea necesario _____ tal de conseguir ese trabajo deseado.",
        translation: "Ich werde alles Notwendige tun, nur um jene gewünschte Arbeit zu bekommen.",
        options: ["con", "a", "por", "para"],
        correct: "con",
        explanation: "Für NUR UM nutzen wir 'con tal de' (mit solchem von = nur um): 'con tal de conseguir'. Diese extreme Entschlossenheit zeigt wie wichtig Job ist."
      },
      {
        id: "conj_adv_4",
        question: "_____ menos que estudies más, no aprobarás - es muy difícil.",
        translation: "Es sei denn, du lernst mehr, wirst du nicht bestehen - es ist sehr schwer.",
        options: ["A", "Con", "Por", "Para"],
        correct: "A",
        explanation: "Für ES SEI DENN nutzen wir 'a menos que' (zu weniger dass): mit Subjuntivo. Diese Warnung betont Notwendigkeit intensiveren Lernens für Erfolg."
      },
      {
        id: "conj_adv_5",
        question: "_____ de estar cansado, seguí trabajando en el proyecto importante urgente.",
        translation: "Trotz müde zu sein, arbeitete ich weiter am wichtigen dringenden Projekt.",
        options: ["A pesar", "Aunque", "Porque", "Si"],
        correct: "A pesar",
        explanation: "Für TROTZ + Infinitiv/Substantiv: 'a pesar de estar' (trotz zu sein). Diese Ausdauer trotz Müdigkeit zeigt Pflichtbewusstsein oder Deadline-Druck."
      },
      {
        id: "conj_adv_6",
        question: "No iré a la fiesta _____ menos que vengas tú también conmigo.",
        translation: "Ich gehe nicht zur Party, es sei denn du kommst auch mit mir.",
        options: ["a", "con", "por", "para"],
        correct: "a",
        explanation: "Für ES SEI DENN: 'a menos que vengas' (es sei denn du kommst). Diese Bedingung für Partyteilnahme zeigt Abhängigkeit von deiner Gesellschaft."
      },
      {
        id: "conj_adv_7",
        question: "Te lo diré _____ condición de que no se lo cuentes a nadie.",
        translation: "Ich sage es dir unter der Bedingung, dass du es niemandem erzählst.",
        options: ["a", "con", "por", "en"],
        correct: "a",
        explanation: "Für UNTER DER BEDINGUNG nutzen wir 'a condición de que': mit Subjuntivo. Dieses Geheimnis-Teilen erfordert Vertrauensbeweis durch Schweigen."
      },
      {
        id: "conj_adv_8",
        question: "_____ tanto que estudies, siempre habrá algo nuevo que aprender más.",
        translation: "So viel du auch lernst, es wird immer etwas Neues geben, das man mehr lernen kann.",
        options: ["Por", "Para", "Con", "A"],
        correct: "Por",
        explanation: "Für SO SEHR AUCH nutzen wir 'por...que' mit Subjuntivo: 'por tanto que estudies'. Diese Lebensweisheit betont unendliche Natur des Lernens."
      },
      {
        id: "conj_adv_9",
        question: "Vendré a la reunión _____ que termine a tiempo mi trabajo pendiente.",
        translation: "Ich komme zum Meeting, vorausgesetzt dass ich meine ausstehende Arbeit rechtzeitig beende.",
        options: ["siempre", "aunque", "porque", "cuando"],
        correct: "siempre",
        explanation: "Für VORAUSGESETZT: 'siempre que termine' (vorausgesetzt ich beende). Diese Teilnahmebedingung hängt von Arbeitsfortschritt ab."
      },
      {
        id: "conj_adv_10",
        question: "_____ de ser caro, compré el libro porque lo necesitaba urgentemente.",
        translation: "Trotz teuer zu sein, kaufte ich das Buch, weil ich es dringend brauchte.",
        options: ["A pesar", "Aunque", "Porque", "Si"],
        correct: "A pesar",
        explanation: "Für TROTZ: 'a pesar de ser caro' (trotz teuer zu sein). Notwendigkeit überwand Kostenbedenken bei dringendem Bedarf."
      },
      {
        id: "conj_adv_11",
        question: "Te ayudaré _____ con tal de que me lo pidas amablemente por favor.",
        translation: "Ich helfe dir, nur wenn du mich freundlich bitte darum bittest.",
        options: ["Ø", "a", "con", "por"],
        correct: "Ø",
        explanation: "Konstruktion 'con tal de que' (nur wenn/solange als): mit Subjuntivo. Diese Hilfsbedingung verlangt höfliche Bitte als Respektzeichen."
      },
      {
        id: "conj_adv_12",
        question: "_____ mucho que intentes, no podrás convencerme de eso nunca jamás.",
        translation: "So sehr du auch versuchst, du wirst mich niemals davon überzeugen können.",
        options: ["Por", "Para", "Con", "A"],
        correct: "Por",
        explanation: "Für SO SEHR AUCH: 'por mucho que intentes' (so sehr du auch versuchst). Diese feste Position ist unbeweglich trotz Überzeugungsversuchen."
      },
      {
        id: "conj_adv_13",
        question: "_____ de que hace frío afuera, vamos a salir a caminar igual.",
        translation: "Obwohl es draußen kalt ist, werden wir trotzdem spazieren gehen.",
        options: ["A pesar", "Aunque", "Porque", "Si"],
        correct: "A pesar",
        explanation: "Alternative zu 'aunque': 'a pesar de que hace frío'. Diese Entschlossenheit trotz Kälte zeigt, dass Wetter Pläne nicht ändert."
      },
      {
        id: "conj_adv_14",
        question: "Iré contigo _____ que me prometas volver temprano a casa.",
        translation: "Ich gehe mit dir, vorausgesetzt dass du versprichst, früh nach Hause zurückzukommen.",
        options: ["siempre", "aunque", "porque", "cuando"],
        correct: "siempre",
        explanation: "Bedingung: 'siempre que prometas' (vorausgesetzt du versprichst). Subjuntivo für zukünftige Bedingung. Diese Zusage braucht Versprechen für frühe Heimkehr."
      },
      {
        id: "conj_adv_15",
        question: "Lo haré, _____ que sea difícil y complicado - no me importa.",
        translation: "Ich werde es tun, auch wenn es schwer und kompliziert ist - es ist mir egal.",
        options: ["aunque", "porque", "si", "cuando"],
        correct: "aunque",
        explanation: "Für AUCH WENN mit Subjuntivo: 'aunque sea difícil' (auch wenn es schwer ist). Diese Entschlossenheit trotz Schwierigkeit zeigt starken Willen."
      }
    ]
  }
};

export default part24Categories;
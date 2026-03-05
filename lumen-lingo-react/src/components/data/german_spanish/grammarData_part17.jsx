/**
 * GERMAN → SPANISH GRAMMAR - PART 17
 * 4 categories, 15 questions each
 */

import { Ban, Users, Calendar, Layers } from "lucide-react";

export const part17Categories = {
  imperativo_negativo: {
    name: "Imperativo Negativo (Negative Befehle)",
    description: "Nicht tun - negative Anweisungen mit Subjuntivo geben",
    icon: Ban,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "imp_neg_1",
        question: "No _____ tan rápido - es peligroso en esta carretera estrecha.",
        translation: "Fahr nicht so schnell - es ist gefährlich auf dieser engen Straße.",
        options: ["conduzcas", "conduces", "conduce", "conducir"],
        correct: "conduzcas",
        explanation: "Negative Befehle für TÚ nutzen Subjuntivo: 'no conduzcas' (fahr nicht). Nicht Imperativ-Form. Diese Sicherheitswarnung auf enger Straße ist wichtig zur Unfallvermeidung."
      },
      {
        id: "imp_neg_2",
        question: "No _____ eso - puede ser peligroso para tu salud física.",
        translation: "Iss das nicht - es kann für deine körperliche Gesundheit gefährlich sein.",
        options: ["comas", "comes", "come", "comer"],
        correct: "comas",
        explanation: "Negativer Befehl: 'no comas' (iss nicht). Subjuntivo-Form von 'comer'. Diese Gesundheitswarnung vor potentiell schädlichem Essen ist fürsorglicher Rat."
      },
      {
        id: "imp_neg_3",
        question: "No _____ en la biblioteca - es zona de silencio estricto total.",
        translation: "Sprecht nicht in der Bibliothek - es ist Zone strikten totalen Schweigens.",
        options: ["habléis", "habláis", "hablad", "hablar"],
        correct: "habléis",
        explanation: "Plural informell (vosotros): 'no habléis' (sprecht nicht). Subjuntivo-Form. Diese Bibliotheksregel erhält konzentrierte Lernatmosphäre für alle Nutzer."
      },
      {
        id: "imp_neg_4",
        question: "No _____ nervioso antes del examen - respira hondo profundamente.",
        translation: "Sei nicht nervös vor der Prüfung - atme tief durch.",
        options: ["te pongas", "te pones", "ponte", "ponerte"],
        correct: "te pongas",
        explanation: "Reflexiver negativer Befehl: 'no te pongas' (werde nicht). Pronomen VOR 'no'. Dieser beruhigende Rat vor Prüfung hilft, Prüfungsangst zu kontrollieren."
      },
      {
        id: "imp_neg_5",
        question: "No _____ ustedes preocupados - todo saldrá bien al final seguro.",
        translation: "Seien Sie nicht besorgt - alles wird am Ende sicher gut ausgehen.",
        options: ["estén", "están", "estén", "estar"],
        correct: "estén",
        explanation: "Formell Plural: 'no estén' (seien Sie nicht). Subjuntivo von 'estar'. Diese Beruhigung nimmt Sorgen und gibt Zuversicht für positiven Ausgang."
      },
      {
        id: "imp_neg_6",
        question: "No _____ tus llaves - siempre las pierdes en todas partes.",
        translation: "Vergiss deine Schlüssel nicht - du verlierst sie immer überall.",
        options: ["olvides", "olvidas", "olvida", "olvidar"],
        correct: "olvides",
        explanation: "Negativer Befehl: 'no olvides' (vergiss nicht). Diese Erinnerung basiert auf wiederholtem Schlüsselverlust-Problem in Vergangenheit."
      },
      {
        id: "imp_neg_7",
        question: "No _____ de casa sin paraguas - va a llover seguro hoy.",
        translation: "Geht nicht ohne Regenschirm aus dem Haus - es wird heute sicher regnen.",
        options: ["salgáis", "salís", "salid", "salir"],
        correct: "salgáis",
        explanation: "Plural informell: 'no salgáis' (geht nicht). Unregelmäßiger Subjuntivo von 'salir'. Dieser praktische Wetterrat verhindert Durchnässung bei erwartetem Regen."
      },
      {
        id: "imp_neg_8",
        question: "No le _____ tu número de teléfono a desconocidos extraños nunca.",
        translation: "Gib niemals deine Telefonnummer an fremde Unbekannte.",
        options: ["des", "das", "da", "dar"],
        correct: "des",
        explanation: "Negativer Befehl von 'dar': 'no des' (gib nicht). Diese Sicherheitsregel schützt Privatsphäre und vermeidet unerwünschte Kontakte."
      },
      {
        id: "imp_neg_9",
        question: "No _____ tan impaciente - todo llega a su debido tiempo justo.",
        translation: "Sei nicht so ungeduldig - alles kommt zu seiner rechten Zeit.",
        options: ["seas", "eres", "sé", "ser"],
        correct: "seas",
        explanation: "Von 'ser': 'no seas impaciente' (sei nicht). Hochgradig unregelmäßiger Subjuntivo. Dieser Geduldrat ist philosophische Lebensweisheit über natürliches Timing."
      },
      {
        id: "imp_neg_10",
        question: "No _____ tanto ruido molesto - hay gente durmiendo aquí ahora.",
        translation: "Macht nicht so viel störenden Lärm - es schlafen hier jetzt Leute.",
        options: ["hagáis", "hacéis", "haced", "hacer"],
        correct: "hagáis",
        explanation: "Plural von 'hacer': 'no hagáis ruido' (macht nicht Lärm). Diese Ruhebitte respektiert Schlafbedürfnis anderer Personen im Haushalt."
      },
      {
        id: "imp_neg_11",
        question: "No _____ en la tentación de comer más dulces - piensa en salud.",
        translation: "Fall nicht in die Versuchung, mehr Süßigkeiten zu essen - denk an Gesundheit.",
        options: ["caigas", "caes", "cae", "caer"],
        correct: "caigas",
        explanation: "Von 'caer': 'no caigas' (fall nicht). Unregelmäßiger Subjuntivo. Dieser Gesundheitsrat kämpft gegen Zuckerversuchung mit Vernunftappell."
      },
      {
        id: "imp_neg_12",
        question: "No _____ esa película - tiene un final muy triste decepcionante.",
        translation: "Schaut euch diesen Film nicht an - er hat ein sehr trauriges enttäuschendes Ende.",
        options: ["veáis", "veis", "ved", "ver"],
        correct: "veáis",
        explanation: "Plural: 'no veáis' (schaut nicht). Diese Spoiler-Warnung vor tristem Ende gibt Gelegenheit, emotional belastende Inhalte zu meiden."
      },
      {
        id: "imp_neg_13",
        question: "No _____ solo de noche por esa zona peligrosa del barrio.",
        translation: "Geh nachts nicht allein durch jene gefährliche Gegend des Viertels.",
        options: ["vayas", "vas", "ve", "ir"],
        correct: "vayas",
        explanation: "Von 'ir': 'no vayas' (geh nicht). Unregelmäßiger Subjuntivo. Diese Sicherheitswarnung vor gefährlicher Nachbarschaft ist ernsthafte Vorsichtsmaßnahme."
      },
      {
        id: "imp_neg_14",
        question: "No _____ tus promesas importantes - la gente confía en ti.",
        translation: "Brich deine wichtigen Versprechen nicht - die Leute vertrauen dir.",
        options: ["rompas", "rompes", "rompe", "romper"],
        correct: "rompas",
        explanation: "Negativer Befehl: 'no rompas' (brich nicht). Dieser Integritätsrat betont Wichtigkeit von Verlässlichkeit für soziale Beziehungen."
      },
      {
        id: "imp_neg_15",
        question: "No os _____ por tonterías pequeñas - mantened la paz familiar.",
        translation: "Streitet euch nicht wegen kleiner Dummheiten - wahrt den Familienfrieden.",
        options: ["peleéis", "peleáis", "pelead", "pelear"],
        correct: "peleéis",
        explanation: "Reflexiv Plural: 'no os peleéis' (streitet euch nicht). Pronomen VOR 'no'. Dieser Familienfriedens-Rat empfiehlt Perspektive bei unbedeutenden Konflikten."
      }
    ]
  },

  reciprocos_avanzado: {
    name: "Verbos Recíprocos Avanzados",
    description: "Sich gegenseitig - komplexe reziproke Handlungen",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "recip_adv_1",
        question: "Nos _____ cartas románticas cuando estábamos separados lejos físicamente.",
        translation: "Wir schrieben uns romantische Briefe, als wir körperlich weit getrennt waren.",
        options: ["escribíamos", "escribimos", "escribíamos", "escribían"],
        correct: "escribíamos",
        explanation: "Reziprok in Vergangenheit: 'nos escribíamos' (wir schrieben uns). Imperfecto für wiederholte gegenseitige Handlung. Diese Brief-Korrespondenz hielt Fernbeziehung lebendig."
      },
      {
        id: "recip_adv_2",
        question: "Se _____ con la mirada intensamente sin decir palabra alguna.",
        translation: "Sie schauten sich mit intensivem Blick an ohne ein Wort zu sagen.",
        options: ["miraban", "miran", "miraron", "mirarán"],
        correct: "miraban",
        explanation: "Reziprok: 'se miraban' (schauten sich an). Diese wortlose Kommunikation durch Blicke ist manchmal intensiver als gesprochene Worte."
      },
      {
        id: "recip_adv_3",
        question: "¿Os _____ mensajes durante las vacaciones o estabais ocupados?",
        translation: "Habt ihr euch während der Ferien Nachrichten geschickt oder wart ihr beschäftigt?",
        options: ["mandasteis", "mandáis", "mandaréis", "mandabais"],
        correct: "mandasteis",
        explanation: "Reziprok Pretérito (vosotros): 'os mandasteis' (habt geschickt). Diese Ferienkommunikation zeigt, ob Kontakt während Urlaub gepflegt wurde."
      },
      {
        id: "recip_adv_4",
        question: "Nos _____ en el aeropuerto después de un año largo separados.",
        translation: "Wir umarmten uns am Flughafen nach einem langen getrennten Jahr.",
        options: ["abrazamos", "abrazábamos", "abrazaremos", "abrazaríamos"],
        correct: "abrazamos",
        explanation: "Reziprok Pretérito: 'nos abrazamos' (umarmten uns). Diese emotionale Wiedervereinigung nach Jahr ist intensiver Moment voller Gefühle."
      },
      {
        id: "recip_adv_5",
        question: "Se _____ favores mutuamente - son muy buenos amigos íntimos cercanos.",
        translation: "Sie tun sich gegenseitig Gefallen - sie sind sehr gute enge Freunde.",
        options: ["hacen", "hicieron", "harán", "harían"],
        correct: "hacen",
        explanation: "Gegenseitige Gewohnheit: 'se hacen favores' (tun sich Gefallen). Diese wechselseitige Hilfe ist Grundlage starker Freundschaft."
      },
      {
        id: "recip_adv_6",
        question: "Nos _____ ayudar con los deberes difíciles de matemáticas complejas.",
        translation: "Wir halfen uns gegenseitig bei den schweren komplexen Mathe-Hausaufgaben.",
        options: ["ayudábamos", "ayudamos", "ayudaremos", "ayudaríamos"],
        correct: "ayudábamos",
        explanation: "Wiederholte gegenseitige Hilfe: 'nos ayudábamos' (halfen uns). Imperfecto für Gewohnheit. Diese schulische Zusammenarbeit erleichterte schwierige Aufgaben."
      },
      {
        id: "recip_adv_7",
        question: "Se _____ regalos caros cada aniversario de relación amorosa especial.",
        translation: "Sie schenken sich jeden Jahrestag ihrer besonderen Liebesbeziehung teure Geschenke.",
        options: ["regalan", "regalaron", "regalarán", "regalarían"],
        correct: "regalan",
        explanation: "Reziproke Tradition: 'se regalan' (schenken sich). Diese jährliche Geschenk-Ritual feiert Beziehungsmeilensteine mit materiellen Zeichen der Zuneigung."
      },
      {
        id: "recip_adv_8",
        question: "Nos _____ las manos cordialmente al conocernos por primera vez ayer.",
        translation: "Wir schüttelten uns gestern beim ersten Kennenlernen herzlich die Hände.",
        options: ["dimos", "dábamos", "daremos", "daríamos"],
        correct: "dimos",
        explanation: "Reziprok Pretérito: 'nos dimos la mano' (gaben uns die Hand/schüttelten Hände). Diese förmliche Begrüßung ist professioneller oder kultureller Standard bei Erstkontakt."
      },
      {
        id: "recip_adv_9",
        question: "Se _____ por email constantemente aunque viven muy cerca físicamente.",
        translation: "Sie schreiben sich ständig per E-Mail, obwohl sie körperlich sehr nahe wohnen.",
        options: ["comunican", "comunicaron", "comunicarán", "comunicarían"],
        correct: "comunican",
        explanation: "Gewohnheitsmäßige Kommunikation: 'se comunican' (kommunizieren). Diese digitale Kommunikation trotz Nähe ist moderne Arbeits- oder Bequemlichkeitsrealität."
      },
      {
        id: "recip_adv_10",
        question: "Nos _____ en secreto durante meses sin que nadie supiera nada.",
        translation: "Wir trafen uns monatelang heimlich, ohne dass jemand irgendetwas wusste.",
        options: ["veíamos", "vimos", "veremos", "veríamos"],
        correct: "veíamos",
        explanation: "Wiederholte geheime Treffen: 'nos veíamos' (sahen uns). Imperfecto für Gewohnheit. Diese verborgene Beziehung hat mysteriösen oder verbotenen Charakter."
      },
      {
        id: "recip_adv_11",
        question: "Se _____ en la plaza central cada sábado para charlar tranquilamente.",
        translation: "Sie treffen sich jeden Samstag am Zentralplatz, um ruhig zu plaudern.",
        options: ["encuentran", "encontraron", "encontrarán", "encontrarían"],
        correct: "encuentran",
        explanation: "Regelmäßiges Treffen: 'se encuentran' (treffen sich). Diese wöchentliche Plauder-Tradition am Platz ist soziales Ritual."
      },
      {
        id: "recip_adv_12",
        question: "Nos _____ con frecuencia cuando éramos jóvenes estudiantes universitarios.",
        translation: "Wir besuchten uns häufig, als wir junge Universitätsstudenten waren.",
        options: ["visitábamos", "visitamos", "visitaremos", "visitaríamos"],
        correct: "visitábamos",
        explanation: "Vergangene Gewohnheit: 'nos visitábamos' (besuchten uns). Diese Studienzeit-Besuche sind Teil nostalgischer Jugenderinnerungen."
      },
      {
        id: "recip_adv_13",
        question: "Se _____ promesas eternas de amor bajo las estrellas brillantes.",
        translation: "Sie machten sich unter den hellen Sternen ewige Liebesschwüre.",
        options: ["hicieron", "hacían", "harán", "harían"],
        correct: "hicieron",
        explanation: "Einmaliges reziprokes Ereignis: 'se hicieron promesas' (machten sich Versprechen). Dieser romantische Moment unter Sternen ist bedeutende Beziehungserinnerung."
      },
      {
        id: "recip_adv_14",
        question: "Nos _____ información importante sobre el proyecto común compartido nuestro.",
        translation: "Wir teilen uns wichtige Information über unser gemeinsames geteiltes Projekt.",
        options: ["compartimos", "compartíamos", "compartiremos", "compartiríamos"],
        correct: "compartimos",
        explanation: "Aktuelle gegenseitige Aktion: 'nos compartimos' (teilen uns). Diese Informationsteilung ist essentiell für erfolgreiche Projektzusammenarbeit."
      },
      {
        id: "recip_adv_15",
        question: "Se _____ apoyo mutuo durante los momentos difíciles de crisis personal.",
        translation: "Sie geben sich während schwieriger Momente persönlicher Krise gegenseitige Unterstützung.",
        options: ["dan", "dieron", "darán", "darían"],
        correct: "dan",
        explanation: "Reziproke Unterstützung: 'se dan apoyo' (geben sich Unterstützung). Diese wechselseitige Hilfe in Krisenzeiten ist Zeichen tiefer Freundschaft."
      }
    ]
  },

  expresiones_temporales_avanzadas: {
    name: "Expresiones Temporales Avanzadas",
    description: "Komplexe Zeitausdrücke - Gleichzeitigkeit und Abfolge",
    icon: Calendar,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "temp_adv_1",
        question: "_____ estudiaba, escuchaba música clásica relajante suave siempre.",
        translation: "Während ich lernte, hörte ich immer leise entspannende klassische Musik.",
        options: ["Mientras", "Cuando", "Hasta", "Desde"],
        correct: "Mientras",
        explanation: "Für WÄHREND (Gleichzeitigkeit) nutzen wir 'mientras': 'mientras estudiaba' (während ich lernte). Diese Kombination von Lernen und Musik kann Konzentration fördern oder je nach Person stören."
      },
      {
        id: "temp_adv_2",
        question: "_____ que llegues a casa, llámame sin falta por favor inmediatamente.",
        translation: "Sobald du zu Hause ankommst, ruf mich bitte sofort ohne Ausnahme an.",
        options: ["En cuanto", "Mientras", "Hasta", "Desde"],
        correct: "En cuanto",
        explanation: "Für SOBALD nutzen wir 'en cuanto' (auch 'tan pronto como'): zeigt UNMITTELBARKEIT. Diese dringende Bitte um sofortigen Anruf deutet auf wichtige Angelegenheit hin."
      },
      {
        id: "temp_adv_3",
        question: "Voy a esperar aquí _____ que termine la reunión larga importante.",
        translation: "Ich werde hier warten, bis das lange wichtige Meeting endet.",
        options: ["hasta", "mientras", "cuando", "desde"],
        correct: "hasta",
        explanation: "Für BIS nutzen wir 'hasta que': 'hasta que termine' (bis es endet). Diese geduldige Wartebereitschaft zeigt Wichtigkeit der Person nach Meeting."
      },
      {
        id: "temp_adv_4",
        question: "_____ era niño pequeño, vivía en el campo con mis abuelos.",
        translation: "Als ich ein kleines Kind war, lebte ich auf dem Land bei meinen Großeltern.",
        options: ["Cuando", "Mientras", "Hasta", "Desde"],
        correct: "Cuando",
        explanation: "Für ALS (Zeitpunkt) nutzen wir 'cuando': 'cuando era niño' (als ich Kind war). Diese ländliche Kindheit bei Großeltern ist prägende frühe Lebenserfahrung."
      },
      {
        id: "temp_adv_5",
        question: "No salgas de casa _____ que deje de llover fuerte afuera.",
        translation: "Geh nicht aus dem Haus, bis es draußen aufhört, stark zu regnen.",
        options: ["hasta", "mientras", "cuando", "desde"],
        correct: "hasta",
        explanation: "Negativer Befehl mit 'hasta que': 'no salgas hasta que' (geh nicht bis). Mit Subjuntivo nach 'hasta que' bei Zukunft. Dieser praktische Wetterrat vermeidet Durchnässung."
      },
      {
        id: "recip_adv_6",
        question: "_____ veo esa película antigua, me emociono y lloro mucho.",
        translation: "Jedes Mal wenn ich diesen alten Film sehe, werde ich emotional und weine viel.",
        options: ["Cada vez que", "Mientras", "Hasta", "Desde"],
        correct: "Cada vez que",
        explanation: "Für JEDES MAL WENN: 'cada vez que veo' (jedes Mal wenn ich sehe). Diese wiederkehrende emotionale Reaktion zeigt starke Filmverbindung."
      },
      {
        id: "temp_adv_7",
        question: "_____ como algo dulce, me siento mal del estómago después.",
        translation: "Immer wenn ich etwas Süßes esse, fühlt sich mein Magen danach schlecht an.",
        options: ["Siempre que", "Mientras", "Hasta", "Desde"],
        correct: "Siempre que",
        explanation: "Für IMMER WENN: 'siempre que como' (immer wenn ich esse). Diese konsistente negative Reaktion auf Zucker deutet auf Unverträglichkeit hin."
      },
      {
        id: "temp_adv_8",
        question: "_____ terminó de hablar, todos aplaudieron fuertemente con entusiasmo grande.",
        translation: "Sobald er zu sprechen aufhörte, applaudierten alle begeistert stark.",
        options: ["En cuanto", "Mientras", "Hasta", "Desde"],
        correct: "En cuanto",
        explanation: "Für unmittelbare Reaktion: 'en cuanto terminó' (sobald er beendete). Dieser spontane Applaus zeigt Begeisterung für beeindruckende Rede."
      },
      {
        id: "temp_adv_9",
        question: "_____ vivía en Madrid, iba al Prado cada domingo sin falta.",
        translation: "Solange ich in Madrid lebte, ging ich jeden Sonntag ohne Ausnahme ins Prado.",
        options: ["Mientras", "Cuando", "Hasta", "Desde"],
        correct: "Mientras",
        explanation: "Für SOLANGE: 'mientras vivía' (solange ich lebte). Diese Madrider Museums-Routine ist kulturelle Bereicherung während Residenzzeit."
      },
      {
        id: "temp_adv_10",
        question: "_____ tengas dudas, pregúntame sin miedo ni vergüenza alguna.",
        translation: "Wann immer du Zweifel hast, frag mich ohne jegliche Angst oder Scham.",
        options: ["Cuando", "Mientras", "Hasta", "Desde"],
        correct: "Cuando",
        explanation: "Mit Subjuntivo für WANN IMMER (Zukunft): 'cuando tengas' (wann immer du hast). Dieses offene Hilfsangebot schafft sichere Lernumgebung."
      },
      {
        id: "temp_adv_11",
        question: "No te vayas _____ que yo vuelva - necesito hablar contigo.",
        translation: "Geh nicht weg, bis ich zurückkomme - ich muss mit dir sprechen.",
        options: ["hasta", "mientras", "cuando", "desde"],
        correct: "hasta",
        explanation: "Negativer Befehl mit 'hasta que' + Subjuntivo: 'hasta que vuelva' (bis ich zurückkomme). Diese Bitte zu bleiben deutet auf wichtiges Gespräch hin."
      },
      {
        id: "temp_adv_12",
        question: "_____ más practicas idiomas, mejor los hablarás con fluidez natural.",
        translation: "Je mehr du Sprachen übst, desto besser wirst du sie mit natürlicher Flüssigkeit sprechen.",
        options: ["Cuanto", "Mientras", "Cuando", "Hasta"],
        correct: "Cuanto",
        explanation: "Für JE...DESTO: 'cuanto más...mejor' (je mehr...desto besser). Diese Lernweisheit betont direkte Korrelation zwischen Übung und Beherrschung."
      },
      {
        id: "temp_adv_13",
        question: "_____ salí de casa esta mañana, empezó a llover fuertemente.",
        translation: "Kaum war ich heute Morgen aus dem Haus gegangen, fing es an stark zu regnen.",
        options: ["Apenas", "Mientras", "Hasta", "Desde"],
        correct: "Apenas",
        explanation: "Für KAUM/SOBALD: 'apenas salí' (kaum war ich gegangen). Diese unmittelbare Regenfolge nach Ausgang ist typisches Pech."
      },
      {
        id: "temp_adv_14",
        question: "_____ esté listo el desayuno, avisaré a todos para comer juntos.",
        translation: "Sobald das Frühstück fertig ist, werde ich alle zum gemeinsamen Essen informieren.",
        options: ["Cuando", "Mientras", "Hasta", "Desde"],
        correct: "Cuando",
        explanation: "Mit Subjuntivo für zukünftiges SOBALD: 'cuando esté listo' (sobald es fertig ist). Dieser koordinierte Familienfrühstück-Start ist gemeinschaftliche Mahlzeit."
      },
      {
        id: "temp_adv_15",
        question: "_____ menos duermes, más cansado te sentirás al día siguiente.",
        translation: "Je weniger du schläfst, desto müder wirst du dich am nächsten Tag fühlen.",
        options: ["Cuanto", "Mientras", "Cuando", "Hasta"],
        correct: "Cuanto",
        explanation: "Für JE WENIGER...DESTO: 'cuanto menos...más' (je weniger...desto mehr). Diese Schlaf-Müdigkeits-Beziehung ist grundlegende biologische Wahrheit."
      }
    ]
  },

  ser_estar_contexto: {
    name: "Ser vs Estar im Kontext",
    description: "Fortgeschrittene Unterscheidung - Perspektive und Bedeutungswechsel",
    icon: Layers,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "ser_est_ctx_1",
        question: "Esta manzana _____ verde - aún no está madura para comer.",
        translation: "Dieser Apfel ist grün - er ist noch nicht reif zum Essen.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Mit 'ser' ist GRÜN die FARBE: 'es verde' (ist grün als Farbe). Mit 'estar' wäre es UNREIF. Dieser grüne Apfel ist farblich grün, braucht aber noch Reifezeit."
      },
      {
        id: "ser_est_ctx_2",
        question: "Estas manzanas _____ verdes todavía - no las comas aún por favor.",
        translation: "Diese Äpfel sind noch grün (unreif) - iss sie bitte noch nicht.",
        options: ["están", "son", "estén", "sean"],
        correct: "están",
        explanation: "Mit 'estar' ist GRÜN der ZUSTAND (unreif): 'están verdes' (sind unreif). Mit 'ser' wäre Farbe gemeint. Diese unreifen Äpfel schmecken sauer und brauchen Zeit."
      },
      {
        id: "ser_est_ctx_3",
        question: "Mi abuelo _____ muy joven todavía - tiene solo sesenta años.",
        translation: "Mein Großvater ist noch sehr jung - er hat nur sechzig Jahre.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für CHARAKTERISTIK nutzen wir 'ser': 'es joven' (ist jung als Eigenschaft). Mit 'estar' wäre es temporär jung aussehen. Diese relative Jugend mit sechzig ist moderne Lebenserwartung."
      },
      {
        id: "ser_est_ctx_4",
        question: "Te veo muy guapa hoy - ¿_____ enamorada acaso de alguien?",
        translation: "Du siehst heute sehr hübsch aus - bist du etwa in jemanden verliebt?",
        options: ["estás", "eres", "estés", "seas"],
        correct: "estás",
        explanation: "Für ZUSTAND nutzen wir 'estar': 'estás enamorada' (bist verliebt als Zustand). Mit 'ser' unmöglich. Dieser besondere Glanz durch Verliebtheit ist sichtbar."
      },
      {
        id: "ser_est_ctx_5",
        question: "Este vino _____ muy bueno - lo compré en una bodega famosa.",
        translation: "Dieser Wein ist sehr gut (Qualität) - ich kaufte ihn in berühmter Kellerei.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für QUALITÄT nutzen wir 'ser': 'es bueno' (ist gut als Eigenschaft). Mit 'estar bueno' wäre Geschmack gemeint. Dieser Qualitätswein von berühmter Bodega ist verlässlich."
      },
      {
        id: "ser_est_ctx_6",
        question: "La sopa _____ muy buena hoy - la cocinaste perfectamente bien.",
        translation: "Die Suppe schmeckt heute sehr gut - du hast sie perfekt gut gekocht.",
        options: ["está", "es", "esté", "sea"],
        correct: "está",
        explanation: "Für GESCHMACK nutzen wir 'estar': 'está buena' (schmeckt gut). Mit 'ser' wäre allgemeine Qualität. Dieses Kochlob bezieht sich auf gelungene Zubereitung."
      },
      {
        id: "ser_est_ctx_7",
        question: "Pedro _____ muy aburrido - nunca cuenta historias interesantes emocionantes.",
        translation: "Pedro ist sehr langweilig - er erzählt nie interessante spannende Geschichten.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für CHARAKTER nutzen wir 'ser': 'es aburrido' (ist langweilig als Person). Mit 'estar' wäre gelangweilt. Diese Persönlichkeitseigenschaft ist dauerhafter Charakterzug."
      },
      {
        id: "ser_est_ctx_8",
        question: "Estoy muy aburrido ahora - no hay nada interesante que hacer aquí.",
        translation: "Ich bin jetzt sehr gelangweilt - es gibt nichts Interessantes hier zu tun.",
        options: ["estoy", "soy", "esté", "sea"],
        correct: "estoy",
        explanation: "Für ZUSTAND nutzen wir 'estar': 'estoy aburrido' (bin gelangweilt). Mit 'ser' wäre langweilige Person. Diese momentane Langeweile sucht nach Zeitvertreib."
      },
      {
        id: "ser_est_ctx_9",
        question: "María _____ muy lista - siempre saca las mejores notas escolares.",
        translation: "María ist sehr klug - sie bekommt immer die besten Schulnoten.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für INTELLIGENZ nutzen wir 'ser': 'es lista' (ist klug). Mit 'estar lista' wäre bereit/fertig. Diese natürliche Intelligenz zeigt sich in akademischen Erfolgen."
      },
      {
        id: "ser_est_ctx_10",
        question: "Ya _____ lista para salir - he terminado de arreglarme completamente.",
        translation: "Ich bin schon fertig zum Ausgehen - ich bin komplett mit Fertigmachen fertig.",
        options: ["estoy", "soy", "esté", "sea"],
        correct: "estoy",
        explanation: "Für FERTIG/BEREIT nutzen wir 'estar': 'estoy lista' (bin fertig). Mit 'ser' wäre klug. Diese Bereitschaft zum Ausgehen signalisiert Abfahrtsmöglichkeit."
      },
      {
        id: "ser_est_ctx_11",
        question: "Esta película _____ muy interesante - trata temas profundos importantes actuales.",
        translation: "Dieser Film ist sehr interessant - er behandelt wichtige aktuelle tiefe Themen.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für EIGENSCHAFT nutzen wir 'ser': 'es interesante' (ist interessant als Charakteristik). Diese thematische Tiefe macht Film wertvoll."
      },
      {
        id: "ser_est_ctx_12",
        question: "El café _____ frío ya - déjame calentarlo en el microondas rápido.",
        translation: "Der Kaffee ist schon kalt - lass mich ihn schnell in der Mikrowelle aufwärmen.",
        options: ["está", "es", "esté", "sea"],
        correct: "está",
        explanation: "Für TEMPERATUR (Zustand) nutzen wir 'estar': 'está frío' (ist kalt). Diese Abkühlung erfordert Wiedererwärmung für genießbaren Kaffee."
      },
      {
        id: "ser_est_ctx_13",
        question: "Juan _____ muy pesado hoy - no para de hacer preguntas molestas.",
        translation: "Juan ist heute sehr nervig - er hört nicht auf, störende Fragen zu stellen.",
        options: ["está", "es", "esté", "sea"],
        correct: "está",
        explanation: "Für VERHALTEN HEUTE nutzen wir 'estar': 'está pesado' (ist nervig heute). Mit 'ser pesado' wäre permanente Eigenschaft. Dieses temporär nervige Verhalten ist vielleicht ungewöhnlich für ihn."
      },
      {
        id: "ser_est_ctx_14",
        question: "Ese profesor _____ muy pesado - siempre da demasiados deberes excesivos.",
        translation: "Jener Lehrer ist sehr streng/anstrengend - er gibt immer übermäßige Hausaufgaben.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für CHARAKTER nutzen wir 'ser': 'es pesado' (ist anstrengend als Person). Diese permanente Strenge mit Hausaufgaben ist Unterrichtsstil."
      },
      {
        id: "ser_est_ctx_15",
        question: "La reunión _____ en la sala principal grande a las tres exactas.",
        translation: "Das Meeting ist um genau drei Uhr im großen Hauptsaal.",
        options: ["es", "está", "sea", "esté"],
        correct: "es",
        explanation: "Für ORT VON EREIGNIS nutzen wir 'ser': 'la reunión es en' (Meeting ist in). Mit 'estar' nur für temporäre Position. Diese Ortsangabe für Meeting ist wichtig für Teilnehmer."
      }
    ]
  }
};

export default part17Categories;
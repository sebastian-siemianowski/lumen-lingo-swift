/**
 * GERMAN → SPANISH GRAMMAR - PART 5
 * 4 categories, 15 questions each
 */

import { Music, Flame, Sparkles, Crown } from "lucide-react";

export const part5Categories = {
  preterito_imperfecto: {
    name: "Pretérito vs. Imperfecto",
    description: "Zwei Vergangenheitsformen - abgeschlossen vs. gewohnheitsmäßig",
    icon: Music,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "pret_imp_1",
        question: "Cuando _____ niño, jugaba en este parque cada día.",
        translation: "Als ich ein Kind war, spielte ich jeden Tag in diesem Park.",
        options: ["era", "fui", "estaba", "estuve"],
        correct: "era",
        explanation: "Für DAUERZUSTAND in Vergangenheit nutzen wir IMPERFECTO: 'era niño' (war Kind). Es beschreibt Hintergrundzustand, nicht einzelnes Ereignis. Im Deutschen oft 'war', aber Spanisch unterscheidet: Imperfecto für was du WARST über längere Zeit. Diese Kindheitserinnerung im Park evoziert nostalgische Gefühle."
      },
      {
        id: "pret_imp_2",
        question: "Ayer _____ al supermercado y compré comida para la semana.",
        translation: "Gestern ging ich zum Supermarkt und kaufte Essen für die Woche.",
        options: ["fui", "iba", "era", "estaba"],
        correct: "fui",
        explanation: "Für EINZELNE abgeschlossene Handlung nutzen wir PRETÉRITO: 'fui' (ich ging). Es ist spezifisches Ereignis gestern. 'Iba' wäre 'ich pflegte zu gehen'. Diese konkrete Einkaufstour gestern mit genauem Resultat (Wocheneinkauf) ist abgeschlossene Aktion."
      },
      {
        id: "pret_imp_3",
        question: "Mientras yo _____ la cena, sonó el teléfono de repente.",
        translation: "Während ich das Abendessen kochte, klingelte plötzlich das Telefon.",
        options: ["cocinaba", "cociné", "cocino", "he cocinado"],
        correct: "cocinaba",
        explanation: "Für HINTERGRUNDHANDLUNG (was gerade lief) nutzen wir IMPERFECTO: 'cocinaba' (war am Kochen). Das Telefonklingeln (Pretérito) unterbricht. Diese 'während'-Konstruktion zeigt klassischen Imperfecto-Gebrauch: andauernde Aktion wird von punktuellem Ereignis unterbrochen."
      },
      {
        id: "pret_imp_4",
        question: "El año pasado _____ a París por primera vez en mi vida.",
        translation: "Letztes Jahr reiste ich zum ersten Mal in meinem Leben nach Paris.",
        options: ["viajé", "viajaba", "viajo", "he viajado"],
        correct: "viajé",
        explanation: "Für spezifische REISE mit Zeitangabe nutzen wir PRETÉRITO: 'viajé' (ich reiste). 'El año pasado' markiert konkreten Zeitpunkt. Diese erste Paris-Reise ist besonderes Lebensereignis, das klar in Vergangenheit liegt und abgeschlossen ist."
      },
      {
        id: "pret_imp_5",
        question: "Cuando éramos jóvenes, _____ mucho deporte juntos siempre.",
        translation: "Als wir jung waren, trieben wir immer viel Sport zusammen.",
        options: ["hacíamos", "hicimos", "hacemos", "hemos hecho"],
        correct: "hacíamos",
        explanation: "Für GEWOHNHEIT in Vergangenheit nutzen wir IMPERFECTO: 'hacíamos deporte' (wir pflegten Sport zu treiben). 'Siempre' signalisiert Wiederholung. Diese nostalgische Erinnerung an gemeinsame sportliche Aktivitäten in Jugend zeigt Veränderung von Lebensstil mit Alter."
      },
      {
        id: "pret_imp_6",
        question: "_____ las tres de la tarde cuando llegamos al aeropuerto finalmente.",
        translation: "Es war drei Uhr nachmittags, als wir endlich am Flughafen ankamen.",
        options: ["Eran", "Fueron", "Estaban", "Estuvieron"],
        correct: "Eran",
        explanation: "Für UHRZEIT in Vergangenheit nutzen wir IMPERFECTO: 'eran las tres' (es war drei Uhr). Uhrzeit ist Hintergrund-Info, keine Handlung. Diese zeitliche Einordnung der Flughafenankuft kontextualisiert das Ereignis im Tagesablauf und zeigt vielleicht, ob ihr pünktlich oder verspätet wart."
      },
      {
        id: "pret_imp_7",
        question: "De repente, _____ un ruido fuerte en la cocina anoche.",
        translation: "Plötzlich hörte ich gestern Abend ein lautes Geräusch in der Küche.",
        options: ["oí", "oía", "oigo", "he oído"],
        correct: "oí",
        explanation: "Für PLÖTZLICHES Ereignis nutzen wir PRETÉRITO: 'oí' (ich hörte). 'De repente' signalisiert punktuelles Ereignis. Diese nächtliche Störung durch unerwartetes Geräusch erzeugt wahrscheinlich Schreck oder Neugier, was die Ursache gewesen sein könnte."
      },
      {
        id: "pret_imp_8",
        question: "Todos los veranos _____ a la playa con mi familia entera.",
        translation: "Jeden Sommer fuhren wir mit meiner ganzen Familie an den Strand.",
        options: ["íbamos", "fuimos", "vamos", "hemos ido"],
        correct: "íbamos",
        explanation: "Für WIEDERHOLTE Handlung (jeden Sommer) nutzen wir IMPERFECTO: 'íbamos' (wir pflegten zu fahren). 'Todos los veranos' zeigt Gewohnheit. Diese jährliche Familientradition von Strandurlaub schafft wiederkehrende schöne Erinnerungen über viele Sommer hinweg."
      },
      {
        id: "pret_imp_9",
        question: "Mi abuelo _____ muy alto y fuerte en su juventud pasada.",
        translation: "Mein Großvater war in seiner vergangenen Jugend sehr groß und stark.",
        options: ["era", "fue", "estaba", "estuvo"],
        correct: "era",
        explanation: "Für BESCHREIBUNG in Vergangenheit nutzen wir IMPERFECTO: 'era alto' (war groß). Physische Eigenschaften über längere Zeit sind Imperfecto. Diese Erinnerung an Großvaters körperliche Stärke in Jugend kontrastiert vielleicht mit aktuellem Alter und zeigt Wandel der Zeit."
      },
      {
        id: "pret_imp_10",
        question: "Anoche _____ una película muy interesante en el cine local.",
        translation: "Gestern Abend schaute ich einen sehr interessanten Film im örtlichen Kino.",
        options: ["vi", "veía", "veo", "he visto"],
        correct: "vi",
        explanation: "Für EINZELNES abgeschlossenes Ereignis (gestern Abend) nutzen wir PRETÉRITO: 'vi' (ich sah). Zeitpunkt 'anoche' markiert spezifischen Moment. Dieser Kinobesuch gestern Abend ist abgeschlossenes Erlebnis mit Anfang und Ende in definierter Vergangenheit."
      },
      {
        id: "pret_imp_11",
        question: "Antes _____ mucho café, pero ahora prefiero el té verde.",
        translation: "Früher trank ich viel Kaffee, aber jetzt bevorzuge ich grünen Tee.",
        options: ["bebía", "bebí", "bebo", "he bebido"],
        correct: "bebía",
        explanation: "Für FRÜHERE Gewohnheit nutzen wir IMPERFECTO: 'bebía' (ich pflegte zu trinken). 'Antes' signalisiert vergangene Gewohnheit. Dieser Wechsel von Kaffee zu Tee zeigt Änderung in Geschmack oder Gesundheitsbewusstsein im Laufe der Zeit."
      },
      {
        id: "pret_imp_12",
        question: "El domingo pasado _____ todo el día en casa descansando.",
        translation: "Letzten Sonntag blieb ich den ganzen Tag zu Hause und ruhte mich aus.",
        options: ["estuve", "estaba", "fui", "era"],
        correct: "estuve",
        explanation: "Für BEGRENZTE Zeitdauer (ganzer Tag) nutzen wir PRETÉRITO: 'estuve' (ich war/blieb). Obwohl es Dauer war, hat sie klares Ende. Diese bewusste Entscheidung, ganzen Sonntag zu Hause zu verbringen, ist Erholung nach arbeitsreicher Woche."
      },
      {
        id: "pret_imp_13",
        question: "Cuando _____ pequeños, no teníamos teléfonos móviles en absoluto.",
        translation: "Als wir klein waren, hatten wir überhaupt keine Handys.",
        options: ["éramos", "fuimos", "estábamos", "estuvimos"],
        correct: "éramos",
        explanation: "Für SEIN als Kind (Dauerzustand) nutzen wir IMPERFECTO: 'éramos pequeños' (wir waren klein). Es war länger andauernde Phase. Diese Reflektion über technikfreie Kindheit zeigt generationalen Wandel und wie Technologie Kindheit verändert hat."
      },
      {
        id: "pret_imp_14",
        question: "Ayer me _____ mal todo el día entero por la gripe.",
        translation: "Gestern fühlte ich mich den ganzen Tag wegen der Grippe schlecht.",
        options: ["sentí", "sentía", "siento", "he sentido"],
        correct: "sentí",
        explanation: "Für Zustand an SPEZIFISCHEM Tag nutzen wir PRETÉRITO: 'me sentí mal' (fühlte mich schlecht). 'Ayer' markiert konkreten Tag. Obwohl es Zustand war, ist es abgeschlossenes Ereignis an bestimmtem Tag. Diese Grippe-Symptomatik gestern war unangenehm aber zeitlich begrenzt."
      },
      {
        id: "pret_imp_15",
        question: "De niña, mi madre siempre me _____ cuentos antes de dormir.",
        translation: "Als Kind erzählte mir meine Mutter immer Geschichten vor dem Schlafengehen.",
        options: ["contaba", "contó", "cuenta", "ha contado"],
        correct: "contaba",
        explanation: "Für WIEDERHOLTE Handlung in Kindheit nutzen wir IMPERFECTO: 'contaba' (erzählte gewöhnlich). 'Siempre' zeigt Gewohnheit. Diese liebevolle Routine des abendlichen Geschichtenerzählens ist schöne Kindheitserinnerung, die emotionale Bindung zwischen Mutter und Kind stärkte."
      }
    ]
  },

  verbos_reflexivos: {
    name: "Reflexive Verben",
    description: "Sich waschen, sich anziehen - Verben mit reflexiven Pronomen",
    icon: Flame,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "reflex_v_1",
        question: "Yo _____ _____ a las siete cada mañana para ir al trabajo.",
        translation: "Ich wache jeden Morgen um sieben auf, um zur Arbeit zu gehen.",
        options: ["me despierto", "despierto", "me despertó", "se despierta"],
        correct: "me despierto",
        explanation: "Reflexive Verben brauchen Reflexivpronomen: 'me despierto' (ich wache auf). Im Deutschen 'aufwachen' ist nicht reflexiv, aber Spanisch 'despertarse' IST reflexiv. Das Pronomen 'me' passt zur Person (ich = me, du = te). Diese frühe Weckzeit strukturiert Arbeitstag."
      },
      {
        id: "reflex_v_2",
        question: "Ella _____ _____ las manos antes de comer siempre sin falta.",
        translation: "Sie wäscht sich immer ohne Ausnahme die Hände vor dem Essen.",
        options: ["se lava", "lava", "me lavo", "te lavas"],
        correct: "se lava",
        explanation: "Für 'sie wäscht sich' sagen wir 'se lava': Reflexivpronomen 'se' für 3. Person (él, ella). Im Deutschen 'sich' ist gleich für alle, aber Spanisch ändert Pronomen je nach Person. Diese Hygieneroutine vor Essen ist gesunde Gewohnheit zur Krankheitsprävention."
      },
      {
        id: "reflex_v_3",
        question: "Nosotros _____ _____ rápidamente para salir temprano de casa.",
        translation: "Wir ziehen uns schnell an, um früh aus dem Haus zu gehen.",
        options: ["nos vestimos", "vestimos", "se visten", "me visto"],
        correct: "nos vestimos",
        explanation: "Für 'wir ziehen uns an': 'nos vestimos' mit Reflexivpronomen 'nos'. Im Deutschen 'sich anziehen' hat 'sich' für alle, Spanisch variiert: nos für 'wir'. Diese morgendliche Eile beim Anziehen ist typisch, wenn Zeit knapp ist vor Arbeit oder Schule."
      },
      {
        id: "reflex_v_4",
        question: "¿A qué hora _____ _____ tú normalmente los fines de semana?",
        translation: "Um wie viel Uhr wachst du normalerweise am Wochenende auf?",
        options: ["te despiertas", "despiertos", "se despierta", "me despierto"],
        correct: "te despiertas",
        explanation: "Für 'du wachst auf' sagen wir 'te despiertas': Pronomen 'te' für 2. Person. In Fragen bleibt Reflexivpronomen VOR Verb. Diese Frage über Wochenend-Weckzeit vergleicht wahrscheinlich mit Wochentags-Routine, wo man meist früher aufstehen muss."
      },
      {
        id: "reflex_v_5",
        question: "Mi padre _____ _____ todos los días antes del desayuno matutino.",
        translation: "Mein Vater rasiert sich jeden Tag vor dem morgendlichen Frühstück.",
        options: ["se afeita", "afeita", "me afeito", "te afeitas"],
        correct: "se afeita",
        explanation: "Für 'er rasiert sich': 'se afeita' (Pronomen 'se' für 3. Person). Deutsche 'sich rasieren' ist gleich für alle Personen. Diese tägliche Rasur-Routine vor Frühstück ist Teil seiner morgendlichen Körperpflege und Vorbereitung für den Tag."
      },
      {
        id: "reflex_v_6",
        question: "Los niños _____ _____ los dientes después de cada comida.",
        translation: "Die Kinder putzen sich nach jeder Mahlzeit die Zähne.",
        options: ["se cepillan", "cepillan", "me cepillo", "te cepillas"],
        correct: "se cepillan",
        explanation: "Für 'sie putzen sich' Plural: 'se cepillan los dientes'. Pronomen 'se' gilt für 3. Person Singular UND Plural. Diese Zahnputz-Routine nach Mahlzeiten ist exzellente Mundhygiene, die Eltern ihren Kindern als lebenslange gesunde Gewohnheit beibringen."
      },
      {
        id: "reflex_v_7",
        question: "Yo _____ _____ mucho cuando veo películas tristes siempre.",
        translation: "Ich werde immer sehr emotional, wenn ich traurige Filme sehe.",
        options: ["me emociono", "emociono", "se emociona", "te emocionas"],
        correct: "me emociono",
        explanation: "Für 'ich werde emotional': 'me emociono' ist reflexiv. Viele Gefühlsverben sind reflexiv im Spanischen. Diese emotionale Reaktion auf traurige Filme zeigt Empathie und Sensibilität, was völlig normal ist bei bewegenden Geschichten."
      },
      {
        id: "reflex_v_8",
        question: "Ella _____ _____ de su nombre cuando nos conocimos ayer.",
        translation: "Sie erinnerte sich gestern an ihren Namen, als wir uns kennenlernten.",
        options: ["se acordó", "acordó", "me acordé", "te acordaste"],
        correct: "se acordó",
        explanation: "Für 'sich erinnern' (Pretérito): 'se acordó' ist reflexiv. 'Acordar' ohne 'se' bedeutet 'vereinbaren'. Diese Verwechslung des Namens bei erstem Treffen ist peinliche aber menschliche Situation, die zeigt, wie Namen schwer zu behalten sind."
      },
      {
        id: "reflex_v_9",
        question: "¿_____ _____ ustedes bien en la fiesta de anoche pasada?",
        translation: "Haben Sie sich gestern Abend auf der Party gut amüsiert?",
        options: ["Se divirtieron", "Divirtieron", "Me divertí", "Te divertiste"],
        correct: "Se divirtieron",
        explanation: "Für 'sich amüsieren' (Sie Plural): 'se divirtieron' ist reflexiv im Pretérito. Höfliche Nachfrage nach Partyerfahrung. Diese Frage über Spaß auf Party ist höfliche Folgekommunikation, die zeigt, dass Gastgeber oder Freund sich für dein Wohlbefinden interessiert."
      },
      {
        id: "reflex_v_10",
        question: "Tengo que _____ _____ antes de la reunión importante de hoy.",
        translation: "Ich muss mich vor dem wichtigen Meeting heute duschen.",
        options: ["ducharme", "duchar", "me ducho", "se ducha"],
        correct: "ducharme",
        explanation: "Bei Infinitiv nach 'tener que' hängt Pronomen AN: 'ducharme' (mich duschen). Auch möglich: 'me tengo que duchar'. Diese Hygiene vor wichtigem Meeting ist Teil professioneller Vorbereitung für guten ersten Eindruck."
      },
      {
        id: "reflex_v_11",
        question: "Nosotros _____ _____ temprano porque estamos muy cansados hoy.",
        translation: "Wir gehen früh schlafen, weil wir heute sehr müde sind.",
        options: ["nos acostamos", "acostamos", "se acuestan", "me acuesto"],
        correct: "nos acostamos",
        explanation: "Für 'wir legen uns hin/gehen schlafen': 'nos acostamos' ist reflexiv. Pronomen 'nos' für 'wir'. Diese frühe Schlafenszeit wegen Müdigkeit ist vernünftige Selbstfürsorge, die Körper die Ruhe gibt, die er braucht."
      },
      {
        id: "reflex_v_12",
        question: "¿Por qué no _____ _____ tú de mi nombre todavía?",
        translation: "Warum erinnerst du dich noch nicht an meinen Namen?",
        options: ["te acuerdas", "acuerdas", "se acuerda", "me acuerdo"],
        correct: "te acuerdas",
        explanation: "Für 'du erinnerst dich': 'te acuerdas' mit Pronomen 'te'. Präsens weil es aktuelle Situation ist. Diese Frustration, dass jemand deinen Namen vergisst, ist verletzend, besonders wenn ihr euch schon mehrmals getroffen habt."
      },
      {
        id: "reflex_v_13",
        question: "Ellos _____ _____ muy contentos con los resultados del examen.",
        translation: "Sie fühlen sich sehr zufrieden mit den Prüfungsergebnissen.",
        options: ["se sienten", "sienten", "me siento", "te sientes"],
        correct: "se sienten",
        explanation: "Für 'sich fühlen' Plural: 'se sienten contentos'. Viele Gefühlsverben sind reflexiv. Diese Zufriedenheit mit Prüfungsergebnissen ist verdiente Belohnung für harte Vorbereitung und zeigt, dass Anstrengung sich ausgezahlt hat."
      },
      {
        id: "reflex_v_14",
        question: "Voy a _____ _____ en este hotel cerca de la playa esta noche.",
        translation: "Ich werde heute Nacht in diesem Hotel nahe am Strand übernachten.",
        options: ["quedarme", "quedar", "me quedo", "se queda"],
        correct: "quedarme",
        explanation: "Bei Infinitiv nach 'voy a' hängt Pronomen an: 'quedarme' (mich aufhalten/bleiben). Diese Übernachtung im Strandhotel ist Teil eines Urlaubs oder Geschäftsreise, die Entspannung mit Meeresblick verspricht."
      },
      {
        id: "reflex_v_15",
        question: "Tú siempre _____ _____ de todo sin razón válida alguna.",
        translation: "Du beschwerst dich immer über alles ohne irgendeinen gültigen Grund.",
        options: ["te quejas", "quejas", "se queja", "me quejo"],
        correct: "te quejas",
        explanation: "Für 'sich beschweren': 'te quejas' mit Pronomen 'te' für 2. Person. 'Quejarse' ist immer reflexiv. Diese Kritik an ständigem Beschweren ohne Grund deutet auf Verhaltensmuster hin, das zwischenmenschliche Beziehungen belasten kann."
      }
    ]
  },

  comparativos_superlativos: {
    name: "Komparativ und Superlativ",
    description: "Vergleiche und Extreme - más que, el más, tan...como",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_super_1",
        question: "Mi hermano es _____ alto _____ yo en la familia.",
        translation: "Mein Bruder ist größer als ich in der Familie.",
        options: ["más / que", "tan / como", "el más / de", "muy / que"],
        correct: "más / que",
        explanation: "Für KOMPARATIV (mehr als) nutzen wir 'más...que': 'más alto que yo' (größer als ich). Im Deutschen 'größer als', Spanisch baut mit 'más'. Diese Größenunterschiede zwischen Geschwistern sind genetische Variation, die oft zu freundlichen Neckereien führt."
      },
      {
        id: "comp_super_2",
        question: "Ella es _____ _____ inteligente de toda la clase entera.",
        translation: "Sie ist die Intelligenteste der ganzen Klasse.",
        options: ["la más", "más", "tan", "muy"],
        correct: "la más",
        explanation: "Für SUPERLATIV nutzen wir Artikel + 'más': 'la más inteligente' (die Intelligenteste). Im Deutschen '-ste' Endung, Spanisch nutzt 'el/la más'. Diese akademische Spitzenposition zeigt außergewöhnliche kognitive Fähigkeiten, die wahrscheinlich zu besten Noten führen."
      },
      {
        id: "comp_super_3",
        question: "Este libro es _____ interesante _____ el otro que leí.",
        translation: "Dieses Buch ist genauso interessant wie das andere, das ich las.",
        options: ["tan / como", "más / que", "el más / de", "muy / como"],
        correct: "tan / como",
        explanation: "Für GLEICHHEIT nutzen wir 'tan...como': 'tan interesante como' (so interessant wie). Im Deutschen 'so...wie' oder 'genauso...wie'. Diese Äquivalenz in Qualität zwischen beiden Büchern macht Wahl schwierig, da beide gleich lesenswert sind."
      },
      {
        id: "comp_super_4",
        question: "Madrid es _____ grande _____ Barcelona aproximadamente en tamaño.",
        translation: "Madrid ist ungefähr so groß wie Barcelona in der Größe.",
        options: ["tan / como", "más / que", "el más / de", "muy / como"],
        correct: "tan / como",
        explanation: "Für Größengleichheit: 'tan grande como Barcelona'. Mit Adverbien oder Adjektiven nutzen wir 'tan...como'. Diese Vergleich spanischer Großstädte in Größe ist geografische Beobachtung, obwohl beide sehr unterschiedliche Charaktere und Kulturen haben."
      },
      {
        id: "comp_super_5",
        question: "El Monte Everest es _____ montaña _____ alta del mundo entero.",
        translation: "Der Mount Everest ist der höchste Berg der ganzen Welt.",
        options: ["la / más", "más / que", "tan / como", "muy"],
        correct: "la / más",
        explanation: "Superlativ: 'la montaña más alta' (der höchste Berg). Artikel + Substantiv + 'más' + Adjektiv. Diese geografische Tatsache über Everest als höchsten Gipfel macht ihn zum ultimativen Ziel für Bergsteiger weltweit."
      },
      {
        id: "comp_super_6",
        question: "Tengo _____ dinero _____ tú para gastar este mes claramente.",
        translation: "Ich habe diesen Monat eindeutig weniger Geld als du zum Ausgeben.",
        options: ["menos / que", "más / que", "tan / como", "muy / que"],
        correct: "menos / que",
        explanation: "Für 'weniger als' nutzen wir 'menos...que': Gegenteil von 'más'. Im Deutschen 'weniger als', Spanisch parallel. Diese finanzielle Ungleichheit im verfügbaren Budget kann zu unterschiedlichen Lebensstilen oder Ausgabegewohnheiten führen."
      },
      {
        id: "comp_super_7",
        question: "Esta es _____ _____ película que he visto en mi vida.",
        translation: "Das ist der beste Film, den ich in meinem Leben gesehen habe.",
        options: ["la mejor", "más buena", "tan buena", "muy buena"],
        correct: "la mejor",
        explanation: "Für 'der beste' nutzen wir IRREGULÄREN Superlativ: 'la mejor' (nicht 'la más buena'). Wie Deutsch 'besser/beste' ist es unregelmäßig. Dieser Film, der alle anderen übertrifft, setzt neuen Standard für zukünftige Filmvergleiche."
      },
      {
        id: "comp_super_8",
        question: "Hoy hace _____ calor _____ ayer en esta región del país.",
        translation: "Heute ist es in dieser Region des Landes wärmer als gestern.",
        options: ["más / que", "tan / como", "el más / de", "muy / que"],
        correct: "más / que",
        explanation: "Für Temperaturvergleich: 'más calor que ayer' (mehr Wärme als gestern). Mit Substantiv 'calor' nutzen wir trotzdem 'más...que'. Diese zunehmende Hitze kann unangenehm sein und motiviert vielleicht Klimaanlage oder Flucht an kühleren Ort."
      },
      {
        id: "comp_super_9",
        question: "Mi casa es _____ _____ grande _____ la tuya propia.",
        translation: "Mein Haus ist nicht so groß wie deins eigenes.",
        options: ["no tan / como", "menos / que", "más / que", "muy / como"],
        correct: "no tan / como",
        explanation: "Für negative Gleichheit: 'no tan grande como' (nicht so groß wie). Alternative zu 'menos que'. Dieser Hausgrößenvergleich ist neutrale Feststellung ohne Wertung, ob größer oder kleiner besser ist - beides hat Vor- und Nachteile."
      },
      {
        id: "comp_super_10",
        question: "Ese restaurante es _____ _____ caro de toda la ciudad entera.",
        translation: "Dieses Restaurant ist das Teuerste der ganzen Stadt.",
        options: ["el más", "más", "tan", "muy"],
        correct: "el más",
        explanation: "Maskuliner Superlativ: 'el más caro' (der Teuerste). Artikel muss zum Geschlecht passen. Dieses preislich führende Restaurant könnte exzellente Qualität bieten oder einfach überteuert sein - Preis allein garantiert nicht Qualität."
      },
      {
        id: "comp_super_11",
        question: "Ella corre _____ rápido que todos nosotros en el equipo.",
        translation: "Sie läuft schneller als wir alle im Team.",
        options: ["más / que", "tan / como", "el más / de", "muy / que"],
        correct: "más / que",
        explanation: "Mit ADVERBIEN: 'más rápido que' (schneller als). Auch Adverbien bilden Komparativ mit 'más'. Diese sportliche Überlegenheit macht sie wahrscheinlich zur Sprinterin in Wettkämpfen, wo Geschwindigkeit entscheidend ist."
      },
      {
        id: "comp_super_12",
        question: "Este examen fue _____ _____ difícil que el anterior pasado.",
        translation: "Diese Prüfung war weniger schwer als die vorherige.",
        options: ["menos / que", "más / que", "tan / como", "muy / que"],
        correct: "menos / que",
        explanation: "Für 'weniger...als': 'menos difícil que' ist Komparativ nach unten. Diese einfachere Prüfung im Vergleich zur vorherigen bringt Erleichterung und könnte bessere Ergebnisse für Schüler bedeuten."
      },
      {
        id: "comp_super_13",
        question: "Pedro es _____ _____ estudiante de la universidad este año.",
        translation: "Pedro ist der beste Student der Universität dieses Jahr.",
        options: ["el mejor", "más bueno", "tan bueno", "muy bueno"],
        correct: "el mejor",
        explanation: "Irregulärer maskuliner Superlativ: 'el mejor estudiante' (der beste Student). Nicht 'el más bueno'. Diese akademische Spitzenleistung Pedros wird wahrscheinlich mit Auszeichnungen oder Stipendien belohnt."
      },
      {
        id: "comp_super_14",
        question: "Tengo _____ _____ libros _____ tú en mi colección personal.",
        translation: "Ich habe genauso viele Bücher wie du in meiner persönlichen Sammlung.",
        options: ["tantos / como", "más / que", "tan / como", "muy / como"],
        correct: "tantos / como",
        explanation: "Für MENGENGLEICHHEIT mit zählbaren Substantiven: 'tantos libros como' (so viele Bücher wie). Mit 'tanto' vor Substantiv. Diese identische Bücheranzahl könnte Zufall sein oder zeigt, dass beide ähnliche Leseleidenschaft haben."
      },
      {
        id: "comp_super_15",
        question: "Hoy día es _____ día _____ mi vida hasta ahora completa.",
        translation: "Heute ist der schlechteste Tag meines ganzen bisherigen Lebens.",
        options: ["el peor / de", "más malo / que", "tan malo / como", "muy malo"],
        correct: "el peor / de",
        explanation: "Irregulärer Superlativ: 'el peor día' (der schlechteste Tag), nicht 'el más malo'. Diese dramatische Übertreibung über schrecklichen Tag drückt extreme Frustration aus, wenn mehrere Dinge gleichzeitig schiefgehen."
      }
    ]
  }
};

export default part5Categories;
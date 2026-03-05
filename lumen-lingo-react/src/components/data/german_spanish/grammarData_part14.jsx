/**
 * GERMAN → SPANISH GRAMMAR - PART 14
 * 4 categories, 15 questions each
 */

import { Link, Lightbulb, Map, Coffee } from "lucide-react";

export const part14Categories = {
  conectores: {
    name: "Conectores (Konnektoren)",
    description: "Texte verbinden - außerdem, jedoch, deshalb, trotzdem",
    icon: Link,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "conect_1",
        question: "Me gusta viajar. _____, no tengo mucho dinero ahora mismo.",
        translation: "Ich reise gerne. Jedoch habe ich gerade nicht viel Geld.",
        options: ["Sin embargo", "Además", "Por eso", "También"],
        correct: "Sin embargo",
        explanation: "Für JEDOCH/ABER nutzen wir 'sin embargo': zeigt Kontrast. Diese Einschränkung der Reiselust durch finanzielle Realität ist häufiges Dilemma."
      },
      {
        id: "conect_2",
        question: "Estudia mucho. _____, practica deportes regularmente cada semana.",
        translation: "Er lernt viel. Außerdem treibt er jede Woche regelmäßig Sport.",
        options: ["Además", "Sin embargo", "Por eso", "Pero"],
        correct: "Además",
        explanation: "Für AUSSERDEM nutzen wir 'además': fügt Information hinzu. Diese Kombination von Lernen und Sport zeigt ausgewogenen Lebensstil."
      },
      {
        id: "conect_3",
        question: "Llovió mucho ayer. _____, cancelaron el partido de fútbol al aire libre.",
        translation: "Es regnete gestern viel. Deshalb sagten sie das Fußballspiel im Freien ab.",
        options: ["Por eso", "Además", "Sin embargo", "Aunque"],
        correct: "Por eso",
        explanation: "Für DESHALB nutzen wir 'por eso': zeigt Konsequenz/Resultat. Diese wetterbedingte Spielabsage ist logische Folge starken Regens."
      },
      {
        id: "conect_4",
        question: "No tenía hambre. _____, comí algo porque era hora de almorzar.",
        translation: "Ich hatte keinen Hunger. Trotzdem aß ich etwas, weil es Zeit zum Mittagessen war.",
        options: ["Aun así", "Además", "Por eso", "También"],
        correct: "Aun así",
        explanation: "Für TROTZDEM nutzen wir 'aun así' oder 'de todas formas': trotz Mangel an Hunger. Diese Entscheidung zu essen folgt Zeitplan statt Hunger."
      },
      {
        id: "conect_5",
        question: "A mí me gusta el té. _____, mi hermana prefiere café siempre.",
        translation: "Mir gefällt Tee. Andererseits bevorzugt meine Schwester immer Kaffee.",
        options: ["En cambio", "Además", "Por eso", "También"],
        correct: "En cambio",
        explanation: "Für ANDERERSEITS/HINGEGEN nutzen wir 'en cambio': zeigt Gegensatz zwischen Personen. Diese unterschiedlichen Getränkepräferenzen in Familie sind normal."
      },
      {
        id: "conect_6",
        question: "Primero desayuno. _____, me ducho y me visto para salir.",
        translation: "Zuerst frühstücke ich. Danach dusche ich mich und ziehe mich an zum Rausgehen.",
        options: ["Luego", "Además", "Sin embargo", "Por eso"],
        correct: "Luego",
        explanation: "Für DANACH/DANN nutzen wir 'luego' oder 'después': zeitliche Abfolge. Diese Morgenroutine folgt logischer Reihenfolge für effizienten Start."
      },
      {
        id: "conect_7",
        question: "Es muy inteligente. _____, estudia mucho y es muy trabajador.",
        translation: "Er ist sehr intelligent. Darüber hinaus lernt er viel und ist sehr fleißig.",
        options: ["Además", "Sin embargo", "Por eso", "Aunque"],
        correct: "Además",
        explanation: "Für DARÜBER HINAUS: 'además' addiert weitere positive Eigenschaft. Diese Kombination von Intelligenz und Fleiß ist Erfolgsformel."
      },
      {
        id: "conect_8",
        question: "Está lloviendo mucho afuera. _____, voy a salir a caminar igual.",
        translation: "Es regnet draußen viel. Trotzdem werde ich trotzdem spazieren gehen.",
        options: ["De todas formas", "Además", "Por eso", "También"],
        correct: "De todas formas",
        explanation: "Für TROTZDEM: 'de todas formas' oder 'aun así'. Diese Entschlossenheit trotz Regen zeigt, dass Wetter Pläne nicht ändert."
      },
      {
        id: "conect_9",
        question: "Me encanta leer libros. _____, mi hermano no lee nunca nada.",
        translation: "Ich liebe es, Bücher zu lesen. Im Gegensatz dazu liest mein Bruder nie irgendetwas.",
        options: ["En cambio", "Además", "Por eso", "También"],
        correct: "En cambio",
        explanation: "Für GEGENSATZ zwischen Personen: 'en cambio'. Diese gegensätzlichen Lesegewohnheiten in Familie zeigen unterschiedliche Interessen."
      },
      {
        id: "conect_10",
        question: "Es tarde ya. _____, debemos irnos ahora inmediatamente sin demora.",
        translation: "Es ist schon spät. Daher müssen wir jetzt sofort ohne Verzögerung gehen.",
        options: ["Por lo tanto", "Además", "Sin embargo", "También"],
        correct: "Por lo tanto",
        explanation: "Für DAHER/FOLGLICH nutzen wir 'por lo tanto': formeller als 'por eso'. Diese späte Uhrzeit erfordert sofortige Abreise."
      },
      {
        id: "conect_11",
        question: "Habla tres idiomas extranjeros. _____, toca el piano muy bien.",
        translation: "Er spricht drei Fremdsprachen. Außerdem spielt er sehr gut Klavier.",
        options: ["Además", "Sin embargo", "Por eso", "Aunque"],
        correct: "Además",
        explanation: "Für weitere Fähigkeit: 'además'. Diese vielseitigen Talente in Sprachen und Musik sind beeindruckende Kombination."
      },
      {
        id: "conect_12",
        question: "No me gusta madrugar. _____, lo hago todos los días laborables.",
        translation: "Ich mag nicht früh aufstehen. Dennoch tue ich es jeden Werktag.",
        options: ["No obstante", "Además", "Por eso", "También"],
        correct: "No obstante",
        explanation: "Für DENNOCH nutzen wir 'no obstante': trotz Abneigung. Diese Überwindung für Arbeit zeigt Verantwortungsbewusstsein."
      },
      {
        id: "conect_13",
        question: "Hace frío afuera. _____, debes llevar una chaqueta abrigada.",
        translation: "Es ist draußen kalt. Deshalb solltest du eine warme Jacke tragen.",
        options: ["Por eso", "Además", "Sin embargo", "También"],
        correct: "Por eso",
        explanation: "Für logische FOLGE: 'por eso' (deshalb). Dieser praktische Kleidungsrat basiert auf Wetterbedingungen."
      },
      {
        id: "conect_14",
        question: "Me gusta correr. _____, me gusta nadar en la piscina local.",
        translation: "Ich laufe gerne. Auch schwimme ich gerne im örtlichen Schwimmbad.",
        options: ["También", "Sin embargo", "Por eso", "En cambio"],
        correct: "También",
        explanation: "Für AUCH nutzen wir 'también': fügt ähnliche Information hinzu. Diese Vorliebe für beide Sportarten zeigt aktiven Fitness-Lebensstil."
      },
      {
        id: "conect_15",
        question: "Estaba cansado anoche. _____, me quedé despierto viendo películas.",
        translation: "Ich war gestern Abend müde. Trotzdem blieb ich wach und schaute Filme.",
        options: ["Sin embargo", "Además", "Por eso", "También"],
        correct: "Sin embargo",
        explanation: "Für Kontrast: 'sin embargo' (jedoch). Diese Entscheidung wach zu bleiben trotz Müdigkeit opfert Schlaf für Unterhaltung."
      }
    ]
  },

  pronombres_indefinidos: {
    name: "Pronombres Indefinidos (Indefinitpronomen)",
    description: "Algo, nada, alguien, nadie - unbestimmte Mengen und Personen",
    icon: Lightbulb,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "indef_1",
        question: "¿Hay _____ en casa ahora mismo o están todos fuera?",
        translation: "Ist jemand gerade zu Hause oder sind alle draußen?",
        options: ["alguien", "algo", "alguno", "nadie"],
        correct: "alguien",
        explanation: "Für JEMAND (Person) nutzen wir 'alguien': '¿hay alguien?' (ist jemand da?). Nicht 'algo' (etwas für Dinge). Diese Frage klärt, ob Haus bewohnt oder leer ist."
      },
      {
        id: "indef_2",
        question: "No quiero _____ de comer - ya estoy lleno completamente satisfecho.",
        translation: "Ich will nichts zu essen - ich bin schon völlig satt zufrieden.",
        options: ["nada", "nadie", "ninguno", "algo"],
        correct: "nada",
        explanation: "Für NICHTS (Dinge) nutzen wir 'nada': 'no quiero nada' (will nichts). Mit 'no' ist Doppelnegation normal im Spanischen. Diese Ablehnung von Essen zeigt Sättigung."
      },
      {
        id: "indef_3",
        question: "_____ llamó por teléfono mientras estabas fuera de casa.",
        translation: "Niemand rief an, während du außer Haus warst.",
        options: ["Nadie", "Nada", "Ninguno", "Alguien"],
        correct: "Nadie",
        explanation: "Für NIEMAND nutzen wir 'nadie': 'nadie llamó' (niemand rief an). Kann ohne 'no' am Satzanfang stehen. Diese Nachricht beruhigt, dass nichts Dringendes verpasst wurde."
      },
      {
        id: "indef_4",
        question: "¿Necesitas _____ de la tienda? Voy a ir de compras ahora.",
        translation: "Brauchst du etwas aus dem Laden? Ich gehe jetzt einkaufen.",
        options: ["algo", "alguien", "alguno", "nada"],
        correct: "algo",
        explanation: "Für ETWAS (unbestimmt) nutzen wir 'algo': '¿necesitas algo?' (brauchst du etwas?). Diese höfliche Einkaufsfrage bietet Mitbringsel an."
      },
      {
        id: "indef_5",
        question: "No vi a _____ conocido en la fiesta grande de anoche.",
        translation: "Ich sah niemanden Bekannten auf der gestrigen großen Party.",
        options: ["nadie", "nada", "ninguno", "alguien"],
        correct: "nadie",
        explanation: "Für NIEMAND bei Personen: 'no vi a nadie' (sah niemanden). 'A' vor Personenobjekt. Diese Isolation auf Party voller Fremder kann unangenehm sein."
      },
      {
        id: "indef_6",
        question: "¿Tienes _____ libro de español que me puedas prestar ahora?",
        translation: "Hast du irgendein Spanischbuch, das du mir jetzt leihen kannst?",
        options: ["algún", "algo", "alguien", "ningún"],
        correct: "algún",
        explanation: "Für IRGENDEIN vor maskulinem Substantiv: 'algún libro' (irgendein Buch). Vor Substantiv verkürzt sich 'alguno' zu 'algún'. Diese Bitte um Lehrbuch zeigt Lernbedarf."
      },
      {
        id: "indef_7",
        question: "No hay _____ problema con tu propuesta - me parece excelente.",
        translation: "Es gibt kein Problem mit deinem Vorschlag - er scheint mir ausgezeichnet.",
        options: ["ningún", "ninguno", "nada", "nadie"],
        correct: "ningún",
        explanation: "Für KEIN vor maskulinem Substantiv: 'ningún problema' (kein Problem). Diese Zustimmung zu Vorschlag ist positive Rückmeldung."
      },
      {
        id: "indef_8",
        question: "_____ personas piensan que es fácil, pero no lo es realmente.",
        translation: "Manche Leute denken, dass es leicht ist, aber es ist es wirklich nicht.",
        options: ["Algunas", "Algo", "Alguien", "Nada"],
        correct: "Algunas",
        explanation: "Für MANCHE/EINIGE mit Plural: 'algunas personas' (manche Leute). Diese Fehleinschätzung der Schwierigkeit ist häufig bei Außenstehenden."
      },
      {
        id: "indef_9",
        question: "No tengo _____ amigo en esta ciudad nueva - me siento solo.",
        translation: "Ich habe keinen Freund in dieser neuen Stadt - ich fühle mich einsam.",
        options: ["ningún", "ninguno", "nadie", "nada"],
        correct: "ningún",
        explanation: "Vor Substantiv: 'ningún amigo' (kein Freund). Diese Einsamkeit in neuer Stadt ist emotionale Herausforderung beim Umzug."
      },
      {
        id: "indef_10",
        question: "¿_____ puede ayudarme con este problema técnico complicado difícil?",
        translation: "Kann mir jemand mit diesem komplizierten schwierigen technischen Problem helfen?",
        options: ["Alguien", "Algo", "Alguno", "Nadie"],
        correct: "Alguien",
        explanation: "Für JEMAND in Frage: '¿alguien puede?' (kann jemand?). Diese Hilfsanfrage bei technischem Problem sucht Experten."
      },
      {
        id: "indef_11",
        question: "_____ de los estudiantes aprobó el examen extremadamente difícil ayer.",
        translation: "Keiner der Schüler bestand die gestern extrem schwere Prüfung.",
        options: ["Ninguno", "Nadie", "Nada", "Ningún"],
        correct: "Ninguno",
        explanation: "Für KEINER (mit 'de'): 'ninguno de los estudiantes'. Allein stehend braucht es '-o'. Diese kollektive Prüfungsniederlage zeigt extreme Schwierigkeit."
      },
      {
        id: "indef_12",
        question: "No pasó _____ interesante durante el fin de semana aburrido pasado.",
        translation: "Es passierte nichts Interessantes während des langweiligen vergangenen Wochenendes.",
        options: ["nada", "nadie", "ninguno", "algo"],
        correct: "nada",
        explanation: "Für NICHTS: 'no pasó nada' (passierte nichts). Dieses ereignislose Wochenende war wahrscheinlich langweilig aber erholsam."
      },
      {
        id: "indef_13",
        question: "¿Quieres _____ más de postre o estás satisfecho ya completamente?",
        translation: "Willst du noch etwas mehr Nachtisch oder bist du schon völlig zufrieden?",
        options: ["algo", "alguien", "alguno", "nada"],
        correct: "algo",
        explanation: "Für ETWAS MEHR: '¿algo más?' ist höfliche Angebotsfrage. Diese Gastfreundschaft bietet zusätzlichen Nachtisch an."
      },
      {
        id: "indef_14",
        question: "_____ día iremos a visitarte en tu nueva casa del campo.",
        translation: "Irgendwann werden wir dich in deinem neuen Landhaus besuchen.",
        options: ["Algún", "Algo", "Alguien", "Ningún"],
        correct: "Algún",
        explanation: "Für IRGENDEIN TAG: 'algún día' (irgendwann). Diese vage Besuchszusage ist freundlich gemeint aber zeitlich unverbindlich."
      },
      {
        id: "indef_15",
        question: "No conozco a _____ en esta fiesta grande - todos son extraños.",
        translation: "Ich kenne niemanden auf dieser großen Party - alle sind Fremde.",
        options: ["nadie", "nada", "ninguno", "alguien"],
        correct: "nadie",
        explanation: "Für NIEMAND: 'no conozco a nadie' (kenne niemanden). 'A' vor Personenobjekt. Diese soziale Isolation auf Party ist unangenehme Situation."
      }
    ]
  },

  estilo_indirecto: {
    name: "Estilo Indirecto (Indirekte Rede)",
    description: "Er sagte, dass... - Zeitverschiebung bei indirekter Rede",
    icon: Map,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "indir_1",
        question: "Juan dijo que _____ cansado y quería dormir ya mismo.",
        translation: "Juan sagte, dass er müde war und sofort schlafen wollte.",
        options: ["estaba", "está", "estuvo", "estaría"],
        correct: "estaba",
        explanation: "Bei indirekter Rede verschiebt sich Zeit: 'está' (Gegenwart) wird zu 'estaba' (Imperfecto). Juan sagte es in Vergangenheit, sein Zustand war gleichzeitig. Diese Müdigkeitsaussage erklärt frühen Rückzug."
      },
      {
        id: "indir_2",
        question: "Me prometió que me _____ mañana sin falta alguna segura.",
        translation: "Er versprach mir, dass er mich morgen ohne jegliche sichere Ausnahme anrufen würde.",
        options: ["llamaría", "llamará", "llama", "llamó"],
        correct: "llamaría",
        explanation: "Versprechen in Vergangenheit für Zukunft nutzt CONDICIONAL: 'prometió que llamaría' (versprach, dass er anrufen würde). Diese Zusage schafft Erwartung für morgigen Anruf."
      },
      {
        id: "indir_3",
        question: "Ella dijo que no _____ tiempo libre para ayudarme ayer tarde.",
        translation: "Sie sagte, dass sie gestern Nachmittag keine freie Zeit hatte, um mir zu helfen.",
        options: ["tenía", "tiene", "tuvo", "tendría"],
        correct: "tenía",
        explanation: "Zeitverschiebung: 'tiene' → 'tenía' (hatte). Diese Absage wegen Zeitmangel ist verständliche Begründung für nicht geleistete Hilfe."
      },
      {
        id: "indir_4",
        question: "Dijeron que _____ de vacaciones a Italia el mes próximo siguiente.",
        translation: "Sie sagten, dass sie nächsten Monat nach Italien in Urlaub fahren würden.",
        options: ["irían", "irán", "van", "fueron"],
        correct: "irían",
        explanation: "Aussage in Vergangenheit über Zukunft: Condicional 'irían' (würden gehen). Diese Urlaubspläne wurden in Vergangenheit kommuniziert."
      },
      {
        id: "indir_5",
        question: "El profesor explicó que el examen _____ el viernes próximo.",
        translation: "Der Lehrer erklärte, dass die Prüfung nächsten Freitag sein würde.",
        options: ["sería", "será", "es", "fue"],
        correct: "sería",
        explanation: "Ankündigung in Vergangenheit: 'será' → 'sería' (würde sein). Diese Prüfungstermin-Information gibt Schülern Zeit zur Vorbereitung."
      },
      {
        id: "indir_6",
        question: "Me contó que _____ en París tres años antes de volver.",
        translation: "Er erzählte mir, dass er drei Jahre in Paris gelebt hatte, bevor er zurückkam.",
        options: ["había vivido", "vivió", "vive", "viviría"],
        correct: "había vivido",
        explanation: "Für Handlung VOR dem Erzählen: Pluscuamperfecto bleibt 'había vivido'. Diese Paris-Erfahrung liegt zeitlich vor dem Gespräch."
      },
      {
        id: "indir_7",
        question: "Dijo: 'Estoy cansado' → Dijo que _____ cansado en ese momento.",
        translation: "Er sagte: 'Ich bin müde' → Er sagte, dass er in dem Moment müde war.",
        options: ["estaba", "está", "estuvo", "estaría"],
        correct: "estaba",
        explanation: "Direkte zu indirekter Rede: 'estoy' (ich bin) wird zu 'estaba' (er war). Zeitverschiebung ist automatisch bei Vergangenheit."
      },
      {
        id: "indir_8",
        question: "Me preguntó si yo _____ ir con ellos al concierto nocturno.",
        translation: "Er fragte mich, ob ich mit ihnen zum Nachtkonzert gehen wollte.",
        options: ["quería", "quiero", "querré", "querría"],
        correct: "quería",
        explanation: "Bei Frage in Vergangenheit: 'quiero' → 'quería' (wollte). Diese Konzerteinladung als Frage formuliert lässt Raum für Absage."
      },
      {
        id: "indir_9",
        question: "Afirmó que _____ la verdad absoluta sobre el asunto complejo.",
        translation: "Er behauptete, dass er die absolute Wahrheit über die komplexe Angelegenheit sagte.",
        options: ["decía", "dice", "dijo", "diría"],
        correct: "decía",
        explanation: "Gleichzeitigkeit in Vergangenheit: 'dice' → 'decía' (sagte). Diese Behauptung von Wahrhaftigkeit kann angezweifelt werden."
      },
      {
        id: "indef_10",
        question: "¿Tienes _____ pregunta sobre la lección de hoy presentada aquí?",
        translation: "Hast du irgendeine Frage über die heute hier präsentierte Lektion?",
        options: ["alguna", "algo", "alguien", "ninguna"],
        correct: "alguna",
        explanation: "Für IRGENDEINE vor feminin: 'alguna pregunta' (irgendeine Frage). Diese Einladung zu Fragen zeigt Offenheit für Klärung."
      },
      {
        id: "indir_11",
        question: "Comentó que nunca _____ _____ en avión antes de ese viaje.",
        translation: "Er kommentierte, dass er vor jener Reise noch nie im Flugzeug gewesen war.",
        options: ["había viajado", "viajó", "viaja", "viajaría"],
        correct: "había viajado",
        explanation: "Pluscuamperfecto bleibt: 'había viajado' auch in indirekter Rede. Dieser erste Flug war für ihn bedeutendes Lebenserlebnis."
      },
      {
        id: "indir_12",
        question: "No hay _____ tan importante como la salud personal propia.",
        translation: "Es gibt nichts so Wichtiges wie die persönliche eigene Gesundheit.",
        options: ["nada", "nadie", "ninguno", "algo"],
        correct: "nada",
        explanation: "Für NICHTS in Vergleich: 'nada tan importante' (nichts so wichtig). Diese Lebensweisheit priorisiert Gesundheit über alles."
      },
      {
        id: "indir_13",
        question: "Mencionó que _____ muy ocupado toda esa semana laboral intensa.",
        translation: "Er erwähnte, dass er die ganze intensive Arbeitswoche sehr beschäftigt war.",
        options: ["estuvo", "está", "estará", "estaría"],
        correct: "estuvo",
        explanation: "Für abgeschlossene Woche: Pretérito 'estuvo' auch in indirekter Rede. Diese Erklärung von Geschäftigkeit rechtfertigt mangelnde Verfügbarkeit."
      },
      {
        id: "indir_14",
        question: "¿Hay _____ cosa que pueda hacer para ayudarte en esto ahora?",
        translation: "Gibt es irgendetwas, was ich tun kann, um dir jetzt dabei zu helfen?",
        options: ["alguna", "algo", "alguien", "ninguna"],
        correct: "alguna",
        explanation: "Für IRGENDEINE SACHE: 'alguna cosa' (irgendeine Sache). Auch nur 'algo' möglich. Dieses offene Hilfsangebot zeigt Bereitschaft zu unterstützen."
      },
      {
        id: "indir_15",
        question: "Informó que el tren _____ retrasado por problemas técnicos graves.",
        translation: "Er informierte, dass der Zug wegen schwerer technischer Probleme verspätet war.",
        options: ["estaba", "está", "estuvo", "estaría"],
        correct: "estaba",
        explanation: "Gleichzeitiger Zustand: 'está' → 'estaba' (war). Diese Verspätungsinfo erklärt Wartezeit am Bahnhof."
      }
    ]
  },

  verbos_estado_cambio: {
    name: "Verbos de Cambio (Verben der Veränderung)",
    description: "Ponerse, volverse, hacerse - verschiedene Arten von Werden",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "cambio_1",
        question: "Me _____ nervioso antes de hablar en público siempre cada vez.",
        translation: "Ich werde immer jedes Mal nervös, bevor ich öffentlich spreche.",
        options: ["pongo", "vuelvo", "hago", "quedo"],
        correct: "pongo",
        explanation: "Für TEMPORÄRE emotionale/physische Zustände: 'ponerse' + Adjektiv: 'me pongo nervioso' (werde nervös). Diese Lampenfieber-Reaktion ist normale menschliche Angst."
      },
      {
        id: "cambio_2",
        question: "Con los años, se _____ más paciente y tolerante con todos.",
        translation: "Mit den Jahren wurde er allen gegenüber geduldiger und toleranter.",
        options: ["volvió", "puso", "hizo", "quedó"],
        correct: "volvió",
        explanation: "Für ALLMÄHLICHE Charakterveränderung: 'volverse' + Adjektiv: 'se volvió paciente' (wurde geduldig). Diese Reifung mit Alter ist positive Persönlichkeitsentwicklung."
      },
      {
        id: "cambio_3",
        question: "Después de estudiar mucho, se _____ médico profesional capacitado.",
        translation: "Nach viel Lernen wurde er ausgebildeter professioneller Arzt.",
        options: ["hizo", "puso", "volvió", "quedó"],
        correct: "hizo",
        explanation: "Für BERUF durch Anstrengung: 'hacerse' + Substantiv: 'se hizo médico' (wurde Arzt). Betont Prozess und Arbeit. Dieser Arztberuf ist Ergebnis jahrelangen Studiums."
      },
      {
        id: "cambio_4",
        question: "Al oír la noticia terrible, se _____ muy triste inmediatamente.",
        translation: "Beim Hören der schrecklichen Nachricht wurde er sofort sehr traurig.",
        options: ["puso", "volvió", "hizo", "quedó"],
        correct: "puso",
        explanation: "Für PLÖTZLICHE emotionale Reaktion: 'ponerse triste' (traurig werden). Diese unmittelbare Trauer auf schlechte Nachricht ist natürlich."
      },
      {
        id: "cambio_5",
        question: "Después del accidente, se _____ sordo del oído derecho para siempre.",
        translation: "Nach dem Unfall wurde er für immer auf dem rechten Ohr taub.",
        options: ["quedó", "puso", "volvió", "hizo"],
        correct: "quedó",
        explanation: "Für BLEIBENDEN Zustand nach Ereignis: 'quedarse' + Adjektiv: 'se quedó sordo' (wurde/blieb taub). Diese permanente Hörschädigung ist ernste Unfallfolge."
      },
      {
        id: "cambio_6",
        question: "Con el tiempo, se _____ rico invirtiendo en propiedades inmobiliarias.",
        translation: "Mit der Zeit wurde er durch Investitionen in Immobilien reich.",
        options: ["hizo", "puso", "volvió", "quedó"],
        correct: "hizo",
        explanation: "Für Vermögensaufbau durch Anstrengung: 'hacerse rico' (reich werden). Betont aktives Handeln. Dieser Wohlstand ist Resultat kluger Investitionen."
      },
      {
        id: "cambio_7",
        question: "Cuando supo la verdad terrible, se _____ loco de rabia extrema.",
        translation: "Als er die schreckliche Wahrheit erfuhr, wurde er vor extremer Wut verrückt.",
        options: ["volvió", "puso", "hizo", "quedó"],
        correct: "volvió",
        explanation: "Für drastische CHARAKTERVERÄNDERUNG: 'volverse loco' (verrückt werden). Diese extreme Wutreaktion auf Wahrheit zeigt emotionale Überwältigung."
      },
      {
        id: "cambio_8",
        question: "Al ver la serpiente grande, me _____ pálido de susto miedo.",
        translation: "Beim Sehen der großen Schlange wurde ich vor Angst Schreck blass.",
        options: ["puse", "volví", "hice", "quedé"],
        correct: "puse",
        explanation: "Für PLÖTZLICHE physische Reaktion: 'ponerse pálido' (blass werden). Diese Schreckreaktion auf Schlange ist natürlicher Angstreflex."
      },
      {
        id: "cambio_9",
        question: "Después de la enfermedad grave, se _____ muy débil físicamente frágil.",
        translation: "Nach der schweren Krankheit wurde er körperlich sehr schwach fragil.",
        options: ["quedó", "puso", "volvió", "hizo"],
        correct: "quedó",
        explanation: "Für RESULTAT nach Krankheit: 'quedarse débil' (schwach bleiben/werden). Diese andauernde Schwäche braucht Erholungszeit."
      },
      {
        id: "cambio_10",
        question: "Con la práctica constante, se _____ experto en programación informática.",
        translation: "Durch konstante Praxis wurde er Experte in Computerprogrammierung.",
        options: ["hizo", "puso", "volvió", "quedó"],
        correct: "hizo",
        explanation: "Für EXPERTISE durch Übung: 'hacerse experto' (Experte werden). Diese Meisterschaft ist Resultat jahrelanger Übung."
      },
      {
        id: "cambio_11",
        question: "Cuando le dije la verdad dura, se _____ rojo de vergüenza.",
        translation: "Als ich ihm die harte Wahrheit sagte, wurde er vor Scham rot.",
        options: ["puso", "volvió", "hizo", "quedó"],
        correct: "puso",
        explanation: "Für PLÖTZLICHES Erröten: 'ponerse rojo' (rot werden). Diese sichtbare Schamreaktion ist körperliche Manifestation von Peinlichkeit."
      },
      {
        id: "cambio_12",
        question: "Después de mucho esfuerzo personal, se _____ famoso mundialmente reconocido.",
        translation: "Nach viel persönlicher Anstrengung wurde er weltbekannt anerkannt berühmt.",
        options: ["hizo", "puso", "volvió", "quedó"],
        correct: "hizo",
        explanation: "Für Ruhm durch Arbeit: 'hacerse famoso' (berühmt werden). Dieser Weltruhm ist verdientes Ergebnis harter Arbeit."
      },
      {
        id: "cambio_13",
        question: "Al escuchar el ruido fuerte, se _____ muy asustado inmediatamente.",
        translation: "Beim Hören des lauten Geräuschs wurde er sofort sehr erschrocken.",
        options: ["puso", "volvió", "hizo", "quedó"],
        correct: "puso",
        explanation: "Für PLÖTZLICHEN Schreck: 'ponerse asustado' (erschrocken werden). Diese sofortige Angstreaktion auf unerwarteten Lärm ist Überlebensinstinkt."
      },
      {
        id: "cambio_14",
        question: "Después de la discusión fuerte, se _____ sin palabras sorprendido mudo.",
        translation: "Nach der heftigen Diskussion wurde er überrascht sprachlos stumm.",
        options: ["quedó", "puso", "volvió", "hizo"],
        correct: "quedó",
        explanation: "Für RESULTAT-Zustand: 'quedarse sin palabras' (sprachlos bleiben). Diese Sprachlosigkeit zeigt Überwältigung durch Argument oder Schock."
      },
      {
        id: "cambio_15",
        question: "Con tanta preocupación diaria, se _____ loco de estrés acumulado.",
        translation: "Durch so viel tägliche Sorge wurde er vor angehäuftem Stress verrückt.",
        options: ["volvió", "puso", "hizo", "quedó"],
        correct: "volvió",
        explanation: "Für dramatische Veränderung durch Stress: 'volverse loco' (verrückt werden). Diese Überlastung durch Sorgen ist Warnsignal für Burnout."
      }
    ]
  }
};

export default part14Categories;
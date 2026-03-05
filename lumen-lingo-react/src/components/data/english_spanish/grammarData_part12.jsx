/**
 * ENGLISH → SPANISH GRAMMAR - PART 12
 * 5 categories, 15 questions each
 */

import { FileText, Briefcase, Heart, Building, Plane } from "lucide-react";

export const part12Categories = {
  formal_writing: {
    name: "Formal Writing",
    description: "Business and formal communication",
    icon: FileText,
    color: "from-slate-500 to-gray-700",
    level: "advanced",
    questions: [
      {
        id: "fw_1",
        question: "_____ señor García:",
        translation: "(Dear Mr. García - letter opening)",
        options: ["Estimado", "Querido", "Apreciado", "Respetado"],
        correct: "Estimado",
        explanation: "'Estimado' is formal 'dear' for business. Most professional opening."
      },
      {
        id: "fw_2",
        question: "_____ atentamente,",
        translation: "(Sincerely yours - letter closing)",
        options: ["Atentamente", "Saludos", "Cordialmente", "Con cariño"],
        correct: "Atentamente",
        explanation: "'Atentamente' most formal closing. Business letter standard."
      },
      {
        id: "fw_3",
        question: "Me _____ en contacto con usted.",
        translation: "(I'm getting in touch with you)",
        options: ["pongo", "comunico", "contacto", "hablo"],
        correct: "pongo",
        explanation: "'Ponerse en contacto' formal phrase. Professional communication."
      },
      {
        id: "fw_4",
        question: "_____ respecto a su carta...",
        translation: "(Regarding your letter...)",
        options: ["Con", "En", "De", "Por"],
        correct: "Con",
        explanation: "'Con respecto a' means regarding. Formal introduction phrase."
      },
      {
        id: "fw_5",
        question: "Le _____ adjunto el documento.",
        translation: "(I'm sending you the attached document)",
        options: ["envío", "mando", "remito", "adjunto"],
        correct: "envío",
        explanation: "'Enviar adjunto' formal for attachments. Professional email phrase."
      },
      {
        id: "fw_6",
        question: "_____ de antemano su atención.",
        translation: "(Thank you in advance for your attention)",
        options: ["Agradezco", "Gracias", "Aprecio", "Valoro"],
        correct: "Agradezco",
        explanation: "'Agradecer de antemano' very formal. Professional gratitude."
      },
      {
        id: "fw_7",
        question: "Quedo a su _____.",
        translation: "(I remain at your service)",
        options: ["disposición", "servicio", "orden", "alcance"],
        correct: "disposición",
        explanation: "'Quedar a su disposición' formal closing. Offering availability."
      },
      {
        id: "fw_8",
        question: "_____ la presente para...",
        translation: "(The purpose of this letter is to...)",
        options: ["El motivo de", "La razón de", "El objeto de", "La causa de"],
        correct: "El motivo de",
        explanation: "'El motivo de la presente' very formal opening. Official letters."
      },
      {
        id: "fw_9",
        question: "_____ reciba un cordial saludo.",
        translation: "(Receive a cordial greeting)",
        options: ["Reciba", "Recibe", "Recibes", "Recibir"],
        correct: "Reciba",
        explanation: "Formal usted subjunctive for polite wishes. 'Reciba un saludo' standard."
      },
      {
        id: "fw_10",
        question: "Sin otro _____ por el momento...",
        translation: "(Without further matter for now...)",
        options: ["particular", "asunto", "tema", "punto"],
        correct: "particular",
        explanation: "'Sin otro particular' formal closing phrase. Traditional business style."
      },
      {
        id: "fw_11",
        question: "Me es _____ informarle que...",
        translation: "(I'm pleased to inform you that...)",
        options: ["grato", "alegre", "feliz", "contento"],
        correct: "grato",
        explanation: "'Me es grato' formal for pleased. Professional positive news."
      },
      {
        id: "fw_12",
        question: "_____ a la espera de su respuesta.",
        translation: "(Awaiting your response)",
        options: ["Quedo", "Estoy", "Me quedo", "Sigo"],
        correct: "Quedo",
        explanation: "'Quedar a la espera' formal closing. Waiting for reply."
      },
      {
        id: "fw_13",
        question: "_____ hacer referencia a...",
        translation: "(I wish to refer to...)",
        options: ["Quisiera", "Quiero", "Deseo", "Me gustaría"],
        correct: "Quisiera",
        explanation: "'Quisiera' most polite for formal writing. Imperfect subjunctive of 'querer'."
      },
      {
        id: "fw_14",
        question: "Le _____ un cordial saludo.",
        translation: "(I send you cordial greetings)",
        options: ["envío", "mando", "doy", "hago"],
        correct: "envío",
        explanation: "'Enviar un saludo' formal greeting. Business correspondence."
      },
      {
        id: "fw_15",
        question: "_____ el gusto de saludarle.",
        translation: "(It's my pleasure to greet you)",
        options: ["Tengo", "Es", "Me da", "Siento"],
        correct: "Tengo",
        explanation: "'Tener el gusto de' formal pleasure expression. Courteous opening."
      }
    ]
  },

  workplace_office: {
    name: "Workplace and Office",
    description: "Professional environment vocabulary",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "work_1",
        question: "Tengo una _____ a las 10.",
        translation: "(I have a meeting at 10)",
        options: ["reunión", "junta", "cita", "encuentro"],
        correct: "reunión",
        explanation: "'Reunión' standard for meeting. Professional gathering."
      },
      {
        id: "work_2",
        question: "Necesito _____ este informe.",
        translation: "(I need to finish this report)",
        options: ["terminar", "acabar", "completar", "finalizar"],
        correct: "terminar",
        explanation: "'Terminar' most common for finish. Work completion."
      },
      {
        id: "work_3",
        question: "¿Puedes _____ este correo?",
        translation: "(Can you forward this email?)",
        options: ["reenviar", "enviar", "mandar", "pasar"],
        correct: "reenviar",
        explanation: "'Reenviar' means forward (email). 'Re-' prefix for again."
      },
      {
        id: "work_4",
        question: "Trabajo _____ jornada completa.",
        translation: "(I work full-time)",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "'A jornada completa' means full-time. Fixed expression."
      },
      {
        id: "work_5",
        question: "Mi _____ es gerente.",
        translation: "(My boss is a manager)",
        options: ["jefe", "director", "superior", "líder"],
        correct: "jefe",
        explanation: "'Jefe/a' means boss. Most common term for supervisor."
      },
      {
        id: "work_6",
        question: "Tengo una _____ de trabajo.",
        translation: "(I have a work deadline)",
        options: ["fecha límite", "fecha tope", "plazo", "vencimiento"],
        correct: "fecha límite",
        explanation: "'Fecha límite' standard for deadline. Professional term."
      },
      {
        id: "work_7",
        question: "Trabajo desde _____.",
        translation: "(I work from home)",
        options: ["casa", "mi casa", "el hogar", "domicilio"],
        correct: "casa",
        explanation: "'Trabajar desde casa' for remote work. Modern work phrase."
      },
      {
        id: "work_8",
        question: "Tengo que _____ horas extras.",
        translation: "(I have to work overtime)",
        options: ["hacer", "trabajar", "cumplir", "realizar"],
        correct: "hacer",
        explanation: "'Hacer horas extras' for overtime. 'Hacer' with hours worked."
      },
      {
        id: "work_9",
        question: "Enviaré el _____ por correo.",
        translation: "(I'll send the document by email)",
        options: ["documento", "archivo", "papel", "escrito"],
        correct: "documento",
        explanation: "'Documento' most general for document. Professional file."
      },
      {
        id: "work_10",
        question: "Estoy de _____ esta semana.",
        translation: "(I'm on vacation this week)",
        options: ["vacaciones", "descanso", "permiso", "licencia"],
        correct: "vacaciones",
        explanation: "'Estar de vacaciones' for being on vacation. Time off work."
      },
      {
        id: "work_11",
        question: "Necesito _____ un día libre.",
        translation: "(I need to request a day off)",
        options: ["pedir", "solicitar", "preguntar", "requerir"],
        correct: "pedir",
        explanation: "'Pedir un día libre' for requesting time off. Informal workplace."
      },
      {
        id: "work_12",
        question: "Tengo una _____ de negocios.",
        translation: "(I have a business trip)",
        options: ["viaje", "reunión", "cita", "junta"],
        correct: "viaje",
        explanation: "'Viaje de negocios' business trip. Work travel."
      },
      {
        id: "work_13",
        question: "Mi _____ de trabajo es de 9 a 5.",
        translation: "(My work schedule is 9 to 5)",
        options: ["horario", "hora", "tiempo", "turno"],
        correct: "horario",
        explanation: "'Horario de trabajo' for work schedule. Working hours."
      },
      {
        id: "work_14",
        question: "Voy a _____ un proyecto nuevo.",
        translation: "(I'm going to start a new project)",
        options: ["iniciar", "empezar", "comenzar", "arrancar"],
        correct: "iniciar",
        explanation: "'Iniciar' most formal for start. Professional project beginning."
      },
      {
        id: "work_15",
        question: "Trabajo en el _____ de marketing.",
        translation: "(I work in the marketing department)",
        options: ["departamento", "área", "sección", "división"],
        correct: "departamento",
        explanation: "'Departamento' standard for department. Company structure."
      }
    ]
  },

  emotions_reactions: {
    name: "Emotions and Reactions",
    description: "Express feelings and reactions",
    icon: Heart,
    color: "from-rose-400 to-pink-600",
    level: "beginner",
    questions: [
      {
        id: "emo_1",
        question: "¡Qué _____!",
        translation: "(What a surprise!)",
        options: ["sorpresa", "alegría", "emoción", "susto"],
        correct: "sorpresa",
        explanation: "'¡Qué sorpresa!' exclamation for surprise. Common reaction."
      },
      {
        id: "emo_2",
        question: "Estoy muy _____.",
        translation: "(I'm very happy)",
        options: ["feliz", "contento", "alegre", "gozoso"],
        correct: "feliz",
        explanation: "'Feliz' most common for happy. 'Estar feliz' for current emotion."
      },
      {
        id: "emo_3",
        question: "Me da _____ esa película.",
        translation: "(That movie scares me)",
        options: ["miedo", "susto", "terror", "pánico"],
        correct: "miedo",
        explanation: "'Dar miedo' means scare/frighten. Common fear expression."
      },
      {
        id: "emo_4",
        question: "¡Qué _____!",
        translation: "(What a shame! / What a pity!)",
        options: ["lástima", "pena", "tristeza", "dolor"],
        correct: "lástima",
        explanation: "'¡Qué lástima!' for pity/shame. Expressing disappointment."
      },
      {
        id: "emo_5",
        question: "Me pone _____ esperar.",
        translation: "(Waiting makes me nervous)",
        options: ["nervioso", "ansioso", "impaciente", "inquieto"],
        correct: "nervioso",
        explanation: "'Poner nervioso' means make nervous. Cause anxiety."
      },
      {
        id: "emo_6",
        question: "¡Qué _____!",
        translation: "(How nice! / How lovely!)",
        options: ["bien", "bueno", "bonito", "lindo"],
        correct: "bien",
        explanation: "'¡Qué bien!' common positive reaction. Pleased response."
      },
      {
        id: "emo_7",
        question: "Me da _____ hablar en público.",
        translation: "(I'm embarrassed to speak in public)",
        options: ["vergüenza", "pena", "pudor", "timidez"],
        correct: "vergüenza",
        explanation: "'Dar vergüenza' for embarrassment. Social discomfort."
      },
      {
        id: "emo_8",
        question: "Estoy _____ de ti.",
        translation: "(I'm proud of you)",
        options: ["orgulloso", "feliz", "contento", "satisfecho"],
        correct: "orgulloso",
        explanation: "'Estar orgulloso de' for pride. Emotional satisfaction."
      },
      {
        id: "emo_9",
        question: "¡Qué _____!",
        translation: "(How disgusting!)",
        options: ["asco", "horrible", "terrible", "feo"],
        correct: "asco",
        explanation: "'¡Qué asco!' strong disgust reaction. Revulsion expression."
      },
      {
        id: "emo_10",
        question: "Me da mucha _____.",
        translation: "(It makes me very sad)",
        options: ["pena", "tristeza", "lástima", "dolor"],
        correct: "pena",
        explanation: "'Dar pena' means sadden. Emotional pain."
      },
      {
        id: "emo_11",
        question: "Estoy _____ de emoción.",
        translation: "(I'm trembling with emotion / excited)",
        options: ["temblando", "emocionado", "nervioso", "feliz"],
        correct: "temblando",
        explanation: "'Temblar de emoción' means trembling with feeling. Strong emotion."
      },
      {
        id: "emo_12",
        question: "Me da _____ esa situación.",
        translation: "(That situation makes me angry)",
        options: ["rabia", "ira", "enojo", "coraje"],
        correct: "rabia",
        explanation: "'Dar rabia' common for anger. Frustration and rage."
      },
      {
        id: "emo_13",
        question: "¡Qué _____!",
        translation: "(How frustrating!)",
        options: ["frustrante", "molesto", "irritante", "fastidioso"],
        correct: "frustrante",
        explanation: "'¡Qué frustrante!' for frustration. Annoying situation."
      },
      {
        id: "emo_14",
        question: "Estoy _____ de alegría.",
        translation: "(I'm bursting with joy)",
        options: ["lleno", "repleto", "colmado", "rebosante"],
        correct: "lleno",
        explanation: "'Lleno de alegría' means full of joy. Complete happiness."
      },
      {
        id: "emo_15",
        question: "Me _____ mucho esa noticia.",
        translation: "(That news worries me a lot)",
        options: ["preocupa", "preocupo", "preocupado", "preocupar"],
        correct: "preocupa",
        explanation: "'Preocupar' follows gustar pattern. 'Me preocupa' = it worries me."
      }
    ]
  },

  describing_places: {
    name: "Describing Places",
    description: "Talk about cities and locations",
    icon: Building,
    color: "from-emerald-500 to-green-600",
    level: "beginner",
    questions: [
      {
        id: "place_1",
        question: "Madrid es una ciudad muy _____.",
        translation: "(Madrid is a very big city)",
        options: ["grande", "gran", "mayor", "enorme"],
        correct: "grande",
        explanation: "'Grande' after noun for literal size. 'Gran' before noun emphasizes greatness."
      },
      {
        id: "place_2",
        question: "Es una _____ ciudad.",
        translation: "(It's a great city)",
        options: ["gran", "grande", "grandiosa", "enorme"],
        correct: "gran",
        explanation: "'Gran' before singular noun means great. Shortened from 'grande'."
      },
      {
        id: "place_3",
        question: "El barrio es muy _____.",
        translation: "(The neighborhood is very quiet)",
        options: ["tranquilo", "silencioso", "calmado", "pacífico"],
        correct: "tranquilo",
        explanation: "'Tranquilo' for peaceful neighborhood. Calm environment."
      },
      {
        id: "place_4",
        question: "Hay _____ gente en el centro.",
        translation: "(There are many people downtown)",
        options: ["mucha", "muchos", "muy", "demasiada"],
        correct: "mucha",
        explanation: "'Mucha gente' (feminine singular). 'Gente' is collective singular."
      },
      {
        id: "place_5",
        question: "Es un lugar muy _____.",
        translation: "(It's a very touristy place)",
        options: ["turístico", "turista", "de turistas", "con turistas"],
        correct: "turístico",
        explanation: "'Turístico' adjective for touristy. Place characteristic."
      },
      {
        id: "place_6",
        question: "La ciudad _____ en la costa.",
        translation: "(The city is on the coast)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar' for location. 'Está en' for where something is."
      },
      {
        id: "place_7",
        question: "Es un pueblo muy _____.",
        translation: "(It's a very old town)",
        options: ["antiguo", "viejo", "anciano", "pasado"],
        correct: "antiguo",
        explanation: "'Antiguo' for old things/places. Historical age."
      },
      {
        id: "place_8",
        question: "Tiene _____ habitantes.",
        translation: "(It has many inhabitants)",
        options: ["muchos", "mucha", "muy", "demasiados"],
        correct: "muchos",
        explanation: "'Muchos habitantes' (masculine plural). Population count."
      },
      {
        id: "place_9",
        question: "Es una zona muy _____.",
        translation: "(It's a very commercial area)",
        options: ["comercial", "de comercio", "con tiendas", "negociosa"],
        correct: "comercial",
        explanation: "'Zona comercial' business/shopping area. Commercial district."
      },
      {
        id: "place_10",
        question: "El clima es _____.",
        translation: "(The climate is mild)",
        options: ["templado", "suave", "moderado", "cálido"],
        correct: "templado",
        explanation: "'Templado' means mild/temperate climate. Moderate temperature."
      },
      {
        id: "place_11",
        question: "Está _____ del mar.",
        translation: "(It's close to the sea)",
        options: ["cerca", "junto", "al lado", "próximo"],
        correct: "cerca",
        explanation: "'Cerca del mar' for near the sea. Proximity to coast."
      },
      {
        id: "place_12",
        question: "Es una ciudad muy _____.",
        translation: "(It's a very modern city)",
        options: ["moderna", "moderno", "contemporánea", "actual"],
        correct: "moderna",
        explanation: "'Moderna' agrees with feminine 'ciudad'. Contemporary style."
      },
      {
        id: "place_13",
        question: "Hay muchos _____ históricos.",
        translation: "(There are many historical monuments)",
        options: ["monumentos", "edificios", "lugares", "sitios"],
        correct: "monumentos",
        explanation: "'Monumentos históricos' for landmarks. Historical sites."
      },
      {
        id: "place_14",
        question: "Es un lugar muy _____.",
        translation: "(It's a very picturesque place)",
        options: ["pintoresco", "bonito", "hermoso", "bello"],
        correct: "pintoresco",
        explanation: "'Pintoresco' means picturesque. Scenic beauty."
      },
      {
        id: "place_15",
        question: "El pueblo está en las _____.",
        translation: "(The town is in the mountains)",
        options: ["montañas", "sierras", "cordilleras", "colinas"],
        correct: "montañas",
        explanation: "'En las montañas' for mountain location. Geographic position."
      }
    ]
  },

  travel_vacation: {
    name: "Travel and Vacation",
    description: "Plan trips and talk about travel",
    icon: Plane,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "trav_1",
        question: "Voy de _____ a España.",
        translation: "(I'm going on vacation to Spain)",
        options: ["vacaciones", "viaje", "turismo", "descanso"],
        correct: "vacaciones",
        explanation: "'Ir de vacaciones' for going on vacation. Holiday travel."
      },
      {
        id: "trav_2",
        question: "Necesito _____ un hotel.",
        translation: "(I need to book a hotel)",
        options: ["reservar", "hacer reserva", "apartar", "ocupar"],
        correct: "reservar",
        explanation: "'Reservar' means book/reserve. Hotel reservation."
      },
      {
        id: "trav_3",
        question: "¿A qué hora _____ el vuelo?",
        translation: "(What time does the flight leave?)",
        options: ["sale", "parte", "va", "viaja"],
        correct: "sale",
        explanation: "'Salir' for departures. 'Sale el vuelo' standard."
      },
      {
        id: "trav_4",
        question: "Tengo que hacer la _____.",
        translation: "(I have to pack the suitcase)",
        options: ["maleta", "valija", "equipaje", "bolsa"],
        correct: "maleta",
        explanation: "'Hacer la maleta' means pack. Standard travel phrase."
      },
      {
        id: "trav_5",
        question: "¿Dónde está la _____ de embarque?",
        translation: "(Where is the boarding gate?)",
        options: ["puerta", "sala", "zona", "área"],
        correct: "puerta",
        explanation: "'Puerta de embarque' boarding gate. Airport term."
      },
      {
        id: "trav_6",
        question: "Quiero un asiento de _____.",
        translation: "(I want a window seat)",
        options: ["ventanilla", "ventana", "pasillo", "medio"],
        correct: "ventanilla",
        explanation: "'Asiento de ventanilla' window seat. Airplane preference."
      },
      {
        id: "trav_7",
        question: "¿Cuánto _____ el equipaje?",
        translation: "(How much does the luggage weigh?)",
        options: ["pesa", "cuesta", "vale", "mide"],
        correct: "pesa",
        explanation: "'Pesar' means weigh. Important for airline limits."
      },
      {
        id: "trav_8",
        question: "Necesito _____ el pasaporte.",
        translation: "(I need to renew my passport)",
        options: ["renovar", "cambiar", "actualizar", "hacer"],
        correct: "renovar",
        explanation: "'Renovar' for renew. Passport/document renewal."
      },
      {
        id: "trav_9",
        question: "Vamos a _____ turismo.",
        translation: "(We're going to do sightseeing)",
        options: ["hacer", "ver", "ir de", "tener"],
        correct: "hacer",
        explanation: "'Hacer turismo' for sightseeing. Tourist activity."
      },
      {
        id: "trav_10",
        question: "¿Dónde está el _____ de información?",
        translation: "(Where is the information desk?)",
        options: ["mostrador", "puesto", "área", "centro"],
        correct: "mostrador",
        explanation: "'Mostrador de información' info desk. Service counter."
      },
      {
        id: "trav_11",
        question: "Quiero _____ una excursión.",
        translation: "(I want to take a tour)",
        options: ["hacer", "tomar", "ir en", "coger"],
        correct: "hacer",
        explanation: "'Hacer una excursión' for taking tour. Tourist activity."
      },
      {
        id: "trav_12",
        question: "¿Hay _____ directo?",
        translation: "(Is there a direct flight?)",
        options: ["vuelo", "avión", "viaje", "ruta"],
        correct: "vuelo",
        explanation: "'Vuelo directo' direct flight. No connections."
      },
      {
        id: "trav_13",
        question: "Voy a _____ fotos.",
        translation: "(I'm going to take photos)",
        options: ["sacar", "hacer", "tomar", "coger"],
        correct: "sacar",
        explanation: "'Sacar fotos' for taking photos. Most common in Spain/Latin America."
      },
      {
        id: "trav_14",
        question: "Necesito _____ dinero.",
        translation: "(I need to exchange money)",
        options: ["cambiar", "cambio de", "intercambiar", "convertir"],
        correct: "cambiar",
        explanation: "'Cambiar dinero' for currency exchange. Money changing."
      },
      {
        id: "trav_15",
        question: "¿Dónde puedo _____ un taxi?",
        translation: "(Where can I get a taxi?)",
        options: ["coger", "tomar", "agarrar", "conseguir"],
        correct: "coger",
        explanation: "'Coger un taxi' in Spain. 'Tomar' in Latin America."
      }
    ]
  }
};

export default part12Categories;

/**
 * ENGLISH → SPANISH FLASHCARDS - PART 3
 * 
 * Native Language: English
 * Target Language: Spanish
 * 
 * This file contains advanced flashcard categories (31-43).
 */

import {
  MessageSquare,
  ThumbsUp,
  UserCircle,
  Repeat,
  Zap,
  TrendingUp,
  Type,
  Shuffle,
  MapPinned,
  LayoutGrid,
  GraduationCap,
  Heart // Added Heart icon
} from "lucide-react";

export const flashcardsCategories_part3 = {
  social_activities: {
    name: "Social Activities",
    description: "Social events and meeting people",
    icon: MessageSquare,
    color: "from-violet-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "social1", english: "Meeting", spanish: "Reunión", difficulty: "easy", example: "Tenemos una reunión de amigos", exampleTranslation: "We have a meeting of friends" },
      { id: "social2", english: "Invite", spanish: "Invitar", difficulty: "easy", example: "Quiero invitarte a mi fiesta", exampleTranslation: "I want to invite you to my party" },
      { id: "social3", english: "Friend", spanish: "Amigo", difficulty: "easy", example: "Mis amigos son importantes", exampleTranslation: "My friends are important" },
      { id: "social4", english: "Conversation", spanish: "Conversación", difficulty: "easy", example: "Tuvimos una buena conversación", exampleTranslation: "We had a good conversation" },
      { id: "social5", english: "Talk", spanish: "Hablar", difficulty: "easy", example: "Me gusta hablar contigo", exampleTranslation: "I like to talk with you" },
      { id: "social6", english: "Listen", spanish: "Escuchar", difficulty: "easy", example: "Siempre te escucho", exampleTranslation: "I always listen to you" },
      { id: "social7", english: "Celebrate", spanish: "Celebrar", difficulty: "medium", example: "Vamos a celebrar tu cumpleaños", exampleTranslation: "We're going to celebrate your birthday" },
      { id: "social8", english: "Gather", spanish: "Reunirse", difficulty: "medium", example: "Nos reunimos todos los viernes", exampleTranslation: "We gather every Friday" },
      { id: "social9", english: "Hang out", spanish: "Pasar el rato", difficulty: "medium", example: "Me gusta pasar el rato con amigos", exampleTranslation: "I like to hang out with friends" },
      { id: "social10", english: "Introduction", spanish: "Presentación", difficulty: "medium", example: "Hice la presentación", exampleTranslation: "I did the introduction" },
      { id: "social11", english: "Plan", spanish: "Planear", difficulty: "medium", example: "Vamos a planear una fiesta", exampleTranslation: "We're going to plan a party" },
      { id: "social12", english: "Join", spanish: "Unirse", difficulty: "medium", example: "¿Quieres unirte a nosotros?", exampleTranslation: "Do you want to join us?" },
      { id: "social13", english: "Would you like to...?", spanish: "¿Te gustaría...?", difficulty: "hard", example: "¿Te gustaría salir con nosotros?", exampleTranslation: "Would you like to go out with us?" },
      { id: "social14", english: "Let's get together", spanish: "Juntémonos", difficulty: "hard", example: "Juntémonos este fin de semana", exampleTranslation: "Let's get together this weekend" },
      { id: "social15", english: "I'd love to", spanish: "Me encantaría", difficulty: "hard", example: "Me encantaría ir contigo", exampleTranslation: "I'd love to go with you" }
    ]
  },

  opinions_preferences: {
    name: "Opinions & Preferences",
    description: "Expressing opinions and preferences",
    icon: ThumbsUp,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    words: [
      { id: "opin1", english: "Think", spanish: "Pensar", difficulty: "easy", example: "Pienso que tienes razón", exampleTranslation: "I think you're right" },
      { id: "opin2", english: "Believe", spanish: "Creer", difficulty: "easy", example: "Creo en ti", exampleTranslation: "I believe in you" },
      { id: "opin3", english: "Like", spanish: "Gustar", difficulty: "easy", example: "Me gusta esta música", exampleTranslation: "I like this music" },
      { id: "opin4", english: "Dislike", spanish: "No gustar", difficulty: "easy", example: "No me gusta el frío", exampleTranslation: "I dislike the cold" },
      { id: "opin5", english: "Prefer", spanish: "Preferir", difficulty: "easy", example: "Prefiero el té", exampleTranslation: "I prefer tea" },
      { id: "opin6", english: "Opinion", spanish: "Opinión", difficulty: "easy", example: "¿Cuál es tu opinión?", exampleTranslation: "What's your opinion?" },
      { id: "opin7", english: "Agree", spanish: "Estar de acuerdo", difficulty: "medium", example: "Estoy de acuerdo contigo", exampleTranslation: "I agree with you" },
      { id: "opin8", english: "Disagree", spanish: "No estar de acuerdo", difficulty: "medium", example: "No estoy de acuerdo con eso", exampleTranslation: "I disagree with that" },
      { id: "opin9", english: "Favorite", spanish: "Favorito", difficulty: "medium", example: "Este es mi restaurante favorito", exampleTranslation: "This is my favorite restaurant" },
      { id: "opin10", english: "Decide", spanish: "Decidir", difficulty: "medium", example: "Necesito decidir pronto", exampleTranslation: "I need to decide soon" },
      { id: "opin11", english: "Choose", spanish: "Elegir", difficulty: "medium", example: "Es difícil elegir", exampleTranslation: "It's hard to choose" },
      { id: "opin12", english: "Recommend", spanish: "Recomendar", difficulty: "medium", example: "Te recomiendo este libro", exampleTranslation: "I recommend this book" },
      { id: "opin13", english: "In my opinion...", spanish: "En mi opinión...", difficulty: "hard", example: "En mi opinión, es una buena idea", exampleTranslation: "In my opinion, it's a good idea" },
      { id: "opin14", english: "I think that...", spanish: "Creo que...", difficulty: "hard", example: "Creo que deberías ir", exampleTranslation: "I think that you should go" },
      { id: "opin15", english: "What do you think about...?", spanish: "¿Qué piensas de...?", difficulty: "hard", example: "¿Qué piensas de esta película?", exampleTranslation: "What do you think about this movie?" }
    ]
  },

  describing_people: {
    name: "Describing People",
    description: "Physical appearance and characteristics",
    icon: UserCircle,
    color: "from-blue-400 to-cyan-500",
    level: "advanced",
    words: [
      { id: "desc1", english: "Tall", spanish: "Alto", difficulty: "easy", example: "Mi hermano es muy alto", exampleTranslation: "My brother is very tall" },
      { id: "desc2", english: "Short", spanish: "Bajo", difficulty: "easy", example: "Soy bajo de estatura", exampleTranslation: "I'm short in height" },
      { id: "desc3", english: "Young", spanish: "Joven", difficulty: "easy", example: "Ella es muy joven", exampleTranslation: "She is very young" },
      { id: "desc4", english: "Old", spanish: "Viejo", difficulty: "easy", example: "Mi abuelo es viejo", exampleTranslation: "My grandfather is old" },
      { id: "desc5", english: "Strong", spanish: "Fuerte", difficulty: "easy", example: "Es una persona fuerte", exampleTranslation: "He's a strong person" },
      { id: "desc6", english: "Thin", spanish: "Delgado", difficulty: "easy", example: "Mi hermana es delgada", exampleTranslation: "My sister is thin" },
      { id: "desc7", english: "Handsome", spanish: "Guapo", difficulty: "medium", example: "Es un hombre guapo", exampleTranslation: "He's a handsome man" },
      { id: "desc8", english: "Beautiful", spanish: "Hermosa", difficulty: "medium", example: "Es una mujer hermosa", exampleTranslation: "She's a beautiful woman" },
      { id: "desc9", english: "Ugly", spanish: "Feo", difficulty: "medium", example: "El edificio es feo", exampleTranslation: "The building is ugly" },
      { id: "desc10", english: "Blonde", spanish: "Rubio", difficulty: "medium", example: "Tiene el pelo rubio", exampleTranslation: "He has blonde hair" },
      { id: "desc11", english: "Dark-haired", spanish: "Moreno", difficulty: "medium", example: "Soy moreno de pelo", exampleTranslation: "I'm dark-haired" },
      { id: "desc12", english: "Curly hair", spanish: "Pelo rizado", difficulty: "medium", example: "Tiene el pelo rizado", exampleTranslation: "She has curly hair" },
      { id: "desc13", english: "What does he/she look like?", spanish: "¿Cómo es físicamente?", difficulty: "hard", example: "¿Cómo es físicamente tu hermano?", exampleTranslation: "What does your brother look like?" },
      { id: "desc14", english: "He/She has...", spanish: "Él/Ella tiene...", difficulty: "hard", example: "Ella tiene los ojos verdes", exampleTranslation: "She has green eyes" },
      { id: "desc15", english: "He/She looks like...", spanish: "Se parece a...", difficulty: "hard", example: "Se parece a su padre", exampleTranslation: "He looks like his father" }
    ]
  },

  daily_activities: {
    name: "Daily Activities",
    description: "Common everyday actions and activities",
    icon: Repeat,
    color: "from-indigo-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "act1", english: "Walk", spanish: "Caminar", difficulty: "easy", example: "Camino al parque", exampleTranslation: "I walk to the park" },
      { id: "act2", english: "Run", spanish: "Correr", difficulty: "easy", example: "Corro todas las mañanas", exampleTranslation: "I run every morning" },
      { id: "act3", english: "Sit", spanish: "Sentarse", difficulty: "easy", example: "Me siento en el sofá", exampleTranslation: "I sit on the sofa" },
      { id: "act4", english: "Stand", spanish: "Estar de pie", difficulty: "easy", example: "Estoy de pie esperando", exampleTranslation: "I'm standing waiting" },
      { id: "act5", english: "Read", spanish: "Leer", difficulty: "easy", example: "Leo el periódico", exampleTranslation: "I read the newspaper" },
      { id: "act6", english: "Write", spanish: "Escribir", difficulty: "easy", example: "Escribo una carta", exampleTranslation: "I'm writing a letter" },
      { id: "act7", english: "Clean", spanish: "Limpiar", difficulty: "medium", example: "Limpio mi casa los sábados", exampleTranslation: "I clean my house on Saturdays" },
      { id: "act8", english: "Wash", spanish: "Lavar", difficulty: "medium", example: "Lavo los platos", exampleTranslation: "I wash the dishes" },
      { id: "act9", english: "Drive", spanish: "Conducir", difficulty: "medium", example: "Conduzco al trabajo", exampleTranslation: "I drive to work" },
      { id: "act10", english: "Wait", spanish: "Esperar", difficulty: "medium", example: "Espero el autobús", exampleTranslation: "I'm waiting for the bus" },
      { id: "act11", english: "Look", spanish: "Mirar", difficulty: "medium", example: "Miro por la ventana", exampleTranslation: "I look out the window" },
      { id: "act12", english: "Search", spanish: "Buscar", difficulty: "medium", example: "Busco mis llaves", exampleTranslation: "I'm searching for my keys" },
      { id: "act13", english: "What are you doing?", spanish: "¿Qué estás haciendo?", difficulty: "hard", example: "¿Qué estás haciendo ahora?", exampleTranslation: "What are you doing now?" },
      { id: "act14", english: "I'm in the middle of...", spanish: "Estoy en medio de...", difficulty: "hard", example: "Estoy en medio de limpiar", exampleTranslation: "I'm in the middle of cleaning" },
      { id: "act15", english: "I was just about to...", spanish: "Estaba a punto de...", difficulty: "hard", example: "Estaba a punto de llamarte", exampleTranslation: "I was just about to call you" }
    ]
  },

  question_words: {
    name: "Question Words",
    description: "Essential question words and phrases",
    icon: MessageSquare,
    color: "from-rose-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "quest1", english: "What", spanish: "Qué", difficulty: "easy", example: "¿Qué haces?", exampleTranslation: "What are you doing?" },
      { id: "quest2", english: "Who", spanish: "Quién", difficulty: "easy", example: "¿Quién es ella?", exampleTranslation: "Who is she?" },
      { id: "quest3", english: "Where", spanish: "Dónde", difficulty: "easy", example: "¿Dónde vives?", exampleTranslation: "Where do you live?" },
      { id: "quest4", english: "When", spanish: "Cuándo", difficulty: "easy", example: "¿Cuándo llegas?", exampleTranslation: "When do you arrive?" },
      { id: "quest5", english: "Why", spanish: "Por qué", difficulty: "easy", example: "Por qué estás triste?", exampleTranslation: "Why are you sad?" },
      { id: "quest6", english: "How", spanish: "Cómo", difficulty: "easy", example: "¿Cómo estás?", exampleTranslation: "How are you?" },
      { id: "quest7", english: "Which", spanish: "Cuál", difficulty: "medium", example: "¿Cuál prefieres?", exampleTranslation: "Which do you prefer?" },
      { id: "quest8", english: "How much", spanish: "Cuánto", difficulty: "medium", example: "¿Cuánto cuesta?", exampleTranslation: "How much does it cost?" },
      { id: "quest9", english: "How many", spanish: "Cuántos", difficulty: "medium", example: "¿Cuántos años tienes?", exampleTranslation: "How many years old are you?" },
      { id: "quest10", english: "Whose", spanish: "De quién", difficulty: "medium", example: "¿De quién es esto?", exampleTranslation: "Whose is this?" },
      { id: "quest11", english: "What time", spanish: "A qué hora", difficulty: "medium", example: "¿A qué hora empieza?", exampleTranslation: "What time does it start?" },
      { id: "quest12", english: "How long", spanish: "Cuánto tiempo", difficulty: "medium", example: "¿Cuánto tiempo te quedas?", exampleTranslation: "How long are you staying?" },
      { id: "quest13", english: "What kind of...?", spanish: "¿Qué tipo de...?", difficulty: "hard", example: "¿Qué tipo de música te gusta?", exampleTranslation: "What kind of music do you like?" },
      { id: "quest14", english: "How often...?", spanish: "¿Con qué frecuencia...?", difficulty: "hard", example: "¿Con qué frecuencia vas al gimnasio?", exampleTranslation: "How often do you go to the gym?" },
      { id: "quest15", english: "For what reason...?", spanish: "¿Por qué razón...?", difficulty: "hard", example: "¿Por qué razón no viniste?", exampleTranslation: "For what reason didn't you come?" }
    ]
  },

  prepositions_locations: {
    name: "Prepositions & Locations",
    description: "Prepositions and location expressions",
    icon: MapPinned,
    color: "from-emerald-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "prep1", english: "In", spanish: "En", difficulty: "easy", example: "Está en la mesa", exampleTranslation: "It's on the table" },
      { id: "prep2", english: "On", spanish: "Sobre", difficulty: "easy", example: "El libro está sobre la silla", exampleTranslation: "The book is on the chair" },
      { id: "prep3", english: "Under", spanish: "Debajo de", difficulty: "easy", example: "El gato está debajo de la cama", exampleTranslation: "The cat is under the bed" },
      { id: "prep4", english: "Above", spanish: "Encima de", difficulty: "easy", example: "El cuadro está encima del sofá", exampleTranslation: "The painting is above the sofa" },
      { id: "prep5", english: "Below", spanish: "Abajo de", difficulty: "easy", example: "Está abajo del armario", exampleTranslation: "It's below the closet" },
      { id: "prep6", english: "Inside", spanish: "Dentro de", difficulty: "easy", example: "Está dentro de la caja", exampleTranslation: "It's inside the box" },
      { id: "prep7", english: "Outside", spanish: "Fuera de", difficulty: "medium", example: "Está fuera de la casa", exampleTranslation: "It's outside the house" },
      { id: "prep8", english: "Across", spanish: "Al otro lado de", difficulty: "medium", example: "Está al otro lado de la calle", exampleTranslation: "It's across the street" },
      { id: "prep9", english: "Among", spanish: "Entre", difficulty: "medium", example: "Está entre los libros", exampleTranslation: "It's among the books" },
      { id: "prep10", english: "Around", spanish: "Alrededor de", difficulty: "medium", example: "Hay árboles alrededor de la casa", exampleTranslation: "There are trees around the house" },
      { id: "prep11", english: "Through", spanish: "A través de", difficulty: "medium", example: "Paso a través del parque", exampleTranslation: "I go through the park" },
      { id: "prep12", english: "Toward", spanish: "Hacia", difficulty: "medium", example: "Voy hacia el centro", exampleTranslation: "I'm going toward downtown" },
      { id: "prep13", english: "Where exactly is it?", spanish: "¿Dónde está exactamente?", difficulty: "hard", example: "¿Dónde está exactamente el restaurante?", exampleTranslation: "Where exactly is the restaurant?" },
      { id: "prep14", english: "It's located...", spanish: "Está ubicado...", difficulty: "hard", example: "Está ubicado cerca del parque", exampleTranslation: "It's located near the park" },
      { id: "prep15", english: "Right next to...", spanish: "Justo al lado de...", difficulty: "hard", example: "Está justo al lado del banco", exampleTranslation: "It's right next to the bank" }
    ]
  },

  connectors_conjunctions: {
    name: "Connectors & Conjunctions",
    description: "Linking words and conjunctions",
    icon: Shuffle,
    color: "from-purple-400 to-violet-500",
    level: "intermediate",
    words: [
      { id: "conn1", english: "And", spanish: "Y", difficulty: "easy", example: "Juan y María", exampleTranslation: "Juan and Maria" },
      { id: "conn2", english: "But", spanish: "Pero", difficulty: "easy", example: "Es caro pero bueno", exampleTranslation: "It's expensive but good" },
      { id: "conn3", english: "Or", spanish: "O", difficulty: "easy", example: "¿Café o té?", exampleTranslation: "Coffee or tea?" },
      { id: "conn4", english: "Because", spanish: "Porque", difficulty: "easy", example: "Estoy feliz porque es viernes", exampleTranslation: "I'm happy because it's Friday" },
      { id: "conn5", english: "So", spanish: "Entonces", difficulty: "easy", example: "Tengo hambre, entonces voy a comer", exampleTranslation: "I'm hungry, so I'm going to eat" },
      { id: "conn6", english: "Also", spanish: "También", difficulty: "easy", example: "Yo también quiero ir", exampleTranslation: "I also want to go" },
      { id: "conn7", english: "However", spanish: "Sin embargo", difficulty: "medium", example: "Es caro, sin embargo, lo quiero", exampleTranslation: "It's expensive, however, I want it" },
      { id: "conn8", english: "Therefore", spanish: "Por lo tanto", difficulty: "medium", example: "Está lloviendo, por lo tanto no salgo", exampleTranslation: "It's raining, therefore I'm not going out" },
      { id: "conn9", english: "Although", spanish: "Aunque", difficulty: "medium", example: "Voy aunque llueva", exampleTranslation: "I'm going although it rains" },
      { id: "conn10", english: "While", spanish: "Mientras", difficulty: "medium", example: "Trabajo mientras escucho música", exampleTranslation: "I work while listening to music" },
      { id: "conn11", english: "If", spanish: "Si", difficulty: "medium", example: "Si quieres, vamos", exampleTranslation: "If you want, we'll go" },
      { id: "conn12", english: "When", spanish: "Cuando", difficulty: "medium", example: "Cuando llegues, llámame", exampleTranslation: "When you arrive, call me" },
      { id: "conn13", english: "On the other hand", spanish: "Por otro lado", difficulty: "hard", example: "Por otro lado, es muy cómodo", exampleTranslation: "On the other hand, it's very comfortable" },
      { id: "conn14", english: "In addition", spanish: "Además", difficulty: "hard", example: "Además, es muy barato", exampleTranslation: "In addition, it's very cheap" },
      { id: "conn15", english: "Nevertheless", spanish: "No obstante", difficulty: "hard", example: "No obstante, voy a intentarlo", exampleTranslation: "Nevertheless, I'm going to try it" }
    ]
  },

  verbs_present: {
    name: "Common Verbs - Present",
    description: "Essential verbs in present tense",
    icon: Zap,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "verb1", english: "To be (permanent)", spanish: "Ser", difficulty: "easy", example: "Soy estudiante", exampleTranslation: "I am a student" },
      { id: "verb2", english: "To be (temporary)", spanish: "Estar", difficulty: "easy", example: "Estoy cansado", exampleTranslation: "I am tired" },
      { id: "verb3", english: "To have", spanish: "Tener", difficulty: "easy", example: "Tengo un coche", exampleTranslation: "I have a car" },
      { id: "verb4", english: "To do/make", spanish: "Hacer", difficulty: "easy", example: "Hago ejercicio", exampleTranslation: "I do exercise" },
      { id: "verb5", english: "To go", spanish: "Ir", difficulty: "easy", example: "Voy al trabajo", exampleTranslation: "I go to work" },
      { id: "verb6", english: "To come", spanish: "Venir", difficulty: "easy", example: "Vengo de casa", exampleTranslation: "I come from home" },
      { id: "verb7", english: "To want", spanish: "Querer", difficulty: "medium", example: "Quiero aprender español", exampleTranslation: "I want to learn Spanish" },
      { id: "verb8", english: "To be able/can", spanish: "Poder", difficulty: "medium", example: "Puedo ayudarte", exampleTranslation: "I can help you" },
      { id: "verb9", english: "To know (facts)", spanish: "Saber", difficulty: "medium", example: "Sé la respuesta", exampleTranslation: "I know the answer" },
      { id: "verb10", english: "To know (people/places)", spanish: "Conocer", difficulty: "medium", example: "Conozco Madrid", exampleTranslation: "I know Madrid" },
      { id: "verb11", english: "To give", spanish: "Dar", difficulty: "medium", example: "Te doy mi número", exampleTranslation: "I give you my number" },
      { id: "verb12", english: "To say/tell", difficulty: "medium", spanish: "Decir", example: "Digo la verdad", exampleTranslation: "I tell the truth" },
      { id: "verb13", english: "To put", spanish: "Poner", difficulty: "hard", example: "Pongo la mesa", exampleTranslation: "I set the table" },
      { id: "verb14", english: "To see", spanish: "Ver", difficulty: "hard", example: "Veo la televisión", exampleTranslation: "I watch television" },
      { id: "verb15", english: "To bring", spanish: "Traer", difficulty: "hard", example: "Traigo la comida", exampleTranslation: "I bring the food" }
    ]
  },

  verbs_past: {
    name: "Common Verbs - Past",
    description: "Essential verbs in past tense",
    icon: TrendingUp,
    color: "from-orange-400 to-red-500",
    level: "advanced",
    words: [
      { id: "past1", english: "I was", spanish: "Fui/Era", difficulty: "easy", example: "Fui al cine ayer", exampleTranslation: "I went to the cinema yesterday" },
      { id: "past2", english: "I had", spanish: "Tuve/Tenía", difficulty: "easy", example: "Tuve un buen día", exampleTranslation: "I had a good day" },
      { id: "past3", english: "I did/made", spanish: "Hice/Hacía", difficulty: "easy", example: "Hice la tarea", exampleTranslation: "I did the homework" },
      { id: "past4", english: "I went", spanish: "Fui/Iba", difficulty: "easy", example: "Iba al trabajo", exampleTranslation: "I was going to work" },
      { id: "past5", english: "I came", spanish: "Vine/Venía", difficulty: "easy", example: "Vine a verte", exampleTranslation: "I came to see you" },
      { id: "past6", english: "I said", spanish: "Dije/Decía", difficulty: "easy", example: "Dije la verdad", exampleTranslation: "I said the truth" },
      { id: "past7", english: "I wanted", spanish: "Quise/Quería", difficulty: "medium", example: "Quería ir contigo", exampleTranslation: "I wanted to go with you" },
      { id: "past8", english: "I could", spanish: "Pude/Podía", difficulty: "medium", example: "Pude terminar el trabajo", exampleTranslation: "I could finish the work" },
      { id: "past9", english: "I knew", spanish: "Supe/Sabía", difficulty: "medium", example: "Sabía la respuesta", exampleTranslation: "I knew the answer" },
      { id: "past10", english: "I gave", spanish: "Di/Daba", difficulty: "medium", example: "Di un regalo", exampleTranslation: "I gave a gift" },
      { id: "past11", english: "I saw", spanish: "Vi/Veía", difficulty: "medium", example: "Vi una película", exampleTranslation: "I saw a movie" },
      { id: "past12", english: "I put", spanish: "Puse/Ponía", difficulty: "medium", example: "Puse la mesa", exampleTranslation: "I set the table" },
      { id: "past13", english: "I used to...", spanish: "Solía...", difficulty: "hard", example: "Solía vivir en Madrid", exampleTranslation: "I used to live in Madrid" },
      { id: "past14", english: "I have been", spanish: "He sido/estado", difficulty: "hard", example: "He estado en España", exampleTranslation: "I have been to Spain" },
      { id: "past15", english: "I have done", spanish: "He hecho", difficulty: "hard", example: "He hecho mi tarea", exampleTranslation: "I have done my homework" }
    ]
  },

  adjectives_descriptions: {
    name: "Adjectives - Descriptions",
    description: "Common descriptive adjectives",
    icon: Type,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "adj1", english: "Big", spanish: "Grande", difficulty: "easy", example: "Es una casa grande", exampleTranslation: "It's a big house" },
      { id: "adj2", english: "Small", spanish: "Pequeño", difficulty: "easy", example: "Mi coche es pequeño", exampleTranslation: "My car is small" },
      { id: "adj3", english: "New", spanish: "Nuevo", difficulty: "easy", example: "Tengo un teléfono nuevo", exampleTranslation: "I have a new phone" },
      { id: "adj4", english: "Old", spanish: "Viejo", difficulty: "easy", example: "Es un libro viejo", exampleTranslation: "It's an old book" },
      { id: "adj5", english: "Good", spanish: "Bueno", difficulty: "easy", example: "Es una buena idea", exampleTranslation: "It's a good idea" },
      { id: "adj6", english: "Bad", spanish: "Malo", difficulty: "easy", example: "Fue un mal día", exampleTranslation: "It was a bad day" },
      { id: "adj7", english: "Beautiful", spanish: "Hermoso", difficulty: "medium", example: "Es un lugar hermoso", exampleTranslation: "It's a beautiful place" },
      { id: "adj8", english: "Ugly", spanish: "Feo", difficulty: "medium", example: "El edificio es feo", exampleTranslation: "The building is ugly" },
      { id: "adj9", english: "Easy", spanish: "Fácil", difficulty: "medium", example: "El examen es fácil", exampleTranslation: "The exam is easy" },
      { id: "adj10", english: "Difficult", spanish: "Difícil", difficulty: "medium", example: "Es un problema difícil", exampleTranslation: "It's a difficult problem" },
      { id: "adj11", english: "Cheap", spanish: "Barato", difficulty: "medium", example: "Este restaurante es barato", exampleTranslation: "This restaurant is cheap" },
      { id: "adj12", english: "Expensive", spanish: "Caro", difficulty: "medium", example: "El hotel es muy caro", exampleTranslation: "The hotel is very expensive" },
      { id: "adj13", english: "Interesting", spanish: "Interesante", difficulty: "hard", example: "Es una historia muy interesante", exampleTranslation: "It's a very interesting story" },
      { id: "adj14", english: "Boring", spanish: "Aburrido", difficulty: "hard", example: "La película es aburrida", exampleTranslation: "The movie is boring" },
      { id: "adj15", english: "Important", spanish: "Importante", difficulty: "hard", example: "Es muy importante para mí", exampleTranslation: "It's very important to me" }
    ]
  },

  adverbs_expressions: {
    name: "Adverbs & Expressions",
    description: "Common adverbs and time expressions",
    icon: LayoutGrid,
    color: "from-violet-400 to-fuchsia-500",
    level: "intermediate",
    words: [
      { id: "adv1", english: "Always", spanish: "Siempre", difficulty: "easy", example: "Siempre llego a tiempo", exampleTranslation: "I always arrive on time" },
      { id: "adv2", english: "Never", spanish: "Nunca", difficulty: "easy", example: "Nunca como carne", exampleTranslation: "I never eat meat" },
      { id: "adv3", english: "Sometimes", spanish: "A veces", difficulty: "easy", example: "A veces voy al cine", exampleTranslation: "Sometimes I go to the cinema" },
      { id: "adv4", english: "Often", spanish: "A menudo", difficulty: "easy", example: "Voy a menudo al gimnasio", exampleTranslation: "I often go to the gym" },
      { id: "adv5", english: "Rarely", spanish: "Raramente", difficulty: "easy", example: "Raramente como comida rápida", exampleTranslation: "I rarely eat fast food" },
      { id: "adv6", english: "Usually", spanish: "Normalmente", difficulty: "easy", example: "Normalmente me despierto a las siete", exampleTranslation: "I usually wake up at seven" },
      { id: "adv7", english: "Already", spanish: "Ya", difficulty: "medium", example: "Ya terminé la tarea", exampleTranslation: "I already finished the homework" },
      { id: "adv8", english: "Still", spanish: "Todavía", difficulty: "medium", example: "Todavía estoy trabajando", exampleTranslation: "I'm still working" },
      { id: "adv9", english: "Yet", spanish: "Aún", difficulty: "medium", example: "Aún no he comido", exampleTranslation: "I haven't eaten yet" },
      { id: "adv10", english: "Quickly", spanish: "Rápidamente", difficulty: "medium", example: "Corro rápidamente", exampleTranslation: "I run quickly" },
      { id: "adv11", english: "Slowly", spanish: "Lentamente", difficulty: "medium", example: "Habla lentamente, por favor", exampleTranslation: "Speak slowly, please" },
      { id: "adv12", english: "Well", spanish: "Bien", difficulty: "medium", example: "Hablo bien español", exampleTranslation: "I speak Spanish well" },
      { id: "adv13", english: "Almost", spanish: "Casi", difficulty: "hard", example: "Es casi medianoche", exampleTranslation: "It's almost midnight" },
      { id: "adv14", english: "Exactly", spanish: "Exactamente", difficulty: "hard", example: "Exactamente lo que necesito", exampleTranslation: "Exactly what I need" },
      { id: "adv15", english: "Approximately", spanish: "Aproximadamente", difficulty: "hard", example: "Cuesta aproximadamente cien euros", exampleTranslation: "It costs approximately one hundred euros" }
    ]
  },

  countries_nationalities: {
    name: "Countries & Nationalities",
    description: "Countries and nationality adjectives",
    icon: MapPinned,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "country1", english: "Spain", spanish: "España", difficulty: "easy", example: "Vivo en España", exampleTranslation: "I live in Spain" },
      { id: "country2", english: "Mexico", spanish: "México", difficulty: "easy", example: "Soy de México", exampleTranslation: "I'm from Mexico" },
      { id: "country3", english: "United States", spanish: "Estados Unidos", difficulty: "easy", example: "Viajo a Estados Unidos", exampleTranslation: "I'm traveling to the United States" },
      { id: "country4", english: "England", spanish: "Inglaterra", difficulty: "easy", example: "Mi amigo es de Inglaterra", exampleTranslation: "My friend is from England" },
      { id: "country5", english: "France", spanish: "Francia", difficulty: "easy", example: "Quiero visitar Francia", exampleTranslation: "I want to visit France" },
      { id: "country6", english: "Germany", spanish: "Alemania", difficulty: "easy", example: "Estudio en Alemania", exampleTranslation: "I study in Germany" },
      { id: "country7", english: "Spanish (nationality)", spanish: "Español", difficulty: "medium", example: "Soy español", exampleTranslation: "I'm Spanish" },
      { id: "country8", english: "Mexican", spanish: "Mexicano", difficulty: "medium", example: "La comida mexicana es deliciosa", exampleTranslation: "Mexican food is delicious" },
      { id: "country9", english: "American", spanish: "Americano", difficulty: "medium", example: "Es ciudadano americano", exampleTranslation: "He's an American citizen" },
      { id: "country10", english: "English", spanish: "Inglés", difficulty: "medium", example: "Hablo inglés", exampleTranslation: "I speak English" },
      { id: "country11", english: "French", spanish: "Francés", difficulty: "medium", example: "El vino francés es famoso", exampleTranslation: "French wine is famous" },
      { id: "country12", english: "German", spanish: "Alemán", difficulty: "medium", example: "Aprendo alemán", exampleTranslation: "I'm learning German" },
      { id: "country13", english: "Where are you from?", spanish: "¿De dónde eres?", difficulty: "hard", example: "¿De dónde eres? Soy de España", exampleTranslation: "Where are you from? I'm from Spain" },
      { id: "country14", english: "What's your nationality?", spanish: "¿Cuál es tu nacionalidad?", difficulty: "hard", example: "¿Cuál es tu nacionalidad? Soy mexicano", exampleTranslation: "What's your nationality? I'm Mexican" },
      { id: "country15", english: "I'm from...", spanish: "Soy de...", difficulty: "hard", example: "Soy de Argentina, pero vivo en España", exampleTranslation: "I'm from Argentina, but I live in Spain" }
    ]
  },

  workplace_communication: {
    name: "Workplace Communication",
    description: "Professional workplace phrases",
    icon: GraduationCap,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { id: "work_comm1", english: "Meeting", spanish: "Reunión", difficulty: "easy", example: "Tengo una reunión a las tres", exampleTranslation: "I have a meeting at three" },
      { id: "work_comm2", english: "Report", spanish: "Informe", difficulty: "easy", example: "Necesito escribir un informe", exampleTranslation: "I need to write a report" },
      { id: "work_comm3", english: "Deadline", spanish: "Fecha límite", difficulty: "easy", example: "La fecha límite es mañana", exampleTranslation: "The deadline is tomorrow" },
      { id: "work_comm4", english: "Project", spanish: "Proyecto", difficulty: "easy", example: "Trabajo en un nuevo proyecto", exampleTranslation: "I'm working on a new project" },
      { id: "work_comm5", english: "Team", spanish: "Equipo", difficulty: "easy", example: "Mi equipo es muy bueno", exampleTranslation: "My team is very good" },
      { id: "work_comm6", english: "Client", spanish: "Cliente", difficulty: "easy", example: "Tengo reunión con un cliente", exampleTranslation: "I have a meeting with a client" },
      { id: "work_comm7", english: "Schedule", spanish: "Horario", difficulty: "medium", example: "Mi horario es flexible", exampleTranslation: "My schedule is flexible" },
      { id: "work_comm8", english: "Presentation", spanish: "Presentación", difficulty: "medium", example: "Hago la presentación mañana", exampleTranslation: "I'm doing the presentation tomorrow" },
      { id: "work_comm9", english: "Budget", spanish: "Presupuesto", difficulty: "medium", example: "Necesitamos revisar el presupuesto", exampleTranslation: "We need to review the budget" },
      { id: "work_comm10", english: "Agreement", spanish: "Acuerdo", difficulty: "medium", example: "Llegamos a un acuerdo", exampleTranslation: "We reached an agreement" },
      { id: "work_comm11", english: "Negotiate", spanish: "Negociar", difficulty: "medium", example: "Voy a negociar el contrato", exampleTranslation: "I'm going to negotiate the contract" },
      { id: "work_comm12", english: "Promote", spanish: "Promocionar", difficulty: "medium", example: "Me van a promocionar", exampleTranslation: "They're going to promote me" },
      { id: "work_comm13", english: "Could you send me...?", spanish: "¿Podrías enviarme...?", difficulty: "hard", example: "¿Podrías enviarme el documento?", exampleTranslation: "Could you send me the document?" },
      { id: "work_comm14", english: "I'll get back to you", spanish: "Te respondo luego", difficulty: "hard", example: "Te respondo luego con la información", exampleTranslation: "I'll get back to you with the information" },
      { id: "work_comm15", english: "Let's schedule a meeting", spanish: "Agendemos una reunión", difficulty: "hard", example: "Agendemos una reunión para discutirlo", exampleTranslation: "Let's schedule a meeting to discuss it" }
    ]
  },

  emotions_feelings: {
    name: "Emotions & Feelings",
    description: "Expressing emotions and feelings",
    icon: Heart,
    color: "from-rose-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "emot1", english: "Happy", spanish: "Feliz", difficulty: "easy", example: "Estoy muy feliz hoy", exampleTranslation: "I'm very happy today" },
      { id: "emot2", english: "Sad", spanish: "Triste", difficulty: "easy", example: "Me siento un poco triste", exampleTranslation: "I feel a bit sad" },
      { id: "emot3", english: "Angry", spanish: "Enojado", difficulty: "easy", example: "Está enojado conmigo", exampleTranslation: "He's angry with me" },
      { id: "emot4", english: "Excited", spanish: "Emocionado", difficulty: "easy", example: "Estoy emocionado por el viaje", exampleTranslation: "I'm excited about the trip" },
      { id: "emot5", english: "Tired", spanish: "Cansado", difficulty: "easy", example: "Estoy muy cansado después del trabajo", exampleTranslation: "I'm very tired after work" },
      { id: "emot6", english: "Nervous", spanish: "Nervioso", difficulty: "easy", example: "Me siento nervioso antes del examen", exampleTranslation: "I feel nervous before the exam" },
      { id: "emot7", english: "Worried", spanish: "Preocupado", difficulty: "medium", example: "Estoy preocupado por mi familia", exampleTranslation: "I'm worried about my family" },
      { id: "emot8", english: "Surprised", spanish: "Sorprendido", difficulty: "medium", example: "Estoy sorprendido por la noticia", exampleTranslation: "I'm surprised by the news" },
      { id: "emot9", english: "Disappointed", spanish: "Decepcionado", difficulty: "medium", example: "Estoy decepcionado con los resultados", exampleTranslation: "I'm disappointed with the results" },
      { id: "emot10", english: "Grateful", spanish: "Agradecido", difficulty: "medium", example: "Estoy muy agradecido por tu ayuda", exampleTranslation: "I'm very grateful for your help" },
      { id: "emot11", english: "Confused", spanish: "Confundido", difficulty: "medium", example: "Estoy confundido sobre qué hacer", exampleTranslation: "I'm confused about what to do" },
      { id: "emot12", english: "Proud", spanish: "Orgulloso", difficulty: "medium", example: "Estoy orgulloso de ti", exampleTranslation: "I'm proud of you" },
      { id: "emot13", english: "How do you feel?", spanish: "¿Cómo te sientes?", difficulty: "hard", example: "¿Cómo te sientes después de la reunión?", exampleTranslation: "How do you feel after the meeting?" },
      { id: "emot14", english: "I'm feeling...", spanish: "Me siento...", difficulty: "hard", example: "Me siento mejor que ayer", exampleTranslation: "I'm feeling better than yesterday" },
      { id: "emot15", english: "Don't worry", spanish: "No te preocupes", difficulty: "hard", example: "No te preocupes, todo va a salir bien", exampleTranslation: "Don't worry, everything will be fine" }
    ]
  },

  health_wellness: {
    name: "Health & Wellness",
    description: "Health, fitness, and well-being vocabulary",
    icon: Heart,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    words: [
      { id: "health1", english: "Health", spanish: "Salud", difficulty: "easy", example: "La salud es lo más importante", exampleTranslation: "Health is the most important thing" },
      { id: "health2", english: "Doctor", spanish: "Médico", difficulty: "easy", example: "Necesito ir al médico", exampleTranslation: "I need to go to the doctor" },
      { id: "health3", english: "Sick", spanish: "Enfermo", difficulty: "easy", example: "Estoy enfermo, no puedo ir", exampleTranslation: "I'm sick, I can't go" },
      { id: "health4", english: "Pain", spanish: "Dolor", difficulty: "easy", example: "Tengo dolor de espalda", exampleTranslation: "I have back pain" },
      { id: "health5", english: "Healthy", spanish: "Saludable", difficulty: "easy", example: "Como comida saludable", exampleTranslation: "I eat healthy food" },
      { id: "health6", english: "Exercise", spanish: "Ejercicio", difficulty: "easy", example: "Hago ejercicio todos los días", exampleTranslation: "I exercise every day" },
      { id: "health7", english: "Stress", spanish: "Estrés", difficulty: "medium", example: "Tengo mucho estrés en el trabajo", exampleTranslation: "I have a lot of stress at work" },
      { id: "health8", english: "Rest", spanish: "Descanso", difficulty: "medium", example: "Necesito descanso después de trabajar", exampleTranslation: "I need rest after working" },
      { id: "health9", english: "Diet", spanish: "Dieta", difficulty: "medium", example: "Estoy haciendo una dieta saludable", exampleTranslation: "I'm on a healthy diet" },
      { id: "health10", english: "Vitamin", spanish: "Vitamina", difficulty: "medium", example: "Tomo vitaminas cada mañana", exampleTranslation: "I take vitamins every morning" },
      { id: "health11", english: "Checkup", spanish: "Revisión médica", difficulty: "medium", example: "Tengo una revisión médica la próxima semana", exampleTranslation: "I have a medical checkup next week" },
      { id: "health12", english: "Treatment", spanish: "Tratamiento", difficulty: "medium", example: "El tratamiento es efectivo", exampleTranslation: "The treatment is effective" },
      { id: "health13", english: "How are you feeling?", spanish: "¿Cómo te sientes?", difficulty: "hard", example: "¿Cómo te sientes hoy? ¿Mejor?", exampleTranslation: "How are you feeling today? Better?" },
      { id: "health14", english: "I need to see a doctor", spanish: "Necesito ver a un médico", difficulty: "hard", example: "Necesito ver a un médico urgentemente", exampleTranslation: "I need to see a doctor urgently" },
      { id: "health15", english: "Take care of yourself", spanish: "Cuídate", difficulty: "hard", example: "Cuídate mucho y descansa", exampleTranslation: "Take care of yourself and rest" }
    ]
  }
};

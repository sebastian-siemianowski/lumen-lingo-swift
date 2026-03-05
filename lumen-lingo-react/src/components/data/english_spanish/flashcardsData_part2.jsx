/**
 * ENGLISH → SPANISH FLASHCARDS - PART 2
 * 
 * Native Language: English
 * Target Language: Spanish
 * 
 * This file contains intermediate and advanced flashcard categories (16-30).
 */

import {
  Shirt,
  Clock,
  Dumbbell,
  Smartphone,
  Palette,
  SmilePlus,
  GraduationCap,
  Stethoscope,
  MapPin,
  UtensilsCrossed,
  Sofa,
  Dog,
  Sun,
  Landmark,
  Phone,
  AlertTriangle
} from "lucide-react";

export const flashcardsCategories_part2 = {
  clothing_fashion: {
    name: "Clothing & Fashion",
    description: "Clothes and fashion vocabulary",
    icon: Shirt,
    color: "from-purple-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "cloth1", english: "Shirt", spanish: "Camisa", difficulty: "easy", example: "Llevo una camisa azul", exampleTranslation: "I'm wearing a blue shirt" },
      { id: "cloth2", english: "Pants", spanish: "Pantalones", difficulty: "easy", example: "Necesito pantalones nuevos", exampleTranslation: "I need new pants" },
      { id: "cloth3", english: "Dress", spanish: "Vestido", difficulty: "easy", example: "Compré un vestido bonito", exampleTranslation: "I bought a beautiful dress" },
      { id: "cloth4", english: "Shoes", spanish: "Zapatos", difficulty: "easy", example: "Mis zapatos son cómodos", exampleTranslation: "My shoes are comfortable" },
      { id: "cloth5", english: "Jacket", spanish: "Chaqueta", difficulty: "easy", example: "Hace frío, necesito mi chaqueta", exampleTranslation: "It's cold, I need my jacket" },
      { id: "cloth6", english: "Skirt", spanish: "Falda", difficulty: "easy", example: "Me gusta tu falda", exampleTranslation: "I like your skirt" },
      { id: "cloth7", english: "Hat", spanish: "Sombrero", difficulty: "medium", example: "Llevo un sombrero para el sol", exampleTranslation: "I wear a hat for the sun" },
      { id: "cloth8", english: "Socks", spanish: "Calcetines", difficulty: "medium", example: "Necesito calcetines limpios", exampleTranslation: "I need clean socks" },
      { id: "cloth9", english: "Coat", spanish: "Abrigo", difficulty: "medium", example: "Mi abrigo es muy caliente", exampleTranslation: "My coat is very warm" },
      { id: "cloth10", english: "Sweater", spanish: "Suéter", difficulty: "medium", example: "Llevo un suéter de lana", exampleTranslation: "I'm wearing a wool sweater" },
      { id: "cloth11", english: "Tie", spanish: "Corbata", difficulty: "medium", example: "Necesito una corbata para la reunión", exampleTranslation: "I need a tie for the meeting" },
      { id: "cloth12", english: "Jeans", spanish: "Vaqueros", difficulty: "medium", example: "Prefiero llevar vaqueros", exampleTranslation: "I prefer to wear jeans" },
      { id: "cloth13", english: "What are you wearing?", spanish: "¿Qué llevas puesto?", difficulty: "hard", example: "¿Qué llevas puesto hoy?", exampleTranslation: "What are you wearing today?" },
      { id: "cloth14", english: "It looks good on you", spanish: "Te queda bien", difficulty: "hard", example: "Ese vestido te queda muy bien", exampleTranslation: "That dress looks very good on you" },
      { id: "cloth15", english: "What size do you wear?", spanish: "¿Qué talla usas?", difficulty: "hard", example: "¿Qué talla de zapatos usas?", exampleTranslation: "What shoe size do you wear?" }
    ]
  },

  daily_routine: {
    name: "Daily Routine",
    description: "Common daily activities and routines",
    icon: Clock,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "routine1", english: "Wake up", spanish: "Despertarse", difficulty: "easy", example: "Me despierto a las siete", exampleTranslation: "I wake up at seven" },
      { id: "routine2", english: "Sleep", spanish: "Dormir", difficulty: "easy", example: "Duermo ocho horas", exampleTranslation: "I sleep eight hours" },
      { id: "routine3", english: "Eat", spanish: "Comer", difficulty: "easy", example: "Como tres veces al día", exampleTranslation: "I eat three times a day" },
      { id: "routine4", english: "Drink", spanish: "Beber", difficulty: "easy", example: "Bebo café por la mañana", exampleTranslation: "I drink coffee in the morning" },
      { id: "routine5", english: "Shower", spanish: "Ducha", difficulty: "easy", example: "Tomo una ducha cada mañana", exampleTranslation: "I take a shower every morning" },
      { id: "routine6", english: "Brush teeth", spanish: "Cepillarse los dientes", difficulty: "easy", example: "Me cepillo los dientes dos veces al día", exampleTranslation: "I brush my teeth twice a day" },
      { id: "routine7", english: "Get dressed", spanish: "Vestirse", difficulty: "medium", example: "Me visto rápidamente", exampleTranslation: "I get dressed quickly" },
      { id: "routine8", english: "Leave home", spanish: "Salir de casa", difficulty: "medium", example: "Salgo de casa a las ocho", exampleTranslation: "I leave home at eight" },
      { id: "routine9", english: "Arrive", spanish: "Llegar", difficulty: "medium", example: "Llego al trabajo a las nueve", exampleTranslation: "I arrive at work at nine" },
      { id: "routine10", english: "Return", spanish: "Regresar", difficulty: "medium", example: "Regreso a casa por la tarde", exampleTranslation: "I return home in the afternoon" },
      { id: "routine11", english: "Cook", spanish: "Cocinar", difficulty: "medium", example: "Cocino la cena todas las noches", exampleTranslation: "I cook dinner every night" },
      { id: "routine12", english: "Watch TV", spanish: "Ver la televisión", difficulty: "medium", example: "Veo la televisión por la noche", exampleTranslation: "I watch TV at night" },
      { id: "routine13", english: "What time do you wake up?", spanish: "¿A qué hora te despiertas?", difficulty: "hard", example: "¿A qué hora te despiertas los lunes?", exampleTranslation: "What time do you wake up on Mondays?" },
      { id: "routine14", english: "I go to bed at...", spanish: "Me acuesto a las...", difficulty: "hard", example: "Me acuesto a las once de la noche", exampleTranslation: "I go to bed at eleven at night" },
      { id: "routine15", english: "My daily routine is...", spanish: "Mi rutina diaria es...", difficulty: "hard", example: "Mi rutina diaria es muy ocupada", exampleTranslation: "My daily routine is very busy" }
    ]
  },

  sports_exercise: {
    name: "Sports & Exercise",
    description: "Sports and physical activity vocabulary",
    icon: Dumbbell,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "sport1", english: "Soccer", spanish: "Fútbol", difficulty: "easy", example: "Juego al fútbol los domingos", exampleTranslation: "I play soccer on Sundays" },
      { id: "sport2", english: "Basketball", spanish: "Baloncesto", difficulty: "easy", example: "Me gusta el baloncesto", exampleTranslation: "I like basketball" },
      { id: "sport3", english: "Tennis", spanish: "Tenis", difficulty: "easy", example: "Juego tenis dos veces por semana", exampleTranslation: "I play tennis twice a week" },
      { id: "sport4", english: "Swimming", spanish: "Natación", difficulty: "easy", example: "La natación es buen ejercicio", exampleTranslation: "Swimming is good exercise" },
      { id: "sport5", english: "Run", spanish: "Correr", difficulty: "easy", example: "Corro por las mañanas", exampleTranslation: "I run in the mornings" },
      { id: "sport6", english: "Walk", spanish: "Caminar", difficulty: "easy", example: "Camino al trabajo", exampleTranslation: "I walk to work" },
      { id: "sport7", english: "Gym", spanish: "Gimnasio", difficulty: "medium", example: "Voy al gimnasio tres veces por semana", exampleTranslation: "I go to the gym three times a week" },
      { id: "sport8", english: "Exercise", spanish: "Ejercicio", difficulty: "medium", example: "Hago ejercicio todos los días", exampleTranslation: "I exercise every day" },
      { id: "sport9", english: "Team", spanish: "Equipo", difficulty: "medium", example: "Juego en un equipo de fútbol", exampleTranslation: "I play on a soccer team" },
      { id: "sport10", english: "Win", spanish: "Ganar", difficulty: "medium", example: "Queremos ganar el partido", exampleTranslation: "We want to win the game" },
      { id: "sport11", english: "Lose", spanish: "Perder", difficulty: "medium", example: "No me gusta perder", exampleTranslation: "I don't like to lose" },
      { id: "sport12", english: "Practice", spanish: "Practicar", difficulty: "medium", example: "Practico español todos los días", exampleTranslation: "I practice Spanish every day" },
      { id: "sport13", english: "Do you play sports?", spanish: "¿Practicas deportes?", difficulty: "hard", example: "¿Practicas deportes regularmente?", exampleTranslation: "Do you play sports regularly?" },
      { id: "sport14", english: "What's your favorite sport?", spanish: "¿Cuál es tu deporte favorito?", difficulty: "hard", example: "¿Cuál es tu deporte favorito? El fútbol", exampleTranslation: "What's your favorite sport? Soccer" },
      { id: "sport15", english: "I work out at...", spanish: "Entreno en...", difficulty: "hard", example: "Entreno en el gimnasio por las tardes", exampleTranslation: "I work out at the gym in the afternoons" }
    ]
  },

  technology_internet: {
    name: "Technology & Internet",
    description: "Modern technology and digital vocabulary",
    icon: Smartphone,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "tech1", english: "Phone", spanish: "Teléfono", difficulty: "easy", example: "Mi teléfono está roto", exampleTranslation: "My phone is broken" },
      { id: "tech2", english: "Internet", spanish: "Internet", difficulty: "easy", example: "Necesito internet para trabajar", exampleTranslation: "I need internet to work" },
      { id: "tech3", english: "Email", spanish: "Correo electrónico", difficulty: "easy", example: "Te envié un correo electrónico", exampleTranslation: "I sent you an email" },
      { id: "tech4", english: "Message", spanish: "Mensaje", difficulty: "easy", example: "Recibí tu mensaje", exampleTranslation: "I received your message" },
      { id: "tech5", english: "App", spanish: "Aplicación", difficulty: "easy", example: "Esta aplicación es muy útil", exampleTranslation: "This app is very useful" },
      { id: "tech6", english: "Website", spanish: "Sitio web", difficulty: "easy", example: "Encontré la información en el sitio web", exampleTranslation: "I found the information on the website" },
      { id: "tech7", english: "Password", spanish: "Contraseña", difficulty: "medium", example: "Olvidé mi contraseña", exampleTranslation: "I forgot my password" },
      { id: "tech8", english: "Download", spanish: "Descargar", difficulty: "medium", example: "Necesito descargar el archivo", exampleTranslation: "I need to download the file" },
      { id: "tech9", english: "Upload", spanish: "Subir", difficulty: "medium", example: "Voy a subir las fotos", exampleTranslation: "I'm going to upload the photos" },
      { id: "tech10", english: "Connect", spanish: "Conectar", difficulty: "medium", example: "No puedo conectarme a internet", exampleTranslation: "I can't connect to internet" },
      { id: "tech11", english: "Social media", spanish: "Redes sociales", difficulty: "medium", example: "Paso mucho tiempo en redes sociales", exampleTranslation: "I spend a lot of time on social media" },
      { id: "tech12", english: "Video call", spanish: "Videollamada", difficulty: "medium", example: "Tengo una videollamada a las tres", exampleTranslation: "I have a video call at three" },
      { id: "tech13", english: "The internet isn't working", spanish: "No funciona el internet", difficulty: "hard", example: "No funciona el internet en mi casa", exampleTranslation: "The internet isn't working at my house" },
      { id: "tech14", english: "Can you send me...?", spanish: "¿Me puedes enviar...?", difficulty: "hard", example: "¿Me puedes enviar el documento?", exampleTranslation: "Can you send me the document?" },
      { id: "tech15", english: "I'll text you", spanish: "Te escribo un mensaje", difficulty: "hard", example: "Te escribo un mensaje cuando llegue", exampleTranslation: "I'll text you when I arrive" }
    ]
  },

  hobbies_interests: {
    name: "Hobbies & Interests",
    description: "Leisure activities and personal interests",
    icon: Palette,
    color: "from-pink-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "hobby1", english: "Read", spanish: "Leer", difficulty: "easy", example: "Me gusta leer novelas", exampleTranslation: "I like to read novels" },
      { id: "hobby2", english: "Write", spanish: "Escribir", difficulty: "easy", example: "Escribo en mi diario", exampleTranslation: "I write in my diary" },
      { id: "hobby3", english: "Draw", spanish: "Dibujar", difficulty: "easy", example: "Me encanta dibujar", exampleTranslation: "I love to draw" },
      { id: "hobby4", english: "Paint", spanish: "Pintar", difficulty: "easy", example: "Pinto los fines de semana", exampleTranslation: "I paint on weekends" },
      { id: "hobby5", english: "Sing", spanish: "Cantar", difficulty: "easy", example: "Canto en la ducha", exampleTranslation: "I sing in the shower" },
      { id: "hobby6", english: "Play guitar", spanish: "Tocar la guitarra", difficulty: "easy", example: "Toco la guitarra desde niño", exampleTranslation: "I've played guitar since I was a child" },
      { id: "hobby7", english: "Photography", spanish: "Fotografía", difficulty: "medium", example: "Me interesa la fotografía", exampleTranslation: "I'm interested in photography" },
      { id: "hobby8", english: "Gardening", spanish: "Jardinería", difficulty: "medium", example: "Mi madre le gusta la jardinería", exampleTranslation: "My mother likes gardening" },
      { id: "hobby9", english: "Cooking", spanish: "Cocinar", difficulty: "medium", example: "Cocinar es mi pasatiempo favorito", exampleTranslation: "Cooking is my favorite hobby" },
      { id: "hobby10", english: "Travel", spanish: "Viajar", difficulty: "medium", example: "Me encanta viajar por el mundo", exampleTranslation: "I love to travel around the world" },
      { id: "hobby11", english: "Collect", spanish: "Coleccionar", difficulty: "medium", example: "Colecciono monedas antiguas", exampleTranslation: "I collect old coins" },
      { id: "hobby12", english: "Video games", spanish: "Videojuegos", difficulty: "medium", example: "Juego videojuegos con mis amigos", exampleTranslation: "I play video games with my friends" },
      { id: "hobby13", english: "What do you do for fun?", spanish: "¿Qué haces para divertirte?", difficulty: "hard", example: "¿Qué haces para divertirte? Leo libros", exampleTranslation: "What do you do for fun? I read books" },
      { id: "hobby14", english: "In my free time...", spanish: "En mi tiempo libre...", difficulty: "hard", example: "En mi tiempo libre me gusta pintar", exampleTranslation: "In my free time I like to paint" },
      { id: "hobby15", english: "I'm interested in...", spanish: "Me interesa...", difficulty: "hard", example: "Me interesa aprender nuevas cosas", exampleTranslation: "I'm interested in learning new things" }
    ]
  },

  personality_character: {
    name: "Personality & Character",
    description: "Describing personality traits and character",
    icon: SmilePlus,
    color: "from-yellow-400 to-orange-500",
    level: "advanced",
    words: [
      { id: "pers1", english: "Kind", spanish: "Amable", difficulty: "easy", example: "Mi profesor es muy amable", exampleTranslation: "My teacher is very kind" },
      { id: "pers2", english: "Funny", spanish: "Gracioso", difficulty: "easy", example: "Mi hermano es muy gracioso", exampleTranslation: "My brother is very funny" },
      { id: "pers3", english: "Smart", spanish: "Inteligente", difficulty: "easy", example: "Ella es muy inteligente", exampleTranslation: "She is very smart" },
      { id: "pers4", english: "Friendly", spanish: "Amistoso", difficulty: "easy", example: "Todos son muy amistosos aquí", exampleTranslation: "Everyone is very friendly here" },
      { id: "pers5", english: "Shy", spanish: "Tímido", difficulty: "easy", example: "Soy un poco tímido", exampleTranslation: "I'm a bit shy" },
      { id: "pers6", english: "Patient", spanish: "Paciente", difficulty: "easy", example: "Necesito ser más paciente", exampleTranslation: "I need to be more patient" },
      { id: "pers7", english: "Generous", spanish: "Generoso", difficulty: "medium", example: "Es una persona muy generosa", exampleTranslation: "He's a very generous person" },
      { id: "pers8", english: "Honest", spanish: "Honesto", difficulty: "medium", example: "Prefiero ser honesto", exampleTranslation: "I prefer to be honest" },
      { id: "pers9", english: "Creative", spanish: "Creativo", difficulty: "medium", example: "Mi amiga es muy creativa", exampleTranslation: "My friend is very creative" },
      { id: "pers10", english: "Hardworking", spanish: "Trabajador", difficulty: "medium", example: "Soy una persona trabajadora", exampleTranslation: "I'm a hardworking person" },
      { id: "pers11", english: "Lazy", spanish: "Perezoso", difficulty: "medium", example: "A veces soy perezoso", exampleTranslation: "Sometimes I'm lazy" },
      { id: "pers12", english: "Responsible", spanish: "Responsable", difficulty: "medium", example: "Es muy responsable con su trabajo", exampleTranslation: "He's very responsible with his work" },
      { id: "pers13", english: "What is he/she like?", spanish: "¿Cómo es él/ella?", difficulty: "hard", example: "¿Cómo es tu nuevo jefe? Es muy amable", exampleTranslation: "What is your new boss like? He's very kind" },
      { id: "pers14", english: "He/She has a good personality", spanish: "Tiene buena personalidad", difficulty: "hard", example: "Mi compañera tiene muy buena personalidad", exampleTranslation: "My colleague has a very good personality" },
      { id: "pers15", english: "I'm a...person", spanish: "Soy una persona...", difficulty: "hard", example: "Soy una persona optimista", exampleTranslation: "I'm an optimistic person" }
    ]
  },

  occupations_careers: {
    name: "Occupations & Careers",
    description: "Jobs and professional vocabulary",
    icon: GraduationCap,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { id: "job1", english: "Doctor", spanish: "Médico", difficulty: "easy", example: "Mi hermana es médico", exampleTranslation: "My sister is a doctor" },
      { id: "job2", english: "Nurse", spanish: "Enfermera", difficulty: "easy", example: "Trabajo como enfermera", exampleTranslation: "I work as a nurse" },
      { id: "job3", english: "Engineer", spanish: "Ingeniero", difficulty: "easy", example: "Soy ingeniero de software", exampleTranslation: "I'm a software engineer" },
      { id: "job4", english: "Lawyer", spanish: "Abogado", difficulty: "easy", example: "Mi padre es abogado", exampleTranslation: "My father is a lawyer" },
      { id: "job5", english: "Architect", spanish: "Arquitecto", difficulty: "easy", example: "Estudio para ser arquitecto", exampleTranslation: "I'm studying to be an architect" },
      { id: "job6", english: "Chef", spanish: "Chef", difficulty: "easy", example: "El chef prepara comida deliciosa", exampleTranslation: "The chef prepares delicious food" },
      { id: "job7", english: "Accountant", spanish: "Contador", difficulty: "medium", example: "Necesito un contador", exampleTranslation: "I need an accountant" },
      { id: "job8", english: "Designer", spanish: "Diseñador", difficulty: "medium", example: "Trabajo como diseñador gráfico", exampleTranslation: "I work as a graphic designer" },
      { id: "job9", english: "Journalist", spanish: "Periodista", difficulty: "medium", example: "Mi amiga es periodista", exampleTranslation: "My friend is a journalist" },
      { id: "job10", english: "Programmer", spanish: "Programador", difficulty: "medium", example: "Busco trabajo como programador", exampleTranslation: "I'm looking for work as a programmer" },
      { id: "job11", english: "Manager", spanish: "Gerente", difficulty: "medium", example: "Soy gerente de ventas", exampleTranslation: "I'm a sales manager" },
      { id: "job12", english: "Entrepreneur", spanish: "Empresario", difficulty: "medium", example: "Quiero ser empresario", exampleTranslation: "I want to be an entrepreneur" },
      { id: "job13", english: "What's your profession?", spanish: "¿Cuál es tu profesión?", difficulty: "hard", example: "¿Cuál es tu profesión? Soy médico", exampleTranslation: "What's your profession? I'm a doctor" },
      { id: "job14", english: "I work in...", spanish: "Trabajo en...", difficulty: "hard", example: "Trabajo en el sector de tecnología", exampleTranslation: "I work in the technology sector" },
      { id: "job15", english: "I'm looking for a job in...", spanish: "Busco trabajo en...", difficulty: "hard", example: "Busco trabajo en marketing", exampleTranslation: "I'm looking for a job in marketing" }
    ]
  },

  directions_locations: {
    name: "Directions & Locations",
    description: "Finding your way and describing locations",
    icon: MapPin,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    words: [
      { id: "dir1", english: "Left", spanish: "Izquierda", difficulty: "easy", example: "Gira a la izquierda", exampleTranslation: "Turn left" },
      { id: "dir2", english: "Right", spanish: "Derecha", difficulty: "easy", example: "Está a la derecha", exampleTranslation: "It's on the right" },
      { id: "dir3", english: "Straight", spanish: "Recto", difficulty: "easy", example: "Sigue recto", exampleTranslation: "Go straight" },
      { id: "dir4", english: "Near", spanish: "Cerca", difficulty: "easy", example: "Está muy cerca", exampleTranslation: "It's very near" },
      { id: "dir5", english: "Far", spanish: "Lejos", difficulty: "easy", example: "Está muy lejos de aquí", exampleTranslation: "It's very far from here" },
      { id: "dir6", english: "Next to", spanish: "Al lado de", difficulty: "easy", example: "Está al lado del banco", exampleTranslation: "It's next to the bank" },
      { id: "dir7", english: "In front of", spanish: "Delante de", difficulty: "medium", example: "El coche está delante de la casa", exampleTranslation: "The car is in front of the house" },
      { id: "dir8", english: "Behind", spanish: "Detrás de", difficulty: "medium", example: "El jardín está detrás", exampleTranslation: "The garden is behind" },
      { id: "dir9", english: "Between", spanish: "Entre", difficulty: "medium", example: "Está entre el banco y la tienda", exampleTranslation: "It's between the bank and the store" },
      { id: "dir10", english: "Corner", spanish: "Esquina", difficulty: "medium", example: "Dobla en la esquina", exampleTranslation: "Turn at the corner" },
      { id: "dir11", english: "Block", spanish: "Cuadra", difficulty: "medium", example: "Está a dos cuadras", exampleTranslation: "It's two blocks away" },
      { id: "dir12", english: "Street", spanish: "Calle", difficulty: "medium", example: "Vivo en esta calle", exampleTranslation: "I live on this street" },
      { id: "dir13", english: "How do I get to...?", spanish: "¿Cómo llego a...?", difficulty: "hard", example: "¿Cómo llego al museo?", exampleTranslation: "How do I get to the museum?" },
      { id: "dir14", english: "Can you show me on the map?", spanish: "¿Me lo puedes mostrar en el mapa?", difficulty: "hard", example: "¿Me lo puedes mostrar en el mapa, por favor?", exampleTranslation: "Can you show me on the map, please?" },
      { id: "dir15", english: "I'm lost", spanish: "Estoy perdido", difficulty: "hard", example: "Estoy perdido, ¿me puedes ayudar?", exampleTranslation: "I'm lost, can you help me?" }
    ]
  },

  restaurant_dining: {
    name: "Restaurant & Dining",
    description: "Ordering food and dining out vocabulary",
    icon: UtensilsCrossed,
    color: "from-red-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "rest1", english: "Menu", spanish: "Menú", difficulty: "easy", example: "¿Me trae el menú, por favor?", exampleTranslation: "Can you bring me the menu, please?" },
      { id: "rest2", english: "Waiter", spanish: "Mesero", difficulty: "easy", example: "El mesero es muy atento", exampleTranslation: "The waiter is very attentive" },
      { id: "rest3", english: "Order", spanish: "Pedir", difficulty: "easy", example: "Quiero pedir la sopa", exampleTranslation: "I want to order the soup" },
      { id: "rest4", english: "Bill", spanish: "Cuenta", difficulty: "easy", example: "La cuenta, por favor", exampleTranslation: "The bill, please" },
      { id: "rest5", english: "Tip", spanish: "Propina", difficulty: "easy", example: "Dejé una buena propina", exampleTranslation: "I left a good tip" },
      { id: "rest6", english: "Delicious", spanish: "Delicioso", difficulty: "easy", example: "La comida está deliciosa", exampleTranslation: "The food is delicious" },
      { id: "rest7", english: "Reservation", spanish: "Reserva", difficulty: "medium", example: "Tengo una reserva a las ocho", exampleTranslation: "I have a reservation at eight" },
      { id: "rest8", english: "Table", spanish: "Mesa", difficulty: "medium", example: "Necesitamos una mesa para cuatro", exampleTranslation: "We need a table for four" },
      { id: "rest9", english: "Dessert", spanish: "Postre", difficulty: "medium", example: "¿Qué tienen de postre?", exampleTranslation: "What do you have for dessert?" },
      { id: "rest10", english: "Drink", spanish: "Bebida", difficulty: "medium", example: "¿Qué quieres de bebida?", exampleTranslation: "What do you want to drink?" },
      { id: "rest11", english: "Appetizer", spanish: "Entrada", difficulty: "medium", example: "Vamos a pedir una entrada", exampleTranslation: "We're going to order an appetizer" },
      { id: "rest12", english: "Main course", spanish: "Plato principal", difficulty: "medium", example: "El plato principal está muy bueno", exampleTranslation: "The main course is very good" },
      { id: "rest13", english: "I'd like to order...", spanish: "Quisiera pedir...", difficulty: "hard", example: "Quisiera pedir el pescado, por favor", exampleTranslation: "I'd like to order the fish, please" },
      { id: "rest14", english: "Do you have...?", spanish: "¿Tienen...?", difficulty: "hard", example: "¿Tienen opciones vegetarianas?", exampleTranslation: "Do you have vegetarian options?" },
      { id: "rest15", english: "Can I have the check?", spanish: "¿Me trae la cuenta?", difficulty: "hard", example: "¿Me trae la cuenta, por favor?", exampleTranslation: "Can I have the check, please?" }
    ]
  },

  house_furniture: {
    name: "House & Furniture",
    description: "Household items and furniture vocabulary",
    icon: Sofa,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    words: [
      { id: "house1", english: "Table", spanish: "Mesa", difficulty: "easy", example: "La mesa es de madera", exampleTranslation: "The table is made of wood" },
      { id: "house2", english: "Chair", spanish: "Silla", difficulty: "easy", example: "Necesito una silla cómoda", exampleTranslation: "I need a comfortable chair" },
      { id: "house3", english: "Bed", spanish: "Cama", difficulty: "easy", example: "Mi cama es muy grande", exampleTranslation: "My bed is very big" },
      { id: "house4", english: "Sofa", spanish: "Sofá", difficulty: "easy", example: "El sofá es muy cómodo", exampleTranslation: "The sofa is very comfortable" },
      { id: "house5", english: "Door", spanish: "Puerta", difficulty: "easy", example: "Cierra la puerta, por favor", exampleTranslation: "Close the door, please" },
      { id: "house6", english: "Window", spanish: "Ventana", difficulty: "easy", example: "Abre la ventana", exampleTranslation: "Open the window" },
      { id: "house7", english: "Lamp", spanish: "Lámpara", difficulty: "medium", example: "La lámpara no funciona", exampleTranslation: "The lamp doesn't work" },
      { id: "house8", english: "Closet", spanish: "Armario", difficulty: "medium", example: "Mi ropa está en el armario", exampleTranslation: "My clothes are in the closet" },
      { id: "house9", english: "Desk", spanish: "Escritorio", difficulty: "medium", example: "Trabajo en mi escritorio", exampleTranslation: "I work at my desk" },
      { id: "house10", english: "Shelf", spanish: "Estante", difficulty: "medium", example: "Los libros están en el estante", exampleTranslation: "The books are on the shelf" },
      { id: "house11", english: "Mirror", spanish: "Espejo", difficulty: "medium", example: "Me miro en el espejo", exampleTranslation: "I look at myself in the mirror" },
      { id: "house12", english: "Curtain", spanish: "Cortina", difficulty: "medium", example: "Las cortinas son nuevas", exampleTranslation: "The curtains are new" },
      { id: "house13", english: "Where do you put...?", spanish: "¿Dónde pones...?", difficulty: "hard", example: "¿Dónde pones los libros?", exampleTranslation: "Where do you put the books?" },
      { id: "house14", english: "I need to buy...", spanish: "Necesito comprar...", difficulty: "hard", example: "Necesito comprar muebles nuevos", exampleTranslation: "I need to buy new furniture" },
      { id: "house15", english: "It's in the...", spanish: "Está en el/la...", difficulty: "hard", example: "Está en el armario del dormitorio", exampleTranslation: "It's in the bedroom closet" }
    ]
  },

  animals_pets: {
    name: "Animals & Pets",
    description: "Common animals and pet vocabulary",
    icon: Dog,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "animal1", english: "Dog", spanish: "Perro", difficulty: "easy", example: "Mi perro se llama Max", exampleTranslation: "My dog is called Max" },
      { id: "animal2", english: "Cat", spanish: "Gato", difficulty: "easy", example: "Tengo dos gatos", exampleTranslation: "I have two cats" },
      { id: "animal3", english: "Bird", spanish: "Pájaro", difficulty: "easy", example: "Los pájaros cantan por la mañana", exampleTranslation: "Birds sing in the morning" },
      { id: "animal4", english: "Fish", spanish: "Pez", difficulty: "easy", example: "Tengo peces en el acuario", exampleTranslation: "I have fish in the aquarium" },
      { id: "animal5", english: "Horse", spanish: "Caballo", difficulty: "easy", example: "Me gusta montar a caballo", exampleTranslation: "I like to ride horses" },
      { id: "animal6", english: "Cow", spanish: "Vaca", difficulty: "easy", example: "Las vacas dan leche", exampleTranslation: "Cows give milk" },
      { id: "animal7", english: "Chicken", spanish: "Pollo", difficulty: "medium", example: "Los pollos ponen huevos", exampleTranslation: "Chickens lay eggs" },
      { id: "animal8", english: "Pig", spanish: "Cerdo", difficulty: "medium", example: "Los cerdos viven en la granja", exampleTranslation: "Pigs live on the farm" },
      { id: "animal9", english: "Rabbit", spanish: "Conejo", difficulty: "medium", example: "Mi conejo es muy suave", exampleTranslation: "My rabbit is very soft" },
      { id: "animal10", english: "Lion", spanish: "León", difficulty: "medium", example: "El león es el rey de la selva", exampleTranslation: "The lion is the king of the jungle" },
      { id: "animal11", english: "Elephant", spanish: "Elefante", difficulty: "medium", example: "Los elefantes son muy grandes", exampleTranslation: "Elephants are very big" },
      { id: "animal12", english: "Monkey", spanish: "Mono", difficulty: "medium", example: "Los monos son muy inteligentes", exampleTranslation: "Monkeys are very intelligent" },
      { id: "animal13", english: "Do you have pets?", spanish: "¿Tienes mascotas?", difficulty: "hard", example: "¿Tienes mascotas? Sí, tengo un perro", exampleTranslation: "Do you have pets? Yes, I have a dog" },
      { id: "animal14", english: "What's your favorite animal?", spanish: "¿Cuál es tu animal favorito?", difficulty: "hard", example: "¿Cuál es tu animal favorito? Me gustan los gatos", exampleTranslation: "What's your favorite animal? I like cats" },
      { id: "animal15", english: "I love animals", spanish: "Me encantan los animales", difficulty: "hard", example: "Me encantan los animales, tengo tres mascotas", exampleTranslation: "I love animals, I have three pets" }
    ]
  },

  seasons_holidays: {
    name: "Seasons & Holidays",
    description: "Seasons, holidays, and celebrations",
    icon: Sun,
    color: "from-yellow-400 to-amber-500",
    level: "intermediate",
    words: [
      { id: "season1", english: "Spring", spanish: "Primavera", difficulty: "easy", example: "La primavera es mi estación favorita", exampleTranslation: "Spring is my favorite season" },
      { id: "season2", english: "Summer", spanish: "Verano", difficulty: "easy", example: "Hace calor en verano", exampleTranslation: "It's hot in summer" },
      { id: "season3", english: "Fall", spanish: "Otoño", difficulty: "easy", example: "Las hojas caen en otoño", exampleTranslation: "Leaves fall in autumn" },
      { id: "season4", english: "Winter", spanish: "Invierno", difficulty: "easy", example: "Nieva en invierno", exampleTranslation: "It snows in winter" },
      { id: "season5", english: "Christmas", spanish: "Navidad", difficulty: "easy", example: "La Navidad es en diciembre", exampleTranslation: "Christmas is in December" },
      { id: "season6", english: "Birthday", spanish: "Cumpleaños", difficulty: "easy", example: "Mi cumpleaños es en julio", exampleTranslation: "My birthday is in July" },
      { id: "season7", english: "New Year", spanish: "Año Nuevo", difficulty: "medium", example: "Celebramos el Año Nuevo con fuegos artificiales", exampleTranslation: "We celebrate New Year with fireworks" },
      { id: "season8", english: "Easter", spanish: "Pascua", difficulty: "medium", example: "La Pascua es en primavera", exampleTranslation: "Easter is in spring" },
      { id: "season9", english: "Holiday", spanish: "Día festivo", difficulty: "medium", example: "Hoy es día festivo", exampleTranslation: "Today is a holiday" },
      { id: "season10", english: "Vacation", spanish: "Vacaciones", difficulty: "medium", example: "Voy de vacaciones en agosto", exampleTranslation: "I go on vacation in August" },
      { id: "season11", english: "Party", spanish: "Fiesta", difficulty: "medium", example: "Hay una fiesta de cumpleaños", exampleTranslation: "There's a birthday party" },
      { id: "season12", english: "Gift", spanish: "Regalo", difficulty: "medium", example: "Compré un regalo para mi madre", exampleTranslation: "I bought a gift for my mother" },
      { id: "season13", english: "Happy birthday!", spanish: "¡Feliz cumpleaños!", difficulty: "hard", example: "¡Feliz cumpleaños! Espero que pases un gran día", exampleTranslation: "Happy birthday! I hope you have a great day" },
      { id: "season14", english: "Merry Christmas!", spanish: "¡Feliz Navidad!", difficulty: "hard", example: "¡Feliz Navidad y próspero Año Nuevo!", exampleTranslation: "Merry Christmas and Happy New Year!" },
      { id: "season15", english: "What are you doing for...?", spanish: "¿Qué vas a hacer en...?", difficulty: "hard", example: "¿Qué vas a hacer en Navidad?", exampleTranslation: "What are you doing for Christmas?" }
    ]
  },

  banking_finance: {
    name: "Banking & Finance",
    description: "Banking and financial terminology",
    icon: Landmark,
    color: "from-emerald-500 to-green-600",
    level: "advanced",
    words: [
      { id: "bank1", english: "Bank", spanish: "Banco", difficulty: "easy", example: "Voy al banco a depositar dinero", exampleTranslation: "I'm going to the bank to deposit money" },
      { id: "bank2", english: "Account", spanish: "Cuenta", difficulty: "easy", example: "Necesito abrir una cuenta", exampleTranslation: "I need to open an account" },
      { id: "bank3", english: "ATM", spanish: "Cajero automático", difficulty: "easy", example: "Voy a sacar dinero del cajero automático", exampleTranslation: "I'm going to withdraw money from the ATM" },
      { id: "bank4", english: "Save", spanish: "Ahorrar", difficulty: "easy", example: "Quiero ahorrar dinero", exampleTranslation: "I want to save money" },
      { id: "bank5", english: "Spend", spanish: "Gastar", difficulty: "easy", example: "No quiero gastar mucho dinero", exampleTranslation: "I don't want to spend much money" },
      { id: "bank6", english: "Loan", spanish: "Préstamo", difficulty: "easy", example: "Necesito un préstamo del banco", exampleTranslation: "I need a loan from the bank" },
      { id: "bank7", english: "Deposit", spanish: "Depósito", difficulty: "medium", example: "Hice un depósito esta mañana", exampleTranslation: "I made a deposit this morning" },
      { id: "bank8", english: "Withdraw", spanish: "Retirar", difficulty: "medium", example: "Necesito retirar efectivo", exampleTranslation: "I need to withdraw cash" },
      { id: "bank9", english: "Transfer", spanish: "Transferencia", difficulty: "medium", example: "Hice una transferencia bancaria", exampleTranslation: "I made a bank transfer" },
      { id: "bank10", english: "Balance", spanish: "Saldo", difficulty: "medium", example: "¿Cuál es mi saldo?", exampleTranslation: "What's my balance?" },
      { id: "bank11", english: "Interest", spanish: "Interés", difficulty: "medium", example: "La cuenta tiene buen interés", exampleTranslation: "The account has good interest" },
      { id: "bank12", english: "Investment", spanish: "Inversión", difficulty: "medium", example: "Quiero hacer una inversión", exampleTranslation: "I want to make an investment" },
      { id: "bank13", english: "I need to...", spanish: "Necesito...", difficulty: "hard", example: "Necesito cambiar dinero", exampleTranslation: "I need to exchange money" },
      { id: "bank14", english: "How much is the fee?", spanish: "¿Cuánto es la comisión?", difficulty: "hard", example: "¿Cuánto es la comisión por transferencia?", exampleTranslation: "How much is the transfer fee?" },
      { id: "bank15", english: "Can I open an account?", spanish: "¿Puedo abrir una cuenta?", difficulty: "hard", example: "¿Puedo abrir una cuenta de ahorros?", exampleTranslation: "Can I open a savings account?" }
    ]
  },

  medical_pharmacy: {
    name: "Medical & Pharmacy",
    description: "Medical and pharmacy vocabulary",
    icon: Stethoscope,
    color: "from-red-500 to-pink-500",
    level: "advanced",
    words: [
      { id: "med1", english: "Medicine", spanish: "Medicina", difficulty: "easy", example: "Necesito tomar mi medicina", exampleTranslation: "I need to take my medicine" },
      { id: "med2", english: "Pharmacy", spanish: "Farmacia", difficulty: "easy", example: "Voy a la farmacia", exampleTranslation: "I'm going to the pharmacy" },
      { id: "med3", english: "Pill", spanish: "Pastilla", difficulty: "easy", example: "Tomo dos pastillas al día", exampleTranslation: "I take two pills a day" },
      { id: "med4", english: "Prescription", spanish: "Receta", difficulty: "easy", example: "Necesito una receta médica", exampleTranslation: "I need a medical prescription" },
      { id: "med5", english: "Fever", spanish: "Fiebre", difficulty: "easy", example: "Tengo fiebre", exampleTranslation: "I have a fever" },
      { id: "med6", english: "Cough", spanish: "Tos", difficulty: "easy", example: "Tengo tos desde ayer", exampleTranslation: "I've had a cough since yesterday" },
      { id: "med7", english: "Cold", spanish: "Resfriado", difficulty: "medium", example: "Tengo un resfriado", exampleTranslation: "I have a cold" },
      { id: "med8", english: "Flu", spanish: "Gripe", difficulty: "medium", example: "Creo que tengo gripe", exampleTranslation: "I think I have the flu" },
      { id: "med9", english: "Allergy", spanish: "Alergia", difficulty: "medium", example: "Tengo alergia al polen", exampleTranslation: "I have an allergy to pollen" },
      { id: "med10", english: "Injection", spanish: "Inyección", difficulty: "medium", example: "Necesito una inyección", exampleTranslation: "I need an injection" },
      { id: "med11", english: "Appointment", spanish: "Cita", difficulty: "medium", example: "Tengo una cita con el médico", exampleTranslation: "I have an appointment with the doctor" },
      { id: "med12", english: "Symptom", spanish: "Síntoma", difficulty: "medium", example: "¿Cuáles son los síntomas?", exampleTranslation: "What are the symptoms?" },
      { id: "med13", english: "I don't feel well", spanish: "No me siento bien", difficulty: "hard", example: "No me siento bien, necesito ver al médico", exampleTranslation: "I don't feel well, I need to see the doctor" },
      { id: "med14", english: "Do you have something for...?", spanish: "¿Tiene algo para...?", difficulty: "hard", example: "¿Tiene algo para el dolor de cabeza?", exampleTranslation: "Do you have something for headache?" },
      { id: "med15", english: "I'm allergic to...", spanish: "Soy alérgico a...", difficulty: "hard", example: "Soy alérgico a la penicilina", exampleTranslation: "I'm allergic to penicillin" }
    ]
  },

  phone_communication: {
    name: "Phone & Communication",
    description: "Phone calls and communication phrases",
    icon: Phone,
    color: "from-blue-500 to-cyan-500",
    level: "advanced",
    words: [
      { id: "phone1", english: "Call", spanish: "Llamar", difficulty: "easy", example: "Voy a llamar a mi madre", exampleTranslation: "I'm going to call my mother" },
      { id: "phone2", english: "Answer", spanish: "Contestar", difficulty: "easy", example: "No contesta el teléfono", exampleTranslation: "He doesn't answer the phone" },
      { id: "phone3", english: "Hang up", spanish: "Colgar", difficulty: "easy", example: "Voy a colgar ahora", exampleTranslation: "I'm going to hang up now" },
      { id: "phone4", english: "Busy", spanish: "Ocupado", difficulty: "easy", example: "La línea está ocupada", exampleTranslation: "The line is busy" },
      { id: "phone5", english: "Leave a message", spanish: "Dejar un mensaje", difficulty: "easy", example: "Puedes dejar un mensaje", exampleTranslation: "You can leave a message" },
      { id: "phone6", english: "Wrong number", spanish: "Número equivocado", difficulty: "easy", example: "Lo siento, número equivocado", exampleTranslation: "Sorry, wrong number" },
      { id: "phone7", english: "Reception", spanish: "Recepción", difficulty: "medium", example: "No hay buena recepción aquí", exampleTranslation: "There's no good reception here" },
      { id: "phone8", english: "Voicemail", spanish: "Buzón de voz", difficulty: "medium", example: "Dejé un mensaje en el buzón de voz", exampleTranslation: "I left a message in the voicemail" },
      { id: "phone9", english: "Text message", spanish: "Mensaje de texto", difficulty: "medium", example: "Te envié un mensaje de texto", exampleTranslation: "I sent you a text message" },
      { id: "phone10", english: "Contact", spanish: "Contacto", difficulty: "medium", example: "Guardo tu contacto", exampleTranslation: "I'll save your contact" },
      { id: "phone11", english: "Charger", spanish: "Cargador", difficulty: "medium", example: "Necesito un cargador de teléfono", exampleTranslation: "I need a phone charger" },
      { id: "phone12", english: "Signal", spanish: "Señal", difficulty: "medium", example: "No tengo señal", exampleTranslation: "I don't have signal" },
      { id: "phone13", english: "Hello, may I speak to...?", spanish: "Hola, ¿puedo hablar con...?", difficulty: "hard", example: "Hola, ¿puedo hablar con Juan?", exampleTranslation: "Hello, may I speak to Juan?" },
      { id: "phone14", english: "Can you call me back?", spanish: "¿Me puedes devolver la llamada?", difficulty: "hard", example: "¿Me puedes devolver la llamada más tarde?", exampleTranslation: "Can you call me back later?" },
      { id: "phone15", english: "The line is breaking up", spanish: "Se corta la línea", difficulty: "hard", example: "Se corta la línea, te llamo luego", exampleTranslation: "The line is breaking up, I'll call you later" }
    ]
  },

  emergency_situations: {
    name: "Emergency Situations",
    description: "Emergency and urgent situation vocabulary",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { id: "emerg1", english: "Help", spanish: "Ayuda", difficulty: "easy", example: "¡Ayuda! Necesito ayuda", exampleTranslation: "Help! I need help" },
      { id: "emerg2", english: "Emergency", spanish: "Emergencia", difficulty: "easy", example: "Es una emergencia", exampleTranslation: "It's an emergency" },
      { id: "emerg3", english: "Police", spanish: "Policía", difficulty: "easy", example: "Llama a la policía", exampleTranslation: "Call the police" },
      { id: "emerg4", english: "Ambulance", spanish: "Ambulancia", difficulty: "easy", example: "Necesitamos una ambulancia", exampleTranslation: "We need an ambulance" },
      { id: "emerg5", english: "Fire", spanish: "Fuego", difficulty: "easy", example: "¡Fuego! Hay un incendio", exampleTranslation: "Fire! There's a fire" },
      { id: "emerg6", english: "Danger", spanish: "Peligro", difficulty: "easy", example: "¡Peligro! No entres", exampleTranslation: "Danger! Don't enter" },
      { id: "emerg7", english: "Accident", spanish: "Accidente", difficulty: "medium", example: "Hubo un accidente", exampleTranslation: "There was an accident" },
      { id: "emerg8", english: "Injured", spanish: "Herido", difficulty: "medium", example: "Hay una persona herida", exampleTranslation: "There's an injured person" },
      { id: "emerg9", english: "Hospital", spanish: "Hospital", difficulty: "medium", example: "¿Dónde está el hospital más cercano?", exampleTranslation: "Where's the nearest hospital?" },
      { id: "emerg10", english: "Lost", spanish: "Perdido", difficulty: "medium", example: "Estoy perdido y necesito ayuda", exampleTranslation: "I'm lost and need help" },
      { id: "emerg11", english: "Stolen", spanish: "Robado", difficulty: "medium", example: "Me robaron la cartera", exampleTranslation: "My wallet was stolen" },
      { id: "emerg12", english: "Embassy", spanish: "Embajada", difficulty: "medium", example: "Necesito ir a la embajada", exampleTranslation: "I need to go to the embassy" },
      { id: "emerg13", english: "Call for help!", spanish: "¡Llama para pedir ayuda!", difficulty: "hard", example: "¡Llama para pedir ayuda inmediatamente!", exampleTranslation: "Call for help immediately!" },
      { id: "emerg14", english: "I need to report...", spanish: "Necesito denunciar...", difficulty: "hard", example: "Necesito denunciar un robo", exampleTranslation: "I need to report a theft" },
      { id: "emerg15", english: "Where's the nearest...?", spanish: "¿Dónde está el/la más cercano/a...?", difficulty: "hard", example: "¿Dónde está el hospital más cercano?", exampleTranslation: "Where's the nearest hospital?" }
    ]
  }
};
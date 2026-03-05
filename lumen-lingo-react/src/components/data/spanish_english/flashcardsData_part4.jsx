
/**
 * SPANISH → ENGLISH FLASHCARDS - PART 4
 * NEW EXPANSION CATEGORIES (25-34)
 * 
 * Native Language: Spanish (Español)
 * Target Language: English
 * 
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Users,
  Clock,
  Coins,
  Music2,
  Camera,
  Dog,
  Wrench,
  Phone,
  Smile,
  Building,
  ShoppingCart,
  MapPin
} from "lucide-react";

export const flashcardsCategories_part4 = {
  body_parts: {
    name: "Partes del cuerpo",
    description: "Anatomía y partes del cuerpo humano",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "body1", spanish: "Cabeza", english: "Head", difficulty: "easy", example: "My head hurts after working on the computer for many hours today.", exampleTranslation: "Me duele la cabeza después de trabajar en la computadora por muchas horas hoy." },
      { id: "body2", spanish: "Ojo", english: "Eye", difficulty: "easy", example: "I have blue eyes like my mother and my grandfather too.", exampleTranslation: "Tengo ojos azules como mi madre y mi abuelo también." },
      { id: "body3", spanish: "Nariz", english: "Nose", difficulty: "easy", example: "My nose is stuffy because I have a cold since yesterday morning.", exampleTranslation: "Mi nariz está tapada porque tengo un resfriado desde ayer por la mañana." },
      { id: "body4", spanish: "Boca", english: "Mouth", difficulty: "easy", example: "Open your mouth wide so the dentist can examine your teeth properly.", exampleTranslation: "Abre la boca bien para que el dentista pueda examinar tus dientes apropiadamente." },
      { id: "body5", spanish: "Oreja", english: "Ear", difficulty: "easy", example: "My right ear hurts, I should go see the doctor soon today.", exampleTranslation: "Me duele la oreja derecha, debería ir a ver al doctor pronto hoy." },
      { id: "body6", spanish: "Mano", english: "Hand", difficulty: "easy", example: "Wash your hands thoroughly with soap before eating anything always carefully.", exampleTranslation: "Lávate las manos completamente con jabón antes de comer algo siempre cuidadosamente." },
      { id: "body7", spanish: "Pierna", english: "Leg", difficulty: "medium", example: "My leg hurts from running too much in the park yesterday afternoon.", exampleTranslation: "Me duele la pierna de correr demasiado en el parque ayer por la tarde." },
      { id: "body8", spanish: "Dedo", english: "Finger", difficulty: "medium", example: "I cut my finger while cooking dinner in the kitchen this evening accidentally.", exampleTranslation: "Me corté el dedo mientras cocinaba la cena en la cocina esta tarde accidentalmente." },
      { id: "body9", spanish: "Rodilla", english: "Knee", difficulty: "medium", example: "My knee hurts when I climb stairs after the accident last month unfortunately.", exampleTranslation: "Me duele la rodilla cuando subo escaleras después del accidente el mes pasado desafortunadamente." },
      { id: "body10", spanish: "Hombro", english: "Shoulder", difficulty: "medium", example: "My shoulder is sore from carrying heavy shopping bags all day long.", exampleTranslation: "Me duele el hombro de cargar bolsas pesadas de compras todo el día largo." },
      { id: "body11", spanish: "Espalda", english: "Back", difficulty: "medium", example: "My back hurts from sitting at the desk for too many hours daily.", exampleTranslation: "Me duele la espalda de estar sentado en el escritorio por demasiadas horas diariamente." },
      { id: "body12", spanish: "Estómago", english: "Stomach", difficulty: "medium", example: "My stomach hurts, I think I ate something bad at lunch today.", exampleTranslation: "Me duele el estómago, creo que comí algo malo en el almuerzo hoy." },
      { id: "body13", spanish: "Me duele la cabeza", english: "My head hurts", difficulty: "hard", example: "My head hurts terribly! Do you have any pain medication I could take right now?", exampleTranslation: "¡Me duele terriblemente la cabeza! ¿Tienes algún medicamento para el dolor que pueda tomar ahora mismo?" },
      { id: "body14", spanish: "Me torcí el tobillo", english: "I sprained my ankle", difficulty: "hard", example: "I sprained my ankle while jogging this morning! It hurts so much I can barely walk!", exampleTranslation: "¡Me torcí el tobillo mientras trotaba esta mañana! ¡Me duele tanto que apenas puedo caminar!" },
      { id: "body15", spanish: "Me duele todo", english: "Everything hurts", difficulty: "hard", example: "Everything hurts after that intense workout yesterday at the gym! I need rest now!", exampleTranslation: "¡Me duele todo después de ese entrenamiento intenso ayer en el gimnasio! ¡Necesito descanso ahora!" }
    ]
  },

  daily_routine: {
    name: "Rutina diaria",
    description: "Actividades cotidianas que hacemos cada día",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "rout1", spanish: "Despertarse", english: "Wake up", difficulty: "easy", example: "I wake up every morning at six o'clock and get out of bed immediately.", exampleTranslation: "Me despierto cada mañana a las seis en punto y me levanto de la cama inmediatamente." },
      { id: "rout2", spanish: "Levantarse", english: "Get up", difficulty: "easy", example: "I get up at seven o'clock and make breakfast for my family.", exampleTranslation: "Me levanto a las siete en punto y hago el desayuno para mi familia." },
      { id: "rout3", spanish: "Lavarse", english: "Wash", difficulty: "easy", example: "I wash my face and hands with warm water and soap every morning.", exampleTranslation: "Me lavo la cara y las manos con agua tibia y jabón cada mañana." },
      { id: "rout4", spanish: "Vestirse", english: "Get dressed", difficulty: "easy", example: "I get dressed quickly and then go to work by bus downtown.", exampleTranslation: "Me visto rápidamente y luego voy al trabajo en autobús al centro." },
      { id: "rout5", spanish: "Peinarse", english: "Comb hair", difficulty: "easy", example: "I comb my hair in front of the mirror every morning carefully neatly.", exampleTranslation: "Me peino frente al espejo cada mañana cuidadosamente prolijamente." },
      { id: "rout6", spanish: "Cepillarse los dientes", english: "Brush teeth", difficulty: "easy", example: "I brush my teeth three times a day after every meal thoroughly.", exampleTranslation: "Me cepillo los dientes tres veces al día después de cada comida completamente." },
      { id: "rout7", spanish: "Afeitarse", english: "Shave", difficulty: "medium", example: "I shave every morning before work with an electric razor quickly efficiently.", exampleTranslation: "Me afeito cada mañana antes del trabajo con una afeitadora eléctrica rápidamente eficientemente." },
      { id: "rout8", spanish: "Ducharse", english: "Shower", difficulty: "medium", example: "I take a refreshing shower every morning with warm water for ten minutes.", exampleTranslation: "Me ducho cada mañana con agua tibia por diez minutos refrescantemente." },
      { id: "rout9", spanish: "Preparar el desayuno", english: "Make breakfast", difficulty: "medium", example: "I make breakfast for the whole family every day early in the morning.", exampleTranslation: "Preparo el desayuno para toda la familia cada día temprano por la mañana." },
      { id: "rout10", spanish: "Limpiar", english: "Clean", difficulty: "medium", example: "I clean the house and do all the chores every Saturday thoroughly completely.", exampleTranslation: "Limpio la casa y hago todas las tareas cada sábado completamente a fondo." },
      { id: "rout11", spanish: "Ir a dormir", english: "Go to sleep", difficulty: "medium", example: "I usually go to sleep at eleven o'clock after watching television tiredly.", exampleTranslation: "Usualmente me voy a dormir a las once en punto después de ver televisión cansadamente." },
      { id: "rout12", spanish: "Volver a casa", english: "Come home", difficulty: "medium", example: "I come home from work every day at six o'clock feeling tired.", exampleTranslation: "Vuelvo a casa del trabajo cada día a las seis en punto sintiéndome cansado." },
      { id: "rout13", spanish: "¿A qué hora te levantas?", english: "What time do you get up?", difficulty: "hard", example: "What time do you usually get up during the week? I get up at six!", exampleTranslation: "¿A qué hora te levantas usualmente durante la semana? ¡Yo me levanto a las seis!" },
      { id: "rout14", spanish: "Me voy a dormir", english: "I'm going to bed", difficulty: "hard", example: "I'm going to bed now because I'm very tired! Good night everyone sweet dreams!", exampleTranslation: "¡Me voy a dormir ahora porque estoy muy cansado! ¡Buenas noches a todos dulces sueños!" },
      { id: "rout15", spanish: "Tengo que darme prisa", english: "I have to hurry", difficulty: "hard", example: "I really have to hurry now! Otherwise I'll be late for work this morning!", exampleTranslation: "¡Realmente tengo que darme prisa ahora! ¡De lo contrario llegaré tarde al trabajo esta mañana!" }
    ]
  },

  personality_character: {
    name: "Personalidad y carácter",
    description: "Rasgos de personalidad y características de las personas",
    icon: Smile,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "pers1", spanish: "Amable", english: "Kind", difficulty: "easy", example: "She is very kind to everyone and always helps people in need.", exampleTranslation: "Ella es muy amable con todos y siempre ayuda a la gente necesitada." },
      { id: "pers2", spanish: "Simpático", english: "Friendly", difficulty: "easy", example: "The shopkeeper was very friendly and helped me find what I needed.", exampleTranslation: "El tendero fue muy simpático y me ayudó a encontrar lo que necesitaba." },
      { id: "pers3", spanish: "Paciente", english: "Patient", difficulty: "easy", example: "You need to be very patient when teaching small children every day.", exampleTranslation: "Necesitas ser muy paciente cuando enseñas a niños pequeños cada día." },
      { id: "pers4", spanish: "Honesto", english: "Honest", difficulty: "easy", example: "He is an honest person and never lies to anyone at all.", exampleTranslation: "Él es una persona honesta y nunca le miente a nadie en absoluto." },
      { id: "pers5", spanish: "Perezoso", english: "Lazy", difficulty: "easy", example: "My brother is sometimes lazy and doesn't do his homework on time.", exampleTranslation: "Mi hermano es a veces perezoso y no hace su tarea a tiempo." },
      { id: "pers6", spanish: "Trabajador", english: "Hard-working", difficulty: "easy", example: "She is very hard-working and puts many hours into her job daily.", exampleTranslation: "Ella es muy trabajadora y dedica muchas horas a su trabajo diariamente." },
      { id: "pers7", spanish: "Modesto", english: "Modest", difficulty: "medium", example: "Despite his success, he remained very modest and never brags about it.", exampleTranslation: "A pesar de su éxito, permaneció muy modesto y nunca se jacta de ello." },
      { id: "pers8", spanish: "Arrogante", english: "Arrogant", difficulty: "medium", example: "His arrogant behavior makes him very unpopular among colleagues at work unfortunately.", exampleTranslation: "Su comportamiento arrogante lo hace muy impopular entre colegas en el trabajo desafortunadamente." },
      { id: "pers9", spanish: "Espontáneo", english: "Spontaneous", difficulty: "medium", example: "She is very spontaneous and rarely plans things in advance for surprises.", exampleTranslation: "Ella es muy espontánea y rara vez planea cosas con anticipación para sorpresas." },
      { id: "pers10", spanish: "Confiable", english: "Reliable", difficulty: "medium", example: "He is very reliable and you can always count on him completely.", exampleTranslation: "Él es muy confiable y siempre puedes contar con él completamente." },
      { id: "pers11", spanish: "Ambicioso", english: "Ambitious", difficulty: "medium", example: "She is very ambitious and wants to go far in her career successfully.", exampleTranslation: "Ella es muy ambiciosa y quiere llegar lejos en su carrera exitosamente." },
      { id: "pers12", spanish: "Optimista", english: "Optimistic", difficulty: "medium", example: "He is always optimistic even in difficult situations staying positive cheerfully happily.", exampleTranslation: "Él es siempre optimista incluso en situaciones difíciles manteniéndose positivo alegremente felizmente." },
      { id: "pers13", spanish: "Es muy educado", english: "He is very polite", difficulty: "hard", example: "He is extremely polite to everyone! Such a pleasant person to be around!", exampleTranslation: "¡Es extremadamente educado con todos! ¡Una persona tan agradable para estar cerca!" },
      { id: "pers14", spanish: "Tiene buen carácter", english: "He has a good character", difficulty: "hard", example: "He really has such a good character! You feel comfortable in his company always!", exampleTranslation: "¡Realmente tiene tan buen carácter! ¡Te sientes cómodo en su compañía siempre!" },
      { id: "pers15", spanish: "Se puede confiar en él", english: "You can trust him", difficulty: "hard", example: "You can absolutely trust him one hundred percent! He never disappoints his friends ever!", exampleTranslation: "¡Absolutamente se puede confiar en él cien por ciento! ¡Nunca decepciona a sus amigos jamás!" }
    ]
  },

  banking_money: {
    name: "Banca y dinero",
    description: "Finanzas personales, transacciones bancarias y dinero",
    icon: Coins,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "bank1", spanish: "Banco", english: "Bank", difficulty: "easy", example: "I go to the bank to withdraw money from my account this morning.", exampleTranslation: "Voy al banco para retirar dinero de mi cuenta esta mañana." },
      { id: "bank2", spanish: "Cuenta", english: "Account", difficulty: "easy", example: "I would like to open a new savings account at this bank please.", exampleTranslation: "Me gustaría abrir una nueva cuenta de ahorros en este banco por favor." },
      { id: "bank3", spanish: "Tarjeta", english: "Card", difficulty: "easy", example: "My bank card is not working anymore, I need a new one urgently.", exampleTranslation: "Mi tarjeta bancaria ya no funciona, necesito una nueva urgentemente." },
      { id: "bank4", spanish: "Dinero", english: "Money", difficulty: "easy", example: "I don't have enough money with me for this purchase right now.", exampleTranslation: "No tengo suficiente dinero conmigo para esta compra ahora mismo." },
      { id: "bank5", spanish: "Depósito", english: "Deposit", difficulty: "easy", example: "I am making a deposit of one thousand dollars into my savings account today.", exampleTranslation: "Estoy haciendo un depósito de mil dólares en mi cuenta de ahorros hoy." },
      { id: "bank6", spanish: "Retiro", english: "Withdrawal", difficulty: "easy", example: "The maximum withdrawal from the ATM is five hundred dollars per day only.", exampleTranslation: "El retiro máximo del cajero automático es quinientos dólares por día solamente." },
      { id: "bank7", spanish: "Transferencia", english: "Transfer", difficulty: "medium", example: "The bank transfer usually takes two to three business days to complete fully.", exampleTranslation: "La transferencia bancaria usualmente tarda de dos a tres días hábiles en completarse totalmente." },
      { id: "bank8", spanish: "Préstamo", english: "Loan", difficulty: "medium", example: "I am applying for a loan at the bank to buy a new house.", exampleTranslation: "Estoy solicitando un préstamo en el banco para comprar una casa nueva." },
      { id: "bank9", spanish: "Interés", english: "Interest", difficulty: "medium", example: "The interest rate on this savings account is very low only one percent annually.", exampleTranslation: "La tasa de interés en esta cuenta de ahorros es muy baja solo un por ciento anualmente." },
      { id: "bank10", spanish: "Saldo", english: "Balance", difficulty: "medium", example: "My current account balance is two thousand dollars after yesterday's deposit transaction.", exampleTranslation: "Mi saldo actual de la cuenta es dos mil dólares después de la transacción de depósito de ayer." },
      { id: "bank11", spanish: "Cajero automático", english: "ATM", difficulty: "medium", example: "The ATM is out of service, I have to go to the branch personally.", exampleTranslation: "El cajero automático está fuera de servicio, tengo que ir a la sucursal personalmente." },
      { id: "bank12", spanish: "Hipoteca", english: "Mortgage", difficulty: "medium", example: "We took out a mortgage to buy our new house in the suburbs recently.", exampleTranslation: "Sacamos una hipoteca para comprar nuestra nueva casa en los suburbios recientemente." },
      { id: "bank13", spanish: "Quiero abrir una cuenta", english: "I want to open an account", difficulty: "hard", example: "I want to open a checking account! What documents do I need exactly for that?", exampleTranslation: "¡Quiero abrir una cuenta corriente! ¿Qué documentos necesito exactamente para eso?" },
      { id: "bank14", spanish: "¿Cuál es mi saldo?", english: "What is my balance?", difficulty: "hard", example: "Can you please tell me what my current account balance is right now exactly?", exampleTranslation: "¿Puede decirme por favor cuál es mi saldo actual de la cuenta ahora mismo exactamente?" },
      { id: "bank15", spanish: "Olvidé mi PIN", english: "I forgot my PIN", difficulty: "hard", example: "I forgot my PIN number! How can I get a new one quickly please?", exampleTranslation: "¡Olvidé mi número PIN! ¿Cómo puedo obtener uno nuevo rápidamente por favor?" }
    ]
  },

  music_instruments: {
    name: "Música e instrumentos",
    description: "Instrumentos musicales, melodías y hacer música",
    icon: Music2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "mus1", spanish: "Guitarra", english: "Guitar", difficulty: "easy", example: "I have been playing guitar for five years and practice every day.", exampleTranslation: "He estado tocando la guitarra por cinco años y practico cada día." },
      { id: "mus2", spanish: "Piano", english: "Piano", difficulty: "easy", example: "The piano is in the living room and I practice on it every evening.", exampleTranslation: "El piano está en la sala y practico en él cada tarde." },
      { id: "mus3", spanish: "Violín", english: "Violin", difficulty: "easy", example: "The violin is a difficult instrument and requires much daily practice constantly.", exampleTranslation: "El violín es un instrumento difícil y requiere mucha práctica diaria constantemente." },
      { id: "mus4", spanish: "Flauta", english: "Flute", difficulty: "easy", example: "The flute has a beautiful soft sound and is easy to learn.", exampleTranslation: "La flauta tiene un sonido hermoso suave y es fácil de aprender." },
      { id: "mus5", spanish: "Batería", english: "Drums", difficulty: "easy", example: "The drums are loud and need a lot of space in the room.", exampleTranslation: "La batería es ruidosa y necesita mucho espacio en la habitación." },
      { id: "mus6", spanish: "Trompeta", english: "Trumpet", difficulty: "easy", example: "The trumpet sounds bright and powerful especially in jazz music beautifully.", exampleTranslation: "La trompeta suena brillante y potente especialmente en la música jazz hermosamente." },
      { id: "mus7", spanish: "Notas musicales", english: "Musical notes", difficulty: "medium", example: "I am learning to read musical notes to play classical music correctly properly.", exampleTranslation: "Estoy aprendiendo a leer notas musicales para tocar música clásica correctamente apropiadamente." },
      { id: "mus8", spanish: "Melodía", english: "Melody", difficulty: "medium", example: "The melody of this song is very beautiful and catchy easy to remember.", exampleTranslation: "La melodía de esta canción es muy hermosa y pegadiza fácil de recordar." },
      { id: "mus9", spanish: "Concierto", english: "Concert", difficulty: "medium", example: "The concert takes place tonight at the philharmonic hall at eight o'clock sharp.", exampleTranslation: "El concierto tiene lugar esta noche en la sala filarmónica a las ocho en punto." },
      { id: "mus10", spanish: "Orquesta", english: "Orchestra", difficulty: "medium", example: "The orchestra plays wonderfully with over one hundred musicians together harmoniously beautifully.", exampleTranslation: "La orquesta toca maravillosamente con más de cien músicos juntos armoniosamente hermosamente." },
      { id: "mus11", spanish: "Acorde", english: "Chord", difficulty: "medium", example: "This guitar chord is difficult to play for beginners learning to play.", exampleTranslation: "Este acorde de guitarra es difícil de tocar para principiantes aprendiendo a tocar." },
      { id: "mus12", spanish: "Ritmo", english: "Rhythm", difficulty: "medium", example: "The rhythm of this dance is fast and dynamic very energetic exciting catchy.", exampleTranslation: "El ritmo de este baile es rápido y dinámico muy enérgico emocionante pegadizo." },
      { id: "mus13", spanish: "Toco el piano", english: "I play piano", difficulty: "hard", example: "I have been playing piano for ten years now! I absolutely love classical music!", exampleTranslation: "¡He estado tocando el piano por diez años ya! ¡Absolutamente amo la música clásica!" },
      { id: "mus14", spanish: "¿Sabes tocar?", english: "Can you play?", difficulty: "hard", example: "Can you play any musical instrument? I would love to learn from you!", exampleTranslation: "¿Sabes tocar algún instrumento musical? ¡Me encantaría aprender de ti!" },
      { id: "mus15", spanish: "Suena hermoso", english: "It sounds beautiful", difficulty: "hard", example: "That sounds absolutely beautiful! You play the violin so well masterfully skillfully!", exampleTranslation: "¡Eso suena absolutamente hermoso! ¡Tocas el violín tan bien magistralmente hábilmente!" }
    ]
  },

  photography_art: {
    name: "Fotografía y arte",
    description: "Capturar momentos, expresión artística y creatividad",
    icon: Camera,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "photo1", spanish: "Cámara", english: "Camera", difficulty: "easy", example: "I always carry my camera with me to capture beautiful moments everywhere.", exampleTranslation: "Siempre llevo mi cámara conmigo para capturar momentos hermosos en todas partes." },
      { id: "photo2", spanish: "Foto", english: "Photo", difficulty: "easy", example: "I took a beautiful photo of the sunset over the ocean yesterday evening.", exampleTranslation: "Tomé una foto hermosa de la puesta de sol sobre el océano ayer por la tarde." },
      { id: "photo3", spanish: "Imagen", english: "Image", difficulty: "easy", example: "This image is very clear and shows all the details perfectly sharply.", exampleTranslation: "Esta imagen es muy clara y muestra todos los detalles perfectamente nítidamente." },
      { id: "photo4", spanish: "Luz", english: "Light", difficulty: "easy", example: "Good light is essential for taking high-quality photographs professionally beautifully.", exampleTranslation: "La buena luz es esencial para tomar fotografías de alta calidad profesionalmente hermosamente." },
      { id: "photo5", spanish: "Enfoque", english: "Focus", difficulty: "easy", example: "Make sure the focus is sharp before taking the picture for clarity.", exampleTranslation: "Asegúrate de que el enfoque esté nítido antes de tomar la foto para claridad." },
      { id: "photo6", spanish: "Retrato", english: "Portrait", difficulty: "easy", example: "I like to take portrait photos of people in natural light outdoors.", exampleTranslation: "Me gusta tomar fotos de retrato de personas con luz natural al aire libre." },
      { id: "photo7", spanish: "Paisaje", english: "Landscape", difficulty: "medium", example: "Landscape photography requires patience and waiting for the perfect light conditions patiently.", exampleTranslation: "La fotografía de paisajes requiere paciencia y esperar las condiciones de luz perfectas pacientemente." },
      { id: "photo8", spanish: "Exposición", english: "Exposure", difficulty: "medium", example: "The exposure of this photo is too dark, we need more light coming in.", exampleTranslation: "La exposición de esta foto está demasiado oscura, necesitamos más luz entrando." },
      { id: "photo9", spanish: "Lente", english: "Lens", difficulty: "medium", example: "I bought a new telephoto lens for wildlife photography in nature beautifully.", exampleTranslation: "Compré un lente telefoto nuevo para fotografía de vida silvestre en la naturaleza hermosamente." },
      { id: "photo10", spanish: "Composición", english: "Composition", difficulty: "medium", example: "Good composition is key to creating visually appealing photographs artistically professionally creatively.", exampleTranslation: "La buena composición es clave para crear fotografías visualmente atractivas artísticamente profesionalmente creativamente." },
      { id: "photo11", spanish: "Editar", english: "Edit", difficulty: "medium", example: "I edit my photos on the computer to enhance colors and contrast digitally.", exampleTranslation: "Edito mis fotos en la computadora para mejorar los colores y el contraste digitalmente." },
      { id: "photo12", spanish: "Galería", english: "Gallery", difficulty: "medium", example: "My photos are displayed in the art gallery downtown for everyone to see publicly.", exampleTranslation: "Mis fotos están expuestas en la galería de arte del centro para que todos las vean públicamente." },
      { id: "photo13", spanish: "Soy fotógrafo", english: "I am a photographer", difficulty: "hard", example: "I am a professional photographer specializing in wedding and portrait photography beautifully!", exampleTranslation: "¡Soy un fotógrafo profesional especializado en fotografía de bodas y retratos hermosamente!" },
      { id: "photo14", spanish: "¿Puedo tomar una foto?", english: "Can I take a photo?", difficulty: "hard", example: "Excuse me, can I take a photo of this beautiful view? It's absolutely stunning!", exampleTranslation: "Disculpe, ¿puedo tomar una foto de esta vista hermosa? ¡Es absolutamente impresionante!" },
      { id: "photo15", spanish: "La luz es perfecta", english: "The light is perfect", difficulty: "hard", example: "The light is absolutely perfect right now! This is the best time to take photos!", exampleTranslation: "¡La luz está absolutamente perfecta ahora mismo! ¡Este es el mejor momento para tomar fotos!" }
    ]
  },

  pets_animals: {
    name: "Mascotas y animales",
    description: "Animales domésticos, cuidado de mascotas y fauna",
    icon: Dog,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "pet1", spanish: "Perro", english: "Dog", difficulty: "easy", example: "My dog is very loyal and follows me everywhere I go daily.", exampleTranslation: "Mi perro es muy leal y me sigue a todas partes a donde voy diariamente." },
      { id: "pet2", spanish: "Gato", english: "Cat", difficulty: "easy", example: "The cat sleeps all day on the sofa comfortably and lazily peacefully.", exampleTranslation: "El gato duerme todo el día en el sofá cómodamente y perezosamente pacíficamente." },
      { id: "pet3", spanish: "Pájaro", english: "Bird", difficulty: "easy", example: "The bird sings beautifully in the morning in the tree outside my window.", exampleTranslation: "El pájaro canta hermosamente por la mañana en el árbol afuera de mi ventana." },
      { id: "pet4", spanish: "Pez", english: "Fish", difficulty: "easy", example: "The fish swim quickly in the clear water of the aquarium around.", exampleTranslation: "Los peces nadan rápidamente en el agua clara del acuario alrededor." },
      { id: "pet5", spanish: "Caballo", english: "Horse", difficulty: "easy", example: "The horse gallops fast across the green field freely in the countryside.", exampleTranslation: "El caballo gallopa rápido a través del campo verde libremente en el campo." },
      { id: "pet6", spanish: "Conejo", english: "Rabbit", difficulty: "easy", example: "The rabbit is eating fresh carrots in its cage happily contentedly peacefully.", exampleTranslation: "El conejo está comiendo zanahorias frescas en su jaula felizmente satisfactoriamente pacíficamente." },
      { id: "pet7", spanish: "Veterinario", english: "Veterinarian", difficulty: "medium", example: "I need to take my dog to the veterinarian for his annual checkup soon.", exampleTranslation: "Necesito llevar a mi perro al veterinario para su chequeo anual pronto." },
      { id: "pet8", spanish: "Correa", english: "Leash", difficulty: "medium", example: "Always use a leash when walking your dog in public places for safety.", exampleTranslation: "Siempre usa una correa cuando pasees a tu perro en lugares públicos para seguridad." },
      { id: "pet9", spanish: "Jaula", english: "Cage", difficulty: "medium", example: "The bird's cage is large and comfortable with toys and perches inside nicely.", exampleTranslation: "La jaula del pájaro es grande y cómoda con juguetes y perchas adentro agradablemente." },
      { id: "pet10", spanish: "Comida para mascotas", english: "Pet food", difficulty: "medium", example: "I buy special pet food for my dog at the store every week regularly.", exampleTranslation: "Compro comida especial para mascotas para mi perro en la tienda cada semana regularmente." },
      { id: "pet11", spanish: "Adoptar", english: "Adopt", difficulty: "medium", example: "We decided to adopt a cat from the animal shelter last month happily.", exampleTranslation: "Decidimos adoptar un gato del refugio de animales el mes pasado felizmente." },
      { id: "pet12", spanish: "Vacuna", english: "Vaccination", difficulty: "medium", example: "All pets must have their vaccinations up to date for health and safety reasons.", exampleTranslation: "Todas las mascotas deben tener sus vacunas al día por razones de salud y seguridad." },
      { id: "pet13", spanish: "Tengo un perro", english: "I have a dog", difficulty: "hard", example: "I have a big dog at home! He is very friendly and loves to play!", exampleTranslation: "¡Tengo un perro grande en casa! ¡Es muy amigable y le encanta jugar!" },
      { id: "pet14", spanish: "Mi gato está enfermo", english: "My cat is sick", difficulty: "hard", example: "My cat is sick! I need to take him to the veterinarian immediately today!", exampleTranslation: "¡Mi gato está enfermo! ¡Necesito llevarlo al veterinario inmediatamente hoy!" },
      { id: "pet15", spanish: "Me encantan los animales", english: "I love animals", difficulty: "hard", example: "I absolutely love all animals! Especially dogs and cats are my favorites always!", exampleTranslation: "¡Absolutamente amo a todos los animales! ¡Especialmente los perros y gatos son mis favoritos siempre!" }
    ]
  },

  tools_repair: {
    name: "Herramientas y reparación",
    description: "Herramientas, arreglos y trabajos manuales",
    icon: Wrench,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "tool1", spanish: "Martillo", english: "Hammer", difficulty: "easy", example: "I need a hammer to drive the nail into the wall firmly.", exampleTranslation: "Necesito un martillo para clavar el clavo en la pared firmemente." },
      { id: "tool2", spanish: "Destornillador", english: "Screwdriver", difficulty: "easy", example: "With a screwdriver you can tighten or loosen screws easily quickly.", exampleTranslation: "Con un destornillador puedes apretar o aflojar tornillos fácilmente rápidamente." },
      { id: "tool3", spanish: "Sierra", english: "Saw", difficulty: "easy", example: "The saw is sharp and perfect for cutting wood planks precisely.", exampleTranslation: "La sierra está afilada y es perfecta para cortar madera precisamente." },
      { id: "tool4", spanish: "Taladro", english: "Drill", difficulty: "easy", example: "The electric drill makes holes in the wall quickly and effortlessly easily.", exampleTranslation: "El taladro eléctrico hace agujeros en la pared rápidamente y sin esfuerzo fácilmente." },
      { id: "tool5", spanish: "Clavo", english: "Nail", difficulty: "easy", example: "I hammer the nail into the wooden wall with the hammer firmly securely.", exampleTranslation: "Clavo el clavo en la pared de madera con el martillo firmemente seguramente." },
      { id: "tool6", spanish: "Tornillo", english: "Screw", difficulty: "easy", example: "The screw must be tightened firmly with the right tool properly.", exampleTranslation: "El tornillo debe estar apretado firmemente con la herramienta correcta apropiadamente." },
      { id: "tool7", spanish: "Llave inglesa", english: "Wrench", difficulty: "medium", example: "With the wrench I tighten the nut on the bolt securely tightly.", exampleTranslation: "Con la llave inglesa aprieto la tuerca en el tornillo seguramente firmemente." },
      { id: "tool8", spanish: "Escalera", english: "Ladder", difficulty: "medium", example: "I need a tall ladder to reach the ceiling and change the light bulb.", exampleTranslation: "Necesito una escalera alta para alcanzar el techo y cambiar la bombilla." },
      { id: "tool9", spanish: "Cinta métrica", english: "Tape measure", difficulty: "medium", example: "With the tape measure I accurately measure the length and width of the table.", exampleTranslation: "Con la cinta métrica mido con precisión el largo y ancho de la mesa." },
      { id: "tool10", spanish: "Nivel", english: "Level", difficulty: "medium", example: "With the level I check if the shelf is hanging straight horizontally.", exampleTranslation: "Con el nivel verifico si el estante está colgando derecho horizontalmente." },
      { id: "tool11", spanish: "Alicates", english: "Pliers", difficulty: "medium", example: "With pliers you can cut and bend wires practically and easily effectively.", exampleTranslation: "Con los alicates puedes cortar y doblar cables prácticamente y fácilmente efectivamente." },
      { id: "tool12", spanish: "Reparar", english: "Repair", difficulty: "medium", example: "I need to repair the broken chair before someone gets hurt sitting on it.", exampleTranslation: "Necesito reparar la silla rota antes de que alguien se lastime sentándose en ella." },
      { id: "tool13", spanish: "Necesito herramientas", english: "I need tools", difficulty: "hard", example: "I urgently need tools to fix this! Do you have a hammer and some screws?", exampleTranslation: "¡Necesito urgentemente herramientas para arreglar esto! ¿Tienes un martillo y algunos tornillos?" },
      { id: "tool14", spanish: "¿Puedes ayudarme?", english: "Can you help me?", difficulty: "hard", example: "Can you help me assemble this shelf? I can't do it alone by myself!", exampleTranslation: "¿Puedes ayudarme a armar este estante? ¡No puedo hacerlo solo por mí mismo!" },
      { id: "tool15", spanish: "¿Cómo se arregla?", english: "How do you fix it?", difficulty: "hard", example: "How do you fix this properly correctly? Can you show me step by step please?", exampleTranslation: "¿Cómo se arregla esto apropiadamente correctamente? ¿Puedes mostrarme paso a paso por favor?" }
    ]
  },

  phone_communication: {
    name: "Teléfono y comunicación",
    description: "Llamadas telefónicas, mensajes y comunicación móvil",
    icon: Phone,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "phone1", spanish: "Teléfono", english: "Phone", difficulty: "easy", example: "My phone is ringing, I need to answer the call right now.", exampleTranslation: "Mi teléfono está sonando, necesito contestar la llamada ahora mismo." },
      { id: "phone2", spanish: "Llamada", english: "Call", difficulty: "easy", example: "I received an important call from my boss this morning early.", exampleTranslation: "Recibí una llamada importante de mi jefe esta mañana temprano." },
      { id: "phone3", spanish: "Mensaje", english: "Message", difficulty: "easy", example: "I sent you a text message yesterday but you didn't reply yet.", exampleTranslation: "Te envié un mensaje de texto ayer pero no has respondido aún." },
      { id: "phone4", spanish: "Número", english: "Number", difficulty: "easy", example: "Can you give me your phone number so I can call you later?", exampleTranslation: "¿Puedes darme tu número de teléfono para que pueda llamarte después?" },
      { id: "phone5", spanish: "Contestar", english: "Answer", difficulty: "easy", example: "Please answer the phone when I call you this evening at eight o'clock.", exampleTranslation: "Por favor contesta el teléfono cuando te llame esta tarde a las ocho en punto." },
      { id: "phone6", spanish: "Marcar", english: "Dial", difficulty: "easy", example: "Dial the number carefully to make sure you call the right person.", exampleTranslation: "Marca el número cuidadosamente para asegurarte de llamar a la persona correcta." },
      { id: "phone7", spanish: "Buzón de voz", english: "Voicemail", difficulty: "medium", example: "I left you a voicemail message because you didn't answer your phone earlier.", exampleTranslation: "Te dejé un mensaje de buzón de voz porque no contestaste tu teléfono antes." },
      { id: "phone8", spanish: "Llamada perdida", english: "Missed call", difficulty: "medium", example: "I have three missed calls from my mother, I should call her back soon.", exampleTranslation: "Tengo tres llamadas perdidas de mi madre, debería devolverle la llamada pronto." },
      { id: "phone9", spanish: "Señal", english: "Signal", difficulty: "medium", example: "The phone signal is very weak here, I can't make calls properly clearly.", exampleTranslation: "La señal del teléfono es muy débil aquí, no puedo hacer llamadas apropiadamente claramente." },
      { id: "phone10", spanish: "Cargar", english: "Charge", difficulty: "medium", example: "I need to charge my phone because the battery is almost dead empty.", exampleTranslation: "Necesito cargar mi teléfono porque la batería está casi muerta vacía." },
      { id: "phone11", spanish: "Cargador", english: "Charger", difficulty: "medium", example: "I forgot my phone charger at home, can I borrow yours please temporarily?", exampleTranslation: "Olvidé mi cargador de teléfono en casa, ¿puedo pedir prestado el tuyo por favor temporalmente?" },
      { id: "phone12", spanish: "Contacto", english: "Contact", difficulty: "medium", example: "I added you to my contacts so I can call you easily anytime.", exampleTranslation: "Te agregué a mis contactos para poder llamarte fácilmente en cualquier momento." },
      { id: "phone13", spanish: "Te llamo después", english: "I'll call you later", difficulty: "hard", example: "I'll call you back later when I have more time to talk properly! Bye now!", exampleTranslation: "¡Te llamo después cuando tenga más tiempo para hablar apropiadamente! ¡Adiós por ahora!" },
      { id: "phone14", spanish: "No tengo señal", english: "I have no signal", difficulty: "hard", example: "I have no phone signal here! I can't make any calls at all right now!", exampleTranslation: "¡No tengo señal de teléfono aquí! ¡No puedo hacer ninguna llamada en absoluto ahora mismo!" },
      { id: "phone15", spanish: "Se me acabó la batería", english: "My battery died", difficulty: "hard", example: "My phone battery just died! Do you have a charger I could use urgently?", exampleTranslation: "¡Se me acabó la batería del teléfono! ¿Tienes un cargador que pueda usar urgentemente?" }
    ]
  },

  time_calendar: {
    name: "Tiempo y calendario",
    description: "Expresiones de tiempo, fechas y organización temporal",
    icon: Clock,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "time1", spanish: "Ayer", english: "Yesterday", difficulty: "easy", example: "Yesterday I went to the movies and watched a great film enjoyably.", exampleTranslation: "Ayer fui al cine y vi una gran película disfrutablemente." },
      { id: "time2", spanish: "Hoy", english: "Today", difficulty: "easy", example: "Today is a beautiful day with warm sunshine all day long.", exampleTranslation: "Hoy es un día hermoso con sol cálido todo el día largo." },
      { id: "time3", spanish: "Mañana", english: "Tomorrow", difficulty: "easy", example: "Tomorrow I am taking the train to Barcelona for an important meeting.", exampleTranslation: "Mañana tomaré el tren a Barcelona para una reunión importante." },
      { id: "time4", spanish: "Ahora", english: "Now", difficulty: "easy", example: "I have to leave right now or I will miss the bus!", exampleTranslation: "¡Tengo que irme ahora mismo o perderé el autobús!" },
      { id: "time5", spanish: "Después", english: "Later", difficulty: "easy", example: "I will call you later when I have more time to talk properly.", exampleTranslation: "Te llamaré después cuando tenga más tiempo para hablar apropiadamente." },
      { id: "time6", spanish: "Antes", english: "Before", difficulty: "easy", example: "Before I used to go jogging every day, now not anymore unfortunately.", exampleTranslation: "Antes solía ir a correr cada día, ahora ya no más desafortunadamente." },
      { id: "time7", spanish: "Anteayer", english: "Day before yesterday", difficulty: "medium", example: "The day before yesterday I met my old school friend by chance downtown.", exampleTranslation: "Anteayer me encontré con mi viejo amigo de la escuela por casualidad en el centro." },
      { id: "time8", spanish: "Pasado mañana", english: "Day after tomorrow", difficulty: "medium", example: "The day after tomorrow we are flying to Spain for two weeks vacation.", exampleTranslation: "Pasado mañana volamos a España por dos semanas de vacaciones." },
      { id: "time9", spanish: "La próxima semana", english: "Next week", difficulty: "medium", example: "Next week I have an important doctor's appointment on Monday morning early.", exampleTranslation: "La próxima semana tengo una cita importante con el doctor el lunes por la mañana temprano." },
      { id: "time10", spanish: "El mes pasado", english: "Last month", difficulty: "medium", example: "Last month we were in Italy and had a wonderful time together.", exampleTranslation: "El mes pasado estuvimos en Italia y pasamos un tiempo maravilloso juntos." },
      { id: "time11", spanish: "En un momento", english: "In a moment", difficulty: "medium", example: "I'll be there in just a moment, please wait for me a bit!", exampleTranslation: "¡Estaré allí en un momento, por favor espérame un poco!" },
      { id: "time12", spanish: "Recientemente", english: "Recently", difficulty: "medium", example: "Recently I read an interesting article about climate change in the newspaper thoughtfully.", exampleTranslation: "Recientemente leí un artículo interesante sobre el cambio climático en el periódico pensativamente." },
      { id: "time13", spanish: "¿Cuándo fue eso?", english: "When was that?", difficulty: "hard", example: "When exactly was that? Can you still remember the specific date clearly?", exampleTranslation: "¿Cuándo fue eso exactamente? ¿Puedes recordar aún la fecha específica claramente?" },
      { id: "time14", spanish: "Hace mucho tiempo", english: "A long time ago", difficulty: "hard", example: "That was a very long time ago! I can barely remember it anymore now!", exampleTranslation: "¡Eso fue hace mucho tiempo! ¡Apenas puedo recordarlo ya ahora!" },
      { id: "time15", spanish: "¿Desde cuándo?", english: "Since when?", difficulty: "hard", example: "Since when exactly have you been living here in this city? Many years already?", exampleTranslation: "¿Desde cuándo exactamente has estado viviendo aquí en esta ciudad? ¿Muchos años ya?" }
    ]
  },

  house_rooms: {
    name: "Casa y habitaciones",
    description: "Partes de la casa, habitaciones y espacios del hogar",
    icon: Building,
    color: "from-teal-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "house1", spanish: "Casa", english: "House", difficulty: "easy", example: "Our house is large and comfortable with a beautiful garden in the back.", exampleTranslation: "Nuestra casa es grande y cómoda con un jardín hermoso en la parte de atrás." },
      { id: "house2", spanish: "Cocina", english: "Kitchen", difficulty: "easy", example: "The kitchen is the heart of the home where we cook and eat together.", exampleTranslation: "La cocina es el corazón del hogar donde cocinamos y comemos juntos." },
      { id: "house3", spanish: "Sala", english: "Living room", difficulty: "easy", example: "We watch television in the living room every evening as a family together.", exampleTranslation: "Vemos televisión en la sala cada tarde como familia juntos." },
      { id: "house4", spanish: "Dormitorio", english: "Bedroom", difficulty: "easy", example: "My bedroom is on the second floor with a nice view of the garden.", exampleTranslation: "Mi dormitorio está en el segundo piso con una linda vista del jardín." },
      { id: "house5", spanish: "Baño", english: "Bathroom", difficulty: "easy", example: "The bathroom is clean and has a large mirror above the sink.", exampleTranslation: "El baño está limpio y tiene un espejo grande arriba del lavabo." },
      { id: "house6", spanish: "Jardín", english: "Garden", difficulty: "easy", example: "We have a beautiful garden with many flowers and fruit trees growing.", exampleTranslation: "Tenemos un jardín hermoso con muchas flores y árboles frutales creciendo." },
      { id: "house7", spanish: "Comedor", english: "Dining room", difficulty: "medium", example: "The dining room has a large table where the whole family eats together daily.", exampleTranslation: "El comedor tiene una mesa grande donde toda la familia come junta diariamente." },
      { id: "house8", spanish: "Garaje", english: "Garage", difficulty: "medium", example: "We park our car in the garage to protect it from bad weather safely.", exampleTranslation: "Estacionamos nuestro auto en el garaje para protegerlo del mal tiempo de forma segura." },
      { id: "house9", spanish: "Sótano", english: "Basement", difficulty: "medium", example: "We store old furniture and boxes in the basement for future use later.", exampleTranslation: "Guardamos muebles viejos y cajas en el sótano para uso futuro después." },
      { id: "house10", spanish: "Ático", english: "Attic", difficulty: "medium", example: "The attic is full of old things and memories from the past nostalgically.", exampleTranslation: "El ático está lleno de cosas viejas y recuerdos del pasado nostálgicamente." },
      { id: "house11", spanish: "Escalera", english: "Stairs", difficulty: "medium", example: "The stairs lead to the second floor where all the bedrooms are located.", exampleTranslation: "Las escaleras conducen al segundo piso donde están ubicados todos los dormitorios." },
      { id: "house12", spanish: "Ventana", english: "Window", difficulty: "medium", example: "Open the window to let fresh air in on this beautiful sunny day.", exampleTranslation: "Abre la ventana para dejar entrar aire fresco en este hermoso día soleado." },
      { id: "house13", spanish: "¿Dónde está el baño?", english: "Where is the bathroom?", difficulty: "hard", example: "Excuse me, where is the bathroom? I really need to use it urgently now!", exampleTranslation: "Disculpe, ¿dónde está el baño? ¡Realmente necesito usarlo urgentemente ahora!" },
      { id: "house14", spanish: "Vivo en una casa grande", english: "I live in a big house", difficulty: "hard", example: "I live in a big house with my family! We have four bedrooms and a garden!", exampleTranslation: "¡Vivo en una casa grande con mi familia! ¡Tenemos cuatro dormitorios y un jardín!" },
      { id: "house15", spanish: "Mi habitación favorita es...", english: "My favorite room is...", difficulty: "hard", example: "My favorite room in the house is definitely the living room where we relax together!", exampleTranslation: "¡Mi habitación favorita en la casa es definitivamente la sala donde nos relajamos juntos!" }
    ]
  },

  clothing_accessories: {
    name: "Ropa y accesorios",
    description: "Vestimenta, prendas de vestir y complementos de moda",
    icon: ShoppingCart,
    color: "from-fuchsia-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "cloth1", spanish: "Camisa", english: "Shirt", difficulty: "easy", example: "I bought a new white shirt for the job interview next week.", exampleTranslation: "Compré una camisa blanca nueva para la entrevista de trabajo la próxima semana." },
      { id: "cloth2", spanish: "Pantalones", english: "Pants", difficulty: "easy", example: "These pants are comfortable and perfect for everyday wear at work.", exampleTranslation: "Estos pantalones son cómodos y perfectos para uso diario en el trabajo." },
      { id: "cloth3", spanish: "Zapatos", english: "Shoes", difficulty: "easy", example: "I need new shoes because these are old and worn out completely.", exampleTranslation: "Necesito zapatos nuevos porque estos están viejos y gastados completamente." },
      { id: "cloth4", spanish: "Vestido", english: "Dress", difficulty: "easy", example: "She bought a beautiful red dress for the party this Saturday night.", exampleTranslation: "Ella compró un vestido rojo hermoso para la fiesta este sábado por la noche." },
      { id: "cloth5", spanish: "Abrigo", english: "Coat", difficulty: "easy", example: "You need a warm coat in winter to protect yourself from the cold.", exampleTranslation: "Necesitas un abrigo cálido en invierno para protegerte del frío." },
      { id: "cloth6", spanish: "Sombrero", english: "Hat", difficulty: "easy", example: "Wear a hat to protect your head from the strong sun in summer.", exampleTranslation: "Usa un sombrero para proteger tu cabeza del sol fuerte en verano." },
      { id: "cloth7", spanish: "Calcetines", english: "Socks", difficulty: "medium", example: "I need to buy new socks because all mine have holes in them.", exampleTranslation: "Necesito comprar calcetines nuevos porque todos los míos tienen agujeros." },
      { id: "cloth8", spanish: "Bufanda", english: "Scarf", difficulty: "medium", example: "A wool scarf keeps your neck warm during cold winter days comfortably.", exampleTranslation: "Una bufanda de lana mantiene tu cuello cálido durante los días fríos de invierno cómodamente." },
      { id: "cloth9", spanish: "Guantes", english: "Gloves", difficulty: "medium", example: "I wear gloves in winter to keep my hands warm when it's freezing outside.", exampleTranslation: "Uso guantes en invierno para mantener mis manos cálidas cuando hace mucho frío afuera." },
      { id: "cloth10", spanish: "Corbata", english: "Tie", difficulty: "medium", example: "Men wear ties with suits for formal occasions and business meetings professionally.", exampleTranslation: "Los hombres usan corbatas con trajes para ocasiones formales y reuniones de negocios profesionalmente." },
      { id: "cloth11", spanish: "Cinturón", english: "Belt", difficulty: "medium", example: "I need a new leather belt because this one is too loose now.", exampleTranslation: "Necesito un cinturón de cuero nuevo porque este está demasiado flojo ahora." },
      { id: "cloth12", spanish: "Bolso", english: "Purse", difficulty: "medium", example: "She always carries a large purse with all her important things inside daily.", exampleTranslation: "Ella siempre lleva un bolso grande con todas sus cosas importantes adentro diariamente." },
      { id: "cloth13", spanish: "¿Qué talla usas?", english: "What size do you wear?", difficulty: "hard", example: "What size do you wear in shirts? I want to buy you one as a gift!", exampleTranslation: "¿Qué talla usas en camisas? ¡Quiero comprarte una como regalo!" },
      { id: "cloth14", spanish: "Me queda bien", english: "It fits me well", difficulty: "hard", example: "This jacket fits me perfectly! I think I'll take it home with me today!", exampleTranslation: "¡Esta chaqueta me queda perfectamente! ¡Creo que me la llevaré a casa hoy!" },
      { id: "cloth15", spanish: "Está de moda", english: "It's fashionable", difficulty: "hard", example: "This style is very fashionable right now! Everyone is wearing it this season!", exampleTranslation: "¡Este estilo está muy de moda ahora mismo! ¡Todos lo están usando esta temporada!" }
    ]
  },

  relationships_family: {
    name: "Relaciones y familia",
    description: "Lazos familiares, relaciones personales y vínculos afectivos",
    icon: Users,
    color: "from-rose-500 to-red-600",
    level: "beginner",
    words: [
      { id: "rel1", spanish: "Familia", english: "Family", difficulty: "easy", example: "My family is very important to me and we spend time together often.", exampleTranslation: "Mi familia es muy importante para mí y pasamos tiempo juntos a menudo." },
      { id: "rel2", spanish: "Padres", english: "Parents", difficulty: "easy", example: "My parents live in another city but we talk on the phone every day.", exampleTranslation: "Mis padres viven en otra ciudad pero hablamos por teléfono cada día." },
      { id: "rel3", spanish: "Hermano", english: "Brother", difficulty: "easy", example: "My brother is two years younger than me and we are very close.", exampleTranslation: "Mi hermano es dos años menor que yo y somos muy cercanos." },
      { id: "rel4", spanish: "Hermana", english: "Sister", difficulty: "easy", example: "My sister is studying medicine at the university in Madrid currently actively.", exampleTranslation: "Mi hermana está estudiando medicina en la universidad en Madrid actualmente activamente." },
      { id: "rel5", spanish: "Abuelos", english: "Grandparents", difficulty: "easy", example: "I visit my grandparents every Sunday for lunch and conversation together.", exampleTranslation: "Visito a mis abuelos cada domingo para almorzar y conversar juntos." },
      { id: "rel6", spanish: "Tío", english: "Uncle", difficulty: "easy", example: "My uncle works as a doctor at the hospital downtown in the city.", exampleTranslation: "Mi tío trabaja como doctor en el hospital del centro en la ciudad." },
      { id: "rel7", spanish: "Primo", english: "Cousin", difficulty: "medium", example: "My cousin lives in Barcelona and we see each other during summer vacation.", exampleTranslation: "Mi primo vive en Barcelona y nos vemos durante las vacaciones de verano." },
      { id: "rel8", spanish: "Novio/Novia", english: "Boyfriend/Girlfriend", difficulty: "medium", example: "I am going to the movies with my girlfriend this Saturday evening together.", exampleTranslation: "Voy al cine con mi novia este sábado por la noche juntos." },
      { id: "rel9", spanish: "Esposo/Esposa", english: "Husband/Wife", difficulty: "medium", example: "My wife is a teacher and works at the elementary school nearby daily.", exampleTranslation: "Mi esposa es maestra y trabaja en la escuela primaria cercana diariamente." },
      { id: "rel10", spanish: "Suegros", english: "In-laws", difficulty: "medium", example: "We visit my in-laws every month for Sunday lunch together as a family.", exampleTranslation: "Visitamos a mis suegros cada mes para el almuerzo dominical juntos como familia." },
      { id: "rel11", spanish: "Nieto", english: "Grandchild", difficulty: "medium", example: "My grandparents are very happy with their first grandchild born last year joyfully.", exampleTranslation: "Mis abuelos están muy felices con su primer nieto nacido el año pasado alegremente." },
      { id: "rel12", spanish: "Mejor amigo", english: "Best friend", difficulty: "medium", example: "My best friend and I have known each other since childhood for twenty years.", exampleTranslation: "Mi mejor amigo y yo nos conocemos desde la infancia por veinte años." },
      { id: "rel13", spanish: "Tengo una familia grande", english: "I have a big family", difficulty: "hard", example: "I have a very big family with many cousins, aunts, and uncles everywhere!", exampleTranslation: "¡Tengo una familia muy grande con muchos primos, tías y tíos por todas partes!" },
      { id: "rel14", spanish: "Somos muy unidos", english: "We are very close", difficulty: "hard", example: "We are a very close family! We always support each other in everything!", exampleTranslation: "¡Somos una familia muy unida! ¡Siempre nos apoyamos mutuamente en todo!" },
      { id: "rel15", spanish: "Me parezco a mi madre", english: "I look like my mother", difficulty: "hard", example: "Everyone says I look like my mother! We have the same eyes and smile!", exampleTranslation: "¡Todos dicen que me parezco a mi madre! ¡Tenemos los mismos ojos y sonrisa!" }
    ]
  },

  directions_locations: {
    name: "Direcciones y ubicaciones",
    description: "Encontrar lugares, dar y recibir direcciones en la ciudad",
    icon: MapPin,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "dir1", spanish: "Derecha", english: "Right", difficulty: "easy", example: "Turn right at the next corner and you will see the bank.", exampleTranslation: "Gira a la derecha en la próxima esquina y verás el banco." },
      { id: "dir2", spanish: "Izquierda", english: "Left", difficulty: "easy", example: "The supermarket is on the left side of the street after the traffic light.", exampleTranslation: "El supermercado está en el lado izquierdo de la calle después del semáforo." },
      { id: "dir3", spanish: "Recto", english: "Straight", difficulty: "easy", example: "Go straight ahead for two blocks and then turn left at the church.", exampleTranslation: "Sigue recto por dos cuadras y luego gira a la izquierda en la iglesia." },
      { id: "dir4", spanish: "Esquina", english: "Corner", difficulty: "easy", example: "The pharmacy is on the corner of Main Street and Oak Avenue.", exampleTranslation: "La farmacia está en la esquina de la Calle Principal y la Avenida Oak." },
      { id: "dir5", spanish: "Cerca", english: "Near", difficulty: "easy", example: "The restaurant is very near the hotel, just a five-minute walk away.", exampleTranslation: "El restaurante está muy cerca del hotel, solo a cinco minutos caminando." },
      { id: "dir6", spanish: "Lejos", english: "Far", difficulty: "easy", example: "The airport is far from downtown, about forty minutes by car or taxi.", exampleTranslation: "El aeropuerto está lejos del centro, unos cuarenta minutos en auto o taxi." },
      { id: "dir7", spanish: "Al lado de", english: "Next to", difficulty: "medium", example: "The bookstore is located right next to the coffee shop on the main street.", exampleTranslation: "La librería está ubicada justo al lado de la cafetería en la calle principal." },
      { id: "dir8", spanish: "Enfrente de", english: "In front of", difficulty: "medium", example: "The bus stop is right in front of the shopping center for convenience.", exampleTranslation: "La parada de autobús está justo enfrente del centro comercial para conveniencia." },
      { id: "dir9", spanish: "Entre", english: "Between", difficulty: "medium", example: "The bank is located between the pharmacy and the supermarket on this street.", exampleTranslation: "El banco está ubicado entre la farmacia y el supermercado en esta calle." },
      { id: "dir10", spanish: "Cruzar", english: "Cross", difficulty: "medium", example: "Cross the street at the pedestrian crossing for safety when the light is green.", exampleTranslation: "Cruza la calle en el cruce peatonal para seguridad cuando la luz esté verde." },
      { id: "dir11", spanish: "Cuadra", english: "Block", difficulty: "medium", example: "Walk three blocks north and you will find the library on your right side.", exampleTranslation: "Camina tres cuadras al norte y encontrarás la biblioteca en tu lado derecho." },
      { id: "dir12", spanish: "Perdido", english: "Lost", difficulty: "medium", example: "I am completely lost in this city! Can you help me find my hotel please?", exampleTranslation: "¡Estoy completamente perdido en esta ciudad! ¿Puedes ayudarme a encontrar mi hotel por favor?" },
      { id: "dir13", spanish: "¿Dónde está...?", english: "Where is...?", difficulty: "hard", example: "Excuse me, where is the train station from here? I need to get there quickly!", exampleTranslation: "Disculpe, ¿dónde está la estación de tren desde aquí? ¡Necesito llegar allí rápidamente!" },
      { id: "dir14", spanish: "Estoy perdido", english: "I am lost", difficulty: "hard", example: "I am completely lost! Can you show me on the map where we are now?", exampleTranslation: "¡Estoy completamente perdido! ¿Puedes mostrarme en el mapa dónde estamos ahora?" },
      { id: "dir15", spanish: "¿Está muy lejos?", english: "Is it very far?", difficulty: "hard", example: "Is it very far from here to the museum? Can I walk or should I take a taxi?", exampleTranslation: "¿Está muy lejos de aquí al museo? ¿Puedo caminar o debería tomar un taxi?" }
    ]
  }
};

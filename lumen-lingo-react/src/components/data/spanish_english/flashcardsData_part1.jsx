/**
 * SPANISH → ENGLISH FLASHCARDS - PART 1
 * NEW EXPANSION CATEGORIES (1-7)
 */

import { Heart, Cloud, Dumbbell, Smartphone, Stethoscope, GraduationCap, TreePine } from "lucide-react";

export const part1Categories = {
  emotions_feelings: {
    name: "Emociones y Sentimientos",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Expresiones de emociones y sentimientos",
    words: [
      { id: "se_emo1", spanish: "feliz", english: "happy", example: "I am very happy today", exampleTranslation: "Estoy muy feliz hoy" },
      { id: "se_emo2", spanish: "triste", english: "sad", example: "I feel sad", exampleTranslation: "Me siento triste" },
      { id: "se_emo3", spanish: "enojado", english: "angry", example: "He is angry with me", exampleTranslation: "Está enojado conmigo" },
      { id: "se_emo4", spanish: "nervioso", english: "nervous", example: "I'm nervous about the exam", exampleTranslation: "Estoy nervioso por el examen" },
      { id: "se_emo5", spanish: "emocionado", english: "excited", example: "I'm excited for the trip", exampleTranslation: "Estoy emocionado por el viaje" },
      { id: "se_emo6", spanish: "cansado", english: "tired", example: "I am very tired", exampleTranslation: "Estoy muy cansado" },
      { id: "se_emo7", spanish: "aburrido", english: "bored", example: "I feel bored", exampleTranslation: "Me siento aburrido" },
      { id: "se_emo8", spanish: "sorprendido", english: "surprised", example: "I am surprised", exampleTranslation: "Estoy sorprendido" },
      { id: "se_emo9", spanish: "asustado", english: "scared", example: "I'm scared of the dark", exampleTranslation: "Estoy asustado de la oscuridad" },
      { id: "se_emo10", spanish: "orgulloso", english: "proud", example: "I'm proud of you", exampleTranslation: "Estoy orgulloso de ti" },
      { id: "se_emo11", spanish: "confundido", english: "confused", example: "I am confused", exampleTranslation: "Estoy confundido" },
      { id: "se_emo12", spanish: "tranquilo", english: "calm", example: "I feel calm", exampleTranslation: "Me siento tranquilo" },
      { id: "se_emo13", spanish: "preocupado", english: "worried", example: "I'm worried about my family", exampleTranslation: "Estoy preocupado por mi familia" },
      { id: "se_emo14", spanish: "celoso", english: "jealous", example: "He is jealous of his brother", exampleTranslation: "Está celoso de su hermano" },
      { id: "se_emo15", spanish: "agradecido", english: "grateful", example: "I'm grateful for your help", exampleTranslation: "Estoy agradecido por tu ayuda" }
    ]
  },

  weather_seasons: {
    name: "Clima y Estaciones",
    icon: Cloud,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    description: "Vocabulario sobre el clima y las estaciones",
    words: [
      { id: "se_wea1", spanish: "soleado", english: "sunny", example: "It's a sunny day", exampleTranslation: "Es un día soleado" },
      { id: "se_wea2", spanish: "nublado", english: "cloudy", example: "It's cloudy today", exampleTranslation: "Está nublado hoy" },
      { id: "se_wea3", spanish: "lluvioso", english: "rainy", example: "It's a rainy day", exampleTranslation: "Es un día lluvioso" },
      { id: "se_wea4", spanish: "ventoso", english: "windy", example: "It's very windy", exampleTranslation: "Hace mucho viento" },
      { id: "se_wea5", spanish: "nieve", english: "snow", example: "It's snowing", exampleTranslation: "Está nevando" },
      { id: "se_wea6", spanish: "tormenta", english: "storm", example: "A storm is coming", exampleTranslation: "Viene una tormenta" },
      { id: "se_wea7", spanish: "niebla", english: "fog", example: "There's fog this morning", exampleTranslation: "Hay niebla esta mañana" },
      { id: "se_wea8", spanish: "primavera", english: "spring", example: "Spring is beautiful", exampleTranslation: "La primavera es hermosa" },
      { id: "se_wea9", spanish: "verano", english: "summer", example: "I love summer", exampleTranslation: "Me encanta el verano" },
      { id: "se_wea10", spanish: "otoño", english: "autumn", example: "Autumn is my favorite season", exampleTranslation: "El otoño es mi estación favorita" },
      { id: "se_wea11", spanish: "invierno", english: "winter", example: "Winter is cold", exampleTranslation: "El invierno es frío" },
      { id: "se_wea12", spanish: "temperatura", english: "temperature", example: "The temperature is high", exampleTranslation: "La temperatura es alta" },
      { id: "se_wea13", spanish: "calor", english: "heat", example: "It's very hot", exampleTranslation: "Hace mucho calor" },
      { id: "se_wea14", spanish: "frío", english: "cold", example: "It's cold outside", exampleTranslation: "Hace frío afuera" },
      { id: "se_wea15", spanish: "humedad", english: "humidity", example: "The humidity is high", exampleTranslation: "La humedad es alta" }
    ]
  },

  sports_hobbies: {
    name: "Deportes y Pasatiempos",
    icon: Dumbbell,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    description: "Actividades deportivas y pasatiempos",
    words: [
      { id: "se_spo1", spanish: "fútbol", english: "soccer", example: "I play soccer", exampleTranslation: "Juego al fútbol" },
      { id: "se_spo2", spanish: "baloncesto", english: "basketball", example: "I like basketball", exampleTranslation: "Me gusta el baloncesto" },
      { id: "se_spo3", spanish: "natación", english: "swimming", example: "Swimming is healthy", exampleTranslation: "La natación es saludable" },
      { id: "se_spo4", spanish: "correr", english: "running", example: "I go running in the morning", exampleTranslation: "Voy a correr por la mañana" },
      { id: "se_spo5", spanish: "ciclismo", english: "cycling", example: "Cycling is fun", exampleTranslation: "El ciclismo es divertido" },
      { id: "se_spo6", spanish: "tenis", english: "tennis", example: "I play tennis on weekends", exampleTranslation: "Juego al tenis los fines de semana" },
      { id: "se_spo7", spanish: "yoga", english: "yoga", example: "I do yoga every morning", exampleTranslation: "Hago yoga todas las mañanas" },
      { id: "se_spo8", spanish: "pintura", english: "painting", example: "I love painting", exampleTranslation: "Me encanta la pintura" },
      { id: "se_spo9", spanish: "lectura", english: "reading", example: "Reading is my favorite hobby", exampleTranslation: "La lectura es mi pasatiempo favorito" },
      { id: "se_spo10", spanish: "música", english: "music", example: "I listen to music every day", exampleTranslation: "Escucho música todos los días" },
      { id: "se_spo11", spanish: "cocinar", english: "cooking", example: "I like cooking", exampleTranslation: "Me gusta cocinar" },
      { id: "se_spo12", spanish: "jardinería", english: "gardening", example: "Gardening is relaxing", exampleTranslation: "La jardinería es relajante" },
      { id: "se_spo13", spanish: "fotografía", english: "photography", example: "I'm interested in photography", exampleTranslation: "Me interesa la fotografía" },
      { id: "se_spo14", spanish: "bailar", english: "dancing", example: "I'm going dancing tonight", exampleTranslation: "Voy a bailar esta noche" },
      { id: "se_spo15", spanish: "videojuegos", english: "video games", example: "I play video games with my friends", exampleTranslation: "Juego videojuegos con mis amigos" }
    ]
  },

  technology_internet: {
    name: "Tecnología e Internet",
    icon: Smartphone,
    color: "from-purple-400 to-indigo-500",
    level: "intermediate",
    description: "Tecnología moderna y términos de internet",
    words: [
      { id: "se_tec1", spanish: "computadora", english: "computer", example: "I need a new computer", exampleTranslation: "Necesito una computadora nueva" },
      { id: "se_tec2", spanish: "teléfono", english: "phone", example: "My phone is broken", exampleTranslation: "Mi teléfono está roto" },
      { id: "se_tec3", spanish: "internet", english: "internet", example: "I don't have internet", exampleTranslation: "No tengo internet" },
      { id: "se_tec4", spanish: "correo electrónico", english: "email", example: "Send me an email", exampleTranslation: "Envíame un correo electrónico" },
      { id: "se_tec5", spanish: "aplicación", english: "app", example: "Download this app", exampleTranslation: "Descarga esta aplicación" },
      { id: "se_tec6", spanish: "sitio web", english: "website", example: "Visit our website", exampleTranslation: "Visita nuestro sitio web" },
      { id: "se_tec7", spanish: "contraseña", english: "password", example: "I forgot my password", exampleTranslation: "Olvidé mi contraseña" },
      { id: "se_tec8", spanish: "descargar", english: "download", example: "I'm going to download the file", exampleTranslation: "Voy a descargar el archivo" },
      { id: "se_tec9", spanish: "cargar", english: "upload", example: "I need to upload the photos", exampleTranslation: "Necesito cargar las fotos" },
      { id: "se_tec10", spanish: "red social", english: "social media", example: "I use social media", exampleTranslation: "Uso las redes sociales" },
      { id: "se_tec11", spanish: "mensaje", english: "message", example: "Send me a message", exampleTranslation: "Envíame un mensaje" },
      { id: "se_tec12", spanish: "wifi", english: "wifi", example: "What's the wifi password?", exampleTranslation: "¿Cuál es la contraseña del wifi?" },
      { id: "se_tec13", spanish: "teclado", english: "keyboard", example: "My keyboard doesn't work", exampleTranslation: "Mi teclado no funciona" },
      { id: "se_tec14", spanish: "pantalla", english: "screen", example: "The screen is broken", exampleTranslation: "La pantalla está rota" },
      { id: "se_tec15", spanish: "batería", english: "battery", example: "The battery is low", exampleTranslation: "La batería está baja" }
    ]
  },

  healthcare_medicine: {
    name: "Salud y Medicina",
    icon: Stethoscope,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Vocabulario médico y de salud",
    words: [
      { id: "se_hea1", spanish: "doctor", english: "doctor", example: "I need to see a doctor", exampleTranslation: "Necesito ver a un doctor" },
      { id: "se_hea2", spanish: "enfermera", english: "nurse", example: "The nurse is very kind", exampleTranslation: "La enfermera es muy amable" },
      { id: "se_hea3", spanish: "hospital", english: "hospital", example: "He's in the hospital", exampleTranslation: "Está en el hospital" },
      { id: "se_hea4", spanish: "medicina", english: "medicine", example: "Take your medicine", exampleTranslation: "Toma tu medicina" },
      { id: "se_hea5", spanish: "dolor", english: "pain", example: "I have a headache", exampleTranslation: "Tengo dolor de cabeza" },
      { id: "se_hea6", spanish: "fiebre", english: "fever", example: "I have a fever", exampleTranslation: "Tengo fiebre" },
      { id: "se_hea7", spanish: "tos", english: "cough", example: "I have a terrible cough", exampleTranslation: "Tengo una tos terrible" },
      { id: "se_hea8", spanish: "resfriado", english: "cold", example: "I have a cold", exampleTranslation: "Tengo un resfriado" },
      { id: "se_hea9", spanish: "receta", english: "prescription", example: "I need a prescription", exampleTranslation: "Necesito una receta" },
      { id: "se_hea10", spanish: "farmacia", english: "pharmacy", example: "I'm going to the pharmacy", exampleTranslation: "Voy a la farmacia" },
      { id: "se_hea11", spanish: "cita", english: "appointment", example: "I have a doctor's appointment", exampleTranslation: "Tengo una cita con el doctor" },
      { id: "se_hea12", spanish: "emergencia", english: "emergency", example: "It's an emergency", exampleTranslation: "Es una emergencia" },
      { id: "se_hea13", spanish: "ambulancia", english: "ambulance", example: "Call an ambulance", exampleTranslation: "Llama a una ambulancia" },
      { id: "se_hea14", spanish: "salud", english: "health", example: "Health is important", exampleTranslation: "La salud es importante" },
      { id: "se_hea15", spanish: "seguro médico", english: "health insurance", example: "I have health insurance", exampleTranslation: "Tengo seguro médico" }
    ]
  },

  education_school: {
    name: "Educación y Escuela",
    icon: GraduationCap,
    color: "from-yellow-400 to-amber-500",
    level: "beginner",
    description: "Términos escolares y educativos",
    words: [
      { id: "se_edu1", spanish: "estudiante", english: "student", example: "I am a student", exampleTranslation: "Soy estudiante" },
      { id: "se_edu2", spanish: "profesor", english: "teacher", example: "My teacher is excellent", exampleTranslation: "Mi profesor es excelente" },
      { id: "se_edu3", spanish: "clase", english: "class", example: "I have class at nine", exampleTranslation: "Tengo clase a las nueve" },
      { id: "se_edu4", spanish: "tarea", english: "homework", example: "I have a lot of homework", exampleTranslation: "Tengo mucha tarea" },
      { id: "se_edu5", spanish: "examen", english: "exam", example: "The exam is tomorrow", exampleTranslation: "El examen es mañana" },
      { id: "se_edu6", spanish: "libro", english: "book", example: "Read this book", exampleTranslation: "Lee este libro" },
      { id: "se_edu7", spanish: "cuaderno", english: "notebook", example: "I need a new notebook", exampleTranslation: "Necesito un cuaderno nuevo" },
      { id: "se_edu8", spanish: "lápiz", english: "pencil", example: "Do you have a pencil?", exampleTranslation: "¿Tienes un lápiz?" },
      { id: "se_edu9", spanish: "bolígrafo", english: "pen", example: "Lend me your pen", exampleTranslation: "Préstame tu bolígrafo" },
      { id: "se_edu10", spanish: "mochila", english: "backpack", example: "My backpack is heavy", exampleTranslation: "Mi mochila es pesada" },
      { id: "se_edu11", spanish: "biblioteca", english: "library", example: "I study at the library", exampleTranslation: "Estudio en la biblioteca" },
      { id: "se_edu12", spanish: "universidad", english: "university", example: "I go to university", exampleTranslation: "Voy a la universidad" },
      { id: "se_edu13", spanish: "diploma", english: "diploma", example: "I received my diploma", exampleTranslation: "Recibí mi diploma" },
      { id: "se_edu14", spanish: "aprender", english: "learn", example: "I want to learn English", exampleTranslation: "Quiero aprender inglés" },
      { id: "se_edu15", spanish: "estudiar", english: "study", example: "I need to study more", exampleTranslation: "Necesito estudiar más" }
    ]
  },

  nature_environment: {
    name: "Naturaleza y Medio Ambiente",
    icon: TreePine,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    description: "Naturaleza y vocabulario ambiental",
    words: [
      { id: "se_nat1", spanish: "árbol", english: "tree", example: "The tree is big", exampleTranslation: "El árbol es grande" },
      { id: "se_nat2", spanish: "flor", english: "flower", example: "The flower is beautiful", exampleTranslation: "La flor es hermosa" },
      { id: "se_nat3", spanish: "río", english: "river", example: "The river is long", exampleTranslation: "El río es largo" },
      { id: "se_nat4", spanish: "montaña", english: "mountain", example: "The mountain is high", exampleTranslation: "La montaña es alta" },
      { id: "se_nat5", spanish: "playa", english: "beach", example: "Let's go to the beach", exampleTranslation: "Vamos a la playa" },
      { id: "se_nat6", spanish: "océano", english: "ocean", example: "The ocean is deep", exampleTranslation: "El océano es profundo" },
      { id: "se_nat7", spanish: "bosque", english: "forest", example: "We walk through the forest", exampleTranslation: "Caminamos por el bosque" },
      { id: "se_nat8", spanish: "desierto", english: "desert", example: "The desert is hot", exampleTranslation: "El desierto es caluroso" },
      { id: "se_nat9", spanish: "lago", english: "lake", example: "The lake is calm", exampleTranslation: "El lago es tranquilo" },
      { id: "se_nat10", spanish: "cielo", english: "sky", example: "The sky is blue", exampleTranslation: "El cielo está azul" },
      { id: "se_nat11", spanish: "estrella", english: "star", example: "The stars shine", exampleTranslation: "Las estrellas brillan" },
      { id: "se_nat12", spanish: "luna", english: "moon", example: "The moon is full", exampleTranslation: "La luna está llena" },
      { id: "se_nat13", spanish: "sol", english: "sun", example: "The sun is bright", exampleTranslation: "El sol está brillante" },
      { id: "se_nat14", spanish: "animal", english: "animal", example: "I like animals", exampleTranslation: "Me gustan los animales" },
      { id: "se_nat15", spanish: "planta", english: "plant", example: "I take care of my plants", exampleTranslation: "Cuido mis plantas" }
    ]
  }
};
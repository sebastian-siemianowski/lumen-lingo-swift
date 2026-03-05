/**
 * ENGLISH → SPANISH FLASHCARDS - PART 1
 * 
 * Native Language: English
 * Target Language: Spanish
 * 
 * This file contains beginner and some intermediate flashcard categories (1-15).
 */

import {
  Home,
  Heart,
  Users,
  Utensils,
  MapPin,
  Calendar,
  Sun,
  Briefcase,
  Plane,
  Coffee,
  BookOpen,
  Clock,
  Music,
  ShoppingCart,
  Building
} from "lucide-react";

export const flashcardsCategories_part1 = {
  greetings_basics: {
    name: "Greetings & Basics",
    description: "Essential greetings and basic phrases",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    level: "beginner",
    words: [
      { id: "greet1", english: "Hello", spanish: "Hola", difficulty: "easy", example: "Hola, ¿cómo estás?", exampleTranslation: "Hello, how are you?" },
      { id: "greet2", english: "Goodbye", spanish: "Adiós", difficulty: "easy", example: "Adiós, hasta luego", exampleTranslation: "Goodbye, see you later" },
      { id: "greet3", english: "Please", spanish: "Por favor", difficulty: "easy", example: "¿Me ayudas, por favor?", exampleTranslation: "Can you help me, please?" },
      { id: "greet4", english: "Thank you", spanish: "Gracias", difficulty: "easy", example: "Gracias por todo", exampleTranslation: "Thank you for everything" },
      { id: "greet5", english: "Yes", spanish: "Sí", difficulty: "easy", example: "Sí, claro", exampleTranslation: "Yes, of course" },
      { id: "greet6", english: "No", spanish: "No", difficulty: "easy", example: "No, gracias", exampleTranslation: "No, thank you" },
      { id: "greet7", english: "Good morning", spanish: "Buenos días", difficulty: "medium", example: "Buenos días, ¿cómo amaneciste?", exampleTranslation: "Good morning, how did you wake up?" },
      { id: "greet8", english: "Good night", spanish: "Buenas noches", difficulty: "medium", example: "Buenas noches, que descanses", exampleTranslation: "Good night, rest well" },
      { id: "greet9", english: "Excuse me", spanish: "Disculpe", difficulty: "medium", example: "Disculpe, ¿dónde está el baño?", exampleTranslation: "Excuse me, where is the bathroom?" },
      { id: "greet10", english: "I'm sorry", spanish: "Lo siento", difficulty: "medium", example: "Lo siento mucho", exampleTranslation: "I'm very sorry" },
      { id: "greet11", english: "You're welcome", spanish: "De nada", difficulty: "medium", example: "De nada, no hay problema", exampleTranslation: "You're welcome, no problem" },
      { id: "greet12", english: "How are you?", spanish: "¿Cómo estás?", difficulty: "medium", example: "¿Cómo estás hoy?", exampleTranslation: "How are you today?" },
      { id: "greet13", english: "Nice to meet you", spanish: "Mucho gusto", difficulty: "hard", example: "Mucho gusto en conocerte", exampleTranslation: "Nice to meet you" },
      { id: "greet14", english: "See you tomorrow", spanish: "Hasta mañana", difficulty: "hard", example: "Hasta mañana, que tengas buen día", exampleTranslation: "See you tomorrow, have a good day" },
      { id: "greet15", english: "Have a good day", spanish: "Que tengas buen día", difficulty: "hard", example: "¡Que tengas buen día!", exampleTranslation: "Have a good day!" }
    ]
  },

  family: {
    name: "Family",
    description: "Family members and relationships",
    icon: Users,
    color: "from-purple-500 to-indigo-500",
    level: "beginner",
    words: [
      { id: "fam1", english: "Mother", spanish: "Madre", difficulty: "easy", example: "Mi madre es muy amable", exampleTranslation: "My mother is very kind" },
      { id: "fam2", english: "Father", spanish: "Padre", difficulty: "easy", example: "Mi padre trabaja en una oficina", exampleTranslation: "My father works in an office" },
      { id: "fam3", english: "Sister", spanish: "Hermana", difficulty: "easy", example: "Tengo una hermana mayor", exampleTranslation: "I have an older sister" },
      { id: "fam4", english: "Brother", spanish: "Hermano", difficulty: "easy", example: "Mi hermano juega fútbol", exampleTranslation: "My brother plays soccer" },
      { id: "fam5", english: "Son", spanish: "Hijo", difficulty: "easy", example: "Mi hijo tiene cinco años", exampleTranslation: "My son is five years old" },
      { id: "fam6", english: "Daughter", spanish: "Hija", difficulty: "easy", example: "Mi hija está en la escuela", exampleTranslation: "My daughter is at school" },
      { id: "fam7", english: "Grandmother", spanish: "Abuela", difficulty: "medium", example: "Mi abuela cocina muy bien", exampleTranslation: "My grandmother cooks very well" },
      { id: "fam8", english: "Grandfather", spanish: "Abuelo", difficulty: "medium", example: "Mi abuelo cuenta historias interesantes", exampleTranslation: "My grandfather tells interesting stories" },
      { id: "fam9", english: "Aunt", spanish: "Tía", difficulty: "medium", example: "Mi tía vive en Madrid", exampleTranslation: "My aunt lives in Madrid" },
      { id: "fam10", english: "Uncle", spanish: "Tío", difficulty: "medium", example: "Mi tío es doctor", exampleTranslation: "My uncle is a doctor" },
      { id: "fam11", english: "Cousin", spanish: "Prima/Primo", difficulty: "medium", example: "Mi primo viene de visita", exampleTranslation: "My cousin is coming to visit" },
      { id: "fam12", english: "Parents", spanish: "Padres", difficulty: "medium", example: "Mis padres son muy trabajadores", exampleTranslation: "My parents are very hardworking" },
      { id: "fam13", english: "How many siblings do you have?", spanish: "¿Cuántos hermanos tienes?", difficulty: "hard", example: "¿Cuántos hermanos tienes? Tengo dos", exampleTranslation: "How many siblings do you have? I have two" },
      { id: "fam14", english: "My family is big", spanish: "Mi familia es grande", difficulty: "hard", example: "Mi familia es muy grande y unida", exampleTranslation: "My family is very big and close" },
      { id: "fam15", english: "I have a small family", spanish: "Tengo una familia pequeña", difficulty: "hard", example: "Tengo una familia pequeña pero feliz", exampleTranslation: "I have a small but happy family" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Basic counting and numbers",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    level: "beginner",
    words: [
      { id: "num1", english: "One", spanish: "Uno", difficulty: "easy", example: "Tengo un perro", exampleTranslation: "I have one dog" },
      { id: "num2", english: "Two", spanish: "Dos", difficulty: "easy", example: "Necesito dos boletos", exampleTranslation: "I need two tickets" },
      { id: "num3", english: "Three", spanish: "Tres", difficulty: "easy", example: "Hay tres manzanas", exampleTranslation: "There are three apples" },
      { id: "num4", english: "Four", spanish: "Cuatro", difficulty: "easy", example: "Son las cuatro de la tarde", exampleTranslation: "It's four in the afternoon" },
      { id: "num5", english: "Five", spanish: "Cinco", difficulty: "easy", example: "Tengo cinco dedos", exampleTranslation: "I have five fingers" },
      { id: "num6", english: "Ten", spanish: "Diez", difficulty: "easy", example: "Cuesta diez dólares", exampleTranslation: "It costs ten dollars" },
      { id: "num7", english: "Twenty", spanish: "Veinte", difficulty: "medium", example: "Tengo veinte años", exampleTranslation: "I am twenty years old" },
      { id: "num8", english: "Fifty", spanish: "Cincuenta", difficulty: "medium", example: "La cuenta es cincuenta euros", exampleTranslation: "The bill is fifty euros" },
      { id: "num9", english: "One hundred", spanish: "Cien", difficulty: "medium", example: "Cien personas vinieron", exampleTranslation: "One hundred people came" },
      { id: "num10", english: "One thousand", spanish: "Mil", difficulty: "medium", example: "Cuesta mil pesos", exampleTranslation: "It costs one thousand pesos" },
      { id: "num11", english: "First", spanish: "Primero", difficulty: "medium", example: "Es mi primer día", exampleTranslation: "It's my first day" },
      { id: "num12", english: "Second", spanish: "Segundo", difficulty: "medium", example: "El segundo piso", exampleTranslation: "The second floor" },
      { id: "num13", english: "How much is it?", spanish: "¿Cuánto cuesta?", difficulty: "hard", example: "¿Cuánto cuesta este libro?", exampleTranslation: "How much is this book?" },
      { id: "num14", english: "Can you count to ten?", spanish: "¿Puedes contar hasta diez?", difficulty: "hard", example: "¿Puedes contar hasta diez en español?", exampleTranslation: "Can you count to ten in Spanish?" },
      { id: "num15", english: "Give me a dozen", spanish: "Dame una docena", difficulty: "hard", example: "Dame una docena de huevos", exampleTranslation: "Give me a dozen eggs" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Common colors and descriptions",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "col1", english: "Red", spanish: "Rojo", difficulty: "easy", example: "El coche es rojo", exampleTranslation: "The car is red" },
      { id: "col2", english: "Blue", spanish: "Azul", difficulty: "easy", example: "El cielo es azul", exampleTranslation: "The sky is blue" },
      { id: "col3", english: "Green", spanish: "Verde", difficulty: "easy", example: "La hierba es verde", exampleTranslation: "The grass is green" },
      { id: "col4", english: "Yellow", spanish: "Amarillo", difficulty: "easy", example: "El sol es amarillo", exampleTranslation: "The sun is yellow" },
      { id: "col5", english: "Black", spanish: "Negro", difficulty: "easy", example: "Mi gato es negro", exampleTranslation: "My cat is black" },
      { id: "col6", english: "White", spanish: "Blanco", difficulty: "easy", example: "La nieve es blanca", exampleTranslation: "The snow is white" },
      { id: "col7", english: "Orange", spanish: "Naranja", difficulty: "medium", example: "Me gusta la naranja como fruta y color", exampleTranslation: "I like orange as a fruit and color" },
      { id: "col8", english: "Purple", spanish: "Morado", difficulty: "medium", example: "Su vestido es morado", exampleTranslation: "Her dress is purple" },
      { id: "col9", english: "Pink", spanish: "Rosa", difficulty: "medium", example: "Las flores son rosas", exampleTranslation: "The flowers are pink" },
      { id: "col10", english: "Brown", spanish: "Marrón", difficulty: "medium", example: "Mis zapatos son marrones", exampleTranslation: "My shoes are brown" },
      { id: "col11", english: "Gray", spanish: "Gris", difficulty: "medium", example: "El elefante es gris", exampleTranslation: "The elephant is gray" },
      { id: "col12", english: "Light", spanish: "Claro", difficulty: "medium", example: "Azul claro", exampleTranslation: "Light blue" },
      { id: "col13", english: "What color is it?", spanish: "¿De qué color es?", difficulty: "hard", example: "¿De qué color es tu coche?", exampleTranslation: "What color is your car?" },
      { id: "col14", english: "My favorite color is...", spanish: "Mi color favorito es...", difficulty: "hard", example: "Mi color favorito es el azul", exampleTranslation: "My favorite color is blue" },
      { id: "col15", english: "It's a dark color", spanish: "Es un color oscuro", difficulty: "hard", example: "Es un color oscuro y elegante", exampleTranslation: "It's a dark and elegant color" }
    ]
  },

  food_drink: {
    name: "Food & Drink",
    description: "Essential food and beverage vocabulary",
    icon: Utensils,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    words: [
      { id: "food1", english: "Water", spanish: "Agua", difficulty: "easy", example: "Quiero un vaso de agua, por favor", exampleTranslation: "I want a glass of water, please" },
      { id: "food2", english: "Bread", spanish: "Pan", difficulty: "easy", example: "El pan está muy fresco", exampleTranslation: "The bread is very fresh" },
      { id: "food3", english: "Coffee", spanish: "Café", difficulty: "easy", example: "Me gusta el café con leche", exampleTranslation: "I like coffee with milk" },
      { id: "food4", english: "Apple", spanish: "Manzana", difficulty: "easy", example: "Compré manzanas en el mercado", exampleTranslation: "I bought apples at the market" },
      { id: "food5", english: "Chicken", spanish: "Pollo", difficulty: "easy", example: "El pollo está delicioso", exampleTranslation: "The chicken is delicious" },
      { id: "food6", english: "Rice", spanish: "Arroz", difficulty: "easy", example: "Como arroz todos los días", exampleTranslation: "I eat rice every day" },
      { id: "food7", english: "Vegetables", spanish: "Verduras", difficulty: "medium", example: "Las verduras son muy saludables", exampleTranslation: "Vegetables are very healthy" },
      { id: "food8", english: "Breakfast", spanish: "Desayuno", difficulty: "medium", example: "El desayuno es la comida más importante", exampleTranslation: "Breakfast is the most important meal" },
      { id: "food9", english: "Dinner", spanish: "Cena", difficulty: "medium", example: "¿Qué hay para la cena?", exampleTranslation: "What's for dinner?" },
      { id: "food10", english: "Restaurant", spanish: "Restaurante", difficulty: "medium", example: "Vamos a un restaurante italiano", exampleTranslation: "We're going to an Italian restaurant" },
      { id: "food11", english: "Delicious", spanish: "Delicioso", difficulty: "medium", example: "Esta comida está deliciosa", exampleTranslation: "This food is delicious" },
      { id: "food12", english: "Menu", spanish: "Menú", difficulty: "medium", example: "¿Me trae el menú, por favor?", exampleTranslation: "Can you bring me the menu, please?" },
      { id: "food13", english: "I'm hungry", spanish: "Tengo hambre", difficulty: "hard", example: "Tengo mucha hambre, vamos a comer", exampleTranslation: "I'm very hungry, let's eat" },
      { id: "food14", english: "I'm thirsty", spanish: "Tengo sed", difficulty: "hard", example: "Tengo sed, necesito agua", exampleTranslation: "I'm thirsty, I need water" },
      { id: "food15", english: "Can I have the check?", spanish: "¿Me trae la cuenta?", difficulty: "hard", example: "¿Me trae la cuenta, por favor?", exampleTranslation: "Can I have the check, please?" }
    ]
  },

  time_dates: {
    name: "Time & Dates",
    description: "Telling time and discussing dates",
    icon: Calendar,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "time1", english: "Today", spanish: "Hoy", difficulty: "easy", example: "Hoy es lunes", exampleTranslation: "Today is Monday" },
      { id: "time2", english: "Tomorrow", spanish: "Mañana", difficulty: "easy", example: "Mañana voy al doctor", exampleTranslation: "Tomorrow I'm going to the doctor" },
      { id: "time3", english: "Yesterday", spanish: "Ayer", difficulty: "easy", example: "Ayer fue un buen día", exampleTranslation: "Yesterday was a good day" },
      { id: "time4", english: "Week", spanish: "Semana", difficulty: "easy", example: "La próxima semana", exampleTranslation: "Next week" },
      { id: "time5", english: "Month", spanish: "Mes", difficulty: "easy", example: "El mes de enero", exampleTranslation: "The month of January" },
      { id: "time6", english: "Year", spanish: "Año", difficulty: "easy", example: "Este año", exampleTranslation: "This year" },
      { id: "time7", english: "Morning", spanish: "Mañana", difficulty: "medium", example: "Por la mañana desayuno", exampleTranslation: "In the morning I have breakfast" },
      { id: "time8", english: "Afternoon", spanish: "Tarde", difficulty: "medium", example: "Por la tarde trabajo", exampleTranslation: "In the afternoon I work" },
      { id: "time9", english: "Night", spanish: "Noche", difficulty: "medium", example: "Por la noche duermo", exampleTranslation: "At night I sleep" },
      { id: "time10", english: "Hour", spanish: "Hora", difficulty: "medium", example: "¿Qué hora es?", exampleTranslation: "What time is it?" },
      { id: "time11", english: "Minute", spanish: "Minuto", difficulty: "medium", example: "Espera un minuto", exampleTranslation: "Wait a minute" },
      { id: "time12", english: "Now", spanish: "Ahora", difficulty: "medium", example: "Ahora mismo", exampleTranslation: "Right now" },
      { id: "time13", english: "What time is it?", spanish: "¿Qué hora es?", difficulty: "hard", example: "¿Qué hora es? Son las tres", exampleTranslation: "What time is it? It's three o'clock" },
      { id: "time14", english: "When is your birthday?", spanish: "¿Cuándo es tu cumpleaños?", difficulty: "hard", example: "¿Cuándo es tu cumpleaños? Es en mayo", exampleTranslation: "When is your birthday? It's in May" },
      { id: "time15", english: "See you later", spanish: "Hasta luego", difficulty: "hard", example: "Hasta luego, nos vemos pronto", exampleTranslation: "See you later, we'll see each other soon" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Weather conditions and climate",
    icon: Sun,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "weath1", english: "Sun", spanish: "Sol", difficulty: "easy", example: "Hace mucho sol hoy", exampleTranslation: "It's very sunny today" },
      { id: "weath2", english: "Rain", spanish: "Lluvia", difficulty: "easy", example: "Va a llover mañana", exampleTranslation: "It's going to rain tomorrow" },
      { id: "weath3", english: "Wind", spanish: "Viento", difficulty: "easy", example: "Hace mucho viento", exampleTranslation: "It's very windy" },
      { id: "weath4", english: "Cloud", spanish: "Nube", difficulty: "easy", example: "Hay muchas nubes", exampleTranslation: "There are many clouds" },
      { id: "weath5", english: "Hot", spanish: "Calor", difficulty: "easy", example: "Hace calor en verano", exampleTranslation: "It's hot in summer" },
      { id: "weath6", english: "Cold", spanish: "Frío", difficulty: "easy", example: "Hace frío en invierno", exampleTranslation: "It's cold in winter" },
      { id: "weath7", english: "Snow", spanish: "Nieve", difficulty: "medium", example: "Está nevando", exampleTranslation: "It's snowing" },
      { id: "weath8", english: "Temperature", spanish: "Temperatura", difficulty: "medium", example: "La temperatura es de 20 grados", exampleTranslation: "The temperature is 20 degrees" },
      { id: "weath9", english: "Storm", spanish: "Tormenta", difficulty: "medium", example: "Hay una tormenta fuerte", exampleTranslation: "There's a strong storm" },
      { id: "weath10", english: "Sunny", spanish: "Soleado", difficulty: "medium", example: "Es un día soleado", exampleTranslation: "It's a sunny day" },
      { id: "weath11", english: "Cloudy", spanish: "Nublado", difficulty: "medium", example: "Está nublado", exampleTranslation: "It's cloudy" },
      { id: "weath12", english: "Clear", spanish: "Despejado", difficulty: "medium", example: "El cielo está despejado", exampleTranslation: "The sky is clear" },
      { id: "weath13", english: "How's the weather?", spanish: "¿Cómo está el tiempo?", difficulty: "hard", example: "¿Cómo está el tiempo hoy?", exampleTranslation: "How's the weather today?" },
      { id: "weath14", english: "It's nice weather", spanish: "Hace buen tiempo", difficulty: "hard", example: "Hace buen tiempo para caminar", exampleTranslation: "It's nice weather for walking" },
      { id: "weath15", english: "It's bad weather", spanish: "Hace mal tiempo", difficulty: "hard", example: "Hace mal tiempo, mejor quedarnos en casa", exampleTranslation: "It's bad weather, better to stay home" }
    ]
  },

  places: {
    name: "Places",
    description: "Common locations and buildings",
    icon: Building,
    color: "from-indigo-500 to-purple-500",
    level: "beginner",
    words: [
      { id: "place1", english: "House", spanish: "Casa", difficulty: "easy", example: "Mi casa es grande", exampleTranslation: "My house is big" },
      { id: "place2", english: "School", spanish: "Escuela", difficulty: "easy", example: "Voy a la escuela", exampleTranslation: "I go to school" },
      { id: "place3", english: "Hospital", spanish: "Hospital", difficulty: "easy", example: "El hospital está cerca", exampleTranslation: "The hospital is close" },
      { id: "place4", english: "Store", spanish: "Tienda", difficulty: "easy", example: "Hay una tienda en la esquina", exampleTranslation: "There's a store on the corner" },
      { id: "place5", english: "Park", spanish: "Parque", difficulty: "easy", example: "Vamos al parque", exampleTranslation: "Let's go to the park" },
      { id: "place6", english: "Bank", spanish: "Banco", difficulty: "easy", example: "Necesito ir al banco", exampleTranslation: "I need to go to the bank" },
      { id: "place7", english: "Post office", spanish: "Oficina de correos", difficulty: "medium", example: "La oficina de correos abre a las nueve", exampleTranslation: "The post office opens at nine" },
      { id: "place8", english: "Library", spanish: "Biblioteca", difficulty: "medium", example: "Estudio en la biblioteca", exampleTranslation: "I study at the library" },
      { id: "place9", english: "Airport", spanish: "Aeropuerto", difficulty: "medium", example: "Voy al aeropuerto", exampleTranslation: "I'm going to the airport" },
      { id: "place10", english: "Hotel", spanish: "Hotel", difficulty: "medium", example: "Me quedo en un hotel", exampleTranslation: "I'm staying at a hotel" },
      { id: "place11", english: "Market", spanish: "Mercado", difficulty: "medium", example: "Compro frutas en el mercado", exampleTranslation: "I buy fruits at the market" },
      { id: "place12", english: "Cinema", spanish: "Cine", difficulty: "medium", example: "Vamos al cine esta noche", exampleTranslation: "We're going to the cinema tonight" },
      { id: "place13", english: "Where is the...?", spanish: "¿Dónde está el/la...?", difficulty: "hard", example: "¿Dónde está la estación de tren?", exampleTranslation: "Where is the train station?" },
      { id: "place14", english: "Is it far from here?", spanish: "¿Está lejos de aquí?", difficulty: "hard", example: "¿Está lejos de aquí el museo?", exampleTranslation: "Is the museum far from here?" },
      { id: "place15", english: "How do I get to...?", spanish: "¿Cómo llego a...?", difficulty: "hard", example: "¿Cómo llego al centro?", exampleTranslation: "How do I get to downtown?" }
    ]
  },

  body_parts: {
    name: "Body Parts",
    description: "Parts of the human body",
    icon: Heart,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "body1", english: "Head", spanish: "Cabeza", difficulty: "easy", example: "Me duele la cabeza", exampleTranslation: "My head hurts" },
      { id: "body2", english: "Eye", spanish: "Ojo", difficulty: "easy", example: "Tengo los ojos azules", exampleTranslation: "I have blue eyes" },
      { id: "body3", english: "Ear", spanish: "Oreja", difficulty: "easy", example: "Mis orejas son grandes", exampleTranslation: "My ears are big" },
      { id: "body4", english: "Nose", spanish: "Nariz", difficulty: "easy", example: "Mi nariz está congestionada", exampleTranslation: "My nose is congested" },
      { id: "body5", english: "Mouth", spanish: "Boca", difficulty: "easy", example: "Abre la boca", exampleTranslation: "Open your mouth" },
      { id: "body6", english: "Hand", spanish: "Mano", difficulty: "easy", example: "Dame la mano", exampleTranslation: "Give me your hand" },
      { id: "body7", english: "Foot", spanish: "Pie", difficulty: "medium", example: "Me duele el pie", exampleTranslation: "My foot hurts" },
      { id: "body8", english: "Arm", spanish: "Brazo", difficulty: "medium", example: "Me rompí el brazo", exampleTranslation: "I broke my arm" },
      { id: "body9", english: "Leg", spanish: "Pierna", difficulty: "medium", example: "Mis piernas están cansadas", exampleTranslation: "My legs are tired" },
      { id: "body10", english: "Finger", spanish: "Dedo", difficulty: "medium", example: "Me corté el dedo", exampleTranslation: "I cut my finger" },
      { id: "body11", english: "Heart", spanish: "Corazón", difficulty: "medium", example: "Mi corazón late rápido", exampleTranslation: "My heart beats fast" },
      { id: "body12", english: "Stomach", spanish: "Estómago", difficulty: "medium", example: "Me duele el estómago", exampleTranslation: "My stomach hurts" },
      { id: "body13", english: "I have a headache", spanish: "Tengo dolor de cabeza", difficulty: "hard", example: "Tengo un fuerte dolor de cabeza", exampleTranslation: "I have a strong headache" },
      { id: "body14", english: "I hurt my...", spanish: "Me lastimé...", difficulty: "hard", example: "Me lastimé la rodilla jugando", exampleTranslation: "I hurt my knee playing" },
      { id: "body15", english: "My...hurts", spanish: "Me duele...", difficulty: "hard", example: "Me duele todo el cuerpo", exampleTranslation: "My whole body hurts" }
    ]
  },

  transportation: {
    name: "Transportation",
    description: "Modes of transportation and travel",
    icon: Plane,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "trans1", english: "Car", spanish: "Coche", difficulty: "easy", example: "Tengo un coche nuevo", exampleTranslation: "I have a new car" },
      { id: "trans2", english: "Bus", spanish: "Autobús", difficulty: "easy", example: "Tomo el autobús al trabajo", exampleTranslation: "I take the bus to work" },
      { id: "trans3", english: "Train", spanish: "Tren", difficulty: "easy", example: "El tren llega a las cinco", exampleTranslation: "The train arrives at five" },
      { id: "trans4", english: "Plane", spanish: "Avión", difficulty: "easy", example: "Viajo en avión", exampleTranslation: "I travel by plane" },
      { id: "trans5", english: "Bicycle", spanish: "Bicicleta", difficulty: "easy", example: "Voy en bicicleta", exampleTranslation: "I go by bicycle" },
      { id: "trans6", english: "Taxi", spanish: "Taxi", difficulty: "easy", example: "Llamé un taxi", exampleTranslation: "I called a taxi" },
      { id: "trans7", english: "Subway", spanish: "Metro", difficulty: "medium", example: "El metro es rápido", exampleTranslation: "The subway is fast" },
      { id: "trans8", english: "Boat", spanish: "Barco", difficulty: "medium", example: "Cruzamos el río en barco", exampleTranslation: "We cross the river by boat" },
      { id: "trans9", english: "Motorcycle", spanish: "Motocicleta", difficulty: "medium", example: "Mi hermano tiene una motocicleta", exampleTranslation: "My brother has a motorcycle" },
      { id: "trans10", english: "Ticket", spanish: "Boleto", difficulty: "medium", example: "Necesito comprar un boleto", exampleTranslation: "I need to buy a ticket" },
      { id: "trans11", english: "Station", spanish: "Estación", difficulty: "medium", example: "La estación está cerca", exampleTranslation: "The station is close" },
      { id: "trans12", english: "Driver", spanish: "Conductor", difficulty: "medium", example: "El conductor es muy amable", exampleTranslation: "The driver is very kind" },
      { id: "trans13", english: "How do you get to work?", spanish: "¿Cómo llegas al trabajo?", difficulty: "hard", example: "¿Cómo llegas al trabajo? En metro", exampleTranslation: "How do you get to work? By subway" },
      { id: "trans14", english: "How long does it take?", spanish: "¿Cuánto tiempo tarda?", difficulty: "hard", example: "¿Cuánto tiempo tarda el viaje?", exampleTranslation: "How long does the trip take?" },
      { id: "trans15", english: "I'm going by...", spanish: "Voy en...", difficulty: "hard", example: "Voy en tren a Barcelona", exampleTranslation: "I'm going to Barcelona by train" }
    ]
  },

  work_office: {
    name: "Work & Office",
    description: "Workplace and professional vocabulary",
    icon: Briefcase,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "work1", english: "Work", spanish: "Trabajo", difficulty: "easy", example: "Voy al trabajo", exampleTranslation: "I'm going to work" },
      { id: "work2", english: "Office", spanish: "Oficina", difficulty: "easy", example: "Estoy en la oficina", exampleTranslation: "I'm at the office" },
      { id: "work3", english: "Boss", spanish: "Jefe", difficulty: "easy", example: "Mi jefe es muy bueno", exampleTranslation: "My boss is very good" },
      { id: "work4", english: "Employee", spanish: "Empleado", difficulty: "easy", example: "Soy empleado de esta compañía", exampleTranslation: "I'm an employee of this company" },
      { id: "work5", english: "Colleague", spanish: "Colega", difficulty: "easy", example: "Mis colegas son amables", exampleTranslation: "My colleagues are kind" },
      { id: "work6", english: "Computer", spanish: "Computadora", difficulty: "easy", example: "Trabajo en la computadora", exampleTranslation: "I work on the computer" },
      { id: "work7", english: "Meeting", spanish: "Reunión", difficulty: "medium", example: "Tengo una reunión a las tres", exampleTranslation: "I have a meeting at three" },
      { id: "work8", english: "Project", spanish: "Proyecto", difficulty: "medium", example: "Estoy trabajando en un proyecto nuevo", exampleTranslation: "I'm working on a new project" },
      { id: "work9", english: "Deadline", spanish: "Fecha límite", difficulty: "medium", example: "La fecha límite es mañana", exampleTranslation: "The deadline is tomorrow" },
      { id: "work10", english: "Salary", spanish: "Salario", difficulty: "medium", example: "Mi salario es bueno", exampleTranslation: "My salary is good" },
      { id: "work11", english: "Contract", spanish: "Contrato", difficulty: "medium", example: "Firmé el contrato", exampleTranslation: "I signed the contract" },
      { id: "work12", english: "Experience", spanish: "Experiencia", difficulty: "medium", example: "Tengo cinco años de experiencia", exampleTranslation: "I have five years of experience" },
      { id: "work13", english: "What do you do for a living?", spanish: "¿A qué te dedicas?", difficulty: "hard", example: "¿A qué te dedicas? Soy ingeniero", exampleTranslation: "What do you do for a living? I'm an engineer" },
      { id: "work14", english: "I work in...", spanish: "Trabajo en...", difficulty: "hard", example: "Trabajo en el departamento de marketing", exampleTranslation: "I work in the marketing department" },
      { id: "work15", english: "I'm looking for a job", spanish: "Estoy buscando trabajo", difficulty: "hard", example: "Estoy buscando trabajo en tecnología", exampleTranslation: "I'm looking for a job in technology" }
    ]
  },

  education: {
    name: "Education",
    description: "School and learning vocabulary",
    icon: BookOpen,
    color: "from-teal-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "edu1", english: "School", spanish: "Escuela", difficulty: "easy", example: "Voy a la escuela", exampleTranslation: "I go to school" },
      { id: "edu2", english: "Teacher", spanish: "Profesor", difficulty: "easy", example: "Mi profesor es muy bueno", exampleTranslation: "My teacher is very good" },
      { id: "edu3", english: "Student", spanish: "Estudiante", difficulty: "easy", example: "Soy estudiante", exampleTranslation: "I'm a student" },
      { id: "edu4", english: "Class", spanish: "Clase", difficulty: "easy", example: "Tengo clase de español", exampleTranslation: "I have Spanish class" },
      { id: "edu5", english: "Book", spanish: "Libro", difficulty: "easy", example: "Leo un libro interesante", exampleTranslation: "I'm reading an interesting book" },
      { id: "edu6", english: "Homework", spanish: "Tarea", difficulty: "easy", example: "Hago mi tarea", exampleTranslation: "I do my homework" },
      { id: "edu7", english: "Exam", spanish: "Examen", difficulty: "medium", example: "Tengo un examen mañana", exampleTranslation: "I have an exam tomorrow" },
      { id: "edu8", english: "Learn", spanish: "Aprender", difficulty: "medium", example: "Quiero aprender español", exampleTranslation: "I want to learn Spanish" },
      { id: "edu9", english: "Study", spanish: "Estudiar", difficulty: "medium", example: "Estudio todos los días", exampleTranslation: "I study every day" },
      { id: "edu10", english: "University", spanish: "Universidad", difficulty: "medium", example: "Voy a la universidad", exampleTranslation: "I go to university" },
      { id: "edu11", english: "Grade", spanish: "Nota", difficulty: "medium", example: "Saqué buena nota", exampleTranslation: "I got a good grade" },
      { id: "edu12", english: "Lesson", spanish: "Lección", difficulty: "medium", example: "La lección fue interesante", exampleTranslation: "The lesson was interesting" },
      { id: "edu13", english: "What are you studying?", spanish: "¿Qué estudias?", difficulty: "hard", example: "¿Qué estudias en la universidad?", exampleTranslation: "What are you studying at university?" },
      { id: "edu14", english: "I'm majoring in...", spanish: "Estudio la carrera de...", difficulty: "hard", example: "Estudio la carrera de medicina", exampleTranslation: "I'm majoring in medicine" },
      { id: "edu15", english: "When do you graduate?", spanish: "¿Cuándo te gradúas?", difficulty: "hard", example: "¿Cuándo te gradúas? En junio", exampleTranslation: "When do you graduate? In June" }
    ]
  },

  hobbies_activities: {
    name: "Hobbies & Activities",
    description: "Leisure activities and interests",
    icon: Music,
    color: "from-fuchsia-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "hobby1", english: "Read", spanish: "Leer", difficulty: "easy", example: "Me gusta leer libros", exampleTranslation: "I like to read books" },
      { id: "hobby2", english: "Write", spanish: "Escribir", difficulty: "easy", example: "Escribo en mi diario", exampleTranslation: "I write in my diary" },
      { id: "hobby3", english: "Play", spanish: "Jugar", difficulty: "easy", example: "Juego fútbol los domingos", exampleTranslation: "I play soccer on Sundays" },
      { id: "hobby4", english: "Watch", spanish: "Ver", difficulty: "easy", example: "Veo películas", exampleTranslation: "I watch movies" },
      { id: "hobby5", english: "Listen", spanish: "Escuchar", difficulty: "easy", example: "Escucho música", exampleTranslation: "I listen to music" },
      { id: "hobby6", english: "Dance", spanish: "Bailar", difficulty: "easy", example: "Me encanta bailar", exampleTranslation: "I love to dance" },
      { id: "hobby7", english: "Sing", spanish: "Cantar", difficulty: "medium", example: "Canto en un coro", exampleTranslation: "I sing in a choir" },
      { id: "hobby8", english: "Draw", spanish: "Dibujar", difficulty: "medium", example: "Dibujo en mi tiempo libre", exampleTranslation: "I draw in my free time" },
      { id: "hobby9", english: "Paint", spanish: "Pintar", difficulty: "medium", example: "Pinto paisajes", exampleTranslation: "I paint landscapes" },
      { id: "hobby10", english: "Cook", spanish: "Cocinar", difficulty: "medium", example: "Cocino para mi familia", exampleTranslation: "I cook for my family" },
      { id: "hobby11", english: "Travel", spanish: "Viajar", difficulty: "medium", example: "Me gusta viajar", exampleTranslation: "I like to travel" },
      { id: "hobby12", english: "Exercise", spanish: "Hacer ejercicio", difficulty: "medium", example: "Hago ejercicio todos los días", exampleTranslation: "I exercise every day" },
      { id: "hobby13", english: "What do you like to do?", spanish: "¿Qué te gusta hacer?", difficulty: "hard", example: "¿Qué te gusta hacer en tu tiempo libre?", exampleTranslation: "What do you like to do in your free time?" },
      { id: "hobby14", english: "In my free time I...", spanish: "En mi tiempo libre...", difficulty: "hard", example: "En mi tiempo libre leo y escucho música", exampleTranslation: "In my free time I read and listen to music" },
      { id: "hobby15", english: "My hobby is...", spanish: "Mi pasatiempo es...", difficulty: "hard", example: "Mi pasatiempo favorito es la fotografía", exampleTranslation: "My favorite hobby is photography" }
    ]
  },

  shopping: {
    name: "Shopping",
    description: "Shopping and purchasing vocabulary",
    icon: ShoppingCart,
    color: "from-rose-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "shop1", english: "Buy", spanish: "Comprar", difficulty: "easy", example: "Voy a comprar pan", exampleTranslation: "I'm going to buy bread" },
      { id: "shop2", english: "Sell", spanish: "Vender", difficulty: "easy", example: "Vendo mi coche", exampleTranslation: "I'm selling my car" },
      { id: "shop3", english: "Price", spanish: "Precio", difficulty: "easy", example: "¿Cuál es el precio?", exampleTranslation: "What's the price?" },
      { id: "shop4", english: "Money", spanish: "Dinero", difficulty: "easy", example: "No tengo dinero", exampleTranslation: "I don't have money" },
      { id: "shop5", english: "Cash", spanish: "Efectivo", difficulty: "easy", example: "Pago en efectivo", exampleTranslation: "I pay in cash" },
      { id: "shop6", english: "Card", spanish: "Tarjeta", difficulty: "easy", example: "Pago con tarjeta", exampleTranslation: "I pay with card" },
      { id: "shop7", english: "Expensive", spanish: "Caro", difficulty: "medium", example: "Es muy caro", exampleTranslation: "It's very expensive" },
      { id: "shop8", english: "Cheap", spanish: "Barato", difficulty: "medium", example: "Es muy barato", exampleTranslation: "It's very cheap" },
      { id: "shop9", english: "Discount", spanish: "Descuento", difficulty: "medium", example: "Hay un descuento del 20%", exampleTranslation: "There's a 20% discount" },
      { id: "shop10", english: "Receipt", spanish: "Recibo", difficulty: "medium", example: "Necesito el recibo", exampleTranslation: "I need the receipt" },
      { id: "shop11", english: "Change", spanish: "Cambio", difficulty: "medium", example: "Aquí está su cambio", exampleTranslation: "Here's your change" },
      { id: "shop12", english: "Shopping bag", spanish: "Bolsa de compras", difficulty: "medium", example: "¿Necesita una bolsa de compras?", exampleTranslation: "Do you need a shopping bag?" },
      { id: "shop13", english: "How much does it cost?", spanish: "¿Cuánto cuesta?", difficulty: "hard", example: "¿Cuánto cuesta este libro?", exampleTranslation: "How much does this book cost?" },
      { id: "shop14", english: "Can I try it on?", spanish: "¿Puedo probármelo?", difficulty: "hard", example: "¿Puedo probarme esta chaqueta?", exampleTranslation: "Can I try on this jacket?" },
      { id: "shop15", english: "Do you accept credit cards?", spanish: "¿Aceptan tarjetas de crédito?", difficulty: "hard", example: "¿Aceptan tarjetas de crédito aquí?", exampleTranslation: "Do you accept credit cards here?" }
    ]
  }
};
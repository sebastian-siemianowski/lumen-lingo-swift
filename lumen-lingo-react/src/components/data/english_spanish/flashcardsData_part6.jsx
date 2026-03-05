/**
 * ENGLISH → SPANISH FLASHCARDS - PART 6
 * 
 * Native Language: English
 * Target Language: Spanish
 * 
 * This file contains additional flashcard categories (76-90).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Shield,
  Droplet,
  Mountain,
  IceCream,
  Coffee,
  BookOpen,
  Wrench,
  Heart,
  Newspaper,
  Church,
  Moon,
  Waves,
  Users,
  Eye,
  Hammer,
  Building,
  TreePine,
  Sun,
  Home,
  MessageCircle
} from "lucide-react";

export const flashcardsCategories_part6 = {
  crime_safety: {
    name: "Crime & Safety",
    description: "Security and crime-related vocabulary",
    icon: Shield,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { id: "crime1", english: "Safe", spanish: "Seguro", difficulty: "easy", example: "Este vecindario es muy seguro para caminar de noche", exampleTranslation: "This neighborhood is very safe for walking at night" },
      { id: "crime2", english: "Dangerous", spanish: "Peligroso", difficulty: "easy", example: "Es peligroso caminar solo por esa zona a altas horas", exampleTranslation: "It's dangerous to walk alone in that area late at night" },
      { id: "crime3", english: "Thief", spanish: "Ladrón", difficulty: "easy", example: "Un ladrón entró a la casa cuando no había nadie", exampleTranslation: "A thief entered the house when nobody was there" },
      { id: "crime4", english: "Steal", spanish: "Robar", difficulty: "easy", example: "Alguien intentó robar mi bicicleta del estacionamiento", exampleTranslation: "Someone tried to steal my bicycle from the parking lot" },
      { id: "crime5", english: "Police officer", spanish: "Policía", difficulty: "easy", example: "El policía patrulla las calles todas las noches", exampleTranslation: "The police officer patrols the streets every night" },
      { id: "crime6", english: "Witness", spanish: "Testigo", difficulty: "easy", example: "Fui testigo del accidente que ocurrió en la esquina", exampleTranslation: "I was a witness to the accident that happened on the corner" },
      { id: "crime7", english: "Crime", spanish: "Crimen", difficulty: "medium", example: "La tasa de criminalidad ha disminuido en los últimos años", exampleTranslation: "The crime rate has decreased in recent years" },
      { id: "crime8", english: "Robbery", spanish: "Robo", difficulty: "medium", example: "Hubo un robo en el banco del centro ayer por la tarde", exampleTranslation: "There was a robbery at the downtown bank yesterday afternoon" },
      { id: "crime9", english: "Alarm", spanish: "Alarma", difficulty: "medium", example: "Instalamos una alarma de seguridad en nuestra casa nueva", exampleTranslation: "We installed a security alarm in our new house" },
      { id: "crime10", english: "Lock", spanish: "Cerradura", difficulty: "medium", example: "Cambiamos todas las cerraduras después de mudarnos", exampleTranslation: "We changed all the locks after moving in" },
      { id: "crime11", english: "Suspect", spanish: "Sospechoso", difficulty: "medium", example: "La policía interrogó al sospechoso durante varias horas", exampleTranslation: "The police questioned the suspect for several hours" },
      { id: "crime12", english: "Investigation", spanish: "Investigación", difficulty: "medium", example: "La investigación del caso continúa después de dos meses", exampleTranslation: "The investigation of the case continues after two months" },
      { id: "crime13", english: "I need to report...", spanish: "Necesito denunciar...", difficulty: "hard", example: "Necesito denunciar el robo de mi cartera que ocurrió esta mañana", exampleTranslation: "I need to report the theft of my wallet that happened this morning" },
      { id: "crime14", english: "Someone broke into...", spanish: "Alguien irrumpió en...", difficulty: "hard", example: "Alguien irrumpió en mi coche mientras estaba estacionado", exampleTranslation: "Someone broke into my car while it was parked" },
      { id: "crime15", english: "Stay alert and vigilant", spanish: "Mantente alerta y vigilante", difficulty: "hard", example: "Mantente siempre alerta y vigilante cuando camines por áreas desconocidas", exampleTranslation: "Always stay alert and vigilant when walking through unfamiliar areas" }
    ]
  },

  beverages_drinks: {
    name: "Beverages & Drinks",
    description: "All types of drinks and beverages",
    icon: Coffee,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "bev1", english: "Water", spanish: "Agua", difficulty: "easy", example: "Bebo ocho vasos de agua todos los días", exampleTranslation: "I drink eight glasses of water every day" },
      { id: "bev2", english: "Coffee", spanish: "Café", difficulty: "easy", example: "Me encanta tomar café con leche por las mañanas", exampleTranslation: "I love having coffee with milk in the mornings" },
      { id: "bev3", english: "Tea", spanish: "Té", difficulty: "easy", example: "El té verde es muy bueno para la salud", exampleTranslation: "Green tea is very good for your health" },
      { id: "bev4", english: "Juice", spanish: "Jugo", difficulty: "easy", example: "Prefiero el jugo de naranja recién exprimido", exampleTranslation: "I prefer freshly squeezed orange juice" },
      { id: "bev5", english: "Milk", spanish: "Leche", difficulty: "easy", example: "Los niños deben beber leche para crecer fuertes", exampleTranslation: "Children should drink milk to grow strong" },
      { id: "bev6", english: "Soda", spanish: "Refresco", difficulty: "easy", example: "Trato de evitar los refrescos porque tienen mucha azúcar", exampleTranslation: "I try to avoid sodas because they have a lot of sugar" },
      { id: "bev7", english: "Hot chocolate", spanish: "Chocolate caliente", difficulty: "medium", example: "El chocolate caliente es perfecto para las noches frías de invierno", exampleTranslation: "Hot chocolate is perfect for cold winter nights" },
      { id: "bev8", english: "Smoothie", spanish: "Batido", difficulty: "medium", example: "Preparo un batido de frutas todas las mañanas para el desayuno", exampleTranslation: "I make a fruit smoothie every morning for breakfast" },
      { id: "bev9", english: "Lemonade", spanish: "Limonada", difficulty: "medium", example: "La limonada casera es refrescante en los días calurosos de verano", exampleTranslation: "Homemade lemonade is refreshing on hot summer days" },
      { id: "bev10", english: "Energy drink", spanish: "Bebida energética", difficulty: "medium", example: "Las bebidas energéticas pueden ser peligrosas si se consumen en exceso", exampleTranslation: "Energy drinks can be dangerous if consumed in excess" },
      { id: "bev11", english: "Sparkling water", spanish: "Agua con gas", difficulty: "medium", example: "Me gusta el agua con gas porque tiene burbujas refrescantes", exampleTranslation: "I like sparkling water because it has refreshing bubbles" },
      { id: "bev12", english: "Iced coffee", spanish: "Café helado", difficulty: "medium", example: "El café helado es mi bebida favorita durante el verano", exampleTranslation: "Iced coffee is my favorite drink during summer" },
      { id: "bev13", english: "What would you like to drink?", spanish: "¿Qué te gustaría tomar?", difficulty: "hard", example: "¿Qué te gustaría tomar? Tenemos café, té y jugos naturales", exampleTranslation: "What would you like to drink? We have coffee, tea, and natural juices" },
      { id: "bev14", english: "I'll have...", spanish: "Voy a tomar...", difficulty: "hard", example: "Voy a tomar un té verde con miel y limón, por favor", exampleTranslation: "I'll have a green tea with honey and lemon, please" },
      { id: "bev15", english: "This drink is very refreshing", spanish: "Esta bebida es muy refrescante", difficulty: "hard", example: "Esta bebida es muy refrescante, especialmente después de hacer ejercicio", exampleTranslation: "This drink is very refreshing, especially after exercising" }
    ]
  },

  desserts_sweets: {
    name: "Desserts & Sweets",
    description: "Sweet treats and desserts",
    icon: IceCream,
    color: "from-pink-400 to-fuchsia-500",
    level: "beginner",
    words: [
      { id: "sweet1", english: "Cake", spanish: "Pastel", difficulty: "easy", example: "El pastel de chocolate es mi postre favorito de todos", exampleTranslation: "Chocolate cake is my favorite dessert of all" },
      { id: "sweet2", english: "Ice cream", spanish: "Helado", difficulty: "easy", example: "Me encanta comer helado de vainilla en los días calurosos", exampleTranslation: "I love eating vanilla ice cream on hot days" },
      { id: "sweet3", english: "Cookie", spanish: "Galleta", difficulty: "easy", example: "Mi abuela hace las galletas de avena más deliciosas", exampleTranslation: "My grandmother makes the most delicious oatmeal cookies" },
      { id: "sweet4", english: "Candy", spanish: "Dulce", difficulty: "easy", example: "Los niños comieron demasiados dulces en la fiesta de cumpleaños", exampleTranslation: "The children ate too many candies at the birthday party" },
      { id: "sweet5", english: "Chocolate", spanish: "Chocolate", difficulty: "easy", example: "El chocolate negro es más saludable que el chocolate con leche", exampleTranslation: "Dark chocolate is healthier than milk chocolate" },
      { id: "sweet6", english: "Pie", spanish: "Tarta", difficulty: "easy", example: "La tarta de manzana casera huele increíblemente bien", exampleTranslation: "Homemade apple pie smells incredibly good" },
      { id: "sweet7", english: "Pudding", spanish: "Pudín", difficulty: "medium", example: "El pudín de chocolate es un postre cremoso y delicioso", exampleTranslation: "Chocolate pudding is a creamy and delicious dessert" },
      { id: "sweet8", english: "Donut", spanish: "Dona", difficulty: "medium", example: "Compré una docena de donas glaseadas para la oficina", exampleTranslation: "I bought a dozen glazed donuts for the office" },
      { id: "sweet9", english: "Cupcake", spanish: "Magdalena", difficulty: "medium", example: "Las magdalenas decoradas son perfectas para fiestas infantiles", exampleTranslation: "Decorated cupcakes are perfect for children's parties" },
      { id: "sweet10", english: "Brownie", spanish: "Brownie", difficulty: "medium", example: "Los brownies recién horneados están calientes y suaves por dentro", exampleTranslation: "Freshly baked brownies are hot and soft inside" },
      { id: "sweet11", english: "Cheesecake", spanish: "Tarta de queso", difficulty: "medium", example: "La tarta de queso con fresas frescas es mi postre especial", exampleTranslation: "Cheesecake with fresh strawberries is my special dessert" },
      { id: "sweet12", english: "Tiramisu", spanish: "Tiramisú", difficulty: "medium", example: "El tiramisú italiano tradicional lleva café y cacao en polvo", exampleTranslation: "Traditional Italian tiramisu has coffee and cocoa powder" },
      { id: "sweet13", english: "I have a sweet tooth", spanish: "Me encantan los dulces", difficulty: "hard", example: "Me encantan los dulces y siempre pido postre después de cenar", exampleTranslation: "I have a sweet tooth and always order dessert after dinner" },
      { id: "sweet14", english: "This is too sweet", spanish: "Esto está demasiado dulce", difficulty: "hard", example: "Este pastel está demasiado dulce para mi gusto, prefiero menos azúcar", exampleTranslation: "This cake is too sweet for my taste, I prefer less sugar" },
      { id: "sweet15", english: "Would you like dessert?", spanish: "¿Quieres postre?", difficulty: "hard", example: "¿Quieres postre o prefieres un café después de la comida?", exampleTranslation: "Would you like dessert or do you prefer coffee after the meal?" }
    ]
  },

  school_subjects: {
    name: "School Subjects",
    description: "Academic subjects and disciplines",
    icon: BookOpen,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "subj1", english: "Mathematics", spanish: "Matemáticas", difficulty: "easy", example: "Las matemáticas son mi materia favorita en la escuela", exampleTranslation: "Mathematics is my favorite subject at school" },
      { id: "subj2", english: "Science", spanish: "Ciencias", difficulty: "easy", example: "En la clase de ciencias estudiamos el sistema solar", exampleTranslation: "In science class we study the solar system" },
      { id: "subj3", english: "History", spanish: "Historia", difficulty: "easy", example: "La historia mundial es fascinante y educativa", exampleTranslation: "World history is fascinating and educational" },
      { id: "subj4", english: "Geography", spanish: "Geografía", difficulty: "easy", example: "En geografía aprendemos sobre diferentes países y culturas", exampleTranslation: "In geography we learn about different countries and cultures" },
      { id: "subj5", english: "Art", spanish: "Arte", difficulty: "easy", example: "La clase de arte nos permite expresar nuestra creatividad", exampleTranslation: "Art class allows us to express our creativity" },
      { id: "subj6", english: "Physical Education", spanish: "Educación Física", difficulty: "easy", example: "La educación física es importante para mantenernos activos y saludables", exampleTranslation: "Physical education is important to keep us active and healthy" },
      { id: "subj7", english: "Literature", spanish: "Literatura", difficulty: "medium", example: "Estudiamos literatura clásica española en el curso avanzado", exampleTranslation: "We study classical Spanish literature in the advanced course" },
      { id: "subj8", english: "Chemistry", spanish: "Química", difficulty: "medium", example: "La química puede ser difícil pero es muy interesante", exampleTranslation: "Chemistry can be difficult but it's very interesting" },
      { id: "subj9", english: "Physics", spanish: "Física", difficulty: "medium", example: "La física explica cómo funciona el universo a nuestro alrededor", exampleTranslation: "Physics explains how the universe around us works" },
      { id: "subj10", english: "Biology", spanish: "Biología", difficulty: "medium", example: "En biología aprendemos sobre los seres vivos y sus ecosistemas", exampleTranslation: "In biology we learn about living beings and their ecosystems" },
      { id: "subj11", english: "Foreign language", spanish: "Idioma extranjero", difficulty: "medium", example: "Estudio francés como idioma extranjero en la universidad", exampleTranslation: "I study French as a foreign language at university" },
      { id: "subj12", english: "Economics", spanish: "Economía", difficulty: "medium", example: "La economía nos enseña sobre finanzas y mercados globales", exampleTranslation: "Economics teaches us about finance and global markets" },
      { id: "subj13", english: "What's your favorite subject?", spanish: "¿Cuál es tu materia favorita?", difficulty: "hard", example: "¿Cuál es tu materia favorita en la escuela y por qué?", exampleTranslation: "What's your favorite subject at school and why?" },
      { id: "subj14", english: "I'm good at...", spanish: "Se me da bien...", difficulty: "hard", example: "Se me dan bien las matemáticas pero tengo dificultades con historia", exampleTranslation: "I'm good at mathematics but I have difficulties with history" },
      { id: "subj15", english: "I need to study for...", spanish: "Necesito estudiar para...", difficulty: "hard", example: "Necesito estudiar mucho para el examen de química de mañana", exampleTranslation: "I need to study a lot for tomorrow's chemistry exam" }
    ]
  },

  tools_diy: {
    name: "Tools & DIY",
    description: "Tools and do-it-yourself vocabulary",
    icon: Wrench,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "tool1", english: "Hammer", spanish: "Martillo", difficulty: "easy", example: "Necesito un martillo para clavar estos clavos en la pared", exampleTranslation: "I need a hammer to nail these nails into the wall" },
      { id: "tool2", english: "Screwdriver", spanish: "Destornillador", difficulty: "easy", example: "Usa el destornillador para apretar los tornillos sueltos", exampleTranslation: "Use the screwdriver to tighten the loose screws" },
      { id: "tool3", english: "Nail", spanish: "Clavo", difficulty: "easy", example: "Compré una caja de clavos pequeños para el proyecto", exampleTranslation: "I bought a box of small nails for the project" },
      { id: "tool4", english: "Screw", spanish: "Tornillo", difficulty: "easy", example: "Los tornillos son más seguros que los clavos para muebles", exampleTranslation: "Screws are more secure than nails for furniture" },
      { id: "tool5", english: "Drill", spanish: "Taladro", difficulty: "easy", example: "El taladro eléctrico hace el trabajo mucho más fácil", exampleTranslation: "The electric drill makes the job much easier" },
      { id: "tool6", english: "Saw", spanish: "Sierra", difficulty: "easy", example: "Usamos la sierra para cortar la madera del tamaño correcto", exampleTranslation: "We use the saw to cut the wood to the right size" },
      { id: "tool7", english: "Wrench", spanish: "Llave inglesa", difficulty: "medium", example: "La llave inglesa es esencial para apretar tuercas y tornillos", exampleTranslation: "The wrench is essential for tightening nuts and bolts" },
      { id: "tool8", english: "Pliers", spanish: "Alicates", difficulty: "medium", example: "Los alicates son útiles para agarrar y doblar alambre", exampleTranslation: "Pliers are useful for gripping and bending wire" },
      { id: "tool9", english: "Measuring tape", spanish: "Cinta métrica", difficulty: "medium", example: "Mide con la cinta métrica antes de cortar cualquier material", exampleTranslation: "Measure with the measuring tape before cutting any material" },
      { id: "tool10", english: "Level", spanish: "Nivel", difficulty: "medium", example: "Usa el nivel para asegurarte de que el estante esté recto", exampleTranslation: "Use the level to make sure the shelf is straight" },
      { id: "tool11", english: "Sandpaper", spanish: "Papel de lija", difficulty: "medium", example: "El papel de lija suaviza la superficie de la madera", exampleTranslation: "Sandpaper smooths the surface of the wood" },
      { id: "tool12", english: "Paint brush", spanish: "Brocha", difficulty: "medium", example: "Limpia bien la brocha después de pintar para que dure más", exampleTranslation: "Clean the paint brush well after painting so it lasts longer" },
      { id: "tool13", english: "I need to fix...", spanish: "Necesito arreglar...", difficulty: "hard", example: "Necesito arreglar la puerta que rechina con aceite y tornillos nuevos", exampleTranslation: "I need to fix the squeaky door with oil and new screws" },
      { id: "tool14", english: "Can you help me build...?", spanish: "¿Me puedes ayudar a construir...?", difficulty: "hard", example: "¿Me puedes ayudar a construir este estante para libros este fin de semana?", exampleTranslation: "Can you help me build this bookshelf this weekend?" },
      { id: "tool15", english: "It's broken, I'll repair it", spanish: "Está roto, lo voy a reparar", difficulty: "hard", example: "La silla está rota pero no te preocupes, yo la voy a reparar", exampleTranslation: "The chair is broken but don't worry, I'll repair it" }
    ]
  },

  media_news: {
    name: "Media & News",
    description: "News, journalism and media vocabulary",
    icon: Newspaper,
    color: "from-blue-500 to-cyan-500",
    level: "advanced",
    words: [
      { id: "media1", english: "News", spanish: "Noticias", difficulty: "easy", example: "Leo las noticias del periódico todas las mañanas con el café", exampleTranslation: "I read the newspaper news every morning with coffee" },
      { id: "media2", english: "Newspaper", spanish: "Periódico", difficulty: "easy", example: "Mi abuelo prefiere leer el periódico impreso en papel", exampleTranslation: "My grandfather prefers to read the printed paper newspaper" },
      { id: "media3", english: "Reporter", spanish: "Reportero", difficulty: "easy", example: "El reportero viajó al lugar del evento para cubrir la noticia", exampleTranslation: "The reporter traveled to the event location to cover the news" },
      { id: "media4", english: "Article", spanish: "Artículo", difficulty: "easy", example: "Escribí un artículo sobre la importancia del medio ambiente", exampleTranslation: "I wrote an article about the importance of the environment" },
      { id: "media5", english: "Headline", spanish: "Titular", difficulty: "easy", example: "El titular de primera plana captó mi atención inmediatamente", exampleTranslation: "The front-page headline caught my attention immediately" },
      { id: "media6", english: "Broadcast", spanish: "Transmisión", difficulty: "easy", example: "La transmisión del evento deportivo comenzará a las ocho", exampleTranslation: "The broadcast of the sports event will start at eight" },
      { id: "media7", english: "Interview", spanish: "Entrevista", difficulty: "medium", example: "La entrevista con el presidente será transmitida en vivo esta noche", exampleTranslation: "The interview with the president will be broadcast live tonight" },
      { id: "media8", english: "Journalism", spanish: "Periodismo", difficulty: "medium", example: "El periodismo de investigación es fundamental para la democracia", exampleTranslation: "Investigative journalism is fundamental for democracy" },
      { id: "media9", english: "Editorial", spanish: "Editorial", difficulty: "medium", example: "El editorial de hoy critica las nuevas políticas económicas", exampleTranslation: "Today's editorial criticizes the new economic policies" },
      { id: "media10", english: "Breaking news", spanish: "Noticia de última hora", difficulty: "medium", example: "Interrumpimos la programación con una noticia de última hora", exampleTranslation: "We interrupt the programming with breaking news" },
      { id: "media11", english: "Press conference", spanish: "Conferencia de prensa", difficulty: "medium", example: "El ministro dará una conferencia de prensa mañana por la tarde", exampleTranslation: "The minister will give a press conference tomorrow afternoon" },
      { id: "media12", english: "Fact-check", spanish: "Verificación de hechos", difficulty: "medium", example: "La verificación de hechos es crucial en el periodismo moderno", exampleTranslation: "Fact-checking is crucial in modern journalism" },
      { id: "media13", english: "What's in the news today?", spanish: "¿Qué hay en las noticias hoy?", difficulty: "hard", example: "¿Qué hay en las noticias hoy? No he tenido tiempo de leer el periódico", exampleTranslation: "What's in the news today? I haven't had time to read the newspaper" },
      { id: "media14", english: "According to sources...", spanish: "Según fuentes...", difficulty: "hard", example: "Según fuentes cercanas al gobierno, habrá cambios importantes próximamente", exampleTranslation: "According to sources close to the government, there will be important changes soon" },
      { id: "media15", english: "The media is covering...", spanish: "Los medios están cubriendo...", difficulty: "hard", example: "Los medios de comunicación están cubriendo extensamente el evento internacional", exampleTranslation: "The media is extensively covering the international event" }
    ]
  },

  religion_spirituality: {
    name: "Religion & Spirituality",
    description: "Religious and spiritual vocabulary",
    icon: Church,
    color: "from-purple-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "relig1", english: "Church", spanish: "Iglesia", difficulty: "easy", example: "La iglesia del pueblo es muy antigua y hermosa", exampleTranslation: "The village church is very old and beautiful" },
      { id: "relig2", english: "Prayer", spanish: "Oración", difficulty: "easy", example: "Muchas personas hacen una oración antes de dormir", exampleTranslation: "Many people say a prayer before going to sleep" },
      { id: "relig3", english: "Faith", spanish: "Fe", difficulty: "easy", example: "La fe es importante para millones de personas en el mundo", exampleTranslation: "Faith is important for millions of people in the world" },
      { id: "relig4", english: "Believe", spanish: "Creer", difficulty: "easy", example: "Cada persona tiene derecho a creer lo que quiera", exampleTranslation: "Each person has the right to believe what they want" },
      { id: "relig5", english: "God", spanish: "Dios", difficulty: "easy", example: "Diferentes religiones tienen diferentes conceptos de Dios", exampleTranslation: "Different religions have different concepts of God" },
      { id: "relig6", english: "Temple", spanish: "Templo", difficulty: "easy", example: "Visitamos un templo budista durante nuestro viaje a Asia", exampleTranslation: "We visited a Buddhist temple during our trip to Asia" },
      { id: "relig7", english: "Meditation", spanish: "Meditación", difficulty: "medium", example: "La meditación diaria me ayuda a encontrar paz interior", exampleTranslation: "Daily meditation helps me find inner peace" },
      { id: "relig8", english: "Worship", spanish: "Culto", difficulty: "medium", example: "Las ceremonias de culto varían mucho entre diferentes religiones", exampleTranslation: "Worship ceremonies vary greatly among different religions" },
      { id: "relig9", english: "Sacred", spanish: "Sagrado", difficulty: "medium", example: "Este lugar es considerado sagrado por muchas generaciones", exampleTranslation: "This place is considered sacred by many generations" },
      { id: "relig10", english: "Ritual", spanish: "Ritual", difficulty: "medium", example: "Cada cultura tiene sus propios rituales y tradiciones espirituales", exampleTranslation: "Each culture has its own rituals and spiritual traditions" },
      { id: "relig11", english: "Blessing", spanish: "Bendición", difficulty: "medium", example: "Los abuelos dan su bendición a los recién casados", exampleTranslation: "The grandparents give their blessing to the newlyweds" },
      { id: "relig12", english: "Pilgrimage", spanish: "Peregrinación", difficulty: "medium", example: "Miles de personas hacen una peregrinación a lugares santos cada año", exampleTranslation: "Thousands of people make a pilgrimage to holy places each year" },
      { id: "relig13", english: "I respect all beliefs", spanish: "Respeto todas las creencias", difficulty: "hard", example: "Respeto todas las creencias religiosas aunque no las comparta", exampleTranslation: "I respect all religious beliefs even if I don't share them" },
      { id: "relig14", english: "It's a spiritual journey", spanish: "Es un viaje espiritual", difficulty: "hard", example: "La vida es un viaje espiritual de crecimiento y aprendizaje constante", exampleTranslation: "Life is a spiritual journey of constant growth and learning" },
      { id: "relig15", english: "Faith gives me strength", spanish: "La fe me da fuerza", difficulty: "hard", example: "Mi fe me da fuerza para superar los momentos difíciles de la vida", exampleTranslation: "My faith gives me strength to overcome difficult moments in life" }
    ]
  },

  sleep_bedtime: {
    name: "Sleep & Bedtime",
    description: "Sleep and nighttime routine vocabulary",
    icon: Moon,
    color: "from-indigo-400 to-purple-600",
    level: "beginner",
    words: [
      { id: "sleep1", english: "Sleep", spanish: "Dormir", difficulty: "easy", example: "Necesito dormir al menos ocho horas cada noche", exampleTranslation: "I need to sleep at least eight hours every night" },
      { id: "sleep2", english: "Bed", spanish: "Cama", difficulty: "easy", example: "Mi cama es muy cómoda y grande", exampleTranslation: "My bed is very comfortable and big" },
      { id: "sleep3", english: "Pillow", spanish: "Almohada", difficulty: "easy", example: "Necesito dos almohadas suaves para dormir bien", exampleTranslation: "I need two soft pillows to sleep well" },
      { id: "sleep4", english: "Blanket", spanish: "Manta", difficulty: "easy", example: "Hace frío esta noche, necesito una manta extra", exampleTranslation: "It's cold tonight, I need an extra blanket" },
      { id: "sleep5", english: "Dream", spanish: "Sueño", difficulty: "easy", example: "Tuve un sueño muy extraño anoche", exampleTranslation: "I had a very strange dream last night" },
      { id: "sleep6", english: "Alarm clock", spanish: "Despertador", difficulty: "easy", example: "Pongo el despertador para las seis de la mañana", exampleTranslation: "I set the alarm clock for six in the morning" },
      { id: "sleep7", english: "Pajamas", spanish: "Pijama", difficulty: "medium", example: "Me pongo el pijama antes de acostarme todas las noches", exampleTranslation: "I put on my pajamas before going to bed every night" },
      { id: "sleep8", english: "Mattress", spanish: "Colchón", difficulty: "medium", example: "Un buen colchón es esencial para descansar bien", exampleTranslation: "A good mattress is essential for resting well" },
      { id: "sleep9", english: "Nightmare", spanish: "Pesadilla", difficulty: "medium", example: "Mi hijo tuvo una pesadilla y vino a mi habitación asustado", exampleTranslation: "My son had a nightmare and came to my room scared" },
      { id: "sleep10", english: "Insomnia", spanish: "Insomnio", difficulty: "medium", example: "El estrés del trabajo me causa insomnio algunas noches", exampleTranslation: "Work stress causes me insomnia some nights" },
      { id: "sleep11", english: "Bedtime", spanish: "Hora de dormir", difficulty: "medium", example: "La hora de dormir para los niños es a las ocho", exampleTranslation: "Bedtime for children is at eight o'clock" },
      { id: "sleep12", english: "Snore", spanish: "Roncar", difficulty: "medium", example: "Mi esposo ronca muy fuerte cuando está muy cansado", exampleTranslation: "My husband snores very loudly when he's very tired" },
      { id: "sleep13", english: "I'm exhausted", spanish: "Estoy agotado", difficulty: "hard", example: "Estoy completamente agotado después de un día tan largo de trabajo", exampleTranslation: "I'm completely exhausted after such a long day of work" },
      { id: "sleep14", english: "I can't fall asleep", spanish: "No puedo dormirme", difficulty: "hard", example: "No puedo dormirme cuando tengo muchas cosas en la mente", exampleTranslation: "I can't fall asleep when I have many things on my mind" },
      { id: "sleep15", english: "Sweet dreams", spanish: "Dulces sueños", difficulty: "hard", example: "Buenas noches mi amor, que tengas dulces sueños", exampleTranslation: "Good night my love, sweet dreams" }
    ]
  },

  water_sports: {
    name: "Water Sports & Activities",
    description: "Water-based sports and activities",
    icon: Waves,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "water1", english: "Swimming", spanish: "Natación", difficulty: "easy", example: "La natación es un excelente ejercicio para todo el cuerpo", exampleTranslation: "Swimming is an excellent exercise for the whole body" },
      { id: "water2", english: "Diving", spanish: "Buceo", difficulty: "easy", example: "El buceo en el arrecife de coral fue una experiencia increíble", exampleTranslation: "Diving in the coral reef was an incredible experience" },
      { id: "water3", english: "Surfing", spanish: "Surf", difficulty: "easy", example: "Aprender a hacer surf requiere mucha práctica y paciencia", exampleTranslation: "Learning to surf requires a lot of practice and patience" },
      { id: "water4", english: "Beach", spanish: "Playa", difficulty: "easy", example: "Pasamos todo el día en la playa tomando el sol", exampleTranslation: "We spent the whole day at the beach sunbathing" },
      { id: "water5", english: "Lifeguard", spanish: "Salvavidas", difficulty: "easy", example: "El salvavidas vigila la seguridad de todos los nadadores", exampleTranslation: "The lifeguard watches over the safety of all swimmers" },
      { id: "water6", english: "Swimsuit", spanish: "Traje de baño", difficulty: "easy", example: "Compré un traje de baño nuevo para las vacaciones", exampleTranslation: "I bought a new swimsuit for vacation" },
      { id: "water7", english: "Snorkeling", spanish: "Esnórquel", difficulty: "medium", example: "Hicimos esnórquel y vimos peces tropicales de colores brillantes", exampleTranslation: "We went snorkeling and saw brightly colored tropical fish" },
      { id: "water8", english: "Kayaking", spanish: "Kayak", difficulty: "medium", example: "El kayak por el río fue una aventura emocionante", exampleTranslation: "Kayaking down the river was an exciting adventure" },
      { id: "water9", english: "Sailing", spanish: "Navegación a vela", difficulty: "medium", example: "La navegación a vela es un deporte elegante y relajante", exampleTranslation: "Sailing is an elegant and relaxing sport" },
      { id: "water10", english: "Water skiing", spanish: "Esquí acuático", difficulty: "medium", example: "El esquí acuático requiere buen equilibrio y fuerza en las piernas", exampleTranslation: "Water skiing requires good balance and leg strength" },
      { id: "water11", english: "Windsurfing", spanish: "Windsurf", difficulty: "medium", example: "El windsurf combina el surf con la navegación a vela", exampleTranslation: "Windsurfing combines surfing with sailing" },
      { id: "water12", english: "Jet ski", spanish: "Moto acuática", difficulty: "medium", example: "Montar en moto acuática es divertido pero puede ser peligroso", exampleTranslation: "Riding a jet ski is fun but can be dangerous" },
      { id: "water13", english: "The waves are perfect today", spanish: "Las olas están perfectas hoy", difficulty: "hard", example: "Las olas están perfectas hoy para practicar surf, vamos a la playa", exampleTranslation: "The waves are perfect today for surfing, let's go to the beach" },
      { id: "water14", english: "I love being in the water", spanish: "Me encanta estar en el agua", difficulty: "hard", example: "Me encanta estar en el agua, me hace sentir libre y feliz", exampleTranslation: "I love being in the water, it makes me feel free and happy" },
      { id: "water15", english: "Can you swim?", spanish: "¿Sabes nadar?", difficulty: "hard", example: "¿Sabes nadar? Podemos ir juntos a la piscina este fin de semana", exampleTranslation: "Can you swim? We can go to the pool together this weekend" }
    ]
  },

  mountains_hiking: {
    name: "Mountains & Hiking",
    description: "Mountain activities and hiking vocabulary",
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "mount1", english: "Mountain", spanish: "Montaña", difficulty: "easy", example: "La montaña más alta tiene nieve en la cima todo el año", exampleTranslation: "The highest mountain has snow on the peak all year" },
      { id: "mount2", english: "Hiking", spanish: "Senderismo", difficulty: "easy", example: "El senderismo es una excelente forma de disfrutar la naturaleza", exampleTranslation: "Hiking is an excellent way to enjoy nature" },
      { id: "mount3", english: "Trail", spanish: "Sendero", difficulty: "easy", example: "Este sendero nos lleva hasta la cima de la montaña", exampleTranslation: "This trail takes us to the top of the mountain" },
      { id: "mount4", english: "Backpack", spanish: "Mochila", difficulty: "easy", example: "Llevo agua y comida en mi mochila para la caminata", exampleTranslation: "I carry water and food in my backpack for the hike" },
      { id: "mount5", english: "Summit", spanish: "Cumbre", difficulty: "easy", example: "Llegamos a la cumbre después de tres horas de subida", exampleTranslation: "We reached the summit after three hours of climbing" },
      { id: "mount6", english: "Valley", spanish: "Valle", difficulty: "easy", example: "El valle entre las montañas es verde y hermoso", exampleTranslation: "The valley between the mountains is green and beautiful" },
      { id: "mount7", english: "Camping", spanish: "Acampar", difficulty: "medium", example: "Nos encanta acampar bajo las estrellas en las montañas", exampleTranslation: "We love camping under the stars in the mountains" },
      { id: "mount8", english: "Climbing", spanish: "Escalada", difficulty: "medium", example: "La escalada en roca es un deporte extremo que requiere entrenamiento", exampleTranslation: "Rock climbing is an extreme sport that requires training" },
      { id: "mount9", english: "Altitude", spanish: "Altitud", difficulty: "medium", example: "La altitud elevada puede causar dificultad para respirar", exampleTranslation: "High altitude can cause difficulty breathing" },
      { id: "mount10", english: "Compass", spanish: "Brújula", difficulty: "medium", example: "Siempre llevo una brújula cuando voy de excursión a zonas remotas", exampleTranslation: "I always carry a compass when hiking in remote areas" },
      { id: "mount11", english: "Panoramic view", spanish: "Vista panorámica", difficulty: "medium", example: "Desde aquí arriba tenemos una vista panorámica impresionante", exampleTranslation: "From up here we have an impressive panoramic view" },
      { id: "mount12", english: "Wildlife", spanish: "Fauna", difficulty: "medium", example: "Vimos mucha fauna silvestre durante nuestra caminata por la montaña", exampleTranslation: "We saw a lot of wildlife during our mountain hike" },
      { id: "mount13", english: "The view is breathtaking", spanish: "La vista es impresionante", difficulty: "hard", example: "La vista desde la cima es absolutamente impresionante, vale la pena el esfuerzo", exampleTranslation: "The view from the top is absolutely breathtaking, worth the effort" },
      { id: "mount14", english: "Let's take a break", spanish: "Tomemos un descanso", difficulty: "hard", example: "Tomemos un descanso aquí para beber agua y disfrutar del paisaje", exampleTranslation: "Let's take a break here to drink water and enjoy the scenery" },
      { id: "mount15", english: "How far is the peak?", spanish: "¿Qué tan lejos está la cima?", difficulty: "hard", example: "¿Qué tan lejos está la cima desde aquí? Estoy un poco cansado", exampleTranslation: "How far is the peak from here? I'm a bit tired" }
    ]
  },

  pets_care: {
    name: "Pets & Pet Care",
    description: "Taking care of pets vocabulary",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "pet1", english: "Pet", spanish: "Mascota", difficulty: "easy", example: "Mi mascota favorita es mi perro llamado Rocky", exampleTranslation: "My favorite pet is my dog named Rocky" },
      { id: "pet2", english: "Food", spanish: "Comida", difficulty: "easy", example: "Compro comida especial para perros en la tienda de mascotas", exampleTranslation: "I buy special dog food at the pet store" },
      { id: "pet3", english: "Walk", spanish: "Pasear", difficulty: "easy", example: "Paseo a mi perro tres veces al día en el parque", exampleTranslation: "I walk my dog three times a day in the park" },
      { id: "pet4", english: "Leash", spanish: "Correa", difficulty: "easy", example: "Siempre uso una correa cuando saco a pasear a mi perro", exampleTranslation: "I always use a leash when I walk my dog" },
      { id: "pet5", english: "Bowl", spanish: "Tazón", difficulty: "easy", example: "El gato come de su tazón todas las mañanas", exampleTranslation: "The cat eats from his bowl every morning" },
      { id: "pet6", english: "Toy", spanish: "Juguete", difficulty: "easy", example: "Mi perro tiene muchos juguetes para morder y jugar", exampleTranslation: "My dog has many toys to chew and play with" },
      { id: "pet7", english: "Veterinarian", spanish: "Veterinario", difficulty: "medium", example: "Llevamos al gato al veterinario para su revisión anual", exampleTranslation: "We take the cat to the veterinarian for his annual checkup" },
      { id: "pet8", english: "Vaccination", spanish: "Vacuna", difficulty: "medium", example: "Las vacunas son importantes para mantener saludable a tu mascota", exampleTranslation: "Vaccinations are important to keep your pet healthy" },
      { id: "pet9", english: "Grooming", spanish: "Aseo", difficulty: "medium", example: "El aseo regular es necesario para perros con pelo largo", exampleTranslation: "Regular grooming is necessary for dogs with long hair" },
      { id: "pet10", english: "Litter box", spanish: "Caja de arena", difficulty: "medium", example: "Limpio la caja de arena del gato todos los días", exampleTranslation: "I clean the cat's litter box every day" },
      { id: "pet11", english: "Adopt", spanish: "Adoptar", difficulty: "medium", example: "Decidimos adoptar un perro del refugio de animales local", exampleTranslation: "We decided to adopt a dog from the local animal shelter" },
      { id: "pet12", english: "Training", spanish: "Entrenamiento", difficulty: "medium", example: "El entrenamiento de cachorros requiere mucha paciencia y consistencia", exampleTranslation: "Puppy training requires a lot of patience and consistency" },
      { id: "pet13", english: "My pet is part of the family", spanish: "Mi mascota es parte de la familia", difficulty: "hard", example: "Mi mascota no es solo un animal, es parte importante de nuestra familia", exampleTranslation: "My pet is not just an animal, it's an important part of our family" },
      { id: "pet14", english: "He needs exercise", spanish: "Necesita ejercicio", difficulty: "hard", example: "Mi perro necesita mucho ejercicio diario para estar feliz y saludable", exampleTranslation: "My dog needs a lot of daily exercise to be happy and healthy" },
      { id: "pet15", english: "Do you have pets?", spanish: "¿Tienes mascotas?", difficulty: "hard", example: "¿Tienes mascotas en casa? A mí me encantan los animales", exampleTranslation: "Do you have pets at home? I love animals" }
    ]
  },

  emotions_expressions: {
    name: "Emotions & Expressions",
    description: "Expressing emotions and feelings",
    icon: Heart,
    color: "from-rose-400 to-pink-600",
    level: "intermediate",
    words: [
      { id: "emot1", english: "Joy", spanish: "Alegría", difficulty: "easy", example: "Siento una gran alegría cuando estoy con mi familia", exampleTranslation: "I feel great joy when I'm with my family" },
      { id: "emot2", english: "Love", spanish: "Amor", difficulty: "easy", example: "El amor de mis padres es incondicional y eterno", exampleTranslation: "My parents' love is unconditional and eternal" },
      { id: "emot3", english: "Fear", spanish: "Miedo", difficulty: "easy", example: "Tengo miedo de las alturas desde que era niño", exampleTranslation: "I've been afraid of heights since I was a child" },
      { id: "emot4", english: "Anger", spanish: "Enojo", difficulty: "easy", example: "El enojo a veces puede nublar nuestro juicio", exampleTranslation: "Anger can sometimes cloud our judgment" },
      { id: "emot5", english: "Surprise", spanish: "Sorpresa", difficulty: "easy", example: "La fiesta sorpresa fue una total sorpresa para ella", exampleTranslation: "The surprise party was a total surprise for her" },
      { id: "emot6", english: "Hope", spanish: "Esperanza", difficulty: "easy", example: "Nunca debemos perder la esperanza en tiempos difíciles", exampleTranslation: "We should never lose hope in difficult times" },
      { id: "emot7", english: "Anxiety", spanish: "Ansiedad", difficulty: "medium", example: "La ansiedad antes de un examen es completamente normal", exampleTranslation: "Anxiety before an exam is completely normal" },
      { id: "emot8", english: "Relief", spanish: "Alivio", difficulty: "medium", example: "Sentí un gran alivio cuando recibí las buenas noticias", exampleTranslation: "I felt great relief when I received the good news" },
      { id: "emot9", english: "Frustration", spanish: "Frustración", difficulty: "medium", example: "La frustración puede ser una oportunidad para crecer y aprender", exampleTranslation: "Frustration can be an opportunity to grow and learn" },
      { id: "emot10", english: "Jealousy", spanish: "Celos", difficulty: "medium", example: "Los celos pueden dañar seriamente una relación de pareja", exampleTranslation: "Jealousy can seriously damage a relationship" },
      { id: "emot11", english: "Guilt", spanish: "Culpa", difficulty: "medium", example: "La culpa me persigue por no haber ido a visitarla", exampleTranslation: "Guilt haunts me for not having gone to visit her" },
      { id: "emot12", english: "Shame", spanish: "Vergüenza", difficulty: "medium", example: "Sentí vergüenza cuando me di cuenta de mi error", exampleTranslation: "I felt shame when I realized my mistake" },
      { id: "emot13", english: "I'm overwhelmed with emotion", spanish: "Estoy abrumado por la emoción", difficulty: "hard", example: "Estoy completamente abrumado por la emoción de este momento tan especial", exampleTranslation: "I'm completely overwhelmed with emotion from this very special moment" },
      { id: "emot14", english: "It breaks my heart", spanish: "Me rompe el corazón", difficulty: "hard", example: "Me rompe el corazón ver a tanta gente sufriendo en el mundo", exampleTranslation: "It breaks my heart to see so many people suffering in the world" },
      { id: "emot15", english: "I'm filled with gratitude", spanish: "Estoy lleno de gratitud", difficulty: "hard", example: "Estoy lleno de gratitud por todo el apoyo que he recibido", exampleTranslation: "I'm filled with gratitude for all the support I've received" }
    ]
  },

  parties_entertaining: {
    name: "Parties & Entertaining",
    description: "Hosting parties and entertainment",
    icon: Users,
    color: "from-fuchsia-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "party1", english: "Host", spanish: "Anfitrión", difficulty: "easy", example: "El anfitrión de la fiesta recibió a todos los invitados", exampleTranslation: "The party host greeted all the guests" },
      { id: "party2", english: "Guest", spanish: "Invitado", difficulty: "easy", example: "Cada invitado trajo un plato diferente para compartir", exampleTranslation: "Each guest brought a different dish to share" },
      { id: "party3", english: "Dance", spanish: "Bailar", difficulty: "easy", example: "Todos bailaron hasta tarde en la noche", exampleTranslation: "Everyone danced until late at night" },
      { id: "party4", english: "Music", spanish: "Música", difficulty: "easy", example: "La música en la fiesta estuvo increíble toda la noche", exampleTranslation: "The music at the party was incredible all night" },
      { id: "party5", english: "Drink", spanish: "Bebida", difficulty: "easy", example: "Hay bebidas frías en el refrigerador para todos", exampleTranslation: "There are cold drinks in the refrigerator for everyone" },
      { id: "party6", english: "Snack", spanish: "Bocadillo", difficulty: "easy", example: "Preparé varios bocadillos para picar durante la fiesta", exampleTranslation: "I prepared several snacks to munch on during the party" },
      { id: "party7", english: "Entertainment", spanish: "Entretenimiento", difficulty: "medium", example: "Contratamos entretenimiento en vivo para la celebración", exampleTranslation: "We hired live entertainment for the celebration" },
      { id: "party8", english: "Decoration", spanish: "Decoración", difficulty: "medium", example: "La decoración de la fiesta fue elegante y colorida", exampleTranslation: "The party decoration was elegant and colorful" },
      { id: "party9", english: "DJ", spanish: "DJ", difficulty: "medium", example: "El DJ puso música excelente que hizo bailar a todos", exampleTranslation: "The DJ played excellent music that made everyone dance" },
      { id: "party10", english: "Toast", spanish: "Brindis", difficulty: "medium", example: "Hicimos un brindis por la felicidad de los novios", exampleTranslation: "We made a toast to the happiness of the bride and groom" },
      { id: "party11", english: "Potluck", spanish: "Comida compartida", difficulty: "medium", example: "Organizamos una comida compartida donde cada uno trae algo", exampleTranslation: "We organized a potluck where everyone brings something" },
      { id: "party12", english: "RSVP", spanish: "Confirmación de asistencia", difficulty: "medium", example: "Por favor envía tu confirmación de asistencia antes del viernes", exampleTranslation: "Please send your RSVP before Friday" },
      { id: "party13", english: "Thanks for having me", spanish: "Gracias por invitarme", difficulty: "hard", example: "Gracias por invitarme a tu casa, lo pasé increíble", exampleTranslation: "Thanks for having me at your house, I had an incredible time" },
      { id: "party14", english: "Make yourself at home", spanish: "Siéntete como en casa", difficulty: "hard", example: "Siéntete como en tu propia casa, toma lo que necesites", exampleTranslation: "Make yourself at home, take whatever you need" },
      { id: "party15", english: "The party was a success", spanish: "La fiesta fue un éxito", difficulty: "hard", example: "La fiesta de anoche fue un éxito total, todos se divirtieron mucho", exampleTranslation: "Last night's party was a total success, everyone had a great time" }
    ]
  },

  senses_perception: {
    name: "Senses & Perception",
    description: "Five senses and perception vocabulary",
    icon: Eye,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "sense1", english: "See", spanish: "Ver", difficulty: "easy", example: "Puedo ver las montañas desde la ventana de mi casa", exampleTranslation: "I can see the mountains from my house window" },
      { id: "sense2", english: "Hear", spanish: "Oír", difficulty: "easy", example: "Puedo oír música suave que viene de la habitación vecina", exampleTranslation: "I can hear soft music coming from the next room" },
      { id: "sense3", english: "Touch", spanish: "Tocar", difficulty: "easy", example: "El bebé le gusta tocar todo lo que encuentra", exampleTranslation: "The baby likes to touch everything he finds" },
      { id: "sense4", english: "Taste", spanish: "Probar", difficulty: "easy", example: "Quiero probar ese plato nuevo del menú", exampleTranslation: "I want to taste that new dish from the menu" },
      { id: "sense5", english: "Smell", spanish: "Oler", difficulty: "easy", example: "Puedo oler el pan fresco horneándose en la panadería", exampleTranslation: "I can smell the fresh bread baking in the bakery" },
      { id: "sense6", english: "Sound", spanish: "Sonido", difficulty: "easy", example: "El sonido de las olas del mar es muy relajante", exampleTranslation: "The sound of ocean waves is very relaxing" },
      { id: "sense7", english: "Vision", spanish: "Visión", difficulty: "medium", example: "Mi visión ha empeorado, necesito usar lentes nuevos", exampleTranslation: "My vision has gotten worse, I need to wear new glasses" },
      { id: "sense8", english: "Texture", spanish: "Textura", difficulty: "medium", example: "Me gusta la textura suave de esta tela de seda", exampleTranslation: "I like the soft texture of this silk fabric" },
      { id: "sense9", english: "Aroma", spanish: "Aroma", difficulty: "medium", example: "El aroma del café recién hecho llena toda la cocina", exampleTranslation: "The aroma of freshly made coffee fills the whole kitchen" },
      { id: "sense10", english: "Flavor", spanish: "Sabor", difficulty: "medium", example: "Este vino tiene un sabor complejo y sofisticado", exampleTranslation: "This wine has a complex and sophisticated flavor" },
      { id: "sense11", english: "Perception", spanish: "Percepción", difficulty: "medium", example: "La percepción de cada persona sobre la realidad es diferente", exampleTranslation: "Each person's perception of reality is different" },
      { id: "sense12", english: "Sensation", spanish: "Sensación", difficulty: "medium", example: "Tengo una sensación extraña de que algo va a pasar", exampleTranslation: "I have a strange sensation that something is going to happen" },
      { id: "sense13", english: "It tastes delicious", spanish: "Sabe delicioso", difficulty: "hard", example: "Esta comida casera sabe absolutamente deliciosa, está perfecta", exampleTranslation: "This homemade food tastes absolutely delicious, it's perfect" },
      { id: "sense14", english: "I can barely hear you", spanish: "Apenas puedo oírte", difficulty: "hard", example: "Hay mucho ruido aquí, apenas puedo oírte, ¿podemos hablar afuera?", exampleTranslation: "There's too much noise here, I can barely hear you, can we talk outside?" },
      { id: "sense15", english: "It feels soft to the touch", spanish: "Se siente suave al tacto", difficulty: "hard", example: "Esta almohada de plumas se siente increíblemente suave al tacto", exampleTranslation: "This feather pillow feels incredibly soft to the touch" }
    ]
  },

  repairs_maintenance: {
    name: "Repairs & Maintenance",
    description: "Fixing and maintaining things",
    icon: Hammer,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "repair1", english: "Fix", spanish: "Arreglar", difficulty: "easy", example: "Necesito arreglar la puerta que no cierra bien", exampleTranslation: "I need to fix the door that doesn't close properly" },
      { id: "repair2", english: "Repair", spanish: "Reparar", difficulty: "easy", example: "El mecánico va a reparar mi coche mañana", exampleTranslation: "The mechanic is going to repair my car tomorrow" },
      { id: "repair3", english: "Broken", spanish: "Roto", difficulty: "easy", example: "El espejo está roto y necesita ser reemplazado", exampleTranslation: "The mirror is broken and needs to be replaced" },
      { id: "repair4", english: "Replace", spanish: "Reemplazar", difficulty: "easy", example: "Tenemos que reemplazar las baterías del control remoto", exampleTranslation: "We have to replace the batteries in the remote control" },
      { id: "repair5", english: "Maintenance", spanish: "Mantenimiento", difficulty: "easy", example: "El mantenimiento regular previene problemas mayores", exampleTranslation: "Regular maintenance prevents major problems" },
      { id: "repair6", english: "Leak", spanish: "Fuga", difficulty: "easy", example: "Hay una fuga de agua debajo del fregadero", exampleTranslation: "There's a water leak under the sink" },
      { id: "repair7", english: "Plumber", spanish: "Plomero", difficulty: "medium", example: "Llamé al plomero para que arregle la tubería rota", exampleTranslation: "I called the plumber to fix the broken pipe" },
      { id: "repair8", english: "Electrician", spanish: "Electricista", difficulty: "medium", example: "Necesitamos un electricista para instalar las luces nuevas", exampleTranslation: "We need an electrician to install the new lights" },
      { id: "repair9", english: "Paint", spanish: "Pintar", difficulty: "medium", example: "Vamos a pintar toda la casa este fin de semana", exampleTranslation: "We're going to paint the whole house this weekend" },
      { id: "repair10", english: "Inspect", spanish: "Inspeccionar", difficulty: "medium", example: "El técnico vino a inspeccionar el sistema de calefacción", exampleTranslation: "The technician came to inspect the heating system" },
      { id: "repair11", english: "Warranty", spanish: "Garantía", difficulty: "medium", example: "Este producto todavía está bajo garantía por un año", exampleTranslation: "This product is still under warranty for one year" },
      { id: "repair12", english: "Malfunction", spanish: "Mal funcionamiento", difficulty: "medium", example: "El mal funcionamiento del sistema eléctrico causó el apagón", exampleTranslation: "The electrical system malfunction caused the blackout" },
      { id: "repair13", english: "It's not working", spanish: "No funciona", difficulty: "hard", example: "La lavadora no funciona correctamente desde hace una semana", exampleTranslation: "The washing machine hasn't been working properly for a week" },
      { id: "repair14", english: "Can you fix it?", spanish: "¿Puedes arreglarlo?", difficulty: "hard", example: "Mi computadora está muy lenta, ¿puedes arreglarlo?", exampleTranslation: "My computer is very slow, can you fix it?" },
      { id: "repair15", english: "How much will it cost?", spanish: "¿Cuánto costará?", difficulty: "hard", example: "¿Cuánto costará reparar el techo que tiene goteras?", exampleTranslation: "How much will it cost to repair the leaky roof?" }
    ]
  },

  city_urban_life: {
    name: "City & Urban Life",
    description: "Living in the city vocabulary",
    icon: Building,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "city1", english: "City", spanish: "Ciudad", difficulty: "easy", example: "La ciudad es muy grande y tiene millones de habitantes", exampleTranslation: "The city is very large and has millions of inhabitants" },
      { id: "city2", english: "Downtown", spanish: "Centro", difficulty: "easy", example: "El centro de la ciudad está lleno de tiendas y restaurantes", exampleTranslation: "Downtown is full of shops and restaurants" },
      { id: "city3", english: "Building", spanish: "Edificio", difficulty: "easy", example: "Ese edificio alto tiene más de cincuenta pisos", exampleTranslation: "That tall building has more than fifty floors" },
      { id: "city4", english: "Apartment", spanish: "Apartamento", difficulty: "easy", example: "Vivo en un apartamento pequeño en el tercer piso", exampleTranslation: "I live in a small apartment on the third floor" },
      { id: "city5", english: "Skyscraper", spanish: "Rascacielos", difficulty: "easy", example: "Los rascacielos dominan el horizonte de la ciudad moderna", exampleTranslation: "Skyscrapers dominate the modern city skyline" },
      { id: "city6", english: "Neighborhood", spanish: "Barrio", difficulty: "easy", example: "Mi barrio es tranquilo y tiene muchos parques verdes", exampleTranslation: "My neighborhood is quiet and has many green parks" },
      { id: "city7", english: "Subway", spanish: "Metro", difficulty: "medium", example: "Tomo el metro todos los días para ir al trabajo rápidamente", exampleTranslation: "I take the subway every day to get to work quickly" },
      { id: "city8", english: "Rush hour", spanish: "Hora pico", difficulty: "medium", example: "La hora pico en la ciudad es terrible, hay mucho tráfico", exampleTranslation: "Rush hour in the city is terrible, there's a lot of traffic" },
      { id: "city9", english: "Pedestrian", spanish: "Peatón", difficulty: "medium", example: "Los peatones deben cruzar la calle en el paso de cebra", exampleTranslation: "Pedestrians should cross the street at the crosswalk" },
      { id: "city10", english: "Crosswalk", spanish: "Paso de peatones", difficulty: "medium", example: "Siempre cruza en el paso de peatones para tu seguridad", exampleTranslation: "Always cross at the crosswalk for your safety" },
      { id: "city11", english: "Public transportation", spanish: "Transporte público", difficulty: "medium", example: "El transporte público en esta ciudad es eficiente y económico", exampleTranslation: "Public transportation in this city is efficient and economical" },
      { id: "city12", english: "Commute", spanish: "Viaje al trabajo", difficulty: "medium", example: "Mi viaje diario al trabajo toma aproximadamente una hora", exampleTranslation: "My daily commute to work takes approximately one hour" },
      { id: "city13", english: "The city never sleeps", spanish: "La ciudad nunca duerme", difficulty: "hard", example: "Dicen que Nueva York es la ciudad que nunca duerme", exampleTranslation: "They say New York is the city that never sleeps" },
      { id: "city14", english: "It's very crowded", spanish: "Está muy concurrido", difficulty: "hard", example: "El centro comercial está muy concurrido los fines de semana", exampleTranslation: "The mall is very crowded on weekends" },
      { id: "city15", english: "I love the city life", spanish: "Me encanta la vida en la ciudad", difficulty: "hard", example: "Me encanta la vida en la ciudad por todas las oportunidades que ofrece", exampleTranslation: "I love city life because of all the opportunities it offers" }
    ]
  },

  countryside_rural: {
    name: "Countryside & Rural Life",
    description: "Rural areas and country living",
    icon: TreePine,
    color: "from-green-400 to-lime-500",
    level: "intermediate",
    words: [
      { id: "rural1", english: "Farm", spanish: "Granja", difficulty: "easy", example: "Mi tío tiene una granja grande con vacas y caballos", exampleTranslation: "My uncle has a large farm with cows and horses" },
      { id: "rural2", english: "Field", spanish: "Campo", difficulty: "easy", example: "Los campos de trigo se extienden hasta donde alcanza la vista", exampleTranslation: "The wheat fields extend as far as the eye can see" },
      { id: "rural3", english: "Barn", spanish: "Granero", difficulty: "easy", example: "Guardamos el heno para los animales en el granero rojo", exampleTranslation: "We keep the hay for the animals in the red barn" },
      { id: "rural4", english: "Village", spanish: "Pueblo", difficulty: "easy", example: "Es un pueblo pequeño donde todos se conocen", exampleTranslation: "It's a small village where everyone knows each other" },
      { id: "rural5", english: "Harvest", spanish: "Cosecha", difficulty: "easy", example: "La cosecha de maíz este año fue muy abundante", exampleTranslation: "The corn harvest this year was very abundant" },
      { id: "rural6", english: "Tractor", spanish: "Tractor", difficulty: "easy", example: "El granjero maneja el tractor para arar los campos", exampleTranslation: "The farmer drives the tractor to plow the fields" },
      { id: "rural7", english: "Farmer", spanish: "Agricultor", difficulty: "medium", example: "Los agricultores trabajan desde el amanecer hasta el atardecer", exampleTranslation: "Farmers work from dawn until dusk" },
      { id: "rural8", english: "Crops", spanish: "Cultivos", difficulty: "medium", example: "Los cultivos necesitan agua abundante para crecer bien", exampleTranslation: "Crops need abundant water to grow well" },
      { id: "rural9", english: "Livestock", spanish: "Ganado", difficulty: "medium", example: "El ganado pasta libremente en las colinas verdes", exampleTranslation: "The livestock grazes freely on the green hills" },
      { id: "rural10", english: "Countryside", spanish: "Campo", difficulty: "medium", example: "El aire del campo es mucho más fresco que en la ciudad", exampleTranslation: "The countryside air is much fresher than in the city" },
      { id: "rural11", english: "Peaceful", spanish: "Tranquilo", difficulty: "medium", example: "La vida en el pueblo es muy tranquila y sin estrés", exampleTranslation: "Village life is very peaceful and stress-free" },
      { id: "rural12", english: "Organic", spanish: "Orgánico", difficulty: "medium", example: "Cultivamos vegetales orgánicos sin usar químicos artificiales", exampleTranslation: "We grow organic vegetables without using artificial chemicals" },
      { id: "rural13", english: "I prefer the quiet life", spanish: "Prefiero la vida tranquila", difficulty: "hard", example: "Prefiero la vida tranquila del campo a la ciudad ruidosa", exampleTranslation: "I prefer the quiet life of the countryside to the noisy city" },
      { id: "rural14", english: "It's so peaceful here", spanish: "Es tan tranquilo aquí", difficulty: "hard", example: "Es tan tranquilo aquí en el campo, puedo escuchar a los pájaros cantar", exampleTranslation: "It's so peaceful here in the countryside, I can hear birds singing" },
      { id: "rural15", english: "Fresh air and nature", spanish: "Aire fresco y naturaleza", difficulty: "hard", example: "Me encanta el aire fresco y la naturaleza pura del campo", exampleTranslation: "I love the fresh air and pure nature of the countryside" }
    ]
  },

  weather_seasons_detailed: {
    name: "Weather & Seasons (Detailed)",
    description: "Detailed weather conditions and seasonal changes",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "weather1", english: "Sunny", spanish: "Soleado", difficulty: "easy", example: "Hoy es un día soleado perfecto para ir a la playa", exampleTranslation: "Today is a sunny day perfect for going to the beach" },
      { id: "weather2", english: "Rainy", spanish: "Lluvioso", difficulty: "easy", example: "Los días lluviosos son buenos para quedarse en casa", exampleTranslation: "Rainy days are good for staying at home" },
      { id: "weather3", english: "Cloudy", spanish: "Nublado", difficulty: "easy", example: "El cielo está nublado pero no creo que llueva", exampleTranslation: "The sky is cloudy but I don't think it will rain" },
      { id: "weather4", english: "Windy", spanish: "Ventoso", difficulty: "easy", example: "Es un día muy ventoso, mejor lleva una chaqueta", exampleTranslation: "It's a very windy day, you better wear a jacket" },
      { id: "weather5", english: "Foggy", spanish: "Neblinoso", difficulty: "easy", example: "Las mañanas neblinosas son comunes en esta región montañosa", exampleTranslation: "Foggy mornings are common in this mountainous region" },
      { id: "weather6", english: "Humid", spanish: "Húmedo", difficulty: "easy", example: "El clima húmedo hace que todo se sienta pegajoso", exampleTranslation: "Humid weather makes everything feel sticky" },
      { id: "weather7", english: "Thunderstorm", spanish: "Tormenta eléctrica", difficulty: "medium", example: "La tormenta eléctrica de anoche fue muy intensa y ruidosa", exampleTranslation: "Last night's thunderstorm was very intense and loud" },
      { id: "weather8", english: "Heatwave", spanish: "Ola de calor", difficulty: "medium", example: "Esta ola de calor ha durado más de dos semanas", exampleTranslation: "This heatwave has lasted more than two weeks" },
      { id: "weather9", english: "Freezing", spanish: "Helado", difficulty: "medium", example: "Hace un frío helado afuera, no salgas sin abrigo", exampleTranslation: "It's freezing cold outside, don't go out without a coat" },
      { id: "weather10", english: "Drizzle", spanish: "Llovizna", difficulty: "medium", example: "Solo es una llovizna ligera, no necesitas paraguas", exampleTranslation: "It's just a light drizzle, you don't need an umbrella" },
      { id: "weather11", english: "Hurricane", spanish: "Huracán", difficulty: "medium", example: "El huracán causó daños severos en la costa este año", exampleTranslation: "The hurricane caused severe damage on the coast this year" },
      { id: "weather12", english: "Forecast", spanish: "Pronóstico", difficulty: "medium", example: "Según el pronóstico del tiempo, lloverá toda la semana", exampleTranslation: "According to the weather forecast, it will rain all week" },
      { id: "weather13", english: "What's the weather like?", spanish: "¿Cómo está el tiempo?", difficulty: "hard", example: "¿Cómo está el tiempo allá? Aquí está lloviendo mucho", exampleTranslation: "What's the weather like there? It's raining a lot here" },
      { id: "weather14", english: "It's getting colder", spanish: "Está haciendo más frío", difficulty: "hard", example: "Está haciendo cada vez más frío, el invierno se acerca", exampleTranslation: "It's getting colder and colder, winter is approaching" },
      { id: "weather15", english: "I hope it clears up", spanish: "Espero que despeje", difficulty: "hard", example: "Espero que despeje pronto para poder salir a caminar", exampleTranslation: "I hope it clears up soon so I can go out for a walk" }
    ]
  },

  indoor_activities: {
    name: "Indoor Activities",
    description: "Activities to do inside the home",
    icon: Home,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "indoor1", english: "Read a book", spanish: "Leer un libro", difficulty: "easy", example: "Me gusta leer un libro interesante los domingos por la tarde", exampleTranslation: "I like to read an interesting book on Sunday afternoons" },
      { id: "indoor2", english: "Watch a movie", spanish: "Ver una película", difficulty: "easy", example: "Vamos a ver una película de comedia esta noche en casa", exampleTranslation: "We're going to watch a comedy movie tonight at home" },
      { id: "indoor3", english: "Play board games", spanish: "Jugar juegos de mesa", difficulty: "easy", example: "Jugamos juegos de mesa en familia todos los viernes", exampleTranslation: "We play board games as a family every Friday" },
      { id: "indoor4", english: "Cook", spanish: "Cocinar", difficulty: "easy", example: "Disfruto cocinar recetas nuevas los fines de semana", exampleTranslation: "I enjoy cooking new recipes on weekends" },
      { id: "indoor5", english: "Listen to music", spanish: "Escuchar música", difficulty: "easy", example: "Escucho música relajante mientras trabajo desde casa", exampleTranslation: "I listen to relaxing music while working from home" },
      { id: "indoor6", english: "Do puzzles", spanish: "Hacer rompecabezas", difficulty: "easy", example: "Hacer rompecabezas es una actividad relajante para la mente", exampleTranslation: "Doing puzzles is a relaxing activity for the mind" },
      { id: "indoor7", english: "Crafts", spanish: "Manualidades", difficulty: "medium", example: "A mi hija le encanta hacer manualidades con papel y pintura", exampleTranslation: "My daughter loves doing crafts with paper and paint" },
      { id: "indoor8", english: "Bake", spanish: "Hornear", difficulty: "medium", example: "Me gusta hornear galletas caseras para mi familia", exampleTranslation: "I like to bake homemade cookies for my family" },
      { id: "indoor9", english: "Knit", spanish: "Tejer", difficulty: "medium", example: "Mi abuela teje bufandas de lana para el invierno", exampleTranslation: "My grandmother knits wool scarves for winter" },
      { id: "indoor10", english: "Video games", spanish: "Videojuegos", difficulty: "medium", example: "Juego videojuegos online con amigos de todo el mundo", exampleTranslation: "I play video games online with friends from around the world" },
      { id: "indoor11", english: "Organize", spanish: "Organizar", difficulty: "medium", example: "Paso la tarde organizando fotos antiguas en álbumes", exampleTranslation: "I spend the afternoon organizing old photos in albums" },
      { id: "indoor12", english: "Home workout", spanish: "Ejercicio en casa", difficulty: "medium", example: "Hago ejercicio en casa siguiendo videos de YouTube", exampleTranslation: "I do home workouts following YouTube videos" },
      { id: "indoor13", english: "Let's stay in tonight", spanish: "Quedémonos en casa esta noche", difficulty: "hard", example: "Hace mucho frío afuera, quedémonos en casa esta noche", exampleTranslation: "It's very cold outside, let's stay in tonight" },
      { id: "indoor14", english: "I'm having a lazy day", spanish: "Estoy teniendo un día relajado", difficulty: "hard", example: "Hoy estoy teniendo un día completamente relajado sin hacer nada productivo", exampleTranslation: "Today I'm having a completely lazy day without doing anything productive" },
      { id: "indoor15", english: "What should we do indoors?", spanish: "¿Qué deberíamos hacer adentro?", difficulty: "hard", example: "Está lloviendo mucho, ¿qué deberíamos hacer adentro para entretenernos?", exampleTranslation: "It's raining a lot, what should we do indoors to entertain ourselves?" }
    ]
  },

  outdoor_activities: {
    name: "Outdoor Activities",
    description: "Activities to do outside",
    icon: TreePine,
    color: "from-emerald-400 to-green-500",
    level: "beginner",
    words: [
      { id: "outdoor1", english: "Walk", spanish: "Caminar", difficulty: "easy", example: "Me gusta caminar por el parque todas las tardes", exampleTranslation: "I like to walk through the park every afternoon" },
      { id: "outdoor2", english: "Jog", spanish: "Trotar", difficulty: "easy", example: "Troto treinta minutos cada mañana antes del desayuno", exampleTranslation: "I jog for thirty minutes every morning before breakfast" },
      { id: "outdoor3", english: "Bike ride", spanish: "Paseo en bicicleta", difficulty: "easy", example: "Un paseo en bicicleta por la ciudad es muy divertido", exampleTranslation: "A bike ride through the city is very fun" },
      { id: "outdoor4", english: "Picnic", spanish: "Picnic", difficulty: "easy", example: "Organizamos un picnic familiar en el parque este domingo", exampleTranslation: "We're organizing a family picnic in the park this Sunday" },
      { id: "outdoor5", english: "Playground", spanish: "Parque infantil", difficulty: "easy", example: "Los niños juegan en el parque infantil después de la escuela", exampleTranslation: "Children play in the playground after school" },
      { id: "outdoor6", english: "Barbecue", spanish: "Barbacoa", difficulty: "easy", example: "Haremos una barbacoa en el jardín este sábado", exampleTranslation: "We'll have a barbecue in the garden this Saturday" },
      { id: "outdoor7", english: "Camping", spanish: "Acampar", difficulty: "medium", example: "Vamos a acampar en el bosque este fin de semana largo", exampleTranslation: "We're going camping in the forest this long weekend" },
      { id: "outdoor8", english: "Fishing", spanish: "Pescar", difficulty: "medium", example: "Mi abuelo me enseñó a pescar cuando era pequeño", exampleTranslation: "My grandfather taught me to fish when I was little" },
      { id: "outdoor9", english: "Bird watching", spanish: "Observación de aves", difficulty: "medium", example: "La observación de aves es un pasatiempo relajante y educativo", exampleTranslation: "Bird watching is a relaxing and educational hobby" },
      { id: "outdoor10", english: "Outdoor concert", spanish: "Concierto al aire libre", difficulty: "medium", example: "Asistimos a un concierto al aire libre en el parque central", exampleTranslation: "We attended an outdoor concert in the central park" },
      { id: "outdoor11", english: "Nature walk", spanish: "Caminata por la naturaleza", difficulty: "medium", example: "Una caminata por la naturaleza es perfecta para desconectarse", exampleTranslation: "A nature walk is perfect for disconnecting" },
      { id: "outdoor12", english: "Fresh air", spanish: "Aire fresco", difficulty: "medium", example: "Necesito salir a respirar aire fresco después de estar encerrado", exampleTranslation: "I need to go out and breathe fresh air after being cooped up" },
      { id: "outdoor13", english: "Let's go outside", spanish: "Salgamos afuera", difficulty: "hard", example: "Hace un día hermoso, salgamos afuera a disfrutar del sol", exampleTranslation: "It's a beautiful day, let's go outside to enjoy the sun" },
      { id: "outdoor14", english: "I love being outdoors", spanish: "Me encanta estar al aire libre", difficulty: "hard", example: "Me encanta estar al aire libre, me conecta con la naturaleza", exampleTranslation: "I love being outdoors, it connects me with nature" },
      { id: "outdoor15", english: "The weather is perfect for...", spanish: "El clima es perfecto para...", difficulty: "hard", example: "El clima está perfecto para hacer una caminata larga por las montañas", exampleTranslation: "The weather is perfect for taking a long hike through the mountains" }
    ]
  },

  conversations_small_talk: {
    name: "Conversations & Small Talk",
    description: "Making conversation and small talk",
    icon: MessageCircle,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "conv1", english: "How are you?", spanish: "¿Cómo estás?", difficulty: "easy", example: "¿Cómo estás hoy? Espero que hayas tenido un buen día", exampleTranslation: "How are you today? I hope you've had a good day" },
      { id: "conv2", english: "Nice weather", spanish: "Buen tiempo", difficulty: "easy", example: "¡Qué buen tiempo hace hoy! Perfecto para salir", exampleTranslation: "What nice weather today! Perfect for going out" },
      { id: "conv3", english: "Long time no see", spanish: "Cuánto tiempo sin verte", difficulty: "easy", example: "¡Cuánto tiempo sin verte! ¿Cómo has estado?", exampleTranslation: "Long time no see! How have you been?" },
      { id: "conv4", english: "By the way", spanish: "Por cierto", difficulty: "easy", example: "Por cierto, ¿recibiste mi mensaje de ayer?", exampleTranslation: "By the way, did you receive my message from yesterday?" },
      { id: "conv5", english: "Speaking of which", spanish: "Hablando de eso", difficulty: "easy", example: "Hablando de eso, ¿viste la película que te recomendé?", exampleTranslation: "Speaking of which, did you watch the movie I recommended?" },
      { id: "conv6", english: "That reminds me", spanish: "Eso me recuerda", difficulty: "easy", example: "Eso me recuerda que tengo que llamar a mi madre", exampleTranslation: "That reminds me I have to call my mother" },
      { id: "conv7", english: "Anyway", spanish: "En fin", difficulty: "medium", example: "En fin, creo que ya es hora de irme a casa", exampleTranslation: "Anyway, I think it's time for me to go home" },
      { id: "conv8", english: "You know what I mean?", spanish: "¿Sabes a qué me refiero?", difficulty: "medium", example: "A veces es difícil expresarse, ¿sabes a qué me refiero?", exampleTranslation: "Sometimes it's hard to express yourself, you know what I mean?" },
      { id: "conv9", english: "That's interesting", spanish: "Qué interesante", difficulty: "medium", example: "Qué interesante lo que me cuentas sobre tu viaje", exampleTranslation: "That's interesting what you're telling me about your trip" },
      { id: "conv10", english: "Tell me about it", spanish: "Cuéntame de eso", difficulty: "medium", example: "Escuché que conseguiste un trabajo nuevo, cuéntame todo", exampleTranslation: "I heard you got a new job, tell me all about it" },
      { id: "conv11", english: "I couldn't agree more", spanish: "No podría estar más de acuerdo", difficulty: "medium", example: "No podría estar más de acuerdo contigo en ese punto", exampleTranslation: "I couldn't agree more with you on that point" },
      { id: "conv12", english: "Let's catch up", spanish: "Pongámonos al día", difficulty: "medium", example: "Hace mucho que no hablamos, pongámonos al día tomando un café", exampleTranslation: "We haven't talked in a while, let's catch up over coffee" },
      { id: "conv13", english: "It's been ages!", spanish: "¡Ha pasado una eternidad!", difficulty: "hard", example: "¡Ha pasado una eternidad desde la última vez que nos vimos!", exampleTranslation: "It's been ages since we last saw each other!" },
      { id: "conv14", english: "What have you been up to?", spanish: "¿Qué has estado haciendo?", difficulty: "hard", example: "¿Qué has estado haciendo últimamente? Cuéntame todas las novedades", exampleTranslation: "What have you been up to lately? Tell me all the news" },
      { id: "conv15", english: "We should do this more often", spanish: "Deberíamos hacer esto más seguido", difficulty: "hard", example: "Me encanta hablar contigo, deberíamos hacer esto más seguido", exampleTranslation: "I love talking with you, we should do this more often" }
    ]
  },

  building_construction: {
    name: "Building & Construction",
    description: "Construction and building vocabulary",
    icon: Hammer,
    color: "from-orange-500 to-amber-600",
    level: "advanced",
    words: [
      { id: "build1", english: "Build", spanish: "Construir", difficulty: "easy", example: "Van a construir un edificio nuevo en esa esquina", exampleTranslation: "They're going to build a new building on that corner" },
      { id: "build2", english: "Wall", spanish: "Pared", difficulty: "easy", example: "La pared necesita ser pintada de un color más claro", exampleTranslation: "The wall needs to be painted in a lighter color" },
      { id: "build3", english: "Roof", spanish: "Techo", difficulty: "easy", example: "El techo de la casa tiene goteras que necesitan reparación", exampleTranslation: "The house roof has leaks that need repair" },
      { id: "build4", english: "Foundation", spanish: "Cimientos", difficulty: "easy", example: "Los cimientos de un edificio deben ser muy fuertes", exampleTranslation: "A building's foundation must be very strong" },
      { id: "build5", english: "Brick", spanish: "Ladrillo", difficulty: "easy", example: "La casa está construida completamente con ladrillos rojos", exampleTranslation: "The house is built completely with red bricks" },
      { id: "build6", english: "Cement", spanish: "Cemento", difficulty: "easy", example: "Mezclamos cemento con arena y agua para hacer concreto", exampleTranslation: "We mix cement with sand and water to make concrete" },
      { id: "build7", english: "Architect", spanish: "Arquitecto", difficulty: "medium", example: "El arquitecto diseñó una casa moderna y funcional", exampleTranslation: "The architect designed a modern and functional house" },
      { id: "build8", english: "Blueprint", spanish: "Plano", difficulty: "medium", example: "Revisamos los planos antes de comenzar la construcción", exampleTranslation: "We reviewed the blueprints before starting construction" },
      { id: "build9", english: "Contractor", spanish: "Contratista", difficulty: "medium", example: "El contratista terminó la obra dos semanas antes de tiempo", exampleTranslation: "The contractor finished the work two weeks ahead of schedule" },
      { id: "build10", english: "Scaffolding", spanish: "Andamio", difficulty: "medium", example: "Los trabajadores usan andamios para llegar a las partes altas", exampleTranslation: "Workers use scaffolding to reach the high parts" },
      { id: "build11", english: "Renovation", spanish: "Renovación", difficulty: "medium", example: "La renovación completa de la casa tomó seis meses", exampleTranslation: "The complete renovation of the house took six months" },
      { id: "build12", english: "Permit", spanish: "Permiso", difficulty: "medium", example: "Necesitas un permiso de construcción antes de empezar la obra", exampleTranslation: "You need a building permit before starting the work" },
      { id: "build13", english: "When will it be finished?", spanish: "¿Cuándo estará terminado?", difficulty: "hard", example: "¿Cuándo estará terminado el proyecto de construcción?", exampleTranslation: "When will the construction project be finished?" },
      { id: "build14", english: "We're remodeling", spanish: "Estamos remodelando", difficulty: "hard", example: "Estamos remodelando completamente la cocina y los baños", exampleTranslation: "We're completely remodeling the kitchen and bathrooms" },
      { id: "build15", english: "It's under construction", spanish: "Está en construcción", difficulty: "hard", example: "El nuevo centro comercial todavía está en construcción", exampleTranslation: "The new shopping center is still under construction" }
    ]
  }
};
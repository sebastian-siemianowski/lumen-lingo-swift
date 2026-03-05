/**
 * SPANISH → ENGLISH FLASHCARDS - PART 5
 * NEW EXPANSION CATEGORIES (35-44)
 * 
 * Native Language: Spanish (Español)
 * Target Language: English
 * 
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Book,
  ChefHat,
  CloudRain,
  GraduationCap,
  TrendingUp,
  Palette,
  Microscope,
  Users,
  Wheat,
  Building2,
  Leaf,
  Clapperboard,
  Briefcase,
  Truck
} from "lucide-react";

export const flashcardsCategories_part5 = {
  books_reading: {
    name: "Libros y lectura",
    description: "Literatura, tipos de libros y el placer de leer",
    icon: Book,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "book1", spanish: "Libro", english: "Book", difficulty: "easy", example: "I love reading books before going to sleep every night peacefully relaxing quietly.", exampleTranslation: "Me encanta leer libros antes de ir a dormir cada noche pacíficamente relajándome tranquilamente." },
      { id: "book2", spanish: "Novela", english: "Novel", difficulty: "easy", example: "This novel is fascinating and I can't put it down at all!", exampleTranslation: "Esta novela es fascinante y no puedo dejarla en absoluto!" },
      { id: "book3", spanish: "Autor", english: "Author", difficulty: "easy", example: "The author of this book is very famous around the world internationally.", exampleTranslation: "El autor de este libro es muy famoso alrededor del mundo internacionalmente." },
      { id: "book4", spanish: "Página", english: "Page", difficulty: "easy", example: "I read fifty pages of the book yesterday evening before sleeping comfortably.", exampleTranslation: "Leí cincuenta páginas del libro ayer por la noche antes de dormir cómodamente." },
      { id: "book5", spanish: "Capítulo", english: "Chapter", difficulty: "easy", example: "This chapter is very interesting and full of unexpected surprises throughout completely.", exampleTranslation: "Este capítulo es muy interesante y lleno de sorpresas inesperadas completamente." },
      { id: "book6", spanish: "Biblioteca", english: "Library", difficulty: "easy", example: "The public library is open every day except Sunday for all visitors freely.", exampleTranslation: "La biblioteca pública está abierta cada día excepto el domingo para todos los visitantes gratuitamente." },
      { id: "book7", spanish: "Librería", english: "Bookstore", difficulty: "medium", example: "I love browsing in the bookstore looking for new interesting books to read daily.", exampleTranslation: "Me encanta explorar en la librería buscando nuevos libros interesantes para leer diariamente." },
      { id: "book8", spanish: "Portada", english: "Cover", difficulty: "medium", example: "The book cover is beautifully designed with colorful illustrations attracting attention immediately.", exampleTranslation: "La portada del libro está bellamente diseñada con ilustraciones coloridas atrayendo atención inmediatamente." },
      { id: "book9", spanish: "Trama", english: "Plot", difficulty: "medium", example: "The plot of this mystery novel is very complex and keeps you guessing until the end.", exampleTranslation: "La trama de esta novela de misterio es muy compleja y te mantiene adivinando hasta el final." },
      { id: "book10", spanish: "Personaje", english: "Character", difficulty: "medium", example: "The main character in this story is brave and intelligent facing many challenges courageously.", exampleTranslation: "El personaje principal en esta historia es valiente e inteligente enfrentando muchos desafíos valientemente." },
      { id: "book11", spanish: "Préstamo", english: "Loan", difficulty: "medium", example: "You can borrow books from the library for two weeks at a time for free.", exampleTranslation: "Puedes pedir prestados libros de la biblioteca por dos semanas a la vez gratuitamente." },
      { id: "book12", spanish: "Género literario", english: "Literary genre", difficulty: "medium", example: "My favorite literary genre is science fiction with space adventures and future technology always.", exampleTranslation: "Mi género literario favorito es la ciencia ficción con aventuras espaciales y tecnología del futuro siempre." },
      { id: "book13", spanish: "Estoy leyendo un libro", english: "I am reading a book", difficulty: "hard", example: "I am currently reading a fascinating book about world history! It's incredibly interesting and detailed!", exampleTranslation: "¡Estoy actualmente leyendo un libro fascinante sobre historia mundial! ¡Es increíblemente interesante y detallado!" },
      { id: "book14", spanish: "¿Me recomiendas algo?", english: "Can you recommend something?", difficulty: "hard", example: "Can you recommend a good book to read? I'm looking for something exciting and adventurous!", exampleTranslation: "¿Puedes recomendarme un buen libro para leer? ¡Estoy buscando algo emocionante y aventurero!" },
      { id: "book15", spanish: "No puedo dejar de leer", english: "I can't stop reading", difficulty: "hard", example: "I absolutely can't stop reading this book! It's so captivating and thrilling from start to finish!", exampleTranslation: "¡Absolutamente no puedo dejar de leer este libro! ¡Es tan cautivador y emocionante de principio a fin!" }
    ]
  },

  cooking_kitchen: {
    name: "Cocina y gastronomía",
    description: "Arte culinario, preparación de alimentos y recetas",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "cook1", spanish: "Cocinar", english: "Cook", difficulty: "easy", example: "I love to cook delicious meals for my family every day at home.", exampleTranslation: "Me encanta cocinar comidas deliciosas para mi familia cada día en casa." },
      { id: "cook2", spanish: "Receta", english: "Recipe", difficulty: "easy", example: "This recipe is easy to follow and the result is always delicious perfectly.", exampleTranslation: "Esta receta es fácil de seguir y el resultado es siempre delicioso perfectamente." },
      { id: "cook3", spanish: "Ingredientes", english: "Ingredients", difficulty: "easy", example: "Make sure you have all the ingredients before starting to cook the meal.", exampleTranslation: "Asegúrate de tener todos los ingredientes antes de empezar a cocinar la comida." },
      { id: "cook4", spanish: "Horno", english: "Oven", difficulty: "easy", example: "Preheat the oven to two hundred degrees before putting the cake inside carefully.", exampleTranslation: "Precalienta el horno a doscientos grados antes de meter el pastel adentro cuidadosamente." },
      { id: "cook5", spanish: "Sartén", english: "Pan", difficulty: "easy", example: "Heat the pan with oil before adding the vegetables for frying quickly.", exampleTranslation: "Calienta la sartén con aceite antes de agregar las verduras para freír rápidamente." },
      { id: "cook6", spanish: "Olla", english: "Pot", difficulty: "easy", example: "Put water in the pot and bring it to a boil for cooking pasta.", exampleTranslation: "Pon agua en la olla y hiérvela para cocinar la pasta." },
      { id: "cook7", spanish: "Cuchillo", english: "Knife", difficulty: "medium", example: "Use a sharp knife to cut the vegetables into small pieces carefully and safely.", exampleTranslation: "Usa un cuchillo afilado para cortar las verduras en pedazos pequeños cuidadosamente y con seguridad." },
      { id: "cook8", spanish: "Hornear", english: "Bake", difficulty: "medium", example: "Bake the bread in the oven for forty minutes until golden brown perfectly crispy.", exampleTranslation: "Hornea el pan en el horno por cuarenta minutos hasta que esté dorado perfectamente crujiente." },
      { id: "cook9", spanish: "Freír", english: "Fry", difficulty: "medium", example: "Fry the chicken in hot oil until it's crispy and golden brown all around.", exampleTranslation: "Fríe el pollo en aceite caliente hasta que esté crujiente y dorado por todos lados." },
      { id: "cook10", spanish: "Hervir", english: "Boil", difficulty: "medium", example: "Boil the potatoes for twenty minutes until they are soft and tender completely cooked.", exampleTranslation: "Hierve las papas por veinte minutos hasta que estén blandas y tiernas completamente cocidas." },
      { id: "cook11", spanish: "Mezclar", english: "Mix", difficulty: "medium", example: "Mix all the ingredients together in a large bowl until well combined thoroughly evenly.", exampleTranslation: "Mezcla todos los ingredientes juntos en un tazón grande hasta que estén bien combinados completamente uniformemente." },
      { id: "cook12", spanish: "Sazonar", english: "Season", difficulty: "medium", example: "Season the meat with salt, pepper, and herbs before cooking it properly tastefully.", exampleTranslation: "Sazona la carne con sal, pimienta y hierbas antes de cocinarla apropiadamente sabroso." },
      { id: "cook13", spanish: "Me encanta cocinar", english: "I love to cook", difficulty: "hard", example: "I absolutely love to cook! Trying new recipes is my favorite hobby and passion always!", exampleTranslation: "¡Me encanta absolutamente cocinar! ¡Probar nuevas recetas es mi pasatiempo y pasión favorita siempre!" },
      { id: "cook14", spanish: "¿Cómo se prepara?", english: "How do you prepare it?", difficulty: "hard", example: "How exactly do you prepare this dish? Can you share the recipe with me please step by step?", exampleTranslation: "¿Cómo se prepara exactamente este plato? ¿Puedes compartir la receta conmigo por favor paso a paso?" },
      { id: "cook15", spanish: "Huele delicioso", english: "It smells delicious", difficulty: "hard", example: "That smells absolutely delicious! What are you cooking? I can't wait to taste it soon!", exampleTranslation: "¡Eso huele absolutamente delicioso! ¿Qué estás cocinando? ¡No puedo esperar para probarlo pronto!" }
    ]
  },

  weather_climate: {
    name: "Clima y meteorología",
    description: "Condiciones atmosféricas y fenómenos del tiempo",
    icon: CloudRain,
    color: "from-sky-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "weath1", spanish: "Clima", english: "Weather", difficulty: "easy", example: "The weather is beautiful today with clear blue skies and warm sunshine all day.", exampleTranslation: "El clima está hermoso hoy con cielos azules claros y sol cálido todo el día." },
      { id: "weath2", spanish: "Sol", english: "Sun", difficulty: "easy", example: "The sun is shining brightly today, perfect for going to the beach happily.", exampleTranslation: "El sol está brillando intensamente hoy, perfecto para ir a la playa felizmente." },
      { id: "weath3", spanish: "Nubes", english: "Clouds", difficulty: "easy", example: "There are many clouds in the sky today, it might rain later this afternoon.", exampleTranslation: "Hay muchas nubes en el cielo hoy, podría llover después esta tarde." },
      { id: "weath4", spanish: "Viento", english: "Wind", difficulty: "easy", example: "The wind is very strong today, be careful when walking outside on the streets.", exampleTranslation: "El viento está muy fuerte hoy, ten cuidado al caminar afuera en las calles." },
      { id: "weath5", spanish: "Frío", english: "Cold", difficulty: "easy", example: "It's very cold outside today, you need to wear a warm coat and scarf.", exampleTranslation: "Hace mucho frío afuera hoy, necesitas usar un abrigo cálido y bufanda." },
      { id: "weath6", spanish: "Calor", english: "Heat", difficulty: "easy", example: "The heat is unbearable in summer here, we always use air conditioning at home.", exampleTranslation: "El calor es insoportable en verano aquí, siempre usamos aire acondicionado en casa." },
      { id: "weath7", spanish: "Neblina", english: "Fog", difficulty: "medium", example: "There is thick fog this morning making it difficult to see clearly on the road.", exampleTranslation: "Hay neblina espesa esta mañana haciendo difícil ver claramente en la carretera." },
      { id: "weath8", spanish: "Granizo", english: "Hail", difficulty: "medium", example: "The hail storm damaged many cars parked outside on the street yesterday afternoon unfortunately.", exampleTranslation: "La tormenta de granizo dañó muchos autos estacionados afuera en la calle ayer por la tarde desafortunadamente." },
      { id: "weath9", spanish: "Arcoíris", english: "Rainbow", difficulty: "medium", example: "After the rain stopped, a beautiful rainbow appeared in the sky with vibrant colors brightly.", exampleTranslation: "Después de que paró la lluvia, apareció un arcoíris hermoso en el cielo con colores vibrantes brillantemente." },
      { id: "weath10", spanish: "Humedad", english: "Humidity", difficulty: "medium", example: "The humidity is very high today making the air feel heavy and uncomfortable sticky.", exampleTranslation: "La humedad está muy alta hoy haciendo que el aire se sienta pesado e incómodo pegajoso." },
      { id: "weath11", spanish: "Helada", english: "Frost", difficulty: "medium", example: "There was frost on the grass this morning because the temperature dropped below freezing overnight.", exampleTranslation: "Hubo helada en el pasto esta mañana porque la temperatura bajó bajo cero durante la noche." },
      { id: "weath12", spanish: "Huracán", english: "Hurricane", difficulty: "medium", example: "The hurricane is approaching the coast and people are evacuating to safety urgently quickly immediately.", exampleTranslation: "El huracán se está acercando a la costa y la gente está evacuando a lugares seguros urgentemente rápidamente inmediatamente." },
      { id: "weath13", spanish: "¿Qué tiempo hace?", english: "What's the weather like?", difficulty: "hard", example: "What's the weather like there today? Is it sunny or cloudy and rainy right now?", exampleTranslation: "¿Qué tiempo hace allí hoy? ¿Está soleado o nublado y lluvioso ahora mismo?" },
      { id: "weath14", spanish: "Parece que va a llover", english: "It looks like it's going to rain", difficulty: "hard", example: "It looks like it's going to rain soon! The sky is getting very dark and cloudy!", exampleTranslation: "¡Parece que va a llover pronto! ¡El cielo se está poniendo muy oscuro y nublado!" },
      { id: "weath15", spanish: "Hace un día perfecto", english: "It's a perfect day", difficulty: "hard", example: "It's such a perfect day today! Not too hot, not too cold, just absolutely ideal weather!", exampleTranslation: "¡Hace un día tan perfecto hoy! Ni muy caliente, ni muy frío, ¡clima absolutamente ideal!" }
    ]
  },

  school_education: {
    name: "Escuela y educación",
    description: "Sistema educativo, aprendizaje y vida académica",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "school1", spanish: "Escuela", english: "School", difficulty: "easy", example: "The children go to school every morning from Monday to Friday regularly punctually.", exampleTranslation: "Los niños van a la escuela cada mañana de lunes a viernes regularmente puntualmente." },
      { id: "school2", spanish: "Maestro", english: "Teacher", difficulty: "easy", example: "The teacher explains the lesson very clearly to all students in the classroom patiently.", exampleTranslation: "El maestro explica la lección muy claramente a todos los estudiantes en el aula pacientemente." },
      { id: "school3", spanish: "Estudiante", english: "Student", difficulty: "easy", example: "Every student must do their homework before coming to class tomorrow morning prepared.", exampleTranslation: "Cada estudiante debe hacer su tarea antes de venir a clase mañana por la mañana preparado." },
      { id: "school4", spanish: "Clase", english: "Class", difficulty: "easy", example: "The math class starts at nine o'clock in the morning every weekday regularly.", exampleTranslation: "La clase de matemáticas comienza a las nueve en punto cada día de semana regularmente." },
      { id: "school5", spanish: "Examen", english: "Exam", difficulty: "easy", example: "We have an important exam tomorrow, we need to study hard tonight thoroughly.", exampleTranslation: "Tenemos un examen importante mañana, necesitamos estudiar duro esta noche completamente." },
      { id: "school6", spanish: "Tarea", english: "Homework", difficulty: "easy", example: "The teacher gave us a lot of homework for the weekend to complete at home.", exampleTranslation: "El maestro nos dio mucha tarea para el fin de semana para completar en casa." },
      { id: "school7", spanish: "Cuaderno", english: "Notebook", difficulty: "medium", example: "I write all my notes in this notebook during every class session carefully neatly.", exampleTranslation: "Escribo todas mis notas en este cuaderno durante cada clase cuidadosamente prolijamente." },
      { id: "school8", spanish: "Lápiz", english: "Pencil", difficulty: "medium", example: "I need a sharp pencil to write in my notebook and do my homework properly.", exampleTranslation: "Necesito un lápiz afilado para escribir en mi cuaderno y hacer mi tarea apropiadamente." },
      { id: "school9", spanish: "Materia", english: "Subject", difficulty: "medium", example: "My favorite subject in school is history because I find it fascinating and interesting always.", exampleTranslation: "Mi materia favorita en la escuela es historia porque la encuentro fascinante e interesante siempre." },
      { id: "school10", spanish: "Calificación", english: "Grade", difficulty: "medium", example: "I got a very good grade on the last exam after studying hard all week.", exampleTranslation: "Obtuve una calificación muy buena en el último examen después de estudiar duro toda la semana." },
      { id: "school11", spanish: "Recreo", english: "Recess", difficulty: "medium", example: "The children play outside during recess having fun with their friends for fifteen minutes.", exampleTranslation: "Los niños juegan afuera durante el recreo divirtiéndose con sus amigos por quince minutos." },
      { id: "school12", spanish: "Mochila", english: "Backpack", difficulty: "medium", example: "My backpack is very heavy because I carry all my textbooks to school every day.", exampleTranslation: "Mi mochila está muy pesada porque cargo todos mis libros de texto a la escuela cada día." },
      { id: "school13", spanish: "Tengo mucha tarea", english: "I have a lot of homework", difficulty: "hard", example: "I have so much homework today! I'll be studying all evening long without stopping probably!", exampleTranslation: "¡Tengo mucha tarea hoy! ¡Estaré estudiando toda la tarde larga sin parar probablemente!" },
      { id: "school14", spanish: "¿Qué sacaste en el examen?", english: "What did you get on the exam?", difficulty: "hard", example: "What grade did you get on the math exam? I hope you did well and studied hard!", exampleTranslation: "¿Qué calificación sacaste en el examen de matemáticas? ¡Espero que te haya ido bien y hayas estudiado duro!" },
      { id: "school15", spanish: "Me gusta aprender", english: "I like to learn", difficulty: "hard", example: "I really like to learn new things! Every day at school is an exciting opportunity to grow!", exampleTranslation: "¡Realmente me gusta aprender cosas nuevas! ¡Cada día en la escuela es una oportunidad emocionante para crecer!" }
    ]
  },

  business_economy: {
    name: "Negocios y economía",
    description: "Mundo empresarial, comercio y finanzas corporativas",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-600",
    level: "advanced",
    words: [
      { id: "biz1", spanish: "Negocio", english: "Business", difficulty: "easy", example: "He started his own business five years ago and it's very successful now.", exampleTranslation: "Él comenzó su propio negocio hace cinco años y es muy exitoso ahora." },
      { id: "biz2", spanish: "Empresa", english: "Company", difficulty: "easy", example: "The company has over five hundred employees working in offices around the world.", exampleTranslation: "La empresa tiene más de quinientos empleados trabajando en oficinas alrededor del mundo." },
      { id: "biz3", spanish: "Cliente", english: "Client", difficulty: "easy", example: "We must always provide excellent service to all our clients every single time.", exampleTranslation: "Siempre debemos proporcionar un servicio excelente a todos nuestros clientes cada vez." },
      { id: "biz4", spanish: "Vender", english: "Sell", difficulty: "easy", example: "We sell high-quality products at reasonable prices to customers worldwide internationally.", exampleTranslation: "Vendemos productos de alta calidad a precios razonables a clientes mundialmente internacionalmente." },
      { id: "biz5", spanish: "Comprar", english: "Buy", difficulty: "easy", example: "The company wants to buy new equipment for the factory this year soon.", exampleTranslation: "La empresa quiere comprar equipo nuevo para la fábrica este año pronto." },
      { id: "biz6", spanish: "Ganancia", english: "Profit", difficulty: "easy", example: "The company made a large profit this year exceeding all expectations significantly greatly.", exampleTranslation: "La empresa obtuvo una gran ganancia este año superando todas las expectativas significativamente grandemente." },
      { id: "biz7", spanish: "Inversión", english: "Investment", difficulty: "medium", example: "This investment in new technology will help the company grow faster in the future successfully.", exampleTranslation: "Esta inversión en nueva tecnología ayudará a la empresa a crecer más rápido en el futuro exitosamente." },
      { id: "biz8", spanish: "Mercado", english: "Market", difficulty: "medium", example: "We need to analyze the market carefully before launching our new product line worldwide globally.", exampleTranslation: "Necesitamos analizar el mercado cuidadosamente antes de lanzar nuestra nueva línea de productos mundialmente globalmente." },
      { id: "biz9", spanish: "Competencia", english: "Competition", difficulty: "medium", example: "The competition in this industry is very fierce and requires constant innovation always continuously.", exampleTranslation: "La competencia en esta industria es muy feroz y requiere innovación constante siempre continuamente." },
      { id: "biz10", spanish: "Estrategia", english: "Strategy", difficulty: "medium", example: "We need a good marketing strategy to reach more customers effectively successfully efficiently.", exampleTranslation: "Necesitamos una buena estrategia de marketing para alcanzar más clientes efectivamente exitosamente eficientemente." },
      { id: "biz11", spanish: "Presupuesto", english: "Budget", difficulty: "medium", example: "We must stay within the budget when planning this new project carefully responsibly wisely.", exampleTranslation: "Debemos mantenernos dentro del presupuesto al planear este nuevo proyecto cuidadosamente responsablemente sabiamente." },
      { id: "biz12", spanish: "Negociación", english: "Negotiation", difficulty: "medium", example: "The negotiation with suppliers took several weeks but we reached a good agreement finally successfully.", exampleTranslation: "La negociación con proveedores tomó varias semanas pero alcanzamos un buen acuerdo finalmente exitosamente." },
      { id: "biz13", spanish: "Tengo una reunión", english: "I have a meeting", difficulty: "hard", example: "I have an important business meeting at three o'clock this afternoon! I need to prepare thoroughly now!", exampleTranslation: "¡Tengo una reunión de negocios importante a las tres en punto esta tarde! ¡Necesito prepararme completamente ahora!" },
      { id: "biz14", spanish: "Cerramos el trato", english: "We closed the deal", difficulty: "hard", example: "We finally closed the deal! After months of negotiations, we reached an excellent agreement for both sides!", exampleTranslation: "¡Finalmente cerramos el trato! ¡Después de meses de negociaciones, alcanzamos un acuerdo excelente para ambos lados!" },
      { id: "biz15", spanish: "Las ventas están bajando", english: "Sales are dropping", difficulty: "hard", example: "Sales are dropping this quarter! We need to develop a new marketing strategy immediately urgently!", exampleTranslation: "¡Las ventas están bajando este trimestre! ¡Necesitamos desarrollar una nueva estrategia de marketing inmediatamente urgentemente!" }
    ]
  },

  art_culture: {
    name: "Arte y cultura",
    description: "Expresión artística, museos y patrimonio cultural",
    icon: Palette,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "art1", spanish: "Arte", english: "Art", difficulty: "easy", example: "Art is a beautiful form of human expression that transcends all languages and cultures.", exampleTranslation: "El arte es una forma hermosa de expresión humana que trasciende todos los idiomas y culturas." },
      { id: "art2", spanish: "Pintura", english: "Painting", difficulty: "easy", example: "This painting is a masterpiece created by a famous artist centuries ago beautifully.", exampleTranslation: "Esta pintura es una obra maestra creada por un artista famoso hace siglos hermosamente." },
      { id: "art3", spanish: "Escultura", english: "Sculpture", difficulty: "easy", example: "The sculpture in the park is made of marble and is very impressive tall.", exampleTranslation: "La escultura en el parque está hecha de mármol y es muy impresionante alta." },
      { id: "art4", spanish: "Museo", english: "Museum", difficulty: "easy", example: "We visited the art museum yesterday and saw many beautiful paintings from different periods.", exampleTranslation: "Visitamos el museo de arte ayer y vimos muchas pinturas hermosas de diferentes períodos." },
      { id: "art5", spanish: "Exposición", english: "Exhibition", difficulty: "easy", example: "The exhibition opens next Friday and features works by contemporary artists internationally.", exampleTranslation: "La exposición abre el próximo viernes y presenta obras de artistas contemporáneos internacionalmente." },
      { id: "art6", spanish: "Cuadro", english: "Picture", difficulty: "easy", example: "This picture on the wall was painted by my grandmother many years ago lovingly.", exampleTranslation: "Este cuadro en la pared fue pintado por mi abuela hace muchos años amorosamente." },
      { id: "art7", spanish: "Lienzo", english: "Canvas", difficulty: "medium", example: "The artist paints on a large canvas using oil paints and brushes skillfully masterfully.", exampleTranslation: "El artista pinta en un lienzo grande usando pinturas al óleo y pinceles hábilmente magistralmente." },
      { id: "art8", spanish: "Pincel", english: "Brush", difficulty: "medium", example: "You need different sizes of brushes for painting details and backgrounds properly correctly.", exampleTranslation: "Necesitas diferentes tamaños de pinceles para pintar detalles y fondos apropiadamente correctamente." },
      { id: "art9", spanish: "Obra maestra", english: "Masterpiece", difficulty: "medium", example: "This sculpture is considered a masterpiece of Renaissance art admired by millions worldwide globally.", exampleTranslation: "Esta escultura es considerada una obra maestra del arte renacentista admirada por millones mundialmente globalmente." },
      { id: "art10", spanish: "Estilo", english: "Style", difficulty: "medium", example: "Each artist has their own unique style that makes their work recognizable immediately distinctively.", exampleTranslation: "Cada artista tiene su propio estilo único que hace su trabajo reconocible inmediatamente distintivamente." },
      { id: "art11", spanish: "Retrato", english: "Portrait", difficulty: "medium", example: "The portrait shows the queen wearing her royal jewels and crown majestically beautifully elegantly.", exampleTranslation: "El retrato muestra a la reina usando sus joyas reales y corona majestuosamente hermosamente elegantemente." },
      { id: "art12", spanish: "Abstracto", english: "Abstract", difficulty: "medium", example: "Abstract art can be difficult to understand but very powerful emotionally provocatively thoughtfully.", exampleTranslation: "El arte abstracto puede ser difícil de entender pero muy poderoso emocionalmente provocativamente pensativamente." },
      { id: "art13", spanish: "Me encanta el arte", english: "I love art", difficulty: "hard", example: "I absolutely love art! I could spend hours in museums looking at paintings and sculptures!", exampleTranslation: "¡Me encanta absolutamente el arte! ¡Podría pasar horas en museos mirando pinturas y esculturas!" },
      { id: "art14", spanish: "Es muy expresivo", english: "It's very expressive", difficulty: "hard", example: "This painting is so expressive! You can feel the artist's emotions in every brushstroke powerfully!", exampleTranslation: "¡Esta pintura es tan expresiva! ¡Puedes sentir las emociones del artista en cada pincelada poderosamente!" },
      { id: "art15", spanish: "¿Quién lo pintó?", english: "Who painted it?", difficulty: "hard", example: "Who painted this beautiful masterpiece? I would love to see more works by this talented artist!", exampleTranslation: "¿Quién pintó esta hermosa obra maestra? ¡Me encantaría ver más obras de este artista talentoso!" }
    ]
  },

  science_discovery: {
    name: "Ciencia y descubrimiento",
    description: "Investigación científica, experimentos y conocimiento",
    icon: Microscope,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { id: "sci1", spanish: "Ciencia", english: "Science", difficulty: "easy", example: "Science helps us understand the world around us through observation and experiments carefully.", exampleTranslation: "La ciencia nos ayuda a entender el mundo alrededor de nosotros a través de observación y experimentos cuidadosamente." },
      { id: "sci2", spanish: "Experimento", english: "Experiment", difficulty: "easy", example: "We conducted an interesting experiment in the laboratory yesterday afternoon successfully.", exampleTranslation: "Realizamos un experimento interesante en el laboratorio ayer por la tarde exitosamente." },
      { id: "sci3", spanish: "Laboratorio", english: "Laboratory", difficulty: "easy", example: "The laboratory is equipped with modern equipment for scientific research and experiments always.", exampleTranslation: "El laboratorio está equipado con equipo moderno para investigación científica y experimentos siempre." },
      { id: "sci4", spanish: "Descubrimiento", english: "Discovery", difficulty: "easy", example: "This scientific discovery could change medicine forever and help millions of people worldwide.", exampleTranslation: "Este descubrimiento científico podría cambiar la medicina para siempre y ayudar a millones de personas mundialmente." },
      { id: "sci5", spanish: "Investigación", english: "Research", difficulty: "easy", example: "The research team is working on finding a cure for this disease tirelessly continuously.", exampleTranslation: "El equipo de investigación está trabajando en encontrar una cura para esta enfermedad incansablemente continuamente." },
      { id: "sci6", spanish: "Teoría", english: "Theory", difficulty: "easy", example: "Einstein's theory of relativity changed our understanding of space and time completely fundamentally.", exampleTranslation: "La teoría de la relatividad de Einstein cambió nuestra comprensión del espacio y tiempo completamente fundamentalmente." },
      { id: "sci7", spanish: "Microscopio", english: "Microscope", difficulty: "medium", example: "With the powerful microscope we can see tiny cells and bacteria invisible to the naked eye.", exampleTranslation: "Con el microscopio poderoso podemos ver células diminutas y bacterias invisibles al ojo desnudo." },
      { id: "sci8", spanish: "Molécula", english: "Molecule", difficulty: "medium", example: "Water molecules are composed of two hydrogen atoms and one oxygen atom bonded together chemically.", exampleTranslation: "Las moléculas de agua están compuestas de dos átomos de hidrógeno y un átomo de oxígeno unidos químicamente." },
      { id: "sci9", spanish: "Fórmula", english: "Formula", difficulty: "medium", example: "The chemical formula for water is H2O representing hydrogen and oxygen atoms combined perfectly.", exampleTranslation: "La fórmula química del agua es H2O representando átomos de hidrógeno y oxígeno combinados perfectamente." },
      { id: "sci10", spanish: "Hipótesis", english: "Hypothesis", difficulty: "medium", example: "The scientist proposed a new hypothesis that must be tested through rigorous experiments repeatedly carefully.", exampleTranslation: "El científico propuso una nueva hipótesis que debe ser probada mediante experimentos rigurosos repetidamente cuidadosamente." },
      { id: "sci11", spanish: "Átomo", english: "Atom", difficulty: "medium", example: "Atoms are the smallest units of matter that still retain chemical properties fundamentally basically.", exampleTranslation: "Los átomos son las unidades más pequeñas de materia que aún retienen propiedades químicas fundamentalmente básicamente." },
      { id: "sci12", spanish: "Genética", english: "Genetics", difficulty: "medium", example: "Genetics is the study of heredity and DNA in living organisms across generations continuously.", exampleTranslation: "La genética es el estudio de la herencia y el ADN en organismos vivos a través de generaciones continuamente." },
      { id: "sci13", spanish: "Necesito más datos", english: "I need more data", difficulty: "hard", example: "I need to collect more data before I can confirm this hypothesis with scientific certainty absolutely!", exampleTranslation: "¡Necesito recolectar más datos antes de poder confirmar esta hipótesis con certeza científica absolutamente!" },
      { id: "sci14", spanish: "Los resultados son prometedores", english: "The results are promising", difficulty: "hard", example: "The initial results are very promising! This could lead to a major scientific breakthrough soon!", exampleTranslation: "¡Los resultados iniciales son muy prometedores! ¡Esto podría conducir a un gran avance científico pronto!" },
      { id: "sci15", spanish: "Estoy investigando...", english: "I am researching...", difficulty: "hard", example: "I am currently researching renewable energy solutions! It's a fascinating field with great potential impact!", exampleTranslation: "¡Actualmente estoy investigando soluciones de energía renovable! ¡Es un campo fascinante con gran potencial de impacto!" }
    ]
  },

  social_life: {
    name: "Vida social",
    description: "Relaciones sociales, amistades y interacciones",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "soc1", spanish: "Amigo", english: "Friend", difficulty: "easy", example: "My best friend and I have known each other since childhood for many years.", exampleTranslation: "Mi mejor amigo y yo nos conocemos desde la infancia por muchos años." },
      { id: "soc2", spanish: "Conocer", english: "Meet", difficulty: "easy", example: "I want to meet new people and make friends at the party tonight.", exampleTranslation: "Quiero conocer gente nueva y hacer amigos en la fiesta esta noche." },
      { id: "soc3", spanish: "Conversar", english: "Chat", difficulty: "easy", example: "We like to chat about everything while having coffee together in the morning.", exampleTranslation: "Nos gusta conversar sobre todo mientras tomamos café juntos por la mañana." },
      { id: "soc4", spanish: "Salir", english: "Go out", difficulty: "easy", example: "Do you want to go out for dinner tonight at that new restaurant downtown?", exampleTranslation: "¿Quieres salir a cenar esta noche en ese restaurante nuevo del centro?" },
      { id: "soc5", spanish: "Invitar", english: "Invite", difficulty: "easy", example: "I want to invite all my friends to my birthday party next Saturday evening.", exampleTranslation: "Quiero invitar a todos mis amigos a mi fiesta de cumpleaños el próximo sábado por la noche." },
      { id: "soc6", spanish: "Reunirse", english: "Get together", difficulty: "easy", example: "We get together every Friday evening to watch movies and eat pizza happily together.", exampleTranslation: "Nos reunimos cada viernes por la noche para ver películas y comer pizza felizmente juntos." },
      { id: "soc7", spanish: "Amistad", english: "Friendship", difficulty: "medium", example: "True friendship is one of the most valuable things in life that lasts forever always.", exampleTranslation: "La verdadera amistad es una de las cosas más valiosas en la vida que dura para siempre." },
      { id: "soc8", spanish: "Cita", english: "Date", difficulty: "medium", example: "I have a date tonight at the Italian restaurant downtown at eight o'clock sharp.", exampleTranslation: "Tengo una cita esta noche en el restaurante italiano del centro a las ocho en punto." },
      { id: "soc9", spanish: "Compañía", english: "Company", difficulty: "medium", example: "I enjoy your company very much! You're such a pleasant person to spend time with!", exampleTranslation: "¡Disfruto mucho tu compañía! ¡Eres una persona tan agradable para pasar tiempo juntos!" },
      { id: "soc10", spanish: "Charla", english: "Conversation", difficulty: "medium", example: "We had a long interesting conversation about life and philosophy last night deeply thoughtfully.", exampleTranslation: "Tuvimos una conversación larga e interesante sobre la vida y filosofía anoche profundamente pensativamente." },
      { id: "soc11", spanish: "Presentar", english: "Introduce", difficulty: "medium", example: "I would like to introduce you to my best friend who just arrived here today!", exampleTranslation: "¡Me gustaría presentarte a mi mejor amigo que acaba de llegar aquí hoy!" },
      { id: "soc12", spanish: "Despedirse", english: "Say goodbye", difficulty: "medium", example: "It's always hard to say goodbye to good friends when they move away to another city.", exampleTranslation: "Siempre es difícil despedirse de buenos amigos cuando se mudan a otra ciudad." },
      { id: "soc13", spanish: "¿Quedamos mañana?", english: "Shall we meet tomorrow?", difficulty: "hard", example: "Shall we meet tomorrow for coffee? I would love to catch up and hear all your news!", exampleTranslation: "¿Quedamos mañana para un café? ¡Me encantaría ponernos al día y escuchar todas tus noticias!" },
      { id: "soc14", spanish: "Te presento a...", english: "I'd like to introduce you to...", difficulty: "hard", example: "I'd like to introduce you to my colleague from work! I think you'll have a lot in common!", exampleTranslation: "¡Te presento a mi colega del trabajo! ¡Creo que tendrán mucho en común!" },
      { id: "soc15", spanish: "Nos llevamos muy bien", english: "We get along very well", difficulty: "hard", example: "We get along very well together! We have similar interests and the same sense of humor!", exampleTranslation: "¡Nos llevamos muy bien juntos! ¡Tenemos intereses similares y el mismo sentido del humor!" }
    ]
  },

  agriculture_farming: {
    name: "Agricultura y cultivo",
    description: "Cultivos, granja y producción de alimentos",
    icon: Wheat,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "agr1", spanish: "Granja", english: "Farm", difficulty: "easy", example: "The farm has many animals including cows, chickens, and pigs living there together.", exampleTranslation: "La granja tiene muchos animales incluyendo vacas, pollos y cerdos viviendo allí juntos." },
      { id: "agr2", spanish: "Campo", english: "Field", difficulty: "easy", example: "The wheat field stretches for miles with golden crops swaying in the wind beautifully.", exampleTranslation: "El campo de trigo se extiende por millas con cultivos dorados meciéndose en el viento hermosamente." },
      { id: "agr3", spanish: "Sembrar", english: "Plant", difficulty: "easy", example: "We plant seeds in the spring and harvest the crops in autumn season every year.", exampleTranslation: "Sembramos semillas en la primavera y cosechamos los cultivos en la temporada de otoño cada año." },
      { id: "agr4", spanish: "Cosechar", english: "Harvest", difficulty: "easy", example: "The farmers harvest the corn when it's ripe and ready in late summer typically.", exampleTranslation: "Los agricultores cosechan el maíz cuando está maduro y listo a finales del verano típicamente." },
      { id: "agr5", spanish: "Cultivo", english: "Crop", difficulty: "easy", example: "This year's crop is excellent thanks to good weather and careful farming practices.", exampleTranslation: "El cultivo de este año es excelente gracias al buen clima y prácticas agrícolas cuidadosas." },
      { id: "agr6", spanish: "Agricultor", english: "Farmer", difficulty: "easy", example: "The farmer works hard every day from sunrise to sunset tending the crops diligently.", exampleTranslation: "El agricultor trabaja duro cada día desde el amanecer hasta el anochecer cuidando los cultivos diligentemente." },
      { id: "agr7", spanish: "Tractor", english: "Tractor", difficulty: "medium", example: "The farmer uses the tractor to plow the fields and prepare the soil for planting efficiently.", exampleTranslation: "El agricultor usa el tractor para arar los campos y preparar el suelo para sembrar eficientemente." },
      { id: "agr8", spanish: "Riego", english: "Irrigation", difficulty: "medium", example: "Proper irrigation is essential for crops to grow well especially during dry summer months.", exampleTranslation: "El riego apropiado es esencial para que los cultivos crezcan bien especialmente durante los meses secos de verano." },
      { id: "agr9", spanish: "Fertilizante", english: "Fertilizer", difficulty: "medium", example: "Organic fertilizer helps plants grow strong and healthy without harmful chemicals naturally safely.", exampleTranslation: "El fertilizante orgánico ayuda a las plantas a crecer fuertes y saludables sin químicos dañinos naturalmente seguramente." },
      { id: "agr10", spanish: "Invernadero", english: "Greenhouse", difficulty: "medium", example: "The greenhouse protects delicate plants from cold weather and allows year-round cultivation successfully.", exampleTranslation: "El invernadero protege plantas delicadas del clima frío y permite cultivo durante todo el año exitosamente." },
      { id: "agr11", spanish: "Ganado", english: "Livestock", difficulty: "medium", example: "The farm raises livestock including cattle and sheep for meat and dairy products sustainably.", exampleTranslation: "La granja cría ganado incluyendo vacas y ovejas para carne y productos lácteos sosteniblemente." },
      { id: "agr12", spanish: "Tierra fértil", english: "Fertile soil", difficulty: "medium", example: "Fertile soil is crucial for growing healthy crops with high yields every season successfully.", exampleTranslation: "La tierra fértil es crucial para cultivar cosechas saludables con altos rendimientos cada temporada exitosamente." },
      { id: "agr13", spanish: "Trabajo en el campo", english: "I work in the field", difficulty: "hard", example: "I work in the agricultural field growing organic vegetables! It's hard work but very rewarding!", exampleTranslation: "¡Trabajo en el campo agrícola cultivando verduras orgánicas! ¡Es trabajo duro pero muy gratificante!" },
      { id: "agr14", spanish: "La cosecha fue buena", english: "The harvest was good", difficulty: "hard", example: "The harvest was excellent this year! We produced more than expected thanks to good weather!", exampleTranslation: "¡La cosecha fue excelente este año! ¡Produjimos más de lo esperado gracias al buen clima!" },
      { id: "agr15", spanish: "Cultivamos productos orgánicos", english: "We grow organic products", difficulty: "hard", example: "We grow completely organic products without any pesticides or chemicals! It's healthier for everyone!", exampleTranslation: "¡Cultivamos productos completamente orgánicos sin pesticidas ni químicos! ¡Es más saludable para todos!" }
    ]
  },

  architecture_buildings: {
    name: "Arquitectura y edificios",
    description: "Construcciones, diseño arquitectónico y estructuras",
    icon: Building2,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "arch1", spanish: "Edificio", english: "Building", difficulty: "easy", example: "The new office building downtown is very modern and tall with glass windows.", exampleTranslation: "El nuevo edificio de oficinas del centro es muy moderno y alto con ventanas de vidrio." },
      { id: "arch2", spanish: "Arquitecto", english: "Architect", difficulty: "easy", example: "The architect designed a beautiful house that combines modern and traditional styles perfectly.", exampleTranslation: "El arquitecto diseñó una casa hermosa que combina estilos modernos y tradicionales perfectamente." },
      { id: "arch3", spanish: "Diseño", english: "Design", difficulty: "easy", example: "The design of this building is innovative and environmentally friendly using solar energy.", exampleTranslation: "El diseño de este edificio es innovador y amigable con el medio ambiente usando energía solar." },
      { id: "arch4", spanish: "Construcción", english: "Construction", difficulty: "easy", example: "The construction of the new bridge will take two years to complete fully.", exampleTranslation: "La construcción del nuevo puente tomará dos años para completarse totalmente." },
      { id: "arch5", spanish: "Plano", english: "Blueprint", difficulty: "easy", example: "The architect showed us the blueprints for our new house with detailed floor plans.", exampleTranslation: "El arquitecto nos mostró los planos para nuestra nueva casa con planos de piso detallados." },
      { id: "arch6", spanish: "Estructura", english: "Structure", difficulty: "easy", example: "The structure of the building is very solid and can withstand earthquakes safely.", exampleTranslation: "La estructura del edificio es muy sólida y puede resistir terremotos seguramente." },
      { id: "arch7", spanish: "Rascacielos", english: "Skyscraper", difficulty: "medium", example: "The new skyscraper is the tallest building in the city with fifty floors reaching high.", exampleTranslation: "El nuevo rascacielos es el edificio más alto de la ciudad con cincuenta pisos alcanzando alto." },
      { id: "arch8", spanish: "Cimientos", english: "Foundation", difficulty: "medium", example: "Strong foundations are essential for any tall building to stand firm and stable securely.", exampleTranslation: "Los cimientos fuertes son esenciales para cualquier edificio alto para mantenerse firme y estable seguramente." },
      { id: "arch9", spanish: "Fachada", english: "Facade", difficulty: "medium", example: "The facade of the building is covered with beautiful stone creating an elegant appearance impressively.", exampleTranslation: "La fachada del edificio está cubierta con piedra hermosa creando una apariencia elegante impresionantemente." },
      { id: "arch10", spanish: "Columna", english: "Column", difficulty: "medium", example: "The ancient temple has marble columns supporting the roof majestically beautifully for centuries.", exampleTranslation: "El templo antiguo tiene columnas de mármol sosteniendo el techo majestuosamente hermosamente por siglos." },
      { id: "arch11", spanish: "Renovación", english: "Renovation", difficulty: "medium", example: "The renovation of the old building will preserve its historic character while adding modern amenities carefully.", exampleTranslation: "La renovación del edificio viejo preservará su carácter histórico mientras añade comodidades modernas cuidadosamente." },
      { id: "arch12", spanish: "Estilo arquitectónico", english: "Architectural style", difficulty: "medium", example: "This cathedral is a perfect example of Gothic architectural style with pointed arches beautifully dramatically.", exampleTranslation: "Esta catedral es un ejemplo perfecto del estilo arquitectónico gótico con arcos puntiagudos hermosamente dramáticamente." },
      { id: "arch13", spanish: "Es un edificio impresionante", english: "It's an impressive building", difficulty: "hard", example: "It's such an impressive building! The architecture is absolutely stunning and breathtaking from every angle!", exampleTranslation: "¡Es un edificio tan impresionante! ¡La arquitectura es absolutamente impactante e impresionante desde cada ángulo!" },
      { id: "arch14", spanish: "¿Cuándo se construyó?", english: "When was it built?", difficulty: "hard", example: "When exactly was this magnificent building constructed? It must be hundreds of years old surely!", exampleTranslation: "¿Cuándo exactamente se construyó este edificio magnífico? ¡Debe tener cientos de años seguramente!" },
      { id: "arch15", spanish: "Me fascina la arquitectura", english: "I'm fascinated by architecture", difficulty: "hard", example: "I'm absolutely fascinated by architecture! I love studying different styles from various historical periods!", exampleTranslation: "¡Estoy absolutamente fascinado por la arquitectura! ¡Me encanta estudiar diferentes estilos de varios períodos históricos!" }
    ]
  },

  gardening_plants: {
    name: "Jardinería y plantas",
    description: "Cultivo de jardines, cuidado de plantas y horticultura",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { id: "gard1", spanish: "Jardín", english: "Garden", difficulty: "easy", example: "I work in my garden every day planting flowers and vegetables lovingly carefully.", exampleTranslation: "Trabajo en mi jardín cada día plantando flores y verduras amorosamente cuidadosamente." },
      { id: "gard2", spanish: "Flor", english: "Flower", difficulty: "easy", example: "The flowers in the garden are blooming beautifully in many bright colors this spring.", exampleTranslation: "Las flores en el jardín están floreciendo hermosamente en muchos colores brillantes esta primavera." },
      { id: "gard3", spanish: "Planta", english: "Plant", difficulty: "easy", example: "This plant needs water and sunlight every day to grow healthy and strong.", exampleTranslation: "Esta planta necesita agua y luz solar cada día para crecer saludable y fuerte." },
      { id: "gard4", spanish: "Regar", english: "Water", difficulty: "easy", example: "Don't forget to water the plants every evening when the sun goes down.", exampleTranslation: "No olvides regar las plantas cada tarde cuando el sol se pone." },
      { id: "gard5", spanish: "Semilla", english: "Seed", difficulty: "easy", example: "Plant the seeds in the soil and water them regularly for best growth results.", exampleTranslation: "Planta las semillas en la tierra y riégalas regularmente para mejores resultados de crecimiento." },
      { id: "gard6", spanish: "Raíz", english: "Root", difficulty: "easy", example: "The roots of the tree grow deep into the ground seeking water and nutrients.", exampleTranslation: "Las raíces del árbol crecen profundamente en el suelo buscando agua y nutrientes." },
      { id: "gard7", spanish: "Maceta", english: "Pot", difficulty: "medium", example: "I planted beautiful flowers in decorative pots on the balcony for color and fragrance.", exampleTranslation: "Planté flores hermosas en macetas decorativas en el balcón para color y fragancia." },
      { id: "gard8", spanish: "Podar", english: "Prune", difficulty: "medium", example: "You should prune the rose bushes in late winter to promote healthy growth in spring.", exampleTranslation: "Deberías podar los rosales a finales del invierno para promover crecimiento saludable en primavera." },
      { id: "gard9", spanish: "Abono", english: "Compost", difficulty: "medium", example: "Organic compost enriches the soil naturally providing essential nutrients for plants to thrive healthily.", exampleTranslation: "El abono orgánico enriquece la tierra naturalmente proporcionando nutrientes esenciales para que las plantas prosperen saludablemente." },
      { id: "gard10", spanish: "Herramientas de jardín", english: "Garden tools", difficulty: "medium", example: "Good quality garden tools make the work easier and more efficient when maintaining your garden.", exampleTranslation: "Las herramientas de jardín de buena calidad hacen el trabajo más fácil y eficiente al mantener tu jardín." },
      { id: "gard11", spanish: "Invernadero", english: "Greenhouse", difficulty: "medium", example: "The greenhouse allows us to grow vegetables year-round protecting them from harsh weather conditions.", exampleTranslation: "El invernadero nos permite cultivar verduras durante todo el año protegiéndolas de condiciones climáticas duras." },
      { id: "gard12", spanish: "Injerto", english: "Graft", difficulty: "medium", example: "Grafting fruit trees is an advanced technique that combines different varieties successfully skillfully.", exampleTranslation: "El injerto de árboles frutales es una técnica avanzada que combina diferentes variedades exitosamente hábilmente." },
      { id: "agr13", spanish: "Tengo un huerto", english: "I have a vegetable garden", difficulty: "hard", example: "I have a small vegetable garden in my backyard! I grow tomatoes, peppers, and herbs organically!", exampleTranslation: "¡Tengo un pequeño huerto en mi patio trasero! ¡Cultivo tomates, pimientos y hierbas orgánicamente!" },
      { id: "gard14", spanish: "Las plantas necesitan luz", english: "Plants need light", difficulty: "hard", example: "Plants absolutely need sunlight to grow properly! Without it, they become weak and unhealthy!", exampleTranslation: "¡Las plantas absolutamente necesitan luz solar para crecer apropiadamente! ¡Sin ella, se vuelven débiles y poco saludables!" },
      { id: "gard15", spanish: "¿Cuándo florecerá?", english: "When will it bloom?", difficulty: "hard", example: "When will these roses bloom exactly? I'm so excited to see them flower beautifully!", exampleTranslation: "¿Cuándo florecerán estas rosas exactamente? ¡Estoy tan emocionado de verlas florecer hermosamente!" }
    ]
  },

  cinema_movies: {
    name: "Cine y películas",
    description: "Mundo cinematográfico, géneros y experiencia del cine",
    icon: Clapperboard,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "cin1", spanish: "Película", english: "Movie", difficulty: "easy", example: "We watched an exciting movie at the cinema last night together with friends.", exampleTranslation: "Vimos una película emocionante en el cine anoche juntos con amigos." },
      { id: "cin2", spanish: "Cine", english: "Cinema", difficulty: "easy", example: "The cinema is showing the new superhero film starting this Friday evening.", exampleTranslation: "El cine está mostrando la nueva película de superhéroes comenzando este viernes por la noche." },
      { id: "cin3", spanish: "Actor", english: "Actor", difficulty: "easy", example: "The actor gave an amazing performance in this dramatic film convincingly emotionally.", exampleTranslation: "El actor dio una actuación increíble en esta película dramática convincentemente emocionalmente." },
      { id: "cin4", spanish: "Director", english: "Director", difficulty: "easy", example: "The director is famous for making thought-provoking films that win many awards internationally.", exampleTranslation: "El director es famoso por hacer películas que provocan pensamiento que ganan muchos premios internacionalmente." },
      { id: "cin5", spanish: "Pantalla", english: "Screen", difficulty: "easy", example: "The screen at this cinema is huge and the sound quality is excellent perfectly.", exampleTranslation: "La pantalla en este cine es enorme y la calidad de sonido es excelente perfectamente." },
      { id: "cin6", spanish: "Entrada", english: "Ticket", difficulty: "easy", example: "I bought two tickets for the seven o'clock showing of the new comedy film.", exampleTranslation: "Compré dos entradas para la función de las siete de la nueva película de comedia." },
      { id: "cin7", spanish: "Subtítulos", english: "Subtitles", difficulty: "medium", example: "The foreign film has subtitles in English so everyone can understand the dialogue clearly.", exampleTranslation: "La película extranjera tiene subtítulos en inglés para que todos puedan entender el diálogo claramente." },
      { id: "cin8", spanish: "Tráiler", english: "Trailer", difficulty: "medium", example: "The trailer for the new movie looks incredibly exciting! I can't wait to see it!", exampleTranslation: "¡El tráiler de la nueva película se ve increíblemente emocionante! ¡No puedo esperar para verla!" },
      { id: "cin9", spanish: "Estreno", english: "Premiere", difficulty: "medium", example: "The movie premiere is next Friday with all the actors attending on the red carpet.", exampleTranslation: "El estreno de la película es el próximo viernes con todos los actores asistiendo en la alfombra roja." },
      { id: "cin10", spanish: "Argumento", english: "Plot", difficulty: "medium", example: "The plot of this thriller is very complex and keeps you on the edge of your seat.", exampleTranslation: "El argumento de este thriller es muy complejo y te mantiene en el borde de tu asiento." },
      { id: "cin11", spanish: "Efectos especiales", english: "Special effects", difficulty: "medium", example: "The special effects in this science fiction film are absolutely incredible and realistic impressively.", exampleTranslation: "Los efectos especiales en esta película de ciencia ficción son absolutamente increíbles y realistas impresionantemente." },
      { id: "cin12", spanish: "Género cinematográfico", english: "Film genre", difficulty: "medium", example: "My favorite film genre is comedy because I love laughing and having fun while watching.", exampleTranslation: "Mi género cinematográfico favorito es la comedia porque me encanta reír y divertirme mientras veo." },
      { id: "cin13", spanish: "Vamos al cine", english: "Let's go to the movies", difficulty: "hard", example: "Let's go to the movies this weekend! There's a great new film I really want to see!", exampleTranslation: "¡Vamos al cine este fin de semana! ¡Hay una gran película nueva que realmente quiero ver!" },
      { id: "cin14", spanish: "La película fue excelente", english: "The movie was excellent", difficulty: "hard", example: "The movie was absolutely excellent! The acting, directing, and story were all perfect flawless!", exampleTranslation: "¡La película fue absolutamente excelente! ¡La actuación, dirección e historia fueron todas perfectas impecables!" },
      { id: "cin15", spanish: "Me encantó el final", english: "I loved the ending", difficulty: "hard", example: "I absolutely loved the ending! It was so unexpected and emotional! A true masterpiece!", exampleTranslation: "¡Me encantó absolutamente el final! ¡Fue tan inesperado y emocional! ¡Una verdadera obra maestra!" }
    ]
  },

  colors_shapes: {
    name: "Colores y formas",
    description: "Espectro de colores y figuras geométricas",
    icon: Palette,
    color: "from-fuchsia-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "col1", spanish: "Rojo", english: "Red", difficulty: "easy", example: "The red rose in the garden is blooming beautifully with vibrant petals.", exampleTranslation: "La rosa roja en el jardín está floreciendo hermosamente con pétalos vibrantes." },
      { id: "col2", spanish: "Azul", english: "Blue", difficulty: "easy", example: "The sky is bright blue today without a single cloud visible anywhere.", exampleTranslation: "El cielo está azul brillante hoy sin una sola nube visible en ningún lado." },
      { id: "col3", spanish: "Verde", english: "Green", difficulty: "easy", example: "The grass is very green after all the rain we had last week.", exampleTranslation: "El pasto está muy verde después de toda la lluvia que tuvimos la semana pasada." },
      { id: "col4", spanish: "Amarillo", english: "Yellow", difficulty: "easy", example: "The sun shines with bright yellow light warming everything around it beautifully.", exampleTranslation: "El sol brilla con luz amarilla brillante calentando todo alrededor hermosamente." },
      { id: "col5", spanish: "Negro", english: "Black", difficulty: "easy", example: "I need black shoes to wear with my formal suit for work tomorrow.", exampleTranslation: "Necesito zapatos negros para usar con mi traje formal para el trabajo mañana." },
      { id: "col6", spanish: "Blanco", english: "White", difficulty: "easy", example: "The white snow covers everything making the landscape look magical and peaceful.", exampleTranslation: "La nieve blanca cubre todo haciendo que el paisaje se vea mágico y pacífico." },
      { id: "col7", spanish: "Círculo", english: "Circle", difficulty: "medium", example: "Draw a perfect circle using a compass in your geometry class today carefully.", exampleTranslation: "Dibuja un círculo perfecto usando un compás en tu clase de geometría hoy cuidadosamente." },
      { id: "col8", spanish: "Cuadrado", english: "Square", difficulty: "medium", example: "The square has four equal sides and four right angles making it perfectly symmetrical.", exampleTranslation: "El cuadrado tiene cuatro lados iguales y cuatro ángulos rectos haciéndolo perfectamente simétrico." },
      { id: "col9", spanish: "Triángulo", english: "Triangle", difficulty: "medium", example: "A triangle has three sides and three angles of different measurements geometrically.", exampleTranslation: "Un triángulo tiene tres lados y tres ángulos de diferentes medidas geométricamente." },
      { id: "col10", spanish: "Rectángulo", english: "Rectangle", difficulty: "medium", example: "The table is rectangular in shape with two long sides and two short sides.", exampleTranslation: "La mesa es de forma rectangular con dos lados largos y dos lados cortos." },
      { id: "col11", spanish: "Morado", english: "Purple", difficulty: "medium", example: "The beautiful purple flowers in the garden attract butterflies and bees naturally constantly.", exampleTranslation: "Las hermosas flores moradas en el jardín atraen mariposas y abejas naturalmente constantemente." },
      { id: "col12", spanish: "Naranja", english: "Orange", difficulty: "medium", example: "The sunset painted the sky in beautiful shades of orange and pink magnificently spectacularly.", exampleTranslation: "El atardecer pintó el cielo en hermosos tonos de naranja y rosa magníficamente espectacularmente." },
      { id: "col13", spanish: "¿De qué color es?", english: "What color is it?", difficulty: "hard", example: "What color is your new car? I heard you bought a really beautiful one recently!", exampleTranslation: "¿De qué color es tu auto nuevo? ¡Escuché que compraste uno realmente hermoso recientemente!" },
      { id: "col14", spanish: "Mi color favorito es...", english: "My favorite color is...", difficulty: "hard", example: "My absolute favorite color is blue! It reminds me of the ocean and peaceful skies!", exampleTranslation: "¡Mi color favorito absoluto es el azul! ¡Me recuerda al océano y cielos pacíficos!" },
      { id: "col15", spanish: "Combina bien", english: "It matches well", difficulty: "hard", example: "This blue shirt matches very well with those gray pants! Great color combination choice!", exampleTranslation: "¡Esta camisa azul combina muy bien con esos pantalones grises! ¡Gran combinación de colores!" }
    ]
  },

  professions_careers: {
    name: "Profesiones y carreras",
    description: "Diferentes trabajos, oficios y trayectorias profesionales",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "prof1", spanish: "Médico", english: "Doctor", difficulty: "easy", example: "The doctor examines patients and prescribes medicine to help them recover quickly.", exampleTranslation: "El médico examina pacientes y receta medicina para ayudarles a recuperarse rápidamente." },
      { id: "prof2", spanish: "Maestro", english: "Teacher", difficulty: "easy", example: "The teacher educates children and helps them develop important skills for the future.", exampleTranslation: "El maestro educa niños y les ayuda a desarrollar habilidades importantes para el futuro." },
      { id: "prof3", spanish: "Ingeniero", english: "Engineer", difficulty: "easy", example: "The engineer designs bridges and buildings using mathematics and science precisely.", exampleTranslation: "El ingeniero diseña puentes y edificios usando matemáticas y ciencia precisamente." },
      { id: "prof4", spanish: "Chef", english: "Chef", difficulty: "easy", example: "The chef prepares delicious meals in the restaurant kitchen with skill and creativity.", exampleTranslation: "El chef prepara comidas deliciosas en la cocina del restaurante con habilidad y creatividad." },
      { id: "prof5", spanish: "Piloto", english: "Pilot", difficulty: "easy", example: "The pilot flies the airplane safely transporting passengers to destinations around the world.", exampleTranslation: "El piloto vuela el avión seguramente transportando pasajeros a destinos alrededor del mundo." },
      { id: "prof6", spanish: "Artista", english: "Artist", difficulty: "easy", example: "The artist creates beautiful paintings that are displayed in galleries worldwide internationally.", exampleTranslation: "El artista crea pinturas hermosas que se exhiben en galerías mundialmente internacionalmente." },
      { id: "prof7", spanish: "Programador", english: "Programmer", difficulty: "medium", example: "The programmer writes computer code and develops software applications for various platforms daily.", exampleTranslation: "El programador escribe código de computadora y desarrolla aplicaciones de software para varias plataformas diariamente." },
      { id: "prof8", spanish: "Periodista", english: "Journalist", difficulty: "medium", example: "The journalist investigates stories and reports the news to the public accurately objectively truthfully.", exampleTranslation: "El periodista investiga historias y reporta las noticias al público con precisión objetivamente verazmente." },
      { id: "prof9", spanish: "Arquitecto", english: "Architect", difficulty: "medium", example: "The architect designs beautiful buildings combining functionality with aesthetic appeal creatively innovatively.", exampleTranslation: "El arquitecto diseña edificios hermosos combinando funcionalidad con atractivo estético creativamente innovadoramente." },
      { id: "prof10", spanish: "Científico", english: "Scientist", difficulty: "medium", example: "The scientist conducts research and experiments to discover new knowledge about our world constantly.", exampleTranslation: "El científico realiza investigación y experimentos para descubrir nuevo conocimiento sobre nuestro mundo constantemente." },
      { id: "prof11", spanish: "Empresario", english: "Entrepreneur", difficulty: "medium", example: "The successful entrepreneur started multiple companies and created many jobs for people courageously.", exampleTranslation: "El empresario exitoso comenzó múltiples compañías y creó muchos empleos para la gente valientemente." },
      { id: "prof12", spanish: "Carpintero", english: "Carpenter", difficulty: "medium", example: "The skilled carpenter builds beautiful furniture from wood with precision and craftsmanship expertly.", exampleTranslation: "El carpintero hábil construye muebles hermosos de madera con precisión y artesanía expertamente." },
      { id: "prof13", spanish: "¿A qué te dedicas?", english: "What do you do?", difficulty: "hard", example: "What do you do for a living? I'm always interested in learning about people's careers!", exampleTranslation: "¿A qué te dedicas? ¡Siempre estoy interesado en aprender sobre las carreras de las personas!" },
      { id: "prof14", spanish: "Soy ingeniero", english: "I am an engineer", difficulty: "hard", example: "I am a civil engineer specializing in bridge design! It's challenging but very rewarding work!", exampleTranslation: "¡Soy un ingeniero civil especializado en diseño de puentes! ¡Es trabajo desafiante pero muy gratificante!" },
      { id: "prof15", spanish: "Me encanta mi trabajo", english: "I love my job", difficulty: "hard", example: "I absolutely love my job! Every day brings new challenges and opportunities to make a difference!", exampleTranslation: "¡Absolutamente amo mi trabajo! ¡Cada día trae nuevos desafíos y oportunidades para hacer una diferencia!" }
    ]
  },

  vehicles_transportation: {
    name: "Vehículos y transporte",
    description: "Medios de transporte, tipos de vehículos y movilidad",
    icon: Truck,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "veh1", spanish: "Coche", english: "Car", difficulty: "easy", example: "I drive my car to work every day through the city streets safely.", exampleTranslation: "Conduzco mi coche al trabajo cada día por las calles de la ciudad seguramente." },
      { id: "veh2", spanish: "Bicicleta", english: "Bicycle", difficulty: "easy", example: "Riding a bicycle is good exercise and environmentally friendly transportation daily.", exampleTranslation: "Montar en bicicleta es buen ejercicio y transporte amigable con el medio ambiente diariamente." },
      { id: "veh3", spanish: "Motocicleta", english: "Motorcycle", difficulty: "easy", example: "The motorcycle is fast and convenient for getting through traffic in the city.", exampleTranslation: "La motocicleta es rápida y conveniente para atravesar el tráfico en la ciudad." },
      { id: "veh4", spanish: "Tren", english: "Train", difficulty: "easy", example: "The train travels between cities carrying hundreds of passengers comfortably quickly.", exampleTranslation: "El tren viaja entre ciudades llevando cientos de pasajeros cómodamente rápidamente." },
      { id: "veh5", spanish: "Avión", english: "Airplane", difficulty: "easy", example: "The airplane flies high above the clouds traveling across continents swiftly.", exampleTranslation: "El avión vuela alto sobre las nubes viajando a través de continentes velozmente." },
      { id: "veh6", spanish: "Camión", english: "Truck", difficulty: "easy", example: "The large truck transports goods from the warehouse to stores efficiently reliably.", exampleTranslation: "El camión grande transporta mercancías del almacén a las tiendas eficientemente confiablemente." },
      { id: "veh7", spanish: "Motor", english: "Engine", difficulty: "medium", example: "The car engine is powerful and fuel-efficient using modern technology advanced efficiently.", exampleTranslation: "El motor del coche es potente y eficiente en combustible usando tecnología moderna avanzada eficientemente." },
      { id: "veh8", spanish: "Frenos", english: "Brakes", difficulty: "medium", example: "The brakes on this car are very responsive and stop quickly when needed safely.", exampleTranslation: "Los frenos de este coche son muy sensibles y paran rápidamente cuando se necesita seguramente." },
      { id: "veh9", spanish: "Volante", english: "Steering wheel", difficulty: "medium", example: "Hold the steering wheel firmly with both hands while driving for better control safely.", exampleTranslation: "Sostén el volante firmemente con ambas manos mientras conduces para mejor control seguramente." },
      { id: "veh10", spanish: "Gasolina", english: "Gasoline", difficulty: "medium", example: "We need to stop at a gas station to fill up with gasoline before the long trip.", exampleTranslation: "Necesitamos parar en una gasolinera para llenar con gasolina antes del viaje largo." },
      { id: "veh11", spanish: "Licencia de conducir", english: "Driver's license", difficulty: "medium", example: "You must have a valid driver's license to operate a motor vehicle legally on public roads.", exampleTranslation: "Debes tener una licencia de conducir válida para operar un vehículo motorizado legalmente en carreteras públicas." },
      { id: "veh12", spanish: "Accidente", english: "Accident", difficulty: "medium", example: "There was a car accident on the highway this morning causing major traffic delays unfortunately.", exampleTranslation: "Hubo un accidente de coche en la autopista esta mañana causando retrasos de tráfico mayores desafortunadamente." },
      { id: "veh13", spanish: "¿Tienes coche?", english: "Do you have a car?", difficulty: "hard", example: "Do you have a car or do you use public transportation to get around the city?", exampleTranslation: "¿Tienes coche o usas transporte público para moverte por la ciudad?" },
      { id: "veh14", spanish: "Se me pinchó una llanta", english: "I got a flat tire", difficulty: "hard", example: "I got a flat tire on the way to work! I need to change it or call for help!", exampleTranslation: "¡Se me pinchó una llanta en el camino al trabajo! ¡Necesito cambiarla o llamar por ayuda!" },
      { id: "veh15", spanish: "Necesito gasolina", english: "I need gas", difficulty: "hard", example: "I urgently need gasoline! The tank is almost empty and there's no station nearby close!", exampleTranslation: "¡Necesito urgentemente gasolina! ¡El tanque está casi vacío y no hay estación cercana!" }
    ]
  }
};
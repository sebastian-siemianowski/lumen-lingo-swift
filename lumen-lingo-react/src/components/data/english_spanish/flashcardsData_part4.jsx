/**
 * ENGLISH → SPANISH FLASHCARDS - PART 4
 * 
 * Native Language: English
 * Target Language: Spanish
 * 
 * This file contains additional flashcard categories (46-65).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Plane,
  Smartphone,
  Film,
  TreePine,
  ChefHat,
  HeartHandshake,
  Hotel,
  Palette,
  MessageCircle,
  Briefcase,
  Microscope,
  PartyPopper,
  Home,
  Scale,
  Wifi,
  Sparkles,
  Car,
  Camera,
  Trash2,
  Flower2
} from "lucide-react";

export const flashcardsCategories_part4 = {
  travel_tourism: {
    name: "Travel & Tourism",
    description: "Essential vocabulary for travelers",
    icon: Plane,
    color: "from-sky-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "travel1", english: "Passport", spanish: "Pasaporte", difficulty: "easy", example: "No olvides traer tu pasaporte al aeropuerto", exampleTranslation: "Don't forget to bring your passport to the airport" },
      { id: "travel2", english: "Luggage", spanish: "Equipaje", difficulty: "easy", example: "Mi equipaje pesa más de 20 kilos", exampleTranslation: "My luggage weighs more than 20 kilos" },
      { id: "travel3", english: "Tourist", spanish: "Turista", difficulty: "easy", example: "Los turistas disfrutan visitando los museos de la ciudad", exampleTranslation: "Tourists enjoy visiting the city's museums" },
      { id: "travel4", english: "Map", spanish: "Mapa", difficulty: "easy", example: "Necesito un mapa para encontrar el camino", exampleTranslation: "I need a map to find the way" },
      { id: "travel5", english: "Guide", spanish: "Guía", difficulty: "easy", example: "El guía turístico habla tres idiomas", exampleTranslation: "The tour guide speaks three languages" },
      { id: "travel6", english: "Souvenir", spanish: "Recuerdo", difficulty: "easy", example: "Compré muchos recuerdos para mi familia", exampleTranslation: "I bought many souvenirs for my family" },
      { id: "travel7", english: "Customs", spanish: "Aduana", difficulty: "medium", example: "Tuvimos que pasar por la aduana al llegar al país", exampleTranslation: "We had to go through customs when arriving in the country" },
      { id: "travel8", english: "Itinerary", spanish: "Itinerario", difficulty: "medium", example: "Mi itinerario incluye cinco ciudades en dos semanas", exampleTranslation: "My itinerary includes five cities in two weeks" },
      { id: "travel9", english: "Landmark", spanish: "Punto de referencia", difficulty: "medium", example: "La torre Eiffel es un punto de referencia muy famoso", exampleTranslation: "The Eiffel Tower is a very famous landmark" },
      { id: "travel10", english: "Excursion", spanish: "Excursión", difficulty: "medium", example: "Mañana haremos una excursión a las montañas", exampleTranslation: "Tomorrow we'll take an excursion to the mountains" },
      { id: "travel11", english: "Backpacker", spanish: "Mochilero", difficulty: "medium", example: "Los mochileros prefieren viajar de forma económica", exampleTranslation: "Backpackers prefer to travel economically" },
      { id: "travel12", english: "Round trip", spanish: "Ida y vuelta", difficulty: "medium", example: "Compré un boleto de ida y vuelta a Barcelona", exampleTranslation: "I bought a round trip ticket to Barcelona" },
      { id: "travel13", english: "Can you recommend a good place?", spanish: "¿Puedes recomendar un buen lugar?", difficulty: "hard", example: "¿Puedes recomendar un buen lugar para cenar cerca de aquí?", exampleTranslation: "Can you recommend a good place to eat near here?" },
      { id: "travel14", english: "I'm looking for...", spanish: "Estoy buscando...", difficulty: "hard", example: "Estoy buscando un hotel económico pero cómodo en el centro", exampleTranslation: "I'm looking for an affordable but comfortable hotel downtown" },
      { id: "travel15", english: "How do I get to...?", spanish: "¿Cómo llego a...?", difficulty: "hard", example: "Disculpe, ¿cómo llego a la estación de tren desde aquí?", exampleTranslation: "Excuse me, how do I get to the train station from here?" }
    ]
  },

  technology_gadgets: {
    name: "Technology & Gadgets",
    description: "Modern technology and digital devices",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "tech1", english: "Laptop", spanish: "Computadora portátil", difficulty: "easy", example: "Mi computadora portátil es muy rápida y ligera", exampleTranslation: "My laptop is very fast and light" },
      { id: "tech2", english: "Tablet", spanish: "Tableta", difficulty: "easy", example: "Uso mi tableta para leer libros electrónicos", exampleTranslation: "I use my tablet to read e-books" },
      { id: "tech3", english: "Screen", spanish: "Pantalla", difficulty: "easy", example: "La pantalla de mi teléfono está rota", exampleTranslation: "My phone screen is broken" },
      { id: "tech4", english: "Battery", spanish: "Batería", difficulty: "easy", example: "La batería de mi teléfono dura todo el día", exampleTranslation: "My phone battery lasts all day" },
      { id: "tech5", english: "Charger", spanish: "Cargador", difficulty: "easy", example: "Olvidé mi cargador en casa", exampleTranslation: "I forgot my charger at home" },
      { id: "tech6", english: "Keyboard", spanish: "Teclado", difficulty: "easy", example: "Este teclado es muy cómodo para escribir", exampleTranslation: "This keyboard is very comfortable for typing" },
      { id: "tech7", english: "Software", spanish: "Software", difficulty: "medium", example: "Necesito actualizar el software de mi computadora", exampleTranslation: "I need to update my computer software" },
      { id: "tech8", english: "Hardware", spanish: "Hardware", difficulty: "medium", example: "El hardware de esta computadora es de última generación", exampleTranslation: "This computer's hardware is state-of-the-art" },
      { id: "tech9", english: "Wireless", spanish: "Inalámbrico", difficulty: "medium", example: "Tengo unos auriculares inalámbricos muy buenos", exampleTranslation: "I have very good wireless headphones" },
      { id: "tech10", english: "Touchscreen", spanish: "Pantalla táctil", difficulty: "medium", example: "Mi tableta tiene una pantalla táctil muy sensible", exampleTranslation: "My tablet has a very sensitive touchscreen" },
      { id: "tech11", english: "Cloud storage", spanish: "Almacenamiento en la nube", difficulty: "medium", example: "Guardo todas mis fotos en el almacenamiento en la nube", exampleTranslation: "I store all my photos in cloud storage" },
      { id: "tech12", english: "Update", spanish: "Actualización", difficulty: "medium", example: "Hay una actualización importante disponible para descargar", exampleTranslation: "There's an important update available to download" },
      { id: "tech13", english: "My device isn't working", spanish: "Mi dispositivo no funciona", difficulty: "hard", example: "Mi dispositivo no funciona correctamente desde la última actualización", exampleTranslation: "My device isn't working properly since the last update" },
      { id: "tech14", english: "How do I connect to...?", spanish: "¿Cómo me conecto a...?", difficulty: "hard", example: "¿Cómo me conecto a la red WiFi del hotel?", exampleTranslation: "How do I connect to the hotel WiFi network?" },
      { id: "tech15", english: "Can you help me troubleshoot?", spanish: "¿Me puedes ayudar a resolver el problema?", difficulty: "hard", example: "¿Me puedes ayudar a resolver el problema con mi impresora?", exampleTranslation: "Can you help me troubleshoot my printer problem?" }
    ]
  },

  entertainment_media: {
    name: "Entertainment & Media",
    description: "Movies, TV, music and entertainment",
    icon: Film,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "ent1", english: "Movie", spanish: "Película", difficulty: "easy", example: "Vi una película muy interesante anoche", exampleTranslation: "I watched a very interesting movie last night" },
      { id: "ent2", english: "Series", spanish: "Serie", difficulty: "easy", example: "Estoy viendo una serie nueva en Netflix", exampleTranslation: "I'm watching a new series on Netflix" },
      { id: "ent3", english: "Song", spanish: "Canción", difficulty: "easy", example: "Esta canción es mi favorita de este año", exampleTranslation: "This song is my favorite of this year" },
      { id: "ent4", english: "Concert", spanish: "Concierto", difficulty: "easy", example: "Fui a un concierto increíble el fin de semana", exampleTranslation: "I went to an amazing concert last weekend" },
      { id: "ent5", english: "Actor", spanish: "Actor", difficulty: "easy", example: "Ese actor ganó un premio importante", exampleTranslation: "That actor won an important award" },
      { id: "ent6", english: "Channel", spanish: "Canal", difficulty: "easy", example: "¿En qué canal están dando el partido?", exampleTranslation: "What channel is showing the game?" },
      { id: "ent7", english: "Streaming", spanish: "Transmisión en línea", difficulty: "medium", example: "Prefiero la transmisión en línea a la televisión tradicional", exampleTranslation: "I prefer streaming to traditional television" },
      { id: "ent8", english: "Soundtrack", spanish: "Banda sonora", difficulty: "medium", example: "La banda sonora de esta película es maravillosa", exampleTranslation: "This movie's soundtrack is wonderful" },
      { id: "ent9", english: "Episode", spanish: "Episodio", difficulty: "medium", example: "El último episodio de la temporada fue emocionante", exampleTranslation: "The last episode of the season was exciting" },
      { id: "ent10", english: "Subtitles", spanish: "Subtítulos", difficulty: "medium", example: "Veo películas extranjeras con subtítulos en español", exampleTranslation: "I watch foreign movies with Spanish subtitles" },
      { id: "ent11", english: "Plot", spanish: "Trama", difficulty: "medium", example: "La trama de esta serie es muy complicada", exampleTranslation: "This series' plot is very complicated" },
      { id: "ent12", english: "Genre", spanish: "Género", difficulty: "medium", example: "Mi género favorito de películas es la ciencia ficción", exampleTranslation: "My favorite movie genre is science fiction" },
      { id: "ent13", english: "What's it about?", spanish: "¿De qué trata?", difficulty: "hard", example: "¿De qué trata la película que viste anoche?", exampleTranslation: "What's the movie you watched last night about?" },
      { id: "ent14", english: "I highly recommend...", spanish: "Te recomiendo mucho...", difficulty: "hard", example: "Te recomiendo mucho esta serie, tiene una historia fascinante", exampleTranslation: "I highly recommend this series, it has a fascinating story" },
      { id: "ent15", english: "The ending was unexpected", spanish: "El final fue inesperado", difficulty: "hard", example: "El final de la película fue completamente inesperado", exampleTranslation: "The movie's ending was completely unexpected" }
    ]
  },

  nature_environment: {
    name: "Nature & Environment",
    description: "Natural world and environmental topics",
    icon: TreePine,
    color: "from-green-400 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "nat1", english: "Forest", spanish: "Bosque", difficulty: "easy", example: "Caminamos por el bosque durante horas", exampleTranslation: "We walked through the forest for hours" },
      { id: "nat2", english: "Mountain", spanish: "Montaña", difficulty: "easy", example: "La montaña más alta tiene nieve todo el año", exampleTranslation: "The highest mountain has snow all year" },
      { id: "nat3", english: "River", spanish: "Río", difficulty: "easy", example: "El río fluye tranquilamente por el valle", exampleTranslation: "The river flows peacefully through the valley" },
      { id: "nat4", english: "Beach", spanish: "Playa", difficulty: "easy", example: "La playa está llena de turistas en verano", exampleTranslation: "The beach is full of tourists in summer" },
      { id: "nat5", english: "Ocean", spanish: "Océano", difficulty: "easy", example: "El océano Pacífico es el más grande del mundo", exampleTranslation: "The Pacific Ocean is the largest in the world" },
      { id: "nat6", english: "Wildlife", spanish: "Vida silvestre", difficulty: "easy", example: "La vida silvestre de esta región es muy diversa", exampleTranslation: "The wildlife in this region is very diverse" },
      { id: "nat7", english: "Pollution", spanish: "Contaminación", difficulty: "medium", example: "La contaminación del aire es un problema serio en las grandes ciudades", exampleTranslation: "Air pollution is a serious problem in big cities" },
      { id: "nat8", english: "Recycling", spanish: "Reciclaje", difficulty: "medium", example: "El reciclaje ayuda a proteger el medio ambiente", exampleTranslation: "Recycling helps protect the environment" },
      { id: "nat9", english: "Climate change", spanish: "Cambio climático", difficulty: "medium", example: "El cambio climático afecta a todo el planeta", exampleTranslation: "Climate change affects the entire planet" },
      { id: "nat10", english: "Renewable energy", spanish: "Energía renovable", difficulty: "medium", example: "La energía renovable es el futuro de nuestro planeta", exampleTranslation: "Renewable energy is the future of our planet" },
      { id: "nat11", english: "Ecosystem", spanish: "Ecosistema", difficulty: "medium", example: "Cada ecosistema tiene su propio equilibrio natural", exampleTranslation: "Each ecosystem has its own natural balance" },
      { id: "nat12", english: "Conservation", spanish: "Conservación", difficulty: "medium", example: "La conservación de especies en peligro es muy importante", exampleTranslation: "Conservation of endangered species is very important" },
      { id: "nat13", english: "We need to protect...", spanish: "Necesitamos proteger...", difficulty: "hard", example: "Necesitamos proteger los bosques tropicales para las futuras generaciones", exampleTranslation: "We need to protect tropical forests for future generations" },
      { id: "nat14", english: "What can we do to help?", spanish: "¿Qué podemos hacer para ayudar?", difficulty: "hard", example: "¿Qué podemos hacer para ayudar a reducir la contaminación?", exampleTranslation: "What can we do to help reduce pollution?" },
      { id: "nat15", english: "It's important to reduce waste", spanish: "Es importante reducir los residuos", difficulty: "hard", example: "Es importante reducir los residuos plásticos en nuestra vida diaria", exampleTranslation: "It's important to reduce plastic waste in our daily life" }
    ]
  },

  cooking_recipes: {
    name: "Cooking & Recipes",
    description: "Kitchen vocabulary and cooking terms",
    icon: ChefHat,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "cook1", english: "Recipe", spanish: "Receta", difficulty: "easy", example: "Esta receta de mi abuela es deliciosa", exampleTranslation: "This recipe from my grandmother is delicious" },
      { id: "cook2", english: "Ingredient", spanish: "Ingrediente", difficulty: "easy", example: "Necesito comprar todos los ingredientes para la cena", exampleTranslation: "I need to buy all the ingredients for dinner" },
      { id: "cook3", english: "Oven", spanish: "Horno", difficulty: "easy", example: "Precalienta el horno a 180 grados", exampleTranslation: "Preheat the oven to 180 degrees" },
      { id: "cook4", english: "Pan", spanish: "Sartén", difficulty: "easy", example: "Calienta la sartén antes de agregar el aceite", exampleTranslation: "Heat the pan before adding the oil" },
      { id: "cook5", english: "Knife", spanish: "Cuchillo", difficulty: "easy", example: "Necesito un cuchillo afilado para cortar las verduras", exampleTranslation: "I need a sharp knife to cut the vegetables" },
      { id: "cook6", english: "Mix", spanish: "Mezclar", difficulty: "easy", example: "Mezcla todos los ingredientes en un tazón grande", exampleTranslation: "Mix all the ingredients in a large bowl" },
      { id: "cook7", english: "Boil", spanish: "Hervir", difficulty: "medium", example: "Hierve el agua antes de agregar la pasta", exampleTranslation: "Boil the water before adding the pasta" },
      { id: "cook8", english: "Fry", spanish: "Freír", difficulty: "medium", example: "Fríe las papas hasta que estén doradas y crujientes", exampleTranslation: "Fry the potatoes until they're golden and crispy" },
      { id: "cook9", english: "Bake", spanish: "Hornear", difficulty: "medium", example: "Hornea el pastel durante 45 minutos", exampleTranslation: "Bake the cake for 45 minutes" },
      { id: "cook10", english: "Season", spanish: "Sazonar", difficulty: "medium", example: "Sazona la carne con sal, pimienta y hierbas", exampleTranslation: "Season the meat with salt, pepper, and herbs" },
      { id: "cook11", english: "Marinate", spanish: "Marinar", difficulty: "medium", example: "Marina el pollo durante la noche para mejor sabor", exampleTranslation: "Marinate the chicken overnight for better flavor" },
      { id: "cook12", english: "Simmer", spanish: "Cocinar a fuego lento", difficulty: "medium", example: "Cocina la salsa a fuego lento por 20 minutos", exampleTranslation: "Simmer the sauce for 20 minutes" },
      { id: "cook13", english: "How do you prepare...?", spanish: "¿Cómo se prepara...?", difficulty: "hard", example: "¿Cómo se prepara la paella tradicional española?", exampleTranslation: "How do you prepare traditional Spanish paella?" },
      { id: "cook14", english: "What's the secret ingredient?", spanish: "¿Cuál es el ingrediente secreto?", difficulty: "hard", example: "¿Cuál es el ingrediente secreto de tu salsa especial?", exampleTranslation: "What's the secret ingredient in your special sauce?" },
      { id: "cook15", english: "Let it cool before serving", spanish: "Déjalo enfriar antes de servir", difficulty: "hard", example: "Déjalo enfriar unos minutos antes de servir a los invitados", exampleTranslation: "Let it cool a few minutes before serving to guests" }
    ]
  },

  relationships_dating: {
    name: "Relationships & Dating",
    description: "Romantic and social relationships",
    icon: HeartHandshake,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "rel1", english: "Boyfriend", spanish: "Novio", difficulty: "easy", example: "Mi novio es muy romántico y atento", exampleTranslation: "My boyfriend is very romantic and attentive" },
      { id: "rel2", english: "Girlfriend", spanish: "Novia", difficulty: "easy", example: "Su novia vive en otra ciudad", exampleTranslation: "His girlfriend lives in another city" },
      { id: "rel3", english: "Date", spanish: "Cita", difficulty: "easy", example: "Tengo una cita romántica esta noche", exampleTranslation: "I have a romantic date tonight" },
      { id: "rel4", english: "Kiss", spanish: "Beso", difficulty: "easy", example: "Le dio un beso de despedida", exampleTranslation: "He gave her a goodbye kiss" },
      { id: "rel5", english: "Hug", spanish: "Abrazo", difficulty: "easy", example: "Un abrazo siempre me hace sentir mejor", exampleTranslation: "A hug always makes me feel better" },
      { id: "rel6", english: "Love", spanish: "Amor", difficulty: "easy", example: "El amor verdadero es difícil de encontrar", exampleTranslation: "True love is hard to find" },
      { id: "rel7", english: "Engagement", spanish: "Compromiso", difficulty: "medium", example: "Anunciaron su compromiso en una fiesta familiar", exampleTranslation: "They announced their engagement at a family party" },
      { id: "rel8", english: "Wedding", spanish: "Boda", difficulty: "medium", example: "Su boda será en la playa el próximo verano", exampleTranslation: "Their wedding will be on the beach next summer" },
      { id: "rel9", english: "Anniversary", spanish: "Aniversario", difficulty: "medium", example: "Celebramos nuestro quinto aniversario de matrimonio", exampleTranslation: "We celebrated our fifth wedding anniversary" },
      { id: "rel10", english: "Relationship", spanish: "Relación", difficulty: "medium", example: "Tienen una relación muy sana y feliz", exampleTranslation: "They have a very healthy and happy relationship" },
      { id: "rel11", english: "Breakup", spanish: "Ruptura", difficulty: "medium", example: "La ruptura fue difícil para ambos", exampleTranslation: "The breakup was difficult for both of them" },
      { id: "rel12", english: "Jealous", spanish: "Celoso", difficulty: "medium", example: "No me gusta que sea tan celoso", exampleTranslation: "I don't like that he's so jealous" },
      { id: "rel13", english: "I have feelings for...", spanish: "Tengo sentimientos por...", difficulty: "hard", example: "Creo que tengo sentimientos por alguien del trabajo", exampleTranslation: "I think I have feelings for someone from work" },
      { id: "rel14", english: "We're meant for each other", spanish: "Estamos hechos el uno para el otro", difficulty: "hard", example: "Siento que estamos hechos el uno para el otro", exampleTranslation: "I feel we're meant for each other" },
      { id: "rel15", english: "Will you go out with me?", spanish: "¿Quieres salir conmigo?", difficulty: "hard", example: "Me gustaría invitarte a cenar, ¿quieres salir conmigo?", exampleTranslation: "I'd like to take you to dinner, will you go out with me?" }
    ]
  },

  hotels_accommodation: {
    name: "Hotels & Accommodation",
    description: "Lodging and hotel services",
    icon: Hotel,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "hotel1", english: "Room", spanish: "Habitación", difficulty: "easy", example: "Reservé una habitación doble con vista al mar", exampleTranslation: "I reserved a double room with ocean view" },
      { id: "hotel2", english: "Reception", spanish: "Recepción", difficulty: "easy", example: "La recepción está abierta las 24 horas", exampleTranslation: "Reception is open 24 hours" },
      { id: "hotel3", english: "Key", spanish: "Llave", difficulty: "easy", example: "Perdí la llave de mi habitación", exampleTranslation: "I lost my room key" },
      { id: "hotel4", english: "Bed", spanish: "Cama", difficulty: "easy", example: "La cama es muy cómoda y grande", exampleTranslation: "The bed is very comfortable and big" },
      { id: "hotel5", english: "Towel", spanish: "Toalla", difficulty: "easy", example: "Necesito toallas limpias, por favor", exampleTranslation: "I need clean towels, please" },
      { id: "hotel6", english: "Wifi", spanish: "Wifi", difficulty: "easy", example: "¿Cuál es la contraseña del wifi?", exampleTranslation: "What's the wifi password?" },
      { id: "hotel7", english: "Check-in", spanish: "Registro de entrada", difficulty: "medium", example: "El registro de entrada es a partir de las 3 de la tarde", exampleTranslation: "Check-in is from 3 PM onwards" },
      { id: "hotel8", english: "Check-out", spanish: "Salida", difficulty: "medium", example: "La salida es antes del mediodía", exampleTranslation: "Check-out is before noon" },
      { id: "hotel9", english: "Reservation", spanish: "Reserva", difficulty: "medium", example: "Hice una reserva para tres noches", exampleTranslation: "I made a reservation for three nights" },
      { id: "hotel10", english: "Minibar", spanish: "Minibar", difficulty: "medium", example: "El minibar tiene bebidas y snacks", exampleTranslation: "The minibar has drinks and snacks" },
      { id: "hotel11", english: "Room service", spanish: "Servicio a la habitación", difficulty: "medium", example: "El servicio a la habitación está disponible hasta medianoche", exampleTranslation: "Room service is available until midnight" },
      { id: "hotel12", english: "Complimentary breakfast", spanish: "Desayuno incluido", difficulty: "medium", example: "El hotel ofrece desayuno incluido en el precio", exampleTranslation: "The hotel offers complimentary breakfast in the price" },
      { id: "hotel13", english: "I'd like to extend my stay", spanish: "Me gustaría extender mi estadía", difficulty: "hard", example: "Me gustaría extender mi estadía por dos noches más", exampleTranslation: "I'd like to extend my stay for two more nights" },
      { id: "hotel14", english: "Is breakfast included?", spanish: "¿Está incluido el desayuno?", difficulty: "hard", example: "¿Está incluido el desayuno en el precio de la habitación?", exampleTranslation: "Is breakfast included in the room price?" },
      { id: "hotel15", english: "Can I have a late checkout?", spanish: "¿Puedo hacer la salida tarde?", difficulty: "hard", example: "Mi vuelo es por la tarde, ¿puedo hacer la salida tarde?", exampleTranslation: "My flight is in the afternoon, can I have a late checkout?" }
    ]
  },

  arts_culture: {
    name: "Arts & Culture",
    description: "Museums, art and cultural experiences",
    icon: Palette,
    color: "from-purple-400 to-fuchsia-500",
    level: "advanced",
    words: [
      { id: "art1", english: "Museum", spanish: "Museo", difficulty: "easy", example: "El museo de arte moderno abre a las 10", exampleTranslation: "The modern art museum opens at 10" },
      { id: "art2", english: "Painting", spanish: "Pintura", difficulty: "easy", example: "Esta pintura es de un artista muy famoso", exampleTranslation: "This painting is by a very famous artist" },
      { id: "art3", english: "Sculpture", spanish: "Escultura", difficulty: "easy", example: "La escultura de mármol es impresionante", exampleTranslation: "The marble sculpture is impressive" },
      { id: "art4", english: "Exhibition", spanish: "Exposición", difficulty: "easy", example: "Hay una exposición temporal de fotografía", exampleTranslation: "There's a temporary photography exhibition" },
      { id: "art5", english: "Artist", spanish: "Artista", difficulty: "easy", example: "El artista estará presente en la inauguración", exampleTranslation: "The artist will be present at the opening" },
      { id: "art6", english: "Gallery", spanish: "Galería", difficulty: "easy", example: "La galería muestra arte contemporáneo", exampleTranslation: "The gallery shows contemporary art" },
      { id: "art7", english: "Masterpiece", spanish: "Obra maestra", difficulty: "medium", example: "Esta es considerada una obra maestra del renacimiento", exampleTranslation: "This is considered a masterpiece of the renaissance" },
      { id: "art8", english: "Portrait", spanish: "Retrato", difficulty: "medium", example: "El retrato captura perfectamente la expresión del modelo", exampleTranslation: "The portrait perfectly captures the model's expression" },
      { id: "art9", english: "Abstract", spanish: "Abstracto", difficulty: "medium", example: "El arte abstracto me resulta difícil de interpretar", exampleTranslation: "I find abstract art difficult to interpret" },
      { id: "art10", english: "Heritage", spanish: "Patrimonio", difficulty: "medium", example: "Este edificio es patrimonio cultural de la humanidad", exampleTranslation: "This building is a cultural heritage of humanity" },
      { id: "art11", english: "Curator", spanish: "Curador", difficulty: "medium", example: "El curador del museo organizó una colección fascinante", exampleTranslation: "The museum curator organized a fascinating collection" },
      { id: "art12", english: "Installation", spanish: "Instalación", difficulty: "medium", example: "La instalación artística es interactiva y moderna", exampleTranslation: "The art installation is interactive and modern" },
      { id: "art13", english: "What does it represent?", spanish: "¿Qué representa?", difficulty: "hard", example: "¿Qué representa esta obra para el artista?", exampleTranslation: "What does this work represent for the artist?" },
      { id: "art14", english: "The influence is evident", spanish: "La influencia es evidente", difficulty: "hard", example: "La influencia de los maestros clásicos es evidente en su trabajo", exampleTranslation: "The influence of classical masters is evident in his work" },
      { id: "art15", english: "It's thought-provoking", spanish: "Hace reflexionar", difficulty: "hard", example: "Esta exposición realmente hace reflexionar sobre la sociedad moderna", exampleTranslation: "This exhibition really makes you think about modern society" }
    ]
  },

  idioms_expressions: {
    name: "Idioms & Common Expressions",
    description: "Popular Spanish expressions and sayings",
    icon: MessageCircle,
    color: "from-yellow-400 to-orange-500",
    level: "advanced",
    words: [
      { id: "idiom1", english: "No way!", spanish: "¡De ninguna manera!", difficulty: "easy", example: "¿Quieres que salte desde ahí? ¡De ninguna manera!", exampleTranslation: "You want me to jump from there? No way!" },
      { id: "idiom2", english: "Come on!", spanish: "¡Vamos!", difficulty: "easy", example: "¡Vamos, tú puedes hacerlo!", exampleTranslation: "Come on, you can do it!" },
      { id: "idiom3", english: "Of course!", spanish: "¡Claro que sí!", difficulty: "easy", example: "¿Me puedes ayudar? ¡Claro que sí!", exampleTranslation: "Can you help me? Of course!" },
      { id: "idiom4", english: "Good luck!", spanish: "¡Buena suerte!", difficulty: "easy", example: "¡Buena suerte en tu entrevista de trabajo!", exampleTranslation: "Good luck in your job interview!" },
      { id: "idiom5", english: "Don't worry", spanish: "No te preocupes", difficulty: "easy", example: "No te preocupes, todo va a salir bien", exampleTranslation: "Don't worry, everything will turn out fine" },
      { id: "idiom6", english: "Take it easy", spanish: "Tómalo con calma", difficulty: "easy", example: "Tómalo con calma, no hay prisa", exampleTranslation: "Take it easy, there's no hurry" },
      { id: "idiom7", english: "It's a piece of cake", spanish: "Es pan comido", difficulty: "medium", example: "Este examen es pan comido, lo aprobarás sin problema", exampleTranslation: "This exam is a piece of cake, you'll pass it no problem" },
      { id: "idiom8", english: "Break a leg!", spanish: "¡Mucha mierda!", difficulty: "medium", example: "Tienes la audición hoy, ¡mucha mierda!", exampleTranslation: "You have the audition today, break a leg!" },
      { id: "idiom9", english: "It costs an arm and a leg", spanish: "Cuesta un ojo de la cara", difficulty: "medium", example: "Ese coche deportivo cuesta un ojo de la cara", exampleTranslation: "That sports car costs an arm and a leg" },
      { id: "idiom10", english: "Once in a blue moon", spanish: "De vez en cuando", difficulty: "medium", example: "Voy al cine de vez en cuando, no muy seguido", exampleTranslation: "I go to the movies once in a blue moon, not very often" },
      { id: "idiom11", english: "Better late than never", spanish: "Más vale tarde que nunca", difficulty: "medium", example: "Llegaste dos horas tarde, pero más vale tarde que nunca", exampleTranslation: "You arrived two hours late, but better late than never" },
      { id: "idiom12", english: "Kill two birds with one stone", spanish: "Matar dos pájaros de un tiro", difficulty: "medium", example: "Voy al gimnasio que está cerca del supermercado, así mato dos pájaros de un tiro", exampleTranslation: "I go to the gym near the supermarket, so I kill two birds with one stone" },
      { id: "idiom13", english: "When pigs fly", spanish: "Cuando las ranas críen pelo", difficulty: "hard", example: "¿Él va a disculparse? Sí, cuando las ranas críen pelo", exampleTranslation: "He's going to apologize? Yeah, when pigs fly" },
      { id: "idiom14", english: "It's not rocket science", spanish: "No es tan difícil", difficulty: "hard", example: "Aprender a cocinar arroz no es tan difícil, solo sigue las instrucciones", exampleTranslation: "Learning to cook rice is not rocket science, just follow the instructions" },
      { id: "idiom15", english: "Actions speak louder than words", spanish: "Hechos son amores, no buenas razones", difficulty: "hard", example: "Dice que me quiere, pero hechos son amores, no buenas razones", exampleTranslation: "He says he loves me, but actions speak louder than words" }
    ]
  },

  business_meetings: {
    name: "Business Meetings & Negotiations",
    description: "Professional business vocabulary",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { id: "biz1", english: "Meeting", spanish: "Reunión", difficulty: "easy", example: "Tenemos una reunión importante con el cliente mañana", exampleTranslation: "We have an important meeting with the client tomorrow" },
      { id: "biz2", english: "Proposal", spanish: "Propuesta", difficulty: "easy", example: "Preparé una propuesta detallada para el proyecto", exampleTranslation: "I prepared a detailed proposal for the project" },
      { id: "biz3", english: "Deal", spanish: "Trato", difficulty: "easy", example: "Cerramos un trato muy beneficioso para ambas partes", exampleTranslation: "We closed a very beneficial deal for both parties" },
      { id: "biz4", english: "Contract", spanish: "Contrato", difficulty: "easy", example: "El contrato debe ser firmado por ambas partes", exampleTranslation: "The contract must be signed by both parties" },
      { id: "biz5", english: "Agenda", spanish: "Agenda", difficulty: "easy", example: "¿Alguien tiene la agenda de la reunión de hoy?", exampleTranslation: "Does anyone have today's meeting agenda?" },
      { id: "biz6", english: "Stakeholder", spanish: "Parte interesada", difficulty: "easy", example: "Todos los interesados deben estar presentes en la junta", exampleTranslation: "All stakeholders must be present at the meeting" },
      { id: "biz7", english: "Negotiation", spanish: "Negociación", difficulty: "medium", example: "La negociación fue larga pero exitosa", exampleTranslation: "The negotiation was long but successful" },
      { id: "biz8", english: "Partnership", spanish: "Asociación", difficulty: "medium", example: "Estamos formando una asociación estratégica con esa empresa", exampleTranslation: "We're forming a strategic partnership with that company" },
      { id: "biz9", english: "Revenue", spanish: "Ingresos", difficulty: "medium", example: "Los ingresos del último trimestre superaron las expectativas", exampleTranslation: "Last quarter's revenue exceeded expectations" },
      { id: "biz10", english: "Merger", spanish: "Fusión", difficulty: "medium", example: "La fusión de las dos compañías se completará el próximo mes", exampleTranslation: "The merger of the two companies will be completed next month" },
      { id: "biz11", english: "Forecast", spanish: "Pronóstico", difficulty: "medium", example: "El pronóstico financiero para el año es optimista", exampleTranslation: "The financial forecast for the year is optimistic" },
      { id: "biz12", english: "Competitive advantage", spanish: "Ventaja competitiva", difficulty: "medium", example: "Nuestra ventaja competitiva es la innovación constante", exampleTranslation: "Our competitive advantage is constant innovation" },
      { id: "biz13", english: "Let's discuss the terms", spanish: "Discutamos los términos", difficulty: "hard", example: "Discutamos los términos del acuerdo antes de firmar", exampleTranslation: "Let's discuss the terms of the agreement before signing" },
      { id: "biz14", english: "We need to reach a consensus", spanish: "Necesitamos llegar a un consenso", difficulty: "hard", example: "Necesitamos llegar a un consenso antes del final del día", exampleTranslation: "We need to reach a consensus before the end of the day" },
      { id: "biz15", english: "That's a win-win situation", spanish: "Es una situación beneficiosa para todos", difficulty: "hard", example: "Este acuerdo es una situación beneficiosa para todos los involucrados", exampleTranslation: "This agreement is a win-win situation for everyone involved" }
    ]
  },

  science_discovery: {
    name: "Science & Discovery",
    description: "Scientific and research vocabulary",
    icon: Microscope,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    words: [
      { id: "sci1", english: "Research", spanish: "Investigación", difficulty: "easy", example: "La investigación científica requiere mucha dedicación", exampleTranslation: "Scientific research requires a lot of dedication" },
      { id: "sci2", english: "Discovery", spanish: "Descubrimiento", difficulty: "easy", example: "Este descubrimiento puede cambiar la medicina moderna", exampleTranslation: "This discovery can change modern medicine" },
      { id: "sci3", english: "Experiment", spanish: "Experimento", difficulty: "easy", example: "El experimento fue un éxito completo", exampleTranslation: "The experiment was a complete success" },
      { id: "sci4", english: "Laboratory", spanish: "Laboratorio", difficulty: "easy", example: "Los científicos trabajan en el laboratorio todo el día", exampleTranslation: "Scientists work in the laboratory all day" },
      { id: "sci5", english: "Theory", spanish: "Teoría", difficulty: "easy", example: "Su teoría fue confirmada por múltiples estudios", exampleTranslation: "His theory was confirmed by multiple studies" },
      { id: "sci6", english: "Data", spanish: "Datos", difficulty: "easy", example: "Los datos muestran una tendencia clara", exampleTranslation: "The data shows a clear trend" },
      { id: "sci7", english: "Hypothesis", spanish: "Hipótesis", difficulty: "medium", example: "Nuestra hipótesis inicial resultó ser correcta", exampleTranslation: "Our initial hypothesis turned out to be correct" },
      { id: "sci8", english: "Molecule", spanish: "Molécula", difficulty: "medium", example: "Estudiamos la estructura de la molécula en detalle", exampleTranslation: "We studied the molecule's structure in detail" },
      { id: "sci9", english: "Evolution", spanish: "Evolución", difficulty: "medium", example: "La teoría de la evolución explica el origen de las especies", exampleTranslation: "The theory of evolution explains the origin of species" },
      { id: "sci10", english: "Breakthrough", spanish: "Avance significativo", difficulty: "medium", example: "Este es un avance significativo en la lucha contra el cáncer", exampleTranslation: "This is a breakthrough in the fight against cancer" },
      { id: "sci11", english: "Microscope", spanish: "Microscopio", difficulty: "medium", example: "Observamos las células bajo el microscopio electrónico", exampleTranslation: "We observed the cells under the electron microscope" },
      { id: "sci12", english: "Methodology", spanish: "Metodología", difficulty: "medium", example: "La metodología de investigación fue rigurosa y sistemática", exampleTranslation: "The research methodology was rigorous and systematic" },
      { id: "sci13", english: "The findings suggest...", spanish: "Los hallazgos sugieren...", difficulty: "hard", example: "Los hallazgos sugieren que hay una correlación directa", exampleTranslation: "The findings suggest there's a direct correlation" },
      { id: "sci14", english: "Further research is needed", spanish: "Se necesita más investigación", difficulty: "hard", example: "Se necesita más investigación para confirmar estos resultados", exampleTranslation: "Further research is needed to confirm these results" },
      { id: "sci15", english: "This could revolutionize...", spanish: "Esto podría revolucionar...", difficulty: "hard", example: "Este descubrimiento podría revolucionar la forma en que tratamos enfermedades", exampleTranslation: "This discovery could revolutionize how we treat diseases" }
    ]
  },

  celebrations_events: {
    name: "Celebrations & Events",
    description: "Parties, weddings and special occasions",
    icon: PartyPopper,
    color: "from-fuchsia-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "cel1", english: "Party", spanish: "Fiesta", difficulty: "easy", example: "Vamos a organizar una fiesta sorpresa para María", exampleTranslation: "We're going to organize a surprise party for Maria" },
      { id: "cel2", english: "Invitation", spanish: "Invitación", difficulty: "easy", example: "Recibí una invitación para la boda de mi primo", exampleTranslation: "I received an invitation to my cousin's wedding" },
      { id: "cel3", english: "Guest", spanish: "Invitado", difficulty: "easy", example: "Habrá más de cien invitados en la celebración", exampleTranslation: "There will be more than a hundred guests at the celebration" },
      { id: "cel4", english: "Cake", spanish: "Pastel", difficulty: "easy", example: "El pastel de cumpleaños tiene tres pisos", exampleTranslation: "The birthday cake has three tiers" },
      { id: "cel5", english: "Gift", spanish: "Regalo", difficulty: "easy", example: "Compré un regalo especial para el aniversario", exampleTranslation: "I bought a special gift for the anniversary" },
      { id: "cel6", english: "Decoration", spanish: "Decoración", difficulty: "easy", example: "La decoración del salón es elegante y hermosa", exampleTranslation: "The hall's decoration is elegant and beautiful" },
      { id: "cel7", english: "Toast", spanish: "Brindis", difficulty: "medium", example: "El padre de la novia dio un brindis emotivo", exampleTranslation: "The bride's father gave an emotional toast" },
      { id: "cel8", english: "Venue", spanish: "Lugar del evento", difficulty: "medium", example: "El lugar del evento tiene capacidad para 200 personas", exampleTranslation: "The venue has capacity for 200 people" },
      { id: "cel9", english: "Reception", spanish: "Recepción", difficulty: "medium", example: "La recepción será en el jardín del hotel", exampleTranslation: "The reception will be in the hotel garden" },
      { id: "cel10", english: "Ceremony", spanish: "Ceremonia", difficulty: "medium", example: "La ceremonia comenzará a las cuatro de la tarde", exampleTranslation: "The ceremony will begin at four in the afternoon" },
      { id: "cel11", english: "Fireworks", spanish: "Fuegos artificiales", difficulty: "medium", example: "Los fuegos artificiales iluminaron el cielo nocturno", exampleTranslation: "The fireworks lit up the night sky" },
      { id: "cel12", english: "Dance floor", spanish: "Pista de baile", difficulty: "medium", example: "La pista de baile estuvo llena toda la noche", exampleTranslation: "The dance floor was full all night" },
      { id: "cel13", english: "Congratulations on...", spanish: "Felicidades por...", difficulty: "hard", example: "Felicidades por tu graduación, estamos muy orgullosos", exampleTranslation: "Congratulations on your graduation, we're very proud" },
      { id: "cel14", english: "Let's raise a glass", spanish: "Levantemos una copa", difficulty: "hard", example: "Levantemos una copa por los novios y su futuro juntos", exampleTranslation: "Let's raise a glass to the newlyweds and their future together" },
      { id: "cel15", english: "This calls for a celebration", spanish: "Esto merece una celebración", difficulty: "hard", example: "¡Conseguiste el trabajo! Esto merece una gran celebración", exampleTranslation: "You got the job! This calls for a big celebration" }
    ]
  },

  neighborhood_community: {
    name: "Neighborhood & Community",
    description: "Local community and neighborhood life",
    icon: Home,
    color: "from-emerald-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "neigh1", english: "Neighbor", spanish: "Vecino", difficulty: "easy", example: "Mis vecinos son muy amables y serviciales", exampleTranslation: "My neighbors are very kind and helpful" },
      { id: "neigh2", english: "Street", spanish: "Calle", difficulty: "easy", example: "Vivo en una calle tranquila cerca del parque", exampleTranslation: "I live on a quiet street near the park" },
      { id: "neigh3", english: "Mailbox", spanish: "Buzón", difficulty: "easy", example: "Reviso mi buzón todas las mañanas", exampleTranslation: "I check my mailbox every morning" },
      { id: "neigh4", english: "Sidewalk", spanish: "Acera", difficulty: "easy", example: "Los niños juegan en la acera después de la escuela", exampleTranslation: "Children play on the sidewalk after school" },
      { id: "neigh5", english: "Playground", spanish: "Parque infantil", difficulty: "easy", example: "El nuevo parque infantil tiene juegos modernos", exampleTranslation: "The new playground has modern equipment" },
      { id: "neigh6", english: "Community center", spanish: "Centro comunitario", difficulty: "easy", example: "El centro comunitario ofrece clases gratuitas", exampleTranslation: "The community center offers free classes" },
      { id: "neigh7", english: "Block", spanish: "Cuadra", difficulty: "medium", example: "La tienda está a dos cuadras de mi casa", exampleTranslation: "The store is two blocks from my house" },
      { id: "neigh8", english: "Noise complaint", spanish: "Queja por ruido", difficulty: "medium", example: "Tuve que hacer una queja por ruido la semana pasada", exampleTranslation: "I had to file a noise complaint last week" },
      { id: "neigh9", english: "HOA", spanish: "Asociación de propietarios", difficulty: "medium", example: "La asociación de propietarios organiza eventos mensuales", exampleTranslation: "The HOA organizes monthly events" },
      { id: "neigh10", english: "Garage sale", spanish: "Venta de garaje", difficulty: "medium", example: "Este sábado haré una venta de garaje", exampleTranslation: "This Saturday I'm having a garage sale" },
      { id: "neigh11", english: "Block party", spanish: "Fiesta del vecindario", difficulty: "medium", example: "La fiesta del vecindario es este fin de semana", exampleTranslation: "The block party is this weekend" },
      { id: "neigh12", english: "Property value", spanish: "Valor de la propiedad", difficulty: "medium", example: "El valor de la propiedad ha aumentado este año", exampleTranslation: "Property value has increased this year" },
      { id: "neigh13", english: "Do you know the neighbors?", spanish: "¿Conoces a los vecinos?", difficulty: "hard", example: "¿Conoces a los vecinos del apartamento de al lado?", exampleTranslation: "Do you know the neighbors in the apartment next door?" },
      { id: "neigh14", english: "It's a family-friendly area", spanish: "Es un área familiar", difficulty: "hard", example: "Este barrio es un área familiar con buenas escuelas", exampleTranslation: "This neighborhood is a family-friendly area with good schools" },
      { id: "neigh15", english: "The community is very close-knit", spanish: "La comunidad está muy unida", difficulty: "hard", example: "La comunidad aquí está muy unida y todos se ayudan", exampleTranslation: "The community here is very close-knit and everyone helps each other" }
    ]
  },

  legal_documents: {
    name: "Legal & Documents",
    description: "Legal terminology and official documents",
    icon: Scale,
    color: "from-slate-600 to-gray-700",
    level: "advanced",
    words: [
      { id: "legal1", english: "Document", spanish: "Documento", difficulty: "easy", example: "Necesito que firmes este documento importante", exampleTranslation: "I need you to sign this important document" },
      { id: "legal2", english: "Signature", spanish: "Firma", difficulty: "easy", example: "Tu firma debe ir en la parte inferior del contrato", exampleTranslation: "Your signature should go at the bottom of the contract" },
      { id: "legal3", english: "Law", spanish: "Ley", difficulty: "easy", example: "La nueva ley entrará en vigor el próximo mes", exampleTranslation: "The new law will take effect next month" },
      { id: "legal4", english: "Lawyer", spanish: "Abogado", difficulty: "easy", example: "Mi abogado me aconsejó no firmar ese acuerdo", exampleTranslation: "My lawyer advised me not to sign that agreement" },
      { id: "legal5", english: "Rights", spanish: "Derechos", difficulty: "easy", example: "Todos tenemos derechos que deben ser respetados", exampleTranslation: "We all have rights that must be respected" },
      { id: "legal6", english: "Will", spanish: "Testamento", difficulty: "easy", example: "Es importante hacer un testamento para proteger a tu familia", exampleTranslation: "It's important to make a will to protect your family" },
      { id: "legal7", english: "Notary", spanish: "Notario", difficulty: "medium", example: "El notario certificó la autenticidad del documento", exampleTranslation: "The notary certified the document's authenticity" },
      { id: "legal8", english: "Power of attorney", spanish: "Poder notarial", difficulty: "medium", example: "Le di un poder notarial a mi hermana para que maneje mis asuntos", exampleTranslation: "I gave my sister power of attorney to handle my affairs" },
      { id: "legal9", english: "Lawsuit", spanish: "Demanda", difficulty: "medium", example: "La empresa enfrenta una demanda por discriminación", exampleTranslation: "The company faces a lawsuit for discrimination" },
      { id: "legal10", english: "Clause", spanish: "Cláusula", difficulty: "medium", example: "Lee cuidadosamente cada cláusula del contrato", exampleTranslation: "Read each clause of the contract carefully" },
      { id: "legal11", english: "Settlement", spanish: "Acuerdo extrajudicial", difficulty: "medium", example: "Llegaron a un acuerdo extrajudicial antes del juicio", exampleTranslation: "They reached a settlement before the trial" },
      { id: "legal12", english: "Liability", spanish: "Responsabilidad legal", difficulty: "medium", example: "La empresa acepta toda la responsabilidad legal del incidente", exampleTranslation: "The company accepts full liability for the incident" },
      { id: "legal13", english: "I need legal advice", spanish: "Necesito asesoría legal", difficulty: "hard", example: "Necesito asesoría legal antes de tomar esta decisión importante", exampleTranslation: "I need legal advice before making this important decision" },
      { id: "legal14", english: "According to the law...", spanish: "Según la ley...", difficulty: "hard", example: "Según la ley, tienes derecho a una compensación justa", exampleTranslation: "According to the law, you're entitled to fair compensation" },
      { id: "legal15", english: "That's binding by law", spanish: "Eso es legalmente vinculante", difficulty: "hard", example: "Una vez que firmes, eso es legalmente vinculante", exampleTranslation: "Once you sign, that's binding by law" }
    ]
  },

  internet_social_media: {
    name: "Internet & Social Media",
    description: "Online communication and social networks",
    icon: Wifi,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "net1", english: "Post", spanish: "Publicación", difficulty: "easy", example: "Tu última publicación recibió muchos me gusta", exampleTranslation: "Your last post received many likes" },
      { id: "net2", english: "Like", spanish: "Me gusta", difficulty: "easy", example: "Dale me gusta a la página para recibir actualizaciones", exampleTranslation: "Like the page to receive updates" },
      { id: "net3", english: "Share", spanish: "Compartir", difficulty: "easy", example: "Comparte este video con tus amigos", exampleTranslation: "Share this video with your friends" },
      { id: "net4", english: "Comment", spanish: "Comentario", difficulty: "easy", example: "Lee los comentarios para ver otras opiniones", exampleTranslation: "Read the comments to see other opinions" },
      { id: "net5", english: "Follow", spanish: "Seguir", difficulty: "easy", example: "Sígueme en Instagram para ver más contenido", exampleTranslation: "Follow me on Instagram to see more content" },
      { id: "net6", english: "Profile", spanish: "Perfil", difficulty: "easy", example: "Actualicé mi foto de perfil ayer", exampleTranslation: "I updated my profile picture yesterday" },
      { id: "net7", english: "Hashtag", spanish: "Hashtag", difficulty: "medium", example: "Usa este hashtag para participar en el concurso", exampleTranslation: "Use this hashtag to participate in the contest" },
      { id: "net8", english: "Viral", spanish: "Viral", difficulty: "medium", example: "Su video se volvió viral en pocas horas", exampleTranslation: "Her video went viral in just a few hours" },
      { id: "net9", english: "Influencer", spanish: "Influencer", difficulty: "medium", example: "Muchos influencers promocionan productos en sus páginas", exampleTranslation: "Many influencers promote products on their pages" },
      { id: "net10", english: "Algorithm", spanish: "Algoritmo", difficulty: "medium", example: "El algoritmo determina qué contenido ves primero", exampleTranslation: "The algorithm determines which content you see first" },
      { id: "net11", english: "Feed", spanish: "Muro", difficulty: "medium", example: "Actualiza tu muro para ver las publicaciones más recientes", exampleTranslation: "Refresh your feed to see the latest posts" },
      { id: "net12", english: "Direct message", spanish: "Mensaje directo", difficulty: "medium", example: "Te envié un mensaje directo con más información", exampleTranslation: "I sent you a direct message with more information" },
      { id: "net13", english: "Did you see my story?", spanish: "¿Viste mi historia?", difficulty: "hard", example: "¿Viste mi historia de anoche? Subí fotos del concierto", exampleTranslation: "Did you see my story last night? I posted photos from the concert" },
      { id: "net14", english: "Let's connect online", spanish: "Conectémonos en línea", difficulty: "hard", example: "Conectémonos en LinkedIn, me interesa tu trabajo", exampleTranslation: "Let's connect on LinkedIn, I'm interested in your work" },
      { id: "net15", english: "It's trending right now", spanish: "Está en tendencia ahora", difficulty: "hard", example: "Ese tema está en tendencia ahora en todas las redes sociales", exampleTranslation: "That topic is trending right now on all social media" }
    ]
  },

  beauty_personal_care: {
    name: "Beauty & Personal Care",
    description: "Beauty products and personal grooming",
    icon: Sparkles,
    color: "from-pink-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "beauty1", english: "Makeup", spanish: "Maquillaje", difficulty: "easy", example: "Me gusta usar maquillaje natural para el día", exampleTranslation: "I like to wear natural makeup during the day" },
      { id: "beauty2", english: "Perfume", spanish: "Perfume", difficulty: "easy", example: "Este perfume tiene un aroma floral muy agradable", exampleTranslation: "This perfume has a very pleasant floral scent" },
      { id: "beauty3", english: "Shampoo", spanish: "Champú", difficulty: "easy", example: "Necesito comprar champú para cabello seco", exampleTranslation: "I need to buy shampoo for dry hair" },
      { id: "beauty4", english: "Nail polish", spanish: "Esmalte de uñas", difficulty: "easy", example: "Me puse esmalte de uñas rojo para la fiesta", exampleTranslation: "I put on red nail polish for the party" },
      { id: "beauty5", english: "Moisturizer", spanish: "Crema hidratante", difficulty: "easy", example: "Uso crema hidratante todas las noches antes de dormir", exampleTranslation: "I use moisturizer every night before bed" },
      { id: "beauty6", english: "Haircut", spanish: "Corte de pelo", difficulty: "easy", example: "Necesito un corte de pelo, mi cabello está muy largo", exampleTranslation: "I need a haircut, my hair is very long" },
      { id: "beauty7", english: "Salon", spanish: "Salón de belleza", difficulty: "medium", example: "Tengo cita en el salón de belleza este sábado", exampleTranslation: "I have an appointment at the beauty salon this Saturday" },
      { id: "beauty8", english: "Manicure", spanish: "Manicura", difficulty: "medium", example: "Me hice una manicura francesa para la boda", exampleTranslation: "I got a French manicure for the wedding" },
      { id: "beauty9", english: "Facial", spanish: "Tratamiento facial", difficulty: "medium", example: "El tratamiento facial dejó mi piel radiante", exampleTranslation: "The facial left my skin glowing" },
      { id: "beauty10", english: "Sunscreen", spanish: "Protector solar", difficulty: "medium", example: "Siempre uso protector solar cuando voy a la playa", exampleTranslation: "I always use sunscreen when I go to the beach" },
      { id: "beauty11", english: "Anti-aging", spanish: "Antienvejecimiento", difficulty: "medium", example: "Esta crema antienvejecimiento reduce las arrugas", exampleTranslation: "This anti-aging cream reduces wrinkles" },
      { id: "beauty12", english: "Exfoliate", spanish: "Exfoliar", difficulty: "medium", example: "Es importante exfoliar la piel dos veces por semana", exampleTranslation: "It's important to exfoliate skin twice a week" },
      { id: "beauty13", english: "What's your skincare routine?", spanish: "¿Cuál es tu rutina de cuidado de la piel?", difficulty: "hard", example: "¿Cuál es tu rutina de cuidado de la piel para mantenerla tan bonita?", exampleTranslation: "What's your skincare routine to keep it so beautiful?" },
      { id: "beauty14", english: "I need a makeover", spanish: "Necesito un cambio de imagen", difficulty: "hard", example: "Necesito un cambio de imagen completo, quiero algo totalmente diferente", exampleTranslation: "I need a complete makeover, I want something totally different" },
      { id: "beauty15", english: "It really suits you", spanish: "Te queda muy bien", difficulty: "hard", example: "Ese nuevo color de cabello te queda muy bien", exampleTranslation: "That new hair color really suits you" }
    ]
  },

  cars_driving: {
    name: "Cars & Driving",
    description: "Vehicles and driving vocabulary",
    icon: Car,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "car1", english: "License", spanish: "Licencia", difficulty: "easy", example: "Saqué mi licencia de conducir el mes pasado", exampleTranslation: "I got my driver's license last month" },
      { id: "car2", english: "Gas station", spanish: "Gasolinera", difficulty: "easy", example: "Necesito parar en la gasolinera para llenar el tanque", exampleTranslation: "I need to stop at the gas station to fill the tank" },
      { id: "car3", english: "Engine", spanish: "Motor", difficulty: "easy", example: "El motor de mi coche hace un ruido extraño", exampleTranslation: "My car's engine is making a strange noise" },
      { id: "car4", english: "Brake", spanish: "Freno", difficulty: "easy", example: "Los frenos necesitan ser revisados", exampleTranslation: "The brakes need to be checked" },
      { id: "car5", english: "Steering wheel", spanish: "Volante", difficulty: "easy", example: "Sostén el volante con ambas manos", exampleTranslation: "Hold the steering wheel with both hands" },
      { id: "car6", english: "Traffic light", spanish: "Semáforo", difficulty: "easy", example: "Para en el semáforo cuando esté en rojo", exampleTranslation: "Stop at the traffic light when it's red" },
      { id: "car7", english: "Parking lot", spanish: "Estacionamiento", difficulty: "medium", example: "El estacionamiento del centro comercial está lleno", exampleTranslation: "The mall's parking lot is full" },
      { id: "car8", english: "Traffic jam", spanish: "Embotellamiento", difficulty: "medium", example: "Hay un embotellamiento terrible en la autopista", exampleTranslation: "There's a terrible traffic jam on the highway" },
      { id: "car9", english: "Speed limit", spanish: "Límite de velocidad", difficulty: "medium", example: "Respeta el límite de velocidad en zonas escolares", exampleTranslation: "Respect the speed limit in school zones" },
      { id: "car10", english: "Mechanic", spanish: "Mecánico", difficulty: "medium", example: "Llevé mi coche al mecánico para una revisión completa", exampleTranslation: "I took my car to the mechanic for a complete checkup" },
      { id: "car11", english: "Insurance", spanish: "Seguro", difficulty: "medium", example: "El seguro del auto vence el próximo mes", exampleTranslation: "The car insurance expires next month" },
      { id: "car12", english: "Flat tire", spanish: "Llanta ponchada", difficulty: "medium", example: "Tengo una llanta ponchada y necesito cambiarla", exampleTranslation: "I have a flat tire and need to change it" },
      { id: "car13", english: "Can you give me a ride?", spanish: "¿Me puedes dar un aventón?", difficulty: "hard", example: "Mi coche está en el taller, ¿me puedes dar un aventón al trabajo?", exampleTranslation: "My car is in the shop, can you give me a ride to work?" },
      { id: "car14", english: "I'm running on empty", spanish: "Me estoy quedando sin gasolina", difficulty: "hard", example: "Me estoy quedando sin gasolina, necesito encontrar una gasolinera pronto", exampleTranslation: "I'm running on empty, I need to find a gas station soon" },
      { id: "car15", english: "Watch out for...!", spanish: "¡Cuidado con...!", difficulty: "hard", example: "¡Cuidado con ese coche que viene a toda velocidad!", exampleTranslation: "Watch out for that car coming at full speed!" }
    ]
  },

  photography_hobbies: {
    name: "Photography & Hobbies",
    description: "Photography and creative hobbies",
    icon: Camera,
    color: "from-indigo-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "photo1", english: "Camera", spanish: "Cámara", difficulty: "easy", example: "Compré una cámara profesional para mejorar mis fotos", exampleTranslation: "I bought a professional camera to improve my photos" },
      { id: "photo2", english: "Photo", spanish: "Foto", difficulty: "easy", example: "Tomé muchas fotos durante las vacaciones", exampleTranslation: "I took many photos during vacation" },
      { id: "photo3", english: "Picture", spanish: "Imagen", difficulty: "easy", example: "Esta imagen captura perfectamente el momento", exampleTranslation: "This picture captures the moment perfectly" },
      { id: "photo4", english: "Focus", spanish: "Enfoque", difficulty: "easy", example: "Ajusta el enfoque antes de tomar la fotografía", exampleTranslation: "Adjust the focus before taking the photograph" },
      { id: "photo5", english: "Flash", spanish: "Flash", difficulty: "easy", example: "Usa el flash cuando hay poca luz", exampleTranslation: "Use the flash when there's low light" },
      { id: "photo6", english: "Album", spanish: "Álbum", difficulty: "easy", example: "Creé un álbum digital con las fotos del viaje", exampleTranslation: "I created a digital album with the trip photos" },
      { id: "photo7", english: "Lens", spanish: "Lente", difficulty: "medium", example: "Este lente es perfecto para fotografía de paisajes", exampleTranslation: "This lens is perfect for landscape photography" },
      { id: "photo8", english: "Exposure", spanish: "Exposición", difficulty: "medium", example: "Aumenta la exposición para que la foto sea más clara", exampleTranslation: "Increase the exposure to make the photo brighter" },
      { id: "photo9", english: "Portrait", spanish: "Retrato", difficulty: "medium", example: "Me especializo en fotografía de retrato", exampleTranslation: "I specialize in portrait photography" },
      { id: "photo10", english: "Landscape", spanish: "Paisaje", difficulty: "medium", example: "El paisaje de las montañas es impresionante", exampleTranslation: "The mountain landscape is impressive" },
      { id: "photo11", english: "Editing", spanish: "Edición", difficulty: "medium", example: "La edición de fotos puede mejorar mucho la imagen", exampleTranslation: "Photo editing can greatly improve the image" },
      { id: "photo12", english: "Filter", spanish: "Filtro", difficulty: "medium", example: "Apliqué un filtro vintage a la fotografía", exampleTranslation: "I applied a vintage filter to the photograph" },
      { id: "photo13", english: "Can you take a picture of us?", spanish: "¿Nos puedes tomar una foto?", difficulty: "hard", example: "Disculpe, ¿nos puedes tomar una foto aquí frente al monumento?", exampleTranslation: "Excuse me, can you take a picture of us here in front of the monument?" },
      { id: "photo14", english: "The lighting is perfect", spanish: "La iluminación es perfecta", difficulty: "hard", example: "La iluminación natural de esta hora es perfecta para retratos", exampleTranslation: "The natural lighting at this hour is perfect for portraits" },
      { id: "photo15", english: "That's a great shot!", spanish: "¡Esa es una gran toma!", difficulty: "hard", example: "¡Esa es una gran toma! Capturaste el momento perfecto", exampleTranslation: "That's a great shot! You captured the perfect moment" }
    ]
  },

  household_chores: {
    name: "Household Chores",
    description: "Cleaning and home maintenance tasks",
    icon: Trash2,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "chore1", english: "Clean", spanish: "Limpiar", difficulty: "easy", example: "Necesito limpiar toda la casa este fin de semana", exampleTranslation: "I need to clean the whole house this weekend" },
      { id: "chore2", english: "Sweep", spanish: "Barrer", difficulty: "easy", example: "Barre el piso de la cocina después de cocinar", exampleTranslation: "Sweep the kitchen floor after cooking" },
      { id: "chore3", english: "Mop", spanish: "Trapear", difficulty: "easy", example: "Trapea el piso con agua y jabón", exampleTranslation: "Mop the floor with soap and water" },
      { id: "chore4", english: "Dust", spanish: "Quitar el polvo", difficulty: "easy", example: "Quita el polvo de los muebles con un trapo húmedo", exampleTranslation: "Dust the furniture with a damp cloth" },
      { id: "chore5", english: "Vacuum", spanish: "Aspirar", difficulty: "easy", example: "Aspira la alfombra de la sala todos los días", exampleTranslation: "Vacuum the living room carpet every day" },
      { id: "chore6", english: "Laundry", spanish: "Ropa sucia", difficulty: "easy", example: "Tengo que lavar toda la ropa sucia hoy", exampleTranslation: "I have to wash all the dirty laundry today" },
      { id: "chore7", english: "Iron", spanish: "Planchar", difficulty: "medium", example: "Necesito planchar mis camisas para la semana", exampleTranslation: "I need to iron my shirts for the week" },
      { id: "chore8", english: "Organize", spanish: "Organizar", difficulty: "medium", example: "Voy a organizar el armario este sábado", exampleTranslation: "I'm going to organize the closet this Saturday" },
      { id: "chore9", english: "Take out the trash", spanish: "Sacar la basura", difficulty: "medium", example: "No olvides sacar la basura antes de ir a dormir", exampleTranslation: "Don't forget to take out the trash before going to bed" },
      { id: "chore10", english: "Make the bed", spanish: "Hacer la cama", difficulty: "medium", example: "Hago la cama todas las mañanas después de levantarme", exampleTranslation: "I make the bed every morning after getting up" },
      { id: "chore11", english: "Do the dishes", spanish: "Lavar los platos", difficulty: "medium", example: "Me toca lavar los platos después de la cena", exampleTranslation: "It's my turn to do the dishes after dinner" },
      { id: "chore12", english: "Declutter", spanish: "Ordenar", difficulty: "medium", example: "Necesito ordenar el garaje, está lleno de cosas", exampleTranslation: "I need to declutter the garage, it's full of stuff" },
      { id: "chore13", english: "It's your turn to...", spanish: "Te toca...", difficulty: "hard", example: "Te toca limpiar el baño esta semana", exampleTranslation: "It's your turn to clean the bathroom this week" },
      { id: "chore14", english: "Let's divide the chores", spanish: "Dividamos las tareas", difficulty: "hard", example: "Dividamos las tareas de la casa para que sea más justo", exampleTranslation: "Let's divide the household chores to make it fairer" },
      { id: "chore15", english: "I'll do it later", spanish: "Lo haré más tarde", difficulty: "hard", example: "Ahora estoy ocupado, lo haré más tarde", exampleTranslation: "I'm busy now, I'll do it later" }
    ]
  },

  gardening_plants: {
    name: "Gardening & Plants",
    description: "Plants, flowers and gardening",
    icon: Flower2,
    color: "from-green-400 to-lime-500",
    level: "intermediate",
    words: [
      { id: "gard1", english: "Garden", spanish: "Jardín", difficulty: "easy", example: "Tengo un jardín hermoso lleno de flores", exampleTranslation: "I have a beautiful garden full of flowers" },
      { id: "gard2", english: "Plant", spanish: "Planta", difficulty: "easy", example: "Compré varias plantas nuevas para mi casa", exampleTranslation: "I bought several new plants for my house" },
      { id: "gard3", english: "Flower", spanish: "Flor", difficulty: "easy", example: "Las flores del jardín tienen colores brillantes", exampleTranslation: "The garden flowers have bright colors" },
      { id: "gard4", english: "Tree", spanish: "Árbol", difficulty: "easy", example: "Planté un árbol frutal en el patio trasero", exampleTranslation: "I planted a fruit tree in the backyard" },
      { id: "gard5", english: "Seed", spanish: "Semilla", difficulty: "easy", example: "Sembré semillas de tomate en la primavera", exampleTranslation: "I planted tomato seeds in the spring" },
      { id: "gard6", english: "Water", spanish: "Regar", difficulty: "easy", example: "Riega las plantas temprano por la mañana", exampleTranslation: "Water the plants early in the morning" },
      { id: "gard7", english: "Fertilizer", spanish: "Fertilizante", difficulty: "medium", example: "Uso fertilizante orgánico para mis plantas", exampleTranslation: "I use organic fertilizer for my plants" },
      { id: "gard8", english: "Soil", spanish: "Tierra", difficulty: "medium", example: "Esta tierra es rica en nutrientes para las plantas", exampleTranslation: "This soil is rich in nutrients for plants" },
      { id: "gard9", english: "Prune", spanish: "Podar", difficulty: "medium", example: "Es necesario podar los arbustos una vez al año", exampleTranslation: "It's necessary to prune the shrubs once a year" },
      { id: "gard10", english: "Weed", spanish: "Maleza", difficulty: "medium", example: "Tengo que quitar la maleza del jardín", exampleTranslation: "I have to remove the weeds from the garden" },
      { id: "gard11", english: "Bloom", spanish: "Florecer", difficulty: "medium", example: "Las rosas florecen en primavera y verano", exampleTranslation: "Roses bloom in spring and summer" },
      { id: "gard12", english: "Greenhouse", spanish: "Invernadero", difficulty: "medium", example: "Cultivo vegetales todo el año en mi invernadero", exampleTranslation: "I grow vegetables year-round in my greenhouse" },
      { id: "gard13", english: "It needs more sunlight", spanish: "Necesita más luz solar", difficulty: "hard", example: "Esta planta necesita más luz solar para crecer bien", exampleTranslation: "This plant needs more sunlight to grow well" },
      { id: "gard14", english: "How often should I water it?", spanish: "¿Con qué frecuencia debo regarlo?", difficulty: "hard", example: "¿Con qué frecuencia debo regar el cactus?", exampleTranslation: "How often should I water the cactus?" },
      { id: "gard15", english: "It's starting to grow", spanish: "Está empezando a crecer", difficulty: "hard", example: "Las semillas que planté están empezando a crecer", exampleTranslation: "The seeds I planted are starting to grow" }
    ]
  }
};
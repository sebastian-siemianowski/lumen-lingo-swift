/**
 * SPANISH → ENGLISH FLASHCARDS - PART 3
 * NEW EXPANSION CATEGORIES (15-24)
 * 
 * Native Language: Spanish (Español)
 * Target Language: English
 * 
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Plane,
  Ship,
  Car,
  Hotel,
  Utensils,
  ShoppingBag,
  Briefcase,
  Scale,
  Stethoscope,
  Leaf,
  Heart,
  Dumbbell,
  Monitor,
  Palette,
  Cloud,
  Gift
} from "lucide-react";

export const flashcardsCategories_part3 = {
  travel_vacation: {
    name: "Viajes y vacaciones",
    description: "Términos esenciales para viajar y disfrutar vacaciones",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "trav1", spanish: "Viaje", english: "Trip", difficulty: "easy", example: "We are planning a trip to Europe for three weeks this summer vacation.", exampleTranslation: "Estamos planeando un viaje a Europa por tres semanas estas vacaciones de verano." },
      { id: "trav2", spanish: "Vuelo", english: "Flight", difficulty: "easy", example: "The flight to New York takes about eight hours from Madrid directly.", exampleTranslation: "El vuelo a Nueva York tarda unas ocho horas desde Madrid directamente." },
      { id: "trav3", spanish: "Equipaje", english: "Luggage", difficulty: "easy", example: "My luggage is heavy because I packed too many clothes for the trip.", exampleTranslation: "Mi equipaje está pesado porque empaqué demasiada ropa para el viaje." },
      { id: "trav4", spanish: "Pasaporte", english: "Passport", difficulty: "easy", example: "Don't forget your passport when traveling abroad to other countries always.", exampleTranslation: "No olvides tu pasaporte cuando viajes al extranjero a otros países siempre." },
      { id: "trav5", spanish: "Reserva", english: "Reservation", difficulty: "easy", example: "I made a reservation at the hotel for five nights next month.", exampleTranslation: "Hice una reserva en el hotel por cinco noches el próximo mes." },
      { id: "trav6", spanish: "Billete", english: "Ticket", difficulty: "easy", example: "I bought train tickets for the journey from Barcelona to Madrid tomorrow.", exampleTranslation: "Compré billetes de tren para el viaje de Barcelona a Madrid mañana." },
      { id: "trav7", spanish: "Vacaciones", english: "Vacation", difficulty: "medium", example: "We spent our vacation at the beach relaxing under the sun every day.", exampleTranslation: "Pasamos nuestras vacaciones en la playa relajándonos bajo el sol cada día." },
      { id: "trav8", spanish: "Turista", english: "Tourist", difficulty: "medium", example: "Many tourists visit this beautiful city during the summer months for sightseeing.", exampleTranslation: "Muchos turistas visitan esta ciudad hermosa durante los meses de verano para hacer turismo." },
      { id: "trav9", spanish: "Excursión", english: "Excursion", difficulty: "medium", example: "We went on a guided excursion through the ancient ruins yesterday morning.", exampleTranslation: "Fuimos en una excursión guiada por las ruinas antiguas ayer por la mañana." },
      { id: "trav10", spanish: "Alojamiento", english: "Accommodation", difficulty: "medium", example: "The accommodation includes breakfast and free WiFi for all guests staying there.", exampleTranslation: "El alojamiento incluye desayuno y WiFi gratis para todos los huéspedes alojados allí." },
      { id: "trav11", spanish: "Itinerario", english: "Itinerary", difficulty: "medium", example: "Our itinerary includes visits to five different cities across the country completely.", exampleTranslation: "Nuestro itinerario incluye visitas a cinco ciudades diferentes por todo el país completamente." },
      { id: "trav12", spanish: "Aduana", english: "Customs", difficulty: "medium", example: "We had to go through customs at the airport after landing this morning.", exampleTranslation: "Tuvimos que pasar por la aduana en el aeropuerto después de aterrizar esta mañana." },
      { id: "trav13", spanish: "¿Dónde está mi equipaje?", english: "Where is my luggage?", difficulty: "hard", example: "Excuse me, where is my luggage? I can't find it at the baggage claim!", exampleTranslation: "Disculpe, ¿dónde está mi equipaje? ¡No lo puedo encontrar en el reclamo de equipaje!" },
      { id: "trav14", spanish: "He perdido mi pasaporte", english: "I have lost my passport", difficulty: "hard", example: "I have lost my passport somewhere! What should I do now immediately?", exampleTranslation: "¡He perdido mi pasaporte en algún lugar! ¿Qué debo hacer ahora inmediatamente?" },
      { id: "trav15", spanish: "¿Cuánto cuesta el billete?", english: "How much is the ticket?", difficulty: "hard", example: "How much is the ticket for two adults and one child to London?", exampleTranslation: "¿Cuánto cuesta el billete para dos adultos y un niño a Londres?" }
    ]
  },

  transportation_city: {
    name: "Transporte urbano",
    description: "Moverse por la ciudad en diferentes medios de transporte",
    icon: Car,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "trans1", spanish: "Autobús", english: "Bus", difficulty: "easy", example: "The bus comes every fifteen minutes during rush hour in the morning.", exampleTranslation: "El autobús viene cada quince minutos durante la hora pico por la mañana." },
      { id: "trans2", spanish: "Taxi", english: "Taxi", difficulty: "easy", example: "I took a taxi to the airport because I was running very late today.", exampleTranslation: "Tomé un taxi al aeropuerto porque iba muy tarde hoy." },
      { id: "trans3", spanish: "Metro", english: "Subway", difficulty: "easy", example: "The subway is the fastest way to get downtown during busy hours.", exampleTranslation: "El metro es la forma más rápida de llegar al centro durante las horas ocupadas." },
      { id: "trans4", spanish: "Parada", english: "Stop", difficulty: "easy", example: "The bus stop is just around the corner from my house nearby.", exampleTranslation: "La parada de autobús está justo a la vuelta de la esquina de mi casa cerca." },
      { id: "trans5", spanish: "Estación", english: "Station", difficulty: "easy", example: "The train station is very large with many platforms for different destinations.", exampleTranslation: "La estación de tren es muy grande con muchas plataformas para diferentes destinos." },
      { id: "trans6", spanish: "Conductor", english: "Driver", difficulty: "easy", example: "The bus driver was very friendly and helpful to all passengers today.", exampleTranslation: "El conductor del autobús fue muy amable y servicial con todos los pasajeros hoy." },
      { id: "trans7", spanish: "Tarjeta de transporte", english: "Transit card", difficulty: "medium", example: "You need a transit card to use the subway and buses in this city.", exampleTranslation: "Necesitas una tarjeta de transporte para usar el metro y autobuses en esta ciudad." },
      { id: "trans8", spanish: "Horario", english: "Schedule", difficulty: "medium", example: "Check the bus schedule before you leave to avoid waiting too long unnecessarily.", exampleTranslation: "Consulta el horario del autobús antes de salir para evitar esperar demasiado innecesariamente." },
      { id: "trans9", spanish: "Transbordos", english: "Transfers", difficulty: "medium", example: "You need to make two transfers to get to the museum from here.", exampleTranslation: "Necesitas hacer dos transbordos para llegar al museo desde aquí." },
      { id: "trans10", spanish: "Tarifa", english: "Fare", difficulty: "medium", example: "The fare for children under twelve is half price on weekends only.", exampleTranslation: "La tarifa para niños menores de doce años es mitad de precio los fines de semana solamente." },
      { id: "trans11", spanish: "Andén", english: "Platform", difficulty: "medium", example: "The train departs from platform number seven in ten minutes exactly punctually.", exampleTranslation: "El tren sale del andén número siete en diez minutos exactamente puntualmente." },
      { id: "trans12", spanish: "Retraso", english: "Delay", difficulty: "medium", example: "There is a thirty-minute delay due to technical problems on the track.", exampleTranslation: "Hay un retraso de treinta minutos debido a problemas técnicos en la vía." },
      { id: "trans13", spanish: "¿Qué autobús va al centro?", english: "Which bus goes downtown?", difficulty: "hard", example: "Excuse me, which bus goes downtown from this stop? I need to get there quickly!", exampleTranslation: "Disculpe, ¿qué autobús va al centro desde esta parada? ¡Necesito llegar allí rápido!" },
      { id: "trans14", spanish: "He perdido el tren", english: "I missed the train", difficulty: "hard", example: "I missed the train! When does the next one leave for Barcelona please?", exampleTranslation: "¡He perdido el tren! ¿Cuándo sale el próximo para Barcelona por favor?" },
      { id: "trans15", spanish: "¿Dónde bajo?", english: "Where do I get off?", difficulty: "hard", example: "Where do I get off if I want to go to the museum? Which stop exactly?", exampleTranslation: "¿Dónde bajo si quiero ir al museo? ¿Qué parada exactamente?" }
    ]
  },

  sea_ocean: {
    name: "Mar y océano",
    description: "Vocabulario relacionado con el mar, la playa y navegación",
    icon: Ship,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "sea1", spanish: "Mar", english: "Sea", difficulty: "easy", example: "The sea is calm and beautiful today with gentle waves on the shore.", exampleTranslation: "El mar está tranquilo y hermoso hoy con olas suaves en la orilla." },
      { id: "sea2", spanish: "Playa", english: "Beach", difficulty: "easy", example: "We go to the beach every summer to swim and sunbathe all day.", exampleTranslation: "Vamos a la playa cada verano para nadar y tomar el sol todo el día." },
      { id: "sea3", spanish: "Arena", english: "Sand", difficulty: "easy", example: "The sand is soft and warm under my feet when walking barefoot.", exampleTranslation: "La arena es suave y cálida bajo mis pies al caminar descalzo." },
      { id: "sea4", spanish: "Ola", english: "Wave", difficulty: "easy", example: "The waves are very big today, perfect for surfing in the ocean.", exampleTranslation: "Las olas están muy grandes hoy, perfectas para surfear en el océano." },
      { id: "sea5", spanish: "Barco", english: "Boat", difficulty: "easy", example: "We rented a small boat to go fishing on the lake yesterday afternoon.", exampleTranslation: "Alquilamos un barco pequeño para ir a pescar en el lago ayer por la tarde." },
      { id: "sea6", spanish: "Nadar", english: "Swim", difficulty: "easy", example: "I love to swim in the ocean when the water is warm and clear.", exampleTranslation: "Me encanta nadar en el océano cuando el agua está cálida y clara." },
      { id: "sea7", spanish: "Salvavidas", english: "Lifeguard", difficulty: "medium", example: "The lifeguard watches carefully to keep swimmers safe on the busy beach always.", exampleTranslation: "El salvavidas vigila cuidadosamente para mantener a los nadadores seguros en la playa concurrida siempre." },
      { id: "sea8", spanish: "Puerto", english: "Port", difficulty: "medium", example: "The cruise ship arrives at the port early in the morning at seven o'clock.", exampleTranslation: "El crucero llega al puerto temprano por la mañana a las siete en punto." },
      { id: "sea9", spanish: "Marea", english: "Tide", difficulty: "medium", example: "The tide is low right now, so you can walk far on the beach.", exampleTranslation: "La marea está baja ahora mismo, así que puedes caminar lejos en la playa." },
      { id: "sea10", spanish: "Concha", english: "Seashell", difficulty: "medium", example: "The children are collecting beautiful seashells along the sandy beach happily together.", exampleTranslation: "Los niños están recolectando conchas hermosas a lo largo de la playa arenosa felizmente juntos." },
      { id: "sea11", spanish: "Faro", english: "Lighthouse", difficulty: "medium", example: "The lighthouse guides ships safely to the port during dark stormy nights protectively.", exampleTranslation: "El faro guía a los barcos de forma segura al puerto durante las noches oscuras tormentosas protectoramente." },
      { id: "sea12", spanish: "Horizonte", english: "Horizon", difficulty: "medium", example: "We watched the sun set on the horizon over the ocean beautifully peacefully.", exampleTranslation: "Vimos el sol ponerse en el horizonte sobre el océano hermosamente pacíficamente." },
      { id: "sea13", spanish: "Vamos a la playa", english: "Let's go to the beach", difficulty: "hard", example: "Let's go to the beach today! The weather is perfect for swimming and relaxing!", exampleTranslation: "¡Vamos a la playa hoy! ¡El clima está perfecto para nadar y relajarse!" },
      { id: "sea14", spanish: "El agua está fría", english: "The water is cold", difficulty: "hard", example: "The water is very cold today! I don't think I want to swim right now!", exampleTranslation: "¡El agua está muy fría hoy! ¡No creo que quiera nadar ahora mismo!" },
      { id: "sea15", spanish: "Me gusta el mar", english: "I love the sea", difficulty: "hard", example: "I absolutely love the sea! I could spend all day watching the waves crash!", exampleTranslation: "¡Me encanta absolutamente el mar! ¡Podría pasar todo el día viendo las olas romper!" }
    ]
  },

  hotel_lodging: {
    name: "Hotel y alojamiento",
    description: "Estancias en hoteles, reservas y servicios de hospedaje",
    icon: Hotel,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "hotel1", spanish: "Habitación", english: "Room", difficulty: "easy", example: "I booked a double room with a beautiful view of the ocean for tonight.", exampleTranslation: "Reservé una habitación doble con una vista hermosa del océano para esta noche." },
      { id: "hotel2", spanish: "Recepción", english: "Reception", difficulty: "easy", example: "Please go to the reception desk to check in and get your room key.", exampleTranslation: "Por favor vaya a la recepción para registrarse y obtener su llave de la habitación." },
      { id: "hotel3", spanish: "Llave", english: "Key", difficulty: "easy", example: "Here is your room key for room three hundred and five on third floor.", exampleTranslation: "Aquí está su llave de la habitación para la habitación trescientos cinco en el tercer piso." },
      { id: "hotel4", spanish: "Desayuno", english: "Breakfast", difficulty: "easy", example: "Breakfast is included in the price and served from seven to ten o'clock.", exampleTranslation: "El desayuno está incluido en el precio y se sirve de siete a diez en punto." },
      { id: "hotel5", spanish: "Registro", english: "Check-in", difficulty: "easy", example: "Check-in time is after three o'clock in the afternoon for all guests.", exampleTranslation: "La hora de registro es después de las tres de la tarde para todos los huéspedes." },
      { id: "hotel6", spanish: "Salida", english: "Check-out", difficulty: "easy", example: "Check-out is before eleven o'clock on your last day of stay here.", exampleTranslation: "La salida es antes de las once en punto en tu último día de estancia aquí." },
      { id: "hotel7", spanish: "Servicio de habitaciones", english: "Room service", difficulty: "medium", example: "Room service is available twenty-four hours a day for all our guests staying.", exampleTranslation: "El servicio de habitaciones está disponible las veinticuatro horas del día para todos nuestros huéspedes alojados." },
      { id: "hotel8", spanish: "Toallas", english: "Towels", difficulty: "medium", example: "Fresh towels are provided every day by the cleaning staff in the bathroom.", exampleTranslation: "Las toallas frescas se proporcionan cada día por el personal de limpieza en el baño." },
      { id: "hotel9", spanish: "Aire acondicionado", english: "Air conditioning", difficulty: "medium", example: "The air conditioning in the room works perfectly for hot summer nights comfortably.", exampleTranslation: "El aire acondicionado en la habitación funciona perfectamente para las noches calurosas de verano cómodamente." },
      { id: "hotel10", spanish: "Queja", english: "Complaint", difficulty: "medium", example: "I would like to make a complaint about the noise from the next room.", exampleTranslation: "Me gustaría hacer una queja sobre el ruido de la habitación de al lado." },
      { id: "hotel11", spanish: "Caja fuerte", english: "Safe", difficulty: "medium", example: "There is a safe in the room for your valuables and important documents securely.", exampleTranslation: "Hay una caja fuerte en la habitación para sus objetos de valor y documentos importantes de forma segura." },
      { id: "hotel12", spanish: "Recepcionista", english: "Receptionist", difficulty: "medium", example: "The receptionist at the front desk can help you with any questions politely professionally.", exampleTranslation: "El recepcionista en la recepción puede ayudarle con cualquier pregunta cortésmente profesionalmente." },
      { id: "hotel13", spanish: "Tengo una reserva", english: "I have a reservation", difficulty: "hard", example: "Good evening, I have a reservation under the name Garcia for three nights!", exampleTranslation: "Buenas noches, ¡tengo una reserva a nombre de García por tres noches!" },
      { id: "hotel14", spanish: "La habitación está sucia", english: "The room is dirty", difficulty: "hard", example: "Excuse me, the room is dirty! Could you send someone to clean it please?", exampleTranslation: "Disculpe, ¡la habitación está sucia! ¿Podría enviar a alguien para limpiarla por favor?" },
      { id: "hotel15", spanish: "No funciona el WiFi", english: "The WiFi doesn't work", difficulty: "hard", example: "The WiFi in my room doesn't work! Can you help me fix this problem?", exampleTranslation: "¡El WiFi en mi habitación no funciona! ¿Puede ayudarme a arreglar este problema?" }
    ]
  },

  restaurant_dining: {
    name: "Restaurante y comida",
    description: "Experiencias gastronómicas, pedidos y servicio en restaurantes",
    icon: Utensils,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "rest1", spanish: "Menú", english: "Menu", difficulty: "easy", example: "Can I see the menu please? I would like to order something delicious.", exampleTranslation: "¿Puedo ver el menú por favor? Me gustaría pedir algo delicioso." },
      { id: "rest2", spanish: "Camarero", english: "Waiter", difficulty: "easy", example: "The waiter is very attentive and brings our food quickly to the table.", exampleTranslation: "El camarero es muy atento y trae nuestra comida rápidamente a la mesa." },
      { id: "rest3", spanish: "Cuenta", english: "Bill", difficulty: "easy", example: "Can we have the bill please? We would like to pay now and leave.", exampleTranslation: "¿Nos trae la cuenta por favor? Quisiéramos pagar ahora e irnos." },
      { id: "rest4", spanish: "Propina", english: "Tip", difficulty: "easy", example: "I always leave a good tip when the service is excellent at restaurants.", exampleTranslation: "Siempre dejo una buena propina cuando el servicio es excelente en los restaurantes." },
      { id: "rest5", spanish: "Plato", english: "Dish", difficulty: "easy", example: "This dish is delicious! What ingredients did the chef use for cooking?", exampleTranslation: "¡Este plato está delicioso! ¿Qué ingredientes usó el chef para cocinar?" },
      { id: "rest6", spanish: "Bebida", english: "Drink", difficulty: "easy", example: "What drinks do you have available? I would like something cold refreshing.", exampleTranslation: "¿Qué bebidas tienen disponibles? Me gustaría algo frío refrescante." },
      { id: "rest7", spanish: "Reservar mesa", english: "Book a table", difficulty: "medium", example: "I would like to book a table for four people tomorrow evening at eight.", exampleTranslation: "Me gustaría reservar una mesa para cuatro personas mañana por la noche a las ocho." },
      { id: "rest8", spanish: "Plato del día", english: "Dish of the day", difficulty: "medium", example: "The dish of the day is grilled salmon with vegetables and rice on the side.", exampleTranslation: "El plato del día es salmón a la parrilla con verduras y arroz al lado." },
      { id: "rest9", spanish: "Entrada", english: "Appetizer", difficulty: "medium", example: "For the appetizer, I recommend the soup or the fresh salad with cheese.", exampleTranslation: "Para la entrada, recomiendo la sopa o la ensalada fresca con queso." },
      { id: "rest10", spanish: "Postre", english: "Dessert", difficulty: "medium", example: "The chocolate cake is the most popular dessert in this restaurant always delicious.", exampleTranslation: "El pastel de chocolate es el postre más popular en este restaurante siempre delicioso." },
      { id: "rest11", spanish: "Alérgico", english: "Allergic", difficulty: "medium", example: "I am allergic to peanuts, please make sure there are none in my food.", exampleTranslation: "Soy alérgico a los cacahuates, por favor asegúrese de que no haya ninguno en mi comida." },
      { id: "rest12", spanish: "Cocina", english: "Kitchen", difficulty: "medium", example: "The kitchen closes at ten o'clock, so please order before that time tonight.", exampleTranslation: "La cocina cierra a las diez en punto, así que por favor ordene antes de esa hora esta noche." },
      { id: "rest13", spanish: "Quisiera pedir", english: "I would like to order", difficulty: "hard", example: "I would like to order the steak with fries and a glass of red wine please!", exampleTranslation: "¡Quisiera pedir el filete con papas fritas y una copa de vino tinto por favor!" },
      { id: "rest14", spanish: "Está muy rico", english: "It's very tasty", difficulty: "hard", example: "This is very tasty! The chef did an amazing job with this delicious dish!", exampleTranslation: "¡Está muy rico! ¡El chef hizo un trabajo increíble con este plato delicioso!" },
      { id: "rest15", spanish: "No pedí esto", english: "I didn't order this", difficulty: "hard", example: "Excuse me, I didn't order this dish! I ordered the fish, not the chicken!", exampleTranslation: "Disculpe, ¡no pedí este plato! ¡Pedí el pescado, no el pollo!" }
    ]
  },

  shopping_stores: {
    name: "Compras y tiendas",
    description: "De compras en diferentes tipos de establecimientos comerciales",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "shop1", spanish: "Tienda", english: "Store", difficulty: "easy", example: "The store opens at nine o'clock in the morning every day except Sunday.", exampleTranslation: "La tienda abre a las nueve de la mañana todos los días excepto el domingo." },
      { id: "shop2", spanish: "Comprar", english: "Buy", difficulty: "easy", example: "I want to buy a new dress for the party next weekend at the mall.", exampleTranslation: "Quiero comprar un vestido nuevo para la fiesta el próximo fin de semana en el centro comercial." },
      { id: "shop3", spanish: "Precio", english: "Price", difficulty: "easy", example: "What is the price of this beautiful jacket? Is it on sale right now?", exampleTranslation: "¿Cuál es el precio de esta chaqueta hermosa? ¿Está en oferta ahora mismo?" },
      { id: "shop4", spanish: "Descuento", english: "Discount", difficulty: "easy", example: "There is a twenty percent discount on all winter clothes this week only.", exampleTranslation: "Hay un descuento del veinte por ciento en toda la ropa de invierno solo esta semana." },
      { id: "shop5", spanish: "Caro", english: "Expensive", difficulty: "easy", example: "This watch is too expensive for me! I need something more affordable cheaper.", exampleTranslation: "¡Este reloj es demasiado caro para mí! Necesito algo más asequible más barato." },
      { id: "shop6", spanish: "Barato", english: "Cheap", difficulty: "easy", example: "These shoes are very cheap but good quality for everyday use comfortable.", exampleTranslation: "Estos zapatos son muy baratos pero de buena calidad para uso diario cómodos." },
      { id: "shop7", spanish: "Probador", english: "Fitting room", difficulty: "medium", example: "Can I use the fitting room to try on these jeans before buying them?", exampleTranslation: "¿Puedo usar el probador para probarme estos jeans antes de comprarlos?" },
      { id: "shop8", spanish: "Talla", english: "Size", difficulty: "medium", example: "Do you have this shirt in a smaller size? This one is too big for me.", exampleTranslation: "¿Tiene esta camisa en una talla más pequeña? Esta es demasiado grande para mí." },
      { id: "shop9", spanish: "Devolver", english: "Return", difficulty: "medium", example: "Can I return this item if it doesn't fit me well at home later?", exampleTranslation: "¿Puedo devolver este artículo si no me queda bien en casa después?" },
      { id: "shop10", spanish: "Recibo", english: "Receipt", difficulty: "medium", example: "Keep your receipt in case you need to return or exchange the product later.", exampleTranslation: "Guarde su recibo en caso de que necesite devolver o cambiar el producto después." },
      { id: "shop11", spanish: "Rebajas", english: "Sales", difficulty: "medium", example: "The winter sales start next week with discounts up to fifty percent off!", exampleTranslation: "¡Las rebajas de invierno comienzan la próxima semana con descuentos de hasta cincuenta por ciento!" },
      { id: "shop12", spanish: "Escaparate", english: "Display window", difficulty: "medium", example: "The display window shows the latest fashion collection beautifully arranged attractively for customers.", exampleTranslation: "El escaparate muestra la última colección de moda hermosamente arreglada atractivamente para los clientes." },
      { id: "shop13", spanish: "¿Cuánto cuesta?", english: "How much does it cost?", difficulty: "hard", example: "How much does this beautiful dress cost? Is there any discount available today?", exampleTranslation: "¿Cuánto cuesta este vestido hermoso? ¿Hay algún descuento disponible hoy?" },
      { id: "shop14", spanish: "Es demasiado caro", english: "It's too expensive", difficulty: "hard", example: "It's too expensive for my budget! Do you have something similar but cheaper?", exampleTranslation: "¡Es demasiado caro para mi presupuesto! ¿Tiene algo similar pero más barato?" },
      { id: "shop15", spanish: "Me lo llevo", english: "I'll take it", difficulty: "hard", example: "I'll take it! Can you wrap it as a gift for someone special please?", exampleTranslation: "¡Me lo llevo! ¿Puede envolverlo como regalo para alguien especial por favor?" }
    ]
  },

  office_workplace: {
    name: "Oficina y trabajo",
    description: "Entorno laboral, tareas y comunicación profesional",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "off1", spanish: "Oficina", english: "Office", difficulty: "easy", example: "I work in an office downtown from Monday to Friday every week regularly.", exampleTranslation: "Trabajo en una oficina en el centro de lunes a viernes cada semana regularmente." },
      { id: "off2", spanish: "Jefe", english: "Boss", difficulty: "easy", example: "My boss is very demanding but also fair to all employees in the company.", exampleTranslation: "Mi jefe es muy exigente pero también justo con todos los empleados en la empresa." },
      { id: "off3", spanish: "Reunión", english: "Meeting", difficulty: "easy", example: "We have an important meeting at ten o'clock this morning with clients today.", exampleTranslation: "Tenemos una reunión importante a las diez en punto esta mañana con clientes hoy." },
      { id: "off4", spanish: "Escritorio", english: "Desk", difficulty: "easy", example: "My desk is always organized and clean for better productivity at work daily.", exampleTranslation: "Mi escritorio siempre está organizado y limpio para mejor productividad en el trabajo diariamente." },
      { id: "off5", spanish: "Computadora", english: "Computer", difficulty: "easy", example: "I spend most of my day working on the computer writing reports and emails.", exampleTranslation: "Paso la mayor parte de mi día trabajando en la computadora escribiendo informes y correos electrónicos." },
      { id: "off6", spanish: "Colega", english: "Colleague", difficulty: "easy", example: "My colleagues are friendly and we work well together as a team always.", exampleTranslation: "Mis colegas son amigables y trabajamos bien juntos como equipo siempre." },
      { id: "off7", spanish: "Proyecto", english: "Project", difficulty: "medium", example: "We are working on an important project that must be finished by next month.", exampleTranslation: "Estamos trabajando en un proyecto importante que debe estar terminado para el próximo mes." },
      { id: "off8", spanish: "Plazo", english: "Deadline", difficulty: "medium", example: "The deadline for this report is tomorrow morning at nine o'clock sharp exactly.", exampleTranslation: "El plazo para este informe es mañana por la mañana a las nueve en punto exactamente." },
      { id: "off9", spanish: "Presentación", english: "Presentation", difficulty: "medium", example: "I have to give a presentation to the board of directors next Wednesday afternoon.", exampleTranslation: "Tengo que dar una presentación a la junta directiva el próximo miércoles por la tarde." },
      { id: "off10", spanish: "Contrato", english: "Contract", difficulty: "medium", example: "Please read the contract carefully before signing it at the bottom of the page.", exampleTranslation: "Por favor lea el contrato cuidadosamente antes de firmarlo en la parte inferior de la página." },
      { id: "off11", spanish: "Ascenso", english: "Promotion", difficulty: "medium", example: "She received a well-deserved promotion after three years of excellent work here.", exampleTranslation: "Ella recibió un ascenso bien merecido después de tres años de excelente trabajo aquí." },
      { id: "off12", spanish: "Despedir", english: "Fire", difficulty: "medium", example: "The company had to fire several employees due to financial difficulties unfortunately sadly.", exampleTranslation: "La empresa tuvo que despedir a varios empleados debido a dificultades financieras desafortunadamente tristemente." },
      { id: "off13", spanish: "Trabajo desde casa", english: "I work from home", difficulty: "hard", example: "I work from home three days a week! It's much more comfortable and productive!", exampleTranslation: "¡Trabajo desde casa tres días a la semana! ¡Es mucho más cómodo y productivo!" },
      { id: "off14", spanish: "Tengo mucho trabajo", english: "I have a lot of work", difficulty: "hard", example: "I have so much work today! I don't think I can finish everything on time!", exampleTranslation: "¡Tengo mucho trabajo hoy! ¡No creo que pueda terminar todo a tiempo!" },
      { id: "off15", spanish: "¿Cuándo es la reunión?", english: "When is the meeting?", difficulty: "hard", example: "When exactly is the meeting scheduled? I need to prepare my presentation materials beforehand!", exampleTranslation: "¿Cuándo exactamente está programada la reunión? ¡Necesito preparar mis materiales de presentación de antemano!" }
    ]
  },

  law_legal: {
    name: "Derecho y asuntos legales",
    description: "Terminología jurídica, leyes y procesos legales",
    icon: Scale,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { id: "law1", spanish: "Ley", english: "Law", difficulty: "easy", example: "The law prohibits smoking in public buildings and enclosed spaces for everyone.", exampleTranslation: "La ley prohíbe fumar en edificios públicos y espacios cerrados para todos." },
      { id: "law2", spanish: "Abogado", english: "Lawyer", difficulty: "easy", example: "I need to consult a lawyer about this important legal matter urgently today.", exampleTranslation: "Necesito consultar a un abogado sobre este asunto legal importante urgentemente hoy." },
      { id: "law3", spanish: "Juez", english: "Judge", difficulty: "easy", example: "The judge will announce the verdict tomorrow morning at ten o'clock in court.", exampleTranslation: "El juez anunciará el veredicto mañana por la mañana a las diez en punto en la corte." },
      { id: "law4", spanish: "Tribunal", english: "Court", difficulty: "easy", example: "The case will be heard in court next Monday morning before the judge.", exampleTranslation: "El caso será escuchado en el tribunal el próximo lunes por la mañana ante el juez." },
      { id: "law5", spanish: "Contrato", english: "Contract", difficulty: "easy", example: "Both parties must sign the contract for it to be legally valid and binding.", exampleTranslation: "Ambas partes deben firmar el contrato para que sea legalmente válido y vinculante." },
      { id: "law6", spanish: "Testigo", english: "Witness", difficulty: "easy", example: "The witness testified under oath in court yesterday afternoon for three hours long.", exampleTranslation: "El testigo testificó bajo juramento en la corte ayer por la tarde durante tres horas largas." },
      { id: "law7", spanish: "Demanda", english: "Lawsuit", difficulty: "medium", example: "He filed a lawsuit against the company for unfair dismissal last week officially.", exampleTranslation: "Presentó una demanda contra la empresa por despido injusto la semana pasada oficialmente." },
      { id: "law8", spanish: "Prueba", english: "Evidence", difficulty: "medium", example: "The lawyer presented strong evidence to prove his client's innocence in court today.", exampleTranslation: "El abogado presentó pruebas contundentes para probar la inocencia de su cliente en la corte hoy." },
      { id: "law9", spanish: "Sentencia", english: "Sentence", difficulty: "medium", example: "The judge gave a harsh sentence of ten years in prison for the crime.", exampleTranslation: "El juez dio una sentencia severa de diez años de prisión por el crimen." },
      { id: "law10", spanish: "Acusado", english: "Defendant", difficulty: "medium", example: "The defendant pleaded not guilty to all charges against him in court firmly strongly.", exampleTranslation: "El acusado se declaró inocente de todos los cargos en su contra en la corte firmemente fuertemente." },
      { id: "law11", spanish: "Veredicto", english: "Verdict", difficulty: "medium", example: "The jury reached a unanimous verdict after deliberating for two days carefully thoroughly.", exampleTranslation: "El jurado alcanzó un veredicto unánime después de deliberar durante dos días cuidadosamente minuciosamente." },
      { id: "law12", spanish: "Multa", english: "Fine", difficulty: "medium", example: "I received a fine for speeding on the highway last week unfortunately regrettably.", exampleTranslation: "Recibí una multa por exceso de velocidad en la autopista la semana pasada desafortunadamente lamentablemente." },
      { id: "law13", spanish: "Necesito un abogado", english: "I need a lawyer", difficulty: "hard", example: "I urgently need a lawyer for this complicated case! Can you recommend someone good experienced?", exampleTranslation: "¡Necesito urgentemente un abogado para este caso complicado! ¿Puede recomendar a alguien bueno experimentado?" },
      { id: "law14", spanish: "Tengo derecho a...", english: "I have the right to...", difficulty: "hard", example: "I have the legal right to remain silent and to have a lawyer present during questioning!", exampleTranslation: "¡Tengo el derecho legal a permanecer en silencio y a tener un abogado presente durante el interrogatorio!" },
      { id: "law15", spanish: "Esto es ilegal", english: "This is illegal", difficulty: "hard", example: "This is completely illegal! I will take legal action against this immediately without delay!", exampleTranslation: "¡Esto es completamente ilegal! ¡Tomaré acción legal contra esto inmediatamente sin demora!" }
    ]
  },

  medical_health: {
    name: "Medicina y salud",
    description: "Atención médica, síntomas y consultas con profesionales",
    icon: Stethoscope,
    color: "from-rose-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "med1", spanish: "Médico", english: "Doctor", difficulty: "easy", example: "I need to see a doctor because I have been feeling sick since yesterday morning.", exampleTranslation: "Necesito ver a un médico porque me he estado sintiendo enfermo desde ayer por la mañana." },
      { id: "med2", spanish: "Enfermera", english: "Nurse", difficulty: "easy", example: "The nurse took my blood pressure and temperature at the clinic this afternoon.", exampleTranslation: "La enfermera tomó mi presión arterial y temperatura en la clínica esta tarde." },
      { id: "med3", spanish: "Hospital", english: "Hospital", difficulty: "easy", example: "He was taken to the hospital by ambulance after the accident on the highway.", exampleTranslation: "Fue llevado al hospital en ambulancia después del accidente en la autopista." },
      { id: "med4", spanish: "Medicina", english: "Medicine", difficulty: "easy", example: "Take this medicine three times a day after meals with plenty of water.", exampleTranslation: "Tome esta medicina tres veces al día después de las comidas con mucha agua." },
      { id: "med5", spanish: "Dolor", english: "Pain", difficulty: "easy", example: "I have a terrible pain in my back from sitting too long at work.", exampleTranslation: "Tengo un dolor terrible en mi espalda por estar sentado demasiado tiempo en el trabajo." },
      { id: "med6", spanish: "Fiebre", english: "Fever", difficulty: "easy", example: "The child has a high fever and should stay in bed resting all day.", exampleTranslation: "El niño tiene fiebre alta y debe quedarse en cama descansando todo el día." },
      { id: "med7", spanish: "Receta médica", english: "Prescription", difficulty: "medium", example: "The doctor wrote a prescription for antibiotics to treat the infection effectively quickly.", exampleTranslation: "El doctor escribió una receta médica para antibióticos para tratar la infección efectivamente rápidamente." },
      { id: "med8", spanish: "Síntomas", english: "Symptoms", difficulty: "medium", example: "The main symptoms are headache, fever, and cough for the past three days now.", exampleTranslation: "Los síntomas principales son dolor de cabeza, fiebre y tos desde hace tres días ahora." },
      { id: "med9", spanish: "Examen médico", english: "Medical examination", difficulty: "medium", example: "You need a complete medical examination before starting this new job at the company.", exampleTranslation: "Necesitas un examen médico completo antes de comenzar este nuevo trabajo en la empresa." },
      { id: "med10", spanish: "Alergia", english: "Allergy", difficulty: "medium", example: "I have a severe allergy to peanuts and must avoid them completely always carefully.", exampleTranslation: "Tengo una alergia severa a los cacahuates y debo evitarlos completamente siempre cuidadosamente." },
      { id: "med11", spanish: "Cirugía", english: "Surgery", difficulty: "medium", example: "He needs surgery on his knee after the sports injury last month unfortunately.", exampleTranslation: "Necesita cirugía en su rodilla después de la lesión deportiva el mes pasado desafortunadamente." },
      { id: "med12", spanish: "Radiografía", english: "X-ray", difficulty: "medium", example: "The doctor ordered an X-ray to check if there are any broken bones inside.", exampleTranslation: "El doctor ordenó una radiografía para verificar si hay huesos rotos adentro." },
      { id: "med13", spanish: "Me duele la cabeza", english: "My head hurts", difficulty: "hard", example: "My head hurts terribly! Do you have any pain medication I could take now?", exampleTranslation: "¡Me duele terriblemente la cabeza! ¿Tiene algún medicamento para el dolor que pueda tomar ahora?" },
      { id: "med14", spanish: "Necesito una cita", english: "I need an appointment", difficulty: "hard", example: "I need an appointment with the doctor as soon as possible! It's quite urgent!", exampleTranslation: "¡Necesito una cita con el doctor lo antes posible! ¡Es bastante urgente!" },
      { id: "med15", spanish: "¿Qué me recomienda?", english: "What do you recommend?", difficulty: "hard", example: "What medicine do you recommend for this persistent cough that won't go away doctor?", exampleTranslation: "¿Qué medicina me recomienda para esta tos persistente que no se va doctor?" }
    ]
  },

  environment_nature: {
    name: "Medio ambiente y naturaleza",
    description: "Ecología, conservación y fenómenos naturales",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "env1", spanish: "Naturaleza", english: "Nature", difficulty: "easy", example: "I love spending time in nature hiking through forests and mountains peacefully.", exampleTranslation: "Me encanta pasar tiempo en la naturaleza caminando por bosques y montañas pacíficamente." },
      { id: "env2", spanish: "Árbol", english: "Tree", difficulty: "easy", example: "This old tree has been here for over one hundred years standing tall.", exampleTranslation: "Este árbol viejo ha estado aquí por más de cien años de pie alto." },
      { id: "env3", spanish: "Río", english: "River", difficulty: "easy", example: "The river flows through the valley carrying fresh water to the ocean constantly.", exampleTranslation: "El río fluye por el valle llevando agua fresca al océano constantemente." },
      { id: "env4", spanish: "Montaña", english: "Mountain", difficulty: "easy", example: "We climbed the mountain yesterday and the view from the top was amazing!", exampleTranslation: "Escalamos la montaña ayer y la vista desde la cima fue increíble!" },
      { id: "env5", spanish: "Bosque", english: "Forest", difficulty: "easy", example: "The forest is full of wildlife and beautiful plants growing naturally everywhere densely.", exampleTranslation: "El bosque está lleno de vida silvestre y plantas hermosas creciendo naturalmente por todas partes densamente." },
      { id: "env6", spanish: "Reciclar", english: "Recycle", difficulty: "easy", example: "We must recycle paper, plastic, and glass to protect our environment for future generations.", exampleTranslation: "Debemos reciclar papel, plástico y vidrio para proteger nuestro medio ambiente para las generaciones futuras." },
      { id: "env7", spanish: "Contaminación", english: "Pollution", difficulty: "medium", example: "Air pollution is a serious problem in many large cities around the world unfortunately.", exampleTranslation: "La contaminación del aire es un problema serio en muchas ciudades grandes alrededor del mundo desafortunadamente." },
      { id: "env8", spanish: "Cambio climático", english: "Climate change", difficulty: "medium", example: "Climate change is affecting weather patterns globally causing extreme conditions everywhere increasingly dramatically.", exampleTranslation: "El cambio climático está afectando los patrones climáticos globalmente causando condiciones extremas en todas partes cada vez más dramáticamente." },
      { id: "env9", spanish: "Energía renovable", english: "Renewable energy", difficulty: "medium", example: "We should invest more in renewable energy sources like solar and wind power sustainably.", exampleTranslation: "Deberíamos invertir más en fuentes de energía renovable como la solar y eólica sosteniblemente." },
      { id: "env10", spanish: "Especies en peligro", english: "Endangered species", difficulty: "medium", example: "Many endangered species need our protection to survive and avoid extinction completely urgently.", exampleTranslation: "Muchas especies en peligro necesitan nuestra protección para sobrevivir y evitar la extinción completamente urgentemente." },
      { id: "env11", spanish: "Deforestación", english: "Deforestation", difficulty: "medium", example: "Deforestation is destroying natural habitats and contributing to climate change rapidly dangerously worldwide.", exampleTranslation: "La deforestación está destruyendo hábitats naturales y contribuyendo al cambio climático rápidamente peligrosamente mundialmente." },
      { id: "env12", spanish: "Sostenible", english: "Sustainable", difficulty: "medium", example: "We need sustainable solutions to protect our planet for the next generations responsibly carefully.", exampleTranslation: "Necesitamos soluciones sostenibles para proteger nuestro planeta para las próximas generaciones responsablemente cuidadosamente." },
      { id: "env13", spanish: "Debemos proteger la naturaleza", english: "We must protect nature", difficulty: "hard", example: "We absolutely must protect nature! It's our responsibility for future generations to come!", exampleTranslation: "¡Absolutamente debemos proteger la naturaleza! ¡Es nuestra responsabilidad para las generaciones futuras por venir!" },
      { id: "env14", spanish: "El planeta está en peligro", english: "The planet is in danger", difficulty: "hard", example: "Our planet is in serious danger from climate change! We need to act now immediately!", exampleTranslation: "¡Nuestro planeta está en peligro serio por el cambio climático! ¡Necesitamos actuar ahora inmediatamente!" },
      { id: "env15", spanish: "Separo la basura", english: "I separate the trash", difficulty: "hard", example: "I always separate the trash into paper, plastic, and glass for proper recycling daily!", exampleTranslation: "¡Siempre separo la basura en papel, plástico y vidrio para el reciclaje adecuado diariamente!" }
    ]
  },

  emotions_feelings: {
    name: "Emociones y sentimientos",
    description: "Estados emocionales, sentimientos y expresiones del ánimo",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "emo1", spanish: "Feliz", english: "Happy", difficulty: "easy", example: "I am very happy with my life and everything I have right now.", exampleTranslation: "Estoy muy feliz con mi vida y todo lo que tengo ahora mismo." },
      { id: "emo2", spanish: "Triste", english: "Sad", difficulty: "easy", example: "She feels sad because her best friend moved away to another city.", exampleTranslation: "Ella se siente triste porque su mejor amiga se mudó a otra ciudad." },
      { id: "emo3", spanish: "Enojado", english: "Angry", difficulty: "easy", example: "He is angry because someone scratched his new car in the parking lot.", exampleTranslation: "Está enojado porque alguien rayó su auto nuevo en el estacionamiento." },
      { id: "emo4", spanish: "Cansado", english: "Tired", difficulty: "easy", example: "I am very tired after working twelve hours today without any breaks.", exampleTranslation: "Estoy muy cansado después de trabajar doce horas hoy sin ningún descanso." },
      { id: "emo5", spanish: "Nervioso", english: "Nervous", difficulty: "easy", example: "I feel nervous before the important job interview tomorrow morning early.", exampleTranslation: "Me siento nervioso antes de la entrevista de trabajo importante mañana por la mañana temprano." },
      { id: "emo6", spanish: "Emocionado", english: "Excited", difficulty: "easy", example: "The children are excited about going to the amusement park this weekend together.", exampleTranslation: "Los niños están emocionados por ir al parque de diversiones este fin de semana juntos." },
      { id: "emo7", spanish: "Asustado", english: "Scared", difficulty: "medium", example: "She was scared when she heard strange noises outside late at night alone.", exampleTranslation: "Ella estaba asustada cuando escuchó ruidos extraños afuera tarde en la noche sola." },
      { id: "emo8", spanish: "Orgulloso", english: "Proud", difficulty: "medium", example: "I am very proud of my daughter's achievements in school this year so far!", exampleTranslation: "¡Estoy muy orgulloso de los logros de mi hija en la escuela este año hasta ahora!" },
      { id: "emo9", spanish: "Decepcionado", english: "Disappointed", difficulty: "medium", example: "I am disappointed with the results of the exam because I studied very hard.", exampleTranslation: "Estoy decepcionado con los resultados del examen porque estudié muy duro." },
      { id: "emo10", spanish: "Sorprendido", english: "Surprised", difficulty: "medium", example: "I was pleasantly surprised by the unexpected gift from my friends yesterday evening!", exampleTranslation: "¡Estuve gratamente sorprendido por el regalo inesperado de mis amigos ayer por la noche!" },
      { id: "emo11", spanish: "Frustrado", english: "Frustrated", difficulty: "medium", example: "I feel frustrated because I can't solve this difficult problem no matter how hard I try!", exampleTranslation: "¡Me siento frustrado porque no puedo resolver este problema difícil no importa cuánto lo intente!" },
      { id: "emo12", spanish: "Relajado", english: "Relaxed", difficulty: "medium", example: "I feel relaxed after the wonderful vacation by the beach for two weeks long peacefully.", exampleTranslation: "Me siento relajado después de las vacaciones maravillosas junto a la playa por dos semanas largas pacíficamente." },
      { id: "emo13", spanish: "Me siento genial", english: "I feel great", difficulty: "hard", example: "I feel absolutely great today! I have so much energy and such a good mood!", exampleTranslation: "¡Me siento absolutamente genial hoy! ¡Tengo tanta energía y tan buen ánimo!" },
      { id: "emo14", spanish: "Estoy agotado", english: "I am exhausted", difficulty: "hard", example: "I am completely exhausted after this long week of hard work without proper rest!", exampleTranslation: "¡Estoy completamente agotado después de esta larga semana de trabajo duro sin descanso apropiado!" },
      { id: "emo15", spanish: "No puedo más", english: "I can't take it anymore", difficulty: "hard", example: "I can't take this stress anymore! I need a break from everything right now!", exampleTranslation: "¡No puedo más con este estrés! ¡Necesito un descanso de todo ahora mismo!" }
    ]
  },

  sports_fitness: {
    name: "Deportes y ejercicio",
    description: "Actividades deportivas, gimnasio y vida activa",
    icon: Dumbbell,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { id: "sport1", spanish: "Fútbol", english: "Soccer", difficulty: "easy", example: "Soccer is the most popular sport in Spain and Latin America worldwide.", exampleTranslation: "El fútbol es el deporte más popular en España y América Latina mundialmente." },
      { id: "sport2", spanish: "Correr", english: "Run", difficulty: "easy", example: "I go running every morning in the park for thirty minutes before breakfast.", exampleTranslation: "Voy a correr cada mañana en el parque por treinta minutos antes del desayuno." },
      { id: "sport3", spanish: "Nadar", english: "Swim", difficulty: "easy", example: "Swimming is excellent exercise that works all the muscles in your body.", exampleTranslation: "Nadar es un ejercicio excelente que trabaja todos los músculos de tu cuerpo." },
      { id: "sport4", spanish: "Gimnasio", english: "Gym", difficulty: "easy", example: "I go to the gym three times a week to stay healthy and fit.", exampleTranslation: "Voy al gimnasio tres veces por semana para mantenerme saludable y en forma." },
      { id: "sport5", spanish: "Entrenador", english: "Coach", difficulty: "easy", example: "My coach is very experienced and helps me improve my technique every session.", exampleTranslation: "Mi entrenador es muy experimentado y me ayuda a mejorar mi técnica cada sesión." },
      { id: "sport6", spanish: "Partido", english: "Match", difficulty: "easy", example: "The soccer match starts at eight o'clock tonight at the main stadium downtown.", exampleTranslation: "El partido de fútbol comienza a las ocho en punto esta noche en el estadio principal del centro." },
      { id: "sport7", spanish: "Equipo", english: "Team", difficulty: "medium", example: "Our team won the championship after training very hard all season long together!", exampleTranslation: "¡Nuestro equipo ganó el campeonato después de entrenar muy duro toda la temporada larga juntos!" },
      { id: "sport8", spanish: "Entrenamiento", english: "Training", difficulty: "medium", example: "Training is tough but necessary to improve performance and achieve our goals successfully.", exampleTranslation: "El entrenamiento es duro pero necesario para mejorar el rendimiento y lograr nuestros objetivos exitosamente." },
      { id: "sport9", spanish: "Competencia", english: "Competition", difficulty: "medium", example: "The swimming competition takes place next Saturday at the Olympic pool in the morning.", exampleTranslation: "La competencia de natación tiene lugar el próximo sábado en la piscina olímpica por la mañana." },
      { id: "sport10", spanish: "Lesión", english: "Injury", difficulty: "medium", example: "He suffered a knee injury during the game and needs several weeks of rest.", exampleTranslation: "Sufrió una lesión en la rodilla durante el partido y necesita varias semanas de descanso." },
      { id: "sport11", spanish: "Calentamiento", english: "Warm-up", difficulty: "medium", example: "Always do a proper warm-up before exercising to prevent injuries and muscle strain effectively.", exampleTranslation: "Siempre haz un calentamiento apropiado antes de ejercitarte para prevenir lesiones y tensión muscular efectivamente." },
      { id: "sport12", spanish: "Victoria", english: "Victory", difficulty: "medium", example: "The victory was well-deserved after months of hard training and dedication from everyone!", exampleTranslation: "¡La victoria fue bien merecida después de meses de entrenamiento duro y dedicación de todos!" },
      { id: "sport13", spanish: "Juego al baloncesto", english: "I play basketball", difficulty: "hard", example: "I have been playing basketball for ten years! It's my favorite sport and passion!", exampleTranslation: "¡Juego al baloncesto desde hace diez años! ¡Es mi deporte favorito y pasión!" },
      { id: "sport14", spanish: "¿Quién ganó?", english: "Who won?", difficulty: "hard", example: "Who won the game yesterday? I couldn't watch it unfortunately because I was working!", exampleTranslation: "¿Quién ganó el partido ayer? ¡Desafortunadamente no pude verlo porque estaba trabajando!" },
      { id: "sport15", spanish: "Hago ejercicio diario", english: "I exercise daily", difficulty: "hard", example: "I exercise daily for at least one hour! It helps me stay healthy and energetic!", exampleTranslation: "¡Hago ejercicio diario por al menos una hora! ¡Me ayuda a mantenerme saludable y enérgico!" }
    ]
  },

  technology_digital: {
    name: "Tecnología y mundo digital",
    description: "Dispositivos, internet y la era digital moderna",
    icon: Monitor,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "tech1", spanish: "Computadora", english: "Computer", difficulty: "easy", example: "I work on my computer all day creating documents and presentations for clients.", exampleTranslation: "Trabajo en mi computadora todo el día creando documentos y presentaciones para clientes." },
      { id: "tech2", spanish: "Internet", english: "Internet", difficulty: "easy", example: "The internet is not working today, so I cannot send my emails right now.", exampleTranslation: "El internet no está funcionando hoy, así que no puedo enviar mis correos ahora mismo." },
      { id: "tech3", spanish: "Teléfono", english: "Phone", difficulty: "easy", example: "My phone battery died, can I use your charger to charge it please?", exampleTranslation: "La batería de mi teléfono se murió, ¿puedo usar tu cargador para cargarlo por favor?" },
      { id: "tech4", spanish: "Aplicación", english: "App", difficulty: "easy", example: "This app is very useful for learning new languages on your smartphone daily.", exampleTranslation: "Esta aplicación es muy útil para aprender nuevos idiomas en tu teléfono inteligente diariamente." },
      { id: "tech5", spanish: "Contraseña", english: "Password", difficulty: "easy", example: "Please create a strong password with letters, numbers, and symbols mixed together securely.", exampleTranslation: "Por favor crea una contraseña fuerte con letras, números y símbolos mezclados juntos de forma segura." },
      { id: "tech6", spanish: "Correo electrónico", english: "Email", difficulty: "easy", example: "I send and receive many emails every day for work and personal communication.", exampleTranslation: "Envío y recibo muchos correos electrónicos cada día para trabajo y comunicación personal." },
      { id: "tech7", spanish: "Descargar", english: "Download", difficulty: "medium", example: "You can download the app for free from the official website or app store.", exampleTranslation: "Puedes descargar la aplicación gratis desde el sitio web oficial o tienda de aplicaciones." },
      { id: "tech8", spanish: "Navegar", english: "Browse", difficulty: "medium", example: "I like to browse the internet for interesting articles and news in the evening.", exampleTranslation: "Me gusta navegar por internet para artículos interesantes y noticias por la noche." },
      { id: "tech9", spanish: "Red social", english: "Social network", difficulty: "medium", example: "Social networks have changed how we communicate with friends and family worldwide completely.", exampleTranslation: "Las redes sociales han cambiado cómo nos comunicamos con amigos y familia mundialmente completamente." },
      { id: "tech10", spanish: "Actualización", english: "Update", difficulty: "medium", example: "The software update will take about twenty minutes, please don't turn off the computer!", exampleTranslation: "La actualización del software tomará unos veinte minutos, ¡por favor no apagues la computadora!" },
      { id: "tech11", spanish: "Virus", english: "Virus", difficulty: "medium", example: "My computer got infected with a virus! I need antivirus software to clean it immediately!", exampleTranslation: "¡Mi computadora se infectó con un virus! ¡Necesito software antivirus para limpiarlo inmediatamente!" },
      { id: "tech12", spanish: "Almacenamiento", english: "Storage", difficulty: "medium", example: "I need more storage space on my phone because it's almost completely full now.", exampleTranslation: "Necesito más espacio de almacenamiento en mi teléfono porque está casi completamente lleno ahora." },
      { id: "tech13", spanish: "No funciona el WiFi", english: "The WiFi doesn't work", difficulty: "hard", example: "The WiFi doesn't work in my room! Can you help me fix this problem quickly?", exampleTranslation: "¡El WiFi no funciona en mi habitación! ¿Puede ayudarme a arreglar este problema rápidamente?" },
      { id: "tech14", spanish: "Olvidé mi contraseña", english: "I forgot my password", difficulty: "hard", example: "I forgot my password! How can I reset it to access my account again?", exampleTranslation: "¡Olvidé mi contraseña! ¿Cómo puedo restablecerla para acceder a mi cuenta de nuevo?" },
      { id: "tech15", spanish: "Se me cayó el teléfono", english: "I dropped my phone", difficulty: "hard", example: "I dropped my phone on the floor! I hope the screen didn't crack or break!", exampleTranslation: "¡Se me cayó el teléfono en el piso! ¡Espero que la pantalla no se haya agrietado o roto!" }
    ]
  },

  hobbies_leisure: {
    name: "Pasatiempos y ocio",
    description: "Actividades recreativas, aficiones y tiempo libre",
    icon: Palette,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "hob1", spanish: "Pasatiempo", english: "Hobby", difficulty: "easy", example: "My favorite hobby is photography and I take pictures everywhere I go daily.", exampleTranslation: "Mi pasatiempo favorito es la fotografía y tomo fotos donde quiera que vaya diariamente." },
      { id: "hob2", spanish: "Leer", english: "Read", difficulty: "easy", example: "I love to read books before going to sleep every night peacefully relaxing.", exampleTranslation: "Me encanta leer libros antes de ir a dormir cada noche pacíficamente relajándome." },
      { id: "hob3", spanish: "Pintar", english: "Paint", difficulty: "easy", example: "She likes to paint beautiful landscapes in her free time on weekends creatively.", exampleTranslation: "A ella le gusta pintar paisajes hermosos en su tiempo libre los fines de semana creativamente." },
      { id: "hob4", spanish: "Coleccionar", english: "Collect", difficulty: "easy", example: "I collect old coins from different countries around the world as a hobby.", exampleTranslation: "Colecciono monedas viejas de diferentes países alrededor del mundo como pasatiempo." },
      { id: "hob5", spanish: "Jardinería", english: "Gardening", difficulty: "easy", example: "Gardening is relaxing and I enjoy growing vegetables in my backyard garden daily.", exampleTranslation: "La jardinería es relajante y disfruto cultivar verduras en mi jardín del patio trasero diariamente." },
      { id: "hob6", spanish: "Fotografía", english: "Photography", difficulty: "easy", example: "Photography is my passion and I take my camera everywhere with me always.", exampleTranslation: "La fotografía es mi pasión y llevo mi cámara a todas partes conmigo siempre." },
      { id: "hob7", spanish: "Coser", english: "Sew", difficulty: "medium", example: "My grandmother taught me how to sew and make my own clothes by hand.", exampleTranslation: "Mi abuela me enseñó cómo coser y hacer mi propia ropa a mano." },
      { id: "hob8", spanish: "Tejer", english: "Knit", difficulty: "medium", example: "She likes to knit warm scarves and sweaters during the cold winter months cozily.", exampleTranslation: "A ella le gusta tejer bufandas cálidas y suéteres durante los fríos meses de invierno acogedoramente." },
      { id: "hob9", spanish: "Artesanía", english: "Crafts", difficulty: "medium", example: "Making crafts requires patience, creativity, and attention to detail for beautiful results always.", exampleTranslation: "Hacer artesanía requiere paciencia, creatividad y atención al detalle para resultados hermosos siempre." },
      { id: "hob10", spanish: "Rompecabezas", english: "Puzzle", difficulty: "medium", example: "This puzzle has two thousand pieces and is very challenging to complete alone!", exampleTranslation: "¡Este rompecabezas tiene dos mil piezas y es muy desafiante completarlo solo!" },
      { id: "hob11", spanish: "Modelismo", english: "Model building", difficulty: "medium", example: "Model building requires precision and patience to create detailed miniature replicas perfectly accurately.", exampleTranslation: "El modelismo requiere precisión y paciencia para crear réplicas en miniatura detalladas perfectamente con precisión." },
      { id: "hob12", spanish: "Dibujar", english: "Draw", difficulty: "medium", example: "I like to draw portraits of people using pencils and charcoal artistically carefully.", exampleTranslation: "Me gusta dibujar retratos de personas usando lápices y carboncillo artísticamente cuidadosamente." },
      { id: "hob13", spanish: "Me encanta pintar", english: "I love to paint", difficulty: "hard", example: "I absolutely love to paint! I could spend hours creating art in my studio!", exampleTranslation: "¡Me encanta absolutamente pintar! ¡Podría pasar horas creando arte en mi estudio!" },
      { id: "hob14", spanish: "Es mi pasión", english: "It's my passion", difficulty: "hard", example: "Photography is truly my passion! I take pictures of everything beautiful I see daily!", exampleTranslation: "¡La fotografía es verdaderamente mi pasión! ¡Tomo fotos de todo lo hermoso que veo diariamente!" },
      { id: "hob15", spanish: "Dedico mucho tiempo a...", english: "I spend a lot of time on...", difficulty: "hard", example: "I spend a lot of time on my hobbies! They help me relax after work!", exampleTranslation: "¡Dedico mucho tiempo a mis pasatiempos! ¡Me ayudan a relajarme después del trabajo!" }
    ]
  },

  seasons_weather: {
    name: "Estaciones y clima",
    description: "Las cuatro estaciones del año y fenómenos meteorológicos",
    icon: Cloud,
    color: "from-sky-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "seas1", spanish: "Primavera", english: "Spring", difficulty: "easy", example: "Spring is my favorite season when flowers bloom and weather gets warmer beautifully.", exampleTranslation: "La primavera es mi estación favorita cuando las flores florecen y el clima se vuelve más cálido hermosamente." },
      { id: "seas2", spanish: "Verano", english: "Summer", difficulty: "easy", example: "Summer is very hot here, so we go to the beach often to cool down.", exampleTranslation: "El verano es muy caluroso aquí, así que vamos a la playa a menudo para refrescarnos." },
      { id: "seas3", spanish: "Otoño", english: "Fall", difficulty: "easy", example: "In fall, the leaves change beautiful colors before falling from the trees slowly.", exampleTranslation: "En otoño, las hojas cambian colores hermosos antes de caer de los árboles lentamente." },
      { id: "seas4", spanish: "Invierno", english: "Winter", difficulty: "easy", example: "Winter is cold and we need warm clothes and heating at home always.", exampleTranslation: "El invierno es frío y necesitamos ropa abrigada y calefacción en casa siempre." },
      { id: "seas5", spanish: "Lluvia", english: "Rain", difficulty: "easy", example: "Don't forget your umbrella because it's going to rain heavily this afternoon later.", exampleTranslation: "No olvides tu paraguas porque va a llover fuertemente esta tarde más tarde." },
      { id: "seas6", spanish: "Nieve", english: "Snow", difficulty: "easy", example: "It snowed all night and everything is covered in white snow this morning.", exampleTranslation: "Nevó toda la noche y todo está cubierto de nieve blanca esta mañana." },
      { id: "seas7", spanish: "Tormenta", english: "Storm", difficulty: "medium", example: "There is a big storm coming tonight with strong winds and heavy rain predicted.", exampleTranslation: "Viene una tormenta grande esta noche con vientos fuertes y lluvia intensa predicha." },
      { id: "seas8", spanish: "Pronóstico", english: "Forecast", difficulty: "medium", example: "The weather forecast says it will be sunny and warm all week long fortunately.", exampleTranslation: "El pronóstico del tiempo dice que estará soleado y cálido toda la semana larga afortunadamente." },
      { id: "seas9", spanish: "Relámpago", english: "Lightning", difficulty: "medium", example: "The lightning during the storm was very bright and scary illuminating the dark sky dramatically.", exampleTranslation: "El relámpago durante la tormenta fue muy brillante y aterrador iluminando el cielo oscuro dramáticamente." },
      { id: "seas10", spanish: "Trueno", english: "Thunder", difficulty: "medium", example: "The thunder was so loud that it woke up everyone in the house suddenly.", exampleTranslation: "El trueno fue tan fuerte que despertó a todos en la casa repentinamente." },
      { id: "seas11", spanish: "Sequía", english: "Drought", difficulty: "medium", example: "The region is suffering from a severe drought this year with very little rainfall unfortunately.", exampleTranslation: "La región está sufriendo de una sequía severa este año con muy poca lluvia desafortunadamente." },
      { id: "seas12", spanish: "Inundación", english: "Flood", difficulty: "medium", example: "Heavy rain caused serious flooding in many areas of the city yesterday dangerously severely.", exampleTranslation: "La lluvia intensa causó inundaciones serias en muchas áreas de la ciudad ayer peligrosamente severamente." },
      { id: "seas13", spanish: "Hace buen tiempo", english: "The weather is nice", difficulty: "hard", example: "The weather is really nice today! Perfect for going to the park and relaxing!", exampleTranslation: "¡Hace muy buen tiempo hoy! ¡Perfecto para ir al parque y relajarse!" },
      { id: "seas14", spanish: "Va a llover", english: "It's going to rain", difficulty: "hard", example: "It's going to rain soon! Take an umbrella with you just in case!", exampleTranslation: "¡Va a llover pronto! ¡Lleva un paraguas contigo por si acaso!" },
      { id: "seas15", spanish: "¿Qué temperatura hace?", english: "What's the temperature?", difficulty: "hard", example: "What's the temperature outside right now? Should I wear a jacket or not today?", exampleTranslation: "¿Qué temperatura hace afuera ahora mismo? ¿Debería usar una chaqueta o no hoy?" }
    ]
  },

  celebrations_parties: {
    name: "Celebraciones y fiestas",
    description: "Eventos festivos, reuniones sociales y ocasiones especiales",
    icon: Gift,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cel1", spanish: "Fiesta", english: "Party", difficulty: "easy", example: "We are having a party this Saturday to celebrate my birthday with friends.", exampleTranslation: "Vamos a tener una fiesta este sábado para celebrar mi cumpleaños con amigos." },
      { id: "cel2", spanish: "Cumpleaños", english: "Birthday", difficulty: "easy", example: "Happy birthday! I hope you have a wonderful day with your family today!", exampleTranslation: "¡Feliz cumpleaños! ¡Espero que tengas un día maravilloso con tu familia hoy!" },
      { id: "cel3", spanish: "Regalo", english: "Gift", difficulty: "easy", example: "I bought a nice gift for my mother's birthday wrapped beautifully with ribbon.", exampleTranslation: "Compré un regalo bonito para el cumpleaños de mi madre envuelto hermosamente con cinta." },
      { id: "cel4", spanish: "Invitados", english: "Guests", difficulty: "easy", example: "We are expecting twenty guests at the party tomorrow evening for dinner.", exampleTranslation: "Esperamos veinte invitados en la fiesta mañana por la noche para la cena." },
      { id: "cel5", spanish: "Decoración", english: "Decoration", difficulty: "easy", example: "The decorations for the party are beautiful with colorful balloons and streamers everywhere.", exampleTranslation: "Las decoraciones para la fiesta son hermosas con globos coloridos y serpentinas por todas partes." },
      { id: "cel6", spanish: "Pastel", english: "Cake", difficulty: "easy", example: "The birthday cake is chocolate with strawberries and cream on top delicious looking.", exampleTranslation: "El pastel de cumpleaños es de chocolate con fresas y crema encima de aspecto delicioso." },
      { id: "cel7", spanish: "Brindis", english: "Toast", difficulty: "medium", example: "Let's make a toast to the happy couple on their wedding day today!", exampleTranslation: "¡Hagamos un brindis por la pareja feliz en su día de boda hoy!" },
      { id: "cel8", spanish: "Boda", english: "Wedding", difficulty: "medium", example: "The wedding ceremony will take place in the beautiful church next Saturday morning elegantly.", exampleTranslation: "La ceremonia de boda tendrá lugar en la iglesia hermosa el próximo sábado por la mañana elegantemente." },
      { id: "cel9", spanish: "Aniversario", english: "Anniversary", difficulty: "medium", example: "We are celebrating our tenth wedding anniversary with a romantic dinner tonight together!", exampleTranslation: "¡Estamos celebrando nuestro décimo aniversario de bodas con una cena romántica esta noche juntos!" },
      { id: "cel10", spanish: "Graduación", english: "Graduation", difficulty: "medium", example: "His graduation from university is next month and his family is very proud of him!", exampleTranslation: "¡Su graduación de la universidad es el próximo mes y su familia está muy orgullosa de él!" },
      { id: "cel11", spanish: "Año Nuevo", english: "New Year", difficulty: "medium", example: "We always celebrate New Year with fireworks and champagne at midnight exactly together happily!", exampleTranslation: "¡Siempre celebramos el Año Nuevo con fuegos artificiales y champán a medianoche exactamente juntos felizmente!" },
      { id: "cel12", spanish: "Baile", english: "Dance", difficulty: "medium", example: "There will be music and dancing at the party all night long until dawn tomorrow!", exampleTranslation: "¡Habrá música y baile en la fiesta toda la noche hasta el amanecer mañana!" },
      { id: "cel13", spanish: "¡Felicidades!", english: "Congratulations!", difficulty: "hard", example: "Congratulations on your promotion! You really deserve this success after hard work!", exampleTranslation: "¡Felicidades por tu ascenso! ¡Realmente mereces este éxito después del trabajo duro!" },
      { id: "cel14", spanish: "Lo pasamos muy bien", english: "We had a great time", difficulty: "hard", example: "We had such a great time at the party yesterday! It was absolutely fantastic fun!", exampleTranslation: "¡Lo pasamos muy bien en la fiesta ayer! ¡Fue absolutamente fantástico y divertido!" },
      { id: "cel15", spanish: "Gracias por venir", english: "Thanks for coming", difficulty: "hard", example: "Thank you so much for coming to my party! It means a lot to me truly!", exampleTranslation: "¡Muchas gracias por venir a mi fiesta! ¡Significa mucho para mí verdaderamente!" }
    ]
  }
};
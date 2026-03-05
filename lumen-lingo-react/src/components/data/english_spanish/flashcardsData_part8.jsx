
/**
 * ENGLISH → SPANISH FLASHCARDS - PART 8
 * 
 * Native Language: English
 * Target Language: Spanish (Español)
 * 
 * This file contains flashcard categories (101-115).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Home,
  Banknote,
  AlertTriangle,
  Cloud,
  Watch,
  Ruler,
  Box,
  PartyPopper,
  Armchair,
  Sun,
  UtensilsCrossed,
  Layers,
  Building2,
  FileText,
  MapPin
} from "lucide-react";

export const flashcardsCategories_part8 = {
  apartment_housing: {
    name: "Apartment & Housing",
    description: "Renting and living spaces",
    icon: Home,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "apt1", english: "Apartment", spanish: "Apartamento", difficulty: "easy", example: "I live in a cozy apartment on the third floor with a balcony", exampleTranslation: "Vivo en un apartamento acogedor en el tercer piso con balcón" },
      { id: "apt2", english: "Rent", spanish: "Alquiler", difficulty: "easy", example: "The rent for this apartment is due on the first day of each month", exampleTranslation: "El alquiler de este apartamento vence el primer día de cada mes" },
      { id: "apt3", english: "Landlord", spanish: "Casero", difficulty: "easy", example: "My landlord is very understanding and always fixes problems quickly", exampleTranslation: "Mi casero es muy comprensivo y siempre arregla los problemas rápidamente" },
      { id: "apt4", english: "Tenant", spanish: "Inquilino", difficulty: "easy", example: "As a tenant, I'm responsible for keeping the apartment clean and tidy", exampleTranslation: "Como inquilino, soy responsable de mantener el apartamento limpio y ordenado" },
      { id: "apt5", english: "Lease", spanish: "Contrato de arrendamiento", difficulty: "easy", example: "We signed a one-year lease for the apartment downtown", exampleTranslation: "Firmamos un contrato de arrendamiento de un año para el apartamento del centro" },
      { id: "apt6", english: "Deposit", spanish: "Depósito", difficulty: "easy", example: "The security deposit will be returned when you move out if there's no damage", exampleTranslation: "El depósito de seguridad será devuelto cuando te mudes si no hay daños" },
      { id: "apt7", english: "Utilities", spanish: "Servicios públicos", difficulty: "medium", example: "The monthly utilities including water, electricity, and gas cost about two hundred dollars", exampleTranslation: "Los servicios públicos mensuales incluyendo agua, electricidad y gas cuestan unos doscientos dólares" },
      { id: "apt8", english: "Furnished", spanish: "Amueblado", difficulty: "medium", example: "This furnished apartment comes with all the furniture and appliances you need", exampleTranslation: "Este apartamento amueblado viene con todos los muebles y electrodomésticos que necesitas" },
      { id: "apt9", english: "Studio", spanish: "Estudio", difficulty: "medium", example: "She lives in a small studio apartment that's perfect for one person", exampleTranslation: "Ella vive en un pequeño apartamento estudio que es perfecto para una sola persona" },
      { id: "apt10", english: "Maintenance", spanish: "Mantenimiento", difficulty: "medium", example: "The building has excellent maintenance service available twenty-four hours a day", exampleTranslation: "El edificio tiene un excelente servicio de mantenimiento disponible las veinticuatro horas del día" },
      { id: "apt11", english: "Roommate", spanish: "Compañero de piso", difficulty: "medium", example: "I'm looking for a friendly roommate to share the rent and expenses", exampleTranslation: "Busco un compañero de piso amigable para compartir el alquiler y los gastos" },
      { id: "apt12", english: "Eviction", spanish: "Desalojo", difficulty: "medium", example: "If you don't pay rent for three months, you may face eviction", exampleTranslation: "Si no pagas el alquiler durante tres meses, puedes enfrentar el desalojo" },
      { id: "apt13", english: "I'm looking for an apartment", spanish: "Estoy buscando un apartamento", difficulty: "hard", example: "I'm looking for a two-bedroom apartment near the subway station with parking", exampleTranslation: "Estoy buscando un apartamento de dos habitaciones cerca de la estación de metro con estacionamiento" },
      { id: "apt14", english: "The lease expires next month", spanish: "El contrato vence el próximo mes", difficulty: "hard", example: "The lease expires next month, so I need to decide whether to renew or move", exampleTranslation: "El contrato vence el próximo mes, así que necesito decidir si renovar o mudarme" },
      { id: "apt15", english: "Utilities are included", spanish: "Los servicios están incluidos", difficulty: "hard", example: "The best part is that all utilities are included in the monthly rent price", exampleTranslation: "Lo mejor es que todos los servicios están incluidos en el precio mensual del alquiler" }
    ]
  },

  banking_finance: {
    name: "Banking & Finance",
    description: "Money and financial transactions",
    icon: Banknote,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    words: [
      { id: "bank1", english: "Bank", spanish: "Banco", difficulty: "easy", example: "I need to go to the bank this afternoon to deposit my paycheck", exampleTranslation: "Necesito ir al banco esta tarde para depositar mi cheque de pago" },
      { id: "bank2", english: "Account", spanish: "Cuenta", difficulty: "easy", example: "I opened a savings account at the bank to save money for vacation", exampleTranslation: "Abrí una cuenta de ahorros en el banco para ahorrar dinero para las vacaciones" },
      { id: "bank3", english: "Cash", spanish: "Efectivo", difficulty: "easy", example: "I prefer to pay with cash instead of using my credit card", exampleTranslation: "Prefiero pagar con efectivo en lugar de usar mi tarjeta de crédito" },
      { id: "bank4", english: "Withdraw", spanish: "Retirar", difficulty: "easy", example: "I need to withdraw some money from the ATM before shopping", exampleTranslation: "Necesito retirar algo de dinero del cajero automático antes de ir de compras" },
      { id: "bank5", english: "Deposit", spanish: "Depositar", difficulty: "easy", example: "Please deposit the check into my checking account as soon as possible", exampleTranslation: "Por favor deposita el cheque en mi cuenta corriente lo antes posible" },
      { id: "bank6", english: "Balance", spanish: "Saldo", difficulty: "easy", example: "I check my account balance every week to track my spending", exampleTranslation: "Reviso el saldo de mi cuenta cada semana para controlar mis gastos" },
      { id: "bank7", english: "Transfer", spanish: "Transferencia", difficulty: "medium", example: "I made an online transfer to pay the rent to my landlord's account", exampleTranslation: "Hice una transferencia en línea para pagar el alquiler a la cuenta de mi casero" },
      { id: "bank8", english: "Interest", spanish: "Interés", difficulty: "medium", example: "This savings account offers three percent interest per year on your deposits", exampleTranslation: "Esta cuenta de ahorros ofrece tres por ciento de interés anual sobre tus depósitos" },
      { id: "bank9", english: "Loan", spanish: "Préstamo", difficulty: "medium", example: "We applied for a mortgage loan to buy our first house", exampleTranslation: "Solicitamos un préstamo hipotecario para comprar nuestra primera casa" },
      { id: "bank10", english: "Credit", spanish: "Crédito", difficulty: "medium", example: "Building good credit is important for your financial future and opportunities", exampleTranslation: "Construir un buen crédito es importante para tu futuro financiero y oportunidades" },
      { id: "bank11", english: "Statement", spanish: "Estado de cuenta", difficulty: "medium", example: "I receive my bank statement by email at the end of every month", exampleTranslation: "Recibo mi estado de cuenta bancaria por correo electrónico al final de cada mes" },
      { id: "bank12", english: "Fee", spanish: "Comisión", difficulty: "medium", example: "The bank charges a monthly maintenance fee of ten dollars for this account", exampleTranslation: "El banco cobra una comisión mensual de mantenimiento de diez dólares por esta cuenta" },
      { id: "bank13", english: "I'd like to open an account", spanish: "Me gustaría abrir una cuenta", difficulty: "hard", example: "I'd like to open a checking account with online banking access please", exampleTranslation: "Me gustaría abrir una cuenta corriente con acceso a banca en línea por favor" },
      { id: "bank14", english: "What's the exchange rate?", spanish: "¿Cuál es el tipo de cambio?", difficulty: "hard", example: "What's the current exchange rate for converting dollars to euros today?", exampleTranslation: "¿Cuál es el tipo de cambio actual para convertir dólares a euros hoy?" },
      { id: "bank15", english: "My card was declined", spanish: "Mi tarjeta fue rechazada", difficulty: "hard", example: "My card was declined at the store, can you check if there's a problem with my account?", exampleTranslation: "Mi tarjeta fue rechazada en la tienda, ¿puedes verificar si hay un problema con mi cuenta?" }
    ]
  },

  emergencies_safety: {
    name: "Emergencies & Safety",
    description: "Emergency situations and safety",
    icon: AlertTriangle,
    color: "from-red-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "emerg1", english: "Emergency", spanish: "Emergencia", difficulty: "easy", example: "Call nine-one-one immediately if there's a medical emergency", exampleTranslation: "Llama al nueve-uno-uno inmediatamente si hay una emergencia médica" },
      { id: "emerg2", english: "Help", spanish: "Ayuda", difficulty: "easy", example: "I need help carrying these heavy boxes up the stairs", exampleTranslation: "Necesito ayuda para subir estas cajas pesadas por las escaleras" },
      { id: "emerg3", english: "Fire", spanish: "Incendio", difficulty: "easy", example: "The fire alarm went off and everyone evacuated the building quickly", exampleTranslation: "La alarma de incendio sonó y todos evacuaron el edificio rápidamente" },
      { id: "emerg4", english: "Police", spanish: "Policía", difficulty: "easy", example: "I called the police to report a suspicious person in the neighborhood", exampleTranslation: "Llamé a la policía para reportar una persona sospechosa en el vecindario" },
      { id: "emerg5", english: "Ambulance", spanish: "Ambulancia", difficulty: "easy", example: "An ambulance arrived within five minutes to take him to the hospital", exampleTranslation: "Una ambulancia llegó en cinco minutos para llevarlo al hospital" },
      { id: "emerg6", english: "Danger", spanish: "Peligro", difficulty: "easy", example: "There's a danger sign warning people not to enter the construction site", exampleTranslation: "Hay una señal de peligro advirtiendo a la gente que no entre al sitio de construcción" },
      { id: "emerg7", english: "Accident", spanish: "Accidente", difficulty: "medium", example: "There was a serious car accident on the highway this morning during rush hour", exampleTranslation: "Hubo un grave accidente automovilístico en la autopista esta mañana durante la hora pico" },
      { id: "emerg8", english: "Rescue", spanish: "Rescate", difficulty: "medium", example: "The firefighters performed a dramatic rescue of the family trapped on the roof", exampleTranslation: "Los bomberos realizaron un dramático rescate de la familia atrapada en el techo" },
      { id: "emerg9", english: "Evacuation", spanish: "Evacuación", difficulty: "medium", example: "The evacuation of the entire building took less than ten minutes", exampleTranslation: "La evacuación de todo el edificio tomó menos de diez minutos" },
      { id: "emerg10", english: "First aid", spanish: "Primeros auxilios", difficulty: "medium", example: "Everyone should learn basic first aid skills to help in emergencies", exampleTranslation: "Todos deberían aprender habilidades básicas de primeros auxilios para ayudar en emergencias" },
      { id: "emerg11", english: "Injury", spanish: "Lesión", difficulty: "medium", example: "He suffered a minor injury during the soccer game but continued playing", exampleTranslation: "Sufrió una lesión menor durante el partido de fútbol pero continuó jugando" },
      { id: "emerg12", english: "Alarm", spanish: "Alarma", difficulty: "medium", example: "The security alarm system alerts the police automatically if there's a break-in", exampleTranslation: "El sistema de alarma de seguridad alerta a la policía automáticamente si hay un robo" },
      { id: "emerg13", english: "Call for help!", spanish: "¡Pide ayuda!", difficulty: "hard", example: "If you see someone in trouble, call for help immediately and stay calm", exampleTranslation: "Si ves a alguien en problemas, pide ayuda inmediatamente y mantén la calma" },
      { id: "emerg14", english: "Is everyone safe?", spanish: "¿Todos están a salvo?", difficulty: "hard", example: "After the earthquake, the first question everyone asked was 'Is everyone safe?'", exampleTranslation: "Después del terremoto, la primera pregunta que todos hicieron fue '¿Todos están a salvo?'" },
      { id: "emerg15", english: "Where's the exit?", spanish: "¿Dónde está la salida?", difficulty: "hard", example: "In case of emergency, it's important to know where the nearest exit is located", exampleTranslation: "En caso de emergencia, es importante saber dónde está ubicada la salida más cercana" }
    ]
  },

  seasons_climate: {
    name: "Seasons & Climate",
    description: "Seasons and climate conditions",
    icon: Cloud,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "seas1", english: "Spring", spanish: "Primavera", difficulty: "easy", example: "Spring is my favorite season when all the flowers bloom beautifully", exampleTranslation: "La primavera es mi estación favorita cuando todas las flores florecen hermosamente" },
      { id: "seas2", english: "Summer", spanish: "Verano", difficulty: "easy", example: "During summer vacation, we always go to the beach for two weeks", exampleTranslation: "Durante las vacaciones de verano, siempre vamos a la playa por dos semanas" },
      { id: "seas3", english: "Autumn", spanish: "Otoño", difficulty: "easy", example: "In autumn, the leaves turn beautiful shades of red, orange, and yellow", exampleTranslation: "En otoño, las hojas se vuelven hermosos tonos de rojo, naranja y amarillo" },
      { id: "seas4", english: "Winter", spanish: "Invierno", difficulty: "easy", example: "Winter is very cold here with lots of snow and freezing temperatures", exampleTranslation: "El invierno es muy frío aquí con mucha nieve y temperaturas bajo cero" },
      { id: "seas5", english: "Climate", spanish: "Clima", difficulty: "easy", example: "The Mediterranean climate is perfect with mild winters and warm summers", exampleTranslation: "El clima mediterráneo es perfecto con inviernos suaves y veranos cálidos" },
      { id: "seas6", english: "Temperature", spanish: "Temperatura", difficulty: "easy", example: "The temperature today will reach thirty degrees celsius in the afternoon", exampleTranslation: "La temperatura hoy alcanzará los treinta grados celsius por la tarde" },
      { id: "seas7", english: "Frost", spanish: "Escarcha", difficulty: "medium", example: "There was frost on the car windows this morning because of the cold night", exampleTranslation: "Había escarcha en las ventanas del auto esta mañana debido a la noche fría" },
      { id: "seas8", english: "Harvest", spanish: "Cosecha", difficulty: "medium", example: "Farmers are busy during autumn with the harvest of wheat and corn", exampleTranslation: "Los agricultores están ocupados durante el otoño con la cosecha de trigo y maíz" },
      { id: "seas9", english: "Bloom", spanish: "Florecer", difficulty: "medium", example: "Cherry trees bloom in spring creating a spectacular pink landscape", exampleTranslation: "Los cerezos florecen en primavera creando un paisaje rosa espectacular" },
      { id: "seas10", english: "Humidity", spanish: "Humedad", difficulty: "medium", example: "The humidity in summer makes it feel much hotter than it actually is", exampleTranslation: "La humedad en verano hace que se sienta mucho más caliente de lo que realmente es" },
      { id: "seas11", english: "Equinox", spanish: "Equinoccio", difficulty: "medium", example: "During the autumn equinox, day and night are equal in length", exampleTranslation: "Durante el equinoccio de otoño, el día y la noche tienen la misma duración" },
      { id: "seas12", english: "Solstice", spanish: "Solsticio", difficulty: "medium", example: "The summer solstice is the longest day of the year in the northern hemisphere", exampleTranslation: "El solsticio de verano es el día más largo del año en el hemisferio norte" },
      { id: "seas13", english: "What's your favorite season?", spanish: "¿Cuál es tu estación favorita?", difficulty: "hard", example: "What's your favorite season and why do you prefer it over the others?", exampleTranslation: "¿Cuál es tu estación favorita y por qué la prefieres sobre las demás?" },
      { id: "seas14", english: "The climate is changing", spanish: "El clima está cambiando", difficulty: "hard", example: "Scientists warn that the climate is changing rapidly due to human activities", exampleTranslation: "Los científicos advierten que el clima está cambiando rápidamente debido a las actividades humanas" },
      { id: "seas15", english: "It's the perfect weather", spanish: "Es el clima perfecto", difficulty: "hard", example: "Con sunshine and a cool breeze, it's the perfect weather for a picnic", exampleTranslation: "Con sol y una brisa fresca, es el clima perfecto para un picnic" }
    ]
  },

  clothing_accessories: {
    name: "Clothing Accessories",
    description: "Fashion accessories and details",
    icon: Watch,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "acc1", english: "Belt", spanish: "Cinturón", difficulty: "easy", example: "I need a brown leather belt to match my new dress shoes", exampleTranslation: "Necesito un cinturón de cuero marrón para combinar con mis zapatos de vestir nuevos" },
      { id: "acc2", english: "Scarf", spanish: "Bufanda", difficulty: "easy", example: "She wears a colorful silk scarf around her neck in winter", exampleTranslation: "Ella usa una bufanda de seda colorida alrededor del cuello en invierno" },
      { id: "acc3", english: "Gloves", spanish: "Guantes", difficulty: "easy", example: "Don't forget to bring your warm gloves when going outside in the snow", exampleTranslation: "No olvides traer tus guantes cálidos cuando salgas afuera en la nieve" },
      { id: "acc4", english: "Hat", spanish: "Sombrero", difficulty: "easy", example: "He always wears a wide-brimmed hat to protect himself from the sun", exampleTranslation: "Él siempre usa un sombrero de ala ancha para protegerse del sol" },
      { id: "acc5", english: "Tie", spanish: "Corbata", difficulty: "easy", example: "My father taught me how to tie a necktie properly for job interviews", exampleTranslation: "Mi padre me enseñó cómo anudar una corbata correctamente para las entrevistas de trabajo" },
      { id: "acc6", english: "Sunglasses", spanish: "Gafas de sol", difficulty: "easy", example: "I can't drive without my sunglasses on bright sunny days", exampleTranslation: "No puedo conducir sin mis gafas de sol en días soleados brillantes" },
      { id: "acc7", english: "Jewelry", spanish: "Joyería", difficulty: "medium", example: "She loves to collect vintage jewelry from antique shops and flea markets", exampleTranslation: "A ella le encanta coleccionar joyería vintage de tiendas de antigüedades y mercados de pulgas" },
      { id: "acc8", english: "Wallet", spanish: "Cartera", difficulty: "medium", example: "I keep my credit cards, cash, and ID in my leather wallet", exampleTranslation: "Guardo mis tarjetas de crédito, efectivo e identificación en mi cartera de cuero" },
      { id: "acc9", english: "Purse", spanish: "Bolso", difficulty: "medium", example: "She bought a designer purse that matches her favorite outfit perfectly", exampleTranslation: "Ella compró un bolso de diseñador que combina perfectamente con su conjunto favorito" },
      { id: "acc10", english: "Watch", spanish: "Reloj", difficulty: "medium", example: "My grandfather gave me his gold watch as a family heirloom", exampleTranslation: "Mi abuelo me dio su reloj de oro como reliquia familiar" },
      { id: "acc11", english: "Earrings", spanish: "Aretes", difficulty: "medium", example: "For the wedding, she wore beautiful diamond earrings that sparkled in the light", exampleTranslation: "Para la boda, ella usó hermosos aretes de diamantes que brillaban con la luz" },
      { id: "acc12", english: "Backpack", spanish: "Mochila", difficulty: "medium", example: "Students carry heavy backpacks filled with textbooks to school every day", exampleTranslation: "Los estudiantes llevan mochilas pesadas llenas de libros de texto a la escuela todos los días" },
      { id: "acc13", english: "This matches my outfit", spanish: "Esto combina con mi conjunto", difficulty: "hard", example: "I love this blue scarf because it matches my outfit perfectly", exampleTranslation: "Me encanta esta bufanda azul porque combina perfectamente con mi conjunto" },
      { id: "acc14", english: "Do you have this in a different color?", spanish: "¿Tienes esto en otro color?", difficulty: "hard", example: "I really like this belt, but do you have this in a different color or brown?", exampleTranslation: "Me gusta mucho este cinturón, pero ¿tienes esto en otro color o marrón?" },
      { id: "acc15", english: "It's too tight", spanish: "Está demasiado apretado", difficulty: "hard", example: "This belt is too tight around my waist, do you have a larger size?", exampleTranslation: "Este cinturón está demasiado apretado alrededor de mi cintura, ¿tienes una talla más grande?" }
    ]
  },

  cooking_methods: {
    name: "Cooking Methods",
    description: "Ways to prepare food",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "cook1", english: "Boil", spanish: "Hervir", difficulty: "easy", example: "You need to boil the water before adding the pasta", exampleTranslation: "Necesitas hervir el agua antes de agregar la pasta" },
      { id: "cook2", english: "Fry", spanish: "Freír", difficulty: "easy", example: "I like to fry eggs in butter for a rich and delicious breakfast", exampleTranslation: "Me gusta freír huevos en mantequilla para un desayuno rico y delicioso" },
      { id: "cook3", english: "Bake", spanish: "Hornear", difficulty: "easy", example: "My grandmother taught me how to bake chocolate chip cookies from scratch", exampleTranslation: "Mi abuela me enseñó cómo hornear galletas con chispas de chocolate desde cero" },
      { id: "cook4", english: "Grill", spanish: "Asar a la parrilla", difficulty: "easy", example: "On summer weekends, we love to grill burgers and vegetables outside", exampleTranslation: "Los fines de semana de verano, nos encanta asar hamburguesas y verduras a la parrilla afuera" },
      { id: "cook5", english: "Steam", spanish: "Cocinar al vapor", difficulty: "easy", example: "Steaming vegetables is a healthy cooking method that preserves nutrients", exampleTranslation: "Cocinar verduras al vapor es un método saludable que preserva los nutrientes" },
      { id: "cook6", english: "Roast", spanish: "Asar", difficulty: "easy", example: "We roast a turkey in the oven every Thanksgiving with herbs and spices", exampleTranslation: "Asamos un pavo en el horno cada Día de Acción de Gracias con hierbas y especias" },
      { id: "cook7", english: "Simmer", spanish: "Cocinar a fuego lento", difficulty: "medium", example: "Let the soup simmer on low heat for thirty minutes to develop the flavors", exampleTranslation: "Deja que la sopa se cocine a fuego lento durante treinta minutos para desarrollar los sabores" },
      { id: "cook8", english: "Sauté", spanish: "Saltear", difficulty: "medium", example: "Sauté the onions and garlic in olive oil until they become golden brown", exampleTranslation: "Saltea las cebollas y el ajo en aceite de oliva hasta que se doren" },
      { id: "cook9", english: "Blanch", spanish: "Escaldar", difficulty: "medium", example: "Blanch the tomatoes in boiling water to make them easier to peel", exampleTranslation: "Escalda los tomates en agua hirviendo para que sean más fáciles de pelar" },
      { id: "cook10", english: "Marinate", spanish: "Marinar", difficulty: "medium", example: "Marinate the chicken in lemon juice and herbs overnight for maximum flavor", exampleTranslation: "Marina el pollo en jugo de limón y hierbas durante la noche para máximo sabor" },
      { id: "cook11", english: "Deep-fry", spanish: "Freír por inmersión", difficulty: "medium", example: "To make crispy chicken, you need to deep-fry it in hot oil", exampleTranslation: "Para hacer pollo crujiente, necesitas freírlo por inmersión en aceite caliente" },
      { id: "cook12", english: "Braise", spanish: "Estofar", difficulty: "medium", example: "Braise the beef in red wine for several hours until it becomes tender", exampleTranslation: "Estofa la carne de res en vino tinto durante varias horas hasta que se ablande" },
      { id: "cook13", english: "How should I cook this?", spanish: "¿Cómo debo cocinar esto?", difficulty: "hard", example: "This is my first time cooking fish, how should I cook this for the best results?", exampleTranslation: "Esta es mi primera vez cocinando pescado, ¿cómo debo cocinar esto para obtener los mejores resultados?" },
      { id: "cook14", english: "Let it cook for twenty minutes", spanish: "Déjalo cocinar por veinte minutos", difficulty: "hard", example: "After adding all ingredients, let it cook for twenty minutes on medium heat", exampleTranslation: "Después de agregar todos los ingredientes, déjalo cocinar por veinte minutos a fuego medio" },
      { id: "cook15", english: "Don't overcook it", spanish: "No lo cocines demasiado", difficulty: "hard", example: "Be careful with the fish - don't overcook it or it will become dry and tough", exampleTranslation: "Ten cuidado con el pescado - no lo cocines demasiado o se volverá seco y duro" }
    ]
  },

  house_rooms: {
    name: "Rooms of the House",
    description: "Different rooms in a home",
    icon: Home,
    color: "from-blue-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "room1", english: "Bedroom", spanish: "Dormitorio", difficulty: "easy", example: "My bedroom is painted light blue and has a large comfortable bed", exampleTranslation: "Mi dormitorio está pintado de azul claro y tiene una cama grande y cómoda" },
      { id: "room2", english: "Bathroom", spanish: "Baño", difficulty: "easy", example: "The bathroom has been recently renovated with new tiles and fixtures", exampleTranslation: "El baño ha sido recientemente renovado con azulejos y accesorios nuevos" },
      { id: "room3", english: "Kitchen", spanish: "Cocina", difficulty: "easy", example: "Our kitchen is the heart of the home where family gathers to cook and eat", exampleTranslation: "Nuestra cocina es el corazón del hogar donde la familia se reúne para cocinar y comer" },
      { id: "room4", english: "Living room", spanish: "Sala de estar", difficulty: "easy", example: "We watch movies together in the cozy living room every Friday night", exampleTranslation: "Vemos películas juntos en la acogedora sala de estar todos los viernes por la noche" },
      { id: "room5", english: "Dining room", spanish: "Comedor", difficulty: "easy", example: "The dining room has a beautiful wooden table that seats eight people", exampleTranslation: "El comedor tiene una hermosa mesa de madera con capacidad para ocho personas" },
      { id: "room6", english: "Basement", spanish: "Sótano", difficulty: "easy", example: "We converted the basement into a home theater with comfortable seating", exampleTranslation: "Convertimos el sótano en un cine en casa con asientos cómodos" },
      { id: "room7", english: "Attic", spanish: "Ático", difficulty: "medium", example: "The attic is used for storage of old family photos and seasonal decorations", exampleTranslation: "El ático se usa para almacenar fotos familiares antiguas y decoraciones de temporada" },
      { id: "room8", english: "Garage", spanish: "Garaje", difficulty: "medium", example: "The two-car garage also has space for tools and lawn equipment", exampleTranslation: "El garaje para dos autos también tiene espacio para herramientas y equipo de jardín" },
      { id: "room9", english: "Laundry room", spanish: "Cuarto de lavado", difficulty: "medium", example: "The laundry room is equipped with a washer, dryer, and folding table", exampleTranslation: "El cuarto de lavado está equipado con lavadora, secadora y mesa para doblar" },
      { id: "room10", english: "Office", spanish: "Oficina", difficulty: "medium", example: "Since working from home, I've set up a home office with a desk and bookshelf", exampleTranslation: "Desde que trabajo desde casa, he instalado una oficina en casa con escritorio y estantería" },
      { id: "room11", english: "Guest room", spanish: "Habitación de invitados", difficulty: "medium", example: "We keep the guest room ready for when family visits from out of town", exampleTranslation: "Mantenemos la habitación de invitados lista para cuando la familia nos visita de fuera de la ciudad" },
      { id: "room12", english: "Hallway", spanish: "Pasillo", difficulty: "medium", example: "The hallway walls are decorated with family photos from over the years", exampleTranslation: "Las paredes del pasillo están decoradas con fotos familiares de los años" },
      { id: "room13", english: "Where's the bathroom?", spanish: "¿Dónde está el baño?", difficulty: "hard", example: "Excuse me, this is my first time here, where's the bathroom please?", exampleTranslation: "Disculpa, esta es mi primera vez aquí, ¿dónde está el baño por favor?" },
      { id: "room14", english: "Make yourself at home", spanish: "Siéntete como en casa", difficulty: "hard", example: "Welcome to our house! Please make yourself at home and let me know if you need anything", exampleTranslation: "¡Bienvenido a nuestra casa! Por favor siéntete como en casa y avísame si necesitas algo" },
      { id: "room15", english: "I'll show you around", spanish: "Te mostraré la casa", difficulty: "hard", example: "Let me show you around the house so you know where everything is located", exampleTranslation: "Déjame mostrarte la casa para que sepas dónde está ubicado todo" }
    ]
  },

  office_supplies: {
    name: "Office Supplies",
    description: "Items used in an office",
    icon: FileText,
    color: "from-gray-400 to-slate-500",
    level: "beginner",
    words: [
      { id: "off1", english: "Pen", spanish: "Bolígrafo", difficulty: "easy", example: "Can I borrow a blue pen to fill out this important form?", exampleTranslation: "¿Puedo pedir prestado un bolígrafo azul para llenar este formulario importante?" },
      { id: "off2", english: "Pencil", spanish: "Lápiz", difficulty: "easy", example: "I prefer using a pencil for sketching because I can erase mistakes easily", exampleTranslation: "Prefiero usar un lápiz para dibujar porque puedo borrar los errores fácilmente" },
      { id: "off3", english: "Paper", spanish: "Papel", difficulty: "easy", example: "We need to order more printer paper for the office this week", exampleTranslation: "Necesitamos pedir más papel para impresora para la oficina esta semana" },
      { id: "off4", english: "Stapler", spanish: "Grapadora", difficulty: "easy", example: "Use the stapler to attach these documents together before filing them", exampleTranslation: "Usa la grapadora para unir estos documentos antes de archivarlos" },
      { id: "off5", english: "Folder", spanish: "Carpeta", difficulty: "easy", example: "Keep all your important documents organized in separate colored folders", exampleTranslation: "Mantén todos tus documentos importantes organizados en carpetas de colores separadas" },
      { id: "off6", english: "Notebook", spanish: "Cuaderno", difficulty: "easy", example: "I write all my meeting notes in this spiral notebook every day", exampleTranslation: "Escribo todas mis notas de reuniones en este cuaderno de espiral todos los días" },
      { id: "off7", english: "Scissors", spanish: "Tijeras", difficulty: "medium", example: "I need sharp scissors to cut out these newspaper articles for my project", exampleTranslation: "Necesito tijeras afiladas para recortar estos artículos de periódico para mi proyecto" },
      { id: "off8", english: "Tape", spanish: "Cinta adhesiva", difficulty: "medium", example: "Use clear tape to seal the envelope before mailing this letter", exampleTranslation: "Usa cinta adhesiva transparente para sellar el sobre antes de enviar esta carta" },
      { id: "off9", english: "Ruler", spanish: "Regla", difficulty: "medium", example: "Measure the dimensions carefully with a ruler before cutting the paper", exampleTranslation: "Mide las dimensiones cuidadosamente con una regla antes de cortar el papel" },
      { id: "off10", english: "Eraser", spanish: "Borrador", difficulty: "medium", example: "This eraser removes pencil marks completely without damaging the paper", exampleTranslation: "Este borrador elimina las marcas de lápiz completamente sin dañar el papel" },
      { id: "off11", english: "Calculator", spanish: "Calculadora", difficulty: "medium", example: "I use my calculator to check all the numbers in the financial report", exampleTranslation: "Uso mi calculadora para verificar todos los números en el informe financiero" },
      { id: "off12", english: "Clipboard", spanish: "Portapapeles", difficulty: "medium", example: "The clipboard makes it easy to write on papers while standing or moving around", exampleTranslation: "El portapapeles facilita escribir en papeles mientras estás de pie o moviéndote" },
      { id: "off13", english: "Do you have a pen I can borrow?", spanish: "¿Tienes un bolígrafo que me puedas prestar?", difficulty: "hard", example: "I forgot mine at home, do you have a pen I can borrow for the meeting?", exampleTranslation: "Olvidé el mío en casa, ¿tienes un bolígrafo que me puedas prestar para la reunión?" },
      { id: "off14", english: "We're out of paper", spanish: "Se nos acabó el papel", difficulty: "hard", example: "We're out of paper for the printer, someone needs to order more supplies", exampleTranslation: "Se nos acabó el papel para la impresora, alguien necesita pedir más suministros" },
      { id: "off15", english: "Where do you keep the supplies?", spanish: "¿Dónde guardas los suministros?", difficulty: "hard", example: "I'm new here, where do you keep the office supplies like pens and paper?", exampleTranslation: "Soy nuevo aquí, ¿dónde guardas los suministros de oficina como bolígrafos y papel?" }
    ]
  },

  public_places: {
    name: "Public Places",
    description: "Common public locations",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pub1", english: "Library", spanish: "Biblioteca", difficulty: "easy", example: "I go to the public library every week to borrow books and study", exampleTranslation: "Voy a la biblioteca pública cada semana para pedir prestados libros y estudiar" },
      { id: "pub2", english: "Museum", spanish: "Museo", difficulty: "easy", example: "The art museum has an amazing collection of impressionist paintings", exampleTranslation: "El museo de arte tiene una colección increíble de pinturas impresionistas" },
      { id: "pub3", english: "Park", spanish: "Parque", difficulty: "easy", example: "Families enjoy picnics in the beautiful park on sunny weekend afternoons", exampleTranslation: "Las familias disfrutan de picnics en el hermoso parque los domingos soleados por la tarde" },
      { id: "pub4", english: "Stadium", spanish: "Estadio", difficulty: "easy", example: "The football stadium can hold fifty thousand excited fans during big games", exampleTranslation: "El estadio de fútbol puede albergar cincuenta mil fanáticos emocionados durante los grandes juegos" },
      { id: "pub5", english: "Theater", spanish: "Teatro", difficulty: "easy", example: "We bought tickets to see a musical at the historic downtown theater", exampleTranslation: "Compramos boletos para ver un musical en el histórico teatro del centro" },
      { id: "pub6", english: "Mall", spanish: "Centro comercial", difficulty: "easy", example: "The shopping mall has over two hundred stores and restaurants", exampleTranslation: "El centro comercial tiene más de doscientas tiendas y restaurantes" },
      { id: "pub7", english: "Post office", spanish: "Oficina de correos", difficulty: "medium", example: "I need to go to the post office to mail this package to my grandmother", exampleTranslation: "Necesito ir a la oficina de correos para enviar este paquete a mi abuela" },
      { id: "pub8", english: "City hall", spanish: "Ayuntamiento", difficulty: "medium", example: "You can get official documents and permits at the city hall downtown", exampleTranslation: "Puedes obtener documentos oficiales y permisos en el ayuntamiento del centro" },
      { id: "pub9", english: "Zoo", spanish: "Zoológico", difficulty: "medium", example: "Children love visiting the zoo to see exotic animals from around the world", exampleTranslation: "A los niños les encanta visitar el zoológico para ver animales exóticos de todo el mundo" },
      { id: "pub10", english: "Aquarium", spanish: "Acuario", difficulty: "medium", example: "The aquarium has a fascinating underwater tunnel where sharks swim overhead", exampleTranslation: "El acuario tiene un fascinante túnel submarino donde los tiburones nadan por encima" },
      { id: "pub11", english: "Cemetery", spanish: "Cementerio", difficulty: "medium", example: "The old cemetery is peaceful and has beautiful historic monuments and trees", exampleTranslation: "El antiguo cementerio es pacífico y tiene hermosos monumentos históricos y árboles" },
      { id: "pub12", english: "Square", spanish: "Plaza", difficulty: "medium", example: "The town square hosts a farmers market every Saturday morning with fresh produce", exampleTranslation: "La plaza del pueblo alberga un mercado de agricultores cada sábado por la mañana con productos frescos" },
      { id: "pub13", english: "How do I get to the museum?", spanish: "¿Cómo llego al museo?", difficulty: "hard", example: "Excuse me, I'm a tourist here, how do I get to the art museum from this street?", exampleTranslation: "Disculpe, soy turista aquí, ¿cómo llego al museo de arte desde esta calle?" },
      { id: "pub14", english: "Is there a park nearby?", spanish: "¿Hay un parque cerca?", difficulty: "hard", example: "Is there a park nearby where I can take my children to play this afternoon?", exampleTranslation: "¿Hay un parque cerca donde pueda llevar a mis niños a jugar esta tarde?" },
      { id: "pub15", english: "What time does it close?", spanish: "¿A qué hora cierra?", difficulty: "hard", example: "I want to visit the library today, what time does it close on weekdays?", exampleTranslation: "Quiero visitar la biblioteca hoy, ¿a qué hora cierra entre semana?" }
    ]
  },

  time_of_day: {
    name: "Time of Day",
    description: "Parts of the day",
    icon: Watch,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "time1", english: "Morning", spanish: "Mañana", difficulty: "easy", example: "I love drinking coffee and reading the newspaper in the quiet morning hours", exampleTranslation: "Me encanta beber café y leer el periódico en las tranquilas horas de la mañana" },
      { id: "time2", english: "Afternoon", spanish: "Tarde", difficulty: "easy", example: "Let's meet for lunch this afternoon around one o'clock at the cafe", exampleTranslation: "Reunámonos para almorzar esta tarde alrededor de la una en el café" },
      { id: "time3", english: "Evening", spanish: "Noche", difficulty: "easy", example: "We usually eat dinner together as a family every evening at seven", exampleTranslation: "Normalmente cenamos juntos en familia todas las noches a las siete" },
      { id: "time4", english: "Night", spanish: "Noche", difficulty: "easy", example: "The stars are beautiful in the clear night sky away from city lights", exampleTranslation: "Las estrellas son hermosas en el cielo nocturno despejado lejos de las luces de la ciudad" },
      { id: "time5", english: "Midnight", spanish: "Medianoche", difficulty: "easy", example: "The clock struck midnight and everyone shouted 'Happy New Year!'", exampleTranslation: "El reloj dio la medianoche y todos gritaron '¡Feliz Año Nuevo!'" },
      { id: "time6", english: "Noon", spanish: "Mediodía", difficulty: "easy", example: "The sun is strongest at noon, so remember to wear sunscreen", exampleTranslation: "El sol es más fuerte al mediodía, así que recuerda usar protector solar" },
      { id: "time7", english: "Dawn", spanish: "Amanecer", difficulty: "medium", example: "Fishermen wake up before dawn to get the best catch of the day", exampleTranslation: "Los pescadores se despiertan antes del amanecer para obtener la mejor pesca del día" },
      { id: "time8", english: "Dusk", spanish: "Atardecer", difficulty: "medium", example: "The sky turns beautiful shades of orange and purple at dusk", exampleTranslation: "El cielo se vuelve hermosos tonos de naranja y púrpura al atardecer" },
      { id: "time9", english: "Sunrise", spanish: "Salida del sol", difficulty: "medium", example: "We hiked to the mountain top to watch the spectacular sunrise", exampleTranslation: "Caminamos hasta la cima de la montaña para ver la espectacular salida del sol" },
      { id: "time10", english: "Sunset", spanish: "Puesta del sol", difficulty: "medium", example: "The beach at sunset is the most romantic place for a dinner date", exampleTranslation: "La playa al atardecer es el lugar más romántico para una cena" },
      { id: "time11", english: "Twilight", spanish: "Crepúsculo", difficulty: "medium", example: "During twilight, the light is perfect for taking beautiful photographs", exampleTranslation: "Durante el crepúsculo, la luz es perfecta para tomar hermosas fotografías" },
      { id: "time12", english: "Rush hour", spanish: "Hora pico", difficulty: "medium", example: "Traffic is terrible during rush hour, so I leave work early to avoid it", exampleTranslation: "El tráfico es terrible durante la hora pico, así que salgo temprano del trabajo para evitarlo" },
      { id: "time13", english: "What time is it?", spanish: "¿Qué hora es?", difficulty: "hard", example: "Excuse me, I don't have my watch, what time is it right now?", exampleTranslation: "Disculpe, no tengo mi reloj, ¿qué hora es en este momento?" },
      { id: "time14", english: "See you this evening", spanish: "Te veo esta noche", difficulty: "hard", example: "I have to run now, but see you this evening at the restaurant at eight", exampleTranslation: "Tengo que irme ahora, pero te veo esta noche en el restaurante a las ocho" },
      { id: "time15", english: "Early in the morning", spanish: "Temprano en la mañana", difficulty: "hard", example: "I prefer to exercise early in the morning when the gym is not crowded", exampleTranslation: "Prefiero hacer ejercicio temprano en la mañana cuando el gimnasio no está lleno" }
    ]
  },

  sizes_measurements: {
    name: "Sizes & Measurements",
    description: "Describing size and dimensions",
    icon: Ruler,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "size1", english: "Small", spanish: "Pequeño", difficulty: "easy", example: "This shirt is too small for me, I need a larger size", exampleTranslation: "Esta camisa es demasiado pequeña para mí, necesito una talla más grande" },
      { id: "size2", english: "Large", spanish: "Grande", difficulty: "easy", example: "We ordered a large pizza to share among four hungry people", exampleTranslation: "Pedimos una pizza grande para compartir entre cuatro personas hambrientas" },
      { id: "size3", english: "Tall", spanish: "Alto", difficulty: "easy", example: "My brother is very tall, he's over six feet and still growing", exampleTranslation: "Mi hermano es muy alto, mide más de seis pies y todavía está creciendo" },
      { id: "size4", english: "Short", spanish: "Bajo", difficulty: "easy", example: "The table is too short for comfortable dining, we need a taller one", exampleTranslation: "La mesa es demasiado baja para comer cómodamente, necesitamos una más alta" },
      { id: "size5", english: "Wide", spanish: "Ancho", difficulty: "easy", example: "This hallway is wide enough to move furniture through easily", exampleTranslation: "Este pasillo es lo suficientemente ancho para mover muebles fácilmente" },
      { id: "size6", english: "Narrow", spanish: "Estrecho", difficulty: "easy", example: "The narrow street makes it difficult for two cars to pass each other", exampleTranslation: "La calle estrecha hace difícil que dos autos se pasen entre sí" },
      { id: "size7", english: "Long", spanish: "Largo", difficulty: "medium", example: "She has beautiful long hair that reaches down to her waist", exampleTranslation: "Ella tiene hermoso cabello largo que le llega hasta la cintura" },
      { id: "size8", english: "Thick", spanish: "Grueso", difficulty: "medium", example: "This thick winter coat will keep you warm in freezing temperatures", exampleTranslation: "Este abrigo de invierno grueso te mantendrá caliente en temperaturas bajo cero" },
      { id: "size9", english: "Thin", spanish: "Delgado", difficulty: "medium", example: "The ice on the pond is too thin and dangerous for skating", exampleTranslation: "El hielo en el estanque es demasiado delgado y peligroso para patinar" },
      { id: "size10", english: "Deep", spanish: "Profundo", difficulty: "medium", example: "The swimming pool is very deep at the diving end, over twelve feet", exampleTranslation: "La piscina es muy profunda en el extremo de clavados, más de doce pies" },
      { id: "size11", english: "Shallow", spanish: "Poco profundo", difficulty: "medium", example: "Children can play safely in the shallow end of the pool", exampleTranslation: "Los niños pueden jugar con seguridad en el extremo poco profundo de la piscina" },
      { id: "size12", english: "Heavy", spanish: "Pesado", difficulty: "medium", example: "This suitcase is too heavy to carry, I need help lifting it", exampleTranslation: "Esta maleta es demasiado pesada para cargar, necesito ayuda para levantarla" },
      { id: "size13", english: "What size do you need?", spanish: "¿Qué talla necesitas?", difficulty: "hard", example: "These shoes come in different sizes, what size do you need to try on?", exampleTranslation: "Estos zapatos vienen en diferentes tallas, ¿qué talla necesitas probarte?" },
      { id: "size14", english: "It's too big for me", spanish: "Es demasiado grande para mí", difficulty: "hard", example: "This jacket is too big for me, do you have it in a smaller size?", exampleTranslation: "Esta chaqueta es demasiado grande para mí, ¿la tienes en una talla más pequeña?" },
      { id: "size15", english: "How much does it weigh?", spanish: "¿Cuánto pesa?", difficulty: "hard", example: "Before shipping this package internationally, how much does it weigh exactly?", exampleTranslation: "Antes de enviar este paquete internacionalmente, ¿cuánto pesa exactamente?" }
    ]
  },

  materials_textures: {
    name: "Materials & Textures",
    description: "What things are made of",
    icon: Layers,
    color: "from-stone-400 to-gray-500",
    level: "intermediate",
    words: [
      { id: "mat1", english: "Wood", spanish: "Madera", difficulty: "easy", example: "This beautiful dining table is made from solid oak wood", exampleTranslation: "Esta hermosa mesa de comedor está hecha de madera de roble maciza" },
      { id: "mat2", english: "Metal", spanish: "Metal", difficulty: "easy", example: "The gate is made of strong metal that won't rust in the rain", exampleTranslation: "La puerta está hecha de metal fuerte que no se oxidará con la lluvia" },
      { id: "mat3", english: "Plastic", spanish: "Plástico", difficulty: "easy", example: "We're trying to use less plastic and switch to reusable containers", exampleTranslation: "Estamos tratando de usar menos plástico y cambiar a contenedores reutilizables" },
      { id: "mat4", english: "Glass", spanish: "Vidrio", difficulty: "easy", example: "Be careful with that glass vase, it's fragile and expensive", exampleTranslation: "Ten cuidado con ese jarrón de vidrio, es frágil y costoso" },
      { id: "mat5", english: "Fabric", spanish: "Tela", difficulty: "easy", example: "This soft fabric is perfect for making comfortable summer clothes", exampleTranslation: "Esta tela suave es perfecta para hacer ropa de verano cómoda" },
      { id: "mat6", english: "Leather", spanish: "Cuero", difficulty: "easy", example: "I bought an expensive leather jacket that will last for many years", exampleTranslation: "Compré una chaqueta de cuero costosa que durará muchos años" },
      { id: "mat7", english: "Cotton", spanish: "Algodón", difficulty: "medium", example: "Cotton shirts are breathable and comfortable to wear in hot weather", exampleTranslation: "Las camisas de algodón son transpirables y cómodas de usar en clima caliente" },
      { id: "mat8", english: "Silk", spanish: "Seda", difficulty: "medium", example: "She wore an elegant silk dress to the formal wedding ceremony", exampleTranslation: "Ella usó un elegante vestido de seda para la ceremonia de boda formal" },
      { id: "mat9", english: "Stone", spanish: "Piedra", difficulty: "medium", example: "The fireplace is made of natural stone from a nearby quarry", exampleTranslation: "La chimenea está hecha de piedra natural de una cantera cercana" },
      { id: "mat10", english: "Concrete", spanish: "Hormigón", difficulty: "medium", example: "The building's foundation is made of reinforced concrete for strength", exampleTranslation: "Los cimientos del edificio están hechos de hormigón reforzado para mayor resistencia" },
      { id: "mat11", english: "Rubber", spanish: "Caucho", difficulty: "medium", example: "Car tires are made of durable rubber that grips the road well", exampleTranslation: "Los neumáticos de auto están hechos de caucho duradero que agarra bien la carretera" },
      { id: "mat12", english: "Ceramic", spanish: "Cerámica", difficulty: "medium", example: "These beautiful ceramic tiles were handmade by a local artist", exampleTranslation: "Estos hermosos azulejos de cerámica fueron hechos a mano por un artista local" },
      { id: "mat13", english: "What's it made of?", spanish: "¿De qué está hecho?", difficulty: "hard", example: "This sculpture is beautiful, what material is it made of exactly?", exampleTranslation: "Esta escultura es hermosa, ¿de qué material está hecha exactamente?" },
      { id: "mat14", english: "It feels soft", spanish: "Se siente suave", difficulty: "hard", example: "This blanket feels so soft and comfortable, what fabric is it made from?", exampleTranslation: "Esta manta se siente tan suave y cómoda, ¿de qué tela está hecha?" },
      { id: "mat15", english: "Is it waterproof?", spanish: "¿Es impermeable?", difficulty: "hard", example: "I need a jacket for hiking in the rain, is this material waterproof?", exampleTranslation: "Necesito una chaqueta para caminar bajo la lluvia, ¿este material es impermeable?" }
    ]
  },

  celebrations_events: {
    name: "Celebrations & Events",
    description: "Special occasions and gatherings",
    icon: PartyPopper,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "cel1", english: "Party", spanish: "Fiesta", difficulty: "easy", example: "We're throwing a surprise birthday party for my sister next weekend", exampleTranslation: "Vamos a hacer una fiesta de cumpleaños sorpresa para mi hermana el próximo fin de semana" },
      { id: "cel2", english: "Wedding", spanish: "Boda", difficulty: "easy", example: "Their beautiful wedding ceremony took place in a historic church downtown", exampleTranslation: "Su hermosa ceremonia de boda tuvo lugar en una iglesia histórica en el centro" },
      { id: "cel3", english: "Birthday", spanish: "Cumpleaños", difficulty: "easy", example: "She's celebrating her thirtieth birthday with friends and family tonight", exampleTranslation: "Ella está celebrando su trigésimo cumpleaños con amigos y familia esta noche" },
      { id: "cel4", english: "Anniversary", spanish: "Aniversario", difficulty: "easy", example: "My parents celebrated their twenty-fifth wedding anniversary with a romantic dinner", exampleTranslation: "Mis padres celebraron su vigésimo quinto aniversario de bodas con una cena romántica" },
      { id: "cel5", english: "Graduation", spanish: "Graduación", difficulty: "easy", example: "His graduation from medical school was a proud moment for the whole family", exampleTranslation: "Su graduación de la escuela de medicina fue un momento de orgullo para toda la familia" },
      { id: "cel6", english: "Festival", spanish: "Festival", difficulty: "easy", example: "The city hosts a music festival every summer with famous international artists", exampleTranslation: "La ciudad alberga un festival de música cada verano con artistas internacionales famosos" },
      { id: "cel7", english: "Ceremony", spanish: "Ceremonia", difficulty: "medium", example: "The awards ceremony was formal and attended by many important guests", exampleTranslation: "La ceremonia de premios fue formal y asistieron muchos invitados importantes" },
      { id: "cel8", english: "Reception", spanish: "Recepción", difficulty: "medium", example: "The wedding reception featured delicious food and dancing until midnight", exampleTranslation: "La recepción de boda presentó comida deliciosa y baile hasta la medianoche" },
      { id: "cel9", english: "Reunion", spanish: "Reunión", difficulty: "medium", example: "Our high school reunion brought together classmates we hadn't seen in twenty years", exampleTranslation: "Nuestra reunión de secundaria reunió a compañeros que no habíamos visto en veinte años" },
      { id: "cel10", english: "Celebration", spanish: "Celebración", difficulty: "medium", example: "The championship victory called for a big celebration with the entire team", exampleTranslation: "La victoria del campeonato requería una gran celebración con todo el equipo" },
      { id: "cel11", english: "Baptism", spanish: "Bautizo", difficulty: "medium", example: "We were invited to attend the baptism ceremony of our friends' newborn baby", exampleTranslation: "Fuimos invitados a asistir a la ceremonia de bautizo del bebé recién nacido de nuestros amigos" },
      { id: "cel12", english: "Engagement", spanish: "Compromiso", difficulty: "medium", example: "They announced their engagement at a family dinner last month", exampleTranslation: "Ellos anunciaron su compromiso en una cena familiar el mes pasado" },
      { id: "cel13", english: "Congratulations on your wedding!", spanish: "¡Felicitaciones por tu boda!", difficulty: "hard", example: "Congratulations on your wedding! I wish you both a lifetime of happiness together", exampleTranslation: "¡Felicitaciones por tu boda! Les deseo a ambos una vida de felicidad juntos" },
      { id: "cel14", english: "When's the big day?", spanish: "¿Cuándo es el gran día?", difficulty: "hard", example: "I heard you're getting married soon, when's the big day exactly?", exampleTranslation: "Escuché que te vas a casar pronto, ¿cuándo es el gran día exactamente?" },
      { id: "cel15", english: "Let's raise a toast", spanish: "Brindemos", difficulty: "hard", example: "Let's raise a toast to the happy couple and wish them all the best", exampleTranslation: "Brindemos por la feliz pareja y deseémosles todo lo mejor" }
    ]
  },

  furniture_decor: {
    name: "Furniture & Decor",
    description: "Home furnishings",
    icon: Armchair,
    color: "from-amber-400 to-yellow-500",
    level: "beginner",
    words: [
      { id: "furn1", english: "Table", spanish: "Mesa", difficulty: "easy", example: "We need a bigger dining table because our family is growing", exampleTranslation: "Necesitamos una mesa de comedor más grande porque nuestra familia está creciendo" },
      { id: "furn2", english: "Chair", spanish: "Silla", difficulty: "easy", example: "These comfortable chairs are perfect for long dinner conversations", exampleTranslation: "Estas sillas cómodas son perfectas para largas conversaciones durante la cena" },
      { id: "furn3", english: "Sofa", spanish: "Sofá", difficulty: "easy", example: "The leather sofa in the living room seats five people comfortably", exampleTranslation: "El sofá de cuero en la sala de estar tiene capacidad para cinco personas cómodamente" },
      { id: "furn4", english: "Lamp", spanish: "Lámpara", difficulty: "easy", example: "I need a reading lamp next to my bed for nighttime reading", exampleTranslation: "Necesito una lámpara de lectura junto a mi cama para leer por la noche" },
      { id: "furn5", english: "Desk", spanish: "Escritorio", difficulty: "easy", example: "My home office desk has plenty of drawer space for organizing papers", exampleTranslation: "Mi escritorio de oficina en casa tiene mucho espacio en cajones para organizar papeles" },
      { id: "furn6", english: "Bookshelf", spanish: "Estantería", difficulty: "easy", example: "The tall bookshelf is filled with hundreds of books from floor to ceiling", exampleTranslation: "La estantería alta está llena de cientos de libros del suelo al techo" },
      { id: "furn7", english: "Cabinet", spanish: "Armario", difficulty: "medium", example: "The kitchen cabinet holds all our dishes, glasses, and cooking supplies", exampleTranslation: "El armario de cocina guarda todos nuestros platos, vasos y suministros de cocina" },
      { id: "furn8", english: "Dresser", spanish: "Cómoda", difficulty: "medium", example: "I keep my clothes organized in the dresser with six large drawers", exampleTranslation: "Mantengo mi ropa organizada en la cómoda con seis cajones grandes" },
      { id: "furn9", english: "Mirror", spanish: "Espejo", difficulty: "medium", example: "The full-length mirror in the bedroom helps me check my outfit every morning", exampleTranslation: "El espejo de cuerpo entero en el dormitorio me ayuda a revisar mi ropa cada mañana" },
      { id: "furn10", english: "Curtains", spanish: "Cortinas", difficulty: "medium", example: "These thick curtains block out sunlight completely for better sleep", exampleTranslation: "Estas cortinas gruesas bloquean completamente la luz del sol para dormir mejor" },
      { id: "furn11", english: "Rug", spanish: "Alfombra", difficulty: "medium", example: "The colorful rug in the living room adds warmth and style to the room", exampleTranslation: "La alfombra colorida en la sala de estar añade calidez y estilo a la habitación" },
      { id: "furn12", english: "Picture frame", spanish: "Marco de fotos", difficulty: "medium", example: "I display family photos in elegant wooden picture frames on the mantel", exampleTranslation: "Muestro fotos familiares en elegantes marcos de fotos de madera sobre la repisa" },
      { id: "furn13", english: "Where should we put this?", spanish: "¿Dónde deberíamos poner esto?", difficulty: "hard", example: "We just bought this new sofa, where should we put it in the living room?", exampleTranslation: "Acabamos de comprar este sofá nuevo, ¿dónde deberíamos ponerlo en la sala de estar?" },
      { id: "furn14", english: "It matches the decor", spanish: "Combina con la decoración", difficulty: "hard", example: "I love this lamp because it matches the decor perfectly and provides good light", exampleTranslation: "Me encanta esta lámpara porque combina perfectamente con la decoración y proporciona buena luz" },
      { id: "furn15", english: "We need more storage", spanish: "Necesitamos más almacenamiento", difficulty: "hard", example: "With all these books and papers, we really need more storage space and shelves", exampleTranslation: "Con todos estos libros y papeles, realmente necesitamos más espacio de almacenamiento y estantes" }
    ]
  },

  weather_conditions: {
    name: "Weather Conditions",
    description: "Different types of weather",
    icon: Sun,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "weath1", english: "Sunny", spanish: "Soleado", difficulty: "easy", example: "It's a beautiful sunny day, perfect for a picnic in the park", exampleTranslation: "Es un hermoso día soleado, perfecto para un picnic en el parque" },
      { id: "weath2", english: "Rainy", spanish: "Lluvioso", difficulty: "easy", example: "Don't forget your umbrella, it's going to be rainy all day today", exampleTranslation: "No olvides tu paraguas, va a estar lluvioso todo el día hoy" },
      { id: "weath3", english: "Cloudy", spanish: "Nublado", difficulty: "easy", example: "The sky is cloudy but I don't think it will rain this afternoon", exampleTranslation: "El cielo está nublado pero no creo que llueva esta tarde" },
      { id: "weath4", english: "Windy", spanish: "Ventoso", difficulty: "easy", example: "It's too windy to use an umbrella, you'll need a raincoat instead", exampleTranslation: "Está demasiado ventoso para usar paraguas, necesitarás un impermeable en su lugar" },
      { id: "weath5", english: "Snowy", spanish: "Nevado", difficulty: "easy", example: "The children love snowy days because they can build snowmen and go sledding", exampleTranslation: "A los niños les encantan los días nevados porque pueden hacer muñecos de nieve y deslizarse en trineo" },
      { id: "weath6", english: "Foggy", spanish: "Neblinoso", difficulty: "easy", example: "Drive carefully in this foggy weather because visibility is very poor", exampleTranslation: "Conduce con cuidado en este clima neblinoso porque la visibilidad es muy pobre" },
      { id: "weath7", english: "Stormy", spanish: "Tormentoso", difficulty: "medium", example: "The weather forecast predicts stormy conditions with thunder and lightning tonight", exampleTranslation: "El pronóstico del tiempo predice condiciones tormentosas con truenos y relámpagos esta noche" },
      { id: "weath8", english: "Humid", spanish: "Húmedo", difficulty: "medium", example: "The summer weather here is not just hot but also very humid and uncomfortable", exampleTranslation: "El clima de verano aquí no solo es caliente sino también muy húmedo e incómodo" },
      { id: "weath9", english: "Freezing", spanish: "Helado", difficulty: "medium", example: "It's absolutely freezing outside, make sure to wear your warmest coat", exampleTranslation: "Está absolutamente helado afuera, asegúrate de usar tu abrigo más cálido" },
      { id: "weath10", english: "Mild", spanish: "Templado", difficulty: "medium", example: "Spring weather is usually mild with comfortable temperatures perfect for outdoor activities", exampleTranslation: "El clima de primavera suele ser templado con temperaturas cómodas perfectas para actividades al aire libre" },
      { id: "weath11", english: "Drizzle", spanish: "Llovizna", difficulty: "medium", example: "There's a light drizzle falling, not heavy rain but enough to get you wet", exampleTranslation: "Está cayendo una llovizna ligera, no lluvia fuerte pero suficiente para mojarte" },
      { id: "weath12", english: "Heatwave", spanish: "Ola de calor", difficulty: "medium", example: "The city is experiencing a dangerous heatwave with temperatures over forty degrees", exampleTranslation: "La ciudad está experimentando una ola de calor peligrosa con temperaturas superiores a cuarenta grados" },
      { id: "weath13", english: "What's the weather like?", spanish: "¿Cómo está el clima?", difficulty: "hard", example: "I'm planning a trip for next week, what's the weather like there usually?", exampleTranslation: "Estoy planeando un viaje para la próxima semana, ¿cómo está el clima allí normalmente?" },
      { id: "weath14", english: "It's getting colder", spanish: "Está haciendo más frío", difficulty: "hard", example: "As winter approaches, it's getting colder every day and we need warmer clothes", exampleTranslation: "A medida que se acerca el invierno, está haciendo más frío cada día y necesitamos ropa más abrigada" },
      { id: "weath15", english: "Perfect weather for hiking", spanish: "Clima perfecto para caminar", difficulty: "hard", example: "With clear skies and cool temperatures, it's perfect weather for hiking in the mountains", exampleTranslation: "Con cielos despejados y temperaturas frescas, es clima perfecto para caminar en las montañas" }
    ]
  },

  household_chores: {
    name: "Household Chores",
    description: "Cleaning and home maintenance",
    icon: Home,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "chor1", english: "Clean", spanish: "Limpiar", difficulty: "easy", example: "I clean the entire house thoroughly every Saturday morning", exampleTranslation: "Limpio toda la casa a fondo cada sábado por la mañana" },
      { id: "chor2", english: "Wash", spanish: "Lavar", difficulty: "easy", example: "Don't forget to wash the dishes after dinner tonight", exampleTranslation: "No olvides lavar los platos después de la cena esta noche" },
      { id: "chor3", english: "Vacuum", spanish: "Aspirar", difficulty: "easy", example: "I need to vacuum the carpets because they're covered in pet hair", exampleTranslation: "Necesito aspirar las alfombras porque están cubiertas de pelo de mascotas" },
      { id: "chor4", english: "Sweep", spanish: "Barrer", difficulty: "easy", example: "Please sweep the kitchen floor after cooking to remove the crumbs", exampleTranslation: "Por favor barre el piso de la cocina después de cocinar para quitar las migas" },
      { id: "chor5", english: "Mop", spanish: "Trapear", difficulty: "easy", example: "After sweeping, I mop the floor with warm water and cleaning solution", exampleTranslation: "Después de barrer, trapeo el piso con agua tibia y solución de limpieza" },
      { id: "chor6", english: "Dust", spanish: "Quitar el polvo", difficulty: "easy", example: "I dust all the furniture and shelves once a week to keep them clean", exampleTranslation: "Quito el polvo de todos los muebles y estantes una vez por semana para mantenerlos limpios" },
      { id: "chor7", english: "Laundry", spanish: "Ropa para lavar", difficulty: "medium", example: "I do the laundry twice a week and fold everything immediately when dry", exampleTranslation: "Hago la ropa para lavar dos veces por semana y doblo todo inmediatamente cuando está seco" },
      { id: "chor8", english: "Iron", spanish: "Planchar", difficulty: "medium", example: "I hate having to iron my shirts, but they look so much better wrinkle-free", exampleTranslation: "Odio tener que planchar mis camisas, pero se ven mucho mejor sin arrugas" },
      { id: "chor9", english: "Organize", spanish: "Organizar", difficulty: "medium", example: "I spent the whole weekend trying to organize my closet and throw out old clothes", exampleTranslation: "Pasé todo el fin de semana tratando de organizar mi armario y desechar ropa vieja" },
      { id: "chor10", english: "Take out the trash", spanish: "Sacar la basura", difficulty: "medium", example: "It's your turn to take out the trash and recycling bins tonight", exampleTranslation: "Es tu turno de sacar la basura y los contenedores de reciclaje esta noche" },
      { id: "chor11", english: "Scrub", spanish: "Fregar", difficulty: "medium", example: "You need to scrub the bathtub with a brush to remove the soap scum", exampleTranslation: "Necesitas fregar la bañera con un cepillo para quitar los residuos de jabón" },
      { id: "chor12", english: "Polish", spanish: "Pulir", difficulty: "medium", example: "Polish the silver cutlery until it shines for the special dinner party", exampleTranslation: "Pule los cubiertos de plata hasta que brillen para la cena especial" },
      { id: "chor13", english: "The house is a mess", spanish: "La casa está desordenada", difficulty: "hard", example: "After the party last night, the house is a complete mess and needs deep cleaning", exampleTranslation: "Después de la fiesta anoche, la casa está completamente desordenada y necesita limpieza profunda" },
      { id: "chor14", english: "I need to do the laundry", spanish: "Necesito lavar la ropa", difficulty: "hard", example: "I'm running out of clean clothes, I really need to do the laundry today", exampleTranslation: "Me estoy quedando sin ropa limpia, realmente necesito lavar la ropa hoy" },
      { id: "chor15", english: "Can you help me clean?", spanish: "¿Me puedes ayudar a limpiar?", difficulty: "hard", example: "The house is too big to clean alone, can you help me with the upstairs rooms?", exampleTranslation: "La casa es demasiado grande para limpiar sola, ¿me puedes ayudar con las habitaciones de arriba?" }
    ]
  },

  tools_equipment: {
    name: "Tools & Equipment",
    description: "Common tools and equipment",
    icon: Box,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "tool1", english: "Hammer", spanish: "Martillo", difficulty: "easy", example: "I need a hammer to hang this heavy picture frame on the wall", exampleTranslation: "Necesito un martillo para colgar este marco de fotos pesado en la pared" },
      { id: "tool2", english: "Screwdriver", spanish: "Destornillador", difficulty: "easy", example: "Use a Phillips screwdriver to tighten all the loose screws on the cabinet", exampleTranslation: "Usa un destornillador Phillips para apretar todos los tornillos flojos del armario" },
      { id: "tool3", english: "Wrench", spanish: "Llave inglesa", difficulty: "easy", example: "I need a wrench to fix the leaking pipe under the kitchen sink", exampleTranslation: "Necesito una llave inglesa para arreglar la tubería que gotea debajo del fregadero" },
      { id: "tool4", english: "Drill", spanish: "Taladro", difficulty: "easy", example: "The electric drill makes it easy to install shelves in the garage wall", exampleTranslation: "El taladro eléctrico facilita instalar estantes en la pared del garaje" },
      { id: "tool5", english: "Saw", spanish: "Sierra", difficulty: "easy", example: "Use a saw to cut the wooden boards to the exact length needed", exampleTranslation: "Usa una sierra para cortar las tablas de madera a la longitud exacta necesaria" },
      { id: "tool6", english: "Pliers", spanish: "Alicates", difficulty: "easy", example: "I used pliers to grip and pull out the rusty nail from the wood", exampleTranslation: "Usé alicates para agarrar y sacar el clavo oxidado de la madera" },
      { id: "tool7", english: "Ladder", spanish: "Escalera", difficulty: "medium", example: "Be careful when climbing the ladder to paint the high ceiling", exampleTranslation: "Ten cuidado al subir la escalera para pintar el techo alto" },
      { id: "tool8", english: "Toolbox", spanish: "Caja de herramientas", difficulty: "medium", example: "My father keeps all his tools organized in a large red toolbox in the garage", exampleTranslation: "Mi padre mantiene todas sus herramientas organizadas en una gran caja de herramientas roja en el garaje" },
      { id: "tool9", english: "Nail", spanish: "Clavo", difficulty: "medium", example: "Hammer the nail straight into the wall to hang the painting securely", exampleTranslation: "Clava el clavo directamente en la pared para colgar la pintura de forma segura" },
      { id: "tool10", english: "Screw", spanish: "Tornillo", difficulty: "medium", example: "These screws are specially designed for wood and won't strip easily", exampleTranslation: "Estos tornillos están especialmente diseñados para madera y no se desgastarán fácilmente" },
      { id: "tool11", english: "Measuring tape", spanish: "Cinta métrica", difficulty: "medium", example: "Use the measuring tape to check if the furniture will fit through the doorway", exampleTranslation: "Usa la cinta métrica para verificar si los muebles cabrán por la puerta" },
      { id: "tool12", english: "Level", spanish: "Nivel", difficulty: "medium", example: "Use a level to make sure the shelf is perfectly horizontal before mounting", exampleTranslation: "Usa un nivel para asegurarte de que el estante esté perfectamente horizontal antes de montarlo" },
      { id: "tool13", english: "Do you have the right tool?", spanish: "¿Tienes la herramienta correcta?", difficulty: "hard", example: "Before starting this repair, do you have the right tool for the job?", exampleTranslation: "Antes de comenzar esta reparación, ¿tienes la herramienta correcta para el trabajo?" },
      { id: "tool14", english: "I can fix that", spanish: "Puedo arreglar eso", difficulty: "hard", example: "Don't worry about the broken chair, I have tools and I can fix that easily", exampleTranslation: "No te preocupes por la silla rota, tengo herramientas y puedo arreglar eso fácilmente" },
      { id: "tool15", english: "Be careful with that", spanish: "Ten cuidado con eso", difficulty: "hard", example: "That power drill is dangerous, be careful with that and wear safety glasses", exampleTranslation: "Ese taladro eléctrico es peligroso, ten cuidado con eso y usa gafas de seguridad" }
    ]
  },

  buildings_structures: {
    name: "Buildings & Structures",
    description: "Types of buildings",
    icon: Building2,
    color: "from-slate-400 to-gray-600",
    level: "intermediate",
    words: [
      { id: "build1", english: "House", spanish: "Casa", difficulty: "easy", example: "My dream is to own a beautiful house with a big backyard someday", exampleTranslation: "Mi sueño es tener una hermosa casa con un gran patio trasero algún día" },
      { id: "build2", english: "Building", spanish: "Edificio", difficulty: "easy", example: "The tallest building in our city has sixty floors and amazing views", exampleTranslation: "El edificio más alto de nuestra ciudad tiene sesenta pisos y vistas increíbles" },
      { id: "build3", english: "Bridge", spanish: "Puente", difficulty: "easy", example: "The historic bridge connects both sides of the river and is over two hundred years old", exampleTranslation: "El puente histórico conecta ambos lados del río y tiene más de doscientos años" },
      { id: "build4", english: "Tower", spanish: "Torre", difficulty: "easy", example: "The church tower has bells that ring every hour throughout the day", exampleTranslation: "La torre de la iglesia tiene campanas que suenan cada hora durante todo el día" },
      { id: "build5", english: "Skyscraper", spanish: "Rascacielos", difficulty: "easy", example: "Modern skyscrapers dominate the city skyline with their impressive height", exampleTranslation: "Los rascacielos modernos dominan el horizonte de la ciudad con su altura impresionante" },
      { id: "build6", english: "Factory", spanish: "Fábrica", difficulty: "easy", example: "The car factory employs over five thousand workers in three shifts", exampleTranslation: "La fábrica de autos emplea a más de cinco mil trabajadores en tres turnos" },
      { id: "build7", english: "Warehouse", spanish: "Almacén", difficulty: "medium", example: "The warehouse stores thousands of products ready for shipping to customers", exampleTranslation: "El almacén guarda miles de productos listos para enviar a los clientes" },
      { id: "build8", english: "Temple", spanish: "Templo", difficulty: "medium", example: "The ancient temple is a popular tourist attraction and spiritual site", exampleTranslation: "El templo antiguo es una atracción turística popular y sitio espiritual" },
      { id: "build9", english: "Castle", spanish: "Castillo", difficulty: "medium", example: "The medieval castle on the hill has been standing for over eight centuries", exampleTranslation: "El castillo medieval en la colina ha estado en pie durante más de ocho siglos" },
      { id: "build10", english: "Monument", spanish: "Monumento", difficulty: "medium", example: "They built a monument to honor the soldiers who fought in the war", exampleTranslation: "Construyeron un monumento para honrar a los soldados que lucharon en la guerra" },
      { id: "build11", english: "Dome", spanish: "Cúpula", difficulty: "medium", example: "The cathedral's golden dome can be seen from miles away across the city", exampleTranslation: "La cúpula dorada de la catedral se puede ver desde millas de distancia a través de la ciudad" },
      { id: "build12", english: "Fountain", spanish: "Fuente", difficulty: "medium", example: "The beautiful marble fountain in the square is a popular meeting point", exampleTranslation: "La hermosa fuente de mármol en la plaza es un punto de encuentro popular" },
      { id: "build13", english: "That building is impressive", spanish: "Ese edificio es impresionante", difficulty: "hard", example: "That modern glass building is truly impressive with its unique architectural design", exampleTranslation: "Ese edificio moderno de vidrio es verdaderamente impresionante con su diseño arquitectónico único" },
      { id: "build14", english: "How old is this structure?", spanish: "¿Qué tan vieja es esta estructura?", difficulty: "hard", example: "This bridge looks ancient, how old is this structure exactly?", exampleTranslation: "Este puente se ve antiguo, ¿qué tan vieja es esta estructura exactamente?" },
      { id: "build15", english: "It's under construction", spanish: "Está en construcción", difficulty: "hard", example: "The new shopping center is still under construction but will open next year", exampleTranslation: "El nuevo centro comercial todavía está en construcción pero abrirá el próximo año" }
    ]
  },

  vehicles_transportation: {
    name: "Vehicles & Transportation",
    description: "Different types of vehicles",
    icon: Building2,
    color: "from-red-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "veh1", english: "Car", spanish: "Carro", difficulty: "easy", example: "My new car is fuel-efficient and perfect for city driving", exampleTranslation: "Mi carro nuevo es eficiente en combustible y perfecto para conducir en la ciudad" },
      { id: "veh2", english: "Bus", spanish: "Autobús", difficulty: "easy", example: "The bus to downtown runs every fifteen minutes during rush hour", exampleTranslation: "El autobús al centro pasa cada quince minutos durante la hora pico" },
      { id: "veh3", english: "Train", spanish: "Tren", difficulty: "easy", example: "Taking the train is faster than driving during heavy traffic", exampleTranslation: "Tomar el tren es más rápido que conducir durante el tráfico pesado" },
      { id: "veh4", english: "Bicycle", spanish: "Bicicleta", difficulty: "easy", example: "Riding a bicycle to work is healthy and environmentally friendly", exampleTranslation: "Montar en bicicleta al trabajo es saludable y ecológico" },
      { id: "veh5", english: "Motorcycle", spanish: "Motocicleta", difficulty: "easy", example: "He loves riding his motorcycle through the countryside on weekends", exampleTranslation: "A él le encanta montar su motocicleta por el campo los fines de semana" },
      { id: "veh6", english: "Truck", spanish: "Camión", difficulty: "easy", example: "We rented a moving truck to transport furniture to our new house", exampleTranslation: "Alquilamos un camión de mudanza para transportar muebles a nuestra nueva casa" },
      { id: "veh7", english: "Van", spanish: "Camioneta", difficulty: "medium", example: "The delivery van brings packages to our office every morning", exampleTranslation: "La camioneta de reparto trae paquetes a nuestra oficina cada mañana" },
      { id: "veh8", english: "Subway", spanish: "Metro", difficulty: "medium", example: "The subway system is the fastest way to travel across the large city", exampleTranslation: "El sistema de metro es la forma más rápida de viajar por la gran ciudad" },
      { id: "veh9", english: "Taxi", spanish: "Taxi", difficulty: "medium", example: "I took a taxi to the airport because I had too much luggage", exampleTranslation: "Tomé un taxi al aeropuerto porque tenía demasiado equipaje" },
      { id: "veh10", english: "Helicopter", spanish: "Helicóptero", difficulty: "medium", example: "The news helicopter flew overhead to report on the traffic situation", exampleTranslation: "El helicóptero de noticias voló por encima para informar sobre la situación del tráfico" },
      { id: "veh11", english: "Scooter", spanish: "Scooter", difficulty: "medium", example: "Electric scooters are becoming popular for short trips around the city", exampleTranslation: "Los scooters eléctricos se están volviendo populares para viajes cortos por la ciudad" },
      { id: "veh12", english: "Tram", spanish: "Tranvía", difficulty: "medium", example: "The historic tram system still operates in the old part of town", exampleTranslation: "El sistema de tranvía histórico todavía opera en la parte antigua de la ciudad" },
      { id: "veh13", english: "How do I get there?", spanish: "¿Cómo llego allí?", difficulty: "hard", example: "I need to get to the airport by noon, how do I get there from here?", exampleTranslation: "Necesito llegar al aeropuerto al mediodía, ¿cómo llego allí desde aquí?" },
      { id: "veh14", english: "Is there parking?", spanish: "¿Hay estacionamiento?", difficulty: "hard", example: "I'm driving to the restaurant tonight, is there parking available nearby?", exampleTranslation: "Voy a conducir al restaurante esta noche, ¿hay estacionamiento disponible cerca?" },
      { id: "veh15", english: "The traffic is terrible", spanish: "El tráfico está terrible", difficulty: "hard", example: "I'm going to be late because the traffic is terrible on the highway today", exampleTranslation: "Voy a llegar tarde porque el tráfico está terrible en la autopista hoy" }
    ]
  },

  geometry_shapes: {
    name: "Geometry & Shapes",
    description: "Basic geometric shapes",
    icon: Box,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "geo1", english: "Circle", spanish: "Círculo", difficulty: "easy", example: "Draw a perfect circle using a compass for your geometry homework", exampleTranslation: "Dibuja un círculo perfecto usando un compás para tu tarea de geometría" },
      { id: "geo2", english: "Square", spanish: "Cuadrado", difficulty: "easy", example: "The room is shaped like a perfect square with equal sides", exampleTranslation: "La habitación tiene forma de cuadrado perfecto con lados iguales" },
      { id: "geo3", english: "Triangle", spanish: "Triángulo", difficulty: "easy", example: "A triangle has three sides and three angles that add up to one hundred eighty degrees", exampleTranslation: "Un triángulo tiene tres lados y tres ángulos que suman ciento ochenta grados" },
      { id: "geo4", english: "Rectangle", spanish: "Rectángulo", difficulty: "easy", example: "Most doors and windows are rectangular in shape for practical reasons", exampleTranslation: "La mayoría de las puertas y ventanas son de forma rectangular por razones prácticas" },
      { id: "geo5", english: "Oval", spanish: "Óvalo", difficulty: "easy", example: "The mirror has an elegant oval frame that complements the bedroom decor", exampleTranslation: "El espejo tiene un elegante marco ovalado que complementa la decoración del dormitorio" },
      { id: "geo6", english: "Star", spanish: "Estrella", difficulty: "easy", example: "Children love cutting out star shapes from colored paper for decorations", exampleTranslation: "A los niños les encanta recortar formas de estrella de papel de colores para decoraciones" },
      { id: "geo7", english: "Diamond", spanish: "Diamante", difficulty: "medium", example: "The pattern on the floor tiles forms a repeating diamond shape design", exampleTranslation: "El patrón en las baldosas del piso forma un diseño de forma de diamante repetitivo" },
      { id: "geo8", english: "Cube", spanish: "Cubo", difficulty: "medium", example: "A dice is a perfect cube with six equal square faces", exampleTranslation: "Un dado es un cubo perfecto con seis caras cuadradas iguales" },
      { id: "geo9", english: "Sphere", spanish: "Esfera", difficulty: "medium", example: "Planet Earth is not a perfect sphere but slightly flattened at the poles", exampleTranslation: "El planeta Tierra no es una esfera perfecta sino ligeramente aplanada en los polos" },
      { id: "geo10", english: "Pyramid", spanish: "Pirámide", difficulty: "medium", example: "The ancient Egyptian pyramids have fascinated people for thousands of years", exampleTranslation: "Las antiguas pirámides egipcias han fascinado a la gente durante miles de años" },
      { id: "geo11", english: "Cylinder", spanish: "Cilindro", difficulty: "medium", example: "A can of soup is cylindrical in shape with circular ends", exampleTranslation: "Una lata de sopa tiene forma cilíndrica con extremos circulares" },
      { id: "geo12", english: "Cone", spanish: "Cono", difficulty: "medium", example: "Ice cream cones are the perfect shape for holding delicious frozen treats", exampleTranslation: "Los conos de helado son la forma perfecta para sostener deliciosas golosinas congeladas" },
      { id: "geo13", english: "What shape is this?", spanish: "¿Qué forma es esta?", difficulty: "hard", example: "Look at this interesting building design, what shape is this exactly?", exampleTranslation: "Mira este interesante diseño de edificio, ¿qué forma es esta exactamente?" },
      { id: "geo14", english: "It's perfectly round", spanish: "Es perfectamente redondo", difficulty: "hard", example: "This decorative plate is perfectly round and hand-painted by local artisans", exampleTranslation: "Este plato decorativo es perfectamente redondo y pintado a mano por artesanos locales" },
      { id: "geo15", english: "The angles are equal", spanish: "Los ángulos son iguales", difficulty: "hard", example: "In an equilateral triangle, all the angles are equal at sixty degrees each", exampleTranslation: "En un triángulo equilátero, todos los ángulos son iguales a sesenta grados cada uno" }
    ]
  },

  personal_care: {
    name: "Personal Care",
    description: "Hygiene and grooming",
    icon: Watch,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "care1", english: "Shower", spanish: "Ducha", difficulty: "easy", example: "I take a hot shower every morning to wake up and feel refreshed", exampleTranslation: "Tomo una ducha caliente cada mañana para despertarme y sentirme renovado" },
      { id: "care2", english: "Soap", spanish: "Jabón", difficulty: "easy", example: "Always wash your hands with soap and water before eating meals", exampleTranslation: "Siempre lávate las manos con jabón y agua antes de comer" },
      { id: "care3", english: "Shampoo", spanish: "Champú", difficulty: "easy", example: "I use organic shampoo that's gentle on my hair and scalp", exampleTranslation: "Uso champú orgánico que es suave con mi cabello y cuero cabelludo" },
      { id: "care4", english: "Toothbrush", spanish: "Cepillo de dientes", difficulty: "easy", example: "Dentists recommend changing your toothbrush every three months for best hygiene", exampleTranslation: "Los dentistas recomiendan cambiar tu cepillo de dientes cada tres meses para mejor higiene" },
      { id: "care5", english: "Toothpaste", spanish: "Pasta de dientes", difficulty: "easy", example: "This toothpaste has fluoride to prevent cavities and strengthen teeth", exampleTranslation: "Esta pasta de dientes tiene flúor para prevenir caries y fortalecer los dientes" },
      { id: "care6", english: "Comb", spanish: "Peine", difficulty: "easy", example: "I use a wide-tooth comb to gently detangle my wet hair after washing", exampleTranslation: "Uso un peine de dientes anchos para desenredar suavemente mi cabello mojado después de lavar" },
      { id: "care7", english: "Hairbrush", spanish: "Cepillo para el cabello", difficulty: "medium", example: "My daughter brushes her long hair one hundred times with her hairbrush every night", exampleTranslation: "Mi hija cepilla su cabello largo cien veces con su cepillo para el cabello cada noche" },
      { id: "care8", english: "Razor", spanish: "Navaja", difficulty: "medium", example: "He shaves every morning with a sharp razor and shaving cream", exampleTranslation: "Él se afeita cada mañana con una navaja afilada y crema de afeitar" },
      { id: "care9", english: "Deodorant", spanish: "Desodorante", difficulty: "medium", example: "Apply deodorant after showering to stay fresh throughout the busy day", exampleTranslation: "Aplica desodorante después de ducharte para mantenerte fresco durante todo el día" },
      { id: "care10", english: "Moisturizer", spanish: "Crema hidratante", difficulty: "medium", example: "I use moisturizer on my face every night to keep my skin soft and healthy", exampleTranslation: "Uso crema hidratante en mi cara cada noche para mantener mi piel suave y saludable" },
      { id: "care11", english: "Nail clipper", spanish: "Cortaúñas", difficulty: "medium", example: "I trim my nails carefully with a nail clipper once a week", exampleTranslation: "Me corto las uñas cuidadosamente con un cortaúñas una vez por semana" },
      { id: "care12", english: "Towel", spanish: "Toalla", difficulty: "medium", example: "Grab a clean towel from the closet after your shower", exampleTranslation: "Toma una toalla limpia del armario después de tu ducha" },
      { id: "care13", english: "I need to wash my hair", spanish: "Necesito lavarme el cabello", difficulty: "hard", example: "My hair feels greasy, I really need to wash my hair tonight before bed", exampleTranslation: "Mi cabello se siente grasoso, realmente necesito lavarme el cabello esta noche antes de dormir" },
      { id: "care14", english: "Do you have a hairdryer?", spanish: "¿Tienes un secador de pelo?", difficulty: "hard", example: "My hair is still wet from the shower, do you have a hairdryer I can use?", exampleTranslation: "Mi cabello todavía está mojado de la ducha, ¿tienes un secador de pelo que pueda usar?" },
      { id: "care15", english: "I ran out of shampoo", spanish: "Se me acabó el champú", difficulty: "hard", example: "I ran out of shampoo this morning, I need to buy some at the store today", exampleTranslation: "Se me acabó el champú esta mañana, necesito comprar algo en la tienda hoy" }
    ]
  },

  textures_qualities: {
    name: "Textures & Qualities",
    description: "How things feel and appear",
    icon: Layers,
    color: "from-rose-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "tex1", english: "Soft", spanish: "Suave", difficulty: "easy", example: "This blanket is incredibly soft and cozy, perfect for cold winter nights", exampleTranslation: "Esta manta es increíblemente suave y acogedora, perfecta para noches frías de invierno" },
      { id: "tex2", english: "Hard", spanish: "Duro", difficulty: "easy", example: "The wooden bench is too hard to sit on comfortably for long periods", exampleTranslation: "El banco de madera es demasiado duro para sentarse cómodamente por períodos largos" },
      { id: "tex3", english: "Smooth", spanish: "Liso", difficulty: "easy", example: "The polished marble floor is smooth and shiny after professional cleaning", exampleTranslation: "El piso de mármol pulido está liso y brillante después de la limpieza profesional" },
      { id: "tex4", english: "Rough", spanish: "Áspero", difficulty: "easy", example: "The tree bark feels rough and textured when you touch it", exampleTranslation: "La corteza del árbol se siente áspera y con textura cuando la tocas" },
      { id: "tex5", english: "Wet", spanish: "Mojado", difficulty: "easy", example: "Don't sit on the bench, it's still wet from the rain this morning", exampleTranslation: "No te sientes en el banco, todavía está mojado por la lluvia de esta mañana" },
      { id: "tex6", english: "Dry", spanish: "Seco", difficulty: "easy", example: "Make sure your hands are completely dry before touching electrical equipment", exampleTranslation: "Asegúrate de que tus manos estén completamente secas antes de tocar equipo eléctrico" },
      { id: "tex7", english: "Sticky", spanish: "Pegajoso", difficulty: "medium", example: "My hands are sticky from eating candy, I need to wash them thoroughly", exampleTranslation: "Mis manos están pegajosas de comer dulces, necesito lavarlas completamente" },
      { id: "tex8", english: "Slippery", spanish: "Resbaladizo", difficulty: "medium", example: "The floor is slippery when wet, so walk carefully to avoid falling", exampleTranslation: "El piso está resbaladizo cuando está mojado, así que camina con cuidado para evitar caer" },
      { id: "tex9", english: "Shiny", spanish: "Brillante", difficulty: "medium", example: "The new car has a shiny paint finish that reflects the sunlight beautifully", exampleTranslation: "El auto nuevo tiene un acabado de pintura brillante que refleja la luz del sol hermosamente" },
      { id: "tex10", english: "Dull", spanish: "Opaco", difficulty: "medium", example: "The silver needs polishing because it's looking dull and tarnished", exampleTranslation: "La plata necesita pulirse porque se ve opaca y empañada" },
      { id: "tex11", english: "Fuzzy", spanish: "Peludo", difficulty: "medium", example: "This fuzzy sweater keeps me warm and feels comfortable against my skin", exampleTranslation: "Este suéter peludo me mantiene caliente y se siente cómodo contra mi piel" },
      { id: "tex12", english: "Crispy", spanish: "Crujiente", difficulty: "medium", example: "The bacon was cooked perfectly, nice and crispy just the way I like it", exampleTranslation: "El tocino estaba cocinado perfectamente, bonito y crujiente justo como me gusta" },
      { id: "tex13", english: "How does it feel?", spanish: "¿Cómo se siente?", difficulty: "hard", example: "Before buying this fabric, touch it and tell me how does it feel to you?", exampleTranslation: "Antes de comprar esta tela, tócala y dime ¿cómo se siente para ti?" },
      { id: "tex14", english: "It's very comfortable", spanish: "Es muy cómodo", difficulty: "hard", example: "This new mattress is very comfortable, I've been sleeping much better on it", exampleTranslation: "Este colchón nuevo es muy cómodo, he estado durmiendo mucho mejor en él" },
      { id: "tex15", english: "The surface is rough", spanish: "La superficie está áspera", difficulty: "hard", example: "Sand the wood carefully because the surface is still rough in some spots", exampleTranslation: "Lija la madera cuidadosamente porque la superficie todavía está áspera en algunos lugares" }
    ]
  },

  actions_verbs: {
    name: "Common Actions",
    description: "Everyday action verbs",
    icon: Box,
    color: "from-emerald-400 to-green-500",
    level: "beginner",
    words: [
      { id: "act1", english: "Walk", spanish: "Caminar", difficulty: "easy", example: "I walk to work every morning because it's good exercise and saves money", exampleTranslation: "Camino al trabajo cada mañana porque es buen ejercicio y ahorra dinero" },
      { id: "act2", english: "Run", spanish: "Correr", difficulty: "easy", example: "I run in the park three times a week to stay healthy and fit", exampleTranslation: "Corro en el parque tres veces por semana para mantenerme saludable y en forma" },
      { id: "act3", english: "Jump", spanish: "Saltar", difficulty: "easy", example: "The children love to jump on the trampoline in the backyard", exampleTranslation: "A los niños les encanta saltar en el trampolín en el patio trasero" },
      { id: "act4", english: "Sit", spanish: "Sentarse", difficulty: "easy", example: "Please sit down and make yourself comfortable while I prepare coffee", exampleTranslation: "Por favor siéntate y ponte cómodo mientras preparo café" },
      { id: "act5", english: "Stand", spanish: "Estar de pie", difficulty: "easy", example: "The teacher asked everyone to stand up when the principal entered the classroom", exampleTranslation: "El maestro pidió a todos que se pusieran de pie cuando el director entró al salón" },
      { id: "act6", english: "Sleep", spanish: "Dormir", difficulty: "easy", example: "I try to sleep at least eight hours every night for good health", exampleTranslation: "Trato de dormir al menos ocho horas cada noche para buena salud" },
      { id: "act7", english: "Wake up", spanish: "Despertarse", difficulty: "medium", example: "I wake up naturally at six o'clock without needing an alarm clock", exampleTranslation: "Me despierto naturalmente a las seis sin necesitar un despertador" },
      { id: "act8", english: "Climb", spanish: "Escalar", difficulty: "medium", example: "We're planning to climb the mountain next weekend if the weather is good", exampleTranslation: "Planeamos escalar la montaña el próximo fin de semana si el clima es bueno" },
      { id: "act9", english: "Swim", spanish: "Nadar", difficulty: "medium", example: "I learned to swim when I was five years old at summer camp", exampleTranslation: "Aprendí a nadar cuando tenía cinco años en el campamento de verano" },
      { id: "act10", english: "Dance", spanish: "Bailar", difficulty: "medium", example: "They danced together all night at the wedding celebration", exampleTranslation: "Ellos bailaron juntos toda la noche en la celebración de la boda" },
      { id: "act11", english: "Throw", spanish: "Lanzar", difficulty: "medium", example: "Throw the ball gently to your little sister so she can catch it", exampleTranslation: "Lanza la pelota suavemente a tu hermana pequeña para que pueda atraparla" },
      { id: "act12", english: "Catch", spanish: "Atrapar", difficulty: "medium", example: "The baseball player made an amazing catch to win the championship game", exampleTranslation: "El jugador de béisbol hizo una atrapada increíble para ganar el juego del campeonato" },
      { id: "act13", english: "Let's go for a walk", spanish: "Vamos a caminar", difficulty: "hard", example: "The weather is beautiful today, let's go for a walk in the park together", exampleTranslation: "El clima está hermoso hoy, vamos a caminar juntos en el parque" },
      { id: "act14", english: "I'm too tired to move", spanish: "Estoy demasiado cansado para moverme", difficulty: "hard", example: "After working twelve hours straight, I'm too tired to move from this couch", exampleTranslation: "Después de trabajar doce horas seguidas, estoy demasiado cansado para moverme de este sofá" },
      { id: "act15", english: "Can you teach me how?", spanish: "¿Puedes enseñarme cómo?", difficulty: "hard", example: "I've never learned to swim properly, can you teach me how this summer?", exampleTranslation: "Nunca aprendí a nadar correctamente, ¿puedes enseñarme cómo este verano?" }
    ]
  },

  quantities_amounts: {
    name: "Quantities & Amounts",
    description: "Expressing amounts",
    icon: Ruler,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "quan1", english: "Many", spanish: "Muchos", difficulty: "easy", example: "There are many reasons why I love living in this beautiful city", exampleTranslation: "Hay muchas razones por las que amo vivir en esta hermosa ciudad" },
      { id: "quan2", english: "Few", spanish: "Pocos", difficulty: "easy", example: "Only a few people know about this secret restaurant with amazing food", exampleTranslation: "Solo pocas personas conocen este restaurante secreto con comida increíble" },
      { id: "quan3", english: "Some", spanish: "Algunos", difficulty: "easy", example: "I need to buy some groceries at the supermarket this afternoon", exampleTranslation: "Necesito comprar algunos comestibles en el supermercado esta tarde" },
      { id: "quan4", english: "All", spanish: "Todos", difficulty: "easy", example: "All the students passed the difficult final exam with good grades", exampleTranslation: "Todos los estudiantes aprobaron el difícil examen final con buenas calificaciones" },
      { id: "quan5", english: "None", spanish: "Ninguno", difficulty: "easy", example: "I checked the refrigerator but there's none of the milk left", exampleTranslation: "Revisé el refrigerador pero no queda ninguna de la leche" },
      { id: "quan6", english: "Half", spanish: "Mitad", difficulty: "easy", example: "I ate half of the pizza and saved the other half for tomorrow", exampleTranslation: "Comí la mitad de la pizza y guardé la otra mitad para mañana" },
      { id: "quan7", english: "Double", spanish: "Doble", difficulty: "medium", example: "The price has increased to double what it was last year", exampleTranslation: "El precio ha aumentado al doble de lo que era el año pasado" },
      { id: "quan8", english: "Triple", difficulty: "medium", example: "Sales have tripled since we launched the new marketing campaign", exampleTranslation: "Las ventas se han triplicado desde que lanzamos la nueva campaña de marketing" },
      { id: "quan9", english: "Dozen", spanish: "Docena", difficulty: "medium", example: "I bought a dozen fresh eggs from the farmer's market this morning", exampleTranslation: "Compré una docena de huevos frescos en el mercado de agricultores esta mañana" },
      { id: "quan10", english: "Pair", spanish: "Par", difficulty: "medium", example: "I need to buy a new pair of running shoes for my daily workouts", exampleTranslation: "Necesito comprar un nuevo par de zapatos para correr para mis entrenamientos diarios" },
      { id: "quan11", english: "Plenty", spanish: "Abundante", difficulty: "medium", example: "Don't worry, we have plenty of food for all the guests at the party", exampleTranslation: "No te preocupes, tenemos comida abundante para todos los invitados en la fiesta" },
      { id: "quan12", english: "Excess", spanish: "Exceso", difficulty: "medium", example: "Remove any excess water from the vegetables before cooking them", exampleTranslation: "Quita cualquier exceso de agua de las verduras antes de cocinarlas" },
      { id: "quan13", english: "How much do you need?", spanish: "¿Cuánto necesitas?", difficulty: "hard", example: "I'm going to the store for ingredients, how much sugar do you need for the recipe?", exampleTranslation: "Voy a la tienda por ingredientes, ¿cuánto azúcar necesitas para la receta?" },
      { id: "quan14", english: "That's more than enough", spanish: "Eso es más que suficiente", difficulty: "hard", example: "You've given me so much help already, that's more than enough, thank you", exampleTranslation: "Ya me has dado tanta ayuda, eso es más que suficiente, gracias" },
      { id: "quan15", english: "We're running low", spanish: "Se nos está acabando", difficulty: "hard", example: "We're running low on coffee, someone should buy more before we run out completely", exampleTranslation: "Se nos está acabando el café, alguien debería comprar más antes de que se nos acabe completamente" }
    ]
  },

  containers_packaging: {
    name: "Containers & Packaging",
    description: "Things that hold items",
    icon: Box,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "cont1", english: "Box", spanish: "Caja", difficulty: "easy", example: "I packed all my books carefully in sturdy cardboard boxes for moving", exampleTranslation: "Empaqueté todos mis libros cuidadosamente en cajas de cartón resistentes para la mudanza" },
      { id: "cont2", english: "Bag", spanish: "Bolsa", difficulty: "easy", example: "Please bring your own reusable bags when shopping at the grocery store", exampleTranslation: "Por favor trae tus propias bolsas reutilizables cuando compres en la tienda de comestibles" },
      { id: "cont3", english: "Bottle", spanish: "Botella", difficulty: "easy", example: "I always carry a water bottle with me to stay hydrated throughout the day", exampleTranslation: "Siempre llevo una botella de agua conmigo para mantenerme hidratado durante el día" },
      { id: "cont4", english: "Can", spanish: "Lata", difficulty: "easy", example: "This can of soup is perfect for a quick and easy lunch", exampleTranslation: "Esta lata de sopa es perfecta para un almuerzo rápido y fácil" },
      { id: "cont5", english: "Jar", spanish: "Frasco", difficulty: "easy", example: "Store the homemade jam in a clean glass jar with a tight lid", exampleTranslation: "Guarda la mermelada casera en un frasco de vidrio limpio con una tapa ajustada" },
      { id: "cont6", english: "Container", spanish: "Recipiente", difficulty: "easy", example: "Keep the leftovers in an airtight container in the refrigerator", exampleTranslation: "Guarda las sobras en un recipiente hermético en el refrigerador" },
      { id: "cont7", english: "Carton", spanish: "Cartón", difficulty: "medium", example: "Buy a carton of milk and a carton of orange juice from the store", exampleTranslation: "Compra un cartón de leche y un cartón de jugo de naranja de la tienda" },
      { id: "cont8", english: "Package", spanish: "Paquete", difficulty: "medium", example: "A delivery package from my online order arrived at my doorstep this morning", exampleTranslation: "Un paquete de entrega de mi pedido en línea llegó a mi puerta esta mañana" },
      { id: "cont9", english: "Wrapper", spanish: "Envoltorio", difficulty: "medium", example: "Please throw away the candy wrapper in the trash bin, not on the ground", exampleTranslation: "Por favor tira el envoltorio del dulce en el bote de basura, no en el suelo" },
      { id: "cont10", english: "Envelope", spanish: "Sobre", difficulty: "medium", example: "Write the address clearly on the envelope before mailing the important letter", exampleTranslation: "Escribe la dirección claramente en el sobre antes de enviar la carta importante" },
      { id: "cont11", english: "Basket", spanish: "Canasta", difficulty: "medium", example: "She arranged fresh flowers in a beautiful wicker basket for the table", exampleTranslation: "Ella arregló flores frescas en una hermosa canasta de mimbre para la mesa" },
      { id: "cont12", english: "Bucket", spanish: "Cubeta", difficulty: "medium", example: "Fill the bucket with warm soapy water for washing the car", exampleTranslation: "Llena la cubeta con agua jabonosa tibia para lavar el auto" },
      { id: "cont13", english: "Can you pass me that box?", spanish: "¿Me puedes pasar esa caja?", difficulty: "hard", example: "I need the supplies from storage, can you pass me that box on the top shelf?", exampleTranslation: "Necesito los suministros del almacén, ¿me puedes pasar esa caja en el estante superior?" },
      { id: "cont14", english: "What's in the package?", spanish: "¿Qué hay en el paquete?", difficulty: "hard", example: "A mysterious package arrived today with no return address, what's in the package?", exampleTranslation: "Un paquete misterioso llegó hoy sin dirección de remitente, ¿qué hay en el paquete?" },
      { id: "cont15", english: "Do you have a bag?", spanish: "¿Tienes una bolsa?", difficulty: "hard", example: "I bought more than I expected, do you have an extra bag I can use?", exampleTranslation: "Compré más de lo que esperaba, ¿tienes una bolsa extra que pueda usar?" }
    ]
  },

  opposites_contrasts: {
    name: "Opposites & Contrasts",
    description: "Opposite word pairs",
    icon: Layers,
    color: "from-violet-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "opp1", english: "Hot", spanish: "Caliente", difficulty: "easy", example: "Be careful, the coffee is very hot and might burn your tongue", exampleTranslation: "Ten cuidado, el café está muy caliente y podría quemar tu lengua" },
      { id: "opp2", english: "Cold", spanish: "Frío", difficulty: "easy", example: "The ice cream is cold and refreshing on this hot summer day", exampleTranslation: "El helado está frío y refrescante en este caluroso día de verano" },
      { id: "opp3", english: "Fast", spanish: "Rápido", difficulty: "easy", example: "This sports car is incredibly fast and can reach high speeds quickly", exampleTranslation: "Este auto deportivo es increíblemente rápido y puede alcanzar altas velocidades rápidamente" },
      { id: "opp4", english: "Slow", spanish: "Lento", difficulty: "easy", example: "The internet connection is frustratingly slow today for some unknown reason", exampleTranslation: "La conexión a internet está frustrantemente lenta hoy por alguna razón desconocida" },
      { id: "opp5", english: "Easy", spanish: "Fácil", difficulty: "easy", example: "This puzzle is easy enough for young children to solve by themselves", exampleTranslation: "Este rompecabezas es lo suficientemente fácil para que los niños pequeños lo resuelvan solos" },
      { id: "opp6", english: "Difficult", spanish: "Difícil", difficulty: "easy", example: "Learning a new language is difficult but incredibly rewarding in the long run", exampleTranslation: "Aprender un nuevo idioma es difícil pero increíblemente gratificante a largo plazo" },
      { id: "opp7", english: "Light", spanish: "Ligero", difficulty: "medium", example: "This suitcase is surprisingly light even though it's completely full of clothes", exampleTranslation: "Esta maleta es sorprendentemente ligera aunque está completamente llena de ropa" },
      { id: "opp8", english: "Dark", spanish: "Oscuro", difficulty: "medium", example: "The room is too dark to read comfortably, please turn on more lights", exampleTranslation: "La habitación está demasiado oscura para leer cómodamente, por favor enciende más luces" },
      { id: "opp9", english: "Strong", spanish: "Fuerte", difficulty: "medium", example: "This coffee is too strong for me, I prefer it weaker with more milk", exampleTranslation: "Este café es demasiado fuerte para mí, lo prefiero más débil con más leche" },
      { id: "opp10", english: "Weak", spanish: "Débil", difficulty: "medium", example: "The tea is too weak and tasteless, it needs to steep longer", exampleTranslation: "El té está demasiado débil e insípido, necesita reposar más tiempo" },
      { id: "opp11", english: "Near", spanish: "Cerca", difficulty: "medium", example: "The supermarket is very near our house, just a five-minute walk away", exampleTranslation: "El supermercado está muy cerca de nuestra casa, solo a cinco minutos caminando" },
      { id: "opp12", english: "Far", spanish: "Lejos", difficulty: "medium", example: "My office is far from home, it takes an hour to commute each way", exampleTranslation: "Mi oficina está lejos de casa, toma una hora de viaje en cada dirección" },
      { id: "opp13", english: "Is it near or far?", spanish: "¿Está cerca o lejos?", difficulty: "hard", example: "I've never been to that restaurant before, is it near or far from here?", exampleTranslation: "Nunca he estado en ese restaurante antes, ¿está cerca o lejos de aquí?" },
      { id: "opp14", english: "It's the opposite", spanish: "Es lo opuesto", difficulty: "hard", example: "You're going the wrong direction, the station is the opposite way from here", exampleTranslation: "Vas en la dirección equivocada, la estación es en la dirección opuesta desde aquí" },
      { id: "opp15", english: "Quite the contrary", spanish: "Todo lo contrario", difficulty: "hard", example: "I'm not tired at all, quite the contrary, I feel energized and ready to work", exampleTranslation: "No estoy cansado en absoluto, todo lo contrario, me siento energizado y listo para trabajar" }
    ]
  },

  communication_phrases: {
    name: "Communication Phrases",
    description: "Common expressions for talking",
    icon: Building2,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "comm1", english: "I understand", spanish: "Entiendo", difficulty: "easy", example: "Yes, I understand completely what you're trying to explain to me", exampleTranslation: "Sí, entiendo completamente lo que estás tratando de explicarme" },
      { id: "comm2", english: "I don't understand", spanish: "No entiendo", difficulty: "easy", example: "Sorry, I don't understand this word, could you please explain it again?", exampleTranslation: "Lo siento, no entiendo esta palabra, ¿podrías explicarla de nuevo por favor?" },
      { id: "comm3", english: "Repeat please", spanish: "Repite por favor", difficulty: "easy", example: "I didn't hear you clearly because of the noise, repeat please", exampleTranslation: "No te escuché claramente por el ruido, repite por favor" },
      { id: "comm4", english: "Speak slower", spanish: "Habla más despacio", difficulty: "easy", example: "You're talking too fast for me to follow, please speak slower", exampleTranslation: "Estás hablando demasiado rápido para que pueda seguir, por favor habla más despacio" },
      { id: "comm5", english: "What does this mean?", spanish: "¿Qué significa esto?", difficulty: "easy", example: "I've never seen this word before, what does this mean in English?", exampleTranslation: "Nunca he visto esta palabra antes, ¿qué significa esto en inglés?" },
      { id: "comm6", english: "Can you explain?", spanish: "¿Puedes explicar?", difficulty: "easy", example: "This concept is confusing to me, can you explain it in simpler terms?", exampleTranslation: "Este concepto me confunde, ¿puedes explicarlo en términos más simples?" },
      { id: "comm7", english: "Let me think", spanish: "Déjame pensar", difficulty: "medium", example: "That's a difficult question, let me think about it for a moment", exampleTranslation: "Esa es una pregunta difícil, déjame pensar sobre ello por un momento" },
      { id: "comm8", english: "I agree", spanish: "Estoy de acuerdo", difficulty: "medium", example: "I completely agree with your analysis of the current situation", exampleTranslation: "Estoy completamente de acuerdo con tu análisis de la situación actual" },
      { id: "comm9", english: "I disagree", spanish: "No estoy de acuerdo", difficulty: "medium", example: "Respectfully, I disagree with that conclusion based on the evidence we have", exampleTranslation: "Con respeto, no estoy de acuerdo con esa conclusión basada en la evidencia que tenemos" },
      { id: "comm10", english: "In my opinion", spanish: "En mi opinión", difficulty: "medium", example: "In my opinion, the best solution is to wait and gather more information first", exampleTranslation: "En mi opinión, la mejor solución es esperar y reunir más información primero" },
      { id: "comm11", english: "That makes sense", spanish: "Eso tiene sentido", difficulty: "medium", example: "After your explanation, that makes perfect sense to me now", exampleTranslation: "Después de tu explicación, eso tiene perfecto sentido para mí ahora" },
      { id: "comm12", english: "I'm confused", spanish: "Estoy confundido", difficulty: "medium", example: "I'm confused about the directions you gave me, can we go over them again?", exampleTranslation: "Estoy confundido sobre las direcciones que me diste, ¿podemos repasarlas de nuevo?" },
      { id: "comm13", english: "Could you say that again?", spanish: "¿Podrías decir eso de nuevo?", difficulty: "hard", example: "I'm sorry, I was distracted for a moment, could you say that again please?", exampleTranslation: "Lo siento, estuve distraído por un momento, ¿podrías decir eso de nuevo por favor?" },
      { id: "comm14", english: "What do you think?", spanish: "¿Qué piensas?", difficulty: "hard", example: "I've explained my idea, now what do you think about this proposal honestly?", exampleTranslation: "He explicado mi idea, ahora ¿qué piensas sobre esta propuesta honestamente?" },
      { id: "comm15", english: "Let me explain", spanish: "Déjame explicar", difficulty: "hard", example: "I know it seems complicated, but let me explain the process step by step", exampleTranslation: "Sé que parece complicado, pero déjame explicar el proceso paso a paso" }
    ]
  }
};

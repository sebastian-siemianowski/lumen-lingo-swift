/**
 * ENGLISH → SPANISH FLASHCARDS - PART 7
 * 
 * Native Language: English
 * Target Language: Spanish
 * 
 * This file contains additional flashcard categories (91-100).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  CreditCard,
  Ambulance,
  Calendar,
  Bus,
  Phone,
  Briefcase,
  Map,
  Puzzle,
  MessageSquareWarning,
  CalendarCheck,
  Trophy,
  GraduationCap
} from "lucide-react";

export const flashcardsCategories_part7 = {
  banking_finance: {
    name: "Banking & Finance",
    description: "Money management and banking services",
    icon: CreditCard,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { id: "bank1", english: "Bank", spanish: "Banco", difficulty: "easy", example: "Voy al banco todos los viernes para depositar mi cheque de pago", exampleTranslation: "I go to the bank every Friday to deposit my paycheck" },
      { id: "bank2", english: "Account", spanish: "Cuenta", difficulty: "easy", example: "Abrí una cuenta de ahorros nueva para mi fondo de emergencia", exampleTranslation: "I opened a new savings account for my emergency fund" },
      { id: "bank3", english: "Money", spanish: "Dinero", difficulty: "easy", example: "Necesito retirar dinero del cajero automático antes de ir de compras", exampleTranslation: "I need to withdraw money from the ATM before going shopping" },
      { id: "bank4", english: "Credit card", spanish: "Tarjeta de crédito", difficulty: "easy", example: "Mi tarjeta de crédito ofrece puntos de recompensa en cada compra", exampleTranslation: "My credit card offers reward points on every purchase" },
      { id: "bank5", english: "ATM", spanish: "Cajero automático", difficulty: "easy", example: "El cajero automático más cercano está en la esquina de la calle", exampleTranslation: "The nearest ATM is on the street corner" },
      { id: "bank6", english: "Cash", spanish: "Efectivo", difficulty: "easy", example: "Prefiero pagar en efectivo cuando compro en tiendas pequeñas", exampleTranslation: "I prefer to pay in cash when shopping at small stores" },
      { id: "bank7", english: "Loan", spanish: "Préstamo", difficulty: "medium", example: "Solicité un préstamo bancario para comprar mi primera casa", exampleTranslation: "I applied for a bank loan to buy my first house" },
      { id: "bank8", english: "Interest rate", spanish: "Tasa de interés", difficulty: "medium", example: "La tasa de interés de mi cuenta de ahorros es del dos por ciento anual", exampleTranslation: "The interest rate on my savings account is two percent annually" },
      { id: "bank9", english: "Mortgage", spanish: "Hipoteca", difficulty: "medium", example: "Estamos pagando la hipoteca de nuestra casa en treinta años", exampleTranslation: "We're paying our house mortgage over thirty years" },
      { id: "bank10", english: "Investment", spanish: "Inversión", difficulty: "medium", example: "Hice una inversión en acciones de tecnología el año pasado", exampleTranslation: "I made an investment in technology stocks last year" },
      { id: "bank11", english: "Transaction", spanish: "Transacción", difficulty: "medium", example: "Todas mis transacciones bancarias están protegidas con encriptación", exampleTranslation: "All my bank transactions are protected with encryption" },
      { id: "bank12", english: "Balance", spanish: "Saldo", difficulty: "medium", example: "Reviso el saldo de mi cuenta bancaria cada semana", exampleTranslation: "I check my bank account balance every week" },
      { id: "bank13", english: "I need to transfer money", spanish: "Necesito transferir dinero", difficulty: "hard", example: "Necesito transferir dinero a mi familia que vive en otro país", exampleTranslation: "I need to transfer money to my family living in another country" },
      { id: "bank14", english: "What's the exchange rate?", spanish: "¿Cuál es el tipo de cambio?", difficulty: "hard", example: "¿Cuál es el tipo de cambio actual del dólar al euro?", exampleTranslation: "What's the current exchange rate from dollar to euro?" },
      { id: "bank15", english: "I'd like to open an account", spanish: "Me gustaría abrir una cuenta", difficulty: "hard", example: "Me gustaría abrir una cuenta corriente con tarjeta de débito incluida", exampleTranslation: "I'd like to open a checking account with a debit card included" }
    ]
  },

  emergencies_first_aid: {
    name: "Emergencies & First Aid",
    description: "Emergency situations and medical help",
    icon: Ambulance,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "emerg1", english: "Emergency", spanish: "Emergencia", difficulty: "easy", example: "Llama al número de emergencias si la situación es grave", exampleTranslation: "Call the emergency number if the situation is serious" },
      { id: "emerg2", english: "Help", spanish: "Ayuda", difficulty: "easy", example: "¡Necesito ayuda urgente! Alguien se cayó en la escalera", exampleTranslation: "I need urgent help! Someone fell on the stairs" },
      { id: "emerg3", english: "Ambulance", spanish: "Ambulancia", difficulty: "easy", example: "La ambulancia llegó en menos de diez minutos", exampleTranslation: "The ambulance arrived in less than ten minutes" },
      { id: "emerg4", english: "Fire", spanish: "Fuego", difficulty: "easy", example: "Huele a fuego, creo que algo se está quemando", exampleTranslation: "It smells like fire, I think something is burning" },
      { id: "emerg5", english: "Accident", spanish: "Accidente", difficulty: "easy", example: "Hubo un accidente de tráfico en la autopista esta mañana", exampleTranslation: "There was a traffic accident on the highway this morning" },
      { id: "emerg6", english: "Danger", spanish: "Peligro", difficulty: "easy", example: "Hay una señal de peligro cerca del acantilado", exampleTranslation: "There's a danger sign near the cliff" },
      { id: "emerg7", english: "First aid", spanish: "Primeros auxilios", difficulty: "medium", example: "Aprendí técnicas de primeros auxilios en un curso especializado", exampleTranslation: "I learned first aid techniques in a specialized course" },
      { id: "emerg8", english: "Bandage", spanish: "Vendaje", difficulty: "medium", example: "Necesito un vendaje limpio para cubrir la herida profunda", exampleTranslation: "I need a clean bandage to cover the deep wound" },
      { id: "emerg9", english: "CPR", spanish: "RCP", difficulty: "medium", example: "El paramédico realizó RCP hasta que llegó la ambulancia", exampleTranslation: "The paramedic performed CPR until the ambulance arrived" },
      { id: "emerg10", english: "Evacuate", spanish: "Evacuar", difficulty: "medium", example: "Debemos evacuar el edificio inmediatamente por seguridad", exampleTranslation: "We must evacuate the building immediately for safety" },
      { id: "emerg11", english: "Fire extinguisher", spanish: "Extintor", difficulty: "medium", example: "El extintor está ubicado junto a la salida de emergencia", exampleTranslation: "The fire extinguisher is located next to the emergency exit" },
      { id: "emerg12", english: "Paramedic", spanish: "Paramédico", difficulty: "medium", example: "Los paramédicos llegaron rápidamente y estabilizaron al paciente", exampleTranslation: "The paramedics arrived quickly and stabilized the patient" },
      { id: "emerg13", english: "Call an ambulance!", spanish: "¡Llama una ambulancia!", difficulty: "hard", example: "¡Llama una ambulancia inmediatamente! Esta persona necesita atención médica urgente", exampleTranslation: "Call an ambulance immediately! This person needs urgent medical attention" },
      { id: "emerg14", english: "Is anyone hurt?", spanish: "¿Alguien está herido?", difficulty: "hard", example: "¿Alguien está herido después del accidente? Necesito saberlo ahora", exampleTranslation: "Is anyone hurt after the accident? I need to know now" },
      { id: "emerg15", english: "Stay calm and don't move", spanish: "Mantén la calma y no te muevas", difficulty: "hard", example: "Mantén la calma y no te muevas hasta que llegue la ayuda médica", exampleTranslation: "Stay calm and don't move until medical help arrives" }
    ]
  },

  holidays_celebrations: {
    name: "Holidays & Celebrations",
    description: "Special holidays and festive traditions",
    icon: Calendar,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "hol1", english: "Holiday", spanish: "Fiesta", difficulty: "easy", example: "La fiesta nacional es un día de celebración en todo el país", exampleTranslation: "The national holiday is a day of celebration throughout the country" },
      { id: "hol2", english: "Christmas", spanish: "Navidad", difficulty: "easy", example: "La Navidad es mi época favorita del año para estar con familia", exampleTranslation: "Christmas is my favorite time of year to be with family" },
      { id: "hol3", english: "Birthday", spanish: "Cumpleaños", difficulty: "easy", example: "Mi cumpleaños es el quince de junio y siempre hago una gran fiesta", exampleTranslation: "My birthday is June 15th and I always throw a big party" },
      { id: "hol4", english: "New Year", spanish: "Año Nuevo", difficulty: "easy", example: "Celebramos el Año Nuevo con fuegos artificiales y champán", exampleTranslation: "We celebrate New Year with fireworks and champagne" },
      { id: "hol5", english: "Easter", spanish: "Pascua", difficulty: "easy", example: "En Pascua los niños buscan huevos de chocolate escondidos en el jardín", exampleTranslation: "At Easter children search for chocolate eggs hidden in the garden" },
      { id: "hol6", english: "Thanksgiving", spanish: "Acción de Gracias", difficulty: "easy", example: "En Acción de Gracias compartimos una comida especial con toda la familia", exampleTranslation: "On Thanksgiving we share a special meal with the whole family" },
      { id: "hol7", english: "Halloween", spanish: "Noche de Brujas", difficulty: "medium", example: "Los niños se disfrazan en la Noche de Brujas y piden dulces", exampleTranslation: "Children dress up on Halloween and ask for candy" },
      { id: "hol8", english: "Valentine's Day", spanish: "Día de San Valentín", difficulty: "medium", example: "El Día de San Valentín es perfecto para expresar amor a tu pareja", exampleTranslation: "Valentine's Day is perfect for expressing love to your partner" },
      { id: "hol9", english: "Independence Day", spanish: "Día de la Independencia", difficulty: "medium", example: "El Día de la Independencia lo celebramos con desfiles y eventos patrióticos", exampleTranslation: "We celebrate Independence Day with parades and patriotic events" },
      { id: "hol10", english: "Tradition", spanish: "Tradición", difficulty: "medium", example: "Cada familia tiene sus propias tradiciones especiales para las fiestas", exampleTranslation: "Each family has its own special traditions for the holidays" },
      { id: "hol11", english: "Costume", spanish: "Disfraz", difficulty: "medium", example: "Los disfraces más creativos ganan premios en la fiesta de Halloween", exampleTranslation: "The most creative costumes win prizes at the Halloween party" },
      { id: "hol12", english: "Fireworks", spanish: "Fuegos artificiales", difficulty: "medium", example: "Los fuegos artificiales iluminan el cielo cada Año Nuevo a medianoche", exampleTranslation: "Fireworks light up the sky every New Year at midnight" },
      { id: "hol13", english: "How do you celebrate?", spanish: "¿Cómo lo celebras?", difficulty: "hard", example: "¿Cómo celebras la Navidad en tu país? Cuéntame sobre tus tradiciones", exampleTranslation: "How do you celebrate Christmas in your country? Tell me about your traditions" },
      { id: "hol14", english: "It's a family tradition", spanish: "Es una tradición familiar", difficulty: "hard", example: "Cocinar juntos en Navidad es una tradición familiar que mantenemos desde hace generaciones", exampleTranslation: "Cooking together at Christmas is a family tradition we've kept for generations" },
      { id: "hol15", english: "Happy holidays!", spanish: "¡Felices fiestas!", difficulty: "hard", example: "¡Felices fiestas a ti y a toda tu familia! Que tengan momentos maravillosos", exampleTranslation: "Happy holidays to you and your whole family! May you have wonderful moments" }
    ]
  },

  transportation_vehicles: {
    name: "Transportation & Vehicles",
    description: "Different modes of transportation",
    icon: Bus,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "trans1", english: "Bus", spanish: "Autobús", difficulty: "easy", example: "Tomo el autobús número doce todas las mañanas para ir al trabajo", exampleTranslation: "I take bus number twelve every morning to go to work" },
      { id: "trans2", english: "Train", spanish: "Tren", difficulty: "easy", example: "El tren de alta velocidad llega a Madrid en solo dos horas", exampleTranslation: "The high-speed train arrives in Madrid in just two hours" },
      { id: "trans3", english: "Airplane", spanish: "Avión", difficulty: "easy", example: "El avión despegará en treinta minutos desde la puerta número cinco", exampleTranslation: "The airplane will take off in thirty minutes from gate number five" },
      { id: "trans4", english: "Bicycle", spanish: "Bicicleta", difficulty: "easy", example: "Voy en bicicleta al parque todos los domingos por la mañana", exampleTranslation: "I go by bicycle to the park every Sunday morning" },
      { id: "trans5", english: "Motorcycle", spanish: "Motocicleta", difficulty: "easy", example: "Mi hermano conduce una motocicleta deportiva de color rojo", exampleTranslation: "My brother rides a red sports motorcycle" },
      { id: "trans6", english: "Taxi", spanish: "Taxi", difficulty: "easy", example: "Llamé un taxi para llegar al aeropuerto a tiempo", exampleTranslation: "I called a taxi to get to the airport on time" },
      { id: "trans7", english: "Subway", spanish: "Metro", difficulty: "medium", example: "El metro es la forma más rápida de moverse por la ciudad grande", exampleTranslation: "The subway is the fastest way to get around the big city" },
      { id: "trans8", english: "Ferry", spanish: "Ferry", difficulty: "medium", example: "Tomamos el ferry para cruzar el río y llegar a la otra orilla", exampleTranslation: "We took the ferry to cross the river and reach the other shore" },
      { id: "trans9", english: "Helicopter", spanish: "Helicóptero", difficulty: "medium", example: "El helicóptero de rescate sobrevoló las montañas buscando a los excursionistas", exampleTranslation: "The rescue helicopter flew over the mountains searching for the hikers" },
      { id: "trans10", english: "Scooter", spanish: "Patinete", difficulty: "medium", example: "Los patinetes eléctricos son muy populares en las ciudades modernas", exampleTranslation: "Electric scooters are very popular in modern cities" },
      { id: "trans11", english: "Tram", spanish: "Tranvía", difficulty: "medium", example: "El tranvía histórico recorre el centro de la ciudad antigua", exampleTranslation: "The historic tram runs through the old city center" },
      { id: "trans12", english: "Ticket", spanish: "Boleto", difficulty: "medium", example: "Compra tu boleto de tren con anticipación para obtener mejor precio", exampleTranslation: "Buy your train ticket in advance to get a better price" },
      { id: "trans13", english: "Which bus goes to...?", spanish: "¿Qué autobús va a...?", difficulty: "hard", example: "Disculpe, ¿qué autobús va al centro comercial desde esta parada?", exampleTranslation: "Excuse me, which bus goes to the mall from this stop?" },
      { id: "trans14", english: "How much is the fare?", spanish: "¿Cuánto cuesta el pasaje?", difficulty: "hard", example: "¿Cuánto cuesta el pasaje de tren a Barcelona ida y vuelta?", exampleTranslation: "How much is the round-trip train fare to Barcelona?" },
      { id: "trans15", english: "I missed my connection", spanish: "Perdí mi conexión", difficulty: "hard", example: "Perdí mi conexión de vuelo por el retraso del primer avión", exampleTranslation: "I missed my flight connection due to the delay of the first plane" }
    ]
  },

  phone_communication: {
    name: "Phones & Communication",
    description: "Phone calls and mobile communication",
    icon: Phone,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "phone1", english: "Call", spanish: "Llamada", difficulty: "easy", example: "Recibí una llamada importante de mi jefe esta mañana", exampleTranslation: "I received an important call from my boss this morning" },
      { id: "phone2", english: "Message", spanish: "Mensaje", difficulty: "easy", example: "Te envié un mensaje de texto con la dirección del restaurante", exampleTranslation: "I sent you a text message with the restaurant address" },
      { id: "phone3", english: "Phone number", spanish: "Número de teléfono", difficulty: "easy", example: "¿Me puedes dar tu número de teléfono para mantenernos en contacto?", exampleTranslation: "Can you give me your phone number to stay in touch?" },
      { id: "phone4", english: "Voicemail", spanish: "Buzón de voz", difficulty: "easy", example: "Dejé un mensaje en tu buzón de voz porque no contestaste", exampleTranslation: "I left a message in your voicemail because you didn't answer" },
      { id: "phone5", english: "Ring", spanish: "Sonar", difficulty: "easy", example: "Mi teléfono está sonando pero no sé quién está llamando", exampleTranslation: "My phone is ringing but I don't know who's calling" },
      { id: "phone6", english: "Answer", spanish: "Contestar", difficulty: "easy", example: "No puedo contestar el teléfono ahora porque estoy conduciendo", exampleTranslation: "I can't answer the phone now because I'm driving" },
      { id: "phone7", english: "Hang up", spanish: "Colgar", difficulty: "medium", example: "Alguien me llamó y colgó sin decir nada", exampleTranslation: "Someone called me and hung up without saying anything" },
      { id: "phone8", english: "Signal", spanish: "Señal", difficulty: "medium", example: "No hay señal de teléfono en esta zona montañosa remota", exampleTranslation: "There's no phone signal in this remote mountainous area" },
      { id: "phone9", english: "Charger", spanish: "Cargador", difficulty: "medium", example: "Olvidé mi cargador de teléfono en la oficina ayer", exampleTranslation: "I forgot my phone charger at the office yesterday" },
      { id: "phone10", english: "Headphones", spanish: "Auriculares", difficulty: "medium", example: "Uso auriculares inalámbricos para hablar por teléfono mientras camino", exampleTranslation: "I use wireless headphones to talk on the phone while walking" },
      { id: "phone11", english: "Video call", spanish: "Videollamada", difficulty: "medium", example: "Tengo una videollamada importante con el equipo a las tres", exampleTranslation: "I have an important video call with the team at three" },
      { id: "phone12", english: "Contact list", spanish: "Lista de contactos", difficulty: "medium", example: "Guardo todos los números importantes en mi lista de contactos", exampleTranslation: "I keep all important numbers in my contact list" },
      { id: "phone13", english: "Can I call you back?", spanish: "¿Te puedo llamar después?", difficulty: "hard", example: "Estoy en una reunión ahora, ¿te puedo llamar después en una hora?", exampleTranslation: "I'm in a meeting now, can I call you back in an hour?" },
      { id: "phone14", english: "The line is busy", spanish: "La línea está ocupada", difficulty: "hard", example: "He intentado llamar varias veces pero la línea siempre está ocupada", exampleTranslation: "I've tried calling several times but the line is always busy" },
      { id: "phone15", english: "You're breaking up", spanish: "Se corta la llamada", difficulty: "hard", example: "Se corta mucho la llamada, creo que tienes mala señal", exampleTranslation: "You're breaking up a lot, I think you have a bad signal" }
    ]
  },

  job_interview_career: {
    name: "Job Interview & Career",
    description: "Job searching and career development",
    icon: Briefcase,
    color: "from-purple-500 to-violet-600",
    level: "advanced",
    words: [
      { id: "job1", english: "Resume", spanish: "Currículum", difficulty: "easy", example: "Actualicé mi currículum con mi experiencia laboral más reciente", exampleTranslation: "I updated my resume with my most recent work experience" },
      { id: "job2", english: "Interview", spanish: "Entrevista", difficulty: "easy", example: "Tengo una entrevista de trabajo importante mañana por la mañana", exampleTranslation: "I have an important job interview tomorrow morning" },
      { id: "job3", english: "Position", spanish: "Puesto", difficulty: "easy", example: "Estoy buscando un puesto de gerente en una empresa internacional", exampleTranslation: "I'm looking for a manager position in an international company" },
      { id: "job4", english: "Salary", spanish: "Salario", difficulty: "easy", example: "El salario ofrecido es competitivo y incluye bonos anuales", exampleTranslation: "The salary offered is competitive and includes annual bonuses" },
      { id: "job5", english: "Experience", spanish: "Experiencia", difficulty: "easy", example: "Tengo cinco años de experiencia trabajando en marketing digital", exampleTranslation: "I have five years of experience working in digital marketing" },
      { id: "job6", english: "Skills", spanish: "Habilidades", difficulty: "easy", example: "Mis habilidades incluyen programación, diseño gráfico y gestión de proyectos", exampleTranslation: "My skills include programming, graphic design and project management" },
      { id: "job7", english: "Qualification", spanish: "Cualificación", difficulty: "medium", example: "Tengo la cualificación necesaria para este puesto técnico especializado", exampleTranslation: "I have the necessary qualification for this specialized technical position" },
      { id: "job8", english: "Reference", spanish: "Referencia", difficulty: "medium", example: "Mi antiguo jefe me dio una referencia laboral excelente", exampleTranslation: "My former boss gave me an excellent job reference" },
      { id: "job9", english: "Promotion", spanish: "Promoción", difficulty: "medium", example: "Después de tres años recibí una promoción a director de departamento", exampleTranslation: "After three years I received a promotion to department director" },
      { id: "job10", english: "Benefits", spanish: "Beneficios", difficulty: "medium", example: "Los beneficios del trabajo incluyen seguro médico y vacaciones pagadas", exampleTranslation: "The job benefits include health insurance and paid vacation" },
      { id: "job11", english: "Career path", spanish: "Trayectoria profesional", difficulty: "medium", example: "Mi trayectoria profesional ha sido variada e interesante", exampleTranslation: "My career path has been varied and interesting" },
      { id: "job12", english: "Networking", spanish: "Establecer contactos", difficulty: "medium", example: "Establecer contactos profesionales es clave para avanzar en tu carrera", exampleTranslation: "Networking is key to advancing in your career" },
      { id: "job13", english: "What are your strengths?", spanish: "¿Cuáles son tus fortalezas?", difficulty: "hard", example: "En una entrevista te preguntarán: ¿Cuáles son tus principales fortalezas profesionales?", exampleTranslation: "In an interview they'll ask you: What are your main professional strengths?" },
      { id: "job14", english: "Why should we hire you?", spanish: "¿Por qué deberíamos contratarte?", difficulty: "hard", example: "¿Por qué deberíamos contratarte a ti en lugar de otros candidatos?", exampleTranslation: "Why should we hire you instead of other candidates?" },
      { id: "job15", english: "I'm a team player", spanish: "Trabajo bien en equipo", difficulty: "hard", example: "Trabajo muy bien en equipo y me adapto fácilmente a diferentes dinámicas", exampleTranslation: "I'm a team player and I adapt easily to different dynamics" }
    ]
  },

  directions_navigation: {
    name: "Directions & Navigation",
    description: "Giving and receiving directions",
    icon: Map,
    color: "from-emerald-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "dir1", english: "Turn", spanish: "Girar", difficulty: "easy", example: "Gira a la derecha en el próximo semáforo", exampleTranslation: "Turn right at the next traffic light" },
      { id: "dir2", english: "Straight", spanish: "Recto", difficulty: "easy", example: "Sigue recto por esta calle hasta llegar a la plaza", exampleTranslation: "Go straight on this street until you reach the plaza" },
      { id: "dir3", english: "Left", spanish: "Izquierda", difficulty: "easy", example: "La tienda está a la izquierda después del banco", exampleTranslation: "The store is on the left after the bank" },
      { id: "dir4", english: "Right", spanish: "Derecha", difficulty: "easy", example: "Gira a la derecha y verás el restaurante inmediatamente", exampleTranslation: "Turn right and you'll see the restaurant immediately" },
      { id: "dir5", english: "Corner", spanish: "Esquina", difficulty: "easy", example: "El café está en la esquina de la calle principal", exampleTranslation: "The cafe is on the corner of the main street" },
      { id: "dir6", english: "Block", spanish: "Cuadra", difficulty: "easy", example: "Camina tres cuadras más y encontrarás la estación de metro", exampleTranslation: "Walk three more blocks and you'll find the subway station" },
      { id: "dir7", english: "Intersection", spanish: "Cruce", difficulty: "medium", example: "En el próximo cruce de calles, dobla a la izquierda", exampleTranslation: "At the next intersection, turn left" },
      { id: "dir8", english: "Landmark", spanish: "Punto de referencia", difficulty: "medium", example: "Usa la catedral como punto de referencia para no perderte", exampleTranslation: "Use the cathedral as a landmark so you don't get lost" },
      { id: "dir9", english: "GPS", spanish: "GPS", difficulty: "medium", example: "El GPS me indica que debo tomar la siguiente salida", exampleTranslation: "The GPS tells me I should take the next exit" },
      { id: "dir10", english: "Lost", spanish: "Perdido", difficulty: "medium", example: "Estoy completamente perdido en esta ciudad que no conozco", exampleTranslation: "I'm completely lost in this city I don't know" },
      { id: "dir11", english: "Navigate", spanish: "Navegar", difficulty: "medium", example: "Es fácil navegar por el centro usando el mapa digital", exampleTranslation: "It's easy to navigate downtown using the digital map" },
      { id: "dir12", english: "Shortcut", spanish: "Atajo", difficulty: "medium", example: "Conozco un atajo secreto para evitar el tráfico pesado", exampleTranslation: "I know a secret shortcut to avoid heavy traffic" },
      { id: "dir13", english: "How do I get there?", spanish: "¿Cómo llego allí?", difficulty: "hard", example: "¿Cómo llego al museo desde la estación de tren? Es mi primera vez aquí", exampleTranslation: "How do I get to the museum from the train station? It's my first time here" },
      { id: "dir14", english: "You can't miss it", spanish: "No tiene pérdida", difficulty: "hard", example: "Es un edificio enorme de color azul, no tiene pérdida", exampleTranslation: "It's a huge blue building, you can't miss it" },
      { id: "dir15", english: "I think we're going the wrong way", spanish: "Creo que vamos en la dirección equivocada", difficulty: "hard", example: "Creo que vamos en la dirección equivocada, deberíamos haber llegado ya", exampleTranslation: "I think we're going the wrong way, we should have arrived already" }
    ]
  },

  hobbies_leisure: {
    name: "Hobbies & Leisure",
    description: "Recreational activities and pastimes",
    icon: Puzzle,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    words: [
      { id: "hobby1", english: "Hobby", spanish: "Pasatiempo", difficulty: "easy", example: "Mi pasatiempo favorito es la fotografía de naturaleza", exampleTranslation: "My favorite hobby is nature photography" },
      { id: "hobby2", english: "Reading", spanish: "Lectura", difficulty: "easy", example: "La lectura me ayuda a relajarme después de un día ocupado", exampleTranslation: "Reading helps me relax after a busy day" },
      { id: "hobby3", english: "Painting", spanish: "Pintura", difficulty: "easy", example: "Tomo clases de pintura al óleo los sábados por la mañana", exampleTranslation: "I take oil painting classes on Saturday mornings" },
      { id: "hobby4", english: "Gardening", spanish: "Jardinería", difficulty: "easy", example: "La jardinería es muy relajante y me conecta con la naturaleza", exampleTranslation: "Gardening is very relaxing and connects me with nature" },
      { id: "hobby5", english: "Collecting", spanish: "Coleccionar", difficulty: "easy", example: "Me gusta coleccionar estampillas antiguas de diferentes países", exampleTranslation: "I like collecting old stamps from different countries" },
      { id: "hobby6", english: "Drawing", spanish: "Dibujo", difficulty: "easy", example: "Practico el dibujo artístico en mi tiempo libre", exampleTranslation: "I practice artistic drawing in my free time" },
      { id: "hobby7", english: "Knitting", spanish: "Tejer", difficulty: "medium", example: "Mi abuela me enseñó a tejer bufandas y gorros de lana", exampleTranslation: "My grandmother taught me to knit wool scarves and hats" },
      { id: "hobby8", english: "Chess", spanish: "Ajedrez", difficulty: "medium", example: "Juego ajedrez en línea con personas de todo el mundo", exampleTranslation: "I play chess online with people from all over the world" },
      { id: "hobby9", english: "Pottery", spanish: "Cerámica", difficulty: "medium", example: "Estoy aprendiendo cerámica en un taller comunitario local", exampleTranslation: "I'm learning pottery at a local community workshop" },
      { id: "hobby10", english: "Woodworking", spanish: "Carpintería", difficulty: "medium", example: "La carpintería requiere precisión y mucha paciencia", exampleTranslation: "Woodworking requires precision and a lot of patience" },
      { id: "hobby11", english: "Scrapbooking", spanish: "Álbum de recortes", difficulty: "medium", example: "Hago álbumes de recortes con fotos de mis viajes", exampleTranslation: "I make scrapbooks with photos from my trips" },
      { id: "hobby12", english: "Model building", spanish: "Construcción de maquetas", difficulty: "medium", example: "La construcción de maquetas de aviones es mi pasión desde niño", exampleTranslation: "Building model airplanes has been my passion since I was a child" },
      { id: "hobby13", english: "What do you do for fun?", spanish: "¿Qué haces para divertirte?", difficulty: "hard", example: "¿Qué haces para divertirte en tu tiempo libre? Me interesa saber tus hobbies", exampleTranslation: "What do you do for fun in your free time? I'm interested in knowing your hobbies" },
      { id: "hobby14", english: "It's very therapeutic", spanish: "Es muy terapéutico", difficulty: "hard", example: "Pintar paisajes es muy terapéutico, me ayuda a olvidar el estrés", exampleTranslation: "Painting landscapes is very therapeutic, it helps me forget stress" },
      { id: "hobby15", english: "I've been doing this for years", spanish: "Llevo años haciendo esto", difficulty: "hard", example: "Llevo más de diez años haciendo esto y todavía me apasiona", exampleTranslation: "I've been doing this for more than ten years and I'm still passionate about it" }
    ]
  },

  complaints_problems: {
    name: "Complaints & Problems",
    description: "Expressing dissatisfaction and issues",
    icon: MessageSquareWarning,
    color: "from-red-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "comp1", english: "Problem", spanish: "Problema", difficulty: "easy", example: "Tengo un problema grave con mi pedido que necesita solucionarse", exampleTranslation: "I have a serious problem with my order that needs to be solved" },
      { id: "comp2", english: "Complaint", spanish: "Queja", difficulty: "easy", example: "Necesito presentar una queja formal sobre el servicio recibido", exampleTranslation: "I need to file a formal complaint about the service received" },
      { id: "comp3", english: "Wrong", spanish: "Equivocado", difficulty: "easy", example: "Este pedido está completamente equivocado, no es lo que ordené", exampleTranslation: "This order is completely wrong, it's not what I ordered" },
      { id: "comp4", english: "Broken", spanish: "Roto", difficulty: "easy", example: "El producto llegó roto y necesito un reemplazo inmediato", exampleTranslation: "The product arrived broken and I need an immediate replacement" },
      { id: "comp5", english: "Late", spanish: "Tarde", difficulty: "easy", example: "La entrega llegó dos semanas tarde de lo prometido", exampleTranslation: "The delivery arrived two weeks late from what was promised" },
      { id: "comp6", english: "Refund", spanish: "Reembolso", difficulty: "easy", example: "Quiero solicitar un reembolso completo por este producto defectuoso", exampleTranslation: "I want to request a full refund for this defective product" },
      { id: "comp7", english: "Customer service", spanish: "Servicio al cliente", difficulty: "medium", example: "El servicio al cliente fue muy descortés y poco profesional", exampleTranslation: "The customer service was very rude and unprofessional" },
      { id: "comp8", english: "Defective", spanish: "Defectuoso", difficulty: "medium", example: "Este aparato electrónico está defectuoso desde que lo compré", exampleTranslation: "This electronic device has been defective since I bought it" },
      { id: "comp9", english: "Unsatisfied", spanish: "Insatisfecho", difficulty: "medium", example: "Estoy muy insatisfecho con la calidad del servicio recibido", exampleTranslation: "I'm very unsatisfied with the quality of service received" },
      { id: "comp10", english: "Disappointed", spanish: "Decepcionado", difficulty: "medium", example: "Estoy decepcionado porque esperaba mucho más de este restaurante famoso", exampleTranslation: "I'm disappointed because I expected much more from this famous restaurant" },
      { id: "comp11", english: "Damaged", spanish: "Dañado", difficulty: "medium", example: "El paquete llegó dañado durante el transporte internacional", exampleTranslation: "The package arrived damaged during international transport" },
      { id: "comp12", english: "Manager", spanish: "Gerente", difficulty: "medium", example: "Necesito hablar con el gerente sobre este problema urgente", exampleTranslation: "I need to speak with the manager about this urgent problem" },
      { id: "comp13", english: "This is unacceptable", spanish: "Esto es inaceptable", difficulty: "hard", example: "Esto es completamente inaceptable, esperaba un servicio mucho mejor", exampleTranslation: "This is completely unacceptable, I expected much better service" },
      { id: "comp14", english: "I'd like to speak to a supervisor", spanish: "Quisiera hablar con un supervisor", difficulty: "hard", example: "Quisiera hablar con un supervisor porque este problema no se ha resuelto", exampleTranslation: "I'd like to speak to a supervisor because this problem hasn't been resolved" },
      { id: "comp15", english: "I expect compensation", spanish: "Espero una compensación", difficulty: "hard", example: "Espero una compensación adecuada por todas las molestias causadas", exampleTranslation: "I expect adequate compensation for all the inconvenience caused" }
    ]
  },

  making_plans_invitations: {
    name: "Making Plans & Invitations",
    description: "Social planning and scheduling",
    icon: CalendarCheck,
    color: "from-pink-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "plan1", english: "Plan", spanish: "Plan", difficulty: "easy", example: "¿Tienes algún plan especial para este fin de semana largo?", exampleTranslation: "Do you have any special plans for this long weekend?" },
      { id: "plan2", english: "Meet", spanish: "Encontrarse", difficulty: "easy", example: "Podemos encontrarnos en el café de siempre a las cinco", exampleTranslation: "We can meet at the usual cafe at five" },
      { id: "plan3", english: "Free", spanish: "Libre", difficulty: "easy", example: "¿Estás libre el sábado por la tarde para ir al cine?", exampleTranslation: "Are you free Saturday afternoon to go to the movies?" },
      { id: "plan4", english: "Busy", spanish: "Ocupado", difficulty: "easy", example: "Estoy muy ocupado toda la semana con reuniones de trabajo", exampleTranslation: "I'm very busy all week with work meetings" },
      { id: "plan5", english: "Invite", spanish: "Invitar", difficulty: "easy", example: "Quiero invitarte a cenar en mi casa este viernes", exampleTranslation: "I want to invite you to dinner at my house this Friday" },
      { id: "plan6", english: "Maybe", spanish: "Quizás", difficulty: "easy", example: "Quizás pueda ir, pero necesito confirmar con mi familia primero", exampleTranslation: "Maybe I can go, but I need to confirm with my family first" },
      { id: "plan7", english: "Definitely", spanish: "Definitivamente", difficulty: "medium", example: "Definitivamente estaré allí, cuenten conmigo para la fiesta", exampleTranslation: "I'll definitely be there, count on me for the party" },
      { id: "plan8", english: "Cancel", spanish: "Cancelar", difficulty: "medium", example: "Tengo que cancelar nuestros planes porque surgió una emergencia familiar", exampleTranslation: "I have to cancel our plans because a family emergency came up" },
      { id: "plan9", english: "Reschedule", spanish: "Reprogramar", difficulty: "medium", example: "¿Podemos reprogramar nuestra reunión para el próximo martes?", exampleTranslation: "Can we reschedule our meeting for next Tuesday?" },
      { id: "plan10", english: "Confirm", spanish: "Confirmar", difficulty: "medium", example: "Por favor confirma tu asistencia antes del miércoles", exampleTranslation: "Please confirm your attendance before Wednesday" },
      { id: "plan11", english: "Postpone", spanish: "Posponer", difficulty: "medium", example: "Decidimos posponer el evento hasta que mejore el clima", exampleTranslation: "We decided to postpone the event until the weather improves" },
      { id: "plan12", english: "Arrange", spanish: "Organizar", difficulty: "medium", example: "Voy a organizar una reunión para discutir todos los detalles", exampleTranslation: "I'm going to arrange a meeting to discuss all the details" },
      { id: "plan13", english: "Are you available?", spanish: "¿Estás disponible?", difficulty: "hard", example: "¿Estás disponible mañana por la noche para tomar algo?", exampleTranslation: "Are you available tomorrow night to grab a drink?" },
      { id: "plan14", english: "Let me check my schedule", spanish: "Déjame revisar mi agenda", difficulty: "hard", example: "Déjame revisar mi agenda y te confirmo en unos minutos", exampleTranslation: "Let me check my schedule and I'll confirm with you in a few minutes" },
      { id: "plan15", english: "Something came up", spanish: "Surgió algo", difficulty: "hard", example: "Lo siento, surgió algo urgente en el trabajo y no podré ir", exampleTranslation: "I'm sorry, something urgent came up at work and I won't be able to go" }
    ]
  },

  medical_symptoms: {
    name: "Medical Symptoms",
    description: "Describing health symptoms to doctors",
    icon: Ambulance,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "symp1", english: "Pain", spanish: "Dolor", difficulty: "easy", example: "Tengo un dolor fuerte en el pecho desde esta mañana", exampleTranslation: "I have a strong pain in my chest since this morning" },
      { id: "symp2", english: "Fever", spanish: "Fiebre", difficulty: "easy", example: "Mi hijo tiene fiebre alta y está muy cansado", exampleTranslation: "My son has a high fever and is very tired" },
      { id: "symp3", english: "Cough", spanish: "Tos", difficulty: "easy", example: "Esta tos persistente no me deja dormir por las noches", exampleTranslation: "This persistent cough doesn't let me sleep at night" },
      { id: "symp4", english: "Headache", spanish: "Dolor de cabeza", difficulty: "easy", example: "Tengo un dolor de cabeza terrible que no se quita con medicamentos", exampleTranslation: "I have a terrible headache that won't go away with medication" },
      { id: "symp5", english: "Dizzy", spanish: "Mareado", difficulty: "easy", example: "Me siento muy mareado cuando me levanto rápidamente", exampleTranslation: "I feel very dizzy when I stand up quickly" },
      { id: "symp6", english: "Nausea", spanish: "Náuseas", difficulty: "easy", example: "Tengo náuseas constantes y no puedo comer nada", exampleTranslation: "I have constant nausea and can't eat anything" },
      { id: "symp7", english: "Swelling", spanish: "Hinchazón", difficulty: "medium", example: "Hay una hinchazón grande en mi tobillo después de la caída", exampleTranslation: "There's a large swelling in my ankle after the fall" },
      { id: "symp8", english: "Rash", spanish: "Sarpullido", difficulty: "medium", example: "Me salió un sarpullido rojo en todo el brazo y me pica mucho", exampleTranslation: "I got a red rash all over my arm and it itches a lot" },
      { id: "symp9", english: "Shortness of breath", spanish: "Falta de aire", difficulty: "medium", example: "Tengo falta de aire cuando subo escaleras o camino rápido", exampleTranslation: "I have shortness of breath when I climb stairs or walk fast" },
      { id: "symp10", english: "Sore throat", spanish: "Dolor de garganta", difficulty: "medium", example: "El dolor de garganta es tan fuerte que no puedo tragar comida", exampleTranslation: "The sore throat is so bad that I can't swallow food" },
      { id: "symp11", english: "Vomiting", spanish: "Vómito", difficulty: "medium", example: "He tenido vómitos frecuentes durante las últimas veinticuatro horas", exampleTranslation: "I've had frequent vomiting for the last twenty-four hours" },
      { id: "symp12", english: "Allergic reaction", spanish: "Reacción alérgica", difficulty: "medium", example: "Creo que estoy teniendo una reacción alérgica a algo que comí", exampleTranslation: "I think I'm having an allergic reaction to something I ate" },
      { id: "symp13", english: "It hurts when I...", spanish: "Me duele cuando...", difficulty: "hard", example: "Me duele mucho cuando respiro profundo o cuando toso", exampleTranslation: "It hurts a lot when I breathe deeply or when I cough" },
      { id: "symp14", english: "How long have you felt this way?", spanish: "¿Cuánto tiempo llevas así?", difficulty: "hard", example: "¿Cuánto tiempo llevas sintiéndote así? Es importante saberlo", exampleTranslation: "How long have you felt this way? It's important to know" },
      { id: "symp15", english: "The pain is getting worse", spanish: "El dolor está empeorando", difficulty: "hard", example: "El dolor de espalda está empeorando cada día que pasa", exampleTranslation: "The back pain is getting worse with each passing day" }
    ]
  },

  online_shopping: {
    name: "Online Shopping",
    description: "E-commerce and online purchasing",
    icon: CreditCard,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "shop1", english: "Cart", spanish: "Carrito", difficulty: "easy", example: "Agregué varios artículos a mi carrito de compras en línea", exampleTranslation: "I added several items to my online shopping cart" },
      { id: "shop2", english: "Checkout", spanish: "Pagar", difficulty: "easy", example: "Haz clic en pagar cuando estés listo para finalizar tu compra", exampleTranslation: "Click checkout when you're ready to complete your purchase" },
      { id: "shop3", english: "Shipping", spanish: "Envío", difficulty: "easy", example: "El envío es gratis para compras mayores de cincuenta dólares", exampleTranslation: "Shipping is free for purchases over fifty dollars" },
      { id: "shop4", english: "Delivery", spanish: "Entrega", difficulty: "easy", example: "La entrega está programada para mañana entre las dos y las cinco", exampleTranslation: "Delivery is scheduled for tomorrow between two and five" },
      { id: "shop5", english: "Order", spanish: "Pedido", difficulty: "easy", example: "Mi pedido llegó ayer en perfectas condiciones", exampleTranslation: "My order arrived yesterday in perfect condition" },
      { id: "shop6", english: "Review", spanish: "Reseña", difficulty: "easy", example: "Siempre leo las reseñas de otros clientes antes de comprar", exampleTranslation: "I always read other customers' reviews before buying" },
      { id: "shop7", english: "Discount code", spanish: "Código de descuento", difficulty: "medium", example: "Tengo un código de descuento del veinte por ciento para esta tienda", exampleTranslation: "I have a twenty percent discount code for this store" },
      { id: "shop8", english: "Return policy", spanish: "Política de devoluciones", difficulty: "medium", example: "La política de devoluciones permite cambios dentro de treinta días", exampleTranslation: "The return policy allows exchanges within thirty days" },
      { id: "shop9", english: "Tracking number", spanish: "Número de rastreo", difficulty: "medium", example: "Puedes usar el número de rastreo para ver dónde está tu paquete", exampleTranslation: "You can use the tracking number to see where your package is" },
      { id: "shop10", english: "Out of stock", spanish: "Agotado", difficulty: "medium", example: "El artículo que quiero está agotado pero volverá pronto", exampleTranslation: "The item I want is out of stock but will be back soon" },
      { id: "shop11", english: "Wishlist", spanish: "Lista de deseos", difficulty: "medium", example: "Agregué el libro a mi lista de deseos para comprarlo más tarde", exampleTranslation: "I added the book to my wishlist to buy it later" },
      { id: "shop12", english: "Payment method", spanish: "Método de pago", difficulty: "medium", example: "Aceptamos varios métodos de pago incluyendo tarjetas y transferencias", exampleTranslation: "We accept various payment methods including cards and transfers" },
      { id: "shop13", english: "When will it arrive?", spanish: "¿Cuándo llegará?", difficulty: "hard", example: "¿Cuándo llegará mi pedido si lo compro hoy con envío estándar?", exampleTranslation: "When will my order arrive if I buy it today with standard shipping?" },
      { id: "shop14", english: "I'd like to return this", spanish: "Me gustaría devolver esto", difficulty: "hard", example: "Me gustaría devolver este artículo porque no es de la talla correcta", exampleTranslation: "I'd like to return this item because it's not the right size" },
      { id: "shop15", english: "Is this item in stock?", spanish: "¿Este artículo está disponible?", difficulty: "hard", example: "¿Este artículo en color azul está disponible para entrega inmediata?", exampleTranslation: "Is this item in blue available for immediate delivery?" }
    ]
  },

  sports_games: {
    name: "Sports & Games",
    description: "Popular sports and competitive games",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "sport1", english: "Soccer", spanish: "Fútbol", difficulty: "easy", example: "El fútbol es el deporte más popular en mi país", exampleTranslation: "Soccer is the most popular sport in my country" },
      { id: "sport2", english: "Basketball", spanish: "Baloncesto", difficulty: "easy", example: "Juego baloncesto con mis amigos todos los sábados en el parque", exampleTranslation: "I play basketball with my friends every Saturday in the park" },
      { id: "sport3", english: "Tennis", spanish: "Tenis", difficulty: "easy", example: "El tenis requiere buena coordinación y reflejos rápidos", exampleTranslation: "Tennis requires good coordination and quick reflexes" },
      { id: "sport4", english: "Swimming", spanish: "Natación", difficulty: "easy", example: "La natación es un ejercicio completo que trabajo todo el cuerpo", exampleTranslation: "Swimming is a complete exercise that works the whole body" },
      { id: "sport5", english: "Team", spanish: "Equipo", difficulty: "easy", example: "Nuestro equipo ganó el campeonato regional este año", exampleTranslation: "Our team won the regional championship this year" },
      { id: "sport6", english: "Match", spanish: "Partido", difficulty: "easy", example: "El partido de fútbol de esta noche será muy emocionante", exampleTranslation: "Tonight's soccer match will be very exciting" },
      { id: "sport7", english: "Championship", spanish: "Campeonato", difficulty: "medium", example: "El campeonato mundial se celebrará en nuestro país el próximo año", exampleTranslation: "The world championship will be held in our country next year" },
      { id: "sport8", english: "Coach", spanish: "Entrenador", difficulty: "medium", example: "Nuestro entrenador es muy exigente pero nos hace mejores jugadores", exampleTranslation: "Our coach is very demanding but makes us better players" },
      { id: "sport9", english: "Tournament", spanish: "Torneo", difficulty: "medium", example: "Participaré en un torneo de tenis profesional el próximo mes", exampleTranslation: "I'll participate in a professional tennis tournament next month" },
      { id: "sport10", english: "Referee", spanish: "Árbitro", difficulty: "medium", example: "El árbitro tomó una decisión polémica que cambió el resultado", exampleTranslation: "The referee made a controversial decision that changed the outcome" },
      { id: "sport11", english: "Score", spanish: "Marcador", difficulty: "medium", example: "El marcador final fue tres a dos a favor del equipo local", exampleTranslation: "The final score was three to two in favor of the home team" },
      { id: "sport12", english: "Opponent", spanish: "Oponente", difficulty: "medium", example: "Nuestro oponente en la final es muy fuerte y experimentado", exampleTranslation: "Our opponent in the final is very strong and experienced" },
      { id: "sport13", english: "Who won the game?", spanish: "¿Quién ganó el partido?", difficulty: "hard", example: "¿Quién ganó el partido de anoche? No pude verlo en vivo", exampleTranslation: "Who won last night's game? I couldn't watch it live" },
      { id: "sport14", english: "It was a close game", spanish: "Fue un partido reñido", difficulty: "hard", example: "Fue un partido muy reñido hasta el último minuto del tiempo extra", exampleTranslation: "It was a very close game until the last minute of extra time" },
      { id: "sport15", english: "Do you play any sports?", spanish: "¿Practicas algún deporte?", difficulty: "hard", example: "¿Practicas algún deporte regularmente o prefieres otras actividades?", exampleTranslation: "Do you play any sports regularly or do you prefer other activities?" }
    ]
  },

  education_learning: {
    name: "Education & Learning",
    description: "Learning, studying and educational terms",
    icon: GraduationCap,
    color: "from-indigo-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "edu1", english: "Study", spanish: "Estudiar", difficulty: "easy", example: "Necesito estudiar mucho más para aprobar el examen final", exampleTranslation: "I need to study much more to pass the final exam" },
      { id: "edu2", english: "Learn", spanish: "Aprender", difficulty: "easy", example: "Quiero aprender un idioma nuevo cada dos años", exampleTranslation: "I want to learn a new language every two years" },
      { id: "edu3", english: "Teacher", spanish: "Profesor", difficulty: "easy", example: "Mi profesor de matemáticas explica los conceptos de manera muy clara", exampleTranslation: "My math teacher explains concepts in a very clear way" },
      { id: "edu4", english: "Student", spanish: "Estudiante", difficulty: "easy", example: "Soy estudiante de medicina en la universidad pública", exampleTranslation: "I'm a medical student at the public university" },
      { id: "edu5", english: "Homework", spanish: "Tarea", difficulty: "easy", example: "Tengo mucha tarea que hacer antes de mañana por la mañana", exampleTranslation: "I have a lot of homework to do before tomorrow morning" },
      { id: "edu6", english: "Exam", spanish: "Examen", difficulty: "easy", example: "El examen de química será la próxima semana", exampleTranslation: "The chemistry exam will be next week" },
      { id: "edu7", english: "Degree", spanish: "Título", difficulty: "medium", example: "Obtuve mi título universitario después de cuatro años de estudio intenso", exampleTranslation: "I obtained my university degree after four years of intense study" },
      { id: "edu8", english: "Scholarship", spanish: "Beca", difficulty: "medium", example: "Gané una beca completa para estudiar en el extranjero", exampleTranslation: "I won a full scholarship to study abroad" },
      { id: "edu9", english: "Thesis", spanish: "Tesis", difficulty: "medium", example: "Estoy escribiendo mi tesis doctoral sobre cambio climático", exampleTranslation: "I'm writing my doctoral thesis on climate change" },
      { id: "edu10", english: "Research", spanish: "Investigación", difficulty: "medium", example: "La investigación académica requiere dedicación y rigor científico", exampleTranslation: "Academic research requires dedication and scientific rigor" },
      { id: "edu11", english: "Lecture", spanish: "Conferencia", difficulty: "medium", example: "Asistí a una conferencia fascinante sobre inteligencia artificial", exampleTranslation: "I attended a fascinating lecture on artificial intelligence" },
      { id: "edu12", english: "Curriculum", spanish: "Plan de estudios", difficulty: "medium", example: "El plan de estudios incluye materias teóricas y prácticas", exampleTranslation: "The curriculum includes theoretical and practical subjects" },
      { id: "edu13", english: "I'm majoring in...", spanish: "Estudio la carrera de...", difficulty: "hard", example: "Estudio la carrera de ingeniería informática en una universidad privada", exampleTranslation: "I'm majoring in computer engineering at a private university" },
      { id: "edu14", english: "When do you graduate?", spanish: "¿Cuándo te gradúas?", difficulty: "hard", example: "¿Cuándo te gradúas de la universidad? Ya casi terminas, ¿verdad?", exampleTranslation: "When do you graduate from university? You're almost done, right?" },
      { id: "edu15", english: "I need to improve my grades", spanish: "Necesito mejorar mis calificaciones", difficulty: "hard", example: "Necesito mejorar mis calificaciones este semestre para mantener mi beca", exampleTranslation: "I need to improve my grades this semester to keep my scholarship" }
    ]
  }
};

/**
 * POLISH → SPANISH FLASHCARDS - PART 4
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (47-56).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Home,
  Plane,
  Building,
  Bed,
  Utensils,
  ShoppingBag,
  Shirt,
  Sun,
  Hospital,
  Car
} from "lucide-react";

export const flashcardsCategories_part4 = {
  car_driving: {
    name: "Samochód i jazda",
    description: "Prowadzenie pojazdu",
    icon: Car,
    color: "from-slate-400 to-gray-600",
    level: "intermediate",
    words: [
      { id: "car1", polish: "Samochód", spanish: "Coche", difficulty: "easy", example: "Mój nowy samochód jest ekonomiczny i bardzo wygodny do jazdy", exampleTranslation: "Mi coche nuevo es económico y muy cómodo para conducir" },
      { id: "car2", polish: "Kierownica", spanish: "Volante", difficulty: "easy", example: "Trzymam kierownicę obiema rękami dla bezpieczeństwa", exampleTranslation: "Sujeto el volante con ambas manos por seguridad" },
      { id: "car3", polish: "Hamulec", spanish: "Freno", difficulty: "easy", example: "Nacisnąłem hamulec gdy światło zmieniło się na czerwone", exampleTranslation: "Presioné el freno cuando la luz se puso roja" },
      { id: "car4", polish: "Gaz", spanish: "Acelerador", difficulty: "easy", example: "Wciskam gaz delikatnie żeby przyspieszyć płynnie", exampleTranslation: "Presiono el acelerador suavemente para acelerar con fluidez" },
      { id: "car5", polish: "Silnik", spanish: "Motor", difficulty: "easy", example: "Silnik mojego samochodu jest bardzo cichy i sprawny", exampleTranslation: "El motor de mi coche es muy silencioso y eficiente" },
      { id: "car6", polish: "Paliwo", spanish: "Combustible", difficulty: "easy", example: "Muszę zatankować paliwo bo bak jest prawie pusty", exampleTranslation: "Tengo que cargar combustible porque el tanque está casi vacío" },
      { id: "car7", polish: "Prawo jazdy", spanish: "Licencia de conducir", difficulty: "medium", example: "Zdałem egzamin na prawo jazdy za pierwszym razem", exampleTranslation: "Aprobé el examen de licencia de conducir a la primera" },
      { id: "car8", polish: "Parking", spanish: "Estacionamiento", difficulty: "medium", example: "Znalezienie parkingu w centrum miasta jest bardzo trudne", exampleTranslation: "Encontrar estacionamiento en el centro de la ciudad es muy difícil" },
      { id: "car9", polish: "Warsztat", spanish: "Taller", difficulty: "medium", example: "Zostawiłem samochód w warsztacie na przegląd techniczny", exampleTranslation: "Dejé el coche en el taller para la revisión técnica" },
      { id: "car10", polish: "Ubezpieczenie", spanish: "Seguro", difficulty: "medium", example: "Płacę ubezpieczenie samochodu co miesiąc regularnie", exampleTranslation: "Pago el seguro del coche cada mes regularmente" },
      { id: "car11", polish: "Pas bezpieczeństwa", spanish: "Cinturón de seguridad", difficulty: "medium", example: "Zawsze zapiniam pas bezpieczeństwa przed rozpoczęciem jazdy", exampleTranslation: "Siempre me abrocho el cinturón de seguridad antes de comenzar a conducir" },
      { id: "car12", polish: "Korek", spanish: "Atasco", difficulty: "medium", example: "Stałem w korku dwie godziny na autostradzie", exampleTranslation: "Estuve en un atasco dos horas en la autopista" },
      { id: "car13", polish: "Skąd jedziemy?", spanish: "¿De dónde venimos?", difficulty: "hard", example: "Skąd dokładnie jedziemy i o której mamy przyjechać?", exampleTranslation: "¿De dónde exactamente venimos y a qué hora tenemos que llegar?" },
      { id: "car14", polish: "Muszę zatankować", spanish: "Tengo que cargar gasolina", difficulty: "hard", example: "Muszę zatankować zanim pojedziemy dalej w podróż", exampleTranslation: "Tengo que cargar gasolina antes de que sigamos el viaje" },
      { id: "car15", polish: "Samochód się zepsuł", spanish: "El coche se averió", difficulty: "hard", example: "Samochód się zepsuł w drodze i musiałem wezwać pomoc drogową", exampleTranslation: "El coche se averió en el camino y tuve que llamar a asistencia en carretera" }
    ]
  },

  holidays_traditions: {
    name: "Święta i tradycje",
    description: "Uroczystości i zwyczaje",
    icon: Sun, // Changed from PartyPopper to Sun
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "hol1", polish: "Święta", spanish: "Fiestas", difficulty: "easy", example: "Święta Bożego Narodzenia spędzamy zawsze z całą rodziną", exampleTranslation: "Las fiestas de Navidad las pasamos siempre con toda la familia" },
      { id: "hol2", polish: "Wigilia", spanish: "Nochebuena", difficulty: "easy", example: "Wigilia to najważniejszy wieczór w polskiej tradycji", exampleTranslation: "La Nochebuena es la noche más importante en la tradición polaca" },
      { id: "hol3", polish: "Prezent", spanish: "Regalo", difficulty: "easy", example: "Kupuję prezenty świąteczne dla wszystkich członków rodziny", exampleTranslation: "Compro regalos navideños para todos los miembros de la familia" },
      { id: "hol4", polish: "Choinka", spanish: "Árbol de Navidad", difficulty: "easy", example: "Ustawiamy i ozdabiamy choinkę na początku grudnia", exampleTranslation: "Colocamos y decoramos el árbol de Navidad a principios de diciembre" },
      { id: "hol5", polish: "Tradycja", spanish: "Tradición", difficulty: "easy", example: "Nasza rodzinna tradycja to wspólny obiad w każdą niedzielę", exampleTranslation: "Nuestra tradición familiar es la comida juntos cada domingo" },
      { id: "hol6", polish: "Uroczystość", spanish: "Celebración", difficulty: "easy", example: "Uroczystość ślubna była piękna i pełna wzruszeń", exampleTranslation: "La celebración de boda fue hermosa y llena de emoción" },
      { id: "hol7", polish: "Nowy Rok", spanish: "Año Nuevo", difficulty: "medium", example: "Nowy Rok witamy fajerwerkami i szampanem o północy", exampleTranslation: "El Año Nuevo lo recibimos con fuegos artificiales y champán a medianoche" },
      { id: "hol8", polish: "Wielkanoc", spanish: "Pascua", difficulty: "medium", example: "Wielkanoc świętujemy malując pisanki i piekąc babkę", exampleTranslation: "La Pascua la celebramos pintando huevos y horneando bizcocho" },
      { id: "hol9", polish: "Życzenia", spanish: "Felicitaciones", difficulty: "medium", example: "Składamy sobie życzenia zdrowia i szczęścia na Nowy Rok", exampleTranslation: "Nos damos felicitaciones de salud y felicidad para el Año Nuevo" },
      { id: "hol10", polish: "Dekoracje", spanish: "Decoraciones", difficulty: "medium", example: "Dom jest pełen świątecznych dekoracji i światełek", exampleTranslation: "La casa está llena de decoraciones navideñas y luces" },
      { id: "hol11", polish: "Kolęda", spanish: "Villancico", difficulty: "medium", example: "Dzieci śpiewają kolędy przed choinką wieczorem", exampleTranslation: "Los niños cantan villancicos frente al árbol de Navidad por la noche" },
      { id: "hol12", polish: "Wigilijna kolacja", spanish: "Cena de Nochebuena", difficulty: "medium", example: "Wigilijna kolacja składa się z dwunastu tradycyjnych potraw", exampleTranslation: "La cena de Nochebuena consiste en doce platos tradicionales" },
      { id: "hol13", polish: "Wesołych Świąt!", spanish: "¡Feliz Navidad!", difficulty: "hard", example: "Wesołych Świąt i szczęśliwego Nowego Roku dla całej rodziny!", exampleTranslation: "¡Feliz Navidad y próspero Año Nuevo para toda la familia!" },
      { id: "hol14", polish: "Co robisz na święta?", spanish: "¿Qué haces en las fiestas?", difficulty: "hard", example: "Co zazwyczaj robisz na święta Bożego Narodzenia?", exampleTranslation: "¿Qué haces normalmente en las fiestas de Navidad?" },
      { id: "hol15", polish: "Tradycja rodzinna", spanish: "Tradición familiar", difficulty: "hard", example: "Nasza tradycja rodzinna jest przekazywana z pokolenia na pokolenie", exampleTranslation: "Nuestra tradición familiar se transmite de generación en generación" }
    ]
  },

  music_dance: {
    name: "Muzyka i taniec",
    description: "Muzyka i sztuka tańca",
    icon: Utensils, // Changed from Music to Utensils
    color: "from-purple-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "mus1", polish: "Muzyka", spanish: "Música", difficulty: "easy", example: "Muzyka relaksuje mnie po ciężkim dniu w pracy", exampleTranslation: "La música me relaja después de un día difícil en el trabajo" },
      { id: "mus2", polish: "Piosenka", spanish: "Canción", difficulty: "easy", example: "Ta piosenka przypomina mi o lecie i wakacjach", exampleTranslation: "Esta canción me recuerda el verano y las vacaciones" },
      { id: "mus3", polish: "Śpiewak", spanish: "Cantante", difficulty: "easy", example: "Mój ulubiony śpiewak wystąpi w koncercie w przyszłym miesiącu", exampleTranslation: "Mi cantante favorito actuará en un concierto el próximo mes" },
      { id: "mus4", polish: "Gitara", spanish: "Guitarra", difficulty: "easy", example: "Uczę się grać na gitarze klasycznej od roku", exampleTranslation: "Estoy aprendiendo a tocar la guitarra clásica desde hace un año" },
      { id: "mus5", polish: "Fortepian", spanish: "Piano", difficulty: "easy", example: "Gram na fortepianie od dzieciństwa i to moja pasja", exampleTranslation: "Toco el piano desde la infancia y es mi pasión" },
      { id: "mus6", polish: "Taniec", spanish: "Baile", difficulty: "easy", example: "Taniec to wspaniały sposób na wyrażenie emocji", exampleTranslation: "El baile es una forma maravillosa de expresar emociones" },
      { id: "mus7", polish: "Koncert", spanish: "Concierto", difficulty: "medium", example: "Byłem na fantastycznym koncercie rockowym w zeszłym tygodniu", exampleTranslation: "Estuve en un concierto de rock fantástico la semana pasada" },
      { id: "mus8", polish: "Orkiestra", spanish: "Orquesta", difficulty: "medium", example: "Orkiestra symfoniczna wykonała piękne dzieło Chopina", exampleTranslation: "La orquesta sinfónica interpretó una hermosa obra de Chopin" },
      { id: "mus9", polish: "Słuchawki", spanish: "Auriculares", difficulty: "medium", example: "Słucham muzyki w słuchawkach jadąc autobusem do pracy", exampleTranslation: "Escucho música con auriculares cuando voy en autobús al trabajo" },
      { id: "mus10", polish: "Rytm", spanish: "Ritmo", difficulty: "medium", example: "Ten utwór ma chwytliwy rytm który zapada w pamięć", exampleTranslation: "Esta pieza tiene un ritmo pegadizo que se queda en la memoria" },
      { id: "mus11", polish: "Melodia", spanish: "Melodía", difficulty: "medium", example: "Melodia tej piosenki jest piękna i romantyczna", exampleTranslation: "La melodía de esta canción es hermosa y romántica" },
      { id: "mus12", polish: "Taniec towarzyski", spanish: "Baile de salón", difficulty: "medium", example: "Uczę się tańca towarzyskiego w szkole tańca", exampleTranslation: "Estoy aprendiendo baile de salón en una escuela de danza" },
      { id: "mus13", polish: "Lubisz muzykę?", spanish: "¿Te gusta la música?", difficulty: "hard", example: "Lubisz muzykę klasyczną czy wolisz nowoczesne utwory?", exampleTranslation: "¿Te gusta la música clásica o prefieres piezas modernas?" },
      { id: "mus14", polish: "Potrafisz tańczyć?", spanish: "¿Sabes bailar?", difficulty: "hard", example: "Potrafisz tańczyć salse? Mogę cię nauczyć podstawowych kroków", exampleTranslation: "¿Sabes bailar salsa? Puedo enseñarte los pasos básicos" },
      { id: "mus15", polish: "Uwielbiam tę piosenkę", spanish: "Me encanta esta canción", difficulty: "hard", example: "Uwielbiam tę piosenkę i słucham jej codziennie w drodze", exampleTranslation: "Me encanta esta canción y la escucho todos los días de camino" }
    ]
  },

  doctor_medical: {
    name: "Lekarz i medycyna",
    description: "Wizyty lekarskie",
    icon: Hospital, // Changed from Stethoscope to Hospital
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "doc1", polish: "Lekarz", spanish: "Médico", difficulty: "easy", example: "Muszę umówić się do lekarza na wizytę kontrolną", exampleTranslation: "Tengo que hacer una cita con el médico para un chequeo" },
      { id: "doc2", polish: "Pacjent", spanish: "Paciente", difficulty: "easy", example: "Pacjent czeka na wyniki badań od tygodnia", exampleTranslation: "El paciente espera los resultados de los análisis desde hace una semana" },
      { id: "doc3", polish: "Choroba", spanish: "Enfermedad", difficulty: "easy", example: "Ta choroba wymaga długiego leczenia i odpoczynku", exampleTranslation: "Esta enfermedad requiere un tratamiento largo y descanso" },
      { id: "doc4", polish: "Objawy", spanish: "Síntomas", difficulty: "easy", example: "Objawy grypy to gorączka i ból głowy", exampleTranslation: "Los síntomas de la gripe son fiebre y dolor de cabeza" },
      { id: "doc5", polish: "Leczenie", spanish: "Tratamiento", difficulty: "easy", example: "Leczenie trwa sześć tygodni i wymaga regularnych wizyt", exampleTranslation: "El tratamiento dura seis semanas y requiere visitas regulares" },
      { id: "doc6", polish: "Diagnoza", spanish: "Diagnóstico", difficulty: "easy", example: "Lekarz postawił diagnozę po dokładnym badaniu", exampleTranslation: "El médico hizo el diagnóstico después de un examen minucioso" },
      { id: "doc7", polish: "Szczepionka", spanish: "Vacuna", difficulty: "medium", example: "Dostałem szczepionkę przeciwko grypie przed zimą", exampleTranslation: "Me puse la vacuna contra la gripe antes del invierno" },
      { id: "doc8", polish: "Tabletka", spanish: "Pastilla", difficulty: "medium", example: "Biorę tę tabletkę dwa razy dziennie po posiłkach", exampleTranslation: "Tomo esta pastilla dos veces al día después de las comidas" },
      { id: "doc9", polish: "Zastrzyk", spanish: "Inyección", difficulty: "medium", example: "Pielęgniarka dała mi zastrzyk który był prawie bezbolesny", exampleTranslation: "La enfermera me puso una inyección que fue casi sin dolor" },
      { id: "doc10", polish: "Badanie krwi", spanish: "Análisis de sangre", difficulty: "medium", example: "Muszę zrobić badanie krwi na czczo rano", exampleTranslation: "Tengo que hacerme un análisis de sangre en ayunas por la mañana" },
      { id: "doc11", polish: "Wizyta", spanish: "Consulta", difficulty: "medium", example: "Wizyta u specjalisty trwa zwykle pół godziny", exampleTranslation: "La consulta con el especialista normalmente dura media hora" },
      { id: "doc12", polish: "Gips", spanish: "Yeso", difficulty: "medium", example: "Noszę gips na nodze przez sześć tygodni po złamaniu", exampleTranslation: "Llevo yeso en la pierna durante seis semanas después de la fractura" },
      { id: "doc13", polish: "Nie czuję się dobrze", spanish: "No me siento bien", difficulty: "hard", example: "Nie czuję się dobrze od wczoraj i chyba potrzebuję lekarza", exampleTranslation: "No me siento bien desde ayer y creo que necesito un médico" },
      { id: "doc14", polish: "Czy to poważne?", spanish: "¿Es grave?", difficulty: "hard", example: "Martwię się o te objawy, czy to jest coś poważnego?", exampleTranslation: "Me preocupan estos síntomas, ¿es algo grave?" },
      { id: "doc15", polish: "Kiedy poczuję się lepiej?", spanish: "¿Cuándo me sentiré mejor?", difficulty: "hard", example: "Kiedy w końcu poczuję się lepiej po tym leczeniu?", exampleTranslation: "¿Cuándo finalmente me sentiré mejor después de este tratamiento?" }
    ]
  },

  beauty_cosmetics: {
    name: "Uroda i kosmetyki",
    description: "Pielęgnacja i makijaż",
    icon: ShoppingBag, // Changed from Sparkles to ShoppingBag
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "beau1", polish: "Makijaż", spanish: "Maquillaje", difficulty: "easy", example: "Nakładam lekki makijaż codziennie przed wyjściem", exampleTranslation: "Me aplico maquillaje ligero todos los días antes de salir" },
      { id: "beau2", polish: "Perfumy", spanish: "Perfume", difficulty: "easy", example: "Te perfumy mają delikatny kwiatowy zapach", exampleTranslation: "Este perfume tiene un aroma floral delicado" },
      { id: "beau3", polish: "Szminka", spanish: "Lápiz labial", difficulty: "easy", example: "Kupiłam nową szminką w pięknym czerwonym kolorze", exampleTranslation: "Compré un lápiz labial nuevo en un hermoso color rojo" },
      { id: "beau4", polish: "Krem", spanish: "Crema", difficulty: "easy", example: "Używam kremu nawilżającego na twarz każdego wieczoru", exampleTranslation: "Uso crema hidratante en la cara cada noche" },
      { id: "beau5", polish: "Fryzjer", spanish: "Peluquero", difficulty: "easy", example: "Chodzę do fryzjera co miesiąc na strzyżenie", exampleTranslation: "Voy al peluquero cada mes para un corte" },
      { id: "beau6", polish: "Włosy", spanish: "Cabello", difficulty: "easy", example: "Myję włosy specjalnym szamponem organicznym", exampleTranslation: "Lavo mi cabello con champú orgánico especial" },
      { id: "beau7", polish: "Paznokcie", spanish: "Uñas", difficulty: "medium", example: "Maluje paznokcie na czerwono do eleganckiej sukienki", exampleTranslation: "Me pinto las uñas de rojo para el vestido elegante" },
      { id: "beau8", polish: "Lakier do paznokci", spanish: "Esmalte de uñas", difficulty: "medium", example: "Ten lakier do paznokci jest trwały i trzyma się długo", exampleTranslation: "Este esmalte de uñas es duradero y se mantiene mucho tiempo" },
      { id: "beau9", polish: "Pędzel", spanish: "Brocha", difficulty: "medium", example: "Używam miękkiego pędzla do nakładania różu", exampleTranslation: "Uso una brocha suave para aplicar el rubor" },
      { id: "beau10", polish: "Lustro", spanish: "Espejo", difficulty: "medium", example: "Sprawdzam makijaż w dużym oświetlonym lustrze", exampleTranslation: "Reviso el maquillaje en un espejo grande iluminado" },
      { id: "beau11", polish: "Fryzura", spanish: "Peinado", difficulty: "medium", example: "Fryzjerka zrobiła mi piękną fryzurę na wesele", exampleTranslation: "La peluquera me hizo un peinado hermoso para la boda" },
      { id: "beau12", polish: "Zabieg", spanish: "Tratamiento", difficulty: "medium", example: "Zrobiłam zabieg pielęgnacyjny twarzy w salonie", exampleTranslation: "Me hice un tratamiento facial en el salón" },
      { id: "beau13", polish: "Dobrze wyglądasz", spanish: "Te ves bien", difficulty: "hard", example: "Dobrze wyglądasz dzisiaj, zrobiłaś coś ze swoimi włosami?", exampleTranslation: "Te ves bien hoy, ¿hiciste algo con tu cabello?" },
      { id: "beau14", polish: "Chcę zmienić fryzurę", spanish: "Quiero cambiar mi peinado", difficulty: "hard", example: "Chcę całkowicie zmienić fryzurę na coś świeżego i nowoczesnego", exampleTranslation: "Quiero cambiar completamente mi peinado a algo fresco y moderno" },
      { id: "beau15", polish: "Jak dbasz o skórę?", spanish: "¿Cómo cuidas tu piel?", difficulty: "hard", example: "Jak dbasz o swoją skórę żeby była tak promienna i zdrowa?", exampleTranslation: "¿Cómo cuidas tu piel para que esté tan radiante y saludable?" }
    ]
  },

  relationships_love: {
    name: "Związki i miłość",
    description: "Relacje romantyczne",
    icon: Bed, // Changed from Heart to Bed
    color: "from-rose-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "love1", polish: "Miłość", spanish: "Amor", difficulty: "easy", example: "Miłość to najpiękniejsze uczucie na świecie", exampleTranslation: "El amor es el sentimiento más hermoso del mundo" },
      { id: "love2", polish: "Para", spanish: "Pareja", difficulty: "easy", example: "Ta para jest razem od dziesięciu szczęśliwych lat", exampleTranslation: "Esta pareja está junta desde hace diez años felices" },
      { id: "love3", polish: "Randka", spanish: "Cita", difficulty: "easy", example: "Mamy romantyczną randkę w restauracji dzisiaj wieczorem", exampleTranslation: "Tenemos una cita romántica en el restaurante esta noche" },
      { id: "love4", polish: "Pocałunek", spanish: "Beso", difficulty: "easy", example: "Dał jej czuły pocałunek na pożegnanie", exampleTranslation: "Le dio un beso tierno de despedida" },
      { id: "love5", polish: "Ślub", spanish: "Boda", difficulty: "easy", example: "Nasz ślub odbędzie się w czerwcu w pięknym ogrodzie", exampleTranslation: "Nuestra boda será en junio en un hermoso jardín" },
      { id: "love6", polish: "Zaręczyny", spanish: "Compromiso", difficulty: "easy", example: "Zaręczyny odbyły się na plaży o zachodzie słońca", exampleTranslation: "El compromiso tuvo lugar en la playa al atardecer" },
      { id: "love7", polish: "Małżeństwo", spanish: "Matrimonio", difficulty: "medium", example: "Małżeństwo wymaga pracy i wzajemnego zrozumienia", exampleTranslation: "El matrimonio requiere trabajo y comprensión mutua" },
      { id: "love8", polish: "Zakochany", spanish: "Enamorado", difficulty: "medium", example: "Jestem zakochany i myślę o niej przez cały czas", exampleTranslation: "Estoy enamorado y pienso en ella todo el tiempo" },
      { id: "love9", polish: "Romantyczny", spanish: "Romántico", difficulty: "medium", example: "Przygotował romantyczną kolację przy świecach", exampleTranslation: "Preparó una cena romántica a la luz de las velas" },
      { id: "love10", polish: "Zaufanie", spanish: "Confianza", difficulty: "medium", example: "Zaufanie jest fundamentem każdego związku", exampleTranslation: "La confianza es el fundamento de toda relación" },
      { id: "love11", polish: "Kłótnia", spanish: "Pelea", difficulty: "medium", example: "Po małej kłótni szybko się pogodziliśmy i przeprosiliśmy", exampleTranslation: "Después de una pequeña pelea nos reconciliamos rápido y nos disculpamos" },
      { id: "love12", polish: "Komplement", spanish: "Cumplido", difficulty: "medium", example: "Lubię dostawać komplementy ale one muszą być szczere", exampleTranslation: "Me gusta recibir cumplidos pero tienen que ser sinceros" },
      { id: "love13", polish: "Kocham cię", spanish: "Te amo", difficulty: "hard", example: "Kocham cię całym sercem i zawsze będę przy tobie", exampleTranslation: "Te amo con todo mi corazón y siempre estaré contigo" },
      { id: "love14", polish: "Chcesz wyjść ze mną?", spanish: "¿Quieres salir conmigo?", difficulty: "hard", example: "Chcesz wyjść ze mną na kawę w sobotę wieczorem?", exampleTranslation: "¿Quieres salir conmigo a tomar café el sábado por la noche?" },
      { id: "love15", polish: "Jesteś wyjątkowa", spanish: "Eres especial", difficulty: "hard", example: "Jesteś dla mnie bardzo wyjątkowa i niepowtarzalna", exampleTranslation: "Eres muy especial y única para mí" }
    ]
  },

  phone_communication: {
    name: "Telefon i komunikacja",
    description: "Rozmowy telefoniczne",
    icon: Building, // Changed from Phone to Building
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "phone1", polish: "Telefon", spanish: "Teléfono", difficulty: "easy", example: "Mój telefon komórkowy dzwoni przez cały dzień", exampleTranslation: "Mi teléfono móvil suena durante todo el día" },
      { id: "phone2", polish: "Dzwonić", spanish: "Llamar", difficulty: "easy", example: "Muszę zadzwonić do mamy wieczorem", exampleTranslation: "Tengo que llamar a mi mamá por la noche" },
      { id: "phone3", polish: "Połączenie", spanish: "Llamada", difficulty: "easy", example: "Odebrałem ważne połączenie od szefa w pracy", exampleTranslation: "Recibí una llamada importante del jefe en el trabajo" },
      { id: "phone4", polish: "Wiadomość", spanish: "Mensaje", difficulty: "easy", example: "Wysłałem ci wiadomość tekstową godzinę temu", exampleTranslation: "Te envié un mensaje de texto hace una hora" },
      { id: "phone5", polish: "Numer", spanish: "Número", difficulty: "easy", example: "Czy możesz podać mi swój numer telefonu?", exampleTranslation: "¿Puedes darme tu número de teléfono?" },
      { id: "phone6", polish: "Oddzwonić", spanish: "Devolver la llamada", difficulty: "easy", example: "Oddzwonię do ciebie jak tylko będę miał chwilę", exampleTranslation: "Te devolveré la llamada en cuanto tenga un momento" },
      { id: "phone7", polish: "Poczta głosowa", spanish: "Buzón de voz", difficulty: "medium", example: "Nie odebrałem telefonu więc zostawił wiadomość na poczcie głosowej", exampleTranslation: "No contesté el teléfono así que dejó un mensaje en el buzón de voz" },
      { id: "phone8", polish: "Sygnał", spanish: "Señal", difficulty: "medium", example: "Tu nie ma sygnału telefonicznego w górach", exampleTranslation: "Aquí no hay señal telefónica en las montañas" },
      { id: "phone9", polish: "Rozmowa", spanish: "Conversación", difficulty: "medium", example: "Mieliśmy długą rozmowę telefoniczną o planach na przyszłość", exampleTranslation: "Tuvimos una conversación telefónica larga sobre planes para el futuro" },
      { id: "phone10", polish: "Kontakt", spanish: "Contacto", difficulty: "medium", example: "Zapisałem twój kontakt w moim telefonie", exampleTranslation: "Guardé tu contacto en mi teléfono" },
      { id: "phone11", polish: "Aplikacja", spanish: "Aplicación", difficulty: "medium", example: "Ta aplikacja do komunikacji jest bardzo wygodna", exampleTranslation: "Esta aplicación de comunicación es muy conveniente" },
      { id: "phone12", polish: "Rozładowany", spanish: "Descargado", difficulty: "medium", example: "Mój telefon jest całkowicie rozładowany i potrzebuję ładowarki", exampleTranslation: "Mi teléfono está completamente descargado y necesito un cargador" },
      { id: "phone13", polish: "Halo, kto mówi?", spanish: "¿Hola, quién habla?", difficulty: "hard", example: "Halo, kto mówi? Nie rozpoznaję tego numeru telefonu", exampleTranslation: "¿Hola, quién habla? No reconozco este número de teléfono" },
      { id: "phone14", polish: "Zadzwonię później", spanish: "Te llamo más tarde", difficulty: "hard", example: "Teraz jestem zajęty, zadzwonię do ciebie później wieczorem", exampleTranslation: "Ahora estoy ocupado, te llamo más tarde por la noche" },
      { id: "phone15", polish: "Nie słyszę cię", spanish: "No te escucho", difficulty: "hard", example: "Nie słyszę cię dobrze, połączenie jest bardzo słabe", exampleTranslation: "No te escucho bien, la conexión es muy mala" }
    ]
  },

  religion_spirituality: {
    name: "Religia i duchowość",
    description: "Wiara i praktyki duchowe",
    icon: Home, // Changed from Church to Home
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "relig1", polish: "Kościół", spanish: "Iglesia", difficulty: "easy", example: "Kościół w naszej wiosce ma ponad trzysta lat", exampleTranslation: "La iglesia en nuestro pueblo tiene más de trescientos años" },
      { id: "relig2", polish: "Wiara", spanish: "Fe", difficulty: "easy", example: "Wiara daje mi siłę w trudnych chwilach życia", exampleTranslation: "La fe me da fuerza en momentos difíciles de la vida" },
      { id: "relig3", polish: "Modlitwa", spanish: "Oración", difficulty: "easy", example: "Modlitwa pomaga mi znaleźć spokój wewnętrzny", exampleTranslation: "La oración me ayuda a encontrar paz interior" },
      { id: "relig4", polish: "Msza", spanish: "Misa", difficulty: "easy", example: "Chodzę na mszę w każdą niedzielę rano", exampleTranslation: "Voy a misa cada domingo por la mañana" },
      { id: "relig5", polish: "Ksiądz", spanish: "Sacerdote", difficulty: "easy", example: "Ksiądz wygłosił wzruszające kazanie o miłości", exampleTranslation: "El sacerdote dio un sermón conmovedor sobre el amor" },
      { id: "relig6", polish: "Biblia", spanish: "Biblia", difficulty: "easy", example: "Czytam fragmenty Biblii każdego wieczoru przed snem", exampleTranslation: "Leo fragmentos de la Biblia cada noche antes de dormir" },
      { id: "relig7", polish: "Duchowość", spanish: "Espiritualidad", difficulty: "medium", example: "Duchowość jest ważną częścią mojego życia", exampleTranslation: "La espiritualidad es una parte importante de mi vida" },
      { id: "relig8", polish: "Medytacja", spanish: "Meditación", difficulty: "medium", example: "Praktykuję medytację codziennie rano przez dwadzieścia minut", exampleTranslation: "Practico la meditación cada mañana durante veinte minutos" },
      { id: "relig9", polish: "Błogosławieństwo", spanish: "Bendición", difficulty: "medium", example: "Rodzice dali nam swoje błogosławieństwo przed ślubem", exampleTranslation: "Los padres nos dieron su bendición antes de la boda" },
      { id: "relig10", polish: "Święty", spanish: "Santo", difficulty: "medium", example: "To miejsce jest święte dla milionów pielgrzymów", exampleTranslation: "Este lugar es santo para millones de peregrinos" },
      { id: "relig11", polish: "Sakrament", spanish: "Sacramento", difficulty: "medium", example: "Chrzest to pierwszy sakrament w Kościele katolickim", exampleTranslation: "El bautismo es el primer sacramento en la Iglesia católica" },
      { id: "relig12", polish: "Pielgrzymka", spanish: "Peregrinación", difficulty: "medium", example: "Planujemy pielgrzymkę do Santiago de Compostela", exampleTranslation: "Planeamos una peregrinación a Santiago de Compostela" },
      { id: "relig13", polish: "Mam nadzieję", spanish: "Tengo esperanza", difficulty: "hard", example: "Mam nadzieję i wiarę że wszystko się ułoży", exampleTranslation: "Tengo esperanza y fe de que todo saldrá bien" },
      { id: "relig14", polish: "To jest błogosławieństwo", spanish: "Es una bendición", difficulty: "hard", example: "Mieć zdrową rodzinę to prawdziwe błogosławieństwo w życiu", exampleTranslation: "Tener una familia saludable es una verdadera bendición en la vida" },
      { id: "relig15", polish: "Wierzę w dobro", spanish: "Creo en el bien", difficulty: "hard", example: "Wierzę głęboko w dobro ludzi pomimo trudności", exampleTranslation: "Creo profundamente en el bien de las personas a pesar de las dificultades" }
    ]
  },

  problems_solutions: {
    name: "Problemy i rozwiązania",
    description: "Trudności i ich rozwiązywanie",
    icon: Plane, // Changed from AlertCircle to Plane
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "prob1", polish: "Problem", spanish: "Problema", difficulty: "easy", example: "Mam problem z komputerem który nie chce się włączyć", exampleTranslation: "Tengo un problema con la computadora que no quiere encenderse" },
      { id: "prob2", polish: "Rozwiązanie", spanish: "Solución", difficulty: "easy", example: "Znalazłem idealne rozwiązanie tego skomplikowanego zagadnienia", exampleTranslation: "Encontré la solución perfecta a este asunto complicado" },
      { id: "prob3", polish: "Trudność", spanish: "Dificultad", difficulty: "easy", example: "Napotkaliśmy trudność ale udało się ją przezwyciężyć", exampleTranslation: "Encontramos una dificultad pero logramos superarla" },
      { id: "prob4", polish: "Błąd", spanish: "Error", difficulty: "easy", example: "Popełniłem błąd w obliczeniach i muszę to naprawić", exampleTranslation: "Cometí un error en los cálculos y tengo que corregirlo" },
      { id: "prob5", polish: "Naprawa", spanish: "Reparación", difficulty: "easy", example: "Naprawa samochodu będzie kosztować tysiąc złotych", exampleTranslation: "La reparación del coche costará mil zlotys" },
      { id: "prob6", polish: "Pomoc", spanish: "Ayuda", difficulty: "easy", example: "Potrzebuję pomocy z tym ciężkim pudłem", exampleTranslation: "Necesito ayuda con esta caja pesada" },
      { id: "prob7", polish: "Wyzwanie", spanish: "Desafío", difficulty: "medium", example: "To nowe wyzwanie będzie trudne ale interesujące", exampleTranslation: "Este nuevo desafío será difícil pero interesante" },
      { id: "prob8", polish: "Przeszkoda", spanish: "Obstáculo", difficulty: "medium", example: "Każda przeszkoda jest okazją do nauki i rozwoju", exampleTranslation: "Cada obstáculo es una oportunidad para aprender y crecer" },
      { id: "prob9", polish: "Naprawić", spanish: "Arreglar", difficulty: "medium", example: "Muszę naprawić kran który ciągle cieknie", exampleTranslation: "Tengo que arreglar el grifo que gotea constantemente" },
      { id: "prob10", polish: "Konflikt", spanish: "Conflicto", difficulty: "medium", example: "Rozwiązaliśmy konflikt spokojną rozmową i kompromisem", exampleTranslation: "Resolvimos el conflicto con una conversación tranquila y compromiso" },
      { id: "prob11", polish: "Awaria", spanish: "Avería", difficulty: "medium", example: "Awaria prądu trwała całą noc w całej dzielnicy", exampleTranslation: "La avería eléctrica duró toda la noche en todo el barrio" },
      { id: "prob12", polish: "Kryzys", spanish: "Crisis", difficulty: "medium", example: "Przezwyciężyliśmy kryzys dzięki wspólnej pracy zespołu", exampleTranslation: "Superamos la crisis gracias al trabajo conjunto del equipo" },
      { id: "prob13", polish: "Mam problem", spanish: "Tengo un problema", difficulty: "hard", example: "Mam poważny problem i potrzebuję twojej rady", exampleTranslation: "Tengo un problema serio y necesito tu consejo" },
      { id: "prob14", polish: "Jak to naprawić?", spanish: "¿Cómo arreglarlo?", difficulty: "hard", example: "Nie wiem jak to naprawić, czy możesz mi pomóc?", exampleTranslation: "No sé cómo arreglarlo, ¿puedes ayudarme?" },
      { id: "prob15", polish: "Znajdziemy rozwiązanie", spanish: "Encontraremos una solución", difficulty: "hard", example: "Nie martw się, razem znajdziemy najlepsze rozwiązanie", exampleTranslation: "No te preocupes, juntos encontraremos la mejor solución" }
    ]
  },

  describing_people: {
    name: "Opisywanie ludzi",
    description: "Charakterystyka osób",
    icon: Shirt, // Changed from Users, reusing Shirt icon for now
    color: "from-violet-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "desc1", polish: "Wysoki", spanish: "Alto", difficulty: "easy", example: "Mój brat jest bardzo wysoki i gra w koszykówkę", exampleTranslation: "Mi hermano es muy alto y juega al baloncesto" },
      { id: "desc2", polish: "Niski", spanish: "Bajo", difficulty: "easy", example: "Jest niski ale bardzo silny i sprawny fizycznie", exampleTranslation: "Es bajo pero muy fuerte y en buena forma física" },
      { id: "desc3", polish: "Szczupły", spanish: "Delgado", difficulty: "easy", example: "Ona jest szczupła dzięki regularnym ćwiczeniom", exampleTranslation: "Ella es delgada gracias al ejercicio regular" },
      { id: "desc4", polish: "Gruby", spanish: "Gordo", difficulty: "easy", example: "Kot jest trochę gruby bo za dużo je", exampleTranslation: "El gato está un poco gordo porque come demasiado" },
      { id: "desc5", polish: "Młody", spanish: "Joven", difficulty: "easy", example: "Jest młody ale bardzo mądry i doświadczony", exampleTranslation: "Es joven pero muy sabio y experimentado" },
      { id: "desc6", polish: "Stary", spanish: "Viejo", difficulty: "easy", example: "Mój dziadek jest stary ale wciąż bardzo aktywny", exampleTranslation: "Mi abuelo es viejo pero todavía muy activo" },
      { id: "desc7", polish: "Przystojny", spanish: "Guapo", difficulty: "medium", example: "Ten aktor jest bardzo przystojny i utalentowany", exampleTranslation: "Este actor es muy guapo y talentoso" },
      { id: "desc8", polish: "Piękny", spanish: "Hermoso", difficulty: "medium", example: "Ma piękne oczy i cudowny uśmiech", exampleTranslation: "Tiene ojos hermosos y una sonrisa maravillosa" },
      { id: "desc9", polish: "Inteligentny", spanish: "Inteligente", difficulty: "medium", example: "Jest bardzo inteligentny i zawsze dostaje najlepsze oceny", exampleTranslation: "Es muy inteligente y siempre obtiene las mejores calificaciones" },
      { id: "desc10", polish: "Miły", spanish: "Amable", difficulty: "medium", example: "Nasz sąsiad jest bardzo miły i zawsze pomocny", exampleTranslation: "Nuestro vecino es muy amable y siempre servicial" },
      { id: "desc11", polish: "Zabawny", spanish: "Divertido", difficulty: "medium", example: "On jest zabawny i zawsze rozśmiesza wszystkich wokół", exampleTranslation: "Él es divertido y siempre hace reír a todos alrededor" },
      { id: "desc12", polish: "Poważny", spanish: "Serio", difficulty: "medium", example: "Szef jest poważny w pracy ale miły po godzinach", exampleTranslation: "El jefe es serio en el trabajo pero amable fuera de horario" },
      { id: "desc13", polish: "Jak on wygląda?", spanish: "¿Cómo se ve?", difficulty: "hard", example: "Jak wygląda twój brat? Nie widziałem go od lat", exampleTranslation: "¿Cómo se ve tu hermano? No lo he visto en años" },
      { id: "desc14", polish: "Ma brązowe oczy", spanish: "Tiene ojos marrones", difficulty: "hard", example: "Ma piękne brązowe oczy i długie ciemne włosy", exampleTranslation: "Tiene hermosos ojos marrones y cabello largo oscuro" },
      { id: "desc15", polish: "Wygląda młodo", spanish: "Se ve joven", difficulty: "hard", example: "Ma pięćdziesiąt lat ale wygląda dużo młodziej", exampleTranslation: "Tiene cincuenta años pero se ve mucho más joven" }
    ]
  },

  apartment_living: {
    name: "Mieszkanie",
    description: "Życie w mieszkaniu",
    icon: Home, // Already Home, no change needed
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "apt1", polish: "Mieszkanie", spanish: "Apartamento", difficulty: "easy", example: "Moje mieszkanie jest na trzecim piętrze z windą", exampleTranslation: "Mi apartamento está en el tercer piso con ascensor" },
      { id: "apt2", polish: "Czynsz", spanish: "Alquiler", difficulty: "easy", example: "Czynsz płacę pierwszego dnia każdego miesiąca", exampleTranslation: "Pago el alquiler el primer día de cada mes" },
      { id: "apt3", polish: "Właściciel", spanish: "Propietario", difficulty: "easy", example: "Właściciel mieszkania jest bardzo wyrozumiały", exampleTranslation: "El propietario del apartamento es muy comprensivo" },
      { id: "apt4", polish: "Najemca", spanish: "Inquilino", difficulty: "easy", example: "Jako najemca muszę dbać o mieszkanie", exampleTranslation: "Como inquilino debo cuidar el apartamento" },
      { id: "apt5", polish: "Umowa najmu", spanish: "Contrato de alquiler", difficulty: "easy", example: "Podpisaliśmy umowę najmu na dwa lata", exampleTranslation: "Firmamos el contrato de alquiler por dos años" },
      { id: "apt6", polish: "Kaucja", spanish: "Depósito", difficulty: "easy", example: "Kaucja zostanie zwrócona gdy wyprowadzę się z mieszkania", exampleTranslation: "El depósito será devuelto cuando me mude del apartamento" },
      { id: "apt7", polish: "Sąsiedzi", spanish: "Vecinos", difficulty: "medium", example: "Moi sąsiedzi są cisi i bardzo mili dla wszystkich", exampleTranslation: "Mis vecinos son tranquilos y muy amables con todos" },
      { id: "apt8", polish: "Winda", spanish: "Ascensor", difficulty: "medium", example: "Winda jest zepsuta i muszę chodzić po schodach", exampleTranslation: "El ascensor está estropeado y tengo que usar las escaleras" },
      { id: "apt9", polish: "Remont", spanish: "Renovación", difficulty: "medium", example: "Planujemy remont kuchni i łazienki w przyszłym roku", exampleTranslation: "Planeamos la renovación de la cocina y el baño el próximo año" },
      { id: "apt10", polish: "Rachunki", spanish: "Facturas", difficulty: "medium", example: "Płacę wszystkie rachunki za prąd i wodę na czas", exampleTranslation: "Pago todas las facturas de electricidad y agua a tiempo" },
      { id: "apt11", polish: "Umeblowane", spanish: "Amueblado", difficulty: "medium", example: "To mieszkanie jest w pełni umeblowane i gotowe do zamieszkania", exampleTranslation: "Este apartamento está completamente amueblado y listo para habitar" },
      { id: "apt12", polish: "Kawalerka", spanish: "Estudio", difficulty: "medium", example: "Mieszkam w małej kawalerce idealnej dla jednej osoby", exampleTranslation: "Vivo en un estudio pequeño ideal para una persona" },
      { id: "apt13", polish: "Szukam mieszkania", spanish: "Busco apartamento", difficulty: "hard", example: "Szukam mieszkania dwupokojowego w centrum miasta", exampleTranslation: "Busco apartamento de dos habitaciones en el centro de la ciudad" },
      { id: "apt14", polish: "Ile wynosi czynsz?", spanish: "¿Cuánto es el alquiler?", difficulty: "hard", example: "Ile wynosi miesięczny czynsz za to mieszkanie?", exampleTranslation: "¿Cuánto es el alquiler mensual por este apartamento?" },
      { id: "apt15", polish: "Chcę się wyprowadzić", spanish: "Quiero mudarme", difficulty: "hard", example: "Chcę się wyprowadzić do większego mieszkania z balkonem", exampleTranslation: "Quiero mudarme a un apartamento más grande con balcón" }
    ]
  },

  personality_traits: {
    name: "Cechy charakteru",
    description: "Osobowość i charakter",
    icon: Shirt, // Changed from Users, reusing Shirt icon for now
    color: "from-teal-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "pers1", polish: "Odważny", spanish: "Valiente", difficulty: "easy", example: "Strażak musi być odważny w obliczu niebezpieczeństwa", exampleTranslation: "El bombero debe ser valiente frente al peligro" },
      { id: "pers2", polish: "Leniwy", spanish: "Perezoso", difficulty: "easy", example: "Nie bądź leniwy i pomóż mi posprzątać", exampleTranslation: "No seas perezoso y ayúdame a limpiar" },
      { id: "pers3", polish: "Pracowity", spanish: "Trabajador", difficulty: "easy", example: "Jest bardzo pracowity i oddany swojej pracy", exampleTranslation: "Es muy trabajador y dedicado a su trabajo" },
      { id: "pers4", polish: "Cierpliwy", spanish: "Paciente", difficulty: "easy", example: "Nauczyciel musi być cierpliwy z uczniami", exampleTranslation: "El maestro debe ser paciente con los estudiantes" },
      { id: "pers5", polish: "Hojny", spanish: "Generoso", difficulty: "easy", example: "On jest bardzo hojny i zawsze pomaga potrzebującym", exampleTranslation: "Él es muy generoso y siempre ayuda a los necesitados" },
      { id: "pers6", polish: "Skąpy", spanish: "Tacaño", difficulty: "easy", example: "Nie bądź skąpy i zostaw przyzwoity napiwek", exampleTranslation: "No seas tacaño y deja una propina decente" },
      { id: "pers7", polish: "Uczciwy", spanish: "Honesto", difficulty: "medium", example: "Cenimy ludzi uczciwych którzy mówią prawdę", exampleTranslation: "Valoramos a las personas honestas que dicen la verdad" },
      { id: "pers8", polish: "Towarzyski", spanish: "Sociable", difficulty: "medium", example: "Jest bardzo towarzyski i ma wielu przyjaciół", exampleTranslation: "Es muy sociable y tiene muchos amigos" },
      { id: "pers9", polish: "Nieśmiały", spanish: "Tímido", difficulty: "medium", example: "Był nieśmiały w szkole ale teraz jest pewny siebie", exampleTranslation: "Era tímido en la escuela pero ahora es seguro de sí mismo" },
      { id: "pers10", polish: "Ambitny", spanish: "Ambicioso", difficulty: "medium", example: "Es ambicioso y tiene grandes planes para el futuro", exampleTranslation: "Es ambicioso y tiene grandes planes para el futuro" },
      { id: "pers11", polish: "Wiarygodny", spanish: "Confiable", difficulty: "medium", example: "On jest wiarygodny i można na nim polegać", exampleTranslation: "Él es confiable y se puede contar con él" },
      { id: "pers12", polish: "Optymistyczny", spanish: "Optimista", difficulty: "medium", example: "Jestem optymistyczny co do przyszłości naszej firmy", exampleTranslation: "Soy optimista sobre el futuro de nuestra empresa" },
      { id: "pers13", polish: "Jaki on jest?", spanish: "¿Cómo es él?", difficulty: "hard", example: "Jaki on jest jako osoba? Opowiedz mi o jego charakterze", exampleTranslation: "¿Cómo es él como persona? Cuéntame sobre su carácter" },
      { id: "pers14", polish: "Jest bardzo odpowiedzialny", spanish: "Es muy responsable", difficulty: "hard", example: "Jest bardzo odpowiedzialny i zawsze dotrzymuje obietnic", exampleTranslation: "Es muy responsable y siempre cumple sus promesas" },
      { id: "pers15", polish: "Ma dobre serce", spanish: "Tiene buen corazón", difficulty: "hard", example: "Ma naprawdę dobre serce i zawsze pomaga innym", exampleTranslation: "Tiene realmente buen corazón y siempre ayuda a los demás" }
    ]
  },

  asking_directions: {
    name: "Pytanie o drogę",
    description: "Orientacja w terenie",
    icon: Car, // Changed from MapPin, reusing Car icon for now
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "ask1", polish: "Gdzie", spanish: "Dónde", difficulty: "easy", example: "Gdzie jest najbliższa stacja metra stąd?", exampleTranslation: "¿Dónde está la estación de metro más cercana desde aquí?" },
      { id: "ask2", polish: "Jak", spanish: "Cómo", difficulty: "easy", example: "Jak mogę dostać się do centrum miasta?", exampleTranslation: "¿Cómo puedo llegar al centro de la ciudad?" },
      { id: "ask3", polish: "Daleko", spanish: "Lejos", difficulty: "easy", example: "Czy dworzec kolejowy jest daleko stąd?", exampleTranslation: "¿La estación de tren está lejos de aquí?" },
      { id: "ask4", polish: "Blisko", spanish: "Cerca", difficulty: "easy", example: "Apteka jest bardzo blisko zaraz za rogiem", exampleTranslation: "La farmacia está muy cerca justo a la vuelta de la esquina" },
      { id: "ask5", polish: "Naprzeciwko", spanish: "Enfrente", difficulty: "easy", example: "Sklep jest naprzeciwko banku po drugiej stronie", exampleTranslation: "La tienda está enfrente del banco al otro lado" },
      { id: "ask6", polish: "Obok", spanish: "Al lado", difficulty: "easy", example: "Kawiarnia jest obok kina przy głównej ulicy", exampleTranslation: "La cafetería está al lado del cine en la calle principal" },
      { id: "ask7", polish: "Za", spanish: "Detrás", difficulty: "medium", example: "Parking jest za budynkiem urzędu miejskiego", exampleTranslation: "El estacionamiento está detrás del edificio del ayuntamiento" },
      { id: "ask8", polish: "Przed", spanish: "Delante", difficulty: "medium", example: "Spotkajmy się przed głównym wejściem do muzeum", exampleTranslation: "Encontrémonos delante de la entrada principal del museo" },
      { id: "ask9", polish: "Między", spanish: "Entre", difficulty: "medium", example: "Restauracja jest między bankiem a apteką", exampleTranslation: "El restaurante está entre el banco y la farmacia" },
      { id: "ask10", polish: "Wzdłuż", spanish: "A lo largo", difficulty: "medium", example: "Idź wzdłuż rzeki aż zobaczysz most", exampleTranslation: "Camina a lo largo del río hasta que veas el puente" },
      { id: "ask11", polish: "W stronę", spanish: "Hacia", difficulty: "medium", example: "Idź w stronę parku i skręć w drugą ulicę", exampleTranslation: "Camina hacia el parque y gira en la segunda calle" },
      { id: "ask12", polish: "Minąć", spanish: "Pasar", difficulty: "medium", example: "Musisz minąć kościół i będzie po prawej stronie", exampleTranslation: "Tienes que pasar la iglesia y estará a la derecha" },
      { id: "ask13", polish: "Zgubiłem się", spanish: "Me perdí", difficulty: "hard", example: "Przepraszam, zgubiłem się i nie wiem gdzie jestem", exampleTranslation: "Disculpe, me perdí y no sé dónde estoy" },
      { id: "ask14", polish: "Czy to daleko stąd?", spanish: "¿Está lejos de aquí?", difficulty: "hard", example: "Czy dworzec autobusowy jest daleko stąd pieszo?", exampleTranslation: "¿La estación de autobuses está lejos de aquí a pie?" },
      { id: "ask15", polish: "Ile to zajmie?", spanish: "¿Cuánto tiempo toma?", difficulty: "hard", example: "Ile czasu zajmie dojście tam pieszo z tego miejsca?", exampleTranslation: "¿Cuánto tiempo toma llegar allí a pie desde este lugar?" }
    ]
  },

  clothing_verbs: {
    name: "Ubieranie się",
    description: "Czynności związane z ubraniami",
    icon: Shirt, // Shirt icon already present, no change needed
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "cloth1", polish: "Ubierać się", spanish: "Vestirse", difficulty: "easy", example: "Ubieram się elegancko do pracy każdego dnia", exampleTranslation: "Me visto elegante para el trabajo cada día" },
      { id: "cloth2", polish: "Rozbierać się", spanish: "Desvestirse", difficulty: "easy", example: "Rozbierам się i kładę do łóżka późno wieczorem", exampleTranslation: "Me desvisto y me acuesto tarde por la noche" },
      { id: "cloth3", polish: "Zakładać", spanish: "Ponerse", difficulty: "easy", example: "Zakładam kurtkę bo jest zimno na zewnątrz", exampleTranslation: "Me pongo la chaqueta porque hace frío afuera" },
      { id: "cloth4", polish: "Zdejmować", spanish: "Quitarse", difficulty: "easy", example: "Zdejmuję buty gdy wchodzę do domu", exampleTranslation: "Me quito los zapatos cuando entro a casa" },
      { id: "cloth5", polish: "Przymierzać", spanish: "Probarse", difficulty: "easy", example: "Mogę przymierzyć tę sukienkę w przymierzalni?", exampleTranslation: "¿Puedo probarme este vestido en el probador?" },
      { id: "cloth6", polish: "Pasować", spanish: "Quedar", difficulty: "easy", example: "Ta koszula idealnie mi pasuje rozmiarem", exampleTranslation: "Esta camisa me queda perfecta de talla" },
      { id: "cloth7", polish: "Przebierać się", spanish: "Cambiarse", difficulty: "medium", example: "Muszę się przebrać przed wyjściem na imprezę", exampleTranslation: "Tengo que cambiarme antes de salir a la fiesta" },
      { id: "cloth8", polish: "Prać", spanish: "Lavar", difficulty: "medium", example: "Piorę ubrania w pralce dwa razy w tygodniu", exampleTranslation: "Lavo la ropa en la lavadora dos veces por semana" },
      { id: "cloth9", polish: "Prasować", spanish: "Planchar", difficulty: "medium", example: "Muszę wyprasować koszulę przed jutrzejszym spotkaniem", exampleTranslation: "Tengo que planchar la camisa antes de la reunión de mañana" },
      { id: "cloth10", polish: "Suszyć", spanish: "Secar", difficulty: "medium", example: "Suszę pranie na balkonie w słoneczny dzień", exampleTranslation: "Seco la ropa en el balcón en un día soleado" },
      { id: "cloth11", polish: "Składać", spanish: "Doblar", difficulty: "medium", example: "Składam czyste ubrania i układam w szafie", exampleTranslation: "Doblo la ropa limpia y la guardo en el armario" },
      { id: "cloth12", polish: "Wieszać", spanish: "Colgar", difficulty: "medium", example: "Wieszam płaszcz na wieszaku przy drzwiach", exampleTranslation: "Cuelgo el abrigo en el perchero junto a la puerta" },
      { id: "cloth13", polish: "To mi za małe", spanish: "Me queda pequeño", difficulty: "hard", example: "Ten sweter jest mi za mały, potrzebuję większego rozmiaru", exampleTranslation: "Este suéter me queda pequeño, necesito una talla más grande" },
      { id: "cloth14", polish: "Gdzie mogę przymierzyć?", spanish: "¿Dónde puedo probarme?", difficulty: "hard", example: "Gdzie mogę przymierzyć te spodnie w tym sklepie?", exampleTranslation: "¿Dónde puedo probarme estos pantalones en esta tienda?" },
      { id: "cloth15", polish: "Muszę to wyprać", spanish: "Tengo que lavar esto", difficulty: "hard", example: "Ta koszula jest brudna i muszę ją wyprać dzisiaj", exampleTranslation: "Esta camisa está sucia y tengo que lavarla hoy" }
    ]
  },

  leisure_free_time: {
    name: "Wolny czas",
    description: "Wypoczynek i rozrywka",
    icon: Sun, // Changed from Coffee, reusing Sun icon for now
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "leis1", polish: "Wolny czas", spanish: "Tiempo libre", difficulty: "easy", example: "W wolnym czasie lubię czytać książki i słuchać muzyki", exampleTranslation: "En mi tiempo libre me gusta leer libros y escuchar música" },
      { id: "leis2", polish: "Odpoczynek", spanish: "Descanso", difficulty: "easy", example: "Potrzebuję odpoczynku po intensywnym tygodniu pracy", exampleTranslation: "Necesito descanso después de una semana intensa de trabajo" },
      { id: "leis3", polish: "Zabawa", spanish: "Diversión", difficulty: "easy", example: "Dzieci uwielbiają zabawę w parku z kolorowymi piłkami", exampleTranslation: "Los niños adoran la diversión en el parque con pelotas coloridas" },
      { id: "leis4", polish: "Relaks", spanish: "Relajación", difficulty: "easy", example: "Joga to doskonały sposób na relaks i medytację", exampleTranslation: "El yoga es una forma excelente para la relajación y meditación" },
      { id: "leis5", polish: "Rozrywka", spanish: "Entretenimiento", difficulty: "easy", example: "Film to popularna forma rozrywki dla całej rodziny", exampleTranslation: "El cine es una forma popular de entretenimiento para toda la familia" },
      { id: "leis6", polish: "Nudzić się", spanish: "Aburrirse", difficulty: "easy", example: "Nigdy się nie nudzę bo mam wiele hobby", exampleTranslation: "Nunca me aburro porque tengo muchos hobbies" },
      { id: "leis7", polish: "Wypoczywać", spanish: "Descansar", difficulty: "medium", example: "Wypoczywam na kanapie oglądając swój ulubiony serial", exampleTranslation: "Descanso en el sofá viendo mi serie favorita" },
      { id: "leis8", polish: "Spacer", spanish: "Paseo", difficulty: "medium", example: "Wieczorny spacer po parku to moja codzienna rutyna", exampleTranslation: "El paseo vespertino por el parque es mi rutina diaria" },
      { id: "leis9", polish: "Piknik", spanish: "Picnic", difficulty: "medium", example: "Organizujemy piknik rodzinny nad jeziorem w niedzielę", exampleTranslation: "Organizamos un picnic familiar junto al lago el domingo" },
      { id: "leis10", polish: "Gra planszowa", spanish: "Juego de mesa", difficulty: "medium", example: "Gramy w gry planszowe z przyjaciółmi w piątkowe wieczory", exampleTranslation: "Jugamos juegos de mesa con amigos los viernes por la noche" },
      { id: "leis11", polish: "Puzzle", spanish: "Rompecabezas", difficulty: "medium", example: "Układanie puzzli jest relaksujące i uspokajające", exampleTranslation: "Armar rompecabezas es relajante y tranquilizador" },
      { id: "leis12", polish: "Grill", spanish: "Parrillada", difficulty: "medium", example: "Robimy grilla w ogrodzie gdy jest ładna pogoda", exampleTranslation: "Hacemos una parrillada en el jardín cuando hace buen tiempo" },
      { id: "leis13", polish: "Co robisz w wolnym czasie?", spanish: "¿Qué haces en tu tiempo libre?", difficulty: "hard", example: "Co lubisz robić w wolnym czasie dla relaksu?", exampleTranslation: "¿Qué te gusta hacer en tu tiempo libre para relajarte?" },
      { id: "leis14", polish: "Lubię się zrelaksować", spanish: "Me gusta relajarme", difficulty: "hard", example: "Po pracy lubię się zrelaksować czytając dobrą książkę", exampleTranslation: "Después del trabajo me gusta relajarme leyendo un buen libro" },
      { id: "leis15", polish: "Spędźmy czas razem", spanish: "Pasemos tiempo juntos", difficulty: "hard", example: "Spędźmy więcej czasu razem w ten weekend robiąc coś fajnego", exampleTranslation: "Pasemos más tiempo juntos este fin de semana haciendo algo divertido" }
    ]
  },

  learning_education: {
    name: "Nauka i edukacja",
    description: "Proces uczenia się",
    icon: Plane, // Changed from GraduationCap, reusing Plane icon for now
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "learn1", polish: "Uczyć się", spanish: "Aprender", difficulty: "easy", example: "Uczę się hiszpańskiego od sześciu miesięcy", exampleTranslation: "Estoy aprendiendo español desde hace seis meses" },
      { id: "learn2", polish: "Nauczyciel", spanish: "Maestro", difficulty: "easy", example: "Nauczyciel wyjaśnia trudne pojęcia w prosty sposób", exampleTranslation: "El maestro explica conceptos difíciles de forma simple" },
      { id: "learn3", polish: "Klasa", spanish: "Clase", difficulty: "easy", example: "Mam klasę języka hiszpańskiego dwa razy w tygodniu", exampleTranslation: "Tengo clase de español dos veces por semana" },
      { id: "learn4", polish: "Zadanie domowe", spanish: "Tarea", difficulty: "easy", example: "Muszę odrobić zadanie domowe przed jutrem", exampleTranslation: "Tengo que hacer la tarea antes de mañana" },
      { id: "learn5", polish: "Test", spanish: "Examen", difficulty: "easy", example: "Przygotowuję się do ważnego testu z matematyki", exampleTranslation: "Me preparo para un examen importante de matemáticas" },
      { id: "learn6", polish: "Notatki", spanish: "Apuntes", difficulty: "easy", example: "Robię szczegółowe notatki podczas każdej lekcji", exampleTranslation: "Tomo apuntes detallados durante cada lección" },
      { id: "learn7", polish: "Studiować", spanish: "Estudiar", difficulty: "medium", example: "Studiuję przez trzy godziny codziennie po szkole", exampleTranslation: "Estudio durante tres horas cada día después de la escuela" },
      { id: "learn8", polish: "Rozumieć", spanish: "Entender", difficulty: "medium", example: "Nie rozumiem tego zagadnienia i potrzebuję pomocy", exampleTranslation: "No entiendo este tema y necesito ayuda" },
      { id: "learn9", polish: "Wyjaśniać", spanish: "Explicar", difficulty: "medium", example: "Czy możesz wyjaśnić to jeszcze raz powoli?", exampleTranslation: "¿Puedes explicar esto otra vez despacio?" },
      { id: "learn10", polish: "Powtarzać", spanish: "Repasar", difficulty: "medium", example: "Powtarzam materiał przed każdym egzaminem", exampleTranslation: "Repaso el material antes de cada examen" },
      { id: "learn11", polish: "Zapamiętać", spanish: "Memorizar", difficulty: "medium", example: "Muszę zapamiętać wszystkie te nowe słówka", exampleTranslation: "Tengo que memorizar todas estas palabras nuevas" },
      { id: "learn12", polish: "Ćwiczyć", spanish: "Practicar", difficulty: "medium", example: "Ćwiczę wymowę mówiąc głośno codziennie", exampleTranslation: "Practico la pronunciación hablando en voz alta cada día" },
      { id: "learn13", polish: "Nie rozumiem", spanish: "No entiendo", difficulty: "hard", example: "Przepraszam ale nie rozumiem tego wyjaśnienia", exampleTranslation: "Lo siento pero no entiendo esta explicación" },
      { id: "learn14", polish: "Jak się to wymawia?", spanish: "¿Cómo se pronuncia?", difficulty: "hard", example: "Jak się prawidłowo wymawia to trudne słowo?", exampleTranslation: "¿Cómo se pronuncia correctamente esta palabra difícil?" },
      { id: "learn15", polish: "Czy możesz powtórzyć?", spanish: "¿Puedes repetir?", difficulty: "hard", example: "Mówiłeś za szybko, czy możesz powtórzyć wolniej?", exampleTranslation: "Hablaste demasiado rápido, ¿puedes repetir más despacio?" }
    ]
  }
};

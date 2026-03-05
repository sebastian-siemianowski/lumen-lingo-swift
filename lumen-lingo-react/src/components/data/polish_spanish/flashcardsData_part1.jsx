
/**
 * POLISH → SPANISH FLASHCARDS - PART 1
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains flashcard categories (1-25).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Home,
  Apple,
  Shirt,
  Users,
  Utensils,
  Heart,
  Clock,
  Cloud,
  MapPin,
  Briefcase,
  GraduationCap,
  Plane,
  ShoppingCart,
  Dumbbell,
  Coffee,
  Music,
  Car,
  Building,
  Calendar,
  Phone,
  Book,
  Stethoscope,
  TreePine,
  UtensilsCrossed,
  Pizza
} from "lucide-react";

export const flashcardsCategories_part1 = {
  home_house: {
    name: "Dom i mieszkanie",
    description: "Podstawowe słownictwo związane z domem",
    icon: Home,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "home1", polish: "Dom", spanish: "Casa", difficulty: "easy", example: "Mój dom jest duży i ma piękny ogród z kwiatami", exampleTranslation: "Mi casa es grande y tiene un hermoso jardín con flores" },
      { id: "home2", polish: "Pokój", spanish: "Habitación", difficulty: "easy", example: "Mój pokój jest jasny i słoneczny przez cały dzień", exampleTranslation: "Mi habitación es luminosa y soleada todo el día" },
      { id: "home3", polish: "Kuchnia", spanish: "Cocina", difficulty: "easy", example: "Kuchnia to moje ulubione miejsce w całym domu", exampleTranslation: "La cocina es mi lugar favorito de toda la casa" },
      { id: "home4", polish: "Łazienka", spanish: "Baño", difficulty: "easy", example: "Łazienka jest czysta i nowoczesna po remoncie", exampleTranslation: "El baño está limpio y moderno después de la reforma" },
      { id: "home5", polish: "Okno", spanish: "Ventana", difficulty: "easy", example: "Przez okno widzę piękny widok na góry", exampleTranslation: "Por la ventana veo una hermosa vista de las montañas" },
      { id: "home6", polish: "Drzwi", spanish: "Puerta", difficulty: "easy", example: "Drzwi wejściowe są wykonane z solidnego drewna", exampleTranslation: "La puerta de entrada está hecha de madera sólida" },
      { id: "home7", polish: "Meble", spanish: "Muebles", difficulty: "medium", example: "Kupiliśmy nowe meble do salonu w skandynawskim stylu", exampleTranslation: "Compramos muebles nuevos para el salón en estilo escandinavo" },
      { id: "home8", polish: "Ściana", spanish: "Pared", difficulty: "medium", example: "Ściana w sypialni jest pomalowana na spokojny niebieski kolor", exampleTranslation: "La pared del dormitorio está pintada de un azul tranquilo" },
      { id: "home9", polish: "Podłoga", spanish: "Suelo", difficulty: "medium", example: "Podłoga w salonie jest wykończona ciepłym drewnem dębowym", exampleTranslation: "El suelo del salón está acabado con cálida madera de roble" },
      { id: "home10", polish: "Sufit", spanish: "Techo", difficulty: "medium", example: "Sufit jest wysoki i sprawia że pokój wydaje się przestronny", exampleTranslation: "El techo es alto y hace que la habitación parezca espaciosa" },
      { id: "home11", polish: "Balkon", spanish: "Balcón", difficulty: "medium", example: "Na balkonie uprawiam zioła i kolorowe kwiaty w donicach", exampleTranslation: "En el balcón cultivo hierbas y flores coloridas en macetas" },
      { id: "home12", polish: "Garaż", spanish: "Garaje", difficulty: "medium", example: "W garażu trzymam samochód i narzędzia do pracy w ogrodzie", exampleTranslation: "En el garaje guardo el coche y herramientas para el jardín" },
      { id: "home13", polish: "Gdzie jest łazienka?", spanish: "¿Dónde está el baño?", difficulty: "hard", example: "Przepraszam, gdzie jest łazienka? To moja pierwsza wizyta tutaj", exampleTranslation: "Disculpe, ¿dónde está el baño? Es mi primera visita aquí" },
      { id: "home14", polish: "Czuję się jak w domu", spanish: "Me siento como en casa", difficulty: "hard", example: "U ciebie zawsze czuję się jak w domu, dziękuję za gościnność", exampleTranslation: "En tu casa siempre me siento como en casa, gracias por la hospitalidad" },
      { id: "home15", polish: "Muszę posprzątać pokój", spanish: "Tengo que limpiar la habitación", difficulty: "hard", example: "Muszę dokładnie posprzątać pokój przed przyjściem gości", exampleTranslation: "Tengo que limpiar bien la habitación antes de que lleguen los invitados" }
    ]
  },

  food_basic: {
    name: "Jedzenie podstawowe",
    description: "Podstawowe produkty spożywcze",
    icon: Apple,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "food1", polish: "Chleb", spanish: "Pan", difficulty: "easy", example: "Świeży chleb prosto z piekarni pachnie cudownie", exampleTranslation: "El pan fresco recién salido de la panadería huele maravillosamente" },
      { id: "food2", polish: "Mleko", spanish: "Leche", difficulty: "easy", example: "Piję ciepłe mleko z miodem przed snem", exampleTranslation: "Bebo leche caliente con miel antes de dormir" },
      { id: "food3", polish: "Jajko", spanish: "Huevo", difficulty: "easy", example: "Na śniadanie jem jajko sadzone z tostami", exampleTranslation: "Para el desayuno como huevo frito con tostadas" },
      { id: "food4", polish: "Ser", spanish: "Queso", difficulty: "easy", example: "Ten ser włoski ma intensywny i wyrazisty smak", exampleTranslation: "Este queso italiano tiene un sabor intenso y marcado" },
      { id: "food5", polish: "Masło", spanish: "Mantequilla", difficulty: "easy", example: "Smaruję masłem ciepłe bułki prosto z piekarni", exampleTranslation: "Unto con mantequilla los panecillos calientes recién de la panadería" },
      { id: "food6", polish: "Cukier", spanish: "Azúcar", difficulty: "easy", example: "Dodaję trochę cukru do kawy dla słodkości", exampleTranslation: "Añado un poco de azúcar al café para endulzarlo" },
      { id: "food7", polish: "Sól", spanish: "Sal", difficulty: "medium", example: "Sól morska jest zdrowsza niż zwykła sól kuchenna", exampleTranslation: "La sal marina es más saludable que la sal común de cocina" },
      { id: "food8", polish: "Mąka", spanish: "Harina", difficulty: "medium", example: "Używam mąki pszennej do pieczenia domowego chleba", exampleTranslation: "Uso harina de trigo para hornear pan casero" },
      { id: "food9", polish: "Ryż", spanish: "Arroz", difficulty: "medium", example: "Ryż basmati jest idealny do dań azjatyckich", exampleTranslation: "El arroz basmati es ideal para platos asiáticos" },
      { id: "food10", polish: "Makaron", spanish: "Pasta", difficulty: "medium", example: "Włoski makaron gotuje się zaledwie osiem minut", exampleTranslation: "La pasta italiana se cocina en apenas ocho minutos" },
      { id: "food11", polish: "Olej", spanish: "Aceite", difficulty: "medium", example: "Oliwa z oliwek jest bardzo zdrowa dla serca", exampleTranslation: "El aceite de oliva es muy saludable para el corazón" },
      { id: "home12", polish: "Ocet", spanish: "Vinagre", difficulty: "medium", example: "Ocet balsamiczny dodaje głębi smaku sałatkom", exampleTranslation: "El vinagre balsámico añade profundidad de sabor a las ensaladas" },
      { id: "food13", polish: "Co lubisz jeść?", spanish: "¿Qué te gusta comer?", difficulty: "hard", example: "Co najbardziej lubisz jeść na śniadanie w weekendy?", exampleTranslation: "¿Qué te gusta comer más para el desayuno los fines de semana?" },
      { id: "food14", polish: "Jestem głodny", spanish: "Tengo hambre", difficulty: "hard", example: "Jestem bardzo głodny po całym dniu bez jedzenia", exampleTranslation: "Tengo mucha hambre después de todo el día sin comer" },
      { id: "food15", polish: "Smacznego!", spanish: "¡Buen provecho!", difficulty: "hard", example: "Smacznego! Mam nadzieję że ci zasmakuje to danie", exampleTranslation: "¡Buen provecho! Espero que te guste este plato" }
    ]
  },

  clothing: {
    name: "Ubrania",
    description: "Podstawowe ubrania i akcesoria",
    icon: Shirt,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "cloth1", polish: "Koszula", spanish: "Camisa", difficulty: "easy", example: "Ta koszula w kratkę jest bardzo elegancka i wygodna", exampleTranslation: "Esta camisa de cuadros es muy elegante y cómoda" },
      { id: "cloth2", polish: "Spodnie", spanish: "Pantalones", difficulty: "easy", example: "Noszę wygodne spodnie jeansowe na co dzień", exampleTranslation: "Llevo pantalones vaqueros cómodos para el día a día" },
      { id: "cloth3", polish: "Sukienka", spanish: "Vestido", difficulty: "easy", example: "Kupiłam piękną sukienkę na letnie wesele", exampleTranslation: "Compré un vestido hermoso para una boda de verano" },
      { id: "cloth4", polish: "Buty", spanish: "Zapatos", difficulty: "easy", example: "Te skórzane buty są bardzo wygodne do chodzenia", exampleTranslation: "Estos zapatos de cuero son muy cómodos para caminar" },
      { id: "cloth5", polish: "Sweter", spanish: "Suéter", difficulty: "easy", example: "Ciepły sweter z wełny jest idealny na zimę", exampleTranslation: "El suéter cálido de lana es ideal para el invierno" },
      { id: "cloth6", polish: "Kurtka", spanish: "Chaqueta", difficulty: "easy", example: "Moja zimowa kurtka chroni przed mrozem i wiatrem", exampleTranslation: "Mi chaqueta de invierno protege del frío y del viento" },
      { id: "cloth7", polish: "Płaszcz", spanish: "Abrigo", difficulty: "medium", example: "Elegancki płaszcz doskonale pasuje do formalnych okazji", exampleTranslation: "El abrigo elegante es perfecto para ocasiones formales" },
      { id: "cloth8", polish: "Czapka", spanish: "Gorro", difficulty: "medium", example: "Wełniana czapka chroni głowę przed zimnem", exampleTranslation: "El gorro de lana protege la cabeza del frío" },
      { id: "cloth9", polish: "Rękawiczki", spanish: "Guantes", difficulty: "medium", example: "Rękawiczki skórzane są eleganckie i ciepłe jednocześnie", exampleTranslation: "Los guantes de cuero son elegantes y cálidos a la vez" },
      { id: "cloth10", polish: "Szalik", spanish: "Bufanda", difficulty: "medium", example: "Kolorowy szalik dodaje stylu zimowej garderobie", exampleTranslation: "La bufanda colorida añade estilo al vestuario de invierno" },
      { id: "cloth11", polish: "Pasek", spanish: "Cinturón", difficulty: "medium", example: "Pasek skórzany podtrzymuje spodnie i dodaje elegancji", exampleTranslation: "El cinturón de cuero sostiene los pantalones y añade elegancia" },
      { id: "cloth12", polish: "Krawat", spanish: "Corbata", difficulty: "medium", example: "Jedwabny krawat jest niezbędny do garnituru biznesowego", exampleTranslation: "La corbata de seda es indispensable para el traje de negocios" },
      { id: "cloth13", polish: "Co mam ubrać?", spanish: "¿Qué me pongo?", difficulty: "hard", example: "Co mam ubrać na tę elegancką kolację w restauracji?", exampleTranslation: "¿Qué me pongo para esta cena elegante en el restaurante?" },
      { id: "cloth14", polish: "To ci pasuje", spanish: "Te queda bien", difficulty: "hard", example: "Ten sweter naprawdę ci pasuje, wyglądasz świetnie", exampleTranslation: "Este suéter te queda muy bien, te ves genial" },
      { id: "cloth15", polish: "Gdzie mogę to przymierzyć?", spanish: "¿Dónde puedo probarme esto?", difficulty: "hard", example: "Gdzie mogę przymierzyć tę kurtkę aby sprawdzić rozmiar?", exampleTranslation: "¿Dónde puedo probarme esta chaqueta para verificar la talla?" }
    ]
  },

  family: {
    name: "Rodzina",
    description: "Członkowie rodziny i relacje",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "fam1", polish: "Matka", spanish: "Madre", difficulty: "easy", example: "Moja matka jest najlepszą kucharką na świecie", exampleTranslation: "Mi madre es la mejor cocinera del mundo" },
      { id: "fam2", polish: "Ojciec", spanish: "Padre", difficulty: "easy", example: "Ojciec uczy mnie jak naprawiać różne rzeczy", exampleTranslation: "Mi padre me enseña cómo reparar diferentes cosas" },
      { id: "fam3", polish: "Brat", spanish: "Hermano", difficulty: "easy", example: "Mój młodszy brat uwielbia grać w piłkę nożną", exampleTranslation: "Mi hermano menor adora jugar al fútbol" },
      { id: "fam4", polish: "Siostra", spanish: "Hermana", difficulty: "easy", example: "Moja siostra studiuje medycynę na uniwersytecie", exampleTranslation: "Mi hermana estudia medicina en la universidad" },
      { id: "fam5", polish: "Dziadek", spanish: "Abuelo", difficulty: "easy", example: "Dziadek opowiada fascynujące historie z młodości", exampleTranslation: "El abuelo cuenta historias fascinantes de su juventud" },
      { id: "fam6", polish: "Babcia", spanish: "Abuela", difficulty: "easy", example: "Babcia robi najlepsze pierogi na całym świecie", exampleTranslation: "La abuela hace los mejores pierogi del mundo entero" },
      { id: "fam7", polish: "Wujek", spanish: "Tío", difficulty: "medium", example: "Wujek mieszka w Hiszpanii i często nas odwiedza", exampleTranslation: "El tío vive en España y nos visita frecuentemente" },
      { id: "fam8", polish: "Ciocia", spanish: "Tía", difficulty: "medium", example: "Ciocia zawsze pamięta o moich urodzinach", exampleTranslation: "La tía siempre recuerda mi cumpleaños" },
      { id: "fam9", polish: "Kuzyn", spanish: "Primo", difficulty: "medium", example: "Z kuzynem spędzamy wakacje razem co roku", exampleTranslation: "Con mi primo pasamos las vacaciones juntos cada año" },
      { id: "fam10", polish: "Wnuk", spanish: "Nieto", difficulty: "medium", example: "Dziadkowie uwielbiają spędzać czas ze swoim pierwszym wnukiem", exampleTranslation: "Los abuelos adoran pasar tiempo con su primer nieto" },
      { id: "fam11", polish: "Teściowa", spanish: "Suegra", difficulty: "medium", example: "Moja teściowa jest bardzo życzliwa i pomocna", exampleTranslation: "Mi suegra es muy amable y servicial" },
      { id: "fam12", polish: "Rodzice", spanish: "Padres", difficulty: "medium", example: "Rodzice zawsze mnie wspierają w trudnych chwilach", exampleTranslation: "Mis padres siempre me apoyan en los momentos difíciles" },
      { id: "fam13", polish: "Mam dużą rodzinę", spanish: "Tengo una familia grande", difficulty: "hard", example: "Mam bardzo dużą rodzinę i często organizujemy spotkania", exampleTranslation: "Tengo una familia muy grande y a menudo organizamos reuniones" },
      { id: "fam14", polish: "Jesteśmy bardzo blisko", spanish: "Somos muy unidos", difficulty: "hard", example: "W naszej rodzinie jesteśmy bardzo blisko i zawsze sobie pomagamy", exampleTranslation: "En nuestra familia somos muy unidos y siempre nos ayudamos" },
      { id: "fam15", polish: "Rodzina jest najważniejsza", spanish: "La familia es lo más importante", difficulty: "hard", example: "Dla mnie rodzina jest zawsze najważniejsza w życiu", exampleTranslation: "Para mí la familia siempre es lo más importante en la vida" }
    ]
  },

  colors: {
    name: "Kolory",
    description: "Podstawowe kolory i odcienie",
    icon: Heart,
    color: "from-rainbow-start to-rainbow-end",
    level: "beginner",
    words: [
      { id: "col1", polish: "Czerwony", spanish: "Rojo", difficulty: "easy", example: "Czerwone róże są symbolem miłości i namiętności", exampleTranslation: "Las rosas rojas son símbolo de amor y pasión" },
      { id: "col2", polish: "Niebieski", spanish: "Azul", difficulty: "easy", example: "Niebo jest pięknie błękitne w słoneczny dzień", exampleTranslation: "El cielo está hermosamente azul en un día soleado" },
      { id: "col3", polish: "Zielony", spanish: "Verde", difficulty: "easy", example: "Zielone drzewa wyglądają świeżo po deszczu", exampleTranslation: "Los árboles verdes se ven frescos después de la lluvia" },
      { id: "col4", polish: "Żółty", spanish: "Amarillo", difficulty: "easy", example: "Żółte słoneczniki rosną w moim ogrodzie", exampleTranslation: "Los girasoles amarillos crecen en mi jardín" },
      { id: "col5", polish: "Czarny", spanish: "Negro", difficulty: "easy", example: "Czarna koszula jest elegancka na formalne okazje", exampleTranslation: "La camisa negra es elegante para ocasiones formales" },
      { id: "col6", polish: "Biały", spanish: "Blanco", difficulty: "easy", example: "Biały śnieg pokrywa wszystko zimą w górach", exampleTranslation: "La nieve blanca cubre todo en invierno en las montañas" },
      { id: "col7", polish: "Różowy", spanish: "Rosa", difficulty: "medium", example: "Różowe kwiaty wiśni kwitną wczesną wiosną", exampleTranslation: "Las flores rosas del cerezo florecen a principios de primavera" },
      { id: "col8", polish: "Pomarańczowy", spanish: "Naranja", difficulty: "medium", example: "Pomarańczowy zachód słońca jest zachwycający", exampleTranslation: "El atardecer naranja es impresionante" },
      { id: "col9", polish: "Fioletowy", spanish: "Morado", difficulty: "medium", example: "Fioletowe kwiaty lawendy mają piękny zapach", exampleTranslation: "Las flores moradas de lavanda tienen un aroma hermoso" },
      { id: "col10", polish: "Brązowy", spanish: "Marrón", difficulty: "medium", example: "Brązowa skórzana sofa wygląda elegancko w salonie", exampleTranslation: "El sofá de cuero marrón se ve elegante en el salón" },
      { id: "col11", polish: "Szary", spanish: "Gris", difficulty: "medium", example: "Szare chmury zapowiadają nadejście deszczu", exampleTranslation: "Las nubes grises anuncian la llegada de la lluvia" },
      { id: "col12", polish: "Srebrny", spanish: "Plateado", difficulty: "medium", example: "Srebrna biżuteria świetnie pasuje do eleganckiej sukienki", exampleTranslation: "La joyería plateada combina perfectamente con el vestido elegante" },
      { id: "col13", polish: "Jaki jest twój ulubiony kolor?", spanish: "¿Cuál es tu color favorito?", difficulty: "hard", example: "Jaki jest twój ulubiony kolor i dlaczego go lubisz?", exampleTranslation: "¿Cuál es tu color favorito y por qué te gusta?" },
      { id: "col14", polish: "To w jasnych kolorach", spanish: "Es de colores claros", difficulty: "hard", example: "Wolę pokój malowany w jasnych kolorach które powiększają przestrzeń", exampleTranslation: "Prefiero la habitación pintada en colores claros que agrandan el espacio" },
      { id: "col15", polish: "Pasuje do twoich oczu", spanish: "Combina con tus ojos", difficulty: "hard", example: "Ten niebieski sweter idealnie pasuje do koloru twoich oczu", exampleTranslation: "Este suéter azul combina perfectamente con el color de tus ojos" }
    ]
  },

  numbers: {
    name: "Liczby",
    description: "Liczby i liczenie",
    icon: Calendar,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "num1", polish: "Jeden", spanish: "Uno", difficulty: "easy", example: "Mam tylko jeden samochód ale jest bardzo niezawodny", exampleTranslation: "Tengo solo un coche pero es muy confiable" },
      { id: "num2", polish: "Dwa", spanish: "Dos", difficulty: "easy", example: "Mam dwa koty które uwielbiają się bawić razem", exampleTranslation: "Tengo dos gatos que adoran jugar juntos" },
      { id: "num3", polish: "Trzy", spanish: "Tres", difficulty: "easy", example: "W moim pokoju są trzy duże okna z widokiem", exampleTranslation: "En mi habitación hay tres ventanas grandes con vista" },
      { id: "num4", polish: "Cztery", spanish: "Cuatro", difficulty: "easy", example: "Mamy cztery pory roku w naszym klimacie", exampleTranslation: "Tenemos cuatro estaciones en nuestro clima" },
      { id: "num5", polish: "Pięć", spanish: "Cinco", difficulty: "easy", example: "Pracuję pięć dni w tygodniu w biurze", exampleTranslation: "Trabajo cinco días a la semana en la oficina" },
      { id: "num6", polish: "Dziesięć", spanish: "Diez", difficulty: "easy", example: "Mieszkam dziesięć minut pieszo od centrum miasta", exampleTranslation: "Vivo a diez minutos a pie del centro de la ciudad" },
      { id: "num7", polish: "Dwadzieścia", spanish: "Veinte", difficulty: "medium", example: "Mój brat ma dwadzieścia lat i studiuje na uniwersytecie", exampleTranslation: "Mi hermano tiene veinte años y estudia en la universidad" },
      { id: "num8", polish: "Pięćdziesiąt", spanish: "Cincuenta", difficulty: "medium", example: "Moi rodzice obchodzą pięćdziesiątą rocznicę ślubu", exampleTranslation: "Mis padres celebran su quincuagésimo aniversario de bodas" },
      { id: "num9", polish: "Sto", spanish: "Cien", difficulty: "medium", example: "W tym budynku mieszka ponad sto rodzin", exampleTranslation: "En este edificio viven más de cien familias" },
      { id: "num10", polish: "Tysiąc", spanish: "Mil", difficulty: "medium", example: "Ta książka ma prawie tysiąc stron fascynującej historii", exampleTranslation: "Este libro tiene casi mil páginas de historia fascinante" },
      { id: "num11", polish: "Milion", spanish: "Millón", difficulty: "medium", example: "To miasto ma ponad milion mieszkańców", exampleTranslation: "Esta ciudad tiene más de un millón de habitantes" },
      { id: "num12", polish: "Pierwszy", spanish: "Primero", difficulty: "medium", example: "To był mój pierwszy raz w Hiszpanii", exampleTranslation: "Fue mi primera vez en España" },
      { id: "num13", polish: "Ile to kosztuje?", spanish: "¿Cuánto cuesta?", difficulty: "hard", example: "Ile kosztuje ten piękny obraz wiszący na ścianie?", exampleTranslation: "¿Cuánto cuesta este hermoso cuadro colgado en la pared?" },
      { id: "num14", polish: "Ile masz lat?", spanish: "¿Cuántos años tienes?", difficulty: "hard", example: "Ile masz lat jeśli mogę zapytać? Wyglądasz bardzo młodo", exampleTranslation: "¿Cuántos años tienes si puedo preguntar? Te ves muy joven" },
      { id: "num15", polish: "Potrzebuję więcej czasu", spanish: "Necesito más tiempo", difficulty: "hard", example: "Potrzebuję trochę więcej czasu żeby dokończyć ten projekt", exampleTranslation: "Necesito un poco más de tiempo para terminar este proyecto" }
    ]
  },

  greetings: {
    name: "Powitania",
    description: "Przywitania i pożegnania",
    icon: Heart,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "greet1", polish: "Dzień dobry", spanish: "Buenos días", difficulty: "easy", example: "Dzień dobry! Jak się pan dzisiaj czuje?", exampleTranslation: "¡Buenos días! ¿Cómo se siente usted hoy?" },
      { id: "greet2", polish: "Dobry wieczór", spanish: "Buenas tardes", difficulty: "easy", example: "Dobry wieczór wszystkim zebranym tutaj", exampleTranslation: "Buenas tardes a todos los reunidos aquí" },
      { id: "greet3", polish: "Dobranoc", spanish: "Buenas noches", difficulty: "easy", example: "Dobranoc kochanie, śpij dobrze i miłych snów", exampleTranslation: "Buenas noches cariño, duerme bien y dulces sueños" },
      { id: "greet4", polish: "Cześć", spanish: "Hola", difficulty: "easy", example: "Cześć! Dawno cię nie widziałem, jak się masz?", exampleTranslation: "¡Hola! No te he visto en mucho tiempo, ¿cómo estás?" },
      { id: "greet5", polish: "Do widzenia", spanish: "Adiós", difficulty: "easy", example: "Do widzenia i dziękuję za wspaniały wieczór", exampleTranslation: "Adiós y gracias por la maravillosa velada" },
      { id: "greet6", polish: "Proszę", spanish: "Por favor", difficulty: "easy", example: "Czy mógłbyś mi pomóc, proszę?", exampleTranslation: "¿Podrías ayudarme, por favor?" },
      { id: "greet7", polish: "Dziękuję", spanish: "Gracias", difficulty: "medium", example: "Dziękuję bardzo za twoją pomoc i wsparcie", exampleTranslation: "Muchas gracias por tu ayuda y apoyo" },
      { id: "greet8", polish: "Przepraszam", spanish: "Perdón", difficulty: "medium", example: "Przepraszam za spóźnienie, był korek na drodze", exampleTranslation: "Perdón por el retraso, había un atasco en la carretera" },
      { id: "greet9", polish: "Miło cię poznać", spanish: "Encantado de conocerte", difficulty: "medium", example: "Miło cię poznać, dużo o tobie słyszałem", exampleTranslation: "Encantado de conocerte, he oído mucho sobre ti" },
      { id: "greet10", polish: "Jak się masz?", spanish: "¿Cómo estás?", difficulty: "medium", example: "Jak się masz ostatnio? Dawno nie rozmawialiśmy", exampleTranslation: "¿Cómo estás últimamente? No hemos hablado en mucho tiempo" },
      { id: "greet11", polish: "Wszystko w porządku?", spanish: "¿Todo bien?", difficulty: "medium", example: "Wszystko w porządku? Wyglądasz na zmęczonego", exampleTranslation: "¿Todo bien? Te ves cansado" },
      { id: "greet12", polish: "Miłego dnia", spanish: "Que tengas un buen día", difficulty: "medium", example: "Miłego dnia i powodzenia w pracy", exampleTranslation: "Que tengas un buen día y suerte en el trabajo" },
      { id: "greet13", polish: "Dawno się nie widzieliśmy", spanish: "Hace mucho que no nos vemos", difficulty: "hard", example: "Dawno się nie widzieliśmy! Musimy częściej się spotykać", exampleTranslation: "¡Hace mucho que no nos vemos! Tenemos que reunirnos más a menudo" },
      { id: "greet14", polish: "Jak minął dzień?", spanish: "¿Cómo estuvo tu día?", difficulty: "hard", example: "Jak minął ci dzień w pracy? Mam nadzieję że dobrze", exampleTranslation: "¿Cómo estuvo tu día en el trabajo? Espero que bien" },
      { id: "greet15", polish: "Życzę ci wszystkiego najlepszego", spanish: "Te deseo todo lo mejor", difficulty: "hard", example: "Życzę ci wszystkiego najlepszego w nowym roku szkolnym", exampleTranslation: "Te deseo todo lo mejor en el nuevo año escolar" }
    ]
  },

  time: {
    name: "Czas",
    description: "Godziny, dni tygodnia, miesiące",
    icon: Clock,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "time1", polish: "Godzina", spanish: "Hora", difficulty: "easy", example: "Która jest teraz godzina? Muszę iść na spotkanie", exampleTranslation: "¿Qué hora es ahora? Tengo que ir a una reunión" },
      { id: "time2", polish: "Dzień", spanish: "Día", difficulty: "easy", example: "Dzisiaj jest piękny słoneczny dzień", exampleTranslation: "Hoy es un hermoso día soleado" },
      { id: "time3", polish: "Tydzień", spanish: "Semana", difficulty: "easy", example: "W tym tygodniu mam bardzo dużo pracy", exampleTranslation: "Esta semana tengo mucho trabajo" },
      { id: "time4", polish: "Miesiąc", spanish: "Mes", difficulty: "easy", example: "W przyszłym miesiącu jadę na wakacje do Hiszpanii", exampleTranslation: "El próximo mes voy de vacaciones a España" },
      { id: "time5", polish: "Rok", spanish: "Año", difficulty: "easy", example: "Ten rok był pełen wspaniałych doświadczeń", exampleTranslation: "Este año estuvo lleno de experiencias maravillosas" },
      { id: "time6", polish: "Dzisiaj", spanish: "Hoy", difficulty: "easy", example: "Dzisiaj mam wolne i planuję odpocząć", exampleTranslation: "Hoy tengo libre y planeo descansar" },
      { id: "time7", polish: "Jutro", spanish: "Mañana", difficulty: "medium", example: "Jutro rano muszę wstać bardzo wcześnie", exampleTranslation: "Mañana por la mañana tengo que levantarme muy temprano" },
      { id: "time8", polish: "Wczoraj", spanish: "Ayer", difficulty: "medium", example: "Wczoraj wieczorem byłem w kinie z przyjaciółmi", exampleTranslation: "Ayer por la noche estuve en el cine con amigos" },
      { id: "time9", polish: "Rano", spanish: "Mañana", difficulty: "medium", example: "Rano lubię pić kawę i czytać wiadomości", exampleTranslation: "Por la mañana me gusta tomar café y leer las noticias" },
      { id: "time10", polish: "Wieczór", spanish: "Tarde", difficulty: "medium", example: "Wieczorem często chodzę na spacer po parku", exampleTranslation: "Por la tarde a menudo voy a pasear por el parque" },
      { id: "time11", polish: "Północ", spanish: "Medianoche", difficulty: "medium", example: "O północy zaczynamy świętować Nowy Rok", exampleTranslation: "A medianoche empezamos a celebrar el Año Nuevo" },
      { id: "time12", polish: "Południe", spanish: "Mediodía", difficulty: "medium", example: "W południe słońce świeci najjaśniej", exampleTranslation: "Al mediodía el sol brilla más fuerte" },
      { id: "time13", polish: "Która godzina?", spanish: "¿Qué hora es?", difficulty: "hard", example: "Przepraszam, która jest teraz godzina? Nie mam zegarka", exampleTranslation: "Disculpa, ¿qué hora es ahora? No tengo reloj" },
      { id: "time14", polish: "Spóźniłem się", spanish: "Llegué tarde", difficulty: "hard", example: "Przepraszam że się spóźniłem, był problem z autobusem", exampleTranslation: "Perdón que llegué tarde, hubo un problema con el autobús" },
      { id: "time15", polish: "O której się spotykamy?", spanish: "¿A qué hora nos encontramos?", difficulty: "hard", example: "O której się spotykamy jutro w centrum miasta?", exampleTranslation: "¿A qué hora nos encontramos mañana en el centro de la ciudad?" }
    ]
  },

  weather: {
    name: "Pogoda",
    description: "Warunki pogodowe i temperatury",
    icon: Cloud,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "weath1", polish: "Słońce", spanish: "Sol", difficulty: "easy", example: "Słońce świeci jasno na bezchmurnym niebie", exampleTranslation: "El sol brilla intensamente en el cielo sin nubes" },
      { id: "weath2", polish: "Deszcz", spanish: "Lluvia", difficulty: "easy", example: "Deszcz pada od wczoraj bez przerwy", exampleTranslation: "La lluvia cae desde ayer sin parar" },
      { id: "weath3", polish: "Śnieg", spanish: "Nieve", difficulty: "easy", example: "Śnieg pokrywa całe miasto białą kołdrą", exampleTranslation: "La nieve cubre toda la ciudad con un manto blanco" },
      { id: "weath4", polish: "Wiatr", spanish: "Viento", difficulty: "easy", example: "Silny wiatr wieje od samego rana", exampleTranslation: "El viento fuerte sopla desde la mañana" },
      { id: "weath5", polish: "Chmura", spanish: "Nube", difficulty: "easy", example: "Ciemne chmury zapowiadają burzę", exampleTranslation: "Las nubes oscuras anuncian tormenta" },
      { id: "weath6", polish: "Zimno", spanish: "Frío", difficulty: "easy", example: "Dzisiaj jest bardzo zimno, muszę ubrać ciepły płaszcz", exampleTranslation: "Hoy hace mucho frío, debo ponerme el abrigo cálido" },
      { id: "weath7", polish: "Gorąco", spanish: "Calor", difficulty: "medium", example: "Latem w Polsce bywa naprawdę gorąco", exampleTranslation: "En verano en Polonia hace realmente calor" },
      { id: "weath8", polish: "Burza", spanish: "Tormenta", difficulty: "medium", example: "Wczoraj w nocy była potężna burza z piorunami", exampleTranslation: "Anoche hubo una tormenta tremenda con relámpagos" },
      { id: "weath9", polish: "Mgła", spanish: "Niebla", difficulty: "medium", example: "Gęsta mgła utrudnia widoczność na drodze", exampleTranslation: "La niebla densa dificulta la visibilidad en la carretera" },
      { id: "weath10", polish: "Temperatura", spanish: "Temperatura", difficulty: "medium", example: "Temperatura spadła poniżej zera stopni", exampleTranslation: "La temperatura bajó por debajo de cero grados" },
      { id: "weath11", polish: "Prognoza", spanish: "Pronóstico", difficulty: "medium", example: "Prognoza pogody zapowiada słoneczny weekend", exampleTranslation: "El pronóstico del tiempo anuncia un fin de semana soleado" },
      { id: "weath12", polish: "Pochmurno", spanish: "Nublado", difficulty: "medium", example: "Jest pochmurno ale nie sądzę żeby padało", exampleTranslation: "Está nublado pero no creo que llueva" },
      { id: "weath13", polish: "Jaka jest pogoda?", spanish: "¿Qué tiempo hace?", difficulty: "hard", example: "Jaka jest pogoda u ciebie? Tu pada od rana", exampleTranslation: "¿Qué tiempo hace donde estás? Aquí llueve desde la mañana" },
      { id: "weath14", polish: "Będzie padać", spanish: "Va a llover", difficulty: "hard", example: "Weź parasol bo wygląda że będzie padać", exampleTranslation: "Lleva paraguas porque parece que va a llover" },
      { id: "weath15", polish: "Piękna pogoda", spanish: "Hace buen tiempo", difficulty: "hard", example: "Dzisiaj jest piękna pogoda na spacer w parku", exampleTranslation: "Hoy hace buen tiempo para pasear por el parque" }
    ]
  },

  body_parts: {
    name: "Części ciała",
    description: "Podstawowe części ciała ludzkiego",
    icon: Heart,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "body1", polish: "Głowa", spanish: "Cabeza", difficulty: "easy", example: "Boli mnie głowa po całym dniu przed komputerem", exampleTranslation: "Me duele la cabeza después de todo el día frente a la computadora" },
      { id: "body2", polish: "Oko", spanish: "Ojo", difficulty: "easy", example: "Mam niebieskie oczy po mamie", exampleTranslation: "Tengo ojos azules de mi madre" },
      { id: "body3", polish: "Nos", spanish: "Nariz", difficulty: "easy", example: "Mój nos jest wrażliwy na mocne zapachy", exampleTranslation: "Mi nariz es sensible a los olores fuertes" },
      { id: "body4", polish: "Usta", spanish: "Boca", difficulty: "easy", example: "Regularnie myję zęby i dbam o higienę ust", exampleTranslation: "Me lavo los dientes regularmente y cuido la higiene de mi boca" },
      { id: "body5", polish: "Ręka", spanish: "Mano", difficulty: "easy", example: "Myciem ręce przed każdym posiłkiem", exampleTranslation: "Me lavo las manos antes de cada comida" },
      { id: "body6", polish: "Noga", spanish: "Pierna", difficulty: "easy", example: "Boli mnie noga po długim biegu w parku", exampleTranslation: "Me duele la pierna después de correr mucho en el parque" },
      { id: "body7", polish: "Serce", spanish: "Corazón", difficulty: "medium", example: "Moje serce bije szybciej gdy jestem zdenerwowany", exampleTranslation: "Mi corazón late más rápido cuando estoy nervioso" },
      { id: "body8", polish: "Żołądek", spanish: "Estómago", difficulty: "medium", example: "Mam ból żołądka po zjedzeniu za dużo", exampleTranslation: "Me duele el estómago después de comer demasiado" },
      { id: "body9", polish: "Plecy", spanish: "Espalda", difficulty: "medium", example: "Bolą mnie plecy od siedzenia przy biurku", exampleTranslation: "Me duele la espalda de estar sentado en el escritorio" },
      { id: "body10", polish: "Ramię", spanish: "Hombro", difficulty: "medium", example: "Mam kontuzję ramienia po treningu na siłowni", exampleTranslation: "Tengo una lesión en el hombro después del entrenamiento en el gimnasio" },
      { id: "body11", polish: "Kolano", spanish: "Rodilla", difficulty: "medium", example: "Moje kolano boli gdy jest zimna pogoda", exampleTranslation: "Mi rodilla duele cuando hace frío" },
      { id: "body12", polish: "Palec", spanish: "Dedo", difficulty: "medium", example: "Skaleczałem sobie palec podczas gotowania obiadu", exampleTranslation: "Me corté el dedo mientras cocinaba la cena" },
      { id: "body13", polish: "Boli mnie...", spanish: "Me duele...", difficulty: "hard", example: "Boli mnie głowa i gardło, chyba się przeziębiam", exampleTranslation: "Me duele la cabeza y la garganta, creo que me estoy resfriando" },
      { id: "body14", polish: "Złamałem nogę", spanish: "Me rompí la pierna", difficulty: "hard", example: "Złamałem nogę podczas jazdy na nartach w Alpach", exampleTranslation: "Me rompí la pierna esquiando en los Alpes" },
      { id: "body15", polish: "Czuję się lepiej", spanish: "Me siento mejor", difficulty: "hard", example: "Dziękuję, czuję się już dużo lepiej po odpoczynku", exampleTranslation: "Gracias, me siento mucho mejor después del descanso" }
    ]
  },

  fruits: {
    name: "Owoce",
    description: "Popularne owoce",
    icon: Apple,
    color: "from-green-400 to-lime-500",
    level: "beginner",
    words: [
      { id: "fruit1", polish: "Jabłko", spanish: "Manzana", difficulty: "easy", example: "Czerwone jabłko jest słodkie i soczyste", exampleTranslation: "La manzana roja es dulce y jugosa" },
      { id: "fruit2", polish: "Banan", spanish: "Plátano", difficulty: "easy", example: "Jem banana każdego ranka na śniadanie", exampleTranslation: "Como un plátano cada mañana para el desayuno" },
      { id: "fruit3", polish: "Pomarańcza", spanish: "Naranja", difficulty: "easy", example: "Świeży sok z pomarańczy jest pełen witamin", exampleTranslation: "El zumo fresco de naranja está lleno de vitaminas" },
      { id: "fruit4", polish: "Truskawka", spanish: "Fresa", difficulty: "easy", example: "Truskawki są najsłodsze latem gdy są świeże", exampleTranslation: "Las fresas son más dulces en verano cuando están frescas" },
      { id: "fruit5", polish: "Winogrono", spanish: "Uva", difficulty: "easy", example: "Ciemne winogrona są bogate w przeciwutleniacze", exampleTranslation: "Las uvas oscuras son ricas en antioxidantes" },
      { id: "fruit6", polish: "Arbuz", spanish: "Sandía", difficulty: "easy", example: "Arbuz jest orzeźwiający w gorące letnie dni", exampleTranslation: "La sandía es refrescante en los días calurosos de verano" },
      { id: "fruit7", polish: "Gruszka", spanish: "Pera", difficulty: "medium", example: "Dojrzała gruszka jest miękka i słodka", exampleTranslation: "La pera madura es suave y dulce" },
      { id: "fruit8", polish: "Brzoskwinia", spanish: "Melocotón", difficulty: "medium", example: "Brzoskwinie są najlepsze gdy są dobrze dojrzałe", exampleTranslation: "Los melocotones son mejores cuando están bien maduros" },
      { id: "fruit9", polish: "Ananas", spanish: "Piña", difficulty: "medium", example: "Ananas zawiera enzymy które pomagają w trawieniu", exampleTranslation: "La piña contiene enzimas que ayudan en la digestión" },
      { id: "fruit10", polish: "Kiwi", spanish: "Kiwi", difficulty: "medium", example: "Zielone kiwi ma dużo witaminy C", exampleTranslation: "El kiwi verde tiene mucha vitamina C" },
      { id: "fruit11", polish: "Malina", spanish: "Frambuesa", difficulty: "medium", example: "Maliny rosną w moim ogrodzie i są bardzo smaczne", exampleTranslation: "Las frambuesas crecen en mi jardín y son muy sabrosas" },
      { id: "fruit12", polish: "Mango", spanish: "Mango", difficulty: "medium", example: "Dojrzałe mango ma niesamowity słodki smak", exampleTranslation: "El mango maduro tiene un sabor dulce increíble" },
      { id: "fruit13", polish: "Czy to jest świeże?", spanish: "¿Está fresco?", difficulty: "hard", example: "Czy to jest świeże? Chcę kupić najlepsze owoce", exampleTranslation: "¿Está fresco? Quiero comprar las mejores frutas" },
      { id: "fruit14", polish: "Lubię owoce", spanish: "Me gustan las frutas", difficulty: "hard", example: "Bardzo lubię świeże owoce sezonowe prosto z ogrodu", exampleTranslation: "Me gustan mucho las frutas frescas de temporada directo del huerto" },
      { id: "fruit15", polish: "Te owoce są pyszne", spanish: "Estas frutas están deliciosas", difficulty: "hard", example: "Te owoce są naprawdę pyszne, skąd je kupiłeś?", exampleTranslation: "Estas frutas están realmente deliciosas, ¿dónde las compraste?" }
    ]
  },

  vegetables: {
    name: "Warzywa",
    description: "Popularne warzywa",
    icon: Apple,
    color: "from-emerald-400 to-green-500",
    level: "beginner",
    words: [
      { id: "veg1", polish: "Pomidor", spanish: "Tomate", difficulty: "easy", example: "Świeże pomidory są podstawą włoskiej kuchni", exampleTranslation: "Los tomates frescos son la base de la cocina italiana" },
      { id: "veg2", polish: "Ogórek", spanish: "Pepino", difficulty: "easy", example: "Ogórek jest chrupiący i doskonały do sałatek", exampleTranslation: "El pepino es crujiente y perfecto para ensaladas" },
      { id: "veg3", polish: "Marchew", spanish: "Zanahoria", difficulty: "easy", example: "Marchew jest bogata w witaminę A dla wzroku", exampleTranslation: "La zanahoria es rica en vitamina A para la vista" },
      { id: "veg4", polish: "Ziemniak", spanish: "Patata", difficulty: "easy", example: "Ziemniaki można przygotować na wiele sposobów", exampleTranslation: "Las patatas se pueden preparar de muchas formas" },
      { id: "veg5", polish: "Cebula", spanish: "Cebolla", difficulty: "easy", example: "Cebula dodaje smaku każdej potrawie", exampleTranslation: "La cebolla añade sabor a cada plato" },
      { id: "veg6", polish: "Czosnek", spanish: "Ajo", difficulty: "easy", example: "Czosnek ma właściwości antybakteryjne", exampleTranslation: "El ajo tiene propiedades antibacterianas" },
      { id: "veg7", polish: "Papryka", spanish: "Pimiento", difficulty: "medium", example: "Czerwona papryka jest słodsza niż zielona", exampleTranslation: "El pimiento rojo es más dulce que el verde" },
      { id: "veg8", polish: "Sałata", spanish: "Lechuga", difficulty: "medium", example: "Świeża sałata jest podstawą zdrowej sałatki", exampleTranslation: "La lechuga fresca es la base de una ensalada saludable" },
      { id: "veg9", polish: "Brokuł", spanish: "Brócoli", difficulty: "medium", example: "Brokuły gotowane na parze są bardzo zdrowe", exampleTranslation: "El brócoli al vapor es muy saludable" },
      { id: "veg10", polish: "Kalafior", spanish: "Coliflor", difficulty: "medium", example: "Kalafior można przygotować jako niskokaloryczny zamiennik ryżu", exampleTranslation: "La coliflor se puede preparar como sustituto bajo en calorías del arroz" },
      { id: "veg11", polish: "Szpinak", spanish: "Espinaca", difficulty: "medium", example: "Szpinak jest bogaty w żelazo i inne minerały", exampleTranslation: "La espinaca es rica en hierro y otros minerales" },
      { id: "veg12", polish: "Groszek", spanish: "Guisante", difficulty: "medium", example: "Świeży groszek prosto z ogrodu jest najsmaczniejszy", exampleTranslation: "Los guisantes frescos directo del huerto son los más sabrosos" },
      { id: "veg13", polish: "Jem dużo warzyw", spanish: "Como muchas verduras", difficulty: "hard", example: "Staram się jeść dużo świeżych warzyw codziennie", exampleTranslation: "Intento comer muchas verduras frescas todos los días" },
      { id: "veg14", polish: "To jest zdrowe", spanish: "Esto es saludable", difficulty: "hard", example: "Jedzenie warzyw organicznych jest bardzo zdrowe dla organizmu", exampleTranslation: "Comer verduras orgánicas es muy saludable para el organismo" },
      { id: "veg15", polish: "Nie lubię warzyw", spanish: "No me gustan las verduras", difficulty: "hard", example: "Kiedyś nie lubiłem warzyw ale teraz je cenię", exampleTranslation: "Antes no me gustaban las verduras pero ahora las aprecio" }
    ]
  },

  animals: {
    name: "Zwierzęta",
    description: "Popularne zwierzęta domowe i dzikie",
    icon: Heart,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "anim1", polish: "Pies", spanish: "Perro", difficulty: "easy", example: "Mój pies jest bardzo lojalny i przyjazny", exampleTranslation: "Mi perro es muy leal y amigable" },
      { id: "anim2", polish: "Kot", spanish: "Gato", difficulty: "easy", example: "Kot śpi przez większość dnia na kanapie", exampleTranslation: "El gato duerme la mayor parte del día en el sofá" },
      { id: "anim3", polish: "Koń", spanish: "Caballo", difficulty: "easy", example: "Koń biega szybko po zielonej łące", exampleTranslation: "El caballo corre rápido por el prado verde" },
      { id: "anim4", polish: "Krowa", spanish: "Vaca", difficulty: "easy", example: "Krowy dają mleko które pijemy codziennie", exampleTranslation: "Las vacas dan leche que bebemos todos los días" },
      { id: "anim5", polish: "Ptak", spanish: "Pájaro", difficulty: "easy", example: "Ptaki śpiewają pięknie rano w ogrodzie", exampleTranslation: "Los pájaros cantan hermosamente por la mañana en el jardín" },
      { id: "anim6", polish: "Ryba", spanish: "Pez", difficulty: "easy", example: "Kolorowe ryby pływają w moim akwarium", exampleTranslation: "Los peces coloridos nadan en mi acuario" },
      { id: "anim7", polish: "Słoń", spanish: "Elefante", difficulty: "medium", example: "Słoń jest największym zwierzęciem lądowym na świecie", exampleTranslation: "El elefante es el animal terrestre más grande del mundo" },
      { id: "anim8", polish: "Lew", spanish: "León", difficulty: "medium", example: "Lew jest królem dżungli i potężnym drapieżnikiem", exampleTranslation: "El león es el rey de la jungla y un depredador poderoso" },
      { id: "anim9", polish: "Niedźwiedź", spanish: "Oso", difficulty: "medium", example: "Niedźwiedzie brunatne żyją w polskich lasach", exampleTranslation: "Los osos pardos viven en los bosques polacos" },
      { id: "anim10", polish: "Wilk", spanish: "Lobo", difficulty: "medium", example: "Wilki żyją i polują w stadach", exampleTranslation: "Los lobos viven y cazan en manadas" },
      { id: "anim11", polish: "Delfin", spanish: "Delfín", difficulty: "medium", example: "Delfiny są bardzo inteligentne i przyjazne", exampleTranslation: "Los delfines son muy inteligentes y amigables" },
      { id: "anim12", polish: "Pingwin", spanish: "Pingüino", difficulty: "medium", example: "Pingwiny żyją w zimnych regionach Antarktydy", exampleTranslation: "Los pingüinos viven en las regiones frías de la Antártida" },
      { id: "anim13", polish: "Mam zwierzę domowe", spanish: "Tengo una mascota", difficulty: "hard", example: "Mam małe zwierzę domowe które bardzo kocham", exampleTranslation: "Tengo una pequeña mascota que amo mucho" },
      { id: "anim14", polish: "Boję się pająków", spanish: "Tengo miedo de las arañas", difficulty: "hard", example: "Boję się pająków odkąd byłem małym dzieckiem", exampleTranslation: "Tengo miedo de las arañas desde que era un niño pequeño" },
      { id: "anim15", polish: "Zwierzęta są niesamowite", spanish: "Los animales son increíbles", difficulty: "hard", example: "Wszystkie zwierzęta są niesamowite na swój sposób", exampleTranslation: "Todos los animales son increíbles a su manera" }
    ]
  },

  professions: {
    name: "Zawody",
    description: "Różne zawody i profesje",
    icon: Briefcase,
    color: "from-blue-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "prof1", polish: "Lekarz", spanish: "Médico", difficulty: "easy", example: "Lekarz bada pacjentów w swojej przychodni", exampleTranslation: "El médico examina pacientes en su consultorio" },
      { id: "prof2", polish: "Nauczyciel", spanish: "Profesor", difficulty: "easy", example: "Nauczyciel uczy dzieci matematyki i historii", exampleTranslation: "El profesor enseña matemáticas e historia a los niños" },
      { id: "prof3", polish: "Inżynier", spanish: "Ingeniero", difficulty: "easy", example: "Inżynier projektuje nowe mosty i budynki", exampleTranslation: "El ingeniero diseña nuevos puentes y edificios" },
      { id: "prof4", polish: "Pielęgniarka", spanish: "Enfermera", difficulty: "easy", example: "Pielęgniarka opiekuje się chorymi w szpitalu", exampleTranslation: "La enfermera cuida a los enfermos en el hospital" },
      { id: "prof5", polish: "Policjant", spanish: "Policía", difficulty: "easy", example: "Policjant pilnuje porządku i bezpieczeństwa w mieście", exampleTranslation: "El policía mantiene el orden y la seguridad en la ciudad" },
      { id: "prof6", polish: "Strażak", spanish: "Bombero", difficulty: "easy", example: "Strażak ryzykuje życie ratując ludzi z pożaru", exampleTranslation: "El bombero arriesga su vida salvando gente del fuego" },
      { id: "prof7", polish: "Kucharz", spanish: "Cocinero", difficulty: "medium", example: "Kucharz przygotowuje wyśmienite dania w restauracji", exampleTranslation: "El cocinero prepara platos exquisitos en el restaurante" },
      { id: "prof8", polish: "Architekt", spanish: "Arquitecto", difficulty: "medium", example: "Architekt projektuje piękne i funkcjonalne budynki", exampleTranslation: "El arquitecto diseña edificios hermosos y funcionales" },
      { id: "prof9", polish: "Prawnik", spanish: "Abogado", difficulty: "medium", example: "Prawnik reprezentuje klientów w sprawach sądowych", exampleTranslation: "El abogado representa a clientes en casos judiciales" },
      { id: "prof10", polish: "Dziennikarz", spanish: "Periodista", difficulty: "medium", example: "Dziennikarz pisze artykuły o ważnych wydarzeniach", exampleTranslation: "El periodista escribe artículos sobre eventos importantes" },
      { id: "prof11", polish: "Programista", spanish: "Programador", difficulty: "medium", example: "Programista tworzy aplikacje i strony internetowe", exampleTranslation: "El programador crea aplicaciones y sitios web" },
      { id: "prof12", polish: "Aktor", spanish: "Actor", difficulty: "medium", example: "Aktor występuje w filmach i spektaklach teatralnych", exampleTranslation: "El actor actúa en películas y obras de teatro" },
      { id: "prof13", polish: "Czym się zajmujesz?", spanish: "¿A qué te dedicas?", difficulty: "hard", example: "Czym się zajmujesz zawodowo? Jestem ciekawy twojej pracy", exampleTranslation: "¿A qué te dedicas profesionalmente? Tengo curiosidad por tu trabajo" },
      { id: "prof14", polish: "Pracuję jako...", spanish: "Trabajo como...", difficulty: "hard", example: "Pracuję jako inżynier oprogramowania w dużej firmie technologicznej", exampleTranslation: "Trabajo como ingeniero de software en una gran empresa tecnológica" },
      { id: "prof15", polish: "Szukam pracy", spanish: "Busco trabajo", difficulty: "hard", example: "Szukam nowej pracy która będzie bardziej satysfakcjonująca", exampleTranslation: "Busco un nuevo trabajo que sea más satisfactorio" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Środki transportu",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "beginner",
    words: [
      { id: "trans1", polish: "Samochód", spanish: "Coche", difficulty: "easy", example: "Mi coche es pequeño pero muy económico", exampleTranslation: "Mi coche es pequeño pero muy económico" },
      { id: "trans2", polish: "Autobus", spanish: "Autobús", difficulty: "easy", example: "Autobus jeździ co dziesięć minut w godzinach szczytu", exampleTranslation: "El autobús pasa cada diez minutos en horas pico" },
      { id: "trans3", polish: "Pociąg", spanish: "Tren", difficulty: "easy", example: "Pociąg do Warszawy odjeżdża o ósmej rano", exampleTranslation: "El tren a Varsovia sale a las ocho de la mañana" },
      { id: "trans4", polish: "Rower", spanish: "Bicicleta", difficulty: "easy", example: "Jeżdżę rowerem do pracy każdego dnia", exampleTranslation: "Voy en bicicleta al trabajo todos los días" },
      { id: "trans5", polish: "Samolot", spanish: "Avión", difficulty: "easy", example: "Samolot do Madrytu startuje za godzinę", exampleTranslation: "El avión a Madrid despega en una hora" },
      { id: "trans6", polish: "Tramwaj", spanish: "Tranvía", difficulty: "easy", example: "Tramwaj jest wygodnym środkiem transportu w centrum", exampleTranslation: "El tranvía es un medio de transporte cómodo en el centro" },
      { id: "trans7", polish: "Metro", spanish: "Metro", difficulty: "medium", example: "Metro w Warszawie jest szybkie i nowoczesne", exampleTranslation: "El metro de Varsovia es rápido y moderno" },
      { id: "trans8", polish: "Taksówka", spanish: "Taxi", difficulty: "medium", example: "Złapałem taksówkę żeby dotrzeć na lotnisko", exampleTranslation: "Tomé un taxi para llegar al aeropuerto" },
      { id: "trans9", polish: "Motocykl", spanish: "Motocicleta", difficulty: "medium", example: "Motocykl jest szybszy w miejskim ruchu", exampleTranslation: "La motocicleta es más rápida en el tráfico urbano" },
      { id: "trans10", polish: "Statek", spanish: "Barco", difficulty: "medium", example: "Statek płynie wolno przez spokojne morze", exampleTranslation: "El barco navega lentamente por el mar tranquilo" },
      { id: "trans11", polish: "Bilet", spanish: "Boleto", difficulty: "medium", example: "Kupiłem bilet na pociąg przez internet", exampleTranslation: "Compré el boleto de tren por internet" },
      { id: "trans12", polish: "Stacja", spanish: "Estación", difficulty: "medium", example: "Stacja kolejowa jest blisko mojego domu", exampleTranslation: "La estación de tren está cerca de mi casa" },
      { id: "trans13", polish: "Jak mogę tam dojechać?", spanish: "¿Cómo puedo llegar allí?", difficulty: "hard", example: "Jak najszybciej mogę dojechać do centrum miasta?", exampleTranslation: "¿Cómo puedo llegar al centro de la ciudad más rápido?" },
      { id: "trans14", polish: "Spóźnię się na autobus", spanish: "Voy a perder el autobús", difficulty: "hard", example: "Muszę się pospieszyć bo spóźnię się na ostatni autobus", exampleTranslation: "Tengo que darme prisa porque voy a perder el último autobús" },
      { id: "trans15", polish: "Gdzie jest przystanek?", spanish: "¿Dónde está la parada?", difficulty: "hard", example: "Przepraszam, gdzie jest najbliższy przystanek autobusowy?", exampleTranslation: "Disculpe, ¿dónde está la parada de autobús más cercana?" }
    ]
  },

  school: {
    name: "Szkoła",
    description: "Przedmioty szkolne i edukacja",
    icon: GraduationCap,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "school1", polish: "Szkoła", spanish: "Escuela", difficulty: "easy", example: "Moja szkoła jest duża i nowoczesna", exampleTranslation: "Mi escuela es grande y moderna" },
      { id: "school2", polish: "Uczeń", spanish: "Estudiante", difficulty: "easy", example: "Jestem uczniem ostatniej klasy liceum", exampleTranslation: "Soy estudiante del último año de secundaria" },
      { id: "school3", polish: "Książka", spanish: "Libro", difficulty: "easy", example: "Ta książka do historii jest bardzo ciekawa", exampleTranslation: "Este libro de historia es muy interesante" },
      { id: "school4", polish: "Zeszyt", spanish: "Cuaderno", difficulty: "easy", example: "Piszę notatki w zeszycie podczas lekcji", exampleTranslation: "Escribo notas en el cuaderno durante la clase" },
      { id: "school5", polish: "Długopis", spanish: "Bolígrafo", difficulty: "easy", example: "Potrzebuję nowego długopisu do pisania", exampleTranslation: "Necesito un bolígrafo nuevo para escribir" },
      { id: "school6", polish: "Egzamin", spanish: "Examen", difficulty: "easy", example: "Mam ważny egzamin z matematyki w piątek", exampleTranslation: "Tengo un examen importante de matemáticas el viernes" },
      { id: "school7", polish: "Lekcja", spanish: "Lección", difficulty: "medium", example: "Lekcja hiszpańskiego trwa czterdzieści pięć minut", exampleTranslation: "La lección de español dura cuarenta y cinco minutos" },
      { id: "school8", polish: "Praca domowa", spanish: "Tarea", difficulty: "medium", example: "Mam dużo pracy domowej do zrobienia na weekend", exampleTranslation: "Tengo mucha tarea para hacer durante el fin de semana" },
      { id: "school9", polish: "Biblioteka", spanish: "Biblioteca", difficulty: "medium", example: "Spędzam dużo czasu w bibliotece ucząc się", exampleTranslation: "Paso mucho tiempo en la biblioteca estudiando" },
      { id: "school10", polish: "Ocena", spanish: "Calificación", difficulty: "medium", example: "Dostałem dobrą ocenę z tego trudnego egzaminu", exampleTranslation: "Obtuve una buena calificación en este examen difícil" },
      { id: "school11", polish: "Dyplom", spanish: "Diploma", difficulty: "medium", example: "Otrzymałem dyplom po ukończeniu studiów", exampleTranslation: "Recibí el diploma después de terminar los estudios" },
      { id: "school12", polish: "Uniwersytet", spanish: "Universidad", difficulty: "medium", example: "Studiuję medycynę na uniwersytecie w Krakowie", exampleTranslation: "Estudio medicina en la universidad de Cracovia" },
      { id: "school13", polish: "Co studiujesz?", spanish: "¿Qué estudias?", difficulty: "hard", example: "Co studiujesz na uniwersytecie? Jestem ciekawy", exampleTranslation: "¿Qué estudias en la universidad? Tengo curiosidad" },
      { id: "school14", polish: "Muszę się uczyć", spanish: "Tengo que estudiar", difficulty: "hard", example: "Muszę dużo się uczyć do jutrzejszego egzaminu", exampleTranslation: "Tengo que estudiar mucho para el examen de mañana" },
      { id: "school15", polish: "Ukończyłem studia", spanish: "Me gradué", difficulty: "hard", example: "Ukończyłem studia magisterskie w zeszłym roku", exampleTranslation: "Me gradué con maestría el año pasado" }
    ]
  },

  travel: {
    name: "Podróże",
    description: "Podróżowanie i wakacje",
    icon: Plane,
    color: "from-sky-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "trav1", polish: "Podróż", spanish: "Viaje", difficulty: "easy", example: "Nasza podróż do Hiszpanii była niesamowita", exampleTranslation: "Nuestro viaje a España fue increíble" },
      { id: "trav2", polish: "Wakacje", spanish: "Vacaciones", difficulty: "easy", example: "Wakacje spędzamy nad morzem co roku", exampleTranslation: "Pasamos las vacaciones en el mar cada año" },
      { id: "trav3", polish: "Lotnisko", spanish: "Aeropuerto", difficulty: "easy", example: "Lotnisko jest dwie godziny jazdy od mojego domu", exampleTranslation: "El aeropuerto está a dos horas en coche de mi casa" },
      { id: "trav4", polish: "Hotel", spanish: "Hotel", difficulty: "easy", example: "Hotel nad plażą ma piękny widok na ocean", exampleTranslation: "El hotel en la playa tiene una vista hermosa del océano" },
      { id: "trav5", polish: "Paszport", spanish: "Pasaporte", difficulty: "easy", example: "Nie zapomnij zabrać paszportu na lotnisko", exampleTranslation: "No olvides llevar el pasaporte al aeropuerto" },
      { id: "trav6", polish: "Walizka", spanish: "Maleta", difficulty: "easy", example: "Pakowałem walizkę przez pół dnia", exampleTranslation: "Empaqué la maleta durante medio día" },
      { id: "trav7", polish: "Mapa", spanish: "Mapa", difficulty: "medium", example: "Używam mapy cyfrowej żeby znaleźć drogę", exampleTranslation: "Uso un mapa digital para encontrar el camino" },
      { id: "trav8", polish: "Rezerwacja", spanish: "Reserva", difficulty: "medium", example: "Zrobiłem rezerwację hotelu przez internet", exampleTranslation: "Hice la reserva del hotel por internet" },
      { id: "trav9", polish: "Wycieczka", spanish: "Excursión", difficulty: "medium", example: "Zapisaliśmy się na wycieczkę po górach", exampleTranslation: "Nos inscribimos en una excursión por las montañas" },
      { id: "trav10", polish: "Przewodnik", spanish: "Guía", difficulty: "medium", example: "Przewodnik turystyczny opowiadał o historii miasta", exampleTranslation: "El guía turístico contaba sobre la historia de la ciudad" },
      { id: "trav11", polish: "Pamiątka", spanish: "Recuerdo", difficulty: "medium", example: "Kupiłem pamiątkę z każdego odwiedzonego kraju", exampleTranslation: "Compré un recuerdo de cada país visitado" },
      { id: "trav12", polish: "Zwiedzanie", spanish: "Turismo", difficulty: "medium", example: "Zwiedzanie zabytków to moja ulubiona część podróży", exampleTranslation: "El turismo de monumentos es mi parte favorita del viaje" },
      { id: "trav13", polish: "Gdzie byłeś?", spanish: "¿Dónde has estado?", difficulty: "hard", example: "Gdzie byłeś w tym roku na wakacjach? Opowiedz mi", exampleTranslation: "¿Dónde has estado de vacaciones este año? Cuéntame" },
      { id: "trav14", polish: "Uwielbiam podróżować", spanish: "Me encanta viajar", difficulty: "hard", example: "Uwielbiam podróżować i odkrywać nowe kultury", exampleTranslation: "Me encanta viajar y descubrir nuevas culturas" },
      { id: "trav15", polish: "Chcę zwiedzić świat", spanish: "Quiero recorrer el mundo", difficulty: "hard", example: "Marzę o tym żeby zwiedzić cały świat przed czterdziestką", exampleTranslation: "Sueño con recorrer todo el mundo antes de los cuarenta" }
    ]
  },

  shopping: {
    name: "Zakupy",
    description: "Robienie zakupów",
    icon: ShoppingCart,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "shop1", polish: "Sklep", spanish: "Tienda", difficulty: "easy", example: "Sklep spożywczy jest otwarty do dwudziestej drugiej", exampleTranslation: "La tienda de comestibles está abierta hasta las veintidós" },
      { id: "shop2", polish: "Cena", spanish: "Precio", difficulty: "easy", example: "Cena tego produktu jest bardzo atrakcyjna", exampleTranslation: "El precio de este producto es muy atractivo" },
      { id: "shop3", polish: "Kasa", spanish: "Caja", difficulty: "easy", example: "Proszę zapłacić przy kasie numer trzy", exampleTranslation: "Por favor pague en la caja número tres" },
      { id: "shop4", polish: "Klient", spanish: "Cliente", difficulty: "easy", example: "Klient ma zawsze rację w tym sklepie", exampleTranslation: "El cliente siempre tiene razón en esta tienda" },
      { id: "shop5", polish: "Sprzedawca", spanish: "Vendedor", difficulty: "easy", example: "Sprzedawca pomógł mi znaleźć odpowiedni rozmiar", exampleTranslation: "El vendedor me ayudó a encontrar la talla correcta" },
      { id: "shop6", polish: "Koszyk", spanish: "Cesta", difficulty: "easy", example: "Mój koszyk na zakupy jest już pełny", exampleTranslation: "Mi cesta de compras ya está llena" },
      { id: "shop7", polish: "Promocja", spanish: "Oferta", difficulty: "medium", example: "W tym tygodniu są świetne promocje na wszystko", exampleTranslation: "Esta semana hay ofertas excelentes en todo" },
      { id: "shop8", polish: "Rachunek", spanish: "Cuenta", difficulty: "medium", example: "Poproszę o rachunek za te zakupy", exampleTranslation: "La cuenta de estas compras, por favor" },
      { id: "shop9", polish: "Wymiana", spanish: "Cambio", difficulty: "medium", example: "Czy mogę dokonać wymiany tego produktu?", exampleTranslation: "¿Puedo hacer un cambio de este producto?" },
      { id: "shop10", polish: "Zwrot", spanish: "Devolución", difficulty: "medium", example: "Polityka zwrotu pozwala na zwrot w ciągu miesiąca", exampleTranslation: "La política de devolución permite devolver dentro de un mes" },
      { id: "shop11", polish: "Rozmiar", spanish: "Talla", difficulty: "medium", example: "Ten rozmiar jest za duży, potrzebuję mniejszego", exampleTranslation: "Esta talla es demasiado grande, necesito una más pequeña" },
      { id: "shop12", polish: "Karta kredytowa", spanish: "Tarjeta de crédito", difficulty: "medium", example: "Płacę kartą kredytową za wszystkie zakupy", exampleTranslation: "Pago con tarjeta de crédito todas las compras" },
      { id: "shop13", polish: "Czy mogę to przymierzyć?", spanish: "¿Puedo probármelo?", difficulty: "hard", example: "Czy mogę przymierzyć tę kurtkę w przymierzalni?", exampleTranslation: "¿Puedo probarme esta chaqueta en el probador?" },
      { id: "shop14", polish: "Szukam czegoś specjalnego", spanish: "Busco algo especial", difficulty: "hard", example: "Szukam czegoś specjalnego na prezent urodzinowy", exampleTranslation: "Busco algo especial para un regalo de cumpleaños" },
      { id: "shop15", polish: "To za drogie", spanish: "Es demasiado caro", difficulty: "hard", example: "To jest za drogie dla mnie, masz coś tańszego?", exampleTranslation: "Es demasiado caro para mí, ¿tienes algo más barato?" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Sporty i aktywności fizyczne",
    icon: Dumbbell,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "sport1", polish: "Piłka nożna", spanish: "Fútbol", difficulty: "easy", example: "Piłka nożna jest najpopularniejszym sportem w Polsce", exampleTranslation: "El fútbol es el deporte más popular en Polonia" },
      { id: "sport2", polish: "Koszykówka", spanish: "Baloncesto", difficulty: "easy", example: "Gram w koszykówkę z przyjaciółmi w weekendy", exampleTranslation: "Juego al baloncesto con amigos los fines de semana" },
      { id: "sport3", polish: "Tenis", spanish: "Tenis", difficulty: "easy", example: "Tenis wymaga dobrej kondycji i koncentracji", exampleTranslation: "El tenis requiere buena condición física y concentración" },
      { id: "sport4", polish: "Pływanie", spanish: "Natación", difficulty: "easy", example: "Pływanie to świetne ćwiczenie dla całego ciała", exampleTranslation: "La natación es un excelente ejercicio para todo el cuerpo" },
      { id: "sport5", polish: "Bieganie", spanish: "Correr", difficulty: "easy", example: "Biegam każdego ranka po parku", exampleTranslation: "Corro cada mañana por el parque" },
      { id: "sport6", polish: "Siłownia", spanish: "Gimnasio", difficulty: "easy", example: "Chodzę na siłownię trzy razy w tygodniu", exampleTranslation: "Voy al gimnasio tres veces a la semana" },
      { id: "sport7", polish: "Drużyna", spanish: "Equipo", difficulty: "medium", example: "Nasza drużyna wygrała mecz w ostatniej minucie", exampleTranslation: "Nuestro equipo ganó el partido en el último minuto" },
      { id: "sport8", polish: "Trening", spanish: "Entrenamiento", difficulty: "medium", example: "Trening jest ciężki ale efektywny", exampleTranslation: "El entrenamiento es duro pero efectivo" },
      { id: "sport9", polish: "Zawodnik", spanish: "Deportista", difficulty: "medium", example: "Ten zawodnik jest znany w całym kraju", exampleTranslation: "Este deportista es conocido en todo el país" },
      { id: "sport10", polish: "Mecz", spanish: "Partido", difficulty: "medium", example: "Mecz odbędzie się w sobotę wieczorem", exampleTranslation: "El partido se jugará el sábado por la noche" },
      { id: "sport11", polish: "Mistrzostwo", spanish: "Campeonato", difficulty: "medium", example: "Zdobyliśmy mistrzostwo Polski w tym roku", exampleTranslation: "Ganamos el campeonato de Polonia este año" },
      { id: "sport12", polish: "Sędzia", spanish: "Árbitro", difficulty: "medium", example: "Sędzia podyktował rzut karny w ostatniej minucie", exampleTranslation: "El árbitro señaló un penalti en el último minuto" },
      { id: "sport13", polish: "Uprawiam sport", spanish: "Practico deporte", difficulty: "hard", example: "Regularnie uprawiam sport żeby być w dobrej formie", exampleTranslation: "Practico deporte regularmente para estar en buena forma" },
      { id: "sport14", polish: "Kto wygrał?", spanish: "¿Quién ganó?", difficulty: "hard", example: "Kto wygrał wczorajszy mecz? Nie mogłem oglądać", exampleTranslation: "¿Quién ganó el partido de ayer? No pude ver" },
      { id: "sport15", polish: "Gram w piłkę", spanish: "Juego al fútbol", difficulty: "hard", example: "Gram w piłkę nożną od dzieciństwa i to moja pasja", exampleTranslation: "Juego al fútbol desde la niñez y es mi pasión" }
    ]
  },

  restaurant: {
    name: "Restauracja",
    description: "Jedzenie w restauracji",
    icon: Utensils,
    color: "from-red-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "rest1", polish: "Restauracja", spanish: "Restaurante", difficulty: "easy", example: "Ta restauracja serwuje autentyczną kuchnię włoską", exampleTranslation: "Este restaurante sirve auténtica cocina italiana" },
      { id: "rest2", polish: "Kelner", spanish: "Camarero", difficulty: "easy", example: "Kelner był bardzo uprzejmy i pomocny", exampleTranslation: "El camarero fue muy amable y servicial" },
      { id: "rest3", polish: "Menu", spanish: "Menú", difficulty: "easy", example: "Czy mogę prosić o menu z cenami?", exampleTranslation: "¿Puedo pedir el menú con precios?" },
      { id: "rest4", polish: "Stolik", spanish: "Mesa", difficulty: "easy", example: "Zarezerwowałem stolik dla czterech osób", exampleTranslation: "Reservé una mesa para cuatro personas" },
      { id: "rest5", polish: "Napiwek", spanish: "Propina", difficulty: "easy", example: "Zostawiłem hojny napiwek za doskonałą obsługę", exampleTranslation: "Dejé una propina generosa por el excelente servicio" },
      { id: "rest6", polish: "Rachunek", spanish: "Cuenta", difficulty: "easy", example: "Poproszę o rachunek gdy będę gotowy", exampleTranslation: "La cuenta por favor cuando esté listo" },
      { id: "rest7", polish: "Danie główne", spanish: "Plato principal", difficulty: "medium", example: "Jako danie główne zamówiłem stek z wołowiny", exampleTranslation: "Como plato principal pedí un filete de ternera" },
      { id: "rest8", polish: "Przystawka", spanish: "Entrante", difficulty: "medium", example: "Na przystawkę poproszę sałatkę grecką", exampleTranslation: "Como entrante quiero ensalada griega" },
      { id: "rest9", polish: "Deser", spanish: "Postre", difficulty: "medium", example: "Czy mogę zobaczyć kartę deserów?", exampleTranslation: "¿Puedo ver la carta de postres?" },
      { id: "rest10", polish: "Rezerwacja", spanish: "Reservación", difficulty: "medium", example: "Chciałbym dokonać rezerwacji na dzisiaj wieczór", exampleTranslation: "Quisiera hacer una reservación para esta noche" },
      { id: "rest11", polish: "Specjalność", spanish: "Especialidad", difficulty: "medium", example: "Jaka jest specjalność tej restauracji?", exampleTranslation: "¿Cuál es la especialidad de este restaurante?" },
      { id: "rest12", polish: "Porcja", spanish: "Porción", difficulty: "medium", example: "Porcje w tej restauracji są bardzo duże", exampleTranslation: "Las porciones en este restaurante son muy grandes" },
      { id: "rest13", polish: "Co Pan poleca?", spanish: "¿Qué recomienda?", difficulty: "hard", example: "Co Pan dzisiaj poleca z menu? Pierwszy raz tu jestem", exampleTranslation: "¿Qué recomienda hoy del menú? Es mi primera vez aquí" },
      { id: "rest14", polish: "Było pyszne", spanish: "Estuvo delicioso", difficulty: "hard", example: "Wszystko było pyszne, complimenty dla szefa kuchni", exampleTranslation: "Todo estuvo delicioso, felicitaciones al chef" },
      { id: "rest15", polish: "Poproszę wodę", spanish: "Agua por favor", difficulty: "hard", example: "Poproszę dzbanek zimnej wody do stołu", exampleTranslation: "Una jarra de agua fría para la mesa por favor" }
    ]
  },

  emotions: {
    name: "Emocje",
    description: "Uczucia i stany emocjonalne",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "emot1", polish: "Szczęśliwy", spanish: "Feliz", difficulty: "easy", example: "Jestem bardzo szczęśliwy gdy jestem z rodziną", exampleTranslation: "Soy muy feliz cuando estoy con mi familia" },
      { id: "emot2", polish: "Smutny", spanish: "Triste", difficulty: "easy", example: "Czuję się smutny gdy pada deszcz", exampleTranslation: "Me siento triste cuando llueve" },
      { id: "emot3", polish: "Zły", spanish: "Enojado", difficulty: "easy", example: "Jestem zły bo spóźniłem się na pociąg", exampleTranslation: "Estoy enojado porque perdí el tren" },
      { id: "emot4", polish: "Zmęczony", spanish: "Cansado", difficulty: "easy", example: "Jestem bardzo zmęczony po całym dniu pracy", exampleTranslation: "Estoy muy cansado después de todo el día de trabajo" },
      { id: "emot5", polish: "Podekscytowany", spanish: "Emocionado", difficulty: "easy", example: "Jestem podekscytowany wakacjami w Hiszpanii", exampleTranslation: "Estoy emocionado por las vacaciones en España" },
      { id: "emot6", polish: "Spokojny", spanish: "Tranquilo", difficulty: "easy", example: "Czuję się spokojny nad morzem", exampleTranslation: "Me siento tranquilo junto al mar" },
      { id: "emot7", polish: "Zdenerwowany", spanish: "Nervioso", difficulty: "medium", example: "Jestem zdenerwowany przed ważnym egzaminem", exampleTranslation: "Estoy nervioso antes del examen importante" },
      { id: "emot8", polish: "Zadowolony", spanish: "Satisfecho", difficulty: "medium", example: "Jestem zadowolony z moich osiągnięć", exampleTranslation: "Estoy satisfecho con mis logros" },
      { id: "emot9", polish: "Przestraszony", spanish: "Asustado", difficulty: "medium", example: "Byłem przestraszony gdy zobaczyłem pająka", exampleTranslation: "Estaba asustado cuando vi la araña" },
      { id: "emot10", polish: "Zazdrosny", spanish: "Celoso", difficulty: "medium", example: "Nie jestem zazdrosny o sukces innych ludzi", exampleTranslation: "No soy celoso del éxito de otras personas" },
      { id: "emot11", polish: "Dumny", spanish: "Orgulloso", difficulty: "medium", example: "Jestem dumny z osiągnięć mojego syna", exampleTranslation: "Estoy orgulloso de los logros de mi hijo" },
      { id: "emot12", polish: "Samotny", spanish: "Solo", difficulty: "medium", example: "Czasami czuję się samotny w dużym mieście", exampleTranslation: "A veces me siento solo en la gran ciudad" },
      { id: "emot13", polish: "Jak się czujesz?", spanish: "¿Cómo te sientes?", difficulty: "hard", example: "Jak się dzisiaj czujesz? Mam nadzieję że lepiej", exampleTranslation: "¿Cómo te sientes hoy? Espero que mejor" },
      { id: "emot14", polish: "Jestem szczęśliwy", spanish: "Soy feliz", difficulty: "hard", example: "Jestem naprawdę szczęśliwy z moim życiem obecnie", exampleTranslation: "Soy realmente feliz con mi vida actualmente" },
      { id: "emot15", polish: "To mnie smuci", spanish: "Eso me entristece", difficulty: "hard", example: "To mnie bardzo smuci gdy widzę cierpienie innych", exampleTranslation: "Eso me entristece mucho cuando veo el sufrimiento de otros" }
    ]
  },

  nature: {
    name: "Natura",
    description: "Przyroda i środowisko naturalne",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "nat1", polish: "Drzewo", spanish: "Árbol", difficulty: "easy", example: "Stare drzewo dębowe rośnie w naszym ogrodzie", exampleTranslation: "El viejo árbol de roble crece en nuestro jardín" },
      { id: "nat2", polish: "Kwiat", spanish: "Flor", difficulty: "easy", example: "Piękne kwiaty kwitną wiosną w ogrodzie", exampleTranslation: "Las flores hermosas florecen en primavera en el jardín" },
      { id: "nat3", polish: "Las", spanish: "Bosque", difficulty: "easy", example: "Spacer po lesie jest bardzo relaksujący", exampleTranslation: "Pasear por el bosque es muy relajante" },
      { id: "nat4", polish: "Rzeka", spanish: "Río", difficulty: "easy", example: "Rzeka płynie przez centrum naszego miasta", exampleTranslation: "El río fluye por el centro de nuestra ciudad" },
      { id: "nat5", polish: "Jezioro", spanish: "Lago", difficulty: "easy", example: "Jezioro jest czyste i doskonałe do pływania", exampleTranslation: "El lago está limpio y es perfecto para nadar" },
      { id: "nat6", polish: "Góra", spanish: "Montaña", difficulty: "easy", example: "Góry w Polsce są piękne o każdej porze roku", exampleTranslation: "Las montañas en Polonia son hermosas en todas las estaciones" },
      { id: "nat7", polish: "Morze", spanish: "Mar", difficulty: "medium", example: "Morze Bałtyckie jest zimne ale piękne", exampleTranslation: "El Mar Báltico es frío pero hermoso" },
      { id: "nat8", polish: "Plaża", spanish: "Playa", difficulty: "medium", example: "Plaża latem jest pełna turystów i rodzin", exampleTranslation: "La playa en verano está llena de turistas y familias" },
      { id: "nat9", polish: "Liść", spanish: "Hoja", difficulty: "medium", example: "Jesienne liście mają piękne kolory", exampleTranslation: "Las hojas otoñales tienen colores hermosos" },
      { id: "nat10", polish: "Trawa", spanish: "Hierba", difficulty: "medium", example: "Świeża trawa pachnie cudownie po deszczu", exampleTranslation: "La hierba fresca huele maravillosamente después de la lluvia" },
      { id: "nat11", polish: "Kamień", spanish: "Piedra", difficulty: "medium", example: "Ten duży kamień leży tu od wieków", exampleTranslation: "Esta piedra grande está aquí desde hace siglos" },
      { id: "nat12", polish: "Piasek", spanish: "Arena", difficulty: "medium", example: "Piasek na plaży jest miękki i ciepły", exampleTranslation: "La arena en la playa es suave y cálida" },
      { id: "nat13", polish: "Uwielbiam naturę", spanish: "Amo la naturaleza", difficulty: "hard", example: "Uwielbiam spędzać czas w naturze z dala od miasta", exampleTranslation: "Amo pasar tiempo en la naturaleza lejos de la ciudad" },
      { id: "nat14", polish: "Chronić środowisko", spanish: "Proteger el medio ambiente", difficulty: "hard", example: "Musimy chronić środowisko naturalne dla przyszłych pokoleń", exampleTranslation: "Debemos proteger el medio ambiente para las futuras generaciones" },
      { id: "nat15", polish: "Wspaniały widok", spanish: "Vista maravillosa", difficulty: "hard", example: "Z góry roztacza się wspaniały widok na dolinę", exampleTranslation: "Desde la montaña hay una vista maravillosa del valle" }
    ]
  },

  city: {
    name: "Miasto",
    description: "Życie w mieście i miejsca publiczne",
    icon: Building,
    color: "from-slate-400 to-gray-600",
    level: "intermediate",
    words: [
      { id: "city1", polish: "Miasto", spanish: "Ciudad", difficulty: "easy", example: "Nasze miasto ma ponad milion mieszkańców", exampleTranslation: "Nuestra ciudad tiene más de un millón de habitantes" },
      { id: "city2", polish: "Ulica", spanish: "Calle", difficulty: "easy", example: "Mieszkam przy spokojnej ulicy pełnej drzew", exampleTranslation: "Vivo en una calle tranquila llena de árboles" },
      { id: "city3", polish: "Park", spanish: "Parque", difficulty: "easy", example: "Park w centrum jest idealny na spacery", exampleTranslation: "El parque en el centro es ideal para pasear" },
      { id: "city4", polish: "Most", spanish: "Puente", difficulty: "easy", example: "Most nad rzeką łączy dwie części miasta", exampleTranslation: "El puente sobre el río conecta dos partes de la ciudad" },
      { id: "city5", polish: "Plac", spanish: "Plaza", difficulty: "easy", example: "Na głównym placu odbywają się koncerty latem", exampleTranslation: "En la plaza principal hay conciertos en verano" },
      { id: "city6", polish: "Budynek", spanish: "Edificio", difficulty: "easy", example: "Ten wysoki budynek ma pięćdziesiąt pięter", exampleTranslation: "Este edificio alto tiene cincuenta pisos" },
      { id: "city7", polish: "Muzeum", spanish: "Museo", difficulty: "medium", example: "Muzeum narodowe ma bogatą kolekcję sztuki", exampleTranslation: "El museo nacional tiene una rica colección de arte" },
      { id: "city8", polish: "Kino", spanish: "Cine", difficulty: "medium", example: "Kino multipleks pokazuje najnowsze filmy", exampleTranslation: "El cine multiplex muestra las películas más recientes" },
      { id: "city9", polish: "Teatr", spanish: "Teatro", difficulty: "medium", example: "Teatr narodowy wystawia klasyczne sztuki", exampleTranslation: "El teatro nacional presenta obras clásicas" },
      { id: "city10", polish: "Pomnik", spanish: "Monumento", difficulty: "medium", example: "Pomnik w centrum upamiętnia ważne wydarzenie historyczne", exampleTranslation: "El monumento en el centro conmemora un evento histórico importante" },
      { id: "city11", polish: "Ratusz", spanish: "Ayuntamiento", difficulty: "medium", example: "Ratusz miejski jest pięknym zabytkowym budynkiem", exampleTranslation: "El ayuntamiento es un hermoso edificio histórico" },
      { id: "city12", polish: "Rynek", spanish: "Mercado", difficulty: "medium", example: "Rynek w weekend tętni życiem i kolorami", exampleTranslation: "El mercado el fin de semana está lleno de vida y colores" },
      { id: "city13", polish: "Gdzie jest centrum?", spanish: "¿Dónde está el centro?", difficulty: "hard", example: "Przepraszam, jak dojść stąd do centrum miasta?", exampleTranslation: "Disculpe, ¿cómo llegar desde aquí al centro de la ciudad?" },
      { id: "city14", polish: "Uwielbiam to miasto", spanish: "Me encanta esta ciudad", difficulty: "hard", example: "Uwielbiam to miasto za jego historię i architekturę", exampleTranslation: "Me encanta esta ciudad por su historia y arquitectura" },
      { id: "city15", polish: "Miasto nigdy nie śpi", spanish: "La ciudad nunca duerme", difficulty: "hard", example: "To miasto naprawdę nigdy nie śpi, zawsze coś się dzieje", exampleTranslation: "Esta ciudad realmente nunca duerme, siempre pasa algo" }
    ]
  },

  health: {
    name: "Zdrowie",
    description: "Zdrowie i samopoczucie",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "health1", polish: "Zdrowie", spanish: "Salud", difficulty: "easy", example: "Zdrowie jest najważniejsze w życiu", exampleTranslation: "La salud es lo más importante en la vida" },
      { id: "health2", polish: "Chory", spanish: "Enfermo", difficulty: "easy", example: "Jestem chory i muszę zostać w domu", exampleTranslation: "Estoy enfermo y debo quedarme en casa" },
      { id: "health3", polish: "Ból", spanish: "Dolor", difficulty: "easy", example: "Mam silny ból głowy od rana", exampleTranslation: "Tengo un dolor de cabeza fuerte desde la mañana" },
      { id: "health4", polish: "Lek", spanish: "Medicina", difficulty: "easy", example: "Muszę wziąć lek trzy razy dziennie", exampleTranslation: "Debo tomar la medicina tres veces al día" },
      { id: "health5", polish: "Apteka", spanish: "Farmacia", difficulty: "easy", example: "Najbliższa apteka jest otwarta całą dobę", exampleTranslation: "La farmacia más cercana está abierta las veinticuatro horas" },
      { id: "health6", polish: "Szpital", spanish: "Hospital", difficulty: "easy", example: "Szpital miejski ma doskonałych lekarzy", exampleTranslation: "El hospital municipal tiene médicos excelentes" },
      { id: "health7", polish: "Gorączka", spanish: "Fiebre", difficulty: "medium", example: "Mam wysoką gorączkę i dreszcze", exampleTranslation: "Tengo fiebre alta y escalofríos" },
      { id: "health8", polish: "Kaszel", spanish: "Tos", difficulty: "medium", example: "Ten uporczywy kaszel nie daje mi spać", exampleTranslation: "Esta tos persistente no me deja dormir" },
      { id: "health9", polish: "Recepta", spanish: "Receta", difficulty: "medium", example: "Lekarz wypisał mi receptę na antybiotyk", exampleTranslation: "El médico me dio una receta para antibióticos" },
      { id: "health10", polish: "Badanie", spanish: "Examen", difficulty: "medium", example: "Muszę zrobić badanie krwi rano na czczo", exampleTranslation: "Debo hacerme un examen de sangre por la mañana en ayunas" },
      { id: "health11", polish: "Uczulenie", spanish: "Alergia", difficulty: "medium", example: "Mam uczulenie na pyłki roślin wiosną", exampleTranslation: "Tengo alergia al polen de las plantas en primavera" },
      { id: "health12", polish: "Witamina", spanish: "Vitamina", difficulty: "medium", example: "Witamina C wzmacnia nasz system odpornościowy", exampleTranslation: "La vitamina C fortalece nuestro sistema inmunológico" },
      { id: "health13", polish: "Źle się czuję", spanish: "Me siento mal", difficulty: "hard", example: "Źle się czuję od wczoraj i muszę iść do lekarza", exampleTranslation: "Me siento mal desde ayer y debo ir al médico" },
      { id: "health14", polish: "Potrzebuję lekarza", spanish: "Necesito un médico", difficulty: "hard", example: "Potrzebuję pilnie zobaczyć się z lekarzem", exampleTranslation: "Necesito ver a un médico urgentemente" },
      { id: "health15", polish: "Czuję się lepiej", spanish: "Me siento mejor", difficulty: "hard", example: "Dziękuję za troskę, już czuję się dużo lepiej", exampleTranslation: "Gracias por la preocupación, ya me siento mucho mejor" }
    ]
  },

  hobbies: {
    name: "Hobby",
    description: "Zainteresowania i hobby",
    icon: Music,
    color: "from-violet-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "hobby1", polish: "Muzyka", spanish: "Música", difficulty: "easy", example: "Muzyka klasyczna pomaga mi się relaksować", exampleTranslation: "La música clásica me ayuda a relajarme" },
      { id: "hobby2", polish: "Film", spanish: "Película", difficulty: "easy", example: "Wczoraj obejrzałem świetny film w kinie", exampleTranslation: "Ayer vi una película excelente en el cine" },
      { id: "hobby3", polish: "Czytanie", spanish: "Lectura", difficulty: "easy", example: "Czytanie książek jest moją pasją od dzieciństwa", exampleTranslation: "La lectura de libros es mi pasión desde la infancia" },
      { id: "hobby4", polish: "Malowanie", spanish: "Pintura", difficulty: "easy", example: "Maluję obrazy olejne w wolnym czasie", exampleTranslation: "Pinto cuadros al óleo en mi tiempo libre" },
      { id: "hobby5", polish: "Fotografia", spanish: "Fotografía", difficulty: "easy", example: "Fotografia krajobrazowa to moje ulubione hobby", exampleTranslation: "La fotografía de paisajes es mi hobby favorito" },
      { id: "hobby6", polish: "Taniec", spanish: "Baile", difficulty: "easy", example: "Uczę się tańca latynoamerykańskiego", exampleTranslation: "Estoy aprendiendo baile latinoamericano" },
      { id: "hobby7", polish: "Śpiew", spanish: "Canto", difficulty: "medium", example: "Śpiew w chórze daje mi dużo radości", exampleTranslation: "Cantar en el coro me da mucha alegría" },
      { id: "hobby8", polish: "Gra na gitarze", spanish: "Tocar la guitarra", difficulty: "medium", example: "Gram na gitarze od dziesięciu lat", exampleTranslation: "Toco la guitarra desde hace diez años" },
      { id: "hobby9", polish: "Ogrodnictwo", spanish: "Jardinería", difficulty: "medium", example: "Ogrodnictwo to relaksujące hobby dla ciała i ducha", exampleTranslation: "La jardinería es un hobby relajante para cuerpo y espíritu" },
      { id: "hobby10", polish: "Kolekcjonowanie", spanish: "Coleccionar", difficulty: "medium", example: "Kolekcjonuję znaczki pocztowe z całego świata", exampleTranslation: "Colecciono sellos postales de todo el mundo" },
      { id: "hobby11", polish: "Gotowanie", spanish: "Cocinar", difficulty: "medium", example: "Gotowanie to sztuka którą ciągle się uczę", exampleTranslation: "Cocinar es un arte que sigo aprendiendo" },
      { id: "hobby12", polish: "Podróżowanie", spanish: "Viajar", difficulty: "medium", example: "Podróżowanie poszerza horyzonty i otwiera umysł", exampleTranslation: "Viajar amplía horizontes y abre la mente" },
      { id: "hobby13", polish: "Jakie masz hobby?", spanish: "¿Cuáles son tus hobbies?", difficulty: "hard", example: "Jakie masz hobby w wolnym czasie? Opowiedz mi o nich", exampleTranslation: "¿Cuáles son tus hobbies en tu tiempo libre? Cuéntame sobre ellos" },
      { id: "hobby14", polish: "To moja pasja", spanish: "Es mi pasión", difficulty: "hard", example: "Muzyka to nie tylko hobby, to naprawdę moja największa pasja", exampleTranslation: "La música no es solo un hobby, es realmente mi mayor pasión" },
      { id: "hobby15", polish: "Relaksuję się tak", spanish: "Así me relajo", difficulty: "hard", example: "Malując obrazy tak się relaksuję po stresującym dniu", exampleTranslation: "Pintando cuadros así me relajo después de un día estresante" }
    ]
  },

  technology: {
    name: "Technologia",
    description: "Urządzenia i technologia",
    icon: Phone,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "tech1", polish: "Komputer", spanish: "Computadora", difficulty: "easy", example: "Mój komputer jest szybki i wydajny do pracy", exampleTranslation: "Mi computadora es rápida y eficiente para trabajar" },
      { id: "tech2", polish: "Telefon", spanish: "Teléfono", difficulty: "easy", example: "Telefon komórkowy jest zawsze przy mnie", exampleTranslation: "El teléfono móvil está siempre conmigo" },
      { id: "tech3", polish: "Internet", spanish: "Internet", difficulty: "easy", example: "Internet zmienił sposób w jaki się komunikujemy", exampleTranslation: "Internet cambió la forma en que nos comunicamos" },
      { id: "tech4", polish: "Klawiatura", spanish: "Teclado", difficulty: "easy", example: "Klawiatura mechaniczna jest wygodna do pisania", exampleTranslation: "El teclado mecánico es cómodo para escribir" },
      { id: "tech5", polish: "Mysz", spanish: "Ratón", difficulty: "easy", example: "Mysz bezprzewodowa daje więcej swobody", exampleTranslation: "El ratón inalámbrico da más libertad" },
      { id: "tech6", polish: "Ekran", spanish: "Pantalla", difficulty: "easy", example: "Duży ekran jest lepszy do oglądania filmów", exampleTranslation: "La pantalla grande es mejor para ver películas" },
      { id: "tech7", polish: "Aplikacja", spanish: "Aplicación", difficulty: "medium", example: "Ta aplikacja pomaga mi uczyć się języków", exampleTranslation: "Esta aplicación me ayuda a aprender idiomas" },
      { id: "tech8", polish: "Hasło", spanish: "Contraseña", difficulty: "medium", example: "Zmieniam hasło do konta co trzy miesiące", exampleTranslation: "Cambio la contraseña de mi cuenta cada tres meses" },
      { id: "tech9", polish: "Poczta elektroniczna", spanish: "Correo electrónico", difficulty: "medium", example: "Sprawdzam pocztę elektroniczną kilka razy dziennie", exampleTranslation: "Reviso el correo electrónico varias veces al día" },
      { id: "tech10", polish: "Wi-Fi", spanish: "Wi-Fi", difficulty: "medium", example: "Wi-Fi w tej kawiarni jest szybkie i darmowe", exampleTranslation: "El Wi-Fi en esta cafetería es rápido y gratuito" },
      { id: "tech11", polish: "Ładowarka", spanish: "Cargador", difficulty: "medium", example: "Zapomniałem ładowarki do telefonu w domu", exampleTranslation: "Olvidé el cargador del teléfono en casa" },
      { id: "tech12", polish: "Aktualizacja", spanish: "Actualización", difficulty: "medium", example: "Instaluję najnowszą aktualizację systemu", exampleTranslation: "Instalo la actualización más reciente del sistema" },
      { id: "tech13", polish: "Nie działa mi internet", spanish: "No me funciona internet", difficulty: "hard", example: "Nie działa mi internet od wczoraj wieczora", exampleTranslation: "No me funciona internet desde anoche" },
      { id: "tech14", polish: "Bateria się rozładowała", spanish: "Se descargó la batería", difficulty: "hard", example: "Bateria w telefonie całkowicie się rozładowała", exampleTranslation: "Se descargó completamente la batería del teléfono" },
      { id: "tech15", polish: "Potrzebuję pomocy technicznej", spanish: "Necesito ayuda técnica", difficulty: "hard", example: "Potrzebuję pomocy technicznej z tym komputerem", exampleTranslation: "Necesito ayuda técnica con esta computadora" }
    ]
  },

  drinks: {
    name: "Napoje",
    description: "Różne napoje",
    icon: Coffee,
    color: "from-amber-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "drink1", polish: "Woda", spanish: "Agua", difficulty: "easy", example: "Piję dużo wody każdego dnia", exampleTranslation: "Bebo mucha agua cada día" },
      { id: "drink2", polish: "Kawa", spanish: "Café", difficulty: "easy", example: "Rano zawsze piję mocną kawę z mlekiem", exampleTranslation: "Por la mañana siempre bebo café fuerte con leche" },
      { id: "drink3", polish: "Herbata", spanish: "Té", difficulty: "easy", example: "Herbata zielona jest bardzo zdrowa", exampleTranslation: "El té verde es muy saludable" },
      { id: "drink4", polish: "Sok", spanish: "Jugo", difficulty: "easy", example: "Świeży sok pomarańczowy ma dużo witamin", exampleTranslation: "El jugo de naranja fresco tiene muchas vitaminas" },
      { id: "drink5", polish: "Mleko", spanish: "Leche", difficulty: "easy", example: "Dzieci powinny pić mleko żeby rosnąć", exampleTranslation: "Los niños deben beber leche para crecer" },
      { id: "drink6", polish: "Piwo", spanish: "Cerveza", difficulty: "easy", example: "Zimne piwo smakuje świetnie w upały", exampleTranslation: "La cerveza fría sabe genial en el calor" },
      { id: "drink7", polish: "Wino", spanish: "Vino", difficulty: "medium", example: "Czerwone wino pasuje doskonale do mięsa", exampleTranslation: "El vino tinto combina perfectamente con la carne" },
      { id: "drink8", polish: "Koktajl", spanish: "Batido", difficulty: "medium", example: "Robię koktajl owocowy na śniadanie", exampleTranslation: "Hago un batido de frutas para el desayuno" },
      { id: "drink9", polish: "Lemoniada", spanish: "Limonada", difficulty: "medium", example: "Domowa lemoniada jest orzeźwiająca latem", exampleTranslation: "La limonada casera es refrescante en verano" },
      { id: "drink10", polish: "Gorąca czekolada", spanish: "Chocolate caliente", difficulty: "medium", example: "Gorąca czekolada rozgrzewa zimą", exampleTranslation: "El chocolate caliente calienta en invierno" },
      { id: "drink11", polish: "Napój gazowany", spanish: "Refresco", difficulty: "medium", example: "Unikam napojów gazowanych bo mają za dużo cukru", exampleTranslation: "Evito los refrescos porque tienen demasiado azúcar" },
      { id: "drink12", polish: "Woda mineralna", spanish: "Agua mineral", difficulty: "medium", example: "Woda mineralna gazowana jest orzeźwiająca", exampleTranslation: "El agua mineral con gas es refrescante" },
      { id: "drink13", polish: "Co chciałbyś wypić?", spanish: "¿Qué te gustaría beber?", difficulty: "hard", example: "Co chciałbyś wypić? Mamy kawę, herbatę i soki", exampleTranslation: "¿Qué te gustaría beber? Tenemos café, té y jugos" },
      { id: "drink14", polish: "Poproszę kawę", spanish: "Un café por favor", difficulty: "hard", example: "Poproszę dużą kawę z mlekiem i cukrem", exampleTranslation: "Un café grande con leche y azúcar por favor" },
      { id: "drink15", polish: "To bardzo orzeźwiające", spanish: "Es muy refrescante", difficulty: "hard", example: "Ten napój jest bardzo orzeźwiający w gorący dzień", exampleTranslation: "Esta bebida es muy refrescante en un día caluroso" }
    ]
  },

  cooking: {
    name: "Gotowanie",
    description: "Przygotowywanie posiłków",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "cook1", polish: "Gotować", spanish: "Cocinar", difficulty: "easy", example: "Uczę się gotować tradycyjne polskie potrawy", exampleTranslation: "Estoy aprendiendo a cocinar platos tradicionales polacos" },
      { id: "cook2", polish: "Przepis", spanish: "Receta", difficulty: "easy", example: "Znalazłem świetny przepis na ciasto czekoladowe", exampleTranslation: "Encontré una receta excelente para pastel de chocolate" },
      { id: "cook3", polish: "Składnik", spanish: "Ingrediente", difficulty: "easy", example: "Wszystkie składniki do tego dania są świeże", exampleTranslation: "Todos los ingredientes para este plato son frescos" },
      { id: "cook4", polish: "Piec", spanish: "Horno", difficulty: "easy", example: "Piekę chleb w piecu przez czterdzieści minut", exampleTranslation: "Horneo pan en el horno durante cuarenta minutos" },
      { id: "cook5", polish: "Patelnia", spanish: "Sartén", difficulty: "easy", example: "Smaż jajka na patelni z odrobiną masła", exampleTranslation: "Fríe los huevos en la sartén con un poco de mantequilla" },
      { id: "cook6", polish: "Garnek", spanish: "Olla", difficulty: "easy", example: "Gotuję zupę w dużym garnku przez godzinę", exampleTranslation: "Cocino la sopa en una olla grande durante una hora" },
      { id: "cook7", polish: "Nóż", spanish: "Cuchillo", difficulty: "medium", example: "Ostry nóż jest niezbędny w kuchni", exampleTranslation: "Un cuchillo afilado es indispensable en la cocina" },
      { id: "cook8", polish: "Deska do krojenia", spanish: "Tabla de cortar", difficulty: "medium", example: "Kroję warzywa na drewnianej desce do krojenia", exampleTranslation: "Corto las verduras en una tabla de madera" },
      { id: "cook9", polish: "Przyprawy", spanish: "Especias", difficulty: "medium", example: "Przyprawy dodają smaku każdemu daniu", exampleTranslation: "Las especias añaden sabor a cada plato" },
      { id: "cook10", polish: "Smażyć", spanish: "Freír", difficulty: "medium", example: "Wolę piec zamiast smażyć żeby było zdrowiej", exampleTranslation: "Prefiero hornear en lugar de freír para que sea más saludable" },
      { id: "cook11", polish: "Mieszać", spanish: "Mezclar", difficulty: "medium", example: "Trzeba dokładnie mieszać składniki przez minutę", exampleTranslation: "Hay que mezclar bien los ingredientes durante un minuto" },
      { id: "cook12", polish: "Smak", spanish: "Sabor", difficulty: "medium", example: "To danie ma wyjątkowy i intensywny smak", exampleTranslation: "Este plato tiene un sabor único e intenso" },
      { id: "cook13", polish: "Umiem gotować", spanish: "Sé cocinar", difficulty: "hard", example: "Umiem gotować wiele tradycyjnych polskich dań", exampleTranslation: "Sé cocinar muchos platos tradicionales polacos" },
      { id: "cook14", polish: "Spróbuj tego", spanish: "Prueba esto", difficulty: "hard", example: "Spróbuj tego dania które przygotowałem specjalnie", exampleTranslation: "Prueba este plato que preparé especialmente" },
      { id: "cook15", polish: "Jest pyszne", spanish: "Está delicioso", difficulty: "hard", example: "To danie jest absolutnie pyszne, gratuluję!", exampleTranslation: "Este plato está absolutnie delicioso, ¡felicitaciones!" }
    ]
  },

  seasons: {
    name: "Pory roku",
    description: "Cztery pory roku",
    icon: Cloud,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "seas1", polish: "Wiosna", spanish: "Primavera", difficulty: "easy", example: "Wiosna jest moją ulubioną porą roku", exampleTranslation: "La primavera es mi estación favorita del año" },
      { id: "seas2", polish: "Lato", spanish: "Verano", difficulty: "easy", example: "Latem jedziemy nad morze na wakacje", exampleTranslation: "En verano vamos al mar de vacaciones" },
      { id: "seas3", polish: "Jesień", spanish: "Otoño", difficulty: "easy", example: "Jesień w Polsce jest piękna z kolorowymi liśćmi", exampleTranslation: "El otoño en Polonia es hermoso con hojas coloridas" },
      { id: "seas4", polish: "Zima", spanish: "Invierno", difficulty: "easy", example: "Zimą jeździmy na narty w góry", exampleTranslation: "En invierno vamos a esquiar a las montañas" },
      { id: "seas5", polish: "Ciepło", spanish: "Calor", difficulty: "easy", example: "Latem bywa bardzo ciepło w Polsce", exampleTranslation: "En verano hace muy calor en Polonia" },
      { id: "seas6", polish: "Mróz", spanish: "Helada", difficulty: "easy", example: "Rankiem był silny mróz i wszystko było pokryte lodem", exampleTranslation: "Por la mañana había una fuerte helada y todo estaba cubierto de hielo" },
      { id: "seas7", polish: "Kwitnienie", spanish: "Floración", difficulty: "medium", example: "Wiosenne kwitnienie drzew owocowych jest piękne", exampleTranslation: "La floración primaveral de los árboles frutales es hermosa" },
      { id: "seas8", polish: "Liście", spanish: "Hojas", difficulty: "medium", example: "Jesienne liście spadają z drzew tworząc kolorowy dywan", exampleTranslation: "Las hojas otoñales caen de los árboles creando una alfombra colorida" },
      { id: "seas9", polish: "Śnieg", spanish: "Nieve", difficulty: "medium", example: "Śnieg pada gęsto i pokrywa wszystko białym puchem", exampleTranslation: "La nieve cae densamente y cubre todo con un manto blanco" },
      { id: "seas10", polish: "Słonecznie", spanish: "Soleado", difficulty: "medium", example: "Dzisiaj jest słonecznie i ciepło", exampleTranslation: "Hoy está soleado y cálido" },
      { id: "seas11", polish: "Przymrozek", spanish: "Escarcha", difficulty: "medium", example: "Poranek przyniósł przymrozek na trawie", exampleTranslation: "La mañana trajo escarcha en la hierba" },
      { id: "seas12", polish: "Topnienie", spanish: "Deshielo", difficulty: "medium", example: "Wiosną następuje topnienie śniegu w górach", exampleTranslation: "En primavera ocurre el deshielo de la nieve en las montañas" },
      { id: "seas13", polish: "Jaka pora roku?", spanish: "¿Qué estación del año?", difficulty: "hard", example: "Jaka pora roku jest twoją ulubioną i dlaczego?", exampleTranslation: "¿Qué estación del año es tu favorita y por qué?" },
      { id: "seas14", polish: "Uwielbiam wiosnę", spanish: "Me encanta la primavera", difficulty: "hard", example: "Uwielbiam wiosnę gdy wszystko zaczyna kwitnąć", exampleTranslation: "Me encanta la primavera cuando todo empieza a florecer" },
      { id: "seas15", polish: "Zimno mi", spanish: "Tengo frío", difficulty: "hard", example: "Bardzo mi zimno, czy możesz podnieść ogrzewanie?", exampleTranslation: "Tengo mucho frío, ¿puedes subir la calefacción?" }
    ]
  },

  daily_routine: {
    name: "Codzienna rutyna",
    description: "Codzienne czynności",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "daily1", polish: "Budzić się", spanish: "Despertarse", difficulty: "easy", example: "Budzę się codziennie o szóstej rano", exampleTranslation: "Me despierto todos los días a las seis de la mañana" },
      { id: "daily2", polish: "Myć zęby", spanish: "Cepillarse los dientes", difficulty: "easy", example: "Myję zęby dwa razy dziennie regularnie", exampleTranslation: "Me cepillo los dientes dos veces al día regularmente" },
      { id: "daily3", polish: "Jeść śniadanie", spanish: "Desayunar", difficulty: "easy", example: "Zawsze jem śniadanie przed wyjściem z domu", exampleTranslation: "Siempre desayuno antes de salir de casa" },
      { id: "daily4", polish: "Iść do pracy", spanish: "Ir al trabajo", difficulty: "easy", example: "Idę do pracy o siódmej trzydzieści", exampleTranslation: "Voy al trabajo a las siete y media" },
      { id: "daily5", polish: "Gotować obiad", spanish: "Cocinar la comida", difficulty: "easy", example: "Gotuję obiad dla całej rodziny wieczorem", exampleTranslation: "Cocino la comida para toda la familia por la noche" },
      { id: "daily6", polish: "Oglądać telewizję", spanish: "Ver televisión", difficulty: "easy", example: "Wieczorem lubię oglądać telewizję i odpoczywać", exampleTranslation: "Por la noche me gusta ver televisión y descansar" },
      { id: "daily7", polish: "Brać prysznic", spanish: "Ducharse", difficulty: "medium", example: "Biorę ciepły prysznic przed snem", exampleTranslation: "Me ducho con agua caliente antes de dormir" },
      { id: "daily8", polish: "Ubierać się", spanish: "Vestirse", difficulty: "medium", example: "Ubieram się elegancko do pracy każdego dnia", exampleTranslation: "Me visto elegante para el trabajo cada día" },
      { id: "daily9", polish: "Sprzątać", spanish: "Limpiar", difficulty: "medium", example: "Sprzątam mieszkanie w każdą sobotę rano", exampleTranslation: "Limpio el apartamento cada sábado por la mañana" },
      { id: "daily10", polish: "Robić zakupy", spanish: "Hacer compras", difficulty: "medium", example: "Robię zakupy spożywcze raz w tygodniu", exampleTranslation: "Hago compras de comestibles una vez a la semana" },
      { id: "daily11", polish: "Ćwiczyć", spanish: "Hacer ejercicio", difficulty: "medium", example: "Staram się ćwiczyć przynajmniej trzy razy w tygodniu", exampleTranslation: "Intento hacer ejercicio al menos tres veces a la semana" },
      { id: "daily12", polish: "Kłaść się spać", spanish: "Acostarse", difficulty: "medium", example: "Kładę się spać o dziesiątej każdego wieczoru", exampleTranslation: "Me acuesto a las diez cada noche" },
      { id: "daily13", polish: "O której wstajesz?", spanish: "¿A qué hora te levantas?", difficulty: "hard", example: "O której zazwyczaj wstajesz w dni robocze?", exampleTranslation: "¿A qué hora sueles levantarte en días laborables?" },
      { id: "daily14", polish: "Mam mnóstwo do zrobienia", spanish: "Tengo mucho que hacer", difficulty: "hard", example: "Dzisiaj mam mnóstwo rzeczy do zrobienia", exampleTranslation: "Hoy tengo muchísimas cosas que hacer" },
      { id: "daily15", polish: "Jestem bardzo zajęty", spanish: "Estoy muy ocupado", difficulty: "hard", example: "Jestem bardzo zajęty w tym tygodniu z pracą", exampleTranslation: "Estoy muy ocupado esta semana con el trabajo" }
    ]
  },

  office: {
    name: "Biuro",
    description: "Praca biurowa i środowisko",
    icon: Briefcase,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "office1", polish: "Biuro", spanish: "Oficina", difficulty: "easy", example: "Moje biuro znajduje się w centrum miasta", exampleTranslation: "Mi oficina está ubicada en el centro de la ciudad" },
      { id: "office2", polish: "Biurko", spanish: "Escritorio", difficulty: "easy", example: "Mam duże biurko z miejscem na komputer", exampleTranslation: "Tengo un escritorio grande con espacio para la computadora" },
      { id: "office3", polish: "Krzesło", spanish: "Silla", difficulty: "easy", example: "Wygodne krzesło biurowe jest ważne dla zdrowia", exampleTranslation: "Una silla de oficina cómoda es importante para la salud" },
      { id: "office4", polish: "Spotkanie", spanish: "Reunión", difficulty: "easy", example: "Mam ważne spotkanie z klientem o dziesiątej", exampleTranslation: "Tengo una reunión importante con un cliente a las diez" },
      { id: "office5", polish: "Raport", spanish: "Informe", difficulty: "easy", example: "Muszę napisać raport do końca tygodnia", exampleTranslation: "Debo escribir el informe para el fin de semana" },
      { id: "office6", polish: "Projekt", spanish: "Proyecto", difficulty: "easy", example: "Pracuję nad nowym projektem dla firmy", exampleTranslation: "Trabajo en un nuevo proyecto para la empresa" },
      { id: "office7", polish: "Prezentacja", spanish: "Presentación", difficulty: "medium", example: "Przygotowuję prezentację na jutrzejszą konferencję", exampleTranslation: "Preparo una presentación para la conferencia de mañana" },
      { id: "office8", polish: "Termin", spanish: "Plazo", difficulty: "medium", example: "Termin oddania projektu mija w piątek", exampleTranslation: "El plazo de entrega del proyecto vence el viernes" },
      { id: "office9", polish: "Współpracownik", spanish: "Colega", difficulty: "medium", example: "Moi współpracownicy są bardzo pomocni i mili", exampleTranslation: "Mis colegas son muy serviciales y amables" },
      { id: "office10", polish: "Szef", spanish: "Jefe", difficulty: "medium", example: "Mój szef jest wymagający ale sprawiedliwy", exampleTranslation: "Mi jefe es exigente pero justo" },
      { id: "office11", polish: "Pensja", spanish: "Salario", difficulty: "medium", example: "Pensja jest wypłacana ostatniego dnia miesiąca", exampleTranslation: "El salario se paga el último día del mes" },
      { id: "office12", polish: "Umowa", spanish: "Contrato", difficulty: "medium", example: "Podpisałem umowę o pracę na czas nieokreślony", exampleTranslation: "Firmé un contrato de trabajo indefinido" },
      { id: "office13", polish: "Jestem w pracy", spanish: "Estoy en el trabajo", difficulty: "hard", example: "Przepraszam jestem teraz w pracy, zadzwonię później", exampleTranslation: "Disculpa estoy en el trabajo ahora, te llamo después" },
      { id: "office14", polish: "Mam dużo pracy", spanish: "Tengo mucho trabajo", difficulty: "hard", example: "Mam bardzo dużo pracy w tym tygodniu przed urlopem", exampleTranslation: "Tengo mucho trabajo esta semana antes de las vacaciones" },
      { id: "office15", polish: "Pracuję zdalnie", spanish: "Trabajo remotamente", difficulty: "hard", example: "Od pandemii pracuję głównie zdalnie z domu", exampleTranslation: "Desde la pandemia trabajo principalmente remotamente desde casa" }
    ]
  },

  meals: {
    name: "Posiłki",
    description: "Posiłki w ciągu dnia",
    icon: Pizza,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "meal1", polish: "Śniadanie", spanish: "Desayuno", difficulty: "easy", example: "Śniadanie to najważniejszy posiłek dnia", exampleTranslation: "El desayuno es la comida más importante del día" },
      { id: "meal2", polish: "Obiad", spanish: "Comida", difficulty: "easy", example: "Obiad jemy wspólnie całą rodziną", exampleTranslation: "La comida la tomamos juntos toda la familia" },
      { id: "meal3", polish: "Kolacja", spanish: "Cena", difficulty: "easy", example: "Na kolację przygotowałem lekką sałatkę", exampleTranslation: "Para la cena preparé una ensalada ligera" },
      { id: "meal4", polish: "Przekąska", spanish: "Merienda", difficulty: "easy", example: "Jako przekąskę jem owoce lub orzechy", exampleTranslation: "Como merienda como frutas o frutos secos" },
      { id: "meal5", polish: "Apetyt", spanish: "Apetito", difficulty: "easy", example: "Mam duży apetyt po długim spacerze", exampleTranslation: "Tengo mucho apetito después de un largo paseo" },
      { id: "meal6", polish: "Głodny", spanish: "Hambriento", difficulty: "easy", example: "Jestem bardzo głodny po treningu", exampleTranslation: "Estoy muy hambriento después del entrenamiento" },
      { id: "meal7", polish: "Syty", spanish: "Lleno", difficulty: "medium", example: "Jestem najedzony po tym dużym obiedzie", exampleTranslation: "Estoy lleno después de esta comida grande" },
      { id: "meal8", polish: "Smaczny", spanish: "Sabroso", difficulty: "medium", example: "Ten posiłek jest bardzo smaczny i aromatyczny", exampleTranslation: "Esta comida está muy sabrosa y aromática" },
      { id: "meal9", polish: "Dieta", spanish: "Dieta", difficulty: "medium", example: "Jestem na zdrowej diecie od miesiąca", exampleTranslation: "Estoy en una dieta saludable desde hace un mes" },
      { id: "meal10", polish: "Kalorii", spanish: "Calorías", difficulty: "medium", example: "Staram się liczyć kalorie które jem", exampleTranslation: "Intento contar las calorías que como" },
      { id: "meal11", polish: "Wegetarianin", spanish: "Vegetariano", difficulty: "medium", example: "Jestem wegetarianinem od dwóch lat", exampleTranslation: "Soy vegetariano desde hace dos años" },
      { id: "meal12", polish: "Porcja", spanish: "Ración", difficulty: "medium", example: "Ta porcja jest za duża dla mnie", exampleTranslation: "Esta ración es demasiado grande para mí" },
      { id: "meal13", polish: "Jestem na diecie", spanish: "Estoy a dieta", difficulty: "hard", example: "Jestem na diecie więc nie mogę jeść słodyczy", exampleTranslation: "Estoy a dieta así que no puedo comer dulces" },
      { id: "meal14", polish: "Czy to jest zdrowe?", spanish: "¿Es saludable?", difficulty: "hard", example: "Czy to danie jest zdrowe? Staram się zdrowo jeść", exampleTranslation: "¿Este plato es saludable? Intento comer sano" },
      { id: "meal15", polish: "Smacznego!", spanish: "¡Buen provecho!", difficulty: "hard", example: "Smacznego! Mam nadzieję że ci zasmakuje", exampleTranslation: "¡Buen provecho! Espero que te guste" }
    ]
  },

  directions: {
    name: "Kierunki",
    description: "Wskazówki dojazdu i kierunki",
    icon: MapPin,
    color: "from-emerald-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "dir1", polish: "Lewo", spanish: "Izquierda", difficulty: "easy", example: "Skręć w lewo na następnym skrzyżowaniu", exampleTranslation: "Gira a la izquierda en el próximo cruce" },
      { id: "dir2", polish: "Prawo", spanish: "Derecha", difficulty: "easy", example: "Sklep jest po prawej stronie ulicy", exampleTranslation: "La tienda está al lado derecho de la calle" },
      { id: "dir3", polish: "Prosto", spanish: "Recto", difficulty: "easy", example: "Idź prosto tą ulicą przez dwie przecznice", exampleTranslation: "Ve recto por esta calle dos cuadras" },
      { id: "dir4", polish: "Róg", spanish: "Esquina", difficulty: "easy", example: "Spotkajmy się na rogu tej ulicy", exampleTranslation: "Encontrémonos en la esquina de esta calle" },
      { id: "dir5", polish: "Blisko", spanish: "Cerca", difficulty: "easy", example: "Apteka jest bardzo blisko stąd", exampleTranslation: "La farmacia está muy cerca de aquí" },
      { id: "dir6", polish: "Daleko", spanish: "Lejos", difficulty: "easy", example: "Dworzec jest daleko od centrum", exampleTranslation: "La estación está lejos del centro" },
      { id: "dir7", polish: "Przejście", spanish: "Paso", difficulty: "medium", example: "Przejdź przez ulicę na pasach dla pieszych", exampleTranslation: "Cruza la calle por el paso de peatones" },
      { id: "dir8", polish: "Światła", spanish: "Semáforo", difficulty: "medium", example: "Poczekaj na zielone światło przed przejściem", exampleTranslation: "Espera la luz verde antes de cruzar" },
      { id: "dir9", polish: "Skrzyżowanie", spanish: "Cruce", difficulty: "medium", example: "Na skrzyżowaniu skręć w prawo", exampleTranslation: "En el cruce gira a la derecha" },
      { id: "dir10", polish: "Most", spanish: "Puente", difficulty: "medium", example: "Przejdź przez most żeby dostać się na drugą stronę", exampleTranslation: "Cruza el puente para llegar al otro lado" },
      { id: "dir11", polish: "Mapa", spanish: "Mapa", difficulty: "medium", example: "Używam mapy żeby nie zgubić się w obcym mieście", exampleTranslation: "Uso el mapa para no perderme en la ciudad desconocida" },
      { id: "dir12", polish: "Adres", spanish: "Dirección", difficulty: "medium", example: "Czy możesz podać mi dokładny adres?", exampleTranslation: "¿Puedes darme la dirección exacta?" },
      { id: "dir13", polish: "Gdzie to jest?", spanish: "¿Dónde está?", difficulty: "hard", example: "Gdzie dokładnie to jest? Nie mogę znaleźć na mapie", exampleTranslation: "¿Dónde está exactamente? No puedo encontrarlo en el mapa" },
      { id: "dir14", polish: "Zgubiłem się", spanish: "Me perdí", difficulty: "hard", example: "Chyba się zgubiłem, czy możesz mi pomóc?", exampleTranslation: "Creo que me perdí, ¿puedes ayudarme?" },
      { id: "dir15", polish: "Jak tam dojść?", spanish: "¿Cómo llegar?", difficulty: "hard", example: "Jak najszybciej dojść stąd do dworca kolejowego?", exampleTranslation: "¿Cómo llegar más rápido desde aquí a la estación de tren?" }
    ]
  }
};

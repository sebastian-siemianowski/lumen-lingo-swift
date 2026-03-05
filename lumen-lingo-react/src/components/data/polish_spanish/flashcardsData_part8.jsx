
/**
 * POLISH → SPANISH FLASHCARDS - PART 8
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (97-106).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Bike,
  Church,
  Glasses,
  BookOpen,
  Briefcase,
  Music,
  Smartphone,
  MessageCircle,
  Sparkles,
  GraduationCap
} from "lucide-react";

export const flashcardsCategories_part8 = {
  transportation_vehicles: {
    name: "Transport i pojazdy",
    description: "Środki transportu",
    icon: Bike,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "trans1", polish: "Autobus", spanish: "Autobús", difficulty: "easy", example: "Autobus miejski odjeżdża co piętnaście minut z przystanku", exampleTranslation: "El autobús urbano sale cada quince minutos de la parada" },
      { id: "trans2", polish: "Pociąg", spanish: "Tren", difficulty: "easy", example: "Pociąg ekspresowy jedzie do Warszawy trzy godziny", exampleTranslation: "El tren expreso viaja a Varsovia tres horas" },
      { id: "trans3", polish: "Metro", spanish: "Metro", difficulty: "easy", example: "Metro w dużym mieście jest szybkie i wygodne", exampleTranslation: "El metro en la ciudad grande es rápido y conveniente" },
      { id: "trans4", polish: "Tramwaj", spanish: "Tranvía", difficulty: "easy", example: "Tramwaj jeździ przez centrum miasta co kilka minut", exampleTranslation: "El tranvía pasa por el centro de la ciudad cada pocos minutos" },
      { id: "trans5", polish: "Taksówka", spanish: "Taxi", difficulty: "easy", example: "Wezwałem taksówkę przez aplikację mobilną na telefonie", exampleTranslation: "Llamé un taxi por la aplicación móvil en el teléfono" },
      { id: "trans6", polish: "Rower", spanish: "Bicicleta", difficulty: "easy", example: "Rower to ekologiczny sposób poruszania się po mieście", exampleTranslation: "La bicicleta es una forma ecológica de moverse por la ciudad" },
      { id: "trans7", polish: "Motocykl", spanish: "Motocicleta", difficulty: "medium", example: "Motocykl jest szybki ale wymaga szczególnej ostrożności", exampleTranslation: "La motocicleta es rápida pero requiere precaución especial" },
      { id: "trans8", polish: "Statek", spanish: "Barco", difficulty: "medium", example: "Statek pasażerski płynie po morzu do wyspy", exampleTranslation: "El barco de pasajeros navega por el mar hacia la isla" },
      { id: "trans9", polish: "Łódź", spanish: "Bote", difficulty: "medium", example: "Wypożyczyliśmy małą łódź wiosłową na jeziorze", exampleTranslation: "Alquilamos un bote pequeño de remos en el lago" },
      { id: "trans10", polish: "Ciężarówka", spanish: "Camión", difficulty: "medium", example: "Ciężarówka przewozi towary przez całą Europę", exampleTranslation: "El camión transporta mercancías por toda Europa" },
      { id: "trans11", polish: "Helikopter", spanish: "Helicóptero", difficulty: "medium", example: "Helikopter ratunkowy leci na pomoc poszkodowanym", exampleTranslation: "El helicóptero de rescate vuela en ayuda de los heridos" },
      { id: "trans12", polish: "Skuter", spanish: "Scooter", difficulty: "medium", example: "Skuter elektryczny jest popularny wśród młodych ludzi", exampleTranslation: "El scooter eléctrico es popular entre la gente joven" },
      { id: "trans13", polish: "Jak mogę tam dojechać?", spanish: "¿Cómo puedo llegar allí?", difficulty: "hard", example: "Jak najszybciej mogę dojechać tam komunikacją miejską?", exampleTranslation: "¿Cómo puedo llegar allí lo más rápido posible en transporte público?" },
      { id: "trans14", polish: "Który autobus jedzie do centrum?", spanish: "¿Qué autobús va al centro?", difficulty: "hard", example: "Przepraszam, który autobus jedzie bezpośrednio do centrum miasta?", exampleTranslation: "Disculpe, ¿qué autobús va directamente al centro de la ciudad?" },
      { id: "trans15", polish: "Muszę złapać pociąg", spanish: "Tengo que tomar el tren", difficulty: "hard", example: "Muszę szybko złapać pociąg bo już za dziesięć minut odjeżdża", exampleTranslation: "Tengo que tomar el tren rápido porque sale en diez minutos" }
    ]
  },

  religion_spirituality: {
    name: "Religia i duchowość",
    description: "Wiara i tradycje",
    icon: Church,
    color: "from-purple-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "rel1", polish: "Kościół", spanish: "Iglesia", difficulty: "easy", example: "Kościół w naszej wsi jest bardzo stary i piękny", exampleTranslation: "La iglesia en nuestro pueblo es muy antigua y hermosa" },
      { id: "rel2", polish: "Msza", spanish: "Misa", difficulty: "easy", example: "Msza niedzielna zaczyna się o dziesiątej rano", exampleTranslation: "La misa dominical comienza a las diez de la mañana" },
      { id: "rel3", polish: "Modlitwa", spanish: "Oración", difficulty: "easy", example: "Modlitwa przed posiłkiem jest tradycją w naszej rodzinie", exampleTranslation: "La oración antes de comer es tradición en nuestra familia" },
      { id: "rel4", polish: "Wiara", spanish: "Fe", difficulty: "easy", example: "Wiara daje mi siłę w trudnych momentach życia", exampleTranslation: "La fe me da fuerza en los momentos difíciles de la vida" },
      { id: "rel5", polish: "Krzyż", spanish: "Cruz", difficulty: "easy", example: "Krzyż wisi na ścianie w każdym pokoju domu", exampleTranslation: "La cruz cuelga en la pared de cada habitación de la casa" },
      { id: "rel6", polish: "Święto", spanish: "Fiesta religiosa", difficulty: "easy", example: "Święto Bożego Narodzenia jest najważniejsze w roku", exampleTranslation: "La fiesta religiosa de Navidad es la más importante del año" },
      { id: "rel7", polish: "Kapłan", spanish: "Sacerdote", difficulty: "medium", example: "Kapłan odprawia mszę w naszym kościele parafialnym", exampleTranslation: "El sacerdote celebra la misa en nuestra iglesia parroquial" },
      { id: "rel8", polish: "Biblia", spanish: "Biblia", difficulty: "medium", example: "Czytam fragmenty Biblii codziennie wieczorem przed snem", exampleTranslation: "Leo fragmentos de la Biblia cada noche antes de dormir" },
      { id: "rel9", polish: "Sakrament", spanish: "Sacramento", difficulty: "medium", example: "Sakrament chrztu jest pierwszym w życiu chrześcijanina", exampleTranslation: "El sacramento del bautismo es el primero en la vida del cristiano" },
      { id: "rel10", polish: "Anioł", spanish: "Ángel", difficulty: "medium", example: "Anioł stróż opiekuje się nami według wierzeń religijnych", exampleTranslation: "El ángel guardián nos cuida según las creencias religiosas" },
      { id: "rel11", polish: "Błogosławieństwo", spanish: "Bendición", difficulty: "medium", example: "Otrzymaliśmy błogosławieństwo od kapłana na zakończenie mszy", exampleTranslation: "Recibimos la bendición del sacerdote al final de la misa" },
      { id: "rel12", polish: "Procesja", spanish: "Procesión", difficulty: "medium", example: "Procesja religijna przechodzi przez główną ulicę miasta", exampleTranslation: "La procesión religiosa pasa por la calle principal de la ciudad" },
      { id: "rel13", polish: "Wierzę w Boga", spanish: "Creo en Dios", difficulty: "hard", example: "Wierzę głęboko w Boga i staram się żyć zgodnie z wartościami", exampleTranslation: "Creo profundamente en Dios e intento vivir según los valores" },
      { id: "rel14", polish: "Idę do kościoła", spanish: "Voy a la iglesia", difficulty: "hard", example: "Idę do kościoła w każdą niedzielę z całą rodziną", exampleTranslation: "Voy a la iglesia cada domingo con toda la familia" },
      { id: "rel15", polish: "To moja wiara", spanish: "Esta es mi fe", difficulty: "hard", example: "To jest moja wiara i bardzo ją szanuję od dzieciństwa", exampleTranslation: "Esta es mi fe y la respeto mucho desde la infancia" }
    ]
  },

  accessories_personal: {
    name: "Akcesoria osobiste",
    description: "Małe przedmioty użytku",
    icon: Glasses,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "acc1", polish: "Okulary", spanish: "Gafas", difficulty: "easy", example: "Okulary do czytania leżą na stoliku nocnym obok łóżka", exampleTranslation: "Las gafas de lectura están en la mesita de noche al lado de la cama" },
      { id: "acc2", polish: "Zegarek", spanish: "Reloj", difficulty: "easy", example: "Zegarek na ręce pokazuje dokładny czas co do sekundy", exampleTranslation: "El reloj de pulsera muestra la hora exacta al segundo" },
      { id: "acc3", polish: "Pasek", spanish: "Cinturón", difficulty: "easy", example: "Pasek skórzany idealnie pasuje do eleganckich spodni", exampleTranslation: "El cinturón de cuero combina perfectamente con los pantalones elegantes" },
      { id: "acc4", polish: "Portfel", spanish: "Cartera", difficulty: "easy", example: "Portfel mam zawsze w tylnej kieszeni spodni", exampleTranslation: "Tengo la cartera siempre en el bolsillo trasero del pantalón" },
      { id: "acc5", polish: "Klucze", spanish: "Llaves", difficulty: "easy", example: "Guardo las llaves de casa siempre en el bolso", exampleTranslation: "Guardo las llaves de casa siempre en el bolso" },
      { id: "acc6", polish: "Parasol", spanish: "Paraguas", difficulty: "easy", example: "Parasol jest potrzebny bo zapowiadają deszcz", exampleTranslation: "El paraguas es necesario porque pronostican lluvia" },
      { id: "acc7", polish: "Czapka", spanish: "Gorro", difficulty: "medium", example: "Czapka zimowa chroni głowę przed mrozem i wiatrem", exampleTranslation: "El gorro de invierno protege la cabeza del frío y el viento" },
      { id: "acc8", polish: "Rękawiczki", spanish: "Guantes", difficulty: "medium", example: "Rękawiczki wełniane są bardzo ciepłe i miękkie", exampleTranslation: "Los guantes de lana son muy cálidos y suaves" },
      { id: "acc9", polish: "Szalik", spanish: "Bufanda", difficulty: "medium", example: "Szalik kolorowy owijam wokół szyi w chłodne dni", exampleTranslation: "Envuelvo la bufanda colorida alrededor del cuello en días fríos" },
      { id: "acc10", polish: "Bransoletka", spanish: "Pulsera", difficulty: "medium", example: "Bransoletka srebrna była prezentem od babci na urodziny", exampleTranslation: "La pulsera de plata fue un regalo de la abuela para el cumpleaños" },
      { id: "acc11", polish: "Kolczyki", spanish: "Aretes", difficulty: "medium", example: "Kolczyki z perłami są eleganckie i pasują do sukienki", exampleTranslation: "Los aretes de perlas son elegantes y combinan con el vestido" },
      { id: "acc12", polish: "Naszyjnik", spanish: "Collar", difficulty: "medium", example: "Naszyjnik złoty dostałam na rocznicę ślubu od męża", exampleTranslation: "Recibí el collar de oro en el aniversario de boda de mi esposo" },
      { id: "acc13", polish: "Zgubiłem klucze", spanish: "Perdí las llaves", difficulty: "hard", example: "Zgubiłem klucze do samochodu i nie mogę go otworzyć", exampleTranslation: "Perdí las llaves del coche y no puedo abrirlo" },
      { id: "acc14", polish: "Czy widziałeś moje okulary?", spanish: "¿Viste mis gafas?", difficulty: "hard", example: "Czy widziałeś gdzieś moje okulary? Nie mogę ich znaleźć", exampleTranslation: "¿Viste mis gafas en algún lugar? No puedo encontrarlas" },
      { id: "acc15", polish: "To był prezent", spanish: "Fue un regalo", difficulty: "hard", example: "Ten zegarek to był prezent od rodziców na maturę", exampleTranslation: "Este reloj fue un regalo de mis padres para la graduación" }
    ]
  },

  reading_writing: {
    name: "Czytanie i pisanie",
    description: "Literatura i dokumenty",
    icon: BookOpen,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "read1", polish: "Książka", spanish: "Libro", difficulty: "easy", example: "Książka którą czytam jest niezwykle interesująca i wciągająca", exampleTranslation: "El libro que leo es extremadamente interesante y absorbente" },
      { id: "read2", polish: "Gazeta", spanish: "Periódico", difficulty: "easy", example: "Czytam gazetę codziennie rano przy śniadaniu i kawie", exampleTranslation: "Leo el periódico cada mañana durante el desayuno y el café" },
      { id: "read3", polish: "Czasopismo", spanish: "Revista", difficulty: "easy", example: "Czasopismo modowe kupuję co miesiąc w kiosku", exampleTranslation: "Compro la revista de moda cada mes en el quiosco" },
      { id: "read4", polish: "Strona", spanish: "Página", difficulty: "easy", example: "Przeczytałem już dwieście stron tej fascynującej powieści", exampleTranslation: "Ya leí doscientas páginas de esta novela fascinante" },
      { id: "read5", polish: "Rozdział", spanish: "Capítulo", difficulty: "easy", example: "Rozdział pierwszy wprowadza głównych bohaterów historii", exampleTranslation: "El primer capítulo introduce a los personajes principales de la historia" },
      { id: "read6", polish: "Autor", spanish: "Autor", difficulty: "easy", example: "Autor tej książki jest laureatem nagrody literackiej", exampleTranslation: "El autor de este libro es ganador de un premio literario" },
      { id: "read7", polish: "Opowiadanie", spanish: "Cuento", difficulty: "medium", example: "Opowiadanie krótkie można przeczytać w pół godziny", exampleTranslation: "El cuento corto se puede leer en media hora" },
      { id: "read8", polish: "Powieść", spanish: "Novela", difficulty: "medium", example: "Powieść historyczna opisuje wydarzenia z dziewiętnastego wieku", exampleTranslation: "La novela histórica describe eventos del siglo diecinueve" },
      { id: "read9", polish: "Wiersz", spanish: "Poema", difficulty: "medium", example: "Wiersz romantyczny wyraża głębokie uczucia poety", exampleTranslation: "El poema romántico expresa sentimientos profundos del poeta" },
      { id: "read10", polish: "Biblioteka", spanish: "Biblioteca", difficulty: "medium", example: "Biblioteka miejska ma ogromną kolekcję książek i czasopism", exampleTranslation: "La biblioteca municipal tiene una colección enorme de libros y revistas" },
      { id: "read11", polish: "Czytelnia", spanish: "Sala de lectura", difficulty: "medium", example: "Czytelnia w bibliotece jest cicha i sprzyjająca nauce", exampleTranslation: "La sala de lectura en la biblioteca es silenciosa y propicia para estudiar" },
      { id: "read12", polish: "Czytnik", spanish: "Lector electrónico", difficulty: "medium", example: "Czytnik elektroniczny pomieści tysiące książek w pamięci", exampleTranslation: "El lector electrónico puede guardar miles de libros en la memoria" },
      { id: "read13", polish: "Polecasz tę książkę?", spanish: "¿Recomiendas este libro?", difficulty: "hard", example: "Polecasz tę książkę czy raczej powinienem przeczytać inną?", exampleTranslation: "¿Recomiendas este libro o debería leer otro mejor?" },
      { id: "read14", polish: "Uwielbiam czytać", spanish: "Me encanta leer", difficulty: "hard", example: "Uwielbiam czytać książki wieczorami przy lampce nocnej", exampleTranslation: "Me encanta leer libros por las noches con la lámpara de noche" },
      { id: "read15", polish: "To wspaniała historia", spanish: "Es una historia maravillosa", difficulty: "hard", example: "To jest naprawdę wspaniała historia pełna emocji i zwrotów akcji", exampleTranslation: "Es realmente una historia maravillosa llena de emociones y giros de trama" }
    ]
  },

  office_supplies: {
    name: "Artykuły biurowe",
    description: "Przybory do pracy",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "beginner",
    words: [
      { id: "off1", polish: "Długopis", spanish: "Bolígrafo", difficulty: "easy", example: "Długopis niebieski pisze bardzo gładko i nie cieknie", exampleTranslation: "El bolígrafo azul escribe muy suavemente y no gotea" },
      { id: "off2", polish: "Ołówek", spanish: "Lápiz", difficulty: "easy", example: "Ołówek grafitowy jest idealny do szkicowania rysunków", exampleTranslation: "El lápiz de grafito es ideal para hacer bocetos" },
      { id: "off3", polish: "Zeszyt", spanish: "Cuaderno", difficulty: "easy", example: "Zeszyt w kratkę używam do notatek z matematyki", exampleTranslation: "Uso el cuaderno cuadriculado para apuntes de matemáticas" },
      { id: "off4", polish: "Notes", spanish: "Bloc de notas", difficulty: "easy", example: "Notes na biurku służy mi do szybkich notatek", exampleTranslation: "El bloc de notas en el escritorio me sirve para notas rápidas" },
      { id: "off5", polish: "Kartka", spanish: "Hoja", difficulty: "easy", example: "Kartka papieru formatu A4 jest w drukarce", exampleTranslation: "La hoja de papel formato A4 está en la impresora" },
      { id: "off6", polish: "Gumka", spanish: "Goma de borrar", difficulty: "easy", example: "Gumka do ścierania usuwa ślady ołówka z papieru", exampleTranslation: "La goma de borrar elimina las marcas de lápiz del papel" },
      { id: "off7", polish: "Temperówka", spanish: "Sacapuntas", difficulty: "medium", example: "Temperówka ostrzy ołówki do idealnej ostrości", exampleTranslation: "El sacapuntas afila los lápices a la perfección" },
      { id: "off8", polish: "Linijka", spanish: "Regla", difficulty: "medium", example: "Linijka trzydziestocentymetrowa pomaga kreślić proste linie", exampleTranslation: "La regla de treinta centímetros ayuda a trazar líneas rectas" },
      { id: "off9", polish: "Zakreślacz", spanish: "Marcador", difficulty: "medium", example: "Zakreślacz żółty używam do podkreślania ważnych fragmentów tekstu", exampleTranslation: "Uso el marcador amarillo para resaltar fragmentos importantes del texto" },
      { id: "off10", polish: "Zszywacz", spanish: "Grapadora", difficulty: "medium", example: "Zszywacz spinacz ze sobą kilkanaście kartek papieru", exampleTranslation: "La grapadora une varias hojas de papel juntas" },
      { id: "off11", polish: "Dziurkacz", spanish: "Perforadora", difficulty: "medium", example: "Dziurkacz robi dwie dziurki do segregatora", exampleTranslation: "La perforadora hace dos agujeros para la carpeta" },
      { id: "off12", polish: "Taśma klejąca", spanish: "Cinta adhesiva", difficulty: "medium", example: "Taśma klejąca przykleja dokumenty do ściany biura", exampleTranslation: "La cinta adhesiva pega documentos a la pared de la oficina" },
      { id: "off13", polish: "Potrzebuję nowego długopisu", spanish: "Necesito un bolígrafo nuevo", difficulty: "hard", example: "Potrzebuję nowego długopisu bo ten się skończył", exampleTranslation: "Necesito un bolígrafo nuevo porque este se acabó" },
      { id: "off14", polish: "Czy masz ołówek?", spanish: "¿Tienes un lápiz?", difficulty: "hard", example: "Czy możesz mi pożyczyć ołówek na chwilę?", exampleTranslation: "¿Puedes prestarme un lápiz por un momento?" },
      { id: "off15", polish: "Skończyły się kartki", spanish: "Se acabaron las hojas", difficulty: "hard", example: "Skończyły się kartki w drukarce i muszę dodać nowe", exampleTranslation: "Se acabaron las hojas en la impresora y tengo que añadir nuevas" }
    ]
  },

  music_sound: {
    name: "Muzyka i dźwięk",
    description: "Świat dźwięków",
    icon: Music,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "mus1", polish: "Muzyka", spanish: "Música", difficulty: "easy", example: "Muzyka klasyczna relaksuje mnie po ciężkim dniu pracy", exampleTranslation: "La música clásica me relaja después de un día duro de trabajo" },
      { id: "mus2", polish: "Piosenka", spanish: "Canción", difficulty: "easy", example: "Piosenka którą słuchamy jest bardzo popularna w radiu", exampleTranslation: "La canción que escuchamos es muy popular en la radio" },
      { id: "mus3", polish: "Gitara", spanish: "Guitarra", difficulty: "easy", example: "Gitara akustyczna ma piękny ciepły dźwięk", exampleTranslation: "La guitarra acústica tiene un sonido hermoso y cálido" },
      { id: "mus4", polish: "Fortepian", spanish: "Piano", difficulty: "easy", example: "Fortepian stoi w salonie i uczę się na nim grać", exampleTranslation: "El piano está en la sala y estoy aprendiendo a tocarlo" },
      { id: "mus5", polish: "Skrzypce", spanish: "Violín", difficulty: "easy", example: "Skrzypce mają delikatny i melodyjny brzmienie", exampleTranslation: "El violín tiene un sonido delicado y melodioso" },
      { id: "mus6", polish: "Perkusja", spanish: "Batería", difficulty: "easy", example: "Perkusja nadaje rytm całej muzyce zespołu rockowego", exampleTranslation: "La batería da el ritmo a toda la música del grupo de rock" },
      { id: "mus7", polish: "Śpiewać", spanish: "Cantar", difficulty: "medium", example: "Uwielbiam śpiewać pod prysznicem rano przed pracą", exampleTranslation: "Me encanta cantar en la ducha por la mañana antes del trabajo" },
      { id: "mus8", polish: "Koncert", spanish: "Concierto", difficulty: "medium", example: "Koncert muzyki klasycznej odbywa się w filharmonii jutro", exampleTranslation: "El concierto de música clásica se celebra en la filarmónica mañana" },
      { id: "mus9", polish: "Melodia", spanish: "Melodía", difficulty: "medium", example: "Melodia tej piosenki jest bardzo chwytliwa i przyjemna", exampleTranslation: "La melodía de esta canción es muy pegadiza y agradable" },
      { id: "mus10", polish: "Rytm", spanish: "Ritmo", difficulty: "medium", example: "Rytm tej muzyki sprawia że chce mi się tańczyć", exampleTranslation: "El ritmo de esta música me hace querer bailar" },
      { id: "mus11", polish: "Orkiestra", spanish: "Orquesta", difficulty: "medium", example: "Orkiestra symfoniczna składa się z ponad stu muzyków", exampleTranslation: "La orquesta sinfónica consiste de más de cien músicos" },
      { id: "mus12", polish: "Nuty", spanish: "Partituras", difficulty: "medium", example: "Nuty muzyczne są zapisane na pięciolinii w zeszycie", exampleTranslation: "Las partituras musicales están escritas en el pentagrama en el cuaderno" },
      { id: "mus13", polish: "Grasz na instrumencie?", spanish: "¿Tocas algún instrumento?", difficulty: "hard", example: "Grasz na jakimś instrumencie muzycznym czy tylko słuchasz?", exampleTranslation: "¿Tocas algún instrumento musical o solo escuchas?" },
      { id: "mus14", polish: "Ta muzyka jest piękna", spanish: "Esta música es hermosa", difficulty: "hard", example: "Ta muzyka jest absolutnie piękna i poruszająca do głębi", exampleTranslation: "Esta música es absolutamente hermosa y conmovedora hasta lo profundo" },
      { id: "mus15", polish: "Uczę się grać", spanish: "Estoy aprendiendo a tocar", difficulty: "hard", example: "Uczę się grać na gitarze od sześciu miesięcy regularnie", exampleTranslation: "Estoy aprendiendo a tocar la guitarra desde hace seis meses regularmente" }
    ]
  },

  phone_calls: {
    name: "Rozmowy telefoniczne",
    description: "Telefon i kontakt",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "phone1", polish: "Telefon", spanish: "Teléfono", difficulty: "easy", example: "Telefon dzwoni ale nie mogę teraz odebrać", exampleTranslation: "El teléfono suena pero no puedo contestar ahora" },
      { id: "phone2", polish: "Dzwonić", spanish: "Llamar", difficulty: "easy", example: "Muszę zadzwonić do lekarza umówić się na wizytę", exampleTranslation: "Tengo que llamar al médico para hacer una cita" },
      { id: "phone3", polish: "Odbierać", spanish: "Contestar", difficulty: "easy", example: "Nie mogę teraz odebrać telefonu bo jestem zajęty", exampleTranslation: "No puedo contestar el teléfono ahora porque estoy ocupado" },
      { id: "phone4", polish: "Wiadomość", spanish: "Mensaje", difficulty: "easy", example: "Wysłałem wiadomość tekstową z prośbą o telefon zwrotny", exampleTranslation: "Envié un mensaje de texto pidiendo que me devuelvan la llamada" },
      { id: "phone5", polish: "Połączenie", spanish: "Llamada", difficulty: "easy", example: "Połączenie telefoniczne zostało przerwane nagle", exampleTranslation: "La llamada telefónica se cortó de repente" },
      { id: "phone6", polish: "Numer", spanish: "Número", difficulty: "easy", example: "Podaj mi swój numer telefonu żebym mógł zadzwonić", exampleTranslation: "Dame tu número de teléfono para que pueda llamarte" },
      { id: "phone7", polish: "Rozmawiać", spanish: "Hablar", difficulty: "medium", example: "Rozmawiałem z nim przez telefon przez godzinę", exampleTranslation: "Hablé con él por teléfono durante una hora" },
      { id: "phone8", polish: "Zostawić wiadomość", spanish: "Dejar mensaje", difficulty: "medium", example: "Zostaw wiadomość na sekretarce a oddzwonię później", exampleTranslation: "Deja un mensaje en el contestador y te llamaré después" },
      { id: "phone9", polish: "Przekazać", spanish: "Transmitir", difficulty: "medium", example: "Możesz przekazać mu że dzwoniłem w sprawie spotkania?", exampleTranslation: "¿Puedes transmitirle que llamé sobre la reunión?" },
      { id: "phone10", polish: "Nie ma zasięgu", spanish: "No hay señal", difficulty: "medium", example: "Nie ma zasięgu w tym budynku i telefon nie działa", exampleTranslation: "No hay señal en este edificio y el teléfono no funciona" },
      { id: "phone11", polish: "Bateria się kończy", spanish: "La batería se está acabando", difficulty: "medium", example: "Bateria w telefonie się kończy muszę szybko naładować", exampleTranslation: "La batería del teléfono se está acabando tengo que cargarlo rápido" },
      { id: "phone12", polish: "Głośnomówiący", spanish: "Altavoz", difficulty: "medium", example: "Włączam głośnomówiący żeby mieć wolne ręce podczas rozmowy", exampleTranslation: "Activo el altavoz para tener las manos libres durante la llamada" },
      { id: "phone13", polish: "Czy mogę zostawić wiadomość?", spanish: "¿Puedo dejar un mensaje?", difficulty: "hard", example: "Czy mogę zostawić wiadomość skoro nie ma go teraz?", exampleTranslation: "¿Puedo dejar un mensaje ya que no está ahora?" },
      { id: "phone14", polish: "Oddzwonię później", spanish: "Llamaré más tarde", difficulty: "hard", example: "Teraz jestem zajęty ale oddzwonię później wieczorem", exampleTranslation: "Ahora estoy ocupado pero llamaré más tarde por la noche" },
      { id: "phone15", polish: "Nie słyszę cię dobrze", spanish: "No te escucho bien", difficulty: "hard", example: "Nie słyszę cię dobrze przez szumy na linii", exampleTranslation: "No te escucho bien por los ruidos en la línea" }
    ]
  },

  social_online: {
    name: "Media społecznościowe",
    description: "Internet i komunikacja",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "soc1", polish: "Post", spanish: "Publicación", difficulty: "easy", example: "Opublikowałem nowy post ze zdjęciami z wakacji", exampleTranslation: "Publiqué una publicación nueva con fotos de las vacaciones" },
      { id: "soc2", polish: "Komentarz", spanish: "Comentario", difficulty: "easy", example: "Komentarz pod zdjęciem był bardzo miły i pozytywny", exampleTranslation: "El comentario bajo la foto fue muy amable y positivo" },
      { id: "soc3", polish: "Polubienie", spanish: "Me gusta", difficulty: "easy", example: "To zdjęcie dostało ponad tysiąc polubień w godzinę", exampleTranslation: "Esta foto recibió más de mil me gusta en una hora" },
      { id: "soc4", polish: "Udostępnić", spanish: "Compartir", difficulty: "easy", example: "Udostępniłem ciekawy artykuł na moim profilu", exampleTranslation: "Compartí un artículo interesante en mi perfil" },
      { id: "soc5", polish: "Obserwować", spanish: "Seguir", difficulty: "easy", example: "Obserwuję tę stronę od roku i zawsze czytam posty", exampleTranslation: "Sigo esta página desde hace un año y siempre leo las publicaciones" },
      { id: "soc6", polish: "Profil", spanish: "Perfil", difficulty: "easy", example: "Mój profil ma zdjęcie profilowe i informacje o mnie", exampleTranslation: "Mi perfil tiene foto de perfil e información sobre mí" },
      { id: "soc7", polish: "Hashtag", spanish: "Etiqueta", difficulty: "medium", example: "Dodałem popularny hashtag żeby więcej osób zobaczyło post", exampleTranslation: "Añadí una etiqueta popular para que más personas vean la publicación" },
      { id: "soc8", polish: "Wiadomość prywatna", spanish: "Mensaje privado", difficulty: "medium", example: "Wysłałem mu wiadomość prywatną z pytaniem o spotkanie", exampleTranslation: "Le envié un mensaje privado preguntando sobre la reunión" },
      { id: "soc9", polish: "Relacja", spanish: "Historia", difficulty: "medium", example: "Opublikowałem relację z wyjścia na koncert wczoraj", exampleTranslation: "Publiqué una historia de la salida al concierto ayer" },
      { id: "soc10", polish: "Powiadomienie", spanish: "Notificación", difficulty: "medium", example: "Powiadomienie o nowym komentarzu pojawiło się na ekranie", exampleTranslation: "La notificación de un comentario nuevo apareció en la pantalla" },
      { id: "soc11", polish: "Zablokować", spanish: "Bloquear", difficulty: "medium", example: "Musiałem zablokować tę osobę bo była nachalna", exampleTranslation: "Tuve que bloquear a esta persona porque era insistente" },
      { id: "soc12", polish: "Oznaczenie", spanish: "Etiqueta", difficulty: "medium", example: "Oznaczyłem przyjaciół na zdjęciu grupowym z imprezy", exampleTranslation: "Etiqueté a los amigos en la foto grupal de la fiesta" },
      { id: "soc13", polish: "Jesteś na Facebooku?", spanish: "¿Estás en Facebook?", difficulty: "hard", example: "Jesteś na Facebooku żebym mógł cię dodać do znajomych?", exampleTranslation: "¿Estás en Facebook para que pueda agregarte a amigos?" },
      { id: "soc14", polish: "Obserwuję cię", spanish: "Te sigo", difficulty: "hard", example: "Obserwuję cię na Instagramie i lubię twoje zdjęcia", exampleTranslation: "Te sigo en Instagram y me gustan tus fotos" },
      { id: "soc15", polish: "Polub mój post", spanish: "Dale me gusta a mi publicación", difficulty: "hard", example: "Możesz polubić mój nowy post jeśli ci się podoba?", exampleTranslation: "¿Puedes darle me gusta a mi publicación nueva si te gusta?" }
    ]
  },

  beauty_care: {
    name: "Uroda i pielęgnacja",
    description: "Kosmetyki i higiena",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "beau1", polish: "Makijaż", spanish: "Maquillaje", difficulty: "easy", example: "Makijaż codzienny nakładam w piętnaście minut rano", exampleTranslation: "Me aplico el maquillaje diario en quince minutos por la mañana" },
      { id: "beau2", polish: "Perfumy", spanish: "Perfume", difficulty: "easy", example: "Perfumy francuskie mają intensywny i trwały zapach", exampleTranslation: "El perfume francés tiene un aroma intenso y duradero" },
      { id: "beau3", polish: "Szampon", spanish: "Champú", difficulty: "easy", example: "Szampon do włosów suchych nawilża i odżywia", exampleTranslation: "El champú para cabello seco hidrata y nutre" },
      { id: "beau4", polish: "Krem", spanish: "Crema", difficulty: "easy", example: "Krem do twarzy nakładam codziennie przed snem", exampleTranslation: "Aplico la crema facial cada noche antes de dormir" },
      { id: "beau5", polish: "Szminka", spanish: "Lápiz labial", difficulty: "easy", example: "Szminka w kolorze czerwonym pasuje do wieczorowej sukienki", exampleTranslation: "El lápiz labial rojo combina con el vestido de noche" },
      { id: "beau6", polish: "Lakier do paznokci", spanish: "Esmalte de uñas", difficulty: "easy", example: "Lakier do paznokci szybko schnie i ma piękny połysk", exampleTranslation: "El esmalte de uñas se seca rápido y tiene un brillo hermoso" },
      { id: "beau7", polish: "Tusz do rzęs", spanish: "Rímel", difficulty: "medium", example: "Tusz do rzęs wydłuża i pogrubia rzęsy naturalnie", exampleTranslation: "El rímel alarga y engrosa las pestañas naturalmente" },
      { id: "beau8", polish: "Podkład", spanish: "Base de maquillaje", difficulty: "medium", example: "Podkład wyrównuje koloryt skóry i ukrywa niedoskonałości", exampleTranslation: "La base de maquillaje uniforma el tono de piel y oculta imperfecciones" },
      { id: "beau9", polish: "Puder", spanish: "Polvo", difficulty: "medium", example: "Puder matujący usuwa niepotrzebny połysk z twarzy", exampleTranslation: "El polvo matificante elimina el brillo innecesario de la cara" },
      { id: "beau10", polish: "Pędzel", spanish: "Brocha", difficulty: "medium", example: "Pędzel do makijażu musi być miękki i dobrej jakości", exampleTranslation: "La brocha de maquillaje debe ser suave y de buena calidad" },
      { id: "beau11", polish: "Demakijaż", spanish: "Desmaquillante", difficulty: "medium", example: "Demakijaż wieczorny jest bardzo ważny dla skóry", exampleTranslation: "El desmaquillante nocturno es muy importante para la piel" },
      { id: "beau12", polish: "Fryzjer", spanish: "Peluquero", difficulty: "medium", example: "Fryzjer ścina mi włosy raz na dwa miesiące", exampleTranslation: "El peluquero me corta el cabello una vez cada dos meses" },
      { id: "beau13", polish: "Wyglądasz pięknie", spanish: "Te ves hermosa", difficulty: "hard", example: "Wyglądasz dzisiaj absolutnie pięknie w tym makijażu", exampleTranslation: "Te ves absolutamente hermosa hoy con este maquillaje" },
      { id: "beau14", polish: "Gdzie kupiłaś to?", spanish: "¿Dónde compraste esto?", difficulty: "hard", example: "Gdzie kupiłaś te perfumy? Pięknie pachną", exampleTranslation: "¿Dónde compraste este perfume? Huele hermoso" },
      { id: "beau15", polish: "Muszę iść do fryzjera", spanish: "Tengo que ir al peluquero", difficulty: "hard", example: "Muszę pilnie iść do fryzjera bo włosy są za długie", exampleTranslation: "Tengo que ir urgentemente al peluquero porque el cabello está demasiado largo" }
    ]
  },

  school_education: {
    name: "Szkoła i edukacja",
    description: "Nauka i studia",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "edu1", polish: "Szkoła", spanish: "Escuela", difficulty: "easy", example: "Szkoła podstawowa znajduje się blisko mojego domu", exampleTranslation: "La escuela primaria está cerca de mi casa" },
      { id: "edu2", polish: "Nauczyciel", spanish: "Maestro", difficulty: "easy", example: "Nauczyciel matematyki tłumaczy zagadnienia bardzo jasno", exampleTranslation: "El maestro de matemáticas explica los temas muy claramente" },
      { id: "edu3", polish: "Uczeń", spanish: "Estudiante", difficulty: "easy", example: "Uczeń pilny zawsze odrabia zadania domowe starannie", exampleTranslation: "El estudiante diligente siempre hace la tarea cuidadosamente" },
      { id: "edu4", polish: "Lekcja", spanish: "Lección", difficulty: "easy", example: "Lekcja języka hiszpańskiego trwa czterdzieści pięć minut", exampleTranslation: "La lección de español dura cuarenta y cinco minutos" },
      { id: "edu5", polish: "Egzamin", spanish: "Examen", difficulty: "easy", example: "Egzamin końcowy odbędzie się za dwa tygodnie", exampleTranslation: "El examen final se realizará en dos semanas" },
      { id: "edu6", polish: "Praca domowa", spanish: "Tarea", difficulty: "easy", example: "Praca domowa z matematyki jest trudna i czasochłonna", exampleTranslation: "La tarea de matemáticas es difícil y consume mucho tiempo" },
      { id: "edu7", polish: "Uniwersytet", spanish: "Universidad", difficulty: "medium", example: "Uniwersytet ma wspaniały kampus z nowoczesnymi budynkami", exampleTranslation: "La universidad tiene un campus maravilloso con edificios modernos" },
      { id: "edu8", polish: "Dyplom", spanish: "Diploma", difficulty: "medium", example: "Dyplom ukończenia studiów otrzymałem w uroczystej ceremonii", exampleTranslation: "Recibí el diploma de graduación en una ceremonia solemne" },
      { id: "edu9", polish: "Stypendium", spanish: "Beca", difficulty: "medium", example: "Stypendium naukowe pokrywa wszystkie koszty studiów", exampleTranslation: "La beca académica cubre todos los costos de estudios" },
      { id: "edu10", polish: "Biblioteka", spanish: "Biblioteca", difficulty: "medium", example: "Biblioteka uniwersytecka jest otwarta do dwudziestej drugiej", exampleTranslation: "La biblioteca universitaria está abierta hasta las veintidós" },
      { id: "edu11", polish: "Wykład", spanish: "Conferencia", difficulty: "medium", example: "Wykład profesora trwa dwie godziny z przerwą", exampleTranslation: "La conferencia del profesor dura dos horas con descanso" },
      { id: "edu12", polish: "Semestr", spanish: "Semestre", difficulty: "medium", example: "Semestr zimowy zaczyna się w październiku każdego roku", exampleTranslation: "El semestre de invierno comienza en octubre cada año" },
      { id: "edu13", polish: "Co studiujesz?", spanish: "¿Qué estudias?", difficulty: "hard", example: "Co dokładnie studiujesz na uniwersytecie i w którym roku?", exampleTranslation: "¿Qué estudias exactamente en la universidad y en qué año?" },
      { id: "edu14", polish: "Mam egzamin jutro", spanish: "Tengo examen mañana", difficulty: "hard", example: "Mam bardzo ważny egzamin jutro i muszę się uczyć", exampleTranslation: "Tengo un examen muy importante mañana y tengo que estudiar" },
      { id: "edu15", polish: "Zdałem wszystkie egzaminy", spanish: "Aprobé todos los exámenes", difficulty: "hard", example: "Zdałem wszystkie egzaminy na wysokie oceny w tym semestrze", exampleTranslation: "Aprobé todos los exámenes con buenas notas este semestre" }
    ]
  },

  special_occasions: {
    name: "Specjalne okazje",
    description: "Święta i wydarzenia",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cel1", polish: "Urodziny", spanish: "Cumpleaños", difficulty: "easy", example: "Urodziny mojej siostry świętujemy w wielkim gronie rodzinnym", exampleTranslation: "Celebramos el cumpleaños de mi hermana en un gran grupo familiar" },
      { id: "cel2", polish: "Wesele", spanish: "Boda", difficulty: "easy", example: "Wesele odbywa się w pięknym pałacu za miastem", exampleTranslation: "La boda se celebra en un palacio hermoso fuera de la ciudad" },
      { id: "cel3", polish: "Rocznica", spanish: "Aniversario", difficulty: "easy", example: "Rocznica ślubu to ważny dzień dla każdej pary", exampleTranslation: "El aniversario de boda es un día importante para cada pareja" },
      { id: "cel4", polish: "Prezent", spanish: "Regalo", difficulty: "easy", example: "Prezent urodzinowy jest pięknie zapakowany w kolorowy papier", exampleTranslation: "El regalo de cumpleaños está bellamente envuelto en papel colorido" },
      { id: "cel5", polish: "Tort", spanish: "Pastel", difficulty: "easy", example: "Tort urodzinowy ma trzy piętra i czekoladową polewę", exampleTranslation: "El pastel de cumpleaños tiene tres pisos y cobertura de chocolate" },
      { id: "cel6", polish: "Świeczki", spanish: "Velas", difficulty: "easy", example: "Świeczki na torcie urodzinowym zdmuchnęliśmy razem", exampleTranslation: "Soplamos las velas del pastel de cumpleaños juntos" },
      { id: "cel7", polish: "Dekoracje", spanish: "Decoraciones", difficulty: "medium", example: "Dekoracje świąteczne wiszą w całym domu i ogrodzie", exampleTranslation: "Las decoraciones navideñas cuelgan en toda la casa y el jardín" },
      { id: "cel8", polish: "Zaproszenie", spanish: "Invitación", difficulty: "medium", example: "Zaproszenie na wesele wysłaliśmy miesiąc przed uroczystością", exampleTranslation: "Enviamos la invitación a la boda un mes antes de la ceremonia" },
      { id: "cel9", polish: "Towarzystwo", spanish: "Compañía", difficulty: "medium", example: "Towarzystwo rodzinne jest najlepsze podczas świąt", exampleTranslation: "La compañía familiar es la mejor durante las fiestas" },
      { id: "cel10", polish: "Tradycja", spanish: "Tradición", difficulty: "medium", example: "Tradycja wigilijna jest święta w każdej polskiej rodzinie", exampleTranslation: "La tradición de Nochebuena es sagrada en cada familia polaca" },
      { id: "cel11", polish: "Uroczystość", spanish: "Ceremonia", difficulty: "medium", example: "Uroczystość ślubna była wzruszająca i piękna", exampleTranslation: "La ceremonia de boda fue emotiva y hermosa" },
      { id: "cel12", polish: "Gratulacje", spanish: "Felicitaciones", difficulty: "medium", example: "Gratulacje dla młodej pary z okazji ślubu", exampleTranslation: "Felicitaciones para la pareja joven con motivo de la boda" },
      { id: "cel13", polish: "Wszystkiego najlepszego!", spanish: "¡Feliz cumpleaños!", difficulty: "hard", example: "Wszystkiego najlepszego z okazji urodzin! Sto lat!", exampleTranslation: "¡Feliz cumpleaños con motivo de tu día! ¡Que cumplas muchos más!" },
      { id: "cel14", polish: "Wesołych Świąt", spanish: "Felices fiestas", difficulty: "hard", example: "Wesołych Świąt Bożego Narodzenia i szczęśliwego Nowego Roku", exampleTranslation: "Felices fiestas de Navidad y próspero Año Nuevo" },
      { id: "cel15", polish: "Dziękuję za zaproszenie", spanish: "Gracias por la invitación", difficulty: "hard", example: "Dziękuję bardzo za zaproszenie na tę wspaniałą uroczystość", exampleTranslation: "Muchas gracias por la invitación a esta ceremonia maravillosa" }
    ]
  },

  personality_character: {
    name: "Cechy osobowości",
    description: "Charakter i zachowanie",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "pers1", polish: "Miły", spanish: "Amable", difficulty: "easy", example: "On jest bardzo miły i zawsze uśmiechnięty do ludzi", exampleTranslation: "Él es muy amable y siempre sonriente con la gente" },
      { id: "pers2", polish: "Inteligentny", spanish: "Inteligente", difficulty: "easy", example: "Inteligentny student szybko rozwiązuje trudne problemy matematyczne", exampleTranslation: "El estudiante inteligente resuelve problemas matemáticos difíciles rápidamente" },
      { id: "pers3", polish: "Pracowity", spanish: "Trabajador", difficulty: "easy", example: "Pracowity człowiek zawsze osiąga swoje cele życiowe", exampleTranslation: "La persona trabajadora siempre alcanza sus metas en la vida" },
      { id: "pers4", polish: "Cierpliwy", spanish: "Paciente", difficulty: "easy", example: "Cierpliwy nauczyciel wielokrotnie tłumaczy trudne zagadnienia", exampleTranslation: "El maestro paciente explica temas difíciles muchas veces" },
      { id: "pers5", polish: "Uczciwy", spanish: "Honesto", difficulty: "easy", example: "Uczciwy człowiek zawsze mówi prawdę nawet gdy jest trudna", exampleTranslation: "La persona honesta siempre dice la verdad aunque sea difícil" },
      { id: "pers6", polish: "Wesoły", spanish: "Alegre", difficulty: "easy", example: "Wesoły charakter pomaga w trudnych sytuacjach życiowych", exampleTranslation: "El carácter alegre ayuda en situaciones difíciles de la vida" },
      { id: "pers7", polish: "Nieśmiały", spanish: "Tímido", difficulty: "medium", example: "Nieśmiały chłopiec boi się rozmawiać z obcymi ludźmi", exampleTranslation: "El chico tímido tiene miedo de hablar con personas desconocidas" },
      { id: "pers8", polish: "Pewny siebie", spanish: "Seguro de sí mismo", difficulty: "medium", example: "Pewny siebie lider zespołu podejmuje decyzje bez wahania", exampleTranslation: "El líder seguro de sí mismo toma decisiones sin vacilación" },
      { id: "pers9", polish: "Hojny", spanish: "Generoso", difficulty: "medium", example: "Hojny gospodarz zawsze dzieli się jedzeniem z gośćmi", exampleTranslation: "El anfitrión generoso siempre comparte comida con los invitados" },
      { id: "pers10", polish: "Ambitny", spanish: "Ambicioso", difficulty: "medium", example: "Ambitny młody człowiek dąży do osiągnięcia wielkich celów", exampleTranslation: "El joven ambicioso aspira a lograr grandes objetivos" },
      { id: "pers11", polish: "Towarzyski", spanish: "Sociable", difficulty: "medium", example: "Towarzyska osoba lubi przebywać w dużym gronie znajomych", exampleTranslation: "La persona sociable le gusta estar en un grupo grande de conocidos" },
      { id: "pers12", polish: "Odpowiedzialny", spanish: "Responsable", difficulty: "medium", example: "Odpowiedzialny pracownik zawsze wywiązuje się z obowiązków", exampleTranslation: "El empleado responsable siempre cumple con sus obligaciones" },
      { id: "pers13", polish: "Jaki on jest?", spanish: "¿Cómo es él?", difficulty: "hard", example: "Jaki jest jego charakter i osobowość według ciebie?", exampleTranslation: "¿Cómo es su carácter y personalidad según tú?" },
      { id: "pers14", polish: "On ma dobre serce", spanish: "Tiene buen corazón", difficulty: "hard", example: "On ma naprawdę dobre serce i zawsze pomaga innym", exampleTranslation: "Tiene realmente buen corazón y siempre ayuda a los demás" },
      { id: "pers15", polish: "Jestem dumny z siebie", spanish: "Estoy orgulloso de mí mismo", difficulty: "hard", example: "Jestem bardzo dumny z siebie za te osiągnięcia", exampleTranslation: "Estoy muy orgulloso de mí mismo por estos logros" }
    ]
  },

  opinions_thoughts: {
    name: "Opinie i myśli",
    description: "Co myślisz i uważasz",
    icon: MessageCircle,
    color: "from-indigo-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "opin1", polish: "Lubię", spanish: "Me gusta", difficulty: "easy", example: "Lubię czytać książki i oglądać filmy wieczorami", exampleTranslation: "Me gusta leer libros y ver películas por las noches" },
      { id: "opin2", polish: "Nie lubię", spanish: "No me gusta", difficulty: "easy", example: "Nie lubię wczesnego wstawania w zimowe poranki", exampleTranslation: "No me gusta levantarme temprano en las mañanas de invierno" },
      { id: "opin3", polish: "Wolę", spanish: "Prefiero", difficulty: "easy", example: "Wolę kawę niż herbatę do śniadania każdego dnia", exampleTranslation: "Prefiero café que té para el desayuno cada día" },
      { id: "opin5", polish: "Moim zdaniem", spanish: "En mi opinión", difficulty: "easy", example: "Moim zdaniem ten film jest najlepszy w tym roku", exampleTranslation: "En mi opinión esta película es la mejor de este año" },
      { id: "opin6", polish: "Wydaje mi się", spanish: "Me parece", difficulty: "easy", example: "Wydaje mi się że masz rację w tej dyskusji", exampleTranslation: "Me parece que tienes razón en esta discusión" },
      { id: "opin7", polish: "Zgadzam się", spanish: "Estoy de acuerdo", difficulty: "medium", example: "Zgadzam się całkowicie z twoim punktem widzenia", exampleTranslation: "Estoy completamente de acuerdo con tu punto de vista" },
      { id: "opin8", polish: "Nie zgadzam się", spanish: "No estoy de acuerdo", difficulty: "medium", example: "Nie zgadzam się z tą decyzją i chciałbym to omówić", exampleTranslation: "No estoy de acuerdo con esta decisión y me gustaría discutirlo" },
      { id: "opin9", polish: "Ulubiony", spanish: "Favorito", difficulty: "medium", example: "Mój ulubiony kolor to niebieski jak niebo latem", exampleTranslation: "Mi color favorito es el azul como el cielo en verano" },
      { id: "opin10", polish: "Nienawidzę", spanish: "Odio", difficulty: "medium", example: "Nienawidzę czekać w długich kolejkach w urzędach", exampleTranslation: "Odio esperar en filas largas en las oficinas" },
      { id: "opin11", polish: "Interesuje mnie", spanish: "Me interesa", difficulty: "medium", example: "Interesuje mnie historia i kultura starożytnego Rzymu", exampleTranslation: "Me interesa la historia y cultura de la Roma antigua" },
      { id: "opin12", polish: "Podoba mi się", spanish: "Me agrada", difficulty: "medium", example: "Podoba mi się ten nowy projekt architektoniczny w mieście", exampleTranslation: "Me agrada este proyecto arquitectónico nuevo en la ciudad" },
      { id: "opin13", polish: "Co o tym myślisz?", spanish: "¿Qué piensas de esto?", difficulty: "hard", example: "Co dokładnie myślisz o tym nowym pomyśle?", exampleTranslation: "¿Qué piensas exactamente de esta idea nueva?" },
      { id: "opin14", polish: "Masz inne zdanie?", spanish: "¿Tienes otra opinión?", difficulty: "hard", example: "Masz inne zdanie na ten temat czy się zgadzasz?", exampleTranslation: "¿Tienes otra opinión sobre este tema o estás de acuerdo?" },
      { id: "opin15", polish: "Według mnie to świetny pomysł", spanish: "Según yo es una idea genial", difficulty: "hard", example: "Według mnie to naprawdę świetny pomysł wart realizacji", exampleTranslation: "Según yo es realmente una idea genial que vale la pena realizar" },
      // Added a missing item for consistency, based on the provided outline which seems to be identical to the original content
      { id: "opin4", polish: "Uważam że", spanish: "Creo que", difficulty: "easy", example: "Uważam że edukacja jest najważniejsza w życiu młodego człowieka", exampleTranslation: "Creo que la educación es lo más importante en la vida de una persona joven" }
    ]
  }
};

/**
 * POLISH → SPANISH FLASHCARDS - PART 3
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (47-56).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Glasses,
  Wallet,
  Dog,
  BadgeCheck,
  Flower2,
  Waves,
  Mountain,
  Package,
  Clock3,
  Lightbulb,
  Bed,
  Gauge,
  Smile,
  Users2,
  Coffee
} from "lucide-react";

export const flashcardsCategories_part3 = {
  accessories: {
    name: "Akcesoria",
    description: "Dodatki i akcesoria osobiste",
    icon: Glasses,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "acc1", polish: "Okulary", spanish: "Gafas", difficulty: "easy", example: "Noszę okulary przeciwsłoneczne w jasne letnie dni", exampleTranslation: "Llevo gafas de sol en los días soleados de verano" },
      { id: "acc2", polish: "Torebka", spanish: "Bolso", difficulty: "easy", example: "Moja torebka jest duża i zmieści się w niej wszystko", exampleTranslation: "Mi bolso es grande y cabe todo dentro" },
      { id: "acc3", polish: "Zegarek", spanish: "Reloj", difficulty: "easy", example: "Dostałem piękny zegarek na urodziny od rodziny", exampleTranslation: "Recibí un hermoso reloj para mi cumpleaños de la familia" },
      { id: "acc4", polish: "Bransoletka", spanish: "Pulsera", difficulty: "easy", example: "Noszę srebrną bransoletkę na prawej ręce", exampleTranslation: "Llevo una pulsera de plata en la mano derecha" },
      { id: "acc5", polish: "Naszyjnik", spanish: "Collar", difficulty: "easy", example: "Ten złoty naszyjnik był prezentem od babci", exampleTranslation: "Este collar de oro fue un regalo de mi abuela" },
      { id: "acc6", polish: "Kolczyki", spanish: "Pendientes", difficulty: "easy", example: "Kupiłam sobie nowe kolczyki w lokalnej jubilerni", exampleTranslation: "Me compré pendientes nuevos en la joyería local" },
      { id: "acc7", polish: "Pierścionek", spanish: "Anillo", difficulty: "medium", example: "Pierścionek zaręczynowy ma piękny diament w centrum", exampleTranslation: "El anillo de compromiso tiene un hermoso diamante en el centro" },
      { id: "acc8", polish: "Plecak", spanish: "Mochila", difficulty: "medium", example: "W moim plecaku mam laptopa i wszystkie podręczniki", exampleTranslation: "En mi mochila tengo la laptop y todos los libros de texto" },
      { id: "acc9", polish: "Portfel", spanish: "Cartera", difficulty: "medium", example: "Trzymam dokumenty i pieniądze w skórzanym portfelu", exampleTranslation: "Guardo los documentos y el dinero en la cartera de cuero" },
      { id: "acc10", polish: "Parasol", spanish: "Paraguas", difficulty: "medium", example: "Zawsze noszę parasol w torbie gdy zapowiadają deszcz", exampleTranslation: "Siempre llevo paraguas en el bolso cuando anuncian lluvia" },
      { id: "acc11", polish: "Chusteczka", spanish: "Pañuelo", difficulty: "medium", example: "Mam kolorową chusteczkę jedwabną do włosów", exampleTranslation: "Tengo un pañuelo de seda colorido para el pelo" },
      { id: "acc12", polish: "Kapelusz", spanish: "Sombrero", difficulty: "medium", example: "Letni słomkowy kapelusz chroni przed słońcem", exampleTranslation: "El sombrero de paja de verano protege del sol" },
      { id: "acc13", polish: "To pasuje do mojej sukienki", spanish: "Esto combina con mi vestido", difficulty: "hard", example: "Ten naszyjnik idealnie pasuje do mojej niebieskiej sukienki wieczorowej", exampleTranslation: "Este collar combina perfectamente con mi vestido de noche azul" },
      { id: "acc14", polish: "Zgubiłem portfel", spanish: "Perdí mi cartera", difficulty: "hard", example: "Zgubiłem portfel gdzieś w centrum handlowym wczoraj", exampleTranslation: "Perdí mi cartera en algún lugar del centro comercial ayer" },
      { id: "acc15", polish: "Czy masz coś mniejszego?", spanish: "¿Tienes algo más pequeño?", difficulty: "hard", example: "Ta torebka jest za duża, czy masz coś mniejszego w tym samym stylu?", exampleTranslation: "Este bolso es demasiado grande, ¿tienes algo más pequeño en el mismo estilo?" }
    ]
  },

  money_shopping: {
    name: "Pieniądze i zakupy",
    description: "Finanse i transakcje",
    icon: Wallet,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    words: [
      { id: "money1", polish: "Pieniądze", spanish: "Dinero", difficulty: "easy", example: "Oszczędzam pieniądze na wakacje w przyszłym roku", exampleTranslation: "Ahorro dinero para las vacaciones del próximo año" },
      { id: "money2", polish: "Moneta", spanish: "Moneda", difficulty: "easy", example: "Mam kolekcję starych monet z różnych krajów", exampleTranslation: "Tengo una colección de monedas antiguas de diferentes países" },
      { id: "money3", polish: "Banknot", spanish: "Billete", difficulty: "easy", example: "Rozmieniłem banknot studolarowy na mniejsze nominały", exampleTranslation: "Cambié el billete de cien dólares por denominaciones más pequeñas" },
      { id: "money4", polish: "Wyprzedaż", spanish: "Rebaja", difficulty: "easy", example: "W tym sklepie są świetne wyprzedaże po sezonie", exampleTranslation: "En esta tienda hay rebajas excelentes después de temporada" },
      { id: "money5", polish: "Zniżka", spanish: "Descuento", difficulty: "easy", example: "Dostałem dwadzieścia procent zniżki na wszystkie produkty", exampleTranslation: "Obtuve un veinte por ciento de descuento en todos los productos" },
      { id: "money6", polish: "Drogi", spanish: "Caro", difficulty: "easy", example: "Ten samochód jest za drogi jak na mój budżet", exampleTranslation: "Este coche es demasiado caro para mi presupuesto" },
      { id: "money7", polish: "Tani", spanish: "Barato", difficulty: "medium", example: "Te warzywa są tanie i świeże na lokalnym targu", exampleTranslation: "Estas verduras son baratas y frescas en el mercado local" },
      { id: "money8", polish: "Oszczędzać", spanish: "Ahorrar", difficulty: "medium", example: "Staram się oszczędzać przynajmniej dziesięć procent mojej pensji", exampleTranslation: "Intento ahorrar al menos el diez por ciento de mi salario" },
      { id: "money9", polish: "Wydawać", spanish: "Gastar", difficulty: "medium", example: "Nie powinienem wydawać tak dużo na niepotrzebne rzeczy", exampleTranslation: "No debería gastar tanto en cosas innecesarias" },
      { id: "money10", polish: "Pożyczyć", spanish: "Prestar", difficulty: "medium", example: "Czy możesz mi pożyczyć trochę pieniędzy do końca miesiąca?", exampleTranslation: "¿Puedes prestarme algo de dinero hasta fin de mes?" },
      { id: "money11", polish: "Dług", spanish: "Deuda", difficulty: "medium", example: "Spłacam dług kredytu studenckiego od pięciu lat", exampleTranslation: "Estoy pagando la deuda del préstamo estudiantil desde hace cinco años" },
      { id: "money12", polish: "Reszta", spanish: "Cambio", difficulty: "medium", example: "Proszę zachować resztę jako napiwek dla kelnerki", exampleTranslation: "Por favor quédese con el cambio como propina para la camarera" },
      { id: "money13", polish: "Ile płacę?", spanish: "¿Cuánto pago?", difficulty: "hard", example: "Ile płacę za te wszystkie produkty razem?", exampleTranslation: "¿Cuánto pago por todos estos productos juntos?" },
      { id: "money14", polish: "Przyjmujesz karty?", spanish: "¿Aceptas tarjetas?", difficulty: "hard", example: "Przyjmujesz karty kredytowe czy tylko gotówkę?", exampleTranslation: "¿Aceptas tarjetas de crédito o solo efectivo?" },
      { id: "money15", polish: "To jest okazja", spanish: "Es una ganga", difficulty: "hard", example: "Ta cena to prawdziwa okazja, normalnie kosztuje dwa razy więcej", exampleTranslation: "Este precio es una verdadera ganga, normalmente cuesta el doble" }
    ]
  },

  pets_animals: {
    name: "Zwierzęta domowe",
    description: "Pupile i ich opieka",
    icon: Dog,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pet1", polish: "Pupil", spanish: "Mascota", difficulty: "easy", example: "Moja maskota jest członkiem rodziny od dziesięciu lat", exampleTranslation: "Mi mascota es parte de la familia desde hace diez años" },
      { id: "pet2", polish: "Karma", spanish: "Comida", difficulty: "easy", example: "Kupuję najlepszą karmę dla mojego psa w sklepie zoologicznym", exampleTranslation: "Compro la mejor comida para mi perro en la tienda de mascotas" },
      { id: "pet3", polish: "Miska", spanish: "Cuenco", difficulty: "easy", example: "Mój kot ma dwie miski - jedną na wodę i drugą na jedzenie", exampleTranslation: "Mi gato tiene dos cuencos - uno para agua y otro para comida" },
      { id: "pet4", polish: "Smycz", spanish: "Correa", difficulty: "easy", example: "Zawsze wyprowadzam psa na smyczy dla bezpieczeństwa", exampleTranslation: "Siempre saco al perro con correa por seguridad" },
      { id: "pet5", polish: "Obroża", spanish: "Collar", difficulty: "easy", example: "Na obroży mojego psa jest identyfikator z numerem telefonu", exampleTranslation: "En el collar de mi perro hay una identificación con número de teléfono" },
      { id: "pet6", polish: "Klatka", spanish: "Jaula", difficulty: "easy", example: "Mój papużka mieszka w dużej przestronnej klatce", exampleTranslation: "Mi loro vive en una jaula grande y espaciosa" },
      { id: "pet7", polish: "Weterynarz", spanish: "Veterinario", difficulty: "medium", example: "Regularnie odwiedzam weterynarza na kontrolne badania pupila", exampleTranslation: "Visito regularmente al veterinario para chequeos de control de mi mascota" },
      { id: "pet8", polish: "Szczepienie", spanish: "Vacuna", difficulty: "medium", example: "Mój pies dostał wszystkie wymagane szczepienia w tym roku", exampleTranslation: "Mi perro recibió todas las vacunas requeridas este año" },
      { id: "pet9", polish: "Adopcja", spanish: "Adopción", difficulty: "medium", example: "Zdecydowałem się na adopcję kota ze schroniska dla zwierząt", exampleTranslation: "Decidí hacer la adopción de un gato del refugio de animales" },
      { id: "pet10", polish: "Szczotkowanie", spanish: "Cepillado", difficulty: "medium", example: "Szczotkowanie sierści mojego kota jest codziennym rytuałem", exampleTranslation: "El cepillado del pelaje de mi gato es un ritual diario" },
      { id: "pet11", polish: "Zabawka", spanish: "Juguete", difficulty: "medium", example: "Kupiłem nową zabawkę dla mojego szczeniaka który kocha się bawić", exampleTranslation: "Compré un juguete nuevo para mi cachorro que adora jugar" },
      { id: "pet12", polish: "Budka", spanish: "Caseta", difficulty: "medium", example: "Mój pies ma ciepłą budkę w ogrodzie na zimę", exampleTranslation: "Mi perro tiene una caseta cálida en el jardín para el invierno" },
      { id: "pet13", polish: "Mój pies jest chory", spanish: "Mi perro está enfermo", difficulty: "hard", example: "Mój pies jest chory i muszę zabrać go do weterynarza dzisiaj", exampleTranslation: "Mi perro está enfermo y tengo que llevarlo al veterinario hoy" },
      { id: "pet14", polish: "Jest bardzo posłuszny", spanish: "Es muy obediente", difficulty: "hard", example: "Mój pies jest bardzo posłuszny i zawsze słucha poleceń", exampleTranslation: "Mi perro es muy obediente y siempre escucha las órdenes" },
      { id: "pet15", polish: "Potrzebuje spaceru", spanish: "Necesita un paseo", difficulty: "hard", example: "Mój pies potrzebuje długiego spaceru przynajmniej dwa razy dziennie", exampleTranslation: "Mi perro necesita un paseo largo al menos dos veces al día" }
    ]
  },

  celebrations: {
    name: "Celebracje",
    description: "Imprezy i wydarzenia",
    icon: BadgeCheck,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "celeb1", polish: "Przyjęcie", spanish: "Fiesta", difficulty: "easy", example: "Organizuję przyjęcie urodzinowe w przyszłą sobotę", exampleTranslation: "Organizo una fiesta de cumpleaños el próximo sábado" },
      { id: "celeb2", polish: "Tort", spanish: "Tarta", difficulty: "easy", example: "Zamówiłem czekoladowy tort z kremem na imprezę", exampleTranslation: "Pedí una tarta de chocolate con crema para la fiesta" },
      { id: "celeb3", polish: "Świeczki", spanish: "Velas", difficulty: "easy", example: "Na torcie jest trzydzieści świeczek do zdmuchnięcia", exampleTranslation: "En la tarta hay treinta velas para soplar" },
      { id: "celeb4", polish: "Prezent", spanish: "Regalo", difficulty: "easy", example: "Kupiłem wspaniały prezent dla mojego najlepszego przyjaciela", exampleTranslation: "Compré un regalo maravilloso para mi mejor amigo" },
      { id: "celeb5", polish: "Gość", spanish: "Invitado", difficulty: "easy", example: "Na weselu będzie ponad stu gości z całego świata", exampleTranslation: "En la boda habrá más de cien invitados de todo el mundo" },
      { id: "celeb6", polish: "Zaproszenie", spanish: "Invitación", difficulty: "easy", example: "Wysłałem zaproszenia na przyjęcie wszystkim znajomym", exampleTranslation: "Envié invitaciones a la fiesta a todos los conocidos" },
      { id: "celeb7", polish: "Dekoracje", spanish: "Decoraciones", difficulty: "medium", example: "Kupiłem piękne dekoracje w kolorach złota i srebra", exampleTranslation: "Compré decoraciones hermosas en colores dorado y plateado" },
      { id: "celeb8", polish: "Balony", spanish: "Globos", difficulty: "medium", example: "Napełniłem setki kolorowych balonów helem na imprezę", exampleTranslation: "Llené cientos de globos coloridos con helio para la fiesta" },
      { id: "celeb9", polish: "Toast", spanish: "Brindis", difficulty: "medium", example: "Wygłosiłem wzruszający toast na cześć pary młodej", exampleTranslation: "Di un brindis emotivo en honor de los recién casados" },
      { id: "celeb10", polish: "Muzyka", spanish: "Música", difficulty: "medium", example: "Wynająłem DJ-a który zagra świetną muzykę na weselu", exampleTranslation: "Contraté un DJ que tocará música excelente en la boda" },
      { id: "celeb11", polish: "Taniec", spanish: "Baile", difficulty: "medium", example: "Pierwszy taniec pary młodej był przepiękny i romantyczny", exampleTranslation: "El primer baile de los recién casados fue hermoso y romántico" },
      { id: "celeb12", polish: "Rocznica", spanish: "Aniversario", difficulty: "medium", example: "Świętujemy dwudziestą piątą rocznicę ślubu moich rodziców", exampleTranslation: "Celebramos el vigésimo quinto aniversario de bodas de mis padres" },
      { id: "celeb13", polish: "Wszystkiego najlepszego!", spanish: "¡Feliz cumpleaños!", difficulty: "hard", example: "Wszystkiego najlepszego z okazji urodzin! Życzę zdrowia i szczęścia", exampleTranslation: "¡Feliz cumpleaños! Te deseo salud y felicidad" },
      { id: "celeb14", polish: "Gratulacje!", spanish: "¡Felicitaciones!", difficulty: "hard", example: "Gratulacje z okazji nowej pracy! Bardzo się cieszę", exampleTranslation: "¡Felicitaciones por el nuevo trabajo! Me alegro mucho" },
      { id: "celeb15", polish: "Zróbmy zdjęcie", spanish: "Hagamos una foto", difficulty: "hard", example: "Zróbmy wspólne zdjęcie żeby zapamiętać ten wyjątkowy moment", exampleTranslation: "Hagamos una foto juntos para recordar este momento especial" }
    ]
  },

  garden_plants: {
    name: "Ogród i rośliny",
    description: "Ogrodnictwo i rośliny",
    icon: Flower2,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "gard1", polish: "Ogród", spanish: "Jardín", difficulty: "easy", example: "Mój ogród jest pełen kolorowych kwiatów wiosną", exampleTranslation: "Mi jardín está lleno de flores coloridas en primavera" },
      { id: "gard2", polish: "Kwiat", spanish: "Flor", difficulty: "easy", example: "Róże to moje ulubione kwiaty ze względu na piękny zapach", exampleTranslation: "Las rosas son mis flores favoritas por su hermoso aroma" },
      { id: "gard3", polish: "Drzewo", spanish: "Árbol", difficulty: "easy", example: "Posadziłem młode drzewo owocowe w moim ogrodzie", exampleTranslation: "Planté un árbol frutal joven en mi jardín" },
      { id: "gard4", polish: "Trawa", spanish: "Césped", difficulty: "easy", example: "Koszę trawę w ogrodzie każdą sobotę rano", exampleTranslation: "Corto el césped del jardín cada sábado por la mañana" },
      { id: "gard5", polish: "Nasiona", spanish: "Semillas", difficulty: "easy", example: "Kupiłem nasiona pomidorów do zasadzenia wiosną", exampleTranslation: "Compré semillas de tomates para plantar en primavera" },
      { id: "gard6", polish: "Doniczka", spanish: "Maceta", difficulty: "easy", example: "Mam kolekcję roślin w kolorowych doniczkach ceramicznych", exampleTranslation: "Tengo una colección de plantas en macetas de cerámica coloridas" },
      { id: "gard7", polish: "Podlewać", spanish: "Regar", difficulty: "medium", example: "Muszę podlewać rośliny codziennie w gorące letnie dni", exampleTranslation: "Tengo que regar las plantas todos los días en los días calurosos de verano" },
      { id: "gard8", polish: "Nawóz", spanish: "Abono", difficulty: "medium", example: "Używam naturalnego nawozu organicznego dla moich warzyw", exampleTranslation: "Uso abono orgánico natural para mis verduras" },
      { id: "gard9", polish: "Liście", spanish: "Hojas", difficulty: "medium", example: "Jesienią zgrabuję kolorowe liście z trawnika", exampleTranslation: "En otoño rastrillo las hojas coloridas del césped" },
      { id: "gard10", polish: "Korzeń", spanish: "Raíz", difficulty: "medium", example: "Korzenie drzewa są głęboko w ziemi i bardzo silne", exampleTranslation: "Las raíces del árbol están profundas en la tierra y muy fuertes" },
      { id: "gard11", polish: "Przycinać", spanish: "Podar", difficulty: "medium", example: "Muszę przyciąć krzaki róż przed początkiem zimy", exampleTranslation: "Tengo que podar los arbustos de rosas antes del comienzo del invierno" },
      { id: "gard12", polish: "Uprawa", spanish: "Cultivo", difficulty: "medium", example: "Uprawa warzyw organicznych jest moim ulubionym hobby", exampleTranslation: "El cultivo de verduras orgánicas es mi hobby favorito" },
      { id: "gard13", polish: "Rośliny rosną", spanish: "Las plantas crecen", difficulty: "hard", example: "Moje rośliny rosną bardzo szybko dzięki dobremu nawozowi", exampleTranslation: "Mis plantas crecen muy rápido gracias al buen abono" },
      { id: "gard14", polish: "Potrzebuję więcej światła", spanish: "Necesita más luz", difficulty: "hard", example: "Ta roślina potrzebuje więcej światła słonecznego żeby rosnąć zdrowo", exampleTranslation: "Esta planta necesita más luz solar para crecer saludable" },
      { id: "gard15", polish: "Mam zielone palce", spanish: "Tengo buena mano con las plantas", difficulty: "hard", example: "Mówią że mam zielone palce bo wszystkie moje rośliny świetnie rosną", exampleTranslation: "Dicen que tengo buena mano con las plantas porque todas mis plantas crecen muy bien" }
    ]
  },

  beach_sea: {
    name: "Plaża i morze",
    description: "Morze i plaża",
    icon: Waves,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "beach1", polish: "Plaża", spanish: "Playa", difficulty: "easy", example: "Spędzamy każde lato na pięknej plaży nad Bałtykiem", exampleTranslation: "Pasamos cada verano en una hermosa playa del Báltico" },
      { id: "beach2", polish: "Morze", spanish: "Mar", difficulty: "easy", example: "Morze jest dzisiaj spokojne i ciepłe do pływania", exampleTranslation: "El mar está tranquilo y cálido para nadar hoy" },
      { id: "beach3", polish: "Piasek", spanish: "Arena", difficulty: "easy", example: "Dzieci budują zamki z piasku na plaży", exampleTranslation: "Los niños construyen castillos de arena en la playa" },
      { id: "beach4", polish: "Fala", spanish: "Ola", difficulty: "easy", example: "Surferzy czekają na idealną falę do surfowania", exampleTranslation: "Los surfistas esperan la ola perfecta para surfear" },
      { id: "beach5", polish: "Kostium kąpielowy", spanish: "Traje de baño", difficulty: "easy", example: "Kupiłam nowy kolorowy kostium kąpielowy na wakacje", exampleTranslation: "Compré un traje de baño nuevo y colorido para las vacaciones" },
      { id: "beach6", polish: "Ręcznik", spanish: "Toalla", difficulty: "easy", example: "Rozłożyłem duży ręcznik na piasku żeby się opalać", exampleTranslation: "Extendí una toalla grande en la arena para tomar el sol" },
      { id: "beach7", polish: "Parasol plażowy", spanish: "Sombrilla", difficulty: "medium", example: "Ustawiłem parasol plażowy żeby chronić się przed słońcem", exampleTranslation: "Coloqué la sombrilla de playa para protegerme del sol" },
      { id: "beach8", polish: "Krem przeciwsłoneczny", spanish: "Protector solar", difficulty: "medium", example: "Nakładam krem przeciwsłoneczny co dwie godziny na plaży", exampleTranslation: "Me aplico protector solar cada dos horas en la playa" },
      { id: "beach9", polish: "Ratownik", spanish: "Socorrista", difficulty: "medium", example: "Ratownik pilnuje bezpieczeństwa wszystkich pływających ludzi", exampleTranslation: "El socorrista vigila la seguridad de todas las personas que nadan" },
      { id: "beach10", polish: "Muszla", spanish: "Concha", difficulty: "medium", example: "Zbieramy kolorowe muszle jako pamiątki z plaży", exampleTranslation: "Recogemos conchas coloridas como recuerdos de la playa" },
      { id: "beach11", polish: "Łódź", spanish: "Barca", difficulty: "medium", example: "Wynajęliśmy małą łódź żeby popływać po morzu", exampleTranslation: "Alquilamos una barca pequeña para navegar por el mar" },
      { id: "beach12", polish: "Nurkowanie", spanish: "Buceo", difficulty: "medium", example: "Nurkowanie z rurką pozwala zobaczyć piękne ryby", exampleTranslation: "El buceo con esnórquel permite ver peces hermosos" },
      { id: "beach13", polish: "Idźmy popływać", spanish: "Vamos a nadar", difficulty: "hard", example: "Idźmy popływać w morzu bo woda jest dzisiaj naprawdę ciepła", exampleTranslation: "Vamos a nadar en el mar porque el agua está realmente cálida hoy" },
      { id: "beach14", polish: "Woda jest zimna", spanish: "El agua está fría", difficulty: "hard", example: "Woda w morzu jest jeszcze bardzo zimna wczesną wiosną", exampleTranslation: "El agua del mar está todavía muy fría a principios de primavera" },
      { id: "beach15", polish: "Jaki piękny zachód słońca", spanish: "Qué puesta de sol tan hermosa", difficulty: "hard", example: "Jaki piękny zachód słońca nad morzem widzimy dzisiaj wieczorem", exampleTranslation: "Qué puesta de sol tan hermosa sobre el mar vemos esta noche" }
    ]
  },

  mountains_hiking: {
    name: "Góry i wędrówki",
    description: "Turystyka górska",
    icon: Mountain,
    color: "from-slate-400 to-gray-600",
    level: "intermediate",
    words: [
      { id: "mount1", polish: "Góra", spanish: "Montaña", difficulty: "easy", example: "Góry Tatry są najwyższe w Polsce i bardzo piękne", exampleTranslation: "Las montañas Tatra son las más altas de Polonia y muy hermosas" },
      { id: "mount2", polish: "Szczyt", spanish: "Cumbre", difficulty: "easy", example: "Dotarliśmy na szczyt góry po pięciu godzinach wspinaczki", exampleTranslation: "Llegamos a la cumbre de la montaña después de cinco horas de escalada" },
      { id: "mount3", polish: "Szlak", spanish: "Sendero", difficulty: "easy", example: "Ten szlak turystyczny prowadzi przez piękny las", exampleTranslation: "Este sendero turístico pasa por un bosque hermoso" },
      { id: "mount4", polish: "Wędrówka", spanish: "Excursión", difficulty: "easy", example: "Planujemy trzydniową wędrówkę po górskich szlakach", exampleTranslation: "Planeamos una excursión de tres días por senderos de montaña" },
      { id: "mount5", polish: "Namiot", spanish: "Tienda de campaña", difficulty: "easy", example: "Rozbiliśmy namiot na polanie górskiej na noc", exampleTranslation: "Montamos la tienda de campaña en un claro de montaña para la noche" },
      { id: "mount6", polish: "Plecak turystyczny", spanish: "Mochila de senderismo", difficulty: "easy", example: "W moim plecaku turystycznym mam wodę i prowiant", exampleTranslation: "En mi mochila de senderismo tengo agua y provisiones" },
      { id: "mount7", polish: "Buty trekkingowe", spanish: "Botas de montaña", difficulty: "medium", example: "Dobre buty trekkingowe są niezbędne do górskich wędrówek", exampleTranslation: "Las botas de montaña buenas son indispensables para excursiones de montaña" },
      { id: "mount8", polish: "Mapa", spanish: "Mapa", difficulty: "medium", example: "Zawsze mam mapę i kompas podczas górskich wypraw", exampleTranslation: "Siempre tengo mapa y brújula durante las expediciones de montaña" },
      { id: "mount9", polish: "Schronisko", spanish: "Refugio", difficulty: "medium", example: "Spędziliśmy noc w górskim schronisku po długiej wędrówce", exampleTranslation: "Pasamos la noche en un refugio de montaña después de una larga excursión" },
      { id: "mount10", polish: "Dolina", spanish: "Valle", difficulty: "medium", example: "Z góry widać przepiękną dolinę z zieloną łąką", exampleTranslation: "Desde la montaña se ve un valle hermoso con pradera verde" },
      { id: "mount11", polish: "Wspinaczka", spanish: "Escalada", difficulty: "medium", example: "Wspinaczka skałkowa wymaga siły i dobrej techniki", exampleTranslation: "La escalada en roca requiere fuerza y buena técnica" },
      { id: "mount12", polish: "Widok", spanish: "Vista", difficulty: "medium", example: "Ze szczytu roztacza się zapierający dech widok na okolicę", exampleTranslation: "Desde la cumbre hay una vista impresionante de los alrededores" },
      { id: "mount13", polish: "Jak daleko do szczytu?", spanish: "¿Cuánto falta para la cumbre?", difficulty: "hard", example: "Jak daleko jeszcze mamy do szczytu? Jestem trochę zmęczony", exampleTranslation: "¿Cuánto falta todavía para la cumbre? Estoy un poco cansado" },
      { id: "mount14", polish: "Potrzebuję odpocząć", spanish: "Necesito descansar", difficulty: "hard", example: "Potrzebuję chwili odpoczynku zanim będziemy dalej wspinać", exampleTranslation: "Necesito un momento para descansar antes de seguir escalando" },
      { id: "mount15", polish: "Jaki przepiękny krajobraz", spanish: "Qué paisaje tan hermoso", difficulty: "hard", example: "Jaki przepiękny górski krajobraz widać stąd z tej wysokości", exampleTranslation: "Qué paisaje de montaña tan hermoso se ve desde aquí desde esta altura" }
    ]
  },

  mail_post: {
    name: "Poczta i przesyłki",
    description: "Usługi pocztowe",
    icon: Package,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "mail1", polish: "Poczta", spanish: "Correo", difficulty: "easy", example: "Idę na pocztę żeby wysłać ważny list", exampleTranslation: "Voy al correo para enviar una carta importante" },
      { id: "mail2", polish: "List", spanish: "Carta", difficulty: "easy", example: "Napisałem długi list do mojej babci mieszkającej za granicą", exampleTranslation: "Escribí una carta larga a mi abuela que vive en el extranjero" },
      { id: "mail3", polish: "Paczka", spanish: "Paquete", difficulty: "easy", example: "Otrzymałem paczkę z prezentami urodzinowymi od rodziny", exampleTranslation: "Recibí un paquete con regalos de cumpleaños de la familia" },
      { id: "mail4", polish: "Znaczek", spanish: "Sello", difficulty: "easy", example: "Muszę nakleić znaczek na kopertę przed wysłaniem", exampleTranslation: "Tengo que pegar un sello en el sobre antes de enviarlo" },
      { id: "mail5", polish: "Koperta", spanish: "Sobre", difficulty: "easy", example: "Kupiłem eleganckie koperty na zaproszenia ślubne", exampleTranslation: "Compré sobres elegantes para las invitaciones de boda" },
      { id: "mail6", polish: "Adres", spanish: "Dirección", difficulty: "easy", example: "Napisz dokładny adres odbiorcy na kopercie", exampleTranslation: "Escribe la dirección exacta del destinatario en el sobre" },
      { id: "mail7", polish: "Nadawca", spanish: "Remitente", difficulty: "medium", example: "Dane nadawcy powinny być w lewym górnym rogu", exampleTranslation: "Los datos del remitente deben estar en la esquina superior izquierda" },
      { id: "mail8", polish: "Odbiorca", spanish: "Destinatario", difficulty: "medium", example: "Adres odbiorcy musi być czytelny i kompletny", exampleTranslation: "La dirección del destinatario debe ser legible y completa" },
      { id: "mail9", polish: "Przesyłka", spanish: "Envío", difficulty: "medium", example: "Śledzę moją przesyłkę przez internet z numerem trackingowym", exampleTranslation: "Sigo mi envío por internet con el número de seguimiento" },
      { id: "mail10", polish: "Polecony", spanish: "Certificado", difficulty: "medium", example: "Wysłałem list polecony żeby mieć potwierdzenie odbioru", exampleTranslation: "Envié una carta certificada para tener confirmación de recepción" },
      { id: "mail11", polish: "Kurier", spanish: "Mensajero", difficulty: "medium", example: "Kurier dostarczy paczkę do domu jeszcze dzisiaj", exampleTranslation: "El mensajero entregará el paquete a casa todavía hoy" },
      { id: "mail12", polish: "Skrzynka pocztowa", spanish: "Buzón", difficulty: "medium", example: "Sprawdzam skrzynkę pocztową codziennie po południu", exampleTranslation: "Reviso el buzón todos los días por la tarde" },
      { id: "mail13", polish: "Ile kosztuje wysyłka?", spanish: "¿Cuánto cuesta el envío?", difficulty: "hard", example: "Ile kosztuje wysyłka tej paczki do Hiszpanii?", exampleTranslation: "¿Cuánto cuesta el envío de este paquete a España?" },
      { id: "mail14", polish: "Jak długo to zajmie?", spanish: "¿Cuánto tiempo tardará?", difficulty: "hard", example: "Jak długo zajmie dostawa tej przesyłki zagranicznej?", exampleTranslation: "¿Cuánto tiempo tardará la entrega de este envío internacional?" },
      { id: "mail15", polish: "Nie otrzymałem paczki", spanish: "No recibí el paquete", difficulty: "hard", example: "Nie otrzymałem paczki która powinna przyjść tydzień temu", exampleTranslation: "No recibí el paquete que debería haber llegado hace una semana" }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Zwroty związane z czasem",
    icon: Clock3,
    color: "from-purple-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "time1", polish: "Teraz", spanish: "Ahora", difficulty: "easy", example: "Muszę iść teraz bo się spóźnię na spotkanie", exampleTranslation: "Tengo que irme ahora porque llegaré tarde a la reunión" },
      { id: "time2", polish: "Wcześniej", spanish: "Antes", difficulty: "easy", example: "Wcześniej chodziłem do szkoły pieszo codziennie", exampleTranslation: "Antes iba a la escuela a pie todos los días" },
      { id: "time3", polish: "Później", spanish: "Después", difficulty: "easy", example: "Zadzwonię do ciebie później wieczorem po pracy", exampleTranslation: "Te llamaré después por la noche después del trabajo" },
      { id: "time4", polish: "Zawsze", spanish: "Siempre", difficulty: "easy", example: "Zawsze piję kawę rano przed wyjściem z domu", exampleTranslation: "Siempre bebo café por la mañana antes de salir de casa" },
      { id: "time5", polish: "Nigdy", spanish: "Nunca", difficulty: "easy", example: "Nigdy nie byłem w Hiszpanii ale bardzo chcę pojechać", exampleTranslation: "Nunca he estado en España pero quiero ir mucho" },
      { id: "time6", polish: "Czasami", spanish: "A veces", difficulty: "easy", example: "Czasami chodzę do kina w weekendy z przyjaciółmi", exampleTranslation: "A veces voy al cine los fines de semana con amigos" },
      { id: "time7", polish: "Często", spanish: "A menudo", difficulty: "medium", example: "Często spotykam się z rodziną na niedzielnym obiedzie", exampleTranslation: "A menudo me reúno con la familia en la comida del domingo" },
      { id: "time8", polish: "Rzadko", spanish: "Rara vez", difficulty: "medium", example: "Rzadko jem fast food bo wolę domowe jedzenie", exampleTranslation: "Rara vez como comida rápida porque prefiero comida casera" },
      { id: "time9", polish: "Natychmiast", spanish: "Inmediatamente", difficulty: "medium", example: "Musisz natychmiast zadzwonić do lekarza w tej sprawie", exampleTranslation: "Tienes que llamar al médico inmediatamente sobre este asunto" },
      { id: "time10", polish: "Wkrótce", spanish: "Pronto", difficulty: "medium", example: "Wkrótce zacznie padać według prognozy pogody", exampleTranslation: "Pronto va a llover según el pronóstico del tiempo" },
      { id: "time11", polish: "Ostatnio", spanish: "Últimamente", difficulty: "medium", example: "Ostatnio dużo pracuję nad ważnym projektem firmowym", exampleTranslation: "Últimamente trabajo mucho en un proyecto importante de la empresa" },
      { id: "time12", polish: "W przyszłości", spanish: "En el futuro", difficulty: "medium", example: "W przyszłości chcę mieszkać w dużym mieście", exampleTranslation: "En el futuro quiero vivir en una ciudad grande" },
      { id: "time13", polish: "Od dawna", spanish: "Desde hace mucho tiempo", difficulty: "hard", example: "Znam go od dawna, jesteśmy przyjaciółmi od dzieciństwa", exampleTranslation: "Lo conozco desde hace mucho tiempo, somos amigos desde la infancia" },
      { id: "time14", polish: "Nie mam czasu", spanish: "No tengo tiempo", difficulty: "hard", example: "Przepraszam ale teraz nie mam czasu żeby o tym rozmawiać", exampleTranslation: "Lo siento pero ahora no tengo tiempo para hablar de esto" },
      { id: "time15", polish: "Ile czasu to zajmie?", spanish: "¿Cuánto tiempo llevará?", difficulty: "hard", example: "Ile czasu zajmie naprawa mojego samochodu w warsztacie?", exampleTranslation: "¿Cuánto tiempo llevará la reparación de mi coche en el taller?" }
    ]
  },

  ideas_creativity: {
    name: "Pomysły i kreatywność",
    description: "Wyrażanie pomysłów",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-500",
    level: "advanced",
    words: [
      { id: "idea1", polish: "Pomysł", spanish: "Idea", difficulty: "easy", example: "Mam świetny pomysł na nowy projekt biznesowy", exampleTranslation: "Tengo una idea excelente para un nuevo proyecto de negocios" },
      { id: "idea2", polish: "Myśleć", spanish: "Pensar", difficulty: "easy", example: "Muszę dobrze przemyśleć tę ważną decyzję", exampleTranslation: "Tengo que pensar bien esta decisión importante" },
      { id: "idea3", polish: "Wyobrażać sobie", spanish: "Imaginar", difficulty: "easy", example: "Wyobrażam sobie jak będzie wyglądało moje życie za dziesięć lat", exampleTranslation: "Me imagino cómo será mi vida dentro de diez años" },
      { id: "idea4", polish: "Planować", spanish: "Planear", difficulty: "easy", example: "Planujemy rodzinne wakacje w górach na przyszłe lato", exampleTranslation: "Planeamos unas vacaciones familiares en las montañas para el próximo verano" },
      { id: "idea5", polish: "Tworzyć", spanish: "Crear", difficulty: "easy", example: "Lubię tworzyć nowe rzeczy własnymi rękami", exampleTranslation: "Me gusta crear cosas nuevas con mis propias manos" },
      { id: "idea6", polish: "Inspiracja", spanish: "Inspiración", difficulty: "easy", example: "Podróże są dla mnie wielką inspiracją do tworzenia", exampleTranslation: "Los viajes son una gran inspiración para crear para mí" },
      { id: "idea7", polish: "Innowacja", spanish: "Innovación", difficulty: "medium", example: "Ta firma słynie z innowacyjnych rozwiązań technologicznych", exampleTranslation: "Esta empresa es famosa por soluciones tecnológicas innovadoras" },
      { id: "idea8", polish: "Rozwiązanie", spanish: "Solución", difficulty: "medium", example: "Znalazłem idealne rozwiązanie tego skomplikowanego problemu", exampleTranslation: "Encontré la solución perfecta a este problema complicado" },
      { id: "idea9", polish: "Projekt", spanish: "Proyecto", difficulty: "medium", example: "Pracuję nad ciekawym projektem artystycznym od miesiąca", exampleTranslation: "Trabajo en un proyecto artístico interesante desde hace un mes" },
      { id: "idea10", polish: "Eksperyment", spanish: "Experimento", difficulty: "medium", example: "Ten eksperyment naukowy może zmienić wiele w medycynie", exampleTranslation: "Este experimento científico puede cambiar mucho en la medicina" },
      { id: "idea11", polish: "Wizja", spanish: "Visión", difficulty: "medium", example: "Ma jasną wizję przyszłości swojej firmy", exampleTranslation: "Tiene una visión clara del futuro de su empresa" },
      { id: "idea12", polish: "Odkrycie", spanish: "Descubrimiento", difficulty: "medium", example: "To odkrycie naukowe jest przełomowe dla nauki", exampleTranslation: "Este descubrimiento científico es revolucionario para la ciencia" },
      { id: "idea13", polish: "Co o tym myślisz?", spanish: "¿Qué piensas de esto?", difficulty: "hard", example: "Co myślisz o tym moim nowym pomyśle na biznes?", exampleTranslation: "¿Qué piensas de esta mi nueva idea de negocio?" },
      { id: "idea14", polish: "To świetny pomysł", spanish: "Es una idea genial", difficulty: "hard", example: "To naprawdę świetny pomysł, powinniśmy go wdrożyć", exampleTranslation: "Es realmente una idea genial, deberíamos implementarla" },
      { id: "idea15", polish: "Mam plan", spanish: "Tengo un plan", difficulty: "hard", example: "Mam dokładny plan jak rozwiązać ten problem skutecznie", exampleTranslation: "Tengo un plan exacto de cómo resolver este problema eficazmente" }
    ]
  },

  bedroom_sleep: {
    name: "Sypialnia i sen",
    description: "Sypialnia i odpoczynek",
    icon: Bed,
    color: "from-indigo-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "bed1", polish: "Łóżko", spanish: "Cama", difficulty: "easy", example: "Moje łóżko jest bardzo wygodne i miękkie", exampleTranslation: "Mi cama es muy cómoda y suave" },
      { id: "bed2", polish: "Poduszka", spanish: "Almohada", difficulty: "easy", example: "Mam dwie duże poduszki ortopedyczne do spania", exampleTranslation: "Tengo dos almohadas ortopédicas grandes para dormir" },
      { id: "bed3", polish: "Kołdra", spanish: "Edredón", difficulty: "easy", example: "Zimowa kołdra puchowa trzyma mnie w cieple", exampleTranslation: "El edredón de plumas de invierno me mantiene cálido" },
      { id: "bed4", polish: "Prześcieradło", spanish: "Sábana", difficulty: "easy", example: "Zmieniam prześcieradła na łóżku co tydzień", exampleTranslation: "Cambio las sábanas de la cama cada semana" },
      { id: "bed5", polish: "Koc", spanish: "Manta", difficulty: "easy", example: "Przykrywam się ciepłym kocem oglądając telewizję", exampleTranslation: "Me cubro con una manta cálida viendo televisión" },
      { id: "bed6", polish: "Budzik", spanish: "Despertador", difficulty: "easy", example: "Ustawiam budzik na szóstą rano każdego dnia", exampleTranslation: "Pongo el despertador a las seis de la mañana cada día" },
      { id: "bed7", polish: "Spać", spanish: "Dormir", difficulty: "medium", example: "Staram się spać przynajmniej osiem godzin każdej nocy", exampleTranslation: "Intento dormir al menos ocho horas cada noche" },
      { id: "bed8", polish: "Drzemka", spanish: "Siesta", difficulty: "medium", example: "Lubię zrobić krótką drzemkę po obiedzie w weekendy", exampleTranslation: "Me gusta tomar una siesta corta después de comer los fines de semana" },
      { id: "bed9", polish: "Sen", spanish: "Sueño", difficulty: "medium", example: "Miałem dziwny sen o lataniu nad miastem", exampleTranslation: "Tuve un sueño extraño sobre volar sobre la ciudad" },
      { id: "bed10", polish: "Bezsenność", spanish: "Insomnio", difficulty: "medium", example: "Cierpię na bezsenność gdy jestem zestresowany", exampleTranslation: "Sufro de insomnio cuando estoy estresado" },
      { id: "bed11", polish: "Zmęczony", spanish: "Cansado", difficulty: "medium", example: "Jestem bardzo zmęczony po długim dniu w pracy", exampleTranslation: "Estoy muy cansado después de un largo día de trabajo" },
      { id: "bed12", polish: "Relaks", spanish: "Relajación", difficulty: "medium", example: "Czytanie przed snem pomaga mi w relaksie", exampleTranslation: "Leer antes de dormir me ayuda en la relajación" },
      { id: "bed13", polish: "Nie mogę spać", spanish: "No puedo dormir", difficulty: "hard", example: "Nie mogę spać od dwóch godzin bo myślę o jutrzejszym egzaminie", exampleTranslation: "No puedo dormir desde hace dos horas porque pienso en el examen de mañana" },
      { id: "bed14", polish: "Śpij dobrze", spanish: "Duerme bien", difficulty: "hard", example: "Dobranoc, śpij dobrze i odpocznij porządnie", exampleTranslation: "Buenas noches, duerme bien y descansa bien" },
      { id: "bed15", polish: "Jestem śpiący", spanish: "Tengo sueño", difficulty: "hard", example: "Jestem bardzo śpiący i muszę iść już do łóżka", exampleTranslation: "Tengo mucho sueño y tengo que irme ya a la cama" }
    ]
  },

  feelings_moods: {
    name: "Uczucia i nastroje",
    description: "Różne stany emocjonalne",
    icon: Smile,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "feel1", polish: "Radość", spanish: "Alegría", difficulty: "easy", example: "Czuję wielką radość gdy spędzam czas z rodziną", exampleTranslation: "Siento gran alegría cuando paso tiempo con mi familia" },
      { id: "feel2", polish: "Smutek", spanish: "Tristeza", difficulty: "easy", example: "Odczuwam smutek gdy słyszę złe wiadomości", exampleTranslation: "Siento tristeza cuando escucho malas noticias" },
      { id: "feel3", polish: "Gniew", spanish: "Enojo", difficulty: "easy", example: "Czuję gniew gdy ktoś traktuje mnie niesprawiedliwie", exampleTranslation: "Siento enojo cuando alguien me trata injustamente" },
      { id: "feel4", polish: "Strach", spanish: "Miedo", difficulty: "easy", example: "Mam strach przed lataniem samolotem", exampleTranslation: "Tengo miedo de volar en avión" },
      { id: "feel5", polish: "Miłość", spanish: "Amor", difficulty: "easy", example: "Miłość do rodziny jest najważniejsza w życiu", exampleTranslation: "El amor a la familia es lo más importante en la vida" },
      { id: "feel6", polish: "Nadzieja", spanish: "Esperanza", difficulty: "easy", example: "Mam nadzieję że wszystko będzie dobrze", exampleTranslation: "Tengo esperanza de que todo estará bien" },
      { id: "feel7", polish: "Zaufanie", spanish: "Confianza", difficulty: "medium", example: "Zaufanie jest podstawą każdej dobrej relacji", exampleTranslation: "La confianza es la base de toda buena relación" },
      { id: "feel8", polish: "Niepokój", spanish: "Ansiedad", difficulty: "medium", example: "Czuję niepokój przed ważnym egzaminem jutro", exampleTranslation: "Siento ansiedad antes del examen importante mañana" },
      { id: "feel9", polish: "Ulga", spanish: "Alivio", difficulty: "medium", example: "Poczułem wielką ulgę gdy dowiedziałem się dobrych wiadomości", exampleTranslation: "Sentí un gran alivio cuando supe las buenas noticias" },
      { id: "feel10", polish: "Wdzięczność", spanish: "Gratitud", difficulty: "medium", example: "Czuję głęboką wdzięczność za całą twoją pomoc", exampleTranslation: "Siento profunda gratitud por toda tu ayuda" },
      { id: "feel11", polish: "Pewność siebie", spanish: "Confianza en sí mismo", difficulty: "medium", example: "Pewność siebie pomaga osiągać cele w życiu", exampleTranslation: "La confianza en sí mismo ayuda a lograr objetivos en la vida" },
      { id: "feel12", polish: "Rozczarowanie", spanish: "Decepción", difficulty: "medium", example: "Czuję rozczarowanie że plany nie wyszły", exampleTranslation: "Siento decepción de que los planes no salieron bien" },
      { id: "feel13", polish: "Jak się czujesz?", spanish: "¿Cómo te sientes?", difficulty: "hard", example: "Jak się czujesz po tej trudnej sytuacji? Martwię się o ciebie", exampleTranslation: "¿Cómo te sientes después de esta situación difícil? Me preocupo por ti" },
      { id: "feel14", polish: "Jestem szczęśliwy", spanish: "Soy feliz", difficulty: "hard", example: "Jestem naprawdę szczęśliwy z moim życiem w tej chwili", exampleTranslation: "Soy realmente feliz con mi vida en este momento" },
      { id: "feel15", polish: "Czuję się wspaniale", spanish: "Me siento maravillosamente", difficulty: "hard", example: "Czuję się wspaniale odkąd zacząłem regularnie ćwiczyć", exampleTranslation: "Me siento maravillosamente desde que empecé a hacer ejercicio regularmente" }
    ]
  },

  social_relationships: {
    name: "Relacje społeczne",
    description: "Przyjaźń i relacje",
    icon: Users2,
    color: "from-violet-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "soc1", polish: "Przyjaciel", spanish: "Amigo", difficulty: "easy", example: "Mój najlepszy przyjaciel mieszka w sąsiednim mieście", exampleTranslation: "Mi mejor amigo vive en la ciudad vecina" },
      { id: "soc2", polish: "Znajomy", spanish: "Conocido", difficulty: "easy", example: "Spotkałem starego znajomego ze szkoły na ulicy", exampleTranslation: "Encontré un viejo conocido de la escuela en la calle" },
      { id: "soc3", polish: "Sąsiad", spanish: "Vecino", difficulty: "easy", example: "Mój sąsiad jest bardzo miły i pomocny", exampleTranslation: "Mi vecino es muy amable y servicial" },
      { id: "soc4", polish: "Kolega", spanish: "Compañero", difficulty: "easy", example: "Kolega z pracy zaprosił mnie na kawę po pracy", exampleTranslation: "Un compañero de trabajo me invitó a tomar café después del trabajo" },
      { id: "soc5", polish: "Partner", spanish: "Pareja", difficulty: "easy", example: "Mój partner zawsze mnie wspiera w trudnych chwilach", exampleTranslation: "Mi pareja siempre me apoya en momentos difíciles" },
      { id: "soc6", polish: "Spotkanie", spanish: "Encuentro", difficulty: "easy", example: "Mamy spotkanie ze starymi przyjaciółmi w sobotę", exampleTranslation: "Tenemos un encuentro con viejos amigos el sábado" },
      { id: "soc7", polish: "Towarzystwo", spanish: "Compañía", difficulty: "medium", example: "Lubię twoje towarzystwo i rozmowy które prowadzimy", exampleTranslation: "Me gusta tu compañía y las conversaciones que tenemos" },
      { id: "soc8", polish: "Wspólnota", spanish: "Comunidad", difficulty: "medium", example: "Nasza wspólnota sąsiedzka jest bardzo aktywna", exampleTranslation: "Nuestra comunidad vecinal es muy activa" },
      { id: "soc9", polish: "Zaufany", spanish: "Confiable", difficulty: "medium", example: "On jest bardzo zaufany i zawsze można na nim polegać", exampleTranslation: "Él es muy confiable y siempre se puede contar con él" },
      { id: "soc10", polish: "Lojalny", spanish: "Leal", difficulty: "medium", example: "Prawdziwy przyjaciel jest lojalny w każdej sytuacji", exampleTranslation: "Un amigo verdadero es leal en cualquier situación" },
      { id: "soc11", polish: "Kłótnia", spanish: "Discusión", difficulty: "medium", example: "Mieliśmy małą kłótnię ale szybko się pogodziliśmy", exampleTranslation: "Tuvimos una pequeña discusión pero nos reconciliamos rápido" },
      { id: "soc12", polish: "Pojednanie", spanish: "Reconciliación", difficulty: "medium", example: "Pojednanie po konflikcie wzmacnia naszą przyjaźń", exampleTranslation: "La reconciliación después del conflicto fortalece nuestra amistad" },
      { id: "soc13", polish: "Jesteśmy przyjaciółmi", spanish: "Somos amigos", difficulty: "hard", example: "Jesteśmy najlepszymi przyjaciółmi od dzieciństwa i to się nie zmieni", exampleTranslation: "Somos mejores amigos desde la infancia y eso no cambiará" },
      { id: "soc14", polish: "Możesz na mnie liczyć", spanish: "Puedes contar conmigo", difficulty: "hard", example: "Zawsze możesz na mnie liczyć w każdej trudnej sytuacji", exampleTranslation: "Siempre puedes contar conmigo en cualquier situación difícil" },
      { id: "soc15", polish: "Tęsknię za tobą", spanish: "Te extraño", difficulty: "hard", example: "Bardzo za tobą tęsknię odkąd wyjechałeś za granicę", exampleTranslation: "Te extraño mucho desde que te fuiste al extranjero" }
    ]
  },

  cafe_coffee: {
    name: "Kawiarnia",
    description: "Kawiarnia i napoje",
    icon: Coffee,
    color: "from-amber-400 to-brown-500",
    level: "beginner",
    words: [
      { id: "cafe1", polish: "Kawiarnia", spanish: "Cafetería", difficulty: "easy", example: "Ta kawiarnia ma najlepszą kawę w całym mieście", exampleTranslation: "Esta cafetería tiene el mejor café de toda la ciudad" },
      { id: "cafe2", polish: "Kawa", spanish: "Café", difficulty: "easy", example: "Piję mocną czarną kawę bez cukru każdego ranka", exampleTranslation: "Bebo café negro fuerte sin azúcar cada mañana" },
      { id: "cafe3", polish: "Cappuccino", spanish: "Capuchino", difficulty: "easy", example: "Cappuccino z pianką mleczną to mój ulubiony napój", exampleTranslation: "El capuchino con espuma de leche es mi bebida favorita" },
      { id: "cafe4", polish: "Espresso", spanish: "Espresso", difficulty: "easy", example: "Podwójne espresso daje mi energię na cały dzień", exampleTranslation: "El espresso doble me da energía para todo el día" },
      { id: "cafe5", polish: "Latte", spanish: "Café con leche", difficulty: "easy", example: "Latte z karmelem jest słodkie i pyszne", exampleTranslation: "El café con leche de caramelo es dulce y delicioso" },
      { id: "cafe6", polish: "Herbata", spanish: "Té", difficulty: "easy", example: "Wieczorem wolę herbatę ziołową zamiast kawy", exampleTranslation: "Por la noche prefiero té de hierbas en lugar de café" },
      { id: "cafe7", polish: "Ciasto", spanish: "Pastel", difficulty: "medium", example: "Do kawy zamówiłem kawałek ciasta czekoladowego", exampleTranslation: "Con el café pedí un trozo de pastel de chocolate" },
      { id: "cafe8", polish: "Ciastko", spanish: "Galleta", difficulty: "medium", example: "Te domowe ciastka owsiane są pyszne z kawą", exampleTranslation: "Estas galletas de avena caseras están deliciosas con café" },
      { id: "cafe9", polish: "Śmietanka", spanish: "Nata", difficulty: "medium", example: "Czy możesz dodać trochę śmietanki do mojej kawy?", exampleTranslation: "¿Puedes añadir un poco de nata a mi café?" },
      { id: "cafe10", polish: "Cukier", spanish: "Azúcar", difficulty: "medium", example: "Biorę dwie łyżeczki cukru do herbaty", exampleTranslation: "Tomo dos cucharaditas de azúcar en el té" },
      { id: "cafe11", polish: "Na wynos", spanish: "Para llevar", difficulty: "medium", example: "Poproszę dużą kawę na wynos do pracy", exampleTranslation: "Un café grande para llevar al trabajo por favor" },
      { id: "cafe12", polish: "Tutaj", spanish: "Para tomar aquí", difficulty: "medium", example: "Wolę wypić kawę tutaj w kawiarni niż na wynos", exampleTranslation: "Prefiero tomar el café aquí en la cafetería que para llevar" },
      { id: "cafe13", polish: "Poproszę kawę", spanish: "Un café por favor", difficulty: "hard", example: "Poproszę dużą kawę z mlekiem i bez cukru", exampleTranslation: "Un café grande con leche y sin azúcar por favor" },
      { id: "cafe14", polish: "Masz Wi-Fi?", spanish: "¿Tienes Wi-Fi?", difficulty: "hard", example: "Przepraszam, masz bezpłatne Wi-Fi w tej kawiarni?", exampleTranslation: "Disculpa, ¿tienes Wi-Fi gratuito en esta cafetería?" },
      { id: "cafe15", polish: "Spotkajmy się na kawie", spanish: "Tomemos un café", difficulty: "hard", example: "Spotkajmy się na kawie w przyszłym tygodniu żeby porozmawiać", exampleTranslation: "Tomemos un café la próxima semana para hablar" }
    ]
  },

  speed_pace: {
    name: "Prędkość i tempo",
    description: "Szybkość i rytm",
    icon: Gauge,
    color: "from-red-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "speed1", polish: "Szybki", spanish: "Rápido", difficulty: "easy", example: "Ten samochód sportowy jest bardzo szybki na autostradzie", exampleTranslation: "Este coche deportivo es muy rápido en la autopista" },
      { id: "speed2", polish: "Wolny", spanish: "Lento", difficulty: "easy", example: "Internet jest dzisiaj bardzo wolny i frustrujący", exampleTranslation: "Internet está muy lento hoy y es frustrante" },
      { id: "speed3", polish: "Pospieszyć się", spanish: "Darse prisa", difficulty: "easy", example: "Musisz się pospieszyć bo spóźnimy się na pociąg", exampleTranslation: "Tienes que darte prisa porque llegaremos tarde al tren" },
      { id: "speed4", polish: "Czekać", spanish: "Esperar", difficulty: "easy", example: "Czekam na autobus już piętnaście minut", exampleTranslation: "Espero el autobús desde hace quince minutos" },
      { id: "speed5", polish: "Natychmiast", spanish: "Al instante", difficulty: "easy", example: "Przyszedł natychmiast gdy usłyszał o problemie", exampleTranslation: "Vino al instante cuando escuchó del problema" },
      { id: "speed6", polish: "Powoli", spanish: "Despacio", difficulty: "easy", example: "Jedź powoli bo droga jest śliska od deszczu", exampleTranslation: "Conduce despacio porque la carretera está resbaladiza por la lluvia" },
      { id: "speed7", polish: "Pośpiech", spanish: "Prisa", difficulty: "medium", example: "Nie lubię robić rzeczy w pośpiechu bez zastanowienia", exampleTranslation: "No me gusta hacer cosas con prisa sin pensar" },
      { id: "speed8", polish: "Cierpliwość", spanish: "Paciencia", difficulty: "medium", example: "Cierpliwość jest cnotą którą trzeba ćwiczyć", exampleTranslation: "La paciencia es una virtud que hay que practicar" },
      { id: "speed9", polish: "Opóźnienie", spanish: "Retraso", difficulty: "medium", example: "Pociąg ma godzinne opóźnienie z powodu awarii", exampleTranslation: "El tren tiene un retraso de una hora por una avería" },
      { id: "speed10", polish: "Tempo", spanish: "Ritmo", difficulty: "medium", example: "Tempo życia w dużym mieście jest bardzo szybkie", exampleTranslation: "El ritmo de vida en la ciudad grande es muy rápido" },
      { id: "speed11", polish: "Przyspieszyć", spanish: "Acelerar", difficulty: "medium", example: "Musimy przyspieszyć pracę żeby zdążyć na czas", exampleTranslation: "Tenemos que acelerar el trabajo para llegar a tiempo" },
      { id: "speed12", polish: "Zwolnić", spanish: "Frenar", difficulty: "medium", example: "Zwolnij przed skrzyżowaniem dla bezpieczeństwa", exampleTranslation: "Frena antes del cruce por seguridad" },
      { id: "speed13", polish: "Nie mamy czasu", spanish: "No tenemos tiempo", difficulty: "hard", example: "Nie mamy już czasu na zmiany, musimy działać teraz", exampleTranslation: "No tenemos más tiempo para cambios, tenemos que actuar ahora" },
      { id: "speed14", polish: "Poczekaj chwilę", spanish: "Espera un momento", difficulty: "hard", example: "Poczekaj chwilę proszę, zaraz będę gotowy do wyjścia", exampleTranslation: "Espera un momento por favor, estaré listo para salir enseguida" },
      { id: "speed15", polish: "Bierz swój czas", spanish: "Tómate tu tiempo", difficulty: "hard", example: "Nie spiesz się, bierz swój czas i zrób to dokładnie", exampleTranslation: "No te apresures, tómate tu tiempo y hazlo con cuidado" }
    ]
  }
};
/**
 * POLISH → SPANISH FLASHCARDS - PART 2
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (32-46).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Laptop,
  BookOpen,
  Baby,
  Sun,
  Bed,
  Film,
  Music,
  Paintbrush,
  Clapperboard,
  Volume2,
  Target,
  Award,
  Lightbulb,
  MessageCircle,
  Cookie,
  Users,
  Heart,
  Calendar
} from "lucide-react";

export const flashcardsCategories_part2 = {
  computers_internet: {
    name: "Komputery i internet",
    description: "Technologie cyfrowe i internet",
    icon: Laptop,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "comp1", polish: "Laptop", spanish: "Portátil", difficulty: "easy", example: "Mój nowy laptop jest lekki i bardzo wydajny", exampleTranslation: "Mi portátil nuevo es ligero y muy potente" },
      { id: "comp2", polish: "Strona internetowa", spanish: "Página web", difficulty: "easy", example: "Ta strona internetowa ma nowoczesny i przejrzysty design", exampleTranslation: "Esta página web tiene un diseño moderno y claro" },
      { id: "comp3", polish: "E-mail", spanish: "Correo electrónico", difficulty: "easy", example: "Sprawdzam e-mail kilka razy dziennie", exampleTranslation: "Reviso el correo electrónico varias veces al día" },
      { id: "comp4", polish: "Przeglądarka", spanish: "Navegador", difficulty: "easy", example: "Używam szybkiej przeglądarki do surfowania po internecie", exampleTranslation: "Uso un navegador rápido para navegar por internet" },
      { id: "comp5", polish: "Pobierać", spanish: "Descargar", difficulty: "easy", example: "Muszę pobrać nową aplikację na telefon", exampleTranslation: "Debo descargar una nueva aplicación en el teléfono" },
      { id: "comp6", polish: "Wysłać", spanish: "Enviar", difficulty: "easy", example: "Wysłałem ważny dokument przez e-mail", exampleTranslation: "Envié un documento importante por correo electrónico" },
      { id: "comp7", polish: "Wyszukiwarka", spanish: "Buscador", difficulty: "medium", example: "Używam wyszukiwarki żeby znaleźć informacje", exampleTranslation: "Uso el buscador para encontrar información" },
      { id: "comp8", polish: "Połączenie", spanish: "Conexión", difficulty: "medium", example: "Połączenie internetowe w tym hotelu jest bardzo wolne", exampleTranslation: "La conexión a internet en este hotel es muy lenta" },
      { id: "comp9", polish: "Konto", spanish: "Cuenta", difficulty: "medium", example: "Stworzyłem nowe konto na tej platformie społecznościowej", exampleTranslation: "Creé una cuenta nueva en esta plataforma social" },
      { id: "comp10", polish: "Załącznik", spanish: "Adjunto", difficulty: "medium", example: "Wysłałem ci załącznik z dokumentem w formacie PDF", exampleTranslation: "Te envié el adjunto con el documento en formato PDF" },
      { id: "comp11", polish: "Kopia zapasowa", spanish: "Copia de seguridad", difficulty: "medium", example: "Robię kopię zapasową wszystkich ważnych plików", exampleTranslation: "Hago copia de seguridad de todos los archivos importantes" },
      { id: "comp12", polish: "Antywirus", spanish: "Antivirus", difficulty: "medium", example: "Antywirus chroni komputer przed złośliwym oprogramowaniem", exampleTranslation: "El antivirus protege la computadora de software malicioso" },
      { id: "comp13", polish: "Nie mogę się zalogować", spanish: "No puedo iniciar sesión", difficulty: "hard", example: "Nie mogę się zalogować do mojego konta, zapomniałem hasła", exampleTranslation: "No puedo iniciar sesión en mi cuenta, olvidé la contraseña" },
      { id: "comp14", polish: "Komputer się zawiesił", spanish: "La computadora se congeló", difficulty: "hard", example: "Komputer się całkowicie zawiesił i muszę go zrestartować", exampleTranslation: "La computadora se congeló completamente y debo reiniciarla" },
      { id: "comp15", polish: "Potrzebuję szybszego internetu", spanish: "Necesito internet más rápido", difficulty: "hard", example: "Potrzebuję znacznie szybszego internetu do pracy zdalnej", exampleTranslation: "Necesito internet mucho más rápido para trabajar remotamente" }
    ]
  },

  reading_books: {
    name: "Czytanie i książki",
    description: "Literatura i czytanie",
    icon: BookOpen,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "read1", polish: "Książka", spanish: "Libro", difficulty: "easy", example: "Ta książka jest fascynująca, nie mogę się od niej oderwać", exampleTranslation: "Este libro es fascinante, no puedo dejar de leerlo" },
      { id: "read2", polish: "Czytać", spanish: "Leer", difficulty: "easy", example: "Czytam codziennie przed snem przynajmniej pół godziny", exampleTranslation: "Leo todos los días antes de dormir al menos media hora" },
      { id: "read3", polish: "Autor", spanish: "Autor", difficulty: "easy", example: "Autor tej powieści zdobył wiele nagród literackich", exampleTranslation: "El autor de esta novela ganó muchos premios literarios" },
      { id: "read4", polish: "Strona", spanish: "Página", difficulty: "easy", example: "Jestem już na dwusetnej stronie tej grubej książki", exampleTranslation: "Ya estoy en la página doscientos de este libro grueso" },
      { id: "read5", polish: "Rozdział", spanish: "Capítulo", difficulty: "easy", example: "Ten rozdział był najbardziej ekscytującą częścią książki", exampleTranslation: "Este capítulo fue la parte más emocionante del libro" },
      { id: "read6", polish: "Biblioteka", spanish: "Biblioteca", difficulty: "easy", example: "Pożyczam książki z miejskiej biblioteki regularnie", exampleTranslation: "Pido prestados libros de la biblioteca municipal regularmente" },
      { id: "read7", polish: "Powieść", spanish: "Novela", difficulty: "medium", example: "Ta powieść historyczna opowiada o XIX wieku", exampleTranslation: "Esta novela histórica cuenta sobre el siglo XIX" },
      { id: "read8", polish: "Wiersz", spanish: "Poema", difficulty: "medium", example: "Uwielbiam czytać wiersze polskich poetów romantycznych", exampleTranslation: "Me encanta leer poemas de poetas románticos polacos" },
      { id: "read9", polish: "Magazyn", spanish: "Revista", difficulty: "medium", example: "Prenumeruję miesięczny magazyn o podróżach po świecie", exampleTranslation: "Tengo una suscripción a una revista mensual sobre viajes por el mundo" },
      { id: "read10", polish: "Opowiadanie", spanish: "Cuento", difficulty: "medium", example: "Napisałem krótkie opowiadanie dla mojej córki", exampleTranslation: "Escribí un cuento corto para mi hija" },
      { id: "read11", polish: "Biografia", spanish: "Biografía", difficulty: "medium", example: "Czytam biografię słynnego polskiego kompozytora", exampleTranslation: "Leo la biografía de un famoso compositor polaco" },
      { id: "read12", polish: "Bestseller", spanish: "Superventas", difficulty: "medium", example: "Ta książka jest bestsellerem w wielu krajach", exampleTranslation: "Este libro es superventas en muchos países" },
      { id: "read13", polish: "Polecasz jakąś książkę?", spanish: "¿Recomiendas algún libro?", difficulty: "hard", example: "Polecasz jakąś dobrą książkę na długą podróż pociągiem?", exampleTranslation: "¿Recomiendas algún buen libro para un viaje largo en tren?" },
      { id: "read14", polish: "Nie mogę przestać czytać", spanish: "No puedo dejar de leer", difficulty: "hard", example: "Ta książka jest tak wciągająca że nie mogę przestać czytać", exampleTranslation: "Este libro es tan absorbente que no puedo dejar de leer" },
      { id: "read15", polish: "Jaki jest twój ulubiony gatunek?", spanish: "¿Cuál es tu género favorito?", difficulty: "hard", example: "Jaki jest twój ulubiony gatunek literacki i dlaczego?", exampleTranslation: "¿Cuál es tu género literario favorito y por qué?" }
    ]
  },

  children_babies: {
    name: "Dzieci i niemowlęta",
    description: "Opieka nad dziećmi",
    icon: Baby,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "baby1", polish: "Dziecko", spanish: "Niño", difficulty: "easy", example: "Moje dziecko uczy się chodzić i jest bardzo aktywne", exampleTranslation: "Mi niño está aprendiendo a caminar y es muy activo" },
      { id: "baby2", polish: "Niemowlę", spanish: "Bebé", difficulty: "easy", example: "Niemowlę płacze gdy jest głodne lub zmęczone", exampleTranslation: "El bebé llora cuando tiene hambre o está cansado" },
      { id: "baby3", polish: "Zabawka", spanish: "Juguete", difficulty: "easy", example: "Kupiliśmy nową zabawkę edukacyjną dla dziecka", exampleTranslation: "Compramos un juguete educativo nuevo para el niño" },
      { id: "baby4", polish: "Smoczek", spanish: "Chupete", difficulty: "easy", example: "Dziecko uspokaja się gdy ma smoczek", exampleTranslation: "El niño se calma cuando tiene el chupete" },
      { id: "baby5", polish: "Pielucha", spanish: "Pañal", difficulty: "easy", example: "Muszę zmienić pieluchę dziecku przed snem", exampleTranslation: "Debo cambiar el pañal al niño antes de dormir" },
      { id: "baby6", polish: "Kołyska", spanish: "Cuna", difficulty: "easy", example: "Niemowlę śpi spokojnie w swojej kołysce", exampleTranslation: "El bebé duerme tranquilo en su cuna" },
      { id: "baby7", polish: "Wózek", spanish: "Cochecito", difficulty: "medium", example: "Spacerujemy z wózkiem po parku każdego popołudnia", exampleTranslation: "Paseamos con el cochecito por el parque cada tarde" },
      { id: "baby8", polish: "Karmić", spanish: "Alimentar", difficulty: "medium", example: "Karmię dziecko zdrową i zbilansowaną dietą", exampleTranslation: "Alimento al niño con una dieta sana y equilibrada" },
      { id: "baby9", polish: "Przewijać", spanish: "Cambiar el pañal", difficulty: "medium", example: "Muszę przewinać dziecko kilka razy dziennie", exampleTranslation: "Debo cambiar el pañal al niño varias veces al día" },
      { id: "baby10", polish: "Przedszkole", spanish: "Guardería", difficulty: "medium", example: "Dziecko chodzi do przedszkola od poniedziałku do piątku", exampleTranslation: "El niño va a la guardería de lunes a viernes" },
      { id: "baby11", polish: "Kołysanka", spanish: "Canción de cuna", difficulty: "medium", example: "Śpiewam kołysankę żeby uspokoić dziecko przed snem", exampleTranslation: "Canto una canción de cuna para calmar al niño antes de dormir" },
      { id: "baby12", polish: "Butelka", spanish: "Biberón", difficulty: "medium", example: "Przygotowuję ciepłe mleko w butelce dla niemowlęcia", exampleTranslation: "Preparo leche tibia en el biberón para el bebé" },
      { id: "baby13", polish: "Dziecko płacze", spanish: "El niño está llorando", difficulty: "hard", example: "Dziecko płacze od godziny i nie wiem dlaczego", exampleTranslation: "El niño está llorando desde hace una hora y no sé por qué" },
      { id: "baby14", polish: "Kiedy zacznie mówić?", spanish: "¿Cuándo empezará a hablar?", difficulty: "hard", example: "Kiedy dziecko zazwyczaj zaczyna mówić pierwsze słowa?", exampleTranslation: "¿Cuándo suele empezar el niño a decir las primeras palabras?" },
      { id: "baby15", polish: "Jest taki słodki", spanish: "Es tan dulce", difficulty: "hard", example: "Twoje dziecko jest takie słodkie gdy się uśmiecha", exampleTranslation: "Tu niño es tan dulce cuando sonríe" }
    ]
  },

  beach_summer: {
    name: "Plaża i lato",
    description: "Lato i wypoczynek nad morzem",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "beach1", polish: "Plaża", spanish: "Playa", difficulty: "easy", example: "Plaża jest piękna z białym piaskiem i czystą wodą", exampleTranslation: "La playa es hermosa con arena blanca y agua limpia" },
      { id: "beach2", polish: "Morze", spanish: "Mar", difficulty: "easy", example: "Morze jest spokojne i ciepłe w lipcu i sierpniu", exampleTranslation: "El mar está tranquilo y cálido en julio y agosto" },
      { id: "beach3", polish: "Piasek", spanish: "Arena", difficulty: "easy", example: "Dzieci budują zamki z piasku na plaży", exampleTranslation: "Los niños construyen castillos de arena en la playa" },
      { id: "beach4", polish: "Fale", spanish: "Olas", difficulty: "easy", example: "Fale są dzisiaj wysokie i idealne do surfowania", exampleTranslation: "Las olas están altas hoy y son ideales para surfear" },
      { id: "beach5", polish: "Ręcznik", spanish: "Toalla", difficulty: "easy", example: "Rozłożyłem duży ręcznik plażowy na piasku", exampleTranslation: "Extendí una toalla de playa grande en la arena" },
      { id: "beach6", polish: "Parasol", spanish: "Sombrilla", difficulty: "easy", example: "Parasol chroni nas przed gorącym słońcem", exampleTranslation: "La sombrilla nos protege del sol caliente" },
      { id: "beach7", polish: "Opalać się", spanish: "Tomar el sol", difficulty: "medium", example: "Lubię się opalać ale zawsze używam kremu z filtrem", exampleTranslation: "Me gusta tomar el sol pero siempre uso crema con filtro" },
      { id: "beach8", polish: "Krem do opalania", spanish: "Protector solar", difficulty: "medium", example: "Krem do opalania chroni skórę przed szkodliwymi promieniami", exampleTranslation: "El protector solar protege la piel de los rayos dañinos" },
      { id: "beach9", polish: "Nurkować", spanish: "Bucear", difficulty: "medium", example: "Uwielbiam nurkować i oglądać kolorowe ryby pod wodą", exampleTranslation: "Me encanta bucear y ver peces coloridos bajo el agua" },
      { id: "beach10", polish: "Ratownik", spanish: "Socorrista", difficulty: "medium", example: "Ratownik pilnuje bezpieczeństwa wszystkich pływających", exampleTranslation: "El socorrista vigila la seguridad de todos los nadadores" },
      { id: "beach11", polish: "Muszla", spanish: "Concha", difficulty: "medium", example: "Zbieramy piękne muszle na pamiątkę z plaży", exampleTranslation: "Recogemos conchas hermosas como recuerdo de la playa" },
      { id: "beach12", polish: "Koło ratunkowe", spanish: "Salvavidas", difficulty: "medium", example: "Dziecko uczy się pływać z kołem ratunkowym", exampleTranslation: "El niño aprende a nadar con el salvavidas" },
      { id: "beach13", polish: "Idziemy na plażę", spanish: "Vamos a la playa", difficulty: "hard", example: "Idziemy na plażę całą rodziną w to słoneczne popołudnie", exampleTranslation: "Vamos a la playa toda la familia esta tarde soleada" },
      { id: "beach14", polish: "Woda jest ciepła", spanish: "El agua está caliente", difficulty: "hard", example: "Woda w morzu jest dzisiaj przyjemnie ciepła", exampleTranslation: "El agua del mar está agradablemente caliente hoy" },
      { id: "beach15", polish: "Uwielbiam lato", spanish: "Me encanta el verano", difficulty: "hard", example: "Uwielbiam lato ze względu na długie dni i wakacje", exampleTranslation: "Me encanta el verano por los días largos y las vacaciones" }
    ]
  },

  bedroom_sleep: {
    name: "Sypialnia i sen",
    description: "Sypialnia i rutyna przed snem",
    icon: Bed,
    color: "from-indigo-400 to-purple-600",
    level: "beginner",
    words: [
      { id: "bedr1", polish: "Sypialnia", spanish: "Dormitorio", difficulty: "easy", example: "Moja sypialnia jest cicha i spokojna", exampleTranslation: "Mi dormitorio es tranquilo y silencioso" },
      { id: "bedr2", polish: "Łóżko", spanish: "Cama", difficulty: "easy", example: "Łóżko jest wygodne z miękkim materacem", exampleTranslation: "La cama es cómoda con un colchón suave" },
      { id: "bedr3", polish: "Poduszka", spanish: "Almohada", difficulty: "easy", example: "Potrzebuję dwóch miękkich poduszek do spania", exampleTranslation: "Necesito dos almohadas suaves para dormir" },
      { id: "bedr4", polish: "Koc", spanish: "Manta", difficulty: "easy", example: "Przykrywam się ciepłym kocem zimową nocą", exampleTranslation: "Me cubro con una manta cálida en la noche de invierno" },
      { id: "bedr5", polish: "Budzik", spanish: "Despertador", difficulty: "easy", example: "Ustawiam budzik na szóstą rano codziennie", exampleTranslation: "Pongo el despertador a las seis de la mañana todos los días" },
      { id: "bedr6", polish: "Spać", spanish: "Dormir", difficulty: "easy", example: "Muszę spać osiem godzin żeby czuć się dobrze", exampleTranslation: "Debo dormir ocho horas para sentirme bien" },
      { id: "bedr7", polish: "Sen", spanish: "Sueño", difficulty: "medium", example: "Miałem dziwny sen o lataniu nad miastem", exampleTranslation: "Tuve un sueño extraño sobre volar sobre la ciudad" },
      { id: "bedr8", polish: "Koszula nocna", spanish: "Camisón", difficulty: "medium", example: "Wkładam wygodną koszulę nocną przed snem", exampleTranslation: "Me pongo un camisón cómodo antes de dormir" },
      { id: "bedr9", polish: "Pościel", spanish: "Ropa de cama", difficulty: "medium", example: "Zmieniam pościel raz w tygodniu regularnie", exampleTranslation: "Cambio la ropa de cama una vez a la semana regularmente" },
      { id: "bedr10", polish: "Drzemka", spanish: "Siesta", difficulty: "medium", example: "Po obiedzie robię krótką drzemkę dla regeneracji", exampleTranslation: "Después de la comida hago una siesta corta para recuperarme" },
      { id: "bedr11", polish: "Bezsenność", spanish: "Insomnio", difficulty: "medium", example: "Mam bezsenność gdy jestem zestresowany pracą", exampleTranslation: "Tengo insomnio cuando estoy estresado por el trabajo" },
      { id: "bedr12", polish: "Chrapać", spanish: "Roncar", difficulty: "medium", example: "Mój mąż chrapie głośno gdy jest bardzo zmęczony", exampleTranslation: "Mi marido ronca fuerte cuando está muy cansado" },
      { id: "bedr13", polish: "Jestem śpiący", spanish: "Tengo sueño", difficulty: "hard", example: "Jestem bardzo śpiący po całym dniu podróży", exampleTranslation: "Tengo mucho sueño después de todo el día de viaje" },
      { id: "bedr14", polish: "Nie mogę zasnąć", spanish: "No puedo dormirme", difficulty: "hard", example: "Nie mogę zasnąć gdy mam za dużo myśli w głowie", exampleTranslation: "No puedo dormirme cuando tengo demasiados pensamientos en la cabeza" },
      { id: "bedr15", polish: "Dobranoc, śpij dobrze", spanish: "Buenas noches, duerme bien", difficulty: "hard", example: "Dobranoc kochanie, śpij dobrze i miłych snów", exampleTranslation: "Buenas noches cariño, duerme bien y dulces sueños" }
    ]
  },

  movies_cinema: {
    name: "Filmy i kino",
    description: "Kino i filmy",
    icon: Film,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "movie1", polish: "Film", spanish: "Película", difficulty: "easy", example: "Wczoraj obejrzałem świetny film w kinie", exampleTranslation: "Ayer vi una película excelente en el cine" },
      { id: "movie2", polish: "Kino", spanish: "Cine", difficulty: "easy", example: "Kino ma wielki ekran i doskonały dźwięk", exampleTranslation: "El cine tiene una pantalla enorme y sonido excelente" },
      { id: "movie3", polish: "Aktor", spanish: "Actor", difficulty: "easy", example: "Ten aktor zagrał główną rolę w filmie", exampleTranslation: "Este actor interpretó el papel principal en la película" },
      { id: "movie4", polish: "Reżyser", spanish: "Director", difficulty: "easy", example: "Reżyser tego filmu jest bardzo utalentowany", exampleTranslation: "El director de esta película es muy talentoso" },
      { id: "movie5", polish: "Bilet", spanish: "Entrada", difficulty: "easy", example: "Kupiłem bilet na seans wieczorny o ósmej", exampleTranslation: "Compré una entrada para la sesión de la noche a las ocho" },
      { id: "movie6", polish: "Ekran", spanish: "Pantalla", difficulty: "easy", example: "Ekran w tym kinie jest ogromny i wyraźny", exampleTranslation: "La pantalla en este cine es enorme y nítida" },
      { id: "movie7", polish: "Napisy", spanish: "Subtítulos", difficulty: "medium", example: "Wolę oglądać filmy zagraniczne z napisami", exampleTranslation: "Prefiero ver películas extranjeras con subtítulos" },
      { id: "movie8", polish: "Dubbing", spanish: "Doblaje", difficulty: "medium", example: "Dubbing w tym filmie jest bardzo dobrej jakości", exampleTranslation: "El doblaje en esta película es de muy buena calidad" },
      { id: "movie9", polish: "Zwiastun", spanish: "Tráiler", difficulty: "medium", example: "Zwiastun wyglądał interesująco więc poszedłem na film", exampleTranslation: "El tráiler se veía interesante así que fui a ver la película" },
      { id: "movie10", polish: "Komedia", spanish: "Comedia", difficulty: "medium", example: "Lubię oglądać komedie gdy chcę się pośmiać", exampleTranslation: "Me gusta ver comedias cuando quiero reír" },
      { id: "movie11", polish: "Dramat", spanish: "Drama", difficulty: "medium", example: "Ten film dramatyczny był bardzo poruszający", exampleTranslation: "Esta película de drama fue muy conmovedora" },
      { id: "movie12", polish: "Popcorn", spanish: "Palomitas", difficulty: "medium", example: "Kupuję popcorn i colę przed każdym filmem", exampleTranslation: "Compro palomitas y cola antes de cada película" },
      { id: "movie13", polish: "Jaki film polecasz?", spanish: "¿Qué película recomiendas?", difficulty: "hard", example: "Jaki dobry film polecasz na weekend do obejrzenia?", exampleTranslation: "¿Qué buena película recomiendas para ver el fin de semana?" },
      { id: "movie14", polish: "To był świetny film", spanish: "Fue una película excelente", difficulty: "hard", example: "To był naprawdę świetny film, wart obejrzenia", exampleTranslation: "Fue una película realmente excelente, vale la pena verla" },
      { id: "movie15", polish: "Widziałeś już...?", spanish: "¿Ya has visto...?", difficulty: "hard", example: "Widziałeś już najnowszy film tego reżysera?", exampleTranslation: "¿Ya has visto la última película de este director?" }
    ]
  },

  music_instruments: {
    name: "Muzyka i instrumenty",
    description: "Muzyka i instrumenty muzyczne",
    icon: Music,
    color: "from-violet-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "music1", polish: "Muzyka", spanish: "Música", difficulty: "easy", example: "Muzyka klasyczna pomaga mi się skoncentrować", exampleTranslation: "La música clásica me ayuda a concentrarme" },
      { id: "music2", polish: "Piosenka", spanish: "Canción", difficulty: "easy", example: "Ta piosenka jest popularna w radiu teraz", exampleTranslation: "Esta canción es popular en la radio ahora" },
      { id: "music3", polish: "Gitara", spanish: "Guitarra", difficulty: "easy", example: "Uczę się grać na gitarze od pół roku", exampleTranslation: "Estoy aprendiendo a tocar la guitarra desde hace medio año" },
      { id: "music4", polish: "Pianino", spanish: "Piano", difficulty: "easy", example: "Moja córka gra na pianinie od dzieciństwa", exampleTranslation: "Mi hija toca el piano desde la infancia" },
      { id: "music5", polish: "Skrzypce", spanish: "Violín", difficulty: "easy", example: "Skrzypce mają piękny i delikatny dźwięk", exampleTranslation: "El violín tiene un sonido hermoso y delicado" },
      { id: "music6", polish: "Perkusja", spanish: "Batería", difficulty: "easy", example: "Perkusja nadaje rytm całemu zespołowi", exampleTranslation: "La batería da ritmo a toda la banda" },
      { id: "music7", polish: "Koncert", spanish: "Concierto", difficulty: "medium", example: "Byłem na koncercie mojego ulubionego zespołu", exampleTranslation: "Estuve en el concierto de mi banda favorita" },
      { id: "music8", polish: "Zespół", spanish: "Banda", difficulty: "medium", example: "Ten zespół rockowy gra już od dwudziestu lat", exampleTranslation: "Esta banda de rock toca desde hace veinte años" },
      { id: "music9", polish: "Melodia", spanish: "Melodía", difficulty: "medium", example: "Melodia tej piosenki jest bardzo chwytliwa", exampleTranslation: "La melodía de esta canción es muy pegadiza" },
      { id: "music10", polish: "Śpiewać", spanish: "Cantar", difficulty: "medium", example: "Lubię śpiewać pod prysznicem rano", exampleTranslation: "Me gusta cantar en la ducha por la mañana" },
      { id: "music11", polish: "Słuchawki", spanish: "Auriculares", difficulty: "medium", example: "Słucham muzyki przez bezprzewodowe słuchawki", exampleTranslation: "Escucho música con auriculares inalámbricos" },
      { id: "music12", polish: "Album", spanish: "Álbum", difficulty: "medium", example: "Nowy album tego artysty jest już dostępny", exampleTranslation: "El nuevo álbum de este artista ya está disponible" },
      { id: "music13", polish: "Jaką muzykę lubisz?", spanish: "¿Qué música te gusta?", difficulty: "hard", example: "Jaką muzykę najbardziej lubisz słuchać?", exampleTranslation: "¿Qué música te gusta escuchar más?" },
      { id: "music14", polish: "Grasz na instrumencie?", spanish: "¿Tocas algún instrumento?", difficulty: "hard", example: "Grasz na jakimś instrumencie muzycznym?", exampleTranslation: "¿Tocas algún instrumento musical?" },
      { id: "music15", polish: "Ta muzyka jest relaksująca", spanish: "Esta música es relajante", difficulty: "hard", example: "Ta muzyka klasyczna jest bardzo relaksująca po ciężkim dniu", exampleTranslation: "Esta música clásica es muy relajante después de un día duro" }
    ]
  },

  art_creativity: {
    name: "Sztuka i kreatywność",
    description: "Sztuka i twórczość artystyczna",
    icon: Paintbrush,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "art1", polish: "Sztuka", spanish: "Arte", difficulty: "easy", example: "Sztuka współczesna jest pełna symboliki i znaczeń", exampleTranslation: "El arte contemporáneo está lleno de simbolismo y significados" },
      { id: "art2", polish: "Obraz", spanish: "Cuadro", difficulty: "easy", example: "Ten obraz olejny wisi w galerii narodowej", exampleTranslation: "Este cuadro al óleo cuelga en la galería nacional" },
      { id: "art3", polish: "Rzeźba", spanish: "Escultura", difficulty: "easy", example: "Rzeźba w parku reprezentuje wolność", exampleTranslation: "La escultura en el parque representa la libertad" },
      { id: "art4", polish: "Farba", spanish: "Pintura", difficulty: "easy", example: "Farby olejne dają głębokie i bogate kolory", exampleTranslation: "Las pinturas al óleo dan colores profundos y ricos" },
      { id: "art5", polish: "Pędzel", spanish: "Pincel", difficulty: "easy", example: "Pędzel artystyczny pozwala na precyzyjne malowanie", exampleTranslation: "El pincel artístico permite pintar con precisión" },
      { id: "art6", polish: "Galeria", spanish: "Galería", difficulty: "easy", example: "Galeria sztuki wystawia prace młodych artystów", exampleTranslation: "La galería de arte expone obras de artistas jóvenes" },
      { id: "art7", polish: "Płótno", spanish: "Lienzo", difficulty: "medium", example: "Maluję na dużym płótnie w moim atelier", exampleTranslation: "Pinto en un lienzo grande en mi estudio" },
      { id: "art8", polish: "Wystawa", spanish: "Exposición", difficulty: "medium", example: "Wystawa malarstwa trwa przez cały miesiąc", exampleTranslation: "La exposición de pintura dura todo el mes" },
      { id: "art9", polish: "Artysta", spanish: "Artista", difficulty: "medium", example: "Ten artysta jest znany w całej Europie", exampleTranslation: "Este artista es conocido en toda Europa" },
      { id: "art10", polish: "Rysunek", spanish: "Dibujo", difficulty: "medium", example: "Rysunek ołówkiem wymaga dużej precyzji", exampleTranslation: "El dibujo a lápiz requiere mucha precisión" },
      { id: "art11", polish: "Projekt", spanish: "Diseño", difficulty: "medium", example: "Projekt graficzny musi być estetyczny i funkcjonalny", exampleTranslation: "El diseño gráfico debe ser estético y funcional" },
      { id: "art12", polish: "Inspiracja", spanish: "Inspiración", difficulty: "medium", example: "Natura jest moją największą inspiracją artystyczną", exampleTranslation: "La naturaleza es mi mayor inspiración artística" },
      { id: "art13", polish: "Jestem twórczy", spanish: "Soy creativo", difficulty: "hard", example: "Jestem osobą bardzo twórczą i lubię artystyczne projekty", exampleTranslation: "Soy una persona muy creativa y me gustan los proyectos artísticos" },
      { id: "art14", polish: "To jest piękne", spanish: "Es hermoso", difficulty: "hard", example: "To dzieło sztuki jest absolutnie piękne i poruszające", exampleTranslation: "Esta obra de arte es absolutamente hermosa y conmovedora" },
      { id: "art15", polish: "Wyrażam się przez sztukę", spanish: "Me expreso a través del arte", difficulty: "hard", example: "Wyrażam swoje emocje i myśli przez sztukę wizualną", exampleTranslation: "Expreso mis emociones y pensamientos a través del arte visual" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Różne formy rozrywki",
    icon: Clapperboard,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    words: [
      { id: "ent1", polish: "Zabawa", spanish: "Diversión", difficulty: "easy", example: "Ta zabawa była wspaniała dla całej rodziny", exampleTranslation: "Esta diversión fue maravillosa para toda la familia" },
      { id: "ent2", polish: "Gra", spanish: "Juego", difficulty: "easy", example: "Gramy w gry planszowe każdy piątkowy wieczór", exampleTranslation: "Jugamos juegos de mesa cada viernes por la noche" },
      { id: "ent3", polish: "Impreza", spanish: "Fiesta", difficulty: "easy", example: "Organizujemy imprezę urodzinową dla dziecka", exampleTranslation: "Organizamos una fiesta de cumpleaños para el niño" },
      { id: "ent4", polish: "Taniec", spanish: "Baile", difficulty: "easy", example: "Taniec jest doskonałą formą rozrywki i ćwiczeń", exampleTranslation: "El baile es una forma excelente de diversión y ejercicio" },
      { id: "ent5", polish: "Konkurs", spanish: "Concurso", difficulty: "easy", example: "Wygrałem konkurs i zdobyłem nagrodę główną", exampleTranslation: "Gané el concurso y obtuve el premio principal" },
      { id: "ent6", polish: "Śmiech", spanish: "Risa", difficulty: "easy", example: "Śmiech jest najlepszym lekarstwem na smutek", exampleTranslation: "La risa es la mejor medicina para la tristeza" },
      { id: "ent7", polish: "Dowcip", spanish: "Chiste", difficulty: "medium", example: "Opowiedział zabawny dowcip który rozbawił wszystkich", exampleTranslation: "Contó un chiste gracioso que hizo reír a todos" },
      { id: "ent8", polish: "Klub nocny", spanish: "Club nocturno", difficulty: "medium", example: "Klub nocny w centrum jest otwarty do świtu", exampleTranslation: "El club nocturno en el centro está abierto hasta el amanecer" },
      { id: "ent9", polish: "Karaoke", spanish: "Karaoke", difficulty: "medium", example: "Idziemy na karaoke żeby pośpiewać z przyjaciółmi", exampleTranslation: "Vamos al karaoke para cantar con amigos" },
      { id: "ent10", polish: "Park rozrywki", spanish: "Parque de atracciones", difficulty: "medium", example: "Park rozrywki ma wiele ekscytujących kolejek górskich", exampleTranslation: "El parque de atracciones tiene muchas montañas rusas emocionantes" },
      { id: "ent11", polish: "Cyrk", spanish: "Circo", difficulty: "medium", example: "Cyrk przyjeżdża do miasta raz w roku", exampleTranslation: "El circo viene a la ciudad una vez al año" },
      { id: "ent12", polish: "Magik", spanish: "Mago", difficulty: "medium", example: "Magik wykonywał niesamowite sztuczki dla publiczności", exampleTranslation: "El mago realizaba trucos increíbles para el público" },
      { id: "ent13", polish: "Bawię się świetnie", spanish: "Me estoy divirtiendo mucho", difficulty: "hard", example: "Bawię się dzisiaj świetnie na tej imprezie", exampleTranslation: "Me estoy divirtiendo mucho en esta fiesta hoy" },
      { id: "ent14", polish: "Co robisz dla zabawy?", spanish: "¿Qué haces para divertirte?", difficulty: "hard", example: "Co zwykle robisz dla zabawy w wolnym czasie?", exampleTranslation: "¿Qué sueles hacer para divertirte en tu tiempo libre?" },
      { id: "ent15", polish: "To było zabawne", spanish: "Fue divertido", difficulty: "hard", example: "To było bardzo zabawne, dziękuję za wspaniały wieczór", exampleTranslation: "Fue muy divertido, gracias por la noche maravillosa" }
    ]
  },

  sounds_noise: {
    name: "Dźwięki i hałas",
    description: "Różne dźwięki i odgłosy",
    icon: Volume2,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "sound1", polish: "Dźwięk", spanish: "Sonido", difficulty: "easy", example: "Dźwięk dzwonka budzi mnie każdego ranka", exampleTranslation: "El sonido del despertador me despierta cada mañana" },
      { id: "sound2", polish: "Hałas", spanish: "Ruido", difficulty: "easy", example: "Hałas z ulicy przeszkadza mi w pracy", exampleTranslation: "El ruido de la calle me molesta al trabajar" },
      { id: "sound3", polish: "Głośny", spanish: "Ruidoso", difficulty: "easy", example: "Ten koncert był bardzo głośny", exampleTranslation: "Este concierto fue muy ruidoso" },
      { id: "sound4", polish: "Cichy", spanish: "Silencioso", difficulty: "easy", example: "Lubię ciche miejsca do czytania książek", exampleTranslation: "Me gustan los lugares silenciosos para leer libros" },
      { id: "sound5", polish: "Muzyka", spanish: "Música", difficulty: "easy", example: "Muzyka z sąsiedniego mieszkania jest za głośna", exampleTranslation: "La música del apartamento vecino es demasiado alta" },
      { id: "sound6", polish: "Dzwonek", spanish: "Timbre", difficulty: "easy", example: "Dzwonek do drzwi jest zepsuty i nie działa", exampleTranslation: "El timbre de la puerta está roto y no funciona" },
      { id: "sound7", polish: "Syrena", spanish: "Sirena", difficulty: "medium", example: "Syrena karetki pogotowia jest bardzo głośna", exampleTranslation: "La sirena de la ambulancia es muy fuerte" },
      { id: "sound8", polish: "Szept", spanish: "Susurro", difficulty: "medium", example: "Mówię szeptem żeby nie obudzić śpiącego dziecka", exampleTranslation: "Hablo en susurro para no despertar al niño dormido" },
      { id: "sound9", polish: "Krzyk", spanish: "Grito", difficulty: "medium", example: "Usłyszałem krzyk na ulicy i wyjrzałem przez okno", exampleTranslation: "Escuché un grito en la calle y miré por la ventana" },
      { id: "sound10", polish: "Echo", spanish: "Eco", difficulty: "medium", example: "Echo w tej jaskini jest niesamowite", exampleTranslation: "El eco en esta cueva es increíble" },
      { id: "sound11", polish: "Cisza", spanish: "Silencio", difficulty: "medium", example: "Cisza w bibliotece jest obowiązkowa", exampleTranslation: "El silencio en la biblioteca es obligatorio" },
      { id: "sound12", polish: "Głośność", spanish: "Volumen", difficulty: "medium", example: "Zmniejsz proszę głośność telewizora", exampleTranslation: "Baja el volumen de la televisión por favor" },
      { id: "sound13", polish: "Jest za głośno", spanish: "Está demasiado ruidoso", difficulty: "hard", example: "Jest tutaj za głośno, możemy iść w cichsze miejsce?", exampleTranslation: "Está demasiado ruidoso aquí, ¿podemos ir a un lugar más silencioso?" },
      { id: "sound14", polish: "Słyszysz to?", spanish: "¿Oyes eso?", difficulty: "hard", example: "Słyszysz to? To dźwięk dzwonków kościelnych", exampleTranslation: "¿Oyes eso? Es el sonido de las campanas de la iglesia" },
      { id: "sound15", polish: "Mów ciszej proszę", spanish: "Habla más bajo por favor", difficulty: "hard", example: "Mów ciszej proszę, dziecko śpi w sąsiednim pokoju", exampleTranslation: "Habla más bajo por favor, el niño duerme en la habitación de al lado" }
    ]
  },

  goals_dreams: {
    name: "Cele i marzenia",
    description: "Aspiracje i plany na przyszłość",
    icon: Target,
    color: "from-emerald-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "goal1", polish: "Cel", spanish: "Meta", difficulty: "easy", example: "Mój cel to nauczyć się trzech języków obcych", exampleTranslation: "Mi meta es aprender tres idiomas extranjeros" },
      { id: "goal2", polish: "Marzenie", spanish: "Sueño", difficulty: "easy", example: "Moje największe marzenie to podróż dookoła świata", exampleTranslation: "Mi mayor sueño es viajar alrededor del mundo" },
      { id: "goal3", polish: "Plan", spanish: "Plan", difficulty: "easy", example: "Mam szczegółowy plan na ten rok", exampleTranslation: "Tengo un plan detallado para este año" },
      { id: "goal4", polish: "Ambicja", spanish: "Ambición", difficulty: "easy", example: "Ambicja jest ważna ale nie najważniejsza w życiu", exampleTranslation: "La ambición es importante pero no lo más importante en la vida" },
      { id: "goal5", polish: "Sukces", spanish: "Éxito", difficulty: "easy", example: "Sukces przychodzi dzięki ciężkiej pracy", exampleTranslation: "El éxito viene gracias al trabajo duro" },
      { id: "goal6", polish: "Osiągnięcie", spanish: "Logro", difficulty: "easy", example: "To największe osiągnięcie mojej kariery", exampleTranslation: "Este es el mayor logro de mi carrera" },
      { id: "goal7", polish: "Motywacja", spanish: "Motivación", difficulty: "medium", example: "Potrzebuję motywacji żeby wstać wcześnie rano", exampleTranslation: "Necesito motivación para levantarme temprano por la mañana" },
      { id: "goal8", polish: "Determinacja", spanish: "Determinación", difficulty: "medium", example: "Determinacja pomaga osiągnąć każdy cel", exampleTranslation: "La determinación ayuda a alcanzar cualquier meta" },
      { id: "goal9", polish: "Wyzwanie", spanish: "Desafío", difficulty: "medium", example: "To trudne wyzwanie ale jestem gotowy", exampleTranslation: "Es un desafío difícil pero estoy preparado" },
      { id: "goal10", polish: "Przyszłość", spanish: "Futuro", difficulty: "medium", example: "Myślę pozytywnie o mojej przyszłości", exampleTranslation: "Pienso positivamente sobre mi futuro" },
      { id: "goal11", polish: "Aspiracja", spanish: "Aspiración", difficulty: "medium", example: "Moje aspiracje zawodowe są bardzo wysokie", exampleTranslation: "Mis aspiraciones profesionales son muy altas" },
      { id: "goal12", polish: "Postanowienie", spanish: "Propósito", difficulty: "medium", example: "Moje noworoczne postanowienie to być zdrowszym", exampleTranslation: "Mi propósito de año nuevo es ser más saludable" },
      { id: "goal13", polish: "Jakie masz cele?", spanish: "¿Cuáles son tus metas?", difficulty: "hard", example: "Jakie masz cele na ten rok? Jestem ciekawy", exampleTranslation: "¿Cuáles son tus metas para este año? Tengo curiosidad" },
      { id: "goal14", polish: "Marzę o...", spanish: "Sueño con...", difficulty: "hard", example: "Marzę o posiadaniu własnego domu w górach", exampleTranslation: "Sueño con tener mi propia casa en las montañas" },
      { id: "goal15", polish: "Nigdy się nie poddawaj", spanish: "Nunca te rindas", difficulty: "hard", example: "Nigdy się nie poddawaj, nawet gdy jest trudno", exampleTranslation: "Nunca te rindas, incluso cuando es difícil" }
    ]
  },

  awards_achievements: {
    name: "Nagrody i osiągnięcia",
    description: "Sukcesy i wyróżnienia",
    icon: Award,
    color: "from-yellow-400 to-amber-500",
    level: "intermediate",
    words: [
      { id: "award1", polish: "Nagroda", spanish: "Premio", difficulty: "easy", example: "Zdobyłem nagrodę w konkursie fotograficznym", exampleTranslation: "Gané un premio en el concurso de fotografía" },
      { id: "award2", polish: "Medal", spanish: "Medalla", difficulty: "easy", example: "Sportowiec otrzymał złoty medal za zwycięstwo", exampleTranslation: "El deportista recibió la medalla de oro por la victoria" },
      { id: "award3", polish: "Trofeum", spanish: "Trofeo", difficulty: "easy", example: "Trofeum stoi dumnie na półce w salonie", exampleTranslation: "El trofeo está orgullosamente en el estante del salón" },
      { id: "award4", polish: "Zwycięzca", spanish: "Ganador", difficulty: "easy", example: "Zwycięzca konkursu otrzyma tysiąc euro", exampleTranslation: "El ganador del concurso recibirá mil euros" },
      { id: "award5", polish: "Mistrz", spanish: "Campeón", difficulty: "easy", example: "Nasza drużyna jest mistrzem kraju w tym roku", exampleTranslation: "Nuestro equipo es campeón del país este año" },
      { id: "award6", polish: "Ceremonia", spanish: "Ceremonia", difficulty: "easy", example: "Ceremonia wręczenia nagród odbywa się jutro wieczorem", exampleTranslation: "La ceremonia de entrega de premios es mañana por la noche" },
      { id: "award7", polish: "Wyróżnienie", spanish: "Distinción", difficulty: "medium", example: "Otrzymałem wyróżnienie za wybitne osiągnięcia", exampleTranslation: "Recibí una distinción por logros destacados" },
      { id: "award8", polish: "Rekord", spanish: "Récord", difficulty: "medium", example: "Pobił rekord świata w tej dyscyplinie sportu", exampleTranslation: "Batió el récord mundial en esta disciplina deportiva" },
      { id: "award9", polish: "Osiągnięcie", spanish: "Logro", difficulty: "medium", example: "To największe osiągnięcie mojego życia zawodowego", exampleTranslation: "Este es el mayor logro de mi vida profesional" },
      { id: "award10", polish: "Uznanie", spanish: "Reconocimiento", difficulty: "medium", example: "Jego praca otrzymała międzynarodowe uznanie", exampleTranslation: "Su trabajo recibió reconocimiento internacional" },
      { id: "award11", polish: "Puchary", spanish: "Copas", difficulty: "medium", example: "Szafa pełna pucharów i trofeów ze wszystkich lat", exampleTranslation: "El armario lleno de copas y trofeos de todos los años" },
      { id: "award12", polish: "Gratulacje", spanish: "Felicitaciones", difficulty: "medium", example: "Gratulacje dla wszystkich zwycięzców konkursu", exampleTranslation: "Felicitaciones para todos los ganadores del concurso" },
      { id: "award13", polish: "Jestem z ciebie dumny", spanish: "Estoy orgulloso de ti", difficulty: "hard", example: "Jestem bardzo dumny z ciebie za to osiągnięcie", exampleTranslation: "Estoy muy orgulloso de ti por este logro" },
      { id: "award14", polish: "Wygrałem!", spanish: "¡Gané!", difficulty: "hard", example: "Wygrałem pierwszy miejsce w tym trudnym konkursie!", exampleTranslation: "¡Gané el primer lugar en este concurso difícil!" },
      { id: "award15", polish: "To zasługa twojej ciężkiej pracy", spanish: "Es mérito de tu trabajo duro", difficulty: "hard", example: "Ten sukces to zasługa wyłącznie twojej ciężkiej pracy", exampleTranslation: "Este éxito es mérito exclusivamente de tu trabajo duro" }
    ]
  },

  ideas_creativity: {
    name: "Pomysły i kreatywność",
    description: "Twórczość i innowacje",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "idea1", polish: "Pomysł", spanish: "Idea", difficulty: "easy", example: "Mam świetny pomysł na nowy projekt biznesowy", exampleTranslation: "Tengo una idea excelente para un nuevo proyecto de negocio" },
      { id: "idea2", polish: "Wyobraźnia", spanish: "Imaginación", difficulty: "easy", example: "Dzieci mają nieograniczoną wyobraźnię", exampleTranslation: "Los niños tienen imaginación ilimitada" },
      { id: "idea3", polish: "Innowacja", spanish: "Innovación", difficulty: "easy", example: "Innowacja technologiczna zmienia nasze życie", exampleTranslation: "La innovación tecnológica cambia nuestra vida" },
      { id: "idea4", polish: "Projekt", spanish: "Proyecto", difficulty: "easy", example: "Pracuję nad nowym kreatywnym projektem", exampleTranslation: "Trabajo en un nuevo proyecto creativo" },
      { id: "idea5", polish: "Rozwiązanie", spanish: "Solución", difficulty: "easy", example: "Znalazłem proste rozwiązanie skomplikowanego problemu", exampleTranslation: "Encontré una solución simple a un problema complicado" },
      { id: "idea6", polish: "Inspiracja", spanish: "Inspiración", difficulty: "easy", example: "Szukam inspiracji do mojego następnego projektu", exampleTranslation: "Busco inspiración para mi próximo proyecto" },
      { id: "idea7", polish: "Burza mózgów", spanish: "Lluvia de ideas", difficulty: "medium", example: "Robimy burzę mózgów żeby znaleźć nowe pomysły", exampleTranslation: "Hacemos lluvia de ideas para encontrar nuevas ideas" },
      { id: "idea8", polish: "Koncepcja", spanish: "Concepto", difficulty: "medium", example: "Koncepcja tego produktu jest innowacyjna", exampleTranslation: "El concepto de este producto es innovador" },
      { id: "idea9", polish: "Wynalazek", spanish: "Invento", difficulty: "medium", example: "Ten wynalazek może zmienić świat na lepsze", exampleTranslation: "Este invento puede cambiar el mundo para mejor" },
      { id: "idea10", polish: "Oryginalność", spanish: "Originalidad", difficulty: "medium", example: "Oryginalność jest kluczem do sukcesu w sztuce", exampleTranslation: "La originalidad es la clave del éxito en el arte" },
      { id: "idea11", polish: "Prototyp", spanish: "Prototipo", difficulty: "medium", example: "Stworzyliśmy pierwszy prototyp naszego urządzenia", exampleTranslation: "Creamos el primer prototipo de nuestro dispositivo" },
      { id: "idea12", polish: "Patent", spanish: "Patente", difficulty: "medium", example: "Zdobyliśmy patent na naszą innowację", exampleTranslation: "Obtuvimos la patente para nuestra innovación" },
      { id: "idea13", polish: "Mam świetny pomysł", spanish: "Tengo una idea genial", difficulty: "hard", example: "Mam świetny pomysł jak rozwiązać ten problem", exampleTranslation: "Tengo una idea genial de cómo resolver este problema" },
      { id: "idea14", polish: "Pomyśl kreatywnie", spanish: "Piensa creativamente", difficulty: "hard", example: "Pomyśl kreatywnie i znajdziesz rozwiązanie", exampleTranslation: "Piensa creativamente y encontrarás la solución" },
      { id: "idea15", polish: "Co o tym myślisz?", spanish: "¿Qué opinas de esto?", difficulty: "hard", example: "Co o tym myślisz? Chciałbym poznać twoją opinię", exampleTranslation: "¿Qué opinas de esto? Me gustaría conocer tu opinión" }
    ]
  },

  conversations: {
    name: "Rozmowy codzienne",
    description: "Codzienne konwersacje",
    icon: MessageCircle,
    color: "from-blue-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "conv1", polish: "Rozmawiać", spanish: "Conversar", difficulty: "easy", example: "Lubię rozmawiać z ludźmi o różnych tematach", exampleTranslation: "Me gusta conversar con la gente sobre diferentes temas" },
      { id: "conv2", polish: "Pytać", spanish: "Preguntar", difficulty: "easy", example: "Nie bój się pytać gdy czegoś nie rozumiesz", exampleTranslation: "No tengas miedo de preguntar cuando no entiendas algo" },
      { id: "conv3", polish: "Odpowiadać", spanish: "Responder", difficulty: "easy", example: "Zawsze staram się odpowiadać szczerze", exampleTranslation: "Siempre intento responder honestamente" },
      { id: "conv4", polish: "Słuchać", spanish: "Escuchar", difficulty: "easy", example: "Ważne jest słuchać innych uważnie", exampleTranslation: "Es importante escuchar a otros con atención" },
      { id: "conv5", polish: "Opowiadać", spanish: "Contar", difficulty: "easy", example: "Opowiadam dzieciom bajki przed snem", exampleTranslation: "Cuento cuentos a los niños antes de dormir" },
      { id: "conv6", polish: "Wyjaśniać", spanish: "Explicar", difficulty: "easy", example: "Czy możesz mi to jeszcze raz wyjaśnić?", exampleTranslation: "¿Puedes explicarme esto otra vez?" },
      { id: "conv7", polish: "Zgadzać się", spanish: "Estar de acuerdo", difficulty: "medium", example: "Całkowicie się z tobą zgadzam w tej sprawie", exampleTranslation: "Estoy completamente de acuerdo contigo en este asunto" },
      { id: "conv8", polish: "Nie zgadzać się", spanish: "No estar de acuerdo", difficulty: "medium", example: "Nie zgadzam się z tą opinią ale ją szanuję", exampleTranslation: "No estoy de acuerdo con esta opinión pero la respeto" },
      { id: "conv9", polish: "Dyskusja", spanish: "Discusión", difficulty: "medium", example: "Mieliśmy długą dyskusję o polityce", exampleTranslation: "Tuvimos una larga discusión sobre política" },
      { id: "conv10", polish: "Opinia", spanish: "Opinión", difficulty: "medium", example: "Każdy ma prawo do swojej opinii", exampleTranslation: "Cada uno tiene derecho a su opinión" },
      { id: "conv11", polish: "Pogawędka", spanish: "Charla", difficulty: "medium", example: "Lubimy pogawędkę przy kawie w weekendy", exampleTranslation: "Nos gusta la charla con café los fines de semana" },
      { id: "conv12", polish: "Temat", spanish: "Tema", difficulty: "medium", example: "To interesujący temat do rozmowy", exampleTranslation: "Es un tema interesante para conversar" },
      { id: "conv13", polish: "Co o tym sądzisz?", spanish: "¿Qué piensas de esto?", difficulty: "hard", example: "Co o tym sądzisz? Chciałbym znać twoją opinię", exampleTranslation: "¿Qué piensas de esto? Me gustaría conocer tu opinión" },
      { id: "conv14", polish: "Porozmawiajmy o tym", spanish: "Hablemos de esto", difficulty: "hard", example: "Porozmawiajmy spokojnie o tym problemie jutro", exampleTranslation: "Hablemos tranquilamente de este problema mañana" },
      { id: "conv15", polish: "Rozumiem cię", spanish: "Te entiendo", difficulty: "hard", example: "Rozumiem cię całkowicie, byłem w podobnej sytuacji", exampleTranslation: "Te entiendo completamente, estuve en una situación similar" }
    ]
  },

  desserts: {
    name: "Desery i słodycze",
    description: "Słodkie przysmaki",
    icon: Cookie,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "dess1", polish: "Ciasto", spanish: "Pastel", difficulty: "easy", example: "Ciasto czekoladowe jest moim ulubionym deserem", exampleTranslation: "El pastel de chocolate es mi postre favorito" },
      { id: "dess2", polish: "Lody", spanish: "Helado", difficulty: "easy", example: "Lody waniliowe są orzeźwiające w gorące dni", exampleTranslation: "El helado de vainilla es refrescante en días calurosos" },
      { id: "dess3", polish: "Ciastko", spanish: "Galleta", difficulty: "easy", example: "Babcia piecze najlepsze ciastka owsiane", exampleTranslation: "La abuela hornea las mejores galletas de avena" },
      { id: "dess4", polish: "Czekolada", spanish: "Chocolate", difficulty: "easy", example: "Czekolada gorzka jest zdrowsza niż mleczna", exampleTranslation: "El chocolate amargo es más saludable que el de leche" },
      { id: "dess5", polish: "Cukierek", spanish: "Caramelo", difficulty: "easy", example: "Dzieci dostały cukierki za dobre zachowanie", exampleTranslation: "Los niños recibieron caramelos por buen comportamiento" },
      { id: "dess6", polish: "Tarta", spanish: "Tarta", difficulty: "easy", example: "Tarta jabłkowa pachnie cudownie świeżo z pieca", exampleTranslation: "La tarta de manzana huele maravillosamente fresca del horno" },
      { id: "dess7", polish: "Budyń", spanish: "Pudín", difficulty: "medium", example: "Budyń czekoladowy jest kremowy i pyszny", exampleTranslation: "El pudín de chocolate es cremoso y delicioso" },
      { id: "dess8", polish: "Sernik", spanish: "Tarta de queso", difficulty: "medium", example: "Polski sernik jest słynny na całym świecie", exampleTranslation: "La tarta de queso polaca es famosa en todo el mundo" },
      { id: "dess9", polish: "Pączek", spanish: "Donut", difficulty: "medium", example: "Pączki z dżemem są tradycyjne w tłusty czwartek", exampleTranslation: "Los donuts con mermelada son tradicionales en jueves de carnaval" },
      { id: "dess10", polish: "Babeczka", spanish: "Magdalena", difficulty: "medium", example: "Babeczki z polewą są idealne na przyjęcie", exampleTranslation: "Las magdalenas con cobertura son ideales para la fiesta" },
      { id: "dess11", polish: "Brownie", spanish: "Brownie", difficulty: "medium", example: "Brownie czekoladowe są wilgotne i pyszne", exampleTranslation: "Los brownies de chocolate son húmedos y deliciosos" },
      { id: "dess12", polish: "Tiramisu", spanish: "Tiramisú", difficulty: "medium", example: "Włoskie tiramisu to mój ulubiony deser kawowy", exampleTranslation: "El tiramisú italiano es mi postre de café favorito" },
      { id: "dess13", polish: "Uwielbiam słodycze", spanish: "Me encantan los dulces", difficulty: "hard", example: "Uwielbiam słodycze ale staram się jeść je z umiarem", exampleTranslation: "Me encantan los dulces pero intento comerlos con moderación" },
      { id: "dess14", polish: "To jest za słodkie", spanish: "Es demasiado dulce", difficulty: "hard", example: "To ciasto jest dla mnie za słodkie, wolę mniej cukru", exampleTranslation: "Este pastel es demasiado dulce para mí, prefiero menos azúcar" },
      { id: "dess15", polish: "Chcesz deser?", spanish: "¿Quieres postre?", difficulty: "hard", example: "Chcesz deser po obiedzie czy wolisz kawę?", exampleTranslation: "¿Quieres postre después de la comida o prefieres café?" }
    ]
  },

  opinions_beliefs: {
    name: "Opinie i przekonania",
    description: "Wyrażanie poglądów",
    icon: MessageCircle,
    color: "from-teal-400 to-cyan-500",
    level: "advanced",
    words: [
      { id: "opin1", polish: "Myślę że", spanish: "Creo que", difficulty: "easy", example: "Myślę że edukacja jest najważniejsza dla przyszłości", exampleTranslation: "Creo que la educación es lo más importante para el futuro" },
      { id: "opin2", polish: "W mojej opinii", spanish: "En mi opinión", difficulty: "easy", example: "W mojej opinii to najlepsze rozwiązanie problemu", exampleTranslation: "En mi opinión esta es la mejor solución al problema" },
      { id: "opin3", polish: "Zgadzam się", spanish: "Estoy de acuerdo", difficulty: "easy", example: "Całkowicie się zgadzam z twoim punktem widzenia", exampleTranslation: "Estoy completamente de acuerdo con tu punto de vista" },
      { id: "opin4", polish: "Nie zgadzam się", spanish: "No estoy de acuerdo", difficulty: "easy", example: "Nie zgadzam się z tą decyzją ale ją akceptuję", exampleTranslation: "No estoy de acuerdo con esta decisión pero la acepto" },
      { id: "opin5", polish: "Uważam że", spanish: "Considero que", difficulty: "easy", example: "Uważam że każdy zasługuje na szacunek", exampleTranslation: "Considero que cada persona merece respeto" },
      { id: "opin6", polish: "Wierzę w", spanish: "Creo en", difficulty: "easy", example: "Wierzę w uczciwość i szczerość w relacjach", exampleTranslation: "Creo en la honestidad y sinceridad en las relaciones" },
      { id: "opin7", polish: "Według mnie", spanish: "Según yo", difficulty: "medium", example: "Według mnie najważniejsze jest zdrowie rodziny", exampleTranslation: "Según yo lo más importante es la salud de la familia" },
      { id: "opin8", polish: "Jestem przekonany", spanish: "Estoy convencido", difficulty: "medium", example: "Jestem przekonany że to właściwa droga", exampleTranslation: "Estoy convencido de que este es el camino correcto" },
      { id: "opin9", polish: "Wątpię w to", spanish: "Lo dudo", difficulty: "medium", example: "Szczerze wątpię w powodzenie tego planu", exampleTranslation: "Sinceramente lo dudo el éxito de este plan" },
      { id: "opin10", polish: "Argument", spanish: "Argumento", difficulty: "medium", example: "Twój argument jest przekonujący i logiczny", exampleTranslation: "Tu argumento es convincente y lógico" },
      { id: "opin11", polish: "Punkt widzenia", spanish: "Punto de vista", difficulty: "medium", example: "Rozumiem twój punkt widzenia choć się nie zgadzam", exampleTranslation: "Entiendo tu punto de vista aunque no esté de acuerdo" },
      { id: "opin12", polish: "Perspektywa", spanish: "Perspectiva", difficulty: "medium", example: "Z mojej perspektywy sytuacja wygląda inaczej", exampleTranslation: "Desde mi perspectiva la situación se ve diferente" },
      { id: "opin13", polish: "Co sądzisz o...?", spanish: "¿Qué opinas sobre...?", difficulty: "hard", example: "Co sądzisz o obecnej sytuacji politycznej?", exampleTranslation: "¿Qué opinas sobre la situación política actual?" },
      { id: "opin14", polish: "Masz rację", spanish: "Tienes razón", difficulty: "hard", example: "Masz całkowitą rację w tej kwestii", exampleTranslation: "Tienes toda la razón en este asunto" },
      { id: "opin15", polish: "Nie jestem pewien", spanish: "No estoy seguro", difficulty: "hard", example: "Nie jestem całkowicie pewien czy to dobry pomysł", exampleTranslation: "No estoy completamente seguro si es una buena idea" }
    ]
  },

  friendship: {
    name: "Przyjaźń",
    description: "Przyjaciele i relacje",
    icon: Users,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "friend1", polish: "Przyjaciel", spanish: "Amigo", difficulty: "easy", example: "Mój najlepszy przyjaciel zna mnie od dzieciństwa", exampleTranslation: "Mi mejor amigo me conoce desde la infancia" },
      { id: "friend2", polish: "Przyjaźń", spanish: "Amistad", difficulty: "easy", example: "Nasza przyjaźń trwa już dwadzieścia lat", exampleTranslation: "Nuestra amistad dura ya veinte años" },
      { id: "friend3", polish: "Zaufanie", spanish: "Confianza", difficulty: "easy", example: "Zaufanie jest podstawą każdej przyjaźni", exampleTranslation: "La confianza es la base de toda amistad" },
      { id: "friend4", polish: "Lojalność", spanish: "Lealtad", difficulty: "easy", example: "Lojalność wobec przyjaciół jest bardzo ważna", exampleTranslation: "La lealtad hacia los amigos es muy importante" },
      { id: "friend5", polish: "Wsparcie", spanish: "Apoyo", difficulty: "easy", example: "Przyjaciele dają wsparcie w trudnych chwilach", exampleTranslation: "Los amigos dan apoyo en momentos difíciles" },
      { id: "friend6", polish: "Spotkanie", spanish: "Encuentro", difficulty: "easy", example: "Organizujemy spotkanie przyjaciół w sobotę", exampleTranslation: "Organizamos un encuentro de amigos el sábado" },
      { id: "friend7", polish: "Kumpel", spanish: "Compañero", difficulty: "medium", example: "To mój stary kumpel ze szkoły średniej", exampleTranslation: "Es mi viejo compañero de la escuela secundaria" },
      { id: "friend8", polish: "Szczery", spanish: "Sincero", difficulty: "medium", example: "Prawdziwy przyjaciel jest zawsze szczery", exampleTranslation: "Un verdadero amigo siempre es sincero" },
      { id: "friend9", polish: "Pomocny", spanish: "Servicial", difficulty: "medium", example: "Mój przyjaciel jest bardzo pomocny w każdej sytuacji", exampleTranslation: "Mi amigo es muy servicial en cualquier situación" },
      { id: "friend10", polish: "Sekrety", spanish: "Secretos", difficulty: "medium", example: "Dzielimy się sekretami bo sobie ufamy", exampleTranslation: "Compartimos secretos porque confiamos el uno en el otro" },
      { id: "friend11", polish: "Wspomnienia", spanish: "Recuerdos", difficulty: "medium", example: "Mamy wspaniałe wspomnienia z naszych wspólnych podróży", exampleTranslation: "Tenemos recuerdos maravillosos de nuestros viajes juntos" },
      { id: "friend12", polish: "Poznać kogoś", spanish: "Conocer a alguien", difficulty: "medium", example: "Chciałbym poznać nowych ludzi i zaprzyjaźnić się", exampleTranslation: "Me gustaría conocer a gente nueva y hacer amistad" },
      { id: "friend13", polish: "Jesteśmy najlepszymi przyjaciółmi", spanish: "Somos mejores amigos", difficulty: "hard", example: "Jesteśmy najlepszymi przyjaciółmi od podstawówki", exampleTranslation: "Somos mejores amigos desde la primaria" },
      { id: "friend14", polish: "Możesz na mnie liczyć", spanish: "Puedes contar conmigo", difficulty: "hard", example: "Zawsze możesz na mnie liczyć w każdej sytuacji", exampleTranslation: "Siempre puedes contar conmigo en cualquier situación" },
      { id: "friend15", polish: "Tęsknię za tobą", spanish: "Te echo de menos", difficulty: "hard", example: "Bardzo za tobą tęsknię odkąd się przeprowadziłeś", exampleTranslation: "Te echo mucho de menos desde que te mudaste" }
    ]
  },

  feelings: {
    name: "Uczucia i nastroje",
    description: "Różne uczucia i emocje",
    icon: Heart,
    color: "from-rose-400 to-pink-600",
    level: "intermediate",
    words: [
      { id: "feel1", polish: "Radość", spanish: "Alegría", difficulty: "easy", example: "Czuję wielką radość gdy jestem z rodziną", exampleTranslation: "Siento gran alegría cuando estoy con mi familia" },
      { id: "feel2", polish: "Miłość", spanish: "Amor", difficulty: "easy", example: "Miłość rodziców jest bezwarunkowa i wieczna", exampleTranslation: "El amor de los padres es incondicional y eterno" },
      { id: "feel3", polish: "Strach", spanish: "Miedo", difficulty: "easy", example: "Mam strach przed wysokościami od dziecka", exampleTranslation: "Tengo miedo de las alturas desde niño" },
      { id: "feel4", polish: "Złość", spanish: "Enojo", difficulty: "easy", example: "Złość czasami przeszkadza w jasnym myśleniu", exampleTranslation: "El enojo a veces interfiere con el pensamiento claro" },
      { id: "feel5", polish: "Niespodzianka", spanish: "Sorpresa", difficulty: "easy", example: "Niespodzianka urodzinowa była całkowitym zaskoczeniem", exampleTranslation: "La sorpresa de cumpleaños fue una sorpresa total" },
      { id: "feel6", polish: "Nadzieja", spanish: "Esperanza", difficulty: "easy", example: "Nigdy nie tracę nadziei w trudnych czasach", exampleTranslation: "Nunca pierdo la esperanza en tiempos difíciles" },
      { id: "feel7", polish: "Niepokój", spanish: "Ansiedad", difficulty: "medium", example: "Niepokój przed egzaminem jest normalny", exampleTranslation: "La ansiedad antes del examen es normal" },
      { id: "feel8", polish: "Ulga", spanish: "Alivio", difficulty: "medium", example: "Poczułem ulgę gdy dowiedziałem się dobrych wiadomości", exampleTranslation: "Sentí alivio cuando me enteré de las buenas noticias" },
      { id: "feel9", polish: "Frustracja", spanish: "Frustración", difficulty: "medium", example: "Frustracja może być okazją do nauki", exampleTranslation: "La frustración puede ser una oportunidad para aprender" },
      { id: "feel10", polish: "Zazdrość", spanish: "Celos", difficulty: "medium", example: "Zazdrość może zniszczyć każdy związek", exampleTranslation: "Los celos pueden destruir cualquier relación" },
      { id: "feel11", polish: "Wina", spanish: "Culpa", difficulty: "medium", example: "Czuję winę że nie mogłem tam być", exampleTranslation: "Siento culpa por no haber podido estar allí" },
      { id: "feel12", polish: "Wstyd", spanish: "Vergüenza", difficulty: "medium", example: "Poczułem wstyd gdy zdałem sobie sprawę z błędu", exampleTranslation: "Sentí vergüenza cuando me di cuenta del error" },
      { id: "feel13", polish: "Jestem przytłoczony emocjami", spanish: "Estoy abrumado por la emoción", difficulty: "hard", example: "Jestem całkowicie przytłoczony emocjami w tym momencie", exampleTranslation: "Estoy completamente abrumado por la emoción en este momento" },
      { id: "feel14", polish: "To łamie mi serce", spanish: "Me rompe el corazón", difficulty: "hard", example: "To łamie mi serce widzieć tyle cierpienia na świecie", exampleTranslation: "Me rompe el corazón ver tanto sufrimiento en el mundo" },
      { id: "feel15", polish: "Jestem pełen wdzięczności", spanish: "Estoy lleno de gratitud", difficulty: "hard", example: "Jestem pełen wdzięczności za całe wsparcie które otrzymałem", exampleTranslation: "Estoy lleno de gratitud por todo el apoyo que recibí" }
    ]
  },

  celebrations: {
    name: "Święta i uroczystości",
    description: "Święta i specjalne okazje",
    icon: Calendar,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "celeb1", polish: "Święto", spanish: "Fiesta", difficulty: "easy", example: "Święto narodowe to dzień wolny od pracy", exampleTranslation: "La fiesta nacional es un día libre del trabajo" },
      { id: "celeb2", polish: "Boże Narodzenie", spanish: "Navidad", difficulty: "easy", example: "Boże Narodzenie to najważniejsze święto rodzinne", exampleTranslation: "La Navidad es la fiesta familiar más importante" },
      { id: "celeb3", polish: "Urodziny", spanish: "Cumpleaños", difficulty: "easy", example: "Moje urodziny są piętnastego czerwca każdego roku", exampleTranslation: "Mi cumpleaños es el quince de junio cada año" },
      { id: "celeb4", polish: "Nowy Rok", spanish: "Año Nuevo", difficulty: "easy", example: "Nowy Rok witamy z szampanem i fajerwerkami", exampleTranslation: "Recibimos el Año Nuevo con champán y fuegos artificiales" },
      { id: "celeb5", polish: "Wielkanoc", spanish: "Pascua", difficulty: "easy", example: "Na Wielkanoc malujemy jajka i pieczemy ciasta", exampleTranslation: "En Pascua pintamos huevos y horneamos pasteles" },
      { id: "celeb6", polish: "Prezent", spanish: "Regalo", difficulty: "easy", example: "Kupiłem specjalny prezent na urodziny", exampleTranslation: "Compré un regalo especial para el cumpleaños" },
      { id: "celeb7", polish: "Tort", spanish: "Pastel", difficulty: "medium", example: "Tort urodzinowy ma dziesięć świeczek", exampleTranslation: "El pastel de cumpleaños tiene diez velas" },
      { id: "celeb8", polish: "Dekoracje", spanish: "Decoraciones", difficulty: "medium", example: "Dekoracje świąteczne wyglądają pięknie w nocy", exampleTranslation: "Las decoraciones navideñas se ven hermosas de noche" },
      { id: "celeb9", polish: "Tradycja", spanish: "Tradición", difficulty: "medium", example: "Każda rodzina ma swoje własne tradycje świąteczne", exampleTranslation: "Cada familia tiene sus propias tradiciones navideñas" },
      { id: "celeb10", polish: "Fajerwerki", spanish: "Fuegos artificiales", difficulty: "medium", example: "Fajerwerki oświetlają niebo o północy", exampleTranslation: "Los fuegos artificiales iluminan el cielo a medianoche" },
      { id: "celeb11", polish: "Świętować", spanish: "Celebrar", difficulty: "medium", example: "Świętujemy każde ważne osiągnięcie razem", exampleTranslation: "Celebramos cada logro importante juntos" },
      { id: "celeb12", polish: "Rocznica", spanish: "Aniversario", difficulty: "medium", example: "To nasza dziesiąta rocznica ślubu", exampleTranslation: "Es nuestro décimo aniversario de bodas" },
      { id: "celeb13", polish: "Jak świętujecie?", spanish: "¿Cómo celebran?", difficulty: "hard", example: "Jak świętujecie Boże Narodzenie w waszej rodzinie?", exampleTranslation: "¿Cómo celebran la Navidad en su familia?" },
      { id: "celeb14", polish: "To tradycja rodzinna", spanish: "Es una tradición familiar", difficulty: "hard", example: "Wspólne gotowanie to tradycja rodzinna od pokoleń", exampleTranslation: "Cocinar juntos es una tradición familiar desde generaciones" },
      { id: "celeb15", polish: "Wesołych świąt!", spanish: "¡Felices fiestas!", difficulty: "hard", example: "Wesołych świąt dla ciebie i całej twojej rodziny!", exampleTranslation: "¡Felices fiestas para ti y toda tu familia!" }
    ]
  },

  actions_activities: {
    name: "Działania i czynności",
    description: "Podstawowe czasowniki akcji",
    icon: Target,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "act1", polish: "Robić", spanish: "Hacer", difficulty: "easy", example: "Co robisz dzisiaj wieczorem po pracy?", exampleTranslation: "¿Qué haces esta noche después del trabajo?" },
      { id: "act2", polish: "Mówić", spanish: "Hablar", difficulty: "easy", example: "Mówię po polsku i po angielsku płynnie", exampleTranslation: "Hablo polaco e inglés con fluidez" },
      { id: "act3", polish: "Pisać", spanish: "Escribir", difficulty: "easy", example: "Piszę w dzienniku codziennie przed snem", exampleTranslation: "Escribo en el diario todos los días antes de dormir" },
      { id: "act4", polish: "Czytać", spanish: "Leer", difficulty: "easy", example: "Czytam książki każdego wieczoru dla relaksu", exampleTranslation: "Leo libros cada noche para relajarme" },
      { id: "act5", polish: "Patrzeć", spanish: "Mirar", difficulty: "easy", example: "Patrzę przez okno na piękny zachód słońca", exampleTranslation: "Miro por la ventana el hermoso atardecer" },
      { id: "act6", polish: "Słuchać", spanish: "Escuchar", difficulty: "easy", example: "Słucham uważnie gdy ktoś do mnie mówi", exampleTranslation: "Escucho con atención cuando alguien me habla" },
      { id: "act7", polish: "Myśleć", spanish: "Pensar", difficulty: "medium", example: "Myślę o przyszłości i swoich planach", exampleTranslation: "Pienso en el futuro y mis planes" },
      { id: "act8", polish: "Czuć", spanish: "Sentir", difficulty: "medium", example: "Czuję się szczęśliwy gdy jestem z przyjaciółmi", exampleTranslation: "Me siento feliz cuando estoy con amigos" },
      { id: "act9", polish: "Rozumieć", spanish: "Entender", difficulty: "medium", example: "Rozumiem trudną sytuację w jakiej się znajdujesz", exampleTranslation: "Entiendo la situación difícil en la que te encuentras" },
      { id: "act10", polish: "Uczyć się", spanish: "Aprender", difficulty: "medium", example: "Uczę się nowego języka przez pół roku", exampleTranslation: "Aprendo un idioma nuevo desde hace medio año" },
      { id: "act11", polish: "Próbować", spanish: "Intentar", difficulty: "medium", example: "Próbuję być lepszą osobą każdego dnia", exampleTranslation: "Intento ser mejor persona cada día" },
      { id: "act12", polish: "Pomagać", spanish: "Ayudar", difficulty: "medium", example: "Pomagam ludziom gdy tylko mogę", exampleTranslation: "Ayudo a la gente siempre que puedo" },
      { id: "act13", polish: "Co teraz robisz?", spanish: "¿Qué estás haciendo ahora?", difficulty: "hard", example: "Co właśnie robisz? Mogę ci jakoś pomóc?", exampleTranslation: "¿Qué estás haciendo ahora? ¿Puedo ayudarte de alguna manera?" },
      { id: "act14", polish: "Próbuję zrozumieć", spanish: "Intento entender", difficulty: "hard", example: "Próbuję zrozumieć twoją perspektywę w tej sprawie", exampleTranslation: "Intento entender tu perspectiva en este asunto" },
      { id: "act15", polish: "Nigdy nie przestanę", spanish: "Nunca dejaré de", difficulty: "hard", example: "Nigdy nie przestanę się uczyć nowych rzeczy", exampleTranslation: "Nunca dejaré de aprender cosas nuevas" }
    ]
  },

  questions_asking: {
    name: "Pytania i zapytania",
    description: "Zadawanie pytań",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "quest1", polish: "Kto?", spanish: "¿Quién?", difficulty: "easy", example: "Kto jest odpowiedzialny za ten projekt?", exampleTranslation: "¿Quién es responsable de este proyecto?" },
      { id: "quest2", polish: "Co?", spanish: "¿Qué?", difficulty: "easy", example: "Co robisz dzisiaj po południu?", exampleTranslation: "¿Qué haces esta tarde?" },
      { id: "quest3", polish: "Gdzie?", spanish: "¿Dónde?", difficulty: "easy", example: "Gdzie jest najbliższy bankomat?", exampleTranslation: "¿Dónde está el cajero automático más cercano?" },
      { id: "quest4", polish: "Kiedy?", spanish: "¿Cuándo?", difficulty: "easy", example: "Kiedy zaczyna się film w kinie?", exampleTranslation: "¿Cuándo empieza la película en el cine?" },
      { id: "quest5", polish: "Dlaczego?", spanish: "¿Por qué?", difficulty: "easy", example: "Dlaczego nie przyszedłeś wczoraj na spotkanie?", exampleTranslation: "¿Por qué no viniste ayer a la reunión?" },
      { id: "quest6", polish: "Jak?", spanish: "¿Cómo?", difficulty: "easy", example: "Jak dojechać stąd do centrum miasta?", exampleTranslation: "¿Cómo llegar desde aquí al centro de la ciudad?" },
      { id: "quest7", polish: "Ile?", spanish: "¿Cuánto?", difficulty: "medium", example: "Ile kosztuje bilet na ten pociąg?", exampleTranslation: "¿Cuánto cuesta el boleto para este tren?" },
      { id: "quest8", polish: "Który?", spanish: "¿Cuál?", difficulty: "medium", example: "Który autobus jedzie do dworca?", exampleTranslation: "¿Cuál autobús va a la estación?" },
      { id: "quest9", polish: "Czyj?", spanish: "¿De quién?", difficulty: "medium", example: "Czyj to jest telefon leżący na stole?", exampleTranslation: "¿De quién es este teléfono que está en la mesa?" },
      { id: "quest10", polish: "Jaki?", spanish: "¿Qué tipo de?", difficulty: "medium", example: "Jaki rodzaj muzyki najbardziej lubisz słuchać?", exampleTranslation: "¿Qué tipo de música te gusta escuchar más?" },
      { id: "quest11", polish: "O której?", spanish: "¿A qué hora?", difficulty: "medium", example: "O której godzinie zaczyna się spotkanie?", exampleTranslation: "¿A qué hora empieza la reunión?" },
      { id: "quest12", polish: "Jak długo?", spanish: "¿Cuánto tiempo?", difficulty: "medium", example: "Jak długo mieszkasz w tym mieście?", exampleTranslation: "¿Cuánto tiempo vives en esta ciudad?" },
      { id: "quest13", polish: "Czy mógłbyś mi powiedzieć?", spanish: "¿Podrías decirme?", difficulty: "hard", example: "Czy mógłbyś mi powiedzieć gdzie jest dworzec?", exampleTranslation: "¿Podrías decirme dónde está la estación?" },
      { id: "quest14", polish: "Chciałbym zapytać", spanish: "Quisiera preguntar", difficulty: "hard", example: "Chciałbym zapytać o szczegóły tej oferty", exampleTranslation: "Quisiera preguntar sobre los detalles de esta oferta" },
      { id: "quest15", polish: "Mam pytanie", spanish: "Tengo una pregunta", difficulty: "hard", example: "Mam ważne pytanie dotyczące tego projektu", exampleTranslation: "Tengo una pregunta importante sobre este proyecto" }
    ]
  }
};
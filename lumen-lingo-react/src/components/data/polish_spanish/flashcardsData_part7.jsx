/**
 * POLISH → SPANISH FLASHCARDS - PART 7
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (87-96).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Mail,
  Flower2,
  PawPrint,
  Smartphone,
  Film,
  Armchair,
  ChefHat,
  Calendar,
  Package,
  Dumbbell
} from "lucide-react";

export const flashcardsCategories_part7 = {
  post_office_mail: {
    name: "Poczta i przesyłki",
    description: "Usługi pocztowe",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "post1", polish: "Poczta", spanish: "Correo", difficulty: "easy", example: "Idę na pocztę wysłać paczkę do mojej siostry", exampleTranslation: "Voy al correo a enviar un paquete a mi hermana" },
      { id: "post2", polish: "List", spanish: "Carta", difficulty: "easy", example: "Napisałem długi list do babci opisując moje życie", exampleTranslation: "Escribí una carta larga a la abuela describiendo mi vida" },
      { id: "post3", polish: "Paczka", spanish: "Paquete", difficulty: "easy", example: "Paczka z książkami przyjdzie za dwa dni", exampleTranslation: "El paquete con libros llegará en dos días" },
      { id: "post4", polish: "Koperta", spanish: "Sobre", difficulty: "easy", example: "Włożyłem list do koperty i naklejłem znaczek", exampleTranslation: "Puse la carta en el sobre y pegué el sello" },
      { id: "post5", polish: "Znaczek", spanish: "Sello", difficulty: "easy", example: "Ten znaczek pocztowy kosztuje pięć złotych", exampleTranslation: "Este sello postal cuesta cinco zlotys" },
      { id: "post6", polish: "Nadawca", spanish: "Remitente", difficulty: "easy", example: "Napisz adres nadawcy na odwrocie koperty", exampleTranslation: "Escribe la dirección del remitente en el reverso del sobre" },
      { id: "post7", polish: "Odbiorca", spanish: "Destinatario", difficulty: "medium", example: "Adres odbiorcy musi być napisany wyraźnie i czytelnie", exampleTranslation: "La dirección del destinatario debe estar escrita clara y legiblemente" },
      { id: "post8", polish: "Przesyłka", spanish: "Envío", difficulty: "medium", example: "Przesyłka została wysłana pocztą priorytetową", exampleTranslation: "El envío fue mandado por correo prioritario" },
      { id: "post9", polish: "Kod pocztowy", spanish: "Código postal", difficulty: "medium", example: "Nie zapomnij dopisać kodu pocztowego na kopercie", exampleTranslation: "No olvides añadir el código postal en el sobre" },
      { id: "post10", polish: "Potwierdzenie odbioru", spanish: "Acuse de recibo", difficulty: "medium", example: "Wysłałem list z potwierdzeniem odbioru dla bezpieczeństwa", exampleTranslation: "Envié la carta con acuse de recibo por seguridad" },
      { id: "post11", polish: "Skrzynka pocztowa", spanish: "Buzón", difficulty: "medium", example: "Wrzuć list do żółtej skrzynki pocztowej na rogu", exampleTranslation: "Echa la carta en el buzón amarillo de la esquina" },
      { id: "post12", polish: "Dostawa", spanish: "Entrega", difficulty: "medium", example: "Dostawa paczki jest przewidziana na jutro rano", exampleTranslation: "La entrega del paquete está prevista para mañana por la mañana" },
      { id: "post13", polish: "Kiedy przyjdzie paczka?", spanish: "¿Cuándo llega el paquete?", difficulty: "hard", example: "Kiedy dokładnie przyjdzie moja paczka z zagranicy?", exampleTranslation: "¿Cuándo exactamente llega mi paquete del extranjero?" },
      { id: "post14", polish: "Wysłałem to wczoraj", spanish: "Lo envié ayer", difficulty: "hard", example: "Wysłałem to wczoraj pocztą ekspresową z numerem śledzenia", exampleTranslation: "Lo envié ayer por correo express con número de seguimiento" },
      { id: "post15", polish: "Czy mogę śledzić przesyłkę?", spanish: "¿Puedo rastrear el envío?", difficulty: "hard", example: "Czy mogę śledzić moją przesyłkę przez internet?", exampleTranslation: "¿Puedo rastrear mi envío por internet?" }
    ]
  },

  garden_gardening: {
    name: "Ogród i ogrodnictwo",
    description: "Pielęgnacja roślin",
    icon: Flower2,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "gard1", polish: "Ogród", spanish: "Jardín", difficulty: "easy", example: "Mój ogród jest pełen kolorowych kwiatów i warzyw", exampleTranslation: "Mi jardín está lleno de flores coloridas y verduras" },
      { id: "gard2", polish: "Kwiat", spanish: "Flor", difficulty: "easy", example: "Ten kwiat pachnie pięknie i ma intensywny kolor", exampleTranslation: "Esta flor huele hermoso y tiene color intenso" },
      { id: "gard3", polish: "Trawa", spanish: "Césped", difficulty: "easy", example: "Koszę trawę w ogrodzie co tydzień regularnie", exampleTranslation: "Corto el césped en el jardín cada semana regularmente" },
      { id: "gard4", polish: "Drzewo", spanish: "Árbol", difficulty: "easy", example: "Posadziliśmy nowe drzewo owocowe w ogrodzie", exampleTranslation: "Plantamos un árbol frutal nuevo en el jardín" },
      { id: "gard5", polish: "Roślina", spanish: "Planta", difficulty: "easy", example: "Ta roślina domowa wymaga dużo światła słonecznego", exampleTranslation: "Esta planta de interior requiere mucha luz solar" },
      { id: "gard6", polish: "Podlewać", spanish: "Regar", difficulty: "easy", example: "Podlewam kwiaty codziennie wieczorem po zachodzie słońca", exampleTranslation: "Riego las flores cada tarde después del atardecer" },
      { id: "gard7", polish: "Nasiona", spanish: "Semillas", difficulty: "medium", example: "Posiałem nasiona pomidorów w małych doniczkach", exampleTranslation: "Sembré semillas de tomates en macetas pequeñas" },
      { id: "gard8", polish: "Doniczka", spanish: "Maceta", difficulty: "medium", example: "Przesadziłem roślinę do większej doniczki ceramicznej", exampleTranslation: "Trasplanté la planta a una maceta de cerámica más grande" },
      { id: "gard9", polish: "Ziemia", spanish: "Tierra", difficulty: "medium", example: "Kupiłem nową ziemię ogrodniczą bogatą w składniki odżywcze", exampleTranslation: "Compré tierra de jardín nueva rica en nutrientes" },
      { id: "gard10", polish: "Łopata", spanish: "Pala", difficulty: "medium", example: "Używam łopaty do kopania dołków pod nowe rośliny", exampleTranslation: "Uso la pala para cavar hoyos para las plantas nuevas" },
      { id: "gard11", polish: "Grabie", spanish: "Rastrillo", difficulty: "medium", example: "Grabię liście w ogrodzie w każdą jesień", exampleTranslation: "Rastrillo las hojas en el jardín cada otoño" },
      { id: "gard12", polish: "Nawóz", spanish: "Fertilizante", difficulty: "medium", example: "Dodaję organiczny nawóz do gleby raz w miesiącu", exampleTranslation: "Añado fertilizante orgánico a la tierra una vez al mes" },
      { id: "gard13", polish: "Rośliny dobrze rosną", spanish: "Las plantas crecen bien", difficulty: "hard", example: "Rośliny dobrze rosną dzięki regularnej pielęgnacji", exampleTranslation: "Las plantas crecen bien gracias al cuidado regular" },
      { id: "gard14", polish: "Kwiaty zakwitły", spanish: "Las flores florecieron", difficulty: "hard", example: "Wszystkie kwiaty w ogrodzie pięknie zakwitły na wiosnę", exampleTranslation: "Todas las flores del jardín florecieron hermosamente en primavera" },
      { id: "gard15", polish: "Muszę przyciąć gałęzie", spanish: "Tengo que podar las ramas", difficulty: "hard", example: "Muszę przyciąć gałęzie tego drzewa bo są za długie", exampleTranslation: "Tengo que podar las ramas de este árbol porque están demasiado largas" }
    ]
  },

  pets_animals: {
    name: "Zwierzęta domowe",
    description: "Pupile i ich opieka",
    icon: PawPrint,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "pet1", polish: "Pies", spanish: "Perro", difficulty: "easy", example: "Mój pies jest bardzo przyjazny i lubi dzieci", exampleTranslation: "Mi perro es muy amigable y le gustan los niños" },
      { id: "pet2", polish: "Kot", spanish: "Gato", difficulty: "easy", example: "Kot śpi przez większość dnia na kanapie", exampleTranslation: "El gato duerme la mayor parte del día en el sofá" },
      { id: "pet3", polish: "Chomik", spanish: "Hámster", difficulty: "easy", example: "Chomik biega w kółku przez całą noc", exampleTranslation: "El hámster corre en la rueda toda la noche" },
      { id: "pet4", polish: "Papuga", spanish: "Loro", difficulty: "easy", example: "Papuga potrafi powtarzać słowa które jej mówimy", exampleTranslation: "El loro puede repetir palabras que le decimos" },
      { id: "pet5", polish: "Królik", spanish: "Conejo", difficulty: "easy", example: "Królik je marchewki i sałatę z ogrodu", exampleTranslation: "El conejo come zanahorias y lechuga del jardín" },
      { id: "pet6", polish: "Rybka", spanish: "Pez", difficulty: "easy", example: "Rybki pływają w akwarium kolorowym jak tęcza", exampleTranslation: "Los peces nadan en el acuario colorido como arcoíris" },
      { id: "pet7", polish: "Karma", spanish: "Comida", difficulty: "medium", example: "Kupuję specjalną karmę dla psów dużych ras", exampleTranslation: "Compro comida especial para perros de razas grandes" },
      { id: "pet8", polish: "Smycz", spanish: "Correa", difficulty: "medium", example: "Wyprowadzam psa na smyczy dwa razy dziennie", exampleTranslation: "Saco al perro con la correa dos veces al día" },
      { id: "pet9", polish: "Weterynarz", spanish: "Veterinario", difficulty: "medium", example: "Zabieram kota do weterynarza na szczepienia", exampleTranslation: "Llevo al gato al veterinario para las vacunas" },
      { id: "pet10", polish: "Miska", spanish: "Tazón", difficulty: "medium", example: "Napełniam miskę psa świeżą wodą każdego ranka", exampleTranslation: "Lleno el tazón del perro con agua fresca cada mañana" },
      { id: "pet11", polish: "Klatka", spanish: "Jaula", difficulty: "medium", example: "Klatka dla papugi musi być przestronna i czysta", exampleTranslation: "La jaula del loro debe ser espaciosa y limpia" },
      { id: "pet12", polish: "Akwarium", spanish: "Acuario", difficulty: "medium", example: "Czyszczę akwarium co dwa tygodnie zmieniając wodę", exampleTranslation: "Limpio el acuario cada dos semanas cambiando el agua" },
      { id: "pet13", polish: "Czy masz zwierzę?", spanish: "¿Tienes mascota?", difficulty: "hard", example: "Czy masz jakieś zwierzę domowe w swoim mieszkaniu?", exampleTranslation: "¿Tienes alguna mascota en tu apartamento?" },
      { id: "pet14", polish: "Mój pies jest chory", spanish: "Mi perro está enfermo", difficulty: "hard", example: "Mój pies jest chory i nie chce jeść od wczoraj", exampleTranslation: "Mi perro está enfermo y no quiere comer desde ayer" },
      { id: "pet15", polish: "Kocham moje zwierzę", spanish: "Amo a mi mascota", difficulty: "hard", example: "Kocham moje zwierzę jak członka rodziny", exampleTranslation: "Amo a mi mascota como miembro de la familia" }
    ]
  },

  devices_electronics: {
    name: "Urządzenia elektroniczne",
    description: "Sprzęt elektroniczny",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "dev1", polish: "Telefon", spanish: "Teléfono", difficulty: "easy", example: "Mój nowy telefon ma doskonały aparat fotograficzny", exampleTranslation: "Mi teléfono nuevo tiene una cámara excelente" },
      { id: "dev2", polish: "Laptop", spanish: "Portátil", difficulty: "easy", example: "Laptop jest lekki i wygodny do pracy w podróży", exampleTranslation: "El portátil es ligero y cómodo para trabajar en viajes" },
      { id: "dev3", polish: "Tablet", spanish: "Tableta", difficulty: "easy", example: "Czytam książki i oglądam filmy na tablecie", exampleTranslation: "Leo libros y veo películas en la tableta" },
      { id: "dev4", polish: "Telewizor", spanish: "Televisor", difficulty: "easy", example: "Telewizor w salonie ma wielki ekran czterdzieści cali", exampleTranslation: "El televisor de la sala tiene una pantalla grande de cuarenta pulgadas" },
      { id: "dev5", polish: "Słuchawki", spanish: "Auriculares", difficulty: "easy", example: "Słuchawki bezprzewodowe są bardzo wygodne do biegania", exampleTranslation: "Los auriculares inalámbricos son muy cómodos para correr" },
      { id: "dev6", polish: "Głośnik", spanish: "Altavoz", difficulty: "easy", example: "Głośnik bluetooth puszcza muzykę w całym domu", exampleTranslation: "El altavoz bluetooth reproduce música en toda la casa" },
      { id: "dev7", polish: "Kamera", spanish: "Cámara", difficulty: "medium", example: "Kamera cyfrowa robi fantastyczne zdjęcia w wysokiej jakości", exampleTranslation: "La cámara digital toma fotos fantásticas en alta calidad" },
      { id: "dev8", polish: "Pilot", spanish: "Control remoto", difficulty: "medium", example: "Gdzie jest pilot od telewizora? Znowu się zgubił", exampleTranslation: "¿Dónde está el control remoto del televisor? Se perdió otra vez" },
      { id: "dev9", polish: "Ładowarka", spanish: "Cargador", difficulty: "medium", example: "Muszę kupić nową ładowarkę bo stara się zepsuła", exampleTranslation: "Tengo que comprar un cargador nuevo porque el viejo se averió" },
      { id: "dev10", polish: "Kabel", spanish: "Cable", difficulty: "medium", example: "Potrzebuję dłuższego kabla do ładowania telefonu", exampleTranslation: "Necesito un cable más largo para cargar el teléfono" },
      { id: "dev11", polish: "Ekran", spanish: "Pantalla", difficulty: "medium", example: "Ekran mojego laptopa jest dotykowy i bardzo jasny", exampleTranslation: "La pantalla de mi portátil es táctil y muy brillante" },
      { id: "dev12", polish: "Klawiatura", spanish: "Teclado", difficulty: "medium", example: "Klawiatura mechaniczna jest głośniejsza ale wygodniejsza", exampleTranslation: "El teclado mecánico es más ruidoso pero más cómodo" },
      { id: "dev13", polish: "Nie mogę się połączyć", spanish: "No puedo conectarme", difficulty: "hard", example: "Nie mogę się połączyć z siecią Wi-Fi od godziny", exampleTranslation: "No puedo conectarme a la red Wi-Fi desde hace una hora" },
      { id: "dev14", polish: "Bateria szybko się rozładowuje", spanish: "La batería se descarga rápido", difficulty: "hard", example: "Bateria w telefonie szybko się rozładowuje i trzeba wymienić", exampleTranslation: "La batería del teléfono se descarga rápido y hay que cambiarla" },
      { id: "dev15", polish: "Jak to skonfigurować?", spanish: "¿Cómo configurarlo?", difficulty: "hard", example: "Kupiłem nowe urządzenie ale nie wiem jak to skonfigurować", exampleTranslation: "Compré un dispositivo nuevo pero no sé cómo configurarlo" }
    ]
  },

  movies_entertainment: {
    name: "Filmy i rozrywka",
    description: "Kino i programy",
    icon: Film,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "mov1", polish: "Film", spanish: "Película", difficulty: "easy", example: "Obejrzałem fantastyczny film w kinie wczoraj wieczorem", exampleTranslation: "Vi una película fantástica en el cine ayer por la noche" },
      { id: "mov2", polish: "Kino", spanish: "Cine", difficulty: "easy", example: "Kino w centrum miasta ma najnowocześniejszy sprzęt", exampleTranslation: "El cine en el centro de la ciudad tiene el equipo más moderno" },
      { id: "mov3", polish: "Serial", spanish: "Serie", difficulty: "easy", example: "Oglądam ten serial od trzech sezonów i uwielbiam fabułę", exampleTranslation: "Veo esta serie desde hace tres temporadas y adoro la trama" },
      { id: "mov4", polish: "Aktor", spanish: "Actor", difficulty: "easy", example: "Ten aktor zagrał świetnie w ostatnim filmie akcji", exampleTranslation: "Este actor actuó excelente en la última película de acción" },
      { id: "mov5", polish: "Reżyser", spanish: "Director", difficulty: "easy", example: "Reżyser tego filmu wygrał wiele nagród filmowych", exampleTranslation: "El director de esta película ganó muchos premios cinematográficos" },
      { id: "mov6", polish: "Fabuła", spanish: "Trama", difficulty: "easy", example: "Fabuła tego filmu jest skomplikowana ale fascynująca", exampleTranslation: "La trama de esta película es complicada pero fascinante" },
      { id: "mov7", polish: "Napisy", spanish: "Subtítulos", difficulty: "medium", example: "Oglądam filmy zagraniczne z napisami po polsku", exampleTranslation: "Veo películas extranjeras con subtítulos en polaco" },
      { id: "mov8", polish: "Dubbing", spanish: "Doblaje", difficulty: "medium", example: "Wolę oryginalne audio niż dubbing w filmach", exampleTranslation: "Prefiero el audio original que el doblaje en las películas" },
      { id: "mov9", polish: "Trailer", spanish: "Tráiler", difficulty: "medium", example: "Trailer nowego filmu wygląda bardzo obiecująco", exampleTranslation: "El tráiler de la nueva película se ve muy prometedor" },
      { id: "mov10", polish: "Premiera", spanish: "Estreno", difficulty: "medium", example: "Premiera filmu jest w przyszły piątek o północy", exampleTranslation: "El estreno de la película es el próximo viernes a medianoche" },
      { id: "mov11", polish: "Bilety", spanish: "Entradas", difficulty: "medium", example: "Kupiłem bilety do kina przez internet z rezerwacją miejsc", exampleTranslation: "Compré entradas para el cine por internet con reserva de asientos" },
      { id: "mov12", polish: "Popcorn", spanish: "Palomitas", difficulty: "medium", example: "Zawsze jem popcorn oglądając filmy w kinie", exampleTranslation: "Siempre como palomitas viendo películas en el cine" },
      { id: "mov13", polish: "Polecasz ten film?", spanish: "¿Recomiendas esta película?", difficulty: "hard", example: "Polecasz ten film czy raczej powinienem obejrzeć inny?", exampleTranslation: "¿Recomiendas esta película o debería ver otra mejor?" },
      { id: "mov14", polish: "Film był wspaniały", spanish: "La película fue maravillosa", difficulty: "hard", example: "Film był absolutnie wspaniały i poruszający do łez", exampleTranslation: "La película fue absolutamente maravillosa y conmovedora hasta las lágrimas" },
      { id: "mov15", polish: "O czym jest ten film?", spanish: "¿De qué trata la película?", difficulty: "hard", example: "O czym dokładnie jest ten nowy film science fiction?", exampleTranslation: "¿De qué exactamente trata esta nueva película de ciencia ficción?" }
    ]
  },

  furniture_home: {
    name: "Meble i wyposażenie",
    description: "Meble w domu",
    icon: Armchair,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "furn1", polish: "Stół", spanish: "Mesa", difficulty: "easy", example: "Stół w jadalni jest wykonany z litego drewna dębowego", exampleTranslation: "La mesa del comedor está hecha de madera de roble maciza" },
      { id: "furn2", polish: "Krzesło", spanish: "Silla", difficulty: "easy", example: "Kupiłem sześć nowych krzeseł do kuchni", exampleTranslation: "Compré seis sillas nuevas para la cocina" },
      { id: "furn3", polish: "Sofa", spanish: "Sofá", difficulty: "easy", example: "Sofa w salonie jest bardzo wygodna i obszerna", exampleTranslation: "El sofá de la sala es muy cómodo y espacioso" },
      { id: "furn4", polish: "Łóżko", spanish: "Cama", difficulty: "easy", example: "Łóżko ma nowy materac który jest bardzo miękki", exampleTranslation: "La cama tiene un colchón nuevo que es muy suave" },
      { id: "furn5", polish: "Szafa", spanish: "Armario", difficulty: "easy", example: "Szafa w sypialni jest pełna ubrań i nie ma miejsca", exampleTranslation: "El armario del dormitorio está lleno de ropa y no hay espacio" },
      { id: "furn6", polish: "Fotel", spanish: "Sillón", difficulty: "easy", example: "Fotel jest idealny do czytania książek wieczorem", exampleTranslation: "El sillón es ideal para leer libros por la noche" },
      { id: "furn7", polish: "Półka", spanish: "Estante", difficulty: "medium", example: "Półka na książki jest pełna moich ulubionych pozycji", exampleTranslation: "El estante de libros está lleno de mis títulos favoritos" },
      { id: "furn8", polish: "Komoda", spanish: "Cómoda", difficulty: "medium", example: "W komodzie trzymam bieliznę i skarpetki", exampleTranslation: "En la cómoda guardo la ropa interior y los calcetines" },
      { id: "furn9", polish: "Biurko", spanish: "Escritorio", difficulty: "medium", example: "Biurko w moim pokoju jest duże i funkcjonalne", exampleTranslation: "El escritorio en mi habitación es grande y funcional" },
      { id: "furn10", polish: "Lustro", spanish: "Espejo", difficulty: "medium", example: "Lustro w przedpokoju jest duże i oprawione w ramę", exampleTranslation: "El espejo del recibidor es grande y está enmarcado" },
      { id: "furn11", polish: "Lampka", spanish: "Lámpara", difficulty: "medium", example: "Lampka nocna daje przyjemne miękkie światło", exampleTranslation: "La lámpara de noche da una luz suave agradable" },
      { id: "furn12", polish: "Dywan", spanish: "Alfombra", difficulty: "medium", example: "Dywan w salonie jest miękki i ciepły pod stopami", exampleTranslation: "La alfombra de la sala es suave y cálida bajo los pies" },
      { id: "furn13", polish: "Potrzebuję nowych mebli", spanish: "Necesito muebles nuevos", difficulty: "hard", example: "Potrzebuję nowych mebli bo stare są zniszczone", exampleTranslation: "Necesito muebles nuevos porque los viejos están deteriorados" },
      { id: "furn14", polish: "To jest wygodne", spanish: "Es cómodo", difficulty: "hard", example: "To krzesło jest bardzo wygodne nawet po długim siedzeniu", exampleTranslation: "Esta silla es muy cómoda incluso después de estar sentado mucho tiempo" },
      { id: "furn15", polish: "Gdzie to kupiliście?", spanish: "¿Dónde lo compraron?", difficulty: "hard", example: "Ten stół jest piękny, gdzie dokładnie to kupiliście?", exampleTranslation: "Esta mesa es hermosa, ¿dónde exactamente lo compraron?" }
    ]
  },

  cooking_utensils: {
    name: "Przybory kuchenne",
    description: "Naczynia i sprzęty",
    icon: ChefHat,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cook1", polish: "Garnek", spanish: "Olla", difficulty: "easy", example: "Gotuję zupę w dużym garnku przez godzinę", exampleTranslation: "Cocino la sopa en una olla grande durante una hora" },
      { id: "cook2", polish: "Patelnia", spanish: "Sartén", difficulty: "easy", example: "Smażę jajka na patelni z oliwą każdego ranka", exampleTranslation: "Frio huevos en el sartén con aceite cada mañana" },
      { id: "cook3", polish: "Nóż", spanish: "Cuchillo", difficulty: "easy", example: "Nóż kuchenny musi być ostry do krojenia warzyw", exampleTranslation: "El cuchillo de cocina debe estar afilado para cortar verduras" },
      { id: "cook4", polish: "Łyżka", spanish: "Cuchara", difficulty: "easy", example: "Mieszam zupę drewnianą łyżką podczas gotowania", exampleTranslation: "Mezclo la sopa con una cuchara de madera mientras cocino" },
      { id: "cook5", polish: "Widelec", spanish: "Tenedor", difficulty: "easy", example: "Używam widelca i noża podczas eleganckich kolacji", exampleTranslation: "Uso tenedor y cuchillo durante las cenas elegantes" },
      { id: "cook6", polish: "Talerz", spanish: "Plato", difficulty: "easy", example: "Nałożyłem jedzenie na czysty biały talerz", exampleTranslation: "Serví la comida en un plato blanco limpio" },
      { id: "cook7", polish: "Miska", spanish: "Tazón", difficulty: "medium", example: "Jem płatki śniadaniowe z mlekiem w dużej misce", exampleTranslation: "Como cereales con leche en un tazón grande" },
      { id: "cook8", polish: "Kubek", spanish: "Taza", difficulty: "medium", example: "Piję poranną kawę z mojego ulubionego kubka", exampleTranslation: "Bebo el café de la mañana en mi taza favorita" },
      { id: "cook9", polish: "Szklanka", spanish: "Vaso", difficulty: "medium", example: "Nalałem zimną wodę do wysokiej szklanki", exampleTranslation: "Serví agua fría en un vaso alto" },
      { id: "cook10", polish: "Durszlak", spanish: "Colador", difficulty: "medium", example: "Odsączam ugotowany makaron w durszlaku nad zlewem", exampleTranslation: "Escurro la pasta cocida en el colador sobre el fregadero" },
      { id: "cook11", polish: "Deska do krojenia", spanish: "Tabla de cortar", difficulty: "medium", example: "Kroję warzywa na drewnianej desce do krojenia", exampleTranslation: "Corto verduras en la tabla de cortar de madera" },
      { id: "cook12", polish: "Trzepaczka", spanish: "Batidor", difficulty: "medium", example: "Ubieram białka na pianę używając trzepaczki", exampleTranslation: "Bato las claras a punto de nieve usando el batidor" },
      { id: "cook13", polish: "Gdzie jest otwieracz?", spanish: "¿Dónde está el abrelatas?", difficulty: "hard", example: "Gdzie jest otwieracz do puszek? Nie mogę go znaleźć", exampleTranslation: "¿Dónde está el abrelatas? No puedo encontrarlo" },
      { id: "cook14", polish: "Naczynia są brudne", spanish: "Los platos están sucios", difficulty: "hard", example: "Wszystkie naczynia są brudne i muszę je pozmywać", exampleTranslation: "Todos los platos están sucios y tengo que lavarlos" },
      { id: "cook15", polish: "Pomóż mi nakryć do stołu", spanish: "Ayúdame a poner la mesa", difficulty: "hard", example: "Pomóż mi proszę nakryć do stołu bo goście zaraz przyjdą", exampleTranslation: "Ayúdame por favor a poner la mesa porque los invitados llegarán pronto" }
    ]
  },

  calendar_days: {
    name: "Kalendarz i dni",
    description: "Dni i miesiące",
    icon: Calendar,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "cal1", polish: "Dzisiaj", spanish: "Hoy", difficulty: "easy", example: "Dzisiaj jest piękny słoneczny dzień idealny na spacer", exampleTranslation: "Hoy es un día soleado hermoso ideal para pasear" },
      { id: "cal2", polish: "Wczoraj", spanish: "Ayer", difficulty: "easy", example: "Wczoraj byłem w kinie z przyjaciółmi", exampleTranslation: "Ayer estuve en el cine con amigos" },
      { id: "cal3", polish: "Jutro", spanish: "Mañana", difficulty: "easy", example: "Jutro mam ważne spotkanie o dziesiątej rano", exampleTranslation: "Mañana tengo una reunión importante a las diez de la mañana" },
      { id: "cal4", polish: "Tydzień", spanish: "Semana", difficulty: "easy", example: "W tym tygodniu mam bardzo dużo pracy i spotkań", exampleTranslation: "Esta semana tengo muchísimo trabajo y reuniones" },
      { id: "cal5", polish: "Miesiąc", spanish: "Mes", difficulty: "easy", example: "Następny miesiąc jadę na urlop do Hiszpanii", exampleTranslation: "El próximo mes voy de vacaciones a España" },
      { id: "cal6", polish: "Rok", spanish: "Año", difficulty: "easy", example: "Ten rok był pełen wspaniałych wydarzeń i zmian", exampleTranslation: "Este año estuvo lleno de eventos maravillosos y cambios" },
      { id: "cal7", polish: "Poniedziałek", spanish: "Lunes", difficulty: "medium", example: "Poniedziałek to najtrudniejszy dzień tygodnia dla mnie", exampleTranslation: "El lunes es el día más difícil de la semana para mí" },
      { id: "cal8", polish: "Sobota", spanish: "Sábado", difficulty: "medium", example: "W sobotę śpię dłużej i odpoczywam po całym tygodniu", exampleTranslation: "El sábado duermo más y descanso después de toda la semana" },
      { id: "cal9", polish: "Niedziela", spanish: "Domingo", difficulty: "medium", example: "W niedzielę spotykamy się z rodziną na obiedzie", exampleTranslation: "El domingo nos reunimos con la familia para el almuerzo" },
      { id: "cal10", polish: "Styczeń", spanish: "Enero", difficulty: "medium", example: "Styczeń to najzimniejszy miesiąc w roku u nas", exampleTranslation: "Enero es el mes más frío del año aquí" },
      { id: "cal11", polish: "Czerwiec", spanish: "Junio", difficulty: "medium", example: "W czerwcu są najdłuższe dni i najkrótsze noce", exampleTranslation: "En junio están los días más largos y las noches más cortas" },
      { id: "cal12", polish: "Grudzień", spanish: "Diciembre", difficulty: "medium", example: "Grudzień to miesiąc świąt i rodzinnych spotkań", exampleTranslation: "Diciembre es el mes de las fiestas y reuniones familiares" },
      { id: "cal13", polish: "Który dzisiaj?", spanish: "¿Qué día es hoy?", difficulty: "hard", example: "Zgubiłem rachubę czasu, który dzisiaj jest dzień?", exampleTranslation: "Perdí la cuenta del tiempo, ¿qué día es hoy?" },
      { id: "cal14", polish: "Spotkajmy się w piątek", spanish: "Reunámonos el viernes", difficulty: "hard", example: "Spotkajmy się w przyszły piątek wieczorem o ósmej", exampleTranslation: "Reunámonos el próximo viernes por la noche a las ocho" },
      { id: "cal15", polish: "Minął już miesiąc", spanish: "Ya pasó un mes", difficulty: "hard", example: "Nie mogę uwierzyć że minął już cały miesiąc od wakacji", exampleTranslation: "No puedo creer que ya pasó un mes entero desde las vacaciones" }
    ]
  },

  materials_substances: {
    name: "Materiały i substancje",
    description: "Z czego są zrobione rzeczy",
    icon: Package,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "mat1", polish: "Drewno", spanish: "Madera", difficulty: "easy", example: "Ten stół jest wykonany z litego drewna dębowego", exampleTranslation: "Esta mesa está hecha de madera de roble maciza" },
      { id: "mat2", polish: "Metal", spanish: "Metal", difficulty: "easy", example: "Brama jest z mocnego metalu odpornego na rdzę", exampleTranslation: "El portón es de metal fuerte resistente al óxido" },
      { id: "mat3", polish: "Plastik", spanish: "Plástico", difficulty: "easy", example: "Staram się unikać plastikowych torebek ze sklepu", exampleTranslation: "Intento evitar las bolsas de plástico de la tienda" },
      { id: "mat4", polish: "Szkło", spanish: "Vidrio", difficulty: "easy", example: "Szkło w oknie jest bardzo czyste i przezroczyste", exampleTranslation: "El vidrio de la ventana está muy limpio y transparente" },
      { id: "mat5", polish: "Papier", spanish: "Papel", difficulty: "easy", example: "Papier w drukarce jest ekologiczny i z recyklingu", exampleTranslation: "El papel de la impresora es ecológico y reciclado" },
      { id: "mat6", polish: "Kamień", spanish: "Piedra", difficulty: "easy", example: "Ścieżka w ogrodzie jest wyłożona naturalnymi kamieniami", exampleTranslation: "El camino del jardín está pavimentado con piedras naturales" },
      { id: "mat7", polish: "Skóra", spanish: "Cuero", difficulty: "medium", example: "Sofa jest obita naturalną skórą najwyższej jakości", exampleTranslation: "El sofá está tapizado en cuero natural de la más alta calidad" },
      { id: "mat8", polish: "Bawełna", spanish: "Algodón", difficulty: "medium", example: "Koszula jest wykonana ze stuprocentowej bawełny", exampleTranslation: "La camisa está hecha de algodón cien por ciento" },
      { id: "mat9", polish: "Wełna", spanish: "Lana", difficulty: "medium", example: "Sweter z wełny jest bardzo ciepły i miękki", exampleTranslation: "El suéter de lana es muy cálido y suave" },
      { id: "mat10", polish: "Jedwab", spanish: "Seda", difficulty: "medium", example: "Suknia ślubna jest uszyta z delikatnego jedwabiu", exampleTranslation: "El vestido de novia está cosido de seda delicada" },
      { id: "mat11", polish: "Guma", spanish: "Goma", difficulty: "medium", example: "Opony samochodowe są z mocnej gumy wysokiej jakości", exampleTranslation: "Las llantas del coche son de goma fuerte de alta calidad" },
      { id: "mat12", polish: "Tkanina", spanish: "Tela", difficulty: "medium", example: "Ta tkanina jest miękka i przyjemna w dotyku", exampleTranslation: "Esta tela es suave y agradable al tacto" },
      { id: "mat13", polish: "Z czego to jest?", spanish: "¿De qué está hecho?", difficulty: "hard", example: "Z czego dokładnie jest zrobiony ten przedmiot?", exampleTranslation: "¿De qué exactamente está hecho este objeto?" },
      { id: "mat14", polish: "To jest naturalne", spanish: "Es natural", difficulty: "hard", example: "To jest całkowicie naturalne bez sztucznych dodatków", exampleTranslation: "Es completamente natural sin aditivos artificiales" },
      { id: "mat15", polish: "Wolę naturalne materiały", spanish: "Prefiero materiales naturales", difficulty: "hard", example: "Wolę naturalne materiały zamiast syntetycznych w ubraniach", exampleTranslation: "Prefiero materiales naturales en lugar de sintéticos en la ropa" }
    ]
  },

  sports_equipment: {
    name: "Sprzęt sportowy",
    description: "Akcesoria do ćwiczeń",
    icon: Dumbbell,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "sport1", polish: "Piłka", spanish: "Balón", difficulty: "easy", example: "Piłka nożna jest okrągła i czarno-biała", exampleTranslation: "El balón de fútbol es redondo y blanco y negro" },
      { id: "sport2", polish: "Rakieta", spanish: "Raqueta", difficulty: "easy", example: "Rakieta tenisowa jest lekka ale bardzo mocna", exampleTranslation: "La raqueta de tenis es ligera pero muy fuerte" },
      { id: "sport3", polish: "Buty sportowe", spanish: "Zapatillas deportivas", difficulty: "easy", example: "Kupiłem nowe buty sportowe do biegania w parku", exampleTranslation: "Compré zapatillas deportivas nuevas para correr en el parque" },
      { id: "sport4", polish: "Strój kąpielowy", spanish: "Traje de baño", difficulty: "easy", example: "Strój kąpielowy schnie na balkonie po pływaniu", exampleTranslation: "El traje de baño se seca en el balcón después de nadar" },
      { id: "sport5", polish: "Rower", spanish: "Bicicleta", difficulty: "easy", example: "Rower górski jest idealny do jazdy po leśnych ścieżkach", exampleTranslation: "La bicicleta de montaña es ideal para rutas en bosques" },
      { id: "sport6", polish: "Mata do jogi", spanish: "Esterilla de yoga", difficulty: "easy", example: "Mata do jogi jest antypoślizgowa i bardzo wygodna", exampleTranslation: "La esterilla de yoga es antideslizante y muy cómoda" },
      { id: "sport7", polish: "Hantle", spanish: "Mancuernas", difficulty: "medium", example: "Ćwiczę z hantlami trzy razy w tygodniu na siłowni", exampleTranslation: "Entreno con mancuernas tres veces por semana en el gimnasio" },
      { id: "sport8", polish: "Kask", spanish: "Casco", difficulty: "medium", example: "Zawsze noszę kask jeżdżąc na rowerze dla bezpieczeństwa", exampleTranslation: "Siempre uso casco cuando monto en bicicleta por seguridad" },
      { id: "sport9", polish: "Ochraniacze", spanish: "Protectores", difficulty: "medium", example: "Ochraniacze na kolana chronią przed kontuzjami", exampleTranslation: "Los protectores de rodillas protegen contra lesiones" },
      { id: "sport10", polish: "Skakanka", spanish: "Cuerda de saltar", difficulty: "medium", example: "Skakanka to prosty sprzęt do świetnego treningu cardio", exampleTranslation: "La cuerda de saltar es un equipo simple para entrenamiento cardio excelente" },
      { id: "sport11", polish: "Torba sportowa", spanish: "Bolsa deportiva", difficulty: "medium", example: "Pakuję ręcznik i wodę do torby sportowej", exampleTranslation: "Empaco la toalla y agua en la bolsa deportiva" },
      { id: "sport12", polish: "Bidon", spanish: "Botella deportiva", difficulty: "medium", example: "Bidon z wodą zabieram na każdy trening", exampleTranslation: "Llevo la botella deportiva con agua a cada entrenamiento" },
      { id: "sport13", polish: "Pożycz mi piłkę", spanish: "Préstame el balón", difficulty: "hard", example: "Zapomniałem mojej piłki, pożycz mi swoją na chwilę", exampleTranslation: "Olvidé mi balón, préstame el tuyo por un momento" },
      { id: "sport14", polish: "Potrzebuję nowego sprzętu", spanish: "Necesito equipo nuevo", difficulty: "hard", example: "Potrzebuję całkiem nowego sprzętu sportowego do treningu", exampleTranslation: "Necesito equipo deportivo completamente nuevo para entrenar" },
      { id: "sport15", polish: "Gdzie ćwiczysz?", spanish: "¿Dónde entrenas?", difficulty: "hard", example: "Gdzie zazwyczaj ćwiczysz i jaki sprzęt używasz?", exampleTranslation: "¿Dónde entrenas normalmente y qué equipo usas?" }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Określenia czasu",
    icon: Calendar,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "time1", polish: "Teraz", spanish: "Ahora", difficulty: "easy", example: "Teraz jestem zajęty ale oddzwonię za godzinę", exampleTranslation: "Ahora estoy ocupado pero llamaré en una hora" },
      { id: "time2", polish: "Później", spanish: "Más tarde", difficulty: "easy", example: "Zrobię to później bo teraz nie mam czasu", exampleTranslation: "Lo haré más tarde porque ahora no tengo tiempo" },
      { id: "time3", polish: "Wcześniej", spanish: "Antes", difficulty: "easy", example: "Wcześniej mieszkałem w innym mieście", exampleTranslation: "Antes vivía en otra ciudad" },
      { id: "time4", polish: "Zawsze", spanish: "Siempre", difficulty: "easy", example: "Zawsze piję kawę rano przed wyjściem do pracy", exampleTranslation: "Siempre bebo café por la mañana antes de salir al trabajo" },
      { id: "time5", polish: "Nigdy", spanish: "Nunca", difficulty: "easy", example: "Nigdy nie byłem w Ameryce Południowej", exampleTranslation: "Nunca he estado en América del Sur" },
      { id: "time6", polish: "Czasami", spanish: "A veces", difficulty: "easy", example: "Czasami gotuję obiad a czasami zamawiam jedzenie", exampleTranslation: "A veces cocino la cena y a veces pido comida" },
      { id: "time7", polish: "Często", spanish: "A menudo", difficulty: "medium", example: "Często chodzę do tego parku na poranny spacer", exampleTranslation: "A menudo voy a este parque para el paseo matutino" },
      { id: "time8", polish: "Rzadko", spanish: "Rara vez", difficulty: "medium", example: "Rzadko jem w restauracjach bo wolę gotować w domu", exampleTranslation: "Rara vez como en restaurantes porque prefiero cocinar en casa" },
      { id: "time9", polish: "Natychmiast", spanish: "Inmediatamente", difficulty: "medium", example: "Muszę to zrobić natychmiast bez żadnej zwłoki", exampleTranslation: "Tengo que hacerlo inmediatamente sin ninguna demora" },
      { id: "time10", polish: "Wkrótce", spanish: "Pronto", difficulty: "medium", example: "Wkrótce zacznie się nowy sezon mojego ulubionego serialu", exampleTranslation: "Pronto comenzará la nueva temporada de mi serie favorita" },
      { id: "time11", polish: "W końcu", spanish: "Finalmente", difficulty: "medium", example: "W końcu skończyłem ten długi i trudny projekt", exampleTranslation: "Finalmente terminé este proyecto largo y difícil" },
      { id: "time12", polish: "Tymczasem", spanish: "Mientras tanto", difficulty: "medium", example: "Tymczasem możesz zacząć przygotowywać obiad", exampleTranslation: "Mientras tanto puedes empezar a preparar la cena" },
      { id: "time13", polish: "Ile czasu to zajmie?", spanish: "¿Cuánto tiempo tomará?", difficulty: "hard", example: "Ile dokładnie czasu zajmie naprawienie tego problemu?", exampleTranslation: "¿Cuánto tiempo exactamente tomará arreglar este problema?" },
      { id: "time14", polish: "Za chwilę wrócę", spanish: "Vuelvo enseguida", difficulty: "hard", example: "Za chwilę wrócę, muszę tylko szybko coś sprawdzić", exampleTranslation: "Vuelvo enseguida, solo tengo que revisar algo rápidamente" },
      { id: "time15", polish: "Od tamtej pory", spanish: "Desde entonces", difficulty: "hard", example: "Od tamtej pory wszystko się zmieniło na lepsze", exampleTranslation: "Desde entonces todo cambió para mejor" }
    ]
  },

  common_phrases: {
    name: "Popularne zwroty",
    description: "Codzienne wyrażenia",
    icon: Mail,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "phr1", polish: "Oczywiście", spanish: "Por supuesto", difficulty: "easy", example: "Oczywiście że ci pomogę z przeprowadzką do nowego domu", exampleTranslation: "Por supuesto que te ayudaré con la mudanza a la casa nueva" },
      { id: "phr2", polish: "Może być", spanish: "Puede ser", difficulty: "easy", example: "Może być, zróbmy to w ten sposób jeśli wolisz", exampleTranslation: "Puede ser, hagámoslo de esa manera si prefieres" },
      { id: "phr3", polish: "Nie ma problemu", spanish: "No hay problema", difficulty: "easy", example: "Nie ma żadnego problemu, chętnie ci pomogę", exampleTranslation: "No hay ningún problema, con gusto te ayudo" },
      { id: "phr4", polish: "Nie wiem", spanish: "No sé", difficulty: "easy", example: "Nie wiem jeszcze co zrobię w przyszłym tygodniu", exampleTranslation: "No sé todavía qué haré la próxima semana" },
      { id: "phr5", polish: "Masz rację", spanish: "Tienes razón", difficulty: "easy", example: "Masz całkowitą rację w tej dyskusji i się zgadzam", exampleTranslation: "Tienes toda la razón en esta discusión y estoy de acuerdo" },
      { id: "phr6", polish: "To zależy", spanish: "Depende", difficulty: "easy", example: "To zależy od pogody czy pójdziemy na spacer", exampleTranslation: "Depende del clima si vamos a pasear" },
      { id: "phr7", polish: "Nie szkodzi", spanish: "No importa", difficulty: "medium", example: "Nie szkodzi że się spóźniłeś, najważniejsze że jesteś", exampleTranslation: "No importa que llegaste tarde, lo importante es que estás aquí" },
      { id: "phr8", polish: "Właśnie", spanish: "Exactamente", difficulty: "medium", example: "Właśnie o to mi chodziło w mojej wypowiedzi", exampleTranslation: "Exactamente a eso me refería en mi comentario" },
      { id: "phr9", polish: "W każdym razie", spanish: "De todos modos", difficulty: "medium", example: "W każdym razie musimy podjąć jakąś decyzję dzisiaj", exampleTranslation: "De todos modos tenemos que tomar alguna decisión hoy" },
      { id: "phr10", polish: "Bez wątpienia", spanish: "Sin duda", difficulty: "medium", example: "Bez wątpienia to był najlepszy koncert w roku", exampleTranslation: "Sin duda fue el mejor concierto del año" },
      { id: "phr11", polish: "Na pewno", spanish: "Seguramente", difficulty: "medium", example: "Na pewno przyjdę na twoje urodziny w sobotę", exampleTranslation: "Seguramente vendré a tu cumpleaños el sábado" },
      { id: "phr12", polish: "Z przyjemnością", spanish: "Con mucho gusto", difficulty: "medium", example: "Z przyjemnością pomogę ci w tym projekcie", exampleTranslation: "Con mucho gusto te ayudaré en este proyecto" },
      { id: "phr13", polish: "Co masz na myśli?", spanish: "¿Qué quieres decir?", difficulty: "hard", example: "Co dokładnie masz na myśli mówiąc to?", exampleTranslation: "¿Qué quieres decir exactamente al decir eso?" },
      { id: "phr14", polish: "Tak mi się wydaje", spanish: "Me parece que sí", difficulty: "hard", example: "Tak mi się wydaje ale nie jestem całkowicie pewien", exampleTranslation: "Me parece que sí pero no estoy completamente seguro" },
      { id: "phr15", polish: "Innymi słowy", spanish: "En otras palabras", difficulty: "hard", example: "Innymi słowy musisz podjąć tę decyzję sam", exampleTranslation: "En otras palabras tienes que tomar esta decisión tú mismo" }
    ]
  },

  money_finance: {
    name: "Pieniądze i finanse",
    description: "Handel i zakupy",
    icon: Package,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "mon1", polish: "Pieniądze", spanish: "Dinero", difficulty: "easy", example: "Potrzebuję więcej pieniędzy żeby kupić nowy samochód", exampleTranslation: "Necesito más dinero para comprar un coche nuevo" },
      { id: "mon2", polish: "Cena", spanish: "Precio", difficulty: "easy", example: "Cena tego produktu jest zbyt wysoka dla mojego budżetu", exampleTranslation: "El precio de este producto es demasiado alto para mi presupuesto" },
      { id: "mon3", polish: "Drogi", spanish: "Caro", difficulty: "easy", example: "Ten zegarek jest bardzo drogi ale wysokiej jakości", exampleTranslation: "Este reloj es muy caro pero de alta calidad" },
      { id: "mon4", polish: "Tani", spanish: "Barato", difficulty: "easy", example: "Znalazłem tani hotel blisko centrum miasta", exampleTranslation: "Encontré un hotel barato cerca del centro de la ciudad" },
      { id: "mon5", polish: "Płacić", spanish: "Pagar", difficulty: "easy", example: "Płacę kartą kredytową zamiast gotówką", exampleTranslation: "Pago con tarjeta de crédito en lugar de efectivo" },
      { id: "mon6", polish: "Kupować", spanish: "Comprar", difficulty: "easy", example: "Kupuję świeże warzywa na targu każdą sobotę", exampleTranslation: "Compro verduras frescas en el mercado cada sábado" },
      { id: "mon7", polish: "Sprzedawać", spanish: "Vender", difficulty: "medium", example: "Sprzedaję stary telefon żeby kupić nowy model", exampleTranslation: "Vendo el teléfono viejo para comprar un modelo nuevo" },
      { id: "mon8", polish: "Wyprzedaż", spanish: "Rebaja", difficulty: "medium", example: "Wielka wyprzedaż w centrum handlowym trwa cały tydzień", exampleTranslation: "La gran rebaja en el centro comercial dura toda la semana" },
      { id: "mon9", polish: "Zniżka", spanish: "Descuento", difficulty: "medium", example: "Dostałem dwadzieścia procent zniżki na wszystkie produkty", exampleTranslation: "Obtuve veinte por ciento de descuento en todos los productos" },
      { id: "mon10", polish: "Reszta", spanish: "Cambio", difficulty: "medium", example: "Zapłaciłem banknotem i dostałem resztę w monetach", exampleTranslation: "Pagué con billete y recibí el cambio en monedas" },
      { id: "mon11", polish: "Paragon", spanish: "Recibo", difficulty: "medium", example: "Zachowaj paragon bo możesz zwrócić produkt przez miesiąc", exampleTranslation: "Guarda el recibo porque puedes devolver el producto durante un mes" },
      { id: "mon12", polish: "Zwrot", spanish: "Devolución", difficulty: "medium", example: "Chcę zrobić zwrot tej kurtki bo jest za mała", exampleTranslation: "Quiero hacer la devolución de esta chaqueta porque es demasiado pequeña" },
      { id: "mon13", polish: "Ile to kosztuje?", spanish: "¿Cuánto cuesta esto?", difficulty: "hard", example: "Ile dokładnie kosztuje ten produkt z podatkiem?", exampleTranslation: "¿Cuánto cuesta exactamente este producto con impuestos?" },
      { id: "mon14", polish: "Czy mogę zapłacić kartą?", spanish: "¿Puedo pagar con tarjeta?", difficulty: "hard", example: "Czy mogę zapłacić kartą czy tylko gotówką?", exampleTranslation: "¿Puedo pagar con tarjeta o solo efectivo?" },
      { id: "mon15", polish: "To za drogie", spanish: "Es demasiado caro", difficulty: "hard", example: "To jest zdecydowanie za drogie nie mogę sobie pozwolić", exampleTranslation: "Es definitivamente demasiado caro no me lo puedo permitir" }
    ]
  }
};
/**
 * POLISH → SPANISH FLASHCARDS - PART 5
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (67-76).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Sparkles,
  Wrench,
  Ruler,
  Shapes,
  ArrowLeftRight,
  Lamp,
  FileText,
  ShieldAlert,
  PencilRuler,
  Bus
} from "lucide-react";

export const flashcardsCategories_part5 = {
  cleaning_housework: {
    name: "Sprzątanie i porządki",
    description: "Czynności sprzątające",
    icon: Sparkles,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "clean1", polish: "Sprzątać", spanish: "Limpiar", difficulty: "easy", example: "Limpio toda la casa cada fin de semana a fondo", exampleTranslation: "Sprzątam cały dom co weekend dokładnie" },
      { id: "clean2", polish: "Zmywać", spanish: "Lavar", difficulty: "easy", example: "Lavo los platos después de cada comida", exampleTranslation: "Zmywam naczynia po każdym posiłku" },
      { id: "clean3", polish: "Odkurzać", spanish: "Aspirar", difficulty: "easy", example: "Aspiro las alfombras dos veces por semana", exampleTranslation: "Odkurzam dywany dwa razy w tygodniu" },
      { id: "clean4", polish: "Zamiatać", spanish: "Barrer", difficulty: "easy", example: "Barro el piso de la cocina todos los días", exampleTranslation: "Zamiatam podłogę w kuchni codziennie" },
      { id: "clean5", polish: "Mopować", spanish: "Trapear", difficulty: "easy", example: "Después de barrer, trapeo el piso con agua tibia", exampleTranslation: "Po zamieceniu mopuję podłogę ciepłą wodą" },
      { id: "clean6", polish: "Ścierać kurz", spanish: "Quitar el polvo", difficulty: "easy", example: "Quito el polvo de los muebles una vez a la semana", exampleTranslation: "Ścieram kurz z mebli raz w tygodniu" },
      { id: "clean7", polish: "Pranie", spanish: "Lavandería", difficulty: "medium", example: "Hago la lavandería los martes y viernes regularmente", exampleTranslation: "Robię pranie we wtorki i piątki regularnie" },
      { id: "clean8", polish: "Prasować", spanish: "Planchar", difficulty: "medium", example: "Plancho las camisas mientras escucho música", exampleTranslation: "Prasuję koszule słuchając muzyki" },
      { id: "clean9", polish: "Organizować", spanish: "Organizar", difficulty: "medium", example: "Necesito organizar mi armario porque está muy desordenado", exampleTranslation: "Muszę zorganizować moją szafę bo jest bardzo nieporządna" },
      { id: "clean10", polish: "Wynosić śmieci", spanish: "Sacar la basura", difficulty: "medium", example: "Saco la basura todas las noches antes de dormir", exampleTranslation: "Wynoszę śmieci każdego wieczoru przed snem" },
      { id: "clean11", polish: "Szorować", spanish: "Fregar", difficulty: "medium", example: "Friego la bañera con un cepillo especial cada semana", exampleTranslation: "Szoruję wannę specjalną szczotką co tydzień" },
      { id: "clean12", polish: "Polerować", spanish: "Pulir", difficulty: "medium", example: "Pulo los muebles de madera con un producto especial", exampleTranslation: "Poleruję meble drewniane specjalnym środkiem" },
      { id: "clean13", polish: "Dom jest brudny", spanish: "La casa está sucia", difficulty: "hard", example: "La casa está muy sucia después de la fiesta de ayer", exampleTranslation: "Dom jest bardzo brudny po wczorajszej imprezie" },
      { id: "clean14", polish: "Muszę posprzątać", spanish: "Tengo que limpiar", difficulty: "hard", example: "Tengo que limpiar toda la casa antes de que lleguen los invitados", exampleTranslation: "Muszę posprzątać cały dom zanim przyjdą goście" },
      { id: "clean15", polish: "Pomożesz mi?", spanish: "¿Me ayudas?", difficulty: "hard", example: "¿Me ayudas a limpiar la cocina? Es mucho trabajo para una persona", exampleTranslation: "Pomożesz mi posprzątać kuchnię? To dużo pracy dla jednej osoby" }
    ]
  },

  tools_diy: {
    name: "Narzędzia i majsterkowanie",
    description: "Narzędzia i prace ręczne",
    icon: Wrench,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "tool1", polish: "Młotek", spanish: "Martillo", difficulty: "easy", example: "Necesito un martillo para colgar este cuadro en la pared", exampleTranslation: "Potrzebuję młotka żeby powiesić ten obraz na ścianie" },
      { id: "tool2", polish: "Śrubokręt", spanish: "Destornillador", difficulty: "easy", example: "Usa el destornillador para apretar estos tornillos flojos", exampleTranslation: "Użyj śrubokręta żeby dokręcić te luźne śruby" },
      { id: "tool3", polish: "Klucz", spanish: "Llave inglesa", difficulty: "easy", example: "Necesito una llave inglesa para arreglar el grifo que gotea", exampleTranslation: "Potrzebuję klucza do naprawy kranu który kapie" },
      { id: "tool4", polish: "Wiertarka", spanish: "Taladro", difficulty: "easy", example: "El taladro eléctrico hace agujeros perfectos en la pared", exampleTranslation: "Wiertarka elektryczna robi idealne dziury w ścianie" },
      { id: "tool5", polish: "Piła", spanish: "Sierra", difficulty: "easy", example: "Corta la madera con la sierra siguiendo la línea marcada", exampleTranslation: "Przecinaj drewno piłą wzdłuż narysowanej linii" },
      { id: "tool6", polish: "Obcęgi", spanish: "Alicates", difficulty: "easy", example: "Usa los alicates para doblar el alambre con cuidado", exampleTranslation: "Użyj obcęgów żeby ostrożnie wygiąć drut" },
      { id: "tool7", polish: "Drabina", spanish: "Escalera", difficulty: "medium", example: "Necesito una escalera alta para pintar el techo", exampleTranslation: "Potrzebuję wysokiej drabiny żeby pomalować sufit" },
      { id: "tool8", polish: "Skrzynka z narzędziami", spanish: "Caja de herramientas", difficulty: "medium", example: "Guardo todas mis herramientas organizadas en una caja roja", exampleTranslation: "Trzymam wszystkie narzędzia zorganizowane w czerwonej skrzynce" },
      { id: "tool9", polish: "Gwóźdź", spanish: "Clavo", difficulty: "medium", example: "Martilla el clavo directamente en la pared de madera", exampleTranslation: "Wbij gwóźdź prosto w drewnianą ścianę" },
      { id: "tool10", polish: "Śruba", spanish: "Tornillo", difficulty: "medium", example: "Estos tornillos son perfectos para madera y metal", exampleTranslation: "Te śruby są idealne do drewna i metalu" },
      { id: "tool11", polish: "Miara", spanish: "Cinta métrica", difficulty: "medium", example: "Mide con la cinta métrica antes de cortar la madera", exampleTranslation: "Zmierz miarą przed przecięciem drewna" },
      { id: "tool12", polish: "Poziomnica", spanish: "Nivel", difficulty: "medium", example: "Usa el nivel para asegurar que el estante esté recto", exampleTranslation: "Użyj poziomnicy żeby upewnić się że półka jest prosta" },
      { id: "tool13", polish: "Masz odpowiednie narzędzie?", spanish: "¿Tienes la herramienta correcta?", difficulty: "hard", example: "¿Tienes la herramienta correcta para este trabajo de reparación?", exampleTranslation: "Masz odpowiednie narzędzie do tej naprawy?" },
      { id: "tool14", polish: "Mogę to naprawić", spanish: "Puedo arreglarlo", difficulty: "hard", example: "No te preocupes por la silla rota, puedo arreglarlo fácilmente", exampleTranslation: "Nie martw się o złamane krzesło, mogę to łatwo naprawić" },
      { id: "tool15", polish: "Uważaj na to", spanish: "Ten cuidado con eso", difficulty: "hard", example: "Esa herramienta eléctrica es peligrosa, ten mucho cuidado con eso", exampleTranslation: "To narzędzie elektryczne jest niebezpieczne, bardzo na to uważaj" }
    ]
  },

  measurements_sizes: {
    name: "Pomiary i wielkości",
    description: "Wymiary i rozmiary",
    icon: Ruler,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "meas1", polish: "Mały", spanish: "Pequeño", difficulty: "easy", example: "Esta camiseta es demasiado pequeña para mí", exampleTranslation: "Ta koszulka jest dla mnie za mała" },
      { id: "meas2", polish: "Duży", spanish: "Grande", difficulty: "easy", example: "Pedimos una pizza grande para toda la familia", exampleTranslation: "Zamówiliśmy dużą pizzę dla całej rodziny" },
      { id: "meas3", polish: "Wysoki", spanish: "Alto", difficulty: "easy", example: "Mi hermano es muy alto y juega al baloncesto", exampleTranslation: "Mój brat jest bardzo wysoki i gra w koszykówkę" },
      { id: "meas4", polish: "Niski", spanish: "Bajo", difficulty: "easy", example: "La mesa es demasiado baja para trabajar cómodamente", exampleTranslation: "Stół jest za niski żeby wygodnie pracować" },
      { id: "meas5", polish: "Szeroki", spanish: "Ancho", difficulty: "easy", example: "Este pasillo es lo suficientemente ancho para los muebles", exampleTranslation: "Ten korytarz jest wystarczająco szeroki na meble" },
      { id: "meas6", polish: "Wąski", spanish: "Estrecho", difficulty: "easy", example: "La calle es muy estrecha para dos coches", exampleTranslation: "Ulica jest bardzo wąska na dwa samochody" },
      { id: "meas7", polish: "Długi", spanish: "Largo", difficulty: "medium", example: "Ella tiene el cabello largo que le llega hasta la cintura", exampleTranslation: "Ona ma długie włosy które sięgają jej do pasa" },
      { id: "meas8", polish: "Gruby", spanish: "Grueso", difficulty: "medium", example: "Este abrigo de invierno es muy grueso y cálido", exampleTranslation: "Ten zimowy płaszcz jest bardzo gruby i ciepły" },
      { id: "meas9", polish: "Cienki", spanish: "Delgado", difficulty: "medium", example: "El hielo está demasiado delgado para patinar con seguridad", exampleTranslation: "Lód jest za cienki żeby bezpiecznie jeździć na łyżwach" },
      { id: "meas10", polish: "Głęboki", spanish: "Profundo", difficulty: "medium", example: "La piscina es muy profunda en la zona de clavados", exampleTranslation: "Basen jest bardzo głęboki w strefie do skoków" },
      { id: "meas11", polish: "Płytki", spanish: "Poco profundo", difficulty: "medium", example: "Los niños pueden jugar en la parte poco profunda de la piscina", exampleTranslation: "Dzieci mogą bawić się w płytkiej części basenu" },
      { id: "meas12", polish: "Ciężki", spanish: "Pesado", difficulty: "medium", example: "Esta maleta está demasiado pesada para llevarla sola", exampleTranslation: "Ta walizka jest za ciężka żeby ją samemu nieść" },
      { id: "meas13", polish: "Jaki rozmiar potrzebujesz?", spanish: "¿Qué talla necesitas?", difficulty: "hard", example: "Estos zapatos vienen en varias tallas, ¿qué talla necesitas probarte?", exampleTranslation: "Te buty są w różnych rozmiarach, jaki rozmiar chcesz przymierzyć?" },
      { id: "meas14", polish: "To jest za duże", spanish: "Es demasiado grande", difficulty: "hard", example: "Este abrigo es demasiado grande para mí, ¿tienes una talla más pequeña?", exampleTranslation: "Ten płaszcz jest dla mnie za duży, masz mniejszy rozmiar?" },
      { id: "meas15", polish: "Ile to waży?", spanish: "¿Cuánto pesa?", difficulty: "hard", example: "Antes de enviar el paquete, ¿cuánto pesa exactamente?", exampleTranslation: "Przed wysłaniem paczki, ile to dokładnie waży?" }
    ]
  },

  shapes_geometry: {
    name: "Kształty i geometria",
    description: "Figury geometryczne",
    icon: Shapes,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "shape1", polish: "Koło", spanish: "Círculo", difficulty: "easy", example: "Dibuja un círculo perfecto usando un compás", exampleTranslation: "Narysuj idealne koło używając cyrkla" },
      { id: "shape2", polish: "Kwadrat", spanish: "Cuadrado", difficulty: "easy", example: "La habitación tiene forma de cuadrado con lados iguales", exampleTranslation: "Pokój ma kształt kwadratu z równymi bokami" },
      { id: "shape3", polish: "Trójkąt", spanish: "Triángulo", difficulty: "easy", example: "Un triángulo tiene tres lados y tres ángulos", exampleTranslation: "Trójkąt ma trzy boki i trzy kąty" },
      { id: "shape4", polish: "Prostokąt", spanish: "Rectángulo", difficulty: "easy", example: "La mayoría de las puertas son de forma rectangular", exampleTranslation: "Większość drzwi ma kształt prostokąta" },
      { id: "shape5", polish: "Owal", spanish: "Óvalo", difficulty: "easy", example: "El espejo tiene un elegante marco de forma ovalada", exampleTranslation: "Lustro ma elegancką ramę w kształcie owalu" },
      { id: "shape6", polish: "Gwiazda", spanish: "Estrella", difficulty: "easy", example: "Los niños recortan formas de estrellas del papel de colores", exampleTranslation: "Dzieci wycinają kształty gwiazd z kolorowego papieru" },
      { id: "shape7", polish: "Romb", spanish: "Rombo", difficulty: "medium", example: "El diseño del piso tiene un patrón en forma de rombo", exampleTranslation: "Wzór na podłodze ma układ w kształcie rombu" },
      { id: "shape8", polish: "Sześcian", spanish: "Cubo", difficulty: "medium", example: "Un dado es un cubo perfecto con seis caras iguales", exampleTranslation: "Kostka do gry to idealny sześcian z sześcioma równymi ścianami" },
      { id: "shape9", polish: "Kula", spanish: "Esfera", difficulty: "medium", example: "La Tierra no es una esfera perfecta sino ligeramente aplanada", exampleTranslation: "Ziemia nie jest idealną kulą tylko lekko spłaszczona" },
      { id: "shape10", polish: "Piramida", spanish: "Pirámide", difficulty: "medium", example: "Las pirámides egipcias antiguas son maravillas arquitectónicas", exampleTranslation: "Starożytne egipskie piramidy to cuda architektury" },
      { id: "shape11", polish: "Walec", spanish: "Cilindro", difficulty: "medium", example: "Una lata de sopa tiene forma cilíndrica perfecta", exampleTranslation: "Puszka zupy ma kształt idealnego walca" },
      { id: "shape12", polish: "Stożek", spanish: "Cono", difficulty: "medium", example: "Los conos de helado son la forma perfecta para el postre", exampleTranslation: "Rożki do lodów to idealny kształt na deser" },
      { id: "shape13", polish: "Jaki to kształt?", spanish: "¿Qué forma es esta?", difficulty: "hard", example: "Mira este diseño interesante, ¿qué forma geométrica es esta exactamente?", exampleTranslation: "Spójrz na ten ciekawy wzór, jaki to dokładnie kształt geometryczny?" },
      { id: "shape14", polish: "To jest okrągłe", spanish: "Es redondo", difficulty: "hard", example: "Este plato decorativo es perfectamente redondo y pintado a mano", exampleTranslation: "Ten talerz dekoracyjny jest idealnie okrągły i malowany ręcznie" },
      { id: "shape15", polish: "Kąty są równe", spanish: "Los ángulos son iguales", difficulty: "hard", example: "En un triángulo equilátero, todos los ángulos son iguales a sesenta grados", exampleTranslation: "W trójkącie równobocznym wszystkie kąty są równe sześćdziesięciu stopniom" }
    ]
  },

  opposites: {
    name: "Przeciwieństwa",
    description: "Pary przeciwieństw",
    icon: ArrowLeftRight,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "opp1", polish: "Gorący", spanish: "Caliente", difficulty: "easy", example: "Ten cuidado, el café está muy caliente y puede quemarte", exampleTranslation: "Uważaj, kawa jest bardzo gorąca i może cię poparzyć" },
      { id: "opp2", polish: "Zimny", spanish: "Frío", difficulty: "easy", example: "El helado está frío y refrescante en este día caluroso", exampleTranslation: "Lody są zimne i orzeźwiające w ten gorący dzień" },
      { id: "opp3", polish: "Szybki", spanish: "Rápido", difficulty: "easy", example: "Este coche deportivo es increíblemente rápido en la autopista", exampleTranslation: "Ten samochód sportowy jest niesamowicie szybki na autostradzie" },
      { id: "opp4", polish: "Wolny", spanish: "Lento", difficulty: "easy", example: "La conexión a internet está muy lenta hoy", exampleTranslation: "Połączenie internetowe jest dziś bardzo wolne" },
      { id: "opp5", polish: "Łatwy", spanish: "Fácil", difficulty: "easy", example: "Este ejercicio de matemáticas es bastante fácil para resolver", exampleTranslation: "To zadanie z matematyki jest dość łatwe do rozwiązania" },
      { id: "opp6", polish: "Trudny", spanish: "Difícil", difficulty: "easy", example: "Aprender un idioma nuevo es difícil pero muy gratificante", exampleTranslation: "Nauka nowego języka jest trudna ale bardzo satysfakcjonująca" },
      { id: "opp7", polish: "Jasny", spanish: "Claro", difficulty: "medium", example: "La habitación es muy clara con todas estas ventanas grandes", exampleTranslation: "Pokój jest bardzo jasny z tymi wszystkimi dużymi oknami" },
      { id: "opp8", polish: "Ciemny", spanish: "Oscuro", difficulty: "medium", example: "El cuarto está demasiado oscuro para leer sin luz", exampleTranslation: "Pokój jest za ciemny żeby czytać bez światła" },
      { id: "opp9", polish: "Mocny", spanish: "Fuerte", difficulty: "medium", example: "Este café es demasiado fuerte, prefiero uno más suave", exampleTranslation: "Ta kawa jest za mocna, wolę słabszą" },
      { id: "opp10", polish: "Słaby", spanish: "Débil", difficulty: "medium", example: "El té está muy débil, necesita más tiempo de infusión", exampleTranslation: "Herbata jest bardzo słaba, potrzebuje więcej czasu na zaparzenie" },
      { id: "opp11", polish: "Blisko", spanish: "Cerca", difficulty: "medium", example: "El supermercado está muy cerca de casa, a cinco minutos caminando", exampleTranslation: "Supermarket jest bardzo blisko domu, pięć minut pieszo" },
      { id: "opp12", polish: "Daleko", spanish: "Lejos", difficulty: "medium", example: "Mi oficina está lejos de casa, tardo una hora en llegar", exampleTranslation: "Moje biuro jest daleko od domu, jadę tam godzinę" },
      { id: "opp13", polish: "Czy to blisko czy daleko?", spanish: "¿Está cerca o lejos?", difficulty: "hard", example: "Nunca he estado en ese restaurante, ¿está cerca o lejos de aquí?", exampleTranslation: "Nigdy nie byłem w tej restauracji, czy to blisko czy daleko stąd?" },
      { id: "opp14", polish: "To jest odwrotnie", spanish: "Es al revés", difficulty: "hard", example: "Vas en dirección equivocada, la estación es al revés desde aquí", exampleTranslation: "Idziesz w złą stronę, stacja jest odwrotnie stąd" },
      { id: "opp15", polish: "Całkiem przeciwnie", spanish: "Todo lo contrario", difficulty: "hard", example: "No estoy cansado, todo lo contrario, me siento lleno de energía", exampleTranslation: "Nie jestem zmęczony, całkiem przeciwnie, czuję się pełen energii" }
    ]
  },

  everyday_objects: {
    name: "Przedmioty codzienne",
    description: "Rzeczy codziennego użytku",
    icon: Lamp,
    color: "from-amber-400 to-yellow-500",
    level: "beginner",
    words: [
      { id: "obj1", polish: "Klucz", spanish: "Llave", difficulty: "easy", example: "No encuentro las llaves de casa por ninguna parte", exampleTranslation: "Nie mogę nigdzie znaleźć kluczy do domu" },
      { id: "obj2", polish: "Torba", spanish: "Bolsa", difficulty: "easy", example: "Lleva tus propias bolsas reutilizables al supermercado", exampleTranslation: "Zabierz własne torby wielokrotnego użytku do supermarketu" },
      { id: "obj3", polish: "Butelka", spanish: "Botella", difficulty: "easy", example: "Siempre llevo una botella de agua conmigo al gimnasio", exampleTranslation: "Zawsze noszę butelkę wody ze sobą na siłownię" },
      { id: "obj4", polish: "Pudełko", spanish: "Caja", difficulty: "easy", example: "Empaqué todos mis libros en cajas de cartón resistentes", exampleTranslation: "Spakowałem wszystkie książki w wytrzymałe kartonowe pudełka" },
      { id: "obj5", polish: "Słoik", spanish: "Frasco", difficulty: "easy", example: "Guarda la mermelada casera en un frasco de vidrio limpio", exampleTranslation: "Przechowuj domową konfiturę w czystym szklanym słoiku" },
      { id: "obj6", polish: "Pojemnik", spanish: "Recipiente", difficulty: "easy", example: "Pon las sobras en un recipiente hermético en el refrigerador", exampleTranslation: "Włóż resztki do hermetycznego pojemnika w lodówce" },
      { id: "obj7", polish: "Zapalniczka", spanish: "Encendedor", difficulty: "medium", example: "Necesito un encendedor para prender las velas del pastel", exampleTranslation: "Potrzebuję zapalniczki żeby zapalić świeczki na torcie" },
      { id: "obj8", polish: "Bateria", spanish: "Batería", difficulty: "medium", example: "El control remoto necesita baterías nuevas porque no funciona", exampleTranslation: "Pilot potrzebuje nowych baterii bo nie działa" },
      { id: "obj9", polish: "Kabel", spanish: "Cable", difficulty: "medium", example: "Necesito un cable más largo para cargar mi teléfono", exampleTranslation: "Potrzebuję dłuższego kabla do ładowania telefonu" },
      { id: "obj10", polish: "Kosz", spanish: "Cesto", difficulty: "medium", example: "Tira los papeles usados en el cesto de basura", exampleTranslation: "Wyrzuć zużyte papiery do kosza na śmieci" },
      { id: "obj11", polish: "Koszyk", spanish: "Canasta", difficulty: "medium", example: "Lleva la canasta de mimbre para recoger frutas del jardín", exampleTranslation: "Weź wiklinowy koszyk do zbierania owoców z ogrodu" },
      { id: "obj12", polish: "Worek", spanish: "Saco", difficulty: "medium", example: "Guardamos las patatas en un saco grande en el sótano", exampleTranslation: "Przechowujemy ziemniaki w dużym worku w piwnicy" },
      { id: "obj13", polish: "Czy możesz mi podać?", spanish: "¿Me lo puedes pasar?", difficulty: "hard", example: "Necesito esa caja del estante superior, ¿me lo puedes pasar?", exampleTranslation: "Potrzebuję tego pudełka z górnej półki, czy możesz mi je podać?" },
      { id: "obj14", polish: "Co jest w paczce?", spanish: "¿Qué hay en el paquete?", difficulty: "hard", example: "Llegó un paquete misterioso sin remitente, ¿qué hay en el paquete?", exampleTranslation: "Przyszła tajemnicza paczka bez nadawcy, co jest w paczce?" },
      { id: "obj15", polish: "Masz zapasową?", spanish: "¿Tienes una de repuesto?", difficulty: "hard", example: "Esta batería está agotada, ¿tienes una de repuesto que pueda usar?", exampleTranslation: "Ta bateria jest wyczerpana, masz zapasową której mogę użyć?" }
    ]
  },

  documents_forms: {
    name: "Dokumenty i formularze",
    description: "Papiery urzędowe",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "doc1", polish: "Dokument", spanish: "Documento", difficulty: "easy", example: "Necesito llevar mis documentos personales a la oficina", exampleTranslation: "Muszę zabrać moje osobiste dokumenty do biura" },
      { id: "doc2", polish: "Formularz", spanish: "Formulario", difficulty: "easy", example: "Completa este formulario con tus datos personales", exampleTranslation: "Wypełnij ten formularz swoimi danymi osobowymi" },
      { id: "doc3", polish: "Paszport", spanish: "Pasaporte", difficulty: "easy", example: "No olvides tu pasaporte cuando viajes al extranjero", exampleTranslation: "Nie zapomnij paszportu gdy jedziesz za granicę" },
      { id: "doc4", polish: "Dowód osobisty", spanish: "Documento de identidad", difficulty: "easy", example: "Necesitas mostrar tu documento de identidad para entrar", exampleTranslation: "Musisz pokazać dowód osobisty żeby wejść" },
      { id: "doc5", polish: "Podpis", spanish: "Firma", difficulty: "easy", example: "Pon tu firma en la línea de abajo del contrato", exampleTranslation: "Złóż swój podpis na linii na dole umowy" },
      { id: "doc6", polish: "Umowa", spanish: "Contrato", difficulty: "easy", example: "Lee el contrato cuidadosamente antes de firmarlo", exampleTranslation: "Przeczytaj umowę uważnie przed podpisaniem" },
      { id: "doc7", polish: "Poświadczenie", spanish: "Certificado", difficulty: "medium", example: "Necesito un certificado médico para el trabajo", exampleTranslation: "Potrzebuję zaświadczenia lekarskiego do pracy" },
      { id: "doc8", polish: "Wniosek", spanish: "Solicitud", difficulty: "medium", example: "Envié mi solicitud para el puesto de trabajo la semana pasada", exampleTranslation: "Wysłałem mój wniosek o pracę w zeszłym tygodniu" },
      { id: "doc9", polish: "Kopia", spanish: "Copia", difficulty: "medium", example: "Haz tres copias de este documento importante para el archivo", exampleTranslation: "Zrób trzy kopie tego ważnego dokumentu do archiwum" },
      { id: "doc10", polish: "Oryginał", spanish: "Original", difficulty: "medium", example: "Necesitan el documento original, no aceptan copias", exampleTranslation: "Potrzebują oryginalnego dokumentu, nie akceptują kopii" },
      { id: "doc11", polish: "Pieczęć", spanish: "Sello", difficulty: "medium", example: "El documento necesita el sello oficial de la institución", exampleTranslation: "Dokument potrzebuje oficjalnej pieczęci instytucji" },
      { id: "doc12", polish: "Data ważności", spanish: "Fecha de vencimiento", difficulty: "medium", example: "Revisa la fecha de vencimiento de tu pasaporte antes de viajar", exampleTranslation: "Sprawdź datę ważności paszportu przed podróżą" },
      { id: "doc13", polish: "Gdzie mam się podpisać?", spanish: "¿Dónde tengo que firmar?", difficulty: "hard", example: "Este formulario es muy largo, ¿dónde exactamente tengo que firmar?", exampleTranslation: "Ten formularz jest bardzo długi, gdzie dokładnie mam się podpisać?" },
      { id: "doc14", polish: "Potrzebuję kserokopii", spanish: "Necesito una fotocopia", difficulty: "hard", example: "Necesito una fotocopia certificada de mi certificado de nacimiento", exampleTranslation: "Potrzebuję poświadczonej kserokopii mojego aktu urodzenia" },
      { id: "doc15", polish: "Ważne do kiedy?", spanish: "¿Válido hasta cuándo?", difficulty: "hard", example: "Mi documento de identidad vence pronto, ¿válido hasta cuándo es el nuevo?", exampleTranslation: "Mój dowód osobisty niedługo wygasa, ważne do kiedy będzie nowy?" }
    ]
  },

  safety_emergencies: {
    name: "Bezpieczeństwo",
    description: "Sytuacje awaryjne",
    icon: ShieldAlert,
    color: "from-red-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "safe1", polish: "Nagły wypadek", spanish: "Emergencia", difficulty: "easy", example: "Llama al número de emergencia si hay una situación peligrosa", exampleTranslation: "Zadzwoń pod numer alarmowy jeśli jest niebezpieczna sytuacja" },
      { id: "safe2", polish: "Pomoc", spanish: "Ayuda", difficulty: "easy", example: "Necesito ayuda urgente, por favor llamen a alguien", exampleTranslation: "Potrzebuję pilnej pomocy, proszę zadzwońcie po kogoś" },
      { id: "safe3", polish: "Pożar", spanish: "Incendio", difficulty: "easy", example: "La alarma de incendio sonó y todos evacuamos rápidamente", exampleTranslation: "Alarm pożarowy włączył się i wszyscy szybko ewakuowaliśmy" },
      { id: "safe4", polish: "Policja", spanish: "Policía", difficulty: "easy", example: "Llamé a la policía para reportar el robo de mi bicicleta", exampleTranslation: "Zadzwoniłem na policję żeby zgłosić kradzież mojego roweru" },
      { id: "safe5", polish: "Karetka", spanish: "Ambulancia", difficulty: "easy", example: "La ambulancia llegó en cinco minutos al lugar del accidente", exampleTranslation: "Karetka przyjechała w pięć minut na miejsce wypadku" },
      { id: "safe6", polish: "Niebezpieczeństwo", spanish: "Peligro", difficulty: "easy", example: "Hay una señal de peligro advirtiendo sobre la construcción", exampleTranslation: "Jest znak niebezpieczeństwa ostrzegający o budowie" },
      { id: "safe7", polish: "Wypadek", spanish: "Accidente", difficulty: "medium", example: "Hubo un grave accidente de tráfico en la autopista esta mañana", exampleTranslation: "Był poważny wypadek drogowy na autostradzie dziś rano" },
      { id: "safe8", polish: "Ratunek", spanish: "Rescate", difficulty: "medium", example: "Los bomberos realizaron un rescate dramático de la familia", exampleTranslation: "Strażacy przeprowadzili dramatyczny ratunek rodziny" },
      { id: "safe9", polish: "Ewakuacja", spanish: "Evacuación", difficulty: "medium", example: "La evacuación del edificio tomó menos de diez minutos", exampleTranslation: "Ewakuacja budynku zajęła mniej niż dziesięć minut" },
      { id: "safe10", polish: "Pierwsza pomoc", spanish: "Primeros auxilios", difficulty: "medium", example: "Todos deberían aprender técnicas básicas de primeros auxilios", exampleTranslation: "Wszyscy powinni nauczyć się podstawowych technik pierwszej pomocy" },
      { id: "safe11", polish: "Kontuzja", spanish: "Lesión", difficulty: "medium", example: "Sufrió una lesión menor pero puede seguir jugando", exampleTranslation: "Doznał drobnej kontuzji ale może dalej grać" },
      { id: "safe12", polish: "Alarm", spanish: "Alarma", difficulty: "medium", example: "La alarma de seguridad se activa automáticamente por la noche", exampleTranslation: "Alarm bezpieczeństwa włącza się automatycznie w nocy" },
      { id: "safe13", polish: "Wezwij pomoc!", spanish: "¡Pide ayuda!", difficulty: "hard", example: "Si ves a alguien en peligro, pide ayuda inmediatamente y mantén la calma", exampleTranslation: "Jeśli widzisz kogoś w niebezpieczeństwie, wezwij pomoc natychmiast i zachowaj spokój" },
      { id: "safe14", polish: "Czy wszyscy są bezpieczni?", spanish: "¿Todos están a salvo?", difficulty: "hard", example: "Después del terremoto, todos preguntaban '¿Todos están a salvo?'", exampleTranslation: "Po trzęsieniu ziemi wszyscy pytali 'Czy wszyscy są bezpieczni?'" },
      { id: "safe15", polish: "Gdzie jest wyjście?", spanish: "¿Dónde está la salida?", difficulty: "hard", example: "En caso de emergencia, es crucial saber dónde está la salida más cercana", exampleTranslation: "W razie awarii kluczowe jest wiedzieć gdzie jest najbliższe wyjście" }
    ]
  },

  school_supplies: {
    name: "Przybory szkolne",
    description: "Rzeczy do szkoły",
    icon: PencilRuler,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "sch1", polish: "Długopis", spanish: "Bolígrafo", difficulty: "easy", example: "¿Puedo pedir prestado un bolígrafo azul para llenar el formulario?", exampleTranslation: "Czy mogę pożyczyć niebieski długopis do wypełnienia formularza?" },
      { id: "sch2", polish: "Ołówek", spanish: "Lápiz", difficulty: "easy", example: "Prefiero usar un lápiz porque puedo borrar los errores fácilmente", exampleTranslation: "Wolę używać ołówka bo mogę łatwo wymazać błędy" },
      { id: "sch3", polish: "Papier", spanish: "Papel", difficulty: "easy", example: "Necesitamos comprar más papel para la impresora de la oficina", exampleTranslation: "Musimy kupić więcej papieru do drukarki biurowej" },
      { id: "sch4", polish: "Zszywacz", spanish: "Grapadora", difficulty: "easy", example: "Usa la grapadora para unir estos documentos importantes", exampleTranslation: "Użyj zszywacza żeby połączyć te ważne dokumenty" },
      { id: "sch5", polish: "Teczka", spanish: "Carpeta", difficulty: "easy", example: "Organiza tus papeles en carpetas de diferentes colores", exampleTranslation: "Organizuj swoje papiery w teczkach różnych kolorów" },
      { id: "sch6", polish: "Zeszyt", spanish: "Cuaderno", difficulty: "easy", example: "Escribo todas mis notas de clase en este cuaderno", exampleTranslation: "Zapisuję wszystkie notatki z zajęć w tym zeszycie" },
      { id: "sch7", polish: "Nożyczki", spanish: "Tijeras", difficulty: "medium", example: "Necesito tijeras afiladas para recortar estos artículos", exampleTranslation: "Potrzebuję ostrych nożyczek żeby wyciąć te artykuły" },
      { id: "sch8", polish: "Taśma klejąca", spanish: "Cinta adhesiva", difficulty: "medium", example: "Usa cinta adhesiva transparente para pegar los papeles", exampleTranslation: "Użyj przezroczystej taśmy klejącej żeby przykleić papiery" },
      { id: "sch9", polish: "Linijka", spanish: "Regla", difficulty: "medium", example: "Mide con la regla antes de cortar el papel", exampleTranslation: "Zmierz linijką przed przecięciem papieru" },
      { id: "sch10", polish: "Gumka", spanish: "Borrador", difficulty: "medium", example: "Este borrador elimina las marcas de lápiz completamente", exampleTranslation: "Ta gumka usuwa ślady ołówka całkowicie" },
      { id: "sch11", polish: "Kalkulator", spanish: "Calculadora", difficulty: "medium", example: "Uso la calculadora para verificar todos los cálculos", exampleTranslation: "Używam kalkulatora żeby sprawdzić wszystkie obliczenia" },
      { id: "sch12", polish: "Podkładka", spanish: "Portapapeles", difficulty: "medium", example: "El portapapeles facilita escribir mientras estás de pie", exampleTranslation: "Podkładka ułatwia pisanie gdy stoisz" },
      { id: "sch13", polish: "Masz długopis?", spanish: "¿Tienes un bolígrafo?", difficulty: "hard", example: "Olvidé el mío en casa, ¿tienes un bolígrafo que me puedas prestar?", exampleTranslation: "Zapomniałem mojego w domu, masz długopis który możesz mi pożyczyć?" },
      { id: "sch14", polish: "Skończył się papier", spanish: "Se acabó el papel", difficulty: "hard", example: "Se acabó el papel de la impresora, alguien tiene que comprar más", exampleTranslation: "Skończył się papier w drukarce, ktoś musi kupić więcej" },
      { id: "sch15", polish: "Gdzie trzymasz przybory?", spanish: "¿Dónde guardas los suministros?", difficulty: "hard", example: "Soy nuevo aquí, ¿dónde guardas los suministros de oficina como bolígrafos?", exampleTranslation: "Jestem tu nowy, gdzie trzymasz przybory biurowe jak długopisy?" }
    ]
  },

  public_transport: {
    name: "Transport publiczny",
    description: "Środki transportu miejskiego",
    icon: Bus,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "trans1", polish: "Autobus", spanish: "Autobús", difficulty: "easy", example: "El autobús al centro pasa cada quince minutos", exampleTranslation: "Autobus do centrum jeździ co piętnaście minut" },
      { id: "trans2", polish: "Metro", spanish: "Metro", difficulty: "easy", example: "El metro es la forma más rápida de cruzar la ciudad", exampleTranslation: "Metro to najszybszy sposób na przejazd przez miasto" },
      { id: "trans3", polish: "Tramwaj", spanish: "Tranvía", difficulty: "easy", example: "El tranvía histórico todavía funciona en el centro antiguo", exampleTranslation: "Historyczny tramwaj wciąż jeździ po starym centrum" },
      { id: "trans4", polish: "Przystanek", spanish: "Parada", difficulty: "easy", example: "La parada del autobús está justo enfrente de mi casa", exampleTranslation: "Przystanek autobusowy jest dokładnie naprzeciwko mojego domu" },
      { id: "trans5", polish: "Bilet", spanish: "Boleto", difficulty: "easy", example: "Compra el boleto antes de subir al autobús", exampleTranslation: "Kup bilet przed wejściem do autobusu" },
      { id: "trans6", polish: "Rozkład jazdy", spanish: "Horario", difficulty: "easy", example: "El horario de trenes está disponible en la aplicación móvil", exampleTranslation: "Rozkład jazdy pociągów jest dostępny w aplikacji mobilnej" },
      { id: "trans7", polish: "Stacja", spanish: "Estación", difficulty: "medium", example: "La estación de tren está a diez minutos caminando desde aquí", exampleTranslation: "Stacja kolejowa jest dziesięć minut spacerem stąd" },
      { id: "trans8", polish: "Peron", spanish: "Andén", difficulty: "medium", example: "El tren sale del andén número tres en cinco minutos", exampleTranslation: "Pociąg odjeżdża z peronu numer trzeci za pięć minut" },
      { id: "trans9", polish: "Bilet miesięczny", spanish: "Abono mensual", difficulty: "medium", example: "Compré un abono mensual porque viajo todos los días", exampleTranslation: "Kupiłem bilet miesięczny bo podróżuję codziennie" },
      { id: "trans10", polish: "Opóźnienie", spanish: "Retraso", difficulty: "medium", example: "El autobús tiene un retraso de veinte minutos por el tráfico", exampleTranslation: "Autobus ma opóźnienie dwadzieścia minut przez korek" },
      { id: "trans11", polish: "Kasownik", spanish: "Validador", difficulty: "medium", example: "Valida tu boleto en el validador al subir al tranvía", exampleTranslation: "Skasuj bilet w kasowniku przy wejściu do tramwaju" },
      { id: "trans12", polish: "Kontroler", spanish: "Inspector", difficulty: "medium", example: "El inspector de boletos revisa que todos tengan boleto válido", exampleTranslation: "Kontroler biletów sprawdza czy wszyscy mają ważny bilet" },
      { id: "trans13", polish: "Jak dojechać do centrum?", spanish: "¿Cómo llego al centro?", difficulty: "hard", example: "Soy turista aquí, ¿cómo llego al centro de la ciudad en transporte público?", exampleTranslation: "Jestem tu turystą, jak dojechać do centrum miasta komunikacją miejską?" },
      { id: "trans14", polish: "Gdzie kupić bilet?", spanish: "¿Dónde compro el boleto?", difficulty: "hard", example: "Es mi primera vez usando el metro, ¿dónde compro el boleto?", exampleTranslation: "Pierwszy raz korzystam z metra, gdzie kupić bilet?" },
      { id: "trans15", polish: "Kiedy odjeżdża następny?", spanish: "¿Cuándo sale el próximo?", difficulty: "hard", example: "Perdí mi autobús, ¿cuándo sale el próximo hacia el aeropuerto?", exampleTranslation: "Spóźniłem się na autobus, kiedy odjeżdża następny na lotnisko?" }
    ]
  },

  quantities_amounts: {
    name: "Ilości i wielkości",
    description: "Wyrażanie ilości",
    icon: Ruler,
    color: "from-purple-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "quan1", polish: "Dużo", spanish: "Mucho", difficulty: "easy", example: "Hay mucha gente en la plaza hoy por la tarde", exampleTranslation: "Jest dużo ludzi na placu dzisiaj po południu" },
      { id: "quan2", polish: "Mało", spanish: "Poco", difficulty: "easy", example: "Queda poca leche en el refrigerador, hay que comprar más", exampleTranslation: "Zostało mało mleka w lodówce, trzeba kupić więcej" },
      { id: "quan3", polish: "Trochę", spanish: "Un poco", difficulty: "easy", example: "¿Me das un poco de azúcar para el café?", exampleTranslation: "Dasz mi trochę cukru do kawy?" },
      { id: "quan4", polish: "Wszystko", spanish: "Todo", difficulty: "easy", example: "Comimos todo lo que había en la mesa", exampleTranslation: "Zjedliśmy wszystko co było na stole" },
      { id: "quan5", polish: "Nic", spanish: "Nada", difficulty: "easy", example: "No queda nada de comida en el refrigerador", exampleTranslation: "Nie zostało nic z jedzenia w lodówce" },
      { id: "quan6", polish: "Połowa", spanish: "Mitad", difficulty: "easy", example: "Comí la mitad de la pizza y guardé el resto", exampleTranslation: "Zjadłem połowę pizzy i zachowałem resztę" },
      { id: "quan7", polish: "Podwójnie", spanish: "Doble", difficulty: "medium", example: "El precio subió al doble desde el año pasado", exampleTranslation: "Cena wzrosła podwójnie od zeszłego roku" },
      { id: "quan8", polish: "Potrójnie", spanish: "Triple", difficulty: "medium", example: "Las ventas aumentaron el triple este mes", exampleTranslation: "Sprzedaż wzrosła potrójnie w tym miesiącu" },
      { id: "quan9", polish: "Tuzin", spanish: "Docena", difficulty: "medium", example: "Compré una docena de huevos frescos en el mercado", exampleTranslation: "Kupiłem tuzin świeżych jajek na targu" },
      { id: "quan10", polish: "Para", spanish: "Par", difficulty: "medium", example: "Necesito comprar un par de zapatos nuevos para correr", exampleTranslation: "Muszę kupić nową parę butów do biegania" },
      { id: "quan11", polish: "Wystarczająco", spanish: "Suficiente", difficulty: "medium", example: "Tenemos comida suficiente para todos los invitados", exampleTranslation: "Mamy wystarczająco jedzenia dla wszystkich gości" },
      { id: "quan12", polish: "Nadmiar", spanish: "Exceso", difficulty: "medium", example: "Quita el exceso de agua de las verduras antes de cocinar", exampleTranslation: "Usuń nadmiar wody z warzyw przed gotowaniem" },
      { id: "quan13", polish: "Ile potrzebujesz?", spanish: "¿Cuánto necesitas?", difficulty: "hard", example: "Voy a la tienda por ingredientes, ¿cuánto azúcar necesitas para la receta?", exampleTranslation: "Idę do sklepu po składniki, ile cukru potrzebujesz do przepisu?" },
      { id: "quan14", polish: "To więcej niż wystarczy", spanish: "Es más que suficiente", difficulty: "hard", example: "Me diste mucha ayuda, es más que suficiente, muchas gracias", exampleTranslation: "Dałeś mi dużo pomocy, to więcej niż wystarczy, bardzo dziękuję" },
      { id: "quan15", polish: "Kończy nam się", spanish: "Se nos está acabando", difficulty: "hard", example: "Se nos está acabando el café, alguien debería comprar más pronto", exampleTranslation: "Kończy nam się kawa, ktoś powinien niedługo kupić więcej" }
    ]
  },

  textures_qualities: {
    name: "Tekstury i cechy",
    description: "Jak rzeczy się czują",
    icon: Lamp,
    color: "from-rose-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "tex1", polish: "Miękki", spanish: "Suave", difficulty: "easy", example: "Esta manta es increíblemente suave y cómoda", exampleTranslation: "Ten koc jest niesamowicie miękki i wygodny" },
      { id: "tex2", polish: "Twardy", spanish: "Duro", difficulty: "easy", example: "El banco de madera es demasiado duro para sentarse", exampleTranslation: "Drewniana ławka jest za twarda do siedzenia" },
      { id: "tex3", polish: "Gładki", spanish: "Liso", difficulty: "easy", example: "El piso de mármol está muy liso después de pulirlo", exampleTranslation: "Marmurowa podłoga jest bardzo gładka po wypolerowaniu" },
      { id: "tex4", polish: "Szorstki", spanish: "Áspero", difficulty: "easy", example: "La corteza del árbol se siente áspera cuando la tocas", exampleTranslation: "Kora drzewa jest szorstka gdy ją dotkniesz" },
      { id: "tex5", polish: "Mokry", spanish: "Mojado", difficulty: "easy", example: "No te sientes en el banco, todavía está mojado de la lluvia", exampleTranslation: "Nie siadaj na ławce, wciąż jest mokra od deszczu" },
      { id: "tex6", polish: "Suchy", spanish: "Seco", difficulty: "easy", example: "Asegúrate de que tus manos estén completamente secas", exampleTranslation: "Upewnij się że twoje ręce są całkowicie suche" },
      { id: "tex7", polish: "Lepki", spanish: "Pegajoso", difficulty: "medium", example: "Mis manos están pegajosas después de comer dulces", exampleTranslation: "Moje ręce są lepkie po jedzeniu słodyczy" },
      { id: "tex8", polish: "Śliski", spanish: "Resbaladizo", difficulty: "medium", example: "El piso está resbaladizo cuando está mojado, camina con cuidado", exampleTranslation: "Podłoga jest śliska gdy jest mokra, chodź ostrożnie" },
      { id: "tex9", polish: "Błyszczący", spanish: "Brillante", difficulty: "medium", example: "El coche nuevo tiene una pintura brillante que refleja el sol", exampleTranslation: "Nowy samochód ma błyszczącą farbę która odbija słońce" },
      { id: "tex10", polish: "Matowy", spanish: "Mate", difficulty: "medium", example: "Prefiero el acabado mate en lugar del brillante", exampleTranslation: "Wolę matowe wykończenie zamiast błyszczącego" },
      { id: "tex11", polish: "Puszysty", spanish: "Esponjoso", difficulty: "medium", example: "Este suéter esponjoso me mantiene muy cálido en invierno", exampleTranslation: "Ten puszysty sweter trzyma mnie bardzo ciepło zimą" },
      { id: "tex12", polish: "Chrupiący", spanish: "Crujiente", difficulty: "medium", example: "El pan está perfectamente crujiente, justo como me gusta", exampleTranslation: "Chleb jest idealnie chrupiący, dokładnie jak lubię" },
      { id: "tex13", polish: "Jak to się czuje?", spanish: "¿Cómo se siente?", difficulty: "hard", example: "Antes de comprar esta tela, tócala y dime ¿cómo se siente?", exampleTranslation: "Przed kupnem tej tkaniny dotknij jej i powiedz mi jak to się czuje?" },
      { id: "tex14", polish: "To jest wygodne", spanish: "Es cómodo", difficulty: "hard", example: "Este sofá nuevo es muy cómodo, he estado durmiendo mejor", exampleTranslation: "Ta nowa sofa jest bardzo wygodna, lepiej śpię" },
      { id: "tex15", polish: "Powierzchnia jest szorstka", spanish: "La superficie está áspera", difficulty: "hard", example: "Lija la madera porque la superficie todavía está áspera en algunos lugares", exampleTranslation: "Zeszlifuj drewno bo powierzchnia wciąż jest szorstka w niektórych miejscach" }
    ]
  },

  common_actions: {
    name: "Typowe czynności",
    description: "Codzienne działania",
    icon: Sparkles,
    color: "from-emerald-400 to-green-500",
    level: "beginner",
    words: [
      { id: "act1", polish: "Chodzić", spanish: "Caminar", difficulty: "easy", example: "Camino al trabajo cada mañana para hacer ejercicio", exampleTranslation: "Chodzę do pracy każdego ranka żeby poćwiczyć" },
      { id: "act2", polish: "Biegać", spanish: "Correr", difficulty: "easy", example: "Corro en el parque tres veces por semana", exampleTranslation: "Biegam w parku trzy razy w tygodniu" },
      { id: "act3", polish: "Skakać", spanish: "Saltar", difficulty: "easy", example: "Los niños adoran saltar en el trampolín del patio", exampleTranslation: "Dzieci uwielbiają skakać na trampolinie w ogrodzie" },
      { id: "act4", polish: "Siedzieć", spanish: "Sentarse", difficulty: "easy", example: "Por favor siéntate y ponte cómodo mientras preparo café", exampleTranslation: "Proszę usiądź i rozgość się podczas gdy przygotowuję kawę" },
      { id: "act5", polish: "Stać", spanish: "Estar de pie", difficulty: "easy", example: "Todos se pusieron de pie cuando entró el director", exampleTranslation: "Wszyscy wstali gdy wszedł dyrektor" },
      { id: "act6", polish: "Spać", spanish: "Dormir", difficulty: "easy", example: "Intento dormir al menos ocho horas cada noche", exampleTranslation: "Staram się spać przynajmniej osiem godzin każdej nocy" },
      { id: "act7", polish: "Budzić się", spanish: "Despertarse", difficulty: "medium", example: "Me despierto naturalmente a las seis sin despertador", exampleTranslation: "Budzę się naturalnie o szóstej bez budzika" },
      { id: "act8", polish: "Wspinać się", spanish: "Escalar", difficulty: "medium", example: "Planeamos escalar la montaña el próximo fin de semana", exampleTranslation: "Planujemy wspiąć się na górę w następny weekend" },
      { id: "act9", polish: "Pływać", spanish: "Nadar", difficulty: "medium", example: "Aprendí a nadar cuando tenía cinco años de edad", exampleTranslation: "Nauczyłem się pływać gdy miałem pięć lat" },
      { id: "act10", polish: "Tańczyć", spanish: "Bailar", difficulty: "medium", example: "Bailaron toda la noche en la fiesta de bodas", exampleTranslation: "Tańczyli całą noc na weselu" },
      { id: "act11", polish: "Rzucać", spanish: "Lanzar", difficulty: "medium", example: "Lanza la pelota suavemente para que tu hermana pueda atraparla", exampleTranslation: "Rzuć piłkę delikatnie żeby twoja siostra mogła ją złapać" },
      { id: "act12", polish: "Łapać", spanish: "Atrapar", difficulty: "medium", example: "El jugador hizo una atrapada increíble para ganar el partido", exampleTranslation: "Gracz wykonał niesamowite złapanie żeby wygrać mecz" },
      { id: "act13", polish: "Chodźmy na spacer", spanish: "Vamos a caminar", difficulty: "hard", example: "El clima está hermoso hoy, vamos a caminar juntos por el parque", exampleTranslation: "Pogoda jest piękna dzisiaj, chodźmy razem na spacer po parku" },
      { id: "act14", polish: "Jestem zbyt zmęczony", spanish: "Estoy demasiado cansado", difficulty: "hard", example: "Después de trabajar doce horas, estoy demasiado cansado para moverme", exampleTranslation: "Po dwunastu godzinach pracy jestem zbyt zmęczony żeby się ruszyć" },
      { id: "act15", polish: "Możesz mnie nauczyć?", spanish: "¿Puedes enseñarme?", difficulty: "hard", example: "Nunca aprendí a nadar bien, ¿puedes enseñarme este verano?", exampleTranslation: "Nigdy nie nauczyłem się dobrze pływać, możesz mnie nauczyć tego lata?" }
    ]
  },

  containers_packaging: {
    name: "Pojemniki i opakowania",
    description: "Rzeczy przechowujące",
    icon: Shapes,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    words: [
      { id: "cont1", polish: "Pudło", spanish: "Caja", difficulty: "easy", example: "Empaqué todos mis libros en cajas de cartón para la mudanza", exampleTranslation: "Spakowałem wszystkie książki w kartonowe pudła do przeprowadzki" },
      { id: "cont2", polish: "Torba", spanish: "Bolsa", difficulty: "easy", example: "Trae tus propias bolsas reutilizables cuando vayas de compras", exampleTranslation: "Przynieś własne torby wielokrotnego użytku gdy idziesz na zakupy" },
      { id: "cont3", polish: "Butelka", spanish: "Botella", difficulty: "easy", example: "Siempre cargo una botella de agua para mantenerme hidratado", exampleTranslation: "Zawsze noszę butelkę wody żeby być nawodnionym" },
      { id: "cont4", polish: "Puszka", spanish: "Lata", difficulty: "easy", example: "Esta lata de sopa es perfecta para un almuerzo rápido", exampleTranslation: "Ta puszka zupy jest idealna na szybki lunch" },
      { id: "cont5", polish: "Słoik", spanish: "Frasco", difficulty: "easy", example: "Guarda la mermelada en un frasco de vidrio con tapa", exampleTranslation: "Przechowuj dżem w szklanym słoiku z nakrętką" },
      { id: "cont6", polish: "Pojemnik", spanish: "Contenedor", difficulty: "easy", example: "Pon las sobras en un contenedor hermético", exampleTranslation: "Włóż resztki do hermetycznego pojemnika" },
      { id: "cont7", polish: "Karton", spanish: "Cartón", difficulty: "medium", example: "Compra un cartón de leche y uno de jugo de naranja", exampleTranslation: "Kup karton mleka i jeden soku pomarańczowego" },
      { id: "cont8", polish: "Paczka", spanish: "Paquete", difficulty: "medium", example: "Un paquete de mi pedido en línea llegó esta mañana", exampleTranslation: "Paczka z mojego zamówienia internetowego przyszła dziś rano" },
      { id: "cont9", polish: "Opakowanie", spanish: "Envoltorio", difficulty: "medium", example: "Tira el envoltorio del dulce en la basura, no al suelo", exampleTranslation: "Wyrzuć opakowanie cukierka do śmieci, nie na ziemię" },
      { id: "cont10", polish: "Koperta", spanish: "Sobre", difficulty: "medium", example: "Escribe la dirección claramente en el sobre antes de enviarlo", exampleTranslation: "Napisz adres wyraźnie na kopercie przed wysłaniem" },
      { id: "cont11", polish: "Koszyk", spanish: "Canasta", difficulty: "medium", example: "Ella arregló flores frescas en una hermosa canasta de mimbre", exampleTranslation: "Ona ułożyła świeże kwiaty w pięknym wiklinowym koszyku" },
      { id: "cont12", polish: "Wiadro", spanish: "Cubeta", difficulty: "medium", example: "Llena la cubeta con agua jabonosa para lavar el coche", exampleTranslation: "Napełnij wiadro mydlaną wodą do mycia samochodu" },
      { id: "cont13", polish: "Podaj mi to pudło", spanish: "Pásame esa caja", difficulty: "hard", example: "Necesito los suministros del almacén, pásame esa caja del estante", exampleTranslation: "Potrzebuję materiałów z magazynu, podaj mi to pudło z półki" },
      { id: "cont14", polish: "Co jest w paczce?", spanish: "¿Qué hay en el paquete?", difficulty: "hard", example: "Llegó un paquete sin etiqueta, ¿qué hay en el paquete?", exampleTranslation: "Przyszła paczka bez etykiety, co jest w paczce?" },
      { id: "cont15", polish: "Masz torbę?", spanish: "¿Tienes una bolsa?", difficulty: "hard", example: "Compré más de lo esperado, ¿tienes una bolsa extra que pueda usar?", exampleTranslation: "Kupiłem więcej niż oczekiwałem, masz dodatkową torbę której mogę użyć?" }
    ]
  },

  daily_routines: {
    name: "Codzienna rutyna",
    description: "Codzienne nawyki",
    icon: Sparkles,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "rout1", polish: "Wstawać", spanish: "Levantarse", difficulty: "easy", example: "Me levanto a las seis de la mañana todos los días", exampleTranslation: "Wstaję o szóstej rano każdego dnia" },
      { id: "rout2", polish: "Brać prysznic", spanish: "Ducharse", difficulty: "easy", example: "Me ducho con agua caliente cada mañana antes del trabajo", exampleTranslation: "Biorę gorący prysznic każdego ranka przed pracą" },
      { id: "rout3", polish: "Myć zęby", spanish: "Cepillarse los dientes", difficulty: "easy", example: "Me cepillo los dientes tres veces al día después de comer", exampleTranslation: "Myję zęby trzy razy dziennie po jedzeniu" },
      { id: "rout4", polish: "Ubierać się", spanish: "Vestirse", difficulty: "easy", example: "Me visto rápidamente para no llegar tarde al trabajo", exampleTranslation: "Ubieram się szybko żeby nie spóźnić się do pracy" },
      { id: "rout5", polish: "Jeść śniadanie", spanish: "Desayunar", difficulty: "easy", example: "Desayuno cereales con leche y fruta fresca cada mañana", exampleTranslation: "Jem płatki z mlekiem i świeżymi owocami każdego ranka" },
      { id: "rout6", polish: "Iść do pracy", spanish: "Ir al trabajo", difficulty: "easy", example: "Voy al trabajo en metro porque es más rápido", exampleTranslation: "Idę do pracy metrem bo jest szybciej" },
      { id: "rout7", polish: "Robić zakupy", spanish: "Hacer la compra", difficulty: "medium", example: "Hago la compra semanal en el supermercado los sábados", exampleTranslation: "Robię tygodniowe zakupy w supermarkecie w soboty" },
      { id: "rout8", polish: "Gotować obiad", spanish: "Cocinar la cena", difficulty: "medium", example: "Cocino la cena para toda la familia todas las noches", exampleTranslation: "Gotuję obiad dla całej rodziny każdego wieczoru" },
      { id: "rout9", polish: "Oglądać telewizję", spanish: "Ver televisión", difficulty: "medium", example: "Veo las noticias en la televisión antes de dormir", exampleTranslation: "Oglądam wiadomości w telewizji przed snem" },
      { id: "rout10", polish: "Kłaść się spać", spanish: "Acostarse", difficulty: "medium", example: "Me acuesto a las once de la noche durante la semana", exampleTranslation: "Kładę się spać o jedenastej wieczorem w tygodniu" },
      { id: "rout11", polish: "Wyprowadzać psa", spanish: "Pasear al perro", difficulty: "medium", example: "Paseo al perro dos veces al día por el vecindario", exampleTranslation: "Wyprowadzam psa dwa razy dziennie po okolicy" },
      { id: "rout12", polish: "Sprawdzać pocztę", spanish: "Revisar el correo", difficulty: "medium", example: "Reviso mi correo electrónico varias veces al día", exampleTranslation: "Sprawdzam moją pocztę elektroniczną kilka razy dziennie" },
      { id: "rout13", polish: "O której wstajesz?", spanish: "¿A qué hora te levantas?", difficulty: "hard", example: "¿A qué hora normalmente te levantas los días laborables?", exampleTranslation: "O której zwykle wstajesz w dni robocze?" },
      { id: "rout14", polish: "Mam swoją rutynę", spanish: "Tengo mi rutina", difficulty: "hard", example: "Tengo mi rutina matutina que sigo cada día sin falta", exampleTranslation: "Mam swoją poranną rutynę którą wykonuję każdego dnia bez wyjątku" },
      { id: "rout15", polish: "Zwykle robię to tak", spanish: "Normalmente lo hago así", difficulty: "hard", example: "Normalmente lo hago así porque es la forma más eficiente para mí", exampleTranslation: "Zwykle robię to tak bo to najbardziej efektywny sposób dla mnie" }
    ]
  },

  school_subjects: {
    name: "Przedmioty szkolne",
    description: "Lekcje w szkole",
    icon: PencilRuler,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "subj1", polish: "Matematyka", spanish: "Matemáticas", difficulty: "easy", example: "Las matemáticas son mi materia favorita en la escuela", exampleTranslation: "Matematyka to mój ulubiony przedmiot w szkole" },
      { id: "subj2", polish: "Historia", spanish: "Historia", difficulty: "easy", example: "En la clase de historia aprendemos sobre civilizaciones antiguas", exampleTranslation: "Na lekcji historii uczymy się o starożytnych cywilizacjach" },
      { id: "subj3", polish: "Geografia", spanish: "Geografía", difficulty: "easy", example: "La geografía nos enseña sobre países y continentes del mundo", exampleTranslation: "Geografia uczy nas o krajach i kontynentach świata" },
      { id: "subj4", polish: "Biologia", spanish: "Biología", difficulty: "easy", example: "Estudiamos las células y los organismos vivos en biología", exampleTranslation: "Studiujemy komórki i żywe organizmy na biologii" },
      { id: "subj5", polish: "Chemia", spanish: "Química", difficulty: "easy", example: "Los experimentos de química son fascinantes y educativos", exampleTranslation: "Eksperymenty chemiczne są fascynujące i edukacyjne" },
      { id: "subj6", polish: "Fizyka", spanish: "Física", difficulty: "easy", example: "La física explica cómo funciona el universo y la naturaleza", exampleTranslation: "Fizyka wyjaśnia jak działa wszechświat i natura" },
      { id: "subj7", polish: "Literatura", spanish: "Literatura", difficulty: "medium", example: "En literatura leemos y analizamos obras clásicas importantes", exampleTranslation: "Na literaturze czytamy i analizujemy ważne dzieła klasyczne" },
      { id: "subj8", polish: "Język obcy", spanish: "Idioma extranjero", difficulty: "medium", example: "Estudio español como mi segundo idioma extranjero", exampleTranslation: "Uczę się hiszpańskiego jako mojego drugiego języka obcego" },
      { id: "subj9", polish: "Wychowanie fizyczne", spanish: "Educación física", difficulty: "medium", example: "La educación física es importante para la salud de los estudiantes", exampleTranslation: "Wychowanie fizyczne jest ważne dla zdrowia uczniów" },
      { id: "subj10", polish: "Muzyka", spanish: "Música", difficulty: "medium", example: "En la clase de música aprendemos a tocar instrumentos", exampleTranslation: "Na lekcji muzyki uczymy się grać na instrumentach" },
      { id: "subj11", polish: "Plastyka", spanish: "Arte", difficulty: "medium", example: "La clase de arte desarrolla la creatividad de los estudiantes", exampleTranslation: "Lekcja plastyki rozwija kreatywność uczniów" },
      { id: "subj12", polish: "Informatyka", spanish: "Informática", difficulty: "medium", example: "En informática aprendemos programación y diseño digital", exampleTranslation: "Na informatyce uczymy się programowania i projektowania cyfrowego" },
      { id: "subj13", polish: "Jaki masz ulubiony przedmiot?", spanish: "¿Cuál es tu materia favorita?", difficulty: "hard", example: "¿Cuál es tu materia favorita en la escuela y por qué te gusta?", exampleTranslation: "Jaki jest twój ulubiony przedmiot w szkole i dlaczego go lubisz?" },
      { id: "subj14", polish: "Mam egzamin z matematyki", spanish: "Tengo examen de matemáticas", difficulty: "hard", example: "Tengo un examen importante de matemáticas mañana por la mañana", exampleTranslation: "Mam ważny egzamin z matematyki jutro rano" },
      { id: "subj15", polish: "Ta lekcja jest interesująca", spanish: "Esta clase es interesante", difficulty: "hard", example: "Esta clase de historia es muy interesante porque el profesor explica bien", exampleTranslation: "Ta lekcja historii jest bardzo interesująca bo nauczyciel dobrze wyjaśnia" }
    ]
  },

  banking_services: {
    name: "Bank i finanse",
    description: "Usługi bankowe",
    icon: FileText,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "bank1", polish: "Bank", spanish: "Banco", difficulty: "easy", example: "Voy al banco esta tarde para depositar mi cheque", exampleTranslation: "Idę do banku po południu żeby wpłacić mój czek" },
      { id: "bank2", polish: "Konto", spanish: "Cuenta", difficulty: "easy", example: "Abrí una cuenta de ahorros para guardar dinero", exampleTranslation: "Otworzyłem konto oszczędnościowe żeby oszczędzać pieniądze" },
      { id: "bank3", polish: "Gotówka", spanish: "Efectivo", difficulty: "easy", example: "Prefiero pagar en efectivo en lugar de tarjeta", exampleTranslation: "Wolę płacić gotówką zamiast kartą" },
      { id: "bank4", polish: "Wypłacać", spanish: "Retirar", difficulty: "easy", example: "Necesito retirar dinero del cajero automático antes de ir de compras", exampleTranslation: "Muszę wypłacić pieniądze z bankomatu przed pójściem na zakupy" },
      { id: "bank5", polish: "Wpłacać", spanish: "Depositar", difficulty: "easy", example: "Por favor deposita este cheque en mi cuenta corriente", exampleTranslation: "Proszę wpłać ten czek na moje konto bieżące" },
      { id: "bank6", polish: "Saldo", spanish: "Saldo", difficulty: "easy", example: "Reviso el saldo de mi cuenta cada semana por internet", exampleTranslation: "Sprawdzam saldo mojego konta co tydzień przez internet" },
      { id: "bank7", polish: "Przelew", spanish: "Transferencia", difficulty: "medium", example: "Hice una transferencia bancaria para pagar el alquiler", exampleTranslation: "Zrobiłem przelew bankowy żeby zapłacić czynsz" },
      { id: "bank8", polish: "Odsetki", spanish: "Interés", difficulty: "medium", example: "Esta cuenta de ahorros ofrece tres por ciento de interés anual", exampleTranslation: "To konto oszczędnościowe oferuje trzy procent odsetek rocznie" },
      { id: "bank9", polish: "Pożyczka", spanish: "Préstamo", difficulty: "medium", example: "Solicitamos un préstamo hipotecario para comprar una casa", exampleTranslation: "Złożyliśmy wniosek o pożyczkę hipoteczną na kupno domu" },
      { id: "bank10", polish: "Karta kredytowa", spanish: "Tarjeta de crédito", difficulty: "medium", example: "Pago con tarjeta de crédito y la liquido cada mes", exampleTranslation: "Płacę kartą kredytową i spłacam ją co miesiąc" },
      { id: "bank11", polish: "Wyciąg", spanish: "Estado de cuenta", difficulty: "medium", example: "Recibo mi estado de cuenta bancaria por correo electrónico", exampleTranslation: "Otrzymuję wyciąg z konta bankowego emailem" },
      { id: "bank12", polish: "Prowizja", spanish: "Comisión", difficulty: "medium", example: "El banco cobra una comisión mensual por mantenimiento de cuenta", exampleTranslation: "Bank pobiera miesięczną prowizję za utrzymanie konta" },
      { id: "bank13", polish: "Chcę otworzyć konto", spanish: "Quiero abrir una cuenta", difficulty: "hard", example: "Quiero abrir una cuenta corriente con acceso a banca en línea", exampleTranslation: "Chcę otworzyć konto bieżące z dostępem do bankowości internetowej" },
      { id: "bank14", polish: "Jaki jest kurs wymiany?", spanish: "¿Cuál es el tipo de cambio?", difficulty: "hard", example: "¿Cuál es el tipo de cambio actual para convertir euros a dólares?", exampleTranslation: "Jaki jest aktualny kurs wymiany euro na dolary?" },
      { id: "bank15", polish: "Karta została odrzucona", spanish: "La tarjeta fue rechazada", difficulty: "hard", example: "Mi tarjeta fue rechazada en la tienda, ¿puede verificar mi cuenta?", exampleTranslation: "Moja karta została odrzucona w sklepie, czy może pan sprawdzić moje konto?" }
    ]
  }
};
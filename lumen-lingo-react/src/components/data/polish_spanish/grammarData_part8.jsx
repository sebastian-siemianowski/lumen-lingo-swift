/**
 * POLISH → SPANISH GRAMMAR - PART 8
 * 3 categories, 15 questions each - Advanced communication
 */

import { Zap, Clock, Heart } from "lucide-react";

export const part8Categories = {
  commands_with_pronouns: {
    name: "Rozkazy z zaimkami",
    description: "Łącz tryb rozkazujący z zaimkami",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "cmd_pro_1",
        question: "_____ la verdad a tus padres, ellos merecen saber lo que realmente pasó ayer.",
        translation: "(Powiedz im prawdę swoim rodzicom, zasługują na to, żeby wiedzieć, co naprawdę się stało wczoraj)",
        options: ["Diles", "Díles", "Díceles", "Decirles"],
        correct: "Diles",
        explanation: "'Di' + 'les' łączą się bez akcentu! Tryb rozkazujący + zaimek tworzy jedno słowo. To intensywny sposób wyrażenia pilności. Prawda zawsze wychodzi na jaw! 💬"
      },
      {
        id: "cmd_pro_2",
        question: "No _____ mentiras a tu hermana pequeña, la honestidad es muy importante en familia.",
        translation: "(Nie opowiadaj jej kłamstw swojej małej siostrze, uczciwość jest bardzo ważna w rodzinie)",
        options: ["le digas", "dile", "la digas", "díle"],
        correct: "le digas",
        explanation: "Przecząca forma używa trybu łączącego! 'No digas' + 'le' = 'no le digas'. Negacja zawsze łagodniejsza z trybie łączącym. Kłamstwa niszczą zaufanie! 🚫"
      },
      {
        id: "cmd_pro_3",
        question: "_____bien las manos con jabón antes de comer para evitar enfermedades molestas.",
        translation: "(Umyj sobie dobrze ręce mydłem przed jedzeniem, żeby uniknąć denerwujących chorób)",
        options: ["Lávate", "Lávatelas", "Te lava", "Lava te"],
        correct: "Lávate",
        explanation: "'Lávate' to zwrotny rozkaz! 'Lavar' + 'te' łączą się. Higiena to podstawa zdrowia. Mama zawsze miała rację mówiąc to! 🧼"
      },
      {
        id: "cmd_pro_4",
        question: "_____ ese abrigo caliente porque hace mucho frío afuera en la calle hoy.",
        translation: "(Załóż sobie ten ciepły płaszcz, bo jest bardzo zimno na zewnątrz na ulicy dziś)",
        options: ["Pónte", "Te pon", "Ponlo", "Ponte"],
        correct: "Pónte",
        explanation: "'Pon' + 'te' z akcentem! Akcentujemy, żeby zachować oryginalne brzmienie. Trzecia sylaba od końca potrzebuje akcentu. Ciepłe ubranie chroni przed chorobą! 🧥"
      },
      {
        id: "cmd_pro_5",
        question: "Si te gusta ese vestido bonito, _____ inmediatamente antes de que se agote la talla.",
        translation: "(Jeśli podoba ci się ta ładna sukienka, kup ją sobie natychmiast zanim zabraknie rozmiaru)",
        options: ["cómpratelo", "te lo compra", "cómpralo", "compratelo"],
        correct: "cómpratelo",
        explanation: "Dwa zaimki! 'Compra' + 'te' + 'lo' = 'cómpratelo'. Akcentujemy dla zachowania wymowy. To jak dobre zamówienie - kup TO dla SIEBIE! 👗"
      },
      {
        id: "cmd_pro_6",
        question: "No _____ nervioso por el examen, has estudiado muy bien y estás preparado.",
        translation: "(Nie denerwuj się egzaminem, uczyłeś się bardzo dobrze i jesteś przygotowany)",
        options: ["te pongas", "pongas", "te pones", "pones"],
        correct: "te pongas",
        explanation: "Przeczący rozkaz zwrotny! 'No' + zaimek + czasownik trybu łączącego. 'No te pongas nervioso' to pocieszenie. Spokój umysłu pomaga w egzaminach! 😌"
      },
      {
        id: "cmd_pro_7",
        question: "_____ estos documentos importantes al jefe antes de que termine la jornada laboral hoy.",
        translation: "(Zanieś mu te ważne dokumenty szefowi zanim skończy się dzień pracy dzisiaj)",
        options: ["Llévaselos", "Lleváselos", "Llévalos", "Se los lleva"],
        correct: "Llévaselos",
        explanation: "Trzy elementy! 'Lleva' + 'se' + 'los'. 'Le' zmienia się na 'se' przed 'lo/la/los/las'. To jak taniec zaimków - mają swoje zasady! 📄"
      },
      {
        id: "cmd_pro_8",
        question: "_____ de hacer tanto ruido, los vecinos están tratando de descansar después del trabajo.",
        translation: "(Przestań robić tyle hałasu, sąsiedzi próbują odpoczywać po pracy)",
        options: ["Deja", "Déja", "No dejes", "Dejar"],
        correct: "Deja",
        explanation: "'Dejar de' + infinitivo to przestać coś robić! Forma tú trybu rozkazującego. Szacunek dla sąsiadów tworzy harmonię. Cisza wieczorem jest złotem! 🤫"
      },
      {
        id: "cmd_pro_9",
        question: "_____ el móvil en modo silencioso cuando entres en la biblioteca universitaria grande.",
        translation: "(Ustaw sobie telefon w tryb cichy, kiedy wejdziesz do dużej biblioteki uniwersyteckiej)",
        options: ["Ponte", "Pónte", "Te pon", "Pon"],
        correct: "Ponte",
        explanation: "'Pon' + 'te' bez akcentu tutaj! 'Ponte' to jedna sylaba akcentowana naturalnie. Cisza w bibliotece to szacunek dla studiujących! 📚"
      },
      {
        id: "cmd_pro_10",
        question: "Si tienes alguna duda importante sobre la lección, _____ al profesor sin miedo.",
        translation: "(Jeśli masz jakiekolwiek ważne wątpliwości co do lekcji, zapytaj nauczyciela bez strachu)",
        options: ["pregúntale", "pregúntalos", "le pregunta", "preguntale"],
        correct: "pregúntale",
        explanation: "'Pregunta' + 'le' z akcentem! Zachowujemy oryginalne brzmienie czasownika. Pytania są znakiem inteligencji, nie ignorancji. Nigdy nie bój się pytać! ❓"
      },
      {
        id: "cmd_pro_11",
        question: "_____ esa medicina al niño enfermo tres veces al día con un poco de agua.",
        translation: "(Podaj to lekarstwo choremu dziecku trzy razy dziennie z odrobiną wody)",
        options: ["Dale", "Dále", "Da le", "Dalas"],
        correct: "Dale",
        explanation: "'Da' + 'le' łączą się naturalnie! 'Dale' to częste wyrażenie - dale esto, dale aquello. Troska o chorych wymaga cierpliwości i miłości! 💊"
      },
      {
        id: "cmd_pro_12",
        question: "No _____ a lugares peligrosos de noche solo, siempre ve acompañado por seguridad.",
        translation: "(Nie chodź w niebezpieczne miejsca w nocy sam, zawsze idź w towarzystwie dla bezpieczeństwa)",
        options: ["vayas", "vas", "vete", "te vayas"],
        correct: "vayas",
        explanation: "Przeczący rozkaz bez zaimka! 'No vayas' to proste 'nie idź'. Czasem zaimek nie jest potrzebny. To rada rodzica - bezpieczeństwo jest najważniejsze! 🌙"
      },
      {
        id: "cmd_pro_13",
        question: "_____ todos tus juguetes del suelo y guárdalos en tu habitación ordenadamente.",
        translation: "(Zbierz wszystkie swoje zabawki z podłogi i schowaj je porządnie w swoim pokoju)",
        options: ["Recoge", "Recógelos", "Los recoge", "Recoger"],
        correct: "Recoge",
        explanation: "'Recoge' to 'zbierz' bez dodatkowego zaimka! 'Tus juguetes' już określa własność. Czasem prostsza forma jest lepsza. Porządek uczy odpowiedzialności! 🧸"
      },
      {
        id: "cmd_pro_14",
        question: "_____ cuidado con el perro grande del vecino, a veces puede ser muy territorial y ladrar.",
        translation: "(Uważaj na dużego psa sąsiada, czasem może być bardzo terytorialny i szczekać)",
        options: ["Ten", "Téne", "Tener", "Tienes"],
        correct: "Ten",
        explanation: "'Tener cuidado' to 'uważać'! 'Ten' to nieregularny rozkaz od 'tener'. Krótki, ale skuteczny. Szacunek dla zwierząt terytorialnych to mądrość! 🐕"
      }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasu",
    description: "Mów precyzyjnie o czasie i momentach",
    icon: Clock,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "time_1",
        question: "_____ tres días que no duermo bien por el estrés del trabajo y los problemas.",
        translation: "(Od trzech dni nie śpię dobrze z powodu stresu w pracy i problemów)",
        options: ["Hace", "Desde", "Por", "Durante"],
        correct: "Hace",
        explanation: "'Hace + czas' to 'od jak dawna' dla kontynuacji! 'Hace tres días que...' mówi o okresie trwającym do teraz. Stres wpływa na sen - to normalne! 😴"
      },
      {
        id: "time_2",
        question: "_____ dos horas esperando en la cola del banco sin poder sentarme a descansar.",
        translation: "(Czekam dwie godziny w kolejce do banku bez możliwości usiąść i odpocząć)",
        options: ["Llevo", "Tengo", "Estoy", "Hace"],
        correct: "Llevo",
        explanation: "'Llevar + gerundio' to 'już... od' dla akcji trwającej! 'Llevo esperando' pokazuje, że nadal czekasz. Kolejki w bankach testują cierpliwość wszystkich! ⏰"
      },
      {
        id: "time_3",
        question: "Estudiamos español _____ hace dos años y cada día aprendemos algo nuevo interesante.",
        translation: "(Uczymy się hiszpańskiego od dwóch lat i każdego dnia uczymy się czegoś nowego i ciekawego)",
        options: ["desde", "hace", "por", "durante"],
        correct: "desde",
        explanation: "'Desde hace' to 'od czasu' - początek okresu! Pokazuje kiedy zaczęło się. Nauka języka to podróż bez końca, pełna odkryć! 📚"
      },
      {
        id: "time_4",
        question: "Voy a quedarme en Madrid _____ una semana completa visitando museos y monumentos históricos.",
        translation: "(Zostanę w Madrycie przez cały tydzień odwiedzając muzea i historyczne zabytki)",
        options: ["durante", "por", "hace", "desde"],
        correct: "durante",
        explanation: "'Durante' to 'podczas, przez' dla określonego czasu! Wiesz dokładnie, ile - tydzień. Madrid ma niezliczone skarby kulturowe do odkrycia! 🏛️"
      },
      {
        id: "time_5",
        question: "_____ la mañana me gusta tomar un café tranquilo antes de empezar mi jornada laboral.",
        translation: "(Rano lubię wypić spokojną kawę przed rozpoczęciem mojego dnia pracy)",
        options: ["Por", "En", "Durante", "A"],
        correct: "Por",
        explanation: "'Por la mañana/tarde/noche' to części dnia! To idiomatyczne - zawsze 'por'. Poranna kawa to rytuał rozpoczynający dzień w Hiszpanii! ☕"
      },
      {
        id: "time_6",
        question: "Terminaré este informe importante _____ dos horas si no me interrumpen constantemente.",
        translation: "(Skończę ten ważny raport w dwie godziny, jeśli nie będą mi ciągle przeszkadzać)",
        options: ["en", "a", "por", "durante"],
        correct: "en",
        explanation: "'En + czas' to 'w ciągu' - planowane zakończenie! Pokazuje deadline. 'En dos horas' to moment w przyszłości. Koncentracja jest kluczowa! ⚡"
      },
      {
        id: "time_7",
        question: "_____ la una de la tarde comemos en familia todos juntos en el comedor grande.",
        translation: "(O pierwszej po południu jemy obiad rodzinnie wszyscy razem w dużej jadalni)",
        options: ["A", "En", "Por", "Hacia"],
        correct: "A",
        explanation: "'A + godzina' to konkretny moment! 'A la una' znaczy dokładnie o 13:00. Rodzinne obiady to święta tradycja w Hiszpanii! 🍽️"
      },
      {
        id: "time_8",
        question: "_____ la semana pasada fui al médico tres veces por un problema de salud molesto.",
        translation: "(W zeszłym tygodniu byłem u lekarza trzy razy z powodu denerwującego problemu zdrowotnego)",
        options: ["Durante", "En", "Por", "Hace"],
        correct: "Durante",
        explanation: "'Durante la semana pasada' to 'podczas' zakończonego okresu. Opisuje, kiedy coś miało miejsce w tym czasie. Zdrowie wymaga uwagi! 🏥"
      },
      {
        id: "time_9",
        question: "Mis abuelos vivieron en esa casa antigua _____ más de cincuenta años felices juntos.",
        translation: "(Moi dziadkowie mieszkali w tym starym domu przez ponad pięćdziesiąt szczęśliwych lat razem)",
        options: ["durante", "por", "hace", "desde"],
        correct: "durante",
        explanation: "'Durante' dla długiego okresu w przeszłości! Pokazuje trwanie ich życia tam. Pięćdziesiąt lat razem to piękna historia miłości! 💑"
      },
      {
        id: "time_10",
        question: "_____ este momento estoy muy ocupado, ¿podemos hablar después en la tarde?",
        translation: "(W tym momencie jestem bardzo zajęty, czy możemy porozmawiać później po południu?)",
        options: ["En", "A", "Por", "Durante"],
        correct: "En",
        explanation: "'En este momento' to 'w tym momencie' - teraz! To grzeczne wytłumaczenie zajętości. Szacunek czasu innych jest ważny! ⏰"
      },
      {
        id: "time_11",
        question: "El tren llegará a la estación _____ las cinco y media de la tarde puntualmente.",
        translation: "(Pociąg przyjedzie na stację o piątej trzydzieści po południu punktualnie)",
        options: ["a", "en", "por", "hacia"],
        correct: "a",
        explanation: "'A + godzina dokładna' to precyzyjny czas! Rozkłady jazdy używają 'a'. Hiszpańskie pociągi są zazwyczaj punktualne! 🚂"
      },
      {
        id: "time_12",
        question: "_____ unos minutos te llamo de vuelta, ahora mismo estoy en una reunión virtual.",
        translation: "(Za kilka minut oddzwonię do ciebie, teraz jestem na wirtualnym spotkaniu)",
        options: ["En", "A", "Dentro de", "Después"],
        correct: "En",
        explanation: "'En + czas' dla przyszłej akcji! 'En unos minutos' to za chwilę. To obietnica szybkiego kontaktu. Cierpliwość jest cnotą! 📞"
      },
      {
        id: "time_13",
        question: "Trabajo en esta empresa internacional _____ el año dos mil quince sin interrupción.",
        translation: "(Pracuję w tej międzynarodowej firmie od roku dwa tysiące piętnastego bez przerwy)",
        options: ["desde", "hace", "por", "en"],
        correct: "desde",
        explanation: "'Desde + data' to 'od' konkretnego momentu! Pokazuje punkt startowy. Długa służba w firmie pokazuje lojalność i stabilność! 💼"
      },
      {
        id: "time_14",
        question: "_____ las vacaciones de verano visitamos cinco países europeos diferentes en autocaravana.",
        translation: "(Podczas letnich wakacji odwiedziliśmy pięć różnych krajów europejskich kamperem)",
        options: ["Durante", "En", "Por", "Hace"],
        correct: "Durante",
        explanation: "'Durante las vacaciones' to 'podczas wakacji' - ograniczony okres! Kamperem po Europie to przygoda życia. Wolność na kółkach! 🚐"
      },
      {
        id: "time_15",
        question: "_____ la noche me gusta leer libros interesantes en mi cama cómoda antes de dormir.",
        translation: "(Wieczorem lubię czytać ciekawe książki w moim wygodnym łóżku przed snem)",
        options: ["Por", "En", "A", "Durante"],
        correct: "Por",
        explanation: "'Por la noche' to idiom dla 'wieczorem'! Zawsze 'por' z porami dnia. Czytanie przed snem uspokaja umysł! 📖"
      }
    ]
  },

  colors_and_descriptions: {
    name: "Kolory i opisy",
    description: "Opisuj świat wokół siebie kolorowo",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "col_1",
        question: "Mi coche favorito es _____ como el color del cielo en un día soleado.",
        translation: "(Mój ulubiony samochód jest niebieski jak kolor nieba w słoneczny dzień)",
        options: ["azul", "azulo", "azula", "azules"],
        correct: "azul",
        explanation: "Większość kolorów jest niezmienna dla rodzaju! 'Azul' jest taki sam dla 'el coche azul' i 'la casa azul'. Niebieski to kolor spokoju! 💙"
      },
      {
        id: "col_2",
        question: "Las flores del jardín de mi abuela son _____ y huelen increíblemente bien siempre.",
        translation: "(Kwiaty w ogrodzie mojej babci są różowe i zawsze pachną niewiarygodnie dobrze)",
        options: ["rosas", "rosa", "rosadas", "rosados"],
        correct: "rosas",
        explanation: "'Rosa' jako kolor jest niezmienny! Ale możemy też użyć 'rosadas' dla emfazy. 'Flores rosas' to standardowa forma. Ogrody babć są magiczne! 🌸"
      },
      {
        id: "col_3",
        question: "Prefiero los zapatos _____ porque combinan bien con toda mi ropa del armario.",
        translation: "(Wolę czarne buty, bo dobrze komponują się ze wszystkimi moimi ubraniami z szafy)",
        options: ["negros", "negro", "negras", "negres"],
        correct: "negros",
        explanation: "'Negro' zmienia się! 'Zapatos' są męskie liczba mnoga, więc 'negros'. Czarne buty to klasyka - pasują do wszystkiego! 👞"
      },
      {
        id: "col_4",
        question: "El vestido que llevó mi hermana a la boda era _____ y muy elegante para la ocasión.",
        translation: "(Sukienka, którą nosiła moja siostra na ślubie, była czerwona i bardzo elegancka na tę okazję)",
        options: ["rojo", "roja", "rojos", "rojas"],
        correct: "rojo",
        explanation: "Uwaga! 'El vestido' to męski, więc 'rojo'! Nawet że to sukienka, słowo jest męskie. Czerwień na weselu to odwaga i pasja! 👗"
      },
      {
        id: "col_5",
        question: "Las paredes de mi habitación están pintadas de color _____ claro para más luminosidad.",
        translation: "(Ściany mojego pokoju są pomalowane na jasny zielony kolor dla większej jasności)",
        options: ["verde", "verdo", "verda", "verdes"],
        correct: "verde",
        explanation: "'Verde' niezmienny dla rodzaju! 'Color verde' działa dla wszystkiego. Zielony to kolor natury i spokoju - idealny dla sypialni! 🌿"
      },
      {
        id: "col_6",
        question: "Me encantan las manzanas _____ porque son más dulces que las verdes ácidas.",
        translation: "(Uwielbiam czerwone jabłka, bo są słodsze niż kwaśne zielone)",
        options: ["rojas", "rojo", "roja", "rojos"],
        correct: "rojas",
        explanation: "'Manzanas' żeńskie, liczba mnoga - 'rojas'! Kolory zgadzają się z rzeczownikiem. Czerwone jabłka to klasyka zdrowia! 🍎"
      },
      {
        id: "col_7",
        question: "El cielo está completamente _____ hoy, no hay ni una sola nube visible en todo el horizonte.",
        translation: "(Niebo jest całkowicie szare dziś, nie ma ani jednej widocznej chmury na całym horyzoncie)",
        options: ["gris", "griso", "grisa", "grises"],
        correct: "gris",
        explanation: "'Gris' to niezmienny kolor! Taki sam dla męskich i żeńskich. Szare niebo zapowiada deszcz w Hiszpanii! 🌫️"
      },
      {
        id: "col_8",
        question: "Mi hermano pequeño tiene los ojos _____ como el color del chocolate con leche.",
        translation: "(Mój młodszy brat ma brązowe oczy jak kolor czekolady z mlekiem)",
        options: ["marrones", "marrón", "marrónes", "marrona"],
        correct: "marrones",
        explanation: "'Marrón' zmienia się na 'marrones' w liczbie mnogiej! 'Ojos' to liczba mnoga. Brązowe oczy są ciepłe i przyjaźnie! 👀"
      },
      {
        id: "col_9",
        question: "La nieve en las montañas es completamente _____ y pura, parece un manto de algodón.",
        translation: "(Śnieg w górach jest całkowicie biały i czysty, wygląda jak koc z bawełny)",
        options: ["blanca", "blanco", "blancas", "blancos"],
        correct: "blanca",
        explanation: "'La nieve' jest żeńska, więc 'blanca'! Zawsze sprawdzaj rodzaj rzeczownika. Śnieg w górach hiszpańskich jest magiczny! ❄️"
      },
      {
        id: "col_10",
        question: "Ese edificio muy antiguo tiene una fachada _____ que destaca entre todos los demás modernos.",
        translation: "(Ten bardzo stary budynek ma żółtą fasadę, która wyróżnia się wśród wszystkich innych nowoczesnych)",
        options: ["amarilla", "amarillo", "amarillas", "amarillos"],
        correct: "amarilla",
        explanation: "'La fachada' żeńska wymaga 'amarilla'! Żółte budynki są typowe dla Hiszpanii - przypominają słońce! 🏛️"
      },
      {
        id: "col_11",
        question: "Los plátanos maduros se ponen _____ cuando están perfectos para comer con buen sabor.",
        translation: "(Dojrzałe banany stają się brązowe, kiedy są idealne do jedzenia z dobrym smakiem)",
        options: ["marrones", "marrón", "marrónes", "marrona"],
        correct: "marrones",
        explanation: "'Ponerse + kolor' to stawać się! 'Plátanos' męskie, liczba mnoga = 'marrones'. Brązowe banany są najsłodsze - to nauka natury! 🍌"
      },
      {
        id: "col_12",
        question: "Mi color favorito personal es el _____ porque me recuerda al mar Mediterráneo tranquilo.",
        translation: "(Moim osobistym ulubionym kolorem jest niebieski, bo przypomina mi spokojne Morze Śródziemne)",
        options: ["azul", "azulo", "azula", "azules"],
        correct: "azul",
        explanation: "Z rodzajnikiem 'el azul' mówimy o kolorze jako koncepcji! To jak nazwa. Morze Śródziemne ma najpiękniejszy niebieski! 🌊"
      },
      {
        id: "col_13",
        question: "Necesito comprar pintura _____ para pintar la puerta de entrada de mi casa vieja.",
        translation: "(Muszę kupić białą farbę, żeby pomalować drzwi wejściowe mojego starego domu)",
        options: ["blanca", "blanco", "blancas", "blancos"],
        correct: "blanca",
        explanation: "'La pintura' żeńska wymaga 'blanca'! Farba zgadza się z 'pintura', nie z 'puerta'. Białe drzwi to klasyka śródziemnomorska! 🎨"
      },
      {
        id: "col_14",
        question: "Las hojas de los árboles se vuelven _____ en otoño antes de caer al suelo.",
        translation: "(Liście drzew stają się żółte jesienią przed spadnięciem na ziemię)",
        options: ["amarillas", "amarillo", "amarillos", "amarilla"],
        correct: "amarillas",
        explanation: "'Las hojas' żeńskie, liczba mnoga! 'Volverse' + kolor to transformacja. Jesień to festiwal kolorów natury! 🍂"
      },
      {
        id: "col_15",
        question: "Ese gato tiene el pelo completamente _____ y los ojos verdes muy expresivos.",
        translation: "(Ten kot ma całkowicie czarną sierść i bardzo ekspresywne zielone oczy)",
        options: ["negro", "negra", "negros", "negras"],
        correct: "negro",
        explanation: "'El pelo' męski wymaga 'negro'! Czarne koty w Hiszpanii nie przynoszą pecha - to tylko przesąd! Wszystkie koty są piękne! 🐱"
      }
    ]
  }
};

export default part8Categories;
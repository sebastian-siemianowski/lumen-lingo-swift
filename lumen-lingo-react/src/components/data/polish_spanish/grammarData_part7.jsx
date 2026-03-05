/**
 * POLISH → SPANISH GRAMMAR - PART 7
 * 3 categories, 15 questions each - Building fluency
 */

import { Wind, Hash, ArrowLeftRight } from "lucide-react";

export const part7Categories = {
  adverbs_and_phrases: {
    name: "Przysłówki i wyrażenia",
    description: "Dodaj szczegółów do swoich opisów",
    icon: Wind,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "adv_1",
        question: "Mi hermano conduce muy _____ por la autopista, siempre respeta los límites de velocidad.",
        translation: "(Mój brat jeździ bardzo wolno autostradą, zawsze przestrzega ograniczeń prędkości)",
        options: ["despacio", "despacioso", "lento", "lentamente"],
        correct: "despacio",
        explanation: "'Despacio' to przysłówek znaczący 'wolno' dla ruchu. 'Lento' to przymiotnik. Przysłówki opisują czasowniki - JAK ktoś coś robi. Bezpieczeństwo na drodze to priorytet! 🚗"
      },
      {
        id: "adv_2",
        question: "_____ llueve mucho en esta región montañosa durante los meses de invierno frío.",
        translation: "(Często pada dużo w tym górskim regionie podczas zimnych miesięcy zimowych)",
        options: ["A menudo", "Muchas veces", "Siempre", "Nunca"],
        correct: "A menudo",
        explanation: "'A menudo' to eleganc przysłówek częstotliwości. Bardziej formalny niż 'muchas veces'. W Hiszpanii deszcz w górach jest błogosławieństwem dla natury! ☔"
      },
      {
        id: "adv_3",
        question: "Ella habla _____ tres idiomas con fluidez: español, inglés y francés perfectamente.",
        translation: "(Ona mówi płynnie trzema językami: hiszpańskim, angielskim i francuskim perfekcyjnie)",
        options: ["bien", "bueno", "buena", "buenos"],
        correct: "bien",
        explanation: "'Bien' to przysłówek (dobrze), 'bueno' to przymiotnik (dobry). Po czasownikach zawsze przysłówki! 'Hablar bien' to mówić dobrze. Języki są kluczem do świata! 🗣️"
      },
      {
        id: "adv_4",
        question: "Terminé mi trabajo _____ y ahora tengo todo el día libre para disfrutar.",
        translation: "(Skończyłem swoją pracę szybko i teraz mam cały dzień wolny, żeby się cieszyć)",
        options: ["rápidamente", "rápido", "rápida", "rápidos"],
        correct: "rápidamente",
        explanation: "Przysłówki z '-mente' są jak '-ly' w angielskim! 'Rápidamente' pochodzi od 'rápida' + 'mente'. To formalny sposób. Efektywność daje więcej wolnego czasu! ⚡"
      },
      {
        id: "adv_5",
        question: "_____ voy al gimnasio tres veces por semana para mantenerme en forma y saludable.",
        translation: "(Zazwyczaj chodzę na siłownię trzy razy w tygodniu, żeby utrzymać formę i zdrowie)",
        options: ["Normalmente", "Normal", "De normal", "Normalidad"],
        correct: "Normalmente",
        explanation: "'Normalmente' to 'zazwyczaj' - pokazuje twoją rutynę. Końcówka '-mente' tworzy przysłówek od przymiotnika 'normal'. Regularność jest sekretem sukcesu! 💪"
      },
      {
        id: "adv_6",
        question: "Mi abuelo camina _____ con su bastón porque tiene problemas en las rodillas.",
        translation: "(Mój dziadek chodzi powoli z laską, bo ma problemy z kolanami)",
        options: ["lentamente", "lento", "lenta", "lentos"],
        correct: "lentamente",
        explanation: "'Lentamente' opisuje sposób chodzenia. To delikatny sposób mówienia o ograniczeniach wieku. W Hiszpanii starsi są szanowani i wspierani przez rodzinę! 👴"
      },
      {
        id: "adv_7",
        question: "_____ me despierto temprano en la mañana, aprovecho para hacer ejercicio antes del trabajo.",
        translation: "(Kiedy budzę się wcześnie rano, wykorzystuję to, żeby poćwiczyć przed pracą)",
        options: ["Cuando", "Cuándo", "Que", "Cual"],
        correct: "Cuando",
        explanation: "'Cuando' (bez akcentu) rozpoczyna zdanie czasowe. Z akcentem to pytanie. To mały szczegół, ale ważny! Poranny sport daje energię na cały dzień! 🌅"
      },
      {
        id: "adv_8",
        question: "El niño respondió _____ a la pregunta difícil del profesor de matemáticas.",
        translation: "(Chłopiec odpowiedział inteligentnie na trudne pytanie nauczyciela matematyki)",
        options: ["inteligentemente", "inteligente", "inteligencia", "inteligentes"],
        correct: "inteligentemente",
        explanation: "Długi przysłówek! Od 'inteligente' dodajemy '-mente'. Pokazuje JAK odpowiedział - z inteligencją. Mądrość jest ceniona w każdej klasie! 🧠"
      },
      {
        id: "adv_9",
        question: "_____ como en casa, la comida de mi madre es la más deliciosa del mundo.",
        translation: "(Nigdzie nie jem tak dobrze jak w domu, jedzenie mojej mamy jest najsmaczniejsze na świecie)",
        options: ["Nunca", "Jamás", "Siempre", "A veces"],
        correct: "Nunca",
        explanation: "'Nunca' to 'nigdy' - silne zaprzeczenie. To uniwersalna prawda - domowe jedzenie matki jest zawsze najlepsze! To więź emocjonalna, nie tylko smak. 🏡"
      },
      {
        id: "adv_10",
        question: "Estudia _____ para el examen final si quieres aprobar con buena nota este semestre.",
        translation: "(Ucz się dużo na egzamin końcowy, jeśli chcesz zdać z dobrą ocena w tym semestrze)",
        options: ["mucho", "muy", "muchos", "mucha"],
        correct: "mucho",
        explanation: "'Mucho' jako przysłówek jest niezmienny! 'Muy' używamy przed przymiotnikami. 'Mucho' po czasownikach. To jak rada starszego brata - ciężka praca się opłaca! 📚"
      },
      {
        id: "adv_11",
        question: "Habla _____, por favor, no puedo oírte bien con todo este ruido de la calle.",
        translation: "(Mów głośniej proszę, nie słyszę cię dobrze z całym tym hałasem z ulicy)",
        options: ["más alto", "más fuerte", "más grande", "más mucho"],
        correct: "más alto",
        explanation: "'Hablar alto' to mówić głośno. 'Más alto' to głośniej - stopniowanie! W głośnych miastach hiszpańskich to częsta prośba. Komunikacja jest kluczowa! 📢"
      },
      {
        id: "adv_12",
        question: "Ella canta _____ como un ángel, tiene una voz muy hermosa y melodiosa.",
        translation: "(Ona śpiewa pięknie jak anioł, ma bardzo piękny i melodyjny głos)",
        options: ["maravillosamente", "maravilloso", "maravilla", "maravillosa"],
        correct: "maravillosamente",
        explanation: "Długi, ale piękny przysłówek! Od 'maravilloso' + '-mente'. To najwyższy komplement dla śpiewu. Muzyka jest duszą Hiszpanii! 🎵"
      },
      {
        id: "adv_13",
        question: "_____ salgo de casa sin desayunar porque me siento mal durante todo el día.",
        translation: "(Nigdy nie wychodzę z domu bez śniadania, bo czuję się źle przez cały dzień)",
        options: ["Nunca", "Siempre", "A veces", "Casi nunca"],
        correct: "Nunca",
        explanation: "'Nunca' wyraża twoją zasadę życiową! Śniadanie to najważniejszy posiłek - szczególnie w Hiszpanii, gdzie desayuno daje energię na długi dzień! 🍳"
      },
      {
        id: "adv_14",
        question: "Trabaja _____ en su proyecto porque tiene mucha pasión por lo que hace.",
        translation: "(Pracuje intensywnie nad swoim projektem, bo ma wielką pasję do tego, co robi)",
        options: ["duro", "duramente", "fuerte", "fuertemente"],
        correct: "duro",
        explanation: "'Trabajar duro' to idiomatyczne wyrażenie znaczące 'pracować ciężko'. 'Duro' tutaj działa jak przysłówek. Pasja sprawia, że praca staje się przyjemnością! 💼"
      },
      {
        id: "adv_15",
        question: "_____ entiendo lo que dices porque hablas en un idioma que no conozco bien.",
        translation: "(Prawie nie rozumiem, co mówisz, bo mówisz w języku, którego nie znam dobrze)",
        options: ["Apenas", "Casi", "Casi no", "Nunca"],
        correct: "Apenas",
        explanation: "'Apenas' to 'ledwo, prawie nie' - pokazuje trudność. To uczciwe przyznanie się do niezrozumienia. Uczenie się języków wymaga cierpliwości! 🤔"
      }
    ]
  },

  numbers_and_quantities: {
    name: "Liczby i ilości",
    description: "Opanuj liczenie i wyrażanie ilości",
    icon: Hash,
    color: "from-purple-500 to-fuchsia-600",
    level: "beginner",
    questions: [
      {
        id: "num_1",
        question: "Tengo _____ años y celebraré mi cumpleaños la próxima semana con una fiesta grande.",
        translation: "(Mam dwadzieścia pięć lat i będę świętować swoje urodziny w przyszłym tygodniu wielką imprezą)",
        options: ["veinticinco", "veinte y cinco", "veinti cinco", "viente cinco"],
        correct: "veinticinco",
        explanation: "Liczby 16-29 piszemy razem jednym słowem! 'Veinticinco' to 25. Od 31 piszemy oddzielnie: 'treinta y uno'. To ułatwia pisanie i jest bardziej eleganckie! 🎂"
      },
      {
        id: "num_2",
        question: "En mi clase hay _____ estudiantes en total: doce chicas y dieciocho chicos jóvenes.",
        translation: "(W mojej klasie jest trzydziestu uczniów w sumie: dwanaście dziewczyn i osiemnastu chłopców)",
        options: ["treinta", "treinte", "trenta", "treynta"],
        correct: "treinta",
        explanation: "'Treinta' to 30 - podstawowa liczba dziesiątek! Liczy się jak 'tres' (3) z końcówką '-inta'. Matematyka jest uniwersalna w każdym języku! ✏️"
      },
      {
        id: "num_3",
        question: "Este teléfono móvil cuesta _____ euros, es bastante caro pero tiene muy buena calidad.",
        translation: "(Ten telefon komórkowy kosztuje siedemset euro, jest dość drogi, ale ma bardzo dobrą jakość)",
        options: ["setecientos", "siete cientos", "seteciento", "septecientos"],
        correct: "setecientos",
        explanation: "'Setecientos' to 700 - uwaga na nieregularność! Nie 'siete cientos'. Od 200 liczby setek zmieniają formę: doscientos, trescientos... Jakość kosztuje! 💰"
      },
      {
        id: "num_4",
        question: "Compré _____ manzanas rojas en el mercado para hacer una tarta deliciosa de manzana.",
        translation: "(Kupiłem dziesięć czerwonych jabłek na rynku, żeby zrobić pyszne ciasto jabłkowe)",
        options: ["diez", "dies", "diecis", "dez"],
        correct: "diez",
        explanation: "'Diez' to 10 - podstawowa liczba! Jest bazą dla 11-15: once, doce, trece... Świeże owoce z targu są najsmaczniejsze! 🍎"
      },
      {
        id: "num_5",
        question: "Mi abuela tiene _____ años y está muy activa para su edad avanzada.",
        translation: "(Moja babcia ma osiemdziesiąt pięć lat i jest bardzo aktywna jak na swój zaawansowany wiek)",
        options: ["ochenta y cinco", "ochentaicinco", "ochenta cinco", "ochenticinco"],
        correct: "ochenta y cinco",
        explanation: "Od 31 piszemy oddzielnie z 'y'! 'Ochenta y cinco' to 85. Tylko 16-29 są jednym słowem. Aktywność w starszym wieku to błogosławieństwo! 👵"
      },
      {
        id: "num_6",
        question: "En esta botella caben _____ litro de agua mineral fresca para beber durante el día.",
        translation: "(W tej butelce mieści się półtora litra świeżej wody mineralnej do picia w ciągu dnia)",
        options: ["un litro y medio", "uno y medio litro", "litro y media", "media y litro"],
        correct: "un litro y medio",
        explanation: "'Un litro y medio' to półtora litra - dosłownie 'litr i pół'. 'Medio' zgadza się z rodzajem - 'medio litro' (męski). Nawodnienie jest kluczowe! 💧"
      },
      {
        id: "num_7",
        question: "Necesito _____ huevos frescos de granja para hacer el pastel de cumpleaños grande.",
        translation: "(Potrzebuję tuzina świeżych jajek z gospodarstwa, żeby zrobić duży tort urodzinowy)",
        options: ["una docena de", "doce de", "una doce de", "docena"],
        correct: "una docena de",
        explanation: "'Una docena de' to tuzin czegoś! To praktyczne słowo w kuchni. Świeże jajka z gospodarstwa są najlepsze do pieczenia! 🥚"
      },
      {
        id: "num_8",
        question: "El libro tiene _____ páginas interesantes llenas de aventuras emocionantes y misterios.",
        translation: "(Książka ma dwieście pięćdziesiąt interesujących stron pełnych ekscytujących przygód i tajemnic)",
        options: ["doscientas cincuenta", "doscientos cincuenta", "dos cientos cincuenta", "doscientas y cincuenta"],
        correct: "doscientas cincuenta",
        explanation: "Setki zgadzają się z rodzajem! 'Páginas' są żeńskie, więc 'doscientas'. Nie dodajemy 'y' między setkami a dziesiątkami. Dobra książka to skarb! 📖"
      },
      {
        id: "num_9",
        question: "Hay _____ personas esperando en la cola para entrar al concierto de música rock.",
        translation: "(Jest kilkadziesiąt osób czekających w kolejce, żeby wejść na koncert muzyki rockowej)",
        options: ["unas cuantas", "algunos", "unos pocos", "varios"],
        correct: "unas cuantas",
        explanation: "'Unas cuantas' to 'kilka, kilkadziesiąt' dla osób żeńskich. Bardziej niż 'unas pocas', mniej niż 'muchas'. Koncerty w Hiszpanii są zawsze popularne! 🎸"
      },
      {
        id: "num_10",
        question: "Este coche tiene _____ kilómetros recorridos, está prácticamente nuevo y en perfecto estado.",
        translation: "(Ten samochód ma piętnaście tysięcy przejechanych kilometrów, jest praktycznie nowy i w idealnym stanie)",
        options: ["quince mil", "quincemil", "quince miles", "quinze mil"],
        correct: "quince mil",
        explanation: "'Mil' to tysiąc - zawsze w liczbie pojedynczej! Nie 'miles' dla liczb. 'Quince mil' to 15,000. Małe przebiegi to dobra wiadomość dla kupujących! 🚗"
      },
      {
        id: "num_11",
        question: "Compré _____ kilogramo de queso manchego para preparar una tabla de quesos variados.",
        translation: "(Kupiłem pół kilograma sera manchego, żeby przygotować tablicę różnych serów)",
        options: ["medio", "un medio", "una media", "media"],
        correct: "medio",
        explanation: "'Medio' + rzeczownik męski to 'pół czegoś'. 'Medio kilo' to powszechne wyrażenie w sklepach. Ser manchego to duma Hiszpanii! 🧀"
      },
      {
        id: "num_12",
        question: "La película dura _____ horas y cuarto, es bastante larga pero muy entretenida y emocionante.",
        translation: "(Film trwa dwie godziny i kwadrans, jest dość długi, ale bardzo zabawny i ekscytujący)",
        options: ["dos", "duas", "dose", "doz"],
        correct: "dos",
        explanation: "'Dos' to 2 - prosta i niezmienna! Nie zgadza się z rodzajem jak 'un/una'. Długie filmy wymagają popcornu i wygodnego fotela! 🎬"
      },
      {
        id: "num_13",
        question: "En el año _____ España ganó el Mundial de Fútbol por primera vez en su historia.",
        translation: "(W roku dwa tysiące dziesiątym Hiszpania wygrała Mistrzostwa Świata w piłce nożnej po raz pierwszy w swojej historii)",
        options: ["dos mil diez", "dosmildiez", "dos miles diez", "dos mil y diez"],
        correct: "dos mil diez",
        explanation: "Lata po roku 2000: 'dos mil' + liczba! Nie dodajemy 'y'. Ten rok był magiczny dla hiszpańskiej piłki nożnej! ⚽"
      },
      {
        id: "num_14",
        question: "Necesito _____ de azúcar blanco para endulzar mi café con leche de la mañana.",
        translation: "(Potrzebuję trochę białego cukru, żeby osłodzić moją poranną kawę z mlekiem)",
        options: ["un poco", "poco", "un poquito", "pocos"],
        correct: "un poco",
        explanation: "'Un poco de' to 'trochę czegoś' dla rzeczy niepoliczalnych! 'Poco' bez 'un' brzmi negatywnie. Cukier w kawie to osobista preferencja! ☕"
      },
      {
        id: "num_15",
        question: "Hay _____ razones importantes por las que deberías aprender español con dedicación constante.",
        translation: "(Jest wiele ważnych powodów, dla których powinieneś uczyć się hiszpańskiego z ciągłym poświęceniem)",
        options: ["muchas", "mucho", "mucha", "muchos"],
        correct: "muchas",
        explanation: "'Muchas' zgadza się z 'razones' (żeńskie, liczba mnoga)! Zawsze sprawdzaj rodzaj i liczbę. Hiszpański otwiera drzwi do 21 krajów! 🌍"
      }
    ]
  },

  direct_indirect_pronouns: {
    name: "Zaimki dopełnienia",
    description: "Opanuj lo, la, le i ich używanie",
    icon: ArrowLeftRight,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    questions: [
      {
        id: "pro_1",
        question: "_____ vi ayer en el parque pero no te saludé porque estabas hablando por teléfono.",
        translation: "(Widziałem cię wczoraj w parku, ale nie przywitałem się, bo rozmawiałeś przez telefon)",
        options: ["Te", "Le", "Lo", "La"],
        correct: "Te",
        explanation: "'Te' to zaimek dla 'ty' (dopełnienie bliższe)! Odnosi się do osoby. Widzieć KOGO? Ciebie. To jak wskazanie palcem na konkretną osobę! 👋"
      },
      {
        id: "pro_2",
        question: "A mi madre _____ regalé un collar de perlas hermoso para su cumpleaños especial.",
        translation: "(Mojej mamie dałem piękny naszyjnik z pereł na jej specjalne urodziny)",
        options: ["le", "la", "lo", "se"],
        correct: "le",
        explanation: "'Le' to dopełnienie dalsze (komu?)! 'Regalar A alguien' wymaga 'le'. DAŁ komu? Mamie. To jak pośrednie przekazanie - przez kogoś do czegoś! 💝"
      },
      {
        id: "pro_3",
        question: "Ese libro me gusta mucho, ¿_____ puedo pedir prestado para leer este fin de semana?",
        translation: "(Ta książka bardzo mi się podoba, czy mogę ją pożyczyć na ten weekend?)",
        options: ["lo", "le", "la", "los"],
        correct: "lo",
        explanation: "'Lo' zastępuje 'el libro' (męski)! Dopełnienie bliższe dla rzeczy męskich. POŻYCZYĆ CO? Książkę (ją). To jak kodowanie rzeczy na zaimki! 📚"
      },
      {
        id: "pro_4",
        question: "A mis hermanos _____ compré entradas para el concierto de su banda favorita de rock.",
        translation: "(Moim braciom kupiłem bilety na koncert ich ulubionego zespołu rockowego)",
        options: ["les", "los", "las", "se"],
        correct: "les",
        explanation: "'Les' to liczba mnoga 'le'! Dla wielu odbiorców. KUPIĆ komu? Braciom. Liczba mnoga dopełnienia dalszego. Koncerty to świetny prezent! 🎫"
      },
      {
        id: "pro_5",
        question: "La verdad es que no _____ conozco muy bien, solo nos vimos una vez brevemente.",
        translation: "(Prawda jest taka, że nie znam go bardzo dobrze, widzieliśmy się tylko raz krótko)",
        options: ["lo", "le", "la", "los"],
        correct: "lo",
        explanation: "'Conocer' używa dopełnienia bliższego! 'Lo' dla osoby męskiej. ZNAĆ kogo? Jego. Hiszpański używa 'lo/la' dla osób w 'conocer', to wyjątek od reguły! 🤝"
      },
      {
        id: "pro_6",
        question: "_____ dije la verdad completa sobre lo que pasó, no quiero más secretos entre nosotros.",
        translation: "(Powiedziałem ci całą prawdę o tym, co się stało, nie chcę więcej tajemnic między nami)",
        options: ["Te", "Le", "Lo", "La"],
        correct: "Te",
        explanation: "'Decir algo A alguien' może używać 'te' bezpośrednio! POWIEDZIEĆ komu? Tobie. W mowie potocznej częściej 'te' niż 'le'. Szczerość buduje zaufanie! 💬"
      },
      {
        id: "pro_7",
        question: "Esa película _____ he visto tres veces y nunca me canso de verla una y otra vez.",
        translation: "(Ten film widziałem trzy razy i nigdy nie męczę się oglądaniem go w kółko)",
        options: ["la", "le", "lo", "las"],
        correct: "la",
        explanation: "'La película' jest żeńska, więc 'la'! Zawsze zgadzamy rodzaj. WIDZIEĆ CO? Ją (film). Dobre filmy można oglądać nieskończoną ilość razy! 🎬"
      },
      {
        id: "pro_8",
        question: "A ti _____ voy a contar un secreto importante, pero prométeme que no se lo dirás a nadie más.",
        translation: "(Tobie opowiem ważną tajemnicę, ale obiecaj mi, że nikomu więcej nie powiesz)",
        options: ["te", "le", "lo", "la"],
        correct: "te",
        explanation: "'Te' dla 'ty' w dopełnieniu! OPOWIEM komu? Tobie. Tajemnice są święte w przyjaźni - obietnice trzeba dotrzymywać! 🤐"
      },
      {
        id: "pro_9",
        question: "Cuando _____ veo por la calle siempre me saluda con una sonrisa muy amable.",
        translation: "(Kiedy go widzę na ulicy, zawsze wita się ze mną bardzo miłym uśmiechem)",
        options: ["lo", "le", "la", "los"],
        correct: "lo",
        explanation: "'Ver' używa dopełnienia bliższego dla osób! 'Lo' dla mężczyzny. To jak fotografowanie kogoś oczami. Uśmiech jest najlepszym pozdrowieniem! 😊"
      },
      {
        id: "pro_10",
        question: "_____ traje tu paraguas porque dijeron que iba a llover esta tarde torrencialmente.",
        translation: "(Przyniosłem ci swój parasol, bo powiedzieli, że będzie padać ulewnie tego popołudnia)",
        options: ["Te", "Le", "Lo", "La"],
        correct: "Te",
        explanation: "'Traer algo A alguien' - 'te' pokazuje komu! PRZYNIEŚĆ komu? Tobie. Dzielenie się parasolem to gest troski. Prawdziwi przyjaciele chronią się nawzajem! ☔"
      },
      {
        id: "pro_11",
        question: "A ustedes _____ recomiendo visitar Barcelona, es una ciudad hermosa llena de arte y cultura.",
        translation: "(Państwu polecam odwiedzić Barcelonę, to piękne miasto pełne sztuki i kultury)",
        options: ["les", "los", "las", "se"],
        correct: "les",
        explanation: "'Les' to forma uprzejma dla 'Państwu'! Dopełnienie dalsze w liczbie mnogiej. POLECIĆ komu? Państwu. Barcelona to perła Hiszpanii! 🏛️"
      },
      {
        id: "pro_12",
        question: "Mi novio me _____ envió flores hermosas a mi oficina para sorprenderme en mi cumpleaños.",
        translation: "(Mój chłopak wysłał mi piękne kwiaty do mojego biura, żeby mnie zaskoczyć w moje urodziny)",
        options: ["las", "les", "los", "la"],
        correct: "las",
        explanation: "'Las flores' - żeńska liczba mnoga, więc 'las'! WYSŁAĆ CO? Kwiaty (je). To romantyczny gest, który zawsze porusza serce! 💐"
      },
      {
        id: "pro_13",
        question: "_____ presté mi coche nuevo a Juan porque el suyo está en el taller mecánico.",
        translation: "(Pożyczyłem mój nowy samochód Juanowi, bo jego jest w warsztacie mechanicznym)",
        options: ["Le", "Lo", "La", "Les"],
        correct: "Le",
        explanation: "'Prestar algo A alguien' - 'le' dla osoby! POŻYCZYĆ komu? Juanowi. Pożyczanie samochodu to znak wielkiego zaufania w przyjaźni! 🚗"
      },
      {
        id: "pro_14",
        question: "¿_____ puedes ayudar con mi tarea de matemáticas? No entiendo este problema complicado.",
        translation: "(Czy możesz mi pomóc z moją pracą domową z matematyki? Nie rozumiem tego skomplikowanego problemu)",
        options: ["Me", "Le", "Te", "Lo"],
        correct: "Me",
        explanation: "'Me' dla 'ja' jako dopełnienia! POMÓC komu? Mnie. Prośba o pomoc nie jest słabością - to mądrość szukania wsparcia! 📐"
      },
      {
        id: "pro_15",
        question: "_____ llamaré por teléfono más tarde para contarte las noticias importantes del día.",
        translation: "(Zadzwonię do ciebie później, żeby opowiedzieć ci ważne wiadomości dnia)",
        options: ["Te", "Le", "Lo", "La"],
        correct: "Te",
        explanation: "'Llamar A alguien' - 'te' dla ciebie! ZADZWONIĆ do kogo? Do ciebie. Dzielenie się wiadomościami wzmacnia więzi! 📞"
      }
    ]
  }
};

export default part7Categories;
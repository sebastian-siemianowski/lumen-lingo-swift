/**
 * POLISH → SPANISH GRAMMAR - PART 4
 * 5 categories, 15 questions each - Intermediate level topics
 */

import { Coffee, Home, Utensils, Heart, Sun } from "lucide-react";

export const part4Categories = {
  daily_routines_verbs: {
    name: "Czasowniki codziennej rutyny",
    description: "Opanuj czasowniki opisujące twoją codzienność",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "dr_1",
        question: "Cada mañana me _____ a las siete para ir al trabajo puntualmente.",
        translation: "(Każdego ranka budzę się o siódmej, żeby iść do pracy punktualnie)",
        options: ["despierto", "duermo", "acuesto", "visto"],
        correct: "despierto",
        explanation: "Używamy 'despertarse' (budzić się), kiedy mówimy o zakończeniu snu. To zwrotny czasownik, który zawsze używamy z 'me/te/se'. Pamiętaj: 'despertar' to budzić kogoś innego, a 'despertarse' to budzić się samemu! 😊"
      },
      {
        id: "dr_2",
        question: "Después de levantarme, siempre me _____ los dientes con cuidado antes del desayuno.",
        translation: "(Po wstaniu zawsze szczotkuję zęby starannie przed śniadaniem)",
        options: ["cepillo", "lavo", "peino", "seco"],
        correct: "cepillo",
        explanation: "Czasownik 'cepillarse' to szczotkować (zęby, włosy). W Hiszpanii mówi się 'cepillarse los dientes', to najbardziej naturalny sposób. Używamy go codziennie - jest bardzo ważny dla zdrowia! 🦷"
      },
      {
        id: "dr_3",
        question: "Normalmente me _____ con agua fría porque me gusta sentirme fresco y despierto.",
        translation: "(Normalnie myję się zimną wodą, bo lubię czuć się świeży i rozbudzony)",
        options: ["ducho", "baño", "lavo", "seco"],
        correct: "ducho",
        explanation: "'Ducharse' oznacza brać prysznic. To szybka i praktyczna opcja! 'Bañarse' to brać kąpiel (w wannie). W Hiszpanii 'ducharse' jest bardziej popularne. Pamiętaj, że to czasownik zwrotny - zawsze z 'me/te/se'! 🚿"
      },
      {
        id: "dr_4",
        question: "Mi hermana se _____ mucho tiempo eligiendo la ropa perfecta cada mañana.",
        translation: "(Moja siostra spędza dużo czasu wybierając idealne ubranie każdego ranka)",
        options: ["pasa", "viste", "mira", "busca"],
        correct: "pasa",
        explanation: "'Pasar tiempo' to spędzać czas - bardzo użyteczne wyrażenie! Mówimy 'pasar tiempo haciendo algo' (spędzać czas robiąc coś). To pomaga nam opowiadać o naszych codziennych czynnościach w naturalny sposób."
      },
      {
        id: "dr_5",
        question: "Antes de salir de casa, siempre me _____ en el espejo para ver si todo está bien.",
        translation: "(Przed wyjściem z domu zawsze patrzę się w lustro, żeby zobaczyć czy wszystko w porządku)",
        options: ["miro", "veo", "observo", "fijo"],
        correct: "miro",
        explanation: "'Mirarse en el espejo' to patrzeć się w lustro. Używamy 'mirarse' (zwrotny), gdy patrzymy na siebie. 'Mirar' (bez się) to patrzeć na coś lub kogoś. To subtelna różnica, ale bardzo ważna w hiszpańskim! 🪞"
      },
      {
        id: "dr_6",
        question: "Todos los días _____ el autobús número 5 para llegar a mi oficina en el centro.",
        translation: "(Codziennie biorę autobus numer 5, żeby dotrzeć do mojego biura w centrum)",
        options: ["tomo", "cojo", "agarro", "conduzco"],
        correct: "tomo",
        explanation: "'Tomar el autobús' to brać autobus - to najczęstsze wyrażenie w Hiszpanii i Ameryce Łacińskiej. Możesz też powiedzieć 'coger' w Hiszpanii, ale 'tomar' jest uniwersalne wszędzie! To twój bezpieczny wybór. 🚌"
      },
      {
        id: "dr_7",
        question: "Por la tarde, cuando llego a casa, me _____ la ropa de trabajo y me pongo algo cómodo.",
        translation: "(Po południu, kiedy wracam do domu, zdejmuję ubranie robocze i zakładam coś wygodnego)",
        options: ["quito", "saco", "cambio", "dejo"],
        correct: "quito",
        explanation: "'Quitarse' to zdejmować (ubranie, buty, itp.). To czasownik zwrotny, bardzo naturalny w codziennej mowie. Przeciwieństwem jest 'ponerse' (zakładać). Te dwa czasowniki są jak najlepsi przyjaciele - zawsze razem w nauce! 👕"
      },
      {
        id: "dr_8",
        question: "Después del trabajo, me gusta _____ un rato en el sofá viendo mi serie favorita.",
        translation: "(Po pracy lubię odpocząć chwilę na kanapie oglądając mój ulubiony serial)",
        options: ["descansar", "acostar", "sentar", "dormir"],
        correct: "descansar",
        explanation: "'Descansar' to odpoczywać, relaksować się. To może być aktywny odpoczynek (czytanie, oglądanie TV) lub pasywny. Jest różnica od 'dormir' (spać) - descansar jest bardziej ogólny. Wszyscy potrzebujemy descansar po ciężkim dniu! 😌"
      },
      {
        id: "dr_9",
        question: "Antes de dormir, siempre _____ un libro interesante durante media hora aproximadamente.",
        translation: "(Przed spaniem zawsze czytam ciekawą książkę przez pół godziny mniej więcej)",
        options: ["leo", "escribo", "miro", "hablo"],
        correct: "leo",
        explanation: "'Leer' to czytać - bardzo regularny czasownik! Czytanie przed snem to świetny nawyk. W hiszpańskim mówimy 'leer un libro', 'leer una revista', 'leer el periódico'. Czytanie pomaga ci uczyć się więcej hiszpańskiego! 📚"
      },
      {
        id: "dr_10",
        question: "Mi madre siempre _____ la cena deliciosa para toda la familia a las ocho de la tarde.",
        translation: "(Moja mama zawsze przygotowuje pyszną kolację dla całej rodziny o ósmej wieczorem)",
        options: ["prepara", "hace", "cocina", "pone"],
        correct: "prepara",
        explanation: "'Preparar' to przygotowywać jedzenie. Jest bardziej ogólne niż 'cocinar' (gotować na kuchence). Możemy 'preparar la cena' (przygotować kolację) - to może być gotowanie lub przygotowanie sałatki. Bardzo użyteczny czasownik w kuchni! 🍳"
      },
      {
        id: "dr_11",
        question: "Cada noche me _____ a dormir alrededor de las once porque necesito descansar bien.",
        translation: "(Każdej nocy kładę się spać około jedenastej, bo muszę się dobrze wyspać)",
        options: ["acuesto", "duermo", "despierto", "levanto"],
        correct: "acuesto",
        explanation: "'Acostarse' to kłaść się spać. Jest różnica: 'acostarse' to czynność kładzenia się, a 'dormir' to już spać. Mówimy 'me acuesto a las 11' (kładę się o 11) i potem 'duermo 8 horas' (śpię 8 godzin). 🌙"
      },
      {
        id: "dr_12",
        question: "Los fines de semana me _____ tarde porque no tengo que trabajar ni estudiar.",
        translation: "(W weekendy budzę się późno, bo nie muszę pracować ani studiować)",
        options: ["levanto", "despierto", "acuesto", "duermo"],
        correct: "levanto",
        explanation: "'Levantarse' to wstawać z łóżka (fizycznie). 'Despertarse' to budzić się (otwierać oczy). Najpierw 'me despierto' (budzę się), potem 'me levanto' (wstaję). W weekendy możemy sobie pozwolić na lenistwo! 😴"
      },
      {
        id: "dr_13",
        question: "Antes de ir a una fiesta, siempre me _____ con mucho cuidado para verme guapo.",
        translation: "(Przed pójściem na imprezę zawsze ubieram się bardzo starannie, żeby wyglądać przystojnie)",
        options: ["visto", "pongo", "arreglo", "cambio"],
        correct: "visto",
        explanation: "'Vestirse' to ubierać się w elegancie ubrania. Jest różnica od 'ponerse' (zakładać konkretną rzecz). Mówimy 'me visto bien' (ubieram się dobrze) dla całej stylizacji. To ważne na specjalne okazje! 👔"
      },
      {
        id: "dr_14",
        question: "Después de hacer ejercicio, siempre me _____ otra vez porque estoy sudado y cansado.",
        translation: "(Po ćwiczeniach zawsze myję się ponownie, bo jestem spocony i zmęczony)",
        options: ["ducho", "lavo", "limpio", "seco"],
        correct: "ducho",
        explanation: "'Ducharse otra vez' to wziąć prysznic jeszcze raz. Po sporcie jest to bardzo ważne dla higieny! W Hiszpanii ludzie często biorą prysznic dwa razy dziennie: rano i po ćwiczeniach. To zdrowy nawyk! 💪"
      },
      {
        id: "dr_15",
        question: "Mi hermano pequeño se _____ muy temprano cada mañana porque le encanta ir al colegio.",
        translation: "(Mój młodszy brat budzi się bardzo wcześnie każdego ranka, bo uwielbia chodzić do szkoły)",
        options: ["despierta", "levanta", "acuesta", "duerme"],
        correct: "despierta",
        explanation: "'Despertarse temprano' to budzić się wcześnie. Używamy 'temprano' (wcześnie) i 'tarde' (późno) z czasownikami 'despertarse' i 'acostarse'. Twój brat jest bardzo motywowany - to wspaniałe! 🎒"
      }
    ]
  },

  house_and_home: {
    name: "Dom i mieszkanie",
    description: "Naucz się opisywać swój dom i pokoje",
    icon: Home,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "hh_1",
        question: "Mi familia y yo _____ en un apartamento espacioso en el tercer piso del edificio.",
        translation: "(Moja rodzina i ja mieszkamy w przestronnym mieszkaniu na trzecim piętrze budynku)",
        options: ["vivimos", "estamos", "somos", "tenemos"],
        correct: "vivimos",
        explanation: "'Vivir' to mieszkać - używamy go, gdy mówimy o naszym stałym miejscu zamieszkania. To bardzo ważny czasownik! Mówimy 'vivir en' (mieszkać w) z nazwą miasta lub typu domu. Jest różnica od 'estar' (być w danym momencie). 🏠"
      },
      {
        id: "hh_2",
        question: "Nuestro salón es muy luminoso porque _____ dos ventanas grandes que dan al jardín.",
        translation: "(Nasz salon jest bardzo jasny, bo ma dwa duże okna wychodzące na ogród)",
        options: ["tiene", "hay", "está", "son"],
        correct: "tiene",
        explanation: "Używamy 'tener' (mieć), gdy mówimy o częściach domu jako posiadaczu. 'El salón tiene ventanas' (salon ma okna). 'Hay' używamy, gdy mówimy o istnieniu czegoś w ogóle. To subtelna, ale ważna różnica w opisywaniu domu!"
      },
      {
        id: "hh_3",
        question: "En mi dormitorio _____ una cama grande, un armario antiguo y un escritorio moderno.",
        translation: "(W mojej sypialni jest duże łóżko, stara szafa i nowoczesne biurko)",
        options: ["hay", "tiene", "está", "son"],
        correct: "hay",
        explanation: "'Hay' to 'jest/są' - używamy go, żeby powiedzieć, co znajduje się w pomieszczeniu. To forma bezosobowa, bardzo użyteczna! Zawsze mówimy 'hay' (nie 'hayan' ani 'habemos'). Działa zarówno dla singular, jak i plural! 🛏️"
      },
      {
        id: "hh_4",
        question: "La cocina _____ al lado del comedor, lo cual es muy práctico para servir la comida.",
        translation: "(Kuchnia jest obok jadalni, co jest bardzo praktyczne do serwowania jedzenia)",
        options: ["está", "es", "hay", "tiene"],
        correct: "está",
        explanation: "'Estar' używamy do lokalizacji pomieszczeń. 'La cocina está al lado de...' (kuchnia jest obok...). To czasownik dla położenia w przestrzeni. Pamiętaj: 'ser' to cechy stałe, 'estar' to położenie i stany tymczasowe! 📍"
      },
      {
        id: "hh_5",
        question: "Mi hermana siempre _____ su habitación muy ordenada con todos los libros en su sitio.",
        translation: "(Moja siostra zawsze trzyma swój pokój bardzo schludnie ze wszystkimi książkami na swoim miejscu)",
        options: ["mantiene", "tiene", "pone", "hace"],
        correct: "mantiene",
        explanation: "'Mantener' to utrzymywać w jakimś stanie. 'Mantener ordenado' (utrzymywać w porządku) to bardzo przydatne wyrażenie! Jest różnica od 'tener' (mieć). 'Mantener' pokazuje wysiłek i stałą troskę. To pozytywna cecha! ✨"
      },
      {
        id: "hh_6",
        question: "El cuarto de baño _____ equipado con una ducha moderna, un lavabo blanco y un espejo grande.",
        translation: "(Łazienka jest wyposażona w nowoczesny prysznic, białą umywalkę i duże lustro)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar equipado' to być wyposażonym w coś. Używamy 'estar' + participio dla opisania stanu rzeczy. To konstrukcja pasywna, bardzo elegancka! Możesz użyć tego dla wielu rzeczy: 'estar decorado', 'estar pintado', itp. 🚿"
      },
      {
        id: "hh_7",
        question: "En el balcón _____ muchas plantas hermosas que mi madre cuida con mucho amor.",
        translation: "(Na balkonie jest wiele pięknych roślin, o które moja mama opiekuje się z wielką miłością)",
        options: ["hay", "tiene", "están", "son"],
        correct: "hay",
        explanation: "'Hay' to jest/są - idealne dla wymieniania rzeczy w miejscu! Mówimy 'en el balcón hay plantas' (na balkonie są rośliny). To jak magiczne słowo do opisywania, co znajduje się gdzie. Bardzo proste i uniwersalne! 🌿"
      },
      {
        id: "hh_8",
        question: "El piso de nuestra casa _____ de madera natural porque nos gusta el estilo rústico.",
        translation: "(Podłoga naszego domu jest z naturalnego drewna, bo lubimy rustykalny styl)",
        options: ["es", "está", "tiene", "hay"],
        correct: "es",
        explanation: "'Ser' używamy dla materiału! 'Ser de madera' (być z drewna), 'ser de metal' (być z metalu). To cecha stała i niezmieniona. Materiał to tożsamość przedmiotu, dlatego zawsze 'ser', nigdy 'estar'! 🪵"
      },
      {
        id: "hh_9",
        question: "Nuestra casa _____ un jardín pequeño pero muy bonito donde los niños juegan felices.",
        translation: "(Nasz dom ma mały, ale bardzo ładny ogród, gdzie dzieci bawią się radośnie)",
        options: ["tiene", "hay", "es", "está"],
        correct: "tiene",
        explanation: "'La casa tiene' (dom ma) - używamy 'tener', gdy mówimy o częściach lub elementach domu jako całości. Dom jest właścicielem ogrodu! To jak członek rodziny. Bardzo naturalne wyrażenie w hiszpańskim! 🌳"
      },
      {
        id: "hh_10",
        question: "Las paredes del salón _____ pintadas de color azul claro que da sensación de tranquilidad.",
        translation: "(Ściany salonu są pomalowane na jasnoniebieski kolor, który daje poczucie spokoju)",
        options: ["están", "son", "tienen", "hay"],
        correct: "están",
        explanation: "'Estar pintado' to być pomalowanym - używamy 'estar' + participio dla rezultatu akcji. Ktoś pomalował ściany, teraz one są w tym stanie. To pokazuje, że możemy zmienić ten stan (przemalować). Piękna niuans języka! 🎨"
      },
      {
        id: "hh_11",
        question: "La entrada principal de nuestro edificio _____ justo enfrente de la parada de autobús.",
        translation: "(Główne wejście naszego budynku jest dokładnie naprzeciwko przystanku autobusowego)",
        options: ["está", "es", "hay", "tiene"],
        correct: "está",
        explanation: "'Estar' dla lokalizacji w przestrzeni. 'Enfrente de' (naprzeciwko), 'al lado de' (obok), 'detrás de' (za) - wszystkie z 'estar'. To jak współrzędne GPS w języku! Bardzo przydatne do dawania wskazówek dojazdu. 🚏"
      },
      {
        id: "hh_12",
        question: "En el sótano del edificio _____ un garaje donde guardamos nuestro coche familiar.",
        translation: "(W piwnicy budynku jest garaż, gdzie trzymamy nasz rodzinny samochód)",
        options: ["hay", "tiene", "está", "es"],
        correct: "hay",
        explanation: "'Hay' to nasze ulubione słowo dla opisywania! 'En el sótano hay...' (w piwnicy jest...). Zawsze używamy 'hay' dla mówienia o istnieniu czegoś w miejscu. Działa jak czar w każdej sytuacji opisowej! 🚗"
      },
      {
        id: "hh_13",
        question: "Mi cuarto _____ muy acogedor con muchos cojines suaves y una alfombra mullida.",
        translation: "(Mój pokój jest bardzo przytulny z wieloma miękkimi poduszkami i miękkim dywanem)",
        options: ["es", "está", "tiene", "hay"],
        correct: "es",
        explanation: "'Ser acogedor' (być przytulnym) to stała cecha pokoju. Używamy 'ser' dla charakterystyki! Acogedor to piękne hiszpańskie słowo - oznacza ciepły, przyjazny, zachęcający. To jak przytulny pluszowy miś w formie przymiotnika! 🛋️"
      },
      {
        id: "hh_14",
        question: "La terraza _____ orientada al sur, por eso recibe mucho sol durante todo el día.",
        translation: "(Taras jest zorientowany na południe, dlatego dostaje dużo słońca przez cały dzień)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar orientado' (być zorientowanym) używa 'estar', bo to położenie w przestrzeni względem kierunków świata. W Hiszpanii orientacja na południe jest bardzo ceniona - więcej słońca oznacza cieplejszy dom i niższe rachunki! ☀️"
      },
      {
        id: "hh_15",
        question: "El edificio donde vivimos _____ muy moderno y fue construido hace solo tres años.",
        translation: "(Budynek, w którym mieszkamy, jest bardzo nowoczesny i został zbudowany zaledwie trzy lata temu)",
        options: ["es", "está", "tiene", "hay"],
        correct: "es",
        explanation: "'Ser moderno' to cecha stała budynku. 'Ser' używamy dla charakterystyk i tożsamości! Nowoczesność to część esencji tego budynku, nie stan tymczasowy. To jak DNA - nie możesz tego łatwo zmienić! 🏢"
      }
    ]
  },

  food_and_meals: {
    name: "Jedzenie i posiłki",
    description: "Słownictwo kulinarne i opisy potraw",
    icon: Utensils,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "fm_1",
        question: "Para el desayuno normalmente _____ café con leche, tostadas y un poco de fruta fresca.",
        translation: "(Na śniadanie zazwyczaj jem kawę z mlekiem, tosty i trochę świeżych owoców)",
        options: ["tomo", "como", "bebo", "hago"],
        correct: "tomo",
        explanation: "W Hiszpanii mówimy 'tomar el desayuno' (jeść śniadanie), nie 'comer'! 'Tomar' jest bardziej uniwersalne - może być dla jedzenia i picia. To bardzo hiszpańskie! W innych krajach czasem mówią 'desayunar', ale 'tomar' jest wszędzie poprawne. ☕"
      },
      {
        id: "fm_2",
        question: "Mi plato favorito de la cocina española _____ la paella valenciana con mariscos frescos.",
        translation: "(Moją ulubioną potrawą kuchni hiszpańskiej jest paella walencjańska ze świeżymi owocami morza)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Ser' używamy, gdy mówimy o tożsamości lub identyfikacji! 'Mi plato favorito es...' (moim ulubionym daniem jest...). To jak przedstawianie kogoś: 'Este es Juan' (to jest Juan). Używamy 'ser' dla nazwania, definiowania rzeczy! 🥘"
      },
      {
        id: "fm_3",
        question: "Esta sopa _____ un poco fría, ¿podrías calentarla en el microondas por favor?",
        translation: "(Ta zupa jest trochę zimna, czy mógłbyś ją podgrzać w mikrofalówce proszę?)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar' dla temperatury jedzenia! Temperatura może się zmienić, więc używamy 'estar' (stan tymczasowy). Możemy podgrzać zupę, więc to nie jest stała cecha. To jak pogoda - zmienia się! Pamiętaj: temperatura = 'estar'. 🍲"
      },
      {
        id: "fm_4",
        question: "Me encanta _____ chocolate caliente con churros los domingos por la mañana con mi familia.",
        translation: "(Uwielbiam pić gorącą czekoladę z churros w niedzielne poranki z moją rodziną)",
        options: ["tomar", "comer", "beber", "hacer"],
        correct: "tomar",
        explanation: "'Tomar' to nasz przyjaciel przy jedzeniu i piciu! W Hiszpanii 'tomar' jest naturalnym wyborem dla napojów i przekąsek. 'Beber' też jest poprawne, ale 'tomar' brzmi bardziej po hiszpańsku. To jak magiczne słowo dla wszystkiego, co konsumujemy! 🍫"
      },
      {
        id: "fm_5",
        question: "Cuando voy al restaurante, siempre _____ un plato de pescado porque es más saludable.",
        translation: "(Kiedy idę do restauracji, zawsze wybieram danie rybne, bo jest zdrowsze)",
        options: ["pido", "como", "compro", "hago"],
        correct: "pido",
        explanation: "'Pedir' to zamawiać w restauracji. To czasownik bardzo ważny dla jedzenia na mieście! 'Pedir la cuenta' (prosić o rachunek), 'pedir un plato' (zamówić danie). W restauracji zawsze 'pides', nigdy 'compras'. To kultura hiszpańska! 🐟"
      },
      {
        id: "fm_6",
        question: "Mi madre _____ muy bien la carne - siempre queda jugosa y con mucho sabor.",
        translation: "(Moja mama bardzo dobrze przyrządza mięso - zawsze wychodzi soczyste i bardzo smaczne)",
        options: ["cocina", "hace", "prepara", "pone"],
        correct: "cocina",
        explanation: "'Cocinar' to gotować na kuchence z użyciem ognia lub ciepła. Jest różnica od 'preparar' (przygotowywać ogólnie). 'Cocinar' jest bardziej specyficzne - to sztuka! Gdy ktoś 'cocina bien', to prawdziwy talent kulinarny! 👩‍🍳"
      },
      {
        id: "fm_7",
        question: "Esta ensalada _____ con tomates maduros, lechuga fresca, cebolla morada y aceitunas negras.",
        translation: "(Ta sałatka jest z dojrzałymi pomidorami, świeżą sałatą, czerwoną cebulą i czarnymi oliwkami)",
        options: ["está hecha", "es hecha", "tiene", "hay"],
        correct: "está hecha",
        explanation: "'Estar hecho' (być zrobionym) mówi nam o składnikach! 'Estar hecho de/con' (być zrobionym z/z użyciem). To jak przepis kulinarny w jednym zdaniu. Używamy 'estar', bo to rezultat przygotowania - ktoś to zrobił! 🥗"
      },
      {
        id: "fm_8",
        question: "El jamón ibérico _____ una delicia española muy apreciada en todo el mundo por su calidad.",
        translation: "(Szynka iberyjska jest hiszpańskim przysmakiem bardzo cenionym na całym świecie za swoją jakość)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Ser' dla klasyfikacji i definicji! Jamón ibérico to część hiszpańskiej tożsamości kulinarnej. To nie stan tymczasowy - to esencja, definicja. Jak powiedzenie 'Juan es médico' (Juan jest lekarzem). To tożsamość produktu! 🥓"
      },
      {
        id: "fm_9",
        question: "Después de comer tanto en la fiesta, me _____ muy lleno y necesito caminar un poco.",
        translation: "(Po zjedzeniu tak dużo na imprezie czuję się bardzo pełny i muszę trochę pochodzić)",
        options: ["siento", "estoy", "tengo", "quedo"],
        correct: "siento",
        explanation: "'Sentirse' to czuć się (fizycznie lub emocjonalnie). 'Me siento lleno' (czuję się pełny) to subiektywne odczucie. Jest różnica od 'estar lleno' (być pełnym jako pojemnik). 'Sentirse' jest bardziej osobiste i wewnętrzne! 😊"
      },
      {
        id: "fm_10",
        question: "Los postres españoles como el flan o la crema catalana _____ muy dulces y deliciosos.",
        translation: "(Hiszpańskie desery jak flan czy crema catalana są bardzo słodkie i pyszne)",
        options: ["son", "están", "tienen", "hacen"],
        correct: "son",
        explanation: "'Ser' dla stałych cech smaku podstawowego! 'Ser dulce' (być słodkim) to charakterystyka naturalna produktu. Cukier jest w recepturze, to nie stan tymczasowy. To jak kolor oczu - część esencji! Pamiętaj: podstawowy smak = 'ser'. 🍮"
      },
      {
        id: "fm_11",
        question: "Prefiero _____ en casa con mi familia que ir a restaurantes caros los fines de semana.",
        translation: "(Wolę jeść w domu z rodziną niż chodzić do drogich restauracji w weekendy)",
        options: ["comer", "estar", "quedar", "tener"],
        correct: "comer",
        explanation: "'Comer' to jeść (główny posiłek, obiad). W domu używamy 'comer', nie 'tomar'. 'Tomar' jest bardziej dla kawiarni i baków. 'Comer en casa' to ciepłe, rodzinne wyrażenie. Dom to miejsce, gdzie 'comemos', nie tylko 'tomamos'! 🏡"
      },
      {
        id: "fm_12",
        question: "Este vino tinto _____ perfecto con la carne roja que hemos preparado para la cena.",
        translation: "(To czerwone wino jest idealne do czerwonego mięsa, które przygotowaliśmy na kolację)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar perfecto' to być idealnym (w danej sytuacji)! Używamy 'estar' dla oceny subiektywnej w kontekście. To wino 'está perfecto' dla tego mięsa, ale z rybą może nie być. To ocena sytuacyjna, nie stała cecha! 🍷"
      },
      {
        id: "fm_13",
        question: "Mi hermano pequeño no _____ verduras, pero a mí me encantan todas las ensaladas frescas.",
        translation: "(Mój młodszy brat nie lubi warzyw, ale ja uwielbiam wszystkie świeże sałatki)",
        options: ["come", "toma", "prueba", "hace"],
        correct: "come",
        explanation: "'No comer' coś to nie jeść tego (z wyboru lub niechęci). To naturalny sposób mówienia o preferencjach żywieniowych! 'No me gusta' (nie lubię) + 'no como' (nie jem). Wiele dzieci 'no come verduras' - to uniwersalne! 🥦"
      },
      {
        id: "fm_14",
        question: "Cuando el pan _____ recién horneado, huele maravillosamente y sabe mucho mejor.",
        translation: "(Kiedy chleb jest świeżo upieczony, pachnie cudownie i smakuje dużo lepiej)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar recién horneado' (być świeżo upieczonym) to stan tymczasowy! 'Recién' (świeżo, dopiero co) zawsze z 'estar', bo mówi o momencie tuż po akcji. Za godzinę chleb nie będzie już 'recién horneado'. To przemijający stan świeżości! 🍞"
      },
      {
        id: "fm_15",
        question: "En España la gente _____ muy tarde, a veces a las diez de la noche o incluso más tarde.",
        translation: "(W Hiszpanii ludzie jedzą obiad bardzo późno, czasem o dziesiątej wieczorem lub nawet później)",
        options: ["cena", "come", "almuerza", "desayuna"],
        correct: "cena",
        explanation: "'Cenar' to jeść kolację (wieczorny posiłek). W Hiszpanii 'la cena' jest późno! To kulturowa różnica - 'almorzar' to lunch (14:00-15:00), 'cenar' to kolacja (21:00-22:00). Horarios españoles są inne niż w Polsce! 🌙"
      }
    ]
  },

  emotions_and_feelings: {
    name: "Emocje i uczucia",
    description: "Wyrażaj swoje emocje po hiszpańsku",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "ef_1",
        question: "Hoy me _____ muy feliz porque he aprobado todos mis exámenes finales del semestre.",
        translation: "(Dziś czuję się bardzo szczęśliwy, bo zdałem wszystkie egzaminy końcowe semestru)",
        options: ["siento", "estoy", "soy", "tengo"],
        correct: "siento",
        explanation: "'Sentirse' to czuć się - używamy go dla emocji wewnętrznych! 'Me siento feliz' (czuję się szczęśliwy) jest bardziej osobiste niż 'estoy feliz'. To twoje subiektywne odczucie, głębokie i autentyczne. Sentirse to okno do twojego serca! 💝"
      },
      {
        id: "ef_2",
        question: "Mis padres _____ muy orgullosos de mí cuando me gradué de la universidad con honores.",
        translation: "(Moi rodzice byli bardzo dumni ze mnie, kiedy ukończyłem uniwersytet z wyróżnieniem)",
        options: ["estaban", "eran", "sentían", "tenían"],
        correct: "estaban",
        explanation: "'Estar orgulloso' (być dumnym) używa 'estar', bo to emocja, stan tymczasowy! Dumni w tym momencie, z tego powodu. Emocje przychodzą i odchodzą, więc używamy 'estar'. To piękny moment dla rodziców! 🎓"
      },
      {
        id: "ef_3",
        question: "Mi hermana _____ triste toda la semana porque su mejor amiga se mudó a otra ciudad.",
        translation: "(Moja siostra jest smutna cały tydzień, bo jej najlepsza przyjaciółka przeprowadziła się do innego miasta)",
        options: ["está", "es", "siente", "tiene"],
        correct: "está",
        explanation: "'Estar triste' to być smutnym (stan emocjonalny)! Emocje zmieniają się, więc zawsze 'estar'. Smutek może minąć, to nie stała cecha osobowości. 'Estar' daje nadzieję - ten stan jest tymczasowy i może się poprawić! 😢"
      },
      {
        id: "ef_4",
        question: "Cuando veo películas de terror, siempre me _____ mucho miedo y no puedo dormir bien.",
        translation: "(Kiedy oglądam filmy grozy, zawsze bardzo się boję i nie mogę dobrze spać)",
        options: ["da", "pone", "hace", "tiene"],
        correct: "da",
        explanation: "'Dar miedo' (wywoływać strach) to idiomatyczne wyrażenie! 'Me da miedo' (boję się tego). 'Dar' używamy dla wywołania emocji u kogoś. Podobnie: 'me da risa' (śmieszy mnie), 'me da pena' (jest mi przykro). To bardzo hiszpańskie! 👻"
      },
      {
        id: "ef_5",
        question: "Mi mejor amigo _____ nervioso antes de hablar en público, pero siempre lo hace muy bien.",
        translation: "(Mój najlepszy przyjaciel denerwuje się przed mówieniem publicznie, ale zawsze robi to bardzo dobrze)",
        options: ["se pone", "está", "es", "tiene"],
        correct: "se pone",
        explanation: "'Ponerse nervioso' to zdenerwować się, stać się nerwowym! 'Ponerse' używamy dla zmiany stanu. To proces stawania się - z spokojnego na nerwowego. Pokazuje przejście, transformację emocjonalną. To jak zmiana koloru na twarzy! 😰"
      },
      {
        id: "ef_6",
        question: "Me _____ mucha alegría ver a mis abuelos después de tanto tiempo sin visitarlos.",
        translation: "(Sprawia mi wielką radość zobaczyć moich dziadków po tak długim czasie bez odwiedzin)",
        options: ["da", "hace", "pone", "está"],
        correct: "da",
        explanation: "'Dar alegría' (dawać radość) to piękne wyrażenie! Coś lub ktoś wywołuje w nas radość. 'Me da alegría' jest bardziej emocjonalne niż proste 'estoy alegre'. To pokazuje, że źródło radości jest zewnętrzne, ale uczucie jest głębokie! 😊"
      },
      {
        id: "ef_7",
        question: "Los niños _____ muy emocionados porque mañana es su cumpleaños y habrá una fiesta grande.",
        translation: "(Dzieci są bardzo podekscytowane, bo jutro są ich urodziny i będzie wielka impreza)",
        options: ["están", "son", "sienten", "tienen"],
        correct: "están",
        explanation: "'Estar emocionado' to być podekscytowanym! To stan emocjonalny, który mija. Dziś są podekscytowane, za tydzień będzie normalnie. Używamy 'estar' dla wszystkich stanów emocjonalnych przejściowych. Emocje są jak fale - przychodzą i odchodzą! 🎉"
      },
      {
        id: "ef_8",
        question: "Me _____ mucho cuando pierdo cosas importantes como las llaves o el móvil.",
        translation: "(Bardzo się denerwuję, kiedy gubię ważne rzeczy jak klucze lub telefon)",
        options: ["enfado", "enojo", "irrito", "molesto"],
        correct: "enfado",
        explanation: "'Enfadarse' to złościć się, denerwować się (w Hiszpanii). W Ameryce Łacińskiej częściej 'enojarse'. Oba są poprawne! 'Me enfado' pokazuje proces - stajesz się zły. To naturalnie dla frustrujących sytuacji. Każdy czasem się enfada! 😤"
      },
      {
        id: "ef_9",
        question: "Mi madre _____ preocupada por mi hermano porque no ha llamado en tres días seguidos.",
        translation: "(Moja mama jest zaniepokojona o mojego brata, bo nie dzwonił przez trzy dni z rzędu)",
        options: ["está", "es", "siente", "tiene"],
        correct: "está",
        explanation: "'Estar preocupado' to być zmartwiony! To stan emocjonalny wywołany konkretną sytuacją. Kiedy brat zadzwoni, zmartwienie zniknie. 'Estar' pokazuje, że to tymczasowe. Matki zawsze 'están preocupadas' - to naturalne! 💭"
      },
      {
        id: "ef_10",
        question: "Los aficionados del equipo _____ decepcionados después de perder el partido final del campeonato.",
        translation: "(Kibice drużyny byli rozczarowani po przegraniu finałowego meczu mistrzostw)",
        options: ["estaban", "eran", "sentían", "tenían"],
        correct: "estaban",
        explanation: "'Estar decepcionado' to być rozczarowanym. Używamy 'estar', bo to reakcja na wydarzenie. Przed meczem nie byli rozczarowani, po meczu tak. To pokazuje zmianę stanu emocjonalnego. Rozczarowanie jest bolesne, ale mija! ⚽"
      },
      {
        id: "ef_11",
        question: "Me _____ mucha rabia cuando veo injusticias en el mundo y no puedo hacer nada.",
        translation: "(Bardzo mnie złości, kiedy widzę niesprawiedliwość na świecie i nie mogę nic zrobić)",
        options: ["da", "pone", "hace", "tiene"],
        correct: "da",
        explanation: "'Dar rabia' to wywoływać złość, wściekłość! 'Rabia' jest silniejsza niż 'enfado'. 'Me da rabia' pokazuje, że coś zewnętrznego wywołuje w tobie silną emocję. To bardzo ekspresywne wyrażenie, używane dla rzeczy, które naprawdę nas irytują! 😡"
      },
      {
        id: "ef_12",
        question: "Mi profesora _____ muy paciente con nosotros cuando no entendemos algo difícil en clase.",
        translation: "(Moja nauczycielka jest bardzo cierpliwa z nami, kiedy nie rozumiemy czegoś trudnego na lekcji)",
        options: ["es", "está", "tiene", "siente"],
        correct: "es",
        explanation: "'Ser paciente' to być cierpliwym jako cecha charakteru! To nie stan tymczasowy - to jej osobowość. 'Ser' używamy dla cech trwałych. Cierpliwość nauczycielki to jej natura, nie tylko chwilowe zachowanie. To piękna cecha! 👩‍🏫"
      },
      {
        id: "ef_13",
        question: "Mi hermano mayor _____ celoso cuando nuestros padres me prestan más atención a mí.",
        translation: "(Mój starszy brat zazdrości, kiedy nasi rodzice poświęcają mi więcej uwagi)",
        options: ["se pone", "está", "es", "tiene"],
        correct: "se pone",
        explanation: "'Ponerse celoso' to stawać się zazdrosnym! 'Ponerse' pokazuje zmianę - z normalnego na zazdrosnego. To reakcja na sytuację. Zazdrość pojawia się i znika. 'Ponerse' jest idealne dla emocji, które przychodzą w odpowiedzi na coś! 💚"
      },
      {
        id: "ef_14",
        question: "Los estudiantes _____ aliviados cuando el profesor canceló el examen difícil de matemáticas.",
        translation: "(Studenci poczuli ulgę, kiedy profesor odwołał trudny egzamin z matematyki)",
        options: ["se sintieron", "estuvieron", "fueron", "tuvieron"],
        correct: "se sintieron",
        explanation: "'Sentirse aliviado' to czuć ulgę! 'Sentirse' jest bardzo osobiste i subiektywne. To wewnętrzne uczucie, które każdy doświadcza indywidualnie. Używamy go dla głębokich, osobistych emocji. To jak ciężar spadający z serca! 😌"
      },
      {
        id: "ef_15",
        question: "Mi abuela siempre _____ contenta cuando toda la familia se reúne para comer los domingos.",
        translation: "(Moja babcia zawsze jest zadowolona, kiedy cała rodzina zbiera się na obiad w niedziele)",
        options: ["está", "es", "siente", "tiene"],
        correct: "está",
        explanation: "'Estar contento' to być zadowolonym (w danej chwili). To uczucie wywołane konkretną sytuacją - rodziną razem. Po lunchu może być zmęczona, ale teraz jest contenta. 'Estar' dla emocji momentu! Niedzielne obiady są magiczne! 👵"
      }
    ]
  },

  weather_and_seasons: {
    name: "Pogoda i pory roku",
    description: "Mów o pogodzie jak native speaker",
    icon: Sun,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "ws_1",
        question: "Hoy _____ mucho calor, casi treinta y cinco grados, así que vamos a la playa.",
        translation: "(Dziś jest bardzo gorąco, prawie trzydzieści pięć stopni, więc idziemy na plażę)",
        options: ["hace", "hay", "está", "es"],
        correct: "hace",
        explanation: "'Hacer' używamy dla pogody! 'Hace calor' (jest gorąco), 'hace frío' (jest zimno), 'hace sol' (jest słonecznie). To bezosobowa forma - zawsze trzecia osoba 'hace', nigdy 'hago' czy 'haces'. To jak stała zasada pogody po hiszpańsku! ☀️"
      },
      {
        id: "ws_2",
        question: "En invierno _____ mucho y los niños construyen muñecos de nieve en el jardín.",
        translation: "(Zimą pada dużo śniegu i dzieci budują bałwany w ogrodzie)",
        options: ["nieva", "llueve", "hace", "está"],
        correct: "nieva",
        explanation: "'Nevar' to padać (o śniegu). To specjalny czasownik dla śniegu! Używamy tylko trzeciej osoby 'nieva'. Jest różnica od 'llover' (padać - o deszczu). W Hiszpanii w górach często nieva w zimie. To magiczne zjawisko! ❄️"
      },
      {
        id: "ws_3",
        question: "Esta mañana el cielo _____ muy nublado y parece que va a llover pronto.",
        translation: "(Dziś rano niebo jest bardzo pochmurne i wygląda, że niedługo będzie padać)",
        options: ["está", "es", "hace", "hay"],
        correct: "está",
        explanation: "'Estar nublado' (być pochmurnym) używa 'estar', bo pogoda się zmienia! Rano jest nublado, po południu może być soleado. To stan przejściowy nieba. 'Estar' dla wszystkich zmiennych warunków pogodowych! Niebo jest jak nastrój - zmienne! ☁️"
      },
      {
        id: "ws_4",
        question: "En primavera las flores _____ y todo el campo se llena de colores hermosos.",
        translation: "(Wiosną kwiaty kwitną i całe pole wypełnia się pięknymi kolorami)",
        options: ["florecen", "crecen", "salen", "aparecen"],
        correct: "florecen",
        explanation: "'Florecer' to kwitnąć - piękny czasownik! To naturalna transformacja roślin. W Hiszpanii primavera (wiosna) to festival kolorów! 'Florecer' nie jest tylko dla kwiatów - może być metaforyczny: 'el amor florece' (miłość kwitnie). 🌸"
      },
      {
        id: "ws_5",
        question: "Mañana _____ un día perfecto para hacer una excursión a la montaña con buenos amigos.",
        translation: "(Jutro będzie idealny dzień na wycieczkę w góry z dobrymi przyjaciółmi)",
        options: ["hará", "será", "estará", "habrá"],
        correct: "hará",
        explanation: "'Hacer' w przyszłości dla pogody! 'Hará buen día' (będzie ładny dzień). Używamy 'hacer' dla ogólnej pogody i 'ser' dla typu dnia. 'Hacer buen tiempo' to dobre warunki pogodowe. To twój przyjaciel dla planowania! 🏔️"
      },
      {
        id: "ws_6",
        question: "Cuando _____ tanto viento no podemos salir con el paraguas porque se rompe fácilmente.",
        translation: "(Kiedy wieje tak mocny wiatr, nie możemy wyjść z parasolem, bo łatwo się łamie)",
        options: ["hace", "hay", "está", "es"],
        correct: "hace",
        explanation: "'Hacer viento' to być wietrznie! Ponownie 'hacer' dla zjawisk pogodowych. 'Hace mucho viento' (jest bardzo wietrznie), 'hace poco viento' (jest mało wietrznie). Wiatr w Hiszpanii może być silny, szczególnie na wybrzeżu! 💨"
      },
      {
        id: "ws_7",
        question: "El verano en el sur de España _____ muy caluroso con temperaturas que superan los cuarenta grados.",
        translation: "(Lato na południu Hiszpanii jest bardzo gorące z temperaturami przekraczającymi czterdzieści stopni)",
        options: ["es", "está", "hace", "hay"],
        correct: "es",
        explanation: "'Ser caluroso' to być gorącym (jako stała cecha)! Lato na południu zawsze jest caluroso - to jego natura, cecha definiująca. Nie mówimy 'está caluroso' dla pory roku. 'Ser' dla charakterystyk klimatycznych sezonów! 🌡️"
      },
      {
        id: "ws_8",
        question: "Esta tarde va a _____ una tormenta fuerte según el pronóstico del tiempo.",
        translation: "(Dziś po południu będzie silna burza według prognozy pogody)",
        options: ["haber", "hacer", "estar", "ser"],
        correct: "haber",
        explanation: "'Haber' używamy dla wydarzeń pogodowych! 'Va a haber una tormenta' (będzie burza), 'hay niebla' (jest mgła). 'Haber' dla rzeczy, które występują, pojawiają się. To jak 'hay' - używamy do mówienia o istnieniu zjawisk! ⛈️"
      },
      {
        id: "ws_9",
        question: "En otoño las hojas de los árboles _____ amarillas, rojas y marrones antes de caer.",
        translation: "(Jesienią liście drzew stają się żółte, czerwone i brązowe zanim spadną)",
        options: ["se ponen", "están", "son", "tienen"],
        correct: "se ponen",
        explanation: "'Ponerse' + kolor dla zmiany! Liście zmieniają kolor - 'se ponen amarillas'. To transformacja, proces. 'Ponerse' jest idealne dla wszelkich zmian wyglądu. Jesień to czas pięknych transformacji natury! 🍂"
      },
      {
        id: "ws_10",
        question: "Durante el invierno los días _____ más cortos y anochece mucho antes que en verano.",
        translation: "(Zimą dni są krótsze i zapada ciemność dużo wcześniej niż latem)",
        options: ["son", "están", "hacen", "hay"],
        correct: "son",
        explanation: "'Ser corto' (być krótkim) to stała cecha zimowych dni! Każda zima jest taka sama - dni są krótkie. To nie stan tymczasowy, to charakterystyka sezonu. 'Ser' dla cech definiujących pory roku! ❄️"
      },
      {
        id: "ws_11",
        question: "Ayer _____ lloviendo todo el día sin parar, así que nos quedamos en casa viendo películas.",
        translation: "(Wczoraj padało cały dzień bez przerwy, więc zostaliśmy w domu oglądając filmy)",
        options: ["estuvo", "fue", "había", "hacía"],
        correct: "estuvo",
        explanation: "'Estar lloviendo' to padać (w danym momencie). Używamy 'estar + gerundio' dla akcji w toku. 'Estuvo lloviendo' (padało - trwało przez czas). To pokazuje ciągłość akcji. Perfecto dla opisu długiego deszczu! 🌧️"
      },
      {
        id: "ws_12",
        question: "La temperatura _____ bajando poco a poco a medida que se acerca el invierno frío.",
        translation: "(Temperatura stopniowo spada w miarę zbliżania się zimnej zimy)",
        options: ["está", "es", "hace", "hay"],
        correct: "está",
        explanation: "'Estar bajando' to spadać (w toku). Temperatura zmienia się teraz, w tym momencie. 'Estar + gerundio' dla procesów zachodzących! To jak patrzenie na termometr i obserwowanie, jak temperatura spada powoli. 📉"
      },
      {
        id: "ws_13",
        question: "En la costa mediterránea el clima _____ suave y agradable durante todo el año.",
        translation: "(Na wybrzeżu śródziemnomorskim klimat jest łagodny i przyjemny przez cały rok)",
        options: ["es", "está", "hace", "hay"],
        correct: "es",
        explanation: "'Ser suave' (być łagodnym) to stała cecha klimatu! Klimat śródziemnomorski zawsze jest mild - to jego definicja. Nie zmienia się - to natura regionu. 'Ser' dla cech klimatycznych stałych! 🏖️"
      },
      {
        id: "ws_14",
        question: "Esta semana _____ tiempo inestable con lluvias intermitentes y cambios bruscos de temperatura.",
        translation: "(W tym tygodniu jest niestabilna pogoda z przerywanymi deszczami i gwałtownymi zmianami temperatury)",
        options: ["hace", "hay", "está", "es"],
        correct: "hace",
        explanation: "'Hacer tiempo inestable' to mieć niestabilną pogodę! 'Hacer' jest naszym głównym czasownikiem pogodowym. 'Hacer buen tiempo', 'hacer mal tiempo', 'hacer tiempo raro'. To uniwersalne narzędzie opisu pogody! 🌦️"
      },
      {
        id: "ws_15",
        question: "Cuando _____ niebla espesa en la carretera, es muy peligroso conducir rápido.",
        translation: "(Kiedy jest gęsta mgła na drodze, bardzo niebezpiecznie jest jechać szybko)",
        options: ["hay", "hace", "está", "es"],
        correct: "hay",
        explanation: "'Haber' dla zjawisk atmosferycznych! 'Hay niebla' (jest mgła), 'hay neblina' (jest mgiełka). 'Haber' używamy, gdy coś istnieje, pojawia się w przestrzeni. Mgła jest jak zasłona - pojawia się i znika! 🌫️"
      }
    ]
  }
};

export default part4Categories;
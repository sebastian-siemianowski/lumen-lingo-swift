/**
 * POLISH → SPANISH GRAMMAR - PART 20
 * 4 categories, 15 questions each - Mastering nuances
 */

import { Calendar, Bookmark, Music, Umbrella, TrendingUp } from "lucide-react";

export const part20Categories = {
  temporal_clauses_advanced: {
    name: "Zdania czasowe zaawansowane",
    description: "Opanuj złożone relacje czasowe",
    icon: Calendar,
    color: "from-indigo-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "temp_adv_1",
        question: "Te llamaré en cuanto _____ a casa del trabajo esta tarde sin falta.",
        translation: "(Zadzwonię do ciebie, jak tylko wrócę do domu z pracy dziś po południu bez wyjątku)",
        options: ["llegue", "llego", "llegaré", "llegara"],
        correct: "llegue",
        explanation: "'En cuanto' z przyszłością wymaga presente subjuntivo. To pokazuje natychmiastowość akcji - zadzwonię ZARAZ PO dotarciu. Nie używamy przyszłego czasu po 'en cuanto', mimo że mówimy o przyszłości."
      },
      {
        id: "temp_adv_2",
        question: "Cuando _____ pequeño, siempre pasaba las vacaciones en casa de mis abuelos en el pueblo.",
        translation: "(Kiedy byłem mały, zawsze spędzałem wakacje w domu moich dziadków we wsi)",
        options: ["era", "fui", "sea", "fuera"],
        correct: "era",
        explanation: "'Cuando' z przeszłością opisową używa imperfecto. To tło dla innych akcji - byłem mały to stan długotrwały, nie jednorazowe wydarzenie. 'Era' bo opisuje okres życia."
      },
      {
        id: "temp_adv_3",
        question: "No iré a la fiesta hasta que me _____ disculpas por lo que me dijiste ayer.",
        translation: "(Nie pójdę na imprezę, dopóki nie przeproszę mnie za to, co mi wczoraj powiedziałeś)",
        options: ["pidas", "pides", "pedirás", "pidieras"],
        correct: "pidas",
        explanation: "'Hasta que' z przyszłością wymaga subjuntivo. Pokazuje oczekiwanie na spełnienie warunku. Używamy presente subjuntivo dla przyszłych warunków po 'hasta que'."
      },
      {
        id: "temp_adv_4",
        question: "Mientras _____ estudiando, no me interrumpas por favor, necesito concentración total.",
        translation: "(Podczas gdy będę studiował, nie przerywaj mi proszę, potrzebuję totalnej koncentracji)",
        options: ["esté", "estoy", "estaré", "estuviera"],
        correct: "esté",
        explanation: "'Mientras' dla przyszłości wymaga subjuntivo. Choć akcja będzie trwać, używamy subjuntivo bo nie wiemy dokładnie kiedy. To różni się od 'mientras' z przeszłością która bierze indicativo."
      },
      {
        id: "temp_adv_5",
        question: "Tan pronto como _____ de leer este libro, te lo prestaré con mucho gusto.",
        translation: "(Jak tylko skończę czytać tę książkę, pożyczę ci ją z wielką przyjemnością)",
        options: ["termine", "termino", "terminaré", "terminara"],
        correct: "termine",
        explanation: "'Tan pronto como' to jak tylko (podobne do 'en cuanto'). Z przyszłością zawsze subjuntivo. Pokazuje że druga akcja nastąpi natychmiast po zakończeniu pierwszej."
      },
      {
        id: "temp_adv_6",
        question: "Antes de que _____ demasiado tarde, deberíamos reservar los billetes de avión para el viaje.",
        translation: "(Zanim będzie za późno, powinniśmy zarezerwować bilety lotnicze na podróż)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "'Antes de que' ZAWSZE wymaga subjuntivo. To pokazuje akcję która musi nastąpić przed czymś innym. Różni się od 'antes de' + infinitivo (ten sam podmiot)."
      },
      {
        id: "temp_adv_7",
        question: "Después de que _____ la reunión importante, iremos todos a cenar juntos al restaurante italiano.",
        translation: "(Po tym jak skończy się ważne spotkanie, pójdziemy wszyscy razem na kolację do włoskiej restauracji)",
        options: ["termine", "termina", "terminará", "terminara"],
        correct: "termine",
        explanation: "'Después de que' z przyszłością używa subjuntivo. Choć 'después de' + infinitivo jest możliwe (ten sam podmiot), 'después de que' + subjuntivo dla różnych podmiotów."
      },
      {
        id: "temp_adv_8",
        question: "Siempre que _____ tiempo libre, aprovecho para leer libros interesantes en el parque.",
        translation: "(Ilekroć mam wolny czas, wykorzystuję to, żeby czytać ciekawe książki w parku)",
        options: ["tengo", "tenga", "tendré", "tuviera"],
        correct: "tengo",
        explanation: "'Siempre que' z nawykiem obecnym używa indicativo. To rutyna która się powtarza regularnie. Dla przyszłych lub hipotetycznych sytuacji użylibyśmy subjuntivo."
      },
      {
        id: "temp_adv_9",
        question: "Una vez que _____ el examen final, podrás relajarte completamente durante las vacaciones.",
        translation: "(Raz jak zdasz końcowy egzamin, będziesz mógł się całkowicie zrelaksować podczas wakacji)",
        options: ["apruebes", "apruebas", "aprobarás", "aprobaras"],
        correct: "apruebes",
        explanation: "'Una vez que' to raz gdy (moment zakończenia). Z przyszłością wymaga subjuntivo. Pokazuje że druga akcja możliwa dopiero po pierwszej - sekwencja czasowa."
      },
      {
        id: "temp_adv_10",
        question: "A medida que _____ pasando el tiempo, voy entendiendo mejor la cultura española auténtica.",
        translation: "(W miarę jak upływa czas, coraz lepiej rozumiem autentyczną kulturę hiszpańską)",
        options: ["va", "vaya", "irá", "fuera"],
        correct: "va",
        explanation: "'A medida que' pokazuje stopniową zmianę. Używamy indicativo bo opisujemy rzeczywisty proces. To jak obserwacja postępu - widzisz jak coś zmienia się z czasem."
      },
      {
        id: "temp_adv_11",
        question: "Nada más _____ la noticia, llamó a sus padres para compartir su alegría inmensa.",
        translation: "(Nic bardziej niż usłyszawszy wiadomość, zadzwonił do rodziców, żeby podzielić się ogromną radością)",
        options: ["oír", "oyendo", "oyó", "oiga"],
        correct: "oír",
        explanation: "'Nada más' + infinitivo to natychmiast po. To idiomatyczna konstrukcja pokazująca natychmiastową reakcję. 'Nada más' zawsze bierze infinitiv dla wyrażenia momentalności akcji."
      },
      {
        id: "temp_adv_12",
        question: "Cada vez que _____ ese lugar especial, me acuerdo de mi infancia feliz en el campo.",
        translation: "(Za każdym razem, gdy odwiedzam to specjalne miejsce, przypominam sobie moje szczęśliwe dzieciństwo na wsi)",
        options: ["visito", "visite", "visitaré", "visitara"],
        correct: "visito",
        explanation: "'Cada vez que' z nawykiem używa indicativo. To powtarzająca się sytuacja w teraźniejszości. Dla przyszłych hipotetycznych wizyt użylibyśmy subjuntivo."
      },
      {
        id: "temp_adv_13",
        question: "No bien _____ el sol por la mañana, los pájaros empiezan a cantar alegremente.",
        translation: "(Ledwo wstaje słońce rano, ptaki zaczynają radośnie śpiewać)",
        options: ["sale", "salga", "saldrá", "saliera"],
        correct: "sale",
        explanation: "'No bien' to ledwo, jak tylko. Z nawykiem naturalnym używamy indicativo. To opisuje regularny fenomen natury - coś co dzieje się codziennie w tej sekwencji."
      },
      {
        id: "temp_adv_14",
        question: "Conforme _____ avanzando en el curso, los ejercicios se vuelven más complejos y desafiantes.",
        translation: "(W miarę jak posuwasz się w kursie, ćwiczenia stają się bardziej złożone i wymagające)",
        options: ["vas", "vayas", "irás", "fueras"],
        correct: "vas",
        explanation: "'Conforme' to w miarę jak (stopniowa zmiana). Używamy indicativo dla rzeczywistego procesu. Podobne do 'a medida que' - oba pokazują progresywną transformację w czasie."
      },
      {
        id: "temp_adv_15",
        question: "Apenas _____ tiempo de terminar el examen cuando el profesor dijo que se acabó el tiempo.",
        translation: "(Ledwo miałem czas skończyć egzamin, kiedy profesor powiedział, że czas się skończył)",
        options: ["tuve", "tenía", "tenga", "tuviera"],
        correct: "tuve",
        explanation: "'Apenas' + pretérito to ledwo (w ostatniej chwili). Pretérito pokazuje że zdążyłeś ale minimalnie. To akcja punktowa która prawie nie nastąpiła - timing był krytyczny."
      }
    ]
  },

  pronouns_after_prepositions: {
    name: "Zaimki po przyimkach",
    description: "Używaj poprawnych form po przyimkach",
    icon: Bookmark,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_pron_1",
        question: "Este regalo especial es para _____, espero que te guste mucho y lo uses a menudo.",
        translation: "(Ten specjalny prezent jest dla ciebie, mam nadzieję, że bardzo ci się spodoba i będziesz go często używać)",
        options: ["ti", "tú", "te", "tuyo"],
        correct: "ti",
        explanation: "Po przyimkach używamy 'mí, ti' nie 'yo, tú'. 'Para ti' to dla ciebie. To specjalne formy zaimków osobowych które pojawiają się tylko po przyimkach."
      },
      {
        id: "prep_pron_2",
        question: "No puedo vivir sin _____, eres la persona más importante en toda mi vida.",
        translation: "(Nie mogę żyć bez ciebie, jesteś najważniejszą osobą w całym moim życiu)",
        options: ["ti", "tú", "te", "tuyo"],
        correct: "ti",
        explanation: "'Sin ti' to bez ciebie. Po wszystkich przyimkach (para, sin, con, de, etc.) używamy form 'mí/ti'. Wyjątek to 'conmigo' i 'contigo' - specjalne złożone formy."
      },
      {
        id: "prep_pron_3",
        question: "Según _____, la situación económica mejorará gradualmente durante el próximo año fiscal.",
        translation: "(Według mnie sytuacja ekonomiczna poprawi się stopniowo podczas przyszłego roku fiskalnego)",
        options: ["mí", "yo", "me", "mío"],
        correct: "mí",
        explanation: "'Según mí' to według mnie. 'Mí' (z akcentem) to forma po przyimku. Nie mylić z 'mi' (bez akcentu) które jest dzierżawczym 'mój'."
      },
      {
        id: "prep_pron_4",
        question: "Entre tú y _____ no debería haber secretos en nuestra amistad tan cercana y sincera.",
        translation: "(Między tobą a mną nie powinno być sekretów w naszej tak bliskiej i szczere przyjaźni)",
        options: ["yo", "mí", "me", "mi"],
        correct: "yo",
        explanation: "'Entre' bierze normalne formy podmiotowe! Mówimy 'entre tú y yo' (nie 'entre ti y mí'). To wyjątek od reguły - jedyny przyimek który tak działa."
      },
      {
        id: "prep_pron_5",
        question: "¿Quieres venir con_____ al cine esta noche para ver la nueva película de acción?",
        translation: "(Czy chcesz iść ze mną do kina dziś wieczorem, żeby zobaczyć nowy film akcji?)",
        options: ["migo", "mí", "yo", "me"],
        correct: "migo",
        explanation: "'Conmigo' to ze mną - specjalna złożona forma. Nigdy 'con mí'. Podobnie 'contigo' (z tobą), 'consigo' (ze sobą). To wyjątkowe połączenia które tworzymy jednym słowem."
      },
      {
        id: "prep_pron_6",
        question: "A _____ me encanta la comida picante mexicana, pero a él no le gusta nada.",
        translation: "(Mnie bardzo podoba się pikantne meksykańskie jedzenie, ale jemu wcale się nie podoba)",
        options: ["mí", "yo", "me", "mi"],
        correct: "mí",
        explanation: "'A mí' używamy dla emfazy z 'gustar'. To wzmacnia kontrast - MNI się podoba (ale nie jemu). 'Mí' po przyimku 'a', z akcentem."
      },
      {
        id: "prep_pron_7",
        question: "Delante de _____ siempre se comporta muy educadamente, pero con otros es diferente completamente.",
        translation: "(Przede mną zawsze zachowuje się bardzo grzecznie, ale z innymi jest całkowicie inaczej)",
        options: ["mí", "yo", "me", "mi"],
        correct: "mí",
        explanation: "'Delante de mí' to przede mną. Wszystkie przyimki miejsca (delante de, detrás de, encima de) biorą 'mí/ti'. To standardowa reguła bez wyjątków."
      },
      {
        id: "prep_pron_8",
        question: "Este asunto privado es solo entre _____ y yo, nadie más debe saberlo absolutamente.",
        translation: "(Ta prywatna sprawa jest tylko między tobą a mną, absolutnie nikt więcej nie powinien o tym wiedzieć)",
        options: ["tú", "ti", "te", "tuyo"],
        correct: "tú",
        explanation: "'Entre tú y yo' to wyjątek! Po 'entre' używamy form podmiotowych 'tú' i 'yo', nie 'ti' i 'mí'. To jedyny przyimek który tak działa."
      },
      {
        id: "prep_pron_9",
        question: "Por _____ no hay problema en posponer la reunión, puedo cualquier otro día de la semana.",
        translation: "(Ze mnie nie ma problemu w przełożeniu spotkania, mogę każdego innego dnia tygodnia)",
        options: ["mí", "yo", "me", "mi"],
        correct: "mí",
        explanation: "'Por mí' to ze mnie, jeśli o mnie chodzi. Wyrażenie zgody lub braku problemu. 'Por' jak każdy inny przyimek wymaga 'mí' z akcentem."
      },
      {
        id: "prep_pron_10",
        question: "Hazlo por _____ mismo, sin esperar ayuda de nadie, para demostrar tu capacidad real.",
        translation: "(Zrób to sam, nie czekając na pomoc od nikogo, żeby pokazać swoją prawdziwą zdolność)",
        options: ["ti", "tú", "te", "tuyo"],
        correct: "ti",
        explanation: "'Por ti mismo' to sam (dla ciebie). 'Mismo' wzmacnia zaimek. Zgadzamy: 'mí mismo, ti mismo, sí mismo'. To forma refleksyjna z przyimkiem."
      },
      {
        id: "prep_pron_11",
        question: "Además de _____, vendrán otras tres personas más a la cena familiar de mañana.",
        translation: "(Oprócz mnie przyjdzie jeszcze trzy inne osoby na jutrzejszą rodzinną kolację)",
        options: ["mí", "yo", "me", "mi"],
        correct: "mí",
        explanation: "'Además de mí' to oprócz mnie. Przyimki złożone (además de, antes de, después de) też biorą 'mí/ti'. Wszystkie przyimki zachowują się tak samo."
      },
      {
        id: "prep_pron_12",
        question: "Cerca de _____ vive mi mejor amiga de la infancia, solo a dos calles de distancia.",
        translation: "(Blisko mnie mieszka moja najlepsza przyjaciółka z dzieciństwa, tylko dwie ulice dalej)",
        options: ["mí", "yo", "me", "mi"],
        correct: "mí",
        explanation: "'Cerca de mí' to blisko mnie. Przyimki odległości i miejsca używają 'mí/ti'. To forma pokazująca pozycję względem osoby jako punkt odniesienia."
      },
      {
        id: "prep_pron_13",
        question: "¿Puedes guardar este secreto importante para _____? No quiero que nadie más lo sepa todavía.",
        translation: "(Czy możesz zachować ten ważny sekret dla siebie? Nie chcę, żeby ktoś jeszcze o tym wiedział)",
        options: ["ti", "tú", "te", "tuyo"],
        correct: "ti",
        explanation: "'Para ti' to dla ciebie (zatrzymać przy sobie). Konstrukcja 'guardar para sí/ti' oznacza nie dzielić się. 'Para' + zaimek przyimkowy to standard."
      },
      {
        id: "prep_pron_14",
        question: "Excepto _____, todos los demás estudiantes aprobaron el difícil examen de matemáticas avanzadas.",
        translation: "(Poza mną wszyscy inni studenci zdali trudny egzamin z zaawansowanej matematyki)",
        options: ["mí", "yo", "me", "mi"],
        correct: "mí",
        explanation: "'Excepto mí' to poza mną, z wyjątkiem. 'Excepto' jak każdy przyimek bierze 'mí/ti'. Pokazuje wyjątek od grupy - ty jesteś tą różną osobą."
      },
      {
        id: "prep_pron_15",
        question: "Contra _____ no hay nada personal, simplemente no comparto tu opinión sobre el tema político.",
        translation: "(Przeciwko tobie nie mam nic osobistego, po prostu nie podzielam twojej opinii w tej sprawie politycznej)",
        options: ["ti", "tú", "te", "tuyo"],
        correct: "ti",
        explanation: "'Contra ti' to przeciwko tobie. 'Contra' wyraża opozycję lub konflikt. Jak wszystkie przyimki, wymaga formy 'mí/ti', nigdy podmiotu 'yo/tú'."
      }
    ]
  },

  expressions_with_tener: {
    name: "Wyrażenia z 'tener'",
    description: "Idiomy używające czasownika tener",
    icon: Music,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "tener_1",
        question: "Tengo mucha _____ después de correr durante una hora bajo el sol intenso del verano.",
        translation: "(Bardzo chce mi się pić po biegu przez godzinę pod intensywnym letnim słońcem)",
        options: ["sed", "hambre", "calor", "sueño"],
        correct: "sed",
        explanation: "'Tener sed' to chce mi się pić. W hiszpańskim używamy 'tener' nie 'estar' dla stanów fizycznych. 'Sed' jest żeńska, więc 'mucha sed'."
      },
      {
        id: "tener_2",
        question: "Los niños siempre tienen _____ después de jugar todo el día sin parar en el parque.",
        translation: "(Dzieci zawsze są głodne po zabawie cały dzień bez przerwy w parku)",
        options: ["hambre", "sed", "sueño", "calor"],
        correct: "hambre",
        explanation: "'Tener hambre' to być głodnym. 'Hambre' jest żeńska ale mówimy 'mucho hambre' nie 'mucha' - wyjątek fonetyczny dla słów zaczynających się na akcentowane 'a'."
      },
      {
        id: "tener_3",
        question: "Tengo _____ de viajar por el mundo y conocer diferentes culturas fascinantes y únicas.",
        translation: "(Mam ochotę podróżować po świecie i poznawać różne fascynujące i unikalne kultury)",
        options: ["ganas", "deseo", "quiero", "necesidad"],
        correct: "ganas",
        explanation: "'Tener ganas de' to mieć ochotę na coś. 'Ganas' zawsze mnoga. To wyrażenie emocji i pragnienia - bardziej kolokwialne niż 'desear'."
      },
      {
        id: "tener_4",
        question: "¿Cuántos años _____? Te ves muy joven para tener tanta experiencia profesional en el campo.",
        translation: "(Ile masz lat? Wyglądasz bardzo młodo jak na posiadanie tak dużego doświadczenia zawodowego w tej dziedzinie)",
        options: ["tienes", "eres", "estás", "haces"],
        correct: "tienes",
        explanation: "'¿Cuántos años tienes?' to jak pytać o wiek. Dosłownie 'ile lat masz'. W hiszpańskim wiek to posiadanie lat, nie bycie lat - zawsze 'tener', nigdy 'ser'."
      },
      {
        id: "tener_5",
        question: "Ten mucho _____ al cruzar esa calle muy transitada, los coches van muy rápido siempre.",
        translation: "(Bądź bardzo ostrożny przechodząc tę bardzo ruchliwą ulicę, samochody zawsze jeżdżą bardzo szybko)",
        options: ["cuidado", "atención", "precaución", "ojo"],
        correct: "cuidado",
        explanation: "'Tener cuidado' to być ostrożnym, uważać. To idiomatyczne wyrażenie dla ostrożności. Można też 'tener precaución' ale 'cuidado' jest naturalniejsze."
      },
      {
        id: "tener_6",
        question: "No tengo _____ de salir esta noche, prefiero quedarme en casa viendo una película tranquilamente.",
        translation: "(Nie mam ochoty wychodzić dziś wieczorem, wolę zostać w domu spokojnie oglądając film)",
        options: ["ganas", "deseo", "quiero", "necesidad"],
        correct: "ganas",
        explanation: "'No tener ganas' to nie mieć ochoty. Negacja wyrażenia 'tener ganas de'. 'Ganas' jest zawsze w liczbie mnogiej - to niepoliczalny rzeczownik mnogi."
      },
      {
        id: "tener_7",
        question: "Tengo _____ de que algo malo va a pasar, es solo una sensación extraña e inexplicable.",
        translation: "(Mam przeczucie, że coś złego się wydarzy, to tylko dziwne i niewytłumaczalne uczucie)",
        options: ["el presentimiento", "la sensación", "la impresión", "la corazonada"],
        correct: "el presentimiento",
        explanation: "'Tener el presentimiento' to mieć przeczucie. 'Presentimiento' jest męskie mimo końcówki. To intuicyjne odczucie o przyszłości - bardziej silne niż 'sensación'."
      },
      {
        id: "tener_8",
        question: "Ella tiene muy buen _____ para los negocios, siempre sabe qué inversiones serán rentables.",
        translation: "(Ona ma bardzo dobry zmysł do interesów, zawsze wie, które inwestycje będą opłacalne)",
        options: ["ojo", "vista", "sentido", "instinto"],
        correct: "ojo",
        explanation: "'Tener buen ojo para' to mieć dobry zmysł do czegoś. Idiomatyczne użycie 'ojo' (oko) dla intuicji biznesowej. Pokazuje naturalną zdolność rozpoznawania okazji."
      },
      {
        id: "tener_9",
        question: "Tengo que _____ en cuenta tu opinión antes de tomar una decisión final definitiva.",
        translation: "(Muszę wziąć pod uwagę twoją opinię przed podjęciem ostatecznej decyzji)",
        options: ["tener", "llevar", "poner", "hacer"],
        correct: "tener",
        explanation: "'Tener en cuenta' to brać pod uwagę, rozważać. To ustalona fraza - zawsze 'tener', nie inny czasownik. Pokazuje że coś jest częścią procesu decyzyjnego."
      },
      {
        id: "tener_10",
        question: "Mi hermano pequeño tiene mucho _____ a la oscuridad y duerme siempre con luz encendida.",
        translation: "(Mój mały brat bardzo boi się ciemności i zawsze śpi z włączonym światłem)",
        options: ["miedo", "temor", "pánico", "terror"],
        correct: "miedo",
        explanation: "'Tener miedo a/de' to bać się czegoś. 'Miedo' jest męskie więc 'mucho miedo'. 'Tener' dla wszystkich emocji związanych ze strachem - konstrukcja bardzo hiszpańska."
      },
      {
        id: "tener_11",
        question: "Tienes toda la _____ en lo que dices sobre la situación política actual del país europeo.",
        translation: "(Masz całkowitą rację w tym, co mówisz o obecnej sytuacji politycznej kraju europejskiego)",
        options: ["razón", "verdad", "certeza", "seguridad"],
        correct: "razón",
        explanation: "'Tener razón' to mieć rację. 'Razón' jest żeńska więc 'toda la razón'. To idiomatyczne - nie można 'ser razón' ani 'estar razón'."
      },
      {
        id: "tener_12",
        question: "Tengo la _____ de que ya nos hemos visto antes en algún lugar, pero no recuerdo dónde exactamente.",
        translation: "(Mam wrażenie, że już gdzieś się widzieliśmy wcześniej, ale nie pamiętam dokładnie gdzie)",
        options: ["impresión", "sensación", "idea", "opinión"],
        correct: "impresión",
        explanation: "'Tener la impresión de que' to mieć wrażenie że. Subiektywna ocena sytuacji. 'Impresión' jest żeńska więc 'la impresión'. Wymaga trybu indicativo po 'de que'."
      },
      {
        id: "tener_13",
        question: "No tengo ni _____ de física cuántica, es demasiado complicada para mi nivel de comprensión.",
        translation: "(Nie mam pojęcia o fizyce kwantowej, jest zbyt skomplikowana dla mojego poziomu rozumienia)",
        options: ["idea", "concepto", "noción", "conocimiento"],
        correct: "idea",
        explanation: "'No tener ni idea' to nie mieć pojęcia. 'Ni' wzmacnia negację - absolutny brak wiedzy. To bardzo kolokwialne wyrażenie całkowitej niewiedzy."
      },
      {
        id: "tener_14",
        question: "Tenemos mucha _____ en tu capacidad para resolver este problema técnico complejo del sistema.",
        translation: "(Mamy wielkie zaufanie w twoją zdolność do rozwiązania tego złożonego technicznego problemu systemu)",
        options: ["confianza", "fe", "esperanza", "seguridad"],
        correct: "confianza",
        explanation: "'Tener confianza en' to mieć zaufanie do kogoś/czegoś. 'Confianza' jest żeńska więc 'mucha confianza'. 'En' łączy z obiektem zaufania - osoba lub zdolność."
      },
      {
        id: "tener_15",
        question: "Ella tiene muy mala _____ últimamente, se tropieza con todo y rompe cosas constantemente.",
        translation: "(Ona ma bardzo pecha ostatnio, potyka się o wszystko i ciągle łamie rzeczy)",
        options: ["suerte", "fortuna", "destino", "sino"],
        correct: "suerte",
        explanation: "'Tener mala suerte' to mieć pecha. 'Suerte' jest żeńska ale z 'mal' przed rzeczownikiem używamy apokopy. 'Muy mala' (po rzeczowniku) zachowuje pełną formę."
      }
    ]
  },

  weather_and_climate: {
    name: "Pogoda i klimat - zaawansowane",
    description: "Szczegółowe opisy pogody i klimatu",
    icon: Umbrella,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "weath_adv_1",
        question: "El pronóstico meteorológico _____ que va a llover torrencialmente durante todo el fin de semana largo.",
        translation: "(Prognoza meteorologiczna mówi, że będzie padać ulewnie przez cały długi weekend)",
        options: ["dice", "es", "está", "hace"],
        correct: "dice",
        explanation: "'El pronóstico dice que' to prognoza mówi że. Personifikujemy prognozę jako aktywnego komunikatora. Używamy 'decir' jak dla osoby przekazującej informacje."
      },
      {
        id: "weath_adv_2",
        question: "La temperatura _____ descendiendo bruscamente desde ayer por la tarde sin parar hasta ahora.",
        translation: "(Temperatura spada gwałtownie od wczoraj po południu bez przerwy do teraz)",
        options: ["ha estado", "ha sido", "estuvo", "fue"],
        correct: "ha estado",
        explanation: "'Ha estado descendiendo' to present perfect continuo. Akcja rozpoczęta w przeszłości trwa do teraz. 'Estar + gerundio' dla procesów, 'haber estado' połączy z teraźniejszością."
      },
      {
        id: "weath_adv_3",
        question: "En invierno _____ anochecer muy temprano, a veces a las cinco de la tarde ya está oscuro.",
        translation: "(Zimą zapada zmrok bardzo wcześnie, czasem o piątej po południu jest już ciemno)",
        options: ["suele", "acostumbra", "tiende a", "puede"],
        correct: "suele",
        explanation: "'Soler' + infinitivo to zwykle coś się dzieje. Pokazuje regularny wzorzec sezonowy. 'Suele anochecer' = zwykle zapada zmrok - typowe dla tej pory roku."
      },
      {
        id: "weath_adv_4",
        question: "Cuando hay tormenta eléctrica, es peligroso _____ bajo los árboles altos del bosque denso.",
        translation: "(Kiedy jest burza z piorunami, niebezpiecznie jest chronić się pod wysokimi drzewami gęstego lasu)",
        options: ["refugiarse", "esconderse", "quedarse", "ponerse"],
        correct: "refugiarse",
        explanation: "'Refugiarse' to szukać schronienia. Czasownik zwrotny dla aktywnego szukania ochrony. Różni się od 'esconderse' (chować się) - 'refugiarse' jest o bezpieczeństwie, nie ukrywaniu."
      },
      {
        id: "weath_adv_5",
        question: "El cielo está _____ de nubes grises y oscuras, parece que va a descargar pronto.",
        translation: "(Niebo jest pokryte szarymi i ciemnymi chmurami, wygląda że niedługo będzie padać)",
        options: ["cubierto", "lleno", "repleto", "cargado"],
        correct: "cubierto",
        explanation: "'Estar cubierto de' to być pokrytym czymś. 'Cubierto' to participio od 'cubrir'. 'Estar + participio' dla stanu rezultatu - chmury pokryły niebo."
      },
      {
        id: "weath_adv_6",
        question: "_____ bajado mucho las temperaturas nocturnas desde que empezó oficialmente el otoño este año.",
        translation: "(Bardzo spadły nocne temperatury odkąd oficjalnie zaczęła się jesień w tym roku)",
        options: ["Han", "Son", "Están", "Hacen"],
        correct: "Han",
        explanation: "'Han bajado' to present perfect dla zmiany z efektem na teraz. Temperatury spadły i nadal są niskie. 'Las temperaturas' mnoga wymaga 'han'."
      },
      {
        id: "weath_adv_7",
        question: "Está _____ un frío polar insoportable, la sensación térmica es de menos veinte grados centígrados.",
        translation: "(Jest polarny nie do zniesienia chłód, odczuwalna temperatura to minus dwadzieścia stopni Celsjusza)",
        options: ["haciendo", "siendo", "estando", "habiendo"],
        correct: "haciendo",
        explanation: "'Está haciendo frío' to robi się zimno (w toku). 'Estar + gerundio' dla intensywności obecnej. Bardziej dramatyczne niż tylko 'hace frío' - podkreśla skrajność."
      },
      {
        id: "weath_adv_8",
        question: "El clima de esta región costera _____ caracteriza por inviernos suaves y veranos no demasiado calurosos.",
        translation: "(Klimat tego przybrzeżnego regionu charakteryzuje się łagodnymi zimami i nie za gorącymi latami)",
        options: ["se", "es", "está", "tiene"],
        correct: "se",
        explanation: "'Caracterizarse por' to charakteryzować się czymś. Czasownik zwrotny dla autoopisu. 'Se' pokazuje że klimat sam siebie definiuje przez te cechy."
      },
      {
        id: "weath_adv_9",
        question: "Parece _____ va a mejorar el tiempo para el fin de semana según el último pronóstico actualizado.",
        translation: "(Wygląda że pogoda poprawi się na weekend według ostatniej zaktualizowanej prognozy)",
        options: ["que", "como", "si", "cuando"],
        correct: "que",
        explanation: "'Parece que' to wygląda że. Po 'parecer' używamy 'que' + indicativo dla prawdopodobnych wydarzeń. 'Parece' wyraża obserwację lub przewidywanie."
      },
      {
        id: "weath_adv_10",
        question: "La lluvia _____ arreciando y ya no se ve casi nada a través de las ventanas empañadas.",
        translation: "(Deszcz wzmaga się i już prawie nic nie widać przez zaparowane okna)",
        options: ["va", "está", "sigue", "continúa"],
        correct: "va",
        explanation: "'Ir + gerundio' pokazuje stopniową intensyfikację. Deszcz stopniowo staje się silniejszy. Różni się od 'estar' (stan) - 'ir' pokazuje progresję w jednym kierunku."
      },
      {
        id: "weath_adv_11",
        question: "Dicen que este invierno _____ ser uno de los más fríos de la última década completa.",
        translation: "(Mówią, że ta zima będzie jedną z najzimniejszych ostatniej całej dekady)",
        options: ["va a", "será", "es", "está"],
        correct: "va a",
        explanation: "'Va a ser' to będzie (przewidywanie). Bardziej kolokwialne niż 'será'. 'Dicen que' + przyszłość wprowadza nieformalną prognozę lub plotkę pogodową."
      },
      {
        id: "weath_adv_12",
        question: "El viento _____ con tanta fuerza que derribó varios árboles grandes en el parque municipal.",
        translation: "(Wiatr wiał z taką siłą, że przewrócił kilka dużych drzew w miejskim parku)",
        options: ["soplaba", "sopló", "ha soplado", "estaba soplando"],
        correct: "soplaba",
        explanation: "'Soplar' to wiać. Imperfecto 'soplaba' dla ciągłego wiatru (warunek). Pretérito 'derribó' dla rezultatu (skutek). Tło (wiatr) + akcja (przewrócenie) to typowa kombinacja czasów."
      },
      {
        id: "weath_adv_13",
        question: "_____ pronosticando lluvia para mañana pero espero que el pronóstico se equivoque esta vez.",
        translation: "(Prognozują deszcz na jutro, ale mam nadzieję, że prognoza tym razem się myli)",
        options: ["Están", "Son", "Hay", "Hacen"],
        correct: "Están",
        explanation: "'Estar pronosticando' to są w trakcie prognozowania. Bezosobowy plural dla meteorologów. 'Estar + gerundio' pokazuje że to obecna prognoza, która może się zmienić."
      },
      {
        id: "weath_adv_14",
        question: "El tiempo está _____ inestable últimamente, nunca sabes qué esperar de un día para otro.",
        translation: "(Pogoda jest bardzo niestabilna ostatnio, nigdy nie wiesz czego się spodziewać z dnia na dzień)",
        options: ["muy", "mucho", "bastante", "demasiado"],
        correct: "muy",
        explanation: "'Muy' przed przymiotnikami ('muy inestable'). 'Mucho' byłoby po czasownikach lub z rzeczownikami. To podstawowa różnica - 'muy' modyfikuje jakość, 'mucho' modyfikuje ilość."
      },
      {
        id: "weath_adv_15",
        question: "La sequía prolongada _____ afectando seriamente la agricultura de toda la región sur del país.",
        translation: "(Przedłużona susza poważnie wpływa na rolnictwo całego południowego regionu kraju)",
        options: ["está", "es", "ha", "va"],
        correct: "está",
        explanation: "'Estar afectando' to wpływać w tym momencie. Present continuo dla trwającego wpływu. Susza to proces długotrwały - 'estar + gerundio' pokazuje ciągłość problemu."
      }
    ]
  },

  verbs_of_change: {
    name: "Czasowniki zmiany",
    description: "Wyrażaj transformacje i zmiany stanów",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "change_1",
        question: "Mi hermana _____ muy nerviosa cada vez que tiene que hablar en público delante de muchas personas.",
        translation: "(Moja siostra denerwuje się bardzo za każdym razem, gdy musi mówić publicznie przed wieloma osobami)",
        options: ["se pone", "se hace", "se vuelve", "llega a ser"],
        correct: "se pone",
        explanation: "'Ponerse' dla szybkich zmian emocjonalnych. Reakcja momentalna na sytuację. 'Se pone nerviosa' pokazuje przejście z normalności do nerwowości - zmiana nagła i czasowa."
      },
      {
        id: "change_2",
        question: "Con los años mi abuelo _____ más paciente y tranquilo, la edad le dio sabiduría.",
        translation: "(Z latami mój dziadek stał się bardziej cierpliwy i spokojny, wiek dał mu mądrość)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' dla stopniowych zmian charakteru. Transformacja przez czas. 'Se volvió' pokazuje że zmiana była procesem, nie nagłym wydarzeniem - ewolucja osobowości."
      },
      {
        id: "change_3",
        question: "Después de muchos años de esfuerzo constante, finalmente _____ un médico reconocido en su especialidad.",
        translation: "(Po wielu latach ciągłego wysiłku w końcu został uznanym lekarzem w swojej specjalności)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse' dla zawodów i wyników wysiłku. Pokazuje aktywne dążenie i osiągnięcie. 'Se hizo médico' = został lekarzem przez studiowanie i pracę - świadoma transformacja."
      },
      {
        id: "change_4",
        question: "Las hojas de los árboles _____ amarillas y rojas en otoño antes de caer al suelo.",
        translation: "(Liście drzew stają się żółte i czerwone jesienią przed spadnięciem na ziemię)",
        options: ["se ponen", "se hacen", "se vuelven", "llegan a ser"],
        correct: "se ponen",
        explanation: "'Ponerse' dla zmian koloru. Szybka transformacja wizualna. 'Se ponen' + kolor to standardowa konstrukcja dla naturalnych zmian wyglądu - sezonowa metamorfoza."
      },
      {
        id: "change_5",
        question: "La situación económica del país _____ cada vez peor con el paso de los meses difíciles.",
        translation: "(Sytuacja ekonomiczna kraju staje się coraz gorsza z upływem trudnych miesięcy)",
        options: ["se vuelve", "se pone", "se hace", "llega a ser"],
        correct: "se vuelve",
        explanation: "'Volverse' dla postępujących zmian negatywnych. Stopniowe pogarszanie się. 'Cada vez' wzmacnia progresję - pokazuje że zmiana nie jest chwilowa ale trend."
      },
      {
        id: "change_6",
        question: "Cuando escuchó las malas noticias, _____ pálido como la pared y casi se desmaya del shock.",
        translation: "(Kiedy usłyszał złe wiadomości, zbladł jak ściana i prawie zemdlał z szoku)",
        options: ["se puso", "se hizo", "se volvió", "llegó a ser"],
        correct: "se puso",
        explanation: "'Ponerse pálido' to zblednąć. Natychmiastowa reakcja fizyczna na szok. 'Ponerse' dla nagłych zmian wyglądu lub stanu - transformacja w sekundy."
      },
      {
        id: "change_7",
        question: "Trabajando duramente durante décadas, _____ un empresario exitoso y respetado en su sector industrial.",
        translation: "(Pracując ciężko przez dekady, został odnoszącym sukcesy i szanowanym przedsiębiorcą w swoim sektorze przemysłowym)",
        options: ["llegó a ser", "se hizo", "se puso", "se volvió"],
        correct: "llegó a ser",
        explanation: "'Llegar a ser' to ostatecznie zostać (po długim procesie). Najbardziej formalne. Podkreśla osiągnięcie wysokiej pozycji przez czas i wysiłek - kulminacja drogi zawodowej."
      },
      {
        id: "change_8",
        question: "Mi hermano _____ vegetariano el año pasado por razones éticas sobre el trato a los animales.",
        translation: "(Mój brat został wegetarianinem w zeszłym roku z etycznych powodów dotyczących traktowania zwierząt)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse vegetariano' to zostać wegetarianinem. Świadoma decyzja i zmiana stylu życia. 'Hacerse' para tożsamości które wybieramy - pokazuje wolę i akcję, nie przypadek."
      },
      {
        id: "change_9",
        question: "Con tanto estrés laboral acumulado, mi padre _____ insoportable e irritable con todos nosotros.",
        translation: "(Z tak dużym nagromadzonym stresem zawodowym mój ojciec stał się nie do zniesienia i drażliwy ze wszystkimi nami)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' dla negatywnych zmian charakteru. Stopniowa transformacja osobowości przez okoliczności. 'Volverse + przymiotnik negatywny' to typowe dla pogorszenia stanu psychicznego."
      },
      {
        id: "change_10",
        question: "El agua del río _____ turbia y marrón después de las lluvias torrenciales de la semana pasada.",
        translation: "(Woda w rzece stała się mętna i brązowa po ulewnych deszczach z zeszłego tygodnia)",
        options: ["se puso", "se hizo", "se volvió", "quedó"],
        correct: "se puso",
        explanation: "'Ponerse' dla zmian stanu rzeczy. Woda zmieniła wygląd przez zewnętrzne czynniki. 'Se puso' pokazuje transformację z czystej na mętną - zmiana stanu fizycznego."
      },
      {
        id: "change_11",
        question: "La leche _____ mala porque la dejaron fuera de la nevera durante toda la noche calurosa.",
        translation: "(Mleko się zepsuło, bo zostawili je poza lodówką przez całą ciepłą noc)",
        options: ["se puso", "se hizo", "se volvió", "quedó"],
        correct: "se puso",
        explanation: "'Ponerse malo/mala' to zepsuć się (o jedzeniu). Zmiana jakości. 'Malo' zgadza się z rodzajem - 'la leche' wymaga 'mala'. Przejście z dobrego do złego stanu."
      },
      {
        id: "change_12",
        question: "A base de mucho estudio y práctica diaria, _____ un experto en su campo de investigación.",
        translation: "(Na bazie dużej nauki i codziennej praktyki stał się ekspertem w swojej dziedzinie badań)",
        options: ["se convirtió en", "se puso", "se hizo", "se volvió"],
        correct: "se convirtió en",
        explanation: "'Convertirse en' to przekształcić się w (profesja/rola). Wymaga 'en' przed rzeczownikiem. Bardziej formalne niż 'hacerse' - podkreśla transformację kompletną w nową tożsamość."
      },
      {
        id: "change_13",
        question: "Después del accidente traumático, _____ una persona completamente diferente, más seria y reflexiva.",
        translation: "(Po traumatycznym wypadku stała się całkowicie inną osobą, bardziej poważną i refleksyjną)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' dla głębokich zmian osobowości. Wydarzenie spowodowało trwałą transformację charakteru. Pokazuje że zmiana jest permanentna, nie chwilowa reakcja."
      },
      {
        id: "change_14",
        question: "El cielo _____ completamente negro de repente y empezó a caer granizo del tamaño de pelotas.",
        translation: "(Niebo stało się całkowicie czarne nagle i zaczął padać grad wielkości piłek)",
        options: ["se puso", "se hizo", "se volvió", "quedó"],
        correct: "se puso",
        explanation: "'Ponerse + kolor' dla szybkich zmian. 'De repente' potwierdza nagłość. 'Se puso negro' to natychmiastowa transformacja - typowe dla gwałtownych zmian pogodowych."
      },
      {
        id: "change_15",
        question: "Poco a poco, con los años de experiencia acumulada, _____ más sabio y comprensivo con los demás.",
        translation: "(Powoli, z latami nagromadzonego doświadczenia, stał się mądrzejszy i bardziej wyrozumiały dla innych)",
        options: ["se fue volviendo", "se puso", "se hizo", "llegó a ser"],
        correct: "se fue volviendo",
        explanation: "'Ir + gerundio' (volviéndose) pokazuje bardzo stopniową zmianę. 'Poco a poco' potwierdza powolność. To najbardziej stopniowa forma - transformacja przez długi okres, krok po kroku."
      }
    ]
  }
};

export default part20Categories;
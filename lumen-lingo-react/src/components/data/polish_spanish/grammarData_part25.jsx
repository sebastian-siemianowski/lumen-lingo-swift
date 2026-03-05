/**
 * POLISH → SPANISH GRAMMAR - PART 25  
 * 4 categories, 15 questions each - Mastering subtleties
 */

import { Zap, Users, Crown, Lightbulb } from "lucide-react";

export const part25Categories = {
  subtle_meaning_changes: {
    name: "Subtelne zmiany znaczenia",
    description: "Jak drobne zmiany wpływają na sens",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "subtle_1",
        question: "_____ español desde hace cinco años pero todavía cometo errores gramaticales a veces.",
        translation: "(Uczę się hiszpańskiego od pięciu lat, ale wciąż czasem robię błędy gramatyczne)",
        options: ["Estudio", "Soy estudiando", "Aprendo", "He estudiado"],
        correct: "Estudio",
        explanation: "'Estudiar' to uczyć się (aktywnie brać lekcje). 'Aprender' to uczyć się (nabywać wiedzę). Choć podobne, 'estudiar' podkreśla proces formalny i wysiłek, podczas gdy 'aprender' fokusuje na rezultacie i zdobywaniu umiejętności."
      },
      {
        id: "subtle_2",
        question: "Ya _____ cinco libros este mes, estoy en una racha increíble de lectura apasionada.",
        translation: "(Już przeczytałem pięć książek w tym miesiącu, jestem w niesamowitej passie czytania)",
        options: ["he leído", "leí", "leo", "leeré"],
        correct: "he leído",
        explanation: "Present perfect 'he leído' łączy przeszłość z teraźniejszością. Pokazuje że przeczytałeś w ramach TEGO miesiąca (okres niezamknięty). 'Leí' (pretérito) sugerowałoby zamknięty okres. Wybór czasu zależy czy okres jest nadal aktualny."
      },
      {
        id: "subtle_3",
        question: "_____ tres años cuando murió mi abuelo, apenas tengo recuerdos de él lamentablemente.",
        translation: "(Miałem trzy lata, kiedy zmarł mój dziadek, ledwo mam wspomnienia o nim niestety)",
        options: ["Tenía", "Tuve", "He tenido", "Tendría"],
        correct: "Tenía",
        explanation: "'Tenía' (imperfecto) dla wieku jako tło wydarzenia. Twój wiek to kontekst dla śmierci dziadka. Pretérito 'tuve' byłby błędem - wiek to stan ciągły nie akcja punktowa. Imperfecto dla wszystkich opisów kontekstu w narracji przeszłej."
      },
      {
        id: "subtle_4",
        question: "¿_____ alguna vez paella auténtica valenciana? Es completamente diferente a las que hacen fuera.",
        translation: "(Czy jadłeś kiedykolwiek autentyczną paellę walencjańską? Jest zupełnie inna niż te, które robią poza nią)",
        options: ["Has probado", "Probaste", "Probarás", "Habrás probado"],
        correct: "Has probado",
        explanation: "'¿Has probado alguna vez?' pyta o doświadczenie życiowe. 'Alguna vez' sygnalizuje present perfect - pytanie czy W ŻYCIU spróbowałeś. Pretérito byłby dla konkretnego momentu, perfect dla akumulowanego doświadczenia bez określonego czasu."
      },
      {
        id: "subtle_5",
        question: "Cuando _____ a la fiesta, todos ya se habían marchado porque era tardísimo.",
        translation: "(Kiedy dotarłem na imprezę, wszyscy już wyszli, bo było bardzo późno)",
        options: ["llegué", "llegaba", "he llegado", "llegaría"],
        correct: "llegué",
        explanation: "Pretérito 'llegué' dla twojego przybycia (akcja punktowa). Wszystko inne to tło (imperfecto 'era') lub wcześniejsza akcja (pluperfecto 'habían marchado'). Twoje dotarcie to kluczowy moment narracji - używamy pretérito dla głównych punktów historii."
      },
      {
        id: "subtle_6",
        question: "¿Quieres que _____ contigo al médico para darte apoyo moral durante la consulta?",
        translation: "(Czy chcesz, żebym poszedł z tobą do lekarza, żeby dać ci wsparcie moralne podczas konsultacji?)",
        options: ["vaya", "voy", "iré", "fuera"],
        correct: "vaya",
        explanation: "'Querer que' wymaga subjuntivo. 'Vaya' (presente subjuntivo) dla oferty przyszłej akcji. Mimo że akcja będzie w przyszłości, po presente głównym używamy presente subjuntivo, nie futuro. To zasada sekwencji czasów."
      },
      {
        id: "subtle_7",
        question: "_____ enfermo toda la semana pasada y no pude ir a trabajar ni un solo día.",
        translation: "(Byłem chory cały zeszły tydzień i nie mogłem iść do pracy ani jednego dnia)",
        options: ["Estuve", "Estaba", "He estado", "Estaría"],
        correct: "Estuve",
        explanation: "'Estuve enfermo' to byłem chory (zamknięty okres). 'Toda la semana pasada' to określony czas który się skończył - wymaga pretérito. 'Estaba' sugerowałoby tło dla innej akcji. Zamknięte okresy choroby używają pretérito."
      },
      {
        id: "subtle_8",
        question: "Si _____ más dinero ahorrado, me compraría un coche nuevo este año sin dudarlo.",
        translation: "(Gdybym miał więcej zaoszczędzonych pieniędzy, kupiłbym sobie nowy samochód w tym roku bez wahania)",
        options: ["tuviera", "tengo", "tendría", "he tenido"],
        correct: "tuviera",
        explanation: "Warunek nierealny używa imperfecto subjuntivo. 'Si tuviera' to gdybym miał (ale nie mam). To drugi typ warunku - mało prawdopodobny lub niemożliwy. 'Si tengo' byłoby dla realnej możliwości, 'tuviera' dla hipotetycznej sytuacji."
      },
      {
        id: "subtle_9",
        question: "Me gustaría _____ más idiomas extranjeros pero no tengo suficiente tiempo libre disponible.",
        translation: "(Chciałbym znać więcej obcych języków, ale nie mam wystarczająco dostępnego wolnego czasu)",
        options: ["saber", "sabiendo", "sabido", "conocer"],
        correct: "saber",
        explanation: "'Me gustaría + infinitivo' to chciałbym. 'Saber idiomas' to znać języki (umiejętność), 'conocer' to znać (osoby/miejsca). Po 'gustaría' zawsze infinitiv. 'Saber' dla umiejętności językowych, 'conocer' dla znajomości przez doświadczenie."
      },
      {
        id: "subtle_10",
        question: "Mañana a estas horas ya _____ volando hacia nuestro destino de vacaciones en el Caribe.",
        translation: "(Jutro o tej porze już będziemy lecieć do naszego wakacyjnego miejsca przeznaczenia na Karaibach)",
        options: ["estaremos", "seremos", "iremos", "volaremos"],
        correct: "estaremos",
        explanation: "'Estar + gerundio' w przyszłości (futuro continuo). Pokazuje akcję w toku w konkretnym momencie przyszłości. 'Estaremos volando' = będziemy W TRAKCIE lotu. Futuro continuo używamy gdy mówimy co będziemy robić w określonym momencie przyszłym."
      },
      {
        id: "subtle_11",
        question: "_____ comiendo cuando sonó el teléfono, así que no pude contestar en ese momento exacto.",
        translation: "(Jadłem, kiedy zadzwonił telefon, więc nie mogłem odebrać w tym dokładnym momencie)",
        options: ["Estaba", "Estuve", "He estado", "Estaría"],
        correct: "Estaba",
        explanation: "'Estaba comiendo' to imperfecto continuo (tło). Jedliście gdy telefon przerwał - to kontekst dla dzwonienia. Pretérito byłby dla zakończonego jedzenia, imperfecto pokazuje że byłeś W TRAKCIE gdy coś się stało - akcja tła vs akcja główna."
      },
      {
        id: "subtle_12",
        question: "Para cuando llegues a casa, yo ya _____ terminado de preparar toda la cena completa.",
        translation: "(Zanim dotrzesz do domu, ja już skończę przygotowywać całą kompletną kolację)",
        options: ["habré", "he", "había", "hubiera"],
        correct: "habré",
        explanation: "Futuro perfecto (habré terminado) dla akcji zakończonej PRZED przyszłym momentem. Skończysz gotować PRZED jego przybyciem. To jak obietnica czasowa - będzie gotowe gdy przyjdzie. Pokazuje sekwencję w przyszłości."
      },
      {
        id: "subtle_13",
        question: "Si lo _____ sabido antes, habría traído más comida para todos los invitados inesperados.",
        translation: "(Gdybym to wiedział wcześniej, przyniósłbym więcej jedzenia dla wszystkich niespodziewanych gości)",
        options: ["hubiera", "habría", "haya", "he"],
        correct: "hubiera",
        explanation: "Warunek trzeciego typu używa pluperfecto subjuntivo. 'Si hubiera sabido' to gdybym był wiedział (ale nie wiedziałem). To całkowicie nierealny warunek przeszły - nie możesz już zmienić przeszłości. Żałujesz braku wiedzy która uniemożliwiła lepsze działanie."
      },
      {
        id: "subtle_14",
        question: "Aunque _____ mucho, no consigo adelgazar nada, debe ser mi metabolismo lento.",
        translation: "(Chociaż dużo ćwiczę, nie mogę w ogóle schudnąć, to musi być mój wolny metabolizm)",
        options: ["hago ejercicio", "haga ejercicio", "hacía ejercicio", "he hecho ejercicio"],
        correct: "hago ejercicio",
        explanation: "'Aunque' z faktem obecnym używa indicativo. To realna koncesja - NAPRAWDĘ ćwiczysz ale nie działa. Gdyby było subjuntivo ('haga'), sugerowałoby hipotetyczną sytuację. Indicativo po 'aunque' dla potwierdzonych faktów."
      },
      {
        id: "subtle_15",
        question: "Puede _____ haya traffic, así que mejor salimos con media hora de antelación prudente.",
        translation: "(Może będzie ruch, więc lepiej wyjedziemy pół godziny wcześniej dla ostrożności)",
        options: ["que", "ser", "estar", "de"],
        correct: "que",
        explanation: "'Puede que' + subjuntivo dla możliwości przyszłej. 'Que' łączy 'puede' z czasownikiem. To przypuszczenie o przyszłości - nie pewność ale możliwość którą bierzesz pod uwagę w planowaniu. Subjuntivo pokazuje niepewność."
      }
    ]
  },

  collective_and_partitive: {
    name: "Rzeczowniki zbiorowe i partytywne",
    description: "Opanuj liczby z grupami i częściami",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "coll_1",
        question: "La gente _____ muy amable en este pueblo pequeño, todos te saludan por la calle.",
        translation: "(Ludzie są bardzo mili w tej małej wiosce, wszyscy witają cię na ulicy)",
        options: ["es", "son", "está", "están"],
        correct: "es",
        explanation: "'La gente' jest singular mimo że oznacza wiele osób. Rzeczownik zbiorowy zawsze singular - 'es' nie 'son'. To jak 'el público', 'la familia' - grupa jako całość, nie jednostki. Singular czasownik z zbiorczym podmiotem."
      },
      {
        id: "coll_2",
        question: "La mayoría de los estudiantes _____ aprobado el examen final con buenas calificaciones altas.",
        translation: "(Większość studentów zdała końcowy egzamin z dobrymi wysokimi ocenami)",
        options: ["ha", "han", "has", "hemos"],
        correct: "ha",
        explanation: "'La mayoría' może brać singular lub plural. Singular (ha) fokusuje na grupie jako całości, plural (han) na jednostkach. Oba poprawne, singular bardziej formalne. Z 'de + plural' często widzimy singular czasownik bo 'mayoría' jest podmiotem, nie 'estudiantes'."
      },
      {
        id: "coll_3",
        question: "Un montón de personas _____ esperando en la cola desde hace más de dos horas.",
        translation: "(Kupa ludzi czeka w kolejce od ponad dwóch godzin)",
        options: ["está", "están", "es", "son"],
        correct: "están",
        explanation: "'Un montón de' + plural często bierze plural czasownik. Fokus na LUDZIACH czekających, nie na 'montón'. Choć 'montón' singular, znaczenie mnogie dominuje - skupiamy się na wielu osobach. To kolokwialna konstrukcja partytywna."
      },
      {
        id: "coll_4",
        question: "La mitad de la población mundial _____ en condiciones de pobreza extrema desafortunadamente.",
        translation: "(Połowa światowej populacji żyje w warunkach skrajnego ubóstwa niestety)",
        options: ["vive", "viven", "vivimos", "vivís"],
        correct: "vive",
        explanation: "'La mitad' (połowa) jest singular. Mimo że odnosi się do miliardów ludzi, gramatycznie to pojedynczy podmiot. Frakcje (la mitad, un tercio, un cuarto) są singular rzeczownikami - czasownik zgadza się z frakcją, nie z tym czego jest częścią."
      },
      {
        id: "coll_5",
        question: "El resto de los invitados _____ llegando poco a poco durante la próxima media hora.",
        translation: "(Reszta gości przybywa powoli podczas przyszłych pół godziny)",
        options: ["irá", "irán", "va", "van"],
        correct: "irá",
        explanation: "'El resto' jest singular mimo że to może być wiele osób. 'Irá llegando' (singular) bo 'resto' jest podmiotem. Można też plural 'irán' fokusując na gościach, ale singular jest bardziej poprawny gramatycznie - zgoda z rzeczownikiem zbiorczym."
      },
      {
        id: "coll_6",
        question: "Un grupo de turistas japoneses _____ fotografiando la catedral gótica desde todos los ángulos.",
        translation: "(Grupa japońskich turystów fotografuje gotycką katedrę ze wszystkich kątów)",
        options: ["está", "están", "es", "son"],
        correct: "está",
        explanation: "'Un grupo' + singular czasownik (formalnie). Fokus na grupie jako jednostce. Możliwy też plural (están) dla fokusa na turystach. Singular = oficjalne, grupa jako całość. Plural = kolokwialne, jednostki w grupie. Oba akceptowalne, kontekst decyduje."
      },
      {
        id: "coll_7",
        question: "Parte de los estudiantes _____ ausentes hoy por la epidemia de gripe que afecta la escuela.",
        translation: "(Część studentów jest nieobecna dziś przez epidemię grypy, która dotyka szkołę)",
        options: ["están", "está", "son", "es"],
        correct: "están",
        explanation: "'Parte de + plural' zwykle bierze plural. 'Estudiantes' są nieobecni - fokus na ludziach, nie na abstrakcyjnej części. Z 'parte/porción' czasownik często zgadza się z rzeczownikiem PO 'de', nie z samym 'parte'."
      },
      {
        id: "coll_8",
        question: "La familia entera _____ reunida alrededor de la mesa grande celebrando el cumpleaños del abuelo.",
        translation: "(Cała rodzina jest zebrana wokół dużego stołu celebrując urodziny dziadka)",
        options: ["está", "están", "es", "son"],
        correct: "está",
        explanation: "'La familia' to singular rzeczownik zbiorczy. Rodzina jako jednostka 'está' reunida. Choć składa się z wielu osób, gramatycznie to jeden podmiot. Zbiorczość dominuje nad jednostkami - rodzina działa razem jako jedno."
      },
      {
        id: "coll_9",
        question: "Un par de amigos míos _____ a visitarme desde Madrid el próximo fin de semana largo.",
        translation: "(Para moich przyjaciół przyjedzie mnie odwiedzić z Madrytu w przyszły długi weekend)",
        options: ["van", "va", "viene", "vienen"],
        correct: "van",
        explanation: "'Un par de' (para) technicznie dwoje ale często używane luźno. Plural 'van' bo fokus na PRZYJACIOŁACH (liczba mnoga). 'Ir' dla ruchu dokąd, 'venir' dla ruchu do mówiącego. Tutaj neutralne 'van' bo nie podkreślamy kierunku względem ciebie."
      },
      {
        id: "coll_10",
        question: "Una docena de huevos frescos _____ suficiente para hacer el pastel grande de cumpleaños.",
        translation: "(Tuzin świeżych jajek wystarczy, żeby zrobić duży tort urodzinowy)",
        options: ["es", "son", "está", "están"],
        correct: "es",
        explanation: "'Una docena' jest singular (jeden tuzin). Mimo że to 12 jajek, 'docena' to singular rzeczownik. Liczebniki grupowe (docena, decena, centena) są singular - traktujemy jako jedną paczkę, nie poszczególne elementy."
      },
      {
        id: "coll_11",
        question: "La multitud de aficionados _____ gritando emocionados cuando marcó gol el delantero estrella del equipo.",
        translation: "(Tłum kibiców krzyczał podekscytowany, kiedy gwiazdor-napastnik drużyny strzelił gola)",
        options: ["estaba", "estaban", "era", "eran"],
        correct: "estaba",
        explanation: "'La multitud' singular mimo wielu osób. Imperfecto 'estaba' dla tła (krzyczeli KIEDY strzelił). Możliwy też plural fokusując na kibicach indywidualnie, ale singular traktuje tłum jako jedną masę - kolektywna reakcja, nie jednostkowe krzyki."
      },
      {
        id: "coll_12",
        question: "Cantidad de gente _____ protestando en las calles contra las nuevas medidas gubernamentales controversiales.",
        translation: "(Masa ludzi protestuje na ulicach przeciwko nowym kontrowersyjnym środkom rządowym)",
        options: ["está", "están", "es", "son"],
        correct: "está",
        explanation: "'Cantidad de gente' to kolokwialne 'dużo ludzi'. 'Gente' singular wymaga singular czasownika. Mimo że 'cantidad' sugeruje mnogość, 'gente' gramatycznie kontroluje - zawsze singular. To idiomatyczna konstrukcja partytywna dla nieokreślonej dużej liczby."
      },
      {
        id: "coll_13",
        question: "El público _____ aplaudió entusiasmado al final de la actuación magistral del pianista virtuoso.",
        translation: "(Publiczność entuzjastycznie oklaskiwała na końcu mistrzowskiego występu wirtuoza pianisty)",
        options: ["aplaudió", "aplaudieron", "ha aplaudido", "están aplaudiendo"],
        correct: "aplaudió",
        explanation: "'El público' singular (publiczność jako całość). Pretérito 'aplaudió' dla zakończonej akcji oklasków. Mimo że to wiele osób klaskających, traktujemy jako jedną zbiorczą reakcję. Rzeczowniki zbiorowe działają singular nawet dla grup."
      },
      {
        id: "coll_14",
        question: "Una serie de acontecimientos extraños _____ llevado a la policía a investigar el caso misterioso.",
        translation: "(Seria dziwnych wydarzeń doprowadziła policję do zbadania tajemniczej sprawy)",
        options: ["ha", "han", "he", "hemos"],
        correct: "ha",
        explanation: "'Una serie' singular (jedna seria). Mimo wielu wydarzeń, 'serie' to singular pojemnik. Present perfect 'ha llevado' pokazuje rezultat na teraz. Singular bo seria jako całość doprowadziła, nie poszczególne wydarzenia osobno."
      },
      {
        id: "coll_15",
        question: "La mayoría de mis compañeros de clase _____ a la universidad el año que viene tras graduarse.",
        translation: "(Większość moich kolegów z klasy pójdzie na uniwersytet w przyszłym roku po ukończeniu)",
        options: ["irá", "irán", "va", "van"],
        correct: "irán",
        explanation: "'La mayoría de + plural' może brać plural czasownik. Fokus na KOLEGACH indywidualnie podejmujących decyzję. 'Irán' (plural) pokazuje że każdy idzie osobno. Singular 'irá' byłby możliwy dla grupy jako całości, ale plural jest naturalniejszy z 'compañeros'."
      }
    ]
  },

  nuanced_prepositions: {
    name: "Niuansowane przyimki",
    description: "Subtelności użycia przyimków",
    icon: Crown,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "prep_nuance_1",
        question: "Estoy _____ favor de la propuesta porque creo que beneficiará a toda la comunidad local.",
        translation: "(Jestem za propozycją, bo myślę że przyniesie korzyść całej lokalnej społeczności)",
        options: ["a", "en", "por", "de"],
        correct: "a",
        explanation: "'Estar a favor de' to być za czymś (opinia). Zawsze 'a favor', nigdy 'en favor'. 'A' pokazuje pozycję czy opinię - gdzie stoisz w dyskusji. Przeciwieństwo 'estar en contra de' (być przeciwko)."
      },
      {
        id: "prep_nuance_2",
        question: "El libro está _____ la mesa de la sala de estar, donde lo dejé esta mañana temprano.",
        translation: "(Książka jest na stole w salonie, gdzie ją zostawiłem dziś wcześnie rano)",
        options: ["sobre", "en", "encima", "arriba"],
        correct: "sobre",
        explanation: "'Sobre la mesa' to na stole (powierzchni). Najbardziej neutralne dla przedmiotów na powierzchniach poziomych. 'En' możliwe, 'encima de' bardziej emfatyczne. 'Sobre' to standard dla rzeczy leżących na czymś bez specjalnego podkreślenia."
      },
      {
        id: "prep_nuance_3",
        question: "Voy a quedarme en casa _____ vez de salir, no me siento muy bien físicamente hoy.",
        translation: "(Zostanę w domu zamiast wychodzić, nie czuję się dziś zbyt dobrze fizycznie)",
        options: ["en", "de", "por", "a"],
        correct: "en",
        explanation: "'En vez de' to zamiast (wybór alternatywy). Zawsze 'en vez', nigdy 'de vez' ani 'por vez'. Pokazuje zastąpienie jednej opcji inną - robisz A zamiast B. 'En lugar de' to synonim - oba znaczą dokładnie to samo."
      },
      {
        id: "prep_nuance_4",
        question: "Lo hice todo _____ ti, para que tú no tuvieras que preocuparte por nada en absoluto.",
        translation: "(Zrobiłem to wszystko dla ciebie, żebyś ty nie musiał się o nic w ogóle martwić)",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "'Por ti' to dla ciebie (w twoim imieniu, ze względu na ciebie). 'Para ti' byłoby jako prezent dla ciebie. Subtelna różnica - 'por' pokazuje motywację (zrobiłem BO ciebie), 'para' cel (zrobiłem ŻEBY dać tobie). Kontekst emocjonalny vs materialny."
      },
      {
        id: "prep_nuance_5",
        question: "El tren _____ Barcelona sale a las ocho de la mañana del andén número cinco.",
        translation: "(Pociąg do Barcelony odjeżdża o ósmej rano z peronu numer pięć)",
        options: ["a", "para", "hacia", "de"],
        correct: "a",
        explanation: "'A Barcelona' dla precyzyjnego celu podróży. Transport zawsze używa 'a' dla destynacji. 'Para Barcelona' sugerowałoby 'w kierunku' (może zatrzymać się wcześniej). 'A' to definitywny cel końcowy - tam dokładnie jedzie pociąg."
      },
      {
        id: "prep_nuance_6",
        question: "Este regalo es _____ mi madre, espero que le guste mucho y lo aprecie de verdad.",
        translation: "(Ten prezent jest dla mojej mamy, mam nadzieję że bardzo jej się spodoba i doceni go naprawdę)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' dla odbiorcy prezentu (cel dostarczenia). To prezent PRZEZNACZONY dla mamy. 'Por' byłoby 'ze względu na' (zrobiłem bo mama). 'Para' pokazuje kierunek transferu - od ciebie do niej jako beneficjentki."
      },
      {
        id: "prep_nuance_7",
        question: "Trabajo _____ una empresa multinacional grande que tiene oficinas en más de cincuenta países.",
        translation: "(Pracuję dla dużej firmy międzynarodowej, która ma biura w ponad pięćdziesięciu krajach)",
        options: ["para", "por", "en", "de"],
        correct: "para",
        explanation: "'Trabajar para' to pracować dla (jako pracownik). Pokazuje dla KOGO pracujesz - twój pracodawca. 'Trabajar en' byłoby w (lokalizacja lub sektor). 'Para' ustanawia relację zatrudnienia - jesteś w służbie tej firmy."
      },
      {
        id: "prep_nuance_8",
        question: "Pasamos _____ tu casa ayer por la noche pero no había nadie, ¿dónde estabas entonces?",
        translation: "(Przeszliśmy koło twojego domu wczoraj wieczorem, ale nikogo nie było, gdzie wtedy byłeś?)",
        options: ["por", "para", "a", "hacia"],
        correct: "por",
        explanation: "'Pasar por' to przechodzić koło/obok. 'Por' dla ruchu w pobliżu bez wchodzenia. 'Pasar a' byłoby wpaść DO domu. Subtelna różnica - 'por' to bliskość bez wejścia, 'a' to dotarcie i wejście do środka."
      },
      {
        id: "prep_nuance_9",
        question: "Lo compré _____ internet porque era más barato que en las tiendas físicas tradicionales.",
        translation: "(Kupiłem to przez internet, bo było taniej niż w tradycyjnych fizycznych sklepach)",
        options: ["por", "en", "a través de", "mediante"],
        correct: "por",
        explanation: "'Por internet' to przez internet (środek zakupu). 'Por' dla medium lub metody. 'En internet' byłoby 'w internecie' (lokalizacja). Rozróżnienie: 'por' = użyłeś jako narzędzia, 'en' = znalazłeś tam - różne aspekty tej samej akcji."
      },
      {
        id: "prep_nuance_10",
        question: "Salimos _____ Madrid mañana muy temprano en la madrugada, sobre las cinco de la mañana.",
        translation: "(Wyjeżdżamy do Madrytu jutro bardzo wcześnie o świcie, około piątej rano)",
        options: ["para", "a", "hacia", "por"],
        correct: "para",
        explanation: "'Salir para' to wyjeżdżać do (rozpoczęcie podróży w kierunku). 'Para' pokazuje intencję i cel wyjazdu. 'Salir a' byłoby mniej używane, 'salir hacia' bardziej literackie. 'Para' to standard dla wyjść z zamiarem dotarcia dokądś."
      },
      {
        id: "prep_nuance_11",
        question: "Estoy buscando un apartamento _____ alquilar cerca del centro de la ciudad universitaria.",
        translation: "(Szukam mieszkania do wynajęcia blisko centrum uniwersyteckiego miasta)",
        options: ["para", "por", "de", "a"],
        correct: "para",
        explanation: "'Para alquilar' to do wynajęcia (cel). Mieszkanie PRZEZNACZONE do wynajmu. 'Para' + infinitivo pokazuje przeznaczenie lub cel użycia. 'De alquiler' byłoby też możliwe (rzeczownik), ale 'para alquilar' (czasownik) jest bardziej dynamiczne."
      },
      {
        id: "prep_nuance_12",
        question: "Gracias _____ todo lo que has hecho por mí durante estos años difíciles de mi vida.",
        translation: "(Dziękuję za wszystko, co zrobiłeś dla mnie podczas tych trudnych lat mojego życia)",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "'Gracias por' to dziękować za (przyczyna wdzięczności). Zawsze 'por' po 'gracias'. Pokazuje POWÓD dzięki - za co dziękujesz. 'Por' łączy emocję (wdzięczność) z jej przyczyną (działania osoby)."
      },
      {
        id: "prep_nuance_13",
        question: "Cambié mi coche viejo _____ uno nuevo más eficiente en consumo de combustible este mes.",
        translation: "(Wymieniłem mój stary samochód na nowy bardziej efektywny w zużyciu paliwa w tym miesiącu)",
        options: ["por", "para", "con", "a"],
        correct: "por",
        explanation: "'Cambiar por' to wymienić na (transakcja). 'Por' pokazuje co otrzymujesz w zamian. Oddajesz jedno i bierzesz drugie - 'por' łączy dwie strony wymiany. To jak 'pagar por' - wskazuje cenę lub ekwiwalent w transakcji."
      },
      {
        id: "prep_nuance_14",
        question: "Llevo viviendo _____ España desde hace más de diez años completos sin interrupción.",
        translation: "(Mieszkam w Hiszpanii od ponad dziesięciu pełnych lat bez przerwy)",
        options: ["en", "a", "por", "para"],
        correct: "en",
        explanation: "'Vivir en' to mieszkać w (lokalizacja/kraj). Zawsze 'en' dla miejsc zamieszkania. 'En España' pokazuje gdzie znajduje się twój dom. Nie 'a' (kierunek), nie 'por' (przez/po) - 'en' dla bycia wewnątrz obszaru geograficznego."
      },
      {
        id: "prep_nuance_15",
        question: "Este libro fue escrito _____ un autor español muy famoso del siglo veinte literario.",
        translation: "(Ta książka została napisana przez bardzo słynnego hiszpańskiego autora literackiego dwudziestego wieku)",
        options: ["por", "para", "de", "desde"],
        correct: "por",
        explanation: "'Por' w stronie biernej pokazuje kto wykonał akcję (agent). 'Escrito por' = napisane przez. W passive voice zawsze 'por' dla agenta. 'Para' wskazywałoby beneficjenta (dla kogo), ale tu mówimy kto faktycznie napisał - to wymaga 'por'."
      }
    ]
  }
};

export default part25Categories;

/**
 * POLISH → SPANISH GRAMMAR - PART 26
 * 4 categories, 15 questions each - Advanced mastery
 */

import { Sparkles, Hash, Wind } from "lucide-react";

export const part26Categories = {
  adverbs_placement: {
    name: "Pozycja przysłówków",
    description: "Gdzie umieszczać przysłówki w zdaniu",
    icon: Wind,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "adv_pos_1",
        question: "_____ hablo español perfectamente, pero me esfuerzo cada día por mejorar mi nivel.",
        translation: "(Wciąż nie mówię perfekcyjnie po hiszpańsku, ale staram się każdego dnia poprawiać swój poziom)",
        options: ["Todavía no", "No todavía", "Aún no", "No aún"],
        correct: "Todavía no",
        explanation: "'Todavía no' (wciąż nie) idzie NA POCZĄTKU para emfazy. Przysłówek czasu może iść na początku, środku lub końcu zdania. Na początku jest najbardziej emfatyczny - podkreślasz że WCIĄŻ to trwa. Pozycja zmienia siłę komunikatu."
      },
      {
        id: "adv_pos_2",
        question: "Mi hermana _____ llega tarde a las citas importantes, es muy puntual y organizada.",
        translation: "(Moja siostra nigdy się nie spóźnia na ważne spotkania, jest bardzo punktualna i zorganizowana)",
        options: ["nunca", "no nunca", "jamás no", "no jamás"],
        correct: "nunca",
        explanation: "'Nunca' idzie PRZED czasownikiem (bez 'no'). Gdy negatyw jest przed czasownikiem, nie dodajemy drugiego 'no'. 'Nunca llega' = 'No llega nunca' - oba poprawne, wybór zależy od emfazy. Przed czasownikiem = bardziej kategoryczne."
      },
      {
        id: "adv_pos_3",
        question: "He visto _____ una película tan emocionante como esa en toda mi vida entera.",
        translation: "(Rzadko widziałem tak ekscytujący film jak ten w całym moim życiu)",
        options: ["raramente", "rara vez", "raro", "raras veces"],
        correct: "raramente",
        explanation: "'Raramente' (rzadko) idzie PO czasowniku pomocniczym ale PRZED głównym. W present perfect umieszczamy między 'he' a 'visto'. Pozycja środkowa para przysłówków częstotliwości jest typowa - pokazuje częstotliwość akcji, nie jej faktu."
      },
      {
        id: "adv_pos_4",
        question: "Los niños jugaban _____ en el jardín sin hacer ruido molesto para los vecinos.",
        translation: "(Dzieci bawiły się cicho w ogrodzie nie robiąc hałasu denerwującego para sąsiadów)",
        options: ["tranquilamente", "tranquilo", "con tranquilidad", "tranquilos"],
        correct: "tranquilamente",
        explanation: "Przysłówki sposobu (-mente) idą zazwyczaj PO czasowniku. 'Jugaban tranquilamente' opisuje JAK się bawiły. Pozycja po czasowniku jest neutralna i naturalna - to standardowe miejsce para przysłówków sposobu bez specjalnej emfazy."
      },
      {
        id: "adv_pos_5",
        question: "Probablemente _____ mañana si el tiempo no mejora significativamente durante la noche.",
        translation: "(Prawdopodobnie będzie padać jutro, jeśli pogoda nie poprawi się znacząco podczas nocy)",
        options: ["llueva", "lloverá", "lloviera", "llueve"],
        correct: "llueva",
        explanation: "'Probablemente' na początku z subjuntivo para większej niepewności. Możliwy też indicativo (lloverá) para większej pewności. Pozycja 'probablemente' NA POCZĄTKU + subjuntivo = maksymalna niepewność. Środek zdania + indicativo = większe prawdopodobieństwo."
      },
      {
        id: "adv_pos_6",
        question: "No he _____ estado en Italia, pero tengo muchísimas ganas de visitar Roma y Venecia.",
        translation: "(Nigdy nie byłem we Włoszech, ale mam ogromną ochotę odwiedzić Rzym i Wenecję)",
        options: ["nunca", "jamás", "no", "nada"],
        correct: "nunca",
        explanation: "'No he nunca estado' to podwójna negacja. 'Nunca' idzie między pomocniczym a participio w perfect. Możliwa też pozycja na końcu ('no he estado nunca'). Środkowa pozycja jest bardziej emfatyczna - podkreśla NIGDY w twoim doświadczeniu życiowym."
      },
      {
        id: "adv_pos_7",
        question: "_____, no me gusta nada esa idea y prefiero buscar alternativas mejores más realistas.",
        translation: "(Szczerze mówiąc wcale mi się nie podoba ten pomysł i wolę szukać lepszych bardziej realistycznych alternatyw)",
        options: ["Francamente", "Franco", "De franco", "En franco"],
        correct: "Francamente",
        explanation: "Przysłówki opinii (francamente, sinceramente, honestamente) idą NA POCZĄTKU para wprowadzenia tonu. To jak 'honestly' - sygnalizujesz szczerość. Początkowa pozycja ramkuje całą wypowiedź - mówisz jak należy ją interpretować emocjonalnie."
      },
      {
        id: "adv_pos_8",
        question: "Mi abuelo camina muy _____ porque tiene problemas serios en las rodillas por la edad.",
        translation: "(Mój dziadek chodzi bardzo wolno, bo ma poważne problemy z kolanami przez wiek)",
        options: ["lentamente", "lento", "despacio", "con lentitud"],
        correct: "lentamente",
        explanation: "'-mente' przysłówki idą PO czasowniku opisując sposób akcji. 'Camina lentamente' = chodzi wolno. Możliwe też 'camina despacio' (prostsze słowo). 'Lento' (przymiotnik) byłoby błędem - potrzebujemy przysłówka para modyfikacji czasownika."
      },
      {
        id: "adv_pos_9",
        question: "Siempre me _____ levantado temprano desde que era niño pequeño en casa de mis padres.",
        translation: "(Zawsze wstawałem wcześnie odkąd byłem małym dzieckiem w domu moich rodziców)",
        options: ["he", "había", "hube", "habré"],
        correct: "he",
        explanation: "'Siempre' idzie PRZED czasownikiem złożonym. 'Siempre he' jest standardową pozycją. Przysłówki częstotliwości (siempre, nunca, a veces) mają elastyczną pozycję ale przed czasownikiem jest najbardziej naturalne - to ich domyślne miejsce w neutralnej intonacji."
      },
      {
        id: "adv_pos_10",
        question: "El profesor explicó la lección _____, usando muchos ejemplos prácticos y visuales claros.",
        translation: "(Nauczyciel wyjaśnił lekcję jasno, używając wielu praktycznych i jasnych wizualnych przykładów)",
        options: ["claramente", "claro", "con claridad", "de manera clara"],
        correct: "claramente",
        explanation: "Przysłówek sposobu PO czasowniku i jego dopełnieniu. 'Explicó la lección claramente' - sposób idzie na końcu gdy jest dopełnienie. Bez dopełnienia mogłoby być 'explicó claramente', ale z dopełnieniem naturalny porządek to czasownik-obiekt-przysłówek."
      },
      {
        id: "adv_pos_11",
        question: "Quizás _____ razón en lo que dices sobre la situación política actual del país europeo.",
        translation: "(Może masz rację w tym, co mówisz o obecnej sytuacji politycznej kraju europejskiego)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Quizás' na początku może brać subjuntivo o uindicativo. Subjuntivo (tengas) = większa niepewność. Indicativo (tienes) = większe prawdopodobieństwo. Pozycja 'quizás' i wybór trybu razem komunikują stopień wątpliwości - kombinacja pozycji i formy czasownika."
      },
      {
        id: "adv_pos_12",
        question: "A menudo _____ en este restaurante acogedor cuando tengo reuniones importantes de negocios.",
        translation: "(Często jem w tej przytulnej restauracji, kiedy mam ważne biznesowe spotkania)",
        options: ["como", "comía", "he comido", "comeré"],
        correct: "como",
        explanation: "'A menudo' na początku zdania to emfatyczne. Mogłoby być też 'como a menudo' (środek). Początek podkreśla regularność - to CZĘSTY nawyk. Przysłówki częstotliwości są elastyczne ale pozycja początkowa daje im większą wagę w komunikacie."
      },
      {
        id: "adv_pos_13",
        question: "Hemos _____ visitado ese museo fascinante tres veces y siempre descubrimos algo nuevo.",
        translation: "(Już odwiedziliśmy to fascynujące muzeum trzy razy i zawsze odkrywamy coś nowego)",
        options: ["ya", "todavía", "aún", "jamás"],
        correct: "ya",
        explanation: "'Ya' idzie między pomocniczym a participio w perfect. 'Hemos ya visitado' pokazuje zakończenie - JUŻ to zrobiliśmy. Pozycja środkowa jest typowa para 'ya' w czasach złożonych - między elementami czasownika, nie przed ani po całej formie."
      },
      {
        id: "adv_pos_14",
        question: "Solamente _____ tres plazas libres disponibles para el curso intensivo de verano este año.",
        translation: "(Tylko zostały trzy wolne miejsca dostępne na intensywny kurs letni w tym roku)",
        options: ["quedan", "están quedando", "han quedado", "quedaban"],
        correct: "quedan",
        explanation: "'Solamente' PRZED czasownikiem ogranicza liczbę. Fokus na TYLKO trzy. Mogłoby być też 'quedan solamente' (po) ale mniej emfatyczne. Pozycja przed czasownikiem czyni ograniczenie bardziej widocznym - to pierwsza informacja którą słyszysz."
      },
      {
        id: "adv_pos_15",
        question: "No entiendo _____ por qué se enfadó tanto, solo hice un comentario inocente sin mala intención.",
        translation: "(Naprawdę nie rozumiem dlaczego się tak zdenerwował, tylko zrobiłem niewinny komentarz bez złej intencji)",
        options: ["realmente", "real", "de veras", "verdaderamente"],
        correct: "realmente",
        explanation: "Przysłówek intensyfikujący PRZED przyimkiem. 'Realmente por qué' wzmacnia pytanie - NAPRAWDĘ dlaczego. Pozycja przed 'por qué' intensyfikuje confusion - to nie casualne pytanie ale głębokie niezrozumienie. Przysłówki emocji mogą przesuwać się para różnych efektów."
      }
    ]
  },

  numbers_and_quantities: {
    name: "Liczby i ilości",
    description: "Wyrażaj precyzyjne i przybliżone liczby",
    icon: Hash,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "num_1",
        question: "En la reunión había _____ cincuenta personas aproximadamente, no estoy seguro del número exacto.",
        translation: "(Na spotkaniu było około pięćdziesięciu osób mniej więcej, nie jestem pewien dokładnej liczby)",
        options: ["unas", "unos", "alguna", "algunos"],
        correct: "unas",
        explanation: "'Unas cincuenta' to około pięćdziesiąt (przybliżenie). Używamy plural nieokreślonych rodzajników z liczbami para przybliżenia. 'Unas' bo 'personas' żeńskie. To jak 'approximately' - zmiękcza precyzję liczby, pokazuje szacunek nie dokładny rachunek."
      },
      {
        id: "num_2",
        question: "La película dura _____ de dos horas, así que tenemos que salir pronto para llegar.",
        translation: "(Film trwa ponad dwie godziny, więc musimy wyjść wkrótce, żeby zdążyć)",
        options: ["más", "sobre", "alrededor", "cerca"],
        correct: "más",
        explanation: "'Más de + liczba' to więcej niż (przekroczenie). Para czasu, odległości, ilości. 'Más de dos horas' = ponad dwie godziny. 'Más de' wymaga 'de' przed liczbą - nie można 'más dos'. To konstrukcja komparatywna z liczbami."
      },
      {
        id: "num_3",
        question: "Llevamos _____ tres años casados y cada día nos queremos más que el anterior.",
        translation: "(Jesteśmy małżeństwem od prawie trzech lat i każdego dnia kochamy się bardziej niż poprzedniego)",
        options: ["casi", "más o menos", "aproximadamente", "sobre"],
        correct: "casi",
        explanation: "'Casi' to prawie (blisko liczby ale nie dokładnie). Jeszcze nie całe trzy lata. 'Casi + liczba' pokazuje że jesteś bardzo blisko ale nie osiągnąłeś jeszcze - subtelna różnica od 'más o menos' (mniej więcej) które może być powyżej lub poniżej."
      },
      {
        id: "num_4",
        question: "_____ mil personas asistieron al concierto gratuito en la plaza principal de la ciudad.",
        translation: "(Ponad tysiąc osób uczestniczyło w darmowym koncercie na głównym placu miasta)",
        options: ["Más de", "Más que", "Más", "De más"],
        correct: "Más de",
        explanation: "'Más de mil' to więcej niż tysiąc. Zawsze 'de' przed liczbami w porównaniach. 'Más que' para porównań jakości, 'más de' para porównań ilości/liczb. To ważna różnica - 'de' blokuje liczby, 'que' łączy zdania lub rzeczowniki."
      },
      {
        id: "num_5",
        question: "Me quedan _____ veinte euros en la cartera, tengo que sacar más dinero del cajero.",
        translation: "(Zostało mi tylko dwadzieścia euro w portfelu, muszę wyciągnąć więcej pieniędzy z bankomatu)",
        options: ["solamente", "solo", "sólo", "únicamente"],
        correct: "solo",
        explanation: "'Solo veinte' to tylko dwadzieścia (ograniczenie). 'Solo' (bez akcentu) = tylko. 'Sólo' z akcentem to archaiczne para 'solamente'. Pozycja przed liczbą minimalizuje ilość - podkreślasz że to mała kwota, mniej niż potrzeba."
      },
      {
        id: "num_6",
        question: "El edificio mide _____ de cien metros de altura total desde la base hasta la cúspide.",
        translation: "(Budynek mierzy ponad sto metrów całkowitej wysokości od podstawy do szczytu)",
        options: ["más", "sobre", "alrededor", "cerca"],
        correct: "más",
        explanation: "'Más de cien' para przekroczenia liczby okrągłej. Opuszczamy powtarzane 'de' gdy kontekst jest jasny ('mide más de cien metros' nie 'mide más de cien de metros'). Konstrukcja z miarami - zawsze 'más de' para przekroczenia wartości."
      },
      {
        id: "num_7",
        question: "Había _____ treinta personas en la sala cuando empezó la conferencia científica internacional.",
        translation: "(Było około trzydziestu osób w sali, kiedy zaczęła się międzynarodowa konferencja naukowa)",
        options: ["unas", "unos", "sobre", "alrededor"],
        correct: "unas",
        explanation: "'Unas treinta personas' to około trzydziestu (przybliżenie). 'Unas' zgadza się z 'personas' (żeńskie). To bardziej precyzyjne niż 'más o menos' - jesteś bliżej dokładnej liczby. Rodzajnik nieokreślony z liczbą zawsze para szacunków."
      },
      {
        id: "num_8",
        question: "El viaje en coche duró _____ seis horas por el tráfico terrible y obras en la carretera.",
        translation: "(Podróż samochodem trwała około sześciu godzin przez okropny ruch i roboty na drodze)",
        options: ["unas", "sobre", "alrededor de", "más o menos"],
        correct: "unas",
        explanation: "'Unas seis horas' to około sześciu. 'Horas' żeński plural = 'unas'. Wszystkie są możliwe para przybliżenia, ale 'unas' jest najpowszechniejsze i najbardziej naturalne w codziennej mowie - proste i bezpośrednie."
      },
      {
        id: "num_9",
        question: "No tengo _____ un euro en el bolsillo, he gastado todo mi dinero en las compras.",
        translation: "(Nie mam nawet jednego euro w kieszeni, wydałem wszystkie moje pieniądze na zakupy)",
        options: ["ni", "no", "nada de", "ningún"],
        correct: "ni",
        explanation: "'Ni' wzmacnia negację z liczbami. 'Ni un euro' = nawet nie jeden euro (zero). To silniejsze niż tylko 'no tengo un euro'. 'Ni' podkreśla całkowity brak - używamy para emfatycznego zaprzeczenia najmniejszej ilości."
      },
      {
        id: "num_10",
        question: "La temperatura ha bajado a _____ cero grados, hace un frío glacial insoportable afuera.",
        translation: "(Temperatura spadła poniżej zera stopni, jest lodowaty nie do zniesienia chłód na zewnątrz)",
        options: ["menos de", "más de", "bajo de", "debajo de"],
        correct: "menos de",
        explanation: "'Menos de cero' to poniżej zera (temperatury ujemne). 'Menos de' para liczb poniżej punktu odniesienia. Przeciwieństwo 'más de' - to konstrukcja para spadku poniżej wartości bazowej. Matematycznie: wartości negatywne."
      },
      {
        id: "num_11",
        question: "Cuesta _____ cien euros pero con el descuento sale por solo ochenta euros finales.",
        translation: "(Kosztuje około sto euro, ale z rabatem wychodzi tylko osiemdziesiąt euro końcowych)",
        options: ["unos", "unas", "sobre", "alrededor"],
        correct: "unos",
        explanation: "'Unos cien euros' to około stu. 'Euros' męskie wymaga 'unos'. Para pieniędzy używamy męskiego rodzaju - 'euro' jest męski w hiszpańskim. Przybliżenie ceny jest powszechne gdy nie znamy dokładnej kwoty."
      },
      {
        id: "num_12",
        question: "He leído _____ la mitad del libro grueso, me quedan todavía unas doscientas páginas más.",
        translation: "(Przeczytałem mniej więcej połowę grubej książki, zostało mi jeszcze około dwieście stron)",
        options: ["más o menos", "más de", "menos de", "casi"],
        correct: "más o menos",
        explanation: "'Más o menos' to mniej więcej (nieścisłe przybliżenie). Możesz być trochę powyżej lub poniżej. Bardziej vague niż 'unas' lub 'casi' - pokazuje że naprawdę szacujesz, nie masz pewności. To najbardziej elastyczne przybliżenie."
      },
      {
        id: "num_13",
        question: "Entre todos los compañeros reunimos _____ doscientos euros para el regalo colectivo de despedida.",
        translation: "(Między wszystkimi kolegami zebraliśmy około dwieście euro na zbiorowy prezent pożegnalny)",
        options: ["unos", "unas", "sobre", "cerca"],
        correct: "unos",
        explanation: "'Unos doscientos' to około dwustu. 'Euros' męskie = 'unos'. Liczby okrągłe (100, 200, 1000) często używane z 'unos' para przybliżenia - pokazuje że to zaokrąglona suma, prawdopodobnie trochę więcej lub mniej."
      },
      {
        id: "num_14",
        question: "La casa tiene _____ de doscientos metros cuadrados de superficie habitable total construida.",
        translation: "(Dom ma ponad dwieście metrów kwadratowych całkowitej zabudowanej powierzchni mieszkalnej)",
        options: ["más", "sobre", "alrededor", "unos"],
        correct: "más",
        explanation: "'Más de' para przekroczenia metrażu. Dom jest WIĘKSZY niż 200m². 'Más de + liczba' to standard para powierzchni, wagi, objętości. Pokazuje że rzeczywista wartość przewyższa podaną liczbę bazową."
      },
      {
        id: "num_15",
        question: "Gano _____ dos mil euros al mes trabajando a tiempo completo en la empresa multinacional.",
        translation: "(Zarabiam około dwa tysiące euro miesięcznie pracując pełen etat w międzynarodowej firmie)",
        options: ["unos", "unas", "sobre", "más de"],
        correct: "unos",
        explanation: "'Unos dos mil' para przybliżonej pensji. Nie chcesz być zbyt precyzyjny o zarobkach - przybliżenie daje prywatność. 'Unos' jest grzeczniejsze niż dokładna kwota - kulturowo nieelegancko być zbyt precyzyjnym o pieniądzach w casualnej konwersacji."
      }
    ]
  },

  emphasis_and_focus: {
    name: "Emfaza i fokus w zdaniu",
    description: "Podkreślaj ważne elementy komunikatu",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "emph_1",
        question: "_____ yo quien preparó toda la cena, no mi hermana como todos pensáis erróneamente.",
        translation: "(To JA przygotowałam całą kolację, nie moja siostra jak wszyscy błędnie myślicie)",
        options: ["Fui", "Era", "Estuve", "He sido"],
        correct: "Fui",
        explanation: "'Fui yo quien' to konstrukcja emfatyczna. Pretérito para podkreślenia twojej roli w konkretnym wydarzeniu. 'Quien' po emfazie łączy z akcją. To sposób na korekturę błędnego przekonania - podkreślasz KTO naprawdę coś zrobił poprzez wyodrębnienie podmiotu."
      },
      {
        id: "emph_2",
        question: "Lo que más me molesta no es el ruido sino _____ de respeto hacia los vecinos.",
        translation: "(To, co najbardziej mnie denerwuje to nie hałas, ale brak szacunku wobec sąsiadów)",
        options: ["la falta", "falta", "estar sin", "no tener"],
        correct: "la falta",
        explanation: "'No es X sino Y' to konstrukcja kontrastowa. Negacja pierwszego, afirmacja drugiego. 'Sino' używamy po negacji para wprowadzenia prawdziwej rzeczy. To korygowanie błędnego wrażenia - pokazujesz prawdziwy problem vs pozorny."
      },
      {
        id: "emph_3",
        question: "_____ mañana mismo voy a empezar la dieta saludable, ya no puedo postponerlo más tiempo.",
        translation: "(Już jutro zacznę zdrową dietę, nie mogę już dłużej tego odkładać)",
        options: ["Mañana", "Ya mañana", "Desde mañana", "Por mañana"],
        correct: "Mañana",
        explanation: "'Mañana mismo' dodaje 'mismo' para emfazy. Sam 'mañana' na początku już jest emfatyczny. 'Mismo' po czasie (mañana mismo, hoy mismo) wzmacnia natychmiastowość - nie kiedyś jutro ale WŁAŚNIE jutro, bez dalszej zwłoki."
      },
      {
        id: "emph_4",
        question: "Fue en Madrid _____ conocí a mi esposa, no en Barcelona como cuenta ella a veces.",
        translation: "(To w Madrycie poznałem moją żonę, nie w Barcelonie jak ona czasem opowiada)",
        options: ["donde", "que", "cuando", "como"],
        correct: "donde",
        explanation: "'Fue en Madrid donde' to emfatyczna konstrukcja miejsca. Wyodrębniasz GDZIE to się stało. 'Fue... donde' ramkuje lokalizację. To jak odpowiedź na pytanie '¿Dónde?' - podkreślasz miejsce jako kluczowy element informacji do zapamiętania."
      },
      {
        id: "emph_5",
        question: "_____ de estudiar es lo más importante para aprobar, no solo leer pasivamente los textos.",
        translation: "(Aktywne studiowanie jest najważniejsze do zdania, nie tylko pasywne czytanie tekstów)",
        options: ["El hecho", "Lo", "Esto", "Eso"],
        correct: "El hecho",
        explanation: "'El hecho de + infinitivo' to nominalizacja akcji. Zamieniasz czasownik w rzeczownik para podkreślenia jako tematu. To formalna konstrukcja - podnosi wagę działania robiąc je podmiotem gramatycznym. Używamy para analitycznego podejścia."
      },
      {
        id: "emph_6",
        question: "A mí _____ me gusta ese tipo de música ruidosa, prefiero algo más tranquilo y relajante.",
        translation: "(Mnie akurat ta głośna muzyka się nie podoba, wolę coś spokojniejszego i relaksującego)",
        options: ["no", "nunca", "jamás", "tampoco"],
        correct: "no",
        explanation: "'A mí no me gusta' podwaja emfazę. 'A mí' już wzmacnia, 'no' neguje. Pozycja 'a mí' na początku wyodrębnia twoją opinię od innych. To kontrast - TOBIE nie podoba się (ale może innym tak). Podwójny marker para maksymalnej jasności stanowiska."
      },
      {
        id: "emph_7",
        question: "_____ tú quien debería disculparse, no yo, porque fuiste tú el que empezó la discusión.",
        translation: "(To TY powinieneś przeprosić, nie ja, bo to ty zacząłeś kłótnię)",
        options: ["Eres", "Estás", "Fuiste", "Has sido"],
        correct: "Eres",
        explanation: "'Eres tú quien' emfatyzuje podmiot moralnej konieczności. Presente para obecnej odpowiedzialności. 'Quien' łączy z akcją obowiązku. To mocne wskazanie odpowiedzialności - separujesz się od winy przypisując ją bezpośrednio drugiej osobie."
      },
      {
        id: "emph_8",
        question: "Jamás en mi vida _____ visto algo tan hermoso como esa puesta de sol sobre el mar.",
        translation: "(Nigdy w życiu nie widziałem czegoś tak pięknego jak ten zachód słońca nad morzem)",
        options: ["he", "había", "hube", "habré"],
        correct: "he",
        explanation: "'Jamás' na początku intensyfikuje negację maksymalnie. NIGDY w życiu to najsilniejsza forma negacji doświadczenia. Pozycja początkowa + 'jamás' (silniejsze niż 'nunca') tworzy absolutną negację - to najpiękniejsza rzecz którą KIEDYKOLWIEK widziałeś."
      },
      {
        id: "emph_9",
        question: "Precisamente _____ eso te lo dije, porque sabía que ibas a tener problemas más tarde.",
        translation: "(Właśnie DLATEGO ci to mówiłem, bo wiedziałem że będziesz miał problemy później)",
        options: ["por", "para", "de", "a"],
        correct: "por",
        explanation: "'Precisamente por eso' to właśnie dlatego (emfatyczna przyczyna). 'Precisamente' wzmacnia 'por eso'. To jak podkreślenie w tekście - pokazujesz że to była DOKŁADNIE przyczyna twojej akcji, nie przypadkowa koincydencja ale świadoma motywacja."
      },
      {
        id: "emph_10",
        question: "Lo que _____ me interesa es tu opinión sincera, no lo que crees que quiero escuchar.",
        translation: "(To, co NAPRAWDĘ mnie interesuje to twoja szczera opinia, nie to, co myślisz że chcę usłyszeć)",
        options: ["realmente", "real", "de verdad", "verdaderamente"],
        correct: "realmente",
        explanation: "'Realmente' po 'lo que' wzmacnia życzenie. NAPRAWDĘ chcesz prawdy, nie kurtuazji. Przysłówek w tej pozycji intensyfikuje znaczenie całego zdania - to nie grzecznościowe pytanie ale autentyczna prośba o szczerość."
      },
      {
        id: "emph_11",
        question: "_____ solo necesito es un poco de tiempo tranquilo para pensar con claridad mental.",
        translation: "(Wszystko, czego potrzebuję to trochę spokojnego czasu, żeby myśleć z umysłową jasnością)",
        options: ["Lo que", "El que", "Eso que", "Esto que"],
        correct: "Lo que",
        explanation: "'Lo que' + czasownik tworzy emfatyczny podmiot. Wyodrębnia to czego potrzebujesz. To wszystko SPROWADZA się do jednej rzeczy - minimalizuje potrzeby do esencji. Konstrukcja para fokusowania na pojedynczym elemencie jako kluczowym."
      },
      {
        id: "emph_12",
        question: "Ni siquiera _____ llamado para avisar que llegaría tarde, eso es muy maleducado.",
        translation: "(Nawet nie zadzwonił, żeby powiadomić że się spóźni, to jest bardzo niegrzeczne)",
        options: ["ha", "había", "hubo", "habría"],
        correct: "ha",
        explanation: "'Ni siquiera' wzmacnia negację do maksimum. NAWET NIE zrobił podstawowej rzeczy. To pokazuje że akcja była poniżej minimum grzeczności - 'ni siquiera' para krytyki braku absolutnej podstawowej uprzejmości. Najniższy próg nie został spełniony."
      },
      {
        id: "emph_13",
        question: "_____ mismo presidente del país habló sobre la importancia de la educación pública universal.",
        translation: "(Sam prezydent kraju mówił o wadze uniwersalnej edukacji publicznej)",
        options: ["El", "Lo", "Le", "La"],
        correct: "El",
        explanation: "'El mismo presidente' używa 'mismo' para podkreślenia rangi osoby. SAM prezydent (nie delegat). 'Mismo' po rodzajniku przed rzeczownikiem wzmacnia ważność podmiotu - to nie ktokolwiek ale właśnie ta znacząca osoba."
      },
      {
        id: "emph_14",
        question: "Sí que _____ cansado después de trabajar doce horas seguidas sin ningún descanso ni pausa.",
        translation: "(TAK, jestem zmęczony po pracy dwanastu godzin z rzędu bez żadnego odpoczynku ani przerwy)",
        options: ["estoy", "soy", "tengo", "he"],
        correct: "estoy",
        explanation: "'Sí que' wzmacnia afirmację. To kontra zaprzeczenia lub wątpliwości - TAK NAPRAWDĘ jestem zmęczony (mimo że może wyglądam OK). 'Que' po 'sí' intensyfikuje - to nie grzecznościowe 'tak' ale emfatyczne potwierdzenie."
      },
      {
        id: "emph_15",
        question: "Hasta _____ abuela sabe usar el smartphone, es muy intuitivo y fácil de manejar.",
        translation: "(Nawet moja babcia umie używać smartphone'a, jest bardzo intuicyjny i łatwy w obsłudze)",
        options: ["mi", "la", "de", "a"],
        correct: "mi",
        explanation: "'Hasta mi abuela' to nawet moja babcia (nieoczekiwany użytkownik). 'Hasta' pokazuje że dotarło do najmniej prawdopodobnej osoby. To pokazuje powszechność - jeśli NAWET babcia potrafi, to znaczy że naprawdę jest łatwe. Użycie skrajnego przykładu para dowodu."
      }
    ]
  },

  causative_constructions: {
    name: "Konstrukcje kauzatywne",
    description: "Wyrażaj że sprawiasz że ktoś coś robi",
    icon: Sparkles, // Changed from Zap to Sparkles to resolve import issue and maintain functionality.
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "caus_1",
        question: "Hice _____ mi hermano pequeño las tareas domésticas porque estaba ocupado con sus estudios.",
        translation: "(Kazałem mojemu małemu bratu zrobić prace domowe, bo byłem zajęty swoją nauką)",
        options: ["que hiciera", "hacer", "haciendo", "hecho"],
        correct: "que hiciera",
        explanation: "'Hacer que + subjuntivo' to sprawić że ktoś coś zrobi. Różne podmioty wymaga 'que' + subjuntivo. To pokazuje że ty spowodowałeś jego akcję - on nie zrobiłby sam, ty go skłoniłeś. Konstrukcja kauzatywna z wpływem na inną osobę."
      },
      {
        id: "caus_2",
        question: "Me corté el pelo en la peluquería del barrio, me lo _____ más corto que la última vez.",
        translation: "(Obciąłem włosy w dzielnicowej fryzjerni, obcięli mi je krócej niż ostatnim razem)",
        options: ["dejaron", "dejó", "corté", "cortaron"],
        correct: "dejaron",
        explanation: "'Dejar + przymiotnik' w kauzatywnym znaczeniu (jak ktoś zostawił coś). Fryzjerzy ZROBILI twoje włosy krótkie. To pokazuje rezultat ich akcji na tobie. Używasz 'dejar' gdy fokus na rezultacie wykonanym przez kogoś na twoją rzecz."
      },
      {
        id: "caus_3",
        question: "El profesor nos hizo _____ el ejercicio tres veces hasta que lo dominamos perfectamente.",
        translation: "(Nauczyciel kazał nam powtórzyć ćwiczenie trzy razy, aż opanowaliśmy je perfekcyjnie)",
        options: ["repetir", "repetimos", "repetiríamos", "que repitiéramos"],
        correct: "repetir",
        explanation: "'Hacer + infinitivo' to najprostsza forma kauzatywna (ten sam czas). Nauczyciel spowodował że powtarzaliśmy. Infinitiv bo czas się zgadza - on kazał (pretérito), wy powtarzaliście (wtedy). Gdy czasy są kompatybilne, infinitiv jest prostszy niż 'que + subjuntivo'."
      },
      {
        id: "caus_4",
        question: "Mandé _____ las paredes del salón principal de un color crema suave y elegante.",
        translation: "(Kazałem pomalować ściany głównego salonu na miękki i elegancki kremowy kolor)",
        options: ["pintar", "que pintaran", "pintando", "pintado"],
        correct: "pintar",
        explanation: "'Mandar + infinitivo' para zlecenia profesjonalnego. Zlecasz malarzom akcję. Ten sam mechanizm co 'hacer' - kauzujesz akcję przez zlecenie. 'Mandar' jest bardziej autorytatywne niż 'hacer' - to rozkaz lub zlecenie formalne, nie casualne spowodowanie."
      },
      {
        id: "caus_5",
        question: "No dejes que los problemas te _____ perder la esperanza en tiempos difíciles de la vida.",
        translation: "(Nie pozwól, żeby problemy sprawiły że stracisz nadzieję w trudnych czasach życia)",
        options: ["hagan", "hacen", "harán", "hicieran"],
        correct: "hagan",
        explanation: "'Dejar que' + subjuntivo to pozwolić żeby (zezwolenie na wpływ). 'Hagan' bo problemy mogą cię spowodować do utraty nadziei. Subjuntivo pokazuje że to potencjalny wpływ który próbujesz zapobiec - nie pozwalasz żeby to się stało."
      },
      {
        id: "caus_6",
        question: "La noticia terrible me _____ llorar inconsolablemente durante horas sin poder parar las lágrimas.",
        translation: "(Straszna wiadomość sprawiła że płakałem niepocieszenie przez godziny nie mogąc powstrzymać łez)",
        options: ["hizo", "hace", "hacía", "ha hecho"],
        correct: "hizo",
        explanation: "'Me hizo llorar' to sprawiło że płakałem (emocjonalna kauzacja). Wiadomość była PRZYCZYNĄ płaczu. Pretérito bo to konkretny moment emocjonalnego przełomu. Kauzatywność emocjonalna - zewnętrzne wydarzenie wywołało reakcję którą nie mogłeś kontrolować."
      },
      {
        id: "caus_7",
        question: "Dejé _____ las llaves del coche encima de la mesa cuando salí corriendo de prisa.",
        translation: "(Zostawiłem klucze samochodu na stole, kiedy wybiegłem w pośpiechu)",
        options: ["las", "que las", "a las", "de las"],
        correct: "las",
        explanation: "'Dejar + obiekt' to zostawić coś (akcja bezpośrednia na obiekt). Proste 'dejar', nie kauzatywne. Zaimek 'las' przed 'llaves' bo klucze są przedmiotem akcji. To nie jest 'dejar que' (pozwolić) ale 'dejar' (pozostawić) - różne użycia tego samego czasownika."
      },
      {
        id: "caus_8",
        question: "El ruido constante de las obras me _____ imposible concentrarme en el trabajo importante.",
        translation: "(Ciągły hałas z budowy uniemożliwia mi skoncentrowanie się na ważnej pracy)",
        options: ["hace", "hacen", "pone", "deja"],
        correct: "hace",
        explanation: "'Hacer + przymiotnik/rzeczownik' para kauzacji stanu. Hałas CZYNI koncentrację niemożliwą. 'Imposible' to predykat - hałas przekształca sytuację w niemożliwą. Różni się od 'hacer + infinitivo' - tu sprawiasz że coś STAJE SIĘ czymś, nie że ktoś coś robi."
      },
      {
        id: "caus_9",
        question: "Voy a _____ revisar el coche en el taller mecánico antes del viaje largo por seguridad.",
        translation: "(Każę sprawdzić samochód w warsztacie mechanicznym przed długą podróżą para bezpieczeństwa)",
        options: ["hacer", "dejar", "mandar", "poner"],
        correct: "hacer",
        explanation: "'Hacer revisar' to kazać sprawdzić (zlecenie usługi). Mechanik sprawdzi na twoje zlecenie. 'Hacer' para zlecania usług profesjonalnych jest standardem - nie robisz sam, płacisz komuś żeby zrobił. To kauzacja przez usługę."
      },
      {
        id: "caus_10",
        question: "La película me _____ mucha risa con sus escenas cómicas y diálogos ingeniosos brillantes.",
        translation: "(Film wywołał u mnie dużo śmiechu swoimi komicznymi scenami i błyskotliwymi dowcipnymi dialogami)",
        options: ["dio", "daba", "da", "ha dado"],
        correct: "dio",
        explanation: "'Dar risa' to wywoływać śmiech (kauzacja emocji). Film SPOWODOWAŁ śmiech. Pretérito bo film się skończył. 'Dar' + emocja (risa, pena, miedo) to idiomatyczna kauzacja - rzecz/osoba wywołuje w tobie uczucie poprzez swoje cechy."
      },
      {
        id: "caus_11",
        question: "No permitas que nadie te _____ sentir inferior sin tu consentimiento personal previo.",
        translation: "(Nie pozwalaj, żeby ktokolwiek sprawił że poczujesz się gorszy bez twojej osobistej uprzedniej zgody)",
        options: ["haga", "hace", "hará", "hiciera"],
        correct: "haga",
        explanation: "'Permitir que' + subjuntivo to pozwalać żeby. Blokujesz możliwość kauzacji - nie dajesz komuś władzy wpływania na ciebie emocjonalnie. Subjuntivo bo to hipotetyczna możliwość którą odrzucasz - nie pozwolisz żeby się stało."
      },
      {
        id: "caus_12",
        question: "Su sonrisa radiante me _____ el día mucho mejor cuando estaba triste y deprimido.",
        translation: "(Jej promienny uśmiech sprawił że mój dzień był dużo lepszy, kiedy byłem smutny i przygnębiony)",
        options: ["hizo", "hacía", "ha hecho", "haría"],
        correct: "hizo",
        explanation: "'Hacer + rzeczownik + przymiotnik' para transformacji. Uśmiech UCZYNIŁ dzień lepszym. Pretérito bo to konkretny moment poprawy nastroju. Kauzacja zmiany stanu - coś zewnętrznego przekształca twoją rzeczywistość emocjonalną."
      },
      {
        id: "caus_13",
        question: "Conseguí _____ mi jefe me diera un día libre extra para el asunto familiar urgente.",
        translation: "(Udało mi się sprawić że mój szef dał mi dodatkowy dzień wolny na pilną sprawę rodzinną)",
        options: ["que", "hacer que", "para que", "de que"],
        correct: "que",
        explanation: "'Conseguir que' + subjuntivo to uzyskać żeby ktoś coś zrobił. 'Que' łączy bezpośrednio - nie potrzebujesz 'hacer'. 'Conseguir' już niesie kauzatywność - osiągnąłeś zamierzony efekt przez perswazję lub prośbę. To sukces wpływu na decyzję innej osoby."
      },
      {
        id: "caus_14",
        question: "La medicina me _____ sentir mareado y con náuseas, voy a consultar al médico sobre efectos.",
        translation: "(Lekarstwo sprawia że czuję się oszołomiony i mam nudności, skonsultuję się z lekarzem o efekty)",
        options: ["hace", "hacen", "deja", "pone"],
        correct: "hace",
        explanation: "'Hacer sentir' to sprawiać że czujesz (kauzacja uczucia). Lekarstwo WYWOŁUJE nudności. To efekt uboczny - substancja chemicznie wpływa na twoje samopoczucie. Kauzacja fizyczna przez substancję - nie emocjonalna ale biologiczna."
      },
      {
        id: "caus_15",
        question: "El maestro de yoga nos _____ hacer ejercicios de respiración profunda antes de cada sesión.",
        translation: "(Mistrz jogi każe nam robić ćwiczenia głębokiego oddychania przed każdą sesją)",
        options: ["hace", "manda", "deja", "pone"],
        correct: "hace",
        explanation: "'Hacer + infinitivo' para instrukcji rutynowych. To nie rozkaz (mandar) ale struktura zajęć - części metody nauczania. 'Hace' jest neutralne - on prowadzi was przez sekwencję, nie rozkazuje autorytarnie. Edukacyjna kauzacja vs autorytatywna."
      }
    ]
  }
};

export default part26Categories;

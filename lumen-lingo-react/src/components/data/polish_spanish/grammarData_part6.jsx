/**
 * POLISH → SPANISH GRAMMAR - PART 6
 * 3 categories, 15 questions each - Expanding grammar mastery
 */

import { GitBranch, Sparkles, Package } from "lucide-react";

export const part6Categories = {
  conditional_sentences: {
    name: "Zdania warunkowe",
    description: "Naucz się wyrażać warunki i możliwości",
    icon: GitBranch,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "cond_1",
        question: "Si _____ tiempo libre mañana, iré contigo al cine a ver esa película nueva.",
        translation: "(Jeśli będę mieć wolny czas jutro, pójdę z tobą do kina zobaczyć ten nowy film)",
        options: ["tengo", "tuviera", "tendré", "tenga"],
        correct: "tengo",
        explanation: "Dla rzeczywistych warunków w przyszłości używamy 'si' + teraźniejszy czas. To pokazuje prawdopodobną sytuację. Możesz mieć czas jutro, więc używamy prostej formy teraźniejszej! 🌟"
      },
      {
        id: "cond_2",
        question: "Si yo _____ rico, viajaría por todo el mundo sin preocupaciones de dinero.",
        translation: "(Gdybym był bogaty, podróżowałbym po całym świecie bez zmartwień o pieniądze)",
        options: ["fuera", "soy", "sea", "era"],
        correct: "fuera",
        explanation: "Dla nierealnych warunków (marzenia) używamy trybu łączącego w formie przeszłej. 'Fuera' to hipotetyczna sytuacja - nie jesteś bogaty teraz, ale wyobrażasz sobie to. To piękny tryb dla marzeń! ✨"
      },
      {
        id: "cond_3",
        question: "Si hubieras estudiado más, _____ aprobado el examen difícil sin problema alguno.",
        translation: "(Gdybyś się więcej uczył, zdałbyś trudny egzamin bez żadnego problemu)",
        options: ["habrías", "aprobarías", "hubieras", "habías"],
        correct: "habrías",
        explanation: "Dla nierealnych sytuacji w przeszłości używamy 'hubiera' + 'habría'. To pokazuje coś, co nie stało się, ale mogło. Lekcja na przyszłość - nauka jest ważna! 📚"
      },
      {
        id: "cond_4",
        question: "Si me _____ la lotería, compraría una casa grande con jardín para mi familia.",
        translation: "(Gdybym wygrał na loterii, kupiłbym duży dom z ogrodem dla mojej rodziny)",
        options: ["tocara", "toca", "tocaría", "tocó"],
        correct: "tocara",
        explanation: "'Tocar la lotería' to wygrać loterię. Używamy trybu łączącego przeszłego, bo to mało prawdopodobne (ale możemy marzyć!). Hiszpanie uwielbiają to wyrażenie dla szczęśliwych momentów! 🍀"
      },
      {
        id: "cond_5",
        question: "Si llueve mañana por la mañana, no _____ a la playa con nuestros amigos.",
        translation: "(Jeśli jutro rano będzie padać, nie pójdziemy na plażę z naszymi przyjaciółmi)",
        options: ["iremos", "vamos", "iríamos", "fuéramos"],
        correct: "iremos",
        explanation: "W realnych warunkach przyszłych odpowiedź jest w czasie przyszłym. Pogoda może się zmienić, więc planujemy elastycznie. Deszcz to częsta wymówka w Hiszpanii! ☔"
      },
      {
        id: "cond_6",
        question: "Si yo fuera tú, _____ las disculpas a tu hermana lo antes posible hoy.",
        translation: "(Gdybym był tobą, przeprosiłbym swoją siostrę jak najszybciej dziś)",
        options: ["pediría", "pido", "pediré", "pedí"],
        correct: "pediría",
        explanation: "'Si yo fuera tú' to klasyczna rada po hiszpańsku! Po trybie łączącym zawsze używamy trybu warunkowego. To grzeczny sposób dawania rad bez bycia nachalnym. Rodzina jest najważniejsza! 💝"
      },
      {
        id: "cond_7",
        question: "Si no _____ tanto tráfico en la ciudad, llegaríamos puntualmente a la reunión.",
        translation: "(Gdyby nie było tyle ruchu w mieście, dotarlibyśmy punktualnie na spotkanie)",
        options: ["hubiera", "hay", "habría", "hubo"],
        correct: "hubiera",
        explanation: "Dla hipotetycznych sytuacji teraz używamy 'hubiera' (tryb łączący). Ruch w miastach hiszpańskich może być szalony! To uniwersalne narzekanie, które wszyscy rozumieją. 🚗"
      },
      {
        id: "cond_8",
        question: "Si comes demasiado dulce antes de dormir, te _____ dolor de estómago por la noche.",
        translation: "(Jeśli zjesz za dużo słodyczy przed snem, będzie cię boleć brzuch w nocy)",
        options: ["dolerá", "duele", "dolería", "dolió"],
        correct: "dolerá",
        explanation: "Dla realnych konsekwencji używamy przyszłego czasu. To jak rada matki - jeśli zrobisz A, stanie się B. Proste, logiczne i zawsze prawdziwe! Zdrowie jest ważne. 🍬"
      },
      {
        id: "cond_9",
        question: "Si tuviéramos más dinero ahorrado, _____ de vacaciones a las islas Canarias este verano.",
        translation: "(Gdybyśmy mieli więcej zaoszczędzonych pieniędzy, pojechalibyśmy na wakacje na Wyspy Kanaryjskie tego lata)",
        options: ["iríamos", "vamos", "iremos", "fuimos"],
        correct: "iríamos",
        explanation: "Marzenie o wakacjach! 'Tuviéramos' (gdybyśmy mieli) wymaga 'iríamos' (pojechalibyśmy). To piękny przykład marzonego planu. Wyspy Kanaryjskie to raj Hiszpanów! 🏝️"
      },
      {
        id: "cond_10",
        question: "Si me invitas a tu fiesta de cumpleaños, te _____ un regalo muy especial.",
        translation: "(Jeśli zaprosisz mnie na swoją imprezę urodzinową, przyniosę ci bardzo specjalny prezent)",
        options: ["traeré", "traigo", "traería", "trajera"],
        correct: "traeré",
        explanation: "Realna obietnica na przyszłość! 'Si' + teraźniejszy, odpowiedź w przyszłym. To pokazuje, że naprawdę chcesz iść i jesteś gotowy do szczodrości. Urodziny to święto! 🎁"
      },
      {
        id: "cond_11",
        question: "Si no fuera por tu ayuda valiosa, nunca _____ terminado este proyecto a tiempo.",
        translation: "(Gdyby nie twoja cenna pomoc, nigdy nie ukończyłbym tego projektu na czas)",
        options: ["habría", "hubiera", "terminaría", "terminé"],
        correct: "habría",
        explanation: "Wyrażanie wdzięczności za przeszłą pomoc. 'Si no fuera por' wymaga 'habría' dla pokazania, co by się stało bez tej pomocy. To wzruszający sposób podziękowania! 🙏"
      },
      {
        id: "cond_12",
        question: "Si ella _____ más responsable con sus tareas, sus padres estarían más contentos.",
        translation: "(Gdyby ona była bardziej odpowiedzialna ze swoimi zadaniami, jej rodzice byliby bardziej zadowoleni)",
        options: ["fuera", "es", "será", "sea"],
        correct: "fuera",
        explanation: "Krytyka lub obserwacja zachowania. Tryb łączący pokazuje, że to nie jest prawda teraz, ale mogłoby być. To delikatny sposób sugerowania poprawy. Rodzice zawsze się martwią! 👨‍👩‍👧"
      },
      {
        id: "cond_13",
        question: "Si hace buen tiempo este fin de semana, _____ una barbacoa en el jardín.",
        translation: "(Jeśli będzie dobra pogoda tego weekendu, zrobimy grilla w ogrodzie)",
        options: ["haremos", "hacemos", "haríamos", "hiciéramos"],
        correct: "haremos",
        explanation: "Plan zależny od pogody! To typowa hiszpańska sytuacja - grille są częścią kultury. Używamy przyszłego, bo pogoda jest nieprzewidywalna, ale mamy nadzieję! 🌞"
      },
      {
        id: "cond_14",
        question: "Si supieras la verdad completa, _____ toda la situación de manera diferente.",
        translation: "(Gdybyś znał całą prawdę, zrozumiałbyś całą sytuację w inny sposób)",
        options: ["entenderías", "entiendes", "entenderás", "entendieras"],
        correct: "entenderías",
        explanation: "Hipoteza o wiedzy i zrozumieniu. Tryb łączący 'supieras' z warunkowym 'entenderías' pokazuje, że prawda jest ukryta. To jak zagadka - gdybyś wiedział więcej, wszystko by się zmieniło! 🤔"
      },
      {
        id: "cond_15",
        question: "Si no te importa el ruido de la ciudad, este apartamento céntrico te _____ perfecto.",
        translation: "(Jeśli nie przeszkadza ci miejski hałas, to centralne mieszkanie będzie dla ciebie idealne)",
        options: ["vendrá", "viene", "vendría", "viniera"],
        correct: "vendrá",
        explanation: "'Venir bien/mal' to być odpowiednim/nieodpowiednim. Realna rada o mieszkaniu używa przyszłego czasu. W Hiszpanii centrum zawsze jest głośne, ale pełne życia! 🏙️"
      }
    ]
  },

  diminutives_augmentatives: {
    name: "Zdrobnienia i zgrubienia",
    description: "Dodaj czułości lub wielkości do swoich słów",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "dim_1",
        question: "Mi abuela siempre me prepara un _____ de chocolate caliente cuando la visito.",
        translation: "(Moja babcia zawsze przygotowuje mi małą filiżankę gorącej czekolady, kiedy ją odwiedzam)",
        options: ["chocolatito", "chocolatazo", "chocolate", "chocolatón"],
        correct: "chocolatito",
        explanation: "Końcówka '-ito' tworzy zdrobnienie, dodając czułości! To nie tylko o rozmiarze - to o miłości babci. W Hiszpanii zdrobnienia są wszędzie, szczególnie w rodzinie. To jak przytulenie słowne! 🥰"
      },
      {
        id: "dim_2",
        question: "¡Qué _____ más bonito tienes! ¿Dónde lo compraste? Me encanta su estilo único.",
        translation: "(Jaki ładny domek masz! Gdzie go kupiłeś? Uwielbiam jego unikalny styl)",
        options: ["casita", "casota", "casaza", "casón"],
        correct: "casita",
        explanation: "'-ita' dla żeńskich zdrobnień! 'Casita' może być mały dom lub słodki dom - Hiszpanie używają tego dla wyrażenia podziwu. To nie zawsze o rozmiarze, często o pięknie! 🏡"
      },
      {
        id: "dim_3",
        question: "Espera un _____, ahora mismo vuelvo contigo para ayudarte con tu problema.",
        translation: "(Poczekaj chwileczkę, zaraz wracam do ciebie, żeby pomóc ci z twoim problemem)",
        options: ["momentito", "momentazo", "momento", "momentón"],
        correct: "momentito",
        explanation: "'Un momentito' to 'małą chwileczkę' - zdrobnienie czyni prośbę bardziej uprzejmą! W obsłudze klienta w Hiszpanii to standardowe, grzeczne wyrażenie. Cierpliwość jest cnotą! ⏰"
      },
      {
        id: "dim_4",
        question: "El niño pequeño llevaba un _____ azul muy lindo para protegerse del sol.",
        translation: "(Mały chłopiec nosił bardzo słodki niebieski kapeluszyk, żeby chronić się przed słońcem)",
        options: ["sombrerito", "sombrerazo", "sombrerón", "sombrero"],
        correct: "sombrerito",
        explanation: "'Sombrerito' to mały kapelusz! Dla dzieci zawsze używamy zdrobnień - brzmi to słodko i czule. W Hiszpanii słońce jest silne, więc kapelusze są ważne dla małych! ☀️"
      },
      {
        id: "dim_5",
        question: "Voy a tomar solo un _____ de café porque ya es tarde y no quiero desvelarme.",
        translation: "(Wezmę tylko małą kawkę, bo jest już późno i nie chcę nie spać)",
        options: ["cafecito", "cafetazo", "café", "cafetón"],
        correct: "cafecito",
        explanation: "'Cafecito' to miła, mała kawa! Zdrobnienie pokazuje, że to nie pełna filiżanka. W Ameryce Łacińskiej 'cafecito' jest także zaproszeniem do rozmowy. Kawa łączy ludzi! ☕"
      },
      {
        id: "dim_6",
        question: "¡Menudo _____ te has comprado! Debe haber sido muy caro ese coche tan grande.",
        translation: "(Co za wielki samochód kupiłeś! To musiało być bardzo drogie, ten tak duży wóz)",
        options: ["cochazo", "cochecito", "coche", "cochito"],
        correct: "cochazo",
        explanation: "'-azo' to zgrubienie wyrażające podziw lub wielkość! 'Cochazo' to imponujący samochód. To nie negatywne - Hiszpanie używają tego dla pokazania szacunku do czegoś dużego i pięknego! 🚗"
      },
      {
        id: "dim_7",
        question: "Dame un _____ de agua fresca, por favor, tengo mucha sed después de correr.",
        translation: "(Daj mi małą szklankę świeżej wody proszę, bardzo chcę pić po bieganiu)",
        options: ["vasito", "vasazo", "vasón", "vaso"],
        correct: "vasito",
        explanation: "'Vasito' to mała szklanka wody. Zdrobnienie czyni prośbę skromniejszą i bardziej grzeczną. W Hiszpanii prosić o rzeczy ze zdrobnieniem brzmi uprzejmiej! 💧"
      },
      {
        id: "dim_8",
        question: "Mi hijo se comió un _____ de helado enorme que le provocó dolor de cabeza.",
        translation: "(Mój syn zjadł ogromne lody, które spowodowały mu ból głowy)",
        options: ["heladazo", "heladito", "helado", "heladón"],
        correct: "heladazo",
        explanation: "'-azo' pokazuje nadmiar! 'Heladazo' to ogromna porcja lodów. To ostrzeżenie - za dużo dobrego może być złe. Typowe doświadczenie dzieciństwa w gorące hiszpańskie lato! 🍦"
      },
      {
        id: "dim_9",
        question: "¡Qué _____ más precioso! Me encanta cómo te queda ese bolso pequeño y elegante.",
        translation: "(Jaka piękna torebeczka! Uwielbiam, jak ci pasuje ta mała i elegancka torebka)",
        options: ["bolsito", "bolsazo", "bolsón", "bolsa"],
        correct: "bolsito",
        explanation: "'Bolsito' to mała, słodka torebka! Zdrobnienie dodaje podziwu i czułości. W modzie hiszpańskiej zdrobnienia są komplimentami - pokazują, że coś jest nie tylko małe, ale także ładne! 👜"
      },
      {
        id: "dim_10",
        question: "Vamos a dar un _____ por el parque para disfrutar de la tarde soleada.",
        translation: "(Przejdziemy się spacerkiem po parku, żeby cieszyć się słonecznym popołudniem)",
        options: ["paseíto", "paseo", "pasotazo", "paseón"],
        correct: "paseíto",
        explanation: "'Paseíto' to krótki, przyjemny spacer! Zdrobnienie sugeruje, że będzie to relaksujące i nie za długie. Hiszpanie uwielbiają pasear - to część ich kultury życia! 🚶"
      },
      {
        id: "dim_11",
        question: "El bebé tiene unos _____ muy gorditos que a todos les encanta apretar suavemente.",
        translation: "(Niemowlę ma bardzo pulchne policzki, które wszyscy uwielbiają delikatnie ściskać)",
        options: ["cachetitos", "cachetazos", "cachetes", "cachetones"],
        correct: "cachetitos",
        explanation: "'Cachetitos' to słodkie małe policzki! Dla dzieci zawsze zdrobnienia - to wyraża czułość. W kulturze hiszpańskiej policzki niemowląt są nieodparte do całowania! 👶"
      },
      {
        id: "dim_12",
        question: "¡Menuda _____ que te has hecho en la frente! Deberías ir al médico urgentemente.",
        translation: "(Co za wielka rana zrobiłeś sobie na czole! Powinieneś pilnie pójść do lekarza)",
        options: ["heridaza", "heridita", "herida", "heridón"],
        correct: "heridaza",
        explanation: "'-aza' dla czegoś dużego i poważnego! 'Heridaza' to poważna rana - zgrubienie dodaje niepokoju. To nie zwykła zadrapanka! Bezpieczeństwo przede wszystkim. 🏥"
      },
      {
        id: "dim_13",
        question: "Mi gata tuvo cinco _____ muy adorables que ya están buscando hogar amoroso.",
        translation: "(Moja kotka miała pięć bardzo uroczych kociątek, które już szukają kochającego domu)",
        options: ["gatitos", "gatazos", "gatones", "gatos"],
        correct: "gatitos",
        explanation: "'Gatitos' to małe kotki! To jedno z najsłodszych hiszpańskich słów. Dla zwierząt młodych zawsze zdrobnienia - pokazuje to, że są mali i potrzebują opieki. Aww! 🐱"
      },
      {
        id: "dim_14",
        question: "Necesito comprar unos _____ nuevos porque los viejos ya están muy desgastados.",
        translation: "(Muszę kupić nowe buciki, bo stare są już bardzo zużyte)",
        options: ["zapatitos", "zapatazos", "zapatones", "zapatos"],
        correct: "zapatitos",
        explanation: "'Zapatitos' to małe buciki! Często używane dla butów dziecięcych lub delikatnych butów damskich. Zdrobnienie dodaje uroku - to nie tylko buty, to coś specjalnego! 👟"
      },
      {
        id: "dim_15",
        question: "Hizo un _____ tremendo cuando se cayó, se escuchó en toda la casa.",
        translation: "(Zrobił ogromny huk, kiedy spadł, słychać było w całym domu)",
        options: ["ruidazo", "ruidito", "ruido", "ruidón"],
        correct: "ruidazo",
        explanation: "'-azo' dla głośnego dźwięku! 'Ruidazo' to bardzo głośny hałas. Zgrubienia mogą wyrażać intensywność - ten hałas nie był zwykły, był dramatyczny! Wszyscy przybiegli sprawdzić! 🔊"
      }
    ]
  },

  possessive_pronouns: {
    name: "Zaimki dzierżawcze",
    description: "Mów o tym, co należy do ciebie i innych",
    icon: Package,
    color: "from-teal-500 to-cyan-600",
    level: "beginner",
    questions: [
      {
        id: "poss_1",
        question: "Este libro interesante es _____, me lo regaló mi mejor amiga el año pasado.",
        translation: "(Ta ciekawa książka jest moja, podarowała mi ją moja najlepsza przyjaciółka w zeszłym roku)",
        options: ["mío", "mi", "míos", "mí"],
        correct: "mío",
        explanation: "'Mío' to 'mój' po czasowniku 'ser'! To forma samodzielna, która zastępuje rzeczownik. 'Mi' używamy przed rzeczownikiem, ale 'mío' po czasowniku. To jak właściciel pokazujący swoją własność! 📖"
      },
      {
        id: "poss_2",
        question: "¿Son _____ estos zapatos deportivos que encontré en la entrada de la casa?",
        translation: "(Czy te sportowe buty, które znalazłem przy wejściu do domu, są twoje?)",
        options: ["tuyos", "tu", "tuyas", "tus"],
        correct: "tuyos",
        explanation: "'Tuyos' to liczba mnoga 'twoje' dla rzeczy męskich! Zgadzamy się z liczbą i rodzajem. 'Zapatos' to męska liczba mnoga, więc używamy 'tuyos'. To jak pytanie detektywa! 👟"
      },
      {
        id: "poss_3",
        question: "Esa mochila roja no es tuya, es _____ de mi hermana pequeña que va al colegio.",
        translation: "(Ten czerwony plecak nie jest twój, jest mojej małej siostry, która chodzi do szkoły)",
        options: ["de", "a", "por", "para"],
        correct: "de",
        explanation: "'Es de' to najprostszy sposób pokazania własności! 'Es de + osoba' mówi, do kogo coś należy. To jak etykieta z imieniem. Proste i jasne dla wszystkich! 🎒"
      },
      {
        id: "poss_4",
        question: "Mi coche está en el taller, así que hoy uso el _____ de mi padre para ir al trabajo.",
        translation: "(Mój samochód jest w warsztacie, więc dziś używam samochodu mojego ojca, żeby jechać do pracy)",
        options: ["suyo", "su", "tuyo", "mío"],
        correct: "suyo",
        explanation: "'Suyo' może znaczyć jego, jej lub Pana/Pani! Tutaj to samochód ojca. 'El suyo' zastępuje 'el coche de él'. To wygodny sposób unikania powtórzeń! 🚗"
      },
      {
        id: "poss_5",
        question: "Estos juguetes coloridos son _____ de los niños que están jugando en el jardín.",
        translation: "(Te kolorowe zabawki są dzieci, które bawią się w ogrodzie)",
        options: ["de", "a", "por", "para"],
        correct: "de",
        explanation: "Znowu 'de' dla pokazania własności! To najpewniejszy sposób w hiszpańskim. 'Son de los niños' jest jaśniejsze niż 'son suyos'. Dla dzieci klarowność jest najważniejsza! 🧸"
      },
      {
        id: "poss_6",
        question: "Tu opinión es importante, pero _____ es completamente diferente sobre este tema delicado.",
        translation: "(Twoja opinia jest ważna, ale moja jest zupełnie inna na ten delikatny temat)",
        options: ["la mía", "mi", "mío", "mí"],
        correct: "la mía",
        explanation: "'La mía' to 'moja' z rodzajnikiem! Rodzajnik zgadza się z rzeczownikiem (la opinión). To jak podkreślenie - MOJA opinia jest inna. Pokazuje kontrast! 💭"
      },
      {
        id: "poss_7",
        question: "¿De quién es esta bicicleta verde? - Es _____, la compré la semana pasada en la tienda.",
        translation: "(Czyj jest ten zielony rower? - Jest mój, kupiłem go w zeszłym tygodniu w sklepie)",
        options: ["mía", "mi", "mío", "míos"],
        correct: "mía",
        explanation: "'Bicicleta' jest żeńska, więc używamy 'mía'! Zawsze zgadzamy rodzaj z rzeczownikiem. To jak dopasowywanie kolorów - muszą pasować! Nowy rower to wielka radość! 🚲"
      },
      {
        id: "poss_8",
        question: "Nuestros hijos van a un colegio privado, pero _____ van a uno público muy bueno.",
        translation: "(Nasze dzieci chodzą do prywatnej szkoły, ale wasze chodzą do bardzo dobrej publicznej)",
        options: ["los vuestros", "vuestros", "los tuyos", "tus"],
        correct: "los vuestros",
        explanation: "'Los vuestros' to 'wasi' (wasze dzieci) w Hiszpanii! W Ameryce Łacińskiej mówią 'los suyos'. Rodzajnik jest potrzebny, bo zastępujemy rzeczownik. To pokazuje różnicę między rodzinami! 👨‍👩‍👧‍👦"
      },
      {
        id: "poss_9",
        question: "Esta casa grande es _____, la heredé de mis abuelos que vivieron aquí toda la vida.",
        translation: "(Ten duży dom jest mój, odziedziczyłem go po dziadkach, którzy mieszkali tu całe życie)",
        options: ["mía", "mi", "mío", "de mí"],
        correct: "mía",
        explanation: "'Casa' jest żeńska, więc 'mía'! Dziedziczenie domu to emocjonalny moment. Zaimek dzierżawczy pokazuje dumę i więź z przeszłością. Domy rodzinne są pełne wspomnień! 🏠"
      },
      {
        id: "poss_10",
        question: "Mis llaves están aquí, pero ¿dónde están _____? Las necesitamos para abrir el garaje.",
        translation: "(Moje klucze są tutaj, ale gdzie są twoje? Potrzebujemy ich, żeby otworzyć garaż)",
        options: ["las tuyas", "tus", "las tus", "tuyas"],
        correct: "las tuyas",
        explanation: "'Las tuyas' to 'twoje' dla rzeczy żeńskich liczby mnogiej! 'Llaves' są żeńskie, więc 'las tuyas'. Rodzajnik jest obowiązkowy po czasowniku. Zgubione klucze to uniwersalny problem! 🔑"
      },
      {
        id: "poss_11",
        question: "Su perro es muy grande y juguetón, el _____ es pequeño pero muy cariñoso con todos.",
        translation: "(Jej pies jest bardzo duży i rozbrykany, mój jest mały, ale bardzo czuły ze wszystkimi)",
        options: ["mío", "mi", "míos", "de mí"],
        correct: "mío",
        explanation: "'El mío' to 'mój' z rodzajnikiem męskim! 'El perro mío' brzmi źle - zawsze mówimy 'el mío'. To jak skrót - wszyscy wiedzą, że mówimy o psie! 🐕"
      },
      {
        id: "poss_12",
        question: "Estos libros nuevos son _____ y aquellos viejos son de la biblioteca municipal.",
        translation: "(Te nowe książki są moje, a tamte stare są z biblioteki miejskiej)",
        options: ["míos", "mi", "mío", "de mí"],
        correct: "míos",
        explanation: "'Míos' to liczba mnoga! 'Libros' to męska liczba mnoga, więc używamy 'míos'. Zawsze zgadzamy się z rzeczownikiem. To jak chór - wszyscy muszą śpiewać w harmonii! 📚"
      },
      {
        id: "poss_13",
        question: "Tu hermana es muy simpática, pero _____ es todavía más divertida y extrovertida.",
        translation: "(Twoja siostra jest bardzo sympatyczna, ale moja jest jeszcze bardziej zabawna i ekstrawertyczna)",
        options: ["la mía", "mi", "mía", "mío"],
        correct: "la mía",
        explanation: "'La mía' używamy po 'ser' z rodzajnikiem! To porównanie między siostrami. Rodzajnik 'la' zgadza się z 'hermana'. To jak zawody popularności między rodzeństwem! 👯"
      },
      {
        id: "poss_14",
        question: "¿Son _____ estas maletas pesadas que están junto a la puerta de salida?",
        translation: "(Czy te ciężkie walizki przy drzwiach wyjściowych są wasze?)",
        options: ["suyas", "su", "sus", "de ustedes"],
        correct: "suyas",
        explanation: "'Suyas' to forma uprzejma dla 'wasze' (Państwa)! W pytaniach zawsze używamy formy samodzielnej. 'Maletas' są żeńskie, więc 'suyas'. Grzeczność w podróży jest ważna! 🧳"
      },
      {
        id: "poss_15",
        question: "Nuestro equipo ganó el partido, y el _____ perdió por cinco goles de diferencia.",
        translation: "(Nasza drużyna wygrała mecz, a wasza przegrała różnicą pięciu bramek)",
        options: ["vuestro", "vuestra", "vuestros", "tuyo"],
        correct: "vuestro",
        explanation: "'El vuestro' to 'wasza drużyna' (forma hiszpańska). 'Equipo' jest męski, więc 'vuestro'. W Ameryce Łacińskiej powiedzieliby 'el suyo'. Piłka nożna tworzy pasje i rywalizację! ⚽"
      }
    ]
  }
};

export default part6Categories;
/**
 * POLISH → SPANISH GRAMMAR - PART 23
 * 3 categories, 15 questions each - Final mastery topics
 */

import { Layers, MessageCircle, Activity } from "lucide-react";

export const part23Categories = {
  aspectual_differences: {
    name: "Różnice aspektowe",
    description: "Rozróżniaj akcje zakończone i ciągłe",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "asp_1",
        question: "Ayer _____ toda la tarde viendo series en Netflix sin hacer absolutamente nada productivo.",
        translation: "(Wczoraj spędziłem całe popołudnie oglądając seriale na Netflix nie robiąc absolutnie nic produktywnego)",
        options: ["estuve", "estaba", "he estado", "fui"],
        correct: "estuve",
        explanation: "'Estuve + gerundio' pokazuje zamkniętą akcję w przeszłości. Całe popołudnie to określony czas - pretérito bo akcja się zakończyła. 'Estuve viendo' = oglądałem (przez dokładny okres)."
      },
      {
        id: "asp_2",
        question: "Cuando era niño, _____ mucho tiempo jugando videojuegos con mis amigos del barrio cercano.",
        translation: "(Kiedy byłem dzieckiem, spędzałem dużo czasu grając w gry wideo z moimi przyjaciółmi z bliskiej dzielnicy)",
        options: ["pasaba", "pasé", "he pasado", "estaba pasando"],
        correct: "pasaba",
        explanation: "'Pasaba' (imperfecto) dla nawyków dzieciństwa. To rutyna która się powtarzała - nie jedna konkretna sesja. Imperfecto pokazuje powtarzalność bez określenia początku czy końca."
      },
      {
        id: "asp_3",
        question: "_____ tres horas preparando la cena cuando finalmente llegaron los invitados con retraso.",
        translation: "(Spędziłem trzy godziny przygotowując kolację, kiedy w końcu przybyli spóźnieni goście)",
        options: ["Llevaba", "Llevé", "He llevado", "Estaba llevando"],
        correct: "Llevaba",
        explanation: "'Llevar + gerundio' w imperfecto pokazuje trwającą akcję przerywaną. Gotowałeś JUŻ trzy godziny gdy przyszli. Imperfecto bo to tło dla ich przybycia."
      },
      {
        id: "asp_4",
        question: "Ya _____ leído ese libro famoso tres veces y cada vez descubro nuevos detalles interesantes.",
        translation: "(Już przeczytałem tę słynną książkę trzy razy i za każdym razem odkrywam nowe ciekawe szczegóły)",
        options: ["he", "había", "hube", "leo"],
        correct: "he",
        explanation: "'He leído' (present perfect) dla doświadczenia życiowego. Przeczytałeś i to doświadczenie jest aktualnie relevantne. Trzy razy to doświadczenie akumulowane do teraz."
      },
      {
        id: "asp_5",
        question: "El profesor _____ explicando la lección cuando sonó la alarma de incendio y todos evacuamos.",
        translation: "(Nauczyciel wyjaśniał lekcję, kiedy zabrzmiał alarm pożarowy i wszyscy ewakuowaliśmy się)",
        options: ["estaba", "estuvo", "ha estado", "fue"],
        correct: "estaba",
        explanation: "'Estaba explicando' to był w trakcie wyjaśniania. Imperfecto continuo dla akcji przerwanej. To tło dla alarmu - wyjaśnianie trwało gdy alarm przerwał."
      },
      {
        id: "asp_6",
        question: "¿Cuánto tiempo _____ esperando aquí en la parada del autobús bajo el sol caliente?",
        translation: "(Jak długo czekasz tutaj na przystanku autobusowym pod gorącym słońcem?)",
        options: ["llevas", "estás", "has estado", "eres"],
        correct: "llevas",
        explanation: "'Llevar + gerundio' pokazuje akumulację czasu. '¿Cuánto tiempo llevas?' pyta o czas od początku do teraz. To jak licznik - mierzy czas trwania akcji do obecnej chwili."
      },
      {
        id: "asp_7",
        question: "Cuando llegué a la oficina, mis compañeros ya _____ trabajando desde las siete de la mañana.",
        translation: "(Kiedy dotarłem do biura, moi koledzy już pracowali od siódmej rano)",
        options: ["estaban", "estuvieron", "han estado", "fueron"],
        correct: "estaban",
        explanation: "'Estaban trabajando' to byli w trakcie pracy. Imperfecto continuo dla akcji w toku w momencie twojego przybycia. To sytuacja którą zastałeś - tło dla twojego wejścia."
      },
      {
        id: "asp_8",
        question: "He _____ viviendo en esta ciudad durante cinco años y todavía descubro lugares nuevos constantemente.",
        translation: "(Mieszkam w tym mieście od pięciu lat i wciąż ciągle odkrywam nowe miejsca)",
        options: ["estado", "sido", "ido", "venido"],
        correct: "estado",
        explanation: "'He estado viviendo' to mieszkam od (z kontynuacją). Present perfect continuo łączy przeszłość z teraz. Akcja rozpoczęta wcześniej trwa nadal - 'estado' to participio od 'estar'."
      },
      {
        id: "asp_9",
        question: "Anoche _____ estudiando hasta las dos de la madrugada para el examen importante de hoy.",
        translation: "(Wczoraj w nocy studiowałem do drugiej w nocy na dzisiejszy ważny egzamin)",
        options: ["estuve", "estaba", "he estado", "fui"],
        correct: "estuve",
        explanation: "'Estuve estudiando' to studiowałem (zakończony okres). 'Hasta las dos' określa koniec - pretérito bo akcja się zamknęła o określonej godzinie. Sesja nauki miała jasny koniec."
      },
      {
        id: "asp_10",
        question: "Siempre _____ querido visitar Japón desde que era pequeño y veía documentales sobre su cultura.",
        translation: "(Zawsze chciałem odwiedzić Japonię odkąd byłem mały i oglądałem dokumenty o jej kulturze)",
        options: ["he", "había", "hube", "fui"],
        correct: "he",
        explanation: "'Siempre he querido' to zawsze chciałem (do teraz). Present perfect dla pragnienia trwającego całe życie. 'Siempre' + present perfect pokazuje ciągłość od przeszłości do teraźniejszości."
      },
      {
        id: "asp_11",
        question: "Llevamos tres días _____ sin parar en este proyecto urgente para el cliente importante extranjero.",
        translation: "(Spędzamy trzy dni pracując bez przerwy nad tym pilnym projektem dla ważnego zagranicznego klienta)",
        options: ["trabajando", "trabajar", "trabajado", "trabajamos"],
        correct: "trabajando",
        explanation: "'Llevar + tiempo + gerundio' to robić coś od okresu. Pokazuje akumulację wysiłku. Gerundio jest obowiązkowe - 'llevamos trabajando' = pracujemy już od trzech dni nieprzerwanie."
      },
      {
        id: "asp_12",
        question: "¿Desde cuándo _____ español? Tu acento es casi perfecto como el de un nativo auténtico.",
        translation: "(Od kiedy uczysz się hiszpańskiego? Twój akcent jest prawie perfekcyjny jak natywnego autentycznego)",
        options: ["estudias", "has estudiado", "estás estudiando", "llevas estudiando"],
        correct: "estudias",
        explanation: "'¿Desde cuándo estudias?' pyta o początek trwającej akcji. Presente dla akcji która trwa do teraz. Proste presente bo pytamy o moment rozpoczęcia, nie długość trwania."
      },
      {
        id: "asp_13",
        question: "Acababa de _____ cuando llamaste por teléfono, el timing fue perfecto y coincidente.",
        translation: "(Właśnie skończyłem jeść, kiedy zadzwoniłeś, timing był perfekcyjny i zbieżny)",
        options: ["comer", "comiendo", "comido", "como"],
        correct: "comer",
        explanation: "'Acabar de + infinitivo' to właśnie coś zrobić. Pokazuje akcję tuż przed innym momentem. Zawsze infinitiv po 'acabar de' - konstrukcja dla bezpośredniej przeszłości."
      },
      {
        id: "asp_14",
        question: "Mi hermana _____ cantando en el coro de la iglesia desde hace diez años sin interrupción.",
        translation: "(Moja siostra śpiewa w chórze kościelnym od dziesięciu lat bez przerwy)",
        options: ["lleva", "está", "ha estado", "sigue"],
        correct: "lleva",
        explanation: "'Llevar + gerundio' to robić od czasu. Podkreśla długość zaangażowania. 'Desde hace' wzmacnia długość trwania - kombinacja pokazuje imponującą ciągłość."
      },
      {
        id: "asp_15",
        question: "Cuando me llamaste ayer, _____ tomando un café tranquilo en la terraza soleada del café.",
        translation: "(Kiedy wczoraj do mnie zadzwoniłeś, piłem spokojną kawę na słonecznym tarasie kawiarni)",
        options: ["estaba", "estuve", "he estado", "fui"],
        correct: "estaba",
        explanation: "'Estaba tomando' dla akcji w toku przerywanej. Piłeś kawę (tło) gdy telefon zadzwonił (akcja). Imperfecto continuo dla równoległej aktywności - to co robiłeś w momencie przerwania."
      }
    ]
  },

  discourse_markers: {
    name: "Markery dyskursu",
    description: "Organizuj swoją wypowiedź logicznie",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "disc_1",
        question: "_____ primer lugar, quiero agradecer a todos por venir a esta reunión importante de emergencia.",
        translation: "(Przede wszystkim chcę podziękować wszystkim za przyjście na to ważne spotkanie alarmowe)",
        options: ["En", "Por", "De", "A"],
        correct: "En",
        explanation: "'En primer lugar' to po pierwsze (rozpoczęcie wyliczenia). To marker sekwencji dla organizowania argumentów. Zawsze 'en primer lugar', nigdy 'por' ani 'de'."
      },
      {
        id: "disc_2",
        question: "Me gusta viajar; _____ embargo, este año no tengo suficiente dinero ahorrado para vacaciones.",
        translation: "(Lubię podróżować; jednakże w tym roku nie mam wystarczająco zaoszczędzonych pieniędzy na wakacje)",
        options: ["sin", "con", "no", "ni"],
        correct: "sin",
        explanation: "'Sin embargo' to jednak, jednakże. Pokazuje kontrast między zdaniami. Zawsze 'sin embargo' (dwa słowa) - to formalny marker kontrastu dla pisma i mowy."
      },
      {
        id: "disc_3",
        question: "Estudié mucho para el examen; _____ lo tanto, espero obtener una calificación excelente alta.",
        translation: "(Dużo się uczyłem na egzamin; dlatego też spodziewam się otrzymać doskonałą wysoką ocenę)",
        options: ["por", "para", "con", "sin"],
        correct: "por",
        explanation: "'Por lo tanto' to dlatego też (konkluzja logiczna). Pokazuje skutek poprzedniego zdania. To marker przyczynowo-skutkowy - łączy przyczynę z jej naturalną konsekwencją."
      },
      {
        id: "disc_4",
        question: "_____ un lado me gustaría aceptar el trabajo; por otro, significaría mudarme lejos de familia.",
        translation: "(Z jednej strony chciałbym przyjąć pracę; z drugiej oznaczałoby to przeprowadzkę daleko od rodziny)",
        options: ["Por", "De", "En", "A"],
        correct: "Por",
        explanation: "'Por un lado... por otro' to z jednej strony... z drugiej. Prezentuje dwie perspektywy. To marker dla pokazania dylematu - balansowanie między dwiema opcjami."
      },
      {
        id: "disc_5",
        question: "No vine a la reunión importante; _____ es más, ni siquiera sabía que estaba programada para hoy.",
        translation: "(Nie przyszedłem na ważne spotkanie; co więcej, nawet nie wiedziałem, że było zaplanowane na dziś)",
        options: ["más", "es", "aún", "todavía"],
        correct: "más",
        explanation: "'Es más' to co więcej (dodanie informacji wzmacniającej). Intensyfikuje poprzednie stwierdzenie. To marker eskalacji - druga informacja jest silniejsza niż pierwsza."
      },
      {
        id: "disc_6",
        question: "_____ conclusión, podemos afirmar que el proyecto ha sido un éxito total para la empresa.",
        translation: "(Podsumowując możemy stwierdzić, że projekt był totalnym sukcesem dla firmy)",
        options: ["En", "Por", "De", "A"],
        correct: "En",
        explanation: "'En conclusión' to podsumowując (zamknięcie). Marker końcowy dla syntez. Wprowadza finalne stwierdzenie po prezentacji argumentów - zawsze 'en conclusión'."
      },
      {
        id: "disc_7",
        question: "_____ decir verdad, no me gustó nada la película aunque todos mis amigos la recomendaban.",
        translation: "(Prawdę mówiąc wcale mi się nie podobał film, chociaż wszyscy moi przyjaciele go polecali)",
        options: ["A", "Para", "Por", "De"],
        correct: "A",
        explanation: "'A decir verdad' to prawdę mówiąc. Wprowadza szczerą opinię. To marker autentyczności - sygnalizujesz że powiesz prawdę która może być niepopularna."
      },
      {
        id: "disc_8",
        question: "_____ cambio, si estudias regularmente cada día, verás resultados progresivos muy pronto.",
        translation: "(Z kolei jeśli studiujesz regularnie każdego dnia, zobaczysz bardzo szybko progresywne rezultaty)",
        options: ["En", "Por", "De", "A"],
        correct: "En",
        explanation: "'En cambio' to z kolei, natomiast. Pokazuje kontrast lub alternatywę. Marker przeciwstawienia - wprowadza opcję lub perspektywę odmienną od poprzedniej."
      },
      {
        id: "disc_9",
        question: "No solo es inteligente _____ además es muy trabajador y dedicado a sus objetivos personales.",
        translation: "(Nie tylko jest inteligentny, ale dodatkowo jest bardzo pracowity i oddany swoim osobistym celom)",
        options: ["sino", "pero", "aunque", "sin embargo"],
        correct: "sino",
        explanation: "'No solo... sino además' to nie tylko... ale dodatkowo. Kombinacja dla kumulacji cech pozytywnych. 'Sino' po negacji dla dodania drugiej pozytywnej cechy."
      },
      {
        id: "disc_10",
        question: "_____ resumen, necesitamos más tiempo y recursos adicionales para completar este proyecto ambicioso correctamente.",
        translation: "(Podsumowując potrzebujemy więcej czasu i dodatkowych zasobów, żeby poprawnie ukończyć ten ambitny projekt)",
        options: ["En", "Por", "De", "A"],
        correct: "En",
        explanation: "'En resumen' to podsumowując (synteza). Marker kondensacji informacji. Wprowadza esencję po długiej dyskusji - zwięzłe przedstawienie głównych punktów."
      },
      {
        id: "disc_11",
        question: "_____ lo que a mí respecta, no tengo ninguna objeción a la propuesta presentada hoy.",
        translation: "(Jeśli o mnie chodzi, nie mam żadnych zastrzeżeń do propozycji przedstawionej dziś)",
        options: ["En", "Por", "De", "A"],
        correct: "En",
        explanation: "'En lo que a mí respecta' to jeśli o mnie chodzi. Marker perspektywy osobistej. Oddziela twoją opinię od innych - pokazuje że mówisz tylko za siebie."
      },
      {
        id: "disc_12",
        question: "_____ cierto modo, tienes razón en tu análisis, aunque no estoy completamente de acuerdo con todo.",
        translation: "(W pewnym sensie masz rację w swojej analizie, chociaż nie zgadzam się całkowicie ze wszystkim)",
        options: ["De", "En", "Por", "A"],
        correct: "De",
        explanation: "'De cierto modo' to w pewnym sensie. Marker częściowej zgody. Łagodzi absolutność - pokazujesz że akceptujesz część ale nie całość argumentu."
      },
      {
        id: "disc_13",
        question: "_____ otra parte, debemos considerar también los costos financieros de implementar esta solución nueva.",
        translation: "(Z drugiej strony musimy rozważyć także koszty finansowe wdrożenia tego nowego rozwiązania)",
        options: ["Por", "De", "En", "A"],
        correct: "Por",
        explanation: "'Por otra parte' to z drugiej strony. Wprowadza dodatkowy aspekt do rozważenia. Marker dla dodania nowej perspektywy do dyskusji - rozszerzenie analizy."
      },
      {
        id: "disc_14",
        question: "_____ fin, después de muchas horas de espera tediosa, llegó nuestro vuelo retrasado al aeropuerto.",
        translation: "(W końcu po wielu godzinach nudnego oczekiwania nasz opóźniony lot dotarł na lotnisko)",
        options: ["Por", "En", "De", "Al"],
        correct: "Por",
        explanation: "'Por fin' to w końcu, nareszcie. Wyraża ulgę po oczekiwaniu. Marker zakończenia cierpliwości - coś co długo nie przychodziło wreszcie nastąpiło."
      },
      {
        id: "disc_15",
        question: "_____ todo caso, lleva un paraguas grande porque el pronóstico predice lluvia para esta tarde.",
        translation: "(W każdym razie weź duży parasol, bo prognoza przewiduje deszcz na dziś po południu)",
        options: ["En", "De", "Por", "A"],
        correct: "En",
        explanation: "'En todo caso' to w każdym razie, tak czy inaczej. Marker dla rady uniwersalnej. Pokazuje że niezależnie od innych czynników, to działanie jest mądre - ostrożność."
      }
    ]
  },

  specialized_subjunctive: {
    name: "Subjuntivo - przypadki specjalne",
    description: "Zaawansowane użycia trybu łączącego",
    icon: Layers,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "spec_subj_1",
        question: "Sea _____ sea, tengo que terminar este informe antes del viernes sin excusas posibles.",
        translation: "(Cokolwiek by nie było, muszę skończyć ten raport przed piątkiem bez możliwych wymówek)",
        options: ["como", "lo que", "cual", "quien"],
        correct: "como",
        explanation: "'Sea como sea' to cokolwiek (by nie było). Podwójny subjuntivo dla maksymalnej nieokreśloności. To idiomatyczne wyrażenie determinacji - nic nie zmieni twojego zamiaru."
      },
      {
        id: "spec_subj_2",
        question: "Busco un apartamento que _____ cerca del centro y que no sea demasiado caro mensualmente.",
        translation: "(Szukam mieszkania, które jest blisko centrum i które nie jest zbyt drogie miesięcznie)",
        options: ["esté", "está", "estará", "estuviera"],
        correct: "esté",
        explanation: "Szukanie nieokreślonego obiektu wymaga subjuntivo. Nie wiesz CZY takie mieszkanie istnieje. 'Un apartamento que esté' - nieokreślony przedmiot z cechami używa subjuntivo."
      },
      {
        id: "spec_subj_3",
        question: "No conozco a nadie que _____ cinco idiomas diferentes con total fluidez nativa en todos.",
        translation: "(Nie znam nikogo, kto mówi pięcioma różnymi językami z całkowitą natywną płynnością we wszystkich)",
        options: ["hable", "habla", "hablará", "hablara"],
        correct: "hable",
        explanation: "Negacja egzystencji (no conozco a nadie que) wymaga subjuntivo. Mówisz że taka osoba nie istnieje w twoim doświadczeniu. Zaprzeczenie + zaimek względny = subjuntivo."
      },
      {
        id: "spec_subj_4",
        question: "Dondequiera que _____, siempre llevaré conmigo los recuerdos hermosos de mi ciudad natal querida.",
        translation: "(Gdziekolwiek pójdę, zawsze będę nosił ze sobą piękne wspomnienia mojego ukochanego rodzinnego miasta)",
        options: ["vaya", "voy", "iré", "fuera"],
        correct: "vaya",
        explanation: "'-quiera' końcówka wymaga subjuntivo. 'Dondequiera' = gdziekolwiek. Wszystkie formy z '-quiera' (quienquiera, cualquiera) biorą subjuntivo - pokazują maksymalną nieokreśloność."
      },
      {
        id: "spec_subj_5",
        question: "Por mucho que _____, no conseguirás convencerme de cambiar de opinión sobre este tema importante.",
        translation: "(Choćbyś nie wiem jak próbował, nie przekonasz mnie do zmiany opinii w tej ważnej sprawie)",
        options: ["intentes", "intentas", "intentarás", "intentaras"],
        correct: "intentes",
        explanation: "'Por mucho/más que' + subjuntivo to choćby nie wiem jak. Koncesja wzmocniona. Pokazuje że intensywność wysiłku nie zmieni rezultatu - maksymalna determinacja."
      },
      {
        id: "spec_subj_6",
        question: "Necesito un asistente que _____ bien inglés y español para trabajar con clientes internacionales diversos.",
        translation: "(Potrzebuję asystenta, który dobrze zna angielski i hiszpański do pracy z różnymi międzynarodowymi klientami)",
        options: ["sepa", "sabe", "sabrá", "supiera"],
        correct: "sepa",
        explanation: "Poszukiwanie osoby nieokreślonej wymaga subjuntivo. Nie masz konkretnej osoby - opisujesz wymagania. 'Un asistente que sepa' - hipotetyczny kandydat wymaga subjuntivo."
      },
      {
        id: "spec_subj_7",
        question: "Hagas lo que _____, no podrás cambiar el pasado, solo aprender de los errores cometidos.",
        translation: "(Cokolwiek zrobisz, nie będziesz mógł zmienić przeszłości, tylko uczyć się z popełnionych błędów)",
        options: ["hagas", "haces", "harás", "hicieras"],
        correct: "hagas",
        explanation: "'Hagas lo que hagas' to cokolwiek zrobisz (podwójny subjuntivo). Konstrukcja dla absolutnej nieokreśloności akcji. Pokazuje że rezultat jest niezależny od działań."
      },
      {
        id: "spec_subj_8",
        question: "No hay nadie que _____ resolver este problema matemático complejo mejor que el profesor experto.",
        translation: "(Nie ma nikogo, kto potrafiłby rozwiązać ten złożony problem matematyczny lepiej niż ekspert profesor)",
        options: ["pueda", "puede", "podrá", "pudiera"],
        correct: "pueda",
        explanation: "'No hay nadie que' + subjuntivo dla nieistnienia. Kategoryczna negacja - nikt nie istnieje z tą zdolnością. Negacja egzystencji zawsze wymaga subjuntivo."
      },
      {
        id: "spec_subj_9",
        question: "Quien _____ interesado en participar debe inscribirse antes del próximo lunes sin falta alguna.",
        translation: "(Ktokolwiek jest zainteresowany uczestnictwem musi zapisać się przed przyszłym poniedziałkiem bez wyjątku)",
        options: ["esté", "está", "estará", "estuviera"],
        correct: "esté",
        explanation: "'Quien' jako nieokreślona osoba bierze subjuntivo. Nie wiesz KTO będzie zainteresowany - otwarta kategoria. 'Quien + subjuntivo' dla hipotetycznych osób w przyszłości."
      },
      {
        id: "spec_subj_10",
        question: "Cualquier cosa que _____, hazla con pasión y dedicación total para obtener mejores resultados siempre.",
        translation: "(Cokolwiek robisz, rób to z pasją i totalnym poświęceniem, żeby zawsze otrzymywać lepsze rezultaty)",
        options: ["hagas", "haces", "harás", "hicieras"],
        correct: "hagas",
        explanation: "'Cualquier cosa que' + subjuntivo dla maksymalnej ogólności. 'Cualquier' wymaga subjuntivo - odnosi się do wszystkiego bez wyjątku. To uniwersalna rada."
      },
      {
        id: "spec_subj_11",
        question: "El hecho de que _____ lloviendo no debe impedirnos realizar la actividad planeada al aire libre.",
        translation: "(Fakt, że pada nie powinien powstrzymywać nas od realizacji zaplanowanej aktywności na świeżym powietrzu)",
        options: ["esté", "está", "estará", "estuviera"],
        correct: "esté",
        explanation: "'El hecho de que' + subjuntivo mimo że mówimy o fakcie. Konstrukcja 'el hecho de que' gramatycznie wymaga subjuntivo choć semantycznie to fakt - to wyjątek."
      },
      {
        id: "spec_subj_12",
        question: "No es que no me _____ tu idea, simplemente creo que necesita más desarrollo detallado.",
        translation: "(Nie chodzi o to, że nie podoba mi się twój pomysł, po prostu myślę że potrzebuje bardziej szczegółowego rozwinięcia)",
        options: ["guste", "gusta", "gustará", "gustara"],
        correct: "guste",
        explanation: "'No es que' + subjuntivo dla zaprzeczenia jako głównej przyczyny. Neguje przypuszczenie. 'No es que no me guste' - podwójna negacja wyjaśnia prawdziwy powód."
      },
      {
        id: "spec_subj_13",
        question: "Comoquiera que _____ hacerlo está bien, confío plenamente en tu criterio profesional y experiencia.",
        translation: "(Jakkolwiek zdecydujesz to zrobić jest dobrze, w pełni ufam twojemu profesjonalnemu osądowi i doświadczeniu)",
        options: ["decidas", "decides", "decidirás", "decidieras"],
        correct: "decidas",
        explanation: "'Comoquiera que' + subjuntivo to jakkolwiek (sposób). Dawanie wolności metody. Wszystkie formy z '-quiera' wymagają subjuntivo - pełna otwartość opcji."
      },
      {
        id: "spec_subj_14",
        question: "Aunque me _____ un millón de euros, no vendería esta casa llena de recuerdos familiares valiosos.",
        translation: "(Choćby zaoferowano mi milion euro, nie sprzedałbym tego domu pełnego cennych rodzinnych wspomnień)",
        options: ["ofrecieran", "ofrecen", "ofrecerán", "han ofrecido"],
        correct: "ofrecieran",
        explanation: "'Aunque' + imperfecto subjuntivo dla sytuacji hipotetycznej. To nierealny warunek - wyrażasz że nawet w tej ekstremalnej sytuacji nie zmieniłbyś decyzji. Kategor yczna odmowa."
      },
      {
        id: "spec_subj_15",
        question: "Te ayudaré en lo que _____ posible dentro de mis limitadas capacidades y tiempo disponible.",
        translation: "(Pomogę ci w czym będzie możliwe w ramach moich ograniczonych możliwości i dostępnego czasu)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "'En lo que sea posible' to w czym będzie możliwe. Subjuntivo dla nieokreślonego zakresu pomocy. 'Sea' pokazuje że granice nie są jeszcze znane - otwarta oferta."
      }
    ]
  }
};

export default part23Categories;
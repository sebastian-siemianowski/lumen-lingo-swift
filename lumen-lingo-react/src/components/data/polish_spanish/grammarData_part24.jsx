/**
 * POLISH → SPANISH GRAMMAR - PART 24
 * 4 categories, 15 questions each - Expert constructions
 */

import { Clock, BookOpen, Building, Wallet } from "lucide-react";

export const part24Categories = {
  progressive_forms_nuances: {
    name: "Formy ciągłe - niuanse",
    description: "Różne sposoby wyrażania akcji trwających",
    icon: Clock,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "prog_1",
        question: "Ahora mismo _____ preparando la cena, te llamo en media hora cuando termine.",
        translation: "(W tej chwili przygotowuję kolację, zadzwonię za pół godziny, kiedy skończę)",
        options: ["estoy", "soy", "voy", "ando"],
        correct: "estoy",
        explanation: "'Estar + gerundio' to standardowa forma ciągła dla akcji w tym momencie. Pokazuje że jesteś w trakcie gotowania TERAZ. 'Ahora mismo' potwierdza natychmiastowość - to akcja która dzieje się dokładnie w momencie mówienia."
      },
      {
        id: "prog_2",
        question: "Mi hermano _____ trabajando en el mismo proyecto desde hace tres meses sin interrupción.",
        translation: "(Mój brat pracuje nad tym samym projektem od trzech miesięcy bez przerwy)",
        options: ["lleva", "está", "sigue", "continúa"],
        correct: "lleva",
        explanation: "'Llevar + gerundio' podkreśla długość trwania akcji. Akumuluje czas - TRZY MIESIĄCE pracy. Różni się od 'estar' który pokazuje tylko stan obecny. 'Llevar' używamy gdy chcemy zaznaczyć ile czasu już minęło w akcji."
      },
      {
        id: "prog_3",
        question: "Los niños _____ jugando en el parque y no quieren volver a casa todavía.",
        translation: "(Dzieci bawią się w parku i nie chcą jeszcze wracać do domu)",
        options: ["andan", "están", "van", "llevan"],
        correct: "andan",
        explanation: "'Andar + gerundio' to kolokwialna forma ciągła. Bardziej casualne niż 'estar'. Sugeruje że akcja jest trochę przypadkowa lub spontaniczna. 'Andan jugando' brzmi bardziej swobodnie niż formalne 'están jugando'."
      },
      {
        id: "prog_4",
        question: "La situación económica _____ empeorando gradualmente desde el año pasado hasta ahora.",
        translation: "(Sytuacja ekonomiczna pogarsza się stopniowo od zeszłego roku do teraz)",
        options: ["viene", "está", "va", "sigue"],
        correct: "viene",
        explanation: "'Venir + gerundio' pokazuje akcję ciągłą z przeszłości do teraz. Podkreśla że proces trwa JUŻ JAKIŚ CZAS. Różni się od 'ir' (w przyszłość) - 'venir' łączy przeszłość z teraźniejszością, pokazując kontynuację."
      },
      {
        id: "prog_5",
        question: "_____ lloviendo toda la mañana y parece que no va a parar pronto en absoluto.",
        translation: "(Pada całe rano i wygląda, że niedługo nie przestanie w ogóle)",
        options: ["Lleva", "Está", "Sigue", "Va"],
        correct: "Lleva",
        explanation: "'Llevar + gerundio' dla akcji rozpoczętej rano trwającej do teraz. Podkreśla długość - CAŁE rano. Czasem możemy pominąć określenie czasu ('lleva lloviendo' = pada już jakiś czas), ale z 'toda la mañana' wyraźnie pokazujemy okres."
      },
      {
        id: "prog_6",
        question: "El precio de la gasolina _____ subiendo poco a poco cada semana sin parar últimamente.",
        translation: "(Cena benzyny rośnie powoli każdego tygodnia bez przerwy ostatnio)",
        options: ["va", "está", "viene", "sigue"],
        correct: "va",
        explanation: "'Ir + gerundio' pokazuje stopniową progresję w przyszłość. Cena rośnie CORAZ BARDZIEJ. To jak trend skierowany do przodu - 'va subiendo' sugeruje że będzie rosnąć dalej, podczas gdy 'está subiendo' to tylko stan obecny."
      },
      {
        id: "prog_7",
        question: "Últimamente _____ comiendo mucho más sano y haciendo ejercicio regularmente cada día.",
        translation: "(Ostatnio jem dużo zdrowiej i regularnie ćwiczę każdego dnia)",
        options: ["ando", "estoy", "voy", "vengo"],
        correct: "ando",
        explanation: "'Andar + gerundio' dla nowych nawyków w ostatnim czasie. Kolokwialne i casualne. 'Últimamente ando' sugeruje że to względnie nowa rutyna - dopiero ostatnio zacząłeś tak robić, w przeciwieństwie do długotrwałego nawyku."
      },
      {
        id: "prog_8",
        question: "Cada día _____ aprendiendo cosas nuevas en mi trabajo, nunca deja de sorprenderme.",
        translation: "(Każdego dnia uczę się nowych rzeczy w mojej pracy, nigdy nie przestaje mnie zaskakiwać)",
        options: ["sigo", "estoy", "voy", "ando"],
        correct: "sigo",
        explanation: "'Seguir + gerundio' to kontynuować robienie czegoś. Podkreśla ciągłość mimo upływu czasu. 'Sigo aprendiendo' = nadal się uczę (nie przestałem). Pokazuje wytrwałość w akcji - jest kontynuacja nie przerwanie."
      },
      {
        id: "prog_9",
        question: "El bebé _____ durmiendo tranquilamente en su cuna desde hace dos horas completas.",
        translation: "(Niemowlę śpi spokojnie w swojej kołysce od dwóch pełnych godzin)",
        options: ["lleva", "está", "sigue", "viene"],
        correct: "lleva",
        explanation: "'Llevar durmiendo' podkreśla akumulację czasu snu. DWA GODZINY to długi czas dla niemowlęcia. 'Desde hace' wzmacnia długość trwania - pokazuje że sen rozpoczął się w przeszłości i trwa nadal."
      },
      {
        id: "prog_10",
        question: "Con tanto trabajo acumulado, _____ quedándome en la oficina hasta tarde todas las noches.",
        translation: "(Z tak dużo nagromadzonej pracy zostaję w biurze do późna każdej nocy)",
        options: ["vengo", "estoy", "voy", "ando"],
        correct: "vengo",
        explanation: "'Venir + gerundio' dla akcji która stała się wzorcem od jakiegoś czasu. To nawyk który rozwinął się niedawno i trwa. 'Vengo quedándome' = ostatnio zostaję (i to się powtarza) - łączy przeszłą przyczynę z obecnym nawykiem."
      },
      {
        id: "prog_11",
        question: "Los estudiantes _____ mejorando sus notas significativamente desde que cambiamos de método de enseñanza.",
        translation: "(Studenci poprawiają swoje oceny znacząco odkąd zmieniliśmy metodę nauczania)",
        options: ["vienen", "están", "van", "siguen"],
        correct: "vienen",
        explanation: "'Venir mejorando' pokazuje poprawę od punktu zmiany metody. Proces rozpoczął się WTEDY i trwa do teraz. To pokazuje że zmiana metody była punktem startowym dla ciągłej poprawy - causa i efekt w czasie."
      },
      {
        id: "prog_12",
        question: "Te _____ diciendo desde hace meses que debes ir al médico para revisar esa tos persistente.",
        translation: "(Mówię ci od miesięcy, że powinieneś iść do lekarza, żeby sprawdzić ten uporczywy kaszel)",
        options: ["vengo", "estoy", "sigo", "ando"],
        correct: "vengo",
        explanation: "'Vengo diciendo' to mówię od jakiegoś czasu (powtarzająca się rada). Pokazuje że to nie pierwsza wzmianka - POWTARZAŁEŚ to wielokrotnie. Wyraża frustrację lub naleganie - coś co mówisz ciągle ale nie jest słuchane."
      },
      {
        id: "prog_13",
        question: "El tren _____ llegando a la estación final, preparen sus maletas y documentos por favor.",
        translation: "(Pociąg przyjeżdża na stację końcową, przygotujcie swoje walizki i dokumenty proszę)",
        options: ["va", "está", "viene", "sigue"],
        correct: "va",
        explanation: "'Ir llegando' pokazuje że coś zbliża się do zakończenia. Proces dotarcia jest prawie ukończony - zaraz będziemy tam. 'Va llegando' to progresja ku momentowi przybycia - akcja kieruje się ku celowi finalnemu."
      },
      {
        id: "prog_14",
        question: "Mi hija _____ creciendo tan rápido que la ropa nueva le queda pequeña en pocos meses.",
        translation: "(Moja córka rośnie tak szybko, że nowe ubrania są jej za małe w kilka miesięcy)",
        options: ["está", "va", "viene", "sigue"],
        correct: "está",
        explanation: "'Estar creciendo' dla procesu wzrostu. Standardowa forma ciągła. Wzrost dzieci to proces biologiczny - nie możemy użyć 'va' (zbyt intencjonalne) ani 'viene' (nie ma punktu startowego). 'Estar' to neutralna obserwacja ciągłego procesu."
      },
      {
        id: "prog_15",
        question: "No me molestes ahora, _____ concentrándome en terminar este informe importante antes de la reunión.",
        translation: "(Nie przeszkadzaj mi teraz, koncentruję się na ukończeniu tego ważnego raportu przed spotkaniem)",
        options: ["ando", "estoy", "voy", "sigo"],
        correct: "estoy",
        explanation: "'Estar concentrándose' dla intensywnej akcji mentalne w toku. To wymaga pełnej uwagi TERAZ. Czasowniki stanu psychicznego (concentrarse, pensando, meditando) prawie zawsze używają 'estar', nie innych form ciągłych - to o natychmiastowym stanie umysłu."
      }
    ]
  },

  diminutives_and_augmentatives: {
    name: "Zdrobnienia i zgrubienia",
    description: "Używaj -ito, -illo, -ón dla wyrażenia rozmiaru i emocji",
    icon: BookOpen,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "dim_1",
        question: "Dame un _____ de agua por favor, tengo un poco de sed ahora mismo.",
        translation: "(Daj mi odrobinę wody proszę, mam trochę pragnienia w tej chwili)",
        options: ["poquito", "poquillo", "poco", "pocón"],
        correct: "poquito",
        explanation: "'Poquito' to zdrobnienie 'poco' (-ito). Używamy dla minimalizacji - MAŁA ilość. Zdrobnienie czyni prośbę bardziej grzeczną i słodką. '-ito/-ita' to najczęstsza końcówka zdrobnienia w całym hiszpańskim."
      },
      {
        id: "dim_2",
        question: "Mi abuela me preparó un _____ muy rico de pollo con verduras frescas del huerto.",
        translation: "(Moja babcia przygotowała mi bardzo smaczny rosołek z kurczaka ze świeżymi warzywami z ogrodu)",
        options: ["caldito", "caldillo", "caldo", "caldón"],
        correct: "caldito",
        explanation: "'Caldito' (zdrobnienie 'caldo') wyraża czułość i miłość. Babcie używają zdrobnień dla pokazania uczucia. '-ito' nie tylko zmniejsza rozmiar ale dodaje ciepła emocjonalnego - to nie tylko rosół, to BABCINY rosół robiony z miłością."
      },
      {
        id: "dim_3",
        question: "¿Me das un _____ más de tiempo para terminar el ejercicio? Casi lo tengo listo.",
        translation: "(Czy dasz mi odrobinkę więcej czasu, żeby skończyć ćwiczenie? Prawie je mam gotowe)",
        options: ["ratito", "rato", "ratillo", "ratón"],
        correct: "ratito",
        explanation: "'Ratito' (zdrobnienie 'rato') to krótka chwilka. Minimalizujesz prośbę - proszę o MAŁO czasu. Zdrobnienie czyni prośbę mniej wymagającą i bardziej akceptowalną. Strategia grzeczności - małe rzeczy łatwiej dostać."
      },
      {
        id: "dim_4",
        question: "Ese señor tiene un _____ enorme, parece que no le cabe por la puerta del coche.",
        translation: "(Ten pan ma ogromny brzuszek, wygląda że nie mieści mu się przez drzwi samochodu)",
        options: ["barrigón", "barriguita", "barriga", "barrigote"],
        correct: "barrigón",
        explanation: "'-ón' to zgrubienie (augmentativo) dla zwiększenia. 'Barrigón' = WIELKI brzuch. Może być ironiczne lub żartobliwe - nie zawsze dosłownie ogromne ale zaskakująco duże. Zgrubienia często niosą emocjonalny komentarz, nie tylko rozmiar."
      },
      {
        id: "dim_5",
        question: "Mi sobrina tiene tres añitos y ya habla perfectamente en dos idiomas diferentes con fluidez.",
        translation: "(Moja siostrzenica ma trzy latka i już mówi perfekcyjnie w dwóch różnych językach z płynnością)",
        options: ["añitos", "añillos", "años", "añones"],
        correct: "añitos",
        explanation: "'Añitos' to zdrobnienie wieku dla dzieci. Wyraża czułość - to MAŁE dziecko. Z liczbami używamy zdrobnień dla dzieci do około 10 lat. 'Tres añitos' brzmi czule, podczas gdy 'tres años' byłoby neutralne - zdrobnienie dodaje uczucia."
      },
      {
        id: "dim_6",
        question: "Vivo en una _____ en las afueras de la ciudad, es pequeña pero muy acogedora.",
        translation: "(Mieszkam w domku na obrzeżach miasta, jest mały ale bardzo przytulny)",
        options: ["casita", "casilla", "casa", "casona"],
        correct: "casita",
        explanation: "'Casita' to mały dom (zdrobnienie). Może być dosłownie mały lub wyraz czułości do twojego domu. Zdrobnienia mieszkań często pokazują przywiązanie emocjonalne - 'mi casita' to dom który kochasz, niezależnie od rzeczywistego rozmiaru."
      },
      {
        id: "dim_7",
        question: "Ese perro callejero es un _____, debe pesar más de cincuenta kilos fácilmente.",
        translation: "(Ten bezpański pies to wielkolud, musi ważyć łatwo ponad pięćdziesiąt kilogramów)",
        options: ["perrón", "perrito", "perro", "perrote"],
        correct: "perrón",
        explanation: "'-ón' dla zwierząt zwiększa rozmiar dramatycznie. 'Perrón' to OGROMNY pies. Zgrubienia z zwierzętami mogą wyrażać podziw (wow, jaki duży!) lub lekki strach. Kontekst emocjonalny zależy od intonacji i sytuacji."
      },
      {
        id: "dim_8",
        question: "¿Quieres un _____ de café o prefieres una taza completa grande?",
        translation: "(Czy chcesz odrobinkę kawy czy wolisz pełną dużą filiżankę?)",
        options: ["cafecito", "café", "cafelito", "cafetón"],
        correct: "cafecito",
        explanation: "'Cafecito' to mała kawka (czule). W kulturze latynoamerykańskiej zdrobnienia z kawą są bardzo powszechne - nawet duża kawa może być 'cafecito' jako wyraz przywiązania. Pokazuje nieformalność i bliskość w ofercie."
      },
      {
        id: "dim_9",
        question: "La película era un _____, duró más de tres horas y media sin pausas comerciales.",
        translation: "(Film był wielgachny, trwał ponad trzy i pół godziny bez przerw reklamowych)",
        options: ["peliculón", "peliculita", "película", "peliculona"],
        correct: "peliculón",
        explanation: "'-ón' może wyrażać długość lub intensywność, nie tylko rozmiar. 'Peliculón' = DŁUGI/epicki film. Zgrubienie dla czasu pokazuje że coś przekracza normalne oczekiwania - może być pozytywne (epickie) lub negatywne (zbyt długie)."
      },
      {
        id: "dim_10",
        question: "Espérame un _____, voy a coger las llaves que olvidé en la mesa de la cocina.",
        translation: "(Poczekaj odrobinkę, pójdę wziąć klucze, które zapomniałem na stole w kuchni)",
        options: ["momentito", "momento", "momentillo", "momentazo"],
        correct: "momentito",
        explanation: "'Momentito' zdrabnia czas oczekiwania. Minimalizujesz niewygodę dla drugiej osoby - proszę poczekać tylko CHWILECZKĘ. Strategia grzeczności - małe rzeczy są mniej uciążliwe. Bardzo używane w codziennej komunikacji dla łagodzenia próśb."
      },
      {
        id: "dim_11",
        question: "Ten cuidado con ese _____ que hay en medio de la acera, podrías tropezarte y caer.",
        translation: "(Uważaj na ten kamyk, który jest pośrodku chodnika, mógłbyś się potknąć i upaść)",
        options: ["piedrita", "piedra", "piedrilla", "piedrón"],
        correct: "piedrita",
        explanation: "'Piedrita' to mały kamyk (zdrobnienie 'piedra'). Używamy dla prawdziwych małych obiektów. Czasem zdrobnienie minimalizuje niebezpieczeństwo ironicznie - mówisz 'mały kamyk' ale może wywołać upadek. Rozmiar fizyczny plus ton emocjonalny."
      },
      {
        id: "dim_12",
        question: "Hace un _____ terrible afuera, mejor quedarnos en casa calentitos junto a la chimenea.",
        translation: "(Jest okropny ziąb na zewnątrz, lepiej zostać w domu w cieple przy kominku)",
        options: ["frío", "friíto", "friazo", "friote"],
        correct: "friazo",
        explanation: "'-azo' to intensywne zgrubienie. 'Friazo' = STRASZNY zimno (większe niż '-ón'). Dla pogody '-azo' pokazuje ekstremalne warunki - nie tylko duże ale niekomfortowe. To wzmocniony augmentativo dla rzeczy nieprzyjemnych."
      },
      {
        id: "dim_13",
        question: "Vamos a dar una _____ por el barrio para estirar las piernas después de estar sentados.",
        translation: "(Przejdziemy się po dzielnicy, żeby rozprostować nogi po siedzeniu)",
        options: ["vueltita", "vuelta", "vueltecita", "vueltona"],
        correct: "vueltita",
        explanation: "'Vueltita' to krótki spacer (zdrobnienie 'vuelta'). Pokazuje że to nieformalny, krótki spacer - nie długa wyprawa. Zdrobnienie sugeruje casualność i krótki czas - to propozycja lekkiej aktywności bez wielkiego zaangażowania."
      },
      {
        id: "dim_14",
        question: "Ese edificio nuevo es un _____, tiene más de cincuenta pisos de altura impresionante.",
        translation: "(Ten nowy budynek to wielkolud, ma ponad pięćdziesiąt pięter imponującej wysokości)",
        options: ["edificazo", "edificio", "edificito", "edifición"],
        correct: "edificazo",
        explanation: "'-azo' dla budynków pokazuje imponujący rozmiar. 'Edificazo' = MASYWNY budynek. Wyraża podziw lub zaskoczenie wielkością. Silniejsze niż '-ón', '-azo' często niesie emocję wow - to nie tylko duże ale imponujące."
      },
      {
        id: "dim_15",
        question: "Tengo un _____ en el dedo desde ayer, me duele cuando escribo con el teclado.",
        translation: "(Mam zadrapanie na palcu od wczoraj, boli mnie, kiedy piszę na klawiaturze)",
        options: ["rasguñito", "rasguño", "rasguñillo", "rasguñón"],
        correct: "rasguñito",
        explanation: "'Rasguñito' to małe zadrapanie. Zdrobnienie minimalizuje poważność urazu - to tylko DROBNE zadrapanie, nic poważnego. Używamy dla bagatelizowania problemów - czyni je mniej dramatycznymi i bardziej znośnymi emocjonalnie."
      }
    ]
  },

  formal_vs_informal: {
    name: "Formalny vs nieformalny język",
    description: "Rozróżniaj style komunikacji",
    icon: Building,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "form_1",
        question: "Buenos días, _____ ayudarle en algo? Estoy a su disposición completamente.",
        translation: "(Dzień dobry, czy mogę Panu w czymś pomóc? Jestem całkowicie do Pana dyspozycji)",
        options: ["¿Puedo", "¿Podría", "¿Puede", "¿Podríais"],
        correct: "¿Puedo",
        explanation: "'¿Puedo ayudarle?' to formalna oferta pomocy (usted). 'Le' pokazuje szacunek - Pan/Pani forma. W obsłudze klienta zawsze używamy 'usted' z formalnym słownictwem. 'Puedo' jest wystarczająco grzeczne z 'usted', nie potrzeba conditional."
      },
      {
        id: "form_2",
        question: "Oye tío, ¿_____ echarme una mano con la mudanza este finde? Te invito unas cervezas después.",
        translation: "(Słuchaj kolego, czy pomożesz mi z przeprowadzką w ten weekend? Stawiam ci kilka piw potem)",
        options: ["puedes", "puede", "podría", "podríais"],
        correct: "puedes",
        explanation: "'Tú' forma dla przyjaciół - bezpośrednia i casualna. 'Oye tío' to bardzo nieformalne (Hiszpania). 'Puedes' (nie 'puede') dla drugiej osoby singular. Język potoczny z przyjaciółmi używa 'tú', skrótów ('finde') i slangu ('tío')."
      },
      {
        id: "form_3",
        question: "Disculpe señor, _____ decirme dónde está la oficina de correos más cercana desde aquí?",
        translation: "(Przepraszam Pana, czy mógłby mi Pan powiedzieć gdzie jest najbliższa poczta stąd?)",
        options: ["¿podría", "¿podrías", "¿puedes", "¿puede"],
        correct: "¿podría",
        explanation: "'¿Podría?' to conditional (najgrzeczniejsza forma) z 'usted'. Używasz dla nieznajomych na ulicy. Conditional dodaje ekstra grzeczności - nie zakładasz że osoba MOŻE pomóc, tylko delikatnie pytasz CZY mogłaby. 'Disculpe' (nie 'disculpa') też pokazuje formalność."
      },
      {
        id: "form_4",
        question: "Mamá, _____ salir a jugar con mis amigos del barrio esta tarde después de hacer deberes?",
        translation: "(Mamo, czy mogę wyjść pobawić się z przyjaciółmi z dzielnicy dziś po południu po odrabianiu lekcji?)",
        options: ["¿puedo", "¿podría", "¿puede", "¿podríais"],
        correct: "¿puedo",
        explanation: "'Puedo' dla członków rodziny (tú). Z rodzicami używamy 'tú' nie 'usted' (chyba że bardzo formalna kultura). Dzieci do rodziców: 'puedo' jest naturalne i bezpośrednie. Nie potrzeba conditional - relacja bliska pozwala na prostotę."
      },
      {
        id: "form_5",
        question: "Estimado señor García, le _____ confirmar que su pedido ha sido procesado correctamente.",
        translation: "(Szanowny Panie García, piszę żeby potwierdzić, że Pana zamówienie zostało poprawnie przetworzone)",
        options: ["escribo para", "te escribo", "escríbote", "os escribo"],
        correct: "escribo para",
        explanation: "'Le escribo para' to formalna korespondencja biznesowa. 'Le' (nie 'te') dla 'usted'. 'Estimado' otwiera formalne listy. Język biznesowy wymaga dystansu grzecznego - używamy pełnych form, żadnych skrótów, zawsze 'usted'."
      },
      {
        id: "form_6",
        question: "Perdona colega, ¿_____ fuego? Se me olvidó el encendedor en casa esta mañana.",
        translation: "(Przepraszam kolego, czy masz ogień? Zapomniałem zapalniczki w domu dziś rano)",
        options: ["tienes", "tiene", "tenéis", "tendría"],
        correct: "tienes",
        explanation: "'¿Tienes fuego?' to casualne pytanie (tú) do obcych w swobodnej sytuacji. 'Colega' to przyjacielskie - tworzysz instant koleżeńskość. Na ulicy między młodymi używamy 'tú' nie 'usted'. Pokazuje równość i swobodę w kulturze ulicznej."
      },
      {
        id: "form_7",
        question: "Señora directora, quisiera _____ una reunión con usted para discutir un asunto importante urgente.",
        translation: "(Pani dyrektor, chciałbym umówić spotkanie z Panią, żeby przedyskutować ważną pilną sprawę)",
        options: ["solicitar", "pedir", "pedirte", "solicitarte"],
        correct: "solicitar",
        explanation: "'Solicitar' to formalne 'prosić/występować'. Bardziej oficjalne niż 'pedir'. Z szefami używamy najgrzeczniejszych form - 'quisiera solicitar' (conditional + formalny czasownik) pokazuje maksymalny szacunek. Hierarchia w pracy wymaga formalności."
      },
      {
        id: "form_8",
        question: "Chicos, ¿_____ venir conmigo al concierto el sábado o ya tenéis otros planes?",
        translation: "(Chłopaki, czy chcecie iść ze mną na koncert w sobotę czy już macie inne plany?)",
        options: ["queréis", "quieren", "querríais", "quisieran"],
        correct: "queréis",
        explanation: "'Vosotros' forma (Hiszpania) dla grupy przyjaciół. 'Queréis' to drugiej mnoga nieformalna. 'Chicos' to bardzo casualne - pokazuje koleżeńską atmosferę. W Ameryce Łacińskiej byłoby 'quieren' (ustedes), ale w Hiszpanii 'vosotros' jest standardem dla znajomych."
      },
      {
        id: "form_9",
        question: "Le ruego que _____ esta solicitud con la máxima urgencia posible dentro de sus capacidades.",
        translation: "(Błagam żeby rozpatrzył Pan to podanie z maksymalną możliwą pilnością w ramach swoich możliwości)",
        options: ["considere", "consideres", "considere", "consideréis"],
        correct: "considere",
        explanation: "'Rogar que + subjuntivo' to bardzo formalna prośba. 'Considere' (usted subjuntivo) dla szacunku. 'Ruego' jest bardziej intensywne niż 'pido' - używane w oficjalnej korespondencji gdy sprawa jest naprawdę ważna. To język biurokratyczny i legalny."
      },
      {
        id: "form_10",
        question: "Tío, ¿te _____ si quedamos mañana en vez de hoy? Estoy súper cansado del curro.",
        translation: "(Stary, czy masz coś przeciwko jeśli spotkamy się jutro zamiast dziś? Jestem mega zmęczony z roboty)",
        options: ["importa", "importaría", "molestaría", "molestaréis"],
        correct: "importa",
        explanation: "'¿Te importa si...?' w formie 'tú' to casualne pytanie. Slang: 'tío' (kolego), 'súper' (bardzo), 'curro' (robota). Młodzi Hiszpanie używają bardzo kolokwialnego języka między sobą - to pokazuje bliskość i wspólną kulturę młodzieżową."
      },
      {
        id: "form_11",
        question: "Me dirijo a ustedes para _____ mi más sincero agradecimiento por su colaboración profesional.",
        translation: "(Zwracam się do Państwa, żeby wyrazić moją najszczerszą wdzięczność za Państwa profesjonalną współpracę)",
        options: ["expresar", "decir", "expresarte", "deciros"],
        correct: "expresar",
        explanation: "'Me dirijo a ustedes' to bardzo formalne otwarcie. 'Expresar' bardziej oficjalne niż 'decir'. W formalnej komunikacji biznesowej wybieramy najbardziej eleganckie słownictwo - 'expresar agradecimiento' brzmi profesjonalnie, podczas gdy 'decir gracias' byłoby zbyt casualne."
      },
      {
        id: "form_12",
        question: "Mira, _____ que hablar seriamente sobre lo que pasó ayer en la fiesta de cumpleaños.",
        translation: "(Słuchaj, musimy poważnie porozmawiać o tym, co się stało wczoraj na imprezie urodzinowej)",
        options: ["tenemos", "tienen", "hemos de", "debemos"],
        correct: "tenemos",
        explanation: "'Tener que' w 'tú/tú' (my jako przyjaciele) to bezpośrednie. 'Mira' to imperatyw 'tú' dla przyciągnięcia uwagi. Między przyjaciółmi komunikacja jest bezpośrednia - 'tenemos que' jest jasne i szczere, bez kurtuazyjnych obejść."
      },
      {
        id: "form_13",
        question: "Señores pasajeros, les rogamos que _____ atentos a los avisos de megafonía del personal.",
        translation: "(Szanowni pasażerowie, prosimy żeby byli Państwo uważni na komunikaty głośnikowe personelu)",
        options: ["permanezcan", "permanezcáis", "permanezcan", "permaneced"],
        correct: "permanezcan",
        explanation: "'Les rogamos que permanezcan' to formalna prośba zbiorowa (ustedes). Komunikaty publiczne używają najwyższej grzeczności. 'Permanecer' bardziej formalne niż 'estar' - język transportu i administracji ma swój specyficzny styl oficjalny."
      },
      {
        id: "form_14",
        question: "Eh chaval, ¿te _____ un cigarro? Se me han acabado y estoy desesperado ahora mismo.",
        translation: "(Hej młody, czy masz papierosa? Skończyły mi się i jestem teraz zdesperowany)",
        options: ["sobra", "sobran", "quedan", "queda"],
        correct: "sobra",
        explanation: "'¿Te sobra?' to bardzo kolokwialne 'czy masz do oddania'. 'Chaval' to slang (młody człowiek - Hiszpania). Język uliczny jest maksymalnie nieformalny - używa slangu, skrótów i bardzo bezpośrednich pytań. To pokazuje casualność i równość społeczną."
      },
      {
        id: "form_15",
        question: "Le agradecería enormemente que _____ la amabilidad de revisar este documento legal minuciosamente.",
        translation: "(Byłbym Panu ogromnie wdzięczny, gdyby miał Pan życzliwość dokładnie przejrzeć ten dokument prawny)",
        options: ["tuviera", "tuvieras", "tenga", "tengáis"],
        correct: "tuviera",
        explanation: "Conditional + imperfecto subjuntivo to szczyt formalności. 'Tuviera la amabilidad' jest ultra grzeczne. Język prawny i dyplomatyczny używa najdelikatniejszych form możliwych - każde słowo wybrane dla maksymalizacji szacunku i minimalizacji narzucania się."
      }
    ]
  },

  modal_verbs_advanced: {
    name: "Czasowniki modalne - zaawansowane",
    description: "Wyrażaj możliwość, konieczność, prawdopodobieństwo",
    icon: Wallet,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "modal_1",
        question: "_____ ser las tres de la tarde cuando finalmente llegaron a casa después del viaje.",
        translation: "(Mogła być trzecia po południu, kiedy w końcu dotarli do domu po podróży)",
        options: ["Debían", "Podían", "Tenían que", "Habrían de"],
        correct: "Debían",
        explanation: "'Deber de' (z 'de') wyraża przypuszczenie w przeszłości. To nie obowiązek ale spekulacja - PEWNIE było około trzeciej. Często pomijamy 'de' w mowie, ale znaczenie pozostaje - prawdopodobieństwo oparte na logicznym wnioskowaniu."
      },
      {
        id: "modal_2",
        question: "No _____ haber dicho eso, ahora se ha ofendido y no me habla para nada.",
        translation: "(Nie powinienem był tego mówić, teraz się obraził i wcale ze mną nie rozmawia)",
        options: ["debí", "debería", "pude", "podría"],
        correct: "debí",
        explanation: "'No debí' to nie powinienem był (żal za przeszłością). Pretérito 'deber' dla akcji której żałujesz. To mocniejsze niż 'no debería haber dicho' (conditional) - 'debí' to definitywny błąd, podczas gdy 'debería' byłoby łagodniejsze."
      },
      {
        id: "modal_3",
        question: "Puede _____ esté equivocado, pero creo que esta no es la dirección correcta del restaurante.",
        translation: "(Może się mylę, ale myślę że to nie jest właściwy adres restauracji)",
        options: ["que", "ser", "estar", "de"],
        correct: "que",
        explanation: "'Puede que + subjuntivo' to może (przypuszczenie). Zawsze 'que' między 'puede' i czasownikiem. To konstrukcja dla niepewności - wyrażasz możliwość bez pewności. 'Puede' + infinitivo byłoby możliwością fizyczną, 'puede que' to możliwość logiczna."
      },
      {
        id: "modal_4",
        question: "Deberías _____ al médico para que revise esa tos que llevas teniendo varias semanas.",
        translation: "(Powinieneś pójść do lekarza, żeby sprawdził ten kaszel, który masz od kilku tygodni)",
        options: ["ir", "yendo", "ido", "vas"],
        correct: "ir",
        explanation: "'Deber + infinitivo' to powinien (rada moralna). Zawsze infinitiv po czasownikach modalnych. 'Deberías ir' to conditional dla łagodnej rady - mniej kategoryczne niż 'debes ir'. Conditional sugeruje ale nie nakazuje."
      },
      {
        id: "modal_5",
        question: "No _____ llegar a tiempo a la reunión porque había muchísimo tráfico en la autopista.",
        translation: "(Nie mogłem dotrzeć na czas na spotkanie, bo był ogromny ruch na autostradzie)",
        options: ["pude", "podía", "podría", "he podido"],
        correct: "pude",
        explanation: "'No pude' to nie mogłem (niemożność w konkretnym momencie). Pretérito dla jednorazowej niemożności. 'No podía' sugerowałoby ogólną niemożność lub trwający stan. Pretérito pokazuje że próbowałeś ale konkretne okoliczności uniemożliwiły sukces."
      },
      {
        id: "modal_6",
        question: "Tendríais que _____ más atención en clase si queréis aprobar el examen final sin problemas.",
        translation: "(Powinniście zwracać więcej uwagi na zajęciach, jeśli chcecie zdać końcowy egzamin bez problemów)",
        options: ["prestar", "prestando", "prestado", "prestáis"],
        correct: "prestar",
        explanation: "'Tener que + infinitivo' to musieć (konieczność). Conditional 'tendríais' łagodzi radę - POWINNIŚCIE (nie MUSICIE). Forma 'vosotros' dla grupy studentów w Hiszpanii. Conditional sugeruje że to wasz wybór ale konsekwencje będą wasze."
      },
      {
        id: "modal_7",
        question: "Habría _____ llamarte antes, pero se me olvidó completamente con tanto trabajo acumulado.",
        translation: "(Powinienem był do ciebie zadzwonić wcześniej, ale całkowicie zapomniałem z tak dużą ilością pracy)",
        options: ["debido", "podido", "tenido que", "querido"],
        correct: "debido",
        explanation: "'Haber debido' to powinienem był (żal retrospektywny). Conditional perfect dla niezrealizowanego obowiązku moralnego. To wyraża że wiedziałeś co powinieneś był zrobić ale nie zrobiłeś - mniejsza wina niż 'debí' ale nadal pokazuje świadomość błędu."
      },
      {
        id: "modal_8",
        question: "Podríais _____ ayudado más con la organización del evento en lugar de solo criticar después.",
        translation: "(Moglibyście byli bardziej pomóc z organizacją wydarzenia zamiast tylko krytykować potem)",
        options: ["haber", "haver", "ser", "estar"],
        correct: "haber",
        explanation: "'Poder' + haber + participio to móc był zrobić (niezrealizowana możliwość). Pokazuje że mieliście zdolność ale nie użyliście jej. To forma wyrzutu - moralnie mogliście (mieliście możliwość) ale nie zrobiliście, teraz krytykujecie."
      },
      {
        id: "modal_9",
        question: "Debe _____ estar muy orgullosa de su hijo, ha conseguido tanto a tan corta edad.",
        translation: "(Musi być bardzo dumna ze swojego syna, osiągnął tak dużo w tak młodym wieku)",
        options: ["de", "que", "por", "para"],
        correct: "de",
        explanation: "'Deber de' wyraża przypuszczenie (pewnie jest dumna). Z 'de' to logiczna dedukcja, bez 'de' byłoby obowiązkiem. Często Hiszpanie pomijają 'de' w mowie nawet dla przypuszczeń, ale gramatycznie 'de' pokazuje że to dedukcja nie nakaz."
      },
      {
        id: "modal_10",
        question: "No hace falta que _____, yo me encargo de todo personalmente sin problema ninguno.",
        translation: "(Nie trzeba żebyś przychodził, ja zajmę się wszystkim osobiście bez żadnego problemu)",
        options: ["vengas", "vienes", "vendrás", "vinieras"],
        correct: "vengas",
        explanation: "'No hace falta que' + subjuntivo to nie trzeba że (brak konieczności). Łagodniejsze niż 'no debes'. Używamy dla zwolnienia kogoś z obowiązku grzecznie - to oferta wzięcia odpowiedzialności, nie rozkaz nieobecności."
      },
      {
        id: "modal_11",
        question: "Hay que _____ las normas de seguridad en el laboratorio para evitar accidentes peligrosos.",
        translation: "(Trzeba przestrzegać zasad bezpieczeństwa w laboratorium, żeby uniknąć niebezpiecznych wypadków)",
        options: ["respetar", "respetando", "respetado", "respectar"],
        correct: "respetar",
        explanation: "'Hay que + infinitivo' to bezosobowa konieczność (wszyscy muszą). Uniwersalna zasada bez wskazywania kogo konkretnie. Różni się od 'tener que' (osobista konieczność) - 'hay que' to ogólna reguła dla wszystkich w tej sytuacji."
      },
      {
        id: "modal_12",
        question: "No sé si _____ ir a la fiesta, no conozco a casi nadie de los invitados.",
        translation: "(Nie wiem czy powinienem iść na imprezę, nie znam prawie nikogo z gości)",
        options: ["deba", "debo", "pueda", "puedo"],
        correct: "deba",
        explanation: "'No sé si deba' używa subjuntivo dla wątpliwości moralnej. To pytanie do siebie - CZY powinienem? Subjuntivo pokazuje niepewność co do właściwego działania. 'Indicativo' byłby możliwy ale subjuntivo podkreśla dylema moralny."
      },
      {
        id: "modal_13",
        question: "Tal vez no _____ venir mañana si el tiempo empeora según el pronóstico meteorológico.",
        translation: "(Może nie będę mógł przyjść jutro, jeśli pogoda się pogorszy według prognozy meteorologicznej)",
        options: ["pueda", "puedo", "podré", "pudiera"],
        correct: "pueda",
        explanation: "'Tal vez' + subjuntivo dla możliwości. 'Pueda' (presente subjuntivo) dla przyszłej możliwości. To hipotetyczna niemożność - nie wiesz jeszcze czy będziesz mógł. Subjuntivo pokazuje niepewność o przyszłej zdolności."
      },
      {
        id: "modal_14",
        question: "Tendría que _____ estudiado más para ese examen tan difícil, ahora me arrepiento mucho.",
        translation: "(Powinienem był więcej się uczyć na ten tak trudny egzamin, teraz bardzo żałuję)",
        options: ["haber", "haver", "ser", "estar"],
        correct: "haber",
        explanation: "'Tendría que haber estudiado' to retrospektywny żal. Conditional perfect dla rzeczy której nie zrobiłeś a powinieneś był. To mniej intensywne niż 'debí' - 'tendría que' wyraża żal ale łagodniej, z pewnym dystansem czasowym."
      },
      {
        id: "modal_15",
        question: "_____ quedarte en casa descansando si te sientes tan mal, el trabajo puede esperar hasta mañana.",
        translation: "(Możesz zostać w domu odpoczywając, jeśli czujesz się tak źle, praca może poczekać do jutra)",
        options: ["Puedes", "Debes", "Tienes que", "Habrías de"],
        correct: "Puedes",
        explanation: "'Puedes' daje pozwolenie (masz możliwość). Nie jest to nakaz odpoczynku tylko oferta opcji. Różni się od 'debes' (obowiązek) - 'puedes' szanuje autonomię, daje wybór. To empatyczna sugestia nie dyrektywa."
      }
    ]
  }
};

export default part24Categories;
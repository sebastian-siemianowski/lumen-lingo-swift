/**
 * POLISH → SPANISH GRAMMAR - PART 12
 * 4 categories, 15 questions each - Mastering complexities
 */

import { Film, Heart, Coins, Star } from "lucide-react";

export const part12Categories = {
  entertainment_and_culture: {
    name: "Rozrywka i kultura",
    description: "Rozmawiaj o sztuce, filmach i kulturze",
    icon: Film,
    color: "from-fuchsia-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "ent_1",
        question: "Anoche _____ a ver una película española muy emocionante en el cine del centro comercial.",
        translation: "(Wczoraj wieczorem poszliśmy zobaczyć bardzo ekscytujący hiszpański film w kinie w centrum handlowym)",
        options: ["fuimos", "íbamos", "hemos ido", "vamos"],
        correct: "fuimos",
        explanation: "'Ir a ver' to pójść zobaczyć! 'Anoche' wymaga pretérito - konkretne wyjście. Kino to magiczne doświadczenie - ciemność, ekran i emocje razem! 🎬"
      },
      {
        id: "ent_2",
        question: "Esta serie de televisión me _____ muchísimo, no puedo dejar de ver episodios uno tras otro.",
        translation: "(Ten serial telewizyjny mnie bardzo wciąga, nie mogę przestać oglądać odcinków jeden po drugim)",
        options: ["engancha", "gusta", "encanta", "interesa"],
        correct: "engancha",
        explanation: "'Enganchar' to wciągać, uzależniać jak magnes! Silne słowo dla serii których nie możesz przestać oglądać. To jak przyciąga i trzyma twoją uwagę mocno! 📺"
      },
      {
        id: "ent_3",
        question: "El concierto de música rock _____ a las nueve de la noche y terminará cerca de medianoche.",
        translation: "(Koncert muzyki rockowej zaczyna się o dziewiątej wieczorem i skończy się około północy)",
        options: ["empieza", "empeza", "comienza", "inicia"],
        correct: "empieza",
        explanation: "'Empezar' to zaczynać się - zmiana e→ie! Koncerty w Hiszpanii zaczynają późno bo nocne życie jest intensywne tam. Muzyka na żywo daje niesamowitą energię! 🎸"
      },
      {
        id: "ent_4",
        question: "Me _____ las películas de ciencia ficción porque me hacen pensar sobre el futuro de la humanidad.",
        translation: "(Fascynują mnie filmy science fiction, bo sprawiają że myślę o przyszłości ludzkości)",
        options: ["fascinan", "fascina", "encantan", "gustan"],
        correct: "fascinan",
        explanation: "'Fascinar' działa jak 'gustar' ale jest intensywniejsze! 'Las películas' liczba mnoga wymaga 'fascinan'. Science fiction otwiera umysł na nieograniczone możliwości przyszłości! 🚀"
      },
      {
        id: "ent_5",
        question: "El museo del Prado en Madrid _____ obras maestras de pintores famosos como Velázquez y Goya.",
        translation: "(Muzeum Prado w Madrycie ma arcydzieła słynnych malarzy jak Velázquez i Goya)",
        options: ["tiene", "hay", "contiene", "posee"],
        correct: "tiene",
        explanation: "'El museo tiene' znaczy muzeum ma jako właściciel! To jego kolekcja, jego prawdziwy skarb. Prado to jeden z najważniejszych muzeów świata - absolutny must see! 🖼️"
      },
      {
        id: "ent_6",
        question: "¿_____ alguna vez flamenco en vivo? Es una experiencia cultural única e inolvidable.",
        translation: "(Czy kiedykolwiek widziałeś flamenco na żywo? To unikalne i niezapomniane doświadczenie kulturowe)",
        options: ["Has visto", "Viste", "Veías", "Ves"],
        correct: "Has visto",
        explanation: "'¿Has visto alguna vez?' pyta o doświadczenie życiowe! Present perfect dla rzeczy które robiłeś w życiu. Flamenco to prawdziwa dusza pięknej Andaluzji! 💃"
      },
      {
        id: "ent_7",
        question: "Esta exposición de arte moderno _____ abierta al público hasta finales del próximo mes.",
        translation: "(Ta wystawa sztuki nowoczesnej jest otwarta dla publiczności do końca przyszłego miesiąca)",
        options: ["estará", "será", "va a estar", "está"],
        correct: "estará",
        explanation: "'Estará abierta' to będzie otwarta w przyszłości! 'Estar' plus participio dla stanów. Wystawa to fascynujące okno na kreatywną wyobraźnię artysty! 🎨"
      },
      {
        id: "ent_8",
        question: "Los actores _____ sus papeles a la perfección en la obra de teatro dramática anoche.",
        translation: "(Aktorzy zagrali swoje role perfekcyjnie w dramatycznym spektaklu teatralnym wczoraj wieczorem)",
        options: ["interpretaron", "interpretaban", "han interpretado", "interpretan"],
        correct: "interpretaron",
        explanation: "Występ 'anoche' wymaga pretérito dla zakończenia! Zakończone przedstawienie teatralne. Teatr to żywa sztuka gdzie aktorzy oddają całą duszę każdemu występowi! 🎭"
      },
      {
        id: "ent_9",
        question: "Me _____ mucho la cultura japonesa tradicional, especialmente la ceremonia del té elegante.",
        translation: "(Bardzo interesuje mnie tradycyjna kultura japońska, szczególnie elegancka ceremonia herbaty)",
        options: ["interesa", "interesan", "gusta", "gustan"],
        correct: "interesa",
        explanation: "'Interesar' jak 'gustar' dla intelektualnego zainteresowania! 'La cultura' singular więc 'interesa'. Kultura to piękny most łączący różne narody świata! 🌏"
      },
      {
        id: "ent_10",
        question: "La función de teatro _____ cancelada por enfermedad repentina del actor principal protagonista.",
        translation: "(Przedstawienie teatralne zostało odwołane z powodu nagłej choroby głównego aktora protagonisty)",
        options: ["fue", "era", "estuvo", "ha sido"],
        correct: "fue",
        explanation: "'Fue cancelada' to zostało odwołane w przeszłości! Pretérito dla jednorazowego wydarzenia. 'Ser' w pasywnej formie. Rozczarowujące ale zdrowie to zawsze priorytet! 😷"
      },
      {
        id: "ent_11",
        question: "Los críticos de cine _____ esta película como una de las mejores del año cinematográfico.",
        translation: "(Krytycy filmowi oceniają ten film jako jeden z najlepszych roku filmowego)",
        options: ["consideran", "piensan", "creen", "opinan"],
        correct: "consideran",
        explanation: "'Considerar' to uznawać i oceniać bardzo formalnie! Krytycy mają swoją profesjonalną opinię. Ale pamiętaj zawsze że twoja osobista opinia też bardzo się liczy! ⭐"
      },
      {
        id: "ent_12",
        question: "En el festival cultural _____ actuaciones de música, danza y teatro de diferentes países del mundo.",
        translation: "(Na festiwalu kulturalnym są występy muzyki, tańca i teatru z różnych krajów świata)",
        options: ["hay", "tienen", "están", "son"],
        correct: "hay",
        explanation: "'Hay' używamy dla wymieniania wydarzeń na festiwalu! To jak lista wszystkich atrakcji. Festiwale celebrują różnorodność - wszystkie kultury mają swoje piękno! 🎪"
      },
      {
        id: "ent_13",
        question: "El protagonista de la novela _____ un detective privado que resuelve crímenes complicados en Barcelona.",
        translation: "(Protagonista powieści jest prywatnym detektywem, który rozwiązuje skomplikowane zbrodnie w Barcelonie)",
        options: ["es", "está", "hace", "tiene"],
        correct: "es",
        explanation: "'Ser' dla profesji i tożsamości postaci literackiej! To kim on jest, jego prawdziwa esencja. Barcelona to idealne tło dla tajemniczych kryminałów! 🕵️"
      },
      {
        id: "ent_14",
        question: "Me _____ leer antes de dormir porque me ayuda a relajarme y desconectar del estrés diario.",
        translation: "(Lubię czytać przed snem, bo pomaga mi się zrelaksować i odłączyć od codziennego stresu)",
        options: ["gusta", "gustan", "encanta", "place"],
        correct: "gusta",
        explanation: "'Leer' infinityw to zawsze singular więc 'gusta'! Czytanie przed snem to wspaniały rytuał - uspokaja umysł i przygotowuje do pięknych marzeń sennych! 📚"
      },
      {
        id: "ent_15",
        question: "La banda de música _____ canciones originales que han compuesto ellos mismos con talento.",
        translation: "(Zespół muzyczny gra oryginalne piosenki, które sami skomponowali z talentem)",
        options: ["toca", "juega", "hace", "canta"],
        correct: "toca",
        explanation: "'Tocar' dla wykonywania muzyki instrumentalnej! 'Cantar' to tylko śpiewać. Tworzenie własnej muzyki to najczystsza forma ekspresji - dusza mówi przez piękną melodię! 🎵"
      }
    ]
  },

  health_and_body_advanced: {
    name: "Zdrowie i ciało - zaawansowane",
    description: "Zaawansowane wyrażenia medyczne i zdrowotne",
    icon: Heart,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "health_adv_1",
        question: "El médico me _____ que debo hacer más ejercicio regular y comer más saludablemente cada día.",
        translation: "(Lekarz zalecił mi, że powinienem regularnie więcej ćwiczyć i codziennie zdrowiej jeść)",
        options: ["recomendó", "recomendaba", "ha recomendado", "recomienda"],
        correct: "recomendó",
        explanation: "Konkretna wizyta lekarska wymaga pretérito! 'Recomendó' to dał konkretną rekomendację wtedy. Lekarze zawsze mają rację o zdrowym stylu życia - naprawdę warto słuchać! 💊"
      },
      {
        id: "health_adv_2",
        question: "Me _____ muy mal el estómago después de comer esa comida picante en el restaurante mexicano.",
        translation: "(Bardzo źle mi się zrobiło na żołądku po zjedzeniu tego ostrego jedzenia w meksykańskiej restauracji)",
        options: ["sentó", "sentaba", "ha sentado", "sienta"],
        correct: "sentó",
        explanation: "'Sentar mal' to źle zrobić o jedzeniu! Pretérito dla jednorazowej reakcji organizmu. Pikantne jedzenie nie dla każdego żołądka - poznaj swoje granice! 🌶️"
      },
      {
        id: "health_adv_3",
        question: "_____ muy importante mantener una dieta equilibrada y variada para gozar de buena salud.",
        translation: "(Jest bardzo ważne utrzymywać zrównoważoną i zróżnicowaną dietę, żeby cieszyć się dobrym zdrowiem)",
        options: ["Es", "Está", "Hay", "Tiene"],
        correct: "Es",
        explanation: "'Es importante' to bezosobowe zdanie uniwersalne! 'Ser' dla ogólnych prawd i podstawowych wartości. Zdrowa dieta to fundament długiego życia - jesteś tym co jesz! 🥗"
      },
      {
        id: "health_adv_4",
        question: "Mi abuela _____ de presión arterial alta, por eso tiene que tomar medicamentos todos los días.",
        translation: "(Moja babcia cierpi na wysokie ciśnienie krwi, dlatego musi codziennie brać leki)",
        options: ["sufre", "padece", "tiene", "está"],
        correct: "sufre",
        explanation: "'Sufrir de' to cierpieć na przewlekłą chorobę! Pokazuje długotrwały problem zdrowotny. Dbanie o zdrowie w starszym wieku jest absolutnie kluczowe - medycyna pomaga! 💊"
      },
      {
        id: "health_adv_5",
        question: "Es fundamental _____ bien cada noche para que el cuerpo se recupere y regenere completamente.",
        translation: "(Fundamentalne jest dobrze spać każdej nocy, żeby ciało się odzyskało i całkowicie zregenerowało)",
        options: ["dormir", "durmiendo", "dormido", "duermes"],
        correct: "dormir",
        explanation: "'Es fundamental + infinitivo' to uniwersalna zasada ogólna! Infinityw dla uniwersalnych prawd życiowych. Sen to najlepszy naturalny lekarz - organizm naprawia się podczas snu! 😴"
      },
      {
        id: "health_adv_6",
        question: "Me _____ la cabeza terriblemente desde esta mañana temprano, creo que es por el estrés laboral.",
        translation: "(Okropnie boli mnie głowa od wcześnie rana, myślę że to przez stres w pracy)",
        options: ["duele", "dolor", "está doliendo", "ha dolido"],
        correct: "duele",
        explanation: "'Doler' używamy dokładnie jak 'gustar'! 'Me duele la cabeza' (boli mnie głowa). Ból to ważny sygnał ciała - słuchaj go uważnie! Stres wymaga zarządzania! 🤕"
      },
      {
        id: "health_adv_7",
        question: "Para prevenir enfermedades _____ lavarse las manos frecuentemente con agua y jabón antibacterial.",
        translation: "(Żeby zapobiec chorobom trzeba często myć ręce wodą i antybakteryjnym mydłem)",
        options: ["hay que", "debe", "tiene que", "necesita"],
        correct: "hay que",
        explanation: "'Hay que' to bezosobowa konieczność dla absolutnie wszystkich! Ogólna złota zasada higieny. Proste mycie rąk ratuje życie codziennie - małe gesty wielki wpływ! 🧼"
      },
      {
        id: "health_adv_8",
        question: "El paciente _____ operado con éxito de apendicitis aguda en el hospital general ayer.",
        translation: "(Pacjent został pomyślnie zoperowany z ostrego zapalenia wyrostka robaczkowego w szpitalu ogólnym wczoraj)",
        options: ["fue", "era", "estuvo", "ha sido"],
        correct: "fue",
        explanation: "'Fue operado' to został zoperowany wczoraj! Pasywna forma pretérito dla jednorazowego zabiegu medycznego. Nowoczesna medycyna ratuje życie codziennie - to cudowna nauka! 🏥"
      },
      {
        id: "health_adv_9",
        question: "_____ alérgico al polen de las flores en primavera, por eso estornudo constantemente esos meses.",
        translation: "(Jestem uczulony na pyłek kwiatów wiosną, dlatego kicham ciągle w tych miesiącach)",
        options: ["Soy", "Estoy", "Tengo", "Sufro"],
        correct: "Soy",
        explanation: "'Ser alérgico' to mieć alergię jako stałą cechę! To część twojego organizmu na zawsze, nie stan czasowy. Alergię masz zawsze ale objawy tylko wiosną! 🌸"
      },
      {
        id: "health_adv_10",
        question: "Deberías _____ al médico si los síntomas molestos persisten más de tres días seguidos.",
        translation: "(Powinieneś pójść do lekarza, jeśli denerwujące objawy utrzymują się więcej niż trzy dni z rzędu)",
        options: ["ir", "vas", "yendo", "ido"],
        correct: "ir",
        explanation: "'Deber + infinitivo' to powinien coś zrobić jako rada! Infinityw zawsze po czasownikach modalnych. Uporczywe objawy wymagają profesjonalnej diagnozy - nigdy nie ignoruj! 🩺"
      },
      {
        id: "health_adv_11",
        question: "Me _____ mareo cuando viajo en coche por carreteras muy sinuosas de montaña.",
        translation: "(Robi mi się niedobrze, kiedy podróżuję samochodem po bardzo krętych górskich drogach)",
        options: ["da", "pone", "hace", "viene"],
        correct: "da",
        explanation: "'Dar mareo' to wywoływać zawroty głowy niestety! 'Me da' pokazuje że coś zewnętrznego wywołuje reakcję w tobie. Choroba lokomocyjna dotyka wielu - patrz na horyzont! 🚗"
      },
      {
        id: "health_adv_12",
        question: "El dentista me _____ una muela del juicio infectada que me causaba mucho dolor intenso.",
        translation: "(Dentysta usunął mi zainfekowany ząb mądrości, który powodował mi bardzo intensywny ból)",
        options: ["sacó", "sacaba", "ha sacado", "saca"],
        correct: "sacó",
        explanation: "'Sacar' to wyciągnąć i usunąć coś! Pretérito dla całkowicie zakończonego zabiegu. Zęby mądrości to ostatni prezent ewolucji - czasem trzeba ich pozbyć! 🦷"
      },
      {
        id: "health_adv_13",
        question: "_____ muy resfriado con fiebre alta, así que me quedé en cama todo el día descansando.",
        translation: "(Byłem bardzo przeziębiony z wysoką gorączką, więc zostałem w łóżku cały dzień odpoczywając)",
        options: ["Estaba", "Era", "Estuve", "Fui"],
        correct: "Estaba",
        explanation: "'Estar resfriado' to być przeziębionym teraz! Imperfecto dla stanu trwającego przez czas w przeszłości. Odpoczynek to najlepsza naturalna medycyna dla przeziębienia! 🤧"
      },
      {
        id: "health_adv_14",
        question: "Para mantener un peso saludable _____ combinar ejercicio regular con alimentación balanceada adecuada.",
        translation: "(Żeby utrzymać zdrową wagę trzeba łączyć regularny ćwiczenia ze zrównoważonym odpowiednim odżywianiem)",
        options: ["hay que", "debe", "tiene que", "necesita"],
        correct: "hay que",
        explanation: "'Hay que' dla uniwersalnej zasady zdrowotnej dla wszystkich! To prawda dla każdego człowieka. Równowaga to złoty klucz - ani za mało ani za dużo! ⚖️"
      },
      {
        id: "health_adv_15",
        question: "Me _____ mucho las articulaciones de las rodillas cuando hace frío húmedo y lluvioso afuera.",
        translation: "(Bardzo bolą mnie stawy kolan, kiedy jest zimno, wilgotno i deszczowo na zewnątrz)",
        options: ["duelen", "duele", "dolor", "dolían"],
        correct: "duelen",
        explanation: "'Las articulaciones' liczba mnoga wymaga 'duelen'! Pogoda wpływa na ciało realnie - to zauważali już nasi mądrzy przodkowie. Natura mówi bezpośrednio do nas! 🦴"
      }
    ]
  },

  comparisons_and_contrasts: {
    name: "Porównania i przeciwstawienia",
    description: "Porównuj rzeczy i osoby po hiszpańsku",
    icon: Coins,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_1",
        question: "Mi hermana es _____ alta que yo, mide casi un metro ochenta de estatura.",
        translation: "(Moja siostra jest wyższa niż ja, mierzy prawie metr osiemdziesiąt wzrostu)",
        options: ["más", "muy", "mucho", "tan"],
        correct: "más",
        explanation: "'Más... que' to absolutna podstawa porównań! Ktoś ma więcej czegoś niż ktoś inny. Proste i logiczne jak kolejne schodki wzrostu w górę! 📏"
      },
      {
        id: "comp_2",
        question: "Esta ciudad es _____ interesante como Barcelona pero menos turística y más tranquila.",
        translation: "(To miasto jest równie interesujące jak Barcelona, ale mniej turystyczne i spokojniejsze)",
        options: ["tan", "tanto", "más", "muy"],
        correct: "tan",
        explanation: "'Tan... como' to równość w porównaniu! Tak samo interesujące. 'Tan' zawsze przed przymiotnikami. To jak waga w równowadze - dokładnie ta sama wartość! ⚖️"
      },
      {
        id: "comp_3",
        question: "Tengo _____ trabajo como tú esta semana, ambos estamos muy ocupados con proyectos importantes.",
        translation: "(Mam tyle samo pracy co ty w tym tygodniu, oboje jesteśmy bardzo zajęci ważnymi projektami)",
        options: ["tanto", "tan", "más", "mucho"],
        correct: "tanto",
        explanation: "'Tanto... como' używamy dla porównania ilości! 'Tanto trabajo' to dużo pracy równo. Współczucie w przeciążeniu pracą łączy ludzi w trudzie! 💼"
      },
      {
        id: "comp_4",
        question: "Este restaurante es mucho _____ caro que el otro, pero la comida es de mejor calidad.",
        translation: "(Ta restauracja jest dużo droższa niż tamta, ale jedzenie jest lepszej jakości)",
        options: ["más", "muy", "mucho", "tan"],
        correct: "más",
        explanation: "'Mucho más' to dużo bardziej intensywnie! Intensyfikator przed 'más'. Jakość zawsze kosztuje więcej - czasem naprawdę warto zapłacić za dobrą kuchnię! 🍽️"
      },
      {
        id: "comp_5",
        question: "Mi hermano menor es _____ inteligente de todos los estudiantes de su clase escolar.",
        translation: "(Mój młodszy brat jest najbardziej inteligentny ze wszystkich studentów swojej klasy szkolnej)",
        options: ["el más", "más", "muy", "tan"],
        correct: "el más",
        explanation: "'El más' to stopień najwyższy absolutny! Rodzajnik jest absolutnie kluczowy tutaj. Najinteligentniejszy w klasie to wielkie wspaniałe osiągnięcie - dumni rodzice! 🏆"
      },
      {
        id: "comp_6",
        question: "Esta película es _____ peor que he visto en toda mi vida, no la recomiendo a nadie.",
        translation: "(Ten film jest najgorszy, jaki widziałem w całym moim życiu, nie polecam go nikomu)",
        options: ["la", "el", "lo", "las"],
        correct: "la",
        explanation: "'La película' żeńska wymaga 'la más lub menos'! 'La peor' to najgorsza forma. Złe filmy uczą nas cenić naprawdę dobre - kontrast zawsze pomaga! 🎬"
      },
      {
        id: "comp_7",
        question: "Prefiero el café _____ que el té porque me da más energía por la mañana.",
        translation: "(Wolę kawę bardziej niż herbatę, bo daje mi więcej energii rano)",
        options: ["más", "mejor", "mayor", "muy"],
        correct: "más",
        explanation: "'Preferir algo más que' to wolę bardziej wyraźnie! Bezpośrednie porównanie osobistych preferencji. Kawa versus herbata to wieczna debata - każdy ma swoją ulubioną stronę! ☕"
      },
      {
        id: "comp_8",
        question: "Mi ciudad natal es menos _____ que Madrid pero tiene mucho más encanto personal auténtico.",
        translation: "(Moje rodzinne miasto jest mniej wielkie niż Madryt, ale ma dużo więcej autentycznego osobistego uroku)",
        options: ["grande", "gran", "mayor", "pequeña"],
        correct: "grande",
        explanation: "'Menos grande' to dosłownie mniejsze! Możesz też powiedzieć 'más pequeño'. Małe miasta mają prawdziwą duszę - absolutnie wszyscy się tam znają! 🏘️"
      },
      {
        id: "comp_9",
        question: "Cuanto _____ practicas el idioma extranjero, más rápido progresarás en tu aprendizaje constante.",
        translation: "(Im więcej ćwiczysz obcy język, tym szybciej będziesz postępować w swojej ciągłej nauce)",
        options: ["más", "mucho", "muy", "tanto"],
        correct: "más",
        explanation: "'Cuanto más... más' to im więcej tym więcej! Proporcjonalna relacja przyczynowa. To złota zasada nauki wszystkich języków - praktyka naprawdę czyni mistrza! 📚"
      },
      {
        id: "comp_10",
        question: "Esta casa moderna tiene _____ habitaciones como la antigua pero es más luminosa y espaciosa.",
        translation: "(Ten nowoczesny dom ma tyle samo pokoi co stary, ale jest bardziej jasny i przestronny)",
        options: ["tantas", "tanto", "tan", "más"],
        correct: "tantas",
        explanation: "'Tantas habitaciones como' dla dokładnie równej liczby! 'Habitaciones' żeńskie więc 'tantas'. Jakość przestrzeni życiowej to nie tylko sama liczba pokoi! 🏠"
      },
      {
        id: "comp_11",
        question: "Mi hermana mayor gana _____ dinero que yo porque tiene un puesto más alto en la empresa.",
        translation: "(Moja starsza siostra zarabia więcej pieniędzy niż ja, bo ma wyższe stanowisko w firmie)",
        options: ["más", "mucho", "muy", "tanto"],
        correct: "más",
        explanation: "'Más dinero que' to więcej pieniędzy niż ktoś! Bezpośrednie porównanie zarobków finansowych. Wyższe stanowisko równa się wyższa pensja - to prosta logika korporacyjna! 💰"
      },
      {
        id: "comp_12",
        question: "Hoy hace _____ frío como ayer, la temperatura no ha cambiado nada en absoluto.",
        translation: "(Dziś jest tak samo zimno jak wczoraj, temperatura wcale się nie zmieniła)",
        options: ["tanto", "tan", "más", "muy"],
        correct: "tanto",
        explanation: "'Tanto frío como' dla równości pogodowej! 'Hacer' z pogodą zawsze używa 'tanto'. Stabilna pogoda zimowa jest przewidywalna - przynajmniej to wiemy! ❄️"
      },
      {
        id: "comp_13",
        question: "Este problema matemático es _____ más difícil de lo que pensaba al principio.",
        translation: "(Ten problem matematyczny jest dużo trudniejszy niż myślałem na początku)",
        options: ["mucho", "muy", "más", "tanto"],
        correct: "mucho",
        explanation: "'Mucho más' intensyfikuje całe porównanie! Nigdy 'muy' przed 'más'. Matematyka bywa naprawdę bardzo zaskakująca - pozory często bardzo mylą! 🔢"
      },
      {
        id: "comp_14",
        question: "Ella canta _____ bien como una profesional, aunque nunca estudió música formalmente en conservatorio.",
        translation: "(Ona śpiewa tak dobrze jak profesjonalka, chociaż nigdy nie studiowała muzyki formalnie w konserwatorium)",
        options: ["tan", "tanto", "muy", "más"],
        correct: "tan",
        explanation: "'Tan bien como' dla sposobu robienia czegoś! 'Tan' używamy przed przysłówkami i przymiotnikami zawsze. Naturalny talent to prawdziwy dar - niektórzy rodzą się z muzyką! 🎤"
      },
      {
        id: "comp_15",
        question: "Mi nuevo trabajo es _____ mejor que el anterior en todos los aspectos posibles imaginables.",
        translation: "(Moja nowa praca jest dużo lepsza niż poprzednia we wszystkich możliwych wyobrażalnych aspektach)",
        options: ["mucho", "muy", "más", "tan"],
        correct: "mucho",
        explanation: "'Mucho mejor' to dużo lepsze wyraźnie! 'Mejor' to już comparativo, 'mucho' tylko go wzmacnia. Znalezienie lepszej pracy to wielkie błogosławieństwo - warto celebrować! 🎉"
      }
    ]
  },

  subjunctive_basic_intro: {
    name: "Tryb łączący - wprowadzenie",
    description: "Pierwsze kroki w trybie subjuntivo",
    icon: Star,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "subj_1",
        question: "Espero que _____ un buen día hoy y que todo te salga bien en el trabajo.",
        translation: "(Mam nadzieję, że będziesz mieć dzisiaj dobry dzień i że wszystko pójdzie ci dobrze w pracy)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Esperar que' zawsze wymaga trybu łączącego! To nadzieja i życzenie niepewne. Tryb łączący to cały świat możliwości nie pewności. Życzymy innym dobrze każdego dnia! 🌟"
      },
      {
        id: "subj_2",
        question: "Es importante que todos los estudiantes _____ puntualmente a clase cada mañana sin retrasos.",
        translation: "(Ważne jest, żeby wszyscy studenci przychodzili punktualnie na zajęcia każdego ranka bez spóźnień)",
        options: ["lleguen", "llegan", "llegarán", "llegaron"],
        correct: "lleguen",
        explanation: "'Es importante que' wyraża moralną konieczność! Zawsze wymaga trybu łączącego. To nie fakt ale to co powinno być. Zasady tworzą harmonię grupową! ⏰"
      },
      {
        id: "subj_3",
        question: "Quiero que me _____ la verdad completa sobre lo que realmente pasó ayer por la tarde.",
        translation: "(Chcę, żebyś powiedział mi całą prawdę o tym, co naprawdę się stało wczoraj po południu)",
        options: ["digas", "dices", "dirás", "dijiste"],
        correct: "digas",
        explanation: "'Querer que' wyraża silne pragnienie! Chcesz żeby ktoś coś zrobił ale to niepewne więc tryb łączący. Prawda zawsze wyzwala - kłamstwa więzią duszę! 💬"
      },
      {
        id: "subj_4",
        question: "No creo que _____ suficiente tiempo para terminar todo el proyecto antes del viernes próximo.",
        translation: "(Nie sądzę, że będzie wystarczająco czasu, żeby ukończyć cały projekt przed przyszłym piątkiem)",
        options: ["haya", "hay", "habrá", "hubiera"],
        correct: "haya",
        explanation: "'No creer que' wyraża wątpliwość i niepewność! Negatywne przekonanie wymaga trybu łączącego zawsze. Gdy wątpisz mocno używaj subjuntivo - to gramatyka niepewności! 🤔"
      },
      {
        id: "subj_5",
        question: "Ojalá que mañana _____ buen tiempo para poder ir de excursión a las montañas cercanas.",
        translation: "(Oby jutro była dobra pogoda, żebyśmy mogli pójść na wycieczkę w pobliskie góry)",
        options: ["haga", "hace", "hará", "hacía"],
        correct: "haga",
        explanation: "'Ojalá que' ZAWSZE ZAWSZE tryb łączący! To arabskie słowo znaczące 'obyby Allah chciał'. Czyste życzenie kompletnie bez żadnej pewności. Modlitwa do pogody! 🙏"
      },
      {
        id: "subj_6",
        question: "Dudo mucho que ellos _____ venir a la fiesta porque viven muy lejos de aquí.",
        translation: "(Bardzo wątpię, że oni będą mogli przyjść na imprezę, bo mieszkają bardzo daleko stąd)",
        options: ["puedan", "pueden", "podrán", "podían"],
        correct: "puedan",
        explanation: "'Dudar que' to wątpić intensywnie! Zawsze tryb łączący bo wątpliwość nie jest twardym faktem. Odległość to wyzwanie ale prawdziwi przyjaciele znajdują sposób! 🚗"
      },
      {
        id: "subj_7",
        question: "Es necesario que _____ más atención en clase si quieres aprobar el examen final.",
        translation: "(Konieczne jest, żebyś zwracał więcej uwagi na zajęciach, jeśli chcesz zdać egzamin końcowy)",
        options: ["prestes", "prestas", "prestarás", "prestaste"],
        correct: "prestes",
        explanation: "'Es necesario que' wyraża pilną konieczność! To nie rozkaz ale bardzo pilna potrzeba. Uwaga w klasie to mądra inwestycja w twoją przyszłość - zbierasz cenną wiedzę! 👂"
      },
      {
        id: "subj_8",
        question: "Te recomiendo que _____ ese libro fantástico, te va a encantar la historia emocionante.",
        translation: "(Polecam ci, żebyś przeczytał tę fantastyczną książkę, zachwyci cię ekscytująca historia)",
        options: ["leas", "lees", "leerás", "leíste"],
        correct: "leas",
        explanation: "'Recomendar que' to rada wymagająca subjuntivo zawsze! Sugestia przyjacielska nie fakt. Rekomendacje książkowe to prawdziwe prezenty przyjaźni - dzielenie się literackimi skarbami! 📚"
      },
      {
        id: "subj_9",
        question: "Me alegro mucho de que _____ aprobado todos tus exámenes finales con buenas notas.",
        translation: "(Bardzo się cieszę, że zdałeś wszystkie swoje końcowe egzaminy z dobrymi ocenami)",
        options: ["hayas", "has", "habías", "hubiste"],
        correct: "hayas",
        explanation: "'Alegrarse de que' wyraża radość emocjonalną! Emocja o czymś co się stało - presente perfecto subjuntivo. Sukces przyjaciela to twój wspólny sukces! 🎓"
      },
      {
        id: "subj_10",
        question: "Es probable que _____ tarde mañana por la mañana a causa del mal tiempo previsto.",
        translation: "(Prawdopodobnie przyjdę późno jutro rano z powodu przewidywanej złej pogody)",
        options: ["llegue", "llego", "llegaré", "llegaba"],
        correct: "llegue",
        explanation: "'Es probable que' to samo prawdopodobieństwo! Nie pewność więc zawsze tryb łączący. Pogoda często dyktuje nasze codzienne plany - musimy być elastyczni! 🌧️"
      },
      {
        id: "subj_11",
        question: "No es cierto que todos los españoles _____ flamenco, es un estereotipo cultural falso.",
        translation: "(Nie jest prawdą, że wszyscy Hiszpanie tańczą flamenco, to fałszywy stereotyp kulturowy)",
        options: ["bailen", "bailan", "bailarán", "bailaban"],
        correct: "bailen",
        explanation: "'No es cierto que' zaprzecza faktowi silnie! Negacja zawsze używa subjuntivo. Stereotypy upraszczają rzeczywistość - każda kultura jest bogata i bardzo różnorodna! 💃"
      },
      {
        id: "subj_12",
        question: "Necesito que me _____ con la mudanza este fin de semana, hay muchas cajas pesadas.",
        translation: "(Potrzebuję, żebyś mi pomógł z przeprowadzką w ten weekend, jest wiele ciężkich pudełek)",
        options: ["ayudes", "ayudas", "ayudarás", "ayudaste"],
        correct: "ayudes",
        explanation: "'Necesitar que' wyraża potrzebę od innych osób! Subjuntivo dla prośby o pomoc. Przeprowadzki są naprawdę ciężkie - pomoc przyjaciół jest absolutnie bezcenna! 📦"
      },
      {
        id: "subj_13",
        question: "Tal vez _____ razón en lo que dices sobre la situación política actual del país.",
        translation: "(Być może masz rację w tym, co mówisz o obecnej sytuacji politycznej kraju)",
        options: ["tengas", "tienes", "tendrás", "tuviste"],
        correct: "tengas",
        explanation: "'Tal vez' może używać subjuntivo dla podkreślenia! Podkreśla kompletną niepewność. 'Być może' to zdecydowanie nie 'na pewno' - to przestrzeń dla wątpliwości i dyskusji! 🗳️"
      },
      {
        id: "subj_14",
        question: "No pienso que _____ buena idea salir ahora con esta tormenta terrible que está cayendo.",
        translation: "(Nie myślę, że to dobry pomysł wychodzić teraz z tą straszną burzą, która pada)",
        options: ["sea", "es", "será", "era"],
        correct: "sea",
        explanation: "'No pensar que' wyraża brak przekonania! Negatywne myślenie zawsze wymaga subjuntivo. W burzy zostań bezpiecznie w domu - natura jest niezwykle potężna! ⛈️"
      },
      {
        id: "subj_15",
        question: "Cuando _____ mayor y tenga mi propio dinero, viajaré por todo el mundo sin parar.",
        translation: "(Kiedy będę starszy i będę miał własne pieniądze, będę podróżować po całym świecie bez przerwy)",
        options: ["sea", "soy", "seré", "era"],
        correct: "sea",
        explanation: "'Cuando' z przyszłością zawsze wymaga subjuntivo! Nie wiesz dokładnie kiedy to nastąpi - niepewność czasu. Marzenia młodości napędzają całe nasze życie! ✈️"
      }
    ]
  }
};

export default part12Categories;
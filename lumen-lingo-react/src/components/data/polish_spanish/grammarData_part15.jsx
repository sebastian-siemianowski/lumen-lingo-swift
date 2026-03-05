/**
 * POLISH → SPANISH GRAMMAR - PART 15
 * 4 categories, 15 questions each - Final mastery
 */

import { Laptop, TrendingUp, MessageCircle, Award } from "lucide-react";

export const part15Categories = {
  future_tense_expressions: {
    name: "Czas przyszły i wyrażenia",
    description: "Mów o przyszłości z pewnością",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "fut_1",
        question: "El año que viene _____ a vivir a España para estudiar español intensivamente en Salamanca.",
        translation: "(W przyszłym roku przeprowadzę się, żeby mieszkać w Hiszpanii i intensywnie uczyć się hiszpańskiego w Salamance)",
        options: ["voy", "iré", "iba", "he ido"],
        correct: "voy",
        explanation: "'Ir a + infinitivo' to najbardziej naturalna przyszłość! Więcej używana niż futuro simple. To pokazuje plan i gotowość psychiczną. Salamanca to idealne miasto dla nauki! 🎓"
      },
      {
        id: "fut_2",
        question: "Dentro de cinco años probablemente _____ trabajando en una empresa internacional grande y prestigiosa.",
        translation: "(Za pięć lat prawdopodobnie będę pracować w dużej i prestiżowej międzynarodowej firmie)",
        options: ["estaré", "seré", "voy a estar", "estoy"],
        correct: "estaré",
        explanation: "'Estar + gerundio' w przyszłości to futuro continuo! Akcja trwająca w przyszłości. To wizja twojej kariery - marzenia kierują działaniami! 💼"
      },
      {
        id: "fut_3",
        question: "¿Qué _____ cuando termines tus estudios universitarios finalmente después de tantos años de esfuerzo?",
        translation: "(Co będziesz robić, kiedy w końcu skończysz studia uniwersyteckie po tylu latach wysiłku?)",
        options: ["harás", "haces", "vas a hacer", "hiciste"],
        correct: "harás",
        explanation: "Pytanie o przyszłość używa futuro! 'Harás' to będziesz robić formalnie. Koniec studiów to początek nowego rozdziału - ekscytujący i trochę przerażający! 🎓"
      },
      {
        id: "fut_4",
        question: "_____ las diez de la noche cuando lleguemos finalmente al hotel después del viaje largo agotador.",
        translation: "(Będzie dziesiąta wieczorem, kiedy w końcu dotrzemy do hotelu po długiej wyczerpującej podróży)",
        options: ["Serán", "Estarán", "Van a ser", "Son"],
        correct: "Serán",
        explanation: "'Ser + hora' w przyszłości dla przypuszczenia! 'Serán las diez' to szacowanie czasu przyszłego. Długie podróże zmęczają ale warto - cel czeka! ⏰"
      },
      {
        id: "fut_5",
        question: "Para entonces ya _____ mi propio negocio exitoso y seré mi propio jefe independiente feliz.",
        translation: "(Do tego czasu już będę miał swój własny udany biznes i będę swoim własnym szczęśliwym niezależnym szefem)",
        options: ["tendré", "tengo", "voy a tener", "tenía"],
        correct: "tendré",
        explanation: "'Para entonces' sygnalizuje futuro! Marzenie przedsiębiorcze o niezależności finansowej. Własny biznes to wolność ale też odpowiedzialność - odwaga się opłaca! 🚀"
      },
      {
        id: "fut_6",
        question: "Supongo que _____ cansado después del viaje tan largo, ¿quieres descansar un poco primero?",
        translation: "(Przypuszczam, że będziesz zmęczony po tak długiej podróży, czy chcesz najpierw trochę odpocząć?)",
        options: ["estarás", "serás", "vas a estar", "estás"],
        correct: "estarás",
        explanation: "Futuro dla przypuszczeń o teraz! 'Estarás cansado' to logiczne założenie troski. Długie podróże wyczerpują - odpoczynek przed zabawą jest mądry! 😴"
      },
      {
        id: "fut_7",
        question: "Mañana a estas horas ya _____ volando hacia nuestro destino de vacaciones soñado en el Caribe.",
        translation: "(Jutro o tej porze już będziemy lecieli w kierunku naszego wymarzonego wakacyjnego miejsca na Karaibach)",
        options: ["estaremos", "seremos", "vamos a estar", "estamos"],
        correct: "estaremos",
        explanation: "'Estar + gerundio' w przyszłości pokazuje akcję w toku! Jutro o tej godzinie będziecie w powietrzu. Antycypacja wakacji jest słodka! ✈️"
      },
      {
        id: "fut_8",
        question: "¿Crees que algún día _____ posible viajar a Marte como turistas normales sin entrenamiento especial?",
        translation: "(Czy sądzisz, że kiedyś będzie możliwe podróżować na Marsa jako normalni turyści bez specjalnego treningu?)",
        options: ["será", "estará", "va a ser", "es"],
        correct: "será",
        explanation: "'Algún día será' to spekulacja o przyszłości dalekiej! Futuro dla ogólnych przewidywań. Technologia rozwija się szybko - Mars może być bliżej niż myślimy! 🚀"
      },
      {
        id: "fut_9",
        question: "El concierto _____ cancelado si continúa lloviendo tan fuerte como ahora por la tarde.",
        translation: "(Koncert zostanie odwołany, jeśli będzie nadal padać tak mocno jak teraz po południu)",
        options: ["será", "estará", "va a ser", "es"],
        correct: "será",
        explanation: "'Será cancelado' to przyszła forma pasywna! Warunkowe odwołanie zależne od pogody. Koncerty outdoor są ryzykowne - natura decyduje! 🌧️"
      },
      {
        id: "fut_10",
        question: "_____ muchos cambios importantes en la empresa durante los próximos meses de reorganización total.",
        translation: "(Będzie wiele ważnych zmian w firmie podczas przyszłych miesięcy całkowitej reorganizacji)",
        options: ["Habrá", "Será", "Estará", "Tendrá"],
        correct: "Habrá",
        explanation: "'Habrá' to będzie/będą dla istnienia przyszłego! Bezosobowe przewidywanie. Zmiany w pracy stresują ale mogą być pozytywne - adaptacja jest kluczem! 💼"
      },
      {
        id: "fut_11",
        question: "Para cuando vuelvas de vacaciones, ya _____ terminado de renovar completamente tu apartamento viejo.",
        translation: "(Kiedy wrócisz z wakacji, już skończymy całkowicie odnawiać twoje stare mieszkanie)",
        options: ["habremos", "hemos", "habríamos", "vamos a haber"],
        correct: "habremos",
        explanation: "'Futuro perfecto' dla akcji ukończonej przed przyszłym momentem! Remont zakończy się PRZED powrotem. To jak obietnica czasowa - wszystko gotowe na przyjazd! 🏠"
      },
      {
        id: "fut_12",
        question: "¿Dónde _____ mis llaves? Las he buscado por toda la casa pero no las encuentro por ningún lado.",
        translation: "(Gdzie będą moje klucze? Szukałem ich po całym domu, ale nie znajduję ich nigdzie)",
        options: ["estarán", "serán", "habrán", "van a estar"],
        correct: "estarán",
        explanation: "Futuro dla przypuszczeń o teraz! 'Dónde estarán' to zastanawianie się gdzie mogą być. Zgubione klucze to zagadka która frustruje wszystkich! 🔍"
      },
      {
        id: "fut_13",
        question: "Los científicos predicen que en el futuro cercano _____ coches que se conducirán solos completamente autónomos.",
        translation: "(Naukowcy przewidują, że w bliskiej przyszłości będą samochody, które będą jeździły same całkowicie autonomicznie)",
        options: ["habrá", "será", "estará", "tendrá"],
        correct: "habrá",
        explanation: "'Habrá' dla przyszłych wynalazków i istnienia! Autonomiczne samochody to już prawie rzeczywistość. Technologia zmienia życie szybciej niż myślimy - przyszłość jest ekscytująca! 🚗"
      },
      {
        id: "fut_14",
        question: "Si sigues estudiando con dedicación constante, en dos años _____ español perfectamente con fluidez nativa.",
        translation: "(Jeśli będziesz kontynuować naukę z ciągłym poświęceniem, za dwa lata będziesz mówił hiszpańsko perfekcyjnie z rodzimą płynnością)",
        options: ["hablarás", "hablas", "vas a hablar", "hablabas"],
        correct: "hablarás",
        explanation: "Warunek realny używa futuro w rezultacie! Obietnica postępu przy wysiłku. Dwa lata to realistyczny czas dla płynności - konsystencja wygrywa! 🗣️"
      },
      {
        id: "fut_15",
        question: "Me pregunto si algún día _____ la persona adecuada con quien compartir mi vida entera felizmente.",
        translation: "(Zastanawiam się, czy kiedyś znajdę odpowiednią osobę, z którą szczęśliwie dzielić całe moje życie)",
        options: ["encontraré", "encuentro", "voy a encontrar", "encontraba"],
        correct: "encontraré",
        explanation: "'Me pregunto si' z futuro dla spekulacji życiowej! Pytanie egzystencjalne o miłość. Wszyscy mamy takie myśli - wiara i cierpliwość prowadzą! 💕"
      }
    ]
  },

  talking_about_past: {
    name: "Opowiadanie o przeszłości",
    description: "Narracja i opowiadanie historii",
    icon: MessageCircle,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "narr_1",
        question: "Cuando _____ joven, solía pasar todos los veranos en casa de mis abuelos en el campo verde.",
        translation: "(Kiedy byłem młody, spędzałem wszystkie lata w domu moich dziadków na zielonej wsi)",
        options: ["era", "fui", "estaba", "he sido"],
        correct: "era",
        explanation: "'Era joven' to byłem młody jako tło! Imperfecto dla opisów i kontekstu. 'Solía' też imperfecto dla nawyków przeszłych. Wspomnienia dzieciństwa są najsłodsze! 🌾"
      },
      {
        id: "narr_2",
        question: "Aquel verano inolvidable _____ a Italia por primera vez y me enamoré completamente del país hermoso.",
        translation: "(Tamtego niezapomnianego lata pojechałem do Włoch po raz pierwszy i zakochałem się całkowicie w pięknym kraju)",
        options: ["fui", "iba", "he ido", "voy"],
        correct: "fui",
        explanation: "'Aquel verano fui' to konkretny wyjazd! Pretérito dla jednorazowego wydarzenia. Pierwsza wizyta zawsze specjalna - otwiera nowe horyzonty świata! 🇮🇹"
      },
      {
        id: "narr_3",
        question: "Mientras _____ tranquilamente en el parque, vi a un viejo amigo que no veía hace años.",
        translation: "(Podczas gdy spokojnie spacerowałem w parku, zobaczyłem starego przyjaciela, którego nie widziałem od lat)",
        options: ["paseaba", "paseé", "he paseado", "paseo"],
        correct: "paseaba",
        explanation: "'Mientras paseaba' to tło działania! Imperfecto dla ciągłej akcji przerwanej wydarzeniem. 'Vi' to pretérito. Przypadkowe spotkania są magiczne - los działa! 🌳"
      },
      {
        id: "narr_4",
        question: "De niña, mi abuela nos _____ cuentos fascinantes antes de dormir cada noche sin falta nunca.",
        translation: "(Jako dziecko moja babcia opowiadała nam fascynujące bajki przed snem każdej nocy bez wyjątku)",
        options: ["contaba", "contó", "ha contado", "cuenta"],
        correct: "contaba",
        explanation: "'De niña contaba' to rutyna dzieciństwa! Imperfecto dla powtarzanych działań przeszłych. Bajki babć budują wyobraźnię - te momenty żyją w sercu! 📖"
      },
      {
        id: "narr_5",
        question: "Ese día histórico todo _____ diferente, la gente estaba nerviosa esperando los resultados electorales importantes.",
        translation: "(Tego historycznego dnia wszystko było inne, ludzie byli nerwowi czekając na ważne wyniki wyborcze)",
        options: ["era", "fue", "estaba", "estuvo"],
        correct: "era",
        explanation: "'Todo era diferente' to opis atmosfery! Imperfecto maluje scenę. Dni wyborcze są pełne napięcia - demokracja to intensywne doświadczenie! 🗳️"
      },
      {
        id: "narr_6",
        question: "Justo cuando _____ a salir de casa, empezó a llover torrencialmente así que tuve que volver.",
        translation: "(Akurat kiedy wychodziłem z domu, zaczęło padać ulewnie, więc musiałem wrócić)",
        options: ["iba", "fui", "he ido", "voy"],
        correct: "iba",
        explanation: "'Iba a salir' to zamierzałem wyjść! Imperfecto dla przerwane intencji. Deszcz zmienił plany - natura dyktuje warunki! ☔"
      },
      {
        id: "narr_7",
        question: "En aquella época difícil no _____ teléfonos móviles, la vida era más simple pero menos conectada.",
        translation: "(W tamtej trudnej epoce nie było telefonów komórkowych, życie było prostsze, ale mniej połączone)",
        options: ["había", "hubo", "ha habido", "hay"],
        correct: "había",
        explanation: "'En aquella época había' to było wtedy! Imperfecto dla opisów przeszłości. Świat przed smartfonami wydaje się prehistoryczny - jak szybko zmieniamy! 📱"
      },
      {
        id: "narr_8",
        question: "Recuerdo perfectamente que aquel día memorable _____ mucho sol y todos estábamos contentos alegres.",
        translation: "(Pamiętam perfekcyjnie, że tamtego pamiętnego dnia było dużo słońca i wszyscy byliśmy radośni i weseli)",
        options: ["hacía", "hizo", "ha hecho", "hace"],
        correct: "hacía",
        explanation: "'Hacía sol' to było słonecznie (tło)! Imperfecto dla pogody jako scenerii. Słoneczne dni tworzą najpiękniejsze wspomnienia - światło zapisuje się w pamięci! ☀️"
      },
      {
        id: "narr_9",
        question: "Todos los días _____ al mismo café pequeño del barrio para desayunar tranquilamente antes del trabajo.",
        translation: "(Codziennie chodziłem do tej samej małej kawiarni dzielnicy, żeby spokojnie zjeść śniadanie przed pracą)",
        options: ["iba", "fui", "he ido", "voy"],
        correct: "iba",
        explanation: "'Todos los días iba' to rutyna przeszła! Imperfecto dla powtarzanych nawyków. Stała kawiarnia to drugie biuro - kelner zna twoje zamówienie! ☕"
      },
      {
        id: "narr_10",
        question: "De repente _____ un grito terrible y todos corrimos hacia la ventana para ver qué pasaba afuera.",
        translation: "(Nagle usłyszeliśmy straszny krzyk i wszyscy pobiegliśmy do okna, żeby zobaczyć co się dzieje na zewnątrz)",
        options: ["oímos", "oíamos", "hemos oído", "oímos"],
        correct: "oímos",
        explanation: "'De repente oímos' to nagłe wydarzenie! Pretérito dla szoku i akcji. 'Corrimos' też pretérito. Seria akcji używa pretérito - jak dominujące kostki! 👂"
      },
      {
        id: "narr_11",
        question: "Hace veinte años que mis padres _____ casados y siguen enamorados como el primer día mágico.",
        translation: "(Dwadzieścia lat temu moi rodzice wzięli ślub i nadal są zakochani jak pierwszego magicznego dnia)",
        options: ["se casaron", "se casaban", "se han casado", "se casan"],
        correct: "se casaron",
        explanation: "'Hace + czas + que' używa pretérito! Konkretne wydarzenie 20 lat temu. To moment nie okres. Długie małżeństwa inspirują - miłość trwa! 💑"
      },
      {
        id: "narr_12",
        question: "Siempre _____ con mis amigos de la infancia los sábados para jugar al fútbol en el parque municipal.",
        translation: "(Zawsze spotykałem się z moimi przyjaciółmi z dzieciństwa w soboty, żeby grać w piłkę w miejskim parku)",
        options: ["quedaba", "quedé", "he quedado", "quedo"],
        correct: "quedaba",
        explanation: "'Siempre quedaba' to powtarzana rutyna! Imperfecto dla nawyków które już nie istnieją. Przyjaźnie dzieciństwa są specjalne - czasy niewinności! ⚽"
      },
      {
        id: "narr_13",
        question: "Acababa de llegar a la estación cuando _____ que el tren ya había salido hace cinco minutos.",
        translation: "(Dopiero co dotarłem na stację, kiedy zauważyłem, że pociąg już odjechał pięć minut temu)",
        options: ["noté", "notaba", "he notado", "noto"],
        correct: "noté",
        explanation: "'Notar' to zauważyć nagle! Pretérito dla momentu realizacji. Spóźnienie na pociąg to frustrające - ale następny zawsze przyjdzie! 🚂"
      },
      {
        id: "narr_14",
        question: "Mis hermanos y yo _____ películas de aventuras cada viernes por la noche en familia todos juntos.",
        translation: "(Moi bracia i ja oglądaliśmy filmy przygodowe każdy piątek wieczorem rodzinnie wszyscy razem)",
        options: ["veíamos", "vimos", "hemos visto", "vemos"],
        correct: "veíamos",
        explanation: "'Cada viernes veíamos' to tradycja rodzinna! Imperfecto dla piątkowych rytuałów. Wspólne oglądanie filmów buduje więzi - proste przyjemności są najlepsze! 🎬"
      },
      {
        id: "narr_15",
        question: "Al principio del curso _____ muy difícil entender al profesor, pero ahora lo entiendo perfectamente siempre.",
        translation: "(Na początku kursu było bardzo trudno rozumieć nauczyciela, ale teraz rozumiem go perfekcyjnie zawsze)",
        options: ["era", "fue", "estaba", "estuvo"],
        correct: "era",
        explanation: "'Al principio era' to opis stanu początkowego! Imperfecto dla ciągłego stanu trudności. Pokazuje kontrast z teraz - postęp jest namacalny! 📚"
      }
    ]
  },

  asking_for_help: {
    name: "Proszenie o pomoc",
    description: "Proś o wsparcie grzecznie i skutecznie",
    icon: Laptop,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    questions: [
      {
        id: "help_1",
        question: "¿Me _____ ayudar con esta maleta pesada por favor? Pesa muchísimo y no puedo levantarla sola.",
        translation: "(Czy możesz mi pomóc z tą ciężką walizką proszę? Waży bardzo dużo i nie mogę jej sama podnieść)",
        options: ["puedes", "podrías", "debes", "quieres"],
        correct: "puedes",
        explanation: "'¿Me puedes ayudar?' to proste pytanie o pomoc! Bezpośrednie ale grzeczne. Prosić o pomoc nie jest słabością - to mądrość i zaufanie! 🧳"
      },
      {
        id: "help_2",
        question: "Necesito que alguien me _____ cómo funciona esta máquina complicada del café en la oficina nueva.",
        translation: "(Potrzebuję, żeby ktoś mi wyjaśnił jak działa ta skomplikowana maszyna do kawy w nowym biurze)",
        options: ["explique", "explica", "explicará", "explicó"],
        correct: "explique",
        explanation: "'Necesito que + subjuntivo' dla prośby! Potrzebujesz żeby ktoś coś zrobił. Maszyny do kawy biurowe mogą być skomplikowane - każda inna! ☕"
      },
      {
        id: "help_3",
        question: "¿_____ tan amable de sostenerme la puerta mientras paso con todas estas bolsas de compra?",
        translation: "(Czy byłbyś tak miły, żeby przytrzymać mi drzwi, podczas gdy przechodzę z tymi wszystkimi torbami zakupów?)",
        options: ["Serías", "Eres", "Estás", "Fueras"],
        correct: "Serías",
        explanation: "'¿Serías tan amable?' to super grzeczna prośba! Warunkowy czyni ją delikatną i uprzejmą. Małe gesty uprzejmości czynią społeczeństwo lepszym - bądź miły! 🚪"
      },
      {
        id: "help_4",
        question: "Perdona que te _____, ¿me podrías indicar dónde está la estación de metro más cercana desde aquí?",
        translation: "(Przepraszam, że przeszkadzam, czy mógłbyś mi wskazać gdzie jest najbliższa stacja metra stąd?)",
        options: ["moleste", "molesto", "molestaré", "molesté"],
        correct: "moleste",
        explanation: "'Perdona que te moleste' używa subjuntivo! Super uprzejme otwarcie. Przepraszanie przed pytaniem pokazuje szacunek dla czasu drugiej osoby! 🙏"
      },
      {
        id: "help_5",
        question: "¿Te _____ mucho echarme una mano con la mudanza este sábado? Prometo invitarte a cenar después.",
        translation: "(Czy bardzo cię proszę, żebyś mi pomógł z przeprowadzką tę sobotę? Obiecuję zaprosić cię na kolację potem)",
        options: ["importaría", "molestaría", "costaría", "gustaría"],
        correct: "importaría",
        explanation: "'¿Te importaría?' to czy miałbyś coś przeciwko? Bardzo delikatne. 'Echar una mano' to pomóc idiomatycznie. Przeprowadzki wymagają pomocy - przyjaźń w akcji! 📦"
      },
      {
        id: "help_6",
        question: "Si no es mucha _____, ¿podrías prestarme tu coche solo por unas horas esta tarde?",
        translation: "(Jeśli to nie wielka prośba, czy mógłbyś pożyczyć mi swój samochód tylko na kilka godzin tego popołudnia?)",
        options: ["molestia", "problema", "dificultad", "incomodidad"],
        correct: "molestia",
        explanation: "'Si no es mucha molestia' to jeśli nie kłopot! Minimalizuje prośbę. Pożyczanie samochodu to wielki gest zaufania - szanuj to! 🚗"
      },
      {
        id: "help_7",
        question: "¿Me _____ un favor grande? Necesito que recojas a mi hijo del colegio porque yo llegaré tarde.",
        translation: "(Czy zrobiłbyś mi wielką przysługę? Muszę, żebyś odebrał mojego syna ze szkoły, bo ja przyjdę późno)",
        options: ["harías", "haces", "has hecho", "hiciste"],
        correct: "harías",
        explanation: "'¿Me harías un favor?' to klasyczne pytanie! Warunkowy dla grzeczności maksymalnej. Pomoc z dziećmi to wielkie zaufanie - rodzice pamiętają takie gesty! 👶"
      },
      {
        id: "help_8",
        question: "Disculpa las _____, ¿sabes a qué hora abre el banco mañana por la mañana temprano?",
        translation: "(Przepraszam za kłopot, czy wiesz o której otwiera się bank jutro wcześnie rano?)",
        options: ["molestias", "problemas", "dificultades", "interrupciones"],
        correct: "molestias",
        explanation: "'Disculpa las molestias' to przepraszam za kłopot! Standard uprzejmości przed pytaniem. Pytanie o informacje nie jest kłopotem - ale grzeczność doceniana! 🏦"
      },
      {
        id: "help_9",
        question: "¿Sería posible que me _____ tu libro de cocina española este fin de semana para probar recetas?",
        translation: "(Czy byłoby możliwe, żebyś mi pożyczył swoją książkę kucharską hiszpańską ten weekend żeby wypróbować przepisy?)",
        options: ["prestaras", "prestes", "prestases", "prestarías"],
        correct: "prestaras",
        explanation: "'Sería posible que + imperfecto subjuntivo' to bardzo formalne! Najgrzeczniejsza forma prośby możliwa. Książki kucharskie to skarby - dzielenie się wiedzą kulinarną! 📖"
      },
      {
        id: "help_10",
        question: "Te _____ mucho si pudieras ayudarme a traducir este documento importante al español correcto.",
        translation: "(Byłbym ci bardzo wdzięczny, gdybyś mógł mi pomóc przetłumaczyć ten ważny dokument na poprawny hiszpański)",
        options: ["agradecería", "agradezco", "agradecí", "he agradecido"],
        correct: "agradecería",
        explanation: "'Te agradecería si' wyraża wdzięczność z góry! Warunkowy pokazuje że jeszcze nie pomógł. Tłumaczenia wymagają precyzji - pomoc eksperta bezcenna! 🙏"
      },
      {
        id: "help_11",
        question: "¿_____ explicarme otra vez más despacio? No entendí bien la primera explicación rápida que diste.",
        translation: "(Czy mógłbyś mi wyjaśnić jeszcze raz wolniej? Nie zrozumiałem dobrze pierwszego szybkiego wyjaśnienia, które dałeś)",
        options: ["Podrías", "Puedes", "Deberías", "Quisieras"],
        correct: "Podrías",
        explanation: "'¿Podrías explicar?' to grzeczna prośba o powtórzenie! Nie wstydź się prosić o wyjaśnienie - zrozumienie jest ważniejsze niż ego! 📝"
      },
      {
        id: "help_12",
        question: "Si no te _____ mal, preferiría que me ayudaras mañana en lugar de hoy porque estoy ocupado.",
        translation: "(Jeśli nie masz nic przeciwko, wolałbym, żebyś mi pomógł jutro zamiast dziś, bo jestem zajęty)",
        options: ["importa", "molesta", "cuesta", "preocupa"],
        correct: "importa",
        explanation: "'Si no te importa' to jeśli nie przeszkadza! Negocjacja terminu pomocy. Elastyczność w planowaniu pokazuje wzajemny szacunek - zrozumienie buduje przyjaźnie! 📅"
      },
      {
        id: "help_13",
        question: "¿_____ inconveniente prestarte mi ordenador portátil para que termines tu trabajo urgente importante?",
        translation: "(Czy byłby problem pożyczyć ci mój laptop, żebyś skończył swoją pilną ważną pracę?)",
        options: ["Habría", "Sería", "Estaría", "Tendría"],
        correct: "Habría",
        explanation: "'¿Habría inconveniente?' to czy byłby problem? Bardzo grzeczne pytanie przed ofertą. Dzielenie się narzędziami pomaga innym - technologia dla dobra! 💻"
      },
      {
        id: "help_14",
        question: "Te ruego que me _____ paciencia mientras aprendo estas funciones nuevas del programa complicado.",
        translation: "(Błagam cię, żebyś miał ze mną cierpliwość, podczas gdy uczę się tych nowych funkcji skomplikowanego programu)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Rogar que + subjuntivo' to błagać żeby! Intensywna prośba o cierpliwość. Nauka nowych programów frustruje - cierpliwość nauczyciela jest złotem! 🙏"
      },
      {
        id: "help_15",
        question: "¿Me _____ dar un consejo sabio sobre cómo manejar esta situación difícil familiar delicada?",
        translation: "(Czy mógłbyś dać mi mądrą radę jak poradzić sobie z tą trudną delikatną sytuacją rodzinną?)",
        options: ["podrías", "puedes", "deberías", "querrías"],
        correct: "podrías",
        explanation: "'¿Me podrías dar un consejo?' to prośba o mądrość! Warunkowy pokazuje szacunek dla wiedzy drugiej osoby. Rady od doświadczonych są cenne! 💭"
      }
    ]
  },

  celebrations_and_traditions: {
    name: "Święta i tradycje",
    description: "Celebruj po hiszpańsku z radością",
    icon: Award,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "cel_1",
        question: "En Navidad toda mi familia _____ en casa de mis abuelos para celebrar juntos estas fiestas especiales.",
        translation: "(W Boże Narodzenie cała moja rodzina zbiera się w domu moich dziadków, żeby razem świętować te specjalne święta)",
        options: ["se reúne", "se junta", "se encuentra", "queda"],
        correct: "se reúne",
        explanation: "'Reunirse' to zbierać się rodzinnie! Boże Narodzenie w Hiszpanii to święto rodzinne przede wszystkim. Dom dziadków to centrum celebracji - tradycja żywa! 🎄"
      },
      {
        id: "cel_2",
        question: "El Día de Reyes Magos los niños españoles _____ regalos mágicos en lugar del día de Navidad.",
        translation: "(W Dniu Trzech Króli hiszpańskie dzieci dostają magiczne prezenty zamiast w dzień Bożego Narodzenia)",
        options: ["reciben", "dan", "abren", "tienen"],
        correct: "reciben",
        explanation: "'Recibir regalos' to dostawać prezenty! 6 stycznia to wielki dzień w Hiszpanii. Reyes Magos to tradycja głębsza niż Santa - magia trwa! 🎁"
      },
      {
        id: "cel_3",
        question: "Mi cumpleaños _____ el próximo mes y estoy planeando una fiesta grande para amigos y familia cercana.",
        translation: "(Moje urodziny są w przyszłym miesiącu i planuję wielką imprezę dla przyjaciół i bliskiej rodziny)",
        options: ["es", "está", "cae", "será"],
        correct: "es",
        explanation: "'Mi cumpleaños es' to kiedy masz urodziny! Data używa 'ser'. Urodziny to osobiste święto - powód do celebracji istnienia! 🎂"
      },
      {
        id: "cel_4",
        question: "En España _____ costumbre comer doce uvas a la medianoche de Nochevieja para tener suerte.",
        translation: "(W Hiszpanii jest zwyczajem jeść dwanaście winogron o północy w Sylwestra dla szczęścia)",
        options: ["es", "está", "hay", "tiene"],
        correct: "es",
        explanation: "'Es costumbre' to jest tradycją! 'Ser' dla zwyczajów kulturowych. Dwanaście winogron to 12 życzeń - trudne ale zabawne! 🍇"
      },
      {
        id: "cel_5",
        question: "Para mi aniversario de boda mi esposo me _____ un viaje romántico sorpresa a París inolvidable.",
        translation: "(Na moją rocznicę ślubu mój mąż podarował mi niespodziankę romantyczną podróż do niezapomnianego Paryża)",
        options: ["regaló", "regalo", "ha regalado", "regala"],
        correct: "regaló",
        explanation: "'Regaló' pretérito dla zakończonego prezentu! Konkretna rocznica przeszła. Romantyczne niespodzianki wzmacniają miłość - gestyważniejsze niż słowa! 💝"
      },
      {
        id: "cel_6",
        question: "En las bodas españolas tradicionales los invitados _____ hasta el amanecer bailando y celebrando alegremente.",
        translation: "(Na tradycyjnych hiszpańskich weselach goście bawią się do świtu tańcząc i radośnie celebrując)",
        options: ["se quedan", "quedan", "están", "son"],
        correct: "se quedan",
        explanation: "'Quedarse hasta' to zostać do! Wesela hiszpańskie są maratońskie - noc młoda zawsze. Tańczyć do świtu to tradycja radosna! 💃"
      },
      {
        id: "cel_7",
        question: "_____ la tradición de dar regalos a los seres queridos en ocasiones especiales importantes del año.",
        translation: "(Zachowujemy tradycję dawania prezentów bliskim przy ważnych specjalnych okazjach roku)",
        options: ["Mantenemos", "Guardamos", "Conservamos", "Preservamos"],
        correct: "Mantenemos",
        explanation: "'Mantener la tradición' to podtrzymywać tradycję żywą! Przekazywanie zwyczajów następnym pokoleniom. Tradycje łączą przeszłość z przyszłością - tożsamość kulturowa! 🎁"
      },
      {
        id: "cel_8",
        question: "En Semana Santa muchos españoles _____ procesiones religiosas impresionantes por las calles antiguas de las ciudades.",
        translation: "(W Wielkim Tygodniu wielu Hiszpanów organizuje imponujące procesje religijne po starych ulicach miast)",
        options: ["celebran", "hacen", "organizan", "realizan"],
        correct: "celebran",
        explanation: "'Celebrar procesiones' to świętować w procesjach! Semana Santa to najbardziej dramatyczna tradycja hiszpańska. Religijność i kultura się mieszają pięknie! ✝️"
      },
      {
        id: "cel_9",
        question: "Los fuegos artificiales del Año Nuevo _____ espectaculares, iluminan todo el cielo nocturno brillantemente.",
        translation: "(Fajerwerki noworoczne są spektakularne, rozświetlają całe nocne niebo błyskotliwie)",
        options: ["son", "están", "hacen", "tienen"],
        correct: "son",
        explanation: "'Ser espectacular' to cecha fajerwerków! Zawsze imponujące - to ich natura. Nowy Rok to czas nadziei i nowych początków pełnych możliwości! 🎆"
      },
      {
        id: "cel_10",
        question: "Mi familia _____ el día de Todos los Santos visitando el cementerio y llevando flores a nuestros difuntos.",
        translation: "(Moja rodzina świętuje Dzień Wszystkich Świętych odwiedzając cmentarz i nosząc kwiaty naszym zmarłym)",
        options: ["celebra", "conmemora", "festeja", "honra"],
        correct: "conmemora",
        explanation: "'Conmemorar' to uczcić pamięć! Bardziej uroczyste niż 'celebrar'. Pamiętać o zmarłych to piękna tradycja - łączy nas z przeszłością rodzinną! 🕯️"
      },
      {
        id: "cel_11",
        question: "En mi país _____ costumbre dar el pésame personalmente a la familia del difunto en el funeral.",
        translation: "(W moim kraju jest zwyczajem składać kondolencje osobiście rodzinie zmarłego na pogrzebie)",
        options: ["es", "está", "hay", "tiene"],
        correct: "es",
        explanation: "'Es costumbre' dla tradycji kulturowej! Rytuały żałoby są ważne w każdej kulturze. Wspieranie w żałobie to akt głębokiej ludzkiej empatii! 🖤"
      },
      {
        id: "cel_12",
        question: "Los novios _____ el brindis tradicional delante de todos los invitados reunidos en la recepción elegante.",
        translation: "(Nowożeńcy wznoszą tradycyjny toast przed wszystkimi gośćmi zebranymi na eleganckiej recepcji)",
        options: ["hacen", "dan", "ofrecen", "brindan"],
        correct: "hacen",
        explanation: "'Hacer un brindis' to wznieść toast! 'Brindar' też poprawne. Toasty łączą ludzi w celebracji - podniesione kieliszki symbolizują jedność i radość! 🥂"
      },
      {
        id: "cel_13",
        question: "En la fiesta de cumpleaños infantil los niños felices _____ la piñata llena de dulces y sorpresas.",
        translation: "(Na dziecięcej imprezie urodzinowej szczęśliwe dzieci biją piniata pełną słodyczy i niespodzianek)",
        options: ["rompen", "pegan", "golpean", "destrozan"],
        correct: "rompen",
        explanation: "'Romper la piñata' to rozbić piniata! Tradycja latynoamerykańska popularna wszędzie. Dzieci uwielbiają to - słodycze deszczem spadają! 🎉"
      },
      {
        id: "cel_14",
        question: "_____ tradición familiar cenar todos juntos la noche de Nochebuena alrededor de una mesa grande.",
        translation: "(Jest tradycją rodzinną jeść kolację wszyscy razem w wigilię wokół dużego stołu)",
        options: ["Es", "Está", "Hay", "Tiene"],
        correct: "Es",
        explanation: "'Es tradición' definiuje zwyczaj rodzinny! Wigilia to najważniejsza kolacja roku. Wspólny stół łączy pokolenia - jedzenie i rozmowy do późna! 🍽️"
      },
      {
        id: "cel_15",
        question: "Los españoles _____ las campanadas de medianoche en la Puerta del Sol de Madrid cada fin de año.",
        translation: "(Hiszpanie oglądają uderzenia dzwonów o północy na Puerta del Sol w Madrycie każdego końca roku)",
        options: ["ven", "miran", "observan", "contemplan"],
        correct: "ven",
        explanation: "'Ver las campanadas' to oglądać transmisję dzwonów! Narodowa tradycja hiszpańska - wszyscy przed TV. 12 uderzeń, 12 winogron - razem jako naród! 🔔"
      }
    ]
  }
};

export default part15Categories;
/**
 * POLISH → SPANISH GRAMMAR - PART 21
 * 4 categories, 15 questions each - Expert level
 */

import { Box, Layers, Zap, Eye } from "lucide-react";

export const part21Categories = {
  indirect_commands: {
    name: "Rozkazy pośrednie",
    description: "Każ komuś żeby coś zrobił",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "ind_cmd_1",
        question: "Que _____ ellos lo que quieran, a nosotros no nos afecta en absoluto su decisión.",
        translation: "(Niech robią co chcą, nas w ogóle nie dotyka ich decyzja)",
        options: ["hagan", "hacen", "harán", "hicieran"],
        correct: "hagan",
        explanation: "'Que + subjuntivo' to niech ktoś coś zrobi (rozkaz pośredni). To trzecia osoba rozkazu. 'Que hagan' = niech robią - wyrażasz zgodę lub obojętność na czyjeś działania."
      },
      {
        id: "ind_cmd_2",
        question: "Que te _____ bien el examen mañana, has estudiado mucho y mereces aprobar con nota alta.",
        translation: "(Niech ci pójdzie dobrze na egzaminie jutro, dużo się uczyłeś i zasługujesz zdać z wysoką oceną)",
        options: ["vaya", "va", "irá", "fuera"],
        correct: "vaya",
        explanation: "'Que te vaya bien' to życzenie powodzenia. Idiomatyczne wyrażenie z subjuntivo. To jak 'good luck' - używamy dla życzeń i nadziei dotyczących innych osób."
      },
      {
        id: "ind_cmd_3",
        question: "Que _____ tranquilo, nosotros nos encargaremos de todos los preparativos necesarios para la fiesta.",
        translation: "(Niech będzie spokojny, my zajmiemy się wszystkimi niezbędnymi przygotowaniami do imprezy)",
        options: ["esté", "está", "estará", "estuviera"],
        correct: "esté",
        explanation: "'Que esté' to niech będzie (uspokojenie). Rozkaz pośredni w trzeciej osobie. Używamy dla sugestii spokoju lub zapewnienia kogoś - forma grzeczniejsza niż bezpośredni rozkaz."
      },
      {
        id: "ind_cmd_4",
        question: "Que no se _____ nadie, la reunión empezará puntualmente a la hora establecida sin demora.",
        translation: "(Niech nikt się nie spóźnia, spotkanie zacznie się punktualnie o ustalonej godzinie bez opóźnienia)",
        options: ["retrase", "retrasa", "retrasará", "retrasara"],
        correct: "retrase",
        explanation: "'Que no se retrase' to niech się nie spóźni. Negacja w rozkazie pośrednim też używa subjuntivo. To uprzejmy sposób komunikowania oczekiwania punktualności do grupy."
      },
      {
        id: "ind_cmd_5",
        question: "Que _____ buen viaje y que disfrutes mucho de tus vacaciones bien merecidas en el Caribe.",
        translation: "(Niech będzie dobra podróż i żebyś bardzo cieszył się swoimi zasłużonymi wakacjami na Karaibach)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Que tengas' to życzenie (niech masz). Standardowa forma pożegnalna. Kombinujemy dwa życzenia z 'que' - każde z subjuntivo. Typowe dla życzeń podróżnych."
      },
      {
        id: "ind_cmd_6",
        question: "Que cada uno _____ lo que mejor le parezca conveniente para resolver este problema común.",
        translation: "(Niech każdy zrobi to, co wydaje mu się najlepsze, żeby rozwiązać ten wspólny problem)",
        options: ["haga", "hace", "hará", "hiciera"],
        correct: "haga",
        explanation: "'Que cada uno haga' to niech każdy robi. Dawanie autonomii grupie. Rozkaz pośredni z 'cada uno' dla indywidualnych decyzji - demokratyczne podejście."
      },
      {
        id: "ind_cmd_7",
        question: "Que se _____ la luz, es hora de dormir y mañana hay que madrugar mucho.",
        translation: "(Niech zgaśnie światło, jest pora spać i jutro trzeba wcześnie wstawać)",
        options: ["apague", "apaga", "apagará", "apagara"],
        correct: "apague",
        explanation: "'Que se apague' to niech się zgasi. Możesz prosić kogoś lub bezosobowo. Gdy nie określasz kto ma zgasić, to bezosobowy rozkaz - ktokolwiek może to zrobić."
      },
      {
        id: "ind_cmd_8",
        question: "Que los estudiantes _____ atentos durante toda la explicación porque no la repetiré otra vez.",
        translation: "(Niech studenci będą uważni podczas całego wyjaśnienia, bo nie będę powtarzał drugi raz)",
        options: ["estén", "están", "estarán", "estuvieran"],
        correct: "estén",
        explanation: "'Que estén atentos' to rozkaz dla grupy. Nauczyciel mówi o studentach w trzeciej osobie. To sposób komunikowania oczekiwań poprzez pośrednią formę - mniej konfrontacyjny."
      },
      {
        id: "ind_cmd_9",
        question: "Que _____ lo que digan los demás, tú sigue adelante con tus planes y sueños personales.",
        translation: "(Niech mówią co chcą inni, ty kontynuuj swoje plany i osobiste marzenia)",
        options: ["digan", "dicen", "dirán", "dijeran"],
        correct: "digan",
        explanation: "'Que digan' wyraża obojętność na opinie. Dajesz pozwolenie na krytykę ale pokazujesz że nie ma znaczenia. To forma wzmocnienia dla kogoś - ignoruj krytyków."
      },
      {
        id: "ind_cmd_10",
        question: "Que _____ el cielo y pase lo que tenga que pasar, ya no podemos hacer nada más.",
        translation: "(Niech decyduje niebo i stanie się co ma się stać, już nic więcej nie możemy zrobić)",
        options: ["decida", "decide", "decidirá", "decidiera"],
        correct: "decida",
        explanation: "'Que decida el cielo' to idiomatyczne poddanie się losowi. Pozostawianie wyniku siłom wyższym. To forma akceptacji - zrobiliśmy co mogliśmy, reszta poza kontrolą."
      },
      {
        id: "ind_cmd_11",
        question: "Que te _____ provecho la comida y que disfrutes de cada bocado del menú especial.",
        translation: "(Niech ci służy jedzenie i żebyś cieszył się każdym kęsem specjalnego menu)",
        options: ["aproveche", "aprovecha", "aprovechará", "aprovechara"],
        correct: "aproveche",
        explanation: "'Que aproveche' to smacznego (dosłownie: niech ci służy). Standardowe życzenie przed jedzeniem. Bardzo hiszpańskie - odpowiednik 'bon appétit'."
      },
      {
        id: "ind_cmd_12",
        question: "Que no _____ problemas con la entrega del paquete importante que enviamos ayer por la tarde.",
        translation: "(Niech nie będzie problemów z dostawą ważnej paczki, którą wysłaliśmy wczoraj po południu)",
        options: ["haya", "hay", "habrá", "hubiera"],
        correct: "haya",
        explanation: "'Que no haya' to życzenie braku problemów. Negatywne życzenie też używa subjuntivo. Wyrażasz nadzieję że coś NIE nastąpi - forma optymizmu negatywnego."
      },
      {
        id: "ind_cmd_13",
        question: "Que _____ suerte en tu entrevista de trabajo mañana, confío en que lo harás muy bien.",
        translation: "(Niech będziesz mieć szczęście na twojej rozmowie kwalifikacyjnej jutro, ufam że pójdzie ci bardzo dobrze)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Que tengas suerte' to życz enie szczęścia. Forma życzeń przed ważnymi wydarzeniami. 'Que + presente subjuntivo' dla życzeń dotyczących bliskiej przyszłości."
      },
      {
        id: "ind_cmd_14",
        question: "Que _____ descanses este fin de semana largo y recuperes todas tus energías perdidas durante la semana.",
        translation: "(Niech dobrze odpoczniesz w ten długi weekend i odzyskasz wszystkie swoje stracone energie z tygodnia)",
        options: ["te", "se", "le", "me"],
        correct: "te",
        explanation: "'Que te descanses' używa zaimka przed czasownikiem. Życzenia z czasownikami zwrotnymi zachowują normalną pozycję zaimków. 'Te' przed 'descanses' - struktura nie zmienia się."
      },
      {
        id: "ind_cmd_15",
        question: "Que los niños _____ jugando afuera mientras nosotros preparamos la cena tranquilamente dentro.",
        translation: "(Niech dzieci się bawią na zewnątrz, podczas gdy my spokojnie przygotowujemy kolację w środku)",
        options: ["sigan", "siguen", "seguirán", "siguieran"],
        correct: "sigan",
        explanation: "'Que sigan jugando' to niech kontynuują zabawę. Rozkaz dla kontynuacji akcji. 'Seguir + gerundio' w trzeciej osobie rozkazu - forma pośrednia dla pozwolenia."
      }
    ]
  },

  verbs_with_different_meanings: {
    name: "Czasowniki o różnych znaczeniach",
    description: "Czasowniki zmieniające sens w kontekście",
    icon: Eye,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "diff_mean_1",
        question: "Ayer _____ a mi antiguo profesor de español caminando por el centro comercial casualmente.",
        translation: "(Wczoraj spotkałem mojego dawnego nauczyciela hiszpańskiego spacerującego po centrum handlowym przypadkowo)",
        options: ["encontré", "encontraba", "me encontré con", "hallé"],
        correct: "encontré",
        explanation: "'Encontrar' to znaleźć lub spotkać przypadkowo. Różni się od 'encontrarse con' (spotkać się umówienie). 'Encontré a' dla niespodziewanego spotkania - bez wcześniejszego planu."
      },
      {
        id: "diff_mean_2",
        question: "¿Dónde _____ mi libro de gramática? Lo he buscado por toda la casa sin éxito ninguno.",
        translation: "(Gdzie położyłem moją książkę z gramatyki? Szukałem jej po całym domu bez żadnego sukcesu)",
        options: ["puse", "pongo", "he puesto", "ponía"],
        correct: "puse",
        explanation: "'Poner' to położyć, umieścić. Pretérito dla momentu położenia. Szukasz gdzie TY położyłeś - pytasz o własną przeszłą akcję położenia rzeczy."
      },
      {
        id: "diff_mean_3",
        question: "Mi hermana _____ directora de marketing en una empresa multinacional grande hace dos años.",
        translation: "(Moja siostra została dyrektorką marketingu w dużej firmie międzynarodowej dwa lata temu)",
        options: ["se hizo", "fue", "estuvo", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse' to zostać (stanowisko przez wysiłek). Różni się od 'ser' (tożsamość) i 'llegar a ser' (bardziej formalne). Pokazuje aktywne osiągnięcie pozycji zawodowej."
      },
      {
        id: "diff_mean_4",
        question: "Cuando _____ ese ruido extraño por la noche, llamé inmediatamente a la policía local.",
        translation: "(Kiedy usłyszałem ten dziwny hałas w nocy, natychmiast zadzwoniłem do lokalnej policji)",
        options: ["oí", "escuché", "oía", "escuchaba"],
        correct: "oí",
        explanation: "'Oír' to usłyszeć (niezamierzenie). 'Escuchar' to słuchać (intencjonalnie). 'Oí' pokazuje że dźwięk dotarł do ciebie bez chęci słuchania - przypadkowa percepcja."
      },
      {
        id: "diff_mean_5",
        question: "Este sofá viejo ya no _____ para nada, deberíamos comprar uno nuevo más cómodo.",
        translation: "(Ta stara sofa już się do niczego nie nadaje, powinniśmy kupić nową wygodniejszą)",
        options: ["sirve", "funciona", "vale", "trabaja"],
        correct: "sirve",
        explanation: "'Servir para' to nadawać się do czegoś, być użytecznym. 'No sirve para nada' to idiom dla bezużyteczności. Pokazuje że obiekt stracił swoją funkcję."
      },
      {
        id: "diff_mean_6",
        question: "_____ muy atentamente la conferencia científica completa pero no entendí muchos términos técnicos avanzados.",
        translation: "(Słuchałem bardzo uważnie całej konferencji naukowej, ale nie zrozumiałem wielu zaawansowanych terminów technicznych)",
        options: ["Escuché", "Oí", "Escuchaba", "Oía"],
        correct: "Escuché",
        explanation: "'Escuchar' to słuchać aktywnie (z intencją i uwagą). 'Oír' to tylko słyszeć. 'Escuché atentamente' podkreśla świadomą koncentrację - chciałeś zrozumieć."
      },
      {
        id: "diff_mean_7",
        question: "El nuevo empleado _____ muy bien en el equipo de trabajo, todos están contentos con él.",
        translation: "(Nowy pracownik bardzo dobrze wpasowuje się w zespół roboczy, wszyscy są z niego zadowoleni)",
        options: ["cae", "está", "es", "queda"],
        correct: "cae",
        explanation: "'Caer bien' to podobać się (o osobach). Nie o rzeczach - tylko ludzie 'caen bien/mal'. To subiektywna ocena chemii między ludźmi - jak ktoś wpływa na innych."
      },
      {
        id: "diff_mean_8",
        question: "¿_____ español o solo lo entiendes pero no lo hablas activamente en conversaciones?",
        translation: "(Czy mówisz po hiszpańsku czy tylko rozumiesz, ale nie mówisz aktywnie w rozmowach?)",
        options: ["Hablas", "Dices", "Cuentas", "Platicas"],
        correct: "Hablas",
        explanation: "'Hablar' to mówić językiem (zdolność). 'Decir' to powiedzieć coś konkretnego. '¿Hablas español?' pyta o znajomość języka, nie o mówienie w tym momencie."
      },
      {
        id: "diff_mean_9",
        question: "Esa explicación técnica no me _____ nada claro, ¿podrías explicarlo de otra manera más simple?",
        translation: "(To techniczne wyjaśnienie wcale mi nie jest jasne, czy mógłbyś wyjaśnić to w inny prostszy sposób?)",
        options: ["queda", "está", "es", "resulta"],
        correct: "queda",
        explanation: "'Quedar claro' to być jasnym (dla kogoś). 'Me queda claro' pokazuje subiektywne zrozumienie. Różni się od 'ser claro' (obiektywna jasność) - 'quedar' o efekcie na odbiorcę."
      },
      {
        id: "diff_mean_10",
        question: "¿Qué te _____ mi nueva propuesta de proyecto para el próximo trimestre fiscal de la empresa?",
        translation: "(Co sądzisz o mojej nowej propozycji projektu na przyszły kwartalny okres fiskalny firmy?)",
        options: ["parece", "aparece", "semeja", "asemeja"],
        correct: "parece",
        explanation: "'¿Qué te parece?' to co sądzisz? Prosi o opinię. 'Parecer' wyraża subiektywną ocenę. Nie mylić z 'aparecer' (pojawiać się) - całkowicie inny czasownik."
      },
      {
        id: "diff_mean_11",
        question: "El paquete todavía no ha _____, debería haber llegado hace tres días según el seguimiento online.",
        translation: "(Paczka wciąż nie dotarła, powinna była przyjść trzy dni temu według śledzenia online)",
        options: ["llegado", "venido", "ido", "alcanzado"],
        correct: "llegado",
        explanation: "'Llegar' to dotrzeć (do celu końcowego). 'Venir' to przyjść (do mówującego). Dla paczek używamy 'llegar' nie 'venir' - paczka dociera do miejsca, nie przychodzi."
      },
      {
        id: "diff_mean_12",
        question: "Este vestido elegante te _____ perfecto, deberías comprarlo para la boda del próximo mes.",
        translation: "(Ta elegancka sukienka idealnie ci pasuje, powinnaś ją kupić na ślub w przyszłym miesiącu)",
        options: ["queda", "está", "sienta", "va"],
        correct: "queda",
        explanation: "'Quedar' to pasować (rozmiar, styl). 'Te queda perfecto' to kompleksowa ocena - rozmiar dobry, wygląd dobry. 'Sentar' też możliwe ale 'quedar' bardziej o rozmiarze."
      },
      {
        id: "diff_mean_13",
        question: "Ese comentario ofensivo me _____ muy mal, no esperaba eso de ti en absoluto.",
        translation: "(Ten obraźliwy komentarz bardzo mnie zranił, w ogóle tego od ciebie nie oczekiwałem)",
        options: ["sentó", "sintió", "cayó", "quedó"],
        correct: "sentó",
        explanation: "'Sentar mal' to źle odebrać (emocjonalnie). Używamy jak 'gustar' - komentarz zrobił ci źle. Różni się od 'sentirse mal' (czuć się źle fizycznie)."
      },
      {
        id: "diff_mean_14",
        question: "El nuevo trabajo me _____ muy bien, el horario es flexible y los compañeros son amables.",
        translation: "(Nowa praca bardzo mi odpowiada, godziny są elastyczne i współpracownicy są mili)",
        options: ["viene", "va", "queda", "está"],
        correct: "viene",
        explanation: "'Venir bien' to odpowiadać, być odpowiednim. Idiomatyczne użycie 'venir' dla dopasowania do potrzeb. Jak 'gustar' - praca robi ci dobrze (odpowiada ci)."
      },
      {
        id: "diff_mean_15",
        question: "¿A qué hora _____ el tren de Madrid a Barcelona desde la estación de Atocha?",
        translation: "(O której odjeżdża pociąg z Madrytu do Barcelony ze stacji Atocha?)",
        options: ["sale", "se va", "parte", "marcha"],
        correct: "sale",
        explanation: "'Salir' dla transportu to odjeżdżać, odlatywać. Standard dla rozkładów jazdy. 'Partir' też możliwe ale bardziej formalne. 'Salir' to najpowszechniejsze dla pociągów, autobusów, samolotów."
      }
    ]
  },

  probability_and_speculation: {
    name: "Prawdopodobieństwo i spekulacja",
    description: "Wyrażaj przypuszczenia i domysły",
    icon: Box,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "prob_1",
        question: "¿Dónde _____ mi madre ahora? No la veo por ninguna parte de la casa grande.",
        translation: "(Gdzie będzie moja mama teraz? Nie widzę jej nigdzie w dużym domu)",
        options: ["estará", "está", "estaría", "esté"],
        correct: "estará",
        explanation: "Futuro dla spekulacji o teraz. '¿Dónde estará?' = gdzie ona może być? Nie pytasz o przyszłość, ale wyrażasz niepewność o obecnej lokalizacji - futuro de probabilidad."
      },
      {
        id: "prob_2",
        question: "¿Qué hora _____? No llevo reloj y he perdido mi teléfono móvil en algún lugar.",
        translation: "(Która może być godzina? Nie mam zegarka i zgubiłem mój telefon komórkowy gdzieś)",
        options: ["será", "es", "sería", "sea"],
        correct: "será",
        explanation: "'¿Qué hora será?' to przypuszczenie o czasie obecnym. Futuro wyraża niepewność. Nie wiesz dokładnie, więc spekulujesz - to pytanie retoryczne wyrażające wątpliwość."
      },
      {
        id: "prob_3",
        question: "Supongo que Juan _____ enfermo porque no ha venido a trabajar hoy durante todo el día.",
        translation: "(Przypuszczam, że Juan jest chory, bo nie przyszedł do pracy dziś przez cały dzień)",
        options: ["está", "estará", "esté", "estaría"],
        correct: "está",
        explanation: "'Suponer que' + indicativo dla przypuszczeń. Mimo niepewności używamy indicativo bo to twoja hipoteza oparta na dowodach (nieobecność). 'Suponer' akceptuje indicativo jako najbardziej prawdopodobne."
      },
      {
        id: "prob_4",
        question: "_____ las diez de la noche cuando finalmente terminamos de cenar en ese restaurante lento.",
        translation: "(Mogła być dziesiąta wieczorem, kiedy w końcu skończyliśmy jeść w tej wolnej restauracji)",
        options: ["Serían", "Eran", "Fueron", "Serán"],
        correct: "Serían",
        explanation: "Conditional dla spekulacji o przeszłości. 'Serían las diez' = było pewnie około dziesiątej. Nie jesteś pewien godziny - conditional wyraża przypuszczenie retrospektywne."
      },
      {
        id: "prob_5",
        question: "Me imagino que _____ mucho tráfico a esta hora punta de la tarde en la ciudad.",
        translation: "(Wyobrażam sobie, że jest dużo ruchu o tej godzinie szczytu po południu w mieście)",
        options: ["habrá", "hay", "habría", "haya"],
        correct: "habrá",
        explanation: "'Me imagino que' + futuro dla przypuszczeń logicznych. 'Habrá' wyraża prawdopodobieństwo oparte na doświadczeniu. To educated guess - wiesz że zwykle jest ruch."
      },
      {
        id: "prob_6",
        question: "A lo mejor ella no _____ mi mensaje porque su teléfono está sin batería o apagado.",
        translation: "(Może ona nie widziała mojej wiadomości, bo jej telefon jest bez baterii lub wyłączony)",
        options: ["ha visto", "vio", "haya visto", "viera"],
        correct: "ha visto",
        explanation: "'A lo mejor' + indicativo dla możliwości. To mniej pewne niż 'quizás'. Mimo niepewności używamy indicativo po 'a lo mejor' - to jego specyfika."
      },
      {
        id: "prob_7",
        question: "Probablemente _____ que posponer el viaje si el tiempo no mejora significativamente antes del viernes.",
        translation: "(Prawdopodobnie będziemy musieli przełożyć podróż, jeśli pogoda nie poprawi się znacząco przed piątkiem)",
        options: ["tengamos", "tenemos", "tendremos", "tuviéramos"],
        correct: "tengamos",
        explanation: "'Probablemente' może brać indicativo lub subjuntivo. Subjuntivo podkreśla niepewność. 'Tengamos' pokazuje że to prawdopodobna ale nie pewna konieczność - większa wątpliwość."
      },
      {
        id: "prob_8",
        question: "Quizás _____ razón y deberíamos reconsiderar nuestra estrategia comercial para el próximo trimestre.",
        translation: "(Być może masz rację i powinniśmy przemyśleć naszą strategię handlową na przyszły kwartał)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Quizás' + subjuntivo dla większej niepewności. Możesz też indicativo (menos duda). Subjuntivo pokazuje że naprawdę nie jesteś pewien - to spekulacja, nie przypuszczenie."
      },
      {
        id: "prob_9",
        question: "Tal vez no _____ suficiente dinero ahorrado para comprar esa casa tan cara en el centro.",
        translation: "(Być może nie mamy wystarczająco zaoszczędzonych pieniędzy, żeby kupić ten tak drogi dom w centrum)",
        options: ["tengamos", "tenemos", "tendremos", "tuviéramos"],
        correct: "tengamos",
        explanation: "'Tal vez' też bierze indicativo lub subjuntivo. Subjuntivo dla większej wątpliwości. 'No tengamos' wyraża realną obawę o brak środków finansowych."
      },
      {
        id: "prob_10",
        question: "Puede _____ que llegue tarde a la reunión por el tráfico impredecible de la ciudad grande.",
        translation: "(Może być że spóźnię się na spotkanie przez nieprzewidywalny ruch wielkiego miasta)",
        options: ["ser", "que", "estar", "haber"],
        correct: "ser",
        explanation: "'Puede ser que' + subjuntivo to może być że. Wyrażenie możliwości. Konstrukcja bezosobowa - 'puede ser' (może być) + 'que llegue' (że spóźnię się)."
      },
      {
        id: "prob_11",
        question: "Lo más _____ es que no venga a la fiesta porque está muy ocupado con el proyecto urgente.",
        translation: "(Najbardziej prawdopodobne jest, że nie przyjdzie na imprezę, bo jest bardzo zajęty pilnym projektem)",
        options: ["probable", "posible", "seguro", "cierto"],
        correct: "probable",
        explanation: "'Lo más probable es que' + subjuntivo dla wysokiego prawdopodobieństwa. 'Probable' z subjuntivo mimo że prawie pewne. Fraza 'lo más probable' to standard dla predykcji."
      },
      {
        id: "prob_12",
        question: "¿_____ sido ya las doce cuando te llamé anoche? Perdona si te desperté del sueño profundo.",
        translation: "(Mogła już być dwunasta, kiedy do ciebie zadzwoniłem wczoraj? Przepraszam jeśli cię obudziłem z głębokiego snu)",
        options: ["Habrían", "Habían", "Fueron", "Eran"],
        correct: "Habrían",
        explanation: "Conditional perfect dla spekulacji o przeszłości. 'Habrían sido' = mogło być około. Nie pamiętasz dokładnej godziny - conditional dla przeszłego przypuszczenia."
      },
      {
        id: "prob_13",
        question: "Es _____ que llueva mañana según las nubes oscuras que veo acumulándose en el horizonte.",
        translation: "(Jest możliwe, że jutro będzie padać według ciemnych chmur, które widzę gromadzące się na horyzoncie)",
        options: ["posible", "probable", "seguro", "cierto"],
        correct: "posible",
        explanation: "'Es posible que' + subjuntivo dla możliwości. Mniej pewne niż 'probable'. Oparte na obserwacji chmur - to możliwość nie pewność. Wymaga subjuntivo."
      },
      {
        id: "prob_14",
        question: "Seguramente ellos ya _____ cenado a estas horas de la noche, suelen comer temprano siempre.",
        translation: "(Na pewno oni już zjedli kolację o tej porze nocy, zawsze jedzą wcześnie)",
        options: ["habrán", "han", "habían", "hubieran"],
        correct: "habrán",
        explanation: "'Seguramente' + futuro perfecto dla mocnego przypuszczenia. 'Habrán cenado' = pewnie już zjedli. Mimo 'seguramente', futuro pokazuje że to nie fakt pewny - logiczna dedukcja."
      },
      {
        id: "prob_15",
        question: "Posiblemente no _____ tiempo suficiente para visitar todos los museos durante nuestro viaje corto de tres días.",
        translation: "(Możliwie nie będziemy mieć wystarczająco czasu, żeby odwiedzić wszystkie muzea podczas naszej krótkiej trzydniowej podróży)",
        options: ["tengamos", "tenemos", "tendremos", "tuviéramos"],
        correct: "tengamos",
        explanation: "'Posiblemente' + subjuntivo dla możliwości. Podobne do 'quizás' - wyraża niepewność. Subjuntivo po 'posiblemente' podkreśla że to tylko jedna z możliwości, nie przewidywanie."
      }
    ]
  },

  using_lo: {
    name: "Używanie 'lo' neutrum",
    description: "Opanuj neutralne użycia 'lo'",
    icon: Layers,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "lo_1",
        question: "_____ importante es que todos estén sanos y salvos después del accidente de tráfico grave.",
        translation: "(Ważne jest to, że wszyscy są zdrowi i cali po poważnym wypadku drogowym)",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "'Lo + przymiotnik' tworzy rzeczownik abstrakcyjny. 'Lo importante' = ważna rzecz, to co ważne. 'Lo' neutralne dla koncepcji, nie konkretnych obiektów."
      },
      {
        id: "lo_2",
        question: "Ya sé _____ que pasó ayer en la reunión, me lo contó todo mi colega de confianza.",
        translation: "(Już wiem to, co się stało wczoraj na spotkaniu, wszystko mi opowiedział mój zaufany kolega)",
        options: ["lo", "el", "la", "eso"],
        correct: "lo",
        explanation: "'Lo que' to to co (neutralne). Odnosi się do całej sytuacji, nie konkretnego obiektu. 'Saber lo que pasó' = wiedzieć co się stało - 'lo' dla abstrakcyjnej informacji."
      },
      {
        id: "lo_3",
        question: "_____ difícil de este ejercicio es entender la lógica subyacente, no memorizar las reglas mecánicamente.",
        translation: "(Trudne w tym ćwiczeniu jest zrozumienie leżącej u podstaw logiki, nie mechaniczne zapamiętywanie reguł)",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "'Lo difícil de' to trudna rzecz w czymś. 'Lo + przymiotnik + de' dla ekstrakcji cechy. Pokazuje jaki aspekt jest trudny - fokus na charakterystyce."
      },
      {
        id: "lo_4",
        question: "No entiendo _____ que me estás diciendo, ¿podrías explicarlo más claramente con ejemplos?",
        translation: "(Nie rozumiem tego, co mi mówisz, czy mógłbyś wyjaśnić to jaśniej z przykładami?)",
        options: ["lo", "el", "eso", "esto"],
        correct: "lo",
        explanation: "'Lo que' dla treści komunikatu. To co mówisz (koncepcja, nie konkretne słowa). 'Entender lo que' = rozumieć treść, sens - 'lo' dla abstrakcyjnego znaczenia."
      },
      {
        id: "lo_5",
        question: "_____ mejor del viaje fue conocer gente nueva de diferentes culturas y países exóticos.",
        translation: "(Najlepsze w podróży było poznanie nowych ludzi z różnych kultur i egzotycznych krajów)",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "'Lo mejor' to najlepsza rzecz. Superlativo z 'lo' dla abstrakcji. 'Lo mejor de' ekstraktuje najlepszy aspekt doświadczenia - fokus na cechę pozytywną."
      },
      {
        id: "lo_6",
        question: "Haré todo _____ posible para ayudarte a resolver este problema complicado que tienes ahora.",
        translation: "(Zrobię wszystko co możliwe, żeby pomóc ci rozwiązać ten skomplikowany problem, który teraz masz)",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "'Todo lo posible' to wszystko co możliwe. 'Lo posible' = możliwe rzeczy (abstrakcyjne). 'Todo lo + przymiotnik' to idiomatyczna konstrukcja dla maksymalnego wysiłku."
      },
      {
        id: "lo_7",
        question: "_____ que me preocupa no es el dinero sino tu salud y bienestar general personal.",
        translation: "(To co mnie martwi to nie pieniądze, ale twoje zdrowie i ogólne osobiste samopoczucie)",
        options: ["Lo", "El", "Eso", "Esto"],
        correct: "Lo",
        explanation: "'Lo que' jako podmiot zdania. Neutralne 'lo' dla abstrakcyjnej rzeczy (to co). Całe 'lo que me preocupa' działa jak rzeczownik - temat zmartwienia."
      },
      {
        id: "lo_8",
        question: "No me gusta nada _____ que dijiste sobre mi familia en la reunión pública de ayer.",
        translation: "(Wcale mi się nie podoba to, co powiedziałeś o mojej rodzinie na wczorajszym publicznym spotkaniu)",
        options: ["lo", "el", "eso", "aquello"],
        correct: "lo",
        explanation: "'Lo que dijiste' to to co powiedziałeś. Odnosi się do treści wypowiedzi (abstrakcja), nie konkretnych słów. 'Lo' dla całości komunikatu jako koncepcji."
      },
      {
        id: "lo_9",
        question: "Ya _____ sé, no hace falta que me lo repitas otra vez más, entendí perfectamente.",
        translation: "(Już to wiem, nie trzeba mi powtarzać jeszcze raz, zrozumiałem perfekcyjnie)",
        options: ["lo", "el", "la", "los"],
        correct: "lo",
        explanation: "'Lo sé' to wiem to. 'Lo' zastępuje całą informację (neutralne). Odnosi się do poprzednio wspomnianej rzeczy lub faktu - placeholder dla wiedzy."
      },
      {
        id: "lo_10",
        question: "_____ curioso es que nadie se dio cuenta del error obvio hasta el final de la presentación.",
        translation: "(Ciekawe jest to, że nikt nie zauważył oczywistego błędu do końca prezentacji)",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "'Lo curioso' to ciekawa rzecz. 'Lo + przymiotnik + es que' wprowadza obserwację. Konstrukcja dla komentowania aspektu sytuacji - 'lo' ekstraktuje jedną cechę."
      },
      {
        id: "lo_11",
        question: "Eso es exactamente _____ que necesitaba escuchar para tomar mi decisión final definitiva.",
        translation: "(To jest dokładnie to, co musiałem usłyszeć, żeby podjąć moją ostateczną decyzję)",
        options: ["lo", "el", "la", "eso"],
        correct: "lo",
        explanation: "'Lo que' w predykacie. 'Eso es lo que' = to jest to co. 'Lo que' odnosi się do treści komunikatu - neutralne bo nie wiemy co konkretnie było powiedziane."
      },
      {
        id: "lo_12",
        question: "No puedo creer _____ rápido que pasa el tiempo cuando te diviertes con buenos amigos cercanos.",
        translation: "(Nie mogę uwierzyć jak szybko mija czas, kiedy dobrze się bawisz z bliskimi dobrymi przyjaciółmi)",
        options: ["lo", "qué", "como", "cuán"],
        correct: "lo",
        explanation: "'Lo + przymiotnik/przysłówek + que' to jak bardzo. 'Lo rápido que' = jak szybko (wykrzyknik w zdaniu podrzędnym). Używamy 'lo' nie 'qué' w konstrukcji z 'que'."
      },
      {
        id: "lo_13",
        question: "_____ de menos del nuevo trabajo es el largo tiempo de desplazamiento diario hasta la oficina.",
        translation: "(Najmniej w nowej pracy jest długi czas codziennego dojazdu do biura)",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "'Lo de menos' to najmniej ważna rzecz. 'Lo' dla abstrahowania aspektu. 'Lo de menos es...' wprowadza element mniej istotny - minimalizacja problemu."
      },
      {
        id: "lo_14",
        question: "Me sorprende _____ bien que hablas español sin haber vivido nunca en ningún país hispanohablante.",
        translation: "(Zaskakuje mnie jak dobrze mówisz po hiszpańsku nie mieszkając nigdy w żadnym kraju hiszpańskojęzycznym)",
        options: ["lo", "qué", "muy", "tan"],
        correct: "lo",
        explanation: "'Lo bien que' to jak dobrze. W zdaniach podrzędnych 'lo + przysłówek + que' zastępuje 'qué'. To konstrukcja dla wyrażenia zaskoczenia lub podziwu stopnia."
      },
      {
        id: "lo_15",
        question: "_____ bueno de vivir aquí es la proximidad a la playa y el clima mediterráneo suave.",
        translation: "(Dobre w mieszkaniu tutaj to bliskość plaży i łagodny klimat śródziemnomorski)",
        options: ["Lo", "El", "La", "Los"],
        correct: "Lo",
        explanation: "'Lo bueno de' to dobra rzecz w czymś. Ekstraktujesz pozytywny aspekt. 'Lo + przymiotnik + de' to analityczna konstrukcja - izolujesz jedną cechę sytuacji."
      }
    ]
  }
};

export default part21Categories;
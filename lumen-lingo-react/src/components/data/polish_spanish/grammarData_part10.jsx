/**
 * POLISH → SPANISH GRAMMAR - PART 10  
 * 3 categories, 15 questions each - Mastering nuances
 */

import { Flower, CloudRain, Activity } from "lucide-react";

export const part10Categories = {
  stem_changing_verbs: {
    name: "Czasowniki ze zmianą rdzenia",
    description: "Opanuj nieregularne zmiany samogłosek",
    icon: Flower,
    color: "from-purple-500 to-violet-600",
    level: "intermediate",
    questions: [
      {
        id: "stem_1",
        question: "Yo _____ ir al cine esta noche para ver la nueva película de acción emocionante.",
        translation: "(Chcę iść do kina dziś wieczorem, żeby zobaczyć nowy ekscytujący film akcji)",
        options: ["quiero", "quero", "quioro", "quiere"],
        correct: "quiero",
        explanation: "'Querer' zmienia 'e' na 'ie' w rdzeniu! To nieregularne, ale wzorzec jest spójny: quiero, quieres, quiere... To jeden z najważniejszych czasowników! 🎬"
      },
      {
        id: "stem_2",
        question: "¿A qué hora _____ el espectáculo de teatro en el auditorio principal de la ciudad?",
        translation: "(O której godzinie zaczyna się przedstawienie teatralne w głównym audytorium miasta?)",
        options: ["empieza", "empeza", "empeiza", "empieca"],
        correct: "empieza",
        explanation: "'Empezar' to e→ie! Trzecia osoba 'empieza'. Te zmiany są tylko w rdzen, końcówki normalne. Teatr w Hiszpanii to żywa tradycja! 🎭"
      },
      {
        id: "stem_3",
        question: "Nosotros _____ en casa porque está lloviendo mucho afuera y hace frío desagradable.",
        translation: "(My zostajemy w domu, bo pada dużo na zewnątrz i jest nieprzyjemny chłód)",
        options: ["nos quedamos", "nos quedemos", "nos quedimos", "nos quedimos"],
        correct: "nos quedamos",
        explanation: "'Quedarse' NIE zmienia się w 'nosotros'! Zmiany są tylko w 'yo', 'tú', 'él', 'ellos'. My i wy są regularne - łatwe! Deszczowe dni to czas rodzinny! 🏠"
      },
      {
        id: "stem_4",
        question: "Ella siempre _____ sus problemas personales con su mejor amiga de confianza total.",
        translation: "(Ona zawsze zleca swoje osobiste problemy swojej najlepszej, całkowicie zaufanej przyjaciółce)",
        options: ["cuenta", "cuonta", "contía", "cunta"],
        correct: "cuenta",
        explanation: "'Contar' zmienia o→ue! 'Cuenta' to ona opowiada. Zaufane przyjaźnie są terapeutyczne - dzielenie problemów je zmniejsza! 💭"
      },
      {
        id: "stem_5",
        question: "¿_____ venir conmigo al supermercado? Necesito ayuda para cargar las bolsas pesadas de compras.",
        translation: "(Czy możesz pójść ze mną do supermarketu? Potrzebuję pomocy do niesienia ciężkich toreb z zakupami)",
        options: ["Puedes", "Podes", "Piedes", "Poedes"],
        correct: "Puedes",
        explanation: "'Poder' to o→ue! 'Puedes' dla ty. Pytanie o pomoc to akt zaufania. Zakupy razem to także czas jakości! 🛒"
      },
      {
        id: "stem_6",
        question: "Los niños _____ en el parque todos los días después de terminar las clases escolares.",
        translation: "(Dzieci bawią się w parku codziennie po skończeniu szkolnych zajęć)",
        options: ["juegan", "jogan", "joegan", "jugan"],
        correct: "juegan",
        explanation: "'Jugar' zmienia u→ue! 'Juegan' to oni bawią się. Zabawa na świeżym powietrzu jest najzdrowsza dla dzieci! 🎈"
      },
      {
        id: "stem_7",
        question: "Nosotros _____ la cena familiar juntos en la cocina grande todos los días laborables.",
        translation: "(My przygotowujemy rodzinną kolację razem w dużej kuchni każdego dnia roboczego)",
        options: ["preparamos", "preperamos", "preparimos", "preporamos"],
        correct: "preparamos",
        explanation: "'Preparar' NIE zmienia się! To regularny czasownik. Nie wszystkie są nieregularne - niektóre są proste i przyjazne! Gotowanie razem łączy! 👨‍🍳"
      },
      {
        id: "stem_8",
        question: "Tú _____ muy bien ese idioma extranjero después de vivir dos años en el país.",
        translation: "(Ty mówisz bardzo dobrze tym obcym językiem po mieszkaniu dwa lata w tym kraju)",
        options: ["hablas", "hables", "hoblas", "hablías"],
        correct: "hablas",
        explanation: "'Hablar' też jest regularny! Nie zmienia się. To ważna lekcja - większość czasowników jest regularna. Życie za granicą to najlepsza szkoła języka! 🗣️"
      },
      {
        id: "stem_9",
        question: "¿Cuánto _____ ese televisor moderno de pantalla grande que está en el escaparate?",
        translation: "(Ile kosztuje ten nowoczesny telewizor z dużym ekranem, który jest na wystawie?)",
        options: ["cuesta", "costa", "cuosta", "coesta"],
        correct: "cuesta",
        explanation: "'Costar' zmienia o→ue! 'Cuesta' to kosztuje. To pytanie, które zadajesz milion razy w sklepach. Zakupy wymagają budżetu! 💰"
      },
      {
        id: "stem_10",
        question: "Mis hijos _____ muy temprano cada mañana con mucha energía y entusiasmo juvenil.",
        translation: "(Moje dzieci budzą się bardzo wcześnie każdego ranka z wielką energią i młodzieńczym entuzjazmem)",
        options: ["se despiertan", "se desp wertan", "se despirtan", "se despoertan"],
        correct: "se despiertan",
        explanation: "'Despertar' to e→ie! Plus zwrotny 'se'. Energia dzieci rano jest niesamowita - rodzice potrzebują kawy! ☕"
      },
      {
        id: "stem_11",
        question: "Yo siempre _____ la puerta con llave cuando salgo de casa por seguridad básica.",
        translation: "(Zawsze zamykam drzwi na klucz, kiedy wychodzę z domu dla podstawowego bezpieczeństwa)",
        options: ["cierro", "cerro", "ciorro", "cierr",],
        correct: "cierro",
        explanation: "'Cerrar' zmienia e→ie! 'Cierro' to ja zamykam. Bezpieczeństwo domu to odpowiedzialność. Proste nawyki chronią nas! 🔐"
      },
      {
        id: "stem_12",
        question: "Ellos _____ volver a su país de origen después de muchos años viviendo en el extranjero.",
        translation: "(Oni chcą wrócić do swojego kraju pochodzenia po wielu latach mieszkania za granicą)",
        options: ["quieren", "queren", "quioren", "quieren"],
        correct: "quieren",
        explanation: "'Querer' e→ie w trzeciej osobie mnogiej! 'Quieren' to oni chcą. Nostalgia za domem jest silnym uczuciem. Korzenie nas wzywają! 🏡"
      },
      {
        id: "stem_13",
        question: "El restaurante _____ a las once de la noche y nosotros llegamos justo a tiempo afortunadamente.",
        translation: "(Restauracja zamyka się o jedenastej w nocy i my dotarliśmy akurat na czas na szczęście)",
        options: ["cierra", "cerra", "ciorra", "ciera"],
        correct: "cierra",
        explanation: "'Cerrar' e→ie! 'Cierra' to zamyka się. W Hiszpanii restauracje są otwarte późno - kultura nocnego życia! 🍽️"
      },
      {
        id: "stem_14",
        question: "Yo nunca _____ en los problemas de otras personas sin que me pidan ayuda directamente.",
        translation: "(Nigdy nie wtrącam się w problemy innych ludzi bez poproszenia mnie bezpośrednio o pomoc)",
        options: ["me meto", "me mieto", "me moto", "me mueto"],
        correct: "me meto",
        explanation: "'Meter' NIE zmienia się! To regularny czasownik zwrotny. 'Meterse en' to wtrącać się. Szacunek dla granic innych jest ważny! 🤐"
      },
      {
        id: "stem_15",
        question: "Tú _____ mucho cuando ves películas tristes de amor o dramas emotivos familiares.",
        translation: "(Ty płaczesz dużo, kiedy oglądasz smutne filmy miłosne lub wzruszające dramaty rodzinne)",
        options: ["lloras", "lyoras", "lluras", "llyoras"],
        correct: "lloras",
        explanation: "'Llorar' jest regularny! Nie zmienia się. Płacz to naturalna emocja - oczyszcza duszę. Filmy poruszają nasze serca! 😢"
      }
    ]
  },

  weather_expressions_advanced: {
    name: "Zaawansowane wyrażenia pogodowe",
    description: "Opisuj pogodę jak prawdziwy Hiszpan",
    icon: CloudRain,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "wea_adv_1",
        question: "Parece que va a _____ una tormenta tremenda porque el cielo está muy oscuro y amenazante.",
        translation: "(Wygląda na to, że będzie potężna burza, bo niebo jest bardzo ciemne i groźne)",
        options: ["haber", "ser", "estar", "hacer"],
        correct: "haber",
        explanation: "'Va a haber' to 'będzie' dla wydarzeń! Burze są wydarzeniami pogodowymi. To zapowiedź nadchodzącego zjawiska. Natura jest potężna! ⛈️"
      },
      {
        id: "wea_adv_2",
        question: "Hoy _____ un día perfecto para ir de excursión a la montaña con buenos amigos.",
        translation: "(Dziś jest idealny dzień na pójście na wycieczkę w góry z dobrymi przyjaciółmi)",
        options: ["es", "hace", "está", "hay"],
        correct: "es",
        explanation: "'Ser' dla typu dnia! 'Es un día perfecto' klasyfikuje dzień. To o charakterze, nie warunkach. Góry wzywają w piękną pogodę! 🏔️"
      },
      {
        id: "wea_adv_3",
        question: "_____ mucha humedad ambiental en la costa, por eso siempre siento el aire pesado y pegajoso.",
        translation: "(Jest duża wilgotność w powietrzu na wybrzeżu, dlatego zawsze czuję powietrze ciężkie i lepkie)",
        options: ["Hay", "Hace", "Está", "Es"],
        correct: "Hay",
        explanation: "'Hay' dla wilgotności i zjawisk w powietrzu! Istnieje wilgotność. Wybrzeże śródziemnomorskie latem jest wilgotne - to normalne! 💧"
      },
      {
        id: "wea_adv_4",
        question: "La temperatura _____ bajando gradualmente a medida que se acerca el invierno frío del norte.",
        translation: "(Temperatura stopniowo spada w miarę zbliżania się zimnej zimy z północy)",
        options: ["está", "es", "hace", "hay"],
        correct: "está",
        explanation: "'Estar + gerundio' dla zmiany w toku! Temperatura spada TERAZ, to proces. Możesz obserwować to na termometrze. Natura ma swoje cykle! 🌡️"
      },
      {
        id: "wea_adv_5",
        question: "_____ un sol radiante y brillante hoy, es un día maravilloso para estar al aire libre.",
        translation: "(Jest promienne i błyszczące słońce dziś, to cudowny dzień, żeby być na świeżym powietrzu)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer sol' to 'jest słonecznie'! 'Hacer' dla ogólnej pogody, 'hay' dla konkretnych zjawisk. Słoneczne dni podnoszą nastrój wszystkich! ☀️"
      },
      {
        id: "wea_adv_6",
        question: "El pronóstico del tiempo dice que _____ lloviendo toda la semana que viene sin parar.",
        translation: "(Prognoza pogody mówi, że będzie padać cały przyszły tydzień bez przerwy)",
        options: ["estará", "será", "hará", "habrá"],
        correct: "estará",
        explanation: "'Estar lloviendo' w przyszłości! 'Estará' + gerundio dla przyszłej akcji ciągłej. Deszczowy tydzień to czas dla książek i herbaty! ☔"
      },
      {
        id: "wea_adv_7",
        question: "_____ una niebla espesa muy temprano en la mañana que dificulta la visibilidad en carretera.",
        translation: "(Jest gęsta mgła bardzo wcześnie rano, która utrudnia widoczność na drodze)",
        options: ["Hay", "Hace", "Está", "Es"],
        correct: "Hay",
        explanation: "'Hay niebla' to jest mgła! 'Hay' dla zjawisk, które pojawiają się i znikają. Poranna mgła to poezja natury, ale ostrożność na drodze! 🌫️"
      },
      {
        id: "wea_adv_8",
        question: "El viento _____ tan fuerte que tumbó varios árboles grandes en el parque municipal ayer.",
        translation: "(Wiatr wiał tak silnie, że przewrócił kilka dużych drzew w miejskim parku wczoraj)",
        options: ["soplaba", "hacía", "había", "estaba"],
        correct: "soplaba",
        explanation: "'Soplar' to wiać (o wietrze)! 'Soplaba' to imperfecto - trwające działanie w przeszłości. Silne wiatry mogą być niebezpieczne! 💨"
      },
      {
        id: "wea_adv_9",
        question: "_____ un ambiente muy agradable y fresco esta tarde, perfecto para pasear por el centro histórico.",
        translation: "(Jest bardzo przyjemna i świeża atmosfera tego popołudnia, idealna na spacer po historycznym centrum)",
        options: ["Hace", "Hay", "Está", "Es"],
        correct: "Hace",
        explanation: "'Hacer buen ambiente' to mieć przyjemną pogodę! 'Ambiente' to atmosfera, klimat. Idealna pogoda zachęca do wyjścia i eksploracji! 🚶"
      },
      {
        id: "wea_adv_10",
        question: "Cuando _____ relámpagos en el cielo oscuro, mi perro se asusta y se esconde debajo de la cama.",
        translation: "(Kiedy są błyskawice na ciemnym niebie, mój pies się boi i chowa pod łóżkiem)",
        options: ["hay", "hace", "están", "son"],
        correct: "hay",
        explanation: "'Hay relámpagos' to są błyskawice! Zjawisko elektryczne w niebie. Zwierzęta są wrażliwe na burze - to ich naturalny instynkt! ⚡"
      },
      {
        id: "wea_adv_11",
        question: "La sensación térmica _____ mucho más fría por culpa del viento helado del norte.",
        translation: "(Odczuwalna temperatura jest dużo zimniejsza z powodu lodowatego wiatru z północy)",
        options: ["es", "está", "hace", "hay"],
        correct: "es",
        explanation: "'La sensación es' to 'odczucie jest'! Używamy 'ser' dla charakterystyki. Wiatr sprawia, że czujemy się zimniej niż pokazuje termometr! 🥶"
      },
      {
        id: "wea_adv_12",
        question: "_____ granizando durante la tormenta de verano y los granizos dañaron los coches estacionados.",
        translation: "(Padał grad podczas letniej burzy i grudki gradu uszkodziły zaparkowane samochody)",
        options: ["Estuvo", "Fue", "Hubo", "Hizo"],
        correct: "Estuvo",
        explanation: "'Estar + gerundio' dla zjawiska w toku! 'Estuvo granizando' to trwające padanie gradu. Letnie burze w Hiszpanii mogą być gwałtowne! 🧊"
      },
      {
        id: "wea_adv_13",
        question: "El clima en esta región costera _____ muy suave todo el año gracias al mar cercano.",
        translation: "(Klimat w tym przybrzeżnym regionie jest bardzo łagodny cały rok dzięki bliskiemu morzu)",
        options: ["es", "está", "hace", "hay"],
        correct: "es",
        explanation: "'Ser' dla cech klimatu stałych! Klimat przybrzeżny ma swoją naturę. To nie zmienia się - to charakterystyka geograficzna! 🌊"
      },
      {
        id: "wea_adv_14",
        question: "_____ despejado el cielo esta noche, podemos ver todas las estrellas brillantes claramente.",
        translation: "(Niebo jest bezchmurne dziś wieczorem, możemy wyraźnie zobaczyć wszystkie błyszczące gwiazdy)",
        options: ["Está", "Es", "Hace", "Hay"],
        correct: "Está",
        explanation: "'Estar despejado' to być bezchmurnym! Stan nieba, który się zmienia. Wczoraj chmury, dziś czysto. Gwiazdy to kosmos nad nami! ✨"
      },
      {
        id: "wea_adv_15",
        question: "_____ sol radiante durante todo el día de ayer sin una sola nube en el cielo azul.",
        translation: "(Było promienne słońce przez cały wczorajszy dzień bez ani jednej chmury na błękitnym niebie)",
        options: ["Hizo", "Hubo", "Estuvo", "Fue"],
        correct: "Hizo",
        explanation: "'Hizo sol' w przeszłości! 'Hacer' w pretérito dla zakończonej pogody. Doskonały dzień to wspomnienie do skarbienia! 🌞"
      }
    ]
  },

  body_parts_and_health: {
    name: "Części ciała i zdrowie",
    description: "Mów o zdrowiu i samopoczuciu",
    icon: Activity,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    questions: [
      {
        id: "body_1",
        question: "Me duele mucho _____ después de trabajar tantas horas en la computadora sin descanso.",
        translation: "(Bardzo boli mnie głowa po pracy tylu godzin przy komputerze bez odpoczynku)",
        options: ["la cabeza", "el cabeza", "las cabezas", "los cabezas"],
        correct: "la cabeza",
        explanation: "'La cabeza' to głowa - zawsze żeńska! 'Doler' (boleć) używamy z zaimkiem: 'me duele'. Przerwy przy komputerze są kluczowe dla zdrowia! 💻"
      },
      {
        id: "body_2",
        question: "Mi hermano se rompió _____ jugando al fútbol y ahora tiene que llevar escayola durante seis semanas.",
        translation: "(Mój brat złamał nogę grając w piłkę nożną i teraz musi nosić gips przez sześć tygodni)",
        options: ["la pierna", "el pierna", "las piernas", "los piernas"],
        correct: "la pierna",
        explanation: "'La pierna' to noga (od biodra do stopy)! Żeńska. Piłka nożna może być ryzykowna, ale pasja jest silniejsza. Szybkiego powrotu do zdrowia! ⚽"
      },
      {
        id: "body_3",
        question: "Tengo _____ irritados porque he estado leyendo muchas horas sin descansar la vista.",
        translation: "(Mam podrażnione oczy, bo czytałem wiele godzin bez odpoczywania wzroku)",
        options: ["los ojos", "las ojos", "el ojo", "la ojo"],
        correct: "los ojos",
        explanation: "'Los ojos' to oczy - męskie, liczba mnoga! Zawsze para. Pamiętaj o regule 20-20-20: co 20 minut patrz 20 sekund na 20 stóp! 👀"
      },
      {
        id: "body_4",
        question: "Me lavé bien _____ con jabón antibacterial antes de preparar la comida en la cocina.",
        translation: "(Umyłem dobrze ręce antybakteryjnym mydłem przed przygotowaniem jedzenia w kuchni)",
        options: ["las manos", "los manos", "la mano", "el mano"],
        correct: "las manos",
        explanation: "'Las manos' to ręce - żeńskie! Mnoga bo masz dwie. Higiena rąk chroni przed chorobami. To pierwsza lekcja w kuchni! 🧼"
      },
      {
        id: "body_5",
        question: "El dentista me revisó _____ y me dijo que todo estaba perfecto sin ninguna caries.",
        translation: "(Dentysta sprawdził mi zęby i powiedział, że wszystko jest idealne bez żadnej próchnicy)",
        options: ["los dientes", "las dientes", "el diente", "la diente"],
        correct: "los dientes",
        explanation: "'Los dientes' to zęby - męskie! Regularne wizyty u dentysty są ważne. Zdrowe zęby to piękny uśmiech. Szczotkuj dwa razy dziennie! 🦷"
      },
      {
        id: "body_6",
        question: "Mi abuela tiene problemas de audición y no _____ bien cuando hablamos en voz baja.",
        translation: "(Moja babcia ma problemy ze słuchem i nie słyszy dobrze, kiedy mówimy cicho)",
        options: ["oye", "escucha", "oye", "oiga"],
        correct: "oye",
        explanation: "'Oír' to słyszeć (zdolność fizyczna). 'Escuchar' to słuchać (intencjonalnie). Z wiekiem słuch się pogarsza - cierpliwość i głośniejsza mowa pomagają! 👂"
      },
      {
        id: "body_7",
        question: "Después de correr la maratón completa me dolían terriblemente _____ durante tres días seguidos.",
        translation: "(Po przebiegnięciu całego maratonu okropnie bolały mnie nogi przez trzy dni z rzędu)",
        options: ["las piernas", "los piernas", "la pierna", "el pierna"],
        correct: "las piernas",
        explanation: "'Las piernas' liczba mnoga - obie bolały! 'Doler' to boleć - używamy w trzeciej osobie. Maraton to wielkie osiągnięcie - ból przechodzi, duma zostaje! 🏃"
      },
      {
        id: "body_8",
        question: "Tienes que cepillarte _____ después de cada comida para mantener una buena higiene dental.",
        translation: "(Musisz szczotkować zęby po każdym posiłku, żeby utrzymać dobrą higienę zębów)",
        options: ["los dientes", "las dientes", "el diente", "la diente"],
        correct: "los dientes",
        explanation: "'Cepillarse los dientes' to zwrot stały! Używamy rodzajnika określonego z częściami ciała. To codzienne zdrowy nawyk - mama zawsze miała rację! 🪥"
      },
      {
        id: "body_9",
        question: "El médico me ausculó _____ con el estetoscopio para comprobar que todo funcionara correctamente.",
        translation: "(Lekarz osłuchał mi serce stetoskopem, żeby sprawdzić, czy wszystko działa prawidłowo)",
        options: ["el corazón", "la corazón", "los corazones", "las corazones"],
        correct: "el corazón",
        explanation: "'El corazón' to serce - męskie! Centrum życia. Regularne badania są ważne. Twoje serce to motor - dbaj o niego! ❤️"
      },
      {
        id: "body_10",
        question: "Me torcí _____ bajando las escaleras rápidamente y ahora está muy hinchado y adolorido.",
        translation: "(Skręciłem kostkę schodząc szybko ze schodów i teraz jest bardzo spuchnięta i boląca)",
        options: ["el tobillo", "la tobillo", "los tobillos", "las tobillos"],
        correct: "el tobillo",
        explanation: "'El tobillo' to kostka (u stopy) - męska! 'Torcerse' to skręcić sobie. Schody wymagają ostrożności. Lód i odpoczynek pomagają w gojeniu! 🩹"
      },
      {
        id: "body_11",
        question: "Mi hijo pequeño se cayó y se hizo daño en _____ izquierda jugando en el patio del colegio.",
        translation: "(Mój mały syn upadł i zranił się w lewą rękę bawiąc się na szkolnym podwórku)",
        options: ["la mano", "el mano", "las manos", "los manos"],
        correct: "la mano",
        explanation: "'La mano' to ręka/dłoń - żeńska! Dzieci często się ranią bawiąc się - to część dorastania. Małe urazy uczą ostrożności! 🤕"
      },
      {
        id: "body_12",
        question: "Debes lavarte _____ cada noche antes de acostarte para mantener una buena higiene personal diaria.",
        translation: "(Musisz myć sobie twarz każdej nocy przed położeniem się spać dla utrzymania dobrej codziennej higieny osobistej)",
        options: ["la cara", "el cara", "las caras", "los caras"],
        correct: "la cara",
        explanation: "'La cara' to twarz - żeńska! Mycie twarzy przed snem to zdrowy rytuał. Czysta skóra to zdrowa skóra. Nawyki budują piękno! 😊"
      },
      {
        id: "body_13",
        question: "Tengo un dolor intenso en _____ porque dormí en una postura muy incómoda toda la noche.",
        translation: "(Mam intensywny ból w szyi, bo spałem w bardzo niewygodnej pozycji całą noc)",
        options: ["el cuello", "la cuello", "los cuellos", "las cuellos"],
        correct: "el cuello",
        explanation: "'El cuello' to szyja - męska! Zła pozycja podczas snu to częsty problem. Dobra poduszka to inwestycja w zdrowie. Słuchaj swojego ciała! 😴"
      },
      {
        id: "body_14",
        question: "Mi hermana tiene _____ muy largo y hermoso que le llega hasta la cintura delgada.",
        translation: "(Moja siostra ma bardzo długie i piękne włosy, które sięgają jej do smukłej talii)",
        options: ["el pelo", "la pelo", "los pelos", "las pelos"],
        correct: "el pelo",
        explanation: "'El pelo' to włosy (ogólnie) - męskie! 'Los cabellos' to pojedyncze włoski. Długie włosy wymagają pielęgnacji - to akt miłości własnej! 💇"
      },
      {
        id: "body_15",
        question: "Me duelen mucho _____ de tanto caminar por la ciudad turística sin descansar suficiente.",
        translation: "(Bardzo bolą mnie stopy od tak dużego chodzenia po turystycznym mieście bez wystarczającego odpoczynku)",
        options: ["los pies", "las pies", "el pie", "la pie"],
        correct: "los pies",
        explanation: "'Los pies' to stopy - męskie, para! Po długim dniu zwiedzania stopy protestują. Wygodne buty to niezbędnik turysty. Odpoczynek regeneruje! 👣"
      }
    ]
  }
};

export default part10Categories;
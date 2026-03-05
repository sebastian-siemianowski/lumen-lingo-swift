
/**
 * POLISH → SPANISH GRAMMAR - PART 11
 * 4 categories, 15 questions each - Advanced fluency
 */

import { MapPin, Music, Lightbulb, Waves, Clock } from "lucide-react";

export const part11Categories = {
  places_and_locations: {
    name: "Miejsca i lokalizacje",
    description: "Opisuj miejsca i wskazuj drogę po hiszpańsku",
    icon: MapPin,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "pl_1",
        question: "El banco _____ en la esquina de la calle principal, justo al lado de la farmacia verde.",
        translation: "(Bank jest na rogu głównej ulicy, dokładnie obok zielonej apteki)",
        options: ["está", "es", "hay", "tiene"],
        correct: "está",
        explanation: "'Estar' używamy dla lokalizacji budynków i miejsc! 'Está' mówi gdzie coś się znajduje. To jak GPS w języku - pokazuje dokładną pozycję w mieście. Bardzo praktyczne!"
      },
      {
        id: "pl_2",
        question: "_____ un supermercado grande cerca de mi casa donde compro toda la comida semanal.",
        translation: "(Jest duży supermarket blisko mojego domu, gdzie kupuję wszystkie cotygodniowe zakupy)",
        options: ["Hay", "Está", "Es", "Tiene"],
        correct: "Hay",
        explanation: "'Hay' to 'jest/są' dla istnienia czegoś! Nie wskazuje dokładnej lokalizacji, ale mówi że coś istnieje w okolicy. To jak znalezienie skarbu - wiesz że jest gdzieś blisko!"
      },
      {
        id: "pl_3",
        question: "Para llegar al museo nacional debes _____ todo recto hasta el semáforo y luego girar a la derecha.",
        translation: "(Żeby dotrzeć do muzeum narodowego musisz iść prosto do świateł i potem skręcić w prawo)",
        options: ["seguir", "ir", "caminar", "andar"],
        correct: "seguir",
        explanation: "'Seguir' to kontynuować, iść dalej - idealne dla wskazówek! 'Seguir recto' to iść prosto. To jak nawigacja GPS - daje ci precyzyjne instrukcje krok po kroku!"
      },
      {
        id: "pl_4",
        question: "La biblioteca municipal _____ entre el parque infantil y la oficina de correos amarilla.",
        translation: "(Biblioteka miejska jest między placem zabaw a żółtą pocztą)",
        options: ["está", "es", "hay", "tiene"],
        correct: "está",
        explanation: "'Estar entre' to być pomiędzy! 'Entre' wymaga 'estar', bo to pozycja. To jak kanapka - biblioteka jest w środku między dwoma miejscami. Łatwo zapamiętać!"
      },
      {
        id: "pl_5",
        question: "¿_____ dónde está la parada de autobús más cercana desde aquí por favor?",
        translation: "(Czy wiesz gdzie jest najbliższy przystanek autobusowy stąd proszę?)",
        options: ["Sabes", "Conoces", "Entiendes", "Comprendes"],
        correct: "Sabes",
        explanation: "'Saber' używamy dla informacji, faktów! 'Sabes dónde' (wiesz gdzie) to pytanie o wiedzę. 'Conocer' jest dla znajomości osób i miejsc. Subtelna różnica, wielka moc!"
      },
      {
        id: "pl_6",
        question: "Mi casa _____ a veinte minutos caminando desde el centro histórico de la ciudad vieja.",
        translation: "(Mój dom jest dwadzieścia minut spacerem od historycznego centrum starego miasta)",
        options: ["está", "es", "queda", "se encuentra"],
        correct: "está",
        explanation: "'Estar a + odległość' to standard dla dystansu! '¿A cuánto está?' (jak daleko jest?) to praktyczne pytanie podróżnika. Mierzenie w czasie spaceru jest bardzo hiszpańskie!"
      },
      {
        id: "pl_7",
        question: "En mi barrio residencial _____ tres escuelas públicas, dos parques grandes y una piscina municipal.",
        translation: "(W mojej dzielnicy mieszkalnej są trzy szkoły publiczne, dwa duże parki i basen miejski)",
        options: ["hay", "están", "son", "tienen"],
        correct: "hay",
        explanation: "'Hay' dla wymieniania tego, co istnieje w okolicy! To jak inwentarz dzielnicy. Używaj 'hay' kiedy liczysz i wymieniasz obiekty w rejonie. Proste i skuteczne!"
      },
      {
        id: "pl_8",
        question: "La cafetería donde nos reunimos siempre _____ en la planta baja del edificio moderno de cristal.",
        translation: "(Kawiarnia, gdzie zawsze się spotykamy, jest na parterze nowoczesnego szklanego budynku)",
        options: ["está", "es", "hay", "queda"],
        correct: "está",
        explanation: "'Estar en la planta baja' to być na parterze! Piętra budynków zawsze z 'estar'. To jak adres wewnątrz budynku - precyzyjny i jasny!"
      },
      {
        id: "pl_9",
        question: "¿Me podría _____ cómo llegar a la estación de tren desde aquí a pie?",
        translation: "(Czy mógłby mi Pan wskazać jak dojść do dworca kolejowego stąd pieszo?)",
        options: ["indicar", "decir", "explicar", "mostrar"],
        correct: "indicar",
        explanation: "'Indicar cómo llegar' to wskazać jak dojść - bardzo formalne i grzeczne! To profesjonalny sposób pytania o drogę. Uprzejmość zawsze otwiera drzwi i serca!"
      },
      {
        id: "pl_10",
        question: "La plaza principal del pueblo _____ rodeada de edificios históricos muy antiguos y hermosos.",
        translation: "(Główny plac miasteczka jest otoczony bardzo starymi i pięknymi historycznymi budynkami)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar rodeado de' to być otoczonym przez! 'Estar' + participio dla stanu rezultatu. Hiszpańskie place są sercem społeczności - miejscem spotkań i życia!"
      },
      {
        id: "pl_11",
        question: "El aeropuerto internacional _____ ubicado a cuarenta kilómetros al norte de la capital del país.",
        translation: "(Międzynarodowe lotnisko jest zlokalizowane czterdzieści kilometrów na północ od stolicy kraju)",
        options: ["está", "es", "hay", "queda"],
        correct: "está",
        explanation: "'Estar ubicado' to być zlokalizowanym - formalne wyrażenie! Używane dla ważnych miejsc jak lotniska. To jak oficjalna mapa - precyzyjna i profesjonalna!"
      },
      {
        id: "pl_12",
        question: "En el primer piso de este centro comercial _____ tiendas de ropa y en el segundo restaurantes variados.",
        translation: "(Na pierwszym piętrze tego centrum handlowego są sklepy z ubraniami, a na drugim różne restauracje)",
        options: ["hay", "están", "son", "tienen"],
        correct: "hay",
        explanation: "'Hay' dla ogólnego istnienia na piętrze! Nie wskazuje konkretnych lokalizacji, tylko mówi co tam znajdziesz. To jak mapa centrum - overview każdego poziomu!"
      },
      {
        id: "pl_13",
        question: "Mi oficina _____ frente al parque central, así que tengo una vista muy agradable desde la ventana.",
        translation: "(Moje biuro jest naprzeciwko centralnego parku, así que tengo una vista muy agradable desde la ventana)",
        options: ["está", "es", "se encuentra", "queda"],
        correct: "está",
        explanation: "'Estar frente a' to być naprzeciwko! To jak być twarzą w twarz z czymś. Widok na park to przywilej - natura pomaga w pracy!"
      },
      {
        id: "pl_14",
        question: "¿_____ muy lejos de aquí el hospital general? Mi amigo necesita atención médica urgente.",
        translation: "(Czy daleko stąd jest szpital ogólny? Mój przyjaciel potrzebuje pilnej pomocy medycznej)",
        options: ["Está", "Es", "Hay", "Queda"],
        correct: "Está",
        explanation: "'¿Está lejos?' to klasyczne pytanie o odległość! Odpowiedź może być 'Está cerca' (jest blisko) lub 'Está lejos' (jest daleko). W nagłych wypadkach każda minuta się liczy!"
      },
      {
        id: "pl_15",
        question: "Después del semáforo tienes que _____ a la izquierda en la segunda calle pequeña.",
        translation: "(Po światłach musisz skręcić w lewo w drugą małą uliczkę)",
        options: ["girar", "torcer", "doblar", "voltear"],
        correct: "girar",
        explanation: "'Girar' to skręcać - najczęstszy czasownik dla nawigacji! 'Girar a la izquierda/derecha' to podstawa wskazówek drogowych. To jak kompas słowny - zawsze cię poprowadzi!"
      }
    ]
  },

  hobbies_and_interests: {
    name: "Hobby i zainteresowania",
    description: "Rozmawiaj o swoich pasjach i wolnym czasie",
    icon: Music,
    color: "from-purple-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "hob_1",
        question: "En mi tiempo libre me _____ mucho leer novelas de misterio y aventuras emocionantes.",
        translation: "(W moim wolnym czasie bardzo lubię czytać powieści kryminalne i ekscytujące przygodowe)",
        options: ["gusta", "gustan", "encanta", "encantan"],
        correct: "gusta",
        explanation: "'Me gusta + infinitivo' to lubię coś robić! Infinityw jest zawsze singular, więc 'gusta'. Czytanie to okno do innych światów - najlepsze hobby!"
      },
      {
        id: "hob_2",
        question: "Los domingos por la mañana siempre _____ a jugar al fútbol con mis amigos del barrio.",
        translation: "(W niedzielne poranki zawsze chodzę grać w piłkę nożną z moimi przyjaciółmi z dzielnicy)",
        options: ["salgo", "voy", "me voy", "vengo"],
        correct: "salgo",
        explanation: "'Salir a + infinitivo' to wychodzić żeby coś robić! Pokazuje ruch z domu na zewnątrz. W Hiszpanii sport niedzielny to święta tradycja!"
      },
      {
        id: "hob_3",
        question: "Mi hermana _____ la guitarra española desde hace cinco años y toca maravillosamente bien.",
        translation: "(Moja siostra gra na hiszpańskiej gitarze od pięciu lat i gra cudownie dobrze)",
        options: ["toca", "juega", "hace", "practica"],
        correct: "toca",
        explanation: "'Tocar' używamy dla instrumentów muzycznych! 'Jugar' jest dla gier i sportów. Muzyka jest uniwersalnym językiem - łączy serca i kultury!"
      },
      {
        id: "hob_4",
        question: "Me _____ muchísimo viajar a países exóticos y conocer culturas diferentes de todo el mundo.",
        translation: "(Bardzo uwielbiam podróżować do egzotycznych krajów i poznawać różne kultury z całego świata)",
        options: ["encanta", "gusta", "fascina", "apasiona"],
        correct: "encanta",
        explanation: "'Encantar' to uwielbiać z pasją! Silniejsze niż 'gustar'. Dla hobby które naprawdę kochasz używaj 'encantar'. Podróże wzbogacają duszę i otwierają umysł!"
      },
      {
        id: "hob_5",
        question: "Cada fin de semana _____ senderismo en las montañas cercanas para estar en contacto con la naturaleza.",
        translation: "(Każdy weekend uprawiam turystykę pieszą w pobliskich górach, żeby być w kontakcie z naturą)",
        options: ["hago", "practico", "realizo", "juego"],
        correct: "hago",
        explanation: "'Hacer senderismo' to uprawiać turystykę pieszą! 'Hacer' używamy dla wielu aktywności: hacer yoga, hacer deporte. To twój czasownik aktywności! Natura leczy duszę!"
      },
      {
        id: "hob_6",
        question: "Mi padre _____ coleccionando sellos postales antiguos de diferentes países desde que era joven.",
        translation: "(Mój ojciec kolekcjonuje stare znaczki pocztowe z różnych krajów odkąd był młody)",
        options: ["lleva", "está", "sigue", "continúa"],
        correct: "lleva",
        explanation: "'Llevar + gerundio' to robić coś od długiego czasu! 'Lleva coleccionando' pokazuje pasję trwającą lata. Kolekcjonowanie to zachowywanie historii w małych kawałkach!"
      },
      {
        id: "hob_7",
        question: "Los jóvenes de hoy en día _____ mucho tiempo jugando videojuegos en línea con amigos.",
        translation: "(Młodzi ludzie dzisiaj spędzają dużo czasu grając w gry wideo online z przyjaciółmi)",
        options: ["pasan", "están", "hacen", "juegan"],
        correct: "pasan",
        explanation: "'Pasar tiempo + gerundio' to spędzać czas robiąc coś! To opisuje jak wykorzystujesz swój czas. Gry online łączą przyjaciół na dystans - nowoczesna forma socjalizacji!"
      },
      {
        id: "hob_8",
        question: "Me gustaría _____ a pintar cuadros artísticos porque me parece muy relajante y creativo.",
        translation: "(Chciałbym nauczyć się malować artystyczne obrazy, bo wydaje mi się bardzo relaksujące i kreatywne)",
        options: ["aprender", "saber", "conocer", "estudiar"],
        correct: "aprender",
        explanation: "'Aprender a' to nauczyć się robić coś nowego! Pokazuje proces nabywania umiejętności. Sztuka wyraża to, czego słowa nie mogą - dusza mówi przez pędzel!"
      },
      {
        id: "hob_9",
        question: "En verano _____ mucho la natación en la piscina porque me ayuda a refrescarme del calor.",
        translation: "(Latem bardzo uprawiam pływanie w basenie, bo pomaga mi się ochłodzić od upału)",
        options: ["practico", "hago", "juego", "realizo"],
        correct: "practico",
        explanation: "'Practicar' to uprawiać sport systematycznie! Bardziej profesjonalne niż tylko 'hacer'. Pływanie to kompletne ćwiczenie - dla ciała i umysłu równocześnie!"
      },
      {
        id: "hob_10",
        question: "Mi mejor amigo _____ aficionado al cine clásico español y colecciona películas antiguas en DVD.",
        translation: "(Mój najlepszy przyjaciel jest fanem klasycznego kina hiszpańskiego i kolekcjonuje stare filmy na DVD)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Ser aficionado a' to być fanem czegoś! To część tożsamości - jego pasja definiuje go. Hiszpańskie kino ma bogatą historię pełną arcydzieł!"
      },
      {
        id: "hob_11",
        question: "_____ el ajedrez requiere mucha concentración, paciencia y estrategia mental avanzada.",
        translation: "(Granie w szachy wymaga dużej koncentracji, cierpliwości i zaawansowanej strategii mentalnej)",
        options: ["Jugar a", "Tocar", "Hacer", "Practicar"],
        correct: "Jugar a",
        explanation: "'Jugar a + gra' to grać w grę! Szachy to 'el ajedrez' - zawsze z 'jugar a'. To gimnastyka dla mózgu - każdy ruch ma znaczenie!"
      },
      {
        id: "hob_12",
        question: "Me gusta _____ fotografías artísticas de paisajes naturales cuando viajo por el campo.",
        translation: "(Lubię robić artystyczne fotografie naturalnych krajobrazów, kiedy podróżuję po wsi)",
        options: ["hacer", "tomar", "sacar", "poner"],
        correct: "hacer",
        explanation: "'Hacer fotografías' to robić zdjęcia w Hiszpanii! W Ameryce częściej 'sacar' lub 'tomar'. Fotografia zamraża piękne momenty na zawsze - to magia światła!"
      },
      {
        id: "hob_13",
        question: "Mis abuelos _____ la jardinería como pasatiempo tranquilo y cultivan verduras orgánicas frescas.",
        translation: "(Moi dziadkowie uprawiają ogrodnictwo jako spokojne hobby i hodują świeże organiczne warzywa)",
        options: ["practican", "hacen", "tienen", "son"],
        correct: "practican",
        explanation: "'Practicar la jardinería' to uprawiać ogrodnictwo! To aktywne hobby wymagające cierpliwości. Ogród to medytacja w ruchu - rośliny uczą nas życia!"
      },
      {
        id: "hob_14",
        question: "¿_____ alguna vez hacer paracaidismo o algún otro deporte extremo de adrenalina?",
        translation: "(Czy kiedykolwiek próbowałeś skakać ze spadochronem lub jakiegoś innego ekstremalnego sportu adrenaliny?)",
        options: ["Has probado", "Has intentado", "Has hecho", "Has practicado"],
        correct: "Has probado",
        explanation: "'Probar' to spróbować czegoś po raz pierwszy! '¿Has probado?' pyta o doświadczenie życiowe. Sporty ekstremalne to test odwagi - dla odważnych serc!"
      },
      {
        id: "hob_15",
        question: "Mi pasatiempo favorito _____ escuchar música clásica mientras leo libros interesantes en casa.",
        translation: "(Moim ulubionym hobby jest słuchanie muzyki klasycznej podczas czytania ciekawych książek w domu)",
        options: ["es", "está", "hace", "tiene"],
        correct: "es",
        explanation: "'Ser' dla identyfikacji twojego hobby! 'Mi pasatiempo es...' definiuje co lubisz robić. To jak twoją kartę wizytową osobistych zainteresowań!"
      }
    ]
  },

  verbs_like_gustar: {
    name: "Czasowniki typu 'gustar'",
    description: "Opanuj odwróconą strukturę zdań",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "vg_1",
        question: "A mi madre _____ mucho las flores frescas, especialmente las rosas rojas del jardín.",
        translation: "(Mojej mamie bardzo podobają się świeże kwiaty, szczególnie czerwone róże z ogrodu)",
        options: ["le gustan", "le gusta", "les gustan", "la gustan"],
        correct: "le gustan",
        explanation: "'Gustar' zgadza się z rzeczą! 'Las flores' liczba mnoga = 'gustan'. 'Le' to 'jej'. To jak odwrócony świat - rzeczy robią podobanie się, nie ty lubisz!"
      },
      {
        id: "vg_2",
        question: "¿_____ el chocolate caliente con churros para el desayuno típico español?",
        translation: "(Czy lubisz gorącą czekoladę z churros na typowe hiszpańskie śniadanie?)",
        options: ["Te gusta", "Te gustan", "Le gusta", "Les gusta"],
        correct: "Te gusta",
        explanation: "'El chocolate' singular = 'gusta'! 'Te' dla ty (nieformalnie). Churros z czekoladą to hiszpański skarb narodowy - musisz spróbować!"
      },
      {
        id: "vg_3",
        question: "A nosotros _____ ir al cine los viernes por la noche para relajarnos después de la semana.",
        translation: "(Nam się podoba chodzić do kina w piątkowe wieczory, żeby się zrelaksować po tygodniu)",
        options: ["nos gusta", "nos gustan", "les gusta", "os gusta"],
        correct: "nos gusta",
        explanation: "'Nos' to nam! Infinityw 'ir' jest singular, więc 'gusta'. Piątkowe kino to rytuał końca tygodnia - zasłużona nagroda za ciężką pracę!"
      },
      {
        id: "vg_4",
        question: "A los niños pequeños no _____ comer verduras, prefieren dulces y helados cremosos.",
        translation: "(Małym dzieciom nie podoba się jeść warzyw, wolą słodycze i kremowe lody)",
        options: ["les gusta", "les gustan", "le gusta", "los gusta"],
        correct: "les gusta",
        explanation: "'Les' dla 'im' (dzieci - liczba mnoga)! 'Comer' infinityw = singular 'gusta'. To uniwersalna prawda o dzieciach - warzywa są wyzwaniem!"
      },
      {
        id: "vg_5",
        question: "Me _____ las películas de terror porque me dan miedo y no puedo dormir después.",
        translation: "(Nie lubię filmów grozy, bo mi straszno i nie mogę spać potem)",
        options: ["disgustan", "gustan", "encantan", "fascinan"],
        correct: "disgustan",
        explanation: "'Disgustar' to nie podobać się - przeciwieństwo 'gustar'! Używamy gdy coś nam się nie podoba. Strach przed horrorami jest naturalny - to instynkt samozachowawczy!"
      },
      {
        id: "vg_6",
        question: "A ti _____ la música rock en español o prefieres otros géneros musicales más tranquilos?",
        translation: "(Czy podoba ci się hiszpański rock czy wolisz inne spokojniejsze gatunki muzyczne?)",
        options: ["te gusta", "te gustan", "le gusta", "les gusta"],
        correct: "te gusta",
        explanation: "'La música' singular = 'gusta'! To pytanie o gust muzyczny. Hiszpański rock ma wyjątkową energię - od balad do hard rocka!"
      },
      {
        id: "vg_7",
        question: "A mi profesor _____ los estudiantes que hacen preguntas inteligentes y participan activamente en clase.",
        translation: "(Mojemu nauczycielowi podobają się studenci, którzy zadają inteligentne pytania i aktywnie uczestniczą w zajęciach)",
        options: ["le gustan", "le gusta", "les gustan", "lo gustan"],
        correct: "le gustan",
        explanation: "'Los estudiantes' liczba mnoga = 'gustan'! 'Le' dla nauczyciela. Aktywni studenci są radością każdego nauczyciela - uczenie to taniec dwojga!"
      },
      {
        id: "hob_8",
        question: "¿_____ probar comidas exóticas de diferentes países cuando viajas al extranjero?",
        translation: "(Czy lubisz próbować egzotyczne jedzenie z różnych krajów, kiedy podróżujesz za granicę?)",
        options: ["Te gusta", "Te gustan", "Le gusta", "Les gusta"],
        correct: "Te gusta",
        explanation: "'Probar' infinityw = singular 'gusta'! Próbowanie nowych smaków to przygoda kulinarna. Jedzenie opowiada historie kultur - każdy kęs to lekcja!"
      },
      {
        id: "vg_9",
        question: "A mis abuelos _____ cuando toda la familia se reúne para las celebraciones importantes juntos.",
        translation: "(Moim dziadkom się podoba, kiedy cała rodzina zbiera się na ważne uroczystości razem)",
        options: ["les encanta", "les gusta", "les fascina", "les agrada"],
        correct: "les encanta",
        explanation: "'Encantar' dla intensywnej radości! 'Les' dla dziadków (im). Rodzinne spotkania są skarbem dla starszego pokolenia - czas z bliskimi jest bezcenny!"
      },
      {
        id: "vg_10",
        question: "No me _____ nada madrugar los lunes para ir al trabajo temprano en la mañana fría.",
        translation: "(Wcale mi się nie podoba wstawać wcześnie w poniedziałki, żeby iść do pracy wcześnie w zimny ranek)",
        options: ["gusta", "gustan", "encanta", "agrada"],
        correct: "gusta",
        explanation: "'No me gusta nada' to wcale mi się nie podoba! 'Madrugar' infinityw = singular. Poniedziałkowe poranki są trudne dla wszystkich - to uniwersalne!"
      },
      {
        id: "vg_11",
        question: "A la mayoría de la gente _____ las vacaciones de verano en la playa con sol.",
        translation: "(Większości ludzi podobają się letnie wakacje na plaży ze słońcem)",
        options: ["le gustan", "le gusta", "les gustan", "les gusta"],
        correct: "le gustan",
        explanation: "'La gente' to liczba pojedyncza (pomimo znaczenia)! 'Las vacaciones' mnoga = 'gustan'. Plaża to miejsce szczęścia - słońce, morze i wolność!"
      },
      {
        id: "vg_12",
        question: "Me _____ fatal tener que esperar en colas largas, me pone muy impaciente y nervioso.",
        translation: "(Okropnie nie znoszę musieć czekać w długich kolejkach, czyni mnie bardzo niecierpliwym i nerwowym)",
        options: ["cae", "sienta", "viene", "pone"],
        correct: "cae",
        explanation: "'Caer fatal' to bardzo nie lubić czegoś! Kolokwialne wyrażenie silniejsze niż 'no gustar'. Kolejki testują cierpliwość - wszyscy to znamy!"
      },
      {
        id: "vg_13",
        question: "A ti _____ bien mi nuevo corte de pelo moderno o prefieres como lo tenía antes?",
        translation: "(Czy podoba ci się moja nowa modna fryzura czy wolisz jak miałem wcześniej?)",
        options: ["te cae", "te sienta", "te gusta", "te viene"],
        correct: "te cae",
        explanation: "'Caer bien' to podobać się (o osobach, stylach)! Różne od 'gustar' - bardziej o ogólnym wrażeniu. Fryzury zmieniają wizerunek - czasem trzeba odwagi!"
      },
      {
        id: "vg_14",
        question: "A mi hermana pequeña _____ los animales domésticos, especialmente los gatitos tiernos y juguetones.",
        translation: "(Mojej małej siostrze uwielbiają się zwierzęta domowe, szczególnie słodkie i rozbrykane kotki)",
        options: ["le encantan", "le encanta", "les encantan", "la encantan"],
        correct: "le encantan",
        explanation: "'Los animales' liczba mnoga = 'encantan'! 'Encantar' dla prawdziwej miłości do zwierząt. Dzieci i zwierzęta to naturalna przyjaźń - czysta i prawdziwa!"
      },
      {
        id: "vg_15",
        question: "Nos _____ fatal que la gente hable alto en el cine durante la película importante.",
        translation: "(Okropnie nie podoba nam się, że ludzie mówią głośno w kinie podczas ważnego filmu)",
        options: ["molesta", "fastidia", "cae", "sienta"],
        correct: "molesta",
        explanation: "'Molestar' to denerwować, przeszkadzać! Jak 'gustar' ale negatywnie. Szacunek w kinie to podstawa - cisza pozwala wszystkim cieszyć się filmem!"
      }
    ]
  },

  reflexive_verbs_advanced: {
    name: "Czasowniki zwrotne zaawansowane",
    description: "Pogłęb wiedzę o czasownikach zwrotnych",
    icon: Waves,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "ref_adv_1",
        question: "Mi hijo adolescente _____ a las diez de la noche todos los días escolares para descansar bien.",
        translation: "(Mój nastoletni syn kładzie się spać o dziesiątej wieczorem każdego dnia szkolnego, żeby dobrze odpocząć)",
        options: ["se acuesta", "acuesta", "se duerme", "duerme"],
        correct: "se acuesta",
        explanation: "'Acostarse' to kłaść się (akcja)! 'Dormirse' to zasypiać. 'Se' pokazuje że robi to dla siebie. Dobry sen to fundament zdrowia młodych!"
      },
      {
        id: "ref_adv_2",
        question: "Ellos _____ de todo lo que les dices, nunca toman en serio tus consejos sabios.",
        translation: "(Oni śmieją się ze wszystkiego, co im mówisz, nigdy nie biorą na poważnie tus mądrych rad)",
        options: ["se ríen", "ríen", "se burlan", "burlan"],
        correct: "se ríen",
        explanation: "'Reírse de' to śmiać się z czegoś! Zawsze zwrotny - 'se ríen'. 'Burlarse' to wyśmiewać się (bardziej negatywne). Śmiech jest zdrowy, ale nie kosztem innych!"
      },
      {
        id: "ref_adv_3",
        question: "No _____ de las personas mayores, merecen nuestro respeto y admiración siempre.",
        translation: "(Nie wyśmiewaj się ze starszych osób, zasługują na nasz szacunek i podziw zawsze)",
        options: ["te burles", "burles", "te rías", "rías"],
        correct: "te burles",
        explanation: "Przeczący rozkaz z czasownikiem zwrotnym! 'No te burles' to nie wyśmiewaj się. Szacunek dla starszych to fundament dobrego wychowania!"
      },
      {
        id: "ref_adv_4",
        question: "Mis padres _____ mucho por mí cuando no llego a casa a la hora prometida.",
        translation: "(Moi rodzice bardzo się martwią o mnie, kiedy nie wracam do domu o obiecanej godzinie)",
        options: ["se preocupan", "preocupan", "se preocupan de", "preocupan de"],
        correct: "se preocupan",
        explanation: "'Preocuparse por' to martwić się o kogoś! Zawsze zwrotny. Rodzice zawsze się martwią - to język ich miłości. Bądź punktualny dla ich spokoju!"
      },
      {
        id: "ref_adv_5",
        question: "Me _____ perfectamente de aquel día maravilloso cuando nos conocimos por primera vez.",
        translation: "(Doskonale pamiętam tamten cudowny día, kiedy poznaliśmy się po raz pierwszy)",
        options: ["acuerdo", "recuerdo", "me acuerdo", "me recuerdo"],
        correct: "acuerdo",
        explanation: "'Acordarse de' to pamiętać (potrzebuje 'de')! 'Recordar' nie wymaga 'de'. Pierwsze spotkania są zapisane w sercu na zawsze - magiczne momenty!"
      },
      {
        id: "ref_adv_6",
        question: "Ella _____ muy elegante para la boda de su hermana mayor el sábado próximo.",
        translation: "(Ona ubiera się bardzo elegancko na ślub swojej starszej siostry w przyszłą sobotę)",
        options: ["se viste", "viste", "se pone", "pone"],
        correct: "se viste",
        explanation: "'Vestirse' to ubierać się (cały proces)! 'Ponerse' to zakładać konkretną rzecz. Wesela w Hiszpanii to wielkie święta - elegancja obowiązuje!"
      },
      {
        id: "ref_adv_7",
        question: "Los estudiantes _____ mucho durante las vacaciones de verano después del año escolar intenso.",
        translation: "(Studenci bardzo się nudzą podczas letnich wakacji po intensywnym roku szkolnym)",
        options: ["se aburren", "aburren", "están aburridos", "son aburridos"],
        correct: "se aburren",
        explanation: "'Aburrirse' to nudzić się (odczuwać nudę)! 'Estar aburrido' to stan, 'aburrirse' to proces. Paradoks wakacji - czasem za dużo wolnego czasu!"
      },
      {
        id: "ref_adv_8",
        question: "Mi hermano mayor _____ con su novia desde hace tres años, están muy enamorados.",
        translation: "(Mój starszy brat chodzi ze swoją dziewczyną od trzech lat, są bardzo zakochani)",
        options: ["sale", "se sale", "queda", "se queda"],
        correct: "sale",
        explanation: "'Salir con' to chodzić z kimś (randkować)! NIE jest zwrotny! Proste 'sale con'. Długie związki są piękne - miłość potrzebuje czasu!"
      },
      {
        id: "ref_adv_9",
        question: "_____ bien las manos antes de cocinar para mantener la higiene alimentaria adecuada.",
        translation: "(Umyj sobie dobrze ręce przed gotowaniem, żeby utrzymać odpowiednią higienę żywności)",
        options: ["Lávate", "Lava", "Te lava", "Lávase"],
        correct: "Lávate",
        explanation: "'Lávate' to umyj się/sobie! Rozkaz zwrotny łączy czasownik z zaimkiem. Higiena w kuchni to nie negocjacja - to zdrowie twoje i innych!"
      },
      {
        id: "ref_adv_10",
        question: "Mi mejor amiga _____ muy triste cuando su gato querido desapareció la semana pasada.",
        translation: "(Moja najlepsza przyjaciółka bardzo się zasmucała, kiedy jej ukochany kot zniknął w zeszłym tygodniu)",
        options: ["se puso", "puso", "estuvo", "fue"],
        correct: "se puso",
        explanation: "'Ponerse triste' to zasmucić się (zmiana stanu)! Pokazuje przejście z normalności do smutku. Zwierzęta to członkowie rodziny - ich utrata boli!"
      },
      {
        id: "ref_adv_11",
        question: "Nos _____ en el restaurante italiano a las ocho para cenar todos juntos.",
        translation: "(Spotykamy się w włoskiej restauracji o ósmej, żeby razem zjeść kolację)",
        options: ["encontramos", "encontremos", "vemos", "reunimos"],
        correct: "encontramos",
        explanation: "'Encontrarse' to spotykać się (wzajemnie)! Zwrotny pokazuje wzajemność. Kolacje z przyjaciółmi są żywą tradycją - jedzenie łączy ludzi!"
      },
      {
        id: "ref_adv_12",
        question: "Mi padre _____ todos los días laborables a las seis de la mañana sin despertador.",
        translation: "(Mój ojciec budzi się codziennie w dni robocze o szóstej rano bez budzika)",
        options: ["se despierta", "despierta", "se levanta", "levanta"],
        correct: "se despierta",
        explanation: "'Despertarse' to budzić się samemu! 'Despertar' to budzić kogoś. Wewnętrzny zegar biologiczny jest lepszy niż alarm - ciało wie!"
      },
      {
        id: "ref_adv_13",
        question: "Ella _____ del nombre de la película que vimos juntos la semana pasada en el cine.",
        translation: "(Ona nie pamięta nazwy filmu, który widzieliśmy razem w zeszłym tygodniu w kinie)",
        options: ["no se acuerda", "no acuerda", "no recuerda", "no se recuerda"],
        correct: "no se acuerda",
        explanation: "'No acordarse de' to nie pamiętać! Wymaga 'de' na końcu. Zapominanie nazw filmów zdarza się wszystkim - to normalne!"
      },
      {
        id: "ref_adv_14",
        question: "Los novios _____ el año que viene en una ceremonia bonita en la playa al atardecer.",
        translation: "(Narzeczeni biorą ślub w przyszłym roku w pięknej ceremonii na plaży o zachodzie słońca)",
        options: ["se casan", "casan", "se celebran", "celebran"],
        correct: "se casan",
        explanation: "'Casarse' to brać ślub - zawsze zwrotny! Pokazuje wzajemność dwojga ludzi. Śluby na plaży o zachodzie to marzenie - natura jako świadek miłości!"
      },
      {
        id: "ref_adv_15",
        question: "Me _____ fatal cuando llego tarde a las citas importantes por culpa del tráfico horrible.",
        translation: "(Czuję się okropnie, kiedy spóźniam się na ważne spotkania z powodu okropnego ruchu)",
        options: ["siento", "me siento", "pongo", "me pongo"],
        correct: "siento",
        explanation: "'Sentirse fatal' to czuć się okropnie! 'Sentir' vs 'sentirse' - oba możliwe tu. Spóźnienia stresują - wszyscy to rozumiemy, ruch bywa nieprzewidywalny!"
      }
    ]
  },

  past_tenses_comparison: {
    name: "Porównanie czasów przeszłych",
    description: "Różnice między pretérito i imperfecto",
    icon: Clock,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "past_1",
        question: "Ayer _____ a mi antigua profesora de español en el supermercado por casualidad.",
        translation: "(Wczoraj spotkałem moją dawną nauczycielkę hiszpańskiego w supermarkecie przypadkowo)",
        options: ["vi", "veía", "he visto", "veo"],
        correct: "vi",
        explanation: "Konkretne wydarzenie wczoraj używa pretérito! 'Vi' to proste, zakończone wydarzenie. Raz, w konkretnym momencie. To jak fotografia - pojedyncza chwila w czasie!"
      },
      {
        id: "past_2",
        question: "Cuando _____ niño, siempre jugaba en el parque con mis amigos del vecindario todos los días.",
        translation: "(Kiedy byłem dzieckiem, zawsze bawiłem się w parku z moimi przyjaciółmi z sąsiedztwa codziennie)",
        options: ["era", "fui", "estaba", "he sido"],
        correct: "era",
        explanation: "Opis w przeszłości używa imperfecto! 'Era niño' to stan, nie wydarzenie. To jak tło obrazu - kontekst dla innych akcji. Dzieciństwo to okres, nie moment!"
      },
      {
        id: "past_3",
        question: "Estaba leyendo tranquilamente cuando _____ el teléfono y me asusté del ruido fuerte.",
        translation: "(Spokojnie czytałem, kiedy zadzwonił telefon i przestraszyłem się głośnego dźwięku)",
        options: ["sonó", "sonaba", "ha sonado", "suena"],
        correct: "sonó",
        explanation: "Akcja przerywająca używa pretérito! 'Sonó' przerwało czytanie. Imperfecto dla tła (czytanie), pretérito dla przerwania (dzwonek). To jak film - tło i akcja!"
      },
      {
        id: "past_4",
        question: "Antes _____ en un piso pequeño en el centro, pero ahora tenemos una casa grande con jardín.",
        translation: "(Wcześniej mieszkaliśmy w małym mieszkaniu w centrum, ale teraz mamy duży dom z ogrodem)",
        options: ["vivíamos", "vivimos", "hemos vivido", "vivíamos"],
        correct: "vivíamos",
        explanation: "'Antes' sygnalizuje imperfecto! To opis przeszłej sytuacji, która trwała. Nie wiemy kiedy dokładnie się zmieniło - to proces życia, nie moment!"
      },
      {
        id: "past_5",
        question: "El ladrón _____ por la ventana abierta mientras todos dormían profundamente en la noche.",
        translation: "(Złodziej wszedł przez otwarte okno, podczas gdy wszyscy spali głęboko w nocy)",
        options: ["entró", "entraba", "ha entrado", "entra"],
        correct: "entró",
        explanation: "Główna akcja w narracji to pretérito! 'Entró' to kluczowe wydarzenie. 'Dormían' to tło. To jak kryminał - główne zdarzenie wyróżnia się!"
      },
      {
        id: "past_6",
        question: "_____ las tres de la tarde cuando finalmente llegamos al hotel después del largo viaje agotador.",
        translation: "(Była trzecia po południu, kiedy w końcu dotarliśmy do hotelu po długiej wyczerpującej podróży)",
        options: ["Eran", "Fueron", "Han sido", "Son"],
        correct: "Eran",
        explanation: "Godzina w przeszłości zawsze imperfecto! 'Eran las tres' to kontekst czasowy. To jak scenografia teatralna - ustawia scenę dla akcji!"
      },
      {
        id: "past_7",
        question: "De repente _____ un ruido extraño en el sótano oscuro y bajé a investigar con linterna.",
        translation: "(Nagle usłyszałem dziwny hałas w ciemnej piwnicy i zszedłem zbadać z latarką)",
        options: ["escuché", "escuchaba", "he escuchado", "escucho"],
        correct: "escuché",
        explanation: "'De repente' sygnalizuje pretérito! Nagłe wydarzenia używają pretérito - to niespodziewany moment. Jak grom z jasnego nieba - szybko i konkretnie!"
      },
      {
        id: "past_8",
        question: "Todos los veranos _____ a la playa durante un mes entero para disfrutar del mar.",
        translation: "(Każdego lata jeździliśmy na plażę na cały miesiąc, żeby cieszyć się morzem)",
        options: ["íbamos", "fuimos", "hemos ido", "vamos"],
        correct: "íbamos",
        explanation: "'Todos los veranos' to powtarzane wydarzenia! Imperfecto dla rutyn przeszłych. To jak tradycja rodzinna - rok po roku, piękne wspomnienia budowane!"
      },
      {
        id: "past_9",
        question: "El profesor _____ explicando la lección cuando un estudiante hizo una pregunta interesante inesperada.",
        translation: "(Nauczyciel wyjaśniał lekcję, kiedy student zadał ciekawą niespodziewaną pytanie)",
        options: ["estaba", "estuvo", "ha estado", "está"],
        correct: "estaba",
        explanation: "'Estar + gerundio' w przeszłości używa imperfecto! To akcja w toku, która była przerwana. Jak film w slow motion - trwające działanie!"
      },
      {
        id: "past_10",
        question: "_____ el examen difícil en solo dos horas concentradas sin ayuda de nadie más.",
        translation: "(Ukończyłem trudny egzamin w zaledwie dwie skoncentrowane godziny bez niczyjej pomocy)",
        options: ["Terminé", "Terminaba", "he terminado", "Termino"],
        correct: "Terminé",
        explanation: "Osiągnięcie zakończone to pretérito! 'Terminé' pokazuje konkretny sukces. Moment dumy - zrobiłeś to sam! Twoje osiągnięcie, twoja chwała!"
      },
      {
        id: "past_11",
        question: "Siempre _____ helado de chocolate después de cenar cuando era niño pequeño feliz.",
        translation: "(Zawsze jadłem lody czekoladowe po kolacji, kiedy byłem małym szczęśliwym dzieckiem)",
        options: ["comía", "comí", "he comido", "como"],
        correct: "comía",
        explanation: "'Siempre' w przeszłości to imperfecto! Nawyk dzieciństwa, powtarzany bez końca. To słodkie wspomnienie - dziecięce radości są najczystsze!"
      },
      {
        id: "past_12",
        question: "Anoche no _____ dormir bien porque los vecinos hicieron mucho ruido hasta muy tarde.",
        translation: "(Wczoraj w nocy nie mogłem dobrze spać, bo sąsiedzi robili dużo hałasu do bardzo późna)",
        options: ["pude", "podía", "he podido", "puedo"],
        correct: "pude",
        explanation: "'Anoche' konkretna noc = pretérito! 'Pude' dla jednorazowej niemożności. Sąsiedzi głośni to uniwersalny problem mieszkańców bloków!"
      },
      {
        id: "past_13",
        question: "_____ lloviendo toda la semana pasada sin parar, por eso no pudimos salir a pasear.",
        translation: "(Padało cały zeszły tydzień bez przerwy, dlatego nie mogliśmy wyjść na spacer)",
        options: ["Estuvo", "Estaba", "Ha estado", "Está"],
        correct: "Estuvo",
        explanation: "'Estuvo lloviendo' dla akcji ciągłej ale zakończonej! Cały tydzień, ale teraz skończone. Pretérito pokazuje że deszcz się zakończył. Słońce zawsze wraca!"
      },
      {
        id: "past_14",
        question: "De pequeña mi abuela _____ en una casa antigua en el campo con sus padres y hermanos.",
        translation: "(Jako mała moja babcia mieszkała w starym domu na wsi z rodzicami i rodzeństwem)",
        options: ["vivía", "vivió", "ha vivido", "vive"],
        correct: "vivía",
        explanation: "'De pequeña' to okres życia! Imperfecto dla długiego stanu w przeszłości. Życie na wsi kiedyś było normą - proste i szczęśliwe czasy!"
      },
      {
        id: "past_15",
        question: "Ayer por la tarde _____ tres cafés seguidos y por eso no pude dormir en toda la noche.",
        translation: "(Wczoraj po południu wypiłem trzy kawy z rzędu i dlatego nie mogłem spać całą noc)",
        options: ["tomé", "tomaba", "he tomado", "tomo"],
        correct: "tomé",
        explanation: "'Ayer' + konkretna akcja to pretérito! 'Tomé' to zakończona akcja. Trzy kawy to może za mucho - kofeina ma swoją moc, szacunek dla niej!"
      }
    ]
  }
};

export default part11Categories;

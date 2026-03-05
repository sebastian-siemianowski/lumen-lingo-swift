/**
 * POLISH → SPANISH GRAMMAR - PART 14
 * 4 categories, 15 questions each - Advanced expressions
 */

import { Smartphone, Coffee, Mountain, Sparkle } from "lucide-react";

export const part14Categories = {
  technology_and_modern_life: {
    name: "Technologia i nowoczesne życie",
    description: "Mów o cyfrowym świecie po hiszpańsku",
    icon: Smartphone,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "tech_1",
        question: "Necesito _____ mi teléfono móvil urgentemente porque la batería está completamente agotada ya.",
        translation: "(Muszę naładować mój telefon komórkowy pilnie, bo bateria jest już całkowicie wyczerpana)",
        options: ["cargar", "llenar", "recargar", "poner"],
        correct: "cargar",
        explanation: "'Cargar' to ładować urządzenia elektroniczne! Fundamentalne słowo dzisiejszych czasów. Bateria rozładowana to nowoczesny koszmar - zawsze miej power bank! 🔋"
      },
      {
        id: "tech_2",
        question: "Mi hermana _____ adicta a las redes sociales, pasa todo el día mirando Instagram y TikTok.",
        translation: "(Moja siostra jest uzależniona od mediów społecznościowych, spędza cały dzień oglądając Instagram i TikTok)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Ser adicto' to być uzależnionym jako cecha! Niestety to stała charakterystyka nie stan czasowy. Media społecznościowe wciągają - balans cyfrowy jest kluczowy! 📱"
      },
      {
        id: "tech_3",
        question: "¿Me puedes _____ tu contraseña del WiFi para conectarme a internet desde mi portátil personal?",
        translation: "(Czy możesz podać mi swoje hasło do WiFi, żeby połączyć się z internetem z mojego osobistego laptopa?)",
        options: ["dar", "decir", "pasar", "enviar"],
        correct: "dar",
        explanation: "'Dar la contraseña' to podać hasło bezpośrednio! Dzielenie WiFi to gest nowoczesnej gościnności. Internet to podstawowa potrzeba dzisiaj - jak woda! 📶"
      },
      {
        id: "tech_4",
        question: "Este ordenador portátil _____ muy lento últimamente, creo que necesita una actualización urgente del sistema.",
        translation: "(Ten laptop działa bardzo wolno ostatnio, myślę że potrzebuje pilnej aktualizacji systemu)",
        options: ["va", "funciona", "trabaja", "anda"],
        correct: "va",
        explanation: "'Ir lento' to działać wolno idiomatycznie! Komputery spowalniają z czasem. Aktualizacje pomagają ale czasem potrzeba nowego sprzętu - technologia starzeje się szybko! 💻"
      },
      {
        id: "tech_5",
        question: "_____ este archivo importante en la nube para poder acceder desde cualquier dispositivo siempre.",
        translation: "(Zapisałem ten ważny plik w chmurze, żeby móc zawsze mieć dostęp z każdego urządzenia)",
        options: ["Guardé", "Salvé", "Grabé", "Ahorré"],
        correct: "Guardé",
        explanation: "'Guardar' to zapisać plik cyfrowo! 'Salvar' też możliwe. Chmura to rewolucja - twoje dane wszędzie dostępne. Kopie zapasowe ratują życie cyfrowe! ☁️"
      },
      {
        id: "tech_6",
        question: "Mi padre no _____ usar aplicaciones móviles modernas porque le parecen muy complicadas y confusas.",
        translation: "(Mój ojciec nie umie używać nowoczesnych aplikacji mobilnych, bo wydają mu się bardzo skomplikowane i mylące)",
        options: ["sabe", "puede", "conoce", "entiende"],
        correct: "sabe",
        explanation: "'Saber usar' to umieć obsługiwać coś! Umiejętność praktyczna nie teoretyczna. Starsze pokolenie potrzebuje cierpliwego nauczania - technologia może przytłaczać początkowo! 👴"
      },
      {
        id: "tech_7",
        question: "_____ descargar esta aplicación nueva de aprendizaje porque todos dicen que es muy efectiva y útil.",
        translation: "(Powinienem pobrać tę nową aplikację do nauki, bo wszyscy mówią, że jest bardzo efektywna i użyteczna)",
        options: ["Debería", "Debo", "Tengo que", "Necesito"],
        correct: "Debería",
        explanation: "'Debería' to warunkowe powinien! Łagodniejsze niż 'debo'. To rada dla siebie samego. Aplikacje edukacyjne rewolucjonizują naukę - nauka wszędzie możliwa! 📲"
      },
      {
        id: "tech_8",
        question: "El nuevo modelo de iPhone _____ mañana oficialmente y habrá colas enormes en las tiendas Apple.",
        translation: "(Nowy model iPhone'a pojawia się jutro oficjalnie i będą ogromne kolejki w sklepach Apple)",
        options: ["sale", "saldrá", "va a salir", "ha salido"],
        correct: "sale",
        explanation: "Teraźniejszy dla zaplanowanej przyszłości! 'Sale mañana' to pewne wydarzenie. Premiera nowego iPhone to globalny fenomen - technologia ekscytuje masy! 📱"
      },
      {
        id: "tech_9",
        question: "_____ buena idea hacer copias de seguridad regulares de todos tus documentos importantes digitales.",
        translation: "(To dobry pomysł robić regularne kopie zapasowe wszystkich twoich ważnych dokumentów cyfrowych)",
        options: ["Es", "Está", "Hay", "Tiene"],
        correct: "Es",
        explanation: "'Es buena idea' to uniwersalna rada mądra! Kopie zapasowe to ubezpieczenie cyfrowe. Dyski twarde umierają bez ostrzeżenia - lepiej dmuchać na zimne! 💾"
      },
      {
        id: "tech_10",
        question: "Mi teléfono se _____ y perdí todos mis contactos porque no había hecho copia de seguridad.",
        translation: "(Mój telefon się zepsuł i zgubiłem wszystkie kontakty, bo nie zrobiłem kopii zapasowej)",
        options: ["estropeó", "rompió", "dañó", "averió"],
        correct: "estropeó",
        explanation: "'Estropearse' to zepsuć się (urządzenie)! Frustru jący moment który każdy zna. To bolesna lekcja - zawsze rób kopie zapasowe wszystkiego regularnie! 😱"
      },
      {
        id: "tech_11",
        question: "_____ conectado a internet todo el día porque trabajo remotamente desde casa ahora siempre.",
        translation: "(Jestem podłączony do internetu cały dzień, bo pracuję teraz zdalnie z domu zawsze)",
        options: ["Estoy", "Soy", "Tengo", "Hago"],
        correct: "Estoy",
        explanation: "'Estar conectado' to być podłączonym aktualnie! Stan tymczasowy choć dzienny. Praca zdalna wymaga stabilnego internetu - to twoja linia życiowa zawodowa! 🌐"
      },
      {
        id: "tech_12",
        question: "Esta página web no _____ correctamente en mi navegador, veo todo desconfigurado y extraño.",
        translation: "(Ta strona internetowa nie ładuje się poprawnie w mojej przeglądarce, widzę wszystko przestawione i dziwne)",
        options: ["carga", "descarga", "llena", "sube"],
        correct: "carga",
        explanation: "'Cargar' to ładować się (strona internetowa)! Problemy techniczne frustrują wszystkich. Spróbuj odświeżyć lub zmień przeglądarkę - klasyczne rozwiązania IT! 🖥️"
      },
      {
        id: "tech_13",
        question: "Deberías _____ tu software antivirus regularmente para proteger tu ordenador de amenazas peligrosas online.",
        translation: "(Powinieneś regularnie aktualizować swój program antywirusowy, żeby chronić komputer przed niebezpiecznymi zagrożeniami online)",
        options: ["actualizar", "renovar", "modernizar", "cambiar"],
        correct: "actualizar",
        explanation: "'Actualizar' to aktualizować software! Cyberbezpieczeństwo to nie opcja ale konieczność dzisiaj. Wirusy ewoluują - ochrona też musi! Bezpieczeństwo cyfrowe jest fundamentalne! 🛡️"
      },
      {
        id: "tech_14",
        question: "_____ olvidado la contraseña de mi correo electrónico y no puedo acceder a mensajes importantes ahora.",
        translation: "(Zapomniałem hasła do mojej poczty elektronicznej i nie mogę teraz uzyskać dostępu do ważnych wiadomości)",
        options: ["He", "Había", "Hube", "Habré"],
        correct: "He",
        explanation: "'He olvidado' to właśnie zapomniałem! Present perfect dla wydarzenia wpływającego na teraz. Menedżery haseł to zbawienie - nikt nie pamięta 50 haseł! 🔐"
      },
      {
        id: "tech_15",
        question: "Esta aplicación consume _____ batería de lo normal, voy a desinstalarla para ahorrar energía del teléfono.",
        translation: "(Ta aplikacja zużywa więcej baterii niż normalnie, odinstaluje ją, żeby oszczędzić energię telefonu)",
        options: ["más", "mucha", "muy", "demasiada"],
        correct: "más",
        explanation: "'Más... de lo normal' to więcej niż zwykle! Porównanie z normą. Aplikacje energożerne skracają dzień użytkowania - bezlitośnie usuwaj takie! 🔋"
      }
    ]
  },

  restaurants_and_dining: {
    name: "Restauracje i jedzenie na mieście",
    description: "Zamawiaj i rozmawiaj w restauracjach",
    icon: Coffee,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "rest_1",
        question: "¿Nos puede _____ una mesa para cuatro personas cerca de la ventana con vista si es posible?",
        translation: "(Czy może nam Pan przygotować stolik dla czterech osób przy oknie z widokiem, jeśli możliwe?)",
        options: ["preparar", "poner", "dar", "hacer"],
        correct: "preparar",
        explanation: "'Preparar una mesa' to przygotować stolik grzecznie! W restauracji grzeczność otwiera drzwi do lepszej obsługi. Stoliki przy oknie są zawsze najbardziej pożądane! 🪟"
      },
      {
        id: "rest_2",
        question: "De primer plato _____ la ensalada mixta fresca y de segundo el filete de ternera con patatas.",
        translation: "(Na pierwsze danie poproszę świeżą sałatkę mieszaną, a na drugie polędwicę cielęcą z ziemniakami)",
        options: ["tomaré", "comeré", "pediré", "querré"],
        correct: "tomaré",
        explanation: "'Tomar' w restauracji to zamawiać elegancko! Bardziej formalne niż 'comer'. W Hiszpanii obiad ma strukturę: primero, segundo, postre. To cywilizowane jedzenie! 🍽️"
      },
      {
        id: "rest_3",
        question: "¿Me podría _____ la carta de vinos tintos por favor? Quiero elegir uno bueno para la cena.",
        translation: "(Czy mógłby mi Pan pokazać kartę czerwonych win proszę? Chcę wybrać dobre na kolację)",
        options: ["traer", "llevar", "dar", "pasar"],
        correct: "traer",
        explanation: "'Traer' to przynieść do ciebie! 'Llevar' to zabrać od ciebie. Karta win w Hiszpanii jest obszerna - hiszpańskie wina są wspaniałe! 🍷"
      },
      {
        id: "rest_4",
        question: "Este plato _____ delicioso, los sabores están perfectamente equilibrados y la presentación es hermosa.",
        translation: "(To danie jest pyszne, smaki są perfekcyjnie zrównoważone, a prezentacja jest piękna)",
        options: ["está", "es", "tiene", "sabe"],
        correct: "está",
        explanation: "'Estar delicioso' dla smaku teraz! Stan aktualny tego posiłku. 'Ser' byłoby dla charakterystyki stałej. Dobre jedzenie to radość dla zmysłów wszystkich! 😋"
      },
      {
        id: "rest_5",
        question: "¿Nos puede _____ la cuenta cuando tenga un momento libre por favor? No hay prisa.",
        translation: "(Czy może nam przynieść rachunek, kiedy będzie Pan miał wolną chwilę proszę? Nie ma pośpiechu)",
        options: ["traer", "llevar", "dar", "poner"],
        correct: "traer",
        explanation: "'Traer la cuenta' to standardowe! Uprzejme zakończenie posiłku. 'No hay prisa' pokazuje relaks - hiszpańskie obiady nigdy się nie śpieszą! 💳"
      },
      {
        id: "rest_6",
        question: "El camarero nos _____ muy bien durante toda la cena, fue muy atento y profesional siempre.",
        translation: "(Kelner obsłużył nas bardzo dobrze przez całą kolację, był bardzo uważny i profesjonalny zawsze)",
        options: ["atendió", "atendía", "ha atendido", "atiende"],
        correct: "atendió",
        explanation: "'Atender' to obsługiwać klientów! Pretérito dla zakończonej kolacji. Dobra obsługa zasługuje na napiwek - w Hiszpanii to 5-10% rachunku! 🙏"
      },
      {
        id: "rest_7",
        question: "¿_____ hacer una reserva para mañana noche a las nueve para seis comensales adultos?",
        translation: "(Czy chciałbym zrobić rezerwację na jutrzejszy wieczór na dziewiątą dla sześciu dorosłych gości?)",
        options: ["Querría", "Quiero", "Quisiera", "Quería"],
        correct: "Quisiera",
        explanation: "'Quisiera' to warunkowe super grzeczne! Bardziej uprzejme niż 'quiero'. W dobrych restauracjach grzeczność zapewnia lepszy stolik - forma ma znaczenie! 🍽️"
      },
      {
        id: "rest_8",
        question: "Este restaurante _____ especializado en mariscos frescos del Mediterráneo, todo viene directo del puerto cercano.",
        translation: "(Ta restauracja jest wyspecjalizowana w świeżych owocach morza ze Śródziemnego, wszystko pochodzi prosto z pobliskiego portu)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar especializado en' to być wyspecjalizowanym w! Expertise restauracji. Świeże owoce morza to luksus przybrzeżny - smak oceanu na talerzu! 🦞"
      },
      {
        id: "rest_9",
        question: "¿Tienen menú del día o solo sirven platos _____ carta con precios más elevados?",
        translation: "(Czy mają menu dnia czy serwują tylko dania z karty z wyższymi cenami?)",
        options: ["a la", "de la", "en la", "por la"],
        correct: "a la",
        explanation: "'A la carta' to z karty standardowo! Menú del día to hiszpańska tradycja - kompletny lunch za dobrą cenę. Ekonomiczne i pyszne! 🍲"
      },
      {
        id: "rest_10",
        question: "La comida aquí siempre _____ preparada al momento con ingredientes frescos locales de la región.",
        translation: "(Jedzenie tutaj jest zawsze przygotowywane na bieżąco ze świeżymi lokalnymi składnikami z regionu)",
        options: ["está", "es", "tiene", "hace"],
        correct: "está",
        explanation: "'Estar preparado' to być przygotowanym świeżo! Stan rezultatu gotowania. Na moment znaczy natychmiast po zamówieniu - najwyższa jakość! 👨‍🍳"
      },
      {
        id: "rest_11",
        question: "¿Me _____ recomendar algún plato típico español que sea especialmente bueno aquí en este restaurante?",
        translation: "(Czy mógłby mi Pan polecić jakieś typowe hiszpańskie danie, które jest szczególnie dobre tutaj w tej restauracji?)",
        options: ["podría", "puede", "debe", "quiere"],
        correct: "podría",
        explanation: "'¿Podría recomendar?' to bardzo grzeczna prośba! Warunkowy dodaje szacunku. Kelnerzy znają najlepsze dania - ich rada jest złotem kulinarnym! ⭐"
      },
      {
        id: "rest_12",
        question: "Aquí _____ prohibido fumar dentro del establecimiento según la ley sanitaria española vigente.",
        translation: "(Tutaj jest zabronione palić wewnątrz lokalu zgodnie z obowiązującym hiszpańskim prawem sanitarnym)",
        options: ["está", "es", "hay", "tiene"],
        correct: "está",
        explanation: "'Estar prohibido' to być zabronionym prawnie! Regulacja czasowa choć długotrwała. Prawo antytytoniowe chroni zdrowie wszystkich - świeże powietrze dla wszystkich! 🚭"
      },
      {
        id: "rest_13",
        question: "El servicio en este bar de tapas _____ muy rápido, no tienes que esperar mucho tiempo.",
        translation: "(Obsługa w tym barze tapas jest bardzo szybka, nie musisz czekać długo)",
        options: ["es", "está", "tiene", "va"],
        correct: "es",
        explanation: "'Ser rápido' to cecha stała obsługi! Zawsze tacy, to ich standard. Bary tapas to szybkie jedzenie hiszpańskie - przekąski w biegu! 🍤"
      },
      {
        id: "rest_14",
        question: "¿_____ incluido el servicio en la cuenta final o debemos dejar propina adicional aparte?",
        translation: "(Czy obsługa jest wliczona w końcowy rachunek czy powinniśmy zostawić dodatkowo napiwek osobno?)",
        options: ["Está", "Es", "Hay", "Tiene"],
        correct: "Está",
        explanation: "'¿Está incluido?' to czy jest wliczone? W Hiszpanii obsługa czasem wliczona. Zawsze dobrze wiedzieć - przejrzystość finansowa jest ważna! 💶"
      },
      {
        id: "rest_15",
        question: "Prefiero _____ en la terraza exterior porque hace muy buen tiempo soleado y agradable hoy.",
        translation: "(Wolę zjeść na zewnętrznym tarasie, bo jest bardzo dobra słoneczna i przyjemna pogoda dziś)",
        options: ["sentarme", "sentarnos", "estar", "quedar"],
        correct: "sentarme",
        explanation: "'Sentarse' to usiąść sobie! Taras w dobrej pogodzie to hiszpański luksus. Jedzenie na świeżym powietrzu jest doświadczeniem - słońce smakuje lepiej! ☀️"
      }
    ]
  },

  nature_and_environment: {
    name: "Natura i środowisko",
    description: "Rozmawiaj o świecie przyrody",
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "nat_1",
        question: "Me encanta _____ por el bosque antiguo escuchando el canto hermoso de los pájaros salvajes.",
        translation: "(Uwielbiam spacerować po starym lesie słuchając pięknego śpiewu dzikich ptaków)",
        options: ["pasear", "caminar", "andar", "ir"],
        correct: "pasear",
        explanation: "'Pasear' to spacerować dla przyjemności! Nie cel tylko relaks. Las oferuje spokój dla duszy zmęczonej miejskim życiem - natura leczy! 🌲"
      },
      {
        id: "nat_2",
        question: "Los árboles del parque _____ sus hojas coloridas en otoño creando una alfombra natural preciosa.",
        translation: "(Drzewa w parku tracą swoje kolorowe liście jesienią tworząc piękny naturalny dywan)",
        options: ["pierden", "caen", "sueltan", "tiran"],
        correct: "pierden",
        explanation: "'Perder las hojas' to tracić liście naturalnie! Cykl natury jest piękny. Jesień to malarz - każde drzewo inne dzieło sztuki! 🍁"
      },
      {
        id: "nat_3",
        question: "_____ fundamental proteger las especies en peligro de extinción para las futuras generaciones de niños.",
        translation: "(Fundamentalne jest chronić gatunki zagrożone wyginięciem dla przyszłych pokoleń dzieci)",
        options: ["Es", "Está", "Hay", "Tiene"],
        correct: "Es",
        explanation: "'Es fundamental' wyraża uniwersalną prawdę moralną! Ochrona przyrody to nasz obowiązek. Każdy gatunek jest unikalny - strata jest nieodwracalna wieczna! 🐾"
      },
      {
        id: "nat_4",
        question: "En la montaña el aire _____ mucho más puro y limpio que en la ciudad contaminada industrial.",
        translation: "(W górach powietrze jest dużo czystsze i bardziej czyste niż w zanieczyszczonym przemysłowym mieście)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Ser puro' to cecha stała powietrza górskiego! Górskie powietrze zawsze czyste - to jego natura. Oddychanie świeżym powietrzem regeneruje płuca i duszę! 🏔️"
      },
      {
        id: "nat_5",
        question: "Los científicos _____ que el cambio climático es real y requiere acción inmediata de todos.",
        translation: "(Naukowcy ostrzegają, że zmiana klimatu jest realna i wymaga natychmiastowego działania wszystkich)",
        options: ["advierten", "avisan", "alertan", "previenen"],
        correct: "advierten",
        explanation: "'Advertir' to ostrzegać poważnie! Silniejsze niż 'avisar'. Nauka mówi jasno - planeta potrzebuje pomocy teraz. Każdy mały gest ma znaczenie dla przyszłości! 🌍"
      },
      {
        id: "nat_6",
        question: "_____ muchas especies únicas de animales exóticos en la selva amazónica que debemos preservar cuidadosamente.",
        translation: "(Jest wiele unikalnych gatunków egzotycznych zwierząt w dżungli amazońskiej, które musimy starannie chronić)",
        options: ["Hay", "Están", "Existen", "Tienen"],
        correct: "Hay",
        explanation: "'Hay' dla istnienia gatunków w miejscu! Amazonia to skarb bioróżnorodności planety. Każdy gatunek gra rolę w ekosystemie - całość jest delikatna! 🦜"
      },
      {
        id: "nat_7",
        question: "El río que pasa por nuestra ciudad _____ muy contaminado por los desechos industriales lamentablemente.",
        translation: "(Rzeka, która przepływa przez nasze miasto, jest bardzo zanieczyszczona przemysłowymi odpadami niestety)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar contaminado' to być zanieczyszczonym aktualnie! Stan który możemy zmienić działaniem. Czyszczenie rzek to możliwe - społeczności mogą działać razem! 💧"
      },
      {
        id: "nat_8",
        question: "Deberíamos _____ más árboles en las ciudades para mejorar la calidad del aire que respiramos diariamente.",
        translation: "(Powinniśmy sadzić więcej drzew w miastach, żeby poprawić jakość powietrza, którym codziennie oddychamy)",
        options: ["plantar", "sembrar", "cultivar", "poner"],
        correct: "plantar",
        explanation: "'Plantar árboles' to sadzić drzewa! Każde drzewo to fabryka tlenu i cienia. Miasta zielone są zdrowsze - natura w betonie jest błogosławieństwem! 🌳"
      },
      {
        id: "nat_9",
        question: "La playa _____ llena de basura plástica después del fin de semana, necesita limpieza urgente comunitaria.",
        translation: "(Plaża jest pełna plastikowych śmieci po weekendzie, potrzebuje pilnego sprzątania wspólnotowego)",
        options: ["está", "es", "tiene", "hay"],
        correct: "está",
        explanation: "'Estar llena de' to być pełną czegoś teraz! Stan czasowy który trzeba zmienić. Plastik w oceanie to tragedia - użyj toreb wielokrotnego użytku! ♻️"
      },
      {
        id: "nat_10",
        question: "Los animales salvajes _____ en peligro por la destrucción masiva de su hábitat natural original.",
        translation: "(Dzikie zwierzęta są w niebezpieczeństwie przez masowe niszczenie ich oryginalnego naturalnego siedliska)",
        options: ["están", "son", "tienen", "hacen"],
        correct: "están",
        explanation: "'Estar en peligro' to być zagrożonym aktualnie! Stan który możemy zatrzymać. Ochrona siedlisk ratuje gatunki - każdy las ma znaczenie krytyczne! 🦁"
      },
      {
        id: "nat_11",
        question: "Es necesario _____ la cantidad de residuos plásticos que producimos cada día en casa y oficina.",
        translation: "(Konieczne jest redukować ilość plastikowych odpadów, które produkujemy codziennie w domu i biurze)",
        options: ["reducir", "disminuir", "bajar", "menguar"],
        correct: "reducir",
        explanation: "'Reducir' to redukować ilość czegoś! Najpopularniejsze słowo ekologiczne. Mniej plastiku to zdrowsza planeta - małe zmiany codzienne robią różnicę wielką! ♻️"
      },
      {
        id: "nat_12",
        question: "El parque nacional _____ situado en las montañas del norte y protege ecosistemas únicos valiosos.",
        translation: "(Park narodowy jest położony w górach północy i chroni unikalne cenne ekosystemy)",
        options: ["está", "es", "queda", "se encuentra"],
        correct: "está",
        explanation: "'Estar situado' to być położonym geograficznie! Lokalizacja parku. Parki narodowe są skarbami - chronią dziką naturę dla przyszłych pokoleń! 🏞️"
      },
      {
        id: "nat_13",
        question: "_____ energías renovables como la solar y eólica es crucial para el futuro sostenible del planeta.",
        translation: "(Używać energii odnawialnych jak słoneczna i wiatrowa jest kluczowe dla zrównoważonej przyszłości planety)",
        options: ["Usar", "Utilizando", "El uso de", "Usamos"],
        correct: "Usar",
        explanation: "'Usar' infinityw jako podmiot zdania! Energie odnawialne to przyszłość. Słońce i wiatr są nieskończone - mądre wykorzystanie ratuje Ziemię naszą! ☀️"
      },
      {
        id: "nat_14",
        question: "Los océanos del mundo _____ cubriendo más del setenta por ciento de la superficie terrestre total.",
        translation: "(Oceany świata pokrywają ponad siedemdziesiąt procent całkowitej powierzchni ziemskiej)",
        options: ["están", "son", "vienen", "van"],
        correct: "están",
        explanation: "'Estar cubriendo' to pokrywać aktualnie! Ciągły stan geograficzny. Oceany to płuca planety - produkują tlen i regulują klimat globalny! 🌊"
      },
      {
        id: "nat_15",
        question: "Mi familia participa activamente en programas de _____ ambiental local plantando árboles cada primavera juntos.",
        translation: "(Moja rodzina aktywnie uczestniczy w lokalnych programach ochrony środowiska sadząc drzewa każdej wiosny razem)",
        options: ["conservación", "preservación", "protección", "cuidado"],
        correct: "conservación",
        explanation: "'Conservación ambiental' to ochrona środowiska profesjonalnie! Najbardziej techniczny termin. Rodzinne działania ekologiczne uczą dzieci odpowiedzialności - przyszłość zaczyna się dziś! 🌱"
      }
    ]
  },

  expressions_and_idioms: {
    name: "Wyrażenia i idiomy",
    description: "Mów jak prawdziwy native speaker",
    icon: Sparkle,
    color: "from-purple-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "expr_1",
        question: "No te preocupes tanto por el examen, todo va a _____ bien si estudiaste suficientemente antes.",
        translation: "(Nie martw się tak bardzo egzaminem, wszystko pójdzie dobrze, jeśli uczył eś się wystarczająco wcześniej)",
        options: ["salir", "ir", "estar", "ser"],
        correct: "salir",
        explanation: "'Salir bien' to pójść dobrze idiomatycznie! Bardzo hiszpańskie wyrażenie dla pozytywnego rezultatu. Optymizm i przygotowanie to klucze sukcesu! 🌟"
      },
      {
        id: "expr_2",
        question: "Mi hermano siempre _____ las cosas al último momento, nunca planea nada con anticipación responsable.",
        translation: "(Mój brat zawsze robi rzeczy w ostatniej chwili, nigdy nie planuje niczego z odpowiedzialnym wyprzedzeniem)",
        options: ["deja", "hace", "pone", "toma"],
        correct: "deja",
        explanation: "'Dejar para el último momento' to zostawiać na ostatnią chwilę! Uniwersalny problem prokrastynacji. Planowanie z wyprzedzeniem redukuje stres ogromnie - ucz się z błędów innych! ⏰"
      },
      {
        id: "expr_3",
        question: "Después de tanto trabajo duro, por fin veo la _____ al final del túnel oscuro y largo.",
        translation: "(Po tak ciężkiej pracy w końcu widzę światło na końcu ciemnego i długiego tunelu)",
        options: ["luz", "salida", "apertura", "claridad"],
        correct: "luz",
        explanation: "'Ver la luz al final del túnel' to idiom nadziei! Widzisz koniec trudności. To uniwersalne uczucie - po burzy zawsze wychodzi słońce! 💡"
      },
      {
        id: "expr_4",
        question: "No me _____ ni frío ni calor lo que opinen otras personas sobre mi estilo de vida personal.",
        translation: "(Nie obchodzi mnie wcale, co myślą inne osoby o moim osobistym stylu życia)",
        options: ["hace", "da", "pone", "importa"],
        correct: "hace",
        explanation: "'No me hace ni frío ni calor' to kompletnie mnie nie obchodzi! Kolorowe idiomatyczne wyrażenie obojętności. Żyj dla siebie nie dla opinii innych - autentyczność jest kluczem! 🤷"
      },
      {
        id: "expr_5",
        question: "Ten cuidado con él, es una persona de dos _____ que nunca sabes qué piensa realmente.",
        translation: "(Uważaj na niego, to osoba dwulicowa, której nigdy nie wiesz co naprawdę myśli)",
        options: ["caras", "rostros", "facetas", "lados"],
        correct: "caras",
        explanation: "'Persona de dos caras' to dwulicowa osoba! Klasyczny idiom dla nieuczciwości. Autentyczność buduje zaufanie - bądź zawsze jedną osobą wszystkim! 😒"
      },
      {
        id: "expr_6",
        question: "Hablando del rey de _____, ahí viene Juan justo cuando estábamos comentando sobre él casualmente.",
        translation: "(O wilku mowa, właśnie nadchodzi Juan akurat, kiedy rozmawialiśmy o nim przypadkowo)",
        options: ["Roma", "España", "mundo", "castillo"],
        correct: "Roma",
        explanation: "'Hablando del rey de Roma' to o wilku mowa! Gdy osoba pojawia się jak ją wzmiankujesz. Starożytne hiszpańskie powiedzenie pełne historii! 👑"
      },
      {
        id: "expr_7",
        question: "No te _____ por las ramas y ve directo al grano, no tenemos mucho tiempo disponible ahora.",
        translation: "(Nie chodź wokół krzaka i idź prosto do sedna, nie mamy dużo dostępnego czasu teraz)",
        options: ["vayas", "andes", "camines", "muevas"],
        correct: "vayas",
        explanation: "'No te vayas por las ramas' to nie chodź dookoła! Idiom dla bezpośredniości. W biznesie czas to pieniądz - jasność komunikacji oszczędza czas! ⏱️"
      },
      {
        id: "expr_8",
        question: "Más vale _____ que lamentar, siempre es mejor estar preparado para cualquier eventualidad posible.",
        translation: "(Lepiej dmuchać na zimne niż żałować, zawsze lepiej być przygotowanym na każdą możliwą ewentualność)",
        options: ["prevenir", "anticipar", "preparar", "cuidar"],
        correct: "prevenir",
        explanation: "'Más vale prevenir que lamentar' to mądrość życiowa! Lepiej zapobiegać niż leczyć. Przezorny zawsze ubezpieczony - to uniwersalna prawda mądra! 🛡️"
      },
      {
        id: "expr_9",
        question: "Estoy en las _____ después de estudiar toda la noche para el examen, no puedo más ya.",
        translation: "(Jestem w ostatnich siłach po uczeniu się całą noc na egzamin, nie mogę już więcej)",
        options: ["últimas", "finales", "postreras", "acabadas"],
        correct: "últimas",
        explanation: "'Estar en las últimas' to być u kresu sił! Kompletne wyczerpanie. Całonocna nauka działa ale kosztuje - równowaga jest zdrowsza długoterminowo! 😵"
      },
      {
        id: "expr_10",
        question: "No hay _____ que valga, tienes que entregar el trabajo mañana sin excusas ni pretextos.",
        translation: "(Nie ma wymówki, która by się liczyła, musisz oddać pracę jutro bez wymówek ani pretekstów)",
        options: ["excusa", "razón", "motivo", "causa"],
        correct: "excusa",
        explanation: "'No hay excusa que valga' to żadna wymówka nie działa! Kategoryczny komunikat. Czasem trzeba twardości - odpowiedzialność buduje character! 💪"
      },
      {
        id: "expr_11",
        question: "Me caes muy _____, eres una persona auténtica y sincera con la que es fácil hablar abiertamente.",
        translation: "(Bardzo mi się podobasz, jesteś autentyczną i szczerą osobą, z którą łatwo rozmawiać otwarcie)",
        options: ["bien", "bueno", "simpático", "agradable"],
        correct: "bien",
        explanation: "'Caer bien' to podobać się jako osoba! 'Bien' tu jest przysłówek nie przymiotnik. Autentyczność przyciąga ludzi - bądź sobą zawsze! 😊"
      },
      {
        id: "expr_12",
        question: "Ten los pies en la _____ y no sueñes tanto, necesitas ser más realista con tus planes.",
        translation: "(Stąpaj po ziemi i nie śnij tak dużo, musisz być bardziej realistyczny ze swoimi planami)",
        options: ["tierra", "suelo", "piso", "superficie"],
        correct: "tierra",
        explanation: "'Tener los pies en la tierra' to być realistą! Kontrast z głową w chmurach. Marzenia są ważne ale plan działania też - równowaga między nimi! 🌍"
      },
      {
        id: "expr_13",
        question: "Esto me _____ a chino, no entiendo absolutamente nada de lo que estás explicando técnicamente ahora.",
        translation: "(To brzmi dla mnie po chińsku, absolutnie nic nie rozumiem z tego, co teraz technicznie wyjaśniasz)",
        options: ["suena", "parece", "es", "está"],
        correct: "suena",
        explanation: "'Sonar a chino' to brzmieć niezrozumiale! Jak chiński dla nie-mówiących. Humor ułatwia przyznanie się do niezrozumienia - szczerość buduje komunikację! 🇨🇳"
      },
      {
        id: "expr_14",
        question: "Mi jefe siempre _____ una montaña de un grano de arena, exagera problemas pequeños sin razón.",
        translation: "(Mój szef zawsze robi z igły widły, wyolbrzymia małe problemy bez powodu)",
        options: ["hace", "pone", "crea", "forma"],
        correct: "hace",
        explanation: "'Hacer una montaña de un grano de arena' to robić wielką sprawę! Dosłownie górę z ziarna piasku. Proporcja problemu jest ważna - spokój pomaga! ⛰️"
      },
      {
        id: "expr_15",
        question: "Déjame en _____, no quiero participar en esos dramas innecesarios y complicaciones absurdas.",
        translation: "(Zostaw mnie w spokoju, nie chcę uczestniczyć w tych niepotrzebnych dramatach i absurdalnych komplikacjach)",
        options: ["paz", "tranquilidad", "calma", "quietud"],
        correct: "paz",
        explanation: "'Dejar en paz' to zostawić w spokoju! Prawo do własnej przestrzeni. Nie każdy konflikt wymaga twojego uczestnictwa - chronienie energii jest mądre! ✋"
      }
    ]
  }
};

export default part14Categories;
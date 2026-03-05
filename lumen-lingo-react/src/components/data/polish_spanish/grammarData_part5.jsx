/**
 * POLISH → SPANISH GRAMMAR - PART 5
 * 5 categories, 15 questions each - Advancing communication skills
 */

import { ShoppingBag, Plane, Briefcase, GraduationCap, Phone } from "lucide-react";

export const part5Categories = {
  shopping_and_purchases: {
    name: "Zakupy i kupowanie",
    description: "Rób zakupy po hiszpańsku z pewnością siebie",
    icon: ShoppingBag,
    color: "from-purple-500 to-violet-600",
    level: "intermediate",
    questions: [
      {
        id: "sp_1",
        question: "¿Cuánto _____ estas botas de cuero que están en el escaparate de la tienda?",
        translation: "(Ile kosztują te skórzane buty, które są na wystawie sklepu?)",
        options: ["cuestan", "costan", "valen", "son"],
        correct: "cuestan",
        explanation: "'Costar' to kosztować - bardzo ważny czasownik dla zakupów! 'Cuestan' to liczba mnoga (one kosztują). Pytanie '¿Cuánto cuesta?' (ile kosztuje?) jest jak magiczne zaklęcie w każdym sklepie! Używaj go śmiało. 💰"
      },
      {
        id: "sp_2",
        question: "Me _____ este vestido rojo porque es muy elegante y me queda perfecto para la fiesta.",
        translation: "(Podoba mi się ta czerwona sukienka, bo jest bardzo elegancka i idealnie mi pasuje na imprezę)",
        options: ["gusta", "gustan", "agrada", "encanta"],
        correct: "gusta",
        explanation: "'Gustar' z pojedynczym przedmiotem używa się w trzeciej osobie singular! 'Me gusta este vestido' (podoba mi się ta sukienka). Vestido jest singular, więc 'gusta'. To jak magia: rzecz robi podobanie się tobie, nie ty lubisz! 👗"
      },
      {
        id: "sp_3",
        question: "¿Puedo _____ este pantalón antes de comprarlo para ver si me queda bien?",
        translation: "(Czy mogę przymierzyć te spodnie przed kupnem, żeby zobaczyć czy dobrze mi pasują?)",
        options: ["probarme", "probarlo", "ponerme", "usarlo"],
        correct: "probarme",
        explanation: "'Probarse' to przymierzać ubrania - bardzo praktyczne! Zwróć uwagę: 'probarme' (przymierzyć sobie), nie tylko 'probar'. Zwrotna forma pokazuje, że robisz to dla siebie. W sklepie zawsze pytaj '¿Puedo probármelo?' 👖"
      },
      {
        id: "sp_4",
        question: "Estas zapatillas me _____ pequeñas, ¿tiene una talla más grande por favor?",
        translation: "(Te buty są dla mnie za małe, czy ma Pan/Pani większy rozmiar proszę?)",
        options: ["quedan", "están", "son", "sientan"],
        correct: "quedan",
        explanation: "'Quedar' to pasować (o ubraniu). 'Me quedan pequeñas' (są mi za małe), 'me quedan grandes' (są mi za duże), 'me quedan bien' (dobrze mi pasują). To twój najlepszy przyjaciel w przymierzalni! Bardzo praktyczny czasownik! 👟"
      },
      {
        id: "sp_5",
        question: "Voy a _____ esta camisa azul porque está de oferta y tiene un descuento del cincuenta por ciento.",
        translation: "(Kupię tę niebieską koszulę, bo jest na wyprzedaży i ma pięćdziesiąt procent zniżki)",
        options: ["comprar", "llevar", "coger", "tomar"],
        correct: "comprar",
        explanation: "'Comprar' to kupować - podstawowy czasownik zakupowy! 'Voy a comprar' (zamierzam kupić) pokazuje decyzję o zakupie. Możesz też powiedzieć 'me llevo' (biorę to ze sobą), ale 'comprar' jest najbardziej bezpośrednie i jasne! 🛒"
      },
      {
        id: "sp_6",
        question: "El vendedor me _____ que estos zapatos son de muy buena calidad y durarán muchos años.",
        translation: "(Sprzedawca zapewnia mnie, że te buty są bardzo dobrej jakości i wytrzymają wiele lat)",
        options: ["asegura", "dice", "cuenta", "promete"],
        correct: "asegura",
        explanation: "'Asegurar' to zapewniać, gwarantować - silniejsze niż tylko 'decir'! 'Me asegura' pokazuje pewność sprzedawcy. To jak obietnica jakości. W sklepach sprzedawcy często 'aseguran' - czasem warto być ostrożnym! 😊"
      },
      {
        id: "sp_7",
        question: "¿_____ pagar con tarjeta de crédito o solo aceptan efectivo en esta pequeña tienda?",
        translation: "(Czy mogę zapłacić kartą kredytową czy przyjmujecie tylko gotówkę w tym małym sklepie?)",
        options: ["Puedo", "Debo", "Tengo", "Quiero"],
        correct: "Puedo",
        explanation: "'¿Puedo pagar con tarjeta?' to uprzejme pytanie o możliwość! 'Poder' jest idealny dla pytań o dozwolenie. W małych sklepach w Hiszpanii czasem tylko 'efectivo' (gotówka) jest akceptowane. Zawsze dobrze jest zapytać! 💳"
      },
      {
        id: "sp_8",
        question: "Estos precios me _____ muy caros, voy a buscar en otra tienda donde sea más barato.",
        translation: "(Te ceny wydają mi się bardzo drogie, pójdę poszukać w innym sklepie, gdzie będzie taniej)",
        options: ["parecen", "son", "están", "quedan"],
        correct: "parecen",
        explanation: "'Parecer' to wydawać się - pokazuje twoją opinię! 'Me parecen caros' (wydają mi się drogie) to subiektywna ocena. To różne od 'son caros' (są drogie) - które jest bardziej obiektywne. Parecer daje ci przestrzeń na negocjacje! 💭"
      },
      {
        id: "sp_9",
        question: "Necesito _____ un regalo bonito para el cumpleaños de mi madre la semana próxima.",
        translation: "(Muszę kupić ładny prezent na urodziny mojej mamy w przyszłym tygodniu)",
        options: ["comprar", "buscar", "encontrar", "elegir"],
        correct: "comprar",
        explanation: "'Necesito comprar' (muszę kupić) to częsta fraza zakupowa! Wyraża konieczność zakupu. W Hiszpanii kupowanie prezentów jest ważną tradycją. 'Comprar' jest bezpośrednie i jasne - doskonałe do wyrażenia intencji zakupowej! 🎁"
      },
      {
        id: "sp_10",
        question: "¿Me puede _____ un descuento si compro dos artículos en lugar de uno solo?",
        translation: "(Czy może mi Pan/Pani dać zniżkę, jeśli kupię dwa artykuły zamiast jednego?)",
        options: ["hacer", "dar", "poner", "ofrecer"],
        correct: "hacer",
        explanation: "'Hacer un descuento' to dać zniżkę - idiomatyczne wyrażenie! W Hiszpanii i Ameryce Łacińskiej negocjacje są czasem akceptowane, szczególnie przy większych zakupach. '¿Me hace un descuento?' to uprzejmy sposób negocjacji. Odwaga się opłaca! 🤝"
      },
      {
        id: "sp_11",
        question: "Esta chaqueta me _____ perfectamente y el color combina bien con mis pantalones negros.",
        translation: "(Ta kurtka idealnie mi pasuje i kolor dobrze komponuje się z moimi czarnymi spodniami)",
        options: ["queda", "está", "sienta", "va"],
        correct: "queda",
        explanation: "'Quedar bien' to dobrze pasować (o ubraniu na tobie)! 'Me queda perfecto' to najwyższy komplement dla ubrania. To znaczy: rozmiar dobry, styl dobry, wszystko idealne! Gdy coś ci 'queda perfecto', wiesz że to kupno dla ciebie! ✨"
      },
      {
        id: "sp_12",
        question: "El dependiente me _____ probando ropa durante más de una hora con mucha paciencia.",
        translation: "(Sprzedawca pomaga mi w przymierzaniu ubrań przez ponad godzinę z wielką cierpliwością)",
        options: ["está ayudando", "ayuda", "ha ayudado", "ayudará"],
        correct: "está ayudando",
        explanation: "'Estar + gerundio' dla akcji trwającej teraz! 'Está ayudando' (pomaga w tym momencie) pokazuje ciągłość akcji. W hiszpańskich sklepach obsługa często jest bardzo pomocna i cierpliwa. To część kultury doskonałej obsługi klienta! 🙏"
      },
      {
        id: "sp_13",
        question: "¿Tienen esta misma falda en otros colores o solo _____ disponible en color negro?",
        translation: "(Czy mają Państwo tę samą spódnicę w innych kolorach czy jest dostępna tylko w czarnym?)",
        options: ["está", "es", "hay", "tiene"],
        correct: "está",
        explanation: "'Estar disponible' to być dostępnym! To stan czasowy - dzisiaj jest dostępna, jutro może nie być. 'Estar' dla dostępności, zapasów, rzeczy które się zmieniają. Zawsze pytaj o kolory - może znajdziesz swój ulubiony! 🌈"
      },
      {
        id: "sp_14",
        question: "Prefiero _____ en tiendas pequeñas del barrio porque el trato es más personal y cercano.",
        translation: "(Wolę robić zakupy w małych sklepach dzielnicy, bo obsługa jest bardziej osobista i bliska)",
        options: ["comprar", "ir", "estar", "buscar"],
        correct: "comprar",
        explanation: "'Comprar en' (kupować w) mówi o miejscu zakupów! W Hiszpanii małe sklepy osiedlowe mają swój urok - sprzedawcy znają klientów po imieniu. To piękna tradycja lokalnego handlu, która niestety powoli zanika! 🏪"
      },
      {
        id: "sp_15",
        question: "Si no me _____ satisface este producto, ¿puedo devolverlo y recuperar mi dinero?",
        translation: "(Jeśli ten produkt mnie nie zadowala, czy mogę go zwrócić i odzyskać pieniądze?)",
        options: ["me", "lo", "le", "te"],
        correct: "me",
        explanation: "'Satisfacer' potrzebuje zwrotnego zaimka! 'No me satisface' (nie zadowala mnie). To czasownik jak 'gustar' - rzecz robi zadowolenie tobie. Prawo do zwrotu w Hiszpanii jest chronione - masz prawo pytać o politykę zwrotów! 🔄"
      }
    ]
  },

  travel_and_tourism: {
    name: "Podróże i turystyka",
    description: "Podróżuj po hiszpańskojęzycznym świecie",
    icon: Plane,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "tt_1",
        question: "El verano que viene mi familia y yo _____ a visitar las playas hermosas de Cancún.",
        translation: "(Przyszłego lata moja rodzina i ja pojedziemy odwiedzić piękne plaże Cancún)",
        options: ["vamos", "iremos", "fuimos", "íbamos"],
        correct: "vamos",
        explanation: "W hiszpańskim często używamy 'ir a + infinitivo' dla przyszłości! 'Vamos a visitar' (zamierzamy odwiedzić) jest bardziej naturalne niż future simple. To pokazuje plan i intencję. Hiszpanie uwielbiają 'ir a' dla przyszłych planów! ✈️"
      },
      {
        id: "tt_2",
        question: "Para viajar a muchos países europeos no _____ sacar visa si tienes pasaporte polaco.",
        translation: "(Żeby podróżować do wielu krajów europejskich nie musisz wyrabiać wizy, jeśli masz polski paszport)",
        options: ["necesitas", "debes", "puedes", "quieres"],
        correct: "necesitas",
        explanation: "'Necesitar' to potrzebować, musieć - pokazuje konieczność! 'No necesitas' (nie musisz) jest bardziej neutralne niż 'no debes' (nie powinieneś). To świetna wiadomość dla podróżników z UE! Swoboda podróżowania to prezent! 🌍"
      },
      {
        id: "tt_3",
        question: "Cuando llego a un país nuevo, siempre _____ información en la oficina de turismo.",
        translation: "(Kiedy przyjeżdżam do nowego kraju, zawsze szukam informacji w biurze turystycznym)",
        options: ["busco", "pido", "pregunto", "encuentro"],
        correct: "busco",
        explanation: "'Buscar' to szukać aktywnie! 'Buscar información' (szukać informacji) jest bardzo praktyczne. Biura turystyczne w Hiszpanii i Ameryce Łacińskiej są bardzo pomocne. Mają mapy, broszury i lokalne wskazówki! Nie bój się pytać! 🗺️"
      },
      {
        id: "tt_4",
        question: "El hotel donde _____ alojados tiene una vista increíble al mar Mediterráneo azul.",
        translation: "(Hotel, w którym się zatrzymaliśmy, ma niesamowity widok na błękitne Morze Śródziemne)",
        options: ["estamos", "somos", "quedamos", "vivimos"],
        correct: "estamos",
        explanation: "'Estar alojado' to być zakwaterowanym - tymczasowy stan! Nie mieszkasz tam na stałe (to byłoby 'vivir'), tylko jesteś na krótko. 'Estar' dla sytuacji podróżniczych jest perfektny. To pokazuje tymczasowość twojego pobytu! 🏨"
      },
      {
        id: "tt_5",
        question: "Antes de hacer la maleta, siempre _____ una lista de todas las cosas que necesito llevar.",
        translation: "(Przed pakowaniem walizki zawsze robię listę wszystkich rzeczy, które muszę zabrać)",
        options: ["hago", "escribo", "pongo", "preparo"],
        correct: "hago",
        explanation: "'Hacer una lista' to zrobić listę - bardzo praktyczne wyrażenie! 'Hacer' jest czasownikiem do wielu czynności: hacer la cama, hacer deporte, hacer una lista. To twój organizacyjny przyjaciel! Listy są kluczem do spokojnej podróży! 📝"
      },
      {
        id: "tt_6",
        question: "Me _____ mucho viajar en avión porque puedo ver las nubes desde arriba.",
        translation: "(Bardzo lubię podróżować samolotem, bo mogę widzieć chmury z góry)",
        options: ["gusta", "encanta", "agrada", "place"],
        correct: "encanta",
        explanation: "'Encantar' to uwielbiać - silniejsze niż 'gustar'! 'Me encanta' (uwielbiam) pokazuje entuzjazm i pasję. Działa jak 'gustar' - rzecz wywołuje zachwyt w tobie. Dla rzeczy które naprawdę kochasz, używaj 'encantar'! 💕"
      },
      {
        id: "tt_7",
        question: "¿A qué hora _____ el vuelo a Madrid desde el aeropuerto internacional de Varsovia?",
        translation: "(O której godzinie startuje lot do Madrytu z międzynarodowego lotniska w Warszawie?)",
        options: ["sale", "va", "parte", "se marcha"],
        correct: "sale",
        explanation: "'Salir' to wyjeżdżać, odlatywać - używamy dla transportu! 'El vuelo sale' (lot odlatuje), 'el tren sale' (pociąg odjeżdża). To standard dla rozkładów jazdy i lotów. '¿A qué hora sale?' to pytanie, które będziesz używać często! 🛫"
      },
      {
        id: "tt_8",
        question: "Durante el vuelo los pasajeros deben _____ sus dispositivos electrónicos durante el despegue.",
        translation: "(Podczas lotu pasażerowie muszą wyłączyć swoje urządzenia elektroniczne podczas startu)",
        options: ["apagar", "cerrar", "quitar", "parar"],
        correct: "apagar",
        explanation: "'Apagar' to wyłączać (światło, urządzenia elektroniczne). To ważne słowo dla nowoczesnego życia! 'Apagar el móvil' (wyłączyć telefon), 'apagar la luz' (zgasić światło). Przeciwieństwo to 'encender' (włączać). Bezpieczeństwo przede wszystkim! 📱"
      },
      {
        id: "tt_9",
        question: "Prefiero _____ en hostales económicos porque así puedo conocer a otros viajeros jóvenes.",
        translation: "(Wolę zatrzymywać się w ekonomicznych hostelach, bo tak mogę poznać innych młodych podróżników)",
        options: ["quedarme", "estar", "alojarme", "vivir"],
        correct: "quedarme",
        explanation: "'Quedarse' to zostać, zatrzymać się - bardzo naturalny czasownik podróżniczy! 'Quedarse en un hostel' (zatrzymać się w hostelu). To bardziej kolokwialne i przyjazne niż formalne 'alojarse'. Hostele to świetne miejsce do spotkań! 🎒"
      },
      {
        id: "tt_10",
        question: "¿Me puede _____ cómo llegar a la estación de trenes desde aquí por favor?",
        translation: "(Czy może mi Pan/Pani wskazać jak dostać się na dworzec kolejowy stąd proszę?)",
        options: ["indicar", "decir", "mostrar", "enseñar"],
        correct: "indicar",
        explanation: "'Indicar' to wskazać, pokazać drogę - formalny i grzeczny! 'Indicar cómo llegar' jest bardziej uprzejme niż tylko 'decir'. To pokazuje szacunek. Hiszpanie cenią uprzejmość - 'por favor' zawsze pomaga! 🧭"
      },
      {
        id: "tt_11",
        question: "En mi último viaje a Barcelona _____ muchos monumentos famosos de Gaudí que son impresionantes.",
        translation: "(W mojej ostatniej podróży do Barcelony odwiedziłem wiele słynnych pomników Gaudiego, które są imponujące)",
        options: ["visité", "visitaba", "he visitado", "visitaré"],
        correct: "visité",
        explanation: "'Pretérito' dla zakończonych akcji w przeszłości! 'Visité' (odwiedziłem) pokazuje, że to się już stało i zakończyło. Używaj pretérito dla konkretnych wydarzeń podróżniczych w przeszłości. Barcelona i Gaudí są magiczne! 🏛️"
      },
      {
        id: "tt_12",
        question: "Los turistas extranjeros siempre _____ fotos delante de los monumentos más famosos de la ciudad.",
        translation: "(Zagraniczni turyści zawsze robią zdjęcia przed najsłynniejszymi zabytkami miasta)",
        options: ["hacen", "toman", "sacan", "ponen"],
        correct: "hacen",
        explanation: "'Hacer fotos' lub 'sacar fotos' to robić zdjęcia! Oba są poprawne - 'hacer' w Hiszpanii, 'sacar' częściej w Ameryce Łacińskiej. Możesz użyć któregokolwiek! Turystyka bez zdjęć jest nie do pomyślenia! 📸"
      },
      {
        id: "tt_13",
        question: "Cuando viajas al extranjero es importante _____ un seguro médico para emergencias inesperadas.",
        translation: "(Kiedy podróżujesz za granicę, ważne jest mieć ubezpieczenie medyczne na niespodziewane sytuacje)",
        options: ["tener", "llevar", "traer", "coger"],
        correct: "tener",
        explanation: "'Tener' to mieć - podstawowy czasownik posiadania! 'Tener un seguro' (mieć ubezpieczenie) to bardzo ważne. Zdrowie jest priorytetem! W podróży zawsze lepiej być przygotowanym. Bezpieczeństwo daje spokój! 🏥"
      },
      {
        id: "tt_14",
        question: "Me _____ mucho perdiendo mi equipaje en el aeropuerto antes del viaje importante.",
        translation: "(Bardzo się martwię zgubieniem mojego bagażu na lotnisku przed ważną podróżą)",
        options: ["preocupo", "preocupa", "preocupaba", "he preocupado"],
        correct: "preocupo",
        explanation: "'Preocuparse' to martwić się - czasownik zwrotny! 'Me preocupo' pokazuje twoją troskę. To naturalne martwić się o bagaż - zawiera wszystkie twoje rzeczy! Zawsze dobrze oznacz walizkę i rób zdjęcie przed oddaniem! 🧳"
      },
      {
        id: "tt_15",
        question: "Durante las vacaciones en España normalmente _____ hasta muy tarde disfrutando de la vida nocturna.",
        translation: "(Podczas wakacji w Hiszpanii zazwyczaj nie kładziemy się spać do bardzo późna ciesząc się nocnym życiem)",
        options: ["nos acostamos", "nos levantamos", "nos dormimos", "nos despertamos"],
        correct: "nos acostamos",
        explanation: "'Acostarse tarde' to kłaść się późno spać! W Hiszpanii życie nocturne jest intensywne - ludzie wychodzą o 11 wieczorem! 'Acostarse' pokazuje czas kładzenia się, nie spania. To część hiszpańskiej kultury - noc jest młoda! 🌃"
      }
    ]
  },

  work_and_professions: {
    name: "Praca i zawody",
    description: "Mów o pracy i karierze profesjonalnie",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "wp_1",
        question: "Mi hermano mayor _____ como ingeniero informático en una empresa internacional muy grande.",
        translation: "(Mój starszy brat pracuje jako inżynier informatyk w bardzo dużej międzynarodowej firmie)",
        options: ["trabaja", "es", "está", "hace"],
        correct: "trabaja",
        explanation: "'Trabajar como' to pracować jako - standardowa konstrukcja! 'Trabajar de' też jest poprawne. 'Trabajar' mówi o aktywności zawodowej. To różne od 'ser' (być kimś zawodowo). Oba są użyteczne w różnych kontekstach! 💼"
      },
      {
        id: "wp_2",
        question: "Para conseguir este puesto de trabajo _____ tener experiencia de al menos tres años.",
        translation: "(Żeby dostać to stanowisko pracy musisz mieć doświadczenie co najmniej trzech lat)",
        options: ["necesitas", "debes", "tienes que", "hay que"],
        correct: "necesitas",
        explanation: "'Necesitar' to potrzebować - pokazuje wymaganie! 'Necesitas tener' (musisz mieć) jest bezpośrednie. 'Tener que' jest bardziej imperatywne. Dla wymagań zawodowych 'necesitar' jest profesjonalne i jasne. Doświadczenie liczy się! 📋"
      },
      {
        id: "wp_3",
        question: "Mi jefe siempre me _____ cuando hago un buen trabajo y eso me motiva mucho.",
        translation: "(Mój szef zawsze mnie chwali, kiedy dobrze wykonam pracę i to mnie bardzo motywuje)",
        options: ["felicita", "dice", "habla", "cuenta"],
        correct: "felicita",
        explanation: "'Felicitar' to gratulować, chwalić - bardzo pozytywny czasownik! 'Me felicita' pokazuje uznanie. Dobry szef wie, że pochwały motywują zespół. To buduje pozytywną atmosferę w pracy! Każdy lubi być doceniany! 🌟"
      },
      {
        id: "wp_4",
        question: "Todos los días _____ que levantarme muy temprano para llegar puntual a la oficina.",
        translation: "(Codziennie muszę wstawać bardzo wcześnie, żeby dotrzeć punktualnie do biura)",
        options: ["tengo", "debo", "necesito", "hay"],
        correct: "tengo",
        explanation: "'Tener que' to musieć (silna konieczność osobista)! 'Tengo que levantarme' (muszę wstać) pokazuje twoją osobistą sytuację. To bardziej osobiste niż 'deber' (powinność moralna). Wczesne wstawanie to wyzwanie dla wielu! ⏰"
      },
      {
        id: "wp_5",
        question: "Mi compañera de trabajo _____ muy bien con todos en la oficina porque es muy simpática.",
        translation: "(Moja współpracowniczka dogaduje się bardzo dobrze ze wszystkimi w biurze, bo jest bardzo sympatyczna)",
        options: ["se lleva", "se porta", "se entiende", "se relaciona"],
        correct: "se lleva",
        explanation: "'Llevarse bien' to dogadywać się, mieć dobre relacje! 'Se lleva bien con todos' to piękna cecha. W pracy relacje są bardzo ważne! Dobra atmosfera sprawia, że praca jest przyjemnością. To jak rodzina zawodowa! 🤝"
      },
      {
        id: "wp_6",
        question: "El mes pasado mi empresa me _____ un aumento de sueldo por mi buen desempeño.",
        translation: "(W zeszłym miesiącu moja firma dała mi podwyżkę za moją dobrą wydajność)",
        options: ["dio", "puso", "hizo", "ofreció"],
        correct: "dio",
        explanation: "'Dar un aumento' to dać podwyżkę - standardowe wyrażenie korporacyjne! 'Dio' to pretérito (przeszły dokonany). Podwyżki są nagrodą za ciężką pracę! To moment celebracji w karierze. Twój wysiłek został zauważony! 💰"
      },
      {
        id: "wp_7",
        question: "Antes de la entrevista de trabajo _____ muy nervioso pero al final todo salió perfecto.",
        translation: "(Przed rozmową kwalifikacyjną byłem bardzo zdenerwowany, ale w końcu wszystko wyszło idealnie)",
        options: ["estaba", "era", "me ponía", "me sentía"],
        correct: "estaba",
        explanation: "'Estar nervioso' to być zdenerwowanym - stan emocjonalny! To normalne przed rozmowami kwalifikacyjnymi. 'Estaba' (imperfecto) pokazuje stan trwający w przeszłości. Nerwowość jest naturalna - pokazuje że ci zależy! 😊"
      },
      {
        id: "wp_8",
        question: "En mi trabajo actual _____ la oportunidad de aprender muchas cosas nuevas cada día.",
        translation: "(W mojej obecnej pracy mam okazję uczyć się wielu nowych rzeczy każdego dnia)",
        options: ["tengo", "hay", "está", "existe"],
        correct: "tengo",
        explanation: "'Tener la oportunidad' to mieć okazję - bardzo pozytywne! To pokazuje, że doceniasz możliwości rozwoju. Praca, która daje okazję do nauki, jest cennym skarbem! Ciągłe uczenie się to klucz do sukcesu! 📚"
      },
      {
        id: "wp_9",
        question: "Mi sueño es _____ mi propia empresa y ser mi propio jefe en el futuro cercano.",
        translation: "(Moim marzeniem jest założyć własną firmę i być własnym szefem w bliskiej przyszłości)",
        options: ["crear", "hacer", "poner", "formar"],
        correct: "crear",
        explanation: "'Crear una empresa' to stworzyć firmę - pokazuje innowację! 'Crear' (tworzyć) jest bardziej ambitne niż tylko 'hacer'. To o budowaniu czegoś od zera. Przedsiębiorczość to odważne marzenie! Wierzę w ciebie! 🚀"
      },
      {
        id: "wp_10",
        question: "Todos los viernes por la tarde _____ una reunión de equipo para revisar el trabajo semanal.",
        translation: "(Każdy piątek po południu mamy zebranie zespołu, żeby przejrzeć tygodniową pracę)",
        options: ["tenemos", "hacemos", "hay", "estamos"],
        correct: "tenemos",
        explanation: "'Tener una reunión' to mieć zebranie - standard biznesowy! Zebrania są częścią życia korporacyjnego. Piątkowe spotkania podsumowują tydzień. To dobra praktyka dla komunikacji w zespole! 📊"
      },
      {
        id: "wp_11",
        question: "Para trabajar en esta multinacional _____ hablar perfectamente inglés y español con fluidez.",
        translation: "(Żeby pracować w tej międzynarodówce musisz mówić perfekcyjnie po angielsku i płynnie po hiszpańsku)",
        options: ["necesitas", "debes", "tienes que", "puedes"],
        correct: "necesitas",
        explanation: "'Necesitar' dla wymagań zawodowych jest profesjonalne! Znajomość języków jest kluczowa w globalnym świecie. Wielojęzyczność otwiera drzwi do lepszych możliwości. Twoja inwestycja w języki się opłaca! 🌐"
      },
      {
        id: "wp_12",
        question: "Mi trabajo _____ en preparar presentaciones y análisis de datos para los clientes importantes.",
        translation: "(Moja praca polega na przygotowywaniu prezentacji i analiz danych dla ważnych klientów)",
        options: ["consiste", "es", "está", "trata"],
        correct: "consiste",
        explanation: "'Consistir en' to polegać na - opisuje esencję pracy! 'Consiste en' wyjaśnia, co dokładnie robisz. To bardziej szczegółowe niż tylko 'es' (jest). Używaj tego dla dokładnego opisu zawodu! 💻"
      },
      {
        id: "wp_13",
        question: "Después de cinco años trabajando en la misma empresa, finalmente me _____ ascender.",
        translation: "(Po pięciu latach pracy w tej samej firmie w końcu awansowałem)",
        options: ["ascendieron", "subieron", "promocionaron", "movieron"],
        correct: "ascendieron",
        explanation: "'Ascender' to awansować - ważny czasownik karierowy! Forma 'me ascendieron' pokazuje, że inni cię awansowali. Po pięciu latach to zasłużona nagroda! Cierpliwość i ciężka praca przynoszą rezultaty! 🎯"
      },
      {
        id: "wp_14",
        question: "En mi profesión es fundamental _____ actualizado con las últimas tendencias del mercado global.",
        translation: "(W moim zawodzie fundamentalne jest być na bieżąco z najnowszymi trendami globalnego rynku)",
        options: ["estar", "ser", "quedar", "permanecer"],
        correct: "estar",
        explanation: "'Estar actualizado' to być na bieżąco! To stan, który wymaga ciągłej pracy. Świat biznesu zmienia się szybko. 'Estar' pokazuje, że to wymaga aktywnego wysiłku. Nigdy nie przestawaj się uczyć! 📈"
      },
      {
        id: "wp_15",
        question: "Durante la pandemia muchas empresas _____ a sus empleados trabajar desde casa remotamente.",
        translation: "(Podczas pandemii wiele firm pozwoliło swoim pracownikom pracować z domu zdalnie)",
        options: ["permitieron", "dejaron", "dieron", "hicieron"],
        correct: "permitieron",
        explanation: "'Permitir' to pozwalać - formalny i profesjonalny! Praca zdalna zmieniła świat zawodowy. 'Permitieron' pokazuje, że firma dała pozwolenie. To była rewolucja w kulturze pracy! Elastyczność jest przyszłością! 🏡"
      }
    ]
  },

  education_and_learning: {
    name: "Edukacja i nauka",
    description: "Rozmawiaj o szkole i studiach",
    icon: GraduationCap,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "el_1",
        question: "Cada día _____ mucho tiempo estudiando para mis exámenes finales de la universidad.",
        translation: "(Codziennie spędzam dużo czasu ucząc się do moich końcowych egzaminów na uniwersytecie)",
        options: ["paso", "gasto", "tengo", "hago"],
        correct: "paso",
        explanation: "'Pasar tiempo' to spędzać czas - bardzo użyteczne! 'Paso tiempo estudiando' (spędzam czas ucząc się). To bardziej naturalne niż 'estar estudiando'. Pokazuje poświęcenie i wysiłek. Edukacja wymaga czasu i cierpliwości! ⏱️"
      },
      {
        id: "el_2",
        question: "Mi profesora de matemáticas _____ los conceptos difíciles de una manera muy clara y comprensible.",
        translation: "(Moja nauczycielka matematyki wyjaśnia trudne koncepcje w bardzo jasny i zrozumiały sposób)",
        options: ["explica", "enseña", "muestra", "dice"],
        correct: "explica",
        explanation: "'Explicar' to wyjaśniać - kluczowy czasownik edukacyjny! Dobry nauczyciel 'explica bien'. To różne od tylko 'enseñar' (uczyć). 'Explicar' jest bardziej szczegółowe. Jasne wyjaśnienia są złotem w nauce! 📝"
      },
      {
        id: "el_3",
        question: "Para aprobar este curso _____ asistir a todas las clases y entregar todos los trabajos.",
        translation: "(Żeby zaliczyć ten kurs musisz uczęszczać na wszystkie zajęcia i oddać wszystkie prace)",
        options: ["necesitas", "debes", "tienes que", "puedes"],
        correct: "necesitas",
        explanation: "'Necesitar' dla wymagań akademickich! 'Necesitas asistir' (musisz uczęszczać) jest jasne i bezpośrednie. Obecność na zajęciach jest ważna dla sukcesu. Konsekwencja jest kluczem do zaliczenia! ✅"
      },
      {
        id: "el_4",
        question: "Los estudiantes de mi clase _____ preparando una presentación grupal sobre historia española.",
        translation: "(Studenci z mojej klasy przygotowują grupową prezentację o hiszpańskiej historii)",
        options: ["están", "son", "tienen", "hacen"],
        correct: "están",
        explanation: "'Estar + gerundio' dla akcji w toku! 'Están preparando' (przygotowują teraz) pokazuje aktualność. Projekty grupowe uczą współpracy. To ważna umiejętność na przyszłość! Razem zawsze lepiej! 👥"
      },
      {
        id: "el_5",
        question: "Ayer _____ muy mal en el examen de química porque no había estudiado suficiente.",
        translation: "(Wczoraj bardzo słabo poszło mi na egzaminie z chemii, bo nie nauczyłem się wystarczająco)",
        options: ["me fue", "me salió", "hice", "tuve"],
        correct: "me fue",
        explanation: "'Me fue mal' to poszło mi źle - idiomatyczne! To o rezultacie, nie akcji. 'Ir' w tym kontekście mówi o tym, jak coś poszło. To jak raport z bitwy - czasem wygrywamy, czasem uczymy się na błędach! 📖"
      },
      {
        id: "el_6",
        question: "Mi hermana menor _____ estudiando medicina en la universidad porque quiere ser doctora.",
        translation: "(Moja młodsza siostra studiuje medycynę na uniwersytecie, bo chce być lekarką)",
        options: ["está", "es", "hace", "tiene"],
        correct: "está",
        explanation: "'Estar estudiando' to studiować (w danym okresie życia)! To stan tymczasowy - trwa kilka lat. To różne od 'ser estudiante' (być studentem jako tożsamość). Medycyna to trudna i szlachetna droga! 👩‍⚕️"
      },
      {
        id: "el_7",
        question: "En mi escuela primaria los niños _____ a leer y escribir desde los seis años.",
        translation: "(W mojej szkole podstawowej dzieci uczą się czytać i pisać od szóstego roku życia)",
        options: ["aprenden", "estudian", "saben", "conocen"],
        correct: "aprenden",
        explanation: "'Aprender a' to uczyć się czegoś (nabywać umiejętność)! 'Aprenden a leer' (uczą się czytać) to proces. To różne od 'saber leer' (umieć czytać - rezultat). Nauka czytania to magiczny moment w życiu dziecka! 📚"
      },
      {
        id: "el_8",
        question: "El profesor nos _____ mucha tarea para el fin de semana y todos protestamos un poco.",
        translation: "(Nauczyciel zadał nam dużo zadań na weekend i wszyscy trochę protestowaliśmy)",
        options: ["puso", "dio", "mandó", "hizo"],
        correct: "puso",
        explanation: "'Poner tarea' to zadać pracę domową - kolokwialne! Możesz też powiedzieć 'dar tarea' lub 'mandar tarea'. Wszystkie są poprawne! Praca domowa to konieczność, chociaż nie zawsze popularna! 📝"
      },
      {
        id: "el_9",
        question: "Para mejorar mi español _____ películas en español con subtítulos todos los días.",
        translation: "(Żeby poprawić mój hiszpański oglądam filmy po hiszpańsku z napisami codziennie)",
        options: ["veo", "miro", "observo", "contemplo"],
        correct: "veo",
        explanation: "'Ver películas' to oglądać filmy - standardowe! 'Mirar' jest bardziej o skierowaniu wzroku. 'Ver' jest o percepcji. Dla filmów, TV, używamy 'ver'. To świetna metoda nauki języka - rozrywka i edukacja! 🎬"
      },
      {
        id: "el_10",
        question: "Los exámenes finales me _____ mucho estrés pero son necesarios para avanzar de curso.",
        translation: "(Końcowe egzaminy powodują u mnie dużo stresu, ale są konieczne żeby przejść do następnej klasy)",
        options: ["causan", "dan", "hacen", "ponen"],
        correct: "causan",
        explanation: "'Causar estrés' to powodować stres - formalne i eleganckie! Egzaminy są stresujące dla wszystkich. To normalne! Stres pokazuje, że ci zależy. Oddech, przygotowanie i wiara w siebie - to twoja recepta! 💪"
      },
      {
        id: "el_11",
        question: "En la biblioteca universitaria siempre hay estudiantes que _____ en silencio preparándose para exámenes.",
        translation: "(W bibliotece uniwersyteckiej zawsze są studenci, którzy w ciszy przygotowują się do egzaminów)",
        options: ["estudian", "aprenden", "leen", "trabajan"],
        correct: "estudian",
        explanation: "'Estudiar' to uczyć się systematycznie! Biblioteka to świątynia nauki - miejsce spokoju i koncentracji. 'Estudiar en silencio' (uczyć się w ciszy) to szacunek dla innych. Biblioteki są magiczne! 📚"
      },
      {
        id: "el_12",
        question: "Mi curso favorito en la universidad _____ literatura española porque me encantan los libros clásicos.",
        translation: "(Moim ulubionym kursem na uniwersytecie jest hiszpańska literatura, bo uwielbiam klasyczne książki)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Ser' dla identyfikacji i definicji! 'Mi curso favorito es...' (moim ulubionym kursem jest...) to jak przedstawienie. Literatura hiszpańska jest bogata i piękna! Don Quijote to tylko początek! 📖"
      },
      {
        id: "el_13",
        question: "Cuando no entiendo algo en clase, siempre _____ preguntas al profesor sin miedo ni vergüenza.",
        translation: "(Kiedy czegoś nie rozumiem na zajęciach, zawsze zadaję pytania nauczycielowi bez strachu ani wstydu)",
        options: ["hago", "doy", "pongo", "tengo"],
        correct: "hago",
        explanation: "'Hacer preguntas' to zadawać pytania - aktywna nauka! Pytanie nie jest znakiem słabości, ale siły! Nauczyciele szanują ciekawość. Nigdy nie bój się pytać - to jedyna droga do prawdziwego zrozumienia! ❓"
      },
      {
        id: "el_14",
        question: "Después de graduarme de la universidad _____ hacer un máster en negocios internacionales.",
        translation: "(Po ukończeniu uniwersytetu planuję zrobić magisterium z międzynarodowego biznesu)",
        options: ["pienso", "quiero", "voy a", "espero"],
        correct: "pienso",
        explanation: "'Pensar' + infinitivo to planować, mieć zamiar! 'Pienso hacer' (planuję zrobić) pokazuje konkretną intencję. Magisterium to inwestycja w twoją przyszłość. Edukacja nigdy się nie kończy! 🎓"
      },
      {
        id: "el_15",
        question: "En mi último año de secundaria _____ mucho esfuerzo para sacar las mejores notas posibles.",
        translation: "(W moim ostatnim roku liceum wkładałem dużo wysiłku żeby dostać najlepsze możliwe oceny)",
        options: ["ponía", "hacía", "daba", "metía"],
        correct: "ponía",
        explanation: "'Poner esfuerzo' to wkładać wysiłek - pokazuje determinację! To czas intensywnej pracy. Ostatni rok jest kluczowy dla przyszłości. Twój ciężki wysiłek zawsze się opłaca! Sukces to rezultat poświęcenia! 🌟"
      }
    ]
  },

  phone_and_communication: {
    name: "Telefon i komunikacja",
    description: "Komunikuj się skutecznie po hiszpańsku",
    icon: Phone,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "pc_1",
        question: "¿_____ hablar con el señor García por favor? Es sobre el proyecto importante de esta semana.",
        translation: "(Czy mógłbym porozmawiać z panem García proszę? To w sprawie ważnego projektu tego tygodnia)",
        options: ["Podría", "Puedo", "Debo", "Quiero"],
        correct: "Podría",
        explanation: "'¿Podría...?' to 'czy mógłbym...?' - bardzo grzeczne! Warunkowy czyni pytanie bardziej uprzejmym niż 'puedo'. W biznesie formalność jest ważna. To pokazuje szacunek. Grzeczność otwiera drzwi! 📞"
      },
      {
        id: "pc_2",
        question: "Cuando suena mi móvil durante una reunión importante, siempre lo _____ inmediatamente.",
        translation: "(Kiedy mój telefon dzwoni podczas ważnego spotkania, zawsze go natychmiast wyciszam)",
        options: ["silencio", "apago", "quito", "cierro"],
        correct: "silencio",
        explanation: "'Silenciar' to wyciszyć (telefon) - nowoczesny czasownik! To szacunek dla innych w spotkaniu. Możesz też 'poner en silencio'. Etykieta telefoniczna jest ważna w profesjonalnym świecie! 🤫"
      },
      {
        id: "pc_3",
        question: "Mi abuela no _____ usar aplicaciones de mensajería porque le parecen demasiado complicadas.",
        translation: "(Moja babcia nie umie używać aplikacji do wiadomości, bo wydają jej się zbyt skomplikowane)",
        options: ["sabe", "conoce", "puede", "entiende"],
        correct: "sabe",
        explanation: "'Saber usar' to umieć używać (umiejętność praktyczna)! To różne od 'conocer' (znać). Dla nowych technologii starsze pokolenie czasem potrzebuje pomocy. Cierpliwość i wsparcie są kluczowe! 👵"
      },
      {
        id: "pc_4",
        question: "Te _____ más tarde cuando salga del trabajo para organizar nuestra cena de mañana.",
        translation: "(Zadzwonię do ciebie później, kiedy wyjdę z pracy, żeby zorganizować naszą jutrzejszą kolację)",
        options: ["llamo", "llamaré", "he llamado", "llamaba"],
        correct: "llamo",
        explanation: "Używamy teraźniejszości dla przyszłych akcji pewnych! 'Te llamo' (dzwonię do ciebie) jest bardziej naturalne niż futuro. To pokazuje pewność planu. W rozmowach codziennych to bardzo hiszpańskie! 📱"
      },
      {
        id: "pc_5",
        question: "Cuando viajo al extranjero siempre _____ datos móviles para poder usar internet en cualquier lugar.",
        translation: "(Kiedy podróżuję za granicę, zawsze aktywuję dane mobilne, żeby móc korzystać z internetu wszędzie)",
        options: ["activo", "enciendo", "pongo", "uso"],
        correct: "activo",
        explanation: "'Activar' to aktywować - techniczny czasownik! W erze cyfrowej internet jest koniecznością. 'Activar los datos' to nowoczesne wyrażenie. Bycie połączonym daje bezpieczeństwo w podróży! 🌐"
      },
      {
        id: "pc_6",
        question: "¿Me puedes _____ tu número de teléfono otra vez? Lo he perdido cuando cambié de móvil.",
        translation: "(Czy możesz mi podać swój numer telefonu jeszcze raz? Zgubiłem go, kiedy zmieniłem telefon)",
        options: ["dar", "decir", "mandar", "enviar"],
        correct: "dar",
        explanation: "'Dar el número' to podać numer - najnaturalniejsze! Możesz też 'decir' (powiedzieć), ale 'dar' jest bardziej kolokwialne. Zmiana telefonu to zawsze wyzwanie dla kontaktów! 📲"
      },
      {
        id: "pc_7",
        question: "Mi madre me _____ todos los días por WhatsApp para saber cómo estoy viviendo solo.",
        translation: "(Moja mama pisze do mnie codziennie przez WhatsApp, żeby wiedzieć jak sobie radzę mieszkając samemu)",
        options: ["escribe", "llama", "manda", "envía"],
        correct: "escribe",
        explanation: "'Escribir por WhatsApp' to pisać przez WhatsApp! W Hiszpanii i Ameryce Łacińskiej WhatsApp jest królem komunikacji. To bardziej osobiste niż SMS. Matki zawsze się martwią - to język miłości! 💚"
      },
      {
        id: "pc_8",
        question: "Cuando estoy en el cine siempre _____ el móvil en modo silencioso por respeto a los demás.",
        translation: "(Kiedy jestem w kinie, zawsze ustawiam telefon w tryb cichy z szacunku dla innych)",
        options: ["pongo", "dejo", "hago", "tengo"],
        correct: "pongo",
        explanation: "'Poner en modo silencioso' to ustawić w tryb cichy! 'Poner' jest bardzo wersatylny - używamy go dla ustawień telefonu. Szacunek w miejscach publicznych jest fundamentalny! 🎬"
      },
      {
        id: "pc_9",
        question: "No puedo contestar ahora porque estoy _____ una reunión muy importante con mi jefe.",
        translation: "(Nie mogę teraz odebrać, bo jestem na bardzo ważnym spotkaniu z moim szefem)",
        options: ["en", "a", "por", "con"],
        correct: "en",
        explanation: "'Estar en una reunión' to być na spotkaniu! Przyimek 'en' jest kluczowy. To grzeczne wytłumaczenie, dlaczego nie możesz rozmawiać. Priorytety są ważne - praca pierwsza! 💼"
      },
      {
        id: "pc_10",
        question: "Mi padre siempre me _____ videollamadas para poder ver a sus nietos cuando viaja por negocios.",
        translation: "(Mój ojciec zawsze dzwoni do mnie wideorozmowami, żeby móc widzieć swoje wnuki, kiedy podróżuje służbowo)",
        options: ["hace", "pone", "da", "manda"],
        correct: "hace",
        explanation: "'Hacer videollamadas' to wykonywać wideorozmowy! Technologia połączyła rodziny. Dziadkowie mogą widzieć wnuki mimo odległości. To piękny dar nowoczesności! Miłość rodzinna nie zna granic! 👨‍👩‍👧‍👦"
      },
      {
        id: "pc_11",
        question: "Cuando alguien me llama desde un número desconocido, generalmente no lo _____ por precaución.",
        translation: "(Kiedy ktoś dzwoni do mnie z nieznanego numeru, zazwyczaj nie odbieram z ostrożności)",
        options: ["contesto", "respondo", "cojo", "tomo"],
        correct: "contesto",
        explanation: "'Contestar' to odbierać telefon, odpowiadać! W erze spamu ostrożność jest mądra. 'No contestar' to twój prawo. Możesz później sprawdzić i oddzwonić, jeśli ważne! 🔒"
      },
      {
        id: "pc_12",
        question: "¿Podrías _____ un mensaje a tu hermano diciendo que llegaré tarde esta noche?",
        translation: "(Czy mógłbyś wysłać wiadomość swojemu bratu mówiąc, że przyjdę późno dziś wieczorem?)",
        options: ["enviar", "mandar", "dar", "poner"],
        correct: "enviar",
        explanation: "'Enviar un mensaje' to wysłać wiadomość - bardzo użyteczne! 'Mandar' też działa. W cyfrowym świecie wiadomości są szybsze niż telefony. To wygodny sposób komunikacji! 📨"
      },
      {
        id: "pc_13",
        question: "Mi hermana pequeña está _____ adicta al móvil y pasa todo el día mirando la pantalla.",
        translation: "(Moja młodsza siostra jest uzależniona od telefonu i spędza cały dzień patrząc na ekran)",
        options: ["volviéndose", "haciéndose", "poniéndose", "siendo"],
        correct: "volviéndose",
        explanation: "'Volverse adicto' to stawać się uzależnionym! 'Estar volviéndose' pokazuje proces w toku. Uzależnienie od telefonu to współczesny problem. Balans cyfrowy jest ważny dla zdrowia! ⚖️"
      },
      {
        id: "pc_14",
        question: "Antes de dormir siempre _____ el móvil porque la luz azul afecta la calidad del sueño.",
        translation: "(Przed spaniem zawsze wyłączam telefon, bo niebieskie światło wpływa na jakość snu)",
        options: ["apago", "cierro", "quito", "dejo"],
        correct: "apago",
        explanation: "'Apagar el móvil' to wyłączyć telefon! Higiena snu jest kluczowa dla zdrowia. Światło ekranu zakłóca melatoninę. Tryb nocny też pomaga, ale wyłączenie jest najlepsze! 😴"
      },
      {
        id: "pc_15",
        question: "En el avión los pasajeros deben _____ sus teléfonos en modo avión durante todo el vuelo.",
        translation: "(W samolocie pasażerowie muszą ustawić swoje telefony w tryb samolotowy przez cały lot)",
        options: ["poner", "dejar", "hacer", "tener"],
        correct: "poner",
        explanation: "'Poner en modo avión' to ustawić w tryb samolotowy - bezpieczeństwo! To regulacja lotnicza dla ochrony systemów. Przestrzeganie zasad chroni wszystkich pasażerów. Bezpieczeństwo najważniejsze! ✈️"
      }
    ]
  }
};

export default part5Categories;
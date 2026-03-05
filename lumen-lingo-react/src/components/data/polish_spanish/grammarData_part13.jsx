/**
 * POLISH → SPANISH GRAMMAR - PART 13
 * 4 categories, 15 questions each - Building mastery
 */

import { Zap, Target, Flame, Globe } from "lucide-react";

export const part13Categories = {
  past_perfect_tense: {
    name: "Czas zaprzeszły",
    description: "Mów o tym, co było przed czymś innym",
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "pp_1",
        question: "Cuando llegué a la fiesta, todos ya se _____ ido porque era muy tarde.",
        translation: "(Kiedy dotarłem na imprezę, wszyscy już poszli, bo było bardzo późno)",
        options: ["habían", "han", "hubieron", "habían"],
        correct: "habían",
        explanation: "'Habían + participio' to czas zaprzeszły! Akcja zakończona PRZED inną akcją w przeszłości. Oni wyszli PRZED twoim przyjściem. To jak schodki w czasie - jedno po drugim! ⏰"
      },
      {
        id: "pp_2",
        question: "Nunca _____ visto una película tan emocionante como esa en toda mi vida anterior.",
        translation: "(Nigdy nie widziałem tak ekscytującego filmu jak ten w całym moim poprzednim życiu)",
        options: ["había", "he", "hube", "habría"],
        correct: "había",
        explanation: "'Nunca había visto' to nigdy wcześniej nie widziałem! Doświadczenie sprzed jakiegoś momentu w przeszłości. To jak odkrycie czegoś nowego po raz pierwszy! 🎬"
      },
      {
        id: "pp_3",
        question: "Ya _____ comido cuando me invitaste a cenar, por eso no tenía hambre entonces.",
        translation: "(Już zjadłem, kiedy zaprosiłeś mnie na kolację, dlatego nie byłem głodny wtedy)",
        options: ["había", "he", "hube", "habré"],
        correct: "había",
        explanation: "'Ya había comido' to już jadłem wcześniej! Akcja zakończona przed zaproszeniem. 'Ya' często sygnalizuje czas zaprzeszły. To wyjaśnia brak apetytu - timing jest wszystkim! 🍽️"
      },
      {
        id: "pp_4",
        question: "Me dijeron que tú ya _____ estado en Barcelona antes, ¿es verdad eso?",
        translation: "(Powiedzieli mi, że ty już byłeś w Barcelonie wcześniej, czy to prawda?)",
        options: ["habías", "has", "hubiste", "habrías"],
        correct: "habías",
        explanation: "'Habías estado' to byłeś już tam przedtem! Doświadczenie przed innym momentem przeszłym. Barcelona jest magiczna - każda wizyta to nowa przygoda nawet dla weteranów! 🏛️"
      },
      {
        id: "pp_5",
        question: "Cuando empezó a llover, nosotros ya nos _____ refugiado bajo un árbol grande.",
        translation: "(Kiedy zaczęło padać, my już schroniliśmy się pod dużym drzewem)",
        options: ["habíamos", "hemos", "hubimos", "habríamos"],
        correct: "habíamos",
        explanation: "'Nos habíamos refugiado' to już się schroniliśmy! Akcja zakończona PRZED deszczem. Byliśmy sprytni i szybcy - dobra antycypacja ratuje od przemoczenia! ☔"
      },
      {
        id: "pp_6",
        question: "Ella no vino porque ya _____ visto esa película tres veces anteriormente en el cine.",
        translation: "(Ona nie przyszła, bo już widziała ten film trzy razy wcześniej w kinie)",
        options: ["había", "ha", "hubo", "habría"],
        correct: "había",
        explanation: "'Había visto' wyjaśnia powód w przeszłości! Trzykrotne oglądanie było PRZED odmową przyjścia. To logiczne - nikt nie chce czwartego razu tego samego! 🎭"
      },
      {
        id: "pp_7",
        question: "Antes de mudarme a Madrid, nunca _____ vivido en una ciudad tan grande y vibrante.",
        translation: "(Przed przeprowadzką do Madrytu nigdy nie mieszkałem w tak dużym i tętniącym życiem mieście)",
        options: ["había", "he", "hube", "habré"],
        correct: "había",
        explanation: "'Nunca había vivido' to nigdy wcześniej! Nowe doświadczenie życiowe przed przeprowadzką. Wielkie miasta mogą przytłaczać początkowo - ale stają się domem z czasem! 🏙️"
      },
      {
        id: "pp_8",
        question: "Te llamé porque pensé que ya _____ llegado a casa de tu largo viaje.",
        translation: "(Zadzwoniłem do ciebie, bo myślałem że już dotarłeś do domu z twojej długiej podróży)",
        options: ["habías", "has", "hubiste", "habrías"],
        correct: "habías",
        explanation: "'Habías llegado' w myśleniu o przeszłości! Założenie o tym, co się stało przed telefonem. To jak detektyw - wnioskujesz o wydarzeniach! 🔍"
      },
      {
        id: "pp_9",
        question: "Mis padres ya _____ cenado cuando yo llegué tarde del trabajo a casa cansado.",
        translation: "(Moi rodzice już zjedli kolację, kiedy ja późno wróciłem zmęczony z pracy do domu)",
        options: ["habían", "han", "hubieron", "habrían"],
        correct: "habían",
        explanation: "'Habían cenado' to już zjedli wcześniej! Kolacja była PRZED twoim przyjściem spóźnionym. Rodzina nie może czekać wiecznie - komunikacja jest ważna! 🍲"
      },
      {
        id: "pp_10",
        question: "No pude encontrar las llaves porque las _____ dejado en la oficina por descuido.",
        translation: "(Nie mogłem znaleźć kluczy, bo zostawiłem je w biurze przez nieuwagę)",
        options: ["había", "he", "hube", "habré"],
        correct: "había",
        explanation: "'Había dejado' wyjaśnia przyczynę niemożności! Zostawiłeś klucze PRZED próbą znalezienia. To frustrujący moment który zna każdy - rozproszenie się zdarza! 🔑"
      },
      {
        id: "pp_11",
        question: "Cuando finalmente aprobé el examen, ya _____ estudiado durante tres meses completos intensamente.",
        translation: "(Kiedy w końcu zdałem egzamin, już studiowałem intensywnie przez trzy całe miesiące)",
        options: ["había", "he", "hube", "habré"],
        correct: "había",
        explanation: "'Había estudiado' to nauka przed egzaminem! Trzy miesiące przygotowań przed sukcesem. Ciężka praca zawsze przynosi owoce - to uniwersalna prawda życiowa! 📖"
      },
      {
        id: "pp_12",
        question: "Te _____ llamado antes pero mi teléfono se quedó sin batería completamente ayer.",
        translation: "(Zadzwoniłbym do ciebie wcześniej, ale mój telefon całkowicie się rozładował wczoraj)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'Habría llamado' to warunkowy zaprzeszły! 'Zrobiłbym ale...' - niezrealizowana intencja. To pokazuje dobrą wolę mimo przeszkód. Bateria zawsze w najmniej odpowiednim momencie! 🔋"
      },
      {
        id: "pp_13",
        question: "Si _____ sabido que venías, habría preparado tu comida favorita con mucho cariño.",
        translation: "(Gdybym wiedział, że przyjdziesz, przygotowałbym twoje ulubione jedzenie z wielką miłością)",
        options: ["hubiera", "había", "habría", "he"],
        correct: "hubiera",
        explanation: "'Si hubiera sabido' to gdybym był wiedział! Nierzeczywisty warunek w przeszłości. Nie wiedziałeś więc nie przygotowałeś. To wyraz żalu za straconą okazją! 😔"
      },
      {
        id: "pp_14",
        question: "Ellos ya _____ terminado el proyecto cuando el jefe llegó a revisar el progreso del trabajo.",
        translation: "(Oni już skończyli projekt, kiedy szef przyszedł sprawdzić postęp pracy)",
        options: ["habían", "han", "hubieron", "habrían"],
        correct: "habían",
        explanation: "'Habían terminado' pokazuje kompletne ukończenie przed! Zakończyli PRZED wizytą szefa. Bycie z wyprzedzeniem to profesjonalizm - szef był pod wrażeniem! 💼"
      },
      {
        id: "pp_15",
        question: "Nosotros nunca _____ probado la comida tailandesa auténtica antes de ese viaje especial a Bangkok.",
        translation: "(My nigdy nie próbowaliśmy autentycznego tajskiego jedzenia przed tą specjalną podróżą do Bangkoku)",
        options: ["habíamos", "hemos", "hubimos", "habríamos"],
        correct: "habíamos",
        explanation: "'Nunca habíamos probado' to nigdy wcześniej nie próbowaliśmy! Pierwsze doświadczenie przed podróżą. Nowe smaki otwierają podniebienie i umysł - kulinarny świat jest ogromny! 🍜"
      }
    ]
  },

  giving_opinions: {
    name: "Wyrażanie opinii",
    description: "Dziel się swoimi przemyśleniami skutecznie",
    icon: Target,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "op_1",
        question: "_____ mi opinión personal, esta película es una obra maestra del cine contemporáneo español.",
        translation: "(Moim zdaniem ten film jest arcydziełem współczesnego kina hiszpańskiego)",
        options: ["En", "A", "Por", "Según"],
        correct: "En",
        explanation: "'En mi opinión' to moim zdaniem - standardowe! Wprowadza twoją osobistą perspektywę. To jak otwarcie okna na twoje myśli - jasne i bezpośrednie! 💭"
      },
      {
        id: "op_2",
        question: "Me _____ que deberías estudiar más para aprobar el examen final del curso importante.",
        translation: "(Wydaje mi się, że powinieneś więcej się uczyć, żeby zdać końcowy egzamin ważnego kursu)",
        options: ["parece", "aparece", "semeja", "piensa"],
        correct: "parece",
        explanation: "'Me parece que' to wydaje mi się! Łagodniejsze niż 'pienso que' (myślę że). To subiektywna ocena nie twardy fakt. Delikatność w radzie buduje mosty! 🌉"
      },
      {
        id: "op_3",
        question: "Desde mi punto de vista, la educación _____ el valor más importante en la sociedad moderna.",
        translation: "(Z mojego punktu widzenia edukacja jest najważniejszą wartością we współczesnym społeczeństwie)",
        options: ["es", "está", "tiene", "hace"],
        correct: "es",
        explanation: "'Desde mi punto de vista' wprowadza opinię formalnie! 'Ser' dla wartości i definicji. Edukacja to fundament rozwoju - wiedza wyzwala i daje moc! 📚"
      },
      {
        id: "op_4",
        question: "_____ mi parecer, este restaurante ofrece la mejor comida italiana auténtica de toda la ciudad.",
        translation: "(Według mnie ta restauracja oferuje najlepsze autentyczne włoskie jedzenie w całym mieście)",
        options: ["A", "En", "Por", "Según"],
        correct: "A",
        explanation: "'A mi parecer' to według mnie formalnie! Elegancki sposób wyrażenia opinii kulinarnej. Włoska kuchnia w Hiszpanii może być świetna - prawdziwe smaki! 🍝"
      },
      {
        id: "op_5",
        question: "Creo firmemente que todos _____ trabajar juntos para proteger nuestro medio ambiente frágil.",
        translation: "(Mocno wierzę, że wszyscy powinniśmy pracować razem, żeby chronić nasze kruche środowisko)",
        options: ["debemos", "deberíamos", "tenemos que", "hay que"],
        correct: "debemos",
        explanation: "'Creer que + indicativo' wyraża przekonanie! 'Debemos' to powinniśmy jako obowiązek moralny. Planeta potrzebuje naszej troski - to nasz jedyny dom! 🌍"
      },
      {
        id: "op_6",
        question: "No estoy de _____ con esa decisión política porque creo que afectará negativamente a muchas familias.",
        translation: "(Nie zgadzam się z tą decyzją polityczną, bo uważam że wpłynie negatywnie na wiele rodzin)",
        options: ["acuerdo", "acordo", "pacto", "trato"],
        correct: "acuerdo",
        explanation: "'Estar de acuerdo' to zgadzać się! 'No estar de acuerdo' to nie zgadzać się. To demokratyczny sposób wyrażenia sprzeciwu - twój głos ma znaczenie! 🗣️"
      },
      {
        id: "op_7",
        question: "_____ mi experiencia personal, aprender idiomas extranjeros abre muchas puertas importantes en la vida.",
        translation: "(Z mojego osobistego doświadczenia uczenie się obcych języków otwiera wiele ważnych drzwi w życiu)",
        options: ["Según", "Por", "En", "De"],
        correct: "Según",
        explanation: "'Según mi experiencia' opiera opinię na życiu! To pokazuje że twoja mądrość pochodzi z praktyki nie teorii. Doświadczenie to najlepszy nauczyciel zawsze! 🎓"
      },
      {
        id: "op_8",
        question: "Me da la _____ de que esta propuesta no va a funcionar bien en la práctica real.",
        translation: "(Odnoszę wrażenie, że ta propozycja nie będzie dobrze działać w rzeczywistej praktyce)",
        options: ["impresión", "opinión", "sensación", "idea"],
        correct: "impresión",
        explanation: "'Dar la impresión de que' to sprawiać wrażenie! To intuicyjna ocena nie twardy fakt. Intuicja często nas nie zawodzi - słuchaj wewnętrznego głosu! 💡"
      },
      {
        id: "op_9",
        question: "Personalmente, _____ que la honestidad es fundamental en cualquier tipo de relación humana.",
        translation: "(Osobiście uważam, że uczciwość jest fundamentalna w każdym typie ludzkiego związku)",
        options: ["pienso", "pensaría", "pensé", "he pensado"],
        correct: "pienso",
        explanation: "'Pienso que' to myślę że - najprostszy sposób! Teraźniejszy dla obecnego przekonania. Uczciwość buduje zaufanie - fundament wszystkich dobrych relacji! 💎"
      },
      {
        id: "op_10",
        question: "En mi _____, los jóvenes de hoy tienen muchas más oportunidades que las generaciones anteriores.",
        translation: "(Moim zdaniem młodzi dzisiaj mają dużo więcej możliwości niż poprzednie pokolenia)",
        options: ["opinión", "parecer", "vista", "juicio"],
        correct: "opinión",
        explanation: "'En mi opinión' to najpopularniejszy sposób! Jasny i bezpośredni. Każde pokolenie ma swoje wyzwania i możliwości - postęp jest realny! 🚀"
      },
      {
        id: "op_11",
        question: "Tengo la _____ de que mañana hará muy buen tiempo perfecto para nuestra excursión planeada.",
        translation: "(Mam przeczucie, że jutro będzie bardzo dobra pogoda idealna na naszą planowaną wycieczkę)",
        options: ["sensación", "opinión", "impresión", "corazonada"],
        correct: "corazonada",
        explanation: "'Tener una corazonada' to mieć przeczucie intuicyjne! To uczucie wewnętrzne nie logika. Czasem serce wie więcej niż umysł - zaufaj intuicji! 💫"
      },
      {
        id: "op_12",
        question: "¿Qué te _____ la idea de organizar una fiesta sorpresa para nuestro amigo común?",
        translation: "(Co sądzisz o pomyśle zorganizowania niespodzianki dla naszego wspólnego przyjaciela?)",
        options: ["parece", "aparece", "piensa", "opina"],
        correct: "parece",
        explanation: "'¿Qué te parece?' to co o tym myślisz? Prosi o opinię uprzejmie. Niespodzianki są rys ykowne ale ekscytujące - reakcja jest bezcenna! 🎉"
      },
      {
        id: "op_13",
        question: "A decir _____, no me gustó mucho esa película aunque todos la recomendaban entusiastamente.",
        translation: "(Prawdę mówiąc, nie podobał mi się bardzo ten film, chociaż wszyscy entuzjastycznie go polecali)",
        options: ["verdad", "cierto", "sincero", "franco"],
        correct: "verdad",
        explanation: "'A decir verdad' to prawdę mówiąc szczerze! Wprowadza szczerą opinię czasem niepopularną. Być autentycznym to odwaga - nie musisz zgadzać się ze wszystkimi! 🎭"
      },
      {
        id: "op_14",
        question: "Bajo mi punto de _____, la tecnología moderna nos ayuda más de lo que nos perjudica.",
        translation: "(Z mojego punktu widzenia nowoczesna technologia pomaga nam bardziej niż szkodzi)",
        options: ["vista", "ver", "visión", "mirada"],
        correct: "vista",
        explanation: "'Bajo mi punto de vista' to formalne 'z mojego punktu widzenia'! Technologia to miecz obosieczny - używaj mądrze dla dobra! 💻"
      },
      {
        id: "op_15",
        question: "No _____ de acuerdo contigo en ese tema político porque tenemos valores muy diferentes.",
        translation: "(Nie zgadzam się z tobą w tym temacie politycznym, bo mamy bardzo różne wartości)",
        options: ["estoy", "soy", "tengo", "hago"],
        correct: "estoy",
        explanation: "'No estoy de acuerdo' to nie zgadzam się! 'Estar' bo to stan zdania opinii. Różnice poglądów są naturalne - szacunek mimo różnic buduje społeczeństwo! 🤝"
      }
    ]
  },

  feelings_and_states: {
    name: "Uczucia i stany",
    description: "Opisuj jak się czujesz szczegółowo",
    icon: Flame,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "feel_1",
        question: "Hoy me _____ especialmente feliz porque recibí una noticia maravillosa de mi familia querida.",
        translation: "(Dziś czuję się szczególnie szczęśliwy, bo dostałem wspaniałą wiadomość od mojej ukochanej rodziny)",
        options: ["siento", "estoy", "soy", "tengo"],
        correct: "siento",
        explanation: "'Sentirse' to czuć się głęboko! Bardziej osobiste wewnętrzne niż 'estar'. To twoje subiektywne odczucie emocjonalne. Dobre wiadomości podnoszą ducha natychmiast! 😊"
      },
      {
        id: "feel_2",
        question: "Mi hermana _____ muy emocionada por su próximo viaje de aventura a Sudamérica exótica.",
        translation: "(Moja siostra jest bardzo podekscytowana swoją nadchodzącą podróżą przygodową do egzotycznej Ameryki Południowej)",
        options: ["está", "es", "tiene", "siente"],
        correct: "está",
        explanation: "'Estar emocionado' to być podekscytowanym teraz! Stan emocjonalny tymczasowy wywołany czymś konkretnym. Po podróży wraca normalność. Emocje są jak fale morskie! 🌊"
      },
      {
        id: "feel_3",
        question: "Me _____ muy orgulloso de mi hija cuando se graduó con honores de la universidad prestigiosa.",
        translation: "(Czułem się bardzo dumny z mojej córki, kiedy ukończyła z wyróżnieniem prestiżowy uniwersytet)",
        options: ["sentí", "estaba", "fui", "tuve"],
        correct: "sentí",
        explanation: "'Sentirse orgulloso' w przeszłości to pretérito! Intensywna emocja w konkretnym momencie. Sukces dzieci to najpiękniejsza nagroda rodzica - to spełnienie! 🎓"
      },
      {
        id: "feel_4",
        question: "Estamos muy _____ de conocerte finalmente después de tanto tiempo hablando por internet solamente.",
        translation: "(Jesteśmy bardzo zadowoleni poznać cię w końcu po tak długim czasie rozmawiania tylko przez internet)",
        options: ["contentos", "contento", "contenta", "alegres"],
        correct: "contentos",
        explanation: "'Estar contentos' to być zadowolonym teraz! Męska liczba mnoga dla 'nosotros'. Spotykanie internetowych znajomych w realu jest ekscytujące - prawdziwe połączenie! 🤝"
      },
      {
        id: "feel_5",
        question: "Me _____ mucha pena ver a niños sufriendo hambre en el mundo cuando hay tanta riqueza.",
        translation: "(Bardzo mi przykro widzieć dzieci cierpiące głód na świecie, kiedy jest tyle bogactwa)",
        options: ["da", "pone", "hace", "tiene"],
        correct: "da",
        explanation: "'Dar pena' to wywoływać smutek i współczucie! Coś wywołuje w tobie emocję. Nierówności świata bolą wrażliwe serca - współczucie to pierwszy krok do działania! 💔"
      },
      {
        id: "feel_6",
        question: "Ella se _____ muy frustrada cuando las cosas no salen como había planeado cuidadosamente antes.",
        translation: "(Ona czuje się bardzo sfrustrowana, kiedy rzeczy nie wychodzą jak wcześniej starannie planowała)",
        options: ["siente", "pone", "hace", "está"],
        correct: "siente",
        explanation: "'Sentirse frustrado' to odczuwać frustrację wewnętrznie! Emocja gdy rzeczywistość nie zgadza się z oczekiwaniami. Życie nie zawsze idzie według planu - elastyczność pomaga! 😤"
      },
      {
        id: "feel_7",
        question: "Estoy _____ agotado después de trabajar doce horas seguidas sin ningún descanso ni pausa.",
        translation: "(Jestem kompletnie wyczerpany po pracy dwunastu godzin z rzędu bez żadnego odpoczynku ani przerwy)",
        options: ["completamente", "completo", "total", "muy"],
        correct: "completamente",
        explanation: "'Completamente agotado' to całkowicie wyczerpany! Przysłówek intensyfikuje stan. Długie godziny pracy bez przerw wyczerpują - odpoczynek nie jest luksusem ale koniecznością! 😴"
      },
      {
        id: "feel_8",
        question: "Los estudiantes se sintieron _____ cuando el profesor les dijo que el examen estaba cancelado.",
        translation: "(Studenci poczuli ulgę, kiedy nauczyciel powiedział im, że egzamin został odwołany)",
        options: ["aliviados", "aliviado", "aliviada", "alivio"],
        correct: "aliviados",
        explanation: "'Sentirse aliviado' to poczuć ulgę prawdziwą! Męska liczba mnoga dla studentów. To jak ciężar spadający z serca - wszyscy odetchnęli z radością! 😌"
      },
      {
        id: "feel_9",
        question: "Me _____ fatal cuando tengo que hablar en público delante de mucha gente desconocida.",
        translation: "(Czuję się okropnie, kiedy muszę mówić publicznie przed wieloma nieznanymi ludźmi)",
        options: ["pongo", "siento", "hago", "doy"],
        correct: "pongo",
        explanation: "'Ponerse fatal' to robić się okropnym! Zmiana stanu emocjonalnego przez sytuację. Strach przed publicznością to bardzo częste - większość ludzi to ma! 😰"
      },
      {
        id: "feel_10",
        question: "Mi madre _____ preocupada por la salud de mi padre porque no se cuida bien últimamente.",
        translation: "(Moja mama jest zmartwiona zdrowiem mojego ojca, bo nie dba o siebie dobrze ostatnio)",
        options: ["está", "es", "tiene", "siente"],
        correct: "está",
        explanation: "'Estar preocupado por' to być zmartwiony o kogoś! Stan wywołany konkretną sytuacją obecną. Kiedy ojciec zacznie dbać o siebie zmartw ienie minie! 💭"
      },
      {
        id: "feel_11",
        question: "Los aficionados al fútbol estaban _____ después de que su equipo favorito ganó el campeonato nacional.",
        translation: "(Kibice piłkarscy byli rozradowani po tym jak ich ulubiona drużyna wygrała narodowe mistrzostwa)",
        options: ["eufóricos", "eufórico", "eufórica", "euforia"],
        correct: "eufóricos",
        explanation: "'Estar eufórico' to być w euforii! Męska liczba mnoga dla kibiców. Wygrana drużyny to kolektywna ekstaza - emocje piłkarskie są niesamowite! ⚽"
      },
      {
        id: "feel_12",
        question: "Me _____ mucha rabia la injusticia social que veo todos los días en las noticias del mundo.",
        translation: "(Bardzo mnie złości niesprawiedliwość społeczna, którą widzę codziennie w wiadomościach ze świata)",
        options: ["da", "pone", "hace", "causa"],
        correct: "da",
        explanation: "'Dar rabia' to wywoływać gniew i złość! Silniejsza emocja niż tylko 'enfado'. Świadomość niesprawiedliwości to pierwszy krok ku zmianie pozytywnej! 😡"
      },
      {
        id: "feel_13",
        question: "Después de tanto esfuerzo en el proyecto, me _____ muy satisfecho con los resultados finales excelentes.",
        translation: "(Po tak dużym wysiłku w projekcie czuję się bardzo usatysfakcjonowany doskonałymi końcowymi rezultatami)",
        options: ["siento", "estoy", "soy", "tengo"],
        correct: "siento",
        explanation: "'Sentirse satisfecho' to czuć satysfakcję głęboko! Uczucie spełnienia po ciężkiej pracy. Sukces po wysiłku smakuje najsłodziej - to zasłużone! 🏆"
      },
      {
        id: "feel_14",
        question: "Ella se _____ muy avergonzada cuando se tropezó y cayó delante de toda la clase llena.",
        translation: "(Ona bardzo się zawstydziła, kiedy potknęła się i upadła przed całą pełną klasą)",
        options: ["sintió", "puso", "hizo", "dio"],
        correct: "sintió",
        explanation: "'Sentirse avergonzado' to odczuwać wstyd wewnętrzny! Pretérito dla momentu wpadki. Wszyscy mamy niezręczne momenty - to część bycia człowiekiem i normalności! 😳"
      },
      {
        id: "feel_15",
        question: "Los niños pequeños se _____ asustados cuando escuchan truenos fuertes durante las tormentas nocturnas.",
        translation: "(Małe dzieci boją się, kiedy słyszą silne grzmoty podczas nocnych burz)",
        options: ["ponen", "sienten", "hacen", "dan"],
        correct: "ponen",
        explanation: "'Ponerse asustado' to przestraszyć się szybko! Zmiana stanu z spokoju na strach. Burze przerażają dzieci - to instynktowne. Przytulenie rodzica uspokaja wszystko! 👶"
      }
    ]
  },

  making_plans: {
    name: "Planowanie i ustalanie",
    description: "Umawiaj się i planuj po hiszpańsku",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "plan_1",
        question: "¿_____ libre este sábado por la tarde para tomar un café y charlar tranquilamente?",
        translation: "(Czy jesteś wolny tę sobotę po południu, żeby napić się kawy i spokojnie porozmawiać?)",
        options: ["Estás", "Eres", "Tienes", "Haces"],
        correct: "Estás",
        explanation: "'Estar libre' to być wolnym (dostępnym)! Stan tymczasowy nie cecha. Sobota to idealny dzień na kawę z przyjaciółmi - relaks i rozmowy! ☕"
      },
      {
        id: "plan_2",
        question: "_____ vernos el viernes a las siete de la tarde en el café del centro como siempre.",
        translation: "(Spotkajmy się w piątek o siódmej wieczorem w kawiarni w centrum jak zwykle)",
        options: ["Quedamos en", "Nos quedamos en", "Vamos a", "Estamos"],
        correct: "Quedamos en",
        explanation: "'Quedar en' to umówić się na coś! Bardzo kolokwialne i naturalne. Stałe miejsce spotkań to piękna tradycja przyjaźni - wasz specjalny punkt! 📍"
      },
      {
        id: "plan_3",
        question: "¿Qué te _____ si vamos al cine mañana por la noche a ver esa comedia romántica nueva?",
        translation: "(Co powiesz na to, jeśli pójdziemy do kina jutro wieczorem zobaczyć tę nową romantyczną komedię?)",
        options: ["parece", "aparece", "piensa", "dice"],
        correct: "parece",
        explanation: "'¿Qué te parece si...?' to co powiesz na propozycję? Grzeczny sposób zapraszania. Komedie romantyczne są lekkie - idealne na relaks wieczorny! 🎬"
      },
      {
        id: "plan_4",
        question: "Tengo que _____ la reunión de trabajo para la próxima semana porque estoy enfermo ahora.",
        translation: "(Muszę przełożyć spotkanie biznesowe na przyszły tydzień, bo jestem teraz chory)",
        options: ["posponer", "postponer", "retrasar", "cancelar"],
        correct: "posponer",
        explanation: "'Posponer' to przełożyć na później! Nie anulować tylko zmienić termin. Choroba wymaga odpoczynku - zdrowie zawsze priorytet nad pracą zawsze! 🤧"
      },
      {
        id: "plan_5",
        question: "_____ a visitarte mañana sobre las tres de la tarde si te viene bien ese horario.",
        translation: "(Przejdę cię odwiedzić jutro około trzeciej po południu, jeśli pasuje ci ta godzina)",
        options: ["Paso", "Voy", "Vengo", "Llego"],
        correct: "Paso",
        explanation: "'Pasar a + infinitivo' to wpaść żeby coś zrobić! Nieformalna wizyta przyjacielska. 'Si te viene bien' pyta o wygodę - szacunek dla czasu innych! 🚶"
      },
      {
        id: "plan_6",
        question: "¿Te _____ bien quedar a las ocho en punto o prefieres una hora más temprana?",
        translation: "(Czy pasuje ci spotkać się o ósmej dokładnie czy wolisz wcześniejszą godzinę?)",
        options: ["viene", "va", "queda", "está"],
        correct: "viene",
        explanation: "'¿Te viene bien?' to czy ci pasuje? Bardzo użyteczne pytanie! Pokazuje elastyczność i troskę o wygodę drugiej osoby. Planowanie razem buduje relacje! ⏰"
      },
      {
        id: "plan_7",
        question: "Habíamos _____ en vernos el martes pero creo que mejor cambiamos al miércoles si puedes.",
        translation: "(Umówiliśmy się spotkać we wtorek, ale myślę że lepiej zmieńmy na środę, jeśli możesz)",
        options: ["quedado", "quedados", "quedando", "quedar"],
        correct: "quedado",
        explanation: "'Habíamos quedado' to byliśmy umówieni wcześniej! Czas zaprzeszły dla wcześniejszej umowy. Elastyczność w planach to znak dojrzałości - życie jest nieprzewidywalne! 📅"
      },
      {
        id: "plan_8",
        question: "¿_____ un plan alternativo interesante para el fin de semana si llueve mucho como predicen?",
        translation: "(Czy masz alternatywny ciekawy plan na weekend, jeśli będzie dużo padać jak przewidują?)",
        options: ["Tienes", "Estás", "Eres", "Haces"],
        correct: "Tienes",
        explanation: "'Tener un plan' to mieć plan gotowy! Plan B jest mądry zawsze. Hiszpanie planują wokół pogody - deszcz nie zatrzymuje dobrej zabawy! 🌂"
      },
      {
        id: "plan_9",
        question: "Voy a _____ la reserva del restaurante para ocho personas en lugar de seis como antes.",
        translation: "(Zamierzam zmienić rezerwację restauracji na osiem osób zamiast sześciu jak wcześniej)",
        options: ["cambiar", "modificar", "alterar", "variar"],
        correct: "cambiar",
        explanation: "'Cambiar la reserva' to zmienić rezerwację najprościej! Więcej gości wymaga większego stolika. Restauracje w Hiszpanii są elastyczne - zawsze pytaj! 🍽️"
      },
      {
        id: "plan_10",
        question: "¿A qué hora _____ que estar en el aeropuerto para facturar nuestro vuelo internacional mañana?",
        translation: "(O której musimy być na lotnisku, żeby odprawić nasz międzynarodowy lot jutro?)",
        options: ["tenemos", "debemos", "hay", "necesitamos"],
        correct: "tenemos",
        explanation: "'Tener que estar' to musieć być (konieczność)! Loty wymagają punktualności absolutnej. Zawsze przyjedź dwie godziny wcześniej - lepiej czekać niż przegapić! ✈️"
      },
      {
        id: "plan_11",
        question: "Si no te _____ mal, preferiría quedar un poco más tarde porque salgo tarde del trabajo.",
        translation: "(Jeśli nie masz nic przeciwko, wolałbym spotkać się trochę później, bo wychodzę późno z pracy)",
        options: ["importa", "molesta", "preocupa", "afecta"],
        correct: "importa",
        explanation: "'Si no te importa' to jeśli nie masz nic przeciwko! Grzeczny sposób proszenia o elastyczność. Praca czasem się przedłuża - zrozumienie jest kluczem! 💼"
      },
      {
        id: "plan_12",
        question: "Mejor _____ para otro día la excursión porque el pronóstico anuncia tormenta fuerte todo el fin de semana.",
        translation: "(Lepiej przełóżmy na inny dzień wycieczkę, bo prognoza zapowiada silną burzę cały weekend)",
        options: ["dejamos", "dejémosla", "la dejamos", "dejarla"],
        correct: "dejamos",
        explanation: "'Dejar para otro día' to przełożyć na inny czas! Bezpieczeństwo przed przyjemnością. Natura jest nieprzewidywalna - mądrość to wiedzieć kiedy zostać w domu! 🌩️"
      },
      {
        id: "plan_13",
        question: "Te _____ al salir del trabajo para confirmar la hora exacta de nuestra cita de mañana.",
        translation: "(Zadzwonię do ciebie wychodząc z pracy, żeby potwierdzić dokładną godzinę naszego jutrzejszego spotkania)",
        options: ["llamo", "llamaré", "llamaba", "he llamado"],
        correct: "llamo",
        explanation: "Teraźniejszy dla bliskiej przyszłości pewnej! 'Te llamo' brzmi bardziej naturalnie niż futuro. To pokazuje pewność zamiaru - definitywny plan nie może propozycja! 📱"
      },
      {
        id: "plan_14",
        question: "¿_____ invitar a Juan también a la fiesta o prefieres que sea solo nosotros dos?",
        translation: "(Czy zapraszamy też Juana na imprezę czy wolisz, żeby było tylko nas dwoje?)",
        options: ["Invitamos", "Invitemos", "Vamos a invitar", "Invitaríamos"],
        correct: "Invitamos",
        explanation: "'¿Invitamos?' to zapytanie o wspólną decyzję! Teraźniejszy jako pytanie o plan. Inkluzywność w planowaniu pokazuje szacunek - decydujemy razem! 🎉"
      },
      {
        id: "plan_15",
        question: "Si cambias de _____ y no puedes venir, avísame lo antes posible por favor para reorganizar.",
        translation: "(Jeśli zmienisz plany i nie możesz przyjść, zawiadom mnie jak najszybciej proszę, żeby przeorganizować)",
        options: ["planes", "plan", "idea", "opinión"],
        correct: "planes",
        explanation: "'Cambiar de planes' to zmienić plany działania! Liczba mnoga bo zwykle mamy wiele planów. Życie jest nieprzewidywalne - komunikacja zapobiega rozczarowaniu! 📞"
      }
    ]
  }
};

export default part13Categories;
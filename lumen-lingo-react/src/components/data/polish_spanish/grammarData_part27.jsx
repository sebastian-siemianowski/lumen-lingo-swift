
/**
 * Edit file
 * POLISH → SPANISH GRAMMAR - PART 27
 * 3 categories, 15 questions each - Final expert topics
 */

import { Target, Lock } from "lucide-react";

export const part27Categories = {
  implied_subjects: {
    name: "Podmioty domyślne",
    description: "Kiedy możesz pominąć podmiot",
    icon: Target,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "impl_1",
        question: "_____ a la tienda para comprar leche, ¿necesitas algo más mientras estoy allí?",
        translation: "(Idę do sklepu kupić mleko, czy potrzebujesz czegoś jeszcze, podczas gdy tam będę?)",
        options: ["Voy", "Yo voy", "Iré", "Estoy yendo"],
        correct: "Voy",
        explanation: "Pomijamy podmiot 'yo' bo końcówka '-o' wyraźnie pokazuje pierwszą osobę. To standardowe - hiszpański pozwala pomijać podmiot gdy końcówka jest unikalna. Dodanie 'yo' byłoby dla emfazy (JA idę, nie ty) - bez emfazy lepiej pominąć."
      },
      {
        id: "impl_2",
        question: "¿_____ al cine esta noche o prefieres quedarte en casa viendo algo en Netflix?",
        translation: "(Idziesz do kina dziś wieczorem czy wolisz zostać w domu oglądając coś w Netflix?)",
        options: ["Vas", "Tú vas", "Irás", "Estás yendo"],
        correct: "Vas",
        explanation: "Pytania często pomijają podmiot. '-as' wyraźnie wskazuje 'tú'. Dodanie 'tú' nie jest konieczne chyba że chcesz emfazy lub kontrastu (czy TY idziesz vs ktoś inny). W neutralnych pytaniach sam czasownik wystarcza."
      },
      {
        id: "impl_3",
        question: "María y _____ vamos a casarnos el próximo verano en una ceremonia íntima pequeña.",
        translation: "(Maria i ja weźmiemy ślub przyszłego lata w małej intymnej ceremonii)",
        options: ["yo", "mí", "me", "conmigo"],
        correct: "yo",
        explanation: "W złożonych podmiotach MUSISZ użyć zaimka. 'María y yo' nie może być skrócone. Potrzebujesz wyraźnego podmiotu dla jasności kto jest drugą osobą. Zawsze używamy formy podmiotowej 'yo' w kompozycji z innym podmiotem."
      },
      {
        id: "impl_4",
        question: "Si _____ tiempo libre mañana, te ayudaré con la mudanza sin problema alguno.",
        translation: "(Jeśli będę miał wolny czas jutro, pomogę ci z przeprowadzką bez żadnego problemu)",
        options: ["tengo", "yo tengo", "tendré", "tuviera"],
        correct: "tengo",
        explanation: "W zdaniach warunkowych pierwszy typ używa presente bez podmiotu. 'Tengo' wystarczy - nie potrzebujesz 'yo'. Warunki realne są bezpośrednie i proste - niepotrzebna emfaza podmiotu. Samo końcówka '-o' komunikuje kto."
      },
      {
        id: "impl_5",
        question: "Cuando éramos pequeños, _____ jugábamos en el parque todos los días sin falta después del colegio.",
        translation: "(Kiedy byliśmy mali, bawiliśmy się w parku każdego dnia bez wyjątku po szkole)",
        options: ["nosotros", "jugábamos", "nosotros jugábamos", "nos"],
        correct: "jugábamos",
        explanation: "Imperfecto często pomija podmiot bo końcówki są jasne. '-ábamos' to wyraźnie 'nosotros'. W narracjach o przeszłości standardem jest pomijanie podmiotów chyba że zmienia się osoba lub potrzebujesz kontrastu. Czystsza narracja bez redundancji."
      },
      {
        id: "impl_6",
        question: "Mi padre trabaja mucho pero _____ madre trabaja aún más horas que él en la oficina.",
        translation: "(Mój ojciec dużo pracuje, ale moja mama pracuje jeszcze więcej godzin niż on w biurze)",
        options: ["mi", "la", "su", "de"],
        correct: "mi",
        explanation: "Po spójnikach kontrastowych (pero, aunque) często dodajemy podmiot dla jasności zmiany. 'Mi madre' wyraźnie wprowadza nowy podmiot vs ojciec. Powtórzenie dzierżawczego 'mi' pomaga czytelniku śledzić kto teraz jest podmiotem - jasność w kontraście."
      },
      {
        id: "impl_7",
        question: "_____ me llamas cuando llegues a casa para saber que estás bien y seguro?",
        translation: "(Czy zadzwonisz do mnie, kiedy dotrzesz do domu, żeby wiedzieć że jesteś dobrze i bezpiecznie?)",
        options: ["¿", "¿Tú", "¿Me", "¿Te"],
        correct: "¿",
        explanation: "W pytaniach zwykle pomijamy podmiot. Inwersja czasownika (llamas) już tworzy pytanie. Dodanie 'tú' byłoby tylko dla emfazy (czy TY zadzwonisz vs ktoś inny). Czyste pytania bez emfazy są prostsze - samo '¿Me llamas?' wystarczy."
      },
      {
        id: "impl_8",
        question: "Ellos fueron a la playa pero _____ preferimos quedarnos en la montaña tranquila.",
        translation: "(Oni poszli na plażę, ale my wolałyśmy zostać w spokojnych górach)",
        options: ["nosotros", "nos", "nuestros", "nosotras"],
        correct: "nosotros",
        explanation: "Po 'pero' dodajemy podmiot dla kontrastu. ONI vs MY - dwie różne grupy z różnymi wyborami. 'Nosotros' wyraźnie oddziela waszą grupę od ich. W kontrastach podmioty pomagają rozróżnić strony - bez nich mogłoby być niejasne kto co wybrał."
      },
      {
        id: "impl_9",
        question: "Llegué tarde a la reunión. _____ disculpé inmediatamente con todos los presentes allí.",
        translation: "(Spóźniłem się na spotkanie. Przeprosiłem natychmiast wszystkich tam obecnych)",
        options: ["Me", "Yo me", "Mí", "Mi"],
        correct: "Me",
        explanation: "Nowe zdanie może pominąć podmiot jeśli jest ten sam. 'Me disculpé' wystarczy - nie potrzebujesz 'yo' ponownie. Zwrotne czasowniki zachowują 'me/te/se' (niezbędne dla znaczenia) ale podmiot jest opcjonalny gdy kontekst jest jasny - kontynuacja od poprzedniego zdania."
      },
      {
        id: "impl_10",
        question: "¿Cómo te _____ llamas? _____ llamo Miguel y soy de Barcelona, encantado de conocerte.",
        translation: "(Jak się nazywasz? Nazywam się Miguel i jestem z Barcelony, miło cię poznać)",
        options: ["llamas / Me", "llamas / Yo me", "te llamas / Me", "llamas / Yo"],
        correct: "llamas / Me",
        explanation: "Pytanie pomija podmiot ('¿te llamas?'). Odpowiedź też ('Me llamo'). Oba są zwrotne więc 'me/te' konieczne, ale 'yo/tú' opcjonalne. Przedstawienia są standardowe i proste - niepotrzebna formalna pełnia, sam czasownik komunikuje kto."
      },
      {
        id: "impl_11",
        question: "Tú estudias medicina pero _____ hermano estudia ingeniería en la universidad técnica politécnica.",
        translation: "(Ty studiujesz medycynę, ale twój brat studiuje inżynierię na politechnicznym uniwersytecie technicznym)",
        options: ["tu", "el", "su", "de"],
        correct: "tu",
        explanation: "Po 'pero' kontrastowym dodajemy dzierżawczy dla jasności podmiotu. TY studiujesz X, ale TWÓJ BRAT Y. 'Tu hermano' wprowadza nowy podmiot związany z tobą ale inny. Dzierżawcze pomaga śledzić relacje rodzinne w kontraście."
      },
      {
        id: "impl_12",
        question: "_____ estudiamos español, ellos estudian francés en la escuela de idiomas del centro.",
        translation: "(My studiujemy hiszpański, oni studiują francuski w szkole językowej w centrum)",
        options: ["Nosotros", "Nos", "Nuestros", ""],
        correct: "Nosotros",
        explanation: "Kontrast między grupami wymaga podmiotów. NOSOTROS vs ELLOS - dwa różne wybory. Bez podmiotów byłoby niejasne kto co studiuje. W kontrastach paralnych podmiot w pierwszej części wymaga podmiotu w drugiej dla symetrii i jasności."
      },
      {
        id: "impl_13",
        question: "Pensaba que _____ ibas a venir, por eso preparé comida para dos personas no una.",
        translation: "(Myślałem, że przyjdziesz, dlatego przygotowałem jedzenie dla dwóch osób nie jednej)",
        options: ["tú", "", "tu", "ti"],
        correct: "tú",
        explanation: "Po 'que' w mowie zależnej możemy dodać podmiot dla emfazy. 'Pensaba que tú ibas' podkreśla że TYSIAŁA przyjść. Bez 'tú' byłoby neutralne, z 'tú' pokazujesz rozczarowanie - oczekiwałeś KONKRETNIE ciebie, nie kogoś innego."
      },
      {
        id: "impl_14",
        question: "Si ellos van a la fiesta, _____ no vamos, no nos llevamos bien con ese grupo.",
        translation: "(Jeśli oni idą na imprezę, my nie idziemy, nie dogadujemy się z tą grupą)",
        options: ["nosotros", "nos", "nuestros", ""],
        correct: "nosotros",
        explanation: "Absolutny kontrast wymaga obu podmiotów. ELLOS van vs NOSOTROS no vamos. To wzajemne wykluczenie - ich obecność determinuje waszą nieobecność. Podmioty są kluczowe dla pokazania opozycji między dwiema grupami - bez nich logika konfliktu byłaby niejasna."
      },
      {
        id: "impl_15",
        question: "Hablé con María ayer. _____ dijo que no puede venir a la boda por problemas laborales.",
        translation: "(Rozmawiałem z Marią wczoraj. Powiedziała, że nie może przyjść na ślub przez problemy zawodowe)",
        options: ["Me", "Ella me", "A mí", "Yo"],
        correct: "Me",
        explanation: "Kontynuacja o tej samej osobie pomija podmiot. 'Me dijo' wystarczy - wiemy że to wciąż María. Czasownik + zaimek dopełnienia komunikuje akcję bez redundantnego podmiotu. Tylko gdy zmieniasz osobę potrzebujesz nowego podmiotu - tutaj kontynu ujesz o Maríi."
      }
    ]
  },

  register_and_style: {
    name: "Rejestr i styl wypowiedzi",
    description: "Dostosuj język do sytuacji komunikacyjnej",
    icon: Lock, // Changed from Award to Lock based on removal of Award import
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "reg_1",
        question: "¿Qué tal, tío? ¿Cómo te _____ las vacaciones en la playa? Cuéntame todos los detalles jugosos.",
        translation: "(Co tam, stary? Jak ci poszły wakacje na plaży? Opowiedz mi wszystkie soczyste szczegóły)",
        options: ["fueron", "han ido", "iban", "fueran"],
        correct: "fueron",
        explanation: "'¿Cómo te fueron?' to kolokwialne pytanie o przeszłe doświadczenie. 'Tío' (stary) pokazuje nieformalność między przyjaciółmi. Język młodzieżowy używa prostych czasów (pretérito), slangu i bezpośrednich pytań - to pokazuje bliskość i swobodę relacji."
      },
      {
        id: "reg_2",
        question: "Estimados señores, les _____ que la reunión ha sido pospuesta hasta nuevo aviso oficial.",
        translation: "(Szanowni Państwo, informujemy że spotkanie zostało przełożone do odwołania oficjalnego)",
        options: ["comunicamos", "decimos", "avisamos", "contamos"],
        correct: "comunicamos",
        explanation: "'Comunicar' to formalny czasownik dla oficjalnych ogłoszeń. Bardziej profesjonalny niż 'decir'. Język korporacyjny wybiera najbardziej neutralne i formalne czasowniki - 'comunicar' brzmi oficjalnie i bezosobowo, podczas gdy 'decir' byłoby zbyt casualne."
      },
      {
        id: "reg_3",
        question: "Chaval, _____ un momentito que ahora mismo estoy liado con otra cosa urgente.",
        translation: "(Młody, zaczekaj chwilkę, że teraz jestem zajęty inną pilną sprawą)",
        options: ["espera", "espere", "esperad", "esperás"],
        correct: "espera",
        explanation: "'Chaval' + 'espera' (tú) to bardzo kolokwialne. Slang 'chaval' + imperatyw 'tú' + zdrobnienie 'momentito' + slang 'estar liado' = maksymalna casualność. Język uliczny młodych Hiszpanów używa skrótów, slangu i bezpośredniości - to kod kulturowy grupy wiekowej."
      },
      {
        id: "reg_4",
        question: "Me _____ sugerir que reconsidere su decisión a la luz de los nuevos datos presentados.",
        translation: "(Pozwolę sobie zasugerować, żeby Pan ponownie rozważył swoją decyzję w świetle nowych przedstawionych danych)",
        options: ["permito", "dejo", "atrevo", "aventuro"],
        correct: "permito",
        explanation: "'Me permito sugerir' to ultra grzeczna forma dla delikatnej rady. Dosłownie 'pozwalam sobie'. Język dyplomatyczny używa takich formuł dla minimalizacji narzucania się - to nie nakaz ani nawet bezpośrednia rada, tylko delikatna sugestia pokazująca respekt dla autonomii rozmówcy."
      },
      {
        id: "reg_5",
        question: "Tronco, _____ fatal lo de tu examen, pero ya sabes, a la próxima seguro que te sale mejor.",
        translation: "(Kolego, fatalnie z twoim egzaminem, ale wiesz, następnym razem na pewno pójdzie ci lepiej)",
        options: ["me sabe", "lo siento", "siento", "me duele"],
        correct: "me sabe",
        explanation: "'Me sabe fatal' to slang dla współczucia (dosłownie: smakuje mi źle). Bardzo kolokwialne. 'Tronco' (pień) to slang dla kolegi w Hiszpanii. Młodzieżowy język używa idiomów lokalnych - to kod grupy, pokazuje przynależność do tej samej społeczności kulturowej."
      },
      {
        id: "reg_6",
        question: "Le agradezco de antemano su amable colaboración en este importante proyecto conjunto internacional.",
        translation: "(Dziękuję z góry za Pana życzliwą współpracę w tym ważnym wspólnym międzynarodowym projekcie)",
        options: ["de antemano", "antes", "previamente", "por adelantado"],
        correct: "de antemano",
        explanation: "'De antemano' to z góry (formalna korespondencja). 'Le agradezco' (usted) + 'de antemano' to standard biznesowy. Dziękujesz przed otrzymaniem pomocy - pokazuje oczekiwanie pozytywnej odpowiedzi. To grzeczna presja w języku korporacyjnym."
      },
      {
        id: "reg_7",
        question: "Nena, ¿_____ apetece que vayamos a tomar algo al bar de la esquina esta tarde?",
        translation: "(Kochanie, czy masz ochotę żebyśmy poszli napić się czegoś do baru na rogu dziś po południu?)",
        options: ["te", "le", "os", "les"],
        correct: "te",
        explanation: "'Nena' (skarbie) to czułe określenie między parami. 'Te apetece' (tú) dla partnera romantycznego. Język między parami jest intymny i casualny - używa zdrobnień, 'tú', nieformalnych zwrotów. To pokazuje bliskość emocjonalną poprzez nieformalność kodu językowego."
      },
      {
        id: "reg_8",
        question: "Ruego a usted _____ disculpe las molestias ocasionadas por el retraso inevitable del servicio.",
        translation: "(Proszę Pana o wybaczenie niedogodności spowodowanych nieuniknionym opóźnieniem usługi)",
        options: ["que", "de", "para", "por"],
        correct: "que",
        explanation: "'Rogar que' + subjuntivo to błagać żeby (bardzo formalne przeprosiny). Język obsługi klienta w sytuacjach problemowych używa najwyższej grzeczności. 'Ruego' (nie 'pido') + 'usted' + 'disculpe' (subjuntivo) = maksymalny szacunek w przeprosinach oficjalnych."
      },
      {
        id: "reg_9",
        question: "Colega, _____ un favorcito, ¿me prestas veinte pavos hasta el viernes que cobro?",
        translation: "(Kolego, zrób mi małą przysługę, czy pożyczysz mi dwadzieścia dych do piątku kiedy dostaję wypłatę?)",
        options: ["hazme", "hágame", "haced", "haz"],
        correct: "hazme",
        explanation: "'Hazme' (tú imperativ) + zdrobnienie 'favorcito' + slang 'pavos' (euro) = maksymalna casualność. Język młodzieżowy entre znajomymi używa skrótów ('pavos' = pesos/euros), zaimków zlepionych (hazme = haz + me) i zdrobnień dla minimalizacji próśb."
      },
      {
        id: "reg_10",
        question: "En virtud de lo expuesto anteriormente, _____ a considerar la propuesta favorablemente.",
        translation: "(Na mocy tego, co przedstawiono wcześniej, przychylamy się do rozważenia propozycji przychylnie)",
        options: ["procedemos", "vamos", "seguimos", "pasamos"],
        correct: "procedemos",
        explanation: "'Proceder a' to przystąpić do (język prawny/administracyjny). Najbardziej formalne. 'En virtud de' to na mocy (prawnicze). Język urzędowy używa archaicznych formalnych czasowników - 'proceder' brzmi oficjalnie i bezosobowo, jak w dokumentach legalnych czy administracyjnych."
      },
      {
        id: "reg_11",
        question: "Buenas, ¿me _____ un cortado y una tostada con tomate para llevar, por favor?",
        translation: "(Cześć, czy poproszę kawę z odrobiną mleka i grzankę z pomidorem na wynos, proszę?)",
        options: ["pones", "pone", "ponéis", "pondría"],
        correct: "pones",
        explanation: "'¿Me pones?' to bardzo kolokwialne zamawianie w barze (tú). Barman i klient w Hiszpanii często używają 'tú' - atmosfera casualna. 'Poner' (dosłownie: położyć) to slang dla podawania w barach. Kulturowy kod - nie 'dame' (daj) ale 'pones' (położysz) - łagodniejsze."
      },
      {
        id: "reg_12",
        question: "Nos complace _____ que su solicitud ha sido aprobada por el comité evaluador competente.",
        translation: "(Miło nam poinformować, że Pana wniosek został zatwierdzony przez kompetentny komitet oceniający)",
        options: ["informarle", "decirle", "avisarle", "contarle"],
        correct: "informarle",
        explanation: "'Complacer informarle' to formalna dobre wiadomości. 'Informar' bardziej oficjalne niż 'decir'. Listy akceptacyjne używają pozytywnego języka - 'nos complace' (cieszy nas) + 'informarle' (usted) tworzy ciepły ale profesjonalny ton dla dobrych nowin."
      },
      {
        id: "reg_13",
        question: "Oye colega, ¿te _____ pasando por mi casa a recogerme camino al concierto nocturno?",
        translation: "(Słuchaj kolego, czy wpadniesz po mnie po drodze na nocny koncert?)",
        options: ["importa", "molestaría", "importaría", "viene bien"],
        correct: "importa",
        explanation: "'¿Te importa?' (tú) to casualne pytanie o możliwość. Między przyjaciółmi proste presente wystarczy - nie potrzebujesz conditional (importaría). 'Oye colega' to młodzieżowe otwarcie - język rówieśników jest maksymalnie bezpośredni i prosty bez zbędnej kurtuazji."
      },
      {
        id: "reg_14",
        question: "Se ruega a los señores pasajeros que _____ los cinturones de seguridad abrochados durante el vuelo.",
        translation: "(Prosi się szanownych pasażerów, żeby mieli zapięte pasy bezpieczeństwa podczas lotu)",
        options: ["mantengan", "mantengáis", "mantened", "mantienen"],
        correct: "mantengan",
        explanation: "'Se ruega que' + subjuntivo (ustedes) to bezosobowa formalna prośba. Język lotniczy używa maksymalnej grzeczności dla instrukcji bezpieczeństwa. 'Mantengan' (ustedes subjuntivo) es la forma más educada de una orden - es una petición que suena como una sugerencia."
      },
      {
        id: "reg_15",
        question: "Mira tía, yo _____ flipo con lo que me estás contando, no me lo puedo creer en absoluto.",
        translation: "(Słuchaj koleżanko, ja nie mogę uwierzyć w to, co mi opowiadasz, totalnie nie mogę w to uwierzyć)",
        options: ["alucino", "me sorprendo", "estoy sorprendido", "me extraña"],
        correct: "alucino",
        explanation: "'Alucinar' to slang dla być w szoku (dosłownie: halucynować). 'Flipar' też slang. 'Tía' to slang dla dziewczyny/kobiety. Młodzieżowy język hiszpański jest pełen intensywnych czasowników slangowych - 'alucino' pokazuje ekstremalne zaskoczenie w kodzie pokoleniowym."
      }
    ]
  },

  fixed_expressions: {
    name: "Ustalone wyrażenia",
    description: "Idiomy i frazy które nie zmieniają się",
    icon: Lock,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    questions: [
      {
        id: "fixed_1",
        question: "_____ vez en cuando me gusta desconectar de todo y pasar tiempo solo en la naturaleza.",
        translation: "(Od czasu do czasu lubię odłączyć się od wszystkiego i spędzać czas sam w naturze)",
        options: ["De", "Por", "A", "En"],
        correct: "De",
        explanation: "'De vez en cuando' to od czasu do czasu (ustalona fraza). Zawsze 'de', nigdy inny przyimek. To jeden z wielu stałych zwrotów - nie możesz zmieniać przyimka. Uczysz się całej frazy jako jedności, nie analizujesz gramatycznie."
      },
      {
        id: "fixed_2",
        question: "_____ fin de cuentas, lo importante es que todos estemos bien y sanos sin problemas graves.",
        translation: "(W końcu, ważne jest że wszyscy jesteśmy dobrze i zdrowi bez poważnych problemów)",
        options: ["A", "Al", "En", "Por"],
        correct: "Al",
        explanation: "'Al fin de cuentas' to w ostatecznym rozrachunku (idiom). Zawsze 'al' (a + el), nigdy oddzielnie. To oznacza 'gdy wszystko rozważysz' - filozoficzne podsumowanie. Ustalona fraza dla wyprowadzania wniosków finalnych z rozważan."
      },
      {
        id: "fixed_3",
        question: "_____ cuanto a mí, no tengo ninguna objeción a la propuesta presentada esta mañana.",
        translation: "(Jeśli o mnie chodzi, nie mam żadnych zastrzeżeń do propozycji przedstawionej dziś rano)",
        options: ["En", "Por", "De", "A"],
        correct: "En",
        explanation: "'En cuanto a' to jeśli chodzi o (wprowadzenie perspektywy). Zawsze 'en cuanto a', stała fraza. Używamy dla oddzielenia swojej opinii od ogółu - ja mówię za siebie. Marker personalnej perspektywy w dyskusji grupowej."
      },
      {
        id: "fixed_4",
        question: "_____ cabo de unos minutos empezará la ceremonia oficial, por favor tomen asiento todos.",
        translation: "(Za kilka minut rozpocznie się oficjalna ceremonia, proszę wszyscy usiąść)",
        options: ["Al", "A", "En", "De"],
        correct: "Al",
        explanation: "'Al cabo de' to po upływie (czasu). Zawsze 'al cabo de', idiomatyczne. Pokazuje że coś nastąpi PO okresie - 'al cabo de unos minutos' = za parę minut (dosłownie: na końcu kilku minut). Formalne wyrażenie czasowe."
      },
      {
        id: "fixed_5",
        question: "Mi hermano perdió los estribos y _____ gritando a todo el mundo sin ningún motivo aparente.",
        translation: "(Mój brat stracił panowanie i zaczął krzyczeć na wszystkich bez żadnego widocznego powodu)",
        options: ["se puso a", "empezó", "comenzó a", "se hizo"],
        correct: "se puso a",
        explanation: "'Ponerse a + infinitivo' to nagle zacząć robić coś (spontanicznie). Bardziej emocjonalne niż 'empezar a'. 'Perder los estribos' (stracić panowanie) to też idiom. Kombinacja dwóch idiomów pokazuje emocjonalny wybuch - utrata kontroli i spontaniczna reakcja."
      },
      {
        id: "fixed_6",
        question: "_____ que, después de mucho pensar, he decidido aceptar la oferta de trabajo en el extranjero.",
        translation: "(Wyszło na to że po długim myśleniu zdecydowałem przyjąć ofertę pracy za granicą)",
        options: ["Resulta", "Sale", "Ocurre", "Pasa"],
        correct: "Resulta",
        explanation: "'Resulta que' to wychodzi że (wprowadzenie konkluzji). Ustalona fraza dla ogłaszania decyzji. 'Resulta' + 'que' pokazuje wynik procesu myślenia - to czym zakończyły się twoje deliberacje. Bezosobowa forma dla ogłoszenia wniosku."
      },
      {
        id: "fixed_7",
        question: "_____ luego que sí iré a tu boda, no me la perdería por nada del mundo entero.",
        translation: "(Oczywiście że pójdę na twój ślub, nie przegapiłbym go za nic na całym świecie)",
        options: ["Desde", "Por", "De", "Claro que"],
        correct: "Desde",
        explanation: "'Desde luego' to oczywiście (silne potwierdzenie). Zawsze razem, stała fraza. To kategoryczna afirmacja - nie ma wątpliwości. Silniejsze niż samo 'claro' - 'desde luego' wyraża absolutną pewność i zaangażowanie w obietnicę."
      },
      {
        id: "fixed_8",
        question: "_____ poco a poco se va lejos, no te desanimes si el progreso parece lento al principio.",
        translation: "(Powoli dobrze, nie zniechęcaj się jeśli postęp wydaje się wolny na początku)",
        options: ["Poco", "Por poco", "De poco", "A poco"],
        correct: "Poco",
        explanation: "'Poco a poco se va lejos' to przysłowie (krok po kroku docierasz daleko). Ustalona forma, nie możesz zmieniać struktury. To mądrość ludowa w formie rymowanej - pokazuje wartość cierpliwości i konsystencji. Przysłowia uczą się na pamięć jako całość."
      },
      {
        id: "fixed_9",
        question: "_____ menos mal que llegaste a tiempo, estábamos muy preocupados por ti y tu seguridad.",
        translation: "(Na szczęście że dotarłeś na czas, byliśmy bardzo zmartwieni o ciebie i twoje bezpieczeństwo)",
        options: ["Menos", "Por menos", "De menos", "A menos"],
        correct: "Menos",
        explanation: "'Menos mal que' to na szczęście (ulga). Zawsze sam 'menos mal', idiomatyczne. Dosłownie 'mniej źle' ale znaczy szczęście. Wyraża ulgę że coś złego nie nastąpiło - mogło być gorzej ale nie jest. Pozytywna perspektywa na uniknięty problem."
      },
      {
        id: "fixed_10",
        question: "_____ prisa, que vamos a llegar tarde al aeropuerto para coger nuestro vuelo internacional.",
        translation: "(Pośpiesz się, że spóźnimy się na lotnisko żeby złapać nasz międzynarodowy lot)",
        options: ["Date", "Da", "Ten", "Haz"],
        correct: "Date",
        explanation: "'Darse prisa' to pośpieszyć się (idiomatyczny zwrotny). Zawsze 'darse prisa', nie 'tener prisa' (mieć pośpiech). Imperativ 'date' (tú) dla nieformalnej pilności. To ustalona fraza dla pośpiechu - nie można używać innych czasowników w tym idiomie."
      },
      {
        id: "fixed_11",
        question: "_____ pesar de la lluvia intensa, el partido de fútbol continuó sin interrupción hasta el final.",
        translation: "(Pomimo intensywnego deszczu mecz piłkarski kontynuował bez przerwy do końca)",
        options: ["A", "Por", "De", "En"],
        correct: "A",
        explanation: "'A pesar de' to pomimo (koncesja formalna). Zawsze 'a pesar', ustalona konstrukcja. Bardziej formalne niż 'aunque'. Pokazuje że coś nastąpiło MIMO przeszkody - przeszkoda istniała ale nie zatrzymała akcji. Formalna konstrukcja dla pisma i mowy oficjalnej."
      },
      {
        id: "fixed_12",
        question: "_____ el fondo, todos queremos lo mismo: vivir en paz y felicidad con nuestras familias.",
        translation: "(W gruncie rzeczy wszyscy chcemy tego samego: żyć w pokoju i szczęściu z naszymi rodzinami)",
        options: ["En", "Al", "Por", "De"],
        correct: "En",
        explanation: "'En el fondo' to w gruncie rzeczy, głęboko (esencja). Zawsze 'en el fondo'. Używamy dla odkrywania prawdy ukrytej pod powierzchnią - mimo różnic powierzchniowych, w głębi wszyscy mają te same potrzeby. Filozoficzna fraza dla uniwersalnych prawd."
      },
      {
        id: "fixed_13",
        question: "_____ repente se apagaron todas las luces y nos quedamos en completa oscuridad total.",
        translation: "(Nagle zgasły wszystkie światła i zostaliśmy w całkowitej kompletnej ciemności)",
        options: ["De", "Por", "A", "En"],
        correct: "De",
        explanation: "'De repente' to nagle (nagła zmiana). Zawsze 'de repente', stała fraza. Pokazuje zerowe ostrzeżenie - coś wydarzyło się BEZ przygotowania. Temporalna fraza dla szoku i zaskoczenia - moment bez antycypacji poprzedzającej."
      },
      {
        id: "fixed_14",
        question: "_____ cabo finalmente decidimos quedarnos en casa viendo películas en vez de salir con mal tiempo.",
        translation: "(W końcu zdecydowaliśmy zostać w domu oglądając filmy zamiast wychodzić przy złej pogodzie)",
        options: ["Al", "En", "Por", "De"],
        correct: "Al",
        explanation: "'Al cabo' to w końcu, ostatecznie (po deliberacji). Zawsze 'al cabo'. Pokazuje koniec procesu decyzyjnego - rozważyliście opcje i OSTATECZNIE wybraliście. Różni się od 'por fin' (ulga po czekaniu) - 'al cabo' to wniosek po myśleniu."
      },
      {
        id: "fixed_15",
        question: "_____ que te vi entrar por la puerta, supe inmediatamente que algo malo había pasado.",
        translation: "(W momencie gdy zobaczyłem cię wchodzić przez drzwi, natychmiast wiedziałem że coś złego się stało)",
        options: ["En cuanto", "Cuando", "Apenas", "Tan pronto"],
        correct: "En cuanto",
        explanation: "'En cuanto' to jak tylko (natychmiastowość). Zawsze razem jako fraza. Pokazuje że druga akcja nastąpiła NATYCHMIAST po pierwszej - zero opóźnienia między zobaczeniem a wiedzeniem. Temporalna fraza dla sekwencji momentalnej."
      }
    ]
  }
};

export default part27Categories;

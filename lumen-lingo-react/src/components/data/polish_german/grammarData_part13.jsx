
/**
 * POLISH → GERMAN GRAMMAR - PART 13
 * 4 categories, 15 questions each - Precision mastery
 */

import { Compass, Clock, Volume2, Zap } from "lucide-react";

export const part13Categories = {
  directional_verbs_prepositions: {
    name: "Czasowniki kierunkowe z przyimkami",
    description: "Fahren nach/in/zu, gehen zu/in/auf - kierunki ruchu",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "dir_v_1",
        question: "Ich fahre morgen _____ Berlin für ein wichtiges Meeting.",
        translation: "(Jadę jutro do Berlina na ważne spotkanie)",
        options: ["nach", "in", "zu", "an"],
        correct: "nach",
        explanation: "Przyimek 'nach' dla miast i krajów bez rodzajnika! Berlin to miasto więc 'nach Berlin'. To planowanie podróży - cel w mieście. Przyimek 'nach' używasz do miast, krajów (bez the), kierunków (nach Norden). Prosta reguła - nazwy geograficzne bez rodzajnika równa się 'nach'."
      },
      {
        id: "dir_v_2",
        question: "Sie geht jeden Tag _____ Arbeit zu Fuß für Gesundheit.",
        translation: "(Chodzi każdego dnia do pracy pieszo dla zdrowia)",
        options: ["zur", "nach der", "in die", "an die"],
        correct: "zur",
        explanation: "Konstrukcja 'zur Arbeit' (zu plus der) dla celu pracy! Skrót 'zur' standardowa forma. To dojazd - codzienna rutyna. Przyimek 'zu' używasz dla aktywności/celów - 'zur Arbeit, zur Schule, zum Arzt'. Różne od lokalizacji - o CELU/AKTYWNOŚCI nie miejscu."
      },
      {
        id: "dir_v_3",
        question: "Wir fahren im Sommer _____ die Schweiz in die Berge.",
        translation: "(Jedziemy latem do Szwajcarii w góry)",
        options: ["in", "nach", "zu", "an"],
        correct: "in",
        explanation: "Konstrukcja 'in die Schweiz' kraj z rodzajnikiem! Szwajcaria ma rodzajnik (die) więc 'in' nie 'nach'. To wakacje - górski cel. Kraje z rodzajnikiem (die Schweiz, die Türkei, die USA) wymagają 'in' plus biernik. Wyjątek od reguły 'nach' dla krajów."
      },
      {
        id: "dir_v_4",
        question: "Ich gehe heute Abend _____ Kino mit meinen Freunden.",
        translation: "(Idę dzisiaj wieczorem do kina z przyjaciółmi)",
        options: ["ins", "zum", "nach dem", "an das"],
        correct: "ins",
        explanation: "Konstrukcja 'ins Kino' (in plus das) miejsce rozrywki! Budynki dla aktywności używają 'in'. To plany społeczne - wyjście do kina. Zamknięte przestrzenie gdzie aktywność się dzieje: 'ins Kino, ins Theater, ins Restaurant'. Przyimek 'in' plus biernik dla wchodzenia do budynków."
      },
      {
        id: "dir_v_5",
        question: "Er fliegt nächste Woche _____ USA für eine Konferenz.",
        translation: "(Leci w przyszłym tygodniu do USA na konferencję)",
        options: ["in die", "nach", "zu den", "an die"],
        correct: "in die",
        explanation: "Konstrukcja 'in die USA' kraj mnogowy! USA mnoga (die) więc 'in' plus biernik. To podróż biznesowa - wyjazd konferencyjny. Kraje w liczbie mnogiej (die USA, die Niederlande) zawsze 'in die'. Obecność rodzajnika determinuje przyimek - z rodzajnikiem oznacza 'in'."
      },
      {
        id: "dir_v_6",
        question: "Gehst du morgen _____ Arzt wegen deiner Erkältung?",
        translation: "(Idziesz jutro do lekarza z powodu przeziębienia?)",
        options: ["zum", "nach dem", "in den", "an den"],
        correct: "zum",
        explanation: "Wizyta profesjonalna 'zum Arzt'! Przyimek 'zu' dla ludzi/profesjonalistów. To zdrowie - wizyta u lekarza. Odwiedzanie ludzi używa 'zu' - 'zum Arzt, zum Friseur, zur Freundin'. Cel to osoba nie miejsce - celem jest spotkanie OSOBY."
      },
      {
        id: "dir_v_7",
        question: "Sie fährt jeden Sommer _____ Meer zum Entspannen und Baden.",
        translation: "(Jeździ każdego lata nad morze żeby odpocząć i się kąpać)",
        options: ["ans", "zum", "nach dem", "in das"],
        correct: "ans",
        explanation: "Cel nadmorski 'ans Meer' (an plus das)! Brzegi/granice używają 'an'. To wakacje - wyjazdy na plażę. Brzegi wody: 'ans Meer, an den See, an den Strand'. Przyimek 'an' plus biernik dla chodzenia DO obszarów granicznych wody."
      },
      {
        id: "dir_v_8",
        question: "Ich gehe heute _____ Post, um ein Paket abzuholen wichtig.",
        translation: "(Idę dzisiaj na pocztę żeby odebrać ważną paczkę)",
        options: ["zur", "nach der", "in die", "an die"],
        correct: "zur",
        explanation: "Lokalizacja usługi 'zur Post'! Przyimek 'zu' dla instytucji świadczących usługi. To sprawa - odbiór pocztowy. Miejsca usługowe: 'zur Post, zur Bank, zum Supermarkt'. Przyimek 'zu' podkreśla CEL (usługa) nie tylko lokalizacja."
      },
      {
        id: "dir_v_9",
        question: "Wir gehen am Wochenende _____ Konzert im Stadtzentrum.",
        translation: "(Idziemy w weekend na koncert w centrum miasta)",
        options: ["zum", "ins", "nach dem", "an das"],
        correct: "zum",
        explanation: "Uczestnictwo w wydarzeniu 'zum Konzert'! Przyimek 'zu' dla wydarzeń jako cel. To rozrywka - iść na koncert. Wydarzenia jako aktywności: 'zum Konzert, zum Fußballspiel'. Przyimek 'zu' podkreśla uczestnictwo w WYDARZENIU nie wchodzenie do budynku."
      },
      {
        id: "dir_v_10",
        question: "Er fährt jeden Tag _____ Universität mit dem Fahrrad.",
        translation: "(Jeździ każdego dnia na uniwersytet rowerem)",
        options: ["zur", "nach der", "in die", "an die"],
        correct: "zur",
        explanation: "Instytucja edukacyjna 'zur Universität'! Przyimek 'zu' dla regularnych wizyt instytucjonalnych. To dojazd - podróż studenta. Instytucje edukacyjne: 'zur Universität, zur Schule'. Przyimek 'zu' pokazuje rutynowy CEL uczestnictwa nie tylko kierunek geograficzny."
      },
      {
        id: "dir_v_11",
        question: "Ich gehe schnell _____ Bäcker, um Brot zu kaufen frisch.",
        translation: "(Idę szybko do piekarni żeby kupić świeży chleb)",
        options: ["zum", "nach dem", "in den", "an den"],
        correct: "zum",
        explanation: "Wizyta w sklepie 'zum Bäcker'! Przyimek 'zu' dla sklepów jako ludzie/usługi. To sprawa - zakup chleba. Sklepy wskazywane przez zawód: 'zum Bäcker, zum Metzger'. Przyimek 'zu' podkreśla że idziesz DO osoby świadczącej usługę."
      },
      {
        id: "dir_v_12",
        question: "Wir fahren dieses Jahr _____ Norden in den Urlaub kühl.",
        translation: "(Jedziemy w tym roku na północ na urlop chłodny)",
        options: ["nach", "in den", "zum", "an den"],
        correct: "nach",
        explanation: "Kierunek kardynalny 'nach Norden'! Kierunki kompasu używają 'nach'. To wakacje - północny cel. Kierunki: 'nach Norden, nach Süden, nach Osten, nach Westen'. Przyimek 'nach' standardowy dla wszystkich kierunków kardynalnych - kierunki geograficzne."
      },
      {
        id: "dir_v_13",
        question: "Sie geht morgen _____ Friseur für einen neuen Haarschnitt.",
        translation: "(Idzie jutro do fryzjera na nową fryzurę)",
        options: ["zum", "nach dem", "in den", "an den"],
        correct: "zum",
        explanation: "Profesjonalista usług 'zum Friseur'! Przyimek 'zu' dla usług kosmetycznych. To pielęgnacja - wizyta fryzjerska. Dostawcy usług: 'zum Friseur, zum Zahnarzt'. Przyimek 'zu' pokazuje odwiedzanie OSOBY świadczącej usługę - nacisk na usługę osobistą."
      },
      {
        id: "dir_v_14",
        question: "Ich fahre heute _____ Flughafen, um meine Eltern abzuholen.",
        translation: "(Jadę dzisiaj na lotnisko żeby odebrać rodziców)",
        options: ["zum", "nach dem", "in den", "an den"],
        correct: "zum",
        explanation: "Węzeł transportowy 'zum Flughafen'! Przyimek 'zu' dla głównych obiektów. To odbiór - podróż na lotnisko. Węzły transportowe: 'zum Flughafen, zum Bahnhof'. Przyimek 'zu' odpowiedni dla dużych publicznych obiektów służących konkretnym celom."
      },
      {
        id: "dir_v_15",
        question: "Er geht jeden Morgen _____ Park zum Joggen und Entspannen.",
        translation: "(Chodzi każdego ranka do parku żeby biegać i odpoczać)",
        options: ["in den", "zum", "nach dem", "an den"],
        correct: "in den",
        explanation: "Wchodzenie do przestrzeni 'in den Park'! Parki jako obszary używają 'in' plus biernik. To rutyna ćwiczeń - poranny jogging. Otwarte przestrzenie do których WCHODZISZ: 'in den Park, in den Wald'. Przyimek 'in' pokazuje wchodzenie do obszaru nie tylko zbliżanie się do krawędzi."
      }
    ]
  },

  time_prepositions_advanced: {
    name: "Przyimki czasowe - zaawansowane",
    description: "An, in, um, vor, seit, für - temporal precision",
    icon: Clock,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "time_prep_1",
        question: "Ich habe _____ Montag einen wichtigen Termin beim Arzt.",
        translation: "(Mam w poniedziałek ważne spotkanie u lekarza)",
        options: ["am", "im", "um", "an"],
        correct: "am",
        explanation: "Przyimek 'am' dla dni tygodnia! Forma 'am Montag' (w poniedziałek) standardowa. To harmonogram - dzień wizyty. Dni używają 'am' (an plus dem): am Montag, am Dienstag. Skrócona forma zawsze dla dni - 'am' nie 'an dem'."
      },
      {
        id: "time_prep_2",
        question: "_____ Winter fahren wir immer in die Berge zum Skifahren.",
        translation: "(Zimą jeździmy zawsze w góry na narty)",
        options: ["Im", "Am", "Um", "Vor"],
        correct: "Im",
        explanation: "Przyimek 'im Winter' dla pór roku! Pory roku używają 'in' plus celownik (im). To sezonowy nawyk - sporty zimowe. Pory roku: im Winter, im Sommer, im Herbst, im Frühling. Skrót 'im' (in plus dem) standardowa forma."
      },
      {
        id: "time_prep_3",
        question: "Das Meeting beginnt _____ 14 Uhr pünktlich im Konferenzraum.",
        translation: "(Spotkanie zaczyna się o 14 punktualnie w sali konferencyjnej)",
        options: ["um", "am", "im", "an"],
        correct: "um",
        explanation: "Przyimek 'um' dla konkretnych godzin! Forma 'um 14 Uhr' (o 14) czas zegarowy. To punktualność - dokładny czas. Konkretne godziny zawsze 'um': um 8 Uhr, um Mitternacht. Przyimek 'um' wskazuje dokładny moment na zegarze."
      },
      {
        id: "time_prep_4",
        question: "Ich bin _____ drei Jahren hier in dieser Stadt angekommen.",
        translation: "(Przyjechałem trzy lata temu do tego miasta)",
        options: ["vor", "seit", "für", "in"],
        correct: "vor",
        explanation: "Przyimek 'vor' oznacza temu! Forma 'vor drei Jahren' (trzy lata temu) zakończona przeszłość. To opis czasu - data przybycia. Przyimek 'vor' plus okres czasu równa się temu (zakończony moment). Różne od 'seit' (kontynuujące) - 'vor' dla pojedynczych przeszłych wydarzeń."
      },
      {
        id: "time_prep_5",
        question: "Ich wohne _____ fünf Jahren in dieser Wohnung zufrieden.",
        translation: "(Mieszkam od pięciu lat w tym mieszkaniu zadowolony)",
        options: ["seit", "vor", "für", "in"],
        correct: "seit",
        explanation: "Przyimek 'seit' dla kontynuującego czasu trwania! Forma 'seit fünf Jahren' (od pięciu lat) wciąż trwa. To zamieszkanie - trwające życie. Przyimek 'seit' plus okres czasu pokazuje czas trwania OD punktu w przeszłości kontynuujący DO teraz. Wciąż tam mieszka - akcja trwa."
      },
      {
        id: "time_prep_6",
        question: "Wir bleiben _____ zwei Wochen hier im Hotel am Strand.",
        translation: "(Zostajemy przez dwa tygodnie tutaj w hotelu na plaży)",
        options: ["für", "seit", "vor", "in"],
        correct: "für",
        explanation: "Przyimek 'für' dla planowanego czasu trwania! Forma 'für zwei Wochen' (na dwa tygodnie) zamierzony pobyt. To wakacje - długość wizyty. Przyimek 'für' plus czas pokazuje PLANOWANY czas trwania - jak długo zamierzają zostać. Przyszły/intencjonalny przedział czasowy."
      },
      {
        id: "time_prep_7",
        question: "_____ einem Monat fängt mein neuer Job an endlich!",
        translation: "(Za miesiąc zaczyna się moja nowa praca w końcu!)",
        options: ["In", "Nach", "Vor", "Seit"],
        correct: "In",
        explanation: "Przyimek 'in einem Monat' przyszły punkt! Za miesiąc - czas DO wydarzenia. To oczekiwanie - rozpoczęcie pracy. Przyimek 'in' plus okres czasu równa się za X czasu (przyszłość). Pokazuje czas trwania PRZED przyszłym wydarzeniem - funkcja odliczania."
      },
      {
        id: "time_prep_8",
        question: "Er ist _____ 1990 in diesem Unternehmen beschäftigt erfolgreich.",
        translation: "(Jest od 1990 zatrudniony w tej firmie pomyślnie)",
        options: ["seit", "vor", "in", "für"],
        correct: "seit",
        explanation: "Punkt początkowy kontynuujący 'seit 1990'! Od roku do teraz - trwające zatrudnienie. To kariera - długi staż. Przyimek 'seit' plus rok pokazuje OD tego punktu kontynuując. Wciąż zatrudniony - czas trwania od konkretnej przeszłej daty trwający."
      },
      {
        id: "time_prep_9",
        question: "Ich komme _____ einer Stunde zurück - warte bitte hier!",
        translation: "(Wrócę za godzinę - czekaj proszę tutaj!)",
        options: ["in", "nach", "vor", "seit"],
        correct: "in",
        explanation: "Czas powrotu 'in einer Stunde'! Za godzinę - przyszły punkt. To prośba - pytanie o cierpliwość. Przyimek 'in' plus czas równa się za X czasu (kiedy powrót nastąpi). Informuje kiedy spodziewać się powrotu - konkretny przyszły czas."
      },
      {
        id: "time_prep_10",
        question: "_____ Abend gehe ich immer spazieren im Park entspannt.",
        translation: "(Wieczorem chodzę zawsze na spacer w parku zrelaksowany)",
        options: ["Am", "Im", "Um", "An"],
        correct: "Am",
        explanation: "Część dnia 'am Abend'! Wieczór jako okres czasu używa 'am'. To rutyna - wieczorny nawyk. Części dnia: am Morgen, am Abend (ale: in der Nacht). Przyimek 'am' dla rana i wieczoru - 'in' tylko dla nocy."
      },
      {
        id: "time_prep_11",
        question: "Das Geschäft ist _____ 18 Uhr geschlossen jeden Tag.",
        translation: "(Sklep jest od 18 zamknięty każdego dnia)",
        options: ["ab", "seit", "um", "vor"],
        correct: "ab",
        explanation: "Przyimek 'ab 18 Uhr' początek od! Od tej godziny dalej - punkt początkowy. To godziny działalności - czas zamknięcia. Przyimek 'ab' pokazuje OD punktu naprzód - wszystko po 18. Różne od 'um' (o) - 'ab' oznacza zaczynając OD kontynuując."
      },
      {
        id: "time_prep_12",
        question: "Ich arbeite hier _____ Anfang des Jahres im Januar.",
        translation: "(Pracuję tutaj od początku roku w styczniu)",
        options: ["seit", "ab", "vor", "in"],
        correct: "seit",
        explanation: "Kontynuacja od początku 'seit Anfang'! Od stycznia do teraz - trwająca praca. To zatrudnienie - stwierdzenie początku stażu. Przyimek 'seit' plus punkt w czasie pokazuje OD tamtego momentu kontynuując do teraźniejszości. Początek roku jako punkt początkowy trwający."
      },
      {
        id: "time_prep_13",
        question: "_____ der Nacht kann ich oft nicht gut schlafen leider.",
        translation: "(W nocy często nie mogę dobrze spać niestety)",
        options: ["In", "Am", "Um", "Zur"],
        correct: "In",
        explanation: "Pora nocna 'in der Nacht'! Noc używa 'in' (nie 'am' jak inne części). To bezsenność - problemy ze snem. Wyjątek: 'in der Nacht' różne od 'am Morgen/Abend'. Noc dostaje 'in' - osobliwość niemieckich wyrażeń czasowych."
      },
      {
        id: "time_prep_14",
        question: "Wir treffen uns _____ 19 Uhr vor dem Restaurant draußen.",
        translation: "(Spotykamy się o 19 przed restauracją na zewnątrz)",
        options: ["um", "am", "im", "an"],
        correct: "um",
        explanation: "Dokładny czas spotkania 'um 19 Uhr'! Precyzyjny czas zegarowy. To koordynacja - czas spotkania. Przyimek 'um' plus godzina dla precyzyjnych czasów spotkań. Punktualność podkreślona - dokładny moment spotkania."
      },
      {
        id: "time_prep_15",
        question: "_____ Wochenende fahren wir oft aufs Land zur Erholung.",
        translation: "(W weekend jeździmy często na wieś dla odpoczynku)",
        options: ["Am", "Im", "Um", "Zum"],
        correct: "Am",
        explanation: "Czas weekendu 'am Wochenende'! Przyimek 'am' dla weekendu jako okres czasu. To ucieczka od rutyny - wiejskie wyjazdy. Standardowe wyrażenie 'am Wochenende' - weekend jako jednostka czasowa. Wzór regularnej weekendowej aktywności."
      }
    ]
  },

  emphasis_particles_doch_ja: {
    name: "Partykuły emfatyczne",
    description: "Doch, ja, eben, halt - subtelne znaczenia",
    icon: Volume2,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "emph_part_1",
        question: "Das ist _____ interessant! Ich wusste das nicht vorher!",
        translation: "(To jest przecież ciekawe! Nie wiedziałem tego wcześniej!)",
        options: ["ja", "doch", "mal", "halt"],
        correct: "ja",
        explanation: "Partykuła 'ja' wyrażająca zaskoczenie i zainteresowanie! Nacisk na odkrycie - efekt wow. To o odkryciu - autentyczne zaskoczenie. Partykuła 'ja' intensyfikuje stwierdzenia pokazując silną reakcję lub nieoczekiwaną realizację. Dodaje emocjonalny wymiar - 'to JEST ciekawe' z zaskoczeniem."
      },
      {
        id: "emph_part_2",
        question: "Komm _____ her, ich zeige dir etwas Tolles schnell!",
        translation: "(No chodź tutaj, pokażę ci coś wspaniałego szybko!)",
        options: ["doch", "ja", "eben", "halt"],
        correct: "doch",
        explanation: "Partykuła 'doch' zachęcające naleganie! Pobudzanie do akcji - przyjazne naleganie. To zaproszenie - ciepłe przywoływanie. Partykuła 'doch' w trybach rozkazujących dodaje ciepło i zachętę - 'komm doch' brzmi bardziej zachęcająco niż surowy rozkaz. Łagodzi bezpośredniość."
      },
      {
        id: "emph_part_3",
        question: "Das ist _____ so - wir können nichts daran ändern!",
        translation: "(Po prostu tak jest - nie możemy nic na to zmienić!)",
        options: ["eben", "ja", "doch", "mal"],
        correct: "eben",
        explanation: "Partykuła 'eben' akceptująca rzeczywistość! Tak po prostu jest - rezygnacja. To pragmatyzm - akceptowanie niezmiennego. Partykuła 'eben' (lub 'halt' w południowych Niemczech) pokazuje rzeczową akceptację. Nie narzekanie po prostu rozpoznanie że niektóre rzeczy są ustalone."
      },
      {
        id: "emph_part_4",
        question: "Du bist _____ mein Freund - natürlich helfe ich dir!",
        translation: "(Jesteś przecież moim przyjacielem - oczywiście ci pomogę!)",
        options: ["doch", "ja", "eben", "mal"],
        correct: "doch",
        explanation: "Partykuła 'doch' przypominająca oczywistość! Podkreślanie znanego faktu - uzasadnienie. To o lojalności - wyjaśnianie pomocy. Partykuła 'doch' przypomina o czymś oczywistym co powinno być jasne. Wzmacnia argument - przyjaźń równa się oczywiście pomoc."
      },
      {
        id: "emph_part_5",
        question: "Schau _____ - das Wetter ist heute wunderschön draußen!",
        translation: "(Popatrz no - pogoda jest dzisiaj cudowna na zewnątrz!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' casualowa sugestja! Forma 'schau mal' przyjazne wskazywanie - zapraszanie uwagi. To dzielenie się pięknem - włączanie innych. Partykuła 'mal' łagodzi rozkazy przekształcając je w sugestie nie polecenia - 'schau mal' brzmi jak zaproszenie nie rozkaz. Delikatne przyciąganie uwagi."
      },
      {
        id: "emph_part_6",
        question: "Das kannst du _____ nicht machen - das ist gefährlich!",
        translation: "(Nie możesz tego przecież zrobić - to niebezpieczne!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' emfatyczny zakaz! Wzmacnianie 'nie' - silniejsze ostrzeżenie. To troska o bezpieczeństwo - zapobieganie niebezpieczeństwu. Partykuła 'doch' w negatywnych stwierdzeniach intensyfikuje - 'doch nicht' oznacza 'na pewno nie'. Podkreśla oczywistość niebezpieczeństwa."
      },
      {
        id: "emph_part_7",
        question: "Warte _____ einen Moment - ich bin gleich fertig hier!",
        translation: "(Poczekaj chwilkę - zaraz skończę tutaj!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' uprzejme opóźnienie! Forma 'warte mal' proszenie o krótką cierpliwość - złagodzona prośba. To wygrywanie czasu - prawie skończone. Partykuła 'mal' czyni prośbę o czekanie mniej wymagającą - 'mal' implikuje krótkie czekanie. Minimalizowanie niedogodności."
      },
      {
        id: "emph_part_8",
        question: "Das habe ich _____ schon gesagt! Hörst du nicht zu?",
        translation: "(Przecież już to mówiłem! Nie słuchasz?)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' frustracja o powtarzaniu! Już powiedziane - podkreślanie wcześniejszego mówienia. To irytacja - niesluchanie. Partykuła 'doch' wzmacnia że informacja była dana - frustracja o konieczności powtarzania. Irytacja o nieuwagę."
      },
      {
        id: "emph_part_9",
        question: "Sei _____ nicht so traurig - alles wird gut werden!",
        translation: "(Nie bądź no taki smutny - wszystko będzie dobrze!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' pocieszające uspokojenie! Delikatny zakaz smutku - zachęcanie do pozytywności. To pocieszenie - podnoszenie duchów. Partykuła 'doch' w negatywnych sugestiach dodaje współczucie - 'sei doch nicht traurig' ciepłe odradzanie smutku. Empatyczna pociecha."
      },
      {
        id: "emph_part_10",
        question: "Es ist _____ kalt heute - zieh eine warme Jacke an!",
        translation: "(Jest po prostu zimno dzisiaj - załóż ciepłą kurtkę!)",
        options: ["halt", "doch", "ja", "mal"],
        correct: "halt",
        explanation: "Partykuła 'halt' (południowoniemiecka) prosty fakt! Po prostu jest zimno - akceptacja. To rzeczywistość pogody - praktyczna rada. Partykuła 'halt' pokazuje rzeczową akceptację - 'es ist halt kalt' (po prostu zimno). Regionalny wariant wyrażający nieuchronność."
      },
      {
        id: "emph_part_11",
        question: "Das weiß ich _____ - ich bin nicht dumm schließlich!",
        translation: "(Przecież to wiem - nie jestem w końcu głupi!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' defensywne potwierdzenie! Oczywiście wiem - obrażony. To samoobrona - asertywność wiedzy. Partykuła 'doch' podkreśla oczywistość wiedzy - łagodne oburzenie że kwestionowane. Ochrona kompetencji."
      },
      {
        id: "emph_part_12",
        question: "Komm _____ mit uns ins Kino heute Abend zusammen!",
        translation: "(Chodź no z nami do kina dzisiaj wieczorem razem!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' przyjazne naleganie! Namawianie do dołączenia - ciepłe zaproszenie. To socjalizacja - zachęcanie do uczestnictwa. Partykuła 'doch' w zaproszeniach dodaje ciepło - 'komm doch mit' bardziej przekonujące i przyjazne. Zachęcanie do akceptacji."
      },
      {
        id: "emph_part_13",
        question: "Das ist _____ verrückt! Wie ist das möglich überhaupt?",
        translation: "(To jest przecież szalone! Jak to jest w ogóle możliwe?)",
        options: ["ja", "doch", "mal", "eben"],
        correct: "ja",
        explanation: "Partykuła 'ja' intensyfikująca zdumienie! Podkreślanie szaleństwa - silna reakcja. To niedowierzanie - niedowierzanie. Partykuła 'ja' wzmacnia przymiotniki pokazując trzewną reakcję - 'das ist ja verrückt' silniejsze niż bez. Emocjonalna intensyfikacja."
      },
      {
        id: "emph_part_14",
        question: "Versuch es _____ - vielleicht klappt es diesmal besser!",
        translation: "(Spróbuj no - może tym razem się uda lepiej!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' zachęcająca próba! Forma 'versuch mal' delikatny impuls - niski nacisk. To motywacja - sugerowanie próby. Partykuła 'mal' czyni sugestię casualową - 'mal' implikuje łatwą próbę wartą spróbowania. Redukowanie strachu przed porażką."
      },
      {
        id: "emph_part_15",
        question: "Du musst _____ früher aufstehen - sonst kommst du zu spät!",
        translation: "(Musisz po prostu wcześniej wstawać - inaczej się spóźnisz!)",
        options: ["eben", "doch", "ja", "mal"],
        correct: "eben",
        explanation: "Partykuła 'eben' logiczna konieczność! Po prostu musisz - nieunikniony wniosek. To praktyczna rada - stwierdzanie oczywistego rozwiązania. Partykuła 'eben' pokazuje to po prostu logiczny wymóg - 'musst eben' podkreśla nieuchronność. Nie istnieje alternatywa."
      }
    ]
  },

  negation_advanced_forms: {
    name: "Przeczenia - formy zaawansowane",
    description: "Kein vs nicht, niemand, nirgends, niemals",
    icon: Zap,
    color: "from-indigo-500 to-violet-600",
    level: "intermediate",
    questions: [
      {
        id: "neg_adv_1",
        question: "Ich habe _____ Zeit für dieses Projekt momentan leider.",
        translation: "(Nie mam czasu na ten projekt obecnie niestety)",
        options: ["keine", "nicht", "kein", "nichts"],
        correct: "keine",
        explanation: "Negacja rzeczownika 'keine Zeit'! Forma 'kein' neguje rzeczowniki - 'keine' żeńska dla 'Zeit'. To o braku - niedobór czasu. Konstrukcja 'kein' plus rzeczownik (nie 'nicht') standardowa negacja rzeczowników. Odmienia się jak 'ein' - 'keine' biernik żeński."
      },
      {
        id: "neg_adv_2",
        question: "Das Buch ist _____ interessant - es ist sehr langweilig!",
        translation: "(Książka nie jest ciekawa - jest bardzo nudna!)",
        options: ["nicht", "kein", "keine", "nichts"],
        correct: "nicht",
        explanation: "Negacja przymiotnika 'nicht interessant'! Forma 'nicht' dla przymiotników/czasowników. To recenzja - nudna książka. Konstrukcja 'nicht' plus przymiotnik standardowa negacja - nie używasz 'kein' z przymiotnikami. Negacja jakości nie rzeczy."
      },
      {
        id: "neg_adv_3",
        question: "Ich habe _____ gesehen - es war niemand da draußen.",
        translation: "(Nie widziałem nikogo - nikogo tam nie było na zewnątrz)",
        options: ["niemanden", "nicht jemand", "keinen", "nichts"],
        correct: "niemanden",
        explanation: "Negacja osób 'niemanden'! Negowanie ludzi - 'niemand' się odmienia. To o pustce - brak obecnych ludzi. Zaimek 'niemand' (nikt) w bierniku równa się 'niemanden'. Negowanie ludzi używa 'niemand' nie 'nicht' lub 'kein'."
      },
      {
        id: "neg_adv_4",
        question: "Ich war heute _____ - ich war den ganzen Tag zu Hause.",
        translation: "(Nie byłem dzisiaj nigdzie - byłem cały dzień w domu)",
        options: ["nirgends", "nicht irgendwo", "nirgendwo", "keinwo"],
        correct: "nirgends",
        explanation: "Negacja miejsca 'nirgends' (lub 'nirgendwo')! Negowanie miejsc - brak lokalizacji. To o pozostawaniu - zostanie w domu. Formy 'nirgends'/'nirgendwo' wymienne dla 'nigdzie'. Negacja przestrzenna - nie byłem w żadnym miejscu."
      },
      {
        id: "v_n_fix_5",
        question: "Er wird das _____ wieder tun - er hat es versprochen fest!",
        translation: "(Nigdy tego nie zrobi ponownie - obiecał mocno!)",
        options: ["niemals", "nicht niemals", "keinmal", "nie mehr"],
        correct: "niemals",
        explanation: "Emfatyczne nigdy 'niemals'! Silniejsze niż 'nie' - absolutna negacja. To obietnica - stanowcze zobowiązanie. Forma 'niemals' (lub 'nie') dla 'nigdy' - 'niemals' bardziej emfatyczne. Negacja czasowa - nie wydarzy się w żadnym przyszłym czasie."
      },
      {
        id: "neg_adv_6",
        question: "Ich habe _____ davon gewusst - das ist mir komplett neu!",
        translation: "(Nie wiedziałem nic o tym - to jest dla mnie całkowicie nowe!)",
        options: ["nichts", "nicht", "keins", "niemand"],
        correct: "nichts",
        explanation: "Negacja rzeczy 'nichts davon'! Negowanie informacji/rzeczy - zerowa wiedza. To zaskoczenie - całkowita nieświadomość. Zaimek 'nichts' (nic) dla rzeczy/informacji. Forma 'nichts wissen' równa się wiedzieć nic - całkowita ignorancja."
      },
      {
        id: "neg_adv_7",
        question: "Wir haben _____ Geld mehr - wir sind völlig pleite!",
        translation: "(Nie mamy już pieniędzy - jesteśmy całkowicie spłukani!)",
        options: ["kein", "nicht", "keins", "nichts"],
        correct: "kein",
        explanation: "Negacja rzeczownika pieniędzy 'kein Geld'! Nijaki 'Geld' z 'kein' (nie zmienia się mianownik/biernik). To kryzys finansowy - spłukani. Konstrukcja 'kein' plus rzeczownik standardowa - 'kein Geld' (zero pieniędzy). Negacja rzeczownika używając rodziny 'kein'."
      },
      {
        id: "neg_adv_8",
        question: "Ich glaube _____ an Zufälle - alles ma einen Grund!",
        translation: "(Nie wierzę w przypadki - wszystko ma powód!)",
        options: ["nicht", "kein", "keine", "nichts"],
        correct: "nicht",
        explanation: "Negacja czasownika 'nicht glauben'! Forma 'nicht' dla negacji czasowników. To filozofia - determinizm. Czasownik 'glauben an' negowany z 'nicht' - negacja czasownika standardowo. Nie używasz 'kein' dla negowania czasowników."
      },
      {
        id: "neg_adv_9",
        question: "Hier gibt es _____ zu essen - der Kühlschrank jest pusty!",
        translation: "(Nie ma tu nic do jedzenia - lodówka jest pusta!)",
        options: ["nichts", "nicht", "keins", "kein"],
        correct: "nichts",
        explanation: "Negacja jedzalnego 'nichts zu essen'! Negowanie dostępności żywności. To o głodzie - pusta lodówka. Konstrukcja 'nichts' plus fraza bezokolicznikowa pokazuje całkowitą nieobecność. Zero opcji jedzenia - całkowite wyczerpanie."
      },
      {
        id: "neg_adv_10",
        question: "Sie ist _____ zu Hause - sie jest wyjechała w tym tygodniu.",
        translation: "(Nie ma jej w domu - wyjechała w tym tygodniu)",
        options: ["nicht", "kein", "keine", "niemand"],
        correct: "nicht",
        explanation: "Negacja lokalizacji 'nicht zu Hause'! Negowanie obecności - poza domem. To nieobecność - podróżowanie. Forma 'nicht' neguje frazę lokalizacyjną - 'zu Hause' traktowane jako fraza czasownikowa. Ona NIE jest-w-domu."
      },
      {
        id: "neg_adv_11",
        question: "Ich habe _____ einzige Frage verstanden w egzaminie!",
        translation: "(Nie zrozumiałem ani jednego pytania na egzaminie!)",
        options: ["keine", "nicht", "nichts", "niemand"],
        correct: "keine",
        explanation: "Emfatyczne zero 'keine einzige Frage'! Ani JEDNEGO pytania - całkowita porażka. To rozpacz - całkowity brak zrozumienia. Konstrukcja 'keine' plus 'einzige' podkreśla absolutność - zero pytań zrozumianych. Wzmocniona negacja."
      },
      {
        id: "neg_adv_12",
        question: "Das ist _____ meine Schuld - ich bin całkiem niewinny!",
        translation: "(To nie jest moja wina - jestem całkowicie niewinny!)",
        options: ["nicht", "kein", "keine", "nichts"],
        correct: "nicht",
        explanation: "Negacja posiadania 'nicht meine Schuld'! Zaprzeczanie posiadania winy. To obrona - zrzeczenie się odpowiedzialności. Forma 'nicht' neguje frazę posiadającą - 'meine Schuld' traktowane jako koncept. Odrzucanie przypisania winy."
      },
      {
        id: "neg_adv_13",
        question: "Ich kenne hier _____ - ich bin całkiem sam obcy!",
        translation: "(Nie znam tu nikogo - jestem całkiem sam obcy!)",
        options: ["niemanden", "nicht jemand", "keinen", "nichts"],
        correct: "niemanden",
        explanation: "Znajomość nikogo 'niemanden kennen'! Negacja osób - społeczna izolacja. To samotność - brak znajomych. Zaimek 'niemand' (nikt) biernik równa się 'niemanden'. Całkowity brak społecznych połączeń."
      },
      {
        id: "neg_adv_14",
        question: "Er kommt _____ zu spät - er jest zawsze punktualny!",
        translation: "(Nigdy się nie spóźnia - jest zawsze punktualny!)",
        options: ["nie", "niemals", "nicht nie", "kein"],
        correct: "nie",
        explanation: "Nigdy spóźniony 'nie zu spät'! Prosta negacja czasowa. To niezawodność - punktualność. Forma 'nie' (nigdy) standardowa - można też 'niemals' dla nacisku. Negowanie czasowego występowania."
      },
      {
        id: "neg_adv_15",
        question: "Das ist _____ Problem für mnie - mogę to łatwo rozwiązać!",
        translation: "(To nie jest problemem dla mnie - mogę to łatwo rozwiązać!)",
        options: ["kein", "nicht", "keine", "nichts"],
        correct: "kein",
        explanation: "Negacja rzeczownika 'kein Problem'! Nijaki 'Problem' z 'kein'. To pewność siebie - bagatelizowanie trudności. Konstrukcja 'kein' plus nijaki rzeczownik (mianownik/biernik ta sama forma). Casualowe bagatelizowanie wyzwania - asercja zdolności."
      }
    ]
  }
};

export default part13Categories;

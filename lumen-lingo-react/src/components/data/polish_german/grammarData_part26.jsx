/**
 * POLISH → GERMAN GRAMMAR - PART 26
 * 4 kategorie, 15 pytań każda
 */

import { Anchor, Clock, Scale, Repeat } from "lucide-react";

export const part26Categories = {
  fixed_prepositional_phrases: {
    name: "Stałe frazy przyimkowe",
    description: "Auf jeden Fall, im Gegenteil, aus Versehen - idiomy",
    icon: Anchor,
    color: "from-indigo-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "fix_prep_1",
        question: "_____ komme ich morgen zu deiner Party - versprochen fest!",
        translation: "(Na pewno przyjdę jutro na twoją imprezę - obiecane!)",
        options: ["Auf jeden Fall", "In jedem Fall", "Bei jedem Fall", "Für jeden Fall"],
        correct: "Auf jeden Fall",
        explanation: "Idiom 'auf jeden Fall' (na pewno/w każdym razie) to stała fraza - ZAWSZE 'auf' nie inne przyimki. Wyraża pewność i determinację. Mocna obietnica obecności. Ta fraza jest bardzo powszechna w rozmowach - używasz jej gdy chcesz podkreślić że coś definitywnie się wydarzy, bez wątpliwości."
      },
      {
        id: "fix_prep_2",
        question: "Ich bin _____ nicht müde - ich bin hellwach energetisch!",
        translation: "(Przeciwnie nie jestem zmęczony - jestem całkowicie rozbudzony!)",
        options: ["im Gegenteil", "am Gegenteil", "zum Gegenteil", "vom Gegenteil"],
        correct: "im Gegenteil",
        explanation: "Idiom 'im Gegenteil' (przeciwnie/wręcz przeciwnie) używa przyimka 'in' w celowniku. Zaprzeczenie poprzedniego stwierdzenia. Kontrast między oczekiwaniem a rzeczywistością. Fraza 'im Gegenteil' silnie koryguje założenia - używasz jej gdy ktoś się myli co do twojego stanu czy opinii."
      },
      {
        id: "fix_prep_3",
        question: "Ich habe _____ dein Glas umgestoßen - tut mir leid!",
        translation: "(Wywróciłem przypadkowo twoją szklankę - przepraszam!)",
        options: ["aus Versehen", "mit Versehen", "durch Versehen", "von Versehen"],
        correct: "aus Versehen",
        explanation: "Idiom 'aus Versehen' (przypadkowo/przez pomyłkę) używa przyimka 'aus'. To nie była intencja. Przeprosiny za niezamierzony błąd. Przeciwieństwo 'mit Absicht' (celowo). Fraza łagodzi winę - pokazuje że to był wypadek nie złośliwość, szczerość w przyznaniu błędu i jego niezamierzonego charakteru."
      },
      {
        id: "fix_prep_4",
        question: "_____ kann ich dir leider nicht zustimmen in dieser Sache.",
        translation: "(W tym punkcie niestety nie mogę się z tobą zgodzić)",
        options: ["In diesem Punkt", "An diesem Punkt", "Auf diesem Punkt", "Bei diesem Punkt"],
        correct: "In diesem Punkt",
        explanation: "Fraza 'in diesem Punkt' (w tym punkcie/aspekcie) używa 'in' z celownikiem. Precyzyjne wskazanie obszaru niezgody. Niezgoda w konkretnej kwestii. Forma pozwala na częściową niezgodę - zgadzasz się ogólnie ale w TYM konkretnym aspekcie masz inne zdanie, dyplomatyczne."
      },
      {
        id: "fix_prep_5",
        question: "_____ ist die Situation anders als du denkst kompliziert.",
        translation: "(W rzeczywistości sytuacja jest inna niż myślisz skomplikowana)",
        options: ["In Wirklichkeit", "An Wirklichkeit", "Zur Wirklichkeit", "Bei Wirklichkeit"],
        correct: "In Wirklichkeit",
        explanation: "Idiom 'in Wirklichkeit' (w rzeczywistości/tak naprawdę) używa 'in' z celownikiem. Korekta błędnego przekonania. Rzeczywistość różni się od percepcji. Fraza wprowadza prawdę po nieporozumieniu - 'w rzeczywistości' sygnalizuje że zaraz powiesz jak NAPRAWDĘ jest, kontrast z założeniami."
      },
      {
        id: "fix_prep_6",
        question: "Wir haben das _____ geschafft durch Teamarbeit gemeinsam!",
        translation: "(Udało nam się to wspólnymi siłami przez pracę zespołową!)",
        options: ["mit vereinten Kräften", "in vereinten Kräften", "durch vereinte Kräfte", "von vereinten Kräften"],
        correct: "mit vereinten Kräften",
        explanation: "Idiom 'mit vereinten Kräften' (wspólnymi siłami) używa 'mit' z celownikiem. Przymiotnik 'vereint' (zjednoczone) z końcówką. Sukces współpracy. Fraza podkreśla WSPÓLNY wysiłek - nie indywidualne osiągnięcie tylko kolektywna siła, celebruje pracę zespołową."
      },
      {
        id: "fix_prep_7",
        question: "_____ muss ich sagen, dass du Recht hattest ehrlich.",
        translation: "(Szczerze mówiąc muszę powiedzieć, że miałeś rację)",
        options: ["Ehrlich gesagt", "Ehrlich gesprochen", "In Ehrlichkeit", "Mit Ehrlichkeit"],
        correct: "Ehrlich gesagt",
        explanation: "Idiom 'ehrlich gesagt' (szczerze mówiąc) to stała fraza - imiesłów 'gesagt' nieodmienny. Wprowadzenie szczerego wyznania. Przyznanie że ktoś miał rację. Fraza łagodzi trudność przyznania błędu - 'ehrlich gesagt' pokazuje odwagę do mówienia prawdy, nawet gdy niewygodna."
      },
      {
        id: "fix_prep_8",
        question: "Er hat mir _____ geholfen - sehr großzügig von ihm!",
        translation: "(Pomógł mi bezinteresownie - bardzo hojnie z jego strony!)",
        options: ["ohne Hintergedanken", "mit Hintergedanken", "durch Hintergedanken", "von Hintergedanken"],
        correct: "ohne Hintergedanken",
        explanation: "Fraza 'ohne Hintergedanken' (bezinteresownie/bez ukrytych motywów) używa 'ohne' z biernikiem. Szczera pomoc bez oczekiwań. Mnoga 'Hintergedanken' (ukryte myśli). Bezinteresowna dobroć jest rzadka - fraza podkreśla CZYSTOŚĆ intencji, brak ukrytych celów czy oczekiwania rewanżu."
      },
      {
        id: "fix_prep_9",
        question: "_____ bin ich mit deiner Entscheidung nicht einverstanden.",
        translation: "(Z zasady nie zgadzam się z twoją decyzją)",
        options: ["Aus Prinzip", "Mit Prinzip", "In Prinzip", "Vom Prinzip"],
        correct: "Aus Prinzip",
        explanation: "Fraza 'aus Prinzip' (z zasady/z przekonania) używa 'aus'. Ideologiczna niezgoda. Nijaki 'Prinzip' bez rodzajnika w tej frazie. Stanowcze podejście. Forma 'aus Prinzip' pokazuje że niezgoda nie osobista tylko oparta na wartościach - to nie o tobie tylko o zasadach."
      },
      {
        id: "fix_prep_10",
        question: "Sie macht das _____ - hat es selbst gelernt autodidakt!",
        translation: "(Robi to z własnej inicjatywy - nauczyła się sama!)",
        options: ["aus eigenem Antrieb", "mit eigenem Antrieb", "durch eigenen Antrieb", "von eigenem Antrieb"],
        correct: "aus eigenem Antrieb",
        explanation: "Fraza 'aus eigenem Antrieb' (z własnej inicjatywy) używa 'aus' z celownikiem. Przymiotnik 'eigen' z końcówką -em. Samomotywacja. Autoddydaktyka wymaga dyscypliny. Fraza podkreśla że NIKT jej nie zmuszał - działała z wewnętrznej motywacji nie zewnętrznego nacisku."
      },
      {
        id: "fix_prep_11",
        question: "_____ haben wir keine andere Wahl - müssen akzeptieren.",
        translation: "(W każdym razie nie mamy innego wyboru - musimy zaakceptować)",
        options: ["Auf jeden Fall", "In jedem Fall", "Bei jedem Fall", "Für jeden Fall"],
        correct: "Auf jeden Fall",
        explanation: "Ponownie 'auf jeden Fall' ale w kontekście rezygnacji - 'tak czy inaczej/w każdym razie'. Ta sama fraza, inne znaczenie emocjonalne. Brak alternatyw. Forma 'auf jeden Fall' może wyrażać zarówno determinację JAK i akceptację nieuchronności - kontekst określa czy to optymistyczne czy rezygnacyjne."
      },
      {
        id: "fix_prep_12",
        question: "Das habe ich _____ so gemeint - nicht böse nehmen!",
        translation: "(Nie miałem tego tak na myśli - nie bierz do siebie!)",
        options: ["nicht so", "so nicht", "nicht auf diese Weise", "auf keine Weise"],
        correct: "nicht so",
        explanation: "Negacja sposobu 'nicht so' (nie tak) - prosta ale ważna konstrukcja. Wyjaśnienie nieporozumienia. Pozycja 'nicht' przed 'so'. Przeprosiny za źle zrozumiane słowa. Forma 'nicht so gemeint' pokazuje że intencja była inna - język może być niejasny, ważne wyjaśnić prawdziwe zamiary."
      },
      {
        id: "fix_prep_13",
        question: "Er arbeitet _____ als freiwilliger Helfer im Krankenhaus.",
        translation: "(Pracuje w charakterze wolontariusza w szpitalu)",
        options: ["in seiner Freizeit", "an seiner Freizeit", "mit seiner Freizeit", "von seiner Freizeit"],
        correct: "in seiner Freizeit",
        explanation: "Fraza 'in seiner Freizeit' (w swoim wolnym czasie) używa 'in' z celownikiem. Przymiotnik 'seiner' dopełniacz od 'sein'. Wolontariat to szlachetne. Forma pokazuje że to DODATKOWA aktywność poza główną pracą - 'w wolnym czasie' podkreśla poświęcenie osobistego czasu dla innych."
      },
      {
        id: "fix_prep_14",
        question: "_____ musst du das nicht sofort entscheiden jetzt gleich.",
        translation: "(Na szczęście nie musisz tego decydować natychmiast teraz)",
        options: ["Zum Glück", "Am Glück", "Im Glück", "Vom Glück"],
        correct: "Zum Glück",
        explanation: "Idiom 'zum Glück' (na szczęście) używa 'zu' z celownikiem. Wyraża ulgę. Brak presji czasu. Fraza na początku sygnalizuje pozytywny aspekt. Rozpoczęcie od 'zum Glück' natychmiast uspokaja - mówisz dobrą wiadomość zanim podasz szczegóły, łagodzi stres."
      },
      {
        id: "fix_prep_15",
        question: "Ich mache das _____ - möchte niemanden stören bei Arbeit.",
        translation: "(Robię to z premedytacją - nie chcę nikogo niepokoić przy pracy)",
        options: ["mit Absicht", "aus Absicht", "durch Absicht", "von Absicht"],
        correct: "mit Absicht",
        explanation: "Fraza 'mit Absicht' (celowo/z premedytacją) używa 'mit' z celownikiem. Świadome działanie. Żeński 'Absicht' bez rodzajnika. Intencjonalność akcji. Przeciwieństwo 'aus Versehen'. Forma pokazuje że działanie jest ZAMIERZONE - czasem trzeba wyjaśnić że coś robisz specjalnie żeby inni nie myśleli że to przypadek."
      }
    ]
  },

  time_expressions_detailed_complete: {
    name: "Wyrażenia czasowe - szczegółowe",
    description: "Vor einem Jahr, seit langem, in zwei Wochen - precyzja czasu",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "time_expr_1",
        question: "Ich habe ihn _____ nicht mehr gesehen - sehr lange!",
        translation: "(Nie widziałem go od wieków - bardzo długo!)",
        options: ["seit Ewigkeiten", "vor Ewigkeiten", "in Ewigkeiten", "nach Ewigkeiten"],
        correct: "seit Ewigkeiten",
        explanation: "Wyrażenie 'seit Ewigkeiten' (od wieków/od wieczności) używa 'seit' z celownikiem dla trwającego okresu. Przesadna forma dla długiego czasu. Mnoga 'Ewigkeiten' intensyfikuje. Tęsknota za kontaktem. Fraza jest idiomatyczna - dosłownie 'od wieczności' ale znaczy po prostu bardzo długo, przesada dla emocjonalnego efektu."
      },
      {
        id: "time_expr_2",
        question: "_____ werde ich in Urlaub fahren endlich an die See!",
        translation: "(Za dwa tygodnie pojadę w końcu na urlop nad morze!)",
        options: ["In zwei Wochen", "Nach zwei Wochen", "Vor zwei Wochen", "Seit zwei Wochen"],
        correct: "In zwei Wochen",
        explanation: "Wyrażenie 'in zwei Wochen' (za dwa tygodnie) używa 'in' z celownikiem dla PRZYSZŁEGO czasu. Odliczanie do urlopu. Celownik 'Wochen' mnoga. Antycypacja wakacji. Przyimek 'in' dla przyszłości może być mylący - ale w kontekście czasowym jasno oznacza 'za' (czas do wydarzenia), nie 'w' (lokalizacja)."
      },
      {
        id: "time_expr_3",
        question: "_____ habe ich meinen Freund zum letzten Mal gesehen.",
        translation: "(Tydzień temu widziałem mojego przyjaciela po raz ostatni)",
        options: ["Vor einer Woche", "Seit einer Woche", "In einer Woche", "Nach einer Woche"],
        correct: "Vor einer Woche",
        explanation: "Wyrażenie 'vor einer Woche' (tydzień temu) używa 'vor' z celownikiem dla UKOŃCZONEJ przeszłości. Punkt w czasie. Celownik żeński 'einer Woche'. Wspomnienie ostatniego spotkania. 'Vor' oznacza wstecz od teraz - liczy czas który MINĄŁ od wydarzenia, zamknięty okres w przeszłości."
      },
      {
        id: "time_expr_4",
        question: "Ich lerne _____ Deutsch intensiv - gute Fortschritte!",
        translation: "(Uczę się od trzech miesięcy niemieckiego intensywnie - dobre postępy!)",
        options: ["seit drei Monaten", "vor drei Monaten", "in drei Monaten", "nach drei Monaten"],
        correct: "seit drei Monaten",
        explanation: "Wyrażenie 'seit drei Monaten' (od trzech miesięcy) używa 'seit' z celownikiem dla TRWAJĄCEGO okresu. Akcja zaczęła się wtedy i WCIĄŻ trwa. Mnoga 'Monaten'. Postęp w nauce. 'Seit' łączy przeszłość z teraźniejszością - okres który rozpoczął się wcześniej ale nie zakończył, wciąż aktywny."
      },
      {
        id: "time_expr_5",
        question: "_____ bin ich endlich mit der Arbeit fertig - geschafft!",
        translation: "(Po długim czasie w końcu skończyłem z pracą - udało się!)",
        options: ["Nach langer Zeit", "Seit langer Zeit", "Vor langer Zeit", "In langer Zeit"],
        correct: "Nach langer Zeit",
        explanation: "Wyrażenie 'nach langer Zeit' (po długim czasie) używa 'nach' z celownikiem dla okresu który MINĄŁ zanim coś się stało. Ulga z ukończenia. Celownik żeński 'langer Zeit'. Długotrwała praca zakończona. 'Nach' wskazuje że długi okres był WARUNKIEM lub KONTEKSTEM - po jego upływie nastąpiło osiągnięcie."
      },
      {
        id: "time_expr_6",
        question: "Wir sehen uns _____ wieder - ich freue mich schon!",
        translation: "(Zobaczymy się za miesiąc ponownie - już się cieszę!)",
        options: ["in einem Monat", "nach einem Monat", "vor einem Monat", "seit einem Monat"],
        correct: "in einem Monat",
        explanation: "Przyszły czas z 'in' - 'in einem Monat' (za miesiąc). Celownik męski 'einem Monat'. Planowane spotkanie. Antycypacja radosna. Forma 'in' dla przyszłości konsekwentna - 'in einer Stunde, in zwei Tagen, in drei Wochen' wszystkie używają tej samej konstrukcji."
      },
      {
        id: "time_expr_7",
        question: "_____ habe ich in diesem Restaurant gegessen - war super!",
        translation: "(Niedawno jadłem w tej restauracji - było super!)",
        options: ["Neulich", "Kürzlich", "Vor kurzem", "Seit kurzem"],
        correct: "Neulich",
        explanation: "Przysłówek 'neulich' (niedawno) dla bliskiej ale niesprecyzowanej przeszłości. Alternatywnie 'kürzlich' lub 'vor kurzem'. Pozytywne wspomnienie kulinar ne. Wszystkie trzy formy podobne ale 'neulich' najbardziej casualowe - używasz gdy dokładna data nieważna, liczy się że było ostatnio."
      },
      {
        id: "time_expr_8",
        question: "Ich wohne _____ in dieser Stadt - kenne sie gut!",
        translation: "(Mieszkam od dawna w tym mieście - znam je dobrze!)",
        options: ["seit langem", "vor langem", "in langem", "nach langem"],
        correct: "seit langem",
        explanation: "Wyrażenie 'seit langem' (od dawna) używa 'seit' z celownikiem dla długiego trwającego okresu. Nijaki 'langem' deklinowane. Znajomość miasta przez lata. Forma 'seit langem' mniej konkretna niż 'seit zehn Jahren' - podkreśla DŁUGOŚĆ nie precyzyjną liczbę, emfaza na doświadczeniu."
      },
      {
        id: "time_expr_9",
        question: "_____ werden wir die Ergebnisse bekommen hoffentlich schnell.",
        translation: "(Najwyżej za tydzień otrzymamy wyniki miejmy nadzieję szybko)",
        options: ["Spätestens in einer Woche", "Frühestens in einer Woche", "Seit einer Woche", "Vor einer Woche"],
        correct: "Spätestens in einer Woche",
        explanation: "Wyrażenie 'spätestens in' (najpóźniej za/najwyżej za) określa MAKSYMALNY czas oczekiwania. Uspokojenie przez termin. 'Spätestens' (najpóźniej) z przyszłym czasem. Oczekiwanie wyników. Forma daje górną granicę - może być wcześniej ale NIE później, to gwarancja maksymalnego czasu."
      },
      {
        id: "time_expr_10",
        question: "Er ist _____ angekommen - wir haben lange gewartet!",
        translation: "(Dopiero teraz dotarł - długo czekaliśmy!)",
        options: ["erst jetzt", "schon jetzt", "nur jetzt", "auch jetzt"],
        correct: "erst jetzt",
        explanation: "Wyrażenie 'erst jetzt' (dopiero teraz) pokazuje że coś nastąpiło PÓŹNIEJ niż oczekiwano. Opóźnienie frustrujące. 'Erst' minimalizuje czas - 'dopiero' znaczy mniej niż powinno. Połączenie frustracji z ulgą. Forma wyraża że czekanie było dłuższe niż komfortowe - 'erst' podkreśla że to minimum akceptowalnego czasu."
      },
      {
        id: "time_expr_11",
        question: "Ich arbeite hier _____ - noch ganz frisch neu!",
        translation: "(Pracuję tu od niedawna - jeszcze całkiem świeżo!)",
        options: ["seit kurzem", "vor kurzem", "in kurzem", "nach kurzem"],
        correct: "seit kurzem",
        explanation: "Wyrażenie 'seit kurzem' (od niedawna) używa 'seit' dla TRWAJĄCEGO krótkiego okresu. Nijaki 'kurzem' celownik. Nowy w pracy. Początek zatrudnienia. 'Seit kurzem' pokazuje że jesteś w trakcie adaptacji - nie minęło dużo czasu od rozpoczęcia więc wciąż uczysz się i przyzwyczajasz."
      },
      {
        id: "time_expr_12",
        question: "_____ können wir mit dem Projekt beginnen endlich starten!",
        translation: "(Od jutra możemy zacząć z projektem w końcu!)",
        options: ["Ab morgen", "Seit morgen", "Vor morgen", "Nach morgen"],
        correct: "Ab morgen",
        explanation: "Wyrażenie 'ab morgen' (od jutra) używa 'ab' dla PUNKTU STARTOWEGO w przyszłości. Od tego momentu naprzód. Biernik 'morgen' nieodmienny. Początek projektu. 'Ab' wskazuje że od tego punktu coś będzie kontynuowane - nie jednorazowe jutro tylko od jutra i dalej."
      },
      {
        id: "time_expr_13",
        question: "Wir bleiben _____ hier - dann fahren wir nach Hause.",
        translation: "(Zostajemy tu do wieczora - potem jedziemy do domu)",
        options: ["bis zum Abend", "seit dem Abend", "vor dem Abend", "nach dem Abend"],
        correct: "bis zum Abend",
        explanation: "Wyrażenie 'bis zum Abend' (do wieczora) używa 'bis' plus 'zu' z celownikiem dla KOŃCOWEGO punktu. Męski 'Abend' w celowniku. Planowanie powrotu. Forma 'bis zum' pokazuje limit czasowy - zostajecie AŻ DO tego momentu ale nie dłużej, jasna granica planów."
      },
      {
        id: "time_expr_14",
        question: "Sie kommt _____ zu spät - immer unpünktlich leider!",
        translation: "(Przychodzi za każdym razem za późno - zawsze niepunktualna!)",
        options: ["jedes Mal", "jeden Mal", "jeder Mal", "jedes Males"],
        correct: "jedes Mal",
        explanation: "Wyrażenie 'jedes Mal' (za każdym razem) używa nijakiego 'Mal' (raz) z 'jedes'. Biernik jako przysłówek czasu. Chroniczna niepunktualność. Forma 'jedes Mal' podkreśla REGULARNOŚĆ problemu - nie jednorazowy wypadek tylko powtarzający się wzór, frustrujący dla czekających."
      },
      {
        id: "time_expr_15",
        question: "_____ sollten wir uns öfter treffen - zu selten jetzt!",
        translation: "(W przyszłości powinniśmy się częściej spotykać - za rzadko teraz!)",
        options: ["In Zukunft", "Zur Zukunft", "An Zukunft", "Von Zukunft"],
        correct: "In Zukunft",
        explanation: "Wyrażenie 'in Zukunft' (w przyszłości) używa 'in' z celownikiem dla ogólnej przyszłości. Żeński 'Zukunft' bez rodzajnika. Postanowienie poprawy. Forma 'in Zukunft' odnosi się do czasu POCZĄWSZY OD TERAZ - nie konkretny moment tylko ogólny okres nadchodzący, otwarta ramka czasowa."
      }
    ]
  },

  quantity_expressions_complete: {
    name: "Wyrażenia ilościowe - kompletne",
    description: "Viel, wenig, einige, mehrere - wszystkie kwantyfikatory",
    icon: Scale,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "quant_1",
        question: "Ich habe _____ Freunde in dieser Stadt - ganz viele!",
        translation: "(Mam wielu przyjaciół w tym mieście - całkiem wielu!)",
        options: ["viele", "viel", "vieles", "vielen"],
        correct: "viele",
        explanation: "Kwantyfikator 'viele' (wielu/dużo) dla POLICZALNYCH rzeczowników mnoga - 'viele Freunde'. Biernik mnogi ale forma ta sama. Bogata sieć społeczna. Różnica: 'viel' dla niepoliczalnych (viel Wasser), 'viele' dla policzalnych (viele Freunde) - ważne rozróżnienie w niemieckim."
      },
      {
        id: "quant_2",
        question: "Wir haben _____ Zeit für dieses Projekt - müssen schnell sein!",
        translation: "(Mamy mało czasu na ten projekt - musimy być szybcy!)",
        options: ["wenig", "wenige", "weniges", "wenigen"],
        correct: "wenig",
        explanation: "Kwantyfikator 'wenig' (mało) dla NIEPOLICZALNYCH rzeczowników - 'wenig Zeit' (mało czasu). Bez końcówki! Czas jako abstrakcja niepoliczalna. Presja terminowa. Forma 'wenig' nieodmienna gdy stoi przed niepoliczalnym - 'wenig Geld, wenig Hoffnung' zawsze prosta forma."
      },
      {
        id: "quant_3",
        question: "Er hat _____ gute Ideen für die Verbesserung vorgeschlagen.",
        translation: "(Zaproponował kilka dobrych pomysłów do poprawy)",
        options: ["einige", "einig", "einiges", "einigen"],
        correct: "einige",
        explanation: "Kwantyfikator 'einige' (kilka/niektóre) dla policzalnych mnoga - 'einige Ideen'. Biernik mnogi. Liczba nieokreślona ale więcej niż dwa. Wartościowe sugestie. Forma 'einige' pośrednia między 'wenige' (mało) a 'viele' (dużo) - sugeruje umiarkowaną ale znaczącą ilość."
      },
      {
        id: "quant_4",
        question: "Ich brauche noch _____ Informationen vor der Entscheidung bitte.",
        translation: "(Potrzebuję jeszcze więcej informacji przed decyzją proszę)",
        options: ["mehr", "viel", "viele", "mehre"],
        correct: "mehr",
        explanation: "Komparatyw 'mehr' (więcej) NIE odmienia się! 'Mehr Informationen' bez dodatkowych końcówek. Uniwersalna forma dla policzalnych i niepoliczalnych. Potrzeba danych. Nieodmienność 'mehr' ułatwia - działa z wszystkim: 'mehr Zeit, mehr Geld, mehr Freunde' zawsze ta sama prosta forma."
      },
      {
        id: "quant_5",
        question: "Sie hat _____ interessante Bücher in ihrer Bibliothek zu Hause.",
        translation: "(Ma liczne ciekawe książki w swojej bibliotece w domu)",
        options: ["zahlreiche", "zahlreich", "zahlreiches", "zahlreichen"],
        correct: "zahlreiche",
        explanation: "Kwantyfikator 'zahlreiche' (liczne) dla policzalnych - 'zahlreiche Bücher'. Biernik mnogi końcówka -e. Bardziej formalny niż 'viele'. Bogata kolekcja książek. Przymiotnik 'zahlreich' jako kwantyfikator deklinuje się normalnie - końcówka -e w bierniku mnogim po zerowym rodzajniku."
      },
      {
        id: "quant_6",
        question: "Es gibt _____ zu tun vor der Reise - viel Vorbereitung!",
        translation: "(Jest wiele do zrobienia przed podróżą - dużo przygotowań!)",
        options: ["viel", "viele", "vieles", "vielen"],
        correct: "viel",
        explanation: "Abstrakcyjne 'viel zu tun' (wiele do zrobienia) używa 'viel' bez końcówki. Niepoliczalna ilość zadań. Bezokolicznik 'zu tun' jako obiekt. Przygotowania podróżne czasochłonne. Forma 'viel' z bezokolicznikiem tworzy abstrakcyjną koncepcję pracy - nie konkretne zadania tylko ogólna ilość wysiłku."
      },
      {
        id: "quant_7",
        question: "Ich habe nur _____ Fehler in der Prüfung gemacht - sehr gut!",
        translation: "(Zrobiłem tylko kilka błędów na egzaminie - bardzo dobrze!)",
        options: ["wenige", "wenig", "weniges", "wenigen"],
        correct: "wenige",
        explanation: "Kwantyfikator 'wenige' (kilka/mało) dla POLICZALNYCH mnoga - 'wenige Fehler'. Minimalna liczba błędów. Biernik mnogi. Satysfakcja z wyniku. Różnica: 'wenig' niepoliczalne, 'wenige' policzalne - 'wenige Fehler' (policzalne błędy) vs 'wenig Zeit' (niepoliczalny czas)."
      },
      {
        id: "quant_8",
        question: "Er hat _____ Geduld mit schwierigen Kunden - bewundernswert!",
        translation: "(Ma nieskończoną cierpliwość z trudnymi klientami - godne podziwu!)",
        options: ["unendliche", "unendlich", "unendliches", "unendlichen"],
        correct: "unendliche",
        explanation: "Przymiotnik 'unendlich' (nieskończony) jako kwantyfikator - 'unendliche Geduld'. Żeński biernik końcówka -e. Metaforyczna nieskończoność. Cierpliwość w obsłudze. Forma z końcówką bo to przymiotnik nie czysty kwantyfikator - 'unendliche' deklinuje się normalnie pokazując przypadek."
      },
      {
        id: "quant_9",
        question: "Wir haben _____ Möglichkeiten zur Auswahl - können wählen!",
        translation: "(Mamy różne możliwości do wyboru - możemy wybrać!)",
        options: ["verschiedene", "verschieden", "verschiedenes", "verschiedenen"],
        correct: "verschiedene",
        explanation: "Przymiotnik 'verschieden' (różny) jako kwantyfikator mnogi - 'verschiedene Möglichkeiten'. Biernik mnogi -e. Różnorodność opcji. Mnogość wyborów. Forma 'verschiedene' nie tylko mówi ILE (więcej niż jeden) ale TEŻ że są RÓŻNE - jakościowy aspekt ilości."
      },
      {
        id: "quant_10",
        question: "Ich habe _____ davon verstanden - war zu kompliziert!",
        translation: "(Nic z tego nie zrozumiałem - było za skomplikowane!)",
        options: ["nichts", "kein", "keine", "keinen"],
        correct: "nichts",
        explanation: "Zaimek kwantyfikujący 'nichts' (nic) dla kompletnej negacji rzeczy. Nie odmienia się! 'Nichts verstanden' (nic nie zrozumiał). Przyznanie niezrozumienia. Forma 'nichts' najsilniejsza negacja ilości - zero, kompletny brak, silniejsze niż 'wenig' (mało) czy 'kaum etwas' (ledwo coś)."
      },
      {
        id: "quant_11",
        question: "Sie hat _____ Erfahrung in diesem Bereich - ist Expertin!",
        translation: "(Ma dużo doświadczenia w tej dziedzinie - jest ekspertką!)",
        options: ["viel", "viele", "vieles", "vielen"],
        correct: "viel",
        explanation: "Niepoliczalne 'Erfahrung' (doświadczenie) wymaga 'viel' - 'viel Erfahrung'. Bez końcówki! Ekspertyza bazująca na latach. Kwalifikacje zawodowe. Forma 'viel' dla abstrakcyjnych rzeczowników - doświadczenie nie może być policzone sztuk ami tylko mierzone intensywnością lub czasem."
      },
      {
        id: "quant_12",
        question: "Es sind nur noch _____ Plätze frei - schnell buchen!",
        translation: "(Są tylko jeszcze pojedyncze miejsca wolne - szybko rezerwować!)",
        options: ["einzelne", "einzel", "einzelnes", "einzelnen"],
        correct: "einzelne",
        explanation: "Kwantyfikator 'einzelne' (pojedyncze/nieliczne) dla bardzo małej liczby policzalnych - 'einzelne Plätze'. Mnoga końcówka -e. Prawie wyprzedane. Pilność rezerwacji. Forma 'einzelne' sugeruje że są izolowane sztuki - bardziej dramatyczne niż 'wenige', podkreśla rzadkość dostępności."
      },
      {
        id: "quant_13",
        question: "Ich habe _____ von dem Kuchen gegessen - war so lecker!",
        translation: "(Zjadłem całość tego ciasta - było takie pyszne!)",
        options: ["alles", "alle", "allen", "aller"],
        correct: "alles",
        explanation: "Zaimek 'alles' (wszystko/całość) dla niepoliczalnej całości - 'alles gegessen' (zjadł wszystko). Nie odmienia się jako zaimek. Kulinarna przyjemność. Forma 'alles' wyraża kompletność - nic nie zostało, totalna konsumpcja, często używane z jedzeniem dla podkreślenia jak było pyszne."
      },
      {
        id: "quant_14",
        question: "_____ haben die Prüfung bestanden - großartiges Ergebnis!",
        translation: "(Wszyscy zdali egzamin - wspaniały wynik!)",
        options: ["Alle", "Alles", "Allen", "Aller"],
        correct: "Alle",
        explanation: "Zaimek 'alle' (wszyscy) dla policzalnych osób mnoga - 'alle haben bestanden'. Mianownik mnogi jako podmiot. Sukces całej grupy. Nie odmienia się dodatkowo. 'Alle' wyraża absolutną inkluzję - każda pojedyncza osoba, nikt nie wypadł, podkreśla kolektywny sukces bez wyjątków."
      },
      {
        id: "quant_15",
        question: "Ich habe _____ Hoffnung aufgegeben - ist aussichtslos komplett.",
        translation: "(Straciłem wszelką nadzieję - jest beznadziejne kompletnie)",
        options: ["jede", "jedes", "jeden", "jeder"],
        correct: "jede",
        explanation: "Kwantyfikator 'jede' (każda/wszelka) dla żeńskiego pojedynczego - 'jede Hoffnung' (wszelką nadzieję). Biernik żeński końcówka -e. Totalna rezygnacja. Forma 'jede' w kontekście utraty oznacza absolutność - NIE POZOSTAŁA żadna nadzieja, kompletna desperacja wyrażona przez 'jede'."
      }
    ]
  },

  conditional_clauses_inversions: {
    name: "Zdania warunkowe z inwersją",
    description: "Hätte ich Zeit, würde ich... - warunek bez wenn",
    icon: Repeat,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "cond_inv_1",
        question: "_____ ich mehr Zeit, würde ich öfter Sport treiben regelmäßig.",
        translation: "(Gdybym miał więcej czasu, częściej uprawiałbym sport regularnie)",
        options: ["Hätte", "Wenn hätte", "Wäre", "Habe"],
        correct: "Hätte",
        explanation: "Warunek nierealny BEZ 'wenn' - Konjunktiv na początku tworzy inwersję 'Hätte ich' (gdybym miał). To elegancka alternatywa dla 'wenn ich hätte'. Brak czasu na sport to powszechne. Wyrafinowana forma bez 'wenn' brzmi bardziej literacko - często w pisanej niemczyźnie, dodaje elegancji do warunku."
      },
      {
        id: "cond_inv_2",
        question: "_____ sie pünktlich gekommen, hätten wir den Zug erreicht.",
        translation: "(Gdyby przyszła punktualnie, zdążylibyśmy na pociąg)",
        options: ["Wäre", "Wenn wäre", "Hätte", "Ist"],
        correct: "Wäre",
        explanation: "Nierealny warunek przeszły bez 'wenn' - 'Wäre sie gekommen' (gdyby przyszła). Plusquamperfekt Konjunktiv z 'sein'. Spóźnienie kosztowało pociąg. Rezultat 'hätten erreicht'. Inwersja bez 'wenn' podkreśla żal - struktura emfatyczna pokazuje rozczarowanie bardziej niż zwykła forma z 'wenn'."
      },
      {
        id: "cond_inv_3",
        question: "_____ du mich gefragt, hätte ich dir geholfen sofort!",
        translation: "(Gdybyś mnie zapytał, pomógłbym ci natychmiast!)",
        options: ["Hättest", "Wenn hättest", "Wärst", "Hast"],
        correct: "Hättest",
        explanation: "Warunek przeszły bez 'wenn' - 'Hättest du gefragt' (gdybyś zapytał). Plusquamperfekt Konjunktiv. Żal że nie zapytał. Gotowość pomocy. Forma podkreśla że wystarczyło ZAPYTAĆ - inwersja bez 'wenn' czyni warunek bardziej bezpośrednim, niemal wyrzutem że prosta akcja nie została wykonana."
      },
      {
        id: "cond_inv_4",
        question: "_____ ich das vorher gewusst, wäre ich nicht gekommen!",
        translation: "(Gdybym to wcześniej wiedział, nie przyszedłbym!)",
        options: ["Hätte", "Wenn hätte", "Wäre", "Habe"],
        correct: "Hätte",
        explanation: "Klasyczny warunek nierealny przeszły - 'Hätte ich gewusst' (gdybym wiedział) bez 'wenn'. Plusquamperfekt Konjunktiv. Żal o braku wcześniejszej informacji. Inwersja podkreśla frustrację - forma BEZ 'wenn' silniejsza emocjonalnie, wyraża że wiedza zmieniłaby wszystko."
      },
      {
        id: "cond_inv_5",
        question: "_____ er fleißiger gelernt, hätte er sicher bestanden die Prüfung.",
        translation: "(Gdyby pilniej się uczył, na pewno zdałby egzamin)",
        options: ["Hätte", "Wenn hätte", "Wäre", "Hat"],
        correct: "Hätte",
        explanation: "Warunek o nauce - 'Hätte er gelernt' (gdyby uczył się) bez 'wenn'. NIE uczył się więc NIE zdał. Analiza porażki. Komparatyw 'fleißiger' (pilniej) pokazuje że pewien wysiłek był ale niewystarczający. Forma bez 'wenn' czyni ocenę bardziej ostrą - to nie łagodna spekulacja tylko wyraźny wniosek o przyczynie."
      },
      {
        id: "cond_inv_6",
        question: "_____ das Wetter besser, könnten wir draußen essen schön.",
        translation: "(Gdyby pogoda była lepsza, moglibyśmy jeść na zewnątrz przyjemnie)",
        options: ["Wäre", "Wenn wäre", "Hätte", "Ist"],
        correct: "Wäre",
        explanation: "Warunek o pogodzie - 'Wäre das Wetter besser' (gdyby była lepsza) bez 'wenn'. Konjunktiv od 'sein'. Pogoda decyduje o planach. Rezultat z modalnym 'könnten'. Forma bez 'wenn' nadaje nostalgii - prawie jak marzenie o lepszej sytuacji, bardziej poetycka niż praktyczna forma z 'wenn'."
      },
      {
        id: "cond_inv_7",
        question: "_____ sie nicht so beschäftigt, würde sie uns besuchen öfter.",
        translation: "(Gdyby nie była tak zajęta, odwiedzałaby nas częściej)",
        options: ["Wäre", "Wenn wäre", "Hätte", "Ist"],
        correct: "Wäre",
        explanation: "Warunek z negacją - 'Wäre sie nicht beschäftigt' (gdyby nie była zajęta). Przymiotnik 'beschäftigt' po 'sein'. Zajętość uniemożliwia wizyty. Forma wyraża tęsknotę - inwersja bez 'wenn' brzmi jak westchnienie, żal że okoliczności uniemożliwiają częstsze spotkania."
      },
      {
        id: "cond_inv_8",
        question: "_____ ich reich, würde ich um die Welt reisen definitiv!",
        translation: "(Gdybym był bogaty, podróżowałbym dookoła świata na pewno!)",
        options: ["Wäre", "Wenn wäre", "Hätte", "Bin"],
        correct: "Wäre",
        explanation: "Klasyczne marzenie - 'Wäre ich reich' (gdybym był bogaty) bez 'wenn'. Konjunktiv od 'sein'. Fantazje o bogactwie uniwersalne. Rezultat z 'würde reisen'. Forma bez 'wenn' nadaje marzeniu poetyckości - bardziej jak fantazja niż praktyczne planowanie, romantyczna wizja alternatywnego życia."
      },
      {
        id: "cond_inv_9",
        question: "_____ du früher Bescheid gesagt, hätte ich mir Zeit genommen!",
        translation: "(Gdybyś wcześniej dał znać, znalazłbym sobie czas!)",
        options: ["Hättest", "Wenn hättest", "Wärst", "Hast"],
        correct: "Hättest",
        explanation: "Warunek przeszły - 'Hättest du gesagt' (gdybyś powiedział) bez 'wenn'. Rozdzielny 'Bescheid sagen'. Żal o braku wcześniejszej informacji. Gotowość do pomocy. Forma podkreśla że WYSTARCZYŁO poinformować - inwersja czyni wyrzut subtelniejszym ale wyraźnym, pokazuje że chęć była."
      },
      {
        id: "cond_inv_10",
        question: "_____ ich du, würde ich das sofort ändern ohne Zögern!",
        translation: "(Gdybym był tobą, zmieniłbym to natychmiast bez wahania!)",
        options: ["Wäre", "Wenn wäre", "Hätte", "Bin"],
        correct: "Wäre",
        explanation: "Idiomatyczna rada 'Wäre ich du' (gdybym był tobą) bez 'wenn'. Hipotetyczne stawianie się w czyjej sytuacji. Rezultat z 'würde ändern'. Stanowcza opinia. Forma bez 'wenn' w radach brzmi bardziej bezpośrednio - to nie łagodna sugestia tylko silna rekomendacja co byś zrobił."
      },
      {
        id: "cond_inv_11",
        question: "_____ er den Wecker gestellt, wäre er pünktlich aufgewacht!",
        translation: "(Gdyby nastawił budzik, obudziłby się punktualnie!)",
        options: ["Hätte", "Wenn hätte", "Wäre", "Hat"],
        correct: "Hätte",
        explanation: "Warunek o zapomnianym działaniu - 'Hätte er gestellt' (gdyby nastawił) bez 'wenn'. NIE nastawił więc się spóźnił. Imiesłów 'gestellt' w warunku. Rezultat 'wäre aufgewacht'. Forma wyraża oczywistość związku - nastawienie = punktualność, brak tego = spóźnienie, prosta przyczynowość podkreślona inwersją."
      },
      {
        id: "cond_inv_12",
        question: "_____ sie öfter, würde sie besser Deutsch sprechen können.",
        translation: "(Gdyby ćwiczyła częściej, mogłaby lepiej mówić po niemiecku)",
        options: ["Übte", "Wenn übte", "Hätte geübt", "Übt"],
        correct: "Übte",
        explanation: "Konjunktiv II od 'üben' to 'übte' - 'Übte sie öfter' (gdyby ćwiczyła częściej) bez 'wenn'. Brak praktyki hamuje postęp. Komparatyw 'besser' w rezultacie. Forma Konjunktiv II bezpośrednio od czasownika (nie przez 'würde') brzmi bardziej elegancko - szczególnie dla częstych czasowników warto znać formy."
      },
      {
        id: "cond_inv_13",
        question: "_____ wir uns beeilt, hätten wir den Bus nicht verpasst!",
        translation: "(Gdybyśmy się pospieszyli, nie przegapilibyśmy autobusu!)",
        options: ["Hätten", "Wenn hätten", "Wären", "Haben"],
        correct: "Hätten",
        explanation: "Warunek o działaniu - 'Hätten wir uns beeilt' (gdybyśmy się pospieszyli) bez 'wenn'. Zwrotny czasownik w Plusquamperfekt Konjunktiv. Spóźnienie przez powolność. Forma wyraża że proste działanie (pośpiech) zapobiegłoby problemowi - inwersja podkreśla prostotę rozwiązania które nie zostało zastosowane."
      },
      {
        id: "cond_inv_14",
        question: "_____ es möglich, würde ich sofort umziehen in eine andere Stadt.",
        translation: "(Gdyby to było możliwe, przeprowadziłbym się natychmiast do innego miasta)",
        options: ["Wäre", "Wenn wäre", "Hätte", "Ist"],
        correct: "Wäre",
        explanation: "Warunek o możliwości - 'Wäre es möglich' (gdyby było możliwe) bez 'wenn'. Bezosobowe 'es' jako podmiot. Pragnienie zmiany miejsca. Rezultat natychmiastowy. Forma wyraża marzenie o ucieczce - inwersja bez 'wenn' nadaje desperacji, pokazuje silne pragnienie zmiany mimo niemożliwości."
      },
      {
        id: "cond_inv_15",
        question: "_____ sie die Wahrheit gesagt, hätte ich anders reagiert!",
        translation: "(Gdyby powiedziała prawdę, zareagowałbym inaczej!)",
        options: ["Hätte", "Wenn hätte", "Wäre", "Hat"],
        correct: "Hätte",
        explanation: "Warunek o uczciwości - 'Hätte sie gesagt' (gdyby powiedziała) bez 'wenn'. Kłamstwo zmieniło reakcję. Imiesłów 'gesagt' w warunku. Rezultat 'hätte reagiert'. Forma wyraża rozczarowanie - inwersja podkreśla że szczerość zmieniłaby wszystko, brak prawdy był kluczowym błędem."
      }
    ]
  }
};

export default part26Categories;
/**
 * POLISH → GERMAN GRAMMAR - PART 5
 * 4 kategorie, 15 pytań każda - Zaawansowane formy
 */

import { Wand2, Shield, Users, Link } from "lucide-react";

export const part5Categories = {
  konjunktiv_subjunctive: {
    name: "Konjunktiv I i II (tryb łączący)",
    description: "Er sagte, er sei..., Ich wäre, hätte, würde",
    icon: Wand2,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "konj_1",
        question: "Er sagte, er _____ morgen keine Zeit für das Meeting.",
        translation: "(Powiedział, że nie ma jutro czasu na spotkanie)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe' to Konjunktiv I dla mowy zależnej! Relacja cudzych słów używa Konjunktiv I - 'er habe' (nie 'er hat'). To formalna relacja słów. W gazetach i formalnych raportach używa się Konjunktiv I aby pokazać że to czyjeś słowa, nie fakt. Dystansuje reportera od treści."
      },
      {
        id: "konj_2",
        question: "Wenn ich reich _____, würde ich um die Welt reisen ausgiebig.",
        translation: "(Gdybym był bogaty, podróżowałbym po świecie obszernie)",
        options: ["wäre", "bin", "sei", "ware"],
        correct: "wäre",
        explanation: "Forma 'wäre' to Konjunktiv II dla warunku! Hipotetyczne 'gdybym był' - nierzeczywisty warunek. To o marzeniach - wyobrażanie sobie bogactwa. Konjunktiv II wyraża sytuacje nierzeczywiste - 'wäre' dla 'być' w trybie warunkowym. Pokazuje że to tylko wyobraźnia, nie rzeczywistość."
      },
      {
        id: "konj_3",
        question: "Sie sagte, sie _____ gestern krank gewesen und zu Hause geblieben.",
        translation: "(Powiedziała, że była wczoraj chora i została w domu)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei gewesen' to Konjunktiv I Perfect! Relacja przeszłości - formalna mowa zależna. To relacjonowanie nieobecności. Konjunktiv I Perfect: 'sei' lub 'habe' plus imiesłów dla przeszłych wydarzeń w mowie zależnej. Formalne raportowanie przeszłych zdarzeń."
      },
      {
        id: "konj_4",
        question: "Ich _____ dir gerne geholfen, aber ich hatte selbst keine Zeit.",
        translation: "(Chętnie bym ci pomógł, ale sam nie miałem czasu)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Forma 'hätte geholfen' to Konjunktiv II Perfect! Pomógłbym był - przeszły tryb nierzeczywisty. To o utraconej możliwości - żal o niemożność. Konjunktiv II w przeszłości wyraża co by się stało ale nie - 'hätte' plus imiesłów. Wyrażanie przeszłych niezrealizowanych możliwości."
      },
      {
        id: "konj_5",
        question: "Er behauptet, er _____ nichts von dem Vorfall gewusst vorher.",
        translation: "(Twierdzi, że nic nie wiedział o incydencie wcześniej)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe gewusst' Konjunktiv I dla twierdzeń! Relacja jego zapewnienia - dystansowanie się. To o zaprzeczaniu - twierdzenie o niewiedzy. Konjunktiv I pokazuje że to JEGO twierdzenie nie zweryfikowany fakt - reporter dystansuje się. Używane dla pokazania źródła stwierdzenia."
      },
      {
        id: "konj_6",
        question: "_____ ich du wäre, würde ich das nicht tun - zu gefährlich!",
        translation: "(Gdybym był tobą, nie robiłbym tego - zbyt niebezpieczne!)",
        options: ["Wenn", "Als", "Wann", "Ob"],
        correct: "Wenn",
        explanation: "Konstrukcja 'wenn ich du wäre' to klasyczny hipotetyczny! Gdybym był tobą - udzielanie rady. To rada - wyobrażanie sobie bycia inną osobą. Utrwalone wyrażenie używające Konjunktiv II - 'wäre' dla nierzeczywistego warunku. Perspektywna struktura rady - stawianie się w czyichś butach."
      },
      {
        id: "konj_7",
        question: "Die Zeitung berichtet, der Minister _____ zurückgetreten von seinem Amt.",
        translation: "(Gazeta donosi, że minister zrezygnował ze swojego urzędu)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei zurückgetreten' Konjunktiv I w wiadomościach! Media używają do relacjonowania - nie potwierdzania. To dziennikarska neutralność. Gazety używają Konjunktiv I aby pokazać że to relacjonowana informacja - dystans od weryfikacji. Profesjonalny standard dziennikarstwa."
      },
      {
        id: "konj_8",
        question: "Es _____ besser, wenn du früher Bescheid gegeben hättest vorher.",
        translation: "(Byłoby lepiej, gdybyś wcześniej powiedział z wyprzedzeniem)",
        options: ["wäre", "ist", "sei", "war"],
        correct: "wäre",
        explanation: "Forma 'wäre besser' hipotetyczna przeszłość! Byłoby lepiej - krytyka. To o utraconej komunikacji - powinieneś był poinformować. Konjunktiv II dla krytykowania przeszłości - pokazuje że nie było lepiej bo nie poinformował. Przeszły warunkowy dla tego co powinno było się stać."
      },
      {
        id: "konj_9",
        question: "Sie sagte, sie _____ morgen um 10 Uhr im Büro ankommen.",
        translation: "(Powiedziała, że przyjdzie jutro o 10 do biura)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde ankommen' Konjunktiv I przyszły! Relacjonowany przyszły plan - formalnie. To relacjonowanie planów. Konjunktiv I przyszły: 'werde' plus bezokolicznik dla relacjonowanych przyszłych zamiarów. Formalne raportowanie przyszłych zamierzeń."
      },
      {
        id: "konj_10",
        question: "_____ du mehr gelernt hättest, hättest du die Prüfung bestanden sicher.",
        translation: "(Gdybyś więcej się uczył, zdałbyś egzamin na pewno)",
        options: ["Wenn", "Als", "Wann", "Ob"],
        correct: "Wenn",
        explanation: "Konstrukcja 'wenn' przeszły nierzeczywisty warunek! Podwójne 'hättest' - warunek i rezultat. To o żalu - niewystarczająca nauka powodująca porażkę. Przeszły hipotetyczny: 'wenn' plus Plusquamperfekt Konjunktiv - 'hättest gelernt, hättest bestanden'. Pokazuje przeszły nierzeczywisty scenariusz."
      },
      {
        id: "konj_11",
        question: "Man sagte mir, dass das Restaurant sehr gut _____ und preiswert.",
        translation: "(Powiedziano mi, że restauracja jest bardzo dobra i niedroga)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei' w relacjonowanej rekomendacji! Czyjaś opinia relacjonowana formalnie. To o rekomendacji - przekazywanie rady. Konjunktiv I pokazuje że to nie było osobiste doświadczenie ale czyjeś twierdzenie - marker plotki. Wskaźnik informacji z drugiej ręki."
      },
      {
        id: "konj_12",
        question: "_____ es nicht so teuer wäre, würde ich es sofort kaufen!",
        translation: "(Gdyby to nie było tak drogie, kupiłbym to natychmiast!)",
        options: ["Wenn", "Als", "Wann", "Ob"],
        correct: "Wenn",
        explanation: "Konstrukcja 'wenn' obecny nierzeczywisty! Cena zbyt wysoka (rzeczywistość) zapobiega zakupowi (pragnienie). To o ograniczeniach finansowych - życzenie zablokowane przez koszt. Konjunktiv II w teraźniejszości: 'wenn...wäre' (warunek) plus 'würde kaufen' (rezultat). Obecna hipotetyczna sytuacja."
      },
      {
        id: "konj_13",
        question: "Der Zeuge behauptete, er _____ nichts Verdächtiges gesehen an dem Abend.",
        translation: "(Świadek twierdził, że nic podejrzanego nie widział tego wieczoru)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe gesehen' zeznanie świadka w Konjunktiv I! Relacja prawna lub formalna - zeznanie. To o zeznaniu - twierdzenie że nie widział. Konjunktiv I w kontekstach prawnych dystansuje reportera od twierdzenia - pokazuje że to twierdzenie świadka. Konwencja raportowania sądowego."
      },
      {
        id: "konj_14",
        question: "_____ ich nur mehr Geld hätte! Dann könnte ich reisen.",
        translation: "(Gdybym tylko miał więcej pieniędzy! Wtedy mógłbym podróżować)",
        options: ["Wenn", "Als", "Wann", "Ob"],
        correct: "Wenn",
        explanation: "Zdanie życzeniowe z 'wenn'! Hipotetyczne pragnienie - nierzeczywista teraźniejszość. To o frustracji finansowej - brak pieniędzy ograniczający. Życzenie Konjunktiv II: 'Wenn ich...hätte!' wyraża niespełnione pragnienia. Zdania życzeniowe używają Konjunktiv II - pokazuje że prawda jest odwrotna."
      },
      {
        id: "konj_15",
        question: "Sie teilte mit, sie _____ nächste Woche in Urlaub fahren.",
        translation: "(Poinformowała, że pojedzie w przyszłym tygodniu na urlop)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde fahren' relacjonowana przyszłość! Konjunktiv I dla formalnego ogłoszenia. To komunikat o planach. Oficjalne ogłoszenia używają Konjunktiv I dla przyszłych planów - 'werde' plus bezokolicznik. Protokół formalnej komunikacji."
      }
    ]
  },

  passive_voice_variations: {
    name: "Strona bierna - wariacje",
    description: "Werden-passive, sein-passive, von/durch",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "pass_var_1",
        question: "Das Haus _____ letztes Jahr von einer großen Firma gebaut.",
        translation: "(Dom został zbudowany w zeszłym roku przez dużą firmę)",
        options: ["wurde", "wird", "war", "ist"],
        correct: "wurde",
        explanation: "Forma 'wurde gebaut' to Präteritum strony biernej! Strona bierna procesu - 'werden' plus imiesłów pokazuje akcję. To o budowie - proces konstrukcji. Strona bierna z werden podkreśla akcję lub proces - 'wurde' (przeszły 'werden') plus 'gebaut'. Sprawca 'von Firma' pokazuje wykonawcę."
      },
      {
        id: "pass_var_2",
        question: "Die Tür ist schon _____ - du kannst nicht mehr rein.",
        translation: "(Drzwi są już zamknięte - nie możesz już wejść)",
        options: ["geschlossen", "schließen", "schließt", "schloss"],
        correct: "geschlossen",
        explanation: "Forma 'ist geschlossen' to strona bierna ze sein! Stan rezultatu - pokazanie wyniku zakończonej akcji. To o stanie. Strona bierna ze sein podkreśla REZULTAT nie proces - 'ist geschlossen' pokazuje obecny stan będący wynikiem przeszłej akcji. Statyczna strona bierna."
      },
      {
        id: "pass_var_3",
        question: "Der Brief wird _____ den Postboten morgen zugestellt werden.",
        translation: "(List zostanie dostarczony przez listonosza jutro)",
        options: ["von", "durch", "mit", "bei"],
        correct: "von",
        explanation: "Przyimek 'von' dla żywych sprawców! Listonosz (osoba) używa 'von'. To o dostawie - ludzki kurier. Sprawca w stronie biernej: 'von' dla ludzi lub zwierząt (wykonawca), 'durch' dla środków lub procesów. Listonosz jako osoba wymaga 'von' nie 'durch'."
      },
      {
        id: "pass_var_4",
        question: "Das Problem _____ durch bessere Kommunikation gelöst werden können.",
        translation: "(Problem może być rozwiązany przez lepszą komunikację)",
        options: ["kann", "können", "könnte", "konnte"],
        correct: "kann",
        explanation: "Forma 'kann gelöst werden' modalna strona bierna! Możliwość rozwiązania - modalny plus bierny bezokolicznik. To o możliwości - potencjalne rozwiązanie. Modalna strona bierna: modalny plus imiesłów plus 'werden' w bezokoliczniku. Przyimek 'durch' pokazuje środek (komunikacja) nie sprawcę."
      },
      {
        id: "pass_var_5",
        question: "Die Fenster sind weit _____ - es ist sehr warm hier drinnen.",
        translation: "(Okna są szeroko otwarte - jest bardzo ciepło tu w środku)",
        options: ["geöffnet", "öffnen", "öffnet", "öffnete"],
        correct: "geöffnet",
        explanation: "Forma 'sind geöffnet' strona bierna ze sein dla stanu! Obecny stan otwarcia okien - rezultat widoczny. To o wentylacji - wyjaśnienie ciepła. Strona bierna ze sein pokazuje wynikowy stan - 'geöffnet' opisuje obecny stan okien będący rezultatem otwarcia. Podkreśla stan nie akcję."
      },
      {
        id: "pass_var_6",
        question: "Der Unfall wurde _____ starken Nebel verursacht auf der Autobahn.",
        translation: "(Wypadek został spowodowany przez gęstą mgłę na autostradzie)",
        options: ["durch", "von", "mit", "bei"],
        correct: "durch",
        explanation: "Przyimek 'durch' dla przyczyn środowiskowych! Mgła (warunek) nie sprawca - 'durch'. To o przyczynie wypadku - czynnik pogodowy. Przyimek 'durch' używany dla środków, przyczyn, warunków - nie żywych sprawców. Mgła jako siła przyrody wymaga 'durch' nie 'von'."
      },
      {
        id: "pass_var_7",
        question: "Das Auto muss dringend _____ werden - es ist kaputt!",
        translation: "(Samochód musi być pilnie naprawiony - jest zepsuty!)",
        options: ["repariert", "reparieren", "repariert worden", "repariere"],
        correct: "repariert",
        explanation: "Forma 'muss repariert werden' modalna strona bierna konieczność! Pilna naprawa potrzebna - obowiązek. To o awarii - wymóg konserwacji. Struktura modalnej strony biernej: modalny plus imiesłów plus werden w bezokoliczniku. Samo 'repariert' wystarczy - 'werden' już obecny w strukturze."
      },
      {
        id: "pass_var_8",
        question: "Die Arbeit ist endlich _____ - wir können jetzt nach Hause gehen!",
        translation: "(Praca jest w końcu skończona - możemy teraz iść do domu!)",
        options: ["fertig", "fertigen", "fertig geworden", "fertigt"],
        correct: "fertig",
        explanation: "Forma 'ist fertig' używa przymiotnika nie imiesłowu! Stan ukończenia - praca zrobiona. To ulga - zadanie ukończone. Przymiotnik 'fertig' ze 'sein' powszechny dla pokazania stanu ukończenia - alternatywa do strony biernej ze sein. Idiomatyczne wyrażenie dla 'zrobione'."
      },
      {
        id: "pass_var_9",
        question: "Es _____ viel über dieses Thema in den Medien gesprochen aktuell.",
        translation: "(Dużo mówi się o tym temacie w mediach aktualnie)",
        options: ["wird", "ist", "war", "wurde"],
        correct: "wird",
        explanation: "Forma 'es wird gesprochen' bezosobowa strona bierna! Ogólne 'się mówi' - bez konkretnego sprawcy. To o dyskursie publicznym - dyskusja medialna. Bezosobowe 'es' w stronie biernej dla ogólnych akcji bez nazwanego sprawcy - 'es wird' plus imiesłów. Pokazuje aktywność bez skupienia na sprawcy."
      },
      {
        id: "pass_var_10",
        question: "Das Buch wurde _____ einen berühmten Autor geschrieben vor Jahren.",
        translation: "(Książka została napisana przez słynnego autora lata temu)",
        options: ["von", "durch", "mit", "bei"],
        correct: "von",
        explanation: "Forma 'von einem Autor' autor jako sprawca! Osoba tworząca używa 'von'. To o autorstwie - twórczy sprawca. Ludzcy twórcy zawsze 'von' - 'durch' byłoby dla procesu nie osoby. Autor jako żywy wykonawca wymaga 'von'."
      },
      {
        id: "pass_var_11",
        question: "Hier _____ nicht geraucht - es ist ein Nichtraucherbereich!",
        translation: "(Tutaj nie pali się - to jest strefa dla niepalących!)",
        options: ["wird", "ist", "war", "wurde"],
        correct: "wird",
        explanation: "Forma 'wird nicht geraucht' zakaz w stronie biernej! Zasady wyrażone bezosobowo - zakaz palenia. To o regulacjach - wyrażanie zakazów. Bezosobowa strona bierna dla zasad: 'es/hier wird' plus nie plus imiesłów. Stwierdzenia reguł bez osobowego podmiotu."
      },
      {
        id: "pass_var_12",
        question: "Die Haustür war fest _____, als ich nach Hause kam gestern.",
        translation: "(Drzwi wejściowe były mocno zamknięte, gdy przyszedłem do domu wczoraj)",
        options: ["verschlossen", "verschließen", "verschloss", "verschließt"],
        correct: "verschlossen",
        explanation: "Forma 'war verschlossen' przeszła strona bierna ze sein! Stan gdy przybyłem - zastałem zamknięte. To o odkrytym warunku - stan drzwi. Strona bierna ze sein w przeszłości: 'war' plus imiesłów opisuje jak rzeczy były - wynikowy stan w przeszłości. Znalezienie istniejącego warunku."
      },
      {
        id: "pass_var_13",
        question: "Das Dokument soll bis morgen _____ werden ohne Fehler.",
        translation: "(Dokument powinien być ukończony do jutra bez błędów)",
        options: ["fertiggestellt", "fertigstellen", "fertig", "stellt fertig"],
        correct: "fertiggestellt",
        explanation: "Forma 'soll fertiggestellt werden' modalna strona bierna obowiązek! Powinien być ukończony - termin. To o wymaganiu - ukończenie potrzebne. Modalny 'sollen' plus imiesłów plus 'werden' - oczekiwana akcja. Imiesłów czasownika rozdzielnego 'fertigstellen' to 'fertiggestellt'. Obowiązek dotrzymania terminu."
      },
      {
        id: "pass_var_14",
        question: "Die Nachricht wurde mir _____ E-Mail mitgeteilt schnell heute.",
        translation: "(Wiadomość została mi przekazana przez email szybko dzisiaj)",
        options: ["durch", "von", "mit", "per"],
        correct: "durch",
        explanation: "Forma 'durch E-Mail' metoda transmisji! Środek nie sprawca - 'durch'. To o metodzie komunikacji - kanał przekazu. Przyimek 'durch' dla mechanizmów, metod, instrumentów - email jako sposób nie żywy nadawca. Medium wymaga 'durch'."
      },
      {
        id: "pass_var_15",
        question: "Die Türen sind ab 8 Uhr morgens _____ für Besucher täglich.",
        translation: "(Drzwi są otwarte od 8 rano dla odwiedzających codziennie)",
        options: ["geöffnet", "öffnen", "öffnet", "öffnete"],
        correct: "geöffnet",
        explanation: "Forma 'sind geöffnet' stan godzin otwarcia! Obecny stan - regularnie utrzymywany. To godziny działalności - dostępność. Strona bierna ze sein dla regularnych stanów - 'geöffnet' pokazuje utrzymywany stan otwarcia. Wyrażenie habitualnego stanu - codzienna rutyna."
      }
    ]
  },

  reflexive_verbs_pronouns: {
    name: "Czasowniki zwrotne i zaimki",
    description: "Sich freuen, sich erinnern, Akkusativ vs Dativ",
    icon: Users,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "refl_1",
        question: "Ich freue _____ sehr auf den Urlaub nächste Woche am Meer!",
        translation: "(Cieszę się bardzo na urlop w przyszłym tygodniu nad morzem!)",
        options: ["mich", "mir", "sich", "dich"],
        correct: "mich",
        explanation: "Czasownik 'sich freuen' używa BIERNIKA! Forma 'mich' dla 'ich' - zwrotny Akkusativ. To o oczekiwaniu - ekscytacja urlopem. Większość niemieckich czasowników zwrotnych używa biernika zwrotnego - 'mich, dich, sich'. Standardowa forma dla prostych czasowników zwrotnych."
      },
      {
        id: "refl_2",
        question: "Ich wasche _____ die Hände vor dem Essen immer gründlich.",
        translation: "(Myję sobie ręce przed jedzeniem zawsze gruntownie)",
        options: ["mir", "mich", "sich", "dir"],
        correct: "mir",
        explanation: "Forma 'mir die Hände' używa CELOWNIKA gdy jest drugi obiekt! Myję (komu?) sobie (co?) ręce. To o higienie - części ciała z celownym zwrotnym. Gdy zwrotny plus część ciała, używasz celownika zwrotnego - 'mir' pokazuje że to TWOJE ręce. Logika: sobie (celownik) plus konkretna część (biernik)."
      },
      {
        id: "refl_3",
        question: "Erinnerst du _____ noch an unseren letzten Urlaub in Italien?",
        translation: "(Pamiętasz jeszcze nasz ostatni urlop we Włoszech?)",
        options: ["dich", "dir", "sich", "mich"],
        correct: "dich",
        explanation: "Czasownik 'sich erinnern AN' z biernikiem zwrotnym! Forma 'dich' dla 'du' - standardowy zwrotny. To o wspomnieniach - prośba o przypomnienie. Czasownik 'erinnern' wymaga 'sich' (biernik) plus 'an' - ustalony wzór. Biernik zwrotny dla większości czasowników zwrotnych."
      },
      {
        id: "refl_4",
        question: "Sie putzt _____ die Zähne dreimal täglich nach den Mahlzeiten.",
        translation: "(Myje sobie zęby trzy razy dziennie po posiłkach)",
        options: ["sich", "ihr", "ihnen", "sie"],
        correct: "sich",
        explanation: "Forma 'sich die Zähne' - celownik zwrotny trzecia osoba! Myje (komu?) sobie (co?) zęby. To rutyna higieny dentystycznej. Trzecia osoba zwrotna 'sich' w celowniku gdy część ciała następuje - pokazuje posiadanie. Zęby (biernik) plus sobie (celownik) struktura."
      },
      {
        id: "refl_5",
        question: "Wir müssen _____ beeilen - der Zug fährt gleich ab!",
        translation: "(Musimy się pospieszyć - pociąg zaraz odjeżdża!)",
        options: ["uns", "unser", "sich", "euch"],
        correct: "uns",
        explanation: "Forma 'uns beeilen' - zwrotny dla 'wir'! Biernik zwrotny - się pospieszyć. To o pilności - łapanie pociągu. Czasownik 'beeilen' zawsze zwrotny - 'uns' dla pierwszej osoby mnogiej. Czasownik z natury zwrotny - tylko forma zwrotna istnieje."
      },
      {
        id: "refl_6",
        question: "Ich ziehe _____ schnell um und dann können wir gehen zusammen.",
        translation: "(Przebiorę się szybko i wtedy możemy iść razem)",
        options: ["mich", "mir", "sich", "dich"],
        correct: "mich",
        explanation: "Forma 'mich umziehen' przebieranie się! Zwrotny biernik - prosta zwrotna akcja. To o przygotowaniu - ubieranie się. Czasownik 'umziehen' (przebrać się) używa biernika zwrotnego - 'mich' standardowo. Szybkie przygotowanie do wyjścia."
      },
      {
        id: "refl_7",
        question: "Kannst du _____ vorstellen, wie das Leben ohne Internet wäre?",
        translation: "(Czy możesz sobie wyobrazić, jak życie bez internetu byłoby?)",
        options: ["dir", "dich", "sich", "mir"],
        correct: "dir",
        explanation: "Forma 'dir vorstellen' używa CELOWNIKA! Czasownik 'sich vorstellen' (wyobrazić sobie) wymaga celownika. To myślenie hipotetyczne - wyobrażanie scenariusza. Niektóre czasowniki zwrotne używają celownika nie biernika - 'vorstellen' (wyobrazić) jeden z nich. Mentalna wizualizacja."
      },
      {
        id: "refl_8",
        question: "Er ärgert _____ über das schlechte Wetter am Wochenende sehr.",
        translation: "(Denerwuje się złą pogodą w weekend bardzo)",
        options: ["sich", "ihm", "ihn", "seiner"],
        correct: "sich",
        explanation: "Forma 'sich ärgern ÜBER' standardowy zwrotny! Biernik 'sich' dla trzeciej osoby. To o frustracji - denerwacja pogodą. Czasownik 'ärgern' zwrotny z biernikiem plus 'über' pokazuje przyczynę. Czasownik reakcji emocjonalnej - wyrażanie irytacji."
      },
      {
        id: "refl_9",
        question: "Ich habe _____ sehr über dein Geschenk gefreut - danke!",
        translation: "(Bardzo się ucieszyłem twoim prezentem - dziękuję!)",
        options: ["mich", "mir", "sich", "dich"],
        correct: "mich",
        explanation: "Forma 'habe mich gefreut' Perfect zwrotny! Przeszła radość - otrzymany prezent. To wdzięczność - wyrażanie przeszłej radości. Perfect z czasownikiem zwrotnym: haben plus zwrotny plus imiesłów - 'mich gefreut'. Zwrotny w Perfect idzie przed imiesłowem."
      },
      {
        id: "refl_10",
        question: "Setzt _____ bitte - das Essen ist gleich fertig und warm!",
        translation: "(Siadajcie proszę - jedzenie jest zaraz gotowe i ciepłe!)",
        options: ["euch", "sich", "uns", "ihnen"],
        correct: "euch",
        explanation: "Forma 'setzt euch' tryb rozkazujący zwrotny mnogi! Nieformalny rozkaz - siadać. To zaproszenie do kolacji - prośba o zajęcie miejsc. Nieformalny mnogi tryb rozkazujący: czasownik plus 'euch' zwrotny. Grzeczność goszczenia - kierowanie gości."
      },
      {
        id: "refl_11",
        question: "Sie interessiert _____ sehr für moderne Kunst und Kultur.",
        translation: "(Interesuje się bardzo nowoczesną sztuką i kulturą)",
        options: ["sich", "ihr", "sie", "ihnen"],
        correct: "sich",
        explanation: "Forma 'sich interessieren FÜR' wyrażanie pasji! Biernik 'sich' standardowy. To o hobby - osobiste zainteresowania. Zwrotny plus 'für' pokazuje tematy zainteresowania - 'sich' biernik typowy. Wyrażanie fascynacji."
      },
      {
        id: "refl_12",
        question: "Ich muss _____ noch die Haare waschen vor der Party schnell.",
        translation: "(Muszę sobie jeszcze umyć włosy przed imprezą szybko)",
        options: ["mir", "mich", "sich", "dir"],
        correct: "mir",
        explanation: "Forma 'mir die Haare' celownik zwrotny plus część ciała! Mycie (komu?) sobie (czego?) włosów. To pielęgnacja - rutyna przygotowania. Części ciała używają celownika zwrotnego pokazując posiadanie - 'mir' plus 'Haare'. Logika: sobie (posiadanie) plus część (obiekt)."
      },
      {
        id: "refl_13",
        question: "Wir haben _____ gut auf die Prüfung vorbereitet intensiv.",
        translation: "(Przygotowaliśmy się dobrze do egzaminu intensywnie)",
        options: ["uns", "unser", "sich", "euch"],
        correct: "uns",
        explanation: "Forma 'uns vorbereitet' Perfect zwrotny! Przeszłe przygotowanie - wysiłek nauki. To o gotowości - przygotowanie do egzaminu. Struktura Perfect zwrotny: haben plus zaimek zwrotny plus imiesłów plus 'auf'. Przygotowanie do testu."
      },
      {
        id: "refl_14",
        question: "Fühlst du _____ nicht gut heute? Du siehst blass aus!",
        translation: "(Nie czujesz się dobrze dzisiaj? Wyglądasz blado!)",
        options: ["dich", "dir", "sich", "mich"],
        correct: "dich",
        explanation: "Forma 'fühlst dich' zapytanie o zdrowie! Biernik zwrotny - stan samopoczucia. To troska - sprawdzanie samopoczucia. Czasownik 'sich fühlen' używa biernika - 'dich' dla 'du'. Pytanie o stan zdrowia - troskliwe zapytanie."
      },
      {
        id: "refl_15",
        question: "Bitte setzen Sie _____ - der Arzt kommt gleich zu Ihnen.",
        translation: "(Proszę usiąść - lekarz zaraz do Pana przyjdzie)",
        options: ["sich", "Sich", "Ihnen", "Sie"],
        correct: "sich",
        explanation: "Forma 'setzen Sie sich' formalny tryb rozkazujący! Uprzejmy rozkaz - oczekiwanie u lekarza. To formalna uprzejmość - gabinet lekarski. Formalny tryb rozkazujący: bezokolicznik plus Sie plus 'sich' zwrotny. Profesjonalna grzeczność - pełna szacunku instrukcja."
      }
    ]
  },

  relative_clauses_prepositions: {
    name: "Zdania względne z przyimkami",
    description: "Mit dem, an den, für die - zaimki względne",
    icon: Link,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "rel_prep_1",
        question: "Das ist der Mann, _____ dem ich gestern gesprochen habe lang.",
        translation: "(To jest mężczyzna, z którym rozmawiałem wczoraj długo)",
        options: ["mit", "bei", "zu", "von"],
        correct: "mit",
        explanation: "Forma 'mit dem' - czasownik 'sprechen MIT' wymaga celownika! Przyimek przed zaimkiem względnym. To o rozmowie - identyfikacja partnera rozmowy. Przyimek 'mit' przenosi się przed zaimek względny - 'mit dem' (celownik męski). Czasownik określa przypadek."
      },
      {
        id: "rel_prep_2",
        question: "Die Frau, _____ der ich das Geld gegeben habe, war sehr dankbar.",
        translation: "(Kobieta, której dałem pieniądze, była bardzo wdzięczna)",
        options: ["der", "die", "den", "dem"],
        correct: "der",
        explanation: "Forma 'der' to celownik żeński w zdaniu względnym! Czasownik 'geben' wymaga celownika - komu dałem. To o pomocy - finansowa pomoc. Zaimek względny musi pasować do przypadka wymaganego przez czasownik - 'der' (celownik żeński) bo 'geben' plus celownik. Podwójna funkcja: względny plus marker przypadka."
      },
      {
        id: "rel_prep_3",
        question: "Das Buch, _____ ich mich interessiere, ist leider ausverkauft.",
        translation: "(Książka, którą się interesuję, jest niestety wyprzedana)",
        options: ["für das", "für die", "das", "die"],
        correct: "für das",
        explanation: "Forma 'für das' - wzór czasownika 'interessieren FÜR'! Przyimek plus zaimek względny biernik. To o pożądanym przedmiocie - wyprzedana książka. Czasownik 'sich interessieren FÜR' wymaga przyimka - 'für' idzie przed zaimek względny (das - nijaki biernik). Utrwalona fraza czasownikowa."
      },
      {
        id: "rel_prep_4",
        question: "Der Freund, _____ den ich immer vertraue, hilft mir oft.",
        translation: "(Przyjaciel, któremu zawsze ufam, często mi pomaga)",
        options: ["auf", "an", "zu", "bei"],
        correct: "auf",
        explanation: "Forma 'auf den vertrauen' - czasownik 'vertrauen AUF' plus biernik! Przyimek przed zaimkiem względnym biernikiem. To o zaufaniu - niezawodny przyjaciel. Czasownik 'vertrauen auf' (liczyć na) wymaga 'auf' plus biernik - 'auf den' (męski biernik). Czasownik dyktuje przyimek i przypadek."
      },
      {
        id: "refl_5",
        question: "Das ist das Haus, _____ wir seit zehn Jahren wohnen glücklich.",
        translation: "(To jest dom, w którym mieszkamy od dziesięciu lat szczęśliwie)",
        options: ["in dem", "in das", "das", "dem"],
        correct: "in dem",
        explanation: "Forma 'in dem' lokalizacja względna! Czasownik 'wohnen IN' wymaga przyimka - celownik dla stałej lokalizacji. To o długotrwałym zamieszkaniu - opis domu. Zdania lokalizacyjne: 'in' plus celownik zaimka względnego (dem - nijaki). Przyimek miejsca przed względnym."
      },
      {
        id: "rel_prep_6",
        question: "Die Lehrerin, _____ der ich viel gelernt habe, ist jetzt pensioniert.",
        translation: "(Nauczycielka, od której dużo się nauczyłem, jest teraz na emeryturze)",
        options: ["von", "bei", "zu", "mit"],
        correct: "von",
        explanation: "Forma 'von der lernen' - czasownik 'lernen VON' źródło! Przyimek plus celownik żeński względny. To wdzięczność - uznanie dla nauczyciela. Źródło nauki używa 'von' - 'von der' (celownik żeński) wskazuje nauczycielkę jako źródło. Uznanie długu edukacyjnego."
      },
      {
        id: "rel_prep_7",
        question: "Das Thema, _____ das wir diskutieren, ist sehr wichtig aktuell.",
        translation: "(Temat, o którym dyskutujemy, jest bardzo ważny aktualnie)",
        options: ["über", "von", "für", "zu"],
        correct: "über",
        explanation: "Forma 'über das' - czasownik 'diskutieren ÜBER'! Dyskusja o temacie używa 'über' plus biernik. To o obecnej debacie - ważny temat. Czasownik 'diskutieren über' (dyskutować o) wymaga przyimka - 'über das' (nijaki biernik). Wskaźnik przedmiotu dyskusji."
      },
      {
        id: "rel_prep_8",
        question: "Die Stadt, _____ die ich oft denke, ist meine Heimatstadt.",
        translation: "(Miasto, o którym często myślę, jest moim rodzinnym miastem)",
        options: ["an", "auf", "über", "von"],
        correct: "an",
        explanation: "Forma 'an die denken' - czasownik 'denken AN'! Myśli o czymś używają 'an' plus biernik. To o nostalgii - wspomnienia rodzinnego miasta. Utrwalona fraza 'denken an' (myśleć o) - 'an die' (żeński biernik). Mentalne skupienie na miejscu."
      },
      {
        id: "rel_prep_9",
        question: "Der Kollege, _____ ich mich verlassen kann, ist im Urlaub leider.",
        translation: "(Kolega, na którego mogę polegać, jest niestety na urlopie)",
        options: ["auf den", "an den", "zu dem", "bei dem"],
        correct: "auf den",
        explanation: "Forma 'auf den' - czasownik 'sich verlassen AUF'! Zaufanie lub poleganie używa 'auf' plus biernik. To o niezawodności - niezawodny kolega nieobecny. Czasownik 'verlassen auf' (polegać na) wymaga przyimka - 'auf den' (męski biernik). Wyrażanie zależności."
      },
      {
        id: "rel_prep_10",
        question: "Das Problem, _____ wir lange gearbeitet haben, ist endlich gelöst!",
        translation: "(Problem, nad którym długo pracowaliśmy, jest w końcu rozwiązany!)",
        options: ["an dem", "auf das", "über das", "für das"],
        correct: "an dem",
        explanation: "Forma 'an dem arbeiten' - czasownik 'arbeiten AN'! Praca nad czymś używa 'an' plus celownik. To ulga - problem rozwiązany. Czasownik 'arbeiten an' (pracować nad) wymaga przyimka - 'an dem' (nijaki celownik). Wyrażenie skupienia na projekcie."
      },
      {
        id: "rel_prep_11",
        question: "Die Musik, _____ der ich mich entspanne, ist klassische Musik.",
        translation: "(Muzyka, przy której się relaksuję, to muzyka klasyczna)",
        options: ["bei", "mit", "zu", "von"],
        correct: "bei",
        explanation: "Forma 'bei der' - czasownik 'entspannen BEI'! Relaksowanie się przy lub podczas czegoś używa 'bei' plus celownik. To o relaksie - kojąca muzyka. Kontekst 'entspannen bei' wymaga 'bei' - 'bei der' (żeński celownik). Towarzyszenie dla relaksu."
      },
      {
        id: "rel_prep_12",
        question: "Der Artikel, _____ den ich gelesen habe, war sehr interessant.",
        translation: "(Artykuł, który przeczytałem, był bardzo interesujący)",
        options: ["den", "dem", "der", "des"],
        correct: "den",
        explanation: "Forma 'den' prosty biernik względny! Czasownik 'lesen' wymaga biernika - BEZ potrzebnego przyimka. To o czytaniu - recenzja artykułu. Obiekt bezpośredni względny - tylko zaimek w odpowiednim przypadku bez przyimka. Męski biernik 'den' wystarczający."
      },
      {
        id: "rel_prep_13",
        question: "Das Hotel, _____ wir übernachtet haben, war sehr komfortabel.",
        translation: "(Hotel, w którym nocowaliśmy, był bardzo komfortowy)",
        options: ["in dem", "in das", "das", "dem"],
        correct: "in dem",
        explanation: "Forma 'in dem übernachten' lokalizacja! Nocowanie W miejscu wymaga 'in' plus celownik. To wspomnienie podróży - zakwaterowanie. Czasowniki lokalizacyjne (übernachten, wohnen) używają 'in' plus celownik względny - 'in dem' (nijaki). Tymczasowe zamieszkanie."
      },
      {
        id: "rel_prep_14",
        question: "Die Firma, _____ die ich arbeite, ist sehr international und groß.",
        translation: "(Firma, dla której pracuję, jest bardzo międzynarodowa i duża)",
        options: ["für", "bei", "in", "zu"],
        correct: "für",
        explanation: "Forma 'für die arbeiten' zatrudnienie! Praca DLA firmy używa 'für' plus biernik. To opis pracy - identyfikacja pracodawcy. Czasownik 'arbeiten für' (pracować dla) wymaga przyimka - 'für die' (żeński biernik). Relacja zatrudnienia."
      },
      {
        id: "rel_prep_15",
        question: "Der Grund, _____ ich nicht gekommen bin, war ein Notfall.",
        translation: "(Powód, dla którego nie przyszedłem, był nagły wypadek)",
        options: ["aus dem", "für den", "wegen dem", "warum"],
        correct: "aus dem",
        explanation: "Forma 'aus dem Grund' wyrażanie powodu! Przyimek dla przyczyny - 'aus' plus celownik. To wyjaśnienie - uzasadnienie nieobecności. Zdania przyczynowe używają 'aus dem Grund' - przyimek plus celownik nijaki względny. Formalne wyrażenie przyczynowości - wyjaśnianie dlaczego."
      }
    ]
  }
};

export default part5Categories;
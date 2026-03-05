
/**
 * POLISH → GERMAN GRAMMAR - PART 25
 * 4 kategorie, 15 pytań każda
 */

import { Shuffle, Layers2, MessageSquare, Gauge } from "lucide-react";

export const part25Categories = {
  word_order_inversions: {
    name: "Szyku zdania - inwersje",
    description: "Zmiana szyku dla emfazy i stylu",
    icon: Shuffle,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "word_inv_1",
        question: "Gestern _____ ich meinen alten Freund getroffen zufällig.",
        translation: "(Wczoraj spotkałem mojego starego przyjaciela przypadkowo)",
        options: ["habe", "ich habe", "hat", "bin"],
        correct: "habe",
        explanation: "Gdy zdanie zaczyna się od przysłówka czasu 'gestern', czasownik musi być DRUGI (pozycja V2) - 'gestern habe ich'. Podmiot przesuwa się za czasownik. To inwersja. Niemiecki sztywno trzyma czasownik na drugiej pozycji. Rozpoczęcie od czasu daje emfazę - 'gestern' staje się najważniejszą informacją."
      },
      {
        id: "word_inv_2",
        question: "Morgen _____ wir sehr früh aufstehen für die Reise müssen.",
        translation: "(Jutro musimy bardzo wcześnie wstać na podróż)",
        options: ["müssen", "wir müssen", "muss", "werden"],
        correct: "müssen",
        explanation: "Rozpoczęcie od 'morgen' wymusza inwersję - czasownik modalny 'müssen' na drugiej pozycji, podmiot 'wir' za nim. Perfect V2. Bezokolicznik 'aufstehen' na końcu. Emfaza na czasie (jutro) przez pozycję początkową. Rozdzielny czasownik pozostaje na końcu mimo inwersji - sztywna reguła niemieckiego szyku."
      },
      {
        id: "word_inv_3",
        question: "In diesem Restaurant _____ man ausgezeichnet essen immer!",
        translation: "(W tej restauracji można zawsze wyśmienicie jeść!)",
        options: ["kann", "man kann", "könnt", "können"],
        correct: "kann",
        explanation: "Rozpoczęcie od frazy miejsca 'in diesem Restaurant' przenosi czasownik na pozycję 2 - 'kann man'. Bezosobowy podmiot 'man' po czasowniku. Rekomendacja restauracji. Frazy miejsca na początku zdania są powszechne - tworzą kontekst dla informacji, inwersja automatyczna."
      },
      {
        id: "word_inv_4",
        question: "Trotz des Regens _____ wir spazieren gegangen gestern mutig.",
        translation: "(Pomimo deszczu poszliśmy wczoraj na spacer odważnie)",
        options: ["sind", "wir sind", "haben", "waren"],
        correct: "sind",
        explanation: "Fraza z przyimkiem 'trotz des Regens' na początku wymusza inwersję - 'sind wir' (poszliśmy my). Perfect z 'sein' dla ruchu. Determinacja mimo złej pogody. Rozpoczęcie od warunku ('pomimo') daje emfazę - podkreśla że coś się stało MIMO przeszkody, to był świadomy wybór."
      },
      {
        id: "word_inv_5",
        question: "Leider _____ ich dir nicht helfen bei diesem Problem können.",
        translation: "(Niestety nie mogę ci pomóc przy tym problemie)",
        options: ["kann", "ich kann", "könnte", "können"],
        correct: "kann",
        explanation: "Przysłówek 'leider' (niestety) na początku wymaga inwersji - 'kann ich'. Negacja 'nicht' przed bezokolicznikiem. Przeprosiny za niemożność pomocy. Rozpoczęcie od 'leider' od razu sygnalizuje złą wiadomość - emocjonalny ton ustawiony przed faktami."
      },
      {
        id: "word_inv_6",
        question: "Deshalb _____ ich heute zu Hause geblieben müde krank.",
        translation: "(Dlatego zostałem dzisiaj w domu zmęczony chory)",
        options: ["bin", "ich bin", "habe", "war"],
        correct: "bin",
        explanation: "Spójnik wnioskujący 'deshalb' (dlatego) na początku wymaga inwersji - 'bin ich'. Perfect z 'sein' dla 'bleiben'. Wyjaśnienie decyzji. Rozpoczęcie od 'deshalb' jasno pokazuje związek przyczynowo-skutkowy - to REZULTAT wcześniejszej sytuacji, emfaza na logice decyzji."
      },
      {
        id: "word_inv_7",
        question: "Natürlich _____ wir dir gerne bei dem Umzug helfen!",
        translation: "(Oczywiście chętnie pomożemy ci przy przeprowadzce!)",
        options: ["werden", "wir werden", "wird", "würden"],
        correct: "werden",
        explanation: "Przysłówek 'natürlich' (oczywiście) na początku - inwersja 'werden wir'. Czas przyszły z 'werden'. Bezokolicznik 'helfen' na końcu. Entuzjazm dla pomocy. Rozpoczęcie od 'natürlich' podkreśla oczywistość - to nie pytanie czy pomożecie tylko potwierdzenie że to naturalne."
      },
      {
        id: "word_inv_8",
        question: "Aus diesem Grund _____ ich nicht zur Party kommen können.",
        translation: "(Z tego powodu nie mogę przyjść na imprezę)",
        options: ["kann", "ich kann", "könnte", "können"],
        correct: "kann",
        explanation: "Długa fraza przyczynowa 'aus diesem Grund' traktowana jako jeden element - wymaga inwersji 'kann ich'. Negacja plus bezokolicznik. Usprawiedliwienie nieobecności. Forma z wyjaśnieniem powodu na początku brzmi formalnie - pokazuje że odmowa jest uzasadniona nie kapryśna."
      },
      {
        id: "word_inv_9",
        question: "Vielleicht _____ er morgen doch noch Zeit haben unerwartet.",
        translation: "(Może będzie miał jutro jednak jeszcze czas nieoczekiwanie)",
        options: ["wird", "er wird", "würde", "haben wird"],
        correct: "wird",
        explanation: "Przysłówek niepewności 'vielleicht' (może) na początku - inwersja 'wird er'. Czas przyszły. Bezokolicznik 'haben' na końcu. Nadzieja na zmianę planów. Partykuła 'doch' (jednak) dodaje optymizmu - rozpoczęcie od 'vielleicht' sygnalizuje spekulację nie pewnik."
      },
      {
        id: "word_inv_10",
        question: "Dort drüben _____ mein Auto auf dem Parkplatz geparkt.",
        translation: "(Tam po drugiej stronie stoi mój samochód zaparkowany na parkingu)",
        options: ["steht", "es steht", "ist", "liegt"],
        correct: "steht",
        explanation: "Fraza miejsca 'dort drüben' (tam po drugiej stronie) na początku - inwersja 'steht mein Auto'. Czasownik pozycji 'stehen'. Wskazanie lokalizacji samochodu. Rozpoczęcie od miejsca naturalnie prowadzi wzrok - 'tam' kieruje uwagę przed ujawnieniem co tam jest."
      },
      {
        id: "word_inv_11",
        question: "Mit großer Freude _____ ich diese Auszeichnung an entgegen.",
        translation: "(Z wielką radością przyjmuję to wyróżnienie)",
        options: ["nehme", "ich nehme", "nimmt", "annehme"],
        correct: "nehme",
        explanation: "Fraza emocjonalna 'mit großer Freude' na początku - inwersja 'nehme ich'. Rozdzielny czasownik 'annehmen' - przedrostek 'an' na końcu. Akceptacja nagrody. Rozpoczęcie od emocji nadaje ton ceremonialny - 'mit Freude' sygnalizuje wdzięczność przed faktami."
      },
      {
        id: "word_inv_12",
        question: "Ohne deine Hilfe _____ ich das nie geschafft haben niemals!",
        translation: "(Bez twojej pomocy nigdy bym tego nie osiągnął!)",
        options: ["hätte", "ich hätte", "habe", "würde"],
        correct: "hätte",
        explanation: "Fraza warunkowa 'ohne deine Hilfe' na początku - inwersja 'hätte ich'. Konjunktiv II pokazuje hipotetyczność. Perfect Konjunktiv 'hätte geschafft'. Wdzięczność za pomoc. Rozpoczęcie od warunku negującego podkreśla ZALEŻNOŚĆ od pomocy - emfaza na kluczowości wsparcia."
      },
      {
        id: "word_inv_13",
        question: "Wahrscheinlich _____ sie morgen nicht kommen zur Arbeit können.",
        translation: "(Prawdopodobnie nie będzie mogła przyjść jutro do pracy)",
        options: ["wird", "sie wird", "würde", "können wird"],
        correct: "wird",
        explanation: "Przysłówek prawdopodobieństwa 'wahrscheinlich' na początku - inwersja 'wird sie'. Czas przyszły z negacją. Bezokolicznik modalny na końcu. Spekulacja o nieobecności. Rozpoczęcie od 'wahrscheinlich' sygnalizuje że to przypuszczenie nie pewnik - łagodzi kategoryczność stwierdzenia."
      },
      {
        id: "word_inv_14",
        question: "Zum Glück _____ niemand verletzt bei dem Unfall gestern.",
        translation: "(Na szczęście nikt nie został ranny w wypadku wczoraj)",
        options: ["wurde", "es wurde", "ist", "war"],
        correct: "wurde",
        explanation: "Fraza 'zum Glück' (na szczęście) na początku - inwersja 'wurde niemand'. Strona bierna 'wurde verletzt'. Ulga z braku ofiar. Rozpoczęcie od 'zum Glück' natychmiast uspokaja - sygnalizuje pozytywny koniec strasznej sytuacji zanim podasz szczegóły."
      },
      {
        id: "word_inv_15",
        question: "Gerne _____ ich dir beim Kochen heute Abend helfen!",
        translation: "(Chętnie pomogę ci przy gotowaniu dzisiaj wieczorem!)",
        options: ["würde", "ich würde", "werde", "will"],
        correct: "würde",
        explanation: "Przysłówek chęci 'gerne' (chętnie) na początku - inwersja 'würde ich'. Konjunktiv grzecznościowy 'würde helfen'. Oferta pomocy. Rozpoczęcie od 'gerne' od razu komunikuje pozytywne nastawienie - entuzjazm przed szczegółami tworzy ciepły ton oferty."
      }
    ]
  },

  werden_all_uses_complete: {
    name: "Czasownik 'werden' - wszystkie zastosowania",
    description: "Futur, Passiv, Konjunktiv - wielofunkcyjność werden",
    icon: Layers2,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "werden_1",
        question: "Ich _____ morgen früh aufstehen müssen für die Arbeit.",
        translation: "(Będę musiał jutro wcześnie wstać do pracy)",
        options: ["werde", "wurde", "würde", "worden"],
        correct: "werde",
        explanation: "Czasownik 'werden' tworzy CZAS PRZYSZŁY (Futur) - 'werde müssen' (będę musiał). Bezokolicznik na końcu. To pierwsze znaczenie 'werden'. Planowanie wczesnego wstawania. Futur z 'werden' używany dla przyszłych zamiarów lub przewidywań - 'werde + bezokolicznik' to standardowa konstrukcja czasu przyszłego."
      },
      {
        id: "werden_2",
        question: "Das Haus _____ gerade renoviert von den Arbeitern intensiv.",
        translation: "(Dom jest właśnie remontowany przez robotników intensywnie)",
        options: ["wird", "wurde", "würde", "worden"],
        correct: "wird",
        explanation: "Czasownik 'werden' tworzy STRONĘ BIERNĄ (Passiv) - 'wird renoviert' (jest remontowany). Imiesłów 'renoviert' plus 'von' dla sprawcy. To drugie znaczenie 'werden'. Remonty domów są głośne. Passiv z 'werden' używany gdy chcesz podkreślić AKCJĘ nie wykonawcę - dom jest ważny, robotnicy drugorzędni."
      },
      {
        id: "werden_3",
        question: "Wenn ich reich wäre, _____ ich ein großes Haus kaufen.",
        translation: "(Gdybym był bogaty, kupiłbym duży dom)",
        options: ["würde", "werde", "wurde", "worden"],
        correct: "würde",
        explanation: "Czasownik 'würde' to KONJUNKTIV II od 'werden' - używany dla nierealnych warunków. Forma 'würde kaufen' zastępuje trudne Konjunktiv II czasowników. To trzecie znaczenie 'werden'. Marzenia o bogactwie. 'Würde' + bezokolicznik to najczęstsza forma Konjunktiv II - prosta alternatywa dla skomplikowanych form."
      },
      {
        id: "werden_4",
        question: "Die Kinder _____ langsam müde nach dem langen Tag aktiv.",
        translation: "(Dzieci powoli robią się zmęczone po długim aktywnym dniu)",
        options: ["werden", "wurden", "würden", "sind geworden"],
        correct: "werden",
        explanation: "Czasownik 'werden' jako GŁÓWNY czasownik oznacza 'stawać się/robić się' - 'werden müde' (robią się zmęczone). To czwarte znaczenie! Przymiotnik bez końcówki po 'werden'. Zmęczenie dzieci naturalne. 'Werden' + przymiotnik opisuje PROCES zmiany stanu - nie są jeszcze całkiem zmęczone ale stają się."
      },
      {
        id: "werden_5",
        question: "Das Buch _____ schon vor einem Jahr veröffentlicht komplett.",
        translation: "(Książka została opublikowana już rok temu całkowicie)",
        options: ["wurde", "wird", "würde", "worden"],
        correct: "wurde",
        explanation: "Passiv w przeszłości (Präteritum Passiv) używa 'wurde' - 'wurde veröffentlicht' (została opublikowana). Imiesłów opisuje akcję. Publikacja w przeszłości. Forma 'wurde + imiesłów' standardowa dla pasywu przeszłego - pokazuje że akcja była wykonana na obiekcie w przeszłości."
      },
      {
        id: "werden_6",
        question: "Sie _____ nächstes Jahr 18 Jahre alt sein endlich volljährig!",
        translation: "(Skończy w przyszłym roku 18 lat w końcu pełnoletnia!)",
        options: ["wird", "wurde", "würde", "worden"],
        correct: "wird",
        explanation: "Futur z 'werden' - 'wird sein' (będzie mieć). Wiek jako stan wymagający 'sein' nie 'haben' w niemieckim! Pełnoletność to ważny kamień milowy. Forma 'wird 18 Jahre alt sein' idiomatyczna - Niemcy mówią 'będę mieć 18 lat stary' dosłownie, bardzo różne od polskiego."
      },
      {
        id: "werd en_7",
        question: "Das Problem _____ bald gelöst hoffentlich von Experten.",
        translation: "(Problem zostanie wkrótce rozwiązany miejmy nadzieję przez ekspertów)",
        options: ["wird", "wurde", "würde", "worden"],
        correct: "wird",
        explanation: "Passiv w przyszłości łączy Futur z Passiv - 'wird gelöst' (zostanie rozwiązany). Podwójna funkcja 'werden'! Nadzieja na rozwiązanie. Forma 'wird + imiesłów' może być Passiv teraźniejszy LUB przyszły - kontekst ('bald') rozstrzyga że to przyszłość."
      },
      {
        id: "werden_8",
        question: "Er _____ bestimmt ein guter Arzt in der Zukunft sein.",
        translation: "(Na pewno będzie dobrym lekarzem w przyszłości)",
        options: ["wird", "wurde", "würde", "worden"],
        correct: "wird",
        explanation: "Futur z predykcją - 'wird sein' (będzie). Pewność o przyszłej karierze. Przymiotnik 'guter' z końcówką przed rzeczownikiem. Przewidywanie sukcesów innych. Futur nie tylko dla planów ale też PRZEWIDYWAŃ - 'wird' może wyrażać przekonanie o przyszłości bazując na obecnych obserwacjach."
      },
      {
        id: "werden_9",
        question: "Das Zimmer _____ jeden Tag sauber gemacht vom Personal.",
        translation: "(Pokój jest codziennie sprzątany przez personel)",
        options: ["wird", "wurde", "würde", "worden"],
        correct: "wird",
        explanation: "Passiv teraźniejszy - 'wird gemacht' (jest robiony/sprzątany). Rozdzielny czasownik 'saubermachen' w Passiv. Regularność czyszczenia. Forma Passiv podkreśla AKCJĘ (sprzątanie) nie wykonawców - dla gości hotelu ważne że pokój czyszczony, mniej ważne przez kogo."
      },
      {
        id: "werden_10",
        question: "Wäre ich du, _____ ich das anders machen definitiv!",
        translation: "(Gdybym był tobą, na pewno zrobiłbym to inaczej!)",
        options: ["würde", "werde", "wurde", "worden"],
        correct: "würde",
        explanation: "Konjunktiv II 'würde' w rezultacie nierealnego warunku - 'würde machen' (zrobiłbym). Rada hipotetyczna. Bezokolicznik 'machen' na końcu. Stawianie się w czyjej sytuacji. 'Würde' uniwersalne narzędzie dla wszystkich czasowników w Konjunktiv - prościej niż zapamiętywanie wszystkich nieregularnych form."
      },
      {
        id: "werden_11",
        question: "Das Auto _____ letzte Woche repariert in der Werkstatt.",
        translation: "(Samochód został w zeszłym tygodniu naprawiony w warsztacie)",
        options: ["wurde", "wird", "würde", "worden"],
        correct: "wurde",
        explanation: "Passiv przeszły - 'wurde repariert' (został naprawiony). Czas 'letzte Woche' wskazuje przeszłość. Naprawa ukończona. Präteritum Passiv z 'wurde' + imiesłów standardowa forma - używana częściej niż Perfect Passiv w narracji."
      },
      {
        id: "werden_12",
        question: "Ich _____ wahrscheinlich später nach Hause kommen heute.",
        translation: "(Prawdopodobnie wrócę później do domu dzisiaj)",
        options: ["werde", "wurde", "würde", "worden"],
        correct: "werde",
        explanation: "Futur dla przewidywania - 'werde kommen' (wrócę). Przysłówek 'wahrscheinlich' pokazuje niepewność. Bezokolicznik 'kommen' na końcu. Ostrzeżenie o opóźnieniu. Futur często z wyrazami niepewności - 'wahrscheinlich, vielleicht, wohl' pokazują że to przypuszczenie nie gwarancja."
      },
      {
        id: "werden_13",
        question: "Das Paket _____ gestern schon geliefert von der Post.",
        translation: "(Paczka została już wczoraj dostarczona przez pocztę)",
        options: ["wurde", "wird", "würde", "worden"],
        correct: "wurde",
        explanation: "Passiv przeszły z dodatkowym 'schon' (już) - 'wurde geliefert' (została dostarczona). Potwierdzenie dostawy. Imiesłów od 'liefern' (dostarczać). Śledzenie paczek to współczesna obsesja. Passiv idealny dla opisywania dostaw - paczka (obiekt) ważniejsza niż listonosz (wykonawca)."
      },
      {
        id: "werden_14",
        question: "Es _____ bald dunkel - wir sollten nach Hause gehen.",
        translation: "(Robi się wkrótce ciemno - powinniśmy iść do domu)",
        options: ["wird", "wurde", "würde", "worden"],
        correct: "wird",
        explanation: "Główny czasownik 'werden' (stawać się) z przymiotnikiem - 'wird dunkel' (robi się ciemno). Bezosobowe 'es' dla pogody/stanu. Czas przyszły bliski. Zmierzch sygnalizuje koniec dnia. 'Werden' + przymiotnik dla opisywania zmian pogody lub stanu - bardzo powszechna konstrukcja w codziennym języku."
      },
      {
        id: "werden_15",
        question: "Der Brief _____ von mir persönlich geschrieben sorgfältig.",
        translation: "(List został przeze mnie osobiście napisany starannie)",
        options: ["wurde", "wird", "würde", "worden"],
        correct: "wurde",
        explanation: "Passiv przeszły - 'wurde geschrieben' (został napisany). Sprawca 'von mir' pokazuje kto napisał. Emfaza na osobistym charakterze. Passiv pozwala na zdanie gdzie list jest podmiotem - choć ty pisałeś, list jest tematem, więc Passiv stawia go na pierwszym miejscu strukturalnie."
      }
    ]
  },

  reported_speech_indirekte_rede: {
    name: "Mowa zależna (indirekte Rede)",
    description: "Er sagt, dass..., Er sagte, er sei - relacjonowanie słów",
    icon: MessageSquare,
    color: "from-amber-500 to-yellow-600",
    level: "advanced",
    questions: [
      {
        id: "rep_speech_1",
        question: "Er sagt, dass er morgen _____ zur Party definitiv.",
        translation: "(Mówi, że na pewno przyjdzie jutro na imprezę)",
        options: ["kommt", "käme", "kommen", "gekommen"],
        correct: "kommt",
        explanation: "Mowa zależna z 'dass' w potocznej formie używa NORMALNYCH czasów - 'dass er kommt' (że przychodzi). Konjunktiv nie jest obowiązkowy z 'dass'. Potwierdza obecność. Forma z 'dass' łatwiejsza dla uczących się - czasownik na końcu ale normalny czas teraźniejszy wystarczy w nieformalnej mowie."
      },
      {
        id: "rep_speech_2",
        question: "Sie sagte, sie _____ krank und könne nicht kommen.",
        translation: "(Powiedziała, że jest chora i nie może przyjść)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Formalna mowa zależna BEZ 'dass' wymaga Konjunktiv I - 'sie sei' (jest - formalna relacja). Od 'sein' forma 'sei' specjalna. Drugorzędny czasownik 'könne' też Konjunktiv I. Usprawiedliwienie chorobą. Konjunktiv I w mowie zależnej pokazuje że RELACJONUJESZ słowa nie wyrażasz własnej opinii - dystans narratora."
      },
      {
        id: "rep_speech_3",
        question: "Er meinte, dass es zu spät _____ um noch anzufangen.",
        translation: "(Uważał, że jest za późno żeby jeszcze zaczynać)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Z 'dass' Konjunktiv I opcjonalny ale w formalnym pisaniu preferowany - 'dass es sei' (że jest - relacja). Ocena czasu. Infinityw z 'um...zu' na końcu. Rezygnacja z powodu późnej pory. 'Sei' zamiast 'ist' sygnalizuje że to JEGO opinia, którą relacjonujesz - ty możesz się nie zgadzać."
      },
      {
        id: "rep_speech_4",
        question: "Sie hat gesagt, sie _____ keine Zeit heute leider gehabt.",
        translation: "(Powiedziała, że niestety nie miała dzisiaj czasu)",
        options: ["habe", "hat", "hätte", "hatte"],
        correct: "habe",
        explanation: "Konjunktiv I Perfect - 'sie habe gehabt' (że miała - formalna relacja). Od 'haben' forma 'habe' plus imiesłów 'gehabt'. Brak czasu jako wymówka. Perfect w mowie zależnej używa Konjunktiv I formy pomocniczego - 'habe' zamiast 'hat' sygnalizuje że to jej słowa nie twój opis."
      },
      {
        id: "rep_speech_5",
        question: "Er behauptet, er _____ das schon dreimal gemacht früher.",
        translation: "(Twierdzi, że zrobił to już trzy razy wcześniej)",
        options: ["habe", "hat", "hätte", "hatte"],
        correct: "habe",
        explanation: "Czasownik 'behaupten' (twierdzić) sugeruje wątpliwość - Konjunktiv I 'habe gemacht' dystansuje cię od twierdzenia. Trzykrotne doświadczenie. Perfect z 'habe' w mowie zależnej. Forma Konjunktiv pokazuje sceptycyzm - relacjonujesz jego słowa ale może nie wierzysz, to jego wersja nie potwierdzone fakty."
      },
      {
        id: "rep_speech_6",
        question: "Die Zeitung berichtet, die Regierung _____ neue Gesetze planen.",
        translation: "(Gazeta donosi, że rząd planuje nowe ustawy)",
        options: ["plane", "plant", "würde planen", "geplant"],
        correct: "plane",
        explanation: "Konjunktiv I od 'planen' to 'plane' dla trzeciej osoby - 'die Regierung plane' (że rząd planuje). Formalne relacjonowanie medialnie. BEZ 'dass' w prasie. Nowe przepisy zawsze budzą dyskusje. Konjunktiv I w prasie sygnalizuje że to doniesienie nie potwierdzone fakty - dziennikarstwo odpowiedzialne dystansuje się."
      },
      {
        id: "rep_speech_7",
        question: "Er versicherte mir, er _____ pünktlich zur Besprechung kommen.",
        translation: "(Zapewnił mnie, że przyjdzie punktualnie na naradę)",
        options: ["werde", "wird", "würde", "worden"],
        correct: "werde",
        explanation: "Konjunktiv I Futur - 'er werde kommen' (że przyjdzie - formalna relacja). Od 'werden' forma 'werde' dla relacji przyszłości. Obietnica punktualności. Bezokolicznik 'kommen' na końcu. Futur w mowie zależnej używa Konjunktiv I od 'werden' - 'werde' zamiast 'wird' pokazuje że to jego obietnica."
      },
      {
        id: "rep_speech_8",
        question: "Sie meint, dass das Problem nicht so schwer _____ wie gedacht.",
        translation: "(Uważa, że problem nie jest tak trudny jak myślano)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Z 'dass' Konjunktiv I opcjonalny - 'sei' formalniejsze niż 'ist'. Optymistyczna ocena trudności. Porównanie z 'wie gedacht'. Jej opinia relacjonowana. Użycie 'sei' zamiast 'ist' subtelnie pokazuje że to SUBIEKTYWNA ocena którą przytaczasz - może być prawdziwa lub nie."
      },
      {
        id: "rep_speech_9",
        question: "Der Zeuge sagte aus, er _____ den Täter gesehen haben.",
        translation: "(Świadek zeznał, że widział sprawcę)",
        options: ["habe", "hat", "hätte", "hatte"],
        correct: "habe",
        explanation: "Konjunktiv I Perfect - 'er habe gesehen' (że widział - zeznanie). Czasownik 'aussagen' (zeznawać) wymaga precyzji. BEZ 'dass' w języku prawnym. Zeznania świadków są kluczowe. Konjunktiv I w kontekście prawnym obowiązkowy - pokazuje że to ŚWIADECTWO nie potwierdzone fakty, sąd musi ocenić wiarygodność."
      },
      {
        id: "rep_speech_10",
        question: "Sie behauptet, sie _____ nichts davon gewusst vorher.",
        translation: "(Twierdzi, że nic o tym wcześniej nie wiedziała)",
        options: ["habe", "hat", "hätte", "hatte"],
        correct: "habe",
        explanation: "Konjunktiv I Perfect - 'habe gewusst' (że wiedziała - twierdzenie). Zaprzeczanie wiedzy. Perfect dla akcji przed teraźniejszością. Dystans przez Konjunktiv. Forma 'habe gewusst' w mowie zależnej pokazuje jej wersję wydarzeń - Konjunktiv sygnalizuje że możesz wątpić w prawdziwość."
      },
      {
        id: "rep_speech_11",
        question: "Man sagt, dass diese Methode sehr effektiv _____ angeblich.",
        translation: "(Mówi się, że ta metoda jest podobno bardzo efektywna)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Bezosobowa relacja 'man sagt' (mówi się) z Konjunktiv I - 'dass sie sei' (że jest - podobno). Niepotwierdzony fakt. Słowo 'angeblich' (podobno) wzmacnia niepewność. Opinie o metodach różne. Połączenie 'man sagt' z Konjunktiv podwójnie dystansuje - to nie twoja wiedza tylko zasłyszana opinia."
      },
      {
        id: "rep_speech_12",
        question: "Er verspr ach, er _____ mir morgen bestimmt helfen ohne Zweifel.",
        translation: "(Obiecał, że na pewno mi jutro pomoże bez wątpienia)",
        options: ["werde", "wird", "würde", "worden"],
        correct: "werde",
        explanation: "Konjunktiv I Futur - 'er werde helfen' (że pomoże - obietnica). Czasownik 'versprechen' (obiecywać) wprowadza przyszłość. Celownik 'mir' dla odbiorcy pomocy. Pewność obietnicy. Forma 'werde' w mowie zależnej dla przyszłości - relacjonujesz jego przyszły zamiar zachowując dystans Konjunktiv."
      },
      {
        id: "rep_speech_13",
        question: "Die Experten meinen, das Wetter _____ morgen besser werden.",
        translation: "(Eksperci uważają, że pogoda jutro się poprawi)",
        options: ["werde", "wird", "würde", "worden"],
        correct: "werde",
        explanation: "Konjunktiv I Futur - 'das Wetter werde werden' (że się stanie - prognoza). Podwójne 'werden' - pierwsze Konjunktiv Futur, drugie główny czasownik. Prognozy pogodowe. BEZ 'dass' wymaga Konjunktiv. Meteorolodzy relacjonowani w Konjunktiv bo to przewidywania nie pewniki."
      },
      {
        id: "rep_speech_14",
        question: "Sie schrieb, sie _____ sehr glücklich in ihrem neuen Job.",
        translation: "(Napisała, że jest bardzo szczęśliwa w swojej nowej pracy)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Konjunktiv I od 'sein' - 'sie sei glücklich' (że jest szczęśliwa - list). Pismo formalne używa Konjunktiv I. BEZ 'dass' w korespondencji. Radość z nowej pracy. Forma 'sei' w listach czy emailach pokazuje że cytujeszczyjeś słowa - szczególnie ważne w biznesowej korespondencji."
      },
      {
        id: "rep_speech_15",
        question: "Er gab an, er _____ das Auto nicht gestohlen haben.",
        translation: "(Podał, że nie ukradł samochodu)",
        options: ["habe", "hat", "hätte", "hatte"],
        correct: "habe",
        explanation: "Konjunktiv I Perfect z negacją - 'er habe nicht gestohlen' (że nie ukradł - oświadczenie). Czasownik 'angeben' (podawać/oświadczać) formalny. Zaprzeczanie winy. Perfect z 'habe' w relacji. Kontekst prawny wymaga Konjunktiv - pokazuje że to jego WERSJA wydarzeń którą relacjonujesz bez potwierdzania prawdziwości."
      }
    ]
  },

  adjectives_as_adverbs: {
    name: "Przymiotniki jako przysłówki",
    description: "Schnell fahren, gut singen - bez zmian formy",
    icon: Gauge,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "adj_adv_1",
        question: "Sie singt sehr _____ - hat eine wunderschöne Stimme!",
        translation: "(Śpiewa bardzo pięknie - ma cudowny głos!)",
        options: ["schön", "schöne", "schöner", "schönes"],
        correct: "schön",
        explanation: "Przymiotnik 'schön' (piękny) jako przysłówek BEZ ZMIAN - 'singt schön' (śpiewa pięknie). Niemiecki nie dodaje końcówek do przysłówków! To różnica od polskiego '-o'/'-ie'. Piękny śpiew to dar. Forma podstawowa przymiotnika bez deklinacji automatycznie staje się przysłówkiem - prosta reguła ułatwiająca język."
      },
      {
        id: "adj_adv_2",
        question: "Er fährt immer sehr _____ auf der Autobahn gefährlich schnell.",
        translation: "(Jeździ zawsze bardzo szybko na autostradzie niebezpiecznie)",
        options: ["schnell", "schnelle", "schneller", "schnelles"],
        correct: "schnell",
        explanation: "Przymiotnik 'schnell' (szybki) jako przysłówek bez zmian - 'fährt schnell' (jeździ szybko). Opisuje SPOSÓB jazdy. Intensyfikator 'sehr' (bardzo) przed przysłówkiem OK. Szybka jazda na autostradzie bywa ryzykowna. Przysłówek modyfikuje czasownik - odpowiada na pytanie JAK jeździ, nie jaki ON jest."
      },
      {
        id: "adj_adv_3",
        question: "Sie spricht _____ und deutlich für alle im Raum verständlich.",
        translation: "(Mówi głośno i wyraźnie dla wszystkich w pomieszczeniu zrozumiale)",
        options: ["laut", "laute", "lauter", "lautes"],
        correct: "laut",
        explanation: "Przymiotnik 'laut' (głośny) jako przysłówek - 'spricht laut' (mówi głośno). Bez końcówki! Kombinacja dwóch przysłówków 'laut und deutlich' (głośno i wyraźnie). Jasna komunikacja ważna w grupach. Oba przymiotniki zachowują formę podstawową jako przysłówki - nie 'laute und deutliche'."
      },
      {
        id: "adj_adv_4",
        question: "Das Essen schmeckt _____ - der Koch ist sehr talentiert!",
        translation: "(Jedzenie smakuje doskonale - kucharz jest bardzo utalentowany!)",
        options: ["ausgezeichnet", "ausgezeichnete", "ausgezeichneter", "ausgezeichnetes"],
        correct: "ausgezeichnet",
        explanation: "Przymiotnik 'ausgezeichnet' (doskonały) jako przysłówek - 'schmeckt ausgezeichnet' (smakuje doskonale). Forma podstawowa bez zmian. Komplementy dla kucharza. Długie przymiotniki jak 'ausgezeichnet' też zachowują prostą formę jako przysłówki - długość słowa nie wpływa na regułę."
      },
      {
        id: "adj_adv_5",
        question: "Ich arbeite heute besonders _____ an diesem Projekt konzentriert.",
        translation: "(Pracuję dzisiaj szczególnie ciężko nad tym projektem skoncentrowanie)",
        options: ["hart", "harte", "härter", "hartes"],
        correct: "hart",
        explanation: "Przymiotnik 'hart' (ciężki/twardy) jako przysłówek - 'arbeite hart' (pracuję ciężko). Bez zmian formy. Przysłówek 'besonders' (szczególnie) intensyfikuje. Intensywna praca nad projektem. Polski używa 'ciężko' (forma przysłówkowa), niemiecki po prostu 'hart' - ta sama forma dla 'twardy' i 'ciężko'."
      },
      {
        id: "adj_adv_6",
        question: "Sie hat die Aufgabe _____ gelöst ohne fremde Hilfe!",
        translation: "(Rozwiązała zadanie samodzielnie bez obcej pomocy!)",
        options: ["selbstständig", "selbstständige", "selbstständiger", "selbstständiges"],
        correct: "selbstständig",
        explanation: "Długi przymiotnik 'selbstständig' (samodzielny) jako przysłówek - 'hat gelöst selbstständig' (rozwiązała samodzielnie). Forma podstawowa. Perfect z przysłówkiem. Samodzielność w rozwiązywaniu to cenna umiejętność. Nawet złożone przymiotniki zachowują prostą formę jako przysłówki - konsekwentna reguła dla wszystkich."
      },
      {
        id: "adj_adv_7",
        question: "Er erklärt die Regeln immer sehr _____ und verständlich klar.",
        translation: "(Wyjaśnia zasady zawsze bardzo prosto i zrozumiale jasno)",
        options: ["einfach", "einfache", "einfacher", "einfaches"],
        correct: "einfach",
        explanation: "Przymiotnik 'einfach' (prosty) jako przysłówek - 'erklärt einfach' (wyjaśnia prosto). Kombinacja przysłówków 'einfach und verständlich'. Jasne wyjaśnienia są cenne. Oba zachowują formę podstawową. Dobra pedagogika wymaga prostoty - przysłówki 'einfach' i 'verständlich' idealnie opisują efektywne nauczanie."
      },
      {
        id: "adj_adv_8",
        question: "Sie antwortet immer sehr _____ auf alle Fragen freundlich.",
        translation: "(Odpowiada zawsze bardzo grzecznie na wszystkie pytania przyjaźnie)",
        options: ["höflich", "höfliche", "höflicher", "höfliches"],
        correct: "höflich",
        explanation: "Przymiotnik 'höflich' (grzeczny) jako przysłówek - 'antwortet höflich' (odpowiada grzecznie). Bez zmian! Uprzejmość w komunikacji. Intensyfikator 'sehr' dopuszczalny. Grzeczne odpowiedzi tworzą przyjemną atmosferę - przysłówek opisuje SPOSÓB odpowiadania, nie jej osobowość (która też może być grzeczna)."
      },
      {
        id: "adj_adv_9",
        question: "Das Kind läuft _____ durch den Garten fröhlich spielend.",
        translation: "(Dziecko biega radośnie przez ogród bawiąc się)",
        options: ["fröhlich", "fröhliche", "fröhlicher", "fröhliches"],
        correct: "fröhlich",
        explanation: "Przymiotnik 'fröhlich' (radosny) jako przysłówek - 'läuft fröhlich' (biega radośnie). Opisuje emocjonalny stan podczas akcji. Dziecięca radość w zabawie. Przysłówek pokazuje JAK biega (z radością) nie tylko że biega - dodaje emocjonalny wymiar do opisu fizycznej akcji."
      },
      {
        id: "adj_adv_10",
        question: "Ich habe die Prüfung _____ bestanden - sehr gute Note!",
        translation: "(Zdałem egzamin łatwo - bardzo dobra ocena!)",
        options: ["leicht", "leichte", "leichter", "leichtes"],
        correct: "leicht",
        explanation: "Przymiotnik 'leicht' (lekki/łatwy) jako przysłówek - 'habe bestanden leicht' (zdałem łatwo). Perfect z przysłówkiem sposobu. Łatwość zdania to satysfakcjonujące. Przysłówek 'leicht' minimalizuje trudność - skromny sposób powiedzenia że egzamin nie był wyzwaniem dla ciebie."
      },
      {
        id: "adj_adv_11",
        question: "Sie arbeitet sehr _____ und präzise bei allen Aufgaben immer.",
        translation: "(Pracuje bardzo dokładnie i precyzyjnie przy wszystkich zadaniach zawsze)",
        options: ["genau", "genaue", "genauer", "genaues"],
        correct: "genau",
        explanation: "Przymiotnik 'genau' (dokładny) jako przysłówek - 'arbeitet genau' (pracuje dokładnie). Para przysłówków 'genau und präzise' wzmacnia się. Precyzja w pracy ceniona. Oba bez końcówek. Dokładność to profesjonalna zaleta - przysłówki opisują konsystentną JAKOŚĆ pracy nie jednorazowy wypadek."
      },
      {
        id: "adj_adv_12",
        question: "Er hat mir das Problem _____ erklärt gestern ausführlich.",
        translation: "(Wyjaśnił mi problem klarownie wczoraj obszernie)",
        options: ["klar", "klare", "klarer", "klares"],
        correct: "klar",
        explanation: "Przymiotnik 'klar' (jasny/klarowny) jako przysłówek - 'hat erklärt klar' (wyjaśnił klarownie). Perfect z przysłówkiem. Pozycja po obiekcie 'das Problem'. Jasne wyjaśnienia pomagają zrozumieć. Przysłówek 'klar' opisuje JAKOŚĆ wyjaśnienia - nie tylko że wyjaśnił ale że zrobił to w sposób łatwy do zrozumienia."
      },
      {
        id: "adj_adv_13",
        question: "Wir haben _____ gearbeitet die ganze Nacht durch bis Morgen.",
        translation: "(Pracowaliśmy ciężko całą noc aż do rana)",
        options: ["hart", "harte", "härter", "hartes"],
        correct: "hart",
        explanation: "Ponownie 'hart' jako przysłówek - 'haben gearbeitet hart' (pracowaliśmy ciężko). Perfect z przysłówkiem wysiłku. Nocna praca to poświęcenie. Fraza 'die ganze Nacht durch' podkreśla długość. 'Hart arbeiten' to częsta kolokacja - opisuje intensywność wysiłku zawodowego."
      },
      {
        id: "adj_adv_14",
        question: "Das Auto fährt sehr _____ auf der Straße ruhig leise.",
        translation: "(Samochód jeździ bardzo cicho na ulicy spokojnie)",
        options: ["leise", "leises", "leiser", "leisen"],
        correct: "leise",
        explanation: "Przymiotnik 'leise' (cichy) jako przysłówek - 'fährt leise' (jeździ cicho). Opisuje poziom hałasu podczas jazdy. Intensyfikator 'sehr' dopuszczalny. Ciche samochody to komfort. Przysłówek 'leise' może opisywać dźwięk (cicho mówić) lub ruch (cicho chodzić) - uniwersalna forma dla różnych kontekstów."
      },
      {
        id: "adj_adv_15",
        question: "Sie hat die Nachricht _____ aufgenommen emotional berührt.",
        translation: "(Przyjęła wiadomość spokojnie emocjonalnie poruszona)",
        options: ["ruhig", "ruhige", "ruhiger", "ruhiges"],
        correct: "ruhig",
        explanation: "Przymiotnik 'ruhig' (spokojny) jako przysłówek - 'hat aufgenommen ruhig' (przyjęła spokojnie). Perfect z przysłówkiem emocjonalnym. Kontrast między spokojem a emocjami. Rozdzielny czasownik 'aufnehmen'. 'Ruhig' opisuje ZEWNĘTRZNĄ reakcję mimo wewnętrznych emocji - przysłówek pokazuje kontrolę nad ekspresją."
      }
    ]
  }
};

export default part25Categories;

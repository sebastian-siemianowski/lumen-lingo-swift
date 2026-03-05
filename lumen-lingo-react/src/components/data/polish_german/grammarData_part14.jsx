
/**
 * POLISH → GERMAN GRAMMAR - PART 14
 * 4 categories, 15 questions each - Expert refinement
 */

import { Target, Shield, Users, Gem } from "lucide-react";

export const part14Categories = {
  genitive_constructions: {
    name: "Konstrukcje dopełniaczowe",
    description: "Des Mannes, der Frau, wegen, trotz, während - dopełniacz",
    icon: Target,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "gen_const_1",
        question: "Das ist das Auto _____ _____ dort auf dem Parkplatz.",
        translation: "(To jest samochód naszego sąsiada tam na parkingu)",
        options: ["unseres Nachbarn", "unser Nachbar", "unserem Nachbarn", "unseren Nachbarn"],
        correct: "unseres Nachbarn",
        explanation: "Dopełniacz dla posiadania! Forma 'unseres Nachbarn' (czyjego?) słaby rzeczownik w dopełniaczu. To o własności - identyfikacja właściciela samochodu. Męski dopełniacz posiadający: 'unseres' plus słaby rzeczownik końcówka -n. Rzeczownik 'Nachbar' w n-deklinacji dodaje -n we wszystkich przypadkach oprócz mianownika. Pokazuje relację własności."
      },
      {
        id: "gen_const_2",
        question: "Während _____ _____ haben wir viele Entscheidungen getroffen wichtige.",
        translation: "(Podczas spotkania podjęliśmy wiele ważnych decyzji)",
        options: ["des Meetings", "dem Meeting", "das Meeting", "den Meetings"],
        correct: "des Meetings",
        explanation: "Przyimek 'während' wymaga dopełniacza! Forma 'des Meetings' (czego?) czasowy dopełniacz. To o czasie trwania - ramy czasowe podejmowania decyzji. Przyimek 'während' zawsze z dopełniaczem - 'des' plus nijaki rzeczownik często z końcówką -(e)s. Formalny czasowy przyimek wymagający dopełniacza."
      },
      {
        id: "gen_const_3",
        question: "Trotz _____ _____ sind wir spazieren gegangen w parku.",
        translation: "(Pomimo złej pogody poszliśmy na spacer w parku)",
        options: ["des schlechten Wetters", "dem schlechten Wetter", "das schlechte Wetter", "der schlechten Wetter"],
        correct: "des schlechten Wetters",
        explanation: "Przyimek 'trotz' wymaga dopełniacza! Forma 'des schlechten Wetters' (czego?). To o determinacji - pomimo warunków. Przyimek 'trotz' plus dopełniacz pokazuje przeciwstawienie - 'des Wetters' nijaki dopełniacz z końcówką -s. Przyimek adversatywny wymagający dopełniacza."
      },
      {
        id: "gen_const_4",
        question: "Das Büro _____ _____ jest na trzecim piętrze budynku.",
        translation: "(Biuro dyrektora jest na trzecim piętrze budynku)",
        options: ["des Direktors", "dem Direktor", "der Direktor", "den Direktor"],
        correct: "des Direktors",
        explanation: "Posiadający dopełniacz 'des Direktors Büro'! Czyje biuro - dyrektora. To lokalizacja - identyfikacja biura. Męski dopełniacz silny rzeczownik: 'des Direktors' z końcówką -(e)s. Rzeczownik 'Direktor' nie słaby więc standardowy dopełniacz końcówka -(e)s. Relacja posiadania."
      },
      {
        id: "gen_const_5",
        question: "Wegen _____ _____ musimy przełożyć spotkanie niestety.",
        translation: "(Z powodu jego choroby musimy przełożyć spotkanie niestety)",
        options: ["seiner Krankheit", "seinem Krankheit", "seine Krankheit", "seinen Krankheit"],
        correct: "seiner Krankheit",
        explanation: "Przyimek 'wegen' plus dopełniacz dla przyczyny! Forma 'seiner Krankheit' (czego?) żeński posiadający dopełniacz. To o przesunięciu - choroba powodująca. Przyimek 'wegen' wymaga dopełniacza - 'seiner' posiadający plus żeński dopełniacz (bez dodatkowej końcówki dla żeńskiego). Przyimek przyczynowy wymagający dopełniacza."
      },
      {
        id: "gen_const_6",
        question: "Die Farbe _____ _____ podoba mi się bardzo i pasuje perfekcyjnie!",
        translation: "(Kolor tej sukienki bardzo mi się podoba i pasuje perfekcyjnie!)",
        options: ["dieses Kleides", "diesem Kleid", "dieses Kleid", "diese Kleid"],
        correct: "dieses Kleides",
        explanation: "Nijaki dopełniacz 'dieses Kleides'! Jakiego koloru? - Sukienki. To moda - uznanie koloru. Nijaki dopełniacz: 'dieses' plus rzeczownik końcówka -(e)s. Rzeczownik 'Kleid' silny dodaje -es w dopełniaczu. Opisywanie charakterystyki przez posiadanie."
      },
      {
        id: "gen_const_7",
        question: "Innerhalb _____ _____ musimy odpowiedzieć na email.",
        translation: "(W ciągu następnego tygodnia musimy odpowiedzieć na email)",
        options: ["der nächsten Woche", "die nächste Woche", "dem nächsten Woche", "den nächsten Woche"],
        correct: "der nächsten Woche",
        explanation: "Przyimek 'innerhalb' wymaga dopełniacza! Forma 'der nächsten Woche' czasowa granica. To termin - limit czasu. Przyimek 'innerhalb' plus dopełniacz dla ram czasowych - żeński dopełniacz 'der' plus przymiotnik końcówka -en. Ustalanie granic czasowych wymaga dopełniacza."
      },
      {
        id: "gen_const_8",
        question: "Aufgrund _____ _____ wydarzenie zostało odwołane wczoraj.",
        translation: "(Z powodu silnego deszczu wydarzenie zostało odwołane wczoraj)",
        options: ["des starken Regens", "dem starken Regen", "der starke Regen", "den starken Regen"],
        correct: "des starken Regens",
        explanation: "Formalna przyczynowość 'aufgrund'! Forma 'des starken Regens' pogodowy powód. To odwołanie - wyjaśnianie dlaczego. Przyimek 'aufgrund' plus dopełniacz formalna alternatywa do 'wegen'. Męski dopełniacz: 'des' plus przymiotnik końcówka -en plus rzeczownik końcówka -(e)s. Oficjalne wyjaśnienie wymagające formalnego przypadku."
      },
      {
        id: "gen_const_9",
        question: "Das Ende _____ _____ było bardzo zaskakujące i nieoczekiwane!",
        translation: "(Koniec filmu był bardzo zaskakujący i nieoczekiwany!)",
        options: ["des Films", "dem Film", "der Film", "den Film"],
        correct: "des Films",
        explanation: "Męski dopełniacz 'des Films'! Jakiego końca? - Filmu. To o fabule - plot twist. Męski silny rzeczownik dopełniacz: 'des Films' (dodaje końcówkę -s). Charakterystyka rzeczy opisana przez relację posiadającą."
      },
      {
        id: "gen_const_10",
        question: "Anstatt _____ _____ poszedł od razu do domu wcześnie.",
        translation: "(Zamiast pracy poszedł od razu do domu wcześnie)",
        options: ["der Arbeit", "die Arbeit", "dem Arbeit", "den Arbeit"],
        correct: "der Arbeit",
        explanation: "Formalna substytucja 'anstatt'! Forma 'der Arbeit' dopełniacz (czego zamiast). To o wyborze - pomijanie pracy. Przyimek 'anstatt' plus dopełniacz formalny dla 'zamiast' - żeński dopełniacz 'der'. Pokazuje co zastąpione przez formalny przyimek."
      },
      {
        id: "gen_const_11",
        question: "Die Meinung _____ _____ jest dla mnie bardzo ważna zawsze.",
        translation: "(Opinia mojego ojca jest dla mnie bardzo ważna zawsze)",
        options: ["meines Vaters", "mein Vater", "meinem Vater", "meinen Vater"],
        correct: "meines Vaters",
        explanation: "Rodzinna opinia 'meines Vaters'! Czyja opinia - ojca. To szacunek - ceniona opinia. Męski dopełniacz posiadający: 'meines' plus rzeczownik końcówka -(e)s. Rzeczownik 'Vater' silny dostaje standardową końcówkę dopełniacza. Relacja przez przypadek posiadający."
      },
      {
        id: "gen_const_12",
        question: "Außerhalb _____ _____ jest bardzo cicho i spokojnie.",
        translation: "(Poza miastem jest bardzo cicho i spokojnie)",
        options: ["der Stadt", "die Stadt", "dem Stadt", "das Stadt"],
        correct: "der Stadt",
        explanation: "Granica przestrzenna 'außerhalb'! Forma 'der Stadt' (czego na zewnątrz). To o lokalizacji - poza granicami. Przyimek 'außerhalb' plus dopełniacz dla obszarów - żeński dopełniacz 'der Stadt'. Przyimki przestrzenne często wymagające dopełniacza dla precyzji."
      },
      {
        id: "gen_const_13",
        question: "Das Haus _____ _____ stoi na wysokiej górze pięknie.",
        translation: "(Dom mojej babci stoi na wysokiej górze pięknie)",
        options: ["meiner Großmutter", "meine Großmutter", "meinem Großmutter", "meinen Großmutter"],
        correct: "meiner Großmutter",
        explanation: "Żeński posiadający 'meiner Großmutter'! Czyj dom - babci. To rodzinna własność - rezydencja. Żeński dopełniacz posiadający: 'meiner' plus rzeczownik (bez dodatkowej końcówki dla żeńskiego). Pokazanie własności przez przypadek."
      },
      {
        id: "gen_const_14",
        question: "Mittels _____ _____ możemy szybko komunikować się teraz.",
        translation: "(Za pomocą Internetu możemy szybko komunikować się teraz)",
        options: ["des Internets", "dem Internet", "das Internet", "den Internets"],
        correct: "des Internets",
        explanation: "Środek/instrument 'mittels'! Forma 'des Internets' formalny dopełniacz. To technologia - narzędzie komunikacji. Przyimek 'mittels' plus dopełniacz bardzo formalny dla 'za pomocą'. Nijaki dopełniacz: 'des Internets'. Formalny przyimek instrumentalny."
      },
      {
        id: "gen_const_15",
        question: "Am Ende _____ _____ wszyscy byli bardzo szczęśliwi i zadowoleni.",
        translation: "(Pod koniec roku wszyscy byli bardzo szczęśliwi i zadowoleni)",
        options: ["des Jahres", "dem Jahr", "das Jahr", "der Jahre"],
        correct: "des Jahres",
        explanation: "Czasowy dopełniacz 'des Jahres'! Koniec czego - roku. To czas - roczne zakończenie. Nijaki 'Jahr' dopełniacz: 'des Jahres' z końcówką -(e)s. Wyrażenia czasowe często używają dopełniacza dla precyzji. Specyfikacja punktu końcowego roku."
      }
    ]
  },

  verb_complement_patterns: {
    name: "Wzory uzupełnień czasownikowych",
    description: "Bitten um, danken für, sich freuen auf/über",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "verb_comp_1",
        question: "Ich bitte dich _____ einen Gefallen - kannst du mir pomóc?",
        translation: "(Proszę cię o przysługę - możesz mi pomóc?)",
        options: ["um", "für", "an", "über"],
        correct: "um",
        explanation: "Wzór prośby 'bitten um'! Przyimek 'um' plus biernik dla prośby. To pytanie o przysługę - prośba o pomoc. Utrwalona konstrukcja 'jemanden um etwas bitten' - 'um' zawsze. Nie można zmienić przyimka - reguła czasownika."
      },
      {
        id: "verb_comp_2",
        question: "Ich danke dir _____ deine Hilfe - du hast mi bardzo pomógł!",
        translation: "(Dziękuję ci za twoją pomoc - bardzo mi pomogłeś!)",
        options: ["für", "um", "über", "an"],
        correct: "für",
        explanation: "Wzór wdzięczności 'danken für'! Przyimek 'für' plus biernik pokazujący za co dziękujesz. To uznanie - wyrażanie podziękowań. Konstrukcja 'jemandem für etwas danken' - celownik osoba plus 'für' plus biernik rzecz. Standardowa struktura podziękowania."
      },
      {
        id: "verb_comp_3",
        question: "Sie freut sich sehr _____ ihren Urlaub nächste Woche!",
        translation: "(Bardzo się cieszy na swój urlop w przyszłym tygodniu!)",
        options: ["auf", "über", "an", "für"],
        correct: "auf",
        explanation: "Antycypacja 'sich freuen auf'! Przyimek 'auf' plus biernik dla przyszłych wydarzeń. To ekscytacja - oczekiwanie na przyszłość. Przyimek 'auf' pokazuje radość skierowaną do przodu - wydarzenia jeszcze nie nastąpiły. Przyszła antycypacja używa 'auf' nie 'über'."
      },
      {
        id: "verb_comp_4",
        question: "Er freut sich _____ das schöne Geschenk von seiner Familie.",
        translation: "(Cieszy się pięknym prezentem od swojej rodziny)",
        options: ["über", "auf", "an", "für"],
        correct: "über",
        explanation: "Obecna radość 'sich freuen über'! Przyimek 'über' plus biernik dla obecnego/przeszłego szczęścia. To wdzięczność - otrzymany prezent. Przyimek 'über' pokazuje radość O czymś co się stało/istnieje. Obecne/przeszłe szczęście używa 'über' nie 'auf'."
      },
      {
        id: "verb_comp_5",
        question: "Ich denke oft _____ meine Kindheit w małej wiosce.",
        translation: "(Często myślę o moim dzieciństwie w małej wiosce)",
        options: ["an", "über", "auf", "für"],
        correct: "an",
        explanation: "Pamięć/myśl 'denken an'! Przyimek 'an' plus biernik dla wspomnień. To nostalgia - wspomnienia dzieciństwa. Przyimek 'an' pokazuje myślenie O/o czymś konkretnym - 'denken an' dla osobistych myśli/wspomnień. Emocjonalny/osobisty wzór myślenia."
      },
      {
        id: "verb_comp_6",
        question: "Ich warte schon lange _____ deine Antwort - proszę odpowiedz!",
        translation: "(Czekam już długo na twoją odpowiedź - proszę odpowiedz!)",
        options: ["auf", "an", "über", "für"],
        correct: "auf",
        explanation: "Wzór oczekiwania 'warten auf'! Przyimek 'auf' plus biernik dla czego czekasz. To niecierpliwość - oczekiwanie odpowiedzi. Przyimek 'auf' pokazuje czekanie NA konkretną rzecz - 'warten auf' standardowa konstrukcja. Obiekt oczekiwania."
      },
      {
        id: "verb_comp_7",
        question: "Sie interessiert sich sehr _____ Kunst und nowoczesną kulturę.",
        translation: "(Bardzo interesuje się sztuką i kulturą nowoczesną)",
        options: ["für", "an", "über", "um"],
        correct: "für",
        explanation: "Wzór zainteresowania 'sich interessieren für'! Przyimek 'für' plus biernik pokazujący temat. To hobby - pasja kulturalna. Przyimek 'für' wskazuje obszar zainteresowania - 'sich interessieren für' utrwalona fraza. Temat fascynacji."
      },
      {
        id: "verb_comp_8",
        question: "Er beschwert sich _____ die schlechte Qualität jedzenia.",
        translation: "(Skarży się na złą jakość jedzenia)",
        options: ["über", "an", "auf", "für"],
        correct: "über",
        explanation: "Skarga 'sich beschweren über'! Przyimek 'über' plus biernik dla sprzeciwu. To niezadowolenie - skarga restauracyjna. Przyimek 'über' pokazuje na co się skarży - 'sich beschweren über' standardowa formuła. Obiekt zażalenia."
      },
      {
        id: "verb_comp_9",
        question: "Ich erinnere mich gut _____ unseren letzten Urlaub razem.",
        translation: "(Dobrze pamiętam nasz ostatni urlop razem)",
        options: ["an", "über", "auf", "für"],
        correct: "an",
        explanation: "Pamiętanie 'sich erinnern an'! Przyimek 'an' plus biernik dla wspomnień. To wspomnienie - pamięć wakacji. Przyimek 'an' łączy pamięć DO konkretnego przeszłego doświadczenia - 'erinnern an' ustalony wzór. Specyfikacja obiektu pamięci."
      },
      {
        id: "verb_comp_10",
        question: "Sie glaubt fest _____ den Erfolg ihres ważnego projektu.",
        translation: "(Mocno wierzy w sukces swojego ważnego projektu)",
        options: ["an", "in", "auf", "über"],
        correct: "an",
        explanation: "Wzór wiary 'glauben an'! Przyimek 'an' plus biernik dla wiary. To pewność - wiara w projekt. Przyimek 'an' pokazuje wierzenie W coś - 'glauben an' dla wiary/zaufania. Obiekt wiary/zaufania."
      },
      {
        id: "verb_comp_11",
        question: "Ich ärgere mich _____ das schlechte Wetter w weekend!",
        translation: "(Denerwuję się złą pogodą w weekend!)",
        options: ["über", "an", "auf", "für"],
        correct: "über",
        explanation: "Irytacja 'sich ärgern über'! Przyimek 'über' plus biernik pokazujący źródło irytacji. To frustracja - skarga pogodowa. Przyimek 'über' wskazuje co jest irytujące - 'ärgern über' wyrażanie irytacji. Źródło frustracji."
      },
      {
        id: "verb_comp_12",
        question: "Er hofft _____ besseres Wetter für jutro przy wycieczce.",
        translation: "(Liczy na lepszą pogodę na jutro przy wycieczce)",
        options: ["auf", "an", "für", "über"],
        correct: "auf",
        explanation: "Wzór nadziei 'hoffen auf'! Przyimek 'auf' plus biernik dla nadziei. To oczekiwanie - życzenie pogody. Przyimek 'auf' skierowane do przodu nadzieje - 'hoffen auf' dla pragnień o przyszłości. Zorientowane na przyszłość nadzieje."
      },
      {
        id: "verb_comp_13",
        question: "Sie leidet _____ starken Kopfschmerzen od dzisiejszego ranka.",
        translation: "(Cierpi na silne bóle głowy od dzisiejszego ranka)",
        options: ["an", "unter", "über", "für"],
        correct: "an",
        explanation: "Cierpienie 'leiden an' (lub 'unter')! Przyimek 'an' plus celownik dla chorób. To skarga zdrowotna - cierpienie z bólu. Przyimek 'an' pokazuje dolegliwość - 'leiden an/unter' dla cierpienia medycznego. Oba przyimki możliwe ale 'an' powszechny dla chorób/objawów."
      },
      {
        id: "verb_comp_14",
        question: "Ich verzichte gerne _____ Fleisch dla mojego zdrowia.",
        translation: "(Chętnie rezygnuję z mięsa dla mojego zdrowia)",
        options: ["auf", "an", "über", "für"],
        correct: "auf",
        explanation: "Zrzeczenie się 'verzichten auf'! Przyimek 'auf' plus biernik rezygnacja. To wybór - decyzja dietetyczna. Przyimek 'auf' pokazuje z czego rezygnujesz - 'verzichten auf' dla dobrowolnej abstynencji. Specyfikacja obiektu poświęcenia."
      },
      {
        id: "verb_comp_15",
        question: "Wir verlassen uns ganz _____ deine Hilfe przy tym projekcie.",
        translation: "(Całkowicie liczymy na twoją pomoc przy tym projekcie)",
        options: ["auf", "an", "über", "für"],
        correct: "auf",
        explanation: "Poleganie 'sich verlassen auf'! Przyimek 'auf' plus biernik pokazujący zależność. To zaufanie - liczenie na pomoc. Przyimek 'auf' wskazuje NA KIM/CZYM się polega - 'verlassen auf' dla ufania/polegania. Obiekt zależności."
      }
    ]
  },

  pronoun_forms_complete: {
    name: "Formy zaimków - kompletne",
    description: "Mir/mich, dir/dich, ihm/ihn - wszystkie przypadki",
    icon: Users,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "pron_comp_1",
        question: "Kannst du _____ proszę pomóc z tym trudnym zadaniem?",
        translation: "(Możesz mi proszę pomóc z tym trudnym zadaniem?)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Celownik 'mir' od 'ich'! Czasownik 'helfen' wymaga celownika - komu pomagasz. To prośba - prośba o pomoc. Zaimki osobowe w celowniku: mir, dir, ihm, ihr, uns, euch, ihnen. Czasownik 'helfen' zawsze z celownikiem nie biernikiem."
      },
      {
        id: "pron_comp_2",
        question: "Ich sehe _____ każdego dnia w drodze do pracy.",
        translation: "(Widzę cię każdego dnia w drodze do pracy)",
        options: ["dich", "dir", "du", "dein"],
        correct: "dich",
        explanation: "Biernik 'dich' od 'du'! Czasownik 'sehen' wymaga biernika - kogo widzisz. To dojazd - codzienne spotkanie. Zaimki biernika: mich, dich, ihn, sie, es, uns, euch, sie. Widzenie wymaga biernika."
      },
      {
        id: "pron_comp_3",
        question: "Er gibt _____ das Buch zurück po długim czasie w końcu.",
        translation: "(Oddaje mi książkę po długim czasie w końcu)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Odbiorca w celowniku 'mir'! Czasownik 'geben' ma dwa obiekty - celownik (komu) plus biernik (co). To o zwrocie - zwracanie przedmiotu. Wzór 'geben': komuś (celownik) coś (biernik). Zaimek 'mir' pokazuje odbiorcę zwracanej książki."
      },
      {
        id: "pron_comp_4",
        question: "Ich vertraue _____ całkowicie w tej ważnej sprawie.",
        translation: "(Ufam ci całkowicie w tej ważnej sprawie)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Obiekt zaufania 'dir'! Czasownik 'vertrauen' wymaga celownika - komu ufasz. To pewność - wyrażanie zaufania. Czasowniki zaufania/wiary używają celownika - 'vertrauen' plus celownik osoba. Czasowniki relacji często celownik."
      },
      {
        id: "pron_comp_5",
        question: "Sie ruft _____ jutro an z powodu spotkania na pewno.",
        translation: "(Zadzwoni do ciebie jutro z powodu spotkania na pewno)",
        options: ["dich", "dir", "du", "dein"],
        correct: "dich",
        explanation: "Wzór dzwonienia 'dich anrufen'! Czasownik 'anrufen' wymaga biernika - do kogo dzwonisz. To komunikacja - telefon. Czasowniki kontaktowania używają biernika - 'anrufen' plus biernik osoba. Obiekt bezpośredniego kontaktu."
      },
      {
        id: "pron_comp_6",
        question: "Das gehört _____ - du hast mi to przecież podarował!",
        translation: "(To należy do mnie - podarowałeś mi to przecież!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Należenie 'mir gehören'! Czasownik 'gehören' wymaga celownika - do kogo należy. To własność - twierdzenie posiadania. Czasowniki posiadania używają celownika - 'gehören' plus celownik właściciel. Relacja własności przez celownik."
      },
      {
        id: "pron_comp_7",
        question: "Ich kenne _____ z dawnych czasów ze szkoły jeszcze dobrze.",
        translation: "(Znam go jeszcze dobrze z dawnych czasów ze szkoły)",
        options: ["ihn", "ihm", "er", "sein"],
        correct: "ihn",
        explanation: "Męski biernik 'ihn'! Czasownik 'kennen' wymaga biernika - kogo znasz. To znajomość - przeszłe połączenie. Zaimek 'ihn' (jego) biernik od 'er' - 'kennen' plus biernik. Znajomość kogoś obiekt bezpośredni."
      },
      {
        id: "pron_comp_8",
        question: "Ich gratuliere _____ zdanego egzaminu serdecznie!",
        translation: "(Gratuluję ci zdanego egzaminu serdecznie!)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Gratulowanie 'dir gratulieren'! Czasownik 'gratulieren' wymaga celownika - komu gratulujesz. To święto - gratulacje. Konstrukcja 'gratulieren' plus celownik ustalony wzór - niemiecka logika różna od polskiej. Odbiorca gratulacji."
      },
      {
        id: "pron_comp_9",
        question: "Er liebt _____ bardzo i chce się z tobą wkrótce pobrać!",
        translation: "(Bardzo cię kocha i chce się z tobą wkrótce pobrać!)",
        options: ["dich", "dir", "du", "dein"],
        correct: "dich",
        explanation: "Kochanie kogoś 'dich lieben'! Czasownik 'lieben' wymaga biernika - kogo kochasz. To romans - deklaracja miłości. Emocja skierowana NA osobę - biernik. Zaimek 'dich' obiekt uczucia."
      },
      {
        id: "pron_comp_10",
        question: "Das Auto gefällt _____ bardzo dobrze - chcę go kupić!",
        translation: "(Samochód bardzo mi się podoba - chcę go kupić!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Podobanie się 'mir gefallen'! Czasownik 'gefallen' wymaga celownika - komu się podoba. To uznanie - podoba samochodu. Osobliwość 'gefallen' plus celownik - RZECZ podoba się OSOBIE (celownik). Samochód podmiot, ty celownik odbiorca."
      },
      {
        id: "pron_comp_11",
        question: "Sie fragt _____ o drogę do dworca grzecznie.",
        translation: "(Pyta cię o drogę do dworca grzecznie)",
        options: ["dich", "dir", "du", "dein"],
        correct: "dich",
        explanation: "Pytanie kogoś 'dich fragen'! Czasownik 'fragen' wymaga biernika - kogo pytasz. To szukanie pomocy - pytanie o kierunki. Konstrukcja 'fragen' plus biernik osoba - pytana osoba obiekt bezpośredni. Pytana osoba."
      },
      {
        id: "pron_comp_12",
        question: "Das Buch należy _____ - oddaj mi ją proszę!",
        translation: "(Książka należy do mnie - oddaj mi ją proszę!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Własność ponownie 'mir gehören'! Posiadacz w celowniku. To odzyskiwanie - żądanie zwrotu. Czasownik 'gehören' konsekwentnie używa celownika - 'mir' pokazuje że jestem właścicielem. Twierdzenie własności."
      },
      {
        id: "pron_comp_13",
        question: "Ich schreibe _____ jutro email ze szczegółami.",
        translation: "(Napiszę ci jutro email z szczegółami)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Wiadomość 'dir schreiben'! Czasownik 'schreiben' z odbiorcą w celowniku. To komunikacja - obietnica emaila. Pisanie DO kogoś - odbiorca w celowniku. Zaimek 'dir' beneficjent komunikacji."
      },
      {
        id: "pron_comp_14",
        question: "Der Film hat _____ nie spodobał się - był za długi!",
        translation: "(Film mi się nie spodobał - był za długi!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Niespodoba 'mir nicht gefallen'! Negatywna preferencja - celownik trwa. To recenzja - krytyka filmu. Czasownik 'gefallen' plus celownik nawet w negatywie - 'mir nicht gefallen'. Konsekwentne użycie przypadku."
      },
      {
        id: "pron_comp_15",
        question: "Ich zeige _____ jutro moje nowe zdjęcia z urlopu.",
        translation: "(Pokażę ci jutro moje nowe zdjęcia z urlopu)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Pokazywanie DO 'dir zeigen'! Czasownik 'zeigen' ma odbiorcę w celowniku plus rzecz w bierniku. To dzielenie się - wakacyjne zdjęcia. Wzór 'zeigen': komuś (celownik) coś (biernik). Zaimek 'dir' osoba której się pokazuje."
      }
    ]
  },

  conditional_perfect_würde_haben: {
    name: "Tryb warunkowy Perfect",
    description: "Hätte gemacht, wäre gegangen - hipotetyczna przeszłość",
    icon: Gem,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "cond_perf_1",
        question: "Ich _____ ci pomógł, gdybym miał wtedy czas.",
        translation: "(Pomógłbym ci, gdybym miał wtedy czas)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Przeszły warunkowy 'hätte geholfen'! Pomógłbym był ALE był czas. To żal - wyjaśnianie bezczynności. Konjunktiv II Perfect: 'hätte' plus imiesłów pokazuje niezrealizowaną przeszłą możliwość. Brak czasu zapobiegł pomocy - wyjaśnianie przeszłej bezczynności."
      },
      {
        id: "cond_perf_2",
        question: "Wenn ich das gewusst _____, wäre ich nie przyszedł!",
        translation: "(Gdybym to wiedział, nie przyszedłbym!)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Warunek niespełniony 'hätte gewusst'! Nie wiedział WIĘC przyszedł - hipotetyczny. To retrospekcja - życzenie że wiedział. Zdanie warunkowe Plusquamperfekt Konjunktiv: 'hätte gewusst'. Pokazuje że wiedza zmieniłaby decyzję - kontrfaktyczny."
      },
      {
        id: "cond_perf_3",
        question: "Sie _____ lepiej została w domu zamiast na imprezie.",
        translation: "(Wolałaby została w domu zamiast na imprezie)",
        options: ["wäre", "hätte", "würde", "war"],
        correct: "wäre",
        explanation: "Żal o pójściu 'wäre lieber geblieben'! Preferencja dla alternatywy - życzenie innego. To żal imprezowy - preferowanie zostania. Czasownik 'bleiben' ruch używa 'sein' - 'wäre geblieben' Konjunktiv II Perfect. Żałowanie dokonanego wyboru."
      },
      {
        id: "cond_perf_4",
        question: "Wenn du mich zapytał _____, hätte ich ci pomógł natychmiast!",
        translation: "(Gdybyś mnie zapytał, pomógłbym ci natychmiast!)",
        options: ["hättest", "wärst", "würdest", "hattest"],
        correct: "hättest",
        explanation: "Utracona możliwość 'hättest gefragt'! Nie zapytał WIĘC bez pomocy - wyjaśnienie. To porażka komunikacji - niewypowiedziana prośba. Warunek Konjunktiv II Perfect: 'hättest gefragt' pokazuje że pytanie wywołałoby pomoc. Niespełniony warunek."
      },
      {
        id: "cond_perf_5",
        question: "Wir _____ problem rozwiązali, gdybyśmy mieli więcej czasu.",
        translation: "(Rozwiązalibyśmy problem, gdybyśmy mieli więcej czasu)",
        options: ["hätten", "wären", "würden", "hatten"],
        correct: "hätten",
        explanation: "Zdolność zablokowana 'hätten gelöst'! Mogli rozwiązać GDYBY był czas. To o ograniczeniach - czas zapobiegający rozwiązaniu. Konjunktiv II Perfect mnoga: 'hätten' plus imiesłów. Niedobór czasu zapobiegł rozwiązaniu problemu - wyjaśnianie porażki."
      },
      {
        id: "cond_perf_6",
        question: "Er _____ wcześniej do domu poszedł, gdyby wiedział.",
        translation: "(Poszedłby wcześniej do domu, gdyby wiedział)",
        options: ["wäre", "hätte", "würde", "war"],
        correct: "wäre",
        explanation: "Hipotetyczne wyjście 'wäre gegangen'! Wyszedłby GDYBY znał. To o czasie - wiedza wpływająca na decyzję. Czasownik 'gehen' ruch - 'wäre gegangen' Konjunktiv Perfect. Ignorancja go zatrzymała - wiedza zmieniłaby kiedy wyszedł."
      },
      {
        id: "cond_perf_7",
        question: "Wenn ich bogaty _____, hätte ich duży dom kupił!",
        translation: "(Gdybym był bogaty, kupiłbym duży dom!)",
        options: ["gewesen wäre", "wäre", "gehabt hätte", "hätte"],
        correct: "gewesen wäre",
        explanation: "Przeszły hipotetyczny stan 'gewesen wäre'! Gdyby był bogaty - nierzeczywisty przeszły warunek. To o marzeniach - fantazje bogactwa. Przeszły warunek Konjunktiv: 'gewesen wäre' (był byłby). Ustalanie hipotetycznych przeszłych okoliczności."
      },
      {
        id: "cond_perf_8",
        question: "Sie _____ egzamin zdała, gdyby więcej się uczyła.",
        translation: "(Zdałaby egzamin, gdyby więcej się uczyła)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Akademicki warunkowy 'hätte bestanden'! Zdanie GDYBY studiowała więcej. To o wysiłku - niewystarczające przygotowanie. Czasownik osiągnięcia używa 'haben' - 'hätte bestanden' pokazuje niezrealizowany sukces. Wysiłek w nauce zmieniłby wynik."
      },
      {
        id: "cond_perf_9",
        question: "Ich _____ samochód kupił, gdyby był tańszy.",
        translation: "(Kupiłbym samochód, gdyby był tańszy)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Warunkowy zakup 'hätte gekauft'! Kupiłbym był GDYBY tańszy. To o finansach - cena zapobiegająca. Czasownik transakcji używa 'haben' - 'hätte gekauft'. Cena była barierą - niższy koszt umożliwiłby zakup."
      },
      {
        id: "cond_perf_10",
        question: "Wenn du poszedł z nami _____, miałbyś dużo zabawy!",
        translation: "(Gdybyś poszedł z nami, miałbyś dużo zabawy!)",
        options: ["wärst", "hättest", "würdest", "warst"],
        correct: "wärst",
        explanation: "Warunkowy ruch 'wärst mitgekommen'! Pójście z GDYBY - przegapiona zabawa. To żal - wykluczanie siebie. Czasownik ruchu używa 'sein' - 'wärst mitgekommen' hipotetyczne dołączenie. Odmowa zaproszenia oznaczała przegapienie zabawy."
      },
      {
        id: "cond_perf_11",
        question: "Er _____ pracę dostał, gdyby był lepiej przygotowany.",
        translation: "(Dostałby pracę, gdyby był lepiej przygotowany)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Utracona szansa 'hätte bekommen'! Praca GDYBY przygotowany lepiej. To o przegapionych szansach - niewystarczające przygotowanie. Czasownik 'bekommen' plus 'hätte' pokazuje niezrealizowaną możliwość. Lepsze przygotowanie zabezpieczyłoby pozycję."
      },
      {
        id: "cond_perf_12",
        question: "Wir _____ wcześniej przybyli, gdyby pociąg był punktualny.",
        translation: "(Przybylibyśmy wcześniej, gdyby pociąg był punktualny)",
        options: ["wären", "hätten", "würden", "waren"],
        correct: "wären",
        explanation: "Warunkowy przyjazd 'wären angekommen'! Wcześniej GDYBY pociąg punktualny. To o opóźnieniach - wina pociągu. Ruch 'sein' mnoga - 'wären angekommen'. Spóźnienie pociągu spowodowało późne przybycie."
      },
      {
        id: "cond_perf_13",
        question: "Ich _____ książkę przeczytał, gdyby była ciekawsza.",
        translation: "(Przeczytałbym książkę, gdyby była ciekawsza)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Warunkowe czytanie 'hätte gelesen'! Czytałbym był GDYBY ciekawa. To o jakości - nuda zapobiegająca. Czytanie używa 'haben' - 'hätte gelesen'. Nuda książki była barierą - zainteresowanie zmotywowałoby do ukończenia."
      },
      {
        id: "cond_perf_14",
        question: "Sie _____ z nami poszła, ale była niestety wtedy chora.",
        translation: "(Poszłaby z nami, ale była niestety wtedy chora)",
        options: ["wäre", "hätte", "würde", "war"],
        correct: "wäre",
        explanation: "Przerwana intencja 'wäre mitgekommen'! Poszłaby ALE choroba zapobiegła. To wyjaśnianie nieobecności - usprawiedliwienie chorobą. Ruch używa 'sein' - 'wäre mitgekommen'. Choroba zablokowała uczestnictwo - hipotetyczny bez choroby."
      },
      {
        id: "cond_perf_15",
        question: "Wenn ich wiedział _____, że przyjdziesz, ugotowałbym!",
        translation: "(Gdybym wiedział że przyjdziesz, ugotowałbym!)",
        options: ["hätte", "wäre", "würde", "hatte"],
        correct: "hätte",
        explanation: "Warunek informacji 'hätte gewusst'! Wiedza GDYBY wywołałaby gotowanie. To gościnność - przegapione przygotowanie. Czasownik 'wissen' plus 'hätte' warunek. Wcześniejsze powiadomienie umożliwiłoby przygotowanie posiłku - wyjaśnianie nieprzygotowania."
      }
    ]
  }
};

export default part14Categories;

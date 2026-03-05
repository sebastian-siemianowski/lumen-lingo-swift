
/**
 * POLISH → GERMAN GRAMMAR - PART 20
 * 4 kategorie, 15 pytań każda
 */

import { Wand2, Shield, FileStack, Wrench } from "lucide-react";

export const part20Categories = {
  lassen_constructions_complete: {
    name: "Konstrukcje z 'lassen' - kompletne",
    description: "Sich lassen, etwas machen lassen - wszystkie znaczenia",
    icon: Wand2,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "lassen_comp_1",
        question: "Ich lasse mir morgen beim Friseur die Haare _____ professionell.",
        translation: "(Dam sobie jutro u fryzjera obciąć włosy profesjonalnie)",
        options: ["schneiden", "zu schneiden", "geschnitten", "schneidet"],
        correct: "schneiden",
        explanation: "Konstrukcja 'sich etwas machen lassen' oznacza zlecanie komuś wykonania usługi - ty nie robisz tego sam, ktoś robi to dla ciebie. Używasz bezokolicznika BEZ 'zu' po 'lassen'. Celownik 'mir' pokazuje że to dla CIEBIE, biernik 'die Haare' to co jest obcinane. Ta struktura jest bardzo praktyczna gdy mówisz o usługach - fryzjer, mechanik, lekarz."
      },
      {
        id: "lassen_comp_2",
        question: "Dieses Problem lässt _____ nicht so einfach lösen wie gedacht.",
        translation: "(Ten problem nie daje się tak łatwo rozwiązać jak myślano)",
        options: ["sich", "es", "man", "ihn"],
        correct: "sich",
        explanation: "Konstrukcja 'sich lassen' plus bezokolicznik wyraża czy coś MOŻE być zrobione - czy jest wykonalne. To jak polski zwrot 'daje się zrobić'. Forma 'lässt sich lösen' oznacza 'może być rozwiązany/daje się rozwiązać'. Negacja pokazuje że problem jest trudniejszy niż oczekiwano - to uczciwa ocena wyzwania."
      },
      {
        id: "lassen_comp_3",
        question: "Ich habe mein Auto gestern in der Werkstatt _____ lassen müssen.",
        translation: "(Musiałem wczoraj zostawić samochód w warsztacie)",
        options: ["reparieren", "zu reparieren", "repariert", "repariere"],
        correct: "reparieren",
        explanation: "Czasownik 'lassen' w znaczeniu 'kazać/dać zrobić' używa prostego bezokolicznika. Nie ty naprawiasz auto, warsztat to robi - ty tylko zlecasz. W Perfect tworzy się 'lassen lassen' (podwójny bezokolicznik) gdy jest modalny. Konieczność naprawy to sytuacja którą każdy kierowca zna - czasem trzeba powierzyć auto profesjonalistom."
      },
      {
        id: "lassen_comp_4",
        question: "_____ Sie mich bitte in Ruhe arbeiten hier konzentriert!",
        translation: "(Proszę pozwolić mi pracować w spokoju tutaj skoncentrowanie!)",
        options: ["Lassen", "Lässt", "Lass", "Gelassen"],
        correct: "Lassen",
        explanation: "Czasownik 'lassen' w znaczeniu 'pozwolić/zostawić' - formalny tryb rozkazujący używa 'Lassen Sie'. Prośba o niezakłócanie podczas pracy. Forma grzeczna z 'Sie' brzmi profesjonalnie. To uprzejmy sposób na ustalenie granic - każdy potrzebuje czasem spokoju do skupienia się na zadaniach."
      },
      {
        id: "lassen_comp_5",
        question: "Der Kuchen lässt _____ gut einfrieren für später im Monat.",
        translation: "(Ciasto dobrze daje się zamrozić na później w miesiącu)",
        options: ["sich", "es", "man", "ihn"],
        correct: "sich",
        explanation: "Ponownie 'sich lassen' dla wykonalności - ciasto MOŻE być zamrożone, to jest możliwe. Słowo 'gut' podkreśla że to działa dobrze. To praktyczna informacja kulinarna. Możliwość zamrażania jedzenia to sposób na oszczędzanie czasu i redukcję marnowania - przydatna wiedza gospodarcza."
      },
      {
        id: "lassen_comp_6",
        question: "Ich lasse meine Kinder oft draußen im Garten _____.",
        translation: "(Często pozwalam moim dzieciom bawić się na zewnątrz w ogrodzie)",
        options: ["spielen", "zu spielen", "gespielt", "spielt"],
        correct: "spielen",
        explanation: "Czasownik 'lassen' w znaczeniu 'pozwalać' używa bezokolicznika bez 'zu' - 'lasse spielen' (pozwalam bawić się). Dzieci (biernik) plus bezokolicznik. Zabawa na świeżym powietrzu jest zdrowa dla rozwoju dzieci. Ta konstrukcja jest prosta - po 'lassen' zawsze czysty bezokolicznik gdy oznacza pozwalanie."
      },
      {
        id: "lassen_comp_7",
        question: "Das lässt _____ schwer sagen ohne mehr Informationen über Situation.",
        translation: "(Trudno to powiedzieć bez więcej informacji o sytuacji)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Wyrażenie 'sich schwer sagen lassen' oznacza 'trudno powiedzieć/ocenić'. Przysłówek 'schwer' między 'sich' a bezokolicznikiem pokazuje stopień trudności. Przyznanie niepewności jest uczciwe - czasem potrzebujemy więcej danych żeby wyrobić sobie opinię. To pokazuje intelektualną pokorę."
      },
      {
        id: "lassen_comp_8",
        question: "Sie hat sich gestern ein neues Kleid _____ lassen vom Schneider.",
        translation: "(Dała sobie wczoraj uszyć nową sukienkę u krawca)",
        options: ["nähen", "zu nähen", "genäht", "näht"],
        correct: "nähen",
        explanation: "Perfect od 'sich etwas machen lassen' - zlecenie usługi. Forma 'hat nähen lassen' używa podwójnego bezokolicznika (Ersatzinfinitiv). Celownik 'sich' pokazuje że to dla niej, krawiec wykonuje pracę. Szyte na miarę ubrania to inwestycja w jakość - dobrze dopasowane rzeczy służą dłużej."
      },
      {
        id: "lassen_comp_9",
        question: "_____ uns sofort anfangen mit der Arbeit am Projekt!",
        translation: "(Zacznijmy natychmiast z pracą nad projektem!)",
        options: ["Lasst", "Lassen", "Lass", "Lässt"],
        correct: "Lasst",
        explanation: "Tryb rozkazujący nieformalny mnogi - 'lasst uns' (niech my/zacznijmy). To zachęta do grupowej akcji. Forma 'lasst' dla 'ihr' w trybie rozkazującym. Wspólne rozpoczęcie pracy buduje zespołowego ducha - razem łatwiej pokonać wyzwania projektowe."
      },
      {
        id: "lassen_comp_10",
        question: "Dieses Buch lässt _____ leicht und schnell lesen bei Transport.",
        translation: "(Ta książka łatwo i szybko się czyta podczas transportu)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Forma 'sich leicht lesen lassen' opisuje jak łatwo coś się czyta. Dwa przysłówki ('leicht' i 'schnell') podkreślają przyjemność czytania. To cenna informacja o książce - lekka lektura idealna na podróże. Książki które czytają się płynnie pozwalają na escapizm i relaks."
      },
      {
        id: "lassen_comp_11",
        question: "Er lässt seine Sekretärin alle E-Mails _____ täglich für ihn.",
        translation: "(Każe swojej sekretarce odpowiadać codziennie na wszystkie emaile za niego)",
        options: ["beantworten", "zu beantworten", "beantwortet", "beantworte"],
        correct: "beantworten",
        explanation: "Konstrukcja 'jemanden etwas tun lassen' - każesz komuś coś zrobić. Biernik 'seine Sekretärin' (kogo) plus bezokolicznik 'beantworten' (co robić). To delegowanie obowiązków w pracy. Efektywna delegacja pozwala focusować się na ważniejszych zadaniach - to umiejętność zarządcza."
      },
      {
        id: "lassen_comp_12",
        question: "Das lässt _____ gut mit unserem Plan vereinbaren ohne Probleme.",
        translation: "(To dobrze daje się pogodzić z naszym planem bez problemów)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Forma 'sich vereinbaren lassen' oznacza możliwość pogodzenia/połączenia. Słowo 'gut' pokazuje że kompatybilność jest wysoka. To optymistyczna ocena - elastyczność w planowaniu ułatwia życie. Rzeczy które dobrze się łączą sprawiają że harmonogramy są mniej stresujące."
      },
      {
        id: "lassen_comp_13",
        question: "Ich habe mir gestern die Zähne beim Zahnarzt _____ lassen.",
        translation: "(Dałem sobie wczoraj sprawdzić zęby u dentysty)",
        options: ["kontrollieren", "zu kontrollieren", "kontrolliert", "kontrolle"],
        correct: "kontrollieren",
        explanation: "Zlecenie usługi medycznej - 'sich etwas kontrollieren lassen' (dać sobie sprawdzić). Perfect z podwójnym bezokolicznikiem 'hat kontrollieren lassen'. Regularne wizyty u dentysty to profilaktyka zdrowotna. Dbanie o zęby zapobiega większym problemom w przyszłości - prewencja zawsze lepsza niż leczenie."
      },
      {
        id: "lassen_comp_14",
        question: "Sie lässt die Kinder nie alleine zu Hause _____ aus Sicherheit.",
        translation: "(Nie pozwala dzieciom zostawać samym w domu z bezpieczeństwa)",
        options: ["bleiben", "zu bleiben", "geblieben", "bleibt"],
        correct: "bleiben",
        explanation: "Czasownik 'lassen' z negacją - 'nicht lassen bleiben' (nie pozwalać zostawać). Bezokolicznik 'bleiben' bez 'zu' po 'lassen'. Troska o bezpieczeństwo dzieci to naturalna odpowiedzialność rodzicielska. Ostrożność z młodszymi dziećmi pokazuje odpowiedzialną opiekę - wiek determinuje samodzielność."
      },
      {
        id: "lassen_comp_15",
        question: "Lass mich kurz _____, dann können wir weitermachen zusammen.",
        translation: "(Pozwól mi krótko pomyśleć, wtedy możemy kontynuować razem)",
        options: ["überlegen", "zu überlegen", "überlegt", "überleg"],
        correct: "überlegen",
        explanation: "Tryb rozkazujący 'lass mich' (pozwól mi) plus bezokolicznik 'überlegen' (pomyśleć). Prośba o moment na refleksję. Forma nieformalna dla bliskich osób. Czas na przemyślenie przed kontynuacją to znak rozważności - lepsze decyzje przychodzą po refleksji niż pod presją."
      }
    ]
  },

  passive_alternatives_werden: {
    name: "Alternatywy dla strony biernej",
    description: "Man, sich lassen, sein zu - różne sposoby wyrażania",
    icon: Shield,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "pass_alt_1",
        question: "_____ kann dieses Formular online ausfüllen einfach jederzeit.",
        translation: "(Można ten formularz wypełnić online łatwo w każdej chwili)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Zaimek bezosobowy 'man' to najprostsza alternatywa dla strony biernej - 'man kann' (można). To aktywna konstrukcja która unika pasywu. Polski używa 'można' podobnie. Forma z 'man' brzmi bardziej naturalna i mniej formalna niż pełna strona bierna - to preferowana forma w codziennej mowie."
      },
      {
        id: "pass_alt_2",
        question: "Das ist leider nicht _____ ändern in dieser Situation schwierig.",
        translation: "(To niestety nie da się zmienić w tej trudnej sytuacji)",
        options: ["zu", "für", "zum", "zur"],
        correct: "zu",
        explanation: "Konstrukcja 'sein + zu + bezokolicznik' wyraża możliwość lub konieczność - 'ist zu ändern' (da się zmienić/może być zmienione). To alternatywa dla modalnej strony biernej. Negacja pokazuje niemożliwość zmiany. Ta forma jest zwięzła i elegancka - często używana w formalnym języku pisanym."
      },
      {
        id: "pass_alt_3",
        question: "_____ spricht hier nur Deutsch im Büro während der Arbeit.",
        translation: "(Mówi się tu tylko po niemiecku w biurze podczas pracy)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Bezosobowe 'man' dla opisywania ogólnych zasad lub zwyczajów - 'man spricht' (mówi się). To sposób na wyrażanie norm bez wskazywania konkretnych osób. Zasady językowe w miejscu pracy pomagają w jednolitej komunikacji. Forma z 'man' brzmi mniej autorytarnie niż bezpośredni zakaz."
      },
      {
        id: "pass_alt_4",
        question: "Diese Aufgabe ist bis morgen früh _____ erledigen unbedingt.",
        translation: "(To zadanie musi być wykonane do jutra rana koniecznie)",
        options: ["zu", "für", "zum", "zur"],
        correct: "zu",
        explanation: "Konstrukcja 'sein + zu + bezokolicznik' może też wyrażać konieczność - 'ist zu erledigen' (musi być wykonane). Kontekst ('bis morgen') podkreśla pilność. To bardziej formalna alternatywa dla 'muss erledigt werden'. Jasne terminy pomagają w organizacji pracy - każdy wie co jest priorytetem."
      },
      {
        id: "pass_alt_5",
        question: "Hier lässt es _____ gut leben mit der Familie harmonisch.",
        translation: "(Tutaj dobrze się żyje z rodziną harmonijnie)",
        options: ["sich", "man", "es", "ihn"],
        correct: "sich",
        explanation: "Wyrażenie 'es lässt sich leben' (żyje się) to idiomatyczny sposób oceny jakości życia. Bezosobowe 'es' plus 'sich lassen' plus bezokolicznik. Słowo 'gut' pokazuje pozytywną ocenę miejsca. Jakość życia w danym miejscu wpływa na szczęście rodzinne - lokalizacja ma znaczenie dla dobrostanu."
      },
      {
        id: "pass_alt_6",
        question: "_____ sagt, dass die Wirtschaft sich erholzen wird bald langsam.",
        translation: "(Mówi się, że gospodarka się wkrótce powoli poprawi)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Bezosobowe 'man sagt' (mówi się/podobno) dla przekazywania ogólnych opinii lub plotek. To dystansuje cię od twierdzenia - przekazujesz co ludzie mówią. Polski używa 'mówi się' identycznie. Ekonomiczne prognozy często opierają się na opiniach ekspertów - 'man sagt' pokazuje że to nie twoja osobista wiedza."
      },
      {
        id: "pass_alt_7",
        question: "Die Tür ist nicht _____ öffnen - sie ist fest verschlossen.",
        translation: "(Drzwi nie dają się otworzyć - są mocno zamknięte)",
        options: ["zu", "für", "zum", "zur"],
        correct: "zu",
        explanation: "Negacja 'nicht zu öffnen' pokazuje niemożliwość - drzwi NIE MOGĄ być otwarte. Forma 'sein + zu' w negatywie wyraża bariery. Przyczyna (mocne zamknięcie) wyjaśnia problem. Zamknięte drzwi mogą frustrować - czasem potrzeba pomocy lub narzędzi żeby je otworzyć."
      },
      {
        id: "pass_alt_8",
        question: "_____ darf hier auf keinen Fall rauchen - strenges Verbot!",
        translation: "(Nie wolno tu w żadnym wypadku palić - surowy zakaz!)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Bezosobowe 'man darf nicht' (nie wolno) dla wyrażania zakazów. To ogólna reguła dla wszystkich. Forma z 'man' plus modalny elegancko wyraża zakazy bez bezpośredniego oskarżania. Zakazy palenia chronią zdrowie - szczególnie w zamkniętych przestrzeniach gdzie dym wpływa na wszystkich."
      },
      {
        id: "pass_alt_9",
        question: "Dieser Text lässt _____ nur schwer verstehen für Anfänger.",
        translation: "(Ten tekst trudno się rozumie dla początkujących)",
        options: ["sich", "es", "man", "ihn"],
        correct: "sich",
        explanation: "Forma 'sich schwer verstehen lassen' opisuje tekst który stawia opór zrozumieniu. Słowo 'nur' podkreśla trudność. Dla początkujących skomplikowane teksty mogą zniechęcać. Poziom trudności materiałów powinien odpowiadać umiejętnościom uczącego się - za trudne teksty frustrują zamiast uczyć."
      },
      {
        id: "pass_alt_10",
        question: "Hier ist viel _____ tun für die Renovierung des Hauses.",
        translation: "(Tu jest dużo do zrobienia dla renowacji domu)",
        options: ["zu", "für", "zum", "zur"],
        correct: "zu",
        explanation: "Konstrukcja 'viel zu tun' (dużo do zrobienia) używa 'zu' z bezokolicznikiem. To ocena zakresu pracy. Forma jest zwięzła i jasna. Renowacje domów zawsze wymagają więcej pracy niż początkowo myślano - realistyczna ocena zadań pomaga w planowaniu czasu i budżetu."
      },
      {
        id: "pass_alt_11",
        question: "_____ sollte immer ehrlich sein zu anderen Menschen respektvoll.",
        translation: "(Powinno się zawsze być uczciwym wobec innych ludzi szacunkowo)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Bezosobowe 'man sollte' (powinno się) dla wyrażania ogólnych porad moralnych. To uniwersalna zasada bez konkretnego adresata. Polski używa 'powinno się' podobnie. Uczciwość w relacjach buduje zaufanie i szacunek - to fundament zdrowych relacji międzyludzkich."
      },
      {
        id: "pass_alt_12",
        question: "Das Fenster ist sofort _____ schließen - es zieht kalt!",
        translation: "(Okno trzeba natychmiast zamknąć - ciągnie zimno!)",
        options: ["zu", "für", "zum", "zur"],
        correct: "zu",
        explanation: "Forma 'ist zu schließen' w tym kontekście wyraża pilną konieczność - TRZEBA zamknąć. Przeciąg (es zieht) to nieprzyjemne uczucie. Kontekst często rozstrzyga czy 'zu' oznacza możliwość czy konieczność. Szybka reakcja na zimno to naturalna ochrona komfortu - podstawowa potrzeba ciepła."
      },
      {
        id: "pass_alt_13",
        question: "_____ lernt nie aus - das ganze Leben lang immer neu.",
        translation: "(Nigdy się nie przestaje uczyć - całe życie wciąż nowe rzeczy)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Przysłowie 'man lernt nie aus' (nigdy nie przestajemy się uczyć) używa 'man' dla uniwersalnej prawdy. To optymistyczny pogląd na całożyciową naukę. Rozdzielny czasownik 'auslernen' (przestać się uczyć). Otwartość na naukę przez całe życie utrzymuje umysł aktywnym - ciekawość to dar który warto pielęgnować."
      },
      {
        id: "pass_alt_14",
        question: "Diese Frage ist nicht einfach _____ beantworten ohne Recherche.",
        translation: "(To pytanie nie jest łatwe do odpowiedzenia bez badań)",
        options: ["zu", "für", "zum", "zur"],
        correct: "zu",
        explanation: "Negacja 'nicht einfach zu beantworten' opisuje pytanie które wymaga wysiłku. Forma ocenia trudność zadania. Potrzeba badań pokazuje złożoność tematu. Przyznanie że coś wymaga pracy badawczej to uczciwa odpowiedź - lepiej przyznać że potrzebujesz czasu niż udzielać powierzchownych odpowiedzi."
      },
      {
        id: "pass_alt_15",
        question: "_____ muss hier sehr vorsichtig fahren - enge Kurven überall!",
        translation: "(Trzeba tu jechać bardzo ostrożnie - ciasne zakręty wszędzie!)",
        options: ["Man", "Es", "Sie", "Einer"],
        correct: "Man",
        explanation: "Bezosobowe ostrzeżenie 'man muss' (trzeba/należy) dla rady bezpieczeństwa. To uniwersalna zasada dla wszystkich kierowców. Forma z 'man' mniej agresywna niż bezpośredni rozkaz. Niebezpieczne drogi wymagają szczególnej uwagi - ostrożność ratuje życie i zapobiega wypadkom."
      }
    ]
  },

  extended_adjective_phrases_complete: {
    name: "Rozszerzone frazy przymiotnikowe - kompletne",
    description: "Der vor zwei Jahren gebaute - złożone modyfikatory",
    icon: FileStack,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "ext_adj_1",
        question: "Das von meinem Großvater _____ Haus steht immer noch fest.",
        translation: "(Dom zbudowany przez mojego dziadka stoi wciąż mocno)",
        options: ["gebaute", "bauende", "gebaut", "bauen"],
        correct: "gebaute",
        explanation: "Rozszerzona fraza imiesłowowa łączy sprawcę z czasownikiem - 'von Großvater gebaute' całość przed rzeczownikiem 'Haus'. Imiesłów 'gebaut' dostaje końcówkę przymiotnikową -e. To kompresuje zdanie względne ('das Haus, das von... gebaut wurde') w jeden atrybut. Dom zbudowany przez rodzinę ma emocjonalną wartość - to fizyczne dziedzictwo pokoleń."
      },
      {
        id: "ext_adj_2",
        question: "Die in der Zeitung _____ Nachricht hat alle überrascht sehr.",
        translation: "(Wiadomość opublikowana w gazecie zaskoczyła wszystkich bardzo)",
        options: ["veröffentlichte", "veröffentlichende", "veröffentlicht", "veröffentlichen"],
        correct: "veröffentlichte",
        explanation: "Lokalizacja 'in der Zeitung' plus imiesłów 'veröffentlichte' tworzą rozszerzoną frazę. Końcówka -e dla żeńskiego mianownika. Media często publikują zaskakujące wiadomości. Ta konstrukcja precyzyjnie wskazuje źródło informacji - ważne dla wiarygodności w erze fake news."
      },
      {
        id: "ext_adj_3",
        question: "Der seit zehn Jahren hier _____ Lehrer geht bald in Rente.",
        translation: "(Nauczyciel pracujący tu od dziesięciu lat idzie wkrótce na emeryturę)",
        options: ["unterrichtende", "unterrichtete", "unterrichtet", "unterrichten"],
        correct: "unterrichtende",
        explanation: "Czas trwania 'seit zehn Jahren' plus miejsce 'hier' plus imiesłów teraźniejsny 'unterrichtende'. Końcówka -e dla męskiego mianownika. Długi staż pokazuje doświadczenie. Emerytura po latach pracy to zasłużony odpoczynek - nauczyciele kształtują pokolenia uczniów przez swoje kariery."
      },
      {
        id: "ext_adj_4",
        question: "Das gestern Abend im Fernsehen _____ Interview war spannend.",
        translation: "(Wywiad pokazany wczoraj wieczorem w telewizji był fascynujący)",
        options: ["gezeigte", "zeigende", "gezeigt", "zeigen"],
        correct: "gezeigte",
        explanation: "Czas 'gestern Abend' plus miejsce 'im Fernsehen' plus imiesłów 'gezeigte' kompresuje wiele informacji. Nijaki mianownik -e końcówka. To bardzo efektywna forma przekazywania szczegółów. Zamiast długiego zdania względnego, wszystko mieści się w jednej frazie przed rzeczownikiem."
      },
      {
        id: "ext_adj_5",
        question: "Die für die Umwelt _____ Maßnahmen sind sehr wichtig aktuell.",
        translation: "(Środki podjęte dla środowiska są bardzo ważne aktualnie)",
        options: ["getroffenen", "treffenden", "getroffen", "treffen"],
        correct: "getroffenen",
        explanation: "Cel 'für die Umwelt' plus imiesłów 'getroffenen' opisuje środki. Mnoga końcówka -en po określonym 'die'. Ekologia wymaga konkretnych działań. Rozszerzona fraza pozwala elegancko wskazać cel środków - ochrona środowiska wymaga świadomych decyzji politycznych i indywidualnych."
      },
      {
        id: "ext_adj_6",
        question: "Der mit großer Sorgfalt _____ Bericht liegt auf dem Tisch.",
        translation: "(Raport przygotowany z wielką starannością leży na stole)",
        options: ["vorbereitete", "vorbereitende", "vorbereitet", "vorbereiten"],
        correct: "vorbereitete",
        explanation: "Sposób wykonania 'mit großer Sorgfalt' plus imiesłów 'vorbereitete'. Męski mianownik -e końcówka. Staranność w przygotowaniu dokumentów pokazuje profesjonalizm. Ta fraza kompresuje informację o JAKOŚCI przygotowania - nie tylko że został przygotowany, ale JAK został przygotowany."
      },
      {
        id: "ext_adj_7",
        question: "Das aus Italien _____ Olivenöl schmeckt besonders aromatisch.",
        translation: "(Oliwa z oliwek importowana z Włoch smakuje szczególnie aromatycznie)",
        options: ["importierte", "importierende", "importiert", "importieren"],
        correct: "importierte",
        explanation: "Pochodzenie 'aus Italien' plus imiesłów 'importierte' wskazuje źródło produktu. Nijaki mianownik -e końcówka. Włoska oliwa ceniona za jakość. Informacja o pochodzeniu często wpływa na percepcję jakości - pochodzenie geograficzne produktów kulinarnych ma znaczenie dla smaku i autentyczności."
      },
      {
        id: "ext_adj_8",
        question: "Die von allen _____ Entscheidung war die richtige letztendlich.",
        translation: "(Decyzja zaakceptowana przez wszystkich była właściwa ostatecznie)",
        options: ["akzeptierte", "akzeptierende", "akzeptiert", "akzeptieren"],
        correct: "akzeptierte",
        explanation: "Sprawca 'von allen' (przez wszystkich) plus imiesłów 'akzeptierte'. Żeński mianownik -e. Konsensus grupowy dał dobre rezultaty. Uniwersalne poparcie dla decyzji często oznacza że był to właściwy wybór - mądrość tłumu ma swoją wartość."
      },
      {
        id: "ext_adj_9",
        question: "Der vor einer Woche _____ Brief ist endlich angekommen heute.",
        translation: "(List wysłany tydzień temu w końcu dzisiaj przybył)",
        options: ["geschickte", "schickende", "geschickt", "schicken"],
        correct: "geschickte",
        explanation: "Czas 'vor einer Woche' plus imiesłów 'geschickte' określa kiedy był wysłany. Męski mianownik -e końcówka. Opóźnienie poczty to frustrujące. Rozszerzona fraza czasowa pomaga śledzić przesyłki - wiedza kiedy coś było wysłane pozwala oszacować kiedy powinno dotrzeć."
      },
      {
        id: "ext_adj_10",
        question: "Die im Krankenhaus _____ Ärzte sind sehr kompetent alle.",
        translation: "(Lekarze pracujący w szpitalu są bardzo kompetentni wszyscy)",
        options: ["arbeitenden", "gearbeiteten", "arbeitend", "arbeiten"],
        correct: "arbeitenden",
        explanation: "Miejsce pracy 'im Krankenhaus' plus imiesłów teraźniejszy 'arbeitenden'. Mnoga słaba końcówka -en po określonym 'die'. Kompetencja personelu medycznego to kluczowa dla jakości opieki. Imiesłów teraźniejszy pokazuje że to ich OBECNA praca - aktywnie wykonywany zawód."
      },
      {
        id: "ext_adj_11",
        question: "Das ohne Erlaubnis _____ Gebiet ist für Besucher gesperrt.",
        translation: "(Obszar wchodzony bez pozwolenia jest zamknięty dla odwiedzających)",
        options: ["betretene", "betretende", "betreten", "betretet"],
        correct: "betretene",
        explanation: "Warunek 'ohne Erlaubnis' plus imiesłów 'betretene' opisuje zakazany obszar. Nijaki mianownik -e końcówka. Zakazy dostępu chronią bezpieczeństwo lub prywatność. Fraza jasno komunikuje że wejście bez pozwolenia jest problemem - respektowanie granic jest ważne."
      },
      {
        id: "ext_adj_12",
        question: "Die von vielen Menschen _____ Tradition wird weiter gepflegt.",
        translation: "(Tradycja praktykowana przez wielu ludzi jest nadal kultywowana)",
        options: ["praktizierte", "praktizierende", "praktiziert", "praktizieren"],
        correct: "praktizierte",
        explanation: "Grupa praktykująca 'von vielen Menschen' plus imiesłów 'praktizierte'. Żeński mianownik -e końcówka. Tradycje łączą pokolenia. Kontynuacja tradycji pokazuje szacunek dla dziedzictwa - praktyki kulturowe przekazywane są przez aktywne uczestnictwo."
      },
      {
        id: "ext_adj_13",
        question: "Der mit viel Liebe _____ Kuchen schmeckt einfach fantastisch!",
        translation: "(Ciasto pieczone z wielką miłością smakuje po prostu fantastycznie!)",
        options: ["gebackene", "backende", "gebacken", "backen"],
        correct: "gebackene",
        explanation: "Emocja w procesie 'mit viel Liebe' plus imiesłów 'gebackene'. Męski mianownik -e końcówka. Miłość w gotowaniu to metafora troski. Jedzenie przygotowane z sercem rzeczywiście często smakuje lepiej - emocjonalne zaangażowanie wpływa na efekt końcowy."
      },
      {
        id: "ext_adj_14",
        question: "Das für Kinder ab 6 Jahren _____ Buch ist sehr beliebt.",
        translation: "(Książka przeznaczona dla dzieci od 6 lat jest bardzo popularna)",
        options: ["geeignete", "eignende", "geeignet", "eignen"],
        correct: "geeignete",
        explanation: "Grupa docelowa 'für Kinder ab 6 Jahren' plus imiesłów 'geeignete'. Nijaki mianownik -e. Odpowiednia klasyfikacja wiekowa pomaga rodzicom. Specyfikacja wieku w rozszerzonej frazie precyzyjnie określa publiczność - książki dopasowane do rozwoju poznawczego są skuteczniejsze edukacyjnie."
      },
      {
        id: "ext_adj_15",
        question: "Die unter schwierigen Bedingungen _____ Athleten sind bewundernswert.",
        translation: "(Sportowcy trenujący w trudnych warunkach są podziwu godni)",
        options: ["trainierenden", "trainierten", "trainierend", "trainieren"],
        correct: "trainierenden",
        explanation: "Okoliczności 'unter schwierigen Bedingungen' plus imiesłów teraźniejszy 'trainierenden'. Mnoga słaba -en. Trening mimo trudności pokazuje determinację. Imiesłów teraźniejszny podkreśla że to ich OBECNE wysiłki - aktywnie pokonują przeciwności."
      }
    ]
  },

  functional_verb_phrases_fvg: {
    name: "Funkcjonalne frazy czasownikowe (FVG)",
    description: "In Betracht ziehen, zur Verfügung stellen - nominalne konstrukcje",
    icon: Wrench,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "fvg_1",
        question: "Wir müssen alle Optionen in _____ ziehen vor der Entscheidung.",
        translation: "(Musimy wziąć pod uwagę wszystkie opcje przed decyzją)",
        options: ["Betracht", "Frage", "Acht", "Sicht"],
        correct: "Betracht",
        explanation: "Funkcjonalna fraza 'in Betracht ziehen' (brać pod uwagę) używa rzeczownika 'Betracht' z czasownikiem 'ziehen'. To formalna alternatywa dla prostego 'betrachten' (rozważać). FVG często brzmią bardziej oficjalnie - używane w biznesie i administracji. Dokładne rozważenie opcji prowadzi do lepszych wyborów."
      },
      {
        id: "fvg_2",
        question: "Der Chef stellt uns alle Ressourcen zur _____ für das Projekt.",
        translation: "(Szef udostępnia nam wszystkie zasoby dla projektu)",
        options: ["Verfügung", "Nutzung", "Benutzung", "Verwendung"],
        correct: "Verfügung",
        explanation: "FVG 'zur Verfügung stellen' (udostępniać) jest formalne. Rzeczownik 'Verfügung' (dyspozycja) z przyimkiem 'zur' tworzy frazę. To elegancki sposób mówienia o udostępnianiu zasobów. Wsparcie kierownictwa poprzez zasoby to klucz do sukcesu projektów - odpowiednie narzędzia umożliwiają realizację celów."
      },
      {
        id: "fvg_3",
        question: "Sie bringt ihre Ideen klar zum _____ in der Präsentation.",
        translation: "(Jasno wyraża swoje pomysły w prezentacji)",
        options: ["Ausdruck", "Sprechen", "Sagen", "Reden"],
        correct: "Ausdruck",
        explanation: "FVG 'zum Ausdruck bringen' (wyrażać/dawać wyraz) używa rzeczownika 'Ausdruck'. To bardziej formalne niż 'ausdrücken'. Przyimek 'zum' sygnalizuje funkcjonalną frazę. Jasna komunikacja pomysłów to umiejętność ceniona w środowisku zawodowym - efektywna prezentacja przekonuje słuchaczy."
      },
      {
        id: "fvg_4",
        question: "Das Projekt kommt langsam zum _____ nach vielen Monaten Arbeit.",
        translation: "(Projekt powoli dobiega końca po wielu miesiącach pracy)",
        options: ["Abschluss", "Ende", "Schluss", "Fertig"],
        correct: "Abschluss",
        explanation: "FVG 'zum Abschluss kommen' (dobiegać końca/kończyć się) używa rzeczownika 'Abschluss'. To proces zbliżania się do finału. Przyimek 'zum' typowy dla FVG pokazujących proces. Długie projekty wymagają wytrwałości - satysfakcja z ukończenia jest proporcjonalna do włożonego wysiłku."
      },
      {
        id: "fvg_5",
        question: "Wir nehmen Ihre Beschwerde sehr _____ und prüfen sie sofort.",
        translation: "(Traktujemy Państwa skargę bardzo poważnie i sprawdzamy ją natychmiast)",
        options: ["ernst", "wichtig", "schwer", "stark"],
        correct: "ernst",
        explanation: "Wyrażenie 'ernst nehmen' (traktować poważnie) używa przymiotnika 'ernst' z czasownikiem 'nehmen'. To nie typowe FVG z rzeczownikiem ale podobna konstrukcja. Profesjonalna obsługa skarg buduje zaufanie klientów - poważne traktowanie problemów pokazuje szacunek i chęć poprawy."
      },
      {
        id: "fvg_6",
        question: "Er bringt das Projekt erfolgreich zu _____ vor dem Termin.",
        translation: "(Doprowadza projekt pomyślnie do końca przed terminem)",
        options: ["Ende", "Abschluss", "Schluss", "Fertig"],
        correct: "Ende",
        explanation: "FVG 'zu Ende bringen' (doprowadzać do końca) używa 'Ende' z 'zu'. To aktywne ukończenie czegoś. Wcześniejsze ukończenie niż termin pokazuje efektywność. Czasownik 'bringen' plus 'zu Ende' tworzy frazę osiągnięcia - to bardziej dynamiczne niż pasywne 'beenden'."
      },
      {
        id: "fvg_7",
        question: "Das neue Gesetz tritt nächsten Monat in _____ offiziell.",
        translation: "(Nowe prawo wchodzi w życie oficjalnie w przyszłym miesiącu)",
        options: ["Kraft", "Macht", "Wirkung", "Geltung"],
        correct: "Kraft",
        explanation: "FVG 'in Kraft treten' (wchodzić w życie) dla ustaw i przepisów. Rzeczownik 'Kraft' (siła) metaforycznie używany. To techniczny termin prawniczy. Moment wejścia w życie nowych przepisów jest ważny - określa kiedy obywatele muszą się stosować do nowych zasad."
      },
      {
        id: "fvg_8",
        question: "Wir setzen große Hoffnungen in _____ auf diesen Plan innovativ.",
        translation: "(Pokładamy wielkie nadzieje w tym innowacyjnym planie)",
        options: ["ihn", "ihm", "es", "sie"],
        correct: "ihn",
        explanation: "FVG 'Hoffnungen in etwas setzen' (pokładać nadzieje w czymś) używa biernika - 'in ihn'. Czasownik 'setzen' (umieszczać) metaforycznie. Wielkie nadzieje pokazują optymizm. Pokładanie nadziei w planach motywuje do działania - pozytywne myślenie napędza wysiłek potrzebny do realizacji."
      },
      {
        id: "fvg_9",
        question: "Sie bringt ihre Unzufriedenheit deutlich zum _____ im Meeting.",
        translation: "(Wyraża wyraźnie swoje niezadowolenie na spotkaniu)",
        options: ["Ausdruck", "Sprechen", "Sagen", "Wort"],
        correct: "Ausdruck",
        explanation: "Ponownie 'zum Ausdruck bringen' - tym razem dla negatywnych emocji. Ta sama struktura działa dla różnych treści. Wyrażanie niezadowolenia to ważne w miejscu pracy - tłumione frustracje mogą prowadzić do większych problemów, otwarta komunikacja pozwala na rozwiązania."
      },
      {
        id: "fvg_10",
        question: "Das kommt überhaupt nicht in _____ für mich persönlich!",
        translation: "(To w ogóle nie wchodzi w rachubę dla mnie osobiście!)",
        options: ["Frage", "Betracht", "Acht", "Sicht"],
        correct: "Frage",
        explanation: "FVG 'in Frage kommen' (wchodzić w rachubę) w negatywie oznacza kategoryczne odrzucenie. Rzeczownik 'Frage' (pytanie) używany metaforycznie. To stanowcze 'nie'. Jasne komunikowanie granic i preferencji zapobiega nieporozumieniom - każdy ma prawo odmówić rzeczy które nie pasują do jego wartości."
      },
      {
        id: "fvg_11",
        question: "Wir müssen diese Theorie in _____ stellen kritisch nachdenken.",
        translation: "(Musimy tę teorię poddać w wątpliwość krytycznie pomyśleć)",
        options: ["Frage", "Zweifel", "Kritik", "Diskussion"],
        correct: "Frage",
        explanation: "FVG 'in Frage stellen' (kwestionować/podawać w wątpliwość) używa tego samego rzeczownika co poprzednia fraza ale INNY czasownik zmienia znaczenie. 'Stellen' zamiast 'kommen'. Krytyczne myślenie wymaga kwestionowania założeń - zdrowy sceptycyzm pomaga odkrywać prawdę."
      },
      {
        id: "fvg_12",
        question: "Das Angebot steht Ihnen bis Ende der Woche zur _____.",
        translation: "(Oferta jest dla Państwa dostępna do końca tygodnia)",
        options: ["Verfügung", "Nutzung", "Auswahl", "Benutzung"],
        correct: "Verfügung",
        explanation: "FVG 'zur Verfügung stehen' (być dostępnym) - bierny odpowiednik 'zur Verfügung stellen'. Ten sam rzeczownik, inny czasownik. Czasowy limit oferty tworzy poczucie pilności. Ograniczone czasowo oferty wymagają szybkiej decyzji - to strategia biznesowa motywująca do działania."
      },
      {
        id: "fvg_13",
        question: "Sie nimmt aktiv _____ an der Diskussion über wichtige Themen.",
        translation: "(Bierze aktywnie udział w dyskusji o ważnych tematach)",
        options: ["teil", "Teil", "Anteil", "Teilnahme"],
        correct: "teil",
        explanation: "UWAGA: 'teilnehmen' to czasownik rozdzielny NIE FVG! Partykuła 'teil' małą literą oddziela się. To pułapka - wygląda jak FVG ale jest zwykłym czasownikiem rozdzielnym. Aktywne uczestnictwo w dyskusjach pokazuje zaangażowanie - różnorodne perspektywy wzbogacają rozmowy."
      },
      {
        id: "fvg_14",
        question: "Der Vertrag kommt bald zum _____ nach langen Verhandlungen.",
        translation: "(Umowa wkrótce dochodzi do skutku po długich negocjacjach)",
        options: ["Abschluss", "Ende", "Ziel", "Schluss"],
        correct: "Abschluss",
        explanation: "FVG 'zum Abschluss kommen' dla finalizacji umów. Rzeczownik 'Abschluss' (zakończenie/finalizacja) formalny. Długie negocjacje wymagają cierpliwości. Moment finalizacji umowy to kamień milowy - szczególnie po trudnych rozmowach, sukces jest słodki."
      },
      {
        id: "fvg_15",
        question: "Ich bringe meine Bedenken offen zur _____ in der Gruppe.",
        translation: "(Otwarcie poruszam swoje obawy w grupie)",
        options: ["Sprache", "Rede", "Aussage", "Wort"],
        correct: "Sprache",
        explanation: "FVG 'zur Sprache bringen' (poruszać temat/mówić o) używa rzeczownika 'Sprache'. To formalne wyrażenie dla inicjowania rozmowy o czymś. Otwarte dzielenie się obawami wymaga odwagi - ale szczera komunikacja w grupach prowadzi do lepszych rozwiązań i silniejszych relacji."
      }
    ]
  },

  noun_adjective_agreement: {
    name: "Zgodność rzeczownik-przymiotnik",
    description: "Ein guter Mann, eine schöne Frau, ein kleines Kind - wszystkie formy",
    icon: FileStack,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "noun_adj_1",
        question: "Das ist ein _____ Mann aus unserer Nachbarschaft hier.",
        translation: "(To jest miły mężczyzna z naszego sąsiedztwa tutaj)",
        options: ["netter", "nette", "netten", "nett"],
        correct: "netter",
        explanation: "Z nieokreślonym 'ein' w mianowniku męskim przymiotnik dostaje silną końcówkę -er. Rodzajnik 'ein' nie pokazuje wyraźnie rodzaju, więc przymiotnik musi pomóc. To tzw. mieszana deklinacja. Polski nie ma takiego systemu końcówek. Mili sąsiedzi sprawiają że dzielnica staje się przyjaznym miejscem - dobre relacje lokalne budują społeczność."
      },
      {
        id: "noun_adj_2",
        question: "Sie hat eine _____ Stimme, sehr angenehm zum Zuhören.",
        translation: "(Ma piękny głos, bardzo przyjemny do słuchania)",
        options: ["schöne", "schöner", "schönes", "schön"],
        correct: "schöne",
        explanation: "Z nieokreślonym 'eine' w bierniku żeńskim przymiotnik dostaje słabą końcówkę -e (bo rodzajnik już pokazuje przypadek). Głos (die Stimme) w bierniku po 'haben'. Piękne głosy są darem - w śpiewie czy mowie, przyjemna intonacja przyciąga uwagę."
      },
      {
        id: "noun_adj_3",
        question: "Wir wohnen in einem _____ Haus am Rande der Stadt.",
        translation: "(Mieszkamy w starym domu na skraju miasta)",
        options: ["alten", "alter", "alte", "alt"],
        correct: "alten",
        explanation: "Przyimek 'in' z celownikiem plus nieokreślony 'einem' - przymiotnik dostaje końcówkę -en. Celownik po przyimkach miejsca (GDZIE?) bardzo częsty. Końcówka -en w celowniku pojawia się regularnie we wszystkich rodzajach. Stare domy mają charakter - historia przesiąknięta w ściany dodaje uroku mieszkaniu."
      },
      {
        id: "noun_adj_4",
        question: "Er kaufte seiner Frau einen _____ Ring zum Jubiläum.",
        translation: "(Kupił swojej żonie drogi pierścionek na rocznicę)",
        options: ["teuren", "teurer", "teure", "teuer"],
        correct: "teuren",
        explanation: "Z nieokreślonym 'einen' w bierniku męskim przymiotnik dostaje końcówkę -en. Pierścień (der Ring) jako prezent rocznicowy. Celownik 'seiner Frau' pokazuje odbiorczynię prezentu. Wartościowe prezenty na rocznice to sposób celebrowania relacji - symbolizują docenianie partnera."
      },
      {
        id: "noun_adj_5",
        question: "Das Kind spielt mit einem _____ Ball im Garten fröhlich.",
        translation: "(Dziecko bawi się nową piłką w ogrodzie radośnie)",
        options: ["neuen", "neuer", "neue", "neu"],
        correct: "neuen",
        explanation: "Przyimek 'mit' wymaga celownika - 'einem neuen Ball'. Męski celownik z nieokreślonym rodzajnikiem daje -en. Piłka (der Ball) jako zabawka. Nowe zabawki zawsze ekscytują dzieci - świeżość przedmiotu pobudza wyobraźnię i kreatywną zabawę."
      },
      {
        id: "noun_adj_6",
        question: "Ich sehe dort einen _____ Vogel auf dem Baum sitzen schön.",
        translation: "(Widzę tam pięknego ptaka siedzieć na drzewie)",
        options: ["bunten", "bunter", "bunte", "bunt"],
        correct: "bunten",
        explanation: "Z nieokreślonym 'einen' w bierniku męskim końcówka -en. Ptak (der Vogel) jako obiekt widzenia. Kolorowe ptaki są ozdobą natury. Czasownik percepcji 'sehen' plus obiekt w bierniku. Obserwacja przyrody to prosta przyjemność - nawet w miastach natura znajduje sposoby na obecność."
      },
      {
        id: "noun_adj_7",
        question: "Sie trägt heute ein _____ Kleid zur Party elegant.",
        translation: "(Nosi dzisiaj czerwoną sukienkę na imprezę elegancko)",
        options: ["rotes", "roter", "rote", "rot"],
        correct: "rotes",
        explanation: "Z nieokreślonym 'ein' w bierniku nijakim przymiotnik dostaje silną końcówkę -es. Sukienka (das Kleid) w bierniku po 'tragen'. Czerwień to śmiały wybór kolorystyczny. Końcówka -es jasno sygnalizuje nijaki biernik - przymiotnik pracuje ciężej z nieokreślonym rodzajnikiem."
      },
      {
        id: "noun_adj_8",
        question: "Das ist die Tasche einer _____ Frau von nebenan.",
        translation: "(To jest torebka eleganckiej kobiety z sąsiedztwa)",
        options: ["eleganten", "eleganter", "elegante", "elegant"],
        correct: "eleganten",
        explanation: "Dopełniacz żeński z nieokreślonym 'einer' - przymiotnik dostaje końcówkę -en. Pokazanie posiadania. Elegancja sąsiadki zaznaczona w opisie. Dopełniacz z przymiotnikiem konsekwentnie używa -en - to jedna z najłatwiejszych końcówek do zapamiętania bo bardzo przewidywalna."
      },
      {
        id: "noun_adj_9",
        question: "Ich habe einem _____ Mann auf der Straße geholfen gestern.",
        translation: "(Pomogłem starszemu mężczyźnie na ulicy wczoraj)",
        options: ["älteren", "älterer", "ältere", "älter"],
        correct: "älteren",
        explanation: "Czasownik 'helfen' wymaga celownika - 'einem älteren Mann'. Męski celownik z nieokreślonym daje -en. Komparatyw 'älteren' (starszemu) opisuje wiek. Pomaganie starszym na ulicy to akt dobroci - szczególnie w trudnych sytuacjach jak noszenie ciężkich toreb czy przechodzenie przez ulicę."
      },
      {
        id: "noun_adj_10",
        question: "Er liest gerade ein _____ Buch über Geschichte faszinierend.",
        translation: "(Czyta właśnie interesującą książkę o historii)",
        options: ["interessantes", "interessanter", "interessante", "interessant"],
        correct: "interessantes",
        explanation: "Z nieokreślonym 'ein' w bierniku nijakim końcówka -es. Książka (das Buch) jako obiekt czytania. Fascynacja historią wzbogaca wiedzę. Nijaki biernik z 'ein' zawsze dostaje wyraźną końcówkę -es - to pomaga rozpoznać przypadek gdy rodzajnik nie zmienia formy."
      },
      {
        id: "noun_adj_11",
        question: "Wir haben in einem _____ Restaurant gegessen ausgezeichnet.",
        translation: "(Jedliśmy w francuskim restauracji znakomicie)",
        options: ["französischen", "französischer", "französische", "französisch"],
        correct: "französischen",
        explanation: "Przyimek 'in' z celownikiem plus nieokreślony 'einem' - końcówka -en dla nijakiego. Restauracja (das Restaurant) jako miejsce jedzenia. Francuska kuchnia ceniona na świecie. Doświadczenia kulinarne w dobrej restauracji to nie tylko jedzenie - to całe przeżycie zmysłowe i kulturalne."
      },
      {
        id: "noun_adj_12",
        question: "Sie gibt einem _____ Kind immer Süßigkeiten beim Besuch.",
        translation: "(Daje zawsze małemu dziecku słodycze przy wizycie)",
        options: ["kleinen", "kleiner", "kleine", "klein"],
        correct: "kleinen",
        explanation: "Czasownik 'geben' wymaga celownika dla odbiorcy - 'einem kleinen Kind'. Nijaki celownik z nieokreślonym daje -en. Słodycze dla dzieci to tradycyjny gest. Dawanie dzieciom słodyczy to sposób na zdobycie sympatii - chociaż rodzice mogą mieć mieszane uczucia o cukrze."
      },
      {
        id: "noun_adj_13",
        question: "Ich suche ein _____ Zimmer zur Miete im Zentrum zentral.",
        translation: "(Szukam wolnego pokoju do wynajęcia w centrum)",
        options: ["freies", "freier", "freie", "frei"],
        correct: "freies",
        explanation: "Z nieokreślonym 'ein' w bierniku nijakim końcówka -es. Pokój (das Zimmer) jako obiekt poszukiwania. Mieszkania w centrum są wygodne ale często droższe. Forma 'ein freies Zimmer' jasno komunikuje co szukasz - precyzyjna komunikacja przyspiesza znalezienie mieszkania."
      },
      {
        id: "noun_adj_14",
        question: "Er träumt von einer _____ Reise um die ganze Welt.",
        translation: "(Marzy o wielkiej podróży dookoła całego świata)",
        options: ["großen", "großer", "große", "groß"],
        correct: "großen",
        explanation: "Przyimek 'von' wymaga celownika - 'einer großen Reise'. Żeński celownik z nieokreślonym daje -en. Podróż (die Reise) jako obiekt marzeń. Marzenia o podróżach inspirują - nawet jeśli nie wszystkie się spełnią, wizja przygody motywuje do oszczędzania i planowania."
      },
      {
        id: "noun_adj_15",
        question: "Das ist das Spielzeug eines _____ Kindes von nebenan.",
        translation: "(To jest zabawka małego dziecka z sąsiedztwa)",
        options: ["kleinen", "kleiner", "kleine", "klein"],
        correct: "kleinen",
        explanation: "Dopełniacz nijaki z nieokreślonym 'eines' - przymiotnik dostaje -en. Posiadanie przez dziecko. Zabawki pozostawione w ogrodzie to znak dziecięcej obecności. Dopełniacz konsekwentnie używa -en dla przymiotników - niezależnie od rodzaju, to najpewniejsza końcówka w tym przypadku."
      }
    ]
  }
};

export default part20Categories;

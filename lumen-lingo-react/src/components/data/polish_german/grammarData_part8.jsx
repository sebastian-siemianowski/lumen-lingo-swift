
/**
 * POLISH → GERMAN GRAMMAR - PART 8
 * 4 categories, 15 questions each - Advanced mastery
 */

import { Calendar, MessageSquare, Repeat, Box } from "lucide-react";

export const part8Categories = {
  temporal_clauses_advanced: {
    name: "Zdania czasowe - zaawansowane",
    description: "Bevor, nachdem, während, sobald, bis",
    icon: Calendar,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "temp_adv_1",
        question: "_____ ich nach Hause komme, rufe ich dich sofort an.",
        translation: "(Jak tylko przyjdę do domu, natychmiast do ciebie zadzwonię)",
        options: ["Sobald", "Bevor", "Nachdem", "Während"],
        correct: "Sobald",
        explanation: "Spójnik 'sobald' oznacza 'jak tylko' i pokazuje natychmiastową reakcję! Druga akcja następuje bez opóźnienia zaraz po pierwszej. To o szybkości - obietnica natychmiastowego działania. Forma 'sobald' wprowadza zdanie czasowe, gdzie czasownik idzie na sam koniec zdania podrzędnego. Używasz tego gdy chcesz podkreślić że reakcja będzie bardzo szybka."
      },
      {
        id: "temp_adv_2",
        question: "_____ wir gegessen hatten, gingen wir spazieren im Park.",
        translation: "(Po tym jak zjedliśmy, poszliśmy na spacer w parku)",
        options: ["Nachdem", "Bevor", "Während", "Sobald"],
        correct: "Nachdem",
        explanation: "Spójnik 'nachdem' zawsze wymaga Plusquamperfekt (hatten gegessen)! Pierwsza akcja musi być całkowicie zakończona przed drugą. To pokazuje jasną sekwencję - jedzenie było zakończone, dopiero potem spacer. W zdaniu podrzędnym używasz czasu zaprzeszłego (Plusquamperfekt), w głównym czasu przeszłego prostego (Präteritum). Ta konstrukcja klarownie pokazuje kolejność zdarzeń."
      },
      {
        id: "temp_adv_3",
        question: "_____ du ausgehst, mach bitte alle Lichter aus sorgfältig!",
        translation: "(Zanim wyjdziesz, wyłącz proszę wszystkie światła starannie!)",
        options: ["Bevor", "Nachdem", "Sobald", "Während"],
        correct: "Bevor",
        explanation: "Spójnik 'bevor' oznacza 'zanim' i wskazuje co ma się stać wcześniej! Najpierw wyłączasz światła, potem dopiero wychodzisz. To przypomnienie o ważnej sekwencji działań. Forma 'bevor' wprowadza zdanie pokazujące co powinno nastąpić przed główną akcją. Instrukcja zapobiegawcza - robisz coś koniecznie przed czymś innym."
      },
      {
        id: "temp_adv_4",
        question: "_____ ich koche, höre ich immer Musik in der Küche.",
        translation: "(Podczas gdy gotuję, zawsze słucham muzyki w kuchni)",
        options: ["Während", "Bevor", "Nachdem", "Sobald"],
        correct: "Während",
        explanation: "Spójnik 'während' pokazuje równoczesność dwóch akcji! Gotowanie i słuchanie muzyki dzieją się dokładnie w tym samym czasie. To o rutynie - jedna czynność towarzyszy drugiej. Forma 'während' używasz gdy chcesz powiedzieć że obie akcje zachodzą równolegle, w tym samym momencie. Typowy przykład wielozadaniowości w kuchni."
      },
      {
        id: "temp_adv_5",
        question: "Warte hier, _____ ich zurückkomme vom Einkaufen schnell.",
        translation: "(Czekaj tutaj, aż wrócę z zakupów szybko)",
        options: ["bis", "bevor", "nachdem", "sobald"],
        correct: "bis",
        explanation: "Spójnik 'bis' oznacza 'aż do' konkretnego momentu! Czekanie trwa nieprzerwanie aż do powrotu - jasno określony punkt końcowy. To prośba o cierpliwość - czekaj dopóki nie wrócę. Forma 'bis' pokazuje że akcja kontynuowana jest bez przerwy aż do określonego zdarzenia. Czas oczekiwania ma wyraźny koniec."
      },
      {
        id: "temp_adv_6",
        question: "_____ der Regen aufhört, bleiben wir im Café gemütlich sitzen.",
        translation: "(Dopóki deszcz nie przestanie, zostajemy w kawiarni wygodnie)",
        options: ["Bis", "Bevor", "Nachdem", "Sobald"],
        correct: "Bis",
        explanation: "Spójnik 'bis' dla kontynuacji stanu aż do zmiany! Pozostajemy w kawiarni dopóki trwa deszcz - warunek zakończenia. To czekanie na zmianę pogody - pobyt uzależniony od warunków. Forma 'bis' w zdaniu pokazuje okres trwania który kończy się gdy nastąpi określona zmiana. Przebywanie jest uzależnione od pogody."
      },
      {
        id: "temp_adv_7",
        question: "_____ sie die Nachricht hörte, begann sie sofort zu weinen.",
        translation: "(Jak tylko usłyszała wiadomość, natychmiast zaczęła płakać)",
        options: ["Sobald", "Bevor", "Während", "Nachdem"],
        correct: "Sobald",
        explanation: "Spójnik 'sobald' podkreśla natychmiastową reakcję emocjonalną! Usłyszenie wiadomości wywołało łzy bez żadnego opóźnienia. To o emocjonalnym wpływie - błyskawiczna odpowiedź. Forma 'sobald' mocno akcentuje momentalność - reakcja następuje dokładnie w tej samej chwili co bodziec wywołujący. Bardzo szybka sekwencja zdarzeń."
      },
      {
        id: "temp_adv_8",
        question: "_____ er das Problem erklärt hatte, verstanden wir alles besser.",
        translation: "(Po tym jak wyjaśnił problem, rozumieliśmy wszystko lepiej)",
        options: ["Nachdem", "Bevor", "Während", "Sobald"],
        correct: "Nachdem",
        explanation: "Spójnik 'nachdem' z Plusquamperfekt pokazuje uprzednie zakończenie! Wyjaśnienie było całkowicie skończone, dopiero potem przyszło zrozumienie. To o uczeniu się - sekwencyjna komprehensja. Forma 'nachdem' wymaga aby pierwsza akcja była kompletnie zakończona przed efektem drugiej. Wyjaśnienie było przyczyną lepszego zrozumienia."
      },
      {
        id: "temp_adv_9",
        question: "_____ wir am Strand sind, geht die Sonne unter wunderschön.",
        translation: "(Podczas gdy jesteśmy na plaży, słońce zachodzi pięknie)",
        options: ["Während", "Bevor", "Nachdem", "Bis"],
        correct: "Während",
        explanation: "Spójnik 'während' tworzy jednoczesne doświadczenie! Jesteśmy obecni dokładnie wtedy gdy zachodzi słońce - obserwujemy razem. To o wyjątkowym momencie - obecność podczas pięknego zjawiska. Dwie rzeczy dzieją się dokładnie w tym samym czasie - wasza obecność i zachód słońca. Ta równoczesność tworzy magiczny moment."
      },
      {
        id: "temp_adv_10",
        question: "_____ du nicht anrufst, weiß ich nie, dass alles okay ist.",
        translation: "(Dopóki nie zadzwonisz, nie wiem, że wszystko w porządku)",
        options: ["Bis", "Bevor", "Sobald", "Nachdem"],
        correct: "Bis",
        explanation: "Spójnik 'bis' pokazuje trwającą niepewność! Niewiedza utrzymuje się nieprzerwanie aż do telefonu. To o niepokoju - brak informacji. Forma 'bis' w konstrukcji negatywnej pokazuje że stan (niewiedza) utrzymuje się do określonego zdarzenia (telefon). Czekanie na potwierdzenie że wszystko jest w porządku."
      },
      {
        id: "temp_adv_11",
        question: "_____ du die Aufgabe machst, erkläre ich dir die Regeln genau.",
        translation: "(Zanim zrobisz zadanie, wyjaśnię ci zasady dokładnie)",
        options: ["Bevor", "Nachdem", "Während", "Sobald"],
        correct: "Bevor",
        explanation: "Spójnik 'bevor' zapewnia logiczną kolejność! Wyjaśnienie reguł musi nastąpić przed wykonaniem zadania - rozsądna sekwencja. To o pedagogice - właściwe przygotowanie. Forma 'bevor' gwarantuje że przygotowanie teoretyczne poprzedza praktyczne wykonanie. Najpierw teoria, potem praktyka - mądre podejście do nauki."
      },
      {
        id: "temp_adv_12",
        question: "_____ ich arbeite, trinke ich viel Kaffee für Energie.",
        translation: "(Podczas gdy pracuję, piję dużo kawy dla energii)",
        options: ["Während", "Bevor", "Nachdem", "Bis"],
        correct: "Während",
        explanation: "Spójnik 'während' opisuje zwyczaj w pracy! Picie kawy dzieje się równolegle z pracowaniem - czynności równoległe. To o rutynie zawodowej - paliwo dla produktywności. Obie czynności trwają dokładnie w tym samym czasie - kawa towarzyszy pracy. Jednoczesne aktywności wspierające się wzajemnie."
      },
      {
        id: "temp_adv_13",
        question: "_____ er angekommen war, hatten wir schon mit dem Essen begonnen.",
        translation: "(Zanim przybył, już zaczęliśmy jeść)",
        options: ["Bevor", "Nachdem", "Sobald", "Während"],
        correct: "Bevor",
        explanation: "Spójnik 'bevor' pokazuje że byliśmy wcześniejsi! Zaczęliśmy jeść przed jego przybyciem - nie czekaliśmy. To o czasie - niecierpliwość lub głód. Forma 'bevor' z czasem zaprzeszłym pokazuje że druga akcja (jedzenie) rozpoczęła się przed pierwszą (przybycie). Ewidentnie nie czekaliśmy na jego przyjście."
      },
      {
        id: "temp_adv_14",
        question: "_____ das Konzert beginnt, müssen alle still sein und zuhören.",
        translation: "(Jak tylko koncert się zaczyna, wszyscy muszą być cicho i słuchać)",
        options: ["Sobald", "Bevor", "Während", "Nachdem"],
        correct: "Sobald",
        explanation: "Spójnik 'sobald' wyraża zasady etykiety koncertowej! Cisza musi nastąpić natychmiast w momencie rozpoczęcia muzyki. To o regułach - kulturowe oczekiwanie. Forma 'sobald' pokazuje że wymóg aktywuje się błyskawicznie z chwilą początku koncertu. Reguła obowiązuje od samej pierwszej nuty."
      },
      {
        id: "temp_adv_15",
        question: "Ich bleibe wach, _____ du nach Hause kommst sicher heute Nacht.",
        translation: "(Zostanę czuwać, aż bezpiecznie wrócisz do domu dzisiaj w nocy)",
        options: ["bis", "bevor", "sobald", "während"],
        correct: "bis",
        explanation: "Spójnik 'bis' wyraża rodzicielskie czuwanie! Nie pójdę spać dopóki nie wrócisz bezpiecznie - ochronne oczekiwanie. To o trosce rodzicielskiej - czuwanie dla spokoju ducha. Forma 'bis' pokazuje determinację do czekania przez cały czas aż do bezpiecznego powrotu. Typowy przykład rodzicielskiej troski - nie zasnę dopóki nie wrócisz."
      }
    ]
  },

  indirect_speech_konjunktiv: {
    name: "Mowa zależna z Konjunktiv I",
    description: "Er sagt, er sei..., sie habe... - relacjonowanie mowy",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "indir_sp_1",
        question: "Er sagt, er _____ morgen keine Zeit für das Treffen.",
        translation: "(Mówi, że nie ma jutro czasu na spotkanie)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe' to Konjunktiv I dla mowy zależnej! W mowie zależnej używasz trybu łączącego - 'er habe' zamiast 'er hat'. To formalne relacjonowanie - dystans od słów. Niemiecki wymaga Konjunktiv I w dziennikarskim i oficjalnym raportowaniu cudzych słów. Pokazuje że to czyjaś wypowiedź, nie twoje stwierdzenie."
      },
      {
        id: "indir_sp_2",
        question: "Sie berichtet, die Veranstaltung _____ sehr erfolgreich gewesen.",
        translation: "(Relacjonuje, że wydarzenie było bardzo udane)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei gewesen' to Konjunktiv I Perfect! Przeszłe wydarzenie w mowie zależnej - 'sei' plus imiesłów. To formalne sprawozdanie - raportowanie przeszłego sukcesu. Konjunktiv I Perfect używasz dla przeszłych wydarzeń w mowie zależnej - 'sei' zamiast 'ist' plus 'gewesen'. Dystansuje reportera od twierdzeń."
      },
      {
        id: "indir_sp_3",
        question: "Der Zeuge sagte aus, er _____ den Vorfall nicht gesehen.",
        translation: "(Świadek zeznał, że nie widział incydentu)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe gesehen' zeznanie w Konjunktiv! Kontekst prawny wymaga trybu łączącego - formalne świadectwo. To o sądzie - relacjonowanie zeznań. W kontekście prawnym używasz Konjunktiv I aby pokazać że to słowa świadka, nie potwierdzone fakty. Protokół sądowy używa tej formy."
      },
      {
        id: "indir_sp_4",
        question: "Die Ministerin erklärt, sie _____ die Entscheidung nicht alleine getroffen.",
        translation: "(Minister wyjaśnia, że nie podjęła decyzji samodzielnie)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe getroffen' polityczne oświadczenie! Oficjalne wypowiedzi nie mogą być cytowane z 'hat' - wymaga Konjunktiv. To o polityce - dystansowanie mediów. Media używają Konjunktiv I żeby pokazać że relacjonują słowa polityka bez popierania ich prawdziwości. Profesjonalny dziennikarstwo."
      },
      {
        id: "indir_sp_5",
        question: "Er behauptet, er _____ von den Problemen nichts gewusst vorher.",
        translation: "(Twierdzi, że nic nie wiedział o problemach wcześniej)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe gewusst' twierdzenie w Konjunktiv! Czasownik 'behaupten' (twierdzić) wymaga dystansu - jego twierdzenie nie fakt. To o zaprzeczaniu - twierdzenie o niewiedzy. Konjunktiv I pokazuje że reporter nie potwierdza prawdziwości - po prostu przekazuje co zostało powiedziane. Neutralność reportera."
      },
      {
        id: "indir_sp_6",
        question: "Man sagt, das Restaurant _____ das beste in der Stadt.",
        translation: "(Mówi się, że restauracja jest najlepsza w mieście)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei' dla plotki! Konstrukcja 'man sagt' (ludzie mówią) wymaga Konjunktiv - informacja z drugiej ręki. To rekomendacja oparta na opiniach - nie własne doświadczenie. Konjunktiv I pokazuje że to informacja z drugiej ręki, nie zweryfikowana osobiście. Przekazywanie tego co inni twierdzą."
      },
      {
        id: "indir_sp_7",
        question: "Sie teilte mit, sie _____ nächste Woche in Urlaub fahren.",
        translation: "(Poinformowała, że pojedzie w przyszłym tygodniu na urlop)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde fahren' przyszłość w Konjunktiv I! Relacjonowane przyszłe plany - 'werde' zamiast 'wird'. To ogłoszenie - informowanie o planach. Konjunktiv I przyszły używa 'werde' plus bezokolicznik dla relacjonowania czyjejś przyszłości. Formalne przekazywanie zamiarów."
      },
      {
        id: "indir_sp_8",
        question: "Er versichert, er _____ pünktlich zur Besprechung erscheinen morgen.",
        translation: "(Zapewnia, że pojawi się punktualnie na spotkaniu jutro)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde erscheinen' obietnica w Konjunktiv! Przyszłe zobowiązanie relacjonowane formalnie. To zapewnienie - raportowanie pewności. Obietnice dotyczące przyszłości w mowie zależnej też używają Konjunktiv I - 'werde' pokazuje dystans od zobowiązania."
      },
      {
        id: "indir_sp_9",
        question: "Die Firma gibt bekannt, sie _____ neue Mitarbeiter einstellen bald.",
        translation: "(Firma ogłasza, że zatrudni wkrótce nowych pracowników)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde einstellen' korporacyjne ogłoszenie! Plany firmy raportowane w Konjunktiv. To komunikat prasowy - oficjalna komunikacja. Ogłoszenia biznesowe używają Konjunktiv I aby pokazać że to oświadczenie firmy - media tylko przekazują. Profesjonalny standard raportowania."
      },
      {
        id: "indir_sp_10",
        question: "Der Arzt erklärt, die Behandlung _____ mehrere Wochen dauern.",
        translation: "(Lekarz wyjaśnia, że leczenie potrwa kilka tygodni)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde dauern' prognoza medyczna! Przewidywanie lekarza raportowane formalnie. To informacja zdrowotna - harmonogram leczenia. Oświadczenia profesjonalistów medycznych w mowie zależnej używają Konjunktiv I - pokazuje że to ocena lekarza. Przekazywanie opinii medycznej."
      },
      {
        id: "indir_sp_11",
        question: "Sie erzählt, sie _____ gestern einen alten Freund getroffen zufällig.",
        translation: "(Opowiada, że wczoraj spotkała starego przyjaciela przypadkowo)",
        options: ["habe", "hat", "hätte", "haben"],
        correct: "habe",
        explanation: "Forma 'habe getroffen' osobista historia! Narracja w Konjunktiv I - raportowanie jej opowieści. To anegdota - przekazywanie spotkania. Nawet swobodne historie można relacjonować w Konjunktiv I dla formalności lub dystansu. Pokazuje że przekazujesz jej wersję wydarzeń."
      },
      {
        id: "indir_sp_12",
        question: "Der Chef meint, das Projekt _____ bis Ende des Monats fertig.",
        translation: "(Szef uważa, że projekt będzie gotowy do końca miesiąca)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei fertig' opinia szefa! Pogląd zarządu raportowany w Konjunktiv. To miejsce pracy - przekazywanie oczekiwań szefa. Konjunktiv I dla opinii i przewidywań pokazuje że to szef myśli, nie obiektywny fakt. Raportowanie subiektywnej oceny."
      },
      {
        id: "indir_sp_13",
        question: "Man berichtet, der Unfall _____ durch Nebel verursacht worden.",
        translation: "(Donosi się, że wypadek został spowodowany przez mgłę)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei verursacht worden' bierna Perfect w Konjunktiv! Relacjonowana przyczyna - oficjalna wersja. To raport wiadomości - wyjaśnienie wypadku. Strona bierna w Konjunktiv I: 'sei' plus imiesłów plus 'worden'. Relacjonowanie oficjalnej wersji przyczyny bez potwierdzania."
      },
      {
        id: "indir_sp_14",
        question: "Sie verspricht, sie _____ nie wieder zu spät kommen zur Arbeit.",
        translation: "(Obiecuje, że nigdy więcej się nie spóźni do pracy)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Forma 'werde kommen' przyszła obietnica! Zobowiązanie do przyszłego zachowania raportowane. To zobowiązanie w pracy - obietnica punktualności. Przyszłe zobowiązania w mowie zależnej: 'werde' plus bezokolicznik plus 'nie wieder'. Formalne przekazywanie czyjejś przyszłej intencji."
      },
      {
        id: "indir_sp_15",
        question: "Der Experte meint, das _____ die beste Lösung für uns alle.",
        translation: "(Ekspert uważa, że to najlepsze rozwiązanie dla nas wszystkich)",
        options: ["sei", "ist", "wäre", "war"],
        correct: "sei",
        explanation: "Forma 'sei die beste Lösung' opinia eksperta! Profesjonalna ocena raportowana formalnie. To konsultacja - przekazywanie poglądu eksperta. Konjunktiv I dla opinii i rekomendacji pokazuje że to profesjonalna ocena eksperta będąca przekazaną. Dystans od subiektywnej oceny."
      }
    ]
  },

  verb_prefixes_meaning: {
    name: "Przedrostki czasownikowe i znaczenie",
    description: "Ver-, be-, ent-, er- i zmiana znaczenia",
    icon: Repeat,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "verb_pref_1",
        question: "Ich habe mich _____ - ich bin jetzt im falschen Zimmer!",
        translation: "(Pomyliłem się - jestem teraz w złym pokoju!)",
        options: ["verlaufen", "gelaufen", "belaufen", "erlaufen"],
        correct: "verlaufen",
        explanation: "Czasownik 'verlaufen' to zgubić się (błędnie iść)! Przedrostek 'ver-' często oznacza błąd lub złą akcję. To o pomyłce - wrong direction. Przedrostek 'ver-' dodany do czasownika często wskazuje że akcja poszła źle - 'laufen' (iść) przekształca się w 'verlaufen' (zabłądzić). Przedrostek zmienia znaczenie na negatywne."
      },
      {
        id: "verb_pref_2",
        question: "Der Lehrer _____ uns die Grammatik sehr klar und verständlich.",
        translation: "(Nauczyciel wyjaśnia nam gramatykę bardzo jasno i zrozumiale)",
        options: ["erklärt", "klärt", "beklärt", "verklärt"],
        correct: "erklärt",
        explanation: "Czasownik 'erklären' to wyjaśniać - przedrostek 'er-' tworzy nowe znaczenie! Bez przedrostka 'klären' (wyjaśnić), z 'er-' równa się wyjaśniać. To o nauczaniu - czynienie zrozumiałym. Przedrostek 'er-' często tworzy czasowniki osiągnięcia lub rezultatu - 'erklären' przynosi zrozumienie jako rezultat."
      },
      {
        id: "verb_pref_3",
        question: "Sie _____ das Geschenk schön mit buntem Papier für die Party.",
        translation: "(Pakuje prezent pięknie w kolorowy papier na imprezę)",
        options: ["verpackt", "packt", "bepackt", "entpackt"],
        correct: "verpackt",
        explanation: "Czasownik 'verpacken' to zapakować - przedrostek 'ver-' tworzy kompletną akcję! Forma 'packen' (chwytać), 'verpacken' (zapakować całkowicie). To przygotowanie - pakowanie prezentu. Przedrostek 'ver-' może intensyfikować lub kompletować akcję - 'verpacken' oznacza dokładne owijanie. Przedrostek dodaje znaczenie kompletności."
      },
      {
        id: "verb_pref_4",
        question: "Ich muss das Paket _____ um zu sehen, was drin ist!",
        translation: "(Muszę rozpakować paczkę żeby zobaczyć, co w środku!)",
        options: ["entpacken", "verpacken", "bepacken", "packen"],
        correct: "entpacken",
        explanation: "Czasownik 'entpacken' to rozpakować - przedrostek 'ent-' oznacza ODWRÓCENIE! Przeciwieństwo 'verpacken' (pakować). To ciekawość - otwieranie paczki. Przedrostek 'ent-' tworzy przeciwieństwo lub usunięcie - 'entpacken' cofa 'verpacken'. Akcja odwrotna przez przedrostek."
      },
      {
        id: "verb_pref_5",
        question: "Er hat sein ganzes Vermögen _____ durch schlechte Investitionen.",
        translation: "(Stracił cały majątek przez złe inwestycje)",
        options: ["verloren", "geloren", "beloren", "erloren"],
        correct: "verloren",
        explanation: "Czasownik 'verlieren' to stracić - przedrostek 'ver-' dla utraty! Rdzeń 'lieren' nie istnieje sam, tylko z przedrostkiem. To finansowa tragedia - utrata bogactwa. Przedrostek 'ver-' w 'verlieren' tworzy znaczenie straty lub marnowania - całkowita utrata. Przedrostek niezbędny dla tego czasownika."
      },
      {
        id: "verb_pref_6",
        question: "Die Pflanze _____ ohne Wasser und Sonnenlicht schnell leider.",
        translation: "(Roślina usycha bez wody i światła słonecznego szybko niestety)",
        options: ["verdorrt", "dorrt", "bedorrt", "entdorrt"],
        correct: "verdorrt",
        explanation: "Czasownik 'verdorren' to usychać - przedrostek 'ver-' pokazuje deteriorację! Proces umierania rośliny - negatywna zmiana. To o zaniedbaniu - cierpienie rośliny. Przedrostek 'ver-' często wskazuje degradację lub psucie się - 'verdorren' (całkowicie uschnąć). Przedrostek dla negatywnych transformacji."
      },
      {
        id: "verb_pref_7",
        question: "Kannst du mir bitte _____, wo der Bahnhof ist genau?",
        translation: "(Czy możesz mi proszę powiedzieć, gdzie jest dworzec dokładnie?)",
        options: ["sagen", "besagen", "versagen", "ersagen"],
        correct: "sagen",
        explanation: "Czasownik 'sagen' BEZ przedrostka dla prostego mówienia! Po prostu powiedz - żaden specjalny przedrostek niepotrzebny. To pytanie o drogę - prosta prośba. Nie wszystkie czasowniki potrzebują przedrostków - 'sagen' działa samo dla podstawowej komunikacji. Czasami prosta forma jest najlepsza."
      },
      {
        id: "verb_pref_8",
        question: "Was _____ dieser Satz auf Deutsch? Ich verstehe ihn nicht.",
        translation: "(Co oznacza to zdanie po niemiecku? Nie rozumiem go)",
        options: ["bedeutet", "deutet", "verdeutet", "erdeutet"],
        correct: "bedeutet",
        explanation: "Czasownik 'bedeuten' to oznaczać - przedrostek 'be-' tworzy czasownik znaczenia! Forma 'deuten' (interpretować), 'bedeuten' (oznaczać). To pytanie o definicję - szukanie znaczenia. Przedrostek 'be-' w 'bedeuten' tworzy czasownik wyrażający znaczenie. Niezbędny dla pytania 'co to znaczy'."
      },
      {
        id: "verb_pref_9",
        question: "Ich habe meinen Schlüssel _____ - ich kann ihn nirgends finden!",
        translation: "(Zgubiłem klucz - nie mogę go nigdzie znaleźć!)",
        options: ["verloren", "geloren", "beloren", "entloren"],
        correct: "verloren",
        explanation: "Forma 'verloren' utrata posiadania! Przedrostek 'ver-' dla rzeczy zaginających - gubienie przedmiotów. To frustracja - nie mogę zlokalizować klucza. Czasownik 'verlieren' z przedrostkiem 'ver-' standardowy dla wyrażania utraty obiektów. Akcja niepożądana - przedrostek pokazuje negatywny wynik."
      },
      {
        id: "verb_pref_10",
        question: "Die Polizei hat den Dieb endlich _____ nach langer Suche.",
        translation: "(Policja w końcu złapała złodzieja po długim poszukiwaniu)",
        options: ["gefasst", "fasst", "verfasst", "befasst"],
        correct: "gefasst",
        explanation: "Czasownik 'fassen' to łapać - bez przedrostka dla aresztowania! Policja złapała złodzieja - proste schwytanie. To o sukcesie śledztwa - schwytanie. Forma 'fassen' (łapać) działa sama - nie potrzeba przedrostka dla podstawowego łapania. Uwaga: 'verfassen' (pisać/komponować) to całkiem inne znaczenie!"
      },
      {
        id: "verb_pref_11",
        question: "Ich kann dieses Wort nicht richtig _____ - die Schreibweise ist schwer.",
        translation: "(Nie mogę poprawnie przeliterować tego słowa - pisownia jest trudna)",
        options: ["buchstabieren", "stabieren", "verstabieren", "entstabieren"],
        correct: "buchstabieren",
        explanation: "Czasownik 'buchstabieren' to literować! Złożenie z 'Buchstabe' (litera) nie przedrostek. To o trudności pisowni - wymowa do pisania. Nie każde 'be-' jest przedrostkiem - 'buchstabieren' pochodzi od rzeczownika 'Buchstabe' (litera). Czasownik akcji literowania."
      },
      {
        id: "verb_pref_12",
        question: "Er _____ sich mit diesem Thema sehr intensiv seit Monaten.",
        translation: "(Zajmuje się tym tematem bardzo intensywnie od miesięcy)",
        options: ["befasst", "fasst", "verfasst", "erfasst"],
        correct: "befasst",
        explanation: "Czasownik 'sich befassen mit' to zajmować się czymś! Przedrostek 'be-' tworzy zwrotny czasownik zaangażowania. To o studiowaniu - głębokie zaangażowanie. Forma 'befassen' z przedrostkiem 'be-' oznacza zajmować się tematem. Zwrotny czasownik dla intelektualnego zaangażowania."
      },
      {
        id: "verb_pref_13",
        question: "Die Blumen _____ einen wunderbaren Duft im ganzen Raum schön.",
        translation: "(Kwiaty roztaczają wspaniały zapach w całym pokoju pięknie)",
        options: ["verbreiten", "breiten", "bebreiten", "entbreiten"],
        correct: "verbreiten",
        explanation: "Czasownik 'verbreiten' to rozprzestrzeniać - przedrostek 'ver-' dla rozproszenia! Forma 'breiten' (rozszerzać), 'verbreiten' (rozprzestrzeniać). To o aromacie - dystrybucja zapachu. Przedrostek 'ver-' in 'verbreiten' pokazuje akcję rozprzestrzeniania - aromat wypełnia przestrzeń. Przedrostek dla dystrybucji."
      },
      {
        id: "verb_pref_14",
        question: "Der Schriftsteller _____ gerade einen neuen Roman über Geschichte.",
        translation: "(Pisarz właśnie pisze nową powieść o historii)",
        options: ["verfasst", "fasst", "befasst", "erfasst"],
        correct: "verfasst",
        explanation: "Czasownik 'verfassen' to komponować lub pisać formalnie! Przedrostek 'ver-' tworzy czasownik literackiej kreacji. To praca twórcza - pisanie powieści. Forma 'verfassen' z 'ver-' używana dla formalnego pisania (dokumenty, książki) - więcej niż proste 'schreiben'. Profesjonalne autorstwo."
      },
      {
        id: "verb_pref_15",
        question: "Ich habe die wichtigsten Punkte in meinem Notizbuch _____.",
        translation: "(Zanotowałem najważniejsze punkty w moim notatniku)",
        options: ["vermerkt", "merkt", "bemerkt", "gemerkt"],
        correct: "vermerkt",
        explanation: "Czasownik 'vermerken' to zanotować! Przedrostek 'ver-' dla akcji zapisywania - robienie notatki. To dokumentacja - przechwytywanie informacji. Forma 'vermerken' oznacza zapisać formalnie - 'ver-' pokazuje celowe rejestrowanie. Różne od 'bemerken' (zauważyć). Intencjonalne notowanie."
      }
    ]
  },

  adjective_noun_combinations: {
    name: "Połączenia przymiotnik-rzeczownik",
    description: "Schwarz + Brot = Schwarzbrot, rozpoznawanie wzorów",
    icon: Box,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "adj_noun_1",
        question: "Zum Frühstück esse ich gerne _____ mit Butter und Käse.",
        translation: "(Na śniadanie lubię jeść czarny chleb z masłem i serem)",
        options: ["Schwarzbrot", "schwarzes Brot", "Brot schwarz", "schwarz Brot"],
        correct: "Schwarzbrot",
        explanation: "Słowo złożone 'Schwarzbrot'! Przymiotnik plus rzeczownik razem jako jeden rzeczownik. To o jedzeniu - typ chleba. Niemiecki tworzy złożenia łącząc słowa - 'schwarz' plus 'Brot' równa się 'Schwarzbrot' (konkretny typ chleba). Napisane razem z wielką literą bo to rzeczownik."
      },
      {
        id: "adj_noun_2",
        question: "An der _____ gibt es viele interessante Geschäfte und Cafés.",
        translation: "(Na głównej ulicy jest wiele ciekawych sklepów i kawiarni)",
        options: ["Hauptstraße", "Straße haupt", "haupt Straße", "Straßehaupt"],
        correct: "Hauptstraße",
        explanation: "Złożenie 'Hauptstraße' główna ulica! Połączenie 'Haupt' (główny) plus 'Straße' (ulica) równa się konkretny typ ulicy. To nawigacja - identyfikacja lokalizacji. Złożenie pokazuje że to nie zwykła ulica ale GŁÓWNA ulica. Jedno słowo określające typ drogi w mieście."
      },
      {
        id: "adj_noun_3",
        question: "Meine Großmutter trägt immer ihr _____ am Handgelenk schön.",
        translation: "(Moja babcia zawsze nosi swoją złotą bransoletkę na nadgarstku pięknie)",
        options: ["Goldarmband", "goldenes Armband", "Armband gold", "Gold Armband"],
        correct: "Goldarmband",
        explanation: "Złożenie biżuterii 'Goldarmband'! Połączenie 'Gold' plus 'Armband' równa się konkretny typ bransoletki. To o biżuterii - specyfikacja materiału. Materiał plus przedmiot tworzy złożenie określające typ biżuterii. Złota bransoletka jako jeden rzeczownik pokazuje rodzaj przedmiotu."
      },
      {
        id: "adj_noun_4",
        question: "Im Winter trage ich immer meinen warmen _____ gegen die Kälte.",
        translation: "(Zimą zawsze noszę swój ciepły zimowy płaszcz przeciw zimnu)",
        options: ["Wintermantel", "Winter Mantel", "Mantel Winter", "wintermantel"],
        correct: "Wintermantel",
        explanation: "Złożenie sezonowej odzieży 'Wintermantel'! Połączenie 'Winter' plus 'Mantel' (płaszcz) równa się odzież specyficzna dla pory roku. To o garderobie - odpowiednie ubranie. Pora roku plus ubranie tworzy złożenie typu odzieży. Zimowy płaszcz jako jednostka leksykalna."
      },
      {
        id: "adj_noun_5",
        question: "Der _____ ist sehr wichtig für die Sicherheit im Straßenverkehr.",
        translation: "(Czerwone światło jest bardzo ważne dla bezpieczeństwa w ruchu drogowym)",
        options: ["Rotlicht", "rotes Licht", "Licht rot", "Rot Licht"],
        correct: "Rotlicht",
        explanation: "Złożenie sygnału drogowego 'Rotlicht'! Kolor plus 'Licht' (światło) równa się konkretny typ sygnału. To o bezpieczeństwie - zasady ruchu. UWAGA: 'Rotlicht' może też oznaczać dzielnicę czerwonych latarni - kontekst ważny! Tu o sygnalizacji drogowej. Złożenie może mieć różne znaczenia w różnych kontekstach."
      },
      {
        id: "adj_noun_6",
        question: "Ich möchte bitte ein Glas _____ zum Mittagessen bestellen.",
        translation: "(Chciałbym proszę szklankę czerwonego wina do obiadu zamówić)",
        options: ["Rotwein", "roter Wein", "Wein rot", "rotwein"],
        correct: "Rotwein",
        explanation: "Złożenie typu wina 'Rotwein'! Połączenie 'Rot' plus 'Wein' równa się czerwone wino jako kategoria. To zamówienie w restauracji - wybór napoju. Typ wina jako złożenie - 'Rotwein' versus 'Weißwein' (białe). Kategoria napoju pisana razem jako rzeczownik."
      },
      {
        id: "adj_noun_7",
        question: "Das _____ dieser Maschine ist sehr modern und fortschrittlich.",
        translation: "(Wysokie napięcie tej maszyny jest bardzo nowoczesne i postępowe)",
        options: ["Hochspannung", "hohe Spannung", "Spannung hoch", "hoch Spannung"],
        correct: "Hochspannung",
        explanation: "Termin elektryczny 'Hochspannung'! Połączenie 'Hoch' (wysokie) plus 'Spannung' (napięcie) równa się techniczna specyfikacja. To o technologii - właściwość elektryczna. Techniczne złożenia łączą parametr z rzeczą - 'Hochspannung' jako termin techniczny. Jeden rzeczownik dla konceptu."
      },
      {
        id: "adj_noun_8",
        question: "Im Sommer trinken wir gerne _____ mit Eiswürfeln erfrischend.",
        translation: "(Latem chętnie pijemy zimną herbatę z kostkami lodu orzeźwiająco)",
        options: ["Eistee", "kalter Tee", "Tee kalt", "eiskalter Tee"],
        correct: "Eistee",
        explanation: "Złożenie napoju 'Eistee'! Połączenie 'Eis' (lód) plus 'Tee' równa się mrożona herbata jako produkt. To letni napój - orzeźwienie. Typ napoju jako złożenie - 'Eistee' konkretna schłodzona herbata. Kategoria napojów często jako złożenia w niemieckim."
      },
      {
        id: "adj_noun_9",
        question: "Der _____ ist heute wunderschön blau und wolkenlos am Himmel.",
        translation: "(Niebo jest dzisiaj cudownie niebieskie i bezchmurne)",
        options: ["Himmel", "Blauehimmel", "Blauhimmel", "blauer Himmel"],
        correct: "Himmel",
        explanation: "Prosty rzeczownik 'der Himmel' BEZ złożenia! Niebo nie potrzebuje przedrostka 'blau-' - opisz oddzielnie. To o pogodzie - piękny dzień. Nie wszystko jest złożeniem - czasem przymiotnik plus rzeczownik normalnie: 'der blaue Himmel'. Rzeczownik 'Himmel' jako koncept nie tworzy standardowego złożenia z kolorem."
      },
      {
        id: "adj_noun_10",
        question: "In der Stadt gibt es ein neues _____ für sportliche Aktivitäten.",
        translation: "(W mieście jest nowe centrum sportowe dla aktywności sportowych)",
        options: ["Sportzentrum", "Sport Zentrum", "sportliches Zentrum", "Zentrum Sport"],
        correct: "Sportzentrum",
        explanation: "Złożenie obiektu 'Sportzentrum'! Połączenie 'Sport' plus 'Zentrum' (centrum) równa się obiekt sportowy. To o infrastrukturze - miejsce atletyczne. Typ obiektu jako złożenie - 'Sportzentrum' określa przeznaczenie budynku. Cel plus typ budynku to standardowy wzór."
      },
      {
        id: "adj_noun_11",
        question: "Der _____ der Firma wird nächste Woche bekannt gegeben offiziell.",
        translation: "(Roczny raport firmy zostanie ogłoszony w przyszłym tygodniu oficjalnie)",
        options: ["Jahresbericht", "jährlicher Bericht", "Bericht Jahr", "Jahr Bericht"],
        correct: "Jahresbericht",
        explanation: "Złożenie dokumentu biznesowego 'Jahresbericht'! Połączenie 'Jahr' (rok) plus 'Bericht' (raport) równa się raport roczny. To korporacja - ujawnienie finansowe. Czasowy okres plus typ dokumentu tworzy konkretne złożenie. Standardowa terminologia biznesowa jako słowo złożone."
      },
      {
        id: "adj_noun_12",
        question: "Die Kinder spielen gerne auf dem _____ hinter dem Haus.",
        translation: "(Dzieci chętnie bawią się na zielonym trawniku za domem)",
        options: ["Rasen", "Grünrasen", "grüner Rasen", "Rasengrün"],
        correct: "Rasen",
        explanation: "Proste słowo 'der Rasen' BEZ przedrostka koloru! Trawnik z natury zielony - nie trzeba specyfikować. To o zabawie - teren do gry. Niektóre rzeczy domyślnie mają kolor - 'Rasen' (trawnik) nie potrzebuje 'Grün-' bo zawsze zielony. Kolor domyślny."
      },
      {
        id: "adj_noun_13",
        question: "Bitte bring mir ein Glas _____ aus dem Kühlschrank mit!",
        translation: "(Przynieś mi proszę szklankę zimnej wody z lodówki!)",
        options: ["kaltes Wasser", "Kaltwasser", "Wasser kalt", "kalt Wasser"],
        correct: "kaltes Wasser",
        explanation: "Fraza 'kaltes Wasser' NIE złożenie! Deskryptor temperatury używany normalnie - przymiotnik plus rzeczownik. To prośba - schłodzony napój. Woda z przymiotnikiem temperatury nie tworzy złożenia - 'kaltes Wasser' jako fraza. Forma 'Kaltwasser' nie jest standardowym terminem."
      },
      {
        id: "adj_noun_14",
        question: "Die _____ in diesem Gebäude funktioniert nicht mehr richtig.",
        translation: "(Wysoka prędkość w tym budynku nie działa już poprawnie)",
        options: ["hohe Geschwindigkeit", "Hochgeschwindigkeit", "Geschwindigkeit hoch", "Hoch Geschwindigkeit"],
        correct: "hohe Geschwindigkeit",
        explanation: "Fraza 'hohe Geschwindigkeit' NIE pojedyncze złożenie! Wysoka prędkość jako opis - fraza przymiotnikowa. To techniczna skarga - problem windy. Choć 'Hochgeschwindigkeit' może być używane, 'hohe Geschwindigkeit' bardziej standardowe dla opisywania poziomu prędkości. Kontekst determinuje złożenie versus fraza."
      },
      {
        id: "adj_noun_15",
        question: "Im _____ kann man die Sterne besonders gut sehen klar.",
        translation: "(W ciemnej nocy można szczególnie dobrze widzieć gwiazdy wyraźnie)",
        options: ["dunkler Nacht", "Dunkeln", "Nachtdunkel", "Dunkelnacht"],
        correct: "dunkler Nacht",
        explanation: "Forma frazy 'in der dunklen Nacht'! Noc z przymiotnikiem - nie złożenie. To o astronomii - obserwacja gwiazd. Rzeczownik 'Nacht' z przymiotnikiem 'dunkel' używane jako normalna fraza. Nie wszystkie kombinacje przymiotnik plus rzeczownik stają się złożeniami - często zostają jako frazy."
      }
    ]
  },

  mixed_declensions: {
    name: "Mieszane deklinacje",
    description: "Ein, kein, mein + końcówki przymiotnikowe",
    icon: Repeat,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: []
  }
};

export default part8Categories;

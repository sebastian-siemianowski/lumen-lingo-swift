/**
 * POLISH → GERMAN GRAMMAR - PART 18
 * 4 kategorie, 15 pytań każda
 */

import { Flame, Mountain, Coffee, Briefcase } from "lucide-react";

export const part18Categories = {
  complex_sentence_structures: {
    name: "Złożone struktury zdaniowe",
    description: "Mehrere Nebensätze - łączenie wielu zdań podrzędnych",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "complex_1",
        question: "Ich glaube, _____ er kommt, _____ das Wetter besser wird morgen.",
        translation: "(Myślę, że przyjdzie, jeśli pogoda się jutro poprawi)",
        options: ["dass / wenn", "wenn / dass", "weil / wenn", "dass / weil"],
        correct: "dass / wenn",
        explanation: "Zdanie zawiera dwa poziomy podrzędności - najpierw 'dass' (że myślę), potem 'wenn' (jeśli pogoda). To złożona struktura: myślenie zawiera warunek. Pierwszy poziom 'dass' wprowadza twoją myśl, drugi poziom 'wenn' wprowadza warunek w tej myśli. Takie wielopoziomowe zdania są powszechne w złożonych rozumowaniach."
      },
      {
        id: "complex_2",
        question: "Sie sagte mir, _____ sie kommt, _____ sie Zeit hat heute.",
        translation: "(Powiedziała mi, że przyjdzie, jeśli będzie miała dzisiaj czas)",
        options: ["dass / wenn", "wenn / dass", "weil / wenn", "dass / weil"],
        correct: "dass / wenn",
        explanation: "Ponownie podwójna podrzędność - jej wypowiedź ('dass') zawiera warunek ('wenn'). Przekazujesz co powiedziała, a jej słowa zawierały warunek. Struktura: główne + zdanie podrzędne + zdanie podrzędne w zdaniu podrzędnym. Warunkowa obietnica pokazuje uczciwość - nie gwarantuje ale wyraża intencję."
      },
      {
        id: "complex_3",
        question: "Ich weiß nicht, _____ er morgen kommen kann, _____ er krank ist.",
        translation: "(Nie wiem, czy może jutro przyjść, ponieważ jest chory)",
        options: ["ob / weil", "dass / weil", "ob / wenn", "wenn / weil"],
        correct: "ob / weil",
        explanation: "Struktura z 'ob' (czy) plus 'weil' (ponieważ) - niewiedza zawiera wyjaśnienie. Pierwsza część wyraża niepewność, druga podaje możliwy powód. Choroba to obiektywny powód nieobecności. 'Ob' wprowadza pytanie pośrednie, 'weil' wyjaśnia kontekst niepewności."
      },
      {
        id: "complex_4",
        question: "Er hat gesagt, _____ er uns hilft, _____ wir ihn darum bitten.",
        translation: "(Powiedział, że nam pomoże, jeśli go o to poprosimy)",
        options: ["dass / wenn", "wenn / dass", "dass / weil", "weil / wenn"],
        correct: "dass / wenn",
        explanation: "Jego deklaracja ('dass') zawiera warunek ('wenn') - pomoże GDY zostanie poproszony. To pokazuje gotowość ale też szacunek dla autonomii - czeka na prośbę. Struktura warunkowej oferty pomocy jest grzeczna - nie narzuca się ale daje jasny sygnał gotowości."
      },
      {
        id: "complex_5",
        question: "Wir bleiben hier, _____ es aufhört zu regnen, _____ wir nach Hause gehen können.",
        translation: "(Zostajemy tutaj, aż przestanie padać, żebyśmy mogli pójść do domu)",
        options: ["bis / damit", "wenn / damit", "bis / weil", "damit / bis"],
        correct: "bis / damit",
        explanation: "Kombinacja 'bis' (aż) z 'damit' (żeby) - czekanie ma cel. Pozostają dopóki pada, A CEL tego jest możliwość bezpiecznego powrotu. Struktura pokazuje cierpliwość i rozsądek - nie ryzykują zdrowia. Czekanie na lepsze warunki to przemyślana decyzja."
      },
      {
        id: "complex_6",
        question: "Ich frage mich, _____ er wohl macht, _____ er nicht antwortet.",
        translation: "(Zastanawiam się, co robi, że nie odpowiada)",
        options: ["was / dass", "dass / was", "was / weil", "weil / was"],
        correct: "was / dass",
        explanation: "Pytanie pośrednie 'was er macht' (co robi) plus konsekwencja 'dass' (że nie odpowiada). Struktura wyraża ciekawość i troskę. Brak odpowiedzi rodzi pytania. Kombinacja pytania z obserwacją tworzy złożoną refleksję - próbujesz zrozumieć sytuację łącząc różne informacje."
      },
      {
        id: "complex_7",
        question: "Sie glaubt, _____ sie schafft, _____ sie genug übt für Prüfung.",
        translation: "(Wierzy, że da radę, jeśli wystarczająco poćwiczy do egzaminu)",
        options: ["dass / wenn", "wenn / dass", "dass / weil", "weil / dass"],
        correct: "dass / wenn",
        explanation: "Jej wiara ('dass') zawiera warunek ('wenn') - sukces zależy od wysiłku. To pozytywne myślenie z realistycznym warunkiem. Struktura pokazuje że rozumie związek między praktyką a rezultatem. Wiara we własne możliwości pod warunkiem pracy to zdrowe podejście - optymizm z odpowiedzialnością."
      },
      {
        id: "complex_8",
        question: "Ich hoffe sehr, _____ du kommst, _____ ich dich lange nicht gesehen habe.",
        translation: "(Bardzo mam nadzieję, że przyjdziesz, ponieważ nie widziałem cię długo)",
        options: ["dass / weil", "weil / dass", "dass / wenn", "wenn / dass"],
        correct: "dass / weil",
        explanation: "Nadzieja ('dass') z uzasadnieniem ('weil') - chcesz żeby przyszedł BO tęsknisz. Struktura łączy pragnienie z emocjonalnym powodem. Długa rozłąka wzmacnia chęć zobaczenia się. Wyrażanie tęsknoty przez wyjaśnienie dlaczego spotkanie jest ważne - to szczera komunikacja uczuć."
      },
      {
        id: "complex_9",
        question: "Er fragte, _____ ich weiß, _____ der Zug abfährt heute.",
        translation: "(Zapytał, czy wiem, kiedy odjeżdża pociąg dzisiaj)",
        options: ["ob / wann", "wann / ob", "dass / wann", "ob / dass"],
        correct: "ob / wann",
        explanation: "Pytanie pośrednie ('ob') zawiera drugie pytanie ('wann') - czy wiesz KIEDY. Podwójne pytanie w jednym zdaniu. Pierwszy poziom pyta o twoją wiedzę, drugi o konkretną informację. Takie zagnieżdżone pytania są częste gdy ktoś szuka pomocy z informacją."
      },
      {
        id: "complex_10",
        question: "Wir haben gehört, _____ sie umzieht, _____ sie eine neue Arbeit gefunden hat.",
        translation: "(Słyszeliśmy, że przeprowadza się, ponieważ znalazła nową pracę)",
        options: ["dass / weil", "weil / dass", "dass / wenn", "wenn / dass"],
        correct: "dass / weil",
        explanation: "Wiadomość ('dass') z wyjaśnieniem ('weil') - przeprowadzka ma przyczynę w nowej pracy. Struktura łączy fakt z jego motywacją. Zmiana pracy często oznacza zmianę miejsca. Wyjaśnianie przyczyn decyzji życiowych pomaga innym zrozumieć nasze wybory."
      },
      {
        id: "complex_11",
        question: "Sie überlegte lange, _____ sie annehmen soll, _____ das Angebot gut ist.",
        translation: "(Zastanawiała się długo, czy powinna przyjąć, chociaż oferta jest dobra)",
        options: ["ob / obwohl", "obwohl / ob", "ob / weil", "weil / ob"],
        correct: "ob / obwohl",
        explanation: "Wątpliwość ('ob') mimo dobrej sytuacji ('obwohl') - komplikuje proste decyzje. Struktura pokazuje wewnętrzny konflikt - wahanie mimo oczywistych korzyści. Nie wszystkie decyzje są proste nawet gdy logika jest jasna - emocje i inne czynniki komplikują wybory."
      },
      {
        id: "complex_12",
        question: "Ich bin mir nicht sicher, _____ er versteht, _____ wichtig das ist wirklich.",
        translation: "(Nie jestem pewien, czy rozumie, jak ważne to naprawdę jest)",
        options: ["ob / wie", "wie / ob", "dass / wie", "ob / dass"],
        correct: "ob / wie",
        explanation: "Niepewność ('ob') o jego zrozumieniu połączona z pytaniem o stopień ('wie') - czy rozumie JAK bardzo ważne. Podwójne pytanie: czy w ogóle rozumie + czy rozumie skalę ważności. Martwisz się że bagatelizuje poważną sprawę - frustracja z braku świadomości."
      },
      {
        id: "complex_13",
        question: "Er sagte, _____ er später kommt, _____ er noch arbeiten muss.",
        translation: "(Powiedział, że przyjdzie później, ponieważ musi jeszcze pracować)",
        options: ["dass / weil", "weil / dass", "dass / wenn", "wenn / dass"],
        correct: "dass / weil",
        explanation: "Jego komunikat ('dass') zawiera wytłumaczenie ('weil') - opóźnienie ma uzasadniony powód. Struktura przekazuje informację i wyjaśnia kontekst jednocześnie. Praca jako przyczyna opóźnienia to zrozumiały powód. Wyjaśnianie przyczyn zmian planów pokazuje szacunek dla czekających."
      },
      {
        id: "complex_14",
        question: "Ich weiß nicht, _____ ich gehen soll, _____ ich fertig bin hier.",
        translation: "(Nie wiem, czy powinienem iść, chociaż skończyłem tutaj)",
        options: ["ob / obwohl", "obwohl / ob", "ob / weil", "weil / ob"],
        correct: "ob / obwohl",
        explanation: "Niepewność ('ob') mimo ukończenia ('obwohl') - wahanie mimo logiki. Czasem kończymy zadania ale wciąż czujemy że powinniśmy zostać. Struktura pokazuje wewnętrzny konflikt między tym co logiczne a tym co czujemy. Takie dylematy są bardzo ludzkie."
      },
      {
        id: "complex_15",
        question: "Sie fragt sich, _____ es wohl wäre, _____ sie damals anders entschieden hätte.",
        translation: "(Zastanawia się, jak by było, gdyby wtedy zdecydowała inaczej)",
        options: ["wie / wenn", "wenn / wie", "wie / weil", "weil / wie"],
        correct: "wie / wenn",
        explanation: "Pytanie hipotetyczne ('wie') w warunku nierzeczywistym ('wenn') - wyobrażanie alternatywnej przeszłości. Struktura pokazuje refleksję nad drogami nie wybranymi. Zastanawianie się co by było gdyby to naturalna ludzka tendencja. Takie pytania pomagają w rozumieniu siebie i uczeniu się z przeszłości."
      }
    ]
  },

  genitive_with_names: {
    name: "Dopełniacz z nazwami własnymi",
    description: "Annas Buch, Deutschlands Hauptstadt - posiadanie",
    icon: Mountain,
    color: "from-purple-500 to-violet-600",
    level: "intermediate",
    questions: [
      {
        id: "gen_names_1",
        question: "Das ist _____ Auto dort auf dem Parkplatz vorne.",
        translation: "(To jest samochód Petera tam na parkingu z przodu)",
        options: ["Peters", "Peter", "von Peter", "dem Peter"],
        correct: "Peters",
        explanation: "Z imionami dodajesz po prostu -s dla dopełniacza - 'Peters Auto' (samochód Petera). To prostsze niż z normalnymi rzeczownikami. Polski używa końcówki -a ('Petera'), niemiecki tylko -s. Ta forma jest bardzo powszechna i łatwa - imię plus -s wyraża posiadanie bez rodzajnika."
      },
      {
        id: "gen_names_2",
        question: "_____ Hauptstadt ist Berlin, eine sehr lebendige Stadt kulturell.",
        translation: "(Stolicą Niemiec jest Berlin, bardzo żywe miasto kulturalnie)",
        options: ["Deutschlands", "Deutschland", "von Deutschland", "dem Deutschland"],
        correct: "Deutschlands",
        explanation: "Nazwy krajów też dostają -s w dopełniaczu - 'Deutschlands Hauptstadt' (stolica Niemiec). To elegancka forma bez przyimka 'von'. Polski używałby dopełniacza 'Niemiec', niemiecki dodaje -s. Berlin jako stolica reprezentuje kulturalną różnorodność i historię kraju."
      },
      {
        id: "gen_names_3",
        question: "Ich habe _____ Buch gestern ausgeliehen aus der Bibliothek.",
        translation: "(Pożyczyłem wczoraj książkę Marii z biblioteki)",
        options: ["Marias", "Maria", "von Maria", "der Maria"],
        correct: "Marias",
        explanation: "Imiona żeńskie też dostają -s - 'Marias Buch' (książka Marii). Polski używa końcówki -i ('Marii'), niemiecki -s. Pożyczanie książek to przejaw zaufania między przyjaciółmi. Forma z -s działa dla wszystkich imion niezależnie od rodzaju - to upraszcza system."
      },
      {
        id: "gen_names_4",
        question: "Das ist die Tasche _____ Schwester, nicht meine eigene hier.",
        translation: "(To jest torebka mojej siostry, nie moja własna tutaj)",
        options: ["meiner", "meine", "von meiner", "der"],
        correct: "meiner",
        explanation: "Z rzeczownikami pospolitymi używasz normalnego dopełniacza - 'meiner Schwester'. To różnica od imion - tytuły rodzinne odmieniane normalnie. Żeński dopełniacz 'meiner' plus rzeczownik. Wyjaśnianie własności zapobiega nieporozumieniom - jasność w komunikacji o rzeczach osobistych jest ważna."
      },
      {
        id: "gen_names_5",
        question: "_____ Geburtstag feiern wir nächsten Samstag groß zusammen.",
        translation: "(Urodziny Tomasza świętujemy w przyszłą sobotę wspólnie)",
        options: ["Thomas'", "Thomas", "von Thomas", "dem Thomas"],
        correct: "Thomas'",
        explanation: "Imiona kończące się na -s dostają tylko apostrof - 'Thomas'' nie 'Thomass'. To wyjątek fonetyczny dla łatwiejszej wymowy. Polski by użył dopełniacza 'Tomasza', niemiecki apostrofu. Urodziny to okazja do świętowania z przyjaciółmi - wspólna radość wzmacnia więzi."
      },
      {
        id: "gen_names_6",
        question: "Die Musik _____ gefällt mir sehr gut, sie ist sehr talentiert!",
        translation: "(Muzyka Mozarta bardzo mi się podoba, był bardzo utalentowany!)",
        options: ["Mozarts", "Mozart", "von Mozart", "dem Mozart"],
        correct: "Mozarts",
        explanation: "Nazwiska kompozytorów też dostają -s - 'Mozarts Musik' (muzyka Mozarta). To sposób na przypisanie dzieła twórcy. Polski używa dopełniacza 'Mozarta', niemiecki -s. Docenianie wielkich artystów łączy nas z historią kultury - ich dzieła żyją przez wieki."
      },
      {
        id: "gen_names_7",
        question: "Das sind die Spielzeuge _____ Kinder im Garten verstreut.",
        translation: "(To są zabawki sąsiada dzieci w ogrodzie porozrzucane)",
        options: ["der", "des Nachbarn", "vom Nachbar", "dem Nachbarn"],
        correct: "des Nachbarn",
        explanation: "Z tytułami/funkcjami używasz normalnego dopełniacza - 'des Nachbarn' (sąsiada). Słaby rzeczownik 'Nachbar' dodaje -n. To nie imię więc pełna forma dopełniacza. Porozrzucane zabawki to typowa scena dzieciństwa - spontaniczna zabawa pozostawia ślady."
      },
      {
        id: "gen_names_8",
        question: "_____ Werke sind weltberühmt und werden überall bewundert.",
        translation: "(Dzieła Goethego są światowej sławy i są wszędzie podziwiane)",
        options: ["Goethes", "Goethe", "von Goethe", "dem Goethe"],
        correct: "Goethes",
        explanation: "Nazwiska pisarzy dostają -s - 'Goethes Werke' (dzieła Goethego). Forma posiadająca bez rodzajnika dla nazwisk. Goethe jako symbol niemieckiej literatury - jego wpływ niezmierzony. Dodatek -s do nazwisk twórców to sposób na wyrażanie szacunku i przypisanie dorobku."
      },
      {
        id: "gen_names_9",
        question: "Ich lese gerade _____ neuesten Roman mit großem Interesse spannend.",
        translation: "(Czytam właśnie najnowszą powieść tego autora z wielkim zainteresowaniem)",
        options: ["des Autors", "dem Autor", "der Autor", "vom Autor"],
        correct: "des Autors",
        explanation: "Tytuł zawodowy w dopełniaczu - 'des Autors' (autora) standardowa forma. Męski dopełniacz z końcówką -s. Czytanie najnowszej książki to śledzenie rozwoju twórcy. Forma 'des Autors' pokazuje że mówimy o konkretnym autorze którego znasz i śledzisz."
      },
      {
        id: "gen_names_10",
        question: "Das Haus _____ Eltern steht am Rande der Stadt ruhig schön.",
        translation: "(Dom moich rodziców stoi na skraju miasta spokojnie)",
        options: ["meiner", "meine", "von meinen", "den"],
        correct: "meiner",
        explanation: "Mnoga 'Eltern' w dopełniaczu - 'meiner Eltern' standardowa forma. Dopełniacz mnogości używa tej samej formy co żeński. Dom rodzinny często na obrzeżach - spokojniejsza okolica. Posiadający dopełniacz pokazuje rodzinną więź z miejscem."
      },
      {
        id: "gen_names_11",
        question: "Die Farbe _____ Haare ist sehr ungewöhnlich und auffällig schön.",
        translation: "(Kolor jej włosów jest bardzo niezwykły i rzucający się w oczy)",
        options: ["ihrer", "ihre", "von ihren", "der"],
        correct: "ihrer",
        explanation: "Zaimek dzierżawczy w dopełniaczu - 'ihrer Haare' (jej włosów). Mnoga 'Haare' z dopełniaczem. Niezwykły kolor włosów to element indywidualności. Forma 'ihrer' pokazuje posiadanie - charakterystyka fizyczna jako własność osoby."
      },
      {
        id: "gen_names_12",
        question: "_____ Meinung nach sollten wir das Projekt verschieben leider.",
        translation: "(Według mojej opinii powinniśmy przełożyć projekt niestety)",
        options: ["Meiner", "Meine", "Von meiner", "Der"],
        correct: "Meiner",
        explanation: "Idiom 'meiner Meinung nach' (według mojej opinii) używa dopełniacza. Żeński dopełniacz 'meiner' standardowy. To uprzejmy sposób wyrażania swojego zdania. Forma z dopełniaczem brzmi bardziej formalnie niż alternatywy - pokazuje przemyślaną opinię."
      },
      {
        id: "gen_names_13",
        question: "Der Erfolg _____ Teams ist das Ergebnis harter Arbeit gemeinsam.",
        translation: "(Sukces naszego zespołu jest wynikiem ciężkiej pracy wspólnej)",
        options: ["unseres", "unser", "von unserem", "dem"],
        correct: "unseres",
        explanation: "Dopełniacz nijaki - 'unseres Teams' (naszego zespołu). Team to nijaki rzeczownik w niemieckim. Wspólny wysiłek prowadzi do wspólnego sukcesu. Forma 'unseres' pokazuje kolektywną własność - sukces należy do wszystkich."
      },
      {
        id: "gen_names_14",
        question: "Während _____ Urlaubs haben wir viele schöne Orte besucht neue.",
        translation: "(Podczas naszego urlopu odwiedziliśmy wiele pięknych nowych miejsc)",
        options: ["unseres", "unserem", "unser", "von unserem"],
        correct: "unseres",
        explanation: "Przyimek 'während' wymaga dopełniacza - 'unseres Urlaubs' (naszego urlopu). Męski dopełniacz z końcówką -s. Wakacje to czas odkrywania nowych miejsc. Forma dopełniacza z 'während' to formalny sposób opisywania ram czasowych wydarzeń."
      },
      {
        id: "gen_names_15",
        question: "Das ist das Ergebnis _____ Arbeit über viele Monate hinweg.",
        translation: "(To jest wynik twojej pracy przez wiele miesięcy)",
        options: ["deiner", "deine", "von deiner", "der"],
        correct: "deiner",
        explanation: "Dopełniacz żeński - 'deiner Arbeit' (twojej pracy). Praca (die Arbeit) w dopełniaczu posiadającym. Rezultat długiego wysiłku zasługuje na uznanie. Forma 'deiner' pokazuje osobiste osiągnięcie - to TWOJA praca która przyniosła efekt."
      }
    ]
  },

  infinitive_with_zu_advanced: {
    name: "Bezokolicznik z 'zu' - zaawansowane konstrukcje",
    description: "Es ist wichtig zu..., ohne zu..., um zu... - złożone formy",
    icon: Coffee,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "inf_zu_adv_1",
        question: "Es ist wichtig, jeden Tag etwas Neues _____ lernen fürs Leben.",
        translation: "(Jest ważne, żeby każdego dnia uczyć się czegoś nowego dla życia)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Konstrukcja bezosobowa 'es ist wichtig' wymaga 'zu' przed bezokolicznikiem. To wyrażanie ogólnej prawdy o wartości codziennej nauki. Forma 'zu lernen' tworzy frażę bezokolicznikową. Codzienna nauka to klucz do ciągłego rozwoju - małe kroki prowadzą do wielkich zmian."
      },
      {
        id: "inf_zu_adv_2",
        question: "Ich habe vergessen, die Tür _____ schließen - jetzt jest offen!",
        translation: "(Zapomniałem zamknąć drzwi - teraz są otwarte!)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Czasownik 'vergessen' (zapomnieć) wymaga 'zu' przed bezokolicznikiem tego co zapomniałeś. Otwarte drzwi to rezultat niedopatrzenia. Konstrukcja 'vergessen zu' standardowa dla opisywania pominiętych akcji. Błędy pamięci zdarzają się każdemu - ważne jest przyznanie i naprawa."
      },
      {
        id: "inf_zu_adv_3",
        question: "Er ging einfach weg, _____ _____ sich zu verabschieden von uns.",
        translation: "(Po prostu sobie poszedł, bez pożegnania się z nami)",
        options: ["ohne", "um", "statt", "anstatt"],
        correct: "ohne",
        explanation: "Konstrukcja 'ohne zu' (bez) pokazuje brak towarzyszącej akcji - wyszedł BEZ pożegnania. To nietaktowne zachowanie. Forma 'ohne sich zu verabschieden' opisuje społeczne pominięcie. Brak pożegnania może ranić - pokazuje brak szacunku lub świadomości społecznej."
      },
      {
        id: "inf_zu_adv_4",
        question: "Ich lerne Deutsch, _____ _____ später in Deutschland arbeiten zu können.",
        translation: "(Uczę się niemieckiego, żeby móc później pracować w Niemczech)",
        options: ["um", "ohne", "statt", "für"],
        correct: "um",
        explanation: "Konstrukcja 'um...zu' wyraża cel - uczysz się BO chcesz pracować tam. To jasna motywacja. Forma 'um zu können' pokazuje pragnienie zdolności. Nauka języka dla kariery to konkretny, mierzalny cel - motywacja zewnętrzna może być bardzo silna."
      },
      {
        id: "inf_zu_adv_5",
        question: "Es ist schwer, eine Fremdsprache perfekt _____ beherrschen als Erwachsener.",
        translation: "(Jest trudno perfekcyjnie opanować język obcy jako dorosły)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Ocena trudności 'es ist schwer' plus 'zu beherrschen' - bezosobowa konstrukcja opisująca wyzwanie. Dorosłość utrudnia naukę języków w porównaniu z dzieciństwem. Forma 'zu beherrschen' (opanować) pokazuje wysoki poziom celu. Mimo trudności warto próbować - każdy postęp jest wartościowy."
      },
      {
        id: "inf_zu_adv_6",
        question: "Sie hat keine Lust, heute Abend lange _____ arbeiten im Büro.",
        translation: "(Nie ma ochoty, żeby dzisiaj wieczorem długo pracować w biurze)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Rzeczownik 'Lust' (ochota) wymaga 'zu' przed bezokolicznikiem - 'Lust zu arbeiten'. Brak motywacji do nadgodzin jest zrozumiały. Forma 'keine Lust zu' wyraża niechęć. Work-life balance jest ważny - prawo do odpoczynku zasługuje na szacunek."
      },
      {
        id: "inf_zu_adv_7",
        question: "Anstatt _____ Hause _____ bleiben, gingen wir aus ins Restaurant schön.",
        translation: "(Zamiast zostać w domu, wyszliśmy do restauracji)",
        options: ["zu / zu", "um / zu", "ohne / zu", "zu / -"],
        correct: "zu / zu",
        explanation: "Konstrukcja 'anstatt zu' (zamiast) dla alternatywy - odrzucili dom NA RZECZ restauracji. Forma 'zu Hause zu bleiben' pokazuje pominiętą opcję. Czasem wyjście jest lepsze dla nastroju niż gotowanie. Świadomy wybór aktywności wpływa na jakość wieczoru."
      },
      {
        id: "inf_zu_adv_8",
        question: "Ich versuche, jeden Tag pünktlich _____ sein bei der Arbeit.",
        translation: "(Staram się być każdego dnia punktualnym w pracy)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Czasownik 'versuchen' (starać się) wymaga 'zu' przed bezokolicznikiem. Wysiłek dla punktualności pokazuje profesjonalizm. Konstrukcja 'versuchen zu sein' dla celów osobistych. Punktualność to szacunek dla czasu innych - nawet gdy trudne, warto się starać."
      },
      {
        id: "inf_zu_adv_9",
        question: "Es macht Spaß, neue interessante Leute _____ kennenlernen auf Reisen.",
        translation: "(Sprawia przyjemność poznawać nowych ciekawych ludzi w podróżach)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Konstrukcja 'Spaß machen' plus 'zu' opisuje przyjemną aktywność. Poznawanie ludzi to jedna z radości podróżowania. Forma 'zu kennenlernen' pokazuje źródło przyjemności. Nowe znajomości wzbogacają doświadczenie podróży - każda osoba wnosi unikalną perspektywę."
      },
      {
        id: "inf_zu_adv_10",
        question: "Sie hat versprochen mir, morgen pünktlich _____ kommen zur Besprechung.",
        translation: "(Obiecała mi jutro przyjść punktualnie na naradę)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Czasownik 'versprechen' (obiecać) wymaga 'zu' - 'zu kommen' to obiecana akcja. Obietnica punktualności to zobowiązanie. Konstrukcja pokazuje przyszłą intencję. Dotrzymywanie obietnic buduje zaufanie - szczególnie w kontekście zawodowym punktualność jest ceniona."
      },
      {
        id: "inf_zu_adv_11",
        question: "Er hat mir geholfen, _____ dafür Geld _____ verlangen großzügig.",
        translation: "(Pomógł mi bez żądania za to pieniędzy hojnie)",
        options: ["ohne / zu", "um / zu", "zu / ohne", "ohne / -"],
        correct: "ohne / zu",
        explanation: "Konstrukcja 'ohne zu verlangen' (bez żądania) pokazuje bezinteresowną pomoc. Hojność polegająca na pomaganiu bez oczekiwania zapłaty. Forma 'ohne' plus bezokolicznik z 'zu' dla akcji NIE wykonanej. Bezinteresowna pomoc to piękny gest - pokazuje prawdziwą dobroć charakteru."
      },
      {
        id: "inf_zu_adv_12",
        question: "Ich habe keine Zeit, jetzt lange mit dir _____ sprechen ausführlich.",
        translation: "(Nie mam czasu, żeby teraz długo z tobą rozmawiać obszernie)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Rzeczownik 'Zeit' wymaga 'zu' - 'Zeit zu sprechen' (czas na rozmowę). Brak czasu to uczciwe wyjaśnienie ograniczonej dostępności. Konstrukcja 'keine Zeit zu' standardowa. Jasna komunikacja o ograniczeniach czasowych zapobiega nieporozumieniom - lepiej powiedzieć prawdę niż obiecywać niemożliwe."
      },
      {
        id: "inf_zu_adv_13",
        question: "Statt _____ schlafen, hat er die ganze Nacht gelernt intensiv.",
        translation: "(Zamiast spać, uczył się całą noc intensywnie)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Konstrukcja 'statt zu' (zamiast) pokazuje wybraną alternatywę - nauka ZAMIAST snu. To ekstremalna dedykacja przed egzaminem. Forma 'statt zu schlafen' opisuje pominiętą podstawową potrzebę. Taka obsesja nauką może być skuteczna krótkoterminowo ale niezbilansowana długoterminowo."
      },
      {
        id: "inf_zu_adv_14",
        question: "Es ist möglich für dich, das Projekt bis Freitag _____ beenden rechtzeitig?",
        translation: "(Czy jest możliwe dla ciebie, żeby skończyć projekt do piątku na czas?)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Pytanie o możliwość 'ist es möglich' plus 'zu beenden' - sprawdzasz czy termin realny. Fraza 'für dich' pokazuje personaliza cję pytania. Konstrukcja z 'zu' wyraża potencjalną akcję. Realistyczne ocenianie terminów zapobiega rozczarowaniu - lepiej znać ograniczenia wcześniej."
      },
      {
        id: "inf_zu_adv_15",
        question: "Ich hoffe sehr, dich bald wieder _____ sehen können gesund!",
        translation: "(Mam wielką nadzieję, że wkrótce znów będę mógł cię zobaczyć zdrowego!)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Czasownik 'hoffen' (mieć nadzieję) wymaga 'zu' - 'zu sehen' to obiekt nadziei. Tęsknota za zobaczeniem kogoś zdrowego. Forma 'hoffen zu können' zawiera modalny w bezokoliczniku. Nadzieja na spotkanie w dobrych okolicznościach to ciepłe życzenie - troska o zdrowie ukochanej osoby."
      }
    ]
  },

  verbs_of_perception_construction: {
    name: "Czasowniki percepcji - konstrukcje",
    description: "Sehen, hören, fühlen + Akkusativ + Infinitiv",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "perc_1",
        question: "Ich sehe die Kinder jeden Tag im Garten fröhlich _____.",
        translation: "(Widzę dzieci każdego dnia w ogrodzie radośnie bawić się)",
        options: ["spielen", "zu spielen", "gespielt", "spielt"],
        correct: "spielen",
        explanation: "Czasowniki percepcji jak 'sehen' używają bezokolicznika BEZ 'zu'! Forma 'sehe spielen' (widzę jak się bawią). Obserwujesz akcję w toku. Polski używałby formy osobowej ('jak się bawią'), niemiecki bezokolicznika. Ta konstrukcja tworzy bezpośrednie doświadczenie percepcyjne - widzisz akcję dziać się."
      },
      {
        id: "perc_2",
        question: "Hast du sie gestern _____ im Park? Sie war sehr beschäftigt.",
        translation: "(Czy widziałeś ją wczoraj w parku? Była bardzo zajęta)",
        options: ["gesehen", "sehen", "zu sehen", "sieht"],
        correct: "gesehen",
        explanation: "W Perfect czasownik percepcji używa normalnego imiesłowu - 'gesehen' bez dodatkowego bezokolicznika w tym kontekście. Proste pytanie o przeszłą obserwację. Forma 'hast gesehen' standardowa. Przypadkowe spotkania w parku to częste miejskie doświadczenia."
      },
      {
        id: "perc_3",
        question: "Ich höre meinen Nachbarn jeden Abend laut Musik _____.",
        translation: "(Słyszę mojego sąsiada każdego wieczoru głośno słuchać muzyki)",
        options: ["hören", "zu hören", "gehört", "hört"],
        correct: "hören",
        explanation: "Czasownik percepcji 'hören' plus bezokolicznik BEZ 'zu' - 'höre hören' (słyszę słuchać). Paradoksalnie używasz tego samego czasownika dwa razy. Głośna muzyka sąsiada to powszechny problem mieszkaniowy. Konstrukcja podkreśla że SŁYSZYSZ jak on SŁUCHA - bezpośrednia percepcja cudzej akcji."
      },
      {
        id: "perc_4",
        question: "Sie fühlt ihr Herz vor Aufregung schnell _____.",
        translation: "(Czuje jak jej serce szybko bije z podekscytowania)",
        options: ["schlagen", "zu schlagen", "geschlagen", "schlägt"],
        correct: "schlagen",
        explanation: "Czasownik percepcji 'fühlen' z bezokolicznikiem BEZ 'zu' - 'fühlt schlagen' (czuje bić). Fizyczne odczuwanie bicia serca z emocji. Ta konstrukcja tworzy intymne doświadczenie własnego ciała. Ekscytacja przyspieszająca serce to uniwersalne ludzkie doświadczenie - emocje manifestują się fizycznie."
      },
      {
        id: "perc_5",
        question: "Wir haben das Kind gestern im Garten laut _____ gehört.",
        translation: "(Słyszeliśmy dziecko wczoraj w ogrodzie głośno płakać)",
        options: ["weinen", "zu weinen", "geweint", "weint"],
        correct: "weinen",
        explanation: "W Perfect z czasownikiem percepcji: 'haben weinen gehört' (słyszeliśmy płakać). Bezokolicznik 'weinen' między obiektem a imiesłowem 'gehört'. Płacz dziecka natychmiast zwraca uwagę. Ta konstrukcja z trzema czasownikami może wydawać się dziwna ale jest standardowa dla Perfect z percepcją."
      },
      {
        id: "perc_6",
        question: "Ich sehe ihn jeden Morgen zur Arbeit mit dem Fahrrad _____.",
        translation: "(Widzę go każdego ranka jechać do pracy rowerem)",
        options: ["fahren", "zu fahren", "gefahren", "fährt"],
        correct: "fahren",
        explanation: "Czasownik percepcji 'sehen' z bezokolicznikiem 'fahren' BEZ 'zu'. Codzienna obserwacja jego dojazdu. Forma 'sehe fahren' standardowa konstrukcja. Regularność rutyny innych ludzi staje się częścią naszej własnej - sąsiedzkie rytmy przeplatają się."
      },
      {
        id: "perc_7",
        question: "Sie hörte die Vögel am frühen Morgen wunderschön _____.",
        translation: "(Słyszała ptaki wcześnie rano pięknie śpiewać)",
        options: ["singen", "zu singen", "gesungen", "singt"],
        correct: "singen",
        explanation: "Czasownik percepcji 'hören' plus bezokolicznik 'singen' - 'hörte singen' (słyszała śpiewać). Poranny śpiew ptaków to pokojowy dźwięk natury. Przeszły czas 'hörte' ale konstrukcja z bezokolicznikiem pozostaje. Naturalne dźwięki o świcie to jeden z prostych pięknych momentów życia."
      },
      {
        id: "perc_8",
        question: "Ich fühle mich jeden Tag gesünder und stärker _____.",
        translation: "(Czuję się każdego dnia stawać zdrowszym i silniejszym)",
        options: ["werden", "zu werden", "geworden", "wird"],
        correct: "werden",
        explanation: "Z 'fühlen' (czuć się) plus bezokolicznik 'werden' (stawać się) BEZ 'zu'. Stopniowa poprawa zdrowia i siły. Forma 'fühle werden' opisuje postrzeganie procesu zmiany. Świadomość własnego postępu motywuje do kontynuacji - każdy dzień przynosi małą poprawę."
      },
      {
        id: "perc_9",
        question: "Wir haben sie gestern sehr laut am Telefon _____ gehört.",
        translation: "(Słyszeliśmy ją wczoraj bardzo głośno rozmawiać przez telefon)",
        options: ["sprechen", "zu sprechen", "gesprochen", "spricht"],
        correct: "sprechen",
        explanation: "Perfect z percepcją: 'haben sprechen gehört' - bezokolicznik między obiektem a 'gehört'. Głośna rozmowa telefoniczna słyszalna dla innych. Złożona struktura z trzema elementami czasownikowymi. Przypadkowe podsłuchiwanie sąsiadów to nieintencjonalne naruszenie prywatności w ciasnych mieszkaniach."
      },
      {
        id: "perc_10",
        question: "Er sah den Ball direkt auf sich _____ und duckte sich schnell!",
        translation: "(Zobaczył piłkę lecieć prosto na siebie i szybko się schylił!)",
        options: ["zukommen", "zu zukommen", "zugekommen", "zukommt"],
        correct: "zukommen",
        explanation: "Czasownik percepcji z czasownikiem rozdzielnym - 'zukommen' pozostaje razem jako bezokolicznik BEZ 'zu'. Nadlatująca piłka wymaga szybkiej reakcji. Forma 'sah zukommen' opisuje zauważenie niebezpieczeństwa. Szybkie refleksy mogą zapobiec kontuzji - dobra percepcja i reakcja chronią nas."
      },
      {
        id: "perc_11",
        question: "Ich habe das Baby die ganze Nacht _____ gehört leider laut.",
        translation: "(Słyszałem dziecko całą noc płakać niestety głośno)",
        options: ["weinen", "zu weinen", "geweint", "weint"],
        correct: "weinen",
        explanation: "Perfect: 'habe weinen gehört' - bezokolicznik 'weinen' między 'Baby' a 'gehört'. Bezsenność przez płacz dziecka to wyczerpujące doświadczenie. Struktura z dwoma formami czasownika w Perfect z percepcją. Nocny płacz niemowląt to naturalne ale męczące dla rodziców i sąsiadów."
      },
      {
        id: "perc_12",
        question: "Sie spürte die Gefahr näher _____ und wurde vorsichtiger sofort.",
        translation: "(Wyczuła niebezpieczeństwo zbliżać się i stała się natychmiast ostrożniejsza)",
        options: ["kommen", "zu kommen", "gekommen", "kommt"],
        correct: "kommen",
        explanation: "Czasownik percepcji 'spüren' (wyczuwać) z bezokolicznikiem 'kommen' - 'spürte kommen' (wyczuła nadchodzić). Instynkt ostrzegający przed niebezpieczeństwem. Przeszły czas 'spürte' ale bezokolicznik pozostaje. Słuchanie intuicji może nas chronić - pierwotne instynkty często są trafne."
      },
      {
        id: "perc_13",
        question: "Wir sahen die Sonne langsam am Horizont _____ beim Spaziergang.",
        translation: "(Widzieliśmy słońce wolno zachodzić na horyzoncie podczas spaceru)",
        options: ["untergehen", "zu untergehen", "untergegangen", "untergeht"],
        correct: "untergehen",
        explanation: "Czasownik percepcji z czasownikiem rozdzielnym - 'untergehen' razem jako bezokolicznik. Obserwacja zachodu słońca to medytatywne doświadczenie. Forma 'sahen untergehen' pokazuje świadectwo naturalnego zjawiska. Zachody słońca przypominają o pięknie natury i przemijaniu dnia."
      },
      {
        id: "perc_14",
        question: "Er hörte jemanden laut um Hilfe _____ in der Dunkelheit rufen.",
        translation: "(Usłyszał kogoś głośno wołać o pomoc w ciemności)",
        options: ["rufen", "zu rufen", "gerufen", "ruft"],
        correct: "rufen",
        explanation: "Perfect: 'hörte rufen' (usłyszał wołać) - bezokolicznik dla percepcji dźwięku. Wołanie o pomoc w ciemności to alarmująca sytuacja. Przeszły czas 'hörte' z bezokolicznikiem 'rufen'. Słyszenie krzyku o pomoc wymaga reakcji - to moment gdzie obojętność nie jest opcją."
      },
      {
        id: "perc_15",
        question: "Sie lässt ihre Kinder oft draußen im Freien _____.",
        translation: "(Pozwala swoim dzieciom często bawić się na zewnątrz na świeżym powietrzu)",
        options: ["spielen", "zu spielen", "gespielt", "spielt"],
        correct: "spielen",
        explanation: "Czasownik 'lassen' (pozwalać) działa jak percepcja - bezokolicznik BEZ 'zu'. Forma 'lässt spielen' (pozwala bawić się). Zabawa na świeżym powietrzu jest zdrowa dla dzieci. Chociaż 'lassen' nie jest ściśle percepcją, używa tej samej konstrukcji - obiekt plus bezokolicznik bez 'zu'."
      }
    ]
  }
};

export default part18Categories;
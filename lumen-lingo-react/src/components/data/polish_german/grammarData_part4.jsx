
/**
 * POLISH → GERMAN GRAMMAR - PART 4
 * 4 kategorie, 15 pytań każda - Struktury zaawansowane
 */

import { Box, Layers, Split, Zap } from "lucide-react";

export const part4Categories = {
  german_cases_advanced: {
    name: "Przypadki niemieckie - zaawansowane",
    description: "Nominativ, Akkusativ, Dativ, Genitiv w kontekście",
    icon: Box,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "case_adv_1",
        question: "Ich helfe _____ alten Mann beim Tragen der schweren Einkaufstaschen.",
        translation: "(Pomagam staremu mężczyźnie nieść ciężkie torby zakupowe)",
        options: ["dem", "den", "der", "des"],
        correct: "dem",
        explanation: "'Helfen' wymaga CELOWNIKA (Dativ)! 'Dem alten Mann' - komu pomagam. Czasownik 'helfen' zawsze z Dativ, nie Akkusativ. To o pomocy - Dativ pokazuje beneficjenta działania. Wiele niemieckich czasowników wymaga konkretnych przypadków - 'helfen' jest jednym z nich wymagającym celownika."
      },
      {
        id: "case_adv_2",
        question: "Der Lehrer lobt _____ fleißigen Schüler für seine ausgezeichnete Arbeit.",
        translation: "(Nauczyciel chwali pilnego ucznia za jego doskonałą pracę)",
        options: ["den", "dem", "der", "des"],
        correct: "den",
        explanation: "'Loben' wymaga BIERNIKA (Akkusativ)! 'Den fleißigen Schüler' - kogo chwali. Czasownik przechodni - bezpośredni obiekt w bierniku. To o docenieniu - uczeń jest bezpośrednim obiektem pochwały. Większość niemieckich czasowników przechodnich używa biernika dla bezpośredniego obiektu."
      },
      {
        id: "case_adv_3",
        question: "Das ist das Auto _____ neuen Nachbarn aus der Stadt.",
        translation: "(To jest samochód nowego sąsiada z miasta)",
        options: ["des", "dem", "den", "der"],
        correct: "des",
        explanation: "'Des neuen Nachbarn' to DOPEŁNIACZ (Genitiv)! Pokazuje posiadanie - samochód KOGO? Sąsiada. To relacja własności. Genitiv odpowiada polskiemu dopełniaczowi - używany dla pokazania do kogo coś należy. Rodzajnik męski w dopełniaczu to 'des' z końcówką -en na przymiotniku."
      },
      {
        id: "case_adv_4",
        question: "Wir vertrauen _____ erfahrenen Ärztin vollständig und ohne Zweifel.",
        translation: "(Ufamy doświadczonej lekarkę całkowicie i bez wątpliwości)",
        options: ["der", "die", "den", "des"],
        correct: "der",
        explanation: "'Vertrauen' wymaga CELOWNIKA! 'Der erfahrenen Ärztin' - komu ufamy. Czasownik 'vertrauen' zawsze z Dativ. To o zaufaniu - beneficjent zaufania w celowniku. Czasowniki wyrażające relacje emocjonalne często wymagają Dativ w niemieckim - inna logika niż w polskim."
      },
      {
        id: "case_adv_5",
        question: "Während _____ langen Meetings haben wir viele wichtige Entscheidungen getroffen.",
        translation: "(Podczas długiego spotkania podjęliśmy wiele ważnych decyzji)",
        options: ["des", "dem", "den", "der"],
        correct: "des",
        explanation: "'Während' wymaga DOPEŁNIACZA! 'Des langen Meetings' - podczas czego. Przyimek 'während' zawsze z Genitiv. To o czasie trwania - dopełniacz dla temporalnych ram. Niektóre przyimki czasowe w niemieckim wymagają dopełniacza, co jest inaczej niż w polskim."
      },
      {
        id: "case_adv_6",
        question: "Ich schenke _____ besten Freundin ein schönes Buch zum Geburtstag.",
        translation: "(Daję mojej najlepszej przyjaciółce piękną książkę na urodziny)",
        options: ["meiner", "meine", "meinen", "meines"],
        correct: "meiner",
        explanation: "'Schenken' używa CELOWNIKA dla odbiorcy! 'Meiner besten Freundin' - komu daję. Czasownik 'schenken' ma dwa obiekty - Dativ (komu) i Akkusativ (co). To o dawaniu prezentów - odbiorca w celowniku, przedmiot w bierniku. Struktura: komuś (Dativ) coś (Akkusativ)."
      },
      {
        id: "case_adv_7",
        question: "Trotz _____ schlechten Wetters sind wir spazieren gegangen im Park.",
        translation: "(Pomimo złej pogody poszliśmy na spacer w parku)",
        options: ["des", "dem", "den", "der"],
        correct: "des",
        explanation: "'Trotz' wymaga DOPEŁNIACZA! 'Des schlechten Wetters' - pomimo czego. Przyimek 'trotz' zawsze z Genitiv. To o działaniu wbrew okolicznościom - dopełniacz dla przeciwstawienia. Przyimki typu 'trotz, wegen, während' zawsze wymagają dopełniacza w formalnym niemieckim."
      },
      {
        id: "case_adv_8",
        question: "Die Mutter gibt _____ kleinen Kindern gesundes Essen und frisches Obst.",
        translation: "(Matka daje małym dzieciom zdrowe jedzenie i świeże owoce)",
        options: ["den", "dem", "der", "des"],
        correct: "den",
        explanation: "'Den kleinen Kindern' to CELOWNIK liczby mnogiej! 'Geben' wymaga Dativ dla odbiorcy. To o karmieniu dzieci - Dativ pokazuje komu dajemy. W liczbie mnogiej Dativ zawsze kończy się na -en dla przymiotnika, a rodzajnik to 'den' dla wszystkich rodzajów."
      },
      {
        id: "case_adv_9",
        question: "Ich erinnere mich an _____ schönen Sommer in Italien letztes Jahr.",
        translation: "(Pamiętam piękne lato we Włoszech w zeszłym roku)",
        options: ["den", "dem", "der", "des"],
        correct: "den",
        explanation: "'An' z czasownikiem 'erinnern' wymaga BIERNIKA! 'An den schönen Sommer' - na co pamiętam. To o wspomnieniach - przyimek 'an' po 'sich erinnern' zawsze Akkusativ. Czasowniki zwrotne z przyimkami mają ustalone przypadki - 'erinnern się AN' + Akkusativ to reguła."
      },
      {
        id: "case_adv_10",
        question: "Wegen _____ starken Regens wurde das Fußballspiel abgesagt heute.",
        translation: "(Z powodu silnego deszczu mecz piłki nożnej został odwołany dzisiaj)",
        options: ["des", "dem", "den", "der"],
        correct: "des",
        explanation: "'Wegen' wymaga DOPEŁNIACZA! 'Des starken Regens' - z powodu czego. Przyimek przyczynowy 'wegen' zawsze z Genitiv. To o przyczynie odwołania - dopełniacz dla powodu. Przyimki przyczynowe (wegen, aufgrund) standardowo wymagają dopełniacza w poprawnym niemieckim."
      },
      {
        id: "case_adv_11",
        question: "Ich gratuliere _____ zu deinem großen Erfolg bei der Prüfung!",
        translation: "(Gratuluję ci twojego wielkiego sukcesu na egzaminie!)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "'Gratulieren' wymaga CELOWNIKA! 'Dir' to Dativ od 'du' - komu gratuluję. To o składaniu życzeń - odbiorca gratulacji w celowniku. Czasowniki typu 'gratulieren, danken, helfen' zawsze z Dativ - logika różna od polskiej gdzie używamy biernika."
      },
      {
        id: "case_adv_12",
        question: "Das Haus _____ reichen Familie steht auf dem hohen Berg.",
        translation: "(Dom bogatej rodziny stoi na wysokiej górze)",
        options: ["der", "die", "den", "dem"],
        correct: "der",
        explanation: "'Der reichen Familie' to DOPEŁNIACZ rodzaju żeńskiego! Dom KOGO? Rodziny. To relacja posiadania. Genitiv dla 'die Familie' to 'der Familie' - pokazuje własność. Rodzaj żeński w dopełniaczu używa 'der' jako rodzajnika."
      },
      {
        id: "case_adv_13",
        question: "Ich danke _____ herzlich für deine große Hilfe und Unterstützung!",
        translation: "(Dziękuję ci serdecznie za twoją wielką pomoc i wsparcie!)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "'Danken' wymaga CELOWNIKA! 'Dir' - komu dziękuję. Czasownik 'danken' zawsze z Dativ, nie Akkusativ. To wyrażanie wdzięczności - odbiorca podziękowań w celowniku. Polski używa biernika ale niemiecki wymaga celownika dla 'danken' - ważna różnica do zapamiętania."
      },
      {
        id: "case_adv_14",
        question: "Sie spricht mit _____ netten Kollegen über das wichtige Projekt.",
        translation: "(Rozmawia z miłymi kolegami o ważnym projekcie)",
        options: ["den", "dem", "der", "des"],
        correct: "den",
        explanation: "'Mit' wymaga CELOWNIKA! 'Den netten Kollegen' to Dativ liczby mnogiej. To o rozmowie - Dativ pokazuje z kim. Przyimek 'mit' zawsze wymaga celownika. W liczbie mnogiej celownik ma rodzajnik 'den' i końcówkę -n na rzeczowniku (Kollegen)."
      },
      {
        id: "case_adv_15",
        question: "Innerhalb _____ nächsten Woche müssen wir die Arbeit fertigstellen komplett.",
        translation: "(W ciągu następnego tygodnia musimy ukończyć pracę całkowicie)",
        options: ["der", "die", "den", "dem"],
        correct: "der",
        explanation: "'Innerhalb' wymaga DOPEŁNIACZA! 'Der nächsten Woche' - w ciągu czego. Przyimek temporalny 'innerhalb' z Genitiv. To o deadline - ramy czasowe w dopełniaczu. Przyimki określające ramy czasowe często wymagają dopełniacza w formalnym niemieckim."
      }
    ]
  },

  adjective_endings_articles: {
    name: "Końcówki przymiotników z rodzajnikami",
    description: "Der gute Mann, ein guter Mann, guter Mann",
    icon: Layers,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "adj_end_1",
        question: "_____ alt_____ Mann sitzt auf der Bank im schönen Park.",
        translation: "(Stary mężczyzna siedzi na ławce w pięknym parku)",
        options: ["Der / e", "Der / er", "Ein / er", "Ein / e"],
        correct: "Der / e",
        explanation: "'Der alte Mann' używa końcówki -e! Z określonym rodzajnikiem (der/die/das) w mianowniku końcówka to -e. To o identyfikacji - konkretny znany mężczyzna. Słaba deklinacja - gdy rodzajnik jest określony, przymiotnik ma minimal ending. Rodzajnik pokazuje przypadek więc przymiotnik tylko -e."
      },
      {
        id: "adj_end_2",
        question: "Ich sehe ein_____ schön_____ Haus mit einem großen Garten dort.",
        translation: "(Widzę piękny dom z dużym ogrodem tam)",
        options: ["- / es", "- / e", "es / es", "e / e"],
        correct: "- / es",
        explanation: "'Ein schönes Haus' - nijakie z nieokreślonym! Bez końcówki na 'ein', ale -es na przymiotniku. To mieszana deklinacja - 'ein' nie pokazuje rodzaju więc przymiotnik musi (-es dla nijakiego). Nieokreślony rodzajnik wymaga że przymiotnik nosi więcej informacji gramatycznej."
      },
      {
        id: "adj_end_3",
        question: "Gut_____ Wein ist immer teuer und schwer zu finden hier.",
        translation: "(Dobre wino jest zawsze drogie i trudne do znalezienia tutaj)",
        options: ["er", "es", "e", "en"],
        correct: "er",
        explanation: "'Guter Wein' BEZ rodzajnika! Końcówka -er pokazuje mianownik męski. To silna deklinacja - bez rodzajnika przymiotnik musi pokazać wszystko (rodzaj, liczba, przypadek). Zero article wymaga że przymiotnik niesie pełną informację gramatyczną przez końcówkę."
      },
      {
        id: "adj_end_4",
        question: "Sie trägt ein_____ rot_____ Kleid zur eleganten Party heute Abend.",
        translation: "(Nosi czerwoną sukienkę na elegancką imprezę dziś wieczorem)",
        options: ["- / es", "e / e", "es / es", "- / e"],
        correct: "- / es",
        explanation: "'Ein rotes Kleid' - nijakie rzeczownik! 'Ein' bez końcówki, 'rotes' z -es. Mieszana deklinacja w bierniku. To o ubiorze - sukienka jako bezpośredni obiekt noszenia. Rodzaj nijaki wymaga -es na przymiotniku gdy używamy 'ein' żeby pokazać biernik nijaki."
      },
      {
        id: "adj_end_5",
        question: "Die Kinder spielen mit _____ neu_____ Spielzeug im Kinderzimmer.",
        translation: "(Dzieci bawią się nową zabawką w pokoju dziecięcym)",
        options: ["dem / en", "den / en", "das / e", "dem / e"],
        correct: "dem / en",
        explanation: "'Mit dem neuen Spielzeug' - celownik nijaki! 'Mit' wymaga Dativ, więc 'dem' i końcówka -en. To o zabawie - zabawka w celowniku po przyimku. Dativ nijaki to 'dem' z rodzajnikiem określonym, a przymiotnik zawsze kończy się na -en w celowniku."
      },
      {
        id: "adj_end_6",
        question: "Frisch_____ Brot schmeckt am besten morgens zum Frühstück warm.",
        translation: "(Świeży chleb smakuje najlepiej rano na śniadanie ciepły)",
        options: ["es", "er", "e", "en"],
        correct: "es",
        explanation: "'Frisches Brot' BEZ rodzajnika! Końcówka -es dla nijakiego mianownika. Silna deklinacja - przymiotnik sam pokazuje wszystko. To o jedzeniu - generalna prawda o chlebie. Zero article wymaga silnej deklinacji gdzie przymiotnik niesie wszystkie markery gramatyczne."
      },
      {
        id: "adj_end_7",
        question: "Ich treffe mich mit _____ best_____ Freund im Café am Nachmittag.",
        translation: "(Spotykam się z moim najlepszym przyjacielem w kawiarni po południu)",
        options: ["meinem / en", "meinen / en", "mein / en", "meinem / e"],
        correct: "meinem / en",
        explanation: "'Mit meinem besten Freund' - celownik męski z dzierżawczym! 'Mit' wymaga Dativ - 'meinem' i -en na przymiotniku. To o spotkaniu - przyjaciel w celowniku. Zaimek dzierżawczy 'mein' w celowniku męskim to 'meinem', a przymiotnik kończy się na -en."
      },
      {
        id: "adj_end_8",
        question: "Das sind die Bücher _____ berühmt_____ Schriftstellers aus Deutschland.",
        translation: "(To są książki słynnego pisarza z Niemiec)",
        options: ["des / en", "dem / en", "den / en", "der / en"],
        correct: "des / en",
        explanation: "'Des berühmten Schriftstellers' - dopełniacz męski! Książki KOGO? Pisarza. Genitiv pokazuje posiadanie. To o autorze - dopełniacz dla relacji własności. Męski dopełniacz: 'des' + przymiotnik z -en + rzeczownik często z -(e)s."
      },
      {
        id: "adj_end_9",
        question: "Sie wohnt in ein_____ klein_____ Wohnung in der Stadtmitte zentral.",
        translation: "(Mieszka w małym mieszkaniu w centrum miasta centralnie)",
        options: ["er / en", "e / en", "em / en", "er / e"],
        correct: "er / en",
        explanation: "'In einer kleinen Wohnung' - celownik żeński! 'In' z Dativ (lokalizacja), więc 'einer' i -en. To o miejscu zamieszkania - miejsce w celowniku. Rodzaj żeński w celowniku: nieokreślony rodzajnik 'einer' + przymiotnik -en. Przyimki miejsca często z Dativ dla statycznej lokalizacji."
      },
      {
        id: "adj_end_10",
        question: "Ich kaufe _____ teur_____ Auto von einem privaten Verkäufer morgen.",
        translation: "(Kupuję drogi samochód od prywatnego sprzedawcy jutro)",
        options: ["ein / es", "einen / es", "ein / en", "einen / en"],
        correct: "ein / es",
        explanation: "'Ein teures Auto' - biernik nijaki! 'Kaufen' wymaga Akkusativ - 'ein' (nijaki bez zmiany) i -es. To o zakupie - samochód jako bezpośredni obiekt. Rodzaj nijaki w bierniku z 'ein' nie zmienia rodzajnika, ale przymiotnik dostaje -es żeby pokazać biernik."
      },
      {
        id: "adj_end_11",
        question: "Trotz schlecht_____ Noten hat er die Prüfung am Ende bestanden.",
        translation: "(Pomimo złych ocen zdał egzamin na koniec)",
        options: ["er", "en", "e", "es"],
        correct: "er",
        explanation: "'Schlechter Noten' - dopełniacz liczby mnogiej BEZ rodzajnika! Końcówka -er dla Genitiv plural. To o sukcesie mimo przeszkód - dopełniacz pokazuje 'pomimo czego'. Liczba mnoga bez rodzajnika w dopełniaczu używa końcówki -er na przymiotniku - silna deklinacja."
      },
      {
        id: "adj_end_12",
        question: "Das Kind gibt _____ lieb_____ Mutter eine schöne Blume aus Garten.",
        translation: "(Dziecko daje kochanej mamie piękny kwiat z ogrodu)",
        options: ["der / en", "die / en", "den / en", "der / e"],
        correct: "der / en",
        explanation: "'Der lieben Mutter' - celownik żeński! 'Geben' wymaga Dativ dla odbiorcy - 'der' i -en. To o dawaniu prezentu - mama jako beneficjent w celowniku. Rodzaj żeński Dativ: 'der' (określony rodzajnik) + przymiotnik -en. Odbiorca zawsze w celowniku z 'geben'."
      },
      {
        id: "adj_end_13",
        question: "Wir brauchen mehr frisch_____ Luft in diesem stickigen Raum dringend.",
        translation: "(Potrzebujemy więcej świeżego powietrza w tym dusznym pokoju pilnie)",
        options: ["e", "er", "es", "en"],
        correct: "e",
        explanation: "'Frische Luft' - biernik żeński BEZ rodzajnika! Końcówka -e dla Akkusativ feminine. To o potrzebie - powietrze jako bezpośredni obiekt. Bez rodzajnika rodzaj żeński w bierniku dostaje -e na przymiotniku - silna deklinacja pokazująca wszystkie cechy."
      },
      {
        id: "adj_end_14",
        question: "Während _____ kalt_____ Winters bleiben wir lieber zu Hause warm.",
        translation: "(Podczas zimnej zimy zostajemy raczej w domu w cieple)",
        options: ["des / en", "dem / en", "den / en", "der / en"],
        correct: "des / en",
        explanation: "'Des kalten Winters' - dopełniacz męski! 'Während' wymaga Genitiv - podczas czego. To o porze roku - czas trwania w dopełniaczu. Męski Genitiv: 'des' + przymiotnik -en + rzeczownik -(e)s. Przyimki czasowe typu 'während' standardowo z dopełniaczem."
      },
      {
        id: "adj_end_15",
        question: "Sie arbeitet für ein_____ groß_____ internationalen Firma in Berlin.",
        translation: "(Pracuje dla dużej międzynarodowej firmy w Berlinie)",
        options: ["e / e", "- / e", "e / en", "en / e"],
        correct: "e / e",
        explanation: "'Eine große internationale Firma' - biernik żeński! 'Für' wymaga Akkusativ - 'eine' i -e na przymiotnikach. To o zatrudnieniu - firma jako obiekt pracy. Rodzaj żeński Akkusativ z nieokreślonym: 'eine' + przymiotniki z -e. Oba przymiotniki dostają tę samą końcówkę."
      }
    ]
  },

  separable_inseparable_verbs: {
    name: "Czasowniki rozdzielne i nierozdzielne",
    description: "Aufstehen vs verstehen, ankommen vs bekommen",
    icon: Split,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "sep_verb_1",
        question: "Ich stehe jeden Morgen um sechs Uhr _____ für die Arbeit.",
        translation: "(Wstaję każdego ranka o szóstej rano do pracy)",
        options: ["auf", "an", "aus", "-"],
        correct: "auf",
        explanation: "'Aufstehen' to czasownik ROZDZIELNY! Przedrostek 'auf' oddziela się i idzie na koniec. To o rutynie porannej - wstawanie z łóżka. Rozdzielne czasowniki oddzielają przedrostek w czasie teraźniejszym i przeszłym prostym - 'auf' ląduje na końcu zdania. Pozycja końcowa przedrostka charakteryzuje te czasowniki."
      },
      {
        id: "sep_verb_2",
        question: "Ich _____ nicht, was du sagst - kannst du es wiederholen bitte?",
        translation: "(Nie rozumiem co mówisz - możesz powtórzyć proszę?)",
        options: ["verstehe", "stehe ver", "verstehen", "ver stehe"],
        correct: "verstehe",
        explanation: "'Verstehen' to czasownik NIEROZDZIELNY! Przedrostek 'ver-' nigdy się nie oddziela - zostaje z czasownikiem. To o niezrozumieniu - prośba o wyjaśnienie. Nierozdzielne przedrostki (ver-, be-, er-, ge-, ent-, emp-, miss-, zer-) zawsze pozostają z czasownikiem - nie wędrują na koniec."
      },
      {
        id: "sep_verb_3",
        question: "Der Zug kommt um 15 Uhr am Hauptbahnhof _____ heute.",
        translation: "(Pociąg przyjeżdża o 15 na dworzec główny dzisiaj)",
        options: ["an", "be", "ver", "-"],
        correct: "an",
        explanation: "'Ankommen' rozdzielny! 'An' oddziela się i idzie na koniec zdania. To o rozkładzie jazdy - określenie przybycia. Rozdzielne 'ankommen' split: 'kommt' + 'an' na końcu. Przedrostek 'an-' jest rozdzielny - pokazuje kierunek ruchu."
      },
      {
        id: "sep_verb_4",
        question: "Er _____ ein Geschenk von seinem Großvater zum Geburtstag gestern.",
        translation: "(Otrzymał prezent od swojego dziadka na urodziny wczoraj)",
        options: ["bekam", "kam be", "bekommt", "kam...be"],
        correct: "bekam",
        explanation: "'Bekommen' NIEROZDZIELNY! 'Be-' zostaje, tylko odmienia się czasownik. To o otrzymaniu prezentu - 'be-' jest nierozdzielnym przedrostkiem. Nierozdzielne 'bekommen' w przeszłości to 'bekam' - przedrostek nie oddziela się nawet w innych czasach. 'Be-' zawsze przy czasowniku."
      },
      {
        id: "sep_verb_5",
        question: "Wann fängt der Film im Kino _____? Ich möchte nicht zu spät kommen.",
        translation: "(Kiedy zaczyna się film w kinie? Nie chcę się spóźnić)",
        options: ["an", "be", "ver", "-"],
        correct: "an",
        explanation: "'Anfangen' rozdzielny czasownik! 'An' na końcu pytania - separacja. To pytanie o czas - początek filmu. Nawet w pytaniach rozdzielne czasowniki oddzielają przedrostek - 'fängt...an'. Pozycja końcowa przedrostka maintained niezależnie od typu zdania."
      },
      {
        id: "sep_verb_6",
        question: "Sie _____ mir genau, wie man das Problem lösen kann richtig.",
        translation: "(Wyjaśnia mi dokładnie jak można rozwiązać problem poprawnie)",
        options: ["erklärt", "klärt er", "erklären", "klärt...er"],
        correct: "erklärt",
        explanation: "'Erklären' NIEROZDZIELNY! 'Er-' pozostaje z czasownikiem - tylko odmiana. To o teaching - wyjaśnianie procesu. Przedrostek 'er-' nierozdzielny - 'erklärt' jako całość. Nierozdzielne przedrostki tworzą nierozerwalną jednostkę z rdzeniem czasownika."
      },
      {
        id: "sep_verb_7",
        question: "Ich rufe dich später heute Abend _____ und wir sprechen dann.",
        translation: "(Zadzwonię do ciebie później dziś wieczorem i wtedy porozmawiamy)",
        options: ["an", "be", "ver", "-"],
        correct: "an",
        explanation: "'Anrufen' rozdzielny! 'An' oddziela się - 'rufe...an'. To o planach komunikacyjnych - telefon później. Rozdzielne 'anrufen' split między rdzeń i przedrostek - typowa struktura. 'An-' jako przedrostek kierunkowy jest zawsze rozdzielny."
      },
      {
        id: "sep_verb_8",
        question: "Der Lehrer _____ den Schülern die Grammatik sehr gut und klar.",
        translation: "(Nauczyciel tłumaczy uczniom gramatykę bardzo dobrze i jasno)",
        options: ["erklärt", "klärt...er", "erklären", "klärt er"],
        correct: "erklärt",
        explanation: "'Erklären' nierozdzielny pozostaje razem! Tylko czasownik się odmienia - 'erklärt'. To o nauczaniu - pedagogical explanation. Przedrostek 'er-' nigdy się nie oddziela - całość jako jednostka funkcjonalna. Teaching context używa tego czasownika często."
      },
      {
        id: "sep_verb_9",
        question: "Wir laden unsere Freunde zur Party am Samstag _____.",
        translation: "(Zapraszamy naszych przyjaciół na imprezę w sobotę)",
        options: ["ein", "be", "ver", "-"],
        correct: "ein",
        explanation: "'Einladen' rozdzielny czasownik! 'Ein' na końcu - separation pattern. To o zaproszeniach - gromadzenie gości. Rozdzielne 'einladen': 'laden...ein' - przedrostek migruje do końca. 'Ein-' pokazuje ruch do wewnątrz, zawsze rozdzielny."
      },
      {
        id: "sep_verb_10",
        question: "Er _____ das Konzept sehr schnell und ohne Probleme sofort.",
        translation: "(Rozumie koncept bardzo szybko i bez problemów natychmiast)",
        options: ["begreift", "greift...be", "begreifen", "greift be"],
        correct: "begreift",
        explanation: "'Begreifen' NIEROZDZIELNY! 'Be-' zostaje - comprehension verb. To o szybkim pojmowaniu - intelektualne zrozumienie. Przedrostek 'be-' zawsze nierozdzielny - 'begreift' jako całość. Mental action verbs z 'be-' trzymają przedrostek."
      },
      {
        id: "sep_verb_11",
        question: "Die Sonne geht morgens um sechs Uhr _____ im Osten schön.",
        translation: "(Słońce wschodzi rano o szóstej na wschodzie pięknie)",
        options: ["auf", "be", "ver", "-"],
        correct: "auf",
        explanation: "'Aufgehen' rozdzielny - słońce wschodzi! 'Auf' na końcu pokazuje ruch w górę. To o naturze - wschód słońca. Rozdzielne 'aufgehen': 'geht...auf' - przedrostek pokazuje kierunek (górę). Przedrostki kierunkowe zwykle rozdzielne."
      },
      {
        id: "sep_verb_12",
        question: "Sie _____ ihre Hausaufgaben sehr sorgfältig und gründlich jeden Tag.",
        translation: "(Odrabia swoją pracę domową bardzo starannie i gruntownie każdego dnia)",
        options: ["erledigt", "ledigt...er", "erledigen", "ledigt er"],
        correct: "erledigt",
        explanation: "'Erledigen' NIEROZDZIELNY! 'Er-' pozostaje - completion verb. To o wypełnianiu obowiązków - dokańczanie zadań. Przedrostek 'er-' nierozdzielny - 'erledigt' kompletne. Czasowniki zakończenia z 'er-' nie rozdzielają się."
      },
      {
        id: "sep_verb_13",
        question: "Ich ziehe nächsten Monat in eine neue Wohnung _____.",
        translation: "(Wprowadzam się w przyszłym miesiącu do nowego mieszkania)",
        options: ["um", "be", "ver", "-"],
        correct: "um",
        explanation: "'Umziehen' rozdzielny - przeprowadzka! 'Um' na końcu - separation. To o zmianie miejsca - relocation. Rozdzielne 'umziehen': 'ziehe...um' - przedrostek na końcu. 'Um-' pokazuje change/around, zawsze rozdzielny w kontekście przeprowadzki."
      },
      {
        id: "sep_verb_14",
        question: "Die Geschichte _____ vor hundert Jahren in einem kleinen Dorf.",
        translation: "(Historia zaczyna się sto lat temu w małej wiosce)",
        options: ["beginnt", "ginnt...be", "beginnen", "ginnt be"],
        correct: "beginnt",
        explanation: "'Beginnen' NIEROZDZIELNY! 'Be-' zostaje zawsze - starting verb. To o początku opowieści - temporalny start point. Przedrostek 'be-' nigdy się nie oddziela - 'beginnt' jako jednostka. Czasowniki rozpoczęcia z 'be-' nierozdzielne."
      },
      {
        id: "sep_verb_15",
        question: "Kannst du bitte das Fenster _____? Es ist sehr heiß hier drinnen!",
        translation: "(Czy możesz proszę otworzyć okno? Jest bardzo gorąco tu w środku!)",
        options: ["aufmachen", "bemachen", "vermachen", "machen"],
        correct: "aufmachen",
        explanation: "'Aufmachen' rozdzielny w infinitive! Z modalnym 'können' całość idzie na koniec razem. To prośba o wentylację - opening window. Z czasownikami modalnymi rozdzielny infinitive zostaje razem na końcu: 'aufmachen' jako całość. Dopiero w conjugated form oddziela się."
      }
    ]
  },

  modal_verbs_tenses: {
    name: "Czasowniki modalne w różnych czasach",
    description: "Können, müssen, wollen w Perfekt i Präteritum",
    icon: Zap,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "modal_t_1",
        question: "Ich _____ gestern nicht zur Party kommen - ich war krank zu Hause.",
        translation: "(Nie mogłem wczoraj przyjść na imprezę - byłem chory w domu)",
        options: ["konnte", "kann", "könnte", "gekonnt"],
        correct: "konnte",
        explanation: "'Konnte' to przeszły czas 'können'! Präteritum (prosta przeszłość) dla modalnych standardowo. To o niemożności - choroba preventing attendance. Czasowniki modalne używają Präteritum nawet w mowie - 'konnte' bardziej natural niż perfect. Wyrażanie przeszłej zdolności."
      },
      {
        id: "modal_t_2",
        question: "Wir haben gestern lange arbeiten _____ wegen des wichtigen Projekts.",
        translation: "(Musieliśmy wczoraj długo pracować z powodu ważnego projektu)",
        options: ["müssen", "mussten", "gemusst", "müsst"],
        correct: "müssen",
        explanation: "'Haben...müssen' to Perfekt modalnego! Z drugim infinitive używamy podwójnego infinitive konstrukcji. To o przymusie - work obligation. Perfect z modalnym: 'haben' + infinitive + INFINITIVE modalny (nie participle!). Specjalna konstrukcja gdy jest drugi czasownik."
      },
      {
        id: "modal_t_3",
        question: "Sie _____ als Kind sehr gut Klavier spielen - sie war talentiert.",
        translation: "(Umiała jako dziecko bardzo dobrze grać na pianinie - była utalentowana)",
        options: ["konnte", "kann", "könnte", "gekonnt"],
        correct: "konnte",
        explanation: "'Konnte' opisuje przeszłą zdolność! Childhood ability - past tense modal. To o talencie - musical skill w młodości. Präteritum dla modalnych nawet dla mówienia o przeszłości - 'konnte spielen' natural. Długotrwała ability w przeszłości używa Präteritum."
      },
      {
        id: "modal_t_4",
        question: "Hast du deine Hausaufgaben schon machen _____?",
        translation: "(Czy już musiałeś zrobić swoją pracę domową?)",
        options: ["müssen", "mussten", "gemusst", "müsst"],
        correct: "müssen",
        explanation: "Perfect question z modalnym! 'Hast...machen müssen' - podwójny infinitive. To pytanie o obowiązek - homework completion. Z pytaniami też używamy double infinitive construction: haben + verb infinitive + modal infinitive. Zachowuje tę samą strukturę jak w stwierdzeniach."
      },
      {
        id: "modal_t_5",
        question: "Er _____ früher viel Sport treiben, aber jetzt hat er keine Zeit mehr.",
        translation: "(Chciał kiedyś dużo uprawiać sport, ale teraz nie ma już czasu)",
        options: ["wollte", "will", "würde", "gewollt"],
        correct: "wollte",
        explanation: "'Wollte' past desire! Früher (past) więc Präteritum modalnego. To o zmienionych priorytetach - past wishes vs present reality. Kontrast 'wollte' (past) z 'hat' (present) pokazuje życiową zmianę. Modalny w Präteritum dla past intentions."
      },
      {
        id: "modal_t_6",
        question: "Ich habe das Buch leider nicht lesen _____ - ich hatte zu viel Arbeit.",
        translation: "(Niestety nie mogłem przeczytać książki - miałem za dużo pracy)",
        options: ["können", "konnte", "gekonnt", "könnt"],
        correct: "können",
        explanation: "Perfekt z modalnym - double infinitive! 'Habe...lesen können' nie 'gekonnt'. To wyrażanie niemożności - brak czasu preventing reading. Z innym infinitive (lesen) używamy infinitive modalny - specjalna reguła Perfekt. Participle tylko gdy modalny sam."
      },
      {
        id: "modal_t_7",
        question: "Du _____ gestern früher ins Bett gehen - du siehst müde aus!",
        translation: "(Powinieneś był wczoraj wcześniej iść spać - wyglądasz na zmęczonego!)",
        options: ["hättest...sollen", "solltest", "sollst", "hast...sollen"],
        correct: "hättest...sollen",
        explanation: "'Hättest sollen' to Konjunktiv II - powinien byłeś! Rada retrospektywna - past advice. To o żalu - powinieneś był ale nie zrobiłeś. Konjunktiv II Perfekt dla past 'should have' - regret lub criticism o przeszłości. Wyrażanie co powinno było się stać."
      },
      {
        id: "modal_t_8",
        question: "Wir _____ gestern das Konzert besuchen, aber es war ausverkauft leider.",
        translation: "(Chcieliśmy wczoraj odwiedzić koncert, ale był wyprzedany niestety)",
        options: ["wollten", "wollen", "würden", "gewollt"],
        correct: "wollten",
        explanation: "'Wollten' plural past want! Unfulfilled desire - couldn't realize. To o rozczarowaniu - brak biletów. Präteritum 'wollen' dla past wishes - 'wollten besuchen' shows intention że nie materialized. Group disappointment expressed."
      },
      {
        id: "modal_t_9",
        question: "Sie hat mir gestern mit der Arbeit helfen _____ - sie war sehr nett.",
        translation: "(Chciała mi wczoraj pomóc z pracą - była bardzo miła)",
        options: ["wollen", "wollte", "gewollt", "wollt"],
        correct: "wollen",
        explanation: "Perfekt modalny z double infinitive! 'Hat...helfen wollen' - offered help. To o ofercie pomocy - willingness to assist. Perfect construction: haben + verb infinitive + modal infinitive. Kindness expressed przez willingness."
      },
      {
        id: "modal_t_10",
        question: "Ihr _____ das wirklich nicht tun - es ist gefährlich für euch!",
        translation: "(Nie powinniście naprawdę tego robić - to jest niebezpieczne dla was!)",
        options: ["sollt", "solltet", "sollten", "sollen"],
        correct: "solltet",
        explanation: "'Solltet' to 2nd person plural Präteritum! Advice/warning - shouldn't do. To ostrzeżenie o bezpieczeństwie - preventing danger. Informal plural 'ihr' + 'solltet' dla group advice. Modalny w Präteritum dla present-time advice sounds softer."
      },
      {
        id: "modal_t_11",
        question: "Er hat gestern sehr früh aufstehen _____ für die wichtige Reise.",
        translation: "(Musiał wczoraj bardzo wcześnie wstać na ważną podróż)",
        options: ["müssen", "mussten", "gemusst", "müsst"],
        correct: "müssen",
        explanation: "Perfect modalny - 'hat...aufstehen müssen'! Double infinitive construction. To o konieczności - wczesne wstanie required. Z separable verb (aufstehen) + modal: haben + separable infinitive + modal infinitive. Travel necessities."
      },
      {
        id: "modal_t_12",
        question: "Ich _____ gerne Deutsch lernen, wenn ich mehr Zeit hätte dafür.",
        translation: "(Chciałbym nauczyć się niemieckiego, gdybym miał więcej czasu na to)",
        options: ["würde", "will", "wollte", "wolle"],
        correct: "würde",
        explanation: "'Würde lernen' to Konjunktiv II - conditional wish! Hypothetical desire. To o niespełnionym pragnieniu - time constraints preventing. 'Würde' + infinitive dla polite wishes lub hypotheticals. Conditional mood expressing unfulfilled desires."
      },
      {
        id: "modal_t_13",
        question: "Sie _____ als Studentin immer früh aufstehen für die Vorlesungen.",
        translation: "(Musiała jako studentka zawsze wcześnie wstawać na wykłady)",
        options: ["musste", "muss", "müsste", "gemusst"],
        correct: "musste",
        explanation: "'Musste' past obligation! Student life routine - mandatory early rising. To o college requirements - attendance rules. Präteritum 'müssen' dla describing past necessities - 'musste aufstehen' habitual past obligation. Regular student routine."
      },
      {
        id: "modal_t_14",
        question: "Wir haben leider nicht kommen _____ - wir hatten einen Notfall.",
        translation: "(Niestety nie mogliśmy przyjść - mieliśmy nagły wypadek)",
        options: ["können", "konnte", "gekonnt", "könnt"],
        correct: "können",
        explanation: "Negative Perfekt z modalnym! 'Haben...kommen können' - inability. To apology - emergency prevented. Double infinitive nawet w negative: haben + nicht + verb infinitive + modal infinitive. Explaining absence."
      },
      {
        id: "modal_t_15",
        question: "Du _____ mehr Wasser trinken - das ist gesund für dich!",
        translation: "(Powinieneś pić więcej wody - to jest zdrowe dla ciebie!)",
        options: ["solltest", "sollst", "sollten", "sollen"],
        correct: "solltest",
        explanation: "'Solltest' - Präteritum dla soft advice! Sounds more polite than 'sollst'. To health recommendation - gentle suggestion. Präteritum form modalnych often używany dla present advice - softer, more tentative than present. Diplomatic health counsel."
      }
    ]
  },

  word_order_complex: {
    name: "Szyk wyrazów w zdaniach złożonych",
    description: "Hauptsatz, Nebensatz, pozycja czasownika",
    icon: Layers,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "word_ord_1",
        question: "Ich weiß, dass er heute nicht _____ _____.",
        translation: "(Wiem, że on dzisiaj nie przyjdzie)",
        options: ["kommen wird", "wird kommen", "kommt", "gekommen ist"],
        correct: "kommen wird",
        explanation: "W zdaniu podrzędnym czasownik idzie NA KOŃEC! 'Dass' wprowadza Nebensatz - 'kommen wird' kończy zdanie. To o wiedzy - reported information. Zdania podrzędne (nach 'dass, weil, ob') wymagają verb-final order - wszystkie czasowniki na końcu. Odwrócona kolejność od main clause."
      },
      {
        id: "word_ord_2",
        question: "_____ du morgen Zeit hast, können wir zusammen einkaufen gehen.",
        translation: "(Jeśli będziesz miał jutro czas, możemy razem pójść na zakupy)",
        options: ["Wenn", "Wann", "Als", "Ob"],
        correct: "Wenn",
        explanation: "'Wenn' dla warunku rozpoczyna zdanie! Conditional clause first - main clause follows. To o planowaniu - conditional meeting. Gdy zdanie podrzędne zaczyna, main clause ma inwersję - verb comes immediately after. Conditional 'wenn' structures."
      },
      {
        id: "word_ord_3",
        question: "Weil es stark _____, bleiben wir heute zu Hause im Warmen.",
        translation: "(Ponieważ mocno pada, zostajemy dzisiaj w domu w cieple)",
        options: ["regnet", "regen", "geregnet", "wird regnen"],
        correct: "regnet",
        explanation: "'Weil' wymaga czasownika na końcu! 'Regnet' kończy clause - Nebensatz order. To o powodzie - weather explaining decision. Zdania przyczynowe z 'weil' wymagają verb-final - 'regnet' ostatnie słowo przed przecinkiem. Causal clause structure."
      },
      {
        id: "word_ord_4",
        question: "Ich glaube, dass sie gestern den ganzen Tag _____ _____.",
        translation: "(Myślę, że ona wczoraj cały dzień pracowała)",
        options: ["gearbeitet hat", "hat gearbeitet", "arbeitet", "arbeitete"],
        correct: "gearbeitet hat",
        explanation: "Perfekt w zdaniu podrzędnym! Participle + haben NA KOŃCU razem. To o przypuszczeniu - belief about past. W Nebensatz Perfect: subject + objects + PARTICIPLE + auxiliary. Oba elementy Perfekt na końcu zachowując participle przed auxiliary."
      },
      {
        id: "word_ord_5",
        question: "Obwohl er müde _____, geht er noch joggen im Park heute.",
        translation: "(Chociaż jest zmęczony, idzie jeszcze biegać w parku dzisiaj)",
        options: ["ist", "sein", "war", "gewesen"],
        correct: "ist",
        explanation: "'Obwohl' concessive clause - verb kończy! 'Ist' ostatnie w tej części. To o determinacji - activity despite fatigue. Concessive clauses (obwohl, obgleich) mają verb-final order - 'ist' zamyka pierwszą część przed main clause. Contrast structure."
      },
      {
        id: "modal_t_6",
        question: "_____ ich gestern angekommen bin, habe ich dich sofort angerufen.",
        translation: "(Gdy wczoraj przybyłem, natychmiast do ciebie zadzwoniłem)",
        options: ["Als", "Wenn", "Wann", "Ob"],
        correct: "Als",
        explanation: "'Als' dla jednorazowego past event! Rozpoczyna zdanie - inversion follows. To o sekwencji - arrival then call. 'Als' dla specific past occasions (nie repeated). Gdy subordinate clause zaczyna, main verb immediately po - inversion. One-time past events."
      },
      {
        id: "word_ord_7",
        question: "Ich weiß nicht, ob er morgen zur Arbeit _____ _____.",
        translation: "(Nie wiem, czy on jutro przyjdzie do pracy)",
        options: ["kommen wird", "wird kommen", "kommt", "gekommen ist"],
        correct: "kommen wird",
        explanation: "'Ob' clause wymaga verb-final! Future 'wird kommen' becomes 'kommen wird'. To wyrażanie uncertainty - questioning attendance. Indirect questions (ob) have same verb-final rule - wszystkie czasowniki na końcu. Future auxiliary ostatni."
      },
      {
        id: "word_ord_8",
        question: "Sie sagt, dass sie gestern das Buch nicht _____ _____ _____.",
        translation: "(Mówi, że wczoraj nie mogła przeczytać książki)",
        options: ["lesen können hat", "hat lesen können", "lesen hat können", "hat können lesen"],
        correct: "hat lesen können",
        explanation: "Perfekt modalny w Nebensatz! Order: haben + verb infinitive + modal infinitive - wszystko kończy. To reported inability - explaining failure. Nawet w subordinate verb-final applies: auxiliary + infinitives razem na końcu. Triple verb cluster kończy clause."
      },
      {
        id: "word_ord_9",
        question: "Nachdem er gegessen _____, ging er spazieren im Wald entspannt.",
        translation: "(Po tym jak zjadł, poszedł na spacer w lesie zrelaksowany)",
        options: ["hatte", "hat", "haben", "habe"],
        correct: "hatte",
        explanation: "'Nachdem' wymaga Plusquamperfekt! 'Gegessen hatte' - past perfect dla earlier action. To temporal sequence - eating before walking. 'Nachdem' clauses use Plusquamperfekt showing prior completion - participle + hatte kończy subordinate clause. Earlier past action."
      },
      {
        id: "word_ord_10",
        question: "_____ das Wetter schön ist, gehen wir an den Strand schwimmen.",
        translation: "(Gdy pogoda jest ładna, idziemy na plażę pływać)",
        options: ["Wenn", "Als", "Wann", "Ob"],
        correct: "Wenn",
        explanation: "'Wenn' dla repeated lub general conditions! Starts sentence - inversion follows. To o planach zależnych od pogody - conditional outing. 'Wenn' dla general 'gdy/kiedy' (nie specific past). Subordinate first means inverted main clause."
      },
      {
        id: "word_ord_11",
        question: "Ich frage mich, warum sie gestern so früh nach Hause _____ _____.",
        translation: "(Zastanawiam się, dlaczego ona wczoraj tak wcześnie poszła do domu)",
        options: ["gegangen ist", "ist gegangen", "geht", "ging"],
        correct: "gegangen ist",
        explanation: "Indirect question - verb-final! 'Warum' clause wymaga końcowej pozycji - 'gegangen ist'. To curiosity - wondering about behavior. Pytania pośrednie (warum, wann, wo w mid-sentence) używają subordinate order - auxiliary kończy. Perfect на końcu."
      },
      {
        id: "word_ord_12",
        question: "Bevor du _____, solltest du alle Lichter ausschalten bitte.",
        translation: "(Zanim wyjdziesz, powinieneś wyłączyć wszystkie światła proszę)",
        options: ["gehst", "gehen", "gegangen", "ging"],
        correct: "gehst",
        explanation: "'Bevor' temporal clause - verb kończy! Simple present 'gehst' wystarczy dla future. To reminder - instruction przed leaving. Time clauses z 'bevor' (before) mają verb-final - action ends subordinate. Present dla implied future."
      },
      {
        id: "word_ord_13",
        question: "Sie ist glücklich, _____ sie die Prüfung bestanden hat erfolgreich.",
        translation: "(Jest szczęśliwa, że zdała egzamin pomyślnie)",
        options: ["weil", "wenn", "als", "ob"],
        correct: "weil",
        explanation: "'Weil' causa reason! Subordinate explaining happiness - verb kończy. To о radości - success causing emotion. Causal clauses (weil, da) explain why - require verb-final order. Participle + auxiliary kończy 'weil' clause."
      },
      {
        id: "word_ord_14",
        question: "Ich hoffe, dass du morgen pünktlich _____ _____..,",
        translation: "(Mam nadzieję, że jutro przybydziesz punktualnie)",
        options: ["ankommen wirst", "wirst ankommen", "ankommst", "angekommen bist"],
        correct: "ankommen wirst",
        explanation: "Future w subordinate! Separable 'ankommen' + 'wirst' - оба na końcu. To expressing hope - punctuality wish. Subordinate future: infinitive + werden auxiliary kończy. Separable verb stays together jako infinitive на końcu."
      },
      {
        id: "word_ord_15",
        question: "_____ es kalt ist draußen, trage ich eine warme Jacke heute.",
        translation: "(Ponieważ jest zimno na zewnątrz, noszę ciepłą kurtkę dzisiaj)",
        options: ["Weil", "Wenn", "Als", "Dass"],
        correct: "Weil",
        explanation: "'Weil' causal starting sentence! Subordinate first - main clause inverted follows. To practical decision - dressing dla weather. Beginning z 'weil' clause forces inversion w main - verb immediately after comma. Reason-result structure."
      }
    ]
  }
};

export default part4Categories;

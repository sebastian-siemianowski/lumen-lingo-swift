/**
 * POLISH → GERMAN GRAMMAR - PART 27
 * 3 kategorie, 15 pytań każda
 */

import { Zap, GitMerge, Link } from "lucide-react";

export const part27Categories = {
  particles_intensifiers_complete: {
    name: "Partykuły i intensyfikatory - kompletne",
    description: "Sehr, ziemlich, äußerst, völlig - gradacja intensywności",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "part_int_1",
        question: "Das Essen war _____ lecker - ich möchte wiederkommen!",
        translation: "(Jedzenie było bardzo smaczne - chcę wrócić!)",
        options: ["sehr", "viel", "zu", "ganz"],
        correct: "sehr",
        explanation: "Intensyfikator 'sehr' (bardzo) to najpowszechniejszy wzmacniacz przymiotników i przysłówków - 'sehr lecker' (bardzo smaczne). Pozycja przed przymiotnikiem. Wysoka satysfakcja kulinarna. Polski 'bardzo' działa identycznie. 'Sehr' to podstawowe narzędzie intensyfikacji - neutralne i uniwersalne dla pozytywnych i negatywnych cech."
      },
      {
        id: "part_int_2",
        question: "Ich bin _____ müde nach diesem langen Arbeitstag heute.",
        translation: "(Jestem dość zmęczony po tym długim dniu pracy dzisiaj)",
        options: ["ziemlich", "sehr", "äußerst", "völlig"],
        correct: "ziemlich",
        explanation: "Intensyfikator 'ziemlich' (dość/dosyć) słabszy niż 'sehr' - 'ziemlich müde' (dość zmęczony). Umiarkowana intensywność. Nie kompletnie wyczerpany ale zmęczony. Forma 'ziemlich' to środek między 'ein bisschen' (trochę) a 'sehr' (bardzo) - przydatna dla umiarkowanych stanów, nie ekstremów."
      },
      {
        id: "part_int_3",
        question: "Das war eine _____ schwierige Prüfung - sehr anspruchsvoll!",
        translation: "(To był niezwykle trudny egzamin - bardzo wymagający!)",
        options: ["äußerst", "sehr", "ziemlich", "ganz"],
        correct: "äußerst",
        explanation: "Intensyfikator 'äußerst' (niezwykle/wyjątkowo) silniejszy niż 'sehr' - 'äußerst schwierig' (niezwykle trudny). Wysoka formalność i intensywność. Egzamin przekraczał oczekiwania. Forma 'äußerst' używana dla ekstremalnych sytuacji - silniejsza niż 'sehr', pokazuje że coś jest na końcu skali trudności."
      },
      {
        id: "part_int_4",
        question: "Sie war _____ überrascht von dem Geschenk - total schockiert!",
        translation: "(Była całkowicie zaskoczona prezentem - totalnie zszokowana!)",
        options: ["völlig", "sehr", "ziemlich", "etwas"],
        correct: "völlig",
        explanation: "Intensyfikator 'völlig' (całkowicie/kompletnie) dla CAŁKOWITEGO stopnia - 'völlig überrascht' (całkowicie zaskoczona). Maksymalna intensywność. Prezent całkowicie nieoczekiwany. Polski 'całkowicie' odpowiada. 'Völlig' wskazuje absolutność - nie częściowo tylko w 100%, kompletna transformacja stanu."
      },
      {
        id: "part_int_5",
        question: "Das ist _____ unmöglich zu schaffen in so kurzer Zeit!",
        translation: "(To jest absolutnie niemożliwe do zrobienia w tak krótkim czasie!)",
        options: ["absolut", "sehr", "ziemlich", "etwas"],
        correct: "absolut",
        explanation: "Intensyfikator 'absolut' (absolutnie) dla kategorycznych stwierdzeń - 'absolut unmöglich'. Bez cienia wątpliwości. Niemożliwość terminu. Forma 'absolut' najsilniejsza - używana gdy chcesz wykluczyć JAKĄKOLWIEK możliwość, zero szansy na realizację."
      },
      {
        id: "part_int_6",
        question: "Ich bin _____ sicher, dass ich Recht habe in dieser Sache.",
        translation: "(Jestem całkiem pewien, że mam rację w tej sprawie)",
        options: ["ganz", "sehr", "äußerst", "völlig"],
        correct: "ganz",
        explanation: "Intensyfikator 'ganz' (całkiem/zupełnie) dla wysokiej ale nie absolutnej pewności - 'ganz sicher' (całkiem pewny). Pośredni między 'ziemlich' a 'völlig'. Pewność siebie. Forma 'ganz' łagodniejsza niż 'völlig' - pozostawia minimalną przestrzeń na wątpliwość, nie brzmi arogancko jak absolutna pewność."
      },
      {
        id: "part_int_7",
        question: "Das Konzert war _____ fantastisch - unvergesslich wirklich!",
        translation: "(Koncert był wyjątkowo fantastyczny - naprawdę niezapomniany!)",
        options: ["außerordentlich", "sehr", "ziemlich", "ganz"],
        correct: "außerordentlich",
        explanation: "Intensyfikator 'außerordentlich' (nadzwyczaj/wyjątkowo) bardzo formalny i silny - 'außerordentlich fantastisch'. Literacka elegancja. Ekstremalnie pozytywne doświadczenie. Forma 'außerordentlich' (dosłownie 'poza porządkiem') sugeruje że przekracza normalne standardy - zarezerwowana dla naprawdę wyjątkowych rzeczy."
      },
      {
        id: "part_int_8",
        question: "Ich bin _____ einverstanden mit deinem Vorschlag - perfekt!",
        translation: "(Jestem całkowicie zgodny z twoją propozycją - perfekcyjnie!)",
        options: ["völlig", "sehr", "ziemlich", "etwas"],
        correct: "völlig",
        explanation: "Pełna zgoda wymaga 'völlig' - 'völlig einverstanden' (całkowicie zgodny). Nie ma zastrzeżeń. Enthusiastyczna akceptacja. Forma 'völlig' wyklucza częściowe zgody - to kompletna aprobal bez żadnych 'ale', silne poparcie dla propozycji."
      },
      {
        id: "part_int_9",
        question: "Der Film war _____ langweilig - bin eingeschlafen sogar!",
        translation: "(Film był strasznie nudny - nawet zasnąłem!)",
        options: ["furchtbar", "sehr", "ziemlich", "ganz"],
        correct: "furchtbar",
        explanation: "Intensyfikator negatywny 'furchtbar' (strasznie/okropnie) dla złych rzeczy - 'furchtbar langweilig'. Ekstremalnie negatywna ocena. Zaśnięcie podczas filmu to ostateczna nuda. Polski 'strasznie' podobny. 'Furchtbar' (dosłownie 'straszny') używany kolokwialnie dla intensyfikacji negatywnych cech - przesada dla efektu."
      },
      {
        id: "part_int_10",
        question: "Sie ist _____ intelligent für ihr Alter - beeindruckend!",
        translation: "(Jest niezwykle inteligentna jak na swój wiek - imponujące!)",
        options: ["unglaublich", "sehr", "ziemlich", "ganz"],
        correct: "unglaublich",
        explanation: "Intensyfikator 'unglaublich' (niewiarygodnie) dla ekstremalnych cech - 'unglaublich intelligent'. Podziw dla młodej inteligencji. Dosłownie 'nieuwierzalny'. Forma 'unglaublich' (nie do uwierzenia) sugeruje że cecha przekracza normalne oczekiwania - szczególnie z kontekstem wieku, podkreśla wyjątkowość."
      },
      {
        id: "part_int_11",
        question: "Das Zimmer ist _____ sauber - kaum benutzt scheint!",
        translation: "(Pokój jest nadzwyczaj czysty - ledwo używany wygląda!)",
        options: ["überaus", "sehr", "ziemlich", "etwas"],
        correct: "überaus",
        explanation: "Intensyfikator 'überaus' (nadzwyczaj/nad wyraz) bardzo formalny - 'überaus sauber'. Literacka elegancja. Perfekcyjna czystość. Forma 'überaus' (dosłownie 'ponad') sugeruje przekroczenie normalnych standardów - zarezerwowana dla pisanego języka lub bardzo formalnych sytuacji."
      },
      {
        id: "part_int_12",
        question: "Ich bin _____ enttäuscht von deinem Verhalten ehrlich gesagt.",
        translation: "(Jestem głęboko rozczarowany twoim zachowaniem szczerze mówiąc)",
        options: ["zutiefst", "sehr", "ziemlich", "ganz"],
        correct: "zutiefst",
        explanation: "Intensyfikator emocjonalny 'zutiefst' (głęboko) dla silnych uczuć - 'zutiefst enttäuscht' (głęboko rozczarowany). Glębina emocji. Poważne rozczarowanie. Forma 'zutiefst' (dosłownie 'do najgłębszej głębi') używana dla silnych emocji - pokazuje że rozczarowanie nie powierzchowne tylko dotyka sedna."
      },
      {
        id: "part_int_13",
        question: "Der Vortrag war _____ interessant - habe viel gelernt!",
        translation: "(Wykład był niezwykle interesujący - dużo się nauczyłem!)",
        options: ["höchst", "sehr", "ziemlich", "ganz"],
        correct: "höchst",
        explanation: "Intensyfikator 'höchst' (niezwykle/wysoce) formalny - 'höchst interessant'. Od 'hoch' (wysoki) w formie superlatywnej jako intensyfikator. Wartościowa prezentacja. Forma 'höchst' (najwyżej) sugeruje szczyt jakości - używana w akademickich lub profesjonalnych kontekstach, podnosi poziom wypowiedzi."
      },
      {
        id: "part_int_14",
        question: "Das war _____ nett von dir - danke vielmals herzlich!",
        translation: "(To było naprawdę miłe z twojej strony - serdecznie dziękuję!)",
        options: ["wirklich", "sehr", "ziemlich", "völlig"],
        correct: "wirklich",
        explanation: "Intensyfikator 'wirklich' (naprawdę/rzeczywiście) dodaje autentyczności - 'wirklich nett' (naprawdę miłe). Podkreśla szczerość oceny. Wdzięczność za gest. Polski 'naprawdę' identyczny. 'Wirklich' weryfikuje prawdziwość - używasz gdy chcesz podkreślić że to nie grzecznościowa fraza tylko szczera opinia."
      },
      {
        id: "part_int_15",
        question: "Sie singt _____ schön - hat eine Ausbildung professionell!",
        translation: "(Śpiewa wyjątkowo pięknie - ma profesjonalne wykształcenie!)",
        options: ["besonders", "sehr", "ziemlich", "ganz"],
        correct: "besonders",
        explanation: "Intensyfikator 'besonders' (szczególnie/wyjątkowo) wyróżnia spośród innych - 'besonders schön' (wyjątkowo pięknie). Podkreśla unikalność. Trening wokalny słyszalny. Forma 'besonders' (od 'besonder' - specjalny) sugeruje że to wyróżnia się na tle - nie tylko bardzo piękne tylko WYJĄ TKOWO w porównaniu do innych."
      }
    ]
  },

  expressing_causality_advanced: {
    name: "Wyrażanie przyczynowości - zaawansowane",
    description: "Deshalb, deswegen, daher, infolgedessen - konsekwencje i przyczyny",
    icon: GitMerge,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "caus_adv_1",
        question: "Es regnete stark, _____ blieben wir zu Hause lieber.",
        translation: "(Mocno padało, dlatego zostaliśmy raczej w domu)",
        options: ["deshalb", "obwohl", "aber", "und"],
        correct: "deshalb",
        explanation: "Spójnik przyczynowy 'deshalb' (dlatego/z tego powodu) łączy przyczynę z rezultatem - deszcz SPOWODOWAŁ pozostanie. Normalny szyk po 'deshalb'. Pogoda dyktuje plany. Forma 'deshalb' pokazuje logiczny łańcuch: sytuacja → decyzja, najpowszechniejszy sposób wyrażania konsekwencji w niemieckim."
      },
      {
        id: "caus_adv_2",
        question: "Ich war krank, _____ konnte ich nicht zur Arbeit kommen.",
        translation: "(Byłem chory, dlatego nie mogłem przyjść do pracy)",
        options: ["deswegen", "trotzdem", "außerdem", "sondern"],
        correct: "deswegen",
        explanation: "Spójnik 'deswegen' (z tego powodu) synonim 'deshalb' ale odnosi się BEZPOŚREDNIO do poprzedniej sytuacji - choroba to konkretny powód. Normalny szyk po nim. Usprawiedliwienie nieobecności. 'Deswegen' (dosłownie 'z tego powodu') bardziej eksplicytne niż 'deshalb' - wskazuje palcem na przyczynę."
      },
      {
        id: "caus_adv_3",
        question: "Sie hatte viel Erfahrung, _____ bekam sie die Stelle sofort.",
        translation: "(Miała dużo doświadczenia, dlatego dostała posadę natychmiast)",
        options: ["daher", "obwohl", "aber", "denn"],
        correct: "daher",
        explanation: "Spójnik 'daher' (dlatego/stąd) bardziej formalny niż 'deshalb/deswegen' - 'daher bekam sie'. Doświadczenie jako kwalifikacja. Normalny szyk. Sukces w aplikacji. Forma 'daher' często w pisanym języku biznesowym - eleganckie wyrażenie przyczynowości, profesjonalne i precyzyjne."
      },
      {
        id: "caus_adv_4",
        question: "Es gab starke Regenfälle, _____ wurden viele Straßen überflutet.",
        translation: "(Były silne opady, wskutek tego wiele ulic zostało zalanych)",
        options: ["infolgedessen", "deshalb", "trotzdem", "jedoch"],
        correct: "infolgedessen",
        explanation: "Spójnik 'infolgedessen' (wskutek tego/w konsekwencji) BARDZO formalny - 'infolgedessen wurden'. Używany w oficjalnych raportach. Naturalna katastrofa. Forma najdłuższa i najbardziej formalna - typowa dla administracyjnego języka, sprawozdań, dokumentacji, podkreśla bezpośredni związek przyczynowy."
      },
      {
        id: "caus_adv_5",
        question: "Der Zug hatte Verspätung, _____ verpassten wir unseren Anschluss.",
        translation: "(Pociąg miał opóźnienie, dlatego przegapiliśmy nasze połączenie)",
        options: ["deshalb", "obwohl", "während", "bevor"],
        correct: "deshalb",
        explanation: "Ponownie 'deshalb' dla prostego związku przyczynowego - opóźnienie spowodowało spóźnienie. Mnoga 'wir verpassten'. Frustracja z transportu. Łańcuch opóźnień. 'Deshalb' najbardziej neutralne i powszechne - odpowiednia dla codziennych sytuacji gdzie przyczyna prowadzi do efektu."
      },
      {
        id: "caus_adv_6",
        question: "Sie sprach kein Deutsch, _____ hatte sie Schwierigkeiten am Anfang.",
        translation: "(Nie mówiła po niemiecku, dlatego miała trudności na początku)",
        options: ["darum", "obwohl", "aber", "und"],
        correct: "darum",
        explanation: "Spójnik 'darum' (dlatego) synonim 'deshalb' - 'darum hatte sie' (dlatego miała). Bariera językowa jako problem. Normalny szyk. Początkowe trudności. Forma 'darum' (dosłownie 'o to/wokół tego') równie powszechna jak 'deshalb' - regionalnie może być preferowana, znaczenie identyczne."
      },
      {
        id: "caus_adv_7",
        question: "Er lernt fleißig, _____ macht er große Fortschritte schnell.",
        translation: "(Uczy się pilnie, dlatego robi wielkie postępy szybko)",
        options: ["deshalb", "obwohl", "aber", "oder"],
        correct: "deshalb",
        explanation: "Wysiłek w nauce prowadzi do postępu - 'deshalb macht er' (dlatego robi). Pozytywna przyczynowość. Motywacja przez rezultaty. Forma pokazuje nagradzający cykl - ciężka praca (przyczyna) → postęp (skutek), 'deshalb' jasno łączy jedno z drugim."
      },
      {
        id: "caus_adv_8",
        question: "Das Projekt war wichtig, _____ haben wir Überstunden gemacht.",
        translation: "(Projekt był ważny, dlatego pracowaliśmy po godzinach)",
        options: ["deswegen", "trotzdem", "außerdem", "sondern"],
        correct: "deswegen",
        explanation: "Ważność projektu jako motywacja - 'deswegen haben wir' (z tego powodu mamy). Poświęcenie dla pracy. Nadgodziny wymagane. Forma 'deswegen' podkreśla że decyzja była UZASADNIONA tą konkretn ą przyczyną - nie przypadkowe nadgodziny tylko świadoma odpowiedź na priorytet."
      },
      {
        id: "caus_adv_9",
        question: "Ich hatte wenig Zeit, _____ musste ich mich beeilen sehr.",
        translation: "(Miałem mało czasu, dlatego musiałem się bardzo spieszyć)",
        options: ["deshalb", "obwohl", "während", "bevor"],
        correct: "deshalb",
        explanation: "Brak czasu wymusza pośpiech - 'deshalb musste ich' (dlatego musiałem). Zwrotny czasownik 'sich beeilen'. Presja czasowa. Logiczna konsekwencja. 'Deshalb' pokazuje konieczność - gdy masz mało czasu, pośpiech to NIE wybór tylko konieczność, przyczynowość jasna."
      },
      {
        id: "caus_adv_10",
        question: "Das Wetter war schlecht, _____ wurde das Fest abgesagt leider.",
        translation: "(Pogoda była zła, dlatego festyn został odwołany niestety)",
        options: ["daher", "obwohl", "aber", "und"],
        correct: "daher",
        explanation: "Pogoda jako przyczyna odwołania - 'daher wurde' (stąd został). Passiv w rezultacie. Rozczarowanie organizatorów i gości. Forma 'daher' formalna ale nie przesadnie - odpowiednia dla oficjalnych ogłoszeń o odwołaniu, wyjaśnia przyczynę bez przesadnej biurokracji."
      },
      {
        id: "caus_adv_11",
        question: "Er hatte gut gelernt, _____ bestand er die Prüfung erfolgreich.",
        translation: "(Dobrze się uczył, dlatego zdał egzamin pomyślnie)",
        options: ["deshalb", "obwohl", "aber", "denn"],
        correct: "deshalb",
        explanation: "Nauka jako przyczyna sukcesu - 'deshalb bestand er' (dlatego zdał). Pozytywna korelacja wysiłek-rezultat. Inwersja po 'deshalb'. Forma pokazuje sprawiedliwość - kto się uczy, ten zdaje, 'deshalb' potwierdza że sukces NIE był przypadkowy tylko zasłużony."
      },
      {
        id: "caus_adv_12",
        question: "Die Straßen waren glatt, _____ fuhren wir sehr langsam vorsichtig.",
        translation: "(Drogi były śliskie, dlatego jechaliśmy bardzo wolno ostrożnie)",
        options: ["darum", "obwohl", "während", "bevor"],
        correct: "darum",
        explanation: "Niebezpieczne warunki jako przyczyna ostrożności - 'darum fuhren wir' (dlatego jechaliśmy). Rozsądna reakcja na zagrożenie. Normalny szyk. Forma 'darum' pokazuje odpowiedzialność - warunki drogowe (przyczyna) dyktują prędkość (skutek), bezpieczeństwo priorytetem."
      },
      {
        id: "caus_adv_13",
        question: "Sie war sehr müde, _____ ging sie früh ins Bett schlafen.",
        translation: "(Była bardzo zmęczona, dlatego poszła wcześnie do łóżka spać)",
        options: ["deshalb", "obwohl", "aber", "oder"],
        correct: "deshalb",
        explanation: "Zmęczenie jako przyczyna wczesnego snu - 'deshalb ging sie' (dlatego poszła). Słuchanie ciała. Dbanie o regenerację. Forma pokazuje samoświadomość - rozpoznanie zmęczenia (przyczyna) i odpowiednia reakcja (wcześniejszy sen), 'deshalb' łączy przyczynę ze zdrową decyzją."
      },
      {
        id: "caus_adv_14",
        question: "Das Auto war kaputt, _____ nahmen wir den Bus zur Arbeit.",
        translation: "(Samochód był zepsuty, dlatego pojechaliśmy autobusem do pracy)",
        options: ["deswegen", "trotzdem", "außerdem", "sondern"],
        correct: "deswegen",
        explanation: "Awaria jako przyczyna zmiany transportu - 'deswegen nahmen wir' (z tego powodu wzięliśmy). Adaptacja do okoliczności. Elastyczność w problemach. Forma 'deswegen' podkreśla że autobus był ALTERNATYWĄ wymuszoną przez okoliczności - nie wybór preferencji tylko konieczność."
      },
      {
        id: "caus_adv_15",
        question: "Ich hatte Kopfschmerzen, _____ bin ich nach Hause gegangen früh.",
        translation: "(Miałem ból głowy, dlatego poszedłem wcześnie do domu)",
        options: ["daher", "obwohl", "aber", "und"],
        correct: "daher",
        explanation: "Ból jako powód wyjścia - 'daher bin ich gegangen' (stąd poszedłem). Perfect z 'sein' dla ruchu. Dbanie o zdrowie. Forma 'daher' w kontekście zdrowotnym brzmi odpowiedzialnie - pokazuje że słuchasz sygnałów ciała, ból głowy (przyczyna) wymaga odpoczynku (reakcja)."
      }
    ]
  },

  advanced_sentence_connectors: {
    name: "Zaawansowane łączniki zdań",
    description: "Außerdem, allerdings, jedenfalls, trotzdem - złożona logika",
    icon: Link,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "adv_conn_1",
        question: "Das Wetter ist gut. _____ haben wir Zeit für Ausflug.",
        translation: "(Pogoda jest dobra. Poza tym mamy czas na wycieczkę)",
        options: ["Außerdem", "Trotzdem", "Allerdings", "Jedoch"],
        correct: "Außerdem",
        explanation: "Łącznik 'außerdem' (poza tym/dodatkowo) dodaje kolejny POZYTYWNY argument - pierwsza przyczyna (pogoda) plus druga (czas). Kumulacja korzyści. Normalny szyk po nim. Polski 'poza tym' podobny. Forma buduje momentum - każdy argument wzmacnia poprzedni, prowadząc do oczywistego wniosku że warto jechać."
      },
      {
        id: "adv_conn_2",
        question: "Der Film war gut, _____ etwas zu lang für meinen Geschmack.",
        translation: "(Film był dobry, aczkolwiek trochę za długi jak na mój gust)",
        options: ["allerdings", "deshalb", "außerdem", "trotzdem"],
        correct: "allerdings",
        explanation: "Łącznik 'allerdings' (aczkolwiek/jednak) wprowadza OGRANICZENIE lub zastrzeżenie - film dobry ALE za długi. Łagodzi pozytyw negatywem. Normalny szyk. Mieszane uczucia. Forma 'allerdings' dyplomatyczna - pozwala wyrazić krytykę nie rujnując ogólnie pozytywnej opinii, balansuje ocenę."
      },
      {
        id: "adv_conn_3",
        question: "Ich bin müde. _____ muss ich noch arbeiten bis spät.",
        translation: "(Jestem zmęczony. Niemniej jednak muszę jeszcze pracować do późna)",
        options: ["Trotzdem", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Trotzdem",
        explanation: "Łącznik 'trotzdem' (mimo to/pomimo tego) pokazuje działanie WBREW przeszkodzie - zmęczony ALE pracuje. Kontrast nie konsekwencja. Determinacja mimo trudności. Polski 'mimo to' identyczny. 'Trotzdem' wyraża wytrwałość - sytuacja nie idealna ale nie powstrzymuje od działania."
      },
      {
        id: "adv_conn_4",
        question: "Vielleicht kommt er nicht. _____ sollten wir einen Plan B haben.",
        translation: "(Może nie przyjdzie. W każdym razie powinniśmy mieć plan B)",
        options: ["Jedenfalls", "Deshalb", "Trotzdem", "Außerdem"],
        correct: "Jedenfalls",
        explanation: "Łącznik 'jedenfalls' (w każdym razie/tak czy inaczej) wprowadza praktyczną reakcję na niepewność - niezależnie od tego CO się stanie, potrzeba planu B. Pragmatyzm. Forma 'jedenfalls' używana dla zabezpieczeń - pokazuje że myślisz o różnych scenariuszach i przygotowujesz się na wszystkie możliwości."
      },
      {
        id: "adv_conn_5",
        question: "Das Angebot ist gut. _____ muss ich darüber nachdenken erst.",
        translation: "(Oferta jest dobra. Jednakże muszę nad tym najpierw pomyśleć)",
        options: ["Allerdings", "Deshalb", "Außerdem", "Trotzdem"],
        correct: "Allerdings",
        explanation: "Ponownie 'allerdings' dla zastrzeżenia - oferta dobra ALE potrzeba czasu na decyzję. Nie natychmiastowa akceptacja. Ostrożność w zobowiązaniach. Forma pokazuje rozwagę - nie odrzucasz (oferta dobra) ale nie akceptujesz ślepo, 'allerdings' sygnalizuje potrzebę rozważenia."
      },
      {
        id: "adv_conn_6",
        question: "Es war schwer. _____ habe ich es geschafft endlich alleine!",
        translation: "(Było trudno. Niemniej jednak udało mi się w końcu samemu!)",
        options: ["Dennoch", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Dennoch",
        explanation: "Łącznik 'dennoch' (niemniej jednak/mimo wszystko) bardziej formalny niż 'trotzdem' - pokazuje sukces POMIMO trudności. Normalny szyk. Duma z samodzielności. Forma 'dennoch' często w pisanym języku - eleganckie wyrażenie wytrwałości, sukces brzmi bardziej imponująco gdy podkreślisz przeszkody."
      },
      {
        id: "adv_conn_7",
        question: "Das Hotel war teuer. _____ war der Service ausgezeichnet top!",
        translation: "(Hotel było drogie. Niemniej jednak obsługa była doskonała!)",
        options: ["Jedoch", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Jedoch",
        explanation: "Łącznik 'jedoch' (jednak) formalny kontrast - wysoka cena ALE doskonała usługa. Pozytywny aspekt równoważy negatyw. Normalny szyk. Wartość za pieniądze. Forma 'jedoch' w recenzjach lub opiniach - balansuje krytykę z pochwałą, sprawiedliwa ocena uwzględniająca różne aspekty."
      },
      {
        id: "adv_conn_8",
        question: "Ich bin beschäftigt. _____ kann ich dir kurz helfen schnell.",
        translation: "(Jestem zajęty. Niemniej jednak mogę ci krótko pomóc szybko)",
        options: ["Trotzdem", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Trotzdem",
        explanation: "Zajętość nie powstrzymuje pomocy - 'trotzdem kann ich' (mimo to mogę). Elastyczność mimo harmonogramu. Dobra wola. Forma pokazuje priorytetyzację - zajętość istnieje ALE pomaganie ważniejsze, 'trotzdem' wyraża że znajdujesz czas pomimo przeszkód."
      },
      {
        id: "adv_conn_9",
        question: "Das Restaurant ist voll. _____ ist das Essen sehr gut wert!",
        translation: "(Restauracja jest pełna. Za to jedzenie jest bardzo dobre warte!)",
        options: ["Dafür", "Deshalb", "Trotzdem", "Außerdem"],
        correct: "Dafür",
        explanation: "Łącznik 'dafür' (za to/w zamian) pokazuje KOMPENSACJĘ - tłok rekompensowany jakością. Równowaga minus/plus. Normalny szyk. Wartość mimo niedogodności. Forma 'dafür' wprowadza pozytyw równoważący negatyw - 'tak, ale...' w pozytywnym sensie, pokazuje że warto tolerować wadę dla zalet."
      },
      {
        id: "adv_conn_10",
        question: "Sie wollte kommen. _____ hatte sie keine Zeit leider heute.",
        translation: "(Chciała przyjść. Jednakże nie miała niestety dzisiaj czasu)",
        options: ["Allerdings", "Deshalb", "Außerdem", "Trotzdem"],
        correct: "Allerdings",
        explanation: "Intencja vs rzeczywistość - 'allerdings hatte' (jednakże miała). Chęć istniała ALE okoliczności uniemożliwiły. Wyjaśnienie nieobecności. Forma 'allerdings' łagodzi rozczarowanie - pokazuje że CHCIAŁA (doceniasz intencję) choć nie mogła (usprawiedliwiasz nieobecność)."
      },
      {
        id: "adv_conn_11",
        question: "Das Thema ist komplex. _____ ist es sehr interessant spannend!",
        translation: "(Temat jest złożony. Za to jest bardzo interesujący!)",
        options: ["Dafür", "Deshalb", "Trotzdem", "Außerdem"],
        correct: "Dafür",
        explanation: "Kompensacja - złożoność (wada) zrównoważona zainteresowaniem (zaleta) - 'dafür ist es' (za to jest). Pozytywna strona trudności. Forma 'dafür' pokazuje że trudność jest CENĄ wartą płacenia - ciekawość rekompensuje wysiłek potrzebny do zrozumienia."
      },
      {
        id: "adv_conn_12",
        question: "Ich verstehe dich. _____ kann ich nicht helfen in dieser Situation.",
        translation: "(Rozumiem cię. Jednakże nie mogę pomóc w tej sytuacji)",
        options: ["Allerdings", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Allerdings",
        explanation: "Empatia vs możliwość - 'allerdings kann ich nicht' (jednakże nie mogę). Zrozumienie nie oznacza możliwości pomocy. Trudna odmowa. Forma 'allerdings' łagodzi 'nie' - uznając uczucia (rozumiem) zanim podasz ograniczenie (ale nie mogę), empatyczne wyrażanie granic."
      },
      {
        id: "adv_conn_13",
        question: "Er ist jung. _____ hat er schon viel Erfahrung gesammelt.",
        translation: "(Jest młody. Niemniej jednak zebrał już dużo doświadczenia)",
        options: ["Dennoch", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Dennoch",
        explanation: "Wiek vs doświadczenie - 'dennoch hat er' (niemniej ma). Młodość zwykle = mało doświadczenia, ALE tu wyjątek. Imponujące osiągnięcie. Forma 'dennoch' podkreśla KONTRAST z oczekiwaniami - normalnie młodzi niedoświadczeni, ale ON mimo młodości doświadczony, to zasługuje na uznanie."
      },
      {
        id: "adv_conn_14",
        question: "Das Projekt ist riskant. _____ lohnt sich der Versuch auf Erfolg!",
        translation: "(Projekt jest ryzykowny. Niemniej jednak wart jest próby na sukces!)",
        options: ["Trotzdem", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Trotzdem",
        explanation: "Ryzyko nie powstrzymuje próby - 'trotzdem lohnt sich' (mimo to warto). Odwaga mimo niepewności. Potencjalna nagroda przewyższa ryzyko. Forma 'trotzdem' pokazuje optymizm - ŚWIADOMOŚĆ ryzyka ale decyzja działania, odważne podejście do niepewnych sytuacji."
      },
      {
        id: "adv_conn_15",
        question: "Ich hatte Bedenken. _____ habe ich zugestimmt dem Vorschlag.",
        translation: "(Miałem obawy. Niemniej jednak zgodziłem się z propozycją)",
        options: ["Dennoch", "Deshalb", "Außerdem", "Deswegen"],
        correct: "Dennoch",
        explanation: "Wątpliwości nie zablokowały decyzji - 'dennoch habe ich' (niemniej zgodziłem się). Celownik 'dem Vorschlag' po 'zustimmen'. Przeważyły argumenty za. Forma 'dennoch' pokazuje proces decyzyjny - obawy były REALNE ale po rozważeniu, korzyści przeważyły, świadoma decyzja mimo ryzyka."
      }
    ]
  }
};

export default part27Categories;
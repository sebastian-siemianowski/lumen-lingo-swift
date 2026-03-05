/**
 * POLISH → GERMAN GRAMMAR - PART 12
 * 4 kategorie, 15 pytań każda - Zaawansowana precyzja
 */

import { BookOpen, FileText, Navigation, Lightbulb } from "lucide-react";

export const part12Categories = {
  german_word_order_advanced: {
    name: "Szyk wyrazów - zaawansowany",
    description: "TeKaMoLo, pozycja czasownika, zdania złożone",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "word_adv_1",
        question: "Ich fahre _____ _____ _____ zur Arbeit jeden Tag.",
        translation: "(Jadę rano autobusem do pracy każdego dnia)",
        options: ["morgens mit dem Bus", "mit dem Bus morgens", "zur Arbeit morgens", "morgens zur Arbeit"],
        correct: "morgens mit dem Bus",
        explanation: "Zasada TeKaMoLo to złota reguła niemieckiego szyku! Temporal (kiedy) - Kausal (dlaczego) - Modal (jak) - Lokal (gdzie). Forma 'morgens' to czas, 'mit dem Bus' to sposób, 'zur Arbeit' to miejsce. Ta kolejność brzmi najbardziej naturalnie w niemieckim - najpierw informujesz KIEDY, potem JAK, na końcu GDZIE."
      },
      {
        id: "word_adv_2",
        question: "Sie kommt _____ _____ _____ nicht zur Party heute Abend.",
        translation: "(Nie przychodzi z powodu choroby niestety na imprezę dzisiaj wieczorem)",
        options: ["wegen Krankheit leider", "leider wegen Krankheit", "zur Party leider", "Krankheit wegen"],
        correct: "wegen Krankheit leider",
        explanation: "Kausal (przyczyna) idzie przed Modal (sposób)! Konstrukcja 'wegen Krankheit' (dlaczego) plus 'leider' (niestety - jak) to poprawna kolejność. Powód nieobecności ważniejszy niż emocja z tym związana. W niemieckim logika wymaga podania przyczyny przed opisem okoliczności lub sposobu."
      },
      {
        id: "word_adv_3",
        question: "Wir haben _____ _____ _____ einen Brief geschrieben gestern.",
        translation: "(Napisaliśmy wczoraj naszemu nauczycielowi list)",
        options: ["gestern unserem Lehrer", "unserem Lehrer gestern", "dem Lehrer gestern", "gestern dem Lehrer"],
        correct: "gestern unserem Lehrer",
        explanation: "W Perfect czas idzie PRZED obiektami! Forma 'gestern' (kiedy) umieszczasz zaraz po 'haben', potem celownik 'unserem Lehrer', na końcu biernik 'Brief'. Informacja czasowa ma priorytet w niemieckim - zawsze blisko początku zdania lub zaraz po czasowniku pomocniczym w Perfect."
      },
      {
        id: "word_adv_4",
        question: "Er gibt _____ _____ _____ das Buch zurück endlich.",
        translation: "(Oddaje w końcu swojemu przyjacielowi książkę z wdzięcznością)",
        options: ["seinem Freund dankbar", "dankbar seinem Freund", "das Buch seinem", "Freund dankbar"],
        correct: "seinem Freund dankbar",
        explanation: "Celownik (komu) przed sposobem działania! Konstrukcja 'seinem Freund' (komu daje) plus 'dankbar' (jak - z wdzięcznością). Niemiecki stawia odbiorców akcji wysoko w hierarchii - najpierw KOMU, potem JAK to się dzieje. Osoby ważniejsze niż okoliczności."
      },
      {
        id: "word_adv_5",
        question: "Sie ist _____ _____ _____ nach Hause gegangen müde.",
        translation: "(Poszła zmęczona o północy sama do domu)",
        options: ["um Mitternacht alleine", "alleine um Mitternacht", "nach Hause alleine", "Mitternacht um"],
        correct: "um Mitternacht alleine",
        explanation: "Czas przed sposobem! Konstrukcja 'um Mitternacht' (kiedy) plus 'alleine' (jak/z kim). Zasada TeKaMoLo - temporal przed modal. O północy to konkretny punkt czasowy, samotnie to okoliczność towarzysząca. Niemiecki konsekwentnie trzyma się tej hierarchii informacji."
      },
      {
        id: "word_adv_6",
        question: "Ich gebe _____ _____ _____ das Geschenk morgen persönlich.",
        translation: "(Dam jutro mojej siostrze osobiście prezent)",
        options: ["morgen meiner Schwester", "meiner Schwester morgen", "das Geschenk morgen", "morgen das Geschenk"],
        correct: "morgen meiner Schwester",
        explanation: "Wzór Temporal plus odbiorca w celowniku! Forma 'morgen' najpierw, potem 'meiner Schwester' (komu), na końcu 'das Geschenk' (co). Czas plus odbiorca plus przedmiot to naturalna kolejność. Niemiecki stawia informację czasową na początku, potem osoby, na końcu rzeczy."
      },
      {
        id: "word_adv_7",
        question: "Wir treffen uns _____ _____ _____ im Café zentral.",
        translation: "(Spotykamy się dzisiaj o 15 koniecznie w kawiarni w centrum)",
        options: ["heute um 15 Uhr", "um 15 Uhr heute", "im Café heute", "heute im Café"],
        correct: "heute um 15 Uhr",
        explanation: "Ogólny czas przed szczegółowym! Forma 'heute' (dzisiaj - ogólne) plus 'um 15 Uhr' (konkretna godzina). To logiczne zawężanie - od szerokiego do konkretnego. Niemiecki lubi precyzję więc zaczynasz szeroko i zawężasz do detali. Dzień najpierw, potem konkretna pora."
      },
      {
        id: "word_adv_8",
        question: "Er ist _____ _____ _____ zu spät gekommen leider.",
        translation: "(Przyszedł niestety z powodu korków za późno)",
        options: ["wegen des Staus", "des Staus wegen", "zu spät wegen", "wegen Staus"],
        correct: "wegen des Staus",
        explanation: "Przyimek 'wegen' z dopełniaczem dla przyczyny! Konstrukcja 'wegen des Staus' (z powodu korku) wyjaśnia opóźnienie. Przyczyna w niemieckim często idzie wcześnie w zdaniu - ważne jest DLACZEGO. Element kausalny ma wysoki priorytet w TeKaMoLo - wyjaśnianie przyczyn to fundament komunikacji."
      },
      {
        id: "word_adv_9",
        question: "Sie hat _____ _____ _____ die Prüfung bestanden gestern.",
        translation: "(Zdała wczoraj z wielkim wysiłkiem egzamin)",
        options: ["gestern mit großer Mühe", "mit großer Mühe gestern", "die Prüfung gestern", "gestern die Prüfung"],
        correct: "gestern mit großer Mühe",
        explanation: "Perfect: czas plus sposób plus obiekt plus imiesłów! Forma 'gestern' (temporal) przed 'mit Mühe' (modal) przed 'die Prüfung' (obiekt). TeKaMoLo zachowane nawet w Perfect tense. Hierarchia informacji nie zmienia się - mimo że czasownik na końcu, środek zdania ma swoją strukturę."
      },
      {
        id: "word_adv_10",
        question: "Ich warte _____ _____ _____ auf dich hier ungeduldig.",
        translation: "(Czekam od godziny niecierpliwie na ciebie tutaj)",
        options: ["seit einer Stunde", "einer Stunde seit", "ungeduldig seit", "hier seit"],
        correct: "seit einer Stunde",
        explanation: "Element czasu trwania 'seit'! Konstrukcja 'seit einer Stunde' (jak długo) to informacja czasowa - idzie wcześnie. Czas trwania to rodzaj informacji czasowej więc wysoki priorytet. Niemiecka precyzja wymaga określenia jak długo akcja trwa - 'seit' pokazuje ciągłość od punktu w przeszłości."
      },
      {
        id: "word_adv_11",
        question: "Wir gehen _____ _____ _____ spazieren zusammen oft.",
        translation: "(Chodzimy wieczorami w parku na spacer razem często)",
        options: ["abends im Park", "im Park abends", "zusammen abends", "oft abends"],
        correct: "abends im Park",
        explanation: "Standardowa para Temporal plus Lokal! Forma 'abends' (kiedy) plus 'im Park' (gdzie). TeKaMoLo - czas przed miejscem. To najpowszechniejsza kombinacja w codziennych zdaniach - informujesz kiedy i gdzie coś się dzieje w tej ustalonej kolejności."
      },
      {
        id: "word_adv_12",
        question: "Sie fährt _____ _____ _____ nach Berlin morgen.",
        translation: "(Jedzie jutro szybkim pociągiem do Berlina)",
        options: ["morgen mit dem Schnellzug", "mit dem Schnellzug morgen", "nach Berlin morgen", "morgen nach Berlin"],
        correct: "morgen mit dem Schnellzug",
        explanation: "Temporal plus Modal przed celem! Forma 'morgen' (kiedy) plus 'mit dem Schnellzug' (czym/jak) plus 'nach Berlin' (dokąd). Pełny TeKaMoLo w akcji. Logiczne flow - najpierw wiesz KIEDY, potem JAK podróżuje, na końcu DOKĄD. Informacje budują się od czasu do miejsca."
      },
      {
        id: "word_adv_13",
        question: "Er hat _____ _____ _____ geholfen mir gestern.",
        translation: "(Pomógł mi wczoraj z wielką ochotą)",
        options: ["gestern gerne", "gerne gestern", "mir gestern", "gestern mir"],
        correct: "gestern gerne",
        explanation: "Temporal plus Modal w Perfect! Forma 'gestern' (kiedy) plus 'gerne' (jak - chętnie) plus celownik 'mir'. Nawet w Perfect z czasownikiem na końcu, środek zachowuje TeKaMoLo. Ochota (modal) wyjaśnia JAK pomógł - z entuzjazmem czy niechętnie."
      },
      {
        id: "word_adv_14",
        question: "Du solltest _____ _____ _____ einkaufen gehen heute.",
        translation: "(Powinieneś dzisiaj z żoną na rynek iść na zakupy)",
        options: ["heute mit deiner Frau", "mit deiner Frau heute", "zum Markt heute", "heute zum Markt"],
        correct: "heute mit deiner Frau",
        explanation: "Czasownik modalny: czas plus towarzystwo przed cel! Forma 'heute' plus 'mit deiner Frau' (z kim) plus 'zum Markt'. Czasowniki modalne też stosują TeKaMoLo w części przed bezokolicznikiem. Informacja o towarzyszu (modal) między czasem a miejscem - z kim idziesz to część 'jak' robisz zakupy."
      },
      {
        id: "word_adv_15",
        question: "Ich möchte _____ _____ _____ sprechen mit dir bald.",
        translation: "(Chciałbym wkrótce w spokoju z tobą porozmawiać)",
        options: ["bald in Ruhe", "in Ruhe bald", "mit dir bald", "bald mit dir"],
        correct: "bald in Ruhe",
        explanation: "Temporal plus okoliczności modalne! Forma 'bald' (kiedy) plus 'in Ruhe' (jak - w jakich warunkach). Zasada TeKaMoLo nawet z modalnymi i bezokolicznikami. Spokój (in Ruhe) to element modalny - opisuje WARUNKI rozmowy nie tylko czas czy miejsce. Niemiecki jest bardzo precyzyjny w opisywaniu okoliczności."
      }
    ]
  },

  past_perfect_pluperfect: {
    name: "Czas zaprzeszły (Plusquamperfekt)",
    description: "Hatte gemacht, war gegangen - wcześniejsza przeszłość",
    icon: FileText,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "plup_1",
        question: "Als ich ankam, _____ sie schon _____ nach Hause.",
        translation: "(Gdy przybyłem, ona już poszła do domu)",
        options: ["war / gegangen", "ist / gegangen", "hatte / gegangen", "war / gehen"],
        correct: "war / gegangen",
        explanation: "Plusquamperfekt dla wcześniejszej akcji! Forma 'war gegangen' (była poszła) działo się PRZED 'ankam'. To o sekwencji - najpierw ona wyszła, potem ja przybyłem. Czasowniki ruchu (gehen) używają 'war' nie 'hatte' w Plusquamperfekt. Pokazuje że jej wyjście było wcześniej niż moje przybycie."
      },
      {
        id: "plup_2",
        question: "Nachdem er _____ _____, fühlte er sich besser sofort.",
        translation: "(Po tym jak zjadł, poczuł się lepiej natychmiast)",
        options: ["gegessen hatte", "gegessen war", "essen hatte", "hat gegessen"],
        correct: "gegessen hatte",
        explanation: "Spójnik 'nachdem' WYMAGA Plusquamperfekt! Forma 'gegessen hatte' pokazuje że jedzenie zakończone przed lepszym samopoczuciem. To o przyczynowo-skutkowej sekwencji. Spójnik 'nachdem' zawsze z Plusquamperfekt w zdaniu podrzędnym - gramatyczna reguła bez wyjątków. Jedzenie było przyczyną poprawy."
      },
      {
        id: "plup_3",
        question: "Sie _____ schon lange _____, bevor wir ankamen dort.",
        translation: "(Czekała już długo, zanim przybyliśmy tam)",
        options: ["hatte / gewartet", "war / gewartet", "hat / gewartet", "ist / gewartet"],
        correct: "hatte / gewartet",
        explanation: "Forma 'hatte gewartet' dla wcześniejszego stanu! Czekanie rozpoczęło się i trwało PRZED naszym przybyciem. To o cierpliwości - długie oczekiwanie. Czasownik 'warten' używa 'hatte' (nie 'war') w Plusquamperfekt - standardowe czasowniki akcji z 'haben'. Czas trwania w przeszłości przed innym przeszłym wydarzeniem."
      },
      {
        id: "plup_4",
        question: "Er _____ den Schlüssel _____, deshalb konnte er nicht rein.",
        translation: "(Zgubił klucz, dlatego nie mógł wejść)",
        options: ["hatte / verloren", "war / verloren", "hat / verloren", "ist / verloren"],
        correct: "hatte / verloren",
        explanation: "Plusquamperfekt wyjaśnia sytuację! Zgubienie (wcześniej) spowodowało niemożność wejścia (później). To przyczynowo-skutkowe. Czasownik 'verlieren' z 'hatte' tworzy past perfect - pokazuje że strata była przed próbą wejścia. Wcześniejsza akcja tłumaczy późniejszą niemożliwość."
      },
      {
        id: "plup_5",
        question: "Wir _____ schon _____, als tu endlich angerufen hast.",
        translation: "(Już zasnęliśmy, gdy w końcu zadzwoniłeś)",
        options: ["waren / eingeschlafen", "hatten / eingeschlafen", "sind / eingeschlafen", "haben / eingeschlafen"],
        correct: "waren / eingeschlafen",
        explanation: "Forma 'waren eingeschlafen' czasownik ruchu/zmiany! Czasownik 'einschlafen' (zasnąć) używa 'sein' więc Plusquamperfekt równa się 'waren'. To o czasie - spóźniony telefon. Czasowniki zmiany stanu (einschlafen, aufwachen) używają rodziny 'sein' - 'waren eingeschlafen' pokazuje zakończone przejście do snu przed telefonem."
      },
      {
        id: "plup_6",
        question: "Als ich aufwachte, _____ die Sonne schon _____.",
        translation: "(Gdy się obudziłem, słońce już wzeszło)",
        options: ["war / aufgegangen", "hatte / aufgegangen", "ist / aufgegangen", "hat / aufgegangen"],
        correct: "war / aufgegangen",
        explanation: "Forma 'war aufgegangen' zjawisko naturalne! Słońce wschodzi (ruch) więc rodzina 'sein'. To o naturze - porządek zdarzeń. Czasownik 'aufgehen' zmiana stanu używa 'war' w Plusquamperfekt. Wschód słońca zakończony przed przebudzeniem - Plusquamperfekt pokazuje wcześniejsze ukończenie."
      },
      {
        id: "plup_7",
        question: "Sie _____ mir schon alles _____, aber ich hatte vergessen.",
        translation: "(Już mi wszystko powiedziała, ale zapomniałem)",
        options: ["hatte / erzählt", "war / erzählt", "hat / erzählt", "ist / erzählt"],
        correct: "hatte / erzählt",
        explanation: "Forma 'hatte erzählt' komunikacja wcześniej! Opowiadanie (wcześniej) plus zapomnienie (później). To o luce pamięciowej. Czasowniki komunikacji używają 'haben' - 'hatte erzählt' pokazuje że informacja była przekazana przed zaistnieniem zapomnienia. Wcześniejsza komunikacja nie zadziałała."
      },
      {
        id: "plup_8",
        question: "Bevor ich _____ _____, hatte ich schon gegessen früher.",
        translation: "(Zanim wyszedłem, już wcześniej zjadłem)",
        options: ["wegging", "ausgegangen war", "gegangen bin", "ausging"],
        correct: "ausging",
        explanation: "Spójnik 'bevor' z czasem prostym przeszłym (Präteritum)! Zdanie główne ma Plusquamperfekt, zdanie z 'bevor' używa Präteritum. To relacja czasowa - jedzenie PRZED wyjściem. Konstrukcja 'bevor' plus Präteritum, główne plus Plusquamperfekt pokazuje co było najpierw. Odwrócona logika - mimo że 'bevor' oznacza 'zanim', używa prostszego czasu."
      },
      {
        id: "plup_9",
        question: "Er _____ das Buch schon _____, bevor der Film herauskam.",
        translation: "(Przeczytał już książkę zanim film wyszedł)",
        options: ["hatte / gelesen", "war / gelesen", "hat / gelesen", "ist / gelesen"],
        correct: "hatte / gelesen",
        explanation: "Forma 'hatte gelesen' wcześniejsze ukończenie! Czytanie zakończone PRZED premierą filmu. To o sekwencji - książka pierwsze źródło. Czasownik czytania używa 'haben' - 'hatte gelesen' Plusquamperfekt. Pokazuje że doświadczył książki przed filmową adaptacją - porównanie możliwe."
      },
      {
        id: "plup_10",
        question: "Nachdem wir _____ _____, gingen wir ins Kino zusammen.",
        translation: "(Po tym jak zjedliśmy, poszliśmy razem do kina)",
        options: ["gegessen hatten", "gegessen waren", "essen hatten", "gehabt essen"],
        correct: "gegessen hatten",
        explanation: "Spójnik 'nachdem' wymaga Plusquamperfekt! Forma 'gegessen hatten' pierwsza akcja, pójście druga. To wieczorna sekwencja - kolacja potem kino. Konstrukcja 'nachdem' plus Plusquamperfekt niezbędna dla pokazania zakończonej wcześniejszej akcji. Zdanie główne Präteritum, podrzędne Plusquamperfekt - standardowy wzór."
      },
      {
        id: "plup_11",
        question: "Sie _____ lange _____, deshalb war sie sehr müde.",
        translation: "(Pracowała długo, dlatego była bardzo zmęczona)",
        options: ["hatte / gearbeitet", "war / gearbeitet", "hat / gearbeitet", "ist / gearbeitet"],
        correct: "hatte / gearbeitet",
        explanation: "Forma 'hatte gearbeitet' wyjaśniająca zmęczenie! Wcześniejsza praca spowodowała zmęczenie - związek przyczynowy. To wyjaśnianie stanu. Czasownik pracy używa 'haben' - 'hatte gearbeitet' pokazuje przedłużoną wcześniejszą aktywność. Plusquamperfekt wyjaśnia DLACZEGO była zmęczona - wcześniejsza praca to przyczyna."
      },
      {
        id: "plup_12",
        question: "Als die Polizei kam, _____ der Dieb schon _____.",
        translation: "(Gdy policja przybyła, złodziej już uciekł)",
        options: ["war / geflohen", "hatte / geflohen", "ist / geflohen", "hat / geflohen"],
        correct: "war / geflohen",
        explanation: "Forma 'war geflohen' ucieczka przed przybyciem! Czasownik ruchu 'fliehen' używa 'sein'. To o czasie - przestępca uciekł. Czasownik 'fliehen' czasownik ruchu - Plusquamperfekt 'war geflohen'. Ucieczka zakończona przed przybyciem policji - za późno."
      },
      {
        id: "plup_13",
        question: "Ich _____ ihm schon mehrmals _____, aber er hörte nicht zu.",
        translation: "(Mówiłem mu już kilka razy, ale nie słuchał)",
        options: ["hatte / gesagt", "war / gesagt", "habe / gesagt", "bin / gesagt"],
        correct: "hatte / gesagt",
        explanation: "Forma 'hatte gesagt' powtarzana wcześniejsza komunikacja! Wielokrotne mówienie PRZED ignorowaniem. To frustracja - słowa zignorowane. Komunikacja używa 'haben' - 'hatte gesagt' dla przeszłych powtarzanych rad. Plusquamperfekt pokazuje że ostrzeżenia były wcześniej, ignorowanie trwało."
      },
      {
        id: "plup_14",
        question: "Nachdem es _____ _____ zu regnen, gingen wir raus.",
        translation: "(Po tym jak przestało padać, wyszliśmy)",
        options: ["aufgehört hatte", "aufgehört war", "aufhören hatte", "gehabt aufhören"],
        correct: "aufgehört hatte",
        explanation: "Spójnik 'nachdem aufgehört hatte' zmiana pogody! Przestanie padać (wcześniej) umożliwiło wyjście (później). To o warunkach - pogoda dyktująca aktywność. Czasownik 'aufhören' plus 'hatte' Plusquamperfekt po 'nachdem'. Zmiana pogody musiała nastąpić przed wyjściem - konieczny wcześniejszy warunek."
      },
      {
        id: "plup_15",
        question: "Sie _____ schon _____, bevor die Party richtig anfing überhaupt.",
        translation: "(Wyszła już zanim impreza naprawdę się w ogóle zaczęła)",
        options: ["war / gegangen", "hatte / gegangen", "ist / gegangen", "hat / gegangen"],
        correct: "war / gegangen",
        explanation: "Forma 'war gegangen' wczesne wyjście! Wyszła PRZED rozpoczęciem imprezy - przegapione wydarzenie. To społeczny czas - przedwczesne wyjście. Czasownik 'gehen' ruch - Plusquamperfekt 'war gegangen'. Wyjście było wcześniejsze niż początek imprezy - przegapiła całość."
      }
    ]
  },

  adjective_as_nouns: {
    name: "Przymiotniki jako rzeczowniki",
    description: "Der Deutsche, etwas Gutes, nichts Neues - substantywizacja",
    icon: Navigation,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "adj_noun_1",
        question: "_____ _____ aus Deutschland wohnt hier in der Nähe.",
        translation: "(Niemiec z Niemiec mieszka tutaj w pobliżu)",
        options: ["Der Deutsche", "Der Deutscher", "Ein Deutscher", "Deutsche"],
        correct: "Der Deutsche",
        explanation: "Przymiotnik 'deutsch' jako rzeczownik! Wielka litera plus deklinacja jak przymiotnik. To o narodowości - osoba niemiecka. Forma 'der Deutsche' (konkretny Niemiec) dostaje słabą końcówkę -e bo jest z określonym rodzajnikiem. Przymiotniki narodowości często stają się rzeczownikami."
      },
      {
        id: "adj_noun_2",
        question: "Ich habe etwas _____ für dich im Laden gekauft schön.",
        translation: "(Kupiłem coś ładnego dla ciebie w sklepie)",
        options: ["Schönes", "schönes", "Schön", "schöne"],
        correct: "Schönes",
        explanation: "Substantywizowany przymiotnik 'etwas Schönes'! Po 'etwas' przymiotnik wielką literą plus nijaka końcówka. To o prezentach - tajemniczy prezent. Konstrukcja 'etwas' plus przymiotnik (wielką literą) plus -es (nijaki). Nieokreślone zaimki (etwas, nichts, alles) plus kapitalizowany przymiotnik to standardowy wzór."
      },
      {
        id: "adj_noun_3",
        question: "_____ _____ hat mir heute sehr geholfen bei der Arbeit.",
        translation: "(Mój znajomy pomógł mi dzisiaj bardzo przy pracy)",
        options: ["Ein Bekannter", "Bekannter", "Der Bekannte", "Ein Bekannte"],
        correct: "Ein Bekannter",
        explanation: "Substantywizowany 'ein Bekannter'! Przymiotnik 'bekannt' jako rzeczownik męski. To o znajomym. Z nieokreślonym 'ein' męski mianownik dostaje końcówkę -er (silna). Forma 'ein Bekannter' równa się znajomy - przymiotnik w pełni funkcjonuje jako rzeczownik."
      },
      {
        id: "adj_noun_4",
        question: "Ich habe nichts _____ gehört über dieses Thema bisher.",
        translation: "(Nie słyszałem nic nowego o tym temacie dotąd)",
        options: ["Neues", "neues", "Neu", "neue"],
        correct: "Neues",
        explanation: "Konstrukcja 'nichts Neues' żadnych nowości! Po 'nichts' przymiotnik wielką plus nijaka końcówka -es. To o braku informacji - brak aktualizacji. Forma 'nichts' plus kapitalizowany przymiotnik plus -es standardowa kombinacja. Brak nowych informacji wyrażony przez substantywizowany przymiotnik."
      },
      {
        id: "adj_noun_5",
        question: "_____ _____ steht an der Bushaltestelle und wartet geduldig.",
        translation: "(Jakaś młoda kobieta stoi na przystanku i czeka cierpliwie)",
        options: ["Eine Junge", "Die Junge", "Ein Junge", "Eine Junge"],
        correct: "Eine Junge",
        explanation: "BŁĄD w opcjach - powinno być o kobiecie! Poprawne: 'eine junge Frau' lub substantywizowana kobieca byłaby specjalna. To pytanie podchwytliwe - 'Junge' jako rzeczownik oznacza chłopiec (męski). Dla kobiety: 'eine junge Frau' (fraza) lub 'eine Jugendliche' (substantywizowany inny przymiotnik)."
      },
      {
        id: "adj_noun_6",
        question: "_____ _____ sprechen oft mehrere Sprachen fließend zusammen.",
        translation: "(Młodzi ludzie często mówią kilka języków płynnie razem)",
        options: ["Junge Leute", "Die Jungen", "Jungen", "Die Junge"],
        correct: "Junge Leute",
        explanation: "Forma frazy 'junge Leute'! Przymiotnik 'jung' jako normalny przymiotnik plus 'Leute' (ludzie). To o młodzieży - umiejętności językowe. Choć możesz substantywizować 'jung', 'junge Leute' bardziej naturalne dla 'młodzi ludzie'. Nie wszystko musi być substantywizowane - czasem fraza lepsza."
      },
      {
        id: "adj_noun_7",
        question: "Der _____ hat mir den Weg zum Bahnhof gezeigt freundlich.",
        translation: "(Nieznajomy pokazał mi drogę do dworca przyjaźnie)",
        options: ["Fremde", "Fremder", "Fremd", "Fremden"],
        correct: "Fremde",
        explanation: "Substantywizowany nieznajomy 'der Fremde'! Przymiotnik 'fremd' (obcy/cudzy) jako rzeczownik. To o pomocy - miły nieznajomy. Męski mianownik z określonym 'der' plus słaba końcówka -e. Forma 'der Fremde' równa się nieznajomy - przymiotnik znaczący obcy/cudzy staje się rzeczownikiem osobowym."
      },
      {
        id: "adj_noun_8",
        question: "Ich möchte etwas _____ trinken - ich habe Durst sehr!",
        translation: "(Chciałbym wypić coś zimnego - mam bardzo pragnienie!)",
        options: ["Kaltes", "kaltes", "Kalt", "kalte"],
        correct: "Kaltes",
        explanation: "Substantywizowane pragnienie 'etwas Kaltes'! Coś zimnego (napój domyślny). To o pragnieniu - chęć zimnego napoju. Konstrukcja 'etwas' plus kapitalizowany przymiotnik plus -es wzór. Przymiotnik staje się rzeczownikiem reprezentującym całą kategorię zimnych napojów."
      },
      {
        id: "adj_noun_9",
        question: "Alles _____ muss ich zweimal erklären ihm leider immer.",
        translation: "(Wszystko nowe muszę mu tłumaczyć niestety zawsze dwa razy)",
        options: ["Neue", "neue", "Neues", "Neu"],
        correct: "Neue",
        explanation: "Konstrukcja 'alles Neue' wszystko nowe! Po 'alles' przymiotnik wielką plus słaba końcówka -e. To o trudnościach w uczeniu - konieczność powtarzania. Forma 'alles' plus przymiotnik (kapitalizowany) plus -e kompleksowa kategoria. Wszystko co jest nowe wymaga podwójnego tłumaczenia."
      },
      {
        id: "adj_noun_10",
        question: "_____ _____ hat das Auto gestohlen in der Nacht.",
        translation: "(Jakiś nieznany ukradł samochód w nocy)",
        options: ["Ein Unbekannter", "Der Unbekannte", "Unbekannter", "Ein Unbekannte"],
        correct: "Ein Unbekannter",
        explanation: "Substantywizowana nieznana osoba 'ein Unbekannter'! Przymiotnik 'unbekannt' substantywizowany. To historia kryminalna - niezidentyfikowany złodziej. Nieokreślony 'ein' plus męski mianownik silna końcówka -er. Forma 'ein Unbekannter' równa się nieznana osoba - przymiotnik jako rzeczownik dla anonimowości."
      },
      {
        id: "adj_noun_11",
        question: "Das _____ an dieser Geschichte ist, dass sie wahr ist!",
        translation: "(Najlepsze w tej historii jest to, że jest prawdziwa!)",
        options: ["Beste", "beste", "Best", "Besten"],
        correct: "Beste",
        explanation: "Stopień najwyższy jako rzeczownik 'das Beste'! Najlepsze (rzecz) - abstrakcyjny koncept. To o puentcie - najważniejsze w historii. Nijaki 'das' plus przymiotnik stopnia najwyższego kapitalizowany plus końcówka -e. Forma 'das Beste' równa się najlepsza rzecz - przekształcanie jakości w rzecz."
      },
      {
        id: "adj_noun_12",
        question: "Ich kenne _____ _____, der dir helfen kann mit diesem Problem.",
        translation: "(Znam kogoś, kto może ci pomóc z tym problemem)",
        options: ["jemanden", "Jemanden", "ein Jemand", "der Jemand"],
        correct: "jemanden",
        explanation: "Zaimek 'jemanden' już jest zaimkiem! NIE przymiotnik - małe litery jako standardowy zaimek. To o pomocy - identyfikacja pomocnika. Słowo 'jemand' (ktoś) to zaimek nie przymiotnik - 'jemanden' forma biernika. Nie wszystko kapitalizowane - zaimki pozostają małymi literami."
      },
      {
        id: "adj_noun_13",
        question: "Die _____ in diesem Land leben sehr gut und zufrieden.",
        translation: "(Bogaci w tym kraju żyją bardzo dobrze i zadowoleni)",
        options: ["Reichen", "reichen", "Reich", "Reiche"],
        correct: "Reichen",
        explanation: "Substantywizowani bogaci ludzie 'die Reichen' mnoga! Przymiotnik 'reich' (bogaty) jako rzeczownik mnogi. To o społeczeństwie - opis klasy. Mnoga plus określony 'die' plus słaba końcówka -en. Forma 'die Reichen' równa się bogaci (jako grupa) - przymiotnik reprezentuje całą klasę ludzi."
      },
      {
        id: "adj_noun_14",
        question: "Er hat etwas _____ gesagt, aber ich habe nicht zugehört.",
        translation: "(Powiedział coś ważnego, ale nie słuchałem)",
        options: ["Wichtiges", "wichtiges", "Wichtig", "wichtige"],
        correct: "Wichtiges",
        explanation: "Konstrukcja 'etwas Wichtiges' coś ważnego! Substantywizowana ważność. To żal - przegapiona informacja. Forma 'etwas' plus kapitalizowany przymiotnik plus -es (nijaki). Coś ważnego jako koncept - przymiotnik staje się rzeczownikiem reprezentującym ważną rzecz."
      },
      {
        id: "adj_noun_15",
        question: "Ich wünsche dir alles _____ zum Geburtstag herzlich!",
        translation: "(Życzę ci wszystkiego najlepszego na urodziny serdecznie!)",
        options: ["Gute", "gute", "Gut", "Guten"],
        correct: "Gute",
        explanation: "Idiom życzeń 'alles Gute'! Wszystkie dobre rzeczy - życzenia urodzinowe. To świętowanie - składanie życzeń. Konstrukcja 'alles' plus przymiotnik (kapitalizowany) plus -e standardowe błogosławieństwo. Forma 'alles Gute' utrwalone wyrażenie dla życzeń - wszystko dobre."
      }
    ]
  },

  comparative_structures_advanced: {
    name: "Struktury porównawcze zaawansowane",
    description: "Je...desto, umso, als ob, wie wenn - porównania",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "comp_str_1",
        question: "_____ mehr du übst, _____ besser wirst du werden garantiert!",
        translation: "(Im więcej ćwiczysz, tym lepszy będziesz na pewno!)",
        options: ["Je / desto", "Desto / je", "Wenn / dann", "Als / so"],
        correct: "Je / desto",
        explanation: "Relacja proporcjonalna 'je...desto'! Więcej X równa się więcej Y. To motywacja - zachęcanie do praktyki. Forma 'je' plus stopień wyższy rozpoczyna, 'desto' plus stopień wyższy w zdaniu głównym. Pokazuje bezpośrednią korelację - zwiększenie wysiłku prowadzi do poprawy. Klasyczna struktura motywacyjna."
      },
      {
        id: "comp_str_2",
        question: "Er tut so, _____ _____ er nichts davon wüsste über Problem.",
        translation: "(Udaje, jakby nic o tym nie wiedział o problemie)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Wyrażenie udawania 'als ob'! Jakby dla udawania czegoś. To o udawaniu - udawana niewiedza. Konstrukcja 'als ob' plus Konjunktiv II pokazuje nierzeczywistą/udawaną sytuację - 'wüsste' zamiast 'weiß'. Tworzy hipotetyczny scenariusz który on prezentuje."
      },
      {
        id: "comp_str_3",
        question: "_____ älter man wird, _____ weiser sollte man werden hoffentlich.",
        translation: "(Im starszy się jest, tym mądrzejszy powinno się być miejmy nadzieję!)",
        options: ["Je / desto", "Desto / je", "Umso / je", "Je / umso"],
        correct: "Je / desto",
        explanation: "Korelacja wiek-mądrość 'je...desto'! Starzenie się powinno oznaczać mądrzenie. To życiowa mądrość - idealny rozwój. Konstrukcja 'je älter' (im starszy) 'desto weiser' (tym mądrzejszy) - wyidealizowany proporcjonalny wzrost. Wyrażanie oczekiwanego rozwoju z wiekiem."
      },
      {
        id: "comp_str_4",
        question: "Sie sieht aus, _____ _____ sie krank wäre sehr erschöpft.",
        translation: "(Wygląda jakby była chora bardzo wyczerpana)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Wygląd sugerujący 'als ob krank wäre'! Wygląda JAKBY chora ale może nie. To obserwacja - niepokojący wygląd. Konstrukcja 'als ob' plus Konjunktiv II ('wäre') dla spekulatywnego/pozornego stanu. Nie pewność tylko wrażenie oparte na wyglądzie."
      },
      {
        id: "comp_str_5",
        question: "_____ schneller du läufst, _____ eher kommst du an!",
        translation: "(Im szybciej biegniesz, tym wcześniej dojdziesz!)",
        options: ["Je / desto", "Desto / je", "Wenn / dann", "Als / so"],
        correct: "Je / desto",
        explanation: "Logika szybkość-przybycie 'je...desto'! Szybsze bieganie równa się wcześniejsze przybycie. To o fizyce - oczywista przyczynowość. Bezpośrednia proporcja: 'je schneller' zwiększa 'desto eher'. Prosta relacja fizyczna wyrażona przez strukturę je-desto."
      },
      {
        id: "comp_str_6",
        question: "Er spricht, _____ _____ er alles wüsste über das Thema.",
        translation: "(Mówi jakby wszystko wiedział o temacie)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Udawanie eksperta 'als ob wüsste'! Zachowuje się jak ekspert może nie być. To o arogancji - fałszywa ekspertyza. Konstrukcja 'als ob' plus Konjunktiv II sugeruje że jego wiedza może być powierzchowna - mówi z pewnością może nieuzasadnioną. Wątpienie w deklarowaną ekspertyzę."
      },
      {
        id: "comp_str_7",
        question: "_____ weniger du isst, _____ hungriger fühlst du się później!",
        translation: "(Im mniej jesz, tym bardziej głodny się czujesz później!)",
        options: ["Je / desto", "Desto / je", "Umso / je", "Je / umso"],
        correct: "Je / desto",
        explanation: "Kontraintuicyjny rezultat 'je...desto'! Mniej jedzenia równa się więcej głodu (oczywiste). To o fizjologii - mechanizm głodu. Konstrukcja 'je weniger' (im mniej) tworzy 'desto hungriger' (tym bardziej głodny). Naturalna reakcja ciała wyrażona."
      },
      {
        id: "comp_str_8",
        question: "Sie benimmt sich, _____ _____ nichts passiert wäre gestern.",
        translation: "(Zachowuje się jakby nic się nie stało wczoraj)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Zaprzeczanie rzeczywistości 'als ob nichts passiert wäre'! Zachowuje się jakby wczoraj nie miało miejsca. To o zaprzeczaniu - ignorowanie wydarzeń. Konstrukcja 'als ob' plus Plusquamperfekt Konjunktiv ('wäre passiert') dla przeszłości nierzeczywistej - udawanie że przeszłość była inna niż była."
      },
      {
        id: "comp_str_9",
        question: "_____ mehr ich lerne, _____ mehr möchte ich wissen!",
        translation: "(Im więcej się uczę, tym więcej chcę wiedzieć!)",
        options: ["Je / desto", "Desto / je", "Umso / je", "Je / umso"],
        correct: "Je / desto",
        explanation: "Intelektualny wzrost 'je...desto'! Uczenie się tworzy głód dla więcej - cnotliwy cykl. To o ciekawości - rozszerzający się umysł. Konstrukcja 'je mehr' uczenia zwiększa 'desto mehr' pragnienie. Wiedza rodzi ciekawość - piękna edukacyjna zasada."
      },
      {
        id: "comp_str_10",
        question: "Er redet, _____ _____ er der Chef wäre hier im Büro.",
        translation: "(Gada jakby był szefem tutaj w biurze)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Udawanie autorytetu 'als ob Chef wäre'! Zachowuje się jak szef ale nie jest. To irytacja w miejscu pracy - przekraczanie uprawnień. Konstrukcja 'als ob' plus Konjunktiv II tworzy hipotetyczną władzę - 'wäre' pokazuje że NIE jest faktycznie szefem. Krytyka zarozumiałego zachowania."
      },
      {
        id: "comp_str_11",
        question: "_____ kälter es wird, _____ weniger gehe ich spazieren draußen.",
        translation: "(Im zimniej się robi, tym mniej chodzę na spacery na zewnątrz)",
        options: ["Je / desto", "Desto / je", "Umso / je", "Je / umso"],
        correct: "Je / desto",
        explanation: "Zachowanie pogodowe 'je...desto'! Zimniej równa się mniej spacerów - naturalna odpowiedź. To o adaptacji - sezonowe zmiany. Konstrukcja 'je kälter' (im zimniej) redukuje 'desto weniger' (tym mniej) spacerowania. Temperatura wpływająca na poziom aktywności."
      },
      {
        id: "comp_str_12",
        question: "Sie tut, _____ _____ sie mich nicht kennen würde überhaupt.",
        translation: "(Udaje jakby mnie w ogóle nie znała)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Celowe ignorowanie 'als ob nicht kennen würde'! Udawanie nie-znajomości. To społeczna zniewaga - intencjonalne nie-rozpoznawanie. Konstrukcja 'als ob' plus Konjunktiv II ('würde kennen') tworzy udawaną rzeczywistość - ona TAK zna ale zachowuje się inaczej. Bolesne udawanie."
      },
      {
        id: "comp_str_13",
        question: "_____ öfter du das wiederholst, _____ besser merkst du es dir!",
        translation: "(Im częściej powtarzasz, tym lepiej to sobie zapamiętasz!)",
        options: ["Je / desto", "Desto / je", "Umso / je", "Je / umso"],
        correct: "Je / desto",
        explanation: "Zasada uczenia się 'je...desto'! Powtarzanie wspomaga pamięć - edukacyjna prawda. To rada do nauki - rozłożone powtarzanie. Konstrukcja 'je öfter' (im częściej) wzmacnia 'desto besser' (tym lepiej) zapamiętywanie. Podstawowa metodologia uczenia wyrażona."
      },
      {
        id: "comp_str_14",
        question: "Es sieht so aus, _____ _____ es bald regnen wird stark.",
        translation: "(Wygląda na to jakby miało zaraz mocno padać)",
        options: ["als ob", "wie wenn", "als wenn", "ob als"],
        correct: "als ob",
        explanation: "Prognoza pogodowa 'als ob regnen wird'! Wygląd sugerujący nadchodzący deszcz. To obserwacja - czytanie nieba. Konstrukcja 'als ob' plus przyszłość pokazuje antycypowane zdarzenie oparte na znakach. Chmury/atmosfera sugerująca rychły deszcz - obserwacja predykcyjna."
      },
      {
        id: "comp_str_15",
        question: "_____ länger ich warte, _____ ungeduldiger werde ich leider!",
        translation: "(Im dłużej czekam, tym bardziej niecierpliwy się staję niestety!)",
        options: ["Je / desto", "Desto / je", "Umso / je", "Je / umso"],
        correct: "Je / desto",
        explanation: "Erozja cierpliwości 'je...desto'! Dłuższe czekanie równa się rosnąca niecierpliwość - ludzka natura. To o frustracji - czas testujący cierpliwość. Konstrukcja 'je länger' (im dłużej) powoduje 'desto ungeduldiger' (tym bardziej niecierpliwy). Naturalna emocjonalna odpowiedź na przedłużone czekanie."
      }
    ]
  },

  verb_noun_combinations_fixed: {
    name: "Stałe połączenia czasownik-rzeczownik",
    description: "Angst haben, Hunger haben, zur Verfügung stehen",
    icon: BookOpen,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "v_n_fix_1",
        question: "Ich habe großen _____ - ich habe seit heute Morgen nichts gegessen!",
        translation: "(Mam wielki głód - nie jadłem od dzisiejszego ranka nic!)",
        options: ["Hunger", "hunger", "hungrig", "Hungrig"],
        correct: "Hunger",
        explanation: "Utrwalone wyrażenie 'Hunger haben'! Rzeczownik nie przymiotnik - 'Hunger' wielką literą. To o głodzie - fizyczna potrzeba. Niemiecki używa 'haben' plus rzeczownik dla wielu stanów fizycznych/emocjonalnych - 'Hunger haben' (nie 'hungrig sein'). Preferowany idiom dla głodu."
      },
      {
        id: "v_n_fix_2",
        question: "Hast du _____ vor der Prüfung morgen? Ich bin sehr nervös!",
        translation: "(Boisz się egzaminu jutro? Jestem bardzo zdenerwowany!)",
        options: ["Angst", "angst", "ängstlich", "Ängstlich"],
        correct: "Angst",
        explanation: "Wyrażenie strachu 'Angst haben'! Forma rzeczownikowa standardowa - 'Angst' kapitalizowana. To o lęku - niepokój egzaminacyjny. Utrwalony idiom 'Angst haben vor' plus celownik dla strachu. Nie 'ängstlich sein' - 'Angst haben' bardziej powszechne i idiomatyczne."
      },
      {
        id: "v_n_fix_3",
        question: "Ich habe keine _____ mehr auf diese langweilige Arbeit!",
        translation: "(Nie mam już ochoty na tę nudną pracę!)",
        options: ["Lust", "lust", "lustig", "Lustig"],
        correct: "Lust",
        explanation: "Wyrażenie pragnienia 'Lust haben auf'! Rzeczownik 'Lust' (ochota/pragnienie) nie przymiotnik. To o motywacji - brak entuzjazmu. Standardowa formuła 'Lust haben auf' plus biernik dla chcenia/odczuwania. Forma 'keine Lust' równa się nie mam ochoty - powszechna skarga."
      },
      {
        id: "v_n_fix_4",
        question: "Er hat immer _____ - er ist nie zufrieden z czymś!",
        translation: "(Zawsze ma rację - nigdy nie jest zadowolony z czegoś!)",
        options: ["Recht", "recht", "richtig", "Richtig"],
        correct: "Recht",
        explanation: "Twierdzenie poprawności 'Recht haben'! Mieć rację - forma rzeczownikowa. To o upartości - zawsze twierdzenie poprawności. Idiom 'Recht haben' (wielką!) dla 'mieć rację'. Nie 'richtig haben' - 'Recht' konkretny rzeczownik używany. Denerwująca cecha pewności siebie."
      },
      {
        id: "v_n_fix_5",
        question: "Ich habe großen _____ - kannst du mir etwas zu trinken bringen?",
        translation: "(Mam wielkie pragnienie - możesz mi przynieść coś do picia?)",
        options: ["Durst", "durst", "durstig", "Durstig"],
        correct: "Durst",
        explanation: "Wyrażenie pragnienia 'Durst haben'! Rzeczownik nie przymiotnik - 'Durst' kapitalizowany. To o pragnieniu - prośba o napój. Forma 'Durst haben' równoległa do 'Hunger haben' - stan fizyczny jako rzeczownik plus 'haben'. Standardowy sposób wyrażania pragnienia."
      },
      {
        id: "v_n_fix_6",
        question: "Diese Information steht dir jederzeit zur _____ hier online.",
        translation: "(Ta informacja jest dla ciebie zawsze dostępna tutaj online)",
        options: ["Verfügung", "verfügung", "verfügbar", "Verfügbar"],
        correct: "Verfügung",
        explanation: "Idiom dostępności 'zur Verfügung stehen'! Bycie dostępnym - utrwalona fraza. To o dostępności - dostęp do zasobów. Standardowe wyrażenie 'zur Verfügung stehen' dla dostępności. Rzeczownik 'Verfügung' (nie przymiotnik 'verfügbar') w tym idiomie. Formalny sposób mówienia 'dostępne'."
      },
      {
        id: "v_n_fix_7",
        question: "Wir müssen eine _____ treffen bis morgen früh wichtig.",
        translation: "(Musimy podjąć decyzję do jutra rano ważną)",
        options: ["Entscheidung", "entscheidung", "entscheiden", "Entscheiden"],
        correct: "Entscheidung",
        explanation: "Podejmowanie decyzji 'eine Entscheidung treffen'! Rzeczownik 'Entscheidung' plus czasownik 'treffen'. To o wyborze - presja terminu. Niemiecki używa konkretnych czasowników z rzeczownikiem decyzji - 'treffen' (nie 'machen'). Utrwalona kolokacja 'Entscheidung treffen' dla podejmowania decyzji."
      },
      {
        id: "v_n_fix_8",
        question: "Er nimmt immer _____ auf alles, was ich sage kritycznie!",
        translation: "(Zawsze bierze pod uwagę krytycznie wszystko co mówię!)",
        options: ["Rücksicht", "rücksicht", "rücksichtsvoll", "Rücksichtsvoll"],
        correct: "Rücksicht",
        explanation: "Idiom rozważania 'Rücksicht nehmen auf'! Branie pod uwagę - rozważność. To o szacunku - bycie rozważnym. Utrwalone wyrażenie 'Rücksicht nehmen auf' plus biernik. Rzeczownik 'Rücksicht' (rozważanie) plus 'nehmen' (brać) standardowa kombinacja."
      },
      {
        id: "v_n_fix_9",
        question: "Ich nehme _____ an dem Kurs nächsten Monat definitiv teil.",
        translation: "(Biorę udział w kursie w przyszłym miesiącu zdecydowanie)",
        options: ["teil", "Teil", "teilnehmen", "Teilnahme"],
        correct: "teil",
        explanation: "Czasownik rozdzielny 'teilnehmen'! Partykuła 'teil' małą literą jako część czasownika nie rzeczownik. To rejestracja - zapis na kurs. Konstrukcja 'an etwas teilnehmen' rozdzielna - 'nehme...teil'. Partykuła małą literą gdy część czasownika - tylko jako samodzielny rzeczownik 'Teil' wielką."
      },
      {
        id: "v_n_fix_10",
        question: "Sie hat keine _____ mehr, weiterzumachen mit diesem Projekt schwer.",
        translation: "(Nie ma już siły żeby kontynuować z tym trudnym projektem)",
        options: ["Kraft", "kraft", "kräftig", "Kräftig"],
        correct: "Kraft",
        explanation: "Energia/siła 'Kraft haben'! Rzeczownik 'Kraft' dla fizycznej/mentalnej energii. To wyczerpanie - depletion. Idiom 'Kraft haben' dla posiadania siły/energii. Forma 'keine Kraft mehr' równa się brak energii - powszechne wyrażenie wypalenia."
      },
      {
        id: "v_n_fix_11",
        question: "Ich mache mir _____ um deine Gesundheit - du siehst blass aus!",
        translation: "(Martwię się o twoje zdrowie - wyglądasz blado!)",
        options: ["Sorgen", "sorgen", "Sorge", "sorgend"],
        correct: "Sorgen",
        explanation: "Idiom zmartwienia 'sich Sorgen machen um'! Mnoga 'Sorgen' standardowo. To troska - niepokój o zdrowie. Utrwalone wyrażenie 'sich Sorgen machen um' plus biernik - 'Sorgen' zawsze mnoga w tym idiomie. Wyrażanie niepokoju o kogoś."
      },
      {
        id: "v_n_fix_12",
        question: "Das spielt überhaupt keine _____ für mich persönlich!",
        translation: "(To w ogóle nie gra roli dla mnie osobiście!)",
        options: ["Rolle", "rolle", "wichtig", "Wichtigkeit"],
        correct: "Rolle",
        explanation: "Idiom ważności 'eine Rolle spielen'! Teatralna metafora - granie roli. To bagatelizowanie - deklarowanie nieistotności. Standardowa formuła 'keine Rolle spielen' dla nieznaczności. Rzeczownik 'Rolle' (rola) plus 'spielen' tworzy znaczenie ważności."
      },
      {
        id: "v_n_fix_13",
        question: "Wir führen ein langes _____ über die Zukunft unserer Firma.",
        translation: "(Prowadzimy długą rozmowę o przyszłości naszej firmy)",
        options: ["Gespräch", "gespräch", "sprechen", "Sprechen"],
        correct: "Gespräch",
        explanation: "Idiom rozmowy 'ein Gespräch führen'! Rzeczownik 'Gespräch' plus czasownik 'führen'. To spotkanie biznesowe - poważna dyskusja. Formalne wyrażenie 'ein Gespräch führen' dla prowadzenia rozmowy. Forma 'führen' (prowadzić) plus 'Gespräch' bardziej formalna niż 'sprechen'."
      },
      {
        id: "v_n_fix_14",
        question: "Sie stellt viele _____ während der Vorlesung an der Uni.",
        translation: "(Zadaje wiele pytań podczas wykładu na uniwersytecie)",
        options: ["Fragen", "fragen", "Frage", "fragend"],
        correct: "Fragen",
        explanation: "Zadawanie pytań 'Fragen stellen'! Rzeczownik 'Frage' plus czasownik 'stellen' (umieszczać/zadawać). To akademickie zaangażowanie - aktywne uczenie się. Idiomatyczne 'Fragen stellen' dla zadawania pytań - 'stellen' (nie 'machen'). Kontekst edukacyjny preferuje tę kombinację."
      },
      {
        id: "v_n_fix_15",
        question: "Ich habe großes _____ an Ihrer Arbeit - sie ist ausgezeichnet!",
        translation: "(Mam wielkie zainteresowanie twoją pracą - jest doskonała!)",
        options: ["Interesse", "interesse", "interessiert", "Interessiert"],
        correct: "Interesse",
        explanation: "Wyrażenie zainteresowania 'Interesse haben an'! Rzeczownik 'Interesse' plus 'haben'. To uznanie - wyrażanie fascynacji. Utrwalone wyrażenie 'Interesse haben an' plus celownik. Rzeczownik 'Interesse' (zainteresowanie) pokazuje intelektualną/profesjonalną ciekawość."
      }
    ]
  }
};

export default part12Categories;
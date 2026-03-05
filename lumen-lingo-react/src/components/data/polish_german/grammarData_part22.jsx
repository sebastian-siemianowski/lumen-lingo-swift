/**
 * POLISH → GERMAN GRAMMAR - PART 22
 * 4 kategorie, 15 pytań każda
 */

import { Sparkles, MapPin, BookMarked, Lightbulb } from "lucide-react";

export const part22Categories = {
  noun_compounds_advanced: {
    name: "Rzeczowniki złożone - zaawansowane",
    description: "Mehrfachkomposita - wieloczłonowe złożenia",
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "noun_comp_adv_1",
        question: "Der _____ fährt jeden Morgen pünktlich um 7 Uhr ab.",
        translation: "(Pociąg podmiejski odjeżdża każdego ranka punktualnie o 7)",
        options: ["S-Bahnzug", "Zug-S-Bahn", "Bahnzug-S", "S-Zug-Bahn"],
        correct: "S-Bahnzug",
        explanation: "Złożenie wieloczłonowe 'S-Bahn-zug' łączy skrót 'S' (Schnellbahn - szybka kolej) z 'Bahn' i 'Zug'. Ostatni element 'Zug' określa rodzaj - męski. Niemiecki tworzy bardzo długie słowa przez łączenie - każdy element dodaje znaczenie. Transport miejski używa takich precyzyjnych nazw dla różnych typów pociągów."
      },
      {
        id: "noun_comp_adv_2",
        question: "Sie arbeitet in einer _____ im Stadtzentrum modern.",
        translation: "(Pracuje w firmie doradztwa biznesowego w centrum miasta)",
        options: ["Unternehmensberatungsfirma", "Firma-Unternehmensberatung", "Beratungsfirma", "Unternehmenfirma"],
        correct: "Unternehmensberatungsfirma",
        explanation: "Potężne złożenie: 'Unternehmen' (przedsiębiorstwo) + 's' (element łączący) + 'Beratung' (doradztwo) + 's' + 'Firma' (firma). Ostatni element zawsze określa rodzaj - tutaj żeński. To pokazuje jak niemiecki może tworzyć bardzo specyficzne terminy - jedno słowo opisuje dokładnie typ firmy."
      },
      {
        id: "noun_comp_adv_3",
        question: "Wir brauchen dringend einen neuen _____ für die Küche.",
        translation: "(Pilnie potrzebujemy nowej zmywarki do kuchni)",
        options: ["Geschirrspüler", "Spülergeschirr", "Geschirr-Spüler", "Spül-Geschirr"],
        correct: "Geschirrspüler",
        explanation: "Złożenie 'Geschirr' (naczynia) + 'Spüler' (ten który myje/zmywarka) tworzy 'Geschirrspüler'. Ostatni element 'Spüler' (męski) określa rodzaj. To logiczna konstrukcja - naczynia plus myjący równa się zmywarka. Niemieckie złożenia często są bardzo opisowe - nazwa mówi dokładnie co przedmiot robi."
      },
      {
        id: "noun_comp_adv_4",
        question: "Die _____ findet nächste Woche im großen Saal statt.",
        translation: "(Konferencja prasowa odbywa się w przyszłym tygodniu w dużej sali)",
        options: ["Pressekonferenz", "Konferenzpresse", "Presse-Konferenz", "Konferenz-Presse"],
        correct: "Pressekonferenz",
        explanation: "Złożenie 'Presse' (prasa) + 'Konferenz' (konferencja) równa się 'Pressekonferenz'. Żeński rodzaj od 'Konferenz'. Element łączący czasem dodawany, czasem nie - zależy od fonetyki. Konferencje prasowe to sposób oficjalnej komunikacji - media otrzymują informacje bezpośrednio od źródła."
      },
      {
        id: "noun_comp_adv_5",
        question: "Er hat seinen _____ auf dem Tisch liegen lassen vergessen.",
        translation: "(Zostawił swój portfel na stole zapominając)",
        options: ["Geldbeutel", "Beutelgeld", "Geld-Beutel", "Beute-Geld"],
        correct: "Geldbeutel",
        explanation: "Złożenie 'Geld' (pieniądze) + 'Beutel' (sakiewka/worek) tworzy 'Geldbeutel' (portfel). Męski od 'Beutel'. To dawna nazwa - dosłownie 'worek na pieniądze'. Zapomnienie portfela to powszechny błąd - szczególnie stresujący gdy się zorientujesz dopiero w kasie."
      },
      {
        id: "noun_comp_adv_6",
        question: "Die _____ beginnt um 9 Uhr morgens für alle Studenten.",
        translation: "(Wykład wprowadzający zaczyna się o 9 rano dla wszystkich studentów)",
        options: ["Einführungsvorlesung", "Vorlesungeinführung", "Einführung-Vorlesung", "Vorlesung-Einführ"],
        correct: "Einführungsvorlesung",
        explanation: "Długie złożenie: 'Einführung' (wprowadzenie) + 's' (łącznik) + 'Vorlesung' (wykład). Żeński od 'Vorlesung'. Element łączący -s- pojawia się gdy pierwszy człon kończy się na -ung. Wykłady wprowadzające to fundamenty wiedzy akademickiej - dają kontekst dla bardziej zaawansowanych tematów."
      },
      {
        id: "noun_comp_adv_7",
        question: "Ich habe meinen _____ verloren - jetzt kann ich nicht fahren!",
        translation: "(Zgubiłem prawo jazdy - teraz nie mogę jeździć!)",
        options: ["Führerschein", "Scheinführer", "Führer-Schein", "Fahr-Schein"],
        correct: "Führerschein",
        explanation: "Złożenie 'Führer' (prowadzący/kierowca) + 'Schein' (dokument/certyfikat) równa się 'Führerschein' (prawo jazdy). Męski od 'Schein'. To oficjalna nazwa dokumentu uprawniającego do prowadzenia. Utrata prawa jazdy to poważny problem - ogranicza mobilność i wymaga procedury odzyskania."
      },
      {
        id: "noun_comp_adv_8",
        question: "Der _____ hat heute viele interessante Artikel veröffentlicht.",
        translation: "(Wydawca gazety opublikował dzisiaj wiele ciekawych artykułów)",
        options: ["Zeitungsverlag", "Verlagzeitung", "Zeitungs-Verlag", "Verlag-Zeit"],
        correct: "Zeitungsverlag",
        explanation: "Złożenie 'Zeitung' (gazeta) + 's' (łącznik) + 'Verlag' (wydawnictwo) tworzy 'Zeitungsverlag'. Męski od 'Verlag'. Element łączący -s- typowy po rzeczownikach żeńskich. Wydawnictwa gazet to instytucje medialne - ich rola w społeczeństwie demokratycznym jest kluczowa dla wolności słowa."
      },
      {
        id: "noun_comp_adv_9",
        question: "Sie hat eine neue _____ für ihre Wohnung gekauft schön.",
        translation: "(Kupiła nową maszynę do kawy do swojego mieszkania)",
        options: ["Kaffeemaschine", "Maschinekaffee", "Kaffee-Maschine", "Maschine-Kaffee"],
        correct: "Kaffeemaschine",
        explanation: "Złożenie 'Kaffee' + 'Maschine' równa się 'Kaffeemaschine' (ekspres do kawy). Żeński od 'Maschine'. Brak elementu łączącego między tymi słowami - łączą się bezpośrednio. Ekspres do kawy to niezbędne urządzenie dla wielu - poranna kawa to rytuał rozpoczynający dzień."
      },
      {
        id: "noun_comp_adv_10",
        question: "Der _____ ist heute sehr stark - ich kann kaum atmen!",
        translation: "(Ruch uliczny jest dzisiaj bardzo silny - ledwo mogę oddychać!)",
        options: ["Straßenverkehr", "Verkehrstraße", "Straßen-Verkehr", "Verkehr-Straße"],
        correct: "Straßenverkehr",
        explanation: "Złożenie 'Straße' (ulica) + 'n' (element łączący) + 'Verkehr' (ruch) tworzy 'Straßenverkehr' (ruch uliczny). Męski od 'Verkehr'. Element -n- po niektórych rzeczownikach żeńskich. Intensywny ruch miejski wpływa na jakość powietrza - problem ekologiczny współczesnych miast wymaga rozwiązań transportowych."
      },
      {
        id: "noun_comp_adv_11",
        question: "Ich muss noch meine _____ machen vor der Reise bald.",
        translation: "(Muszę jeszcze zrobić rezerwację hotelu przed podróżą wkrótce)",
        options: ["Hotelbuchung", "Buchunghotel", "Hotel-Buchung", "Buchung-Hotel"],
        correct: "Hotelbuchung",
        explanation: "Złożenie 'Hotel' + 'Buchung' (rezerwacja) równa się 'Hotelbuchung'. Żeński od 'Buchung'. Obce słowo 'Hotel' przyjmuje niemieckie wzory złożeń. Wcześniejsza rezerwacja hoteli często daje lepsze ceny - planowanie z wyprzedzeniem opłaca się w podróżach."
      },
      {
        id: "noun_comp_adv_12",
        question: "Die _____ ist sehr schlecht heute - man sieht kaum etwas!",
        translation: "(Widoczność jest bardzo zła dzisiaj - ledwo coś widać!)",
        options: ["Sichtweite", "Weitesicht", "Sicht-Weite", "Weite-Sicht"],
        correct: "Sichtweite",
        explanation: "Złożenie 'Sicht' (widok) + 'Weite' (szerokość/odległość) równa się 'Sichtweite' (widoczność). Żeński od 'Weite'. Zła widoczność w mgłę czy deszcz jest niebezpieczna dla kierowców - wymaga szczególnej ostrożności i zwolnienia."
      },
      {
        id: "noun_comp_adv_13",
        question: "Der neue _____ wurde gestern offiziell eröffnet feierlich.",
        translation: "(Nowy dworzec główny został wczoraj oficjalnie otwarty uroczyście)",
        options: ["Hauptbahnhof", "Bahnhofhaupt", "Haupt-Bahnhof", "Bahnhof-Haupt"],
        correct: "Hauptbahnhof",
        explanation: "Złożenie 'Haupt' (główny) + 'Bahnhof' (dworzec) równa się 'Hauptbahnhof' (dworzec główny). Męski od 'Bahnhof'. To standardowe oznaczenie centralnego dworca w miastach. Otwarcie nowych dworców to wydarzenie infrastrukturalne - poprawia komunikację i rozwój regionalny."
      },
      {
        id: "noun_comp_adv_14",
        question: "Sie hat einen neuen _____ für ihr Smartphone gekauft praktisch.",
        translation: "(Kupiła nowy ładowarkę do swojego smartfona)",
        options: ["Ladegerät", "Gerätlade", "Lade-Gerät", "Gerät-Lade"],
        correct: "Ladegerät",
        explanation: "Złożenie od czasownika 'laden' (ładować) + 'Gerät' (urządzenie) równa się 'Ladegerät' (ładowarka). Nijaki od 'Gerät'. Rdzeń czasownika może tworzyć złożenia - 'Lade-' z 'laden'. Urządzenia elektroniczne wymagają swoich ładowarek - zgubienie lub zapomnienie ładowarki to współczesny problem."
      },
      {
        id: "noun_comp_adv_15",
        question: "Der _____ ist in diesem Gebiet sehr hoch leider problematisch.",
        translation: "(Poziom hałasu jest w tym obszarze bardzo wysoki niestety)",
        options: ["Lärmpegel", "Pegellärm", "Lärm-Pegel", "Pegel-Lärm"],
        correct: "Lärmpegel",
        explanation: "Złożenie 'Lärm' (hałas) + 'Pegel' (poziom) równa się 'Lärmpegel' (poziom hałasu). Męski od 'Pegel'. To techniczny termin dla mierzenia dźwięku. Wysoki poziom hałasu wpływa na zdrowie - chroniczny hałas może powodować stress i problemy ze słuchem."
      }
    ]
  },

  local_directional_adverbs: {
    name: "Przysłówki miejsca i kierunku",
    description: "Hier/hierher, dort/dorthin, da/dahin - lokalizacja vs kierunek",
    icon: MapPin,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "loc_dir_1",
        question: "Komm bitte _____ zu mir - ich zeige dir etwas Interessantes!",
        translation: "(Chodź proszę tutaj do mnie - pokażę ci coś ciekawego!)",
        options: ["hierher", "hier", "dahin", "dorthin"],
        correct: "hierher",
        explanation: "Przysłówek 'hierher' wyraża KIERUNEK (dokąd) do miejsca mówiącego - 'tutaj w moim kierunku'. To różne od 'hier' (tutaj - pozycja). Czasownik ruchu 'kommen' wymaga kierunku. Polski często używa po prostu 'tutaj' dla obu znaczeń, niemiecki rozróżnia pozycję (hier) od kierunku (hierher)."
      },
      {
        id: "loc_dir_2",
        question: "Bleib bitte _____ stehen - rühr dich nicht vom Platz!",
        translation: "(Zostań proszę tutaj - nie ruszaj się z miejsca!)",
        options: ["hier", "hierher", "da", "dahin"],
        correct: "hier",
        explanation: "Przysłówek 'hier' wyraża statyczną POZYCJĘ - pozostań w tym miejscu (nie idź nigdzie). Czasownik 'bleiben' (zostawać) wskazuje brak ruchu więc pozycja nie kierunek. Instrukcja pozostania w miejscu może być dla bezpieczeństwa lub w zabawie - kontekst określa ton."
      },
      {
        id: "loc_dir_3",
        question: "Geh bitte _____ zum Supermarkt und kauf Milch!",
        translation: "(Idź proszę tam do supermarketu i kup mleko!)",
        options: ["dorthin", "dort", "dahin", "hierher"],
        correct: "dorthin",
        explanation: "Przysłówek 'dorthin' wyraża kierunek DO określonego miejsca z dala od mówiącego - 'tam w tamtym kierunku'. Czasownik 'gehen' wymaga kierunku. Forma 'dorthin' bardziej formalna niż 'dahin'. Wysłanie kogoś po zakupy to powszechna prośba domowa - delegowanie drobnych zadań."
      },
      {
        id: "loc_dir_4",
        question: "Warte _____ auf mich - ich komme gleich zurück sofort!",
        translation: "(Poczekaj tam na mnie - zaraz wrócę natychmiast!)",
        options: ["dort", "dorthin", "da", "dahin"],
        correct: "dort",
        explanation: "Przysłówek 'dort' dla statycznej pozycji - czekaj W TYM miejscu (nie idź dokądś). Czasownik 'warten' (czekać) wskazuje pozostawanie więc pozycja. Krótka nieobecność wymaga koordynacji - jasne powiedzenie gdzie czekać zapobiega zgubieniu się."
      },
      {
        id: "loc_dir_5",
        question: "Wie komme ich am besten _____ zum Bahnhof von hier?",
        translation: "(Jak najlepiej dojdę tam do dworca stąd?)",
        options: ["dorthin", "dort", "dahin", "hierher"],
        correct: "dorthin",
        explanation: "Pytanie o drogę DO miejsca - 'dorthin' pokazuje kierunek. Czasownik 'kommen' (dojść) wymaga kierunku nie pozycji. Forma 'wie komme ich' (jak dojdę) standardowa dla pytań o drogę. Pytanie nieznajomych o kierunki to częsta sytuacja w obcych miastach - pomocność w takich momentach buduje dobre wrażenie o społeczności."
      },
      {
        id: "loc_dir_6",
        question: "Stell die Vase bitte _____ auf den Tisch vorsichtig!",
        translation: "(Postaw wazon proszę tam na stół ostrożnie!)",
        options: ["dahin", "da", "dorthin", "dort"],
        correct: "dahin",
        explanation: "Przysłówek 'dahin' (tam w tym kierunku) mniej formalny niż 'dorthin' - często w rozkazach domowych. Czasownik 'stellen' (stawiać) wymaga kierunku. Forma 'dahin' casualowa. Ostrożność z delikatnymi przedmiotami zapobiega stłuczeniu - szczególnie wartościowe rzeczy wymagają uwagi."
      },
      {
        id: "loc_dir_7",
        question: "_____ wohne ich schon seit zehn Jahren glücklich zufrieden.",
        translation: "(Tutaj mieszkam już od dziesięciu lat szczęśliwie)",
        options: ["Hier", "Hierher", "Da", "Dahin"],
        correct: "Hier",
        explanation: "Czasownik 'wohnen' (mieszkać) wskazuje statyczną pozycję - 'hier' (tutaj - gdzie mieszkam). Nie ruch więc nie 'hierher'. Długoterminowe zamieszkanie w miejscu tworzy przywiązanie - dom to więcej niż budynek, to poczucie przynależności do miejsca."
      },
      {
        id: "loc_dir_8",
        question: "Fahr bitte _____ mit dem Auto - wir treffen uns dort!",
        translation: "(Jedź proszę tam samochodem - spotkamy się tam!)",
        options: ["dorthin", "dort", "dahin", "hierher"],
        correct: "dorthin",
        explanation: "Czasownik 'fahren' (jechać) wymaga kierunku - 'dorthin' (tam w tamtym kierunku). Formalna forma dla jasnej instrukcji. Potem 'dort' (tam - pozycja) dla miejsca spotkania. Użycie zarówno kierunku jak i pozycji w tym samym zdaniu pokazuje pełną trasę - dokąd jechać i gdzie będziesz."
      },
      {
        id: "loc_dir_9",
        question: "Leg das Buch bitte _____ zurück ins Regal ordentlich!",
        translation: "(Połóż książkę proszę tam z powrotem na półkę schludnie!)",
        options: ["dahin", "da", "dorthin", "hier"],
        correct: "dahin",
        explanation: "Czasownik 'legen' (kłaść) wymaga kierunku - 'dahin' (tam - z powrotem na miejsce). Casualowa forma dla domowej instrukcji. Słowo 'zurück' (z powrotem) podkreśla powrót na oryginalne miejsce. Odkładanie książek na miejsce utrzymuje porządek - każda rzecz ma swoje miejsce w zorganizowanej przestrzeni."
      },
      {
        id: "loc_dir_10",
        question: "Bleiben Sie bitte _____ sitzen - der Arzt kommt gleich.",
        translation: "(Proszę zostać tam siedzieć - lekarz zaraz przyjdzie)",
        options: ["dort", "dorthin", "da", "dahin"],
        correct: "dort",
        explanation: "Czasownik 'bleiben' (zostawać) wskazuje statyczność - 'dort' (tam - w tamtej pozycji). Formalna prośba z 'Sie'. Instrukcja w poczekalni lekarskiej wymaga cierpliwości. Oczekiwanie na lekarza testuje spokój - ale konieczne dla otrzymania opieki medycznej."
      },
      {
        id: "loc_dir_11",
        question: "Von _____ aus kann man die ganze Stadt überblicken wunderbar!",
        translation: "(Stąd można zobaczyć całe miasto wspaniale!)",
        options: ["hier", "hierher", "dort", "dorthin"],
        correct: "hier",
        explanation: "Fraza 'von hier aus' (stąd) używa 'hier' dla punktu wyjścia. Przyimek 'von' pokazuje pochodzenie perspektywy. Punkty widokowe oferują panoramy - widok z wysokości daje nową perspektywę na znane miejsce."
      },
      {
        id: "loc_dir_12",
        question: "Bring die Bücher bitte _____ in mein Zimmer rein!",
        translation: "(Przynieś książki proszę tutaj do mojego pokoju!)",
        options: ["hierher", "hier", "dorthin", "dort"],
        correct: "hierher",
        explanation: "Czasownik 'bringen' (przynosić) wymaga kierunku DO miejsca mówiącego - 'hierher' (tutaj w moim kierunku). Słowo 'rein' (do środka) dodatkowo podkreśla kierunek. Przynoszenie książek do pokoju może być przygotowaniem do nauki - organizacja materiałów to pierwszy krok do produktywnej sesji."
      },
      {
        id: "loc_dir_13",
        question: "_____ drüben steht unser neues Auto auf dem Parkplatz.",
        translation: "(Tam po drugiej stronie stoi nasz nowy samochód na parkingu)",
        options: ["Dort", "Dorthin", "Da", "Dahin"],
        correct: "Dort",
        explanation: "Czasownik 'stehen' (stać) wskazuje pozycję - 'dort drüben' (tam po drugiej stronie). Słowo 'drüben' (po drugiej stronie) wzmacnia odległość. Wskazywanie na samochód wymaga precyzji - szczególnie na zatłoczonym parkingu gdzie wiele podobnych aut."
      },
      {
        id: "loc_dir_14",
        question: "Fahren Sie bitte _____ geradeaus bis zur Kreuzung!",
        translation: "(Proszę jechać tam prosto do skrzyżowania!)",
        options: ["dahin", "da", "dorthin", "dort"],
        correct: "dahin",
        explanation: "Instrukcja jazdy wymaga kierunku - 'dahin' (tam w tym kierunku) casualowa forma. Czasownik 'fahren' z kierunkiem. Słowo 'geradeaus' (prosto) precyzuje kierunek. Dawanie wskazówek drogowych wymaga jasności - proste instrukcje pomagają uniknąć zagubienia się."
      },
      {
        id: "loc_dir_15",
        question: "Wir sind endlich _____ angekommen nach langer Reise müde!",
        translation: "(W końcu tu dotarliśmy po długiej podróży zmęczeni!)",
        options: ["hier", "hierher", "dort", "dorthin"],
        correct: "hier",
        explanation: "Czasownik 'ankommen' (przybyć) choć sugeruje ruch, rezultat to pozycja - 'hier' (tutaj - jesteśmy w tym miejscu teraz). Perfect 'sind angekommen' pokazuje zakończenie podróży. Ulga po długiej podróży jest słodka - dotarcie do celu kończy napięcie związane z transportem."
      }
    ]
  },

  modal_particles_flavor: {
    name: "Partykuły modalne - smak języka",
    description: "Doch, mal, ja, eben, halt - subtelne odcienie znaczenia",
    icon: BookMarked,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "modal_part_1",
        question: "Das ist _____ interessant - hätte ich nie gedacht!",
        translation: "(To jest faktycznie ciekawe - nigdy bym nie pomyślał!)",
        options: ["ja", "doch", "mal", "eben"],
        correct: "ja",
        explanation: "Partykuła 'ja' wyraża zaskoczenie pozytywne - 'faktycznie/rzeczywiście jest ciekawe'. Dodaje autentyczność do reakcji. To nie przekład polskiego 'tak' tylko partykuła emocjonalna. Używasz 'ja' gdy odkrywasz coś nieoczekiwanie pozytywnego - intensyfikuje stwierdzenie pokazując szczerą reakcję."
      },
      {
        id: "modal_part_2",
        question: "Komm _____ her, ich muss dir etwas zeigen schnell!",
        translation: "(Chodź no tutaj, muszę ci coś pokazać szybko!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' łagodzi tryb rozkazujący - 'komm mal' brzmi jak przyjazna prośba nie rozkaz. Dodaje casualowości. Polski używa 'no' lub '-że' podobnie. Partykuła czyni zaproszenie mniej nakazujące - sugeruje że to nie wielki wysiłek tylko krótka chwila."
      },
      {
        id: "modal_part_3",
        question: "Das ist _____ so, da kann man nichts machen leider.",
        translation: "(Po prostu tak jest, nic się nie da zrobić niestety)",
        options: ["eben", "doch", "ja", "mal"],
        correct: "eben",
        explanation: "Partykuła 'eben' (lub 'halt' w południowych Niemczech) wyraża akceptację rzeczywistości - 'po prostu tak jest'. Pokazuje rezygnację bez narzekania. Polski używa 'po prostu' lub 'cóż' podobnie. Używasz 'eben' gdy przyznasz że coś jest poza twoją kontrolą - pragmatyczna akceptacja."
      },
      {
        id: "modal_part_4",
        question: "Hilf mir _____ bitte kurz mit dieser schweren Tasche!",
        translation: "(Pomóż mi no proszę krótko z tą ciężką torbą!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' w prośbach dodaje ciepło i naleganie - 'hilf mir doch' brzmi bardziej przyjazne. Łagodzi bezpośredniość. Kombinacja 'doch' i 'bitte' podwójnie uprzejmia prośbę. Proszenie o pomoc z ciężkimi rzeczami to naturalne - partykuła pokazuje że doceniasz wysiłek drugiej osoby."
      },
      {
        id: "modal_part_5",
        question: "Du hast _____ gesagt, dass du kommst - wo bist du?",
        translation: "(Przecież powiedziałeś, że przyjdziesz - gdzie jesteś?)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' przypomina o wcześniejszym stwierdzeniu - 'przecież powiedziałeś'. Wyraża frustrację z niespójnością. Polski 'przecież' działa identycznie. Używasz 'doch' gdy przypominasz komuś o jego słowach lub obietnicach - podkreśla kontrast między słowami a działaniem."
      },
      {
        id: "modal_part_6",
        question: "Schau _____, wie schön der Sonnenuntergang heute ist!",
        translation: "(Popatrz no, jaki piękny jest dzisiaj zachód słońca!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' w 'schau mal' (popatrz-no) to przyjazne zaproszenie do zwrócenia uwagi. Bardzo casualowa forma. Polski dodaje 'no' lub '-że' podobnie. Dzielenie się pięknem natury z innymi wzmacnia doświadczenie - wspólny podziw dla zachodu słońca to prosty moment połączenia."
      },
      {
        id: "modal_part_7",
        question: "Das kann _____ nicht wahr sein - unmöglich völlig!",
        translation: "(To nie może być prawdą - całkowicie niemożliwe!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' w negatywnych stwierdzeniach wzmacnia niedowierzanie - 'doch nicht' podkreśla niemożliwość. Wyraża silną reakcję. Polski używa 'przecież nie może' lub 'chyba nie'. Intensyfikuje zaprzeczenie - pokazuje że coś jest sprzeczne z logiką lub oczekiwaniami."
      },
      {
        id: "modal_part_8",
        question: "Sei _____ nicht so traurig - alles wird gut!",
        translation: "(Nie bądź no taki smutny - wszystko będzie dobrze!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' w pocieszeniu dodaje empatię - 'sei doch nicht' to łagodne odradzanie smutku. Pokazuje troskę. Polski dodaje 'no' lub 'już' w podobny sposób. Pocieszanie przyjaciół wymaga delikatności - partykuła łagodzi surową formę rozkazu przekształcając ją w czułą radę."
      },
      {
        id: "modal_part_9",
        question: "Du bist _____ mein Bruder - natürlich helfe ich dir!",
        translation: "(Jesteś przecież moim bratem - oczywiście ci pomogę!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' przypomina o oczywistym fakcie - 'przecież jesteś'. Uzasadnia pomoc przez rodzinną więź. Polski 'przecież' identyczny. Używasz 'doch' gdy odwołujesz się do czegoś co rozmówca powinien wiedzieć - rodzina pomaga rodzinie to oczywiste."
      },
      {
        id: "modal_part_10",
        question: "Warte _____ einen Moment - ich bin gleich fertig!",
        translation: "(Poczekaj chwilkę - zaraz skończę!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' minimalizuje prośbę - 'warte mal' sugeruje że to tylko krótka chwila. Łagodzi niedogodność czekania. Polski używa 'chwilkę' lub 'sekundkę' z tym samym efektem. Obiecując że to szybko, redukujesz frustrację czekającej osoby - szacunek dla czasu innych jest ważny."
      },
      {
        id: "modal_part_11",
        question: "Das habe ich dir _____ schon dreimal gesagt!",
        translation: "(Przecież już ci to trzy razy mówiłem!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' wyraża frustrację z konieczności powtarzania - 'doch schon' podkreśla że to nie nowa informacja. Polski 'przecież już' identyczny. Irytacja gdy ktoś nie słucha jest zrozumiała - wielokrotne powtarzanie tych samych rzeczy może być wyczerpujące."
      },
      {
        id: "modal_part_12",
        question: "Komm _____ mit uns ins Kino - es wird lustig!",
        translation: "(Chodź no z nami do kina - będzie wesoło!)",
        options: ["doch", "ja", "mal", "eben"],
        correct: "doch",
        explanation: "Partykuła 'doch' w zaproszeniach dodaje zachęty - 'komm doch mit' bardziej przekonujące. Wyraża chęć towarzystwa. Polski używa 'no' lub 'przecież' w zachętach. Partykuła pokazuje że naprawdę chcesz żeby osoba dołączyła - nie tylko formalne zaproszenie ale szczere pragnienie ich obecności."
      },
      {
        id: "modal_part_13",
        question: "Das ist _____ unglaublich - wie hast du das geschafft?",
        translation: "(To jest faktycznie niewiarygodne - jak ci się to udało?)",
        options: ["ja", "doch", "mal", "eben"],
        correct: "ja",
        explanation: "Partykuła 'ja' intensyfikuje zdumienie - 'ja unglaublich' pokazuje autentyczne zaskoczenie osiągnięciem. Wyraża podziw. To emocjonalna reakcja na coś imponującego. Używasz 'ja' gdy jesteś naprawdę pod wrażeniem - szczere komplementy motywują i budują pewność siebie."
      },
      {
        id: "modal_part_14",
        question: "Versuch es _____ noch einmal - vielleicht klappt es!",
        translation: "(Spróbuj no jeszcze raz - może się uda!)",
        options: ["mal", "doch", "ja", "eben"],
        correct: "mal",
        explanation: "Partykuła 'mal' zachęca do próby - 'versuch mal' brzmi jak przyjazna sugestia nie nacisk. Minimalizuje strach przed porażką. Polski używa 'no' lub 'spróbuj-że'. Zachęcanie do kolejnych prób po porażce pokazuje wsparcie - wytrwałość często prowadzi do sukcesu."
      },
      {
        id: "modal_part_15",
        question: "Das musst du _____ akzeptieren - so ist die Realität nun.",
        translation: "(Musisz to po prostu zaakceptować - taka jest rzeczywistość)",
        options: ["eben", "doch", "ja", "mal"],
        correct: "eben",
        explanation: "Partykuła 'eben' (lub 'halt') wyraża nieuchronność - 'musst eben' pokazuje że nie ma alternatywy. Pragmatyczna akceptacja. Polski 'po prostu' lub 'cóż' podobny. Nie wszystko w życiu możemy zmienić - umiejętność akceptacji tego co poza kontrolą pomaga w radzeniu sobie ze stresem."
      }
    ]
  },

  question_formation_advanced: {
    name: "Tworzenie pytań - zaawansowane",
    description: "Indirekte Fragen, Fragewörter mit Präpositionen - pośrednie i złożone",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "quest_adv_1",
        question: "Ich weiß nicht, _____ er heute kommt oder nicht zur Party.",
        translation: "(Nie wiem, czy dzisiaj przyjdzie czy nie na imprezę)",
        options: ["ob", "wenn", "wann", "dass"],
        correct: "ob",
        explanation: "Pytanie pośrednie używa 'ob' (czy) zamiast odwróconego szyku. Forma 'weiß nicht, ob' standardowa dla wyrażania niepewności. Czasownik idzie na koniec zdania podrzędnego. Niepewność co do czyjeś obecności utrudnia planowanie - jasna odpowiedź 'tak' lub 'nie' ułatwiałaby organizację."
      },
      {
        id: "quest_adv_2",
        question: "Kannst du mir sagen, _____ der Zug abfährt genau?",
        translation: "(Możesz mi powiedzieć, kiedy dokładnie odjeżdża pociąg?)",
        options: ["wann", "wenn", "ob", "als"],
        correct: "wann",
        explanation: "Pytanie pośrednie o CZAS używa 'wann' (kiedy) - 'sagen, wann' (powiedzieć kiedy). Czasownik 'abfährt' na końcu. To pytanie o konkretną informację nie o warunku. Pytanie o rozkład jazdy to praktyczna potrzeba - punktualność transportu publicznego ważna dla planowania dnia."
      },
      {
        id: "quest_adv_3",
        question: "Weißt du, _____ sie sich so über mich geärgert hat?",
        translation: "(Czy wiesz, dlaczego się tak na mnie zdenerwowała?)",
        options: ["warum", "wann", "wo", "wie"],
        correct: "warum",
        explanation: "Pytanie pośrednie o PRZYCZYNĘ używa 'warum' (dlaczego) - 'weißt du, warum'. Perfect 'hat geärgert' na końcu zdania podrzędnego. Szukanie wyjaśnienia dla czyjejś złości. Zrozumienie przyczyn konfliktów to pierwszy krok do rozwiązania - komunikacja wymaga pytania o motywacje."
      },
      {
        id: "quest_adv_4",
        question: "Ich frage mich, _____ er wohl gerade macht jetzt drüben.",
        translation: "(Zastanawiam się, co on teraz tam robi)",
        options: ["was", "dass", "ob", "wann"],
        correct: "was",
        explanation: "Pytanie pośrednie o RZECZ/AKCJĘ używa 'was' (co) - 'frage mich, was er macht'. Czasownik na końcu. Partykuła 'wohl' dodaje spekulatywnego tonu. Ciekawość o czyjej aktywności jest naturalna - szczególnie gdy ktoś jest tajemniczy lub nieobecny."
      },
      {
        id: "quest_adv_5",
        question: "Können Sie mir erklären, _____ das funktioniert genau?",
        translation: "(Czy może Pan/Pani wyjaśnić, jak to dokładnie działa?)",
        options: ["wie", "was", "wo", "wann"],
        correct: "wie",
        explanation: "Pytanie pośrednie o SPOSÓB używa 'wie' (jak) - 'erklären, wie es funktioniert'. Formalna prośba z 'Sie'. Czasownik 'funktioniert' na końcu. Pytanie o mechanizm działania pokazuje chęć zrozumienia - instrukcje są skuteczniejsze gdy wyjaśniają DLACZEGO coś działa, nie tylko CO robić."
      },
      {
        id: "quest_adv_6",
        question: "Ich bin mir unsicher, _____ ich dieses Angebot annehmen soll.",
        translation: "(Jestem niepewien, czy powinienem przyjąć tę ofertę)",
        options: ["ob", "dass", "wenn", "wann"],
        correct: "ob",
        explanation: "Niepewność wymaga 'ob' (czy) - 'unsicher, ob ich soll'. Czasownik modalny 'soll' na końcu. To wewnętrzny dylemat. Decyzje o ofertach pracy/biznesowych wymagają rozważenia - niepewność pokazuje przemyślane podejście, nie impulsywność."
      },
      {
        id: "quest_adv_7",
        question: "_____ denkst du gerade nach? Du siehst so nachdenklich aus!",
        translation: "(O czym się zastanawiasz? Wyglądasz tak zamyślony!)",
        options: ["Worüber", "Über was", "Woran", "An was"],
        correct: "Worüber",
        explanation: "Pytanie z przyimkiem wymaga złożonej formy - 'worüber' (o czym) zamiast 'über was'. Czasownik rozdzielny 'nachdenken' z 'über'. Forma 'worüber' bardziej elegancka. Pytanie o czyjeś myśli pokazuje zainteresowanie - zaobserwowanie że ktoś wygląda na zamyślonego i zapytanie wyraża troskę."
      },
      {
        id: "quest_adv_8",
        question: "Ich verstehe nicht, _____ er sich nicht entschuldigt hat.",
        translation: "(Nie rozumiem, dlaczego się nie przeprosił)",
        options: ["warum", "wann", "wie", "wo"],
        correct: "warum",
        explanation: "Brak zrozumienia motywacji - 'verstehe nicht, warum' (nie rozumiem dlaczego). Perfect 'hat entschuldigt' (nie przeprosił) na końcu. Brak przeprosin po błędzie jest zagadkowy - oczekiwanie przeprosin to część kultury uprzejmości."
      },
      {
        id: "quest_adv_9",
        question: "Hast du eine Ahnung, _____ mein Schlüssel sein könnte?",
        translation: "(Masz pojęcie, gdzie mógłby być mój klucz?)",
        options: ["wo", "wann", "wie", "warum"],
        correct: "wo",
        explanation: "Pytanie pośrednie o MIEJSCE używa 'wo' (gdzie) - 'Ahnung, wo er sein könnte'. Konjunktiv 'könnte' dla niepewnej możliwości. Zgubiony klucz to frustrujące - pytanie innych o pomoc w szukaniu jest naturalne gdy sam nie możesz znaleźć."
      },
      {
        id: "quest_adv_10",
        question: "_____ interessierst du dich am meisten? Für Kunst oder Musik?",
        translation: "(Czym interesujesz się najbardziej? Sztuką czy muzyką?)",
        options: ["Wofür", "Für was", "Womit", "Mit was"],
        correct: "Wofür",
        explanation: "Pytanie z przyimkiem - 'wofür' (czym/za czym) zamiast 'für was'. Czasownik 'sich interessieren für' wymaga tej formy. Złożone pytanie brzmi lepiej. Pytanie o pasje to dobry sposób na poznanie kogoś - zainteresowania ujawniają wartości i osobowość."
      },
      {
        id: "quest_adv_11",
        question: "Ich möchte wissen, _____ du das alles geschafft hast schnell.",
        translation: "(Chciałbym wiedzieć, jak zdołałeś to wszystko zrobić szybko)",
        options: ["wie", "was", "wo", "wann"],
        correct: "wie",
        explanation: "Pytanie o METODĘ/SPOSÓB - 'wissen, wie du geschafft hast' (wiedzieć jak zdołałeś). Perfect na końcu zdania podrzędnego. Podziw dla czyjegoś osiągnięcia. Pytanie jak ktoś coś osiągnął może ujawnić przydatne strategie - uczenie się od sukcesów innych jest mądre."
      },
      {
        id: "quest_adv_12",
        question: "_____ wartest du eigentlich hier? Auf den Bus?",
        translation: "(Na co właściwie czekasz tutaj? Na autobus?)",
        options: ["Worauf", "Auf was", "Woran", "An was"],
        correct: "Worauf",
        explanation: "Czasownik 'warten auf' wymaga złożonego pytania - 'worauf' (na co) zamiast 'auf was'. Bardziej naturalne w niemieckim. Słowo 'eigentlich' (właściwie) dodaje ciekawości. Pytanie nieznajomych co robią może być przyjaznym gestem - ale kontekst i ton ważne żeby nie brzmieć nachalne."
      },
      {
        id: "quest_adv_13",
        question: "Ich bin neugierig, _____ sie morgen zur Arbeit kommen wird.",
        translation: "(Jestem ciekawy, czy przyjdzie jutro do pracy)",
        options: ["ob", "wann", "dass", "wenn"],
        correct: "ob",
        explanation: "Ciekawość o przyszłą obecność - 'neugierig, ob sie kommt' (ciekawy czy przyjdzie). Czasownik 'wird kommen' na końcu w Futur. Czas przyszły w pytaniu pośrednim. Spekulacja o obecności kolegi - może z troski o zdrowie lub planowanie zadań wymagających współpracy."
      },
      {
        id: "quest_adv_14",
        question: "Weißt du zufällig, _____ dieser Bus hinfährt genau?",
        translation: "(Czy przypadkiem wiesz, dokąd jedzie ten autobus dokładnie?)",
        options: ["wohin", "wo", "wann", "wie"],
        correct: "wohin",
        explanation: "Pytanie o KIERUNEK/CEL podróży - 'wohin er hinfährt' (dokąd jedzie). Czasownik rozdzielny 'hinfahren' na końcu. Słowo 'zufällig' (przypadkiem) łagodzi pytanie. Pytanie nieznajomych o trasę autobusu gdy jesteś zdezorientowany - pomocność w takich sytuacjach jest doceniana."
      },
      {
        id: "quest_adv_15",
        question: "Ich frage mich, _____ er wohl denkt über diese Situation kritisch.",
        translation: "(Zastanawiam się, co on myśli o tej sytuacji krytycznie)",
        options: ["was", "ob", "dass", "wie"],
        correct: "was",
        explanation: "Pytanie o MYŚLI/OPINIĘ - 'frage mich, was er denkt' (zastanawiam się co myśli). Czasownik 'denkt' na końcu z przyimkiem 'über'. Spekulacja o czyjejś perspektywie. Ciekawość o opinie innych może prowadzić do ciekawych rozmów - różne punkty widzenia wzbogacają zrozumienie sytuacji."
      }
    ]
  },

  verb_prefix_hin_her: {
    name: "Przedrostki kierunkowe hin-/her-",
    description: "Hingehen/hergehen, hinauf/herauf - kierunek od/do mówiącego",
    icon: MapPin,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "hin_her_1",
        question: "Komm bitte _____ zu mir ins Wohnzimmer schnell!",
        translation: "(Przyjdź proszę tutaj do mnie do salonu szybko!)",
        options: ["her", "hin", "raus", "rein"],
        correct: "her",
        explanation: "Przedrostek 'her-' oznacza ruch W KIERUNKU mówiącego - 'komm her' (przyjdź tutaj do mnie). To przeciwieństwo 'hin-' (od mówiącego). Polski używa 'tutaj' dla obu, niemiecki rozróżnia kierunek. Perspektywa mówiącego jest kluczowa - 'her' oznacza 'w moją stronę', pokazuje że chcesz kogoś przy sobie."
      },
      {
        id: "hin_her_2",
        question: "Ich gehe jetzt _____ zum Supermarkt - brauchst du etwas?",
        translation: "(Idę teraz tam do supermarketu - potrzebujesz czegoś?)",
        options: ["hin", "her", "raus", "rein"],
        correct: "hin",
        explanation: "Przedrostek 'hin-' oznacza ruch OD mówiącego - 'gehe hin' (idę tam od siebie). Kierunek z dala od twojej pozycji. Czasownik 'hingehen' można używać samodzielnie. Oferowanie przyniesienia czegoś ze sklepu to pomocny gest - oszczędza drugiej osobie wyjścia."
      },
      {
        id: "hin_her_3",
        question: "Bring mir bitte die Zeitung von dort _____ ins Zimmer!",
        translation: "(Przynieś mi proszę gazetę stamtąd tutaj do pokoju!)",
        options: ["her", "hin", "raus", "rein"],
        correct: "her",
        explanation: "Czasownik 'herbringen' (przynosić DO mówiącego) używa 'her-'. Ruch z tamtego miejsca W TWOJĄ stronę. Forma 'bring her' w trybie rozkazującym. Proszenie o przyniesienie rzeczy pokazuje zaufanie - osoba wykonuje małą usługę."
      },
      {
        id: "hin_her_4",
        question: "Sie ist gerade die Treppe _____ gegangen nach oben.",
        translation: "(Właśnie weszła po schodach w górę)",
        options: ["hinauf", "herauf", "hinunter", "herunter"],
        correct: "hinauf",
        explanation: "Złożenie 'hinauf' (w górę OD mówiącego) - obserwujesz ją iść W GÓRĘ ale z dala od ciebie. 'Hin-' pokazuje kierunek od ciebie, 'auf' pokazuje w górę. Gdybyś był na górze, mówiłbyś 'herauf'. To precyzyjna perspektywa - niemiecki bardzo dba o punkt widzenia mówiącego."
      },
      {
        id: "hin_her_5",
        question: "Kannst du mir bitte das Buch von oben _____ bringen?",
        translation: "(Możesz mi proszę przynieść książkę z góry w dół?)",
        options: ["herunterbringen", "hinunterbringen", "herauffbringen", "hinauffbringen"],
        correct: "herunterbringen",
        explanation: "Czasownik 'herunterbringen' (przynieść z góry DO mówiącego) - 'her-' (do mnie) + 'unter' (w dół) + 'bringen'. Jesteś na dole, książka na górze, chcesz żeby przyszła DO CIEBIE. Długi czasownik ale logiczny - każdy element ma znaczenie. Prośba o przyniesienie z piętra to typowa domowa sytuacja."
      },
      {
        id: "hin_her_6",
        question: "Geh bitte _____ in den Keller und hol die Werkzeuge!",
        translation: "(Zejdź proszę tam do piwnicy i przynieś narzędzia!)",
        options: ["hinunter", "herunter", "hinauf", "herauf"],
        correct: "hinunter",
        explanation: "Forma 'hinunter' (w dół OD mówiącego) - wysyłasz kogoś W DÓŁ z dala od siebie. 'Hin-' od ciebie, 'unter' w dół. Jesteś na górze, piwnica poniżej. Prośba o przynieszienie narzędzi z piwnicy - delegowanie zadania wymaga jasnych instrukcji kierunkowych."
      },
      {
        id: "hin_her_7",
        question: "Komm bitte schnell _____ - ich brauche deine Hilfe!",
        translation: "(Przyjdź proszę szybko w górę - potrzebuję twojej pomocy!)",
        options: ["herauf", "hinauf", "herunter", "hinunter"],
        correct: "herauf",
        explanation: "Forma 'herauf' (w górę DO mówiącego) - jesteś na górze, wzywasz kogoś żeby przyszedł DO CIEBIE w górę. 'Her-' do mówiącego, 'auf' w górę. Pilna prośba o pomoc. Wołanie o pomoc gdy jesteś wyżej wymaga precyzji kierunkowej - 'herauf' jasno komunikuje 'przyjdź tu na górę gdzie ja jestem'."
      },
      {
        id: "hin_her_8",
        question: "Ich muss noch schnell _____ laufen zum Briefkasten draußen.",
        translation: "(Muszę jeszcze szybko zbiec w dół do skrzynki pocztowej na zewnątrz)",
        options: ["hinunterlaufen", "herunterlaufen", "hinauflaufen", "herauflaufen"],
        correct: "hinunterlaufen",
        explanation: "Czasownik 'hinunterlaufen' (zbiec w dół OD siebie) - idziesz na dół z dala od obecnej pozycji. Element 'laufen' (biegać/chodzić) pokazuje sposób ruchu. Szybkie sprawdzenie poczty - 'hinunter' pokazuje że schodzisz z góry (może z mieszkania na piętrze) do skrzynki poniżej."
      },
      {
        id: "hin_her_9",
        question: "Er hat mir zugerufen, ich soll _____ kommen zu ihm.",
        translation: "(Zawołał do mnie, żebym przyszedł tam do niego)",
        options: ["hinkommen", "herkommen", "rauskommen", "reinkommen"],
        correct: "hinkommen",
        explanation: "Forma 'hinkommen' (przyjść TAM do niego) - ruch OD ciebie DO niego. Z jego perspektywy byłoby 'herkommen', ale relacjonujesz jego słowa z TWOJEJ perspektywy. To pokazuje jak perspektywa zmienia przedrostek - ten sam ruch opisywany różnie zależnie kto mówi."
      },
      {
        id: "hin_her_10",
        question: "Kannst du mir helfen, diese Kiste _____ zu tragen schwer?",
        translation: "(Możesz mi pomóc wnieść tę ciężką skrzynię w górę?)",
        options: ["hinauftragen", "herauftragen", "hinuntertragen", "heruntertragen"],
        correct: "hinauftragen",
        explanation: "Forma 'hinauftragen' (nieść w górę OD obecnej pozycji) - zamierzasz zanieść skrzynię W GÓRĘ od miejsca gdzie teraz jesteś. 'Hin-' od ciebie, 'auf' w górę. Ciężkie przedmioty wymagają pomocy - szczególnie po schodach gdzie ryzyko upadku wyższe."
      },
      {
        id: "hin_her_11",
        question: "Geh nicht _____ - es ist gefährlich dort oben auf dem Dach!",
        translation: "(Nie chodź w górę - jest niebezpiecznie tam na dachu!)",
        options: ["hinauf", "herauf", "hinunter", "herunter"],
        correct: "hinauf",
        explanation: "Ostrzeżenie przed pójściem W GÓRĘ - 'geh nicht hinauf' (nie chodź w górę od siebie). Dach jako niebezpieczne miejsce. Forma 'hin-' pokazuje że byłby ruch od ciebie. Ostrzeżenia przed niebezpieczeństwem pokazują troskę - dachy bez zabezpieczeń są rzeczywiście ryzykowne."
      },
      {
        id: "hin_her_12",
        question: "Ruf mich bitte _____, wenn du fertig bist unten!",
        translation: "(Zawołaj mnie proszę w górę, gdy skończysz na dole!)",
        options: ["herauf", "hinauf", "herunter", "hinunter"],
        correct: "herauf",
        explanation: "Forma 'herauf rufen' (zawołać w górę DO mówiącego) - jesteś na górze, osoba na dole ma cię zawołać ŻEBYŚ USŁYSZAŁ. 'Her-' do mówiącego, 'auf' w górę. Głos musi podróżować w górę. Koordynacja między piętrami w domu wymaga woła nia - szczególnie gdy brak interkomu."
      },
      {
        id: "hin_her_13",
        question: "Sie kam gerade _____ aus dem Ausland zurück nach Hause.",
        translation: "(Właśnie wróciła z zagranicy do domu)",
        options: ["zurück", "her", "hin", "raus"],
        correct: "zurück",
        explanation: "Czasownik 'zurückkommen' (wracać) używa przedrostka 'zurück-' (z powrotem) - to specjalny kierunek powrotu. Perfect 'ist gekommen' z kierunkiem. Powroty z podróży zagranicznych to emocjonalne momenty - połączenie z domem i bliskimi po czasie za granicą."
      },
      {
        id: "hin_her_14",
        question: "Komm bitte _____ in mein Büro - wir müssen sprechen!",
        translation: "(Wejdź proszę tutaj do mojego biura - musimy porozmawiać!)",
        options: ["herein", "hinein", "heraus", "hinaus"],
        correct: "herein",
        explanation: "Forma 'herein kommen' (wejdź DO ŚRODKA do mówiącego) - jesteś w biurze, wzywasz kogoś do wejścia. 'Her-' do ciebie, 'ein' do środka. Formalna sytuacja w pracy. Wezwanie do biura 'musimy porozmawiać' może być stresujące - ale czasem po prostu rutynowe sprawy służbowe."
      },
      {
        id: "hin_her_15",
        question: "Ich gehe jetzt _____ aus dem Raum raus - mir ist zu heiß!",
        translation: "(Wychodzę teraz tam z pokoju - jest mi za gorąco!)",
        options: ["hinaus", "heraus", "hinein", "herein"],
        correct: "hinaus",
        explanation: "Forma 'hinausgehen' (wyjść NA ZEWNĄTRZ od siebie) - opuszczasz pomieszczenie idąc Z DALA od obecnej pozycji. 'Hin-' od siebie, 'aus' na zewnątrz. Uciekanie z przegrzanego pomieszczenia. Kontrola temperatury wpływa na komfort - czasem najprostsze rozwiązanie to po prostu opuścić zbyt ciepłe miejsce."
      }
    ]
  }
};

export default part22Categories;
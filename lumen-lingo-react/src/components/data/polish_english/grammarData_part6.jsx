/**
 * POLISH → ENGLISH GRAMMAR - PART 6
 * 4 categories, 15 questions each - Advanced patterns
 */

import { Zap, Heart, Clock, Trophy } from "lucide-react";

export const part6Categories = {
  modal_verbs_nuances: {
    name: "Czasowniki modalne - niuanse",
    description: "Can, could, may, might, must, should",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "modal_1",
        question: "You _____ be tired after working twelve hours straight without any break today.",
        translation: "(Musisz być zmęczony po pracy dwunastu godzin z rzędu bez żadnej przerwy dzisiaj)",
        options: ["must", "should", "can", "might"],
        correct: "must",
        explanation: "'Must' używamy dla logicznej pewności - jesteś pewien na podstawie dowodów! Praca przez 12 godzin definitywnie powoduje zmęczenie. To silna dedukcja oparta na faktach. Różni się od 'should' (oczekiwanie) czy 'might' (możliwość). 'Must' pokazuje że jesteś przekonany o swoim wniosku - dowody czynią to oczywistym."
      },
      {
        id: "modal_2",
        question: "It _____ rain later according to the weather forecast, so take an umbrella just to be safe.",
        translation: "(Może później padać według prognozy pogody, więc weź parasol na wszelki wypadek)",
        options: ["might", "must", "should", "will"],
        correct: "might",
        explanation: "'Might' pokazuje możliwość bez pewności! Mniej pewne niż 'may', znacznie mniej niż 'will'. Pogoda jest nieprzewidywalna, więc 'might' jest odpowiednie. To niskie-średnie prawdopodobieństwo - jest możliwe ale nie jesteś przekonany. Dobre dla sytuacji z niepewnością gdzie przygotowujesz się na możliwości."
      },
      {
        id: "modal_3",
        question: "You _____ smoke in this building, it's against the law and there are no smoking signs everywhere.",
        translation: "(Nie wolno ci palić w tym budynku, jest to przeciwko prawu i są wszędzie znaki zakazu palenia)",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: "mustn't",
        explanation: "'Mustn't' oznacza zakaz - jest zabronione! Silny negatywny obowiązek. Różni się od 'don't have to' które znaczy 'nie musisz' (możesz jeśli chcesz). 'Mustn't' dotyczy zasad i praw - absolutnie nie możesz tego zrobić. To silniejsze niż 'shouldn't' (rada)."
      },
      {
        id: "modal_4",
        question: "You _____ wear a suit to the party tomorrow, casual clothes are perfectly fine and acceptable.",
        translation: "(Nie musisz nosić garnituru na imprezę jutro, casualowe ubrania są całkowicie w porządku i akceptowalne)",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: "don't have to",
        explanation: "'Don't have to' oznacza brak obowiązku - to opcjonalne! MOŻESZ nosić garnitur jeśli chcesz, ale nie jest wymagane. Bardzo różne od 'mustn't' (zabronione). To o braku konieczności. Częsta pomyłka dla Polaków - 'nie musisz' tłumaczy się na 'don't have to', NIE 'mustn't'."
      },
      {
        id: "modal_5",
        question: "_____ you help me carry these heavy shopping bags upstairs to my apartment on the third floor?",
        translation: "(Czy mógłbyś pomóc mi zanieść te ciężkie torby na zakupy na górę do mojego mieszkania na trzecim piętrze?)",
        options: ["Could", "Can", "Must", "Should"],
        correct: "Could",
        explanation: "'Could' jest bardziej grzeczne niż 'can' dla próśb! Oba pytają o pomoc, ale 'could' jest łagodniejsze i bardziej formalne. Używaj 'could' z nieznajomymi lub w formalnych sytuacjach, 'can' z przyjaciółmi i rodziną. Forma przeszła 'could' tworzy grzeczny dystans - jest mniej bezpośrednia i bardziej pełna szacunku."
      },
      {
        id: "modal_6",
        question: "She _____ speak five languages fluently after living in different countries for many years.",
        translation: "(Potrafi mówić płynnie w pięciu językach po mieszkaniu w różnych krajach przez wiele lat)",
        options: ["can", "could", "may", "should"],
        correct: "can",
        explanation: "'Can' dla obecnej umiejętności! Ma tę zdolność TERAZ. 'Could' byłoby przeszłą umiejętnością (potrafiła gdy była młodsza) lub warunkową (potrafiłaby GDYBY ćwiczyła). Obecna umiejętność = 'can'. To proste - opisywanie co ktoś potrafi zrobić obecnie."
      },
      {
        id: "modal_7",
        question: "You _____ have told me about the meeting! Now I missed it and didn't know it was today.",
        translation: "(Powinieneś był mi powiedzieć o spotkaniu! Teraz go przegapiłem i nie wiedziałem że było dzisiaj)",
        options: ["should", "must", "could", "would"],
        correct: "should",
        explanation: "'Should have + past participle' dla przeszłej krytyki lub żalu! Nie zrobiłeś czegoś ale byłeś oczekiwany to zrobić. 'Should have told' = to była twoja odpowiedzialność ale zawiodłeś. Wyraża łagodną winę lub rozczarowanie przeszłą akcją. Bardzo częste dla narzekania na to co się nie stało."
      },
      {
        id: "modal_8",
        question: "_____ I use your phone to make a quick call? Mine has run out of battery completely.",
        translation: "(Czy mogę użyć twojego telefonu, żeby wykonać szybkie połączenie? Mój całkowicie się rozładował)",
        options: ["May", "Can", "Must", "Should"],
        correct: "May",
        explanation: "'May I' to najbardziej formalny sposób pytania o pozwolenie! Bardzo grzeczne. 'Can I' też jest poprawne ale mniej formalne. 'May' to tradycyjna grzeczna forma uczona w szkołach. Z nieznajomymi lub w formalnych sytuacjach 'may' brzmi bardziej z szacunkiem. Oba działają ale 'may' jest bezpieczniejsze gdy chcesz maksymalnej grzeczności."
      },
      {
        id: "modal_9",
        question: "When I was younger, I _____ run five kilometers without getting tired or out of breath.",
        translation: "(Kiedy byłem młodszy, potrafiłem biec pięć kilometrów bez zmęczenia lub zadyszki)",
        options: ["could", "can", "may", "might"],
        correct: "could",
        explanation: "'Could' dla przeszłej umiejętności! MIAŁEŚ tę zdolność wcześniej ale może nie teraz. 'Can' to obecna umiejętność. To prosta przeszłość od 'can' - co potrafiłeś robić w przeszłości. Często używane nostalgicznie dla mówienia o umiejętnościach które straciłeś z wiekiem lub czasem."
      },
      {
        id: "modal_10",
        question: "You _____ eat more vegetables and less junk food if you want to be healthier and feel better.",
        translation: "(Powinieneś jeść więcej warzyw i mniej niezdrowego jedzenia, jeśli chcesz być zdrowszy i czuć się lepiej)",
        options: ["should", "must", "can", "may"],
        correct: "should",
        explanation: "'Should' dla rad i rekomendacji! To sugestia, nie obowiązek. Łagodniejsze niż 'must'. Gdy dajesz zdrowotne rady lub sugestie, 'should' jest perfekcyjne - rekomenduje bez zmuszania. Pokazuje że uważasz to za dobry pomysł ale zostawiasz wybór im."
      },
      {
        id: "modal_11",
        question: "He _____ be at home now - I saw his car in the driveway when I passed by just five minutes ago.",
        translation: "(Musi być w domu teraz - widziałem jego samochód na podjeździe, kiedy przechodziłem pięć minut temu)",
        options: ["must", "can", "should", "might"],
        correct: "must",
        explanation: "'Must' dla dedukcji z silnym dowodem! Jesteś prawie pewien bo widziałeś jego samochód. To logiczny wniosek, nie obowiązek. 'Must be' = jestem bardzo pewien że tam jest. Różne od obowiązku 'must' - to samo słowo, inna funkcja. Kontekst pokazuje czy to dedukcja czy obowiązek."
      },
      {
        id: "modal_12",
        question: "_____ you mind closing the window? It's getting quite cold in here with the breeze coming through.",
        translation: "(Czy mógłbyś zamknąć okno? Robi się dość zimno tutaj z wiatrem wchodzącym przez nie)",
        options: ["Would", "Will", "Could", "Should"],
        correct: "Would",
        explanation: "'Would you mind' to ekstremalnie grzeczna prośba! Nawet bardziej grzeczna niż 'could you'. Zauważ negatywną logikę - jeśli im nie przeszkadza, zrobią to. To formalne i pełne szacunku. Używaj dla przysług gdzie nie chcesz narzucać. Bardzo brytyjski styl grzeczności."
      },
      {
        id: "modal_13",
        question: "I _____ swim when I was five years old, my father taught me during our summer holidays.",
        translation: "(Umiałem pływać, kiedy miałem pięć lat, mój ojciec nauczył mnie podczas naszych letnich wakacji)",
        options: ["could", "can", "was able to", "may"],
        correct: "could",
        explanation: "'Could' dla ogólnej przeszłej umiejętności! Miałeś tę zdolność jako dziecko. Dla jednorazowych osiągnięć używaj 'was able to', ale dla ogólnej umiejętności w przeszłości używaj 'could'. 'Could swim' znaczy że miałeś tę zdolność dostępną, czy z niej korzystałeś czy nie. To opisuje możliwość, nie konkretne przypadki."
      },
      {
        id: "modal_14",
        question: "Students _____ not use their phones during exams, it's strictly prohibited by school rules.",
        translation: "(Studenci nie mogą używać telefonów podczas egzaminów, jest to surowo zabronione przez zasady szkolne)",
        options: ["may", "can", "must", "should"],
        correct: "may",
        explanation: "'May not' dla formalnego zakazu! Bardziej formalne niż 'can't' czy 'mustn't'. Często używane w zasadach i regulacjach. 'May' brzmi oficjalnie i autorytatywnie. Szkoły, firmy, dokumenty prawne używają 'may not' żeby brzmieć profesjonalnie. To to samo znaczenie co 'must not' ale czuje się bardziej instytucjonalnie."
      },
      {
        id: "modal_15",
        question: "We _____ arrive late to the airport yesterday, so we missed our flight to Barcelona unfortunately.",
        translation: "(Niestety przyjechaliśmy późno na lotnisko wczoraj, więc przegapiliśmy nasz lot do Barcelony)",
        options: ["had to", "must", "should", "could"],
        correct: "had to",
        explanation: "'Had to' to forma przeszła od 'must' dla przeszłego obowiązku! 'Must' nie ma formy przeszłej - używaj 'had to' zamiast. To opisuje coś do czego byłeś zmuszony (lub się stało) w przeszłości. Używamy tego ironicznie - przybycie późno nie było wybrane, się stało. Przeszła konieczność używa 'had to', nie 'must'."
      }
    ]
  },

  reported_speech: {
    name: "Mowa zależna",
    description: "Jak przekazywać słowa innych osób",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "rep_1",
        question: "She said she _____ tired and wanted to go home early from the party.",
        translation: "(Powiedziała, że jest zmęczona i chce iść do domu wcześnie z imprezy)",
        options: ["was", "is", "has been", "were"],
        correct: "was",
        explanation: "W mowie zależnej, present simple przesuwa się do past simple! Powiedziała 'I AM tired' → Powiedziała że WAS tired. Czas cofa się o jeden krok. To nazywa się backshift - gdy raportujemy przeszłe stwierdzenia, przesuwamy czasy wstecz w czasie żeby pokazać dystans czasowy od oryginalnych słów."
      },
      {
        id: "rep_2",
        question: "He told me that he _____ to Paris the previous summer and had loved it there.",
        translation: "(Powiedział mi, że jeździł do Paryża poprzedniego lata i bardzo mu się tam podobało)",
        options: ["had been", "has been", "was", "went"],
        correct: "had been",
        explanation: "Past simple przesuwa się do past perfect w mowie zależnej! Powiedział 'I went' → Powiedział że HAD BEEN. Gdy oryginał był w przeszłym, mowa zależna używa past perfect żeby pokazać że było jeszcze wcześniej. To tworzy warstwy czasu - past perfect jest dalej wstecz niż past simple."
      },
      {
        id: "rep_3",
        question: "My teacher asked me where I _____ and why I wasn't in class during the important lesson.",
        translation: "(Mój nauczyciel zapytał mnie gdzie byłem i czemu nie było mnie w klasie podczas ważnej lekcji)",
        options: ["had been", "have been", "was", "am"],
        correct: "had been",
        explanation: "Pytania w mowie zależnej też się przesuwają wstecz! 'Where were you?' → zapytał gdzie HAD BEEN. Słowo pytające zostaje, ale czas się przesuwa wstecz. Past simple staje się past perfect. To utrzymuje relację czasową - jego pytanie było przeszłe, twoja nieobecność była przed tym."
      },
      {
        id: "rep_4",
        question: "She said she _____ help me with my homework later that evening after dinner.",
        translation: "(Powiedziała, że pomoże mi z moją pracą domową później tego wieczoru po kolacji)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'Will' przesuwa się do 'would' w mowie zależnej! Powiedziała 'I WILL help' → Powiedziała że WOULD help. Przyszłość staje się warunkową. To pokazuje przyszłość z perspektywy przeszłego momentu mówienia. 'Would' to przeszła/raportowana forma 'will'."
      },
      {
        id: "rep_5",
        question: "They said they _____ coming to the party because they had other plans already scheduled.",
        translation: "(Powiedzieli, że nie przychodzą na imprezę, bo mieli inne plany już zaplanowane)",
        options: ["weren't", "aren't", "won't", "hadn't"],
        correct: "weren't",
        explanation: "Past continuous przesuwa się do past continuous w mowie zależnej! Powiedzieli 'We AREN'T coming' → Powiedzieli że WEREN'T coming. Negatywne zdania podążają tą samą zasadą backshift. 'Not' zostaje ale czas się przesuwa wstecz. Formy ciągłe zachowują ciągłość ale pomocnik przesuwa się do przeszłego."
      },
      {
        id: "rep_6",
        question: "He told us to _____ quiet because the baby was sleeping upstairs in the nursery room.",
        translation: "(Powiedział nam, żebyśmy byli cicho, bo dziecko spało na górze w pokoju dziecinnym)",
        options: ["be", "are", "were", "being"],
        correct: "be",
        explanation: "Rozkazy w mowie zależnej używają 'to + infinitive'! 'Be quiet!' → powiedział nam TO BE quiet. Tryb rozkazujący konwertuje do bezokolicznika z 'told/asked someone to do'. Struktura rozkazu znika, zastępowana przez 'to' + czasownik bazowy. To standardowy wzorzec dla raportowania rozkazów lub próśb."
      },
      {
        id: "rep_7",
        question: "My friend said she _____ never been to Italy before, it was her first time visiting Europe.",
        translation: "(Moja przyjaciółka powiedziała, że nigdy wcześniej nie była we Włoszech, był to jej pierwszy raz w Europie)",
        options: ["had", "has", "have", "hasn't"],
        correct: "had",
        explanation: "Present perfect przesuwa się do past perfect! Powiedziała 'I have never been' → Powiedziała że HAD never been. 'Never' zostaje ale 'have' staje się 'had'. Past perfect pokazuje doświadczenie (lub jego brak) do punktu mówienia w przeszłości. Warstwy przeszłości w przeszłości."
      },
      {
        id: "rep_8",
        question: "The doctor advised me _____ more exercise and eat healthier food to improve my overall health.",
        translation: "(Lekarz doradził mi, żebym więcej ćwiczył i jadł zdrowsze jedzenie, żeby poprawić moje ogólne zdrowie)",
        options: ["to do", "doing", "do", "that I do"],
        correct: "to do",
        explanation: "'Advise/tell/ask someone TO do' to wzorzec! Raportowanie rady używa bezokolicznika z 'to'. 'Advised me to do' konwertuje sugestię lekarza do raportowanej formy. Ta struktura działa dla wszystkich czasowników doradzających - większość bierze 'to + infinitive'."
      },
      {
        id: "rep_9",
        question: "She asked me if I _____ help her move furniture the following weekend, and I said yes.",
        translation: "(Zapytała mnie, czy mógłbym pomóc jej przestawić meble w następny weekend, i powiedziałem tak)",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'Can' przesuwa się do 'could' w raportowanych pytaniach tak/nie! Zapytała 'CAN you help?' → zapytała czy COULD help. Pytania stają się zdaniami 'if/whether' z przesuniętymi czasami. 'Could' to przeszła forma 'can' używana w raportowaniu, nie o przeszłym czasie ale o przesunięciu perspektywy."
      },
      {
        id: "rep_10",
        question: "My boss said I _____ leave early that day because I had a doctor's appointment in the afternoon.",
        translation: "(Mój szef powiedział, że mogę wyjść wcześnie tego dnia, bo miałem wizytę u lekarza po południu)",
        options: ["could", "can", "may", "might"],
        correct: "could",
        explanation: "'Can' dla pozwolenia przesuwa się do 'could'! Szef powiedział 'You CAN leave' → powiedział że COULD leave. Pozwolenie w przeszłym kontekście potrzebuje 'could'. To pokazuje że pozwolenie zostało udzielone w przeszłości. Ta sama zasada backshift - obecna możliwość staje się przeszłą możliwością w mowie zależnej."
      },
      {
        id: "rep_11",
        question: "They promised they _____ arrive on time for the wedding ceremony without fail.",
        translation: "(Obiecali, że przyjdą na czas na ceremonię ślubną bez zawodu)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'Promise' + would dla raportowanych obietnic! Obiecali 'We WILL arrive' → obiecali że WOULD arrive. Przyszłe zobowiązania przesuwają się do warunkowej w raportach. 'Would' pokazuje przyszłość z przeszłej perspektywy - co było przyszłością gdy mówili."
      },
      {
        id: "rep_12",
        question: "She complained that the coffee _____ too strong and she needed more milk in it.",
        translation: "(Narzekała, że kawa jest za mocna i potrzebuje więcej mleka do niej)",
        options: ["was", "is", "has been", "had been"],
        correct: "was",
        explanation: "Narzekania i stwierdzenia o sytuacjach przesuwają się wstecz! Powiedziała 'The coffee IS too strong' → narzekała że WAS too strong. Nawet jeśli kawa może wciąż być mocna, mowa zależna przesuwa czas żeby pokazać dystans czasowy. To standardowy backshift dla wszystkich opisowych stwierdzeń w przeszłym kontekście."
      },
      {
        id: "rep_13",
        question: "He mentioned that he _____ working on a new project for the past three months without a break.",
        translation: "(Wspomniał, że pracuje nad nowym projektem od trzech ostatnich miesięcy bez przerwy)",
        options: ["had been", "has been", "was", "is"],
        correct: "had been",
        explanation: "Present perfect continuous przesuwa się do past perfect continuous! Powiedział 'I HAVE BEEN working' → wspomniał że HAD BEEN working. Podwójny backshift - 'have' staje się 'had', ciągła forma zostaje ciągła. To pokazuje trwającą akcję do przeszłego momentu mówienia, utrzymując nacisk na czas trwania."
      },
      {
        id: "rep_14",
        question: "The waiter asked us what we _____ like to order from the menu for our main course.",
        translation: "(Kelner zapytał nas co chcielibyśmy zamówić z menu na nasze główne danie)",
        options: ["would", "will", "want", "wanted"],
        correct: "would",
        explanation: "'Would like' zostaje jako 'would like' w raportowanych pytaniach! To już forma warunkowa, więc się nie zmienia. 'What would you like?' → zapytał co WOULD like. 'Would' to warunkowa, i nie ma dalszego backshift od warunkowej - zostaje warunkowa w raportowaniu."
      },
      {
        id: "rep_15",
        question: "My father said I _____ use his car that weekend while he was away on a business trip.",
        translation: "(Mój ojciec powiedział, że mogę użyć jego samochodu w ten weekend, podczas gdy był na wyjeździe biznesowym)",
        options: ["could", "can", "must", "should"],
        correct: "could",
        explanation: "Pozwolenie 'can' staje się 'could' w mowie zależnej! Ojciec powiedział 'You CAN use' → powiedział że COULD use. Przeszłe pozwolenie używa 'could'. To raportowane pozwolenie, nie umiejętność. Struktura utrzymuje znaczenie pozwolenia podczas przesuwania czasu żeby pasował do przeszłego kontekstu raportowania."
      }
    ]
  },

  passive_voice_uses: {
    name: "Strona bierna - użycia",
    description: "Kiedy i jak używać passive voice",
    icon: Clock,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "pass_1",
        question: "This beautiful cathedral _____ built in the 14th century by skilled craftsmen from across Europe.",
        translation: "(Ta piękna katedra została zbudowana w 14. wieku przez wykwalifikowanych rzemieślników z całej Europy)",
        options: ["was", "is", "has been", "had been"],
        correct: "was",
        explanation: "Strona bierna używa 'be + past participle'! 'Was built' to bierna. Używaj biernej gdy AKCJA ma większe znaczenie niż KTO to zrobił. Fakty historyczne często używają biernej - istnienie katedry jest ważniejsze niż konkretni budowniczowie. Struktura: be (w poprawnym czasie) + past participle."
      },
      {
        id: "pass_2",
        question: "English _____ spoken by millions of people worldwide as a first or second language daily.",
        translation: "(Angielski jest używany przez miliony ludzi na całym świecie jako pierwszy lub drugi język codziennie)",
        options: ["is", "was", "has been", "will be"],
        correct: "is",
        explanation: "Present simple bierna dla obecnych faktów! 'Is spoken' opisuje trwającą obecną sytuację. Używaj biernej dla ogólnych prawd gdzie podmiot (kto to robi) jest oczywisty lub nieważny. Miliony mówią, ale fokus jest na JĘZYKU będącym szeroko używanym, nie na wyliczaniu mówiących."
      },
      {
        id: "pass_3",
        question: "The package _____ delivered to your house tomorrow morning between 9 and 11 AM by courier.",
        translation: "(Paczka zostanie dostarczona do twojego domu jutro rano między 9 a 11 przez kuriera)",
        options: ["will be", "is", "was", "has been"],
        correct: "will be",
        explanation: "Przyszła bierna używa 'will be + past participle'! 'Will be delivered' dla przyszłej biernej akcji. Używaj biernej dla rozkładów i ogłoszeń gdzie odbiorca ma większe znaczenie niż dostarczyciel. Paczka i czas są ważne, konkretna osoba kuriera nie jest."
      },
      {
        id: "pass_4",
        question: "The car _____ being repaired at the mechanic's shop right now, so we can't use it today.",
        translation: "(Samochód jest właśnie naprawiany w warsztacie mechanika, więc nie możemy go użyć dzisiaj)",
        options: ["is", "was", "has", "will be"],
        correct: "is",
        explanation: "Present continuous bierna: 'is being + past participle'! 'Is being repaired' = naprawa dzieje się TERAZ. Używaj ciągłej biernej dla trwających akcji w toku. Struktura to 'be + being + past participle' - brzmi złożenie ale to standard dla akcji dziejących się w tym momencie."
      },
      {
        id: "pass_5",
        question: "The Mona Lisa _____ painted by Leonardo da Vinci in the early 16th century in Renaissance Italy.",
        translation: "(Mona Lisa została namalowana przez Leonardo da Vinci na początku 16. wieku w renesansowych Włoszech)",
        options: ["was", "is", "has been", "had been"],
        correct: "was",
        explanation: "Bierna dla słynnych dzieł sztuki skupia się na dziele, nie artyście! Nawet jeśli da Vinci jest wspomniany, bierna podkreśla OBRAZ. W historii sztuki bierna jest częsta bo dzieło jest tematem. Struktura 'was painted by' jest standardowa dla historycznych dzieł twórczych."
      },
      {
        id: "pass_6",
        question: "All the food _____ already been eaten by the time we arrived at the party late.",
        translation: "(Całe jedzenie zostało już zjedzone zanim przyjechaliśmy na imprezę późno)",
        options: ["had", "has", "have", "was"],
        correct: "had",
        explanation: "Past perfect bierna: 'had been + past participle'! 'Had been eaten' pokazuje akcję ukończoną PRZED inną przeszłą akcją (przybycie). Używaj gdy jedna przeszła akcja stała się przed inną przeszłą akcją. Jedzenie skończyło się przed przybyciem - past perfect pokazuje wcześniejszą przeszłość."
      },
      {
        id: "pass_7",
        question: "This room hasn't _____ cleaned for weeks, it's really dusty and messy everywhere you look.",
        translation: "(Ten pokój nie był sprzątany od tygodni, jest naprawdę zakurzony i brudny wszędzie gdzie spojrzysz)",
        options: ["been", "being", "be", "was"],
        correct: "been",
        explanation: "Present perfect bierna: 'has/have (not) been + past participle'! 'Hasn't been cleaned' łączy przeszły brak sprzątania z obecnym brudnym stanem. Rezultat (bałagan) istnieje TERAZ. Perfekcyjna bierna pokazuje jak przeszła bezczynność tworzy obecną sytuację - bardzo użyteczne dla opisywania obecnych stanów spowodowanych przeszłym zaniedbaniem."
      },
      {
        id: "pass_8",
        question: "The suspect is _____ questioned by police detectives about the robbery that occurred last night.",
        translation: "(Podejrzany jest przesłuchiwany przez detektywów policji o napad, który miał miejsce wczoraj w nocy)",
        options: ["being", "been", "be", "was"],
        correct: "being",
        explanation: "Present continuous bierna podkreśla akcję TERAZ! 'Is being questioned' = przesłuchanie dzieje się w tym momencie. Raporty informacyjne często tego używają do opisywania obecnych trwających oficjalnych akcji. Aspekt ciągły pokazuje że jest w toku, nie skończone - śledztwo jest aktywne."
      },
      {
        id: "pass_9",
        question: "Smoking _____ not permitted inside the building according to new health and safety regulations.",
        translation: "(Palenie nie jest dozwolone wewnątrz budynku według nowych regulacji zdrowia i bezpieczeństwa)",
        options: ["is", "was", "has", "will"],
        correct: "is",
        explanation: "Bierna dla zasad i regulacji! 'Is not permitted' to formalny sposób stwierdzenia zakazu. Bardziej oficjalne niż 'you can't smoke'. Bierna usuwa osobistą winę - to ZASADA, nie osobisty atak. Instytucje używają biernej dla neutralnego, autorytatywnego tonu w regulacjach."
      },
      {
        id: "pass_10",
        question: "The results of the exam _____ be announced next week during the Monday morning assembly.",
        translation: "(Wyniki egzaminu zostaną ogłoszone w przyszłym tygodniu podczas poniedziałkowego porannego apelu)",
        options: ["will", "are", "were", "have"],
        correct: "will",
        explanation: "Przyszła bierna dla zaplanowanych ogłoszeń! 'Will be announced' pokazuje planowaną przyszłą akcję. KTO ogłasza (nauczyciele/administracja) jest mniej ważne niż CO i KIEDY. Bierna jest perfekcyjna dla oficjalnych rozkładów i ogłoszeń gdzie wydarzenie ma większe znaczenie niż osoba je wykonująca."
      },
      {
        id: "pass_11",
        question: "The new shopping mall _____ being constructed for over two years now, and it's still not finished!",
        translation: "(Nowe centrum handlowe jest budowane od ponad dwóch lat i wciąż nie jest skończone!)",
        options: ["has been", "is", "was", "had been"],
        correct: "has been",
        explanation: "Present perfect continuous bierna upraszcza się! Zamiast 'has been being constructed' używamy 'has been constructed'. Pokazuje trwającą akcję od przeszłości do teraz. Budowa zaczęła się lata temu i trwa - perfect continuous pokazuje czas trwania rozciągający się do teraźniejszości."
      },
      {
        id: "pass_12",
        question: "The Taj Mahal _____ visited by millions of tourists every year who come from around the world.",
        translation: "(Taj Mahal jest odwiedzany przez miliony turystów każdego roku, którzy przybywają z całego świata)",
        options: ["is", "was", "has been", "will be"],
        correct: "is",
        explanation: "Present simple bierna dla powtarzających się akcji i faktów! 'Is visited' opisuje co dzieje się regularnie. Fokus na POMNIKU otrzymującym odwiedzających, nie na turystach odwiedzających. Bierna podkreśla co dzieje się CZEMUŚ jako regularny wzorzec. Miejsca turystyczne często tak opisywane."
      },
      {
        id: "pass_13",
        question: "The letter _____ written yesterday but it hasn't been sent yet because I forgot to buy stamps.",
        translation: "(List został napisany wczoraj, ale nie został jeszcze wysłany, bo zapomniałem kupić znaczki)",
        options: ["was", "is", "has been", "had been"],
        correct: "was",
        explanation: "Past simple bierna dla ukończonych akcji w konkretnym czasie! 'Was written yesterday' - akcja skończyła się wtedy. Druga część używa present perfect 'hasn't been sent' bo połączenie do teraz (wciąż nie wysłany). Mieszaj czynną i bierną czasy gdy potrzeba - każda klauzula wybiera bazując na swoim znaczeniu."
      },
      {
        id: "pass_14",
        question: "All employees _____ required to attend the mandatory safety training session next Monday morning.",
        translation: "(Wszyscy pracownicy są zobowiązani do uczestniczenia w obowiązkowej sesji szkoleniowej z bezpieczeństwa w przyszły poniedziałek rano)",
        options: ["are", "is", "were", "have been"],
        correct: "are",
        explanation: "Bierna dla wymagań firmowych brzmi bardziej formalnie! 'Are required' jest mniej surowe niż 'must attend'. Bierna łagodzi rozkazy przez usunięcie bezpośredniego nakazu. Komunikacja biznesowa często używa biernej żeby brzmieć profesjonalnie i mniej osobiście - to FIRMA wymaga, nie konkretny szef rozkazujący."
      },
      {
        id: "pass_15",
        question: "This book _____ been translated into over fifty different languages since it was first published decades ago.",
        translation: "(Ta książka została przetłumaczona na ponad pięćdziesiąt różnych języków odkąd została po raz pierwszy opublikowana dziesięciolecia temu)",
        options: ["has", "have", "had", "is"],
        correct: "has",
        explanation: "Present perfect bierna pokazuje rezultat trwający do teraz! 'Has been translated' znaczy tłumaczenia stały się w przeszłości i teraz istnieją w wielu językach. Rezultat (dostępność w 50 językach) jest obecny. Perfekcyjna bierna łączy przeszłą akcję z obecnym stanem - bardzo częste dla opisywania obecnych sytuacji stworzonych przez przeszłe akcje."
      }
    ]
  },

  used_to_patterns: {
    name: "Wzorce z 'used to'",
    description: "Wyrażanie przeszłych nawyków i stanów",
    icon: Trophy,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "used_1",
        question: "I _____ to play football every weekend when I was younger and more energetic.",
        translation: "(Grywałem w piłkę co weekend, kiedy byłem młodszy i bardziej energiczny)",
        options: ["used", "use", "am used", "was used"],
        correct: "used",
        explanation: "'Used to + infinitive' dla przeszłych nawyków które się skończyły! Grałeś w piłkę wcześniej ale już nie teraz. Pokazuje kontrast między przeszłością a teraźniejszością. Bardzo częste dla wspomnień z dzieciństwa i starych nawyków. Struktura jest ustalona - 'used to' + czasownik bazowy. Żadna inna forma 'use' tu nie działa."
      },
      {
        id: "used_2",
        question: "She didn't _____ to like spicy food, but now she loves it and eats it regularly.",
        translation: "(Nie lubiła pikantnego jedzenia, ale teraz to kocha i je regularnie)",
        options: ["use", "used", "uses", "using"],
        correct: "use",
        explanation: "Negatywne 'used to' staje się 'didn't use to'! 'Used' zmienia się na 'use' (forma bazowa) po 'didn't'. To standardowy wzorzec negacji - pomocnik 'did' bierze przeszłość, główny czasownik staje się bazowy. 'Didn't used to' jest gramatycznie błędne ale częste w mowie."
      },
      {
        id: "used_3",
        question: "_____ you use to live in this neighborhood before you moved to the new apartment downtown?",
        translation: "(Czy mieszkałeś w tej dzielnicy zanim się przeprowadziłeś do nowego mieszkania w centrum?)",
        options: ["Did", "Do", "Have", "Were"],
        correct: "Did",
        explanation: "Pytania z 'used to' używają 'did'! 'Did you use to live' to poprawna forma. Znowu, 'use' staje się formą bazową po 'did'. 'Used you to' jest staromodne brytyjskie. Nowoczesny angielski używa 'did you use to' z bazową formą 'use'. To podąża standardową formacją pytań z 'did'."
      },
      {
        id: "used_4",
        question: "I'm _____ to getting up early now after years of waking at 6 AM for work every morning.",
        translation: "(Jestem przyzwyczajony do wstawania wcześnie teraz po latach budzenia się o 6 rano do pracy co rano)",
        options: ["used", "use", "using", "uses"],
        correct: "used",
        explanation: "'Be used to + gerund' znaczy być przyzwyczajonym! CAŁKOWICIE RÓŻNE od 'used to + infinitive'. 'Used to' (przeszły nawyk) vs 'be used to' (obecne przyzwyczajenie). Po 'be used to' używaj GERUND nie infinitive. To o byciu komfortowym z czymś przez doświadczenie."
      },
      {
        id: "used_5",
        question: "There _____ to be a cinema here on this street corner, but it closed down five years ago.",
        translation: "(Kiedyś było kino tutaj na tym rogu ulicy, ale zamknęło się pięć lat temu)",
        options: ["used", "use", "was", "is"],
        correct: "used",
        explanation: "'There used to be' dla przeszłego istnienia! Coś istniało wcześniej ale już nie teraz. To łączy 'there is/are' (istnienie) z 'used to' (przeszłość która się zmieniła). Pokazuje zmianę w lokalizacji/istnieniu. Bardzo częste dla mówienia o tym jak miejsca się zmieniły - co kiedyś tam było ale już nie jest."
      },
      {
        id: "used_6",
        question: "It took me months to _____ used to driving on the left side of the road in the UK.",
        translation: "(Zajęło mi miesiące, żeby przyzwyczaić się do jazdy po lewej stronie drogi w UK)",
        options: ["get", "be", "become", "make"],
        correct: "get",
        explanation: "'Get used to' znaczy się przyzwyczajać! Proces adaptacji. Różne od 'be used to' (już zaznajomiony). 'Get' pokazuje zmianę - STAJESZ SIĘ komfortowy. 'To' to przyimek tutaj (nie marker bezokolicznika), więc następuje gerund: 'get used to driving'. To o procesie dostosowania."
      },
      {
        id: "used_7",
        question: "My grandfather _____ tell us fascinating stories about his adventures during World War II every evening.",
        translation: "(Mój dziadek opowiadał nam fascynujące historie o swoich przygodach podczas drugiej wojny światowej co wieczór)",
        options: ["would", "used to", "was", "is"],
        correct: "would",
        explanation: "'Would + infinitive' dla powtarzających się przeszłych akcji z nostalgią! Podobne do 'used to' ale bardziej emocjonalne i literackie. 'Would tell' podkreśla powtórzenie czule. Nie możesz używać 'would' dla przeszłych stanów (nie można 'would be tall'), tylko akcje. Bardziej poetyckie niż 'used to' - wywołuje miłe wspomnienia."
      },
      {
        id: "used_8",
        question: "I'm not _____ to this hot weather yet, I come from a cold climate in northern Europe.",
        translation: "(Nie jestem jeszcze przyzwyczajony do tej gorącej pogody, pochodzę z zimnego klimatu w północnej Europie)",
        options: ["used", "use", "using", "uses"],
        correct: "used",
        explanation: "'Be used to' (forma negatywna) pokazuje brak zaznajomienia! NIE jesteś komfortowy z gorącą pogodą bo brakuje ci doświadczenia. 'Not used to' wyjaśnia dyskomfort lub trudność. Częste dla wyjaśniania czemu zmagasz się z czymś - nie zaadaptowałeś się jeszcze bo to nowe dla twojego doświadczenia."
      },
      {
        id: "used_9",
        question: "We _____ have a dog when I was growing up, but he died of old age ten years ago sadly.",
        translation: "(Mieliśmy psa, kiedy dorastałem, ale zmarł ze starości dziesięć lat temu, niestety)",
        options: ["used to", "would", "were", "are"],
        correct: "used to",
        explanation: "'Used to' działa zarówno dla akcji JAK I stanów! 'Used to have' pokazuje przeszły stan (posiadanie psa). 'Would' działa tylko dla powtarzających się akcji, nie stanów - nie można 'would have a dog'. Dla przeszłych stanów które się zmieniły, tylko 'used to' działa, czyniąc to bardziej wszechstronnym niż 'would'."
      },
      {
        id: "used_10",
        question: "Are you _____ to living alone now, or do you still miss having roommates and company?",
        translation: "(Czy jesteś już przyzwyczajony do mieszkania samemu, czy wciąż brakuje ci współlokatorów i towarzystwa?)",
        options: ["used", "use", "using", "got"],
        correct: "used",
        explanation: "Forma pytająca 'be used to'! 'Are you used to living' pyta o obecny poziom komfortu. Zauważ gerund po 'to' - 'living' nie 'live'. To pyta czy adaptacja jest ukończona - czy stałeś się komfortowy z tym przez doświadczenie czy to wciąż dziwne i trudne?"
      },
      {
        id: "used_11",
        question: "I can't _____ used to wearing glasses, they keep sliding down my nose and bothering me constantly.",
        translation: "(Nie mogę przyzwyczaić się do noszenia okularów, ciągle zsuwają mi się z nosa i ciągle mi przeszkadzają)",
        options: ["get", "be", "become", "make"],
        correct: "get",
        explanation: "'Can't get used to' znaczy zmaganie się z adaptacją! Dostosowanie się nie zachodzi mimo próbowania. 'Get used to' to proces, a 'can't' pokazuje że proces zawodzi. Częste dla narzekania na zmiany których nie możesz zaakceptować. Pokazuje opór lub trudność w adaptacji mimo upływu czasu."
      },
      {
        id: "used_12",
        question: "She _____ to be very shy as a teenager, but now she's confident and outgoing with everyone.",
        translation: "(Była bardzo nieśmiała jako nastolatka, ale teraz jest pewna siebie i towarzyska z wszystkimi)",
        options: ["used", "would", "was", "is"],
        correct: "used",
        explanation: "'Used to be' dla przeszłego stanu który się zmienił! Była nieśmiała wcześniej, teraz nie jest - wyraźna zmiana. 'Would be' nie działa dla stanów. To perfekcyjne dla pokazywania osobistego rozwoju i zmiany w czasie. Kontrast między wtedy a teraz jest kluczowy - 'used to' podkreśla transformację."
      },
      {
        id: "used_13",
        question: "I'm slowly getting _____ to the idea of moving to a different city for my new job next year.",
        translation: "(Powoli przyzwyczajam się do pomysłu przeprowadzki do innego miasta na nową pracę w przyszłym roku)",
        options: ["used", "use", "using", "uses"],
        correct: "used",
        explanation: "'Getting used to' pokazuje stopniową adaptację w toku! 'Slowly getting used to' podkreśla że proces trwa. To present continuous adaptacji - jesteś w środku stawania się komfortowym. 'Slowly' pokazuje że to zajmuje czas - nie natychmiastowa akceptacja ale stopniowe dostosowanie."
      },
      {
        id: "used_14",
        question: "He _____ smoke a pack of cigarettes a day, but he quit five years ago for his health.",
        translation: "(Palił paczkę papierosów dziennie, ale rzucił pięć lat temu dla swojego zdrowia)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'Used to' dla przeszłego nawyku który całkowicie się skończył! Nie pali WCALE teraz - totalna zmiana. 'Used to smoke' kontrastuje przeszły nawyk z obecnym zaprzestaniem. Perfekcyjne dla pokazywania zmian życiowych, szczególnie zdrowotnych ulepszeń. Zatrzymanie jest podkreślone - to nie tylko przeszłość, to ZATRZYMANA przeszłość."
      },
      {
        id: "used_15",
        question: "I'm _____ to working under pressure after years in high-stress corporate environments and deadlines.",
        translation: "(Jestem przyzwyczajony do pracy pod presją po latach w wysoce stresujących środowiskach korporacyjnych i terminach)",
        options: ["used", "use", "using", "got"],
        correct: "used",
        explanation: "'Be used to' dla obecnego komfortu z czymś! Doświadczenie sprawiło że jesteś komfortowy - presja cię już nie stresuje. To wartościowy stan - zaadaptowałeś się pomyślnie. Pokazuje ekspertyzę lub odporność rozwiniętą przez powtarzającą się ekspozycję. Zaznajomienie czyni to możliwym do zarządzania, nawet łatwym."
      }
    ]
  }
};

export default part6Categories;
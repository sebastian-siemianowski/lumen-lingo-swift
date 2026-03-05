/**
 * POLISH → GERMAN GRAMMAR - PART 19
 * 3 kategorie, 15 pytań każda
 */

import { Wallet, Heart, Award } from "lucide-react";

export const part19Categories = {
  verbs_with_dative_only: {
    name: "Czasowniki wymagające tylko celownika",
    description: "Helfen, danken, glauben, gefallen - zawsze Dativ",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "dat_only_1",
        question: "Ich helfe _____ jeden Tag bei den Hausaufgaben gerne.",
        translation: "(Pomagam jej każdego dnia przy zadaniach domowych chętnie)",
        options: ["ihr", "sie", "ihnen", "ihn"],
        correct: "ihr",
        explanation: "Czasownik 'helfen' ZAWSZE wymaga celownika - 'ihr' (jej) nie 'sie'. To wyjątek od typowego schematu gdzie większość czasowników używa biernika. Polski używa celownika podobnie - 'pomagam jej'. Lista czasowników tylko z celownikiem wymaga zapamiętania ale są bardzo użyteczne w codziennej komunikacji."
      },
      {
        id: "dat_only_2",
        question: "Ich danke _____ sehr für deine Hilfe beim Umzug am Wochenende.",
        translation: "(Bardzo dziękuję ci za twoją pomoc przy przeprowadzce w weekend)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Czasownik 'danken' (dziękować) wymaga celownika - 'dir' nie 'dich'. Dziękowanie za pomoc przy przeprowadzce to wyraz wdzięczności. Polski też używa celownika ('dziękuję tobie'). Pomoc przy przeprowadzce to jeden z testów prawdziwej przyjaźni - fizycznie wymagające ale buduje więzi."
      },
      {
        id: "dat_only_3",
        question: "Das neue Kleid gefällt _____ sehr gut, es ist wunderschön!",
        translation: "(Nowa sukienka bardzo mi się podoba, jest cudowna!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Czasownik 'gefallen' (podobać się) wymaga celownika - struktura odwrócona od polskiej! W niemieckim RZECZ (sukienka) podoba się OSOBIE (celownik). Polski mówi 'podoba mi się' podobnie używając celownika. Ta odwrotna logika (rzecz jako podmiot, osoba jako obiekt) wymaga przyzwyczajenia."
      },
      {
        id: "dat_only_4",
        question: "Ich glaube _____ nicht mehr, er hat mich zu oft enttäuscht.",
        translation: "(Nie wierzę mu już więcej, zawiódł mnie zbyt często)",
        options: ["ihm", "ihn", "er", "sein"],
        correct: "ihm",
        explanation: "Czasownik 'glauben' (wierzyć komuś) z osobą wymaga celownika - 'ihm' nie 'ihn'. To o utracie zaufania przez powtarzane rozczarowania. Polski używa celownika ('wierzę jemu'). Zaufanie jest kruche - wielokrotne zawody mogą je trwale zniszczyć."
      },
      {
        id: "dat_only_5",
        question: "Der Arzt rät _____ dringend, mehr Sport zu treiben regelmäßig.",
        translation: "(Lekarz radzi mi pilnie, żeby regularnie uprawiać więcej sportu)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Czasownik 'raten' (radzić) wymaga celownika - 'mir' (mnie) komu radzisz. Profesjonalna rada medyczna dotycząca zdrowia. Polski używa celownika ('radzi mi'). Rady lekarzy warto brać poważnie - ich wiedza może zapobiec problemom zdrowotnym w przyszłości."
      },
      {
        id: "dat_only_6",
        question: "Diese Musik gefällt _____ überhaupt nicht, sie ist zu laut!",
        translation: "(Ta muzyka w ogóle mi się nie podoba, jest za głośna!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Ponownie 'gefallen' z celownikiem - negatywna preferencja też używa celownika. Głośna muzyka może być męcząca. Forma 'gefällt mir nicht' standardowa dla wyrażania niechęci. Uczciwość o preferencjach muzycznych zapobiega niekomfortowym sytuacjom - każdy ma prawo do swoich gustów."
      },
      {
        id: "dat_only_7",
        question: "Ich vertraue _____ vollkommen in dieser wichtigen Angelegenheit.",
        translation: "(Całkowicie ci ufam w tej ważnej sprawie)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Czasownik 'vertrauen' (ufać) wymaga celownika - 'dir' (tobie) komu ufasz. Zaufanie w ważnych sprawach to dar. Polski używa celownika ('ufam tobie'). Pełne zaufanie to podstawa bliskich relacji - pokazuje głęboką więź i przekonanie o integralności drugiej osoby."
      },
      {
        id: "dat_only_8",
        question: "Das Essen schmeckt _____ heute besonders gut, sehr lecker!",
        translation: "(Jedzenie mi dzisiaj szczególnie smakuje, bardzo pyszne!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Czasownik 'schmecken' (smakować) wymaga celownika - 'mir' (mnie) komu smakuje. Szczególnie smaczny posiłek to przyjemność. Polski używa celownika ('smakuje mi'). Dobry smak jedzenia wpływa na nastrój - kulinarne przyjemności to jedno z prostych szczęść życia."
      },
      {
        id: "dat_only_9",
        question: "Ich gratuliere _____ herzlich zum bestandenen Examen erfolgreich!",
        translation: "(Gratuluję ci serdecznie zdanego egzaminu pomyślnie!)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Czasownik 'gratulieren' (gratulować) wymaga celownika - 'dir' (tobie) komu gratulujesz. Zdany egzamin to powód do świętowania. Polski też używa celownika ('gratuluję tobie'). Dzielenie się radością z sukcesów innych wzmacnia relacje - szczere gratulacje pokazują że ci zależy."
      },
      {
        id: "dat_only_10",
        question: "Diese Farbe steht _____ wirklich sehr gut, perfekt passend!",
        translation: "(Ten kolor naprawdę bardzo ci pasuje, perfekcyjnie dopasowany!)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Czasownik 'stehen' (pasować o ubraniu/kolorze) wymaga celownika - 'dir' (tobie) komu pasuje. Kolor harmonizujący z osobą. Polski mówi 'pasuje tobie' podobnie. Komplementy o wyglądzie mogą podnieść pewność siebie - szczere uznanie piękna jest wartościowe."
      },
      {
        id: "dat_only_11",
        question: "Der Lehrer antwortet _____ geduldig auf alle Fragen ausführlich.",
        translation: "(Nauczyciel odpowiada mu cierpliwie na wszystkie pytania obszernie)",
        options: ["ihm", "ihn", "er", "sein"],
        correct: "ihm",
        explanation: "Czasownik 'antworten' (odpowiadać) wymaga celownika - 'ihm' (jemu) komu odpowiadasz. Cierpliwe odpowiadanie pokazuje dobrą pedagogikę. Polski mówi 'odpowiada jemu'. Nauczyciele którzy cierpliwie odpowiadają na wszystkie pytania tworzą bezpieczne środowisko uczenia się."
      },
      {
        id: "dat_only_12",
        question: "Ich begegne _____ oft auf dem Weg zur Arbeit am Morgen.",
        translation: "(Spotykam ją często w drodze do pracy rano)",
        options: ["ihr", "sie", "ihnen", "ihn"],
        correct: "ihr",
        explanation: "Czasownik 'begegnen' (spotykać przypadkowo) wymaga celownika - 'ihr' (jej). Przypadkowe spotkania to miłe elementy rutyny. Polski używałby biernika ('spotykam ją'), ale niemiecki celownika. Regularne przypadkowe spotkania mogą przerodzić się w znajomość - powtarzalność buduje rozpoznawalność."
      },
      {
        id: "dat_only_13",
        question: "Das Konzert hat _____ sehr gut gefallen, fantastische Musik!",
        translation: "(Koncert bardzo mi się spodobał, fantastyczna muzyka!)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Perfect od 'gefallen' - 'hat gefallen' nadal wymaga celownika 'mir'. Zachwyt nad koncertem. Struktura z celownikiem konsekwentna we wszystkich czasach. Muzyka na żywo to wyjątkowe doświadczenie - energia występu tworzy niezapomniane wspomnienia."
      },
      {
        id: "dat_only_14",
        question: "Ich folge _____ schon seit Jahren auf Social Media regelmäßig.",
        translation: "(Śledzę go już od lat na mediach społecznościowych regularnie)",
        options: ["ihm", "ihn", "er", "sein"],
        correct: "ihm",
        explanation: "Czasownik 'folgen' (śledzić/podążać za) wymaga celownika - 'ihm' (jemu/za nim). Śledzenie w social media to forma zainteresowania. Polski używa biernika ('śledzę go'), niemiecki celownika. Długoterminowe śledzenie pokazuje trwające zainteresowanie czyimiś treściami."
      },
      {
        id: "dat_only_15",
        question: "Das Klima hier bekommt _____ nicht gut, ich bin oft krank.",
        translation: "(Klimat tutaj mi nie służy, jestem często chory)",
        options: ["mir", "mich", "ich", "mein"],
        correct: "mir",
        explanation: "Czasownik 'bekommen' w znaczeniu 'służyć/dobrze robić' wymaga celownika - 'mir' nie 'mich'. Klimat wpływający na zdrowie. To inne znaczenie niż 'bekommen' (otrzymywać) z biernikiem. Polski mówi 'służy mi' z celownikiem. Niektórzy ludzie są wrażliwi na klimat - migracja ze względów zdrowotnych jest zrozumiała."
      }
    ]
  },

  expressing_opinions_advanced: {
    name: "Wyrażanie opinii - zaawansowane",
    description: "Meiner Meinung nach, ich finde dass, meines Erachtens",
    icon: Wallet,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "opin_1",
        question: "_____ Meinung _____ ist das die beste Lösung für Problem.",
        translation: "(Według mojej opinii to jest najlepsze rozwiązanie problemu)",
        options: ["Meiner / nach", "Meine / nach", "Meiner / zu", "Meine / zu"],
        correct: "Meiner / nach",
        explanation: "Idiom 'meiner Meinung nach' używa dopełniacza - 'meiner' (mojej). To formalna struktura wyrażania opinii. Przyimek 'nach' idzie PO rzeczowniku w tej konstrukcji. Polski mówi 'według mojej opinii' podobnie. Ta forma jest uprzejma i jasno zaznacza że to subiektywny pogląd, nie obiektywny fakt."
      },
      {
        id: "opin_2",
        question: "Ich finde, _____ wir mehr Zeit für Planung brauchen definitiv.",
        translation: "(Uważam, że potrzebujemy zdecydowanie więcej czasu na planowanie)",
        options: ["dass", "ob", "wenn", "weil"],
        correct: "dass",
        explanation: "Czasownik opinii 'finden' (uważać) wprowadza zdanie z 'dass'. Wyrażasz subiektywną ocenę potrzeb projektu. Forma 'ich finde, dass' standardowa dla opinii. Przyznanie potrzeby więcej czasu to odpowiedzialne podejście - lepiej planować dobrze niż się spieszyć."
      },
      {
        id: "opin_3",
        question: "_____ Ansicht ist diese Idee nicht sehr praktisch für uns.",
        translation: "(Moim zdaniem ten pomysł nie jest bardzo praktyczny dla nas)",
        options: ["Meiner", "Meine", "Nach meiner", "Von meiner"],
        correct: "Meiner",
        explanation: "Fraza 'meiner Ansicht nach' (moim zdaniem) używa dopełniacza. Można też powiedzieć 'meiner Ansicht' samodzielnie na początku. Krytyczna ocena impraktycznego pomysłu. Forma z dopełniaczem brzmi formalnie. Konstruktywna krytyka wymaga taktowności - wyrażaj wątpliwości szanując innych."
      },
      {
        id: "opin_4",
        question: "Ich bin _____ Meinung, dass wir das anders machen sollten.",
        translation: "(Jestem zdania, że powinniśmy to zrobić inaczej)",
        options: ["der", "die", "dem", "den"],
        correct: "der",
        explanation: "Fraza 'der Meinung sein' (być zdania) wymaga dopełniacza - 'der' przed 'Meinung'. Wyrażanie niezgody z obecnym podejściem. Czasownik 'sein' z dopełniaczem w tym idiomie. Proponowanie alternatyw to konstruktywna postawa - nie tylko krytykujesz ale oferujesz rozwiązanie."
      },
      {
        id: "opin_5",
        question: "Meines _____ sollten wir vorsichtiger sein in dieser Situation.",
        translation: "(Moim zdaniem powinniśmy być ostrożniejsi w tej sytuacji)",
        options: ["Erachtens", "Erachten", "Meinung", "Ansicht"],
        correct: "Erachtens",
        explanation: "Bardzo formalna fraza 'meines Erachtens' (moim zdaniem) używa dopełniacza nijakiego. To archaiczna ale wciąż używana forma w piśmie formalnym. Rada ostrożności w niepewnej sytuacji. Forma brzmi bardzo profesjonalnie i intelektualnie - używana w raportach lub formalnych dyskusjach."
      },
      {
        id: "opin_6",
        question: "Ich denke, _____ diese Methode effektiver wäre für unsere Zwecke.",
        translation: "(Myślę, że ta metoda byłaby skuteczniejsza dla naszych celów)",
        options: ["dass", "ob", "wenn", "weil"],
        correct: "dass",
        explanation: "Czasownik 'denken' (myśleć) wprowadza opinię z 'dass'. Konjunktiv 'wäre' pokazuje że to hipoteza. Forma 'denke, dass' częsta dla sugestii. Proponowanie bardziej efektywnych metod to wkład w optymalizację - konstruktywne myślenie prowadzi do lepszych wyników."
      },
      {
        id: "opin_7",
        question: "_____ mir scheint das Problem komplizierter zu sein als gedacht.",
        translation: "(Wydaje mi się, że problem jest bardziej skomplikowany niż myślano)",
        options: ["Wie", "Was", "Wo", "Wann"],
        correct: "Wie",
        explanation: "Idiom 'wie mir scheint' (jak mi się wydaje) wyraża ostrożną opinię. To subiektywne wrażenie nie pewnik. Forma z celownikiem 'mir' pokazuje osobistą percepcję. Przyznanie że coś jest trudniejsze niż oczekiwano to uczciwa ocena - lepiej zrewidować oczekiwania niż ignorować rzeczywistość."
      },
      {
        id: "opin_8",
        question: "Ich halte es _____ besser, wenn wir noch warten auf Informationen.",
        translation: "(Uważam za lepsze, jeśli jeszcze poczekamy na informacje)",
        options: ["für", "als", "wie", "von"],
        correct: "für",
        explanation: "Konstrukcja 'etwas für...halten' (uważać coś za...) używa przyimka 'für'. Wyrażanie opinii że czekanie jest mądrzejsze. Forma 'halte für besser' standardowa. Cierpliwość w oczekiwaniu na więcej informacji może zapobiec pochopnym decyzjom - przemyślane działanie lepsze niż impulsywne."
      },
      {
        id: "opin_9",
        question: "_____ meinem Gefühl nach ist hier etwas nicht in Ordnung.",
        translation: "(Według mojego przeczucia coś tu nie jest w porządku)",
        options: ["Nach", "Zu", "Von", "Bei"],
        correct: "Nach",
        explanation: "Fraza 'nach meinem Gefühl' (według mojego przeczucia) używa celownika. Przyimek 'nach' wyraża 'według'. Intuicja ostrzegająca o problemie. Polski używa 'według mojego przeczucia'. Słuchanie wewnętrznego głosu jest ważne - czasem czujemy problemy zanim możemy je racjonalnie zidentyfikować."
      },
      {
        id: "opin_10",
        question: "Ich bin fest _____ überzeugt, dass wir Erfolg haben werden!",
        translation: "(Jestem mocno przekonany, że będziemy mieć sukces!)",
        options: ["davon", "daran", "darüber", "dafür"],
        correct: "davon",
        explanation: "Konstrukcja 'überzeugt sein von' używa 'davon' dla rzeczy o których jesteś przekonany. Silna wiara w sukces. Forma 'davon überzeugt' standardowa. Optymizm i pewność mogą być zaraźliwe - przekonanie lidera wpływa na motywację całego zespołu."
      },
      {
        id: "opin_11",
        question: "Es _____ mir so, als ob er nicht die Wahrheit sagt ehrlich.",
        translation: "(Wydaje mi się jakby nie mówił prawdy szczerze)",
        options: ["scheint", "schaut", "sieht", "zeigt"],
        correct: "scheint",
        explanation: "Czasownik 'scheinen' (wydawać się) dla wyrażania wrażenia. Konstrukcja 'es scheint mir' (wydaje mi się) plus 'als ob' (jakby). Podejrzenie nieuczciwości. Polski używa 'wydaje mi się' identycznie. Wątpliwości w szczerość są niepokojące - zaufanie jest fundamentem relacji."
      },
      {
        id: "opin_12",
        question: "Meines _____ ist das eine ausgezeichnete Gelegenheit für uns!",
        translation: "(Moim zdaniem to jest doskonała okazja dla nas!)",
        options: ["Erachtens", "Meinung", "Ansicht", "Gefühls"],
        correct: "Erachtens",
        explanation: "Ponownie bardzo formalne 'meines Erachtens' - dopełniacz nijaki dla wysokiego rejestru. Entuzjazm dla możliwości. Ta archaiczna forma dodaje wagę twojej opinii. Rozpoznawanie dobrych okazji wymaga doświadczenia - umiejętność dostrzegania szans jest cenną kompetencją."
      },
      {
        id: "opin_13",
        question: "Ich bezweifle stark, _____ das wirklich funktionieren wird praktisch.",
        translation: "(Mocno wątpię, czy to naprawdę będzie działać praktycznie)",
        options: ["ob", "dass", "wenn", "weil"],
        correct: "ob",
        explanation: "Czasownik 'bezweifeln' (wątpić) wprowadza pytanie z 'ob' - wątpisz CZY to zadziała. Sceptycyzm wobec planu. Forma 'bezweifle, ob' dla wyrażania wątpliwości. Zdrowy sceptycyzm może zapobiec błędom - nie każdy pomysł jest dobry, pytania krytyczne są wartościowe."
      },
      {
        id: "opin_14",
        question: "Ich stimme völlig mit _____ überein in dieser Angelegenheit wichtig.",
        translation: "(Całkowicie się zgadzam z tobą w tej ważnej sprawie)",
        options: ["dir", "dich", "du", "dein"],
        correct: "dir",
        explanation: "Czasownik 'übereinstimmen mit' (zgadzać się z) wymaga celownika - 'mit dir' (z tobą). Pełna zgoda w ważnej kwestii. Przyimek 'mit' zawsze z celownikiem. Wyrażanie pełnej zgody wzmacnia sojusze - pokazuje że jesteście po tej samej stronie."
      },
      {
        id: "opin_15",
        question: "Seiner _____ sollten wir das Projekt sofort starten ohne Verzögerung.",
        translation: "(Jego zdaniem powinniśmy natychmiast rozpocząć projekt bez zwłoki)",
        options: ["Ansicht nach", "Meinung nach", "Erachtens nach", "Ansicht"],
        correct: "Ansicht nach",
        explanation: "Fraza 'seiner Ansicht nach' (jego zdaniem) - dopełniacz męski 'seiner'. Przyimek 'nach' po rzeczowniku. Pilność w jego opinii. Forma dopełniacza pokazuje czyje to zdanie. Różne opinie o tempie działania są naturalne - niektórzy wolą szybkość, inni ostrożność."
      }
    ]
  },

  double_infinitive_perfect: {
    name: "Podwójny bezokolicznik w Perfect",
    description: "Haben können, haben müssen - modalne w Perfect",
    icon: Award,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "double_inf_1",
        question: "Ich habe gestern lange arbeiten _____ für das Projekt.",
        translation: "(Musiałem wczoraj długo pracować dla projektu)",
        options: ["müssen", "gemusst", "mussen", "musste"],
        correct: "müssen",
        explanation: "W Perfect z czasownikiem modalnym plus bezokolicznik używasz PODWÓJNEGO bezokolicznika - 'haben müssen' nie 'gemusst'! To wyjątek od normalnego Perfect. Długa praca dla projektu wymagała poświęcenia. Konstrukcja 'haben + bezokolicznik + modalny w bezokoliczniku' to tzw. Ersatzinfinitiv - zastępczy bezokolicznik zamiast imiesłowu."
      },
      {
        id: "double_inf_2",
        question: "Sie hat nicht mitkommen _____ wegen ihrer Krankheit leider.",
        translation: "(Nie mogła przyjść z powodu swojej choroby niestety)",
        options: ["können", "gekonnt", "konnen", "konnte"],
        correct: "können",
        explanation: "Podwójny bezokolicznik w Perfect - 'hat können' nie 'hat gekonnt' gdy jest drugi bezokolicznik! Choroba uniemożliwiła uczestnictwo. Forma 'hat mitkommen können' pokazuje niemożliwość. Zdrowie czasem decyduje o naszych możliwościach - choroba to obiektywny powód nieobecności."
      },
      {
        id: "double_inf_3",
        question: "Wir haben das Problem schnell lösen _____ zum Glück gemeinsam.",
        translation: "(Mogliśmy na szczęście szybko rozwiązać problem wspólnie)",
        options: ["können", "gekonnt", "konnen", "konnten"],
        correct: "können",
        explanation: "Perfect z modalnym plus bezokolicznik - 'haben können' forma podwójnego bezokolicznika. Pomyślne rozwiązanie problemu. Konstrukcja Ersatzinfinitiv obowiązkowa gdy jest dodatkowy bezokolicznik. Wspólne rozwiązywanie problemów buduje zespołową więź - sukces jest słodszy gdy dzielony."
      },
      {
        id: "double_inf_4",
        question: "Er hat uns leider nicht besuchen _____ durch viel Arbeit.",
        translation: "(Niestety nie mógł nas odwiedzić przez dużo pracy)",
        options: ["können", "gekonnt", "konnen", "könnte"],
        correct: "können",
        explanation: "Podwójny bezokolicznik - 'hat besuchen können' dla niemożliwości w przeszłości. Praca zapobiegła wizycie. Forma 'können' w bezokoliczniku standardowa z drugim bezokolicznikiem. Obciążenie pracą czasem ogranicza życie społeczne - balans między pracą a relacjami jest wyzwaniem."
      },
      {
        id: "double_inf_5",
        question: "Ich habe heute früh aufstehen _____ für wichtigen Termin.",
        translation: "(Musiałem dzisiaj wcześnie wstać na ważne spotkanie)",
        options: ["müssen", "gemusst", "mussen", "musste"],
        correct: "müssen",
        explanation: "Perfect z rozdzielnym czasownikiem - 'habe aufstehen müssen' używa podwójnego bezokolicznika. Konieczność wczesnego wstawania. Forma 'aufstehen' pozostaje razem jako bezokolicznik. Ważne terminy wymagają poświęceń - czasem komfort snu ustępuje obowiązkom."
      },
      {
        id: "double_inf_6",
        question: "Sie hat das nicht alleine machen _____ - zu schwer für sie.",
        translation: "(Nie mogła tego zrobić sama - za trudne dla niej)",
        options: ["können", "gekonnt", "konnen", "konnte"],
        correct: "können",
        explanation: "Niemożliwość w Perfect - 'hat machen können' z podwójnym bezokolicznikiem. Zadanie przekraczało jej możliwości. Negatywna forma pokazuje ograniczenia. Przyznanie się że coś jest za trudne to nie słabość - to realistyczna samoocena pozwalająca szukać pomocy."
      },
      {
        id: "double_inf_7",
        question: "Wir haben gestern nicht ausgehen _____ wegen des schlechten Wetters.",
        translation: "(Nie mogliśmy wczoraj wyjść z powodu złej pogody)",
        options: ["können", "gekonnt", "konnen", "konnten"],
        correct: "können",
        explanation: "Podwójny bezokolicznik - 'haben ausgehen können' dla niemożliwości wyjścia. Pogoda dyktowała plany. Rozdzielny 'ausgehen' pozostaje razem w bezokoliczniku. Plany zmieniane przez pogodę to uniwersalne doświadczenie - natura czasem ma inne plany niż my."
      },
      {
        id: "double_inf_8",
        question: "Er hat mir leider nicht helfen _____ - er hatte keine Zeit.",
        translation: "(Niestety nie mógł mi pomóc - nie miał czasu)",
        options: ["können", "gekonnt", "konnen", "konnte"],
        correct: "können",
        explanation: "Perfect niemożliwości pomocy - 'hat helfen können' podwójny bezokolicznik. Brak czasu uniemożliwił pomoc. Czasownik 'helfen' pozostaje w bezokoliczniku. Ograniczenia czasowe wpływają na naszą zdolność pomagania - to nie brak chęci ale brak zasobów."
      },
      {
        id: "double_inf_9",
        question: "Sie haben das Projekt rechtzeitig fertigstellen _____ durch Teamarbeit.",
        translation: "(Mogli ukończyć projekt na czas przez pracę zespołową)",
        options: ["können", "gekonnt", "konnen", "konnten"],
        correct: "können",
        explanation: "Sukces w Perfect - 'haben fertigstellen können' podwójny bezokolicznik. Praca zespołowa umożliwiła dotrzymanie terminu. Rozdzielny 'fertigstellen' w bezokoliczniku. Współpraca często czyni możliwym to co indywidualnie niemożliwe - siła zespołu przewyższa sumę części."
      },
      {
        id: "double_inf_10",
        question: "Ich habe ihn nicht anrufen _____ - mein Telefon war kaputt.",
        translation: "(Nie mogłem do niego zadzwonić - mój telefon był zepsuty)",
        options: ["können", "gekonnt", "konnen", "konnte"],
        correct: "können",
        explanation: "Niemożliwość kontaktu - 'habe anrufen können' z podwójnym bezokolicznikiem. Zepsuty telefon jako bariera. Czasownik rozdzielny 'anrufen' pozostaje razem. Awarie technologii mogą izolować - zależność od urządzeń staje się oczywista gdy przestają działać."
      },
      {
        id: "double_inf_11",
        question: "Wir haben die Aufgabe nicht verstehen _____ - zu kompliziert erklärt.",
        translation: "(Nie mogliśmy zrozumieć zadania - za skomplikowanie wyjaśnione)",
        options: ["können", "gekonnt", "konnen", "konnten"],
        correct: "können",
        explanation: "Niemożliwość zrozumienia - 'haben verstehen können' podwójny bezokolicznik. Złe wyjaśnienie jako przeszkoda. Negatywna forma z modalnym w Perfect. Niejasne instrukcje są powszechnym źródłem frustracji - dobra komunikacja wymaga jasności i przykładów."
      },
      {
        id: "double_inf_12",
        question: "Er hat das Buch nicht zu Ende lesen _____ - zu langweilig.",
        translation: "(Nie mógł skończyć czytać książki - za nudna)",
        options: ["können", "gekonnt", "konnen", "konnte"],
        correct: "können",
        explanation: "Niemożliwość ukończenia - 'hat lesen können' z podwójnym bezokolicznikiem. Nuda książki zapobiegła dokończeniu. Fraza 'zu Ende lesen' (dokończyć czytać) z modalnym. Nie każda książka jest dla każdego - porzucanie nudnych pozycji to OK, życie za krótkie na złą literaturę."
      },
      {
        id: "double_inf_13",
        question: "Sie haben uns nicht rechtzeitig informieren _____ über Änderung.",
        translation: "(Nie mogli nas na czas poinformować o zmianie)",
        options: ["können", "gekonnt", "konnen", "konnten"],
        correct: "können",
        explanation: "Niemożliwość terminowej komunikacji - 'haben informieren können' podwójny bezokolicznik. Opóźniona informacja. Forma z rozdzielnym lub normalnym czasownikiem plus modalny. Brak terminowej komunikacji może powodować problemy - przejrzysta komunikacja jest podstawą sprawnej współpracy."
      },
      {
        id: "double_inf_14",
        question: "Ich habe das Problem alleine lösen _____ ohne fremde Hilfe.",
        translation: "(Mogłem rozwiązać problem sam bez obcej pomocy)",
        options: ["können", "gekonnt", "konnen", "konnte"],
        correct: "können",
        explanation: "Sukces samodzielności - 'habe lösen können' podwójny bezokolicznik. Rozwiązanie bez pomocy pokazuje kompetencję. Pozytywna konstrukcja z modalnym. Niezależność w rozwiązywaniu problemów buduje pewność siebie - każde samodzielne rozwiązanie wzmacnia twoją wiarę w siebie."
      },
      {
        id: "double_inf_15",
        question: "Wir haben nicht früher Bescheid sagen _____ - keine Informationen.",
        translation: "(Nie mogliśmy wcześniej powiedzieć - brak informacji)",
        options: ["können", "gekonnt", "konnen", "konnten"],
        correct: "können",
        explanation: "Niemożliwość wcześniejszego powiadomienia - 'haben sagen können' podwójny bezokolicznik. Brak informacji uniemożliwił komunikację. Fraza 'Bescheid sagen' (dać znać) z modalnym. Niemożliwość przekazania informacji które się nie posiada jest oczywista - można dzielić się tylko tym co się wie."
      }
    ]
  }
};

export default part19Categories;
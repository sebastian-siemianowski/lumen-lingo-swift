
/**
 * POLISH → SPANISH GRAMMAR - PART 3
 * Subjunctive & Future
 */

import { Cloud, TrendingUp } from "lucide-react";

export const part3Categories = {
  subjunctive: {
    name: "Subjuntivo",
    description: "Tryb łączący",
    level: "advanced",
    icon: Cloud,
    color: "from-indigo-400 to-purple-500",
    questions: [
      { id: "ps_subj1", question: "Espero que tú _____ bien.", translation: "(Mam nadzieję, że czujesz się dobrze)", options: ["estés", "estás", "estar", "estarás"], correct: "estés", explanation: "Subjuntivo wyraża niepewność, emocje, życzenia. 'Espero que' (mam nadzieję, że) wymaga subjuntivo. 'Estar' → 'estés'. Polski nie ma odpowiednika - używa trybu oznajmującego. Hiszpański pokazuje, że to nadzieja, nie fakt." },
      { id: "ps_subj2", question: "Quiero que ellos _____ .", translation: "(Chcę, żeby przyszli)", options: ["vengan", "vienen", "venir", "vendrán"], correct: "vengan", explanation: "Czasowniki wpływu (querer, necesitar, pedir) wymagają subjuntivo. 'Quiero que vengan' = chcę, żeby przyszli. To nie pewnik, to życzenie. 'Venir' → 'vengan'. Polski używa bezokolicznika lub że + tryb oznajmujący." },
      { id: "ps_subj3", question: "Es importante que nosotros _____ .", translation: "(Ważne, żebyśmy studiowali)", options: ["estudiemos", "estudiamos", "estudiar", "estudiaremos"], correct: "estudiemos", explanation: "Wyrażenia oceniające (es importante, es necesario) wymagają subjuntivo. 'Es importante que estudiemos' = ważne, żebyśmy studiowali. To ocena, nie fakt. Polski 'żebyśmy' pokazuje podobny niuans." },
      { id: "ps_subj4", question: "Dudo que ella _____ la verdad.", translation: "(Wątpię, żeby znała prawdę)", options: ["sepa", "sabe", "saber", "sabrá"], correct: "sepa", explanation: "Czasowniki wątpienia wymagają subjuntivo. 'Dudar que' = wątpić, że. 'Saber' → 'sepa' (nieregularny). To niepewność, nie pewność. Polski 'żeby' w niektórych kontekstach przypomina hiszpański subjuntivo." },
      { id: "ps_subj5", question: "No creo que _____ mañana.", translation: "(Nie sądzę, żeby jutro padało)", options: ["llueva", "llueve", "llover", "lloverá"], correct: "llueva", explanation: "Negatywne creer wymaga subjuntivo. 'No creo que llueva' = nie sądzę, żeby padało. Pozytywne 'creo que llueve' używa oznajmującego. Ta różnica pokazuje pewność vs niepewność." },
      { id: "ps_subj6", question: "Cuando _____ tiempo, te llamaré.", translation: "(Gdy będę miał czas, zadzwonię)", options: ["tenga", "tengo", "tener", "tendré"], correct: "tenga", explanation: "Zdania czasowe o przyszłości wymagają subjuntivo. 'Cuando tenga' = gdy będę miał. Polski używa przyszłego, hiszpański subjuntivo dla nieokreślonego czasu. 'Tener' → 'tenga'." },
      { id: "ps_subj7", question: "Aunque _____ cansado, trabajaré.", translation: "(Choć będę zmęczony, będę pracował)", options: ["esté", "estoy", "estar", "estaré"], correct: "esté", explanation: "Aunque + subjuntivo dla hipotetycznych sytuacji. 'Aunque esté cansado' = choć będę zmęczony (być może). Z oznajmującym 'aunque estoy' = choć jestem (na pewno). Subtelna różnica." },
      { id: "ps_subj8", question: "Ojalá _____ buen tiempo.", translation: "(Oby była dobra pogoda)", options: ["haga", "hace", "hacer", "hará"], correct: "haga", explanation: "'Ojalá' (oby, obyż) zawsze wymaga subjuntivo. To życzenie, nadzieja. 'Hacer buen tiempo' = być dobrej pogodzie. 'Ojalá haga' = oby była. Nie ma pewności." },
      { id: "ps_subj9", question: "Es posible que yo _____ tarde.", translation: "(Możliwe, że przyjdę późno)", options: ["llegue", "llego", "llegar", "llegaré"], correct: "llegue", explanation: "Wyrażenia możliwości wymagają subjuntivo. 'Es posible que llegue' = możliwe, że przyjdę. To niepewne. 'Llegar' → 'llegue'. Polski używa trybu oznajmującego." },
      { id: "ps_subj10", question: "Te lo digo para que lo _____ .", translation: "(Mówię ci, żebyś wiedział)", options: ["sepas", "sabes", "saber", "sabrás"], correct: "sepas", explanation: "'Para que' (żeby, aby) wymaga subjuntivo. 'Para que lo sepas' = żebyś wiedział. Cel, zamiar. 'Saber' → 'sepas'. Polski 'żebyś' blisko subjuntivo semantycznie." },
      { id: "ps_subj11", question: "No hay nadie que _____ la respuesta.", translation: "(Nie ma nikogo, kto znałby odpowiedź)", options: ["sepa", "sabe", "saber", "sabrá"], correct: "sepa", explanation: "Zdania względne o nieistniejącym/nieznanym używają subjuntivo. 'No hay nadie que sepa' = nie ma nikogo, kto znałby. Osoba hipotetyczna. Z oznajmującym 'hay alguien que sabe' = jest ktoś, kto wie (konkretna osoba)." },
      { id: "ps_subj12", question: "Antes de que tú _____, limpia la casa.", translation: "(Zanim przyjdziesz, posprzątaj dom)", options: ["vengas", "vienes", "venir", "vendrás"], correct: "vengas", explanation: "'Antes de que' (zanim) wymaga subjuntivo. 'Antes de que vengas' = zanim przyjdziesz. Zdarzenie przyszłe, niepewne. 'Venir' → 'vengas'. Polski używa czasu przyszłego." },
      { id: "ps_subj13", question: "Busco un libro que _____ interesante.", translation: "(Szukam książki, która byłaby interesująca)", options: ["sea", "es", "ser", "será"], correct: "sea", explanation: "Zdania względne o poszukiwanym obiekcie używają subjuntivo. 'Busco un libro que sea' = szukam książki, która byłaby. Książka hipotetyczna. Gdyby 'tengo un libro que es' = mam książkę, która jest (konkretna)." },
      { id: "ps_subj14", question: "Me alegro de que ustedes _____ aquí.", translation: "(Cieszę się, że jesteście tutaj)", options: ["estén", "están", "estar", "estarán"], correct: "estén", explanation: "Czasowniki emocji wymagają subjuntivo. 'Me alegro de que estén' = cieszę się, że jesteście. Emocja, nie fakt obiektywny. 'Estar' → 'estén'. Polski używa trybu oznajmującego." },
      { id: "ps_subj15", question: "Temo que ella no _____ venir.", translation: "(Boję się, że ona nie będzie mogła przyjść)", options: ["pueda", "puede", "poder", "podrá"], correct: "pueda", explanation: "Czasowniki obawy wymagają subjuntivo. 'Temo que no pueda' = boję się, że nie będzie mogła. Obawa, niepewność. 'Poder' → 'pueda' (nieregularny). Subjuntivo pokazuje, że to lęk, nie pewność." }
    ]
  },

  future: {
    name: "Futuro",
    description: "Czas przyszły",
    level: "advanced",
    icon: TrendingUp,
    color: "from-green-400 to-teal-500",
    questions: [
      { id: "ps_fut1", question: "Yo _____ mañana.", translation: "(Przyjdę jutro)", options: ["vendré", "vengo", "vine", "vendría"], correct: "vendré", explanation: "Czas przyszły tworzy się: bezokolicznik + końcówki. 'Venir' + é = 'vendré'. Ale 'venir' nieregularny: 'vendr-'. Polski używa czasu przyszłego złożonego, hiszpański prostego. Końcówki: -é, -ás, -á, -emos, -éis, -án." },
      { id: "ps_fut2", question: "Tú _____ en Madrid.", translation: "(Będziesz mieszkał w Madrycie)", options: ["vivirás", "vives", "viviste", "vivirías"], correct: "vivirás", explanation: "'Vivir' + ás = 'vivirás'. Regularny czasownik przyszły. Bezokolicznik + końcówka. Proste i logiczne. Akcent na á ważny dla wymowy. Polski 'będziesz mieszkał' to konstrukcja złożona, hiszpański prosty czasownik." },
      { id: "ps_fut3", question: "Ella _____ la respuesta.", translation: "(Ona będzie wiedzieć odpowiedź)", options: ["sabrá", "sabe", "supo", "sabría"], correct: "sabrá", explanation: "'Saber' nieregularny w przyszłym: 'sabr-' + á = 'sabrá'. Niektóre czasowniki tracą samogłoskę: saber → sabr-, poder → podr-, querer → querr-. Końcówki te same, zmienia się rdzeń." },
      { id: "ps_fut4", question: "Nosotros _____ español.", translation: "(Będziemy uczyć się hiszpańskiego)", options: ["aprenderemos", "aprendemos", "aprendimos", "aprenderíamos"], correct: "aprenderemos", explanation: "'Aprender' + emos = 'aprenderemos'. Regularny. Forma nosotros przyszłego: -emos. Polski 'będziemy uczyć się' vs hiszpański prosty czasownik. Akcent na ostatnią sylabę przed -mos." },
      { id: "ps_fut5", question: "Vosotros _____ tarde.", translation: "(Przyjdziecie późno)", options: ["llegaréis", "llegáis", "llegasteis", "llegaríais"], correct: "llegaréis", explanation: "'Llegar' + éis = 'llegaréis'. Forma vosotros tylko w Hiszpanii. Akcent na é kluczowy. W Ameryce Łacińskiej 'llegarán' (ustedes). Polski nie rozróżnia nieformalnego/formalnego w liczbie mnogiej." },
      { id: "ps_fut6", question: "Ellos _____ mañana.", translation: "(Oni wyjadą jutro)", options: ["saldrán", "salen", "salieron", "saldrían"], correct: "saldrán", explanation: "'Salir' nieregularny: 'saldr-' + án = 'saldrán'. Czasowniki na -ir często nieregularne w przyszłym. Salir → saldr-, venir → vendr-, tener → tendr-. Wzór 'd' w rdzeniu częsty." },
      { id: "ps_fut7", question: "Yo _____ tiempo.", translation: "(Będę miał czas)", options: ["tendré", "tengo", "tuve", "tendría"], correct: "tendré", explanation: "'Tener' nieregularny: 'tendr-' + é = 'tendré'. Bardzo częsty czasownik. 'Tendré tiempo' = będę miał czas. Rdzeń 'tendr-' trzeba zapamiętać." },
      { id: "ps_fut8", question: "Tú _____ hacerlo.", translation: "(Będziesz mógł to zrobić)", options: ["podrás", "puedes", "pudiste", "podrías"], correct: "podrás", explanation: "'Poder' nieregularny: 'podr-' + ás = 'podrás'. 'Poder' = móc, potrafić. 'Podrás hacerlo' = będziesz mógł to zrobić. Rdzeń 'podr-' regularny dla przyszłego i warunkowego." },
      { id: "ps_fut9", question: "Él _____ venir.", translation: "(On będzie chciał przyjść)", options: ["querrá", "quiere", "quiso", "querría"], correct: "querrá", explanation: "'Querer' nieregularny: 'querr-' + á = 'querrá'. Podwójne r w rdzeniu. 'Querer' = chcieć. 'Querrá venir' = będzie chciał przyjść. Czasowniki nieregularne w przyszłym często podwajają r." },
      { id: "ps_fut10", question: "Nosotros _____ la verdad.", translation: "(Powiemy prawdę)", options: ["diremos", "decimos", "dijimos", "diríamos"], correct: "diremos", explanation: "'Decir' nieregularny: 'dir-' + emos = 'diremos'. Całkowita zmiana rdzenia. Decir → dir-. Jeden z najbardziej nieregularnych, ale najczęściej używanych." },
      { id: "ps_fut11", question: "Vosotros lo _____ .", translation: "(Zrobicie to)", options: ["haréis", "hacéis", "hicisteis", "haríais"], correct: "haréis", explanation: "'Hacer' nieregularny: 'har-' + éis = 'haréis'. Hacer → har-. Forma vosotros z akcentem na é. 'Lo haréis' = zrobicie to." },
      { id: "ps_fut12", question: "Ellas _____ en casa.", translation: "(One będą w domu)", options: ["estarán", "están", "estuvieron", "estarían"], correct: "estarán", explanation: "'Estar' + án = 'estarán'. Regularny w przyszłym. 'Estarán en casa' = będą w domu. Lokalizacja w przyszłości używa estar jak zawsze." },
      { id: "ps_fut13", question: "Yo te _____ mañana.", translation: "(Zadzwonię do ciebie jutro)", options: ["llamaré", "llamo", "llamé", "llamaría"], correct: "llamaré", explanation: "'Llamar' + é = 'llamaré'. Regularny. 'Te llamaré' = zadzwonię do ciebie. Bardzo częsta fraza. Czasowniki regularne w przyszłym są większością." },
      { id: "ps_fut14", question: "Tú _____ a Madrid.", translation: "(Pojedziesz do Madrytu)", options: ["irás", "vas", "fuiste", "irías"], correct: "irás", explanation: "'Ir' regularny w przyszłym (mimo że bardzo nieregularny w innych czasach). Ir + ás = 'irás'. 'Irás a Madrid' = pojedziesz do Madrytu." },
      { id: "ps_fut15", question: "Él no _____ nada.", translation: "(On nic nie powie)", options: ["dirá", "dice", "dijo", "diría"], correct: "dirá", explanation: "'Decir' → 'dirá'. 'No dirá nada' = nic nie powie. Przeczenie proste: no + czasownik. Decir nieregularny (dir-), ale końcówka regularna." }
    ]
  }
};

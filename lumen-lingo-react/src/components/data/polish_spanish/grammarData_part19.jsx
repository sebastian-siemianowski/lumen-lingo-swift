/**
 * POLISH → SPANISH GRAMMAR - PART 19
 * 3 categories, 15 questions each - Final advanced topics
 */

import { Users, Sparkles, Target } from "lucide-react";

export const part19Categories = {
  impersonal_expressions: {
    name: "Wyrażenia bezosobowe",
    description: "Używaj konstrukcji bezosobowych",
    icon: Users,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    questions: [
      {
        id: "imp_1",
        question: "_____ prohibido estacionar en esta zona restringida del centro histórico de la ciudad antigua.",
        translation: "(Zabronione jest parkować w tej ograniczonej strefie historycznego centrum starego miasta)",
        options: ["Está", "Es", "Hay", "Se"],
        correct: "Está",
        explanation: "'Estar prohibido' to być zabronionym (stan). Używamy 'estar' nie 'ser' dla zakazów i pozwoleń. To pokazuje aktualną regulację która może się zmienić."
      },
      {
        id: "imp_2",
        question: "_____ dice que va a llover torrencialmente toda la semana próxima según el pronóstico meteorológico.",
        translation: "(Mówi się, że będzie padać ulewnie cały przyszły tydzień według prognozy meteorologicznej)",
        options: ["Se", "Está", "Es", "Hay"],
        correct: "Se",
        explanation: "'Se dice que' to mówi się że (bezosobowe). 'Se' tworzy pasyw bez wskazywania kto mówi. To jak ogólna opinia lub plotka bez konkretnego źródła."
      },
      {
        id: "imp_3",
        question: "_____ necesario tener pasaporte válido para viajar a la mayoría de países extranjeros del mundo.",
        translation: "(Konieczne jest mieć ważny paszport, żeby podróżować do większości zagranicznych krajów świata)",
        options: ["Es", "Está", "Hay", "Se es"],
        correct: "Es",
        explanation: "'Es necesario + infinitivo' to bezosobowa konieczność. 'Ser' dla ogólnych prawd i wymogów. Po 'es + przymiotnik' używamy infinitivu dla ogólnej zasady."
      },
      {
        id: "imp_4",
        question: "_____ habla mucho de ese tema político controvertido en las noticias de televisión últimamente.",
        translation: "(Dużo się mówi o tym kontrowersyjnym temacie politycznym w wiadomościach telewizyjnych ostatnio)",
        options: ["Se", "Está", "Es", "Hay"],
        correct: "Se",
        explanation: "'Se habla de' to mówi się o (bezosobowy pasyw). Pokazuje że temat jest dyskutowany ogólnie. 'Se' + trzecia osoba to typowa konstrukcja bezosobowa."
      },
      {
        id: "imp_5",
        question: "_____ importante que todos respeten las normas básicas de convivencia en la comunidad residencial.",
        translation: "(Ważne jest, żeby wszyscy szanowali podstawowe zasady współżycia we wspólnocie mieszkaniowej)",
        options: ["Es", "Está", "Hay", "Se es"],
        correct: "Es",
        explanation: "'Es importante que + subjuntivo' dla bezosobowej konieczności. Po 'es + przymiotnik + que' zawsze subjuntivo. To uniwersalna zasada dla wszystkich."
      },
      {
        id: "imp_6",
        question: "_____ permite fumar en las terrazas exteriores de los bares pero no dentro del local cerrado.",
        translation: "(Pozwala się palić na zewnętrznych tarasach barów, ale nie wewnątrz zamkniętego lokalu)",
        options: ["Se", "Está", "Es", "Hay"],
        correct: "Se",
        explanation: "'Se permite' to pozwala się (bezosobowe dozwolenie). To oficjalna reguła bez wskazywania kto pozwala. Bezosobowy pasyw dla przepisów jest standardem."
      },
      {
        id: "imp_7",
        question: "_____ mejor que lleguemos temprano al aeropuerto para evitar prisas de última hora estresantes.",
        translation: "(Lepiej, żebyśmy dotarli wcześnie na lotnisko, żeby uniknąć stresujących pośpiechów w ostatniej chwili)",
        options: ["Es", "Está", "Será", "Sería"],
        correct: "Es",
        explanation: "'Es mejor que + subjuntivo' to lepiej żeby. Bezosobowa rada dla wszystkich. 'Mejor' wymaga subjuntivo po 'que' - to opinia, nie fakt."
      },
      {
        id: "imp_8",
        question: "_____ posible que haya cambios importantes en el horario de trabajo la próxima semana laboral.",
        translation: "(Możliwe jest, że będą ważne zmiany w harmonogramie pracy w przyszłym tygodniu roboczym)",
        options: ["Es", "Está", "Hay", "Se es"],
        correct: "Es",
        explanation: "'Es posible que + subjuntivo' wyraża możliwość. Bezosobowa niepewność wymaga trybu łączącego. 'Posible' to ocena prawdopodobieństwa, nie pewność."
      },
      {
        id: "imp_9",
        question: "_____ vende ropa de segunda mano usada en esa tienda pequeña de la esquina del barrio.",
        translation: "(Sprzedaje się używaną odzież z drugiej ręki w tym małym sklepie na rogu dzielnicy)",
        options: ["Se", "Está", "Es", "Hay"],
        correct: "Se",
        explanation: "'Se vende' to sprzedaje się (bezosobowo). Typowe dla ogłoszeń sklepowych. Nie mówimy kto sprzedaje - focus na produkcie i akcji, nie sprzedawcy."
      },
      {
        id: "imp_10",
        question: "_____ difícil aprender un idioma nuevo sin practicarlo regularmente con nativos hablantes.",
        translation: "(Trudne jest nauczyć się nowego języka bez regularnego ćwiczenia go z natywnymi mówiącymi)",
        options: ["Es", "Está", "Resulta", "Se es"],
        correct: "Es",
        explanation: "'Es difícil + infinitivo' to ogólna prawda. Bezosobowa trudność dla wszystkich. Infinitiv po 'es + przymiotnik' to standard dla uniwersalnych stwierdzeń."
      },
      {
        id: "imp_11",
        question: "_____ bien que los jóvenes participen activamente en actividades comunitarias de voluntariado local.",
        translation: "(Dobrze jest, że młodzi aktywnie uczestniczą w lokalnych społecznościowych działaniach wolontariackich)",
        options: ["Está", "Es", "Se está", "Hay"],
        correct: "Está",
        explanation: "'Está bien que + subjuntivo' to dobrze że. 'Estar bien' dla oceny moralnej sytuacji. To różni się od 'ser bueno' - 'estar bien' jest bardziej emocjonalne."
      },
      {
        id: "imp_12",
        question: "_____ evidente que necesitas descansar más porque te ves muy agotado y pálido últimamente.",
        translation: "(Oczywiste jest, że potrzebujesz więcej odpoczywać, bo wyglądasz bardzo wyczerpany i blado ostatnio)",
        options: ["Es", "Está", "Resulta", "Se es"],
        correct: "Es",
        explanation: "'Es evidente que + indicativo' bo to widoczny fakt. Gdy coś jest oczywiste, używamy indicativo nie subjuntivo. Pewność nie wymaga trybu łączącego."
      },
      {
        id: "imp_13",
        question: "_____ cree que la economía mejorará gradualmente durante los próximos meses del año fiscal.",
        translation: "(Wierzy się, że ekonomia poprawi się stopniowo podczas przyszłych miesięcy roku fiskalnego)",
        options: ["Se", "Está", "Es", "Hay"],
        correct: "Se",
        explanation: "'Se cree que' to wierzy się że (opinia ogólna). Bezosobowy pasyw dla przekonań zbiorowych. To bardziej miękkie niż 'es cierto que' - pokazuje opinię nie fakt."
      },
      {
        id: "imp_14",
        question: "_____ probable que tengamos que posponer la reunión por falta de tiempo disponible suficiente.",
        translation: "(Prawdopodobne jest, że będziemy musieli przełożyć spotkanie z powodu braku wystarczającego dostępnego czasu)",
        options: ["Es", "Está", "Será", "Se es"],
        correct: "Es",
        explanation: "'Es probable que + subjuntivo' to prawdopodobne że. Prawdopodobieństwo nie jest pewnością, więc subjuntivo. Stopień pewności określa tryb - wątpliwość = subjuntivo."
      },
      {
        id: "imp_15",
        question: "_____ fundamental respetar las opiniones diferentes de otras personas en debates públicos democráticos.",
        translation: "(Fundamentalne jest szanować różne opinie innych osób w publicznych demokratycznych debatach)",
        options: ["Es", "Está", "Resulta", "Se es"],
        correct: "Es",
        explanation: "'Es fundamental + infinitivo' dla wartości uniwersalnej. Bezosobowe stwierdzenie wartości moralnej. 'Ser' dla zasad etycznych i fundamentów społecznych."
      }
    ]
  },

  wishes_and_desires: {
    name: "Życzenia i pragnienia",
    description: "Wyrażaj marzenia używając subjuntivo",
    icon: Sparkles,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "wish_1",
        question: "Ojalá _____ más tiempo libre para dedicarme a mis aficiones personales favoritas cada día.",
        translation: "(Oby miał więcej wolnego czasu, żeby poświęcić się moim ulubionym osobistym hobby każdego dnia)",
        options: ["tuviera", "tenga", "tenía", "tendría"],
        correct: "tuviera",
        explanation: "'Ojalá' + imperfecto subjuntivo dla mało prawdopodobnego życzenia. 'Tuviera' wyraża pragnienie które raczej się nie spełni. To silniejsze niż 'ojalá tenga' (możliwe)."
      },
      {
        id: "wish_2",
        question: "Quisiera que mis hijos _____ la importancia de la educación y el aprendizaje continuo.",
        translation: "(Chciałbym, żeby moje dzieci zrozumiały wagę edukacji i ciągłego uczenia się)",
        options: ["entendieran", "entiendan", "entendían", "entenderían"],
        correct: "entendieran",
        explanation: "'Quisiera que' (łagodniejsze życzenie) + imperfecto subjuntivo. To uprzejma forma wyrażenia pragnienia. Mniej kategoryczne niż 'quiero que' + presente subjuntivo."
      },
      {
        id: "wish_3",
        question: "Espero que el tiempo _____ bueno para poder organizar la boda en el jardín al aire libre.",
        translation: "(Mam nadzieję, że pogoda będzie dobra, żeby móc zorganizować ślub w ogrodzie na świeżym powietrzu)",
        options: ["esté", "está", "estará", "estuviera"],
        correct: "esté",
        explanation: "'Esperar que' + presente subjuntivo dla realnej nadziei. 'Esté' wyraża możliwość która może się spełnić. To optymistyczne życzenie z prawdopodobieństwem spełnienia."
      },
      {
        id: "wish_4",
        question: "Ojalá no _____ lloviendo mañana para poder ir de excursión a las montañas como planeamos.",
        translation: "(Oby nie padało jutro, żeby móc pójść na wycieczkę w góry jak zaplanowaliśmy)",
        options: ["esté", "está", "estuviera", "estará"],
        correct: "esté",
        explanation: "'Ojalá no esté lloviendo' - presente subjuntivo z gerundio. Dla jutro (bliskiej przyszłości) używamy presente subjuntivo. To wyrażeżyczenie o konkretnym momencie przyszłym."
      },
      {
        id: "wish_5",
        question: "Me gustaría que _____ más a menudo para mantenernos en contacto cercano y actualizado.",
        translation: "(Chciałbym, żebyśmy widzieli się częściej, żeby utrzymać bliski i aktualny kontakt)",
        options: ["nos viéramos", "nos vemos", "nos veríamos", "nos hemos visto"],
        correct: "nos viéramos",
        explanation: "'Me gustaría que' + imperfecto subjuntivo dla uprzejmego życzenia. To łagodniejsze niż 'quiero que'. Conditional + imperfecto subjuntivo to najbardziej grzeczna forma sugestii."
      },
      {
        id: "wish_6",
        question: "Ojalá mi equipo favorito _____ el campeonato este año después de tantos años sin lograrlo.",
        translation: "(Oby moja ulubiona drużyna wygrała mistrzostwo w tym roku po tylu latach bez osiągnięcia tego)",
        options: ["gane", "gana", "ganara", "ganaría"],
        correct: "gane",
        explanation: "'Ojalá gane' - presente subjuntivo dla możliwego wydarzenia. To realna nadzieja na przyszłość. 'Ganara' byłoby mniej prawdopodobne lub niezrealizowane."
      },
      {
        id: "wish_7",
        question: "Desearía que las cosas _____ sido diferentes en aquella situación difícil del pasado reciente.",
        translation: "(Chciałbym, żeby rzeczy były inne w tamtej trudnej sytuacji z niedawnej przeszłości)",
        options: ["hubieran", "hayan", "habían", "habrían"],
        correct: "hubieran",
        explanation: "'Desearía que hubieran sido' - pluperfecto subjuntivo dla przeszłości. Żałujesz czegoś co się już stało. To życzenie retrospektywne które nie może się spełnić."
      },
      {
        id: "wish_8",
        question: "Ojalá _____ la lotería nacional para poder viajar por todo el mundo sin preocupaciones financieras.",
        translation: "(Oby wygrał na narodowej loterii, żeby móc podróżować po całym świecie bez finansowych zmartwień)",
        options: ["me tocara", "me toque", "me tocó", "me tocaría"],
        correct: "me tocara",
        explanation: "'Ojalá me tocara' - imperfecto subjuntivo dla mało prawdopodobnego. 'Tocar la lotería' to idiom dla wygrania. To marzenie które raczej nie spełni."
      },
      {
        id: "wish_9",
        question: "Espero que no _____ ningún problema con la reserva del hotel para nuestras vacaciones familiares.",
        translation: "(Mam nadzieję, że nie będzie żadnego problemu z rezerwacją hotelu na nasze rodzinne wakacje)",
        options: ["haya", "hay", "habrá", "hubiera"],
        correct: "haya",
        explanation: "'Espero que no haya' - presente subjuntivo dla nadziei. Negacja 'no' nie zmienia wymogu subjuntivo. To optymistyczne życzenie że wszystko pójdzie dobrze."
      },
      {
        id: "wish_10",
        question: "Quisiera que me _____ escuchado cuando te advertí sobre ese peligro potencial evidente.",
        translation: "(Chciałbym, żebyś mnie wysłuchał, kiedy ostrzegałem cię o tym oczywistym potencjalnym niebezpieczeństwie)",
        options: ["hubieras", "hayas", "habías", "habrías"],
        correct: "hubieras",
        explanation: "'Quisiera que hubieras' - żal za przeszłością. Pluperfecto subjuntivo dla akcji która się nie wydarzyła. To wyrażenie żalu że ktoś nie posłuchał rady."
      },
      {
        id: "wish_11",
        question: "Ojalá algún día _____ realizar mi sueño de vivir cerca del mar Mediterráneo azul.",
        translation: "(Oby kiedyś mógł zrealizować moje marzenie życia blisko błękitnego Morza Śródziemnego)",
        options: ["pueda", "puede", "pudiera", "podría"],
        correct: "pueda",
        explanation: "'Ojalá algún día pueda' - presente subjuntivo dla przyszłej możliwości. 'Algún día' sugeruje optymizm. To realistyczne marzenie które może się spełnić z czasem."
      },
      {
        id: "wish_12",
        question: "Deseo que todos ustedes _____ muy felices y prósperos en el nuevo año que comienza.",
        translation: "(Życzę, żeby wszyscy Państwo byli bardzo szczęśliwi i pomyślni w nowym roku, który się zaczyna)",
        options: ["sean", "son", "serán", "fueran"],
        correct: "sean",
        explanation: "'Desear que + presente subjuntivo' dla życzeń. To formalne życzenia noworoczne. 'Sean' bo to przyszłość możliwa i pożądana."
      },
      {
        id: "wish_13",
        question: "Ojalá no _____ pasado nada malo durante el accidente de tráfico de ayer en la autopista.",
        translation: "(Oby nic złego się nie stało podczas wczorajszego wypadku drogowego na autostradzie)",
        options: ["haya", "ha", "había", "hubiera"],
        correct: "haya",
        explanation: "'Ojalá no haya pasado' - presente perfecto subjuntivo dla niedawnej przeszłości. Nie wiesz co się stało, więc wyrażasz nadzieję o przeszłości. To życzenie retrospektywne z niepewnością."
      },
      {
        id: "wish_14",
        question: "Me encantaría que _____ a visitarme durante las vacaciones de verano en mi nueva casa rural.",
        translation: "(Bardzo bym chciał, żebyś przyszedł mnie odwiedzić podczas letnich wakacji w moim nowym wiejskim domu)",
        options: ["vinieras", "vengas", "venías", "vendrías"],
        correct: "vinieras",
        explanation: "'Me encantaría que' + imperfecto subjuntivo to grzeczne zaproszenie. Conditional + imperfecto subjuntivo czyni propozycję delikatniejszą. To uprzejma forma wyrażenia pragnienia."
      },
      {
        id: "wish_15",
        question: "Ojalá mi abuela _____ aquí hoy para ver lo mucho que han crecido sus bisnietos adorados.",
        translation: "(Oby moja babcia była tutaj dziś, żeby zobaczyć jak bardzo urosły jej uwielbiane prawnuki)",
        options: ["estuviera", "esté", "estaba", "estaría"],
        correct: "estuviera",
        explanation: "'Ojalá estuviera' - imperfecto subjuntivo dla niemożliwego życzenia (babcia nie żyje lub jest daleko). To nostalgiczne, melancholijne życzenie o czymś niedostępnym."
      }
    ]
  },

  purpose_and_result_clauses: {
    name: "Zdania celowe i skutkowe",
    description: "Wyrażaj cele i rezultaty działań",
    icon: Target,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "pur_1",
        question: "Te llamo _____ avisarte de un cambio importante en nuestros planes del fin de semana.",
        translation: "(Dzwonię do ciebie, żeby cię powiadomić o ważnej zmianie w naszych planach weekendowych)",
        options: ["para", "por", "a fin de", "con el fin de"],
        correct: "para",
        explanation: "'Para + infinitivo' to żeby (cel). Najprostsza forma zdania celowego. Cel i akcja mają ten sam podmiot (ja dzwonię żeby ja powiadomić)."
      },
      {
        id: "pur_2",
        question: "Estudia mucho _____ conseguir una buena nota en el examen final del semestre académico.",
        translation: "(Ucz się dużo, żeby uzyskać dobrą ocenę na końcowym egzaminie semestru akademickiego)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para + infinitivo' wyraża cel studiowania. Pokazuje intencję i zamiar. Uczysz się Z CELEM dostania dobrej oceny - cel motywuje akcję."
      },
      {
        id: "pur_3",
        question: "Hablo despacio _____ tú me entiendas mejor sin tener que repetir las cosas constantemente.",
        translation: "(Mówię wolno, żebyś mnie lepiej rozumiał nie musząc ciągle powtarzać rzeczy)",
        options: ["para que", "porque", "por qué", "para"],
        correct: "para que",
        explanation: "'Para que + subjuntivo' gdy podmioty są różne. Ja mówię żeby TY rozumiał. Zmiana podmiotu wymaga 'que' + subjuntivo zamiast samego infinitivu."
      },
      {
        id: "pur_4",
        question: "Trabajé tanto que _____ completamente agotado y enfermo al final del mes estresante.",
        translation: "(Pracowałem tak dużo, że skończyłem całkowicie wyczerpany i chory na końcu stresującego miesiąca)",
        options: ["terminé", "termino", "terminara", "termine"],
        correct: "terminé",
        explanation: "'Tan/tanto... que + indicativo' wyraża rezultat. To skutek nadmiernej pracy. Zdania rezultatu używają indicativo bo opisują rzeczywisty efekt, nie hipotetyczny."
      },
      {
        id: "pur_5",
        question: "Te escribo esta carta larga _____ sepas toda la verdad completa sobre lo que realmente pasó.",
        translation: "(Piszę ci ten długi list, żebyś znał całą kompletną prawdę o tym, co naprawdę się stało)",
        options: ["para que", "porque", "para", "por"],
        correct: "para que",
        explanation: "'Para que + subjuntivo' bo cel dotyczy innej osoby. Piszę żeby TY wiedział. Komunikacja celu z różnymi podmiotami wymaga 'para que' + subjuntivo."
      },
      {
        id: "pur_6",
        question: "Había tanta gente en el concierto que no _____ ver bien el escenario principal desde atrás.",
        translation: "(Było tyle ludzi na koncercie, że nie mogłem dobrze widzieć głównej sceny z tyłu)",
        options: ["podía", "pueda", "pudiera", "pude"],
        correct: "podía",
        explanation: "'Tanto/tanta... que' + imperfecto dla rezultatu trwającego. Tłum powodował ciągłą niemożność widzenia. Imperfecto pokazuje trwający stan podczas koncertu."
      },
      {
        id: "pur_7",
        question: "Lo repito varias veces _____ quede absolutamente claro para todos los presentes aquí.",
        translation: "(Powtarzam to kilka razy, żeby było absolutnie jasne dla wszystkich obecnych tutaj)",
        options: ["para que", "porque", "para", "así que"],
        correct: "para que",
        explanation: "'Para que + subjuntivo' dla celu wpływającego na innych. Powtarzam żeby TO było jasne (dla was). Cel bezosobowy też wymaga 'para que' + subjuntivo."
      },
      {
        id: "pur_8",
        question: "Habló tan rápido durante la presentación que nadie _____ entender sus explicaciones técnicas complejas.",
        translation: "(Mówił tak szybko podczas prezentacji, że nikt nie mógł zrozumieć jego złożonych technicznych wyjaśnień)",
        options: ["pudo", "puede", "pudiera", "pueda"],
        correct: "pudo",
        explanation: "'Tan... que + pretérito' dla konkretnego rezultatu. Szybkość spowodowała brak zrozumienia. Pretérito bo to zakończone wydarzenie z określonym skutkiem."
      },
      {
        id: "pur_9",
        question: "Ahorro dinero cada mes _____ poder comprarme un coche nuevo el año que viene.",
        translation: "(Oszczędzam pieniądze każdego miesiąca, żeby móc kupić sobie nowy samochód w przyszłym roku)",
        options: ["para", "por", "a fin de", "con el objetivo de"],
        correct: "para",
        explanation: "'Para + infinitivo' dla osobistego celu długoterminowego. Oszczędzanie Z CELEM zakupu. Ten sam podmiot (ja oszczędzam, ja kupię) wymaga infinitivu bez 'que'."
      },
      {
        id: "pur_10",
        question: "Comió tan deprisa que le _____ dolor de estómago terrible después de la comida pesada.",
        translation: "(Jadł tak szybko, że dostał okropnego bólu brzucha po ciężkim posiłku)",
        options: ["dio", "daba", "diera", "dé"],
        correct: "dio",
        explanation: "'Tan... que + pretérito' dla natychmiastowego skutku. Szybkie jedzenie spowodowało ból. Pretérito bo to konkretny rezultat pojedynczego wydarzenia."
      },
      {
        id: "pur_11",
        question: "Vine temprano _____ ayudarte con los preparativos de la fiesta sorpresa de cumpleaños.",
        translation: "(Przyszedłem wcześnie, żeby ci pomóc z przygotowaniami niespodziankowej imprezy urodzinowej)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Venir para + infinitivo' wyraża cel przyjścia. Przyszedłeś Z ZAMIAREM pomocy. 'Para' zawsze dla celu i intencji działania."
      },
      {
        id: "pur_12",
        question: "Era tan inteligente la niña que _____ resolver problemas matemáticos muy complejos fácilmente.",
        translation: "(Dziewczynka była tak inteligentna, że mogła łatwo rozwiązywać bardzo złożone problemy matematyczne)",
        options: ["podía", "pudo", "pudiera", "puede"],
        correct: "podía",
        explanation: "'Tan... que + imperfecto' dla trwałej zdolności. Jej inteligencja pozwalała jej (ogólnie, zawsze) rozwiązywać problemy. Imperfecto dla charakterystyki nie jednorazowego wydarzenia."
      },
      {
        id: "pur_13",
        question: "Te dejo mi número de teléfono _____ puedas contactarme en caso de cualquier emergencia urgente.",
        translation: "(Zostawiam ci mój numer telefonu, żebyś mógł skontaktować się ze mną w przypadku jakiegokolwiek pilnego wypadku)",
        options: ["para que", "porque", "para", "por si"],
        correct: "para que",
        explanation: "'Para que + subjuntivo' bo cel dotyczy ciebie. Zostawiam żeby TY mógł. Różne podmioty wymagają 'para que' zamiast samego 'para'."
      },
      {
        id: "pur_14",
        question: "Estudiaba tanto que no _____ tiempo para vida social ni actividades de ocio recreativas.",
        translation: "(Studiował tak dużo, że nie miał czasu na życie towarzyskie ani rekreacyjne zajęcia wypoczynkowe)",
        options: ["tenía", "tuvo", "tuviera", "tenga"],
        correct: "tenía",
        explanation: "'Tanto... que + imperfecto' dla trwającego rezultatu. Ciągłe studiowanie powodowało ciągły brak czasu. Imperfecto pokazuje że to był stały stan nie jednorazowe zdarzenie."
      },
      {
        id: "pur_15",
        question: "Lo hice todo así _____ no hubiera malentendidos ni confusiones entre nosotros después.",
        translation: "(Zrobiłem to wszystko tak, żeby nie było nieporozumień ani zamieszania między nami później)",
        options: ["para que", "porque", "para", "por qué"],
        correct: "para que",
        explanation: "'Para que + imperfecto subjuntivo' po przeszłości. Zrobiłeś coś Z CELEM uniknięcia problemów. 'Así para que' wzmacnia intencjonalność - bardzo przemyślane działanie."
      }
    ]
  }
};

export default part19Categories;
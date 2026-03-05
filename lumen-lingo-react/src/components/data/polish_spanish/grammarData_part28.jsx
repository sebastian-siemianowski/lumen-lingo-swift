/**
 * POLISH → SPANISH GRAMMAR - PART 28
 * 3 categories, 15 questions each - Practical mastery
 */

import { AlertTriangle, MessageCircle, HelpCircle } from "lucide-react";

export const part28Categories = {
  false_friends_tricky: {
    name: "Fałszywi przyjaciele językowi",
    description: "Słowa które wyglądają podobnie ale znaczą co innego",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "false_1",
        question: "El _____ me dijo que tengo que tomar medicamentos durante una semana completa para curarme.",
        translation: "(Lekarz powiedział mi, że muszę brać leki przez cały tydzień, żeby się wyleczyć)",
        options: ["médico", "medico", "doctor", "medicino"],
        correct: "médico",
        explanation: "'Médico' to lekarz po hiszpańsku. Nie mylić z polskim 'medyk' które brzmi podobnie. 'Medico' (bez akcentu) to forma czasownika 'medir' (mierzyć). W hiszpańskim mówimy 'médico' lub 'doctor' dla lekarza, nigdy 'medicino'."
      },
      {
        id: "false_2",
        question: "_____ español es un idioma hermoso con muchas palabras árabes en su vocabulario histórico.",
        translation: "(Język hiszpański jest pięknym językiem z wieloma arabskimi słowami w swoim historycznym słownictwie)",
        options: ["El", "La", "Lo", "El idioma"],
        correct: "El",
        explanation: "'El español' to język hiszpański (męski). Nie 'la español' mimo że po polsku 'hiszpański' to przymiotnik. W hiszpańskim 'español' jako rzeczownik (język) jest męski - 'el español'. Można też 'el idioma español' ale samo 'el español' jest częstsze."
      },
      {
        id: "false_3",
        question: "No soy _____ de hacer esto, necesito más tiempo para aprender la técnica correctamente.",
        translation: "(Nie jestem w stanie tego zrobić, potrzebuję więcej czasu, żeby nauczyć się prawidłowej techniki)",
        options: ["capaz", "capable", "capacho", "capazmente"],
        correct: "capaz",
        explanation: "'Capaz' to zdolny/w stanie coś zrobić. Wygląda jak polskie 'kapać' ale nie ma związku. To fałszywy przyjaciel - 'capaz' znaczy 'zdolny' nie 'kapać'. Po 'capaz' używamy 'de + infinitivo' dla pokazania czego nie jesteś w stanie zrobić."
      },
      {
        id: "false_4",
        question: "Mi hermana está muy _____ porque mañana tiene su boda soñada en la playa al atardecer.",
        translation: "(Moja siostra jest bardzo podekscytowana, bo jutro ma swój wymarzony ślub na plaży o zachodzie słońca)",
        options: ["emocionada", "emocjonada", "emotiva", "emocional"],
        correct: "emocionada",
        explanation: "'Emocionada' to podekscytowana (uczucie). Brzmi jak polskie 'emocjonalna' ale znaczenie różne - to o konkretnym stanie emocji teraz. 'Emocional' istnieje ale znaczy 'emocjonalny' jako cecha osobowości. 'Emocionada' to być podekscytowaną w tym momencie - stan tymczasowy."
      },
      {
        id: "false_5",
        question: "Es muy _____ que llegues puntual a la entrevista, el jefe valora mucho la puntualidad siempre.",
        translation: "(Jest bardzo ważne, żebyś przyszedł punktualnie na rozmowę kwalifikacyjną, szef bardzo ceni punktualność zawsze)",
        options: ["importante", "importante", "importanto", "importantoso"],
        correct: "importante",
        explanation: "'Importante' to ważny/ważne. Nie mylić z polskim 'imponujący'. To prosty fałszywy przyjaciel - 'importante' znaczy tylko 'ważny' nigdy 'imponujący'. Dla 'imponujący' używamy 'impresionante' w hiszpańskim - całkiem inne słowo."
      },
      {
        id: "false_6",
        question: "_____ mucho calor en verano aquí, las temperaturas pueden superar los cuarenta grados fácilmente.",
        translation: "(Jest bardzo gorąco latem tutaj, temperatury mogą łatwo przekraczać czterdzieści stopni)",
        options: ["Hace", "Está", "Hay", "Es"],
        correct: "Hace",
        explanation: "'Hacer calor' to konstrukcja dla pogody gorącej. Nie 'estar calor' mimo że po polsku 'jest gorąco'. W hiszpańskim pogoda używa 'hacer' (robić) - dosłownie 'robi ciepło'. To idiom który trzeba zapamiętać - 'hace calor/frío/sol/viento' dla pogody."
      },
      {
        id: "false_7",
        question: "El _____ de mi empresa es muy moderno con grandes ventanas que dan mucha luz natural dentro.",
        translation: "(Biuro mojej firmy jest bardzo nowoczesne z wielkimi oknami, które dają dużo naturalnego światła w środku)",
        options: ["despacho", "oficina", "bureau", "despachó"],
        correct: "despacho",
        explanation: "'Despacho' lub 'oficina' to biuro po hiszpańsku. Polskie 'biuro' wygląda jak francuskie ale po hiszpańsku to 'despacho' (pojedyncze) lub 'oficina' (ogólne). 'Despacho' bardziej dla prywatnego pokoju biurowego, 'oficina' dla całego biura firmowego."
      },
      {
        id: "false_8",
        question: "_____ semana pasada fui al cine tres veces, había muchas películas buenas en estreno simultáneamente.",
        translation: "(W zeszłym tygodniu poszedłem do kina trzy razy, było dużo dobrych filmów na premierze jednocześnie)",
        options: ["La", "El", "Las", "Lo"],
        correct: "La",
        explanation: "'La semana' jest żeńska po hiszpańsku. Polskie 'tydzień' jest męski ale hiszpańskie 'semana' żeńskie. To fałszywy przyjaciel rodzaju - 'semana' kończy się na -a i jest żeńska. Zawsze 'la semana', 'esta semana', 'próxima semana'."
      },
      {
        id: "false_9",
        question: "Ten _____ con las palabras que uses, algunas expresiones son ofensivas en este contexto cultural específico.",
        translation: "(Uważaj na słowa których używasz, niektóre wyrażenia są obraźliwe w tym specyficznym kontekście kulturowym)",
        options: ["cuidado", "cuenta", "atención", "ojo"],
        correct: "cuidado",
        explanation: "'Tener cuidado' to uważać/być ostrożnym. Brzmi jak polskie 'kujon' ale nie ma związku. 'Cuidado' znaczy ostrożność/troska. Hiszpańskie 'tener cuidado con' to uważać na coś - używamy 'con' po 'cuidado' dla wskazania czego dotyczy ostrożność."
      },
      {
        id: "false_10",
        question: "_____ un momento por favor, voy a buscar el documento que necesitas en el archivo del escritorio.",
        translation: "(Zaczekaj chwilę proszę, poszukam dokumentu którego potrzebujesz w szufladzie biurka)",
        options: ["Espera", "Aspetta", "Espere", "Espérate"],
        correct: "Espera",
        explanation: "'Espera' (tú imperativ) to zaczekaj. Wygląda jak włoskie 'aspetta' ale po hiszpańsku 'espera'. Polskie 'zaczekaj' nie ma podobnego słowa. 'Espera' dla przyjaciół (tú), 'espere' dla formalnego (usted). Proste ale ważne do zapamiętania - bez 'a' na początku."
      },
      {
        id: "false_11",
        question: "Quiero _____ italiano el próximo año porque me encanta la cultura y gastronomía de Italia profundamente.",
        translation: "(Chcę uczyć się włoskiego w przyszłym roku, bo bardzo kocham kulturę i gastronomię Włoch)",
        options: ["aprender", "estudiar", "aprehender", "aprenderme"],
        correct: "aprender",
        explanation: "'Aprender' to uczyć się (nabywać umiejętność). Wygląda jak polskie 'aprehensja' ale znaczy uczyć się. 'Estudiar' też znaczy uczyć się ale 'aprender' fokusuje na rezultacie - nabyciu wiedzy. 'Quiero aprender' = chcę się nauczyć (i umieć), 'quiero estudiar' = chcę studiować (proces)."
      },
      {
        id: "false_12",
        question: "Este libro es muy _____ para entender, está escrito con un lenguaje técnico y especializado complejo.",
        translation: "(Ta książka jest bardzo trudna do zrozumienia, jest napisana specjalistycznym i złożonym językiem technicznym)",
        options: ["difícil", "dificil", "dificile", "dificult"],
        correct: "difícil",
        explanation: "'Difícil' (z akcentem) to trudny. Nie mylić z włoskim 'difficile' czy angielskim 'difficult'. Hiszpańskie 'difícil' wymaga akcentu na 'i' dla prawidłowej wymowy. Bez akcentu byłby błąd ortograficzny - akcent zmienia wymowę z di-fi-CIL na di-FI-cil."
      },
      {
        id: "false_13",
        question: "Me _____ mucho la cabeza después de estudiar tantas horas sin descanso ante la pantalla brillante.",
        translation: "(Bardzo boli mnie głowa po studiowaniu tylu godzin bez przerwy przed jasnym ekranem)",
        options: ["duele", "duela", "dolor", "dolera"],
        correct: "duele",
        explanation: "'Me duele' to boli mnie (ból fizyczny). Brzmi jak polskie 'dupa' ale nie ma związku! 'Doler' to boleć - 'me duele la cabeza' (boli mnie głowa). Czasownik jak 'gustar' - to co boli jest podmiotem gramatycznym, ty jesteś odbiorcą bólu."
      },
      {
        id: "false_14",
        question: "No _____ olvidar las llaves otra vez, la última vez tuve que llamar al cerrajero y fue carísimo.",
        translation: "(Nie zapomnij kluczy znowu, ostatnim razem musiałem dzwonić po ślusarza i było bardzo drogo)",
        options: ["vayas a", "vas a", "irás a", "fueras"],
        correct: "vayas a",
        explanation: "'No vayas a olvidar' to nie zapomnij (ostrzeżenie). Negatywny imperatyw używa subjuntivo - 'no vayas'. Dodatkowo 'ir a + infinitivo' dla przyszłości. To podwójna konstrukcja - negatywny rozkaz w subjuntivo + peryfrastyczna przyszłość dla wyrażenia silnego ostrzeżenia."
      },
      {
        id: "false_15",
        question: "_____ raro que no haya venido todavía, siempre es muy puntual y responsable con los horarios acordados.",
        translation: "(Dziwne, że jeszcze nie przyszedł, zawsze jest bardzo punktualny i odpowiedzialny z ustalonymi godzinami)",
        options: ["Es", "Está", "Hay", "Hace"],
        correct: "Es",
        explanation: "'Es raro que' to konstrukcja dla dziwności czegoś (ocena). Zawsze 'ser' dla ocen jakości sytuacji. Po 'es raro/extraño/normal que' używamy subjuntivo - 'haya venido'. To pokazuje że oceniamy fakt jako dziwny - 'ser' dla charakterystyki sytuacji."
      }
    ]
  },

  discourse_markers_advanced: {
    name: "Zaawansowane łączniki dyskursu",
    description: "Połącz myśli płynnie i profesjonalnie",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "disc_1",
        question: "No es que no me guste tu idea, _____ que creo que hay una forma más eficiente de hacerlo.",
        translation: "(Nie chodzi o to, że nie podoba mi się twój pomysł, tylko że myślę że jest bardziej efektywny sposób żeby to zrobić)",
        options: ["sino", "pero", "mas", "aunque"],
        correct: "sino",
        explanation: "'Sino' używamy po negacji dla korekty. 'No es que... sino que...' to konstrukcja dla wyjaśnienia prawdziwego powodu. 'Sino' zawsze po zaprzeczeniu - koryguje błędne wrażenie. Różni się od 'pero' - 'sino' całkowicie zastępuje pierwszą ideę, podczas gdy 'pero' dodaje kontrast."
      },
      {
        id: "disc_2",
        question: "_____ todo el mundo dice que es difícil, yo creo que con práctica constante es totalmente posible dominarlo.",
        translation: "(Chociaż wszyscy mówią, że jest trudne, ja myślę że przy stałej praktyce jest całkowicie możliwe to opanować)",
        options: ["Aunque", "Sin embargo", "Pero", "Mas"],
        correct: "Aunque",
        explanation: "'Aunque' na początku zdania wprowadza koncesję. Używamy indicativo gdy mówimy o fakcie (wszyscy mówią). 'Aunque' może brać indicativo (fakt) lub subjuntivo (hipotetyczne). Tutaj to fakt że ludzie mówią, więc indicativo - 'aunque dice' potwierdza realność opinii innych."
      },
      {
        id: "disc_3",
        question: "El proyecto es muy ambicioso y complejo. _____, con el equipo adecuado podemos lograrlo exitosamente.",
        translation: "(Projekt jest bardzo ambitny i złożony. Jednakże z odpowiednim zespołem możemy go z powodzeniem osiągnąć)",
        options: ["Sin embargo", "Pero", "Aunque", "Sino"],
        correct: "Sin embargo",
        explanation: "'Sin embargo' to jednakże (formalny kontrast). Bardziej formalne niż 'pero'. Używamy na początku nowego zdania dla pokazania przeciwieństwa między ideami. 'Sin embargo' zawsze z przecinkiem po - to marker dyskursu który wprowadza nową perspektywę kontrastującą z poprzednią."
      },
      {
        id: "disc_4",
        question: "_____ estudies mucho, si no duermes bien no podrás concentrarte durante el examen importante mañana.",
        translation: "(Choćbyś dużo studiował, jeśli nie śpisz dobrze, nie będziesz mógł się skoncentrować podczas ważnego egzaminu jutro)",
        options: ["Aunque", "Aun cuando", "Por más que", "Si bien"],
        correct: "Por más que",
        explanation: "'Por más que' + subjuntivo to choćby/jakkolwiek bardzo (intensywna koncesja). Silniejsze niż samo 'aunque'. Pokazuje że mimo maksymalnego wysiłku w jednym aspekcie, coś innego jest kluczowe. 'Por más que' podkreśla intensywność pierwszej akcji która nie wystarcza."
      },
      {
        id: "disc_5",
        question: "El restaurante no solo tiene buena comida _____ también un servicio excelente y ambiente acogedor único.",
        translation: "(Restauracja nie tylko ma dobre jedzenie, ale także doskonałą obsługę i unikalną przytulną atmosferę)",
        options: ["sino", "pero", "mas", "aunque"],
        correct: "sino",
        explanation: "'No solo... sino también' to nie tylko... ale także (dodawanie pozytywów). 'Sino' po 'no solo' dodaje kolejny pozytywny element. To ustalona konstrukcja - zawsze razem te dwa elementy. Różni się od prostego 'pero' - 'sino también' wzmacnia połączenie między elementami."
      },
      {
        id: "disc_6",
        question: "_____ de que llueva, iremos de excursión porque ya tenemos todo planificado y reservado desde hace meses.",
        translation: "(Nawet jeśli będzie padać, pójdziemy na wycieczkę, bo już wszystko mamy zaplanowane i zarezerwowane od miesięcy)",
        options: ["A pesar", "Aunque", "Si bien", "Aun cuando"],
        correct: "A pesar",
        explanation: "'A pesar de que' + subjuntivo to nawet jeśli (mimo możliwości). Formalna fraza koncesyjna. Subjuntivo 'llueva' bo mówimy o przyszłej możliwości która nie powstrzyma planów. 'A pesar de' wymaga 'que' przed czasownikiem - to przyimek który potrzebuje łącznika."
      },
      {
        id: "disc_7",
        question: "_____ un lado me gusta la ciudad por sus oportunidades, _____ otro lado prefiero la tranquilidad del campo.",
        translation: "(Z jednej strony podoba mi się miasto ze względu na możliwości, z drugiej strony wolę spokój wsi)",
        options: ["Por / por", "De / de", "A / a", "En / en"],
        correct: "Por / por",
        explanation: "'Por un lado... por otro lado' to z jednej strony... z drugiej (balansowanie perspektyw). Zawsze 'por' w obu częściach. To formalna konstrukcja dla prezentowania dwóch stron argumentu - pokazuje że rozważasz obie perspektywy przed decyzją lub wnioskiem."
      },
      {
        id: "disc_8",
        question: "No fue a la fiesta _____ a estudiar para el examen porque tiene prioridades claras este semestre.",
        translation: "(Nie poszedł na imprezę, tylko studiować na egzamin, bo ma jasne priorytości w tym semestrze)",
        options: ["sino", "pero", "mas", "aunque"],
        correct: "sino",
        explanation: "'Sino' po negacji wprowadza prawdziwą akcję. Nie poszedł na imprezę ALE ZAMIAST studiował. 'Sino' wymaga infinitivu gdy podmiot ten sam - 'sino a estudiar'. Pokazuje całkowitą zamianę jednej akcji na drugą - nie to tylko tamto."
      },
      {
        id: "disc_9",
        question: "_____ bien es cierto que cuesta mucho dinero, la calidad del producto justifica plenamente la inversión realizada.",
        translation: "(Chociaż prawdą jest, że kosztuje dużo pieniędzy, jakość produktu w pełni uzasadnia dokonaną inwestycję)",
        options: ["Si", "Aunque", "Cuando", "Como"],
        correct: "Si",
        explanation: "'Si bien' to chociaż (formalna koncesja). Literacka forma 'aunque'. Używamy indicativo po 'si bien' bo mówimy o potwierdzonej prawdzie. 'Si bien' jest bardziej eleganckie niż proste 'aunque' - typowe dla pisma formalnego, raportów, argumentacji akademickiej."
      },
      {
        id: "disc_10",
        question: "_____ todo, decidimos continuar con el plan original sin hacer cambios significativos en la estrategia.",
        translation: "(Pomimo wszystkiego zdecydowaliśmy kontynuować z oryginalnym planem bez robienia znaczących zmian w strategii)",
        options: ["Con", "Sin", "A pesar de", "Pese a"],
        correct: "Con",
        explanation: "'Con todo' to pomimo wszystkiego (mimo trudności). Krótsza forma 'a pesar de todo'. To idiomatyczne wyrażenie - 'con' tutaj znaczy 'z/mimo'. Pokazuje determinację mimo przeszkód. 'Con todo' zawsze na początku zdania dla emfatycznego pokazania wytrwałości."
      },
      {
        id: "disc_11",
        question: "_____ haces todo perfecto, no todos van a estar satisfechos porque cada persona tiene expectativas diferentes.",
        translation: "(Nawet jeśli zrobisz wszystko perfekcyjnie, nie wszyscy będą zadowoleni, bo każda osoba ma inne oczekiwania)",
        options: ["Aunque", "Pero", "Sino", "Mas"],
        correct: "Aunque",
        explanation: "'Aunque + subjuntivo' dla hipotetycznej sytuacji przyszłej. 'Hagas' (subjuntivo) bo mówimy o możliwości która może się nie zrealizować. To koncesja wobec hipotetycznej doskonałości - nawet w idealnym scenariuszu pojawią się niezadowoleni. Pokazuje że perfekcja nie gwarantuje uniwersalnej satysfakcji."
      },
      {
        id: "disc_12",
        question: "_____ hecho de que sea difícil no significa que sea imposible de lograr con dedicación constante.",
        translation: "(Fakt, że jest trudne, nie znaczy że jest niemożliwe do osiągnięcia przy stałym poświęceniu)",
        options: ["El", "La", "Lo", "Un"],
        correct: "El",
        explanation: "'El hecho de que' + subjuntivo to fakt że (nominalizacja). 'Hecho' męski wymaga 'el'. Subjuntivo 'sea' bo to ogólna prawda o charakterystyce. Konstrukcja formalna dla transformowania zdania w rzeczownik - 'el hecho de' czyni całą ideę podmiotem głównym."
      },
      {
        id: "disc_13",
        question: "_____ que le advertí muchas veces, siguió cometiendo los mismos errores repetidamente sin aprender.",
        translation: "(Pomimo że ostrzegałem go wiele razy, dalej popełniał te same błędy powtarzająco się bez uczenia się)",
        options: ["A pesar de", "Aunque", "Pese a", "Con todo"],
        correct: "A pesar de",
        explanation: "'A pesar de que' + indicativo dla potwierdzonych faktów. Ostrzegałeś (fakt) ale nie pomogło. Indicativo 'advertí' potwierdza że ostrzeżenia rzeczywiście miały miejsce. To koncesja wobec nieefektywności twoich prób - mimo realnych ostrzeżeń, nie było zmiany."
      },
      {
        id: "disc_14",
        question: "No es _____ no quiera ayudarte, es que realmente no tengo tiempo disponible esta semana ocupada.",
        translation: "(Nie jest tak, że nie chcę ci pomóc, jest tak że naprawdę nie mam dostępnego czasu w tym zajętym tygodniu)",
        options: ["que", "porque", "como", "cuando"],
        correct: "que",
        explanation: "'No es que' + subjuntivo to nie jest tak że (zaprzeczenie błędnego wrażenia). 'Quiera' subjuntivo bo zaprzeczamy tę interpretację. Po 'no es que' zawsze subjuntivo - pokazujesz że to NIE jest powód, korygując błędne założenie rozmówcy o twoich motywacjach."
      },
      {
        id: "disc_15",
        question: "_____ sea tarde, podemos empezar el proyecto porque tenemos energía y motivación para trabajar ahora.",
        translation: "(Choć jest późno, możemy zacząć projekt, bo mamy energię i motywację do pracy teraz)",
        options: ["Aunque", "Si bien", "Aun cuando", "Por más que"],
        correct: "Aunque",
        explanation: "'Aunque + subjuntivo' dla obecnego faktu z koncesją. 'Sea' subjuntivo bo mimo że jest fakt, traktujesz go jako nieistotny dla decyzji. Możliwy też indicativo 'es' ale subjuntivo podkreśla że późność nie ma znaczenia - minimalizujesz przeszkodę używając subjuntivo."
      }
    ]
  },

  expressing_probability: {
    name: "Wyrażanie prawdopodobieństwa",
    description: "Mów o możliwościach i przypuszczeniach",
    icon: HelpCircle,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "prob_1",
        question: "_____ las ocho cuando llegó a casa porque ya estaba oscuro y las luces de la calle estaban encendidas.",
        translation: "(Było pewnie około ósmej, kiedy dotarł do domu, bo było już ciemno i światła uliczne były zapalone)",
        options: ["Serían", "Eran", "Fueron", "Sean"],
        correct: "Serían",
        explanation: "Conditional 'serían' wyraża przypuszczenie o przeszłości. Nie byłeś tam więc zgadуjesz - PEWNIE było ósmej. Conditional dla spekulacji o przeszłych faktach. Zamiast 'probablemente eran' możesz użyć samego conditional - to elegancki sposób pokazania niepewności bez dodawania 'probably'."
      },
      {
        id: "prob_2",
        question: "¿Dónde _____ mis llaves? Las dejé aquí en la mesa hace solo cinco minutos y ahora no las encuentro.",
        translation: "(Gdzie mogą być moje klucze? Zostawiłem je tu na stole tylko pięć minut temu i teraz nie mogę ich znaleźć)",
        options: ["estarán", "están", "estén", "estarían"],
        correct: "estarán",
        explanation: "Futuro 'estarán' wyraża przypuszczenie o teraźniejszości. Nie wiesz gdzie są TERAZ więc spekulujesz. Futuro dla domysłów o obecnej lokalizacji. Brzmi dziwnie ale to typowa hiszpańska konstrukcja - pytasz gdzie MOGĄ BYĆ używając przyszłego czasu."
      },
      {
        id: "prob_3",
        question: "Es _____ que llueva mañana según el pronóstico meteorológico, así que mejor llevemos paraguas por si acaso.",
        translation: "(Jest prawdopodobne, że jutro będzie padać według prognozy meteorologicznej, więc lepiej weźmy parasole na wszelki wypadek)",
        options: ["probable", "probablemente", "probabilidad", "probables"],
        correct: "probable",
        explanation: "'Es probable que' + subjuntivo to jest prawdopodobne że. Przymiotnik 'probable' wymaga subjuntivo 'llueva'. Konstrukcja dla wyrażenia prawdopodobieństwa - 'es probable/posible/imposible que' zawsze z subjuntivo bo mówimy o niepewnych wydarzeniach przyszłych."
      },
      {
        id: "prob_4",
        question: "_____ estar en casa ahora, normalmente vuelve del trabajo a esta hora todos los días laborables.",
        translation: "(Musi być w domu teraz, normalnie wraca z pracy o tej godzinie każdego dnia roboczego)",
        options: ["Debe de", "Debe", "Debería", "Deberá"],
        correct: "Debe de",
        explanation: "'Deber de' wyraża logiczną dedukcję (przypuszczenie). Z 'de' to spekulacja, bez 'de' byłby obowiązek. 'Debe de estar' = musi być (zgaduję logicznie). Różnica kluczowa - 'debe estar' = powinien być (obowiązek), 'debe de estar' = pewnie jest (logika)."
      },
      {
        id: "prob_5",
        question: "_____ tenga unos treinta años más o menos, pero no estoy completamente seguro de su edad exacta.",
        translation: "(Pewnie ma około trzydziestu lat mniej więcej, ale nie jestem całkowicie pewien jego dokładnego wieku)",
        options: ["Tendrá", "Tiene", "Tendría", "Tenga"],
        correct: "Tendrá",
        explanation: "Futuro 'tendrá' dla przypuszczenia o obecnym wieku. Nie znasz dokładnie więc zgadуjesz. Futuro używane dla spekulacji o faktach obecnych których nie jesteś pewien. Alternatywa dla 'probablemente tiene' - bardziej naturalna i krótsza w mowie codziennej."
      },
      {
        id: "prob_6",
        question: "Tal vez _____ razón en lo que dices, necesito pensarlo más profundamente antes de tomar una decisión final.",
        translation: "(Może masz rację w tym co mówisz, potrzebuję pomyśleć głębiej przed podjęciem ostatecznej decyzji)",
        options: ["tengas", "tienes", "tendrás", "tuvieras"],
        correct: "tengas",
        explanation: "'Tal vez' + subjuntivo dla niepewności. 'Tengas' pokazuje wątpliwość o prawdzie twierdzenia. Możliwy też indicativo 'tienes' ale subjuntivo podkreśla większą niepewność. 'Tal vez' to może - może brać oba tryby ale subjuntivo komunikuje większy brak pewności."
      },
      {
        id: "prob_7",
        question: "Es _____ que no venga a la reunión porque tiene muchos otros compromisos importantes esta semana ocupada.",
        translation: "(Jest możliwe, że nie przyjdzie na spotkanie, bo ma wiele innych ważnych zobowiązań w tym zajętym tygodniu)",
        options: ["posible", "posiblemente", "posibilidad", "posibles"],
        correct: "posible",
        explanation: "'Es posible que' + subjuntivo to jest możliwe że. 'Venga' subjuntivo bo mówimy o niepewnym wydarzeniu przyszłym. 'Es posible/probable/imposible que' to trio konstrukcji dla prawdopodobieństwa - wszystkie wymaga subjuntivo bo oceniasz szansę wydarzenia."
      },
      {
        id: "prob_8",
        question: "A lo mejor _____ tarde porque hay mucho tráfico a esta hora del día en la autopista principal.",
        translation: "(Może się spóźnię, bo jest duży ruch o tej porze dnia na głównej autostradzie)",
        options: ["llego", "llegue", "llegaré", "llegara"],
        correct: "llego",
        explanation: "'A lo mejor' + indicativo to może (przypuszczenie casualne). Różni się od 'tal vez' - 'a lo mejor' zawsze bierze indicativo. To kolokwialne wyrażenie możliwości - bardziej swobodne niż 'quizás' czy 'tal vez'. Zawsze presente lub futuro indicativo po 'a lo mejor'."
      },
      {
        id: "prob_9",
        question: "_____ que haga buen tiempo este fin de semana para poder ir a la playa con toda la familia.",
        translation: "(Oby była dobra pogoda w ten weekend, żebyśmy mogli pojechać na plażę z całą rodziną)",
        options: ["Ojalá", "Espero", "Deseo", "Quiero"],
        correct: "Ojalá",
        explanation: "'Ojalá' + subjuntivo to oby/miejmy nadzieję. 'Haga' subjuntivo bo to życzenie o niepewnej przyszłości. 'Ojalá' pochodzi z arabskiego 'in sha Allah' (jeśli Bóg zechce) - zawsze wymaga subjuntivo bo wyrażasz pragnienie bez pewności spełnienia."
      },
      {
        id: "prob_10",
        question: "_____ cincuenta personas en la fiesta anoche, pero no conté exactamente cuántas había en total.",
        translation: "(Było chyba pięćdziesiąt osób na imprezie wczoraj, ale nie liczyłem dokładnie ile było w sumie)",
        options: ["Habría", "Había", "Hubo", "Hay"],
        correct: "Habría",
        explanation: "Conditional 'habría' dla przypuszczenia o przeszłej ilości. Nie liczyłeś więc zgadujesz ile PEWNIE było. Conditional dla spekulacji o przeszłych ilościach których nie jesteś pewien. Zamiast 'probablemente había' używasz conditional - eleganckie i zwięzłe."
      },
      {
        id: "prob_11",
        question: "Quizás _____ mejor quedarnos en casa hoy, el tiempo no parece muy bueno para salir afuera.",
        translation: "(Może lepiej zostać w domu dziś, pogoda nie wygląda zbyt dobrze, żeby wychodzić na zewnątrz)",
        options: ["sea", "es", "será", "fuera"],
        correct: "sea",
        explanation: "'Quizás' + subjuntivo dla sugestii z niepewnością. 'Sea mejor' wyraża wątpliwość czy to najlepszy pomysł. Możliwy też indicativo ale subjuntivo pokazuje większą otwartość na alternatywy. 'Quizás' może brać oba tryby - wybór zależy od stopnia twojej pewności."
      },
      {
        id: "prob_12",
        question: "Seguramente _____ cansado después de trabajar tantas horas extra sin descanso durante toda la semana.",
        translation: "(Na pewno jest zmęczony po pracy tylu nadgodzin bez odpoczynku podczas całego tygodnia)",
        options: ["está", "esté", "estará", "estaría"],
        correct: "está",
        explanation: "'Seguramente' + indicativo dla wysokiego prawdopodobieństwa. 'Está' indicativo bo jesteś prawie pewien. 'Seguramente' sugeruje wysoką pewność więc indicativo jest naturalniejsze. Może też subjuntivo ale indicativo pokazuje że twoja dedukcja jest mocna - prawie nie ma wątpliwości."
      },
      {
        id: "prob_13",
        question: "No creo que _____ tiempo suficiente para terminar todo el proyecto antes de la fecha límite establecida.",
        translation: "(Nie sądzę, że będzie wystarczająco czasu, żeby skończyć cały projekt przed ustaloną datą ostateczną)",
        options: ["haya", "hay", "habrá", "hubiera"],
        correct: "haya",
        explanation: "'No creo que' + subjuntivo dla wątpliwości. Negacja 'creer' wymaga subjuntivo - wyrażasz brak wiary w możliwość. 'No creo' to mocniejsza wątpliwość niż 'creo que no' - pierwszy zaprzecza wiarę, drugi wyraża wiarę w negację. Różnica subtelna ale ważna."
      },
      {
        id: "prob_14",
        question: "Puede _____ haya olvidado nuestra cita, últimamente está muy ocupado con muchos proyectos simultáneos.",
        translation: "(Może zapomniał o naszym spotkaniu, ostatnio jest bardzo zajęty wieloma jednoczesnym projektami)",
        options: ["que", "ser", "estar", "de"],
        correct: "que",
        explanation: "'Puede que' + subjuntivo to może (konstrukcja możliwości). 'Que' łączy 'puede' z czasownikiem. 'Haya olvidado' perfect subjuntivo dla możliwości przeszłej akcji. To konstrukcja bezosobowa dla wyrażenia niepewności - 'puede que' + subjuntivo komunikuje otwartą możliwość."
      },
      {
        id: "prob_15",
        question: "_____ diez años que no nos vemos, el tiempo ha pasado increíblemente rápido desde entonces.",
        translation: "(Musiało minąć dziesięć lat odkąd się nie widzieliśmy, czas minął niewiarygodnie szybko od tamtej pory)",
        options: ["Harán", "Hacen", "Hará", "Harían"],
        correct: "Harán",
        explanation: "Futuro 'harán' dla przypuszczenia o czasie który minął. Nie jesteś pewien dokładnie ile lat więc zgadуjesz. 'Hacer' dla czasu który minął - futuro pokazuje niepewność liczby lat. Zamiast 'probablemente hace' używasz futuro dla spekulacji o przeszłym okresie."
      }
    ]
  }
};

export default part28Categories;
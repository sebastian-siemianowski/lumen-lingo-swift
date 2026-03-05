/**
 * POLISH → SPANISH GRAMMAR - PART 18
 * 4 categories, 15 questions each - Complex structures
 */

import { Link2, MessageSquare, Repeat, CloudLightning } from "lucide-react";

export const part18Categories = {
  conjunctions_and_connectors: {
    name: "Spójniki i łączniki",
    description: "Buduj płynne, złożone zdania",
    icon: Link2,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "conj_1",
        question: "Iré contigo al cine _____ termine este trabajo urgente que tengo pendiente ahora.",
        translation: "(Pójdę z tobą do kina, jak tylko skończę tę pilną pracę, którą mam teraz do zrobienia)",
        options: ["en cuanto", "cuando", "mientras", "hasta que"],
        correct: "en cuanto",
        explanation: "'En cuanto' to jak tylko (natychmiastowość). Wymaga subjuntivo dla przyszłości. Podobne do 'cuando' ale podkreśla że akcja nastąpi natychmiast po zakończeniu pierwszej."
      },
      {
        id: "conj_2",
        question: "Estudia mucho _____ puedas aprobar el examen con la mejor nota posible del curso.",
        translation: "(Ucz się dużo, żebyś mógł zdać egzamin z najlepszą możliwą oceną kursu)",
        options: ["para que", "porque", "así que", "por lo tanto"],
        correct: "para que",
        explanation: "'Para que' wyraża cel z subjuntivo. Różni się od 'para' + infinitivo (dla tej samej osoby). 'Para que + subjuntivo' używamy gdy podmiot się zmienia."
      },
      {
        id: "conj_3",
        question: "No saldremos de casa _____ deje de llover completamente esta tarde.",
        translation: "(Nie wyjdziemy z domu, dopóki całkowicie nie przestanie padać dziś po południu)",
        options: ["hasta que", "cuando", "mientras", "en cuanto"],
        correct: "hasta que",
        explanation: "'Hasta que' to dopóki nie (oczekiwanie na zmianę). Z przyszłością wymaga subjuntivo. Pokazuje że akcja główna czeka na spełnienie warunku."
      },
      {
        id: "conj_4",
        question: "Te llamaré _____ llegue a casa para contarte todas las novedades del día de hoy.",
        translation: "(Zadzwonię do ciebie, kiedy dotrę do domu, żeby opowiedzieć ci wszystkie nowości z dzisiejszego dnia)",
        options: ["cuando", "cuándo", "mientras", "hasta que"],
        correct: "cuando",
        explanation: "'Cuando' + subjuntivo dla przyszłych akcji. Bez akcentu to spójnik, z akcentem to pytanie. W przyszłości 'cuando' zawsze wymaga subjuntivo."
      },
      {
        id: "conj_5",
        question: "_____ estudiaba, escuchaba música clásica para concentrarme mejor en los textos difíciles.",
        translation: "(Podczas gdy studiowałem, słuchałem muzyki klasycznej, żeby lepiej się skoncentrować na trudnych tekstach)",
        options: ["Mientras", "Cuando", "Aunque", "Si"],
        correct: "Mientras",
        explanation: "'Mientras' to podczas gdy (jednoczesność). Dwie akcje dzieją się w tym samym czasie. Z przeszłością używamy indicativo, z przyszłością subjuntivo."
      },
      {
        id: "conj_6",
        question: "Iré a la fiesta _____ esté muy cansado después del trabajo de toda la semana.",
        translation: "(Pójdę na imprezę, chociaż będę bardzo zmęczony po pracy całego tygodnia)",
        options: ["aunque", "pero", "sin embargo", "sino"],
        correct: "aunque",
        explanation: "'Aunque' to chociaż (koncesja). Z subjuntivo wyraża hipotetyczną sytuację. 'Aunque + subjuntivo' dla przyszłości lub niepewności, 'aunque + indicativo' dla faktów."
      },
      {
        id: "conj_7",
        question: "No solo habla español _____ también italiano, francés y portugués con fluidez natural.",
        translation: "(Nie tylko mówi po hiszpańsku, ale też po włosku, francusku i portugalsku z naturalną płynnością)",
        options: ["sino", "pero", "sin embargo", "aunque"],
        correct: "sino",
        explanation: "'No solo... sino también' to nie tylko... ale też. 'Sino' używamy po negacji dla kontrastu pozytywnego. 'Pero' byłoby dla kontrastu negatywnego."
      },
      {
        id: "conj_8",
        question: "Te esperaré aquí _____ vuelvas de hacer las compras en el supermercado cercano.",
        translation: "(Poczekam na ciebie tutaj, aż wrócisz z robienia zakupów w pobliskim supermarkecie)",
        options: ["hasta que", "cuando", "mientras", "en cuanto"],
        correct: "hasta que",
        explanation: "'Hasta que' + subjuntivo to aż (oczekiwanie). Czekanie trwa DO momentu powrotu. 'Hasta' pokazuje granicę czasową akcji czekania."
      },
      {
        id: "conj_9",
        question: "_____ sea difícil, no voy a rendirme en mi objetivo de aprender español perfectamente.",
        translation: "(Choć będzie trudne, nie poddam się w moim celu nauczenia się hiszpańskiego perfekcyjnie)",
        options: ["Aunque", "Pero", "Sin embargo", "A pesar de"],
        correct: "Aunque",
        explanation: "'Aunque + subjuntivo' dla koncesji hipotetycznej. Przewidujesz trudność ale nie poddajesz się. 'A pesar de' wymagałoby rzeczownika, nie czasownika."
      },
      {
        id: "conj_10",
        question: "Habla despacio _____ todos puedan entender bien la explicación técnica complicada que das.",
        translation: "(Mów wolno, żeby wszyscy mogli dobrze zrozumieć skomplikowane techniczne wyjaśnienie, które dajesz)",
        options: ["para que", "porque", "cuando", "si"],
        correct: "para que",
        explanation: "'Para que' wyraża cel z subjuntivo. Mówisz wolno Z CELEM żeby inni rozumieli. 'Porque' byłoby powodem (przyczyna), nie celem."
      },
      {
        id: "conj_11",
        question: "_____ hace buen tiempo, siempre aprovecho para pasear por el parque natural cercano.",
        translation: "(Ilekroć jest dobra pogoda, zawsze wykorzystuję to, żeby spacerować po pobliskim parku naturalnym)",
        options: ["Siempre que", "Cuando", "Si", "Mientras"],
        correct: "Siempre que",
        explanation: "'Siempre que' to ilekroć, za każdym razem gdy. Bardziej emfatyczne niż tylko 'cuando'. Podkreśla regularność połączenia dwóch zdarzeń."
      },
      {
        id: "conj_12",
        question: "No es que no me _____ tu propuesta, sino que no tengo tiempo ahora para implementarla.",
        translation: "(Nie chodzi o to, że nie podoba mi się twoja propozycja, ale że nie mam teraz czasu, żeby ją wdrożyć)",
        options: ["guste", "gusta", "gustará", "gustó"],
        correct: "guste",
        explanation: "'No es que + subjuntivo' to nie chodzi o to że. Zaprzeczenie wymaga trybu łączącego. 'Sino que' wprowadza prawdziwy powód."
      },
      {
        id: "conj_13",
        question: "_____ estaba muy cansado, decidí salir con mis amigos para distraerme un poco del trabajo.",
        translation: "(Chociaż byłem bardzo zmęczony, zdecydowałem się wyjść z przyjaciółmi, żeby trochę oderwać się od pracy)",
        options: ["Aunque", "Pero", "Sin embargo", "A pesar de"],
        correct: "Aunque",
        explanation: "'Aunque + indicativo' dla faktów (byłem zmęczony - to fakt). Koncesja realna używa indicativo. 'Aunque' może brać indicativo (fakty) lub subjuntivo (hipotezy)."
      },
      {
        id: "conj_14",
        question: "Como no _____ a tiempo al aeropuerto, perdimos nuestro vuelo internacional programado.",
        translation: "(Ponieważ nie dotarliśmy na czas na lotnisko, przegapiliśmy nasz zaplanowany międzynarodowy lot)",
        options: ["llegamos", "lleguemos", "llegaríamos", "llegáramos"],
        correct: "llegamos",
        explanation: "'Como' na początku (bo, ponieważ) używa indicativo. To przyczyna realna, nie hipotetyczna. 'Como' + indicativo dla znanej przyczyny rzeczywistego wydarzenia."
      },
      {
        id: "conj_15",
        question: "_____ no me avisaste con anticipación, no pude preparar nada especial para tu visita.",
        translation: "(Ponieważ nie powiadomiłeś mnie z wyprzedzeniem, nie mogłem przygotować niczego specjalnego na twoją wizytę)",
        options: ["Como", "Porque", "Ya que", "Dado que"],
        correct: "Como",
        explanation: "'Como' na początku zdania to ponieważ (przyczyna znana obu rozmówcom). Bardziej kolokwialne niż 'porque'. 'Como' może znaczyć 'jak' lub 'ponieważ' zależnie od pozycji."
      }
    ]
  },

  reported_speech: {
    name: "Mowa zależna",
    description: "Przekazuj słowa innych poprawnie",
    icon: MessageSquare,
    color: "from-purple-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "rep_1",
        question: "Mi madre me dijo que _____ con cuidado porque las carreteras estaban mojadas y resbaladizas.",
        translation: "(Moja mama powiedziała mi, żebym jechał ostrożnie, bo drogi były mokre i śliskie)",
        options: ["condujera", "conducía", "conduzca", "conduje"],
        correct: "condujera",
        explanation: "Mowa zależna w przeszłości używa imperfecto subjuntivo po 'dijo que'. To przekaz rozkazu z przeszłości. Czas w zdaniu podrzędnym cofa się względem czasu głównego."
      },
      {
        id: "rep_2",
        question: "El profesor nos preguntó si _____ leído el capítulo cinco del libro de texto obligatorio.",
        translation: "(Nauczyciel zapytał nas, czy przeczytaliśmy piąty rozdział obowiązkowej podręcznikowej książki)",
        options: ["habíamos", "hemos", "hubiéramos", "hayamos"],
        correct: "habíamos",
        explanation: "'Preguntó si habíamos' to zapytał czy mieliśmy. W mowie zależnej present perfect cofa się do pluperfecto. Pytania używają indicativo, nie subjuntivo."
      },
      {
        id: "rep_3",
        question: "Me comentó que _____ a visitarnos el próximo fin de semana largo si tenía tiempo libre.",
        translation: "(Skomentował mi, że przyjdzie nas odwiedzić w przyszły długi weekend, jeśli będzie miał wolny czas)",
        options: ["vendría", "vendrá", "viene", "vino"],
        correct: "vendría",
        explanation: "Mowa zależna: futuro → condicional. 'Vendría' to przyszłość z perspektywy przeszłości. Gdy główny czasownik jest w przeszłości, przyszłość staje się conditional."
      },
      {
        id: "rep_4",
        question: "Dijeron que _____ esperando en la estación desde hacía más de media hora ya.",
        translation: "(Powiedzieli, że czekali na stacji od ponad pół godziny już)",
        options: ["llevaban", "llevan", "habían llevado", "han llevado"],
        correct: "llevaban",
        explanation: "'Dijeron que llevaban' - imperfecto w mowie zależnej. 'Llevar + gerundio' w przeszłości dla akcji trwającej. Presente w mowie bezpośredniej staje się imperfecto w zależnej."
      },
      {
        id: "rep_5",
        question: "Mi jefe me advirtió que _____ más cuidado con los errores en los informes financieros importantes.",
        translation: "(Mój szef ostrzegł mnie, żebym był ostrożniejszy z błędami w ważnych raportach finansowych)",
        options: ["tuviera", "tenga", "tenía", "tendría"],
        correct: "tuviera",
        explanation: "'Advertir que + subjuntivo' dla ostrzeżeń. Imperfecto subjuntivo po czasowniku w przeszłości. Ostrzeżenia i rady w mowie zależnej wymagają trybu łączącego."
      },
      {
        id: "rep_6",
        question: "Me prometió que me _____ cuando llegara a su destino final sin problemas.",
        translation: "(Obiecał mi, że zadzwoni do mnie, kiedy dotrze do swojego końcowego miejsca przeznaczenia bez problemów)",
        options: ["llamaría", "llamará", "llama", "llamó"],
        correct: "llamaría",
        explanation: "'Prometió que llamaría' - condicional w mowie zależnej. Obietnica o przyszłości z perspektywy przeszłości wymaga conditional. To sekwencja czasów w mowie zależnej."
      },
      {
        id: "rep_7",
        question: "El médico le aconsejó que _____ de fumar inmediatamente por su salud cardiovascular deteriorada.",
        translation: "(Lekarz poradził mu, żeby natychmiast przestał palić dla jego pogorszonego zdrowia sercowo-naczyniowego)",
        options: ["dejara", "deje", "dejaba", "dejaría"],
        correct: "dejara",
        explanation: "'Aconsejar que' wymaga subjuntivo. Po 'aconsejó' (przeszłość) używamy imperfecto subjuntivo. Rady medyczne przekazywane są z trybem łączącym."
      },
      {
        id: "rep_8",
        question: "Nos aseguró que todo _____ listo para la inauguración oficial del evento cultural grande.",
        translation: "(Zapewnił nas, że wszystko będzie gotowe na oficjalne otwarcie wielkiego wydarzenia kulturalnego)",
        options: ["estaría", "estará", "está", "estuvo"],
        correct: "estaría",
        explanation: "'Aseguró que estaría' - conditional dla przyszłości w przeszłości. Zapewnienie o przyszłości przekazane z przeszłości używa warunkowego."
      },
      {
        id: "rep_9",
        question: "Me confesó que nunca _____ sentido tan feliz como en ese momento especial de su vida.",
        translation: "(Wyznał mi, że nigdy nie czuł się tak szczęśliwy jak w tym specjalnym momencie swojego życia)",
        options: ["se había", "se ha", "se hubo", "se habría"],
        correct: "se había",
        explanation: "'Confesó que se había sentido' - pluperfecto w mowie zależnej. Present perfect cofa się do pluperfecto. To pokazuje akcję przed momentem wyznania."
      },
      {
        id: "rep_10",
        question: "Le pedí que me _____ con la tarea porque era demasiado difícil para hacerla solo.",
        translation: "(Poprosiłem go, żeby mi pomógł z zadaniem, bo było zbyt trudne, żeby zrobić je samemu)",
        options: ["ayudara", "ayude", "ayudaba", "ayudaría"],
        correct: "ayudara",
        explanation: "'Pedir que' to prosić żeby - subjuntivo wymagany. Po 'pedí' (pretérito) używamy imperfecto subjuntivo. Prośby zawsze wymagają trybu łączącego."
      },
      {
        id: "rep_11",
        question: "Ella comentó que _____ viviendo en Madrid desde hacía cinco años cuando nos conocimos.",
        translation: "(Skomentowała, że mieszka w Madrycie od pięciu lat, kiedy się poznaliśmy)",
        options: ["llevaba", "lleva", "había llevado", "habría llevado"],
        correct: "llevaba",
        explanation: "'Comentó que llevaba' - imperfecto dla kontynuacji w przeszłości. 'Llevar viviendo' w mowie zależnej zachowuje imperfecto. To akcja trwająca w momencie rozmowy."
      },
      {
        id: "rep_12",
        question: "Me explicó que no _____ venir antes porque había tenido problemas con el transporte público.",
        translation: "(Wyjaśnił mi, że nie mógł przyjść wcześniej, bo miał problemy z transportem publicznym)",
        options: ["había podido", "pudo", "podía", "habría podido"],
        correct: "había podido",
        explanation: "'Explicó que no había podido' - pluperfecto dla akcji przed wyjaśnieniem. Niemożność była PRZED rozmową. Pluperfecto pokazuje sekwencję wydarzeń w przeszłości."
      },
      {
        id: "rep_13",
        question: "Nos rogó que no le _____ a nadie sobre su secreto personal tan delicado y privado.",
        translation: "(Błagał nas, żebyśmy nikomu nie mówili o jego tak delikatnym i prywatnym osobistym sekrecie)",
        options: ["dijéramos", "digamos", "decíamos", "diríamos"],
        correct: "dijéramos",
        explanation: "'Rogar que' to błagać - subjuntivo konieczny. Po 'rogó' używamy imperfecto subjuntivo. Błagania i intensywne prośby zawsze z trybem łączącym."
      },
      {
        id: "rep_14",
        question: "El guía turístico informó que el museo _____ cerrado los lunes por mantenimiento regular semanal.",
        translation: "(Przewodnik turystyczny poinformował, że muzeum jest zamknięte w poniedziałki na cotygodniową konserwację)",
        options: ["estaba", "está", "estaría", "estuvo"],
        correct: "estaba",
        explanation: "'Informó que estaba' - presente staje się imperfecto. Fakty obecne przekazane w przeszłości używają imperfecto. To zasada sekwencji czasów w mowie zależnej."
      },
      {
        id: "rep_15",
        question: "Sugirió que _____ la reunión para la semana siguiente porque faltaban documentos clave importantes.",
        translation: "(Zasugerował, żebyśmy przełożyli spotkanie na przyszły tydzień, bo brakowało ważnych kluczowych dokumentów)",
        options: ["pospusiéramos", "pospongamos", "posponíamos", "pospondríamos"],
        correct: "pospusiéramos",
        explanation: "'Sugerir que' wymaga subjuntivo. Po 'sugirió' używamy imperfecto subjuntivo. Sugestie to nie fakty, więc tryb łączący pokazuje że to tylko propozycja."
      }
    ]
  },

  gerunds_and_infinitives: {
    name: "Gerundium i bezokolicznik",
    description: "Wybieraj między -ndo a infinitivem",
    icon: Repeat,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "ger_1",
        question: "Sigo _____ español todos los días para mejorar mi fluidez y pronunciación naturales.",
        translation: "(Nadal uczę się hiszpańskiego codziennie, żeby poprawić moją płynność i naturalną wymowę)",
        options: ["estudiando", "estudiar", "estudio", "estudiado"],
        correct: "estudiando",
        explanation: "'Seguir + gerundio' to kontynuować robienie czegoś. Gerundio (-ando/-iendo) pokazuje ciągłość akcji. 'Seguir' nigdy nie bierze infinitivu - zawsze gerundio."
      },
      {
        id: "ger_2",
        question: "Aprendí a cocinar _____ videos tutoriales en internet durante la pandemia del año pasado.",
        translation: "(Nauczyłem się gotować oglądając tutoriale wideo w internecie podczas pandemii w zeszłym roku)",
        options: ["viendo", "ver", "mirar", "mirando"],
        correct: "viendo",
        explanation: "Gerundio wyraża sposób (jak nauczyłeś się). 'Viendo' to oglądając (środek nauki). Pokazuje jednoczesność - uczyłeś się PRZEZ oglądanie. Gerundio dla metody lub towarzyszącej akcji."
      },
      {
        id: "ger_3",
        question: "Está prohibido _____ en todos los edificios públicos cerrados según la ley vigente española.",
        translation: "(Zabronione jest palić we wszystkich zamkniętych budynkach publicznych zgodnie z obowiązującym hiszpańskim prawem)",
        options: ["fumar", "fumando", "fuma", "fumado"],
        correct: "fumar",
        explanation: "Po 'estar prohibido' używamy infinitivu. Zakazy i dozwolenia biorą infinitiv jako podmiot ogólny. 'Prohibido fumar' to jak znak - bezosobowa zasada."
      },
      {
        id: "ger_4",
        question: "Llevo tres horas _____ este informe complicado y todavía no he terminado la mitad siquiera.",
        translation: "(Spędzam trzy godziny pisząc ten skomplikowany raport i wciąż nie skończyłem nawet połowy)",
        options: ["escribiendo", "escribir", "escrito", "escribo"],
        correct: "escribiendo",
        explanation: "'Llevar + tiempo + gerundio' to robić coś od określonego czasu. Pokazuje trwanie akcji do teraz. 'Llevo escribiendo' = piszę już od trzech godzin."
      },
      {
        id: "ger_5",
        question: "Después de _____ el desayuno completo, salimos de casa hacia la estación de tren cercana.",
        translation: "(Po zjedzeniu pełnego śniadania wyszliśmy z domu w kierunku pobliskiej stacji kolejowej)",
        options: ["tomar", "tomando", "tomado", "tomo"],
        correct: "tomar",
        explanation: "'Después de + infinitivo' dla akcji przed główną. Infinitiv po przyimkach jest standardem. Nie używamy gerundio po przyimkach w hiszpańskim."
      },
      {
        id: "ger_6",
        question: "Vi a tu hermano _____ por el parque central con su perro grande esta mañana temprano.",
        translation: "(Widziałem twojego brata spacerującego po centralnym parku ze swoim dużym psem dziś wcześnie rano)",
        options: ["paseando", "pasear", "paseado", "pasea"],
        correct: "paseando",
        explanation: "Gerundio po 'ver' opisuje co osoba robiła. 'Vi a Juan corriendo' = widziałem Juana biegnącego. To pokazuje akcję w trakcie obserwacji."
      },
      {
        id: "ger_7",
        question: "Al _____ la noticia terrible, se puso muy triste y empezó a llorar desconsoladamente.",
        translation: "(Słysząc straszną wiadomość, bardzo się zasmucił i zaczął płakać niepociesznie)",
        options: ["escuchar", "escuchando", "oír", "oyendo"],
        correct: "escuchar",
        explanation: "'Al + infinitivo' to przy/podczas robienia (moment akcji). To konstrukcja temporalna pokazująca jednoczesność. 'Al escuchar' = w momencie usłyszenia."
      },
      {
        id: "ger_8",
        question: "Me gusta leer _____ música clásica de fondo suavemente en mi habitación tranquila.",
        translation: "(Lubię czytać słuchając cicho muzyki klasycznej w tle w moim spokojnym pokoju)",
        options: ["escuchando", "escuchar", "oír", "oyendo"],
        correct: "escuchando",
        explanation: "Gerundio dla jednoczesnej akcji. Czytasz PODCZAS słuchania. Dwie akcje w tym samym czasie - główna (leer) + towarzysząca (escuchando)."
      },
      {
        id: "ger_9",
        question: "Antes de _____ cualquier decisión importante, consulta con tu familia y amigos cercanos más íntimos.",
        translation: "(Przed podjęciem jakiejkolwiek ważnej decyzji skonsultuj się ze swoją rodziną i najbliższymi przyjaciółmi)",
        options: ["tomar", "tomando", "tomado", "tomo"],
        correct: "tomar",
        explanation: "'Antes de + infinitivo' to przed zrobieniem czegoś. Przyimki zawsze biorą infinitiv, nigdy gerundio. To stała reguła hiszpańskiej gramatyki."
      },
      {
        id: "ger_10",
        question: "Pasé toda la tarde _____ viejas fotografías familiares del pasado con nostalgia emocional profunda.",
        translation: "(Spędziłem całe popołudnie przeglądając stare rodzinne fotografie z przeszłości z głęboką emocjonalną nostalgią)",
        options: ["mirando", "mirar", "ver", "viendo"],
        correct: "mirando",
        explanation: "'Pasar tiempo + gerundio' to spędzać czas robiąc coś. Opisuje jak wykorzystałeś czas. Gerundio pokazuje ciągłość aktywności przez okres czasu."
      },
      {
        id: "ger_11",
        question: "Para _____ bien un idioma extranjero hay que practicarlo diariamente sin excusas ni pretextos.",
        translation: "(Żeby dobrze mówić obcym językiem trzeba ćwiczyć go codziennie bez wymówek ani pretekstów)",
        options: ["hablar", "hablando", "hablado", "hablo"],
        correct: "hablar",
        explanation: "'Para + infinitivo' wyraża cel. Cel zawsze używa infinitivu, nie gerundio. 'Para hablar' = żeby mówić (purpose clause)."
      },
      {
        id: "ger_12",
        question: "Terminó la carrera universitaria _____ con honores máximos después de cuatro años intensos de estudio.",
        translation: "(Ukończył studia uniwersyteckie uzyskując najwyższe wyróżnienia po czterech intensywnych latach nauki)",
        options: ["obteniendo", "obtener", "obtenido", "obtiene"],
        correct: "obteniendo",
        explanation: "Gerundio dla rezultatu jednoczesnego. Ukończył UZYSKUJĄC honory. To pokazuje że obie akcje połączone - ukończenie z wynikiem honorowym."
      },
      {
        id: "ger_13",
        question: "Sin _____ una palabra, se levantó de la mesa y salió de la habitación molesto y enfadado.",
        translation: "(Nie mówiąc ani słowa, wstał od stołu i wyszedł z pokoju zirytowany i zły)",
        options: ["decir", "diciendo", "dicho", "dice"],
        correct: "decir",
        explanation: "'Sin + infinitivo' to bez robienia czegoś. Przyimek 'sin' wymaga infinitivu. 'Sin decir' = nie mówiąc, to sposób opisania braku akcji."
      },
      {
        id: "ger_14",
        question: "Continuó _____ a pesar de la lluvia intensa y el viento fuerte que azotaba la región.",
        translation: "(Kontynuował pracę pomimo intensywnego deszczu i silnego wiatru, który smagał region)",
        options: ["trabajando", "trabajar", "trabajo", "trabajado"],
        correct: "trabajando",
        explanation: "'Continuar + gerundio' to kontynuować robienie. Podobne do 'seguir' - oba wymagają gerundio. Pokazuje wytrwałość w akcji mimo trudności."
      },
      {
        id: "ger_15",
        question: "Me cansé de _____ lo mismo todos los días, necesito un cambio en mi rutina laboral.",
        translation: "(Zmęczyłem się robieniem tego samego każdego dnia, potrzebuję zmiany w mojej rutynie zawodowej)",
        options: ["hacer", "haciendo", "hecho", "hago"],
        correct: "hacer",
        explanation: "'Cansarse de + infinitivo' to zmęczyć się czymś. Po 'de' używamy infinitivu. 'De + gerundio' byłoby błędem - przyimki biorą infinitiv."
      }
    ]
  },

  conditional_perfect: {
    name: "Tryb warunkowy zaprzeszły",
    description: "Wyrażaj niezrealizowane możliwości przeszłości",
    icon: CloudLightning,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "condperf_1",
        question: "Si hubiera sabido que venías, _____ preparado tu plato favorito con mucho cariño especial.",
        translation: "(Gdybym był wiedział, że przychodzisz, przygotowałbym twoje ulubione danie ze specjalną troską)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "Conditional perfect (habría + participio) dla niezrealizowanej akcji. 'Si hubiera sabido' wymaga 'habría preparado'. To trzeci typ warunku - całkowicie nierealny w przeszłości."
      },
      {
        id: "condperf_2",
        question: "De haber tenido más tiempo libre, _____ viajado por toda Sudamérica explorando culturas.",
        translation: "(Gdybym miał więcej wolnego czasu, podróżowałbym po całej Ameryce Południowej eksplorując kultury)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'De haber + participio' to formalna wersja 'si hubiera'. 'Habría viajado' wyraża żal za straconą szansą. To konstrukcja literacka, bardziej elegancka."
      },
      {
        id: "condperf_3",
        question: "Ellos _____ llegado a tiempo si no hubiera habido tanto tráfico horrible en la autopista.",
        translation: "(Oni dotarliby na czas, gdyby nie było tyle okropnego ruchu na autostradzie)",
        options: ["habrían", "habían", "hubieran", "han"],
        correct: "habrían",
        explanation: "'Habrían llegado' dla hipotetycznego rezultatu w przeszłości. Mnoga forma 'habrían' dla 'ellos'. Wyjaśnia co by się stało w innych okolicznościach."
      },
      {
        id: "condperf_4",
        question: "¿Qué _____ hecho tú en mi lugar durante esa situación difícil y complicada de ayer?",
        translation: "(Co byś zrobił na moim miejscu podczas tej trudnej i skomplikowanej sytuacji wczorajszej?)",
        options: ["habrías", "habías", "hubieras", "has"],
        correct: "habrías",
        explanation: "'¿Qué habrías hecho?' pyta o hipotetyczne działanie. To prośba o radę retrospektywną. Używamy dla pytań 'co byś zrobił gdyby'."
      },
      {
        id: "condperf_5",
        question: "Con más dinero ahorrado, _____ comprado una casa más grande con jardín espacioso para la familia.",
        translation: "(Z większą ilością zaoszczędzonych pieniędzy kupiłbym większy dom z przestronnym ogrodem dla rodziny)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'Habría comprado' wyraża niezrealizowany plan. Nie miałeś dość pieniędzy, więc nie kupiłeś. To pokazuje alternatywną rzeczywistość która nie zaistniała."
      },
      {
        id: "condperf_6",
        question: "Nunca _____ imaginado que llegarías tan lejos en tu carrera profesional exitosa internacional.",
        translation: "(Nigdy bym nie wyobraził sobie, że zajdziesz tak daleko w swojej udanej międzynarodowej karierze zawodowej)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'Nunca habría imaginado' to nigdy bym nie pomyślał. Wyraża zaskoczenie retrospektywnie. Przeszłe przypuszczenia używają conditional perfect."
      },
      {
        id: "condperf_7",
        question: "Sin tu ayuda valiosa, no _____ podido terminar el proyecto a tiempo para la entrega final.",
        translation: "(Bez twojej cennej pomocy nie mógłbym ukończyć projektu na czas na końcowe oddanie)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'No habría podido' wyraża wdzięczność za pomoc. Pokazuje co by się NIE stało bez wsparcia. 'Sin + rzeczownik' wystarczy bez 'si', ale znaczenie warunkowe pozostaje."
      },
      {
        id: "condperf_8",
        question: "Yo en tu lugar _____ aceptado esa oferta de trabajo en el extranjero sin pensarlo dos veces.",
        translation: "(Ja na twoim miejscu przyjąłbym tę ofertę pracy za granicą nie myśląc dwa razy)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'Yo habría aceptado' to ja bym przyjął (rada). To sposób dawania rad o przeszłych decyzjach. 'En tu lugar' (na twoim miejscu) uruchamia conditional perfect."
      },
      {
        id: "condperf_9",
        question: "De haberlo sabido antes, te lo _____ dicho inmediatamente sin demora ninguna en absoluto.",
        translation: "(Gdybym to wiedział wcześniej, powiedziałbym ci to natychmiast bez żadnego opóźnienia w ogóle)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'De haberlo sabido' + 'habría dicho' to conditional perfect pełny. Wyraża żal za brak wcześniejszej informacji. Pokazuje co by się stało przy innej wiedzy."
      },
      {
        id: "condperf_10",
        question: "Con mejor preparación previa, _____ evitado todos esos errores tontos en el examen final importante.",
        translation: "(Z lepszym wcześniejszym przygotowaniem uniknąłbym wszystkich tych głupich błędów na ważnym końcowym egzaminie)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'Habría evitado' pokazuje żal za brak przygotowania. Błędy były możliwe do uniknięcia. To samoocena retrospektywna - uczenie się na błędach."
      },
      {
        id: "condperf_11",
        question: "Nosotros _____ ido a la playa si el tiempo hubiera estado mejor para nadar y tomar sol.",
        translation: "(Poszlibyśmy na plażę, gdyby pogoda była lepsza do pływania i opalania się)",
        options: ["habríamos", "habíamos", "hubiéramos", "hemos"],
        correct: "habríamos",
        explanation: "'Habríamos ido' dla 'my'. Mnoga pierwsza osoba. Plan który nie doszedł do skutku z powodu pogody. Wyjaśnia dlaczego coś się nie stało."
      },
      {
        id: "condperf_12",
        question: "¿_____ preferido vivir en otra época histórica diferente si hubieras podido elegir libremente?",
        translation: "(Czy wolałbyś żyć w innej epoce historycznej, gdybyś mógł swobodnie wybrać?)",
        options: ["Habrías", "Habías", "Hubieras", "Has"],
        correct: "Habrías",
        explanation: "'¿Habrías preferido?' pyta o preferencje hipotetyczne. Pytanie o alternatywną rzeczywistość. To filozoficzne pytanie używające conditional perfect."
      },
      {
        id: "condperf_13",
        question: "Con un poco más de suerte en el sorteo, _____ ganado el premio gordo de la lotería nacional.",
        translation: "(Z odrobiną więcej szczęścia w losowaniu wygrałbym główną nagrodę narodowej loterii)",
        options: ["habría", "había", "hubiera", "he"],
        correct: "habría",
        explanation: "'Habría ganado' wyraża prawie-sukces. Byłeś blisko ale nie wygrałeś. To forma dla wyrażania niewykorzystanych szans lub bliskich porażek."
      },
      {
        id: "condperf_14",
        question: "Ella nunca _____ pensado que terminaría viviendo en un país extranjero tan diferente culturalmente.",
        translation: "(Ona nigdy by nie pomyślała, że skończy mieszkając w obcym kraju tak kulturowo różnym)",
        options: ["habría", "había", "hubiera", "ha"],
        correct: "habría",
        explanation: "'Nunca habría pensado' wyraża retrospektywne zaskoczenie. Życie potoczyło się inaczej niż oczekiwała. To refleksja o niespodziewanych zwrotach życiowych."
      },
      {
        id: "condperf_15",
        question: "Todo _____ sido diferente si hubiéramos tomado la otra decisión crucial en aquel momento crítico.",
        translation: "(Wszystko byłoby inne, gdybyśmy podjęli inną kluczową decyzję w tamtym krytycznym momencie)",
        options: ["habría", "había", "hubiera", "ha"],
        correct: "habría",
        explanation: "'Todo habría sido' to wszystko byłoby. Spekulacja o alternatywnej rzeczywistości. To pokazuje jak jedna decyzja mogła zmienić całą przyszłość."
      }
    ]
  }
};

export default part18Categories;
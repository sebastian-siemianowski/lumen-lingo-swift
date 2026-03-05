/**
 * POLISH → SPANISH GRAMMAR - PART 22
 * 4 categories, 15 questions each - Complex patterns
 */

import { Repeat, Shield, Star, Radio } from "lucide-react";

export const part22Categories = {
  verbs_of_change_advanced: {
    name: "Czasowniki zmiany - zaawansowane",
    description: "Wyrażaj transformacje i zmiany stanów",
    icon: Repeat,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "change_1",
        question: "Mi hermana _____ muy nerviosa cada vez que tiene que hablar en público delante de muchas personas.",
        translation: "(Moja siostra denerwuje się bardzo za każdym razem, gdy musi mówić publicznie przed wieloma osobami)",
        options: ["se pone", "se hace", "se vuelve", "llega a ser"],
        correct: "se pone",
        explanation: "'Ponerse' dla szybkich zmian emocjonalnych. Reakcja momentalna na sytuację. 'Se pone nerviosa' pokazuje przejście z normalności do nerwowości - zmiana nagła i czasowa."
      },
      {
        id: "change_2",
        question: "Con los años mi abuelo _____ más paciente y tranquilo, la edad le dio sabiduría.",
        translation: "(Z latami mój dziadek stał się bardziej cierpliwy i spokojny, wiek dał mu mądrość)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' dla stopniowych zmian charakteru. Transformacja przez czas. 'Se volvió' pokazuje że zmiana była procesem, nie nagłym wydarzeniem - ewolucja osobowości."
      },
      {
        id: "change_3",
        question: "Después de muchos años de esfuerzo constante, finalmente _____ un médico reconocido en su especialidad.",
        translation: "(Po wielu latach ciągłego wysiłku w końcu został uznanym lekarzem w swojej specjalności)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse' dla zawodów i wyników wysiłku. Pokazuje aktywne dążenie i osiągnięcie. 'Se hizo médico' = został lekarzem przez studiowanie i pracę - świadoma transformacja."
      },
      {
        id: "change_4",
        question: "Las hojas de los árboles _____ amarillas y rojas en otoño antes de caer al suelo.",
        translation: "(Liście drzew stają się żółte i czerwone jesienią przed spadnięciem na ziemię)",
        options: ["se ponen", "se hacen", "se vuelven", "llegan a ser"],
        correct: "se ponen",
        explanation: "'Ponerse' dla zmian koloru. Szybka transformacja wizualna. 'Se ponen' + kolor to standardowa konstrukcja dla naturalnych zmian wyglądu - sezonowa metamorfoza."
      },
      {
        id: "change_5",
        question: "La situación económica del país _____ cada vez peor con el paso de los meses difíciles.",
        translation: "(Sytuacja ekonomiczna kraju staje się coraz gorsza z upływem trudnych miesięcy)",
        options: ["se vuelve", "se pone", "se hace", "llega a ser"],
        correct: "se vuelve",
        explanation: "'Volverse' dla postępujących zmian negatywnych. Stopniowe pogarszanie się. 'Cada vez' wzmacnia progresję - pokazuje że zmiana nie jest chwilowa ale trend."
      },
      {
        id: "change_6",
        question: "Cuando escuchó las malas noticias, _____ pálido como la pared y casi se desmaya del shock.",
        translation: "(Kiedy usłyszał złe wiadomości, zbladł jak ściana i prawie zemdlał z szoku)",
        options: ["se puso", "se hizo", "se volvió", "llegó a ser"],
        correct: "se puso",
        explanation: "'Ponerse pálido' to zblednąć. Natychmiastowa reakcja fizyczna na szok. 'Ponerse' dla nagłych zmian wyglądu lub stanu - transformacja w sekundy."
      },
      {
        id: "change_7",
        question: "Trabajando duramente durante décadas, _____ un empresario exitoso y respetado en su sector industrial.",
        translation: "(Pracując ciężko przez dekady, został odnoszącym sukcesy i szanowanym przedsiębiorcą w swoim sektorze przemysłowym)",
        options: ["llegó a ser", "se hizo", "se puso", "se volvió"],
        correct: "llegó a ser",
        explanation: "'Llegar a ser' to ostatecznie zostać (po długim procesie). Najbardziej formalne. Podkreśla osiągnięcie wysokiej pozycji przez czas i wysiłek - kulminacja drogi zawodowej."
      },
      {
        id: "change_8",
        question: "Mi hermano _____ vegetariano el año pasado por razones éticas sobre el trato a los animales.",
        translation: "(Mój brat został wegetarianinem w zeszłym roku z etycznych powodów dotyczących traktowania zwierząt)",
        options: ["se hizo", "se puso", "se volvió", "llegó a ser"],
        correct: "se hizo",
        explanation: "'Hacerse vegetariano' to zostać wegetarianinem. Świadoma decyzja i zmiana stylu życia. 'Hacerse' dla tożsamości które wybieramy - pokazuje wolę i akcję, nie przypadek."
      },
      {
        id: "change_9",
        question: "Con tanto estrés laboral acumulado, mi padre _____ insoportable e irritable con todos nosotros.",
        translation: "(Z tak dużym nagromadzonym stresem zawodowym mój ojciec stał się nie do zniesienia i drażliwy ze wszystkimi nami)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' dla negatywnych zmian charakteru. Stopniowa transformacja osobowości przez okoliczności. 'Volverse + przymiotnik negatywny' to typowe dla pogorszenia stanu psychicznego."
      },
      {
        id: "change_10",
        question: "El agua del río _____ turbia y marrón después de las lluvias torrenciales de la semana pasada.",
        translation: "(Woda w rzece stała się mętna i brązowa po ulewnych deszczach z zeszłego tygodnia)",
        options: ["se puso", "se hizo", "se volvió", "quedó"],
        correct: "se puso",
        explanation: "'Ponerse' dla zmian stanu rzeczy. Woda zmieniła wygląd przez zewnętrzne czynniki. 'Se puso' pokazuje transformację z czystej na mętną - zmiana stanu fizycznego."
      },
      {
        id: "change_11",
        question: "La leche _____ mala porque la dejaron fuera de la nevera durante toda la noche calurosa.",
        translation: "(Mleko się zepsuło, bo zostawili je poza lodówką przez całą ciepłą noc)",
        options: ["se puso", "se hizo", "se volvió", "quedó"],
        correct: "se puso",
        explanation: "'Ponerse malo/mala' to zepsuć się (o jedzeniu). Zmiana jakości. 'Malo' zgadza się z rodzajem - 'la leche' wymaga 'mala'. Przejście z dobrego do złego stanu."
      },
      {
        id: "change_12",
        question: "A base de mucho estudio y práctica diaria, _____ un experto en su campo de investigación.",
        translation: "(Na bazie dużej nauki i codziennej praktyki stał się ekspertem w swojej dziedzinie badań)",
        options: ["se convirtió en", "se puso", "se hizo", "se volvió"],
        correct: "se convirtió en",
        explanation: "'Convertirse en' to przekształcić się w (profesja/rola). Wymaga 'en' przed rzeczownikiem. Bardziej formalne niż 'hacerse' - podkreśla transformację kompletną w nową tożsamość."
      },
      {
        id: "change_13",
        question: "Después del accidente traumático, _____ una persona completamente diferente, más seria y reflexiva.",
        translation: "(Po traumatycznym wypadku stała się całkowicie inną osobą, bardziej poważną i refleksyjną)",
        options: ["se volvió", "se puso", "se hizo", "llegó a ser"],
        correct: "se volvió",
        explanation: "'Volverse' dla głębokich zmian osobowości. Wydarzenie spowodowało trwałą transformację charakteru. Pokazuje że zmiana jest permanentna, nie chwilowa reakcja."
      },
      {
        id: "change_14",
        question: "El cielo _____ completamente negro de repente y empezó a caer granizo del tamaño de pelotas.",
        translation: "(Niebo stało się całkowicie czarne nagle i zaczął padać grad wielkości piłek)",
        options: ["se puso", "se hizo", "se volvió", "quedó"],
        correct: "se puso",
        explanation: "'Ponerse + kolor' dla szybkich zmian. 'De repente' potwierdza nagłość. 'Se puso negro' to natychmiastowa transformacja - typowe dla gwałtownych zmian pogodowych."
      },
      {
        id: "change_15",
        question: "Poco a poco, con los años de experiencia acumulada, _____ más sabio y comprensivo con los demás.",
        translation: "(Powoli, z latami nagromadzonego doświadczenia, stał się mądrzejszy i bardziej wyrozumiały dla innych)",
        options: ["se fue volviendo", "se puso", "se hizo", "llegó a ser"],
        correct: "se fue volviendo",
        explanation: "'Ir + gerundio' (volviéndose) pokazuje bardzo stopniową zmianę. 'Poco a poco' potwierdza powolność. To najbardziej stopniowa forma - transformacja przez długi okres, krok po kroku."
      }
    ]
  },

  sequence_of_tenses: {
    name: "Sekwencja czasów",
    description: "Zgodność czasów w zdaniach złożonych",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "seq_1",
        question: "Me pidió que le _____ con la mudanza el sábado por la mañana temprano.",
        translation: "(Poprosił mnie, żebym mu pomógł z przeprowadzką w sobotę wcześnie rano)",
        options: ["ayudara", "ayude", "ayudaba", "ayudaría"],
        correct: "ayudara",
        explanation: "Pretérito (pidió) + imperfecto subjuntivo (ayudara). Gdy czasownik główny jest w przeszłości, subjuntivo używa formy imperfecto. To sekwencja czasów - przeszłość wymaga przeszłej formy subjuntivo."
      },
      {
        id: "seq_2",
        question: "Espero que mañana _____ buen tiempo para poder organizar la barbacoa en el jardín.",
        translation: "(Mam nadzieję, że jutro będzie dobra pogoda, żeby móc zorganizować grilla w ogrodzie)",
        options: ["haga", "hace", "hará", "hiciera"],
        correct: "haga",
        explanation: "Presente (espero) + presente subjuntivo (haga). Gdy główny czasownik jest w teraźniejszym, używamy presente subjuntivo dla przyszłych wydarzeń. To podstawowa sekwencja - teraźniejszość z teraźniejszą formą subjuntivo."
      },
      {
        id: "seq_3",
        question: "Dudaba que ellos _____ a tiempo a la reunión por el tráfico matutino terrible.",
        translation: "(Wątpiłem, że oni dotrą na czas na spotkanie przez okropny poranny ruch)",
        options: ["llegaran", "lleguen", "llegarían", "llegaban"],
        correct: "llegaran",
        explanation: "Imperfecto (dudaba) + imperfecto subjuntivo (llegaran). Wątpliwość w przeszłości wymaga imperfecto subjuntivo. To sekwencja - przeszły czas główny z przeszłą formą subjuntivo."
      },
      {
        id: "seq_4",
        question: "Me alegro de que _____ aprobado todos tus exámenes finales con tan buenas notas.",
        translation: "(Cieszę się, że zdałeś wszystkie swoje końcowe egzaminy z tak dobrymi ocenami)",
        options: ["hayas", "has", "habías", "hubieras"],
        correct: "hayas",
        explanation: "Presente (me alegro) + perfecto subjuntivo (hayas aprobado). Dla akcji zakończonej przed momentem radości używamy perfecto. To pokazuje że zdałeś PRZED tym jak się cieszę."
      },
      {
        id: "seq_5",
        question: "Era necesario que todos _____ puntuales a las reuniones semanales del departamento empresarial.",
        translation: "(Konieczne było, żeby wszyscy byli punktualni na cotygodniowych spotkaniach działu firmowego)",
        options: ["fueran", "sean", "serían", "eran"],
        correct: "fueran",
        explanation: "Imperfecto (era) + imperfecto subjuntivo (fueran). Konieczność w przeszłości wymaga imperfecto subjuntivo dla kontynuacji. To równoległe czasy - była konieczność + żeby byli."
      },
      {
        id: "seq_6",
        question: "No creo que _____ suficiente comida para todos los invitados de la fiesta grande.",
        translation: "(Nie sądzę, że jest wystarczająco jedzenia dla wszystkich gości wielkiej imprezy)",
        options: ["haya", "hay", "habrá", "hubiera"],
        correct: "haya",
        explanation: "Presente (no creo) + presente subjuntivo (haya). Wątpliwość o teraz używa presente subjuntivo. Negacja przekonania zawsze wymaga subjuntivo, niezależnie od czasu."
      },
      {
        id: "seq_7",
        question: "Le recomendé que _____ al médico lo antes posible para revisar ese problema de salud.",
        translation: "(Poleciłem mu, żeby poszedł do lekarza jak najszybciej, żeby sprawdzić ten problem zdrowotny)",
        options: ["fuera", "vaya", "iría", "iba"],
        correct: "fuera",
        explanation: "Pretérito (recomendé) + imperfecto subjuntivo (fuera). Rada w przeszłości wymaga imperfecto subjuntivo. 'Recomendar' jak wszystkie rady używa subjuntivo."
      },
      {
        id: "seq_8",
        question: "Temía que su hijo no _____ aprobar el curso porque no estudiaba regularmente en casa.",
        translation: "(Bałem się, że jego syn nie zda kursu, bo nie uczył się regularnie w domu)",
        options: ["fuera a", "va a", "iría a", "iba a"],
        correct: "fuera a",
        explanation: "Imperfecto (temía) + imperfecto subjuntivo (fuera a). Strach w przeszłości o przyszłe wydarzenie wymaga imperfecto subjuntivo z 'ir a'. To podwójna przeszłość."
      },
      {
        id: "seq_9",
        question: "Quiere que nosotros _____ más temprano mañana para aprovechar todo el día productivamente.",
        translation: "(Chce, żebyśmy przyszli wcześniej jutro, żeby produktywnie wykorzystać cały dzień)",
        options: ["lleguemos", "llegamos", "llegaremos", "llegáramos"],
        correct: "lleguemos",
        explanation: "Presente (quiere) + presente subjuntivo (lleguemos). Pragnienie o przyszłości używa presente subjuntivo. 'Querer que' zawsze wymaga subjuntivo - to pragnienie, nie fakt."
      },
      {
        id: "seq_10",
        question: "Me molestó mucho que no me _____ avisado del cambio de planes con anticipación suficiente.",
        translation: "(Bardzo mnie zdenerwowało, że nie powiadomiłeś mnie o zmianie planów z wystarczającym wyprzedzeniem)",
        options: ["hubieras", "hayas", "habías", "habrías"],
        correct: "hubieras",
        explanation: "Pretérito (molestó) + pluperfecto subjuntivo (hubieras avisado). Irytacja o przeszłej akcji używa pluperfecto subjuntivo. Akcja (nie powiadomienie) była przed emocją (irytacja)."
      },
      {
        id: "seq_11",
        question: "Es probable que _____ más tarde de lo previsto por retrasos imprevistos en el camino.",
        translation: "(Prawdopodobne jest, że przyjdę później niż przewidziane przez nieprzewidziane opóźnienia w drodze)",
        options: ["llegue", "llego", "llegaré", "llegara"],
        correct: "llegue",
        explanation: "Presente (es probable) + presente subjuntivo (llegue). Prawdopodobieństwo wymaga subjuntivo. Mimo że mówimy o przyszłości, używamy presente subjuntivo po presente głównym."
      },
      {
        id: "seq_12",
        question: "Sería mejor que _____ la verdad completa desde el principio para evitar malentendidos posteriores.",
        translation: "(Byłoby lepiej, żebyś powiedział całą prawdę od początku, żeby uniknąć późniejszych nieporozumień)",
        options: ["dijeras", "digas", "dirías", "decías"],
        correct: "dijeras",
        explanation: "Conditional (sería) + imperfecto subjuntivo (dijeras). Warunkowy wymaga imperfecto subjuntivo. To rada hipotetyczna - co byłoby lepiej w idealnej sytuacji."
      },
      {
        id: "seq_13",
        question: "Necesito que me _____ los documentos importantes antes de la reunión de mañana por la mañana.",
        translation: "(Potrzebuję, żebyś mi przygotował ważne dokumenty przed jutrzejszym spotkaniem rano)",
        options: ["prepares", "preparas", "prepararás", "prepararas"],
        correct: "prepares",
        explanation: "Presente (necesito) + presente subjuntivo (prepares). Potrzeba wymaga subjuntivo. Mimo że mówimy o przyszłym działaniu, po presente używamy presente subjuntivo."
      },
      {
        id: "seq_14",
        question: "Me sorprendió que _____ hablando español tan bien sin haber tomado clases formales nunca.",
        translation: "(Zaskoczyło mnie, że mówisz tak dobrze po hiszpańsku nie biorąc nigdy formalnych lekcji)",
        options: ["estuvieras", "estés", "estarías", "estabas"],
        correct: "estuvieras",
        explanation: "Pretérito (sorprendió) + imperfecto subjuntivo (estuvieras). Zaskoczenie w przeszłości wymaga imperfecto subjuntivo. Twoja umiejętność istniała w momencie zaskoczenia - stan równoległy."
      },
      {
        id: "seq_15",
        question: "Preferiría que no _____ ese tema delicado en la reunión familiar de mañana por respeto.",
        translation: "(Wolałbym, żebyś nie poruszał tego delikatnego tematu na jutrzejszym rodzinnym spotkaniu z szacunku)",
        options: ["sacaras", "saques", "sacarías", "sacabas"],
        correct: "sacaras",
        explanation: "Conditional (preferiría) + imperfecto subjuntivo (sacaras). Conditional główny wymaga imperfecto subjuntivo. To grzeczna prośba - warunkowy czyni ją mniej kategoryczną."
      }
    ]
  },

  idiomatic_estar_expressions: {
    name: "Idiomatyczne wyrażenia z 'estar'",
    description: "Stałe frazy używające estar",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "estar_expr_1",
        question: "Mi hermana está _____ nube desde que su novio le pidió matrimonio en París romántico.",
        translation: "(Moja siostra jest w siódmym niebie odkąd jej chłopak oświadczył się jej w romantycznym Paryżu)",
        options: ["en la", "sobre la", "en una", "por la"],
        correct: "en la",
        explanation: "'Estar en la nube' to być w siódmym niebie (szczęśliwym). Idiomatyczne wyrażenie euforii. Zawsze 'en la nube' z rodzajnikiem - to ustalona fraza dla skrajnego szczęścia."
      },
      {
        id: "estar_expr_2",
        question: "Estoy _____ de tanto trabajo acumulado esta semana, necesito vacaciones urgentemente ya.",
        translation: "(Jestem po uszy w pracy nagromadzonej w tym tygodniu, pilnie potrzebuję już wakacji)",
        options: ["hasta arriba", "muy lleno", "completamente", "demasiado"],
        correct: "hasta arriba",
        explanation: "'Estar hasta arriba' to być przytłoczonym (dosłownie: po czubek głowy). Kolokwialne wyrażenie przeciążenia pracą. Pokazuje że masz maksimum - nie możesz więcej przyjąć."
      },
      {
        id: "estar_expr_3",
        question: "El proyecto está _____ marcha desde hace tres meses y avanza según el cronograma establecido.",
        translation: "(Projekt jest w toku od trzech miesięcy i postępuje według ustalonego harmonogramu)",
        options: ["en", "de", "por", "a"],
        correct: "en",
        explanation: "'Estar en marcha' to być w toku, w realizacji. Pokazuje że coś aktywnie działa. 'En marcha' to stan aktywności - proces który został rozpoczęty i trwa."
      },
      {
        id: "estar_expr_4",
        question: "¿Estás _____ broma? No puedo creer lo que acabas de decirme sobre tu decisión extraña.",
        translation: "(Czy żartujesz? Nie mogę uwierzyć w to, co właśnie mi powiedziałeś o swojej dziwnej decyzji)",
        options: ["de", "en", "con", "por"],
        correct: "de",
        explanation: "'¿Estás de broma?' to czy żartujesz? Pytanie o poważność wypowiedzi. Zawsze 'de broma' - to ustalona fraza dla weryfikacji czy ktoś mówi poważnie."
      },
      {
        id: "estar_expr_5",
        question: "Estamos _____ tu lado en estos momentos difíciles, cuenta con nuestro apoyo incondicional siempre.",
        translation: "(Jesteśmy po twojej stronie w tych trudnych momentach, licz na nasze bezwarunkowe wsparcie zawsze)",
        options: ["de", "en", "a", "por"],
        correct: "de",
        explanation: "'Estar de tu lado' to być po czyjejś stronie (wspierać). Pokazuje lojalność i wsparcie. 'De tu lado' to idiomatyczne wyrażenie sojuszu emocjonalnego lub moralnego."
      },
      {
        id: "estar_expr_6",
        question: "Mi abuelo está _____ salud últimamente, ha tenido varios problemas médicos este año pasado.",
        translation: "(Mój dziadek ma problemy ze zdrowiem ostatnio, miał kilka problemów medycznych w tym minionym roku)",
        options: ["mal de", "malo de", "enfermo de", "débil de"],
        correct: "mal de",
        explanation: "'Estar mal de salud' to mieć problemy zdrowotne. 'Mal' (przysłówek) + 'de salud' dla ogólnego stanu. Różni się od 'estar enfermo' (być chorym na coś konkretnego)."
      },
      {
        id: "estar_expr_7",
        question: "¿_____ al tanto de las últimas noticias políticas sobre las elecciones presidenciales próximas?",
        translation: "(Czy jesteś na bieżąco z najnowszymi wiadomościami politycznymi o nadchodzących wyborach prezydenckich?)",
        options: ["Estás", "Eres", "Tienes", "Sabes"],
        correct: "Estás",
        explanation: "'Estar al tanto' to być na bieżąco, być poinformowanym. Zawsze 'al tanto' - to pokazuje że śledzisz rozwój sytuacji. Stan bycia zaktualizowanym."
      },
      {
        id: "estar_expr_8",
        question: "El restaurante está _____ gente los fines de semana, es imposible encontrar mesa sin reserva previa.",
        translation: "(Restauracja jest pełna ludzi w weekendy, niemożliwe jest znalezienie stolika bez wcześniejszej rezerwacji)",
        options: ["a tope de", "lleno de", "repleto de", "hasta los topes de"],
        correct: "a tope de",
        explanation: "'Estar a tope' to być zapchany (kolokwialne). Maksymalna pojemność. Bardzo hiszpańskie wyrażenie dla przytłoczenia ludźmi. 'Hasta los topes' też możliwe - oba intensywne."
      },
      {
        id: "estar_expr_9",
        question: "Estoy _____ acuerdo contigo en que necesitamos cambiar nuestra estrategia comercial actual completamente.",
        translation: "(Zgadzam się z tobą, że musimy całkowicie zmienić naszą obecną strategię handlową)",
        options: ["de", "en", "con", "por"],
        correct: "de",
        explanation: "'Estar de acuerdo' to zgadzać się. Zawsze 'de acuerdo', nigdy 'en acuerdo'. To wyrażenie konsensusu - zgoda z opinią lub planem."
      },
      {
        id: "estar_expr_10",
        question: "El niño está _____ vacaciones escolares y por eso está tan contento y relajado estos días.",
        translation: "(Dziecko jest na wakacjach szkolnych i dlatego jest tak zadowolone i zrelaksowane w te dni)",
        options: ["de", "en", "por", "con"],
        correct: "de",
        explanation: "'Estar de vacaciones' to być na wakacjach. 'De' pokazuje stan czasowy aktywności. Podobnie 'estar de viaje', 'estar de baja' - wszystkie stany tymczasowe z 'de'."
      },
      {
        id: "estar_expr_11",
        question: "Los estudiantes están _____ exámenes finales toda esta semana intensiva de pruebas académicas.",
        translation: "(Studenci mają końcowe egzaminy przez cały ten intensywny tydzień testów akademickich)",
        options: ["de", "en", "con", "por"],
        correct: "de",
        explanation: "'Estar de exámenes' to mieć egzaminy (być w okresie egzaminów). 'De' dla okresów intensywnej aktywności. To stan czasowy - trwa tylko tydzień."
      },
      {
        id: "estar_expr_12",
        question: "Mi padre está _____ viaje de negocios en Asia y volverá el próximo martes por la tarde.",
        translation: "(Mój ojciec jest w podróży biznesowej w Azji i wróci w przyszły wtorek po południu)",
        options: ["de", "en", "por", "con"],
        correct: "de",
        explanation: "'Estar de viaje' to być w podróży. Stan tymczasowy nieobecności. 'De viaje' bez rodzajnika - to jak 'de vacaciones', stan ogólny nie konkretny wyjazd."
      },
      {
        id: "estar_expr_13",
        question: "Estamos _____ suerte porque conseguimos los últimos billetes disponibles para el concierto agotado.",
        translation: "(Mamy szczęście, bo zdobyliśmy ostatnie dostępne bilety na wyprzedany koncert)",
        options: ["de", "con", "en", "por"],
        correct: "de",
        explanation: "'Estar de suerte' to mieć szczęście (w danej sytuacji). To o konkretnym momencie szczęścia, nie ogólnej cesze. 'De suerte' pokazuje szczęśliwy zbieg okoliczności."
      },
      {
        id: "estar_expr_14",
        question: "¿_____ seguro de tu decisión? Una vez firmado el contrato no podrás echarte atrás fácilmente.",
        translation: "(Czy jesteś pewien swojej decyzji? Raz podpisawszy kontrakt nie będziesz mógł łatwo się wycofać)",
        options: ["Estás", "Eres", "Tienes", "Haces"],
        correct: "Estás",
        explanation: "'Estar seguro de' to być pewnym czegoś. Stan pewności (może się zmienić). Różni się od 'ser seguro' (być bezpiecznym). Pytanie o pewność emocjonalną, nie bezpieczeństwo."
      },
      {
        id: "estar_expr_15",
        question: "El bebé está _____ punto de llorar, tiene hambre y sueño al mismo tiempo ahora.",
        translation: "(Niemowlę jest bliskie płaczu, jest głodne i śpiące w tym samym czasie teraz)",
        options: ["a", "en", "de", "por"],
        correct: "a",
        explanation: "'Estar a punto de' to być bliskim zrobienia czegoś (zaraz się stanie). Pokazuje nieuchronność - akcja nastąpi za moment. 'A punto de' + infinitivo dla bezpośredniej przyszłości."
      }
    ]
  },

  transitivity_changes: {
    name: "Zmiany przechodniości czasowników",
    description: "Czasowniki zmieniające się z/bez dopełnienia",
    icon: Radio,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "trans_1",
        question: "Voy a _____ a mi hijo pequeño a las siete de la mañana para ir al colegio.",
        translation: "(Obudzę mojego małego syna o siódmej rano, żeby iść do szkoły)",
        options: ["despertar", "despertarme", "dormir", "dormirme"],
        correct: "despertar",
        explanation: "'Despertar a alguien' to budzić kogoś (przechodni). Bez 'se' bo budzisz inną osobę. 'Despertarse' to budzić się (zwrotny). Obecność dopełnienia (hijo) wymaga formy przechodniej."
      },
      {
        id: "trans_2",
        question: "Me _____ todos los días a las seis de la mañana sin necesidad de despertador.",
        translation: "(Budzę się codziennie o szóstej rano bez potrzeby budzika)",
        options: ["despierto", "desperto", "levanto", "acuesto"],
        correct: "despierto",
        explanation: "'Despertarse' to budzić się samemu (zwrotny). 'Me' pokazuje że akcja jest zwrotna - robisz to sobie. Bez dopełnienia zewnętrznego używamy formy zwrotnej."
      },
      {
        id: "trans_3",
        question: "¿Puedes _____ la luz del salón al salir? No tiene sentido dejarla encendida toda la noche.",
        translation: "(Czy możesz zgasić światło w salonie wychodząc? Nie ma sensu zostawiać je zapalone całą noc)",
        options: ["apagar", "apagarte", "encender", "encenderte"],
        correct: "apagar",
        explanation: "'Apagar' to zgasić (przechodni - coś konkretnego). Nie jest zwrotny bo wpływasz na zewnętrzny obiekt (luz). Dopełnienie bezpośrednie wymaga formy nieprzchodniej."
      },
      {
        id: "trans_4",
        question: "La vela _____ sola después de arder durante varias horas en la mesa del comedor.",
        translation: "(Świeca zgasła sama po płonięciu przez kilka godzin na stole jadalni)",
        options: ["se apagó", "apagó", "se encendió", "encendió"],
        correct: "se apagó",
        explanation: "'Apagarse' to zgasnąć samo (nieprzechodni zwrotny). Świeca nie była zgaszona przez kogoś - zgasła sama. 'Se' pokazuje że akcja nastąpiła bez zewnętrznego agenta."
      },
      {
        id: "trans_5",
        question: "Tengo que _____ este abrigo grueso porque hace mucho frío afuera en la calle nevada.",
        translation: "(Muszę założyć ten gruby płaszcz, bo jest bardzo zimno na zewnątrz na śnieżnej ulicy)",
        options: ["ponerme", "poner", "quitarme", "quitar"],
        correct: "ponerme",
        explanation: "'Ponerse' to założyć na siebie (zwrotny). Zakładasz TO na SIEBIE - akcja zwrotna. 'Poner' bez 'se' byłoby położyć coś gdzieś (na stół, na półkę)."
      },
      {
        id: "trans_6",
        question: "Mi madre _____ la mesa con un mantel bonito antes de que lleguen los invitados a cenar.",
        translation: "(Moja mama nakrywa stół pięknym obrusem zanim przyjdą goście na kolację)",
        options: ["pone", "se pone", "coloca", "se coloca"],
        correct: "pone",
        explanation: "'Poner la mesa' to nakryć stół (przechodni). Ustawiasz rzeczy NA stole. Nie jest zwrotny bo nie robisz tego sobie - przygotowujesz dla innych."
      },
      {
        id: "trans_7",
        question: "El bebé _____ profundamente después de tomar su biberón caliente de leche materna.",
        translation: "(Niemowlę zasnęło głęboko po wypiciu ciepłej butelki mleka matczynego)",
        options: ["se durmió", "durmió", "se acostó", "acostó"],
        correct: "se durmió",
        explanation: "'Dormirse' to zasnąć (proces zasypiania - zwrotny). 'Dormir' to spać (stan). 'Se durmió' pokazuje przejście ze stanu czuwania do snu - transformacja momentu."
      },
      {
        id: "trans_8",
        question: "La profesora _____ al niño que estaba durmiendo en clase durante la lección aburrida.",
        translation: "(Nauczycielka obudziła chłopca, który spał w klasie podczas nudnej lekcji)",
        options: ["despertó", "se despertó", "levantó", "se levantó"],
        correct: "despertó",
        explanation: "'Despertar a alguien' to budzić kogoś (przechodni). Nauczycielka obudza ucznia - akcja skierowana na inną osobę. Obecność dopełnienia (al niño) blokuje formę zwrotną."
      },
      {
        id: "trans_9",
        question: "No puedo _____ bien los ojos sin mis gafas graduadas de la óptica profesional cercana.",
        translation: "(Nie mogę otworzyć dobrze oczu bez moich okularów korekcyjnych z pobliskiej profesjonalnej optyki)",
        options: ["abrir", "abrirme", "cerrar", "cerrarme"],
        correct: "abrir",
        explanation: "'Abrir los ojos' to otworzyć oczy (przechodni). Mimo że są twoje oczy, nie używamy 'se' - to akcja fizyczna na część ciała jako obiekt."
      },
      {
        id: "trans_10",
        question: "La puerta principal _____ sola con el viento fuerte y ahora no podemos cerrarla bien.",
        translation: "(Główne drzwi otworzyły się same z silnym wiatrem i teraz nie możemy ich dobrze zamknąć)",
        options: ["se abrió", "abrió", "se cerró", "cerró"],
        correct: "se abrió",
        explanation: "'Abrirse' to otworzyć się samo (nieprzechodni). Wiatr spowodował ale drzwi otworzyły się - nie było aktywnego agenta. 'Se' dla akcji spontanicznych bez bezpośredniej przyczyny ludzkiej."
      },
      {
        id: "trans_11",
        question: "Voy a _____ temprano hoy porque mañana tengo que madrugar mucho para viajar lejos.",
        translation: "(Położę się wcześnie dziś, bo jutro muszę wcześnie wstać, żeby daleko podróżować)",
        options: ["acostarme", "acostar", "dormir", "dormirme"],
        correct: "acostarme",
        explanation: "'Acostarse' to kłaść się spać (zwrotny). Robisz to sobie - akcja na siebie. 'Acostar' (bez se) byłoby kłaść kogoś innego do łóżka (np. dziecko)."
      },
      {
        id: "trans_12",
        question: "Mi madre _____ a mi hermano pequeño cada noche a las ocho en punto sin excepciones.",
        translation: "(Moja mama kładzie mojego małego brata do łóżka każdego wieczoru o ósmej dokładnie bez wyjątków)",
        options: ["acuesta", "se acuesta", "duerme", "se duerme"],
        correct: "acuesta",
        explanation: "'Acostar a alguien' to kłaść kogoś (przechodni). Mama kładzie syna - dwie różne osoby. Dopełnienie (hermano) wymaga formy przechodniej bez 'se'."
      },
      {
        id: "trans_13",
        question: "El perro asustado _____ debajo de la cama durante la tormenta con truenos fuertes.",
        translation: "(Przestraszony pies schował się pod łóżkiem podczas burzy z silnymi grzmotami)",
        options: ["se escondió", "escondió", "se refugió", "refugió"],
        correct: "se escondió",
        explanation: "'Esconderse' to schować się (zwrotny). Pies ukrył siebie - akcja refleksyjna. 'Esconder' (bez se) byłoby ukryć coś/kogoś innego. Brak zewnętrznego dopełnienia wymaga 'se'."
      },
      {
        id: "trans_14",
        question: "Voy a _____ el paraguas grande en el armario del pasillo cuando llegue a casa mojado.",
        translation: "(Schowam duży parasol do szafy w korytarzu, kiedy dojdę do domu mokry)",
        options: ["guardar", "guardarme", "esconder", "esconderme"],
        correct: "guardar",
        explanation: "'Guardar algo' to schować coś (przechodni). Chowasz przedmiot (paraguas) do miejsca. Nie jest zwrotny bo akcja jest na zewnętrzny obiekt, nie na siebie."
      },
      {
        id: "trans_15",
        question: "Las flores _____ marchitando poco a poco sin agua suficiente durante esta semana calurosa.",
        translation: "(Kwiaty więdną powoli bez wystarczającej wody podczas tego ciepłego tygodnia)",
        options: ["se están", "están", "son", "se son"],
        correct: "se están",
        explanation: "'Marchitarse' to więdnąć (zwrotny nieprzechodni). Kwiaty więdną same - proces naturalny. 'Se están marchitando' to trwający proces bez zewnętrznego agenta - natura działa."
      }
    ]
  }
};

export default part22Categories;
/**
 * POLISH → SPANISH GRAMMAR - PART 16
 * 4 categories, 15 questions each - Advanced structures
 */

import { MapPin, Flame, Shield, Users } from "lucide-react";

export const part16Categories = {
  prepositions_of_place: {
    name: "Przyimki miejsca i ruchu",
    description: "Opanuj przyimki lokalizacji i kierunku",
    icon: MapPin,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "prep_1",
        question: "El gato está escondido _____ la mesa del comedor desde hace una hora.",
        translation: "(Kot jest schowany pod stołem jadalnym od godziny)",
        options: ["debajo de", "bajo de", "abajo de", "sobre"],
        correct: "debajo de",
        explanation: "'Debajo de' to pod (fizycznie poniżej czegoś). Używamy gdy coś jest bezpośrednio pod czymś innym. 'Bajo' jest bardziej abstrakcyjne lub literackie, podczas gdy 'debajo de' jest standardem dla codziennych sytuacji."
      },
      {
        id: "prep_2",
        question: "Vamos a caminar _____ el parque hasta llegar al otro lado de la ciudad.",
        translation: "(Będziemy spacerować przez park, aż dojdziemy na drugą stronę miasta)",
        options: ["por", "para", "a través de", "en"],
        correct: "por",
        explanation: "'Por' używamy dla ruchu przez przestrzeń bez konkretnego celu. 'A través de' też działa ale 'por' jest naturalniejsze. 'Para' wskazywałoby cel, nie trasę."
      },
      {
        id: "prep_3",
        question: "Deja las llaves _____ la mesa de la entrada cuando salgas de casa.",
        translation: "(Zostaw klucze na stole przy wejściu, kiedy wychodzisz z domu)",
        options: ["sobre", "en", "encima de", "arriba de"],
        correct: "sobre",
        explanation: "'Sobre' to na (powierzchni czegoś). 'Encima de' też poprawne ale bardziej emfatyczne. 'En' może znaczyć 'w' lub 'na' w zależności od kontekstu, ale 'sobre' jest najbardziej precyzyjne dla powierzchni."
      },
      {
        id: "prep_4",
        question: "Mi hermana vive _____ de mí en el mismo edificio, en el piso superior.",
        translation: "(Moja siostra mieszka nade mną w tym samym budynku, na wyższym piętrze)",
        options: ["encima", "arriba", "sobre", "en"],
        correct: "encima",
        explanation: "'Encima de' to nad kimś/czymś (wyżej). Bez 'de' mówimy 'encima' gdy kontekst jest jasny. 'Arriba' to góra (kierunek), ale 'encima' to pozycja bezpośrednio nad."
      },
      {
        id: "prep_5",
        question: "El banco está _____ la farmacia y la panadería en la calle principal.",
        translation: "(Bank jest między apteką a piekarnią na głównej ulicy)",
        options: ["entre", "en medio de", "en", "al lado de"],
        correct: "entre",
        explanation: "'Entre' to między (dwiema rzeczami). Zawsze używamy 'entre' z 'y' łączącym dwie rzeczy. 'En medio de' sugeruje środek większej grupy rzeczy."
      },
      {
        id: "prep_6",
        question: "Voy _____ la oficina cada mañana a las ocho en punto sin falta.",
        translation: "(Idę do biura każdego ranka o ósmej dokładnie bez wyjątku)",
        options: ["a", "hacia", "para", "en"],
        correct: "a",
        explanation: "'Ir a' to iść do (konkretnego miejsca). 'A' wskazuje precyzyjny cel ruchu. 'Hacia' byłoby 'w kierunku' (mniej precyzyjne), a 'para' używamy z czasownikami innymi niż 'ir'."
      },
      {
        id: "prep_7",
        question: "Pon el cuadro _____ la pared del salón, quedará muy bonito ahí.",
        translation: "(Powieś obraz na ścianie salonu, będzie tam bardzo ładnie wyglądał)",
        options: ["en", "sobre", "a", "contra"],
        correct: "en",
        explanation: "'En la pared' to na ścianie (przymocowane). 'Sobre' sugerowałoby leżenie na powierzchni poziomej. Ściany są pionowe, więc używamy 'en', nie 'sobre'."
      },
      {
        id: "prep_8",
        question: "El avión volaba _____ las nubes blancas a gran altitud durante todo el viaje.",
        translation: "(Samolot leciał nad białymi chmurami na dużej wysokości podczas całej podróży)",
        options: ["sobre", "encima de", "arriba de", "en"],
        correct: "sobre",
        explanation: "'Sobre' dla ruchu nad czymś (bez kontaktu). W powietrzu używamy 'sobre', nie 'encima de'. 'Sobre' ma szersze zastosowanie - może być statyczne lub dynamiczne."
      },
      {
        id: "prep_9",
        question: "Los niños corrieron _____ sus abuelos cuando los vieron en la estación de tren.",
        translation: "(Dzieci pobiegły do swoich dziadków, kiedy ich zobaczyli na stacji kolejowej)",
        options: ["hacia", "a", "para", "en"],
        correct: "hacia",
        explanation: "'Hacia' to w kierunku (ruch). Bardziej emocjonalne i naturalne dla biegnięcia niż tylko 'a'. 'Hacia' sugeruje proces zbliżania się, nie tylko cel."
      },
      {
        id: "prep_10",
        question: "Colgamos las fotos familiares _____ la chimenea antigua del salón principal.",
        translation: "(Powiesiliśmy rodzinne zdjęcia nad starym kominkiem w głównym salonie)",
        options: ["encima de", "sobre", "arriba de", "en"],
        correct: "encima de",
        explanation: "'Encima de' dla pozycji nad czymś (wyżej ale blisko). Obrazy nad kominkiem to klasyczne miejsce. 'Sobre' też działa, ale 'encima de' podkreśla pionową relację przestrzenną."
      },
      {
        id: "prep_11",
        question: "Vamos a dar un paseo _____ la playa al atardecer para ver el sol.",
        translation: "(Przejdziemy się wzdłuż plaży o zachodzie słońca, żeby zobaczyć słońce)",
        options: ["por", "a lo largo de", "en", "sobre"],
        correct: "por",
        explanation: "'Por la playa' to wzdłuż plaży (ruch przez obszar). 'A lo largo de' też poprawne ale bardziej formalne. 'Por' jest naturalnym wyborem dla spacerów po obszarach."
      },
      {
        id: "prep_12",
        question: "El restaurante está justo _____ del hotel donde nos alojamos esta semana.",
        translation: "(Restauracja jest dokładnie naprzeciwko hotelu, gdzie się zatrzymujemy w tym tygodniu)",
        options: ["enfrente", "delante", "frente", "ante"],
        correct: "enfrente",
        explanation: "'Enfrente de' to naprzeciwko (po drugiej stronie). 'Delante de' to przed (z tej samej strony). To kluczowa różnica - 'enfrente' przekracza przestrzeń między obiektami."
      },
      {
        id: "prep_13",
        question: "Los documentos importantes están guardados _____ del cajón superior del escritorio.",
        translation: "(Ważne dokumenty są schowane w środku górnej szuflady biurka)",
        options: ["dentro", "adentro", "en", "entre"],
        correct: "dentro",
        explanation: "'Dentro de' to wewnątrz (zawarte w czymś). 'Adentro' to 'do środka' (ruch), podczas gdy 'dentro' to statyczna pozycja. 'En' też działa, ale 'dentro de' jest bardziej precyzyjne."
      },
      {
        id: "prep_14",
        question: "Saltó _____ la valla alta del jardín para recuperar la pelota que cayó.",
        translation: "(Przeskoczył przez wysoki płot ogrodu, żeby odzyskać piłkę, która spadła)",
        options: ["por encima de", "sobre", "arriba de", "en"],
        correct: "por encima de",
        explanation: "'Por encima de' to przez coś (z góry na dół). Używamy dla ruchu przeskakującego przez przeszkodę. 'Sobre' byłoby mniej dynamiczne - 'por encima de' podkreśla ruch."
      },
      {
        id: "prep_15",
        question: "El tren pasó _____ el túnel largo de la montaña durante varios minutos.",
        translation: "(Pociąg przejechał przez długi tunel w górze przez kilka minut)",
        options: ["por", "a través de", "en", "dentro de"],
        correct: "por",
        explanation: "'Por el túnel' to przez tunel (standardowa trasa). 'A través de' sugeruje przejście przez coś gęstego lub trudnego. Dla tuneli, mostów, ulic używamy prostego 'por'."
      }
    ]
  },

  expressions_with_hacer: {
    name: "Wyrażenia z 'hacer'",
    description: "Idiomatyczne użycia czasownika hacer",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "hacer_1",
        question: "Tengo que _____ la cama antes de salir de casa cada mañana.",
        translation: "(Muszę pościelić łóżko przed wyjściem z domu każdego ranka)",
        options: ["hacer", "poner", "arreglar", "preparar"],
        correct: "hacer",
        explanation: "'Hacer la cama' to idiomatyczne wyrażenie dla pościelenia łóżka. Nie używamy 'poner' ani 'arreglar' w tym kontekście. To jeden z wielu zwrotów z 'hacer' dla czynności domowych."
      },
      {
        id: "hacer_2",
        question: "¿Quieres _____ ejercicio conmigo en el gimnasio esta tarde después del trabajo?",
        translation: "(Czy chcesz poćwiczyć ze mną na siłowni dziś po południu po pracy?)",
        options: ["hacer", "practicar", "realizar", "efectuar"],
        correct: "hacer",
        explanation: "'Hacer ejercicio' to standard dla ćwiczenia fizycznego. 'Practicar' używamy z konkretnymi sportami ('practicar tenis'). 'Hacer' jest uniwersalne dla ogólnej aktywności fizycznej."
      },
      {
        id: "hacer_3",
        question: "Mi madre siempre nos _____ preguntas sobre nuestro día cuando volvemos del colegio.",
        translation: "(Moja mama zawsze zadaje nam pytania o nasz dzień, kiedy wracamy ze szkoły)",
        options: ["hace", "da", "pone", "dice"],
        correct: "hace",
        explanation: "'Hacer preguntas' to zadawać pytania. To standardowe połączenie czasownika z rzeczownikiem. 'Preguntar' jest czasownikiem 'pytać', ale 'hacer preguntas' to konstrukcja rzeczownikowa."
      },
      {
        id: "hacer_4",
        question: "No me _____ caso cuando le doy consejos sobre su salud y alimentación.",
        translation: "(Nie słucha mnie, kiedy daję jej rady o jej zdrowiu i odżywianiu)",
        options: ["hace", "da", "pone", "presta"],
        correct: "hace",
        explanation: "'Hacer caso' to słuchać, zwracać uwagę na kogoś. To idiomatyczne - nie można użyć innego czasownika. 'No hacer caso' to ignorować czyjeś rady lub słowa."
      },
      {
        id: "hacer_5",
        question: "¿Me puedes _____ un favor y recoger a mi hijo del colegio hoy?",
        translation: "(Czy możesz mi wyświadczyć przysługę i odebrać mojego syna ze szkoły dziś?)",
        options: ["hacer", "dar", "prestar", "ofrecer"],
        correct: "hacer",
        explanation: "'Hacer un favor' to standardowe wyrażenie dla wyświadczenia przysługi. Zawsze 'hacer', nigdy inny czasownik. To jedna z najczęściej używanych fraz w codziennej komunikacji."
      },
      {
        id: "hacer_6",
        question: "Los estudiantes tienen que _____ cola para entrar al examen en orden.",
        translation: "(Studenci muszą ustawić się w kolejce, żeby wejść na egzamin po kolei)",
        options: ["hacer", "poner", "formar", "estar en"],
        correct: "hacer",
        explanation: "'Hacer cola' to ustawić się w kolejce. To kolokwialne wyrażenie używane w całym świecie hiszpańskojęzycznym. 'Formar fila' też istnieje, ale 'hacer cola' jest bardziej powszechne."
      },
      {
        id: "hacer_7",
        question: "Ella siempre _____ las maletas con mucha anticipación antes de viajar a cualquier lugar.",
        translation: "(Ona zawsze pakuje walizki z dużym wyprzedzeniem przed podróżowaniem gdziekolwiek)",
        options: ["hace", "prepara", "arregla", "pone"],
        correct: "hace",
        explanation: "'Hacer las maletas' to pakować walizki. To ustalona fraza podróżnicza. Można też 'preparar el equipaje', ale 'hacer las maletas' jest najbardziej naturalnym kolokwializmem."
      },
      {
        id: "hacer_8",
        question: "No _____ falta que traigas nada, nosotros tenemos todo lo necesario aquí.",
        translation: "(Nie ma potrzeby, żebyś przynosił cokolwiek, mamy wszystko, co potrzebne tutaj)",
        options: ["hace", "hay", "es", "tiene"],
        correct: "hace",
        explanation: "'Hacer falta' to być potrzebnym (bezosobowo). Konstrukcja podobna do 'hacer calor' - zawsze trzecia osoba. 'No hace falta' to częste wyrażenie oznaczające 'nie trzeba'."
      },
      {
        id: "hacer_9",
        question: "Voy a _____ una llamada rápida antes de que empiece la reunión importante.",
        translation: "(Zrobię szybki telefon zanim zacznie się ważne spotkanie)",
        options: ["hacer", "dar", "poner", "efectuar"],
        correct: "hacer",
        explanation: "'Hacer una llamada' to zadzwonić (dosłownie: zrobić telefon). W Ameryce Łacińskiej czasem mówią 'dar una llamada', ale 'hacer' jest uniwersalne. Oba są poprawne regionalnie."
      },
      {
        id: "hacer_10",
        question: "¿Puedes _____ silencio por favor? Estoy tratando de concentrarme en este trabajo.",
        translation: "(Czy możesz zachować ciszę proszę? Próbuję się skoncentrować na tej pracy)",
        options: ["hacer", "guardar", "mantener", "tener"],
        correct: "hacer",
        explanation: "'Hacer silencio' to zrobić ciszę, uciszyć się. To prośba o zaprzestanie hałasu. 'Guardar silencio' też poprawne i bardziej formalne, ale 'hacer' jest bardziej bezpośrednie."
      },
      {
        id: "hacer_11",
        question: "Mis padres me _____ mucha ilusión con la noticia de su visita el próximo mes.",
        translation: "(Moi rodzice bardzo mnie ucieszyli wiadomością o ich wizycie w przyszłym miesiącu)",
        options: ["hicieron", "dieron", "pusieron", "causaron"],
        correct: "hicieron",
        explanation: "'Hacer ilusión' to cieszyć (wywołać radość oczekiwania). Używamy jak 'gustar' - rzecz robi ilusión komuś. To wyrażenie emocjonalne specyficzne dla hiszpańskiego."
      },
      {
        id: "hacer_12",
        question: "No le _____ gracia mi comentario, creo que se ofendió un poco.",
        translation: "(Nie spodobał mu się mój komentarz, myślę że trochę się obraził)",
        options: ["hizo", "dio", "causó", "puso"],
        correct: "hizo",
        explanation: "'Hacer gracia' to bawić, śmieszyć kogoś. Gdy używamy z negacją, oznacza że coś nie było zabawne. Działa jak 'gustar' - rzecz robi (lub nie robi) gracia osobie."
      },
      {
        id: "hacer_13",
        question: "Tengo que _____ tiempo para visitar a mis abuelos este fin de semana.",
        translation: "(Muszę znaleźć czas, żeby odwiedzić moich dziadków w ten weekend)",
        options: ["hacer", "encontrar", "tener", "sacar"],
        correct: "hacer",
        explanation: "'Hacer tiempo' to znaleźć/stworzyć czas w napiętym harmonogramie. Sugeruje aktywne zarządzanie czasem. 'Encontrar tiempo' też poprawne, ale 'hacer' podkreśla wysiłek w reorganizacji priorytetów."
      },
      {
        id: "hacer_14",
        question: "El profesor nos _____ repetir el ejercicio tres veces hasta que lo dominamos perfectamente.",
        translation: "(Nauczyciel kazał nam powtórzyć ćwiczenie trzy razy, aż opanowaliśmy je perfekcyjnie)",
        options: ["hizo", "mandó", "ordenó", "pidió"],
        correct: "hizo",
        explanation: "'Hacer + infinitivo' to kazać komuś coś zrobić (konstrukcja kauzatywna). To nie jest rozkaz, ale spowodowanie że ktoś coś robi. 'Mandar' byłoby bardziej autorytatywne."
      },
      {
        id: "hacer_15",
        question: "¿Te _____ falta algo más o ya tienes todo lo que necesitas para el viaje?",
        translation: "(Czy potrzebujesz czegoś jeszcze czy już masz wszystko, czego potrzebujesz na podróż?)",
        options: ["hace", "hay", "es", "tiene"],
        correct: "hace",
        explanation: "'¿Te hace falta?' to czy ci czegoś brakuje? Działa jak 'gustar' - rzecz robi falta tobie. To bezosobowa konstrukcja pytająca o potrzeby lub braki."
      }
    ]
  },

  passive_voice_basics: {
    name: "Strona bierna - podstawy",
    description: "Twórz zdania w stronie biernej",
    icon: Shield,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "pass_1",
        question: "Esta catedral antigua _____ construida en el siglo XII por arquitectos góticos.",
        translation: "(Ta stara katedra została zbudowana w XII wieku przez gotyckich architektów)",
        options: ["fue", "era", "estuvo", "ha sido"],
        correct: "fue",
        explanation: "'Ser + participio' tworzy stronę bierną. 'Fue construida' to została zbudowana (konkretne wydarzenie w przeszłości). Participio zgadza się z podmiotem w rodzaju i liczbie."
      },
      {
        id: "pass_2",
        question: "El español _____ hablado por más de 500 millones de personas en todo el mundo.",
        translation: "(Hiszpański jest używany przez ponad 500 milionów ludzi na całym świecie)",
        options: ["es", "está", "fue", "era"],
        correct: "es",
        explanation: "'Es hablado' to jest mówiony (fakt obecny, ciągły). Używamy 'ser' dla strony biernej, nie 'estar'. Teraźniejszy czas dla uniwersalnej prawdy o języku."
      },
      {
        id: "pass_3",
        question: "Los ejercicios _____ corregidos por el profesor y devueltos la semana pasada.",
        translation: "(Ćwiczenia zostały poprawione przez nauczyciela i zwrócone w zeszłym tygodniu)",
        options: ["fueron", "eran", "estuvieron", "han sido"],
        correct: "fueron",
        explanation: "'Fueron corregidos' to zostały poprawione (zakończona akcja). Pretérito w stronie biernej dla jednorazowych wydarzeń przeszłych. Dwie akcje bierne można łączyć spójnikiem 'y'."
      },
      {
        id: "pass_4",
        question: "La carta _____ escrita a mano con pluma especial de tinta azul brillante.",
        translation: "(List został napisany ręcznie specjalnym długopisem z błyszczącym niebieskim atramentem)",
        options: ["fue", "era", "estuvo", "había sido"],
        correct: "fue",
        explanation: "'Fue escrita' (żeński participio dla 'la carta'). Participio musi zgadzać się z podmiotem. Kobieta carta wymaga 'escrita', nie 'escrito'."
      },
      {
        id: "pass_5",
        question: "Las puertas del museo _____ abiertas al público cada día a las nueve de la mañana.",
        translation: "(Drzwi muzeum są otwierane dla publiczności każdego dnia o dziewiątej rano)",
        options: ["son", "están", "fueron", "eran"],
        correct: "son",
        explanation: "'Son abiertas' dla rutynowej akcji powtarzanej. Teraźniejszy dla codziennych operacji. 'Las puertas' (żeńskie, mnoga) wymaga 'abiertas' z końcówką żeńską mnogą."
      },
      {
        id: "pass_6",
        question: "El coche _____ reparado en el taller mecánico y ya está listo para recoger.",
        translation: "(Samochód został naprawiony w warsztacie mechanicznym i jest już gotowy do odbioru)",
        options: ["fue", "era", "ha sido", "estuvo"],
        correct: "ha sido",
        explanation: "'Ha sido reparado' to został naprawiony (z efektem na teraz). Present perfect w stronie biernej łączy przeszłość z teraźniejszością - akcja zakończona, ale rezultat aktualny."
      },
      {
        id: "pass_7",
        question: "La película _____ dirigida por un cineasta español muy talentoso y reconocido mundialmente.",
        translation: "(Film został wyreżyserowany przez bardzo utalentowanego i światowo uznanego hiszpańskiego reżysera)",
        options: ["fue", "era", "estuvo", "había sido"],
        correct: "fue",
        explanation: "'Fue dirigida' (żeński dla 'la película'). Strona bierna pokazuje kto wykonał akcję z 'por + osoba'. To sposób na przesunięcie uwagi z aktora na obiekt."
      },
      {
        id: "pass_8",
        question: "Estos libros raros _____ publicados hace más de cien años por editoriales antiguas.",
        translation: "(Te rzadkie książki zostały opublikowane ponad sto lat temu przez stare wydawnictwa)",
        options: ["fueron", "eran", "estuvieron", "habían sido"],
        correct: "fueron",
        explanation: "'Fueron publicados' (męski mnogi dla 'los libros'). Participio musi zgadzać się w rodzaju i liczbie. Męskie mnoga kończy się na '-os'."
      },
      {
        id: "pass_9",
        question: "El informe detallado _____ presentado ante el comité ejecutivo ayer por la tarde.",
        translation: "(Szczegółowy raport został przedstawiony przed komitetem wykonawczym wczoraj po południu)",
        options: ["fue", "era", "estuvo", "ha sido"],
        correct: "fue",
        explanation: "'Fue presentado' dla konkretnego momentu prezentacji. 'Ayer' wymaga pretérito. Strona bierna przeskalcza uwagę z prezentera na sam raport i jego treść."
      },
      {
        id: "hacer_10",
        question: "La decisión final _____ tomada por el director después de consultar con todo el equipo.",
        translation: "(Końcowa decyzja została podjęta przez dyrektora po konsultacji z całym zespołem)",
        options: ["fue", "era", "estuvo", "había sido"],
        correct: "fue",
        explanation: "'Fue tomada' (żeński dla 'la decisión'). Strona bierna podkreśla decyzję, nie osobę decydującą. Zgoda rodzaju jest kluczowa - 'tomada' nie 'tomado'."
      },
      {
        id: "pass_11",
        question: "Los premios _____ entregados en una ceremonia elegante ante cientos de invitados.",
        translation: "(Nagrody zostały wręczone na eleganckiej ceremonii przed setkami gości)",
        options: ["fueron", "eran", "estuvieron", "han sido"],
        correct: "fueron",
        explanation: "'Fueron entregados' (męski mnogi dla 'los premios'). Ceremonia to zakończone wydarzenie, więc pretérito. Strona bierna stawia nagrody jako temat główny."
      },
      {
        id: "pass_12",
        question: "Las ventanas _____ limpiadas por una empresa especializada cada dos semanas regularmente.",
        translation: "(Okna są czyszczone przez wyspecjalizowaną firmę regularnie co dwa tygodnie)",
        options: ["son", "están", "fueron", "eran"],
        correct: "son",
        explanation: "'Son limpiadas' dla rutynowej akcji. Teraźniejszy dla regularnych operacji. Żeński mnogi 'limpiadas' zgadza się z 'las ventanas'. Strona bierna dla usług profesjonalnych jest typowa."
      },
      {
        id: "pass_13",
        question: "El edificio histórico _____ declarado monumento nacional por el gobierno hace cinco años.",
        translation: "(Historyczny budynek został ogłoszony narodowym pomnikiem przez rząd pięć lat temu)",
        options: ["fue", "era", "estuvo", "ha sido"],
        correct: "fue",
        explanation: "'Fue declarado' (męski dla 'el edificio'). 'Hace cinco años' to konkretny moment, więc pretérito. Deklaracje oficjalne często używają strony biernej dla formalności."
      },
      {
        id: "pass_14",
        question: "Las instrucciones _____ explicadas claramente por el técnico antes de usar la máquina.",
        translation: "(Instrukcje zostały wyraźnie wyjaśnione przez technika przed użyciem maszyny)",
        options: ["fueron", "eran", "estuvieron", "habían sido"],
        correct: "fueron",
        explanation: "'Fueron explicadas' (żeński mnogi dla 'las instrucciones'). Wyjaśnienie przed użyciem to zakończona akcja. Zgoda rodzaju i liczby jest obowiązkowa w stronie biernej."
      },
      {
        id: "pass_15",
        question: "El problema técnico _____ resuelto por el equipo de informática en solo dos horas.",
        translation: "(Problem techniczny został rozwiązany przez zespół IT w zaledwie dwie godziny)",
        options: ["fue", "era", "estuvo", "ha sido"],
        correct: "fue",
        explanation: "'Fue resuelto' (męski dla 'el problema'). Szybkie rozwiązanie to jedno wydarzenie w przeszłości. Strona bierna pozwala podkreślić szybkość rozwiązania problemu."
      }
    ]
  },

  reciprocal_actions: {
    name: "Czynności wzajemne",
    description: "Wyrażaj działania wzajemne między osobami",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "rec_1",
        question: "Mi hermana y su novio _____ todos los días por teléfono durante horas.",
        translation: "(Moja siostra i jej chłopak rozmawiają ze sobą codziennie przez telefon godzinami)",
        options: ["se hablan", "hablan", "se dicen", "dicen"],
        correct: "se hablan",
        explanation: "'Hablarse' to rozmawiać ze sobą (wzajemnie). 'Se' pokazuje wzajemność - oni do siebie nawzajem. Bez 'se' byłoby tylko 'mówią' ogólnie, nie koniecznie do siebie."
      },
      {
        id: "rec_2",
        question: "Mis mejores amigos y yo _____ desde hace más de quince años de amistad.",
        translation: "(Moi najlepsi przyjaciele i ja znamy się od ponad piętnastu lat przyjaźni)",
        options: ["nos conocemos", "conocemos", "nos sabemos", "sabemos"],
        correct: "nos conocemos",
        explanation: "'Conocerse' to znać się wzajemnie. 'Nos' dla 'my' pokazuje że relacja jest obustronna. To standardowa forma dla opisywania wzajemnych znajomości."
      },
      {
        id: "rec_3",
        question: "Los vecinos del edificio no _____ bien, siempre hay conflictos y discusiones.",
        translation: "(Sąsiedzi z budynku nie dogadują się dobrze, zawsze są konflikty i kłótnie)",
        options: ["se llevan", "llevan", "se tratan", "tratan"],
        correct: "se llevan",
        explanation: "'Llevarse bien/mal' to dogadywać się (lub nie). To idiomatyczne wyrażenie wzajemności. 'Llevarse mal' to mieć złe relacje - 'se' jest kluczowe dla znaczenia wzajemnego."
      },
      {
        id: "rec_4",
        question: "Mis padres _____ en una fiesta universitaria hace treinta años exactamente.",
        translation: "(Moi rodzice poznali się na imprezie uniwersyteckiej dokładnie trzydzieści lat temu)",
        options: ["se conocieron", "conocieron", "se encontraron", "encontraron"],
        correct: "se conocieron",
        explanation: "'Conocerse' w pretérito to poznać się (pierwsze spotkanie). 'Se' wskazuje wzajemność pierwszego kontaktu. 'Encontrarse' to spotkać się fizycznie, 'conocerse' to nawiązać znajomość."
      },
      {
        id: "rec_5",
        question: "Los dos equipos rivales _____ en la final del campeonato el próximo domingo.",
        translation: "(Dwie rywalizujące drużyny zmierzą się w finale mistrzostw w przyszłą niedzielę)",
        options: ["se enfrentarán", "enfrentarán", "se competirán", "competirán"],
        correct: "se enfrentarán",
        explanation: "'Enfrentarse' to zmierzyć się (face each other). Zawsze zwrotne dla podkreślenia wzajemnej konfrontacji. 'Competir' nie wymaga 'se', ale 'enfrentarse' tak."
      },
      {
        id: "rec_6",
        question: "¿Ustedes _____ frecuentemente fuera del trabajo o solo en la oficina?",
        translation: "(Czy widzicie się często poza pracą czy tylko w biurze?)",
        options: ["se ven", "ven", "se miran", "miran"],
        correct: "se ven",
        explanation: "'Verse' to widzieć się wzajemnie (spotykać się). 'Se' jest niezbędne dla wzajemności. 'Ver' bez 'se' byłoby widzieć kogoś/coś jednostronnie."
      },
      {
        id: "rec_7",
        question: "Los hermanos _____ constantemente por tonterías sin importancia desde niños.",
        translation: "(Bracia kłócą się ciągle o głupstwa bez znaczenia od dzieciństwa)",
        options: ["se pelean", "pelean", "se discuten", "discuten"],
        correct: "se pelean",
        explanation: "'Pelearse' to kłócić się wzajemnie. Zwrotna forma podkreśla że obaj uczestniczą aktywnie. 'Pelear' bez 'se' to walczyć ogólnie, nie koniecznie ze sobą."
      },
      {
        id: "rec_8",
        question: "María y Juan _____ mensajes románticos todos los días desde que empezaron a salir.",
        translation: "(Maria i Juan wysyłają sobie romantyczne wiadomości codziennie odkąd zaczęli się spotykać)",
        options: ["se envían", "envían", "se mandan", "mandan"],
        correct: "se envían",
        explanation: "'Enviarse' to wysyłać sobie (wzajemnie). Ona jemu i on jej - dwukierunkowa komunikacja. 'Se' pokazuje że oba kierunki są aktywne."
      },
      {
        id: "rec_9",
        question: "Los estudiantes internacionales _____ en inglés porque no comparten lengua materna común.",
        translation: "(Międzynarodowi studenci komunikują się po angielsku, bo nie mają wspólnego języka ojczystego)",
        options: ["se comunican", "comunican", "se hablan", "hablan"],
        correct: "se comunican",
        explanation: "'Comunicarse' to komunikować się (interakcja). 'Se' wskazuje wzajemną wymianę informacji. To bardziej formalne niż 'hablarse' i obejmuje wszystkie formy komunikacji."
      },
      {
        id: "rec_10",
        question: "Las dos empresas competidoras _____ para fusionarse y crear una compañía más grande.",
        translation: "(Dwie konkurencyjne firmy spotykają się, żeby się połączyć i stworzyć większą firmę)",
        options: ["se reúnen", "reúnen", "se juntan", "juntan"],
        correct: "se reúnen",
        explanation: "'Reunirse' to spotykać się (formalnie, z celem). Dla spotkań biznesowych to standardowa forma. 'Se' podkreśla że obie strony przychodzą aktywnie do wspólnego punktu."
      },
      {
        id: "rec_11",
        question: "Los dos hermanos _____ mucho físicamente aunque tienen personalidades muy diferentes.",
        translation: "(Dwaj bracia bardzo się do siebie podobają fizycznie, chociaż mają bardzo różne osobowości)",
        options: ["se parecen", "parecen", "son parecidos", "están parecidos"],
        correct: "se parecen",
        explanation: "'Parecerse' to być podobnym do siebie wzajemnie. Używamy dla porównań między ludźmi. 'Ser parecido' to być podobnym do czegoś konkretnego, 'parecerse' to wzajemne podobieństwo."
      },
      {
        id: "rec_12",
        question: "Después de discutir, finalmente _____ y hicieron las paces amistosamente otra vez.",
        translation: "(Po kłótni w końcu się pogodzili i zawarli pokój przyjaźnie znowu)",
        options: ["se reconciliaron", "reconciliaron", "se perdonaron", "perdonaron"],
        correct: "se reconciliaron",
        explanation: "'Reconciliarse' to pogodzić się (wzajemnie). Obie strony muszą uczestniczyć - to dwukierunkowy proces. 'Se' jest niezbędne bo pogodzenie wymaga współpracy obu stron."
      },
      {
        id: "rec_13",
        question: "Los novios _____ apasionadamente bajo la lluvia como en las películas románticas.",
        translation: "(Narzeczeni całują się namiętnie pod deszczem jak w romantycznych filmach)",
        options: ["se besan", "besan", "se dan besos", "dan besos"],
        correct: "se besan",
        explanation: "'Besarse' to całować się wzajemnie. Każdy całuje drugiego - akcja obustronna. 'Besar' bez 'se' byłoby całować kogoś jednostronnie, co zmieniłoby sens."
      },
      {
        id: "rec_14",
        question: "¿Vosotros _____ a menudo por email o preferís llamadas telefónicas directas?",
        translation: "(Czy piszecie do siebie często mailem czy wolicie bezpośrednie rozmowy telefoniczne?)",
        options: ["os escribís", "escribís", "os mandáis", "mandáis"],
        correct: "os escribís",
        explanation: "'Escribirse' to pisać do siebie. 'Os' to forma 'vosotros' dla wzajemności (Hiszpania). To dwukierunkowa korespondencja - oboje piszecie do siebie."
      },
      {
        id: "rec_15",
        question: "Los compañeros de trabajo _____ mutuamente en los proyectos difíciles del departamento.",
        translation: "(Współpracownicy pomagają sobie nawzajem w trudnych projektach działu)",
        options: ["se ayudan", "ayudan", "se apoyan", "apoyan"],
        correct: "se ayudan",
        explanation: "'Ayudarse' to pomagać sobie wzajemnie. 'Mutuamente' wzmacnia wzajemność ale 'se' jest gramatycznie konieczne. To pokazuje współpracę gdzie każdy daje i otrzymuje pomoc."
      }
    ]
  },

  double_object_pronouns: {
    name: "Podwójne zaimki dopełnienia",
    description: "Łącz dwa zaimki w jednym zdaniu",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "dop_1",
        question: "¿La tarta de cumpleaños? Ya _____ preparé esta mañana temprano para la fiesta.",
        translation: "(Tort urodzinowy? Już ci go przygotowałem dziś wcześnie rano na imprezę)",
        options: ["te la", "te lo", "se la", "se lo"],
        correct: "te la",
        explanation: "'Te' (tobie) + 'la' (tort - la tarta). Kolejność zawsze: osoba + rzecz. 'Te' dla odbiorcy, 'la' dla żeńskiego obiektu. Dwa zaimki łączą się ale zachowują swoje formy."
      },
      {
        id: "dop_2",
        question: "Los documentos importantes que pediste, _____ enviaré por correo certificado mañana sin falta.",
        translation: "(Ważne dokumenty, których prosiłeś, wyślę ci je certyfikowaną pocztą jutro bez wyjątku)",
        options: ["te los", "te las", "se los", "se las"],
        correct: "te los",
        explanation: "'Te' (tobie) + 'los' (dokumenty - męskie mnoga). Męskie rzeczy wymagają 'los'. Kolejność osoba-rzecz nie zmienia się - to stała reguła hiszpańskiego."
      },
      {
        id: "dop_3",
        question: "¿El libro que te presté? No, todavía no _____ has devuelto desde el mes pasado.",
        translation: "(Książka, którą ci pożyczyłem? Nie, wciąż mi jej nie zwróciłeś od zeszłego miesiąca)",
        options: ["me lo", "me la", "te lo", "te la"],
        correct: "me lo",
        explanation: "'Me' (mnie) + 'lo' (książkę - el libro). Mimo że w wielu językach książka jest żeńska, w hiszpańskim 'el libro' jest męski. Rodzaj hiszpańskiego słowa decyduje o zaimku."
      },
      {
        id: "dop_4",
        question: "A mi madre le gustaron las flores, así que _____ compré un ramo grande de rosas.",
        translation: "(Mojej mamie podobały się kwiaty, więc kupiłem jej je - duży bukiet róż)",
        options: ["se las", "le las", "se los", "le los"],
        correct: "se las",
        explanation: "'Le' zmienia się na 'se' przed 'lo/la/los/las'! To kluczowa reguła. Nie można 'le las' - zawsze 'se las'. 'Las' bo flores są żeńskie mnoga."
      },
      {
        id: "dop_5",
        question: "¿Las llaves del coche? Creo que _____ di a tu hermano hace un rato.",
        translation: "(Klucze do samochodu? Myślę, że dałem mu je przed chwilą twojemu bratu)",
        options: ["se las", "le las", "se los", "le los"],
        correct: "se las",
        explanation: "'Le' (jemu) staje się 'se' + 'las' (klucze - las llaves, żeńskie). Transformacja le→se zapobiega dwóm 'l' dźwiękom z rzędu. To fonetyczna regułaeuphonic."
      },
      {
        id: "dop_6",
        question: "Si necesitas mi bicicleta para el fin de semana, _____ presto con mucho gusto.",
        translation: "(Jeśli potrzebujesz mojego roweru na weekend, pożyczę ci go z wielką przyjemnością)",
        options: ["te la", "te lo", "se la", "se lo"],
        correct: "te la",
        explanation: "'Te' (tobie) + 'la' (rower - la bicicleta, żeńska). Rodzaj zaimka zgadza się z rzeczownikiem hiszpańskim, nie z tłumaczeniem na polski."
      },
      {
        id: "dop_7",
        question: "¿Los apuntes de clase? El profesor _____ entregará después del examen final próximo.",
        translation: "(Notatki z zajęć? Nauczyciel wam je odda po przyszłym końcowym egzaminie)",
        options: ["os los", "os las", "se los", "se las"],
        correct: "os los",
        explanation: "'Os' (wam - vosotros) + 'los' (notatki - los apuntes, męskie). W Hiszpanii 'os' dla 'wy', w Ameryce byłoby 'se los'. Forma hiszpańska zachowuje 'os'."
      },
      {
        id: "dop_8",
        question: "Esa información confidencial, no _____ des a nadie bajo ninguna circunstancia posible.",
        translation: "(Ta poufna informacja, nie dawaj jej nikomu pod żadnym możliwym warunkiem)",
        options: ["se la", "la se", "le la", "se lo"],
        correct: "se la",
        explanation: "'Se' (komukolwiek) + 'la' (informację - la información, żeńska). W negacji i rozkazie kolejność nie zmienia się. Zawsze osoba przed rzeczą."
      },
      {
        id: "dop_9",
        question: "Las fotos de las vacaciones, _____ mostraré cuando vengas a visitarme el fin de semana.",
        translation: "(Zdjęcia z wakacji, pokażę ci je, kiedy przyjdziesz mnie odwiedzić w weekend)",
        options: ["te las", "te los", "se las", "se los"],
        correct: "te las",
        explanation: "'Te' (tobie) + 'las' (zdjęcia - las fotos, żeńskie mnoga). Zdjęcia to mnoga, więc 'las'. Podwójne zaimki często poprzedzają czasownik w zdaniach złożonych."
      },
      {
        id: "dop_10",
        question: "El dinero que me debías, _____ puedes devolver cuando tengas disponibilidad económica.",
        translation: "(Pieniądze, które mi byłeś winien, możesz mi je zwrócić, kiedy będziesz miał finansową dostępność)",
        options: ["me lo", "me los", "te lo", "te los"],
        correct: "me lo",
        explanation: "'Me' (mnie) + 'lo' (pieniądze - el dinero, męski singular). 'Dinero' jest niepoliczalne i singular w hiszpańskim, więc używamy 'lo', nie 'los'."
      },
      {
        id: "dop_11",
        question: "A mis abuelos les encanta ese programa, _____ grabo todas las semanas fielmente.",
        translation: "(Moi dziadkowie uwielbiają ten program, nagrywam im go co tydzień wiernie)",
        options: ["se lo", "le lo", "se los", "les lo"],
        correct: "se lo",
        explanation: "'Les' (im) zmienia się na 'se' + 'lo' (program - el programa, męski). Zawsze le/les→se przed lo/la/los/las. Nie można używać dwóch zaimków zaczynających się na 'l'."
      },
      {
        id: "dop_12",
        question: "Esa receta tradicional familiar, mi abuela _____ enseñó cuando era niña pequeña.",
        translation: "(Ten tradycyjny rodzinny przepis, moja babcia nauczyła mnie go, kiedy byłam małą dziewczynką)",
        options: ["me la", "me lo", "se la", "se lo"],
        correct: "me la",
        explanation: "'Me' (mnie) + 'la' (przepis - la receta, żeński). Przepis jest żeński w hiszpańskim. Zaimki mogą iść przed lub po czasowniku, ale znaczenie nie zmienia się."
      },
      {
        id: "dop_13",
        question: "Si quieres mis consejos sobre el tema, _____ daré con mucho gusto y sinceridad.",
        translation: "(Jeśli chcesz moich rad w tej sprawie, dam ci je z wielką przyjemnością i szczerością)",
        options: ["te los", "te las", "se los", "se las"],
        correct: "te los",
        explanation: "'Te' (tobie) + 'los' (rady - los consejos, męskie mnoga). 'Consejo' jest męski, więc mnoga to 'los'. Rada vs rady - liczba zmienia zaimek."
      },
      {
        id: "dop_14",
        question: "Las entradas para el concierto, _____ compré hace un mes para asegurar buenos asientos.",
        translation: "(Bilety na koncert, kupiłem wam je miesiąc temu, żeby zapewnić dobre miejsca)",
        options: ["os las", "os los", "se las", "se los"],
        correct: "os las",
        explanation: "'Os' (wam - vosotros) + 'las' (bilety - las entradas, żeńskie). Hiszpańska forma 'vosotros' zachowuje 'os'. 'Entradas' są żeńskie, więc 'las'."
      },
      {
        id: "dop_15",
        question: "Este secreto importante, no _____ cuentes a nadie porque es muy confidencial y delicado.",
        translation: "(Ten ważny sekret, nie opowiadaj go nikomu, bo jest bardzo poufny i delikatny)",
        options: ["se lo", "lo se", "le lo", "se la"],
        correct: "se lo",
        explanation: "'Se' (komukolwiek) + 'lo' (sekret - el secreto, męski). W rozkazach przeczących podwójne zaimki idą przed czasownikiem. 'No se lo cuentes' to ustalone wzór."
      }
    ]
  }
};

export default part16Categories;

/**
 * POLISH → SPANISH FLASHCARDS - PART 6
 * 
 * Native Language: Polish (Polski)
 * Target Language: Spanish (Español)
 * 
 * This file contains additional flashcard categories (77-86).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  TreePine,
  Wifi,
  Users,
  Palette,
  HandMetal,
  CloudRain,
  Navigation,
  Hash,
  Battery,
  Briefcase
} from "lucide-react";

export const flashcardsCategories_part6 = {
  nature_environment: {
    name: "Natura i środowisko",
    description: "Przyroda i ekologia",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "nat1", polish: "Drzewo", spanish: "Árbol", difficulty: "easy", example: "To stare drzewo dębowe rośnie w naszym ogrodzie od stu lat", exampleTranslation: "Este árbol de roble viejo crece en nuestro jardín desde hace cien años" },
      { id: "nat2", polish: "Rzeka", spanish: "Río", difficulty: "easy", example: "Rzeka Wisła jest najdłuższą rzeką w Polsce", exampleTranslation: "El río Vístula es el río más largo de Polonia" },
      { id: "nat3", polish: "Jezioro", spanish: "Lago", difficulty: "easy", example: "Spędzamy letnie wakacje nad pięknym jeziorem górskim", exampleTranslation: "Pasamos las vacaciones de verano junto a un hermoso lago de montaña" },
      { id: "nat4", polish: "Las", spanish: "Bosque", difficulty: "easy", example: "Las jest pełen dzikich zwierząt i ptaków śpiewających", exampleTranslation: "El bosque está lleno de animales salvajes y pájaros cantando" },
      { id: "nat5", polish: "Pole", spanish: "Campo", difficulty: "easy", example: "Rolnicy uprawiają zboże na rozległych polach", exampleTranslation: "Los agricultores cultivan cereales en los campos extensos" },
      { id: "nat6", polish: "Niebo", spanish: "Cielo", difficulty: "easy", example: "Niebo jest dzisiaj bezchmurne i pięknie błękitne", exampleTranslation: "El cielo está despejado hoy y hermosamente azul" },
      { id: "nat7", polish: "Ziemia", spanish: "Tierra", difficulty: "medium", example: "Ziemia jest żyzna i idealna do uprawy warzyw", exampleTranslation: "La tierra es fértil e ideal para el cultivo de verduras" },
      { id: "nat8", polish: "Kamień", spanish: "Piedra", difficulty: "medium", example: "Most został zbudowany z wielkich kamieni przed wiekami", exampleTranslation: "El puente fue construido con grandes piedras hace siglos" },
      { id: "nat9", polish: "Piasek", spanish: "Arena", difficulty: "medium", example: "Plaża jest pokryta miękkim złotym piaskiem", exampleTranslation: "La playa está cubierta de arena dorada suave" },
      { id: "nat10", polish: "Skała", spanish: "Roca", difficulty: "medium", example: "Wspinacze pokonują stromą skałę górską", exampleTranslation: "Los escaladores superan la roca de montaña empinada" },
      { id: "nat11", polish: "Przyroda", spanish: "Naturaleza", difficulty: "medium", example: "Przyroda w tym parku narodowym jest nienaruszona i dzika", exampleTranslation: "La naturaleza en este parque nacional está intacta y salvaje" },
      { id: "nat12", polish: "Środowisko", spanish: "Medio ambiente", difficulty: "medium", example: "Musimy chronić środowisko dla przyszłych pokoleń", exampleTranslation: "Debemos proteger el medio ambiente para las generaciones futuras" },
      { id: "nat13", polish: "Jest pięknie tutaj", spanish: "Es hermoso aquí", difficulty: "hard", example: "Jest tak pięknie tutaj w górach z tym niesamowitym widokiem", exampleTranslation: "Es tan hermoso aquí en las montañas con esta vista increíble" },
      { id: "nat14", polish: "Dbajmy o przyrodę", spanish: "Cuidemos la naturaleza", difficulty: "hard", example: "Dbajmy o przyrodę nie śmiecąc i oszczędzając wodę", exampleTranslation: "Cuidemos la naturaleza no ensuciando y ahorrando agua" },
      { id: "nat15", polish: "To jest nieskażone", spanish: "Está virgen", difficulty: "hard", example: "To miejsce jest całkowicie nieskażone przez człowieka", exampleTranslation: "Este lugar está completamente virgen por el ser humano" }
    ]
  },

  internet_technology: {
    name: "Internet i technologia",
    description: "Świat cyfrowy",
    icon: Wifi,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "tech1", polish: "Komputer", spanish: "Computadora", difficulty: "easy", example: "Mój nowy komputer jest bardzo szybki i wydajny", exampleTranslation: "Mi computadora nueva es muy rápida y eficiente" },
      { id: "tech2", polish: "Internet", spanish: "Internet", difficulty: "easy", example: "Internet jest niezbędny w moim codziennym życiu i pracy", exampleTranslation: "Internet es indispensable en mi vida diaria y trabajo" },
      { id: "tech3", polish: "Email", spanish: "Correo electrónico", difficulty: "easy", example: "Sprawdzam email kilka razy dziennie w pracy", exampleTranslation: "Reviso el correo electrónico varias veces al día en el trabajo" },
      { id: "tech4", polish: "Hasło", spanish: "Contraseña", difficulty: "easy", example: "Muszę zmienić hasło bo zapomniałem starego", exampleTranslation: "Tengo que cambiar la contraseña porque olvidé la antigua" },
      { id: "tech5", polish: "Strona internetowa", spanish: "Sitio web", difficulty: "easy", example: "Ta strona internetowa jest bardzo przejrzysta i łatwa w użyciu", exampleTranslation: "Este sitio web es muy claro y fácil de usar" },
      { id: "tech6", polish: "Pobierać", spanish: "Descargar", difficulty: "easy", example: "Pobieram aplikację mobilną na mój telefon", exampleTranslation: "Descargo la aplicación móvil en mi teléfono" },
      { id: "tech7", polish: "Przesyłać", spanish: "Subir", difficulty: "medium", example: "Przesyłam zdjęcia z wakacji na serwer w chmurze", exampleTranslation: "Subo las fotos de vacaciones al servidor en la nube" },
      { id: "tech8", polish: "Kliknąć", spanish: "Hacer clic", difficulty: "medium", example: "Kliknij dwukrotnie aby otworzyć plik na komputerze", exampleTranslation: "Haz clic dos veces para abrir el archivo en la computadora" },
      { id: "tech9", polish: "Wyszukiwarka", spanish: "Buscador", difficulty: "medium", example: "Używam wyszukiwarki Google do znalezienia informacji", exampleTranslation: "Uso el buscador Google para encontrar información" },
      { id: "tech10", polish: "Przeglądarka", spanish: "Navegador", difficulty: "medium", example: "Moja ulubiona przeglądarka internetowa jest bardzo szybka", exampleTranslation: "Mi navegador de internet favorito es muy rápido" },
      { id: "tech11", polish: "Sieć", spanish: "Red", difficulty: "medium", example: "Połączenie z siecią Wi-Fi jest bardzo stabilne", exampleTranslation: "La conexión a la red Wi-Fi es muy estable" },
      { id: "tech12", polish: "Wirus", spanish: "Virus", difficulty: "medium", example: "Zainstalowałem program antywirusowy na komputerze", exampleTranslation: "Instalé un programa antivirus en la computadora" },
      { id: "tech13", polish: "Internet nie działa", spanish: "Internet no funciona", difficulty: "hard", example: "Internet nie działa od wczoraj i nie mogę pracować", exampleTranslation: "Internet no funciona desde ayer y no puedo trabajar" },
      { id: "tech14", polish: "Jak się logować?", spanish: "¿Cómo iniciar sesión?", difficulty: "hard", example: "Jak się logować do tej aplikacji z moim kontem?", exampleTranslation: "¿Cómo iniciar sesión en esta aplicación con mi cuenta?" },
      { id: "tech15", polish: "Nie pamiętam hasła", spanish: "No recuerdo la contraseña", difficulty: "hard", example: "Nie pamiętam hasła do mojego konta i muszę je zresetować", exampleTranslation: "No recuerdo la contraseña de mi cuenta y tengo que restablecerla" }
    ]
  },

  professions_jobs: {
    name: "Zawody i profesje",
    description: "Różne zawody",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "prof1", polish: "Nauczyciel", spanish: "Maestro", difficulty: "easy", example: "Nauczyciel uczy dzieci matematyki i języków w szkole", exampleTranslation: "El maestro enseña a los niños matemáticas e idiomas en la escuela" },
      { id: "prof2", polish: "Lekarz", spanish: "Médico", difficulty: "easy", example: "Lekarz bada pacjentów i przepisuje odpowiednie leczenie", exampleTranslation: "El médico examina a los pacientes y prescribe el tratamiento adecuado" },
      { id: "prof3", polish: "Inżynier", spanish: "Ingeniero", difficulty: "easy", example: "Inżynier projektuje mosty i budynki dla miasta", exampleTranslation: "El ingeniero diseña puentes y edificios para la ciudad" },
      { id: "prof4", polish: "Kelner", spanish: "Camarero", difficulty: "easy", example: "Kelner obsługuje gości w eleganckiej restauracji", exampleTranslation: "El camarero atiende a los clientes en el restaurante elegante" },
      { id: "prof5", polish: "Sprzedawca", spanish: "Vendedor", difficulty: "easy", example: "Sprzedawca w sklepie pomaga klientom znaleźć produkty", exampleTranslation: "El vendedor en la tienda ayuda a los clientes a encontrar productos" },
      { id: "prof6", polish: "Kierowca", spanish: "Conductor", difficulty: "easy", example: "Kierowca autobusu przewozi pasażerów po całym mieście", exampleTranslation: "El conductor de autobús transporta pasajeros por toda la ciudad" },
      { id: "prof7", polish: "Prawnik", spanish: "Abogado", difficulty: "medium", example: "Prawnik reprezentuje klientów w sądzie w sprawach cywilnych", exampleTranslation: "El abogado representa a clientes en la corte en casos civiles" },
      { id: "prof8", polish: "Architekt", spanish: "Arquitecto", difficulty: "medium", example: "Architekt zaprojektował nowoczesny budynek biurowy", exampleTranslation: "El arquitecto diseñó un edificio de oficinas moderno" },
      { id: "prof9", polish: "Dziennikarz", spanish: "Periodista", difficulty: "medium", example: "Dziennikarz pisze artykuły o ważnych wydarzeniach społecznych", exampleTranslation: "El periodista escribe artículos sobre eventos sociales importantes" },
      { id: "prof10", polish: "Programista", spanish: "Programador", difficulty: "medium", example: "Programista tworzy aplikacje mobilne i strony internetowe", exampleTranslation: "El programador crea aplicaciones móviles y sitios web" },
      { id: "prof11", polish: "Tłumacz", spanish: "Traductor", difficulty: "medium", example: "Tłumacz przekłada dokumenty z polskiego na hiszpański", exampleTranslation: "El traductor traduce documentos del polaco al español" },
      { id: "prof12", polish: "Przedsiębiorca", spanish: "Empresario", difficulty: "medium", example: "Przedsiębiorca prowadzi własną firmę od dziesięciu lat", exampleTranslation: "El empresario dirige su propia empresa desde hace diez años" },
      { id: "prof13", polish: "Czym się zajmujesz?", spanish: "¿A qué te dedicas?", difficulty: "hard", example: "Czym się zajmujesz zawodowo? Opowiedz mi o swojej pracy", exampleTranslation: "¿A qué te dedicas profesionalmente? Cuéntame sobre tu trabajo" },
      { id: "prof14", polish: "Pracuję jako", spanish: "Trabajo como", difficulty: "hard", example: "Pracuję jako nauczyciel języków obcych w liceum", exampleTranslation: "Trabajo como profesor de idiomas extranjeros en el instituto" },
      { id: "prof15", polish: "Szukam pracy", spanish: "Busco trabajo", difficulty: "hard", example: "Szukam pracy w dziedzinie informatyki od kilku miesięcy", exampleTranslation: "Busco trabajo en el campo de la informática desde hace varios meses" }
    ]
  },

  body_parts: {
    name: "Części ciała",
    description: "Anatomia człowieka",
    icon: HandMetal,
    color: "from-rose-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "body1", polish: "Głowa", spanish: "Cabeza", difficulty: "easy", example: "Mam straszny ból głowy po całym dniu przed komputerem", exampleTranslation: "Tengo un terrible dolor de cabeza después de todo el día frente a la computadora" },
      { id: "body2", polish: "Ręka", spanish: "Mano", difficulty: "easy", example: "Myj ręce mydłem przed każdym posiłkiem", exampleTranslation: "Lávate las manos con jabón antes de cada comida" },
      { id: "body3", polish: "Noga", spanish: "Pierna", difficulty: "easy", example: "Złamałem nogę grając w piłkę nożną w zeszłym miesiącu", exampleTranslation: "Me rompí la pierna jugando al fútbol el mes pasado" },
      { id: "body4", polish: "Oko", spanish: "Ojo", difficulty: "easy", example: "Ma piękne niebieskie oczy jak morze", exampleTranslation: "Tiene hermosos ojos azules como el mar" },
      { id: "body5", polish: "Ucho", spanish: "Oreja", difficulty: "easy", example: "Mam ból ucha i muszę iść do lekarza", exampleTranslation: "Me duele la oreja y tengo que ir al médico" },
      { id: "body6", polish: "Nos", spanish: "Nariz", difficulty: "easy", example: "Mam katar i nos mi cały czas cieknie", exampleTranslation: "Tengo catarro y la nariz me gotea todo el tiempo" },
      { id: "body7", polish: "Usta", spanish: "Boca", difficulty: "medium", example: "Otwórz usta szeroko gdy dentysta będzie badał zęby", exampleTranslation: "Abre la boca ampliamente cuando el dentista examine los dientes" },
      { id: "body8", polish: "Palec", spanish: "Dedo", difficulty: "medium", example: "Skaleczyłem palec nożem krojąc warzywa do zupy", exampleTranslation: "Me corté el dedo con el cuchillo cortando verduras para la sopa" },
      { id: "body9", polish: "Ramię", spanish: "Brazo", difficulty: "medium", example: "Boli mnie ramię po intensywnym treningu siłowym", exampleTranslation: "Me duele el brazo después del entrenamiento de fuerza intensivo" },
      { id: "body10", polish: "Plecy", spanish: "Espalda", difficulty: "medium", example: "Tengo dolor de espalda de estar sentado en el escritorio todo el día", exampleTranslation: "Tengo dolor de espalda de estar sentado en el escritorio todo el día" },
      { id: "body11", polish: "Brzuch", spanish: "Estómago", difficulty: "medium", example: "Brzuch mnie boli bo zjadłem za dużo na obiedzie", exampleTranslation: "Me duele el estómago porque comí demasiado en el almuerzo" },
      { id: "body12", polish: "Serce", spanish: "Corazón", difficulty: "medium", example: "Serce bije mi szybciej gdy biegnę po schodach", exampleTranslation: "El corazón me late más rápido cuando corro por las escaleras" },
      { id: "body13", polish: "Boli mnie", spanish: "Me duele", difficulty: "hard", example: "Boli mnie gardło i mam gorączkę od wczoraj", exampleTranslation: "Me duele la garganta y tengo fiebre desde ayer" },
      { id: "body14", polish: "Skręciłem kostkę", spanish: "Me torcí el tobillo", difficulty: "hard", example: "Skręciłem kostkę grając w koszykówkę i teraz kulę", exampleTranslation: "Me torcí el tobillo jugando al baloncesto y ahora cojeo" },
      { id: "body15", polish: "Czuję się słabo", spanish: "Me siento débil", difficulty: "hard", example: "Czuję się bardzo słabo i potrzebuję odpoczynku", exampleTranslation: "Me siento muy débil y necesito descanso" }
    ]
  },

  hobbies_pastimes: {
    name: "Hobby i zainteresowania",
    description: "Pasje i zainteresowania",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "hobby1", polish: "Hobby", spanish: "Pasatiempo", difficulty: "easy", example: "Moje hobby to fotografia natury i krajobrazów", exampleTranslation: "Mi pasatiempo es la fotografía de naturaleza y paisajes" },
      { id: "hobby2", polish: "Malowanie", spanish: "Pintura", difficulty: "easy", example: "Malowanie akwarelami relaksuje mnie po pracy", exampleTranslation: "La pintura con acuarelas me relaja después del trabajo" },
      { id: "hobby3", polish: "Fotografia", spanish: "Fotografía", difficulty: "easy", example: "Fotografia to moja pasja od dzieciństwa", exampleTranslation: "La fotografía es mi pasión desde la infancia" },
      { id: "hobby4", polish: "Kolekcjonowanie", spanish: "Coleccionar", difficulty: "easy", example: "Kolekcjonuję znaczki pocztowe z różnych krajów świata", exampleTranslation: "Colecciono sellos postales de diferentes países del mundo" },
      { id: "hobby5", polish: "Rysowanie", spanish: "Dibujo", difficulty: "easy", example: "Rysowanie portretów to moja ulubiona forma wypoczynku", exampleTranslation: "El dibujo de retratos es mi forma favorita de relajación" },
      { id: "hobby6", polish: "Rękodzieło", spanish: "Manualidades", difficulty: "easy", example: "Robię rękodzieło sprzedając ręcznie robioną biżuterię", exampleTranslation: "Hago manualidades vendiendo joyería hecha a mano" },
      { id: "hobby7", polish: "Szydełkowanie", spanish: "Ganchillo", difficulty: "medium", example: "Babcia uczy mnie szydełkowania kolorowych serwetek", exampleTranslation: "La abuela me enseña el ganchillo de tapetes coloridos" },
      { id: "hobby8", polish: "Modelarstwo", spanish: "Modelismo", difficulty: "medium", example: "Modelarstwo lotnicze wymaga precyzji i cierpliwości", exampleTranslation: "El modelismo de aviación requiere precisión y paciencia" },
      { id: "hobby9", polish: "Origami", spanish: "Origami", difficulty: "medium", example: "Origami to japońska sztuka składania papieru", exampleTranslation: "El origami es el arte japonés de doblar papel" },
      { id: "hobby10", polish: "Stolarstwo", spanish: "Carpintería", difficulty: "medium", example: "Stolarstwo to moje hobby i robię meble na zamówienie", exampleTranslation: "La carpintería es mi pasatiempo y hago muebles por encargo" },
      { id: "hobby11", polish: "Ceramika", spanish: "Cerámica", difficulty: "medium", example: "Uczę się ceramiki w lokalnym warsztacie artystycznym", exampleTranslation: "Estoy aprendiendo cerámica en el taller artístico local" },
      { id: "hobby12", polish: "Haftowanie", spanish: "Bordado", difficulty: "medium", example: "Haftowanie wymaga precyzji i spokoju", exampleTranslation: "El bordado requiere precisión y tranquilidad" },
      { id: "hobby13", polish: "Jakie masz hobby?", spanish: "¿Qué pasatiempos tienes?", difficulty: "hard", example: "Jakie masz hobby i czym lubisz się zajmować w wolnym czasie?", exampleTranslation: "¿Qué pasatiempos tienes y qué te gusta hacer en tu tiempo libre?" },
      { id: "hobby14", polish: "To moja pasja", spanish: "Es mi pasión", difficulty: "hard", example: "Fotografia to nie tylko hobby ale moja prawdziwa pasja życiowa", exampleTranslation: "La fotografía no es solo un pasatiempo sino mi verdadera pasión de vida" },
      { id: "hobby15", polish: "Uczę się nowych rzeczy", spanish: "Aprendo cosas nuevas", difficulty: "hard", example: "Zawsze uczę się nowych rzeczy i rozwijam swoje umiejętności", exampleTranslation: "Siempre aprendo cosas nuevas y desarrollo mis habilidades" }
    ]
  },

  weather_vocabulary: {
    name: "Słownictwo pogodowe",
    description: "Zjawiska pogodowe",
    icon: CloudRain,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "wea1", polish: "Deszcz", spanish: "Lluvia", difficulty: "easy", example: "Deszcz pada od rana i wszystko jest mokre", exampleTranslation: "La lluvia cae desde la mañana y todo está mojado" },
      { id: "wea2", polish: "Śnieg", spanish: "Nieve", difficulty: "easy", example: "Śnieg pokrył całe miasto białym puchem", exampleTranslation: "La nieve cubrió toda la ciudad con un manto blanco" },
      { id: "wea3", polish: "Wiatr", spanish: "Viento", difficulty: "easy", example: "Wiatr jest dzisiaj bardzo silny i zimny", exampleTranslation: "El viento está muy fuerte y frío hoy" },
      { id: "wea4", polish: "Burza", spanish: "Tormenta", difficulty: "easy", example: "Burza nadciąga z ciemnymi chmurami i piorunami", exampleTranslation: "La tormenta se acerca con nubes oscuras y rayos" },
      { id: "wea5", polish: "Grad", spanish: "Granizo", difficulty: "easy", example: "Grad uszkodził szyby w samochodzie wczoraj", exampleTranslation: "El granizo dañó los vidrios del coche ayer" },
      { id: "wea6", polish: "Mgła", spanish: "Niebla", difficulty: "easy", example: "Mgła jest tak gęsta że nie widać dalej niż dziesięć metrów", exampleTranslation: "La niebla es tan densa que no se ve más allá de diez metros" },
      { id: "wea7", polish: "Piorun", spanish: "Rayo", difficulty: "medium", example: "Piorun uderzył w drzewo podczas wczorajszej burzy", exampleTranslation: "El rayo golpeó el árbol durante la tormenta de ayer" },
      { id: "wea8", polish: "Grzmot", spanish: "Trueno", difficulty: "medium", example: "Grzmot był tak głośny że obudziło mnie w nocy", exampleTranslation: "El trueno fue tan fuerte que me despertó por la noche" },
      { id: "wea9", polish: "Tęcza", spanish: "Arcoíris", difficulty: "medium", example: "Po deszczu pojawiła się piękna tęcza na niebie", exampleTranslation: "Después de la lluvia apareció un hermoso arcoíris en el cielo" },
      { id: "wea10", polish: "Susza", spanish: "Sequía", difficulty: "medium", example: "Susza trwa już trzy miesiące i brakuje wody", exampleTranslation: "La sequía dura ya tres meses y falta agua" },
      { id: "wea11", polish: "Powódź", spanish: "Inundación", difficulty: "medium", example: "Powódź zniszczyła wiele domów w dolinie rzeki", exampleTranslation: "La inundación destruyó muchas casas en el valle del río" },
      { id: "wea12", polish: "Zamieć", spanish: "Ventisca", difficulty: "medium", example: "Zamieć śnieżna uniemożliwia prowadzenie samochodu", exampleTranslation: "La ventisca de nieve hace imposible conducir el coche" },
      { id: "wea13", polish: "Jaka jest pogoda?", spanish: "¿Cómo está el tiempo?", difficulty: "hard", example: "Jaka jest dzisiaj pogoda w twoim mieście?", exampleTranslation: "¿Cómo está el tiempo hoy en tu ciudad?" },
      { id: "wea14", polish: "Będzie padać", spanish: "Va a llover", difficulty: "hard", example: "Według prognozy będzie padać przez cały weekend", exampleTranslation: "Según el pronóstico va a llover durante todo el fin de semana" },
      { id: "wea15", polish: "Robi się chłodniej", spanish: "Está refrescando", difficulty: "hard", example: "Robi się chłodniej wieczorami więc weź kurtkę", exampleTranslation: "Está refrescando por las noches así que lleva chaqueta" }
    ]
  },

  directions_navigation: {
    name: "Kierunki i nawigacja",
    description: "Orientacja przestrzenna",
    icon: Navigation,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    words: [
      { id: "nav1", polish: "Lewo", spanish: "Izquierda", difficulty: "easy", example: "Skręć w lewo na pierwszym skrzyżowaniu", exampleTranslation: "Gira a la izquierda en el primer cruce" },
      { id: "nav2", polish: "Prawo", spanish: "Derecha", difficulty: "easy", example: "Bank jest po prawej stronie ulicy", exampleTranslation: "El banco está a la derecha de la calle" },
      { id: "nav3", polish: "Prosto", spanish: "Recto", difficulty: "easy", example: "Idź prosto tą ulicą przez pięć minut", exampleTranslation: "Ve recto por esta calle durante cinco minutos" },
      { id: "nav4", polish: "Skręcić", spanish: "Girar", difficulty: "easy", example: "Musisz skręcić w trzecią ulicę po lewej", exampleTranslation: "Tienes que girar en la tercera calle a la izquierda" },
      { id: "nav5", polish: "Zawrócić", spanish: "Dar la vuelta", difficulty: "easy", example: "Musisz zawrócić bo jedziesz w złą stronę", exampleTranslation: "Tienes que dar la vuelta porque vas en dirección equivocada" },
      { id: "nav6", polish: "Róg", spanish: "Esquina", difficulty: "easy", example: "Apteka jest na rogu tej i następnej ulicy", exampleTranslation: "La farmacia está en la esquina de esta y la siguiente calle" },
      { id: "nav7", polish: "Skrzyżowanie", spanish: "Cruce", difficulty: "medium", example: "Zwolnij na skrzyżowaniu i ustąp pierwszeństwa", exampleTranslation: "Reduce la velocidad en el cruce y cede el paso" },
      { id: "nav8", polish: "Rondo", spanish: "Rotonda", difficulty: "medium", example: "Na rondzie weź drugie zjazd w prawo", exampleTranslation: "En la rotonda toma la segunda salida a la derecha" },
      { id: "nav9", polish: "Sygnalizacja", spanish: "Semáforo", difficulty: "medium", example: "Czekaj na zielone światło na sygnalizacji", exampleTranslation: "Espera la luz verde en el semáforo" },
      { id: "nav10", polish: "Przejście", spanish: "Paso de peatones", difficulty: "medium", example: "Przechodzę przez ulicę na przejściu dla pieszych", exampleTranslation: "Cruzo la calle por el paso de peatones" },
      { id: "nav11", polish: "Oznakowanie", spanish: "Señalización", difficulty: "medium", example: "Oznakowanie drogowe wskazuje drogę do centrum", exampleTranslation: "La señalización vial indica el camino al centro" },
      { id: "nav12", polish: "Objazd", spanish: "Desvío", difficulty: "medium", example: "Jest objazd z powodu remontu głównej drogi", exampleTranslation: "Hay un desvío debido a la reparación de la carretera principal" },
      { id: "nav13", polish: "Jak tam dojechać?", spanish: "¿Cómo llegar allí?", difficulty: "hard", example: "Jak najszybciej dojechać tam unikając korków?", exampleTranslation: "¿Cómo llegar allí lo más rápido posible evitando el tráfico?" },
      { id: "nav14", polish: "Jesteś na dobrej drodze", spanish: "Vas por buen camino", difficulty: "hard", example: "Jesteś na dobrej drodze, jedź dalej prosto", exampleTranslation: "Vas por buen camino, sigue recto" },
      { id: "nav15", polish: "Zjeżdżaj tutaj", spanish: "Sal aquí", difficulty: "hard", example: "Zjeżdżaj z autostrady tutaj na następnym zjeździe", exampleTranslation: "Sal de la autopista aquí en la siguiente salida" }
    ]
  },

  numbers_ordinals: {
    name: "Liczby porządkowe",
    description: "Wartości numeryczne",
    icon: Hash,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "num1", polish: "Pierwszy", spanish: "Primero", difficulty: "easy", example: "To jest mój pierwszy raz w Hiszpanii i jestem podekscytowany", exampleTranslation: "Esta es mi primera vez en España y estoy emocionado" },
      { id: "num2", polish: "Drugi", spanish: "Segundo", difficulty: "easy", example: "Mieszkam na drugim piętrze budynku z windą", exampleTranslation: "Vivo en el segundo piso del edificio con ascensor" },
      { id: "num3", polish: "Trzeci", spanish: "Tercero", difficulty: "easy", example: "To jest mój trzeci rok studiów na uniwersytecie", exampleTranslation: "Este es mi tercer año de estudios en la universidad" },
      { id: "num4", polish: "Ostatni", spanish: "Último", difficulty: "easy", example: "To był ostatni autobus dzisiaj do centrum", exampleTranslation: "Fue el último autobús hoy al centro" },
      { id: "num5", polish: "Następny", spanish: "Siguiente", difficulty: "easy", example: "Następny pociąg odjeżdża za piętnaście minut", exampleTranslation: "El siguiente tren sale en quince minutos" },
      { id: "num6", polish: "Poprzedni", spanish: "Anterior", difficulty: "easy", example: "Poprzedni miesiąc był bardzo pracowity dla mnie", exampleTranslation: "El mes anterior fue muy ocupado para mí" },
      { id: "num7", polish: "Pojedynczy", spanish: "Individual", difficulty: "medium", example: "Poproszę pojedynczy bilet do Madrytu", exampleTranslation: "Un billete individual a Madrid por favor" },
      { id: "num8", polish: "Podwójny", spanish: "Doble", difficulty: "medium", example: "Zamówiłem podwójne espresso z mlekiem", exampleTranslation: "Pedí un espresso doble con leche" },
      { id: "num9", polish: "Para", spanish: "Par", difficulty: "medium", example: "Kupiłem nową parę butów sportowych do biegania", exampleTranslation: "Compré un par de zapatos deportivos nuevos para correr" },
      { id: "num10", polish: "Tuzin", spanish: "Docena", difficulty: "medium", example: "Potrzebuję tuzin świeżych jajek z gospodarstwa", exampleTranslation: "Necesito una docena de huevos frescos de la granja" },
      { id: "num11", polish: "Setka", spanish: "Centena", difficulty: "medium", example: "Na imprezie było prawie setka gości", exampleTranslation: "En la fiesta había casi un centenar de invitados" },
      { id: "num12", polish: "Tysiąc", spanish: "Mil", difficulty: "medium", example: "To kosztuje ponad tysiąc złotych", exampleTranslation: "Esto cuesta más de mil zlotys" },
      { id: "num13", polish: "Ile to kosztuje?", spanish: "¿Cuánto cuesta?", difficulty: "hard", example: "Ile dokładnie to kosztuje z podatkiem?", exampleTranslation: "¿Cuánto cuesta exactamente con impuestos?" },
      { id: "num14", polish: "Jeden za drugim", spanish: "Uno tras otro", difficulty: "hard", example: "Problemy przychodzą jeden za drugim i nie ma przerwy", exampleTranslation: "Los problemas vienen uno tras otro y no hay descanso" },
      { id: "num15", polish: "Co drugi dzień", spanish: "Cada dos días", difficulty: "hard", example: "Chodzę na siłownię co drugi dzień regularnie", exampleTranslation: "Voy al gimnasio cada dos días regularmente" }
    ]
  },

  feelings_states: {
    name: "Uczucia i stany",
    description: "Jak się czujemy",
    icon: HandMetal,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "state1", polish: "Zmęczony", spanish: "Cansado", difficulty: "easy", example: "Jestem bardzo zmęczony po całym dniu ciężkiej pracy", exampleTranslation: "Estoy muy cansado después de todo el día de trabajo duro" },
      { id: "state2", polish: "Głodny", spanish: "Hambriento", difficulty: "easy", example: "Jestem strasznie głodny bo nie jadłem od rana", exampleTranslation: "Tengo mucha hambre porque no comí desde la mañana" },
      { id: "state3", polish: "Spragniony", spanish: "Sediento", difficulty: "easy", example: "Jestem spragniony po biegu w upale", exampleTranslation: "Estoy sediento después de correr en el calor" },
      { id: "state4", polish: "Śpiący", spanish: "Soñoliento", difficulty: "easy", example: "Jestem śpiący bo spałem tylko cztery godziny", exampleTranslation: "Estoy soñoliento porque dormí solo cuatro horas" },
      { id: "state5", polish: "Zdenerwowany", spanish: "Nervioso", difficulty: "easy", example: "Jestem zdenerwowany przed ważnym egzaminem", exampleTranslation: "Estoy nervioso antes del examen importante" },
      { id: "state6", polish: "Podekscytowany", spanish: "Emocionado", difficulty: "easy", example: "Jestem podekscytowany wyjazdem na wakacje", exampleTranslation: "Estoy emocionado por el viaje de vacaciones" },
      { id: "state7", polish: "Zmartwiony", spanish: "Preocupado", difficulty: "medium", example: "Jestem zmartwiony wynikami badań lekarskich", exampleTranslation: "Estoy preocupado por los resultados de los análisis médicos" },
      { id: "state8", polish: "Zrelaksowany", spanish: "Relajado", difficulty: "medium", example: "Czuję się zrelaksowany po masażu w spa", exampleTranslation: "Me siento relajado después del masaje en el spa" },
      { id: "state9", polish: "Zadowolony", spanish: "Satisfecho", difficulty: "medium", example: "Jestem zadowolony z wyników mojej pracy", exampleTranslation: "Estoy satisfecho con los resultados de mi trabajo" },
      { id: "state10", polish: "Zestresowany", spanish: "Estresado", difficulty: "medium", example: "Jestem bardzo zestresowany przed prezentacją", exampleTranslation: "Estoy muy estresado antes de la presentación" },
      { id: "state11", polish: "Samotny", spanish: "Solitario", difficulty: "medium", example: "Czuję się samotny odkąd przeprowadziłem się do nowego miasta", exampleTranslation: "Me siento solitario desde que me mudé a la nueva ciudad" },
      { id: "state12", polish: "Pełen energii", spanish: "Lleno de energía", difficulty: "medium", example: "Po kawie czuję się pełen energii i gotowy do pracy", exampleTranslation: "Después del café me siento lleno de energía y listo para trabajar" },
      { id: "state13", polish: "Jak się czujesz?", spanish: "¿Cómo te sientes?", difficulty: "hard", example: "Jak się czujesz po wczorajszej operacji?", exampleTranslation: "¿Cómo te sientes después de la operación de ayer?" },
      { id: "state14", polish: "Nie czuję się najlepiej", spanish: "No me siento muy bien", difficulty: "hard", example: "Nie czuję się najlepiej dzisiaj i chyba zostanę w domu", exampleTranslation: "No me siento muy bien hoy y creo que me quedaré en casa" },
      { id: "state15", polish: "Potrzebuję odpoczynku", spanish: "Necesito descansar", difficulty: "hard", example: "Potrzebuję kilku dni odpoczynku żeby się zregenerować", exampleTranslation: "Necesito varios días de descanso para recuperarme" }
    ]
  },

  energy_power: {
    name: "Energia i zasilanie",
    description: "Prąd i elektryczność",
    icon: Battery,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "ener1", polish: "Prąd", spanish: "Electricidad", difficulty: "easy", example: "Prąd został wyłączony z powodu awarii w nocy", exampleTranslation: "La electricidad fue cortada debido a una avería por la noche" },
      { id: "ener2", polish: "Światło", spanish: "Luz", difficulty: "easy", example: "Zapal światło bo jest za ciemno w pokoju", exampleTranslation: "Enciende la luz porque está muy oscuro en la habitación" },
      { id: "ener3", polish: "Gniazdko", spanish: "Enchufe", difficulty: "easy", example: "Podłącz ładowarkę do gniazdka w ścianie", exampleTranslation: "Conecta el cargador al enchufe en la pared" },
      { id: "ener4", polish: "Wtyczka", spanish: "Clavija", difficulty: "easy", example: "Wtyczka tego urządzenia nie pasuje do gniazdka", exampleTranslation: "La clavija de este aparato no encaja en la toma" },
      { id: "ener5", polish: "Bateria", spanish: "Batería", difficulty: "easy", example: "Bateria w telefonie jest prawie całkowicie wyczerpana", exampleTranslation: "La batería del teléfono está casi completamente agotada" },
      { id: "ener6", polish: "Ładowarka", spanish: "Cargador", difficulty: "easy", example: "Zapomniałem ładowarki do telefonu w domu", exampleTranslation: "Olvidé el cargador del teléfono en casa" },
      { id: "ener7", polish: "Bezpiecznik", spanish: "Fusible", difficulty: "medium", example: "Bezpiecznik się przepalił i muszę go wymienić", exampleTranslation: "El fusible se fundió y tengo que reemplazarlo" },
      { id: "ener8", polish: "Przewód", spanish: "Cable", difficulty: "medium", example: "Przewód zasilający jest za krótki do tego urządzenia", exampleTranslation: "El cable de alimentación es demasiado corto para este aparato" },
      { id: "ener9", polish: "Kontakt", spanish: "Toma de corriente", difficulty: "medium", example: "Nie ma wolnego kontaktu w tym pokoju", exampleTranslation: "No hay toma de corriente libre en esta habitación" },
      { id: "ener10", polish: "Napięcie", spanish: "Voltaje", difficulty: "medium", example: "Sprawdź napięcie przed podłączeniem urządzenia", exampleTranslation: "Verifica el voltaje antes de conectar el aparato" },
      { id: "ener11", polish: "Oszczędzać energię", spanish: "Ahorrar energía", difficulty: "medium", example: "Staramy się oszczędzać energię gasząc światła", exampleTranslation: "Intentamos ahorrar energía apagando las luces" },
      { id: "ener12", polish: "Krótkie spięcie", spanish: "Cortocircuito", difficulty: "medium", example: "Było krótkie spięcie i wszystko przestało działać", exampleTranslation: "Hubo un cortocircuito y todo dejó de funcionar" },
      { id: "ener13", polish: "Nie ma prądu", spanish: "No hay electricity", difficulty: "hard", example: "Nie ma prądu w całym budynku od dwóch godzin", exampleTranslation: "No hay electricidad en todo el edificio desde hace dos horas" },
      { id: "ener14", polish: "Bateria się rozładowała", spanish: "La batería se descargó", difficulty: "hard", example: "Bateria w laptopie się całkowicie rozładowała", exampleTranslation: "La batería de la laptop se descargó completamente" },
      { id: "ener15", polish: "Gdzie mogę naładować?", spanish: "¿Dónde puedo cargar?", difficulty: "hard", example: "Gdzie mogę naładować telefon? Bateria jest prawie pusta", exampleTranslation: "¿Dónde puedo cargar el teléfono? La batería está casi vacía" }
    ]
  },

  social_gatherings: {
    name: "Spotkania towarzyskie",
    description: "Wydarzenia społeczne",
    icon: Users,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "soc1", polish: "Spotkanie", spanish: "Reunión", difficulty: "easy", example: "Mamy spotkanie rodzinne w niedzielę o obiedzie", exampleTranslation: "Tenemos una reunión familiar el domingo en el almuerzo" },
      { id: "soc2", polish: "Impreza", spanish: "Fiesta", difficulty: "easy", example: "Organizujemy imprezę urodzinową w przyszłą sobotę", exampleTranslation: "Organizamos una fiesta de cumpleaños el próximo sábado" },
      { id: "soc3", polish: "Gość", spanish: "Invitado", difficulty: "easy", example: "Spodziewamy się dwudziestu gości na weselu", exampleTranslation: "Esperamos veinte invitados en la boda" },
      { id: "soc4", polish: "Gospodarz", spanish: "Anfitrión", difficulty: "easy", example: "Gospodarz przyjęcia wita wszystkich przy drzwiach", exampleTranslation: "El anfitrión de la fiesta saluda a todos en la puerta" },
      { id: "soc5", polish: "Rozmowa", spanish: "Conversación", difficulty: "easy", example: "Mieliśmy długą rozmowę o polityce i kulturze", exampleTranslation: "Tuvimos una conversación larga sobre política y cultura" },
      { id: "soc6", polish: "Przedstawić", spanish: "Presentar", difficulty: "easy", example: "Chcę ci przedstawić mojego najlepszego przyjaciela", exampleTranslation: "Quiero presentarte a mi mejor amigo" },
      { id: "soc7", polish: "Pożegnanie", spanish: "Despedida", difficulty: "medium", example: "Pożegnanie było wzruszające z wieloma łzami", exampleTranslation: "La despedida fue emotiva con muchas lágrimas" },
      { id: "soc8", polish: "Powitanie", spanish: "Bienvenida", difficulty: "medium", example: "Przygotowaliśmy ciepłe powitanie dla nowych sąsiadów", exampleTranslation: "Preparamos una bienvenida cálida para los nuevos vecinos" },
      { id: "soc9", polish: "Zabawa", spanish: "Diversión", difficulty: "medium", example: "Zabawa trwała do późnej nocy z muzyką i tańcami", exampleTranslation: "La diversión duró hasta tarde en la noche con música y bailes" },
      { id: "soc10", polish: "Wspomnienia", spanish: "Recuerdos", difficulty: "medium", example: "Mamy wspaniałe wspomnienia z tego spotkania rodzinnego", exampleTranslation: "Tenemos recuerdos maravillosos de esta reunión familiar" },
      { id: "soc11", polish: "Zaproszenie", spanish: "Invitación", difficulty: "medium", example: "Otrzymałem formalne zaproszenie na uroczystą kolację", exampleTranslation: "Recibí una invitación formal para la cena ceremonial" },
      { id: "soc12", polish: "Uczestnik", spanish: "Participante", difficulty: "medium", example: "Każdy uczestnik otrzymał pamiątkowy prezent", exampleTranslation: "Cada participante recibió un regalo de recuerdo" },
      { id: "soc13", polish: "Miło było cię poznać", spanish: "Fue un placer conocerte", difficulty: "hard", example: "Miło było cię poznać, mam nadzieję że się jeszcze spotkamy", exampleTranslation: "Fue un placer conocerte, espero que nos encontremos otra vez" },
      { id: "soc14", polish: "Dobrze się bawiłem", spanish: "Me divertí mucho", difficulty: "hard", example: "Dobrze się bawiłem na twojej imprezie wczoraj", exampleTranslation: "Me divertí mucho en tu fiesta ayer" },
      { id: "soc15", polish: "Zapraszam do siebie", spanish: "Te invito a mi casa", difficulty: "hard", example: "Zapraszam cię do siebie na obiad w przyszłą niedzielę", exampleTranslation: "Te invito a mi casa para el almuerzo el próximo domingo" }
    ]
  },

  work_office: {
    name: "Praca i biuro",
    description: "Środowisko biurowe",
    icon: Briefcase,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { id: "work1", polish: "Biuro", spanish: "Oficina", difficulty: "easy", example: "Moje biuro jest na piątym piętrze wieżowca", exampleTranslation: "Mi oficina está en el quinto piso del rascacielos" },
      { id: "work2", polish: "Spotkanie", spanish: "Reunión", difficulty: "easy", example: "Mam ważne spotkanie z klientem o dziesiątej", exampleTranslation: "Tengo una reunión importante con el cliente a las diez" },
      { id: "work3", polish: "Prezentacja", spanish: "Presentación", difficulty: "easy", example: "Przygotowuję prezentację na jutrzejszą konferencję", exampleTranslation: "Preparo una presentación para la conferencia de mañana" },
      { id: "work4", polish: "Raport", spanish: "Informe", difficulty: "easy", example: "Muszę napisać raport miesięczny do końca tygodnia", exampleTranslation: "Tengo que escribir el informe mensual para fin de semana" },
      { id: "work5", polish: "Termin", spanish: "Plazo", difficulty: "easy", example: "Termin realizacji projektu mija jutro o północy", exampleTranslation: "El plazo de realización del proyecto vence mañana a medianoche" },
      { id: "work6", polish: "Kolega z pracy", spanish: "Compañero de trabajo", difficulty: "easy", example: "Mój kolega z pracy pomaga mi z trudnym zadaniem", exampleTranslation: "Mi compañero de trabajo me ayuda con la tarea difícil" },
      { id: "work7", polish: "Awans", spanish: "Ascenso", difficulty: "medium", example: "Dostałem awans na stanowisko kierownika zespołu", exampleTranslation: "Recibí un ascenso al puesto de gerente de equipo" },
      { id: "work8", polish: "Nadgodziny", spanish: "Horas extra", difficulty: "medium", example: "Muszę zostać na nadgodziny żeby skończyć projekt", exampleTranslation: "Tengo que quedarme horas extra para terminar el proyecto" },
      { id: "work9", polish: "Urlop", spanish: "Vacaciones", difficulty: "medium", example: "Planuję wziąć dwutygodniowy urlop w sierpniu", exampleTranslation: "Planeo tomar vacaciones de dos semanas en agosto" },
      { id: "work10", polish: "Zwolnienie lekarskie", spanish: "Baja médica", difficulty: "medium", example: "Jestem na zwolnieniu lekarskim przez tydzień", exampleTranslation: "Estoy de baja médica durante una semana" },
      { id: "work11", polish: "Umiejętności", spanish: "Habilidades", difficulty: "medium", example: "Ta praca wymaga specjalistycznych umiejętności technicznych", exampleTranslation: "Este trabajo requiere habilidades técnicas especializadas" },
      { id: "work12", polish: "Doświadczenie", spanish: "Experiencia", difficulty: "medium", example: "Potrzebne jest pięcioletnie doświadczenie w branży", exampleTranslation: "Se requiere experiencia de cinco años en la industria" },
      { id: "work13", polish: "Pracuję zdalnie", spanish: "Trabajo remoto", difficulty: "hard", example: "Od pandemii pracuję zdalnie z domu codziennie", exampleTranslation: "Desde la pandemia trabajo remoto desde casa todos los días" },
      { id: "work14", polish: "Jestem zajęty", spanish: "Estoy ocupado", difficulty: "hard", example: "Jestem teraz bardzo zajęty, mogę oddzwonić później?", exampleTranslation: "Estoy muy ocupado ahora, ¿puedo devolver la llamada más tarde?" },
      { id: "work15", polish: "Mam dużo pracy", spanish: "Tengo mucho trabajo", difficulty: "hard", example: "Mam dużo pracy w tym tygodniu i będę pracował do późna", exampleTranslation: "Tengo mucho trabajo esta semana y trabajaré hasta tarde" }
    ]
  },

  asking_helping: {
    name: "Prośby o pomoc",
    description: "Pytanie o wsparcie",
    icon: HandMetal,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "help1", polish: "Pomóż mi", spanish: "Ayúdame", difficulty: "easy", example: "Pomóż mi proszę podnieść ten ciężki karton", exampleTranslation: "Ayúdame por favor a levantar esta caja pesada" },
      { id: "help2", polish: "Potrzebuję pomocy", spanish: "Necesito ayuda", difficulty: "easy", example: "Potrzebuję pomocy z tym skomplikowanym zadaniem", exampleTranslation: "Necesito ayuda con esta tarea complicada" },
      { id: "help3", polish: "Możesz mi pomóc?", spanish: "¿Puedes ayudarme?", difficulty: "easy", example: "Możesz mi pomóc znaleźć moje klucze?", exampleTranslation: "¿Puedes ayudarme a encontrar mis llaves?" },
      { id: "help4", polish: "Dziękuję za pomoc", spanish: "Gracias por la ayuda", difficulty: "easy", example: "Dziękuję za pomoc z przeprowadzką do nowego mieszkania", exampleTranslation: "Gracias por la ayuda con la mudanza al nuevo apartamento" },
      { id: "help5", polish: "Wsparcie", spanish: "Apoyo", difficulty: "easy", example: "Twoje wsparcie jest dla mnie bardzo ważne", exampleTranslation: "Tu apoyo es muy importante para mí" },
      { id: "help6", polish: "Przysługa", spanish: "Favor", difficulty: "easy", example: "Czy możesz mi wyświadczyć przysługę?", exampleTranslation: "¿Puedes hacerme un favor?" },
      { id: "help7", polish: "Polegać na kimś", spanish: "Contar con alguien", difficulty: "medium", example: "Zawsze mogę na tobie polegać w trudnych sytuacjach", exampleTranslation: "Siempre puedo contar contigo en situaciones difíciles" },
      { id: "help8", polish: "Wspierać", spanish: "Apoyar", difficulty: "medium", example: "Rodzina wspiera mnie we wszystkich moich decyzjach", exampleTranslation: "La familia me apoya en todas mis decisiones" },
      { id: "help9", polish: "Doradzić", spanish: "Aconsejar", difficulty: "medium", example: "Czy możesz mi doradzić co powinienem zrobić?", exampleTranslation: "¿Puedes aconsejarme qué debería hacer?" },
      { id: "help10", polish: "Wyjaśnić", spanish: "Aclarar", difficulty: "medium", example: "Czy możesz wyjaśnić mi tę skomplikowaną sprawę?", exampleTranslation: "¿Puedes aclararme este asunto complicado?" },
      { id: "help11", polish: "Współpraca", spanish: "Colaboración", difficulty: "medium", example: "Współpraca w zespole jest kluczem do sukcesu", exampleTranslation: "La colaboración en equipo es la clave del éxito" },
      { id: "help12", polish: "Wdzięczność", spanish: "Gratitud", difficulty: "medium", example: "Czuję głęboką wdzięczność za całą twoją pomoc", exampleTranslation: "Siento profunda gratitud por toda tu ayuda" },
      { id: "help13", polish: "Czy mogę ci pomóc?", spanish: "¿Puedo ayudarte?", difficulty: "hard", example: "Widzę że masz problemy, czy mogę ci w czymś pomóc?", exampleTranslation: "Veo que tienes problemas, ¿我可以帮助你吗？" },
      { id: "help14", polish: "Jestem ci wdzięczny", spanish: "Te estoy agradecido", difficulty: "hard", example: "Jestem ci bardzo wdzięczny za wszystko co dla mnie zrobiłeś", exampleTranslation: "Te estoy muy agradecido por todo lo que hiciste por mí" },
      { id: "help15", polish: "Razem damy radę", spanish: "Juntos lo lograremos", difficulty: "hard", example: "Nie martw się, razem na pewno damy radę", exampleTranslation: "No te preocupes, juntos seguro lo lograremos" }
    ]
  },

  emotions_feelings: {
    name: "Emocje i uczucia",
    description: "Stany emocjonalne",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "emot1", polish: "Dumny", spanish: "Orgulloso", difficulty: "easy", example: "Jestem dumny z osiągnięć mojego syna w szkole", exampleTranslation: "Estoy orgulloso de los logros de mi hijo en la escuela" },
      { id: "emot2", polish: "Zawstydzony", spanish: "Avergonzado", difficulty: "easy", example: "Byłem zawstydzony moim błędem przed wszystkimi", exampleTranslation: "Estaba avergonzado de mi error delante de todos" },
      { id: "emot3", polish: "Zazdrosny", spanish: "Celoso", difficulty: "easy", example: "Nie bądź zazdrosny o sukces innych ludzi", exampleTranslation: "No seas celoso del éxito de otras personas" },
      { id: "emot4", polish: "Zaskoczony", spanish: "Sorprendido", difficulty: "easy", example: "Byłem bardzo zaskoczony niespodziewaną wizytą przyjaciela", exampleTranslation: "Estuve muy sorprendido por la visita inesperada del amigo" },
      { id: "emot5", polish: "Rozczarowany", spanish: "Decepcionado", difficulty: "easy", example: "Jestem rozczarowany wynikami naszego spotkania", exampleTranslation: "Estoy decepcionado con los resultados de nuestra reunión" },
      { id: "emot6", polish: "Pełen nadziei", spanish: "Esperanzado", difficulty: "easy", example: "Jestem pełen nadziei że wszystko się ułoży", exampleTranslation: "Estoy esperanzado de que todo saldrá bien" },
      { id: "emot7", polish: "Zmotywowany", spanish: "Motivado", difficulty: "medium", example: "Czuję się bardzo zmotywowany do osiągnięcia celów", exampleTranslation: "Me siento muy motivado para lograr los objetivos" },
      { id: "emot8", polish: "Sfrustrowany", spanish: "Frustrado", difficulty: "medium", example: "Jestem sfrustrowany brakiem postępów w projekcie", exampleTranslation: "Estoy frustrado por la falta de progreso en el proyecto" },
      { id: "emot9", polish: "Spokojny", spanish: "Tranquilo", difficulty: "medium", example: "Czuję się spokojny i zrównoważony po medytacji", exampleTranslation: "Me siento tranquilo y equilibrado después de la meditación" },
      { id: "emot10", polish: "Przytłoczony", spanish: "Abrumado", difficulty: "medium", example: "Czuję się przytłoczony ilością pracy do zrobienia", exampleTranslation: "Me siento abrumado por la cantidad de trabajo por hacer" },
      { id: "emot11", polish: "Nostalgiczny", spanish: "Nostálgico", difficulty: "medium", example: "Jestem nostalgiczny wspominając stare czasy", exampleTranslation: "Estoy nostálgico recordando los viejos tiempos" },
      { id: "emot12", polish: "Inspirowany", spanish: "Inspirado", difficulty: "medium", example: "Czuję się inspirowany po obejrzeniu tej wystawy", exampleTranslation: "Me siento inspirado después de ver esta exposición" },
      { id: "emot13", polish: "Nie wiem co czuję", spanish: "No sé qué siento", difficulty: "hard", example: "Nie wiem dokładnie co czuję w tej skomplikowanej sytuacji", exampleTranslation: "No sé exactamente qué siento en esta situación complicada" },
      { id: "emot14", polish: "Mam mieszane uczucia", spanish: "Tengo sentimientos encontrados", difficulty: "hard", example: "Mam mieszane uczucia co do tej decyzji i nie wiem co robić", exampleTranslation: "Tengo sentimientos encontrados sobre esta decisión y no sé qué hacer" },
      { id: "emot15", polish: "Czuję się przytłoczony", spanish: "Me siento abrumado", difficulty: "hard", example: "Czuję się przytłoczony wszystkimi tymi obowiązkami naraz", exampleTranslation: "Me siento abrumado con todas estas obligaciones a la vez" }
    ]
  }
};

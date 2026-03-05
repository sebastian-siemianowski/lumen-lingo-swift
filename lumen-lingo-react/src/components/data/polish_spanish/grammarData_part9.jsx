/**
 * POLISH → SPANISH GRAMMAR - PART 9
 * 3 categories, 15 questions each - Deepening understanding
 */

import { Shield, Compass, Users } from "lucide-react";

export const part9Categories = {
  modal_verbs: {
    name: "Czasowniki modalne",
    description: "Wyrażaj możliwości, obowiązki i potrzeby",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "mod_1",
        question: "No _____ olvidar las llaves de casa cuando salgas por la mañana al trabajo.",
        translation: "(Nie możesz zapomnieć kluczy do domu, kiedy wyjdziesz rano do pracy)",
        options: ["debes", "puedes", "tienes que", "necesitas"],
        correct: "debes",
        explanation: "'Deber' wyraża moralny obowiązek lub silną radę! To jak głos rozsądku - powinieneś tego nie robić. Zgubienie kluczy to koszmar! 🔑"
      },
      {
        id: "mod_2",
        question: "Para aprobar el examen final _____ estudiar al menos tres horas diarias durante toda la semana.",
        translation: "(Żeby zdać egzamin końcowy musisz uczyć się co najmniej trzy godziny dziennie przez cały tydzień)",
        options: ["tienes que", "debes", "puedes", "quieres"],
        correct: "tienes que",
        explanation: "'Tener que' to silna konieczność osobista! Bardziej kategoryczne niż 'deber'. Nie masz wyboru - to wymóg dla zdania. Ciężka praca przynosi rezultaty! 📚"
      },
      {
        id: "mod_3",
        question: "¿_____ ayudarme a cargar estas cajas pesadas hasta el tercer piso del edificio?",
        translation: "(Czy możesz mi pomóc zanieść te ciężkie pudła na trzecie piętro budynku?)",
        options: ["Puedes", "Debes", "Tienes que", "Necesitas"],
        correct: "Puedes",
        explanation: "'Poder' to móc, mieć możliwość! To uprzejme pytanie o pomoc. 'Puedes' jest mniej naglące niż 'tienes que'. Pomaganie innym tworzy wspólnotę! 🤝"
      },
      {
        id: "mod_4",
        question: "Los estudiantes _____ respetar las normas de convivencia en la residencia universitaria siempre.",
        translation: "(Studenci muszą przestrzegać zasad współżycia w akademiku zawsze)",
        options: ["deben", "pueden", "quieren", "saben"],
        correct: "deben",
        explanation: "'Deber' dla zasad i regulacji! To moralna konieczność społeczna. Reguły tworzą harmonię w życiu grupowym. Szacunek buduje społeczność! 🏠"
      },
      {
        id: "mod_5",
        question: "No _____ fumar en lugares públicos cerrados según la ley española vigente.",
        translation: "(Nie wolno palić w zamkniętych miejscach publicznych zgodnie z obowiązującym prawem hiszpańskim)",
        options: ["se puede", "se debe", "hay que", "necesita"],
        correct: "se puede",
        explanation: "'No se puede' to bezosobowe 'nie wolno'! To zakaz prawny, nie osobista rada. Zdrowie publiczne jest priorytetem w Hiszpanii! 🚭"
      },
      {
        id: "mod_6",
        question: "_____ llevar el pasaporte válido para viajar a países fuera de la Unión Europea.",
        translation: "(Trzeba mieć ważny paszport, żeby podróżować do krajów poza Unią Europejską)",
        options: ["Hay que", "Debe", "Puede", "Tiene que"],
        correct: "Hay que",
        explanation: "'Hay que' to bezosobowa konieczność! Ogólna zasada dla wszystkich. Nie jest osobiste - to prawo podróży. Paszport to twoja przepustka do świata! ✈️"
      },
      {
        id: "mod_7",
        question: "Mi médico me dijo que _____ hacer más ejercicio regularmente para mejorar mi salud cardiovascular.",
        translation: "(Mój lekarz powiedział mi, że powinienem regularnie więcej ćwiczyć, żeby poprawić moje zdrowie sercowo-naczyniowe)",
        options: ["debería", "podría", "tendría que", "necesitaría"],
        correct: "debería",
        explanation: "'Debería' to łagodniejsze 'powinien'! Warunkowy czyni radę delikatniejszą. Lekarze zawsze mają rację o aktywności fizycznej! 💪"
      },
      {
        id: "mod_8",
        question: "¿_____ decirme dónde está la estación de metro más cercana desde aquí por favor?",
        translation: "(Czy mógłbyś mi powiedzieć gdzie jest najbliższa stacja metra stąd proszę?)",
        options: ["Podrías", "Deberías", "Tendrías que", "Necesitarías"],
        correct: "Podrías",
        explanation: "'¿Podrías...?' to bardzo grzeczne pytanie! Warunkowy dodaje uprzejmości. W obcym mieście ludzie zazwyczaj chętnie pomagają turystom! 🗺️"
      },
      {
        id: "mod_9",
        question: "Mañana _____ levantarme muy temprano porque tengo una cita importante con el dentista.",
        translation: "(Jutro będę musiał wstać bardzo wcześnie, bo mam ważne spotkanie z dentystą)",
        options: ["tendré que", "deberé", "podré", "querré"],
        correct: "tendré que",
        explanation: "'Tener que' w przyszłości! 'Tendré que' wyraża przyszłą konieczność. Dentystyczne wizyty są ważne, nawet jeśli wczesne! 🦷"
      },
      {
        id: "mod_10",
        question: "No _____ comer tantos dulces si quieres mantener tu peso ideal y estar saludable.",
        translation: "(Nie powinieneś jeść tyle słodyczy, jeśli chcesz utrzymać swoją idealną wagę i być zdrowym)",
        options: ["deberías", "podrías", "tendrías que", "necesitarías"],
        correct: "deberías",
        explanation: "'No deberías' to przyjazna rada! Nie jest rozkazem, tylko sugestią. Zdrowe nawyki są trudne, ale wartościowe! 🍬"
      },
      {
        id: "mod_11",
        question: "Para entrar en este club exclusivo _____ tener más de veintiún años cumplidos.",
        translation: "(Żeby wejść do tego ekskluzywnego klubu musisz mieć skończone więcej niż dwadzieścia jeden lat)",
        options: ["tienes que", "debes", "puedes", "quieres"],
        correct: "tienes que",
        explanation: "'Tener que' dla twardych wymagań! To nie rada, to reguła. Ograniczenia wiekowe chronią młodych. Zasady są dla bezpieczeństwa! 🎭"
      },
      {
        id: "mod_12",
        question: "¿_____ acompañarme al médico mañana? Estoy un poco nervioso por la consulta importante.",
        translation: "(Czy mógłbyś mi dotrzymać towarzystwa do lekarza jutro? Jestem trochę zdenerwowany ważną wizytą)",
        options: ["Podrías", "Deberías", "Tendrías", "Querrías"],
        correct: "Podrías",
        explanation: "'¿Podrías...?' prosi o przysługę delikatnie! To pokazuje twoją wrażliwość. Wsparcie przyjaciół w trudnych chwilach jest bezcenne! 🤗"
      },
      {
        id: "mod_13",
        question: "Los niños pequeños no _____ ver películas de terror porque pueden tener pesadillas por la noche.",
        translation: "(Małe dzieci nie powinny oglądać filmów grozy, bo mogą mieć koszmary w nocy)",
        options: ["deben", "pueden", "tienen que", "necesitan"],
        correct: "deben",
        explanation: "'No deben' to silna rada rodzicielska! To ochrona dziecięcej niewinności. Rodzice wiedzą najlepiej, co jest odpowiednie dla wieku! 👶"
      },
      {
        id: "mod_14",
        question: "_____ pedir permiso al jefe antes de tomar vacaciones durante el periodo de trabajo intenso.",
        translation: "(Trzeba poprosić szefa o pozwolenie przed wzięciem urlopu podczas intensywnego okresu pracy)",
        options: ["Hay que", "Puede", "Debe", "Tiene que"],
        correct: "Hay que",
        explanation: "'Hay que' dla ogólnych zasad w pracy! To bezosobowa konieczność - nie tylko ty, wszyscy! Szacunek dla hierarchii zawodowej jest ważny! 💼"
      }
    ]
  },

  por_vs_para: {
    name: "Por vs Para",
    description: "Rozróżnij te dwa kluczowe przyimki",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "pvp_1",
        question: "Este regalo bonito es _____ ti, espero que te guste mucho y lo uses con alegría.",
        translation: "(Ten ładny prezent jest dla ciebie, mam nadzieję, że bardzo ci się spodoba i będziesz używać z radością)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' pokazuje odbiorcę, przeznaczenie! Prezent DLA kogo? Dla ciebie. To jak adres na paczce - pokazuje kierunek i cel! 🎁"
      },
      {
        id: "pvp_2",
        question: "Gracias _____ tu ayuda valiosa, sin ti no habría podido terminar este trabajo difícil.",
        translation: "(Dziękuję za twoją cenną pomoc, bez ciebie nie mógłbym ukończyć tej trudnej pracy)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Gracias por' to zawsze 'dziękuję za'! 'Por' pokazuje powód wdzięczności. To wyrażenie używane milion razy dziennie w Hiszpanii! 🙏"
      },
      {
        id: "pvp_3",
        question: "Voy a la tienda _____ comprar leche, pan fresco y otros productos básicos para casa.",
        translation: "(Idę do sklepu, żeby kupić mleko, świeży chleb i inne podstawowe produkty do domu)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' + infinityw to cel, zamiar! ŻEBY coś zrobić używamy 'para'. To pokazuje twój plan i intencję. Zakupy to misja! 🛒"
      },
      {
        id: "pvp_4",
        question: "Caminamos _____ el parque grande durante una hora disfrutando del aire fresco primaveral.",
        translation: "(Spacerowaliśmy po dużym parku przez godzinę ciesząc się świeżym wiosennym powietrzem)",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "'Por' dla ruchu przez przestrzeń! Spacer PRZEZ park, wzdłuż parku. To pokazuje trasę, nie cel. Parki to płuca miast! 🌳"
      },
      {
        id: "pvp_5",
        question: "Estudio español _____ poder comunicarme mejor durante mis viajes a países hispanohablantes.",
        translation: "(Uczę się hiszpańskiego, żeby móc lepiej komunikować się podczas moich podróży do krajów hiszpańskojęzycznych)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' + infinityw dla przyszłego celu! Pokazuje motywację i plan. Nauka języków otwiera świat - to inwestycja w przyszłość! 🌍"
      },
      {
        id: "pvp_6",
        question: "Te llamé _____ teléfono varias veces pero no contestaste ninguna de mis llamadas urgentes.",
        translation: "(Dzwoniłem do ciebie telefonicznie kilka razy, ale nie odebrałeś żadnego z moich pilnych telefonów)",
        options: ["por", "para", "en", "con"],
        correct: "por",
        explanation: "'Por teléfono' to 'przez telefon' - środek komunikacji! 'Por' pokazuje metodę. Możesz też pisać 'por email', 'por carta'. Medium to klucz! 📱"
      },
      {
        id: "mod_7",
        question: "Este proyecto importante debe estar terminado _____ el viernes próximo sin falta alguna.",
        translation: "(Ten ważny projekt musi być ukończony do przyszłego piątku bez żadnej porażki)",
        options: ["para", "por", "hasta", "antes"],
        correct: "para",
        explanation: "'Para + data' to deadline! Termin, do którego coś musi być gotowe. 'Para el viernes' to konkretny moment w przyszłości. Deadliny motywują! ⏰"
      },
      {
        id: "pvp_8",
        question: "Pagué cincuenta euros _____ esta camisa de buena calidad que está hecha de algodón puro.",
        translation: "(Zapłaciłem pięćdziesiąt euro za tę koszulę dobrej jakości, która jest zrobiona z czystej bawełny)",
        options: ["por", "para", "de", "con"],
        correct: "por",
        explanation: "'Por' w wymianach i cenach! 'Pagar algo POR algo' to standardowa transakcja. Pokazuje wartość wymiany. Jakość kosztuje, ale się opłaca! 💰"
      },
      {
        id: "pvp_9",
        question: "Trabajo duro cada día _____ mi familia, quiero darles la mejor vida posible y feliz.",
        translation: "(Pracuję ciężko każdego dnia dla mojej rodziny, chcę dać im najlepsze możliwe i szczęśliwe życie)",
        options: ["por", "para", "a", "con"],
        correct: "por",
        explanation: "'Por' pokazuje motywację, powód działania! PRZEZ wzgląd na rodzinę. To głębokie - rodzina jest inspiracją. Miłość napędza wysiłek! 💝"
      },
      {
        id: "pvp_10",
        question: "Salimos _____ el aeropuerto a las seis de la mañana para no perder el vuelo importante.",
        translation: "(Wyjeżdżamy na lotnisko o szóstej rano, żeby nie przegapić ważnego lotu)",
        options: ["para", "por", "a", "hacia"],
        correct: "para",
        explanation: "'Salir para' to kierunek, destynacja! Jedziesz DO konkretnego miejsca. 'Para el aeropuerto' to twój cel podróży. Punktualność w lotach jest kluczowa! ✈️"
      },
      {
        id: "pvp_11",
        question: "_____ mí, la honestidad es el valor más importante en cualquier relación humana verdadera.",
        translation: "(Dla mnie uczciwość jest najważniejszą wartością w każdym prawdziwym ludzkim związku)",
        options: ["Para", "Por", "A", "Con"],
        correct: "Para",
        explanation: "'Para mí' to 'dla mnie' wyrażające opinię! Pokazuje twoją osobistą perspektywę. To jak twoje motto życiowe. Wartości definiują nas! 💎"
      },
      {
        id: "pvp_12",
        question: "Pasamos _____ tu casa ayer por la tarde pero no estabas, saliste de compras probablemente.",
        translation: "(Przechodziliśmy koło twojego domu wczoraj po południu, ale cię nie było, wyszłaś zapewne na zakupy)",
        options: ["por", "para", "en", "a"],
        correct: "por",
        explanation: "'Pasar por' to przechodzić obok! 'Por' dla ruchu w pobliżu czegoś. To jak trasa - jechałeś tamtędy. Spontaniczne wizyty są uroczym zaskoczeniem! 🏡"
      },
      {
        id: "pvp_13",
        question: "Tengo que terminar este informe _____ mañana porque el jefe lo necesita urgentemente.",
        translation: "(Muszę skończyć ten raport do jutra, bo szef pilnie tego potrzebuje)",
        options: ["para", "por", "hasta", "en"],
        correct: "para",
        explanation: "'Para + momento' to ostateczny termin! Do kiedy? Do jutra. To jak odliczanie - musisz skończyć PRZED tym momentem! ⏳"
      },
      {
        id: "pvp_14",
        question: "Lo hice todo _____ ti, porque me importas mucho y quiero verte feliz siempre.",
        translation: "(Zrobiłem to wszystko dla ciebie, bo bardzo mi na tobie zależy i chcę widzieć cię zawsze szczęśliwą)",
        options: ["por", "para", "a", "con"],
        correct: "por",
        explanation: "'Por ti' pokazuje powód, przyczynę działania! 'Por amor a ti' to motywacja. To emocjonalne - działałeś Z POWODU tej osoby! 💖"
      },
      {
        id: "pvp_15",
        question: "Este libro educativo es perfecto _____ niños de entre seis y diez años de edad.",
        translation: "(Ta edukacyjna książka jest idealna dla dzieci w wieku od sześciu do dziesięciu lat)",
        options: ["para", "por", "a", "de"],
        correct: "para",
        explanation: "'Para' określa przeznaczenie, odbiorcę! DLA kogo jest książka? Dla dzieci konkretnego wieku. To jak etykieta wiekowa. Bezpieczeństwo edukacyjne! 📖"
      }
    ]
  },

  family_and_relationships: {
    name: "Rodzina i relacje",
    description: "Rozmawiaj o swoich bliskich z czułością",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    questions: [
      {
        id: "fam_1",
        question: "Mi _____ mayor es médico y trabaja en el hospital general de la ciudad grande.",
        translation: "(Mój starszy brat jest lekarzem i pracuje w szpitalu ogólnym dużego miasta)",
        options: ["hermano", "hermana", "primo", "tío"],
        correct: "hermano",
        explanation: "'Hermano' to brat! 'Mayor' znaczy starszy, 'menor' młodszy. Rodzina jest fundamentem hiszpańskiej kultury. Bratem być to wielki skarb! 👨"
      },
      {
        id: "fam_2",
        question: "Mis _____ viven en el campo y tienen una granja pequeña con animales variados.",
        translation: "(Moi dziadkowie mieszkają na wsi i mają małą farmę z różnymi zwierzętami)",
        options: ["abuelos", "padres", "tíos", "hermanos"],
        correct: "abuelos",
        explanation: "'Abuelos' to dziadkowie (oboje)! Forma męska dla par mieszanych. Życie na farmie to proste i szczęśliwe. Dziadkowie są skarbnicami mądrości! 👴👵"
      },
      {
        id: "fam_3",
        question: "Mi _____ es profesora de inglés en un instituto de secundaria del barrio residencial.",
        translation: "(Moja żona jest nauczycielką angielskiego w liceum w dzielnicy mieszkalnej)",
        options: ["esposa", "madre", "hermana", "hija"],
        correct: "esposa",
        explanation: "'Esposa' to żona (formalne). Możesz też powiedzieć 'mujer' (bardziej kolokwialne). Nauczanie to szlachetny zawód. Partnerstwo wzmacnia oboje! 👩‍🏫"
      },
      {
        id: "fam_4",
        question: "Tengo dos _____ pequeñas que van a la guardería porque son aún muy jovencitas.",
        translation: "(Mam dwie małe córki, które chodzą do przedszkola, bo są jeszcze bardzo młodutkie)",
        options: ["hijas", "hermanas", "primas", "sobrinas"],
        correct: "hijas",
        explanation: "'Hijas' to córki! Żeńska forma od 'hijo' (syn). Rodzicielstwo to najpiękniejsza przygoda życia. Małe dzieci to czysty skarb! 👧"
      },
      {
        id: "fam_5",
        question: "Mi _____ político es muy simpático y se lleva muy bien con toda nuestra familia extensa.",
        translation: "(Mój szwagier jest bardzo sympatyczny i bardzo dobrze się dogaduje z całą naszą dużą rodziną)",
        options: ["cuñado", "hermano", "primo", "tío"],
        correct: "cuñado",
        explanation: "'Cuñado' to szwagier (brat małżonka)! Dodajemy 'político' dla jasności. Dobre relacje z rodziną partnera są błogosławieństwem! 🤝"
      },
      {
        id: "fam_6",
        question: "Mis _____ me malcrían mucho cuando los visito, siempre me preparan mis comidas favoritas.",
        translation: "(Moi dziadkowie bardzo mnie rozpieszczają, kiedy ich odwiedzam, zawsze przygotowują moje ulubione posiłki)",
        options: ["abuelos", "padres", "tíos", "hermanos"],
        correct: "abuelos",
        explanation: "'Abuelos' uwielbiają rozpieszczać wnuki! 'Malcriar' to trochę psuć, ale z miłością. To przywilej bycia dziadkiem. Miłość babci i dziadka jest bezwarunkowa! 💕"
      },
      {
        id: "fam_7",
        question: "Mi _____ paterna heredó la casa familiar antigua donde creció mi padre de niño.",
        translation: "(Moja ciotka ze strony ojca odziedziczyła stary rodzinny dom, gdzie mój ojciec dorastał jako dziecko)",
        options: ["tía", "madre", "abuela", "hermana"],
        correct: "tía",
        explanation: "'Tía' to ciocia! 'Paterna' oznacza ze strony ojca, 'materna' ze strony matki. Domy rodzinne niosą historie pokoleń! 🏡"
      },
      {
        id: "fam_8",
        question: "Mis _____ se casaron hace veinte años y celebraron sus bodas de porcelana con fiesta.",
        translation: "(Moi rodzice pobrali się dwadzieścia lat temu i świętowali swoje porcelanowe wesele imprezą)",
        options: ["padres", "abuelos", "tíos", "hermanos"],
        correct: "padres",
        explanation: "'Padres' to rodzice (oboje)! Dwadzieścia lat małżeństwa to wielkie osiągnięcie. W Hiszpanii rodzina celebruje każdą rocznicę! 💑"
      },
      {
        id: "fam_9",
        question: "Mi _____ menor acaba de nacer hace solo dos semanas, es muy pequeñito y adorable.",
        translation: "(Mój młodszy brat właśnie się urodził zaledwie dwa tygodnie temu, jest bardzo malutki i uroczy)",
        options: ["hermano", "hijo", "primo", "sobrino"],
        correct: "hermano",
        explanation: "'Hermano menor' to młodszy brat! 'Menor' dla różnicy wieku w rodzinie. Nowe niemowlę to radość dla całej rodziny! 👶"
      },
      {
        id: "fam_10",
        question: "Mi _____ es el hermano de mi madre y vive con su familia en otra ciudad lejana.",
        translation: "(Mój wujek jest bratem mojej mamy i mieszka z rodziną w innym odległym mieście)",
        options: ["tío", "padre", "abuelo", "primo"],
        correct: "tío",
        explanation: "'Tío' to wujek lub stryj! Brat rodziców. W Hiszpanii rodzina często jest rozproszona, ale więzi pozostają silne! 👨"
      },
      {
        id: "fam_11",
        question: "Mis _____ son los hijos de mi tío y jugábamos juntos todos los veranos felices.",
        translation: "(Moi kuzyni są dziećmi mojego wuja i bawiliśmy się razem każde szczęśliwe lato)",
        options: ["primos", "hermanos", "sobrinos", "hijos"],
        correct: "primos",
        explanation: "'Primos' to kuzyni! Dzieci twoich cioć i wujków. Letnie zabawy z kuzynami to najlepsze wspomnienia dzieciństwa! 🌞"
      },
      {
        id: "fam_12",
        question: "Mi _____ es la esposa de mi hermano y se integró perfectamente en nuestra familia grande.",
        translation: "(Moja bratowa jest żoną mojego brata i idealnie wtopiła się w naszą dużą rodzinę)",
        options: ["cuñada", "hermana", "prima", "tía"],
        correct: "cuñada",
        explanation: "'Cuñada' to bratowa lub szwagierka! Żona brata lub siostra małżonka. Przyjęcie nowych członków rodziny z otwartym sercem jest piękne! 💗"
      },
      {
        id: "fam_13",
        question: "Mis _____ son los hijos de mi hermana mayor y los adoro como si fueran míos.",
        translation: "(Moi siostrzeńcy/siostrzenice są dziećmi mojej starszej siostry i uwielbiam ich jakby byli moi)",
        options: ["sobrinos", "hijos", "primos", "nietos"],
        correct: "sobrinos",
        explanation: "'Sobrinos' to siostrzeńcy i bratankowie! Forma męska obejmuje obie płcie. Bycie ciocią/wujem to specjalna relacja - zabawa bez pełnej odpowiedzialności! 😄"
      },
      {
        id: "fam_14",
        question: "Mi _____ es el padre de mi padre y me enseñó muchas cosas importantes de la vida.",
        translation: "(Mój dziadek jest ojcem mojego ojca i nauczył mnie wielu ważnych rzeczy w życiu)",
        options: ["abuelo", "padre", "tío", "bisabuelo"],
        correct: "abuelo",
        explanation: "'Abuelo' to dziadek pojedynczo! Mądrość dziadków jest bezcenna. Ich lekcje życiowe pozostają z nami na zawsze. Tradycja się przekazuje! 👴"
      },
      {
        id: "fam_15",
        question: "Toda mi _____ se reúne cada domingo para comer juntos y compartir las noticias semanales.",
        translation: "(Cała moja rodzina zbiera się każdą niedzielę, żeby jeść razem i dzielić się tygodniowymi wiadomościami)",
        options: ["familia", "gente", "casa", "parientes"],
        correct: "familia",
        explanation: "'Familia' to rodzina jako całość! Niedzielne obiady to święta tradycja w Hiszpanii. To czas łączenia pokoleń, jedzenia i rozmów. Rodzina to wszystko! 👨‍👩‍👧‍👦"
      }
    ]
  }
};

export default part9Categories;
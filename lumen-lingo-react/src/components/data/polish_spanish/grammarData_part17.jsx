/**
 * POLISH → SPANISH GRAMMAR - PART 17
 * 4 categories, 15 questions each - Subjunctive and negatives
 */

import { Heart, Ban, HelpCircle, Link } from "lucide-react";

export const part17Categories = {
  subjunctive_with_emotions: {
    name: "Subjuntivo z emocjami",
    description: "Wyrażaj emocje używając trybu łączącego",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "subj_em_1",
        question: "Me alegro mucho de que _____ conseguido el trabajo que tanto deseabas tener.",
        translation: "(Bardzo się cieszę, że dostałeś pracę, którą tak bardzo chciałeś mieć)",
        options: ["hayas", "has", "habías", "hubieras"],
        correct: "hayas",
        explanation: "'Alegrarse de que' wymaga subjuntivo. Używamy presente perfecto subjuntivo (hayas conseguido) dla niedawnej akcji. Emocje o wydarzeniach wymagają trybu łączącego."
      },
      {
        id: "subj_em_2",
        question: "Me molesta que la gente _____ en voz alta durante las películas en el cine.",
        translation: "(Denerwuje mnie, że ludzie rozmawiają głośno podczas filmów w kinie)",
        options: ["hable", "habla", "hablará", "habló"],
        correct: "hable",
        explanation: "'Molestar que' to denerwować się czymś - wymaga subjuntivo. To reakcja emocjonalna na zachowanie, nie stwierdzenie faktu. Wszystkie emocje negatywne używają trybu łączącego."
      },
      {
        id: "subj_em_3",
        question: "Temo que mi hijo no _____ aprobar el examen porque no estudió lo suficiente.",
        translation: "(Boję się, że mój syn nie zda egzaminu, bo nie uczył się wystarczająco)",
        options: ["vaya a", "va a", "irá a", "fue a"],
        correct: "vaya a",
        explanation: "'Temer que' wyraża strach - wymaga subjuntivo. 'Vaya a aprobar' to obawa o przyszłość. Lęk i niepewność zawsze uruchamiają tryb łączący w hiszpańskim."
      },
      {
        id: "subj_em_4",
        question: "Me da pena que no _____ venir a la boda por problemas de trabajo urgentes.",
        translation: "(Szkoda mi, że nie możesz przyjść na ślub przez pilne problemy w pracy)",
        options: ["puedas", "puedes", "podrás", "podías"],
        correct: "puedas",
        explanation: "'Dar pena que' to żal, smutek - subjuntivo obowiązkowe. Wyrażenia emocjonalne z 'dar' (dar miedo, dar pena, dar rabia) zawsze wymagają trybu łączącego."
      },
      {
        id: "subj_em_5",
        question: "Nos sorprende que él _____ tan bien español sin haber vivido nunca en España.",
        translation: "(Zaskakuje nas, że on mówi tak dobrze po hiszpańsku nie mieszkając nigdy w Hiszpanii)",
        options: ["hable", "habla", "hablará", "habló"],
        correct: "hable",
        explanation: "'Sorprender que' wyraża zaskoczenie - subjuntivo wymagane. Zdziwienie to reakcja emocjonalna na nieoczekiwany fakt, więc tryb łączący pokazuje subiektywność oceny."
      },
      {
        id: "subj_em_6",
        question: "Me encanta que mis hijos _____ tanto interés en aprender idiomas extranjeros diferentes.",
        translation: "(Uwielbiałam, że moje dzieci wykazują tyle zainteresowania uczeniem się różnych obcych języków)",
        options: ["muestren", "muestran", "mostrarán", "mostraron"],
        correct: "muestren",
        explanation: "'Encantar que' to uwielbiać coś - subjuntivo konieczne. Wszystkie czasowniki typu 'gustar' (encantar, fascinar, molestar) z 'que' wymagają trybu łączącego."
      },
      {
        id: "subj_em_7",
        question: "Siento mucho que _____ enfermo y no puedas asistir a la reunión familiar importante.",
        translation: "(Bardzo mi przykro, że jesteś chory i nie możesz uczestniczyć w ważnym rodzinnym spotkaniu)",
        options: ["estés", "estás", "estarás", "estabas"],
        correct: "estés",
        explanation: "'Sentir que' wyraża współczucie - subjuntivo wymagany. Wyrażamy smutek o czyimś stanie, więc używamy trybu łączącego. To subiektywna reakcja emocjonalna."
      },
      {
        id: "subj_em_8",
        question: "Me preocupa que no _____ suficiente tiempo para terminar el proyecto antes del viernes.",
        translation: "(Martwi mnie, że nie będzie wystarczająco czasu, żeby ukończyć projekt przed piątkiem)",
        options: ["haya", "hay", "habrá", "había"],
        correct: "haya",
        explanation: "'Preocupar que' to martwić się - subjuntivo obowiązuje. Niepewność i zmartwienie wymagają trybu łączącego. 'Haya' to presente subjuntivo od 'haber'."
      },
      {
        id: "subj_em_9",
        question: "Me extraña que ella todavía no _____ llamado, normalmente es muy puntual siempre.",
        translation: "(Dziwi mnie, że ona wciąż nie zadzwoniła, normalnie jest zawsze bardzo punktualna)",
        options: ["haya", "ha", "había", "hubiera"],
        correct: "haya",
        explanation: "'Extrañar que' to dziwić się - subjuntivo wymagany. Presente perfecto subjuntivo (haya llamado) dla akcji która powinna się już wydarzyć. Zaskoczenie używa trybu łączącego."
      },
      {
        id: "subj_em_10",
        question: "Me fastidia que los vecinos _____ tanto ruido todas las noches hasta la madrugada.",
        translation: "(Irytuje mnie, że sąsiedzi robią tyle hałasu każdej nocy do świtu)",
        options: ["hagan", "hacen", "harán", "hicieron"],
        correct: "hagan",
        explanation: "'Fastidiar que' to irytować - subjuntivo konieczny. Irytacja to emocja, więc tryb łączący. Wszystkie czasowniki wyrażające irytację (fastidiar, molestar, irritar) wymagają subjuntivo."
      },
      {
        id: "subj_em_11",
        question: "Nos entristece que muchas tradiciones culturales antiguas _____ desapareciendo poco a poco.",
        translation: "(Zasmuca nas, że wiele starych tradycji kulturowych znika powoli)",
        options: ["estén", "están", "estarán", "estaban"],
        correct: "estén",
        explanation: "'Entristecer que' wyraża smutek - subjuntivo wymagany. 'Estén desapareciendo' to presente subjuntivo z gerundio. Proces trwający w opinii emocjonalnej wymaga trybu łączącego."
      },
      {
        id: "subj_em_12",
        question: "Me da miedo que _____ algún accidente en esa carretera peligrosa de montaña.",
        translation: "(Boję się, że będzie jakiś wypadek na tej niebezpiecznej górskiej drodze)",
        options: ["haya", "hay", "habrá", "había"],
        correct: "haya",
        explanation: "'Dar miedo que' to bać się - subjuntivo obowiązkowy. Strach przed możliwym wydarzeniem używa trybu łączącego. 'Haya' wyraża obawę o coś, co może się zdarzyć."
      },
      {
        id: "subj_em_13",
        question: "Espero que no te _____ mal lo que voy a decirte sobre la situación actual.",
        translation: "(Mam nadzieję, że nie weźmiesz źle tego, co zamierzam ci powiedzieć o obecnej sytuacji)",
        options: ["siente", "sientes", "sentirás", "sentiste"],
        correct: "siente",
        explanation: "'Esperar que' wymaga subjuntivo dla nadziei. 'Tomarse a mal' to obrazić się, ale w konstrukcji używamy 'sentir mal'. Nadzieja to niepewność, więc tryb łączący."
      },
      {
        id: "subj_em_14",
        question: "Me irrita enormemente que él siempre _____ tarde a todas nuestras citas importantes.",
        translation: "(Ogromnie mnie irytuje, że on zawsze spóźnia się na wszystkie nasze ważne spotkania)",
        options: ["llegue", "llega", "llegará", "llegó"],
        correct: "llegue",
        explanation: "'Irritar que' to irytować - subjuntivo wymagany. Powtarzające się zachowanie które wywołuje emocję nadal używa trybu łączącego. To subiektywna reakcja, nie obiektywny fakt."
      },
      {
        id: "subj_em_15",
        question: "Les sorprendió que nosotros ya _____ terminado todo el trabajo antes de la fecha límite.",
        translation: "(Zaskoczyło ich, że my już skończyliśmy całą pracę przed terminem ostatecznym)",
        options: ["hubiéramos", "habíamos", "hemos", "hubimos"],
        correct: "hubiéramos",
        explanation: "'Sorprender que' w przeszłości używa imperfecto subjuntivo. 'Hubiéramos terminado' to tryb łączący zaprzeszły. Ich zaskoczenie w przeszłości wymaga odpowiedniej formy subjuntivo."
      }
    ]
  },

  double_negatives: {
    name: "Podwójne przeczenia",
    description: "Opanuj hiszpańskie konstrukcje przeczące",
    icon: Ban,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    questions: [
      {
        id: "neg_1",
        question: "No he visto _____ a tu hermano en la oficina hoy durante todo el día.",
        translation: "(Nie widziałem wcale twojego brata w biurze dziś przez cały dzień)",
        options: ["nunca", "nada", "nadie", "ninguno"],
        correct: "nunca",
        explanation: "'No... nunca' to podwójne przeczenie (nigdy). W hiszpańskim dwa przeczenia wzmacniają się, nie anulują. To normalna konstrukcja, w przeciwieństwie do polskiego gdzie 'nie nigdy' byłoby błędem."
      },
      {
        id: "neg_2",
        question: "No queda _____ en la nevera, tenemos que ir al supermercado urgentemente.",
        translation: "(Nie zostało nic w lodówce, musimy pilnie iść do supermarketu)",
        options: ["nada", "nadie", "ninguno", "nunca"],
        correct: "nada",
        explanation: "'No... nada' to nic. 'Nada' odnosi się do rzeczy, 'nadie' do osób. Możemy też powiedzieć 'Nada queda' (bez 'no'), ale 'No queda nada' jest bardziej powszechne."
      },
      {
        id: "neg_3",
        question: "No conozco a _____ en esta fiesta, todos son desconocidos para mí completamente.",
        translation: "(Nie znam nikogo na tej imprezie, wszyscy są dla mnie całkowicie obcy)",
        options: ["nadie", "nada", "ninguno", "nunca"],
        correct: "nadie",
        explanation: "'No... nadie' to nikt. 'Nadie' zawsze dla osób. Gdy 'nadie' jest dopełnieniem bliższym osoby, potrzebujemy 'a' (conocer a nadie)."
      },
      {
        id: "neg_4",
        question: "No tengo _____ ganas de salir esta noche, prefiero quedarme en casa descansando.",
        translation: "(Nie mam żadnej ochoty wychodzić dziś wieczorem, wolę zostać w domu odpoczywając)",
        options: ["ningunas", "algunas", "pocas", "muchas"],
        correct: "ningunas",
        explanation: "'No... ningun(as)' to żaden/żadna. 'Ganas' jest zawsze mnoga, więc 'ningunas'. Podwójne przeczenie 'no...ninguno' jest standardem w hiszpańskim dla całkowitego zaprzeczenia."
      },
      {
        id: "neg_5",
        question: "_____ he estado en ese restaurante nuevo, ¿está bien la comida que sirven?",
        translation: "(Nigdy nie byłem w tej nowej restauracji, czy jedzenie, które serwują, jest dobre?)",
        options: ["Nunca", "Jamás", "No", "Tampoco"],
        correct: "Nunca",
        explanation: "'Nunca' na początku zdania nie wymaga 'no'. Gdy negatyw zaczyna zdanie, nie dodajemy drugiego przeczenia. 'Nunca he estado' = 'No he estado nunca' (obie poprawne)."
      },
      {
        id: "neg_6",
        question: "No viene _____ a visitarnos desde que se mudó a vivir en otra ciudad lejana.",
        translation: "(Nikt nie przychodzi nas odwiedzać odkąd przeprowadził się do innego odległego miasta)",
        options: ["nadie", "nada", "ninguno", "nunca"],
        correct: "nadie",
        explanation: "'No viene nadie' to nikt nie przychodzi. Możemy też 'Nadie viene' (bez 'no'). Obie formy są równoważne - wybór zależy od pozycji słowa negatywnego."
      },
      {
        id: "neg_7",
        question: "No quiero _____ de comer ahora, he almorzado hace apenas una hora atrás.",
        translation: "(Nie chcę nic jeść teraz, zjadłem lunch zaledwie godzinę temu)",
        options: ["nada", "nadie", "ninguno", "nunca"],
        correct: "nada",
        explanation: "'No quiero nada' to nie chcę nic. 'Nada de comer' to nic do jedzenia. 'Nada de' to konstrukcja oznaczająca 'nic z' danej kategorii."
      },
      {
        id: "neg_8",
        question: "Tampoco _____ gusta a mí ese tipo de música, prefiero algo más tranquilo y relajante.",
        translation: "(Mnie też się nie podoba ten typ muzyki, wolę coś spokojniejszego i relaksującego)",
        options: ["me", "te", "le", "nos"],
        correct: "me",
        explanation: "'Tampoco' to też nie. Już zawiera przeczenie, więc nie dodajemy 'no'. 'Tampoco me gusta' = A mí tampoco = Mnie też nie. To zgoda z poprzednim przeczeniem."
      },
      {
        id: "neg_9",
        question: "No he recibido _____ llamada ni mensaje suyo en toda la semana pasada entera.",
        translation: "(Nie otrzymałem żadnego telefonu ani wiadomości od niego przez cały zeszły tydzień)",
        options: ["ninguna", "alguna", "una", "cualquiera"],
        correct: "ninguna",
        explanation: "'No... ninguna' to żadna (dla rzeczy żeńskich). 'Llamada' jest żeńska, więc 'ninguna'. 'Ningún' przed rzeczownikiem męskim, 'ninguna' przed żeńskim."
      },
      {
        id: "neg_10",
        question: "_____ podemos hacer nada para cambiar el pasado, solo aprender de los errores cometidos.",
        translation: "(Nie możemy nic zrobić, żeby zmienić przeszłość, tylko uczyć się z popełnionych błędów)",
        options: ["No", "Nunca", "Nadie", "Nada"],
        correct: "No",
        explanation: "'No podemos hacer nada' używa 'no' + czasownik + 'nada'. Gdyby było 'Nada podemos hacer', nie potrzebowalibyśmy 'no'. Pozycja elementu negatywnego zmienia konstrukcję."
      },
      {
        id: "neg_11",
        question: "No tengo _____ idea de dónde puse las llaves del coche esta mañana.",
        translation: "(Nie mam żadnego pojęcia gdzie położyłem klucze do samochodu dziś rano)",
        options: ["ninguna", "alguna", "cualquier", "otra"],
        correct: "ninguna",
        explanation: "'No tengo ninguna idea' to nie mam pojęcia. 'Ninguna idea' to ustalona fraza. 'Idea' jest żeńska, więc 'ninguna', nie 'ningún'."
      },
      {
        id: "neg_12",
        question: "_____ me ha llamado mientras estaba fuera, no hay mensajes en el contestador automático.",
        translation: "(Nikt mi nie zadzwonił, podczas gdy byłem poza domem, nie ma wiadomości na automatycznej sekretarce)",
        options: ["Nadie", "Nada", "Ninguno", "Nunca"],
        correct: "Nadie",
        explanation: "'Nadie' na początku nie wymaga 'no'. 'Nadie me ha llamado' = 'No me ha llamado nadie'. Pierwsza forma jest bardziej emfatyczna i bezpośrednia."
      },
      {
        id: "neg_13",
        question: "No encuentro mis gafas en _____ parte, las he buscado por toda la casa.",
        translation: "(Nie mogę znaleźć moich okularów nigdzie, szukałem ich po całym domu)",
        options: ["ninguna", "alguna", "cualquier", "otra"],
        correct: "ninguna",
        explanation: "'En ninguna parte' to nigdzie (w żadnym miejscu). 'Parte' jest żeńska, więc 'ninguna'. To idiomatyczne wyrażenie oznaczające całkowity brak lokalizacji."
      },
      {
        id: "neg_14",
        question: "_____ iré a esa reunión, no me interesa nada lo que van a discutir allí.",
        translation: "(Nigdy nie pójdę na to spotkanie, wcale mnie nie interesuje to, co będą tam dyskutować)",
        options: ["Jamás", "Nunca", "No", "Nadie"],
        correct: "Jamás",
        explanation: "'Jamás' to nigdy (silniejsze niż 'nunca'). Bardziej kategoryczne i emocjonalne. Używamy dla absolutnych odmów. Na początku zdania nie potrzebuje 'no'."
      },
      {
        id: "neg_15",
        question: "No me importa _____ lo que digan los demás sobre mis decisiones personales de vida.",
        translation: "(Nie obchodzi mnie wcale to, co mówią inni o moich osobistych życiowych decyzjach)",
        options: ["nada", "nadie", "ninguno", "nunca"],
        correct: "nada",
        explanation: "'No me importa nada' to wcale mnie nie obchodzi. 'Nada' wzmacnia negację - absolutna obojętność. To konstrukcja emocjonalna pokazująca całkowity brak zainteresowania."
      }
    ]
  },

  indefinite_pronouns: {
    name: "Zaimki nieokreślone",
    description: "Używaj algo, alguien, alguno poprawnie",
    icon: HelpCircle,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "indef_1",
        question: "¿Hay _____ en casa? Llamo desde hace rato pero nadie contesta el teléfono.",
        translation: "(Czy ktoś jest w domu? Dzwonię od chwili, ale nikt nie odbiera telefonu)",
        options: ["alguien", "algo", "alguno", "algún"],
        correct: "alguien",
        explanation: "'Alguien' to ktoś (nieokreślona osoba). Używamy dla osób, 'algo' dla rzeczy. W pytaniach 'alguien' wyraża nadzieję na pozytywną odpowiedź."
      },
      {
        id: "indef_2",
        question: "¿Quieres _____ de beber? Tengo agua, zumo y refrescos en la nevera fría.",
        translation: "(Czy chcesz coś do picia? Mam wodę, sok i napoje gazowane w zimnej lodówce)",
        options: ["algo", "alguien", "alguno", "algún"],
        correct: "algo",
        explanation: "'Algo' to coś (nieokreślona rzecz). 'Algo de beber' to coś do picia - standardowa fraza. 'Algo de + infinitivo' to powszechna konstrukcja dla oferty."
      },
      {
        id: "indef_3",
        question: "Necesito _____ libro sobre historia española para mi investigación universitaria, cualquiera servirá.",
        translation: "(Potrzebuję jakiejś książki o historii hiszpańskiej do mojego badania uniwersyteckiego, każda się przyda)",
        options: ["algún", "alguno", "algo", "alguien"],
        correct: "algún",
        explanation: "'Algún' przed rzeczownikiem męskim singular. Gubi 'o' przed rzeczownikiem (alguno→algún). 'Algún libro' to jakaś książka. Przed rzeczownikiem używamy krótkiej formy."
      },
      {
        id: "indef_4",
        question: "Si tienes _____ problema con el ejercicio, pregúntame sin dudarlo ni un momento.",
        translation: "(Jeśli masz jakiś problem z ćwiczeniem, zapytaj mnie bez wahania ani chwili)",
        options: ["algún", "alguno", "algo", "alguien"],
        correct: "algún",
        explanation: "'Algún problema' (męski). 'Algún' przed rzeczownikiem męskim. W zdaniach warunkowych 'algún' wyraża możliwość istnienia czegoś."
      },
      {
        id: "indef_5",
        question: "¿_____ de vosotros sabe dónde está la llave del garaje comunitario del edificio?",
        translation: "(Czy któryś z was wie gdzie jest klucz do wspólnego garażu budynku?)",
        options: ["Alguno", "Alguien", "Algo", "Algún"],
        correct: "Alguno",
        explanation: "'Alguno de' to któryś z (grupy). Samodzielnie (bez rzeczownika po) używamy pełnej formy 'alguno'. 'Alguno de vosotros' to standardowe pytanie do grupy."
      },
      {
        id: "indef_6",
        question: "¿Has comprado _____ para la cena de esta noche o pido comida a domicilio?",
        translation: "(Czy kupiłeś coś na dzisiejszą kolację czy zamówię jedzenie do domu?)",
        options: ["algo", "alguien", "alguno", "algún"],
        correct: "algo",
        explanation: "'Algo' dla rzeczy nieokreślonych. W pytaniach 'algo' zakłada możliwą pozytywną odpowiedź. To różni się od 'nada' które zakłada negację."
      },
      {
        id: "indef_7",
        question: "Si ves a _____ sospechoso cerca de la casa, llama inmediatamente a la policía local.",
        translation: "(Jeśli zobaczysz kogoś podejrzanego blisko domu, zadzwoń natychmiast do lokalnej policji)",
        options: ["alguien", "algo", "alguno", "algún"],
        correct: "alguien",
        explanation: "'Alguien sospechoso' to ktoś podejrzany. 'Alguien' + przymiotnik dla nieokreślonej osoby z charakterystyką. Przymiotnik idzie po 'alguien', nie przed."
      },
      {
        id: "indef_8",
        question: "No tengo _____ hermano, soy hijo único en mi familia pequeña nuclear.",
        translation: "(Nie mam żadnego brata, jestem jedynakiem w mojej małej rodzinie nuklearnej)",
        options: ["ningún", "ninguno", "no", "nada"],
        correct: "ningún",
        explanation: "'Ningún' przed rzeczownikiem męskim (ninguno→ningún). 'Ningún hermano' to żaden brat. Apokopa (utrata 'o') dzieje się przed rzeczownikami jak w 'algún'."
      },
      {
        id: "indef_9",
        question: "¿Conoces _____ restaurante bueno cerca de aquí donde sirvan comida vegetariana variada?",
        translation: "(Czy znasz jakąś dobrą restaurację blisko stąd, gdzie serwują zróżnicowaną wegetariańską kuchnię?)",
        options: ["algún", "alguno", "algo", "alguien"],
        correct: "algún",
        explanation: "'Algún restaurante' (męski). 'Algún' + przymiotnik + rzeczownik to typowa konstrukcja. Przymiotnik może iść między 'algún' a rzeczownikiem."
      },
      {
        id: "indef_10",
        question: "No hay _____ razón válida para comportarse de esa manera tan grosera e irrespetuosa.",
        translation: "(Nie ma żadnego ważnego powodu, żeby zachowywać się w ten tak niegrzeczny i lekceważący sposób)",
        options: ["ninguna", "alguna", "una", "cierta"],
        correct: "ninguna",
        explanation: "'Ninguna razón' to żaden powód (żeński). 'No hay ninguna' to podwójne przeczenie dla całkowitego zaprzeczenia istnienia. Wzmacnia kategoryczność stwierdzenia."
      },
      {
        id: "indef_11",
        question: "Si necesitas _____ más, no dudes en pedírmelo sin ningún tipo de vergüenza.",
        translation: "(Jeśli potrzebujesz czegoś więcej, nie wahaj się mnie poprosić bez żadnego rodzaju wstydu)",
        options: ["algo", "alguien", "alguno", "algún"],
        correct: "algo",
        explanation: "'Algo más' to coś więcej. 'Más' po 'algo' tworzy otwartą ofertę pomocy. To grzeczna forma pokazująca gotowość do dalszego wsparcia."
      },
      {
        id: "indef_12",
        question: "No conozco _____ de esos lugares turísticos que mencionaste en tu presentación ayer.",
        translation: "(Nie znam żadnego z tych miejsc turystycznych, które wymieniłeś w swojej prezentacji wczoraj)",
        options: ["ninguno", "nadie", "nada", "ningún"],
        correct: "ninguno",
        explanation: "'Ninguno de' to żaden z (grupy). Samodzielnie bez rzeczownika używamy pełnej formy 'ninguno'. To odnosi się do miejsctym więc rzecz, nie osoba."
      },
      {
        id: "indef_13",
        question: "¿Has visto _____ película buena últimamente que puedas recomendarme para ver este fin de semana?",
        translation: "(Czy widziałeś ostatnio jakiś dobry film, który mógłbyś mi polecić do obejrzenia w ten weekend?)",
        options: ["alguna", "algo", "alguien", "algún"],
        correct: "alguna",
        explanation: "'Alguna película' (żeński). Przed rzeczownikiem żeńskim używamy pełnej formy 'alguna', nie skracanej. Tylko męskie mają apokopę (algún)."
      },
      {
        id: "indef_14",
        question: "No me queda _____ duda sobre el tema después de tu explicación detallada y clara.",
        translation: "(Nie pozostała mi żadna wątpliwość co do tematu po twoim szczegółowym i jasnym wyjaśnieniu)",
        options: ["ninguna", "alguna", "una", "cierta"],
        correct: "ninguna",
        explanation: "'Ninguna duda' to żadna wątpliwość (żeński). 'No... ninguna' podwójnie przeczy dla emfazy. To pokazuje całkowite zrozumienie tematu."
      },
      {
        id: "indef_15",
        question: "Si _____ te pregunta por mí, dile que volveré en una hora aproximadamente más o menos.",
        translation: "(Jeśli ktoś pyta o mnie, powiedz że wrócę w około godzinę mniej więcej)",
        options: ["alguien", "algo", "alguno", "algún"],
        correct: "alguien",
        explanation: "'Si alguien pregunta' to jeśli ktoś zapyta. W zdaniach warunkowych 'alguien' wyraża hipotetyczną osobę. To typowa instrukcja pozostawiana przed wyjściem."
      }
    ]
  },

  relative_pronouns: {
    name: "Zaimki względne",
    description: "Łącz zdania używając que, quien, cual",
    icon: Link,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "rel_1",
        question: "El libro _____ te recomendé la semana pasada es realmente fascinante y educativo.",
        translation: "(Książka, którą ci poleciłem w zeszłym tygodniu, jest naprawdę fascynująca i edukacyjna)",
        options: ["que", "quien", "cual", "donde"],
        correct: "que",
        explanation: "'Que' to najbardziej uniwersalny zaimek względny. Używamy dla rzeczy i osób jako dopełnienie. 'El libro que...' łączy dwa zdania: 'Mam książkę' + 'Poleciłem książkę'."
      },
      {
        id: "rel_2",
        question: "La mujer con _____ hablaba ayer es la nueva directora del departamento de marketing.",
        translation: "(Kobieta, z którą rozmawiałem wczoraj, jest nową dyrektorką działu marketingu)",
        options: ["quien", "que", "la que", "cual"],
        correct: "quien",
        explanation: "'Quien' po przyimku dla osób. 'Con quien' to z kim. 'Que' byłoby możliwe ale 'quien' jest bardziej eleganckie po przyimkach. Tylko dla ludzi, nie rzeczy."
      },
      {
        id: "rel_3",
        question: "La ciudad en _____ nací tiene menos de cincuenta mil habitantes actualmente.",
        translation: "(Miasto, w którym się urodziłem, ma aktualnie mniej niż pięćdziesiąt tysięcy mieszkańców)",
        options: ["la que", "que", "quien", "cual"],
        correct: "la que",
        explanation: "'En la que' dla miejsc z przyimkiem. 'En' wymaga rodzajnika przed 'que'. 'La ciudad' jest żeńska, więc 'la que'. Przyimek + artykuł + que to forma standardowa."
      },
      {
        id: "rel_4",
        question: "Los estudiantes _____ aprobaron el examen recibirán un certificado oficial de la universidad.",
        translation: "(Studenci, którzy zdali egzamin, otrzymają oficjalny certyfikat z uniwersytetu)",
        options: ["que", "quienes", "los que", "cuales"],
        correct: "que",
        explanation: "'Que' jako podmiot (którzy). Najbardziej powszechne dla osób jako podmiot. 'Quienes' też poprawne ale bardziej formalne. 'Que' jest uniwersalne i naturalne."
      },
      {
        id: "rel_5",
        question: "Esa es la razón por _____ decidí cambiar de trabajo y buscar nuevas oportunidades mejores.",
        translation: "(To jest powód, dla którego zdecydowałem się zmienić pracę i szukać lepszych nowych możliwości)",
        options: ["la cual", "que", "la que", "quien"],
        correct: "la cual",
        explanation: "'Por la cual' to dla której (formalnie). Po 'por' możemy używać 'la que' lub 'la cual'. 'La cual' jest bardziej formalne i preferowane po przyimkach złożonych."
      },
      {
        id: "rel_6",
        question: "El médico a _____ consulté me recomendó hacer más ejercicio regularmente cada semana.",
        translation: "(Lekarz, którego skonsultowałem, zalecił mi regularnie więcej ćwiczyć każdego tygodnia)",
        options: ["quien", "que", "el que", "cual"],
        correct: "quien",
        explanation: "'A quien' dla osób jako dopełnienie po przyimku. 'Consultar a' wymaga 'a', więc 'a quien'. Elegancka forma dla profesjonalistów (lekarze, prawnicy)."
      },
      {
        id: "rel_7",
        question: "Ese es el restaurante en _____ comí la mejor paella valenciana de mi vida entera.",
        translation: "(To jest restauracja, w której zjadłem najlepszą paellę walencjańską w całym moim życiu)",
        options: ["el que", "que", "donde", "cual"],
        correct: "el que",
        explanation: "'En el que' dla miejsc z przyimkiem. 'Donde' też możliwe i bardziej proste. 'El restaurante' męski wymaga 'el que'. Obie formy (en el que / donde) są poprawne."
      },
      {
        id: "indef_8",
        question: "Hay personas _____ nunca están satisfechas con nada de lo que tienen en la vida.",
        translation: "(Są osoby, które nigdy nie są zadowolone z niczego, co mają w życiu)",
        options: ["que", "quienes", "las que", "cuales"],
        correct: "que",
        explanation: "'Que' dla opisywania typu osób ogólnie. Bez rodzajnika gdy mówimy o kategorii ludzi, nie konkretnych osobach. 'Personas que...' to standardowa konstrukcja."
      },
      {
        id: "rel_9",
        question: "El proyecto sobre _____ hemos estado trabajando todo el año ya está casi terminado completamente.",
        translation: "(Projekt, nad którym pracowaliśmy cały rok, jest już prawie całkowicie ukończony)",
        options: ["el que", "que", "el cual", "quien"],
        correct: "el que",
        explanation: "'Sobre el que' to nad którym. Przyimek wymaga rodzajnika. 'El proyecto' męski, więc 'el que'. 'El cual' też poprawne ale mniej używane."
      },
      {
        id: "rel_10",
        question: "Aquella fue la época en _____ todo parecía posible y los sueños parecían cercanos.",
        translation: "(Tamto była epoka, w której wszystko wydawało się możliwe i marzenia wydawały się bliskie)",
        options: ["la que", "que", "la cual", "donde"],
        correct: "la que",
        explanation: "'En la que' dla okresów czasu. 'La época' żeńska wymaga 'la que'. Dla czasu też możemy użyć 'cuando', ale 'en la que' jest bardziej literackie."
      },
      {
        id: "rel_11",
        question: "Esos son los vecinos de _____ te hablé, los que organizan fiestas ruidosas cada fin de semana.",
        translation: "(To są sąsiedzi, o których ci mówiłem, ci którzy organizują głośne imprezy każdy weekend)",
        options: ["quienes", "que", "los que", "cuales"],
        correct: "quienes",
        explanation: "'De quienes' po przyimku dla osób mnoga. 'Hablar de alguien' wymaga 'de', więc 'de quienes'. Możliwe też 'de los que', ale 'quienes' jest czystsze."
      },
      {
        id: "rel_12",
        question: "La empresa para _____ trabajo actualmente tiene más de mil empleados en todo el mundo.",
        translation: "(Firma, dla której aktualnie pracuję, ma ponad tysiąc pracowników na całym świecie)",
        options: ["la que", "que", "la cual", "quien"],
        correct: "la que",
        explanation: "'Para la que' po przyimku. 'Trabajar para' wymaga przyimka, więc nie może być samo 'que'. 'La empresa' żeńska wymaga 'la' przed 'que'."
      },
      {
        id: "rel_13",
        question: "Te presento a mi amiga, _____ te hablé tanto, la que vive en Barcelona desde hace años.",
        translation: "(Przedstawiam ci moją przyjaciółkę, o której ci tyle mówiłem, tę która mieszka w Barcelonie od lat)",
        options: ["de quien", "de que", "quien", "que"],
        correct: "de quien",
        explanation: "'De quien' bo 'hablar de alguien'. Przyimek 'de' przenosi się przed zaimek. 'De quien te hablé' to o której ci mówiłem - przyimek jest kluczowy dla znaczenia."
      },
      {
        id: "rel_14",
        question: "El motivo por _____ no vine a la reunión fue que estuve enfermo con fiebre alta.",
        translation: "(Powód, dla którego nie przyszedłem na spotkanie, był taki że byłem chory z wysoką gorączką)",
        options: ["el que", "que", "el cual", "quien"],
        correct: "el que",
        explanation: "'Por el que' to dla którego (powód). 'El motivo' męski wymaga 'el'. 'Por el cual' też poprawne. Obie formy formalne i wymienne po złożonych przyimkach."
      },
      {
        id: "rel_15",
        question: "Todos _____ asistieron al evento recibieron un regalo especial de agradecimiento recordatorio.",
        translation: "(Wszyscy, którzy uczestniczyli w wydarzeniu, otrzymali specjalny prezent z podziękowaniem pamiątkowy)",
        options: ["los que", "que", "quienes", "cuales"],
        correct: "los que",
        explanation: "'Todos los que' to wszyscy którzy. Rodzajnik 'los' jest potrzebny po 'todos'. 'Quienes' możliwe też, ale 'los que' jest bardziej powszechne i naturalne."
      }
    ]
  }
};

export default part17Categories;
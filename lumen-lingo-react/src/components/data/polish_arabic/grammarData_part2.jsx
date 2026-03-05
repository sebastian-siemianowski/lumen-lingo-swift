/**
 * POLISH → ARABIC GRAMMAR - PART 2 (REFINED - NO EXCLAMATIONS)
 * Past Tense & Pronouns
 */

import { History, Users } from "lucide-react";

export const part2Categories = {
  past_tense: {
    name: "Czas przeszły",
    description: "الماضي",
    level: "intermediate",
    icon: History,
    color: "from-amber-400 to-orange-500",
    questions: [
      {
        id: "pa_past1",
        question: "أنا _____ إلى المدرسة.",
        translation: "(Poszedłem do szkoły)",
        options: ["ذهبتُ", "تذهب", "يذهب", "ذهب"],
        correct: "ذهبتُ",
        explanation: "Witaj w arabskim czasie przeszłym. W przeciwieństwie do teraźniejszego, który używa prefiksów, przeszły dodaje sufiksy do rdzenia. 'ذهب' (dhahaba) to rdzeń 'iść'. Dla 'ja' dodajesz تُ (tu): ذهبتُ. To jak polski system - zakończenia pokazują osobę. Arabski czas przeszły jest bardzo regularny i przewidywalny. Każda osoba ma swoje zakończenie, które łatwo zapamiętać. System jest logiczny i spójny."
      },
      {
        id: "pa_past2",
        question: "أنتَ _____ القهوة.",
        translation: "(Piłeś kawę - do mężczyzny)",
        options: ["شربتَ", "شربتُ", "شرب", "تشرب"],
        correct: "شربتَ",
        explanation: "Dla 'ty' (mężczyzna) dodajesz تَ (ta) do rdzenia. 'شرب' to 'pić', więc شربتَ = piłeś. Arabski rozróżnia rodzaj w drugiej osobie - شربتَ dla mężczyzny, شربتِ dla kobiety. To podobne do polskiego 'piłeś/piłaś'. Ta precyzja rodzajowa jest głęboko wbudowana w arabski. Kawa w kulturze arabskiej to rytuał społeczny, symbol gościnności."
      },
      {
        id: "pa_past3",
        question: "هو _____ الكتاب.",
        translation: "(On przeczytał książkę)",
        options: ["قرأ", "قرأتُ", "تقرأ", "يقرأ"],
        correct: "قرأ",
        explanation: "Trzecia osoba męska to czysta forma rdzenia bez dodatkowych zakończeń. 'قرأ' (qara'a) = on przeczytał. To forma podstawowa, najkrótsza. Polski też ma prostą formę trzeciej osoby 'on czytał'. Arabski rdzeń sam w sobie wyraża trzecią osobę męską przeszłą. Ta prostota jest elegancka. Czytanie książek to okno do światów wiedzy i wyobrażeń."
      },
      {
        id: "pa_past4",
        question: "هي _____ الطعام.",
        translation: "(Ona zjadła jedzenie)",
        options: ["أكلتْ", "أكل", "أكلتُ", "تأكل"],
        correct: "أكلتْ",
        explanation: "Dla 'ona' dodajesz تْ (at) do rdzenia. 'أكل' to 'jeść', więc أكلتْ = ona zjadła. To تْ wymawia się bardzo krótko, prawie niesłyszalnie. Polski podobnie rozróżnia 'on zjadł' i 'ona zjadła'. Arabski konsekwentnie oznacza rodzaj we wszystkich czasach. Jedzenie łączy ludzi - wspólne posiłki to fundament kultury."
      },
      {
        id: "pa_past5",
        question: "نحن _____ العمل.",
        translation: "(Skończyliśmy pracę)",
        options: ["أنهينا", "أنهى", "تنهي", "ينهي"],
        correct: "أنهينا",
        explanation: "Dla 'my' dodajesz نا (na) do rdzenia. 'أنهى' to 'kończyć', więc أنهينا = skończyliśmy. Polski 'skończyliśmy' też ma wyraźne zakończenie -śmy. Arabski نا jest równie wyraźny. Zakończenie pracy to satysfakcjonujące uczucie - zadanie wykonane, cel osiągnięty. Współpraca czyni wielkie rzeczy możliwymi."
      },
      {
        id: "pa_past6",
        question: "أنتم _____ الدرس.",
        translation: "(Nauczyliście się lekcji - do mężczyzn)",
        options: ["تعلمتم", "تعلمنا", "تعلم", "يتعلم"],
        correct: "تعلمتم",
        explanation: "Dla 'wy' (mnogi męski) dodajesz تم (tum). 'تعلم' to 'uczyć się', więc تعلمتم = nauczyliście się. Polski 'nauczyliście się' ma -ście. Arabski تم dla grupy mężczyzn lub mieszanej. Dla samych kobiet użyjesz تنّ. Nauka to podróż przez całe życie - każda lekcja buduje zrozumienie."
      },
      {
        id: "pa_past7",
        question: "هم _____ اللعبة.",
        translation: "(Oni zagrali w grę)",
        options: ["لعبوا", "لعب", "تلعب", "يلعب"],
        correct: "لعبوا",
        explanation: "Dla 'oni' dodajesz وا (u). 'لعب' to 'grać', więc لعبوا = oni zagrali. Polski 'zagrali' to podobna forma mnoga. Arabski وا jest konsekwentny dla trzeciej osoby mnogiej męskiej. Gry łączą ludzi, uczą strategii i współpracy. Zabawa jest ważna w każdym wieku."
      },
      {
        id: "pa_past8",
        question: "أنا _____ المعلم.",
        translation: "(Byłem nauczycielem)",
        options: ["كنتُ", "كان", "تكون", "يكون"],
        correct: "كنتُ",
        explanation: "'كان' (kana) to 'być' w przeszłości - jeden z najważniejszych czasowników. Dla 'ja': كنتُ = byłem. 'Być' to fundament opisu stanów przeszłych. Nauczyciele kształtują przyszłość - ich wpływ trwa przez pokolenia. Bycie nauczycielem to zaszczytna rola w społeczeństwie."
      },
      {
        id: "pa_past9",
        question: "أنتِ _____ جميلة.",
        translation: "(Byłaś piękna - do kobiety)",
        options: ["كنتِ", "كنتُ", "كان", "كانت"],
        correct: "كنتِ",
        explanation: "Dla 'ty' (kobieta) w przeszłości: كنتِ. 'كان' + تِ dla drugiej osoby żeńskiej. Polski 'byłaś' też oznacza rodzaj. Piękno jest w oczach patrzącego - każda osoba ma swoją unikalną piękność. Komplementy budują pewność siebie i dobre relacje."
      },
      {
        id: "pa_past10",
        question: "هو _____ سعيداً.",
        translation: "(On był szczęśliwy)",
        options: ["كان", "كانت", "كنتُ", "يكون"],
        correct: "كان",
        explanation: "Trzecia osoba męska 'كان' to podstawowa forma. 'Był szczęśliwy' opisuje stan emocjonalny w przeszłości. Szczęście to ważne uczucie - wspomnienia szczęśliwych chwil rozgrzewają serce. Arabski konsekwentnie używa كان dla stanów przeszłych."
      },
      {
        id: "pa_past11",
        question: "هي _____ في البيت.",
        translation: "(Ona była w domu)",
        options: ["كانت", "كان", "كنتُ", "تكون"],
        correct: "كانت",
        explanation: "Dla 'ona' używasz كانت (kanat). Dodatkowe ت oznacza rodzaj żeński. Dom to miejsce bezpieczeństwa i ciepła. Być w domu to często oznacza odpoczynek i relaks. Arabski precyzyjnie oznacza rodzaj we wszystkich formach كان."
      },
      {
        id: "pa_past12",
        question: "نحن _____ أصدقاء.",
        translation: "(Byliśmy przyjaciółmi)",
        options: ["كنّا", "كان", "كانوا", "تكون"],
        correct: "كنّا",
        explanation: "Dla 'my': كنّا (kunna). Przyjaźń w przeszłości niesie wspomnienia wspólnych doświadczeń. Przyjaciele to skarb życia - wspierają nas w trudnych chwilach. Bycie przyjacielem to wzajemne zaufanie i troska."
      },
      {
        id: "pa_past13",
        question: "أنتم _____ طلاباً.",
        translation: "(Byliście studentami - do mężczyzn)",
        options: ["كنتم", "كنا", "كان", "كانوا"],
        correct: "كنتم",
        explanation: "Dla 'wy' (męski): كنتم. Bycie studentem to czas intensywnej nauki i rozwoju. Studentci to przyszłość społeczeństwa - ich wiedza i energia budują jutro. Edukacja otwiera drzwi do możliwości."
      },
      {
        id: "pa_past14",
        question: "هم _____ مشغولين.",
        translation: "(Oni byli zajęci)",
        options: ["كانوا", "كان", "كنا", "تكون"],
        correct: "كانوا",
        explanation: "Dla 'oni': كانوا (kanu). Zajętość to część współczesnego życia. Być zajętym może oznaczać produktywność, ale ważna jest też równowaga. Arabski وا dla trzeciej osoby mnogiej jest konsekwentny i przewidywalny."
      },
      {
        id: "pa_past15",
        question: "أنتنّ _____ معلمات.",
        translation: "(Byłyście nauczycielkami - do kobiet)",
        options: ["كنتنّ", "كنتم", "كنا", "كانوا"],
        correct: "كنتنّ",
        explanation: "Dla 'wy' (wyłącznie kobiety): كنتنّ. Ta forma jest używana gdy zwracasz się do grupy samych kobiet. Polski nie rozróżnia tego tak precyzyjnie. Nauczycielki mają ogromny wpływ na życie uczniów - inspirują, motywują, wspierają. Edukacja to dar przekazywany z pokolenia na pokolenie."
      }
    ]
  },

  pronouns: {
    name: "Zaimki osobowe",
    description: "الضمائر الشخصية",
    level: "intermediate",
    icon: Users,
    color: "from-green-400 to-emerald-500",
    questions: [
      {
        id: "pa_pr1",
        question: "_____ طالب.",
        translation: "(Ja jestem studentem)",
        options: ["أنا", "أنتَ", "هو", "نحن"],
        correct: "أنا",
        explanation: "أنا (ana) to zaimek pierwszej osoby - 'ja'. W arabskim zaimki są używane dla podkreślenia, bo czasownik już wskazuje osobę. أنا طالب = ja jestem studentem. Zauważ brak czasownika 'być' w czasie teraźniejszym - arabski po prostu mówi 'ja student'. Ta ekonomia języka jest elegancka i prosta."
      },
      {
        id: "pa_pr2",
        question: "_____ معلم.",
        translation: "(Ty jesteś nauczycielem - do mężczyzny)",
        options: ["أنتَ", "أنا", "هو", "أنتِ"],
        correct: "أنتَ",
        explanation: "أنتَ (anta) to 'ty' dla mężczyzny. Arabski ma osobne zaimki dla ty-mężczyzna (أنتَ) i ty-kobieta (أنتِ). Ta precyzja rodzajowa jest typowa dla języków semickich. Nauczyciele są szanowani w kulturze arabskiej - ich wiedza i mądrość ceniona przez społeczeństwo."
      },
      {
        id: "pa_pr3",
        question: "_____ طبيبة.",
        translation: "(Ty jesteś lekarką - do kobiety)",
        options: ["أنتِ", "أنتَ", "هي", "أنا"],
        correct: "أنتِ",
        explanation: "أنتِ (anti) to 'ty' dla kobiety. Końcówka ة (ta marbuta) w طبيبة wskazuje zawód żeński. Lekarze ratują życia - ich praca wymaga wiedzy, empatii i oddania. Kobiety w medycynie wnoszą nieoceniony wkład w zdrowie społeczeństwa."
      },
      {
        id: "pa_pr4",
        question: "_____ صديقي.",
        translation: "(On jest moim przyjacielem)",
        options: ["هو", "هي", "أنا", "أنتَ"],
        correct: "هو",
        explanation: "هو (huwa) to 'on' - trzecia osoba męska. صديقي = mój przyjaciel (ي na końcu to 'mój'). Przyjaźń to cenna więź między ludźmi. Dobry przyjaciel wspiera, słucha, dzieli radości i smutki. هو jest używany też dla rzeczy męskich w arabskim."
      },
      {
        id: "pa_pr5",
        question: "_____ أختي.",
        translation: "(Ona jest moją siostrą)",
        options: ["هي", "هو", "أنتِ", "أنا"],
        correct: "هي",
        explanation: "هي (hiya) to 'ona' - trzecia osoba żeńska. أختي = moja siostra. Więzi rodzinne są fundamentem społeczeństwa arabskiego. Siostry dzielą specjalną więź - wspólne dzieciństwo, wspomnienia, wzajemne wsparcie. هي dla osób i rzeczy żeńskich."
      },
      {
        id: "pa_pr6",
        question: "_____ طلاب.",
        translation: "(My jesteśmy studentami)",
        options: ["نحن", "أنا", "أنتم", "هم"],
        correct: "نحن",
        explanation: "نحن (nahnu) to 'my' - pierwsza osoba mnoga. نحن طلاب = my jesteśmy studentami. 'My' tworzy wspólnotę, łączy ludzi w grupę. Studenci razem uczą się, wspierają, rozwijają. Bycie częścią grupy daje siłę i motywację."
      },
      {
        id: "pa_pr7",
        question: "_____ معلمون.",
        translation: "(Wy jesteście nauczycielami - do mężczyzn)",
        options: ["أنتم", "نحن", "هم", "أنتنّ"],
        correct: "أنتم",
        explanation: "أنتم (antum) to 'wy' dla grupy mężczyzn lub mieszanej. معلمون to mnoga forma męska 'nauczyciele'. Nauczyciele razem tworzą środowisko edukacyjne. Ich współpraca buduje lepszy system nauczania dla uczniów."
      },
      {
        id: "pa_pr8",
        question: "_____ طالبات.",
        translation: "(Wy jesteście studentkami - do kobiet)",
        options: ["أنتنّ", "أنتم", "نحن", "هنّ"],
        correct: "أنتنّ",
        explanation: "أنتنّ (antunna) to 'wy' dla grupy wyłącznie kobiet. طالبات to forma żeńska mnoga 'studentki' (końcówka ات). Ta precyzja rodzajowa w arabskim jest fascynująca. Kobiety w edukacji robią wielkie postępy - ich ambicje i zdolności inspirują."
      },
      {
        id: "pa_pr9",
        question: "_____ أطباء.",
        translation: "(Oni są lekarzami)",
        options: ["هم", "هنّ", "نحن", "أنتم"],
        correct: "هم",
        explanation: "هم (hum) to 'oni' - trzecia osoba mnoga męska. أطباء to forma nieregularna mnoga 'lekarze'. Arabski ma złożony system liczby mnogiej z formami regularnymi i nieregularnymi. Lekarze pracują zespołowo - każdy specjalista wnosi swoją wiedzę dla zdrowia pacjenta."
      },
      {
        id: "pa_pr10",
        question: "_____ معلمات.",
        translation: "(One są nauczycielkami)",
        options: ["هنّ", "هم", "أنتنّ", "نحن"],
        correct: "هنّ",
        explanation: "هنّ (hunna) to 'one' - trzecia osoba mnoga żeńska. معلمات to forma żeńska mnoga (końcówka ات). Ta forma używana wyłącznie dla grup kobiet. Nauczycielki mają ogromny wpływ na rozwój dzieci i młodzieży - kształtują charaktery i umysły."
      },
      {
        id: "pa_pr11",
        question: "_____ وأخي في المدرسة.",
        translation: "(Ja i mój brat jesteśmy w szkole)",
        options: ["أنا", "نحن", "هو", "أنتَ"],
        correct: "أنا",
        explanation: "أنا وأخي = ja i mój brat. و (wa) to 'i'. Łączenie osób przez 'i' to częsta konstrukcja. Szkoła to miejsce nauki i socjalizacji. Rodzeństwo razem w szkole często się wspiera - dzielą doświadczenia edukacyjne."
      },
      {
        id: "pa_pr12",
        question: "_____ في البيت.",
        translation: "(Oni są w domu)",
        options: ["هم", "نحن", "أنتم", "هنّ"],
        correct: "هم",
        explanation: "هم في البيت = oni są w domu. Dom to bezpieczna przystań - miejsce odpoczynku po dniu pracy czy szkoły. Być w domu z rodziną to przyjemność i komfort. Arabski dom tradycyjnie jest centrum życia rodzinnego."
      },
      {
        id: "pa_pr13",
        question: "_____ صديقاتي.",
        translation: "(One są moimi przyjaciółkami)",
        options: ["هنّ", "هم", "نحن", "أنتنّ"],
        correct: "هنّ",
        explanation: "هنّ صديقاتي = one są moimi przyjaciółkami. صديقات to forma żeńska mnoga 'przyjaciółki'. Przyjaźń między kobietami jest szczególna - dzielą sekrety, wspierają emocjonalnie, budują głębokie więzi zaufania."
      },
      {
        id: "pa_pr14",
        question: "_____ مهندس.",
        translation: "(On jest inżynierem)",
        options: ["هو", "أنتَ", "أنا", "نحن"],
        correct: "هو",
        explanation: "هو مهندس = on jest inżynierem. Inżynierowie projektują i budują - mosty, budynki, technologie. Ich praca kształtuje fizyczny świat wokół nas. Zawód wymaga precyzji matematycznej i kreatywności."
      },
      {
        id: "pa_pr15",
        question: "_____ جميلة.",
        translation: "(Ona jest piękna)",
        options: ["هي", "هو", "أنتِ", "أنا"],
        correct: "هي",
        explanation: "هي جميلة = ona jest piękna. جميلة to forma żeńska przymiotnika 'piękny' (dodatkowe ة). Piękno ma wiele form - wewnętrzne i zewnętrzne. Komplementy powinny doceniać całość osoby - jej charakter, dobroć, inteligencję, nie tylko wygląd."
      }
    ]
  }
};
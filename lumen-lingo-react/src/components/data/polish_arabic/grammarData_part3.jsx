
/**
 * POLISH → ARABIC GRAMMAR - PART 3 (REFINED - NO EXCLAMATIONS)
 * Future & Dual Form
 */

import { Zap, Users } from "lucide-react";

export const part3Categories = {
  future_tense: {
    name: "Czas przyszły",
    description: "المستقبل",
    level: "intermediate",
    icon: Zap,
    color: "from-purple-400 to-pink-500",
    questions: [
      {
        id: "pa_fut1",
        question: "أنا _____ غداً.",
        translation: "(Będę studiować jutro)",
        options: ["سأدرس", "أدرس", "درست", "يدرس"],
        correct: "سأدرس",
        explanation: "Witaj w arabskim czasie przyszłym. Tworzy się go dodając prefiks سَ (sa-) lub słowo سوف (sawfa) przed czasownikiem teraźniejszym. سأدرس = سَ + أدرس (będę studiować). To jak dodać 'będę' przed czasownikiem. Polski ma oddzielne formy przyszłe, arabski używa prostego prefiksu. غداً (ghadan) to 'jutro' - słowo nadziei i nowych możliwości. Planowanie studiów to inwestycja w przyszłość."
      },
      {
        id: "pa_fut2",
        question: "أنتَ _____ إلى باريس.",
        translation: "(Pojedziesz do Paryża - do mężczyzny)",
        options: ["ستذهب", "تذهب", "ذهبت", "يذهب"],
        correct: "ستذهب",
        explanation: "ستذهب = سَ + تذهب (pojedziesz). Prefiks سَ dodany do formy teraźniejszej 'ty idiesz' tworzy przyszłość. Paryż jako cel podróży brzmi ekscytująco - miasto światła, sztuki, kultury. Podróże otwierają umysł na nowe doświadczenia i perspektywy. Arabski czas przyszły jest logiczny i przewidywalny."
      },
      {
        id: "pa_fut3",
        question: "هو _____ الكتاب.",
        translation: "(On przeczyta książkę)",
        options: ["سيقرأ", "يقرأ", "قرأ", "تقرأ"],
        correct: "سيقرأ",
        explanation: "سيقرأ = سَ + يقرأ (przeczyta). Czytanie w przyszłości to obietnica wiedzy i przyjemności. Książki przenoszą nas do innych światów, czasów, perspektyw. Każda przeczytana książka wzbogaca nasze zrozumienie świata. Arabski prefiks przyszłości jest elegancko prosty."
      },
      {
        id: "pa_fut4",
        question: "هي _____ الطعام.",
        translation: "(Ona ugotuje jedzenie)",
        options: ["ستطبخ", "تطبخ", "طبخت", "يطبخ"],
        correct: "ستطبخ",
        explanation: "ستطبخ = سَ + تطبخ (ugotuje). Gotowanie to forma sztuki i troski. Przygotowywanie posiłków dla innych wyraża miłość i gościnność. W kulturze arabskiej jedzenie ma głębokie znaczenie społeczne - łączy rodziny i przyjaciół. Wspólne posiłki budują więzi."
      },
      {
        id: "pa_fut5",
        question: "نحن _____ معاً.",
        translation: "(Będziemy pracować razem)",
        options: ["سنعمل", "نعمل", "عملنا", "يعمل"],
        correct: "سنعمل",
        explanation: "سنعمل = سَ + نعمل (będziemy pracować). معاً (ma'an) to 'razem' - piękne słowo współpracy. Praca zespołowa tworzy więcej niż suma indywidualnych wysiłków. Wspólne cele łączą ludzi i budują społeczności. Przyszłość jest lepsza gdy budujemy ją razem."
      },
      {
        id: "pa_fut6",
        question: "أنتم _____ الدرس.",
        translation: "(Nauczycie się lekcji - do mężczyzn)",
        options: ["ستتعلمون", "تتعلمon", "تعلمتم", "يتعلم"],
        correct: "ستتعلمon",
        explanation: "ستتعلمون = سَ + تتعلمون (nauczycie się). Nauka to podróż przez całe życie. Każda lekcja buduje na poprzedniej, tworząc piramidę wiedzy. Uczenie się razem jako grupa wzmacnia zrozumienie - można wymieniać pomysły i pomagać sobie nawzajem."
      },
      {
        id: "pa_fut7",
        question: "هم _____ الفيلم.",
        translation: "(Oni obejrzą film)",
        options: ["سيشاهدون", "يشاهدون", "شاهدوا", "تشاهد"],
        correct: "سيشاهدون",
        explanation: "سيشاهدون = سَ + يشاهدون (obejrzą). Oglądanie filmów to popularna forma rozrywki i relaksu. Filmy opowiadają historie, budzą emocje, uczą o różnych kulturach. Wspólne oglądanie filmu tworzy wspólne doświadczenie i temat do rozmowy."
      },
      {
        id: "pa_fut8",
        question: "أنا _____ معلماً.",
        translation: "(Będę nauczycielem)",
        options: ["سأكون", "أكون", "كنت", "يكون"],
        correct: "سأكون",
        explanation: "سأكون = سَ + أكون (będę). كون to czasownik 'być' w przyszłości. Bycie nauczycielem to szlachetne powołanie - kształtowanie młodych umysłów, inspirowanie ciekawości, przekazywanie wiedzy. Nauczyciele mają trwały wpływ na życie swoich uczniów."
      },
      {
        id: "pa_fut9",
        question: "أنتِ _____ سعيدة.",
        translation: "(Będziesz szczęśliwa - do kobiety)",
        options: ["ستكونين", "تكونين", "كنتِ", "يكون"],
        correct: "ستكونين",
        explanation: "ستكونين = سَ + تكونين (będziesz - żeńska). Szczęście w przyszłości to optymistyczna wizja. Każdy zasługuje na szczęście - to podstawowe ludzkie pragnienie. Budowanie szczęśliwej przyszłości wymaga pozytywnego nastawienia i cierpliwości."
      },
      {
        id: "pa_fut10",
        question: "هو _____ طبيباً.",
        translation: "(On będzie lekarzem)",
        options: ["سيكون", "يكون", "كان", "تكون"],
        correct: "سيكون",
        explanation: "سيكون = سَ + يكون (będzie). Marzenie o byciu lekarzem to szlachetna aspiracja. Lekarze pomagają ludziom, leczą choroby, ratują życia. To zawód wymagający wiedzy, empatii i poświęcenia. Przyszłość wymaga przygotowania w teraźniejszości."
      },
      {
        id: "pa_fut11",
        question: "هي _____ الحقيقة.",
        translation: "(Ona pozna prawdę)",
        options: ["ستعرف", "تعرف", "عرفت", "يعرف"],
        correct: "ستعرف",
        explanation: "ستعرف = سَ + تعرف (pozna). Poznanie prawdy to moment oświecenia. Prawda jest fundamentem zaufania i uczciwości. Czasem trudno ją zaakceptować, ale zawsze jest lepsza od ignorancji. Czas ujawnia wszystkie prawdy."
      },
      {
        id: "pa_fut12",
        question: "نحن _____ في المكتبة.",
        translation: "(Będziemy w bibliotece)",
        options: ["سنكون", "نكون", "كنا", "يكون"],
        correct: "سنكون",
        explanation: "سنكون = سَ + نكون (będziemy). Biblioteka to świątynia wiedzy - tysiące książek czeka na odkrycie. Bycie w bibliotece to spokojne, kontemplacyjne doświadczenie. Cisza sprzyja koncentracji i głębokiemu czytaniu. Biblioteki są skarbami społeczności."
      },
      {
        id: "pa_fut13",
        question: "أنتم _____ أصدقاء.",
        translation: "(Będziecie przyjaciółmi - do mężczyzn)",
        options: ["ستكونون", "تكونون", "كنتم", "يكون"],
        correct: "ستكونون",
        explanation: "ستكونون = سَ + تكونون (będziecie). Przyjaźń w przyszłości to obietnica trwałej więzi. Prawdziwa przyjaźń przetrwa próby czasu. Budowanie przyjaźni wymaga wzajemnego szacunku, zaufania i troski."
      },
      {
        id: "pa_fut14",
        question: "هم _____ ناجحين.",
        translation: "(Oni będą odnoszący sukcesy)",
        options: ["سيكونون", "يكونون", "كانوا", "تكون"],
        correct: "سيكونون",
        explanation: "سيكونون = سَ + يكونون (będą). Sukces ma wiele definicji - może być zawodowy, osobisty, duchowy. Każdy definiuje sukces inaczej. Ważne jest dążenie do własnych celów, nie porównywanie się z innymi. Sukces to podróż, nie cel."
      },
      {
        id: "pa_fut15",
        question: "أنتنّ _____ معلمات.",
        translation: "(Będziecie nauczycielkami - do kobiet)",
        options: ["ستكنّ", "تكنّ", "كنتنّ", "يكون"],
        correct: "ستكنّ",
        explanation: "ستكنّ = سَ + تكنّ (będziecie - żeńska forma mnoga). Nauczycielki mają ogromny wpływ na młode pokolenie. Ich cierpliwość, wiedza i troska kształtują przyszłość społeczeństwa. Edukacja to potężne narzędzie zmiany społecznej."
      }
    ]
  },

  dual_form: {
    name: "Forma podwójna",
    description: "المثنى",
    level: "advanced",
    icon: Users,
    color: "from-cyan-400 to-blue-500",
    questions: [
      {
        id: "pa_dual1",
        question: "هذان _____.",
        translation: "(To są dwaj studenci)",
        options: ["طالبان", "طالب", "طلاب", "طالبة"],
        correct: "طالبان",
        explanation: "Arabski ma specjalną formę dla pary rzeczy - nie pojedynczej, nie mnogiej, ale dokładnie dwóch. To się nazywa dual (المثنى). Dodaj ان (an) lub ين (ayn) do rzeczownika. طالب + ان = طالبان (dwaj studenci). Polski nie ma tego - używamy 'dwóch studentów'. Ta precyzja jest fascynującą cechą arabskiego. Pokazuje jak szczegółowy może być język."
      },
      {
        id: "pa_dual2",
        question: "رأيت _____.",
        translation: "(Widziałem dwoje dzieci)",
        options: ["طفلين", "طفل", "أطفال", "طفلة"],
        correct: "طفلين",
        explanation: "W przypadku dopełnienia dual używa ين zamiast ان. طفل + ين = طفلين (dwoje dzieci). To jak polski system przypadków - forma zmienia się zależnie od funkcji w zdaniu. Dzieci to radość życia - ich śmiech i energia rozświetlają świat. Para dzieci bawiących się razem to piękny widok."
      },
      {
        id: "pa_dual3",
        question: "هاتان _____.",
        translation: "(To są dwie książki)",
        options: ["كتابان", "كتاب", "كتب", "كتابة"],
        correct: "كتابان",
        explanation: "كتاب + ان = كتابان (dwie książki). Dual działa dla wszystkich rzeczowników. هاتان to żeńska forma 'te dwie'. Książki to okna do innych światów. Para książek może być początkkiem małej biblioteki domowej. Czytanie wzbogaca umysł i wyobraźnię."
      },
      {
        id: "pa_dual4",
        question: "عندي _____.",
        translation: "(Mam dwa długopisy)",
        options: ["قلمان", "قلم", "أقلام", "قلمة"],
        correct: "قلمان",
        explanation: "قلم + ان = قلمان (dwa długopisy). Dual dla podmiotowych konstrukcji. Długopisy to podstawowe narzędzia pisania. Mieć zapasowy długopis to zawsze dobry pomysł. Pisanie ręczne ma swój urok w erze cyfrowej."
      },
      {
        id: "pa_dual5",
        question: "سافرت مع _____.",
        translation: "(Podróżowałem z dwoma przyjaciółmi)",
        options: ["صديقين", "صديق", "أصدقاء", "صديقة"],
        correct: "صديقين",
        explanation: "صديق + ين = صديقين (dwóch przyjaciół). Po przyimkach używamy formy ين. Podróżowanie z przyjaciółmi tworzy wspaniałe wspomnienia. Dzielenie przygód wzmacnia więzi. Dwóch przyjaciół to idealna liczba - można rozmawiać i podejmować decyzje łatwo."
      },
      {
        id: "pa_dual6",
        question: "هما _____.",
        translation: "(Oni dwaj są nauczycielami)",
        options: ["معلمان", "معلم", "معلمون", "معلمة"],
        correct: "معلمان",
        explanation: "معلم + ان = معلمان (dwaj nauczyciele). هما to zaimek dual 'oni dwaj/one dwie'. Dwóch nauczycieli może prowadzić zajęcia razem, uzupełniając swoje mocne strony. Współpraca między nauczycielami wzbogaca doświadczenie edukacyjne uczniów."
      },
      {
        id: "pa_dual7",
        question: "أكلت _____.",
        translation: "(Zjadłem dwa jabłka)",
        options: ["تفاحتين", "تفاحة", "تفاح", "تفاحات"],
        correct: "تفاحتين",
        explanation: "تفاحة + ين = تفاحتين (dwa jabłka). Dla rzeczowników żeńskich ة zmienia się w ت przed dodaniem dual. Jabłka są zdrowe i smaczne. Jedzenie owoców dostarcza witamin i energii. Dwa jabłka dziennie to dobry nawyk."
      },
      {
        id: "pa_dual8",
        question: "في الغرفة _____.",
        translation: "(W pokoju są dwa łóżka)",
        options: ["سريران", "سرير", "أسرّة", "سريرة"],
        correct: "سريران",
        explanation: "سرير + ان = سريران (dwa łóżka). Dual dla mebli i przedmiotów. Dwa łóżka w pokoju sugerują gościnność lub rodzeństwo. Wspólny pokój uczy dzielenia się przestrzenią i szacunku dla prywatności innych."
      },
      {
        id: "pa_dual9",
        question: "قرأت _____.",
        translation: "(Przeczytałem dwie gazety)",
        options: ["جريدتين", "جريدة", "جرائد", "جريدات"],
        correct: "جريدتين",
        explanation: "جريدة + ين = جريدتين (dwie gazety). Czytanie gazet informuje o świecie. Porównywanie dwóch źródeł daje szerszą perspektywę. Krytyczne myślenie wymaga sprawdzania informacji z różnych źródeł."
      },
      {
        id: "pa_dual10",
        question: "عنده _____ جميلتان.",
        translation: "(On ma dwie piękne córki)",
        options: ["ابنتان", "ابنة", "بنات", "ابن"],
        correct: "ابنتan",
        explanation: "ابنة + ان = ابنتان (dwie córki). جميلتان to dual żeński przymiotnika. Córki to radość rodziców. Dwie córki mogą być bliskimi siostrami, wspierającymi się nawzajem. Rodzina jest fundamentem szczęścia."
      },
      {
        id: "pa_dual11",
        question: "شاهدت _____.",
        translation: "(Obejrzałem dwa filmy)",
        options: ["فيلمين", "فيلم", "أفلام", "فيلمة"],
        correct: "فيلمين",
        explanation: "فيلم + ين = فيلمين (dwa filmy). Maraton filmowy z dwoma filmami to przyjemny wieczór. Filmy opowiadają różne historie, budzą różne emocje. Wybór dwóch dobrych filmów może stworzyć tematyczny wieczór."
      },
      {
        id: "pa_dual12",
        question: "في الصف _____.",
        translation: "(W klasie są dwaj nauczyciele)",
        options: ["معلمان", "معلم", "معلمون", "معلمة"],
        correct: "معلمان",
        explanation: "معلم + ان = معلمان (dwaj nauczyciele). Dwóch nauczycieli w klasie może prowadzić lekcję bardziej dynamicznie. Jeden może wyjaśniać, drugi pomagać uczniom indywidualnie. Współpraca wzbogaca proces uczenia."
      },
      {
        id: "pa_dual13",
        question: "زرت _____.",
        translation: "(Odwiedziłem dwa muzea)",
        options: ["متحفين", "متحف", "متاحف", "متحفة"],
        correct: "متحفين",
        explanation: "متحف + ين = متحفين (dwa muzea). Wizyty w muzeach są edukacyjne i inspirujące. Każde muzeum opowiada różne historie, prezentuje różne okresy lub tematy. Dwa muzea w jeden dzień to ambitny, ale satysfakcjonujący plan."
      },
      {
        id: "pa_dual14",
        question: "اشتريت _____.",
        translation: "(Kupiłem dwie koszule)",
        options: ["قميصين", "قميص", "قمصان", "قميصة"],
        correct: "قميصين",
        explanation: "قميص + ين = قميصين (dwie koszule). Kupowanie ubrań to praktyczna konieczność i czasem przyjemność. Dwie koszule dają opcje stylizacji. Dobrze dobrana garderoba buduje pewność siebie."
      },
      {
        id: "pa_dual15",
        question: "عندها _____.",
        translation: "(Ona ma dwa koty)",
        options: ["قطان", "قط", "قطط", "قطة"],
        correct: "قطان",
        explanation: "قط + ان = قطان (dwa koty). Koty to popularne zwierzęta domowe. Dwa koty mogą się bawić razem, tworzyć towarzystwo sobie nawzajem. Zwierzęta uczą odpowiedzialności i empatii. Opieka nad zwierzętami przynosi radość i relaks."
      }
    ]
  }
};

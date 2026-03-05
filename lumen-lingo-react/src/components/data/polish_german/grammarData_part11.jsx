
/**
 * POLISH → GERMAN GRAMMAR - PART 11
 * 3 categories, 15 questions each - Final mastery
 */

import { Flame, Heart, CheckCircle } from "lucide-react";

export const part11Categories = {
  subjunctive_wishes_regrets: {
    name: "Konjunktiv II - życzenia i żale",
    description: "Wenn ich nur..., ich wünschte..., hätte/wäre",
    icon: Flame,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "subj_wish_1",
        question: "Wenn ich nur mehr Zeit _____! Dann könnte ich reisen.",
        translation: "(Gdybym tylko miał więcej czasu! Wtedy mógłbym podróżować)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Zdanie życzeniowe 'wenn ich nur hätte'! Wyrażanie niespełnionego pragnienia - marzenie o czasie. To o frustracji - chęć większej ilości godzin. Konstrukcja 'wenn' plus 'nur' plus Konjunktiv II tworzy silne życzenie - 'hätte' pokazuje że rzeczywistość jest odwrotna. Życzeniowa konstrukcja pokazująca czego brakuje."
      },
      {
        id: "subj_wish_2",
        question: "Ich wünschte, ich _____ besser Deutsch sprechen können!",
        translation: "(Chciałbym móc lepiej mówić po niemiecku!)",
        options: ["könnte", "kann", "konnte", "würde können"],
        correct: "könnte",
        explanation: "Tęsknota 'ich wünschte, ich könnte'! Pragnienie dla zdolności - językowe życzenie. To o aspiracjach - chęć umiejętności. Czasownik 'wünschen' plus Konjunktiv II wyraża pragnienia obecnie niespełnione - 'könnte' pokazuje pożądaną zdolność brakującą teraz. Motywacja nauki."
      },
      {
        id: "subj_wish_3",
        question: "Wenn ich doch reich _____! Dann hätte ich keine Sorgen.",
        translation: "(Gdybym tylko był bogaty! Wtedy nie miałbym zmartwień)",
        options: ["wäre", "bin", "war", "würde sein"],
        correct: "wäre",
        explanation: "Emfatyczne życzenie 'wenn ich doch wäre'! Partykuła 'doch' intensyfikuje pragnienie - silne życzenie. To o finansach - chęć bogactwa. Konstrukcja 'wenn' plus 'doch' plus Konjunktiv II ekstra emfatyczna - 'wäre' pokazuje że obecna rzeczywistość jest inna. Intensyfikowana tęsknota."
      },
      {
        id: "subj_wish_4",
        question: "Ich _____ lieber zu Hause geblieben statt zur Party zu gehen.",
        translation: "(Wolałbym był zostać w domu zamiast pójść na imprezę)",
        options: ["wäre", "bin", "war", "würde sein"],
        correct: "wäre",
        explanation: "Żal 'wäre lieber geblieben'! Życzenie o przeszłym wyborze - preferowanie innej akcji. To retrospekcja - żałowanie wyjścia. Konjunktiv II Perfect pokazuje przeszły żal - 'wäre geblieben' (powinienem był). Żałowanie przeszłej decyzji."
      },
      {
        id: "subj_wish_5",
        question: "Wenn es nur nicht so kalt _____! Ich friere sehr.",
        translation: "(Gdyby tylko nie było tak zimno! Bardzo marznę)",
        options: ["wäre", "ist", "war", "würde sein"],
        correct: "wäre",
        explanation: "Życzenie pogodowe 'wenn es nur nicht wäre'! Narzekanie na zimno - chęć ciepła. To dyskomfort - skarga temperaturowa. Konstrukcja 'wenn' plus 'nur' plus 'nicht' plus Konjunktiv II wyraża życzenie dla odwrotnych warunków. Tęsknota za lepszą pogodą."
      },
      {
        id: "subj_wish_6",
        question: "Ich _____ ihm geholfen, wenn ich Zeit gehabt hätte damals.",
        translation: "(Pomógłbym mu, gdybym miał wtedy czas)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Przeszły warunkowy 'hätte geholfen'! Pomógłbym był ALE nie mogłem - wyjaśnianie bezczynności. To uzasadnienie - brak czasu. Konjunktiv II Perfect: 'hätte' plus imiesłów pokazuje niezrealizowaną przeszłą możliwość. Wyjaśnianie dlaczego pomoc nie nastąpiła."
      },
      {
        id: "subj_wish_7",
        question: "Wenn ich an deiner Stelle _____, würde ich anders handeln.",
        translation: "(Gdybym był na twoim miejscu, postąpiłbym inaczej)",
        options: ["wäre", "bin", "war", "würde sein"],
        correct: "wäre",
        explanation: "Formuła rady 'an deiner Stelle wäre'! Wyobrażanie sobie bycia nimi - dawanie perspektywy. To rada - oferowanie innego podejścia. Klasyczna struktura rady 'an X Stelle wäre ich' - hipotetyczne zastąpienie osoby aby zasugerować akcję. Empatyczna sugestia."
      },
      {
        id: "subj_wish_8",
        question: "Ich wünschte, das Wetter _____ besser für unseren Ausflug morgen!",
        translation: "(Chciałbym, żeby pogoda była lepsza na naszą wycieczkę jutro!)",
        options: ["wäre", "ist", "war", "würde sein"],
        correct: "wäre",
        explanation: "Nadzieja pogodowa 'wünschte, wäre besser'! Pragnienie dla lepszych warunków - planowanie wycieczki. To antycypacja - chęć ładnego dnia. Czasownik 'wünschen' plus Konjunktiv II wyraża nadzieje dotyczące przyszłości - 'wäre' pokazuje nadzieję wbrew obecnej prognozie. Myślenie życzeniowe."
      },
      {
        id: "subj_wish_9",
        question: "Wenn ich nur früher davon gewusst _____!",
        translation: "(Gdybym tylko wcześniej o tym wiedział!)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Żal o niewiedzy 'hätte gewusst'! Życzenie że wiedziałem wcześniej - informacja przyszła późno. To o czasie - opóźniona świadomość. Życzenie Konjunktiv II Perfect: 'hätte' plus imiesłów pokazuje życzenie że przeszłość była inna. Żałowanie późnego odkrycia."
      },
      {
        id: "subj_wish_10",
        question: "Ich _____ so gerne dabei gewesen bei der Feier gestern!",
        translation: "(Tak chętnie bym tam był na uroczystości wczoraj!)",
        options: ["wäre", "bin", "war", "würde sein"],
        correct: "wäre",
        explanation: "Żal o przegapieniu 'wäre gerne dabei gewesen'! Życzenie że był obecny - wyrażanie FOMO. To o przegapionym wydarzeniu - żałowanie nieobecności. Konjunktiv II Perfect: 'wäre' plus 'dabei gewesen' pokazuje życzenie o przeszłej obecności. Żałowanie że nie mógł tam być."
      },
      {
        id: "subj_wish_11",
        question: "Wenn sie doch endlich _____! Wir warten schon so lange.",
        translation: "(Gdyby tylko w końcu przyszła! Czekamy już tak długo)",
        options: ["käme", "kommt", "kam", "würde kommen"],
        correct: "käme",
        explanation: "Niecierpliwe życzenie 'käme'! Chęć przybycia - partykuły 'doch' plus 'endlich' podkreślają pilność. To niecierpliwość - długie czekanie. Konjunktiv II od 'kommen' równa się 'käme' (forma silna) w życzeniach. Partykuły 'doch endlich' intensyfikują chęć."
      },
      {
        id: "subj_wish_12",
        question: "Ich _____, ich hätte damals anders entschieden in der Situation!",
        translation: "(Żałuję, że wtedy postąpiłem inaczej w tej sytuacji!)",
        options: ["wünschte", "wünsche", "würde wünschen", "wollte"],
        correct: "wünschte",
        explanation: "Wprowadzanie żalu 'wünschte'! Przeszły czas 'wünschen' ustala zdanie życzeniowe. To o błędzie - żałowanie decyzji. Konstrukcja 'ich wünschte' plus Konjunktiv II Perfect pokazuje przeszły żal - chęć cofnięcia. Wyrażanie skruchy o wyborze."
      },
      {
        id: "subj_wish_13",
        question: "Wenn das Wochenende doch länger _____!",
        translation: "(Gdyby tylko weekend był dłuższy!)",
        options: ["wäre", "ist", "war", "würde sein"],
        correct: "wäre",
        explanation: "Uniwersalne życzenie 'wäre länger'! Weekend zbyt krótki - powszechny sentyment. To o czasie - chęć przedłużenia. Konstrukcja 'wenn' plus 'doch' plus Konjunktiv II wyraża niemożliwe życzenie - weekendy się nie wydłużą ale i tak życzysz. Relatywna tęsknota."
      },
      {
        id: "subj_wish_14",
        question: "Ich _____ gern mehr über deine Familie erfahren und kennenlernen.",
        translation: "(Chętnie bym dowiedział się więcej o twojej rodzinie i poznał ją)",
        options: ["würde", "werde", "will", "wollte"],
        correct: "würde",
        explanation: "Uprzejme zainteresowanie 'würde gern erfahren'! Wyrażanie pragnienia poznania - pełna szacunku ciekawość. To społeczne - zbliżanie się. Konstrukcja 'würde gern' plus bezokolicznik pokazuje uprzejme zainteresowanie w dowiadywaniu się więcej. Kurtuazyjna osobista zapytanie."
      },
      {
        id: "subj_wish_15",
        question: "Wenn ich nur nicht so viel _____ hätte heute bei der Arbeit!",
        translation: "(Gdybym tylko nie miał dzisiaj tyle stresu w pracy!)",
        options: ["Stress", "Stressen", "gestresst", "stressig"],
        correct: "Stress",
        explanation: "Życzenie mniejszej presji 'Stress hätte'! Pragnienie dla łatwiejszego dnia - skargi zawodowe. To o obciążeniu - chęć ulgi. Konstrukcja 'wenn ich nur nicht' plus obiekt plus 'hätte' wyraża życzenia dla braku czegoś. Chcenie mniej czegoś negatywnego."
      }
    ]
  },

  fixed_expressions_idioms: {
    name: "Stałe wyrażenia i idiomy",
    description: "Es geht um, Recht haben, Angst haben vor",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "fixed_1",
        question: "Es geht _____ deine Zukunft - das ist sehr wichtig!",
        translation: "(Chodzi o twoją przyszłość - to jest bardzo ważne!)",
        options: ["um", "über", "von", "für"],
        correct: "um",
        explanation: "Utrwalone wyrażenie 'es geht um' oznacza 'chodzi o'! Stała konstrukcja dla wskazywania tematu. To o powadze - podkreślanie ważności. Formuła 'es geht um' plus biernik standardowa pokazująca o co chodzi lub co jest omawiane. Nie można zmienić przyimka - zawsze 'um'."
      },
      {
        id: "fixed_2",
        question: "Du hast _____! Ich lag völlig falsch in dieser Sache.",
        translation: "(Masz rację! Całkowicie się myliłem w tej sprawie)",
        options: ["Recht", "recht", "richtig", "Richtigkeit"],
        correct: "Recht",
        explanation: "Idiom 'Recht haben' mieć rację! Utrwalone wyrażenie. To przyznanie - uznawanie słuszności. Konstrukcja 'Recht haben' (wielką literą!) idiom dla 'mieć rację'. Nie 'richtig haben' - konkretny rzeczownik używany. Standardowe przyznanie racji."
      },
      {
        id: "fixed_3",
        question: "Ich habe _____ vor großen Hunden seit meiner Kindheit immer.",
        translation: "(Boję się dużych psów od dzieciństwa zawsze)",
        options: ["Angst", "Furcht", "ängstlich", "Bang"],
        correct: "Angst",
        explanation: "Wyrażenie strachu 'Angst haben vor'! Mieć strach przed - standardowa formuła fobii. To o lęku - strach przed psami. Utrwalone wyrażenie 'Angst haben vor' plus celownik - 'Angst' wielką literą jako rzeczownik. Nie możesz użyć innego słowa - stała fraza."
      },
      {
        id: "fixed_4",
        question: "Er macht sich _____ um seine kranke Mutter große Gedanken.",
        translation: "(Martwi się о swoją chorą matkę duże myśli)",
        options: ["Sorgen", "Sorge", "sorgend", "gesorgt"],
        correct: "Sorgen",
        explanation: "Wyrażenie zmartwienia 'sich Sorgen machen um'! Martwić się o - formuła niepokoju. To troska - zdrowie rodziny. Utrwalone wyrażenie 'sich Sorgen machen um' plus biernik - 'Sorgen' liczba mnoga. Standardowe wyrażanie niepokoju."
      },
      {
        id: "fixed_5",
        question: "Hast du _____ auf ein Eis? Das Wetter ist so schön!",
        translation: "(Masz ochotę na lody? Pogoda jest taka ładna!)",
        options: ["Lust", "Wunsch", "Wille", "Interesse"],
        correct: "Lust",
        explanation: "Wyrażenie pragnienia 'Lust haben auf'! Mieć ochotę - swobodne chcenie. To sugestia - propozycja lodów. Idiom 'Lust haben auf' plus biernik dla chcenia czegoś swobodnie. Nie formalne 'wünschen' - casualowa ochota."
      },
      {
        id: "fixed_6",
        question: "Es _____ sich nicht, bei diesem Wetter spazieren zu gehen.",
        translation: "(Nie opłaca się chodzić na spacer przy tej pogodzie)",
        options: ["lohnt", "wert", "zahlt", "kostet"],
        correct: "lohnt",
        explanation: "Wyrażenie wartości 'es lohnt sich'! Ocenianie czy warto - ocena kosztów i korzyści. To decyzja - ocena pogody. Formuła 'es lohnt sich' plus bezokolicznik standardowa dla 'warto/opłaca się'. Bezosobowa konstrukcja oceniająca wartość."
      },
      {
        id: "fixed_7",
        question: "Sie nimmt _____ am Marathonlauf nächsten Monat erstmals teil.",
        translation: "(Bierze udział w maratonie w przyszłym miesiącu po raz pierwszy)",
        options: ["teil", "Teilnahme", "teilnehmen", "Anteil"],
        correct: "teil",
        explanation: "Czasownik rozdzielny 'teilnehmen an' udział! Partykuła rozdzielna - 'nimmt teil' uczestnicząc. To sport - wpis do maratonu. Utrwalone wyrażenie 'an etwas teilnehmen' dla uczestnictwa - 'teil' się oddziela. Standardowa formuła dla brania udziału."
      },
      {
        id: "fixed_8",
        question: "Das kommt nicht in _____! Das kann ich absolut nie akzeptieren!",
        translation: "(To nie wchodzi w rachubę! Absolutnie nie mogę tego zaakceptować!)",
        options: ["Frage", "Betracht", "Rede", "Gedanken"],
        correct: "Frage",
        explanation: "Idiom możliwości 'in Frage kommen'! Nie w pytaniu - odrzucenie opcji. To stanowcza odmowa - eliminowanie możliwości. Utrwalona fraza 'in Frage kommen' dla rozważania - negatywna oznacza absolutnie nie. Rzeczownik 'Frage' (pytanie) tu abstrakcyjnie - strefa rozważania."
      },
      {
        id: "fixed_9",
        question: "Er spielt eine wichtige _____ in diesem Projekt für die Firma.",
        translation: "(Gra ważną rolę w tym projekcie dla firmy)",
        options: ["Rolle", "Funktion", "Part", "Bedeutung"],
        correct: "Rolle",
        explanation: "Idiom ważności 'eine Rolle spielen'! Grać rolę - mieć znaczenie. To praca - podkreślanie ważności. Utrwalone wyrażenie 'eine Rolle spielen' dla znaczenia - 'Rolle' musi być użyte. Standardowa metafora teatralna."
      },
      {
        id: "fixed_10",
        question: "Ich nehme _____ auf das Angebot - es klingt sehr interessant!",
        translation: "(Przyjmuję twoją ofertę - brzmi bardzo ciekawie!)",
        options: ["an", "auf", "ein", "zu"],
        correct: "an",
        explanation: "Czasownik rozdzielny 'annehmen' akceptowanie oferty! Partykuła rozdzielna - 'nehme an' akceptacja. To zgoda - mówienie tak. Utrwalone wyrażenie 'ein Angebot annehmen' - 'an' się oddziela. Standardowe przyjmowanie propozycji."
      },
      {
        id: "fixed_11",
        question: "Sie sieht ihrem Vater sehr _____ - sie haben die gleichen Augen.",
        translation: "(Jest bardzo podobna do ojca - mają takie same oczy)",
        options: ["ähnlich", "gleich", "wie", "als"],
        correct: "ähnlich",
        explanation: "Idiom podobieństwa 'jemandem ähnlich sehen'! Wyglądać jak ktoś - rodzinne podobieństwo. To genetyka - fizyczne podobieństwo. Utrwalone wyrażenie 'ähnlich sehen' plus celownik pokazuje podobieństwo. Nie 'wie' - 'ähnlich' wymagane."
      },
      {
        id: "fixed_12",
        question: "Das spielt keine _____ - es ist nicht wichtig für uns.",
        translation: "(To nie gra roli - nie jest ważne dla nas)",
        options: ["Rolle", "Bedeutung", "Sache", "Ding"],
        correct: "Rolle",
        explanation: "Nieważność 'keine Rolle spielen'! Nie ma znaczenia - bagatelizowanie ważności. To minimalizowanie - mówienie nieważne. Negatyw idiomu ważności 'keine Rolle spielen' - standardowa formuła. Pokazywanie braku znaczenia."
      },
      {
        id: "fixed_13",
        question: "Er steht mir immer zur _____, wenn ich Hilfe brauche wirklich.",
        translation: "(Zawsze mi pomaga, gdy naprawdę potrzebuję pomocy)",
        options: ["Seite", "Hilfe", "Verfügung", "Hand"],
        correct: "Seite",
        explanation: "Idiom wsparcia 'zur Seite stehen'! Stać przy kimś - być wspierającym. To o przyjaźni - niezawodna pomoc. Utrwalone wyrażenie 'jemandem zur Seite stehen' dla wsparcia - 'Seite' musi być użyte. Metafora wsparcia."
      },
      {
        id: "fixed_14",
        question: "Ich habe _____ Ahnung, wo mein Schlüssel ist - ich finde ihn nie!",
        translation: "(Nie mam pojęcia, gdzie jest mój klucz - nie mogę go znaleźć!)",
        options: ["keine", "nichts", "kein", "niemand"],
        correct: "keine",
        explanation: "Wyrażenie bezradności 'keine Ahnung haben'! Nie mam pojęcia - całkowita niewiedza. To o zgubieniu - nie mogę zlokalizować. Utrwalone wyrażenie 'keine Ahnung' (można też solo jako odpowiedź). Standardowe przyznanie niewiedzy."
      },
      {
        id: "fixed_15",
        question: "Das geht mir auf die _____ - es nervt mich wirklich sehr!",
        translation: "(To działa mi na nerwy - naprawdę mnie to bardzo denerwuje!)",
        options: ["Nerven", "Nerve", "nervend", "genervt"],
        correct: "Nerven",
        explanation: "Idiom irytacji 'auf die Nerven gehen'! Działać na nerwy - wyrażanie irytacji. To skarga - wyrażanie frustracji. Utrwalone wyrażenie 'jemandem auf die Nerven gehen' - 'Nerven' liczba mnoga. Potoczna fraza irytacji."
      }
    ]
  },

  da_wo_compounds: {
    name: "Złożenia da- i wo- z przyimkami",
    description: "Damit, worauf, darüber, wofür - compound forms",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "da_wo_1",
        question: "Ich denke oft _____ nach, was ich in Zukunft machen möchte.",
        translation: "(Często zastanawiam się nad tym, co chcę robić w przyszłości)",
        options: ["darüber", "über das", "davon", "daran"],
        correct: "darüber",
        explanation: "Złożony zaimek 'darüber nachdenken'! Forma 'da' plus 'über' zamiast 'über das'. To o myśleniu - planowanie przyszłości. Gdy przyimek odnosi się do rzeczy (nie osób), używasz 'da(r)-' plus przyimek. Forma 'darüber' równa się 'o tym'. Zwarta alternatywa do przyimek plus zaimek."
      },
      {
        id: "da_wo_2",
        question: "_____ freust du dich am meisten? Auf den Urlaub?",
        translation: "(Na co cieszysz się najbardziej? Na urlop?)",
        options: ["Worauf", "Auf was", "Wovor", "Wovon"],
        correct: "Worauf",
        explanation: "Złożenie pytające 'worauf'! Forma 'wo(r)' plus 'auf' pytająca na co. To zapytanie o oczekiwanie - co ekscytuje. W pytaniach używasz 'wo(r)-' plus przyimek zamiast 'auf was' - 'worauf' bardziej naturalne. Pytanie o obiekt radości."
      },
      {
        id: "da_wo_3",
        question: "_____ hast du Angst? Vor Spinnen oder Schlangen?",
        translation: "(Czego się boisz? Pająków czy węży?)",
        options: ["Wovor", "Vor was", "Wovon", "Worauf"],
        correct: "Wovor",
        explanation: "Pytanie o strach 'wovor'! Forma 'wo' plus 'vor' pytająca o czego. To o fobiach - identyfikacja lęków. Złożenie pytające: 'wovor' zamiast 'vor was' bardziej eleganckie. Pytanie o obiekt strachu."
      },
      {
        id: "da_wo_4",
        question: "_____ kann ich dir helfen? Womit hast du Probleme?",
        translation: "(Czym mogę ci pomóc? Z czym masz problemy?)",
        options: ["Womit", "Mit was", "Wovon", "Worauf"],
        correct: "Womit",
        explanation: "Pytanie o pomoc 'womit'! Forma 'wo' plus 'mit' pytająca czym. To oferowanie pomocy - identyfikacja potrzeby. Forma 'womit' zamiast 'mit was' poprawne złożone pytanie. Pytanie o sposób lub narzędzie pomocy."
      },
      {
        id: "da_wo_5",
        question: "Ich interessiere mich sehr _____ für moderne Kunst und Kultur.",
        translation: "(Bardzo się interesuję tym dla nowoczesnej sztuki i kultury)",
        options: ["dafür", "für das", "davon", "darüber"],
        correct: "dafür",
        explanation: "Obiekt zainteresowania 'dafür interessieren'! Forma 'da' plus 'für' odnosząc się do tematu. To hobby - pasja sztuki. Czasownik 'sich interessieren für' plus 'dafür' gdy odnosisz się do czegoś wspomnianego. Złożone zaimkowe odniesienie."
      },
      {
        id: "da_wo_6",
        question: "_____ sprecht ihr gerade? Über das Wetter oder Politik?",
        translation: "(O czym rozmawiacie właśnie? O pogodzie czy polityce?)",
        options: ["Worüber", "Über was", "Wovon", "Womit"],
        correct: "Worüber",
        explanation: "Temat rozmowy 'worüber'! Forma 'wo' plus 'über' pytająca o czym. To ciekawość - dołączanie do rozmowy. Forma 'worüber' poprawna zamiast 'über was' - złożone pytanie. Pytanie o temat rozmowy."
      },
      {
        id: "da_wo_7",
        question: "Ich verlasse mich ganz _____, dass du pünktlich kommst morgen.",
        translation: "(Całkowicie na to liczę, że przyjdziesz jutro punktualnie)",
        options: ["darauf", "auf das", "daran", "davon"],
        correct: "darauf",
        explanation: "Poleganie 'darauf verlassen'! Forma 'da' plus 'auf' ufając w coś. To o zaufaniu - liczenie na punktualność. Czasownik 'sich verlassen auf' plus 'darauf' pokazuje zaufanie w wynik. Złożenie pokazujące zależność."
      },
      {
        id: "da_wo_8",
        question: "_____ träumst du nachts? Von schönen Reisen?",
        translation: "(O czym śnisz w nocy? O pięknych podróżach?)",
        options: ["Wovon", "Von was", "Worüber", "Womit"],
        correct: "Wovon",
        explanation: "Treść snów 'wovon träumen'! Forma 'wo' plus 'von' pytająca o czym. To sny - zapytanie podświadomości. Forma 'wovon' zamiast 'von was' właściwe złożone pytanie. Pytanie o treść snów."
      },
      {
        id: "da_wo_9",
        question: "Sie erzählt oft _____, wie schön ihre Heimat ist malerisch.",
        translation: "(Często opowiada o tym, jak piękna jest jej ojczyzna malowniczo)",
        options: ["davon", "von dem", "darüber", "daran"],
        correct: "davon",
        explanation: "Temat historii 'davon erzählen'! Forma 'da' plus 'von' o czym opowiada. To nostalgia - historie ojczyzny. Czasownik 'erzählen von' plus 'davon' złożenie pokazujące temat narracji. Odnoszenie się do wcześniej wspomnianego."
      },
      {
        id: "da_wo_10",
        question: "_____ wartest du hier? Auf den Bus oder Freund?",
        translation: "(Na co czekasz tutaj? Na autobus czy przyjaciela?)",
        options: ["Worauf", "Auf was", "Wovon", "Womit"],
        correct: "Worauf",
        explanation: "Obiekt oczekiwania 'worauf warten'! Forma 'wo' plus 'auf' pytająca na co. To o oczekiwaniu - identyfikacja powodu czekania. Forma 'worauf' właściwe złożone pytanie zamiast 'auf was'. Pytanie o obiekt czekania."
      },
      {
        id: "da_wo_11",
        question: "Ich habe lange _____ gearbeitet, dieses Ziel zu erreichen endlich!",
        translation: "(Długo nad tym pracowałem, żeby w końcu osiągnąć ten cel!)",
        options: ["daran", "an dem", "darauf", "davon"],
        correct: "daran",
        explanation: "Skupienie pracy 'daran arbeiten'! Forma 'da' plus 'an' pokazująca skupienie projektu. To dedykacja - dążenie do celu. Czasownik 'an etwas arbeiten' plus 'daran' złożenie pokazujące nad czym się pracuje. Wysiłek skierowany na cel."
      },
      {
        id: "da_wo_12",
        question: "_____ besteht das Problem genau? An fehlenden Ressourcen?",
        translation: "(W czym dokładnie tkwi problem? W brakujących zasobach?)",
        options: ["Worin", "In was", "Womit", "Wovon"],
        correct: "Worin",
        explanation: "Pytanie o naturę 'worin bestehen'! Forma 'wo' plus 'in' pytająca w czym. To analiza problemu - identyfikacja korzenia. Forma 'worin' zamiast 'in was' właściwe złożenie. Pytanie o istotę problemu."
      },
      {
        id: "da_wo_13",
        question: "Sie beschäftigt sich intensiv _____, neue Methoden zu entwickeln.",
        translation: "(Intensywnie zajmuje się tym, żeby rozwijać nowe metody)",
        options: ["damit", "mit dem", "daran", "darauf"],
        correct: "damit",
        explanation: "Skupienie zajęcia 'damit beschäftigen'! Forma 'da' plus 'mit' pokazująca skupienie aktywności. To praca - wysiłek rozwojowy. Czasownik 'sich beschäftigen mit' plus 'damit' złożenie pokazujące zaangażowanie. Pokazuje czym się zajmuje."
      },
      {
        id: "da_wo_14",
        question: "_____ hast du das Geld ausgegeben? Für Kleidung?",
        translation: "(Na co wydałeś pieniądze? Na ubrania?)",
        options: ["Wofür", "Für was", "Womit", "Wovon"],
        correct: "Wofür",
        explanation: "Pytanie o wydatki 'wofür ausgeben'! Forma 'wo' plus 'für' pytająca na co. To finanse - zapytanie o wydatek. Forma 'wofür' zamiast 'für was' poprawne złożone pytanie. Pytanie o cel wydatku."
      },
      {
        id: "da_wo_15",
        question: "Ich bin sehr zufrieden _____, wie sich alles entwickelt hat gut.",
        translation: "(Jestem bardzo zadowolony z tego, jak wszystko się dobrze rozwinęło)",
        options: ["damit", "mit dem", "darüber", "daran"],
        correct: "damit",
        explanation: "Obiekt satysfakcji 'damit zufrieden'! Forma 'da' plus 'mit' pokazująca co satysfakcjonuje. To zadowolenie - zadowolenie z wyniku. Czasownik 'zufrieden mit' plus 'damit' złożenie pokazujące źródło satysfakcji. Wyrażanie zadowolenia."
      }
    ]
  }
};

export default part11Categories;

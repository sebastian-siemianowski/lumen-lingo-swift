
/**
 * POLISH → FRENCH GRAMMAR - PART 3 (REFINED - NO EXCLAMATIONS)
 * Future & Questions
 */

import { Zap, HelpCircle } from "lucide-react";

export const part3Categories = {
  futur_simple: {
    name: "Futur Simple",
    description: "Czas przyszły prosty",
    level: "intermediate",
    icon: Zap,
    color: "from-purple-400 to-pink-500",
    questions: [
      { 
        id: "pf_f1", 
        question: "Je _____ demain.", 
        translation: "(Zadzwonię jutro)", 
        options: ["appellerai", "appelle", "appeler", "appelé"], 
        correct: "appellerai", 
        explanation: "Futur Simple to elegancki czas przyszły francuski. Tworzy się dodając końcówki do bezokolicznika: je -ai, tu -as, il -a, nous -ons, vous -ez, ils -ont. 'J'appellerai demain' = zadzwonię jutro. Końcówki pochodzą od czasownika 'avoir' - ciekawostka historyczna. Ten czas wyraża przyszłość pewną, obietnicę, przewidywanie. Prostota i elegancja w jednym." 
      },
      { 
        id: "pf_f2", 
        question: "Tu _____ en France.", 
        translation: "(Pojedziesz do Francji)", 
        options: ["iras", "vas", "aller", "allé"], 
        correct: "iras", 
        explanation: "'Aller' ma nieregularny temat w przyszłości: ir-. 'Tu iras en France' = pojedziesz do Francji. Dodaj końcówki do 'ir': irai, iras, ira, irons, irez, iront. Francja jako cel podróży to marzenie wielu. Przyszłość niesie ze sobą możliwości, plany, nadzieje. Nieregularne czasowniki warto zapamiętać osobno." 
      },
      { 
        id: "pf_f3", 
        question: "Elle _____ un livre.", 
        translation: "(Przeczyta książkę)", 
        options: ["lira", "lit", "lire", "lu"], 
        correct: "lira", 
        explanation: "'Lire' ma temat li- w przyszłości. 'Elle lira un livre' = przeczyta książkę. Czasowniki na -re tracą końcowe -e przed dodaniem końcówek: lire → lir- + końcówka. Czytanie w przyszłości to obietnica wiedzy i przyjemności. Literatura otwiera nowe horyzonty." 
      },
      { 
        id: "pf_f4", 
        question: "Nous _____ ensemble.", 
        translation: "(Będziemy pracować razem)", 
        options: ["travaillerons", "travaillons", "travailler", "travaillé"], 
        correct: "travaillerons", 
        explanation: "'Travailler' + -ons dla 'nous'. 'Nous travaillerons ensemble' = będziemy pracować razem. Czasowniki na -er są regularne w przyszłości - bezokolicznik + końcówka. Praca zespołowa to piękna współpraca, synergia talentów. 'Ensemble' (razem) dodaje wymiaru ludzkiego." 
      },
      { 
        id: "pf_f5", 
        question: "Vous _____ bientôt.", 
        translation: "(Przyjdziecie wkrótce)", 
        options: ["viendrez", "venez", "venir", "venu"], 
        correct: "viendrez", 
        explanation: "'Venir' jest nieregularny: viendr-. 'Vous viendrez bientôt' = przyjdziecie wkrótce. 'Bientôt' (wkrótce) dodaje poczucia bliskości przyszłości. Przyjście kogoś to zawsze radość - spotkanie, połączenie. Nieregularnych czasowników jest kilkanaście - warto je znać." 
      },
      { 
        id: "pf_f6", 
        question: "Ils _____ leurs devoirs.", 
        translation: "(Zrobią swoje zadania)", 
        options: ["feront", "font", "faire", "fait"], 
        correct: "feront", 
        explanation: "'Faire' ma nieregularny temat fer-. 'Ils feront leurs devoirs' = zrobią swoje zadania. 'Faire' to jeden z najczęstszych czasowników - używany w setkach wyrażeń. Odrabianie lekcji to droga do wiedzy. Przyszłość wymaga przygotowania w teraźniejszości." 
      },
      { 
        id: "pf_f7", 
        question: "Je _____ médecin.", 
        translation: "(Będę lekarzem)", 
        options: ["serai", "suis", "être", "été"], 
        correct: "serai", 
        explanation: "'Être' ma temat ser- w przyszłości. 'Je serai médecin' = będę lekarzem. Profesja w przyszłości to aspiracja, marzenie. 'Être' jako najważniejszy czasownik ma swoje specjalne formy. Bycie kimś to proces stawania się - transformacja." 
      },
      { 
        id: "pf_f8", 
        question: "Tu _____ raison.", 
        translation: "(Będziesz mieć rację)", 
        options: ["auras", "as", "avoir", "eu"], 
        correct: "auras", 
        explanation: "'Avoir' ma temat aur- w przyszłości. 'Tu auras raison' = będziesz mieć rację. Przyszłe potwierdzenie prawdy. 'Avoir raison' (mieć rację) to typowe francuskie wyrażenie. Czas pokaże, kto miał rację - la patience est une vertu." 
      },
      { 
        id: "pf_f9", 
        question: "Elle _____ demain.", 
        translation: "(Przyjdzie jutro)", 
        options: ["viendra", "vient", "venir", "venu"], 
        correct: "viendra", 
        explanation: "'Venir' dla trzeciej osoby: viendra. 'Elle viendra demain' = przyjdzie jutro. 'Demain' (jutro) to obietnica nowego dnia. Przychodzenie to ruch ku czemuś, ku komuś. Język wyraża relacje przestrzenne z subtelnością." 
      },
      { 
        id: "pf_f10", 
        question: "Nous _____ contents.", 
        translation: "(Będziemy szczęśliwi)", 
        options: ["serons", "sommes", "être", "été"], 
        correct: "serons", 
        explanation: "'Être' dla 'nous': serons. 'Nous serons contents' = będziemy szczęśliwi. Szczęście w przyszłości to optymizm, nadzieja. 'Content' (szczęśliwy, zadowolony) to przyjemne słowo. Pozytywne nastawienie do przyszłości buduje lepsze jutro." 
      },
      { 
        id: "pf_f11", 
        question: "Vous _____ du français.", 
        translation: "(Będziecie mówić po francusku)", 
        options: ["parlerez", "parlez", "parler", "parlé"], 
        correct: "parlerez", 
        explanation: "'Parler' + -ez dla 'vous'. 'Vous parlerez du français' = będziecie mówić po francusku. To piękna wizja - opanowanie języka w przyszłości. Nauka języków to inwestycja w siebie. 'Parler' otwiera drzwi do nowych kultur i ludzi." 
      },
      { 
        id: "pf_f12", 
        question: "Ils _____ tard.", 
        translation: "(Przyjdą późno)", 
        options: ["arriveront", "arrivent", "arriver", "arrivé"], 
        correct: "arriveront", 
        explanation: "'Arriver' + -ont dla 'ils'. 'Ils arriveront tard' = przyjdą późno. 'Tard' (późno) to kwestia relatywna. Przybywanie w przyszłości to pewność planu. Punktualność jest różnie ceniona w różnych kulturach - czasem elastyczność jest cnotą." 
      },
      { 
        id: "pf_f13", 
        question: "Je _____ la vérité.", 
        translation: "(Powiem prawdę)", 
        options: ["dirai", "dis", "dire", "dit"], 
        correct: "dirai", 
        explanation: "'Dire' (powiedzieć) ma temat dir- w przyszłości. 'Je dirai la vérité' = powiem prawdę. Prawda jest fundamentem zaufania. 'La vérité' (prawda) to potężne słowo. Obietnica szczerości w przyszłości buduje uczciwość." 
      },
      { 
        id: "pf_f14", 
        question: "Tu _____ ton ami.", 
        translation: "(Zobaczysz swojego przyjaciela)", 
        options: ["verras", "vois", "voir", "vu"], 
        correct: "verras", 
        explanation: "'Voir' ma temat verr- w przyszłości. 'Tu verras ton ami' = zobaczysz swojego przyjaciela. Spotkanie z przyjacielem to radość. Widzenie w przyszłości to antycypacja, oczekiwanie. Przyjaźń jest skarbem w każdej kulturze." 
      },
      { 
        id: "pf_f15", 
        question: "Elle _____ beaucoup.", 
        translation: "(Będzie uczyć się dużo)", 
        options: ["apprendra", "apprend", "apprendre", "appris"], 
        correct: "apprendra", 
        explanation: "'Apprendre' dla trzeciej osoby: apprendra. 'Elle apprendra beaucoup' = będzie uczyć się dużo. Nauka to inwestycja w przyszłość. 'Beaucoup' (dużo) pokazuje determinację. Wiedza to klucz do możliwości i wolności." 
      }
    ]
  },

  questions: {
    name: "Questions",
    description: "Pytania w języku francuskim",
    level: "intermediate",
    icon: HelpCircle,
    color: "from-orange-400 to-red-500",
    questions: [
      { 
        id: "pf_q1", 
        question: "_____ parles-tu?", 
        translation: "(Co mówisz?)", 
        options: ["Que", "Qui", "Où", "Quand"], 
        correct: "Que", 
        explanation: "Pytania we francuskim można tworzyć na trzy sposoby: intonacją, z 'est-ce que', lub inwersją. 'Que parles-tu?' (formalnie: Que dis-tu?) = Co mówisz? 'Que' to 'co'. Inwersja (czasownik-podmiot) brzmi elegancko. W codziennej mowie częściej 'tu dis quoi?' lub 'qu'est-ce que tu dis?'. Formalność zależy od kontekstu." 
      },
      { 
        id: "pf_q2", 
        question: "_____ habites-tu?", 
        translation: "(Gdzie mieszkasz?)", 
        options: ["Où", "Que", "Qui", "Quand"], 
        correct: "Où", 
        explanation: "'Où' (gdzie) pyta o miejsce. 'Où habites-tu?' = Gdzie mieszkasz? Inwersja tu-habites → habites-tu. To klasyczna forma pytania francuskiego. Miejsce zamieszkania to część tożsamości. 'Où' otwiera geograficzne rozmowy." 
      },
      { 
        id: "pf_q3", 
        question: "_____ est ton nom?", 
        translation: "(Jakie jest twoje imię?)", 
        options: ["Quel", "Qui", "Que", "Où"], 
        correct: "Quel", 
        explanation: "'Quel' (jaki/jaka/jakie) zgadza się z rzeczownikiem w rodzaju i liczbie. 'Quel est ton nom?' = Jakie jest twoje imię? 'Quel' ma formy: quel (męski), quelle (żeński), quels (mnogi męski), quelles (mnogi żeński). Imię to nasza pierwsza identyfikacja - ważne pytanie." 
      },
      { 
        id: "pf_q4", 
        question: "_____ vient avec nous?", 
        translation: "(Kto przychodzi z nami?)", 
        options: ["Qui", "Que", "Où", "Quand"], 
        correct: "Qui", 
        explanation: "'Qui' (kto) pyta o osoby. 'Qui vient avec nous?' = Kto przychodzi z nami? 'Qui' jako podmiot nie wymaga inwersji. To prostsze niż z innymi słowami pytającymi. Zaproszenie kogoś to budowanie wspólnoty." 
      },
      { 
        id: "pf_q5", 
        question: "_____ arrives-tu?", 
        translation: "(Kiedy przyjedziesz?)", 
        options: ["Quand", "Où", "Qui", "Que"], 
        correct: "Quand", 
        explanation: "'Quand' (kiedy) pyta o czas. 'Quand arrives-tu?' = Kiedy przyjedziesz? Czas przybycia to praktyczna informacja. 'Quand' organizuje nasze życie w timeline. Punktualność i planowanie są kulturowo ważne." 
      },
      { 
        id: "pf_q6", 
        question: "_____ tu aimes le chocolat?", 
        translation: "(Czy lubisz czekoladę?)", 
        options: ["Est-ce que", "Qui", "Où", "Que"], 
        correct: "Est-ce que", 
        explanation: "'Est-ce que' to uniwersalny sposób tworzenia pytań - dodaj na początku zdania. 'Est-ce que tu aimes le chocolat?' = Czy lubisz czekoladę? Nie wymaga inwersji - prosty i popularny w mowie. 'Est-ce que' to jak polski 'czy'. Czekolada to uniwersalne uczucie." 
      },
      { 
        id: "pf_q7", 
        question: "_____ fait-il?", 
        translation: "(Co on robi?)", 
        options: ["Que", "Qui", "Où", "Quand"], 
        correct: "Que", 
        explanation: "'Que fait-il?' = Co on robi? Inwersja il-fait → fait-il. Dodajemy -t- między samogłoskami dla eufonii: fait-il, a-t-il, va-t-elle. To detale, które czynią francuski muzycznym. Ciekawość o czyjeś działania to naturalny element komunikacji." 
      },
      { 
        id: "pf_q8", 
        question: "_____ est-ce?", 
        translation: "(Co to jest?)", 
        options: ["Qu'", "Qui", "Où", "Quand"], 
        correct: "Qu'", 
        explanation: "'Qu'est-ce?' = Co to? 'Que' skraca się do 'qu'' przed 'est-ce'. Pełna forma: 'Qu'est-ce que c'est?'. To podstawowe pytanie identyfikacji. Poznawanie nazw rzeczy to fundament uczenia się języka." 
      },
      { 
        id: "pf_q9", 
        question: "_____ temps fait-il?", 
        translation: "(Jaka jest pogoda?)", 
        options: ["Quel", "Qui", "Où", "Que"], 
        correct: "Quel", 
        explanation: "'Quel temps fait-il?' = Jaka jest pogoda? (dosłownie: jaką pogodę robi?). 'Temps' jest męski, więc 'quel'. Pogoda to uniwersalny temat rozmów - bezpieczny starter konwersacji. Każda kultura ma swoje pogodowe obsesje." 
      },
      { 
        id: "pf_q10", 
        question: "_____ veux-tu manger?", 
        translation: "(Co chcesz zjeść?)", 
        options: ["Que", "Qui", "Où", "Quand"], 
        correct: "Que", 
        explanation: "'Que veux-tu manger?' = Co chcesz zjeść? Inwersja tu-veux → veux-tu. Pytanie o preferencje żywieniowe to codzienna interakcja. Jedzenie łączy ludzi - wybory kulinarne mówią o nas wiele. Francuski jest językiem gastronomii." 
      },
      { 
        id: "pf_q11", 
        question: "_____ avez-vous?", 
        translation: "(Ile macie?)", 
        options: ["Combien", "Où", "Qui", "Que"], 
        correct: "Combien", 
        explanation: "'Combien' (ile/jak dużo) pyta o ilość. 'Combien avez-vous?' = Ile macie? Może być o pieniądzach, czasie, rzeczach. 'Combien' z 'de': combien de temps (ile czasu), combien d'argent (ile pieniędzy). Ilości są ważne w praktycznym życiu." 
      },
      { 
        id: "pf_q12", 
        question: "_____ habitez-vous?", 
        translation: "(Gdzie mieszkacie?)", 
        options: ["Où", "Que", "Qui", "Quand"], 
        correct: "Où", 
        explanation: "'Où habitez-vous?' = Gdzie mieszkacie? Formalna inwersja. W nieformalnej mowie: 'Vous habitez où?' - prostsze. Pytanie o miejsce zamieszkania to grzeczny sposób poznania kogoś. Geografia łączy i dzieli ludzi." 
      },
      { 
        id: "pf_q13", 
        question: "_____ est ton anniversaire?", 
        translation: "(Kiedy są twoje urodziny?)", 
        options: ["Quand", "Où", "Qui", "Que"], 
        correct: "Quand", 
        explanation: "'Quand est ton anniversaire?' = Kiedy są twoje urodziny? Urodziny to osobiste święto - celebracja życia. 'Anniversaire' to piękne słowo francuskie. Pamiętanie urodzin pokazuje troskę o drugą osobę." 
      },
      { 
        id: "pf_q14", 
        question: "_____ tu t'appelles?", 
        translation: "(Jak się nazywasz?)", 
        options: ["Comment", "Qui", "Où", "Que"], 
        correct: "Comment", 
        explanation: "'Comment' (jak) pyta o sposób. 'Comment tu t'appelles?' = Jak się nazywasz? (dosłownie: jak się nazywasz?). To pierwsze pytanie w znajomości. 'S'appeler' (nazywać się) to czasownik zwrotny. Imiona tworzą więź personalną." 
      },
      { 
        id: "pf_q15", 
        question: "_____ ça va?", 
        translation: "(Jak się masz?)", 
        options: ["Comment", "Qui", "Où", "Que"], 
        correct: "Comment", 
        explanation: "'Comment ça va?' = Jak się masz? Najpopularniejsze pytanie francuskie. 'Ça va' to nieformalne 'to idzie'. Odpowiedź: 'Ça va bien' (dobrze) lub po prostu 'Ça va'. To rytuał społeczny - pokazanie troski o samopoczucie drugiej osoby." 
      }
    ]
  }
};

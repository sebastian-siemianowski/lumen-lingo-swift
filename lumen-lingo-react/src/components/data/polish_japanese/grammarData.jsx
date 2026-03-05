/**
 * POLISH → JAPANESE GRAMMAR
 * 
 * Native Language: Polish (Polski)
 * Target Language: Japanese (日本語)
 */

import { BookOpen, MessageSquare, Layers, Zap, Target, Trophy, Star, Award, Crown, Sparkles } from "lucide-react";

export const grammarCategories = {
  particles: {
    name: "Partykuły japońskie",
    description: "Podstawowe partykuły gramatyczne",
    level: "beginner",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    questions: [
      {
        id: "pj_gram_1",
        question: "Która partykuła oznacza podmiot zdania?",
        options: ["は (wa)", "を (wo/o)", "に (ni)", "で (de)"],
        correct: "は (wa)",
        explanation: "Partykuła 'は' (wa) oznacza temat/podmiot zdania. Np. 'わたしは学生です' (watashi wa gakusei desu) = Jestem studentem."
      },
      {
        id: "pj_gram_2",
        question: "Która partykuła oznacza dopełnienie bliższe?",
        options: ["は (wa)", "を (wo/o)", "に (ni)", "で (de)"],
        correct: "を (wo/o)",
        explanation: "Partykuła 'を' (wymawiana 'o') oznacza dopełnienie bezpośrednie. Np. 'りんごを食べます' (ringo wo tabemasu) = Jem jabłko."
      },
      {
        id: "pj_gram_3",
        question: "Która partykuła oznacza kierunek/cel?",
        options: ["は (wa)", "を (wo/o)", "に (ni)", "の (no)"],
        correct: "に (ni)",
        explanation: "Partykuła 'に' oznacza kierunek lub cel. Np. '学校に行きます' (gakkou ni ikimasu) = Idę do szkoły."
      },
      {
        id: "pj_gram_4",
        question: "Która partykuła oznacza miejsce czynności?",
        options: ["は (wa)", "を (wo/o)", "に (ni)", "で (de)"],
        correct: "で (de)",
        explanation: "Partykuła 'で' oznacza miejsce, w którym odbywa się czynność. Np. '図書館で勉強します' (toshokan de benkyou shimasu) = Uczę się w bibliotece."
      },
      {
        id: "pj_gram_5",
        question: "Która partykuła łączy rzeczowniki (oznacza przynależność)?",
        options: ["は (wa)", "を (wo/o)", "の (no)", "で (de)"],
        correct: "の (no)",
        explanation: "Partykuła 'の' łączy rzeczowniki i oznacza przynależność. Np. 'わたしの本' (watashi no hon) = moja książka."
      }
    ]
  },

  verb_forms: {
    name: "Formy czasowników",
    description: "Podstawowe formy czasowników",
    level: "intermediate",
    icon: Zap,
    color: "from-green-400 to-emerald-500",
    questions: [
      {
        id: "pj_gram_6",
        question: "Jaka jest forma grzecznościowa czasownika 'taberu' (jeść)?",
        options: ["たべる", "たべます", "たべました", "たべません"],
        correct: "たべます",
        explanation: "Forma grzecznościowa (forma -masu) 'taberu' to 'tabemasu' (食べます). Używamy jej w oficjalnych sytuacjach."
      },
      {
        id: "pj_gram_7",
        question: "Jaka jest przeszła forma czasownika 'ikimasu' (iść)?",
        options: ["行きます", "行きました", "行きません", "行く"],
        correct: "行きました",
        explanation: "Przeszła forma grzecznościowa 'ikimasu' to 'ikimashita' (行きました). Oznacza 'poszedłem/poszłam'."
      },
      {
        id: "pj_gram_8",
        question: "Jaka jest negatywna forma czasownika 'nomimasu' (pić)?",
        options: ["飲みます", "飲みました", "飲みません", "飲む"],
        correct: "飲みません",
        explanation: "Negatywna forma grzecznościowa 'nomimasu' to 'nomimasen' (飲みません). Oznacza 'nie piję'."
      },
      {
        id: "pj_gram_9",
        question: "Co oznacza 'て-form' (forma -te)?",
        options: ["Tylko przeszłość", "Tylko przyszłość", "Łączenie zdań i polecenia", "Pytania"],
        correct: "Łączenie zdań i polecenia",
        explanation: "Forma -te (て-form) służy do łączenia zdań, tworzenia poleceń i wielu innych celów. Np. '食べて' (tabete) = jedz / po jedzeniu."
      },
      {
        id: "pj_gram_10",
        question: "Jaka jest forma słownikowa (infinitive) czasownika 'hanashimasu'?",
        options: ["話す (hanasu)", "話した (hanashita)", "話します (hanashimasu)", "話して (hanashite)"],
        correct: "話す (hanasu)",
        explanation: "Forma słownikowa (dictionary form) 'hanashimasu' to 'hanasu' (話す). Jest to podstawowa forma czasownika."
      }
    ]
  },

  adjectives: {
    name: "Przymiotniki",
    description: "Przymiotniki i- oraz na-",
    level: "intermediate",
    icon: Star,
    color: "from-purple-400 to-pink-500",
    questions: [
      {
        id: "pj_gram_11",
        question: "Które słowo jest przymiotnikiem -i?",
        options: ["きれい (kirei - ładny)", "おおきい (ookii - duży)", "げんき (genki - zdrowy)", "しずか (shizuka - cichy)"],
        correct: "おおきい (ookii - duży)",
        explanation: "Przymiotniki -i kończą się na 'い'. 'おおきい' (ookii - duży) jest przymiotnikiem -i. Kirei, genki i shizuka to przymiotniki na-."
      },
      {
        id: "pj_gram_12",
        question: "Jak powiedzieć 'to jest ładne' używając 'kirei' (きれい)?",
        options: ["きれいです", "きれいいです", "きれいだ", "きれいな"],
        correct: "きれいです",
        explanation: "Przymiotniki na- używają 'です' (desu) bezpośrednio: きれいです (kirei desu) = jest ładne."
      },
      {
        id: "pj_gram_13",
        question: "Jaka jest przeszła forma przymiotnika 'takai' (たかい - drogi)?",
        options: ["たかいです", "たかかったです", "たかくです", "たかいでした"],
        correct: "たかかったです",
        explanation: "Przeszła forma przymiotników -i: い zmienia się na かった. 'たかい' → 'たかかった' (było drogie)."
      },
      {
        id: "pj_gram_14",
        question: "Jak połączyć przymiotnik -na z rzeczownikiem? (np. 'cicha biblioteka')",
        options: ["しずか図書館", "しずかい図書館", "しずかな図書館", "しずかで図書館"],
        correct: "しずかな図書館",
        explanation: "Przymiotniki na- używają 'な' przed rzeczownikiem: しずかな図書館 (shizuka na toshokan) = cicha biblioteka."
      },
      {
        id: "pj_gram_15",
        question: "Jaka jest negatywna forma 'yasui' (やすい - tani)?",
        options: ["やすいません", "やすくないです", "やすくありません", "やすいじゃない"],
        correct: "やすくないです",
        explanation: "Negatywna forma przymiotników -i: い zmienia się na くない. 'やすい' → 'やすくない' (nie jest tanie)."
      }
    ]
  },

  counters: {
    name: "Liczebniki klasyfikujące",
    description: "Liczebniki dla różnych obiektów",
    level: "advanced",
    icon: Layers,
    color: "from-orange-400 to-red-500",
    questions: [
      {
        id: "pj_gram_16",
        question: "Który liczebnik używamy dla ludzi?",
        options: ["〜本 (-hon)", "〜人 (-nin/-ri)", "〜匹 (-hiki)", "〜枚 (-mai)"],
        correct: "〜人 (-nin/-ri)",
        explanation: "'〜人' (-nin lub -ri) używamy dla ludzi. Np. 一人 (hitori) = jedna osoba, 二人 (futari) = dwie osoby, 三人 (sannin) = trzy osoby."
      },
      {
        id: "pj_gram_17",
        question: "Jak powiedzieć 'trzy książki'?",
        options: ["三本 (sanbon)", "三冊 (sansatsu)", "三枚 (sanmai)", "三個 (sanko)"],
        correct: "三冊 (sansatsu)",
        explanation: "'〜冊' (-satsu) używamy dla książek. 三冊 (sansatsu) = trzy książki."
      },
      {
        id: "pj_gram_18",
        question: "Który liczebnik używamy dla małych zwierząt?",
        options: ["〜本 (-hon)", "〜人 (-nin)", "〜匹 (-hiki)", "〜枚 (-mai)"],
        correct: "〜匹 (-hiki)",
        explanation: "'〜匹' (-hiki) używamy dla małych zwierząt. Np. 一匹 (ippiki) = jedno zwierzę."
      },
      {
        id: "pj_gram_19",
        question: "Jak powiedzieć 'cztery długie przedmioty' (np. ołówki)?",
        options: ["四本 (yonhon)", "四冊 (yonsatsu)", "四枚 (yonmai)", "四個 (yonko)"],
        correct: "四本 (yonhon)",
        explanation: "'〜本' (-hon) używamy dla długich, cylindrycznych przedmiotów. 四本 (yonhon) = cztery (długie przedmioty)."
      },
      {
        id: "pj_gram_20",
        question: "Który liczebnik używamy dla płaskich przedmiotów (papiery, zdjęcia)?",
        options: ["〜本 (-hon)", "〜冊 (-satsu)", "〜枚 (-mai)", "〜個 (-ko)"],
        correct: "〜枚 (-mai)",
        explanation: "'〜枚' (-mai) używamy dla płaskich, cienkich przedmiotów. Np. 一枚 (ichimai) = jedna kartka."
      }
    ]
  },

  polite_speech: {
    name: "Mowa grzecznościowa",
    description: "Poziomy grzeczności w japońskim",
    level: "advanced",
    icon: Award,
    color: "from-pink-400 to-rose-500",
    questions: [
      {
        id: "pj_gram_21",
        question: "Która forma jest najbardziej grzeczna?",
        options: ["行く (iku)", "行きます (ikimasu)", "いらっしゃいます (irasshaimasu)", "行った (itta)"],
        correct: "いらっしゃいます (irasshaimasu)",
        explanation: "'いらっしゃいます' (irasshaimasu) to forma honoryfikatywna, najgrzeczniejsza. Używamy jej mówiąc o działaniach innych osób."
      },
      {
        id: "pj_gram_22",
        question: "Jak grzecznie powiedzieć 'jem'?",
        options: ["食べる (taberu)", "食べます (tabemasu)", "いただきます (itadakimasu)", "召し上がります (meshiagarimasu)"],
        correct: "いただきます (itadakimasu)",
        explanation: "'いただきます' (itadakimasu) to pokorna forma 'jeść', używana gdy mówimy o sobie w grzeczny sposób."
      },
      {
        id: "pj_gram_23",
        question: "Jak grzecznie zapytać 'gdzie pan/pani mieszka?'",
        options: ["どこに住んでいますか", "どこにお住まいですか", "どこに住むか", "住んでいる場所は"],
        correct: "どこにお住まいですか",
        explanation: "'お住まい' (osumi) to honoryfikatywna forma 'mieszkać'. どこにお住まいですか = Gdzie pan/pani mieszka?"
      },
      {
        id: "pj_gram_24",
        question: "Jak powiedzieć 'jestem' w formalnej sytuacji?",
        options: ["だ (da)", "です (desu)", "でございます (de gozaimasu)", "である (de aru)"],
        correct: "でございます (de gozaimasu)",
        explanation: "'でございます' (de gozaimasu) to najbardziej formalna wersja 'です'. Używana w bardzo oficjalnych sytuacjach."
      },
      {
        id: "pj_gram_25",
        question: "Którą formą powinieneś mówić o działaniach swojego szefa?",
        options: ["Forma casualna", "Forma -masu", "Forma honoryfikatywna", "Forma pokorna"],
        correct: "Forma honoryfikatywna",
        explanation: "O działaniach przełożonych mówimy formą honoryfikatywną (sonkeigo), podnosząc ich status."
      }
    ]
  },

  questions: {
    name: "Tworzenie pytań",
    description: "Jak zadawać pytania po japońsku",
    level: "beginner",
    icon: MessageSquare,
    color: "from-cyan-400 to-blue-500",
    questions: [
      {
        id: "pj_gram_26",
        question: "Która partykuła tworzy pytanie?",
        options: ["は (wa)", "を (wo)", "か (ka)", "に (ni)"],
        correct: "か (ka)",
        explanation: "Partykuła 'か' (ka) na końcu zdania tworzy pytanie. Np. '学生ですか' (gakusei desu ka) = Czy jesteś studentem?"
      },
      {
        id: "pj_gram_27",
        question: "Jak powiedzieć 'co'?",
        options: ["誰 (dare)", "何 (nani/nan)", "どこ (doko)", "いつ (itsu)"],
        correct: "何 (nani/nan)",
        explanation: "'何' (nani/nan) oznacza 'co'. Np. '何を食べますか' (nani wo tabemasu ka) = Co jesz?"
      },
      {
        id: "pj_gram_28",
        question: "Jak powiedzieć 'gdzie'?",
        options: ["誰 (dare)", "何 (nani)", "どこ (doko)", "いつ (itsu)"],
        correct: "どこ (doko)",
        explanation: "'どこ' (doko) oznacza 'gdzie'. Np. 'どこに行きますか' (doko ni ikimasu ka) = Gdzie idziesz?"
      },
      {
        id: "pj_gram_29",
        question: "Jak powiedzieć 'kiedy'?",
        options: ["誰 (dare)", "何 (nani)", "どこ (doko)", "いつ (itsu)"],
        correct: "いつ (itsu)",
        explanation: "'いつ' (itsu) oznacza 'kiedy'. Np. 'いつ行きますか' (itsu ikimasu ka) = Kiedy idziesz?"
      },
      {
        id: "pj_gram_30",
        question: "Jak powiedzieć 'kto'?",
        options: ["誰 (dare)", "何 (nani)", "どこ (doko)", "いつ (itsu)"],
        correct: "誰 (dare)",
        explanation: "'誰' (dare) oznacza 'kto'. Np. '誰ですか' (dare desu ka) = Kto to jest?"
      }
    ]
  }
};

export default grammarCategories;
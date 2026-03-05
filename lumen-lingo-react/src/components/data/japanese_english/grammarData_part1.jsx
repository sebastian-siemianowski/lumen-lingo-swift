
/**
 * JAPANESE → ENGLISH GRAMMAR - PART 1
 * Articles & Subject Pronouns
 */

import { FileText, User } from "lucide-react";

export const part1Categories = {
  articles: {
    name: "Articles (a/an/the)",
    description: "英語の冠詞",
    level: "beginner",
    icon: FileText,
    color: "from-blue-400 to-cyan-500",
    questions: [
      { id: "je_art1", question: "I have _____ book.", translation: "(私は本を持っています)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "英語の冠詞の世界へようこそ。日本語には存在しないものです。子音の前では'a'を使います：'a book'。これは「一冊の本、何か特定されていない本」を意味します。日本語では「本を持っています」と言いますが、それが特定の本なのか、ただの本なのかを明示しません。英語では毎回、a/an（不定冠詞）または the（定冠詞）でこの区別をする必要があります。'a'は「一つの」に似ていますが、もっと広く使われます。" },
      { id: "je_art2", question: "I have _____ apple.", translation: "(私はりんごを持っています)", options: ["an", "a", "the", "no article"], correct: "an", explanation: "母音の前では'an'を使います：'an apple'。発音をスムーズにするために'a'が'an'に変わります。スペルではなく音に注目してください - 'an hour'（hは無音）、でも'a house'（hは発音される）。日本語にはこの概念がありませんが、英語では初めて言及する可算名詞にはこれが必要です。a/anの区別は純粋に音声的なもので、話し言葉の流れを自然にします。" },
      { id: "je_art3", question: "_____ book I bought is good.", translation: "(私が買った本は良いです)", options: ["The", "A", "An", "no article"], correct: "The", explanation: "'the'は両者が知っている特定のものに使います：'The book I bought'。これは確定的です - 特定の一冊の本について話しています。日本語では「その」や文脈で特定性を示しますが、英語では文法的に'the'が必要です。すでに言及したもの、または「私が買った本」のようにどれを指しているか明確な場合は'the'を使います。これは聞き手が特定できる項目を指していることを伝えます。" },
      { id: "je_art4", question: "I go to _____ school.", translation: "(私は学校に行きます)", options: ["no article", "a", "an", "the"], correct: "no article", explanation: "一部の表現では冠詞を使いません：'go to school'、'go to work'、'go to bed'。これらは建物ではなく活動を指します。「学校に行く」と言うとき、学校に通うという活動について話しています。英語では冠詞を省略することでこれを表現します。でも'I go to the school'と言えば、物理的な建物を意味します。この微妙な区別は多くの定型表現に現れます。" },
      { id: "je_art5", question: "_____ sun is bright.", translation: "(太陽が明るいです)", options: ["The", "A", "An", "no article"], correct: "The", explanation: "唯一のものには'the'を使います：'the sun'、'the moon'、'the earth'。太陽は（私たちの文脈では）一つしかないので、常に確定的です。日本語では「太陽」と言うだけで、唯一性が明白だからマーカーは不要です。英語では'the'で明示的に確定性を示します。これは唯一の地理的特徴、天体、有名なランドマークにも適用されます - すべて'the'を取ります。" },
      { id: "je_art6", question: "I like _____ music.", translation: "(私は音楽が好きです)", options: ["no article", "a", "an", "the"], correct: "no article", explanation: "抽象的な概念や一般的なカテゴリーには冠詞を使いません：'I like music'。一般的な音楽について話すとき、冠詞は不要です。でも'the music at the party was good'と言えば、特定の音楽について話しているので'the'を使います。日本語では文法的にこの区別をしませんが、英語では全ての音楽を意味するのか特定の音楽を意味するのかを考える必要があります。" },
      { id: "je_art7", question: "He is _____ teacher.", translation: "(彼は先生です)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "単数名詞の職業には'a/an'が必要です：'He is a teacher'。日本語では「彼は先生です」とマーカーなしで言います。英語では'a'が必要です。なぜならteacherは可算名詞だからです。彼が教師というカテゴリーに属すると言っているのです。'a'がないと、英語話者には文が不完全に感じられます。これは不定冠詞の最も一般的な用法の一つです - 職業や役割を識別する時です。" },
      { id: "je_art8", question: "_____ water is important.", translation: "(水は重要です)", options: ["no article", "A", "An", "The"], correct: "no article", explanation: "一般的な不可算名詞には冠詞を使いません：'Water is important'。一般的な物質としての水について話すとき、冠詞は不要です。'the water in this bottle'と言えば、どの水かを特定しているので'the'を使います。日本語では「水」を一般的か特定かに関わらず同じように扱い、文脈に依存します。英語では冠詞を通じて文法的にこれを区別します。" },
      { id: "je_art9", question: "I saw _____ movie yesterday.", translation: "(私は昨日映画を見ました)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "可算名詞の初出には'a/an'が必要です：'I saw a movie'。この映画を会話に導入しています。日本語では「映画を見ました」と確定か不確定かを示さずに言います。英語ではこの最初の導入に'a'が必要です。その後も話を続ける場合は'the movie was good'と言い、話し手と聞き手の両方がどの映画かを知っているので'the'に切り替えます。" },
      { id: "je_art10", question: "_____ movie was interesting.", translation: "(その映画は面白かったです)", options: ["The", "A", "An", "no article"], correct: "The", explanation: "二度目の言及には'the'を使います：'The movie was interesting'。'a'で導入した後、その後の言及では'the'に切り替えます。これは話し手と聞き手の両方がどの映画かを知っていることを示します。日本語では「その」や文脈を使います。英語の冠詞システムは、情報が新しい（a/an）か既知（the）かを明示的に追跡します。この情報の流れの標識は英語文法に組み込まれています。" },
      { id: "je_art11", question: "I play _____ piano.", translation: "(私はピアノを弾きます)", options: ["the", "a", "an", "no article"], correct: "the", explanation: "楽器には'the'を使います：'play the piano'。これは英語の固定パターンです。ピアノを所有していても、演奏について話すときは'a piano'ではなく'the piano'と言います。日本語では「ピアノを弾く」とマーカーなしで言います。英語の楽器に関する慣習は慣用的です - すべての楽器を演奏するときは'the'を取ります：the guitar、the violin、the drums。" },
      { id: "je_art12", question: "_____ dogs are animals.", translation: "(犬は動物です)", options: ["no article", "The", "A", "An"], correct: "no article", explanation: "一般的な複数名詞には冠詞を使いません：'Dogs are animals'。すべての犬について述べるとき、複数形で冠詞なしを使います。'the dogs'と言えば、特定の犬について話していることになります。これは英語がカテゴリーのすべてのメンバーと特定のメンバーの違いを示す一つの方法です。日本語では文脈や「犬たち」のような言葉を使いますが、文法的にこの区別を要求しません。" },
      { id: "je_art13", question: "I need _____ new computer.", translation: "(私は新しいコンピュータが必要です)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "単数可算名詞には'a/an'が必要です：'I need a new computer'。まだ特定のコンピュータについて話していません、何か新しいコンピュータならいいのです。日本語では「新しいコンピュータが必要です」と確定性を示さずに言います。英語ではこの不確定な参照に'a'を使う必要があります。一つ選んだら、'I'll buy the new computer'（選んだ特定のもの）と言います。" },
      { id: "je_art14", question: "_____ English is difficult.", translation: "(英語は難しいです)", options: ["no article", "The", "A", "An"], correct: "no article", explanation: "言語には冠詞を使いません：'English is difficult'。言語全体について話すとき、冠詞は不要です。これは固定ルールです - すべての言語名は単独で使います。ただし、'the English language'と言う場合は、'language'が冠詞を必要とする名詞なので'the'を使います。これらの固定パターンを理解することで、冠詞が必要か任意か禁止かを知ることができます。" },
      { id: "je_art15", question: "I went to _____ hospital.", translation: "(私は病院に行きました)", options: ["the", "a", "an", "no article"], correct: "the", explanation: "アメリカ英語では通常、特定の場所に'the hospital'と言います：'I went to the hospital'。これは特定の病院、おそらく近くの病院またはみんなが知っている病院を意味します。イギリス英語では活動を指すときに'to hospital'（冠詞なし）と言うことがあります。日本語では「病院に行った」とこれを示しません。英語では通常、公共の場所にはその地域の特定のものを意味する場合'the'が必要です。" }
    ]
  },

  subject_pronouns: {
    name: "Subject Pronouns",
    description: "主語の代名詞",
    level: "beginner",
    icon: User,
    color: "from-purple-400 to-pink-500",
    questions: [
      { id: "je_subj1", question: "_____ am a student.", translation: "(私は学生です)", options: ["I", "Me", "My", "Mine"], correct: "I", explanation: "英語では主語代名詞を明示的に要求します：'I am a student'。日本語では「私は」を省略できることがありますが、英語では常に主語が必要です。'I'は主語形です - 動作を行う、または説明される側です。'me'を主語として使わないでください（よくある間違い）。主語は英語のすべての節に現れなければなりません。これは文を日本語よりも明示的にします。日本語では文脈から代名詞の必要性がなくなることがよくあります。" },
      { id: "je_subj2", question: "_____ is my friend.", translation: "(彼は私の友達です)", options: ["He", "Him", "His", "He's"], correct: "He", explanation: "男性の主語形：'He is my friend'。日本語では文脈から「彼は」を省略できますが、英語では常に主語が必要です。'He'は動作を行うか、存在の動作を受けます。'him'は目的格（I see him）と混同しないでください。英語は主語形と目的語形を厳密に区別し、文法的機能に基づいて正しく選択する必要があります。日本語では同じ言葉が両方の機能を果たし、助詞が役割を示します。" },
      { id: "je_subj3", question: "_____ are happy.", translation: "(私たちは幸せです)", options: ["We", "Us", "Our", "Ours"], correct: "We", explanation: "一人称複数の主語：'We are happy'。日本語では会話で「私たち」を省略できますが、英語では'we'が必要です。これは主語形です - 'us'は目的格です。英語はすべての代名詞で明確な主語-目的語の区別を維持します。英語がすべての文に明示的な主語を必要とすることを理解すると、それらを省略するという一般的な誤りを避けることができます。これは日本語話者には自然に感じられますが、英語では文法的に間違っています。" },
      { id: "je_subj4", question: "_____ is reading.", translation: "(彼女は読んでいます)", options: ["She", "Her", "Hers", "She's"], correct: "She", explanation: "女性の主語形：'She is reading'。日本語では文脈から「彼女は」を省略できますが、英語では常に必要です。'She'が読んでいるので、主語です。目的格は'her'（I see her）です。英語の性別代名詞は日本語とは異なります。日本語では「彼/彼女」はあまり一般的に使われず、文脈で十分なことが多いです。英語では代名詞で明示的な性別の標識を要求し、人への言及ごとにこの選択が必要になります。" },
      { id: "je_subj5", question: "_____ is on the table.", translation: "(それはテーブルの上にあります)", options: ["It", "Its", "It's", "They"], correct: "It", explanation: "物の主語形：'It is on the table'。日本語では主語なしで「あります」と言えますが、英語では'it'が必要です。この代名詞は物、動物、概念に使えます。'it'（代名詞）と'it's'（it is）や'its'（所有格）を混同しないでください。英語は物について話すときでも主語を必要とします。日本語では主題を文脈から理解できるのとは異なります。この明示的な参照は英語の文構造の基本です。" },
      { id: "je_subj6", question: "_____ are students.", translation: "(彼らは学生です)", options: ["They", "Them", "Their", "Theirs"], correct: "They", explanation: "三人称複数の主語：'They are students'。日本語では「彼らは」を省略できますが、英語では'they'が必要です。これは人でも物でも複数形で使えます。目的格は'them'（I see them）です。英語は複数の三人称参照で文法的に男性/女性/混合グループを区別しません - 'they'がすべての複数三人称参照をカバーし、代名詞使用のこの側面を簡素化します。" },
      { id: "je_subj7", question: "_____ am going home.", translation: "(私は家に帰っています)", options: ["I", "Me", "My", "Mine"], correct: "I", explanation: "動作を行う主語：'I am going home'。進行形でも、主語形は'I'のままです。日本語では明白な「私は」を省略できますが、英語ではできません。主語代名詞はすべての動詞の前に現れなければなりません。この明示的な主語の要求は日本語との最大の違いの一つです。最初は冗長に感じられるかもしれませんが、誰が動作を行っているかについての曖昧さを防ぎます。特に複雑な文では重要です。" },
      { id: "je_subj8", question: "_____ likes sushi.", translation: "(彼は寿司が好きです)", options: ["He", "Him", "His", "He's"], correct: "He", explanation: "動詞を伴う主語：'He likes sushi'。動詞が三人称単数で-sを追加することに注意してください。日本語の「彼は好き」は動詞形を変えません。英語では正しい主語代名詞と動詞の一致の両方が必要です。'He'は主語で、'likes'がそれに一致します。この二重の要求 - 正しい代名詞形と一致する動詞 - は正しい英語に不可欠です。動詞形が主語を確認し、文法的な結束を生み出します。" },
      { id: "je_subj9", question: "_____ and I are friends.", translation: "(彼と私は友達です)", options: ["He", "Him", "His", "He's"], correct: "He", explanation: "複合主語は主語形を使います：'He and I are friends'。'I'と組み合わせても、主語形を使います。よくある誤りは'him and I'や'me and him'です。ルール：複合主語を'we'に置き換えられる場合は、主語形を使います。日本語では「と」で単純に接続しますが、英語では主語形を維持する必要があります。これはすべての複合主語に適用されます - 常にI/he/she/we/theyを使い、主語の位置ではme/him/her/us/themを決して使いません。" },
      { id: "je_subj10", question: "_____ want pizza.", translation: "(私はピザが欲しいです)", options: ["I", "Me", "My", "Mine"], correct: "I", explanation: "欲求動詞を伴う主語：'I want pizza'。英語の'want'は主語を必要とする通常の動詞です。日本語の「欲しい」は形容詞で、異なる構造を作ります。英語は欲求、必要、好みを通常の動詞として扱い、すべて主語代名詞を必要とします。この文法的な違いは、日本語では文脈から「私は」が明白な場合でも省略できるのに対し、望みを表現するときに'I'を明示的に含めなければならないことを意味します。" },
      { id: "je_subj11", question: "_____ was tired.", translation: "(私は疲れていました)", options: ["I", "Me", "My", "Mine"], correct: "I", explanation: "過去形を伴う主語：'I was tired'。主語代名詞は英語で時制によって変わりません。日本語の「私は」も同じままですが、省略される可能性があります。英語では省略できません。主語代名詞は過去、現在、未来のすべての時制で一定です。この一貫性は、主語-目的語の区別を理解すれば代名詞の使用を簡素化します。時制のために動詞は変わりますが、代名詞はその主語形または目的語形で安定しています。" },
      { id: "je_subj12", question: "_____ can swim.", translation: "(彼女は泳げます)", options: ["She", "Her", "Hers", "She's"], correct: "She", explanation: "法助動詞を伴う主語：'She can swim'。法助動詞（can、will、should、must）でも主語が必要です。日本語の「彼女は泳げる」は主語を省略できますが、英語では必要です。法助動詞は活用しませんが、明示的な主語が必要です。このパターンはすべての助動詞と法助動詞に当てはまります - 英語のすべての動詞句には主語が必要で、言語をすべての動作に誰または何が関与しているかについて非常に明示的にします。" },
      { id: "je_subj13", question: "_____ were late.", translation: "(私たちは遅れました)", options: ["We", "Us", "Our", "Ours"], correct: "We", explanation: "過去形を伴う複数主語：'We were late'。英語は時制を超えて主語形を維持します。日本語の「私たちは遅れた」は文脈から暗示される可能性がありますが、英語には明示的な'we'が必要です。動詞'were'は'be'の複数過去形で、'we'と一致します。英語は一貫して主語-動詞の一致を要求します - 複数主語は複数動詞を取り、単数主語は単数動詞を取ります。この文法的な一致は日本語よりも厳格です。" },
      { id: "je_subj14", question: "_____ will study.", translation: "(彼は勉強するでしょう)", options: ["He", "Him", "His", "He's"], correct: "He", explanation: "未来形を伴う主語：'He will study'。未来形でも主語代名詞が必要です。日本語の「彼は勉強する」は主語を省略できますが、英語ではできません。'Will'は未来を示す法助動詞ですが、主語として'he'が必要です。英語のすべての動詞は、時制や法性に関係なく、明示的な主語を必要とします。これは英語をより冗長にしますが、動作実行者と行為者についても明示的にします。" },
      { id: "je_subj15", question: "_____ don't know.", translation: "(私は知りません)", options: ["I", "Me", "My", "Mine"], correct: "I", explanation: "否定形を伴う主語：'I don't know'。否定形でも主語形を使います。日本語の「私は知らない」は主語を省略できますが、英語には'I'が必要です。語順は：主語 + 助動詞（don't）+ 動詞（know）。英語の否定構造は常に主語-助動詞-動詞の順序を維持し、主語代名詞は構造に不可欠です。この三部構成は英語の基本で、質問と否定形に言語全体で現れます。" }
    ]
  }
};

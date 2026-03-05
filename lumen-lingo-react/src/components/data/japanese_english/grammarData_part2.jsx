
/**
 * JAPANESE → ENGLISH GRAMMAR - PART 2 (REFINED - NO EXCLAMATIONS)
 * Verb Forms & Tenses
 */

import { Clock, RefreshCw } from "lucide-react";

export const part2Categories = {
  present_simple: {
    name: "Present Simple",
    description: "現在形の基本",
    level: "intermediate",
    icon: Clock,
    color: "from-blue-400 to-cyan-500",
    questions: [
      { id: "je_pres1", question: "I ___ to school.", translation: "(私は学校に行きます)", options: ["go", "goes", "going", "went"], correct: "go", explanation: "英語の現在形は日本語より単純です。主語がI/you/we/theyの時、動詞は原形のままです。「私は学校に行きます」はI goです。日本語の「行きます」は丁寧形ですが、英語では丁寧さは動詞の形では表しません。この基本パターンを理解すれば、多くの文が作れるようになります。毎日の習慣や一般的な事実を表現する時に使います。" },
      { id: "je_pres2", question: "She ___ English.", translation: "(彼女は英語を話します)", options: ["speaks", "speak", "speaking", "spoke"], correct: "speaks", explanation: "主語がhe/she/itの時、動詞に-sを付けます。「彼女は英語を話します」はShe speaksです。日本語では主語によって動詞は変わりませんが、英語では三人称単数だけ特別です。この-sは大切なルールで、忘れやすいですが、慣れれば自然になります。言語は人と人をつなぐ素晴らしい道具です。" },
      { id: "je_pres3", question: "They ___ books.", translation: "(彼らは本を読みます)", options: ["read", "reads", "reading", "readed"], correct: "read", explanation: "Theyは複数なので、動詞は原形のままです。「彼らは本を読みます」はThey readです。readという単語は現在形も過去形も同じスペルですが、発音が違います。本を読むことは知識を広げ、想像力を育てます。英語の規則的なパターンを覚えれば、多くの文が簡単に作れます。" },
      { id: "je_pres4", question: "He ___ coffee.", translation: "(彼はコーヒーを飲みます)", options: ["drinks", "drink", "drinking", "drank"], correct: "drinks", explanation: "Heは三人称単数なので、drinkにsを付けてdrinksになります。「彼はコーヒーを飲みます」はHe drinksです。コーヒーは世界中で愛される飲み物です。この-sの規則は英語の基本中の基本です。最初は意識的に付ける必要がありますが、練習すれば自動的になります。" },
      { id: "je_pres5", question: "We ___ music.", translation: "(私たちは音楽を聴きます)", options: ["listen to", "listens to", "listening to", "listened to"], correct: "listen to", explanation: "Weは複数なので動詞は原形です。「私たちは音楽を聴きます」はWe listen toです。英語では「聴く」はlisten toと言い、toが必要です。音楽は言葉を超えて心に響きます。このような句動詞（動詞＋前置詞）は英語によく出てきて、セットで覚えると便利です。" },
      { id: "je_pres6", question: "My sister ___ early.", translation: "(私の姉は早く起きます)", options: ["gets up", "get up", "getting up", "got up"], correct: "gets up", explanation: "My sisterは三人称単数なので、getにsを付けます。「私の姉は早く起きます」はMy sister gets upです。Get upは「起きる」という意味の句動詞です。早起きは一日を有効に使える良い習慣です。英語では多くの日常動作を句動詞で表現します。" },
      { id: "je_pres7", question: "I ___ Japanese food.", translation: "(私は和食が好きです)", options: ["like", "likes", "liking", "liked"], correct: "like", explanation: "主語がIなので、動詞は原形のlikeです。「私は和食が好きです」はI likeです。日本語の「好きです」は形容詞的ですが、英語のlikeは動詞です。この違いを理解することは大切です。好みを表現することは、自分を知ってもらう第一歩です。" },
      { id: "je_pres8", question: "The sun ___ in the east.", translation: "(太陽は東から昇ります)", options: ["rises", "rise", "rising", "rose"], correct: "rises", explanation: "The sunは三人称単数なので、riseにsを付けます。「太陽は東から昇ります」はThe sun risesです。これは一般的な真理を表す現在形の使い方です。自然の法則や普遍的な事実を述べる時、現在形を使います。太陽の動きは古代から人々を魅了してきました。" },
      { id: "je_pres9", question: "You ___ very well.", translation: "(あなたは上手に歌います)", options: ["sing", "sings", "singing", "sang"], correct: "sing", explanation: "Youの時は、単数でも複数でも動詞は原形です。「あなたは上手に歌います」はYou singです。日本語では「あなた」と「あなたたち」を区別しますが、英語のyouは両方に使えます。歌うことは感情を表現する美しい方法です。" },
      { id: "je_pres10", question: "Children ___ in the park.", translation: "(子供たちは公園で遊びます)", options: ["play", "plays", "playing", "played"], correct: "play", explanation: "Childrenは複数形なので、動詞は原形のplayです。「子供たちは公園で遊びます」はChildren playです。遊びは子供の成長に大切です。公園は子供たちが自由に走り回れる貴重な場所です。複数形の主語を見分けることが、正しい動詞の形を選ぶ鍵です。" },
      { id: "je_pres11", question: "My father ___ a car.", translation: "(私の父は車を運転します)", options: ["drives", "drive", "driving", "drove"], correct: "drives", explanation: "My fatherは三人称単数なので、driveにsを付けます。「私の父は車を運転します」はMy father drivesです。運転は便利な技能ですが、安全が何より大切です。家族の日常を英語で表現できるようになると、会話の幅が広がります。" },
      { id: "je_pres12", question: "We ___ in Tokyo.", translation: "(私たちは東京に住んでいます)", options: ["live", "lives", "living", "lived"], correct: "live", explanation: "Weは複数なので、動詞は原形のliveです。「私たちは東京に住んでいます」はWe liveです。住む場所は私たちのアイデンティティの一部です。東京は伝統と現代が共存する魅力的な都市です。現在形で継続的な状態を表現できます。" },
      { id: "je_pres13", question: "He ___ his homework.", translation: "(彼は宿題をします)", options: ["does", "do", "doing", "did"], correct: "does", explanation: "Heは三人称単数なので、doがdoesに変わります。「彼は宿題をします」はHe doesです。Doは不規則に変化する動詞で、doesという形になります。宿題は学んだことを定着させる大切な練習です。不規則動詞は少しずつ覚えていきましょう。" },
      { id: "je_pres14", question: "I ___ tea every morning.", translation: "(私は毎朝お茶を飲みます)", options: ["drink", "drinks", "drinking", "drank"], correct: "drink", explanation: "主語がIなので、動詞は原形のdrinkです。「私は毎朝お茶を飲みます」はI drinkです。Every morningのような時間表現は、習慣を表す現在形とよく使われます。朝のお茶は一日を静かに始める良い習慣です。" },
      { id: "je_pres15", question: "The store ___ at 9 AM.", translation: "(その店は午前9時に開きます)", options: ["opens", "open", "opening", "opened"], correct: "opens", explanation: "The storeは三人称単数なので、openにsを付けます。「その店は午前9時に開きます」はThe store opensです。営業時間のような決まったスケジュールも現在形で表現します。規則的な予定を述べる時、現在形が自然です。" }
    ]
  },

  past_simple: {
    name: "Past Simple",
    description: "過去形の基本",
    level: "intermediate",
    icon: RefreshCw,
    color: "from-purple-400 to-pink-500",
    questions: [
      { id: "je_past1", question: "I ___ to school yesterday.", translation: "(私は昨日学校に行きました)", options: ["went", "go", "goes", "going"], correct: "went", explanation: "過去形では、主語に関わらず動詞の過去形を使います。「私は昨日学校に行きました」はI wentです。Goの過去形はwentという不規則な形です。日本語の「行きました」に対応します。過去の出来事を伝えることで、経験を共有できます。" },
      { id: "je_past2", question: "She ___ a book last night.", translation: "(彼女は昨夜本を読みました)", options: ["read", "reads", "reading", "readed"], correct: "read", explanation: "Readの過去形もreadですが、発音が違います（レッド）。「彼女は昨夜本を読みました」はShe readです。Last nightは過去を示す表現です。読書は心を豊かにし、知識を広げます。この不規則な変化に慣れることが大切です。" },
      { id: "je_past3", question: "They ___ soccer.", translation: "(彼らはサッカーをしました)", options: ["played", "play", "plays", "playing"], correct: "played", explanation: "Playは規則動詞なので、過去形は-edを付けてplayedになります。「彼らはサッカーをしました」はThey playedです。スポーツは健康と友情を育みます。規則動詞の過去形は-edを付けるだけなので、覚えやすいです。" },
      { id: "je_past4", question: "He ___ coffee this morning.", translation: "(彼は今朝コーヒーを飲みました)", options: ["drank", "drink", "drinks", "drinking"], correct: "drank", explanation: "Drinkの過去形はdrankです。「彼は今朝コーヒーを飲みました」はHe drankです。This morningは今日の朝のことなので、過去形を使います。朝のコーヒーは一日を始める儀式のようなものです。不規則動詞は少しずつ覚えていきましょう。" },
      { id: "je_past5", question: "We ___ to music.", translation: "(私たちは音楽を聴きました)", options: ["listened", "listen", "listens", "listening"], correct: "listened", explanation: "Listenは規則動詞なので、過去形は-edを付けてlistenedです。「私たちは音楽を聴きました」はWe listenedです。音楽を聴いた経験を過去形で表現できます。音楽は時間を超えて心に残ります。" },
      { id: "je_past6", question: "My sister ___ up early.", translation: "(私の姉は早く起きました)", options: ["got", "get", "gets", "getting"], correct: "got", explanation: "Getの過去形はgotです。「私の姉は早く起きました」はMy sister gotです。Get upは「起きる」という句動詞です。早起きした日の朝は、静かで清々しい時間です。過去の行動を述べることで、その日のことを思い出せます。" },
      { id: "je_past7", question: "I ___ Japanese food.", translation: "(私は和食を食べました)", options: ["ate", "eat", "eats", "eating"], correct: "ate", explanation: "Eatの過去形はateです。「私は和食を食べました」はI ateです。食事の経験は大切な思い出になります。和食は健康的で美しい料理です。不規則動詞の過去形は、使いながら覚えていくのが効果的です。" },
      { id: "je_past8", question: "The sun ___ at 6 AM.", translation: "(太陽は午前6時に昇りました)", options: ["rose", "rise", "rises", "rising"], correct: "rose", explanation: "Riseの過去形はroseです。「太陽は午前6時に昇りました」はThe sun roseです。日の出は新しい一日の始まりを告げます。自然現象の過去の記録も過去形で表現します。美しい朝日は心を清めてくれます。" },
      { id: "je_past9", question: "You ___ very well.", translation: "(あなたは上手に歌いました)", options: ["sang", "sing", "sings", "singing"], correct: "sang", explanation: "Singの過去形はsangです。「あなたは上手に歌いました」はYou sangです。過去の出来事を褒める時にも過去形を使います。歌声は人の心に残る美しいものです。過去形で感想を伝えることができます。" },
      { id: "je_past10", question: "Children ___ in the park.", translation: "(子供たちは公園で遊びました)", options: ["played", "play", "plays", "playing"], correct: "played", explanation: "Playの過去形はplayedです。「子供たちは公園で遊びました」はChildren playedです。子供の頃の遊びの思い出は一生の宝物です。過去の楽しかった時間を振り返ることは心を温めます。" },
      { id: "je_past11", question: "My father ___ a car.", translation: "(私の父は車を運転しました)", options: ["drove", "drive", "drives", "driving"], correct: "drove", explanation: "Driveの過去形はdroveです。「私の父は車を運転しました」はMy father droveです。家族との車での思い出は特別です。過去の出来事を語ることで、家族の絆を感じられます。" },
      { id: "je_past12", question: "We ___ in Tokyo.", translation: "(私たちは東京に住んでいました)", options: ["lived", "live", "lives", "living"], correct: "lived", explanation: "Liveの過去形はlivedです。「私たちは東京に住んでいました」はWe livedです。過去に住んでいた場所には特別な思い出があります。場所との思い出は心の中に残ります。過去形で以前の生活を語れます。" },
      { id: "je_past13", question: "He ___ his homework.", translation: "(彼は宿題をしました)", options: ["did", "do", "does", "doing"], correct: "did", explanation: "Doの過去形はdidです。「彼は宿題をしました」はHe didです。宿題を終えた時の達成感は良いものです。過去に完了したことを報告する時、過去形を使います。" },
      { id: "je_past14", question: "I ___ tea this morning.", translation: "(私は今朝お茶を飲みました)", options: ["drank", "drink", "drinks", "drinking"], correct: "drank", explanation: "Drinkの過去形はdrankです。「私は今朝お茶を飲みました」はI drankです。朝のお茶の時間は心を落ち着けます。今日の朝の出来事は過去形で表現します。" },
      { id: "je_past15", question: "The store ___ at 9 AM.", translation: "(その店は午前9時に開きました)", options: ["opened", "open", "opens", "opening"], correct: "opened", explanation: "Openの過去形はopenedです。「その店は午前9時に開きました」はThe store openedです。過去の特定の時間に起こったことを述べる時、過去形を使います。規則動詞の過去形は-edを付けるだけです。" }
    ]
  }
};

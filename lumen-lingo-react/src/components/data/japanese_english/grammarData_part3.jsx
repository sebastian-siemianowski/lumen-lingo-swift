
/**
 * JAPANESE → ENGLISH GRAMMAR - PART 3 (REFINED - NO EXCLAMATIONS)
 * Future & Modal Verbs
 */

import { Zap, Shield } from "lucide-react";

export const part3Categories = {
  future_tense: {
    name: "Future with 'will'",
    description: "未来形（willの使い方）",
    level: "intermediate",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    questions: [
      { id: "je_fut1", question: "I ___ go to school.", translation: "(私は学校に行くでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "英語の未来形は簡単です。willを動詞の前に置くだけです。「私は学校に行くでしょう」はI will goです。日本語では「でしょう」「つもりです」などで未来を表しますが、英語ではwillが便利です。willの後の動詞は必ず原形です。未来の予定や意志を表現できます。" },
      { id: "je_fut2", question: "She ___ study English.", translation: "(彼女は英語を勉強するでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "主語に関わらず、willは同じ形です。「彼女は英語を勉強するでしょう」はShe will studyです。現在形のように三人称単数でsを付ける必要はありません。これが未来形の便利なところです。学習の継続は成長につながります。" },
      { id: "je_fut3", question: "They ___ come tomorrow.", translation: "(彼らは明日来るでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "Tomorrowは未来を示す言葉です。「彼らは明日来るでしょう」はThey will comeです。時間を表す言葉と一緒に未来形を使います。明日への期待は心を前向きにします。willは確実性の高い未来を表現します。" },
      { id: "je_fut4", question: "He ___ help you.", translation: "(彼はあなたを助けるでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "「彼はあなたを助けるでしょう」はHe will helpです。Willは約束や申し出にも使えます。助け合いは人間関係の基本です。未来の行動を約束する時、willは力強い表現になります。" },
      { id: "je_fut5", question: "We ___ visit Japan.", translation: "(私たちは日本を訪れるでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "「私たちは日本を訪れるでしょう」はWe will visitです。旅行の計画を立てる時、未来形を使います。日本は四季折々の美しさを持つ国です。将来の楽しみを語ることは心を豊かにします。" },
      { id: "je_fut6", question: "It ___ rain tonight.", translation: "(今夜は雨が降るでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "天気予報でもwillを使います。「今夜は雨が降るでしょう」はIt will rainです。予測を述べる時、willは自然な選択です。雨は植物に命を与え、大地を潤します。" },
      { id: "je_fut7", question: "You ___ like this movie.", translation: "(あなたはこの映画が気に入るでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "「あなたはこの映画が気に入るでしょう」はYou will likeです。予想や推測にもwillを使えます。映画は物語を通じて私たちの心を動かします。相手が何かを楽しむだろうと予測する優しい表現です。" },
      { id: "je_fut8", question: "The sun ___ rise at 6 AM.", translation: "(太陽は午前6時に昇るでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "規則的な未来の出来事もwillで表現します。「太陽は午前6時に昇るでしょう」はThe sun will riseです。自然の法則は変わらない確実性を持っています。毎日の日の出は新しい始まりを告げます。" },
      { id: "je_fut9", question: "I ___ call you later.", translation: "(後であなたに電話します)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "約束や意志を表す時にwillを使います。「後であなたに電話します」はI will callです。Laterは「後で」という意味です。連絡を取り合うことは関係を維持する大切な方法です。" },
      { id: "je_fut10", question: "They ___ be happy.", translation: "(彼らは幸せになるでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "Be動詞の未来形もwillを使います。「彼らは幸せになるでしょう」はThey will beです。幸せを願う気持ちは普遍的です。未来への希望を込めた表現ができます。" },
      { id: "je_fut11", question: "She ___ arrive soon.", translation: "(彼女はまもなく到着するでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "Soonは「まもなく」という意味です。「彼女はまもなく到着するでしょう」はShe will arriveです。近い未来の出来事を述べる時もwillを使います。誰かの到着を待つ時間には期待感があります。" },
      { id: "je_fut12", question: "We ___ remember this day.", translation: "(私たちはこの日を覚えているでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "「私たちはこの日を覚えているでしょう」はWe will rememberです。特別な日の記憶は一生残ります。未来にわたって続く状態もwillで表現できます。" },
      { id: "je_fut13", question: "He ___ finish his work.", translation: "(彼は仕事を終えるでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "「彼は仕事を終えるでしょう」はHe will finishです。仕事を完了する意志や予定を表します。達成感は努力の報酬です。未来の完了を見据えることは目標設定に役立ちます。" },
      { id: "je_fut14", question: "I ___ be there at 5 PM.", translation: "(私は午後5時にそこにいるでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "特定の時刻での予定もwillで表現します。「私は午後5時にそこにいるでしょう」はI will beです。時間を守ることは信頼関係の基本です。明確な約束は相手を安心させます。" },
      { id: "je_fut15", question: "The store ___ open tomorrow.", translation: "(その店は明日開くでしょう)", options: ["will", "would", "shall", "should"], correct: "will", explanation: "営業予定もwillで表します。「その店は明日開くでしょう」はThe store will openです。予定されたスケジュールを伝える時、willは明確です。明日への準備は今日から始まります。" }
    ]
  },

  modal_verbs: {
    name: "Modal Verbs (can, should, must)",
    description: "助動詞の使い方",
    level: "intermediate",
    icon: Shield,
    color: "from-green-400 to-teal-500",
    questions: [
      { id: "je_mod1", question: "I ___ swim.", translation: "(私は泳げます)", options: ["can", "should", "must", "would"], correct: "can", explanation: "Canは「できる」という能力を表します。「私は泳げます」はI canです。Canの後は必ず動詞の原形です。泳ぎは楽しく、健康的な活動です。能力を表現することは、自分の強みを知らせる方法です。" },
      { id: "je_mod2", question: "You ___ study hard.", translation: "(あなたは一生懸命勉強すべきです)", options: ["should", "can", "must", "would"], correct: "should", explanation: "Shouldは「すべき」というアドバイスや提案を表します。「あなたは一生懸命勉強すべきです」はYou shouldです。強制ではなく、優しい助言のニュアンスがあります。学習は自己成長の道です。" },
      { id: "je_mod3", question: "We ___ be quiet in the library.", translation: "(私たちは図書館では静かにしなければなりません)", options: ["must", "can", "should", "would"], correct: "must", explanation: "Mustは強い義務や必要性を表します。「私たちは図書館では静かにしなければなりません」はWe mustです。図書館は静かに学ぶ場所です。ルールを守ることは共同生活の基本です。" },
      { id: "je_mod4", question: "She ___ speak three languages.", translation: "(彼女は3つの言語を話せます)", options: ["can", "should", "must", "would"], correct: "can", explanation: "Canで複数の能力を表現できます。「彼女は3つの言語を話せます」はShe canです。多言語を話せることは素晴らしい能力です。言語は文化への扉を開きます。" },
      { id: "je_mod5", question: "He ___ wear a uniform.", translation: "(彼は制服を着なければなりません)", options: ["must", "can", "should", "would"], correct: "must", explanation: "Mustで規則やルールを表します。「彼は制服を着なければなりません」はHe mustです。制服は所属を示すものです。ドレスコードは社会的な規範の一つです。" },
      { id: "je_mod6", question: "You ___ eat more vegetables.", translation: "(あなたはもっと野菜を食べるべきです)", options: ["should", "can", "must", "would"], correct: "should", explanation: "健康的なアドバイスにshouldを使います。「あなたはもっと野菜を食べるべきです」はYou shouldです。野菜は体に良い栄養を与えます。優しい助言は相手を思いやる表現です。" },
      { id: "je_mod7", question: "I ___ play the piano.", translation: "(私はピアノを弾けます)", options: ["can", "should", "must", "would"], correct: "can", explanation: "楽器を演奏する能力もcanで表します。「私はピアノを弾けます」はI canです。音楽の才能は練習によって育ちます。ピアノの音色は心を癒します。" },
      { id: "je_mod8", question: "They ___ arrive on time.", translation: "(彼らは時間通りに到着しなければなりません)", options: ["must", "can", "should", "would"], correct: "must", explanation: "時間厳守の重要性をmustで表します。「彼らは時間通りに到着しなければなりません」はThey mustです。時間を守ることは相手への敬意です。" },
      { id: "je_mod9", question: "We ___ help each other.", translation: "(私たちは助け合うべきです)", options: ["should", "can", "must", "would"], correct: "should", explanation: "道徳的なアドバイスにshouldを使います。「私たちは助け合うべきです」はWe shouldです。助け合いは社会の基盤です。支え合うことで強くなれます。" },
      { id: "je_mod10", question: "She ___ drive a car.", translation: "(彼女は車を運転できます)", options: ["can", "should", "must", "would"], correct: "can", explanation: "運転の能力もcanで表現します。「彼女は車を運転できます」はShe canです。運転は便利な技能ですが、責任も伴います。能力の習得には努力が必要です。" },
      { id: "je_mod11", question: "You ___ be careful.", translation: "(あなたは注意すべきです)", options: ["should", "can", "must", "would"], correct: "should", explanation: "注意を促す時にshouldを使います。「あなたは注意すべきです」はYou shouldです。安全への配慮は大切です。相手を気遣う優しい表現です。" },
      { id: "je_mod12", question: "I ___ finish this today.", translation: "(私は今日これを終えなければなりません)", options: ["must", "can", "should", "would"], correct: "must", explanation: "締め切りなどの強い必要性をmustで表します。「私は今日これを終えなければなりません」はI mustです。責任感は信頼を築きます。完了への決意を示せます。" },
      { id: "je_mod13", question: "He ___ read without glasses.", translation: "(彼は眼鏡なしで読めます)", options: ["can", "should", "must", "would"], correct: "can", explanation: "視力の能力もcanで表現します。「彼は眼鏡なしで読めます」はHe canです。良い視力は恵まれたものです。能力には個人差があり、それぞれが尊重されます。" },
      { id: "je_mod14", question: "We ___ protect the environment.", translation: "(私たちは環境を守るべきです)", options: ["should", "can", "must", "would"], correct: "should", explanation: "環境保護の提案にshouldを使います。「私たちは環境を守るべきです」はWe shouldです。地球は私たちの大切な家です。未来のために今行動することが重要です。" },
      { id: "je_mod15", question: "You ___ follow the rules.", translation: "(あなたはルールに従わなければなりません)", options: ["must", "can", "should", "would"], correct: "must", explanation: "規則遵守の義務をmustで表します。「あなたはルールに従わなければなりません」はYou mustです。ルールは秩序を保つために存在します。社会生活には規律が必要です。" }
    ]
  }
};

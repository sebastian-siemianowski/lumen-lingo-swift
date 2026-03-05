/**
 * CHINESE → ENGLISH GRAMMAR - PART 2 (REFINED - NO EXCLAMATIONS)
 * Past Tense & Present Continuous
 */

import { History, Activity } from "lucide-react";

export const part2Categories = {
  past_simple: {
    name: "Past Simple",
    description: "一般过去时",
    level: "intermediate",
    icon: History,
    color: "from-amber-400 to-orange-500",
    questions: [
      { id: "ce_past1", question: "I _____ to school yesterday.", translation: "(我昨天去了学校)", options: ["went", "go", "going", "goes"], correct: "went", explanation: "欢迎来到英语过去时的世界。中文用'了'或时间词表示过去，英语则改变动词形式。'go'的过去式是'went'（不规则变化）。I went = 我去了。英语过去时对所有人称使用同一形式，这点比中文简单 - 不用担心主语是谁，过去式就是went。Yesterday（昨天）这样的时间词帮助明确时态。虽然需要记忆不规则动词，但它们都是常用词，通过练习会变得自然。" },
      { id: "ce_past2", question: "She _____ a book last night.", translation: "(她昨晚看了一本书)", options: ["read", "reads", "reading", "readed"], correct: "read", explanation: "'read'是个特别的动词 - 过去式拼写和现在时一样，但发音不同（过去式读作/red/）。She read = 她看了。Last night（昨晚）表明是过去。阅读是美好的习惯，让我们在书中旅行。英语有些不规则动词保持相同拼写，只改变发音。这些小特点使英语有趣。记住常用动词的过去式，就能自如地讲述过去的故事了。" },
      { id: "ce_past3", question: "They _____ football yesterday.", translation: "(他们昨天踢了足球)", options: ["played", "play", "playing", "plaied"], correct: "played", explanation: "规则动词的过去式只需加-ed。Play + ed = played。规则动词占大多数，这是好消息。They played = 他们踢了。足球是全球热爱的运动，团队合作和运动精神在其中闪耀。英语的-ed结尾很有规律，掌握了这个规则，就能轻松转换大部分动词。记住规则模式，不规则动词单独记忆，你就能流畅表达过去的事情。" },
      { id: "ce_past4", question: "He _____ coffee this morning.", translation: "(他今天早上喝了咖啡)", options: ["drank", "drink", "drunk", "drinking"], correct: "drank", explanation: "'drink'的变化：drink（现在）→ drank（过去）→ drunk（完成时）。He drank = 他喝了。This morning（今天早上）指定时间。咖啡是许多人的晨间仪式，提神醒脑。不规则动词有自己的变化模式，虽然需要记忆，但它们是最常用的词，在日常交流中经常出现，多用自然就记住了。" },
      { id: "ce_past5", question: "We _____ at home all day.", translation: "(我们一整天都在家)", options: ["stayed", "stay", "staying", "staied"], correct: "stayed", explanation: "Stay + ed = stayed（规则变化）。We stayed = 我们待在。All day（一整天）说明时长。在家的时光可以是休息、学习或家庭团聚的好机会。规则动词加-ed的模式简单可靠。注意拼写：以y结尾但前面是元音时直接加-ed（stayed），前面是辅音时改y为i再加-ed（如study → studied）。这些小规则帮助正确拼写。" },
      { id: "ce_past6", question: "You _____ a great meal.", translation: "(你做了一顿很棒的饭)", options: ["cooked", "cook", "cooking", "cookked"], correct: "cooked", explanation: "Cook + ed = cooked。You cooked = 你做了。烹饪是展现爱与创意的方式，美食连接人心。以k结尾的动词直接加-ed，不用双写（cook → cooked，不是cookked）。这个拼写规则很重要。做饭给别人是表达关怀的美好方式。掌握规则动词的拼写规律，你的英语写作会更加准确流畅。" },
      { id: "ce_past7", question: "She _____ to the store.", translation: "(她去了商店)", options: ["went", "go", "gone", "going"], correct: "went", explanation: "Go的过去式went是常用不规则形式。She went = 她去了。To the store（去商店）说明目的地。购物是日常必需，也是了解新产品和社交的机会。Went使用频率极高，很快就会记住。虽然是不规则的，但正因为常用，大家都很熟悉。多听多说，这些不规则形式会自然融入你的语言习惯。" },
      { id: "ce_past8", question: "I _____ my keys.", translation: "(我丢了钥匙)", options: ["lost", "lose", "losed", "losing"], correct: "lost", explanation: "Lose → lost（不规则变化）。I lost = 我丢了。丢东西是每个人都经历过的小烦恼。Lost也可以表示迷路（I'm lost = 我迷路了）。这个词在生活中很实用。不规则动词虽然需要记忆，但它们的使用频率高，在对话和阅读中反复出现，自然就记住了。耐心和练习是学习语言的好朋友。" },
      { id: "ce_past9", question: "They _____ the film.", translation: "(他们看了那部电影)", options: ["watched", "watch", "watching", "watchhed"], correct: "watched", explanation: "Watch + ed = watched。They watched = 他们看了。看电影是流行的娱乐方式，电影讲述故事，激发情感。以ch结尾的动词直接加-ed（watch → watched）。注意不要双写字母。规则动词的拼写有迹可循，掌握基本规则后，大部分动词都能正确变化。电影是学习语言和文化的好工具。" },
      { id: "ce_past10", question: "We _____ about the news.", translation: "(我们谈论了新闻)", options: ["talked", "talk", "talking", "talkked"], correct: "talked", explanation: "Talk + ed = talked。We talked = 我们谈论了。讨论新闻帮助我们了解世界大事。About（关于）引出话题。谈话是人际交流的核心，分享观点和感受加深理解。以k结尾直接加-ed，不双写（talk → talked）。记住这些拼写规则，你的书面英语会更准确。对话练习是提高语言能力的有效方法。" },
      { id: "ce_past11", question: "He _____ very tired.", translation: "(他非常累)", options: ["was", "were", "is", "be"], correct: "was", explanation: "Be动词的过去式比较特别：was用于I/he/she/it，were用于you/we/they。He was = 他是（过去）。Very tired = 非常累。疲劳是自然的，休息和睡眠能恢复精力。Be动词虽然不规则，但因为太常用，很容易掌握。Was和were的区别主要看主语。理解这个，过去时的be动词就不难了。照顾好身体很重要。" },
      { id: "ce_past12", question: "You _____ at the party.", translation: "(你在聚会上)", options: ["were", "was", "is", "be"], correct: "were", explanation: "You总是用were，即使是单数的你。You were = 你在/你是（过去）。At the party（在聚会上）说明地点。聚会是社交和庆祝的时刻，与朋友相聚带来快乐回忆。英语的you不区分单复数，都用were。这个规则一旦记住就很简单。Be动词是英语基础，掌握好它能帮助构建正确的句子。" },
      { id: "ce_past13", question: "I _____ a letter.", translation: "(我写了一封信)", options: ["wrote", "write", "writing", "writed"], correct: "wrote", explanation: "Write → wrote（不规则）。I wrote = 我写了。在数字时代，手写信显得格外珍贵和用心。信件承载着情感和思想。Wrote是常用过去式，通过阅读和写作练习会自然记住。写作是整理思维和表达自我的好方式。每个不规则动词都有自己的故事，慢慢积累，词汇量会稳步增长。" },
      { id: "ce_past14", question: "She _____ happy.", translation: "(她很开心)", options: ["was", "were", "is", "be"], correct: "was", explanation: "She was happy = 她（那时）很开心。Was用于第三人称单数（he/she/it）的过去。快乐是美好的情绪，值得珍惜和分享。回忆快乐时光让人温暖。英语用be动词表达状态和情绪，过去的情绪用was/were。掌握be动词的变化是英语学习的重要基础，它出现在各种句型中。" },
      { id: "ce_past15", question: "They _____ late.", translation: "(他们迟到了)", options: ["arrived", "arrive", "arriving", "arrivved"], correct: "arrived", explanation: "Arrive以e结尾，加d即可（arrive + d = arrived）。They arrived late = 他们迟到了。迟到有时难以避免，理解和宽容很重要。Late可以是形容词或副词。以e结尾的动词加d而不是ed，这是拼写规则的一部分。掌握这些细节让你的英语更加精确。守时是美德，但偶尔的迟到也需要相互理解。" }
    ]
  },

  present_continuous: {
    name: "Present Continuous",
    description: "现在进行时",
    level: "intermediate",
    icon: Activity,
    color: "from-blue-400 to-cyan-500",
    questions: [
      { id: "ce_cont1", question: "I _____ studying now.", translation: "(我现在正在学习)", options: ["am", "is", "are", "be"], correct: "am", explanation: "现在进行时表示此刻正在进行的动作。结构：am/is/are + 动词-ing。I用am，所以是I am studying。Now（现在）强调当前时刻。学习需要专注和安静的环境。这个时态在英语中使用频繁，表达正在发生的事。掌握am/is/are的选择（I am, you are, he/she/it is）和-ing的形式，就能灵活运用这个时态描述眼前的动作。" },
      { id: "ce_cont2", question: "She _____ reading a book.", translation: "(她正在看书)", options: ["is", "am", "are", "be"], correct: "is", explanation: "He/she/it用is。She is reading = 她正在读。阅读开启想象和知识的大门，每本书都是一次旅程。Reading = read + ing（去e加ing）。现在进行时让描述生动，仿佛动作就在眼前发生。Is配合第三人称单数，这个规律很稳定。多练习，配对主语和be动词会成为自然反应。" },
      { id: "ce_cont3", question: "They _____ playing football.", translation: "(他们正在踢足球)", options: ["are", "is", "am", "be"], correct: "are", explanation: "You/we/they用are。They are playing = 他们正在踢。足球培养团队精神和身体健康。Playing = play + ing（直接加）。现在进行时描绘动态场景，让语言充满活力。Are的使用范围广（你、我们、他们），记住这个，大部分复数和第二人称的进行时就没问题了。运动有益身心健康。" },
      { id: "ce_cont4", question: "He _____ watching TV.", translation: "(他正在看电视)", options: ["is", "am", "are", "be"], correct: "is", explanation: "He is watching = 他正在看。看电视是常见的放松方式，节目提供信息和娱乐。Watching = watch + ing。现在进行时让我们描述此刻的活动。Is用于he/she/it，这是固定搭配。适度的电视时间可以是放松和学习的结合。平衡各种活动让生活更丰富。" },
      { id: "ce_cont5", question: "We _____ eating dinner.", translation: "(我们正在吃晚饭)", options: ["are", "is", "am", "be"], correct: "are", explanation: "We are eating = 我们正在吃。晚餐是家人团聚、分享一天经历的时光。Eating = eat + ing（去e加ing，双写t不需要）。注意：eat不双写t，直接加ing。家庭用餐增进感情和沟通。现在进行时捕捉当下瞬间，让表达更具体生动。慢慢享受食物，用心交流，让每餐都有意义。" },
      { id: "ce_cont6", question: "You _____ working hard.", translation: "(你正在努力工作)", options: ["are", "is", "am", "be"], correct: "are", explanation: "You are working hard = 你正在努力工作。勤奋是成功的基石，但也要记得休息。Working = work + ing。用进行时夸奖别人的努力，表达及时的认可和鼓励。You配are，无论单复数。平衡工作和休息对身心健康很重要。认可他人的付出能激励人心。" },
      { id: "ce_cont7", question: "I _____ listening to music.", translation: "(我正在听音乐)", options: ["am", "is", "are", "be"], correct: "am", explanation: "I am listening = 我正在听。音乐是世界语言，表达情感，安抚心灵。Listening = listen + ing。音乐能改善心情，陪伴我们度过各种时刻。现在进行时强调动作正在进行，与简单现在时（习惯）不同。I搭配am，形成'I am + -ing'的固定格式。音乐的力量跨越语言和文化。" },
      { id: "ce_cont8", question: "She _____ cooking lunch.", translation: "(她正在做午饭)", options: ["is", "am", "are", "be"], correct: "is", explanation: "She is cooking = 她正在做。烹饪是技能也是艺术，香气弥漫，温暖人心。Cooking = cook + ing。准备食物是爱的表达。进行时描述正在进行的过程，你能想象她在厨房忙碌的场景。She配is，这个搭配要牢记。烹饪技能让人受益终身。" },
      { id: "ce_cont9", question: "They _____ running in the park.", translation: "(他们正在公园里跑步)", options: ["are", "is", "am", "be"], correct: "are", explanation: "They are running = 他们正在跑。跑步增强心肺，公园的自然环境让运动更愉快。Running = run + ning（双写n）。短元音+单辅音结尾要双写再加ing（run → running, swim → swimming）。户外运动亲近自然，有益健康。They配are。运动让身体和心情都更好。" },
      { id: "ce_cont10", question: "He _____ sleeping.", translation: "(他正在睡觉)", options: ["is", "am", "are", "be"], correct: "is", explanation: "He is sleeping = 他正在睡。睡眠对健康至关重要，修复身体，整理记忆。Sleeping = sleep + ing。充足睡眠提升专注力和心情。用进行时说明他此刻在睡觉，轻声点，别打扰。He配is。良好睡眠是健康生活的基础。尊重他人的休息时间很重要。" },
      { id: "ce_cont11", question: "We _____ learning English.", translation: "(我们正在学英语)", options: ["are", "is", "am", "be"], correct: "are", explanation: "We are learning = 我们正在学。学习语言打开新世界，连接不同文化。Learning = learn + ing。每节课都是进步，每个单词都是成就。We配are。进行时也可表示一段时期的持续动作（我们这段时间在学英语）。语言学习需要耐心和坚持，每一步都有意义。" },
      { id: "ce_cont12", question: "You _____ writing a letter.", translation: "(你正在写信)", options: ["are", "is", "am", "be"], correct: "are", explanation: "You are writing = 你正在写。写信是深思熟虑的沟通方式，手写更显真诚。Writing = write + ing（去e加ing）。文字能跨越距离传递情感。You配are。写作整理思绪，表达心意。现在进行时描绘书写的过程。在快节奏时代，静心写字是珍贵的时刻。" },
      { id: "ce_cont13", question: "I _____ drinking water.", translation: "(我正在喝水)", options: ["am", "is", "are", "be"], correct: "am", explanation: "I am drinking = 我正在喝。水是生命之源，保持水分让身体和大脑运作良好。Drinking = drink + ing。水是最好的饮料，无糖无卡路里。I配am。现在进行时聚焦当下动作。规律喝水是健康习惯。简单的动作，重要的习惯。" },
      { id: "ce_cont14", question: "She _____ dancing.", translation: "(她正在跳舞)", options: ["is", "am", "are", "be"], correct: "is", explanation: "She is dancing = 她正在跳舞。舞蹈是身体语言，随音乐释放情感和能量。Dancing = dance + ing（去e加ing）。每种文化都有独特的舞蹈。She配is。舞蹈带来快乐和自由。进行时让我们看到她优雅的动作。跳舞是美好的表达方式。" },
      { id: "ce_cont15", question: "They _____ talking.", translation: "(他们正在交谈)", options: ["are", "is", "am", "be"], correct: "are", explanation: "They are talking = 他们正在交谈。对话是人际交往的核心，交流想法，建立关系。Talking = talk + ing。良好的倾听和表达构成有效对话。They配are。进行时描绘对话正在进行。交谈连接人心，分享彼此的世界。沟通是理解的桥梁。" }
    ]
  }
};
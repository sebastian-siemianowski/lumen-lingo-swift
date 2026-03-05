/**
 * ENGLISH → CHINESE GRAMMAR - PART 3 (REFINED - NO EXCLAMATIONS)
 * Questions, Negation & Comparisons
 */

import { HelpCircle, X, TrendingUp } from "lucide-react";

export const part3Categories = {
  questions: {
    name: "Questions",
    description: "Forming questions in Chinese",
    level: "intermediate",
    icon: HelpCircle,
    color: "from-purple-400 to-pink-500",
    questions: [
      { 
        id: "ec_q1", 
        question: "你忙___?", 
        translation: "(Are you busy?)", 
        options: ["吗", "呢", "吧", "啊"], 
        correct: "吗", 
        explanation: "Chinese yes/no questions are elegantly simple: just add 吗 (ma) to the end of a statement. 你忙 = you're busy (statement). 你忙吗? = Are you busy? (question). That's it. No word order change, no auxiliary verbs needed. 吗 is a question particle that transforms statements into questions. It's pronounced with a neutral tone, light and friendly. This simplicity makes asking questions natural and easy from day one." 
      },
      { 
        id: "ec_q2", 
        question: "你喜欢茶___?", 
        translation: "(Do you like tea?)", 
        options: ["吗", "呢", "吧", "啊"], 
        correct: "吗", 
        explanation: "你喜欢茶吗?: Again, statement + 吗. The pattern repeats beautifully. 你喜欢茶 = you like tea. Add 吗, and you're asking. Tea is central to Chinese culture - it's more than a beverage, it's a way of life, an art, a meditation. Asking about tea preferences often opens conversations and builds connections. The consistency of adding 吗 lets you form countless questions with confidence." 
      },
      { 
        id: "ec_q3", 
        question: "她是老师___?", 
        translation: "(Is she a teacher?)", 
        options: ["吗", "呢", "吧", "啊"], 
        correct: "吗", 
        explanation: "她是老师吗?: 她是老师 (she is a teacher) + 吗 = question. 老师 (lǎoshī) = teacher. Teaching is a highly respected profession in Chinese culture, carrying centuries of honor and responsibility. Teachers shape minds and futures. The simple addition of 吗 turns any statement about professions, identities, or states into a gentle question." 
      },
      { 
        id: "ec_q4", 
        question: "你叫___名字?", 
        translation: "(What's your name?)", 
        options: ["什么", "哪", "谁", "怎么"], 
        correct: "什么", 
        explanation: "什么 (shénme) = what. For 'what' questions, the question word goes where the answer would go. You'd answer: 我叫李明 (I'm called Li Ming). So you ask: 你叫什么名字? (You're called what name?). 叫 (jiào) = called, 名字 (míngzi) = name. Names carry significance - often chosen for their meanings and auspicious sounds. Asking someone's name is the first step in building a relationship." 
      },
      { 
        id: "ec_q5", 
        question: "你住在___?", 
        translation: "(Where do you live?)", 
        options: ["哪里", "什么", "谁", "怎么"], 
        correct: "哪里", 
        explanation: "哪里 (nǎlǐ) = where. 住 (zhù) = live, 在 (zài) = at/in. The question word replaces where the answer would be: 我住在北京 (I live in Beijing) → 你住在哪里? (You live at where?). The word order stays the same - you just replace the location with 哪里. This logical approach makes forming questions intuitive. Where we live shapes our experiences and identity." 
      },
      { 
        id: "ec_q6", 
        question: "你___来?", 
        translation: "(When will you come?)", 
        options: ["什么时候", "哪里", "谁", "怎么"], 
        correct: "什么时候", 
        explanation: "什么时候 (shénme shíhou) = when (literally 'what time'). 来 (lái) = come. Time expressions in Chinese go before the verb, so 什么时候 sits between subject and verb. Planning when to meet is part of maintaining friendships. Time questions help coordinate our busy lives. The phrase 什么时候 can refer to past, present, or future - context clarifies which." 
      },
      { 
        id: "ec_q7", 
        question: "他是___?", 
        translation: "(Who is he?)", 
        options: ["谁", "什么", "哪里", "怎么"], 
        correct: "谁", 
        explanation: "谁 (shéi/shuí) = who. 他是谁? follows the pattern: subject + verb + question word. You'd answer: 他是我朋友 (he's my friend). So 谁 takes the place of the identity. Getting to know people's identities and relationships helps navigate social situations. Chinese culture places great importance on understanding relationships and social connections." 
      },
      { 
        id: "ec_q8", 
        question: "这个___钱?", 
        translation: "(How much is this?)", 
        options: ["多少", "什么", "哪个", "怎么"], 
        correct: "多少", 
        explanation: "多少 (duōshao) = how much/how many. 钱 (qián) = money. 这个 (zhège) = this. Price questions are essential for daily life - shopping, bargaining, budgeting. 多少钱? (how much money?) is one of the most useful phrases for travelers. Markets and shops welcome friendly negotiations. Money questions help ensure fair transactions." 
      },
      { 
        id: "ec_q9", 
        question: "你___迟到?", 
        translation: "(Why are you late?)", 
        options: ["为什么", "什么时候", "哪里", "怎么"], 
        correct: "为什么", 
        explanation: "为什么 (wèishénme) = why (literally 'for what reason'). 迟到 (chídào) = late/tardy. 'Why' questions seek understanding and explanations. The question word typically goes after the subject but before the verb. Life happens - traffic, oversleeping, unexpected delays. Understanding reasons builds empathy. Asking 'why' opens doors to deeper conversation." 
      },
      { 
        id: "ec_q10", 
        question: "你好___?", 
        translation: "(How are you?)", 
        options: ["吗", "呢", "啊", "吧"], 
        correct: "吗", 
        explanation: "你好吗? adds 吗 to 你好 (hello). It's a genuine inquiry about wellbeing. In Chinese culture, asking 'how are you' shows real care and interest. Traditionally, you might hear 你吃了吗? (have you eaten?) as a greeting, reflecting the cultural importance of food and care. These simple questions maintain relationships and show consideration." 
      },
      { 
        id: "ec_q11", 
        question: "你要___?", 
        translation: "(Which one do you want?)", 
        options: ["哪个", "什么", "谁", "怎么"], 
        correct: "哪个", 
        explanation: "哪 (nǎ) = which, 个 = measure word. 哪个 = which one. 要 (yào) = want. Making choices is part of daily life - which food, which path, which option. The question word 哪 can combine with different measure words depending on what you're asking about: 哪本书? (which book?), 哪辆车? (which car?). This flexibility makes it widely useful." 
      },
      { 
        id: "ec_q12", 
        question: "你___说中文吗?", 
        translation: "(Can you speak Chinese?)", 
        options: ["会", "能", "可以", "要"], 
        correct: "会", 
        explanation: "会 (huì) = can/able to (for learned skills). 说中文 = speak Chinese. 你会说中文吗? uses both 会 and 吗 to ask about ability. When you add 会, you're asking about learned capability, not just possibility. Being able to speak Chinese opens doors to communication with over a billion people. Each new phrase you learn is a step toward fluency." 
      },
      { 
        id: "ec_q13", 
        question: "___人?", 
        translation: "(How many people?)", 
        options: ["几个", "多少", "什么", "哪个"], 
        correct: "几个", 
        explanation: "几 (jǐ) = how many (usually for numbers under 10). For people, you can say 几个人? (how many people?) or 多少人? (how many people?). 几 expects a smaller number and always requires a measure word. Planning group activities means knowing how many people to expect. Headcounts help with reservations, preparations, and coordination." 
      },
      { 
        id: "ec_q14", 
        question: "这是___书?", 
        translation: "(Whose book is this?)", 
        options: ["谁的", "什么", "哪里", "怎么"], 
        correct: "谁的", 
        explanation: "谁的 (shéi de) = whose. 的 (de) is the possessive particle. This book belongs to whom? = 这是谁的书? Understanding ownership and responsibility is important in communal living. Books often carry personal meaning - returning a borrowed book shows respect. Asking whose something is helps return lost items to their owners." 
      },
      { 
        id: "ec_q15", 
        question: "你___去学校?", 
        translation: "(How do you go to school?)", 
        options: ["怎么", "什么时候", "为什么", "哪里"], 
        correct: "怎么", 
        explanation: "怎么 (zěnme) = how. 去 (qù) = go, 学校 (xuéxiào) = school. Asking 'how' seeks method or manner. 怎么 goes between subject and verb, showing the way something is done. Different transportation methods - walking, biking, bus, car - each have their own character. The daily journey to school becomes routine, sometimes offering quiet time for thought." 
      }
    ]
  },

  negation: {
    name: "Negation",
    description: "Making negative sentences",
    level: "intermediate",
    icon: X,
    color: "from-red-400 to-pink-500",
    questions: [
      { 
        id: "ec_n1", 
        question: "我___吃肉", 
        translation: "(I don't eat meat)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "Negation in Chinese is beautifully simple: place 不 (bù) directly before the verb. 我不吃肉: 不 negates 吃. That's it. No auxiliary verbs, no conjugations. 肉 (ròu) = meat. Dietary choices vary widely - vegetarians, vegans, and those with restrictions. 不 is your basic negation tool for actions, states, and preferences. It works consistently across most verbs." 
      },
      { 
        id: "ec_n2", 
        question: "她___是老师", 
        translation: "(She is not a teacher)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "她不是老师: 不 goes before 是 (shì = to be). For identity and classification, 不是 means 'is not'. Clear and direct. Everyone has different roles and professions. Clarifying what someone is not helps identify what they are. The simplicity of placing 不 before the verb makes negation straightforward to learn and use." 
      },
      { 
        id: "ec_n3", 
        question: "我___去", 
        translation: "(I didn't go)", 
        options: ["没", "不", "别", "未"], 
        correct: "没", 
        explanation: "For past actions, use 没 (méi) instead of 不. 我没去 = I didn't go. 没 negates completed actions. It tells us something didn't happen. There's no auxiliary 'did' needed - 没 handles it. Sometimes plans change, circumstances prevent us from going places. 没 is your past negation tool, while 不 handles present and future." 
      },
      { 
        id: "ec_n4", 
        question: "他___喜欢咖啡", 
        translation: "(He doesn't like coffee)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "他不喜欢咖啡: 不 before 喜欢 negates liking. Preferences differ from person to person. Some prefer tea, some coffee, some neither. Respecting different preferences builds harmony. 不喜欢 = don't like. Understanding what others don't like helps avoid misunderstandings and shows consideration." 
      },
      { 
        id: "ec_n5", 
        question: "我们___忙", 
        translation: "(We are not busy)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "我们不忙: 不 negates 忙 (máng = busy). Having free time is precious in our busy world. 不忙 = not busy, having leisure. Balance between work and rest is essential for wellbeing. Being not busy means having time for relationships, hobbies, and rest. The simple placement of 不 makes expressing this straightforward." 
      },
      { 
        id: "ec_n6", 
        question: "我___有钱", 
        translation: "(I don't have money)", 
        options: ["没", "不", "别", "未"], 
        correct: "没", 
        explanation: "我没有钱: Use 没有 (méiyǒu) to negate 有 (yǒu = have). 有 is special - it must be negated with 没, not 不. 我没有钱 = I don't have money. Financial situations vary. Sometimes expressing lack honestly is important. 没有 can negate possession of objects, money, time, or even abstract things." 
      },
      { 
        id: "ec_n7", 
        question: "她___说英语", 
        translation: "(She doesn't speak English)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "她不说英语: 不 before 说 negates speaking. Language abilities differ. Not everyone speaks every language, which is perfectly natural. Learning languages takes time and opportunity. 不说 = doesn't speak. Clear communication about language abilities helps avoid confusion and allows for translation or alternative communication methods." 
      },
      { 
        id: "ec_n8", 
        question: "他们___吃", 
        translation: "(They didn't eat)", 
        options: ["没", "不", "别", "未"], 
        correct: "没", 
        explanation: "他们没吃: 没 negates past eating action. Perhaps they were too busy, not hungry, or waiting for others. 没吃 = didn't eat. Meals are important for health and social bonding. Missing a meal occasionally happens in busy lives. Knowing who hasn't eaten helps us offer food and care." 
      },
      { 
        id: "ec_n9", 
        question: "我___累", 
        translation: "(I am not tired)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "我不累: 不 negates 累 (lèi = tired). Feeling energetic and refreshed is wonderful. 不累 = not tired. Energy levels vary throughout the day and depend on rest, nutrition, and health. Expressing that you're not tired might mean you're ready to continue activities or help others. Simple negation with 不 handles these state descriptions elegantly." 
      },
      { 
        id: "ec_n10", 
        question: "他___会游泳", 
        translation: "(He cannot swim)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "他不会游泳: 不 negates 会 (huì = can/able to). 游泳 (yóuyǒng) = swim. 不会 = cannot (doesn't know how to). This differs from 不能 (cannot, due to circumstances). 不会 means lacking the skill or knowledge. Not everyone learns to swim, though it's a valuable safety skill. Being honest about abilities keeps us safe." 
      },
      { 
        id: "ec_n11", 
        question: "我___要这个", 
        translation: "(I don't want this)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "我不要这个: 不 negates 要 (yào = want). 不要 = don't want. Clear refusal or preference. It's okay to decline things we don't need or want. 这个 (zhège) = this. Being clear about what we don't want prevents misunderstandings and helps others understand our preferences." 
      },
      { 
        id: "ec_n12", 
        question: "她___高兴", 
        translation: "(She is not happy)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "她不高兴: 不 negates 高兴 (gāoxìng = happy). Everyone has ups and downs. 不高兴 = not happy, unhappy. Understanding someone's emotional state helps us respond with empathy. Sometimes people need space, sometimes comfort. Emotions are natural and valid. The direct negation makes expressing emotional states clear." 
      },
      { 
        id: "ec_n13", 
        question: "我们___看见他", 
        translation: "(We didn't see him)", 
        options: ["没", "不", "别", "未"], 
        correct: "没", 
        explanation: "我们没看见他: 没 negates past action of seeing. 看见 (kànjiàn) = see (verb + result complement). 没看见 = didn't see. Perhaps he wasn't there, or we looked elsewhere. Paths don't always cross. 没 effectively negates the completed action of seeing. Result complements add richness to verbs." 
      },
      { 
        id: "ec_n14", 
        question: "我___懂", 
        translation: "(I don't understand)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "我不懂: 不 negates 懂 (dǒng = understand). 不懂 = don't understand. It's okay not to understand - asking questions leads to learning. Being honest about confusion is the first step to clarity. 我不懂 invites explanation and teaching. Understanding grows through patient communication and willingness to learn." 
      },
      { 
        id: "ec_n15", 
        question: "他们___住这里", 
        translation: "(They don't live here)", 
        options: ["不", "没", "别", "未"], 
        correct: "不", 
        explanation: "他们不住这里: 不 negates 住 (zhù = live/reside). 这里 (zhèlǐ) = here. People live in many different places. 不住这里 = don't live here. Knowing where people live and don't live helps with directions and connections. The consistent pattern of 不 + verb makes these statements easy to construct." 
      }
    ]
  },

  comparisons: {
    name: "Comparisons",
    description: "Comparing things in Chinese",
    level: "intermediate",
    icon: TrendingUp,
    color: "from-orange-400 to-yellow-500",
    questions: [
      { 
        id: "ec_c1", 
        question: "他___我高", 
        translation: "(He is taller than me)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "Chinese comparisons use 比 (bǐ): A 比 B + adjective. 他比我高 = he compared-to me tall = he's taller than me. 高 (gāo) = tall/high. No need for '-er' or 'more'. Just: A 比 B + adjective. Simple and direct. Physical attributes vary naturally. Comparisons help describe relative differences. The 比 structure is consistent across all comparisons." 
      },
      { 
        id: "ec_c2", 
        question: "这个___那个贵", 
        translation: "(This is more expensive than that)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "这个比那个贵: 这个 (zhège) = this, 那个 (nàge) = that, 贵 (guì) = expensive. Shopping requires comparing prices. Understanding relative cost helps make informed decisions. The 比 structure makes price comparisons straightforward. 贵 can mean expensive or valuable - context determines which. Wise spending balances quality and cost." 
      },
      { 
        id: "ec_c3", 
        question: "她跑得___他快", 
        translation: "(She runs faster than him)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "For comparing how actions are performed, use: Verb + 得 (de) + 比 + comparison + adjective. 她跑得比他快: she runs compared-to him fast. 跑 (pǎo) = run, 快 (kuài) = fast. 得 links verb to degree/result. Running ability varies. Some are naturally fast, others build speed through practice. The 得 structure adds nuance to comparisons." 
      },
      { 
        id: "ec_c4", 
        question: "今天___昨天热", 
        translation: "(Today is hotter than yesterday)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "今天比昨天热: 今天 (jīntiān) = today, 昨天 (zuótiān) = yesterday, 热 (rè) = hot. Weather comparisons are common conversation topics. Temperature fluctuations affect our daily activities and mood. The reliable 比 structure makes these observations easy to express. Weather connects us through shared experience." 
      },
      { 
        id: "ec_c5", 
        question: "中文___英文容易", 
        translation: "(Chinese is easier than English)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "中文比英文容易: 容易 (róngyì) = easy. Language difficulty is subjective - it depends on your native language and learning style. What's easy for one might be challenging for another. Chinese grammar can be simpler than English in some ways (no tenses, no plurals). Each language has its own logic and beauty. The 比 structure expresses these comparisons neutrally." 
      },
      { 
        id: "ec_c6", 
        question: "我___你大", 
        translation: "(I am older than you)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "我比你大: In Chinese, 大 (dà) = big/old (for age). For age comparison, 比 + 大 means older, 比 + 小 means younger. Age brings experience and perspective. In Chinese culture, age is respected. Older siblings or friends often mentor younger ones. The relationship between generations shapes society. Simple comparisons convey these relationships clearly." 
      },
      { 
        id: "ec_c7", 
        question: "这本书___那本书厚", 
        translation: "(This book is thicker than that one)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "这本书比那本书厚: 厚 (hòu) = thick. Books vary in thickness - some are light reads, others weighty tomes. Physical attributes like thickness tell us something about content and commitment required. Thick books might contain deeper content or longer stories. The measure word 本 for books appears in both compared items. Comparisons help us choose what to read based on time and interest." 
      },
      { 
        id: "ec_c8", 
        question: "他学习___我努力", 
        translation: "(He studies harder than me)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "他学习比我努力: 学习 (xuéxí) = study, 努力 (nǔlì) = hardworking/diligent. This compares degree of effort. Some students are more dedicated, spending more time and focus. Diligence often leads to better results. Acknowledging others' hard work shows respect. We can learn from those who study harder, perhaps adopting their methods or discipline." 
      },
      { 
        id: "ec_c9", 
        question: "夏天___春天热", 
        translation: "(Summer is hotter than spring)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "夏天比春天热: 夏天 (xiàtiān) = summer, 春天 (chūntiān) = spring. Seasonal changes are predictable yet always worth noting. Summer's heat follows spring's mildness. Each season has its character and beauty. These natural cycles connect us to Earth's rhythms. Comparing seasons helps us prepare and appreciate each one's unique gifts." 
      },
      { 
        id: "ec_c10", 
        question: "北京___上海大", 
        translation: "(Beijing is bigger than Shanghai)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "北京比上海大: 北京 (Běijīng) = Beijing, 上海 (Shànghǎi) = Shanghai. Actually, Shanghai has more people, but Beijing has more land area - so this depends on how you measure 'big'. Both are magnificent cities with their own character. Geographic comparisons help us understand scale and distances. Each city offers unique history, culture, and opportunities." 
      },
      { 
        id: "ec_c11", 
        question: "我___喜欢茶", 
        translation: "(I prefer tea / I like tea more)", 
        options: ["比较", "比", "跟", "和"], 
        correct: "比较", 
        explanation: "我比较喜欢茶: 比较 (bǐjiào) here means 'relatively/comparatively'. This is another comparison pattern - using 比较 as an adverb. It softens the statement: 'I relatively prefer tea' = I prefer tea (compared to other drinks). Personal preferences in beverages reflect taste and culture. Tea and coffee both have devoted fans. Expressing preferences politely maintains harmony." 
      },
      { 
        id: "ec_c12", 
        question: "这个___那个好", 
        translation: "(This is better than that)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "这个比那个好: 好 (hǎo) = good. Comparing quality or desirability. 'Better' in Chinese is just 比 + 好. What makes something better varies by purpose and preference. Quality judgments help decision-making. Sometimes 'better' is objective (more durable, more efficient), sometimes subjective (more beautiful, more comfortable). The simple comparison allows both." 
      },
      { 
        id: "ec_c13", 
        question: "她说得___他慢", 
        translation: "(She speaks more slowly than him)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "她说得比他慢: 说 + 得 + 比 + 他 + 慢 (màn = slow). Speaking slowly can be good - it aids clarity and understanding. Rapid speech can be hard to follow. Speed of speech varies by personality and situation. When learning languages, slower speech helps comprehension. Patience with different speaking speeds shows understanding." 
      },
      { 
        id: "ec_c14", 
        question: "狗___猫聪明", 
        translation: "(Dogs are smarter than cats)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "狗比猫聪明: 狗 (gǒu) = dog, 猫 (māo) = cat, 聪明 (cōngming) = smart/intelligent. This comparison is subjective and debatable - both dogs and cats have different types of intelligence. Dog lovers and cat lovers each have their reasons. Both animals bring joy as companions. The 比 structure lets us express these playful comparisons." 
      },
      { 
        id: "ec_c15", 
        question: "我___以前忙", 
        translation: "(I am busier than before)", 
        options: ["比", "跟", "和", "从"], 
        correct: "比", 
        explanation: "我比以前忙: 以前 (yǐqián) = before/previously. Comparing oneself across time. Life changes - responsibilities grow, opportunities expand. Being busier can mean progress or overwhelm. 比以前 compares present to past. Self-comparison helps track personal growth. Understanding how we've changed gives perspective on our journey." 
      }
    ]
  }
};
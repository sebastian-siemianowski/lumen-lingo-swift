
/**
 * CHINESE → ENGLISH GRAMMAR - PART 1
 * Present Tense & Articles
 */

import { Clock, FileText } from "lucide-react";

export const part1Categories = {
  present_simple: {
    name: "Present Simple",
    description: "一般现在时",
    level: "beginner",
    icon: Clock,
    color: "from-blue-400 to-cyan-500",
    questions: [
      { id: "ce_ps1", question: "I _____ English.", translation: "(我说英语)", options: ["speak", "speaks", "speaking", "am speaking"], correct: "speak", explanation: "欢迎来到英语动词形式的世界。在中文里，\"说\"对所有主语都保持不变，但英语会有细微变化。用'I'时，使用动词原形：'I speak'。这类似于\"我说\"，但英语要求主语代词'I'。你不能像中文那样省略它。好消息是大多数主语（I, you, we, they）都使用这个简单的原形。只有he/she/it会改变，我们很快就会看到。" },
      { id: "ce_ps2", question: "She _____ in Beijing.", translation: "(她住在北京)", options: ["lives", "live", "living", "is living"], correct: "lives", explanation: "这是需要记住的一个变化：用he/she/it时，给动词加-s。所以\"她住\"变成'she lives'。这个-s词尾在英语中很重要。虽然中文不改变动词形式，但英语需要这个标记来表示第三人称单数。把它看作一个小信号，表明你在谈论另一个人或事物。一旦掌握这个模式，其余的就很简单了。" },
      { id: "ce_ps3", question: "They _____ tea.", translation: "(他们喝茶)", options: ["drink", "drinks", "drinking", "are drinking"], correct: "drink", explanation: "用'they'时，回到不加-s的原形。所以\"他们喝\"变成'they drink'。英语对复数主语很简单 - 没有特殊词尾。这在很多方面与中文相似。动词保持基本形式。模式是：I/you/we/they用原形，只有he/she/it加-s。一旦掌握基本规则，这种一致性使学习变得更容易。" },
      { id: "ce_ps4", question: "He _____ coffee every morning.", translation: "(他每天早上喝咖啡)", options: ["drinks", "drink", "drinking", "is drinking"], correct: "drinks", explanation: "再次，用'he'时加-s：\"他喝\"变成'he drinks'。像'every morning'这样的时间表达表示习惯，使用一般现在时。这类似于中文的\"每天\"表示常规动作。英语和中文都对习惯使用简单形式，尽管英语对主语的标记不同。这个模式是可靠和可预测的。" },
      { id: "ce_ps5", question: "We _____ to school by bus.", translation: "(我们坐公交车去学校)", options: ["go", "goes", "going", "are going"], correct: "go", explanation: "用'we'时，使用原形：\"我们去\"变成'we go'。注意英语根本不改变'we'的动词。这种简单性帮助你专注于意义而不是形式。挑战在于记住要加主语代词（we, they等），而中文经常省略。英语要求这些代词明确。" },
      { id: "ce_ps6", question: "The cat _____ on the sofa.", translation: "(猫在沙发上睡觉)", options: ["sleeps", "sleep", "sleeping", "is sleeping"], correct: "sleeps", explanation: "动物在英语中被视为'it'，所以加-s：\"猫睡\"变成'the cat sleeps'。在中文里，你可能对动物使用特定的量词，但英语简单地将所有动物视为'it'。这简化了事情。无论是猫、狗还是鸟，都使用he/she/it动词形式。通过练习，-s词尾会变得自动。" },
      { id: "ce_ps7", question: "I _____ you.", translation: "(我喜欢你)", options: ["like", "likes", "liking", "am liking"], correct: "like", explanation: "状态动词使用一般现在时：'I like you'。中文的\"喜欢\"可以直接表达持续的感觉。英语对状态和感情使用简单现在时。like, love, want, know这样的动词表示状态，不是动作。即使它们表达现在的感觉，也使用现在时。这与用现在进行时表示现在动作的动作动词（I am eating）不同。" },
      { id: "ce_ps8", question: "She _____ Chinese.", translation: "(她懂中文)", options: ["knows", "know", "knowing", "is knowing"], correct: "knows", explanation: "知识动词是状态动词：'She knows Chinese'。在中文里你说\"她懂中文\"，英语使用'knows'加-s表示she。know, understand, remember这样的动词描述心理状态，不是进行中的行为。它们保持一般现在时，即使谈论现在的知识。英语区分状态（现在时）和行动（进行时）。" },
      { id: "ce_ps9", question: "We _____ rice.", translation: "(我们吃米饭)", options: ["eat", "eats", "eating", "are eating"], correct: "eat", explanation: "用'we'的原形：\"我们吃\"变成'we eat'。当作为一般习惯或事实陈述时，英语使用现在时。中文在谈论一般习惯时可能使用类似的简单形式。关键是记住英语需要明确的主语代词，而中文经常根据上下文省略它们。" },
      { id: "ce_ps10", question: "It _____ cold in winter.", translation: "(冬天很冷)", options: ["is", "are", "am", "be"], correct: "is", explanation: "动词'to be'是特殊的：'It is cold in winter'。在中文里，你可以说\"冬天冷\"不用动词。英语需要'be'动词（am/is/are）来连接主语和描述。'it'用于天气和季节，总是带'is'。这个be动词是英语中必不可少的，虽然中文通常不需要等效的词。" },
      { id: "ce_ps11", question: "Do you _____ milk?", translation: "(你喜欢牛奶吗)", options: ["like", "likes", "liking", "liked"], correct: "like", explanation: "疑问句在'do/does'后使用原形：'Do you like milk?'。在中文里，\"你喜欢牛奶吗\"保持动词不变，只加\"吗\"。英语使用助动词'do'加原形。对于he/she/it使用'does'，但仍然是原形动词：'Does he like?'。助动词承载时态和一致标记，所以主动词保持原形。这个结构对所有一般现在时疑问句都是必不可少的。" },
      { id: "ce_ps12", question: "He doesn't _____ coffee.", translation: "(他不喜欢咖啡)", options: ["like", "likes", "liking", "liked"], correct: "like", explanation: "否定句使用'don't/doesn't'加原形：'He doesn't like coffee'。中文的\"不喜欢\"直接否定动词。英语使用助动词'doesn't'（he/she/it）或'don't'（I/you/we/they）加原形。助动词承载否定和一致，所以主动词保持简单。这个助动词系统简化了否定 - 不需要为每个动词学习否定形式。" },
      { id: "ce_ps13", question: "They _____ in Tokyo.", translation: "(他们在东京工作)", options: ["work", "works", "working", "worked"], correct: "work", explanation: "复数主语用原形：'They work in Tokyo'。中文的\"他们工作\"也保持动词不变。英语对复数保持一致性 - 像I/you一样，'they'使用不加-s的原形。这种模式贯穿所有复数主语和'you'，使其相对简单。只有单数第三人称（he/she/it）是特殊的。" },
      { id: "ce_ps14", question: "My brother _____ basketball.", translation: "(我哥哥打篮球)", options: ["plays", "play", "playing", "played"], correct: "plays", explanation: "单数名词作为'he'：'My brother plays basketball'。在中文里，\"我哥哥打篮球\"保持动词简单。英语将'my brother'视为'he'，所以加-s。任何单数的人或物（除了I和you）都遵循这个he/she/it规则。一旦认识到单数名词的行为像he/she/it，模式就变得清晰了。" },
      { id: "ce_ps15", question: "Water _____ at 100 degrees.", translation: "(水在100度沸腾)", options: ["boils", "boil", "boiling", "boiled"], correct: "boils", explanation: "科学事实使用一般现在时：'Water boils at 100 degrees'。主语'water'是'it'，所以需要-s。中文可能对一般事实说\"水沸腾\"或\"水会沸腾\"。英语一致地对普遍真理使用现在时，无论何时发生。这个时态处理永恒的事实，对描述自然规律、科学过程和世界如何运作的一般真理至关重要。" }
    ]
  },

  articles: {
    name: "Articles (a/an/the)",
    description: "冠词",
    level: "beginner",
    icon: FileText,
    color: "from-indigo-400 to-purple-500",
    questions: [
      { id: "ce_art1", question: "I have _____ book.", translation: "(我有一本书)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "欢迎来到英语冠词的世界，中文中不存在的概念。在辅音音前使用'a'：'a book'。这意味着一本书，任何一本书，不是特定的那本。在中文里，你说\"我有书\"或\"我有一本书\"，不指定是一本特定的书还是任何书。英语要求你每次都用a/an（不定冠词）或the（定冠词）做出这种区分。把'a'想象成类似\"一个\"但使用范围更广。" },
      { id: "ce_art2", question: "I see _____ apple.", translation: "(我看到一个苹果)", options: ["an", "a", "the", "no article"], correct: "an", explanation: "在元音音前使用'an'：'an apple'。'a'变成'an'是为了发音流畅。听音不看拼写 - 'an hour'（h不发音）但'a house'（h发音）。中文没有这个概念，但英语对每个第一次提到的可数单数名词都需要它。a/an的区别纯粹是语音的，使口语流动更自然。" },
      { id: "ce_art3", question: "_____ book is on the table.", translation: "(那本书在桌子上)", options: ["The", "A", "An", "no article"], correct: "The", explanation: "对双方都知道的特定物品使用'the'：'The book is on the table'。这是明确的 - 我们在谈论一本特定的书。中文使用\"那本\"或上下文来显示特定性，但英语在语法上要求'the'。当你之前提到过某物，或者当你指的是哪一个很清楚时（如\"桌子上的书\"），使用'the'。这告诉听众你指的是他们可以识别的特定物品。" },
      { id: "ce_art4", question: "I go to _____ school.", translation: "(我去上学)", options: ["no article", "a", "an", "the"], correct: "no article", explanation: "某些表达不使用冠词：'go to school'、'go to work'、'go to bed'。这些指的是活动而不是建筑。当你说\"去上学\"时，你在谈论上学这个活动。英语通过省略冠词来表达这一点。但如果你说'I go to the school'，你指的是那座建筑物。这种微妙的区别出现在许多固定表达中。" },
      { id: "ce_art5", question: "_____ sun is bright.", translation: "(太阳很亮)", options: ["The", "A", "An", "no article"], correct: "The", explanation: "独一无二的事物用'the'：'the sun'、'the moon'、'the earth'。只有一个太阳（在我们的语境中），所以它总是明确的。中文说\"太阳\"不加标记，因为唯一性是显而易见的。英语用'the'明确标记确定性。这适用于独特的地理特征、天体和著名地标 - 所有这些都用'the'，因为它们是独一无二的。" },
      { id: "ce_art6", question: "I like _____ music.", translation: "(我喜欢音乐)", options: ["no article", "a", "an", "the"], correct: "no article", explanation: "抽象概念和一般类别不使用冠词：'I like music'。当你谈论一般的音乐时，不需要冠词。但如果你说'the music at the party was good'，你在谈论特定的音乐，所以使用'the'。中文在语法上不做这种区分，但英语要求你考虑你指的是所有音乐还是特定的音乐。" },
      { id: "ce_art7", question: "He is _____ teacher.", translation: "(他是老师)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "单数职业名词需要'a/an'：'He is a teacher'。中文说\"他是老师\"不加标记。英语需要'a'，因为teacher是可数名词。你在说他属于教师这个类别。没有'a'，英语使用者会觉得句子不完整。这是不定冠词最常见的用法之一 - 识别职业或角色时。" },
      { id: "ce_art8", question: "_____ water is important.", translation: "(水很重要)", options: ["no article", "A", "An", "The"], correct: "no article", explanation: "一般的不可数名词不使用冠词：'Water is important'。当谈论作为一般物质的水时，不需要冠词。如果你说'the water in this bottle'，你在指定哪种水，所以使用'the'。中文对\"水\"的处理是相同的，无论是一般的还是特定的，依靠上下文。英语通过冠词在语法上区分这一点。" },
      { id: "ce_art9", question: "I saw _____ movie yesterday.", translation: "(我昨天看了一部电影)", options: ["a", "an", "the", "no article"], correct: "a", explanation: "第一次提到的可数名词需要'a/an'：'I saw a movie'。你在将这部电影引入对话。中文说\"看了电影\"不表明确定或不确定。英语需要'a'来进行这个初始引入。如果你继续谈论它，你会说'the movie was good'，切换到'the'因为现在说话者和听众都知道是哪部电影。" },
      { id: "ce_art10", question: "_____ movie was good.", translation: "(那部电影很好)", options: ["The", "A", "An", "no article"], correct: "The", explanation: "第二次提到使用'the'：'The movie was good'。用'a'引入后，后续提到切换到'the'。这表明说话者和听众都知道是哪部电影。中文使用\"那部\"或上下文。英语的冠词系统明确跟踪信息是新的（a/an）还是已知的（the）。这种信息流的标记内置于英语语法中。" },
      { id: "ce_art11", question: "I play _____ piano.", translation: "(我弹钢琴)", options: ["the", "a", "an", "no article"], correct: "the", explanation: "乐器使用'the'：'play the piano'。这是英语的固定模式。即使你拥有一架钢琴，当谈论演奏时，你说'the piano'而不是'a piano'。中文说\"弹钢琴\"不加标记。英语的乐器惯例是习惯性的 - 演奏任何乐器时都用'the'：the guitar、the violin、the drums。" },
      { id: "ce_art12", question: "_____ dogs are animals.", translation: "(狗是动物)", options: ["no article", "The", "A", "An"], correct: "no article", explanation: "一般的复数名词不使用冠词：'Dogs are animals'。当陈述关于所有狗的事情时，使用复数不加冠词。如果你说'the dogs'，你在谈论特定的狗。这就是英语如何区分一个类别的所有成员与特定成员。中文对一般和特定使用类似的方法，依靠上下文和像\"那些\"这样的词。" },
      { id: "ce_art13", question: "I need _____ help.", translation: "(我需要帮助)", options: ["no article", "a", "an", "the"], correct: "no article", explanation: "抽象名词通常不用冠词：'I need help'。中文也类似地说\"需要帮助\"。当help是一般概念时，英语省略冠词。但在特定情况下 - 'the help you gave me' - 使用'the'。这种灵活性让你区分一般概念和特定实例，这是英语冠词系统的核心特征。" },
      { id: "ce_art14", question: "She lives in _____ United States.", translation: "(她住在美国)", options: ["the", "a", "an", "no article"], correct: "the", explanation: "国家名称包含复数词或'union/kingdom'等词时使用'the'：'the United States'、'the Philippines'、'the United Kingdom'。中文通常说\"美国\"不加冠词。英语对这些国家名称有特定的惯例。大多数国家不用冠词（China、Japan、France），但复数或特定类型的名称需要'the'。" },
      { id: "ce_art15", question: "I eat _____ breakfast at 7.", translation: "(我7点吃早餐)", options: ["no article", "a", "an", "the"], correct: "no article", explanation: "餐食名称通常不用冠词：'eat breakfast'、'have lunch'、'eat dinner'。中文也类似地说\"吃早餐\"。英语将餐食视为日常活动而不是物品，所以省略冠词。但如果你说'the breakfast was delicious'，你在谈论特定的一餐，所以使用'the'。这反映了活动与特定实例之间的区别。" }
    ]
  }
};


/**
 * ENGLISH → CHINESE GRAMMAR - PART 1 (REFINED - NO EXCLAMATIONS)
 * Word Order & Measure Words
 */

import { List, Scale } from "lucide-react";

export const part1Categories = {
  word_order: {
    name: "Word Order",
    description: "Basic Chinese sentence structure",
    level: "beginner",
    icon: List,
    color: "from-blue-400 to-cyan-500",
    questions: [
      { 
        id: "ec_wo1", 
        question: "我___饭", 
        translation: "(I eat rice)", 
        options: ["吃", "吃我", "饭吃", "我吃"], 
        correct: "吃", 
        explanation: "Welcome to Chinese sentence structure. The basic pattern is delightfully simple: Subject + Verb + Object (SVO), just like English. 我 (wǒ) = I, 吃 (chī) = eat, 饭 (fàn) = rice/meal. So 我吃饭 follows the same order as English. This similarity makes your first steps in Chinese comfortable and familiar. Chinese word order is actually quite logical and consistent. Once you grasp the basic pattern, you can build countless sentences with confidence." 
      },
      { 
        id: "ec_wo2", 
        question: "她___水", 
        translation: "(She drinks water)", 
        options: ["喝", "喝她", "水喝", "她喝"], 
        correct: "喝", 
        explanation: "Again, Subject-Verb-Object: 她 (tā) = she, 喝 (hē) = drink, 水 (shuǐ) = water. The pattern repeats beautifully: 她喝水. Notice how Chinese doesn't change verb forms - 'drinks' becomes simply 喝, the same as for any subject. This simplicity is one of Chinese's most learner-friendly features. No conjugation tables to memorize. The verb stays the same whether it's I, you, he, she, we, or they." 
      },
      { 
        id: "ec_wo3", 
        question: "他___书", 
        translation: "(He reads books)", 
        options: ["看", "看他", "书看", "他看"], 
        correct: "看", 
        explanation: "Following the same comfortable pattern: 他 (tā) = he, 看 (kàn) = read/look, 书 (shū) = book. So 他看书 = he reads books. The word 看 is versatile - it means both 'look' and 'read', depending on what follows it. Context makes meaning clear. Reading books opens doorways to new worlds and ideas. Chinese literature has thousands of years of beautiful stories waiting to be discovered." 
      },
      { 
        id: "ec_wo4", 
        question: "我们___中文", 
        translation: "(We study Chinese)", 
        options: ["学", "学我们", "中文学", "我们学"], 
        correct: "学", 
        explanation: "我们 (wǒmen) = we, 学 (xué) = study/learn, 中文 (Zhōngwén) = Chinese language. The pattern holds steady: 我们学中文. Learning Chinese is a rewarding journey that connects you to one of the world's oldest continuous cultures. Each character you learn carries history and meaning. The structure remains consistent, giving you a reliable foundation to build upon." 
      },
      { 
        id: "ec_wo5", 
        question: "他们___茶", 
        translation: "(They like tea)", 
        options: ["喜欢", "喜欢他们", "茶喜欢", "他们喜欢"], 
        correct: "喜欢", 
        explanation: "他们 (tāmen) = they, 喜欢 (xǐhuan) = like, 茶 (chá) = tea. The structure continues: 他们喜欢茶. Tea culture runs deep in Chinese tradition - it's more than a beverage, it's an art form and a social ritual. Notice how 喜欢 is a two-character verb expressing 'to like'. Many Chinese verbs are compound words, built from meaningful parts that hint at their meaning." 
      },
      { 
        id: "ec_wo6", 
        question: "我___早饭", 
        translation: "(I eat breakfast)", 
        options: ["吃", "吃我", "早饭吃", "我吃"], 
        correct: "吃", 
        explanation: "我吃早饭 = I eat breakfast. 早饭 (zǎofàn) breaks down beautifully: 早 (zǎo) = early/morning + 饭 (fàn) = meal. So 'early meal' = breakfast. This compounding principle is everywhere in Chinese - words are built like little logical puzzles. Breakfast is the most important meal, giving energy for the day ahead. The consistent word order makes constructing sentences feel natural and predictable." 
      },
      { 
        id: "ec_wo7", 
        question: "她___英语", 
        translation: "(She speaks English)", 
        options: ["说", "说她", "英语说", "她说"], 
        correct: "说", 
        explanation: "她说英语: 说 (shuō) = speak, 英语 (Yīngyǔ) = English language. The 'yǔ' (语) in both 英语 and 中文's alternate form 汉语 means 'language'. Recognizing these building blocks helps you decode new vocabulary. Speaking multiple languages opens doors to different ways of thinking and expressing ideas. Each language carries its culture's unique perspective on the world." 
      },
      { 
        id: "ec_wo8", 
        question: "他___咖啡", 
        translation: "(He wants coffee)", 
        options: ["要", "要他", "咖啡要", "他要"], 
        correct: "要", 
        explanation: "他要咖啡: 要 (yào) = want/need, 咖啡 (kāfēi) = coffee. The pattern remains steady and reliable. 咖啡 is a phonetic borrowing - it sounds like 'coffee' in English. Chinese has absorbed words from many languages while maintaining its own character. Coffee culture has become popular in modern Chinese cities, blending with traditional tea culture." 
      },
      { 
        id: "ec_wo9", 
        question: "我___你", 
        translation: "(I love you)", 
        options: ["爱", "爱我", "你爱", "我爱"], 
        correct: "爱", 
        explanation: "我爱你 (wǒ ài nǐ): 爱 (ài) = love, 你 (nǐ) = you. Three characters that carry profound meaning. Subject-Verb-Object, simple and direct. In Chinese culture, expressing emotions directly is less common than in Western cultures, making these words especially meaningful when spoken. Love in any language warms the heart and strengthens bonds between people." 
      },
      { 
        id: "ec_wo10", 
        question: "我们___晚饭", 
        translation: "(We eat dinner)", 
        options: ["吃", "吃我们", "晚饭吃", "我们吃"], 
        correct: "吃", 
        explanation: "我们吃晚饭: 晚饭 (wǎnfàn) = dinner, literally 'late meal' (晚 = late/evening). The word order stays consistent, which is reassuring as you learn. Dinner is often the main family meal in Chinese culture - a time for gathering, sharing food, and connecting. Family meals strengthen relationships and create lasting memories." 
      },
      { 
        id: "ec_wo11", 
        question: "他们___电影", 
        translation: "(They watch movies)", 
        options: ["看", "看他们", "电影看", "他们看"], 
        correct: "看", 
        explanation: "他们看电影: 电影 (diànyǐng) = movie, literally 'electric shadow'. This poetic compound shows Chinese's creative way of naming modern concepts. 电 (diàn) = electricity, 影 (yǐng) = shadow/reflection. Movies do cast moving shadows of light. The reliable word order lets you focus on learning these beautiful compound words." 
      },
      { 
        id: "ec_wo12", 
        question: "你___牛奶", 
        translation: "(You drink milk)", 
        options: ["喝", "喝你", "牛奶喝", "你喝"], 
        correct: "喝", 
        explanation: "你喝牛奶: 牛奶 (niúnǎi) = milk, literally 'cow milk' (牛 = cow). Direct and descriptive. Chinese often names things by what they are or where they come from. This logical approach makes vocabulary easier to remember. Milk is nutritious and strengthening for growing bodies. The consistent structure lets you express these everyday activities naturally." 
      },
      { 
        id: "ec_wo13", 
        question: "她___水果", 
        translation: "(She eats fruit)", 
        options: ["吃", "吃她", "水果吃", "她吃"], 
        correct: "吃", 
        explanation: "她吃水果: 水果 (shuǐguǒ) = fruit, literally 'water fruit'. Many fruits have high water content, so this compound makes sense. Chinese builds vocabulary through these meaningful combinations. Eating fruit provides vitamins and natural sweetness. The predictable sentence pattern allows you to express simple, healthy choices with ease." 
      },
      { 
        id: "ec_wo14", 
        question: "我___信", 
        translation: "(I write letters)", 
        options: ["写", "写我", "信写", "我写"], 
        correct: "写", 
        explanation: "我写信: 写 (xiě) = write, 信 (xìn) = letter. In the digital age, handwritten letters carry special meaning - they show time and care. The character 信 also means 'trust' or 'believe', linking written communication with trustworthiness. The word order remains your steady guide as you explore more vocabulary." 
      },
      { 
        id: "ec_wo15", 
        question: "他___中文", 
        translation: "(He teaches Chinese)", 
        options: ["教", "教他", "中文教", "他教"], 
        correct: "教", 
        explanation: "他教中文: 教 (jiāo) = teach. Teachers pass on knowledge and wisdom to the next generation. Teaching is a respected profession in Chinese culture, honored through the ages. The consistent Subject-Verb-Object pattern means you can now construct many sentences confidently. This solid foundation supports your continued learning journey." 
      }
    ]
  },

  measure_words: {
    name: "Measure Words",
    description: "Chinese classifiers for counting",
    level: "beginner",
    icon: Scale,
    color: "from-green-400 to-emerald-500",
    questions: [
      { 
        id: "ec_mw1", 
        question: "___人", 
        translation: "(One person)", 
        options: ["一个", "一", "个一", "人一"], 
        correct: "一个", 
        explanation: "Chinese has a fascinating feature: measure words (also called classifiers). When counting, you need: Number + Measure Word + Noun. 一个人 = one person. 个 (gè) is the most common measure word - think of it as a general counter. 一 (yī) = one, 人 (rén) = person. This system groups things by their nature - round things, flat things, long things, animals, people, and so on. It's like saying 'one piece of paper' or 'one head of cattle' in English, but Chinese does this for everything." 
      },
      { 
        id: "ec_mw2", 
        question: "___书", 
        translation: "(Two books)", 
        options: ["两本", "两", "本两", "书两"], 
        correct: "两本", 
        explanation: "两本书: 两 (liǎng) = two (used with measure words), 本 (běn) = measure word for books and bound items, 书 (shū) = book. Books use 本 because they're bound volumes. This measure word system reflects how Chinese speakers categorize the world. Each measure word tells you something about the object's nature. Books are gateways to knowledge - each one a world waiting to be explored." 
      },
      { 
        id: "ec_mw3", 
        question: "三___水", 
        translation: "(Three cups of water)", 
        options: ["杯", "个", "杯子", "水杯"], 
        correct: "杯", 
        explanation: "三杯水: 三 (sān) = three, 杯 (bēi) = measure word for cups/glasses (also means the cup itself). Sometimes the measure word and noun are the same character. When counting containers with their contents, Chinese often uses just the container measure word. Three cups of water. Staying hydrated keeps the body and mind fresh." 
      },
      { 
        id: "ec_mw4", 
        question: "___车", 
        translation: "(One car)", 
        options: ["一辆", "一个", "辆一", "车一"], 
        correct: "一辆", 
        explanation: "一辆车: 辆 (liàng) = measure word for vehicles, 车 (chē) = car/vehicle. Vehicles get their own special counter because they're significant objects with wheels and purpose. Different types of objects require different measure words - this categorization is core to Chinese thinking. Cars provide freedom and convenience, connecting places and people." 
      },
      { 
        id: "ec_mw5", 
        question: "四___苹果", 
        translation: "(Four apples)", 
        options: ["个", "只", "本", "辆"], 
        correct: "个", 
        explanation: "四个苹果: 四 (sì) = four, 个 (gè) = general measure word, 苹果 (píngguǒ) = apple. When unsure which measure word to use, 个 often works. It's the default, the safety net. Apples are healthy, crisp, and sweet - enjoyed across cultures. The measure word system seems complex at first, but patterns emerge with practice." 
      },
      { 
        id: "ec_mw6", 
        question: "___狗", 
        translation: "(One dog)", 
        options: ["一只", "一个", "只一", "狗一"], 
        correct: "一只", 
        explanation: "一只狗: 只 (zhī) = measure word for animals (especially smaller ones and birds), 狗 (gǒu) = dog. Animals have their own measure word because they're living beings with special status. Dogs are loyal companions, bringing joy and protection to families. Learning measure words deepens your understanding of how Chinese speakers see and categorize their world." 
      },
      { 
        id: "ec_mw7", 
        question: "两___笔", 
        translation: "(Two pencils)", 
        options: ["支", "个", "本", "只"], 
        correct: "支", 
        explanation: "两支笔: 支 (zhī) = measure word for long, thin objects like pens, pencils, and sticks, 笔 (bǐ) = pen/pencil. Long, thin objects share a measure word because of their shape. This shape-based categorization is logical and helps organize vocabulary. Pencils and pens are tools of learning and expression, letting us capture thoughts on paper." 
      },
      { 
        id: "ec_mw8", 
        question: "三___人", 
        translation: "(Three people)", 
        options: ["个", "只", "位", "支"], 
        correct: "个", 
        explanation: "三个人: People use 个, the general measure word. In casual speech, you might hear 三人, dropping the measure word, especially in compound words like 三人行 (three people walking together). But the standard, polite form includes 个. People are our most important connection in life - family, friends, community. Respecting proper grammar shows respect for people." 
      },
      { 
        id: "ec_mw9", 
        question: "___猫", 
        translation: "(One cat)", 
        options: ["一只", "一个", "只一", "猫一"], 
        correct: "一只", 
        explanation: "一只猫: 只 for animals, 猫 (māo) = cat. Cats are elegant, independent creatures that have lived alongside humans for millennia. In Chinese culture, as in many others, cats are appreciated for their grace and pest-control abilities. The measure word 只 acknowledges their living, breathing nature as animals." 
      },
      { 
        id: "ec_mw10", 
        question: "两___纸", 
        translation: "(Two sheets of paper)", 
        options: ["张", "个", "本", "只"], 
        correct: "张", 
        explanation: "两张纸: 张 (zhāng) = measure word for flat objects like paper, tables, beds, maps, 纸 (zhǐ) = paper. Flat things share 张. This makes sense - they're similar in form. Paper revolutionized human communication and record-keeping. Each sheet holds potential - for writing, drawing, creating. The measure word system teaches you to see objects through new categories." 
      },
      { 
        id: "ec_mw11", 
        question: "___歌", 
        translation: "(One song)", 
        options: ["一首", "一个", "首一", "歌一"], 
        correct: "一首", 
        explanation: "一首歌: 首 (shǒu) = measure word for poems and songs, 歌 (gē) = song. Poetry and music share a measure word because they're both forms of rhythmic, emotional expression. Songs touch the heart and lift the spirit. Music is a universal language that transcends borders. This special measure word honors the artistic nature of songs and poems." 
      },
      { 
        id: "ec_mw12", 
        question: "三___花", 
        translation: "(Three flowers)", 
        options: ["朵", "个", "支", "只"], 
        correct: "朵", 
        explanation: "三朵花: 朵 (duǒ) = measure word for flowers and clouds, 花 (huā) = flower. Flowers and clouds are both soft, beautiful, natural forms that bloom or drift. This poetic pairing shows Chinese's aesthetic sensibility. Flowers brighten spaces and moods with their colors and fragrance. Each bloom is a small gift from nature." 
      },
      { 
        id: "ec_mw13", 
        question: "___电影", 
        translation: "(One movie)", 
        options: ["一部", "一个", "部一", "电影一"], 
        correct: "一部", 
        explanation: "一部电影: 部 (bù) = measure word for films, machines, books (especially longer works), novels, 电影 = movie. 部 is used for substantial works and complex machines. Movies are complete works of art, involving many people and much effort. Each film tells a story and creates an experience. The measure word acknowledges this completeness and significance." 
      },
      { 
        id: "ec_mw14", 
        question: "两___马", 
        translation: "(Two horses)", 
        options: ["匹", "只", "个", "辆"], 
        correct: "匹", 
        explanation: "两匹马: 匹 (pǐ) = measure word specifically for horses (and bolts of cloth), 马 (mǎ) = horse. Horses are special - large, majestic animals that have served humans in agriculture, transportation, and war. They deserve their own measure word. This specificity shows the importance of horses in Chinese history and culture. Each measure word teaches you something about cultural values." 
      },
      { 
        id: "ec_mw15", 
        question: "___信", 
        translation: "(One letter)", 
        options: ["一封", "一个", "封一", "信一"], 
        correct: "一封", 
        explanation: "一封信: 封 (fēng) = measure word for letters and sealed documents, 信 = letter. 封 also means 'to seal', connecting to how letters are sealed in envelopes. This dual meaning makes the measure word memorable and logical. Letters carry personal messages across distances, connecting hearts. Each letter sealed is a thought sent with care. Measure words often have these meaningful connections to what they count." 
      }
    ]
  }
};

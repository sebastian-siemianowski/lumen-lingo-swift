
/**
 * CHINESE → ENGLISH GRAMMAR - PART 3 (REFINED - NO EXCLAMATIONS)
 * Future Tense & Modal Verbs
 */

import { Zap, Shield } from "lucide-react";

export const part3Categories = {
  future_simple: {
    name: "Future Simple",
    description: "一般将来时",
    level: "intermediate",
    icon: Zap,
    color: "from-purple-400 to-pink-500",
    questions: [
      { id: "ce_fut1", question: "I _____ tomorrow.", translation: "(我明天会去)", options: ["will go", "go", "went", "going"], correct: "will go", explanation: "英语将来时非常简单优雅：will + 动词原形。I will go = 我将会去。所有人称都用will，不需要变化，这比中文的'会'、'将'更统一。Tomorrow（明天）标明未来。Will表达意愿、预测和承诺。这个结构简单可靠，掌握后你就能自如地谈论未来的计划和梦想。将来时打开想象的大门。" },
      { id: "ce_fut2", question: "She _____ French.", translation: "(她会说法语)", options: ["will speak", "speaks", "spoke", "speaking"], correct: "will speak", explanation: "Will + speak。She will speak French = 她将会说法语。学习新语言是对未来的投资，法语优雅动听。Will后面的动词永远是原形（speak，不是speaks）。这个规则很固定，简化了将来时的学习。语言能力开启新的文化视野。每掌握一门语言，就多一个看世界的角度。" },
      { id: "ce_fut3", question: "They _____ at 8 PM.", translation: "(他们晚上8点会到)", options: ["will arrive", "arrive", "arrived", "arriving"], correct: "will arrive", explanation: "Will + arrive。They will arrive at 8 PM = 他们将在晚8点到达。At 8 PM指定具体时间。准时很重要，知道到达时间方便安排。Will对所有主语都一样，这种一致性让将来时易学易用。期待和规划是人类特有的能力。将来时帮助我们表达这些对未来的设想。" },
      { id: "ce_fut4", question: "He _____ the exam.", translation: "(他会参加考试)", options: ["will take", "takes", "took", "taking"], correct: "will take", explanation: "Will + take。He will take the exam = 他将参加考试。Take an exam是固定搭配。考试检验学习成果，准备充分能减少紧张。Will表达对未来的计划和决心。每次考试都是成长的机会。掌握will + 动词原形这个简单公式，你就能轻松谈论未来的各种事情。" },
      { id: "ce_fut5", question: "We _____ together.", translation: "(我们会一起工作)", options: ["will work", "work", "worked", "working"], correct: "will work", explanation: "Will + work。We will work together = 我们将一起工作。Together（一起）强调合作。团队协作能完成个人难以完成的事。Will的一致性让将来时成为英语中最简单的时态之一。合作需要沟通和相互理解。未来充满可能，良好的合作关系能让这些可能变为现实。" },
      { id: "ce_fut6", question: "You _____ better soon.", translation: "(你很快会好起来)", options: ["will feel", "feel", "felt", "feeling"], correct: "will feel", explanation: "Will + feel。You will feel better soon = 你很快会感觉好些。这是鼓励和安慰的话。Soon（很快）给予希望。身体不适时，这样的话语温暖人心。Will在这里表达对未来好转的信心。积极的期待有助于康复。关心他人的健康体现人性的温暖。" },
      { id: "ce_fut7", question: "I _____ a doctor.", translation: "(我会成为医生)", options: ["will be", "am", "was", "being"], correct: "will be", explanation: "Will + be。I will be a doctor = 我将成为医生。即使是最不规则的be动词，在将来时也简单遵循will + 原形。医生是崇高的职业，救死扶伤。职业梦想需要规划和努力。将来时帮我们表达志向和目标。每个梦想都值得尊重，每个为梦想努力的人都值得鼓励。" },
      { id: "ce_fut8", question: "She _____ the book.", translation: "(她会读那本书)", options: ["will read", "reads", "read", "reading"], correct: "will read", explanation: "Will + read。She will read the book = 她将读那本书。阅读未来的书是对知识的承诺。书籍承载智慧和故事。Will + 动词原形的简单结构适用于所有情况。计划阅读是好习惯，每本书都是一次心灵之旅。为未来安排阅读时间是对自己的投资。" },
      { id: "ce_fut9", question: "They _____ the truth.", translation: "(他们会知道真相)", options: ["will know", "know", "knew", "knowing"], correct: "will know", explanation: "Will + know。They will know the truth = 他们将知道真相。真相终会浮现。The truth（真相）是重要的概念。知识和真相带来理解和公正。Will在这里表达确定性。时间会揭示一切。真诚和诚实是人际关系的基石。未来会带来答案和清晰。" },
      { id: "ce_fut10", question: "We _____ happy.", translation: "(我们会很开心)", options: ["will be", "are", "were", "being"], correct: "will be", explanation: "Will + be。We will be happy = 我们将会快乐。对幸福未来的期望给人力量。Be动词在将来时遵循同样简单的规则。快乐是人生追求，积极的态度创造美好未来。Will be可以描述未来的状态和感受。希望和乐观让我们继续前行。建设幸福未来从今天的行动开始。" },
      { id: "ce_fut11", question: "You _____ this weekend.", translation: "(你这周末会来)", options: ["will come", "come", "came", "coming"], correct: "will come", explanation: "Will + come。You will come this weekend = 你这周末会来。This weekend指定近期时间。相聚的期待让人心情愉悦。Will表达对见面的期望。周末是休息和社交的好时光。朋友间的约定用将来时表达。计划聚会需要协调时间，将来时帮助做出承诺。" },
      { id: "ce_fut12", question: "He _____ the door.", translation: "(他会开门)", options: ["will open", "opens", "opened", "opening"], correct: "will open", explanation: "Will + open。He will open the door = 他将开门。开门是简单动作，也象征着欢迎和机会。Will表达即将发生的动作。Door（门）在语言中常有象征意义。每扇开启的门都可能通向新的可能。小小的礼貌举动体现关怀。将来时描述即将到来的行动。" },
      { id: "ce_fut13", question: "I _____ my homework.", translation: "(我会做作业)", options: ["will do", "do", "did", "doing"], correct: "will do", explanation: "Will + do。I will do my homework = 我将做作业。这是对责任的承诺。Do homework是固定搭配。作业巩固学习，培养自律。Will表达完成任务的决心。及时完成作业减轻压力，提高学习效果。对未来的规划包括这些日常责任。良好的学习习惯塑造未来。" },
      { id: "ce_fut14", question: "She _____ to France.", translation: "(她会去法国)", options: ["will go", "goes", "went", "going"], correct: "will go", explanation: "Will + go。She will go to France = 她将去法国。旅行梦想令人兴奋，法国有丰富的文化和历史。Will表达未来的旅行计划。每个国家都有独特的魅力。旅行开阔视野，创造回忆。将来时帮助我们谈论期待的旅程。梦想和计划让生活充满期待。" },
      { id: "ce_fut15", question: "They _____ us tomorrow.", translation: "(他们明天会打电话给我们)", options: ["will call", "call", "called", "calling"], correct: "will call", explanation: "Will + call。They will call us tomorrow = 他们明天会给我们打电话。Call表示电话联系。Tomorrow指定时间。期待朋友的电话让人开心。Will表达未来的沟通计划。保持联系维护关系。现代技术让跨越距离的沟通变得容易。将来时表达这些即将到来的联系。" }
    ]
  },

  modal_verbs: {
    name: "Modal Verbs",
    description: "情态动词",
    level: "advanced",
    icon: Shield,
    color: "from-green-400 to-emerald-500",
    questions: [
      { id: "ce_mod1", question: "I _____ swim.", translation: "(我会游泳)", options: ["can", "must", "should", "will"], correct: "can", explanation: "情态动词是英语的特色，给动词增添意义。Can表示能力和可能性。I can swim = 我会游泳。Can后面接动词原形（不加to）。游泳是实用技能，也是好运动。Can的用法广泛，表达能做某事。掌握情态动词让表达更丰富准确。每个情态动词都有独特的含义和用法。" },
      { id: "ce_mod2", question: "You _____ study harder.", translation: "(你应该更努力学习)", options: ["should", "can", "will", "may"], correct: "should", explanation: "Should给出建议或推荐。You should study harder = 你应该更努力学习。这是善意的建议。Should比must温和，是建议而非命令。努力学习带来好结果。Should表达说话人的看法和关心。给予建议是关心他人的方式。适度的建议帮助他人成长。" },
      { id: "ce_mod3", question: "She _____ speak English well.", translation: "(她能说好英语)", options: ["can", "must", "should", "would"], correct: "can", explanation: "Can表能力。She can speak English well = 她能说好英语。Well（好）描述程度。流利的语言能力是成就。Can用于描述已有的技能。每个语言学习者都向这个目标努力。能力通过练习获得。Can表达对某人技能的认可。语言能力开启沟通之门。" },
      { id: "ce_mod4", question: "We _____ go now.", translation: "(我们必须现在走)", options: ["must", "can", "may", "should"], correct: "must", explanation: "Must表达强烈的必要性或义务。We must go now = 我们必须现在走。Must比should更强，是必须而非建议。有时情况要求我们立即行动。Must表达紧迫性。遵守必要的事情体现责任。理解must和should的区别帮助正确表达程度。时间有时是刚性的。" },
      { id: "ce_mod5", question: "He _____ be at home.", translation: "(他可能在家)", options: ["might", "must", "can", "will"], correct: "might", explanation: "Might表示较弱的可能性。He might be at home = 他可能在家。不确定，但有可能。Might比may的可能性更低。生活中很多事情不确定。Might表达这种不确定性。灵活的思维接受多种可能。对未知保持开放态度很重要。情态动词的细微差别增加表达的精确性。" },
      { id: "ce_mod6", question: "You _____ wear a coat.", translation: "(你应该穿外套)", options: ["should", "can", "must", "may"], correct: "should", explanation: "Should给建议。You should wear a coat = 你应该穿外套。关心他人健康的建议。Should表达对他人福祉的关心。天冷穿外套预防感冒。实用的建议出于关怀。适当的衣着保护身体。Should的建议性质让接受者有选择权。关心体现在细节中。" },
      { id: "ce_mod7", question: "They _____ arrive soon.", translation: "(他们会很快到)", options: ["will", "can", "must", "may"], correct: "will", explanation: "虽然will主要表将来，也常和情态动词归为一类。They will arrive soon = 他们会很快到。Soon（很快）给时间框架。期待到来让人愉快。Will表达确定性较高的未来事件。等待的时间因期待而美好。Will是表达未来最常用的方式。到达意味着团聚。" },
      { id: "ce_mod8", question: "I _____ like some tea.", translation: "(我想要些茶)", options: ["would", "can", "must", "will"], correct: "would", explanation: "Would用于礼貌请求或表达愿望。I would like some tea = 我想要些茶。比I want更礼貌。Would like是礼貌表达的标准方式。茶是舒适的饮品。礼貌的语言表达尊重。Would在提出请求时软化语气。文明的交流让人舒适。礼貌是社交的润滑剂。" },
      { id: "ce_mod9", question: "She _____ play the piano.", translation: "(她会弹钢琴)", options: ["can", "must", "should", "would"], correct: "can", explanation: "Can表能力。She can play the piano = 她会弹钢琴。音乐才能是美好的天赋。Piano（钢琴）是优雅的乐器。Can描述已掌握的技能。音乐表达情感和艺术。每种才能都值得欣赏。Can让我们谈论自己和他人的能力。艺术丰富人生。" },
      { id: "ce_mod10", question: "We _____ leave early.", translation: "(我们必须早走)", options: ["must", "can", "may", "would"], correct: "must", explanation: "Must表必要。We must leave early = 我们必须早走。Early（早）给足够时间。有时需要提前以避免迟到。Must表达不可商量的必要性。时间管理是重要技能。Must帮助强调严肃性。准时体现尊重和责任。提前规划避免匆忙。" },
      { id: "ce_mod11", question: "You _____ smoke here.", translation: "(你不能在这里吸烟)", options: ["cannot", "must", "should", "will"], correct: "cannot", explanation: "Cannot（can't）表禁止或不可能。You cannot smoke here = 你不能在这里吸烟。公共场所的规定保护健康。Cannot否定can，表达不允许。吸烟有害健康。尊重规则维护公共利益。Cannot清楚表达限制。健康意识在提高。遵守规定是公民素质。" },
      { id: "ce_mod12", question: "He _____ be tired.", translation: "(他一定很累)", options: ["must", "can", "may", "will"], correct: "must", explanation: "Must也用于强烈推断。He must be tired = 他一定很累。基于观察的逻辑推断。Must表达说话人的确信。疲劳是正常的身体信号。理解他人的状态体现同理心。Must的推断用法很常见。观察和推理是理解的基础。关心他人需要敏锐观察。" },
      { id: "ce_mod13", question: "They _____ come to the party.", translation: "(他们可能会来聚会)", options: ["may", "must", "will", "can"], correct: "may", explanation: "May表中等可能性。They may come to the party = 他们可能会来。不确定但有希望。May比might的可能性稍高。聚会因朋友而有趣。May表达不确定的未来。灵活的计划适应变化。May的概率在can和might之间。期待但不强求让心态平和。" },
      { id: "ce_mod14", question: "I _____ help you.", translation: "(我会帮助你)", options: ["will", "must", "should", "may"], correct: "will", explanation: "Will表承诺或意愿。I will help you = 我会帮助你。承诺帮助建立信任。Will表达坚定的决心。帮助他人是美德。Will使承诺明确。互助让社会温暖。Will的承诺性用法表达责任感。真诚的帮助不求回报。" },
      { id: "ce_mod15", question: "You _____ try this food.", translation: "(你应该尝尝这个食物)", options: ["should", "can", "must", "will"], correct: "should", explanation: "Should建议尝试。You should try this food = 你应该尝尝这个食物。友好的推荐。Should邀请但不强迫。尝试新食物拓展味觉。Should的建议性质尊重选择。美食是文化的一部分。Should表达分享好体验的愿望。开放的心态让生活丰富。" }
    ]
  }
};

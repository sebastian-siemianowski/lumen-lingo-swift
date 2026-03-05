/**
 * ARABIC → ENGLISH GRAMMAR - PART 3 (REFINED - NO EXCLAMATIONS)
 * Future Tense & Modal Verbs
 */

import { Zap, Shield } from "lucide-react";

export const part3Categories = {
  future_simple: {
    name: "Future Simple",
    description: "المستقبل البسيط",
    level: "intermediate",
    icon: Zap,
    color: "from-purple-400 to-pink-500",
    questions: [
      { 
        id: "ae_fut1", 
        question: "I _____ tomorrow.", 
        translation: "(سأسافر غداً)", 
        options: ["will travel", "travel", "traveled", "am traveling"], 
        correct: "will travel", 
        explanation: "المستقبل في الإنجليزية بسيط وجميل: WILL + الفعل الأساسي. 'I will travel' = سأسافر. لا تصريفات معقدة - نفس التركيب لجميع الضمائر. 'Will' يُعبر عن الإرادة والتوقع والوعد. 'Tomorrow' (غداً) يُحدد المستقبل. السفر يُوسع الآفاق ويُتيح تجارب جديدة. كل رحلة فرصة للتعلم والنمو. بساطة المستقبل الإنجليزي تُسهل التعبير عن الخطط والأحلام." 
      },
      { 
        id: "ae_fut2", 
        question: "She _____ French.", 
        translation: "(ستتحدث الفرنسية)", 
        options: ["will speak", "speaks", "spoke", "speaking"], 
        correct: "will speak", 
        explanation: "Will + الفعل الأساسي. 'She will speak French' = ستتحدث الفرنسية. لاحظ: ليس 'will speaks' - الفعل يبقى في صيغته الأساسية. تعلم الفرنسية رحلة ممتعة إلى لغة الأدب والثقافة. كل لغة جديدة تُضيف بُعداً لشخصيتنا. المستقبل يحمل إمكانيات لا محدودة للتواصل والفهم." 
      },
      { 
        id: "ae_fut3", 
        question: "They _____ at 8 PM.", 
        translation: "(سيصلون الساعة الثامنة مساءً)", 
        options: ["will arrive", "arrive", "arrived", "arriving"], 
        correct: "will arrive", 
        explanation: "Will + arrive. 'They will arrive at 8 PM' = سيصلون الساعة 8 مساءً. الأوقات المحددة تتناسب مع 'will' للخطط والمواعيد. 'At 8 PM' يُعطي الدقة الزمنية. الانتظار والترقب جزء من المستقبل. معرفة موعد الوصول تُساعد على التخطيط والاستعداد. البساطة في التركيب تُتيح التركيز على المعنى." 
      },
      { 
        id: "ae_fut4", 
        question: "He _____ the exam.", 
        translation: "(سيخوض الامتحان)", 
        options: ["will take", "takes", "took", "taking"], 
        correct: "will take", 
        explanation: "Will + take. 'He will take the exam' = سيخوض الامتحان. 'Take an exam' تعبير ثابت في الإنجليزية. الامتحانات فرص لإظهار ما تعلمناه. التحضير الجيد يُخفف التوتر ويزيد الثقة. كل امتحان خطوة في رحلة التعلم. المستقبل يُعبر عن النية والاستعداد لهذه الخطوة المهمة." 
      },
      { 
        id: "ae_fut5", 
        question: "We _____ together.", 
        translation: "(سنعمل معاً)", 
        options: ["will work", "work", "worked", "working"], 
        correct: "will work", 
        explanation: "Will + work. 'We will work together' = سنعمل معاً. 'Together' (معاً) يُضيف بُعد التعاون. العمل الجماعي يُحقق أكثر من الجهود الفردية. التعاون يُقوي العلاقات ويُنمي المهارات الاجتماعية. المستقبل المشترك يُبنى بالتخطيط والعمل معاً نحو أهداف مشتركة." 
      },
      { 
        id: "ae_fut6", 
        question: "You _____ better soon.", 
        translation: "(ستشعر بتحسن قريباً)", 
        options: ["will feel", "feel", "felt", "feeling"], 
        correct: "will feel", 
        explanation: "Will + feel. 'You will feel better soon' = ستشعر بتحسن قريباً. رسالة أمل وتشجيع. 'Soon' (قريباً) يُعطي الأمل في مستقبل قريب. الصحة نعمة نقدرها عند المرض. الكلمات الطيبة تُشجع المريض وتُساعد على الشفاء. التفاؤل بالمستقبل جزء من العلاج." 
      },
      { 
        id: "ae_fut7", 
        question: "I _____ a doctor.", 
        translation: "(سأكون طبيباً)", 
        options: ["will be", "am", "was", "being"], 
        correct: "will be", 
        explanation: "Will + be. 'I will be a doctor' = سأكون طبيباً. حتى 'be' (الأكثر شذوذاً) يتبع القاعدة البسيطة. الطب مهنة نبيلة تُساعد الناس وتُنقذ الأرواح. الأحلام المهنية تحتاج للتخطيط والعمل الجاد. كل طبيب كان يوماً طالباً يحلم ويجتهد. المستقبل يحمل الإمكانيات اللامحدودة لمن يسعى." 
      },
      { 
        id: "ae_fut8", 
        question: "She _____ the book.", 
        translation: "(ستقرأ الكتاب)", 
        options: ["will read", "reads", "read", "reading"], 
        correct: "will read", 
        explanation: "Will + read. 'She will read the book' = ستقرأ الكتاب. القراءة المستقبلية وعد بالمتعة والمعرفة. كل كتاب رحلة تنتظر البداية. الكتب أصدقاء صامتون يُشاركوننا أفكارهم. تخصيص وقت للقراءة استثمار في النمو العقلي والروحي. البساطة في التعبير عن النية تُسهل التخطيط." 
      },
      { 
        id: "ae_fut9", 
        question: "They _____ the truth.", 
        translation: "(سيعرفون الحقيقة)", 
        options: ["will know", "know", "knew", "knowing"], 
        correct: "will know", 
        explanation: "Will + know. 'They will know the truth' = سيعرفون الحقيقة. الحقيقة تظهر مع الوقت. المعرفة تُنير الطريق وتُزيل الشكوك. الصدق أساس الثقة في العلاقات. الحقيقة قد تكون صعبة أحياناً لكنها دائماً أفضل من الجهل. المستقبل يكشف ما كان خفياً." 
      },
      { 
        id: "ae_fut10", 
        question: "We _____ happy.", 
        translation: "(سنكون سعداء)", 
        options: ["will be", "are", "were", "being"], 
        correct: "will be", 
        explanation: "Will + be. 'We will be happy' = سنكون سعداء. السعادة هدف إنساني عالمي. التفاؤل يخلق مستقبلاً إيجابياً. السعادة تأتي من الداخل ومن علاقاتنا الطيبة. بناء المستقبل السعيد يبدأ بالعقلية الإيجابية اليوم. الأمل في سعادة قادمة يُعطينا القوة للاستمرار." 
      },
      { 
        id: "ae_fut11", 
        question: "You _____ this weekend.", 
        translation: "(ستأتي نهاية هذا الأسبوع)", 
        options: ["will come", "come", "came", "coming"], 
        correct: "will come", 
        explanation: "Will + come. 'You will come this weekend' = ستأتي نهاية الأسبوع. دعوة وترتيب للقاء. 'This weekend' يُحدد الوقت القريب. اللقاءات تُجدد الروابط وتخلق ذكريات. نهاية الأسبوع وقت للراحة والاستمتاع مع الأحباء. التخطيط للقاءات يُظهر الاهتمام والتقدير." 
      },
      { 
        id: "ae_fut12", 
        question: "He _____ the door.", 
        translation: "(سيفتح الباب)", 
        options: ["will open", "opens", "opened", "opening"], 
        correct: "will open", 
        explanation: "Will + open. 'He will open the door' = سيفتح الباب. فتح الباب فعل بسيط لكنه رمزي - يُمثل الترحيب والفرص الجديدة. كل باب مفتوح دعوة للدخول والمشاركة. اللطف في الأفعال الصغيرة يصنع فرقاً كبيراً. المستقبل مليء بالأبواب المفتوحة لمن يسعى." 
      },
      { 
        id: "ae_fut13", 
        question: "I _____ my homework.", 
        translation: "(سأنجز واجبي)", 
        options: ["will do", "do", "did", "doing"], 
        correct: "will do", 
        explanation: "Will + do. 'I will do my homework' = سأنجز واجبي. وعد بإتمام المسؤولية. 'Do homework' تعبير ثابت. الواجبات المدرسية تُعزز التعلم وتُنمي الانضباط الذاتي. إنجاز الواجبات في وقتها يُخفف الضغط ويُحسن الفهم. المستقبل القريب يحمل مسؤولياتنا اليومية." 
      },
      { 
        id: "ae_fut14", 
        question: "She _____ to France.", 
        translation: "(ستذهب إلى فرنسا)", 
        options: ["will go", "goes", "went", "going"], 
        correct: "will go", 
        explanation: "Will + go. 'She will go to France' = ستذهب إلى فرنسا. حلم السفر إلى فرنسا يحمل وعود الثقافة والفن والتاريخ. كل بلد يُقدم تجربة فريدة وذكريات لا تُنسى. السفر يُوسع المدارك ويُعلم التقدير للاختلافات. المستقبل يحمل مغامرات تنتظر الاكتشاف." 
      },
      { 
        id: "ae_fut15", 
        question: "They _____ us tomorrow.", 
        translation: "(سيتصلون بنا غداً)", 
        options: ["will call", "call", "called", "calling"], 
        correct: "will call", 
        explanation: "Will + call. 'They will call us tomorrow' = سيتصلون بنا غداً. الاتصال يُحافظ على الروابط عبر المسافات. 'Tomorrow' يُعطي موعداً محدداً. التواصل المنتظم يُقوي العلاقات. انتظار اتصال من شخص عزيز يملأ القلب بالترقب. التكنولوجيا جعلت التواصل أسهل عبر العالم." 
      }
    ]
  },

  modal_verbs: {
    name: "Modal Verbs",
    description: "أفعال الكيفية",
    level: "advanced",
    icon: Shield,
    color: "from-green-400 to-emerald-500",
    questions: [
      { 
        id: "ae_mod1", 
        question: "I _____ swim.", 
        translation: "(أستطيع السباحة)", 
        options: ["can", "must", "should", "will"], 
        correct: "can", 
        explanation: "أفعال الكيفية (Modals) أفعال مساعدة خاصة تُضيف معنى للفعل الأساسي. 'Can' تُعبر عن القدرة والإمكانية. 'I can swim' = أستطيع السباحة. بعد Modal، الفعل يبقى في صيغته الأساسية بدون 'to'. السباحة مهارة مفيدة وممتعة. معرفة السباحة تُعطي ثقة قرب الماء. تعلم مهارات جديدة يُثري حياتنا ويفتح فرصاً." 
      },
      { 
        id: "ae_mod2", 
        question: "You _____ study harder.", 
        translation: "(يجب أن تدرس بجهد أكبر)", 
        options: ["should", "can", "will", "may"], 
        correct: "should", 
        explanation: "'Should' تُعطي نصيحة أو توصية. 'You should study harder' = يجب أن تدرس بجهد أكبر. نصيحة طيبة للنجاح. الدراسة بجد تُحقق الأهداف الأكاديمية. التوازن بين الدراسة والراحة مهم للصحة. النصيحة تأتي من الاهتمام والرغبة في مساعدة الآخرين على النجاح." 
      },
      { 
        id: "ae_mod3", 
        question: "She _____ speak English well.", 
        translation: "(تستطيع التحدث بالإنجليزية بطلاقة)", 
        options: ["can", "must", "should", "would"], 
        correct: "can", 
        explanation: "'Can' للقدرة. 'She can speak English well' = تستطيع التحدث بالإنجليزية بطلاقة. إتقان اللغة إنجاز يُفتح آفاقاً. 'Well' (بشكل جيد) يُحدد مستوى الإتقان. كل متعلم لغة يطمح لهذا المستوى. الممارسة المستمرة تُحسن المهارة تدريجياً. الثقة تأتي مع الكفاءة." 
      },
      { 
        id: "ae_mod4", 
        question: "We _____ go now.", 
        translation: "(يجب أن نذهب الآن)", 
        options: ["must", "can", "may", "should"], 
        correct: "must", 
        explanation: "'Must' تُعبر عن ضرورة قوية أو التزام. 'We must go now' = يجب أن نذهب الآن. 'Must' أقوى من 'should'. الضرورة تدفعنا للعمل. الوقت أحياناً يفرض علينا قرارات سريعة. احترام المواعيد يُظهر احترام الآخرين. الالتزام بالمسؤوليات جزء من النضج." 
      },
      { 
        id: "ae_mod5", 
        question: "He _____ be at home.", 
        translation: "(ربما يكون في البيت)", 
        options: ["might", "must", "can", "will"], 
        correct: "might", 
        explanation: "'Might' تُعبر عن احتمال ضعيف. 'He might be at home' = ربما يكون في البيت. عدم اليقين جزء من الحياة. 'Might' أضعف من 'may' في الاحتمالية. التخمين يساعدنا على التخطيط رغم عدم اليقين. المرونة في التوقعات تُقلل الإحباط عند تغير الأمور." 
      },
      { 
        id: "ae_mod6", 
        question: "You _____ wear a coat.", 
        translation: "(من الأفضل أن ترتدي معطفاً)", 
        options: ["should", "can", "must", "may"], 
        correct: "should", 
        explanation: "'Should' للنصيحة. 'You should wear a coat' = من الأفضل أن ترتدي معطفاً. نصيحة طيبة للحماية من البرد. الاهتمام بالصحة يبدأ بالوقاية. المعطف يحمي من الطقس البارد والمطر. النصائح الصحية تأتي من اهتمام حقيقي بسلامة الآخرين." 
      },
      { 
        id: "ae_mod7", 
        question: "They _____ arrive soon.", 
        translation: "(سيصلون قريباً)", 
        options: ["will", "can", "must", "may"], 
        correct: "will", 
        explanation: "'Will' ليس Modal تقنياً، لكنه يُستخدم مثلهم. 'They will arrive soon' = سيصلون قريباً. التوقع بوصول قريب يملأ القلب بالترقب. 'Soon' (قريباً) يُعطي إطاراً زمنياً. انتظار الأحباء له حلاوته الخاصة. الوصول لحظة فرح ولقاء." 
      },
      { 
        id: "ae_mod8", 
        question: "I _____ like some tea.", 
        translation: "(أود بعض الشاي)", 
        options: ["would", "can", "must", "will"], 
        correct: "would", 
        explanation: "'Would' للطلب المهذب أو التفضيل. 'I would like some tea' = أود بعض الشاي. أسلوب مهذب للطلب. 'Would like' أكثر أدباً من 'want'. الشاي مشروب مريح ومُهدئ. الأدب في الطلب يُظهر احترام الآخرين. اللباقة في التعامل تُحسن العلاقات الاجتماعية." 
      },
      { 
        id: "ae_mod9", 
        question: "She _____ play the piano.", 
        translation: "(تستطيع العزف على البيانو)", 
        options: ["can", "must", "should", "would"], 
        correct: "can", 
        explanation: "'Can' للقدرة. 'She can play the piano' = تستطيع العزف على البيانو. الموهبة الموسيقية هبة جميلة. تعلم العزف يحتاج صبراً وممارسة. الموسيقى تُعبر عن المشاعر بطريقة فريدة. كل قطعة موسيقية رسالة من القلب. المهارات الفنية تُغني حياتنا." 
      },
      { 
        id: "ae_mod10", 
        question: "We _____ leave early.", 
        translation: "(يجب أن نغادر مبكراً)", 
        options: ["must", "can", "may", "would"], 
        correct: "must", 
        explanation: "'Must' للضرورة. 'We must leave early' = يجب أن نغادر مبكراً. الضرورة تفرض المغادرة. التخطيط المسبق يُسهل الأمور. المغادرة المبكرة تُتيح وقتاً للتحضير والوصول بدون ضغط. احترام الوقت يُظهر الاحترافية والمسؤولية." 
      },
      { 
        id: "ae_mod11", 
        question: "You _____ smoke here.", 
        translation: "(لا يُسمح بالتدخين هنا)", 
        options: ["cannot", "must", "should", "will"], 
        correct: "cannot", 
        explanation: "'Cannot' (can't) للمنع. 'You cannot smoke here' = لا يُسمح بالتدخين هنا. قواعد للصحة العامة. التدخين ضار بالصحة. الأماكن العامة تحمي غير المدخنين. احترام القوانين يُحافظ على بيئة صحية للجميع. الوعي الصحي يزداد حول العالم." 
      },
      { 
        id: "ae_mod12", 
        question: "He _____ be tired.", 
        translation: "(لا بد أنه متعب)", 
        options: ["must", "can", "may", "will"], 
        correct: "must", 
        explanation: "'Must' هنا للاستنتاج القوي. 'He must be tired' = لا بد أنه متعب. استنتاج منطقي من الدلائل. فهم حال الآخرين يُظهر التعاطف. التعب شعور طبيعي بعد الجهد. تقدير تعب الآخرين يدفعنا لمساعدتهم. الملاحظة الدقيقة تُعمق فهمنا للناس حولنا." 
      },
      { 
        id: "ae_mod13", 
        question: "They _____ come to the party.", 
        translation: "(قد يأتون إلى الحفلة)", 
        options: ["may", "must", "will", "can"], 
        correct: "may", 
        explanation: "'May' للاحتمال المتوسط. 'They may come to the party' = قد يأتون. عدم التأكد من الحضور. 'May' أقوى من 'might'. الحفلات أكثر مرحاً بحضور الأصدقاء. المرونة في التوقعات تُريح البال. ندعو بأمل لكن نتقبل كل النتائج." 
      },
      { 
        id: "ae_mod14", 
        question: "I _____ help you.", 
        translation: "(سأساعدك)", 
        options: ["will", "must", "should", "may"], 
        correct: "will", 
        explanation: "'Will' للوعد أو القرار. 'I will help you' = سأساعدك. وعد بالمساعدة يُطمئن القلب. تقديم المساعدة قيمة إنسانية نبيلة. مساعدة الآخرين تُقوي المجتمع. كل يد تُمد للمساعدة تصنع فرقاً. الوعد بالمساعدة يحمل مسؤولية الوفاء به." 
      },
      { 
        id: "ae_mod15", 
        question: "You _____ try this food.", 
        translation: "(يجب أن تجرب هذا الطعام)", 
        options: ["should", "can", "must", "will"], 
        correct: "should", 
        explanation: "'Should' للاقتراح والنصيحة. 'You should try this food' = يجب أن تجرب هذا الطعام. اقتراح ودي لتجربة شيء جديد. تجربة أطعمة جديدة تُوسع الآفاق الثقافية. كل طعام يحكي قصة ثقافته. الانفتاح على الجديد يُثري التجربة الإنسانية. النصيحة تأتي من رغبة مشاركة تجربة جيدة." 
      }
    ]
  }
};
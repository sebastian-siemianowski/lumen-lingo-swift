/**
 * ARABIC → ENGLISH GRAMMAR - PART 2 (REFINED - NO EXCLAMATIONS)
 * Past Tense & Present Continuous
 */

import { History, Clock } from "lucide-react";

export const part2Categories = {
  past_simple: {
    name: "Past Simple",
    description: "الماضي البسيط",
    level: "intermediate",
    icon: History,
    color: "from-amber-400 to-orange-500",
    questions: [
      { 
        id: "ae_past1", 
        question: "I _____ to school yesterday.", 
        translation: "(ذهبتُ إلى المدرسة أمس)", 
        options: ["went", "go", "going", "gone"], 
        correct: "went", 
        explanation: "الماضي البسيط في الإنجليزية أبسط بكثير من الماضي في العربية. كلمة واحدة تكفي: 'went' (وهي شكل غير منتظم من 'go'). لا حاجة لتصريفات معقدة حسب الضمير. 'I went' و 'he went' و 'they went' - كلها نفس الشكل. كلمة 'yesterday' (أمس) تُحدد الزمن. في العربية نقول 'ذهبتُ' مع تاء الضمير، لكن الإنجليزية تستخدم الفعل الواحد مع جميع الضمائر. هذه البساطة تُسهل التعلم وتسمح بالتركيز على المعنى بدلاً من القواعد المعقدة." 
      },
      { 
        id: "ae_past2", 
        question: "She _____ a book last night.", 
        translation: "(قرأتْ كتاباً الليلة الماضية)", 
        options: ["read", "reads", "reading", "readed"], 
        correct: "read", 
        explanation: "'Read' في الماضي يُكتب مثل المضارع لكن يُنطق بشكل مختلف (يُنطق 'red' مثل اللون الأحمر). هذا فعل غير منتظم مهم. 'She read a book' = قرأتْ كتاباً. لاحظ أن 'last night' (الليلة الماضية) يُحدد الزمن الماضي. القراءة قبل النوم عادة جميلة تُهدئ العقل وتُحسن النوم. الكتب نوافذ إلى عوالم جديدة وأفكار مختلفة. الإنجليزية لا تُغير شكل الفعل حسب الضمير في الماضي - وهذا يُبسط الأمور كثيراً." 
      },
      { 
        id: "ae_past3", 
        question: "They _____ football yesterday.", 
        translation: "(لعبوا كرة القدم أمس)", 
        options: ["played", "play", "playing", "plaied"], 
        correct: "played", 
        explanation: "الأفعال المنتظمة تأخذ -ed في الماضي. 'Play' يصبح 'played'. هذا نمطك الأساسي: فعل + ed. يُنطق 'play-d'. لا تصريفات - نفس الشكل لـ I/you/he/she/it/we/they. 'Yesterday' يُحدد الماضي. كرة القدم رياضة محبوبة عالمياً تجمع الناس وتُعلم العمل الجماعي. اللعب مهم للصحة البدنية والعقلية في كل الأعمار. بساطة الماضي البسيط تجعل التحدث عن الأحداث الماضية أمراً سهلاً." 
      },
      { 
        id: "ae_past4", 
        question: "He _____ coffee this morning.", 
        translation: "(شرب قهوة هذا الصباح)", 
        options: ["drank", "drink", "drunk", "drinking"], 
        correct: "drank", 
        explanation: "'Drink' فعل غير منتظم: drink (مضارع) ← drank (ماضي) ← drunk (اسم المفعول). في الماضي البسيط نستخدم 'drank'. 'He drank coffee' = شرب قهوة. الأفعال غير المنتظمة تحتاج للحفظ، لكنها تُستخدم كثيراً فتصبح طبيعية. 'This morning' (هذا الصباح) يُحدد الوقت. القهوة الصباحية طقس يومي لكثير من الناس - تُنشط وتُجهز لليوم. فنجان القهوة لحظة هدوء قبل بدء النشاطات اليومية." 
      },
      { 
        id: "ae_past5", 
        question: "We _____ at home all day.", 
        translation: "(بقينا في البيت طوال اليوم)", 
        options: ["stayed", "stay", "staying", "staied"], 
        correct: "stayed", 
        explanation: "فعل منتظم: stay + ed = stayed. 'We stayed at home' = بقينا في البيت. حتى أفعال الحركة في الإنجليزية تأخذ نفس الشكل - لا تغيير حسب الضمير. 'All day' (طوال اليوم) يُحدد المدة. البقاء في البيت يمكن أن يكون وقتاً للراحة والاسترخاء مع العائلة. البيت ملاذ آمن ومريح بعد يوم طويل. البساطة في إضافة -ed تجعل تكوين الماضي سهلاً." 
      },
      { 
        id: "ae_past6", 
        question: "You _____ a great meal.", 
        translation: "(طبختَ وجبة رائعة)", 
        options: ["cooked", "cook", "cooking", "cookked"], 
        correct: "cooked", 
        explanation: "Cook + ed = cooked (يُنطق 'cookt'). 'You cooked a great meal' = طبختَ وجبة رائعة. الأفعال المنتهية بـ -k تأخذ -ed. نطق -ed بعد الأصوات الصامتة يكون مثل 't'. الطبخ فن ومهارة تُظهر الحب والعناية. إعداد وجبة للآخرين طريقة جميلة لإظهار الاهتمام. المطبخ مكان تجمع العائلة والأصدقاء حول رائحة الطعام الشهي." 
      },
      { 
        id: "ae_past7", 
        question: "She _____ to the store.", 
        translation: "(ذهبتْ إلى المتجر)", 
        options: ["went", "go", "gone", "going"], 
        correct: "went", 
        explanation: "'Go' فعل شديد عدم الانتظام: go ← went ← gone. في الماضي البسيط: 'went'. 'She went to the store' = ذهبتْ إلى المتجر. التسوق نشاط يومي ضروري. الذهاب إلى المتجر فرصة للخروج ورؤية الناس. 'Went' واحد من أكثر الأفعال استخداماً - حفظه يفتح أبواباً كثيرة للتعبير عن الحركة والذهاب." 
      },
      { 
        id: "ae_past8", 
        question: "I _____ my keys.", 
        translation: "(فقدتُ مفاتيحي)", 
        options: ["lost", "lose", "losed", "losing"], 
        correct: "lost", 
        explanation: "'Lose' غير منتظم: lose ← lost ← lost. 'I lost my keys' = فقدتُ مفاتيحي. تجربة محبطة يمر بها الجميع. فقدان الأشياء يُعلمنا أهمية التنظيم والانتباه. المفاتيح رمز للأمان والوصول - فقدانها يُشعرنا بالقلق مؤقتاً. الماضي البسيط يُعبر عن هذه اللحظات البسيطة في حياتنا اليومية." 
      },
      { 
        id: "ae_past9", 
        question: "They _____ the film.", 
        translation: "(شاهدوا الفيلم)", 
        options: ["watched", "watch", "watching", "watchhed"], 
        correct: "watched", 
        explanation: "Watch + ed = watched. 'They watched the film' = شاهدوا الفيلم. الأفعال المنتهية بـ -ch تأخذ -ed ببساطة. يُنطق 'wotch-t' - الـ -ed بعد ch يُصبح صوت 't'. مشاهدة الأفلام نشاط ترفيهي يجمع الناس. الأفلام تحكي قصصاً وتثير مشاعر متنوعة. المشاهدة الجماعية تخلق تجربة مشتركة وذكريات جميلة." 
      },
      { 
        id: "ae_past10", 
        question: "We _____ about the news.", 
        translation: "(تحدثنا عن الأخبار)", 
        options: ["talked", "talk", "talking", "talkked"], 
        correct: "talked", 
        explanation: "Talk + ed = talked. 'We talked about the news' = تحدثنا عن الأخبار. الحديث عن الأخبار طريقة لفهم العالم حولنا. 'About' (عن) تُدخل الموضوع. الحوارات تُعمق الفهم وتُتيح تبادل الآراء. التحدث مع الآخرين يُقوي العلاقات الاجتماعية ويُشعرنا بالانتماء لمجتمعنا." 
      },
      { 
        id: "ae_past11", 
        question: "He _____ very tired.", 
        translation: "(كان متعباً جداً)", 
        options: ["was", "were", "is", "be"], 
        correct: "was", 
        explanation: "فعل 'be' في الماضي ينقسم إلى: was (لـ I/he/she/it) و were (لـ you/we/they). 'He was tired' = كان متعباً. 'Be' الفعل الوحيد الذي يحتفظ بتصريفات مختلفة في الماضي. التعب شعور طبيعي بعد يوم من العمل أو النشاط. الاستراحة والنوم يُجددان الطاقة. الاهتمام بصحتنا يشمل الإنصات لجسدنا عندما يحتاج للراحة." 
      },
      { 
        id: "ae_past12", 
        question: "You _____ at the party.", 
        translation: "(كنتَ في الحفلة)", 
        options: ["were", "was", "is", "be"], 
        correct: "were", 
        explanation: "لـ 'you' في الماضي نستخدم 'were'. 'You were at the party' = كنتَ في الحفلة. حتى للمفرد، 'you' يأخذ 'were' (وليس 'was'). هذه خاصية الإنجليزية. الحفلات فرص للقاء الأصدقاء والمرح. الذكريات الجميلة تُصنع في مثل هذه اللحظات الاجتماعية السعيدة." 
      },
      { 
        id: "ae_past13", 
        question: "I _____ a letter.", 
        translation: "(كتبتُ رسالة)", 
        options: ["wrote", "write", "writing", "writed"], 
        correct: "wrote", 
        explanation: "'Write' غير منتظم: write ← wrote ← written. في الماضي البسيط: 'wrote'. 'I wrote a letter' = كتبتُ رسالة. كتابة الرسائل أصبحت نادرة في العصر الرقمي، لكنها لمسة شخصية دافئة. الرسائل المكتوبة بخط اليد تحمل مشاعر خاصة. الكتابة طريقة للتعبير عن المشاعر والأفكار بتأنٍ وعمق." 
      },
      { 
        id: "ae_past14", 
        question: "She _____ happy.", 
        translation: "(كانت سعيدة)", 
        options: ["was", "were", "is", "be"], 
        correct: "was", 
        explanation: "He/she/it في الماضي = 'was'. 'She was happy' = كانت سعيدة. السعادة شعور جميل نتمناه للجميع. الإنجليزية لا تُفرق بين الماضي المستمر والتام كما في العربية - السياق يُوضح المعنى. الذكريات السعيدة تُدفئ القلب وتُعطينا أملاً للمستقبل." 
      },
      { 
        id: "ae_past15", 
        question: "They _____ late.", 
        translation: "(وصلوا متأخرين)", 
        options: ["arrived", "arrive", "arriving", "arrivved"], 
        correct: "arrived", 
        explanation: "Arrive + d = arrived (عندما ينتهي الفعل بـ -e، نُضيف -d فقط). 'They arrived late' = وصلوا متأخرين. التأخر يحدث أحياناً رغم التخطيط الجيد. 'Late' (متأخر) يُضيف السياق. المهم هو الوصول في النهاية. التسامح مع تأخر الآخرين يُظهر الفهم والرحمة. إضافة -d فقط للأفعال المنتهية بـ -e تُبسط التصريف." 
      }
    ]
  },

  present_continuous: {
    name: "Present Continuous",
    description: "المضارع المستمر",
    level: "intermediate",
    icon: Clock,
    color: "from-blue-400 to-cyan-500",
    questions: [
      { 
        id: "ae_cont1", 
        question: "I _____ studying now.", 
        translation: "(أدرس الآن)", 
        options: ["am", "is", "are", "be"], 
        correct: "am", 
        explanation: "المضارع المستمر يُعبر عن أفعال تحدث الآن. التركيب: am/is/are + فعل + ing. لـ 'I' نستخدم 'am'. 'I am studying now' = أدرس الآن. 'Now' (الآن) يُؤكد اللحظة الحالية. هذا الزمن يُركز على الفعل أثناء حدوثه - مثل المضارع المستمر في العربية لكن أكثر استخداماً. الدراسة تحتاج تركيزاً وهدوءاً. خلق بيئة مناسبة للدراسة يُساعد على الفهم الأفضل والاستيعاب." 
      },
      { 
        id: "ae_cont2", 
        question: "She _____ reading a book.", 
        translation: "(تقرأ كتاباً)", 
        options: ["is", "am", "are", "be"], 
        correct: "is", 
        explanation: "لـ he/she/it نستخدم 'is'. 'She is reading a book' = تقرأ كتاباً. الـ -ing تُضاف للفعل. القراءة نشاط يُثري العقل ويُوسع الآفاق. كل كتاب رحلة جديدة إلى عوالم وأفكار مختلفة. القراءة المنتظمة تُحسن المفردات والخيال والفهم. المضارع المستمر يُظهر الفعل في تقدمه - هي تقرأ في هذه اللحظة بالذات." 
      },
      { 
        id: "ae_cont3", 
        question: "They _____ playing football.", 
        translation: "(يلعبون كرة القدم)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "لـ you/we/they نستخدم 'are'. 'They are playing football' = يلعبون كرة القدم. اللعب مهم للصحة والمرح. كرة القدم تُعلم العمل الجماعي والتنسيق. الرياضة تُقوي الجسم وتُحسن المزاج. المضارع المستمر يُعطي إحساساً بالحركة والنشاط - الفعل يحدث الآن أمام أعيننا." 
      },
      { 
        id: "ae_cont4", 
        question: "He _____ watching TV.", 
        translation: "(يشاهد التلفاز)", 
        options: ["is", "am", "are", "be"], 
        correct: "is", 
        explanation: "'He is watching TV' = يشاهد التلفاز. Watch + ing = watching. مشاهدة التلفاز طريقة شائعة للاسترخاء بعد يوم طويل. البرامج المختلفة تُقدم معلومات وترفيهاً. التوازن مهم - بين المشاهدة والأنشطة الأخرى. المضارع المستمر يُناسب وصف ما يفعله شخص في اللحظة الحالية." 
      },
      { 
        id: "ae_cont5", 
        question: "We _____ eating dinner.", 
        translation: "(نتناول العشاء)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "'We are eating dinner' = نتناول العشاء. Eat + ing = eating. وجبة العشاء وقت اجتماع العائلة والحديث عن اليوم. تناول الطعام معاً يُقوي الروابط الأسرية. الأكل ببطء والاستمتاع بالطعام صحي للهضم والنفسية. المضارع المستمر يُصور اللحظة - نحن نأكل الآن في هذه اللحظة." 
      },
      { 
        id: "ae_cont6", 
        question: "You _____ working hard.", 
        translation: "(تعمل بجد)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "'You are working hard' = تعمل بجد. Work + ing = working. العمل الجاد يُحقق الأهداف ويبني المستقبل. المثابرة والاجتهاد صفات محمودة. الراحة بين فترات العمل مهمة للإنتاجية. الحديث في المضارع المستمر يُعطي إحساساً بالتقدير والملاحظة الإيجابية للجهد المبذول." 
      },
      { 
        id: "ae_cont7", 
        question: "I _____ listening to music.", 
        translation: "(أستمع للموسيقى)", 
        options: ["am", "is", "are", "be"], 
        correct: "am", 
        explanation: "'I am listening to music' = أستمع للموسيقى. Listen + ing = listening. الموسيقى لغة عالمية تُعبر عن المشاعر. الاستماع للموسيقى يُهدئ الأعصاب ويُحسن المزاج. كل نوع موسيقى له تأثيره الخاص. استخدام المضارع المستمر يُظهر الانغماس في النشاط - الاستماع يحدث الآن وأنت منتبه له." 
      },
      { 
        id: "ae_cont8", 
        question: "She _____ cooking lunch.", 
        translation: "(تطبخ الغداء)", 
        options: ["is", "am", "are", "be"], 
        correct: "is", 
        explanation: "'She is cooking lunch' = تطبخ الغداء. Cook + ing = cooking. الطبخ مهارة مفيدة وممتعة. إعداد الطعام الصحي يُغذي الجسم والعقل. رائحة الطعام أثناء الطبخ تملأ البيت بالدفء. المضارع المستمر يُصور العملية - هي في المطبخ الآن، تُحضر الطعام خطوة بخطوة." 
      },
      { 
        id: "ae_cont9", 
        question: "They _____ running in the park.", 
        translation: "(يركضون في الحديقة)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "'They are running in the park' = يركضون في الحديقة. Run + ning = running (نُضاعف n). الركض رياضة ممتازة للقلب والجسم. الحديقة بيئة طبيعية منعشة للتمرين. الرياضة في الهواء الطلق أكثر متعة. المضارع المستمر يُعطي صورة حية - نراهم يركضون الآن بين الأشجار." 
      },
      { 
        id: "ae_cont10", 
        question: "He _____ sleeping.", 
        translation: "(ينام)", 
        options: ["is", "am", "are", "be"], 
        correct: "is", 
        explanation: "'He is sleeping' = ينام. Sleep + ing = sleeping. النوم ضروري لصحة الجسم والعقل. أثناء النوم يُصلح الجسم نفسه ويُنظم الذاكرة. النوم الجيد يُحسن المزاج والتركيز. استخدام المضارع المستمر للنوم يُعني أنه نائم الآن في هذه اللحظة - لا توقظه." 
      },
      { 
        id: "ae_cont11", 
        question: "We _____ learning English.", 
        translation: "(نتعلم الإنجليزية)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "'We are learning English' = نتعلم الإنجليزية. Learn + ing = learning. تعلم اللغات يفتح أبواباً جديدة للتواصل والفهم. كل درس خطوة نحو إتقان اللغة. الصبر والممارسة مفاتيح النجاح في تعلم اللغات. المضارع المستمر هنا يُعبر عن عملية مستمرة - التعلم رحلة طويلة، ونحن في طريقها الآن." 
      },
      { 
        id: "ae_cont12", 
        question: "You _____ writing a letter.", 
        translation: "(تكتب رسالة)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "'You are writing a letter' = تكتب رسالة. Write + ing = writing (نحذف e). كتابة الرسائل فن يُعبر عن المشاعر بعمق. الكلمات المكتوبة تبقى ذكرى دائمة. الكتابة تُنظم الأفكار وتُوضح المشاعر. المضارع المستمر يُظهر الفعل أثناء حدوثه - القلم يتحرك على الورق الآن." 
      },
      { 
        id: "ae_cont13", 
        question: "I _____ drinking water.", 
        translation: "(أشرب ماءً)", 
        options: ["am", "is", "are", "be"], 
        correct: "am", 
        explanation: "'I am drinking water' = أشرب ماءً. Drink + ing = drinking. الماء أساس الحياة والصحة. شرب الماء بانتظام يُحافظ على رطوبة الجسم ونشاطه. الماء أفضل مشروب للعطش. استخدام المضارع المستمر يُركز على اللحظة - أنت تشرب الآن، تُروي عطشك." 
      },
      { 
        id: "ae_cont14", 
        question: "She _____ dancing.", 
        translation: "(ترقص)", 
        options: ["is", "am", "are", "be"], 
        correct: "is", 
        explanation: "'She is dancing' = ترقص. Dance + ing = dancing (نحذف e). الرقص تعبير جسدي عن الفرح والموسيقى. الحركة مع الإيقاع تُحرر الطاقة وتُسعد القلب. كل ثقافة لها رقصاتها الخاصة. المضارع المستمر يُحيي المشهد - نراها تتحرك برشاقة الآن، مع الموسيقى." 
      },
      { 
        id: "ae_cont15", 
        question: "They _____ talking.", 
        translation: "(يتحدثون)", 
        options: ["are", "is", "am", "be"], 
        correct: "are", 
        explanation: "'They are talking' = يتحدثون. Talk + ing = talking. الحديث أساس التواصل الإنساني. المحادثات تُبني العلاقات وتُبادل الأفكار. الاستماع الجيد جزء مهم من الحوار. المضارع المستمر يُصور اللحظة - هم يتبادلون الكلمات الآن، في محادثة نشطة." 
      }
    ]
  }
};
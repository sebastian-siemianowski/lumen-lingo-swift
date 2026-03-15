#!/usr/bin/env python3
"""Batch 6: demonstratives, phrasal_verbs_advanced, collocations, word_order, cleft_sentences"""
import json, sys

FILE = "LumenLingo/LumenLingo/Resources/Content/ukrainian_english/grammar_ukrainian_english.json"

new_categories = [
    {
        "key": "demonstratives",
        "name": "Demonstratives",
        "description": "Вказівні займенники",
        "iconName": "hand.point.right",
        "color": "#d946ef",
        "level": "intermediate",
        "items": [
            {
                "id": "ue_dem1",
                "question": "_____ book on the table is mine.",
                "translation": "(Ця книга на столі — моя.)",
                "options": ["This", "That", "These", "Those"],
                "correct": "This",
                "explanation": "THIS = ЦЕЙ/ЦЯ/ЦЕ — вказує на предмет, який БЛИЗЬКО до мовця. 'This book on the table' — книга прямо тут, на столі поруч зі мною. В українській так само: 'ця книга' (близько) vs 'та книга' (далеко). THIS — однина, для близьких предметів. Порівняйте: 'This book' (ця книга — тримаю або бачу поруч) vs 'That book' (та книга — далеко, на полиці). В розмовній мові THIS часто вказує на щось, що ви тримаєте або торкаєтесь."
            },
            {
                "id": "ue_dem2",
                "question": "Can you see _____ birds in the sky?",
                "translation": "(Ти бачиш тих птахів у небі?)",
                "options": ["those", "these", "this", "that"],
                "correct": "those",
                "explanation": "THOSE = ТІ — множина від THAT, вказує на предмети ДАЛЕКО від мовця. Птахи в небі — далеко, тому THOSE. Система вказівних: THIS (цей — близько, однина), THAT (той — далеко, однина), THESE (ці — близько, множина), THOSE (ті — далеко, множина). В українській: 'тих птахів' — родовий відмінок множини. В англійській простіше: 'those birds' — без відмінків. Зверніть увагу: THOSE BIRDS (не 'those bird') — після those завжди множина іменника."
            },
            {
                "id": "ue_dem3",
                "question": "_____ shoes are too tight.",
                "translation": "(Ці черевики занадто тісні.)",
                "options": ["These", "Those", "This", "That"],
                "correct": "These",
                "explanation": "THESE = ЦІ — множина від THIS, для предметів БЛИЗЬКО. Черевики на мені (я їх ношу зараз) = THESE shoes. Якби черевики були у вітрині магазину далеко: 'Those shoes look nice'. Важливий нюанс: THESE/THOSE можуть передавати емоцію. 'These shoes are killing me!' (ці черевики мене вбивають!) — емоційне, особисте. 'Those shoes are ugly' (ті черевики огидні) — дистанція, можливо зневага. В українській: 'ці' vs 'ті' — аналогічно."
            },
            {
                "id": "ue_dem4",
                "question": "Who was _____ on the phone?",
                "translation": "(Хто це був по телефону?)",
                "options": ["that", "this", "these", "those"],
                "correct": "that",
                "explanation": "THAT = ТОЙ/ТА/ТЕ — для подій чи людей, які вже в минулому або на відстані. 'Who was THAT?' — хто це був? (розмова закінчилась). THAT часто використовується для речей, які щойно сталися: 'That was amazing!' (Це було чудово!). Різниця з THIS в часі: THIS = зараз ('This is fun!' — зараз весело), THAT = щойно/раніше ('That was fun!' — було весело). По телефону: 'Who is this?' (представляєтесь) vs 'Who was that?' (після дзвінка)."
            },
            {
                "id": "ue_dem5",
                "question": "I don't like _____ kind of music.",
                "translation": "(Мені не подобається такий вид музики.)",
                "options": ["this", "that", "these", "those"],
                "correct": "this",
                "explanation": "THIS KIND OF = ТАКИЙ ВИД/ТИП — THIS перед абстрактними поняттями вказує на категорію або тип. 'This kind of music' = цей тип музики (що зараз грає або про який говоримо). Конструкції: THIS/THAT KIND OF + однина ('this kind of food'), THESE/THOSE KINDS OF + множина ('these kinds of problems'). Поширена помилка: 'these kind of' — НЕПРАВИЛЬНО! Правильно: 'these KINDS of' або 'this KIND of'. В розмовній мові THAT KIND OF часто звучить більш зневажливо."
            },
            {
                "id": "ue_dem6",
                "question": "_____ days, everything is digital.",
                "translation": "(У наші дні все цифрове.)",
                "options": ["These", "Those", "This", "That"],
                "correct": "These",
                "explanation": "THESE DAYS = У НАШІ ДНІ / НИНІ — усталений вираз для теперішнього часу. 'These days' = зараз, у сучасну епоху. Порівняйте з 'in those days' = у ті часи (минуле). Ці вирази дуже поширені: 'These days, everyone has a phone' (нині у всіх є телефон). 'In those days, there was no internet' (у ті часи інтернету не було). THESE = поточний період, THOSE = минулий період. Також: 'one of these days' = 'одного з цих днів' (у майбутньому, невизначено)."
            },
            {
                "id": "ue_dem7",
                "question": "Is _____ your car over there?",
                "translation": "(Це твоя машина он там?)",
                "options": ["that", "this", "these", "those"],
                "correct": "that",
                "explanation": "THAT + OVER THERE = ТАМ/ОН ТАМ — підсилює дистанцію. 'Over there' чітко вказує на відстань, тому THAT (не THIS). Маркери відстані: THIS + here/right here (тут, прямо тут), THAT + there/over there (там, он там). 'Is that your car over there?' = 'Це твоя машина он там?' В українській 'це' може бути нейтральним (ця/та), але в англійській вибір THIS/THAT залежить від фізичної відстані. Правило: якщо можете показати пальцем і далеко — THAT."
            },
            {
                "id": "ue_dem8",
                "question": "Life was simpler in _____ days.",
                "translation": "(Життя було простішим у ті дні.)",
                "options": ["those", "these", "this", "that"],
                "correct": "those",
                "explanation": "IN THOSE DAYS = У ТІ ДНІ/ЧАСИ — усталений вираз для минулого. THOSE створює емоційну та часову дистанцію. 'Those days' — минулі часи, ностальгія. Порівняйте: 'these days' (нині) vs 'those days' (у ті часи). 'Those were the days!' — 'Ось були часи!' (ностальгійний вигук). THOSE може передавати теплу ностальгію або холодну дистанцію залежно від контексту: 'Those were wonderful times' (ностальгія) vs 'Those were dark times' (негативна дистанція)."
            },
            {
                "id": "ue_dem9",
                "question": "_____ is exactly what I need.",
                "translation": "(Це саме те, що мені потрібно.)",
                "options": ["This", "That", "These", "Those"],
                "correct": "This",
                "explanation": "THIS IS = ЦЕ Є — для ідентифікації або презентації чогось прямо зараз. 'This is exactly what I need' — тримаю або бачу прямо перед собою. THIS для позитивних реакцій на щось поточне: 'This is great!', 'This is perfect!', 'This is it!' (Ось воно!). THAT для ретроспективних: 'That was great!', 'That was perfect!'. Ідіома: 'This is it!' = 'Ось воно! Настав момент!' — важливий, вирішальний момент. Дуже емоційний і поширений вираз."
            },
            {
                "id": "ue_dem10",
                "question": "I prefer _____ ones to the red ones.",
                "translation": "(Я віддаю перевагу цим (синім), а не червоним.)",
                "options": ["these", "those", "this", "that"],
                "correct": "these",
                "explanation": "THESE ONES = ЦІ (ОСЬ ЦІ) — THESE як займенник без іменника, з додаванням ONES. 'These ones' = ось ці (близько до мене). 'Those ones' = ті (далеко). Важливо: в британській англійській 'these ones' — нормально, в американській деякі вважають 'these ones' зайвим (краще просто 'these'). Але 'the red ones' — ONES обов'язково для уникнення повторення іменника. 'I prefer these (ones) to those (ones)' — обидва варіанти правильні."
            },
            {
                "id": "ue_dem11",
                "question": "_____ was a great movie we saw last night.",
                "translation": "(Це був чудовий фільм, який ми дивились вчора ввечері.)",
                "options": ["That", "This", "These", "Those"],
                "correct": "That",
                "explanation": "THAT WAS = ЦЕ БУЛО — для оцінки минулих подій. 'That was a great movie' — фільм закінчився, оцінюємо. Часова логіка: THIS IS (зараз відбувається) vs THAT WAS (вже відбулось). 'That was delicious!' (Було смачно! — після їжі). 'This is delicious!' (Це смачно! — під час їжі). В розмовній англійській THAT часто з'являється для емоційних коментарів: 'That's ridiculous!', 'That's amazing!', 'That's so sweet!'. В усіх цих випадках — реакція на щось, що щойно побачили/почули."
            },
            {
                "id": "ue_dem12",
                "question": "_____ flowers smell wonderful.",
                "translation": "(Ці квіти чудово пахнуть.)",
                "options": ["These", "Those", "This", "That"],
                "correct": "These",
                "explanation": "THESE + іменник множини = ЦІ + іменник. 'These flowers' — квіти прямо тут, я їх нюхаю. Якщо б квіти були далеко (в саду через вулицю): 'Those flowers smell wonderful'. Сенсорний тест: якщо ви ВІДЧУВАЄТЕ щось (нюхаєте, тримаєте, торкаєтесь) — THIS/THESE. Якщо бачите здалеку — THAT/THOSE. Виняток: 'Those flowers you gave me were beautiful' — THOSE тут = ті квіти (з минулого), навіть якщо зараз стоять поруч. Минулість = THAT/THOSE."
            },
            {
                "id": "ue_dem13",
                "question": "Look at _____! It's a rainbow!",
                "translation": "(Подивись на те! Це веселка!)",
                "options": ["that", "this", "these", "those"],
                "correct": "that",
                "explanation": "LOOK AT THAT! = ПОДИВИСЬ НА ТЕ! — емоційний вигук, вказуючи на щось далеке або несподіване. Веселка — далеко в небі, тому THAT. Вигуки з вказівними: 'Look at this!' (подивись на це — тримаю в руках), 'Look at that!' (подивись туди — далеко або несподівано). В розмовній: 'Would you look at that!' — 'Ти тільки подивись!' (здивування). 'Get a load of this!' — 'Послухай/подивись це!' (щось цікаве). THAT для об'єктів, які потребують повороту голови або подорожі поглядом."
            },
            {
                "id": "ue_dem14",
                "question": "I've never heard of _____ before.",
                "translation": "(Я ніколи про це раніше не чув.)",
                "options": ["that", "this", "these", "those"],
                "correct": "that",
                "explanation": "THAT = ТЕ/ЦЕ — як займенник для абстрактних понять, ідей, фактів. 'I've never heard of that' — про цю інформацію/ідею. THAT для посилання на щось, що хтось ЩОЙНО СКАЗАВ: 'A: I'm moving to Japan. B: I've never heard of that!' THAT = те, що ти сказав. THIS теж можливе, але THAT — природніше для реакцій на чужі слова. В діалогах: 'Is that true?' (Це правда?), 'That's interesting' (Це цікаво), 'That makes sense' (Це має сенс) — усі з THAT."
            },
            {
                "id": "ue_dem15",
                "question": "_____ people over there are waiting for the bus.",
                "translation": "(Ті люди он там чекають на автобус.)",
                "options": ["Those", "These", "This", "That"],
                "correct": "Those",
                "explanation": "THOSE PEOPLE = ТІ ЛЮДИ — множина + далеко. 'Over there' підтверджує дистанцію. THOSE часто з'являється з людьми для створення груп: 'those who believe' (ті, хто вірить), 'those in charge' (ті, хто відповідальний). Формальна конструкція: 'Those wishing to attend should register' (Ті, хто бажає відвідати, мають зареєструватися). В повсякденній: 'Those guys are funny' (Ті хлопці кумедні). THOSE PEOPLE може звучати зневажливо залежно від тону — будьте обережні з цією конструкцією!"
            }
        ]
    },
    {
        "key": "phrasal_verbs_advanced",
        "name": "Phrasal Verbs Advanced",
        "description": "Фразові дієслова (просунутий рівень)",
        "iconName": "bolt.fill",
        "color": "#be185d",
        "level": "advanced",
        "items": [
            {
                "id": "ue_pva1",
                "question": "The company decided to _____ the project due to budget cuts.",
                "translation": "(Компанія вирішила скасувати проєкт через скорочення бюджету.)",
                "options": ["call off", "call up", "call out", "call in"],
                "correct": "call off",
                "explanation": "CALL OFF = СКАСУВАТИ/ВІДМІНИТИ — повна відміна запланованої події чи проєкту. 'Call off the meeting' (скасувати зустріч), 'call off the wedding' (скасувати весілля). Порівняйте з іншими CALL фразовими: CALL UP (подзвонити; призвати до армії), CALL OUT (викликати; привернути увагу до проблеми), CALL IN (зателефонувати; запросити спеціаліста). 'The game was called off because of rain' (Гру скасували через дощ). В українській: 'зняти з порядку денного', 'відмовитися від'. Синонім: cancel."
            },
            {
                "id": "ue_pva2",
                "question": "I can't _____ what she's saying; it's too noisy.",
                "translation": "(Я не можу розібрати, що вона каже; занадто шумно.)",
                "options": ["make out", "make up", "make off", "make over"],
                "correct": "make out",
                "explanation": "MAKE OUT = РОЗІБРАТИ/РОЗГЛЕДІТИ — зрозуміти щось з труднощами (текст, звук, образ). 'I can't make out the sign' (не можу розібрати напис). Інші MAKE фразові: MAKE UP (вигадати; примиритися; накраситися), MAKE OFF (втекти), MAKE OVER (переробити; передати). MAKE OUT має ще одне значення в розмовній: 'They were making out' (вони цілувалися) — сленг! Контекст вирішує: 'make out the words' = розібрати слова, 'make out with someone' = цілуватися. Формальний синонім: discern, decipher."
            },
            {
                "id": "ue_pva3",
                "question": "We need to _____ a solution to this problem.",
                "translation": "(Нам потрібно знайти рішення цієї проблеми.)",
                "options": ["come up with", "come down with", "come across", "come around"],
                "correct": "come up with",
                "explanation": "COME UP WITH = ПРИДУМАТИ/ЗНАЙТИ (ідею, рішення, план). Тричастинне фразове дієслово! 'Come up with an idea' (придумати ідею), 'come up with a plan' (розробити план). Порівняйте: COME DOWN WITH (захворіти на: 'I came down with the flu'), COME ACROSS (натрапити випадково: 'I came across an old photo'), COME AROUND (змінити думку: 'She'll come around eventually'). В діловій англійській: 'We need to come up with a strategy' — дуже поширено. Синоніми: devise, think up, figure out."
            },
            {
                "id": "ue_pva4",
                "question": "The plane _____ at 6 AM tomorrow.",
                "translation": "(Літак злітає о 6 ранку завтра.)",
                "options": ["takes off", "takes on", "takes up", "takes over"],
                "correct": "takes off",
                "explanation": "TAKE OFF = ЗЛІТАТИ (літак); ЗНЯТИ (одяг); СТРІМКО ЗРОСТИ (популярність). 'The plane takes off' (літак злітає), 'take off your coat' (зніми пальто), 'The business really took off' (бізнес реально злетів). Інші TAKE фразові: TAKE ON (взяти на себе; найняти), TAKE UP (зайнятися; зайняти місце), TAKE OVER (перейняти контроль; поглинути). Кожне має кілька значень! 'Take off' також = піти/втекти в розмовній: 'I need to take off' (мені треба йти). Контекст визначає значення."
            },
            {
                "id": "ue_pva5",
                "question": "She _____ her father in many ways.",
                "translation": "(Вона багато в чому схожа на свого батька.)",
                "options": ["takes after", "takes on", "takes off", "takes in"],
                "correct": "takes after",
                "explanation": "TAKE AFTER = БУТИ СХОЖИМ НА (родича) — фізично чи характером. 'She takes after her mother' (вона схожа на маму). Не плутайте з LOOK LIKE (виглядати як — тільки зовнішність). TAKE AFTER = глибша схожість (характер, звички, таланти). Інші TAKE: TAKE IN (зрозуміти; прийняти до дому; звузити одяг), TAKE ON (прийняти виклик; найняти), TAKE OFF (злітати). В українській: 'піти в батька/маму' — аналогічне фразове вживання. 'He takes after his grandfather — same temper!' (Він у діда — такий самий вдача!)."
            },
            {
                "id": "ue_pva6",
                "question": "Don't _____ this opportunity; it won't come again.",
                "translation": "(Не упускай цю можливість; вона більше не з'явиться.)",
                "options": ["pass up", "pass on", "pass out", "pass by"],
                "correct": "pass up",
                "explanation": "PASS UP = УПУСТИТИ/ПРОПУСТИТИ (можливість) — свідомо відмовитися. 'I can't pass up this deal' (не можу пропустити цю угоду). Порівняйте: PASS ON (передати далі; відмовитись; померти — евфемізм), PASS OUT (знепритомніти; роздати), PASS BY (проходити повз). 'She passed up a promotion' (вона відмовилася від підвищення) — це був її вибір. 'Pass up' завжди передбачає щось ХОРОШЕ, від чого відмовляються: 'Don't pass up the chance!' В українській: 'проґавити', 'упустити шанс'."
            },
            {
                "id": "ue_pva7",
                "question": "I need to _____ my notes before the exam.",
                "translation": "(Мені потрібно переглянути свої конспекти перед іспитом.)",
                "options": ["go over", "go through", "go on", "go off"],
                "correct": "go over",
                "explanation": "GO OVER = ПЕРЕГЛЯНУТИ/ПОВТОРИТИ — уважно перевірити матеріал. 'Go over your notes' (переглянути конспекти), 'go over the details' (перевірити деталі). Тонка різниця: GO OVER = переглянути поверхнево, повторити. GO THROUGH = пройти через детально, ретельно перевірити кожен пункт. GO ON = продовжувати ('Go on, I'm listening'). GO OFF = вибухнути; зіпсуватися; спрацювати (будильник). 'Let's go over the plan one more time' — давайте ще раз переглянемо план. В академічному контексті: review, revise."
            },
            {
                "id": "ue_pva8",
                "question": "The factory _____ toxic chemicals into the river.",
                "translation": "(Фабрика випускала токсичні хімікати в ріку.)",
                "options": ["gave off", "gave up", "gave in", "gave out"],
                "correct": "gave off",
                "explanation": "GIVE OFF = ВИДІЛЯТИ/ВИПУСКАТИ (запах, тепло, випромінювання, хімікати). 'The flowers give off a lovely scent' (квіти виділяють чудовий аромат). Порівняйте: GIVE UP (здатися; кинути звичку), GIVE IN (поступитися), GIVE OUT (роздати; вийти з ладу). GIVE OFF — завжди про щось, що виходить НАЗОВНІ: гази, світло, тепло, запах. 'The engine was giving off smoke' (двигун випускав дим). 'She gives off a confident vibe' (від неї виходить впевнена енергія) — розмовне, метафоричне. Синонім: emit, release."
            },
            {
                "id": "ue_pva9",
                "question": "He _____ the job offer because the salary was too low.",
                "translation": "(Він відхилив пропозицію роботи, бо зарплата була занадто низькою.)",
                "options": ["turned down", "turned up", "turned off", "turned on"],
                "correct": "turned down",
                "explanation": "TURN DOWN = ВІДХИЛИТИ/ВІДМОВИТИ — відмовити від пропозиції. 'Turn down an offer' (відхилити пропозицію), 'turn down an invitation' (відхилити запрошення). Також TURN DOWN = зменшити гучність/температуру ('Turn down the music!'). TURN UP = з'явитися; збільшити гучність. TURN OFF = вимкнути; відштовхнути. TURN ON = увімкнути; захопити. 'She turned down three job offers' — вона відмовилася від трьох пропозицій. Формальні синоніми: reject, decline, refuse."
            },
            {
                "id": "ue_pva10",
                "question": "Scientists are trying to _____ how the virus spreads.",
                "translation": "(Вчені намагаються з'ясувати, як поширюється вірус.)",
                "options": ["figure out", "find out", "work out", "point out"],
                "correct": "figure out",
                "explanation": "FIGURE OUT = З'ЯСУВАТИ/РОЗІБРАТИСЯ — зрозуміти через аналіз і роздуми. 'Figure out the answer' (знайти відповідь), 'I can't figure out this puzzle' (не можу розібратися з цією головоломкою). Тонкі різниці: FIND OUT = дізнатися (отримати інформацію ззовні), WORK OUT = вирішити (математично/логічно); тренуватися, POINT OUT = вказати на (привернути увагу). 'Figure out' = внутрішній процес мислення. 'Find out' = зовнішнє джерело інформації. 'I figured it out myself!' (Я сам розібрався!)."
            },
            {
                "id": "ue_pva11",
                "question": "The meeting was _____ until next week.",
                "translation": "(Зустріч перенесли на наступний тиждень.)",
                "options": ["put off", "put on", "put up", "put out"],
                "correct": "put off",
                "explanation": "PUT OFF = ВІДКЛАСТИ/ПЕРЕНЕСТИ — postpone на пізніший час. 'Put off the meeting' (перенести зустріч), 'Don't put it off!' (Не відкладай!). Також PUT OFF = відштовхнути ('His rudeness put me off'). PUT ON = одягнути; увімкнути; удавати. PUT UP = розмістити; повісити; терпіти (put up with). PUT OUT = погасити; видати; бути незадоволеним. Прокрастинація по-англійськи: 'I keep putting it off' (я весь час це відкладаю). Синоніми: postpone, delay, defer."
            },
            {
                "id": "ue_pva12",
                "question": "She _____ in tears when she heard the news.",
                "translation": "(Вона розплакалася, коли почула новину.)",
                "options": ["broke down", "broke up", "broke out", "broke in"],
                "correct": "broke down",
                "explanation": "BREAK DOWN = РОЗПЛАКАТИСЯ (емоційно зламатися); ЗЛАМАТИСЯ (техніка); РОЗКЛАСТИ на частини. 'She broke down crying' (вона розплакалася). 'The car broke down' (машина зламалась). 'Break down the problem' (розкласти проблему). BREAK UP = розійтися (пара); розбити; закінчити. BREAK OUT = вибухнути (війна, хвороба); втекти з в'язниці. BREAK IN = вломитися; розносити (взуття). Контекст визначає: 'He broke down' + емоції = розплакався, + техніка = зламався."
            },
            {
                "id": "ue_pva13",
                "question": "Could you _____ the children while I'm out?",
                "translation": "(Чи могли б ви доглянути за дітьми, поки мене не буде?)",
                "options": ["look after", "look into", "look up", "look out"],
                "correct": "look after",
                "explanation": "LOOK AFTER = ДОГЛЯДАТИ/ПІКЛУВАТИСЯ — забезпечувати догляд. 'Look after the children' (доглядати за дітьми), 'look after your health' (піклуватися про здоров'я). Порівняйте: LOOK INTO = розслідувати ('We'll look into the matter'). LOOK UP = шукати інформацію ('Look up the word in a dictionary'). LOOK OUT = бути обережним ('Look out! A car!'). LOOK FORWARD TO = чекати з нетерпінням. В британській: 'look after' = take care of (американське). 'Who's looking after the dog?' (Хто доглядає за собакою?)."
            },
            {
                "id": "ue_pva14",
                "question": "We need to _____ on expenses this month.",
                "translation": "(Нам потрібно скоротити витрати цього місяця.)",
                "options": ["cut back", "cut off", "cut out", "cut in"],
                "correct": "cut back",
                "explanation": "CUT BACK (ON) = СКОРОТИТИ/ЗМЕНШИТИ — зменшити кількість або витрати. 'Cut back on spending' (скоротити витрати), 'cut back on sugar' (зменшити споживання цукру). Порівняйте: CUT OFF = відрізати; перервати; відключити ('They cut off the electricity'). CUT OUT = вирізати; припинити ('Cut it out!' = Припини!). CUT IN = вклинитися (у розмову або чергу). 'The company had to cut back on staff' (компанія мусила скоротити персонал). Синоніми: reduce, decrease, downsize."
            },
            {
                "id": "ue_pva15",
                "question": "I _____ an old friend at the supermarket yesterday.",
                "translation": "(Я випадково зустрів старого друга в супермаркеті вчора.)",
                "options": ["ran into", "ran out of", "ran over", "ran through"],
                "correct": "ran into",
                "explanation": "RAN INTO = ВИПАДКОВО ЗУСТРІТИ — несподівана зустріч. 'I ran into my teacher at the mall' (випадково зустрів вчителя в ТЦ). Також RAN INTO = врізатися ('The car ran into a tree'). RAN OUT OF = закінчитися (запаси: 'We ran out of milk'). RAN OVER = переїхати; перевищити час. RAN THROUGH = пробігти через; швидко переглянути. 'Run into' = bump into = come across (людей). В українській: 'натрапити на', 'наштовхнутися на'. Неформальне і дуже поширене у розповідях: 'Guess who I ran into today!' (Вгадай кого я зустрів!)."
            }
        ]
    },
    {
        "key": "collocations",
        "name": "Collocations",
        "description": "Сталі словосполучення",
        "iconName": "link",
        "color": "#0d9488",
        "level": "intermediate",
        "items": [
            {
                "id": "ue_col1",
                "question": "She _____ a decision to move abroad.",
                "translation": "(Вона прийняла рішення переїхати за кордон.)",
                "options": ["made", "did", "took", "had"],
                "correct": "made",
                "explanation": "MAKE A DECISION = ПРИЙНЯТИ РІШЕННЯ — стале словосполучення (колокація). В українській 'прийняти рішення', в англійській 'MAKE a decision' (не 'do' чи 'take'!). Правило MAKE vs DO: MAKE = створювати щось нове (make a cake, make a plan, make a mistake). DO = виконувати дію (do homework, do the dishes, do exercise). Ключові MAKE колокації: make money, make friends, make an effort, make progress, make sense, make a difference. Запам'ятовуйте пари цілком!"
            },
            {
                "id": "ue_col2",
                "question": "Could you _____ me a favour?",
                "translation": "(Чи не міг би ти зробити мені послугу?)",
                "options": ["do", "make", "give", "take"],
                "correct": "do",
                "explanation": "DO A FAVOUR = ЗРОБИТИ ПОСЛУГУ — стала колокація з DO. 'Do me a favour' — класична ввічлива просьба. Інші DO колокації: do business (вести бізнес), do damage (завдати шкоди), do your best (зробити все можливе), do research (проводити дослідження), do the laundry (прати). В українській 'зробити послугу' — теж стале поєднання з 'зробити'. Різниця: MAKE a favour — НЕПРАВИЛЬНО! Цю помилку роблять, тому що в українській обидва перекладаються як 'зробити'. Просто запам'ятайте: favours are DONE, not MADE."
            },
            {
                "id": "ue_col3",
                "question": "He _____ a deep breath before speaking.",
                "translation": "(Він зробив глибокий вдих перед тим, як заговорити.)",
                "options": ["took", "made", "did", "had"],
                "correct": "took",
                "explanation": "TAKE A BREATH = ЗРОБИТИ ВДИХ — TAKE для фізичних дій та переживань. TAKE колокації: take a shower (прийняти душ), take a break (зробити перерву), take a walk (піти на прогулянку), take a photo (зробити фото), take a risk (ризикнути), take a seat (сісти), take notes (робити нотатки). В українській: 'зробити вдих', 'прийняти душ', 'зробити перерву' — різні дієслова! В англійській TAKE покриває всі ці ситуації. 'Take your time' (не квапся) — ще одна важлива колокація з TAKE."
            },
            {
                "id": "ue_col4",
                "question": "The noise was _____ me crazy.",
                "translation": "(Шум зводив мене з розуму.)",
                "options": ["driving", "making", "getting", "pushing"],
                "correct": "driving",
                "explanation": "DRIVE SOMEONE CRAZY = ЗВОДИТИ З РОЗУМУ — DRIVE для примусових станів. Не 'make crazy' (хоча 'make someone angry/happy' — правильно). DRIVE колокації для емоцій: drive mad (зводити з розуму), drive nuts (зводити з розуму — неформ.), drive insane (доводити до божевілля), drive up the wall (доводити до сказу). Чому DRIVE? Метафора: хтось 'веде' вас (як водій) до стану божевілля — ви не контролюєте! 'This traffic is driving me crazy!' (Цей трафік зводить мене з розуму!) — дуже природний англійський."
            },
            {
                "id": "ue_col5",
                "question": "She _____ a complaint about the noisy neighbours.",
                "translation": "(Вона подала скаргу на шумних сусідів.)",
                "options": ["made", "did", "put", "filed"],
                "correct": "made",
                "explanation": "MAKE A COMPLAINT = ПОДАТИ СКАРГУ — MAKE для формальних дій. Також правильно: FILE a complaint (подати офіційно — більш формальне). MAKE колокації для комунікації: make a phone call (зателефонувати), make a suggestion (зробити пропозицію), make a comment (прокоментувати), make a promise (дати обіцянку), make an announcement (зробити оголошення), make an appointment (записатися на прийом). В діловій англійській: 'I'd like to make a complaint' — стандартна формула. 'Lodge a complaint' — ще більш формальне (юридичне)."
            },
            {
                "id": "ue_col6",
                "question": "We need to _____ attention to this issue.",
                "translation": "(Нам потрібно звернути увагу на це питання.)",
                "options": ["pay", "give", "make", "take"],
                "correct": "pay",
                "explanation": "PAY ATTENTION = ЗВЕРНУТИ УВАГУ — PAY для когнітивних зусиль. Метафора: ви 'платите' увагою, як грошима. PAY колокації: pay a visit (нанести візит), pay a compliment (зробити комплімент), pay respect (виявити повагу), pay tribute (віддати честь). В класі: 'Pay attention!' (Уважно!). 'Pay attention TO' (не 'at' чи 'on'!). В українській: 'звернути увагу НА' — так само з прийменником. Розширено: 'I wasn't paying attention' (я не був уважним) — дуже поширений вираз у повсякденній англійській."
            },
            {
                "id": "ue_pva_col7",
                "question": "Heavy rain _____ havoc on the roads.",
                "translation": "(Сильний дощ завдав хаосу на дорогах.)",
                "options": ["wreaked", "made", "caused", "did"],
                "correct": "wreaked",
                "explanation": "WREAK HAVOC = ЗАВДАТИ ХАОСУ/СПУСТОШЕННЯ — фіксована колокація високого регістру. 'Wreak' майже ніколи не вживається без 'havoc' або 'vengeance'. Інші колокації з HAVOC: play havoc with (зіпсувати), cause havoc (спричинити хаос). 'The storm wreaked havoc on the city' (шторм завдав хаосу місту). В українській: 'наробити лиха', 'завдати шкоди'. CAUSE damage (завдати шкоди) — більш нейтральне. WREAK HAVOC — більш драматичне і літературне. В новинах: 'The virus wreaked havoc on the economy' — стандартний журналістський зворот."
            },
            {
                "id": "ue_col8",
                "question": "She completely _____ my trust.",
                "translation": "(Вона повністю зламала мою довіру.)",
                "options": ["broke", "damaged", "destroyed", "lost"],
                "correct": "broke",
                "explanation": "BREAK TRUST = ЗЛАМАТИ ДОВІРУ — BREAK для порушення нематеріальних речей. BREAK колокації: break a promise (порушити обіцянку), break a rule (порушити правило), break the law (порушити закон), break a record (побити рекорд), break the ice (розбити лід — почати розмову), break the news (повідомити новину). В українській теж: 'зламати довіру', 'порушити обіцянку'. Але 'побити рекорд' = 'break a record' — різна метафора! 'He broke every rule in the book' (він порушив кожне правило) — гіперболічне."
            },
            {
                "id": "ue_col9",
                "question": "The company _____ bankruptcy last year.",
                "translation": "(Компанія оголосила банкрутство минулого року.)",
                "options": ["filed for", "made", "did", "went"],
                "correct": "filed for",
                "explanation": "FILE FOR BANKRUPTCY = ОГОЛОСИТИ БАНКРУТСТВО (подати заяву про банкрутство). Юридична колокація. Порівняйте: GO BANKRUPT = ЗБАНКРУТУВАТИ (стати банкрутом — результат). 'The company filed for bankruptcy' (подала заяву) vs 'The company went bankrupt' (збанкрутувала). FILE колокації: file a lawsuit (подати позов), file a report (подати звіт), file a claim (подати претензію), file for divorce (подати на розлучення). Всі — офіційні юридичні/адміністративні дії. В українській: 'подати заяву', 'подати позов'."
            },
            {
                "id": "ue_col10",
                "question": "He _____ a strong impression on everyone.",
                "translation": "(Він справив сильне враження на всіх.)",
                "options": ["made", "did", "gave", "left"],
                "correct": "made",
                "explanation": "MAKE AN IMPRESSION = СПРАВИТИ ВРАЖЕННЯ — MAKE для створення ефекту. Також: LEAVE an impression (залишити враження — більш тривалий ефект). 'Make a good/bad first impression' (справити хороше/погане перше враження). Колокації з IMPRESSION: lasting impression (тривале враження), strong impression (сильне), false impression (хибне), under the impression (під враженням, вважаючи). 'First impressions matter' (Перше враження має значення) — відомий вислів. В українській: 'справити враження' — стале з 'справити'."
            },
            {
                "id": "ue_col11",
                "question": "I need to _____ an appointment with the dentist.",
                "translation": "(Мені потрібно записатися до стоматолога.)",
                "options": ["make", "do", "take", "have"],
                "correct": "make",
                "explanation": "MAKE AN APPOINTMENT = ЗАПИСАТИСЯ НА ПРИЙОМ — ще одна ключова колокація з MAKE. 'Make an appointment with the doctor' (записатися до лікаря). Порівняйте: HAVE an appointment (мати запис — вже призначений), KEEP an appointment (прийти на запис вчасно), CANCEL an appointment (скасувати запис), MISS an appointment (пропустити запис). Послідовність: make → have → keep/cancel/miss. 'Have you made an appointment yet?' (Ти вже записався?). В українській: 'записатися', 'мати запис', 'скасувати запис'."
            },
            {
                "id": "ue_col12",
                "question": "The news _____ panic among the residents.",
                "translation": "(Новина спричинила паніку серед мешканців.)",
                "options": ["caused", "made", "did", "brought"],
                "correct": "caused",
                "explanation": "CAUSE PANIC = СПРИЧИНИТИ ПАНІКУ — CAUSE для негативних наслідків. CAUSE колокації: cause damage (завдати шкоди), cause problems (спричинити проблеми), cause concern (викликати занепокоєння), cause confusion (спричинити плутанину), cause delay (спричинити затримку), cause harm (завдати шкоди). CAUSE майже завжди з НЕГАТИВНИМИ наслідками! Для позитивних: BRING joy (принести радість), CREATE opportunities (створити можливості). 'Smoking causes cancer' (Куріння спричиняє рак) — медичний факт з CAUSE."
            },
            {
                "id": "ue_col13",
                "question": "She _____ a living as a freelance translator.",
                "translation": "(Вона заробляла на життя як фрілансер-перекладач.)",
                "options": ["earned", "made", "won", "gained"],
                "correct": "earned",
                "explanation": "EARN A LIVING = ЗАРОБЛЯТИ НА ЖИТТЯ — EARN для заслуженого доходу. Також правильно: MAKE a living (заробляти — менш формальне). Різниця: EARN = заслужити працею, MAKE = отримати будь-яким чином, WIN = виграти (лотерея, конкурс), GAIN = набути (досвід, знання). EARN колокації: earn money (заробити гроші), earn respect (заслужити повагу), earn a reputation (здобути репутацію), earn a degree (отримати ступінь). 'She earns a good living' (вона добре заробляє). В українській: 'заробляти на хліб', 'заробляти на прожиття'."
            },
            {
                "id": "ue_col14",
                "question": "The teacher _____ the students' homework.",
                "translation": "(Вчитель перевірив домашнє завдання учнів.)",
                "options": ["checked", "controlled", "revised", "looked"],
                "correct": "checked",
                "explanation": "CHECK HOMEWORK = ПЕРЕВІРИТИ ДОМАШНЄ ЗАВДАННЯ — CHECK для верифікації. Типова помилка українців: 'control homework' (з укр. 'контролювати'). В англійській CONTROL = КЕРУВАТИ (мати владу), не перевіряти! CHECK колокації: check the time (перевірити час), check the weather (перевірити погоду), check facts (перевірити факти), check in (зареєструватися), check out (виписатися). REVISE = переглянути та виправити (свою роботу). MARK homework — оцінити роботу (для вчителя з оцінками). False friend: контролювати ≠ control!"
            },
            {
                "id": "ue_col15",
                "question": "We had to _____ a difficult situation.",
                "translation": "(Нам довелося впоратися зі складною ситуацією.)",
                "options": ["handle", "work", "manage", "deal"],
                "correct": "handle",
                "explanation": "HANDLE A SITUATION = ВПОРАТИСЯ З СИТУАЦІЄЮ — HANDLE для управління складними моментами. Схожі але різні: HANDLE = впоратися (акцент на вмінні), DEAL WITH = мати справу з (процес), MANAGE = управляти (довгострокове), COPE WITH = справлятися (емоційно). 'She handled the crisis well' (вона добре впоралася з кризою). 'I can't deal with this anymore' (я більше не можу з цим мати справу). HANDLE a situation/problem/complaint — розповсюджені колокації. В українській: 'впоратися', 'розібратися', 'вирішити'. 'Handle with care' = 'Обережно!' (на посилках)."
            }
        ]
    },
    {
        "key": "word_order",
        "name": "Word Order",
        "description": "Порядок слів у реченні",
        "iconName": "arrow.left.arrow.right",
        "color": "#7c3aed",
        "level": "intermediate",
        "items": [
            {
                "id": "ue_wo1",
                "question": "Which is correct?",
                "translation": "(У мене є великий червоний м'яч.)",
                "options": [
                    "I have a big red ball.",
                    "I have a red big ball.",
                    "Red big ball I have a.",
                    "A big red ball have I."
                ],
                "correct": "I have a big red ball.",
                "explanation": "ПОРЯДОК ПРИКМЕТНИКІВ: розмір (big) → колір (red). Англійська має СТРОГИЙ порядок прикметників: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose. 'A beautiful big old round red Italian leather racing car'. Ніхто не вчить це правило свідомо — носії мови просто 'відчувають'. Але для учнів це ключ! 'Big red ball' (розмір → колір) ✓. 'Red big ball' ✗ — звучить дивно навіть без знання правила. OSASCOMP — абревіатура для запам'ятовування порядку прикметників."
            },
            {
                "id": "ue_wo2",
                "question": "Which is correct?",
                "translation": "(Вона ніколи не була в Японії.)",
                "options": [
                    "She has never been to Japan.",
                    "She never has been to Japan.",
                    "Never she has been to Japan.",
                    "She has been never to Japan."
                ],
                "correct": "She has never been to Japan.",
                "explanation": "ПРИСЛІВНИКИ ЧАСТОТНОСТІ з PERFECT: NEVER стоїть МІЖ допоміжним дієсловом (has) та основним (been). Правило: S + aux + NEVER/ALWAYS/OFTEN + V. 'She HAS never BEEN', 'I HAVE always WANTED', 'They HAD never SEEN'. В Present Simple: NEVER перед дієсловом ('I never eat fish'), але ПІСЛЯ be ('She is never late'). В українській 'ніколи' може стояти на початку: 'Ніколи вона не була в Японії' — це нормально. В англійській 'Never she has been' — НЕПРАВИЛЬНО (крім літературної інверсії: 'Never have I seen...')."
            },
            {
                "id": "ue_wo3",
                "question": "Which is correct?",
                "translation": "(Що ти робив учора?)",
                "options": [
                    "What did you do yesterday?",
                    "What you did yesterday?",
                    "What did yesterday you do?",
                    "Yesterday what you did?"
                ],
                "correct": "What did you do yesterday?",
                "explanation": "ПОРЯДОК СЛІВ У ПИТАННЯХ: Question word + auxiliary + subject + verb. 'WHAT DID YOU DO?' Українці часто забувають допоміжне дієслово: 'What you did?' — НЕПРАВИЛЬНО в англійській! Формула: WH-word + DO/DID/DOES + S + V(base). 'Where did you go?', 'When does she arrive?', 'Why did they leave?'. Виняток: коли WH-word = підмет: 'WHO called you?' (не 'Who did call you?'). В українській: 'Що ти робив?' — без допоміжного. Це найчастіша помилка українців в англійських питаннях."
            },
            {
                "id": "ue_wo4",
                "question": "Which is correct?",
                "translation": "(Він дав мені гарний подарунок.)",
                "options": [
                    "He gave me a nice present.",
                    "He gave a nice present me.",
                    "He me gave a nice present.",
                    "He a nice present gave me."
                ],
                "correct": "He gave me a nice present.",
                "explanation": "ПОДВІЙНИЙ ДОДАТОК: S + V + indirect object (ME) + direct object (PRESENT). Деякі дієслова мають два додатки: кому? (indirect) і що? (direct). 'Give me the book' = 'Give the book TO me'. Обидва варіанти правильні! Дієслова з подвійним додатком: give, send, show, tell, offer, teach, buy, make, bring. 'She sent him a letter' = 'She sent a letter to him'. В українській: 'Він дав МЕНІ подарунок' — давальний відмінок. В англійській: порядок слів, не відмінок, показує хто отримує."
            },
            {
                "id": "ue_wo5",
                "question": "Which is correct?",
                "translation": "(Мені дуже подобається ця пісня.)",
                "options": [
                    "I really like this song.",
                    "I like really this song.",
                    "Really I like this song.",
                    "I this song really like."
                ],
                "correct": "I really like this song.",
                "explanation": "ПРИСЛІВНИК СТУПЕНЯ перед дієсловом: S + REALLY + V. 'I REALLY like', 'She REALLY wants', 'They REALLY need'. REALLY стоїть перед звичайним дієсловом, але ПІСЛЯ be: 'She IS really nice'. Інші прислівники ступеня: absolutely, completely, totally, quite, rather. Всі — перед основним дієсловом. В українській 'дуже' = 'really/very'. 'Мені ДУЖЕ подобається' — 'дуже' теж перед дієсловом. Типова помилка: 'I like really this song' — НЕПРАВИЛЬНО! REALLY модифікує дієслово, тому стоїть перед ним, не після."
            },
            {
                "id": "ue_wo6",
                "question": "Which is correct?",
                "translation": "(Вона щодня їздить на роботу на автобусі.)",
                "options": [
                    "She goes to work by bus every day.",
                    "Every day she goes by bus to work.",
                    "She every day goes to work by bus.",
                    "By bus she goes to work every day."
                ],
                "correct": "She goes to work by bus every day.",
                "explanation": "ПОРЯДОК ОБСТАВИН: місце → спосіб → час. 'Goes TO WORK (місце) BY BUS (спосіб) EVERY DAY (час)'. Формула: S + V + Place + Manner + Time. Також час може бути на початку для наголосу: 'Every day, she goes to work by bus' — теж правильно! Але НЕ в середині: 'She every day goes' — НЕПРАВИЛЬНО! В українській порядок вільніший: 'Вона щодня їздить на автобусі на роботу' — допустимо. В англійській ця жорсткість компенсує відсутність відмінків. MPT = Manner, Place, Time — мнемонічне правило."
            },
            {
                "id": "ue_wo7",
                "question": "Which is correct?",
                "translation": "(Тут є достатньо їжі для всіх.)",
                "options": [
                    "There is enough food for everyone.",
                    "Enough food there is for everyone.",
                    "There is food enough for everyone.",
                    "For everyone there is enough food."
                ],
                "correct": "There is enough food for everyone.",
                "explanation": "ENOUGH перед іменником: ENOUGH + NOUN. 'Enough food', 'enough time', 'enough money'. АЛЕ: після прикметника! 'Good ENOUGH', 'big ENOUGH', 'old ENOUGH'. Це часта помилка: 'enough good' ✗ vs 'good enough' ✓, але 'enough money' ✓ vs 'money enough' ✗. Правило: ENOUGH + noun (достатньо чогось), adjective + ENOUGH (достатньо який). 'There is enough food' (достатньо їжі). 'The food is good enough' (їжа достатньо хороша). В українській 'достатньо' завжди перед: 'достатньо їжі', 'достатньо хороший'."
            },
            {
                "id": "ue_wo8",
                "question": "Which is correct?",
                "translation": "(Мені також подобається шоколад.)",
                "options": [
                    "I like chocolate too.",
                    "I too like chocolate.",
                    "Too I like chocolate.",
                    "I like too chocolate."
                ],
                "correct": "I like chocolate too.",
                "explanation": "TOO/ALSO/AS WELL — позиція в реченні. TOO = в кінці: 'I like it TOO'. ALSO = перед дієсловом: 'I ALSO like it'. AS WELL = в кінці (британське): 'I like it AS WELL'. Всі три означають ТАКОЖ, але різна позиція! 'TOO' в середині ('I too like') — можливо, але формальне і рідкісне. Негативна форма: EITHER (не TOO!): 'I don't like it EITHER' (мені теж не подобається). 'Me too!' (Мені теж!) — розмовне. 'Me neither!' (Мені теж ні!) — негативне. В українській: 'теж', 'також', 'і я' — більш гнучка позиція."
            },
            {
                "id": "ue_wo9",
                "question": "Which is correct?",
                "translation": "(Він не тільки розумний, але й працьовитий.)",
                "options": [
                    "He is not only smart but also hardworking.",
                    "He is not only smart also but hardworking.",
                    "Not only he is smart but also hardworking.",
                    "He not only is smart but also hardworking."
                ],
                "correct": "He is not only smart but also hardworking.",
                "explanation": "NOT ONLY... BUT ALSO — парна конструкція. 'Not only A but also B'. Після BE: 'He IS not only smart BUT ALSO hardworking'. З дієсловами: 'She not only sings but also dances'. На початку речення — ІНВЕРСІЯ: 'Not only IS he smart, but he is also hardworking' (дуже формально). Інші парні конструкції: BOTH...AND (і...і), EITHER...OR (або...або), NEITHER...NOR (ні...ні). В українській: 'не тільки...але й' — пряме відповідництво. 'Neither...nor' = 'ні...ні'. Ці конструкції однакові в обох мовах!"
            },
            {
                "id": "ue_wo10",
                "question": "Which is correct?",
                "translation": "(Я не знаю, де він живе.)",
                "options": [
                    "I don't know where he lives.",
                    "I don't know where does he live.",
                    "I don't know where he does live.",
                    "I don't know where lives he."
                ],
                "correct": "I don't know where he lives.",
                "explanation": "НЕПРЯМІ ПИТАННЯ: прямий порядок слів (НЕ питальний!). 'Where does he live?' (пряме питання) → 'I don't know where he LIVES' (непряме — S+V, не 'does he live'!). Це КЛЮЧОВА різниця! Пряме: 'What time IS IT?' → Непряме: 'Do you know what time IT IS?' (не 'what time is it'). Маркери непрямих питань: I don't know, I wonder, Could you tell me, Do you know. В українській: 'Де він живе?' → 'Я не знаю, де він живе' — порядок не змінюється! Тому українці часто НЕ помиляються тут."
            },
            {
                "id": "ue_wo11",
                "question": "Which is correct?",
                "translation": "(У мене є маленький чорний кіт.)",
                "options": [
                    "I have a small black cat.",
                    "I have a black small cat.",
                    "I small black have a cat.",
                    "I have small a black cat."
                ],
                "correct": "I have a small black cat.",
                "explanation": "ПОРЯДОК ПРИКМЕТНИКІВ (продовження): Size → Colour. 'Small black cat' (маленький чорний кіт). НЕ 'black small cat'. Повний порядок OSASCOMP: Opinion (nice) → Size (small) → Age (old) → Shape (round) → Colour (black) → Origin (Italian) → Material (leather) → Purpose (running). 'A lovely small old round black Italian leather running shoe' — екстремальний приклад. У реальності рідко більше 2-3 прикметників. Цікаво: носії мови ІНТУЇТИВНО знають цей порядок, але не можуть пояснити чому!"
            },
            {
                "id": "ue_wo12",
                "question": "Which is correct?",
                "translation": "(Він рідко запізнюється на роботу.)",
                "options": [
                    "He is rarely late for work.",
                    "He rarely is late for work.",
                    "Rarely he is late for work.",
                    "He is late rarely for work."
                ],
                "correct": "He is rarely late for work.",
                "explanation": "ПРИСЛІВНИКИ ЧАСТОТНОСТІ з BE: ПІСЛЯ дієслова BE. 'He IS rarely late', 'She IS always happy', 'They ARE never home'. АЛЕ перед звичайними дієсловами: 'He RARELY comes late', 'She ALWAYS arrives on time'. Список частотності: always (100%) → usually (80%) → often (70%) → sometimes (50%) → rarely/seldom (10%) → never (0%). В українській: 'Він рідко запізнюється' — прислівник перед дієсловом (як в англійській зі звичайними дієсловами). Але з BE — після! 'He is RARELY' ≠ 'He RARELY is'."
            },
            {
                "id": "ue_wo13",
                "question": "Which is correct?",
                "translation": "(Вчора я бачив твою сестру в парку.)",
                "options": [
                    "I saw your sister in the park yesterday.",
                    "Yesterday I saw in the park your sister.",
                    "I your sister saw in the park yesterday.",
                    "I saw in the park yesterday your sister."
                ],
                "correct": "I saw your sister in the park yesterday.",
                "explanation": "S + V + OBJECT + PLACE + TIME — стандартний порядок. 'I SAW your sister (O) IN THE PARK (Place) YESTERDAY (Time)'. Прямий додаток ЗАВЖДИ одразу після дієслова! 'I saw HER' (не 'I her saw'). В українській: 'Я бачив сестру в парку вчора' — аналогічний порядок. Але 'Вчора в парку я бачив сестру' — теж нормально! В англійській переміщення елементів обмежене: 'Yesterday, I saw your sister in the park' — ОК (час на початку для наголосу). Але 'In the park I your sister saw' — НЕПРАВИЛЬНО."
            },
            {
                "id": "ue_wo14",
                "question": "Which is correct?",
                "translation": "(Вона дала йому хороший подарунок.)",
                "options": [
                    "She gave him a nice present.",
                    "She gave a nice present him.",
                    "She him gave a nice present.",
                    "A nice present she gave him."
                ],
                "correct": "She gave him a nice present.",
                "explanation": "S + V + IO + DO: непрямий додаток (him) ПЕРЕД прямим (present). 'She gave HIM (кому) a PRESENT (що)'. Альтернатива: 'She gave a present TO him' — з прийменником TO, прямий додаток першим. Дієслова з подвійним додатком: give, send, tell, show, teach, buy, make, write, offer. 'Tell me a story' = 'Tell a story to me'. 'Buy her a ring' = 'Buy a ring for her'. Зверніть увагу: з TO (give to, send to, tell to) vs з FOR (buy for, make for, cook for). 'She cooked him dinner' = 'She cooked dinner FOR him'."
            },
            {
                "id": "ue_wo15",
                "question": "Which is correct?",
                "translation": "(Ніколи раніше я не бачив такого красивого заходу сонця.)",
                "options": [
                    "Never before have I seen such a beautiful sunset.",
                    "Never before I have seen such a beautiful sunset.",
                    "I never before have seen such a beautiful sunset.",
                    "Never before I seen have such a beautiful sunset."
                ],
                "correct": "Never before have I seen such a beautiful sunset.",
                "explanation": "ІНВЕРСІЯ з негативними прислівниками на початку: NEVER + aux + S + V. 'Never before HAVE I SEEN' (не 'Never before I have seen'!). Це формальна, літературна конструкція. Інші тригери інверсії: Rarely (Rarely does she complain), Seldom (Seldom have I felt...), Not only (Not only did he...), Hardly (Hardly had I arrived...), No sooner (No sooner had he left...). В повсякденній: 'I have never seen...' — нормальний порядок. Інверсія = драматичний ефект, наголос. В українській: 'Ніколи раніше я не бачив' — без інверсії."
            }
        ]
    },
    {
        "key": "cleft_sentences",
        "name": "Cleft Sentences",
        "description": "Розщеплені речення (наголос)",
        "iconName": "sparkles",
        "color": "#ca8a04",
        "level": "advanced",
        "items": [
            {
                "id": "ue_cle1",
                "question": "_____ John who broke the window.",
                "translation": "(Це Джон розбив вікно.)",
                "options": ["It was", "It is", "There was", "He was"],
                "correct": "It was",
                "explanation": "IT-CLEFT: IT WAS + наголошений елемент + WHO/THAT. 'IT WAS JOHN who broke the window' — наголос на ДЖОНІ (хто саме). Нейтральне: 'John broke the window'. IT-cleft виділяє один елемент. Можна наголосити різне: 'It was JOHN who broke it' (хто?), 'It was THE WINDOW that John broke' (що?), 'It was YESTERDAY that he broke it' (коли?). В українській: 'Це ДЖОН розбив вікно' — теж з 'це' для наголосу. IT-cleft = найпоширеніший тип розщеплених речень. Завжди: IT + BE + focus + who/that + rest."
            },
            {
                "id": "ue_cle2",
                "question": "_____ I need is a good night's sleep.",
                "translation": "(Все, що мені потрібно — це хороший нічний сон.)",
                "options": ["What", "That", "Which", "It"],
                "correct": "What",
                "explanation": "WH-CLEFT (pseudo-cleft): WHAT + S + V + IS + наголошений елемент. 'WHAT I need IS a good night's sleep' — наголос на результаті. WH-cleft починається з WHAT/WHO/WHERE і створює напругу перед головною інформацією. Як 'барабанний дріб': 'What I really want is...' (те, що я справді хочу — це...). Інші WH-cleft: 'Where she went was Paris' (куди вона поїхала — це Париж). 'Who helped me was my brother' (хто мені допоміг — це мій брат). В українській: 'Те, що мені потрібно — це...' — майже ідентична структура!"
            },
            {
                "id": "ue_cle3",
                "question": "It _____ in Paris that they first met.",
                "translation": "(Саме в Парижі вони вперше зустрілися.)",
                "options": ["was", "is", "has been", "had been"],
                "correct": "was",
                "explanation": "IT-CLEFT для МІСЦЯ: IT WAS + місце + THAT. 'It was IN PARIS that they met' — наголос на місці. Час BE відповідає часу події: минуле → IT WAS, теперішнє → IT IS. 'It is IN THIS ROOM that we study' (теперішнє). 'It was IN 1969 that man landed on the moon' (минуле). Порівняйте нейтральне: 'They first met in Paris' vs 'It was in Paris that they first met' — друге набагато драматичніше і наголошує місце. Журналісти та письменники люблять IT-cleft для створення ефекту: 'It was here that the tragedy occurred'."
            },
            {
                "id": "ue_cle4",
                "question": "What surprised me _____ her reaction.",
                "translation": "(Те, що мене здивувало — це її реакція.)",
                "options": ["was", "is", "were", "being"],
                "correct": "was",
                "explanation": "WH-CLEFT з WAS: WHAT + V(past) + WAS + focus. 'What surprised me WAS her reaction'. WHAT-clause = підмет (однина), тому WAS (не WERE). Навіть якщо focus = множина: 'What I bought was books' — дискусійно, деякі кажуть 'were books'. Безпечніше: 'What I bought was a collection of books'. WH-cleft створює ефект 'розкриття': 'What happened was...' (те, що сталося, — це...) — ніби розгортаєте історію. В розмовній англійській дуже природно: 'What I don't understand is why she left'. В українській: 'Те, що мене здивувало — це...'."
            },
            {
                "id": "ue_cle5",
                "question": "It _____ the noise that kept me awake.",
                "translation": "(Саме шум не давав мені спати.)",
                "options": ["was", "is", "has been", "were"],
                "correct": "was",
                "explanation": "IT-CLEFT для ПРИЧИНИ: IT WAS + причина + THAT. 'It was THE NOISE that kept me awake' — наголос на причині. Без cleft: 'The noise kept me awake' — нейтрально. З cleft: 'It was THE NOISE (саме шум!) that kept me awake' — акцентує причину. IT-cleft часто у відповідях: 'What kept you awake?' — 'It was the noise'. Ця конструкція = природний спосіб відповідати на питання з наголосом. В діалозі: 'It wasn't the light, it was the NOISE that kept me awake' — контрастний IT-cleft. В українській: 'Саме шум...' — слово 'саме' виконує функцію наголосу."
            },
            {
                "id": "ue_cle6",
                "question": "_____ she said really hurt me.",
                "translation": "(Те, що вона сказала, справді мене зранило.)",
                "options": ["What", "That", "Which", "It"],
                "correct": "What",
                "explanation": "WHAT-CLAUSE як підмет: WHAT + S + V = підмет речення. 'WHAT she said' = те, що вона сказала (ціла фраза стає підметом). 'What she said hurt me' — не обов'язково cleft, але використовує WHAT-clause. Повний WH-cleft: 'What she said was hurtful' (те, що вона сказала, було образливим). WHAT тут = THE THING THAT (та річ, яку). Не плутайте з питальним WHAT: 'What did she say?' (питання) vs 'What she said' (відносне — не питання). В українській: 'Те, ЩО вона сказала' — 'що' = 'what' у відносному значенні."
            },
            {
                "id": "ue_cle7",
                "question": "It was my mother _____ taught me to cook.",
                "translation": "(Саме моя мама навчила мене куховарити.)",
                "options": ["who", "which", "what", "whom"],
                "correct": "who",
                "explanation": "IT-CLEFT + WHO для людей: IT WAS + person + WHO. 'It was my MOTHER WHO taught me'. WHO для людей, THAT для речей (хоча THAT теж можливе для людей). 'It was my mother THAT taught me' — граматично правильно, але WHO — природніше для людей. Порівняйте: 'It was the BOOK THAT changed my life' (річ → THAT). 'It was my TEACHER WHO inspired me' (людина → WHO). Формальна різниця: WHO = суб'єкт (хто), WHOM = об'єкт (кого). 'It was my mother WHOM I called' (кого). Але в розмовній WHO замінює WHOM."
            },
            {
                "id": "ue_cle8",
                "question": "What I like about this city _____ the architecture.",
                "translation": "(Те, що мені подобається в цьому місті — це архітектура.)",
                "options": ["is", "are", "was", "were"],
                "correct": "is",
                "explanation": "WH-CLEFT в теперішньому: WHAT + S + V(present) + IS. 'What I like IS the architecture' — я зараз кажу про свої вподобання. IS, бо WHAT-clause = один підмет (однина). Порівняйте: 'What I like ARE the buildings' — деякі носії мови погоджують з множиною focus, але IS безпечніше. Ця конструкція дуже зручна для вираження думок: 'What I love about Ukraine is the food' (те, що я люблю в Україні — це їжа). 'What bothers me is the traffic' (те, що мене турбує — це трафік). В есе та презентаціях: елегантний спосіб виразити думку."
            },
            {
                "id": "ue_cle9",
                "question": "It is honesty _____ I value most.",
                "translation": "(Саме чесність я ціную найбільше.)",
                "options": ["that", "who", "what", "which"],
                "correct": "that",
                "explanation": "IT-CLEFT + THAT для абстрактних понять: IT IS + abstract noun + THAT. 'It is HONESTY that I value' — наголос на чесності як цінності. THAT — універсальне сполучне слово в IT-cleft: для людей (хоча WHO краще), для речей, для абстрактних понять. 'It is FREEDOM that matters most' (саме свобода найважливіша). 'It is EDUCATION that changes lives' (саме освіта змінює життя). Ці конструкції потужні в промовах: 'It is not wealth that brings happiness, it is love' — контрастний IT-cleft для риторичного ефекту."
            },
            {
                "id": "ue_cle10",
                "question": "What happened _____ that the car broke down.",
                "translation": "(Те, що сталося — це те, що машина зламалась.)",
                "options": ["was", "is", "were", "being"],
                "correct": "was",
                "explanation": "WH-CLEFT для ПОДІЙ: WHAT HAPPENED + WAS + THAT-clause. 'What happened was THAT the car broke down'. THAT тут вводить пояснення. Ця конструкція = розповідь: 'What happened was (that) I missed the bus, and then...' — природний спосіб почати пояснення. WAS бо подія в минулому. 'What's happening is (that) people are leaving' — теперішнє. В розмові: 'So what happened was...' — дуже типовий початок пояснення. В українській: 'Те, що сталося — це...' або 'А сталося ось що:...' — аналогічна конструкція для драматичної розповіді."
            },
            {
                "id": "ue_cle11",
                "question": "It was not until midnight _____ they finally arrived.",
                "translation": "(Лише опівночі вони нарешті прибули.)",
                "options": ["that", "when", "which", "who"],
                "correct": "that",
                "explanation": "IT WAS NOT UNTIL... THAT — спеціальний IT-cleft для часу: 'лише коли/тільки після'. 'It was not until midnight THAT they arrived' — наголос на пізньому часі. Варіанти: 'Not until midnight DID they arrive' (інверсія — дуже формально). Ця конструкція підкреслює довге очікування: 'It was not until I was 30 that I learned to drive' (лише в 30 я навчився водити). В українській: 'Лише опівночі вони нарешті прибули', 'Тільки в 30 років я...' — 'лише/тільки' виконує ту саму функцію наголосу. THAT — обов'язкове в цій конструкції."
            },
            {
                "id": "ue_cle12",
                "question": "_____ really annoys me is people talking on the phone in the cinema.",
                "translation": "(Те, що справді дратує мене — це люди, які розмовляють по телефону в кінотеатрі.)",
                "options": ["What", "That", "It", "Which"],
                "correct": "What",
                "explanation": "WH-CLEFT для СКАРГ: WHAT + annoys/bothers/upsets + me + IS. Ідеальна конструкція для вираження невдоволення! 'What annoys me is...' (те, що дратує...), 'What bothers me is...' (те, що турбує...), 'What I can't stand is...' (те, що я не переношу...). В розмовній англійській WH-cleft для скарг — ДУЖЕ природне. 'What drives me crazy is when people...' 'What I hate is having to...' В українській: 'Що мене дратує — це...' — пряме відповідництво. WH-cleft додає вагомості вашій скарзі, робить її більш обґрунтованою."
            },
            {
                "id": "ue_cle13",
                "question": "It was because of the rain _____ the match was cancelled.",
                "translation": "(Саме через дощ матч скасували.)",
                "options": ["that", "which", "what", "why"],
                "correct": "that",
                "explanation": "IT-CLEFT для ПРИЧИНИ з BECAUSE OF: IT WAS + because of X + THAT. 'It was BECAUSE OF THE RAIN that the match was cancelled'. Наголос на причині. Без cleft: 'The match was cancelled because of the rain' — нейтрально. З cleft — драматично підкреслює причину. Інші причинні cleft: 'It was DUE TO the fog that flights were delayed'. 'It was THANKS TO her that we won' (позитивна причина). WHY — НЕ використовується в IT-cleft! 'The reason why...' — інша конструкція. THAT — обов'язкове після причинної фрази в IT-cleft."
            },
            {
                "id": "ue_cle14",
                "question": "All _____ want is peace and quiet.",
                "translation": "(Все, що я хочу — це спокій і тиша.)",
                "options": ["I", "what I", "that I", "which I"],
                "correct": "I",
                "explanation": "ALL + S + V = ще один тип cleft: ALL I WANT IS... 'All I want is peace' = 'The only thing I want is peace'. ALL тут = EVERYTHING/THE ONLY THING. Популярні фрази: 'All I need is love' (Beatles!), 'All you have to do is ask' (все, що тобі потрібно — попросити), 'All I'm saying is...' (все, що я кажу...). Це ДУЖЕ природна англійська для спрощення — зведення до головного. В українській: 'Все, що мені потрібно — це...'. Зверніть увагу: 'All I want' (без WHAT чи THAT після ALL). ALL + S + V — окрема структура."
            },
            {
                "id": "ue_cle15",
                "question": "The thing _____ worries me most is his health.",
                "translation": "(Те, що мене найбільше турбує — це його здоров'я.)",
                "options": ["that", "what", "which", "who"],
                "correct": "that",
                "explanation": "THE THING THAT = ще один спосіб створити cleft-подібну конструкцію. 'THE THING THAT worries me IS his health'. Варіанти: 'The thing that...', 'The person who...', 'The place where...', 'The reason why...'. Всі працюють як pseudo-cleft. 'The person who helped me was a stranger'. 'The reason why I left was the noise'. В розмовній часто: 'The thing is...' (справа в тому, що...) — скорочений варіант без THAT. 'The thing is, I don't have enough money' — дуже поширений вступ до пояснення. В українській: 'справа в тому, що...', 'річ у тім, що...'."
            }
        ]
    }
]

with open(FILE, 'r') as f:
    data = json.load(f)

# Check for ID conflicts
existing_ids = {item['id'] for c in data for item in c['items']}
new_ids = {item['id'] for cat in new_categories for item in cat['items']}
conflicts = existing_ids & new_ids
if conflicts:
    print(f"ERROR: ID conflicts: {conflicts}", file=sys.stderr)
    sys.exit(1)

existing_keys = {c['key'] for c in data}
new_keys = {c['key'] for c in new_categories}
key_conflicts = existing_keys & new_keys
if key_conflicts:
    print(f"ERROR: Key conflicts: {key_conflicts}", file=sys.stderr)
    sys.exit(1)

data.extend(new_categories)
with open(FILE, 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

items = sum(len(c.get('items', [])) for c in data)
print(f"SUCCESS: {len(data)} categories, {items} items")
for c in new_categories:
    print(f"  + {c['key']} ({len(c['items'])} items)")

#!/usr/bin/env python3
"""Batch 7: Add categories 64-68 to polish_chinese grammar."""
import json

FILE = '../LumenLingo/LumenLingo/Resources/Content/polish_chinese/grammar_polish_chinese.json'

new_categories = [
    {
        "key": "chengyu_idioms",
        "name": "Chengyu – idiomy czteroznakowe",
        "description": "成语",
        "iconName": "book.closed.fill",
        "color": "#c084fc",
        "level": "advanced",
        "items": [
            {
                "id": "pc_chengyu1",
                "question": "他学习非常努力，真是 _____ 。",
                "translation": "(On uczy się bardzo pilnie, naprawdę jest [idiom: wytrwały w wysiłkach])",
                "options": ["刻苦耐劳", "马马虎虎", "乱七八糟", "一塌糊涂"],
                "correct": "刻苦耐劳",
                "explanation": "'刻苦耐劳' (kèkǔ nàiláo) = ciężko pracujący i wytrwały. Chengyu (成语) to czteroznakowe idiomy — SERCE chińskiej kultury językowej. Każde chengyu niesie historię lub mądrość. '刻苦' = pilny/sumienny, '耐劳' = znoszący trud. Polak powie 'pracowity jak mrówka', Chińczyk powie '刻苦耐劳'. Chengyu używa się w mowie formalnej, esejach i codziennie, by brzmieć elokwentnie."
            },
            {
                "id": "pc_chengyu2",
                "question": "这个房间 _____ ，需要打扫一下。",
                "translation": "(Ten pokój jest [w kompletnym bałaganie], trzeba go posprzątać)",
                "options": ["乱七八糟", "井井有条", "干干净净", "整整齐齐"],
                "correct": "乱七八糟",
                "explanation": "'乱七八糟' (luàn qī bā zāo) = kompletny bałagan/chaos. Dosłownie: 'bałagan siedem osiem breja'. To jedno z najpopularniejszych chengyu w codziennym życiu! '乱' = bałagan, '七八' = siedem-osiem (= dużo), '糟' = kiepsko. Przeciwieństwo: '井井有条' (jǐngjǐng yǒutiáo) = wszystko w porządku. '他的桌子乱七八糟' (jego biurko w totalnym bałaganie)."
            },
            {
                "id": "pc_chengyu3",
                "question": "别 _____ 了，认真一点！",
                "translation": "(Przestań [robić byle jak], bądź poważniejszy!)",
                "options": ["马马虎虎", "认认真真", "高高兴兴", "清清楚楚"],
                "correct": "马马虎虎",
                "explanation": "'马马虎虎' (mǎmǎhūhū) = byle jak / tak sobie / niedbale. Dosłownie: 'koń koń tygrys tygrys' — legenda mówi o malarzu, który narysował głowę konia i ciało tygrysa. Stało się symbolem niedbałości! Najczęstsze użycia: '你好吗？' — '马马虎虎' (Jak się masz? — Tak sobie). '别马马虎虎的' (nie rób byle jak). To chengyu KAŻDY obcokrajowiec zna — i Chińczycy uwielbiają, gdy go użyjesz!"
            },
            {
                "id": "pc_chengyu4",
                "question": "她做事 _____ ，从不犯错。",
                "translation": "(Ona robi wszystko [starannie i dokładnie], nigdy się nie myli)",
                "options": ["一丝不苟", "粗心大意", "马马虎虎", "得过且过"],
                "correct": "一丝不苟",
                "explanation": "'一丝不苟' (yī sī bù gǒu) = ani trochę niedbałości / skrupulatny do ostatniego szczegółu. '丝' = nitka (najmniejsza jednostka), '不苟' = bez lekceważenia. Obraz: nawet jedna niteczka nie jest potraktowana niedbale. Używa się go jako KOMPLEMENTU: '她工作一丝不苟' (pracuje z absolutną precyzją). Przeciwieństwo '马马虎虎'. W CV i rozmowach o pracy — bardzo pożądane chengyu!"
            },
            {
                "id": "pc_chengyu5",
                "question": "学中文要 _____ ，不能半途而废。",
                "translation": "(Ucząc się chińskiego trzeba [wytrwale dążyć], nie można rzucać w połowie)",
                "options": ["持之以恒", "三心二意", "半途而废", "朝三暮四"],
                "correct": "持之以恒",
                "explanation": "'持之以恒' (chí zhī yǐ héng) = wytrwale kontynuować / być konsekwentnym. '持' = utrzymywać, '恒' = stałość. To chengyu o WYTRWAŁOŚCI — idealne dla ucznia języków! '半途而废' (bàntú ér fèi) = porzucić w połowie drogi — dokładne przeciwieństwo. '三心二意' = niezdecydowany (trzy serca, dwa umysły). Chińczycy cenią wytrwałość — '持之以恒' to ich mantra edukacyjna."
            },
            {
                "id": "pc_chengyu6",
                "question": "考试结果出来了，他 _____ 。",
                "translation": "(Wyniki egzaminu wyszły, on [skakał z radości])",
                "options": ["欢天喜地", "愁眉苦脸", "垂头丧气", "怒气冲冲"],
                "correct": "欢天喜地",
                "explanation": "'欢天喜地' (huān tiān xǐ dì) = radosny jak niebo i ziemia / pełen radości. '欢' = radość, '天' = niebo, '喜' = szczęście, '地' = ziemia. Obraz: radość wypełnia niebo i ziemię! Przeciwne chengyu: '愁眉苦脸' (zmartwiona twarz), '垂头丧气' (ze zwieszoną głową). Chengyu o emocjach to świetny sposób na ekspresyjny chiński!"
            },
            {
                "id": "pc_chengyu7",
                "question": "这件事已经 _____ ，大家都知道了。",
                "translation": "(Ta sprawa już [jest znana wszystkim], wszyscy wiedzą)",
                "options": ["众所周知", "鲜为人知", "一无所知", "不知不觉"],
                "correct": "众所周知",
                "explanation": "'众所周知' (zhòng suǒ zhōu zhī) = powszechnie wiadomo / jak wszyscy wiedzą. '众' = tłum, '所' = to co, '周' = wszędzie, '知' = wiedzieć. To chengyu-konektora — rozpoczyna się nim zdania jak polskim 'jak wiadomo'. '众所周知，中国是世界上人口最多的国家' (jak wiadomo, Chiny mają największą populację). W esejach i prezentacjach — NIEZBĘDNE!"
            },
            {
                "id": "pc_chengyu8",
                "question": "他说话 _____ ，让人摸不着头脑。",
                "translation": "(On mówi [niejasno/zagadkowo], aż ludzie nie mogą się połapać)",
                "options": ["含糊其辞", "直截了当", "一针见血", "开门见山"],
                "correct": "含糊其辞",
                "explanation": "'含糊其辞' (hánhú qí cí) = mówić niejasno/wymijająco. '含糊' = niejasny, '其辞' = swoje słowa. Przeciwieństwa: '直截了当' (wprost/bez ogródek), '开门见山' (od razu do rzeczy — dosł. 'otworzyć drzwi, zobaczyć górę'), '一针见血' (trafić w sedno — dosł. 'jedna igła, widać krew'). Polak powie 'owijać w bawełnę', Chińczyk — '含糊其辞'!"
            },
            {
                "id": "pc_chengyu9",
                "question": "他们俩 _____ ，感情非常好。",
                "translation": "(Oni dwoje [są nierozłączni], mają bardzo dobre relacje)",
                "options": ["形影不离", "水火不容", "势不两立", "各奔东西"],
                "correct": "形影不离",
                "explanation": "'形影不离' (xíng yǐng bù lí) = nierozłączni jak ciało i cień. '形' = kształt/ciało, '影' = cień, '不离' = nie rozdzielać się. Piękny obraz! Używa się o bliskich przyjaciołach, parach, rodzeństwie. '他们从小形影不离' (od dziecka są nierozłączni). Przeciwieństwo: '各奔东西' (każdy poszedł w swoją stronę). '水火不容' = jak woda i ogień (nie znoszą się)."
            },
            {
                "id": "pc_chengyu10",
                "question": "时间过得真快，_____ 就毕业了。",
                "translation": "(Czas płynie tak szybko, [w mgnieniu oka] już ukończyliśmy szkołę)",
                "options": ["转眼之间", "千秋万代", "遥遥无期", "度日如年"],
                "correct": "转眼之间",
                "explanation": "'转眼之间' (zhuǎnyǎn zhī jiān) = w mgnieniu oka / w jednej chwili. '转眼' = obrót oka. To jak polskie 'nie obejrzysz się, a...' Przeciwieństwo: '度日如年' (każdy dzień jak rok — czas się wlecze). '千秋万代' = tysiąc jesieni, dziesięć tysięcy pokoleń (wieczność). Chengyu o czasie pojawiają się WSZĘDZIE — na zakończeniach roku, mowach, wspomnieniach."
            },
            {
                "id": "pc_chengyu11",
                "question": "遇到困难不要 _____ ，要勇敢面对。",
                "translation": "(Napotykając trudności, nie [wycofuj się], bądź odważny i staw im czoła)",
                "options": ["畏缩不前", "勇往直前", "迎难而上", "知难而退"],
                "correct": "畏缩不前",
                "explanation": "'畏缩不前' (wèi suō bù qián) = cofać się ze strachu / nie iść naprzód. '畏' = bać się, '缩' = kurczyć się, '不前' = nie naprzód. Inne chengyu o odwadze: '勇往直前' (odważnie iść naprzód), '迎难而上' (wyjść naprzeciw trudnościom), '知难而退' (poznać trudność i się wycofać). Chińska kultura BARDZO ceni odwagę i wytrwałość — te chengyu usłyszysz na każdym kroku."
            },
            {
                "id": "pc_chengyu12",
                "question": "他做的菜 _____ ，好吃极了。",
                "translation": "(Jego dania mają [pełnię kolorów, aromatu i smaku], są niesamowicie pyszne)",
                "options": ["色香味俱全", "乱七八糟", "一无是处", "不三不四"],
                "correct": "色香味俱全",
                "explanation": "'色香味俱全' (sè xiāng wèi jù quán) = kolor, aromat i smak — wszystko doskonałe. '色' = kolor, '香' = zapach, '味' = smak, '俱全' = kompletne. To NAJWYŻSZY komplement dla chińskiego jedzenia! Chińska kuchnia ocenia danie w trzech wymiarach: wygląd, zapach, smak. Gdy powiesz '色香味俱全' — kucharz będzie zachwycony. Jedzenie = kultura w Chinach!"
            },
            {
                "id": "pc_chengyu13",
                "question": "我们应该 _____ ，互相帮助。",
                "translation": "(Powinniśmy [współpracować ramię w ramię], wzajemnie sobie pomagać)",
                "options": ["齐心协力", "各自为政", "分道扬镳", "尔虞我诈"],
                "correct": "齐心协力",
                "explanation": "'齐心协力' (qí xīn xié lì) = zjednoczyć serca i siły / działać razem. '齐心' = jednomyślni, '协力' = współpracować. To chengyu o TEAMWORKU — idealne w pracy, szkole, sporcie. Przeciwieństwa: '各自为政' (każdy robi po swojemu), '分道扬镳' (rozejść się w różne strony). W chińskiej kulturze harmonię grupy ceni się ponad indywidualizm — '齐心协力' to tego kwintesencja."
            },
            {
                "id": "pc_chengyu14",
                "question": "这座城市的变化真是 _____ 。",
                "translation": "(Zmiany w tym mieście są naprawdę [ogromne/przewracające niebo i ziemię])",
                "options": ["翻天覆地", "微不足道", "一成不变", "无关紧要"],
                "correct": "翻天覆地",
                "explanation": "'翻天覆地' (fān tiān fù dì) = przewrócić niebo i ziemię / kolosalne zmiany. '翻' = przewrócić, '覆' = odwrócić. Używa się o WIELKICH zmianach — modernizacja miasta, rewolucja, transformacja. '中国发生了翻天覆地的变化' (Chiny przeszły ogromne zmiany) — to zdanie usłyszysz w każdym dokumencie o historii Chin. Przeciwieństwo: '一成不变' (niezmienny)."
            },
            {
                "id": "pc_chengyu15",
                "question": "她 _____ 地看着窗外，不知道在想什么。",
                "translation": "(Ona [zamyślona/nieobecna duchem] patrzyła za okno, nie wiadomo o czym myślała)",
                "options": ["心不在焉", "全神贯注", "聚精会神", "目不转睛"],
                "correct": "心不在焉",
                "explanation": "'心不在焉' (xīn bù zài yān) = myślami gdzie indziej / nieobecny duchem. '心' = serce/umysł, '不在焉' = nie jest tu. To jak polskie 'myślami na Hawajach'! Przeciwieństwa: '全神贯注' (w pełni skoncentrowany), '聚精会神' (zebrać ducha i skupić się), '目不转睛' (nie odrywać oczu). Te chengyu o uwadze i skupieniu — PRZYDATNE w szkole i pracy!"
            }
        ]
    },
    {
        "key": "expressing_experience",
        "name": "Wyrażanie doświadczeń",
        "description": "经历表达",
        "iconName": "star.circle.fill",
        "color": "#34d399",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_exp1",
                "question": "我 _____ 去过三次中国。",
                "translation": "(Ja [już/do tej pory] byłem w Chinach trzy razy)",
                "options": ["已经", "正在", "将要", "刚刚"],
                "correct": "已经",
                "explanation": "'已经' (yǐjīng) = już — wskazuje, że doświadczenie miało miejsce DO TERAZ. '已经...过' to klasyczna konstrukcja doświadczenia: '已经去过' = już tam było się. '正在' = właśnie teraz (czas trwania), '将要' = zamierza (przyszłość), '刚刚' = dopiero co (bardzo niedawno). '我已经吃过了' (już jadłem) — usłyszysz to codziennie!"
            },
            {
                "id": "pc_exp2",
                "question": "你 _____ 没有吃过北京烤鸭？",
                "translation": "(Ty [naprawdę] nigdy nie jadłeś kaczki po pekińsku?)",
                "options": ["真的", "已经", "马上", "经常"],
                "correct": "真的",
                "explanation": "'真的' (zhēn de) = naprawdę/serio — wyraża ZDZIWIENIE, że ktoś czegoś nie doświadczył. '真的没有吃过？' = naprawdę nigdy nie jadłeś? To bardzo naturalne w rozmowie! '没有...过' = nigdy nie (doświadczenie). Chińczycy KOCHAJĄ pytać obcokrajowców o jedzenie: '你吃过饺子吗？' (jadłeś kluski?), '你吃过火锅吗？' (jadłeś hot pot?)."
            },
            {
                "id": "pc_exp3",
                "question": "她从来 _____ 坐过飞机。",
                "translation": "(Ona nigdy [nie] leciała samolotem)",
                "options": ["没", "不", "别", "未"],
                "correct": "没",
                "explanation": "'从来没...过' (cónglái méi...guò) = NIGDY nie (doświadczenie). To najsilniejsza forma negacji doświadczenia! '从来' = od zawsze/nigdy, '没' = negacja doświadczenia, '过' = marker doświadczenia. WAŻNE: NIE '从来不...过'! '没' neguje doświadczenia, '不' neguje nawyki/wolę. '她从来没去过日本' (nigdy nie była w Japonii). '从来没' = absolutne zero doświadczenia."
            },
            {
                "id": "pc_exp4",
                "question": "我小时候 _____ 养过一只猫。",
                "translation": "(Kiedy byłem mały [kiedyś] miałem kota)",
                "options": ["曾经", "正在", "一直", "已经"],
                "correct": "曾经",
                "explanation": "'曾经' (céngjīng) = kiedyś/niegdyś — doświadczenie z DALSZEJ przeszłości. '曾经...过' = kiedyś miało się doświadczenie. '曾经' jest bardziej literackie niż '已经'. RÓŻNICA: '已经去过' = już byłem (fakt), '曾经去过' = kiedyś byłem (wspomnienie/nostalgia). '我曾经在上海住过两年' (kiedyś mieszkałem w Szanghaju dwa lata). '曾经' dodaje ton refleksji."
            },
            {
                "id": "pc_exp5",
                "question": "你有没有 _____ 这种感觉？",
                "translation": "(Czy kiedyś miałeś [doświadczyłeś] takie uczucie?)",
                "options": ["体验过", "正在", "将要", "必须"],
                "correct": "体验过",
                "explanation": "'体验过' (tǐyàn guò) = doświadczyłeś (osobiście przeżyłeś). '体验' = przeżywać/doświadczać. '有没有...过' to PYTANIE o doświadczenie — oferuje dwie opcje (tak/nie). Jest bardziej grzeczne niż '你...过吗？'. '你有没有去过长城？' (Czy byłeś na Wielkim Murze?). W Chinach pytania typu '有没有' są STANDARDEM grzecznych rozmów."
            },
            {
                "id": "pc_exp6",
                "question": "来中国以后，我 _____ 了很多新的东西。",
                "translation": "(Po przyjeździe do Chin, [doświadczyłem/poznałem] wiele nowych rzeczy)",
                "options": ["经历", "经过", "通过", "路过"],
                "correct": "经历",
                "explanation": "'经历' (jīnglì) = przeżyć/doświadczyć (głębokie doświadczenie). PORÓWNAJ te podobne słowa: '经历' = przeżyć (emocjonalne), '经过' = przejść przez/minąć (fizycznie lub PROCES), '通过' = przez/za pomocą (ŚRODEK), '路过' = przejeżdżać obok (dosł. mijać). '这次旅行我经历了很多' (w tej podróży przeżyłem wiele). '经历' to doświadczenie, które cię ZMIENIŁO."
            },
            {
                "id": "pc_exp7",
                "question": "我第一次 _____ 到这么美的风景。",
                "translation": "(Po raz pierwszy [zobaczyłem] tak piękny krajobraz)",
                "options": ["看", "看了", "看着", "看过"],
                "correct": "看",
                "explanation": "Po '第一次' (dì yī cì = po raz pierwszy) używamy PROSTEGO czasownika bez aspektu! '第一次看到' = po raz pierwszy zobaczyłem. NIE '第一次看了到' ani '第一次看过到'. '到' (dào) tu jest komplementem rezultatu — wskazuje, że widzenie się UDAŁO. '我第一次吃到这么好吃的菜' (po raz pierwszy jadłem tak pyszne danie). '第一次' + czasownik + '到' — zapamiętaj tę strukturę!"
            },
            {
                "id": "pc_exp8",
                "question": "到目前为止，一切都 _____ 顺利。",
                "translation": "(Do tej pory, wszystko [przebiegało] gładko)",
                "options": ["进行得", "进行着", "进行了", "进行过"],
                "correct": "进行得",
                "explanation": "'进行得' (jìnxíng de) + przymiotnik = przebiegać (jak). '得' tu jest KOMPLEMENTEM STOPNIA — mówi JAK przebiegało. '到目前为止' (dào mùqián wéi zhǐ) = do tej pory — formalne wyrażenie czasowe. '进行得顺利' = przebiegało gładko. Porównaj: '进行着' = trwa (kontynuacja), '进行了' = odbyło się (zakończenie), '进行过' = kiedyś miało miejsce (doświadczenie)."
            },
            {
                "id": "pc_exp9",
                "question": "自从学了中文 _____ ，我的生活变得更有趣了。",
                "translation": "(Odkąd nauczyłem się chińskiego [od tamtej pory], moje życie stało się ciekawsze)",
                "options": ["以来", "以后", "以前", "之间"],
                "correct": "以来",
                "explanation": "'自从...以来' (zìcóng...yǐlái) = odkąd/od tamtej pory — od PUNKTU w przeszłości do TERAZ. RÓŻNICA: '以来' = od tamtej pory do dziś (ciągłe), '以后' = po tym (jednokrotne), '以前' = przed tym. '自从来到中国以来' (odkąd przyjechałem do Chin). '自从...以来' podkreśla CIĄGŁOŚĆ zmiany. Jest bardziej formalne niż samo '以后'."
            },
            {
                "id": "pc_exp10",
                "question": "他 _____ 过很多国家，见识很广。",
                "translation": "(On [odwiedził] wiele krajów, ma szerokie horyzonty)",
                "options": ["去", "走", "跑", "飞"],
                "correct": "去",
                "explanation": "'去过' = odwiedził (był w). '去过很多国家' = był w wielu krajach. '见识很广' (jiànshi hěn guǎng) = szerokie horyzonty/duże doświadczenie — piękne wyrażenie! '见识' = wiedza z doświadczenia. PORÓWNAJ: '去过' = był (podróż), '走过' = przeszedł (pieszo), '跑过' = przebiegł, '飞过' = przeleciał. W kontekście krajów zawsze '去过'!"
            },
            {
                "id": "pc_exp11",
                "question": "这是我 _____ 经历过的最难忘的事。",
                "translation": "(To jest [to, co] przeżyłem — najbardziej niezapomniane wydarzenie)",
                "options": ["所", "被", "把", "给"],
                "correct": "所",
                "explanation": "'所' (suǒ) w '所...的' = to, co — tworzy NOMINALIZACJĘ. '我所经历过的' = to, co ja przeżyłem. '所' jest FORMALNE i LITERACKIE — podnosi rejestr zdania. '我所知道的' (to, co wiem), '我所见过的' (to, co widziałem). W mowie potocznej można pominąć '所': '我经历过的最难忘的事'. Ale z '所' brzmi ELEGANCKO."
            },
            {
                "id": "pc_exp12",
                "question": "_____ 你去过长城吗？那里怎么样？",
                "translation": "([Czy słyszałem dobrze, że] byłeś na Wielkim Murze? Jak tam było?)",
                "options": ["听说", "看到", "知道", "觉得"],
                "correct": "听说",
                "explanation": "'听说' (tīngshuō) = słyszałem, że / podobno — otwiera rozmowę! '听说你去过长城' = słyszałem, że byłeś na Wielkim Murze. To BARDZO naturalny sposób na rozmowę! Chińczycy zaczynają tematy od '听说': '听说你会说波兰语？' (słyszałem, że mówisz po polsku?). '听说中国菜很好吃' (podobno chińskie jedzenie jest pyszne)."
            },
            {
                "id": "pc_exp13",
                "question": "回想起来，那段时间 _____ 辛苦。",
                "translation": "(Wspominając, tamten okres [był naprawdę] ciężki)",
                "options": ["确实", "可能", "大概", "也许"],
                "correct": "确实",
                "explanation": "'确实' (quèshí) = rzeczywiście/faktycznie — potwierdza z REFLEKSJĄ. '回想起来' (huíxiǎng qǐlái) = wspominając/gdy się zastanowię — piękne wyrażenie! '那段时间' = tamten okres. '确实辛苦' = rzeczywiście ciężki. Porównaj: '确实' = potwierdzenie z pewności, '可能' = może, '大概' = prawdopodobnie, '也许' = być może. '确实' — gdy mówisz z doświadczenia."
            },
            {
                "id": "pc_exp14",
                "question": "没想到学中文 _____ 这么有意思。",
                "translation": "(Nie spodziewałem się, że nauka chińskiego [okaże się] tak interesująca)",
                "options": ["会", "要", "能", "可以"],
                "correct": "会",
                "explanation": "'会' (huì) tu = okaże się / będzie — wyraża ODKRYCIE czegoś nieoczekiwanego. '没想到...会...' = nie spodziewałem się, że okaże się... To bardzo emocjonalna struktura! '没想到' (méi xiǎngdào) = nie pomyślałem/nie spodziewałem się. '没想到你会说中文！' (nie spodziewałem się, że mówisz po chińsku!). '会' tu nie oznacza umiejętności, lecz REZULTAT."
            },
            {
                "id": "pc_exp15",
                "question": "我永远 _____ 不了第一次到中国的那一天。",
                "translation": "(Nigdy [nie zapomnę] dnia, kiedy po raz pierwszy przyjechałem do Chin)",
                "options": ["忘", "想", "记", "说"],
                "correct": "忘",
                "explanation": "'忘不了' (wàng bù liǎo) = nie jestem w stanie zapomnieć. To KOMPLEMENT POTENCJALNY: '忘' (zapomnieć) + '不了' (nie jestem w stanie). '永远忘不了' = na zawsze niezapomniane. Inne: '忘得了' = mogę zapomnieć, '想不到' = nie jestem w stanie sobie wyobrazić, '说不出' = nie jestem w stanie powiedzieć. Komplement potencjalny to jeden z NAJWAŻNIEJSZYCH elementów chińskiej gramatyki!"
            }
        ]
    },
    {
        "key": "expressing_suggestion",
        "name": "Wyrażanie sugestii i rad",
        "description": "建议表达",
        "iconName": "lightbulb.fill",
        "color": "#fbbf24",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_sug1",
                "question": "你 _____ 多喝水。",
                "translation": "(Powinieneś [więcej] pić wody)",
                "options": ["应该", "必须", "一定", "非要"],
                "correct": "应该",
                "explanation": "'应该' (yīnggāi) = powinieneś — ŁAGODNA rada, jak polskie 'powinieneś'. To najczęstszy sposób dawania rad w chińskim! '应该多喝水' — typowa rada od każdego Chińczyka! (bo Chińczycy WIERZĄ, że gorąca woda leczy wszystko: '多喝热水' — pij więcej gorącej wody). '必须' = musisz (silniejsze), '一定' = koniecznie, '非要' = uparcie chcieć."
            },
            {
                "id": "pc_sug2",
                "question": "我 _____ 你去看医生。",
                "translation": "(Ja [radzę/sugeruję] ci, żebyś poszedł do lekarza)",
                "options": ["建议", "命令", "要求", "强迫"],
                "correct": "建议",
                "explanation": "'建议' (jiànyì) = sugerować/radzić — formalna i grzeczna rada. '我建议你...' = sugeruję ci, żebyś... '命令' = rozkazywać, '要求' = wymagać, '强迫' = zmuszać — te są ZBYT mocne na radę! W chińskim hierarchia grzeczności: '建议' (sugestia) → '劝' (namawiać) → '要求' (wymagać) → '命令' (rozkazywać). '建议' jest BEZPIECZNE w każdej sytuacji."
            },
            {
                "id": "pc_sug3",
                "question": "_____ 我们明天一起去爬山吧？",
                "translation": "([Co powiesz na to, żebyśmy] jutro razem poszli w góry?)",
                "options": ["要不", "必须", "一定", "千万"],
                "correct": "要不",
                "explanation": "'要不' (yào bù) = co powiesz na / a może — nieformalny PROŚ o propozycję! '要不我们...' = a może byśmy... '吧' na końcu dodaje ton SUGESTII (nie rozkazu). '要不我们去吃火锅吧？' (a może pójdziemy na hot pot?). '要不' jest bardzo NATURALNY w codziennych rozmowach — idealny sposób na proponowanie planów!"
            },
            {
                "id": "pc_sug4",
                "question": "你 _____ 好好休息一下。",
                "translation": "(Powinieneś [solidnie] odpocząć trochę)",
                "options": ["最好", "最差", "最少", "最多"],
                "correct": "最好",
                "explanation": "'最好' (zuìhǎo) = najlepiej / lepiej żebyś — rada z NACISKIEM. '你最好...' = najlepiej byłoby, gdybyś... Jest silniejsze niż '应该'. '好好' (hǎohǎo) = porządnie/solidnie — reduplikacja '好' wzmacnia. '好好学习' (ucz się porządnie), '好好吃饭' (jedz porządnie), '好好休息' (solidnie odpoczywaj). '一下' na końcu = trochę/chwilkę (łagodzi)."
            },
            {
                "id": "pc_sug5",
                "question": "如果我是你，我 _____ 接受这个工作。",
                "translation": "(Gdybym był tobą, [to bym] przyjął tę pracę)",
                "options": ["就会", "不会", "没有", "从不"],
                "correct": "就会",
                "explanation": "'如果我是你，我就会...' = gdybym był tobą, to bym... To IDENTYCZNA struktura jak w polskim! '就' (jiù) = to/wówczas — łączy warunek z rezultatem. '会' = bym (tryb warunkowy). '如果...就...' to podstawowa struktura warunkowa. UWAGA: chiński NIE ma trybu warunkowego — '会' pełni tę funkcję kontekstualnie. '如果下雨，我就不去了' (jeśli będzie padać, to nie pójdę)."
            },
            {
                "id": "pc_sug6",
                "question": "我 _____ 你考虑一下这个方案。",
                "translation": "(Ja [radzę] ci, żebyś rozważył ten plan)",
                "options": ["劝", "骂", "批", "训"],
                "correct": "劝",
                "explanation": "'劝' (quàn) = namawiać/radzić z troską. To rada z OSOBISTYM zaangażowaniem — mówisz, bo ci ZALEŻY. '我劝你...' = radzę ci (bo mi na tobie zależy). PORÓWNAJ: '劝' = radzić z troską, '骂' = besztać, '批' = krytykować, '训' = upominać/pouczać. '他劝我不要放弃' (namówił mnie, żebym nie rezygnował). '劝' jest ciepłe i opiekuńcze."
            },
            {
                "id": "pc_sug7",
                "question": "你 _____ 先把作业做完再出去玩。",
                "translation": "(Powinieneś [raczej] najpierw skończyć zadanie domowe, potem wyjść się bawić)",
                "options": ["还是", "或者", "不过", "而且"],
                "correct": "还是",
                "explanation": "'还是' (háishi) = raczej/lepiej żebyś — DELIKATNA sugestia. '你还是...' = chyba lepiej byłoby, gdybyś... WAŻNE: '还是' ma DWA znaczenia! 1) W pytaniach: 'czy' (alter natywa) — '你喝茶还是咖啡？' (herbatę czy kawę?). 2) W radach: 'raczej/lepiej' — '你还是回家吧' (raczej idź do domu). '先...再...' = najpierw...potem... (kolejność)."
            },
            {
                "id": "pc_sug8",
                "question": "_____ 别太晚睡觉，对身体不好。",
                "translation": "([Wiesz] nie kładź się zbyt późno, to niedobrze dla zdrowia)",
                "options": ["你呀", "你吧", "你啦", "你嘛"],
                "correct": "你呀",
                "explanation": "'你呀' (nǐ ya) = ty (z łagodnym wyrzutem/troską). '呀' tu dodaje ton BLISKIEJ relacji — jak polskie 'no ty'. '你呀，别太晚睡' = ech, ty, nie kładź się tak późno. '吧' = sugestia, '啦' = zmiana/nowość, '嘛' = no przecież (oczywistość). Partykuły zdaniowe w chińskim niosą TONY emocji! '你呀' brzmi jak mama do dziecka — ciepło i z troską."
            },
            {
                "id": "pc_sug9",
                "question": "这个问题很复杂，你 _____ 仔细考虑。",
                "translation": "(Ta kwestia jest bardzo skomplikowana, [musisz] dokładnie się zastanowić)",
                "options": ["需要", "应该", "可以", "想要"],
                "correct": "需要",
                "explanation": "'需要' (xūyào) = trzeba/potrzeba — obiektywna konieczność. '你需要仔细考虑' = musisz się dokładnie zastanowić (bo sytuacja tego wymaga). RÓŻNICA: '需要' = obiektywna potrzeba, '应该' = rada moralna/społeczna, '可以' = możesz (pozwolenie), '想要' = chcesz (pragnienie). '仔细' (zǐxì) = dokładnie/starannie. '仔细看' (przyjrzyj się), '仔细听' (posłuchaj uważnie)."
            },
            {
                "id": "pc_sug10",
                "question": "你不 _____ 试试看？也许会成功。",
                "translation": "(Czemu nie [chciałbyś] spróbować? Może się uda)",
                "options": ["想", "要", "能", "会"],
                "correct": "想",
                "explanation": "'你不想...？' = czy nie chciałbyś...? — sugestia przez PYTANIE RETORYCZNE! Jest bardzo delikatna i elegancka. '试试看' (shìshi kàn) = spróbować i zobaczyć — reduplikacja '试' łagodzi + '看' = zobaczymy. '也许' (yěxǔ) = może. To ŚWIETNY sposób na sugestię — nie narzucasz, PYTASZ. '你不想去看看吗？' (nie chciałbyś pójść zobaczyć?)."
            },
            {
                "id": "pc_sug11",
                "question": "要是我的话，我 _____ 选择留在这里。",
                "translation": "(Gdybym to ja, [to bym] wybrał zostanie tutaj)",
                "options": ["会", "没", "不", "别"],
                "correct": "会",
                "explanation": "'要是我的话' (yàoshi wǒ de huà) = gdybym to ja / na moim miejscu. '要是' = gdyby (potoczne), '的话' = w takim razie (podkreśla warunek). '我会...' = ja bym... Porównaj formalne i potoczne: '如果我是你' (gdybym był tobą — formalne), '要是我的话' (gdybym to ja — potoczne). W codziennych radach '要是我的话' jest NATURALNIEJSZE."
            },
            {
                "id": "pc_sug12",
                "question": "你 _____ 不要把这件事告诉别人。",
                "translation": "([Lepiej] nie mów o tym nikomu)",
                "options": ["千万", "也许", "大概", "可能"],
                "correct": "千万",
                "explanation": "'千万' (qiānwàn) = za nic (w świecie) / KONIECZNIE (nie) — najsilniejsza forma rady/ostrzeżenia! Dosłownie: 'tysiąc dziesięć tysięcy' (= milion razy). '千万不要...' = za nic w świecie nie... '千万别告诉他！' (pod żadnym pozorem mu nie mów!). '千万要小心！' (koniecznie uważaj!). Jest BARDZO emocjonalny — używa się go, gdy sprawa jest POWAŻNA."
            },
            {
                "id": "pc_sug13",
                "question": "_____ 走路注意安全。",
                "translation": "([Proszę] uważaj na bezpieczeństwo idąc)",
                "options": ["请", "让", "叫", "使"],
                "correct": "请",
                "explanation": "'请' (qǐng) = proszę — grzeczna prośba/sugestia. '请注意安全' = proszę, uważaj na bezpieczeństwo — usłyszysz to w KAŻDYM chińskim transporcie publicznym! '请坐' (proszę usiąść), '请进' (proszę wejść), '请稍等' (proszę chwilę poczekać). '让' = kazać, '叫' = poprosić (nieformalne), '使' = spowodować (formalne). '请' jest KRÓLEM grzeczności."
            },
            {
                "id": "pc_sug14",
                "question": "你看着办 _____ ，我相信你。",
                "translation": "(Zdecyduj sam [jak uważasz], ufam ci)",
                "options": ["吧", "了", "呢", "啊"],
                "correct": "吧",
                "explanation": "'你看着办吧' = zdecyduj sam / rób jak uważasz. '吧' dodaje ton SUGESTII i POZOSTAWIANIA decyzji. '看着办' = oceniaj i działaj. To wyraz ZAUFANIA! PORÓWNAJ partykuły: '吧' = sugestia/prośba, '了' = zmiana/zakończenie, '呢' = kontynuacja/pytanie dodatkowe, '啊' = emocja/wykrzyknienie. '我们走吧' (chodźmy), '你说吧' (mów)."
            },
            {
                "id": "pc_sug15",
                "question": "我觉得你 _____ 能行，加油！",
                "translation": "(Myślę, że [na pewno] dasz radę, powodzenia!)",
                "options": ["一定", "也许", "大概", "可能"],
                "correct": "一定",
                "explanation": "'一定' (yīdìng) = na pewno/koniecznie — wyrażenie PEWNOŚCI i WSPARCIA! '你一定能行！' = na pewno dasz radę! — to NAJLEPSZA forma dopingu! '加油' (jiāyóu) = dosłownie 'dodaj paliwa' = powodzenia/dawaj! — to słowo KAŻDY obcokrajowiec zna! '一定' tu nie jest radą, lecz wyrażeniem WIARY w drugą osobę. '你一定会成功的！' (na pewno ci się uda!)."
            }
        ]
    },
    {
        "key": "time_clauses",
        "name": "Zdania czasowe",
        "description": "时间从句",
        "iconName": "clock.arrow.circlepath",
        "color": "#38bdf8",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_tc1",
                "question": "他 _____ 到家就给我打了电话。",
                "translation": "(On [jak tylko] dotarł do domu, od razu do mnie zadzwonił)",
                "options": ["一", "在", "正", "才"],
                "correct": "一",
                "explanation": "'一...就...' (yī...jiù...) = jak tylko...to zaraz... To JEDNA z najważniejszych struktur czasowych! '一到家就打电话' = jak tylko dotarł do domu, zaraz zadzwonił. '一' = moment, '就' = natychmiast po. '一看到她就笑了' (jak tylko ją zobaczył, zaraz się uśmiechnął). '一吃就饱了' (jak tylko zjadł, od razu się najadł). NIEZWYKLE przydatne w codziennym chińskim!"
            },
            {
                "id": "pc_tc2",
                "question": "下课 _____ ，我们去吃饭好吗？",
                "translation": "([Po] lekcji, idziemy coś zjeść, dobrze?)",
                "options": ["以后", "以前", "之间", "当中"],
                "correct": "以后",
                "explanation": "'以后' (yǐhòu) = po/potem — wskazuje czas PO wydarzeniu. '下课以后' = po lekcji. RÓŻNICA: '以后' = po (w przyszłości też: '以后我会更努力' = w przyszłości będę się bardziej starał), '以前' = przed, '之间' = między, '当中' = w trakcie/pośród. 'Zdarzenie + 以后' — prosta i czysta struktura. '吃饭以后散步' (po jedzeniu spacer)."
            },
            {
                "id": "pc_tc3",
                "question": "我 _____ 吃早饭的时候看新闻。",
                "translation": "(Ja [zwykle] podczas jedzenia śniadania oglądam wiadomości)",
                "options": ["常常", "已经", "马上", "刚刚"],
                "correct": "常常",
                "explanation": "'常常' (chángcháng) = często/zwykle. '的时候' (de shíhou) = kiedy/podczas — tworzy zdanie czasowe! 'Czynność + 的时候' = kiedy/podczas czegoś. '吃饭的时候' = podczas jedzenia, '睡觉的时候' = podczas snu, '学习的时候' = podczas nauki. '常常' + '的时候' = rutyna jednoczesna. To jak polskie 'gdy zwykle jem śniadanie, oglądam wiadomości'."
            },
            {
                "id": "pc_tc4",
                "question": "_____ 你来中国的时候，一定要来找我。",
                "translation": "([Kiedy/gdy] przyjedziesz do Chin, koniecznie mnie odwiedź)",
                "options": ["等", "在", "于", "到"],
                "correct": "等",
                "explanation": "'等' (děng) = kiedy/gdy (w przyszłości) — dosłownie 'czekać aż'. '等你来...' = kiedy przyjedziesz... (poczekam na ten moment). '等' jest bardziej CIEPŁE niż '当' — sugeruje, że ktoś z niecierpliwością czeka! '等我长大了' (kiedy dorosnę), '等天气好了' (kiedy poprawi się pogoda). UWAGA: '等' = czekać/kiedy, '在' = w trakcie (aktualnie), '到' = osiągnąć."
            },
            {
                "id": "pc_tc5",
                "question": "出门 _____ ，别忘了带钥匙。",
                "translation": "([Przed] wyjściem, nie zapomnij wziąć kluczy)",
                "options": ["之前", "之后", "以后", "当中"],
                "correct": "之前",
                "explanation": "'之前' (zhī qián) = przed. '出门之前' = przed wyjściem z domu. RÓŻNICA: '之前' vs '以前' — '之前' jest precyzyjniejsze (tuż przed konkretnym zdarzeniem), '以前' jest ogólniejsze (wcześniej/dawniej). '考试之前' = przed egzaminem (konkretnym), '以前我住在波兰' = wcześniej mieszkałem w Polsce (ogólnie). '别忘了' (bié wàng le) = nie zapomnij — usłyszysz to CODZIENNIE!"
            },
            {
                "id": "pc_tc6",
                "question": "他学了三年中文，_____ 才能流利地说。",
                "translation": "(Uczył się chińskiego trzy lata, [dopiero wtedy] potrafił płynnie mówić)",
                "options": ["才", "就", "都", "还"],
                "correct": "才",
                "explanation": "'才' (cái) = dopiero (wtedy) — podkreśla, że coś trwało DŁUGO lub było TRUDNE. '学了三年才能...' = uczył się trzy lata, dopiero wtedy mógł... KONTRAST: '才' = dopiero (późno/trudno), '就' = już/zaraz (szybko/łatwo). '他学了一个月就能说了' (uczył się miesiąc i już mógł mówić — szybko!). '才' vs '就' — to KLUCZOWA para w chińskim!"
            },
            {
                "id": "pc_tc7",
                "question": "_____ 下雨，我们就在家看电影。",
                "translation": "([Jeśli/kiedy] będzie padać, to zostaniemy w domu i obejrzymy film)",
                "options": ["要是", "虽然", "因为", "虽说"],
                "correct": "要是",
                "explanation": "'要是' (yàoshi) = jeśli/kiedy (potoczne) — warunek w przyszłości. '要是下雨...' = jeśli będzie padać... W chińskim 'jeśli' i 'kiedy' (w przyszłości) NAKŁADAJĄ się — bo przyszłość jest niepewna! '要是' jest potoczne, '如果' formalne, '假如' literackie. '要是你有空' (jeśli będziesz miał czas), '要是明天天气好' (jeśli jutro będzie dobra pogoda)."
            },
            {
                "id": "pc_tc8",
                "question": "自从他去了美国 _____ ，我们就没见过面。",
                "translation": "(Odkąd pojechał do Ameryki, [od tamtej pory] nie widzieliśmy się)",
                "options": ["以来", "以后", "以前", "之后"],
                "correct": "以来",
                "explanation": "'自从...以来' (zìcóng...yǐlái) = odkąd...od tamtej pory. '以来' podkreśla CIĄGŁOŚĆ od punktu w przeszłości do teraz. '自从毕业以来' = odkąd ukończyłem szkołę (do teraz). '就没见过面' = nie widzieliśmy się (od tamtej pory). '就' tu = zaraz/od razu (i tak zostało). To struktura RETROSPEKTYWNA — patrzysz wstecz na ciągły stan."
            },
            {
                "id": "pc_tc9",
                "question": "_____ 他说话的时候，请不要打断。",
                "translation": "([Gdy/podczas gdy] on mówi, proszę nie przerywaj)",
                "options": ["当", "从", "到", "向"],
                "correct": "当",
                "explanation": "'当' (dāng) = gdy/kiedy — wskazuje na JEDNOCZESNOŚĆ. '当他说话的时候' = gdy/kiedy on mówi. '当' jest bardziej formalne niż samo '的时候'. W piśmie: '当' + zdarzenie + '的时候/时'. '打断' (dǎduàn) = przerywać komuś. Grzeczne: '请不要打断' = proszę nie przerywaj. '当我年轻的时候' = gdy byłem młody — klasyczne otwarcie wspomnień!"
            },
            {
                "id": "pc_tc10",
                "question": "他每天 _____ 六点起床。",
                "translation": "(On codziennie [o] szóstej wstaje)",
                "options": ["早上", "晚上", "下午", "中午"],
                "correct": "早上",
                "explanation": "'早上六点' = o szóstej rano. W chińskim pora dnia POPRZEDZA godzinę: '早上' (rano) + '六点' (6:00). Pory dnia: '早上' (rano, ~6-9), '上午' (przed południem, ~9-12), '中午' (południe, ~12-1), '下午' (popołudnie, ~1-6), '晚上' (wieczór, ~6-10), '半夜/深夜' (noc). KOLEJNOŚĆ: czas + podmiot + czynność LUB podmiot + czas + czynność."
            },
            {
                "id": "pc_tc11",
                "question": "你先做完这个，_____ 再做那个。",
                "translation": "(Najpierw skończ to, [potem] rób tamto)",
                "options": ["然后", "但是", "虽然", "因为"],
                "correct": "然后",
                "explanation": "'先...然后/再...' = najpierw...potem... — SEKWENCJA! '先' (xiān) = najpierw, '然后' (ránhòu) = potem/następnie, '再' (zài) = po czym. '然后' jest bardziej formalne, '再' bardziej potoczne. Mogą się łączyć: '先...然后再...' = najpierw...a potem... '先吃饭，然后去散步' (najpierw jedzenie, potem spacer)."
            },
            {
                "id": "pc_tc12",
                "question": "我刚到公司，老板 _____ 打来了电话。",
                "translation": "(Właśnie dotarłem do firmy, szef [natychmiast] zadzwonił)",
                "options": ["就", "才", "还", "又"],
                "correct": "就",
                "explanation": "'刚...就...' (gāng...jiù...) = ledwo/dopiero co...i zaraz... — dwa zdarzenia TUŻ po sobie! '刚到就打电话' = ledwo dotarł i zaraz zadzwonił. '就' tu = natychmiast po. Porównaj: '刚...就...' = dopiero co i zaraz (szybko), '才...就...' = dopiero co a już (zaskoczenie). '我刚坐下就有人敲门' (ledwo usiadłem, a ktoś zapukał)."
            },
            {
                "id": "pc_tc13",
                "question": "_____ 你准备好了，我们就出发。",
                "translation": "([Jak tylko] będziesz gotowy, wyruszymy)",
                "options": ["等", "从", "到", "在"],
                "correct": "等",
                "explanation": "'等你准备好了，我们就...' = jak tylko będziesz gotowy, to my... '等' + warunek + '就' + rezultat. '准备好了' = przygotować się (rezultat skończony). '出发' (chūfā) = wyruszać/startować. '等' tu łączy OCZEKIWANIE z PRZYSZŁYM działaniem. '等我毕业了就去旅行' (jak tylko skończę studia, pojadę podróżować)."
            },
            {
                "id": "pc_tc14",
                "question": "随着时间的 _____ ，他慢慢习惯了。",
                "translation": "(W miarę [upływu/bieg] czasu, powoli się przyzwyczaił)",
                "options": ["推移", "变化", "增长", "减少"],
                "correct": "推移",
                "explanation": "'随着时间的推移' (suízhe shíjiān de tuīyí) = w miarę upływu czasu — ELEGANCKIE wyrażenie! '随着' (suízhe) = w miarę jak/wraz z — wskazuje na RÓWNOLEGŁY proces. '推移' = upływać (o czasie). '随着经济的发展' (wraz z rozwojem gospodarki), '随着科技的进步' (wraz z postępem technologii). '随着' — PERŁA chińskiego formalnego stylu!"
            },
            {
                "id": "pc_tc15",
                "question": "直到他走了，我 _____ 知道真相。",
                "translation": "(Dopiero gdy odszedł, [wtedy] poznałem prawdę)",
                "options": ["才", "就", "都", "也"],
                "correct": "才",
                "explanation": "'直到...才...' (zhídào...cái...) = dopiero gdy...wtedy... — PÓŹNE odkrycie! '直到' = aż do momentu gdy. '才' = dopiero (późno). '直到他走了，我才知道' = dopiero gdy odszedł, poznałem prawdę. To DRAMATYCZNA konstrukcja! Często w historiach miłosnych: '直到失去，才知道珍贵' (dopiero gdy straciłeś, doceniasz wartość). '真相' (zhēnxiàng) = prawda."
            }
        ]
    },
    {
        "key": "verb_resultative_advanced",
        "name": "Komplementy rezultatywne – zaawansowane",
        "description": "高级结果补语",
        "iconName": "checkmark.circle.fill",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pc_vra1",
                "question": "这本书我看 _____ 了。",
                "translation": "(Tę książkę [przeczytałem do końca])",
                "options": ["完", "好", "到", "见"],
                "correct": "完",
                "explanation": "'看完' (kàn wán) = przeczytać do końca. '完' jako komplement = zakończyć/skończyć całkowicie. KLUCZOWE komplementy rezultatywne z '完': '吃完' (zjeść do końca), '写完' (napisać do końca), '做完' (zrobić do końca), '用完' (zużyć). '完' dodane do KAŻDEGO czasownika daje znaczenie 'zrobić do końca'. '我还没看完' (jeszcze nie skończyłem czytać) — zwróć uwagę na '还没...完'!"
            },
            {
                "id": "pc_vra2",
                "question": "你说的话我听 _____ 了。",
                "translation": "(To co powiedziałeś, [zrozumiałem/usłyszałem jasno])",
                "options": ["懂", "完", "到", "见"],
                "correct": "懂",
                "explanation": "'听懂' (tīng dǒng) = usłyszeć i zrozumieć. '懂' jako komplement = zrozumieć (rezultat mentalny). '听' = słuchać → '听懂' = zrozumieć słuchając, '看' = patrzeć → '看懂' = zrozumieć czytając/oglądając. '你听懂了吗？' = zrozumiałeś? (pytanie KAŻDEGO nauczyciela chińskiego!). '听不懂' = nie rozumiem (słyszę, ale nie rozumiem) — to zdanie obcokrajowcy mówią NAJCZĘŚCIEJ!"
            },
            {
                "id": "pc_vra3",
                "question": "门关 _____ 了吗？",
                "translation": "(Czy drzwi [zamknięto dobrze/poprawnie]?)",
                "options": ["好", "完", "到", "住"],
                "correct": "好",
                "explanation": "'关好' (guān hǎo) = zamknąć dobrze/poprawnie. '好' jako komplement = zrobić właściwie/należycie. '做好' (zrobić dobrze), '准备好' (przygotować się dobrze), '收好' (schować porządnie), '放好' (odłożyć na miejsce). '好' dodaje sens 'zadowalające zakończenie'. '饭做好了' = jedzenie gotowe (zrobione dobrze). '你准备好了吗？' = jesteś gotowy? (świetnie przygotowany?)."
            },
            {
                "id": "pc_vra4",
                "question": "我找了半天，终于找 _____ 了。",
                "translation": "(Szukałem pół dnia, w końcu [znalazłem])",
                "options": ["到", "好", "完", "见"],
                "correct": "到",
                "explanation": "'找到' (zhǎo dào) = szukać i ZNALEŹĆ. '到' jako komplement = osiągnąć cel/dojść do rezultatu. '看到' (zobaczyć — sukces widzenia), '听到' (usłyszeć — sukces słyszenia), '买到' (kupić — udało się kupić), '学到' (nauczyć się skutecznie). '到' dodaje sens SUKCESU — akcja zakończyła się POZYTYWNIE. '没找到' = nie znalazłem (próbowałem, ale się nie udało)."
            },
            {
                "id": "pc_vra5",
                "question": "你听 _____ 外面有人叫你吗？",
                "translation": "(Czy [słyszysz], że na zewnątrz ktoś cię woła?)",
                "options": ["见", "到", "懂", "完"],
                "correct": "见",
                "explanation": "'听见' (tīng jiàn) = usłyszeć (dźwięk dotarł do uszu). '见' jako komplement = percypować (zmysłami). RÓŻNICA: '听见' = usłyszeć (fizycznie), '听到' = usłyszeć (dowiedzieć się), '听懂' = zrozumieć słuchając. '看见' (zobaczyć — wzrokiem), '看到' (zobaczyć — napotkać). '你听见了吗？' = słyszałeś to? (dźwięk), '你听到了吗？' = słyszałeś o tym? (informacja)."
            },
            {
                "id": "pc_vra6",
                "question": "这个字写 _____ 了，要重写。",
                "translation": "(Ten znak [napisano błędnie], trzeba przepisać)",
                "options": ["错", "对", "好", "完"],
                "correct": "错",
                "explanation": "'写错' (xiě cuò) = napisać błędnie. '错' jako komplement = źle/błędnie. '说错' (powiedzieć źle), '做错' (zrobić błędnie), '买错' (kupić nie to co trzeba), '走错' (pójść nie tą drogą). PRZECIWIEŃSTWO: '写对' (napisać poprawnie), '说对' (powiedzieć prawidłowo). '对不起，我说错了' (przepraszam, pomyliłem się mówiąc) — to zdanie jest ZŁOTEM w codziennym chińskim!"
            },
            {
                "id": "pc_vra7",
                "question": "衣服洗 _____ 了。",
                "translation": "(Ubrania [wyprały się na czysto/wyschły])",
                "options": ["干净", "完", "好", "到"],
                "correct": "干净",
                "explanation": "'洗干净' (xǐ gānjìng) = wyprać do czysta. '干净' (gānjìng) = czysty — DWUZNAKOWY komplement rezultatywny! Niektóre komplementy mają DWA znaki: '弄清楚' (wyjaśnić dokładnie), '想明白' (przemyśleć i zrozumieć), '说清楚' (wyjaśnić jasno). '洗干净了吗？' = czy jest czyste? '你把这件事说清楚' (wyjaśnij tę sprawę jasno). Dwuznakowe komplementy są MOCNIEJSZE."
            },
            {
                "id": "pc_vra8",
                "question": "他把钱花 _____ 了。",
                "translation": "(On [wydał wszystkie] pieniądze)",
                "options": ["光", "完", "好", "到"],
                "correct": "光",
                "explanation": "'花光' (huā guāng) = wydać do cna/wydać wszystko. '光' jako komplement = doszczętnie/do zera. MOCNIEJSZE niż '完'! '吃光' (zjeść doszczętnie), '用光' (zużyć kompletnie), '卖光' (wyprzedać do końca). '光' zawiera obraz PUSTKI — nic nie zostało. '票卖光了' (bilety wyprzedane), '纸用光了' (papier się skończył). '光' = '完' + emocja 'nic nie zostało!'"
            },
            {
                "id": "pc_vra9",
                "question": "我把这首歌听 _____ 了。",
                "translation": "(Słuchałem tej piosenki tak długo, że mi się [znudziła])",
                "options": ["腻", "完", "好", "到"],
                "correct": "腻",
                "explanation": "'听腻' (tīng nì) = przesłuchać/znudzić się słuchając. '腻' (nì) = znudzony/przesycony — komplement EMOCJONALNY! '吃腻了' (zjadłem tyle, że mam dość), '看腻了' (naoglądałem się do przesytu). '腻' wyraża PRZESYT — to jak polskie 'mam tego dosyć'. Komplementy emocjonalne są KOLOROWYM elementem chińskiego — '玩够了' (nabawiłem się do syta), '哭够了' (napłakałem się do syta)."
            },
            {
                "id": "pc_vra10",
                "question": "这个问题我想 _____ 了。",
                "translation": "(Ten problem [przemyślałem i zrozumiałem])",
                "options": ["通", "到", "好", "完"],
                "correct": "通",
                "explanation": "'想通' (xiǎng tōng) = przemyśleć i ZROZUMIEĆ / pogodzić się. '通' = przejść przez / być drożnym. '想通了' = przeanalizowałem i doszedłem do wniosku / pogodziłem się. '你想通了吗？' = przemyślałeś i zrozumiałeś? / pogodziłeś się? Inne: '说通' (przekonać mówiąc), '打通' (dodzwonić się), '走通' (przejść na wylot). '通' sugeruje PRZEŁOM mentalny!"
            },
            {
                "id": "pc_vra11",
                "question": "风把树叶吹 _____ 了。",
                "translation": "(Wiatr [zdmuchnął] liście)",
                "options": ["走", "来", "到", "完"],
                "correct": "走",
                "explanation": "'吹走' (chuī zǒu) = zdmuchnąć (coś odeszło). '走' jako komplement = odejść/oddalić się (rezultat). '拿走' (zabrać), '带走' (zabrać ze sobą), '赶走' (przegonić), '搬走' (wyprowadzić się). '走' w komplementach oznacza, że coś ODESZŁO/ZNIKNĘŁO. '他搬走了' (wyprowadził się), '风把帽子吹走了' (wiatr porwał kapelusz). '走' = '去' (odejść), ale jako komplement jest NATURALNIEJSZY."
            },
            {
                "id": "pc_vra12",
                "question": "电话打 _____ 了。",
                "translation": "(Telefon [dodzwonił się/połączenie zostało nawiązane])",
                "options": ["通", "到", "好", "完"],
                "correct": "通",
                "explanation": "'打通' (dǎ tōng) = dodzwonić się. '通' = przejść / być połączonym. '电话打通了' = połączenie nawiązane! '打不通' = nie mogę się dodzwonić (linia zajęta/brak sygnału). '这条路走不通' = ta droga jest nieprzejezdna. '这个道理我想通了' = zrozumiałem tę zasadę. '通' wyraża SUKCES w nawiązaniu POŁĄCZENIA — fizycznego lub mentalnego."
            },
            {
                "id": "pc_vra13",
                "question": "那个蛋糕被孩子们吃 _____ 了。",
                "translation": "(To ciasto zostało [zjedzone na puste] przez dzieci)",
                "options": ["光", "完", "好", "到"],
                "correct": "光",
                "explanation": "'吃光' tu w STRONIE BIERNEJ: '被孩子们吃光了' = zostało zjedzone doszczętnie przez dzieci. '被' + sprawca + czasownik + komplement + '了'. Komplement rezultatywny ŁĄCZY SIĘ ze stroną bierną! '花瓶被猫打碎了' (wazon został rozbity przez kota — '碎' = rozbić się), '信被撕碎了' (list został podarty na strzępy). Komplement mówi jaki był REZULTAT zdarzenia."
            },
            {
                "id": "pc_vra14",
                "question": "请你把话说 _____ 。",
                "translation": "(Proszę, powiedz [wyraźnie/jasno])",
                "options": ["清楚", "完了", "好了", "对了"],
                "correct": "清楚",
                "explanation": "'说清楚' (shuō qīngchu) = powiedzieć jasno/wyjaśnić. '清楚' = jasny/wyraźny — dwuznakowy komplement. W konstrukcji '把': '把话说清楚' = wyjaśnij, co masz do powiedzenia. '把' + obiekt + czasownik + komplement — klasyczna struktura! '把事情做好' (zrób tę rzecz dobrze), '把字写清楚' (napisz znaki wyraźnie). '清楚' jest MOCNY — żąda PEŁNEJ jasności."
            },
            {
                "id": "pc_vra15",
                "question": "这件衣服穿 _____ 了，不能穿了。",
                "translation": "(To ubranie [zniszczyło się od noszenia], nie można już nosić)",
                "options": ["坏", "好", "完", "到"],
                "correct": "坏",
                "explanation": "'穿坏' (chuān huài) = znosić/zniszczyć przez noszenie. '坏' (huài) jako komplement = zepsuć się/zniszczyć. '弄坏' (zepsuć), '摔坏' (rozbić upuszczając), '用坏' (zniszczyć przez użytkowanie), '气坏了' (wściec się doszczętnie). '坏' wyraża NEGATYWNY rezultat — coś się ZEPSUŁO. '你别把我的东西弄坏了' (nie popsuj moich rzeczy). Komplement '坏' — jeden z najbardziej CODZIENNYCH!"
            }
        ]
    }
]

with open(FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

existing_keys = {c['key'] for c in data}
added = 0
for cat in new_categories:
    if cat['key'] not in existing_keys:
        data.append(cat)
        added += 1
        print(f"Added: {cat['key']}")
    else:
        print(f"Skip (exists): {cat['key']}")

with open(FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nTotal added: {added}")
print(f"Total categories now: {len(data)}")
print(f"Total items: {sum(len(c['items']) for c in data)}")

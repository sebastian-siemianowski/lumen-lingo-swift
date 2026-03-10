#!/usr/bin/env python3
"""Batch 7: Add categories 54-58 to polish_chinese grammar."""
import json, os

FILE = os.path.join(os.path.dirname(__file__), '..', 'LumenLingo', 'LumenLingo',
    'Resources', 'Content', 'polish_chinese', 'grammar_polish_chinese.json')

new_categories = [
    {
        "key": "concession",
        "name": "Ustępstwa i kontrast",
        "description": "让步与转折",
        "iconName": "arrow.triangle.swap",
        "color": "#a78bfa",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_con1",
                "question": "_____ 下雨，他还是来了。",
                "translation": "(Mimo że padało, i tak przyszedł.)",
                "options": ["虽然", "因为", "如果", "所以"],
                "correct": "虽然",
                "explanation": "'虽然' (suīrán) = chociaż / mimo że — wprowadza USTĘPSTWO. '虽然下雨，他还是来了' = mimo deszczu, i tak przyszedł. Struktura: '虽然A，但是/还是B' = chociaż A, ale/i tak B. '虽然' to PIERWSZA część, '但是/还是' to DRUGA (obowiązkowa!). '虽然累，但是很开心' (choć zmęczony, ale szczęśliwy). W polskim: 'chociaż...ale...' — identyczna logika dwuczęściowa."
            },
            {
                "id": "pc_con2",
                "question": "虽然很贵，_____ 我还是买了。",
                "translation": "(Chociaż było drogie, i tak kupiłem.)",
                "options": ["但是", "所以", "因为", "而且"],
                "correct": "但是",
                "explanation": "'但是' (dànshì) = ale / jednak — KONIECZNY partner '虽然'. '虽然...但是...' = chociaż...ale... NIGDY nie mów '虽然A，所以B' ❌ (to błąd logiczny!). '虽然' + '但是' są NIEROZŁĄCZNE jak polskie 'chociaż...ale'. Można opuścić '虽然': '(虽然)很贵，但是我买了' — nadal poprawne. Można opuścić '但是': '虽然很贵，(但是)我还是买了' — też OK. Ale NIE oba naraz."
            },
            {
                "id": "pc_con3",
                "question": "_____ 他不来，我们也开始吧。",
                "translation": "(Nawet jeśli on nie przyjdzie, zacznijmy i tak.)",
                "options": ["即使", "虽然", "因为", "如果"],
                "correct": "即使",
                "explanation": "'即使' (jíshǐ) = nawet jeśli / nawet gdyby — silniejsze niż '虽然'. '即使不来，我们也开始' = nawet jeśli nie przyjdzie, zacznijmy. Różnica: '虽然' = chociaż (FAKT), '即使' = nawet jeśli (HIPOTEZA). '虽然下雨了' (chociaż padało — rzeczywiście padało), '即使下雨' (nawet jeśli będzie padać — może nie będzie). '即使' + '也' = nawet jeśli...to i tak... W polskim: 'nawet gdyby/jeśli'."
            },
            {
                "id": "pc_con4",
                "question": "他汉语说得好，_____ 写得不太好。",
                "translation": "(Mówi dobrze po chińsku, natomiast pisze niezbyt dobrze.)",
                "options": ["不过", "所以", "因为", "而且"],
                "correct": "不过",
                "explanation": "'不过' (búguò) = natomiast / jednakże / ale — ŁAGODNY kontrast. '说得好，不过写得不太好' = mówi dobrze, ale pisze niezbyt. '不过' jest ŁAGODNIEJSZE niż '但是'. Hierarchia: '但是' (ale — neutralne) > '不过' (natomiast — łagodne) > '然而' (jednakże — formalne). W codziennej mowie Chińczycy preferują '不过' — brzmi mniej konfrontacyjnie. W polskim: 'natomiast / aczkolwiek / tyle że'."
            },
            {
                "id": "pc_con5",
                "question": "尽管困难很大，他 _____ 没有放弃。",
                "translation": "(Pomimo ogromnych trudności, nie poddał się.)",
                "options": ["还是", "但是", "所以", "因为"],
                "correct": "还是",
                "explanation": "'尽管' (jǐnguǎn) = pomimo / mimo że — SILNE ustępstwo. '尽管...还是...' = mimo że...i tak... '尽管' jest bardziej literackie niż '虽然'. '尽管困难大，还是没放弃' = mimo trudności, i tak się nie poddał. '还是' (háishi) tu = i tak / wciąż — podkreśla WYTRWAŁOŚĆ. Porównaj: '虽然' = chociaż (neutralne), '尽管' = pomimo/mimo (podkreśla trudność). W polskim: 'pomimo / mimo że / wbrew'."
            },
            {
                "id": "pc_con6",
                "question": "他口语很流利，_____ 语法不太好。",
                "translation": "(Jego wymowa jest płynna, jednak gramatyka niezbyt.)",
                "options": ["然而", "所以", "因为", "而且"],
                "correct": "然而",
                "explanation": "'然而' (rán'ér) = jednak / jednakże — FORMALNY kontrast, styl literacki. '然而' jest używane w esejach, artykułach, przemówieniach. W codziennej rozmowie: '但是' lub '不过'. Hierarchia formalności: '然而' (najwięcej) > '但是' > '不过' > '可是' (najmniej). '然而' zmienia ton zdania na poważny i refleksyjny. W polskim: 'jednakże / niemniej jednak'. '可是' (kěshì) = ale — najbardziej potoczne."
            },
            {
                "id": "pc_con7",
                "question": "_____ 工作很忙，他还是坚持学习。",
                "translation": "(Chociaż jest bardzo zajęty pracą, wciąż się uczy.)",
                "options": ["虽然", "如果", "因为", "所以"],
                "correct": "虽然",
                "explanation": "Powtórzenie '虽然...还是...' w nowym kontekście. '虽然忙，还是坚持学习' = choć zajęty, wciąż się uczy. '坚持' (jiānchí) = wytrwać/upierać się — piękne słowo! '坚持学习' (wytrwale się uczyć) to powiedzenie, które KAŻDY chiński nauczyciel powtarza. '虽然' + '坚持' = choć trudno, nie rezygnuję. Ta kombinacja jest BARDZO popularna w chińskim — podkreśla charakter i determinację."
            },
            {
                "id": "pc_con8",
                "question": "哪怕只有一个人，我 _____ 要讲下去。",
                "translation": "(Nawet gdyby był tylko jeden słuchacz, i tak będę mówił dalej.)",
                "options": ["也", "就", "才", "还"],
                "correct": "也",
                "explanation": "'哪怕' (nǎpà) = nawet gdyby / choćby — NAJSILNIEJSZE ustępstwo. '哪怕...也...' = choćby...to i tak... '哪怕只有一个人，也要讲' = choćby jeden słuchacz, i tak mówię. '哪怕' jest SILNIEJSZE niż '即使'. Hierarchia: '虽然' (chociaż) < '即使' (nawet jeśli) < '哪怕' (choćby nawet). '哪怕下刀子' (choćby noże padały = choćby nie wiem co). W polskim: 'choćby / nawet gdyby' — dramatyczne ustępstwo."
            },
            {
                "id": "pc_con9",
                "question": "他虽然年轻，_____ 很有经验。",
                "translation": "(Chociaż jest młody, ale jest bardzo doświadczony.)",
                "options": ["但", "所以", "而且", "还是"],
                "correct": "但",
                "explanation": "'但' (dàn) = ale — SKRÓCONA forma '但是'. W piśmie '但' i '但是' są wymienne. '虽然年轻，但很有经验' = choć młody, ale doświadczony. W mowie częściej '但是', w piśmie '但' — krócej i eleganciej. UWAGA: '虽然' może stać PRZED lub PO podmiocie: '他虽然年轻' = '虽然他年轻' — oba poprawne. W polskim: 'on, chociaż młody' = 'chociaż jest młody, on' — taka sama elastyczność."
            },
            {
                "id": "pc_con10",
                "question": "她 _____ 漂亮，可是不太友好。",
                "translation": "(Ona jest ładna, ale niezbyt miła.)",
                "options": ["倒是", "虽然", "因为", "而且"],
                "correct": "倒是",
                "explanation": "'倒是' (dào shì) = wprawdzie / co prawda — ustępstwo z ZASKOCZENIEM. '倒是漂亮，可是不友好' = co prawda ładna, ale niezbyt miła. '倒是' implikuje 'przyznaję, ALE...'. '可是' (kěshì) = ale (potoczne). '倒是' dodaje ton 'no dobra, przyznaję' — jak polskie 'owszem/faktycznie jest ładna, ale...'. '倒' (dào) sam = odwrotnie/wręcz przeciwnie. '倒是' = wręcz tak, ALE..."
            },
            {
                "id": "pc_con11",
                "question": "不管多难，我 _____ 要试试。",
                "translation": "(Bez względu na trudności, muszę spróbować.)",
                "options": ["都", "就", "才", "还"],
                "correct": "都",
                "explanation": "'不管...都...' (bùguǎn...dōu...) = bez względu na... — ABSOLUTNE ustępstwo. '不管多难都要试' = bez względu na trudność, spróbuję. '不管' + pytanie/warunek + '都' = niezależnie od X, zawsze Y. '不管谁来都欢迎' (ktokolwiek przyjdzie, jest mile widziany). '不管怎么说都对' (cokolwiek powie, ma rację). W polskim: 'bez względu na / niezależnie od / cokolwiek'. '都' tu = ZAWSZE/we wszystkich przypadkach."
            },
            {
                "id": "pc_con12",
                "question": "无论 _____ 候，他都在学习。",
                "translation": "(O każdej porze on się uczy.)",
                "options": ["什么时", "多少", "怎么", "哪个"],
                "correct": "什么时",
                "explanation": "'无论' (wúlùn) = bez względu na / niezależnie — formalna wersja '不管'. '无论什么时候都在学习' = bez względu na porę, ciągle się uczy. '无论' jest bardziej LITERACKIE niż '不管'. '无论如何' (w każdym razie), '无论谁' (ktokolwiek), '无论什么' (cokolwiek). Struktura: '无论' + zaimek pytający + '都/也'. W polskim: 'niezależnie od / bez względu na' — formalny rejestr, tak jak '无论' w chińskim."
            },
            {
                "id": "pc_con13",
                "question": "话虽这么说，_____ 做起来不容易。",
                "translation": "(Łatwo to powiedzieć, ale w praktyce nie jest łatwo.)",
                "options": ["可", "所以", "因为", "而且"],
                "correct": "可",
                "explanation": "'话虽这么说，可...' = no tak, ale... — potoczne ustępstwo. '话虽这么说' (huà suī zhème shuō) = dosł. słowa choć tak się mówi. '可' = ale (potoczne skrócenie od '可是'). To IDIOM — ustępujesz w słowach, ale kontestujesz w praktyce. W polskim: 'łatwo powiedzieć, ale...' lub 'no tak, ale w praktyce...'. Chińczycy CZĘSTO używają tego w dyskusjach — to dyplomatyczny sposób na niezgodę."
            },
            {
                "id": "pc_con14",
                "question": "就算你说得对，我 _____ 不同意。",
                "translation": "(Nawet jeśli masz rację, i tak się nie zgadzam.)",
                "options": ["也", "就", "才", "都"],
                "correct": "也",
                "explanation": "'就算...也...' (jiùsuàn...yě...) = nawet gdyby...to i tak... — bardzo POTOCZNE ustępstwo. '就算' = licząc nawet / zakładając nawet. '就算知道也不说' (nawet gdybym wiedział, nie powiem). Porównaj formalność: '即使' (formalnie) > '就算' (potocznie) > '哪怕' (dramatycznie). '就算' jest najpopularniejsze w CODZIENNEJ mowie. W polskim: 'nawet gdyby' — neutralne, bez formalności."
            },
            {
                "id": "pc_con15",
                "question": "他嘴上说不要，身体 _____ 很诚实。",
                "translation": "(Ustami mówi 'nie', ale ciało jest szczere. [= wewnętrznie chce])",
                "options": ["却", "就", "才", "都"],
                "correct": "却",
                "explanation": "'却' (què) = ale / a jednak / natomiast — ELEGANCKI kontrast, styl literacki. '嘴上说不要，身体却很诚实' = usta mówią nie, ale ciało jest szczere. '却' stoi PRZED czasownikiem/przymiotnikiem (nie na początku zdania!). '他很聪明，却不努力' (jest bystry, ale się nie stara). '想去，却没时间' (chciałbym iść, ale nie mam czasu). '却' jest bardziej poetyckie niż '但是' — ulubione narzędzie pisarzy."
            }
        ]
    },
    {
        "key": "expressing_purpose",
        "name": "Wyrażanie celu",
        "description": "表达目的",
        "iconName": "target",
        "color": "#f43f5e",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_ep1",
                "question": "我学中文是 _____ 了在中国工作。",
                "translation": "(Uczę się chińskiego po to, żeby pracować w Chinach.)",
                "options": ["为", "因为", "所以", "给"],
                "correct": "为",
                "explanation": "'为了' (wèile) = po to, żeby / w celu — PODSTAWOWY sposób wyrażania celu. '为了在中国工作' = po to, żeby pracować w Chinach. '为了' + CEL stoi zwykle NA POCZĄTKU zdania. '为了健康，我每天运动' (dla zdrowia ćwiczę codziennie). '为了省钱，不买新手机' (żeby zaoszczędzić, nie kupuję nowego telefonu). W polskim: 'żeby / aby / po to, żeby'. '为了' = 'dla/w celu/żeby'."
            },
            {
                "id": "pc_ep2",
                "question": "我来这里是来 _____ 中文的。",
                "translation": "(Przyjechałem tu uczyć się chińskiego.)",
                "options": ["学", "教", "说", "写"],
                "correct": "学",
                "explanation": "'来 + V' = przyjść, żeby + czynność — PROSTY sposób wyrażania celu. '来学中文' = przyjść uczyć się chińskiego. '来' tu nie oznacza tylko ruchu, ale CEL podróży. '我来帮你' (przyszedłem ci pomóc), '他来找你' (przyszedł cię szukać). Struktura: V₁ (ruch) + V₂ (cel). '去买东西' (iść kupić rzeczy), '出去吃饭' (wyjść zjeść). W polskim: 'przyszedłem + bezokolicznik' — identyczna logika."
            },
            {
                "id": "pc_ep3",
                "question": "_____ 了你，我什么都愿意做。",
                "translation": "(Dla ciebie zrobię wszystko.)",
                "options": ["为", "给", "对", "跟"],
                "correct": "为",
                "explanation": "'为了你' = dla ciebie / ze względu na ciebie — '为了' + osoba = motywacja osobowa. '为了你什么都愿意做' = dla ciebie zrobię wszystko. '为了' może wskazywać CEL lub MOTYWACJĘ (osobę). '为了家人努力工作' (dla rodziny ciężko pracuję). '为了孩子' (dla dziecka/dzieci). W polskim: 'dla + osoba' — identycznie. UWAGA: '为了' ≠ '因为' — '为了' = cel (dla), '因为' = przyczyna (ponieważ)."
            },
            {
                "id": "pc_ep4",
                "question": "他存钱是 _____ 买车。",
                "translation": "(Oszczędza pieniądze, żeby kupić samochód.)",
                "options": ["为了", "因为", "所以", "可是"],
                "correct": "为了",
                "explanation": "'存钱为了买车' = oszczędza, żeby kupić samochód. '存' (cún) = oszczędzać/odkładać. Tu '为了' stoi PO czynności — też poprawne! Szyk: '为了A而B' lub 'B是为了A'. '工作是为了生活' (pracuję, żeby żyć) vs '为了生活而工作' (żeby żyć, pracuję). Oba poprawne, różny nacisk. W polskim: 'oszczędza, żeby...' lub 'żeby..., oszczędza' — podobna elastyczność szyku."
            },
            {
                "id": "pc_ep5",
                "question": "我特意来 _____ 你的。",
                "translation": "(Przyszedłem specjalnie, żeby cię zobaczyć.)",
                "options": ["看", "找", "问", "帮"],
                "correct": "看",
                "explanation": "'特意来看你' = specjalnie przyszedłem cię zobaczyć. '特意' (tèyì) = specjalnie/celowo — wzmacnia cel. '来看' = przyjść zobaczyć (cel wizyty). '特意' + V = zrobiłem X SPECJALNIE. '特意准备了礼物' (specjalnie przygotowałem prezent). '的' na końcu podkreśla, że TO WŁAŚNIE był cel. W polskim: 'specjalnie/celowo przyszedłem, żeby...' — identyczny nacisk na intencjonalność."
            },
            {
                "id": "pc_ep6",
                "question": "他买了花 _____ 送给女朋友。",
                "translation": "(Kupił kwiaty, żeby dać dziewczynie.)",
                "options": ["来", "去", "为了", "给"],
                "correct": "来",
                "explanation": "'买花来送' = kupić kwiaty, żeby dać — '来' jako łącznik celu. 'V₁ + 来 + V₂' = robię V₁, żeby V₂. '来' tu = 'po to, żeby' (nie 'przyjść'!). '用筷子来吃' (używać pałeczek do jedzenia), '找机会来练习' (szukać okazji, żeby poćwiczyć). '来' w tej funkcji jest POTOCZNE i naturalne. W polskim: kupił, żeby dać — spójnik 'żeby' łączy dwa cele."
            },
            {
                "id": "pc_ep7",
                "question": "_____ 不迟到，我六点就起床了。",
                "translation": "(Żeby się nie spóźnić, wstałem o szóstej.)",
                "options": ["为了", "因为", "虽然", "如果"],
                "correct": "为了",
                "explanation": "'为了不迟到' = żeby się nie spóźnić — '为了' + NEGACJA = żeby NIE... '为了不让他失望' (żeby go nie rozczarować), '为了不吵到别人' (żeby nie przeszkadzać innym). '为了' może wprowadzać cel NEGATYWNY (unikanie). W polskim: 'żeby nie...' — identycznie. '为了不...' jest BARDZO częste: '为了不生病' (żeby nie zachorować), '为了不浪费时间' (żeby nie marnować czasu)."
            },
            {
                "id": "pc_ep8",
                "question": "她省吃俭用，_____ 是为了供孩子上大学。",
                "translation": "(Oszczędza na jedzeniu i wydatkach, po to żeby sfinansować dziecku studia.)",
                "options": ["都", "就", "才", "也"],
                "correct": "都",
                "explanation": "'省吃俭用' (shěng chī jiǎn yòng) = oszczędzać na wszystkim (idiom: oszczędzać jedzenie, ograniczać wydatki). '都是为了' = wszystko po to, żeby. '供...上大学' = finansować studia. '供' (gōng) = utrzymywać/finansować komuś. To wzruszający obraz CHIŃSKIEGO rodzicielstwa — rodzice poświęcają wszystko dla edukacji dzieci. '都是为了你' (wszystko dla ciebie) — zdanie, które KAŻDE chińskie dziecko słyszało."
            },
            {
                "id": "pc_ep9",
                "question": "我打电话 _____ 告诉你一个好消息。",
                "translation": "(Dzwonię, żeby przekazać ci dobrą wiadomość.)",
                "options": ["是为了", "因为", "所以", "但是"],
                "correct": "是为了",
                "explanation": "'是为了' = jest po to, żeby — '是' wzmacnia cel. '打电话是为了告诉你' = dzwonię PO TO, żeby ci powiedzieć. '是' przed '为了' dodaje EMFAZĘ — podkreśla, że to WŁAŚNIE TEN cel. Porównaj: '打电话为了告诉你' (dzwonię, żeby powiedzieć — neutralne), '打电话是为了告诉你' (dzwonię WŁAŚNIE PO TO, żeby powiedzieć — z naciskiem). W polskim: 'dzwonię PO TO, żeby...' vs 'dzwonię, żeby...'."
            },
            {
                "id": "pc_ep10",
                "question": "他拼命工作，_____ 的是让家人过好日子。",
                "translation": "(Haruje jak wół, celem jest zapewnienie rodzinie dobrego życia.)",
                "options": ["为", "因", "由", "由于"],
                "correct": "为",
                "explanation": "'为的是' (wèi de shì) = celem jest / po to, żeby — LITERACKIE wyrażenie celu. '拼命工作' (pīnmìng gōngzuò) = pracować na zabój. '为的是' stoi MIĘDZY wysiłkiem a celem — tworzy dramatyczny efekt. '为的是' jest bardziej wzruszające niż '为了' — podkreśla POŚWIĘCENIE. '努力学习，为的是有个好未来' (ciężko się uczę, żeby mieć dobrą przyszłość). W polskim: 'po to, żeby / w jednym celu' — uroczysty ton."
            },
            {
                "id": "pc_ep11",
                "question": "我们必须早点儿出发，_____ 赶上飞机。",
                "translation": "(Musimy wcześniej wyruszyć, żeby zdążyć na samolot.)",
                "options": ["以便", "因为", "所以", "但是"],
                "correct": "以便",
                "explanation": "'以便' (yǐbiàn) = żeby / tak aby — FORMALNY łącznik celu. '以便赶上飞机' = tak aby zdążyć na samolot. '以便' jest formalne — używane w piśmie, na spotkaniach, w instrukcjach. '请提前通知，以便安排' (proszę powiadomić wcześniej, abyśmy mogli zorganizować). W codziennej mowie: '为了' lub '好+V'. Hierarchia formalności: '以便' (pisemne) > '为了' (neutralne) > '好' (potoczne). W polskim: 'ażeby / tak aby' — formalnie."
            },
            {
                "id": "pc_ep12",
                "question": "早点儿睡觉，_____ 明天有精神。",
                "translation": "(Połóż się wcześniej, żebyś jutro miał energię.)",
                "options": ["好", "为了", "以便", "因为"],
                "correct": "好",
                "explanation": "'好' (hǎo) po zdaniu = żeby / tak żeby — POTOCZNY łącznik celu. '早睡，好明天有精神' = śpij wcześniej, żebyś jutro był rześki. '好' po V₁ = żeby V₂ mogło nastąpić. '你快说，好我们知道' (mów szybko, żebyśmy wiedzieli). '好' jest bardziej NATURALNE w mowie niż '为了' w prostych kontekstach. To jak polskie 'żeby/ żebyś' w potocznej mowie. '赶紧走，好赶上车' (idź szybko, żeby zdążyć na autobus)."
            },
            {
                "id": "pc_ep13",
                "question": "我是 _____ 着帮忙的心来的。",
                "translation": "(Przyszedłem z zamiarem pomocy.)",
                "options": ["抱", "拿", "带", "有"],
                "correct": "抱",
                "explanation": "'抱着...的心' (bào zhe...de xīn) = z zamiarem / z sercem pełnym... '抱着帮忙的心' = z zamiarem pomocy. '抱' = trzymać/obejmować, '着' = w trakcie. Idiomatyczne wyrażenie celu przez METAFORĘ serca. '抱着学习的态度' (z nastawieniem do nauki), '抱着希望' (z nadzieją). To piękny, POETYCKI sposób mówienia o celach — nie suchy '为了', ale emocjonalny obraz. W polskim: 'z zamiarem / z zamysłem' — też formalnie."
            },
            {
                "id": "pc_ep14",
                "question": "我们要制定计划，_____ 免浪费时间。",
                "translation": "(Musimy zrobić plan, żeby nie marnować czasu.)",
                "options": ["以", "为了", "因为", "不"],
                "correct": "以",
                "explanation": "'以免' (yǐmiǎn) = żeby uniknąć / żeby nie — formalny cel NEGATYWNY. '以免浪费时间' = żeby nie marnować czasu. '以免' = 'żeby uniknąć'. '带伞，以免淋雨' (weź parasol, żeby nie zmoknąć). '请提前预约，以免久等' (proszę zarezerwować, żeby nie czekać długo). '以免' jest formalne — w mowie: '免得' (miǎnde) — potoczny odpowiednik. '别去了，免得迟到' (nie idź, żebyś się nie spóźnił)."
            },
            {
                "id": "pc_ep15",
                "question": "他故意说错，_____ 的是逗大家笑。",
                "translation": "(Celowo powiedział źle, żeby rozśmieszyć wszystkich.)",
                "options": ["为", "因", "要", "是"],
                "correct": "为",
                "explanation": "'故意' (gùyì) = celowo/specjalnie (w negatywnym sensie). '为的是' = po to, żeby. '逗大家笑' (dòu dàjiā xiào) = rozśmieszyć wszystkich. '逗' = drażnić/bawić, '笑' = śmiać się. Cała struktura: '故意A，为的是B' = celowo zrobił A, żeby B. PODSUMOWANIE celów: '为了' (neutralne), '是为了' (emfatyczne), '为的是' (literackie), '以便' (formalne), '好' (potoczne), '以免/免得' (negatywne). Opanuj je wszystkie!"
            }
        ]
    },
    {
        "key": "approximate_numbers",
        "name": "Liczby przybliżone",
        "description": "概数表达",
        "iconName": "number.circle",
        "color": "#14b8a6",
        "level": "beginner",
        "items": [
            {
                "id": "pc_an1",
                "question": "他大概 _____ 十岁。",
                "translation": "(On ma mniej więcej trzydzieści lat.)",
                "options": ["三", "二", "两", "几"],
                "correct": "三",
                "explanation": "'大概三十岁' = mniej więcej 30 lat. '大概' (dàgài) = mniej więcej / około — najprostszy sposób na przybliżenie. '大概' + liczba = około X. '大概五个人' (około 5 osób), '大概两个小时' (około 2 godzin). W polskim: 'mniej więcej / około / jakieś'. UWAGA: '二十' a nie '两十' — '两' używamy przy klasyfikatorach, '二' w liczbach wielocyfrowych (20, 200...). Ale '两百' i '二百' — oba OK."
            },
            {
                "id": "pc_an2",
                "question": "教室里有 _____ 个学生。",
                "translation": "(W sali jest kilku/kilkunastu studentów.)",
                "options": ["几", "些", "多", "大"],
                "correct": "几",
                "explanation": "'几个' (jǐ gè) = kilka — nieokreślona MAŁA liczba (zazwyczaj 2-9). '几个学生' = kilku studentów. '几' przed klasyfikatorem = kilka/kilku. '几天' (kilka dni), '几本书' (kilka książek), '几次' (kilka razy). Porównaj: '几' w pytaniu = ile? ('你几岁？' = ile masz lat?), '几' w zdaniu oznajmującym = kilka. W polskim: 'kilka/parę'. '几十个' = kilkadziesiąt, '几百个' = kilkaset."
            },
            {
                "id": "pc_an3",
                "question": "来了二三 _____ 个人。",
                "translation": "(Przyszło dwadzieścia-trzydzieści osób.)",
                "options": ["十", "百", "千", "万"],
                "correct": "十",
                "explanation": "SĄSIEDNIE LICZBY = przybliżenie! '二三十个人' = 20-30 osób. W chińskim dwie KOLEJNE liczby obok siebie = 'miedzy X a Y'. '三四个' (3-4), '五六天' (5-6 dni), '七八百' (700-800). To ELEGANCKI sposób na przybliżenie — bez 'około'. W polskim: 'dwadzieścia-trzydzieści' — też łączymy sąsiednie. ZASADA: tylko sąsiednie! '三五个' ❌ (3 i 5 nie sąsiadują) → '三四个' ✓ lub '四五个' ✓."
            },
            {
                "id": "pc_an4",
                "question": "这本书一百 _____ 块钱。",
                "translation": "(Ta książka kosztuje ponad sto yuanów.)",
                "options": ["多", "几", "些", "大"],
                "correct": "多",
                "explanation": "'一百多块' = ponad 100 yuanów — '多' po liczbie okrągłej = ponad/z górką. '多' (duō) = więcej/ponad. '三十多岁' (ponad 30 lat = 31-39), '一千多块' (ponad 1000 yuanów). POZYCJA '多' ma znaczenie: '一百多块' (100+, do ~199), '一百零几块' (100 i kilka, 101-109). UWAGA: '多' PO liczbie = ponad, '多' PRZED przymiotnikiem = jak/co za. Kontekst rozstrzygaBERIN!"
            },
            {
                "id": "pc_an5",
                "question": "他 _____ 四十岁了吧。",
                "translation": "(Ma chyba koło czterdziestki.)",
                "options": ["快", "大", "很", "太"],
                "correct": "快",
                "explanation": "'快四十岁了' = prawie 40 lat / blisko czterdziestki. '快' (kuài) = prawie/zaraz — wskazuje ZBLIŻANIE SIĘ do liczby. '快十二点了' (prawie dwunasta), '快一百个了' (prawie sto). '吧' na końcu = chyba/prawdopodobnie — dodaje domysł. '快...了吧' = chyba ma prawie X. W polskim: 'coś koło / niedaleko / blisko'. '快' jest bardzo POTOCZNE i naturalne w codziennej mowie."
            },
            {
                "id": "pc_an6",
                "question": "这个城市有两千 _____ 万人。",
                "translation": "(To miasto ma około 20 milionów ludzi.)",
                "options": ["多", "几", "来", "些"],
                "correct": "多",
                "explanation": "'两千多万' = ponad 20 milionów — '多' w DUŻYCH liczbach. System chiński: 万 (wàn) = 10 000. '两千万' = 2000 × 10 000 = 20 milionów. '两千多万' = ponad 20 milionów. WAŻNE: chiński liczy w '万' (dziesiątkach tysięcy), nie w milionach! To OGROMNA różnica z polskim. '一百万' = 100 万 = 1 milion. '一千万' = 1000 万 = 10 milionów. Trzeba PRZELICZAĆ w głowie!"
            },
            {
                "id": "pc_an7",
                "question": "差不多有 _____ 百人参加了会议。",
                "translation": "(Około pięciuset osób wzięło udział w spotkaniu.)",
                "options": ["五", "几", "多", "些"],
                "correct": "五",
                "explanation": "'差不多五百人' = mniej więcej 500 osób. '差不多' (chà bu duō) = mniej więcej / prawie — BARDZO popularne przybliżenie. '差不多' jest bardziej PRECYZYJNE niż '大概' — sugeruje bliżej prawdy. '差不多两个小时' (mniej więcej 2 godziny), '差不多一万块' (około 10 000 yuanów). W potocznej mowie Chińczycy mówią '差不多' NIEZWYKLE często — to jedno z najczęstszych wyrażeń w języku."
            },
            {
                "id": "pc_an8",
                "question": "他 _____ 来 个人就够了。",
                "translation": "(Wystarczy, żeby przyszło jakichś dziesięciu ludzi.)",
                "options": ["十", "来", "几", "多"],
                "correct": "十",
                "explanation": "PUŁAPKA! '十来个人' = jakichś dziesięciu. '来' (lái) po liczbie okrągłej = około/jakieś — POTOCZNY przybliżacz. '二十来个' (jakichś dwadzieścia), '三十来岁' (koło trzydziestki). '来' działa TYLKO po okrągłych liczbach (10, 20, 30...). '三来个' ❌ — nie działa z małymi liczbami. '来' w tej funkcji = mniej więcej. UWAGA: to zupełnie inna funkcja '来' niż 'przyjść'! Kontekst rozstrzyga."
            },
            {
                "id": "pc_an9",
                "question": "我等了你 _____ 半个小时。",
                "translation": "(Czekałem na ciebie prawie pół godziny.)",
                "options": ["将近", "大概", "差不多", "快"],
                "correct": "将近",
                "explanation": "'将近' (jiāngjìn) = prawie / blisko — formalne przybliżenie 'od dołu'. '将近半个小时' = prawie pół godziny. '将近' implikuje: JESZCZE NIE osiągnęło tej liczby, ale blisko. '将近一千人' (blisko tysiąca osób), '将近三年' (prawie trzy lata). Porównaj: '大概' = w okolicach, '差不多' = mniej więcej, '将近' = prawie/blisko (trochę mniej). W polskim: 'blisko / prawie / bez mała'."
            },
            {
                "id": "pc_an10",
                "question": "我们班有四十 _____ 个学生。",
                "translation": "(W naszej klasie jest czterdziestu paru studentów.)",
                "options": ["几", "多", "来", "些"],
                "correct": "几",
                "explanation": "'四十几个' = czterdzieści kilka (41-49) — '几' po dziesiątkach = kilka jednostek powyżej. '三十几岁' (30-kilka lat), '二十几块' (20-kilka yuanów). UWAGA: '四十多个' = ponad 40 (szersze: 41-59?), '四十几个' = 41-49 (precyzyjne). '几' daje WĘŻSZY zakres niż '多'. W polskim: 'czterdzieści kilka' vs 'ponad czterdzieści' — '几' = 'kilka', '多' = 'ponad'. Subtelna, ale w użyteczna różnica."
            },
            {
                "id": "pc_an11",
                "question": "这条路长 _____ 五公里左右。",
                "translation": "(Ta droga ma około pięciu kilometrów.)",
                "options": ["约", "很", "太", "最"],
                "correct": "约",
                "explanation": "'约五公里' (yuē wǔ gōnglǐ) = około 5 km — '约' jest FORMALNY. '左右' (zuǒyòu) = w przybliżeniu / mniej więcej (dosł. lewo-prawo). '约...左右' = podwójne przybliżenie (redundantne, ale akceptowane). '约' sam wystarczy: '约五百人' (około 500 osób). '左右' sam wystarczy: '五公里左右' (około 5 km). Razem: wzmocniony przybliżeniowy ton. W polskim: 'około/jakieś 5 km'."
            },
            {
                "id": "pc_an12",
                "question": "这件事发生在十年 _____ 。",
                "translation": "(To wydarzyło się mniej więcej dziesięć lat temu.)",
                "options": ["前后", "以后", "以前", "左右"],
                "correct": "前后",
                "explanation": "'十年前后' = w okolicach dziesięciu lat temu — '前后' (qiánhòu) = w przybliżeniu (dosł. przed-po). '前后' po czasie = MNIEJ WIĘCEJ w tym okresie. '三月前后' (w okolicach marca), '春节前后' (w okolicach Nowego Roku). '前后' obejmuje czas PRZED i PO — jak polskie 'w okolicach / mniej więcej'. Porównaj: '十年前' (dokładnie 10 lat temu), '十年前后' (mniej więcej 10 lat temu)."
            },
            {
                "id": "pc_an13",
                "question": "他身高一米七 _____ 。",
                "translation": "(Ma jakieś metr siedemdziesiąt wzrostu.)",
                "options": ["左右", "多", "几", "来"],
                "correct": "左右",
                "explanation": "'一米七左右' = około 1,70 m — '左右' po liczbie = w przybliżeniu. '左右' (zuǒyòu) dosłownie 'lewo-prawo' = mniej więcej / plus minus. Bardzo NATURALNE w mowie. '三十岁左右' (koło trzydziestki), '五点左右' (około piątej). '左右' stoi ZAWSZE po liczbie. W polskim: 'jakieś / koło / plus minus'. '左右' jest NAJPOPULARNIEJSZYM przybliżaczem w codziennej mowie chińskiej."
            },
            {
                "id": "pc_an14",
                "question": "这里 _____ 有上千人。",
                "translation": "(Jest tu ponad tysiąc osób.)",
                "options": ["估计", "大概", "可能", "差不多"],
                "correct": "估计",
                "explanation": "'估计' (gūjì) = szacuję / oceniam że — SUBIEKTYWNE przybliżenie. '估计有上千人' = szacuję, że ponad tysiąc. '上千' (shàng qiān) = ponad tysiąc. '估计' dodaje ton OSOBISTEJ oceny — to MÓJ szacunek. '估计明天会下雨' (szacuję, że jutro będzie padać). W polskim: 'szacuję / moim zdaniem jakieś'. '估计' jest bardziej osobiste niż '大概' (obiektywne mniej więcej)."
            },
            {
                "id": "pc_an15",
                "question": "这部电影有两个 _____ 小时。",
                "translation": "(Ten film trwa dwie i pół godziny.)",
                "options": ["半", "多", "来", "几"],
                "correct": "半",
                "explanation": "'两个半小时' = dwie i pół godziny — '半' (bàn) = pół. NIE jest to przybliżenie, ale DOKŁADNA wartość! Ale w praktyce '半' często funkcjonuje jako przybliżenie: '一年半' (półtora roku), '三个半月' (trzy i pół miesiąca). PODSUMOWANIE przybliżeń: '大概/差不多' (mniej więcej), '左右' (w przybliżeniu), '多' (ponad), '几' (kilka), '来' (jakichś), '约/将近' (formalne), '前后' (czasowe). Opanuj je wszystkie!"
            }
        ]
    },
    {
        "key": "sentence_connectors",
        "name": "Łączniki zdań",
        "description": "句子连接词",
        "iconName": "link",
        "color": "#6366f1",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_sc1",
                "question": "_____ 他很忙，所以没来。",
                "translation": "(Ponieważ jest bardzo zajęty, nie przyszedł.)",
                "options": ["因为", "虽然", "如果", "不管"],
                "correct": "因为",
                "explanation": "'因为...所以...' (yīnwèi...suǒyǐ...) = ponieważ...dlatego... — PODSTAWOWY łącznik przyczynowo-skutkowy. '因为忙，所以没来' = bo zajęty, dlatego nie przyszedł. W polskim: 'ponieważ...więc/dlatego'. ZASADA w chińskim: '因为' i '所以' MOGĄ stać razem (oba w jednym zdaniu) — w polskim to dziwne ('ponieważ..., dlatego...'), ale w chińskim NORMALNE i wręcz preferowane!"
            },
            {
                "id": "pc_sc2",
                "question": "他不但聪明，_____ 很努力。",
                "translation": "(On jest nie tylko bystry, ale też bardzo pracowity.)",
                "options": ["而且", "但是", "所以", "因为"],
                "correct": "而且",
                "explanation": "'不但...而且...' (búdàn...érqiě...) = nie tylko...ale też/i jeszcze... — DODAWANIE cech. '不但聪明，而且努力' = nie tylko bystry, ale też pracowity. '而且' dodaje coś PONADTO. '不但好看，而且便宜' (nie tylko ładne, ale i tanie). W polskim: 'nie tylko...ale i/lecz także'. '不但...而且...' sugeruje, że B jest JESZCZE WAŻNIEJSZE niż A — stopniowanie."
            },
            {
                "id": "pc_sc3",
                "question": "_____ 你喜欢，就买吧。",
                "translation": "(Jeśli ci się podoba, to kup.)",
                "options": ["如果", "虽然", "因为", "不管"],
                "correct": "如果",
                "explanation": "'如果...就...' (rúguǒ...jiù...) = jeśli...to... — WARUNEK. '如果喜欢，就买吧' = jeśli podoba, to kup. '如果' wprowadza warunek, '就' wprowadza skutek. '如果下雨，就不去了' (jeśli będzie padać, to nie idę). Porównaj: '如果' (jeśli — neutralne), '要是' (jeżeli — potoczne), '假如' (gdyby — formalne). W polskim: 'jeśli/jeżeli/gdyby...to...'."
            },
            {
                "id": "pc_sc4",
                "question": "他一边吃饭，_____ 看手机。",
                "translation": "(Jednocześnie je i patrzy w telefon.)",
                "options": ["一边", "一面", "就", "又"],
                "correct": "一边",
                "explanation": "'一边...一边...' (yìbiān...yìbiān...) = jednocześnie...i... — DWA równoczesne działania. '一边吃饭，一边看手机' = je i patrzy w telefon w tym samym czasie. '一边走一边说' (idzie i mówi), '一边听音乐一边写作业' (słucha muzyki i pisze zadanie). W polskim: 'jednocześnie / równocześnie'. '一面...一面...' — formalna wersja '一边...一边...'."
            },
            {
                "id": "pc_sc5",
                "question": "他又高 _____ 帅。",
                "translation": "(Jest i wysoki, i przystojny.)",
                "options": ["又", "也", "就", "才"],
                "correct": "又",
                "explanation": "'又...又...' (yòu...yòu...) = i...i... / zarówno...jak i... — DWE cechy jednocześnie. '又高又帅' = i wysoki, i przystojny. '又便宜又好' (i tanie, i dobre), '又大又甜' (i duże, i słodkie). '又...又...' podkreśla WIELE pozytywów (lub negatywów). '又累又饿' (i zmęczony, i głodny). W polskim: 'i...i...' lub 'zarówno...jak i...'. UWAGA: '又' ≠ '也' — '又' łączy cechy, '也' = też."
            },
            {
                "id": "pc_sc6",
                "question": "你先做功课，_____ 去玩。",
                "translation": "(Najpierw odrabiaj lekcje, potem idź się bawić.)",
                "options": ["然后", "因为", "虽然", "但是"],
                "correct": "然后",
                "explanation": "'先...然后/再...' (xiān...ránhòu/zài...) = najpierw...potem... — SEKWENCJA czasowa. '先做功课，然后去玩' = najpierw lekcje, potem zabawa. '然后' (ránhòu) = potem/następnie. '先吃饭，然后看电影' (najpierw jedzenie, potem kino). '再' (zài) też = potem: '先洗手，再吃饭' (najpierw umyj ręce, potem jedz). '然后' jest bardziej neutrale, '再' bardziej potoczne."
            },
            {
                "id": "pc_sc7",
                "question": "他不是老师，_____ 是学生。",
                "translation": "(On nie jest nauczycielem, lecz studentem.)",
                "options": ["而", "但", "可", "和"],
                "correct": "而",
                "explanation": "'不是A，而是B' (bú shì...ér shì...) = nie A, lecz B — KOREKTA/przeciwstawienie. '不是老师，而是学生' = nie nauczyciel, lecz student. '而' (ér) = lecz/ale/a — łagodny kontrast. '不是不想，而是不能' (nie żebym nie chciał, lecz nie mogę). W polskim: 'nie...lecz/ale/a...'. '而' jest ELEGANCKIE — w mowie często '而是' → po prostu '是': '不是我，是他' (nie ja, to on)."
            },
            {
                "id": "pc_sc8",
                "question": "我 _____ 喜欢唱歌，也喜欢跳舞。",
                "translation": "(Zarówno lubię śpiewać, jak i tańczyć.)",
                "options": ["既", "又", "都", "还"],
                "correct": "既",
                "explanation": "'既...也/又...' (jì...yě/yòu...) = zarówno...jak i... — FORMALNE łączenie. '既喜欢唱歌，也喜欢跳舞' = lubię zarówno śpiew, jak i taniec. '既...也...' jest bardziej formalne niż '又...又...'. '既聪明又努力' (zarówno bystry, jak i pracowity). Różnica: '又...又...' = codziennie, '既...也/又...' = formalnie/pisemnie. W polskim: 'zarówno...jak i...' — też formalny rejestr."
            },
            {
                "id": "pc_sc9",
                "question": "_____ 不下雨就出去玩。",
                "translation": "(O ile nie będzie padać, to pójdziemy się bawić.)",
                "options": ["只要", "只有", "如果", "虽然"],
                "correct": "只要",
                "explanation": "'只要' (zhǐyào) = o ile / pod warunkiem, że / wystarczy, że — WARUNEK WYSTARCZAJĄCY. '只要不下雨就出去' = wystarczy, że nie pada, i wychodzimy. Porównaj: '只要' (wystarczy, że) vs '只有' (tylko jeśli). '只要努力就能成功' (wystarczy się starać, a odniesiesz sukces). '只有' jest silniejszy — JEDYNY warunek. '只要' = łatwiejszy warunek. W polskim: 'o ile / pod warunkiem / byle tylko'."
            },
            {
                "id": "pc_sc10",
                "question": "她不仅会说中文，_____ 会说日语。",
                "translation": "(Ona nie tylko mówi po chińsku, ale i po japońsku.)",
                "options": ["还", "就", "才", "都"],
                "correct": "还",
                "explanation": "'不仅...还...' (bùjǐn...hái...) = nie tylko...ale jeszcze... '不仅会中文，还会日语' = nie tylko chiński, ale i japoński. '不仅' = nie tylko (formalna wersja '不但'). '还' = jeszcze/ponadto. '不仅好看，还很便宜' (nie tylko ładne, ale jeszcze tanie). Hierarchia: '不但...而且...' (neutralne) , '不仅...还/而且...' (formalne), '不光...还...' (potoczne). W polskim: 'nie tylko...ale i/co więcej'."
            },
            {
                "id": "pc_sc11",
                "question": "_____ 你不去，我也不去。",
                "translation": "(Skoro ty nie idziesz, to ja też nie idę.)",
                "options": ["既然", "如果", "虽然", "因为"],
                "correct": "既然",
                "explanation": "'既然' (jìrán) = skoro — przyczyna OCZYWISTA/już znana. '既然你不去，我也不去' = skoro nie idziesz, ja też nie. Różnica: '因为' = ponieważ (wyjaśnia przyczynę), '既然' = skoro (przyczyna jest ZNANA obu stronom). '既然知道了，就去做吧' (skoro wiesz, to rób). '既然' implikuje: obaj wiemy, więc nie trzeba tłumaczyć. W polskim: 'skoro / w takim razie / jeśli tak, to'."
            },
            {
                "id": "pc_sc12",
                "question": "他要么看书，_____ 听音乐。",
                "translation": "(Albo czyta, albo słucha muzyki.)",
                "options": ["要么", "还是", "或者", "就"],
                "correct": "要么",
                "explanation": "'要么...要么...' (yàome...yàome...) = albo...albo... — ALTERNATYWA wykluczająca. '要么看书，要么听音乐' = albo czyta, albo słucha. Porównaj: '或者' (lub — niewykluczające), '要么' (albo — wykluczające). '要么现在走，要么等一下' (albo teraz, albo czekaj). '还是' w pytaniu = czy...czy: '你喝茶还是咖啡？' (herbatę czy kawę?). W polskim: 'albo...albo...' vs 'lub' — identyczna różnica."
            },
            {
                "id": "pc_sc13",
                "question": "他越来越胖，_____ 外他还不运动。",
                "translation": "(Jest coraz grubszy, i na dodatek wcale nie ćwiczy.)",
                "options": ["另", "此", "其", "以"],
                "correct": "此",
                "explanation": "'此外' (cǐwài) = ponadto / poza tym / na dodatek — DODAWANIE informacji. '此外他还不运动' = na dodatek nie ćwiczy. '此外' jest FORMALNE — w mowie: '而且' lub '还有'. '另外' (lìngwài) = oprócz tego — podobne, ale bardziej neutralne. '此外' podkreśla DODATKOWY problem/zaletę. W polskim: 'ponadto / poza tym / co więcej'. '再说' (zàishuō) = poza tym — potoczne."
            },
            {
                "id": "pc_sc14",
                "question": "他虽然穷，可是过得很 _____ 。",
                "translation": "(Chociaż jest biedny, żyje bardzo szczęśliwie.)",
                "options": ["快乐", "有钱", "忙碌", "辛苦"],
                "correct": "快乐",
                "explanation": "'可是' (kěshì) = ale / jednak — NAJPOTOCZNIEJSZE 'ale'. '虽然穷，可是很快乐' = choć biedny, ale szczęśliwy. Hierarchia 'ale': '然而' (formalne) > '但是' (neutralne) > '不过' (łagodne) > '可是' (potoczne) > '可' (skrócone). W codziennej mowie Chińczycy najczęściej używają '可是' lub '但是'. '可是' brzmi trochę ŻAŁOŚNIE — jak polskie 'ale no...' lub 'ale przecież...'."
            },
            {
                "id": "pc_sc15",
                "question": "_____ 说你的中文不好，你的发音倒很标准。",
                "translation": "(Nie żeby twój chiński był zły — wymowa akurat jest bardzo standardowa.)",
                "options": ["不是", "虽然", "因为", "如果"],
                "correct": "不是",
                "explanation": "'不是说A，B倒很C' = nie żeby A, B akurat jest C — strukturą CZĘŚCIOWEJ korekty. '不是说不好' = nie żeby był zły (nie twierdzę tego). '倒' (dào) = akurat/wręcz — dodaje zaskoczenie. To dyplomatyczny sposób na mieszaną opinię: najpierw łagodzisz krytykę, potem chwalisz. W polskim: 'nie żeby...ale akurat...'. PODSUMOWANIE łączników: przyczyna (因为所以), kontrast (虽然但是), warunek (如果就), dodawanie (不但而且), sekwencja (先然后)."
            }
        ]
    },
    {
        "key": "idiomatic_expressions",
        "name": "Wyrażenia idiomatyczne",
        "description": "惯用语",
        "iconName": "text.bubble.fill",
        "color": "#ec4899",
        "level": "advanced",
        "items": [
            {
                "id": "pc_ie1",
                "question": "他在公司里吃了不少 _____ 。",
                "translation": "(W firmie wiele się nacierpiał / doznał wielu trudności.)",
                "options": ["苦头", "苦果", "甜头", "甜食"],
                "correct": "苦头",
                "explanation": "'吃苦头' (chī kǔtóu) = cierpieć / doznawać trudności — dosł. 'jeść gorzką głowę'. '吃' w chińskim nie ogranicza się do jedzenia! '吃苦' (cierpieć — jeść gorzkość), '吃亏' (stracić — jeść stratę), '吃惊' (być zaskoczonym — jeść zaskoczenie). Chińczycy JEDZĄ METAFORYCZNIE: emocje, doświadczenia, straty. W polskim: 'połknąć gorzką pigułkę' — podobna metafora jedzenia."
            },
            {
                "id": "pc_ie2",
                "question": "这件事让他丢了 _____ 。",
                "translation": "(Ta sprawa skompromitowała go. / Stracił twarz.)",
                "options": ["脸", "面", "头", "手"],
                "correct": "脸",
                "explanation": "'丢脸' (diū liǎn) = stracić twarz / skompromitować się — KLUCZOWY koncept chiński! '面子' (miànzi) = twarz/reputacja — najważniejszy koncept społeczny. '丢脸' = stracić twarz, '给面子' = okazać szacunek, '没面子' = brak szacunku. W chińskiej kulturze TWARZ to WSZYSTKO. Publiczne krytykowanie kogoś = '让他丢脸' (kazać mu stracić twarz). W polskim: 'stracić twarz' — znaczenie identyczne, ale w Chinach to 10x poważniejsze."
            },
            {
                "id": "pc_ie3",
                "question": "别 _____ 了，快说重点！",
                "translation": "(Nie lej wody, mów do rzeczy!)",
                "options": ["废话", "说话", "闲话", "大话"],
                "correct": "废话",
                "explanation": "'别废话了！' = nie gadaj bzdur / nie lej wody! '废话' (fèihuà) = brednie/bzdury/puste słowa. '废' = zbędny/odpadowy. '废话' jako idiom = mówienie bez sensu. '说废话' (gadać bzdury), '你别废话' (nie gadaj). '重点' (zhòngdiǎn) = sedno/punkt kluczowy. '说重点' = mów do rzeczy. W polskim: 'nie lej wody / nie bądź dziurą w moście / mów do rzeczy'. OSTRZEŻENIE: '废话' jest OSTRY ton!"
            },
            {
                "id": "pc_ie4",
                "question": "他总是 _____ 后炮。",
                "translation": "(On zawsze jest mądry po fakcie.)",
                "options": ["放马", "放空", "打", "开"],
                "correct": "放马",
                "explanation": "'放马后炮' (fàng mǎhòu pào) = strzelać po bitwie / być mądrym po fakcie. Dosłownie: 'odpalać armatę po tym, jak konie odeszły'. '马后炮' to PIĘKNA metafora — działanie SPÓŹNIONE i BEZUŻYTECZNE. W szachach chińskich (象棋) '马后炮' to pozycja armat za koniem. W polskim: 'mądry Polak po szkodzie' — identyczne znaczenie! Chińczycy UWIELBIAJĄ tę metaforę — używaj z humorem."
            },
            {
                "id": "pc_ie5",
                "question": "他把这件事搞 _____ 了。",
                "translation": "(On wszystko poplątał / schrzanił.)",
                "options": ["砸", "糊涂", "乱", "黄"],
                "correct": "砸",
                "explanation": "'搞砸' (gǎo zá) = schrzanić / zepsuć — bardzo POTOCZNE. '搞' = robić (potocznie), '砸' = rozbić/zniszczyć. '把事情搞砸了' = schrzanił sprawę. '搞' w potocznym chińskim jest WSZECHSTRONNY: '搞定' (załatwić), '搞清楚' (wyjaśnić), '搞不懂' (nie rozumieć), '搞错' (pomylić się). W polskim: 'schrzanić / spartaczyć / zepsuć'. '搞' jest jak polskie 'ogarniać' — potoczne i uniwersalne."
            },
            {
                "id": "pc_ie6",
                "question": "这道题让我 _____ 了半天。",
                "translation": "(To zadanie zajęło mi mnóstwo czasu na myślenie.)",
                "options": ["想", "伤脑筋", "费脑子", "动脑"],
                "correct": "伤脑筋",
                "explanation": "'伤脑筋' (shāng nǎojīn) = łamać sobie głowę / boleć od myślenia. Dosł. '伤' (ranić) + '脑筋' (szara komórka). '这个问题很伤脑筋' (ten problem jest bardzo trudny do ogarnięcia). '费脑子' (fèi nǎozi) = kosztować siłę umysłu — podobne. W polskim: 'łamać sobie głowę / suszyć mózg'. Chińskie idiomy UWIELBIAJĄ części ciała: '头疼' (boli głowa → kłopotliwe), '心疼' (boli serce → szkoda)."
            },
            {
                "id": "pc_ie7",
                "question": "他说的话让我 _____ 了一跳。",
                "translation": "(To co powiedział, bardzo mnie zaskoczyło.)",
                "options": ["吓", "跳", "惊", "怕"],
                "correct": "吓",
                "explanation": "'吓了一跳' (xià le yī tiào) = przestraszyć się / podskoczyć z zaskoczenia. Dosł. '吓' (przestraszyć) + '了一跳' (jeden skok). Idiom opisuje FIZYCZNĄ reakcję na zaskoczenie — podskoczenie. '把我吓了一跳' (przestraszył mnie). '吓一跳' = jeden nagły strach. W polskim: 'podskoczyłem ze strachu / serce mi stanęło'. Chińskie idiomy OBRAZUJĄ emocje przez ciało."
            },
            {
                "id": "pc_ie8",
                "question": "别跟我 _____ 弯子！",
                "translation": "(Nie kręć ze mną! / Mów wprost!)",
                "options": ["兜", "绕", "转", "拐"],
                "correct": "兜",
                "explanation": "'兜圈子' (dōu quānzi) = kręcić / owijać w bawełnę. Dosł. 'krążyć w kółko'. '别兜圈子' = nie kręć się wokół tematu. '兜' = krążyć, '圈子' = kółko. To jak polskie 'nie owijaj w bawełnę' lub 'nie kręć'. '说话别兜圈子' (mów wprost, nie kręć). Chińczycy mogą być BARDZO pośredni w komunikacji — '兜圈子' to nazwa tego stylu. Zachodni styl 'wprost' to w Chinach: '直说' (zhí shuō)."
            },
            {
                "id": "pc_ie9",
                "question": "他是个 _____ 包。",
                "translation": "(On jest ciamajdą / niedorajdą.)",
                "options": ["窝囊", "饭", "面", "草"],
                "correct": "窝囊",
                "explanation": "'窝囊包' (wōnang bāo) = ciamajda / niedorajda / mięczak. '窝囊' = żałosny/bezsilny, '包' = torebka (tu: pejoratywny sufiks). To OBRAŹLIWE określenie kogoś słabego i niezdecydowanego. '他真窝囊' (jaki z niego mięczak). Inne obraźliwe '包': '饭桶' (wiadro na ryż = darmozjad), '笨蛋' (głupie jajko = głupek). W polskim: 'ciamajda / łamaga / mięczak'. UWAGA: używaj ostrożnie!"
            },
            {
                "id": "pc_ie10",
                "question": "这件事他 _____ 着呢。",
                "translation": "(On to wie doskonale. / Ma o tym pojęcie.)",
                "options": ["心里有数", "门儿清", "一清二楚", "了如指掌"],
                "correct": "门儿清",
                "explanation": "'门儿清' (ménr qīng) = wiedzieć doskonale / mieć pełną jasność — POTOCZNY idiom. Dosł. 'drzwi jasne' = sytuacja jest przejrzysta jak otwarte drzwi. '他心里门儿清' (doskonale wie, o co chodzi). Inne: '心里有数' (xīnlǐ yǒu shù) = mieć rachubę w sercu = wiedzieć, co robić. '了如指掌' (liǎo rú zhǐ zhǎng) = znać jak własną dłoń. W polskim: 'wiedzieć co i jak / mieć rozeznanie'."
            },
            {
                "id": "pc_ie11",
                "question": "我们走着 _____ 吧。",
                "translation": "(Zobaczymy, jak będzie. / Będziemy grać w miarę jak idzie.)",
                "options": ["瞧", "看", "说", "想"],
                "correct": "瞧",
                "explanation": "'走着瞧' (zǒu zhe qiáo) = zobaczymy / czas pokaże — idiom WYCZEKIWANIA lub GROŹBY. Dosł. 'idąc, patrzeć' = zobaczymy w trakcie drogi. W zależności od tonu: neutralne ('zobaczymy, jak pójdzie') lub groźne ('jeszcze się policzymy!'). '咱们走着瞧！' z gniewem = 'jeszcze zobaczysz!' W polskim: 'zobaczymy / czas pokaże' lub 'jeszcze się policzymy'. Ton głosu decyduje!"
            },
            {
                "id": "pc_ie12",
                "question": "别 _____ 风点火了！",
                "translation": "(Nie podsycaj konfliktów! / Nie dolewaj oliwy do ognia!)",
                "options": ["煽", "放", "点", "吹"],
                "correct": "煽",
                "explanation": "'煽风点火' (shān fēng diǎn huǒ) = wzniecać wiatr i rozpalać ogień = podsycać konflikty. To klasyczny 成语 (chéngyǔ — idiom 4-znakowy). '煽' = dmuchać/wzniecać, '风' = wiatr, '点' = zapalać, '火' = ogień. '他总是煽风点火' (on zawsze podburza). W polskim: 'dolewać oliwy do ognia / dmuchać w żar'. PIĘKNA METAFORA — ogień to konflikt, wiatr to plotki. Chińskie 成语 to POEZJA w codziennym języku."
            },
            {
                "id": "pc_ie13",
                "question": "她 _____ 着鼻子走了。",
                "translation": "(Odeszła obrażona / z podniesioną głową.)",
                "options": ["翘", "拉", "低", "抬"],
                "correct": "翘",
                "explanation": "'翘着鼻子' (qiào zhe bízi) = z zadartym nosem = z butą/dumą. '翘' = zadzierać, '鼻子' = nos. Identyczna metafora w polskim: 'zadzierać nosa'! To piękny przykład UNIWERSALNEJ metafory — i Polacy, i Chińczycy zauważyli ten sam gest. '拉着脸' (lā zhe liǎn) = z naciągniętą twarzą = z miną obrażoną. '低着头' = z opuszczoną głową = ze wstydem. Twarz i nos = emocje w obu kulturach."
            },
            {
                "id": "pc_ie14",
                "question": "你别 _____ 牛角尖了。",
                "translation": "(Nie zamartwiaj się drobiazgami / nie wchodź za głęboko w szczegóły.)",
                "options": ["钻", "进", "走", "看"],
                "correct": "钻",
                "explanation": "'钻牛角尖' (zuān niú jiǎo jiān) = wchodzić w czubek rogu byka = zagłębiać się w bezsensowne szczegóły. '钻' = wiercić się/wkręcać, '牛角' = róg byka, '尖' = czubek/szpic. Metafora: róg byka się zwęża — im głębiej wchodzisz, tym bardziej utkniesz. '别钻牛角尖' = nie zamartwiaj się detalami. W polskim: 'nie kombinuj / nie szukaj dziury w całym / nie rozdrapuj'. MĄDRY idiom!"
            },
            {
                "id": "pc_ie15",
                "question": "他这个人说话总是 _____ 。",
                "translation": "(On zawsze mówi z przesadą / koloryzuje.)",
                "options": ["添油加醋", "实事求是", "一五一十", "有板有眼"],
                "correct": "添油加醋",
                "explanation": "'添油加醋' (tiān yóu jiā cù) = dodawać olej i ocet = koloryzować/przesadzać. Dosł. 'dolewać oleju i dosypywać octu' — upiększać historię dodatkami. '他说话总是添油加醋' (zawsze koloryzuje). Przeciwieństwo: '实事求是' (shí shì qiú shì) = trzymać się faktów. '一五一十' (yī wǔ yī shí) = punkt po punkcie / szczegółowo. W polskim: 'koloryzować / nawijać makaron na uszy / przesadzać'. PODSUMOWANIE: chińskie idiomy to skarb języka — ucz się ich!"
            }
        ]
    }
]

with open(FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

data.extend(new_categories)

with open(FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Done. Total categories: {len(data)}, Total items: {sum(len(c['items']) for c in data)}")
for c in data[-5:]:
    print(f"  {c['key']} ({len(c['items'])} items)")

#!/usr/bin/env python3
"""Batch 6: Add categories 35-39 to polish_chinese grammar."""
import json, os

PATH = os.path.join(os.path.dirname(__file__), '..', 'LumenLingo', 'LumenLingo', 'Resources', 'Content', 'polish_chinese', 'grammar_polish_chinese.json')

with open(PATH, 'r') as f:
    data = json.load(f)

new_cats = [
    {
        "key": "word_order",
        "name": "Szyk zdania",
        "description": "语序",
        "iconName": "list.number",
        "color": "#f472b6",
        "level": "beginner",
        "items": [
            {
                "id": "pc_wo1",
                "question": "Który szyk jest poprawny? '_____ 早上喝咖啡。'",
                "translation": "(Codziennie rano piję kawę)",
                "options": ["我每天", "每天我", "Both correct", "喝我每天"],
                "correct": "我每天",
                "explanation": "W chińskim podstawowy szyk to: Podmiot + Czas + Czasownik + Dopełnienie. '我每天早上喝咖啡' (Wǒ měitiān zǎoshang hē kāfēi). Podmiot '我' stoi na pierwszym miejscu, następnie określenie czasu '每天早上' (codziennie rano), potem czasownik '喝' (pić) i dopełnienie '咖啡' (kawa). W polskim szyk jest dość swobodny, ale w chińskim kolejność jest ściśle ustalona i zmiana jej prowadzi do błędów lub zmiany znaczenia."
            },
            {
                "id": "pc_wo2",
                "question": "我在图书馆 _____ 。",
                "translation": "(Czytam książkę w bibliotece)",
                "options": ["看书", "书看", "看的书", "书在看"],
                "correct": "看书",
                "explanation": "Czasownik zawsze stoi PRZED dopełnieniem: '看书' (kànshū) = czytać książkę. W polskim możesz powiedzieć 'książkę czytam', ale w chińskim '书看' jest błędne. Szyk to Podmiot + Miejsce + Czasownik + Dopełnienie. '我在图书馆看书' (Wǒ zài túshūguǎn kànshū). Określenie miejsca z '在' stoi przed czasownikiem, nie po nim jak w polskim 'czytam w bibliotece'."
            },
            {
                "id": "pc_wo3",
                "question": "她 _____ 去超市买东西。",
                "translation": "(Ona wczoraj pojechała do supermarketu kupić rzeczy)",
                "options": ["昨天", "去昨天", "昨天的", "在昨天"],
                "correct": "昨天",
                "explanation": "Określenia czasu w chińskim stoją PRZED czasownikiem, zaraz po podmiocie: '她昨天去超市买东西' (Tā zuótiān qù chāoshì mǎi dōngxi). W polskim 'wczoraj' może stać na końcu ('poszła do sklepu wczoraj') lub na początku. W chińskim czas zawsze zajmuje pozycję po podmiocie, a przed orzeczeniem. To jedna z najważniejszych zasad chińskiego szyku zdania."
            },
            {
                "id": "pc_wo4",
                "question": "Który szyk jest poprawny? _____ ",
                "translation": "(Daję ci tę książkę)",
                "options": ["我给你这本书", "我这本书给你", "给你我这本书", "这本书我给你"],
                "correct": "我给你这本书",
                "explanation": "Standardowy szyk z dwoma dopełnieniami: Podmiot + Czasownik + Dopełnienie bliższe + Dopełnienie dalsze. '我给你这本书' (Wǒ gěi nǐ zhè běn shū) — dosłownie 'Ja daję tobie tę książkę'. W polskim 'Daję ci tę książkę' — 'ci' to celownik. W chińskim brak przypadków, więc kolejność słów jest jedynym sposobem pokazania, kto komu co daje."
            },
            {
                "id": "pc_wo5",
                "question": "他 _____ 很高兴。",
                "translation": "(On jest dzisiaj bardzo zadowolony)",
                "options": ["今天", "很今天", "今天的", "是今天"],
                "correct": "今天",
                "explanation": "Czas stoi między podmiotem a orzeczeniem: '他今天很高兴' (Tā jīntiān hěn gāoxìng). Przymiotnik z '很' pełni funkcję orzeczenia — nie potrzeba '是' (być). W polskim mówisz 'On jest dzisiaj zadowolony' z czasownikiem 'jest'. W chińskim przymiotnik sam jest orzeczeniem: '很高兴' = dosłownie 'bardzo zadowolony'. To fundamentalna różnica między polskim a chińskim."
            },
            {
                "id": "pc_wo6",
                "question": "我 _____ 吃早饭。",
                "translation": "(Jem śniadanie o godzinie siódmej)",
                "options": ["七点", "在七点", "七点钟的", "到七点"],
                "correct": "七点",
                "explanation": "Czas precyzyjny (godzina) stoi między podmiotem a czasownikiem: '我七点吃早饭' (Wǒ qī diǎn chī zǎofàn). W polskim 'o siódmej' może stać na końcu zdania, w chińskim — nigdy. Zwróć uwagę, że '七点' nie potrzebuje przyimka 'o' (jak w polskim 'o siódmej'). Chińskie wyrażenia czasu stoją bezpośrednio bez przyimka."
            },
            {
                "id": "pc_wo7",
                "question": "她 _____ 走了。",
                "translation": "(Ona już poszła)",
                "options": ["已经", "了已经", "已经是", "在已经"],
                "correct": "已经",
                "explanation": "Przysłówek '已经' (yǐjīng — już) stoi PRZED czasownikiem: '她已经走了' (Tā yǐjīng zǒu le). Przysłówki w chińskim prawie zawsze stoją przed orzeczeniem — to kolejna zasada szyku. Partykuła '了' na końcu sygnalizuje, że czynność się zakończyła. W polskim 'już' też zwykle stoi przed czasownikiem ('już poszła'), więc ta zasada jest intuicyjna."
            },
            {
                "id": "pc_wo8",
                "question": "这个菜 _____ 。",
                "translation": "(To danie jest bardzo smaczne)",
                "options": ["很好吃", "好吃很", "是很好吃", "有好吃"],
                "correct": "很好吃",
                "explanation": "'很' (hěn — bardzo) stoi PRZED przymiotnikiem: '很好吃' (hěn hǎochī). W chińskim zdaniu z orzeczeniem przymiotnikowym '很' jest prawie obowiązkowe — bez niego przymiotnik brzmi porównawczo. '这个菜好吃' sugeruje 'to danie jest smaczniejsze (niż inne)'. '这个菜很好吃' to neutralne stwierdzenie 'to danie jest smaczne'. NIE dodajemy '是' przed przymiotnikiem — to typowy błąd Polaków."
            },
            {
                "id": "pc_wo9",
                "question": "我在北京 _____ 三年了。",
                "translation": "(Mieszkam w Pekinie już trzy lata)",
                "options": ["住了", "了住", "住在", "有住"],
                "correct": "住了",
                "explanation": "Wyrażenie czasu trwania stoi PO czasowniku: '住了三年' (zhù le sān nián). Szyk: Podmiot + Miejsce + Czasownik + Czas trwania. '我在北京住了三年了' (Wǒ zài Běijīng zhù le sān nián le). Pierwsze '了' po '住' wskazuje na dokonanie, drugie '了' na końcu — że sytuacja trwa do teraz. W polskim 'trzy lata' stoi swobodnie, w chińskim — ściśle po czasowniku."
            },
            {
                "id": "pc_wo10",
                "question": "你 _____ 去哪里？",
                "translation": "(Dokąd chcesz pojechać?)",
                "options": ["想", "想是", "是想", "有想"],
                "correct": "想",
                "explanation": "Czasowniki modalne stoją PRZED głównym czasownikiem: '你想去哪里？' (Nǐ xiǎng qù nǎlǐ?). '想' (xiǎng — chcieć) + '去' (qù — jechać). Szyk pytania w chińskim zachowuje szyk oznajmujący — słowo pytające '哪里' (nǎlǐ — dokąd/gdzie) zostaje na swojej pozycji, nie przesuwa się na początek jak w polskim. To wielka różnica: polski 'Dokąd chcesz jechać?' vs chiński '你想去哪里？' (dosłownie: Ty chcesz jechać dokąd?)."
            },
            {
                "id": "pc_wo11",
                "question": "妈妈让我 _____ 。",
                "translation": "(Mama kazała mi posprzątać pokój)",
                "options": ["打扫房间", "房间打扫", "打扫的房间", "房间在打扫"],
                "correct": "打扫房间",
                "explanation": "W zdaniu rozkazowym/sprawczym szyk to: Osoba rozkazująca + 让 + Wykonawca + Czasownik + Dopełnienie. '妈妈让我打扫房间' (Māma ràng wǒ dǎsǎo fángjiān). '让' (ràng) = kazać, pozwolić. Czasownik '打扫' zawsze przed dopełnieniem '房间' (pokój). W polskim 'kazała mi pokój posprzątać' jest naturalne, ale w chińskim dopełnienie nigdy nie stoi przed czasownikiem w takich konstrukcjach."
            },
            {
                "id": "pc_wo12",
                "question": "我 _____ 认识他。",
                "translation": "(Nie znam go)",
                "options": ["不", "没不", "不是", "是不"],
                "correct": "不",
                "explanation": "Negacja stoi PRZED orzeczeniem: '不认识' (bù rènshi — nie znać). '我不认识他' (Wǒ bù rènshi tā). W chińskim negacja ma stałe miejsce — bezpośrednio przed czasownikiem lub przymiotnikiem. Nie można powiedzieć '我认识不他'. W polskim 'nie' też stoi przed czasownikiem, więc ta reguła jest naturalna. Pamiętaj: '不' dla stanów i nawyków, '没' dla zdarzeń."
            },
            {
                "id": "pc_wo13",
                "question": "他说中文说 _____ 。",
                "translation": "(On mówi po chińsku bardzo dobrze)",
                "options": ["得很好", "很好得", "好很得", "得好很"],
                "correct": "得很好",
                "explanation": "Komplement sposobu używa '得' PO czasowniku: '说得很好' (shuō de hěn hǎo). Gdy jest dopełnienie, czasownik się powtarza: '他说中文说得很好' (Tā shuō Zhōngwén shuō de hěn hǎo). Dosłownie: 'On mówi chiński, mówi [stopień] bardzo dobrze'. W polskim 'mówi bardzo dobrze po chińsku' — przysłówek stoi przed lub po, ale nie wymaga powtórzenia czasownika."
            },
            {
                "id": "pc_wo14",
                "question": "桌子上 _____ 一本书。",
                "translation": "(Na stole leży książka)",
                "options": ["有", "是有", "在有", "有在"],
                "correct": "有",
                "explanation": "W zdaniach egzystencjalnych szyk to: Miejsce + 有 + Przedmiot: '桌子上有一本书' (Zhuōzi shàng yǒu yī běn shū). W polskim 'Na stole leży książka' — podmiot (książka) jest na końcu. Chiński ma podobny szyk! Miejsce na początku, przedmiot na końcu. '桌子上' (na stole) + '有' (jest/ma) + '一本书' (jedna książka). To jeden z niewielu przypadków, gdy chiński i polski szyk się pokrywają."
            },
            {
                "id": "pc_wo15",
                "question": "我 _____ 一个小时的中文。",
                "translation": "(Uczę się chińskiego godzinę dziennie)",
                "options": ["每天学", "学每天", "每天的学", "在学每天"],
                "correct": "每天学",
                "explanation": "Pełny szyk: Podmiot + Czas (kiedy) + Czasownik + Czas trwania + Dopełnienie. '我每天学一个小时的中文' (Wǒ měitiān xué yī gè xiǎoshí de Zhōngwén). '每天' (codziennie) stoi PRZED czasownikiem, a '一个小时' (godzinę) stoi PO czasowniku. To kluczowa reguła: 'kiedy' — przed czasownikiem, 'jak długo' — po czasowniku. W polskim obie informacje mogą stać w dowolnym miejscu."
            }
        ]
    },
    {
        "key": "coverbs",
        "name": "Przyimki (介词)",
        "description": "介词",
        "iconName": "arrow.triangle.branch",
        "color": "#a78bfa",
        "level": "beginner",
        "items": [
            {
                "id": "pc_cov1",
                "question": "我 _____ 学校学习。",
                "translation": "(Uczę się w szkole)",
                "options": ["在", "的", "了", "是"],
                "correct": "在",
                "explanation": "'在' (zài) to jeden z najważniejszych przyimków chińskich — oznacza 'w/na/przy'. '我在学校学习' (Wǒ zài xuéxiào xuéxí). W polskim 'w szkole' używa miejscownika, chiński nie ma przypadków — zamiast tego '在' + miejsce. Fraza przyimkowa '在学校' stoi PRZED czasownikiem '学习' (uczyć się). To kluczowa różnica: polski 'uczę się w szkole' — miejsce na końcu; chiński — miejsce przed orzeczeniem."
            },
            {
                "id": "pc_cov2",
                "question": "他 _____ 北京来。",
                "translation": "(On przyjechał z Pekinu)",
                "options": ["从", "在", "到", "给"],
                "correct": "从",
                "explanation": "'从' (cóng) = 'z/od' — wskazuje punkt wyjścia. '他从北京来' (Tā cóng Běijīng lái). W polskim 'z Pekinu' to dopełniacz z przyimkiem 'z'. W chińskim '从' + miejsce + czasownik ruchu. Fraza '从北京' stoi przed czasownikiem '来' (przyjść/przyjechać). Inne wyrażenia: '从早到晚' (od rana do wieczora), '从小' (od dzieciństwa)."
            },
            {
                "id": "pc_cov3",
                "question": "请你 _____ 我说一下。",
                "translation": "(Proszę, powiedz mi [o tym])",
                "options": ["跟", "和", "从", "在"],
                "correct": "跟",
                "explanation": "'跟' (gēn) jako przyimek oznacza 'do/z (kimś)' i wskazuje adresata. '请你跟我说一下' (Qǐng nǐ gēn wǒ shuō yīxià). '跟' jest wielofunkcyjne: (1) 'z kimś': '跟朋友一起' (z przyjacielem razem), (2) 'do kogoś': '跟老师说' (powiedzieć nauczycielowi). W polskim rozróżniamy 'z' (narzędnik) i 'do' (dopełniacz), chiński używa '跟' w obu kontekstach."
            },
            {
                "id": "pc_cov4",
                "question": "我想 _____ 你一个礼物。",
                "translation": "(Chcę dać ci prezent)",
                "options": ["给", "跟", "对", "从"],
                "correct": "给",
                "explanation": "'给' (gěi) = 'dać/dla' — może być czasownikiem lub przyimkiem. Jako przyimek wskazuje odbiorcę: '给你' = 'dla ciebie/tobie'. '我想给你一个礼物' (Wǒ xiǎng gěi nǐ yī gè lǐwù). '给' jako przyimek stoi przed czasownikiem: '给他打电话' (zadzwonić do niego — dosłownie: 'dla niego wybić telefon'). Polski używa celownika ('ci'), chiński — przyimka '给'."
            },
            {
                "id": "pc_cov5",
                "question": "她 _____ 我很好。",
                "translation": "(Ona jest dla mnie bardzo dobra)",
                "options": ["对", "给", "跟", "从"],
                "correct": "对",
                "explanation": "'对' (duì) = 'wobec/w stosunku do/dla'. '她对我很好' (Tā duì wǒ hěn hǎo) = Ona wobec mnie bardzo dobra. '对' wskazuje obiekt postawy lub działania. W polskim 'dla mnie' (dopełniacz). '对' różni się od '给' — '对' dotyczy postawy/nastawienia, '给' dotyczy dawania/przeznaczenia. '对学生严格' (surowy wobec uczniów), '给学生作业' (dać uczniom zadanie)."
            },
            {
                "id": "pc_cov6",
                "question": "我们 _____ 他一起去吧。",
                "translation": "(Chodźmy razem z nim)",
                "options": ["跟", "对", "给", "从"],
                "correct": "跟",
                "explanation": "'跟...一起' (gēn...yīqǐ) = 'razem z...' — to jedna z najczęstszych konstrukcji. '我们跟他一起去吧' (Wǒmen gēn tā yīqǐ qù ba). '跟' wskazuje towarzysza, '一起' oznacza 'razem'. W polskim 'z nim' to narzędnik — chiński nie ma przypadków, więc '跟' pełni tę funkcję. Partykuła '吧' na końcu nadaje ton zachęty/propozycji."
            },
            {
                "id": "pc_cov7",
                "question": "火车 _____ 上海开。",
                "translation": "(Pociąg jedzie do Szanghaju)",
                "options": ["往", "在", "从", "对"],
                "correct": "往",
                "explanation": "'往' (wǎng) = 'w kierunku/do' — wskazuje kierunek ruchu. '火车往上海开' (Huǒchē wǎng Shànghǎi kāi). '往' różni się od '到': '往' podkreśla kierunek, '到' — punkt docelowy. '往前走' (idź do przodu), '往左拐' (skręć w lewo). W polskim używasz 'do' (dopełniacz) dla obu funkcji, chiński je rozróżnia: kierunek ('往') vs cel ('到')."
            },
            {
                "id": "pc_cov8",
                "question": "我 _____ 你的帮助表示感谢。",
                "translation": "(Wyrażam wdzięczność za twoją pomoc)",
                "options": ["对", "给", "从", "往"],
                "correct": "对",
                "explanation": "'对...表示' = 'wobec czegoś wyrażać'. '我对你的帮助表示感谢' (Wǒ duì nǐ de bāngzhù biǎoshì gǎnxiè). '对' tutaj wskazuje obiekt uczucia/postawy — 'twoja pomoc'. To bardziej formalna konstrukcja. W codziennej mowie powiesz po prostu '谢谢你帮我' (Dziękuję, że mi pomogłeś). '对' jest typowe dla formalnego języka, przemówień, pism."
            },
            {
                "id": "pc_cov9",
                "question": "请 _____ 左边走。",
                "translation": "(Proszę, idź w lewo)",
                "options": ["往", "在", "从", "对"],
                "correct": "往",
                "explanation": "'往左边走' (wǎng zuǒbiān zǒu) — dosłownie 'w kierunku lewej strony iść'. '往' wskazuje kierunek ruchu — to przyimek niezbędny przy wskazówkach. Przydatne wyrażenia: '往前' (do przodu), '往右' (w prawo), '往回' (z powrotem), '往上' (do góry), '往下' (w dół). W polskim używasz 'w lewo/prawo', chiński osobno precyzuje kierunek przyimkiem '往'."
            },
            {
                "id": "pc_cov10",
                "question": "他 _____ 我借了一本书。",
                "translation": "(On pożyczył ode mnie książkę)",
                "options": ["跟", "给", "对", "往"],
                "correct": "跟",
                "explanation": "'跟...借' = 'pożyczyć od kogoś'. '他跟我借了一本书' (Tā gēn wǒ jiè le yī běn shū). '跟' tutaj wskazuje źródło pożyczki — 'ode mnie'. Uwaga: '借' (jiè) oznacza zarówno 'pożyczyć OD kogoś' jak i 'pożyczyć KOMUŚ' — kontekst (i przyimek) decyduje. '跟我借' = pożyczyć ode mnie. '借给我' = pożyczyć mi. Polski ma odrębne słowa, chiński — jeden czasownik."
            },
            {
                "id": "pc_cov11",
                "question": "从这里 _____ 车站要走十分钟。",
                "translation": "(Stąd do stacji trzeba iść dziesięć minut)",
                "options": ["到", "在", "往", "给"],
                "correct": "到",
                "explanation": "'从...到...' = 'od...do...' — para przyimków oznaczająca punkt startowy i docelowy. '从这里到车站' (Cóng zhèlǐ dào chēzhàn) = stąd do stacji. Ta para jest niezwykle użyteczna: '从早到晚' (od rana do wieczora), '从一到十' (od jeden do dziesięć), '从北京到上海' (z Pekinu do Szanghaju). W polskim 'od...do...' — dokładna analogia."
            },
            {
                "id": "pc_cov12",
                "question": "老师 _____ 学生们说了这件事。",
                "translation": "(Nauczyciel powiedział uczniom o tej sprawie)",
                "options": ["对", "给", "跟", "从"],
                "correct": "对",
                "explanation": "'对...说' = 'powiedzieć do kogoś'. '老师对学生们说了这件事' (Lǎoshī duì xuéshēngmen shuō le zhè jiàn shì). '对' wskazuje adresata wypowiedzi w kontekście formalnym. Porównaj: '跟...说' jest bardziej potoczne (pogadać z), '对...说' jest bardziej oficjalne (zwrócić się do). Nauczyciel do uczniów — formalna relacja, więc '对' pasuje lepiej."
            },
            {
                "id": "pc_cov13",
                "question": "我 _____ 这个问题很感兴趣。",
                "translation": "(Bardzo interesuje mnie ta kwestia)",
                "options": ["对", "从", "给", "往"],
                "correct": "对",
                "explanation": "'对...感兴趣' = 'interesować się czymś'. '我对这个问题很感兴趣' (Wǒ duì zhège wèntí hěn gǎn xìngqù). To utrwalona fraza — '对' + temat + '感兴趣'. W polskim 'interesuję się tym' — narzędnik. W chińskim '对' wskazuje obiekt zainteresowania. Podobne wyrażenia: '对...有信心' (mieć zaufanie do), '对...满意' (być zadowolonym z)."
            },
            {
                "id": "pc_cov14",
                "question": "他用筷子 _____ 饭。",
                "translation": "(On je pałeczkami)",
                "options": ["吃", "了吃", "吃了", "在"],
                "correct": "吃",
                "explanation": "'用' (yòng) = 'używać/za pomocą' — przyimek narzędzia. '他用筷子吃饭' (Tā yòng kuàizi chīfàn) = On za pomocą pałeczek je. W polskim 'pałeczkami' to narzędnik — przypadek gramatyczny. W chińskim '用' + narzędzie stoi PRZED czasownikiem. '用手写' (pisać ręcznie), '用电脑工作' (pracować na komputerze). '用' jest bezpośrednim odpowiednikiem polskiego narzędnika."
            },
            {
                "id": "pc_cov15",
                "question": "她 _____ 朋友写了一封信。",
                "translation": "(Ona napisała list do przyjaciółki)",
                "options": ["给", "对", "跟", "用"],
                "correct": "给",
                "explanation": "'给' jako przyimek przed czasownikiem wskazuje odbiorcę. '她给朋友写了一封信' (Tā gěi péngyou xiě le yī fēng xìn). '给朋友' = 'dla przyjaciółki / do przyjaciółki'. '一封信' — '封' (fēng) to klasyfikator dla listów. W polskim 'do przyjaciółki' (dopełniacz). '给' + osoba + czasownik to bardzo częsty wzorzec: '给他打电话' (zadzwonić do niego), '给我看' (pokaż mi)."
            }
        ]
    },
    {
        "key": "shi_de_construction",
        "name": "Konstrukcja 是...的",
        "description": "是...的句",
        "iconName": "text.magnifyingglass",
        "color": "#34d399",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_sd1",
                "question": "你 _____ 什么时候来的？",
                "translation": "(Kiedy [dokładnie] przyjechałeś?)",
                "options": ["是", "了", "在", "有"],
                "correct": "是",
                "explanation": "Konstrukcja '是...的' służy do podkreślenia OKOLICZNOŚCI przeszłego zdarzenia — kiedy, gdzie, jak, z kim. '你是什么时候来的？' (Nǐ shì shénme shíhou lái de?) podkreśla KIEDY przyjechałeś, nie sam fakt przyjazdu. Bez '是...的': '你什么时候来了？' pyta po prostu o czas. Z '是...的': skupiasz się na okoliczności. W polskim tego rozróżnienia nie ma — chiński jest tu bardziej precyzyjny."
            },
            {
                "id": "pc_sd2",
                "question": "我是坐飞机 _____ 的。",
                "translation": "(Przyjechałem [tutaj] samolotem)",
                "options": ["来", "来了", "来过", "在来"],
                "correct": "来",
                "explanation": "W '是...的' czasownik NIE dostaje '了'. '我是坐飞机来的' (Wǒ shì zuò fēijī lái de). '是' podkreśla sposób (samolotem), '的' zamyka konstrukcję. Dosłownie: 'To jest siedząc-samolotem przyjechałem'. Faktu przyjazdu nie podważamy — podkreślamy JAK. W polskim: 'Przyjechałem samolotem' vs 'Przyjechałem (i to) samolotem' — ten drugi ton odpowiada '是...的'."
            },
            {
                "id": "pc_sd3",
                "question": "她是在北京 _____ 的。",
                "translation": "(Ona urodziła się w Pekinie)",
                "options": ["出生", "出生了", "出生过", "在出生"],
                "correct": "出生",
                "explanation": "'她是在北京出生的' (Tā shì zài Běijīng chūshēng de) — podkreśla GDZIE się urodziła. '是' + okoliczność (在北京) + czasownik + '的'. Kolejność: podmiot + 是 + okoliczność + czasownik + 的. Odpowiedź na pytanie '她是在哪里出生的？' (Gdzie się urodziła?). '出生' nie potrzebuje '了' w tej konstrukcji — sam fakt urodzin jest oczywisty."
            },
            {
                "id": "pc_sd4",
                "question": "这本书是我在书店 _____ 。",
                "translation": "(Tę książkę kupiłem w księgarni)",
                "options": ["买的", "买了的", "买过的", "的买"],
                "correct": "买的",
                "explanation": "Gdy jest dopełnienie, '的' może stać PO dopełnieniu lub PRZED nim: '这本书是我在书店买的' (Zhè běn shū shì wǒ zài shūdiàn mǎi de). W mowie potocznej '的' często przesuwa się za dopełnienie: '是我买的这本书'. Ale standardowa forma: podmiot (rzecz) + 是 + osoba + okoliczność + czasownik + 的. Podkreślamy KTO i GDZIE kupił tę książkę."
            },
            {
                "id": "pc_sd5",
                "question": "他们是去年 _____ 的。",
                "translation": "(Oni pobrali się w zeszłym roku)",
                "options": ["结婚", "结婚了", "结了婚", "在结婚"],
                "correct": "结婚",
                "explanation": "'他们是去年结婚的' (Tāmen shì qùnián jiéhūn de) — podkreśla KIEDY się pobrali. Ślub jest faktem — skupiamy się na czasie. Porównaj: '他们去年结婚了' — po prostu informacja o ślubie. '他们是去年结婚的' — odpowiedź na pytanie 'Kiedy się pobrali?'. Konstrukcja '是...的' jest idealna, gdy pytamy o szczegóły znanych zdarzeń."
            },
            {
                "id": "pc_sd6",
                "question": "你是跟 _____ 一起来的？",
                "translation": "(Z kim przyszedłeś?)",
                "options": ["谁", "什么", "哪", "多少"],
                "correct": "谁",
                "explanation": "'你是跟谁一起来的？' (Nǐ shì gēn shéi yīqǐ lái de?) — podkreśla Z KIM przyszedłeś. '是...的' + '跟谁' = pytanie o towarzysza. Odpowiedź: '我是跟朋友一起来的' (Przyszedłem z przyjacielem). Zwróć uwagę: w chińskim pytaniu szyk się NIE zmienia — '谁' zostaje na swoim miejscu, nie przesuwa się na początek jak polskie 'z kim'."
            },
            {
                "id": "pc_sd7",
                "question": "这件衣服是在哪里 _____ 的？",
                "translation": "(Gdzie kupiłeś te ubranie?)",
                "options": ["买", "买了", "去买", "要买"],
                "correct": "买",
                "explanation": "'这件衣服是在哪里买的？' (Zhè jiàn yīfu shì zài nǎlǐ mǎi de?) — pytanie o MIEJSCE zakupu. Szyk: Dopełnienie + 是 + 在哪里 + Czasownik + 的. Odpowiedź: '是在商场买的' (Kupiłem w centrum handlowym). W '是...的' nie dodajemy '了' — zdarzenie jest już przeszłe, '是...的' bada okoliczności."
            },
            {
                "id": "pc_sd8",
                "question": "我不是故意 _____ 的。",
                "translation": "(Nie zrobiłem tego celowo)",
                "options": ["做", "做了", "做过", "在做"],
                "correct": "做",
                "explanation": "Negacja w '是...的': '不是...的'. '我不是故意做的' (Wǒ bù shì gùyì zuò de) = 'nie celowo to zrobiłem'. '故意' (gùyì) = celowo, umyślnie. Negujemy okoliczność (nie celowo), nie sam czyn. To bardzo przydatna konstrukcja do tłumaczeń i wyjaśnień. W polskim: 'Nie zrobiłem tego celowo' — brak analogicznej struktury gramatycznej."
            },
            {
                "id": "pc_sd9",
                "question": "你是怎么 _____ 的？",
                "translation": "(Jak się dowiedziałeś?)",
                "options": ["知道", "知道了", "了知道", "知道过"],
                "correct": "知道",
                "explanation": "'你是怎么知道的？' (Nǐ shì zěnme zhīdào de?) — pytanie o SPOSÓB dowiedzenia się. '怎么' (zěnme) = jak. W '是...的' pytamy o sposób przeszłego zdarzenia. Odpowiedź: '我是听朋友说的' (Dowiedziałem się od przyjaciela — dosłownie: 'słysząc przyjaciela mówienie'). Bardzo naturalna i częsta konstrukcja w rozmowie."
            },
            {
                "id": "pc_sd10",
                "question": "她是2015年 _____ 大学的。",
                "translation": "(Ona ukończyła studia w 2015 roku)",
                "options": ["毕业", "毕业了", "毕业过", "在毕业"],
                "correct": "毕业",
                "explanation": "'她是2015年毕业大学的' — UWAGA! Poprawna forma to: '她是2015年从大学毕业的' (Tā shì 2015 nián cóng dàxué bìyè de). Przyimek '从' jest potrzebny: 'ukończyć Z uniwersytetu'. Podkreślamy rok ukończenia. '毕业' (bìyè) = ukończyć studia/szkołę. W '是...的' czas (2015年) jest podkreśloną informacją."
            },
            {
                "id": "pc_sd11",
                "question": "这个蛋糕是妈妈 _____ 的。",
                "translation": "(To ciasto mama zrobiła)",
                "options": ["做", "做了", "做过", "在做"],
                "correct": "做",
                "explanation": "'这个蛋糕是妈妈做的' (Zhège dàngāo shì māma zuò de) — podkreśla KTO zrobił ciasto. Szyk: Dopełnienie + 是 + Wykonawca + Czasownik + 的. Odpowiedź na pytanie '这个蛋糕是谁做的？' (Kto zrobił to ciasto?). '是...的' działa tu jak angielskie zdanie rozszczepiające (It was Mom who made it). Bardzo częsty wzorzec."
            },
            {
                "id": "pc_sd12",
                "question": "我的手机是在网上 _____ 的。",
                "translation": "(Mój telefon kupiłem w internecie)",
                "options": ["买", "买了", "买过", "在买"],
                "correct": "买",
                "explanation": "'我的手机是在网上买的' (Wǒ de shǒujī shì zài wǎngshàng mǎi de). '在网上' (zài wǎngshàng) = w internecie. Podkreślamy GDZIE kupiłem telefon. Współcześnie bardzo przydatne zdanie. Warianty: '是在淘宝买的' (na Taobao), '是在实体店买的' (w sklepie stacjonarnym). '是...的' doskonale służy do wyjaśniania szczegółów zakupów."
            },
            {
                "id": "pc_sd13",
                "question": "你是为什么 _____ 中文的？",
                "translation": "(Dlaczego [właściwie] zacząłeś się uczyć chińskiego?)",
                "options": ["学", "学了", "学过", "在学"],
                "correct": "学",
                "explanation": "'你是为什么学中文的？' (Nǐ shì wèishénme xué Zhōngwén de?) — pytanie o POWÓD nauki. '为什么' (wèishénme) = dlaczego. '是...的' podkreśla motywację. Odpowiedź: '我是因为喜欢中国文化学中文的' (Uczę się z powodu zamiłowania do chińskiej kultury). Porównaj bez '是...的': '你为什么学中文？' — prostsze pytanie, bez podkreślenia."
            },
            {
                "id": "pc_sd14",
                "question": "他是一个人 _____ 的。",
                "translation": "(On przyszedł sam)",
                "options": ["来", "来了", "来过", "在来"],
                "correct": "来",
                "explanation": "'他是一个人来的' (Tā shì yī gè rén lái de) — podkreśla, że przyszedł SAM (一个人 = jedna osoba / sam). Porównaj: '他一个人来了' — fakt. '他是一个人来的' — podkreślenie (a nie z kimś). '一个人' dosłownie 'jedna osoba', ale funkcjonuje jak polskie 'sam/samemu'. Ton kontrastu: 'Nie z przyjaciółmi, nie z rodziną — sam'."
            },
            {
                "id": "pc_sd15",
                "question": "这首歌是用中文 _____ 的。",
                "translation": "(Ta piosenka jest zaśpiewana po chińsku)",
                "options": ["唱", "唱了", "唱过", "在唱"],
                "correct": "唱",
                "explanation": "'这首歌是用中文唱的' (Zhè shǒu gē shì yòng Zhōngwén chàng de) — podkreśla W JAKIM JĘZYKU zaśpiewano piosenkę. '用中文' = 'po chińsku' (dosłownie: używając chińskiego). '首' (shǒu) to klasyfikator dla piosenek i wierszy. Ta konstrukcja jest bardzo pożyteczna do opisywania właściwości produktów kulturalnych: '这部电影是用英语拍的' (Ten film nakręcono po angielsku)."
            }
        ]
    },
    {
        "key": "relative_clauses",
        "name": "Zdania podrzędne przydawkowe",
        "description": "定语从句",
        "iconName": "text.insert",
        "color": "#fb923c",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_rc1",
                "question": "我认识那个 _____ 中文的人。",
                "translation": "(Znam tę osobę, która mówi po chińsku)",
                "options": ["说", "说的", "在说", "说了"],
                "correct": "说",
                "explanation": "Zdania podrzędne przydawkowe w chińskim stoją PRZED rzeczownikiem z '的': '说中文的人' (shuō Zhōngwén de rén) = 'osoba mówiąca po chińsku'. To ODWROTNIE niż w polskim, gdzie zdanie podrzędne stoi PO rzeczowniku: 'osoba, KTÓRA mówi'. Szyk: [zdanie podrzędne] + 的 + [rzeczownik]. '我认识那个说中文的人' (Wǒ rènshi nàge shuō Zhōngwén de rén). Brak odpowiednika 'który/która' — '的' pełni tę funkcję."
            },
            {
                "id": "pc_rc2",
                "question": "穿红衣服 _____ 女孩是我妹妹。",
                "translation": "(Dziewczyna ubrana na czerwono to moja siostra)",
                "options": ["的", "了", "在", "是"],
                "correct": "的",
                "explanation": "'穿红衣服的女孩' (chuān hóng yīfu de nǚhái) = dziewczyna nosząca czerwone ubranie. '的' łączy zdanie opisowe z rzeczownikiem. W polskim: 'dziewczyna, która nosi...' lub 'dziewczyna ubrana w...'. W chińskim: opis PRZED rzeczownikiem + 的. To jedna z najważniejszych struktur chińskiego — opisy zawsze poprzedzają opisywany rzeczownik. Im dłuższy opis, tym bardziej to różni się od polskiego."
            },
            {
                "id": "pc_rc3",
                "question": "他买 _____ 那本书很有意思。",
                "translation": "(Ta książka, którą on kupił, jest bardzo interesująca)",
                "options": ["的", "了的", "在的", "过的"],
                "correct": "的",
                "explanation": "'他买的那本书' (tā mǎi de nà běn shū) = ta książka, którą on kupił. '的' stoi bezpośrednio po czasowniku, przed rzeczownikiem. Brak '了' w zdaniu przydawkowym — czas wynika z kontekstu. W polskim 'którą kupił' to zdanie podrzędne z zaimkiem względnym. W chińskim: [Podmiot + Czasownik + 的] + Rzeczownik. 'Kupiona-przez-niego książka' — jak polska forma imiesłowowa."
            },
            {
                "id": "pc_rc4",
                "question": "我喜欢吃妈妈 _____ 菜。",
                "translation": "(Lubię jeść dania przygotowane przez mamę)",
                "options": ["做的", "做了的", "做在的", "做过"],
                "correct": "做的",
                "explanation": "'妈妈做的菜' (māma zuò de cài) = dania zrobione przez mamę. Szyk: [kto] + [czasownik] + 的 + [rzeczownik]. '做的菜' = zrobione dania. Pełne zdanie: '我喜欢吃妈妈做的菜' (Wǒ xǐhuan chī māma zuò de cài). Zwróć uwagę: '做的' funkcjonuje jak polski imiesłów bierny 'zrobione'. Chińskie zdania przydawkowe są elastyczne — mogą zastąpić polskie imiesłowy."
            },
            {
                "id": "pc_rc5",
                "question": "住在楼上 _____ 邻居很友好。",
                "translation": "(Sąsiad mieszkający na górze jest bardzo przyjazny)",
                "options": ["的", "了", "在", "是"],
                "correct": "的",
                "explanation": "'住在楼上的邻居' (zhù zài lóushàng de línjū) = sąsiad mieszkający na górze. Dłuższe zdanie przydawkowe: '住在楼上' (mieszkający na górze) + '的' + '邻居' (sąsiad). W polskim: 'sąsiad, KTÓRY mieszka na górze' lub 'sąsiad mieszkający na górze'. W chińskim zawsze: opis + 的 + rzeczownik. Brak słowa 'który' — to uproszczenie względem polskiego."
            },
            {
                "id": "pc_rc6",
                "question": "你昨天给我看 _____ 照片很漂亮。",
                "translation": "(Zdjęcie, które mi wczoraj pokazałeś, jest bardzo ładne)",
                "options": ["的", "了的", "过的", "在的"],
                "correct": "的",
                "explanation": "'你昨天给我看的照片' (Nǐ zuótiān gěi wǒ kàn de zhàopiān) — złożone zdanie przydawkowe z kilkoma elementami: podmiot (你) + czas (昨天) + przyimek (给我) + czasownik (看) + 的 + rzeczownik (照片). Cała ta konstrukcja poprzedza opisywany rzeczownik. W polskim: 'zdjęcie, które mi wczoraj pokazałeś' — zdanie podrzędne PO rzeczowniku. Chiński odwraca tę kolejność."
            },
            {
                "id": "pc_rc7",
                "question": "我们公司需要会说英语 _____ 人。",
                "translation": "(Nasza firma potrzebuje osób, które mówią po angielsku)",
                "options": ["的", "了", "在", "是"],
                "correct": "的",
                "explanation": "'会说英语的人' (huì shuō Yīngyǔ de rén) = osoby umiejące mówić po angielsku. '会' (umieć) + '说英语' (mówić po angielsku) + '的' + '人' (osoby). Pełne zdanie: '我们公司需要会说英语的人'. W ogłoszeniach o pracę często zobaczysz: '有经验的人' (osoby z doświadczeniem), '会开车的人' (osoby umiejące prowadzić)."
            },
            {
                "id": "pc_rc8",
                "question": "那个戴眼镜 _____ 男人是我们老师。",
                "translation": "(Ten mężczyzna w okularach to nasz nauczyciel)",
                "options": ["的", "了", "过", "在"],
                "correct": "的",
                "explanation": "'戴眼镜的男人' (dài yǎnjìng de nánrén) = mężczyzna noszący okulary. '戴' (dài) = nosić (na głowie/twarzy: okulary, kapelusz). Chiński używa zdań przydawkowych do opisu cech wyglądu — tam gdzie polski użyłby przymiotnika lub wyrażenia przyimkowego ('w okularach'). '穿蓝衣服的' (w niebieskim ubraniu), '留长头发的' (z długimi włosami)."
            },
            {
                "id": "pc_rc9",
                "question": "这是我小时候住 _____ 房子。",
                "translation": "(To jest dom, w którym mieszkałem jako dziecko)",
                "options": ["过的", "的", "了的", "在的"],
                "correct": "过的",
                "explanation": "'我小时候住过的房子' (wǒ xiǎoshíhou zhù guo de fángzi) = dom, w którym [kiedyś] mieszkałem. '过' wskazuje doświadczenie — 'mieszkałem [kiedyś]'. '小时候' (xiǎoshíhou) = za dziecięcych lat. '住过的' łączy '过' (doświadczenie) z '的' (przydawka). Wyjątkowo '过' może pojawić się w zdaniu przydawkowym, gdy podkreślamy przeszłe doświadczenie."
            },
            {
                "id": "pc_rc10",
                "question": "她写 _____ 文章发表了。",
                "translation": "(Artykuł, który napisała, został opublikowany)",
                "options": ["的", "了的", "过的", "在的"],
                "correct": "的",
                "explanation": "'她写的文章' (tā xiě de wénzhāng) = artykuł, który napisała. '发表了' (fābiǎo le) = został opublikowany. W zdaniu przydawkowym zwykle nie używamy '了': '写的' nie '写了的'. Czas przeszły wynika z kontekstu (artykuł jest napisany i opublikowany). To uproszczenie — mniej form gramatycznych niż w polskim 'który napisała' (czas przeszły + rodzaj żeński)."
            },
            {
                "id": "pc_rc11",
                "question": "站在门口 _____ 那个人是谁？",
                "translation": "(Kim jest ta osoba stojąca przy drzwiach?)",
                "options": ["的", "了", "在", "地"],
                "correct": "的",
                "explanation": "'站在门口的那个人' (zhàn zài ménkǒu de nàge rén) = ta osoba stojąca przy wejściu. '站在' (stać w/przy) + '门口' (wejście) + '的' + '那个人' (ta osoba). Uwaga na '的' vs '地': '的' łączy z rzeczownikiem (przydawka), '地' łączy z czasownikiem (okolicznik). '高兴的人' (szczęśliwa osoba) vs '高兴地说' (radośnie powiedzieć)."
            },
            {
                "id": "pc_rc12",
                "question": "我最喜欢 _____ 颜色是蓝色。",
                "translation": "(Mój ulubiony kolor to niebieski)",
                "options": ["的", "了", "过", "在"],
                "correct": "的",
                "explanation": "'我最喜欢的颜色' (wǒ zuì xǐhuan de yánsè) = kolor, który najbardziej lubię = mój ulubiony kolor. '最' (zuì) = najbardziej. Zdanie przydawkowe może wyrażać to, co w polskim robimy przymiotnikiem: 'ulubiony' = '最喜欢的'. Podobnie: '最好的朋友' (najlepszy przyjaciel), '最想去的地方' (miejsce, do którego najbardziej chcę pojechać)."
            },
            {
                "id": "pc_rc13",
                "question": "昨天来我家 _____ 客人走了。",
                "translation": "(Gość, który wczoraj przyszedł do mnie, już poszedł)",
                "options": ["的", "了", "过", "在"],
                "correct": "的",
                "explanation": "'昨天来我家的客人' (zuótiān lái wǒ jiā de kèrén) = gość, który wczoraj przyszedł do mnie. Złożone zdanie przydawkowe: czas (昨天) + czasownik (来) + miejsce (我家) + 的 + rzeczownik (客人). Widzimy, że '的' ponownie nie potrzebuje '了' — przeszłość jest jasna z kontekstu '昨天' (wczoraj). W polskim: 'gość, który wczoraj przyszedł' — zaimek względny + czas przeszły."
            },
            {
                "id": "pc_rc14",
                "question": "你认识不认识教我们数学 _____ 老师？",
                "translation": "(Czy znasz nauczyciela, który uczy nas matematyki?)",
                "options": ["的", "了", "过", "在"],
                "correct": "的",
                "explanation": "'教我们数学的老师' (jiāo wǒmen shùxué de lǎoshī) = nauczyciel uczący nas matematyki. '你认识不认识' to pytanie typu A-nie-A: 'znasz czy nie znasz?'. Zdanie przydawkowe '教我们数学的' opisuje, O KTÓREGO nauczyciela chodzi. W polskim: 'nauczyciel, który uczy nas matematyki' — zdanie podrzędne z 'który'. Chiński: opis + 的 + rzeczownik."
            },
            {
                "id": "pc_rc15",
                "question": "我要找一个能帮我搬家 _____ 人。",
                "translation": "(Szukam kogoś, kto może mi pomóc z przeprowadzką)",
                "options": ["的", "了", "过", "在"],
                "correct": "的",
                "explanation": "'能帮我搬家的人' (néng bāng wǒ bānjiā de rén) = osoba mogąca pomóc mi z przeprowadzką. '能' (móc) + '帮' (pomóc) + '我' (mi) + '搬家' (przeprowadzić się) + '的' + '人' (osoba). Zdanie przydawkowe może zawierać modalne: '会做饭的人' (osoba umiejąca gotować), '能说三种语言的人' (osoba potrafiąca mówić trzema językami). '的' zastępuje polskie 'który/która/które'."
            }
        ]
    },
    {
        "key": "expressing_change",
        "name": "Wyrażanie zmian",
        "description": "变化表达",
        "iconName": "arrow.triangle.2.circlepath",
        "color": "#e879f9",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_ec1",
                "question": "天气冷 _____ 。",
                "translation": "(Pogoda stała się zimna / Ochłodziło się)",
                "options": ["了", "的", "过", "着"],
                "correct": "了",
                "explanation": "'了' na końcu zdania z przymiotnikiem sygnalizuje ZMIANĘ STANU. '天气冷了' (Tiānqì lěng le) = Pogoda stała się zimna (wcześniej nie było zimno). Bez '了': '天气冷' = pogoda jest zimna (stwierdzenie). Z '了': nastąpiła zmiana. W polskim użyłbyś 'stało się' lub czasu przeszłego. W chińskim jedno '了' robi całą robotę. To tzw. '了' zmiany stanu (语气助词了)."
            },
            {
                "id": "pc_ec2",
                "question": "他的中文越来越 _____ 了。",
                "translation": "(Jego chiński jest coraz lepszy)",
                "options": ["好", "好的", "很好", "好了"],
                "correct": "好",
                "explanation": "'越来越...' (yuè lái yuè) = 'coraz bardziej...' — jedna z najpiękniejszych chińskich konstrukcji. '越来越好了' (yuè lái yuè hǎo le) = coraz lepszy. '了' na końcu podkreśla zmianę. Tylko przymiotnik/czasownik po '越来越', bez '很' — stopniowanie jest wbudowane w strukturę. '越来越冷' (coraz zimniej), '越来越快' (coraz szybciej), '越来越多' (coraz więcej)."
            },
            {
                "id": "pc_ec3",
                "question": "她 _____ 漂亮了。",
                "translation": "(Ona stała się piękniejsza)",
                "options": ["变", "是", "很", "在"],
                "correct": "变",
                "explanation": "'变' (biàn) = 'zmienić się/stać się'. '她变漂亮了' (Tā biàn piàoliang le) = Ona stała się piękna. '变' + przymiotnik + '了' to wyraźne oznaczenie zmiany. Porównaj: '她漂亮了' (She became beautiful — subtelniej), '她变漂亮了' (She has changed and become beautiful — wyraźniej). '变' podkreśla sam PROCES zmiany, jest bardziej bezpośrednie."
            },
            {
                "id": "pc_ec4",
                "question": "树叶变 _____ 了。",
                "translation": "(Liście stały się żółte)",
                "options": ["黄", "黄的", "很黄", "黄色"],
                "correct": "黄",
                "explanation": "'树叶变黄了' (Shùyè biàn huáng le) = Liście zżółkły. '变' + kolor + '了' = zmienić kolor. Chiński ma eleganckie konstrukcje do opisu zmian w naturze: '天变黑了' (niebo pociemniało), '脸变红了' (twarz zaczerwieniła się), '头发变白了' (włosy posiwiały). Jeden przymiotnik koloru wystarczy — bez dodatkowej końcówki jak w polskim '-eć' (zżółkieć, pociemnieć)."
            },
            {
                "id": "pc_ec5",
                "question": "价格 _____ 高了。",
                "translation": "(Ceny wzrosły / Ceny stały się wyższe)",
                "options": ["变", "是", "很", "有"],
                "correct": "变",
                "explanation": "'价格变高了' (Jiàgé biàn gāo le) = Ceny wzrosły. '变高' = stały się wyższe. Ekonomiczne wyrażenia zmian: '价格变低了' (ceny spadły), '工资变多了' (wynagrodzenie wzrosło), '生活变好了' (życie się poprawiło). '变' + przymiotnik porównawczy opisuje kierunek zmiany. W polskim 'wzrosły/spadły', w chińskim — 'stały się wyższe/niższe'."
            },
            {
                "id": "pc_ec6",
                "question": "他不 _____ 抽烟了。",
                "translation": "(On już nie pali papierosów)",
                "options": ["再", "又", "还", "在"],
                "correct": "再",
                "explanation": "'不再...了' (bù zài...le) = 'już nie...' — zmiana nawyku/zachowania. '他不再抽烟了' (Tā bù zài chōuyān le) = On już nie pali. '不再' sygnalizuje PRZERWANIE dotychczasowego stanu. '了' na końcu podkreśla, że zmiana nastąpiła. Porównaj: '不' = nie (ogólnie), '不再' = już nie (zmiana). W polskim 'już nie' — dokładna analogia. '不再喝酒了' (już nie pije), '不再迟到了' (już się nie spóźnia)."
            },
            {
                "id": "pc_ec7",
                "question": "孩子们 _____ 大了。",
                "translation": "(Dzieci dorosły / Dzieci wyrosły)",
                "options": ["长", "变", "是", "有"],
                "correct": "长",
                "explanation": "'长大了' (zhǎng dà le) = dorosnąć/wyrosnąć. '长' (zhǎng) = rosnąć, '大' (dà) = duży. To złożenie rezultatywne: 'rosły + stały się duże'. '孩子们长大了' (Háizimen zhǎng dà le). W polskim 'dorosły' lub 'wyrosły' ma podobną strukturę. Inne: '长高了' (urósł na wysokość), '长胖了' (przytyła — urósł tęgi). '长' + przymiotnik = zmiana fizyczna."
            },
            {
                "id": "pc_ec8",
                "question": "最近他 _____ 了很多。",
                "translation": "(Ostatnio on bardzo schudł)",
                "options": ["瘦", "瘦的", "变瘦", "瘦了"],
                "correct": "瘦",
                "explanation": "'他瘦了很多' (Tā shòu le hěn duō) = On schudł bardzo dużo. Przymiotnik + '了' + stopień zmiany. '瘦' (shòu) = chudy/schudnąć. '了' po przymiotniku = zmiana stanu. '很多' wskazuje stopień zmiany. Inne: '胖了五公斤' (przytyła 5 kg), '高了十厘米' (urósł o 10 cm). Przymiotnik + 了 + miara = precyzyjne wyrażenie zmiany."
            },
            {
                "id": "pc_ec9",
                "question": "他从学生 _____ 老师了。",
                "translation": "(On z ucznia stał się nauczycielem)",
                "options": ["变成", "变", "成", "做"],
                "correct": "变成",
                "explanation": "'变成' (biàn chéng) = 'stać się / zmienić się w'. '从A变成B' = z A zmienić się w B. '他从学生变成老师了' (Tā cóng xuéshēng biàn chéng lǎoshī le). '变' = zmienić się, '成' = stać się / w. Razem opisują transformację tożsamości. W polskim 'z ucznia stał się nauczycielem'. Inne: '从朋友变成恋人' (z przyjaciół stali się parą)."
            },
            {
                "id": "pc_ec10",
                "question": "房间 _____ 干净了。",
                "translation": "(Pokój stał się czysty / Pokój jest teraz czysty)",
                "options": ["变", "是", "很", "在"],
                "correct": "变",
                "explanation": "'房间变干净了' (Fángjiān biàn gānjìng le) = Pokój stał się czysty. Implikacja: wcześniej był brudny. '变' + pozytywny przymiotnik + '了' = zmiana na lepsze. To częsty wzorzec w codziennych sytuacjach. '教室变安静了' (klasa stała się cicha), '街道变漂亮了' (ulice stały się ładne). Podkreślamy kontrast: było źle → jest dobrze."
            },
            {
                "id": "pc_ec11",
                "question": "他越 _____ 越快。",
                "translation": "(Im więcej biegał, tym szybciej [biegł])",
                "options": ["跑", "跑的", "在跑", "跑了"],
                "correct": "跑",
                "explanation": "'越...越...' (yuè...yuè...) = 'im więcej...tym bardziej...' — połączenie dwóch zmian proporcjonalnych. '他越跑越快' (Tā yuè pǎo yuè kuài) = Im więcej biegał, tym szybciej. Pierwszy '越' + czasownik, drugi '越' + przymiotnik/efekt. Inne: '越吃越胖' (im więcej je, tym bardziej tyje), '越想越生气' (im więcej myśli, tym bardziej się złości). Piękna symetryczna konstrukcja."
            },
            {
                "id": "pc_ec12",
                "question": "下雨了，路变 _____ 了。",
                "translation": "(Pada deszcz, droga stała się śliska)",
                "options": ["滑", "滑的", "很滑", "滑着"],
                "correct": "滑",
                "explanation": "'路变滑了' (Lù biàn huá le) = Droga stała się śliska. '变' + przymiotnik + '了' to standardowa formuła zmiany stanu. '下雨了' (Xià yǔ le) = zaczęło padać — też zmiana stanu! Dwa '了' w jednym zdaniu — oba sygnalizują zmianę. Deszcz spowodował zmianę drogi. W polskim: 'Pada, [więc] droga jest śliska' — bez wyraźnego oznaczenia zmiany."
            },
            {
                "id": "pc_ec13",
                "question": "她开始 _____ 中文了。",
                "translation": "(Ona zaczęła się uczyć chińskiego)",
                "options": ["学", "学的", "学着", "学了"],
                "correct": "学",
                "explanation": "'开始' (kāishǐ) = 'zacząć' — bezpośrednio wskazuje na zmianę (początek czegoś nowego). '她开始学中文了' (Tā kāishǐ xué Zhōngwén le). '开始' + czasownik + '了' = zaczęła nową czynność. '了' podkreśla, że ta zmiana nastąpiła. Inne: '开始工作了' (zaczęła pracować), '开始下雨了' (zaczęło padać). '开始' jest najprostszym sposobem wyrażenia nowego początku."
            },
            {
                "id": "pc_ec14",
                "question": "他的态度完全 _____ 了。",
                "translation": "(Jego postawa kompletnie się zmieniła)",
                "options": ["变了", "改变了", "改变", "变化"],
                "correct": "改变了",
                "explanation": "'改变' (gǎibiàn) = 'zmienić/zmienić się' — bardziej formalne niż '变'. '他的态度完全改变了' (Tā de tàidu wánquán gǎibiàn le). '完全' (wánquán) = kompletnie, całkowicie. '改变' może być przechodnie (改变计划 = zmienić plan) lub nieprzechodnie (态度改变了 = postawa się zmieniła). Porównaj: '变' (zmiana naturalna), '改变' (zmiana świadoma/głęboka)."
            },
            {
                "id": "pc_ec15",
                "question": "春天到了，花 _____ 开了。",
                "translation": "(Przyszła wiosna, kwiaty zakwitły)",
                "options": ["都", "也", "就", "还"],
                "correct": "都",
                "explanation": "'花都开了' (Huā dōu kāi le) = Kwiaty wszystkie zakwitły. '都' (dōu) = wszystkie. '春天到了' (Chūntiān dào le) = wiosna przyszła — '了' sygnalizuje nadejście. '花都开了' — '开' (kāi) tu oznacza 'kwitnąć/otwierać się'. Cztery znaki, dwie zmiany stanu, piękny obraz natury. W polskim: 'Wiosna przyszła, kwiaty zakwitły' — podobna poetycka prostota."
            }
        ]
    }
]

# Merge
for cat in new_cats:
    data.append(cat)

# Validate
all_ids = set()
dupes = []
for c in data:
    for item in c['items']:
        if item['id'] in all_ids:
            dupes.append(item['id'])
        all_ids.add(item['id'])

if dupes:
    print(f"ERROR: Duplicate IDs: {dupes}")
    exit(1)

total_items = sum(len(c['items']) for c in data)
print(f"Total: {len(data)} categories, {total_items} items")
print(f"New categories added: {[c['key'] for c in new_cats]}")

with open(PATH, 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Batch 6 saved successfully!")

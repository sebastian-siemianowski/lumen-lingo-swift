#!/usr/bin/env python3
"""Batch 6: Add categories 49-53 to polish_chinese grammar."""
import json, os

FILE = os.path.join(os.path.dirname(__file__), '..', 'LumenLingo', 'LumenLingo',
    'Resources', 'Content', 'polish_chinese', 'grammar_polish_chinese.json')

new_categories = [
    {
        "key": "imperative_sentences",
        "name": "Zdania rozkazujące",
        "description": "祈使句",
        "iconName": "hand.raised.fill",
        "color": "#ef4444",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_imp1",
                "question": "_____ 坐！",
                "translation": "(Proszę usiąść!)",
                "options": ["请", "让", "叫", "要"],
                "correct": "请",
                "explanation": "'请' (qǐng) = proszę — najważniejsze słowo grzecznościowe w poleceniach. '请坐' = proszę usiąść. W polskim 'proszę' też zmiękcza rozkaz, ale chiński '请' jest JESZCZE bardziej konieczny. Bez '请' rozkaz brzmi ostro: '坐！' = siadaj! (jak do psa). Z '请' — uprzejmie: '请坐' (proszę usiąść). '请进' (proszę wejść), '请说' (proszę mówić). Zasada: w każdej uprzejmej prośbie dodaj '请' na początku."
            },
            {
                "id": "pc_imp2",
                "question": "你 _____ 说话！",
                "translation": "(Nie mów! / Bądź cicho!)",
                "options": ["别", "不", "没", "无"],
                "correct": "别",
                "explanation": "'别' (bié) = nie rób / nie + rozkaz — to JEDYNY prawidłowy sposób tworzenia negatywnego rozkazu. NIE używaj '不' w rozkazach! '别说话！' = nie mów! '别走！' = nie odchodź! '别哭！' = nie płacz! Porównaj: '不说话' = nie mówi (stwierdzenie faktu), '别说话' = nie mów! (rozkaz). To jak polska różnica między 'nie mówi' a 'nie mów!'. '别' zawsze wymaga drugiej osoby i kontekstu rozkazu."
            },
            {
                "id": "pc_imp3",
                "question": "我们走 _____ ！",
                "translation": "(Chodźmy!)",
                "options": ["吧", "了", "啊", "呢"],
                "correct": "吧",
                "explanation": "'吧' (ba) na końcu zdania = łagodna sugestia / 'no chodź'. '走吧！' = chodźmy! / no to idźmy! '吧' zamienia rozkaz w PROPOZYCJĘ — to jak polskie 'no...!' lub '-my'. '走！' = idź! (rozkaz), '走吧！' = chodźmy! (zaproszenie). '吃饭吧' (jedzmy), '开始吧' (zacznijmy), '休息吧' (odpocznijmy). '吧' to jeden z najczęściej używanych finałów — Chińczycy uwielbiają łagodzić wypowiedzi."
            },
            {
                "id": "pc_imp4",
                "question": "_____ 我看看。",
                "translation": "(Pozwól mi zobaczyć / Daj mi zerknąć.)",
                "options": ["让", "请", "叫", "给"],
                "correct": "让",
                "explanation": "'让' (ràng) = pozwolić / dać komuś + czynność. '让我看看' = pozwól mi zerknąć. Struktura: '让' + osoba + czasownik. '让我想想' (daj mi pomyśleć), '让他进来' (pozwól mu wejść). '让' to NIE to samo co '请' — '请' jest grzecznościowe, '让' oznacza ZEZWOLENIE. Polski odpowiednik: pozwól/daj + bezokolicznik. '让我试试' (daj mi spróbować). Podwojenie czasownika (看看, 想想) dodaje ton 'tylko troszeczkę'."
            },
            {
                "id": "pc_imp5",
                "question": "快 _____ 来！",
                "translation": "(Szybko chodź tu!)",
                "options": ["点儿", "些", "地", "得"],
                "correct": "点儿",
                "explanation": "'快点儿' (kuài diǎnr) = szybciej / pospiesz się — najpopularniejszy rozkaz w codziennym chińskim. '快点儿来！' = szybko chodź tu! '快' = szybko, '点儿' = trochę (zmiękcza). Bez '点儿': '快来！' (chodź szybko! — bardziej ostro). '快点儿吃' (jedz szybciej), '快点儿走' (idź szybciej). To jak polskie 'no dawaj szybciej!' — niby rozkaz, ale z '点儿' nie brzmi agresywnie."
            },
            {
                "id": "pc_imp6",
                "question": "_____ 把窗户关上。",
                "translation": "(Proszę zamknąć okno.)",
                "options": ["请", "别", "快", "让"],
                "correct": "请",
                "explanation": "'请把窗户关上' — łączy uprzejme '请' z konstrukcją '把'. '把' + obiekt + czasownik + rezultat = wydaj polecenie dotyczące konkretnego obiektu. '关上' = zamknąć (z rezultatem: zamknięte). Polski: 'proszę zamknąć okno' — też uprzejmy rozkaz. Struktura '请把...V上/好/完' jest standardowa w formalnych prośbach: '请把门打开' (proszę otworzyć drzwi), '请把作业做完' (proszę dokończyć zadanie)."
            },
            {
                "id": "pc_imp7",
                "question": "你们 _____ 吵了！",
                "translation": "(Przestańcie się kłócić!)",
                "options": ["别", "不", "没", "不要"],
                "correct": "别",
                "explanation": "'别吵了！' = przestańcie się kłócić! '别...了' = przestań + czynność — dodanie '了' oznacza 'już dość / od teraz koniec'. '别哭了' (przestań płakać), '别说了' (przestań mówić). Porównaj: '别吵' = nie kłóćcie się (ogólny zakaz), '别吵了' = PRZESTAŃCIE się kłócić (coś już trwa). '了' dodaje sens 'zmiana stanu' — od kłócenia do ciszy. UWAGA: '不要' też może zastąpić '别', ale jest bardziej formalne."
            },
            {
                "id": "pc_imp8",
                "question": "大家 _____ 注意！",
                "translation": "(Uwaga wszystkim! / Proszę o uwagę!)",
                "options": ["请", "别", "快", "要"],
                "correct": "请",
                "explanation": "'大家请注意' = uwaga wszystkim / proszę o uwagę — formalny zwrot do grupy. '大家' (dàjiā) = wszyscy. W polskim też mamy 'Uwaga!' lub 'Proszę o uwagę!'. W chińskim '请注意' jest standardowe w szkołach, na spotkaniach, w komunikatach. Bez '请': '注意！' = uwaga! (krótko, np. ostrzeżenie). Z '请': uprzejme polecenie. '请注意安全' (proszę uważać na bezpieczeństwo) — typowe na lotniskach i dworcach."
            },
            {
                "id": "pc_imp9",
                "question": "_____ 紧张！放松！",
                "translation": "(Nie denerwuj się! Rozluźnij się!)",
                "options": ["别", "不", "没", "不是"],
                "correct": "别",
                "explanation": "'别紧张！' = nie denerwuj się! Jeszcze jeden przykład '别' + przymiotnik/stan = 'nie bądź taki'. '别紧张' (nie stresuj się), '别着急' (nie spieszaj się / spokojnie), '别害怕' (nie bój się), '别担心' (nie martw się). To codzienne pocieszenia w chińskim — jak polskie 'spokojnie / nie martw się'. '放松' (fàngsōng) = rozluźnij się — drugi rozkaz bez '别', bo jest pozytywny."
            },
            {
                "id": "pc_imp10",
                "question": "你 _____ 好好学习！",
                "translation": "(Musisz dobrze się uczyć!)",
                "options": ["要", "别", "请", "快"],
                "correct": "要",
                "explanation": "'要' (yào) w rozkazach = musisz / masz + czynność — mocniejsze niż '请', wyrażające WYMAGANIE. '你要好好学习！' = musisz dobrze się uczyć! '好好' (hǎohāo) = porządnie/dobrze (reduplikacja = podkreślenie). '要' w imperatywie to jak polskie 'masz...!' — rodzic do dziecka. '你要听话！' (masz być grzeczny!), '你要努力！' (masz się starać!). Negatyw: '不要' = nie wolno / nie masz + czynność."
            },
            {
                "id": "pc_imp11",
                "question": "把手机 _____ ！",
                "translation": "(Wyłącz telefon!)",
                "options": ["关掉", "关了", "关着", "关过"],
                "correct": "关掉",
                "explanation": "'关掉' (guān diào) = wyłączyć (z rezultatem: pozbyć się). '掉' jako komplement rezultatywny = 'precz/pozbycie się'. '把手机关掉' = wyłącz telefon (dosł. weź telefon i wyłącz-precz). Inne z '掉': '扔掉' (wyrzuć), '删掉' (skasuj), '忘掉' (zapomnij). '把' + obiekt + V + '掉' — potężna struktura na rozkazy dotyczące ELIMINACJI czegoś. W kinie: '把手机关掉！', w sprzątaniu: '把垃圾扔掉！'"
            },
            {
                "id": "pc_imp12",
                "question": "小心 _____ ！",
                "translation": "(Uważaj na schodek!)",
                "options": ["台阶", "危险", "安全", "问题"],
                "correct": "台阶",
                "explanation": "'小心台阶！' (xiǎoxīn táijiē) = uważaj na schodek! '小心' = uważaj/bądź ostrożny — sam w sobie jest rozkazem. '小心' + rzeczownik = uważaj na X. '小心车！' (uważaj na samochód!), '小心地滑' (uwaga, ślisko!), '小心烫' (uwaga, gorące!). W polskim mamy tak samo: 'Uwaga + co'. '小心' to jedno z pierwszych słów, które usłyszysz w Chinach — jest WSZĘDZIE: na schodach, drzwiach, podłogach."
            },
            {
                "id": "pc_imp13",
                "question": "_____ 喝点儿水。",
                "translation": "(Wypij trochę wody.)",
                "options": ["先", "请", "快", "要"],
                "correct": "先",
                "explanation": "'先' (xiān) = najpierw — w rozkazach nadaje kolejność. '先喝点儿水' = najpierw wypij trochę wody. '先' + V = zrób X najpierw. '先坐' (najpierw usiądź), '先吃饭' (najpierw zjedz), '先休息一下' (najpierw odpocznij chwilę). W polskim: 'najpierw + rozkaz'. '先...再...' = najpierw...potem... '先洗手再吃饭' (najpierw umyj ręce, potem jedz). Chiński kładzie DUŻY nacisk na kolejność czynności."
            },
            {
                "id": "pc_imp14",
                "question": "你给我 _____ ！",
                "translation": "(Wyjdź mi stąd! / Wynoś się!)",
                "options": ["出去", "出来", "进去", "过来"],
                "correct": "出去",
                "explanation": "'你给我出去！' = wynoś mi się! '给我' (gěi wǒ) przed rozkazem = 'mi' — dodaje GNIEW i osobiste zaangażowanie. '出去' = wyjść (ruch od mówiącego na zewnątrz). To BARDZO ostry rozkaz — jak polskie 'wynoś się!'. '给我' w rozkazach to intensyfikator emocji: '给我站住！' (stój mi!), '给我安静！' (bądź mi cicho!). UWAGA: '给我' w normalnym zdaniu = daj mi. W rozkazie = 'a żebyś mi...!'"
            },
            {
                "id": "pc_imp15",
                "question": "千万 _____ 忘了！",
                "translation": "(Pod żadnym pozorem nie zapomnij!)",
                "options": ["别", "不", "没", "不会"],
                "correct": "别",
                "explanation": "'千万别忘了！' = pod żadnym pozorem nie zapomnij! '千万' (qiānwàn) = za wszelką cenę / koniecznie — WZMACNIA rozkaz. Dosłownie '千万' = tysiąc-dziesięć tysięcy (= ogromna liczba). '千万别' = absolutnie nie + rozkaz. '千万别迟到' (absolutnie się nie spóźnij), '千万别告诉他' (ani słowa mu!). '千万要' = koniecznie + rozkaz: '千万要小心' (koniecznie uważaj). W polskim: 'za nic w świecie nie...' lub 'koniecznie...'"
            }
        ]
    },
    {
        "key": "comparison_advanced",
        "name": "Porównania zaawansowane",
        "description": "高级比较",
        "iconName": "arrow.up.arrow.down",
        "color": "#8b5cf6",
        "level": "advanced",
        "items": [
            {
                "id": "pc_cmpa1",
                "question": "他跑得比我 _____ 多了。",
                "translation": "(On biega o wiele szybciej ode mnie.)",
                "options": ["快", "很快", "最快", "更快"],
                "correct": "快",
                "explanation": "W strukturze '比' przymiotnik stoi BEZ '很'! '比我快' = szybciej ode mnie. NIGDY '比我很快'. '多了' na końcu = o wiele / znacznie. '他比我快多了' = jest O WIELE szybszy. Inne wzmocnienia: '快得多' (o wiele szybszy), '快一点儿' (trochę szybszy), '快两倍' (dwa razy szybszy). Porównaj polski: 'szybszy ode mnie' — też bez 'bardzo'. To częsty błąd: '比' i '很' NIE łączą się."
            },
            {
                "id": "pc_cmpa2",
                "question": "这个 _____ 那个一样大。",
                "translation": "(To jest tak samo duże jak tamto.)",
                "options": ["跟", "比", "和", "对"],
                "correct": "跟",
                "explanation": "'跟...一样' (gēn...yīyàng) = tak samo jak — struktura RÓWNOŚCI. 'A跟B一样 + przymiotnik' = A jest tak samo [jakie] jak B. '跟你一样高' (tak samo wysoki jak ty), '跟昨天一样冷' (tak samo zimno jak wczoraj). Negacja: '不一样' = nie tak samo / inny. '跟' można zastąpić przez '和', ale '跟' jest częstsze w mowie. To odpowiednik polskiego 'tak samo...jak' lub 'taki sam jak'."
            },
            {
                "id": "pc_cmpa3",
                "question": "他是我们班 _____ 高的。",
                "translation": "(On jest najwyższy w naszej klasie.)",
                "options": ["最", "更", "比", "很"],
                "correct": "最",
                "explanation": "'最' (zuì) = naj- — superlatyw w chińskim. '最高' = najwyższy, '最好' = najlepszy, '最大' = największy. Struktura: '最' + przymiotnik + '的' (opcjonalne). W polskim dodajemy 'naj-' na początku, w chińskim '最' przed przymiotnikiem. '最' + V też działa: '我最喜欢...' (najbardziej lubię...). '他是最好的老师' (jest najlepszym nauczycielem). PROSTOTA chińskiego: brak odmiany, brak końcówek — po prostu '最' + słowo."
            },
            {
                "id": "pc_cmpa4",
                "question": "今天比昨天 _____ 冷一点儿。",
                "translation": "(Dziś jest trochę zimniej niż wczoraj.)",
                "options": ["还要", "更", "最", "很"],
                "correct": "还要",
                "explanation": "'还要' (hái yào) = jeszcze bardziej — wzmacnia porównanie z '比'. '比昨天还要冷' = jeszcze zimniej niż wczoraj. '还要' podkreśla, że różnica jest ZASKAKUJĄCA. Porównaj: '比昨天冷' (zimniej niż wczoraj — neutralne), '比昨天还要冷' (JESZCZE zimniej niż wczoraj — z zaskoczeniem). '一点儿' na końcu = trochę — łagodzi. Razem: 'jeszcze trochę zimniej' — precyzyjne i naturalne."
            },
            {
                "id": "pc_cmpa5",
                "question": "这本书 _____ 那本好看。",
                "translation": "(Ta książka nie jest tak dobra jak tamta.)",
                "options": ["没有", "不比", "不是", "没"],
                "correct": "没有",
                "explanation": "'没有' w porównaniach = nie jest tak...jak — negacja równości i '比'. '没有那本好看' = nie jest tak dobra jak tamta. UWAGA: '不比' ZNACZY CO INNEGO! '不比那本好看' = nie jest [koniecznie] lepsza (ale może być równa). '没有' = ZDECYDOWANIE gorsza. To subtelna różnica, której nie ma w polskim. '他没有你高' (nie jest tak wysoki jak ty = jest niższy). '他不比你高' (niekoniecznie wyższy = może równy)."
            },
            {
                "id": "pc_cmpa6",
                "question": "他的中文越来越 _____ 了。",
                "translation": "(Jego chiński jest coraz lepszy.)",
                "options": ["好", "很好", "最好", "更好"],
                "correct": "好",
                "explanation": "'越来越' (yuè lái yuè) = coraz bardziej — progresywne porównanie. '越来越好' = coraz lepszy, '越来越冷' = coraz zimniej, '越来越难' = coraz trudniej. Po '越来越' przymiotnik stoi BEZ '很'! Struktura odzwierciedla PROCES zmiany w czasie. W polskim: 'coraz + stopień wyższy'. W chińskim: '越来越' + przymiotnik (forma podstawowa). '他越来越胖了' (jest coraz grubszy). '了' na końcu podkreśla zmianę stanu."
            },
            {
                "id": "pc_cmpa7",
                "question": "你越说，他越 _____ 。",
                "translation": "(Im więcej mówisz, tym bardziej się złości.)",
                "options": ["生气", "很生气", "生气了", "不生气"],
                "correct": "生气",
                "explanation": "'越A越B' (yuè...yuè...) = im bardziej A, tym bardziej B — proporcjonalne porównanie. '越说越生气' = im więcej mówisz, tym bardziej zły. To PIĘKNA struktura — łączy dwa procesy. '越吃越胖' (im więcej jesz, tym grubszy), '越学越有趣' (im więcej się uczysz, tym ciekawiej). W polskim: 'im...tym...' — identyczna logika! '越快越好' = im szybciej, tym lepiej — najczęściej używane w codziennym chińskim."
            },
            {
                "id": "pc_cmpa8",
                "question": "他 _____ 我高两厘米。",
                "translation": "(On jest wyższy ode mnie o dwa centymetry.)",
                "options": ["比", "跟", "没有", "和"],
                "correct": "比",
                "explanation": "'比' + konkretna różnica = precyzyjne porównanie. '比我高两厘米' = wyższy ode mnie o 2 cm. Struktura: A比B + przymiotnik + LICZBA + miara. '比你大三岁' (starszy od ciebie o 3 lata), '比昨天贵十块' (droższe niż wczoraj o 10 yuanów). W polskim: 'o X wyższy/starszy' — też podajemy konkretną różnicę. WAŻNE: kolejność to 'przymiotnik + liczba', NIE odwrotnie."
            },
            {
                "id": "pc_cmpa9",
                "question": "他长得 _____ 他爸爸一样。",
                "translation": "(Wygląda tak samo jak jego tata.)",
                "options": ["跟", "比", "像", "是"],
                "correct": "跟",
                "explanation": "'长得跟...一样' = wyglądać tak samo jak... '长得' (zhǎng de) = wyglądać (o wyglądzie). '跟他爸爸一样' = tak samo jak jego tata. '跟...一样' po '长得' jest naturalnym wyrażeniem podobieństwa. Można dodać szczegół: '跟他爸爸一样帅' (tak samo przystojny jak tata). '长得像' = wyglądać PODOBNIE do (ale nie identycznie). '跟...一样' = tak samo, '像' = podobnie — subtelna różnica jak polskie 'taki sam' vs 'podobny'."
            },
            {
                "id": "pc_cmpa10",
                "question": "这个比那个贵 _____ 。",
                "translation": "(To jest o wiele droższe od tamtego.)",
                "options": ["得多", "很多", "多了", "太多"],
                "correct": "得多",
                "explanation": "'贵得多' = o wiele droższe — '得多' po przymiotniku wzmacnia porównanie z '比'. '得多' i '多了' są WYMIENNE, ale '得多' jest trochę bardziej formalne. '好得多' = o wiele lepsze, '大得多' = o wiele większe. UWAGA: '很多' NIE działa po przymiotniku w porównaniu! '贵很多' ❌ → '贵得多' ✓ lub '贵多了' ✓. To częsty błąd. W polskim mamy 'o wiele/znacznie + stopień wyższy'."
            },
            {
                "id": "pc_cmpa11",
                "question": "他不如我 _____ 得快。",
                "translation": "(On nie biega tak szybko jak ja.)",
                "options": ["跑", "走", "说", "写"],
                "correct": "跑",
                "explanation": "'不如' (bùrú) = nie dorównywać / być gorszym od — TRZECI sposób porównania (obok '比' i '没有'). 'A不如B + V + 得 + przymiotnik' = A nie robi X tak dobrze jak B. '他不如我跑得快' = on nie biega tak szybko jak ja. '我不如你聪明' (nie jestem tak bystry jak ty). '不如' jest bardziej LITERACKIE niż '没有'. W mowie: '没有你跑得快'. W piśmie/formalnie: '不如你跑得快'."
            },
            {
                "id": "pc_cmpa12",
                "question": "这两个 _____ 不多。",
                "translation": "(Te dwa są prawie takie same.)",
                "options": ["差", "比", "跟", "有"],
                "correct": "差",
                "explanation": "'差不多' (chà bu duō) = prawie takie same / mniej więcej — jedno z NAJWAŻNIEJSZYCH wyrażeń w chińskim. Dosłownie: różnica (差) nie duża (不多). '这两个差不多' = te dwa są prawie jednakowe. Używa się WSZĘDZIE: '差不多了' (prawie gotowe), '差不多一样' (prawie takie same), '我差不多到了' (prawie jestem na miejscu). To odpowiednik polskiego 'mniej więcej / tak sobie / niezły'. Chińczycy KOCHAJĄ to wyrażenie."
            },
            {
                "id": "pc_cmpa13",
                "question": "与其在家，_____ 出去走走。",
                "translation": "(Zamiast siedzieć w domu, lepiej wyjść na spacer.)",
                "options": ["不如", "没有", "比", "还是"],
                "correct": "不如",
                "explanation": "'与其A不如B' (yǔqí...bùrú...) = zamiast A, lepiej B — porównanie preferencji. '与其在家，不如出去走走' = zamiast siedzieć w domu, lepiej wyjść. To FORMALNA struktura decyzyjna. '与其等待，不如行动' (zamiast czekać, lepiej działać). '不如' tutaj = lepiej / raczej. W codziennej mowie: '还是出去吧' (może jednak wyjdźmy). '与其...不如...' to styl pisarzy i mówców — elegancki i precyzyjny."
            },
            {
                "id": "pc_cmpa14",
                "question": "他一年比一年 _____ 。",
                "translation": "(On jest z roku na rok grubszy.)",
                "options": ["胖", "很胖", "胖了", "最胖"],
                "correct": "胖",
                "explanation": "'一年比一年' = z roku na rok / rok za rokiem coraz bardziej — porównanie temporalne. '一年比一年胖' = z roku na rok grubszy. Struktura: '一 + miara czasu + 比 + 一 + miara czasu + przymiotnik'. '一天比一天冷' (z dnia na dzień zimniej), '一次比一次好' (z każdym razem lepiej). Po '比' przymiotnik BEZ '很'. W polskim: 'z roku na rok' — identyczna konstrukcja powtórzenia jednostki czasu."
            },
            {
                "id": "pc_cmpa15",
                "question": "他 _____ 不上你。",
                "translation": "(On nie może się z tobą równać.)",
                "options": ["比", "跟", "像", "合"],
                "correct": "比",
                "explanation": "'比不上' (bǐ bu shàng) = nie móc się równać / nie dorównywać — idiom porównawczy. '比不上你' = nie mogę się z tobą równać. '上' jako komplement = osiągnąć poziom. '比不上' = porównuję, ale nie osiągam. '他的成绩比不上你' (jego wyniki nie dorównują twoim). Pozytyw: '比得上' = dorównuje / może się równać. '你比得上任何人' (dorównujesz każdemu). Skromność: Chińczycy często mówią '我比不上你' z grzeczności."
            }
        ]
    },
    {
        "key": "double_negation",
        "name": "Podwójna negacja",
        "description": "双重否定",
        "iconName": "xmark.circle.fill",
        "color": "#f97316",
        "level": "advanced",
        "items": [
            {
                "id": "pc_dn1",
                "question": "我 _____ 不知道这件事。",
                "translation": "(Nie jest tak, że nie wiem o tej sprawie. = Oczywiście że wiem.)",
                "options": ["不是", "是", "没", "也"],
                "correct": "不是",
                "explanation": "'不是不知道' = nie jest tak, że nie wiem = OCZYWIŚCIE ŻE WIEM. Podwójna negacja w chińskim daje WZMOCNIONE potwierdzenie — tak samo jak w polskim! '不是不想' = nie jest tak, że nie chcę (= chcę, ale...). '不是不知道' to delikatny sposób na powiedzenie 'wiem, wiem, ale...' — zostawia przestrzeń na wyjaśnienie. W chińskim podwójna negacja jest CZĘSTSZA niż w polskim — to styl retoryczny."
            },
            {
                "id": "pc_dn2",
                "question": "他不能 _____ 去。",
                "translation": "(On nie może nie iść. = Musi iść.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不能不去' = nie może nie iść = MUSI iść. '不能不' = nie może nie = jest zmuszony/musi. Dwa '不' tworzą logiczną konieczność: ¬(¬P) = P. '不能不承认' (nie mogę nie przyznać = muszę przyznać), '不能不说' (nie mogę nie powiedzieć = muszę powiedzieć). W polskim identyczna logika: 'nie mogę nie iść' = muszę iść. Ton jest bardziej EMFATYCZNY niż zwykłe '必须去' (muszę iść)."
            },
            {
                "id": "pc_dn3",
                "question": "没有人 _____ 喜欢他。",
                "translation": "(Nie ma nikogo, kto by go nie lubił. = Wszyscy go lubią.)",
                "options": ["不", "没", "别", "很"],
                "correct": "不",
                "explanation": "'没有人不喜欢他' = nie ma nikogo, kto by go nie lubił = WSZYSCY go lubią. '没有...不...' = nie ma (czegoś/kogoś), kto by nie... To potężna struktura retoryczna! '没有人不知道' (nie ma nikogo, kto by nie wiedział = wszyscy wiedzą). '没有什么不可以' (nie ma niczego, co byłoby niemożliwe). W polskim: 'nie ma nikogo, kto nie...' — identyczna podwójna negacja z uniwersalnym znaczeniem."
            },
            {
                "id": "pc_dn4",
                "question": "这件事非做 _____ 。",
                "translation": "(Tę sprawę trzeba koniecznie zrobić.)",
                "options": ["不可", "不行", "不了", "不能"],
                "correct": "不可",
                "explanation": "'非...不可' (fēi...bùkě) = musi / koniecznie trzeba — najsilniejsza podwójna negacja. Dosłownie: 'jeśli nie...to niemożliwe' = JEDYNA opcja. '非做不可' = MUSI być zrobione. '非去不可' = MUSZĘ iść (bez opcji). '非' (fēi) = nie / chyba że. '不可' = niemożliwe. Razem: 'chyba że X, inaczej niemożliwe' = X jest konieczne. To BARDZO mocne wyrażenie — silniejsze niż '必须'. Używane w stanowczych deklaracjach."
            },
            {
                "id": "pc_dn5",
                "question": "我不得 _____ 承认。",
                "translation": "(Muszę przyznać. / Nie mogę nie przyznać.)",
                "options": ["不", "没", "别", "很"],
                "correct": "不",
                "explanation": "'不得不' (bùdé bù) = być zmuszonym / nie mieć wyboru — kolejna forma podwójnej negacji wyrażająca KONIECZNOŚĆ. '不得不承认' = muszę przyznać (nie mam wyjścia). '不得' = nie móc/nie wolno, dodatkowe '不' = nie mogę NIE zrobić = MUSZĘ. '不得不走' (muszę iść, nie mam wyboru), '不得不同意' (muszę się zgodzić). Różnica: '必须' = muszę (neutralne), '不得不' = muszę (niechętnie). W polskim: 'nie mogę nie...' = muszę wbrew woli."
            },
            {
                "id": "pc_dn6",
                "question": "_____ 人不犯错。",
                "translation": "(Nie ma człowieka, który nie popełnia błędów. = Każdy się myli.)",
                "options": ["没有", "不是", "没", "不会"],
                "correct": "没有",
                "explanation": "'没有人不犯错' = nie ma nikogo, kto nie popełnia błędów = KAŻDY się myli. '没有人不...' jest silniejsze niż '每个人都...' (każdy...). Podwójna negacja w chińskim często brzmi bardziej PRZEKONUJĄCO i RETORYCZNE. To jak w polskim: 'nie ma takiego, kto by nie...' — brzmi mądrzej niż 'każdy...'. W przemowach, esejach i przysłowiach podwójna negacja jest preferowana. '没有什么不能改变' (nie ma niczego, co nie może się zmienić)."
            },
            {
                "id": "pc_dn7",
                "question": "他说的话不无 _____ 。",
                "translation": "(To co mówi, nie jest bez sensu. = Ma trochę racji.)",
                "options": ["道理", "意思", "办法", "问题"],
                "correct": "道理",
                "explanation": "'不无道理' (bùwú dàolǐ) = nie bez sensu — elegancka podwójna negacja. '不' + '无' (bez) = nie jest tak, że jest bez = TROCHĘ jest. '不无道理' = nie pozbawione sensu = coś w tym jest. To dyplomatyczne wyrażenie CZĘŚCIOWEJ zgody. '不无可能' (nie niemożliwe = może być). '不无关系' (nie bez związku = jest pewien związek). W polskim: 'nie bez racji' — identyczna litota. Używane w dyskusjach akademickich i formalnych."
            },
            {
                "id": "pc_dn8",
                "question": "你不应该不 _____ 他。",
                "translation": "(Nie powinieneś go ignorować. = Powinieneś mu pomóc.)",
                "options": ["理", "看", "听", "说"],
                "correct": "理",
                "explanation": "'不应该不理' = nie powinieneś nie zwracać uwagi = POWINIENEŚ reagować. '理' (lǐ) = zwracać uwagę na / reagować. '不理' = ignorować. '不应该不理' = nie powinieneś ignorować. Tutaj podwójna negacja łagodzi krytykę — zamiast 'powinieneś mu pomóc!' (直接), mówi 'nie powinieneś nie...' (delikatniej). W polskim podobnie: 'nie powinieneś ignorować' jest łagodniejsze niż 'musisz mu pomóc'. Chińczycy CENIĄ tę delikatność."
            },
            {
                "id": "pc_dn9",
                "question": "这个结果并非 _____ 预料。",
                "translation": "(Ten wynik nie był niespodziewany. = Można się było tego spodziewać.)",
                "options": ["不可", "没有", "不能", "不会"],
                "correct": "不可",
                "explanation": "'并非不可预料' = wcale nie był nieprzewidywalny = MOŻNA było przewidzieć. '并非' (bìngfēi) = wcale nie jest tak, że — formalna negacja z naciskiem. '不可预料' = niemożliwe do przewidzenia. '并非不可预料' = wcale nie niemożliwe do przewidzenia. To trzystopniowa negacja! '并' wzmacnia '非' (nie). Styl literacki/formalny. W polskim: 'bynajmniej nie niespodziewany' — ten sam efekt litoty."
            },
            {
                "id": "pc_dn10",
                "question": "谁能不 _____ 动呢？",
                "translation": "(Kto mógłby nie być poruszony? = Każdy byłby poruszony.)",
                "options": ["感", "激", "冲", "推"],
                "correct": "感",
                "explanation": "'谁能不感动呢？' = kto mógłby nie być poruszony? = KAŻDY byłby wzruszony. '感动' (gǎndòng) = wzruszenie/poruszenie. '谁能不...呢？' = retoryczna podwójna negacja w pytaniu. '呢' na końcu wzmacnia retoryczność. '谁能不喜欢？' (kto by nie lubił?), '谁能不同意？' (kto by się nie zgodził?). W polskim identycznie: 'kto by nie...' — pytanie retoryczne z podwójną negacją = 'każdy by...'"
            },
            {
                "id": "pc_dn11",
                "question": "不怕 _____ 怕慢。",
                "translation": "(Nie bój się, że jest trudno, bój się, że idziesz za wolno. = Wytrwałość jest kluczem.)",
                "options": ["难，就", "苦，就", "累，就", "错，就"],
                "correct": "难，就",
                "explanation": "'不怕难，就怕慢' — przysłowie: nie straszne trudności, straszna powolność. To NIE jest klasyczna podwójna negacja, ale przeciwstawienie dwóch negacji: '不怕X, 就怕Y'. '不怕' = nie bój się. '就怕' = właśnie bój się. Przysłowia chińskie UWIELBIAJĄ takie kontrasty. '不怕做不到，就怕想不到' (nie bój się, że nie zrobisz, bój się, że nie pomyślisz). W polskim: 'nie to straszne, że... lecz że...'."
            },
            {
                "id": "pc_dn12",
                "question": "他无时无刻不在 _____ 。",
                "translation": "(On non stop o tym myśli.)",
                "options": ["想", "说", "做", "看"],
                "correct": "想",
                "explanation": "'无时无刻不在想' = bez chwili przerwy ciągle myśli. '无时无刻' (wú shí wú kè) = w każdym momencie (dosł. bez godziny bez chwili). Z '不' = nie ma momentu, w którym nie... = ZAWSZE. '无时无刻不在想你' (ciągle o tobie myślę — romantyczne!). To piękny przykład POTRÓJNEJ negacji: 无 + 无 + 不 = zawsze. W polskim: 'ani chwili nie przestaje...' — podobna intensywność."
            },
            {
                "id": "pc_dn13",
                "question": "他不会不 _____ 的。",
                "translation": "(Na pewno przyjdzie. / Nie jest tak, że nie przyjdzie.)",
                "options": ["来", "去", "说", "做"],
                "correct": "来",
                "explanation": "'不会不来' = nie jest tak, że nie przyjdzie = NA PEWNO przyjdzie. '不会不' = na pewno tak (z pewnością). '不会不知道' (na pewno wie), '不会不帮忙' (na pewno pomoże). '的' na końcu dodaje pewność: '他不会不来的' = spokojnie, na pewno przyjdzie. W polskim: 'nie może nie przyjść' = na pewno przyjdzie. Ton jest USPOKAJAJĄCY — jak polskie 'na pewno / spokojnie, przyjdzie'."
            },
            {
                "id": "pc_dn14",
                "question": "这种行为 _____ 不令人气愤。",
                "translation": "(Takie zachowanie nie może nie budzić gniewu. = To oburzające.)",
                "options": ["不能", "不会", "不是", "不要"],
                "correct": "不能",
                "explanation": "'不能不令人气愤' = nie może nie budzić gniewu = BUDZI gniew (oburzające). '令人' (lìng rén) = sprawia, że ludzie... '气愤' (qìfèn) = gniew/oburzenie. '不能不令人...' to formalna struktura wyrażająca SILNE emocje przez podwójną negację. '不能不令人佩服' (nie można nie podziwiać), '不能不令人担忧' (nie można się nie martwić). W polskim: 'nie sposób nie oburzyć się' — identyczny styl formalnej litoty."
            },
            {
                "id": "pc_dn15",
                "question": "_____ 经一事，不长一智。",
                "translation": "(Nie przeżywszy czegoś, nie zdobędziesz mądrości. = Doświadczenie uczy.)",
                "options": ["不", "没", "别", "无"],
                "correct": "不",
                "explanation": "'不经一事，不长一智' = nie doświadczywszy jednej rzeczy, nie zdobędziesz jednej mądrości — klasyczne PRZYSŁOWIE. Dwie negacje '不' tworzą warunek konieczny: bez doświadczenia nie ma mądrości. '经' = doświadczyć, '长' = urosnąć/zdobyć, '智' = mądrość. W polskim: 'kto nie doświadczył, ten nie wie' lub 'mądry Polak po szkodzie'. Przysłowia chińskie (成语/谚语) BARDZO często używają podwójnej negacji — to ich stylistyczny znak rozpoznawczy."
            }
        ]
    },
    {
        "key": "bu_vs_mei",
        "name": "不 kontra 没",
        "description": "不和没的区别",
        "iconName": "arrow.left.arrow.right",
        "color": "#06b6d4",
        "level": "beginner",
        "items": [
            {
                "id": "pc_bm1",
                "question": "我今天 _____ 想吃饭。",
                "translation": "(Dziś nie chcę jeść.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不' (bù) = negacja WOLI, nawyków, stanów stałych i przyszłości. '不想' = nie chcę — to kwestia WOLI, nie faktu. Zasada nr 1: '不' neguje to, co ZALEŻY OD CIEBIE. '不想' (nie chcę), '不喜欢' (nie lubię), '不去' (nie pójdę). W polskim mamy jedno 'nie'. W chińskim: dwa różne 'nie'! '不' = nie (subiektywne) vs '没' = nie (obiektywne/przeszłe). To FUNDAMENTALNA różnica w chińskim."
            },
            {
                "id": "pc_bm2",
                "question": "他昨天 _____ 来上课。",
                "translation": "(On wczoraj nie przyszedł na zajęcia.)",
                "options": ["没", "不", "别", "没不"],
                "correct": "没",
                "explanation": "'没' (méi) = negacja PRZESZŁOŚCI i faktów. '没来' = nie przyszedł (fakt z przeszłości). Zasada nr 2: '没' neguje to, co JUŻ SIĘ STAŁO (lub nie stało). '昨天没吃' (wczoraj nie jadłem), '他没说' (on nie powiedział). '没' = coś się NIE WYDARZYŁO. '不' = ktoś NIE CHCE / ODMAWIA. '他不来' = on nie przyjdzie (odmowa), '他没来' = on nie przyszedł (fakt). Ta różnica nie istnieje w polskim!"
            },
            {
                "id": "pc_bm3",
                "question": "我 _____ 是中国人。",
                "translation": "(Nie jestem Chińczykiem.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不是' = nie jest/nie jestem — ZAWSZE '不', nigdy '没'! '是' (być) łączy się TYLKO z '不'. To wyjątek od reguły i trzeba go zapamiętać. '不是老师' (nie jestem nauczycielem), '不是他' (to nie on). Dlaczego? Bo '是' opisuje TOŻSAMOŚĆ — stałą cechę, nie wydarzenie. Nie możesz 'nie zdarzyć się być' kimś — po prostu NIE JESTEŚ. W polskim: 'nie jestem' — jedno 'nie', zero kłopotów. W chińskim: trzeba WYBRAĆ!"
            },
            {
                "id": "pc_bm4",
                "question": "我还 _____ 吃早饭呢。",
                "translation": "(Jeszcze nie jadłem śniadania.)",
                "options": ["没", "不", "没不", "别"],
                "correct": "没",
                "explanation": "'还没' (hái méi) = jeszcze nie — coś się JESZCZE nie wydarzyło. '还没吃' = jeszcze nie jadłem. '还没' implikuje, że ZAMIERZA się to zrobić. '你吃了吗？—还没。' (jadłeś? — jeszcze nie). '还没到' (jeszcze nie dotarł), '还没准备好' (jeszcze nie jest gotowe). Porównaj: '不吃' = nie jem (nie zamierzam), '还没吃' = jeszcze nie jadłem (ale zamierzam). W polskim: 'jeszcze nie' vs 'nie' — inna intencja!"
            },
            {
                "id": "pc_bm5",
                "question": "他 _____ 喝酒。",
                "translation": "(On nie pije alkoholu. [nigdy])",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不喝酒' = nie pije alkoholu (NAWYK/ZASADA). '不' + czynność = nie robi tego GENERALNIE. '不吃肉' (nie jem mięsa = jestem wegetarianinem), '不抽烟' (nie palę). To opis STAŁEJ cechy/nawyku. Porównaj: '没喝酒' = nie pił (konkretnie dziś/wczoraj). '不' = REGUŁA ŻYCIOWA, '没' = KONKRETNE WYDARZENIE. W polskim trzeba dodać 'nigdy' lub 'wcale': 'nie pije' (wieloznaczne) vs 'nie pił wczoraj' (konkretne)."
            },
            {
                "id": "pc_bm6",
                "question": "这个菜 _____ 好吃。",
                "translation": "(To danie nie jest smaczne.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不好吃' = niesmaczne — negacja PRZYMIOTNIKÓW zawsze z '不'! Zasada nr 3: przymiotniki ZAWSZE negujemy przez '不'. '不大' (nie duży), '不好' (nie dobry), '不贵' (nie drogi), '不冷' (nie zimno). NIGDY '没好吃', '没大'. Wyjątek: '没那么大' (nie aż tak duży) — ale tu '没' neguje '那么', nie przymiotnik. W polskim po prostu 'nie + przymiotnik' — zero komplikacji."
            },
            {
                "id": "pc_bm7",
                "question": "你 _____ 有钱吗？",
                "translation": "(Nie masz pieniędzy?)",
                "options": ["没", "不", "不是", "别"],
                "correct": "没",
                "explanation": "'没有' = nie mieć — '有' (mieć) łączy się TYLKO z '没'! Zasada nr 4: '有' ZAWSZE negujemy przez '没', NIGDY przez '不'. '没有钱' (nie ma pieniędzy), '没有时间' (nie ma czasu), '没有问题' (nie ma problemu). DLACZEGO? Bo '有' opisuje POSIADANIE — stan faktyczny, nie wolę. '不有' ❌ — to po prostu nie istnieje w chińskim. Zapamiętaj: '不是' (nie jest) i '没有' (nie ma) — dwa wyjątki do wykucia na blachę!"
            },
            {
                "id": "pc_bm8",
                "question": "他 _____ 会游泳。",
                "translation": "(On nie umie pływać.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不会' = nie umie / nie potrafi. '会' (umieć) negujemy przez '不'. '不会游泳' (nie umie pływać), '不会做饭' (nie umie gotować), '不会开车' (nie umie prowadzić). '不会' opisuje BRAK UMIEJĘTNOŚCI — stan stały. Porównaj: '没学过' (nie uczył się = nie miał okazji), '不会' (nie umie = efekt). UWAGA: '不会' też = 'nie będzie/na pewno nie': '他不会忘记' (na pewno nie zapomni). Kontekst decyduje!"
            },
            {
                "id": "pc_bm9",
                "question": "我以前 _____ 去过中国。",
                "translation": "(Nigdy wcześniej nie byłem w Chinach.)",
                "options": ["没", "不", "没不", "不没"],
                "correct": "没",
                "explanation": "'没去过' = nigdy nie byłem — '没' + V + '过' = nigdy nie robiłem czegoś. '过' (guò) = doświadczenie życiowe. '没' neguje to doświadczenie. '没吃过' (nigdy nie jadłem), '没见过' (nigdy nie widziałem), '没听过' (nigdy nie słyszałem). UWAGA: NIE '不去过' ❌! Doświadczenie to FAKT z przeszłości → zawsze '没'. W polskim: 'nigdy nie byłem' — jedno 'nie', ale w chińskim MUSI być '没'."
            },
            {
                "id": "pc_bm10",
                "question": "明天我 _____ 去。",
                "translation": "(Jutro nie pójdę.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不去' (o przyszłości) = nie pójdę — PRZYSZŁOŚĆ zawsze z '不'! Zasada nr 5: przyszłe intencje/plany negujemy przez '不'. '明天不来' (jutro nie przyjdę), '下次不买' (następnym razem nie kupię). '没' dotyczy PRZESZŁOŚCI i TERAŹNIEJSZOŚCI, '不' dotyczy WOLI i PRZYSZŁOŚCI. Podsumowanie: '没' = nie stało się, '不' = nie chcę / nie będę / nie jest. Ta dwójka to KLUCZ do chińskiej negacji!"
            },
            {
                "id": "pc_bm11",
                "question": "你怎么 _____ 告诉我？",
                "translation": "(Dlaczego mi nie powiedziałeś?)",
                "options": ["没", "不", "没不", "别"],
                "correct": "没",
                "explanation": "'没告诉' = nie powiedział (fakt z przeszłości). '怎么没告诉我？' = dlaczego mi nie powiedziałeś? Tu '没' bo pytamy o PRZESZŁE wydarzenie, które się nie stało. Porównaj: '怎么不告诉我？' = dlaczego nie chcesz mi powiedzieć? (teź poprawne, ale zmienia sens na WOLĘ). '为什么没来？' (dlaczego nie przyszedł? — fakt), '为什么不来？' (dlaczego nie chce przyjść? — wola). Subtelna, ale WAŻNA różnica!"
            },
            {
                "id": "pc_bm12",
                "question": "电脑 _____ 贵，很便宜。",
                "translation": "(Komputer nie jest drogi, jest bardzo tani.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不贵' = nie drogi. Ponownie: przymiotnik → '不'. Ale tu ciekawy wzorzec: '不A，很B' = nie jest A, jest (bardzo) B. '不大，很小' (nie duży, bardzo mały), '不远，很近' (niedaleko, bardzo blisko). To retoryczna korekta — najpierw negujesz złe wrażenie, potem podajesz prawdę. W polskim: 'nie jest drogi, wręcz tani' — podobna struktura. Chińczycy UWIELBIAJĄ takie kontrasty w codziennej rozmowie."
            },
            {
                "id": "pc_bm13",
                "question": "他 _____ 看完这本书。",
                "translation": "(On nie skończył czytać tej książki.)",
                "options": ["没", "不", "没不", "别"],
                "correct": "没",
                "explanation": "'没看完' = nie skończył czytać — '没' + V + komplement rezultatywny = nie osiągnął rezultatu. '完' (wán) = skończyć. '没看完' = czytał, ale NIE SKOŃCZYŁ. '没做完' (nie skończył robić), '没吃完' (nie dojadł), '没听懂' (nie zrozumiał słuchając). '没' + V-komplement to BARDZO częsta struktura — mówi o próbie bez rezultatu. W polskim: 'nie doczytał / nie skończył' — jedno 'nie'."
            },
            {
                "id": "pc_bm14",
                "question": "她 _____ 太高兴。",
                "translation": "(Ona nie jest zbyt zadowolona.)",
                "options": ["不", "没", "没有", "别"],
                "correct": "不",
                "explanation": "'不太高兴' = nie zbyt zadowolona — '不太' (bú tài) = nie bardzo / nie zbyt. To ŁAGODNA negacja — delikatniejsza niż '不高兴' (niezadowolona). '不太好' (nie bardzo dobrze), '不太喜欢' (nie bardzo lubię), '不太懂' (nie bardzo rozumiem). '不太' to EUFEMIZM — zamiast powiedzieć wprost 'źle', mówisz 'nie bardzo dobrze'. Chińczycy CENIĄ delikatność — '不太' jest jednym z najważniejszych narzędzi grzeczności."
            },
            {
                "id": "pc_bm15",
                "question": "这件衣服我 _____ 穿过。",
                "translation": "(Nigdy nie nosiłam tego ubrania.)",
                "options": ["没", "不", "不没", "别"],
                "correct": "没",
                "explanation": "Powtórzenie kluczowej zasady: '没' + V + '过' = nigdy nie robiłem. '没穿过' = nigdy nie nosiłam. PODSUMOWANIE '不' vs '没': 1) przymiotniki → '不' (不好, 不大), 2) '是' → '不' (不是), 3) '有' → '没' (没有), 4) przeszłość → '没' (没去, 没说), 5) przyszłość/wola → '不' (不去, 不想), 6) nawyki → '不' (不喝酒), 7) doświadczenie (过) → '没' (没去过). Te 7 zasad pokrywa 95% przypadków!"
            }
        ]
    },
    {
        "key": "jiu_vs_cai",
        "name": "就 kontra 才",
        "description": "就和才的区别",
        "iconName": "clock.arrow.2.circlepath",
        "color": "#10b981",
        "level": "intermediate",
        "items": [
            {
                "id": "pc_jc1",
                "question": "他八点 _____ 来了。",
                "translation": "(Przyszedł już o ósmej. [wcześnie])",
                "options": ["就", "才", "都", "还"],
                "correct": "就",
                "explanation": "'就' (jiù) = już / tak wcześnie / tak szybko — wyraża, że coś nastąpiło WCZEŚNIEJ lub SZYBCIEJ niż oczekiwano. '八点就来了' = już o 8 przyszedł (o, jak wcześnie!). '就' + '了' na końcu = podkreślenie, że się stało. Porównaj: '八点才来' (dopiero o 8 przyszedł — późno!). '就' = szybko/wcześnie, '才' = późno/powoli. To jak polskie 'już' vs 'dopiero'. Ta para jest KLUCZOWA."
            },
            {
                "id": "pc_jc2",
                "question": "他八点 _____ 来。",
                "translation": "(Przyszedł dopiero o ósmej. [późno])",
                "options": ["才", "就", "都", "还"],
                "correct": "才",
                "explanation": "'才' (cái) = dopiero / tak późno / aż — wyraża, że coś nastąpiło PÓŹNIEJ lub WOLNIEJ niż oczekiwano. '八点才来' = dopiero o 8 przyszedł (spóźnił się!). UWAGA na różnicę: '就' + '了': '八点就来了', '才' BEZ '了': '八点才来'. To ZASADA: po '就' zwykle jest '了', po '才' NIE MA '了'! Wyjątki istnieją, ale ta reguła działa w 90% przypadków. W polskim: 'dopiero o 8' vs 'już o 8'."
            },
            {
                "id": "pc_jc3",
                "question": "吃了饭我 _____ 去。",
                "translation": "(Pójdę dopiero po jedzeniu.)",
                "options": ["才", "就", "都", "还"],
                "correct": "才",
                "explanation": "'才' wyraża WARUNEK KONIECZNY — dopiero gdy A, to B. '吃了饭才去' = dopiero po jedzeniu pójdę (nie wcześniej!). '才' podkreśla, że B nie nastąpi BEZ A. '你来了我才走' (dopiero jak przyjdziesz, to pójdę). '做完作业才能玩' (dopiero po zadaniu można się bawić). W polskim: 'dopiero po/gdy...' = warunek. '就' w tym kontekście = 'zaraz po': '吃了饭就去' (zaraz po jedzeniu idę — szybko!)."
            },
            {
                "id": "pc_jc4",
                "question": "我一回家 _____ 给你打电话。",
                "translation": "(Jak tylko wrócę do domu, zadzwonię do ciebie.)",
                "options": ["就", "才", "都", "还"],
                "correct": "就",
                "explanation": "'一...就...' (yī...jiù...) = jak tylko...to zaraz... — NATYCHMIASTOWA sekwencja. '一回家就打电话' = jak tylko wrócę, zaraz zadzwonię. '一' + V₁ + '就' + V₂ = natychmiast po V₁ robię V₂. '一看就懂' (jak tylko spojrzę, od razu rozumiem), '一听就知道' (jak tylko usłyszę, od razu wiem). To jedna z najczęstszych struktur z '就'! W polskim: 'jak tylko / ledwo...to od razu...'."
            },
            {
                "id": "pc_jc5",
                "question": "他学了三年 _____ 会说中文。",
                "translation": "(Dopiero po trzech latach nauki zaczął mówić po chińsku.)",
                "options": ["才", "就", "都", "也"],
                "correct": "才",
                "explanation": "'学了三年才会' = dopiero po 3 latach umie — '才' podkreśla, że to TRWAŁO DŁUGO. Oczekiwanie: powinien szybciej. Porównaj: '学了三个月就会了' (po 3 miesiącach JUŻ umie — szybko!). '才' = wolno/długo/dużo, '就' = szybko/mało/niewiele. '才花了两千块' ❌ → '就花了两千块' (wydał TYLKO 2000). '花了两万才买到' (wydal AŻ 20000, zanim kupił). Ilość i czas: '就' = mało, '才' = dużo."
            },
            {
                "id": "pc_jc6",
                "question": "我 _____ 知道了！",
                "translation": "(Już wiem! / Właśnie się dowiedziałem!)",
                "options": ["就", "才", "都", "还"],
                "correct": "就",
                "explanation": "'就知道了' = już wiem — podkreśla PEWNOŚĆ i natychmiastowość. '就' + '了' = stan właśnie osiągnięty. '就好了' (już dobrze), '就到了' (zaraz będę / już jestem), '就来了' (już idę!). '就' wyraża tu BLISKOŚĆ w czasie lub natychmiastowość. W codziennej mowie: '我就来！' (już idę! — gdy ktoś woła), '就好！' (za chwilkę będzie gotowe!). W polskim: 'już' — identyczne użycie."
            },
            {
                "id": "pc_jc7",
                "question": "他 _____ 是不听。",
                "translation": "(On po prostu nie chce słuchać.)",
                "options": ["就", "才", "都", "很"],
                "correct": "就",
                "explanation": "'就是不听' = po prostu nie słucha / koniecznie nie chce słuchać — '就是' + negacja = UPARTE trwanie przy swoim. '就是不去' (po prostu nie pójdę, i koniec!), '就是不说' (i tak nie powiem!). '就是' wyraża tu DETERMINACJĘ lub upór. W polskim: 'po prostu nie...' lub 'za nic nie...'. '他就是不肯' (on za nic się nie zgodzi). To '就' oznaczające 'właśnie/dokładnie/po prostu' — nie mylić z '就' = 'szybko/zaraz'!"
            },
            {
                "id": "pc_jc8",
                "question": "只有努力 _____ 能成功。",
                "translation": "(Tylko ciężką pracą można osiągnąć sukces.)",
                "options": ["才", "就", "都", "也"],
                "correct": "才",
                "explanation": "'只有...才...' (zhǐyǒu...cái...) = tylko jeśli...to dopiero... — WYŁĄCZNY warunek. '只有努力才能成功' = tylko ciężką pracą osiągniesz sukces. '才' po '只有' wyraża JEDYNY sposób. '只有你才懂' (tylko ty rozumiesz), '只有周末才有时间' (tylko w weekend mam czas). Formuła '只有A才B' = B jest możliwe WYŁĄCZNIE gdy A. W polskim: 'tylko jeśli/gdy...' — warunek konieczny i wystarczający."
            },
            {
                "id": "pc_jc9",
                "question": "你说了我 _____ 明白。",
                "translation": "(Dopiero jak powiedziałeś, zrozumiałem.)",
                "options": ["才", "就", "都", "也"],
                "correct": "才",
                "explanation": "'说了我才明白' = dopiero gdy powiedziałeś, zrozumiałem — '才' łączy WARUNEK z opóźnionym rezultatem. 'A了(我)才B' = dopiero po A zrobiłem/zrozumiałem B. Implikacja: wcześniej NIE rozumiałem. '看了才知道' (dopiero jak zobaczyłem, dowiedziałem się), '试了才知道' (dopiero po spróbowaniu wiem). Porównaj: '说了我就明白了' = jak powiedziałeś, OD RAZU zrozumiałem (szybko). Różnica: czas reakcji."
            },
            {
                "id": "pc_jc10",
                "question": "快 _____ 要下雨了。",
                "translation": "(Zaraz będzie padać.)",
                "options": ["就", "才", "都", "还"],
                "correct": "就",
                "explanation": "'快就要...了' = zaraz / lada chwila — '就' wskazuje na BLISKĄ przyszłość. '快就要下雨了' = zaraz spadnie deszcz. '就要' = zaraz będzie. '就要开始了' (zaraz się zacznie), '就要毕业了' (zaraz kończę studia), '就要到了' (zaraz będziemy na miejscu). '就' + '要' + V + '了' = coś ZARAZ nastąpi. W polskim: 'za chwilę / lada moment'. '快' dodatkowo wzmacnia poczucie bliskości."
            },
            {
                "id": "pc_jc11",
                "question": "这本书我看了两遍 _____ 看懂。",
                "translation": "(Dopiero po dwukrotnym przeczytaniu zrozumiałem tę książkę.)",
                "options": ["才", "就", "都", "也"],
                "correct": "才",
                "explanation": "'看了两遍才看懂' = dopiero po 2 razach zrozumiałem. '才' + rezultat = rezultat przyszedł PO WYSIŁKU. '两遍' (dwa razy) pokazuje, ile trzeba było włożyć trudu. '才' implikuje: to było TRUDNE. Porównaj: '看了一遍就看懂了' (po jednym razie JUŻ zrozumiałem — łatwe!). Widzisz wzorzec? '才' = trudno/długo/dużo wysiłku, '就' = łatwo/szybko/mało wysiłku. Ten kontrast jest SERCEM pary '就/才'."
            },
            {
                "id": "pc_jc12",
                "question": "他 _____ 五岁就会读书了。",
                "translation": "(Miał dopiero 5 lat, a już umiał czytać.)",
                "options": ["才", "就", "都", "还"],
                "correct": "才",
                "explanation": "PUŁAPKA! '才五岁就会...' = miał DOPIERO/ZALEDWIE 5 lat i JUŻ umiał... Tu '才' = zaledwie/dopiero (mała ilość), a '就' = już (szybko). OBA słowa w jednym zdaniu! '才' podkreśla MŁODY wiek (5 lat to mało), '就' podkreśla WCZESNE osiągnięcie (czytanie to dużo). '才三天就学会了' (zaledwie 3 dni i już się nauczył). W polskim: 'dopiero/zaledwie...a już...' — identyczna logika dwóch perspektyw."
            },
            {
                "id": "pc_jc13",
                "question": "如果下雨，我 _____ 不去了。",
                "translation": "(Jeśli będzie padać, to nie pójdę.)",
                "options": ["就", "才", "都", "还"],
                "correct": "就",
                "explanation": "'如果A，就B' = jeśli A, to B — '就' w zdaniach warunkowych = 'to'. '如果下雨，就不去' = jeśli padanie, to nie idę. '就' tu oznacza NATYCHMIASTOWY skutek warunku. '如果你来，我就高兴' (jeśli przyjdziesz, to będę szczęśliwy). '就' po warunku jest prawie OBOWIĄZKOWE w chińskim — bez niego zdanie brzmi niekompletnie. W polskim 'to' jest opcjonalne: 'jeśli padanie, (to) nie idę'. W chińskim: '就' jest potrzebne."
            },
            {
                "id": "pc_jc14",
                "question": "等他来了我们 _____ 走。",
                "translation": "(Poczekajmy, aż przyjdzie, i wtedy pójdziemy.)",
                "options": ["就", "才", "都", "还"],
                "correct": "就",
                "explanation": "'等...就...' = poczekaj aż...i wtedy... '等他来了就走' = jak przyjdzie, od razu idziemy. '就' tu = natychmiast po / zaraz po. '等一下就好' (chwilkę, zaraz będzie dobrze), '等我毕业就去旅行' (jak skończę studia, od razu jadę podróżować). Porównaj: '等他来了才走' = dopiero jak przyjdzie, pójdziemy (niechętnie czekamy). '就' = naturalna sekwencja, '才' = wymuszony warunek. Drobna, ale WAŻNA różnica nastawienia."
            },
            {
                "id": "pc_jc15",
                "question": "他刚 _____ 走。",
                "translation": "(Właśnie wyszedł. [przed chwilką])",
                "options": ["才", "就", "都", "还"],
                "correct": "才",
                "explanation": "'刚才走' = właśnie/przed chwilą wyszedł — '刚才' (gāngcái) = właśnie / przed momentem. Tu '才' jest częścią słowa '刚才'! ALE: '刚走' (bez '才') = też 'właśnie wyszedł'. Różnica: '刚走' = właśnie (obiektywnie), '才走' = dopiero co (z odcieniem 'niedawno'). '他才来' (dopiero przyszedł — niedawno), '他刚来' (właśnie przyszedł — obiektywnie). PODSUMOWANIE: '就' = szybko/wcześnie/zaraz, '才' = późno/dopiero/warunek. Opanuj tę parę, a mówisz jak native!"
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

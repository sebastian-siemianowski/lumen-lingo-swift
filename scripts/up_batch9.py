#!/usr/bin/env python3
"""Batch 9: Add categories 43-47 to ukrainian_polish grammar JSON.
Categories: word_formation, compound_words, adverbs_basic, adverbs_manner, superlative_adjectives
"""
import json, os

FILE = os.path.join(os.path.dirname(__file__), '..', 'LumenLingo', 'LumenLingo', 'Resources', 'Content', 'ukrainian_polish', 'grammar_ukrainian_polish.json')

new_categories = [
    {
        "key": "word_formation",
        "name": "Tworzenie wyrazów",
        "description": "Словотворення",
        "iconName": "puzzlepiece.fill",
        "color": "#10b981",
        "level": "intermediate",
        "items": [
            {
                "id": "up_wf1",
                "question": "Osoba, która uczy w szkole, to _____. (вчитель)",
                "translation": "(Особа, яка навчає в школі, це вчитель)",
                "options": ["nauczyciel", "uczyciel", "nauka", "nauczanie"],
                "correct": "nauczyciel",
                "explanation": "Суфікс '-ciel'/'-yciel' = укр. '-тель': 'nauczyciel' (вчитель) від 'nauczyć' (навчити). Як в українській: 'учити'→'учитель'. Інші приклади: 'zbawiciel' (рятівник), 'przyjaciel' (приятель). Суфікс '-ciel' утворює назви осіб за дією — так само як '-тель' в українській мові."
            },
            {
                "id": "up_wf2",
                "question": "Miejsce, gdzie pieką chleb, to _____. (пекарня)",
                "translation": "(Місце, де печуть хліб, це пекарня)",
                "options": ["piekarnia", "piekarz", "pieczenie", "pieczywo"],
                "correct": "piekarnia",
                "explanation": "Суфікс '-arnia'/'-alnia' = укр. '-арня'/'-альня': 'piekarnia' (пекарня) від 'piekarz' (пекар). Порівняйте: укр. 'пекарня' — майже ідентично! Інші приклади: 'kawiarnia' (кав'ярня), 'księgarnia' (книгарня), 'cukiernia' (кондитерська). Цей суфікс позначає місце діяльності."
            },
            {
                "id": "up_wf3",
                "question": "Od słowa 'pisać' tworzymy rzeczownik _____. (письменник)",
                "translation": "(Від слова 'писати' утворюємо іменник 'письменник')",
                "options": ["pisarz", "pisanie", "pisemny", "pisarka"],
                "correct": "pisarz",
                "explanation": "Суфікс '-arz' = укр. '-ар'/'-яр': 'pisarz' (письменник/писар) від 'pisać' (писати). Порівняйте: укр. 'писар'. Інші приклади: 'lekarz' (лікар), 'tokarz' (токар), 'malarz' (маляр). Суфікс '-arz' позначає особу за професією — аналогічно укр. '-ар'."
            },
            {
                "id": "up_wf4",
                "question": "Przymiotnik od słowa 'nauka' to _____. (науковий)",
                "translation": "(Прикметник від слова 'наука' це 'науковий')",
                "options": ["naukowy", "naukacz", "naukanie", "naukista"],
                "correct": "naukowy",
                "explanation": "Суфікс '-owy' = укр. '-овий': 'naukowy' (науковий) від 'nauka' (наука). Пряма відповідність! Інші: 'sportowy' (спортовий→спортивний), 'domowy' (домовий→домашній), 'handlowy' (торговий). Увага: в українській іноді '-овий' замінюється на '-ний' чи '-ивний'."
            },
            {
                "id": "up_wf5",
                "question": "Czynność jedzenia to _____. (їжа/їдження)",
                "translation": "(Процес їдження це...)",
                "options": ["jedzenie", "jadło", "jedzący", "jedliwy"],
                "correct": "jedzenie",
                "explanation": "Суфікс '-enie'/'-anie' = укр. '-ення'/'-ання': 'jedzenie' (їдження/їжа) від 'jeść' (їсти). Це віддієслівний іменник (герундій). Інші: 'czytanie' (читання), 'pisanie' (писання), 'gotowanie' (готування). Закономірність: '-ание'→'-anie', '-ення'→'-enie'."
            },
            {
                "id": "up_wf6",
                "question": "Przedrostek 'nie-' tworzy przeciwieństwo: niemożliwy znaczy _____. (неможливий)",
                "translation": "(Префікс 'nie-' утворює протилежність: неможливий)",
                "options": ["неможливий", "можливий", "найможливіший", "безможливий"],
                "correct": "неможливий",
                "explanation": "Префікс 'nie-' = укр. 'не-': 'niemożliwy' (неможливий), 'niedobry' (недобрий), 'nieładny' (негарний). Ідентична функція в обох мовах! Але увага: 'nie' як окреме слово = заперечення 'ні/не': 'nie chcę' (не хочу). Разом = прикметник, окремо = заперечення."
            },
            {
                "id": "up_wf7",
                "question": "Od 'bezpieczny' (безпечний) tworzymy rzeczownik _____. (безпека)",
                "translation": "(Від 'безпечний' утворюємо іменник 'безпека')",
                "options": ["bezpieczeństwo", "bezpieczność", "bezpiecznik", "bezpieka"],
                "correct": "bezpieczeństwo",
                "explanation": "Суфікс '-eństwo' = укр. '-ство' (з модифікацією): 'bezpieczeństwo' (безпека). Увага: НЕ 'bezpieczność'! Порівняйте: 'społeczeństwo' (суспільство), 'zwycięstwo' (перемога→звитяга). Суфікс '-stwo'/'-eństwo' утворює абстрактні іменники від прикметників."
            },
            {
                "id": "up_wf8",
                "question": "Osoba, która gra na gitarze, to _____. (гітарист)",
                "translation": "(Особа, яка грає на гітарі, це гітарист)",
                "options": ["gitarzysta", "gitarnik", "gitaracz", "gitarowy"],
                "correct": "gitarzysta",
                "explanation": "Суфікс '-ysta'/'-ista' = укр. '-іст'/'-ист': 'gitarzysta' (гітарист). Інтернаціональний суфікс! Приклади: 'pianista' (піаніст), 'dentysta' (дантист), 'artysta' (артист). Жіночий рід: '-ystka'/'-istka': 'gitarzystka', 'pianistka'."
            },
            {
                "id": "up_wf9",
                "question": "Od 'piękny' (гарний) tworzymy rzeczownik _____. (краса)",
                "translation": "(Від 'гарний' утворюємо іменник 'краса')",
                "options": ["piękność", "piękno", "pięknienie", "piękniarz"],
                "correct": "piękność",
                "explanation": "Суфікс '-ość' = укр. '-ість'/'-ость': 'piękność' (краса/вродливість) від 'piękny'. Дуже продуктивний суфікс! 'Wolność' (свобода/вольність), 'radość' (радість), 'młodość' (молодість). Закономірність: укр. '-ість' завжди = пол. '-ość'."
            },
            {
                "id": "up_wf10",
                "question": "Przedrostek 'prze-' w 'przepisać' znaczy _____. (переписати)",
                "translation": "(Префікс 'prze-' в 'przepisać' означає 'переписати')",
                "options": ["переписати", "дописати", "записати", "виписати"],
                "correct": "переписати",
                "explanation": "Префікс 'prze-' = укр. 'пере-': 'przepisać' (переписати), 'przeczytać' (перечитати), 'przerobić' (переробити). Ця відповідність дуже регулярна! Але увага: 'prze-' іноді = 'про-': 'przejść' може = 'пройти' (через). Контекст визначає значення."
            },
            {
                "id": "up_wf11",
                "question": "Miejsce, gdzie naprawia się samochody, to _____. (автомайстерня)",
                "translation": "(Місце, де ремонтують автомобілі)",
                "options": ["warsztat", "naprawa", "naprawiacz", "naprawialnia"],
                "correct": "warsztat",
                "explanation": "Не всі слова утворюються суфіксами! 'Warsztat' (майстерня) — окреме слово, не від 'naprawiać'. Це приклад лексичної різниці: укр. 'автомайстерня' = пол. 'warsztat samochodowy'. 'Warsztat' також означає 'семінар' (у значенні заняття/тренінг)."
            },
            {
                "id": "up_wf12",
                "question": "Od 'pracować' (працювати) tworzymy _____. (працівник)",
                "translation": "(Від 'працювати' утворюємо 'працівник')",
                "options": ["pracownik", "pracowacz", "pracowity", "pracowalnia"],
                "correct": "pracownik",
                "explanation": "Суфікс '-ownik' = укр. '-івник': 'pracownik' (працівник) від 'pracować' (працювати). Інші: 'kierownik' (керівник), 'urzędnik' (урядовець). Суфікс '-nik' дуже продуктивний: 'uczestnik' (учасник), 'podróżnik' (подорожник/мандрівник)."
            },
            {
                "id": "up_wf13",
                "question": "Przymiotnik od 'Polska' to _____. (польський)",
                "translation": "(Прикметник від 'Польща' це 'польський')",
                "options": ["polski", "polskowy", "polszczyzna", "polakowy"],
                "correct": "polski",
                "explanation": "Суфікс '-ski'/'-cki' = укр. '-ський'/'-цький': 'polski' (польський), 'ukraiński' (український), 'miejski' (міський). Пряма відповідність! Але увага на чергування: 'Niemcy'→'niemiecki' (не 'niemski'). Цей суфікс утворює прикметники від назв країн і місць."
            },
            {
                "id": "up_wf14",
                "question": "Przedrostek 'wy-' w 'wyjechać' znaczy _____. (виїхати)",
                "translation": "(Префікс 'wy-' у 'wyjechać' означає 'виїхати')",
                "options": ["виїхати", "заїхати", "поїхати", "наїхати"],
                "correct": "виїхати",
                "explanation": "Префікс 'wy-' = укр. 'ви-': 'wyjechać' (виїхати), 'wyjść' (вийти), 'wybrać' (вибрати), 'wypisać' (виписати). Одна з найрегулярніших відповідностей! Завжди означає рух назовні/завершення дії. 'Wy-' + дієслово = 'ви-' + дієслово."
            },
            {
                "id": "up_wf15",
                "question": "Od 'budować' (будувати) tworzymy 'budynek', co znaczy _____. (будинок)",
                "translation": "(Від 'будувати' утворюємо 'будинок')",
                "options": ["будинок", "будівля", "будівничий", "будова"],
                "correct": "будинок",
                "explanation": "Суфікс '-ynek'/'-unek' = укр. '-инок'/'-унок': 'budynek' (будинок) від 'budować' (будувати). Інші: 'rysunek' (малюнок) від 'rysować' (малювати), 'ratunek' (ратунок) від 'ratować' (рятувати). Ця відповідність допомагає вгадувати нові слова!"
            }
        ]
    },
    {
        "key": "compound_words",
        "name": "Wyrazy złożone",
        "description": "Складні слова",
        "iconName": "link",
        "color": "#6366f1",
        "level": "intermediate",
        "items": [
            {
                "id": "up_cw1",
                "question": "Samolot to po ukraińsku _____. (літак)",
                "translation": "(Літак — це...)",
                "options": ["літак", "самолот", "летак", "самольот"],
                "correct": "літак",
                "explanation": "'Samolot' буквально = 'само-літ' (те, що само летить). В українській = 'літак' (від 'літати'). Хоча російське 'самолёт' ≈ 'samolot', українська використовує інше слово! Це важливий false friend для українців: НЕ перекладайте буквально."
            },
            {
                "id": "up_cw2",
                "question": "Pociąg (потяг) dosłownie znaczy 'to, co _____'. (тягне)",
                "translation": "(Потяг буквально означає 'те, що тягне')",
                "options": ["ciągnie", "jedzie", "leci", "biegnie"],
                "correct": "ciągnie",
                "explanation": "'Pociąg' від 'po-ciąg-nąć' (потягнути). Укр. 'потяг' від 'потягнути'. Обидва слова мають однакове походження! 'Ciągnąć' = 'тягнути'. Це приклад, коли складне слово в обох мовах утворене однаково, що полегшує запам'ятовування."
            },
            {
                "id": "up_cw3",
                "question": "Urodziny (день народження) dosłownie: 'u-rod-ziny' = _____. (народження)",
                "translation": "(День народження — це...)",
                "options": ["день народження", "свято", "ювілей", "іменини"],
                "correct": "день народження",
                "explanation": "'Urodziny' від 'urodzić się' (народитися). 'U-rodz-iny' ≈ 'у-родж-ини' → день народження. В польській це одне слово (множина!), в українській — два слова. Увага: 'imieniny' (іменини) — інше свято! Не плутайте 'urodziny' (день народження) з 'imieniny' (іменини)."
            },
            {
                "id": "up_cw4",
                "question": "Samochód dosłownie znaczy 'samo-chód', czyli to, co _____. (само ходить)",
                "translation": "(Автомобіль буквально 'само-хід')",
                "options": ["само ходить", "швидко їде", "далеко їде", "добре працює"],
                "correct": "само ходить",
                "explanation": "'Samochód' = 'само-хід' (те, що само ходить). 'Sam' (сам) + 'chód' (хід). Укр. 'автомобіль' — з грецької/латини. Але укр. 'самохід' теж існує (застаріле). Інші подібні: 'parowóz' (паровоз) = 'паро-віз', 'parostatek' (пароплав)."
            },
            {
                "id": "up_cw5",
                "question": "Lodówka (холодильник) pochodzi od słowa _____. (лід)",
                "translation": "(Холодильник походить від слова 'лід')",
                "options": ["lód", "zimno", "chłód", "mróz"],
                "correct": "lód",
                "explanation": "'Lodówka' від 'lód' (лід) + суфікс '-ówka'. Буквально = 'льодовка'. Укр. 'холодильник' від 'холод'. Різна мотивація: пол. від 'льоду', укр. від 'холоду'. Суфікс '-ówka' дуже продуктивний: 'gruszka'→'gruszkówka' (грушівка), 'cytryna'→'cytrynówka'."
            },
            {
                "id": "up_cw6",
                "question": "Długopis to po ukraińsku _____. (ручка)",
                "translation": "(Довгопис — це ...)",
                "options": ["ручка", "довгопис", "олівець", "перо"],
                "correct": "ручка",
                "explanation": "'Długopis' = 'długo-pis' (те, що довго пише, від 'długo' + 'pisać'). Українське 'довгопис' — калька, але вживається рідко. Стандартне укр. = 'ручка' (кулькова). Це приклад, де польська має своє складне слово, а українська використовує інше."
            },
            {
                "id": "up_cw7",
                "question": "Rzeczpospolita to po ukraińsku _____. (республіка/річ посполита)",
                "translation": "(Річ Посполита це...)",
                "options": ["республіка", "монархія", "конституція", "держава"],
                "correct": "республіка",
                "explanation": "'Rzeczpospolita' = 'rzecz-pospolita' (спільна справа), калька лат. 'res publica'. Укр. 'Річ Посполита' (історична назва). Сучасне = 'республіка'. Цікаво: обидва слова = переклад однієї латинської фрази! 'Rzecz' (річ/справа), 'pospolita' (спільна/загальна)."
            },
            {
                "id": "up_cw8",
                "question": "Kolorowy (кольоровий) to wyraz złożony od _____. (колір)",
                "translation": "(Кольоровий — складне слово від 'колір')",
                "options": ["kolor", "barwa", "farba", "malować"],
                "correct": "kolor",
                "explanation": "'Kolorowy' від 'kolor' (колір) + '-owy'. Укр. 'кольоровий'. Майже ідентично! Але зверніть увагу: пол. 'kolor' (без 'ь'), укр. 'колір' (з чергуванням о/і). Інші: 'barwny' (барвистий) від 'barwa' (барва) — ще один синонім."
            },
            {
                "id": "up_cw9",
                "question": "Zleceniodawca to osoba, która _____ zlecenie. (дає)",
                "translation": "(Замовник — особа, яка дає замовлення)",
                "options": ["daje", "bierze", "pisze", "czyta"],
                "correct": "daje",
                "explanation": "'Zleceniodawca' = 'zlecenie' (замовлення) + 'dawca' (давець). Складне слово з інтерфіксом '-o-'. Укр. = 'замовник'. Подібні: 'pracodawca' (роботодавець) = 'praca' + 'dawca', 'prawodawca' (законодавець). Інтерфікс '-o-' з'єднує частини, як укр. '-о-'."
            },
            {
                "id": "up_cw10",
                "question": "Wielkanoc to po ukraińsku _____. (Великдень)",
                "translation": "(Велікано́ц — це...)",
                "options": ["Великдень", "Різдво", "Великоднє", "Паска"],
                "correct": "Великдень",
                "explanation": "'Wielkanoc' = 'wielka-noc' (велика ніч). Укр. 'Великдень' = 'великий-день'. Різний підхід: поляки — 'велика ніч' (пасхальне чуло), українці — 'великий день'. Обидва — складні слова з компонентом 'великий', але другий компонент протилежний!"
            },
            {
                "id": "up_cw11",
                "question": "Półwysep (півострів) składa się z: pół + _____. (острів)",
                "translation": "(Півострів складається з: пів + острів)",
                "options": ["wysep (острів)", "morze (море)", "rzeka (річка)", "ziemia (земля)"],
                "correct": "wysep (острів)",
                "explanation": "'Półwysep' = 'pół' (пів) + 'wysep' (острів) = 'півострів'. Ідентична структура в обох мовах! 'Pół-' = 'пів-' в складних словах: 'półgodzina' (півгодини), 'półmetek' (півфінал/середина дистанції). Зверніть увагу: 'wyspa' (острів) → 'półwysep' (з чергуванням a→e)."
            },
            {
                "id": "up_cw12",
                "question": "Wodospad (водоспад) to: woda (вода) + _____. (падати)",
                "translation": "(Водоспад це: вода + падати)",
                "options": ["spadać (падати)", "płynąć (текти)", "lecieć (летіти)", "biec (бігти)"],
                "correct": "spadać (падати)",
                "explanation": "'Wodospad' = 'woda' + 'spadać' (падати). Укр. 'водоспад' — ідентична структура! Це один з численних прикладів повного збігу складних слів: 'parowóz'↔'паровоз', 'samolot'↔'самольот' (рос.), 'wodociąg' (водогін/водопровід)."
            },
            {
                "id": "up_cw13",
                "question": "Współpraca to po ukraińsku _____. (співпраця)",
                "translation": "(Співпраця це...)",
                "options": ["співпраця", "робота", "допомога", "партнерство"],
                "correct": "співпраця",
                "explanation": "'Współpraca' = 'współ-praca' (спільна праця). Укр. 'співпраця' = 'спів-праця'. Префікс 'współ-' = укр. 'спів-': 'współczucie' (співчуття), 'współautor' (співавтор), 'współpracownik' (співробітник). Повна регулярність: 'współ-' ЗАВЖДИ = 'спів-'."
            },
            {
                "id": "up_cw14",
                "question": "Przedszkole (дитсадок) to: przed (перед) + _____. (школа)",
                "translation": "(Дитсадок: перед + школа)",
                "options": ["szkoła (школа)", "dom (дім)", "plac (площа)", "klasa (клас)"],
                "correct": "szkoła (школа)",
                "explanation": "'Przedszkole' = 'przed' (перед) + 'szkoła' (школа) = те, що перед школою. Укр. 'дитячий садок' — інший підхід (за аналогією з садом). Але 'передшкілля'/'передшкільний' теж існує в українській! Інше: 'przedpokój' (передпокій) — тут структура ідентична."
            },
            {
                "id": "up_cw15",
                "question": "Poniedziałek (понеділок) dosłownie: po + _____. (неділя)",
                "translation": "(Понеділок буквально: по неділі)",
                "options": ["niedziela (неділя)", "sobota (субота)", "piątek (п'ятниця)", "tydzień (тиждень)"],
                "correct": "niedziela (неділя)",
                "explanation": "'Poniedziałek' = 'po-niedziel-ek' (після неділі). Укр. 'понеділок' = 'по-неділ-ок'. Ідентична структура! Обидві мови рахують від неділі. 'Niedziela' от 'nie-działa' (не робить = вихідний). Укр. 'неділя' від 'не діяти'. Прекрасний приклад спільного слов'янського словотвору."
            }
        ]
    },
    {
        "key": "adverbs_basic",
        "name": "Przysłówki podstawowe",
        "description": "Прислівники (основи)",
        "iconName": "arrow.right",
        "color": "#f97316",
        "level": "beginner",
        "items": [
            {
                "id": "up_ab1",
                "question": "On mówi po polsku bardzo _____. (добре)",
                "translation": "(Він говорить польською дуже добре)",
                "options": ["dobrze", "dobry", "dobre", "dobrość"],
                "correct": "dobrze",
                "explanation": "'Dobrze' (добре) — прислівник від 'dobry' (добрий). Укр. 'добре' — майже ідентично! Утворення: 'dobr-y' → 'dobrz-e'. Закінчення '-e' з чергуванням кореня. Порівняйте: укр. 'добрий' → 'добре'. Прислівники відповідають на питання 'jak?' (як?)."
            },
            {
                "id": "up_ab2",
                "question": "Ona biegnie bardzo _____. (швидко)",
                "translation": "(Вона біжить дуже швидко)",
                "options": ["szybko", "szybka", "szybki", "szybkość"],
                "correct": "szybko",
                "explanation": "'Szybko' (швидко) від 'szybki' (швидкий). Суфікс '-o' = укр. '-о': 'szybko' (швидко), 'wolno' (повільно/вільно), 'głośno' (голосно). Закономірність: прикметник на '-ki'/'-gi' → прислівник на '-ko'/'-go'. Укр. аналогічно: '-кий' → '-ко'."
            },
            {
                "id": "up_ab3",
                "question": "Mieszkamy _____ od centrum. (далеко)",
                "translation": "(Ми живемо далеко від центру)",
                "options": ["daleko", "daleki", "dalekie", "daleczysko"],
                "correct": "daleko",
                "explanation": "'Daleko' (далеко) від 'daleki' (далекий). Укр. 'далеко' — повний збіг! Інші прислівники місця: 'blisko' (близько), 'wysoko' (високо), 'nisko' (низько), 'głęboko' (глибоко). Усі утворені суфіксом '-ko'/'-o', як в українській."
            },
            {
                "id": "up_ab4",
                "question": "_____ jadę do pracy autobusem. (зазвичай)",
                "translation": "(Зазвичай їжджу на роботу автобусом)",
                "options": ["Zwykle", "Zwykły", "Zwyczajny", "Zwykłość"],
                "correct": "Zwykle",
                "explanation": "'Zwykle' (зазвичай/звичайно) від 'zwykły' (звичайний). Прислівники часу/частотності: 'zawsze' (завжди), 'nigdy' (ніколи), 'często' (часто), 'rzadko' (рідко), 'czasami' (часами/іноді). Порівняйте: укр. 'звичайно' ≈ пол. 'zwykle'."
            },
            {
                "id": "up_ab5",
                "question": "On _____ przychodzi na czas. (завжди)",
                "translation": "(Він завжди приходить вчасно)",
                "options": ["zawsze", "nigdy", "czasem", "rzadko"],
                "correct": "zawsze",
                "explanation": "'Zawsze' (завжди) — базовий прислівник частотності. Протилежність: 'nigdy' (ніколи). Шкала: 'zawsze' (завжди) → 'zwykle' (зазвичай) → 'często' (часто) → 'czasami' (іноді) → 'rzadko' (рідко) → 'nigdy' (ніколи). Укр. 'завше' (діалектне) ≈ 'zawsze'."
            },
            {
                "id": "up_ab6",
                "question": "Proszę mówić _____. (повільно)",
                "translation": "(Прошу говорити повільно)",
                "options": ["powoli", "wolno", "wolny", "powolny"],
                "correct": "powoli",
                "explanation": "'Powoli' (повільно/поволі) — прислівник. Увага: 'wolno' теж = 'повільно', АЛЕ також = 'вільно/дозволено'. 'Powoli' однозначніше = 'повільно'. Укр. 'поволі' — повний збіг! Порада: використовуйте 'powoli' для 'повільно', 'wolno' для 'вільно/дозволено'."
            },
            {
                "id": "up_ab7",
                "question": "Ona śpiewa bardzo _____. (гарно)",
                "translation": "(Вона співає дуже гарно)",
                "options": ["ładnie", "ładna", "ładny", "ładność"],
                "correct": "ładnie",
                "explanation": "'Ładnie' (гарно) від 'ładny' (гарний). Суфікс '-nie' = укр. '-но': 'ładnie' (гарно), 'ślicznie' (чудово/прекрасно), 'brzydnie' (нехорошо → рідко). Інше: 'pięknie' (красиво) від 'piękny'. Ці прислівники оцінки дуже вживані в повсякденній мові."
            },
            {
                "id": "up_ab8",
                "question": "Możesz _____ tu zostać. (тут/тутай)",
                "translation": "(Можеш тут залишитися)",
                "options": ["tu", "tutaj", "tam", "tutejszy"],
                "correct": "tu",
                "explanation": "'Tu' і 'tutaj' обидва = 'тут'. 'Tu' коротше і частіше в розмовній мові. 'Tutaj' трохи емфатичніше. Протилежність: 'tam' (там). Інші: 'tu i tam' (тут і там), 'tu i ówdzie' (де-не-де). Укр. 'ту' (діалектне) ≈ 'tu', 'тут' ≈ 'tutaj'."
            },
            {
                "id": "up_ab9",
                "question": "_____ jest sklep? — Tam. (де)",
                "translation": "(Де магазин? — Там.)",
                "options": ["Gdzie", "Kiedy", "Jak", "Kto"],
                "correct": "Gdzie",
                "explanation": "'Gdzie' (де) — питальний прислівник місця. 'Где' (рос.) ≈ 'gdzie', укр. 'де' — інше слово! Система: 'gdzie' (де) → 'tu/tutaj' (тут) → 'tam' (там) → 'nigdzie' (ніде) → 'wszędzie' (всюди) → 'gdzieś' (десь) → 'gdziekolwiek' (де-небудь)."
            },
            {
                "id": "up_ab10",
                "question": "_____ masz na imię? (як)",
                "translation": "(Як тебе звати?)",
                "options": ["Jak", "Co", "Kto", "Gdzie"],
                "correct": "Jak",
                "explanation": "'Jak' (як) — питальний прислівник способу. Укр. 'як' — ідентично! Вирази: 'Jak się masz?' (Як справи?), 'Jak to powiedzieć?' (Як це сказати?), 'Jak dojść do...?' (Як дістатися до...?). Система: 'jak' → 'tak' (так), 'jakoś' (якось), 'nijak' (ніяк)."
            },
            {
                "id": "up_ab11",
                "question": "Przyjdę _____. (завтра)",
                "translation": "(Прийду завтра)",
                "options": ["jutro", "wczoraj", "dziś", "pojutrze"],
                "correct": "jutro",
                "explanation": "'Jutro' (завтра). Прислівники часу: 'dziś/dzisiaj' (сьогодні), 'wczoraj' (вчора), 'jutro' (завтра), 'pojutrze' (післязавтра), 'przedwczoraj' (позавчора). Укр. 'ютро' = 'ранок' (застаріле), але пол. 'jutro' = 'завтра' (і також 'ранок' застаріле)."
            },
            {
                "id": "up_ab12",
                "question": "On _____ wrócił z pracy. (щойно/тільки що)",
                "translation": "(Він щойно повернувся з роботи)",
                "options": ["właśnie", "wkrótce", "zaraz", "natychmiast"],
                "correct": "właśnie",
                "explanation": "'Właśnie' (щойно/якраз/саме). Від 'własny' (власний). Значення: 1) 'щойно': 'Właśnie przyszedł' (Щойно прийшов); 2) 'саме/якраз': 'Właśnie o tym mówię' (Саме про це говорю). Синонім temporal: 'dopiero co' (тільки що)."
            },
            {
                "id": "up_ab13",
                "question": "Zróbmy to _____! (разом)",
                "translation": "(Зробімо це разом!)",
                "options": ["razem", "osobno", "oddzielnie", "samodzielnie"],
                "correct": "razem",
                "explanation": "'Razem' (разом) — прислівник. Укр. 'разом' — ідентично! Протилежності: 'osobno' (окремо), 'oddzielnie' (відділення). Порівняйте: 'wspólnie' (спільно) — синонім з відтінком офіційності. 'Razem' = повсякденне, 'wspólnie' = формальніше."
            },
            {
                "id": "up_ab14",
                "question": "Ona _____ nie rozumie. (ще)",
                "translation": "(Вона ще не розуміє)",
                "options": ["jeszcze", "już", "wciąż", "nadal"],
                "correct": "jeszcze",
                "explanation": "'Jeszcze' (ще) vs 'już' (вже). Укр. 'ще' ≈ 'jeszcze', 'вже' ≈ 'już'. Вирази: 'jeszcze nie' (ще ні), 'jeszcze raz' (ще раз), 'jeszcze trochę' (ще трохи). Протилежність: 'już nie' (вже ні). 'Jeszcze' = тривання стану, 'już' = зміна стану."
            },
            {
                "id": "up_ab15",
                "question": "On _____ tu mieszka. (вже не)",
                "translation": "(Він вже тут не живе)",
                "options": ["już nie", "jeszcze nie", "nigdy nie", "wcale nie"],
                "correct": "już nie",
                "explanation": "'Już nie' (вже не) = заперечення стану, що закінчився. Система заперечень: 'już nie' (вже не), 'jeszcze nie' (ще не), 'wcale nie' (зовсім не), 'nigdy nie' (ніколи не). Укр. 'вже не' — ідентична структура. Порядок: 'już nie' + дієслово АБО дієслово + 'już nie'."
            }
        ]
    },
    {
        "key": "adverbs_manner",
        "name": "Przysłówki sposobu",
        "description": "Прислівники способу дії",
        "iconName": "figure.walk",
        "color": "#ec4899",
        "level": "intermediate",
        "items": [
            {
                "id": "up_am1",
                "question": "Proszę pisać _____. (чітко/виразно)",
                "translation": "(Прошу писати чітко)",
                "options": ["wyraźnie", "wyraźny", "niewyraźnie", "wyrazisty"],
                "correct": "wyraźnie",
                "explanation": "'Wyraźnie' (виразно/чітко) від 'wyraźny' (виразний). Укр. 'виразно' — майже ідентично! Суфікс '-nie' = '-но'. Інші прислівники чіткості: 'jasno' (ясно), 'dokładnie' (точно/докладно), 'precyzyjnie' (прецизійно). Протилежність: 'niewyraźnie' (невиразно)."
            },
            {
                "id": "up_am2",
                "question": "Ona _____ pracuje nad projektem. (старанно)",
                "translation": "(Вона старанно працює над проектом)",
                "options": ["starannie", "staranny", "staranie", "staranna"],
                "correct": "starannie",
                "explanation": "'Starannie' (старанно) від 'staranny' (старанний). Укр. 'старанно' — повний збіг! Подвоєне 'nn': 'starannie' (старанно), 'codziennie' (щоденно), 'ciekawie' (цікаво — тут без подвоєння!). Правило: '-nny' → '-nnie', '-wy' → '-wie'."
            },
            {
                "id": "up_am3",
                "question": "Mów _____, bo nas usłyszą! (тихо)",
                "translation": "(Говори тихо, бо нас почують!)",
                "options": ["cicho", "cichy", "ciszej", "cichość"],
                "correct": "cicho",
                "explanation": "'Cicho' (тихо) від 'cichy' (тихий). Укр. 'тихо' — інший корінь, але ж 'цихо' існує діалектно! Прислівники гучності: 'cicho' (тихо) ↔ 'głośno' (голосно/гучно), 'szeptem' (шепотом — орудний відмінок як прислівник!). 'Po cichu' = 'потихеньку'."
            },
            {
                "id": "up_am4",
                "question": "On odpowiedział _____. (чемно/ввічливо)",
                "translation": "(Він відповів ввічливо)",
                "options": ["uprzejmie", "uprzejmy", "grzecznie", "miło"],
                "correct": "uprzejmie",
                "explanation": "'Uprzejmie' (ввічливо/люб'язно) від 'uprzejmy'. Синоніми: 'grzecznie' (ввічливо/чемно), 'kulturalnie' (культурно). Протилежності: 'niegrzecznie' (невихований), 'nieuprzejmie' (нелюб'язно), 'grubiańsko' (грубо). 'Uprzejmie' більш формальне, 'grzecznie' — щоденне."
            },
            {
                "id": "up_am5",
                "question": "Samochód jechał _____. (небезпечно)",
                "translation": "(Автомобіль їхав небезпечно)",
                "options": ["niebezpiecznie", "bezpiecznie", "niebezpieczny", "ostrożnie"],
                "correct": "niebezpiecznie",
                "explanation": "'Niebezpiecznie' (небезпечно) від 'niebezpieczny' (небезпечний). Укр. 'небезпечно' — ідентична структура! Префікс 'nie-' = 'не-'. Протилежність: 'bezpiecznie' (безпечно). Інші: 'ostrożnie' (обережно), 'uważnie' (уважно). '-cznie' = '-чно'."
            },
            {
                "id": "up_am6",
                "question": "Proszę jechać _____. (обережно)",
                "translation": "(Прошу ехати обережно)",
                "options": ["ostrożnie", "szybko", "powoli", "niebezpiecznie"],
                "correct": "ostrożnie",
                "explanation": "'Ostrożnie' (обережно/остерожно) від 'ostrożny' (обережний). Укр. 'обережно' — схоже, але не ідентичне (обереж- vs остерож-). Синоніми: 'uważnie' (уважно), 'z uwagą' (з увагою). Антонім: 'nieostrożnie' (необережно), 'lekkomyślnie' (легковажно)."
            },
            {
                "id": "up_am7",
                "question": "Dziecko zachowuje się _____. (слухняно)",
                "translation": "(Дитина поводиться слухняно)",
                "options": ["grzecznie", "niegrzecznie", "grzeczny", "grzeczność"],
                "correct": "grzecznie",
                "explanation": "'Grzecznie' (чемно/слухняно) від 'grzeczny' (чемний/слухняний). Подвійне значення: 1) ввічливо (до дорослих), 2) слухняно (до дітей). 'Bądź grzeczny!' (Будь чемним!/Поводься добре!). Укр. 'ґречно' (діалектне) від того самого кореня."
            },
            {
                "id": "up_am8",
                "question": "On _____ zakończył projekt. (успішно)",
                "translation": "(Він успішно завершив проект)",
                "options": ["pomyślnie", "pomyślny", "pozytywnie", "skutecznie"],
                "correct": "pomyślnie",
                "explanation": "'Pomyślnie' (успішно/помисно) від 'pomyślny' (помисний/сприятливий). Синоніми: 'skutecznie' (ефективно/дієво), 'z powodzeniem' (з успіхом), 'udanie' (вдало). Антонім: 'niepomyślnie' (невдало). Корінь 'myśl-' = 'мисл-' (думка)."
            },
            {
                "id": "up_am9",
                "question": "Ona _____ wstała rano. (рано/вчасно)",
                "translation": "(Вона рано встала)",
                "options": ["wcześnie", "późno", "szybko", "nagle"],
                "correct": "wcześnie",
                "explanation": "'Wcześnie' (рано/вчасно) від 'wczesny' (ранній/вчасний). Антонім: 'późno' (пізно). Систематика: 'wcześnie' → 'wcześniej' (раніше) → 'najwcześniej' (найраніше). Укр. 'вчасно' = 'w czas' (вчасно), але 'wcześnie' = 'рано'. Не плутайте!"
            },
            {
                "id": "up_am10",
                "question": "Muszę to zrobić _____! (негайно/терміново)",
                "translation": "(Мушу це зробити негайно!)",
                "options": ["natychmiast", "powoli", "spokojnie", "później"],
                "correct": "natychmiast",
                "explanation": "'Natychmiast' (негайно/одразу). Від 'na-tych-miast' (буквально 'на тих місцях' = на місці). Синоніми за силою: 'natychmiast' (негайно!) > 'zaraz' (зараз) > 'wkrótce' (незабаром) > 'niedługo' (незабаром/скоро). Укр. 'натоміст' — false friend! = 'замість'/'натомість'."
            },
            {
                "id": "up_am11",
                "question": "Potraktowali go _____. (несправедливо)",
                "translation": "(Вони поставилися до нього несправедливо)",
                "options": ["niesprawiedliwie", "sprawiedliwie", "niesprawiedliwy", "źle"],
                "correct": "niesprawiedliwie",
                "explanation": "'Niesprawiedliwie' (несправедливо) від 'niesprawiedliwy'. Укр. 'несправедливо' — майже ідентично! Корінь 'sprawiedliw-' = 'справедлив-'. Антонім: 'sprawiedliwie' (справедливо). Довге слово — типове для польських прислівників з заперечним префіксом 'nie-'."
            },
            {
                "id": "up_am12",
                "question": "Ona _____ się uśmiechnęła. (ніжно/лагідно)",
                "translation": "(Вона ніжно усміхнулася)",
                "options": ["łagodnie", "łagodny", "serdecznie", "wesoło"],
                "correct": "łagodnie",
                "explanation": "'Łagodnie' (лагідно) від 'łagodny' (лагідний). Укр. 'лагідно' — ідентична пара! 'Ł' = 'Л'. Інші прислівники емоцій: 'serdecznie' (сердечно), 'czule' (ніжно/чуло), 'ciepło' (тепло), 'chłodno' (холодно/відчужено). Метафора температури = ставлення."
            },
            {
                "id": "up_am13",
                "question": "_____ tego nie powiedziałem! (навмисно/навмисне)",
                "translation": "(Я навмисне цього не сказав!)",
                "options": ["Celowo", "Przypadkowo", "Niechcący", "Naturalnie"],
                "correct": "Celowo",
                "explanation": "'Celowo' (навмисне/цілеспрямовано) від 'cel' (ціль). Антоніми: 'przypadkowo' (випадково), 'niechcący' (ненавмисне/нехотячи), 'nieumyślnie' (ненавмисно). Укр. 'цілеспрямовано' має той самий корінь 'ціль' = 'cel'. Синонім: 'umyślnie' (умисно)."
            },
            {
                "id": "up_am14",
                "question": "Mogę to zrobić _____. (самостійно)",
                "translation": "(Можу це зробити самостійно)",
                "options": ["samodzielnie", "samotnie", "samodzielny", "samemu"],
                "correct": "samodzielnie",
                "explanation": "'Samodzielnie' (самостійно) від 'samodzielny' (самостійний). 'Sam' (сам) + 'dzielny' (дільний). Увага: 'samotnie' (самотньо) — інше значення! 'Samodzielnie' = без допомоги (позитивно), 'samotnie' = один (часто негативно). Укр. 'самодіяльно' ≠ 'samodzielnie'!"
            },
            {
                "id": "up_am15",
                "question": "Oni rozmawiali _____. (жваво/оживлено)",
                "translation": "(Вони розмовляли жваво)",
                "options": ["żywiołowo", "cicho", "nudno", "żywy"],
                "correct": "żywiołowo",
                "explanation": "'Żywiołowo' (жваво/стихійно) від 'żywiołowy' (жвавий/стихійний). 'Żywioł' = стихія. Синоніми: 'ożywienie' (пожвавлено), 'energicznie' (енергійно), 'z zapałem' (із запалом). Укр. 'живо' ≈ пол. 'żywo'. Корінь 'żyw-' = 'жив-' (живий)."
            }
        ]
    },
    {
        "key": "superlative_adjectives",
        "name": "Stopień najwyższy przymiotników",
        "description": "Найвищий ступінь прикметників",
        "iconName": "crown.fill",
        "color": "#eab308",
        "level": "intermediate",
        "items": [
            {
                "id": "up_sa1",
                "question": "To jest _____ budynek w mieście. (найвищий)",
                "translation": "(Це найвищий будинок у місті)",
                "options": ["najwyższy", "wyższy", "wysoki", "najwysoki"],
                "correct": "najwyższy",
                "explanation": "Найвищий ступінь: 'naj-' + вищий ступінь. 'Wysoki' → 'wyższy' → 'najwyższy'. Укр. 'високий' → 'вищий' → 'найвищий'. Префікс 'naj-' = укр. 'най-' — ідентично! Це одна з найпростіших відповідностей між мовами."
            },
            {
                "id": "up_sa2",
                "question": "Ona jest _____ uczennicą w klasie. (найкраща)",
                "translation": "(Вона найкраща учениця в класі)",
                "options": ["najlepszą", "lepszą", "dobrą", "najdobrzejszą"],
                "correct": "najlepszą",
                "explanation": "Неправильний ступенювання: 'dobry' → 'lepszy' → 'najlepszy'. Укр. 'добрий' → 'кращий/ліпший' → 'найкращий/найліпший'. Зверніть увагу на орудний відмінок: 'najlepszĄ' (жін. рід). Суплетивні форми треба запам'ятати: корінь змінюється повністю."
            },
            {
                "id": "up_sa3",
                "question": "To jest _____ dzień w moim życiu! (найгірший)",
                "translation": "(Це найгірший день у моєму житті!)",
                "options": ["najgorszy", "gorszy", "zły", "najzlejszy"],
                "correct": "najgorszy",
                "explanation": "Неправильне ступенювання: 'zły' → 'gorszy' → 'najgorszy'. Укр. 'поганий/злий' → 'гірший' → 'найгірший'. І в польській, і в укр. ці форми суплетивні (змінюється корінь). 'Gorszy' ≈ 'гірший' — споріднені слова від спільнослов'янського кореня."
            },
            {
                "id": "up_sa4",
                "question": "Polecam _____ restaurację w okolicy. (найкращу)",
                "translation": "(Рекомендую найкращий ресторан в околиці)",
                "options": ["najlepszą", "najsmaczniejszą", "najtańszą", "lepszą"],
                "correct": "najlepszą",
                "explanation": "'Najlepszą' — знахідний відмінок жін. роду від 'najlepsza'. Пам'ятайте: форма найвищого ступеня відмінюється як звичайний прикметник! 'Najlepszy' (ч.р.) → 'najlepsza' (ж.р.) → 'najlepsze' (с.р.). Відмінок залежить від функції у реченні."
            },
            {
                "id": "up_sa5",
                "question": "Mount Everest to _____ góra na świecie. (найвища)",
                "translation": "(Еверест — найвища гора на світі)",
                "options": ["najwyższa", "wyższa", "najdłuższa", "największa"],
                "correct": "najwyższa",
                "explanation": "'Najwyższa' — жін. рід від 'najwyższy'. 'Góra' (гора) — жін. рід, тому прикметник = '-a'. Чергування: 'wysoki' → 'wyż-szy' (sz←к чергування!). В укр.: 'високий' → 'найвищий' (без чергування). Пол. чергування 'k→sz' перед суфіксом '-szy'."
            },
            {
                "id": "up_sa6",
                "question": "On jest _____ uczniem. (найрозумнішим)",
                "translation": "(Він найрозумніший учень)",
                "options": ["najmądrzejszym", "mądrzejszym", "mądrym", "najmądry"],
                "correct": "najmądrzejszym",
                "explanation": "'Najmądrzejszym' — орудний відмінок від 'najmądrzejszy'. 'Mądry' → 'mądrzejszy' → 'najmądrzejszy'. Чергування: 'dr→drz' перед суфіксом. Укр. 'мудрий' → 'мудріший' → 'наймудріший'. Зверніть увагу: пол. 'mądry' ≈ укр. 'мудрий' (ą↔у)."
            },
            {
                "id": "up_sa7",
                "question": "To jest _____ książka, jaką czytałem. (найцікавіша)",
                "translation": "(Це найцікавіша книга, яку я читав)",
                "options": ["najciekawsza", "ciekawsza", "ciekawa", "najciekawa"],
                "correct": "najciekawsza",
                "explanation": "'Najciekawsza' від 'ciekawy' → 'ciekawszy' → 'najciekawszy'. Жін. рід: '-sza'. Укр. 'цікавий' → 'цікавіший' → 'найцікавіший'. Конструкція: 'naj-' + суфікс '-szy'/'-ejszy'. Для більшості довгих прикметників: 'naj-' + 'bardziej' + прикметник як альтернатива."
            },
            {
                "id": "up_sa8",
                "question": "To _____ ważna decyzja w jego karierze. (найважливіша)",
                "translation": "(Це найважливіше рішення в його кар'єрі)",
                "options": ["najważniejsza", "ważniejsza", "ważna", "najważsza"],
                "correct": "najważniejsza",
                "explanation": "'Najważniejsza' від 'ważny' → 'ważniejszy' → 'najważniejszy'. Суфікс '-niejszy' для прикметників на '-ny': 'ładny' → 'ładniejszy' → 'najładniejszy'. Укр. '-ніший' = пол. '-niejszy'. Типове для прикметників з суфіксом '-ny'/'-ний'."
            },
            {
                "id": "up_sa9",
                "question": "Jakie jest _____ jezioro w Polsce? (найглибше)",
                "translation": "(Яке найглибше озеро в Польщі?)",
                "options": ["najgłębsze", "głębsze", "najgłęboki", "głębokie"],
                "correct": "najgłębsze",
                "explanation": "'Najgłębsze' — середній рід (бо 'jezioro' = середній). 'Głęboki' → 'głębszy' → 'najgłębszy'. Чергування: 'ok→sz'. Укр. 'глибокий' → 'глибший' → 'найглибший'. Подібне чергування! Середній рід: '-sze' (пол.) vs '-ше' (укр.)."
            },
            {
                "id": "up_sa10",
                "question": "Warszawa to _____ miasto w Polsce. (найбільше)",
                "translation": "(Варшава — найбільше місто в Польщі)",
                "options": ["największe", "większe", "duże", "najduże"],
                "correct": "największe",
                "explanation": "Неправильне ступенювання: 'duży' → 'większy' → 'największy'. Укр. 'великий' → 'більший' → 'найбільший'. Обидві мови мають суплетивні форми! 'Duży'≠'większy' (різні корені), як укр. 'великий'≠'більший'. Середній рід: 'największe' (бо 'miasto')."
            },
            {
                "id": "up_sa11",
                "question": "To jest _____ film roku. (найновіший)",
                "translation": "(Це найновіший фільм року)",
                "options": ["najnowszy", "nowszy", "nowy", "najnowiejszy"],
                "correct": "najnowszy",
                "explanation": "'Najnowszy' від 'nowy' → 'nowszy' → 'najnowszy'. Укр. 'новий' → 'новіший' → 'найновіший'. Порівняйте суфікси: пол. '-wszy' vs укр. '-віший'. Антонім: 'najstarszy' (найстаріший) від 'stary' → 'starszy' → 'najstarszy'."
            },
            {
                "id": "up_sa12",
                "question": "To _____ tańsze rozwiązanie. (найдешевше)",
                "translation": "(Це найдешевше рішення)",
                "options": ["najtańsze", "tańsze", "tanie", "najtaniejsze"],
                "correct": "najtańsze",
                "explanation": "'Najtańsze' від 'tani' → 'tańszy' → 'najtańszy'. Середній рід: 'najtańsze'. Чергування: 'n→ń' (n→н'). Укр. 'танній' (діалект)/дешевий → 'дешевший' → 'найдешевший'. Антонім: 'najdroższy' (найдорожчий) від 'drogi' → 'droższy'."
            },
            {
                "id": "up_sa13",
                "question": "Ten test był _____ ze wszystkich. (найлегший)",
                "translation": "(Цей тест був найлегший з усіх)",
                "options": ["najłatwiejszy", "łatwiejszy", "łatwy", "najłatwszy"],
                "correct": "najłatwiejszy",
                "explanation": "'Najłatwiejszy' від 'łatwy' → 'łatwiejszy' → 'najłatwiejszy'. Суфікс '-iejszy' (замість '-szy') для деяких прикметників. Антонім: 'najtrudniejszy' (найважчий) від 'trudny'. Укр. 'легкий' → 'легший' → 'найлегший'. Конструкція 'ze wszystkich' = 'з усіх'."
            },
            {
                "id": "up_sa14",
                "question": "Luty to _____ miesiąc w roku. (найкоротший)",
                "translation": "(Лютий — найкоротший місяць у році)",
                "options": ["najkrótszy", "krótszy", "krótki", "najkróciejszy"],
                "correct": "najkrótszy",
                "explanation": "'Najkrótszy' від 'krótki' → 'krótszy' → 'najkrótszy'. Чергування: 'tk→t' (спрощення). Укр. 'короткий' → 'коротший' → 'найкоротший'. Антонім: 'najdłuższy' (найдовший) від 'długi' → 'dłuższy'. 'Luty' (лютий) = назва місяця, ідентична в обох мовах."
            },
            {
                "id": "up_sa15",
                "question": "To _____ bardziej skomplikowana sprawa niż myślałem. (значно)",
                "translation": "(Це значно складніша справа, ніж я думав)",
                "options": ["znacznie", "bardzo", "trochę", "mało"],
                "correct": "znacznie",
                "explanation": "Підсилювачі ступенювання: 'znacznie' (значно) > 'o wiele' (набагато) > 'dużo' (набагато/значно) > 'trochę' (трохи) > 'nieznacznie' (незначно). Конструкція: підсилювач + вищий ступінь + 'niż' (ніж). Альтернативний найвищий: 'najbardziej skomplikowana' (найбільш складна)."
            }
        ]
    }
]

with open(FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Verify no duplicate IDs
existing_ids = {item['id'] for c in data for item in c['items']}
new_ids = {item['id'] for c in new_categories for item in c['items']}
dupes = existing_ids & new_ids
if dupes:
    print(f"ERROR: Duplicate IDs: {dupes}")
    exit(1)

# Verify no duplicate keys
existing_keys = {c['key'] for c in data}
new_keys = {c['key'] for c in new_categories}
key_dupes = existing_keys & new_keys
if key_dupes:
    print(f"ERROR: Duplicate keys: {key_dupes}")
    exit(1)

data.extend(new_categories)

with open(FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

total_items = sum(len(c.get('items', [])) for c in data)
print(f"Success: {len(data)} categories, {total_items} items")
for c in new_categories:
    print(f"  Added: {c['key']} ({len(c['items'])} items)")

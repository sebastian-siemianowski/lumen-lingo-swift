import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "comparative_superlative",
        "name": "Stopień wyższy i najwyższy (أَفْعَل)",
        "description": "التفضيل - صيغة أَفْعَل في المقارنة",
        "iconName": "arrow.up.right",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_comp1",
                "question": "محمد _____ من أحمد (Muhammad jest wyższy od Ahmeda)",
                "translation": "(Muhammad jest wyższy od Ahmeda)",
                "options": ["أَطْوَلُ", "طَوِيلُ", "الأَطْوَلُ", "طُولُ"],
                "correct": "أَطْوَلُ",
                "explanation": "Poprawnie: 'أَطْوَلُ' (aṭwalu) = wyższy/dłuższy. Stopień wyższy w arabskim: wzorzec أَفْعَل (afʿal). Od طَوِيل (wysoki): أَطْوَل. Konstrukcja: X أَفْعَلُ مِنْ Y = X jest bardziej... niż Y. W polskim używamy '-szy/-iejszy' (wyższy), w arabskim zawsze ten sam wzorzec أَفْعَل. UWAGA: forma أَفْعَل jest NIEZMIENNA (nieodmienna przez przypadki w stopniu wyższym)."
            },
            {
                "id": "pa_comp2",
                "question": "هذا البيت _____ من ذلك (Ten dom jest większy od tamtego)",
                "translation": "(Ten dom jest większy od tamtego)",
                "options": ["أَكْبَرُ", "كَبِيرُ", "الكَبِيرُ", "كِبَارُ"],
                "correct": "أَكْبَرُ",
                "explanation": "Poprawnie: 'أَكْبَرُ' (akbaru) = większy. Od كَبِير (duży/wielki): أَكْبَر. Konstrukcja porównawcza: هذا أَكْبَرُ مِنْ ذلك. Przyimek مِنْ jest OBOWIĄZKOWY w porównaniu (= 'niż/od'). Bez مِنْ forma أَفْعَل staje się stopniem najwyższym: الأَكْبَر = największy (z rodzajnikiem) lub أَكْبَرُ + dopełniacz: أَكْبَرُ بيتٍ = największy dom."
            },
            {
                "id": "pa_comp3",
                "question": "Stopień najwyższy 'جَمِيل' (piękny) z rodzajnikiem:",
                "translation": "(ما أفعل التفضيل مع ال؟)",
                "options": ["الأَجْمَلُ", "أَجْمَلُ", "جَمِيلُ", "المَجْمُولُ"],
                "correct": "الأَجْمَلُ",
                "explanation": "Poprawnie: 'الأَجْمَلُ' (al-ajmalu) = najpiękniejszy. Stopień najwyższy = أَفْعَل + الـ (rodzajnik). Trzy sposoby tworzenia superlatywu: 1) الأَفْعَلُ: الأَجْمَلُ (najpiękniejszy — określony); 2) أَفْعَلُ + dopełniacz: أَجْمَلُ مدينةٍ (najpiękniejsze miasto); 3) أَفْعَلُ + نكرة منصوبة: ... W polskim: 'naj-' + stopień wyższy. W arabskim: ten sam wzorzec, różni się tylko kontekstem."
            },
            {
                "id": "pa_comp4",
                "question": "هي _____ طالبة في الصف (Ona jest najlepszą studentką w klasie)",
                "translation": "(Ona jest najlepszą studentką w klasie)",
                "options": ["أَفْضَلُ", "فَضِيلَةُ", "الفُضْلَى", "فَاضِلَةُ"],
                "correct": "أَفْضَلُ",
                "explanation": "Poprawnie: 'أَفْضَلُ' (afḍalu) = najlepsza. Od فَاضِل (wybitny/cnotliwy): أَفْضَل. WAŻNE: forma أَفْعَل jest JEDNAWE dla obu rodzajów w funkcji porównawczej: هو أَفْضَلُ / هي أَفْضَلُ (nie ma formy żeńskiej *فُضْلَى w porównaniu z مِنْ). Ale w superlatywie z الـ: المرأة الفُضْلَى (forma żeńska فُعْلَى). To subtelna różnica!"
            },
            {
                "id": "pa_comp5",
                "question": "Stopień wyższy od 'حَسَن' (dobry) to:",
                "translation": "(ما أفعل التفضيل من حَسَن؟)",
                "options": ["أَحْسَنُ", "حَسَنُ", "أَحْسَنَ", "مُحَسَّنُ"],
                "correct": "أَحْسَنُ",
                "explanation": "Poprawnie: 'أَحْسَنُ' (aḥsanu) = lepszy/najlepszy. Od حَسَن (dobry/piękny). Rdzeń: ح-س-ن. Wzorzec: أَفْعَل. Ten przymiotnik jest bardzo częsty: أَحْسَنَ اللهُ إليكَ (Niech Bóg ci wynagrodzi). Uwaga: 'أَحْسَنَ' (z fathą na końcu) to też czasownik formy IV = udoskonalił/zrobił dobrze. Kontekst rozstrzyga: أَحْسَنُ (przymiotnik, ḍamma) vs. أَحْسَنَ (czasownik, fatha)."
            },
            {
                "id": "pa_comp6",
                "question": "Które przymiotniki NIE tworzą formy أَفْعَل?",
                "translation": "(أي صفات لا تأتي على أَفْعَل؟)",
                "options": ["Kolory i wady fizyczne (أَعْرَج = kulawy)", "Przymiotniki od rdzeni trójspółgłoskowych", "Przymiotniki opisujące rozmiar", "Przymiotniki opisujące wiek"],
                "correct": "Kolory i wady fizyczne (أَعْرَج = kulawy)",
                "explanation": "Kolory i wady fizyczne już MAJĄ formę أَفْعَل jako swoją PODSTAWOWĄ formę: أَحْمَر (czerwony), أَعْرَج (kulawy), أَعْمَى (ślepy). Nie mogą tworzyć drugiej formy أَفْعَل do porównania! Zamiast tego: أَكْثَرُ حُمْرَةً (bardziej czerwony — dosł. 'więcej czerwoności') lub أَشَدُّ حُمْرَةً (intensywniej czerwony). To obejście: nie da się zastosować wzorca أَفْعَل dwa razy."
            },
            {
                "id": "pa_comp7",
                "question": "القاهرة أَكْبَرُ مِنْ عَمّان — znaczy:",
                "translation": "(ما ترجمة هذه الجملة؟)",
                "options": ["Kair jest większy od Ammanu", "Kair jest największy w Ammanie", "Amman jest większy od Kairu", "Kair i Amman są duże"],
                "correct": "Kair jest większy od Ammanu",
                "explanation": "Poprawnie: 'القاهرة أَكْبَرُ مِنْ عَمّان' = Kair jest większy od Ammanu. Konstrukcja: PODMIOT + أَفْعَلُ + مِنْ + PORÓWNYWANY. القاهرة = Kair (r. żeński, ale أَكْبَرُ nie zmienia formy!). مِنْ عَمّان = od/niż Amman. Szyk jest stały: to co jest 'więcej' stoi PRZED مِنْ, to co jest 'mniej' PO مِنْ."
            },
            {
                "id": "pa_comp8",
                "question": "هذا _____ كتابٍ قرأتُه (To jest najlepszа książka, którą czytałem)",
                "translation": "(To jest najlepsza książka, którą czytałem)",
                "options": ["أَحْسَنُ", "الأَحْسَنُ", "حَسَنُ", "أَحْسَنَ"],
                "correct": "أَحْسَنُ",
                "explanation": "Poprawnie: 'أَحْسَنُ كتابٍ' = najlepsza książka. Superlativ z إضافة (dopełniacz): أَفْعَلُ + rzeczownik w dopełniaczu nieokreślony. أَحْسَنُ كتابٍ (najlepsza książka), أَكْبَرُ مدينةٍ (największe miasto). BEZ rodzajnika الـ na أَفْعَل! Bo jest w إضافة. To drugi sposób wyrażania superlatywu — bardzo popularny w MSA."
            },
            {
                "id": "pa_comp9",
                "question": "Forma żeńska superlatywu (z الـ) od أَكْبَر to:",
                "translation": "(ما مؤنث الأكبر مع ال؟)",
                "options": ["الكُبْرَى", "الأَكْبَرَة", "الكَبِيرَة", "الأَكْبَرُ"],
                "correct": "الكُبْرَى",
                "explanation": "Poprawnie: 'الكُبْرَى' (al-kubrā) = największa. Forma żeńska superlatywu: فُعْلَى (fuʿlā). أَكْبَر → كُبْرَى, أَصْغَر → صُغْرَى, أَفْضَل → فُضْلَى, أَحْسَن → حُسْنَى. L. mn.: كُبَر / فُضَل (rzadko) lub الكُبْرَيَات. UWAGA: forma فُعْلَى pojawia się TYLKO z الـ w superlatywie: المدينة الكُبْرَى (największe miasto). Bez الـ: أَكْبَرُ مدينةٍ."
            },
            {
                "id": "pa_comp10",
                "question": "هو _____ مني سناً (On jest starszy ode mnie wiekiem)",
                "translation": "(On jest starszy ode mnie wiekiem)",
                "options": ["أَكْبَرُ", "كَبِيرٌ", "الأَكْبَرُ", "كُبْرَى"],
                "correct": "أَكْبَرُ",
                "explanation": "Poprawnie: 'أَكْبَرُ مني سِنًّا' = starszy ode mnie wiekiem. Dodatkowe uściślenie: تَمْيِيز (specyfikacja) — سِنًّا (wiekiem) w bierniku wyjaśnia, pod jakim względem ktoś jest 'większy'. Bez سِنًّا zdanie znaczyłoby po prostu 'większy ode mnie' (rozmiarem). To ważny mechanizm: أَفْعَلُ + مِنْ + تَمْيِيز. Inne: أَكْثَرُ عِلْمًا (bardziej uczony)."
            },
            {
                "id": "pa_comp11",
                "question": "Jak powiedzieć 'bardziej interesujący' (od مُهِمّ)?",
                "translation": "(كيف نقول أكثر أهمية؟)",
                "options": ["أَهَمُّ", "أَمْهَمُ", "مُهِمُّ أَكْثَر", "أَكْثَرُ مُهِمّ"],
                "correct": "أَهَمُّ",
                "explanation": "Poprawnie: 'أَهَمُّ' (ahammu) = ważniejszy/bardziej interesujący. Od مُهِمّ — ale rdzeń to ه-م-م (مضعّف). Wzorzec أَفْعَل z podwojonym: أَهَمُّ (z szaddą). Inne podwojone: أَقَلُّ (mniejszy, od قَلِيل/قَلَّ), أَحَبُّ (droższy/bardziej kochany, od حَبَّ), أَشَدُّ (silniejszy/intensywniejszy, od شَدَّ). Forma podwojonego superlatywu zachowuje szaddę."
            },
            {
                "id": "pa_comp12",
                "question": "هذه المدينة هي الأَجْمَلُ — forma żeńska to:",
                "translation": "(ما مؤنث الأجمل؟)",
                "options": ["الجُمْلَى", "الأَجْمَلَة", "الجَمِيلَة", "الأَجْمِلَة"],
                "correct": "الجُمْلَى",
                "explanation": "Poprawnie: 'الجُمْلَى' — forma فُعْلَى od أَجْمَل. Ale UWAGA: ta forma jest rzadko używana w praktyce! Zazwyczaj mówi się: هي الأَجْمَلُ (forma męska jako niezmienna) lub الأَكْثَرُ جَمَالاً. W współczesnym MSA formy فُعْلَى są ograniczone do kilku popularnych: الكُبْرَى, الصُّغْرَى, العُظْمَى (najwspanialsza), الأُولَى (pierwsza/najważniejsza). Reszta — rzadka."
            },
            {
                "id": "pa_comp13",
                "question": "Jak powiedzieć 'bardziej skomplikowany' (od مُعَقَّد)?",
                "translation": "(كيف نقول أكثر تعقيداً؟)",
                "options": ["أَكْثَرُ تَعْقِيدًا", "أَعْقَدُ", "مُعَقَّدُ أَكْثَر", "أَمْعَقُ"],
                "correct": "أَكْثَرُ تَعْقِيدًا",
                "explanation": "Poprawnie: 'أَكْثَرُ تَعْقِيدًا' = bardziej skomplikowany. Przymiotniki od form wyższych (II-X) NIE tworzą أَفْعَل bezpośrednio! Obejście: أَكْثَرُ + masdar w bierniku: أَكْثَرُ تَعْقِيدًا (więcej komplikacji). Tak samo: أَكْثَرُ تَقَدُّمًا (bardziej zaawansowany), أَكْثَرُ اهْتِمَامًا (bardziej zainteresowany). Wyjątki: niektóre popularne jak أَهَمُّ są akceptowane."
            },
            {
                "id": "pa_comp14",
                "question": "الله أَكْبَر — znaczy:",
                "translation": "(ما معنى الله أكبر؟)",
                "options": ["Bóg jest największy", "Bóg jest duży", "Bóg jest większy od...", "Duży Bóg"],
                "correct": "Bóg jest największy",
                "explanation": "Poprawnie: 'اللهُ أَكْبَرُ' (Allāhu akbar) = Bóg jest największy. Chociaż gramatycznie أَكْبَرُ to stopień wyższy ('większy'), tu bez مِنْ rozumie się jako ABSOLUTNY superlativ: 'największy (ze wszystkiego)'. To tzw. التفضيل المطلق — porównanie absolutne bez drugiego członu. Użycie liturgiczne: takbīr (تكبير) — wypowiadany w modlitwie, adhanie, i przy różnych okazjach."
            },
            {
                "id": "pa_comp15",
                "question": "Które zdanie jest poprawne gramatycznie?",
                "translation": "(أي جملة صحيحة نحوياً؟)",
                "options": ["هذا أَجْمَلُ مِنْ ذلك", "هذا الأَجْمَلُ مِنْ ذلك", "هذا جَمِيلٌ مِنْ ذلك", "هذا أَجْمَلَ مِنْ ذلك"],
                "correct": "هذا أَجْمَلُ مِنْ ذلك",
                "explanation": "Poprawnie: 'هذا أَجْمَلُ مِنْ ذلك' = To jest piękniejsze od tamtego. Reguły: 1) BEZ الـ w porównaniu z مِنْ: أَجْمَلُ مِنْ (nie *الأَجْمَلُ مِنْ); 2) مِنْ jest obowiązkowe (nie można użyć samego جَمِيلٌ); 3) أَفْعَلُ kończy się na ḍamma (مرفوع), nie fatha! Fatha (*أَجْمَلَ) sugerowałaby biernik lub czasownik formy IV."
            }
        ]
    },
    {
        "key": "temporal_clauses",
        "name": "Zdania okolicznikowe czasu",
        "description": "الجمل الظرفية - عندما، حين، بعدما",
        "iconName": "clock.arrow.circlepath",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_tc1",
                "question": "_____ وصلتُ، بدأ المطرُ (Kiedy przyjechałem, zaczął padać deszcz)",
                "translation": "(Kiedy przyjechałem, zaczął padać deszcz)",
                "options": ["عِنْدَمَا", "لِأَنَّ", "لَكِنَّ", "حَتَّى"],
                "correct": "عِنْدَمَا",
                "explanation": "Poprawnie: 'عِنْدَمَا' (ʿindamā) = kiedy/gdy. Spójnik czasowy wprowadzający zdanie podrzędne. عِنْدَ (przy/u) + مَا (co) = 'w momencie gdy'. Po عِنْدَمَا używamy czasu PRZESZŁEGO (nawet jeśli po polsku użylibyśmy 'kiedy przyjadę'). Inne spójniki czasowe: حِينَمَا (kiedy), لَمَّا (kiedy/gdy — bardziej literackie), إِذَا (kiedy/jeśli — przyszłość)."
            },
            {
                "id": "pa_tc2",
                "question": "_____ أكلنا، خرجنا (Po tym jak zjedliśmy, wyszliśmy)",
                "translation": "(Po tym jak zjedliśmy, wyszliśmy)",
                "options": ["بَعْدَمَا", "قَبْلَمَا", "عِنْدَمَا", "بَيْنَمَا"],
                "correct": "بَعْدَمَا",
                "explanation": "Poprawnie: 'بَعْدَمَا' (baʿdamā) = po tym jak. بَعْدَ (po) + مَا (co) = 'po tym co'. Po بَعْدَمَا — czas PRZESZŁY: بَعْدَمَا أكلنا (po tym jak zjedliśmy). Alternatywa: بَعْدَ أَنْ + czas teraźn. tryb łączący: بَعْدَ أَنْ نَأْكُلَ (po tym jak zjemy). Porównaj z polskim: 'po jedzeniu' (rzeczownik) lub 'po tym jak zjedliśmy' (zdanie)."
            },
            {
                "id": "pa_tc3",
                "question": "_____ كنتُ أدرسُ، رنَّ الهاتفُ (Podczas gdy uczyłem się, zadzwonił telefon)",
                "translation": "(Podczas gdy uczyłem się, zadzwonił telefon)",
                "options": ["بَيْنَمَا", "بَعْدَمَا", "قَبْلَمَا", "لِأَنَّ"],
                "correct": "بَيْنَمَا",
                "explanation": "Poprawnie: 'بَيْنَمَا' (baynamā) = podczas gdy/w czasie gdy. بَيْنَ (między) + مَا. Wyraża JEDNOCZESNOŚĆ dwóch czynności. Po بَيْنَمَا zwykle كَانَ + teraźniejszy (czas przeszły ciągły): بَيْنَمَا كُنْتُ أَدْرُسُ = podczas gdy uczyłem się. To odpowiednik polskiego 'podczas gdy' lub angielskiego 'while'. Alternatywa: فِيمَا (w tym czasie gdy)."
            },
            {
                "id": "pa_tc4",
                "question": "_____ تخرجَ، سافرَ (Zanim ukończył studia, podróżował)",
                "translation": "(Zanim ukończył studia, podróżował)",
                "options": ["قَبْلَ أَنْ", "بَعْدَ أَنْ", "عِنْدَمَا", "بَيْنَمَا"],
                "correct": "قَبْلَ أَنْ",
                "explanation": "Poprawnie: 'قَبْلَ أَنْ' (qabla an) = zanim. قَبْلَ (przed) + أَنْ + czasownik w trybie ŁĄCZĄCYM (منصوب): قَبْلَ أَنْ يَتَخَرَّجَ (zanim ukończył/ukończy). WAŻNE: po أَنْ czas. teraźniejszy z fathą na końcu: يَتَخَرَّجَ (nie يَتَخَرَّجُ). Alternatywna forma: قَبْلَمَا + czas przeszły: قَبْلَمَا تَخَرَّجَ. Obie poprawne, pierwsza bardziej formalna."
            },
            {
                "id": "pa_tc5",
                "question": "سأنتظرُ _____ تأتيَ (Będę czekał, aż przyjdziesz)",
                "translation": "(Będę czekał, aż przyjdziesz)",
                "options": ["حَتَّى", "لِأَنَّ", "لَكِنَّ", "عِنْدَمَا"],
                "correct": "حَتَّى",
                "explanation": "Poprawnie: 'حَتَّى' (ḥattā) = aż/dopóki. Po حَتَّى czas teraźniejszy w trybie łączącym (منصوب): حَتَّى تَأْتِيَ (aż przyjdziesz — z fathą). حَتَّى ma wiele funkcji: 1) spójnik celu: درسَ حَتَّى نَجَحَ (uczył się aż zdał); 2) przyimek: مِنَ الصباحِ حَتَّى المساءِ (od rana do wieczora); 3) partykuła: حَتَّى أنتَ! (nawet ty!). Kontekst rozstrzyga."
            },
            {
                "id": "pa_tc6",
                "question": "_____ رآها، أحبَّها (Gdy tylko ją zobaczył, pokochał ją)",
                "translation": "(Gdy tylko ją zobaczył, pokochał ją)",
                "options": ["لَمَّا", "لِأَنَّ", "إِذَنْ", "هَلْ"],
                "correct": "لَمَّا",
                "explanation": "Poprawnie: 'لَمَّا' (lammā) = gdy/gdy tylko. Spójnik czasowy wyrażający NATYCHMIASTOWOŚĆ — jedno wydarzenie nastąpiło zaraz po drugim. Po لَمَّا ZAWSZE czas przeszły: لَمَّا رَآهَا (gdy ją zobaczył). Różnica od عِنْدَمَا: لَمَّا podkreśla bezpośredni związek przyczynowo-skutkowy, عِنْدَمَا jest bardziej neutralne. لَمَّا jest też bardziej literackie."
            },
            {
                "id": "pa_tc7",
                "question": "أدرسُ كُلَّ يومٍ _____ أنجحَ (Uczę się codziennie, żeby zdać)",
                "translation": "(Uczę się codziennie, żeby zdać)",
                "options": ["لِكَيْ", "لَمَّا", "بَيْنَمَا", "قَبْلَمَا"],
                "correct": "لِكَيْ",
                "explanation": "Poprawnie: 'لِكَيْ' (likay) = żeby/aby. Spójnik celu (nie czasowy, ale często mylony z czasowymi). Po لِكَيْ czas teraźniejszy w trybie łączącym: لِكَيْ أَنْجَحَ (żeby zdać). Alternatywy wyrażenia celu: لِـ + czas. teraź. (لِأَنْجَحَ), كَيْ (aby), حَتَّى (aby/żeby), لِأَجْلِ أَنْ (w celu). W polskim: 'żeby/aby' + bezokolicznik lub czas przeszły."
            },
            {
                "id": "pa_tc8",
                "question": "_____ الأستاذُ الدرسَ، سألَ الطلابَ (Kiedy nauczyciel skończył lekcję, zapytał uczniów)",
                "translation": "(Kiedy nauczyciel skończył lekcję, zapytał uczniów)",
                "options": ["حِينَمَا أَنْهَى", "حَتَّى", "لِأَنَّ", "بِدُونِ"],
                "correct": "حِينَمَا أَنْهَى",
                "explanation": "Poprawnie: 'حِينَمَا' (ḥīnamā) = kiedy/w chwili gdy. حِين (chwila/pora) + مَا. Synonim عِنْدَمَا, ale nieco bardziej formalny. Po حِينَمَا czas przeszły: حِينَمَا أَنْهَى = kiedy zakończył. Inne warianty: حِينَ (bez مَا) + zdanie, في حِينِ أَنَّ (podczas gdy — formalne). Wszystkie spójniki z مَا: عِنْدَمَا, بَعْدَمَا, قَبْلَمَا, بَيْنَمَا, حِينَمَا."
            },
            {
                "id": "pa_tc9",
                "question": "سأتصلُ بك _____ أصلَ (Zadzwonię do ciebie, kiedy dotrę)",
                "translation": "(Zadzwonię do ciebie, kiedy dotrę)",
                "options": ["عِنْدَمَا", "لَمَّا", "بَعْدَمَا", "قَبْلَمَا"],
                "correct": "عِنْدَمَا",
                "explanation": "Poprawnie: 'عِنْدَمَا أَصِلَ' = kiedy dotrę. UWAGA: mimo że mówimy o PRZYSZŁOŚCI, po عِنْدَمَا w MSA czas przeszły LUB teraźniejszy (bez سَوْفَ/سَـ!): عِنْدَمَا أَصِلُ / عِنْدَمَا وَصَلْتُ. Nigdy: *عِنْدَمَا سَأَصِلُ. To jak w angielskim 'when I arrive' (nie *when I will arrive). لَمَّا odnosi się TYLKO do przeszłości — nie pasuje do przyszłych planów."
            },
            {
                "id": "pa_tc10",
                "question": "_____ يكبرَ، سيفهمُ (Kiedy dorośnie, zrozumie)",
                "translation": "(Kiedy dorośnie, zrozumie)",
                "options": ["عِنْدَمَا", "لَمَّا", "مُنْذُ", "إلَّا"],
                "correct": "عِنْدَمَا",
                "explanation": "Poprawnie: 'عِنْدَمَا يَكْبَرَ' = kiedy dorośnie. Dla zdarzeń przyszłych: عِنْدَمَا / إِذَا + czas. teraźniejszy (bez سَـ). إِذَا jest częściej używane dla przyszłości z elementem warunkowym: إِذَا كَبِرَ (jeśli/kiedy dorośnie). W zdaniu głównym: سَيَفْهَمُ (zrozumie — z سَـ). Różnica: عِنْدَمَا = pewność (kiedy), إِذَا = możliwość (jeśli/kiedy)."
            },
            {
                "id": "pa_tc11",
                "question": "لَمْ أَرَهُ _____ سافرَ (Nie widziałem go, odkąd wyjechał)",
                "translation": "(Nie widziałem go, odkąd wyjechał)",
                "options": ["مُنْذُ أَنْ", "حَتَّى", "قَبْلَ أَنْ", "بَعْدَ أَنْ"],
                "correct": "مُنْذُ أَنْ",
                "explanation": "Poprawnie: 'مُنْذُ أَنْ' (mundhu an) = odkąd. مُنْذُ (od/odkąd) + أَنْ + czas przeszły: مُنْذُ أَنْ سَافَرَ (odkąd wyjechał). مُنْذُ może być też przyimkiem: مُنْذُ سَنَةٍ (od roku), مُنْذُ الصباحِ (od rana). Synonim: مُذْ (skrócona forma, literacka). W polskim: 'od(ąd)', 'od czasu gdy'. Użycie z przyszłością jest rzadkie."
            },
            {
                "id": "pa_tc12",
                "question": "كُلَّمَا درسَ _____ (Za każdym razem gdy się uczył, zdawał)",
                "translation": "(Za każdym razem gdy się uczył, zdawał)",
                "options": ["نجحَ", "يَنْجَحُ", "سَيَنْجَحُ", "أَنْ يَنْجَحَ"],
                "correct": "نجحَ",
                "explanation": "Poprawnie: 'كُلَّمَا دَرَسَ نَجَحَ' = za każdym razem gdy się uczył, zdawał. كُلَّمَا (kullamā) = ilekroć/za każdym razem gdy. ZAWSZE z czasem PRZESZŁYM w OBU częściach zdania: كُلَّمَا + przeszły, ... przeszły. Nigdy: *كُلَّمَا يَدْرُسُ. To wyraża powtarzalność w przeszłości. W polskim: 'ilekroć/za każdym razem gdy' — podobna konstrukcja."
            },
            {
                "id": "pa_tc13",
                "question": "سأعملُ _____ أتقاعدَ (Będę pracował, dopóki nie przejdę na emeryturę)",
                "translation": "(Będę pracował, dopóki nie przejdę na emeryturę)",
                "options": ["إِلَى أَنْ", "مُنْذُ أَنْ", "لِأَنَّ", "بِمَا أَنَّ"],
                "correct": "إِلَى أَنْ",
                "explanation": "Poprawnie: 'إِلَى أَنْ' (ilā an) = dopóki (nie)/aż. إِلَى (do) + أَنْ + czas. teraź. łączący: إِلَى أَنْ أَتَقَاعَدَ (aż przejdę na emeryturę). Podobne do حَتَّى, ale إِلَى أَنْ podkreśla punkt KOŃCOWY, حَتَّى może wyrażać też cel. Inne: رَيْثَمَا (dopóki — literackie), مَا دَامَ (tak długo jak): مَا دُمْتُ حَيًّا (tak długo jak żyję)."
            },
            {
                "id": "pa_tc14",
                "question": "ما إِنْ جلسَ _____ قامَ (Ledwo usiadł, a już wstał)",
                "translation": "(Ledwo usiadł, a już wstał)",
                "options": ["حَتَّى", "لِأَنَّ", "لَكِنَّ", "إِذَنْ"],
                "correct": "حَتَّى",
                "explanation": "Poprawnie: 'مَا إِنْ جَلَسَ حَتَّى قَامَ' = Ledwo usiadł, a już wstał. Konstrukcja: مَا إِنْ + przeszły + حَتَّى + przeszły = 'ledwo... a już...'. Wyraża natychmiastową sekwencję. Alternatywa: مَا كَادَ يَجْلِسُ حَتَّى قَامَ (nie zdążył usiąść, a już wstał). To jeden z elegantszych zwrotów arabskiej stylistyki. W polskim: 'ledwo... a już...' / 'nie zdążył... gdy...'"
            },
            {
                "id": "pa_tc15",
                "question": "Który spójnik wyraża JEDNOCZESNOŚĆ?",
                "translation": "(أي أداة تدل على التزامن؟)",
                "options": ["بَيْنَمَا (podczas gdy)", "بَعْدَمَا (po tym jak)", "قَبْلَمَا (zanim)", "لِكَيْ (żeby)"],
                "correct": "بَيْنَمَا (podczas gdy)",
                "explanation": "Poprawnie: 'بَيْنَمَا' = podczas gdy — wyraża jednoczesność dwóch czynności. Podsumowanie spójników czasowych: JEDNOCZESNOŚĆ: بَيْنَمَا, فِيمَا; KOLEJNOŚĆ: بَعْدَمَا (po), قَبْلَمَا/قَبْلَ أَنْ (przed); PUNKT CZASOWY: عِنْدَمَا, حِينَمَا, لَمَّا (kiedy); GRANICA: حَتَّى, إِلَى أَنْ (aż); POCZĄTEK: مُنْذُ أَنْ (odkąd); POWTARZALNOŚĆ: كُلَّمَا (ilekroć); CEL: لِكَيْ, لِـ (żeby)."
            }
        ]
    },
    {
        "key": "adverbs_arabic",
        "name": "Przysłówki arabskie (الظروف)",
        "description": "ظروف الزمان والمكان والحال في العربية",
        "iconName": "text.word.spacing",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_adv1",
                "question": "ذهبتُ _____ (Poszedłem wczoraj)",
                "translation": "(Poszedłem wczoraj)",
                "options": ["أَمْسِ", "غَدًا", "الآنَ", "دَائِمًا"],
                "correct": "أَمْسِ",
                "explanation": "Poprawnie: 'أَمْسِ' (amsi) = wczoraj. To przysłówek czasu (ظرف زمان). Nieodmienny, kończy się na kasrze (مبني على الكسر). Z rodzajnikiem: الأَمْسِ (literacka forma). UWAGA: 'أَمْسِ' bez الـ jest nieokreślony i nieodmienny; z الـ staje się odmienny. W polskim 'wczoraj' też jest nieodmienne. Powiązane: أَوَّلَ أَمْسِ (przedwczoraj)."
            },
            {
                "id": "pa_adv2",
                "question": "سأسافرُ _____ (Pojadę jutro)",
                "translation": "(Pojadę jutro)",
                "options": ["غَدًا", "أَمْسِ", "الآنَ", "هُنَا"],
                "correct": "غَدًا",
                "explanation": "Poprawnie: 'غَدًا' (ghadan) = jutro. Przysłówek czasu w bierniku (منصوب) — tanwin fatha (ً). Wiele przysłówków arabskich to rzeczowniki w BIERNIKU: غَدًا (jutro), صَبَاحًا (rano), مَسَاءً (wieczorem), لَيْلاً (nocą). To tzw. ظرف زمان lub مفعول فيه — biernik wyraża okoliczność czasową. W polskim: 'jutro, rano, wieczorem' — też nieodmienne."
            },
            {
                "id": "pa_adv3",
                "question": "هو يدرسُ _____ (On uczy się teraz)",
                "translation": "(On uczy się teraz)",
                "options": ["الآنَ", "غَدًا", "أَمْسِ", "أَبَدًا"],
                "correct": "الآنَ",
                "explanation": "Poprawnie: 'الآنَ' (al-āna) = teraz. Przysłówek czasu, nieodmienny (مبني على الفتح). Zawsze z rodzajnikiem الـ. Pochodzi od أَوَان (pora/czas). Synonimy: حَالِيًّا (obecnie — od حَال = stan), في الوقتِ الحاضرِ (w chwili obecnej — formalnie). W polskim: 'teraz/obecnie' — też nieodmienne."
            },
            {
                "id": "pa_adv4",
                "question": "هو _____ مشغول (On jest zawsze zajęty)",
                "translation": "(On jest zawsze zajęty)",
                "options": ["دَائِمًا", "أَحْيَانًا", "نَادِرًا", "أَبَدًا"],
                "correct": "دَائِمًا",
                "explanation": "Poprawnie: 'دَائِمًا' (dāʾiman) = zawsze. Od دَائِم (trwały/ciągły — imiesłów czynny od دَامَ). W bierniku jako przysłówek. Hierarchia częstotliwości: دَائِمًا (zawsze) > غَالِبًا (zazwyczaj) > كَثِيرًا (często) > أَحْيَانًا (czasami) > نَادِرًا (rzadko) > أَبَدًا (nigdy — z przeczeniem). W polskim podobna hierarchia: zawsze > zwykle > często > czasami > rzadko > nigdy."
            },
            {
                "id": "pa_adv5",
                "question": "الكتاب _____ (Książka jest tutaj)",
                "translation": "(Książka jest tutaj)",
                "options": ["هُنَا", "هُنَاكَ", "فَوْقَ", "تَحْتَ"],
                "correct": "هُنَا",
                "explanation": "Poprawnie: 'هُنَا' (hunā) = tutaj. Przysłówek MIEJSCA (ظرف مكان). Nieodmienny. Porównaj: هُنَا (tu) vs. هُنَاكَ/هُنَالِكَ (tam). Para ta odpowiada polskiemu 'tu/tam'. Inne przysłówki miejsca: فَوْقَ (nad/na górze), تَحْتَ (pod/na dole), أَمَامَ (przed/z przodu), وَرَاءَ/خَلْفَ (za/z tyłu), بَيْنَ (między), حَوْلَ (wokół)."
            },
            {
                "id": "pa_adv6",
                "question": "يتكلمُ العربيةَ _____ (Mówi po arabsku biegle/dobrze)",
                "translation": "(Mówi po arabsku biegle)",
                "options": ["جَيِّدًا", "جَيِّدٌ", "الجَيِّد", "جَوَّدَ"],
                "correct": "جَيِّدًا",
                "explanation": "Poprawnie: 'جَيِّدًا' (jayyidan) = dobrze. Przymiotnik w BIERNIKU jako przysłówek sposobu (حال). To fundamentalna reguła: w arabskim nie ma osobnej klasy przysłówków sposobu — przymiotnik + tanwin fatha = przysłówek! سَرِيعًا (szybko), بَطِيئًا (wolno), كَثِيرًا (dużo), قَلِيلاً (mało). W polskim: przymiotnik + '-o/-e' (szybko, dobrze)."
            },
            {
                "id": "pa_adv7",
                "question": "يذهبُ _____ إلى المكتبة (Chodzi czasami do biblioteki)",
                "translation": "(Chodzi czasami do biblioteki)",
                "options": ["أَحْيَانًا", "دَائِمًا", "أَبَدًا", "فَوْرًا"],
                "correct": "أَحْيَانًا",
                "explanation": "Poprawnie: 'أَحْيَانًا' (aḥyānan) = czasami. L. mn. od حِين (pora/czas) w bierniku. Dosłownie: 'w pewnych porach'. Porównaj: في بَعْضِ الأَحْيَانِ (w niektórych czasach — formalniejsze). Pozycja przysłówka w zdaniu: po czasowniku: يَذْهَبُ أَحْيَانًا, lub na początku: أَحْيَانًا يَذْهَبُ (z emfazą). W polskim: 'czasami/niekiedy' — pozycja też swobodna."
            },
            {
                "id": "pa_adv8",
                "question": "الكتاب _____ الطاولة (Książka jest na stole)",
                "translation": "(Książka jest na stole)",
                "options": ["فَوْقَ", "تَحْتَ", "أَمَامَ", "وَرَاءَ"],
                "correct": "فَوْقَ",
                "explanation": "Poprawnie: 'فَوْقَ' (fawqa) = nad/na. Przysłówek miejsca używany jako przyimek. فَوْقَ + dopełniacz: فَوْقَ الطاولةِ (na stole). UWAGA: فَوْقَ to ظرف مكان (okolicznik miejsca) pełniący funkcję شبه جملة (quasi-zdania). W polskim: 'na stole' = przyimek 'na' + miejscownik. Arabski nie HAS miejscownika — używa dopełniacza po przysłówkach miejsca."
            },
            {
                "id": "pa_adv9",
                "question": "لَنْ أفعلَ ذلك _____ (Nigdy tego nie zrobię)",
                "translation": "(Nigdy tego nie zrobię)",
                "options": ["أَبَدًا", "دَائِمًا", "أَحْيَانًا", "الآنَ"],
                "correct": "أَبَدًا",
                "explanation": "Poprawnie: 'أَبَدًا' (abadan) = nigdy (z przeczeniem) / kiedykolwiek. Od أَبَد (wieczność). UWAGA: أَبَدًا zmienia znaczenie w zależności od kontekstu: z PRZECZENIEM = nigdy: لَنْ أَفْعَلَ أَبَدًا (nigdy nie zrobię); BEZ przeczenia = zawsze/na wieki: خَالِدِينَ فِيهَا أَبَدًا (przebywając w nim wiecznie — koraniczne). W polskim 'nigdy' jest zawsze negatywne."
            },
            {
                "id": "pa_adv10",
                "question": "جلسَ _____ أخيه (Usiadł obok brata)",
                "translation": "(Usiadł obok brata)",
                "options": ["بِجَانِبِ", "فَوْقَ", "تَحْتَ", "وَرَاءَ"],
                "correct": "بِجَانِبِ",
                "explanation": "Poprawnie: 'بِجَانِبِ' (bijānibi) = obok/przy boku. جَانِب (bok/strona) + بِـ (w/przy). To wyrażenie przyimkowe pełniące funkcję przysłówka miejsca. Inne: بِالقُرْبِ مِنْ (blisko), بِالبَعِيدِ عَنْ (daleko od), إِلَى جَانِبِ (obok/oprócz). W polskim 'obok' to przyimek; w arabskim często wyrażenie z rzeczownikiem: جَانِب = strona/bok."
            },
            {
                "id": "pa_adv11",
                "question": "Jak powiedzieć 'szybko' po arabsku?",
                "translation": "(كيف نقول بسرعة؟)",
                "options": ["بِسُرْعَةٍ / سَرِيعًا", "سَرِيعٌ", "السَّرِيعُ", "أَسْرَعُ"],
                "correct": "بِسُرْعَةٍ / سَرِيعًا",
                "explanation": "Dwa sposoby tworzenia przysłówków sposobu: 1) بِـ + masdar: بِسُرْعَةٍ (z szybkością = szybko), بِهُدُوءٍ (ze spokojem = spokojnie); 2) przymiotnik + tanwin fatha: سَرِيعًا (szybko), هَادِئًا (spokojnie). Oba poprawne! Forma z بِـ jest bardziej formalna. W polskim: 'szybko' (przysłówek), 'z szybkością' (wyrażenie przyimkowe) — też oba możliwe."
            },
            {
                "id": "pa_adv12",
                "question": "وصلَ _____ (Przybył natychmiast/od razu)",
                "translation": "(Przybył natychmiast)",
                "options": ["فَوْرًا", "غَدًا", "أَمْسِ", "بَعْدَ ذلك"],
                "correct": "فَوْرًا",
                "explanation": "Poprawnie: 'فَوْرًا' (fawran) = natychmiast/od razu. Od فَوْر (moment/natychmiast). W bierniku jako przysłówek. Synonimy: حَالاً (od razu), في الحالِ (natychmiast), مُبَاشَرَةً (bezpośrednio/natychmiast), تَوًّا (właśnie teraz). Zwrot: عَلَى الفَوْرِ (natychmiast — z przyimkiem عَلَى). W polskim: 'natychmiast/zaraz/od razu'."
            },
            {
                "id": "pa_adv13",
                "question": "يأتي _____ (Przychodzi codziennie)",
                "translation": "(Przychodzi codziennie)",
                "options": ["يَوْمِيًّا", "أُسْبُوعِيًّا", "شَهْرِيًّا", "سَنَوِيًّا"],
                "correct": "يَوْمِيًّا",
                "explanation": "Poprawnie: 'يَوْمِيًّا' (yawmiyyan) = codziennie. Od يَوْم (dzień) + نسبة (-iyy) + tanwin fatha. Przysłówki częstotliwości przez نسبة: يَوْمِيًّا (codziennie), أُسْبُوعِيًّا (co tydzień), شَهْرِيًّا (co miesiąc), سَنَوِيًّا (co rok). Alternatywa: كُلَّ يَوْمٍ (każdego dnia), كُلَّ أُسْبُوعٍ (co tydzień). Obie formy popularne w MSA."
            },
            {
                "id": "pa_adv14",
                "question": "هو _____ غنيٌّ (On jest bardzo bogaty)",
                "translation": "(On jest bardzo bogaty)",
                "options": ["جِدًّا", "جِدٌّ", "أَجَدُّ", "مُجِدٌّ"],
                "correct": "جِدًّا",
                "explanation": "Poprawnie: 'جِدًّا' (jiddan) = bardzo. Jeden z najczęstszych przysłówków. Stoi PO przymiotniku: غَنِيٌّ جِدًّا (bardzo bogaty), كَبِيرٌ جِدًّا (bardzo duży). UWAGA: 'مُجِدٌّ' = pilny/pracowity (imiesłów czynny od أَجَدَّ IV) — to zupełnie inne słowo! Alternatywy 'bardzo': لِلْغَايَةِ (niezwykle), كَثِيرًا (bardzo — z czasownikami), بِشَكْلٍ كَبِيرٍ (w dużym stopniu)."
            },
            {
                "id": "pa_adv15",
                "question": "Który wyraz jest przysłówkiem MIEJSCA?",
                "translation": "(أي كلمة ظرف مكان؟)",
                "options": ["وَرَاءَ (za/z tyłu)", "غَدًا (jutro)", "دَائِمًا (zawsze)", "فَوْرًا (natychmiast)"],
                "correct": "وَرَاءَ (za/z tyłu)",
                "explanation": "Poprawnie: 'وَرَاءَ' (warāʾa) = za/z tyłu — przysłówek MIEJSCA (ظرف مكان). Pozostałe to przysłówki CZASU (ظرف زمان): غَدًا (jutro), lub sposobu/częstotliwości: دَائِمًا (zawsze), فَوْرًا (natychmiast). Przysłówki miejsca: فَوْقَ (nad), تَحْتَ (pod), أَمَامَ (przed), وَرَاءَ/خَلْفَ (za), يَمِينَ (prawo), يَسَارَ/شِمَالَ (lewo), بَيْنَ (między)."
            }
        ]
    },
    {
        "key": "object_pronouns_attached",
        "name": "Zaimki dopełnieniowe dołączane",
        "description": "ضمائر المفعول المتصلة بالأفعال",
        "iconName": "link",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_opa1",
                "question": "رأيتُ_____ (Widziałem go)",
                "translation": "(Widziałem go)",
                "options": ["ـهُ", "ـها", "ـكَ", "ـي"],
                "correct": "ـهُ",
                "explanation": "Poprawnie: 'رَأَيْتُهُ' (raʾaytuhu) = widziałem go. Zaimek dołączany ـهُ (-hu) = go/jego. W arabskim zaimki dopełnieniowe DOŁĄCZANE SIĘ do końca czasownika jako sufiksy. Nie stoją osobno jak w polskim! Pełna lista: ـنِي (mnie), ـكَ (cię m.), ـكِ (cię ż.), ـهُ (go), ـهَا (ją), ـنَا (nas), ـكُمْ (was), ـهُمْ (ich)."
            },
            {
                "id": "pa_opa2",
                "question": "ساعدتُ_____ (Pomogłem jej)",
                "translation": "(Pomogłem jej)",
                "options": ["ـهَا", "ـهُ", "ـكَ", "ـنَا"],
                "correct": "ـهَا",
                "explanation": "Poprawnie: 'سَاعَدْتُهَا' (sāʿadtuhā) = pomogłem jej. ـهَا (-hā) = ją/jej. WAŻNE: po kasrze lub ي: ـهُ zmienia się na ـهِ: فِيهِ (w nim), بِهِ (z/przez niego). Ale ـهَا NIE zmienia się: فِيهَا (w niej), بِهَا (z/przez nią). Ta asymetria dotyczy tylko ـهُ → ـهِ. W polskim: 'ją/jej/nią' — trzy formy zależnie od przypadka. W arabskim: zawsze ـهَا."
            },
            {
                "id": "pa_opa3",
                "question": "هل تعرفُ_____؟ (Czy znasz mnie?)",
                "translation": "(Czy znasz mnie?)",
                "options": ["ـنِي", "ـكَ", "ـهُ", "ـنَا"],
                "correct": "ـنِي",
                "explanation": "Poprawnie: 'هَلْ تَعْرِفُنِي؟' (hal taʿrifunī?) = Czy znasz mnie? ـنِي (-nī) = mnie. UWAGA: w trybie rozkazującym i z بعض الأفعال: ـنِي (pełna forma) lub ـنْ (skrócona, rzadka). Po nun energetycznym: ـنَّنِي (podwójna nun). Porównaj polski: 'mnie/mi' (dwie formy zależnie od kontekstu). Arabski: zawsze ـنِي po czasownikach."
            },
            {
                "id": "pa_opa4",
                "question": "سأزورُ_____ غداً (Odwiedzę cię jutro — do mężczyzny)",
                "translation": "(Odwiedzę cię jutro — do mężczyzny)",
                "options": ["ـكَ", "ـكِ", "ـهُ", "ـكُمْ"],
                "correct": "ـكَ",
                "explanation": "Poprawnie: 'سَأَزُورُكَ' (saʾazūruka) = odwiedzę cię. ـكَ (-ka) = cię (m.). WAŻNE: rozróżnienie płci: ـكَ (cię m.) vs. ـكِ (cię ż.). W polskim 'cię' jest jednakowe dla obu płci! W arabskim KAŻDY zaimek 2. osoby rozróżnia płeć: أَنْتَ/ـكَ (m.) vs. أَنْتِ/ـكِ (ż.). W l. mn.: ـكُمْ (was m./mieszane), ـكُنَّ (was ż.)."
            },
            {
                "id": "pa_opa5",
                "question": "المعلم علَّمَ_____ (Nauczyciel nauczył nas)",
                "translation": "(Nauczyciel nauczył nas)",
                "options": ["ـنَا", "ـنِي", "ـهُمْ", "ـكُمْ"],
                "correct": "ـنَا",
                "explanation": "Poprawnie: 'عَلَّمَنَا' (ʿallamanā) = nauczył nas. ـنَا (-nā) = nas. UWAGA: ـنَا jest identyczne w formie z końcówką podmiotu 1. os. l. mn.! عَلَّمْنَا = my nauczyliśmy (ـنَا jako podmiot), عَلَّمَنَا = on nauczył nas (ـنَا jako dopełnienie). Różnica: samogłoska PRZED ـنَا: sukun (عَلَّمْنَا — my) vs. fatha (عَلَّمَنَا — nas). Subtélne, ale kluczowe!"
            },
            {
                "id": "pa_opa6",
                "question": "الأستاذ سألَ_____ (Profesor zapytał ich m.)",
                "translation": "(Profesor zapytał ich)",
                "options": ["ـهُمْ", "ـهُنَّ", "ـنَا", "ـكُمْ"],
                "correct": "ـهُمْ",
                "explanation": "Poprawnie: 'سَأَلَهُمْ' (saʾalahum) = zapytał ich. ـهُمْ (-hum) = ich (m./mieszane). Po kasrze: ـهِمْ: بِهِمْ (z nimi), فِيهِمْ (wśród nich). Pełna lista 3. os.: ـهُ (go), ـهَا (ją), ـهُمَا (ich dwoje), ـهُمْ (ich m.), ـهُنَّ (ich ż.). Forma dualis ـهُمَا jest unikalna dla arabskiego — nie istnieje w polskim."
            },
            {
                "id": "pa_opa7",
                "question": "أحبُّ_____ (Kocham cię — do kobiety)",
                "translation": "(Kocham cię — do kobiety)",
                "options": ["ـكِ", "ـكَ", "ـهَا", "ـنِي"],
                "correct": "ـكِ",
                "explanation": "Poprawnie: 'أُحِبُّكِ' (uḥibbuki) = kocham cię (ż.). ـكِ (-ki) = cię (ż.). Do mężczyzny: أُحِبُّكَ (uḥibbuka). UWAGA na wymowę: أُحِبُّ to forma I z podwojeniem (rdzeń ح-ب-ب, مضعّف). Zaimek dołączany przychodzi PO podwojeniu: أُحِبُّ + كِ. Jeśli dodajemy dwa zaimki (pośredni + bezpośredni): أَعْطَيْتُكِهَا (dałem ci ją) — rzadkie, ale poprawne."
            },
            {
                "id": "pa_opa8",
                "question": "Dwa zaimki dołączane: 'أَعْطَانِيهِ' znaczy:",
                "translation": "(ماذا يعني أعطانيه؟)",
                "options": ["Dał mi go/to", "Dał mu mnie", "Dałem mu to", "Dali nam go"],
                "correct": "Dał mi go/to",
                "explanation": "Poprawnie: 'أَعْطَانِيهِ' = dał mi go. أَعْطَى (dał) + نِي (mi) + هِ (go). Kolejność: BLIŻSZY zaimek (komu?) + DALSZY (co?). Reguła kolejności: 1) sufiks 1. os. przed 2. os. przed 3. os; 2) sufiks oznaczający osobę przed sufiksem oznaczającym rzecz. W polskim: 'dał mi go' — dwa osobne słowa. W arabskim: wszystko w jednym wyrazie!"
            },
            {
                "id": "pa_opa9",
                "question": "إِنَّ_____ مجتهدٌ (Zaprawdę, on jest pilny)",
                "translation": "(Zaprawdę, on jest pilny)",
                "options": ["ـهُ", "هُوَ", "ـهِ", "إِيَّاهُ"],
                "correct": "ـهُ",
                "explanation": "Poprawnie: 'إِنَّهُ' (innahu) = zaprawdę on... Zaimek dołączany po إِنَّ: إِنَّنِي (zaprawdę ja), إِنَّكَ (ty m.), إِنَّهُ (on), إِنَّهَا (ona), إِنَّنَا (my), إِنَّهُمْ (oni). UWAGA: po إِنَّ zaimek jest w BIERNIKU (jako اسم إنّ), nie mianowniku! Dlatego forma dołączana, nie wolnostojąca (هُوَ). Porównaj: هُوَ مُجْتَهِدٌ (on jest pilny) vs. إِنَّهُ مُجْتَهِدٌ (zaprawdę, on jest pilny)."
            },
            {
                "id": "pa_opa10",
                "question": "Zaimek osobny w bierniku (إِيَّاهُ) używamy:",
                "translation": "(متى نستخدم إيّاه؟)",
                "options": ["Gdy chcemy podkreślić dopełnienie (emfaza)", "Zawsze zamiast ـهُ", "Tylko w pytaniach", "Tylko w przeczeniach"],
                "correct": "Gdy chcemy podkreślić dopełnienie (emfaza)",
                "explanation": "Poprawnie: إِيَّاهُ to WOLNOSTOJĄCY zaimek w bierniku — używany dla EMFAZY lub gdy zaimek stoi PRZED czasownikiem. Normalnie: رَأَيْتُهُ (widziałem go). Emfatycznie: إِيَّاهُ رَأَيْتُ (JEGO widziałem!). Lista: إِيَّايَ (mnie), إِيَّاكَ (ciebie m.), إِيَّاهُ (jego), إِيَّاهَا (ją), إِيَّانَا (nas), إِيَّاكُمْ (was), إِيَّاهُمْ (ich). Koraniczne: إِيَّاكَ نَعْبُدُ (Ciebie czcimy)."
            },
            {
                "id": "pa_opa11",
                "question": "كتبتُ لَ_____ رسالةً (Napisałem mu list)",
                "translation": "(Napisałem mu list)",
                "options": ["ـهُ", "ـها", "ـي", "ـنَا"],
                "correct": "ـهُ",
                "explanation": "Poprawnie: 'كَتَبْتُ لَهُ رِسَالَةً' = napisałem mu list. Tu ـهُ dołącza się do PRZYIMKA لَـ (dla/do): لَهُ = dla niego/mu. Zaimki dołączane łączą się też z przyimkami: لِي (mi), لَكَ (tobie m.), لَهُ (jemu), لَهَا (jej), لَنَا (nam), لَكُمْ (wam), لَهُمْ (im). UWAGA: لِي (z kasrą) ale لَهُ (z fathą) — przyimek zmienia samogłoskę!"
            },
            {
                "id": "pa_opa12",
                "question": "أخبرَ_____ بالنتيجة (Poinformował ją o wyniku)",
                "translation": "(Poinformował ją o wyniku)",
                "options": ["ـهَا", "ـهُ", "إِيَّاهَا", "ـكِ"],
                "correct": "ـهَا",
                "explanation": "Poprawnie: 'أَخْبَرَهَا' (akhbarahā) = poinformował ją. أَخْبَرَ (forma IV od خ-ب-ر = informowanie) + هَا (ją). Konstrukcja: أَخْبَرَ + osoba (مفعول به أول) + بِـ + treść (مفعول به ثاني): أَخْبَرَهَا بِالنَّتِيجَةِ. Niektóre czasowniki biorą DWA dopełnienia: أَعْطَى (dał), عَلَّمَ (nauczył), أَخْبَرَ (poinformował). Drugie dopełnienie może być zdaniem: أَخْبَرَهَا أَنَّ... (poinformował ją, że...)."
            },
            {
                "id": "pa_opa13",
                "question": "لا تنسَ_____ (Nie zapomnij o nas!)",
                "translation": "(Nie zapomnij o nas!)",
                "options": ["ـنَا", "ـنِي", "ـهُمْ", "ـكُمْ"],
                "correct": "ـنَا",
                "explanation": "Poprawnie: 'لَا تَنْسَنَا' (lā tansanā) = nie zapomnij o nas. Rozkaz przeczony: لَا + czas teraźniejszy w مجزوم: تَنْسَ (od نَسِيَ — ناقص, ي odpada w مجزوم). Zaimek ـنَا dołączony na końcu. UWAGA: نَسِيَ jest przechodni: نَسِيتُكَ (zapomniałem cię), nie *نَسِيتُ عَنْكَ. W polskim: 'zapomnieć O kimś' (z przyimkiem), w arabskim: 'zapomnieć kogoś' (bez przyimka)."
            },
            {
                "id": "pa_opa14",
                "question": "Co znaczy 'سأريكَ'?",
                "translation": "(ماذا يعني سأريكَ؟)",
                "options": ["Pokażę ci (m.)", "Zobaczyłem cię", "Widzisz mnie", "Pokażę jej"],
                "correct": "Pokażę ci (m.)",
                "explanation": "Poprawnie: 'سَأُرِيكَ' = pokażę ci. Rozbior: سَـ (przyszłość) + أُرِي (czas teraź. formy IV od ر-أ-ي, 1. os.) + كَ (tobie m.). أَرَى (forma IV) = pokazał (kauzatywne od رَأَى = zobaczyć). Teraźniejszy: يُرِي (pokazuje). Z zaimkiem: سَأُرِيكَ (pokażę ci m.), سَأُرِيكِ (ci ż.), سَأُرِيهِ (mu). Wielowarstwowe: przyszłość + forma IV + zaimek — typowe dla MSA."
            },
            {
                "id": "pa_opa15",
                "question": "Które zdanie ma BŁĘDNĄ kolejność zaimków?",
                "translation": "(أي جملة خاطئة في ترتيب الضمائر؟)",
                "options": ["أَعْطَاهُنِي (dał go mi)", "أَعْطَانِيهِ (dał mi go)", "سَأَلَنِي (zapytał mnie)", "رَآهُمْ (widział ich)"],
                "correct": "أَعْطَاهُنِي (dał go mi)",
                "explanation": "Poprawnie: 'أَعْطَاهُنِي' jest BŁĘDNE — zaimek osoby bliższej (نِي = mi) musi stać PRZED zaimkiem rzeczy (هُ = go): أَعْطَانِيهِ (dał mi go), NIE *أَعْطَاهُنِي. Reguła kolejności: 1. os. > 2. os. > 3. os.; osoba > rzecz. Wyjątek: jeśli oba zaimki to 3. os., kolejność jest swobodniejsza, ale zwyczajowo dopełnienie bliższe (komu?) przed dalszym (co?)."
            }
        ]
    },
    {
        "key": "hal_circumstantial",
        "name": "Okolicznik stanu (الحال)",
        "description": "الجملة الحالية - وصف حال الفاعل أو المفعول",
        "iconName": "figure.walk",
        "color": "#60a5fa",
        "level": "advanced",
        "items": [
            {
                "id": "pa_hal1",
                "question": "جاء الولدُ _____ (Chłopiec przyszedł biegnąc)",
                "translation": "(Chłopiec przyszedł biegnąc)",
                "options": ["رَاكِضًا", "رَاكِضٌ", "الرَّاكِضُ", "يَرْكُضُ"],
                "correct": "رَاكِضًا",
                "explanation": "Poprawnie: 'رَاكِضًا' (rākiḍan) = biegnąc. To حال (ḥāl) = okolicznik stanu — opisuje STAN podmiotu w momencie czynności. Reguły حال: 1) BIERNIK (منصوب) — zawsze tanwin fatha; 2) NIEOKREŚLONY — bez الـ; 3) Zgadza się z opisywanym w rodzaju i liczbie: رَاكِضًا (m.), رَاكِضَةً (ż.). W polskim: imiesłów 'biegnąc' lub wyrażenie 'w biegu'."
            },
            {
                "id": "pa_hal2",
                "question": "رأيتُ الطفلَ _____ (Widziałem dziecko śpiące)",
                "translation": "(Widziałem dziecko śpiące)",
                "options": ["نَائِمًا", "نَائِمٌ", "النَّائِمُ", "نَوْمًا"],
                "correct": "نَائِمًا",
                "explanation": "Poprawnie: 'نَائِمًا' (nāʾiman) = śpiące (okolicznik stanu). Tu حال opisuje DOPEŁNIENIE (الطفلَ), nie podmiot! Reguła: حال może opisywać podmiot LUB dopełnienie: جاءَ الولدُ رَاكِضًا (podmiot biegnąc), رأيتُ الطفلَ نائِمًا (dopełnienie — śpiące). Skąd wiemy, kogo opisuje? Z SENSU zdania. W polskim: 'widziałem dziecko śpiące' — przymiotnik przy dopełnieniu."
            },
            {
                "id": "pa_hal3",
                "question": "خرجتْ _____ (Ona wyszła uśmiechnięta)",
                "translation": "(Ona wyszła uśmiechnięta)",
                "options": ["مُبْتَسِمَةً", "مُبْتَسِمًا", "مُبْتَسِمَةٌ", "الْمُبْتَسِمَةُ"],
                "correct": "مُبْتَسِمَةً",
                "explanation": "Poprawnie: 'مُبْتَسِمَةً' (mubtasimatan) = uśmiechnięta. حال musi się zgadzać z opisywanym w RODZAJU: podmiot هي → مُبْتَسِمَةً (ż. + biernik). Gdyby podmiot był męski: مُبْتَسِمًا (m. + biernik). مُبْتَسِم = uśmiechnięty (imiesłów czynny formy VIII od ب-س-م = uśmiech). W polskim: 'uśmiechnięta' — przymiotnik w mianowniku, w arabskim: حال w BIERNIKU."
            },
            {
                "id": "pa_hal4",
                "question": "جلسَ _____ يقرأُ (Usiadł czytając — zdanie حالية)",
                "translation": "(Usiadł, czytając)",
                "options": ["وَهُوَ", "وَهِيَ", "لِأَنَّ", "حَتَّى"],
                "correct": "وَهُوَ",
                "explanation": "Poprawnie: 'جَلَسَ وَهُوَ يَقْرَأُ' = usiadł, a on czytał (= usiadł czytając). To جملة حالية = zdanie okolicznikowe stanu. Wprowadzane przez وَ (waw al-ḥāl): وَ + zaimek + zdanie nominalne/werbalne. WAŻNE: ta وَ NIE jest spójnikiem 'i' — to واو الحال (waw stanu). Inne przykłady: دخلَ وَهُوَ يبكي (wszedł płacząc), خرجتْ وَهِيَ تضحكُ (wyszła śmiejąc się)."
            },
            {
                "id": "pa_hal5",
                "question": "دخلَ البيتَ _____ بابُه مفتوحٌ (Wszedł do domu, którego drzwi były otwarte)",
                "translation": "(Wszedł do domu, a jego drzwi były otwarte)",
                "options": ["وَ", "لِأَنَّ", "حِينَمَا", "ثُمَّ"],
                "correct": "وَ",
                "explanation": "Poprawnie: 'دَخَلَ البيتَ وَبابُهُ مَفْتوحٌ' = wszedł do domu, a drzwi były otwarte. Tu واو الحال + zdanie nominalne (بابُهُ مفتوحٌ) opisuje STAN domu, nie podmiotu. حال może opisywać też okoliczności towarzyszące, nie tylko stan osoby. To jak w polskim: imiesłów przysłówkowy lub zdanie wtrącone: 'wszedł do domu z otwartymi drzwiami'."
            },
            {
                "id": "pa_hal6",
                "question": "شربتُ الشايَ _____ (Wypiłem herbatę gorącą)",
                "translation": "(Wypiłem herbatę gorącą)",
                "options": ["سَاخِنًا", "سَاخِنٌ", "السَّاخِنُ", "سُخُونَةً"],
                "correct": "سَاخِنًا",
                "explanation": "Poprawnie: 'سَاخِنًا' (sākhinan) = gorącą (حال opisujący stan herbaty). Biernik. Tu حال opisuje dopełnienie (الشاي): w jakim stanie była herbata, gdy ją pił? Gorąca. Porównaj z نعت (przydawką): شربتُ الشايَ السَّاخِنَ = wypiłem gorącą herbatę (przydawka — z الـ, w bierniku). Różnica: حال = stan tymczasowy, نعت = cecha stała."
            },
            {
                "id": "pa_hal7",
                "question": "عادَ مِنَ العملِ _____ (Wrócił z pracy zmęczony)",
                "translation": "(Wrócił z pracy zmęczony)",
                "options": ["مُتْعَبًا", "مُتْعَبٌ", "التَّعَبُ", "تَعِبًا"],
                "correct": "مُتْعَبًا",
                "explanation": "Poprawnie: 'مُتْعَبًا' (mutʿaban) = zmęczony (حال). Od أَتْعَبَ (forma IV = zmęczyć) → مُتْعَب (imiesłów bierny IV = zmęczony). Porównaj: تَعِبَ (forma I = zmęczyć się) → تَعِبٌ (zmęczony — przymiotnik). Obie formy poprawne jako حال: مُتْعَبًا (bardziej = 'wyczerpany przez coś') vs. تَعِبًا (bardziej = 'czujący zmęczenie'). Subtelna różnica kauzatywna!"
            },
            {
                "id": "pa_hal8",
                "question": "Które zdanie zawiera حال w formie zdania?",
                "translation": "(أي جملة فيها حال جملة؟)",
                "options": ["جاءَ وَهُوَ يَبْكِي (przyszedł płacząc)", "جاءَ راكِضًا (przyszedł biegnąc)", "جاءَ مُسْرِعًا (przyszedł pospiesznie)", "جاءَ وَحِيدًا (przyszedł sam)"],
                "correct": "جاءَ وَهُوَ يَبْكِي (przyszedł płacząc)",
                "explanation": "Poprawnie: 'جاءَ وَهُوَ يَبْكِي' — tu حال to ZDANIE (جملة حالية), nie pojedynczy wyraz. واو الحال + هُوَ (podmiot) + يَبْكِي (orzeczenie) = pełne zdanie opisujące stan. Pozostałe: رَاكِضًا, مُسْرِعًا, وَحِيدًا — to حال مفردة (pojedyncze wyrazy w bierniku). Trzy typy حال: 1) مفردة (wyraz), 2) جملة فعلية (zdanie werbalne), 3) جملة اسمية (zdanie nominalne)."
            },
            {
                "id": "pa_hal9",
                "question": "سافرَ _____ الليل (Podróżował nocą — حال z przyimkiem)",
                "translation": "(Podróżował nocą / pod osłoną nocy)",
                "options": ["في جُنْحِ", "وَهُوَ", "رَاكِبًا", "مُسَافِرًا"],
                "correct": "في جُنْحِ",
                "explanation": "Poprawnie: 'في جُنْحِ الليلِ' = pod osłoną nocy. To حال شبه جملة — quasi-zdanie pełniące funkcję حال. شبه جملة to: 1) جار ومجرور (przyimek + dopełniacz): في الليلِ, على السريرِ; 2) ظرف (przysłówek): أمامَ المسجدِ. Przykład: جاءَ الرجلُ على حصانِه (mężczyzna przyszedł na koniu) — في/على + rzeczownik = حال."
            },
            {
                "id": "pa_hal10",
                "question": "لا تأكُلْ _____ (Nie jedz stojąc)",
                "translation": "(Nie jedz stojąc)",
                "options": ["وَاقِفًا", "وَاقِفٌ", "الوَاقِفُ", "وُقُوفًا"],
                "correct": "وَاقِفًا",
                "explanation": "Poprawnie: 'وَاقِفًا' (wāqifan) = stojąc (حال). Imiesłów czynny od وَقَفَ (stanął) w bierniku. Rozkaz z حال: لا تأكُلْ وَاقِفًا = nie jedz stojąc. Tu حال opisuje stan podmiotu (أنتَ — ukryte 'ty') podczas jedzenia. Hadis: نهى النبيُّ عن الشربِ قائِمًا (Prorok zakazał picia stojąc) — قَائِمًا = stojąc (حال z imiesłowu czynnego od قَامَ)."
            },
            {
                "id": "pa_hal11",
                "question": "Opisywany przez حال musi być:",
                "translation": "(صاحب الحال يجب أن يكون...)",
                "options": ["Określony (معرفة)", "Nieokreślony (نكرة)", "W bierniku (منصوب)", "W dopełniaczu (مجرور)"],
                "correct": "Określony (معرفة)",
                "explanation": "KLUCZOWA reguła: صاحب الحال (ten, kogo opisuje حال) musi być OKREŚLONY (معرفة): zaimek, imię własne, lub z الـ. جاءَ الولدُ رَاكِضًا ✓ (الولدُ = określony). *جاءَ ولدٌ رَاكِضًا ✗ (ولدٌ = nieokreślony — BŁĄD!). Natomiast sam حال musi być NIEOKREŚLONY: رَاكِضًا (bez الـ). Odwrotna reguła niż przydawka (نعت), która zgadza się z opisywanym w określoności!"
            },
            {
                "id": "pa_hal12",
                "question": "قَدِمَ الضيوفُ _____ (Goście przyszli uśmiechnięci — l. mn.)",
                "translation": "(Goście przyszli uśmiechnięci)",
                "options": ["مُبْتَسِمِينَ", "مُبْتَسِمًا", "مُبْتَسِمُونَ", "المُبْتَسِمِينَ"],
                "correct": "مُبْتَسِمِينَ",
                "explanation": "Poprawnie: 'مُبْتَسِمِينَ' (mubtasimīna) = uśmiechnięci (حال l. mn. m. w bierniku). حال w l. mn.: جمع مذكر سالم → ـِينَ (biernik/dopełniacz l. mn. zdrowej m.). NIE: مُبْتَسِمُونَ (to mianownik!). NIE: المُبْتَسِمِينَ (to z الـ — حال musi być bez!). Odmiana حال: مُبْتَسِمًا (l. poj. m.), مُبْتَسِمَةً (l. poj. ż.), مُبْتَسِمِينَ (l. mn. m.), مُبْتَسِمَاتٍ (l. mn. ż.)."
            },
            {
                "id": "pa_hal13",
                "question": "Jaka jest różnica: الولدُ الراكضُ vs. الولدُ راكِضًا?",
                "translation": "(ما الفرق بين النعت والحال؟)",
                "options": ["نعت = cecha stała; حال = stan tymczasowy", "Brak różnicy", "نعت = biernik; حال = mianownik", "نعت = nieokreślony; حال = określony"],
                "correct": "نعت = cecha stała; حال = stan tymczasowy",
                "explanation": "KLUCZOWE rozróżnienie: النعت (przydawka) = cecha STAŁA, DEFINIUJĄCA: الولدُ الراكضُ (chłopiec-biegacz, ten który biega). الحال = stan TYMCZASOWY, w MOMENCIE czynności: جاءَ الولدُ راكِضًا (przyszedł w stanie biegnięcia — teraz biegł). Formalnie: نعت zgadza się w określoności: الولدُ الراكضُ (oba z الـ). حال jest nieokreślony: راكِضًا (bez الـ, biernik)."
            },
            {
                "id": "pa_hal14",
                "question": "رجعَ مِنَ الحربِ _____ (Wrócił z wojny żywy)",
                "translation": "(Wrócił z wojny żywy)",
                "options": ["حَيًّا", "حَيٌّ", "الحَيُّ", "حَيَاةً"],
                "correct": "حَيًّا",
                "explanation": "Poprawnie: 'حَيًّا' (ḥayyan) = żywy (حال). W bierniku (tanwin fatha). حَيّ (żywy) to przymiotnik od حَيَاة (życie). Rdzeń: ح-ي-ي (podwojone ناقص — wyjątkowo trudna kombinacja!). Porównaj: حَيَاةً (życie — jako مفعول لأجله: dla życia) vs. حَيًّا (żywy — jako حال: w stanie życia)."
            },
            {
                "id": "pa_hal15",
                "question": "Który element w zdaniu: 'شربَ الماءَ بارِدًا' jest حال?",
                "translation": "(ما الحال في الجملة؟)",
                "options": ["بَارِدًا (zimna)", "الماءَ (woda)", "شَرِبَ (pił)", "Brak حال"],
                "correct": "بَارِدًا (zimna)",
                "explanation": "Poprawnie: 'بَارِدًا' (bāridan) = zimna — to حال opisujący stan dopełnienia (الماء). Rozbiór: شَرِبَ (orzeczenie) + الماءَ (dopełnienie — określone, z الـ) + بَارِدًا (حال — nieokreślone, biernik). Tłumaczenie: 'Pił wodę (będącą) zimną' = wypił zimną wodę. Gdyby było: شَرِبَ الماءَ البارِدَ — to نعت (przydawka), nie حال. Różnica: z الـ = nعت, bez الـ = حال."
            }
        ]
    }
]

data.extend(new_categories)

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verify
items = sum(len(c.get('items', [])) for c in data)
print(f'Now: {len(data)} categories, {items} items')
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k: v for k, v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f'DUPLICATES: {dupes}')
else:
    print('No duplicate IDs')
for c in new_categories:
    n = len(c['items'])
    print(f'  + {c["key"]} ({n} items)')

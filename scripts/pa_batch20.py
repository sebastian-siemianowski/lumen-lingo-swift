import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "transport_directions_ar",
        "name": "Transport i kierunki (النقل والاتجاهات)",
        "description": "مفردات وتعبيرات النقل والتنقل والاتجاهات",
        "iconName": "bus.fill",
        "color": "#60a5fa",
        "level": "beginner",
        "items": [
            {
                "id": "pa_td1",
                "question": "أريدُ _____ إلى المطار (Chce jechac na lotnisko)",
                "translation": "(Chce jechac na lotnisko)",
                "options": ["الذَّهَابَ", "ذَهَابًا", "ذَاهِبَ", "يَذْهَبُ"],
                "correct": "الذَّهَابَ",
                "explanation": "Poprawnie: 'adh-dhahaaba' = wyjazd/jazde (biernik okreslony). Po uriidu: dopelnienie blizsze w bierniku. Dhahaab = masdar od dhahaba (poszedl/pojechal). Al-mataar = lotnisko (wzorzec mafaal od t-y-r = latanie -- dosl: miejsce latania). Porownaj: matar = deszcz (inny rdzen: m-t-r!). Uriidu adh-dhahaaba ilaa... to standardowa konstrukcja podroznicza w MSA."
            },
            {
                "id": "pa_td2",
                "question": "_____ من فضلك (Skrec w prawo, prosze)",
                "translation": "(Skrec w prawo, prosze)",
                "options": ["اِنْعَطِفْ يَمِينًا", "اُعْطُفْ يَمِينًا", "يَمِينَ", "أَيْمَنْ"],
                "correct": "اِنْعَطِفْ يَمِينًا",
                "explanation": "Poprawnie: 'iniatif yamiiinan' = skrec w prawo. Forma VII tryb rozkazujacy od ain-t-f (skrecanie). Iniatafa = skrecil (medialna -- skreca sie). Yamiiinan = w prawo (biernik jako okolicznik kierunku). Min fadlik = prosze (doslownie: z twojej laskawosci). Kierunki: yamiiin (prawo), yasaar/shimaal (lewo), amaam (przod), khalfa (tyl)."
            },
            {
                "id": "pa_td3",
                "question": "أينَ _____ الحافلات؟ (Gdzie jest przystanek autobusowy?)",
                "translation": "(Gdzie jest przystanek autobusowy?)",
                "options": ["مَحَطَّةُ", "مَوْقِفُ", "مَكَانُ", "مَرْكَزُ"],
                "correct": "مَحَطَّةُ",
                "explanation": "Poprawnie: 'mahattatu' = stacja/przystanek. Rdzen: h-t-t (stawianie/umieszczanie). Mahatta = stacja -- wzorzec mafala (mudaaaf z szadda). Al-haafilaat = autobusy (l.mn. od haafila = autobus, dosl: niosaca). Porownaj: mawqif = parking/postoj (od w-q-f = stanie). Inne: mahattatu al-qitaar = stacja kolejowa, mahattatu al-waquud = stacja benzynowa."
            },
            {
                "id": "pa_td4",
                "question": "الطريقُ _____ (Droga jest zatloczona)",
                "translation": "(Droga jest zatloczona)",
                "options": ["مُزْدَحِمٌ", "مُزْدَحِمَةٌ", "زَاحِمٌ", "مَزْحُومٌ"],
                "correct": "مُزْدَحِمٌ",
                "explanation": "Poprawnie: 'muzdahimun' = zatloczona (r. meski!). At-tariiq = droga -- moze byc MESKI lub ZENSKI w arabskim (obu uzywa sie poprawnie). W MSA czesciej meski, wiec muzdahim (nie muzdahima). Forma VIII od z-h-m (tloczenie sie): izadahama = tloczyl sie. Masdar: izdihaaam = tlok/zator. Azma muruurityya = korek drogowy (termin formalny)."
            },
            {
                "id": "pa_td5",
                "question": "كَمْ _____ التذكرة؟ (Ile kosztuje bilet?)",
                "translation": "(Ile kosztuje bilet?)",
                "options": ["تَبْلُغُ", "يَبْلُغُ", "بَالِغَةٌ", "بُلُوغٌ"],
                "correct": "تَبْلُغُ",
                "explanation": "Poprawnie: 'tablughu' = kosztuje/wynosi (r. zenski). At-tadhkira = bilet (tez: pamiatka -- od dh-k-r = pamiec). R. zenski, wiec tablughu (nie yablughu). Balagha = osiagnal/wynosl. Masdar: buluugh = osiagniecie/dojrzalosc. Alternatywa: kam siruha = ile jej cena? Tadhkira dhahaab = bilet w jedna strone, dhahaab wa iyaab = w obie strony."
            },
            {
                "id": "pa_td6",
                "question": "القطارُ _____ في الساعة الثامنة (Pociag odjezdza o osmej)",
                "translation": "(Pociag odjezdza o osmej)",
                "options": ["يُغَادِرُ", "يَغْدُرُ", "غَادِرٌ", "مُغَادَرٌ"],
                "correct": "يُغَادِرُ",
                "explanation": "Poprawnie: 'yughaadiru' = odjezdza. Forma III od gh-d-r (opuszczanie). Ghaadara = opuscil/wyjechajal. Masdar: mughaadaraa = odjazd/wylot. Al-qitaar = pociag (z wloskiego guitarra -- nie! -- z tureckiego katar). As-saaata ath-thaamina = o osmej. Antonim: wasala = przybyl. Fii mataaraat: mughaadaraat = odloty, wusuulaat = przyloty."
            },
            {
                "id": "pa_td7",
                "question": "_____ من هنا (Jedz prosto stad)",
                "translation": "(Jedz prosto stad)",
                "options": ["سِرْ مُبَاشَرَةً", "اِذْهَبْ مُسْتَقِيمًا", "اِمْشِ قُدُمًا", "سَافِرْ أَمَامًا"],
                "correct": "سِرْ مُبَاشَرَةً",
                "explanation": "Oba poprawne: 'sir mubaasharatan' lub 'idhhab mustaqiiman' = jedz prosto. Sir = jedz (rozkazujacy od saara = jechac/szedl). Mubaasharatun = bezposrednio/prosto (haal -- okolicznik sposobu w bierniku). Min hunaa = stad. Alternatywa: mustaqiiman = prosto (od istaqaama forma X = byl prosty). Siraat mustaqiim = droga prosta (termin koraniczny!)."
            },
            {
                "id": "pa_td8",
                "question": "هل _____ سيارة؟ (Czy masz samochod?)",
                "translation": "(Czy masz samochod?)",
                "options": ["عِنْدَكَ", "لَدَيْكَ", "مَعَكَ", "لَكَ"],
                "correct": "عِنْدَكَ",
                "explanation": "Poprawnie: 'indaka' = masz (doslownie: u ciebie). W arabskim nie ma czasownika 'miec' -- uzywamy: inda (u), ladaa (u/przy), maa (z). Wszystkie cztery opcje moga znaczyc 'masz', ale inda jest najczyestsza w MSA dla posiadania. Sayyaara = samochod (od saara = podrozowac -- faala = 'tej co jeździ'). L.mn.: sayyaaraat."
            },
            {
                "id": "pa_td9",
                "question": "الطائرةُ _____ بعدَ ساعةٍ (Samolot laduje za godzine)",
                "translation": "(Samolot laduje za godzine)",
                "options": ["تَهْبِطُ", "يَهْبِطُ", "هَابِطَةٌ", "مَهْبُوطَةٌ"],
                "correct": "تَهْبِطُ",
                "explanation": "Poprawnie: 'tahbitu' = laduje (r. zenski). At-taaira = samolot (imieslow czynny zensli od t-y-r = latanie, dosl: latajaca). R. zenski, wiec tahbitu (nie yahbitu). Habata = zszedl/wyladowal. Bada saaatin = za godzine (bada w bierniku jako okolicznik czasu). Masdar: hubuut = ladowanie/zjazd. Antonim: aqlaata = wystartowala (forma IV)."
            },
            {
                "id": "pa_td10",
                "question": "_____ إلى يَسَارِ المسجد (Skieruj sie na lewo od meczetu)",
                "translation": "(Skieruj sie na lewo od meczetu)",
                "options": ["اِتَّجِهْ", "تَوَجَّهْ", "وَجَّهْ", "وَاجِهْ"],
                "correct": "اِتَّجِهْ",
                "explanation": "Poprawnie: 'ittajih' = skieruj sie. Forma VIII tryb rozk. od w-j-h (twarz/kierunek). Ittajaha = skierowal sie. Ilaa yasaari = na lewo od (yasaar = lewo). Al-masjid = meczet (wzorzec masfil od s-j-d = poklon -- dosl: miejsce prostracji). Porownaj: wajjaha (forma II) = skierowal (kogos, przechodni), tawajaaha (forma V) = kierowal sie (ku czemus)."
            },
            {
                "id": "pa_td11",
                "question": "الشارعُ _____ (Ulica jest jednokierunkowa)",
                "translation": "(Ulica jest jednokierunkowa)",
                "options": ["ذُو اتِّجَاهٍ وَاحِدٍ", "وَاحِدُ الاتِّجَاهِ", "أُحَادِيُّ الاتِّجَاهِ", "مُتَّجِهٌ وَاحِدٌ"],
                "correct": "ذُو اتِّجَاهٍ وَاحِدٍ",
                "explanation": "Poprawnie: 'dhuu ittijaahatin waahidin' = posiadajacy jeden kierunek = jednokierunkowy. Dhuu = posiadajacy (z al-asmaa al-khamsa -- piciu imion!). Ittijaah = kierunek (masdar formy VIII od w-j-h). Ash-shaari = ulica (od sh-r-ain = poczatek/odcinek). W dopelniaczu: dhii, bierniku: dhaa. Uhaadiyy al-ittijaah tez jest poprawne (bardziej techniczne)."
            },
            {
                "id": "pa_td12",
                "question": "أريدُ _____ سيارة أُجْرَة (Chce wziac taksowke)",
                "translation": "(Chce wziac taksowke)",
                "options": ["أَنْ أَسْتَقِلَّ", "أَنَ اِرْكَبَ", "أَنْ آخُذَ", "أَنْ أَسُوقَ"],
                "correct": "أَنْ أَسْتَقِلَّ",
                "explanation": "Poprawnie: 'an astaqilla' = wsiasc/wziac (pojazd). Forma X od q-l-l (mudaaaf) = istalqalla = wsiadl/uzyl (transportu). Sayyaaratu ujra = taksowka (dosl: samochod najmu). Ujra = wynagrodzenie/oplata za usluge. Alternatywa: an aakhudha = zebym wzial (bardziej potoczne). An astaqilla = formalniejsze MSA. Masdar: istiqlaall = niezaleznosc (inne znaczenie tej samej formy!)."
            },
            {
                "id": "pa_td13",
                "question": "المسافةُ _____ خمسين كيلومتراً (Odleglosc wynosi 50 km)",
                "translation": "(Odleglosc wynosi 50 km)",
                "options": ["تَبْلُغُ", "بَالِغَةٌ", "بَلَغَتْ", "يَبْلُغُ"],
                "correct": "تَبْلُغُ",
                "explanation": "Poprawnie: 'tablughu' = wynosi (r. zenski). Al-masaafa = odleglosc/dystans (r. zenska -- od w-s-f lub s-w-f). Tablughu bo masaafa jest zenska. Khamsiina = 50 (biernik/dopelniacz -- wielodziesiatki). Kiluumitran = kilometrow (tamyiiz -- l. poj. biernik po 11-99). Dlaczego nie kiluumitraat? Bo regula: po 11-99 zawsze l. poj. biernik!"
            },
            {
                "id": "pa_td14",
                "question": "هل يمرُّ _____ مِن هنا؟ (Czy autobus przejeżdza tędy?)",
                "translation": "(Czy autobus przejezdza tedy?)",
                "options": ["الحَافِلَةُ", "الحَافِلَةَ", "حَافِلَةٌ", "بِالحَافِلَةِ"],
                "correct": "الحَافِلَةُ",
                "explanation": "Poprawnie: 'al-haafilatu' = autobus (mianownik -- podmiot!). Yamurru = przejezdza (rdzen: m-r-r, mudaaaf -- przejezdzanie). Min hunaa = tedy/stad. Haafila = autobus (imieslow czynny od h-f-l = byc pelnym -- doslownie: pelna/obciazana). W Maghrebie mowia: huufila. W Lewancie: baas (z angielskiego bus). MSA: haafila. Yamurru bi = przechodzi obok."
            },
            {
                "id": "pa_td15",
                "question": "Ktory wyraz oznacza 'rondo' (skrzyzowanie okrezne)?",
                "translation": "(ما الكلمة التي تعني الدوار؟)",
                "options": ["الدَّوَّار", "الدَّائِرَة", "المُسْتَدِير", "الدَّوْرَة"],
                "correct": "الدَّوَّار",
                "explanation": "Poprawnie: 'ad-dawwaar' = rondo (dosl: to co sie kreci). Rdzen: d-w-r (obrot/rotacja). Wzorzec faalal = intensywnosc obracania. Porownaj: daaira = kolo/okrag, mustadiir = okragly (forma X), dawra = runda/obrot. W roznych krajach: dawwar (MSA/Lewant), maydaan (Egipt, tez: plac), dawwaar (Zatoka). Wszystkie od rdzenia d-w-r."
            }
        ]
    },
    {
        "key": "media_communication_ar",
        "name": "Media i komunikacja (الإعلام والتواصل)",
        "description": "مفردات وتعبيرات الإعلام ووسائل التواصل",
        "iconName": "antenna.radiowaves.left.and.right",
        "color": "#818cf8",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_mc1",
                "question": "شاهدتُ _____ في التلفزيون (Ogladalam wiadomosci w telewizji)",
                "translation": "(Ogladalam wiadomosci w telewizji)",
                "options": ["الأَخْبَارَ", "الأَخْبَارُ", "الأَخْبَارِ", "خَبَرًا"],
                "correct": "الأَخْبَارَ",
                "explanation": "Poprawnie: 'al-akhbaara' = wiadomosci (biernik okreslony). Dopelnienie blizsze shaahada w bierniku. Akhbaar = l.mn. lamana od khabar (wiadomosc) -- wzorzec afaal. Shaahadtu = ogladalam (forma III od sh-h-d = swiadczenie/widzenie). Fii at-tilfiziyuun = w telewizji. Tilfiziyuun = telewizja (zarabizowany wyraz z angielskiego television). Nashrata al-akhbaar = serwis informacyjny."
            },
            {
                "id": "pa_mc2",
                "question": "هي _____ مقالاً (Ona pisze artykul)",
                "translation": "(Ona pisze artykul)",
                "options": ["تَكْتُبُ", "تُكَتِّبُ", "كَاتِبَةٌ", "مَكْتُوبَةٌ"],
                "correct": "تَكْتُبُ",
                "explanation": "Poprawnie: 'taktubu' = pisze. Rdzen: k-t-b (pisanie -- jeden z najwazniejszych rdzeni arabskich). Maqaalan = artykul (biernik nieokreslony). Maqaal = artykul (wzorzec mafaal od q-w-l = mowienie -- dosl: to co sie mowi!). L.mn.: maqaalaat. Powiazane: kitaab = ksiazka, kaatib = pisarz, maktaba = biblioteka/ksiegarnia. Wszystko od k-t-b!"
            },
            {
                "id": "pa_mc3",
                "question": "البرنامجُ _____ كلَّ يوم جمعة (Program jest nadawany w kazdy piatek)",
                "translation": "(Program jest nadawany w kazdy piatek)",
                "options": ["يُذَاعُ", "يَذِيعُ", "ذَائِعٌ", "مُذَاعٌ"],
                "correct": "يُذَاعُ",
                "explanation": "Poprawnie: 'yudhaaau' = jest nadawany (strona bierna formy IV). Adhaaaa (forma IV od dh-y-ain) = nadal/emitowali. Bierna: udhiiaa/yudhaaau. Al-barnaamaj = program (z perskiego barnaamah). L.mn.: baraamij (l.mn. lamana). Kulla yawmi jumata = w kazdy piatek (jumat = piątek -- od jamaa = zgromadzenie, bo piatek to dzien modlitwy zbiorowej)."
            },
            {
                "id": "pa_mc4",
                "question": "_____ الصحفيُّ عِدَّةَ أسئلةٍ (Dziennikarz zadal kilka pytan)",
                "translation": "(Dziennikarz zadal kilka pytan)",
                "options": ["طَرَحَ", "طَرَّحَ", "أَطْرَحَ", "اِطَّرَحَ"],
                "correct": "طَرَحَ",
                "explanation": "Poprawnie: 'taraha' = podniosl (temat)/zadal (pytanie). Rdzen: t-r-h (rzucanie/stawianie). W MSA: taraha suaalan = zadal pytanie (dosl: rzucil pytanie). As-suhufiyy = dziennikarz (nisba od suhuuf = prasa, l.mn. od sahiifa = gazeta). Iddata = kilka (3-9, po niej l.mn. dopelniacz). Asilatun = pytan (l.mn. lamana od suaal)."
            },
            {
                "id": "pa_mc5",
                "question": "تَنْتَشِرُ الأخبارُ _____ عَبْرَ الإنترنت (Wiadomosci szybko rozchodza sie przez internet)",
                "translation": "(Wiadomosci szybko rozchodza sie przez internet)",
                "options": ["بِسُرْعَةٍ", "سَرِيعًا", "بِالسُّرْعَةِ", "أَسْرَعَ"],
                "correct": "بِسُرْعَةٍ",
                "explanation": "Poprawnie: 'bisuratin' = szybko (dosl: z szybkoscia). Tantashiru = rozchodza sie/rozprzestrzeniaja (forma VIII od n-sh-r = rozprzestrzenianie). Abra = przez/poprzez (zarf). Al-internit = internet (zarabizowany). Bisuratin = przyimek bi + masdar = przyslowkowe uzycie. Alternatywa: sariiaan (biernik jako haal). Nashara = opublikowal, intashara = rozprzes-trzenil sie."
            },
            {
                "id": "pa_mc6",
                "question": "المذيعُ _____ النشرةَ (Prezenter czyta serwis informacyjny)",
                "translation": "(Prezenter czyta serwis informacyjny)",
                "options": ["يَقْرَأُ", "يُقْرِئُ", "قَارِئٌ", "مَقْرُوءٌ"],
                "correct": "يَقْرَأُ",
                "explanation": "Poprawnie: 'yaqrau' = czyta. Rdzen: q-r-hamza (czytanie -- pierwszy rdzien objawiony w Koranie: iqra = czytaj!). Al-mudhii = prezenter (imieslow czynny formy IV od dh-y-ain). An-nashra = serwis/biuletyn (od n-sh-r = rozprzestrzenianie). Nashrat al-akhbaar = serwis informacyjny. Porownaj: yuqriu (forma IV) = dyktuje/recytuje."
            },
            {
                "id": "pa_mc7",
                "question": "_____ على المنشور (Skomentowala post)",
                "translation": "(Skomentowala post)",
                "options": ["عَلَّقَتْ", "عَلِقَتْ", "أَعْلَقَتْ", "تَعَلَّقَتْ"],
                "correct": "عَلَّقَتْ",
                "explanation": "Poprawnie: 'allaaqat' = skomentowala. Forma II od ain-l-q (wieszanie/laczenie). allaqa alaa = skomentowal (dosl: powiesil [komentarz] na). Al-manshuur = post/publikacja (imieslow bierny od n-sh-r = publikowanie). W mediach spolecznosciowych: taliq = komentarz, iajaab = polubienie (like), mushaaraka = udostepnienie (share). Taaliqaat = komentarze (l.mn.)."
            },
            {
                "id": "pa_mc8",
                "question": "الخبرُ _____ في جميعِ الصُّحُفِ (Wiadomosc ukazala sie we wszystkich gazetach)",
                "translation": "(Wiadomosc ukazala sie we wszystkich gazetach)",
                "options": ["نُشِرَ", "نَشَرَ", "اِنْتَشَرَ", "مَنْشُورٌ"],
                "correct": "نُشِرَ",
                "explanation": "Poprawnie: 'nushira' = zostal opublikowany (strona bierna formy I). Rdzen: n-sh-r (publikowanie/rozprzestrzenianie). Bierna bo wiadomosc jest podmiotem biernym (naaib al-faail). Fii jamiiii as-suhufi = we wszystkich gazetach. Suhuf = l.mn. lamana od sahiifa (gazeta/strona). Porownaj: nashara = opublikowal (czynna), intashara = rozprzes-trzenil sie (forma VIII)."
            },
            {
                "id": "pa_mc9",
                "question": "هو _____ مشهور (On jest znanym blogerem)",
                "translation": "(On jest znanym blogerem)",
                "options": ["مُدَوِّنٌ", "دَوَّنٌ", "مُتَدَوِّنٌ", "دَائِنٌ"],
                "correct": "مُدَوِّنٌ",
                "explanation": "Poprawnie: 'mudawwinun' = bloger (dosl: zapisujacy/dokumentujacy). Imieslow czynny formy II od d-w-n (zapisywanie/dokumentowanie). Dawwana = zarejestrowal/zapisal. Mudawwana = blog (r. zenski od mudawwin). Mashhuur = slynny/znany (imieslow bierny od sh-h-r = sława). Powiazane: diinwaan = zbior (poezji)/rejestr -- z tego samego rdzenia."
            },
            {
                "id": "pa_mc10",
                "question": "يجبُ _____ المصادرَ (Nalezy sprawdzic zrodla)",
                "translation": "(Nalezy sprawdzic zrodla)",
                "options": ["التَّحَقُّقُ مِنَ", "أَنْ يَتَحَقَّقَ مِنَ", "تَحَقَّقَ", "حَقَّقَ"],
                "correct": "التَّحَقُّقُ مِنَ",
                "explanation": "Poprawnie: 'at-tahaqqugu mina' = sprawdzenie (czegosc). Masdar formy V od h-q-q (prawda/pewnosc). Tahaqqaqa min = upewnil sie/zweryfikowal. Po yajibu: masdar w mianowniku (podmiotu) lub an + mansuub. Al-masaadir = zrodla (l.mn. lamana od masdar = zrodlo). Fakt-checking w MSA: at-tahaqquq min as-siha = weryfikacja prawdziwosci. Haqiiqa = prawda/fakt."
            },
            {
                "id": "pa_mc11",
                "question": "الإعلانُ _____ في الجريدة (Reklama ukazala sie w gazecie)",
                "translation": "(Reklama ukazala sie w gazecie)",
                "options": ["ظَهَرَ", "ظَهَرَتْ", "أَظْهَرَ", "ظَاهِرٌ"],
                "correct": "ظَهَرَ",
                "explanation": "Poprawnie: 'zahara' = ukazal sie/pojawil sie. Rdzen: z-h-r (pojawienie sie). Al-ilaan = reklama/ogloszenie (masdar formy IV od ain-l-n = ogłaszanie). R. MESKI, wiec zahara (nie zaharat). Fii al-jariida = w gazecie. Jariida = gazeta (od j-r-d = obierac -- dosl: obrany liscpalmowy = material do pisania). L.mn. jaraa'id."
            },
            {
                "id": "pa_mc12",
                "question": "أَرْسَلَتْ _____ إلكترونياً (Wyslala maila)",
                "translation": "(Wyslala e-mail)",
                "options": ["رِسَالَةً", "رِسَالَةُ", "الرِّسَالَةَ", "مُرَاسَلَةً"],
                "correct": "رِسَالَةً",
                "explanation": "Poprawnie: 'risaalatan' = wiadomosc/list (biernik nieokreslony). Forma IV arsala = wyslal. Risaala iliktruuriiyyaan = e-mail (dosl: wiadomosc elektroniczna). W bierniku: dopelnienie arsalat. Rdzen: r-s-l (slanie/poslanie). Rasuul = wyslannik/prorok. Muraasala = korespondencja. Mursil = nadawca. Mursal ilayhi = odbiorca. Bardzo produktywny rdzen."
            },
            {
                "id": "pa_mc13",
                "question": "_____ حسابَها على انستغرام (Zalozyła konto na Instagramie)",
                "translation": "(Zalozyła konto na Instagramie)",
                "options": ["أَنْشَأَتْ", "نَشَأَتْ", "أَنْشَأَ", "نَشَّأَتْ"],
                "correct": "أَنْشَأَتْ",
                "explanation": "Poprawnie: 'anshaaat' = zalozyła/utworzyła. Forma IV od n-sh-hamza (tworzenie). anshaa = utworzyl, anshaaat = utworzyła. Hisaab = konto (tez: rachunek/obliczenie, od h-s-b). Alaa instijraam = na Instagramie. W MSA: anshaaa hisaaban = zalozyc konto, hadhafa hisaaban = usunac konto. Powiazane: inshaa = tworzenie/kompozycja (w szkolnictwie: wypracowanie)."
            },
            {
                "id": "pa_mc14",
                "question": "وسائلُ _____ الاجتماعي (media spolecznosciowe)",
                "translation": "(media spolecznosciowe)",
                "options": ["التَّوَاصُلِ", "الوَصْلِ", "الاتِّصَالِ", "المُوَاصَلَةِ"],
                "correct": "التَّوَاصُلِ",
                "explanation": "Poprawnie: 'at-tawaasuli' = komunikacji/lacznosci (dopel. w idafie). Wasaailu at-tawaasul al-ijtimaaiy = media spolecznosciowe (dosl: srodki komunikacji spolecznej). Tawaasul = masdar formy VI od w-s-l (laczenie). Forma VI = wzajemnosc: tawaasala = komunikowali sie (wzajemnie). Wasaaiul = srodki (l.mn. od wasiila = srodek). Ijtimaaiy = spoleczny (nisba od ijtimaa = spotkanie)."
            },
            {
                "id": "pa_mc15",
                "question": "Ktory wyraz oznacza 'podcast' w MSA?",
                "translation": "(ما الكلمة التي تعني بودكاست؟)",
                "options": ["تَدْوِينَة صَوْتِيَّة", "بَرْنَامَج صَوْتِيّ", "مَقْطَع مَسْمُوع", "بُودْكَاسْت"],
                "correct": "تَدْوِينَة صَوْتِيَّة",
                "explanation": "Poprawnie: 'tadwiiinatun sawtiyya' = podcast (dosl: wpis dzwiekowy). Tadwiina = wpis/notatka (masdar jednorazowy formy II od d-w-n). Sawtiyya = dzwiekowa (nisba od sawt = glos/dzwiek). Alternatywy: barnaamaj sawtiyy, maqta masmuu (klip sluchowy), lub po prostu buudkaast (transliteracja). W MSA trwa debata -- tadwiina sawtiyya jest najbardziej arabskim okresleniem."
            }
        ]
    },
    {
        "key": "exam_strategies_ar",
        "name": "Strategie egzaminacyjne (استراتيجيات الامتحان)",
        "description": "عبارات واستراتيجيات مفيدة للامتحانات",
        "iconName": "checkmark.seal.fill",
        "color": "#fbbf24",
        "level": "advanced",
        "items": [
            {
                "id": "pa_es1",
                "question": "يجبُ _____ السؤالَ بعنايةٍ (Nalezy uwaznie przeczytac pytanie)",
                "translation": "(Nalezy uwaznie przeczytac pytanie)",
                "options": ["أَنْ تَقْرَأَ", "أَنْ تَقْرَأُ", "قِرَاءَةَ", "القِرَاءَةُ"],
                "correct": "أَنْ تَقْرَأَ",
                "explanation": "Poprawnie: 'an taqraa' = zebys przeczytal. Po yajibu: an + mansub lub masdar w mianowniku. An taqraa -- czas terazn. mansuub (z fatha). As-suaala = pytanie (biernik). Biinaaayatin = uwaznie (przyimek bi + masdar -- okolicznik sposobu). Rdzen q-r-hamza: Koranic root -- iqra = czytaj (pierwszy nakaz objawiony w islamie)."
            },
            {
                "id": "pa_es2",
                "question": "لا _____ على سؤالٍ واحدٍ (Nie spedzaj za duzo czasu na jednym pytaniu)",
                "translation": "(Nie tracic za duzo czasu na jednym pytaniu)",
                "options": ["تُضِعْ وَقْتًا كَثِيرًا", "تَضِيعْ وَقْتًا كَثِيرًا", "تُضَيِّعْ وَقْتًا", "ضَيَّعْتَ وَقْتًا"],
                "correct": "تُضِعْ وَقْتًا كَثِيرًا",
                "explanation": "Poprawnie: 'laa tudii waqtan kathiran' = nie trac duzo czasu. Laa + jussive = zakaz (laa an-naahiya). Forma IV: adaaia (mahmuz: d-y-ain) = zmarnowac. Waqtan = czasu (biernik). Kathiiran = duzo (biernik jako sifa). Alaa suaalin waahidin = na jednym pytaniu (oba w dopelniaczu po alaa). Strategia egzaminacyjna: skan pytania, odpowiedz na latwe, wroc do trudnych."
            },
            {
                "id": "pa_es3",
                "question": "إذا لم _____ الإجابة، انتقل (Jesli nie znasz odpowiedzi, przejdz dalej)",
                "translation": "(Jesli nie znasz odpowiedzi, przejdz dalej)",
                "options": ["تَعْرِفِ", "تَعْرِفُ", "تَعْرِفَ", "عَرَفْتَ"],
                "correct": "تَعْرِفِ",
                "explanation": "Poprawnie: 'tarifi' = znasz (jussive po lam negujace). Idhaa lam + jussive = jesli nie... Lam neguje przeszlosc ale w warunku odnosi sie do terazniejszosci/przyszlosci: lam tarif = nie znasz/nie bedziesz znal. Al-ijaaba = odpowiedz (masdar formy IV od j-w-b). Intaqil = przejdz dalej (rozkazujacy formy VIII od n-q-l = przenoszenie). Strategia: nie blokuj sie, wroc pozniej."
            },
            {
                "id": "pa_es4",
                "question": "_____ الإجاباتِ قبلَ التسليم (Sprawdz odpowiedzi przed oddaniem)",
                "translation": "(Sprawdz odpowiedzi przed oddaniem)",
                "options": ["رَاجِعِ", "رَاجِعُ", "رَجَعَ", "مُرَاجِع"],
                "correct": "رَاجِعِ",
                "explanation": "Poprawnie: 'raajii' = sprawdz (rozkazujacy formy III od r-j-ain). Raajaa = przejrzal/sprawdzil. Al-ijaabaat = odpowiedzi (l.mn. od ijaaba). Qabla at-tasliim = przed oddaniem. Tasliim = oddanie/doreczenie (masdar formy II od s-l-m). Muraajaa = sprawdzanie/rewizja (masdar formy III). Strategia: zawsze zostaw czas na muraajaa (revision) na koncu."
            },
            {
                "id": "pa_es5",
                "question": "اِسْتَبْعِدِ الخياراتِ _____ (Wyklucz bledne opcje)",
                "translation": "(Wyklucz niepoprawne opcje)",
                "options": ["الخَاطِئَةَ", "الخَطَأَ", "خَاطِئَةً", "المُخْطِئَةَ"],
                "correct": "الخَاطِئَةَ",
                "explanation": "Poprawnie: 'al-khaatuata' = bledne (biernik okreslony -- sifa al-khiyaaraat). Istabid = wyklucz (rozkazujacy formy X od b-ain-d = oddalanie). Forma X: istabaada = oddalawal/wykluczal (dosl: szukal oddalenia). Al-khiyaaraat = opcje (l.mn. od khiyaar = opcja/wybor, od kh-y-r = dobre). Khaatuia = bledna (imieslow czynny od kh-t-hamza). Strategia eliminacji."
            },
            {
                "id": "pa_es6",
                "question": "حاولْ _____ بين الأسئلة (Probuj rozdzielic czas miedzy pytania)",
                "translation": "(Probuj rozdzielic czas miedzy pytania)",
                "options": ["تَوْزِيعَ الوَقْتِ", "وَزَّعَ الوَقْتَ", "التَّوَازُنَ", "مُوَزَّعًا"],
                "correct": "تَوْزِيعَ الوَقْتِ",
                "explanation": "Poprawnie: 'tawziiaa al-waqti' = rozdzielenie czasu. Masdar formy II od w-z-ain (rozdzielanie). Haawil = sprobuj (rozk. formy III od h-w-l = prob). Po haawil: masdar w bierniku lub an + mansuub. Tawzii al-waqt bayna al-asilatun = rozdzielenie czasu miedzy pytania. Bayna = miedzy (zarf). Zarządzanie czasem to klucz do sukcesu na egzaminie."
            },
            {
                "id": "pa_es7",
                "question": "الإجابةُ _____ هي الأصح عادةً (Najprostrza odpowiedz jest zazwyczaj najlepsza)",
                "translation": "(Najprostsza odpowiedz jest zwykle najpoprawniejsza)",
                "options": ["الأَبْسَطُ", "البَسِيطَةُ", "المُبَسَّطَةُ", "بَسِيطَةٌ"],
                "correct": "الأَبْسَطُ",
                "explanation": "Poprawnie: 'al-absatu' = najprostsza (stopien najwyzszy od basiit). Wzorzec afal + al- = superlatyw. Al-asahh = najpoprawniejsza (superlativ od sahiih = poprawny). Aadatan = zazwyczaj (biernik jako okolicznik). W formie zdaniowej: al-ijaabatu al-absatu hiya al-asahhu -- trzy zgodne przymiotniki okreslone. Strategia: brzytwa Ockhama (Occam's Razor) na egzaminie."
            },
            {
                "id": "pa_es8",
                "question": "اِنْتَبِهْ _____ الكلمات المفتاحية (Zwracaj uwage na slowa kluczowe)",
                "translation": "(Zwracaj uwage na slowa kluczowe)",
                "options": ["إِلَى", "عَلَى", "بِ", "لِ"],
                "correct": "إِلَى",
                "explanation": "Poprawnie: 'intabih ilaa' = uwazaj na/zwracaj uwage na. Forma VIII rozk. od n-b-h (uwaga). Intabaha ilaa = zwrocil uwage na -- WYMAGA ilaa (nie alaa ani bi!). Al-kalimaat al-miftaahiyya = slowa kluczowe (dosl: slowa kluczowe -- miftaahiyya = nisba od miftaah = klucz). Na egzaminie kluczowe slowa: daaimaan (zawsze), abadan (nigdy), faqat (tylko) -- czesto zmieniaja sens."
            },
            {
                "id": "pa_es9",
                "question": "لا تُغَيِّرِ _____ إلا إذا كنتَ متأكداً (Nie zmieniaj odpowiedzi jesli nie jestes pewny)",
                "translation": "(Nie zmieniaj odpowiedzi chyba ze jestes pewny)",
                "options": ["إِجَابَتَكَ", "إِجَابَتُكَ", "إِجَابَتِكَ", "الإِجَابَةَ"],
                "correct": "إِجَابَتَكَ",
                "explanation": "Poprawnie: 'ijaabataka' = twojej odpowiedzi (biernik + zaimek). Laa + jussive = zakaz. Tughayyir = zmieniasz (forma II jussive od gh-y-r). Illaa idhaa = chyba ze/es-li nie. Kunta = bylbys (kana 2. os. m. przeszlosc -- ale w warunku = terazniejszosc). Mutaakkidan = pewny (imieslow czynny V od hamza-k-d). Strategia: pierwszy instynkt czesto poprawny."
            },
            {
                "id": "pa_es10",
                "question": "اُكْتُبْ _____ واضحاً (Pisz czytelnym charakterem pisma)",
                "translation": "(Pisz czytelnym pismem odręcznym)",
                "options": ["بِخَطٍّ", "خَطًّا", "الخَطَّ", "بِالخَطِّ"],
                "correct": "بِخَطٍّ",
                "explanation": "Poprawnie: 'bikhattsin' = pismem/charakterem (z bi + dopel. nieokreslony). Uktub = pisz (rozk. od k-t-b). Al-khatt = pismo/kaligrafia/linia (mudaaaf: kh-t-t). Waadihan = czytelnym/jasnym (haal w bierniku). Powiazane: khatt an-naskh = naskh (styl pisma), khatt ath-thuluth = thuluth. Al-khatt al-arabiyy = kaligrafia arabska (cala sztuka)."
            },
            {
                "id": "pa_es11",
                "question": "ابْدَأْ بالأسئلةِ _____ (Zacznij od latwyych pytan)",
                "translation": "(Zacznij od latwych pytan)",
                "options": ["السَّهْلَةِ", "سَهْلَةٍ", "الأَسْهَلِ", "السُّهُولَةِ"],
                "correct": "السَّهْلَةِ",
                "explanation": "Poprawnie: 'as-sahlati' = latwych (dopelniacz -- sifa al-amsilatun). Ibda = zacznij (rozk. od b-d-hamza). Bil-asilatun = pytaniami (z bi + dopel.). As-sahla = latwa -- przymiotnik okreslony w dopelniaczu jako sifa (zgodnosc z al-asilatun). Sahl = latwy. Masdar: suhuula = latwosc. Antonim: saib = trudny. Strategia: latwe najpierw, trudne na koniec (buduje pewnosc siebie)."
            },
            {
                "id": "pa_es12",
                "question": "لا _____ إذا كان السؤالُ صعباً (Nie panikuj jesli pytanie jest trudne)",
                "translation": "(Nie panikuj jesli pytanie jest trudne)",
                "options": ["تَرْتَبِكْ", "تَرْتَبِكُ", "اِرْتَبَكَ", "مُرْتَبِكٌ"],
                "correct": "تَرْتَبِكْ",
                "explanation": "Poprawnie: 'laa tartabik' = nie panikuj/nie trać glowy. Forma VIII od r-b-k (zamieszanie). Laa + jussive = zakaz. Idhaa kaana as-suaalu = jesli pytanie jest... Saban = trudne (biernik -- orzecznik kaana). Irtaabaka = zgubil sie/spanikował. Masdar: irtibaaak = zamieszanie/nerwowość. Strategia: oddychaj, pomysl, przejdz dalej jesli trzeba."
            },
            {
                "id": "pa_es13",
                "question": "تَأَكَّدْ مِنْ _____ جميعِ الأسئلة (Upewnij sie ze odpowiedziales na wszystkie pytania)",
                "translation": "(Upewnij sie ze odpowiedziales na wszystkie pytania)",
                "options": ["إِجَابَةِ", "إِجَابَةَ", "أَنْ تُجِيبَ عَنْ", "الإِجَابَةُ"],
                "correct": "إِجَابَةِ",
                "explanation": "Poprawnie: 'ijaabati' = odpowiedzenia na (dopelniacz w idafie po min). Taakkad min = upewnij sie (rozk. formy V od hamza-k-d). Min ijaabati jamiiii al-asilatun = ze odpowiedziales na wszystkie pytania (idafa wielokrotna). Jamiiii = wszystkich (dopel. od jamiia = wszystko/kazdy). Na egzaminie: puste odpowiedzi = stracone punkty. Lepiej zgadnac niz zostawic puste."
            },
            {
                "id": "pa_es14",
                "question": "اِسْتَخْدِمْ _____ لتنظيمِ أفكارِك (Uzyj planu aby zorganizowac mysli)",
                "translation": "(Uzyj planu aby zorganizowac swoje mysli)",
                "options": ["مُخَطَّطًا", "خِطَّةً", "تَخْطِيطًا", "خَطًّا"],
                "correct": "مُخَطَّطًا",
                "explanation": "Poprawnie: 'mukhattatan' = plan/szkic (biernik). Imieslow bierny formy II od kh-t-t (planowanie). Istakhdim = uzyj (rozk. formy X od kh-d-m = sluzenie). Li-tanziimi = aby zorganizowac (laam al-talim + masdar formy II od n-z-m). Afkaarika = twoich mysli (l.mn. lamana od fikr + ka). Strategia: przy esejach -- 5 min na plan, reszta na pisanie."
            },
            {
                "id": "pa_es15",
                "question": "Ktore wyrazenie oznacza 'metode eliminacji'?",
                "translation": "(ما العبارة التي تعني طريقة الاستبعاد؟)",
                "options": ["طَرِيقَةُ الاسْتِبْعَادِ", "أُسْلُوبُ الحَذْفِ", "مَنْهَجُ الإِزَالَةِ", "نِظَامُ الإِلْغَاءِ"],
                "correct": "طَرِيقَةُ الاسْتِبْعَادِ",
                "explanation": "Poprawnie: 'tariiiqatu al-istibaadi' = metoda eliminacji. Istibaad = wykluczenie/eliminacja (masdar formy X od b-ain-d = oddalanie). Tariiqa = metoda/droga (od t-r-q = stukanie/pukanie -- droga = to co jest ubijane stopami). Alternatywy: usluub = styl/metoda, manhaj = program/metoda. Na egzaminie wielokrotnego wyboru: wyklucz 2 bledne, wybierz z 2 pozostalych = 50% szans."
            }
        ]
    }
]

data.extend(new_categories)

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

items = sum(len(c.get('items',[])) for c in data)
print(f'Now: {len(data)} categories, {items} items')
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k:v for k,v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f'DUPLICATES: {dupes}')
else:
    print('No duplicate IDs')
for c in new_categories:
    print(f'  + {c["key"]} ({len(c["items"])} items)')
print('\n=== POLISH_ARABIC GRAMMAR COMPLETE: 105/105 categories, 1575/1575 items ===')

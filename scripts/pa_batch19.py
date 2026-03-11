import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "sports_hobbies_ar",
        "name": "Sport i hobby (الرياضة والهوايات)",
        "description": "مفردات وتعبيرات الرياضة والهوايات",
        "iconName": "figure.run",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_sh1",
                "question": "أنا _____ كرةَ القدمِ (Ja gram w pilke nozna)",
                "translation": "(Ja gram w pilke nozna)",
                "options": ["أَلْعَبُ", "أُلْعِبُ", "أَلْعِبُ", "أُلَاعِبُ"],
                "correct": "أَلْعَبُ",
                "explanation": "Poprawnie: 'alaabu' = gram. Rdzen: l-ain-b (gra/zabawa). Forma I, czas terazniejszy, 1. os. l. poj. Konstrukcja: laiba + dopelnienie bezposrednie (kurata al-qadam). W arabskim 'pilka nozna' to doslownie 'pilka nogi' -- kura (pilka) + al-qadam (stopa/noga) w idafie. Porownaj: ulaaibu (forma III) = gram z kims (wspolzawodnicze). To najczestszy sport w swiecie arabskim."
            },
            {
                "id": "pa_sh2",
                "question": "هوايتي المفضلة هي _____ (Moje ulubione hobby to plywanie)",
                "translation": "(Moje ulubione hobby to plywanie)",
                "options": ["السِّبَاحَة", "السَّبَاحَة", "السِّبَاعَة", "السَّبْحَة"],
                "correct": "السِّبَاحَة",
                "explanation": "Poprawnie: 'as-sibaaha' = plywanie. Rdzen: s-b-h (plywanie/chwalenie). Masdar na waga fiaala -- czesto dla czynnosci fizycznych: sibaaha (plywanie), riyaada (sport), qiraaa (czytanie). Uwaga: subha = rozaniec -- inny wzorzec, inne znaczenie! Konstrukcja: hiwaayatii al-mufaddala = moje ulubione hobby (idafa + przymiotnik)."
            },
            {
                "id": "pa_sh3",
                "question": "الفريقُ _____ المباراةَ (Druzyna wygrala mecz)",
                "translation": "(Druzyna wygrala mecz)",
                "options": ["فَازَ بِ", "فَوَزَ", "أَفَازَ", "فَيَّزَ"],
                "correct": "فَازَ بِ",
                "explanation": "Poprawnie: 'faaza bi-l-mubaaraati' = wygral mecz. Rdzen: f-w-z (zwyciestwo). Czasownik pusty (ajwaf): waw zamienia sie na alif. UWAGA: faaza wymaga przyimka bi (faaza bi = wygral cos). Bez przyimka: faaza = zwyciazyl (bez dopelnienia). Al-mubaraara = mecz/spotkanie (od baaraa -- forma III: rywalizowal). Masdar: fawz = zwyciestwo."
            },
            {
                "id": "pa_sh4",
                "question": "هو _____ كلَّ يومٍ (On biega codziennie)",
                "translation": "(On biega codziennie)",
                "options": ["يَجْرِي", "يَجْرُو", "يُجَرِّي", "يَجْرَى"],
                "correct": "يَجْرِي",
                "explanation": "Poprawnie: 'yajrii' = biega/biegnie. Rdzen: j-r-y (bieg/plyw). Czasownik naaqis (ulomny) z yaa na koncu: terazniejszy na -ii. Przeszly: jaraa. Kulla yawmin = codziennie (doslownie: kazdego dnia) -- kulla w bierniku jako okolicznik czasu (zarf zamaanin). Powiazane: majraa = bieg/koryto (rzeki), jariida = gazeta."
            },
            {
                "id": "pa_sh5",
                "question": "أحبُّ _____ في الجبال (Lubie wspinaczke w gorach)",
                "translation": "(Lubie wspinaczke w gorach)",
                "options": ["تَسَلُّقَ", "تَسَلَّقَ", "سَلَقَ", "مُتَسَلِّق"],
                "correct": "تَسَلُّقَ",
                "explanation": "Poprawnie: 'tasalluqa' = wspinaczke (biernik). Masdar formy V od rdzenia s-l-q (wspinanie). Po uhibbu (lubie) uzywamy masdaru (rzeczownika odslownego) lub an + czas. terazn. Tutaj masdar w bierniku: tasalluqa (bo dopelnienie uhibbu). Fii al-jibaal = w gorach. Jibaal to l.mn. lamana od jabal (gora). Wzorzec l.mn.: fiaal."
            },
            {
                "id": "pa_sh6",
                "question": "هل _____ الشطرنجَ؟ (Czy umiesz grac w szachy?)",
                "translation": "(Czy umiesz grac w szachy?)",
                "options": ["تُجِيدُ", "تَجُودُ", "تَجِيدُ", "تُجَوِّدُ"],
                "correct": "تُجِيدُ",
                "explanation": "Poprawnie: 'tujiidu' = umiesz/biegle wladasz. Forma IV od rdzenia j-w-d (dobroc/jakosc). Forma IV ajwaf/pustego: ajaada/yujiidu = robic cos biegle. Konstrukcja: ajaada + dopelnienie bezposrednie. Ash-shatranj = szachy -- slowo pochodzenia persko-indyjskiego (z sanskrytu chaturanga). Arabski przejal wiele slow z perskiego w okresie Abbasydow."
            },
            {
                "id": "pa_sh7",
                "question": "المدربُ _____ اللاعبينَ (Trener trenowal zawodnikow)",
                "translation": "(Trener trenowal zawodnikow)",
                "options": ["دَرَّبَ", "دَرَبَ", "أَدْرَبَ", "تَدَرَّبَ"],
                "correct": "دَرَّبَ",
                "explanation": "Poprawnie: 'darraba' = trenowal (kogos). Forma II od rdzenia d-r-b (cwiczenie). Forma II (faala) czesto = uczyc/powodowac: darraba = trenowal kogos. Forma V (tadarraba) = trenowal sie (zwrotna). Al-mudarrib = trener (imieslow czynny II). Al-laaibiin = zawodnikow (l.mn. w bierniku od laaib = gracz/zawodnik, imieslow czynny od laiba)."
            },
            {
                "id": "pa_sh8",
                "question": "سَجَّلَ اللاعبُ _____ (Zawodnik strzelil gola)",
                "translation": "(Zawodnik strzelil gola)",
                "options": ["هَدَفًا", "هَدَفٌ", "هَدَفٍ", "الهَدَفَ"],
                "correct": "هَدَفًا",
                "explanation": "Poprawnie: 'hadafan' = gola -- w bierniku nieokreslonym (z tanwinem fatha: -an). Sajjala = zarejestrowal/strzelil (forma II). Dlaczego biernik? Bo hadaf jest dopelnieniem blizszym (mafulun bihi) czasownika sajjala. Nieokreslony biernik: -an (tanwin fatha + alif). Gdyby okreslony: sajjala al-hadafa (z al-, bez tanwinu). To typowe slownictwo sportowe MSA."
            },
            {
                "id": "pa_sh9",
                "question": "أمارسُ _____ ثلاثَ مراتٍ في الأسبوع (Uprawiam sport trzy razy w tygodniu)",
                "translation": "(Uprawiam sport trzy razy w tygodniu)",
                "options": ["الرِّيَاضَةَ", "رِيَاضَةً", "الرِّيَاضَةُ", "رِيَاضَةٌ"],
                "correct": "الرِّيَاضَةَ",
                "explanation": "Poprawnie: 'ar-riyaaadata' = sport (biernik okreslony). Po umaarisu (uprawiam -- forma III od m-r-s) dopelnienie w bierniku: ar-riyaaadata (z fatha, bez tanwinu bo ma al-). Thalaatha marraatin = trzy razy -- liczebnik + l.mn. w dopelniaczu. Fii al-usbuui = w tygodniu. Cala konstrukcja: okolicznik czasu + czestotliwosc. Riyaada pochodzi od rdzenia r-w-d (tresowanie)."
            },
            {
                "id": "pa_sh10",
                "question": "الملعبُ _____ (Stadion jest pelny)",
                "translation": "(Stadion jest pelny)",
                "options": ["مُمْتَلِئٌ", "مَلِيءٌ", "مَمْلُوءٌ", "إِمْتَلَأَ"],
                "correct": "مُمْتَلِئٌ",
                "explanation": "Poprawnie: 'mumtaliiun' = pelny. Imieslow czynny formy VIII od rdzenia m-l-hamza (pelnosc). Al-malaab (malaab) = stadion/boisko -- wzorzec mafal (miejsce czynnosci, od laiba = grac). Inne mafal: maktab (biuro, od kataba), madrasa (szkola, od darasa). Zarowno mumtali jak malii sa poprawne -- pierwsze bardziej formalne."
            },
            {
                "id": "pa_sh11",
                "question": "في وقتِ الفراغِ أَقْرَأُ _____ (W wolnym czasie czytam ksiazki)",
                "translation": "(W wolnym czasie czytam ksiazki)",
                "options": ["الكُتُبَ", "كُتُبًا", "الكِتَابَ", "كِتَابٌ"],
                "correct": "الكُتُبَ",
                "explanation": "Poprawnie: 'al-kutuba' = ksiazki (biernik okreslony, l.mn.). L.mn. lamana od kitaab: kutub (wzorzec fuul). W bierniku okreslonym: fatha bez tanwinu. Waqtu al-faraaghi = czas wolny (idafa: czas + pustka/wolnosc). Aqrau = czytam (od qaraa, mahmuz). Hobby w arabskim mozna wyrazic: hiwaaya (hobby), waqtu al-faraaghi (czas wolny)."
            },
            {
                "id": "pa_sh12",
                "question": "هو _____ على الحصان (On jedzie konno)",
                "translation": "(On jedzie na koniu)",
                "options": ["يَرْكَبُ", "يُرَكِّبُ", "يَرْكُبُ", "رَاكِبٌ"],
                "correct": "يَرْكَبُ",
                "explanation": "Poprawnie: 'yarkabu' = jedzie/dosiada. Rdzen: r-k-b (jechanie/dosiadanie). Konstrukcja: rakiba alaa = jechal na (z przyimkiem alaa). Al-hisaan = kon (ogier). Porownaj: yurakkibu (forma II) = montuje/instaluje (zupelnie inne znaczenie!). Powiazane: raakib = jezdziec/pasazer, markaba = pojazd, rukuub = jazda (masdar)."
            },
            {
                "id": "pa_sh13",
                "question": "النتيجةُ كانت ثلاثةً _____ واحدٍ (Wynik byl trzy do jednego)",
                "translation": "(Wynik byl 3:1)",
                "options": ["مُقَابِلَ", "إِلَى", "عَلَى", "مِنْ"],
                "correct": "مُقَابِلَ",
                "explanation": "Poprawnie: 'muqaabila' = naprzeciwko/do (w kontekscie wyniku). W arabskim wynik sportowy: thalaatha muqaabila waahidin (3 naprzeciwko 1). Muqaabila to imieslow czynny formy III od q-b-l (stanie naprzeciw). Alternatywa: thalaatha -- waahid (z myslnikiem). An-natiija = wynik/rezultat. Kaanat = byla (r. zenski bo natiija jest zenska)."
            },
            {
                "id": "pa_sh14",
                "question": "أحبُّ _____ الموسيقى (Lubie sluchac muzyki)",
                "translation": "(Lubie sluchac muzyki)",
                "options": ["الاسْتِمَاعَ إِلَى", "سَمَاعَ", "يَسْمَعُ", "سَامِعَ"],
                "correct": "الاسْتِمَاعَ إِلَى",
                "explanation": "Poprawnie: 'al-istimaaaa ilaa' = sluchanie (czegosc). Masdar formy VIII od s-m-ain (slyszenie). Po uhibbu: masdar w bierniku. Roznica: samia (forma I) = uslyszal (mimowolnie), istamaaa ilaa (forma VIII) = sluchal (swiadomie). Jak po polsku: 'slyszec' (bierne) vs. 'sluchac' (aktywne). Al-muusiiqaa = muzyka (z greckiego mousike)."
            },
            {
                "id": "pa_sh15",
                "question": "Ktore slowo oznacza 'zapalony kibic/fan'?",
                "translation": "(ما الكلمة التي تعني مشجع متحمس؟)",
                "options": ["مُشَجِّع مُتَحَمِّس", "لَاعِب كَبِير", "مُدَرِّب قَوِيّ", "حَكَم عَادِل"],
                "correct": "مُشَجِّع مُتَحَمِّس",
                "explanation": "Poprawnie: 'mushajjia mutahammis' = zapalony kibic. Mushajjia = kibic/fan (imieslow czynny II od sh-j-ain = dodawac odwagi). Mutahammis = entuzjastyczny (imieslow czynny V od h-m-s = entuzjazm). Inne: laaib = gracz/zawodnik, mudarrib = trener, hakam = sedzia (sportowy). aadil = sprawiedliwy (od ain-d-l). Slownictwo sportowe jest wazne w MSA."
            }
        ]
    },
    {
        "key": "feelings_emotions_ar",
        "name": "Uczucia i emocje (المشاعر والعواطف)",
        "description": "التعبير عن المشاعر والعواطف بالعربية",
        "iconName": "heart.fill",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_fe1",
                "question": "أنا _____ جداً (Jestem bardzo szczesliwy)",
                "translation": "(Jestem bardzo szczesliwy)",
                "options": ["سَعِيدٌ", "سَاعِدٌ", "مَسْعُودٌ", "سُعُودٌ"],
                "correct": "سَعِيدٌ",
                "explanation": "Poprawnie: 'saiidun' = szczesliwy. Rdzen: s-ain-d (szczescie). Wzorzec fasiil -- przymiotnik. Zdanie nominalne (bez czasownika byc w terazniejszym): anaa saiidun = Ja (jestem) szczesliwy. Jiddan = bardzo (przyslowek w bierniku). Powiazane: saadaa = szczescie (masdar), masuud = obdarzony szczesciem (imieslow bierny). W wielu krajach arabskich Saiid to popularne imie meskie."
            },
            {
                "id": "pa_fe2",
                "question": "هي _____ من الامتحان (Ona boi sie egzaminu)",
                "translation": "(Ona boi sie egzaminu)",
                "options": ["خَائِفَةٌ مِنَ", "خَافَةٌ مِنَ", "مَخُوفَةٌ مِنَ", "خَوْفَةٌ مِنَ"],
                "correct": "خَائِفَةٌ مِنَ",
                "explanation": "Poprawnie: 'khaaiifatun mina' = bojaca sie (czegosc). Imieslow czynny od khaafa (ajwaf: kh-w-f). R. zenski: khaaiifa + taa marbuuta. Konstrukcja: khaaif min = bojacy sie czegosc (przyimek min obowiazkowy). Porownaj: makhuuf = straszny/budzacy strach (imieslow bierny). Al-imtihaan = egzamin (masdar formy VIII od m-h-n = testowanie)."
            },
            {
                "id": "pa_fe3",
                "question": "_____ كثيراً بِسَبَبِ الخَبَرِ (Smucil sie bardzo z powodu wiadomosci)",
                "translation": "(Smucil sie bardzo z powodu tej wiadomosci)",
                "options": ["حَزِنَ", "حَزَنَ", "أَحْزَنَ", "حَزَّنَ"],
                "correct": "حَزِنَ",
                "explanation": "Poprawnie: 'hazina' = smucil sie. Rdzen: h-z-n (smutek). Forma I typ faila (z kasra). Porownaj: ahzana (forma IV) = zasmucil (kogos -- przechodni), hazzana (forma II) = zasmucal (intensywnie). Bi-sababi = z powodu (przyimek zlozony). Kathiiran = bardzo/duzo (przyslowek w bierniku). Przymiotnik: haziin = smutny. Masdar: huzn (smutek)."
            },
            {
                "id": "pa_fe4",
                "question": "أَشْعُرُ بِـ_____ (Czuje zlosc)",
                "translation": "(Czuje zlosc)",
                "options": ["الغَضَبِ", "الغَضَبَ", "الغَضَبُ", "غَاضِبٌ"],
                "correct": "الغَضَبِ",
                "explanation": "Poprawnie: 'al-ghadabi' = zlosci (dopelniacz). Ashuru bi = czuje + bi (przyimek) + dopelniacz. Rdzen: gh-d-b (gniew). Po przyimku bi ZAWSZE dopelniacz (majruur): al-ghadabi (z kasra). Gdyby bez bi: ashuru al-ghadaba (biernik -- ale to niepoprawna konstrukcja, ashuru wymaga bi). Przymiotnik: ghaadib = zly/rozzloszczony. Masdar: ghadab."
            },
            {
                "id": "pa_fe5",
                "question": "هو _____ من النتيجة (On jest zadowolony z wyniku)",
                "translation": "(On jest zadowolony z wyniku)",
                "options": ["رَاضٍ عَنْ", "رَاضِي عَنْ", "رَضِيٌّ عَنْ", "مَرْضِيٌّ عَنْ"],
                "correct": "رَاضٍ عَنْ",
                "explanation": "Poprawnie: 'raadin an' = zadowolony z. Imieslow czynny od radiya (naaqis: r-d-y). Forma nieokreslona: raadin (z tanwinem, bez yaa -- regula naaqis w imiesl. czynnym). Z al-: ar-raadii. Przyimek an obowiazkowy: raadin an = zadowolony z czegosc. Porownaj: mardiyy anhu = ten, z ktorego sa zadowoleni (imieslow bierny). Ridaa = zadowolenie."
            },
            {
                "id": "pa_fe6",
                "question": "الطفلُ _____ (Dziecko plakalo)",
                "translation": "(Dziecko plakalo)",
                "options": ["بَكَى", "بَكَيَ", "بَكَأَ", "أَبْكَى"],
                "correct": "بَكَى",
                "explanation": "Poprawnie: 'bakaa' = plakal. Rdzen: b-k-y (placz). Czasownik naaqis: yaa zamienia sie na alif maqsuura. Terazniejszy: yabkii. Porownaj: abkaa (forma IV) = rozplakal (kogos -- przechodni). Bukaa = placz (masdar -- z hamza na koncu!). Odmiana: bakaa (on), bakat (ona), bakaytu (ja), bakaw (oni). At-tifl = dziecko (r. meski w arabskim)."
            },
            {
                "id": "pa_fe7",
                "question": "هي _____ بِهَدِيَّتِهِ (Ona ucieszyła sie z jego prezentu)",
                "translation": "(Ona ucieszyla sie z jego prezentu)",
                "options": ["فَرِحَتْ", "فَرَحَتْ", "أَفْرَحَتْ", "فَرَّحَتْ"],
                "correct": "فَرِحَتْ",
                "explanation": "Poprawnie: 'farihat' = ucieszyla sie. Rdzen: f-r-h (radosc). Forma I typ faila (z kasra na drugiej spglosce). Konstrukcja: fariha bi = cieszyl sie z czegosc (z przyimkiem bi). Hadiyya = prezent, + hi = jego: hadiyyatihi (w dopelniaczu po bi). Porownaj: afraha (forma IV) = uszczesliwil, farraha (forma II) = rozradowal (intensywniej). Masdar: farah = radosc."
            },
            {
                "id": "pa_fe8",
                "question": "أنا _____ بالسفر (Jestem podekscytowany podroza)",
                "translation": "(Jestem podekscytowany podroza)",
                "options": ["مُتَحَمِّسٌ لِلسَّفَرِ", "مُتَحَمِّسٌ بِالسَّفَرِ", "حَمَاسٌ", "حَامِسٌ"],
                "correct": "مُتَحَمِّسٌ لِلسَّفَرِ",
                "explanation": "Poprawnie: 'mutahammisun lis-safari' = podekscytowany podroza. Mutahammis = podekscytowany/entuzjastyczny -- imieslow czynny formy V od h-m-s. Przyimek li (dla/na) + as-safar (podroz). UWAGA: mutahammis li (NIE bi) -- to jest poprawna rekcja tego przymiotnika. Porownaj: hamaas = entuzjazm/zapal (rzeczownik). Hamaasa = zarliwosc."
            },
            {
                "id": "pa_fe9",
                "question": "شَعَرَ بِـ_____ عِنْدَمَا سَمِعَ الخَبَرَ (Poczul zaskoczenie gdy uslyszal wiadomosc)",
                "translation": "(Poczul zaskoczenie gdy uslyszal wiadomosc)",
                "options": ["الدَّهْشَةِ", "الدَّهْشَةَ", "الدَّهْشَةُ", "دَاهِشٌ"],
                "correct": "الدَّهْشَةِ",
                "explanation": "Poprawnie: 'ad-dahshati' = zaskoczenia (dopelniacz po bi). Rdzen: d-h-sh (zdumienie). Shaara bi = poczul (z przyimkiem bi -- dopelniacz). Indamaa = kiedy/gdy (spojnik czasowy). Powiazane: madhuush = zaskoczony/zdumiony (imieslow bierny). Mudhish = zdumiewajacy (imieslow czynny IV). Dahsha = zaskoczenie/szok. W MSA dahsha jest bardzo czeste."
            },
            {
                "id": "pa_fe10",
                "question": "هو _____ زميلَه (On nienawidzi kolege)",
                "translation": "(On nienawidzi kolege)",
                "options": ["يَكْرَهُ", "يُكْرِهُ", "يَكَرَّهُ", "كَارِهٌ"],
                "correct": "يَكْرَهُ",
                "explanation": "Poprawnie: 'yakrahu' = nienawidzi. Rdzen: k-r-h (niechec). Forma I z fatha: yafalu (bo spgloska gardlowa haa w rdzeniu wymusza fatha). Porownaj: yukrihu (forma IV) = zmuszal (inne znaczenie!). Ikraah = przymus (masdar IV). Karaahiya = niechec/nienawisc (masdar I). Zamiil = kolega (wzorzec faiil). Silniejsze: yamqutu (gardzi), lagodniejsze: yakrahu."
            },
            {
                "id": "pa_fe11",
                "question": "هي _____ عَلَيْهِ (Ona teskni za nim)",
                "translation": "(Ona teskni za nim)",
                "options": ["تَشْتَاقُ إِلَيْهِ", "تَشْتَاقُ عَلَيْهِ", "تَشُوقُ إِلَيْهِ", "شَائِقَةٌ"],
                "correct": "تَشْتَاقُ إِلَيْهِ",
                "explanation": "Poprawnie: 'tashtaaqu ilayhi' = teskni za nim. Forma VIII od rdzenia sh-w-q (tesknota). Konstrukcja: ishtaaqa ilaa (NIE alaa!) = tesknic za. To czasownik pusty w formie VIII: waw zamienia sie na alif. Masdar: ishtiyaaq = tesknota. Prostsze: shawq = tesknota/pragnienie. To wazne rozroznienie przyimkow -- arabski wymaga ilaa, nie alaa."
            },
            {
                "id": "pa_fe12",
                "question": "أنا _____ بِالمَوْقِف (Jestem zaskoczony sytuacja)",
                "translation": "(Jestem zaskoczony sytuacja)",
                "options": ["مُنْدَهِشٌ", "دَاهِشٌ", "مَدْهُوشٌ", "دَهِشٌ"],
                "correct": "مُنْدَهِشٌ",
                "explanation": "Uwaga: zarowno 'mundahish' jak i 'madhuush' sa poprawne! Mundahish = imieslow czynny formy VII (indahasha = byc zaskoczonym -- forma medialna). Madhuush = imieslow bierny formy I. Oba znacza 'zaskoczony'. Al-mawqif = sytuacja/stanowisko (wzorzec mafil od w-q-f = stac). W MSA mundahish jest czestsze niz madhuush."
            },
            {
                "id": "pa_fe13",
                "question": "الأمُّ _____ ابنَها (Matka kocha syna)",
                "translation": "(Matka kocha syna)",
                "options": ["تُحِبُّ", "تَحُبُّ", "تُحَبِّبُ", "حَابَّةٌ"],
                "correct": "تُحِبُّ",
                "explanation": "Poprawnie: 'tuhibbu' = kocha. Forma IV od rdzenia h-b-b (milosc). Czas terazniejszy, 3. os. z. l. poj. Dlaczego tuhibbu (z damma na prefiksie)? Bo to forma IV: yufilu/tufilu. Al-umm = matka (mudaaaf: m-m). Ibnahaa = jej syna (biernik + zaimek dzierzawczy). Masdar: hubb = milosc. Mahabba = milosc/sympatia. Al-hubb = najpopularniejsze arabskie slowo."
            },
            {
                "id": "pa_fe14",
                "question": "هو _____ النتيجةَ (On jest rozczarowany wynikiem)",
                "translation": "(On jest rozczarowany wynikiem)",
                "options": ["مُحْبَطٌ مِنَ", "حَابِطٌ مِنَ", "مُحَبَّطٌ مِنَ", "حَبَطَ مِنَ"],
                "correct": "مُحْبَطٌ مِنَ",
                "explanation": "Poprawnie: 'muhbatun mina' = rozczarowany (czyms). Imieslow bierny formy IV od h-b-t (frustracja). Forma IV: ahbata = sfrustrwal/zniecheczil -- muhbat = sfrustrowany/rozczarowany. Przyimek mina wskazuje zrodlo rozczarowania. Masdar: ihbaat = frustracja/rozczarowanie. To nowoczesne uzycie -- w klasycznym arabskim ahbata = unicestwil/udaremnil."
            },
            {
                "id": "pa_fe15",
                "question": "Ktory wyraz oznacza 'nostalgie/tesknote za ojczyzna'?",
                "translation": "(ما الكلمة التي تعني الحنين للوطن؟)",
                "options": ["الحَنِينُ إِلَى الوَطَنِ", "الشَّوْقُ لِلبَيْتِ", "الغُرْبَةُ", "البُعْدُ عَنِ البَلَدِ"],
                "correct": "الحَنِينُ إِلَى الوَطَنِ",
                "explanation": "Poprawnie: 'al-haniinu ilaa al-watani' = nostalgia/tesknota za ojczyzna. Haniin = tesknota (gleboka, emocjonalna). Rdzen h-n-n (tkliwosc/wspolczucie). Porownaj: shawq = tesknota (ogolna), ghurba = emigracja/obcosc, watan = ojczyzna. Haniin jest mocniejsze emocjonalnie niz shawq -- implikuje bol rozlaki. To slowo ma ogromne znaczenie w literaturze arabskiej."
            }
        ]
    },
    {
        "key": "weather_climate_ar",
        "name": "Pogoda i klimat (الطقس والمناخ)",
        "description": "مفردات وتعبيرات الطقس والمناخ",
        "iconName": "cloud.sun.fill",
        "color": "#22d3ee",
        "level": "beginner",
        "items": [
            {
                "id": "pa_wc1",
                "question": "الطقسُ _____ اليومَ (Pogoda jest dzisiaj ladna)",
                "translation": "(Pogoda jest dzisiaj ladna)",
                "options": ["جَمِيلٌ", "جَمِيلَةٌ", "جَمَالٌ", "أَجْمَلُ"],
                "correct": "جَمِيلٌ",
                "explanation": "Poprawnie: 'jamiilun' = ladny (r. meski). Dlaczego meski? Bo at-taqs = pogoda jest rodzaju MESKIEGO w arabskim! W polskim 'pogoda' jest zenska, wiec latwo o pomylke. Al-yawma = dzisiaj (biernik jako okolicznik czasu). Powiazane: taqs = pogoda/rytual, munaakh = klimat (dlugoterminowy). Jamiil = ladny/piekny (wzorzec faiil)."
            },
            {
                "id": "pa_wc2",
                "question": "_____ تُمْطِرُ السماءُ (Niebo pada deszczem)",
                "translation": "(Pada deszcz)",
                "options": ["تُمْطِرُ", "يُمْطِرُ", "تَمْطُرُ", "مُمْطِرَة"],
                "correct": "تُمْطِرُ",
                "explanation": "Poprawnie: 'tumtiru' = pada deszcz (doslownie: niebo daje deszcz). Forma IV od m-t-r (deszcz): amtara = spal deszcz. Dlaczego tu (nie yu)? Bo as-samaa (niebo) jest rodzaju ZENSKIEGO. Alternatywa: tamturu (forma I) = pada (tez poprawna, mniej formalna). Matar = deszcz. Mamtuur = zmoczony deszczem. Amtaar = deszcze (l.mn. lamana)."
            },
            {
                "id": "pa_wc3",
                "question": "درجةُ الحرارةِ _____ اليومَ (Temperatura jest dzis wysoka)",
                "translation": "(Temperatura jest dzis wysoka)",
                "options": ["مُرْتَفِعَةٌ", "مُرْتَفِعٌ", "اِرْتَفَعَتْ", "عَالِيَةٌ"],
                "correct": "مُرْتَفِعَةٌ",
                "explanation": "Poprawnie: 'murtafiiatun' = wysoka (r. zenski). Imieslow czynny formy VIII od r-f-ain (podnoszenie). Darajatu al-haraara = stopien ciepla = temperatura (idafa). Daraja jest zenska, wiec przymiotnik w r. zenskim: murtafiia. Rowniez aaliya = wysoka -- jest poprawna i prostsza. Porownaj: munkhafida = niska (od kh-f-d). Antonim wazny w prognozach pogody."
            },
            {
                "id": "pa_wc4",
                "question": "في الشتاءِ _____ الثلجُ (Zima pada snieg)",
                "translation": "(Zima pada snieg)",
                "options": ["يَتَسَاقَطُ", "يَسْقُطُ", "تَتَسَاقَطُ", "سَاقِطٌ"],
                "correct": "يَتَسَاقَطُ",
                "explanation": "Poprawnie: 'yatasaaqatu' = pada (stopniowo/wielokrotnie). Forma VI od s-q-t (spadanie). Forma VI oznacza powtarzanie sie czynnosci: yatasaaqatu = opada(ja) (po trochu, krotka po krotce). Dlaczego ya (r. meski)? Bo ath-thalj = snieg jest meski. Fii ash-shitaa = zima. Pory roku: ar-rabii (wiosna), as-sayf (lato), al-khariif (jesien), ash-shitaa (zima)."
            },
            {
                "id": "pa_wc5",
                "question": "الرياحُ _____ اليومَ (Wiatry sa dzis silne)",
                "translation": "(Wiatry sa dzis silne)",
                "options": ["شَدِيدَةٌ", "شَدِيدٌ", "شَدِيدَاتٌ", "أَشِدَّاءٌ"],
                "correct": "شَدِيدَةٌ",
                "explanation": "Poprawnie: 'shadiidatun' = silne (r. zenski l. poj.!). UWAGA: ar-riyaah = wiatry -- to l.mn. lamana od riih (wiatr). W arabskim l.mn. rzeczy nierozumnych traktujemy jak r. zenski l. poj.! Wiec: ar-riyaahu shadiida (nie shadiidaat ani ashiddaa). To FUNDAMENTALNA regula: l.mn. nierozumna = przymiotnik w r. zenskim l. poj. Dotyczy wszystkiego poza ludzmi."
            },
            {
                "id": "pa_wc6",
                "question": "السماءُ _____ بالغيوم (Niebo jest zachmurzone)",
                "translation": "(Niebo jest zachmurzone)",
                "options": ["مُلَبَّدَةٌ", "مُلَبَّدٌ", "لَابِدَةٌ", "غَيْمِيَّةٌ"],
                "correct": "مُلَبَّدَةٌ",
                "explanation": "Poprawnie: 'mulabbadatun bil-ghuyuum' = zachmurzone (dosl. pokryte chmurami). Mulabbada = imieslow bierny formy II od l-b-d (pokrywanie). R. zenski bo as-samaa jest zenska. Ghuyuum = chmury (l.mn. lamana od ghaym). Prostsza alternatywa: as-samaa ghaaimaa = zachmurzona (od ghaym bezposrednio). W prognozie pogody MSA uzywa mulabbada bil-ghuyuum."
            },
            {
                "id": "pa_wc7",
                "question": "هل _____ الشمسُ غداً؟ (Czy jutro bedzie swiecic slonce?)",
                "translation": "(Czy jutro bedzie swiecic slonce?)",
                "options": ["سَتُشْرِقُ", "سَيُشْرِقُ", "سَتَشْرُقُ", "شَارِقَةٌ"],
                "correct": "سَتُشْرِقُ",
                "explanation": "Poprawnie: 'satushriqu' = bedzie swiecic. Forma IV od sh-r-q (wschod): ashraqat ash-shamsu = slonce wzeszlo. Sa + terazniejszy = przyszlosc. Prefiks tu (r. zenski bo ash-shams = slonce jest zenska). Ghadan = jutro (biernik jako okolicznik czasu). Powiazane: sharq = wschod, mushriq = jasny/promienny, shuruuq = wschod slonca."
            },
            {
                "id": "pa_wc8",
                "question": "في الصيفِ تكونُ الحرارةُ _____ (Latem temperatura jest wyzej niz 40 stopni)",
                "translation": "(Latem temperatura przekracza 40 stopni)",
                "options": ["فَوْقَ أَرْبَعِينَ دَرَجَةً", "أَكْثَرُ مِنْ أَرْبَعِينَ", "أَرْبَعُونَ دَرَجَة", "عَالِيَةً جِدًّا"],
                "correct": "فَوْقَ أَرْبَعِينَ دَرَجَةً",
                "explanation": "Poprawnie: 'fawqa arbasiina darajatan' = powyzej 40 stopni. Fawqa = powyzej/nad (zarf makaanin w bierniku). Arbasiina = 40 (biernik/dopelniacz -- wielodziesiatki odmiana jak l.mn. meska). Darajatan = stopni (biernik jako tamyiiz = specyfikacja). W arabskim po liczebnikach 11-99: rzeczownik w l. poj. bierniku (tamyiiz). To unikalna regula arabskiego!"
            },
            {
                "id": "pa_wc9",
                "question": "البرقُ و_____ (Blyskawica i grzmot)",
                "translation": "(Blyskawica i grzmot)",
                "options": ["الرَّعْدُ", "الرَّعَدُ", "الرَّاعِدُ", "المُرْعِدُ"],
                "correct": "الرَّعْدُ",
                "explanation": "Poprawnie: 'ar-rad' = grzmot. Rdzen: r-ain-d (grzmiecie). Al-barq = blyskawica (rdzen: b-r-q = blyszczenie). UWAGA: ar-rad to tez nazwa 13. sury Koranu (suuratu ar-rad). Powiazane: raada = zagrzmialo, baraqa = zabysnelo. Zjawiska pogodowe: aasifa = burza, iacsaar = huragan, fayaadaan = powodz."
            },
            {
                "id": "pa_wc10",
                "question": "الجوُّ _____ في هذا البلد (Klimat jest suchy w tym kraju)",
                "translation": "(Klimat jest suchy w tym kraju)",
                "options": ["جَافٌّ", "جَافِفٌ", "جُفُوفٌ", "مُجَفَّفٌ"],
                "correct": "جَافٌّ",
                "explanation": "Poprawnie: 'jaaffun' = suchy. Imieslow czynny od jaffa (wysychal -- mudaaaf: j-f-f). Al-jaww = atmosfera/klimat (tez mudaaaf: j-w-w). Wzorzec: faail od mudaaaf: jaaff (z szadda). Porownaj: mujaffaf = wysuszony/suszony (imieslow bierny II). Jafaaf = susza/suchosc. Ratb = wilgotny -- antonim. Haadzaa al-balad = ten kraj."
            },
            {
                "id": "pa_wc11",
                "question": "أمطرتْ _____ غزيرة (Spadly obfite deszcze)",
                "translation": "(Spadly obfite deszcze)",
                "options": ["أَمْطَارٌ", "مَطَرٌ", "أَمْطَارًا", "مُمْطِرَة"],
                "correct": "أَمْطَارٌ",
                "explanation": "Poprawnie: 'amtaarun' = deszcze (mianownik -- jako naaib al-faail w zdaniu biernym). Amtaar to l.mn. lamana od matar (deszcz). Wzorzec: afaal (jedna z najpopularniejszych l.mn. lamanych). Ghaziira = obfita/ulewna. Amtarat = spadly deszcze (forma IV, 3. os. z. -- bo deszcz 'daje' z nieba). Szyk: orzeczenie + podmiot (typowy arabski)."
            },
            {
                "id": "pa_wc12",
                "question": "يومٌ _____ (dzien mglisty)",
                "translation": "(dzien mglisty)",
                "options": ["ضَبَابِيٌّ", "ضَبَابٌ", "مُضَبَّبٌ", "ضَابِبٌ"],
                "correct": "ضَبَابِيٌّ",
                "explanation": "Poprawnie: 'dabaabiyyun' = mglisty. Od dabaab = mgla + przyrostek nisba (-iyy). To typowy sposob tworzenia przymiotnikow pogodowych w MSA: dabaabiyy (mglisty), ghaymiyy (zachmurzony), haraariyy (cieplny). Rowniez mudabbab (forma II bierna) = zamglony -- poprawne, ale mniej standardowe w prognozach pogody. Dabaab to rdzen d-b-b (mudaaaf)."
            },
            {
                "id": "pa_wc13",
                "question": "الحرارةُ _____ بِعَشْرِ درجاتٍ (Temperatura spadla o 10 stopni)",
                "translation": "(Temperatura spadla o 10 stopni)",
                "options": ["اِنْخَفَضَتْ", "خَفَضَتْ", "تَخَفَّضَتْ", "خَفِيضَةٌ"],
                "correct": "اِنْخَفَضَتْ",
                "explanation": "Poprawnie: 'inkhafidat' = spadla. Forma VII od kh-f-d (obnizanie). Forma VII (infaala) = medialna: cos sie dzieje SAMO. Temperatura spadla = nie ktos ja obnizyl, lecz spadla sama, wiec forma VII. Bi-ashri darajaatin = o 10 stopni -- bi (o ile) + ashr (10) + darajaatin (stopni -- l.mn. bo po 3-10). Porownaj: khaffada (forma II) = obnizyl (ktos celowo)."
            },
            {
                "id": "pa_wc14",
                "question": "توقعاتُ الطقسِ تُشِيرُ إلى _____ (Prognoza pogody wskazuje na poprawe)",
                "translation": "(Prognoza wskazuje na poprawe)",
                "options": ["تَحَسُّنٍ", "تَحَسُّنًا", "تَحَسُّنٌ", "حَسَنٍ"],
                "correct": "تَحَسُّنٍ",
                "explanation": "Poprawnie: 'tahassunin' = poprawy (dopelniacz po ilaa). Masdar formy V od h-s-n (dobroc/piekno). Tawaqquaat = prognozy/przewidywania (l.mn. od tawaqqua, masdar formy V od w-q-ain). Tushiiru ilaa = wskazuje na (forma IV od sh-w-r = wskazywanie). Po ilaa ZAWSZE dopelniacz: tahassunin (z tanwinem kasra). To typowy jezyk medialny MSA."
            },
            {
                "id": "pa_wc15",
                "question": "Ktory wyraz oznacza 'tecze'?",
                "translation": "(ما الكلمة التي تعني قوس قزح؟)",
                "options": ["قَوْسُ قُزَحَ", "قَوْسُ المَطَرِ", "لَوْنُ السَّمَاءِ", "شُعَاعُ الشَّمْسِ"],
                "correct": "قَوْسُ قُزَحَ",
                "explanation": "Poprawnie: 'qawsu quzaha' = tecza (dosl: luk Quzaha). Qaws = luk (broni/geometryczny). Quzah -- nazwa wlasna (dlatego mamnuu min as-sarf = diptote, bez tanwinu). Etymologia: Quzah moze byc imieniem anielskim lub od q-z-h (kolorowanie). Ten wyraz jest idafa (qaws + quzah). Inne znaczenie qaws: nawias () w matematyce!"
            }
        ]
    },
    {
        "key": "shopping_money_ar",
        "name": "Zakupy i pieniadze (التسوق والمال)",
        "description": "مفردات وتعبيرات التسوق والمعاملات المالية",
        "iconName": "cart.fill",
        "color": "#fbbf24",
        "level": "beginner",
        "items": [
            {
                "id": "pa_spm1",
                "question": "كَمْ _____ هذا؟ (Ile to kosztuje?)",
                "translation": "(Ile to kosztuje?)",
                "options": ["سِعْرُ", "ثَمَنُ", "قِيمَةُ", "تَكْلِفَةُ"],
                "correct": "سِعْرُ",
                "explanation": "Poprawnie: 'kam siru haadzaa?' = Ile kosztuje to? (doslownie: ile cena tego?). Sir = cena (rynkowa). Porownaj: thaman = cena/koszt (wartosc przedmiotu), qiima = wartosc, taklifa = koszt. Wszystkie znacza cena/wartosc ale z roznymi odcieniami. W codziennej MSA: kam siruhu? lub bikam haadzaa? Oba sa powszechnie uzywane."
            },
            {
                "id": "pa_spm2",
                "question": "أريدُ أن _____ هذا القميصَ (Chce kupic te koszule)",
                "translation": "(Chce kupic te koszule)",
                "options": ["أَشْتَرِيَ", "أَشْتَرِي", "اِشْتَرَيْتُ", "شَرَيْتُ"],
                "correct": "أَشْتَرِيَ",
                "explanation": "Poprawnie: 'ashtariya' = kupie. Forma VIII od sh-r-y. Po uriidu an: czas terazn. w trybie laczacym (mansuub): yashtarii -- ashtariya (z fatha na yaa). Regula: an powoduje mansuub -- w naaqis: -iya (nie -ii). Al-qamiis = koszula (z lacinskiego camisia -- slowo wedrowne!). L.mn.: qumsaan. To jedna z najczestszych konstrukcji w arabskim."
            },
            {
                "id": "pa_spm3",
                "question": "هل عِنْدَكُم _____؟ (Czy macie znizke?)",
                "translation": "(Czy macie znizke?)",
                "options": ["تَخْفِيض", "خَفْض", "خَافِض", "مُخَفَّض"],
                "correct": "تَخْفِيض",
                "explanation": "Poprawnie: 'takhfiid' = znizka/obnizka. Masdar formy II od kh-f-d (obnizanie). Indakum = macie/u was (wyrazanie posiadania). Powiazane: takhfiidaat = wyprzedaze/obnizki (l.mn.). Sir mukhaffad = obnizona cena (imieslow bierny II). W handlu: hal hunaaka takhfiid? = Czy jest znizka? Bardzo przydatne na bazarze."
            },
            {
                "id": "pa_spm4",
                "question": "_____ بالبطاقة أو نقداً؟ (Placisz karta czy gotowka?)",
                "translation": "(Placisz karta czy gotowka?)",
                "options": ["أَتَدْفَعُ", "تَدْفَعَ", "دَافِعٌ", "مَدْفُوعٌ"],
                "correct": "أَتَدْفَعُ",
                "explanation": "Poprawnie: 'atadifau' = Czy placisz? Rdzen: d-f-ain (placenie/odpychanie). Hamza pytajaca + tadfau (2. os. m. terazn.). Bil-bitaaqa = karta (platnicza). Naqdan = gotowka (biernik jako haal/okolicznik sposobu). Aw = czy/lub. Porownaj: daf = platnosc, madfuuaat = platnosci. Bitaaqa ijtimaaniyya = karta kredytowa."
            },
            {
                "id": "pa_spm5",
                "question": "هذا _____ جداً (To jest bardzo drogie)",
                "translation": "(To jest bardzo drogie)",
                "options": ["غَالٍ", "غَالِي", "غَلِيّ", "مُغَالٍ"],
                "correct": "غَالٍ",
                "explanation": "Poprawnie: 'ghaalin' = drogie. Imieslow czynny od ghalaa (byl drogi -- naaqis: gh-l-w). Forma nieokreslona: ghaalin (z tanwinem, bez yaa -- regula naaqis). Z al-: al-ghaalii. Antonim: rakhiis = tani. UWAGA: ghaalii jest BLEDNE w MSA bez al- -- poprawne to ghaalin. W dialektach: ghaalii jest powszechne. Masdar: ghalaa = drozyzna."
            },
            {
                "id": "pa_spm6",
                "question": "أريدُ _____ أكبرَ (Chce wiekszy rozmiar)",
                "translation": "(Chce wiekszy rozmiar)",
                "options": ["مَقَاسًا", "مَقَاسٌ", "مَقَاسٍ", "القِيَاسَ"],
                "correct": "مَقَاسًا",
                "explanation": "Poprawnie: 'maqaasan' = rozmiar (biernik nieokreslony). Po uriidu: dopelnienie blizsze w bierniku. Maqaas = rozmiar/miara (wzorzec mafaal od q-w-s = mierzenie). Akbara = wiekszy (stopien wyzszy od kabiir). Biernik: maqaasan akbara. W sklepie: maa maqaasuka? = Jaki masz rozmiar? Maqaasii... = Moj rozmiar to..."
            },
            {
                "id": "pa_spm7",
                "question": "الفاتورةُ _____ (Rachunek wynosi 50 dinarow)",
                "translation": "(Rachunek wynosi 50 dinarow)",
                "options": ["خَمْسُونَ دِينَارًا", "خَمْسِينَ دِينَارًا", "خَمْسَةٌ دَنَانِيرَ", "خَمْسُونَ دِينَارٌ"],
                "correct": "خَمْسُونَ دِينَارًا",
                "explanation": "Poprawnie: 'khamsuuna dinaaran' = 50 dinarow. Regula: po liczebnikach 11-99 rzeczownik w l. poj. bierniku (tamyiiz): dinaaran (nie danaaniira!). Khamsuuna w mianowniku (orzecznik). Dla 3-10 byloby: khamsa danaaniira (l.mn. w dopelniaczu). Al-faaturua = rachunek/faktura (z wloskiego fattura). Diinaar = dinar (z lacinskiego denarius)."
            },
            {
                "id": "pa_spm8",
                "question": "هل يمكنني _____ هذا؟ (Czy moge przymierzyc to?)",
                "translation": "(Czy moge przymierzyc to?)",
                "options": ["تَجْرِبَةُ", "أُجَرِّبَ", "جَرَّبَ", "مُجَرَّب"],
                "correct": "أُجَرِّبَ",
                "explanation": "Poprawnie: 'ujarriba' = przymierzyc/wyprobowac. Forma II od j-r-b (probowanie). Hal yumkinunii an + mansuub: ujarriba (z fatha -- tryb laczacy po an). Yumkinunii = jest mi mozliwe (forma IV od m-k-n + nii = mnie). Alternatywa: hal astatiiuu an ujarriba? Masdar: tajriba = doswiadczenie/proba. Mujarrab = wyprobowany/sprawdzony."
            },
            {
                "id": "pa_spm9",
                "question": "هو _____ ثمنَ كلِّ شيءٍ (On zaplacil za wszystko)",
                "translation": "(On zaplacil za wszystko)",
                "options": ["دَفَعَ", "أَدْفَعَ", "دَافَعَ", "تَدَفَّعَ"],
                "correct": "دَفَعَ",
                "explanation": "Poprawnie: 'dafaa' = zaplacil. Rdzen: d-f-ain (placenie). dafaa thamana = zaplacil cene/wartosc. Thamana = cene (biernik). Kulli shayyin = kazdej rzeczy/wszystkiego (idafa z kull). Porownaj: daafaa (forma III) = bronil (kogosc, inne znaczenie!). dif = obrona (w prawie). daf = platnosc (masdar I). Thamiiin = cenny/wartosciowy."
            },
            {
                "id": "pa_spm10",
                "question": "المحلُ _____ الساعةَ التاسعة (Sklep zamyka sie o 9)",
                "translation": "(Sklep zamyka sie o 9)",
                "options": ["يُغْلَقُ", "يَغْلِقُ", "غَالِقٌ", "مَغْلُوقٌ"],
                "correct": "يُغْلَقُ",
                "explanation": "Poprawnie: 'yughlaqu' = zamyka sie (strona bierna!). Dlaczego bierna? Bo sklep nie zamyka sie sam -- ktos go zamyka, ale nie wiemy kto, wiec bierna: yughlaqu. Alternatywa: yanghaliq (forma VII -- medialna: zamyka sie sam). Al-mahall = sklep/lokal (mudaaaf: h-l-l). As-saaata at-taasiata = o (godzinie) dziewiatej (biernik jako okolicznik czasu)."
            },
            {
                "id": "pa_spm11",
                "question": "أريدُ _____ الباقي (Prosze o reszte [pieniedzy])",
                "translation": "(Prosze o reszte)",
                "options": ["البَاقِيَ", "بَاقِيًا", "البَاقِي", "البَقِيَّة"],
                "correct": "البَاقِيَ",
                "explanation": "Poprawnie: 'al-baaqiya' = reszte (biernik okreslony). Al-baaqii = reszta/to co pozostalo -- imieslow czynny od baqiya (pozostal, naaqis). W bierniku okreslonym: yaa zamienia sie fonetycznie: al-baaqiya (z fatha). Powiazane: baqiyya = reszta/pozostalosc, baaqin = forma nieokresl. Reszta w handlu: al-baaqii, al-fakka -- dialektalne."
            },
            {
                "id": "pa_spm12",
                "question": "هل تقبلون _____ الأجنبية؟ (Czy przyjmujecie walute zagraniczna?)",
                "translation": "(Czy przyjmujecie walute zagraniczna?)",
                "options": ["العُمْلَةَ", "العَمَلَ", "العُمْلَةِ", "مُعَامَلَةَ"],
                "correct": "العُمْلَةَ",
                "explanation": "Poprawnie: 'al-umlata' = walute (biernik). Rdzen: ain-m-l (praca/dzialanie). UWAGA: umla = waluta jest INNE niz amal = praca! Roznica w samogloskach = inne znaczenie. Al-ajnabiyya = zagraniczna (nisba od ajnabiyy = zagraniczny). Taqbaluuna = przyjmujecie (2. os. l.mn. r.m. od qabila = przyjac). Muaamala = transakcja (masdar formy III)."
            },
            {
                "id": "pa_spm13",
                "question": "السِّلعةُ _____ (Towar jest wadliwy)",
                "translation": "(Towar jest wadliwy)",
                "options": ["مَعِيبَةٌ", "عَائِبَةٌ", "عَيْبَةٌ", "مُعَيَّبَةٌ"],
                "correct": "مَعِيبَةٌ",
                "explanation": "Poprawnie: 'maiibatun' = wadliwa. Imieslow bierny od aaba (ajwaf: ain-y-b = wada). Wzorzec mafuul od pustych zamienia sie na mafiil (nie mayuub). As-sila = towar/artykul. L.mn.: sila. Powiazane: ayb = wada/defekt, aybun alayk! = wstyd! (wyrazenie). W reklamacji: uriidu istibdaala as-silati al-maiiba = chce wymienic wadliwy towar."
            },
            {
                "id": "pa_spm14",
                "question": "أينَ _____ الصراف الآلي؟ (Gdzie jest bankomat?)",
                "translation": "(Gdzie jest bankomat?)",
                "options": ["يُوجَدُ", "يَجِدُ", "وُجِدَ", "وَاجِدٌ"],
                "correct": "يُوجَدُ",
                "explanation": "Poprawnie: 'yuujadu' = znajduje sie/jest. Forma bierna od wajada (znalazl). Yuujadu w MSA = istnieje/znajduje sie -- bardzo czeste wyrazenie. As-sarraaf al-aalii = bankomat (dosl: wymieniacz automatyczny). Sarraaf od s-r-f (wymiana). Aaliyy = automatyczny (od aala = maszyna). Alternatywa: ayna aqrabu sarraafin aaliyyin? = Gdzie najblizszy bankomat?"
            },
            {
                "id": "pa_spm15",
                "question": "Ktory wyraz oznacza 'paragon/pokwitowanie'?",
                "translation": "(ما الكلمة التي تعني إيصال؟)",
                "options": ["إِيصَال", "وُصُول", "وَصْلَة", "تَوْصِيل"],
                "correct": "إِيصَال",
                "explanation": "Poprawnie: 'iisaal' = paragon/pokwitowanie. Masdar formy IV od w-s-l (laczenie/docieranie). Doslownie: doprowadzenie/dostarczenie, a w handlu: dokument poswiadczajacy dostarczenie/zaplate. Porownaj: wusuul = przybycie (masdar I), wasla = polaczenie/zlacze, tawsiil = dostawa (masdar II). Wiele masdarow z jednego rdzenia -- rozne znaczenia!"
            }
        ]
    },
    {
        "key": "housing_home_ar",
        "name": "Mieszkanie i dom (المسكن والبيت)",
        "description": "مفردات وتعبيرات السكن والحياة المنزلية",
        "iconName": "house.fill",
        "color": "#f472b6",
        "level": "beginner",
        "items": [
            {
                "id": "pa_hh1",
                "question": "أَسْكُنُ في _____ (Mieszkam w mieszkaniu)",
                "translation": "(Mieszkam w mieszkaniu)",
                "options": ["شَقَّةٍ", "شَقَّةً", "شَقَّةٌ", "الشَّقَّة"],
                "correct": "شَقَّةٍ",
                "explanation": "Poprawnie: 'shaqqatin' = mieszkaniu (dopelniacz nieokreslony po fii). Rdzen: sh-q-q (mudaaaf -- rozlupywanie/dzielenie). Shaqqa = mieszkanie/apartament (dosl: czesc -- oddzielona czesc budynku). Po fii ZAWSZE dopelniacz. L.mn.: shuqaq -- l.mn. lamana. Askunu = mieszkam (forma I od s-k-n = zamieszkiwanie/spokoj). Sakan = mieszkanie, saakin = mieszkaniec."
            },
            {
                "id": "pa_hh2",
                "question": "البيتُ _____ غرفتين (Dom ma dwa pokoje)",
                "translation": "(Dom sklada sie z dwoch pokoi)",
                "options": ["يَتَكَوَّنُ مِنْ", "يُكَوِّنُ", "كَائِنٌ مِنْ", "مُكَوَّنٌ"],
                "correct": "يَتَكَوَّنُ مِنْ",
                "explanation": "Poprawnie: 'yatakawwanu min' = sklada sie z. Forma V od k-w-n (istnienie). Forma V (tafaala) = zwrotna II, wiec formuje sie = sklada sie. Ghurfatayni = dwoch pokoi (l. podwojna w dopelniaczu/bierniku: ghurfa staje sie ghurfatayni). Alternatywa: yahtawii alaa = zawiera. Al-bayt = dom (rdzen: b-y-t)."
            },
            {
                "id": "pa_hh3",
                "question": "المطبخُ _____ (Kuchnia jest przestronna)",
                "translation": "(Kuchnia jest przestronna)",
                "options": ["وَاسِعٌ", "وَاسِعَةٌ", "وَسِيعٌ", "مُتَّسِعٌ"],
                "correct": "وَاسِعٌ",
                "explanation": "Poprawnie: 'waasiiun' = przestronny (r. meski). Al-matbakh = kuchnia -- r. MESKI w arabskim (mimo ze po polsku kuchnia jest zenska)! Wzorzec mafal (miejsce czynnosci od t-b-kh = gotowanie). Inne: maktab (biuro), madkhal (wejscie), makhraj (wyjscie). Waasii = imieslow czynny od wasiia (byl szeroki). Antonim: dayyiq = ciasny."
            },
            {
                "id": "pa_hh4",
                "question": "أريدُ _____ شقة (Chce wynajac mieszkanie)",
                "translation": "(Chce wynajac mieszkanie)",
                "options": ["اسْتِئْجَارَ", "إِيجَارَ", "تَأْجِيرَ", "أَجَرَ"],
                "correct": "اسْتِئْجَارَ",
                "explanation": "Poprawnie: 'istiijaar' = wynajecie (przez najemce). Masdar formy X od hamza-j-r (najem). WAZNA roznica: istaajara (forma X) = wynajal (jako najemca -- szukal najmu), ajjara (forma II) = wynajal (jako wlasciciel -- oddal w najem). Iijaar (masdar IV) = czynsz/najem. Forma X czesto = szukac/prosic o cos: istaajara = szukal najmu."
            },
            {
                "id": "pa_hh5",
                "question": "الجيرانُ _____ (Sasiedzi sa mili)",
                "translation": "(Sasiedzi sa mili)",
                "options": ["لُطَفَاءُ", "لَطِيفُونَ", "لَطِيفٌ", "أَلْطَافٌ"],
                "correct": "لُطَفَاءُ",
                "explanation": "Poprawnie: 'lutafaau' = mili (l.mn. lamana od latiif). Al-jiiraan = sasiedzi (l.mn. lamana od jaar). Dlaczego lutafaau a nie latiifuun? Oba sa poprawne! Lutafaau = l.mn. lamana (fuaalaa -- typowa dla faiil). Latiifuun = l.mn. regularna. Oba uzywane, ale lamana czesta w MSA. Wzorzec fuaalaa: kuramaa (hojni), ulamaa (uczeni), asdiqqaa (przyjaciele)."
            },
            {
                "id": "pa_hh6",
                "question": "_____ في الطابق الثالث (Mieszkam na trzecim pietrze)",
                "translation": "(Mieszkam na trzecim pietrze)",
                "options": ["أَسْكُنُ", "سَاكِنٌ", "سُكْنَى", "أُسَكِّنُ"],
                "correct": "أَسْكُنُ",
                "explanation": "Poprawnie: 'askunu' = mieszkam. At-taabiq = piatro/kondygnacja (imieslow czynny od t-b-q = nakladanie -- doslownie: warstwa). Ath-thaalith = trzeci (liczebnik porzadkowy od thalaatha). W arabskim pietra licza sie jak w polskim: at-taabiq al-awwal = pierwsze piatro (nie parter!). At-taabiq al-ardiyy = parter (dosl: piatro ziemne)."
            },
            {
                "id": "pa_hh7",
                "question": "الحمّامُ يحتاجُ إلى _____ (Lazienka potrzebuje remontu)",
                "translation": "(Lazienka potrzebuje remontu)",
                "options": ["تَرْمِيمٍ", "تَرْمِيمًا", "تَرْمِيمٌ", "رَمِيمٍ"],
                "correct": "تَرْمِيمٍ",
                "explanation": "Poprawnie: 'tarmiimin' = remontu (dopelniacz po ilaa). Masdar formy II od r-m-m (mudaaaf -- naprawianie). Yahtaaju ilaa = potrzebuje (forma VIII od h-w-j -- pusty + VIII). Po ilaa: dopelniacz (majruur). Al-hammaam = lazienka/laznia (mudaaaf: h-m-m -- cieplo). Powiazane: hammaam turkiyy = laznia turecka, hammaam sibaaha = basen (doslownie: laznia plywania)."
            },
            {
                "id": "pa_hh8",
                "question": "نَقَلْنَا الأثاثَ إلى _____ الجديد (Przeniesilismy meble do nowego domu)",
                "translation": "(Przeniesilismy meble do nowego domu)",
                "options": ["المَنْزِلِ", "المَنْزِلَ", "المَنْزِلُ", "مَنْزِلاً"],
                "correct": "المَنْزِلِ",
                "explanation": "Poprawnie: 'al-manzili' = domu (dopelniacz po ilaa). Al-manzil = dom/rezydencja (wzorzec mafil od n-z-l = schodzenie/zatrzymywanie sie). Naqalnaa = przeniesilismy (1. os. l.mn. przeszly). Al-athaath = meble (rzeczownik zbiorowy -- BEZ l.mn.!). Al-jadiid = nowy (przymiotnik -- zgodny z al-manzil w rodzaju, liczbie, przypadku, okresleniu)."
            },
            {
                "id": "pa_hh9",
                "question": "في غُرفةِ _____ سريرٌ كبيرٌ (W sypialni jest duze lozko)",
                "translation": "(W sypialni jest duze lozko)",
                "options": ["النَّوْمِ", "النَّوْمَ", "النَّائِمِ", "المَنَامِ"],
                "correct": "النَّوْمِ",
                "explanation": "Poprawnie: 'an-nawmi' = snu (dopelniacz w idafie: ghurfatu an-nawm = pokoj snu = sypialnia). Rdzen: n-w-m (sen). Inne pokoje w domu: ghurfatu al-juluus (salon -- dosl: pokoj siedzenia), ghurfatu at-taaam (jadalnia), ghurfatu al-maktab (gabinet). Sariir = lozko. Kabiir = duzy (przymiotnik, tu mianownik bo orzecznik w zdaniu nominalnym)."
            },
            {
                "id": "pa_hh10",
                "question": "_____ البابَ بالمفتاح (Zamknal drzwi na klucz)",
                "translation": "(Zamknal drzwi na klucz)",
                "options": ["أَغْلَقَ", "غَلَقَ", "غَلَّقَ", "اِنْغَلَقَ"],
                "correct": "أَغْلَقَ",
                "explanation": "Poprawnie: 'aghlaqa' = zamknal. Forma IV od gh-l-q (zamykanie). Bil-miftaah = kluczem (z przyimkiem bi = za pomoca). Miftaah = klucz (wzorzec mifaal -- narzedzie od f-t-h = otwieranie! Klucz = narzedzie do otwierania, nie zamykania -- ciekawe!). Porownaj: inghalaq (forma VII) = zamknal sie (sam). Ghallaqa (forma II) = pozamykal (wiele drzwi)."
            },
            {
                "id": "pa_hh11",
                "question": "السقفُ _____ (Sufit przecieka)",
                "translation": "(Sufit przecieka)",
                "options": ["يَتَسَرَّبُ مِنْهُ المَاءُ", "يَسْرُبُ", "سَارِبٌ", "مُسَرَّبٌ"],
                "correct": "يَتَسَرَّبُ مِنْهُ المَاءُ",
                "explanation": "Poprawnie: 'yatasarrabu minhu al-maau' = woda przecieka z niego. Forma V od s-r-b (przenikanie). Doslowna konstrukcja: przecieka z niego woda -- typowa arabska struktura. As-saqf = sufit/dach. Al-maa = woda (r. meski -- dlatego ya, nie ta). Powiazane: tasarrub = wyciek/przeciek. W skarze do wlasciciela: as-saqfu yatasarrabu!"
            },
            {
                "id": "pa_hh12",
                "question": "الشقةُ _____ (Mieszkanie jest umeblowane)",
                "translation": "(Mieszkanie jest umeblowane)",
                "options": ["مَفْرُوشَةٌ", "فَارِشَةٌ", "فَرِيشَةٌ", "مُفَرَّشَةٌ"],
                "correct": "مَفْرُوشَةٌ",
                "explanation": "Poprawnie: 'mafruushatun' = umeblowana. Imieslow bierny formy I od f-r-sh (scielenie/meblowanie). Farsh = meblowanie/wystroj. R. zenski bo shaqqa jest zenska. W ogloszeniach: shaqqa mafruusha lil-iijaar = umeblowane mieszkanie do wynajecia. Shaqqa ghayru mafruusha = nieumeblowane. Firaash = posciel/lozko (pokrewne)."
            },
            {
                "id": "pa_hh13",
                "question": "نحتاجُ إلى _____ كهربائيّ (Potrzebujemy elektryka)",
                "translation": "(Potrzebujemy elektryka)",
                "options": ["فَنِّيٍّ", "فَنِّيًّا", "فَنِّيٌّ", "الفَنِّيّ"],
                "correct": "فَنِّيٍّ",
                "explanation": "Poprawnie: 'fanniyyin' = technika/fachowca (dopelniacz po ilaa). Fanniyy = fachowiec/technik (nisba od fann = sztuka/technika). Kahrabaaiyy = elektryczny/elektryk (nisba od kahrabaa = elektrycznosc). Callosc: fanniyy kahrabaaiyy = technik elektryczny = elektryk. Inne zawody: fanniyy sibaaka (hydraulik), najjaar (stolarz), dahhaan (malarz)."
            },
            {
                "id": "pa_hh14",
                "question": "الحديقةُ _____ بالأزهار (Ogrod jest pelny kwiatow)",
                "translation": "(Ogrod jest pelny kwiatow)",
                "options": ["مَلِيئَةٌ", "مَلِيءٌ", "مُمْتَلِئَةٌ", "مَالِئَةٌ"],
                "correct": "مَلِيئَةٌ",
                "explanation": "Poprawnie: 'maliiiatun' = pelna. Przymiotnik od m-l-hamza (pelnosc). R. zenski bo al-hadiiqa = ogrod jest ZENSKA. Bil-azhaar = kwiatami (po bi dopelniacz). Azhaar = kwiaty (l.mn. lamana od zahra = kwiat). Porownaj: hadiiqatu al-manzil = ogrodek domowy, hadiiqa aamma = park publiczny, hadiiqatu al-hayawaan = ogrod zoologiczny."
            },
            {
                "id": "pa_hh15",
                "question": "Ktory wyraz oznacza 'parter'?",
                "translation": "(ما الكلمة التي تعني الطابق الأرضي؟)",
                "options": ["الطَّابِقُ الأَرْضِيّ", "الطَّابِقُ الأَوَّل", "الطَّابِقُ السُّفْلِيّ", "الأَرْضِيَّة"],
                "correct": "الطَّابِقُ الأَرْضِيّ",
                "explanation": "Poprawnie: 'at-taabiq al-ardiyy' = parter (dosl: piatro ziemne). Ardiyy = ziemny (nisba od ard = ziemia). UWAGA: at-taabiq al-awwal = PIERWSZE piatro (nad parterem), nie parter! (w wiekszosci krajow arabskich system europejski). Al-ardiyya = podloga (nie parter!). W windach: hamza = parter (od ardiyy), 1 = 1. piatro."
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

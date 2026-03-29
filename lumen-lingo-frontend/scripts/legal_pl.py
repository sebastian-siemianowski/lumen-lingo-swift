#!/usr/bin/env python3
"""Add Legal/Privacy/Terms translations to Polish (pl.json)."""
import json, pathlib

MSG = pathlib.Path(__file__).resolve().parent.parent / "messages" / "pl.json"
data = json.loads(MSG.read_text("utf-8"))

data["Legal"] = {
    "tocLabel": "Na tej stronie",
    "downloadPdf": "Pobierz jako PDF",
    "lastUpdated": "Ostatnia aktualizacja: 22 marca 2026"
}

data["Privacy"] = {
    "meta": {
        "title": "Polityka Prywatno\u015bci",
        "description": "Dowiedz si\u0119, jak LumenShore dba o Twoje dane. Poznaj nasze podej\u015bcie oparte na prywatno\u015bci, przetwarzanie na urz\u0105dzeniu, synchronizacj\u0119 iCloud oraz Twoje prawa wynikaj\u0105ce z RODO i CCPA.",
        "ogTitle": "Polityka Prywatno\u015bci \u2014 LumenLingo"
    },
    "breadcrumb": "Polityka Prywatno\u015bci",
    "hero": {
        "heading": "Polityka Prywatno\u015bci",
        "subtitle": "Twoja prywatno\u015b\u0107 jest dla nas bardzo wa\u017cna. Oto dok\u0142adnie jak obchodzimy si\u0119 z Twoimi danymi \u2014 prostym j\u0119zykiem, nie \u017cargonem prawniczym."
    },
    "overview": {
        "heading": "Przegl\u0105d",
        "p1": "LumenShore Ltd (\u201eLumenShore\u201d, \u201emy\u201d lub \u201enasz\u201d) jest operatorem aplikacji mobilnej LumenLingo (\u201eAplikacja\u201d). Niniejsza Polityka Prywatno\u015bci wyja\u015bnia, w jaki spos\u00f3b zbieramy, wykorzystujemy, przechowujemy i chronimy informacje podczas korzystania z LumenLingo.",
        "p2": "Zbudowali\u015bmy LumenLingo z architektur\u0105 stawiaj\u0105c\u0105 prywatno\u015b\u0107 na pierwszym miejscu. Twoje dane edukacyjne s\u0105 przetwarzane i przechowywane na Twoim urz\u0105dzeniu i na Twoim osobistym koncie iCloud \u2014 nie na naszych serwerach. Wierzymy, \u017ce Twoje dane nale\u017c\u0105 do Ciebie i tak powinno pozosta\u0107."
    },
    "informationWeCollect": {
        "heading": "Informacje, kt\u00f3re zbieramy",
        "intro": "LumenLingo zbiera minimalne dane niezb\u0119dne do zapewnienia \u015bwietnego do\u015bwiadczenia nauki:",
        "li1": "<b>Dane post\u0119p\u00f3w w nauce</b> \u2014 poziomy opanowania fiszek, wyniki \u0107wicze\u0144, serie, XP i historia sesji. Dane te s\u0105 przechowywane lokalnie na Twoim urz\u0105dzeniu i synchronizowane przez iCloud.",
        "li2": "<b>Preferencje aplikacji</b> \u2014 wybrane pary j\u0119zykowe, preferencje krajobraz\u00f3w d\u017awi\u0119kowych, wyb\u00f3r t\u0142a wizualnego i wyb\u00f3r poziomu. Przechowywane na urz\u0105dzeniu i synchronizowane przez iCloud.",
        "li3": "<b>Status subskrypcji</b> \u2014 Tw\u00f3j poziom cz\u0142onkostwa, zarz\u0105dzany w ca\u0142o\u015bci przez Apple za po\u015brednictwem App Store. Otrzymujemy status subskrypcji od Apple, ale nie przetwarzamy informacji o p\u0142atno\u015bciach.",
        "li4": "<b>Anonimowa analityka</b> \u2014 mo\u017cemy zbiera\u0107 zagregowane, nieidentyfikowalne metryki u\u017cytkowania (np. kt\u00f3re funkcje s\u0105 najpopularniejsze) w celu ulepszenia aplikacji. Dane osobowe nie s\u0105 uwzgl\u0119dniane."
    },
    "whatWeDontCollect": {
        "heading": "Czego nie zbieramy",
        "intro": "Chcemy jasno okre\u015bli\u0107, czego <b>nigdy</b> nie zbieramy:",
        "li1": "\u017badnych adres\u00f3w e-mail, imion ani identyfikator\u00f3w osobistych (aplikacja nie wymaga rejestracji konta)",
        "li2": "\u017badnych danych lokalizacyjnych ani wsp\u00f3\u0142rz\u0119dnych GPS",
        "li3": "\u017badnego dost\u0119pu do kontakt\u00f3w, zdj\u0119\u0107 ani innych aplikacji na Twoim urz\u0105dzeniu",
        "li4": "\u017badnych informacji o p\u0142atno\u015bciach ani kart kredytowych (Apple obs\u0142uguje ca\u0142\u0105 fakturowanie)",
        "li5": "\u017badnych identyfikator\u00f3w reklamowych ani pikseli \u015bledz\u0105cych",
        "li6": "\u017badne dane nie s\u0105 sprzedawane ani udost\u0119pniane reklamodawcom \u2014 nigdy"
    },
    "howWeUse": {
        "heading": "Jak wykorzystujemy Twoje informacje",
        "intro": "Ograniczone dane, kt\u00f3re przetwarzamy, s\u0105 wykorzystywane wy\u0142\u0105cznie do:",
        "li1": "<b>Personalizacji nauki</b> \u2014 planowanie powt\u00f3rek rozstawionych w czasie, dostosowanie trudno\u015bci i \u015bledzenie post\u0119p\u00f3w zale\u017c\u0105 od Twojej historii nauki.",
        "li2": "<b>Synchronizacji post\u0119p\u00f3w</b> \u2014 synchronizacja iCloud zapewnia, \u017ce Twoje dane pod\u0105\u017caj\u0105 za Tob\u0105 na wszystkich urz\u0105dzeniach Apple.",
        "li3": "<b>Zarz\u0105dzania subskrypcj\u0105</b> \u2014 weryfikujemy Tw\u00f3j poziom cz\u0142onkostwa, aby odblokowa\u0107 odpowiednie funkcje.",
        "li4": "<b>Ulepszania aplikacji</b> \u2014 anonimowe zagregowane dane pomagaj\u0105 nam zrozumie\u0107, kt\u00f3re funkcje s\u0105 warto\u015bciowe i na czym skupi\u0107 rozw\u00f3j."
    },
    "dataStorage": {
        "heading": "Przechowywanie i bezpiecze\u0144stwo danych",
        "intro": "LumenLingo wykorzystuje architektur\u0119 prywatno\u015bci opart\u0105 na urz\u0105dzeniu:",
        "li1": "<b>Przechowywanie na urz\u0105dzeniu</b> \u2014 wszystkie dane edukacyjne s\u0105 przechowywane lokalnie z u\u017cyciem frameworka SwiftData firmy Apple, chronione wbudowanym szyfrowaniem urz\u0105dzenia.",
        "li2": "<b>Synchronizacja iCloud</b> \u2014 dane synchronizuj\u0105 si\u0119 mi\u0119dzy urz\u0105dzeniami za po\u015brednictwem osobistego konta iCloud, szyfrowane od ko\u0144ca do ko\u0144ca przez Apple. Nie mamy dost\u0119pu do Twoich danych iCloud.",
        "li3": "<b>Brak zewn\u0119trznych serwer\u00f3w</b> \u2014 LumenLingo nie utrzymuje serwer\u00f3w przechowuj\u0105cych Twoje dane osobowe. Nie ma bazy danych w chmurze do zabezpieczenia (lub naruszenia).",
        "li4": "<b>Bezpiecze\u0144stwo App Store</b> \u2014 zarz\u0105dzanie subskrypcjami jest obs\u0142ugiwane przez bezpieczn\u0105 infrastruktur\u0119 Apple."
    },
    "thirdParty": {
        "heading": "Us\u0142ugi zewn\u0119trzne",
        "intro": "LumenLingo integruje si\u0119 z ograniczon\u0105 liczb\u0105 us\u0142ug zewn\u0119trznych:",
        "li1": "<b>Apple App Store</b> \u2014 do dystrybucji aplikacji, zarz\u0105dzania subskrypcjami i przetwarzania p\u0142atno\u015bci. Podlega <applePrivacy>Polityce Prywatno\u015bci Apple</applePrivacy>.",
        "li2": "<b>Apple iCloud</b> \u2014 do synchronizacji danych mi\u0119dzy urz\u0105dzeniami. Podlega warunkom iCloud firmy Apple.",
        "li3": "<b>Analityka szanuj\u0105ca prywatno\u015b\u0107</b> \u2014 je\u015bli korzystamy z analityki, u\u017cywamy narz\u0119dzi bez plik\u00f3w cookie, zgodnych z RODO, kt\u00f3re nie zbieraj\u0105 danych umo\u017cliwiaj\u0105cych identyfikacj\u0119.",
        "noAdNetworks": "Nie korzystamy z Google Analytics, Facebook SDK ani \u017cadnych sieci reklamowych."
    },
    "childrensPrivacy": {
        "heading": "Prywatno\u015b\u0107 dzieci",
        "p1": "LumenLingo jest zaprojektowane dla u\u017cytkownik\u00f3w w ka\u017cdym wieku i nie zbiera \u015bwiadomie danych osobowych od dzieci poni\u017cej 13 roku \u017cycia (lub odpowiedniego wieku w Twojej jurysdykcji). Poniewa\u017c aplikacja nie wymaga rejestracji konta i przechowuje dane lokalnie, \u017cadne dane osobowe nie s\u0105 przekazywane nam od \u017cadnego u\u017cytkownika, w tym dzieci.",
        "p2": "Rodzice i opiekunowie mog\u0105 zarz\u0105dza\u0107 aplikacj\u0105 i jej danymi lub je usun\u0105\u0107 w dowolnym momencie za pomoc\u0105 standardowego zarz\u0105dzania urz\u0105dzeniami iOS."
    },
    "dataRetention": {
        "heading": "Przechowywanie i usuwanie danych",
        "intro": "Poniewa\u017c Twoje dane znajduj\u0105 si\u0119 na Twoim urz\u0105dzeniu i koncie iCloud, masz pe\u0142n\u0105 kontrol\u0119 nad nimi:",
        "li1": "<b>Zresetuj post\u0119py</b> \u2014 u\u017cyj opcji Ustawienia \u2192 Zresetuj post\u0119py w aplikacji, aby usun\u0105\u0107 wszystkie dane edukacyjne.",
        "li2": "<b>Usu\u0144 aplikacj\u0119</b> \u2014 odinstalowanie LumenLingo usuwa wszystkie dane przechowywane lokalnie.",
        "li3": "<b>Dane iCloud</b> \u2014 mo\u017cesz zarz\u0105dza\u0107 przechowywaniem iCloud przez Ustawienia \u2192 Apple ID \u2192 iCloud \u2192 Zarz\u0105dzaj przechowywaniem na swoim urz\u0105dzeniu.",
        "li4": "<b>Subskrypcja</b> \u2014 anuluj subskrypcj\u0119 przez Ustawienia \u2192 Apple ID \u2192 Subskrypcje. Po anulowaniu nie przechowujemy \u017cadnych danych."
    },
    "yourRights": {
        "heading": "Twoje prawa",
        "intro": "W zale\u017cno\u015bci od Twojej lokalizacji mo\u017cesz mie\u0107 dodatkowe prawa dotycz\u0105ce Twoich danych:",
        "gdprHeading": "Na mocy RODO (Europejski Obszar Gospodarczy i Wielka Brytania)",
        "gdprLi1": "Prawo dost\u0119pu do danych \u2014 Twoje dane s\u0105 ju\u017c na Twoim urz\u0105dzeniu i w iCloud.",
        "gdprLi2": "Prawo do sprostowania \u2014 mo\u017cesz edytowa\u0107 swoje preferencje bezpo\u015brednio w aplikacji.",
        "gdprLi3": "Prawo do usuni\u0119cia \u2014 zresetuj post\u0119py lub usu\u0144 aplikacj\u0119, aby usun\u0105\u0107 wszystkie dane.",
        "gdprLi4": "Prawo do przenoszenia danych \u2014 Twoje dane s\u0105 przechowywane w standardowych formatach w iCloud.",
        "gdprLi5": "Prawo do sprzeciwu \u2014 skontaktuj si\u0119 z nami, aby zrezygnowa\u0107 z anonimowej analityki.",
        "ccpaHeading": "Na mocy CCPA (Kalifornia)",
        "ccpaLi1": "Prawo do informacji o zbieranych danych \u2014 szczeg\u00f3\u0142owo opisano powy\u017cej; zbieramy minimalne dane.",
        "ccpaLi2": "Prawo do usuni\u0119cia \u2014 zresetuj post\u0119py lub usu\u0144 aplikacj\u0119.",
        "ccpaLi3": "Prawo do rezygnacji \u2014 nie sprzedajemy danych osobowych nikomu.",
        "ccpaLi4": "Zakaz dyskryminacji \u2014 nie b\u0119dziesz traktowany inaczej za korzystanie ze swoich praw."
    },
    "policyUpdates": {
        "heading": "Aktualizacje polityki",
        "p1": "Mo\u017cemy aktualizowa\u0107 niniejsz\u0105 Polityk\u0119 Prywatno\u015bci od czasu do czasu, zazwyczaj w celu odzwierciedlenia zmian w funkcjach aplikacji lub wymogach prawnych. Gdy dokonamy istotnych zmian, zaktualizujemy dat\u0119 \u201eOstatnia aktualizacja\u201d na g\u00f3rze tej strony.",
        "p2": "Zach\u0119camy do okresowego przegl\u0105dania tej strony. Dalsze korzystanie z LumenLingo po zmianach stanowi akceptacj\u0119 zaktualizowanej polityki."
    },
    "contactUs": {
        "heading": "Kontakt",
        "intro": "Je\u015bli masz pytania dotycz\u0105ce niniejszej Polityki Prywatno\u015bci, Twoich danych lub chcesz skorzysta\u0107 ze swoich praw, skontaktuj si\u0119 z nami:",
        "email": "<b>E-mail</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Firma</b>: LumenShore Ltd, Wielka Brytania",
        "responseTime": "Zazwyczaj odpowiadamy w ci\u0105gu 48 godzin."
    }
}

data["Terms"] = {
    "meta": {
        "title": "Regulamin",
        "description": "Regulamin LumenLingo. Poznaj swoje prawa i obowi\u0105zki podczas korzystania z naszej aplikacji do nauki j\u0119zyk\u00f3w \u2014 napisany prostym j\u0119zykiem.",
        "ogTitle": "Regulamin \u2014 LumenLingo"
    },
    "breadcrumb": "Regulamin",
    "hero": {
        "heading": "Regulamin",
        "subtitle": "Zasady korzystania z LumenLingo \u2014 napisane prosto, bo dokumenty prawne nie powinny wymaga\u0107 s\u0142ownika."
    },
    "introduction": {
        "heading": "Wprowadzenie",
        "p1": "Witamy w LumenLingo. Niniejszy Regulamin (\u201eRegulamin\u201d) reguluje korzystanie z aplikacji mobilnej LumenLingo (\u201eAplikacja\u201d) obs\u0142ugiwanej przez LumenShore Ltd (\u201eLumenShore\u201d, \u201emy\u201d lub \u201enasz\u201d).",
        "p2": "Pobieraj\u0105c, instaluj\u0105c lub korzystaj\u0105c z LumenLingo, zgadzasz si\u0119 na przestrzeganie niniejszego Regulaminu. Je\u015bli nie zgadzasz si\u0119 z kt\u00f3r\u0105kolwiek cz\u0119\u015bci\u0105 Regulaminu, prosimy o niekorzystanie z Aplikacji."
    },
    "acceptance": {
        "heading": "Akceptacja Regulaminu",
        "intro": "Uzyskuj\u0105c dost\u0119p do LumenLingo lub korzystaj\u0105c z niego, potwierdzasz, \u017ce:",
        "li1": "Masz co najmniej 13 lat (lub minimalny wiek wymagany w Twojej jurysdykcji).",
        "li2": "Je\u015bli masz mniej ni\u017c 18 lat, uzyska\u0142e\u015b zgod\u0119 rodzica lub opiekuna prawnego.",
        "li3": "Masz zdolno\u015b\u0107 prawn\u0105 do zawarcia wi\u0105\u017c\u0105cej umowy.",
        "li4": "B\u0119dziesz przestrzega\u0107 niniejszego Regulaminu i wszystkich obowi\u0105zuj\u0105cych przepis\u00f3w."
    },
    "yourAccount": {
        "heading": "Twoje konto",
        "intro": "LumenLingo nie wymaga tradycyjnej rejestracji konta. Twoja to\u017csamo\u015b\u0107 w Aplikacji jest powi\u0105zana z Twoim Apple ID i urz\u0105dzeniem. Jeste\u015b odpowiedzialny za:",
        "li1": "Utrzymanie bezpiecze\u0144stwa Apple ID i dost\u0119pu do urz\u0105dzenia.",
        "li2": "Wszelk\u0105 aktywno\u015b\u0107 wynikaj\u0105c\u0105 z korzystania z Aplikacji.",
        "li3": "Aktualizowanie systemu operacyjnego urz\u0105dzenia dla najlepszego do\u015bwiadczenia i bezpiecze\u0144stwa."
    },
    "subscriptions": {
        "heading": "Subskrypcje i rozliczenia",
        "intro": "LumenLingo oferuje bezp\u0142atne i premium poziomy cz\u0142onkostwa. Funkcje premium wymagaj\u0105 p\u0142atnej subskrypcji.",
        "li1": "<b>Rozliczenia</b> \u2014 wszystkie subskrypcje s\u0105 przetwarzane i zarz\u0105dzane przez Apple za po\u015brednictwem App Store. Nie obs\u0142ugujemy p\u0142atno\u015bci bezpo\u015brednio.",
        "li2": "<b>Poziom bezp\u0142atny</b> \u2014 zapewnia dost\u0119p do podstawowych funkcji nauki z ograniczonymi parami j\u0119zykowymi i trybami \u0107wicze\u0144.",
        "li3": "<b>Poziomy premium</b> \u2014 odblokowuj\u0105 dodatkowe pary j\u0119zykowe, nieograniczone \u0107wiczenia, krajobrazy d\u017awi\u0119kowe, kule oddechowe i inne funkcje premium opisane w Aplikacji.",
        "li4": "<b>Automatyczne odnawianie</b> \u2014 subskrypcje odnawiaj\u0105 si\u0119 automatycznie, chyba \u017ce zostan\u0105 anulowane co najmniej 24 godziny przed ko\u0144cem bie\u017c\u0105cego okresu rozliczeniowego.",
        "li5": "<b>Anulowanie</b> \u2014 mo\u017cesz anulowa\u0107 subskrypcj\u0119 w dowolnym momencie przez Ustawienia Apple ID \u2192 Subskrypcje. Anulowanie wchodzi w \u017cycie na koniec bie\u017c\u0105cego okresu rozliczeniowego.",
        "li6": "<b>Zwroty</b> \u2014 wnioski o zwrot s\u0105 obs\u0142ugiwane przez Apple zgodnie z ich zasadami zwrot\u00f3w. Skontaktuj si\u0119 z Pomoc\u0105 Apple w sprawie zwrot\u00f3w.",
        "li7": "<b>Zmiany cen</b> \u2014 mo\u017cemy dostosowa\u0107 ceny subskrypcji. Zostaniesz powiadomiony z wyprzedzeniem, a zmiany b\u0119d\u0105 obowi\u0105zywa\u0107 dopiero od nast\u0119pnego okresu odnowienia."
    },
    "acceptableUse": {
        "heading": "Dopuszczalne u\u017cytkowanie",
        "intro": "Zgadzasz si\u0119 korzysta\u0107 z LumenLingo wy\u0142\u0105cznie w celach zgodnych z prawem i niniejszym Regulaminem. Nie wolno Ci:",
        "li1": "Dokonywa\u0107 in\u017cynierii wstecznej, dekompilowa\u0107 ani dezasemblowa\u0107 \u017cadnej cz\u0119\u015bci Aplikacji.",
        "li2": "Pr\u00f3bowa\u0107 uzyskiwa\u0107 dost\u0119pu, manipulowa\u0107 ani u\u017cywa\u0107 niepublicznych obszar\u00f3w Aplikacji lub jej system\u00f3w.",
        "li3": "Kopiowa\u0107, modyfikowa\u0107, rozpowszechnia\u0107 ani tworzy\u0107 dzie\u0142 pochodnych na podstawie Aplikacji.",
        "li4": "U\u017cywa\u0107 Aplikacji w spos\u00f3b, kt\u00f3ry m\u00f3g\u0142by j\u0105 uszkodzi\u0107, wy\u0142\u0105czy\u0107, przeci\u0105\u017cy\u0107 lub zak\u0142\u00f3ci\u0107 jej dzia\u0142anie.",
        "li5": "U\u017cywa\u0107 automatycznych skrypt\u00f3w, bot\u00f3w lub innych narz\u0119dzi do interakcji z Aplikacj\u0105.",
        "li6": "Pr\u00f3bowa\u0107 obchodzi\u0107 ograniczenia subskrypcji lub poziomu."
    },
    "intellectualProperty": {
        "heading": "W\u0142asno\u015b\u0107 intelektualna",
        "p1": "Ca\u0142a zawarto\u015b\u0107 LumenLingo \u2014 w tym mi\u0119dzy innymi tre\u015bci fiszek, t\u0142umaczenia, audio, krajobrazy d\u017awi\u0119kowe, projekty wizualne, efekty shader\u00f3w, animacje, nazwa LumenLingo i marka LumenShore \u2014 jest w\u0142asno\u015bci\u0105 intelektualn\u0105 LumenShore Ltd i jest chroniona prawem autorskim, znakami towarowymi i innymi prawami w\u0142asno\u015bci intelektualnej.",
        "p2": "Twoja subskrypcja przyznaje Ci ograniczon\u0105, niewy\u0142\u0105czn\u0105, niezbywalna, odwo\u0142ywaln\u0105 licencj\u0119 na korzystanie z Aplikacji w celach osobistych, niekomercyjnych do nauki j\u0119zyk\u00f3w. Licencja ta nie obejmuje prawa do:",
        "li1": "Reprodukowania, rozpowszechniania lub publicznego wy\u015bwietlania jakiejkolwiek zawarto\u015bci Aplikacji.",
        "li2": "U\u017cywania jakiejkolwiek zawarto\u015bci w celach komercyjnych lub w produktach konkurencyjnych.",
        "li3": "Usuwania lub zmieniania jakichkolwiek informacji o w\u0142asno\u015bci lub etykiet."
    },
    "userContent": {
        "heading": "Tre\u015bci i dane u\u017cytkownika",
        "p1": "Twoje dane edukacyjne (post\u0119py, preferencje, historia \u0107wicze\u0144) s\u0105 przechowywane na Twoim urz\u0105dzeniu i na osobistym koncie iCloud. LumenShore nie ro\u015bci sobie praw do w\u0142asno\u015bci Twoich osobistych danych edukacyjnych.",
        "p2": "Wi\u0119cej szczeg\u00f3\u0142\u00f3w o tym, jak obchodzimy si\u0119 z danymi, znajdziesz w naszej <privacyLink>Polityce Prywatno\u015bci</privacyLink>."
    },
    "disclaimers": {
        "heading": "Zastrze\u017cenia",
        "intro": "LumenLingo jest udost\u0119pniane \u201etak jak jest\u201d i \u201ew miar\u0119 dost\u0119pno\u015bci\u201d. Chocia\u017c d\u0105\u017cymy do dok\u0142adno\u015bci i jako\u015bci, nie udzielamy \u017cadnych gwarancji, wyra\u017anych ani dorozumianych, dotycz\u0105cych:",
        "li1": "Dok\u0142adno\u015bci lub kompletno\u015bci jakichkolwiek tre\u015bci j\u0119zykowych lub t\u0142umacze\u0144.",
        "li2": "Nieprzerwanego lub wolnego od b\u0142\u0119d\u00f3w dzia\u0142ania Aplikacji.",
        "li3": "Wynik\u00f3w, kt\u00f3re mo\u017cesz osi\u0105gn\u0105\u0107 korzystaj\u0105c z Aplikacji.",
        "li4": "Dost\u0119pno\u015bci okre\u015blonych funkcji w danym momencie.",
        "supplement": "LumenLingo jest uzupe\u0142niaj\u0105cym narz\u0119dziem do nauki. Nie zast\u0119puje profesjonalnej nauki j\u0119zyk\u00f3w, certyfikowanych us\u0142ug t\u0142umaczeniowych ani kurs\u00f3w akademickich."
    },
    "limitationOfLiability": {
        "heading": "Ograniczenie odpowiedzialno\u015bci",
        "intro": "W najszerszym zakresie dozwolonym przez obowi\u0105zuj\u0105ce prawo, LumenShore Ltd nie ponosi odpowiedzialno\u015bci za szkody po\u015brednie, przypadkowe, szczeg\u00f3lne, wynikowe lub karne, ani za utrat\u0119 zysk\u00f3w, danych lub warto\u015bci firmy wynikaj\u0105ce z:",
        "li1": "Korzystania (lub niemo\u017cno\u015bci korzystania) z Aplikacji.",
        "li2": "Jakichkolwiek b\u0142\u0119d\u00f3w, pomini\u0119\u0107 lub niedok\u0142adno\u015bci w tre\u015bci.",
        "li3": "Nieautoryzowanego dost\u0119pu do Twojego urz\u0105dzenia lub danych (niespowodowanego naszym zaniedbaniem).",
        "li4": "Jakiejkolwiek przerwy lub zaprzestania \u015bwiadczenia us\u0142ugi.",
        "cap": "Nasza ca\u0142kowita odpowiedzialno\u015b\u0107 za jakiekolwiek roszczenie wynikaj\u0105ce z niniejszego Regulaminu lub korzystania z LumenLingo nie przekroczy kwoty zap\u0142aconej za Aplikacj\u0119 w ci\u0105gu 12 miesi\u0119cy poprzedzaj\u0105cych roszczenie."
    },
    "termination": {
        "heading": "Rozwi\u0105zanie",
        "p1": "Mo\u017cesz przesta\u0107 korzysta\u0107 z LumenLingo w dowolnym momencie, usuwaj\u0105c Aplikacj\u0119. Twoja subskrypcja, je\u015bli jest aktywna, powinna zosta\u0107 anulowana oddzielnie przez zarz\u0105dzanie subskrypcjami Apple.",
        "p2": "Zastrzegamy sobie prawo do zawieszenia lub rozwi\u0105zania dost\u0119pu do Aplikacji, je\u015bli uzasadnione uznamy, \u017ce naruszy\u0142e\u015b niniejszy Regulamin. W przypadku rozwi\u0105zania:",
        "li1": "Twoja licencja na korzystanie z Aplikacji zostaje natychmiast cofni\u0119ta.",
        "li2": "Twoje lokalne dane pozostaj\u0105 na Twoim urz\u0105dzeniu do momentu ich usuni\u0119cia.",
        "li3": "Aktywne subskrypcje powinny zosta\u0107 anulowane przez Apple.",
        "li4": "Postanowienia, kt\u00f3re ze swej natury powinny przetrwa\u0107 rozwi\u0105zanie, pozostaj\u0105 w mocy."
    },
    "governingLaw": {
        "heading": "Prawo w\u0142a\u015bciwe",
        "p1": "Niniejszy Regulamin podlega prawu Anglii i Walii i jest zgodnie z nim interpretowany, bez uwzgl\u0119dnienia zasad kolizji praw.",
        "p2": "Wszelkie spory wynikaj\u0105ce z niniejszego Regulaminu podlegaj\u0105 wy\u0142\u0105cznej jurysdykcji s\u0105d\u00f3w Anglii i Walii. Nie wp\u0142ywa to jednak na Twoje ustawowe prawa konsumenta w kraju zamieszkania."
    },
    "changes": {
        "heading": "Zmiany Regulaminu",
        "p1": "Mo\u017cemy aktualizowa\u0107 niniejszy Regulamin od czasu do czasu. Gdy dokonamy istotnych zmian, zaktualizujemy dat\u0119 \u201eOstatnia aktualizacja\u201d na g\u00f3rze strony i mo\u017cemy powiadomi\u0107 Ci\u0119 przez Aplikacj\u0119.",
        "p2": "Dalsze korzystanie z LumenLingo po opublikowaniu zmian stanowi akceptacj\u0119 zmienionego Regulaminu. Je\u015bli nie zgadzasz si\u0119 ze zmianami, zaprzestaj korzystania z Aplikacji i anuluj aktywne subskrypcje."
    },
    "contactUs": {
        "heading": "Kontakt",
        "intro": "Je\u015bli masz pytania dotycz\u0105ce niniejszego Regulaminu lub chcesz zg\u0142osi\u0107 problem, skontaktuj si\u0119 z nami:",
        "email": "<b>E-mail</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Firma</b>: LumenShore Ltd, Wielka Brytania",
        "responseTime": "Zazwyczaj odpowiadamy w ci\u0105gu 48 godzin."
    }
}

MSG.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("PL: Legal/Privacy/Terms added successfully")

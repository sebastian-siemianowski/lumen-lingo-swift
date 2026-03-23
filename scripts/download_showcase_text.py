#!/usr/bin/env python3
"""Add showcase heading/description to all locale message files."""
import json, pathlib

messages_dir = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

texts = {
    "en": ("Designed to delight", "Every interaction is crafted with care. Smooth animations, subtle haptics, and ambient soundscapes create a learning environment you actually want to return to."),
    "es": ("Dise\u00f1ado para deleitar", "Cada interacci\u00f3n est\u00e1 elaborada con cuidado. Animaciones fluidas, h\u00e1pticos sutiles y paisajes sonoros ambientales crean un entorno de aprendizaje al que realmente quieres volver."),
    "fr": ("Con\u00e7u pour enchanter", "Chaque interaction est cr\u00e9\u00e9e avec soin. Des animations fluides, des retours haptiques subtils et des paysages sonores ambiants cr\u00e9ent un environnement d\u2019apprentissage o\u00f9 vous avez vraiment envie de revenir."),
    "de": ("Gestaltet zum Begeistern", "Jede Interaktion ist sorgf\u00e4ltig gestaltet. Flüssige Animationen, subtile Haptik und ambiente Klangwelten schaffen eine Lernumgebung, in die Sie gerne zur\u00fcckkehren."),
    "pt": ("Projetado para encantar", "Cada intera\u00e7\u00e3o \u00e9 elaborada com cuidado. Anima\u00e7\u00f5es suaves, h\u00e1pticos sutis e paisagens sonoras ambientais criam um ambiente de aprendizado ao qual voc\u00ea realmente quer voltar."),
    "pl": ("Zaprojektowane, by zachwyca\u0107", "Ka\u017cda interakcja jest starannie dopracowana. P\u0142ynne animacje, subtelna haptyka i ambientowe krajobrazy d\u017awi\u0119kowe tworz\u0105 \u015brodowisko nauki, do kt\u00f3rego chcesz wraca\u0107."),
    "ja": ("\u559c\u3073\u3092\u8ffd\u6c42\u3057\u305f\u30c7\u30b6\u30a4\u30f3", "\u3059\u3079\u3066\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306f\u4e01\u5beb\u306b\u4f5c\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u6ed1\u3089\u304b\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3001\u7e4a\u7d30\u306a\u89e6\u899a\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3001\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30b5\u30a6\u30f3\u30c9\u30b9\u30b1\u30fc\u30d7\u304c\u3001\u622f\u308a\u305f\u304f\u306a\u308b\u5b66\u7fd2\u74b0\u5883\u3092\u5275\u308a\u51fa\u3057\u307e\u3059\u3002"),
    "zh": ("\u7cbe\u5fc3\u8bbe\u8ba1\uff0c\u4ee4\u4eba\u6109\u60a6", "\u6bcf\u6b21\u4ea4\u4e92\u90fd\u7ecf\u8fc7\u7cbe\u5fc3\u6253\u9020\u3002\u6d41\u7545\u7684\u52a8\u753b\u3001\u5fae\u5999\u7684\u89e6\u89c9\u53cd\u9988\u548c\u6c1b\u56f4\u97f3\u666f\uff0c\u521b\u9020\u4e86\u4e00\u4e2a\u4f60\u771f\u6b63\u60f3\u56de\u5230\u7684\u5b66\u4e60\u73af\u5883\u3002"),
    "ar": ("\u0645\u0635\u0645\u0645 \u0644\u0644\u0625\u0628\u0647\u0627\u0631", "\u0643\u0644 \u062a\u0641\u0627\u0639\u0644 \u0645\u0635\u0646\u0648\u0639 \u0628\u0639\u0646\u0627\u064a\u0629. \u0631\u0633\u0648\u0645 \u0645\u062a\u062d\u0631\u0643\u0629 \u0633\u0644\u0633\u0629\u060c \u0648\u0644\u0645\u0633\u0627\u062a \u062d\u0633\u064a\u0629 \u062f\u0642\u064a\u0642\u0629\u060c \u0648\u0645\u0634\u0627\u0647\u062f \u0635\u0648\u062a\u064a\u0629 \u0645\u062d\u064a\u0637\u0629 \u062a\u0646\u0634\u0626 \u0628\u064a\u0626\u0629 \u062a\u0639\u0644\u0645 \u062a\u0631\u064a\u062f \u062d\u0642\u064b\u0627 \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u064a\u0647\u0627."),
    "uk": ("\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u0445\u043e\u043f\u043b\u0435\u043d\u043d\u044f", "\u041a\u043e\u0436\u043d\u0430 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044f \u0440\u0435\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0434\u0443\u043c\u0430\u043d\u0430. \u041f\u043b\u0430\u0432\u043d\u0456 \u0430\u043d\u0456\u043c\u0430\u0446\u0456\u0457, \u0442\u043e\u043d\u043a\u0438\u0439 \u0442\u0430\u043a\u0442\u0438\u043b\u044c\u043d\u0438\u0439 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u0438\u0439 \u0437\u0432\u2019\u044f\u0437\u043e\u043a \u0442\u0430 \u0430\u043c\u0431\u0456\u0454\u043d\u0442\u043d\u0456 \u0437\u0432\u0443\u043a\u043e\u0432\u0456 \u043f\u0435\u0439\u0437\u0430\u0436\u0456 \u0441\u0442\u0432\u043e\u0440\u044e\u044e\u0442\u044c \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435 \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f, \u0434\u043e \u044f\u043a\u043e\u0433\u043e \u0445\u043e\u0447\u0435\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044f.")
}

for locale, (heading, desc) in texts.items():
    fp = messages_dir / f"{locale}.json"
    data = json.loads(fp.read_text("utf-8"))
    data["Download"]["showcase"]["heading"] = heading
    data["Download"]["showcase"]["description"] = desc
    fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")

print(f"showcase heading/description added to {len(texts)} locales")

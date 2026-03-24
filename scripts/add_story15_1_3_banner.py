#!/usr/bin/env python3
"""Write story15_1_3_data.json and inject into all locales."""

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
MSG_DIR = ROOT / "lumen-lingo-frontend" / "messages"

DATA = {
  "en": {
    "Legal": {
      "updateBannerDismiss": "Dismiss",
      "updateBannerLink": "View changes"
    },
    "Terms": {
      "updateBannerMessage": "We\u2019ve updated our Terms of Service."
    },
    "Privacy": {
      "updateBannerMessage": "We\u2019ve updated our Privacy Policy."
    },
    "CookiePage": {
      "updateBannerMessage": "We\u2019ve updated our Cookie Policy."
    }
  },
  "ar": {
    "Legal": {
      "updateBannerDismiss": "\u062a\u062c\u0627\u0647\u0644",
      "updateBannerLink": "\u0639\u0631\u0636 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a"
    },
    "Terms": {
      "updateBannerMessage": "\u0644\u0642\u062f \u0642\u0645\u0646\u0627 \u0628\u062a\u062d\u062f\u064a\u062b \u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627."
    },
    "Privacy": {
      "updateBannerMessage": "\u0644\u0642\u062f \u0642\u0645\u0646\u0627 \u0628\u062a\u062d\u062f\u064a\u062b \u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627."
    },
    "CookiePage": {
      "updateBannerMessage": "\u0644\u0642\u062f \u0642\u0645\u0646\u0627 \u0628\u062a\u062d\u062f\u064a\u062b \u0633\u064a\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0646\u0627."
    }
  },
  "de": {
    "Legal": {
      "updateBannerDismiss": "Schliessen",
      "updateBannerLink": "Aenderungen anzeigen"
    },
    "Terms": {
      "updateBannerMessage": "Wir haben unsere Nutzungsbedingungen aktualisiert."
    },
    "Privacy": {
      "updateBannerMessage": "Wir haben unsere Datenschutzrichtlinie aktualisiert."
    },
    "CookiePage": {
      "updateBannerMessage": "Wir haben unsere Cookie-Richtlinie aktualisiert."
    }
  },
  "es": {
    "Legal": {
      "updateBannerDismiss": "Cerrar",
      "updateBannerLink": "Ver cambios"
    },
    "Terms": {
      "updateBannerMessage": "Hemos actualizado nuestros T\u00e9rminos de Servicio."
    },
    "Privacy": {
      "updateBannerMessage": "Hemos actualizado nuestra Pol\u00edtica de Privacidad."
    },
    "CookiePage": {
      "updateBannerMessage": "Hemos actualizado nuestra Pol\u00edtica de Cookies."
    }
  },
  "fr": {
    "Legal": {
      "updateBannerDismiss": "Fermer",
      "updateBannerLink": "Voir les modifications"
    },
    "Terms": {
      "updateBannerMessage": "Nous avons mis \u00e0 jour nos Conditions d\u2019Utilisation."
    },
    "Privacy": {
      "updateBannerMessage": "Nous avons mis \u00e0 jour notre Politique de Confidentialit\u00e9."
    },
    "CookiePage": {
      "updateBannerMessage": "Nous avons mis \u00e0 jour notre Politique de Cookies."
    }
  },
  "ja": {
    "Legal": {
      "updateBannerDismiss": "\u9589\u3058\u308b",
      "updateBannerLink": "\u5909\u66f4\u3092\u898b\u308b"
    },
    "Terms": {
      "updateBannerMessage": "\u5229\u7528\u898f\u7d04\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"
    },
    "Privacy": {
      "updateBannerMessage": "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"
    },
    "CookiePage": {
      "updateBannerMessage": "Cookie\u30dd\u30ea\u30b7\u30fc\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"
    }
  },
  "pl": {
    "Legal": {
      "updateBannerDismiss": "Zamknij",
      "updateBannerLink": "Zobacz zmiany"
    },
    "Terms": {
      "updateBannerMessage": "Zaktualizowali\u015bmy nasze Warunki U\u017cytkowania."
    },
    "Privacy": {
      "updateBannerMessage": "Zaktualizowali\u015bmy nasz\u0105 Polityk\u0119 Prywatno\u015bci."
    },
    "CookiePage": {
      "updateBannerMessage": "Zaktualizowali\u015bmy nasz\u0105 Polityk\u0119 Cookies."
    }
  },
  "pt": {
    "Legal": {
      "updateBannerDismiss": "Fechar",
      "updateBannerLink": "Ver altera\u00e7\u00f5es"
    },
    "Terms": {
      "updateBannerMessage": "Atualizamos nossos Termos de Servi\u00e7o."
    },
    "Privacy": {
      "updateBannerMessage": "Atualizamos nossa Pol\u00edtica de Privacidade."
    },
    "CookiePage": {
      "updateBannerMessage": "Atualizamos nossa Pol\u00edtica de Cookies."
    }
  },
  "uk": {
    "Legal": {
      "updateBannerDismiss": "\u0417\u0430\u043a\u0440\u0438\u0442\u0438",
      "updateBannerLink": "\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"
    },
    "Terms": {
      "updateBannerMessage": "\u041c\u0438 \u043e\u043d\u043e\u0432\u0438\u043b\u0438 \u043d\u0430\u0448\u0456 \u0423\u043c\u043e\u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f."
    },
    "Privacy": {
      "updateBannerMessage": "\u041c\u0438 \u043e\u043d\u043e\u0432\u0438\u043b\u0438 \u043d\u0430\u0448\u0443 \u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0443 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456."
    },
    "CookiePage": {
      "updateBannerMessage": "\u041c\u0438 \u043e\u043d\u043e\u0432\u0438\u043b\u0438 \u043d\u0430\u0448\u0443 \u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0443 \u0444\u0430\u0439\u043b\u0456\u0432 cookie."
    }
  },
  "zh": {
    "Legal": {
      "updateBannerDismiss": "\u5173\u95ed",
      "updateBannerLink": "\u67e5\u770b\u66f4\u6539"
    },
    "Terms": {
      "updateBannerMessage": "\u6211\u4eec\u5df2\u66f4\u65b0\u670d\u52a1\u6761\u6b3e\u3002"
    },
    "Privacy": {
      "updateBannerMessage": "\u6211\u4eec\u5df2\u66f4\u65b0\u9690\u79c1\u653f\u7b56\u3002"
    },
    "CookiePage": {
      "updateBannerMessage": "\u6211\u4eec\u5df2\u66f4\u65b0Cookie\u653f\u7b56\u3002"
    }
  }
}

LOCALES = ["en", "ar", "de", "es", "fr", "ja", "pl", "pt", "uk", "zh"]

for locale in LOCALES:
    fp = MSG_DIR / f"{locale}.json"
    msg = json.loads(fp.read_text("utf-8"))
    locale_data = DATA[locale]

    for namespace, keys in locale_data.items():
        if namespace not in msg:
            msg[namespace] = {}
        for key, value in keys.items():
            msg[namespace][key] = value

    fp.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"Updated {locale}.json")

print("All locales updated.")

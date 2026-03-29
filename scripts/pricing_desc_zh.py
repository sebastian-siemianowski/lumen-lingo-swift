#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in zh.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "zh.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "\u5b8c\u7f8e\u7684\u5165\u95e8\u9009\u62e9\u3002\u63a2\u7d22\u6838\u5fc3\u529f\u80fd\uff0c\u4e86\u89e3\u5b66\u4e60\u8005\u4e3a\u4ec0\u4e48\u559c\u7231LumenLingo\u3002"
t["free"]["cta"] = "\u514d\u8d39\u5f00\u59cb"
t["pro"]["description"] = "\u4e3a\u8ba4\u771f\u7684\u5b66\u4e60\u8005\u800c\u8bbe\uff0c\u66f4\u591a\u8bed\u8a00\u3001\u65e0\u9650\u7ec3\u4e60\u3001\u66f4\u4e30\u5bcc\u7684\u4f53\u9a8c\u3002"
t["pro"]["cta"] = "\u5347\u7ea7\u5230Pro"
t["elite"]["description"] = "\u89e3\u9501LumenLingo\u5b8c\u6574\u4f53\u9a8c\u2014\u2014\u6240\u6709\u8bed\u8a00\u3001\u9ad8\u7ea7\u6a21\u5f0f\u548c\u60ca\u8273\u7684\u89c6\u89c9\u6548\u679c\u3002"
t["elite"]["cta"] = "\u9009\u62e9Elite"
t["royal"]["description"] = "\u8bed\u8a00\u5927\u5e08\u7684\u7ec8\u6781\u9009\u62e9\u3002\u6240\u6709\u529f\u80fd\u3001\u65e0\u9650\u5236\u3001\u4e13\u5c5e\u7279\u6743\u3002"
t["royal"]["cta"] = "\u9009\u62e9Royal"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("zh.json tier descriptions and CTAs added")

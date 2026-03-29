#!/usr/bin/env python3
"""Add Chinese download page translations."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "zh.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "\u901a\u8fc7\u6c89\u6d78\u5f0f\u4f53\u9a8c\u638c\u63e1\u8bed\u8a00\u3002\u7f8e\u89c2\u3001\u7528\u5fc3\u3001\u9ad8\u6548\u3002",
    "meta": "\u514d\u8d39\u5f00\u59cb \u00b7 \u65e0\u9700\u8d26\u6237 \u00b7 iPhone\u548ciPad",
    "benefits": {
        "flashcards": "\u7cbe\u7f8e\u95ea\u5361",
        "flashcardsDesc": "\u7528\u6c89\u6d78\u5f0f\u3001\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u5361\u7247\u5b66\u4e60\u8bcd\u6c47\u3002\u6309\u81ea\u5df1\u7684\u8282\u594f\u6ed1\u52a8\u638c\u63e1\u5355\u8bcd\u3002",
        "practice": "\u81ea\u9002\u5e94\u7ec3\u4e60",
        "practiceDesc": "\u4e09\u79cd\u6e38\u620f\u6a21\u5f0f\u9002\u5e94\u60a8\u7684\u5b66\u4e60\uff1a\u5339\u914d\u3001\u586b\u7a7a\u548c\u9009\u62e9\u9898\u3002",
        "soundscapes": "\u6c1b\u56f4\u97f3\u666f",
        "soundscapesDesc": "12\u79cd\u7cbe\u9009\u97f3\u666f\u2014\u2014\u4ece\u7ec6\u96e8\u5230\u5b87\u5b99\u661f\u4e91\u2014\u2014\u52a9\u60a8\u4e13\u6ce8\u5b66\u4e60\u3002"
    },
    "stats": {
        "languages": "\u8bed\u8a00",
        "soundscapes": "\u97f3\u666f",
        "practiceModes": "\u7ec3\u4e60\u6a21\u5f0f",
        "flashcards": "\u95ea\u5361"
    },
    "upgradeNote": "\u514d\u8d39\u5f00\u59cb\u3002Pro\u3001Elite\u548cRoyal\u7b49\u7ea7\u53ef\u5728\u5e94\u7528\u5185\u5347\u7ea7\u3002",
    "qr": {
        "heading": "\u626b\u7801\u4e0b\u8f7d",
        "description": "\u5c06iPhone\u6444\u50cf\u5934\u5bf9\u51c6QR\u7801\uff0c\u7acb\u5373\u83b7\u53d6LumenLingo\u3002",
        "fallback": "\u6216\u5728\u624b\u673a\u4e0a\u8bbf\u95ee lumenlingo.com/open"
    },
    "showcase": {
        "flashcards": "\u6c89\u6d78\u5f0f\u95ea\u5361",
        "flashcardsSub": "\u6ed1\u52a8\u6d4f\u89c8\u7cbe\u7f8e\u8bbe\u8ba1\u7684\u5361\u7247",
        "practice": "\u667a\u80fd\u7ec3\u4e60",
        "practiceSub": "\u4e09\u79cd\u81ea\u9002\u5e94\u6e38\u620f\u6a21\u5f0f",
        "soundscapes": "\u6c1b\u56f4\u97f3\u666f",
        "soundscapesSub": "12\u79cd\u7cbe\u9009\u4e13\u6ce8\u73af\u5883"
    }
}

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("zh.json Download namespace updated")

#!/usr/bin/env python3
"""Add SEO meta keys to zh.json (Chinese Simplified)."""
import json, pathlib

LQ = "\u201c"  # "
RQ = "\u201d"  # "

f = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "zh.json"
data = json.loads(f.read_text("utf-8"))

if "meta" not in data.get("Pricing", {}):
    data["Pricing"]["meta"] = {
        "title": "\u4ef7\u683c\u65b9\u6848",
        "description": "\u9009\u62e9\u5b8c\u7f8e\u7684LumenLingo\u4f1a\u5458\u7b49\u7ea7\u3002\u514d\u8d39\u5f00\u59cb\uff0c\u6216\u89e3\u9501Pro\u3001Elite\u6216Royal\u4ee5\u83b7\u53d6\u66f4\u591a\u8bed\u8a00\u3001\u58f0\u666f\u3001\u89c6\u89c9\u80cc\u666f\u548c\u9ad8\u7ea7\u529f\u80fd\u3002",
        "ogTitle": "\u4ef7\u683c\u65b9\u6848 \u2014 LumenLingo",
        "ogDescription": "\u6bd4\u8f83Free\u3001Pro\u3001Elite\u548cRoyal\u7b49\u7ea7\u3002\u514d\u8d39\u5f00\u59cb\uff0c\u51c6\u5907\u597d\u4e86\u518d\u5347\u7ea7\u3002"
    }

if "meta" not in data.get("Features", {}):
    data["Features"]["meta"] = {
        "title": "\u529f\u80fd",
        "description": "\u63a2\u7d22LumenLingo\u7684\u5168\u90e8\u529f\u80fd\uff1a\u6c89\u6d78\u5f0f\u95ea\u5361\u3001\u667a\u80fd\u95f4\u9694\u91cd\u590d\u30013\u79cd\u7ec3\u4e60\u6a21\u5f0f\u300112\u4e2a\u58f0\u666f\u3001\u547c\u5438\u7403\u300125+\u8bed\u8a00\u5bf9\u7b49\u3002",
        "ogTitle": "\u529f\u80fd \u2014 LumenLingo",
        "ogDescription": "\u63a2\u7d22LumenLingo\u7684\u5168\u90e8\u529f\u80fd\uff1a\u6c89\u6d78\u5f0f\u95ea\u5361\u3001\u95f4\u9694\u91cd\u590d\u30013\u79cd\u7ec3\u4e60\u6a21\u5f0f\u300112\u4e2a\u58f0\u666f\u7b49\u3002"
    }

if "meta" not in data.get("Contact", {}):
    data["Contact"]["meta"] = {
        "title": "\u5e2e\u52a9\u4e0e\u8054\u7cfb",
        "description": "\u67e5\u627e\u5173\u4e8eLumenLingo\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54\uff0c\u6216\u8054\u7cfbLumenShore\u56e2\u961f\u3002\u6211\u4eec\u968f\u65f6\u5e2e\u52a9\u60a8\u7684\u8bed\u8a00\u5b66\u4e60\u4e4b\u65c5\u3002",
        "ogTitle": "\u5e2e\u52a9\u4e0e\u8054\u7cfb \u2014 LumenLingo",
        "ogDescription": "\u67e5\u627e\u5173\u4e8eLumenLingo\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54\uff0c\u6216\u8054\u7cfbLumenShore\u56e2\u961f\u3002"
    }

if "Blog" not in data:
    data["Blog"] = {}
if "meta" not in data.get("Blog", {}):
    data["Blog"]["meta"] = {
        "title": "\u535a\u5ba2",
        "description": "\u4e3a\u8bed\u8a00\u5b66\u4e60\u8005\u63d0\u4f9b\u7684\u6280\u5de7\u3001\u6307\u5357\u548c\u89c1\u89e3\u3002\u63a2\u7d22\u5b66\u4e60\u79d1\u5b66\u3001\u5b9e\u7528\u5efa\u8bae\u548cLumenLingo\u56e2\u961f\u7684\u6700\u65b0\u52a8\u6001\u3002",
        "ogTitle": "\u535a\u5ba2 \u2014 LumenLingo",
        "ogDescription": "LumenLingo\u4e3a\u8bed\u8a00\u5b66\u4e60\u8005\u63d0\u4f9b\u7684\u6280\u5de7\u3001\u6307\u5357\u548c\u89c1\u89e3\u3002"
    }

if "meta" not in data.get("Download", {}):
    data["Download"]["meta"] = {
        "title": "\u4e0b\u8f7dLumenLingo \u2014 App Store\u514d\u8d39\u4e0b\u8f7d",
        "description": "\u4e0b\u8f7diPhone\u7248LumenLingo\u3002\u7cbe\u7f8e\u95ea\u5361\u3001\u81ea\u9002\u5e94\u7ec3\u4e60\u300112\u4e2a\u58f0\u666f\u30019\u79cd\u8bed\u8a00\u3002\u514d\u8d39\u5f00\u59cb\u3002",
        "ogTitle": "\u4e0b\u8f7dLumenLingo \u2014 App Store\u514d\u8d39\u4e0b\u8f7d",
        "ogDescription": "\u901a\u8fc7\u6c89\u6d78\u5f0f\u4f53\u9a8c\u638c\u63e1\u8bed\u8a00\u3002\u7cbe\u7f8e\u95ea\u5361\u3001\u81ea\u9002\u5e94\u7ec3\u4e60\u548c\u58f0\u666f\u3002"
    }

if "Languages" not in data:
    data["Languages"] = {}
if "meta" not in data.get("Languages", {}):
    data["Languages"]["meta"] = {
        "title": "\u652f\u6301\u7684\u8bed\u8a00 \u2014 9\u79cd\u8bed\u8a00\uff0c25+\u8bed\u8a00\u5bf9",
        "description": "\u63a2\u7d22LumenLingo\u7684\u6240\u6709\u8bed\u8a00\u5bf9\u3002\u7528\u7cbe\u7f8e\u95ea\u5361\u5b66\u4e60\u897f\u73ed\u7259\u8bed\u3001\u6cd5\u8bed\u3001\u5fb7\u8bed\u3001\u65e5\u8bed\u3001\u4e2d\u6587\u3001\u963f\u62c9\u4f2f\u8bed\u3001\u610f\u5927\u5229\u8bed\u3001\u6ce2\u5170\u8bed\u7b49\u3002",
        "ogTitle": "\u652f\u6301\u7684\u8bed\u8a00 \u2014 LumenLingo",
        "ogDescription": "9\u79cd\u8bed\u8a00\uff0c25+\u53cc\u5411\u8bed\u8a00\u5bf9\u3002\u901a\u8fc7\u7cbe\u9009\u8bcd\u6c47\u548c\u81ea\u9002\u5e94\u7ec3\u4e60\u4ece\u4efb\u4f55\u65b9\u5411\u5b66\u4e60\u3002"
    }

if "meta" not in data.get("EarlyAccess", {}):
    data["EarlyAccess"]["meta"] = {
        "title": "\u62a2\u5148\u4f53\u9a8c \u2014 \u6210\u4e3a\u7b2c\u4e00\u6279\u7528\u6237",
        "description": "\u52a0\u5165LumenLingo\u62a2\u5148\u4f53\u9a8c\u540d\u5355\u3002\u7b2c\u4e00\u65f6\u95f4\u83b7\u77e5\u65b0\u8bed\u8a00\u548c\u65b0\u529f\u80fd\u7684\u53d1\u5e03\u3002\u65e9\u671f\u652f\u6301\u8005\u4e13\u5c5e\u4f18\u60e0\u3002",
        "ogTitle": "\u62a2\u5148\u4f53\u9a8c \u2014 LumenLingo",
        "ogDescription": "\u52a0\u5165\u7b49\u5f85\u540d\u5355\u5e76\u62a2\u5148\u4f53\u9a8cLumenLingo\u3002\u901a\u8fc7\u591a\u611f\u5b98\u6c89\u6d78\u638c\u63e1\u65b0\u8bed\u8a00\u3002"
    }

if "meta" not in data.get("Demo", {}):
    data["Demo"]["meta"] = {
        "title": "\u7acb\u5373\u4f53\u9a8c \u2014 \u4e92\u52a8\u95ea\u5361\u6f14\u793a",
        "description": "\u5728\u6d4f\u89c8\u5668\u4e2d\u4f53\u9a8cLumenLingo\u95ea\u5361\u3002\u7ffb\u8f6c\u3001\u6ed1\u52a8\u3001\u5b66\u4e60 \u2014 \u7136\u540e\u514d\u8d39\u4e0b\u8f7d\u5b8c\u6574\u7248\u5e94\u7528\u3002",
        "ogTitle": "\u7acb\u5373\u4f53\u9a8c \u2014 \u4e92\u52a8\u6f14\u793a | LumenLingo",
        "ogDescription": "\u6ed1\u52a85\u79cd\u8bed\u8a00\u7684\u7cbe\u7f8e\u95ea\u5361\u3002\u4e0b\u8f7d\u524d\u5148\u4f53\u9a8c\u54c1\u8d28\u3002"
    }

if "meta" not in data.get("Offline", {}):
    data["Offline"]["meta"] = {
        "title": "\u60a8\u5df2\u79bb\u7ebf"
    }

f.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("ZH: SEO meta keys added successfully")

#!/usr/bin/env python3
"""Story 1.4 — Add Aggregate & De-identified Data sections to Privacy + Terms in en.json."""
import json
import pathlib

MESSAGES_PATH = pathlib.Path(__file__).resolve().parent.parent / "messages" / "en.json"

PRIVACY_AGGREGATE = {
    "heading": "Aggregated and De-identified Data",
    "p1": "We may collect, aggregate, and de-identify personal data so that it can no longer reasonably identify any individual. Once de-identified, such data is no longer personal data under GDPR, UK GDPR, CCPA, or any applicable data protection law.",
    "p2": "We may use, disclose, and publish de-identified and aggregated data for any purpose, including but not limited to:",
    "li1": "Product improvement and feature development",
    "li2": "Research and analytics",
    "li3": "Marketing materials and case studies",
    "li4": "Benchmarking and public reports",
    "li5": "Investor and stakeholder reporting",
    "deIdentification": {
        "heading": "De-identification Standards",
        "p1": "Our de-identification process meets the following legal standards:",
        "li1": "<b>GDPR Recital 26</b> \u2014 data cannot be singled out, linked, or inferred to identify any individual, taking into account all means reasonably likely to be used.",
        "li2": "<b>CCPA \u00a7 1798.140(m)</b> \u2014 information that cannot reasonably be used to infer information about, or otherwise be linked to, a particular consumer or household. We maintain a commitment not to attempt to re-identify de-identified data."
    },
    "examples": {
        "heading": "Examples of Aggregate Data",
        "p1": "Examples of the types of aggregate data we may derive and publish include:",
        "li1": "Total number of users per language pair",
        "li2": "Average learning session duration",
        "li3": "Most commonly studied vocabulary",
        "li4": "Error rates per difficulty level",
        "li5": "Feature usage statistics across membership tiers",
        "p2": "No individual user can be identified from any published aggregate data."
    },
    "survival": "Our right to retain and use Aggregate Data survives account deletion and service termination. After you delete your account, we may retain Aggregate Data that was derived from your use of the Service."
}

TERMS_AGGREGATE = {
    "heading": "Aggregate Data",
    "p1": "By using the Service, you acknowledge that LumenShore may derive aggregated, anonymised, and statistical data from your use of the Service (\u201cAggregate Data\u201d).",
    "p2": "Aggregate Data does not identify you personally and may be used by LumenShore for any lawful business purpose without restriction, compensation, or attribution.",
    "p3": "Examples of Aggregate Data include: total number of users per language pair, average learning session duration, most commonly studied vocabulary, error rates per difficulty level, and feature usage statistics.",
    "p4": "LumenShore may use Aggregate Data for product improvement, research, analytics, marketing, benchmarking, investor reporting, blog posts, case studies, and public reports.",
    "survival": "LumenShore\u2019s right to retain and use Aggregate Data survives account deletion and service termination. After you delete your account, we may retain Aggregate Data derived from your use of the Service."
}


def main():
    data = json.loads(MESSAGES_PATH.read_text("utf-8"))

    # Add to Privacy
    data["Privacy"]["aggregateData"] = PRIVACY_AGGREGATE

    # Add to Terms
    data["Terms"]["aggregateData"] = TERMS_AGGREGATE

    MESSAGES_PATH.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print("\u2713 Added aggregateData sections to Privacy and Terms in en.json")


if __name__ == "__main__":
    main()

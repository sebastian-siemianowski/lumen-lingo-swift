#!/usr/bin/env python3
"""Add sub-processor disclosure section to en.json Privacy (Story 1.2)."""
import json
import pathlib

MESSAGES_PATH = pathlib.Path(__file__).resolve().parent.parent / "messages" / "en.json"

SUB_PROCESSOR_SECTION = {
    "heading": "Sub-Processors",
    "intro": "The following third-party services process data on our behalf. Each sub-processor has been assessed for data protection compliance:",
    "tableHeaders": {
        "service": "Service",
        "purpose": "Purpose",
        "dataProcessed": "Data Processed",
        "location": "Server Location",
        "privacyPolicy": "Privacy Policy"
    },
    "processors": {
        "apple": {
            "service": "Apple (App Store & iCloud)",
            "purpose": "App distribution, subscription billing, data sync",
            "dataProcessed": "Subscription status, learning data (via iCloud)",
            "location": "Global (Apple data centres)",
            "privacyUrl": "https://www.apple.com/legal/privacy/",
            "privacyLabel": "Apple Privacy"
        },
        "vercel": {
            "service": "Vercel",
            "purpose": "Website hosting, anonymous analytics, speed insights",
            "dataProcessed": "Anonymous page views, performance metrics",
            "location": "United States (with global edge nodes)",
            "privacyUrl": "https://vercel.com/legal/privacy-policy",
            "privacyLabel": "Vercel Privacy"
        },
        "sentry": {
            "service": "Sentry (Functional Software, Inc.)",
            "purpose": "Error monitoring, session replay (with consent)",
            "dataProcessed": "Error logs, stack traces, session replays (with consent)",
            "location": "United States",
            "privacyUrl": "https://sentry.io/privacy/",
            "privacyLabel": "Sentry Privacy"
        }
    },
    "dpaStatus": {
        "heading": "Data Processing Agreements",
        "p1": "We maintain Data Processing Agreements (DPAs) or equivalent contractual protections with all sub-processors that handle personal data:",
        "li1": "<b>Apple</b> — covered by Apple's standard DPA for developers, incorporating Standard Contractual Clauses for international transfers.",
        "li2": "<b>Vercel</b> — covered by Vercel's DPA, available at vercel.com/legal/dpa. Vercel Analytics is cookie-free and processes no personal data.",
        "li3": "<b>Sentry</b> — covered by Sentry's DPA with Standard Contractual Clauses (SCCs) for EU-US data transfers."
    },
    "changes": {
        "heading": "Sub-Processor Changes",
        "p1": "If we add or change a sub-processor that handles personal data, we will update this page and note the change in the Version History section of this Privacy Policy. For material changes, we will provide at least 30 days' notice before the new sub-processor begins processing data."
    }
}

def main():
    data = json.loads(MESSAGES_PATH.read_text("utf-8"))
    data["Privacy"]["subProcessors"] = SUB_PROCESSOR_SECTION
    MESSAGES_PATH.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print("✓ Added subProcessors section to en.json")


if __name__ == "__main__":
    main()

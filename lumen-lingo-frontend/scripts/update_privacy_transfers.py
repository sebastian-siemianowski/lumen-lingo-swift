#!/usr/bin/env python3
"""Add International Data Transfers section to en.json Privacy (Story 1.3)."""
import json
import pathlib

MESSAGES_PATH = pathlib.Path(__file__).resolve().parent.parent / "messages" / "en.json"

TRANSFERS_SECTION = {
    "heading": "International Data Transfers",
    "intro": "LumenShore Ltd is based in the United Kingdom. Some of your data may be transferred to and processed in countries outside the UK and the European Economic Area (EEA). Here is where each service processes data and the legal mechanism that protects the transfer:",
    "li1": "<b>Apple (United States & global)</b> \u2014 iCloud data and App Store subscription data may be processed in Apple\u2019s global data centres, including in the United States. Apple participates in transfers under Standard Contractual Clauses (SCCs) and the EU-US Data Privacy Framework.",
    "li2": "<b>Vercel (United States & global edge)</b> \u2014 our website is served from Vercel\u2019s edge network, with primary servers in the United States. Vercel Analytics processes no personal data. Website hosting data is protected under Vercel\u2019s GDPR DPA with Standard Contractual Clauses.",
    "li3": "<b>Sentry (United States)</b> \u2014 error logs and session replay data (with your consent) are transmitted to Sentry\u2019s servers in the United States. These transfers are protected by Sentry\u2019s DPA incorporating Standard Contractual Clauses (SCCs).",
    "safeguards": {
        "heading": "Transfer Safeguards",
        "intro": "For all international data transfers, we ensure at least one of the following safeguards is in place:",
        "li1": "<b>Standard Contractual Clauses (SCCs)</b> \u2014 EU Commission-approved contractual clauses that bind the data importer to protect your data to GDPR standards.",
        "li2": "<b>EU-US Data Privacy Framework</b> \u2014 where the recipient is certified under the framework, providing an adequacy basis for transfers to the US.",
        "li3": "<b>UK International Data Transfer Agreement (IDTA)</b> \u2014 the UK equivalent of SCCs, approved by the ICO for transfers from the UK.",
        "li4": "<b>Adequacy decisions</b> \u2014 where the European Commission or UK Government has determined that the destination country provides adequate data protection."
    },
    "p1": "You may request a copy of the relevant transfer safeguards by contacting us at hello@lumenshore.com."
}

def main():
    data = json.loads(MESSAGES_PATH.read_text("utf-8"))
    data["Privacy"]["internationalTransfers"] = TRANSFERS_SECTION
    MESSAGES_PATH.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print("\u2713 Added internationalTransfers section to en.json")


if __name__ == "__main__":
    main()

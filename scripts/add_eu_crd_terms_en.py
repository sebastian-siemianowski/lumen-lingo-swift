#!/usr/bin/env python3
"""Add euConsumerRights section to en.json Terms namespace."""

import json
from collections import OrderedDict

path = "lumen-lingo-frontend/messages/en.json"

with open(path, 'r', encoding='utf-8') as f:
    d = json.load(f, object_pairs_hook=OrderedDict)

EU_SECTION = OrderedDict([
    ("heading", "EU Consumer Rights Directive"),
    ("intro", "If you are a consumer in the European Union, you have additional rights under the EU Consumer Rights Directive (2011/83/EU). These rights apply alongside our standard terms and offer you specific protections when purchasing digital services."),
    ("preContractualHeading", "Pre-Contractual Information"),
    ("preContractualP1", "Before you subscribe, we provide all information required under Article 6 of the EU Consumer Rights Directive, including:"),
    ("preContractualLi1", "<b>Trader identity</b> — LumenShore Limited, registered in England & Wales (company number 09607326), VAT: GB 270411929"),
    ("preContractualLi2", "<b>Service description</b> — AI-powered language learning application with flashcards, practice exercises, and adaptive learning"),
    ("preContractualLi3", "<b>Total price</b> — all prices are displayed inclusive of applicable VAT/taxes. Subscription prices are fetched dynamically from Apple and shown in your local currency"),
    ("preContractualLi4", "<b>Payment method</b> — all payments are processed by Apple through the App Store. No hidden charges or additional fees apply"),
    ("preContractualLi5", "<b>Contract duration</b> — monthly rolling subscription with no minimum commitment"),
    ("withdrawalHeading", "Right of Withdrawal"),
    ("withdrawalP1", "Under the EU Consumer Rights Directive, you have a <b>14-day right of withdrawal</b> from the date of purchase. However, by starting to use the digital content immediately, you expressly consent to the performance of the contract beginning before the withdrawal period expires and acknowledge that you lose your right of withdrawal once the digital content has been fully provided."),
    ("withdrawalP2", "For subscriptions purchased through the App Store, withdrawal and refund requests are handled by Apple. You may request a refund at reportaproblem.apple.com within 14 days of purchase."),
    ("hiddenChargesHeading", "Prohibition of Hidden Charges"),
    ("hiddenChargesP1", "In compliance with Article 22 of the EU Consumer Rights Directive, LumenLingo does not impose any charges beyond those clearly disclosed before purchase. All subscription prices are shown upfront, inclusive of applicable taxes. There are no hidden fees, delivery charges, or additional costs."),
    ("buttonObligationHeading", "Order Acknowledgement"),
    ("buttonObligationP1", "In compliance with Article 8(2) of the EU Consumer Rights Directive, our subscription purchase buttons clearly indicate the obligation to pay by displaying the subscription price. By tapping the purchase button, you explicitly acknowledge that the order implies an obligation to pay."),
    ("cancellationHeading", "Easy Cancellation"),
    ("cancellationP1", "You can cancel your subscription at any time with the same ease as subscribing. To cancel, open your device Settings, tap your name, then Subscriptions, select LumenLingo, and tap Cancel Subscription. Cancellation takes effect at the end of the current billing period, and you retain access until then."),
    ("statutory", "These EU consumer rights are in addition to, and do not replace, any other rights you may have under applicable national consumer protection laws.")
])

# Insert after consumerRights
terms = d["Terms"]
new_terms = OrderedDict()
for key, val in terms.items():
    new_terms[key] = val
    if key == "consumerRights":
        new_terms["euConsumerRights"] = EU_SECTION

d["Terms"] = new_terms

with open(path, 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)
    f.write('\n')

print("en.json: OK")

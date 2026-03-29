#!/usr/bin/env python3
"""Add regulatoryShield section to en.json — includes Tax & VAT compliance doc (9.4.4)."""

import json
from collections import OrderedDict

path = "lumen-lingo-frontend/messages/en.json"
with open(path, 'r', encoding='utf-8') as f:
    d = json.load(f, object_pairs_hook=OrderedDict)

regulatory_shield = OrderedDict([
    ("heading", "Regulatory & Compliance"),
    ("regulatoryChangeHeading", "Regulatory Changes"),
    ("regulatoryChange1", "We reserve the right to modify the Service or these Terms to comply with changes in applicable laws, regulations, or platform requirements. Where practical, we will provide advance notice of material changes."),
    ("regulatoryChange2", "If a regulatory change materially affects your use of the Service, you may cancel your subscription before the change takes effect without penalty."),
    ("regulatoryChange3", "We shall not be liable for any unavailability or feature changes required by law or regulation."),
    ("geoRestrictionHeading", "Geographic Restrictions"),
    ("geoRestriction1", "The Service is intended for users worldwide, but certain features may not be available in all jurisdictions due to legal, licensing, or platform restrictions."),
    ("geoRestriction2", "You are responsible for ensuring that your use of the Service complies with the laws of your jurisdiction."),
    ("geoRestriction3", "We may restrict access to the Service or certain features in specific regions without prior notice if required by law."),
    ("applePolicyHeading", "Apple App Store Policies"),
    ("applePolicy1", "All in-app purchases and subscriptions are processed exclusively through Apple's App Store. Apple acts as the merchant of record for all transactions and is responsible for payment processing, billing, and tax collection."),
    ("applePolicy2", "By purchasing a subscription, you agree to Apple's terms and conditions in addition to these Terms. In the event of any conflict between these Terms and Apple's policies regarding payment processing, Apple's policies shall prevail."),
    ("applePolicy3", "We do not have access to your payment information. For billing enquiries, refund requests, or payment disputes, please contact Apple Support directly."),
    ("taxPricingHeading", "Tax & VAT Compliance"),
    ("taxPricing1", "Prices displayed on our website are shown in British Pounds (GBP) and include UK Value Added Tax (VAT) at the standard rate of 20%. LumenShore Limited is registered for VAT in the United Kingdom (VAT Registration Number: GB 270411929). The actual price you are charged may differ based on your country, local tax rates, and the currency used by Apple in your region."),
    ("taxPricing2", "For in-app purchases, Apple is the merchant of record and is responsible for calculating, collecting, and remitting all applicable taxes, including VAT, GST, and sales tax, in accordance with local laws. Apple applies the EU VAT One Stop Shop (OSS) rules for EU customers and handles tax compliance for all other jurisdictions. We do not separately collect or remit taxes on subscription payments."),
    ("dataProtectionHeading", "Data Protection & Privacy"),
    ("dataProtection1", "Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018."),
    ("dataProtection2", "We process personal data only as necessary to provide the Service, comply with legal obligations, and improve the user experience. You have the right to access, rectify, erase, or port your data as described in our Privacy Policy."),
    ("indemnificationHeading", "Regulatory Indemnification"),
    ("indemnification1", "You agree to indemnify and hold harmless LumenShore Limited from any claims, losses, or expenses arising from your breach of applicable laws or regulations while using the Service."),
    ("indemnification2", "This indemnification obligation survives termination of your account or these Terms."),
])

d["Terms"]["regulatoryShield"] = regulatory_shield

with open(path, 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)
    f.write('\n')

print("en.json: regulatoryShield added with 22 keys")

#!/usr/bin/env python3
"""Update Privacy Policy in en.json to cover both website and iOS app (Story 1.1)."""

import json
import pathlib

MESSAGES_PATH = pathlib.Path(__file__).resolve().parent.parent / "messages" / "en.json"

# The new comprehensive Privacy section
NEW_PRIVACY = {
    "meta": {
        "title": "Privacy Policy",
        "description": "Read how LumenShore handles your data with care across the LumenLingo iOS app and lumenlingo.com website. Privacy-first approach, on-device processing, GDPR, CCPA and your rights.",
        "ogTitle": "Privacy Policy \u2014 LumenLingo"
    },
    "breadcrumb": "Privacy Policy",
    "hero": {
        "heading": "Privacy Policy",
        "subtitle": "Your privacy matters deeply to us. Here\u2019s exactly how we handle your data across the LumenLingo app and website \u2014 in plain English, not legal jargon."
    },
    "overview": {
        "heading": "Overview",
        "p1": "LumenShore Ltd (\u201cLumenShore\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d), company number 09607326, registered at Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA, operates the LumenLingo mobile application (the \u201cApp\u201d) and the lumenlingo.com website (the \u201cWebsite\u201d). This Privacy Policy explains how we collect, use, store, and protect information when you use either platform.",
        "p2": "We built LumenLingo with a privacy-first architecture. On the iOS app, your learning data is processed and stored on your device and in your personal iCloud account \u2014 not on our servers. On the website, we collect minimal data necessary to operate the service and improve your experience. We believe your data is yours, and it should stay that way.",
        "p3": "This policy is organised into two sections \u2014 Website and iOS App \u2014 so you can quickly find the information relevant to you."
    },
    "websiteData": {
        "heading": "Website Data Collection",
        "intro": "When you visit lumenlingo.com, we may collect the following data:",
        "li1": "<b>Email address</b> \u2014 if you sign up for our newsletter or join the waitlist. We collect your email solely to send you product updates and launch notifications. You can unsubscribe at any time.",
        "li2": "<b>Language preference</b> \u2014 if you join the waitlist, we record which language you\u2019re interested in to tailor future communications.",
        "li3": "<b>Campaign attribution (UTM parameters)</b> \u2014 we capture UTM parameters (source, medium, campaign) from URLs in your browser\u2019s sessionStorage to understand which marketing channels are effective. This data is not tied to your identity and is cleared when you close your browser tab.",
        "li4": "<b>Anonymous page views</b> \u2014 we use Vercel Analytics, a cookie-free, privacy-respecting analytics service, to count page visits. No personal data is collected, no cookies are set, and no individual users are identified.",
        "li5": "<b>Anonymous performance metrics</b> \u2014 we use Vercel Speed Insights to measure page load times and core web vitals. This data is fully anonymous and helps us keep the website fast.",
        "li6": "<b>Error data and session replays</b> \u2014 we use Sentry for error monitoring. With your consent, Sentry may record session replays to help us diagnose and fix bugs. See the \u2018Sentry Session Replay\u2019 section below for full details.",
        "li7": "<b>IP addresses</b> \u2014 your IP address is processed transiently by our API routes for rate limiting (to prevent abuse). IP addresses are not stored or logged by us."
    },
    "sentryReplay": {
        "heading": "Sentry Session Replay",
        "p1": "We use Sentry (operated by Functional Software, Inc.) for error monitoring on our website. Sentry\u2019s session replay feature records page interactions (clicks, scrolls, navigation) to help us reproduce and fix bugs.",
        "p2": "<b>Sampling rates:</b> Session replays are captured for approximately 0.1% of normal browsing sessions. When an error occurs, the replay capture rate increases to 100% for that session only \u2014 this helps us understand exactly what led to the bug.",
        "p3": "<b>What is captured:</b> Page navigation, clicks, scrolls, and screen content. All text inputs in forms (such as newsletter and waitlist fields) are masked to protect your privacy. Media content is blocked from capture.",
        "p4": "<b>What is sent:</b> Replay data is transmitted to Sentry\u2019s servers in the United States. It is retained according to Sentry\u2019s data retention policy (typically 90 days).",
        "p5": "<b>Your control:</b> Session replays are only active if you have given consent via our cookie consent banner. You can change your preference at any time."
    },
    "vercelAnalytics": {
        "heading": "Vercel Analytics & Speed Insights",
        "p1": "We use Vercel Analytics and Vercel Speed Insights on our website. These services are privacy-focused by design:",
        "li1": "<b>No cookies</b> \u2014 Vercel Analytics does not set any cookies on your device.",
        "li2": "<b>No personal data</b> \u2014 no IP addresses, device fingerprints, or user identifiers are collected.",
        "li3": "<b>Aggregate only</b> \u2014 we see total page view counts and performance metrics, but we cannot identify individual visitors.",
        "p2": "Both services are operated by Vercel Inc. Data is processed on Vercel\u2019s infrastructure. See <vercelPrivacy>Vercel\u2019s Privacy Policy</vercelPrivacy> for more details."
    },
    "customEvents": {
        "heading": "Custom Analytics Events",
        "intro": "In addition to page views, we track the following anonymised events through Vercel Analytics to understand how visitors use our website. No personal data is attached to these events:",
        "li1": "<b>app_store_click</b> \u2014 when a visitor clicks an App Store download link (records link location on the page)",
        "li2": "<b>pricing_view</b> \u2014 when a visitor views the pricing page",
        "li3": "<b>pricing_cta_click</b> \u2014 when a visitor clicks a pricing call-to-action button (records which tier)",
        "li4": "<b>blog_post_read</b> \u2014 when a visitor reads most of a blog post (records the post slug and title)",
        "li5": "<b>feature_section_view</b> \u2014 when a visitor views a feature section on the homepage",
        "li6": "<b>newsletter_signup</b> \u2014 when a visitor signs up for the newsletter (records the page location, not the email)",
        "li7": "<b>demo_started</b> \u2014 when a visitor starts the interactive flashcard demo",
        "li8": "<b>demo_completed</b> \u2014 when a visitor completes the demo (records correct/total scores)",
        "li9": "<b>demo_cta_click</b> \u2014 when a visitor clicks a call-to-action after completing the demo",
        "li10": "<b>page_not_found</b> \u2014 when a visitor lands on a 404 page (records the path)",
        "li11": "<b>error_page_view</b> \u2014 when a visitor sees an error page (records the error message)"
    },
    "serviceWorker": {
        "heading": "Offline Caching (Service Worker)",
        "p1": "Our website uses a Service Worker to cache static assets (HTML pages, CSS stylesheets, JavaScript bundles, images, and fonts) on your device. This enables faster page loads on repeat visits and limited offline access.",
        "p2": "The Service Worker cache is stored entirely on your device and contains no personal data. You can clear it at any time through your browser\u2019s settings (Clear site data). No cached data is sent back to our servers."
    },
    "appData": {
        "heading": "iOS App Data Collection",
        "intro": "The LumenLingo iOS app collects minimal data necessary to provide a great learning experience:",
        "li1": "<b>Learning progress data</b> \u2014 flashcard mastery levels, practice scores, streaks, XP, and session history. This data is stored locally on your device and synced via iCloud.",
        "li2": "<b>App preferences</b> \u2014 your selected language pairs, soundscape preferences, visual background choices, and tier selection. Stored on-device and synced via iCloud.",
        "li3": "<b>Subscription status</b> \u2014 your membership tier, managed entirely by Apple through the App Store. We receive a subscription status from Apple but do not process payment information.",
        "li4": "<b>Anonymous analytics</b> \u2014 we may collect aggregated, non-identifiable usage metrics (such as which features are most popular) to improve the app. No personal data is included."
    },
    "whatWeDontCollect": {
        "heading": "What We Don\u2019t Collect",
        "intro": "Across both our app and website, we want to be clear about what we <b>never</b> collect or do:",
        "li1": "No location data or GPS coordinates",
        "li2": "No contacts, photos, or access to other apps on your device",
        "li3": "No payment or credit card information (Apple handles all app billing)",
        "li4": "No advertising identifiers or tracking pixels",
        "li5": "No data sold or shared with third-party advertisers \u2014 ever",
        "li6": "No personal data shared with AI model training services"
    },
    "legalBasis": {
        "heading": "Legal Basis for Processing",
        "intro": "Under GDPR and UK GDPR, we process personal data only when we have a lawful basis. Here is the legal basis for each type of data we handle:",
        "consentHeading": "Consent (GDPR Art. 6(1)(a))",
        "consentLi1": "<b>Newsletter signup</b> \u2014 you actively provide your email and opt in to receive updates",
        "consentLi2": "<b>Waitlist signup</b> \u2014 you actively provide your email and language preference",
        "consentLi3": "<b>Sentry session replay</b> \u2014 replays are only captured after you give explicit consent via our cookie banner",
        "legitimateHeading": "Legitimate Interest (GDPR Art. 6(1)(f))",
        "legitimateLi1": "<b>Vercel Analytics</b> \u2014 anonymous, cookie-free page view counting to improve our website. Our interest in understanding site usage is balanced against minimal privacy impact (no PII collected)",
        "legitimateLi2": "<b>Sentry error monitoring</b> \u2014 collecting error diagnostics to maintain service reliability. No user behaviour is captured without consent; only crash and error data is collected under this basis",
        "legitimateLi3": "<b>Rate limiting (IP address processing)</b> \u2014 preventing abuse of our API endpoints. IP addresses are processed transiently and not stored",
        "contractHeading": "Contract Performance (GDPR Art. 6(1)(b))",
        "contractLi1": "<b>iOS app learning data</b> \u2014 processing your learning progress is necessary to deliver the language-learning service you use",
        "contractLi2": "<b>iCloud sync</b> \u2014 syncing your progress across devices is a core part of the service",
        "contractLi3": "<b>Subscription management</b> \u2014 verifying your tier to provide the appropriate features"
    },
    "dataFlow": {
        "heading": "Where Your Data Goes",
        "intro": "Here is a plain-English summary of where your data is stored and processed:",
        "li1": "<b>Your device</b> \u2014 all iOS app learning data, preferences, and progress are stored locally on your iPhone or iPad using Apple\u2019s SwiftData framework",
        "li2": "<b>Your iCloud account</b> \u2014 learning data syncs across your Apple devices via your personal iCloud account, encrypted by Apple. We have no access to this data",
        "li3": "<b>Vercel (website hosting)</b> \u2014 our website is hosted on Vercel\u2019s global edge network. Anonymous analytics data is processed by Vercel. Vercel\u2019s servers are primarily located in the United States with edge nodes worldwide",
        "li4": "<b>Sentry (error monitoring)</b> \u2014 error logs and (with your consent) session replay data are sent to Sentry\u2019s servers in the United States. Sentry processes this data under their DPA with Standard Contractual Clauses",
        "li5": "<b>Apple (App Store & iCloud)</b> \u2014 subscription management and iCloud sync are handled by Apple\u2019s global infrastructure",
        "noOtherParties": "Your data is not sent to any other third parties. We do not use Google Analytics, Facebook SDK, or any advertising networks."
    },
    "howWeUse": {
        "heading": "How We Use Your Information",
        "intro": "The limited data we handle is used solely to:",
        "li1": "<b>Personalise your learning</b> \u2014 spaced repetition scheduling, difficulty adaptation, and progress tracking depend on your learning history.",
        "li2": "<b>Sync your progress</b> \u2014 iCloud sync ensures your data follows you across all your Apple devices.",
        "li3": "<b>Manage your subscription</b> \u2014 we verify your membership tier to unlock the appropriate features.",
        "li4": "<b>Improve the app and website</b> \u2014 anonymous aggregate data helps us understand which features are valuable and where to focus development.",
        "li5": "<b>Communicate with you</b> \u2014 if you signed up for our newsletter or waitlist, we use your email to send product updates. You can unsubscribe at any time.",
        "li6": "<b>Diagnose and fix bugs</b> \u2014 Sentry error data (and session replays with your consent) help us identify and resolve issues quickly."
    },
    "dataStorage": {
        "heading": "Data Storage & Security",
        "intro": "LumenLingo uses a privacy-first, on-device architecture:",
        "li1": "<b>On-device storage</b> \u2014 all learning data is stored locally using Apple\u2019s SwiftData framework, protected by your device\u2019s built-in encryption.",
        "li2": "<b>iCloud sync</b> \u2014 data syncs between your devices via your personal iCloud account, encrypted end-to-end by Apple. We do not have access to your iCloud data.",
        "li3": "<b>No external servers</b> \u2014 LumenLingo does not maintain servers that store your personal data from the iOS app. There is no cloud database for us to secure (or breach).",
        "li4": "<b>App Store security</b> \u2014 subscription management is handled by Apple\u2019s secure infrastructure.",
        "li5": "<b>Website security</b> \u2014 lumenlingo.com uses HTTPS encryption, strict Content Security Policy headers, and rate-limited API endpoints to protect your data."
    },
    "thirdParty": {
        "heading": "Third-Party Services",
        "intro": "LumenLingo integrates with a limited number of third-party services:",
        "li1": "<b>Apple App Store & iCloud</b> \u2014 for app distribution, subscription management, payment processing, and data synchronisation. Subject to <applePrivacy>Apple\u2019s Privacy Policy</applePrivacy>.",
        "li2": "<b>Vercel</b> \u2014 for website hosting, anonymous analytics, and performance monitoring. Cookie-free, GDPR-compliant. Subject to <vercelPrivacy>Vercel\u2019s Privacy Policy</vercelPrivacy>.",
        "li3": "<b>Sentry</b> \u2014 for website error monitoring and (with consent) session replay. Subject to <sentryPrivacy>Sentry\u2019s Privacy Policy</sentryPrivacy>.",
        "noAdNetworks": "We do not use Google Analytics, Facebook SDK, or any advertising networks."
    },
    "childrensPrivacy": {
        "heading": "Children\u2019s Privacy",
        "p1": "LumenLingo is designed for users aged 13 and older. We do not knowingly collect personal information from children under 13 (or the applicable minimum age in your jurisdiction, which may be higher \u2014 for example, 16 in Germany and the Netherlands).",
        "p2": "The iOS app does not require account registration and stores data locally, so no personal information is transmitted to us from app users of any age. On the website, we do not knowingly accept newsletter or waitlist signups from anyone under 13.",
        "p3": "Parents and guardians can manage or delete the app and its data at any time through standard iOS device management. If you believe a child has provided personal data to us, please contact us at support@lumenlingo.com and we will delete it promptly."
    },
    "dataRetention": {
        "heading": "Data Retention & Deletion",
        "intro": "We only keep your data for as long as necessary:",
        "websiteHeading": "Website Data",
        "websiteLi1": "<b>Newsletter/waitlist emails</b> \u2014 retained until you unsubscribe, plus up to 30 days to process your removal.",
        "websiteLi2": "<b>Sentry error logs</b> \u2014 retained by Sentry for 90 days, then automatically deleted.",
        "websiteLi3": "<b>Sentry session replays</b> \u2014 retained by Sentry for 90 days, then automatically deleted.",
        "websiteLi4": "<b>Vercel Analytics</b> \u2014 retention per Vercel\u2019s data retention policy (aggregated, no PII).",
        "appHeading": "iOS App Data",
        "appLi1": "<b>Reset progress</b> \u2014 use the in-app Settings \u2192 Reset Progress option to clear all learning data.",
        "appLi2": "<b>Delete the app</b> \u2014 uninstalling LumenLingo removes all locally stored data.",
        "appLi3": "<b>iCloud data</b> \u2014 you can manage iCloud storage through your device\u2019s Settings \u2192 Apple ID \u2192 iCloud \u2192 Manage Storage.",
        "appLi4": "<b>Subscription</b> \u2014 cancel your subscription through Settings \u2192 Apple ID \u2192 Subscriptions. No data is retained by us after cancellation."
    },
    "yourRights": {
        "heading": "Your Rights",
        "intro": "Depending on your location, you may have additional rights regarding your data:",
        "gdprHeading": "Under GDPR (European Economic Area & UK)",
        "gdprLi1": "Right to access your data \u2014 app data is on your device and iCloud; for website data, contact us.",
        "gdprLi2": "Right to rectification \u2014 edit app preferences directly; for website data, contact us.",
        "gdprLi3": "Right to erasure \u2014 reset app progress, delete the app, or contact us to remove your email from our lists.",
        "gdprLi4": "Right to data portability \u2014 your app data is stored in standard formats in iCloud. Contact us for website data export.",
        "gdprLi5": "Right to object \u2014 contact us to opt out of anonymous analytics or to object to processing based on legitimate interest.",
        "gdprLi6": "Right to restrict processing \u2014 contact us to request that we limit how we process your data.",
        "gdprLi7": "Right to lodge a complaint \u2014 you can complain to the ICO (Information Commissioner\u2019s Office) at ico.org.uk or your local supervisory authority.",
        "ccpaHeading": "Under CCPA (California)",
        "ccpaLi1": "Right to know what data is collected \u2014 detailed above.",
        "ccpaLi2": "Right to delete \u2014 reset app progress, delete the app, or contact us to remove website data.",
        "ccpaLi3": "Right to opt out \u2014 we do not sell or share personal information for cross-context behavioural advertising.",
        "ccpaLi4": "Non-discrimination \u2014 you will not be treated differently for exercising your rights.",
        "exerciseRights": "To exercise any of these rights, email us at support@lumenlingo.com. We will respond within 30 days (or sooner where required by law). We may need to verify your identity before processing certain requests."
    },
    "policyUpdates": {
        "heading": "Policy Updates",
        "p1": "We may update this Privacy Policy from time to time, typically to reflect changes in our services or legal requirements. When we make significant changes, we\u2019ll update the \u201cLast updated\u201d date and version number at the top of this page.",
        "p2": "We encourage you to review this page periodically. Continued use of LumenLingo after changes constitutes acceptance of the updated policy.",
        "versionHistory": "Version History",
        "v2": "<b>v2.0</b> (23 March 2026) \u2014 Extended policy to cover lumenlingo.com website data collection, added Sentry session replay disclosure, Vercel Analytics disclosure, legal basis for processing, data flow section, and service worker caching details.",
        "v1": "<b>v1.0</b> (22 March 2026) \u2014 Initial privacy policy covering the LumenLingo iOS app."
    },
    "contactUs": {
        "heading": "Contact Us",
        "intro": "If you have questions about this Privacy Policy, your data, or want to exercise your rights, please reach out:",
        "email": "<b>Email</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Company</b>: LumenShore Ltd, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA",
        "companyNumber": "<b>Company Number</b>: 09607326 (England and Wales)",
        "vatNumber": "<b>VAT Number</b>: GB 270411929",
        "responseTime": "We typically respond within 48 hours and within 30 days for formal data rights requests."
    }
}

def main():
    data = json.loads(MESSAGES_PATH.read_text("utf-8"))

    # Update Legal section
    data["Legal"]["lastUpdated"] = "Last updated: 23 March 2026"
    data["Legal"]["version"] = "Version 2.0"

    # Replace Privacy section
    data["Privacy"] = NEW_PRIVACY

    MESSAGES_PATH.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print("✓ Updated en.json Privacy section and Legal metadata")


if __name__ == "__main__":
    main()

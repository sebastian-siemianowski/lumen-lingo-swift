export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Is LumenLingo really free to start?',
    answer:
      'Absolutely. The Free tier gives you 3 language pairs, all 3 practice modes at Beginner difficulty, and 30 minutes of daily practice — no credit card required, no trial expiration. You can learn at your own pace for as long as you like.',
  },
  {
    question: "What's included in the free tier?",
    answer:
      "Free users get English↔Spanish, English↔French, and English↔German language pairs, all three practice modes (Flashcards, Grammar Quizzes, Word Builder) at Beginner difficulty, 50-card flashcard decks, the Lagoon Nebula background, and basic progress tracking. It's a generous starting point.",
  },
  {
    question: 'How does monthly billing work?',
    answer:
      'All subscriptions are managed through the Apple App Store. You choose your tier in the app, confirm the purchase via Face ID or your Apple ID, and billing happens automatically each month. Apple handles all payment processing securely.',
  },
  {
    question: 'How do I upgrade or downgrade my tier?',
    answer:
      "You can change your tier at any time from the Membership screen in the app or through your App Store subscription settings. Upgrades take effect immediately. Downgrades take effect at the end of your current billing period, so you don't lose paid access early.",
  },
  {
    question: 'Is there a free trial?',
    answer:
      "Yes! New users can try Royal-level access — the highest tier with every feature unlocked — free for 14 days. You'll experience all 25+ language pairs, 12 soundscapes, all visual backgrounds, and the 2× XP multiplier. Cancel anytime during the trial and you won't be charged.",
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'LumenLingo uses Apple App Store subscriptions, so any payment method linked to your Apple ID works — including credit/debit cards, Apple Pay, and App Store gift card balance. Payment processing is handled entirely by Apple.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      "Yes, you can cancel at any time with no penalties or fees. Go to Settings → Apple ID → Subscriptions on your iPhone, find LumenLingo, and tap Cancel. You'll keep your current tier's access until the end of your billing period.",
  },
  {
    question: 'Do I lose my progress if I downgrade?',
    answer:
      'Never. All your learning progress, streaks, XP, and mastery data are preserved regardless of tier changes. If you downgrade, certain premium features become locked, but your data stays intact. Upgrade again anytime to pick up right where you left off.',
  },
  {
    question: 'Are there family or student discounts?',
    answer:
      "We're exploring group and educational pricing options. For now, the Free tier offers generous access for students and casual learners, and the 14-day Royal trial gives everyone a chance to experience the full app before committing.",
  },
  {
    question: 'How does offline mode work?',
    answer:
      'Offline mode (Pro tier and above) downloads your active flashcard decks and practice content to your device. You can study without an internet connection — on the tube, on a plane, anywhere. Progress syncs automatically when you reconnect.',
  },
];

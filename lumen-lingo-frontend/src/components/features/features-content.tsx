'use client';

import { Container } from '@/components/ui';
import { FeatureSection } from './feature-section';
import { TableOfContents } from './table-of-contents';

/* ─── Screenshot placeholders (gradient + icon) ─── */
function ScreenPlaceholder({
  gradient,
  icon,
  label,
}: {
  gradient: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 p-8 ${gradient}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
        {icon}
      </div>
      <p className="text-sm font-medium text-white/60">{label}</p>
      {/* Skeleton UI lines */}
      <div className="mt-2 flex w-full max-w-[200px] flex-col gap-2">
        <div className="h-2 w-full rounded-full bg-white/10" />
        <div className="h-2 w-3/4 rounded-full bg-white/8" />
        <div className="h-2 w-1/2 rounded-full bg-white/6" />
      </div>
    </div>
  );
}

/* ─── SVG Icons for each feature ─── */
const icons = {
  flashcards: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="6" y="10" width="36" height="28" rx="6" className="stroke-violet" strokeWidth="2" />
      <rect x="10" y="14" width="28" height="20" rx="3" className="fill-violet/10 stroke-violet/40" strokeWidth="1.5" />
      <path d="M20 24l6-4v8l-6-4z" className="fill-violet" />
      <circle cx="33" cy="19" r="2.5" className="fill-cyan/60" />
      <path d="M14 30h20" className="stroke-violet/30" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  spacedRepetition: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <circle cx="24" cy="24" r="18" className="stroke-cyan" strokeWidth="2" />
      <path d="M24 12c6.627 0 12 5.373 12 12" className="stroke-cyan" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="5" className="fill-cyan/15 stroke-cyan" strokeWidth="1.5" />
      <path d="M24 19v5l3.5 3.5" className="stroke-cyan" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 15l2 2M33 15l-2 2M15 33l2-2M33 33l-2-2" className="stroke-cyan/30" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  practice: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="6" y="8" width="14" height="14" rx="3" className="stroke-violet" strokeWidth="2" />
      <rect x="28" y="8" width="14" height="14" rx="3" className="stroke-cyan" strokeWidth="2" />
      <rect x="6" y="28" width="14" height="14" rx="3" className="stroke-amber" strokeWidth="2" />
      <rect x="28" y="28" width="14" height="14" rx="3" className="stroke-violet" strokeWidth="2" />
      <text x="13" y="18" textAnchor="middle" className="fill-violet text-[8px] font-bold">FC</text>
      <text x="35" y="18" textAnchor="middle" className="fill-cyan text-[8px] font-bold">GQ</text>
      <text x="13" y="38" textAnchor="middle" className="fill-amber text-[8px] font-bold">WB</text>
      <path d="M35 33l-3 3 3 3" className="stroke-violet/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  soundscapes: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <path d="M8 34c4-8 10-18 16-18s12 10 16 18" className="stroke-violet" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 30c3-6 7-12 12-12s9 6 12 12" className="stroke-violet/40" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.5" className="fill-amber/60" />
      <circle cx="32" cy="13" r="2" className="fill-cyan/50" />
      <circle cx="24" cy="10" r="1.5" className="fill-violet/60" />
      <path d="M18 38h12" className="stroke-violet/20" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  orbs: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <circle cx="24" cy="24" r="16" className="stroke-amber/40" strokeWidth="1" />
      <circle cx="24" cy="24" r="11" className="fill-amber/5 stroke-amber" strokeWidth="2">
        <animate attributeName="r" values="11;12;11" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="24" r="6" className="fill-amber/10 stroke-amber/40" strokeWidth="1">
        <animate attributeName="r" values="6;7;6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="24" r="2.5" className="fill-amber/30" />
    </svg>
  ),
  progress: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="6" y="10" width="36" height="28" rx="5" className="stroke-violet" strokeWidth="2" />
      <path d="M12 32V22" className="stroke-violet/40" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 32V17" className="stroke-cyan" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 32V20" className="stroke-violet" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 32V15" className="stroke-amber" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 32V13" className="stroke-violet" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  languages: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <circle cx="24" cy="24" r="18" className="stroke-cyan/30" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="10" ry="18" className="stroke-cyan/40" strokeWidth="1" />
      <path d="M6 24h36M8 15h32M8 33h32" className="stroke-cyan/20" strokeWidth="1" />
      <text x="24" y="20" textAnchor="middle" className="fill-cyan text-[6px] font-bold">ES</text>
      <text x="15" y="28" textAnchor="middle" className="fill-violet text-[5px] font-bold">FR</text>
      <text x="33" y="28" textAnchor="middle" className="fill-amber text-[5px] font-bold">JP</text>
      <text x="24" y="36" textAnchor="middle" className="fill-violet text-[5px] font-bold">DE</text>
    </svg>
  ),
  tiers: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <path d="M24 6l4 8 8 1.2-5.8 5.6L31.6 29 24 25l-7.6 4 1.4-8.2L12 15.2l8-1.2z" className="stroke-amber" strokeWidth="2" fill="none" />
      <path d="M24 32v10" className="stroke-amber/40" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 38h12" className="stroke-amber/30" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="18" r="4" className="fill-amber/15" />
    </svg>
  ),
};

/* ─── Feature data ─── */
const tocItems = [
  { id: 'flashcards', label: 'Immersive Flashcards' },
  { id: 'spaced-repetition', label: 'Smart Spaced Repetition' },
  { id: 'practice-modes', label: 'Practice Modes' },
  { id: 'soundscapes', label: 'Soundscapes' },
  { id: 'breathing-orbs', label: 'Breathing Orbs & Visuals' },
  { id: 'progress', label: 'Progress & Analytics' },
  { id: 'languages', label: 'Language Pairs' },
  { id: 'membership', label: 'Membership Tiers' },
];

export function FeaturesContent() {
  return (
    <Container>
      <div className="grid gap-8 xl:grid-cols-[220px_1fr]">
        {/* Sticky sidebar */}
        <TableOfContents items={tocItems} />

        {/* Feature sections */}
        <div>
          {/* ── 1. Immersive Flashcards ── */}
          <FeatureSection
            id="flashcards"
            icon={icons.flashcards}
            title="Immersive Flashcards"
            tint="violet"
            description={[
              'LumenLingo\'s flashcard experience is unlike anything else. Each card is a glass-morphic surface that responds to touch with silky-smooth gestures — swipe right for correct, left for incorrect, and watch the card animate with satisfying physics-based feedback.',
              'Choose from multiple card styles — Glass, Petal, and Crystal — each offering a distinct visual personality. Cards display source and target language text with pronunciation guides, and smart colour coding reinforces your memory through visual association.',
              'Every interaction is deliberate. The flip animation reveals the answer with a graceful 3D rotation. Colour-coded borders flash green for correct and red for incorrect. Sound feedback complements each gesture, creating a multi-sensory learning loop.',
            ]}
            capabilities={[
              'Swipe gestures with physics-based spring animations',
              'Three card styles: Glass, Petal, Crystal',
              'Instant colour-coded feedback on every answer',
              'Pronunciation guides for non-Latin scripts',
              'Multi-sensory feedback: visual + audio',
              'Customisable deck sizes per tier',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-violet/20 via-surface to-violet/10"
                icon={<span className="text-4xl">🃏</span>}
                label="Flashcard View"
              />
            }
          />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 2. Smart Spaced Repetition ── */}
          <FeatureSection
            id="spaced-repetition"
            icon={icons.spacedRepetition}
            title="Smart Spaced Repetition"
            tint="cyan"
            reversed
            description={[
              'LumenLingo\'s recommendation engine tracks your performance across every card and adjusts review intervals intelligently. Cards you struggle with appear more frequently; cards you\'ve mastered gracefully fade to longer intervals.',
              'The system organises vocabulary by mastery levels — New, Learning, Familiar, and Mastered — giving you clear visibility into your progress. Category-based scheduling ensures you never neglect a topic area.',
              'Unlike rigid SRS systems, LumenLingo adapts in real time. Miss a card after a long break? It drops back to a shorter interval. Nail five in a row? It promotes the card faster. The algorithm works with your brain, not against it.',
            ]}
            capabilities={[
              'Adaptive intervals based on performance',
              'Four mastery levels: New → Learning → Familiar → Mastered',
              'Category-based smart scheduling',
              'Real-time difficulty adjustment',
              'Visual mastery indicators on every card',
              'Performance analytics per category',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-cyan/20 via-surface to-cyan/10"
                icon={<span className="text-4xl">🧠</span>}
                label="Smart Scheduling"
              />
            }
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 3. Practice Modes ── */}
          <FeatureSection
            id="practice-modes"
            icon={icons.practice}
            title="3 Distinct Practice Modes"
            tint="violet"
            description={[
              'Variety is the engine of engagement. LumenLingo offers three fundamentally different practice modes — each targeting a different cognitive skill — so your sessions never feel repetitive.',
              'Flashcard drilling builds recognition speed. Grammar quizzes test your understanding of sentence structure and word usage. Word Builder challenges you to construct words letter by letter, strengthening spelling and recall simultaneously.',
              'Each mode supports three difficulty levels — Beginner, Intermediate, and Advanced — progressively unlocked through your tier. As you advance, questions become more nuanced: fill-in-the-blank, sentence reordering, and contextual usage.',
            ]}
            capabilities={[
              'Flashcard drilling for rapid recognition',
              'Grammar quizzes with contextual questions',
              'Word Builder letter-construction challenges',
              'Three difficulty levels per mode',
              'Progress tracked independently per mode',
              'Session customisation: length, focus area, language pair',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-violet/15 via-surface to-cyan/10"
                icon={<span className="text-4xl">🎯</span>}
                label="Practice Modes"
              />
            }
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 4. Soundscapes ── */}
          <FeatureSection
            id="soundscapes"
            icon={icons.soundscapes}
            title="12 Ambient Soundscapes"
            tint="violet"
            reversed
            description={[
              'Transform your study environment with 12 handcrafted ambient soundscapes spanning four categories: Cozy, Nature, Atmospheric, and Travel. Each soundscape is a carefully layered audio composition designed to enhance focus and reduce distractions.',
              'Study in a Parisian café with the gentle murmur of conversation and clinking cups. Or drift into deep focus with the cosmic hum of a space station. Every soundscape is mixed at optimal volume levels to sit beneath your learning without competing for attention.',
              'Research shows that consistent ambient audio creates environmental context cues that boost retention. When you study with the same soundscape, your brain associates the audio signature with the learning state, making recall easier.',
            ]}
            capabilities={[
              'Cozy: Coffee Shop, Library, Fireplace',
              'Nature: Rainforest, Ocean Waves, Mountain Stream',
              'Atmospheric: Deep Space, Northern Lights, Cosmic Nebula',
              'Travel: Paris Café, Tokyo Streets, London Rain',
              'Volume balancing with system audio',
              'Tier-gated access (1 free → 8 Elite → 12 Royal)',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-violet/20 via-surface to-amber/10"
                icon={<span className="text-4xl">🎵</span>}
                label="Soundscapes"
              />
            }
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 5. Breathing Orbs & Visuals ── */}
          <FeatureSection
            id="breathing-orbs"
            icon={icons.orbs}
            title="Breathing Orbs & Visual Backgrounds"
            tint="amber"
            description={[
              'LumenLingo is the only language app that treats visual wellness as a core feature. Breathing Orbs are calming, animated backgrounds that gently pulse in rhythm — creating a meditative atmosphere that reduces learning anxiety and sharpens focus.',
              'Choose from 6 city-inspired colour schemes, each evoking the palette of a real-world location. Beyond orbs, explore Quantum Flow scenes — dynamic particle systems that create mesmerising visual flow — and Nebula Drift presets with real-time cosmic animations rendered in Metal.',
              'These aren\'t just eye candy. Studies in environmental psychology show that calming visual stimuli reduce cortisol levels and improve working memory. Every visual background in LumenLingo is designed with this research in mind.',
            ]}
            capabilities={[
              '6 city-inspired Breathing Orb colour schemes',
              '4–6 Quantum Flow particle scenes',
              '4–6 Nebula Drift cosmic presets',
              'Real-time Metal shader rendering',
              'Respects reduced-motion preferences',
              'Tier-gated access with progressive unlocking',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-amber/15 via-surface to-violet/15"
                icon={<span className="text-4xl">🔮</span>}
                label="Breathing Orbs"
              />
            }
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 6. Progress & Analytics ── */}
          <FeatureSection
            id="progress"
            icon={icons.progress}
            title="Progress & Analytics"
            tint="cyan"
            reversed
            description={[
              'LumenLingo\'s progress system turns learning into a visible journey. An XP system rewards consistent practice — earn points for every correct answer, streak bonuses for consecutive days, and multipliers based on your membership tier.',
              'Track your per-game statistics across all three practice modes: accuracy rates, average response times, most-practised categories, and streaks. Beautiful visualisations make your data easy to understand at a glance.',
              'Daily goals keep you accountable. Set a target practice time or card count, and watch your daily ring fill as you make progress. Monthly reports (Elite and Royal tiers) summarise your growth with detailed breakdowns by language pair and difficulty level.',
            ]}
            capabilities={[
              'XP system with tier-based multipliers (1×–2×)',
              'Streak tracking with daily goals',
              'Per-mode accuracy and speed analytics',
              'Category mastery breakdowns',
              'Beautiful progress visualisations',
              'Monthly reports (Elite/Royal)',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-cyan/20 via-surface to-violet/10"
                icon={<span className="text-4xl">📊</span>}
                label="Progress Dashboard"
              />
            }
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 7. Language Pairs ── */}
          <FeatureSection
            id="languages"
            icon={icons.languages}
            title="25+ Language Pairs"
            tint="cyan"
            description={[
              'LumenLingo supports 9 languages — English, Spanish, French, German, Japanese, Chinese, Arabic, Polish, and Italian — in over 25 bidirectional pair combinations. Learn Spanish from English, or flip it around and learn English from Spanish.',
              'Each language pair comes with a curated vocabulary deck covering essential categories: greetings, food, travel, business, emotions, and more. Non-Latin scripts include romanisation and pronunciation guides to lower the barrier to entry.',
              'Language pairs are tier-gated: Free users get 3 core pairs (English↔Spanish, French, German), Pro unlocks 7 pairs including Japanese and Arabic, and Elite/Royal unlock the full catalogue of 25+ pairs.',
            ]}
            capabilities={[
              '9 languages: ES, FR, DE, JP, ZH, AR, PL, IT, EN',
              '25+ bidirectional pair combinations',
              'Curated vocabulary per category',
              'Romanisation for non-Latin scripts',
              'Tier-gated progressive unlocking',
              'Bidirectional learning support',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-cyan/15 via-surface to-amber/10"
                icon={<span className="text-4xl">🌍</span>}
                label="Language Selection"
              />
            }
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 8. Membership Tiers ── */}
          <FeatureSection
            id="membership"
            icon={icons.tiers}
            title="Membership Tiers"
            tint="amber"
            reversed
            description={[
              'LumenLingo offers four membership tiers — Free, Pro, Elite, and Royal — each designed for a different stage of your learning journey. Start with a generous free tier and upgrade as your ambitions grow.',
              'Every tier unlocks progressively more language pairs, soundscapes, visual backgrounds, and advanced features. Pro adds unlimited practice time and offline mode. Elite opens all language pairs and advanced difficulty. Royal gives you everything — including deep analytics, shareable results, and a 2× XP multiplier.',
              'All tiers are managed through the App Store with simple monthly billing. Try Royal-level access free for 14 days to experience everything LumenLingo has to offer.',
            ]}
            capabilities={[
              'Free tier with 3 language pairs',
              'Pro: unlimited practice + offline mode',
              'Elite: all languages + advanced difficulty',
              'Royal: everything + 2× XP + deep analytics',
              '14-day free trial for Royal features',
              'Simple App Store subscription management',
            ]}
            screenshot={
              <ScreenPlaceholder
                gradient="bg-gradient-to-br from-amber/20 via-surface to-violet/15"
                icon={<span className="text-4xl">👑</span>}
                label="Membership Tiers"
              />
            }
          />
        </div>
      </div>
    </Container>
  );
}

'use client';

import { Container } from '@/components/ui';
import { FeatureSection } from './feature-section';
import { TableOfContents } from './table-of-contents';
import {
  FlashcardIcon,
  SpacedRepetitionIcon,
  PracticeModeIcon,
  SoundscapeIcon,
  BreathingOrbIcon,
  ProgressIcon,
  LanguagePairIcon,
  MembershipIcon,
} from '@/components/icons';

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

/* ─── Feature icons (Epic 1 icons at size 32) ─── */
const icons = {
  flashcards: <FlashcardIcon size={32} className="text-violet" />,
  spacedRepetition: <SpacedRepetitionIcon size={32} className="text-cyan" />,
  practice: <PracticeModeIcon size={32} className="text-violet" />,
  soundscapes: <SoundscapeIcon size={32} className="text-violet" />,
  orbs: <BreathingOrbIcon size={32} className="text-amber" />,
  progress: <ProgressIcon size={32} className="text-cyan" />,
  languages: <LanguagePairIcon size={32} className="text-cyan" />,
  tiers: <MembershipIcon size={32} className="text-amber" />,
};

/* ─── Feature data ─── */
const tocItems = [
  { id: 'flashcards', label: 'Immersive Flashcards', icon: <FlashcardIcon size={14} /> },
  { id: 'spaced-repetition', label: 'Smart Spaced Repetition', icon: <SpacedRepetitionIcon size={14} /> },
  { id: 'practice-modes', label: 'Practice Modes', icon: <PracticeModeIcon size={14} /> },
  { id: 'soundscapes', label: 'Soundscapes', icon: <SoundscapeIcon size={14} /> },
  { id: 'breathing-orbs', label: 'Breathing Orbs & Visuals', icon: <BreathingOrbIcon size={14} /> },
  { id: 'progress', label: 'Progress & Analytics', icon: <ProgressIcon size={14} /> },
  { id: 'languages', label: 'Language Pairs', icon: <LanguagePairIcon size={14} /> },
  { id: 'membership', label: 'Membership Tiers', icon: <MembershipIcon size={14} /> },
];

export function FeaturesContent() {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
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
                icon={<FlashcardIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<SpacedRepetitionIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<PracticeModeIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<SoundscapeIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<BreathingOrbIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<ProgressIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<LanguagePairIcon size={40} className="text-foreground-secondary" aria-hidden />}
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
                icon={<MembershipIcon size={40} className="text-foreground-secondary" aria-hidden />}
                label="Membership Tiers"
              />
            }
          />
        </div>
      </div>
    </Container>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { GlassCard, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';

interface FeatureSectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string[];
  capabilities: string[];
  screenshot: React.ReactNode;
  reversed?: boolean;
  tint?: 'violet' | 'cyan' | 'amber';
}

export function FeatureSection({
  id,
  icon,
  title,
  description,
  capabilities,
  screenshot,
  reversed = false,
  tint = 'violet',
}: FeatureSectionProps) {
  const accentColor = {
    violet: {
      iconBg: 'bg-violet/10',
      bullet: 'text-violet',
      bulletDot: 'bg-violet',
      borderGlow: 'border-violet/20',
    },
    cyan: {
      iconBg: 'bg-cyan/10',
      bullet: 'text-cyan',
      bulletDot: 'bg-cyan',
      borderGlow: 'border-cyan/20',
    },
    amber: {
      iconBg: 'bg-amber/10',
      bullet: 'text-amber',
      bulletDot: 'bg-amber',
      borderGlow: 'border-amber/20',
    },
  }[tint];

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div
        className={cn(
          'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
        )}
      >
        {/* Screenshot / Visual — first in DOM so it's on top on mobile */}
        <FadeIn
          direction={reversed ? 'left' : 'right'}
          delay={0.1}
          className={cn(!reversed && 'lg:order-2')}
        >
          <GlassCard tint={tint} hover={false} className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[--radius-card]">
              {screenshot}
            </div>
          </GlassCard>
        </FadeIn>

        {/* Text content */}
        <FadeIn direction={reversed ? 'right' : 'left'}>
          <div className="flex flex-col gap-6">
            {/* Icon + title */}
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl',
                  accentColor.iconBg,
                )}
              >
                {icon}
              </div>
              <Heading as="h2" className="font-display !text-2xl md:!text-3xl">
                {title}
              </Heading>
            </div>

            {/* Description paragraphs */}
            <div className="flex flex-col gap-4">
              {description.map((paragraph, i) => (
                <Text key={i} size="lg" colour="secondary" className="leading-relaxed">
                  {paragraph}
                </Text>
              ))}
            </div>

            {/* Capabilities list */}
            <ul className="mt-2 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <span
                    className={cn(
                      'mt-2 h-1.5 w-1.5 shrink-0 rounded-full',
                      accentColor.bulletDot,
                    )}
                  />
                  <Text as="span" size="sm" colour="secondary">
                    {capability}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

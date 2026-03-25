'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Container, GlassCard } from '@/components/ui';
import { WaitlistForm, ReferralShare, ConfettiBurst } from '@/components/early-access';
import { spring } from '@/lib/motion';

interface WaitlistResult {
  referralCode: string;
  position: number;
  total: number;
}

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);
  useEffect(() => {
    if (target <= 0) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);
  return value;
}

export function EarlyAccessHero() {
  const searchParams = useSearchParams();
  const referrer = searchParams.get('ref') ?? undefined;
  const [result, setResult] = useState<WaitlistResult | null>(null);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const animatedCount = useCountUp(waitlistCount ?? 0);

  useEffect(() => {
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then((d) => setWaitlistCount(d.total ?? 0))
      .catch(() => {});
  }, []);

  function handleSuccess(data: WaitlistResult) {
    setResult(data);
    setShowConfetti(true);
    setWaitlistCount(data.total);
    setTimeout(() => setShowConfetti(false), 3500);
  }

  return (
    <>
      {showConfetti && <ConfettiBurst />}

      <section className="relative min-h-screen min-h-[100dvh] overflow-hidden">
        {/* Cosmic background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-violet/8 blur-[120px]" />
          <div className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan/6 blur-[100px]" />
          <div className="absolute top-1/3 right-1/3 h-[300px] w-[300px] rounded-full bg-amber/5 blur-[80px]" />
        </div>

        <Container>
          <div className="flex min-h-screen min-h-[100dvh] flex-col items-center justify-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring.smooth}
              className="w-full max-w-lg text-center"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...spring.smooth, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-[--radius-pill] border border-violet/20 bg-violet/10 px-4 py-1.5 text-xs font-semibold text-violet"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
                </span>
                Early Access
              </motion.span>

              {/* Headline */}
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Be Among{' '}
                <span className="bg-gradient-to-r from-violet via-cyan to-violet bg-clip-text text-transparent">
                  the First
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
                LumenLingo is expanding. Join the list to get early access and exclusive launch offers.
              </p>

              {/* Social proof counter */}
              {waitlistCount !== null && waitlistCount > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 text-sm text-foreground-secondary"
                >
                  <span className="font-semibold text-foreground">{animatedCount.toLocaleString()}</span>{' '}
                  {waitlistCount === 1 ? 'learner' : 'learners'} already waiting
                </motion.p>
              )}

              {/* Form card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.smooth, delay: 0.2 }}
                className="mt-10"
              >
                <GlassCard className="gradient-border rounded-2xl p-6 sm:p-8">
                  <WaitlistForm onSuccess={handleSuccess} referrer={referrer} />
                  {result && (
                    <ReferralShare
                      referralCode={result.referralCode}
                      position={result.position}
                      total={result.total}
                    />
                  )}
                </GlassCard>
              </motion.div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-foreground-muted/70">
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Privacy protected
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                  </svg>
                  Free to join
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ─── Callout ────────────────────────────────────────────────────────
type CalloutVariant = 'info' | 'tip' | 'warning' | 'science' | 'check';

const calloutStyles: Record<
  CalloutVariant,
  { icon: string; border: string; bg: string; title: string }
> = {
  info: {
    icon: '💡',
    border: 'border-l-[--color-cyan]',
    bg: 'bg-[--color-cyan]/5',
    title: 'Did You Know?',
  },
  tip: {
    icon: '✨',
    border: 'border-l-[--color-violet]',
    bg: 'bg-[--color-violet]/5',
    title: 'Pro Tip',
  },
  warning: {
    icon: '⚠️',
    border: 'border-l-[--color-amber]',
    bg: 'bg-[--color-amber]/5',
    title: 'Important',
  },
  science: {
    icon: '🔬',
    border: 'border-l-[--color-cyan]',
    bg: 'bg-[--color-cyan]/5',
    title: 'The Science',
  },
  check: {
    icon: '✅',
    border: 'border-l-emerald-500',
    bg: 'bg-emerald-500/5',
    title: 'Key Finding',
  },
};

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}

export function Callout({ variant = 'info', title, children }: CalloutProps) {
  const style = calloutStyles[variant];
  return (
    <aside
      className={cn(
        'my-8 rounded-[--radius-card] border-l-4 p-6',
        style.border,
        style.bg,
      )}
      role="note"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg" aria-hidden="true">
          {style.icon}
        </span>
        <span className="font-display text-sm font-bold text-[--color-foreground]">
          {title ?? style.title}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-[--color-foreground-secondary]">
        {children}
      </div>
    </aside>
  );
}

// ─── Feature Highlight ──────────────────────────────────────────────
interface FeatureHighlightProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export function FeatureHighlight({
  title,
  icon = '🚀',
  children,
}: FeatureHighlightProps) {
  return (
    <div className="glass-card my-8 overflow-hidden rounded-[--radius-card] p-6">
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-[--radius-sm] bg-[--color-violet]/10 text-lg"
          aria-hidden="true"
        >
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold text-[--color-foreground]">
          {title}
        </h3>
      </div>
      <div className="text-sm leading-relaxed text-[--color-foreground-secondary]">
        {children}
      </div>
    </div>
  );
}

// ─── App Screenshot ─────────────────────────────────────────────────
interface AppScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

export function AppScreenshot({ src, alt, caption }: AppScreenshotProps) {
  return (
    <figure className="my-10">
      <div className="glass-card mx-auto max-w-sm overflow-hidden rounded-[24px] p-2">
        <div className="relative overflow-hidden rounded-[20px]">
          {/* Placeholder gradient if no real image */}
          {src.startsWith('/') || src.startsWith('http') ? (
            <img
              src={src}
              alt={alt}
              className="h-auto w-full"
              loading="lazy"
            />
          ) : (
            <div className="flex aspect-[9/16] items-center justify-center bg-gradient-to-br from-[--color-violet]/20 via-[--color-surface] to-[--color-cyan]/20">
              <span className="text-sm text-[--color-foreground-muted]">
                {alt}
              </span>
            </div>
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-[--color-foreground-muted]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── Video Embed ────────────────────────────────────────────────────
interface VideoEmbedProps {
  src: string;
  title: string;
}

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  // Only allow YouTube and Vimeo embeds
  const isAllowed =
    src.startsWith('https://www.youtube.com/embed/') ||
    src.startsWith('https://player.vimeo.com/video/');

  if (!isAllowed) {
    return (
      <div className="my-8 rounded-[--radius-card] bg-[--color-surface-card] p-6 text-center text-sm text-[--color-foreground-muted]">
        Video unavailable
      </div>
    );
  }

  return (
    <div className="my-8 overflow-hidden rounded-[--radius-card]">
      <div className="relative aspect-video w-full">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

// ─── CodeBlock (enhanced pre wrapping with copy button) ─────────────
interface CodeBlockProps {
  children: ReactNode;
  title?: string;
}

export function CodeBlock({ children, title }: CodeBlockProps) {
  return (
    <div className="group/code relative my-8 overflow-hidden rounded-[--radius-card] border border-[--color-glass-border]">
      {title && (
        <div className="border-b border-[--color-glass-border] bg-[--color-surface-card] px-4 py-2">
          <span className="font-mono text-xs text-[--color-foreground-muted]">
            {title}
          </span>
        </div>
      )}
      <CopyButton target="code" />
      <div className="overflow-x-auto bg-[--color-surface] p-4 text-sm">
        {children}
      </div>
    </div>
  );
}

// ─── Copy Button ────────────────────────────────────────────────────
function CopyButton({ target }: { target: string }) {
  const handleCopy = () => {
    const btn = document.activeElement as HTMLButtonElement | null;
    const container = btn?.closest('.group\\/code');
    const codeEl = container?.querySelector(target);
    if (codeEl?.textContent) {
      navigator.clipboard.writeText(codeEl.textContent).then(() => {
        if (btn) {
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = 'Copy';
          }, 2000);
        }
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 z-10 rounded-[--radius-sm] bg-white/5 px-2 py-1 font-mono text-[10px] text-[--color-foreground-muted] opacity-0 transition-opacity hover:bg-white/10 hover:text-[--color-foreground] group-hover/code:opacity-100"
      aria-label="Copy code"
    >
      Copy
    </button>
  );
}

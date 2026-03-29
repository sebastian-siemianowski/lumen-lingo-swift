import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  searchParams?: Record<string, string>;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = '/blog',
  searchParams = {},
}: PaginationProps) {
  const t = useTranslations('Blog');

  if (totalPages <= 1) return null;

  function buildHref(page: number) {
    const params = new URLSearchParams(searchParams);
    if (page > 1) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }
    const qs = params.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  }

  // Build visible page numbers
  const pages: (number | 'ellipsis')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  return (
    <nav aria-label={t('pagination.ariaLabel')} className="mt-16 flex items-center justify-center gap-2">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1)}
          className="flex items-center gap-1 rounded-[--radius-button] border border-[--color-glass-border] bg-[--color-glass] px-4 py-2.5 text-sm text-[--color-foreground-secondary] transition-colors hover:border-[--color-violet]/30 hover:text-[--color-foreground]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('pagination.previous')}
        </Link>
      ) : (
        <span className="flex items-center gap-1 rounded-[--radius-button] border border-[--color-glass-border]/50 px-4 py-2.5 text-sm text-[--color-foreground-muted]/50">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('pagination.previous')}
        </span>
      )}

      {/* Page numbers */}
      {pages.map((p, i) =>
        p === 'ellipsis' ? (
          <span key={`e-${i}`} className="px-1 text-[--color-foreground-muted]">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={buildHref(p)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-[--radius-button] text-sm font-medium transition-all',
              p === currentPage
                ? 'bg-[--color-violet] text-white shadow-[0_0_16px_rgba(139,92,246,0.3)]'
                : 'border border-[--color-glass-border] bg-[--color-glass] text-[--color-foreground-secondary] hover:border-[--color-violet]/30 hover:text-[--color-foreground]',
            )}
            aria-current={p === currentPage ? 'page' : undefined}
          >
            {p}
          </Link>
        ),
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(currentPage + 1)}
          className="flex items-center gap-1 rounded-[--radius-button] border border-[--color-glass-border] bg-[--color-glass] px-4 py-2.5 text-sm text-[--color-foreground-secondary] transition-colors hover:border-[--color-violet]/30 hover:text-[--color-foreground]"
        >
          {t('pagination.next')}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <span className="flex items-center gap-1 rounded-[--radius-button] border border-[--color-glass-border]/50 px-4 py-2.5 text-sm text-[--color-foreground-muted]/50">
          {t('pagination.next')}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </nav>
  );
}

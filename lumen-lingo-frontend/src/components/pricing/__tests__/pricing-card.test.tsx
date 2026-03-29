import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PricingCard } from '@/components/pricing/pricing-card';

// Mock analytics and appStoreUrl
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
}));

vi.mock('@/lib/appStoreUrl', () => ({
  getAppStoreUrl: vi.fn((campaign: string) => `https://apps.apple.com/test?ct=${campaign}`),
}));

const baseProps = {
  tier: 'pro' as const,
  name: 'Pro',
  price: '£4.99',
  description: 'Everything you need for rapid progress.',
  features: ['Unlimited practice', 'All sound packs', 'Offline mode'],
  cta: 'Start Pro',
};

describe('PricingCard', () => {
  it('renders the tier name', () => {
    render(<PricingCard {...baseProps} />);
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('renders the price', () => {
    render(<PricingCard {...baseProps} />);
    expect(screen.getByText('£4.99')).toBeInTheDocument();
  });

  it('renders the period when present', () => {
    render(<PricingCard {...baseProps} period="/month" />);
    expect(screen.getByText('/month')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<PricingCard {...baseProps} />);
    expect(screen.getByText(baseProps.description)).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<PricingCard {...baseProps} />);
    for (const feature of baseProps.features) {
      expect(screen.getByText(feature)).toBeInTheDocument();
    }
  });

  it('renders the CTA link with correct href', () => {
    render(<PricingCard {...baseProps} />);
    const link = screen.getByRole('link', { name: 'Start Pro' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://apps.apple.com/test?ct=pricing_pro');
  });

  it('CTA opens in new tab safely', () => {
    render(<PricingCard {...baseProps} />);
    const link = screen.getByRole('link', { name: 'Start Pro' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows "Most Popular" badge when popular is true', () => {
    render(<PricingCard {...baseProps} popular />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('does not show "Most Popular" badge by default', () => {
    render(<PricingCard {...baseProps} />);
    expect(screen.queryByText('Most Popular')).not.toBeInTheDocument();
  });

  it('renders free tier without period text', () => {
    render(
      <PricingCard
        tier="free"
        name="Free"
        price="£0"
        description="Get started for free."
        features={['100 flashcards']}
        cta="Get Started"
      />,
    );
    expect(screen.queryByText('/month')).not.toBeInTheDocument();
  });
});

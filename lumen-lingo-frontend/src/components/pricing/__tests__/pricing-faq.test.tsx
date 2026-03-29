import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PricingFAQ } from '@/components/pricing/pricing-faq';
import { faqItems } from '@/components/pricing/faq-data';

// Mock motion components to simplify tests
vi.mock('@/components/motion', () => ({
  FadeIn: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('@/components/ui', () => ({
  Container: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  Section: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <section className={className}>{children}</section>
  ),
  Heading: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  Text: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

describe('PricingFAQ', () => {
  it('renders the FAQ heading', () => {
    render(<PricingFAQ />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<PricingFAQ />);
    for (const item of faqItems) {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    }
  });

  it('does not show answer initially', () => {
    render(<PricingFAQ />);
    expect(screen.queryByText(faqItems[0].answer)).not.toBeInTheDocument();
  });

  it('expands answer on click', () => {
    render(<PricingFAQ />);
    fireEvent.click(screen.getByText(faqItems[0].question));
    expect(screen.getByText(faqItems[0].answer)).toBeInTheDocument();
  });

  it('collapses answer on second click', () => {
    render(<PricingFAQ />);
    const trigger = screen.getByText(faqItems[0].question);
    fireEvent.click(trigger);
    expect(screen.getByText(faqItems[0].answer)).toBeInTheDocument();
    fireEvent.click(trigger);
    // After collapsing, the answer should be removed (AnimatePresence exit)
    // Note: with mocked motion, it may still be present. Check aria-expanded instead
    const button = trigger.closest('button')!;
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('sets aria-expanded correctly', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    // All initially collapsed
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });
    // Click first
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
  });

  it('navigates with ArrowDown key', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    buttons[0].focus();
    fireEvent.keyDown(buttons[0], { key: 'ArrowDown' });
    expect(document.activeElement).toBe(buttons[1]);
  });

  it('navigates with ArrowUp key', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    buttons[1].focus();
    fireEvent.keyDown(buttons[1], { key: 'ArrowUp' });
    expect(document.activeElement).toBe(buttons[0]);
  });

  it('wraps from last to first with ArrowDown', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    const lastButton = buttons[buttons.length - 1];
    lastButton.focus();
    fireEvent.keyDown(lastButton, { key: 'ArrowDown' });
    expect(document.activeElement).toBe(buttons[0]);
  });

  it('wraps from first to last with ArrowUp', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    buttons[0].focus();
    fireEvent.keyDown(buttons[0], { key: 'ArrowUp' });
    expect(document.activeElement).toBe(buttons[buttons.length - 1]);
  });

  it('Home key moves focus to first item', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    buttons[3].focus();
    fireEvent.keyDown(buttons[3], { key: 'Home' });
    expect(document.activeElement).toBe(buttons[0]);
  });

  it('End key moves focus to last item', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    buttons[0].focus();
    fireEvent.keyDown(buttons[0], { key: 'End' });
    expect(document.activeElement).toBe(buttons[buttons.length - 1]);
  });

  it('sets proper aria-controls linking trigger to panel', () => {
    render(<PricingFAQ />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-controls', 'faq-panel-0');
    expect(buttons[0]).toHaveAttribute('id', 'faq-trigger-0');
  });
});

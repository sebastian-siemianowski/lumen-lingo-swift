import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewsletterForm } from '@/components/newsletter/newsletter-form';

// Mock analytics
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
}));

// Mock feature flag — enable newsletter form for tests
vi.mock('@/hooks/use-feature-flag', () => ({
  useFeatureFlag: () => true,
}));

describe('NewsletterForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  /** Check the age-confirmation checkbox so form submission proceeds. */
  function confirmAge() {
    const checkbox = screen.getByRole('checkbox');
    if (!checkbox.hasAttribute('checked')) {
      fireEvent.click(checkbox);
    }
  }

  it('renders email input and subscribe button', () => {
    render(<NewsletterForm />);
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  it('shows error for empty submission', async () => {
    render(<NewsletterForm />);
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
    expect(screen.getByRole('alert').textContent).toContain('valid email');
  });

  it('shows error for invalid email format', async () => {
    render(<NewsletterForm />);
    const input = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(input, 'not-an-email');
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  it('sets aria-invalid on error', async () => {
    render(<NewsletterForm />);
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(screen.getByRole('textbox', { name: /email/i })).toHaveAttribute(
        'aria-invalid',
        'true',
      );
    });
  });

  it('submits valid email and shows success', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });

    render(<NewsletterForm source="test" />);
    const input = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(input, 'user@example.com');
    confirmAge();
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getAllByText(/welcome|community|inbox/i).length).toBeGreaterThan(0);
    });
  });

  it('shows server error message on failure', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Already subscribed.' }),
    });

    render(<NewsletterForm />);
    const input = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(input, 'user@example.com');
    confirmAge();
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert').textContent).toContain('Already subscribed');
    });
  });

  it('shows generic error on network failure', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    render(<NewsletterForm />);
    const input = screen.getByRole('textbox', { name: /email/i });
    await userEvent.type(input, 'user@example.com');
    confirmAge();
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert').textContent).toContain('Something went wrong');
    });
  });

  it('renders compact layout when compact prop set', () => {
    render(<NewsletterForm compact />);
    const form = screen.getByRole('textbox', { name: /email/i }).closest('form');
    expect(form?.className).toContain('flex-row');
  });

  it('shows GDPR notice', () => {
    render(<NewsletterForm />);
    expect(screen.getByText(/unsubscribe/i)).toBeInTheDocument();
  });

  it('has retry button on error', async () => {
    render(<NewsletterForm />);
    fireEvent.click(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(screen.getByText(/try again/i)).toBeInTheDocument();
    });
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmailHoneypot, isBotDetected, _resetBotFlag } from '../email-honeypot';

describe('EmailHoneypot', () => {
  beforeEach(() => {
    _resetBotFlag();
  });

  it('renders a visually hidden mailto link', () => {
    const { container } = render(<EmailHoneypot />);
    const link = container.querySelector('a[href="mailto:trap@lumenlingo.com"]');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('aria-hidden')).toBe('true');
    expect(link?.getAttribute('tabindex')).toBe('-1');
  });

  it('is positioned off-screen (not display:none)', () => {
    const { container } = render(<EmailHoneypot />);
    const link = container.querySelector('a') as HTMLAnchorElement;
    expect(link.style.position).toBe('absolute');
    expect(link.style.left).toBe('-9999px');
    // Confirm NOT display:none — bots skip those
    expect(link.style.display).not.toBe('none');
  });

  it('flags bot on click', () => {
    render(<EmailHoneypot />);
    expect(isBotDetected()).toBe(false);

    const link = screen.getByText('trap@lumenlingo.com');
    fireEvent.click(link);

    expect(isBotDetected()).toBe(true);
  });

  it('flags bot on focus', () => {
    render(<EmailHoneypot />);
    expect(isBotDetected()).toBe(false);

    const link = screen.getByText('trap@lumenlingo.com');
    fireEvent.focus(link);

    expect(isBotDetected()).toBe(true);
  });

  it('bot flag persists across re-renders', () => {
    const { rerender } = render(<EmailHoneypot />);
    const link = screen.getByText('trap@lumenlingo.com');
    fireEvent.click(link);
    expect(isBotDetected()).toBe(true);

    rerender(<EmailHoneypot />);
    expect(isBotDetected()).toBe(true);
  });

  it('prevents default link navigation on click', () => {
    render(<EmailHoneypot />);
    const link = screen.getByText('trap@lumenlingo.com');
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    const prevented = !link.dispatchEvent(event);
    // The React onClick calls e.preventDefault()
    expect(prevented).toBe(true);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RevealCountdown } from '../reveal-countdown';

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion');
  return {
    ...actual,
  };
});

describe('RevealCountdown', () => {
  it('displays seconds remaining as text label', () => {
    render(<RevealCountdown timeRemaining={24_500} />);
    expect(screen.getByText('25s')).toBeTruthy();
  });

  it('has a timer role for accessibility', () => {
    render(<RevealCountdown timeRemaining={15_000} />);
    const timer = screen.getByRole('timer');
    expect(timer).toBeTruthy();
    // aria-label throttled to 10s intervals (Story 4.2 AC7)
    expect(timer.getAttribute('aria-label')).toBe('Email visible for 20 seconds');
  });

  it('renders SVG ring element', () => {
    const { container } = render(<RevealCountdown timeRemaining={20_000} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    // Should have two circles (track + progress)
    const circles = svg!.querySelectorAll('circle');
    expect(circles.length).toBe(2);
  });

  it('applies amber colour at 10 seconds warning threshold', () => {
    render(<RevealCountdown timeRemaining={8_000} />);
    const label = screen.getByText('8s');
    expect(label.className).toContain('amber');
  });

  it('applies amber colour at 5 seconds urgent threshold', () => {
    render(<RevealCountdown timeRemaining={4_500} />);
    const label = screen.getByText('5s');
    expect(label.className).toContain('amber');
  });

  it('shows "0s" at zero time remaining', () => {
    render(<RevealCountdown timeRemaining={0} />);
    expect(screen.getByText('0s')).toBeTruthy();
  });

  it('renders progress arc with correct stroke-dasharray', () => {
    const { container } = render(<RevealCountdown timeRemaining={15_000} />);
    const circles = container.querySelectorAll('circle');
    const progressCircle = circles[1]; // Second circle is the progress arc
    const circumference = 2 * Math.PI * 10; // RING_RADIUS = 10
    expect(progressCircle.getAttribute('stroke-dasharray')).toBe(String(circumference));
  });
});

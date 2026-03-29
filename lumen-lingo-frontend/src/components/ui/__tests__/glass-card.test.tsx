import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/ui/glass-card';

describe('GlassCard', () => {
  it('renders children', () => {
    render(<GlassCard>Card content</GlassCard>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies glass-card base class', () => {
    render(<GlassCard>Content</GlassCard>);
    const el = screen.getByText('Content').closest('div');
    expect(el?.className).toContain('glass-card');
  });

  it('applies violet tint styles', () => {
    render(<GlassCard tint="violet">Violet</GlassCard>);
    const el = screen.getByText('Violet').closest('div');
    expect(el?.className).toContain('border-violet');
  });

  it('applies cyan tint styles', () => {
    render(<GlassCard tint="cyan">Cyan</GlassCard>);
    const el = screen.getByText('Cyan').closest('div');
    expect(el?.className).toContain('border-cyan');
  });

  it('applies amber tint styles', () => {
    render(<GlassCard tint="amber">Amber</GlassCard>);
    const el = screen.getByText('Amber').closest('div');
    expect(el?.className).toContain('border-amber');
  });

  it('applies custom className', () => {
    render(<GlassCard className="my-custom">Custom</GlassCard>);
    const el = screen.getByText('Custom').closest('div');
    expect(el?.className).toContain('my-custom');
  });

  it('disables hover when hover=false', () => {
    render(<GlassCard hover={false}>No hover</GlassCard>);
    const el = screen.getByText('No hover').closest('div');
    // When hover is false, glass-card-hover class should not be present
    expect(el?.className).not.toContain('glass-card-hover');
  });

  it('applies hover class by default', () => {
    render(<GlassCard>Hoverable</GlassCard>);
    const el = screen.getByText('Hoverable').closest('div');
    expect(el?.className).toContain('glass-card-hover');
  });
});

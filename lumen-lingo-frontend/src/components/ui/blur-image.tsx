'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type Props = Omit<ImageProps, 'onLoad'>;

/**
 * Image with a gradient blur placeholder that crossfades to the loaded image.
 * Drop-in replacement for next/image with the same props.
 */
export function BlurImage({ className, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Gradient placeholder visible until the image loads */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-[--color-violet]/10 via-[--color-surface-card] to-[--color-cyan]/10 transition-opacity duration-500',
          loaded ? 'opacity-0' : 'opacity-100',
        )}
      />
      <Image
        {...props}
        className={cn(
          'transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

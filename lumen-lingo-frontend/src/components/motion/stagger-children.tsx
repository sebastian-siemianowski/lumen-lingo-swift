'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { stagger, staggerContainer, fadeUp } from '@/lib/motion';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerInterval?: number;
  once?: boolean;
}

export function StaggerChildren({
  children,
  className,
  staggerInterval = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerContainer(staggerInterval)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Wrap each child in StaggerChildren with this for the stagger effect */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

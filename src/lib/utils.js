import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind class names safely.
 * Later classes win over earlier ones when they target the same property.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

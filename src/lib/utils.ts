import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const formattedDate = new Intl.DateTimeFormat('ao', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date);

  return formattedDate;
}

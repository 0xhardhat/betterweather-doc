import { atom } from 'jotai';

const storedTheme =
  typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

export const themeAtom = atom(storedTheme || 'dark');

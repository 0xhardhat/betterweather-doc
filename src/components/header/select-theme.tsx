'use client';

import React from 'react';

import { useAtom } from 'jotai';
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/20/solid';
import { useEffect } from 'react';

import { useTheme } from 'next-themes';
import { useIsMounted } from './use-is-mounted';
import { themeAtom } from '@/store';

const THEMES = {
  dark: {
    id: 'dark',
    name: 'Dark',
    icon: MoonIcon,
  },
  light: {
    id: 'light',
    name: 'Light',
    icon: SunIcon,
  },
  system: {
    id: 'system',
    name: 'System',
    icon: ComputerDesktopIcon,
  },
};

export function SelectTheme() {
  const isMounted = useIsMounted();
  const { theme, setTheme } = useTheme();
  const [themecolor, setThemecolor] = useAtom(themeAtom);

  const handleThemeChange = (newTheme: string) => {
    setThemecolor(newTheme);
    setTheme(newTheme);
    // Save the selected theme to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setThemecolor(storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  if (!isMounted()) {
    return null;
  }

  return (
    <button
      className="flex justify-center items-center border-[1px] border-[#239c79] dark:border-[#6DDABA] rounded-lg w-12 h-12 bg-transparent hover:bg-transparent"
      onClick={() => {
        const newTheme = themecolor === 'dark' ? 'light' : 'dark';
        handleThemeChange(newTheme);
      }}
    >
      {React.createElement(
        THEMES[themecolor === 'dark' ? 'light' : 'dark'].icon,
        {
          className: 'w-4 h-4',
        }
      )}
    </button>
  );
}

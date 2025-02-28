'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(() => import('@/providers/themeProvider'), {
  ssr: false,
});

const JotaiProvider = dynamic(() => import('@/providers/jotaiProvider'), {
  ssr: false,
});

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </ThemeProvider>
  );
};

export default ThemeClient;

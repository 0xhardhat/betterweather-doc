'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider {...props} attribute="class" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;

'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(() => import('@/providers/themeprovider'), {
  ssr: false,
});
// const ToastProvider = dynamic(() => import("@/providers/toastProvider"), { ssr: false });
const JotaiProvider = dynamic(() => import('@/providers/jotaiProvider'), {
  ssr: false,
});
// const NotificationProvider = dynamic(() => import("@/providers/notificationProvider"), { ssr: false });
// const WalletsProvider = dynamic(() => import("@/providers/walletsProvider"), { ssr: false });
// import { NextUIProvider } from "@nextui-org/react";

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </ThemeProvider>
  );
};

export default ThemeClient;

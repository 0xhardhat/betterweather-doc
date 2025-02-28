import React from 'react';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HomeIcon } from '@heroicons/react/20/solid';

import { SelectTheme } from './select-theme';

const Burger = dynamic(() => import('./burger'));

const THEMES = {
  home: {
    id: 'home',
    name: 'home',
    icon: HomeIcon,
  },
};

function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoSrc =
    theme === 'light' ? '/BW-logo-navbar-light.svg' : '/BW-logo-navbar.svg';
  const logoAlt = `logo in ${theme} theme`;

  return (
    <header
      className="
        sticky
        top-0
        z-20

        flex

        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200

        backdrop-blur-md
        supports-backdrop-blur:bg-gray/80

        dark:border-gray-800
        dark:supports-backdrop-blur:bg-gray-900/25
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-4

          w-full
          h-full
          mx-auto
          max-w-full

          lg:max-w-8xl
        "
      >
        <div className="flex items-center">
          <Burger />

          <Link
            href="/"
            className="
              flex
              flex-row
              items-center
        
              font-bold
              text-gray-600

              dark:text-white
            "
            passHref
          >
            <Image
              width={142}
              height={43}
              src={logoSrc}
              alt={logoAlt}
              className="lg:w-[120px] lg:h-auto w-[142px] h-auto cursor-pointer hidden dark:flex"
            />
          </Link>
        </div>
        <div className="flex flex-row items-baseline gap-2">
          <button
            className="flex justify-center items-center border-[1px] border-[#239c79] dark:border-[#6DDABA] rounded-lg w-12 h-12 bg-transparent hover:bg-transparent"
            onClick={() => {
              window.location.href = 'https://betterweather.vercel.app';
            }}
          >
            {React.createElement(THEMES['home'].icon, {
              className: 'w-4 h-4',
            })}
          </button>
          <SelectTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;

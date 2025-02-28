export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'About Us',
    children: [
      {
        title: 'What is better weather?',
        slug: '/docs/about-us/what-is-better-weather',
      },
      {
        title: 'How Does Better Weather Works?',
        slug: '/docs/about-us/how-does-better-weather-works',
      },
      {
        title: 'Why Bet on Weather?',
        slug: '/docs/about-us/why-bet-on-weather',
      },
      {
        title: 'Why Choose Better Weather?',
        slug: '/docs/about-us/why-choose-better-weather',
      },
    ],
  },
  {
    title: 'How to Use',
    children: [
      {
        title: 'Getting Started with Better Weather',
        slug: '/docs/how-to-use/getting-started',
      },
      {
        title: 'FAQ',
        slug: '/docs/how-to-use/faq',
      },
      {
        title: 'Terms of Use',
        slug: '/docs/how-to-use/terms-of-use',
      },
    ],
  },
];

import '@fontsource/inter/variable.css';
import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import type { MarkdocNextJsPageProps } from '@markdoc/next.js';

import Provider from '@/providers';

import { SkipToContent } from '@/components/skip-to-content';
import { Header } from '@/components/header';
import { LayoutDocs } from '@/layouts/docs';

interface MyAppProps extends AppProps {
  pageProps: MarkdocNextJsPageProps;
}

function MyApp(props: MyAppProps) {
  let { Component, pageProps, router } = props;

  let isDocs = router.asPath.startsWith('/docs');

  let TITLE = pageProps.markdoc?.frontmatter.title;
  let DESCRIPTION = pageProps.markdoc?.frontmatter.description;
  let SITE = 'https://' + process.env.VERCEL_URL;

  return (
    <React.Fragment>
      <Head>
        <title>{`${TITLE} - Doc`}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content={DESCRIPTION} />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:creator" content="@mverissimu" />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:url" content={SITE} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        {/* <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script> */}
        <Script
          src="https://cdn.jsdelivr.net/npm/apexcharts"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/react-apexcharts"
          strategy="beforeInteractive"
        />

        <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL ? SITE : ''
          }/api/og?title=${encodeURIComponent(
            TITLE
          )}&description=${encodeURIComponent(DESCRIPTION)}`}
        />
      </Head>

      <Provider>
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
          <SkipToContent />
          <Header />
          {isDocs ? (
            <LayoutDocs markdoc={pageProps.markdoc}>
              <Component {...pageProps} />
            </LayoutDocs>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;

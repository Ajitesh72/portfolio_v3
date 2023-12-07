// pages/_app.js

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="bLYa0V9I9aMRCBg6nWCVAHLx679j9iT0YJ0gVU63Lo0"
        />
      </Head>
      <body className={inter.className}>
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default MyApp;

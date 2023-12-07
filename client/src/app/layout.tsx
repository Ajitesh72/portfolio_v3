import "./globals.css";
import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ajiteshdubey.vercel.app/"),
  title: {
    default: "Ajitesh",
    template: `%s | Dubey`,
  },
  description: "Portfolio website of ajitesh dubey",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <meta name="google-site-verification" content="bLYa0V9I9aMRCBg6nWCVAHLx679j9iT0YJ0gVU63Lo0" />
      </Head> */}
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}

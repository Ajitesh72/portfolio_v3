import "./globals.css";
import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajitesh Dubey",
  description: "Built & designed by ajitesh",
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

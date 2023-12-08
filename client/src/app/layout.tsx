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
  description: "Portfolio website of Ajitesh Dubey",
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
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Ajitesh Dubey, Portfolio, Web Developer" />
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        {/* <meta property="og:image" content="URL_TO_IMAGE" /> */}
        <meta property="og:url" content={metadata.metadataBase.href} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="canonical" href={metadata.metadataBase.href} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Ajitesh Dubey",
              "url": "https://ajiteshdubey.vercel.app/",
              "sameAs": [
                "https://github.com/Ajitesh72",
                "https://www.linkedin.com/in/ajitesh-dubey-4b5852220/?profileId=ACoAADenhUkBp6cPjyYiFHv-Zcp7LQ7vSULc270"
              ]
            }
          `}
        </script>
        {/* Add other meta tags */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

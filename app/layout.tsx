import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "myIQ - Free Online IQ Test",
  description:
    "Take a free, no-signup IQ test and get your score instantly. 30 questions, 20 minutes, immediate results with explanations.",
  keywords: ["IQ test", "free IQ test", "online IQ test", "intelligence test"],
  openGraph: {
    title: "myIQ - Free Online IQ Test",
    description:
      "Take a free, no-signup IQ test and get your score instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-screen antialiased">
        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://live.strakon.fr'),
  title: "Soirée STRAKON Demo — 17 Mars 2026 | Webinaire Gratuit",
  description: "Venez découvrir STRAKON en live le 17 mars 2026 à 20h00. Soirée démo gratuite, 100% en ligne, ouverte à tous. Démonstration, Q&A et nouveautés STRAKON.",
  keywords: ["STRAKON", "Soirée STRAKON", "Demo STRAKON", "Webinaire BIM", "Coffrage", "Armatures", "BIM France", "C2IT", "STRAKON Demo"],
  authors: [{ name: "C2IT", url: "https://c2it.lu" }],
  openGraph: {
    title: "Soirée STRAKON Demo — 17 Mars 2026 | Webinaire Gratuit",
    description: "Venez découvrir STRAKON en live le 17 mars 2026 à 20h00. Soirée démo gratuite et ouverte à tous.",
    url: "https://live.strakon.fr",
    siteName: "C2IT & STRAKON — Soirée Demo",
    images: [
      {
        url: "/static/logo-strakon.png",
        width: 1200,
        height: 630,
        alt: "Soirée STRAKON Demo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soirée STRAKON Demo — 17 Mars 2026 | Webinaire Gratuit",
    description: "Rejoignez la soirée demo STRAKON le 17 mars 2026 à 20h00. Gratuit et en ligne.",
    images: ["/static/logo-strakon.png"],
  },
  icons: {
    icon: "/static/favicon.png",
    apple: "/static/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-PS5VF8PH" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                w.BrevoConversationsID = '62ac6353e5958733497876ae';
                w.BrevoConversationsSetup = {
                  customWidgetButton: '#brevo-chat-trigger'
                };
                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
            `,
          }}
        />
      </body>
    </html>
  );
}

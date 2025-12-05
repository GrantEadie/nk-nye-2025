import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maritime Moonlight | Nye Nook 2025",
  description: "New Year's Eve at The Nook",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Maritime Moonlight | Nook NYE 2025",
    description: "New Year's Eve at The Nook - Costumes highly encouraged",
    url: 'https://nye-nook-2025.vercel.app',
    siteName: 'Maritime Moonlight',
    images: [
      {
        url: '/nk nye mm twitter cover.png',
        width: 1200,
        height: 630,
        alt: 'Maritime Moonlight - New Year\'s Eve 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maritime Moonlight | Nye Nook 2025",
    description: "New Year's Eve at The Nook - Costumes highly encouraged",
    images: ['/nk nye mm twitter cover.png'],
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className={`${lora.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

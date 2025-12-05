import type { Metadata } from "next";
import { Krona_One } from "next/font/google";
import "./globals.css";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nye Nook",
  description: "Nye Nook 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${krona.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

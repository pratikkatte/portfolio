import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components";
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
  metadataBase: new URL("https://pratikkatte.com"),
  title: {
    default: "Pratik Katte | Research and AI Portfolio",
    template: "%s | Pratik Katte",
  },
  description:
    "Portfolio of Pratik Katte, a graduate student building research tools across evolutionary genomics, applied AI, public health, and scientific software.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Pratik Katte | Research and AI Portfolio",
    description:
      "Evolutionary genomics, applied AI, public-health surveillance, and product-minded research tooling.",
    url: "https://pratikkatte.com",
    siteName: "Pratik Katte",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pratik Katte portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Katte | Research and AI Portfolio",
    description:
      "Evolutionary genomics, applied AI, public-health surveillance, and scientific software.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

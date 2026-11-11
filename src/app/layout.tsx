import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import { Atmosphere } from "@/components/Atmosphere";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const title = `${site.name} | ${site.role}`;
const description = `Portfolio of ${site.name} — full stack software developer. Projects, photos, and contact.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    site.name,
    "full stack developer",
    "software developer",
    "portfolio",
    ...site.skills.slice(0, 5),
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Atmosphere />
        <noscript>
          <style>{`.scroll-reveal > *, .stagger > * { opacity: 1; transform: none; } .rule { transform: none; } .case-media { clip-path: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

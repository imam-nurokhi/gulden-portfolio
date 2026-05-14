import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Gulden | Mid-oriental Funk",
  description: "Gulden - Indonesian Mid-oriental Funk band. 11 lagu. 11 cerita. Album pertama yang memadukan keresahan dengan suara yang tak terbungkam.",
  keywords: ["Gulden", "band", "music", "mid-oriental funk", "Indonesian band", "alternative", "funk"],
  openGraph: {
    title: "Gulden | Mid-oriental Funk",
    description: "Gulden - Indonesian Mid-oriental Funk band. 11 lagu. 11 cerita.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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
  title: "Gulden | Band",
  description: "Gulden transforms raw emotion into sonic landscapes — seamlessly blending rock, alternative, and experimental sounds.",
  keywords: ["Gulden", "band", "music", "rock", "alternative", "concerts", "live music"],
  openGraph: {
    title: "Gulden | Band",
    description: "Gulden transforms raw emotion into sonic landscapes — seamlessly blending rock, alternative, and experimental sounds.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col text-foreground">{children}</body>
    </html>
  );
}

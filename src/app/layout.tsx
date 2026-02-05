import type { Metadata } from "next";
import { Kanit, Orbitron } from "next/font/google"; // Import fonts
import "./globals.css";
import { AudioPlayer } from "@/components/audio-player";
import { StarBackground } from "@/components/star-background";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-kanit",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "HerHighness Core",
  description: "Official community website for HerHighness Clan",
  icons: {
    icon: '/assets/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${kanit.variable} ${orbitron.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <StarBackground />
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}

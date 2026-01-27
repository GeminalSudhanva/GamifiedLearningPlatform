import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LearnQuest | Fun Learning Games for Kids | Grades 4-6",
  description:
    "Transform learning into an adventure! LearnQuest makes Math, Science, English & Social Studies fun with gamified lessons, XP points, badges, and leaderboards. Perfect for students in grades 4-6.",
  keywords: [
    "educational games",
    "learning platform",
    "gamified learning",
    "kids education",
    "math games",
    "science games",
    "grades 4-6",
    "interactive learning",
  ],
  authors: [{ name: "LearnQuest" }],
  openGraph: {
    title: "LearnQuest | Fun Learning Games for Kids",
    description:
      "Transform learning into an adventure with gamified lessons and rewards!",
    type: "website",
    locale: "en_US",
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
        className={`${nunito.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

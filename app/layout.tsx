import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PI - Education Platform",
  description: "Premium Education Platform for JEE/NEET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-white min-h-screen pb-24`}>
        <Providers>
          <main className="max-w-7xl mx-auto px-4 pt-6">
            {children}
          </main>
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {CheckStorage} from "@components/io/dataaccess"



import { NavBar } from "./navbar";
import { Footer } from "./footer";

import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Japanese Study Application",
  description: "Simple web application to aid in the study of Japanese with a focus on written components.",
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
        <NavBar />
        {/* <div className="min-h-screen h-fit"> */}
        <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
          {children}
        </div>
        {/* </div> */}
        <Footer />
      </body>
      <CheckStorage />
    </html>
  );
}

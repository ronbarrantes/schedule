import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Link from "next/link";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Scheduling app",
  description: "Generated by create next app",
};

const Nav = () => {
  return (
    <ul className="flex gap-1 border-b border-slate-400">
      <li>
        <Link href="/" className="p-2 py-1 hover:bg-slate-300">
          Home
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="p-2 py-1 hover:bg-slate-300">
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="/settings" className="p-2 py-1 hover:bg-slate-300">
          Settings
        </Link>
      </li>
    </ul>
  )
}

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col border-border-orange">
      <Nav />
      {children}
    </div>)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}


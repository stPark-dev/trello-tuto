"use client";

import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AuthSession from "@/components/AuthSession";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}` // My-Organization | Teamvolt
//   },
//   description: siteConfig.description,
//   icons: [
//     {
//       url: "/favicon.ico",
//       href: "/favicon.ico"
//     }
//   ]
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Teamvolt</title>
      <body className={inter.className}>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}

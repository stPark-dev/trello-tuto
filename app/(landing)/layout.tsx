"use client";

import { RecoilRoot, RecoilEnv } from "recoil";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className} style={{ margin: 0 }}>
        <main>
          <RecoilRoot>
            <ThemeProvider>{children}</ThemeProvider>
          </RecoilRoot>
        </main>
      </body>
    </html>
  );
}

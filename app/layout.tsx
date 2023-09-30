import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "@/lib/providers";
import MobileHeader from "@/components/mobile-nav";

const gro = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gro.className}  text-black/90 bg-light dark:text-beige dark:bg-dark`}
      >
        <Providers>
          <Header />
          <MobileHeader />
          <main className="mt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

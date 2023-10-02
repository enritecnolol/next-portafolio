import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnimateProvider } from "../context/Animate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomas C. Portafolio",
  description: "Full stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimateProvider>{children}</AnimateProvider>
      </body>
    </html>
  );
}

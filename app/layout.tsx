import type { Metadata } from "next";
import { PT_Sans, Homenaje } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Background from "@/components/Noise-Background";
import Cursor from "@/components/animations/AnimatedCursor";

const MainFont = PT_Sans({weight:"400", subsets:["latin"]});
const OswaldFont = Homenaje({weight:"400", subsets:["latin"], variable: "--font-homenaje"});

export const metadata: Metadata = {
  title: "Waleed Georgy",
  description: "Waleed Georgy portfolio website",
  creator: "Waleed Georgy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable)}>
        <Background />
        <Cursor color="whitesmoke" />
        {children}
      </body>
    </html>
  );
}

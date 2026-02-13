import type { Metadata } from "next";
import { PT_Sans, Homenaje } from "next/font/google";
import { cn } from "@/lib/utils";
import Cursor from "@/components/animations/AnimatedCursor";
import "./globals.css";

const MainFont = PT_Sans({ weight: "400", subsets: ["latin"] });
const HomenajeFont = Homenaje({ weight: "400", subsets: ["latin"], variable: "--font-homenaje" });

export const metadata: Metadata = {
  title: "Waleed Georgy",
  description: "Welcome to my corner!",
  creator: "Waleed Georgy",
  keywords: [
    "nextjs", "react", "portfolio", "resume"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, HomenajeFont.variable)}>
        <Cursor color="whitesmoke" />
        {children}
      </body>
    </html>
  );
}

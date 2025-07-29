import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquion - Harvesting Clean Water from Air",
  description:
    "Solar-powered hydropanels delivering 15-20L of clean drinking water daily with zero grid dependency. Transforming humidity into hope for rural communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-white", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
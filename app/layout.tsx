import AppFooter from "@/components/shared/AppFooter";
import AppHeader from "@/components/shared/AppHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Youzoo - Matériel médical accessible',
  description: 'Youzoo est une association à but non lucratif spécialisée dans le réemploi de matériel médical pour les enfants en situation de handicap.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <AppHeader></AppHeader>
          <div className="pt-[90px]">{children}</div>
          <AppFooter></AppFooter>
          <Toaster />
        </main>
      </body>
    </html>
  );
}

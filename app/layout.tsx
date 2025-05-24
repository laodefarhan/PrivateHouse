import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

// Inisialisasi font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrivateHouse | Temukan Rumah Impian Anda",
  description: "Jasa penjualan rumah pribadi dengan pelayanan terbaik dan profesional",
  keywords:
    "jual rumah, beli rumah, rumah dijual, properti Indonesia, rumah impian, real estate, agen properti, rumah pribadi",
  authors: [{ name: "Laode Farhan Fadilah", url: "https://private-house-five.vercel.app/" }],
  creator: "Laode Farhan Fadilah",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: 'id_ID',
    title: "PrivateHouse | Temukan Rumah Impian Anda",
    description:
      "Platform jual beli rumah terpercaya dengan fitur pencarian properti terbaik di seluruh Indonesia. Temukan rumah impian Anda sekarang juga!",
    url: "https://private-house-five.vercel.app/",
    siteName: "PrivateHouse Created by Laode F. Fadilah",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
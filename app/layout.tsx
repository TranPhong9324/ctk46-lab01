import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";

export const metadata: Metadata = {
  title: "Portfolio — Trần Văn Ngọc Phong",
  description: "Website portfolio cá nhân — CTK46",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

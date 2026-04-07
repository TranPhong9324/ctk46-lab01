import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "CTK46A | Tran Van Ngoc Phong",
    template: "%s | CTK46A",
  },
  description: "Trang giới thiệu cá nhân cho bài thực hành 1 môn Các công nghệ mới trong PTPM.",
  keywords: ["CTK46A", "Next.js", "PTPM", "Tran Van Ngoc Phong"],
  authors: [{ name: "Tran Van Ngoc Phong" }],
  openGraph: {
    title: "CTK46A | Tran Van Ngoc Phong",
    description: "Bài thực hành 1 - Các công nghệ mới trong PTPM",
    type: "website",
    locale: "vi_VN",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

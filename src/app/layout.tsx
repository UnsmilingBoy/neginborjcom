import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "گروه صنعتی نگین برج قائم | Negin Borj Ghaem Industrial Group",
  description:
    "ساخت و نصب اسکلت فلزی سنگین، سوله صنعتی، پل‌های فلزی و سازه‌های پالایشگاهی | تولید ۶۰,۰۰۰+ تن فولاد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

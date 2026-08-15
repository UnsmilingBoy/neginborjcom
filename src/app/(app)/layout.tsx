import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "گروه صنعتی نگین برج قائم | Negin Borj Ghaem Industrial Group",
  description:
    "ساخت و نصب اسکلت فلزی سنگین، سوله صنعتی، پل‌های فلزی و سازه‌های پالایشگاهی | تولید ۶۰,۰۰۰+ تن فولاد",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`app-shell ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

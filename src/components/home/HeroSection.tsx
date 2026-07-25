"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-charcoal overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        {/* Steel beam decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#F59E0B" strokeWidth="1" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#F59E0B" strokeWidth="1" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#475569" strokeWidth="0.5" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#475569" strokeWidth="0.5" />
          <line x1="5%" y1="25%" x2="25%" y2="75%" stroke="#F59E0B" strokeWidth="0.5" opacity="0.3" />
          <line x1="75%" y1="25%" x2="95%" y2="75%" stroke="#F59E0B" strokeWidth="0.5" opacity="0.3" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-brand/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-brand/10 border border-amber-brand/20 mb-6">
              <div className="h-2 w-2 rounded-full bg-amber-brand animate-pulse" />
              <span className="text-sm text-amber-brand font-medium">
                بیش از ۲۰ سال تجربه در صنعت فولاد
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            گروه صنعتی{" "}
            <span className="text-amber-brand">نگین برج قائم</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl"
          >
            ساخت و نصب اسکلت فلزی سنگین، سوله صنعتی، پل‌های فلزی و سازه‌های
            پالایشگاهی با بیش از ۶۰,۰۰۰ تن تولید و ۱۵۰+ پروژه موفق در سراسر
            ایران.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/rfq"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-amber-brand text-charcoal hover:bg-amber-dark font-semibold text-base transition-colors"
            >
              درخواست پیش‌فاکتور
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:bg-white/5 font-semibold text-base transition-colors"
            >
              مشاهده پروژه‌ها
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

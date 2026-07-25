"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark/95 to-surface-dark" />

        {/* Industrial grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Decorative steel beams */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-amber-brand/20 to-transparent" />
        <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-amber-brand/20 to-transparent" />

        {/* Diagonal accent lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="100%" x2="20%" y2="0" stroke="#F59E0B" strokeWidth="0.5" opacity="0.4" />
          <line x1="80%" y1="100%" x2="100%" y2="0" stroke="#F59E0B" strokeWidth="0.5" opacity="0.4" />
        </svg>

        {/* Glowing orb */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-brand/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-amber-brand/3 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-brand/10 border border-amber-brand/20 mb-8 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-brand opacity-75" />
                <div className="relative inline-flex h-2 w-2 rounded-full bg-amber-brand" />
              </div>
              <span className="text-sm text-amber-brand font-medium tracking-wide">
                بیش از ۲۰ سال تجربه در صنعت فولاد
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-6"
          >
            گروه صنعتی{" "}
            <span className="relative inline-block">
              <span className="text-amber-brand">نگین برج قائم</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-brand to-amber-brand/0 rounded-full" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl"
          >
            ساخت و نصب اسکلت فلزی سنگین، سوله صنعتی، پل‌های فلزی و سازه‌های
            پالایشگاهی با بیش از ۶۰,۰۰۰ تن تولید و ۱۵۰+ پروژه موفق در سراسر
            ایران.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/rfq"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-amber-brand text-charcoal hover:bg-amber-dark font-semibold text-base transition-all duration-300 shadow-lg shadow-amber-brand/20 hover:shadow-amber-brand/40 hover:-translate-y-0.5"
            >
              درخواست پیش‌فاکتور
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-slate-600/50 text-slate-300 hover:bg-white/5 hover:border-slate-500 font-semibold text-base transition-all duration-300"
            >
              مشاهده پروژه‌ها
              <ArrowLeft className="h-4 w-4 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex items-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-slate-700" />
              <span>۶۰,۰۰۰+ تن تولید</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-slate-700" />
              <span>۱۵۰+ پروژه موفق</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-slate-700" />
              <span>۴۵۰+ نفر پرسنل</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

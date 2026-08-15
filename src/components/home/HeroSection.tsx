"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  Building2,
  Factory,
  Award,
  Users,
  Layers,
} from "lucide-react";
import Image from "next/image";

const floatingChips = [
  {
    icon: Factory,
    value: "۲ کارخانه",
    label: "بشل و ساری",
    className: "top-2 -left-2 sm:left-0",
    delay: 0.6,
    float: { y: [0, -14, 0], x: [0, 7, 0], rotate: [0, -2, 0] },
    duration: 6,
  },

  {
    icon: Award,
    value: "۱۴ گواهینامه",
    label: "کیفیت و ایمنی",
    className: "bottom-2 -right-2 sm:-right-6",
    delay: 0.8,
    float: { y: [0, 16, 0], x: [0, -9, 0], rotate: [0, 2.5, 0] },
    duration: 7.5,
  },
  {
    icon: Building2,
    value: "۱۵۰+ پروژه",
    label: "اجرا شده در کشور",
    className: "top-3 -right-4 sm:-right-6",
    delay: 1,
    float: { y: [0, 13, 0], x: [0, 8, 0], rotate: [0, 2, 0] },
    duration: 6.8,
  },
  {
    icon: Users,
    value: "۴۵۰+ پرسنل",
    label: "تیم متخصص",
    className: "bottom-3 -left-4 sm:left-0",
    delay: 1.2,
    float: { y: [0, -15, 0], x: [0, -7, 0], rotate: [0, -2.5, 0] },
    duration: 8,
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-surface-dark overflow-hidden">
      {/* ── Layered background ─────────────────────────── */}
      <div className="absolute inset-0">
        {/* Deep radial base */}
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/40 via-transparent to-surface-dark" />

        {/* Rotating conic sheen */}
        <div className="absolute top-1/2 left-1/2 h-[140vh] w-[140vh] -translate-x-1/2 -translate-y-1/2 bg-sheen animate-spin-slow opacity-70 max-lg:hidden" />

        {/* Industrial grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="var(--color-amber-brand)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Steel-beam verticals */}
        <div className="absolute top-0 left-[10%] h-full w-px bg-gradient-to-b from-transparent via-amber-brand/20 to-transparent" />
        <div className="absolute top-0 right-[10%] h-full w-px bg-gradient-to-b from-transparent via-copper/20 to-transparent" />

        {/* Drifting glow orbs */}
        <div className="animate-drift absolute top-1/4 right-1/4 h-[520px] w-[520px] rounded-full bg-amber-brand/10 blur-[150px] max-lg:hidden" />
        <div className="animate-drift-reverse absolute bottom-[15%] left-1/4 h-[380px] w-[380px] rounded-full bg-copper/10 blur-[130px] max-lg:hidden" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ── Copy ─────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-brand/20 bg-amber-brand/10 px-5 py-2.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-brand" />
                </span>
                <span className="text-sm font-medium tracking-wide text-amber-brand">
                  بیش از ۲۰ سال تجربه در صنعت فولاد
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 text-4xl font-extrabold leading-[1.2] text-white sm:text-5xl lg:text-6xl"
            >
              گروه صنعتی{" "}
              <span className="relative inline-block">
                <span className="text-gradient-brand">نگین برج قائم</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-brand" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              ساخت و نصب اسکلت فلزی سنگین، سوله صنعتی، پل‌های فلزی و سازه‌های
              پالایشگاهی با بیش از ۶۰,۰۰۰ تن تولید و ۱۵۰+ پروژه موفق در سراسر
              ایران.
            </motion.p>

            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/rfq"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-copper/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-copper/40"
              >
                درخواست پیش‌فاکتور
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-600/50 px-8 py-4 text-base font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-500 hover:bg-white/5"
              >
                مشاهده پروژه‌ها
                <ArrowLeft className="-ml-2 h-4 w-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 flex flex-wrap items-center gap-8 text-sm text-slate-500"
            >
              {["۶۰,۰۰۰+ تن تولید", "۱۵۰+ پروژه موفق", "۴۵۰+ نفر پرسنل"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-8 w-px bg-gradient-to-b from-amber-brand/60 to-transparent" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </motion.div>
          </div>

          {/* ── Floating visual ──────────────────────── */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          >
            {/* Orbiting gradient ring */}
            <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-amber-brand/20" />
            <div className="absolute inset-8 rounded-full border border-white/5" />

            {/* Central hub */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className={`flex size-112.5 items-center justify-center`}
            >
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 3, 0], rotate: [0, -1.5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* <Image
                  className="w-full rounded-2xl"
                  src="/images/factory-test.jpg"
                  alt="Negin Borj"
                  width={450}
                  height={450}
                /> */}
              </motion.div>
            </motion.div>

            {/* Floating metric chips — auto-float + draggable */}
            {floatingChips.map((chip) => (
              <motion.div
                key={chip.value}
                initial={{ y: 12 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: chip.delay }}
                className={`absolute ${chip.className} z-20`}
              >
                {/* Continuous ambient float */}
                <motion.div
                  animate={chip.float}
                  transition={{
                    duration: chip.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Draggable, springs back on release */}
                  <motion.div
                    // drag
                    // dragElastic={0.4}
                    // dragConstraints={{
                    //   left: -70,
                    //   right: 70,
                    //   top: -70,
                    //   bottom: 70,
                    // }}
                    // dragTransition={{ bounceStiffness: 50, bounceDamping: 18 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    whileDrag={{ scale: 1.12, zIndex: 30 }}
                    className="flex cursor-grab items-center gap-3 rounded-2xl border border-white/10 bg-surface-dark/70 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-md active:cursor-grabbing"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-brand/10">
                      <chip.icon className="h-5 w-5 text-amber-brand" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">
                        {chip.value}
                      </p>
                      <p className="text-xs text-slate-400">{chip.label}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-dark to-transparent" />
    </section>
  );
}

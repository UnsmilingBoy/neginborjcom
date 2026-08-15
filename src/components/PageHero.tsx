"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden bg-surface-dark py-24 sm:py-28">
      {/* Background treatment */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-dark/95 to-surface-dark" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute top-0 left-[12%] h-full w-px bg-gradient-to-b from-transparent via-amber-brand/20 to-transparent" />
        <div className="absolute top-0 right-[12%] h-full w-px bg-gradient-to-b from-transparent via-amber-brand/20 to-transparent" />
        <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-amber-brand/5 blur-[150px] max-lg:hidden" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-brand/20 bg-amber-brand/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-brand" />
            <span className="text-xs font-medium uppercase tracking-wider text-amber-brand">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.2] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

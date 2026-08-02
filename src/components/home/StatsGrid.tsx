"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Container } from "@/components/layout/Container";
import { Factory, Users, Weight, Building2 } from "lucide-react";

const stats = [
  {
    icon: Weight,
    value: 60000,
    suffix: "+",
    label: "تن تولید کل",
    description: "بیش از شصت هزار تن فرآورده فولادی",
  },
  {
    icon: Factory,
    value: 167,
    suffix: "",
    label: "تن ظرفیت روزانه",
    description: "تولید روزانه در دو کارخانه",
  },
  {
    icon: Users,
    value: 450,
    suffix: "+",
    label: "نفر پرسنل",
    description: "تیم متخصص و مجرب",
  },
  {
    icon: Building2,
    value: 150,
    suffix: "+",
    label: "پروژه موفق",
    description: "پروژه‌های اجرا شده در سراسر کشور",
  },
];

export function StatsGrid() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-12 sm:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="var(--color-amber-brand)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative min-h-36 overflow-hidden rounded-xl border border-border/50 bg-card/60 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-brand/40 hover:shadow-xl hover:shadow-amber-brand/10 sm:min-h-0 sm:rounded-2xl sm:p-8">
                {/* Top gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />

                {/* Icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-brand/15 to-copper/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-brand/20 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-xl">
                  <stat.icon className="h-5 w-5 text-amber-brand sm:h-7 sm:w-7" />
                </div>

                {/* Number */}
                <div className="mb-1 text-2xl font-extrabold tracking-tight text-gradient-brand sm:mb-2 sm:text-4xl lg:text-5xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="mb-1 text-sm font-semibold leading-snug text-charcoal sm:mb-2 sm:text-base">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="hidden text-sm leading-relaxed text-slate-custom sm:block">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

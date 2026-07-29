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
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#F59E0B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-amber-brand/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-brand/10 hover:-translate-y-1">
                {/* Top gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-brand/15 to-copper/10 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-brand/20 transition-all duration-300">
                  <stat.icon className="h-7 w-7 text-amber-brand" />
                </div>

                {/* Number */}
                <div className="text-4xl lg:text-5xl font-extrabold text-gradient-brand mb-2 tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-base font-semibold text-charcoal mb-2">{stat.label}</p>

                {/* Description */}
                <p className="text-sm text-slate-custom leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

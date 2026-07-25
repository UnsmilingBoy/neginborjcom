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
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-6 rounded-xl border border-border bg-card hover:border-amber-brand/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-brand/10">
                  <stat.icon className="h-6 w-6 text-amber-brand" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-charcoal mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-slate-custom mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

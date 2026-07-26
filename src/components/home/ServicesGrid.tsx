"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "اسکلت فلزی سنگین",
    description:
      "ساخت و نصب اسکلت‌های فلزی سنگین برای ساختمان‌های بلندمرتبه و صنعتی با استانداردهای بین‌المللی.",
    icon: "/images/icons/skeleton.svg",
    href: "/services/skeleton",
  },
  {
    title: "سوله صنعتی",
    description:
      "طراحی و اجرای سوله‌های صنعتی با دهانه‌های بزرگ و ظرفیت‌های بالا برای کاربردهای متنوع.",
    icon: "/images/icons/suleh.svg",
    href: "/services/suleh",
  },
  {
    title: "پل‌های فلزی",
    description:
      "ساخت پل‌های فلزی خودروبر و پیاده‌رو با مقاومت بالا و طول عمر مفید بیش از ۵۰ سال.",
    icon: "/images/icons/bridge.svg",
    href: "/services/bridge",
  },
  {
    title: "سازه‌های پالایشگاهی",
    description:
      "ساخت و نصب سازه‌های تخصصی پالایشگاه و پتروشیمی با رعایت کلیه استانداردهای ایمنی.",
    icon: "/images/icons/refinery.svg",
    href: "/services/refinery",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative py-24 bg-muted/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-brand/3 to-transparent" />

      <Container className="relative">
        <SectionHeader
          title="خدمات ما"
          subtitle="با بیش از دو دهه تجربه، خدمات جامع صنعت فولاد را ارائه می‌دهیم"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group relative block h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-amber-brand/5 hover:border-amber-brand/30 transition-all duration-500"
              >
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-brand/10 to-amber-brand/5 group-hover:from-amber-brand/20 group-hover:to-amber-brand/10 transition-all duration-300">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-amber-brand transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-custom leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link indicator */}
                <div className="flex items-center gap-2 text-sm font-medium text-amber-brand opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>بیشتر بخوانید</span>
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

const services = [
  {
    title: "اسکلت فلزی سنگین",
    description:
      "ساخت و نصب اسکلت‌های فلزی سنگین برای ساختمان‌های بلندمرتبه و صنعتی با استانداردهای بین‌المللی.",
    icon: "/images/icons/skeleton.svg",
  },
  {
    title: "سوله صنعتی",
    description:
      "طراحی و اجرای سوله‌های صنعتی با دهانه‌های بزرگ و ظرفیت‌های بالا برای کاربردهای متنوع.",
    icon: "/images/icons/suleh.svg",
  },
  {
    title: "پل‌های فلزی",
    description:
      "ساخت پل‌های فلزی خودروبر و پیاده‌رو با مقاومت بالا و طول عمر مفید بیش از ۵۰ سال.",
    icon: "/images/icons/bridge.svg",
  },
  {
    title: "سازه‌های پالایشگاهی",
    description:
      "ساخت و نصب سازه‌های تخصصی پالایشگاه و پتروشیمی با رعایت کلیه استانداردهای ایمنی.",
    icon: "/images/icons/refinery.svg",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
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
              className="group relative p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-amber-brand/30 transition-all duration-300"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-amber-brand transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-custom leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

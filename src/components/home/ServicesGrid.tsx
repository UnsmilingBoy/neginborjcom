// components/sections/FactoryShowcase.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";

const captions = [
  "برش CNC ورق فولاد",
  "خط جوشکاری اسکلت اصلی",
  "مونتاژ ستون و تیر فلزی",
  "کنترل ابعاد و تراز سازه",
  "ساخت خرپای سوله صنعتی",
  "جوشکاری اتصالات سوله",
  "سندبلاست سطح فولاد",
  "رنگ‌آمیزی صنعتی سازه",
  "ساخت عرشه پل فلزی",
  "مونتاژ تیرهای اصلی پل",
  "تست بار و مقاومت سازه",
  "ساخت سازه اختصاصی پالایشگاه",
  "جوشکاری مخازن و لوله‌کشی",
  "بازرسی جوش با اولتراسونیک",
  "جابجایی با جرثقیل سقفی ۵۰ تنی",
  "انبار مواد اولیه فولادی",
  "برش و خم ورق‌های ضخیم",
  "مونتاژ نهایی در کارگاه",
  "بارگیری برای اعزام به سایت",
  "نصب سازه در محل پروژه",
];

const frames = captions.map((label, i) => ({
  index: i + 1,
  label,
  src: `/images/machinery/factory (${i + 1}).jpg`,
}));

function toPersianDigits(value: number | string) {
  const digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(value).replace(/[0-9]/g, (d) => digits[Number(d)]);
}

function FilmstripCard({
  src,
  label,
  index,
  total,
  scrollYProgress,
}: {
  src: string;
  label: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = (index - 1) / total;
  const center = (index - 0.5) / total;
  const end = index / total;

  const scale = useTransform(scrollYProgress, [start, center, end], [0.86, 1, 0.86]);
  const opacity = useTransform(scrollYProgress, [start, center, end], [0.45, 1, 0.45]);
  const gray = useTransform(scrollYProgress, [start, center, end], [1, 0, 1]);
  const filter = useMotionTemplate`grayscale(${gray})`;

  return (
    
    <motion.div
      style={{ scale, filter }}
      className="relative shrink-0 h-[52vh] sm:h-[58vh] lg:h-[64vh] max-h-[32rem] sm:max-h-[38rem] lg:max-h-[45rem] aspect-[4/5] overflow-hidden rounded-sm border border-border/40 will-change-transform"
    >
      <Image
        src={src}
        alt={label}
        fill
        priority={index <= 3}
        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 35vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
        <span dir="rtl" className="text-sm md:text-base font-medium text-white">
          {label}
        </span>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-amber-brand">
          {toPersianDigits(String(index).padStart(2, "0"))}
        </span>
      </div>
    </motion.div>
  );
}

function StaticFactoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      {frames.map((f) => (
        <div key={f.src} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/40">
          <Image src={f.src} alt={f.label} fill sizes="25vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          <span dir="rtl" className="absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-white">
            {f.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function FactoryShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [distance, setDistance] = useState(0);
  const [activeLabel, setActiveLabel] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveLabel(Math.min(frames.length, Math.max(1, Math.ceil(v * frames.length))));
  });

  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        setDistance(trackRef.current.scrollWidth - window.innerWidth);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -Math.max(distance, 0)]);
  const x = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.4 });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (prefersReducedMotion) {
    return (
      <section className="relative bg-background py-16 sm:py-24">
        <Container>
          <SectionHeader
            title="درون خط تولید"
            subtitle="از برش ورق فولاد تا نصب سازه در محل پروژه؛ نگاهی به فرآیند ساخت در کارگاه نگین برج قائم"
          />
          <div className="mt-12">
            <StaticFactoryGrid />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative bg-background pb-16 sm:pb-24">
      <Container className="pt-16 sm:pt-24">
        <SectionHeader
          title="درون خط تولید"
          subtitle="از برش ورق فولاد تا نصب سازه در محل پروژه؛ نگاهی به فرآیند ساخت در کارگاه نگین برج قائم"
        />
      </Container>

      <div ref={sectionRef} style={{ height: `${frames.length * 18}vh` }} className="relative">
        <div dir="ltr" className="sticky top-0 flex h-[min(100vh,56rem)] flex-col justify-center overflow-hidden">
          <motion.div
            ref={trackRef}
            dir="ltr"
            style={{ x }}
            className="flex w-max items-center gap-5 pl-6 pr-[18vw] md:gap-7 md:pl-10 will-change-transform"
          >
            {frames.map((f) => (
              <FilmstripCard key={f.src} {...f} total={frames.length} scrollYProgress={scrollYProgress} />
            ))}
          </motion.div>

          <div className="absolute inset-x-0 bottom-8 md:bottom-10">
            <Container>
              <div className="flex items-center gap-6 text-xs text-slate-custom">
                <span className="shrink-0 font-semibold tabular-nums text-amber-brand">
                  {toPersianDigits(activeLabel)} / {toPersianDigits(frames.length)}
                </span>
                <div className="relative h-px flex-1 overflow-hidden bg-border/40">
                  <motion.div style={{ width: progressWidth }} className="absolute inset-y-0 right-0 bg-gradient-brand" />
                </div>
                <span dir="rtl" className="hidden shrink-0 sm:inline">
                  خط تولید نگین برج قائم
                </span>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
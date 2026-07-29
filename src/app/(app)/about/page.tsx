"use client";

import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/PageHero";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Shield,
  Users,
  Factory,
  Target,
  Gauge,
  Leaf,
  HeartHandshake,
  Quote,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { icon: Factory, end: 2, suffix: "", label: "کارخانه فعال" },
  { icon: Users, end: 450, suffix: "+", label: "پرسنل متخصص" },
  { icon: Award, end: 14, suffix: "", label: "گواهینامه کیفیت" },
  { icon: Shield, end: 10, suffix: "", label: "تندیس و لوح تقدیر" },
];

const highlights = [
  "بیش از ۶۰,۰۰۰ تن تولید فولاد",
  "۱۵۰+ پروژه ملی اجرا شده",
  "تیم مهندسی و اجرایی متخصص",
  "تجهیزات و ماشین‌آلات پیشرفته",
];

const values = [
  {
    icon: Gauge,
    title: "کیفیت بی‌وقفه",
    description:
      "پایبندی به استانداردهای بین‌المللی در تمام مراحل تولید و اجرا، از انتخاب مواد اولیه تا تحویل نهایی پروژه.",
  },
  {
    icon: Target,
    title: "دقت مهندسی",
    description:
      "طراحی و اجرای سازه‌های فولادی با بالاترین دقت فنی و بهره‌گیری از دانش روز مهندسی سازه.",
  },
  {
    icon: HeartHandshake,
    title: "اعتماد مشتری",
    description:
      "جلب اعتماد بیش از ۱۵۰ مشتری بزرگ کشور از طریق تعهد به زمان‌بندی و شفافیت در همکاری.",
  },
  {
    icon: Leaf,
    title: "مسئولیت زیست‌محیطی",
    description:
      "تعهد به تولید پاک و رعایت الزامات زیست‌محیطی مطابق با گواهینامه ISO 14001.",
  },
];

const milestones = [
  {
    year: "۱۳۸۰",
    title: "آغاز فعالیت",
    description: "تأسیس گروه صنعتی نگین برج قائم با تمرکز بر ساخت اسکلت فلزی.",
  },
  {
    year: "۱۳۸۸",
    title: "توسعه کارخانه",
    description: "راه‌اندازی دومین خط تولید و افزایش ظرفیت ساخت سالانه.",
  },
  {
    year: "۱۳۹۵",
    title: "استانداردهای جهانی",
    description: "اخذ گواهینامه‌های ISO و ورود به پروژه‌های صنعتی بزرگ‌مقیاس.",
  },
  {
    year: "۱۴۰۲",
    title: "پیشرو در صنعت",
    description: "تکمیل بیش از ۱۵۰ پروژه ملی و کسب تندیس‌های تعالی سازمانی.",
  },
];

const certifications = [
  "ISO 9001:2015 - سیستم مدیریت کیفیت",
  "ISO 14001:2015 - سیستم مدیریت زیست‌محیطی",
  "ISO 45001:2018 - سیستم مدیریت ایمنی و بهداشت شغلی",
  "OHSAS 18001 - ایمنی و بهداشت شغلی",
  "گواهینامه صلاحیت پیمانکاری درجه یک",
  "گواهینامه ISO 3834 - جوشکاری",
  "گواهینامه EN 1090 - اجرای سازه‌های فولادی",
  "گواهینامه CE - محصولات اروپایی",
  "تندیس زرین کیفیت و ایمنی",
  "لوح تقدیر وزارت صنعت و معدن",
  "تندیس تعالی سازمانی",
  "گواهینامه رعایت حقوق مصرف‌کنندگان",
  "لوح تقدیر انجمن صنفی فولاد",
  "تندیس برترین تولیدکننده سال",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره ما"
        title={
          <>
            دو دهه پیشگامی در{" "}
            <span className="relative inline-block">
              <span className="text-amber-brand">صنعت فولاد</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-brand to-amber-brand/0" />
            </span>
          </>
        }
        subtitle="گروه صنعتی نگین برج قائم، تولیدکننده و مجری سازه‌های فولادی سنگین با کارنامه‌ای درخشان از پروژه‌های ملی در سراسر ایران."
      />

      {/* ── Story ────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-brand/20 bg-amber-brand/10 px-4 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-brand" />
                <span className="text-xs font-medium uppercase tracking-wider text-amber-brand">
                  داستان ما
                </span>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
                از یک کارگاه کوچک تا صنعتی ملی
              </h2>
              <p className="mb-4 leading-loose text-slate-custom">
                گروه صنعتی نگین برج قائم با بیش از دو دهه تجربه درخشان در صنعت
                فولاد ایران، همواره با تکیه بر دانش فنی، تیم متخصص و تجهیزات
                پیشرفته، پروژه‌های بزرگ و پیچیده را با بالاترین کیفیت و در
                کوتاه‌ترین زمان ممکن اجرا کرده است.
              </p>
              <p className="leading-loose text-slate-custom">
                امروز ما مفتخریم که با دو کارخانه فعال و بیش از ۴۵۰ پرسنل متخصص،
                اعتماد بیش از ۱۵۰ مشتری بزرگ کشور را جلب کرده‌ایم.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-charcoal"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CEO quote card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="relative border-amber-brand/20 bg-gradient-to-bl from-amber-brand/[0.05] to-transparent">
                <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-amber-brand to-amber-dark" />
                <CardContent className="p-8 sm:p-10">
                  <Quote className="mb-6 h-10 w-10 text-amber-brand/30" />
                  <p className="text-base leading-loose text-slate-custom sm:text-lg">
                    ما باور داریم که هر سازه فولادی، نمادی از اعتماد و تعهد ماست.
                    ماموریت ما ساختن زیرساخت‌هایی است که نسل‌ها بر آن‌ها تکیه
                    کنند.
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-brand/10 ring-1 ring-amber-brand/20">
                      <Users className="h-7 w-7 text-amber-brand" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-charcoal">
                        پیام مدیرعامل
                      </h3>
                      <p className="text-sm text-slate-custom">
                        مدیرعامل گروه صنعتی نگین برج قائم
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Stats band ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-dark py-20">
        <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-amber-brand/5 blur-[120px]" />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-brand/10 ring-1 ring-amber-brand/20">
                  <stat.icon className="h-7 w-7 text-amber-brand" />
                </div>
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  className="block text-4xl font-extrabold text-white"
                />
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl">
              ارزش‌های ما
            </h2>
            <p className="leading-relaxed text-slate-custom">
              اصولی که مسیر رشد و تصمیم‌گیری‌های ما را در طول این سال‌ها هدایت
              کرده‌اند.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full transition-colors hover:ring-amber-brand/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-brand/10 transition-transform group-hover:scale-110">
                      <value.icon className="h-6 w-6 text-amber-brand" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-charcoal">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-custom">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <Container>
          <h2 className="mb-14 text-center text-3xl font-extrabold text-charcoal sm:text-4xl">
            مسیر رشد ما
          </h2>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-2 right-[7px] top-2 w-px bg-gradient-to-b from-amber-brand/40 via-border to-transparent" />
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pr-10"
                >
                  <div className="absolute right-0 top-1.5 h-4 w-4 rounded-full border-2 border-amber-brand bg-background" />
                  <span className="text-sm font-bold text-amber-brand">
                    {milestone.year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-charcoal">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-custom">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Certifications ───────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl">
              گواهینامه‌ها و تقدیرنامه‌ها
            </h2>
            <p className="leading-relaxed text-slate-custom">
              گواهی‌های ملی و بین‌المللی که کیفیت و تعهد ما را تأیید می‌کنند.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
              >
                <div className="flex h-full items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-amber-brand/40 hover:shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-brand/10">
                    <Award className="h-4 w-4 text-amber-brand" />
                  </div>
                  <span className="text-sm leading-snug text-slate-custom">
                    {cert}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-dark py-20">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-amber-brand/5 blur-[120px]" />
        </div>
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              پروژه بعدی خود را با ما بسازید
            </h2>
            <p className="mb-8 leading-relaxed text-slate-400">
              تیم مهندسی ما آماده بررسی پروژه شما و ارائه بهترین راهکار است.
            </p>
            <Link
              href="/rfq"
              className="group inline-flex items-center gap-3 rounded-xl bg-amber-brand px-8 py-4 text-base font-semibold text-charcoal shadow-lg shadow-amber-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-dark hover:shadow-amber-brand/40"
            >
              درخواست پیش‌فاکتور
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

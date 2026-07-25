"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Shield, Users, Factory } from "lucide-react";
import Image from "next/image";

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

const stats = [
  { icon: Factory, value: "۲", label: "کارخانه فعال" },
  { icon: Users, value: "۴۵۰+", label: "پرسنل متخصص" },
  { icon: Award, value: "۱۴", label: "گواهینامه کیفیت" },
  { icon: Shield, value: "۱۰", label: "تندیس و لوح تقدیر" },
];

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          title="درباره ما"
          subtitle="بیش از دو دهه تجربه در صنعت فولاد ایران"
        />

        {/* CEO Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="border-amber-brand/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Users className="h-8 w-8 text-amber-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-1">پیام مدیرعامل</h3>
                  <p className="text-sm text-slate-custom mb-3">
                    مهندس — مدیرعامل گروه صنعتی نگین برج قائم
                  </p>
                  <p className="text-sm text-slate-custom leading-relaxed">
                    گروه صنعتی نگین برج قائم با بیش از دو دهه تجربه درخشان در صنعت
                    فولاد ایران، همواره با تکیه بر دانش فنی، تیم متخصص و تجهیزات
                    پیشرفته، پروژه‌های بزرگ و پیچیده را با بالاترین کیفیت و در
                    کوتاه‌ترین زمان ممکن اجرا کرده است. ما مفتخریم که توانسته‌ایم
                    اعتماد بیش از ۱۵۰ مشتری بزرگ کشور را جلب کنیم.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-amber-brand mx-auto mb-3" />
                  <p className="text-2xl font-extrabold text-charcoal">{stat.value}</p>
                  <p className="text-sm text-slate-custom">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-charcoal text-center mb-8">
            گواهینامه‌ها و تقدیرنامه‌ها
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-amber-brand/30 transition-colors">
                  <div className="shrink-0 h-8 w-8 rounded bg-amber-brand/10 flex items-center justify-center">
                    <Award className="h-4 w-4 text-amber-brand" />
                  </div>
                  <span className="text-sm text-slate-custom">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

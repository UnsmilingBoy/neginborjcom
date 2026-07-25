"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Factory } from "lucide-react";

const milestones = [
  {
    year: "۱۳۸۴",
    yearEn: "2005",
    title: "تأسیس کارخانه بشل",
    description:
      "اولین کارخانه تولید اسکلت فلزی در شهر بشل، مازندران با هدف تأمین نیازهای صنعتی منطقه تأسیس شد.",
    side: "right",
  },
  {
    year: "۱۳۹۴",
    yearEn: "2015",
    title: "توسعه کارخانه ساری",
    description:
      "دومین کارخانه در شهر ساری با ظرفیت تولید بالاتر و ماشین‌آلات پیشرفته‌تر راه‌اندازی شد.",
    side: "left",
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionHeader
          title="مسیر پیشرفت"
          subtitle="از تأسیس تا توسعه، مسیر رشد گروه صنعتی نگین برج قائم"
        />
        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-brand/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.yearEn}
                initial={{ opacity: 0, x: milestone.side === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  milestone.side === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content card */}
                <div className="flex-1 w-full">
                  <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-brand/10">
                        <Calendar className="h-5 w-5 text-amber-brand" />
                      </div>
                      <div>
                        <span className="text-2xl font-extrabold text-amber-brand">
                          {milestone.year}
                        </span>
                        <span className="text-sm text-slate-400 mr-2">
                          ({milestone.yearEn})
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-custom leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex h-5 w-5 rounded-full bg-amber-brand border-4 border-background z-10 shrink-0" />

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

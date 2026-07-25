"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Factory, ArrowLeft } from "lucide-react";

const milestones = [
  {
    year: "۱۳۸۴",
    yearEn: "2005",
    title: "تأسیس کارخانه بشل",
    description:
      "اولین کارخانه تولید اسکلت فلزی در شهر بشل، مازندران با هدف تأمین نیازهای صنعتی منطقه تأسیس شد.",
    side: "right",
    icon: Factory,
  },
  {
    year: "۱۳۹۴",
    yearEn: "2015",
    title: "توسعه کارخانه ساری",
    description:
      "دومین کارخانه در شهر ساری با ظرفیت تولید بالاتر و ماشین‌آلات پیشرفته‌تر راه‌اندازی شد.",
    side: "left",
    icon: Factory,
  },
];

export function Timeline() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="timeline-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 L 20 0 L 40 20 L 20 40 Z" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline-pattern)" />
        </svg>
      </div>

      <Container className="relative">
        <SectionHeader
          title="مسیر پیشرفت"
          subtitle="از تأسیس تا توسعه، مسیر رشد گروه صنعتی نگین برج قائم"
        />

        <div className="relative mt-20">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-brand/0 via-amber-brand/30 to-amber-brand/0 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
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
                  <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-amber-brand/5 transition-all duration-500">
                    {/* Year badge */}
                    <div className="absolute -top-4 left-8 px-4 py-1.5 bg-amber-brand rounded-full">
                      <span className="text-sm font-bold text-charcoal">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-brand/10 to-amber-brand/5">
                          <milestone.icon className="h-6 w-6 text-amber-brand" />
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 block">
                            {milestone.yearEn}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-custom leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-brand/0 via-amber-brand to-amber-brand/0 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex relative z-10 shrink-0">
                  <div className="h-6 w-6 rounded-full bg-amber-brand flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-background" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 h-6 w-6 rounded-full bg-amber-brand animate-ping opacity-20" />
                </div>

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

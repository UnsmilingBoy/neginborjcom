"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const machineryData = {
  beshel: {
    name: "کارخانه بشل",
    established: "۱۳۸۴ (۲۰۰۵)",
    items: [
      {
        name: "دستگاه برش CNC",
        specs: [
          { key: "نوع", value: "پلاسما و اکسیژن" },
          { key: "ابعاد برش", value: "۱۲×۳ متر" },
          { key: "دقت", value: "±۰.۵ میلی‌متر" },
        ],
        image: "/images/machinery/placeholder-1.svg",
      },
      {
        name: "پرس هیدرولیک",
        specs: [
          { key: "نیرو", value: "۵۰۰ تن" },
          { key: "کوره", value: "۶ متری" },
          { key: "ظرفیت", value: "۱۶۷ تن/روز" },
        ],
        image: "/images/machinery/placeholder-1.svg",
      },
      {
        name: "جرثقیل سقفی",
        specs: [
          { key: "ظرفیت", value: "۳۰ تن" },
          { key: "دهانه", value: "۲۴ متر" },
          { key: "تعداد", value: "۴ دستگاه" },
        ],
        image: "/images/machinery/placeholder-1.svg",
      },
    ],
  },
  sari: {
    name: "کارخانه ساری",
    established: "۱۳۹۴ (۲۰۱۵)",
    items: [
      {
        name: "دستگاه برش لیزری",
        specs: [
          { key: "نوع", value: "فیبر لیزری" },
          { key: "توان", value: "۶۰۰۰ وات" },
          { key: "ابعاد", value: "۶×۲.۵ متر" },
        ],
        image: "/images/machinery/placeholder-1.svg",
      },
      {
        name: "پرس brake",
        specs: [
          { key: "نیرو", value: "۳۰۰ تن" },
          { key: "طول", value: "۴ متر" },
          { key: "کاربرد", value: "خمکاری ورق" },
        ],
        image: "/images/machinery/placeholder-1.svg",
      },
      {
        name: "جرثقیل سقفی",
        specs: [
          { key: "ظرفیت", value: "۲۰ تن" },
          { key: "دهانه", value: "۲۰ متر" },
          { key: "تعداد", value: "۳ دستگاه" },
        ],
        image: "/images/machinery/placeholder-1.svg",
      },
    ],
  },
};

export default function MachineryPage() {
  return (
    <>
      <PageHero
        eyebrow="ماشین‌آلات"
        title="ماشین‌آلات و تجهیزات"
        subtitle="تجهیزات پیشرفته در دو کارخانه بشل و ساری"
      />

      <section className="py-16">
        <Container>
          <Tabs defaultValue="beshel">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="beshel">کارخانه بشل</TabsTrigger>
            <TabsTrigger value="sari">کارخانه ساری</TabsTrigger>
          </TabsList>

          {Object.entries(machineryData).map(([key, factory]) => (
            <TabsContent key={key} value={key}>
              <div className="mb-6 text-center">
                <p className="text-sm text-slate-custom">
                  {factory.name} — تأسیس {factory.established}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {factory.items.map((machine, index) => (
                  <motion.div
                    key={machine.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[3/2] bg-muted">
                        <Image
                          src={machine.image}
                          alt={machine.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-base font-bold text-charcoal mb-3">
                          {machine.name}
                        </h3>
                        <div className="space-y-2">
                          {machine.specs.map((spec) => (
                            <div
                              key={spec.key}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-slate-400">{spec.key}</span>
                              <span className="font-medium text-charcoal">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        </Container>
      </section>
    </>
  );
}

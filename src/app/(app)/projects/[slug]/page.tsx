"use client";

import { useParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ImageSlider } from "@/components/projects/ImageSlider";
import { Badge } from "@/components/ui/badge";
import { MapPin, Weight, User, Calendar } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Demo data — will be replaced with Payload CMS data
const projectsData: Record<
  string,
  {
    title: string;
    category: string;
    categoryLabel: string;
    location: string;
    tonnage: number;
    client: string;
    completionDate: string;
    description: string;
    images: { src: string; alt: string }[];
  }
> = {
  "naft-markazi": {
    title: "مجتمع صنعتی نفت مرکزی",
    category: "refinery",
    categoryLabel: "سازه پالایشگاهی",
    location: "عسلویه، بوشهر",
    tonnage: 4500,
    client: "شرکت ملی نفت ایران",
    completionDate: "۱۴۰۱",
    description:
      "ساخت و نصب اسکلت فلزی و سازه‌های پالایشگاهی مجتمع صنعتی نفت مرکزی در منطقه عسلویه. این پروژه شامل ساخت بیش از ۴۵۰۰ تن سازه فولادی با استانداردهای بین‌المللی بود.",
    images: [
      { src: "/images/projects/placeholder-1.svg", alt: "نمای کلی پروژه" },
      { src: "/images/projects/placeholder-1.svg", alt: "جزئیات اجرا" },
      { src: "/images/projects/placeholder-1.svg", alt: "تصویر نهایی" },
    ],
  },
};

const fallbackProject = {
  title: "پروژه",
  category: "skeleton",
  categoryLabel: "اسکلت فلزی",
  location: "ایران",
  tonnage: 0,
  client: "-",
  completionDate: "-",
  description: "اطلاعات این پروژه در حال به‌روزرسانی است.",
  images: [{ src: "/images/projects/placeholder-1.svg", alt: "تصویر پروژه" }],
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug] || { ...fallbackProject, title: slug };

  return (
    <section className="py-16">
      <Container>
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-custom hover:text-amber-brand transition-colors mb-8"
        >
          <ArrowRight className="h-4 w-4" />
          بازگشت به پروژه‌ها
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Image slider */}
          <div className="lg:col-span-2">
            <ImageSlider images={project.images} />
          </div>

          {/* Details */}
          <div>
            <Badge variant="outline" className="mb-4 text-sm">
              {project.categoryLabel}
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-6">
              {project.title}
            </h1>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-amber-brand shrink-0" />
                <span className="text-slate-custom">{project.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Weight className="h-4 w-4 text-amber-brand shrink-0" />
                <span className="text-slate-custom">
                  {project.tonnage.toLocaleString("fa-IR")} تن
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="h-4 w-4 text-amber-brand shrink-0" />
                <span className="text-slate-custom">{project.client}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-amber-brand shrink-0" />
                <span className="text-slate-custom">
                  تاریخ تکمیل: {project.completionDate}
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-charcoal mb-3">توضیحات پروژه</h3>
              <p className="text-sm text-slate-custom leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

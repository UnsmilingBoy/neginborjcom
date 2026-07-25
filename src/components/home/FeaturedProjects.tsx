"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Demo data — will be replaced with Payload CMS data
const demoProjects = [
  {
    title: "مجتمع صنعتی نفت مرکزی",
    slug: "naft-markazi",
    category: "refinery" as const,
    location: "عسلویه",
    tonnage: 4500,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "سوله صنعتی کارخانه فولاد",
    slug: "foolad-suleh",
    category: "suleh" as const,
    location: "اصفهان",
    tonnage: 2800,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "پل فلزی بزرگ رودخانه",
    slug: "pol-roodkhane",
    category: "bridge" as const,
    location: "ساری",
    tonnage: 1200,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "اسکلت فلزی برج مسکونی",
    slug: "borj-maskooni",
    category: "skeleton" as const,
    location: "تهران",
    tonnage: 3200,
    coverImage: "/images/projects/placeholder-1.svg",
  },
];

const categoryLabels: Record<string, string> = {
  skeleton: "اسکلت فلزی",
  suleh: "سوله",
  bridge: "پل",
  refinery: "پالایشگاه",
};

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <SectionHeader
          title="پروژه‌های شاخص"
          subtitle="نگاهی به برخی از پروژه‌های موفق اجرا شده توسط گروه صنعتی نگین برج قائم"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {demoProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                categoryLabel={categoryLabels[project.category]}
                location={project.location}
                tonnage={project.tonnage}
                coverImage={project.coverImage}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-300 text-charcoal hover:bg-charcoal hover:text-white font-semibold transition-colors"
          >
            مشاهده همه پروژه‌ها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

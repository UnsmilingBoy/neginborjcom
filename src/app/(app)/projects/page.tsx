"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/PageHero";
import { FilterTabs } from "@/components/projects/FilterTabs";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { motion } from "framer-motion";

const categories = [
  { value: "all", label: "همه" },
  { value: "skeleton", label: "اسکلت فلزی" },
  { value: "suleh", label: "سوله" },
  { value: "bridge", label: "پل" },
  { value: "refinery", label: "پالایشگاه" },
];

const categoryLabels: Record<string, string> = {
  skeleton: "اسکلت فلزی",
  suleh: "سوله",
  bridge: "پل",
  refinery: "پالایشگاه",
};

// Demo data — will be replaced with Payload CMS data
const allProjects = [
  {
    title: "مجتمع صنعتی نفت مرکزی",
    slug: "naft-markazi",
    category: "refinery",
    location: "عسلویه",
    tonnage: 4500,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "سوله صنعتی کارخانه فولاد",
    slug: "foolad-suleh",
    category: "suleh",
    location: "اصفهان",
    tonnage: 2800,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "پل فلزی بزرگ رودخانه",
    slug: "pol-roodkhane",
    category: "bridge",
    location: "ساری",
    tonnage: 1200,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "اسکلت فلزی برج مسکونی",
    slug: "borj-maskooni",
    category: "skeleton",
    location: "تهران",
    tonnage: 3200,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "پالایشگاه گاز طبیعی",
    slug: "palaeshgah-gaz",
    category: "refinery",
    location: "باهنر",
    tonnage: 6200,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "سوله انبار صنعتی",
    slug: "suleh-anbar",
    category: "suleh",
    location: "ساری",
    tonnage: 1800,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "پل عابر پیاده",
    slug: "pol-aber",
    category: "bridge",
    location: "تهران",
    tonnage: 450,
    coverImage: "/images/projects/placeholder-1.svg",
  },
  {
    title: "اسکلت فلزی ساختمان اداری",
    slug: "edari-building",
    category: "skeleton",
    location: "رشت",
    tonnage: 2100,
    coverImage: "/images/projects/placeholder-1.svg",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="پروژه‌ها"
        title="پروژه‌ها"
        subtitle="نمایشگاه پروژه‌های اجرا شده توسط گروه صنعتی نگین برج قائم"
      />

      <section className="py-16">
        <Container>
          <div className="mb-10">
          <FilterTabs
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category as "skeleton" | "suleh" | "bridge" | "refinery"}
                categoryLabel={categoryLabels[project.category]}
                location={project.location}
                tonnage={project.tonnage}
                coverImage={project.coverImage}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>
        </Container>
      </section>
    </>
  );
}

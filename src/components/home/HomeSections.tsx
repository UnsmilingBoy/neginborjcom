"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "./HeroSection";
import { StatsGrid } from "./StatsGrid";
import { FactoryShowcase } from "./ServicesGrid";

const Timeline = dynamic(() => import("./Timeline").then((m) => m.Timeline), {
  ssr: false,
});

const FeaturedProjects = dynamic(
  () => import("./FeaturedProjects").then((m) => m.FeaturedProjects),
  { ssr: false },
);

const CTASection = dynamic(() => import("./CTASection"), { ssr: false });

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <StatsGrid />
      <FactoryShowcase />
      <Timeline />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin, Weight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  slug: string;
  category: "skeleton" | "suleh" | "bridge" | "refinery";
  categoryLabel: string;
  location: string;
  tonnage: number;
  coverImage: string;
}

const categoryColors: Record<string, string> = {
  skeleton: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  suleh: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  bridge: "bg-violet-500/10 text-violet-600 border-violet-500/20",
  refinery: "bg-amber-brand/10 text-amber-dark border-amber-brand/20",
};

export function ProjectCard({
  title,
  slug,
  category,
  categoryLabel,
  location,
  tonnage,
  coverImage,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-amber-brand/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge
            variant="outline"
            className={`text-xs font-medium ${categoryColors[category]}`}
          >
            {categoryLabel}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-amber-brand transition-colors line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Weight className="h-3 w-3" />
            {tonnage.toLocaleString("fa-IR")} تن
          </span>
        </div>
      </div>
    </Link>
  );
}

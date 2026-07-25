"use client";

import { Badge } from "@/components/ui/badge";

interface FilterTabsProps {
  categories: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat.value
              ? "bg-amber-brand text-charcoal shadow-md"
              : "bg-muted text-slate-custom hover:bg-muted/80 border border-border"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

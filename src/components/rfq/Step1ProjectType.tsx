"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Step1Props {
  data: {
    projectType: string;
    estimatedTonnage: string;
  };
  onChange: (data: Partial<Step1Props["data"]>) => void;
}

const projectTypes = [
  { value: "skeleton", label: "اسکلت فلزی سنگین" },
  { value: "suleh", label: "سوله صنعتی" },
  { value: "bridge", label: "پل فلزی" },
  { value: "refinery", label: "سازه پالایشگاهی" },
  { value: "other", label: "سایر" },
];

export function Step1ProjectType({ data, onChange }: Step1Props) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold mb-3 block">نوع پروژه</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => onChange({ projectType: type.value })}
              className={`p-4 rounded-lg border-2 text-right transition-all ${
                data.projectType === type.value
                  ? "border-amber-brand bg-amber-brand/5 text-charcoal"
                  : "border-border hover:border-slate-300 text-slate-custom"
              }`}
            >
              <span className="font-medium">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="tonnage" className="text-base font-semibold">
          وزن تقریبی فولاد (تن)
        </Label>
        <Input
          id="tonnage"
          type="number"
          placeholder="مثلاً ۵۰۰"
          value={data.estimatedTonnage}
          onChange={(e) => onChange({ estimatedTonnage: e.target.value })}
          className="mt-2"
        />
      </div>
    </div>
  );
}

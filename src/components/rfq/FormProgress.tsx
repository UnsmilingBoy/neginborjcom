"use client";

import { Check } from "lucide-react";

interface FormProgressProps {
  currentStep: number;
  steps: string[];
}

export function FormProgress({ currentStep, steps }: FormProgressProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
              index < currentStep
                ? "bg-amber-brand text-charcoal"
                : index === currentStep
                  ? "bg-charcoal text-white ring-2 ring-amber-brand"
                  : "bg-muted text-slate-400"
            }`}
          >
            {index < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              index + 1
            )}
          </div>
          <span
            className={`hidden sm:inline text-sm ${
              index <= currentStep ? "text-charcoal font-medium" : "text-slate-400"
            }`}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`hidden sm:block w-8 h-0.5 ${
                index < currentStep ? "bg-amber-brand" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

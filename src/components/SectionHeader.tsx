interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-brand/10 border border-amber-brand/20 mb-6">
        <div className="h-1.5 w-1.5 rounded-full bg-amber-brand" />
        <span className="text-xs font-medium text-amber-brand uppercase tracking-wider">
          {title}
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
        {title}
      </h2>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-brand/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-amber-brand" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-brand/50" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg text-slate-custom leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

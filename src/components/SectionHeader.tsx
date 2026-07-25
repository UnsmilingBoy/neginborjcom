interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal mb-4">
        {title}
      </h2>
      <div className="w-16 h-1 bg-amber-brand rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className="text-base text-slate-custom leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

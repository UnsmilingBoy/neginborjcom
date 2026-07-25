"use client";

interface Step4Props {
  data: {
    projectType: string;
    estimatedTonnage: string;
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    timeline: string;
    notes: string;
    blueprintFileName: string;
  };
}

const projectTypeLabels: Record<string, string> = {
  skeleton: "اسکلت فلزی سنگین",
  suleh: "سوله صنعتی",
  bridge: "پل فلزی",
  refinery: "سازه پالایشگاهی",
  other: "سایر",
};

export function Step4Review({ data }: Step4Props) {
  const rows = [
    { label: "نوع پروژه", value: projectTypeLabels[data.projectType] || "-" },
    { label: "وزن تقریبی", value: data.estimatedTonnage ? `${data.estimatedTonnage} تن` : "-" },
    { label: "نام شرکت", value: data.companyName || "-" },
    { label: "تماس‌گیرنده", value: data.contactPerson || "-" },
    { label: "تلفن", value: data.phone || "-" },
    { label: "ایمیل", value: data.email || "-" },
    { label: "زمان‌بندی", value: data.timeline || "-" },
    { label: "فایل نقشه", value: data.blueprintFileName || "بدون فایل" },
    { label: "توضیحات", value: data.notes || "-" },
  ];

  return (
    <div>
      <p className="text-sm text-slate-custom mb-6">
        لطفاً اطلاعات زیر را بررسی کنید و سپس ارسال کنید:
      </p>
      <div className="border border-border rounded-xl overflow-hidden">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex justify-between px-4 py-3 text-sm ${
              index % 2 === 0 ? "bg-muted/50" : "bg-card"
            }`}
          >
            <span className="font-medium text-charcoal">{row.label}</span>
            <span className="text-slate-custom text-left max-w-[60%]">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

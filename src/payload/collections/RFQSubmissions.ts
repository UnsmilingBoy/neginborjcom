import type { CollectionConfig } from "payload";

export const RFQSubmissions: CollectionConfig = {
  slug: "rfq-submissions",
  admin: {
    useAsTitle: "companyName",
    description: "درخواست‌های پیش‌فاکتور مشتریان",
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
      label: "نام شرکت",
    },
    {
      name: "contactPerson",
      type: "text",
      required: true,
      label: "نام تماس",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      label: "تلفن",
    },
    {
      name: "email",
      type: "email",
      label: "ایمیل",
    },
    {
      name: "projectType",
      type: "select",
      required: true,
      options: [
        { label: "اسکلت فلزی سنگین", value: "skeleton" },
        { label: "سوله صنعتی", value: "suleh" },
        { label: "پل فلزی", value: "bridge" },
        { label: "سازه پالایشگاهی", value: "refinery" },
        { label: "سایر", value: "other" },
      ],
      label: "نوع پروژه",
    },
    {
      name: "estimatedTonnage",
      type: "number",
      label: "وزن تقریبی (تن)",
    },
    {
      name: "timeline",
      type: "text",
      label: "زمان‌بندی مورد نظر",
    },
    {
      name: "blueprintFile",
      type: "upload",
      relationTo: "media",
      label: "فایل نقشه",
    },
    {
      name: "notes",
      type: "textarea",
      label: "توضیحات",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "جدید", value: "new" },
        { label: "در حال بررسی", value: "under-review" },
        { label: "پیش‌فاکتور ارسال شده", value: "quoted" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};

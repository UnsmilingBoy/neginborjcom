import type { CollectionConfig } from "payload";

const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);

export const JobApplications: CollectionConfig = {
  slug: "job-applications",
  labels: {
    singular: "درخواست همکاری",
    plural: "درخواست‌های همکاری",
  },
  admin: {
    useAsTitle: "fullName",
    description: "فرم‌های جذب نیروی انسانی وب‌سایت",
    defaultColumns: ["fullName", "mobile", "educationLevel", "status", "createdAt"],
    group: "استخدام",
  },
  access: {
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
      label: "نام و نام خانوادگی",
    },
    {
      name: "fatherName",
      type: "text",
      label: "نام پدر",
    },
    {
      name: "nationalCode",
      type: "text",
      required: true,
      label: "کد ملی",
    },
    {
      name: "email",
      type: "email",
      label: "ایمیل",
    },
    {
      name: "nationality",
      type: "text",
      label: "تابعیت",
    },
    {
      name: "gender",
      type: "select",
      label: "جنسیت",
      options: [
        { label: "خانم", value: "female" },
        { label: "آقا", value: "male" },
      ],
    },
    {
      name: "birthDate",
      type: "text",
      label: "تاریخ تولد",
    },
    {
      name: "maritalStatus",
      type: "select",
      label: "وضعیت تاهل",
      options: [
        { label: "مجرد", value: "single" },
        { label: "متاهل", value: "married" },
      ],
    },
    {
      name: "militaryStatus",
      type: "select",
      label: "وضعیت خدمت",
      options: [
        { label: "پایان خدمت", value: "completed" },
        { label: "معافیت", value: "exempt" },
        { label: "مشمول", value: "required" },
        { label: "در حال خدمت", value: "serving" },
        { label: "شامل نمی‌شود", value: "not-applicable" },
      ],
    },
    {
      name: "education",
      type: "group",
      label: "اطلاعات تحصیلی",
      fields: [
        {
          name: "level",
          type: "select",
          label: "آخرین مقطع",
          options: [
            { label: "دیپلم", value: "diploma" },
            { label: "فوق دیپلم", value: "associate" },
            { label: "کارشناسی", value: "bachelor" },
            { label: "کارشناسی ارشد", value: "master" },
            { label: "دکتری", value: "doctorate" },
          ],
        },
        {
          name: "gpa",
          type: "text",
          label: "معدل",
        },
        {
          name: "graduationYear",
          type: "text",
          label: "سال اخذ",
        },
        {
          name: "school",
          type: "text",
          label: "محل تحصیل",
        },
        {
          name: "field",
          type: "text",
          label: "رشته تحصیلی",
        },
      ],
    },
    {
      name: "mobile",
      type: "text",
      required: true,
      label: "موبایل",
    },
    {
      name: "phone",
      type: "text",
      label: "تلفن ثابت",
    },
    {
      name: "address",
      type: "textarea",
      label: "آدرس محل سکونت",
    },
    {
      name: "skills",
      type: "array",
      label: "مهارت‌ها",
      maxRows: 5,
      fields: [
        {
          name: "title",
          type: "text",
          label: "مهارت",
        },
      ],
    },
    {
      name: "otherSkills",
      type: "textarea",
      label: "مهارت‌های دیگر",
    },
    {
      name: "experiences",
      type: "array",
      label: "سوابق",
      maxRows: 5,
      fields: [
        {
          name: "title",
          type: "text",
          label: "سابقه",
        },
      ],
    },
    {
      name: "otherExperiences",
      type: "textarea",
      label: "سوابق دیگر",
    },
    {
      name: "hasInsurance",
      type: "checkbox",
      label: "سابقه بیمه دارد",
    },
    {
      name: "insuranceYears",
      type: "number",
      label: "سابقه بیمه - سال",
    },
    {
      name: "insuranceMonths",
      type: "number",
      label: "سابقه بیمه - ماه",
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "resume-files",
      label: "رزومه",
    },
    {
      name: "notes",
      type: "textarea",
      label: "توضیحات تکمیلی",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      label: "وضعیت",
      admin: {
        position: "sidebar",
      },
      options: [
        { label: "جدید", value: "new" },
        { label: "در حال بررسی", value: "reviewing" },
        { label: "دعوت به مصاحبه", value: "interview" },
        { label: "رد شده", value: "rejected" },
        { label: "استخدام شده", value: "hired" },
      ],
    },
  ],
};

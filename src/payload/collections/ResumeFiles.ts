import type { CollectionConfig } from "payload";

const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);

export const ResumeFiles: CollectionConfig = {
  slug: "resume-files",
  labels: {
    singular: "فایل رزومه",
    plural: "فایل‌های رزومه",
  },
  admin: {
    useAsTitle: "candidateName",
    description: "فایل‌های ارسالی فرم همکاری با ما",
    group: "استخدام",
  },
  access: {
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  upload: {
    staticDir: "../public/resumes",
    mimeTypes: [
      "application/zip",
      "application/x-zip-compressed",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },
  fields: [
    {
      name: "candidateName",
      type: "text",
      required: true,
      label: "نام متقاضی",
    },
  ],
};

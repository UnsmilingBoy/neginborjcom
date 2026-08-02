import type { CollectionConfig } from "payload";

const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);

export const BlueprintFiles: CollectionConfig = {
  slug: "blueprint-files",
  labels: {
    singular: "فایل نقشه",
    plural: "فایل‌های نقشه",
  },
  admin: {
    useAsTitle: "companyName",
    description: "فایل‌های نقشه ارسالی فرم درخواست پیش‌فاکتور",
    group: "درخواست‌ها",
  },
  access: {
    read: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  upload: {
    staticDir: "../public/blueprints",
    // Blueprints arrive in many formats (PDF/DWG/DXF/RAR/ZIP) and some
    // browsers send an empty or generic mime type, so keep this permissive.
    mimeTypes: [
      "application/pdf",
      "application/zip",
      "application/x-zip-compressed",
      "application/x-rar-compressed",
      "application/vnd.rar",
      "image/vnd.dwg",
      "image/x-dwg",
      "application/acad",
      "application/dxf",
      "application/octet-stream",
    ],
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
      label: "نام شرکت",
    },
  ],
};

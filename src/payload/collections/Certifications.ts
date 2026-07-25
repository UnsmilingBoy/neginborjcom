import type { CollectionConfig } from "payload";

export const Certifications: CollectionConfig = {
  slug: "certifications",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "issuer",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "number",
    },
    {
      name: "certificateImage",
      type: "upload",
      relationTo: "media",
    },
  ],
};

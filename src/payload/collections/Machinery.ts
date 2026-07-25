import type { CollectionConfig } from "payload";

export const Machinery: CollectionConfig = {
  slug: "machinery",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "factoryLocation",
      type: "select",
      required: true,
      options: [
        { label: "کارخانه بشل", value: "beshel" },
        { label: "کارخانه ساری", value: "sari" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "specifications",
      type: "array",
      fields: [
        {
          name: "key",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

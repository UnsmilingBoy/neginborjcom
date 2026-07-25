import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
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
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "اسکلت فلزی سنگین", value: "skeleton" },
        { label: "سوله صنعتی", value: "suleh" },
        { label: "پل فلزی", value: "bridge" },
        { label: "سازه پالایشگاهی", value: "refinery" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "tonnage",
      type: "number",
      admin: {
        description: "وزن تقریبی پروژه به تن",
      },
    },
    {
      name: "client",
      type: "text",
    },
    {
      name: "completionDate",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
  ],
};

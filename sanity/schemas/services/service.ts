import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "ServiceTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "details",
      title: "ServiceDetails",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imageName",
      title: "ServiceImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Identifier for the icon used in the UI component",
      validation: (rule) => rule.required(),
    }),
  ],
});

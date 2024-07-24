import { defineField, defineType } from "sanity";

export default defineType({
  name: "carosel",
  title: "CaroselData",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "MainImage",
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
  ],
});

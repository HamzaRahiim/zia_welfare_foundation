import { defineField, defineType } from "sanity";

export default defineType({
  name: "youtube",
  title: "Youtube",
  type: "document",
  fields: [
    defineField({
      name: "videolink",
      title: "VideoLink",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "poster",
      title: "YoutubePoster",
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

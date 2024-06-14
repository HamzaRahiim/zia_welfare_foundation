import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialmedia",
  title: "SocialMedia",
  type: "document",
  fields: [
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "url",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "myemail",
  title: "MyEmail",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "emailMob",
      title: "EmailMob",
      type: "string",
    }),
    defineField({
      name: "phoneMob",
      title: "PhoneMob",
      type: "string",
    }),
  ],
});

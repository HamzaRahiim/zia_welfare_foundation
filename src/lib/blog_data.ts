import { client } from "../../sanity/lib/client";

export const getAboutBlogData = async () => {
  const query = `*[_type == "aboutBlog"]{
  title,
  "slug": slug.current,
  "blogImage": blogImage.asset -> url,
  }`;
  const data = await client.fetch(query);
  return data;
};

export const getBlogData = async (slug: string) => {
  const query = `*[_type == "aboutBlog" && slug.current == "${slug}"]{
  description,
  title,
  "slug": slug.current,
  "blogImage": blogImage.asset -> url,
  videoUrl,
  }[0]`;
  const data = await client.fetch(query);
  return data;
};

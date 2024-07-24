import { client } from "../../sanity/lib/client";

export const getCeoData = async () => {
  const query = `*[_type == "aboutmain"]{
  "imageName": ceoImage.asset -> url,
    title,
    ceomessage,
}[0]`;
  const posts = await client.fetch(query);
  return posts;
};

export const getTeamData = async () => {
  const query = `*[_type == "team"]{
    "teamImage": teamImage.asset -> url,
}[0]`;
  const posts = await client.fetch(query);
  return posts;
};

export const getAboutBlogData = async () => {
  const query = `*[_type == "aboutBlog"]{
  title,
  'slug': slug.current,
  'blogImage': blogImage.asset -> url,
}`;
  const posts = await client.fetch(query);
  return posts;
};

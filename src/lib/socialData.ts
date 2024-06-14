import { client } from "../../sanity/lib/client";

export const getSocialData = async () => {
  const query = `*[_type == "socialmedia"]{
    _id,
    facebook,
    instagram,
    youtube,
}[0]`;
  const posts = await client.fetch(query);
  return posts;
};

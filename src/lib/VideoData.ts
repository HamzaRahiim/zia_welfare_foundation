import { client } from "../../sanity/lib/client";

export const getVideoData = async () => {
  const query = `*[_type == "youtube"]{
  _id,
  'poster': poster.asset -> url,
  videolink,
}`;
  const posts = await client.fetch(query);
  return posts;
};

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

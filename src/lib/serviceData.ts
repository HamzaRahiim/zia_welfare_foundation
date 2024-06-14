import { client } from "../../sanity/lib/client";

export const getServiceData = async () => {
  const query = `*[_type == "service"]{
  "imageName": imageName.asset -> url,
  icon,
  title,
  details,
}`;
  const posts = await client.fetch(query);
  return posts;
};

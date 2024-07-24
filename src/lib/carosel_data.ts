import { client } from "../../sanity/lib/client";

export const getCaroselData = async () => {
  const query = `*[_type == "carosel"]{
  title,
  description,  
  "mainImage": mainImage.asset -> url,
  }`;
  const data = await client.fetch(query);
  return data;
};

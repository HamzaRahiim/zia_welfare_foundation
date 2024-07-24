import { client } from "../../sanity/lib/client";

export const getEmailData = async () => {
  const query = `*[_type == "myemail"]{
    email,
    phone,
    phoneMob,
    emailMob,
  }[0]`;
  const posts = await client.fetch(query);
  return posts;
};

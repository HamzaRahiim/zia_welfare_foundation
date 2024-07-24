import { type SchemaTypeDefinition } from "sanity";
import email from "./schemas/common/email";
import socialmedia from "./schemas/footer/footer";
import youtube from "./schemas/youtube/youtube";
import service from "./schemas/services/service";
import aboutmain from "./schemas/about/ceoMsg";
import teamImage from "./schemas/about/team";
import aboutBlog from "./schemas/about/aboutblog";
import data from "./schemas/carosel/data";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    email,
    socialmedia,
    youtube,
    service,
    aboutmain,
    teamImage,
    aboutBlog,
    data,
  ],
};

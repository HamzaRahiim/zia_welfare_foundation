import Link from "next/link";
import Image from "next/image";
import AboutBlogType from "@/type";
import { getAboutBlogData } from "@/lib/ceoData";

const Blogg = async () => {
  const blogData: AboutBlogType[] = await getAboutBlogData();
  return (
    <div className="flex gap-4 md:flex-row flex-col">
      {blogData.map((data, index) => (
        <div key={index} className="blogMain">
          <Link href={`/about/${data.slug}`}>
            <Image
              src={data.blogImage}
              alt="imagesSliding"
              className="h-64 rounded-t-md"
              width={400}
              height={300}
            />
            <h1 className="blogDesc">{data.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Blogg;

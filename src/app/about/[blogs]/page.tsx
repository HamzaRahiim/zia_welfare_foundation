import YtComp from "@/components/shared/Ytvideo";
import { getBlogData } from "@/lib/blog_data";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";
import BlogType from "@/type";
import PortableText from "react-portable-text";

const Blogs = async ({ params }: { params: { blogs: string } }) => {
  const data: BlogType = await getBlogData(params.blogs);
  return (
    <main className="bg-clip-content bg-gradient-to-b from-zinc-100 via-fuchsia-100 to-fuchsia-200">
      <div className="max-w-screen-sm mx-auto">
        <Link
          href={"/about"}
          className="flex items-center gap-x-1 text-sm px-2 md:px-0"
        >
          <FaBackward /> Back
        </Link>
      </div>
      <section className="wrapperSmall space-y-4 py-3 px-2 md:px-0">
        {/* main heading  */}
        <div>
          <h1 className="md:text-3xl text-2xl font-medium text-center">
            {data.title}
          </h1>
        </div>
        {/* youtube video  */}
        <div>
          <h1 className="font-medium text-lg mb-2">Project Overview:</h1>
          <YtComp url={data.videoUrl} />
        </div>
        {/* main description */}
        <div>
          <h1 className="font-medium text-lg mb-2">Project Detail:</h1>
          <PortableText content={data.description} />
        </div>
      </section>
    </main>
  );
};
export default Blogs;

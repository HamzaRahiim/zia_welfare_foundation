import { mainBlogData } from "@/lib/blog_data";
const Blogs = async ({ params }: { params: { blogs: string } }) => {
  const data = await mainBlogData(params.blogs);
  return <div>{data?.title}</div>;
};
export default Blogs;

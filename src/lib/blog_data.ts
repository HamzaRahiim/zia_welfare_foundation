const data = [
  {
    slug: "blog1",
    title: "Blog 1",
    content: "This is the content of blog 1",
  },
  {
    slug: "blog2",
    title: "Blog 2",
    content: "This is the content of blog 2",
  },
  {
    slug: "blog3",
    title: "Blog 3",
    content: "This is the content of blog 3",
  },
];

export const mainBlogData = async (slug: string) => {
  const blog = data.find((blog) => blog.slug === slug);
  return blog;
};

import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | Blog" },
    { name: "description", content: "Showcasing my blog posts" },
  ];
}

const BlogPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8">📝 My Blog</h2>
    </>
  );
};

export default BlogPage;

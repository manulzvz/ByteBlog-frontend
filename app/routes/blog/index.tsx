import type { Route } from "./+types";
import type { PostMeta } from "~/types";
import PostCard from "~/components/PostCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | Blog" },
    { name: "description", content: "Showcasing my blog posts" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  const response = await fetch(url.href);
  if (!response) throw new Error("Failed to fetch data");
  const data = await response.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8">📝 My Blog</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;

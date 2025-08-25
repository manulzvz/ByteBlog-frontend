import type { Route } from "./+types/index";
import type { Project } from "~/types";
import type { PostMeta } from "~/types";
import FeaturedProjects from "~/components/FeaturedProjects";
import LatestPost from "~/components/LatestPost";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | Home" },
    { name: "description", content: "Homepage of my personal website" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectsRes, postsRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL(`/posts-meta.json`, url)),
  ]);

  if (!projectsRes.ok || !postsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [projects, posts] = await Promise.all([
    projectsRes.json(),
    postsRes.json(),
  ]);

  return {
    projects,
    posts,
  };
}

const Homepage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPost posts={posts} />
    </>
  );
};

export default Homepage;

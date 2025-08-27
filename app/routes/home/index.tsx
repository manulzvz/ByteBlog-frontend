import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
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

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
    ),
    fetch(new URL(`/posts-meta.json`, url)),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson = await postRes.json();

  const projects = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  return {
    projects,
    posts: postJson,
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

import type { Route } from "./+types/index";
import type { Project } from "~/types/project";
import FeaturedProjects from "~/components/FeaturedProjects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | Home" },
    { name: "description", content: "Homepage of my personal website" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return {
    projects: data,
  };
}

const Homepage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
};

export default Homepage;

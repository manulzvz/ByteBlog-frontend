import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | About" },
    { name: "description", content: "Learn more about ByteBlog" },
  ];
}

const AboutPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-2">Hey, I'm Manuel 👋</h2>
    </>
  );
};

export default AboutPage;

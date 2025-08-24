import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | Home" },
    { name: "description", content: "Homepage of my personal website" },
  ];
}

export default function Home() {
  return <>Homepage</>;
}

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export default function Home() {
  return <>My App</>;
}

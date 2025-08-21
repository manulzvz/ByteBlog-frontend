import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to ByteBlog" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export default function Home() {
  return <>Homepage</>;
}

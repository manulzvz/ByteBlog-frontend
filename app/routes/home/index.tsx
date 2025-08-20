import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to ByteBlog" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}

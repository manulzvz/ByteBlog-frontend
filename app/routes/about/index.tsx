import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | About" },
    { name: "description", content: "Learn more about ByteBlog" },
  ];
}

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="Profile image"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hi, I'm Manuel 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a results-driven software engineer specializing in modern web
            technologies. With a proven track record of delivering scalable,
            high-performance applications, I thrive on solving complex problems
            and driving projects from concept to launch. My passion for clean
            code, user experience, and continuous learning makes me a valuable
            asset to any forward-thinking team.
          </p>
        </div>
      </div>
      {/* Bio */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          My mission is to empower organizations by building innovative,
          reliable, and user-centric digital solutions. I am committed to
          leveraging technology to create meaningful impact, streamline business
          processes, and deliver exceptional value to users and stakeholders.
        </p>
      </div>
      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        🚀 My Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map(
          (tech) => (
            <li key={tech} className="bg-gray-700 rounded-md px-3 py-1">
              {tech}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default AboutPage;

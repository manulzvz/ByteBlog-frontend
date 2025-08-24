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
            Hey, I'm Manuel 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate software developer with a focus on building
            high-quality web applications.
          </p>
        </div>
      </div>
      {/* Bio */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          My mission is to create impactful and user-friendly digital
          experiences that empower individuals and businesses to thrive in the
          online world.
        </p>
      </div>
      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        🚀 My Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {["React", "Tailwind CSS", "Node.js", "MongoDB"].map((tech) => (
          <li key={tech} className="bg-gray-700 rounded-md px-3 py-1">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;

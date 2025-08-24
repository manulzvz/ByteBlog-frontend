import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900 ">
      <img
        src="/images/profile.jpg"
        alt="Profile image"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">👋 About Me</h2>
        <p className="text-gray-200 mb-4 max-w-4xl">
          I'm Manuel - a passionate software developer with a focus on building
          high-quality web applications.
        </p>
        <Link
          to="/about"
          className="text-blue-400 hover:underline inline-block text-sm"
        >
          Learn more about me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;

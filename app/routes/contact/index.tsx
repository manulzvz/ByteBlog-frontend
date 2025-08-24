import { em } from "framer-motion/client";
import type { Route } from "./+types";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ByteBlog | Contact" },
    { name: "description", content: "Get in touch with me" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted successfully! ", data };

  // Process the form data (e.g., send an email, save to a database, etc.)
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        📬 Contact Me
      </h2>
      {actionData?.message ? (
        <p className="mb-6 bg-green-700 text-green-100 text-center rounded rounde-lg border border-green-500 shadow-md">
          {actionData.message}
        </p>
      ) : null}
      <Form method="post" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-md text-gray-300">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-md text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-md text-gray-300"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-md text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;

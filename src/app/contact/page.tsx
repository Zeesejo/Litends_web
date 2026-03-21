import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Litends",
  description: "Contact Litends for AI services and website building inquiries.",
};

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-white text-purple-800">
      <div className="max-w-xl w-full flex flex-col items-center">
        <Image
          src="/favicon-jul18-litends-edition1.svg"
          alt="Litends Logo"
          width={64}
          height={64}
          className="mb-6"
        />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8 text-center max-w-lg">
          Ready to start your next project or have questions? Reach out to Litends and our team will get back to you promptly.
        </p>
        <form className="w-full bg-purple-50 rounded-xl p-6 shadow flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 rounded border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

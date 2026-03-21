import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Litends",
  description: "Discover AI services and website building solutions by Litends.",
};

export default function Services() {
  return (
    <section id="services" className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-white text-purple-800">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <Image
          src="/favicon-jul18-litends-edition1.svg"
          alt="Litends Logo"
          width={64}
          height={64}
          className="mb-6"
        />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-8 text-center max-w-2xl">
          Litends offers a range of AI-powered solutions and professional website building services to help your business grow and succeed in the digital age.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
            <p className="text-purple-700">Expert advice and strategy to integrate AI into your business processes for maximum efficiency and innovation.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
            <p className="text-purple-700">Tailored machine learning models, automation, and analytics to solve your unique business challenges.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Website Design & Development</h3>
            <p className="text-purple-700">Modern, responsive, and high-performance websites built with the latest technologies and best practices.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
            <p className="text-purple-700">Continuous maintenance, updates, and support to keep your digital presence running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Litends",
  description: "Learn more about Litends, our mission, and our team.",
};

export default function About() {
  return (
    <section id="about" className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-purple-50 text-purple-900">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <Image
          src="/favicon-jul18-litends-edition1.svg"
          alt="Litends Logo"
          width={64}
          height={64}
          className="mb-6"
        />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Litends</h2>
        <p className="text-lg mb-6 text-center">
          Litends is dedicated to empowering businesses with cutting-edge AI solutions and world-class website development. Our mission is to make advanced technology accessible, reliable, and impactful for companies of all sizes.
        </p>
        <div className="bg-white rounded-xl p-6 shadow text-purple-800">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Innovation and Excellence</li>
            <li>Client-Centric Approach</li>
            <li>Transparency and Integrity</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

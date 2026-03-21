

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Logo moved to navbar */}
      <main className="flex flex-col items-center gap-12 px-4 w-full max-w-5xl">
        <section className="w-full mt-8 flex justify-center">
          <div className="bg-white rounded-xl shadow p-8 sm:p-12 flex flex-col items-center max-w-3xl w-full">
            <img src="/favicon-jul18-litends-edition1.svg" alt="Litends Logo" className="w-20 h-20 mb-6" />
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-700 text-center">Empowering Your Business with AI & Web Excellence</h1>
            <p className="text-lg sm:text-xl font-medium mb-4 text-purple-800 text-center">AI Services & Website Building for Modern Businesses</p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 text-center max-w-xl">
              We help you harness the power of AI and create stunning, high-performance websites. Fast, accessible, and professional—Litends is your partner for digital success.
            </p>
            <a
              href="/services"
              className="bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-purple-800 transition text-lg"
            >
              Explore Our Services
            </a>
          </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">AI Consulting</h3>
            <p className="text-purple-700">Expert advice and strategy to integrate AI into your business processes for maximum efficiency and innovation.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Custom AI Solutions</h3>
            <p className="text-purple-700">Tailored machine learning models, automation, and analytics to solve your unique business challenges.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Website Design & Development</h3>
            <p className="text-purple-700">Modern, responsive, and high-performance websites built with the latest technologies and best practices.</p>
          </div>
        </section>

        <section className="w-full mt-12 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-700">Why Choose Litends?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full text-left">
            <li className="bg-white rounded-lg p-5 text-purple-800 shadow">
              <span className="font-semibold">Cutting-edge AI:</span> We use the latest advancements to deliver real results.
            </li>
            <li className="bg-white rounded-lg p-5 text-purple-800 shadow">
              <span className="font-semibold">Custom Solutions:</span> Every project is tailored to your business needs.
            </li>
            <li className="bg-white rounded-lg p-5 text-purple-800 shadow">
              <span className="font-semibold">Fast & Reliable:</span> Our team delivers on time, every time.
            </li>
            <li className="bg-white rounded-lg p-5 text-purple-800 shadow">
              <span className="font-semibold">Ongoing Support:</span> We’re here for you long after launch.
            </li>
          </ul>
        </section>

        <section className="w-full mt-16 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-700">Ready to Transform Your Business?</h2>
          <a
            href="/contact"
            className="mt-2 bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-purple-800 transition text-lg"
          >
            Get in Touch with Litends
          </a>
        </section>
      </main>
      <footer className="mt-auto py-6 text-sm text-purple-700 w-full text-center bg-white border-t border-purple-100">
        &copy; {new Date().getFullYear()} Litends. All rights reserved.
      </footer>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "contain",
      }}
    >
      {/* Optional light overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Learn Smarter with
            <span className="text-blue-700"> Brain Buddy</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Your AI-powered learning companion that helps students
            understand concepts, practice questions, monitor progress,
            and prepare confidently for exams.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>

            <button className="border border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
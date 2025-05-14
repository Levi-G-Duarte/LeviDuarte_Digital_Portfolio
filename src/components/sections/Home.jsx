import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent leading-right">
              Hello, I'm<span className=""> Levi Gaston Duarte </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I am a Programmer, Designer and{" "}
              <a
                href="#about"
                className="font-bold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent leading-right"
              >
                Developer.
              </a>
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-emerald-500 text-white-400 py-4 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 138, 264, 0.4)] hover:bg-emerald-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-emerald-500/50 text-orange-600 py-4 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 138, 264, 0.2] hover:bg-emerald-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}
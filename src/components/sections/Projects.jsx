import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols- md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Lucky-Sevens</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Lucky-Sevens/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Lucky-Sevens</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Lucky-Sevens/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Lucky-Sevens</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Lucky-Sevens/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
              <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">Lucky-Sevens</h3>
                <p className="text-gray-400 mb-4">
                  An RNG game that utilizes Yahtzee gameplay with a combination
                  of Poker mechanics
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500
                                  py-1 px-3 rounded-full text-sm
                                  hover:bg-emerald-500/20
                                  hover:shadow-[0_2px_8px_rgba
                                  (59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://levi-g-duarte.github.io/Lucky-Sevens/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors my-4"
                    target="/blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}
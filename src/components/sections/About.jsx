import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
    const frontEndSkills = ["HTML5", "CSS3", "Tailwind", "JavaScript", "ReactJS", "Bootstrap"];
    const backendSkills = ["Node.js", "MySQL", "MongoDB", "JavaScript", "Laravel",]
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent text-center">
              About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                Adaptable Developer in building reliable applications and
                innovative web designs from the modern era to time-tested
                practice
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Front-End</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontEndSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full
                                        text-sm
                                        hover:bg-emerald-500/20
                                        hover:shadow-[0_2px_8px_rgba
                                        (59,130,2246,0.2)]
                                        transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Back-End</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full
                                        text-sm
                                        hover:bg-emerald-500/20
                                        hover:shadow-[0_2px_8px_rgba
                                        (59,130,2246,0.2)]
                                        transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Certified Full-Stack Developer</strong> - WEST-MEC
                    (2023 - 2025)
                  </li>
                  <li>
                    Relevant Coursework: Web Design/Development, Computer
                    Programming, Information Specialist
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4>
                      Groundskeeper @
                      <span className="text-blue-300">
                        Total Care Tree Specialist
                      </span>
                    </h4>
                    <p>
                      Ground clean-up, as well as coordinate routes for pick-up,
                      disposal of trees and handle customer service requests
                      with utmost professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}
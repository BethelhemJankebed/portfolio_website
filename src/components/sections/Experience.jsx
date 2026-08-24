import { Timeline } from "../ui/Timeline";
import { experiences } from "../../data/experience";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  const data = experiences.map((exp, index) => ({
    title: exp.duration,
    content: (
      <div
        className={`rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[rgba(7,9,30,0.85)]
        ${index % 2 === 0 ? "md:-rotate-[0.3deg]" : "md:rotate-[0.3deg]"}`}
      >
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              {exp.title}
            </h3>
            <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-300 flex items-center gap-1.5 mt-0.5">
              <FiBriefcase className="flex-shrink-0" /> {exp.company}
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/20">
            {exp.location || "Remote / On-site"}
          </span>
        </div>

        {exp.bullets && exp.bullets.length > 0 ? (
          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <FiCheckCircle className="text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0" size={14} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {exp.description}
          </p>
        )}

        {exp.technologies && exp.technologies.length > 0 && (
          <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-100/70 text-purple-800 dark:bg-purple-500/15 dark:text-purple-300 border border-purple-200/50 dark:border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-2 text-xs sm:text-sm font-mono tracking-widest uppercase text-indigo-700 dark:text-cyan-300">
            Professional Track Record
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h2>

          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
        </div>

        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;


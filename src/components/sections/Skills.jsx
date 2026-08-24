import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { SparklesCore } from "../ui/Sparkles";
import { skillsData, skillsCategories } from "../../data/skills";
import { motion } from "framer-motion";

const skillIconMap = {
  "JavaScript": "/skills/javascript.svg",
  "Python": "/skills/python.svg",
  "Java": "/skills/java.svg",
  "PHP": "/skills/php.svg",
  "SQL": "/skills/mysql.svg",
  "React": "/skills/react.svg",
  "Next.js": "/skills/nextJS.svg",
  "React Native": "/skills/react.svg",
  "HTML5": "/skills/html.svg",
  "CSS3": "/skills/css.svg",
  "Tailwind CSS": "/skills/tailwind.svg",
  "Node.js": "/skills/nodejs.svg",
  "Express.js": "/skills/nodejs.svg",
  "FastAPI": "/skills/fastapi.svg",
  "Spring Boot": "/skills/java.svg",
  "PostgreSQL": "/skills/postgresql.svg",
  "Neon": "/skills/postgresql.svg",
  "Prisma": "/skills/prisma.svg",
  "REST APIs": "/skills/fastapi.svg",
  "Git": "/skills/git.svg",
  "GitHub": "/skills/git.svg",
  "Vercel": "/skills/nextJS.svg",
  "Firebase": "/skills/firebase.svg",
};

const Skills = () => {
  const items = skillsData.map((skill) => ({
    name: skill,
    img: skillIconMap[skill] || `/skills/${skill.toLowerCase().replace(/ /g, "")}.svg`,
  }));

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 overflow-hidden px-4"
    >
      {/* Lightweight Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="skills-particles"
          background="transparent"
          minSize={0.8}
          maxSize={2.0}
          particleDensity={25}
          speed={2}
          particleColor="#8B5CF6"
          className="w-full h-full opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-700 dark:text-cyan-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-mono mb-2">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Skills & Tech Stack
          </h2>
          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>

        {/* Categorized Tech Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillsCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm backdrop-blur-md"
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-cyan-300 mb-2.5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-indigo-500/15 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee sliders */}
        <div className="mt-6">
          <InfiniteMovingCards
            items={items}
            direction="left"
            speed="slow"
          />
        </div>

        <div className="mt-4">
          <InfiniteMovingCards
            items={[...items].reverse()}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { personalData } from "../../data/personal-data";
import { educations } from "../../data/educations";
import { motion } from "framer-motion";
import {
  HiUser,
  HiLocationMarker,
  HiAcademicCap,
  HiLightningBolt,
  HiBriefcase,
  HiCode,
  HiBadgeCheck,
} from "react-icons/hi";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const About = () => {
  const name = personalData?.name ?? "Bethelhem Jankebed";
  const description = personalData?.description ?? "";
  const address = personalData?.address ?? "Addis Ababa, Ethiopia";
  const safeEdus = Array.isArray(educations) ? educations : [];
  const availability = "Open to Engineering Roles & Freelance";

  return (
    <section id="about" className="relative max-w-full py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
          
          {/* ── Heading ── */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-indigo-700 dark:text-cyan-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-mono mb-2">
              Get To Know Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              About Me
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">

            {/* ── WHO I AM ── */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 relative group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-md p-5 sm:p-6 overflow-hidden shadow-sm cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-400/10 via-purple-400/5 to-transparent rounded-2xl" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                  <HiUser className="text-indigo-600 dark:text-indigo-300" size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 dark:text-white">
                    Summary & Overview
                  </h3>
                  <span className="text-xs text-indigo-600 dark:text-cyan-300 font-mono">
                    Software Engineer & Full-Stack Developer
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {description}
              </p>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="rounded-xl bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-100/50 dark:border-indigo-500/20 px-3 py-2 text-center">
                  <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300">GPA: 3.9 / 4.0</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">AASTU Academic</p>
                </div>
                <div className="rounded-xl bg-purple-50/70 dark:bg-purple-500/10 border border-purple-100/50 dark:border-purple-500/20 px-3 py-2 text-center">
                  <p className="text-xs font-bold text-purple-700 dark:text-purple-300">Presidential Award</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Recipient Honor</p>
                </div>
                <div className="rounded-xl bg-cyan-50/70 dark:bg-cyan-500/10 border border-cyan-100/50 dark:border-cyan-500/20 px-3 py-2 text-center">
                  <p className="text-xs font-bold text-cyan-700 dark:text-cyan-300">TechForDev</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Scholarship Dev</p>
                </div>
                <div className="rounded-xl bg-sky-50/70 dark:bg-sky-500/10 border border-sky-100/50 dark:border-sky-500/20 px-3 py-2 text-center">
                  <p className="text-xs font-bold text-sky-700 dark:text-sky-300">Women Techsters</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Fellowship</p>
                </div>
              </div>
            </motion.div>

            {/* ── LOCATION & CONTACT ── */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="relative group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-md p-5 sm:p-6 overflow-hidden shadow-sm cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-400/10 via-rose-400/5 to-transparent rounded-2xl" />

              <div className="mb-4 w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center">
                <HiLocationMarker className="text-pink-600 dark:text-pink-300" size={20} />
              </div>

              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-1">
                Location & Contact
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
                {address}
              </p>

              <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300 font-mono mb-4">
                <p>📧 bettyj4565@gmail.com</p>
                <p>📞 +251945655894</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["Remote", "Full-Time", "Freelance", "Internships"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-pink-100/80 dark:bg-pink-500/15 text-pink-700 dark:text-pink-300 border border-pink-200/50 dark:border-pink-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── EDUCATION TIMELINE ── */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 relative group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-md p-5 sm:p-6 overflow-hidden shadow-sm cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-400/10 via-purple-400/5 to-transparent rounded-2xl" />

              <div className="mb-4 w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center">
                <HiAcademicCap className="text-violet-600 dark:text-violet-300" size={20} />
              </div>

              <h3 className="text-base font-bold text-gray-800 dark:text-white mb-4">
                Education & Fellowships
              </h3>

              <div className="relative pl-4 space-y-4">
                <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-violet-400 via-purple-300 to-transparent dark:from-violet-500 dark:via-purple-400" />

                {safeEdus.map((edu, idx) => (
                  <div key={edu.id ?? idx} className="relative">
                    <div className="absolute -left-[1.15rem] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 dark:bg-violet-400 border-2 border-white dark:border-[#030014]" />

                    <div className="rounded-xl bg-violet-50/60 dark:bg-violet-500/10 border border-violet-100/50 dark:border-violet-500/20 px-3.5 py-2.5">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                          {edu.title}
                        </p>
                        <span className="text-[10px] font-mono text-violet-600 dark:text-violet-300">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-gray-600 dark:text-gray-300 mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.detail && (
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                          {edu.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── SKILLS QUICK SUMMARY ── */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="relative group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-md p-5 sm:p-6 overflow-hidden shadow-sm cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-400/10 via-blue-400/5 to-transparent rounded-2xl" />

              <div className="mb-4 w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-500/20 flex items-center justify-center">
                <HiCode className="text-sky-600 dark:text-sky-300" size={20} />
              </div>

              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-3">
                Core Stack
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "JavaScript",
                  "Python",
                  "Java",
                  "PHP",
                  "SQL",
                  "React",
                  "Next.js",
                  "React Native",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "FastAPI",
                  "Spring Boot",
                  "PostgreSQL",
                  "Prisma",
                  "Git",
                  "Vercel",
                  "Firebase",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-sky-100/80 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── SERVICES & CAPABILITIES ── */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="md:col-span-3 relative group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-md p-5 sm:p-6 overflow-hidden shadow-sm cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-transparent rounded-2xl" />

              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center">
                    <HiLightningBolt className="text-cyan-600 dark:text-cyan-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 dark:text-white">
                      Capabilities & Practical Solutions
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Taking projects from initial design through production deployment
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-500/15 border border-emerald-200/50 dark:border-emerald-500/20">
                  <HiBadgeCheck className="text-emerald-500" size={16} />
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                    Production-Ready Solutions
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { title: "Responsive Frontend UIs", desc: "React, Next.js, Tailwind CSS & clean accessible styling" },
                  { title: "Backend Systems & APIs", desc: "Node.js, Express.js, FastAPI & Spring Boot backend logic" },
                  { title: "Databases & ORM", desc: "PostgreSQL, Neon, Prisma & relational database schemas" },
                  { title: "API Integration", desc: "Maps APIs, payment gateways, auth & third-party integrations" },
                  { title: "Mobile & Web Apps", desc: "Cross-platform mobile apps with Flutter & React Native" },
                  { title: "Software Maintenance", desc: "Debugging, performance optimization, clean implementation & system design" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-3 rounded-xl bg-cyan-50/40 dark:bg-cyan-500/10 border border-cyan-100/50 dark:border-cyan-500/20"
                  >
                    <p className="text-xs font-bold text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
    </section>
  );
};

export default About;


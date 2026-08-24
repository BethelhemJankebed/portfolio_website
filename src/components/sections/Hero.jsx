"use client";
import React, { useState } from "react";
import { Spotlight } from "../ui/Spotlight";
import { Cover } from "../ui/Cover";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { FloatingDock } from "../ui/floating-dock";
import { personalData } from "../../data/personal-data";
import { socialMedia } from "../../data/social-media";
import { motion } from "framer-motion";
import { FiCode, FiTerminal, FiCheckCircle, FiCpu, FiLayers, FiFileText } from "react-icons/fi";
import CvModal from "../common/CvModal";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsEnvelopeFill,
  BsTelephoneFill,
} from "react-icons/bs";

const iconMap = {
  BsGithub: <BsGithub size={20} />,
  BsLinkedin: <BsLinkedin size={20} />,
  BsTwitterX: <BsTwitterX size={20} />,
  BsEnvelopeFill: <BsEnvelopeFill size={20} />,
  BsTelephoneFill: <BsTelephoneFill size={20} />,
};

const words = [
  [
    { text: "Software Engineer" },
    { text: "& Full-Stack Developer", className: "text-purple-600 dark:text-cyan-300" },
  ],
  [
    { text: "JavaScript & Python Specialist", className: "text-indigo-600 dark:text-cyan-300" },
  ],
  [
    { text: "AASTU Software Engineering" },
    { text: "(GPA: 3.9/4.0)", className: "text-purple-600 dark:text-cyan-300" },
  ],
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("js");
  const [isCvOpen, setIsCvOpen] = useState(false);

  const dockItems = socialMedia.map((s) => ({
    name: s.name,
    link: s.url,
    icon: iconMap[s.icon],
  }));

  const codeSnippets = {
    js: `// Bethelhem Jankebed - Software Engineer
const engineer = {
  name: "Bethelhem Jankebed",
  title: "Full-Stack Software Engineer",
  education: "AASTU (GPA: 3.9/4.0)",
  techStack: {
    frontend: ["React", "Next.js", "Tailwind"],
    backend: ["Node.js", "FastAPI", "Python"],
    database: ["PostgreSQL", "Neon", "Prisma"]
  },
  passion: "Clean code & scalable apps"
};`,
    python: `# Python / FastAPI API Handler
@app.get("/api/v1/engineer")
async def get_engineer_profile():
    return {
        "engineer": "Bethelhem Jankebed",
        "status": "Presidential Award Recipient",
        "fellowships": ["TechForDev", "Women Techsters"],
        "ready_for_production": True
    }`,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-24"
    >
      {/* Ambient Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32" fill="purple" />
      <Spotlight className="top-10 left-full -translate-x-1/2" fill="cyan" />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-16 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* ── LEFT SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-cyan-300 text-xs font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            Available for Full-Stack & Engineering Roles
          </div>

          <h1 className="mb-4 text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-cyan-300 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              <Cover>{personalData.name}</Cover>
            </span>
          </h1>

          <div className="mb-6 h-12 flex justify-center md:justify-start w-full">
            <TypewriterEffect words={words} />
          </div>

          <p className="mb-8 max-w-xl text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {personalData.description}
          </p>

          <div className="mb-8 flex justify-center md:justify-start w-full overflow-x-auto py-2">
            <FloatingDock items={dockItems} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full text-white font-medium text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-600 shadow-lg shadow-indigo-500/30 dark:shadow-cyan-500/20 transition-all"
            >
              View Projects
            </motion.a>

            <motion.button
              onClick={() => setIsCvOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 border border-indigo-400/50 dark:border-cyan-500/40 text-gray-800 dark:text-white backdrop-blur-sm bg-white/10 dark:bg-white/5 hover:bg-indigo-50/30 dark:hover:bg-cyan-500/10 transition-all cursor-pointer"
            >
              <FiFileText size={18} className="text-cyan-400" />
              View CV
            </motion.button>
          </div>
        </motion.div>

        {/* ── RIGHT SIDE — Sleek Interactive Tech Terminal Card (No Photo) ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <div className="relative w-full max-w-md">

            {/* Glowing background halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

            {/* Terminal Window Card */}
            <div className="relative rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-[#07091e]/85 backdrop-blur-xl p-5 md:p-6 shadow-2xl overflow-hidden">
              
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <FiTerminal className="text-cyan-400" /> bethelhem-dev.ts
                  </span>
                </div>
                
                {/* Code Tabs */}
                <div className="flex bg-black/10 dark:bg-white/10 rounded-lg p-1 gap-1">
                  <button
                    onClick={() => setActiveTab("js")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition ${
                      activeTab === "js"
                        ? "bg-indigo-600 text-white font-bold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    JS/TS
                  </button>
                  <button
                    onClick={() => setActiveTab("python")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition ${
                      activeTab === "python"
                        ? "bg-indigo-600 text-white font-bold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    Python
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-slate-950/90 rounded-xl p-4 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto shadow-inner border border-white/5 mb-5 h-56 flex flex-col justify-between">
                <pre className="whitespace-pre text-[11px] sm:text-xs leading-5">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <FiCheckCircle /> Clean Architecture
                  </span>
                  <span>UTF-8 · React 19</span>
                </div>
              </div>

              {/* Quick CV Metric Badges */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-purple-600 dark:text-purple-300">
                    AASTU Software Eng
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                    GPA: 3.9 / 4.0
                  </p>
                  <p className="text-[10px] text-indigo-500 dark:text-cyan-300">
                    Presidential Award
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-cyan-600 dark:text-cyan-300">
                    Fellowships & Tech
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                    TechForDev & WT
                  </p>
                  <p className="text-[10px] text-purple-500 dark:text-purple-300">
                    Full-Stack & APIs
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* CV Viewer Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </section>
  );
};

export default Hero;

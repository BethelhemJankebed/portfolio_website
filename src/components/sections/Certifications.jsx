import { motion } from "framer-motion";
import { certificationsData } from "../../data/certifications";
import { MovingBorder } from "../ui/MovingBorders";
import { FiAward, FiFileText, FiExternalLink, FiCheckCircle } from "react-icons/fi";

const VerifiedIcon = () => (
  <FiCheckCircle className="text-cyan-500 flex-shrink-0" size={16} />
);

const CertCard = ({ cert, index }) => {
  const isAward = !cert.img;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative [perspective:1400px]"
    >
      <MovingBorder duration={3500} rx="12px" ry="12px">
        <div className="h-[2px] w-[2px] bg-[radial-gradient(#7C3AED_40%,transparent_60%)]" />
      </MovingBorder>

      <div className="relative h-[380px] w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-black/10 bg-white/80 backdrop-blur-md shadow-lg [backface-visibility:hidden] dark:border-white/10 dark:bg-[rgba(7,9,30,0.85)] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-700 dark:text-cyan-300">
                  {cert.issuer}
                </span>
                <VerifiedIcon />
              </div>
              <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                {cert.date}
              </span>
            </div>

            {/* Thumbnail Box / Visual preview icon */}
            <div className="relative h-32 w-full rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 flex flex-col items-center justify-center p-4 text-center group-hover:border-cyan-500/40 transition">
              {cert.img && !cert.img.endsWith('.pdf') ? (
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  {isAward ? (
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                      <FiAward size={26} />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-cyan-400 flex items-center justify-center border border-indigo-500/30">
                      <FiFileText size={26} />
                    </div>
                  )}
                  <span className="text-[11px] font-mono text-gray-600 dark:text-gray-300 font-medium">
                    {isAward ? "Presidential Award" : "Verified PDF Certificate"}
                  </span>
                </div>
              )}
            </div>

            <h3 className="text-gray-900 dark:text-white font-bold text-base leading-snug mb-2 line-clamp-2">
              {cert.title}
            </h3>

            <div className="flex flex-wrap gap-1.5 mb-2">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-indigo-100/80 text-indigo-700 border border-indigo-200 dark:bg-purple-500/15 dark:text-purple-200 dark:border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-black/10 dark:border-white/10 text-xs">
            <span className="text-gray-500 dark:text-gray-400 font-mono truncate max-w-[150px]">
              {cert.credentialId ? `ID: ${cert.credentialId}` : "GPA: 3.9/4.0"}
            </span>

            <span className="text-indigo-600 dark:text-cyan-300 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition">
              Details 🔄
            </span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 rounded-2xl border border-indigo-400/30 bg-white/95 dark:bg-[rgba(10,12,38,0.95)] backdrop-blur-xl shadow-xl p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiAward className="text-cyan-400" size={20} />
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Overview & Impact
              </h3>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-indigo-700 dark:text-cyan-300 border border-cyan-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {cert.verify || cert.img ? (
            <a
              href={cert.verify || cert.img}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-md hover:opacity-90 transition"
            >
              Open Certificate Document <FiExternalLink size={14} />
            </a>
          ) : (
            <div className="text-center py-2 px-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium">
              Presidential Honor Recipient (AASTU)
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="mb-2 text-xs sm:text-sm font-mono tracking-widest uppercase text-indigo-700 dark:text-cyan-300">
            Accomplishments & Badges
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Certifications & Honors
          </h2>

          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs font-mono text-gray-500 dark:text-gray-400"
        >
          {certificationsData.length} verified credentials and academic achievements
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;


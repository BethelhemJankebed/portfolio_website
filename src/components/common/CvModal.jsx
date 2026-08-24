import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiFileText } from "react-icons/fi";
import { personalData } from "../../data/personal-data";

const CvModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-slate-900 rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/80">
            <div className="flex items-center gap-2 text-white">
              <FiFileText className="text-cyan-400" size={20} />
              <div>
                <h3 className="font-bold text-sm sm:text-base leading-none">
                  {personalData.name} — Curriculum Vitae
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Software Engineer & Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition"
              >
                Full Screen <FiExternalLink size={14} />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Close CV Modal"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Modal Body - CV Preview */}
          <div className="p-4 sm:p-6 overflow-y-auto flex justify-center bg-slate-950/50">
            <img
              src={personalData.resume}
              alt="Bethelhem Jankebed CV"
              className="max-w-full h-auto rounded-lg border border-white/10 shadow-lg object-contain"
            />
          </div>

          {/* Footer Note */}
          <div className="px-5 py-3 border-t border-white/10 bg-slate-950/80 text-center text-xs text-gray-400">
            Bethelhem Jankebed · Software Engineer · bettyj4565@gmail.com
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CvModal;

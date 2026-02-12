import { motion } from 'motion/react';

export function Marquee() {
  const items = [
    "IDENTIDADE VISUAL", "ESTRATÉGIA", "MINIMALISMO", "DIREÇÃO DE ARTE", "NAMING", "DESIGNER",
  ];

  return (
    <div className="relative py-16 overflow-hidden bg-white dark:bg-[#1a1515] border-y border-[#795558]/5 dark:border-white/5 transition-colors duration-500">
      {/* Upper row - Bold solid */}
      <div className="flex whitespace-nowrap mb-6">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {Array(10).fill(items).flat().map((item, i) => (
            <span key={i} className="text-[#795558]/30 dark:text-[#FCF6EF]/30 font-serif text-xl md:text-2xl font-light uppercase tracking-[0.4em] px-4 italic">
              {item} <span className="text-[#FFDAF0]/60 dark:text-white/20 mx-4">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Lower row - Subtle and different direction */}
      <div className="flex whitespace-nowrap opacity-20 dark:opacity-10">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {Array(10).fill(items).flat().map((item, i) => (
            <span key={i} className="text-[#795558] dark:text-[#FCF6EF] font-sans text-xs md:text-sm font-black uppercase tracking-[0.6em] px-4">
              {item} <span className="text-[#795558] dark:text-[#FCF6EF] mx-4 opacity-50">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

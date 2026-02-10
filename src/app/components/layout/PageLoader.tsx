import { motion } from "motion/react";

export const PageLoader = () => (
  <div className="fixed inset-0 bg-[#FCF6EF] z-[10000] flex items-center justify-center">
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-24 h-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-[#795558]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-[#795558]/20 rounded-full border-t-[#795558]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-[#795558]/40">
          Anna
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-[9px] font-black uppercase tracking-[0.5em] text-[#795558]/30"
      >
        Inspirando Arte
      </motion.p>
    </div>
  </div>
);

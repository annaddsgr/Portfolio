import { useState, useEffect } from 'react';
import { Accessibility, Type, RotateCcw, X, Eye, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDarkMode(true);
    
    const savedContrast = localStorage.getItem('contrast');
    if (savedContrast === 'high') setHighContrast(true);
    
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('contrast', 'high');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('contrast', 'normal');
    }
  }, [highContrast]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setIsDarkMode(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-[40] bg-[#795558] dark:bg-[#FCF6EF] text-white dark:text-[#1a1515] p-3 rounded-full shadow-lg hover:bg-[#5A3D3F] dark:hover:bg-white transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#795558]/30 dark:focus:ring-white/30"
        aria-label="Opções de Acessibilidade"
        title="Acessibilidade"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 z-[50] w-72 bg-white dark:bg-[#1a1515] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden"
          >
            <div className="bg-[#795558] dark:bg-[#110e0e] p-4 flex justify-between items-center text-white">
              <span className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                <Accessibility className="w-4 h-4" /> Acessibilidade
              </span>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5 space-y-6">
              {/* Theme Toggle */}
              <div className="space-y-3">
                <span className="text-[10px] font-black text-gray-400 dark:text-white/30 uppercase tracking-[0.2em]">Tema do Site</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${isDarkMode ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-100 text-gray-700 border border-transparent'}`}
                >
                  <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                    {isDarkMode ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-orange-400" />}
                    {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
                  </span>
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${isDarkMode ? 'bg-purple-500' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-300 ${isDarkMode ? 'left-6' : 'left-1'}`} />
                  </div>
                </button>
              </div>

              {/* Font Size */}
              <div className="space-y-3">
                <span className="text-[10px] font-black text-gray-400 dark:text-white/30 uppercase tracking-[0.2em]">Tamanho da Fonte</span>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 border dark:border-white/5 rounded-xl p-1.5">
                  <button 
                    onClick={() => setFontSize(s => Math.max(80, s - 10))}
                    className="flex-1 py-1.5 hover:bg-white dark:hover:bg-white/10 rounded-lg transition-colors text-gray-400 dark:text-white/40 flex justify-center"
                    aria-label="Diminuir fonte"
                  >
                    <Type className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-black w-14 text-center text-[#795558] dark:text-white">{fontSize}%</span>
                  <button 
                    onClick={() => setFontSize(s => Math.min(150, s + 10))}
                    className="flex-1 py-1.5 hover:bg-white dark:hover:bg-white/10 rounded-lg transition-colors text-gray-400 dark:text-white/40 flex justify-center"
                    aria-label="Aumentar fonte"
                  >
                    <Type className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all border ${highContrast ? 'bg-black text-white border-yellow-400' : 'bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-white/60 border-transparent'}`}
              >
                <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4" /> Alto Contraste
                </span>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${highContrast ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-300 ${highContrast ? 'left-6' : 'left-1'}`} />
                </div>
              </button>

              {/* Reset */}
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-white/20 hover:text-[#795558] dark:hover:text-white transition-colors"
                aria-label="Restaurar padrões"
              >
                <RotateCcw className="w-3 h-3" /> Restaurar Padrão
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

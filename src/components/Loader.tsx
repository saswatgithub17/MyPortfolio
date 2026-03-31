import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-[#070710] flex flex-col items-center justify-center p-8"
        >
          <div className="relative w-48 h-48 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-neo-blue border-t-transparent rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-4 border-neo-pink border-b-transparent rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{progress}%</span>
            </div>
          </div>
          
          <h2 className="text-xl font-mono tracking-widest text-neo-blue mb-4">
            {progress < 30 ? "LOADING CORE SYSTEMS" : 
             progress < 60 ? "INITIALIZING COMPONENTS" : 
             progress < 90 ? "OPTIMIZING PERFORMANCE" : "LAUNCHING PORTFOLIO"}
          </h2>
          
          <div className="w-full max-w-md h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-neo-blue to-neo-pink"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

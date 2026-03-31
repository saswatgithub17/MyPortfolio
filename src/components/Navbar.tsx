import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import { Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useGame();

  return (
    <nav className="fixed top-0 w-full z-50 glass py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-neo-blue to-neo-pink bg-clip-text text-transparent"
          >
            SSD.PORTFOLIO
          </motion.h1>
        </NavLink>
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skills' },
            { name: 'Projects', path: '/projects' },
            { name: 'Education', path: '/education' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors uppercase tracking-widest ${
                  isActive ? 'text-neo-blue border-b-2 border-neo-blue' : 'hover:text-neo-blue'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-neo-blue hover:scale-110 transition-transform"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

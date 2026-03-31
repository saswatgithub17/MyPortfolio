import React from 'react';
import { DateTime } from 'luxon';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#05050a]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm font-mono">
          &copy; {DateTime.now().year} SASWAT SUMAN DWIBEDY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/saswatgithub17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neo-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saswatsuman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neo-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/brahmin_boy_saswat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neo-blue transition-colors">
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-xs text-gray-600 mt-6 tracking-widest uppercase">
          Built with React, Tailwind & Passion
        </p>
      </div>
    </footer>
  );
};

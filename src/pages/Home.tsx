import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { ThreeScene } from '../components/ThreeScene';
import { useGame } from '../context/GameContext';
import { Briefcase, Github as GithubIcon, Download } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden py-20">
      <ThreeScene />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex-grow"
          >
            <h6 className="text-neo-blue font-mono mb-4 tracking-tighter">HI, I'M SASWAT SUMAN DWIBEDY</h6>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              Crafting <span className="text-neo-pink">Digital</span> <br /> 
              <span className="liquid-glass px-4 py-2 rounded-2xl">Futures</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-xl">
              Computer Science student at Utkal University. Building innovative solutions with modern Web Technologies and AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="neo-brutal px-8 py-3 text-black font-bold uppercase tracking-widest inline-block">
                View Projects
              </Link>
              <button 
                onClick={() => {
                 window.open(`${import.meta.env.BASE_URL}resumes/Saswat Suman Dwibedy Resume - Full Stack Developer`,'_blank')
                }}
                className="glass px-8 py-3 rounded-xl font-bold uppercase tracking-widest border border-white/10 inline-flex items-center space-x-2 hover:bg-white/5 transition-colors"
              >
                <Download size={18} className="text-neo-pink" />
                <span>Resume</span>
              </button>
              <a 
                href="mailto:saswatsumandwibedy17@gmail.com" 
                className="glass px-8 py-3 rounded-xl font-bold uppercase tracking-widest border border-white/10 inline-flex items-center space-x-2 hover:bg-white/5 transition-colors"
              >
                <Briefcase size={18} className="text-neo-blue" />
                <span>Hire Me</span>
              </a>
              <a 
                href="https://github.com/saswatgithub17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neo-blue hover:scale-110 transition-transform"
              >
                <GithubIcon size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-6 rounded-[40px] hidden lg:block"
          >
            <h3 className="text-sm font-mono text-neo-blue mb-4 uppercase tracking-widest">GitHub Activity</h3>
            <GitHubCalendar 
              username="saswatgithub17" 
              colorScheme="dark"
              fontSize={12}
              blockSize={10}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

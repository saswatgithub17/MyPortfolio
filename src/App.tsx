import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import { CustomCursor } from './components/CustomCursor';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

import { GameProvider } from './context/GameContext';
import { AiAssistant } from './components/AiAssistant';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <GameProvider>
      <Router>
        <div className="min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)]">
          <Loader />
          <CustomCursor />
          <Navbar />
          
          <main className="pt-20">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <AiAssistant />
        </div>
      </Router>
    </GameProvider>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Code2, ExternalLink, X, ChevronRight, Star, GitFork, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
  updated_at: string;
}

export const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<GithubRepo | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/saswatgithub17/repos?sort=updated&per_page=6');
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-24 bg-[#070710] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h6 className="text-neo-blue font-mono mb-2 uppercase tracking-widest text-xs">Live from GitHub</h6>
            <h2 className="text-4xl font-bold">Featured <span className="text-neo-blue">Works</span></h2>
          </div>
          <a 
            href="https://github.com/saswatgithub17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neo-blue flex items-center space-x-2 text-sm font-mono transition-colors"
          >
            <span>View All Repos</span>
            <ExternalLink size={14} />
          </a>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="animate-spin text-neo-blue" size={40} />
            <p className="text-gray-500 font-mono text-sm animate-pulse">SYNCING WITH GITHUB...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {repos.map((repo, idx) => (
              <motion.div 
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="neo-brutal p-8 text-black flex flex-col h-full cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedProject(repo)}
              >
                <div className="mb-4 flex justify-between items-start">
                  <div className="p-2 bg-neo-blue border-2 border-black">
                    <Code2 size={24} />
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-bold">
                    <span className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight truncate">{repo.name.replace(/-/g, ' ')}</h3>
                <p className="text-gray-700 mb-6 flex-grow line-clamp-3">
                  {repo.description || "No description provided. A brilliant project in the making!"}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="px-3 py-1 bg-neo-yellow border-2 border-black text-xs font-bold uppercase">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 2).map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-white border-2 border-black text-xs font-bold uppercase">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="glass max-w-2xl w-full p-8 rounded-[40px] relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tight text-neo-blue">{selectedProject.name.replace(/-/g, ' ')}</h3>
              <p className="text-gray-400 font-mono text-xs mb-8">Last updated: {new Date(selectedProject.updated_at).toLocaleDateString()}</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-neo-pink font-mono uppercase tracking-widest text-sm mb-2">Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description || "This project is a testament to innovative coding and problem-solving. Check out the source code for more details."}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center space-x-2 text-neo-yellow mb-1">
                      <Star size={16} />
                      <span className="text-sm font-bold uppercase">Stars</span>
                    </div>
                    <span className="text-2xl font-black">{selectedProject.stargazers_count}</span>
                  </div>
                  <div className="glass p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center space-x-2 text-neo-blue mb-1">
                      <GitFork size={16} />
                      <span className="text-sm font-bold uppercase">Forks</span>
                    </div>
                    <span className="text-2xl font-black">{selectedProject.forks_count}</span>
                  </div>
                </div>

                {selectedProject.topics.length > 0 && (
                  <div>
                    <h4 className="text-neo-yellow font-mono uppercase tracking-widest text-sm mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.topics.map((topic, i) => (
                        <span key={i} className="px-4 py-1 glass rounded-full text-xs font-bold text-gray-300 border border-white/10">
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-4 pt-4">
                  <a 
                    href={selectedProject.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-brutal px-8 py-3 text-black font-bold uppercase text-sm flex items-center space-x-2"
                  >
                    <Code2 size={18} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

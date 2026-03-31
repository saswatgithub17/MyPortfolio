import React from 'react';
import { motion } from 'motion/react';
import { Layout, Database, Smartphone, Code2, Server, Download } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Layout className="text-neo-blue" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="text-neo-pink" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Java (Swing)", level: 90 },
        { name: "PHP", level: 75 },
        { name: "Python", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-neo-yellow" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 70 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a15] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Technical <span className="text-neo-pink">Arsenal</span></h2>
            <p className="text-gray-400 max-w-xl">My toolkit for building the next generation of digital experiences.</p>
          </div>
          <button 
            onClick={() => {
              window.open('https://example.com/your-resume.pdf', '_blank');
            }}
            className="neo-brutal px-8 py-4 text-black font-black uppercase tracking-widest flex items-center space-x-3 group"
          >
            <Download size={20} className="group-hover:bounce" />
            <span>Download Resume</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-[40px] border border-white/5"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{group.title}</h3>
              </div>
              
              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono text-gray-300 uppercase">{skill.name}</span>
                      <span className="text-xs font-mono text-neo-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${
                          idx === 0 ? 'bg-neo-blue' : idx === 1 ? 'bg-neo-pink' : 'bg-neo-yellow'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

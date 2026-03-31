import React from 'react';
import { Download, Quote } from 'lucide-react';
import.meta.env.BASE_URL

export const About: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. R.K. Sahoo",
      role: "Professor, Utkal University",
      text: "Saswat is an exceptionally bright student with a keen interest in AI and Web Technologies. His project work is consistently high quality."
    },
    {
      name: "Hackathon Lead",
      role: "Smart India Hackathon",
      text: "A great team player and a fast learner. Saswat's ability to build complex systems in short periods is impressive."
    }
  ];

  return (
    <section className="py-24 bg-[#070710] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neo-blue to-neo-pink rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={`${import.meta.env.BASE_URL}images/MyImage2.jpg`} 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-6">About <span className="text-neo-blue">Me</span></h2>
            <div className="glass p-8 rounded-2xl space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate computer science student with a focus on web development and emerging technologies. 
                My journey began with a curiosity for how code turns into visual art.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing my degree, I specialize in creating responsive, user-friendly applications. 
                When I'm not coding, I explore tech trends and participate in hackathons.
              </p>
              <div className="pt-4">
                <button className="flex items-center space-x-2 text-neo-pink hover:text-neo-blue transition-colors">
                  <Download size={20} />
                  <span className="font-bold uppercase tracking-widest text-sm">Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">What People <span className="text-neo-pink">Say</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="glass p-8 rounded-[40px] relative">
                <Quote className="absolute top-6 right-8 text-neo-blue/20" size={48} />
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-neo-blue">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

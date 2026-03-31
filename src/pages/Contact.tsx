import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import Swal from 'sweetalert2';

export const Contact: React.FC = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. I will get back to you soon.',
      icon: 'success',
      confirmButtonColor: '#00f3ff',
      background: '#13141f',
      color: '#e6e6ff'
    });
  };

  return (
    <section className="py-24 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[40px] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-gradient-to-br from-neo-blue/20 to-neo-pink/20">
            <h2 className="text-4xl font-bold mb-8">Let's <span className="text-neo-blue">Connect</span></h2>
            <p className="text-gray-400 mb-12">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-neo-blue">
                  <Mail size={20} />
                </div>
                <span>saswatsumandwibedy17@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-neo-pink">
                  <Phone size={20} />
                </div>
                <span>+91 6371891213</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-neo-yellow">
                  <MapPin size={20} />
                </div>
                <span>Angul, Odisha</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-12">
              <a href="https://github.com/saswatgithub17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-neo-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/saswatsuman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-neo-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/brahmin_boy_saswat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-neo-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono mb-2 text-neo-blue uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neo-blue outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-mono mb-2 text-neo-pink uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neo-pink outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-mono mb-2 text-neo-yellow uppercase tracking-widest">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 focus:border-neo-yellow outline-none transition-all h-32" required></textarea>
              </div>
              <button type="submit" className="w-full neo-brutal py-4 text-black font-black uppercase tracking-[0.2em]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

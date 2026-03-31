import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Saswat's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are Saswat Suman Dwibedy's AI assistant. You are helpful, professional, and tech-savvy. Saswat is a Computer Science student at Utkal University. His key projects include Medicine Shop Management (Java), AI Missing Person Finder (Python), and CODGaurd (PHP). He is skilled in React, Node.js, Python, and Android development. Keep responses concise and focused on Saswat.",
        },
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm not sure about that, but Saswat is definitely working on it!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Saswat is probably pushing some new code!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass w-80 md:w-96 h-[500px] rounded-3xl overflow-hidden flex flex-col mb-4 shadow-2xl border-neo-blue/30"
          >
            <div className="bg-gradient-to-r from-neo-blue to-neo-pink p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot size={24} className="text-white" />
                <span className="font-bold text-white uppercase tracking-widest text-sm">Saswat AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neo-blue text-black rounded-tr-none' 
                      : 'bg-white/10 text-white rounded-tl-none border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/10">
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }} 
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex space-x-1"
                    >
                      <div className="w-1.5 h-1.5 bg-neo-blue rounded-full" />
                      <div className="w-1.5 h-1.5 bg-neo-blue rounded-full" />
                      <div className="w-1.5 h-1.5 bg-neo-blue rounded-full" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Saswat AI..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-neo-blue outline-none"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-neo-blue rounded-xl flex items-center justify-center text-black hover:scale-105 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-neo-blue to-neo-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-neo-blue/20"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

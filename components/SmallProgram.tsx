'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle, 
  Users, 
  Rocket, 
  Palette, 
  Activity, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';

// --- PLACEHOLDER IMAGE ---
// Using the astronaut image you mentioned previously
import mainVisual from "../public/dragonplayingfootball.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// --- MAPPING YOUR CONTENT TO "SPACE MODULES" ---
const trainingModules = [
  {
    id: 1,
    title: "Interstellar Comms",
    category: "Language & Communication",
    description: "Developing strong communication skills and self-expression through storytelling and interaction.",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "cyan"
  },
  {
    id: 2,
    title: "Mission Logic",
    category: "Numeracy & Problem Solving",
    description: "Mastering early numeracy concepts and curiosity-driven thinking to solve galactic puzzles.",
    icon: <Brain className="w-5 h-5" />,
    color: "purple"
  },
  {
    id: 3,
    title: "Crew Harmony",
    category: "Social Skills & Teamwork",
    description: "Learning sharing, teamwork, and confidence-building to thrive in a social environment.",
    icon: <Users className="w-5 h-5" />,
    color: "orange"
  },
  {
    id: 4,
    title: "Zero-G Agility",
    category: "Motor Skills & Creativity",
    description: "Strengthening fine and gross motor abilities through art, music, and outdoor play.",
    icon: <Activity className="w-5 h-5" />,
    color: "rose"
  },
  {
    id: 5,
    title: "The Captain's Code",
    category: "Values & Independence",
    description: "Nurturing emotional intelligence, good habits, discipline, and responsibility.",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "emerald"
  }
];

const WhatKidsLearn: React.FC = () => {
  return (
    <section className={`relative py-24 overflow-hidden  ${bodyFont.className} text-white`}>
      
  

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className={`text-lg text-cyan-200 ${handwritingFont.className} font-bold tracking-wide`}>
                  Mission Preparation
                </span>
             </div>
             
             <h2 className={`text-4xl md:text-6xl mb-6 leading-tight ${titleFont.className}`}>
               What <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Future Captains</span> Learn
             </h2>
             
             <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
               At Best Preschool, children grow through a balanced blend of academics, creativity, and real-world learning. We ensure every child becomes confident, happy, and school-ready for the future.
             </p>
           </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT: VISUAL HUD --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-8/12 relative flex justify-center"
          >
             {/* Rotating Ring Back */}
             {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }}></div> */}
             
             {/* Main Image Container */}
             <div className="relative w-full   overflow-hidden  ">
                 {/* Inner Glow */}
  <Image 
                   src={mainVisual} 
                   alt="Learning Astronaut" 
                   width={1200} 
                   height={800}
                   className="object-cover w-full h-full transform scale-105 group-hover:scale-110 transition-transform duration-700"
                 />                 
      
             </div>
          </motion.div>


          {/* --- RIGHT: MODULE LIST --- */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-4">
               {trainingModules.map((module, index) => (
                 <motion.div
                   key={module.id}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1, duration: 0.5 }}
                   whileHover={{ scale: 1.02, x: 10 }}
                   className="group relative p-5 rounded-3xl bg-[#131625]/60 border border-white/5 backdrop-blur-md overflow-hidden hover:bg-[#1c2035]/80 transition-all duration-300"
                 >
                    {/* Hover Glow Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${module.color}-500/50 group-hover:w-2 transition-all duration-300`} />
                    
                    <div className="flex gap-5 items-start">
                       {/* Icon Box */}
                       <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-${module.color}-500/10 text-${module.color}-400 group-hover:bg-${module.color}-500 group-hover:text-white transition-all duration-300 shadow-inner`}>
                          {module.icon}
                       </div>

                       <div className="flex-1">
                          <h3 className={`text-xl text-white mb-1 ${titleFont.className} group-hover:text-${module.color}-300 transition-colors`}>
                            {module.title}
                          </h3>
                          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-hover:text-slate-400">
                             {module.category}
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                            {module.description}
                          </p>
                       </div>
                       
                       {/* Arrow indicator */}
                       <div className="hidden sm:flex self-center opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                          <Palette className="w-5 h-5 text-slate-500" /> 
                          {/* Using generic icon for visual balance, logically fits within the creative theme */}
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
            
            {/* Closing Statement */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="mt-8 p-4 rounded-xl border border-dashed border-white/10 text-center"
            >
               <p className={`text-gray-400 ${handwritingFont.className} text-xl`}>
                 "Structured yet joyful environment nurturing emotional intelligence."
               </p>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* CSS for Stars (Add to your global CSS if needed, or included here for inline simplicity) */}
      <style jsx>{`
        @keyframes moveStars {
          from { background-position: 0 0, 0 0, 0 0, 0 0; }
          to { background-position: -1000px 1000px, -400px 400px, 300px 300px, -200px 200px; }
        }
      `}</style>
    </section>
  );
};

export default WhatKidsLearn;
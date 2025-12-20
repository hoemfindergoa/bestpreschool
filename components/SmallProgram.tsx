'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle, 
  Users, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';

// --- PLACEHOLDER IMAGE ---
import mainVisual from "../public/capturingbuttterfly.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// --- 1. DEFINE SPECIFIC COLOR KEYS ---
type ThemeColor = 'cyan' | 'purple' | 'orange' | 'rose' | 'emerald';

// --- 2. TYPE THE STYLES OBJECT ---
const colorStyles: Record<ThemeColor, { bg: string; text: string; border: string; glow: string }> = {
  cyan:   { bg: "bg-cyan-100",   text: "text-cyan-600",   border: "group-hover:border-cyan-300",   glow: "group-hover:shadow-cyan-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "group-hover:border-purple-300", glow: "group-hover:shadow-purple-200" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", border: "group-hover:border-orange-300", glow: "group-hover:shadow-orange-200" },
  rose:   { bg: "bg-rose-100",   text: "text-rose-600",   border: "group-hover:border-rose-300",   glow: "group-hover:shadow-rose-200" },
  emerald:{ bg: "bg-emerald-100",text: "text-emerald-600",border: "group-hover:border-emerald-300",glow: "group-hover:shadow-emerald-200" },
};

// --- 3. TYPE THE DATA INTERFACE ---
interface ModuleData {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: JSX.Element;
  color: ThemeColor; // Use the specific type here
}

// --- 4. APPLY TYPE TO ARRAY ---
const trainingModules: ModuleData[] = [
  {
    id: 1,
    title: "Language & Stories",
    category: "Communication",
    description: "Developing self-expression through storytelling, rhymes, and joyful interaction.",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "cyan"
  },
  {
    id: 2,
    title: "Logic & Wonder",
    category: "Numeracy",
    description: "Mastering early numbers and curiosity-driven thinking to solve playful puzzles.",
    icon: <Brain className="w-6 h-6" />,
    color: "purple"
  },
  {
    id: 3,
    title: "Team Harmony",
    category: "Social Skills",
    description: "Learning sharing, teamwork, and confidence-building in a circle of friends.",
    icon: <Users className="w-6 h-6" />,
    color: "orange"
  },
  {
    id: 4,
    title: "Active Play",
    category: "Motor Skills",
    description: "Strengthening coordination through dance, sports, art, and outdoor adventures.",
    icon: <Activity className="w-6 h-6" />,
    color: "rose"
  },
  {
    id: 5,
    title: "Little Leaders",
    category: "Values",
    description: "Nurturing emotional intelligence, good habits, kindness, and responsibility.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "emerald"
  }
];

const WhatKidsLearn: React.FC = () => {
  return (
    <section className={`relative py-24 overflow-hidden bg-slate-50 ${bodyFont.className}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl opacity-60" />
         <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl opacity-60" />
      </div>

      <div className=" mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-blue-200 bg-white shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500 animate-pulse" />
                <span className={`text-lg text-slate-700 ${handwritingFont.className} font-bold tracking-wide`}>
                  Holistic Development
                </span>
             </div>
             
             <h2 className={`text-4xl md:text-6xl mb-6 leading-tight text-slate-900 ${titleFont.className}`}>
               What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">Future Leaders</span> Learn
             </h2>
             
             <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
               At Best Preschool, children grow through a balanced blend of academics, creativity, and real-world learning. We ensure every child becomes confident, happy, and school-ready.
             </p>
           </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:mx-8 gap-12 lg:gap-20">
          
          {/* --- LEFT: IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-6/12 relative flex justify-center order-2 lg:order-1"
          >
             <div className="relative w-full max-w-md ">
            
                <div className="relative h-[500px] w-[700px] overflow-hidden ">
                    <Image 
                    src={mainVisual} 
                    alt="Active Child" 
                    width={1200} 
                    height={1000}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                 
                </div>
             </div>
          </motion.div>


          {/* --- RIGHT: MODULE LIST --- */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative space-y-4">
               {/* Vertical Connector Line */}
               <div className="absolute left-8 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-200 hidden sm:block" />

               {trainingModules.map((module, index) => {
                 // 5. SAFETY CHECK (Optional but good practice if data comes from API)
                 const theme = colorStyles[module.color] || colorStyles.cyan;
                 
                 return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    className={`
                      group relative p-5 rounded-3xl 
                      bg-white border border-slate-100 
                      shadow-sm hover:shadow-xl ${theme.glow}
                      transition-all duration-300
                      z-10
                      ${theme.border} hover:border
                    `}
                  >
                    <div className="flex gap-5 items-center sm:items-start">
                        
                        {/* Icon Box */}
                        <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${theme.bg} ${theme.text} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                           {module.icon}
                        </div>

                        <div className="flex-1">
                           <div className="flex justify-between items-center mb-1">
                             <h3 className={`text-xl text-slate-800 ${titleFont.className} group-hover:text-blue-600 transition-colors`}>
                               {module.title}
                             </h3>
                             <span className={`text-xs font-bold uppercase tracking-widest ${theme.text} bg-white border border-slate-100 px-2 py-1 rounded-full`}>
                               {module.category}
                             </span>
                           </div>
                           
                           <p className="text-slate-500 text-sm leading-relaxed font-semibold group-hover:text-slate-600 transition-colors">
                             {module.description}
                           </p>
                        </div>
                    </div>
                  </motion.div>
                 );
               })}
            </div>
            
            {/* Closing Statement */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-8 ml-0 sm:ml-20"
            >
               <div className="inline-block p-4 bg-yellow-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border border-yellow-100 relative">
                  <div className="absolute -top-3 -left-2 text-4xl text-yellow-300">"</div>
                  <p className={`text-slate-600 ${handwritingFont.className} text-xl font-bold px-4`}>
                    We create a structured yet joyful environment where little minds bloom.
                  </p>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatKidsLearn;
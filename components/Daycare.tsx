'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Utensils, 
  Moon, 
  Camera, 
  Gamepad2, 
  BookHeart, 
  HeartHandshake,
  Star,
  Sun
} from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';

// --- PLACEHOLDER IMAGE ---
import careImage from "../public/dragonlookingmoon.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// --- FACILITIES DATA (With specific color classes for Light Theme) ---
const facilities = [
  { 
    id: 1, 
    title: "24/7 Watchtower", 
    desc: "CCTV-enabled classrooms & strict protocols.", 
    icon: <Camera className="w-5 h-5" />, 
    bgClass: "bg-emerald-100", 
    textClass: "text-emerald-600",
    borderClass: "group-hover:border-emerald-200"
  },
  { 
    id: 2, 
    title: "Galactic Fueling", 
    desc: "Nutritious meals for sustained energy.", 
    icon: <Utensils className="w-5 h-5" />, 
    bgClass: "bg-orange-100", 
    textClass: "text-orange-600",
    borderClass: "group-hover:border-orange-200"
  },
  { 
    id: 3, 
    title: "Anti-Gravity Play", 
    desc: "Soft play zones & hygienic learning corners.", 
    icon: <Gamepad2 className="w-5 h-5" />, 
    bgClass: "bg-cyan-100", 
    textClass: "text-cyan-600",
    borderClass: "group-hover:border-cyan-200"
  },
  { 
    id: 4, 
    title: "Stasis Pods", 
    desc: "Cozy rest areas for recharging.", 
    icon: <Moon className="w-5 h-5" />, 
    bgClass: "bg-indigo-100", 
    textClass: "text-indigo-600",
    borderClass: "group-hover:border-indigo-200"
  },
  { 
    id: 5, 
    title: "Mission Support", 
    desc: "Homework assistance & creative activities.", 
    icon: <BookHeart className="w-5 h-5" />, 
    bgClass: "bg-pink-100", 
    textClass: "text-pink-600",
    borderClass: "group-hover:border-pink-200"
  },
  { 
    id: 6, 
    title: "Guardian Officers", 
    desc: "Trained caregivers & personalized attention.", 
    icon: <HeartHandshake className="w-5 h-5" />, 
    bgClass: "bg-rose-100", 
    textClass: "text-rose-600",
    borderClass: "group-hover:border-rose-200"
  }
];

const LittleCometsCare: React.FC = () => {
  return (
    <section className={`relative py-24 overflow-hidden bg-slate-50 ${bodyFont.className}`}>
      
      {/* =========================================
          LAYER 0: BACKGROUND BLOBS (Light Theme)
      ========================================= */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         {/* Warm sun glow top right */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
         {/* Soft blue glow bottom left */}
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- TITLE HEADER --- */}
        <div className="mb-16 text-center lg:text-left relative">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 shadow-sm">
                <Sun className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span className={`text-lg text-slate-700 ${handwritingFont.className} font-bold`}>
                  Little Comets Care Centre
                </span>
             </div>
             
             <h2 className={`text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-slate-900 ${titleFont.className}`}>
               A Safe Harbor for <br />
               <span className="relative z-10">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
                    Little Explorers
                  </span>
                  {/* Yellow highlighter effect behind text */}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 -z-10 -rotate-1 opacity-70 rounded-full"></span>
               </span>
             </h2>
           </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* --- LEFT: CONTENT & FACILITIES GRID --- */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
              
              {/* Description Box - Styled like a Note/Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-orange-100 rounded-3xl p-6 md:p-8 mb-10 shadow-xl shadow-orange-100/50 relative overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400 to-yellow-400" />
                 <p className="text-slate-600 text-lg leading-relaxed font-medium">
                   Our Day Care service provides a safe, nurturing, and well-supervised environment where children feel comfortable, engaged, and happy. We offer <span className="text-orange-500 font-bold bg-orange-50 px-1 rounded">age-appropriate activities</span>, nutritious meals, and structured routines that support emotional, social, and cognitive development.
                 </p>
              </motion.div>

              {/* Facilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {facilities.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`
                        flex items-start gap-4 p-4 rounded-2xl 
                        bg-white border border-slate-100 hover:border-transparent
                        shadow-sm hover:shadow-lg hover:shadow-slate-200/50
                        transition-all duration-300 cursor-default group
                        ${item.borderClass} hover:border
                      `}
                    >
                       {/* Icon Bubble */}
                       <div className={`shrink-0 w-12 h-12 rounded-2xl ${item.bgClass} ${item.textClass} flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                           {item.icon}
                       </div>
                       
                       <div>
                          <h4 className={`text-slate-800 font-bold text-lg ${titleFont.className} mb-1 group-hover:text-slate-900`}>
                            {item.title}
                          </h4>
                          <p className="text-slate-500 text-sm leading-snug font-semibold">{item.desc}</p>
                       </div>
                    </motion.div>
                 ))}
              </div>
          </div>

          {/* --- RIGHT: VISUAL & BADGE --- */}
          <div className="w-full lg:w-8/12 order-1 lg:order-2 relative flex flex-col justify-center">
              
              {/* Main Image Frame */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                 {/* Soft White/Glass Frame */}
                 <div className="relative p-3 bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100">
                    <div className="relative overflow-hidden rounded-[2rem]">
                      
                      <Image 
                        src={careImage} 
                        alt="Child reading safely" 
                        width={700} 
                        height={900}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Floating 'Certified' Badge */}
                      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white flex items-center gap-3">
                         <div className="bg-green-100 p-2 rounded-full">
                           <ShieldCheck className="w-6 h-6 text-green-600" />
                         </div>
                         <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Safety First</p>
                            <p className={`text-slate-800 font-bold ${titleFont.className}`}>Certified Care</p>
                         </div>
                      </div>

                    </div>
                 </div>

                 {/* Decorative Elements behind */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-[60px] opacity-60 animate-pulse" />
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-[60px] opacity-60" />
              </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LittleCometsCare;
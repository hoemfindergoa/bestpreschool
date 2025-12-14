'use client';

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { 
  ShieldCheck, 
  Utensils, 
  Moon, 
  Camera, 
  Gamepad2, 
  BookHeart, 
  HeartHandshake,
  Star
} from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';

// --- PLACEHOLDER IMAGE ---
import careImage from "../public/dragonlookingmoon.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// --- FACILITIES DATA ---
const facilities = [
  { id: 1, title: "24/7 Watchtower", desc: "CCTV-enabled classrooms & strict protocols.", icon: <Camera className="w-5 h-5" />, color: "emerald" },
  { id: 2, title: "Galactic Fueling", desc: "Nutritious meals for sustained energy.", icon: <Utensils className="w-5 h-5" />, color: "orange" },
  { id: 3, title: "Anti-Gravity Play", desc: "Soft play zones & hygienic learning corners.", icon: <Gamepad2 className="w-5 h-5" />, color: "cyan" },
  { id: 4, title: "Stasis Pods", desc: "Cozy rest areas for recharging.", icon: <Moon className="w-5 h-5" />, color: "indigo" },
  { id: 5, title: "Mission Support", desc: "Homework assistance & creative activities.", icon: <BookHeart className="w-5 h-5" />, color: "pink" },
  { id: 6, title: "Guardian Officers", desc: "Trained caregivers & personalized attention.", icon: <HeartHandshake className="w-5 h-5" />, color: "rose" }
];

const LittleCometsCare: React.FC = () => {
  
  // --- PARTICLES INIT ---
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className={`relative py-24 overflow-hidden ${bodyFont.className} text-white`}>
      
      {/* =========================================
          LAYER 0: BLASTING STARS ANIMATION
      ========================================= */}
      {/* <Particles
        id="daycare-particles"
        init={particlesInit}
        className="absolute inset-0 z-0 h-full pointer-events-none"
        options={{
          fullScreen: false,
          fpsLimit: 120,
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.2 },
            number: { density: { enable: true, area: 800 }, value: 30 }, // Fewer background stars to focus on the blast
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          emitters: {
            direction: "left",
            rate: { quantity: 1, delay: { min: 4, max: 8 } }, // Fire a meteor every 4-8 seconds
            size: { width: 0, height: 100 },
            position: { x: 100, y: { min: 10, max: 90 } }, // From right edge
            life: { count: 0, duration: 0.1, delay: 0.1 },
            particles: {
              // THE METEOR
              color: { value: ["#fbbf24", "#f59e0b"] }, // Warm Gold/Amber for Day Care warmth
              shape: { type: "circle" },
              size: { value: 4 },
              move: {
                enable: true,
                speed: { min: 20, max: 40 },
                direction: "left",
                straight: true,
                outModes: { default: "destroy" },
              },
              trail: { enable: true, length: 15, fillColor: { value: "#000" } },
              life: { duration: { min: 0.5, max: 1.5 }, count: 1 },
              // THE BLAST
              destroy: {
                mode: "split",
                split: {
                  count: 1,
                  factor: { value: 1 },
                  rate: { value: { min: 10, max: 20 } },
                  particles: {
                    // SPARKS
                    shape: { type: "star" },
                    size: { value: { min: 1, max: 2 } },
                    life: { duration: 0.5, count: 1 },
                    move: {
                      enable: true,
                      speed: { min: 5, max: 15 },
                      direction: "none",
                      random: true,
                      straight: false,
                      outModes: "destroy",
                    },
                    opacity: { value: { min: 0, max: 1 }, animation: { enable: true, speed: 3, startValue: "max", destroy: "min" } },
                    color: { value: ["#fbbf24", "#ffffff"] },
                  },
                },
              },
            },
          },
        }}
      /> */}


      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- TITLE HEADER --- */}
        <div className="mb-16 text-center lg:text-left relative">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-900/10 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className={`text-lg text-yellow-200 ${handwritingFont.className} font-bold`}>
                  Little Comets Care Centre
                </span>
             </div>
             
             <h2 className={`text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight ${titleFont.className}`}>
               A Safe Harbor for <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-rose-300">
                 Little Explorers
               </span>
             </h2>
           </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* --- LEFT: CONTENT & FACILITIES GRID --- */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
             
             {/* Description Text */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-10 backdrop-blur-md relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-500" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our Day Care service provides a safe, nurturing, and well-supervised environment where children feel comfortable, engaged, and happy. We offer <span className="text-yellow-200 font-bold">age-appropriate activities</span>, nutritious meals, and structured routines that support emotional, social, and cognitive development.
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
                     whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                     className="flex items-start gap-4 p-4 rounded-2xl bg-[#161925]/80 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300 cursor-default group"
                   >
                      <div className={`shrink-0 w-10 h-10 rounded-xl bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center group-hover:bg-${item.color}-500 group-hover:text-white transition-colors duration-300`}>
                         {item.icon}
                      </div>
                      <div>
                         <h4 className={`text-white font-bold text-lg ${titleFont.className} mb-1`}>{item.title}</h4>
                         <p className="text-slate-400 text-sm leading-snug">{item.desc}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* --- RIGHT: VISUAL & BADGE --- */}
          <div className="w-full lg:w-8/12 order-1 lg:order-2 relative flex flex-col justify-center">
             
             {/* Main Image Frame */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10"
             >
                {/* Tech Frame */}
                <div className="relative  p-2  ">
                   <div className="relative overflow-hidden ">
                      {/* Inner Image */}
                      <Image 
                        src={careImage} 
                        alt="Child reading safely" 
                        width={700} 
                        height={900}
                        className="object-cover w-full h-full group-hover:opacity-100 "
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent opacity-60" />

                      {/* Floating Status Badge */}
                
                   </div>
                </div>

                {/* Decorative Elements behind */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500 rounded-full blur-[60px] opacity-20 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-[60px] opacity-20" />
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LittleCometsCare;
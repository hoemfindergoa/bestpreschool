'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Rocket, Moon, Trophy, Atom, Star, Sparkles } from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// --- PLACEHOLDER IMAGES ---
import boywithcup from "../public/dragonastrostudy.png"; 
import girlwithbook from "../public/dragonwithearth.png";
import boywithelephant from "../public/dragonwithbody.png";
import girlonswing from "../public/playingwithrock.png";

// --- FONT CONFIGURATION ---
const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const handwritingFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// --- TYPES & INTERFACES ---
type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal';

interface Program {
  id: number;
  title: string;
  subtitle: string;
  age: string;
  description: string;
  fullDescription: string;
  theme: ThemeColor;
  image: any;
  linkId: string;
}

interface ThemeStyles {
  text: string;
  glow: string;
  border: string;
  btnGrad: string;
  iconColor: string;
}

// --- DATA ---
const programs: Program[] = [
  {
    id: 1,
    title: "Little Rockets",
    subtitle: "Igniting Curiosity",
    age: "Play Group (2–3 Years)",
    description: "Our Little Rockets begin their learning journey with joyful discoveries and hands-on exploration.",
    fullDescription: "Focuses on early social skills, motor abilities, and sensory awareness through structured play.",
    theme: "rose", 
    image: boywithcup, 
    linkId: "rockets"
  },
  {
    id: 2,
    title: "Moon Explorers",
    subtitle: "Imagination Takes Flight",
    age: "Nursery (3–4 Years)",
    description: "Step into a world of imagination! Children engage in early literacy, numeracy, and thematic play.",
    fullDescription: "Through guided exploration and storytelling, learners develop essential communication skills.",
    theme: "sky",
    image: girlwithbook, 
    linkId: "explorers"
  },
  {
    id: 3,
    title: "Astro Champs",
    subtitle: "Building Confidence",
    age: "LKG (4–5 Years)",
    description: "Building stronger academic readiness through structured yet enjoyable learning experiences.",
    fullDescription: "Hands-on projects strengthen cognitive growth while shaping discipline and curiosity.",
    theme: "purple",
    image: boywithelephant, 
    linkId: "champs"
  },
  {
    id: 4,
    title: "Space Innovators",
    subtitle: "Ready for Lift-Off",
    age: "UKG (5–6 Years)",
    description: "Preparing for formal schooling with advanced foundational learning and logical thinking.",
    fullDescription: "Engages children in real-world explorations that build independence and readiness for Grade 1.",
    theme: "teal",
    image: girlonswing, 
    linkId: "innovators"
  }
];

// --- MAIN COMPONENT ---
const CosmicPrograms: React.FC = () => {
  return (
    <section id='programs' className={`py-20 relative overflow-hidden  ${bodyFont.className}`}>
    

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className={`text-lg text-purple-200 ${handwritingFont.className} font-bold`}>
                  Your Child's Flight Path
                </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl uppercase leading-tight text-white ${titleFont.className}`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">
                Programs
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --- PROGRAM GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-12">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} data={program} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- CARD COMPONENT ---

interface ProgramCardProps {
  data: Program;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ data, index }) => {
  
  // Updated Styles for Dark Mode / Neon Theme
  const colors: Record<ThemeColor, ThemeStyles> = {
    rose:   { text: 'text-rose-400', glow: 'shadow-rose-500/20 hover:shadow-rose-500/40', border: 'border-rose-500/30', btnGrad: 'from-rose-500 to-pink-600', iconColor: 'text-rose-300' },
    sky:    { text: 'text-sky-400', glow: 'shadow-sky-500/20 hover:shadow-sky-500/40', border: 'border-sky-500/30', btnGrad: 'from-sky-500 to-blue-600', iconColor: 'text-sky-300' },
    purple: { text: 'text-purple-400', glow: 'shadow-purple-500/20 hover:shadow-purple-500/40', border: 'border-purple-500/30', btnGrad: 'from-purple-500 to-violet-600', iconColor: 'text-purple-300' },
    teal:   { text: 'text-teal-400', glow: 'shadow-teal-500/20 hover:shadow-teal-500/40', border: 'border-teal-500/30', btnGrad: 'from-teal-400 to-emerald-600', iconColor: 'text-teal-300' },
  };

  const theme = colors[data.theme];

  return (
    <motion.div
      className={`
        w-full flex flex-col items-center gap-6 
        p-6 md:p-8
        bg-[#131625]/80 backdrop-blur-md 
        border ${theme.border}
        rounded-[3rem]
        shadow-2xl ${theme.glow}
        transition-all duration-500
        hover:-translate-y-3 relative group overflow-hidden
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Radial Gradient Glow in background */}
      <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${theme.text.replace('text-', 'from-')}/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

      {/* --- CHARACTER IMAGE --- */}
      <div className="relative mt-2 mb-2 z-10 w-full flex justify-center">
        {/* Animated Glow behind image */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full ${theme.text.replace('text-', 'bg-')}/20 blur-[40px] group-hover:blur-[60px] transition-all duration-700`} />
        
        <motion.div 
           className="w-44 h-44 relative"
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 1 }}
        >
          <Image 
             src={data.image} 
             alt={data.title} 
             width={250}
             height={250}
             className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500" 
          />
        </motion.div>
      </div>

      {/* --- CONTENT --- */}
      <div className="flex-1 text-center space-y-3 w-full flex flex-col justify-between z-10">
        <div>
          <h3 className={`text-3xl ${theme.text} mb-2 ${titleFont.className} tracking-wide drop-shadow-sm`}>
            {data.title}
          </h3>
          
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
             <p className={`text-gray-300 font-bold text-xs uppercase tracking-widest ${bodyFont.className}`}>
               {data.age}
             </p>
          </div>

          <p className={`text-gray-400 ${handwritingFont.className} text-xl mt-1 min-h-[3rem]`}>
              "{data.subtitle}"
          </p>
          
          {/* Separator Line */}
          <div className={`w-12 h-1 mx-auto rounded-full bg-gradient-to-r ${theme.btnGrad} my-4 opacity-50 group-hover:w-24 transition-all duration-500`} />

          <p className={`text-gray-300 text-sm leading-relaxed font-medium px-1 ${bodyFont.className}`}>
            {data.description}
          </p>
        </div>

        {/* --- ACTION BUTTON --- */}
        <div className="pt-6 w-full">
            <Link href={`#${data.linkId}`} className="block w-full">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-2xl bg-gradient-to-r ${theme.btnGrad} text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all ${bodyFont.className}`}
              >
                Curriculum
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CosmicPrograms;
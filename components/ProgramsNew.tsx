'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Rocket, Moon, Trophy, Atom } from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// --- PLACEHOLDER IMAGES (Replace these imports with your actual assets) ---
// You can keep using the ones you have, or swap for space-themed vectors
import boywithcup from "../public/boywithcup.png"; 
import girlwithbook from "../public/girlwithbook.png";
import boywithelephant from "../public/boywithelephent.png";
import girlonswing from "../public/girlonwing.png";

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
  icon: any; // Added an icon for the header
  linkId: string;
}

interface ThemeStyles {
  text: string;
  bg: string;
  border: string;
  btn: string;
  shadow: string;
}

// --- DATA (UPDATED WITH COSMIC CONTENT) ---
const programs: Program[] = [
  {
    id: 1,
    title: "Little Rockets",
    subtitle: "Igniting Curiosity",
    age: "Play Group (2–3 Years)",
    description: "Our Little Rockets begin their learning journey with joyful discoveries and hands-on exploration.",
    fullDescription: "Focuses on early social skills, motor abilities, and sensory awareness through structured play.",
    theme: "rose", 
    image: boywithcup, // Replace with your vector image
    icon: Rocket,
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
    image: girlwithbook, // Replace with your vector image
    icon: Moon,
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
    image: boywithelephant, // Replace with your vector image
    icon: Trophy,
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
    image: girlonswing, // Replace with your vector image
    icon: Atom,
    linkId: "innovators"
  }
];

// --- MAIN COMPONENT ---
const CosmicPrograms: React.FC = () => {
  return (
    <section id='programs' className={`py-16 relative overflow-hidden bg-white ${bodyFont.className}`}>
      
      {/* Background Decor (Subtle Doodles) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 Q50,50 100,0 V100 H0 Z" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={`text-xl text-purple-600 mb-2 ${handwritingFont.className} font-bold`}>
              Your Child's Flight Path
            </p>
            <h2 className={`text-5xl md:text-7xl uppercase leading-tight ${titleFont.className}`}>
              <span className="text-black">Our </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
                Programs
              </span>
            </h2>
          </motion.div>
          
          {/* Decorative Floating Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden md:block absolute top-10 right-20 text-6xl opacity-20 rotate-12"
          >
             🚀
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
  
  const colors: Record<ThemeColor, ThemeStyles> = {
    rose:   { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', btn: 'bg-rose-500', shadow: 'shadow-rose-100' },
    sky:    { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200', btn: 'bg-sky-500', shadow: 'shadow-sky-100' },
    purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', btn: 'bg-purple-500', shadow: 'shadow-purple-100' },
    teal:   { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', btn: 'bg-teal-500', shadow: 'shadow-teal-100' },
  };

  const theme = colors[data.theme];
  const Icon = data.icon;

  return (
    <motion.div
      className={`
        w-full h-full flex flex-col items-center gap-6 
        p-6 md:p-8
        bg-white border-[3px] ${theme.border} 
        rounded-[50px]
        shadow-xl ${theme.shadow}
        hover:shadow-2xl transition-all duration-300
        hover:-translate-y-2 relative group overflow-hidden
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Top Banner with Age */}
      <div className={`absolute top-0 inset-x-0 h-24 ${theme.bg} rounded-t-[45px] -z-0`} />

      {/* --- CHARACTER IMAGE --- */}
      <div className="relative mt-4 mb-2 z-10">
        <div className="w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center relative">
            
            {/* White Halo behind image for separation from bg banner */}
            <div className="absolute inset-0 bg-white rounded-full blur-md opacity-70 transform scale-90"></div>
            
            <Image 
                src={data.image} 
                alt={data.title} 
                width={200}
                height={200}
                className="object-contain drop-shadow-md transform group-hover:scale-110 transition-transform duration-500" 
            />
        </div>
        
        {/* Floating Icon Badge */}
        <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full ${theme.btn} flex items-center justify-center text-white border-4 border-white shadow-lg`}>
            <Icon size={20} />
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="flex-1 text-center space-y-3 w-full flex flex-col justify-between z-10">
        <div>
          <h3 className={`text-2xl lg:text-3xl ${theme.text} mb-1 ${titleFont.className} tracking-wide`}>
            {data.title}
          </h3>
          <p className={`text-gray-500 font-bold text-xs uppercase tracking-widest ${bodyFont.className}`}>
            {data.age}
          </p>
          <p className={`text-gray-400 ${handwritingFont.className} text-xl mt-1`}>
             "{data.subtitle}"
          </p>
          
          <div className="w-12 h-1 mx-auto rounded-full bg-gray-100 my-4 group-hover:w-24 transition-all duration-500" />

          <p className={`text-gray-600 text-sm leading-relaxed font-semibold px-1 ${bodyFont.className}`}>
            {data.description}
          </p>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <Link href={`#${data.linkId}`} className="w-full pt-6">
          <div className="flex items-center justify-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-3 rounded-full ${theme.btn} text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:brightness-110 transition-all ${bodyFont.className}`}
            >
              Curriculum
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-md text-gray-400 hover:text-rose-500 transition-colors"
            >
              <Play className="w-4 h-4 ml-0.5 fill-current" />
            </motion.button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default CosmicPrograms;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Star, CloudSun } from 'lucide-react'; 
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
  titleText: string;
  badgeBg: string;
  badgeText: string;
  cardBorder: string;
  bgGradient: string; // Subtle background for the image area
  btnGrad: string;
  shadowColor: string;
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
  },
];

// --- MAIN COMPONENT ---
const CosmicPrograms: React.FC = () => {
  return (
    <section id='programs' className={`py-24 relative overflow-hidden bg-slate-50 ${bodyFont.className}`}>
      
      {/* Background Decor (Clouds/Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-purple-200 bg-white shadow-sm">
                <CloudSun className="w-5 h-5 text-orange-400" />
                <span className={`text-xl text-slate-600 ${handwritingFont.className} font-bold`}>
                  Your Child's Flight Path
                </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl leading-tight text-slate-900 ${titleFont.className}`}>
              Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                Programs
                {/* Underline Squiggle */}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
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
  
  // LIGHT THEME COLOR PALETTE
  const colors: Record<ThemeColor, ThemeStyles> = {
    rose:   { 
      titleText: 'text-rose-600', 
      badgeBg: 'bg-rose-50', 
      badgeText: 'text-rose-600',
      cardBorder: 'border-rose-100', 
      bgGradient: 'bg-gradient-to-b from-rose-50 to-white',
      btnGrad: 'from-rose-500 to-pink-600', 
      shadowColor: 'shadow-rose-200'
    },
    sky:    { 
      titleText: 'text-blue-600', 
      badgeBg: 'bg-blue-50', 
      badgeText: 'text-blue-600',
      cardBorder: 'border-blue-100', 
      bgGradient: 'bg-gradient-to-b from-blue-50 to-white',
      btnGrad: 'from-blue-500 to-indigo-600', 
      shadowColor: 'shadow-blue-200'
    },
    purple: { 
      titleText: 'text-purple-600', 
      badgeBg: 'bg-purple-50', 
      badgeText: 'text-purple-600',
      cardBorder: 'border-purple-100', 
      bgGradient: 'bg-gradient-to-b from-purple-50 to-white',
      btnGrad: 'from-purple-500 to-violet-600', 
      shadowColor: 'shadow-purple-200'
    },
    teal:   { 
      titleText: 'text-teal-600', 
      badgeBg: 'bg-teal-50', 
      badgeText: 'text-teal-600',
      cardBorder: 'border-teal-100', 
      bgGradient: 'bg-gradient-to-b from-teal-50 to-white',
      btnGrad: 'from-teal-400 to-emerald-600', 
      shadowColor: 'shadow-teal-200'
    },
  };

  const theme = colors[data.theme];

  return (
    <motion.div
      className={`
        w-full flex flex-col items-center 
        bg-white
        border ${theme.cardBorder}
        rounded-[2.5rem]
        shadow-xl hover:shadow-2xl ${theme.shadowColor}
        transition-all duration-500
        hover:-translate-y-3 relative group overflow-hidden
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      
      {/* --- TOP IMAGE SECTION (Pastel Background) --- */}
      <div className={`w-full h-48 relative overflow-hidden ${theme.bgGradient} flex items-center justify-center rounded-t-[2.5rem]`}>
        {/* Animated Background Blobs inside card */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${theme.badgeBg} rounded-full blur-2xl opacity-60 -translate-y-1/2 translate-x-1/2`} />
        
        <motion.div 
           className="relative z-10 w-40 h-40"
           whileHover={{ scale: 1.1, rotate: 5 }}
           transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
             src={data.image} 
             alt={data.title} 
             width={200}
             height={200}
             className="object-contain drop-shadow-md" 
          />
        </motion.div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="flex-1 w-full p-6 md:p-8 flex flex-col items-center text-center space-y-4">
        
        {/* Badge */}
        <div className={`inline-block px-4 py-1.5 rounded-full ${theme.badgeBg} ${theme.badgeText} font-extrabold text-xs uppercase tracking-widest ${bodyFont.className}`}>
           {data.age}
        </div>

        {/* Titles */}
        <div>
          <h3 className={`text-3xl ${theme.titleText} ${titleFont.className} tracking-wide mb-1`}>
            {data.title}
          </h3>
          <p className={`text-slate-500 ${handwritingFont.className} text-xl font-bold`}>
              "{data.subtitle}"
          </p>
        </div>

        {/* Separator */}
        <div className="w-16 h-1 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors" />

        <p className={`text-slate-600 text-sm leading-relaxed font-semibold px-2 ${bodyFont.className}`}>
          {data.description}
        </p>

        {/* --- ACTION BUTTON --- */}
        <div className="pt-4 w-full mt-auto">
            <Link href={`#${data.linkId}`} className="block w-full">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${theme.btnGrad} text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 hover:shadow-xl transition-all ${bodyFont.className}`}
              >
                View Curriculum
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CosmicPrograms;
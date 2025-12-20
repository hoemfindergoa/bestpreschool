'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CloudSun } from 'lucide-react'; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image, { StaticImageData } from 'next/image'; // Added StaticImageData
import Link from 'next/link';

// --- IMAGE IMPORTS ---
import boywithfootball from "../public/boywithfootball.png"; 
import girlwithbook from "../public/dancestep.png";
import boywithelephant from "../public/girlbizzo.png";
import girlonswing from "../public/girlopposite.png";

// --- FONT CONFIGURATION ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

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
  image: StaticImageData; // Precisely types the imported PNGs
  linkId: string;
}

interface ThemeStyles {
  titleText: string;
  badgeBg: string;
  badgeText: string;
  smudgeColor: string; // Added for the bubbly effect
  btnGrad: string;
  shadowColor: string;
}

interface ProgramCardProps {
  data: Program;
  index: number;
}

// --- DATA ---
const programs: Program[] = [
  {
    id: 1,
    title: "Little Rockets",
    subtitle: "Igniting Curiosity",
    age: "Play Group (2–3 Years)",
    description: "Our Little Rockets begin their learning journey with joyful discoveries and hands-on exploration.",
    fullDescription: "Focuses on early social skills.",
    theme: "rose", 
    image: boywithfootball, 
    linkId: "rockets"
  },
  {
    id: 2,
    title: "Moon Explorers",
    subtitle: "Imagination Takes Flight",
    age: "Nursery (3–4 Years)",
    description: "Step into a world of imagination! Children engage in early literacy and thematic play.",
    fullDescription: "Guided exploration.",
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
    fullDescription: "Hands-on projects.",
    theme: "purple",
    image: boywithelephant, 
    linkId: "champs"
  },
  {
    id: 4,
    title: "Space Innovators",
    subtitle: "Ready for Lift-Off",
    age: "UKG (5–6 Years)",
    description: "Preparing for formal schooling with advanced foundational learning.",
    fullDescription: "Real-world explorations.",
    theme: "teal",
    image: girlonswing, 
    linkId: "innovators"
  },
];

const CosmicPrograms: React.FC = () => {
  return (
    <section id='programs' className={`py-24 relative overflow-hidden bg-[#fdfbf7] ${bodyFont.className}`}>
      
      {/* GLOBAL CHALK FILTER */}
      <svg className="absolute h-0 w-0 invisible">
        <filter id="chalk-rubbing">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
             <h2 className={`text-5xl md:text-7xl leading-tight ${titleFont.className}`}>
                <span className="relative inline-block px-4 py-1">
                    <span 
                      className="relative z-10 uppercase tracking-tighter"
                      style={{
                        filter: 'url(#chalk-rubbing)',
                        background: 'linear-gradient(110deg, #4FA8CF 20%, #E27B50 40%, #8E54B0 60%, #A3C54E 80%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Our Programs
                    </span>
                    <span className="absolute inset-0 -z-10 opacity-30 blur-xl scale-125 bg-gradient-to-r from-blue-100 via-orange-100 to-green-100 rounded-full" />
                </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} data={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramCard: React.FC<ProgramCardProps> = ({ data, index }) => {
  const colors: Record<ThemeColor, ThemeStyles> = {
    rose:   { titleText: '#E11D48', badgeBg: 'bg-rose-50', badgeText: 'text-rose-600', smudgeColor: 'bg-rose-200', btnGrad: 'from-rose-500 to-pink-600', shadowColor: 'shadow-rose-200' },
    sky:    { titleText: '#2563EB', badgeBg: 'bg-blue-50', badgeText: 'text-blue-600', smudgeColor: 'bg-blue-200', btnGrad: 'from-blue-500 to-indigo-600', shadowColor: 'shadow-blue-200' },
    purple: { titleText: '#9333EA', badgeBg: 'bg-purple-50', badgeText: 'text-purple-600', smudgeColor: 'bg-purple-200', btnGrad: 'from-purple-500 to-violet-600', shadowColor: 'shadow-purple-200' },
    teal:   { titleText: '#0D9488', badgeBg: 'bg-teal-50', badgeText: 'text-teal-600', smudgeColor: 'bg-teal-200', btnGrad: 'from-teal-400 to-emerald-600', shadowColor: 'shadow-teal-200' },
  };

  const theme = colors[data.theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-[3rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
    >
      {/* Image Area */}
      <div className={`w-full aspect-square relative rounded-[2.5rem] ${theme.badgeBg} mb-6 flex items-center justify-center`}>
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-4/5 h-4/5 relative">
          <Image src={data.image} alt={data.title} fill className="object-contain" />
        </motion.div>
      </div>

      {/* Chalk Title with Bubbly Smudge */}
      <div className="relative mb-2">
        <h3 
          className={`text-3xl ${titleFont.className} relative z-10`}
          style={{ filter: 'url(#chalk-rubbing)', color: theme.titleText }}
        >
          {data.title}
        </h3>
        <div className={`absolute inset-0 -z-10 ${theme.smudgeColor} opacity-30 blur-md scale-110 rounded-full transform -rotate-2`} />
      </div>

      <p className={`text-slate-500 ${handwritingFont.className} text-xl font-bold mb-4`}>
        "{data.subtitle}"
      </p>

      <div className={`px-4 py-1 rounded-full ${theme.badgeBg} ${theme.badgeText} text-xs font-black mb-6`}>
        {data.age}
      </div>

      <Link href={`#${data.linkId}`} className="w-full mt-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className={`w-full py-4 rounded-2xl bg-gradient-to-r ${theme.btnGrad} text-white font-bold flex items-center justify-center gap-2 shadow-lg`}
        >
          View Curriculum <ArrowRight className="w-4 h-4" />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CosmicPrograms;
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle, Sparkles, Star, Cloud } from 'lucide-react';
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import Image from 'next/image';

// --- IMAGE IMPORTS ---
import boywithcup from "../../public/boywithcup.png";
import girlwithbook from "../../public/girlwithbook 1.svg"
import boywithelephant from "../../public/boywithelephent.png"
import girlonswing from "../../public/girlonwing.png"
import boywithbrush from "../../public/boywithbrush.png"

// --- FONTS ---
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

// --- TYPES ---
type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber';

interface Program {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  theme: ThemeColor;
  image: any;
  features: string[]; // Added bullet points for detail
  ids?: string;
}

// --- DATA ---
const programs: Program[] = [
  {
    id: 1,
    title: "Little Explorers",
    subtitle: "Play Group – Age 2–3 Years",
    description: "At Little Dreamers, our Little Explorers begin their joyful learning journey through play and imagination.",
    fullDescription: "Activities are thoughtfully designed to build sensory awareness, strengthen motor skills, and encourage social interaction. Children learn to adapt, express themselves freely, and gain early confidence.",
    theme: "rose", 
    image: boywithcup,
    features: ["Sensory Play", "Social Interaction", "Motor Skills"],
    ids: "#explorers"
  },
  {
    id: 2,
    title: "Curious Learners",
    subtitle: "Nursery – Age 3–4 Years",
    description: "Our Curious Learners explore the world of colors, numbers, and letters through fun, interactive activities.",
    fullDescription: "This stage builds imagination, communication, and growing independence. Children learn to observe, question, express, and share their ideas.",
    theme: "sky",
    image: girlwithbook,
    features: ["Early Phonics", "Number Sense", "Creative Arts"],
    ids: "#learners"
  },
  {
    id: 3,
    title: "Creative Thinkers",
    subtitle: "LKG – Age 4–5 Years",
    description: "Children strengthen early academic skills while exploring creativity, imagination, and expression.",
    fullDescription: "Through phonics, storytelling, art, and group play, they build confidence. Each day encourages children to think creatively and communicate confidently.",
    theme: "purple",
    image: boywithelephant,
    features: ["Public Speaking", "Logical Reasoning", "Collaborative Play"],
    ids: "#thinkers"
  },
  {
    id: 4,
    title: "Future Leaders",
    subtitle: "UKG – Age 5–6 Years",
    description: "Prepares children for formal schooling by building a strong foundation in academics and life skills.",
    fullDescription: "With structured learning in language, math, and environmental studies, children develop clarity in concepts and confidence in application.",
    theme: "teal",
    image: girlonswing,
    features: ["School Readiness", "Advanced Math", "Leadership Skills"],
    ids: "#leaders"
  },
  {
    id: 5,
    title: "Day Care Service",
    subtitle: "Flexible Hours – 2 Years+",
    description: "A home away from home where your child is cared for in a safe, engaging, and loving environment.",
    fullDescription: "Our Day Care program offers structured relaxation, nutritious snacks, and supervised play activities giving parents peace of mind.",
    theme: "amber",
    image: boywithbrush,
    features: ["Nutritious Meals", "Safe Environment", "Homework Help"],
    ids: "#daycare"
  }
];

// --- WAVE COMPONENT ---
const WaveSeparator = ({ position, color }: { position: "top" | "bottom", color: string }) => {
    return (
      <div className={`absolute left-0 w-full h-[50px] md:h-[80px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
         <svg className={`relative block w-full h-full ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             {position === "top" ? (
                 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
             ) : (
                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
             )}
         </svg>
      </div>
    );
};

// --- MAIN COMPONENT ---
const page: React.FC = () => {
  return (
    <div className={`w-full bg-white overflow-hidden ${bodyFont.className}`}>
      
      {/* HEADER */}
      <div className="text-center pt-20 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-500 font-bold tracking-wider text-sm uppercase bg-sky-100 px-4 py-1 rounded-full">
              Academic Programs
            </span>
            <h2 className={`text-5xl md:text-7xl mt-4 uppercase leading-tight ${titleFont.className}`}>
              <span className="text-rose-500">Learning</span>{' '}
              <span className="text-slate-800">Pathways</span>
            </h2>
            <div className="w-24 h-2 bg-amber-300 rounded-full mx-auto mt-4"></div>
          </motion.div>
      </div>

      {/* PROGRAMS LOOP */}
      <div className="flex flex-col">
        {programs.map((program, index) => {
          // Logic to alternate backgrounds: Color -> White -> Color
          const isColoredBackground = index % 2 === 0; 
          const isReversedLayout = index % 2 !== 0;

          // Map Theme to Tailwind Colors
          const themeMap: Record<ThemeColor, { bg: string, text: string, wave: string, accent: string }> = {
            rose:   { bg: 'bg-rose-50', text: 'text-rose-600', wave: 'text-rose-50', accent: 'bg-rose-500' },
            sky:    { bg: 'bg-sky-50', text: 'text-sky-600', wave: 'text-sky-50', accent: 'bg-sky-500' },
            purple: { bg: 'bg-purple-50', text: 'text-purple-600', wave: 'text-purple-50', accent: 'bg-purple-500' },
            teal:   { bg: 'bg-teal-50', text: 'text-teal-600', wave: 'text-teal-50', accent: 'bg-teal-500' },
            amber:  { bg: 'bg-amber-50', text: 'text-amber-600', wave: 'text-amber-50', accent: 'bg-amber-500' },
          };

          const style = themeMap[program.theme];

          return (
            <section 
              key={program.id} 
              className={`relative py-24 md:py-32 ${isColoredBackground ? style.bg : 'bg-white'}`}
            >
               {/* WAVES */}
               {isColoredBackground && (
                 <>
                   <WaveSeparator position="top" color="text-white" />
                   <WaveSeparator position="bottom" color="text-white" />
                 </>
               )}

               {/* Background Elements (Doodles) */}
               {isColoredBackground && (
                 <div className="absolute inset-0 pointer-events-none opacity-20">
                    <Cloud className="absolute top-20 left-10 w-24 h-24" />
                    <Star className="absolute bottom-20 right-10 w-16 h-16" />
                 </div>
               )}

            <div  id={program.ids} className="container mx-auto px-6 relative z-10">
                 <div className={`flex flex-col gap-12 items-center ${isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    
                    {/* TEXT SIDE */}
                    <motion.div 
                      className="w-full lg:w-1/2"
                      initial={{ opacity: 0, x: isReversedLayout ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                       <span className={`inline-block px-4 py-2 rounded-lg font-bold text-sm mb-4 ${isColoredBackground ? 'bg-white' : style.bg} ${style.text}`}>
                          {program.subtitle}
                       </span>
                       
                       <h3 className={`text-4xl md:text-5xl mb-6 ${titleFont.className} ${style.text}`}>
                         {program.title}
                       </h3>
                       
                       <p className="text-slate-700 text-lg md:text-xl font-bold mb-4 leading-relaxed">
                         {program.description}
                       </p>
                       <p className="text-slate-600 text-base leading-relaxed mb-8">
                         {program.fullDescription}
                       </p>

                       {/* Features List */}
                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                         {program.features.map((feature, i) => (
                           <li key={i} className="flex items-center gap-2 text-slate-700 font-semibold">
                              <CheckCircle className={`w-5 h-5 ${style.text}`} />
                              {feature}
                           </li>
                         ))}
                       </ul>

                       <div className="flex gap-4">
                          <button className={`px-8 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 ${style.accent}`}>
                             Enquire Now <ArrowRight className="w-4 h-4" />
                          </button>
                       </div>
                    </motion.div>

                    {/* IMAGE SIDE */}
                    <motion.div 
                      className="w-full lg:w-1/2 flex justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                       <div className="relative w-full max-w-[500px] aspect-square">
                          {/* Blob Background */}
                          <div className={`absolute inset-4 rounded-[3rem] ${isColoredBackground ? 'bg-white/50' : style.bg} rotate-3`}></div>
                          
                          {/* Image Container */}
                          <div className={`absolute inset-0 rounded-[3rem] overflow-hidden border-4 ${isColoredBackground ? 'border-white' : style.bg} shadow-2xl bg-white -rotate-3 hover:rotate-0 transition-transform duration-500`}>
                              <div className="w-full h-full flex items-center justify-center p-8">
                                <Image 
                                  src={program.image} 
                                  alt={program.title}
                                  width={500}
                                  height={500}
                                  className="object-contain w-full h-full drop-shadow-md"
                                />
                              </div>
                          </div>

                          {/* Floating Badge */}
                          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl animate-bounce">
                             <Sparkles className={`w-8 h-8 ${style.text}`} />
                          </div>
                       </div>
                    </motion.div>

                 </div>
               </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default page;
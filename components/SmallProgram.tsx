"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  ShieldCheck, 
  Shapes, 
  Clock, 
  Laptop, 
  Users, 
  HeartHandshake, 
  Music, 
  Sparkles,
  Cloud,
  Star
} from "lucide-react";
import { Titan_One, Nunito, Caveat } from 'next/font/google';

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

// --- DATA ---
const getIcon = (id: number) => {
  const icons = [
    GraduationCap, ShieldCheck, Shapes, Clock, Laptop, Users, HeartHandshake, Music, Sparkles 
  ];
  return icons[id - 1] || Sparkles;
};

const methodologyData = [
  {
    id: 1,
    title: "Research-Backed",
    desc: "Blending Montessori & experiential learning for holistic development.",
    // Using specific tailwind colors for the new UI look
    style: "bg-[#FFF5F7] text-[#D33060] border-[#D33060]", 
    iconBg: "bg-[#D33060] text-white"
  },
  {
    id: 2,
    title: "Expert Educators",
    desc: "Specialized training ensures personalized attention and warmth.",
    style: "bg-[#F0F9FF] text-[#0ea5e9] border-[#0ea5e9]",
    iconBg: "bg-[#0ea5e9] text-white"
  },
  {
    id: 3,
    title: "Safe Infrastructure",
    desc: "Rounded furniture and sensory corners designed for child safety.",
    style: "bg-[#FFF1F2] text-[#e11d48] border-[#e11d48]",
    iconBg: "bg-[#e11d48] text-white"
  },
  {
    id: 4,
    title: "Montessori Lab",
    desc: "Authentic materials encourage exploration and fine motor skills.",
    style: "bg-[#FFFBEB] text-[#d97706] border-[#d97706]",
    iconBg: "bg-[#d97706] text-white"
  },
  {
    id: 5,
    title: "Structured Daycare",
    desc: "A balanced mix of rest, meals, and play ensures a happy environment.",
    style: "bg-[#ECFDF5] text-[#059669] border-[#059669]",
    iconBg: "bg-[#059669] text-white"
  },
  {
    id: 6,
    title: "Tech-Enabled",
    desc: "Age-appropriate digital resources introduce early literacy.",
    style: "bg-[#ECFEFF] text-[#0891b2] border-[#0891b2]",
    iconBg: "bg-[#0891b2] text-white"
  },
  {
    id: 7,
    title: "Parent Partnership",
    desc: "Consistent updates and digital reports ensure active collaboration.",
    style: "bg-[#EEF2FF] text-[#4f46e5] border-[#4f46e5]",
    iconBg: "bg-[#4f46e5] text-white"
  },
];

// --- YOUR ORIGINAL MOVING WAVE COMPONENT ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position }) => {
  const viewBoxWidth = 2000;
  const viewBoxHeight = 100;

  const getWavePath = (count: number) => {
    const waveWidth = viewBoxWidth / count;
    let pathD = "";

    if (position === "top") {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, 25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} 0 H 0 Z`;
    } else {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, -25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} H 0 Z`;
    }
    return pathD;
  };

  const mobilePath = getWavePath(5);
  const desktopPath = getWavePath(20);

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={`absolute inset-0 w-[200%] h-full text-white ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[80px] sm:h-[120px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
      <div className="block md:hidden w-full h-full absolute inset-0">
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={15} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={15} />
      </div>
    </div>
  );
};


// --- MAIN COMPONENT ---
const UniqueFeatures: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Adjusted card width for new styling: 320px card + 24px gap
      setWidth(344);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev >= methodologyData.length - 1) return 0;
        return prev + 1;
      });
    }, 4000); 

    return () => clearInterval(timer);
  }, []);

  return (
    // Updated background color to theme Teal
    <section className={`relative w-full bg-[#9BC6C0] py-32 md:py-40 overflow-hidden ${bodyFont.className}`}>
      
      {/* YOUR MOVING TOP WAVE */}
      <WaveSeparator position="top" />

      {/* --- NEW BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Doodles */}
         <svg className="absolute top-1/4 left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none" strokeDasharray="10,10"/>
         </svg>
         <svg className="absolute bottom-1/4 right-10 w-40 h-40 opacity-20" viewBox="0 0 100 100">
             <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="white" strokeWidth="4" />
         </svg>
         
         {/* Floating Icons */}
         <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[20%]"
         >
            <Cloud className="text-white/40 w-20 h-20" fill="currentColor" />
         </motion.div>
         <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-40 left-[10%]"
         >
            <Star className="text-[#F4D03F] w-12 h-12 drop-shadow-md" fill="currentColor" stroke="white" strokeWidth={2} />
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: Improved Static Content --- */}
          <motion.div 
            className="w-full lg:w-1/3 text-center lg:text-left text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <span className={`inline-block px-4 py-1 mb-6 text-xl text-[#3E3431] bg-[#F4D03F] rounded-full shadow-lg rotate-[-2deg] ${handwritingFont.className} font-bold border-2 border-white`}>
                Why Parents Love Us
            </span>
            
            <h2 className={`${titleFont.className} text-5xl md:text-6xl leading-tight mb-6 drop-shadow-sm`}>
              Our <br/>
              <span className="text-[#D33060] inline-block relative">
                 Unique
                 {/* Doodle underline */}
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-white opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                 </svg>
              </span>
              <br/> Features
            </h2>

            <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed mb-8">
               We don't just teach; we nurture. Discover the magic that makes Little Dreamers the perfect second home for your child.
            </p>

            <button className="bg-white text-[#D33060] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#FFF5F7] hover:scale-105 transition-all duration-300">
               Learn More
            </button>
          </motion.div>

          {/* --- RIGHT SIDE: Improved Carousel UI --- */}
          <div className="w-full lg:w-2/3 relative">
             {/* Gradient fade overlay for carousel edges */}
             <div className="absolute left-0 top-0 bottom-0 w-12   hidden md:block"></div>
             <div className="absolute right-0 top-0 bottom-0 w-12  z-10 hidden md:block"></div>

             <div className="overflow-hidden p-4 -m-4" ref={carouselRef}>
                <motion.div 
                  className="flex gap-6"
                  // Logic kept the same, just adjusted width calculation in useEffect
                  animate={{ x: width ? -index * width : 0 }}
                  transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                   {/* Render items with NEW UI */}
                   {methodologyData.map((item) => {
                      const IconComponent = getIcon(item.id);
                      return (
                        <motion.div 
                           key={item.id}
                           // New "Flashcard" styling
                           className={`
                             shrink-0 w-[300px] md:w-[320px] 
                             h-[380px] bg-white rounded-[40px] 
                             p-8 flex flex-col items-center text-center justify-center
                             shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                             border-4 ${item.style.split(' ').find(c => c.startsWith('border')) || 'border-transparent'}
                             relative group overflow-hidden
                           `}
                           whileHover={{ y: -10, rotate: 1 }}
                        >
                           {/* Card Background Pattern */}
                           <div className={`absolute top-0 left-0 w-full h-24 opacity-10 ${item.style.split(' ')[0]}`}></div>
                           
                           {/* Icon Bubble */}
                           <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md mb-6 relative z-10 ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent size={32} />
                           </div>

                           <h3 className={`${titleFont.className} text-2xl text-[#3E3431] mb-3`}>
                              {item.title}
                           </h3>
                           
                           {/* Divider */}
                           <div className="w-12 h-1.5 bg-gray-100 rounded-full mb-4"></div>

                           <p className="text-gray-600 font-medium leading-relaxed">
                              {item.desc}
                           </p>

                           {/* Bottom decoration */}
                           <div className={`absolute bottom-0 left-0 w-full h-2 ${item.iconBg}`}></div>
                        </motion.div>
                      )
                   })}
                </motion.div>
             </div>
             
             {/* New Pagination Dots UI */}
             <div className="flex justify-center gap-2 mt-8">
                {methodologyData.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-white w-8" : "bg-white/40"}`}
                  />
                ))}
             </div>
          </div>

        </div>
      </div>

      {/* YOUR MOVING BOTTOM WAVE */}
      <WaveSeparator position="bottom" />
    </section>
  );
};

export default UniqueFeatures;
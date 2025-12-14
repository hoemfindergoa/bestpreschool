"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home, ChevronRight, ShieldCheck, Apple, Sun, Compass, GraduationCap, Sparkles, Star, Heart } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

// Placeholder images - Replace with your actual paths
import GirlHead from "../../public/girlfaceonly.png"; 
import Boywithbrush from "../../public/boywithbrush.png"; 
import girlonswing from "../../public/girlonwing.png"; 
import boyonbucket from "../../public/boywithcup.png"; 
import Whyheader from "@/components/WhyusHeader";
import boywithelephant from "../../public/boywithelephent.png";

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

// --- REUSABLE WAVE COMPONENT ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color: string; 
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color }) => {
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
      className={`absolute inset-0 w-[200%] h-full ${color} ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
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


// --- HEADER COMPONENT ---
// const WhyChooseUsHeader = () => {
//   return (
//     <header className="relative w-full h-[50vh] min-h-[400px] bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center overflow-hidden">
      
//       {/* Background Doodles */}
//       <Whyheader />
//       {/* <div className="absolute inset-0 pointer-events-none opacity-20">
//          <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-10">
//             <Star className="w-20 h-20 text-white" />
//          </motion.div>
//          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10">
//             <Heart className="w-16 h-16 text-teal-100" />
//          </motion.div>
//       </div>

//       <div className="relative z-10 text-center px-4 mt-8">
//         <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
//             <Home className="w-4 h-4" />
//             <span>Home</span>
//             <ChevronRight className="w-4 h-4 opacity-75" />
//             <span>Why Us</span>
//         </div>

//         <h1 className={`text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4 ${titleFont.className}`}>
//           Why Parents
//           <span className="block text-teal-100 mt-2">Choose Us</span>
//         </h1>
        
//         <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
//           A safe, happy, and inspiring place for your little one to grow.
//         </p>
//       </div> */}

//       {/* WAVE: Connects to Section 1 (Cyan) */}
//       {/* <WaveSeparator position="bottom" color="text-cyan-100" /> */}
//     </header>
//   );
// };


// --- MAIN PAGE COMPONENT ---
const WhyChooseUsPage: React.FC = () => {
  return (
   <div>
        <Whyheader />
     <div className={`w-full flex flex-col ${bodyFont.className}`}>

      {/* =========================================
          SECTION 1: SAFETY & SECURITY (Cyan Theme)
      ========================================= */}
      <section className="relative w-full bg-rose-500 pt-20 pb-32 overflow-hidden">
        {/* Top Wave: Not needed (Header handles it) */}
        
                <WaveSeparator position="top" color="text-white" />

        <div className="absolute inset-0 pointer-events-none opacity-20 top-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q50,0 100,50" fill="none" stroke="#0891b2" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-200 rounded-full flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-7 h-7 text-cyan-700" />
                </div>
                <h2 className={`text-4xl md:text-5xl font-black text-cyan-900 uppercase tracking-tight ${titleFont.className}`}>
                  Safety & Security
                </h2>
              </div>
              <p className="text-lg md:text-xl text-cyan-900/80 font-bold leading-relaxed mb-4">
                Your child’s safety is our utmost priority.
              </p>
              <p className="text-lg text-cyan-800 font-medium leading-relaxed">
                Our campus is equipped with secure entry systems, CCTV surveillance, and trained staff to ensure constant supervision at all times.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[400px]">
                 <Image 
                   src={GirlHead} 
                   alt="Safety and Security" 
                   width={500}
                   height={500}
                   className="object-contain drop-shadow-xl"
                 />
                 <div className="absolute top-10 right-10 animate-pulse">
                    <ShieldCheck className="w-12 h-12 text-cyan-400 opacity-50" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: HEALTH & HYGIENE (White Theme)
      ========================================= */}
      <section className="w-full bg-white py-2 lg:py-2 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 text-left lg:text-right"
            >
              <div className="flex items-center gap-4 mb-6 justify-start lg:justify-end">
                 <h2 className={`text-4xl md:text-5xl font-black text-emerald-900 uppercase tracking-tight order-2 lg:order-1 ${titleFont.className}`}>
                  Health & Hygiene
                </h2>
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center order-1 lg:order-2 shadow-sm">
                    <Apple className="w-7 h-7 text-emerald-600" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-emerald-800/80 font-bold leading-relaxed mb-4">
                We believe a healthy child is a happy learner.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We maintain the highest standards of cleanliness. Classrooms and play areas are regularly sanitized, and children are served fresh, nutritious meals prepared under strict hygiene protocols.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
               <div className="relative">
                 <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10 transform scale-110"></div>
                 <Image 
                   src={boyonbucket} 
                   alt="Health and Hygiene" 
                   width={400}
                   height={400}
                   className="object-contain"
                 />
               </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: ENVIRONMENT (Lime Theme)
      ========================================= */}
      <section className="relative w-full bg-lime-300  py-10 md:py-16 overflow-hidden">
        
        {/* FIX: Top Wave color set to WHITE to mask the top of the lime box against the previous white section */}
        <WaveSeparator position="top" color="text-white" />
        
        <div className="absolute inset-0 pointer-events-none opacity-20 top-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M100,100 Q50,50 0,100" fill="none" stroke="#65a30d" strokeWidth="0.5" strokeDasharray="2,2"/>
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-lime-200 rounded-full flex items-center justify-center shadow-sm">
                    <Sun className="w-7 h-7 text-lime-700" />
                </div>
                <h2 className={`text-4xl md:text-5xl font-black text-lime-900 uppercase tracking-tight ${titleFont.className}`}>
                  Vibrant Environment
                </h2>
              </div>
              <p className="text-lg text-lime-800 font-medium leading-relaxed">
                Learning comes alive in a vibrant, child-friendly environment designed to spark curiosity. Each classroom is thoughtfully crafted with bright, engaging spaces and safe play zones.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[400px]">
                 <Image 
                   src={girlonswing} 
                   alt="Environment" 
                   width={400}
                   height={400}
                   className="object-contain drop-shadow-xl"
                 />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 4: OUR APPROACH (White Theme)
      ========================================= */}
      <section className="w-full bg-white py-2 lg:py-2 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 text-left lg:text-right"
            >
              <div className="flex items-center gap-4 mb-6 justify-start lg:justify-end">
                 <h2 className={`text-4xl md:text-5xl font-black text-indigo-900 uppercase tracking-tight order-2 lg:order-1 ${titleFont.className}`}>
                  Our Approach
                </h2>
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center order-1 lg:order-2 shadow-sm">
                    <Compass className="w-7 h-7 text-indigo-600" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-indigo-800/80 font-bold leading-relaxed mb-4">
                Nurturing both the mind and heart.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We combine play-based exploration with structured learning experiences to develop creativity, critical thinking, and social–emotional growth.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
               <div className="relative">
                 <div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10 transform scale-90"></div>
                 <Image 
                   src={boywithelephant} 
                   alt="Our Approach" 
                   width={300}
                   height={300}
                   className="object-contain"
                 />
               </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 5: QUALIFIED TEACHERS (Orange Theme)
      ========================================= */}
      <section className="relative w-full bg-orange-300 md:py-8 py-12 overflow-hidden">
        
        {/* FIX: Top Wave color set to WHITE to mask the top of the orange box against the previous white section */}
        <WaveSeparator position="top" color="text-white" />
        
         <div className="absolute inset-0 pointer-events-none opacity-20 top-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q25,25 50,0 T100,0" fill="none" stroke="#ea580c" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-200 rounded-full flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-7 h-7 text-orange-600" />
                </div>
                <h2 className={`text-4xl md:text-5xl font-black text-orange-900 uppercase tracking-tight ${titleFont.className}`}>
                  Qualified Teachers
                </h2>
              </div>
              <p className="text-lg md:text-xl text-orange-800 font-bold leading-relaxed mb-4">
                 Our greatest strength lies in our teachers.
              </p>
              <p className="text-lg text-orange-900/80 font-medium leading-relaxed">
                Our educators are qualified, compassionate, and expertly trained in early childhood education. They use innovative, age-appropriate teaching methods to make every lesson engaging.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
               <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                 <Image 
                   src={GirlHead} 
                   alt="Qualified Teachers" 
                   width={400}
                   height={400}
                   className="object-contain drop-shadow-2xl"
                 />
                 <div className="absolute top-0 right-10 animate-bounce">
                    <Sparkles className="w-10 h-10 text-orange-400" />
                 </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>

    </div>
   </div>
  );
};

export default WhyChooseUsPage;
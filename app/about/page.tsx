'use client';

import React, { useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from 'next/image';
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import { Rocket, Shield, Heart, Star, Flame, Sparkles, BookOpen } from 'lucide-react';

// --- PLACEHOLDER IMAGES ---
import boyWithCup from "../../public/boywithcup.png"; 
import girlWithBook from "../../public/girlwithbook.png";
import boyWithElephant from "../../public/boywithelephent.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

const AboutGalactic: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- STRONG PARALLAX VALUES ---
  // Elements move at significantly different speeds to create depth
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]); // Moves down slowly
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -250]); // Moves up fast
  const yImage2 = useTransform(scrollYProgress, [0, 1], [50, -150]); 
  const yCards = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  // --- PARTICLES INIT ---
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden bg-[#050505] ${bodyFont.className} text-white selection:bg-orange-500 selection:text-white`}>
      
      {/* =========================================
          LAYER 0: TSPARTICLES BACKGROUND
      ========================================= */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 h-full"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" }, // Stars get bigger on hover
            },
            modes: {
              bubble: { distance: 200, duration: 2, size: 6, opacity: 1 }
            },
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.3, // Slow space drift
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
      
      {/* BACKGROUND GRADIENTS (Nebulas) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />


      {/* =========================================
          SECTION 1: AIM (The Launchpad)
      ========================================= */}
      <section className="relative py-24 lg:py-40 z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-20">
            
            {/* TEXT (Moves down slightly on scroll) */}
            <motion.div 
              style={{ y: yText }} 
              className="w-full md:w-1/2 relative z-10"
            >
              <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                   <span className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg shadow-orange-500/20">
                      <Rocket className="text-white w-6 h-6" />
                   </span>
                   <span className={`text-2xl text-orange-300 ${handwritingFont.className} tracking-widest`}>
                     Mission Control
                   </span>
                </div>

                <h1 className={`text-5xl md:text-7xl mb-8 leading-tight ${titleFont.className}`}>
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-white">Aim</span>
                </h1>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed relative z-10">
                    Our aim is to establish a <span className="text-orange-300 font-bold">nurturing preschool environment</span> where children receive high-quality early education that builds confidence, curiosity, and foundational skills. We strive to expand our centers across regions, ensuring every child has access to safe, stimulating, and developmentally appropriate learning experiences.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE (Moves UP fast on scroll for Parallax) */}
            <motion.div 
               style={{ y: yImage1 }}
               className="w-full md:w-1/2 flex justify-center relative perspective-1000"
            >
               <TiltCard className="w-full max-w-md">
                 <div className="relative rounded-[3rem] overflow-hidden border-[6px] border-white/5 shadow-[0_0_50px_rgba(234,88,12,0.2)] bg-[#1a1a2e]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    
                    {/* Placeholder for Astronaut Kid */}
                    <Image 
                      src={boyWithCup} 
                      alt="Astronaut Kid" 
                      width={600} 
                      height={600}
                      className="object-cover w-full h-full scale-110 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Info Element */}
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                         <div className="bg-orange-500 rounded-full p-2 animate-pulse">
                            <Flame size={20} fill="white" className="text-white"/>
                         </div>
                         <div>
                            <p className="text-xs text-orange-200 uppercase tracking-wider font-bold">Status</p>
                            <p className="font-bold">Ready for Blastoff</p>
                         </div>
                      </div>
                    </div>
                 </div>
               </TiltCard>
               
               {/* Decorative Planet behind */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-20 -right-20 w-64 h-64 border border-dashed border-white/10 rounded-full -z-10"
               />
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 2: MISSION (The Flight Plan)
      ========================================= */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
             <motion.div 
               initial={{ scale: 0 }} whileInView={{ scale: 1 }}
               className="inline-block mb-4 p-2 rounded-full border border-purple-500/50 bg-purple-500/10"
             >
                <Star className="w-8 h-8 text-purple-400 fill-purple-400 animate-spin-slow" />
             </motion.div>
             <h2 className={`text-4xl md:text-6xl text-white mb-6 ${titleFont.className}`}>
               Our <span className="text-purple-400 text-shadow-glow">Mission</span>
             </h2>
             <p className="text-purple-200 max-w-2xl mx-auto">
               Delivering excellence in early childhood education through a structured curriculum and trained dragon riders.
             </p>
          </div>

          <motion.div 
            style={{ y: yCards }}
            className="grid md:grid-cols-3 gap-8"
          >
             {[
               { 
                 title: "Excellence", 
                 text: "Delivering structured curriculum and a supportive atmosphere for lifelong success.",
                 icon: <BookOpen className="w-8 h-8 text-white"/>,
                 grad: "from-blue-500 to-cyan-400"
               },
               { 
                 title: "Safety First", 
                 text: "Maintaining highest standards of safety, hygiene, and child well-being.",
                 icon: <Shield className="w-8 h-8 text-white"/>,
                 grad: "from-purple-500 to-fuchsia-400"
               },
               { 
                 title: "Compassion", 
                 text: "Integrating modern teaching with compassionate care to develop independent learners.",
                 icon: <Heart className="w-8 h-8 text-white"/>,
                 grad: "from-pink-500 to-rose-400"
               }
             ].map((item, idx) => (
               <TiltCard key={idx} className="h-full">
                 <div className="h-full bg-[#0f111a] border border-white/5 p-8 rounded-[2.5rem] relative group hover:border-white/20 transition-colors">
                    {/* Glowing background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2.5rem]`} />
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.grad} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                       {item.icon}
                    </div>
                    
                    <h3 className={`text-2xl mb-4 text-white ${titleFont.className}`}>{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                      {item.text}
                    </p>
                 </div>
               </TiltCard>
             ))}
          </motion.div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: VISION (Deep Space Vision)
      ========================================= */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            style={{ y: yImage2 }} // Parallax movement
            className="relative bg-gradient-to-br from-[#131526] to-[#0A0C14] border border-white/10 rounded-[4rem] p-8 md:p-16 overflow-hidden"
          >
            {/* Animated Gradient Border effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

            <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative z-20">
               
               {/* IMAGE: Vision */}
               <div className="w-full md:w-5/12">
                  <TiltCard>
                    <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden border-2 border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                       <Image 
                         src={boyWithElephant} 
                         alt="Vision" 
                         width={500} 
                         height={500}
                         className="object-cover w-full h-full"
                       />
                       {/* Overlay Text */}
                       <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                          <p className="text-cyan-300 font-bold flex items-center gap-2">
                            <Sparkles size={16} /> Future Leaders
                          </p>
                       </div>
                    </div>
                  </TiltCard>
               </div>

               {/* TEXT */}
               <div className="w-full md:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                     <Heart className="w-8 h-8 text-cyan-400" />
                     <span className={`text-2xl text-cyan-300 ${handwritingFont.className}`}>Looking to the Stars</span>
                  </div>
                  
                  <h2 className={`text-4xl md:text-6xl text-white mb-8 leading-none ${titleFont.className}`}>
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Vision</span>
                  </h2>

                  <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                    <p>
                      Our vision is to become a leading early learning institution recognized for providing accessible, innovative, and impactful preschool education. We aspire to create a network of centers that uphold consistent quality and empower children from diverse communities.
                    </p>
                    <div className="pl-6 border-l-4 border-cyan-500/50 italic text-white">
                      "We envision shaping a generation of confident thinkers and responsible global citizens."
                    </div>
                  </div>
               </div>

            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

    </div>
  );
};

export default AboutGalactic;
'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate 
} from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from 'next/image';
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import { Rocket, Shield, Heart, Star, Flame, Sparkles, BookOpen, Atom } from 'lucide-react';

// --- PLACEHOLDER IMAGES ---
import boyWithCup from "../../public/dragonplayingfootball.png"; 
import girlWithBook from "../../public/dragonwithearth.png";
import boyWithElephant from "../../public/dragonwithearth.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

// --- MOUSE PARALLAX HOOK ---
// Calculates mouse position relative to window center (-1 to 1)
function useMouseParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set((e.clientX / innerWidth) - 0.5);
      y.set((e.clientY / innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return { x, y };
}

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
      className={`relative transition-all duration-200 ease-out perspective-1000 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};

const AboutGalactic: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. SCROLL PARALLAX (Y-Axis)
  const yStars = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]); 
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -150]); 

  // 2. MOUSE PARALLAX (X/Y-Axis)
  const { x: mouseX, y: mouseY } = useMouseParallax();
  
  // Smooth out the mouse movement using springs
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map mouse to movement values (Negative values move opposite to mouse = depth)
  const xBackground = useTransform(smoothMouseX, [-0.5, 0.5], [50, -50]);
  const yBackground = useTransform(smoothMouseY, [-0.5, 0.5], [50, -50]);
  
  const xForeground = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const yForeground = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);

  // --- PARTICLES CONFIG ---
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden bg-[#02040a] ${bodyFont.className} text-white`}>
      
      {/* =========================================
          LAYER 0: INTERACTIVE PARTICLES
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
              onHover: { 
                enable: true, 
                mode: "parallax" // <--- KEY: This enables star movement on mouse hover
              }, 
            },
            modes: {
              parallax: { force: 60, smooth: 10 }
            },
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              enable: true,
              speed: 0.2, 
              direction: "none",
              random: true,
              outModes: { default: "out" },
            },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 0.5, animation: { enable: true, speed: 0.5, minimumValue: 0.1 } },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />
      
      {/* =========================================
          LAYER 1: MOUSE PARALLAX NEBULAS
          These move opposite to your mouse
      ========================================= */}
      <motion.div 
        style={{ x: xBackground, y: yBackground }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-orange-900/20 blur-[120px] rounded-full mix-blend-screen" />
        
        {/* Floating Debris (Planets/Stars) */}
        <div className="absolute top-[20%] right-[20%] w-4 h-4 bg-blue-400 rounded-full blur-[2px] opacity-60" />
        <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-yellow-400 rounded-full blur-[1px] opacity-80" />
      </motion.div>


      {/* =========================================
          SECTION 1: AIM (The Launchpad)
      ========================================= */}
      <section className="relative py-24 lg:py-40 z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-20">
            
            {/* TEXT SIDE */}
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
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                   >
                      <Rocket className="text-white w-6 h-6" />
                   </motion.div>
                   <span className={`text-2xl text-orange-300 ${handwritingFont.className} tracking-widest`}>
                     Mission Control
                   </span>
                </div>

                <h1 className={`text-5xl md:text-7xl mb-8 leading-tight ${titleFont.className}`}>
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-white">Aim</span>
                </h1>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed relative z-10">
                    Our aim is to establish a <span className="text-orange-300 font-bold">nurturing preschool environment</span> where children receive high-quality early education that builds confidence, curiosity, and foundational skills. We strive to expand our centers across regions, ensuring every child has access to safe, stimulating, and developmentally appropriate learning experiences.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* VISUAL SIDE (Interactive 3D Card) */}
            <motion.div 
               style={{ y: yImage1, x: xForeground }}
               className="w-full md:w-1/2 flex justify-center relative perspective-1000"
            >
               <TiltCard className="w-full max-w-md">
                 <div className="relative rounded-[3rem] overflow-hidden border-[6px] border-white/5 shadow-[0_0_60px_rgba(234,88,12,0.25)] bg-[#1a1a2e] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    
                    {/* Placeholder Image */}
                    <Image 
                      src={boyWithCup} 
                      alt="Astronaut Kid" 
                      width={600} 
                      height={600}
                      className="object-cover w-full h-full scale-110 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Animated Badge */}
                    <motion.div 
                      className="absolute bottom-8 right-8 z-20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white/20 animate-pulse">
                         <Flame size={32} fill="white" className="text-white"/>
                      </div>
                    </motion.div>
                 </div>
               </TiltCard>
               
               {/* Background Orbit Element (Spinning) */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed border-white/10 rounded-full -z-10"
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
          
          <div className="text-center mb-20 relative">
             {/* Glowing Center Star */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 blur-[80px] rounded-full -z-10" />
             
             <motion.div 
               initial={{ scale: 0 }} whileInView={{ scale: 1 }}
               viewport={{ margin: "-100px" }}
               className="inline-flex items-center justify-center mb-4 p-4 rounded-full border border-purple-500/50 bg-[#1e1b4b]"
             >
                <Atom className="w-10 h-10 text-purple-400 animate-spin-slow" style={{ animationDuration: '10s' }} />
             </motion.div>
             <h2 className={`text-4xl md:text-6xl text-white mb-6 ${titleFont.className}`}>
               The <span className="text-purple-400 text-shadow-glow">Mission</span>
             </h2>
             <p className="text-purple-200 max-w-2xl mx-auto text-lg">
               Delivering excellence through a structured curriculum and trained dragon riders.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { 
                 title: "Excellence", 
                 text: "Delivering structured curriculum and a supportive atmosphere for lifelong success.",
                 icon: <BookOpen className="w-8 h-8 text-white"/>,
                 grad: "from-blue-600 to-cyan-400",
                 delay: 0
               },
               { 
                 title: "Safety First", 
                 text: "Maintaining highest standards of safety, hygiene, and child well-being.",
                 icon: <Shield className="w-8 h-8 text-white"/>,
                 grad: "from-purple-600 to-fuchsia-400",
                 delay: 0.2
               },
               { 
                 title: "Compassion", 
                 text: "Integrating modern teaching with compassionate care to develop independent learners.",
                 icon: <Heart className="w-8 h-8 text-white"/>,
                 grad: "from-pink-600 to-rose-400",
                 delay: 0.4
               }
             ].map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: item.delay, duration: 0.5 }}
               >
                 <TiltCard className="h-full">
                   <div className="h-full bg-[#0f111a] border border-white/5 p-8 rounded-[2.5rem] relative group overflow-hidden">
                      {/* Interactive Hover Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Moving Border Gradient */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:animate-shimmer" />
                      
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.grad} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/5`}>
                         {item.icon}
                      </div>
                      
                      <h3 className={`text-2xl mb-4 text-white ${titleFont.className}`}>{item.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                        {item.text}
                      </p>
                   </div>
                 </TiltCard>
               </motion.div>
             ))}
          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: VISION (Deep Space Vision)
      ========================================= */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0c0e18] to-[#05060a] border border-cyan-500/20 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl"
          >
            {/* Background Texture - Grid */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                    backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                 }}>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-12 relative z-20">
               
               {/* IMAGE: Vision */}
               <motion.div 
                 style={{ x: xForeground, y: yForeground }}
                 className="w-full md:w-5/12"
               >
                  <TiltCard>
                    <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                       <Image 
                         src={boyWithElephant} 
                         alt="Vision" 
                         width={500} 
                         height={500}
                         className="object-cover w-full h-full"
                       />
                       {/* Overlay Text */}
                       <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                          <p className="text-cyan-300 font-bold flex items-center gap-2">
                            <Sparkles size={16} className="animate-pulse" /> 
                            Future Captains
                          </p>
                       </div>
                    </div>
                  </TiltCard>
               </motion.div>

               {/* TEXT */}
               <div className="w-full md:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                     <Star className="w-8 h-8 text-cyan-400" />
                     <span className={`text-2xl text-cyan-300 ${handwritingFont.className}`}>Looking to the Stars</span>
                  </div>
                  
                  <h2 className={`text-4xl md:text-6xl text-white mb-8 leading-none ${titleFont.className}`}>
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Vision</span>
                  </h2>

                  <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                    <p>
                      Our vision is to become a leading early learning institution recognized for providing accessible, innovative, and impactful preschool education. We aspire to create a network of centers that uphold consistent quality and empower children from diverse communities.
                    </p>
                    <div className="p-6 bg-cyan-900/20 border-l-4 border-cyan-400 rounded-r-xl">
                      <p className="italic text-cyan-100">
                        "We envision shaping a generation of confident thinkers and responsible global citizens."
                      </p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Fade Out */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#02040a] to-transparent z-20 pointer-events-none" />

    </div>
  );
};

export default AboutGalactic;
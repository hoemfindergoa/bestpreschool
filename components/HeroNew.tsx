'use client';

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from 'next/image';
import { Titan_One, Nunito } from 'next/font/google';
import { Rocket, Sparkles, ChevronDown, ArrowRight, Sun, Cloud } from 'lucide-react';

// --- PLACEHOLDER IMAGES ---
import heroImage from "../public/dragonwithastronoutstudy.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });

// --- HOOK FOR MOUSE TILT ---
function useMouseTilt(ref: React.RefObject<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { x, y, handleMouseMove, handleMouseLeave };
}

const InteractiveHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y, handleMouseMove, handleMouseLeave } = useMouseTilt(containerRef);

  const springConfig = { damping: 30, stiffness: 100 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); // Reduced tilt for cleaner light look
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  
  const moveX = useTransform(mouseX, [-0.5, 0.5], [30, -30]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], [30, -30]);

  // --- PARTICLES INIT ---
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // --- TYPEWRITER EFFECT ---
  const [displayText, setDisplayText] = useState('');
  const fullText = "Where Curiosity Takes Flight.";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-screen pt-24 flex items-center justify-center overflow-hidden ${bodyFont.className} perspective-2000 bg-[#f8fafc]`}
    >
      
      {/* =========================================
          LAYER 0: ANIMATED BACKGROUND BLOBS
          (Adds depth to the light theme)
      ========================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Right Orange Sun Glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-orange-200/40 rounded-full blur-[100px] animate-pulse" />
        {/* Bottom Left Blue Sky Glow */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[80px]" />
      </div>

      {/* =========================================
          LAYER 1: PARTICLES (Colorful Dust)
      ========================================= */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: "bubble" }, resize: true },
            modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 } },
          },
          particles: {
            // Updated to Blue, Orange, Pink for light mode
            color: { value: ["#3b82f6", "#f97316", "#ec4899"] },
            links: { color: "#cbd5e1", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, outModes: "out" },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: { min: 0.3, max: 0.7 } },
            shape: { type: ["circle"] },
            size: { value: { min: 2, max: 4 } },
          },
        }}
      />

      {/* =========================================
          LAYER 2: MAIN CONTENT
      ========================================= */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* --- LEFT COLUMN: TEXT & CTAs --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glassmorphism Card Background for Text */}
          <div className="absolute -inset-6 backdrop-blur-xl rounded-[3rem]  -z-10" />

          {/* Badge */}
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 mb-6 shadow-sm"
          >
            <Rocket className="w-4 h-4 fill-blue-600" />
            <span className="text-sm font-extrabold tracking-wider uppercase">Admissions Open 2025</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className={`text-5xl lg:text-7xl text-slate-900 leading-[1.1] mb-6 ${titleFont.className}`}>
            Launch Your <br />
            <span className="relative">
               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                Next Adventure
               </span>
               {/* Underline decoration */}
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-400 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
               </svg>
            </span>
          </h1>

          {/* Typewriter Subheadline */}
          <h2 className={`text-xl md:text-2xl text-slate-500 font-bold mb-8 h-[32px] flex items-center gap-1`}>
            {displayText}
            <span className="w-[3px] h-6 bg-orange-500 animate-blink block"></span>
          </h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
            Welcome to the Galactic Dragon Riders academy. A universe where education meets imagination, preparing little explorers for their biggest journey yet.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold flex items-center gap-2 shadow-xl shadow-orange-500/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start The Adventure <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full group-hover:animate-shimmer" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/60 text-slate-700 font-bold border border-white shadow-lg backdrop-blur-sm flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              Watch Video
            </motion.button>
          </div>
        </motion.div>


        {/* --- RIGHT COLUMN: 3D INTERACTIVE VISUAL --- */}
        <div className="relative perspective-1000 mt-12 lg:mt-0 flex justify-center">
          <motion.div
            style={{ 
              rotateX: rotateX, 
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative z-20 w-full max-w-[600px] aspect-square"
          >
            {/* The Main Hero Image */}
            <motion.div 
              style={{ x: moveX, y: moveY, transform: "translateZ(50px)" }}
              className="relative z-30 drop-shadow-2xl"
            >
              <Image 
                src={heroImage} 
                alt="Cosmic Explorer"
                width={700}
                height={700}
                priority
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Decorative Floating Elements (Light Theme) */}

            {/* 1. The Sun */}
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               style={{ transform: "translateZ(-20px)" }}
               className="absolute -top-10 -right-10 z-10"
            >
                <div className="relative flex items-center justify-center">
                    <Sun className="w-24 h-24 text-orange-400 fill-orange-100" />
                    <div className="absolute inset-0 bg-orange-400 blur-2xl opacity-40"></div>
                </div>
            </motion.div>

            {/* 2. Clouds */}
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(30px)" }}
              className="absolute bottom-10 -left-5 z-40"
            >
                 <Cloud className="w-20 h-20 text-white fill-white drop-shadow-lg opacity-90" />
            </motion.div>

            {/* 3. Background Card Glow */}
            <div style={{ transform: "translateZ(-50px)" }} className="absolute inset-10 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-[60px] opacity-70 -z-10" />

          </motion.div>
        </div>

      </div>

      {/* =========================================
          LAYER 3: SCROLL INDICATOR
      ========================================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 bg-white rounded-full shadow-md border border-slate-100 text-blue-500"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default InteractiveHero;
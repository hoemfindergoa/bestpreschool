'use client';

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from 'next/image';
import { Titan_One, Nunito } from 'next/font/google';
import { Rocket, Play, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';

// --- PLACEHOLDER IMAGES ---
// Replace with your best, highest quality "Hero" image.
// A transparent PNG of a kid astronaut + dragon works best here.
import heroImage from "../public/dragonwithastronoutstudy.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'], display: 'swap' });

// --- HOOK FOR MOUSE POSITION ---
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

  // Smooth out the mouse movements
  const springConfig = { damping: 30, stiffness: 100 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // 3D Tilt Transforms
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  
  // Parallax Movement Transforms
  const moveX = useTransform(mouseX, [-0.5, 0.5], [40, -40]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], [40, -40]);
  const moveXReverse = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
  const moveYReverse = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);

  // --- PARTICLES INIT ---
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // --- TYPEWRITER EFFECT STATE ---
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
    }, 50); // Speed of typing
    return () => clearInterval(timer);
  }, []);


  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-[95vh] flex items-center justify-center overflow-hidden ${bodyFont.className} perspective-2000`}
    >
      
      {/* =========================================
          LAYER 1: INTERACTIVE PARTICLE FIELD
      ========================================= */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" }, // Stars flee the mouse
              resize: true,
            },
            modes: {
              repulse: { distance: 150, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: true, outModes: "out" },
            number: { value: 120, density: { enable: true, area: 800 } },
            opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Deep Space Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02040a]/80 to-[#02040a] z-0 pointer-events-none" />


      {/* =========================================
          LAYER 2: MAIN CONTENT
      ========================================= */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT COLUMN: TEXT & CTAs --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl"
        >
          {/* Animated Badge */}
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-bold tracking-wider uppercase">Admissions Open 2025</span>
          </motion.div>

          {/* Main Headline with Gradient */}
          <h1 className={`text-5xl lg:text-7xl text-white leading-[1.1] mb-6 ${titleFont.className}`}>
            Launch Your Child’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-x">
              Future Today
            </span>
          </h1>

          {/* Typewriter Subheadline */}
          <h2 className={`text-2xl md:text-3xl text-cyan-300 mb-8 h-[40px] `}>
            {displayText}
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
            Welcome to the Galactic Dragon Riders academy. A universe where education meets imagination, preparing little explorers for big adventures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold flex items-center gap-2 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start The Adventure <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </span>
              {/* Hover shine effect */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </motion.button>
            
   
          </div>
        </motion.div>


        {/* --- RIGHT COLUMN: 3D INTERACTIVE VISUAL --- */}
        <div className="relative perspective-1000">
          {/* The 3D Tilting Container */}
          <motion.div
            style={{ 
              rotateX: rotateX, 
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative z-20"
          >
            {/* The Main Hero Image */}
            <motion.div 
              style={{ x: moveX, y: moveY, transform: "translateZ(50px)" }}
              className="relative z-30  pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <Image 
                src={heroImage} 
                alt="Cosmic Explorer"
                width={700}
                height={700}
                priority
                className="w-full  h-auto"
              />
            </motion.div>

            {/* Floating Orbiting Elements (Decorative) */}
          

            {/* 2. Planet/Orb */}
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               style={{ x: moveX, y: moveY, transform: "translateZ(20px)" }}
               className="absolute bottom-10 -left-10 z-10"
            >
               <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 blur-sm opacity-80 shadow-[0_0_40px_rgba(192,38,211,0.6)]"></div>
            </motion.div>

            {/* 3. Background Glow behind image */}
            <div style={{ transform: "translateZ(-50px)" }} className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-purple-500/30 blur-[100px] rounded-full -z-10 scale-150" />

          </motion.div>
        </div>

      </div>


      {/* =========================================
          LAYER 3: SCROLL INDICATOR
      ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-sm font-semibold tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default InteractiveHero;
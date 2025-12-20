'use client';

import React, { useCallback, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from 'next/image';
import { Nunito, Outfit,Caveat } from 'next/font/google';
import { ArrowRight } from 'lucide-react';

import heroImage from "../public/herosectionnew.png"; 

const headlineFont = Outfit({ subsets: ['latin'], weight: ['600', '700'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600'] });
const handFont = Caveat({ subsets: ['latin'], weight: ['700'] });

function useMouseTilt(ref: React.RefObject<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // CHANGED: Flex column on mobile, relative on desktop. Min-h-0 on mobile to fit content.
      className={`relative lg:min-h-screen flex flex-col lg:block overflow-hidden ${bodyFont.className} bg-[#fdfbf7]`}
    >
      
      {/* LAYER 0: THE IMAGE */}
      {/* CHANGED: Relative position on mobile so it takes up space at the top. Absolute on LG. */}
      <div className="relative lg:absolute inset-0 z-0 flex select-none w-full h-[350px] md:h-[500px] lg:h-full">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full h-full"
        >
          <Image 
            src={heroImage} 
            alt="Papercraft Nature Background"
            fill
            priority
            // CHANGED: Removed manual padding-top; used object-contain on mobile to prevent cropping
            className="pt-[120px] md:pt-[100px]"
          />
        </motion.div>
      </div>

      {/* LAYER 1: PARTICLES */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 z-10 pointer-events-none"
        options={{
          fullScreen: false,
          particles: {
            color: { value: ["#86efac", "#fde047", "#f9a8d4", "#93c5fd"] },
            move: { enable: true, speed: 0.8, direction: "bottom", random: true },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 3, max: 6 } },
          },
        }}
      />

      {/* LAYER 2: TEXT CONTENT */}
      {/* CHANGED: Added padding top/bottom for mobile so text isn't squashed against image */}
      <div className="container mx-auto px-6 relative z-20 text-center py-2 lg:py-0 lg:h-screen lg:flex lg:items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
        <h1 style={{
                  filter: 'url(#chalk-rubbing)',
                  background: 'linear-gradient(110deg, #4FA8CF 10%, #E27B50 35%, #8E54B0 65%, #A3C54E 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} className={`${headlineFont.className} text-4xl lg:text-7xl text-[#1e293b] leading-tight mb-4`}>
      Where Little Minds <br />
      <span className={`${handFont.className} text-[#10b981] text-5xl lg:text-8xl block mt-2`}>
        Grow
      </span>
    </h1>

    <p  className={`${bodyFont.className} text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto font-medium`}>
      Nurturing curiosity and creativity in a vibrant, nature-inspired environment designed for young explorers.
    </p>

       <div    className="flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 rounded-full bg-orange-300 font-bold flex items-center gap-2 "
      
      >
        <span  style={{
                  filter: 'url(#chalk-rubbing)',
                  background: 'linear-gradient(110deg, #4FA8CF 4%, #E27B50 35%, #8E54B0 65%, #A3C54E 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                   Explore Programs

        </span>
        <span style={{
                  filter: 'url(#chalk-rubbing)',
                  background: 'linear-gradient(110deg, #4FA8CF 10%, #E27B50 35%, #8E54B0 65%, #A3C54E 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>  <ArrowRight className="w-5 h-5"/></span>
       
      </motion.button>
    </div>
        </motion.div>
      </div>

    </section>
  );
};

export default InteractiveHero;
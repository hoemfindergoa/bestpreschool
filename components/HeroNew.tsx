"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import maineimage from "../public/mainimage.png";
import Link from "next/link";

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

const Hero = () => {
  return (
    <section className="w-full md:h-[900px]  mt-[80px] flex flex-col md:relative md:block overflow-hidden bg-white">
      
      {/* --- HANGING HEART DECORATION (UPDATED) --- 
          Hidden on mobile, hangs from top on desktop.
          Replaced social icons with a bobbing heart.
      */}
      <div className="hidden xl:flex absolute left-12 top-0 bottom-0 flex-col items-center z-30">
        {/* The String/Rope - Grows down */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "240px" }} // A bit longer to give room for bobbing
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="w-[3px] bg-rose-300/70 rounded-b-full"
        ></motion.div>

        {/* The Bobbing Heart Container */}
        <motion.div
          // Initial State (before dropping in)
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          // Animation States
          animate={{ 
            opacity: 1, 
            scale: 1,
            // Keyframes for continuous up and down motion relative to resting point
            y: [0, 25, 0] 
          }}
          // Transition Configurations
          transition={{
            // Initial drop-in fade/scale transition
            opacity: { duration: 0.5, delay: 1.6 },
            scale: { duration: 0.5, delay: 1.6 },
            // Continuous bobbing transition
            y: {
              duration: 4, // Very slow cycle (4 seconds)
              repeat: Infinity, // Loop forever
              repeatType: "reverse", // Go back and forth smoothly
              ease: "easeInOut",
              delay: 1.6 // Wait for the string to finish growing before starting to bob
            }
          }}
          className="relative -mt-2 filter drop-shadow-[0_10px_15px_rgba(244,63,94,0.3)]"
        >
          {/* A little "knot" or bow at the top of the heart */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-rose-400 rounded-full z-10"></div>
          
          {/* The Heart Icon Itself */}
          <div className="bg-gradient-to-br from-white to-rose-50 p-5 rounded-full border-[3px] border-rose-200 relative z-0">
             <Heart className="w-12 h-12 text-rose-500 fill-rose-500/80" />
          </div>
        </motion.div>
      </div>


      {/* --- IMAGE SECTION --- */}
      <div className="relative w-full h-[250px]  md:h-[930px] md:absolute md:inset-0  z-0">
        <Image 
          src={maineimage}
          alt="Happy children at Little Dreamers" 
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 md:bg-gradient-to-r md:from-white/90 md:via-white/40 md:to-transparent"></div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10  mt-8  flex-1 md:h-full md:flex md:ml-[120px]  max-w-8xl mx-auto md:px-2 lg:px-8">
        
        {/* Content Card Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`
            w-full bg-white px-6 py-10 -mt-10 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]
            md:mt-0 md:bg-white/0     backdrop-blur-md  md:backdrop-blur-none  md:rounded-[50px] md:p-12 md:max-w-2xl  md:shadow-none md:border-none  border-2  border-white/50
          `}
        >
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex  items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 rounded-full shadow-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
            <span className={`text-xs font-bold text-white tracking-widest uppercase ${bodyFont.className}`}>Admissions Open 2025</span>
          </motion.div>

          {/* Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-4 ${titleFont.className}`}>
            <span className="text-gray-800">Welcome to</span>
            <br />
            <span className="text-rose-500 relative inline-block">
              Little Dreamers
              {/* Desktop Only Heart Decoration next to text */}
              <Heart className="hidden md:block  absolute -top-4 -right-10 w-8 h-8 text-pink-400 fill-pink-400 animate-bounce" />
            </span>
              <span className="text-rose-500 right text-lg inline-block ml-2 align-top">
             At cambridge
            </span>
          </h1>

          {/* Tagline */}
          <h2 className={`text-2xl sm:text-3xl  text-rose-500 mb-6 font-bold ${handwritingFont.className}`}>
            Where Little Dreams Begin to Shine!
          </h2>

          {/* Description */}
          <p className={`text-gray-600 text-base sm:text-lg leading-relaxed font-semibold mb-8 ${bodyFont.className}`}>
            We cherish the magical early years of childhood — a phase where curiosity sparks, imagination takes flight, and the foundation for lifelong learning is built with love, care, and laughter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/admission">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${bodyFont.className}`}
              >
              Enroll Your Child <ArrowRight className="w-5 h-5" />
            </motion.button>
              </Link>
          </div>

        </motion.div>
      </div>

      {/* Decorative Floating Blobs (Desktop Only) */}
      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="hidden md:block absolute bottom-20 right-40 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Cloud, Clock, Utensils, Heart, Sun } from "lucide-react";
import Image from "next/image";
// Using the boy image as it fits the Daycare theme well, replace if needed
import childImage from "../public/boywithbrush.png"; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';
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

const DayCareHero = () => {
  return (
    <section 
      // CHANGED: Background color back to Amber theme
      className={`relative w-full min-h-[700px] lg:h-[85vh] md:my-[4px] my-[10px] overflow-hidden bg-amber-50 flex items-center ${bodyFont.className}`}
    >
      
      {/* --- TOP CLOUD WAVE --- */}
      <div className="absolute top-0 left-0 w-full leading-none overflow-hidden z-30">
        <svg 
            className="relative block w-full h-[60px] md:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"
            ></path>
        </svg>
      </div>

      {/* --- BACKGROUND DECORATIONS (Updated Colors) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* 1. Large Amber Blob (Top Left) */}
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1 }}
           // CHANGED Color
           className="absolute -top-20 -left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"
        />
        
        {/* 2. Large Orange Blob (Middle Right) */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            // CHANGED Color
            className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"
        />

        {/* 3. Dotted Path Doodle (Updated Stroke Color) */}
        <svg className="absolute top-10 left-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
             {/* CHANGED stroke color */}
             <path d="M0,10 Q30,40 60,10 T100,20" fill="none" stroke="#f59e0b" strokeWidth="0.3" strokeDasharray="1,1" />
        </svg>

        {/* 4. Floating Cloud/Sun Icon */}
        <motion.div
            className="absolute top-32 right-[20%] text-amber-300/80 hidden md:block"
            animate={{y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Swapped Cloud for Sun for the Amber theme */}
            <Sun size={64} fill="currentColor" className="drop-shadow-sm" />
        </motion.div>
      </div>

      {/* --- FLOATING STICKERS --- */}
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[25%] left-[45%] hidden lg:block z-10"
      >
        {/* Changed Star color to match theme better */}
        <Star className="w-10 h-10 text-orange-400 drop-shadow-md" fill="currentColor" strokeWidth={3} stroke="white" />
      </motion.div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-6 relative z-20 h-full pt-32 pb-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          
          {/* LEFT: Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start z-30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge (Updated Colors) */}
            {/* CHANGED text and border color */}
            <span className={`inline-block px-4 py-1 mb-4 text-lg text-amber-600 bg-amber-100 rounded-full shadow-sm rotate-[-2deg] ${handwritingFont.className} font-bold border border-amber-200`}>
                Safe, Engaging & Loving Care
            </span>

            {/* Headline (Updated Colors) */}
            <h1 className={`${titleFont.className} leading-tight mb-6`}>
              {/* CHANGED text color to slate-800 */}
              <span className="block text-4xl md:text-6xl lg:text-7xl text-slate-800 drop-shadow-sm">
                HOME AWAY
              </span>
              {/* CHANGED accent color to amber-500 */}
              <span className="block text-4xl md:text-6xl lg:text-7xl text-amber-500 mt-2 relative">
                From Home
                {/* Underline decoration color changed */}
                <svg className="absolute w-2/3 h-4 -bottom-2 left-0 md:left-0 right-0 md:right-auto mx-auto md:mx-0 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Tagline (Updated Color) */}
            <p className="text-slate-600 text-lg md:text-xl font-medium mb-6 max-w-lg leading-relaxed">
              Our Day Care program offers structured relaxation, nutritious snacks, and supervised play activities giving parents peace of mind.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
               <div className="flex items-center gap-2 bg-white/80 border border-amber-100 px-3 py-1 rounded-full text-sm font-bold text-slate-700">
                  <Clock size={16} className="text-amber-500" /> Flexible Hours
               </div>
               <div className="flex items-center gap-2 bg-white/80 border border-amber-100 px-3 py-1 rounded-full text-sm font-bold text-slate-700">
                  <Utensils size={16} className="text-orange-500" /> Nutritious Meals
               </div>
               <div className="flex items-center gap-2 bg-white/80 border border-amber-100 px-3 py-1 rounded-full text-sm font-bold text-slate-700">
                  <Heart size={16} className="text-rose-500" /> Loving Staff
               </div>
            </div>

            {/* Buttons (Updated Colors) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-bold">
              <Link href="/contact">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    // CHANGED button colors to amber theme
                    className="group relative inline-flex items-center justify-center bg-amber-500 text-white text-lg py-4 px-10 rounded-full shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:bg-amber-600 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                >
                    <span className="relative z-10 flex items-center gap-2">
                    Book a Visit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // CHANGED secondary button hover state
                className="inline-flex items-center justify-center bg-white text-slate-700 text-lg py-4 px-10 rounded-full shadow-md hover:shadow-lg border-2 border-white hover:border-amber-200 hover:bg-amber-50 transition-all duration-300 w-full sm:w-auto"
              >
                View Schedule
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                x: { duration: 0.8, delay: 0.3 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" } // Float animation
            }}
          >
              {/* Character Image container */}
              <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[550px] lg:w-[600px] lg:h-[650px]">
                 {/* Optional: Add a glowing blob behind the image matching the theme */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-400/30 rounded-full blur-3xl -z-10"></div>
                <Image
                  src={childImage}
                  alt="Happy child in daycare"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM CLOUD WAVE (Flipped) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none rotate-180 overflow-hidden z-30">
        <svg 
            className="relative block w-full h-[60px] md:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
        >
            <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"
            ></path>
        </svg>
      </div>

    </section>
  );
};

export default DayCareHero;
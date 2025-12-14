"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Send, 
  Heart,
  ArrowRight,
  Youtube,
  Globe,
  Star
} from "lucide-react";
import { Titan_One, Nunito, Caveat } from 'next/font/google';

// --- LOGO ---

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

const Footer = () => {
  
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <footer className={`relative bg-[#050505] pt-32 pb-10 overflow-hidden text-white ${bodyFont.className}`}>
      
      {/* 0. DECORATIVE TOP GRADIENT FADE */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0B0D17] to-transparent z-20 pointer-events-none" />

      {/* 1. BACKGROUND STARS & GLOWS */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]" />
          {/* Animated Stars (Simple CSS) */}
          {[...Array(20)].map((_, i) => (
             <div key={i} className="absolute bg-white rounded-full opacity-30 animate-pulse" 
                  style={{
                    top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
                    width: Math.random() * 3 + 'px', height: Math.random() * 3 + 'px',
                    animationDuration: Math.random() * 3 + 2 + 's'
                  }} 
             />
          ))}
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- BRAND / ABOUT --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Container */}
              <div className="relative w-40 transition-transform duration-300 group-hover:scale-105">
           <h1>Best day care</h1>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-xs">
              Launching little astronauts into a universe of learning through play, creativity, and exploration.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
               {[
                 { Icon: Facebook, color: "bg-blue-600", hover: "hover:bg-blue-500" },
                 { Icon: Instagram, color: "bg-pink-600", hover: "hover:bg-pink-500" },
                 { Icon: Youtube, color: "bg-red-600", hover: "hover:bg-red-500" }
               ].map((item, idx) => (
                 <a key={idx} href="#" className={`w-10 h-10 rounded-full ${item.color} ${item.hover} text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/20`}>
                   <item.Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </motion.div>

          {/* --- QUICK LINKS --- */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-cyan-400 text-2xl mb-6 ${titleFont.className} tracking-wide text-shadow-glow`}>
               Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Mission', href: '/about' },
                { name: 'Flight Programs', href: '/#programs' },
                { name: 'Join The Crew', href: '/admission' },
                { name: 'Franchise', href: '/franchise' },
                { name: 'Contact Base', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-cyan-300 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 text-sm font-semibold group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- CONTACT INFO --- */}
          <motion.div variants={itemVariants}>
             <h3 className={`text-purple-400 text-2xl mb-6 ${titleFont.className} tracking-wide text-shadow-glow`}>
               Contact Base
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm group">
                <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <a href="https://www.littledreamersatcambridge.com" target="_blank" rel="noopener noreferrer" className="mt-1 font-medium text-gray-300 group-hover:text-white transition-colors break-words max-w-[200px]">
                    www.littledreamersatcambridge.com
                </a>
              </li>
              
              <li className="flex items-center gap-4 text-sm group">
                 <div className="w-10 h-10 rounded-xl bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@littledreamersatcambridge.com" className="font-medium text-gray-300 group-hover:text-white transition-colors break-words max-w-[200px]">
                    info@littledreamersatcambridge.com
                </a>
              </li>

              <li className="flex items-center gap-4 text-sm group">
                <div className="w-10 h-10 rounded-xl bg-orange-900/30 border border-orange-500/30 text-orange-300 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+919999996266" className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    +91-999 999 6266
                </a>
              </li>
            </ul>
          </motion.div>

          {/* --- NEWSLETTER --- */}
          <motion.div variants={itemVariants}>
             <h3 className={`text-orange-400 text-2xl mb-6 ${titleFont.className} tracking-wide text-shadow-glow`}>
               Comms Channel
            </h3>
            <p className="text-sm text-gray-400 mb-5 font-medium leading-relaxed">
              Subscribe for mission updates, parenting tips, and special event invites!
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter frequency (email)..." 
                className="w-full bg-[#0a0c14] border border-white/10 rounded-xl pl-5 pr-14 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/5 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 active:scale-95 transition-all shadow-lg group-hover:shadow-cyan-500/25">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            
            <p className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Secure transmission. No spam.
            </p>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500 font-medium flex flex-wrap justify-center items-center gap-1">
              © 2025 Little Dreamers. Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-bounce mx-1"/> by 
              <a href="https://scalesaas.ashishrohilla.co.in/" target="_blank" rel="noreferrer" className={`ml-1 text-cyan-400 hover:text-white transition-colors ${handwritingFont.className} text-xl font-bold`}>
                  scalesaas
              </a>
          </p>
          <div className="flex gap-6 text-xs font-bold text-gray-600 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Glows */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    </footer>
  );
};

export default Footer;
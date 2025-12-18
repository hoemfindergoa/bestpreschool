"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Send, 
  Heart,
  Youtube,
  Globe,
  CloudSun
} from "lucide-react";
import { Titan_One, Nunito, Caveat } from 'next/font/google';

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
    <footer className={`relative bg-slate-900 pt-32 pb-10 overflow-hidden text-slate-200 ${bodyFont.className}`}>
      
      {/* 0. DECORATIVE TOP CURVE (Paper tear effect) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-slate-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                 <CloudSun className="w-8 h-8 text-orange-400" />
                 <h1 className={`text-2xl text-white ${titleFont.className}`}>
                   Best<span className="text-blue-400">Pre</span>School
                 </h1>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xs">
              Launching little astronauts into a universe of learning through play, creativity, and exploration.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
               {[
                 { Icon: Facebook, color: "bg-blue-600", hover: "hover:bg-blue-500" },
                 { Icon: Instagram, color: "bg-pink-600", hover: "hover:bg-pink-500" },
                 { Icon: Youtube, color: "bg-red-600", hover: "hover:bg-red-500" }
               ].map((item, idx) => (
                 <a key={idx} href="#" className={`w-10 h-10 rounded-full ${item.color} ${item.hover} text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:-translate-y-1`}>
                   <item.Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </motion.div>

          {/* --- QUICK LINKS --- */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-white text-xl mb-6 ${titleFont.className} tracking-wide`}>
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
                  <Link href={item.href} className="text-slate-400 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 text-sm font-semibold group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- CONTACT INFO --- */}
          <motion.div variants={itemVariants}>
             <h3 className={`text-white text-xl mb-6 ${titleFont.className} tracking-wide`}>
               Contact Base
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <a href="https://www.littledreamersatcambridge.com" target="_blank" rel="noopener noreferrer" className="mt-1 font-medium text-slate-400 group-hover:text-white transition-colors break-words max-w-[200px]">
                    www.littledreamersatcambridge.com
                </a>
              </li>
              
              <li className="flex items-center gap-4 text-sm group">
                 <div className="w-10 h-10 rounded-xl bg-slate-800 text-pink-400 flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@littledreamersatcambridge.com" className="font-medium text-slate-400 group-hover:text-white transition-colors break-words max-w-[200px]">
                    info@littledreamersatcambridge.com
                </a>
              </li>

              <li className="flex items-center gap-4 text-sm group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+919999996266" className="font-medium text-slate-400 group-hover:text-white transition-colors">
                    +91-999 999 6266
                </a>
              </li>
            </ul>
          </motion.div>

          {/* --- NEWSLETTER --- */}
          <motion.div variants={itemVariants}>
             <h3 className={`text-white text-xl mb-6 ${titleFont.className} tracking-wide`}>
               Stay Updated
            </h3>
            <p className="text-sm text-slate-400 mb-5 font-medium leading-relaxed">
              Subscribe for mission updates, parenting tips, and special event invites!
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter email address..." 
                className="w-full bg-white rounded-xl pl-5 pr-14 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 active:scale-95 transition-all shadow-md">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            
            <p className="mt-4 text-xs text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Secure transmission. No spam.
            </p>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-slate-500 font-medium flex flex-wrap justify-center items-center gap-1">
              © 2025 Little Dreamers. Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-bounce mx-1"/> by 
              <a href="https://scalesaas.ashishrohilla.co.in/" target="_blank" rel="noreferrer" className={`ml-1 text-white hover:text-orange-400 transition-colors ${handwritingFont.className} text-xl font-bold`}>
                  scalesaas
              </a>
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Glows (Subtle for light theme anchoring) */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    </footer>
  );
};

export default Footer;
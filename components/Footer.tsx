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
  Globe
} from "lucide-react";
import { Titan_One, Nunito, Caveat } from 'next/font/google';

import logo from "../public/logo.png"; 

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

const handwritingFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

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
    <footer className={`relative bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 pt-32 pb-10 overflow-hidden text-white ${bodyFont.className}`}>
      
      {/* 0. DECORATIVE TOP WAVE (SVG) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
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
              {/* Logo Icon Container */}
              <div className="relative w-auto h-auto flex items-center justify-center bg-white rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] rotate-0 group-hover:rotate-6 transition-transform duration-300 p-2">
                <Image 
                  src={logo} 
                  alt="Little Dreamers Logo" 
                  className="w-[150px] h-auto object-contain"
                />
              </div>
            </Link>
            
            <p className="text-purple-100/90 text-sm leading-relaxed font-semibold max-w-xs">
              Creating a foundation for lifelong learning through play, creativity, and exploration in a safe, loving environment.
            </p>
            
            {/* Social Icons - Colorful on hover */}
            <div className="flex gap-6">
               {/* Facebook */}
                <button className="w-10 h-10 rounded-full  bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:-translate-y-1 hover:scale-110 border border-white/10 group">
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </button>
                {/* Instagram */}
                <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:-translate-y-1 hover:scale-110 border border-white/10 group">
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </button>
                {/* Youtube */}
                <button className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:-translate-y-1 hover:scale-110 border border-white/10 group">
                  <Youtube className="w-5 h-5 group-hover:text-white" />
                </button>
            </div>
          </motion.div>

          {/* --- QUICK LINKS --- */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-[#fad06e] text-2xl mb-6 ${titleFont.className} tracking-wide`}>
               Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Programs', href: '/#programs' }, // Assuming this scrolls to a section
                { name: 'Admissions', href: '/admission' },
                { name: 'Franchise', href: '/franchise' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-purple-100/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 text-sm font-bold group">
                    <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#9dcedc] group-hover:text-purple-900 transition-colors">
                        <ArrowRight className="w-3 h-3" />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- CONTACT INFO --- */}
          <motion.div variants={itemVariants}>
             <h3 className={`text-[#9dcedc] text-2xl mb-6 ${titleFont.className} tracking-wide`}>
               Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-[#f7a7b4] text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-12 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <a href="https://www.littledreamersatcambridge.com" target="_blank" rel="noopener noreferrer" className="mt-1 font-bold text-purple-100 group-hover:text-white transition-colors leading-relaxed break-words max-w-[200px]">
                    www.littledreamersatcambridge.com
                </a>
              </li>
              
              <li className="flex items-center gap-4 text-sm group cursor-pointer">
                 <div className="w-10 h-10 rounded-xl bg-[#06D6A0] text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-12 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@littledreamersatcambridge.com" className="font-bold text-purple-100 group-hover:text-white transition-colors break-words max-w-[200px]">
                    info@littledreamersatcambridge.com
                </a>
              </li>

              <li className="flex items-center gap-4 text-sm group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-[#fad06e] text-[#5c4d26] flex items-center justify-center shrink-0 shadow-md group-hover:-rotate-12 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+919999996266" className="font-bold text-purple-100 group-hover:text-white transition-colors">
                    +91-999 999 6266
                </a>
              </li>
            </ul>
          </motion.div>

          {/* --- NEWSLETTER --- */}
          <motion.div variants={itemVariants}>
             <h3 className={`text-[#f7a7b4] text-2xl mb-6 ${titleFont.className} tracking-wide`}>
               Newsletter
            </h3>
            <p className="text-sm text-purple-100/80 mb-5 font-bold leading-relaxed">
              Subscribe for updates, parenting tips, and special event invites!
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="w-full bg-white/10 border-2 border-white/10 rounded-2xl pl-5 pr-14 py-4 text-sm text-white placeholder:text-purple-300 focus:outline-none focus:border-[#fad06e] focus:bg-white/20 transition-all font-bold backdrop-blur-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#fad06e] rounded-xl flex items-center justify-center text-[#5c4d26] hover:scale-105 active:scale-95 transition-transform shadow-lg group-hover:rotate-3">
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </div>
            
            {/* Trust Badge / Small Text */}
            <p className="mt-4 text-xs text-purple-300 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                We respect your privacy. No spam.
            </p>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-purple-200 font-bold flex flex-wrap justify-center items-center gap-1">
              © 2025 Little Dreamers. Made with <Heart className="w-4 h-4 text-[#f7a7b4] fill-[#f7a7b4] animate-bounce mx-1"/> by 
              <a href="https://scalesaas.ashishrohilla.co.in/" target="_blank" rel="noreferrer" className={`ml-1 text-[#fad06e] hover:text-white transition-colors underline decoration-dotted underline-offset-4 ${handwritingFont.className} text-xl`}>
                 scalesaas
              </a>
          </p>
          <div className="flex gap-6 text-xs font-black text-purple-300 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors hover:underline">Terms of Service</Link>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Background Blurs */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#f7a7b4]/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#9dcedc]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

    </footer>
  );
};

export default Footer;
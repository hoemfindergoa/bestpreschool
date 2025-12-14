"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Titan_One, Nunito, Caveat } from 'next/font/google';

// --- PLACEHOLDER LOGO ---
// Make sure this path is correct in your project
import logo from "../../public/logo.png"; 

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll Effect & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["about", "programs", "gallery"];
        let current = "";
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `/#${section}`;
            }
          }
        }
        if (current) setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/#programs", label: "Programs" },
    { href: "/Whyus", label: "Why Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/franchise", label: "Franchise" },
    { href: "/Ourcenters", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com", 
      className: "text-blue-400 hover:text-white hover:bg-blue-600" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      className: "text-pink-400 hover:text-white hover:bg-pink-600" 
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com", 
      className: "text-red-400 hover:text-white hover:bg-red-600" 
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md py-3 border-white/10"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative  w-32 md:w-40 transition-transform duration-300 group-hover:scale-105">
          <h1 className="text-white"> Best Pre School</h1>
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = 
                hoveredLink === link.href || 
                pathname === link.href || 
                (pathname === "/" && activeSection === link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative group py-2"
                >
                  {/* Floating Sparkle for Active State */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0 }}
                        animate={{ opacity: 1, y: -20, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 text-cyan-400"
                      >
                         <Sparkles className="w-4 h-4 fill-cyan-400 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className={`text-base tracking-wide transition-all duration-300 ${
                    isActive ? "text-cyan-400 font-bold text-shadow-glow" : "text-gray-300 font-medium hover:text-white"
                  } ${bodyFont.className}`}>
                    {link.label}
                  </span>
                  
                  {/* Bottom Glow Line */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4">
            
            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-2 border-r border-white/10 pr-6 mr-2">
                {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`p-2 rounded-full transition-all duration-300 hover:-translate-y-1 bg-white/5 ${social.className}`}
                    >
                        <social.icon className="w-4 h-4" />
                    </a>
                ))}
            </div>

            {/* Desktop Enroll Button */}
            <Link href="/admission" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-6 py-2.5 shadow-lg flex items-center gap-2 text-sm font-bold transition-all border border-cyan-400/30 ${bodyFont.className}`}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0a0c14] border-t border-white/10 shadow-2xl overflow-hidden absolute w-full left-0 top-full backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link, i) => {
                 const isActive = pathname === link.href || (pathname === "/" && activeSection === link.href);
                 
                 return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all border ${
                        isActive 
                          ? "text-cyan-400 bg-cyan-950/30 border-cyan-500/30" 
                          : "text-gray-400 hover:bg-white/5 border-transparent"
                      } ${bodyFont.className}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                 );
              })}
              
              <div className="mt-4 pt-6 border-t border-white/10">
                <Link href="/enroll" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold shadow-lg flex justify-center items-center gap-2 ${bodyFont.className}`}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

               <div className="flex justify-center gap-6 py-4 mt-2">
                 {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        className={`p-3 rounded-full bg-white/5 ${social.className}`}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
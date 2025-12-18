"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, Facebook, Instagram, Twitter, Youtube, CloudSun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Titan_One, Nunito } from 'next/font/google';

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

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
            // Offset for the fixed header height
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
    { href: "/why-us", label: "Why Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/franchise", label: "Franchise" },
    { href: "/centers", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com", 
      className: "text-blue-600 hover:bg-blue-50" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      className: "text-pink-600 hover:bg-pink-50" 
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com", 
      className: "text-red-600 hover:bg-red-50" 
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-slate-100"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105 flex items-center gap-2">
               <CloudSun className="w-8 h-8 text-orange-400" />
               <h1 className={`text-2xl md:text-3xl text-slate-800 ${titleFont.className}`}>
                 Best<span className="text-blue-600">Pre</span>School
               </h1>
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
                        initial={{ opacity: 0, y: -5, scale: 0 }}
                        animate={{ opacity: 1, y: -15, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute left-1/2 -translate-x-1/2"
                      >
                          <Sparkles className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className={`text-base tracking-wide transition-all duration-300 ${
                    isActive ? "text-blue-600 font-bold" : "text-slate-600 font-bold hover:text-blue-500"
                  } ${bodyFont.className}`}>
                    {link.label}
                  </span>
                  
                  {/* Bottom Rounded Line */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-orange-400 rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4">
            
            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-1 border-r border-slate-200 pr-6 mr-2">
                {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`p-2 rounded-full transition-all duration-300 hover:-translate-y-1 ${social.className}`}
                    >
                        <social.icon className="w-4 h-4" />
                    </a>
                ))}
            </div>

            {/* Desktop Enroll Button */}
            <Link href="/admission" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-6 py-2.5 shadow-md flex items-center gap-2 text-sm font-bold transition-all ${bodyFont.className}`}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
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
            className="xl:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden absolute w-full left-0 top-full"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-3">
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
                      className={`block px-5 py-3 rounded-2xl text-lg font-bold transition-all border ${
                        isActive 
                          ? "text-blue-600 bg-blue-50 border-blue-100" 
                          : "text-slate-500 hover:bg-slate-50 border-transparent"
                      } ${bodyFont.className}`}
                    >
                      <div className="flex items-center justify-between">
                        {link.label}
                        {isActive && <Sparkles className="w-4 h-4 text-orange-400" />}
                      </div>
                    </Link>
                  </motion.div>
                 );
              })}
              
              <div className="mt-4 pt-6 border-t border-slate-100">
                <Link href="/admission" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 flex justify-center items-center gap-2 ${bodyFont.className}`}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

               <div className="flex justify-center gap-6 py-4 mt-2">
                 {socialLinks.map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        className={`p-3 rounded-full bg-slate-50 border border-slate-100 ${social.className}`}
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
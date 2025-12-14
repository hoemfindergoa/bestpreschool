"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  Sparkles,
  Sun
} from "lucide-react";
import Image from "next/image";

// Reusing assets for consistency
import smilingboy from "../../public/smilingboy.png";
import Toys from "../../public/Toys.png"; 

type TileProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

// Reusing the exact Tile animation logic from your About Page
const Tile: React.FC<TileProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative p-8 md:p-10 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const ContactUs = () => {
  return (
    <section className="bg-white font-sans" id="contact">
      
      {/* 0. FONTS & STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        .font-calligraphy { font-family: 'Pacifico', cursive; }
        .font-hand { font-family: 'Dancing Script', cursive; }
      `}</style>

      {/* THE MOSAIC LAYOUT */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 auto-rows-fr">

        {/* 1. HEADER / CALL TO ACTION (Pink Block) */}
        <Tile className="md:col-span-8 bg-[#f7a7b4] text-white min-h-[400px] flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <MessageCircle className="w-40 h-40" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-white/20 backdrop-blur-sm px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-full">
                 Admissions Open
               </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Ready to Start the <br />
              <span className="text-[#FFE5E5] font-calligraphy">Journey?</span>
            </h2>
            <p className="text-xl font-bold text-pink-50 max-w-lg">
              We'd love to hear from you! Whether you have questions about admissions, our curriculum, or just want to say hello.
            </p>
          </div>

          {/* Reusing image asset from About page for consistency */}
          <div className="absolute bottom-[-20px] right-0 z-20 hidden md:block">
            <Image
              src={smilingboy}
              alt="Happy Student"
              width={320}
              height={320}
              className="object-contain transform scale-x-[-1]" // Flipping image to face text
            />
          </div>
        </Tile>

        {/* 2. CONTACT INFO SIDEBAR (Blue Block) */}
        <Tile className="md:col-span-4 bg-[#9dcedc] text-white flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-3xl font-black mb-8">Get in Touch</h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase opacity-80 mb-1">Visit Us</p>
                  <p className="text-lg font-bold leading-tight">123 Sunshine Avenue, <br/>Little Dreamers Lane</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase opacity-80 mb-1">Call Us</p>
                  <p className="text-lg font-bold">+91 98765 43210</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase opacity-80 mb-1">Email Us</p>
                  <p className="text-lg font-bold">hello@littledreamers.com</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 animate-spin-slow" />
              <span className="font-hand text-xl">We reply with a smile!</span>
            </div>
          </div>
        </Tile>

        {/* 3. INTERACTIVE FORM (Yellow Block) */}
        <Tile className="md:col-span-7 bg-[#fad06e] text-[#5c4d26] min-h-[500px] relative">
           <div className="absolute top-10 right-10 opacity-10">
            <Sparkles className="w-32 h-32" />
          </div>

          <h3 className="text-3xl font-black mb-2 text-white">Send a Message</h3>
          <p className="text-white/90 font-bold mb-8">Fill out the form below and we'll get back to you shortly.</p>

          <form className="relative z-10 space-y-4 max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-white uppercase ml-1">Parent's Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/90 border-0 rounded-2xl p-4 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all font-bold"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-white uppercase ml-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/90 border-0 rounded-2xl p-4 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all font-bold"
                  placeholder="+91..."
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-white uppercase ml-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/90 border-0 rounded-2xl p-4 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all font-bold"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-white uppercase ml-1">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/90 border-0 rounded-2xl p-4 text-gray-800 placeholder-gray-400 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all font-bold resize-none"
                placeholder="Tell us about your child..."
              ></textarea>
            </div>

            <button className="bg-[#7209B7] text-white font-black text-lg py-4 px-8 rounded-2xl hover:bg-[#5e0796] hover:scale-[1.02] transition-all flex items-center gap-2 shadow-lg shadow-purple-900/10 mt-4">
              Send Enquiry <Send className="w-5 h-5" />
            </button>
          </form>
        </Tile>

        {/* 4. MAP & HOURS (Purple/Image Block Mix) */}
        <div className="md:col-span-5 grid grid-rows-2 h-full">
            
            {/* Hours Block */}
            <Tile className="bg-[#7209B7] text-white flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black">School Hours</h3>
              </div>
              <div className="space-y-2 text-purple-100 font-medium text-lg">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold text-white">8:30 AM - 1:30 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Saturday</span>
                  <span className="font-bold text-white">9:00 AM - 12:00 PM</span>
                </div>
              </div>
            </Tile>

            {/* Decorative / Map Placeholder Block */}
            <Tile className="bg-gray-100 relative min-h-[300px] p-0 overflow-hidden group">
               {/* In a real scenario, put an iframe map here. 
                   For design consistency, we use the Toys image to fill the space 
                   until the map loads */}
               <div className="absolute inset-0 bg-[#06D6A0] flex items-center justify-center">
                  <Image 
                    src={Toys}
                    alt="Map Location"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50 group-hover:scale-110 transition-transform duration-700"
                  />
                  <a href="#" className="absolute z-20 bg-white text-[#06D6A0] px-6 py-3 rounded-full font-black shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> View on Google Maps
                  </a>
               </div>
            </Tile>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
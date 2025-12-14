"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, // For WhatsApp
  Send,
  User,
  MessageSquare,
  Globe,
  Smartphone
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import ContactHeader from "@/components/ContactHeader";

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

// --- REUSABLE WAVE COMPONENT ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color: string; 
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color }) => {
  const viewBoxWidth = 2000;
  const viewBoxHeight = 100;

  const getWavePath = (count: number) => {
    const waveWidth = viewBoxWidth / count;
    let pathD = "";

    if (position === "top") {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, 25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} 0 H 0 Z`;
    } else {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, -25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} H 0 Z`;
    }
    return pathD;
  };

  const mobilePath = getWavePath(5);
  const desktopPath = getWavePath(20);

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={`absolute inset-0 w-[200%] h-full ${color} ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
      <div className="block md:hidden w-full h-full absolute inset-0">
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={15} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={15} />
      </div>
    </div>
  );
};


// --- HEADER COMPONENT ---
// const ContactHeader = () => {
//   return (
//     <header className="relative w-full h-[50vh] min-h-[450px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center overflow-hidden">
      
//       {/* Background Doodles */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//          <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-20">
//             <Phone className="w-24 h-24 text-white" />
//          </motion.div>
//          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-20">
//             <Mail className="w-20 h-20 text-blue-100" />
//          </motion.div>
//       </div>

//       <div className="relative z-10 text-center px-4 mt-8">
//         <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
//             <Home className="w-4 h-4" />
//             <span>Home</span>
//             <ChevronRight className="w-4 h-4 opacity-75" />
//             <span>Contact Us</span>
//         </div>

//         <h1 className={`text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4 ${titleFont.className}`}>
//           Get In
//           <span className="block text-blue-100 mt-2">Touch</span>
//         </h1>
        
//         <p className="text-xl text-white/95 max-w-2xl mx-auto font-bold">
//           We'd love to hear from you! Reach out for admissions, queries, or just to say hello.
//         </p>
//       </div>

//       {/* WAVE: Connects to Section 1 (Blue-50) */}
//       <WaveSeparator position="bottom" color="text-blue-50" />
//     </header>
//   );
// };


// --- MAIN PAGE COMPONENT ---
const ContactPage: React.FC = () => {
  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>
      
      <ContactHeader />


        <section className="w-full bg-white py-20 lg:py-8 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              
              {/* LEFT: Google Map */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full h-[400px] rounded-[3rem] overflow-hidden border-8 border-blue-50 shadow-2xl relative"
              >
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale hover:grayscale-0 transition-all duration-500"
                 ></iframe>
                 {/* Floating Location Pin Overlay */}
                 <div className="absolute top-4 right-4 bg-white p-3 rounded-2xl shadow-lg animate-bounce">
                    <MapPin className="w-8 h-8 text-rose-500" />
                 </div>
              </motion.div>

              {/* RIGHT: WhatsApp CTA */}
              <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col items-start"
              >
                 <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm bg-emerald-50 px-4 py-2 rounded-full mb-4">
                    Quick Chat
                 </span>
                 <h2 className={`text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight ${titleFont.className}`}>
                    Questions? <br/>
                    <span className="text-emerald-500">Chat with us!</span>
                 </h2>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Prefer instant messaging? Connect with our admissions team directly on WhatsApp for quick answers regarding fees, availability, and campus tours.
                 </p>
                 
                 <button 
                    onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                    className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-200 transition-all hover:-translate-y-1"
                 >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    Chat on WhatsApp
                 </button>

                 <p className="mt-4 text-sm text-slate-400 font-semibold">
                    *Available Mon-Sat, 9am - 6pm
                 </p>
              </motion.div>

           </div>
        </div>
      </section>

      {/* =========================================
          SECTION 1: CONTACT CARDS (Blue Theme)
      ========================================= */}
      <section className="relative w-full bg-blue-50 pt-20 pb-32 overflow-hidden">
          <WaveSeparator position="top" color="text-white" />
        
        {/* Background Doodle */}
        <div className="absolute inset-0 pointer-events-none opacity-10 top-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,50 100,0" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           
           <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-black text-blue-900 mb-4 ${titleFont.className}`}>
                Contact Info
              </h2>
              <div className="w-24 h-2 bg-blue-300 rounded-full mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Address */}
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[2rem] p-8 shadow-xl text-center border-b-8 border-rose-400 group"
              >
                 <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-rose-600" />
                 </div>
                 <h3 className="text-xl font-black text-slate-800 mb-2">Visit Us</h3>
                 <p className="text-slate-600 font-medium">
                   123, Little Dreamers Lane,<br/>
                   Sunshine City, State - 400001
                 </p>
              </motion.div>

              {/* Card 2: Phone */}
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[2rem] p-8 shadow-xl text-center border-b-8 border-amber-400 group"
              >
                 <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-amber-600" />
                 </div>
                 <h3 className="text-xl font-black text-slate-800 mb-2">Call Us</h3>
                 <p className="text-slate-600 font-medium">
                   +91 9999996266<br/>
                 </p>
              </motion.div>

              {/* Card 3: Email */}
              <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[2rem] p-8 shadow-xl text-center border-b-8 border-sky-400 group"
              >
                 <div className="w-16 h-16 bg-sky-100 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-sky-600" />
                 </div>
                 <h3 className="text-xl font-black text-slate-800 mb-2">Email Us</h3>
                 <p className="text-slate-600 font-medium break-words">
                   info@littledreamersatcambridge.com
<br/>
                 </p>
              </motion.div>

               {/* Card 4: Hours */}
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[2rem] p-8 shadow-xl text-center border-b-8 border-emerald-400 group"
              >
                 <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-emerald-600" />
                 </div>
                 <h3 className="text-xl font-black text-slate-800 mb-2">Working Hours</h3>
                 <p className="text-slate-600 font-medium">
                   Mon - Sat: 8:00 AM - 6:00 PM<br/>
                   Sunday: Closed
                 </p>
              </motion.div>
           </div>

        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: MAP & WHATSAPP (White Theme)
      ========================================= */}
    


      {/* =========================================
          SECTION 3: MESSAGE FORM (Rose Theme)
      ========================================= */}
      <section className="relative w-full bg-rose-50 pt-32 pb-32 overflow-hidden">
        
        {/* Top Wave: White to mask the top of the rose box */}
        <WaveSeparator position="top" color="text-white" />

        <div className="absolute inset-0 pointer-events-none opacity-10 top-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,100 100,0" fill="none" stroke="#f43f5e" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           
           <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-5xl font-black text-rose-900 mb-4 ${titleFont.className}`}>
                Send a Message
              </h2>
              <p className="text-rose-800 text-lg">
                Drop us a line and we'll get back to you within 24 hours.
              </p>
           </div>

           {/* FORM CARD */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white relative"
           >
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                 <Send className="w-8 h-8 text-white pr-1 pb-1" />
              </div>

              <form className="flex flex-col gap-6">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-slate-700 ml-2">Your Name</label>
                        <div className="relative">
                           <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                           <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-slate-700 ml-2">Email Address</label>
                        <div className="relative">
                           <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                           <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-colors" />
                        </div>
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Subject</label>
                    <div className="relative">
                       <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                       <input type="text" placeholder="e.g. Admission Inquiry" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-colors" />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 ml-2">Your Message</label>
                    <div className="relative">
                       <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                       <textarea rows={4} placeholder="How can we help you?" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-rose-400 transition-colors resize-none" />
                    </div>
                 </div>

                 <div className="mt-4">
                    <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                       Send Message
                       <ChevronRight className="w-5 h-5" />
                    </button>
                 </div>

              </form>
           </motion.div>

        </div>

        {/* Bottom Wave (Optional - transition to footer) */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>

    </div>
  );
};

export default ContactPage;
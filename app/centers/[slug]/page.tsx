"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  School,
  CheckCircle,
  CalendarCheck,
  Star,
  Users,
  Utensils,
  ShieldCheck,
  Play
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

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

// --- MOCK DATABASE (In real app, fetch from API/CMS) ---
type CenterDetails = {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  description: string;
  director: string;
  mapEmbed: string;
  facilities: string[];
  image: string; // Placeholder color or image path
  theme: string; // Tailwind color theme for header
};

const centersDB: Record<string, CenterDetails> = {
  "brooklyn-campus": {
    name: "Little Dreamers Brooklyn",
    city: "New York",
    address: "123 Park Slope, Brooklyn, NY 11215",
    phone: "+1 (555) 123-4567",
    email: "brooklyn@littledreamers.com",
    hours: "8:00 AM - 6:00 PM",
    director: "Ms. Emily Rose",
    description: "Located in the heart of Park Slope, our Brooklyn campus features a massive outdoor play area and a dedicated art studio. We focus on nature-based learning and creative expression.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", // Dummy Embed
    facilities: ["Outdoor Garden", "Art Studio", "CCTV Security", "Nutritious Meals", "Library"],
    image: "bg-teal-200",
    theme: "from-teal-400 via-emerald-400 to-green-400"
  },
  "manhattan-campus": {
    name: "Little Dreamers Manhattan",
    city: "New York",
    address: "45 West Village, Manhattan, NY 10014",
    phone: "+1 (555) 987-6543",
    email: "manhattan@littledreamers.com",
    hours: "7:30 AM - 6:30 PM",
    director: "Mr. Sarah Lee",
    description: "Our flagship Manhattan center offers a modern, tech-enabled learning environment. With soundproof nap rooms and an indoor gym, it is perfect for city kids.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Indoor Gym", "Smart Boards", "Soundproof Nap Rooms", "Daycare", "Music Room"],
    image: "bg-rose-200",
    theme: "from-rose-400 via-pink-400 to-fuchsia-400"
  },
  "santa-monica-campus": {
    name: "Little Dreamers Santa Monica",
    city: "Los Angeles",
    address: "88 Ocean Ave, Santa Monica, CA 90401",
    phone: "+1 (310) 555-0199",
    email: "santamonica@littledreamers.com",
    hours: "8:00 AM - 5:30 PM",
    director: "Ms. Jessica Day",
    description: "Steps away from the ocean, our Santa Monica campus embraces fresh air and sunshine. We incorporate beach sensory play and outdoor yoga into our daily routine.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Ocean View Play Area", "Yoga Deck", "Organic Cafe", "Montessori Lab", "Transportation"],
    image: "bg-sky-200",
    theme: "from-sky-400 via-blue-400 to-indigo-400"
  },
  // Add more mock data for Chicago, etc.
};

// --- REUSABLE WAVE COMPONENT ---
const WaveSeparator = ({ position, color }: { position: "top" | "bottom", color: string }) => {
  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
       <svg className={`relative block w-full h-full ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           {position === "top" ? (
               <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
           ) : (
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
           )}
       </svg>
    </div>
  );
};


// --- MAIN COMPONENT ---
export default function CenterProfile({ params }: { params: { slug: string } }) {
  
  // 1. Fetch Data
  const center = centersDB[params.slug];

  // 2. Handle 404
  if (!center) {
    return notFound();
  }

  return (
    <div className={`w-full flex flex-col bg-white ${bodyFont.className}`}>
      
      {/* =========================================
          HEADER SECTION (Dynamic Theme)
      ========================================= */}
      <header className={`relative w-full h-[50vh] min-h-[450px] bg-gradient-to-r ${center.theme} flex items-center justify-center overflow-hidden`}>
        
        {/* Background Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10">
              <School className="w-24 h-24 text-white" />
           </motion.div>
           <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10">
              <Star className="w-20 h-20 text-yellow-100 fill-yellow-100" />
           </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 mt-8 max-w-4xl">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-75" />
              <Link href="/centers" className="hover:text-white transition-colors">Centers</Link>
              <ChevronRight className="w-3 h-3 opacity-75" />
              <span className="text-white truncate max-w-[150px] md:max-w-none">{center.name}</span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-black text-white drop-shadow-md mb-4 leading-tight ${titleFont.className}`}>
            {center.name}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-white font-bold text-lg mt-4">
             <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {center.city}</span>
             <span className="hidden md:inline">•</span>
             <span className="flex items-center gap-2"><Users className="w-5 h-5" /> Director: {center.director}</span>
          </div>
        </div>

        {/* WAVE: Transitions to Section 1 (Slate-50) */}
        <WaveSeparator position="bottom" color="text-slate-50" />
      </header>


      {/* =========================================
          SECTION 1: INFO GRID (Slate-50)
      ========================================= */}
      <section className="relative w-full bg-slate-50 pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           
           {/* Info Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32">
              
              {/* Address */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-rose-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Address</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.address}</p>
                 </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-amber-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Phone</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.phone}</p>
                 </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-sky-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <p className="text-slate-500 text-sm font-medium break-all">{center.email}</p>
                 </div>
              </motion.div>

              {/* Hours */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-emerald-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
                    <Clock className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Working Hours</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.hours}</p>
                 </div>
              </motion.div>

           </div>

           {/* About Section */}
           <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                  <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-6 ${titleFont.className}`}>
                    Welcome to <span className="text-teal-500">{center.city}</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {center.description}
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    At Little Dreamers {center.city}, we believe in creating a safe, nurturing, and stimulating environment where your child can grow, learn, and thrive. Our experienced staff and state-of-the-art facilities ensure the best early childhood education experience.
                  </p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                    Book a Campus Tour <CalendarCheck className="w-5 h-5" />
                  </button>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                  <div className={`relative w-full max-w-md aspect-square rounded-[3rem] ${center.image} border-8 border-white shadow-2xl overflow-hidden`}>
                     <div className="w-full h-full flex items-center justify-center text-slate-500/50 font-black text-2xl">
                        Image Placeholder
                     </div>
                  </div>
              </div>
           </div>

        </div>
        {/* WAVE */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: FACILITIES & MAP (White)
      ========================================= */}
      <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
           
           {/* Facilities Grid */}
           <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-4 ${titleFont.className}`}>
                Center <span className="text-amber-500">Facilities</span>
              </h2>
           </div>

           <div className="flex flex-wrap justify-center gap-4 mb-20">
              {center.facilities.map((facility, index) => (
                 <motion.div 
                   key={index}
                   whileHover={{ scale: 1.05 }}
                   className="bg-amber-50 text-amber-800 px-6 py-3 rounded-full font-bold shadow-sm border border-amber-100 flex items-center gap-2"
                 >
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    {facility}
                 </motion.div>
              ))}
           </div>

           {/* Large Map */}
           <div className="w-full h-[450px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-inner relative">
                <iframe 
                   src={center.mapEmbed}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                    <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Locate Us</p>
                    <p className="text-slate-600 font-bold text-lg">{center.name}</p>
                </div>
           </div>

        </div>
      </section>


      {/* =========================================
          SECTION 3: CTA (Colored)
      ========================================= */}
      <section className={`relative w-full bg-gradient-to-r ${center.theme} py-20 overflow-hidden`}>
         <WaveSeparator position="top" color="text-white" />
         
         <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${titleFont.className}`}>
               Ready to Join the Family?
            </h2>
            <p className="text-xl font-bold opacity-90 mb-8 max-w-2xl mx-auto">
               Admissions are open for the upcoming academic year at {center.name}. Secure your spot today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-white text-slate-800 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Apply Now <Play className="w-4 h-4 fill-slate-800" />
               </button>
               <button className="bg-transparent border-4 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                  Download Brochure
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
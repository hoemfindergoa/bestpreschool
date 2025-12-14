"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation,
  Search,
  ArrowRight,
  School,
  Globe
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Link from "next/link";

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

// --- DATA STRUCTURES ---
type Center = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbed: string; 
  slug: string;
};

// Hierarchical Data: Country -> State -> City -> Centers[]
type LocationData = {
  [country: string]: {
    [state: string]: {
      [city: string]: Center[];
    };
  };
};

// --- MOCK DATA ---
const locationsDB: LocationData = {
  "USA": {
    "New York": {
      "Brooklyn": [
        {
          id: "ny-bk-1",
          name: "Little Dreamers Brooklyn",
          address: "123 Park Slope, Brooklyn, NY",
          phone: "+1 (555) 123-4567",
          hours: "8:00 AM - 6:00 PM",
          slug: "brooklyn-campus",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        }
      ],
      "Manhattan": [
        {
          id: "ny-mn-1",
          name: "Little Dreamers Chelsea",
          address: "45 W 25th St, New York, NY",
          phone: "+1 (555) 987-6543",
          hours: "7:30 AM - 6:30 PM",
          slug: "chelsea-campus",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        }
      ]
    },
    "California": {
      "Los Angeles": [
        {
          id: "ca-la-1",
          name: "Little Dreamers Santa Monica",
          address: "88 Ocean Ave, Santa Monica, CA",
          phone: "+1 (310) 555-0199",
          hours: "8:00 AM - 5:30 PM",
          slug: "santa-monica-campus",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        }
      ]
    }
  },
  "India": {
    "Maharashtra": {
      "Mumbai": [
        {
          id: "in-mh-mum-1",
          name: "Little Dreamers Bandra",
          address: "Hill Road, Bandra West, Mumbai",
          phone: "+91 98765 43210",
          hours: "9:00 AM - 4:00 PM",
          slug: "bandra-campus",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        }
      ],
      "Pune": [
        {
          id: "in-mh-pun-1",
          name: "Little Dreamers Koregaon Park",
          address: "Lane 7, Koregaon Park, Pune",
          phone: "+91 12345 67890",
          hours: "8:30 AM - 5:00 PM",
          slug: "koregaon-park-campus",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        }
      ]
    },
    "Karnataka": {
      "Bangalore": [
        {
          id: "in-ka-blr-1",
          name: "Little Dreamers Indiranagar",
          address: "100ft Road, Indiranagar, Bangalore",
          phone: "+91 88888 99999",
          hours: "9:00 AM - 6:00 PM",
          slug: "indiranagar-campus",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        }
      ]
    }
  }
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


// --- HEADER COMPONENT ---
const CentersHeader = () => {
  return (
    <header className="relative w-full h-[60vh] min-h-[490px] bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 flex items-center justify-center overflow-hidden">
      
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10">
            <MapPin className="w-24 h-24 text-white" />
         </motion.div>
         <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10">
            <Navigation className="w-20 h-20 text-teal-100" />
         </motion.div>
      </div>

      <div className="relative z-10 text-center px-4 mt-8">
        <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4 opacity-75" />
            <span>Our Centers</span>
        </div>

        <h1 className={`text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4 ${titleFont.className}`}>
          Find Your
          <span className="block text-teal-100 mt-2">Nearest Center</span>
        </h1>
        
        <p className="text-xl text-white/95 max-w-2xl mx-auto font-bold">
          Explore our vibrant campuses across the globe.
        </p>
      </div>

      {/* WAVE: Connects to Section 1 (Teal-50) */}
      <WaveSeparator position="bottom" color="text-teal-50" />
    </header>
  );
};


// --- MAIN PAGE COMPONENT ---
const CentersPage: React.FC = () => {
  // State for Dropdowns
  const [selectedCountry, setSelectedCountry] = useState<string>("USA");
  const [selectedState, setSelectedState] = useState<string>("New York");
  const [selectedCity, setSelectedCity] = useState<string>("Brooklyn");
  
  // State for List & Map
  const [centerList, setCenterList] = useState<Center[]>([]);
  const [activeCenter, setActiveCenter] = useState<Center | null>(null);

  // --- HANDLERS ---

  // 1. Initial Load & Country Change
  useEffect(() => {
    // Default to first available state/city when country changes
    const states = Object.keys(locationsDB[selectedCountry] || {});
    if (states.length > 0) {
      const firstState = states[0];
      setSelectedState(firstState!);
      
      const cities = Object.keys(locationsDB[selectedCountry]?.[firstState!] || {});
      if (cities.length > 0) {
        setSelectedCity(cities[0] ?? "");
      } else {
        setSelectedCity("");
      }
    } else {
      setSelectedState("");
      setSelectedCity("");
    }
  }, [selectedCountry]);

  // 2. State Change
  useEffect(() => {
    if (selectedCountry && selectedState) {
        const cities = Object.keys(locationsDB[selectedCountry]?.[selectedState] || {});
        if (cities.length > 0) {
            setSelectedCity(cities[0] ?? "");
        } else {
            setSelectedCity("");
        }
    }
  }, [selectedState, selectedCountry]);

  // 3. City Change -> Update List
  useEffect(() => {
    if (selectedCountry && selectedState && selectedCity) {
        const centers = locationsDB[selectedCountry]?.[selectedState]?.[selectedCity] || [];
        setCenterList(centers);
        if (centers.length > 0) {
            setActiveCenter(centers[0]!);
        } else {
            setActiveCenter(null);
        }
    } else {
        setCenterList([]);
        setActiveCenter(null);
    }
  }, [selectedCity, selectedState, selectedCountry]);


  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>
      
      <CentersHeader />

      {/* =========================================
          SECTION: FILTER & LIST (Teal Theme)
      ========================================= */}
      <section className="relative w-full bg-teal-50 pt-4 pb-32 overflow-hidden">
        
        {/* Background Doodle */}
        <div className="absolute inset-0 pointer-events-none opacity-10 top-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,50 100,0" fill="none" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           
           {/* --- 3-STEP DROPDOWN FILTER BAR --- */}
           <div className="max-w-5xl mx-auto mb-16 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-[2rem] shadow-xl border-4 border-teal-100">
                  
                  {/* 1. Country Dropdown */}
                  <div className="relative">
                      <label className="block text-teal-800 font-bold mb-2 ml-2 text-sm uppercase tracking-wide">Country</label>
                      <div className="relative">
                          <Globe className="absolute left-4 top-3.5 h-5 w-5 text-teal-500" />
                          <select 
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="block w-full pl-12 pr-10 py-3 text-base border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 appearance-none font-bold cursor-pointer transition-all"
                          >
                            {Object.keys(locationsDB).map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-4 top-3.5 h-5 w-5 text-teal-400 rotate-90 pointer-events-none" />
                      </div>
                  </div>

                  {/* 2. State Dropdown */}
                  <div className="relative">
                      <label className="block text-teal-800 font-bold mb-2 ml-2 text-sm uppercase tracking-wide">State</label>
                      <div className="relative">
                          <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-teal-500" />
                          <select 
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            disabled={!selectedCountry}
                            className="block w-full pl-12 pr-10 py-3 text-base border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 appearance-none font-bold cursor-pointer transition-all disabled:opacity-50"
                          >
                            {selectedCountry && Object.keys(locationsDB[selectedCountry] || {}).map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-4 top-3.5 h-5 w-5 text-teal-400 rotate-90 pointer-events-none" />
                      </div>
                  </div>

                  {/* 3. City Dropdown */}
                  <div className="relative">
                      <label className="block text-teal-800 font-bold mb-2 ml-2 text-sm uppercase tracking-wide">City</label>
                      <div className="relative">
                          <Navigation className="absolute left-4 top-3.5 h-5 w-5 text-teal-500" />
                          <select 
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            disabled={!selectedState}
                            className="block w-full pl-12 pr-10 py-3 text-base border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 appearance-none font-bold cursor-pointer transition-all disabled:opacity-50"
                          >
                            {selectedCountry && selectedState && Object.keys(locationsDB[selectedCountry]?.[selectedState] || {}).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-4 top-3.5 h-5 w-5 text-teal-400 rotate-90 pointer-events-none" />
                      </div>
                  </div>

              </div>
           </div>


           {/* --- RESULTS SECTION --- */}
           {centerList.length > 0 ? (
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-auto lg:h-[500px]">
                  
                  {/* LEFT: SCROLLABLE LIST */}
                  <div className="flex flex-col gap-6 h-full lg:overflow-y-auto pr-0 lg:pr-4 scrollbar-hide pb-2">
                     <AnimatePresence mode="wait">
                        {centerList.map((center, index) => (
                           <motion.div
                              key={center.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => setActiveCenter(center)}
                              className={`
                                relative rounded-[2rem] p-8 cursor-pointer transition-all duration-300 border-4
                                ${activeCenter?.id === center.id 
                                   ? 'bg-white border-teal-400 shadow-2xl scale-[1.02]' 
                                   : 'bg-white/60 border-transparent hover:bg-white hover:border-teal-200 hover:shadow-lg'
                                }
                              `}
                           >
                              <div className="flex items-start justify-between mb-4">
                                 <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                    <School className="w-6 h-6 text-teal-600" />
                                 </div>
                                 {activeCenter?.id === center.id && (
                                    <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                       Selected
                                    </span>
                                 )}
                              </div>

                              <h3 className={`text-2xl font-black text-slate-800 mb-2 ${titleFont.className}`}>
                                 {center.name}
                              </h3>
                              
                              <div className="space-y-3 text-slate-600 font-medium">
                                 <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                    <span>{center.address}</span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                                    <span>{center.phone}</span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-teal-500 shrink-0" />
                                    <span>{center.hours}</span>
                                 </div>
                              </div>

                              <div className="mt-6 pt-6 border-t-2 border-slate-100 flex items-center justify-between">
                                 <span className="text-sm font-bold text-slate-400">Tap to see map 👉</span>
                                 
                                 <Link href={`/centers/${center.slug}`}>
                                   <button className="bg-slate-800 hover:bg-black text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors">
                                      Visit Page <ArrowRight className="w-4 h-4" />
                                   </button>
                                 </Link>
                              </div>
                           </motion.div>
                        ))}
                     </AnimatePresence>
                  </div>


                  {/* RIGHT: STICKY MAP */}
                  {activeCenter && (
                      <motion.div 
                        className="w-full h-[400px] lg:h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl sticky top-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={activeCenter.id}
                      >
                         <iframe 
                           src={activeCenter.mapEmbed}
                           width="100%" 
                           height="100%" 
                           style={{ border: 0 }} 
                           allowFullScreen={true} 
                           loading="lazy" 
                           referrerPolicy="no-referrer-when-downgrade"
                           className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                         ></iframe>

                         <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-teal-100">
                            <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                               <MapPin className="w-5 h-5 text-rose-500 fill-rose-500" />
                               {activeCenter.name}
                            </h4>
                            <p className="text-slate-500 text-sm pl-7 truncate">{activeCenter.address}</p>
                         </div>
                      </motion.div>
                  )}

               </div>
           ) : (
               /* EMPTY STATE */
               <div className="text-center py-20 bg-white/50 rounded-[3rem] border-4 border-dashed border-teal-200">
                   <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Search className="w-10 h-10 text-teal-400" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-600">No centers found</h3>
                   <p className="text-slate-500">Please select a location above to see our centers.</p>
               </div>
           )}

        </div>

        {/* Bottom Wave */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>

    </div>
  );
};

export default CentersPage;
"use client";

import React from "react";
import { motion } from "framer-motion";
import Admissionheader from "@/components/AdmissioHeader";
import Ctasection from "@/components/HomeCta";
import boysitting from "../../public/boysitting.png"
import Image from "next/image";
import { 
  Home, 
  ChevronRight, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send,
  FileText,
  CalendarCheck,
  School,
  CheckCircle,
  Baby,
  Smile,
  BookOpen,
  GraduationCap,
  Camera,     // CCTV
  Rocket,     // Play Arena
  Wind,       // AC
  Clock,      // Daycare
  Shapes,     // Montessori
  Library,    // Library (using Book or Library if avail, else BookOpen)
  Armchair,   // Interiors
  UserCheck,  // Trained Staff
  BadgeCheck, // Verification
  Building2   // Infrastructure
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



// --- MAIN PAGE COMPONENT ---
const AdmissionPage: React.FC = () => {
  return (
    <div className={`w-full flex flex-col ${bodyFont.className}`}>
      
      <Admissionheader />

      {/* =========================================
          SECTION 1: ENQUIRY FORM (Violet Theme)
      ========================================= */}
      {/* Reduced padding: pt-20 -> pt-12, pb-32 -> pb-24 (needed for wave) */}
      <section className="relative w-full bg-violet-300 pt-12 pb-24 overflow-hidden">
         <WaveSeparator position="top" color="text-white" />
        
        <div className="absolute inset-0 pointer-events-none opacity-20 top-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M10,10 Q50,50 90,10" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2,2"/>
          </svg>
        </div>

        <div className=" mx-auto px-6 relative z-10">
           {/* Reduced margin: mb-12 -> mb-4 */}
           <div className="text-center mb-4">
           <h2 className={`text-3xl md:text-5xl font-black text-violet-900 mb-2 ${titleFont.className}`}>
             Enquiry Form
           </h2>
           <p className="text-violet-800 text-lg">
             Fill out the form below and our admissions team will contact you shortly.
           </p>
           </div>

           {/* FORM CARD */}
           <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl border-4 border-white relative"
           >
           <div className="absolute -top-12 mb-6 -right-6 w-[94px] h-[94px] flex items-center justify-center ">
                        <Image src={boysitting} alt="Boy Sitting" />

           </div>

           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
              <label className="font-bold text-slate-700 ml-2">Name</label>
              <div className="relative">
                 <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1">
              <label className="font-bold text-slate-700 ml-2">Country</label>
              <div className="relative">
                 <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <input type="text" placeholder="Country" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1">
              <label className="font-bold text-slate-700 ml-2">Phone Number</label>
              <div className="relative">
                 <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <input type="tel" placeholder="+1 234 567 890" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1">
              <label className="font-bold text-slate-700 ml-2">Email Address</label>
              <div className="relative">
                 <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <input type="email" placeholder="example@mail.com" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              </div>

              {/* City */}
              <div className="flex flex-col gap-1">
              <label className="font-bold text-slate-700 ml-2">City</label>
              <div className="relative">
                 <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <input type="text" placeholder="City" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              </div>

              {/* State */}
              <div className="flex flex-col gap-1">
              <label className="font-bold text-slate-700 ml-2">State</label>
              <div className="relative">
                 <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <input type="text" placeholder="State" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors" />
              </div>
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
              <label className="font-bold text-slate-700 ml-2">Seeking Admission For</label>
              <div className="relative">
                 <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors appearance-none">
                 <option>Little Explorers - Playgroup (2 - 3 Years)</option>
                 <option>Curious Learners - Nursery (3 - 4 Years)</option>
                 <option>Creative Thinkers - Junior Kindergarten (4 - 5 Years)</option>
                 <option>Future Leaders - Senior Kindergarten (5 - 6 Years)</option>
                 <option>Daycare</option>
                 </select>
                 <ChevronRight className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
              </div>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
              <label className="font-bold text-slate-700 ml-2">Message (Optional)</label>
              <div className="relative">
                 <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                 <textarea rows={4} placeholder="Any specific questions?" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-violet-400 transition-colors resize-none" />
              </div>
              </div>
              <div className="md:col-span-2 mt-2">
              <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                 Submit Enquiry
                 <Send className="w-5 h-5" />
              </button>
              </div>
           </form>
           </motion.div>
        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: ADMISSION PROCESS (White Theme)
      ========================================= */}
      {/* Reduced padding: py-20/32 -> py-12 */}
      <section className="w-full bg-white py-2 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
              <h2 className={`text-4xl md:text-5xl font-black text-slate-900 mb-2 ${titleFont.className}`}>
                Admission <span className="text-violet-500">Process</span>
              </h2>
              <div className="w-24 h-2 bg-violet-200 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: FileText, title: "1. Online Inquiry", desc: "Fill out the form above to express your interest." },
               { icon: School, title: "2. Campus Visit", desc: "Schedule a tour to see our vibrant environment." },
               { icon: CalendarCheck, title: "3. Interaction", desc: "A friendly interaction with the child and parents." },
               { icon: CheckCircle, title: "4. Enrollment", desc: "Complete documentation and welcome to the family!" }
             ].map((step, index) => (
                <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.2 }}
                   viewport={{ once: true }}
                   className="flex flex-col items-center text-center group"
                >
                   <div className="w-20 h-20 bg-slate-50 border-4 border-violet-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-violet-500 group-hover:border-violet-200 transition-all duration-300 shadow-lg">
                      <step.icon className="w-8 h-8 text-violet-500 group-hover:text-white transition-colors" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-800 mb-1">{step.title}</h3>
                   <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: AGE CRITERIA (Sky Blue Theme)
      ========================================= */}
      {/* Reduced padding: pt-32 -> pt-28 (clears wave), pb-32 -> pb-24 */}
      <section className="relative w-full bg-sky-300 pt-28 pb-24 overflow-hidden">
        
        {/* Top Wave: White to match previous section */}
        <WaveSeparator position="top" color="text-white" />

        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-8">
              <h2 className={`text-4xl md:text-5xl font-black text-sky-900 mb-2 ${titleFont.className}`}>
                Age Criteria
              </h2>
              <p className="text-sky-800 text-lg">Age eligibility as of June 1st, 2025</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Little Explorers  Playgroup", age: "2 - 3 Years", icon: Baby, color: "bg-rose-400" },
                { title: "Curious Learners  Nursery", age: "3 - 4 Years", icon: Smile, color: "bg-amber-400" },
                { title: "Creative Thinkers  Junior kindergarten", age: "4 - 5 Years", icon: BookOpen, color: "bg-emerald-400" },
                { title: "Future Leaders      Senior kindergarten", age: "5 - 6 Years", icon: GraduationCap, color: "bg-indigo-400" },
              ].map((item, index) => (
                 <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl text-center border-b-8 border-sky-200"
                 >
                    <div className={`w-14 h-14 ${item.color} rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-md rotate-3`}>
                       <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sky-600 font-bold bg-sky-50 py-2 rounded-full inline-block px-4 text-sm">
                      {item.age}
                    </p>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Bottom Wave: Transitions to next section (white) */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>

          <section className="w-full bg-white py-2 overflow-hidden">
            {/* <div>boy</div> */}
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto bg-rose-50 rounded-[3rem] p-8 md:p-12 border-4 border-rose-100 shadow-sm relative overflow-hidden">
              {/* Background Doodle inside card */}
              <div className="absolute -right-20 -bottom-20 opacity-10">
                 <FileText className="w-96 h-96 text-rose-500" />
              </div>

              <h2 className={`text-3xl md:text-4xl font-black text-rose-900 mb-6 text-center ${titleFont.className}`}>
                  Documents Required
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                 {[
                   "Birth Certificate of the Child",
                   "Passport Size Photos (Child & Parents)",
                   "Aadhar Card of Parents",
                   "Residence Proof",
                   "Medical Fitness Certificate",
                   "Transfer Certificate (if applicable)"
                 ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                       <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                          <CheckCircle className="w-4 h-4 text-rose-500" />
                       </div>
                       <span className="text-slate-700 font-medium text-sm">{doc}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* <div>girl</div> */}
      
      </section>


      {/* =========================================
          SECTION 4: FACILITIES (Orange Theme)
      ========================================= */}
      {/* Reduced padding: pt-32 -> pt-28, pb-32 -> pb-24 */}
      <section className="relative w-full bg-orange-100 pt-28 pb-24 overflow-hidden">
        
        {/* Top Wave: White to mask the top of the orange section */}
        <WaveSeparator position="top" color="text-white" />

        <div className="absolute inset-0 pointer-events-none opacity-10 top-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 Q50,100 100,0" fill="none" stroke="#f97316" strokeWidth="0.5" strokeDasharray="2,2"/>
             </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-8">
              <h2 className={`text-4xl md:text-5xl font-black text-orange-900 mb-2 ${titleFont.className}`}>
                Facilities
              </h2>
              <div className="w-24 h-2 bg-orange-300 rounded-full mx-auto mb-2"></div>
              <p className="text-orange-800 text-lg">World-class amenities for your child and you.</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Safe Campus", icon: Camera },
                { title: "Play Arena", icon: Rocket },
                { title: "AC Rooms", icon: Wind },
                { title: "Daycare", icon: Clock },
                { title: "Montessori", icon: Shapes },
                { title: "Library", icon: BookOpen },
                { title: "Safe Interiors", icon: Armchair },
                { title: "Trained Staff", icon: UserCheck },
                { title: "Verification", icon: BadgeCheck },
                { title: "Infrastructure", icon: Building2 },
              ].map((item, index) => (
                 <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-3xl p-4 shadow-md text-center flex flex-col items-center gap-2 border-b-4 border-orange-200"
                 >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                       <item.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm md:text-base leading-tight">
                      {item.title}
                    </span>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Bottom Wave: Transitions to White */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 5: DOCUMENTS REQUIRED (White Theme)
      ========================================= */}
      {/* Reduced padding: py-20 -> py-12 */}
  
        <Ctasection />

    </div>
  );
};

export default AdmissionPage;
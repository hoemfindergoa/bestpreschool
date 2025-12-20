'use client';

import React, { useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import { 
  Home, ChevronRight, TrendingUp, Baby, BookOpen, Hammer, Award, 
  Users, Megaphone, Globe, CheckCircle, Briefcase, DollarSign, Loader2, Star,
  ShieldCheck, GraduationCap, BarChart3, Rocket, Sparkles, Activity, Scale
} from "lucide-react";
import { Luckiest_Guy, Nunito, Caveat } from 'next/font/google';
import Image from "next/image";

// --- PARTICLES ---
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// --- IMAGES ---
import headerImage from "../public/test/668.webp"; 
import sectionImage from "../public/test/616.webp"; 

// --- FONTS ---
const bubbleFont = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['600', '800'] });
const handFont = Caveat({ subsets: ['latin'], weight: ['700'] });

// --- CONSISTENT BUBBLE TEXT COMPONENT ---
const BubbleText = ({ text, sizeClass = "text-4xl md:text-6xl" }: { text: string, sizeClass?: string }) => {
  const colors = ['text-blue-500', 'text-red-500', 'text-yellow-500', 'text-green-500', 'text-orange-500', 'text-purple-500'];
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-x-1">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`relative inline-block ${sizeClass} ${bubbleFont.className} ${colors[i % colors.length]} 
          [text-shadow:_3px_3px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]`}
        >
          {char}
          {['o', 'e', 'p', 'a', 'd', 'c', 'u'].includes(char.toLowerCase()) && (
            <span className="absolute top-[40%] left-1/2 -translate-x-1/2 flex gap-0.5 lg:gap-1 pointer-events-none">
              <span className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-black rounded-full" />
              <span className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-black rounded-full" />
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

// --- REUSABLE WAVE COMPONENT ---
const WaveSeparator = ({ color }: { color: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-20">
    <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
  </div>
);

// --- FRANCHISE HEADER ---
const FranchiseHeader = () => {
  return (
    <header className="relative w-full h-[60vh] min-h-[600px] bg-[#e0f2fe] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 text-slate-700 text-sm font-black bg-white border-2 border-black px-4 py-2 rounded-full mb-8 shadow-[4px_4px_0_0_#000]">
              <Home className="w-4 h-4" />
              <span>HOME</span>
              <ChevronRight className="w-4 h-4" />
              <span>FRANCHISE</span>
          </div>
          <BubbleText text="PARTNER WITH" sizeClass="text-5xl md:text-8xl" />
          <div className="mt-[-10px] md:mt-[-20px] mb-8">
              <BubbleText text="SUCCESS!" sizeClass="text-6xl md:text-9xl" />
          </div>
          <p className="text-xl md:text-2xl text-slate-700 font-black leading-tight [text-shadow:_1px_1px_0_#fff]">
            Join a trusted early education brand committed to excellence, innovation, and long-term success.
          </p>
        </motion.div>
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="hidden lg:flex justify-center">
          <div className="relative w-[400px] h-[400px]">
            <Image src={headerImage} alt="Franchise" fill className="object-contain drop-shadow-2xl" priority />
          </div>
        </motion.div>
      </div>
      <WaveSeparator color="#FFFDF6" />
    </header>
  );
};

// --- USP CARD COMPONENT ---
const USPCard = ({ icon: Icon, title, desc, color, shadow, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className={`bg-white rounded-[2.5rem] p-8 border-4 border-black ${shadow} flex flex-col items-center text-center group h-full`}
  >
    <div className={`w-16 h-16 rounded-2xl border-4 border-black ${color} flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000] group-hover:-translate-y-1 transition-transform`}>
       <Icon className="w-8 h-8 text-white stroke-[3px]" />
    </div>
    <h4 className={`${bubbleFont.className} text-xl mb-3 tracking-wide`}>{title}</h4>
    <p className="text-sm text-slate-600 font-bold leading-relaxed">{desc}</p>
  </motion.div>
);

export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const form = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "Playway (5 to 6 lakh)",
      property: defaultFranchise?.property || "Yes, I own commercial property"
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <div className={`w-full flex flex-col bg-[#FFFDF6] ${bodyFont.className} overflow-hidden`}>
      <FranchiseHeader />

      {/* 1. UNIQUE SELLING POINTS (USPs) SECTION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border-2 border-orange-200 mb-6 inline-block">
              Why We Lead The Industry
            </span>
            <BubbleText text="UNIQUE SELLING" />
            <div className="mt-[-10px] md:mt-[-10px]">
              <BubbleText text="POINTS (USPS)" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <USPCard icon={DollarSign} title="ZERO ROYALTY" color="bg-rose-400" shadow="shadow-[8px_8px_0_0_#e11d48]" delay={0}
              desc="We follow a 100% royalty-free structure, ensuring you keep all revenues from admissions and daycare." />
            
            <USPCard icon={TrendingUp} title="LOW OP-COST" color="bg-blue-400" shadow="shadow-[8px_8px_0_0_#2563eb]" delay={0.1}
              desc="No royalty deductions and streamlined operations ensure higher margins and fast breakeven." />

            <USPCard icon={BookOpen} title="PREMIUM CURRICULUM" color="bg-emerald-400" shadow="shadow-[8px_8px_0_0_#059669]" delay={0.2}
              desc="Expert-developed, scientifically designed curriculum promoting holistic early-childhood development." />

            <USPCard icon={Briefcase} title="CORPORATE SUPPORT" color="bg-purple-400" shadow="shadow-[8px_8px_0_0_#7c3aed]" delay={0.3}
              desc="Marketing, academics, HR, and legal are fully managed, allowing you to focus purely on growth." />

            <USPCard icon={Award} title="STRONG IDENTITY" color="bg-orange-400" shadow="shadow-[8px_8px_0_0_#ea580c]" delay={0.4}
              desc="A well-crafted brand and modern teaching methods help build immediate trust among parents." />

            <USPCard icon={GraduationCap} title="TEACHER TRAINING" color="bg-teal-400" shadow="shadow-[8px_8px_0_0_#0d9488]" delay={0.5}
              desc="Continuous training and academic audits ensure every centre maintains top-tier learning standards." />

            <USPCard icon={Activity} title="ACTIVITY-RICH" color="bg-pink-400" shadow="shadow-[8px_8px_0_0_#db2777]" delay={0.6}
              desc="Extracurriculars, STEM, and sensory play enhance creativity, confidence, and motor skills." />

            <USPCard icon={ShieldCheck} title="SECURE INFRA" color="bg-indigo-400" shadow="shadow-[8px_8px_0_0_#4f46e5]" delay={0.7}
              desc="CCTV, child-safe interiors, and strict hygiene protocols ensure absolute safety." />

            <USPCard icon={Scale} title="STABLE VENTURE" color="bg-amber-400" shadow="shadow-[8px_8px_0_0_#d97706]" delay={0.8}
              desc="Low-investment model with strong returns and operational handholding for a scalable venture." />
          </div>
        </div>
      </section>

      {/* 2. WHY PARTNER WITH US (Provided Details) */}
      <section className="py-24 relative overflow-hidden bg-blue-50/30 border-y-8 border-black">
        <Particles id="f-particles" init={particlesInit} className="absolute inset-0 z-0 pointer-events-none opacity-30"
          options={{ fullScreen: false, particles: { color: { value: ["#FF6B6B", "#4D96FF"] }, move: { enable: true, speed: 1 }, number: { value: 30 }, shape: { type: "star" }, size: { value: { min: 4, max: 10 } } } }} />
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <BubbleText text="WHY PARTNER" sizeClass="text-5xl lg:text-7xl" />
            <div className="mt-[-10px] md:mt-[-10px] mb-8">
              <BubbleText text="WITH US?" sizeClass="text-4xl lg:text-6xl" />
            </div>
            <p className="text-xl text-slate-700 font-bold mb-6 leading-relaxed">
              Choosing Best Preschool and Day Care means joining a trusted early education brand committed to excellence and innovation.
            </p>
            <p className="text-slate-500 font-bold mb-8">
              Benefit from low-risk, high-support partnerships backed by structured processes and end-to-end assistance.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { icon: ShieldCheck, text: "Quality Monitoring" },
                 { icon: GraduationCap, text: "Teacher Training" },
                 { icon: Megaphone, text: "Marketing Support" },
                 { icon: BarChart3, text: "Financial Returns" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 bg-white border-2 border-black p-3 rounded-2xl shadow-[4px_4px_0_0_#000]">
                   <item.icon className="w-5 h-5 text-emerald-500 stroke-[3px]" />
                   <span className="text-xs font-black uppercase tracking-tighter">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="rounded-[4rem] border-8 border-black overflow-hidden shadow-[20px_20px_0_0_#FFD93D]">
            <Image src={sectionImage} alt="School" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* 3. INQUIRY FORM (Emerald Block - KEPT ORIGINAL LOGIC) */}
      <section className="relative w-full bg-[#6BCB77] py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <BubbleText text="START YOUR JOURNEY" sizeClass="text-4xl md:text-7xl" />
              <p className="text-white text-xl font-black mt-4 [text-shadow:_1px_1px_0_#000]">Request our Franchise Information Brochure!</p>
           </div>
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-14 shadow-[12px_12px_0_0_#000] border-4 border-black relative">
              <div className="absolute -top-10 -right-4 w-24 h-24 bg-yellow-400 border-4 border-black rounded-[2rem] flex items-center justify-center shadow-[4px_4px_0_0_#000] -rotate-12">
                  <Briefcase className="w-12 h-12 text-black stroke-[3px]" />
              </div>

              <form  className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                     <label className="font-black text-slate-800 ml-2 text-sm uppercase tracking-wider">FULL NAME *</label>
                     <input {...register("name", { required: true })} type="text" placeholder="Your name" disabled={isLoading}
                       className={`w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 text-slate-700 font-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-y-1 transition-all outline-none ${errors.name ? 'border-red-500' : ''}`} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="font-black text-slate-800 ml-2 text-sm uppercase tracking-wider">PHONE NUMBER *</label>
                     <input {...register("phone", { required: true })} type="tel" placeholder="Your Number" disabled={isLoading}
                       className={`w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 text-slate-700 font-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-y-1 transition-all outline-none ${errors.phone ? 'border-red-500' : ''}`} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="font-black text-slate-800 ml-2 text-sm uppercase tracking-wider">EMAIL ADDRESS *</label>
                     <input {...register("email", { required: true })} type="email" placeholder="email@example.com" disabled={isLoading}
                       className={`w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 text-slate-700 font-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-y-1 transition-all outline-none ${errors.email ? 'border-red-500' : ''}`} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="font-black text-slate-800 ml-2 text-sm uppercase tracking-wider">CITY / LOCATION *</label>
                     <input {...register("city", { required: true })} type="text" placeholder="Location" disabled={isLoading}
                       className={`w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 text-slate-700 font-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-y-1 transition-all outline-none ${errors.city ? 'border-red-500' : ''}`} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-black text-slate-800 ml-2 text-sm uppercase tracking-wider">INVESTMENT BUDGET</label>
                    <select {...register("budget")} disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 text-slate-700 font-black shadow-[4px_4px_0_0_#000] outline-none">
                        <option value="Playway (5 to 6 lakh)">Playway (5 to 6 lakh)</option>
                        <option value="Montessori (6-7 lakh)">Montessori (6-7 lakh)</option>                      
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-black text-slate-800 ml-2 text-sm uppercase tracking-wider">PROPERTY STATUS</label>
                    <select {...register("property")} disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 text-slate-700 font-black shadow-[4px_4px_0_0_#000] outline-none">
                        <option value="Yes, I own commercial property">Yes, I own commercial property</option>
                        <option value="No, I will rent/lease">No, I will rent/lease</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 mt-6">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading}
                      className="w-full bg-[#FF6B6B] text-white font-black py-5 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_0_#000] active:shadow-none active:translate-y-2 transition-all flex items-center justify-center gap-3 text-2xl">
                      {isLoading ? <Loader2 className="w-8 h-8 animate-spin" /> : "REQUEST BROCHURE"}
                      {!isLoading && <CheckCircle className="w-7 h-7 stroke-[3px]" />}
                    </motion.button>
                  </div>
              </form>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
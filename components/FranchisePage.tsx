'use client';

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import { 
  Home, ChevronRight, TrendingUp, BookOpen, Award, 
  Users, Megaphone, CheckCircle, Briefcase, DollarSign, Loader2,
  ShieldCheck, GraduationCap, BarChart3, Activity, Scale
} from "lucide-react";
import { Luckiest_Guy, Nunito, Caveat } from 'next/font/google';
import Image from "next/image";
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

const BubbleText = ({ text, sizeClass = "text-4xl md:text-6xl" }: { text: string, sizeClass?: string }) => {
  const colors = ['text-blue-500', 'text-red-500', 'text-yellow-500', 'text-green-500', 'text-orange-500', 'text-purple-500'];
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-x-1">
      {text.split("").map((char, i) => (
        <span key={i} className={`relative inline-block ${sizeClass} ${bubbleFont.className} ${colors[i % colors.length]} [text-shadow:_3px_3px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]`}>
          {char}
        </span>
      ))}
    </div>
  );
};

const WaveSeparator = ({ color }: { color: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-20">
    <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
  </div>
);

const USPCard = ({ icon: Icon, title, desc, color, shadow, delay }: any) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.5 }} viewport={{ once: true }}
    className={`bg-white rounded-[2.5rem] p-8 border-4 border-black ${shadow} flex flex-col items-center text-center group h-full`}>
    <div className={`w-16 h-16 rounded-2xl border-4 border-black ${color} flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000] group-hover:-translate-y-1 transition-transform`}>
        <Icon className="w-8 h-8 text-white stroke-[3px]" />
    </div>
    <h4 className={`${bubbleFont.className} text-xl mb-3`}>{title}</h4>
    <p className="text-sm text-slate-600 font-bold leading-relaxed">{desc}</p>
  </motion.div>
);

export default function FranchisePage({ onHandleSubmit, defaultFranchise, isLoading }: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {
  const particlesInit = useCallback(async (engine: Engine) => { await loadSlim(engine); }, []);
  const { register, handleSubmit, formState: { errors } } = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "",
      property: defaultFranchise?.property || "Yes, I own commercial property"
    },
  });

  return (
    <div className={`w-full flex flex-col bg-[#FFFDF6] ${bodyFont.className} overflow-hidden`}>
      {/* HEADER */}
      <header className="relative w-full h-[60vh] min-h-[600px] bg-[#e0f2fe] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 text-slate-700 text-sm font-black bg-white border-2 border-black px-4 py-2 rounded-full mb-8 shadow-[4px_4px_0_0_#000]">
                <Home className="w-4 h-4" /> <span>HOME</span> <ChevronRight className="w-4 h-4" /> <span>FRANCHISE</span>
            </div>
            <BubbleText text="PARTNER   WITH" sizeClass="text-3xl md:text-7xl" />
            <BubbleText text="  SUCCESS!" sizeClass="text-5xl md:text-9xl" />
          </motion.div>
          <div className="hidden lg:flex justify-center relative w-[400px] h-[400px]">
            <Image src={headerImage} alt="Franchise" fill className="object-contain drop-shadow-2xl" priority />
          </div>
        </div>
        <WaveSeparator color="#FFFDF6" />
      </header>

      {/* CORE PILLARS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <BubbleText text="Our   Core   Pillers" />
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <USPCard icon={DollarSign} title="ZERO ROYALTY" color="bg-rose-400" shadow="shadow-[8px_8px_0_0_#e11d48]" delay={0} desc="100% royalty-free structure, ensuring you keep all revenues." />
            <USPCard icon={TrendingUp} title="LOW OP-COST" color="bg-blue-400" shadow="shadow-[8px_8px_0_0_#2563eb]" delay={0.1} desc="Streamlined operations ensure higher margins and fast breakeven." />
            <USPCard icon={Users} title="OUR HELPER HANDS" color="bg-purple-400" shadow="shadow-[8px_8px_0_0_#7c3aed]" delay={0.2} desc="Full support from hiring teachers to local marketing." />
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative w-full bg-[#6BCB77] py-32 border-t-8 border-black">
        <div className="container mx-auto px-6 text-center mb-16">
          <BubbleText text="START   YOUR   JOURNEY" sizeClass="text-4xl md:text-7xl" />
        </div>
        <motion.div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-14 shadow-[12px_12px_0_0_#000] border-4 border-black relative">
          <form onSubmit={handleSubmit(onHandleSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-black text-slate-800 ml-2 text-sm uppercase">Full Name *</label>
              <input {...register("name", { required: true })} placeholder="Your name" disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 font-black shadow-[4px_4px_0_0_#000] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-black text-slate-800 ml-2 text-sm uppercase">Phone *</label>
              <input {...register("phone", { required: true })} placeholder="Your Number" disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 font-black shadow-[4px_4px_0_0_#000] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-black text-slate-800 ml-2 text-sm uppercase">Email *</label>
              <input {...register("email", { required: true })} type="email" placeholder="email@example.com" disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 font-black shadow-[4px_4px_0_0_#000] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-black text-slate-800 ml-2 text-sm uppercase">City *</label>
              <input {...register("city", { required: true })} placeholder="Target City" disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 font-black shadow-[4px_4px_0_0_#000] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-black text-slate-800 ml-2 text-sm uppercase">Investment Budget *</label>
              <select {...register("budget", { required: true })} disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 font-black shadow-[4px_4px_0_0_#000] outline-none">
                <option value="10-15 Lakhs">10-15 Lakhs</option>
                <option value="15-25 Lakhs">15-25 Lakhs</option>
                <option value="Above 25 Lakhs">Above 25 Lakhs</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-black text-slate-800 ml-2 text-sm uppercase">Property Status</label>
              <select {...register("property")} disabled={isLoading} className="w-full bg-slate-50 border-4 border-black rounded-2xl py-4 px-6 font-black shadow-[4px_4px_0_0_#000] outline-none">
                <option value="Owned">Yes, I own commercial property</option>
                <option value="Rented">No, I will rent/lease</option>
              </select>
            </div>
            <div className="md:col-span-2 mt-6">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading}
                className="w-full bg-[#FF6B6B] text-white font-black py-5 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_0_#000] flex items-center justify-center gap-3 text-2xl">
                {isLoading ? <Loader2 className="w-8 h-8 animate-spin" /> : "REQUEST BROCHURE"}
                {!isLoading && <CheckCircle className="w-7 h-7 stroke-[3px]" />}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import blog1 from "../public/dragonastrostudy.png";
import blog2 from "../public/dragononastroid.png";
import blog3 from "../public/dragonplayingfootball.png";
import Link from "next/link";

// Placeholder image - replace with your actual blog thumbnails
// --- REUSABLE WAVE COMPONENT (Same as before) ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color?: string;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color = "text-white" }) => {
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
    <div className={`absolute left-0 w-full h-[60px] sm:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
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

// --- BLOG DATA ---
const blogPosts = [
  {
    id: 1,
    title: "The Power of Play-Based Learning",
    excerpt: "Discover why unstructured play is crucial for cognitive development in early childhood years.",
    date: "Nov 28, 2025",
    author: "Sarah J.",
    category: "Education",
    color: "rose", // Theme color for this card
    image: blog1,
    slug: "power-of-play-based-learning",
  },
  {
    id: 2,
    title: "Healthy Snacks for Picky Eaters",
    excerpt: "5 fun and nutritious snack recipes that your little ones will actually love to eat!",
    date: "Nov 25, 2025",
    author: "Mike T.",
    category: "Nutrition",
    color: "amber",
    image: blog2,
    slug: "healthy-snacks-picky-eaters",
  },
  {
    id: 3,
    title: "Developing Social Skills Early",
    excerpt: "Tips on how to encourage sharing, empathy, and communication in toddlers.",
    date: "Nov 20, 2025",
    author: "Emily R.",
    category: "Parenting",
    color: "blue",
    image: blog3,
    slug: "developing-social-skills-early",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="relative w-full bg-rose-500 pt-32 pb-40 overflow-hidden">
      <WaveSeparator position="top" color="text-white" />

      {/* Background Doodle - Clouds/Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
            <circle cx="100" cy="100" r="50" fill="#bae6fd" />
            <circle cx="700" cy="500" r="80" fill="#bae6fd" />
            <path d="M600,100 Q700,50 750,150" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="10,10"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-500 font-bold tracking-wider text-sm uppercase bg-sky-100 px-4 py-1 rounded-full">
              Our Blog
            </span>
            <h2 className="font-black text-4xl md:text-5xl text-slate-900 mt-4 mb-2 leading-tight">
              Latest Stories & 
              <span className="block text-sky-500 font-cursive" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Updates
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --- GRID (1 col mobile, 3 cols desktop) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -10 }}
            >
              
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className={`absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-${post.color}-500 shadow-sm flex items-center gap-1`}>
                   <Tag className="w-3 h-3" />
                   {post.category}
                </div>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Button */}
                <button className={`w-full py-3 rounded-xl bg-${post.color}-50 text-${post.color}-600 font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-${post.color}-500 group-hover:text-white transition-all duration-300`}>
                  Read More
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
            </Link>
          ))}
        </div>

      </div>

      <WaveSeparator position="bottom" color="text-white" />
    </section>
  );
};

export default BlogSection;
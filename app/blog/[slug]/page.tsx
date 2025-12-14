'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Heart } from 'lucide-react';
import blog1 from '@/public/blog1.png';
import blog2 from '@/public/blog4.png';
import blog3 from '@/public/blog3.png'; 
// --- MOCK DATA (In a real app, fetch this from a CMS or API) ---
const blogPosts = [
  {
    slug: 'power-of-play-based-learning',
    title: 'The Power of Play-Based Learning',
    category: 'Education',
    date: 'November 28, 2025',
    author: 'Ms. Sarah',
    color: 'bg-yellow-100', // Theme color for this post
    accent: 'border-yellow-400',
    image: blog1,
    content: (
      <>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          At <strong className="text-pink-500">Little Dreamers</strong>, we believe that play is the work of childhood. It is not just about having fun; it is about exploring the world, testing boundaries, and understanding how things work.
        </p>
        <h3 className="text-2xl font-bold text-purple-800 mb-4">Why Play Matters?</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Research shows that play-based learning enhances cognitive, physical, social, and emotional well-being. When children play with blocks, they learn math. When they pretend to be doctors, they practice empathy.
        </p>
        
        {/* CHARACTER IMAGE SLOT */}
        <div className="my-10 p-4 border-4 border-dashed border-yellow-400 rounded-3xl bg-white flex flex-col items-center text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
           {/* Replace src with your character image */}
           <div className="relative w-64 h-64 mb-4">
             <Image 
               src={blog1} 
               alt="Little Dreamers Character Playing" 
               fill
               className="object-contain"
             />
           </div>
           <p className="text-sm text-gray-500 font-medium italic">"Learning happens naturally when we are having fun!"</p>
        </div>

        <h3 className="text-2xl font-bold text-purple-800 mb-4">Unlocking Creativity</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Our classrooms are designed to be "Yes Environments" where creativity is encouraged. Whether it's painting a masterpiece or building a rocket ship out of cardboard, every idea is celebrated.
        </p>
      </>
    ),
  },
  {
    slug: 'healthy-snacks-picky-eaters',
    title: 'Healthy Snacks for Picky Eaters',
    category: 'Nutrition',
    date: 'November 25, 2025',
    author: 'Chef Mike',
    color: 'bg-green-100',
    accent: 'border-green-400',
    image: blog2,
    content: (
      <>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Getting little ones to eat their greens can sometimes feel like a mission to Mars! But at <strong className="text-green-600">Little Dreamers</strong>, we turn snack time into an adventure.
        </p>
        <h3 className="text-2xl font-bold text-green-800 mb-4">Make it Visual</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Kids eat with their eyes first. Try turning apple slices into "cars" using grapes for wheels, or make a "forest" out of broccoli florets.
        </p>

         {/* CHARACTER IMAGE SLOT */}
         <div className="my-10 p-4 border-4 border-dashed border-green-400 rounded-3xl bg-white flex flex-col items-center text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
           {/* Replace src with your character image */}
           <div className="relative w-64 h-64 mb-4">
             <Image 
               src={blog2} 
               alt="Little Dreamers Character Eating" 
               fill
               className="object-contain"
             />
           </div>
           <p className="text-sm text-gray-500 font-medium italic">"Yummy and good for my tummy!"</p>
        </div>

        <h3 className="text-2xl font-bold text-green-800 mb-4">Get Them Involved</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          When children help prepare the food, they are 80% more likely to try it. Let them wash the veggies or mix the batter!
        </p>
      </>
    ),
  },
  {
    slug: 'developing-social-skills-early',
    title: 'Developing Social Skills Early',
    category: 'Development',
    date: 'November 20, 2025',
    author: 'Dr. Emily',
    color: 'bg-blue-100',
    image: blog3,
    accent: 'border-blue-400',
    content: (
      <>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Sharing, listening, and taking turns—these are the building blocks of friendship. Early childhood is the critical window for developing these social superpowers.
        </p>
        <h3 className="text-2xl font-bold text-blue-800 mb-4">The Art of Sharing</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Sharing doesn't come naturally to toddlers; it's a learned skill. We practice "taking turns" rather than forced sharing, which empowers children to feel secure.
        </p>

         {/* CHARACTER IMAGE SLOT */}
         <div className="my-10 p-4 border-4 border-dashed border-blue-400 rounded-3xl bg-white flex flex-col items-center text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
           {/* Replace src with your character image */}
           <div className="relative w-64 h-64 mb-4">
             <Image 
               src={blog3}
               alt="Little Dreamers Characters Sharing" 
               fill
               className="object-contain"
             />
           </div>
           <p className="text-sm text-gray-500 font-medium italic">"Sharing makes playing more fun!"</p>
        </div>

        <h3 className="text-2xl font-bold text-blue-800 mb-4">Empathy and Feelings</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We use emotion cards and mirror play to help children identify feelings in themselves and others.
        </p>
      </>
    ),
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  // 1. Find the post based on the URL slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  // 2. Handle 404 if post doesn't exist
  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-200 selection:text-pink-900">
      
      {/* --- HERO SECTION --- */}
      <div className={`relative w-full ${post.color} rounded-b-[50px] overflow-hidden`}>
        {/* Background decorative doodles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/40 rounded-full blur-xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
            {/* Back Button */}
            <Link href="/blog">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 font-bold mb-8 bg-white/80 px-4 py-2 rounded-full w-fit hover:bg-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Blog
                </motion.button>
            </Link>

            {/* Title & Metadata */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-600 shadow-sm border border-gray-100">
                        <Tag size={14} className="text-pink-500" />
                        {post.category}
                    </span>
                    <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-600 shadow-sm border border-gray-100">
                        <Calendar size={14} className="text-blue-500" />
                        {post.date}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-sm">
                        <User size={24} className="text-gray-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Written By</p>
                        <p className="text-lg font-bold text-gray-800">{post.author}</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        
        {/* Blog Body */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-lg md:prose-xl prose-p:text-gray-600 prose-headings:text-gray-800 prose-a:text-pink-500"
        >
            {/* Featured Image Box (Top of Content) */}
            <div className={`w-full h-64 md:h-96 relative mb-12 rounded-3xl overflow-hidden border-4 ${post.accent} shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]`}>
                <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
                 {/* "Little Dreamers" sticker overlay */}
                 <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold text-pink-500 shadow-lg transform rotate-3">
                    Little Dreamers
                 </div>
            </div>

            {/* The Text Content */}
            {post.content}

        </motion.div>

        {/* --- INTERACTIVE ENDING --- */}
        <div className="mt-16 pt-10 border-t-4 border-dashed border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Did you like this story?</h3>
            <div className="flex justify-center gap-4">
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 bg-pink-100 text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-200 transition-colors"
                >
                    <Heart size={20} className="fill-current" /> Love it!
                </motion.button>
                <Link href="/contact">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors"
                    >
                        Join Little Dreamers
                    </motion.button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
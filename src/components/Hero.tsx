'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MessageSquare, ShieldCheck, Star, Award, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden hero-mesh-bg pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Decorative Blur Spheres with Ambient Pulse */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10 ambient-glow" />
      <div className="absolute top-32 right-6 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10 ambient-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-10 left-6 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-gold-100/35 rounded-full blur-3xl pointer-events-none -z-10 ambient-glow" style={{ animationDelay: '5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: High-Converting Copy & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left"
          >
            {/* Shimmer Boutique Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full animate-shimmer-badge border border-teal-200/70 text-teal-950 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
                <span>Premier Cosmetic & Advanced Dentistry in Kollam</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-slate-900 leading-[1.14] tracking-tight"
            >
              Your Healthiest, <br className="hidden sm:inline" />
              <span className="text-gradient-teal">Most Confident Smile</span> <br className="hidden sm:inline" />
              Starts Here.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Experience boutique, painless dental care led by{' '}
              <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong>. 
              From bespoke porcelain veneers and Invisalign to painless single-sitting root canals and dental implants, we craft natural, radiant smiles across 2 modern Kollam clinics.
            </motion.p>

            {/* Branch Locations Quick Mention */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs font-medium text-slate-600"
            >
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Chathinamkulam Branch</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Ezhukone Branch</span>
              </div>
            </motion.div>

            {/* High-Converting CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 hover:from-teal-800 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-900/20 hover:shadow-teal-900/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 group-hover:scale-110 transition-transform" />
                <span>Book Free Consultation</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hi%20Dr.%20Syamgeeth,%20I'd%20like%20to%20book%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/30 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp Instant Chat</span>
              </motion.a>
            </motion.div>

            {/* Trust Markers Bar Below CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 border-t border-slate-200/70 text-slate-700"
            >
              <div className="text-center lg:text-left">
                <p className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900">12,000+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Smiles Restored</p>
              </div>
              <div className="text-center lg:text-left border-x border-slate-200 px-2 sm:px-4">
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <span className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900">4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">850+ Google Reviews</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900">10+ Yrs</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Clinical Mastery</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Doctor Showcase with Real Photo Always Visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
              
              {/* Outer Card Frame (badges float outside without being clipped) */}
              <div className="relative bg-gradient-to-b from-white via-white to-slate-50 rounded-3xl p-3 sm:p-4 border border-teal-100 shadow-2xl group">
                
                {/* Doctor Photograph with Explicit Height & Aspect Ratio */}
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden bg-slate-200 shadow-inner">
                  <Image
                    src="/images/dr-syamgeeth.png"
                    alt="Dr. Syamgeeth B R - Aesthetic Dentist and Smile Designer Kollam"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-teal-950/90 via-teal-950/45 to-transparent pointer-events-none" />
                  
                  {/* Name Overlay in Photo */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white z-10">
                    <p className="text-[11px] uppercase tracking-wider text-teal-300 font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-gold-warm" />
                      Chief Cosmetic Dentist & Founder
                    </p>
                    <p className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                      Dr. Syamgeeth B R
                    </p>
                    <p className="text-[11px] sm:text-xs text-teal-100/90">
                      BDS | Smile Design Specialist | Kollam
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: Painless Tech (Floating Top-Left) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 sm:top-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl border border-teal-100 flex items-center gap-2.5 sm:gap-3 z-20 pointer-events-auto"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-800">100% Painless Tech</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500">Gentle Micro-Anesthesia</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Instagram Community (Floating Bottom-Right) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -right-3 sm:bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl border border-teal-100 flex items-center gap-2.5 sm:gap-3 z-20 pointer-events-auto"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm shrink-0">
                    12k
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-800">@dr.syamgeeth</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500">Instagram Smile Gallery</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

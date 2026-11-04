'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  BadgePercent,
  CheckCircle2
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Cpu,
      title: "Digital 3D Smile Architecture",
      desc: "Say goodbye to uncomfortable rubber impression trays. High-speed 3D intraoral scanners capture your tooth contours with micron precision."
    },
    {
      icon: Sparkles,
      title: "100% Painless Micro-Anesthesia",
      desc: "Gentle topical pre-numbing coupled with computer-controlled flow rate ensures you barely feel even a pinprick throughout your session."
    },
    {
      icon: ShieldCheck,
      title: "6-Stage Hospital Sterilization",
      desc: "Autoclave pouching at 134°C, ultrasonic enzymatic cleansing, UV operatory disinfection, and 100% single-use consumables for every patient."
    },
    {
      icon: BadgePercent,
      title: "Transparent, Honest Pricing",
      desc: "Every procedure is detailed in writing upfront. No unexpected add-ons or hidden lab costs—just clear, fair medical value."
    },
    {
      icon: HeartHandshake,
      title: "Gentle Chairside Compassion",
      desc: "We understand dental anxiety. Dr. Syamgeeth and our nursing staff listen attentively, never rush, and pause whenever you need."
    },
    {
      icon: Clock,
      title: "Single-Sitting Efficiencies",
      desc: "Advanced rotary endodontics and in-clinic finishing allow many root canals and cosmetic touch-ups to be concluded in a single visit."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>The Gold Standard of Modern Dentistry</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Why Patients Across Kollam Trust Dr. Syamgeeth
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            We blend boutique wellness hospitality with hospital-grade clinical rigor. Your comfort and long-term oral health always come first.
          </p>
        </motion.div>

        {/* 6 Feature Cards with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center group-hover:bg-teal-900 group-hover:text-white transition-all shadow-xs group-hover:scale-105">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Clinical Standard Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

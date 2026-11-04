'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, HeartHandshake, Building2, Star } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Award,
      title: "10+ Years Excellence",
      subtitle: "Aesthetic Dentistry Mastery",
      highlight: "Experienced"
    },
    {
      icon: HeartHandshake,
      title: "12,000+ Patients",
      subtitle: "Happy Smiles in Kerala",
      highlight: "Trusted"
    },
    {
      icon: Star,
      title: "4.9 Google Rating",
      subtitle: "850+ Verified Reviews",
      highlight: "Top Rated"
    },
    {
      icon: ShieldCheck,
      title: "6-Stage Sterilization",
      subtitle: "Class B Autoclave Protocol",
      highlight: "100% Sterile"
    },
    {
      icon: Building2,
      title: "2 Kollam Clinics",
      subtitle: "Chathinamkulam & Ezhukone",
      highlight: "Convenient"
    }
  ];

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-slate-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-slate-50/60 hover:bg-teal-50/70 border border-slate-100/80 hover:border-teal-200 transition-colors group cursor-default"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-teal-800 flex items-center justify-center shrink-0 group-hover:bg-teal-900 group-hover:text-white transition-all shadow-2xs group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-teal-700 block">
                    {item.highlight}
                  </span>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-snug truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

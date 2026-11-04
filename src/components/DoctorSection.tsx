'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Instagram, 
  Calendar, 
  GraduationCap 
} from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export default function DoctorSection({ onOpenBooking }: DoctorSectionProps) {
  const credentials = [
    "Bachelor of Dental Surgery (BDS) with Academic Distinction",
    "Certified Specialist in Digital Smile Design (DSD) & Porcelain Veneers",
    "Fellow in Micro-Endodontics & Advanced Rotary Root Canal Protocols",
    "Certified Clear Aligner & Invisible Orthodontics Practitioner",
    "10+ Years of High-Volume Clinical Practice across Kollam, Kerala"
  ];

  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden" id="about-doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Doctor Portrait & Interactive Social Badges */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/15 via-sky-300/15 to-gold-400/15 rounded-3xl blur-xl" />
              
              <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xl group">
                <div className="relative w-full h-[440px] sm:h-[490px] bg-slate-200">
                  <Image
                    src="/images/dr-syamgeeth.png"
                    alt="Dr. Syamgeeth B R - Chief Dental Surgeon"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle lower gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <p className="font-serif text-lg sm:text-xl font-bold">Dr. Syamgeeth B R</p>
                    <p className="text-xs text-teal-200">Cosmetic Dentist & Smile Specialist</p>
                  </div>
                </div>

                {/* Instagram Live Community Pill */}
                <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white flex items-center gap-1">
                        @{CLINIC_INFO.instagram}
                        <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse" />
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400">12.4K Followers • Smile Vlogs</p>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Follow
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography & Clinical Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200/60 shadow-2xs">
              <GraduationCap className="w-4 h-4 text-teal-700" />
              <span>Meet Your Doctor</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              &quot;Every smile has a unique anatomy. My mission is to preserve nature and elevate confidence.&quot;
            </h2>

            <div className="space-y-3 sm:space-y-4 text-slate-600 text-xs sm:text-base leading-relaxed">
              <p>
                Dr. Syamgeeth B R is one of Kollam’s foremost aesthetic dental surgeons, renowned for his gentle touch, meticulous eye for facial balance, and dedication to painless dentistry.
              </p>
              <p>
                Having transformed more than 12,000 smiles over the past decade, Dr. Syamgeeth blends digital precision dentistry with a calming, boutique chairside approach that instantly puts even the most anxious patients at ease.
              </p>
            </div>

            {/* Qualifications list */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Credentials & Advanced Training:
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-700">
                {credentials.map((cred, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span>{cred}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Doctor CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-semibold text-sm shadow-lg shadow-teal-900/15 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Consult with Dr. Syamgeeth</span>
              </motion.button>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-900 text-sm font-semibold transition-all flex items-center justify-center text-center"
                >
                  Read Full Clinical Story
                </Link>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

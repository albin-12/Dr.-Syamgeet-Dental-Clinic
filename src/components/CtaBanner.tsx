'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export default function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none ambient-glow" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none ambient-glow" style={{ animationDelay: '4s' }} />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800/80 text-teal-200 text-xs font-semibold border border-teal-700/60 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-gold-warm animate-pulse" />
          <span>Priority Appointments Available This Week</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          Ready for a Healthier, <br className="hidden sm:inline" />
          More Radiant Smile?
        </h2>

        <p className="text-xs sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed px-2">
          Schedule your comprehensive digital smile consultation with Dr. Syamgeeth B R at our Chathinamkulam or Ezhukone clinic. No waiting, zero judgment, and completely painless.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-100 text-teal-950 font-bold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-800" />
            <span>Book Consultation Now</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hello%20Dr.%20Syamgeeth,%20I'd%20like%20to%20book%20an%20appointment`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Direct WhatsApp Booking</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl border border-teal-700/80 hover:bg-teal-800/50 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-teal-300" />
            <span>Call {CLINIC_INFO.phone}</span>
          </motion.a>
        </div>

        {/* Safety & Comfort badge */}
        <div className="pt-4 sm:pt-6 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-teal-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>100% Confidential • Pain-Free Micro-Technology • Sterile Class B Hospital Autoclaves</span>
        </div>

      </motion.div>
    </section>
  );
}

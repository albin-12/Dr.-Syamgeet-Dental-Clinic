'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TREATMENT_STEPS } from '@/data/clinicData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TreatmentProcessProps {
  onOpenBooking: () => void;
}

export default function TreatmentProcess({ onOpenBooking }: TreatmentProcessProps) {
  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Smooth, Transparent Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Your Seamless Treatment Journey
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            From your very first smile consultation to final reveal, here is what you can expect at our Kollam clinics.
          </p>
        </motion.div>

        {/* 4 Steps Timeline with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 relative">
          {TREATMENT_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative bg-slate-50 rounded-3xl p-5 sm:p-7 border border-slate-200/70 hover:border-teal-300 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-teal-900 group-hover:text-teal-700 transition-colors">
                  {step.step}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-teal-800 shadow-2xs">
                  {step.time}
                </span>
              </div>

              {/* Step Info */}
              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress bar line indicator */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(idx + 1) * 25}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                  className="bg-gradient-to-r from-teal-800 to-teal-600 h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 sm:mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Begin Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}

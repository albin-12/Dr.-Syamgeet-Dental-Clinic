'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/clinicData';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200/60 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Loved by Over 12,000 Happy Smiles
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Read honest stories from patients who experienced Dr. Syamgeeth&apos;s gentle care in Kollam.
          </p>
        </motion.div>

        {/* Highlight Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
          <Quote className="absolute top-4 right-5 sm:top-6 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 text-teal-100/60 pointer-events-none" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8"
            >
              {/* Avatar & Profile */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-teal-50 shadow-md">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-serif text-base sm:text-lg font-bold text-slate-900 mt-2.5">{current.name}</p>
                <p className="text-xs text-slate-500">{current.location}</p>
                <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full mt-1.5 border border-teal-100">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Patient</span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="space-y-3 sm:space-y-4 text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">
                    {current.service}
                  </span>
                </div>

                <blockquote className="font-serif italic text-base sm:text-xl text-slate-800 leading-relaxed">
                  &ldquo;{current.comment}&rdquo;
                </blockquote>

                <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                  Reviewed {current.date} on Google Reviews
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-100">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-6 sm:w-8 bg-teal-900' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={prev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-teal-400 hover:bg-teal-50 flex items-center justify-center text-slate-600 hover:text-teal-900 transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={next}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 hover:border-teal-400 hover:bg-teal-50 flex items-center justify-center text-slate-600 hover:text-teal-900 transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '@/data/clinicData';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export default function BeforeAfterSlider({ onOpenBooking }: BeforeAfterSliderProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(x, rect.width));
    const percentage = (clamped / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Real Clinical Cases by Dr. Syamgeeth</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Witness Real Smile Transformations
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Drag the interactive slider left and right to see how bespoke porcelain veneers, clear aligners, and laser restorations revive natural confidence.
          </p>

          {/* Smooth Case Switcher Tabs with LayoutId */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
            {BEFORE_AFTER_CASES.map((c, index) => {
              const isActive = activeCaseIndex === index;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCaseIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBeforeAfterCase"
                      className="absolute inset-0 bg-teal-900 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{c.treatment}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Comparison Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-3.5 sm:p-6 shadow-xl border border-slate-100"
        >
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-inner bg-slate-900 touch-none"
          >
            {/* After Image (Full width background) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`after-${activeCase.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCase.afterImage}
                  alt={`${activeCase.title} - After Transformation`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-teal-900/90 text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md border border-teal-500/30">
                  After: Dr. Syamgeeth
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Before Image (Clipped by slider percentage) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[340px] sm:min-w-[850px]">
                <Image
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} - Before Treatment`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-900/80 text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
                Before Treatment
              </div>
            </div>

            {/* Vertical Divider Line with Floating Circle Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full shadow-2xl border-3 sm:border-4 border-teal-900 flex items-center justify-center text-teal-900">
                <div className="flex items-center -space-x-1 text-teal-900">
                  <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            </div>

            {/* Mobile Touch Instruction Pill */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/65 backdrop-blur-md text-white/95 text-[10px] sm:text-[11px] px-3 py-1 rounded-full pointer-events-none flex items-center gap-1.5 sm:hidden shadow-md">
              <span>↔ Touch & slide to compare</span>
            </div>
          </div>

          {/* Case Detail Banner Below Slider */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-700">
                  {activeCase.timeframe}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                  Bespoke Porcelain Smile Architecture
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-xl font-bold text-slate-900 mt-0.5">
                {activeCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                {activeCase.summary}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto shrink-0 px-5 py-3 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-900/15 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Design My Smile</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

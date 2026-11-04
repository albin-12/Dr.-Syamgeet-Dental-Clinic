'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_INFO } from '@/data/clinicData';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react';

interface BranchLocatorProps {
  onOpenBooking: (branchName?: string) => void;
}

export default function BranchLocator({ onOpenBooking }: BranchLocatorProps) {
  const [selectedBranchId, setSelectedBranchId] = useState(CLINIC_INFO.branches[0].id);

  const activeBranch = CLINIC_INFO.branches.find((b) => b.id === selectedBranchId) || CLINIC_INFO.branches[0];

  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden" id="branches">
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
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Convenient Kollam Locations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Visit Us at 2 Modern Clinics Across Kollam
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed px-2">
            Choose the clinic closest to you. Both centers offer identical high standards of painless dental care, advanced sterilization, and digital imaging.
          </p>

          {/* Sliding Pill Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 gap-1 mt-2">
            {CLINIC_INFO.branches.map((b) => {
              const isActive = selectedBranchId === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBranchIndicator"
                      className="absolute inset-0 bg-teal-900 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{b.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Branch Details Card & Map */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-50 rounded-3xl border border-slate-200/80 p-5 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Details */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-700">
                  {activeBranch.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                  {activeBranch.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Landmark: <strong className="text-slate-800">{activeBranch.landmark}</strong>
                </p>
              </div>

              <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Clinic Address</p>
                    <p className="text-slate-600">{activeBranch.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Consultation Timings</p>
                    <p className="text-slate-600">{activeBranch.timings}</p>
                    <p className="text-[11px] text-slate-400">Sunday by Prior Appointment Only</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Reception & Desk</p>
                    <p className="text-slate-600">{activeBranch.phone}</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onOpenBooking(activeBranch.name)}
                  className="flex-1 py-3 px-5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Book at {activeBranch.name.split(' ')[0]}</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  href={activeBranch.mapDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl border border-slate-300 hover:border-teal-400 bg-white text-slate-700 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-teal-700" />
                  <span>Get Directions</span>
                </motion.a>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-1 flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">Prefer WhatsApp to book?</p>
                  <a
                    href={`https://wa.me/91${activeBranch.whatsapp}?text=Hi%20Dr.%20Syamgeeth,%20I'd%20like%20to%20visit%20the%20${encodeURIComponent(activeBranch.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline font-bold"
                  >
                    WhatsApp this branch directly →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Canvas */}
            <div className="lg:col-span-7 h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative bg-slate-200">
              <iframe
                src={activeBranch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${activeBranch.name}`}
                className="w-full h-full"
              />
              <a
                href={activeBranch.mapDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 shadow-md flex items-center gap-1.5 hover:bg-white"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

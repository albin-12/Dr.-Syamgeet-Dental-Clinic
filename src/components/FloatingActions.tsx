'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Orb */}
      <aside aria-label="Quick contact" className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hi%20Dr.%20Syamgeeth,%20I'd%20like%20to%20inquire%20about%20an%20appointment`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-2xl shadow-emerald-900/35"
          aria-label="Direct WhatsApp Chat"
        >
          {/* Animated ping ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
          <MessageSquare className="w-7 h-7" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </motion.a>
      </aside>

      {/* Mobile Bottom Fixed Action Bar with Safe Area Inset Support */}
      <nav
        aria-label="Mobile quick actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/92 backdrop-blur-xl border-t border-slate-200/90 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center gap-2"
      >
        <motion.a
          whileTap={{ scale: 0.92 }}
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="p-3 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center shadow-2xs border border-slate-200/70"
          aria-label="Call clinic directly"
        >
          <Phone className="w-5 h-5 text-teal-800" />
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.94 }}
          href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hello%20Dr%20Syamgeeth%20Dental%20Studio`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-700/25"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </motion.a>

        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={onOpenBooking}
          className="flex-1 py-3 px-3 rounded-2xl bg-gradient-to-r from-teal-900 to-teal-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-900/20 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-teal-300" />
          <span>Book Visit</span>
        </motion.button>
      </nav>
    </>
  );
}

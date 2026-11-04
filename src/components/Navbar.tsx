'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, MapPin, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';
import AppointmentModal from './AppointmentModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Doctor', href: '/about' },
    { name: 'Smile Gallery', href: '/gallery' },
    { name: 'Contact & Branches', href: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950 text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-teal-800/40 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-teal-200/90 font-medium">
              Accepting Patients Across 2 Kollam Clinics:
            </span>
            <span className="font-semibold text-white">
              Chathinamkulam & Ezhukone
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-teal-200/90">
            <a
              href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hi%20Dr.%20Syamgeeth,%20I'd%20like%20to%20inquire%20about%20a%20dental%20appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 81293 69627</span>
            </a>
            <span className="text-teal-700">|</span>
            <span className="text-teal-300 font-light">
              Mon–Sat: 9:30 AM – 7:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-soft-sm py-2.5 sm:py-3.5'
            : 'bg-white/90 backdrop-blur-md py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 flex items-center justify-center text-white shadow-md shadow-teal-900/15"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold-warm" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-900 transition-colors">
                  Dr. Syamgeeth
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-teal-700 -mt-0.5 sm:-mt-1">
                  Dental Studio & Smile Design
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-all relative py-1 ${
                      isActive
                        ? 'text-teal-900 font-semibold'
                        : 'text-slate-600 hover:text-teal-800'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-800 to-teal-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Group Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-teal-900 hover:bg-teal-50/70 text-xs font-semibold transition-all border border-slate-200/80"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call Clinic</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-800 hover:to-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-teal-900/15 hover:shadow-teal-900/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Appointment</span>
              </motion.button>
            </div>

            {/* Mobile Actions Right */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-teal-900 text-white text-xs font-semibold sm:hidden flex items-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-300" />
                <span>Book</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Drawer with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden border-b border-slate-200/80 bg-white/98 backdrop-blur-xl px-5 pt-3 pb-8 space-y-4 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col space-y-1 pt-2">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-teal-50 text-teal-900 font-bold border border-teal-100'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-teal-700' : 'text-slate-300'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Two Branches Quick Cards in Mobile Menu */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                  2 Clinics in Kollam:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px]">
                    <p className="font-bold text-slate-800">Chathinamkulam</p>
                    <p className="text-slate-500 text-[10px]">Near Mujahid Masjid</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px]">
                    <p className="font-bold text-slate-800">Ezhukone</p>
                    <p className="text-slate-500 text-[10px]">Archana Building</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="py-3 px-3 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-2 text-xs font-bold text-slate-800 shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Call Direct</span>
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hello%20Dr%20Syamgeeth%20Dental%20Studio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl bg-emerald-600 text-white flex items-center justify-center gap-2 text-xs font-bold shadow-md shadow-emerald-700/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-900 to-teal-800 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Book Consultation Slot</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

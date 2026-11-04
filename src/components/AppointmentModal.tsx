'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '@/data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedBranch?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedService,
  preselectedBranch,
}: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES_DATA[0].title);
  const [branch, setBranch] = useState(preselectedBranch || CLINIC_INFO.branches[0].name);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `Hello Dr. Syamgeeth Dental Studio,\n\nI would like to book a dental consultation:\n` +
      `• Patient Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Preferred Branch: ${branch}\n` +
      `• Service: ${service}\n` +
      `• Preferred Date: ${date || 'Earliest Available'}\n` +
      `• Preferred Time: ${time}\n` +
      (notes ? `• Note: ${notes}\n` : '') +
      `\nPlease confirm the slot availability.`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        window.open(`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${waText}`, '_blank');
      }, 1000);
    }, 500);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-teal-100 max-h-[92vh] flex flex-col"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950 px-5 py-5 sm:px-6 sm:py-6 text-white relative shrink-0">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={resetAndClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800/80 text-teal-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 border border-teal-700/60 shadow-2xs">
                <Sparkles className="w-3 h-3 text-gold-400" />
                Priority Appointment Desk
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                Schedule Your Consultation
              </h2>
              <p className="text-xs sm:text-sm text-teal-100/90 mt-0.5">
                Choose your preferred Kollam clinic with Dr. Syamgeeth B R.
              </p>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              {isSubmitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800">
                    Booking Request Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{name}</strong>. Connecting you directly to Dr. Syamgeeth&apos;s priority WhatsApp desk for <strong>{branch}</strong>.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                    <a
                      href={`https://wa.me/91${CLINIC_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Open WhatsApp Directly
                    </a>
                    <button
                      onClick={resetAndClose}
                      className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya Nair"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-base sm:text-sm text-slate-800 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-base sm:text-sm text-slate-800 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Branch Selection */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Select Clinic Branch (Kollam) *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {CLINIC_INFO.branches.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setBranch(b.name)}
                          className={`p-2.5 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                            branch === b.name
                              ? 'border-teal-600 bg-teal-50/80 ring-2 ring-teal-600/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${branch === b.name ? 'text-teal-700' : 'text-slate-400'}`} />
                          <div>
                            <p className="text-xs font-bold text-slate-800">{b.name}</p>
                            <p className="text-[10px] text-slate-500">{b.landmark}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Required Service / Treatment *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-base sm:text-sm text-slate-800 transition-all bg-slate-50/50"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.tag})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-base sm:text-sm text-slate-800 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-base sm:text-sm text-slate-800 transition-all bg-slate-50/50"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                        <option value="Emergency (Same Day Urgent)">Emergency (Same Day Urgent)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Notes or concerns (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Sensitivity or dental anxiety..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none text-base sm:text-sm text-slate-800 transition-all bg-slate-50/50 resize-none"
                    />
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-teal-900 to-teal-800 hover:from-teal-800 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-900/20 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-teal-200" />
                          <span>Request Slot & Connect on WhatsApp</span>
                        </>
                      )}
                    </motion.button>
                    <p className="text-center text-[10px] sm:text-[11px] text-slate-400">
                      ⚡ Quick confirmation within 15 minutes during operating hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

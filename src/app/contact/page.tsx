'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Navigation, 
  Sparkles, 
  ShieldAlert,
  Send
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '@/data/clinicData';
import FloatingActions from '@/components/FloatingActions';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState(CLINIC_INFO.branches[0].name);
  const [service, setService] = useState(SERVICES_DATA[0].title);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Hello Dr. Syamgeeth Dental Studio,\n\nI would like to book an appointment via the website contact form:\n` +
      `• Patient Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Branch: ${branch}\n` +
      `• Service: ${service}\n` +
      `• Preferred Date: ${date || 'Earliest Slot'}\n` +
      `• Preferred Time: ${time}\n` +
      (message ? `• Message: ${message}\n` : '') +
      `\nPlease let me know the appointment confirmation.`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/91${CLINIC_INFO.whatsapp}?text=${waText}`, '_blank');
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold border border-teal-700/60">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span>We&apos;re Here to Help</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Contact & Visit Our Clinics in Kollam
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Choose either our Chathinamkulam or Ezhukone branch. Book online, chat on WhatsApp, or call our priority desk directly.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Booking Form + 2 Branches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Appointment Booking Form */}
          <div className="lg:col-span-7 bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Direct Consultation Desk</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Book Your Appointment Online
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out your preferred details below. You will receive immediate WhatsApp confirmation.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white p-8 rounded-2xl border border-teal-200 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Appointment Details Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Opening WhatsApp to connect you directly with Dr. Syamgeeth&apos;s clinic desk for the <strong>{branch}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Pillai"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Select Clinic Branch (Kollam) *
                    </label>
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none"
                    >
                      {CLINIC_INFO.branches.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name} ({b.landmark})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Desired Treatment / Service *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Time Window
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Questions, Symptoms or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you'd like Dr. Syamgeeth to look into..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:border-teal-600 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-semibold text-sm shadow-lg shadow-teal-900/15 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>Submit & Confirm on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Both Branches Addresses, Hotline & Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Hotline Box */}
            <div className="bg-gradient-to-br from-teal-900 to-teal-950 text-white p-6 rounded-3xl shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300">
                <Phone className="w-4 h-4" />
                <span>Direct Clinical Phone & WhatsApp</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">
                Speak Directly with Dr. Syamgeeth
              </h3>
              <p className="text-xs text-teal-100/80 leading-relaxed">
                For rapid consultations, second opinions, or emergency tooth pain relief, reach out anytime.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-white text-teal-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-800" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/91${CLINIC_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Branch 1 Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Branch 01
                </span>
                <span className="text-xs text-slate-500">Kollam</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900">
                Chathinamkulam Branch
              </h4>
              <p className="text-xs text-slate-600">
                Near Mujahid Masjid, Chathinamkulam, Kollam, Kerala 691005
              </p>
              <p className="text-xs text-slate-500">
                🕒 Mon – Sat: 9:30 AM – 7:00 PM
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Chathinamkulam+Kollam+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Branch 2 Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Branch 02
                </span>
                <span className="text-xs text-slate-500">Kollam</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900">
                Ezhukone Branch
              </h4>
              <p className="text-xs text-slate-600">
                Archana Building, Ezhukone, Kollam, Kerala 691505
              </p>
              <p className="text-xs text-slate-500">
                🕒 Mon – Sat: 10:00 AM – 7:30 PM
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Archana+Building+Ezhukone+Kollam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Floating CTA */}
      <FloatingActions onOpenBooking={() => {}} />
    </div>
  );
}

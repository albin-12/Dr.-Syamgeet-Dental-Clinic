'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Zap, 
  Sun, 
  HeartHandshake, 
  CheckCircle, 
  AlertCircle, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Award,
  Phone
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '@/data/clinicData';
import AppointmentModal from '@/components/AppointmentModal';
import FloatingActions from '@/components/FloatingActions';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Smile,
    ShieldCheck,
    Zap,
    Sun,
    HeartHandshake,
    CheckCircle,
    AlertCircle,
  };

  const handleBook = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Services Hero Header */}
      <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold border border-teal-700/60">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span>Comprehensive Dental Mastery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Our Dental Services & Treatments
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Every procedure is performed personally by Dr. Syamgeeth B R with computerized precision, strict sterilization, and our signature painless protocol across our 2 Kollam clinics.
          </p>
        </div>
      </section>

      {/* Doctor Spotlight Banner on Services Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-700/50">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-teal-300/60 shadow-lg shrink-0 bg-slate-800">
              <Image
                src="/images/dr-syamgeeth.png"
                alt="Dr. Syamgeeth B R - Consultation"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-700/80 text-teal-200 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Award className="w-3 h-3 text-gold-warm" />
                Led Personally by
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Dr. Syamgeeth B R
              </h3>
              <p className="text-xs text-teal-100/90">
                BDS | Cosmetic Dentist & Smile Designer • 10+ Years Experience
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                setSelectedService(undefined);
                setModalOpen(true);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-teal-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-800" />
              <span>Book Doctor Consultation</span>
            </button>
            <a
              href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hi%20Dr.%20Syamgeeth,%20I'd%20like%20to%20discuss%20a%20treatment%20plan`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services List Details with Solid Image Heights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 sm:space-y-20">
        {SERVICES_DATA.map((service, index) => {
          const Icon = iconMap[service.iconName] || Sparkles;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Media Column with Fixed Explicit Height */}
              <div className={`lg:col-span-5 relative ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Tag Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-900 uppercase tracking-wider shadow-sm">
                    {service.tag}
                  </div>

                  {/* Doctor badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-teal-200">Dr. Syamgeeth Protocol</span>
                    <span className="text-[11px] bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-sm">Painless Care</span>
                  </div>
                </div>
              </div>

              {/* Information Column */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-900 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-teal-700 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Benefits Pill list */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Clinical Benefits:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[11px]">Typical Duration:</span>
                    <strong className="text-slate-800">{service.duration}</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 block text-[11px]">Recommended For:</span>
                    <strong className="text-slate-800 line-clamp-1">{service.idealFor}</strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleBook(service.title)}
                    className="px-6 py-3 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Calendar className="w-4 h-4 text-teal-300" />
                    <span>Book Consultation for this Treatment</span>
                  </button>

                  <a
                    href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hi%20Dr.%20Syamgeeth,%20I'd%20like%20to%20know%20more%20about%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl border border-slate-300 hover:border-emerald-500 bg-white text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Floating CTA & Modal */}
      <FloatingActions onOpenBooking={() => setModalOpen(true)} />
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}

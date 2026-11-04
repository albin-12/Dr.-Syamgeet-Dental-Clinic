'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';
import AppointmentModal from '@/components/AppointmentModal';
import FloatingActions from '@/components/FloatingActions';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const milestones = [
    { year: "2014", title: "BDS Academic Distinction", desc: "Graduated with honors in conservative dentistry and aesthetic smile restoration." },
    { year: "2017", title: "Advanced Endodontics Fellowship", desc: "Pioneered single-visit microscopic rotary root canal techniques." },
    { year: "2020", title: "Digital Smile Design Certification", desc: "Adopted computerized facial symmetry and clear aligner therapies." },
    { year: "2024", title: "Two Dedicated Kollam Studios", desc: "Operating premier clinical facilities at Chathinamkulam and Ezhukone." }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold border border-teal-700/60">
            <Award className="w-3.5 h-3.5 text-gold-warm" />
            <span>Excellence in Dental Artistry</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            About Dr. Syamgeeth & Our Studio
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Redefining the dental experience in Kollam through calm, compassionate care, digital technology, and bespoke smile transformations.
          </p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-200">
              <Image
                src="/images/dr-syamgeeth.png"
                alt="Dr. Syamgeeth B R"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p className="font-serif text-2xl font-bold">Dr. Syamgeeth B R</p>
                <p className="text-xs text-teal-300">BDS | Chief Aesthetic Surgeon</p>
                <p className="text-xs text-slate-300 mt-1">10+ Years Experience • 12,000+ Treated Smiles</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              A Gentle, Boutique Approach to Modern Dentistry
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Dr. Syamgeeth founded his dental practice in Kollam with a clear philosophy: dental appointments should never be cold, intimidating, or painful. By blending relaxing, boutique spa-like hospitality with state-of-the-art dental technology, our clinics provide an anxiety-free sanctuary.
              </p>
              <p>
                As an aesthetic and cosmetic specialist, Dr. Syamgeeth has dedicated his career to studying facial harmony, tooth shade translucency, and conservative smile design. Whether crafting paper-thin porcelain veneers, straightening teeth invisibly with aligners, or restoring chewing function with titanium dental implants, every procedure is executed with artistic precision.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
                <ShieldCheck className="w-6 h-6 text-teal-700 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Painless Guarantee</h3>
                <p className="text-xs text-slate-600 mt-1">Micro-anesthesia and gentle techniques ensure completely relaxed treatments.</p>
              </div>
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
                <Cpu className="w-6 h-6 text-teal-700 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Digital Precision</h3>
                <p className="text-xs text-slate-600 mt-1">3D intraoral scans and digital smile simulations before any tooth preparation.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-semibold text-sm shadow-md cursor-pointer transition-all"
              >
                Book Consultation with Doctor
              </button>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-teal-800 hover:text-teal-900"
              >
                View Instagram Reels & Cases →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Clinical Journey Timeline */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              A Decade of Clinical Excellence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Continual education, cutting-edge certifications, and patient trust across Kollam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                <span className="font-serif text-2xl font-bold text-teal-800">{m.year}</span>
                <h3 className="font-bold text-slate-900 text-sm mt-2">{m.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Two Branches Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Our 2 Modern Clinics in Kollam
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Both branches are equipped with identical hospital-grade sterilization and modern dental suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLINIC_INFO.branches.map((b) => (
            <div key={b.id} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{b.tagline}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">{b.name}</h3>
              <p className="text-xs sm:text-sm text-slate-600">{b.address}</p>
              <p className="text-xs text-slate-500">Landmark: <strong>{b.landmark}</strong></p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  Book at This Branch
                </button>
                <a
                  href={b.mapDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                >
                  View Route Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating CTA & Modal */}
      <FloatingActions onOpenBooking={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

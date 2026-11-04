'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Calendar, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_CASES, CLINIC_INFO } from '@/data/clinicData';
import AppointmentModal from '@/components/AppointmentModal';
import FloatingActions from '@/components/FloatingActions';

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      category: 'Veneers',
      title: 'Full Upper Arch Porcelain Laminates',
      desc: 'Restored natural translucency and fixed fluorosis discoloration in 7 days.',
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      badge: 'Signature Veneers'
    },
    {
      id: 2,
      category: 'Aligners',
      title: 'Clear Aligner Orthodontic Realignment',
      desc: 'Corrected midline crowding and bite alignment in 8 months without braces.',
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      badge: 'Invisalign Treatment'
    },
    {
      id: 3,
      category: 'Whitening',
      title: 'Zoom Laser In-Office Whitening',
      desc: 'Lightened severe tobacco and coffee staining by 7 shades in 45 minutes.',
      before: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      badge: 'Laser Whitening'
    },
    {
      id: 4,
      category: 'Implants',
      title: 'Anterior Tooth Implant & Crown',
      desc: 'Replaced fractured central incisor with immediate titanium implant and zirconia crown.',
      before: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
      badge: 'Permanent Implant'
    }
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold border border-teal-700/60">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span>Smile Design Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Smile Transformations & Results
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Real clinical results designed by Dr. Syamgeeth B R. Explore before & after case documentations across both Kollam clinics.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {['All', 'Veneers', 'Aligners', 'Whitening', 'Implants'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-teal-950 shadow-md'
                    : 'bg-teal-800/60 text-teal-200 hover:bg-teal-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Split Before / After Images with Solid Height */}
              <div className="grid grid-cols-2 gap-0 relative bg-slate-900">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={item.before}
                    alt={`${item.title} - Before`}
                    fill
                    sizes="(max-width: 768px) 50vw, 350px"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md">
                    Before
                  </span>
                </div>
                <div className="relative h-48 sm:h-64 overflow-hidden border-l border-white/20">
                  <Image
                    src={item.after}
                    alt={`${item.title} - After`}
                    fill
                    sizes="(max-width: 768px) 50vw, 350px"
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-teal-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md">
                    After
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400">Dr. Syamgeeth Case</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-300" />
                    <span>Get Similar Transformation</span>
                  </button>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-500 hover:text-teal-900"
                  >
                    View on Instagram →
                  </a>
                </div>
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

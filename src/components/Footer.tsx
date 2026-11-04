'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, MapPin, Phone, MessageSquare, Clock, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '@/data/clinicData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Doctor Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-gold-warm" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">Dr. Syamgeeth</p>
                <p className="text-[11px] text-teal-400 uppercase tracking-wider">Dental Studio & Smile Design</p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Led by Dr. Syamgeeth B R (BDS), we deliver bespoke cosmetic smile design, porcelain veneers, Invisalign, painless single-visit root canals, and advanced dental implants in Kollam, Kerala.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-teal-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-teal-900 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Telephone contact"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">All Treatments</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Dr. Syamgeeth</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Smile Transformations</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact & Locations</Link>
              </li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Popular Treatments</p>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-teal-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2 Branches in Kollam */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">2 Branches in Kollam</p>
            
            <div className="space-y-3 text-xs">
              {/* Branch 1 */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  Chathinamkulam Branch
                </p>
                <p className="text-slate-400 text-[11px] mt-1">
                  Near Mujahid Masjid, Chathinamkulam, Kollam
                </p>
                <p className="text-teal-300 text-[11px] mt-0.5">📞 +91 81293 69627</p>
              </div>

              {/* Branch 2 */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  Ezhukone Branch
                </p>
                <p className="text-slate-400 text-[11px] mt-1">
                  Archana Building, Ezhukone, Kollam
                </p>
                <p className="text-teal-300 text-[11px] mt-0.5">📞 +91 81293 69627</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Dr. Syamgeeth Dental Studio. All rights reserved. Kollam, Kerala.
          </p>

          <p className="text-[11px] text-center md:text-right max-w-md">
            Medical Disclaimer: Information provided is for educational purposes. Consult Dr. Syamgeeth for clinical diagnosis and customized treatment recommendations.
          </p>
        </div>

      </div>
    </footer>
  );
}

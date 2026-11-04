import React from 'react';
import Link from 'next/link';
import { Sparkles, Home, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinicData';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mx-auto shadow-inner">
          <Sparkles className="w-8 h-8 text-gold-warm" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Error 404</p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or may have been moved. Let&apos;s get you back on track to your healthiest smile.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-teal-700" />
            <span>Call Clinic</span>
          </a>
        </div>
      </div>
    </div>
  );
}

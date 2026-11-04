'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Zap, 
  Sun, 
  HeartHandshake, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Calendar 
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/clinicData';

interface ServicesOverviewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServicesOverview({ onOpenBooking }: ServicesOverviewProps) {
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

  return (
    <section className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5"
        >
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 text-teal-900 text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              <span>Comprehensive Dental Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              World-Class Dental Care, Designed for Your Comfort
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              From subtle cosmetic enhancements to advanced restorative implant procedures, Dr. Syamgeeth delivers gentle, precision-driven dental solutions in Kollam.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-900 hover:text-teal-700 transition-colors group self-start md:self-end pt-1"
          >
            <span>Explore All 8 Treatments In Detail</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-teal-300 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                {/* Image Cover */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Tag Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-teal-900 uppercase tracking-wider shadow-sm">
                    {service.tag}
                  </div>

                  {/* Icon badge floating at bottom right of image */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-900/90 text-white backdrop-blur-md flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Quick specs */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-teal-800">Duration:</span>
                    <span className="truncate max-w-[150px]">{service.duration}</span>
                  </div>

                  {/* Actions */}
                  <div className="pt-1 flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onOpenBooking(service.title)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Calendar className="w-3.5 h-3.5 text-teal-300" />
                      <span>Book Slot</span>
                    </motion.button>

                    <Link
                      href={`/services#${service.id}`}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                      title="View full procedure details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

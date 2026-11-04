'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';
import FloatingActions from '@/components/FloatingActions';

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const posts = [
    {
      id: "porcelain-veneers-vs-composite-bonding",
      title: "Porcelain Veneers vs Composite Bonding: Which Is Right for Your Smile?",
      excerpt: "Comparing durability, natural translucency, costs, and tooth preparation for smile makeovers in Kerala.",
      category: "Cosmetic Dentistry",
      date: "October 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "clear-aligners-guide-kollam",
      title: "The Comprehensive Guide to Clear Aligners & Invisalign in Kollam",
      excerpt: "How 3D intraoral planning moves teeth invisibly without embarrassing metal brackets or painful wires.",
      category: "Orthodontics",
      date: "September 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "single-visit-painless-root-canal",
      title: "Is Root Canal Treatment Really Painless? Modern Micro-Endodontics Explained",
      excerpt: "Debunking old dental myths: how computerized apex locators and rotary files save your infected tooth in 45 minutes.",
      category: "Endodontics",
      date: "August 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "teeth-whitening-maintenance-tips",
      title: "How to Maintain Gleaming White Teeth After In-Office Laser Whitening",
      excerpt: "Simple daily dietary choices and oral hygiene routines to keep your teeth sparkling up to 2 full years.",
      category: "Preventive Care",
      date: "July 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold border border-teal-700/60">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span>Oral Wellness Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Smile Insights & Dental Guides
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Written and reviewed by Dr. Syamgeeth B R to help you make informed decisions about your oral health and smile aesthetics.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 sm:h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-teal-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-teal-700" />
                      Dr. Syamgeeth B R
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer"
                  >
                    <span>Ask Doctor About This Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Floating CTA & Modal */}
      <FloatingActions onOpenBooking={() => setModalOpen(true)} />
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

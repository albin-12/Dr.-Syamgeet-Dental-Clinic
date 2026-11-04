'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesOverview from '@/components/ServicesOverview';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import DoctorSection from '@/components/DoctorSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TreatmentProcess from '@/components/TreatmentProcess';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BranchLocator from '@/components/BranchLocator';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import FloatingActions from '@/components/FloatingActions';
import AppointmentModal from '@/components/AppointmentModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedBranch, setSelectedBranch] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string, branch?: string) => {
    setSelectedService(service);
    setSelectedBranch(branch);
    setModalOpen(true);
  };

  return (
    <>
      {/* 1. Hero */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Overview */}
      <ServicesOverview onOpenBooking={(srv) => handleOpenBooking(srv)} />

      {/* 4. Interactive Before / After Comparison Drag Slider */}
      <BeforeAfterSlider onOpenBooking={() => handleOpenBooking('Cosmetic Smile Makeovers & Veneers')} />

      {/* 5. Meet Dr. Syamgeeth Section */}
      <DoctorSection onOpenBooking={() => handleOpenBooking()} />

      {/* 6. Why Choose Us (Tech, Painless, Sterilization) */}
      <WhyChooseUs />

      {/* 7. Treatment Process (4 Steps) */}
      <TreatmentProcess onOpenBooking={() => handleOpenBooking()} />

      {/* 8. Patient Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 9. Two Clinics in Kollam (Chathinamkulam & Ezhukone Interactive Locator) */}
      <BranchLocator onOpenBooking={(branch) => handleOpenBooking(undefined, branch)} />

      {/* 10. FAQ Accordion */}
      <FaqAccordion />

      {/* 11. Final High-Converting CTA Banner */}
      <CtaBanner onOpenBooking={() => handleOpenBooking()} />

      {/* 12. Floating Quick Actions (Mobile Fixed Bar + WhatsApp Orb) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* 13. Dynamic Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
        preselectedBranch={selectedBranch}
      />
    </>
  );
}

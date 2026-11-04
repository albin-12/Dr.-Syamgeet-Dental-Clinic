import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: 'Dr. Syamgeeth Dental Studio | Cosmetic Dentist & Smile Design in Kollam',
  description:
    'Experience painless, luxury dental care with Dr. Syamgeeth B R (BDS). Specializing in porcelain veneers, Invisalign clear aligners, dental implants & single-visit root canals across 2 Kollam branches (Chathinamkulam & Ezhukone).',
  keywords: [
    'Dentist in Kollam',
    'Best Dental Clinic Kollam',
    'Dr Syamgeeth',
    'Cosmetic Dentist Kerala',
    'Smile Design Kollam',
    'Porcelain Veneers Kollam',
    'Invisalign Kollam',
    'Dental Implants Kerala',
    'Chathinamkulam Dentist',
    'Ezhukone Dental Clinic',
    'Painless Root Canal Kollam'
  ],
  authors: [{ name: 'Dr. Syamgeeth B R' }],
  creator: 'Dr. Syamgeeth Dental Studio',
  publisher: 'Dr. Syamgeeth Dental Studio',
  metadataBase: new URL('https://drsyamgeethdental.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Syamgeeth Dental Studio & Smile Design Centre | Kollam',
    description:
      'Painless cosmetic dentistry, porcelain veneers, clear aligners & smile makeovers led by Dr. Syamgeeth B R across 2 branches in Kollam.',
    url: 'https://drsyamgeethdental.com',
    siteName: 'Dr. Syamgeeth Dental Studio',
    images: [
      {
        url: '/images/dr-syamgeeth.png',
        width: 800,
        height: 800,
        alt: 'Dr. Syamgeeth B R - Aesthetic Dentist Kollam',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Syamgeeth Dental Studio | Best Cosmetic Dentist in Kollam',
    description: 'Transform your smile with Dr. Syamgeeth B R across 2 Kollam clinics.',
    images: ['/images/dr-syamgeeth.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0b4f6c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white selection:bg-teal-900 selection:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

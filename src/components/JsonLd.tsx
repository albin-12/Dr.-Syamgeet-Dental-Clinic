import React from 'react';
import { CLINIC_INFO } from '@/data/clinicData';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: CLINIC_INFO.name,
    description: 'Premier cosmetic dental studio and smile design centre in Kollam, Kerala led by Dr. Syamgeeth B R.',
    telephone: CLINIC_INFO.phone,
    email: CLINIC_INFO.email,
    url: 'https://drsyamgeethdental.com',
    priceRange: '₹₹',
    image: 'https://drsyamgeethdental.com/images/dr-syamgeeth.png',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Near Mujahid Masjid, Chathinamkulam',
        addressLocality: 'Kollam',
        addressRegion: 'Kerala',
        postalCode: '691005',
        addressCountry: 'IN'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Archana Building, Ezhukone',
        addressLocality: 'Kollam',
        addressRegion: 'Kerala',
        postalCode: '691505',
        addressCountry: 'IN'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:30',
        closes: '19:30'
      }
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Syamgeeth B R',
      jobTitle: 'Chief Cosmetic Dentist & Smile Designer',
      alumniOf: 'Bachelor of Dental Surgery (BDS)'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '850'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

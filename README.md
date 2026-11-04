# Dr. Syamgeeth Dental Studio & Smile Design Centre 🦷✨

A luxury, high-converting web application custom-built for **Dr. Syamgeeth B R** (BDS, Cosmetic Dentist & Smile Designer) in Kollam, Kerala.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, inspired by premium modern medical and boutique wellness themes.

---

## 🌟 Key Features Built

1. **Brand Identity & Dual Branch System**:
   - **Chathinamkulam Branch**: Near Mujahid Masjid, Chathinamkulam, Kollam.
   - **Ezhukone Branch**: Archana Building, Ezhukone, Kollam.
   - Interactive branch switchers with address, landmarks, consultation hours, and Google Maps integration.

2. **Hero & Real Doctor Showcase**:
   - High-converting headline: *"Your Healthiest, Most Confident Smile Starts Here"*
   - Features **Dr. Syamgeeth's authentic photo** (`public/images/dr-syamgeeth.png`) with animated trust badges, verified `@dr.syamgeeth` Instagram community counter (12.4K+ followers), and 4.9★ Google Reviews score.

3. **Interactive Before/After Drag Slider**:
   - Touch & mouse draggable comparison canvas showcasing cosmetic porcelain veneers, clear aligners, and laser teeth whitening results.

4. **All 8 Core Dental Treatments**:
   - Cosmetic Smile Makeovers & Porcelain Veneers
   - Invisalign & Clear Aligners
   - Advanced Dental Implants
   - Painless Single-Sitting Root Canal (Micro-Endodontics)
   - Laser & Zoom Teeth Whitening
   - Pediatric & Gentle Kids Dentistry
   - General & Preventive Scaling / Air-Polishing
   - Emergency Dental Care & 24/7 Pain Relief

5. **Priority WhatsApp & Online Booking Funnel**:
   - Modal booking form that forwards appointment inquiries directly to Dr. Syamgeeth's WhatsApp (`+91 81293 69627`) with branch, procedure, and preferred time pre-formatted.
   - Floating WhatsApp button and sticky mobile quick-action bar.

6. **SEO & Structured Data**:
   - Complete `Dentist` and `LocalBusiness` JSON-LD schema markup with both Kollam postal codes and geo coordinates.
   - OpenGraph metadata, Twitter cards, dynamic `sitemap.xml`, and `robots.txt`.

---

## 📁 Project Architecture & Content Editing

All copy, contact details, branch addresses, and procedures are centralized in one clean TypeScript file for easy maintenance:

```
src/
├── app/
│   ├── layout.tsx         # Global fonts, metadata, JSON-LD schema
│   ├── page.tsx           # Luxury Homepage
│   ├── services/page.tsx  # Deep dive into all 8 dental services
│   ├── about/page.tsx     # Dr. Syamgeeth's journey, team, & philosophy
│   ├── gallery/page.tsx   # Filterable smile transformations gallery
│   ├── contact/page.tsx   # Both branch maps & direct booking form
│   ├── blog/page.tsx      # SEO educational dental articles
│   ├── not-found.tsx      # Branded custom 404 page
│   ├── sitemap.ts         # Dynamic search engine sitemap
│   └── robots.ts          # Search crawler directives
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphism header & mobile drawer
│   ├── Hero.tsx           # High-converting hero section with doctor portrait
│   ├── TrustBar.tsx       # Credibility numbers (12k+ smiles, 10+ yrs)
│   ├── ServicesOverview.tsx # Treatment cards with modal triggers
│   ├── BeforeAfterSlider.tsx # Drag/touch comparison slider
│   ├── DoctorSection.tsx  # Meet Dr. Syamgeeth B R
│   ├── WhyChooseUs.tsx    # Sterilization & painless tech standards
│   ├── BranchLocator.tsx  # Interactive Kollam branch tabbed map
│   ├── TestimonialsCarousel.tsx # Google patient review stories
│   ├── TreatmentProcess.tsx # 4-step roadmap
│   ├── FaqAccordion.tsx   # Interactive collapsible FAQ
│   ├── CtaBanner.tsx      # Final conversion banner
│   ├── AppointmentModal.tsx # Booking modal with WhatsApp sync
│   └── FloatingActions.tsx # Mobile sticky bar + floating WhatsApp orb
├── data/
│   └── clinicData.ts      # ⚡ CENTRAL SOURCE FOR ALL TEXT, CLINIC DATA & BRANCHES
public/
└── images/
    ├── dr-syamgeeth.png   # Doctor's real portrait photo
    └── dr-instagram.png   # Reference profile
```

---

## ✏️ How to Edit Content & Images

### 1. Changing Phone, WhatsApp, Branch or Doctor Info
Open [`src/data/clinicData.ts`](file:///c:/Users/Albin%20Joby/Desktop/Dr%20Samgeeth/src/data/clinicData.ts):
- Update `CLINIC_INFO.phone` or `CLINIC_INFO.whatsapp`.
- Modify branch addresses, opening hours, or Google Maps links in `CLINIC_INFO.branches`.
- Update testimonials or FAQs directly in `TESTIMONIALS_DATA` and `FAQ_DATA`.

### 2. Changing the Doctor Photo or Adding Clinic Images
- Replace `public/images/dr-syamgeeth.png` with any new high-resolution photo of Dr. Syamgeeth.
- To add real clinic interior/operatory photos, place them in `public/images/` and reference them in `clinicData.ts` or page files.

### 3. Adjusting Brand Colors
Open [`tailwind.config.js`](file:///c:/Users/Albin%20Joby/Desktop/Dr%20Samgeeth/tailwind.config.js):
- `teal.900`: Deep medical luxury teal (`#0b4f6c`)
- `brand.500`: Fresh medical cyan (`#0ea5e9`)
- `gold.luxury`: Gold accents (`#D4AF37`)

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Or build & start production server
npm run build
npm run start
```
Visit **`http://localhost:3000`** in any desktop or mobile browser.
